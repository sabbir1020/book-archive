const searchBook = ()=>{
    const bookSearch = document.getElementById('Search-book-field').value;
    // console.log(bookSearch)
    document.getElementById('Search-book-field').value ='';
    const url  = `https://openlibrary.org/search.json?q=${bookSearch}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayResult(data.docs))
    // console.log(data)
}
    const displayResult = docs =>{
        const searchResult = document.getElementById('search-result')
        // clear 
        // searchResult ='';
        docs.forEach(doc=>{
          
            console.log(doc)
            const div = document.createElement('div')
            div.classList.add('col')
            div.innerHTML = `
            <div class="card h-100">
               <img width="200px" height="400px" src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Book Name:${doc.title}</h5>
                    <h5 class="card-title">Author Name:${doc.author_name}</h5>
                    <h5 class="card-title">Publish Date:${doc.publish_date}</h5>
                </div>
           </div>
            `;
            searchResult.appendChild(div)
        })
        // console.log(docs)
    }




