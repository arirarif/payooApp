// search: form submit reloading the page



document.getElementById('button-login')
    .addEventListener('click', function(event){
        event.preventDefault()

        // get phone number
        const phoneNumber = document.getElementById('phone-number').value
        console.log(phoneNumber);
        const pinNumber = document.getElementById('pin-number').value
        console.log(pinNumber)

        // 
        if(phoneNumber === '5' && pinNumber === '1234'){
            console.log('you are logged in');
            // step 5 : allow user to use website
            window.location.href = '/home.html'
        }else{
            console.log('Wrong phone or pin number');            
        }
    })
