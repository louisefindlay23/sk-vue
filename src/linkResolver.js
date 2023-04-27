// TODO: Convert to route resolver
export function linkResolver(document) {
  switch (document.type) {
    case "posts":
      return "/blog/" + document.uid;
    case "home":
      return "/";
    case "pages":
      return "/:uid";
  }
}
