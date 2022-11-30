function onLoad() {
    var urlParams = new URLSearchParams(window.location.search);
    var s = urlParams.get('s');
    if (s != null){
        changeCSS('styles/'+urlParams.get('s')+'.css', 0);
    }
}

function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);




    newstyle = cssFile.slice(7,-4);
    newbutton = "80s";
    if (newstyle == "80s"){
        newbutton = "simple";
    }
    document.getElementById("themechangelink").setAttribute("onClick", "changeCSS('styles/"+newbutton+".css', 0);");
    document.getElementById("themechangelink").innerHTML = newstyle;
    document.getElementById("logo").setAttribute("src", "styles/assets/"+newstyle+"juneeventlogo.png");
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}





