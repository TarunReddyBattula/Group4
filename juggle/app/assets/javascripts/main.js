/**
 * Created by San on 2/17/2017.
 */
 var divx = "ccc";
 function noters(){
     var divis = document.getElementById('noting');
     var texting = document.getElementById("noteName");
    if (divis.style.display !== 'none') {
        divis.style.display = 'none';
        texting.innerHTML = "Edit Notes";
    }
    else {
        divis.style.display = 'block';
        texting.innerHTML = "Notes";
    }
 }
// ===============================================================================================================
function initData(){
    if(divx != "ccc"){
        document.getElementById("videosDAta").innerHTML = '<p id ="xxxx">'+divx+'</p>';
    }
    var frame = document.getElementById("videoData");
    frame.src = "";
}
function init() {
    var frame = document.getElementById("videoData");
    frame.width = window.innerWidth * 0.5;
    frame.height = window.innerHeight ;
}
// ============================================================================================================
function initSearch() {
    if(divx == "ccc"){
    divx = document.getElementById("xxxx").innerHTML;
    document.getElementById("videosDAta").innerHTML = "";
    }
    var frame = document.getElementById("videoData");
    frame.src = "https://duckduckgo.com/";
}
// ============================================================================================================
function initWiki() {
    if(divx == "ccc"){
    var xx = document.getElementById("myInput").value;
    divx = document.getElementById("xxxx").innerHTML;
    }
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