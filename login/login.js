const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
})

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
})
//---------------------------SIGN UP-------------------------------------------
let users = JSON.parse(localStorage.getItem('users')) || [];
let userDet = {};
let userAlreadyFound;
function signup() {
    const userName = document.querySelector('#userName');
    const userEmail = document.querySelector('#userEmail');
    const userPass = document.querySelector('#userPass');
    const signupDangerAlert = document.querySelector('.signupDangerAlert');
    const signupSuccessAlert = document.querySelector('.signupSuccessAlert');

    console.log(users.length)
    if (users.length !== 0) {
        userAlreadyFound = users.find((user) => {
            return user.UserEmail == userEmail.value;
        })
    }

    if (userAlreadyFound) {
        signupDangerAlert.style.display = 'block';
        signupDangerAlert.innerHTML = "User already exists"
    }
    else {
        signupDangerAlert.style.display = 'none';
        let userDet = {
            UserName: userName.value,
            UserEmail: userEmail.value,
            UserPass: userPass.value
        }
        users.push(userDet);
        localStorage.setItem('users', JSON.stringify(users));

        document.querySelector('#userName').value = "";
        document.querySelector('#userEmail').value = "";
        document.querySelector('#userPass').value = "";
        signupSuccessAlert.style.display = 'block';
        signupSuccessAlert.innerHTML = "User Registration Sucessfully"
    }
}



//----------------------------LOGIN------------------------------------------
function login() {

    const userLoginEmail = document.querySelector('#userLoginEmail');
    const userLoginPass = document.querySelector('#userPassEmail');

    const loginDangerAlert = document.querySelector('.loginDangerAlert');
    const loginSuccessAlert = document.querySelector('.loginSuccessAlert');

    let loginUser;
    const users = JSON.parse(localStorage.getItem('users')) || null;
    if (users == null) {
        alert('no user found')
    }
    else {
        loginUser = users.find((user) => {
            return user.UserEmail == userLoginEmail.value;
        })
        console.log(loginUser);
        if (loginUser) {
            if (userLoginPass.value === loginUser.UserPass) {
                loginSuccessAlert.style.display = 'block';
                loginSuccessAlert.innerHTML = "Login Successfully";
               window.location.href = './login.html'
            }
            else {

                loginSuccessAlert.style.display = 'none';
                loginDangerAlert.style.display = 'block';
                loginDangerAlert.innerHTML = "Invalid credentials "

            }
        }
    }





}