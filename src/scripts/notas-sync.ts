import { sincronizarNotas } from "../lib/notas-sync.ts";

const { fecha, registros } = await sincronizarNotas();
console.log(
  `src/data/notas-payload.json actualizado: ${registros.length} registros cifrados (fecha ${fecha}).\n` +
    "Revisá el diff, hace commit y push: Vercel se actualiza con los blobs cifrados.",
);
