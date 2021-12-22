function validate() {
    let username = document.getElementById('username').value 
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let cpassword = document.getElementById('cpassword').value

    checkUsername(username)
    checkEmail(email)
    checkPassword(password)
    checkPasswordMatch(password, cpassword)
}

function checkUsername(username) {
    if (username.length < 8 ) {
        document.getElementById('username_error').innerHTML = 'Username must be 8 letters long!'
        document.getElementById('username').classList.add('error')
    } else {
     document.getElementById('username_error').innerHTML = ''
     document.getElementById('username').classList.remove('error')
     document.getElementById('username').classList.add('success')
    }
 }

 function checkEmail(email) {
     if (/[a-zA-Z=-_]+@[a-z]+\.\w+/.test(email)) {
        document.getElementById('email').classList.remove('error')
        document.getElementById('email').classList.add('success')
        document.getElementById('email_error').innerHTML = ''
     } else {
        document.getElementById('email').classList.add('error')
        document.getElementById('email_error').innerHTML = 'Enter a valid email address!'
     }
 }

 function checkPassword(password) {
    if (password.length < 8 || !/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[@!#$%^&*()_=+{}[\]\:"\<\>\.,-]/.test(password) || !/[\d]/.test(password) ) {
        document.getElementById('password_error').innerHTML = 'Password must be 8 letters long and include lowercase letters, uppercase, digits and special characters!'
        document.getElementById('password').classList.add('error')
    } else {
     document.getElementById('password_error').innerHTML = ''
     document.getElementById('password').classList.remove('error')
     document.getElementById('password').classList.add('success')
    }
 }

 function checkPasswordMatch(password, cpassword) {
     if (password == cpassword) {
        document.getElementById('cpassword_error').innerHTML = ''
        document.getElementById('password').classList.remove('error')
        document.getElementById('password').classList.add('success')
        document.getElementById('cpassword').classList.remove('error')
        document.getElementById('cpassword').classList.add('success')
     } else {
        document.getElementById('cpassword_error').innerHTML = "Passwords don't match!"
        document.getElementById('password').classList.add('error')
        document.getElementById('cpassword').classList.add('error')
     }
 }