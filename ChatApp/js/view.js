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
            const sendMessageForm = document.querySelector('#sendMessageForm')
            sendMessageForm.addEventListener('submit', (e) => {
                e.preventDefault()
                const message = {
                    owner: model.currentUser.email,
                    content: sendMessageForm.message.value,
                    createdAt: new Date().toISOString()
                }
                if (sendMessageForm.message.value.trim() != '') {
                    view.addMessage(message)
                }
                sendMessageForm.message.value = ""
                model.updateMessages(message)

            })
            model.loadConversations()
            break
    }
}
view.addMessage = (message) => {
    const messageWrapper = document.createElement('div')
    messageWrapper.classList.add('message')
    if (model.currentUser.email === message.owner) {
        messageWrapper.classList.add('mine')
        messageWrapper.innerHTML = `
        <div class="content">${message.content}</div>`

    } else {
        messageWrapper.classList.add('their')
        messageWrapper.innerHTML = `
        <div class="owner">${message.owner}</div>
        <div class="content">${message.content}</div>`
    }
    const listMessage = document.querySelector(".list-message")
    listMessage.appendChild(messageWrapper)
    listMessage.scrollTop = listMessage.scrollHeight
}
view.showCurrentConversation = () => {
    for (let oneMessage of model.currentConversation.messages) {
        view.addMessage(oneMessage)
    }
}




