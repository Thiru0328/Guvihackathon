let btnDownload = document.querySelector("button");
btnDownload.addEventListener("click", startDownload);
async function startDownload() {
  let url = "test.pdf";
  let fileName = "My Document";
  const res = await fetch(url);
  const blob = await res.blob();
  saveAs(blob, fileName);
}