const controller = {}
controller.register = (registerInfor) => {
    let validateResults = [controller
        .validateInfor('error-first-name', [registerInfor.firstName, "Please input first name"]),
    controller.
        validateInfor('error-last-name', [registerInfor.lastName, "Please input last name"]),
    controller
        .validateInfor('error-email', [registerInfor.email, "Please input email name"]),
    controller
        .validateInfor('error-password', [registerInfor.password, "Please input password", registerInfor.password.length > 8,
            "Password must be at least 8 characters"]),
    controller
        .validateInfor('error-confirm-password', [registerInfor.confirmPassword, "Plsese input confirm", registerInfor.confirmPassword == registerInfor.password,
            "Password and confirm pass not match"]),]
    if (controller.allPassed(validateResults)) {
        return true
    }
  
    return false


}
controller.login = (formLoginInfor) => {
    let validateResults = [controller
        .validateInfor('error-email-login', [formLoginInfor.email, "Please input email !"]),
    controller
        .validateInfor('error-password-login', [formLoginInfor.password, "Please input password !"]),]
    if (controller.allPassed(validateResults)) {
        return true
    }
    return false        

}
controller.setIdText = (id, text) => {
    document.getElementById(id).innerText = text;
}
controller.validateInfor = (idError, infor) => {

    for (let i = 0; i < infor.length; i += 2) {
        let condition = infor[i];
        let meassage = infor[i + 1];
        if (!condition) {
            controller.setIdText(idError, meassage);
            return false;
        }
    }
    controller.setIdText(idError, " ");
    return true;
}
controller.allPassed = (vailidateResults) => {
    for (let result of vailidateResults) {
        if (!result) {
            return false
        }
    }
    return true
}
controller.createConversation=({title,friendEmail})=>{
    view.setErrorMessage('conversation-name-error',title === '' ? 'please input title' :'')
    view.setErrorMessage('conversation-email-error',friendEmail === '' ? 'Please input friend':'')
    if(title!=='' && friendEmail !==''){
        let temp={
            title:title,
            users:[friendEmail,model.currentUser.email],
            createdAt: new Date().toISOString(),
            messages:[]
        }
        model.createConversation(temp)
    }
    
}