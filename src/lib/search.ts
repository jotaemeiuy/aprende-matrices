import { modules } from "../data/modules.ts";

export interface SearchEntry {
  moduleId: string;
  moduleTitle: string;
  slug: string;
  title: string;
  kind: "teoria" | "practica";
}

export function buildSearchIndex(): SearchEntry[] {
  return modules.flatMap((mod) =>
    mod.lessons.map((lesson) => ({
      moduleId: mod.id,
      moduleTitle: mod.title,
      slug: lesson.slug,
      title: lesson.title,
      kind: lesson.kind,
    })),
  );
}

export function filterLessons(entries: SearchEntry[], query: string): SearchEntry[] {
  const q = query.trim().toLowerCase();
  if (q === "") return entries;
  return entries.filter(
    (e) =>
      e.title.toLowerCase().includes(q) ||
      e.moduleTitle.toLowerCase().includes(q),
  );
}
