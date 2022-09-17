//  step 1: add addeventlistener with submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    //  step 2: get the email inside the email input field
    // always remember to use .value to get text from an input field
    const emailField =document.getElementById('user-email');
    const email = emailField.value;
   
    // step 3 : get password 
    const passwordField =document.getElementById('user-password');
    const password = passwordField.value;

    // danger: do not verify email password on the client side 
    // step 4: verify email and password 
    if(email === 'akash@gmail.com' && password === 'batash'){
        window.location.href = 'bank.html';
    }
    else{
        alert('please check your email and password');
    }
   
})