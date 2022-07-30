console.log("hello space");

const url = "https://pokeapi.co/api/v2/pokemon/";


const form = document.querySelector('form');
// console.log(form);
const h1 = document.querySelector('#poke-name');
// console.log(h1);
const img = document.querySelector('#poke-image');
// console.log(img);
const input = document.querySelector('[type="text"]');
// console.log(input);

form.addEventListener('submit', (event)=>{
    event.preventDefault()
    // console.log(input.value)

    fetch(`${url}${input.value}`)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            h1.innerText = res.name;
            img.setAttribute('src', res.sprites.front_default)
          
        })
        .catch()
});




// fetch(url)
//     .then((res) =>res.json())
//     .then((res) =>{
//         console.log(res)
//     });