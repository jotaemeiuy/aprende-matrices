import { modules } from "../data/modules.ts";

export interface SearchEntry {
  moduleId: string;
  moduleTitle: string;
  slug: string;
  title: string;
  description: string;
  kind: "teoria" | "practica";
}

export interface LessonEntryData {
  module: string;
  slug: string;
  title: string;
  description: string;
  kind: "teoria" | "practica";
  order: number;
}

export function buildSearchIndex(
  lessons: { data: LessonEntryData }[],
): SearchEntry[] {
  const moduleTitle = new Map(modules.map((m) => [m.id, m.title]));
  const modulePosition = new Map(modules.map((m, i) => [m.id, i]));
  return lessons
    .map((lesson) => ({ data: lesson.data }))
    .sort((a, b) => {
      const positionA = modulePosition.get(a.data.module) ?? Number.MAX_SAFE_INTEGER;
      const positionB = modulePosition.get(b.data.module) ?? Number.MAX_SAFE_INTEGER;
      return positionA !== positionB
        ? positionA - positionB
        : a.data.order - b.data.order;
    })
    .map((lesson) => ({
      moduleId: lesson.data.module,
      moduleTitle: moduleTitle.get(lesson.data.module) ?? lesson.data.module,
      slug: lesson.data.slug,
      title: lesson.data.title,
      description: lesson.data.description,
      kind: lesson.data.kind,
    }));
}

export function filterLessons(entries: SearchEntry[], query: string): SearchEntry[] {
  const q = query.trim().toLowerCase();
  if (q === "") return entries;
  return entries.filter(
    (e) =>
      e.title.toLowerCase().includes(q) ||
      e.moduleTitle.toLowerCase().includes(q) ||
      e.description.toLowerCase().includes(q),
  );
}
