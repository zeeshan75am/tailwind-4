let cvDownload = document.querySelector("#cv");

function downloadCV() {
    const link = document.createElement("a");
    
    link.href = "assets/zeeshan.pdf";
    link.download = "zeeshan.pdf";

    link.click();
     cvDownload.onclick = downloadCV();

}
downloadCV();

