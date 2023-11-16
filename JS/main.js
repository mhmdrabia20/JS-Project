
//to get random num
var randomInspiring = Math.floor(Math.random() * (6 - 1)) + 1; 
var randomHappiness = Math.floor(Math.random() * (11 - 6)) + 6;
var randomMorning = Math.floor(Math.random() * (16 - 11)) + 11;  
var randomLove = Math.floor(Math.random() * (21 - 16)) + 16;
var randomWisdom = Math.floor(Math.random() * (26 - 21)) + 21;



//get item Inspiring when click button
function getItemInspiring(n) {
    location.href="Page_3.html?parameter=Inspiring&i="+n
   }

//get item Happiness when click button
function getItemHappiness(n) {
    location.href="Page_3.html?parameter=Happiness&i="+n
   }

//get item Morning when click button
function getItemMorning(n) {
    location.href="Page_3.html?parameter=Morning&i="+n
   }

//get item Love when click button
function getItemLove(n) {
    location.href="Page_3.html?parameter=Love&i="+n
   }

//get item Wisdom when click button
function getItemWisdom(n) {
    location.href="Page_3.html?parameter=Wisdom&i="+n
   }

//get item userdefined when click button

       // Load quotes from localStorage on page load
       window.onload = function () {
        loadQuotes();
    };

    function AddToList() {
        var quoteInput = document.getElementById('quoteInput');
        var authorInput = document.getElementById('authorInput');
        var quote = quoteInput.value;
        var author = authorInput.value;
        if (quote.trim() === '' || author.trim() === '') {
            alert('Please enter a valid quote and author.');
            return;
        }

        // Save the quote to localStorage
        saveQuote(quote, author);

        quoteInput.value = '';
        authorInput.value = '';
        loadQuotes(); // Reload the list of quotes
    }

    // Save quote to localStorage
    function saveQuote(quote, author) {
        let quotes = JSON.parse(localStorage.getItem('quotes')) || [];
        let authors = JSON.parse(localStorage.getItem('authors')) || [];
        quotes.push(quote);
        authors.push(author);
        localStorage.setItem('quotes', JSON.stringify(quotes));
        localStorage.setItem('authors', JSON.stringify(authors));
    }

    // Load quotes from localStorage
    function loadQuotes() {
        var quoteList = document.getElementById('quoteList');
        let quotes = JSON.parse(localStorage.getItem('quotes')) || [];
        let authors = JSON.parse(localStorage.getItem('authors')) || [];
        quoteList.innerHTML = ''; // Clear the list before repopulating

        for (let i = 0; i < quotes.length; i++) {
            var listItem = document.createElement('li');
            listItem.innerHTML = `"${quotes[i]}" - ${authors[i]} 
                <button class="quoteButton" onclick="showQuote('${quotes[i]}', '${authors[i]}')">Show Quote</button>
                <button class="quoteButton" onclick="removeQuote('${quotes[i]}', '${authors[i]}')">Remove Quote</button>`;
            quoteList.appendChild(listItem);
        }
    }

    function removeQuote(quote, author) {
        let quotes = JSON.parse(localStorage.getItem('quotes')) || [];
        let authors = JSON.parse(localStorage.getItem('authors')) || [];
        const index = quotes.indexOf(quote);

        if (index !== -1) {
            quotes.splice(index, 1);
            authors.splice(index, 1);
        }

        localStorage.setItem('quotes', JSON.stringify(quotes));
        localStorage.setItem('authors', JSON.stringify(authors));
        loadQuotes(); // Reload the list of quotes
    }

    // Show the quote in an alert
    function showQuote(quote, author) {
        alert(`Quote: "${quote}" - ${author}`);
    }

  

//get item Creators when click button
function Creators() {
    location.href="Creators.html"
   }


//get item game when click button
function getgame() {
    location.href="game.html"
   }


//get item by user id when click button
var input = document.getElementById("p")
var n = Number(input.value)
console.log(n)
function getItemid(n) { if(n > 0 && n < 6)
    {location.href="Page_3.html?parameter=Inspiring&i="+n;}
else if(n >= 6 && n < 11)
{location.href="Page_3.html?parameter=Happiness&i="+n;}
else if(n >= 11 && n < 16)
{location.href="Page_3.html?parameter=Morning&i="+n;}
else if(n >= 16 && n < 21)
{location.href="Page_3.html?parameter=Love&i="+n;}
else if(n >= 21 && n < 26)
{location.href="Page_3.html?parameter=Wisdom&i="+n;}
else{alert("Choose a Number From (1:25)")}    
    
}










































 // getItemInspiri()
    // var xml = new XMLHttpRequest();
    // xml.open("GET", "test.json");
    // xml.send();

    // xml.addEventListener("readystatechange", function () {
    //     if (xml.readyState == 4 && xml.status == 200) {
    //         response = JSON.parse(xml.response);

    //         // console.log(res.Inspiring);
    //         var productIdToFind = n;
    //         var foundProduct = response.Inspiring.find(Inspiring => Inspiring.id === productIdToFind);
    //         // console.log(foundProduct)
    //             var author = foundProduct.author
    //             var image = foundProduct.image
    //             var content = foundProduct.content
    //         //  var div = document.createElement("div")
    //             var div = document.getElementById("rowBody")
    //             var p = document.createElement("p")
    //             p.innerHTML = author + "<br>" + content
    //             var img = document.createElement("img")
    //             img.src = image
    //            p.append(img)
    //            div.innerHTML=""
    //            div.setAttribute("class", "item")
    //             div.append(p)   
    //     }
    // });