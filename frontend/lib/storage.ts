export function saveHistory(item: string) {
  const old = JSON.parse(localStorage.getItem("history") || "[]");
  old.push(item);
  localStorage.setItem("history", JSON.stringify(old));
}

export function loadHistory(): string[] {
  return JSON.parse(localStorage.getItem("history") || "[]");
}
