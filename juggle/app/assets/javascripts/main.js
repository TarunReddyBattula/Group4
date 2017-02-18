/**
 * Created by San on 2/17/2017.
 */
 var divx = "ccc";
// ===============================================================================================================
function initData(){
    if(divx != "ccc"){
        document.getElementById("videosDAta").innerHTML = '<p id ="xxxx">'+divx+'</p>';
    }
}
function init() {
    var frame = document.getElementById("videoData");
    frame.width = window.innerWidth * 0.5;
    frame.height = window.innerHeight ;
}
// ============================================================================================================
function initSearch() {
    divx = document.getElementById("xxxx").innerHTML;
    document.getElementById("videosDAta").innerHTML = "";
    var frame = document.getElementById("videoData");
    frame.src = "https://duckduckgo.com/";
}
// ============================================================================================================
function initWiki() {
    var xx = document.getElementById("myInput").value;
    divx = document.getElementById("xxxx").innerHTML;
    document.getElementById("videosDAta").innerHTML = "";
    var frame = document.getElementById("videoData");
    frame.src = "https://www.wikipedia.org/wiki/"+xx;
}
// ============================================================================================================

// ===============================================================================================================

function saveTextAsFile()
{
    var textToSave = document.getElementById("inputTextToSave").value;
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value;
 
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
 
    downloadLink.click();
}
 
function destroyClickedElement(event)
{
    document.body.removeChild(event.target);
}