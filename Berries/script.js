const url = "https://pokeapi.co/api/v2/berry";
const ul = document.querySelector('.berries');
fetch(url)
    .then(res => res.json())
    .then(res => {
        console.log(res)
        res.results.forEach((berry) =>{
            const a = document.createElement('a');
            a.innerText = berry.name;
            a.setAttribute('href', berry.url);
            const li = document.createElement('li');
            // li.innerText = berry.name;
            li.appendChild(a);
            ul.appendChild(li);
        });
    })
    .catch(err => console.log(err));