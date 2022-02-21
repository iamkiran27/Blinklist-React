export function openExplore() {
  if (document.getElementById("explore")?.style.display === "none") {
    const ele = document.getElementById("explore") as HTMLElement;
    ele.style.display = "block";
    ele.style.position = "absolute";

    ele.style.zIndex = "999";
  } else {
    const ele = document.getElementById("explore") as HTMLElement;
    ele.style.display = "none";
  }
}
