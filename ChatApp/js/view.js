const view = {}
view.setActiveScreen = (screenName) => {
    document.getElementById('app').innerHTML = components.welcomeScreen
    switch (screenName){
        case 'registerScreen' :
            
            document.getElementById('app').innerHTML = components.registerScreen
            let redirectToLogin=document.getElementById('redirect-to-login')          
            redirectToLogin.addEventListener('click', (e)=>{
                view.setActiveScreen('loginScreen')
            })
            const registerForm = document.getElementById('form-register')
            registerForm.addEventListener('submit', (e) => {
                e.preventDefault()
                const registerInfor = {
                    firstName: registerForm.firstName.value,
                    lastName : registerForm.lastName.value,
                    email: registerForm.email.value,
                    password: registerForm.password.value,
                    confirmPassword: registerForm.confirmPassword.value,
                }
                // if(registerInfor.firstName === ''){
                //     document.getElementById('error-fist-name').innerText = "Please input first name"
                // }
                // if(registerInfor.email === ''){
                //     document.getElementById('error-email').innerText = "Please input email"
                // }
                // if(registerInfor.lastName === ''){
                //     document.getElementById('error-last-name').innerText = "Please input last name"
                // }
                // if(registerInfor.password === ''){
                //     document.getElementById('error-password').innerText = "Please input password "
                // }
                // if(registerInfor.confirmPassword === ''){
                //     document.getElementById('error-confirm-password').innerText = "Please input first name"
                // }
                view.validateInfor('error-first-name',[registerInfor.firstName ===' ', "Please input first name"])
                view.validateInfor('error-last-name',[registerInfor.lastName ===' ', "Please input last name"])
                view.validateInfor('error-email',[registerInfor.email ===' ', "Please input email name"])
                view.validateInfor('error-password',[registerInfor.password , "Please input password",registerInfor.password.length > 8,
                 "Password must be at least 8 characters"])
                view.validateInfor('error-confirm-password',[registerInfor.confirmPassword,"Plsese input confirm",registerInfor.confirmPassword == registerInfor.password,
                "Password and confirm pass not match"])
            })

            break;
            case 'loginScreen':
                document.getElementById('app').innerHTML = components.loginScreen;
                let redirectToRegister = document.getElementById('redirect-to-register')          
                redirectToRegister.addEventListener('click', (e) => {
                    view.setActiveScreen('registerScreen')
                })
                const formLogin=document.getElementById("form-login")
                formLogin.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const formLoginInfor={
                        email: formLogin.email.value,
                        password: formLogin.password.value,
                    }
                    view.validateInfor('error-email-login',[formLoginInfor.email,"Please input email !"])
                    view.validateInfor('error-password-login',[formLoginInfor.password,"Please input password !"])
                })
            break
    }

}
view.setIdText = (id,text) => {
    document.getElementById(id).innerText = text;
}
view.validateInfor = (idError, infor) => {
   for(let i=0;i<infor.length;i+=2)
   {
       let condition = infor[i];
       let meassage = infor[i + 1];
       if(!condition){
           view.setIdText(idError,meassage);
           return false;
       }
   } 
   view.setIdText(idError," ");
   return true;
}



