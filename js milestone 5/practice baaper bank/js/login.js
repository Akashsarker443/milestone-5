document.getElementById('btn-submit').addEventListener('click', function(){
    const userEmailField = document.getElementById('user-email');
    const userEmail = userEmailField.value;


    const userPasswordField = document.getElementById('user-password');
    const userPassword = userPasswordField.value;

    if( userEmail === 'alamia@gmail.com' && userPassword === 'ala1234'){
        window.location.href = 'bank.html';
    }
    else{
        alert('please check your email and password');
    }
    userEmailField.value = '';
    userPasswordField.value = '';
})