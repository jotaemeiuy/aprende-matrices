import type { RemarkPlugin } from "@astrojs/markdown-remark";

const BOX_CONTAINER: Record<string, string> = {
  definicion:
    "my-6 rounded-xl border border-blue-400/20 border-l-4 border-l-blue-500 bg-blue-500/10 p-4 sm:p-5",
  ejemplo:
    "my-6 rounded-xl border border-emerald-400/20 border-l-4 border-l-emerald-500 bg-emerald-500/10 p-4 sm:p-5",
  propiedad:
    "my-6 rounded-xl border border-orange-400/20 border-l-4 border-l-orange-500 bg-orange-500/10 p-4 sm:p-5",
  observacion:
    "my-6 rounded-xl border border-amber-400/20 border-l-4 border-l-amber-400 bg-amber-400/10 p-4 sm:p-5",
  ejercicio:
    "my-6 rounded-xl border border-cyan-400/20 border-l-4 border-l-cyan-400 bg-cyan-400/10 p-4 sm:p-5",
};

const BOX_TITLE: Record<string, string> = {
  definicion: "mb-2 text-sm font-bold uppercase tracking-wide text-blue-300",
  ejemplo: "mb-2 text-sm font-bold uppercase tracking-wide text-emerald-300",
  propiedad: "mb-2 text-sm font-bold uppercase tracking-wide text-orange-300",
  observacion: "mb-2 text-sm font-bold uppercase tracking-wide text-amber-300",
  ejercicio: "mb-2 text-sm font-bold uppercase tracking-wide text-cyan-300",
};

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function toTitle(label: string, titleClass: string): Record<string, unknown> {
  return {
    type: "paragraph",
    children: [{ type: "text", value: label }],
    data: { hProperties: { className: titleClass.split(" ") } },
  };
}

function visit(node: unknown): void {
  if (!isObject(node)) return;
  if (node.type === "containerDirective" && typeof node.name === "string") {
    const containerClass = BOX_CONTAINER[node.name];
    const titleClass = BOX_TITLE[node.name];
    if (containerClass !== undefined && titleClass !== undefined) {
      node.data = {
        hName: "div",
        hProperties: { className: containerClass.split(" ") },
      };
      if (typeof node.label === "string" && node.label.length > 0) {
        const children = Array.isArray(node.children) ? node.children : [];
        node.children = [toTitle(node.label, titleClass), ...children];
      }
    }
  }
  if (Array.isArray(node.children)) {
    for (const child of node.children) visit(child);
  }
}

export const remarkBoxes: RemarkPlugin = () => {
  return (tree) => {
    visit(tree);
  };
};
