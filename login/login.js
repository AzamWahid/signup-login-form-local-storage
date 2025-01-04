const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
})

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
})

if (JSON.parse(localStorage.getItem('isLoggedIn'))) {
    window.location.href = '../mainpage/index.html'
}

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
    if (userName.value !== "" && userEmail.value != "" && userPass.value != "") {
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
    else {
        signupDangerAlert.style.display = 'block';
        signupDangerAlert.innerHTML = "Please fill all the fields"
        return;
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
                loginDangerAlert.style.display = 'none';
                loginSuccessAlert.style.display = 'block';
                loginSuccessAlert.innerHTML = "Login Successfully";
                localStorage.setItem('isLoggedIn', JSON.stringify(loginUser))

                // Show loader
                document.getElementById('loader').classList.remove('d-none');

                // Redirect after a delay
                setTimeout(() => {
                    window.location.href = '../mainpage/index.html'; // Example URL
                }, 1000); // 1 second delay


                // window.location.href = '../mainpage/index.html'

            }
            else {

                loginSuccessAlert.style.display = 'none';
                loginDangerAlert.style.display = 'block';
                loginDangerAlert.innerHTML = "Invalid credentials "

            }
        }
        else {
            loginDangerAlert.style.display = 'block';
            loginDangerAlert.innerHTML = "Invalid Email "
        }
    }





}

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the form from submitting and refreshing the page
    login(); // Call your login function here
});

document.getElementById('signUpForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the form from submitting and refreshing the page
    signup(); // Call your login function here
});