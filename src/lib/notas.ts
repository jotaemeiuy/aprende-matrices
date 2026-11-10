/**
 * Consulta de notas por cédula (CI) para el grupo 2MF.
 *
 * Cada alumno se cifra con AES-256-GCM usando una clave derivada de su
 * propia cédula (PBKDF2-SHA256). La página pública solo contiene blobs
 * cifrados: el navegador deriva la clave con el CI escrito y descifra el
 * registro que valide el tag de autenticación. Sin backend, sin claves
 * en claro y sin CIs en el bundle.
 *
 * Este módulo se usa tanto en build (Node, Web Crypto global) como en el
 * navegador, por lo que solo depende de estándares web.
 */

export const PBKDF2_ITERATIONS = 100_000;
export const SALT_NOTAS = "2MF::ETAS::notas::2026";
const IV_BYTES = 12;

export interface PruebaNota {
  fecha: string;
  tipo: string;
  periodo: string;
  valor: string | null;
  comentario: string | null;
}

export interface AlumnoNotas {
  nombre: string;
  pruebas: PruebaNota[];
  recuperar: string[];
}

export interface NotasPayload {
  fecha: string;
  registros: string[];
}

const PLAIN = "AES-GCM";

async function deriveKey(ci: string): Promise<CryptoKey> {
  const base = await globalThis.crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(ci),
    "PBKDF2",
    false,
    ["deriveKey"],
  );
  return globalThis.crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: new TextEncoder().encode(SALT_NOTAS),
      iterations: PBKDF2_ITERATIONS,
      hash: "SHA-256",
    },
    base,
    { name: PLAIN, length: 256 },
    false,
    ["encrypt", "decrypt"],
  );
}

function bytesToBase64(bytes: Uint8Array): string {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary);
}

function base64ToBytes(base64: string): Uint8Array<ArrayBuffer> {
  const binary = atob(base64);
  const bytes = new Uint8Array(new ArrayBuffer(binary.length));
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

/** Deja solo dígitos, para tolerar formatos tipo "5.811.938-8". */
export function normalizarCi(value: string): string {
  return value.replace(/\D/g, "");
}

/** CI uruguayo: entre 7 y 8 dígitos. */
export function ciValida(value: string): boolean {
  return /^\d{7,8}$/.test(value);
}

/** Cifra el registro del alumno con la clave derivada de su CI. */
export async function cifrarAlumno(
  payload: AlumnoNotas,
  ci: string,
): Promise<string> {
  const key = await deriveKey(normalizarCi(ci));
  const iv = globalThis.crypto.getRandomValues(new Uint8Array(IV_BYTES));
  const encrypted = await globalThis.crypto.subtle.encrypt(
    { name: PLAIN, iv },
    key,
    new TextEncoder().encode(JSON.stringify(payload)),
  );
  return `${bytesToBase64(iv)}:${bytesToBase64(new Uint8Array(encrypted))}`;
}

/**
 * Descifra un blob con el CI del alumno. Falla (rechaza) si el CI no
 * corresponde, porque el tag de autenticación de AES-GCM no valida.
 */
export async function descifrarAlumno(
  blob: string,
  ci: string,
): Promise<AlumnoNotas> {
  const [ivBase64, contenidoBase64] = blob.split(":");
  if (!ivBase64 || !contenidoBase64) throw new Error("registro inválido");
  const key = await deriveKey(normalizarCi(ci));
  const decrypted = await globalThis.crypto.subtle.decrypt(
    { name: PLAIN, iv: base64ToBytes(ivBase64) },
    key,
    base64ToBytes(contenidoBase64),
  );
  return JSON.parse(
    new TextDecoder().decode(decrypted),
  ) as AlumnoNotas;
}

/**
 * Busca entre los blobs cifrados el registro cuyo CI coincida.
 * Devuelve null si ninguno valida.
 */
export async function buscarAlumno(
  registros: readonly string[],
  ci: string,
): Promise<AlumnoNotas | null> {
  for (const registro of registros) {
    try {
      return await descifrarAlumno(registro, ci);
    } catch {
      // Blob de otro alumno: el tag no valida y no revela datos.
    }
  }
  return null;
}
