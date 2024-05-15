let searchBox = document.querySelector("#searchBox"); 
let form = document.querySelector("form"); 
let img_container = document.querySelector("#img_container"); 
let loadBtn = document.querySelector("#loadBtn"); 

let keyword = ""; 
let page = 1; 



async function getImages() {
    
    keyword = searchBox.value; 
    const url = `https://api.unsplash.com/search/photos?${page}&query=${keyword}&client_id=G8nmITR91JEcrHZSSAO11cWKBjd5OZpmqqCllonFDxo&per_page=30`; 

    const responses = await fetch(url); 
    const data = await responses.json(); 

    if (page === 1 ) {
        img_container.innerHTML = ""; 
    }

    let results = data.results; 

    console.log(results);

    results.map((result) => {
        const image = document.createElement("img"); 
        image.src = result.urls.regular; 
        img_container.appendChild(image); 
    }); 
    loadBtn.style.display = "block"; 
}



form.addEventListener("submit",(e) => {
    e.preventDefault(); 
    page = 1; 
    getImages(); 
}); 


loadBtn.addEventListener("click", () => {
    page++;
    getImages();  
}); 