window.onload = ()=>{
    let myForm = document.getElementById('myForm');
    myForm.addEventListener('submit',(e)=>{
        let email = document.getElementById('email');
        if(email.value == ''){
            e.preventDefault();
            let invalid = document.getElementById('invalid');
            invalid.innerHTML = 'Le champ email ne peut pas être vide';
            invalid.style.color = 'red';
        }
        else{
            e.preventDefault();
            document.getElementById('popupbox').style.display = 'block';
        }
       
      

    })
}