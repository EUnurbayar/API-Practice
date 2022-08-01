const form = document.querySelector('form');
const input = document.querySelector('#city-name');
const city = document.querySelector('.city');
const temp = document.querySelector('.temp');


form.addEventListener('submit', (event)=>{
    event.preventDefault();
    let url =`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=3d022115447ec1ea0b3f2afecf0b1c9`
   

    fetch(url)
        .then(res => res.json())
        .then(res =>{
            console.log(res)
        })
        .catch(error => 
            console.log(error)
        )
})


