// Shared Contentful rich-text (Document) builders reused by every publish-batch script.
export function p(text) {
  return {
    nodeType: "paragraph",
    data: {},
    content: [{ nodeType: "text", value: text, marks: [], data: {} }],
  };
}

export function h2(text) {
  return {
    nodeType: "heading-2",
    data: {},
    content: [{ nodeType: "text", value: text, marks: [], data: {} }],
  };
}

export function ul(items) {
  return {
    nodeType: "unordered-list",
    data: {},
    content: items.map((item) => ({
      nodeType: "list-item",
      data: {},
      content: [p(item)],
    })),
  };
}

export function doc(...content) {
  return {
    nodeType: "document",
    data: {},
    content,
  };
}
