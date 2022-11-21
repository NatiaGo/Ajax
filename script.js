'use strict';

// fetch 

let ul = document.getElementById("list")

fetch("https://reqres.in/api/unknown", {
    METHOD: "GET"
})
.then(function(nameYear){
    if (nameYear.status !== 200){
        throw nameYear.status;
    }
    return nameYear.json();
})
.then(function(nameYearConverted){
    nameYearConverted.data.forEach((element) => {
        let li = document.createElement("li")
        li.innerText = `${element.name} ${element.year}`;
        ul.appendChild(li);
    });
})
.catch(function(error){
    if(error == 404){
        let p = document.createElement("p");
        p.innerText = "Page not found";
        ul.appendChild(p);
    }
})


// XML
let currentPage = 1;
let totalPages;

function getUsers(page){

let requist = new XMLHttpRequest ();

requist.addEventListener ('load', function(){
let text = requist.responseText ;
let jsText = JSON.parse(text)

const fragment = new DocumentFragment();

jsText.data.forEach(item => {
    let li = document.createElement('li');

    li.innerText = `${item.first_name} ${item.last_name}`;
    fragment.appendChild(li);
});
    document.getElementById('ul-users').innerHTML =" ";  
    document.getElementById('ul-users').appendChild(fragment);
    totalPages = jsText.total_pages;
});


requist.addEventListener('error', function(){
    p.tcontent = 'Server Error';

    document.getElementById('api-users').appendChild(p);
});


requist.open('GET', 'https://reqres.in/api/users?page=' + page);
requist.send();

}

document.getElementById('prepage').addEventListener('click', function(){
    if(currentPage==1) {
    return; 
}
    currentPage -= 1;
    getUsers(currentPage);
});

document.getElementById('nextPage').addEventListener('click', function(){ 
    if (currentPage == totalPages){
        return;
    }
    
    currentPage += 1;
    getUsers(currentPage);
});

getUsers(currentPage);

