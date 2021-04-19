const todoForm = document.querySelector('#todoForm');
const btn = document.querySelector('#btn');

btn.addEventListener('click', function(){

    const form = new FormData(todoForm);

    for(var key of form.keys()){
        console.log(form.get(key));  
    }
})