// search: form submit reloading the page



document.getElementById('button-login')
    .addEventListener('click', function(event){
        event.preventDefault()

        // get phone number
        const phoneNumber = document.getElementById('phone-number').value
        console.log(phoneNumber);
        
    })