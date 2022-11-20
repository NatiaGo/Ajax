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



