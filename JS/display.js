var qs = new URLSearchParams(window.location.search);
console.log(qs);
n = qs.get("i");
sec = qs.get("parameter");
console.log(sec);

var xml = new XMLHttpRequest();
xml.open("GET", "Qoutes_APIs.json");
xml.send();

xml.addEventListener("readystatechange", function () {
    if (xml.readyState == 4 && xml.status == 200) {
        response = JSON.parse(xml.response);
        console.log(response);
        var definesec = sec
        console.log(definesec);
        var productIdToFind = +n;
        var foundProduct = response[sec].find(sec => sec.id === productIdToFind);
        console.log(foundProduct)
        var author = foundProduct.author
        var image = foundProduct.image
        var content = foundProduct.content






        var div = document.getElementById("rowBody")
        var divcon = document.getElementById("con")
        var divph = document.createElement("div")
        div.appendChild(divph)
        
        var p = document.createElement("p") //content 
        p.innerHTML = content
        

        var h1tag = document.createElement ("h1") //to creat tag
        h1tag.innerHTML = author //new tag for author
        

        var divimg = document.createElement("div")
        divimg.setAttribute("class", "image")
        var img = document.createElement("img") //image
        img.src = image
  
        div.innerHTML = ""
    

        div.setAttribute("class", "personal-image")

        img.setAttribute ("class", "imageQuotes") //image style
        h1tag.setAttribute ("class", "AuthorName") //author style
        p.setAttribute ("class", "ContentQuote") //content style

        divimg.appendChild(img)
        div.appendChild(divimg)
        divph.appendChild(p)
        divph.appendChild(h1tag)
        divcon.append(divph)

      
        
       
    }
});
