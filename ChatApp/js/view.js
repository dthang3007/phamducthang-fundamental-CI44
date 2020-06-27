const view = {}
view.setActiveScreen = (screenName) => {
    document.getElementById('app').innerHTML = components.welcomeScreen
    switch (screenName) {
        case 'registerScreen':

            document.getElementById('app').innerHTML = components.registerScreen
            let redirectToLogin = document.getElementById('redirect-to-login')
            redirectToLogin.addEventListener('click', (e) => {
                view.setActiveScreen('loginScreen')
            })
            const registerForm = document.getElementById('form-register')
            registerForm.addEventListener('submit', (e) => {
                e.preventDefault()
                const registerInfor = {
                    firstName: registerForm.firstName.value,
                    lastName: registerForm.lastName.value,
                    email: registerForm.email.value,
                    password: registerForm.password.value,
                    confirmPassword: registerForm.confirmPassword.value,
                }
                if (controller.register(registerInfor)) {
                    model.register(registerInfor.firstName, registerInfor.lastName, registerInfor.email, registerInfor.password)
                }


            })

            break;
        case 'loginScreen':
            document.getElementById('app').innerHTML = components.loginScreen;
            let redirectToRegister = document.getElementById('redirect-to-register')
            redirectToRegister.addEventListener('click', (e) => {
                view.setActiveScreen('registerScreen')
            })
            const formLogin = document.getElementById("form-login")
            formLogin.addEventListener('submit', (e) => {
                e.preventDefault();
                const formLoginInfor = {
                    email: formLogin.email.value,
                    password: formLogin.password.value,
                }

                if (controller.login(formLoginInfor)) {
                    model.login(formLoginInfor.email, formLoginInfor.password)
                }

            })
            break
        case 'chatScreen':
            
            document.getElementById('app').innerHTML = components.chatScreen
            document.getElementById('welcomeUser').innerText = `Welcome ${model.currentUser.displayName}`
            break

    }

}




