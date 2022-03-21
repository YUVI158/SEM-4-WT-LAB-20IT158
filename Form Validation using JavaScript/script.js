let err1=document.querySelector('.err1');
let err2=document.querySelector('.err2');
err1.style.display="none";
err2.style.display="none";
let email=document.querySelector('#email');
let pass=document.querySelector('#pass');
let submit=document.querySelector('button');
submit.addEventListener('click',()=>{
    if(email.value==''){
        // alert('enter email');
        err1.style.display="block";
    }
    if(pass.value==''){
        // alert('enter password');
        err2.style.display="block";
    }
})