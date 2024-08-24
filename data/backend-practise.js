const xhr = new XMLHttpRequest();

xhr.addEventListener('load' , ()=>{
    xhr.response
});

xhr.open('GET' , 'http://supersimplebackend.dev');

xhr.send();