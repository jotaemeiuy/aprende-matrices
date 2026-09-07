export interface StoredVisit {
  key: string;
  at: number;
}

export interface ProgressState {
  visited: string[];
  last?: StoredVisit;
}

export interface ModuleSlugs {
  [moduleId: string]: string[];
}

export interface ContinueLesson {
  slug: string;
  title: string;
}

export interface ContinueModule {
  id: string;
  title: string;
  lessons: ContinueLesson[];
}

const STORAGE_KEY = "aprende-matrices-progreso-v1";

function isStoredVisit(value: unknown): value is StoredVisit {
  if (typeof value !== "object" || value === null) return false;
  const record = value as Record<string, unknown>;
  return typeof record.key === "string" && typeof record.at === "number";
}

export function loadProgress(): ProgressState {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { visited: [] };
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null) return { visited: [] };
    const record = parsed as Record<string, unknown>;
    const visited = Array.isArray(record.visited)
      ? record.visited.filter((v): v is string => typeof v === "string")
      : [];
    const last = isStoredVisit(record.last) ? record.last : undefined;
    return last ? { visited, last } : { visited };
  } catch {
    return { visited: [] };
  }
}

export function saveProgress(state: ProgressState): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Almacenamiento no disponible: el progreso solo vive en memoria.
  }
}

export function markVisited(moduleId: string, slug: string): ProgressState {
  const state = loadProgress();
  const key = `${moduleId}/${slug}`;
  if (!state.visited.includes(key)) state.visited.push(key);
  state.last = { key, at: Date.now() };
  saveProgress(state);
  return state;
}

export function modulePercent(
  visited: string[],
  moduleId: string,
  slugs: string[],
): number {
  if (slugs.length === 0) return 0;
  const seen = new Set(visited);
  const done = slugs.filter((s) => seen.has(`${moduleId}/${s}`)).length;
  return Math.round((done / slugs.length) * 100);
}
