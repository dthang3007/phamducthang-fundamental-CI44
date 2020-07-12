const components = {}
components.welcomeScreen = `
<div> Welcome to chat screen </div>
`
components.registerScreen = `
<div class="container">
        <div class="register-container">
            <div class="register-form">
                <div class="title">
                    MindX Chat
                </div>
                <form id="form-register">
                    <div class="name-wrapper">
                        <div class="input-wrapper">
                            <input type="text" name="firstName" placeholder="First name">
                            <div class="error" id="error-first-name"></div>
                        </div>
                        <div class="input-wrapper">                        
                            <input type="text" name="lastName" placeholder="Last name">
                            <div class="error" id="error-last-name"></div>
                        </div>    
                    </div>
                    <div class="input-wrapper">
                        <input type="text" name="email" placeholder="Email">
                        <div class="error" id="error-email"></div>
                    </div>
                    <div class="input-wrapper">
                        <input type="password" name="password" placeholder="Password">
                        <div class="error" id="error-password"></div>       

                    </div>
                    <div class="input-wrapper">
                        <input type="password" name="confirmPassword" placeholder="Confirm Password">
                        <div class="error" id="error-confirm-password"></div>             
                    </div>
                    <div class="submit-wrapper">
                        <div>ALready have an account ? <span class="cursor-pointer" id='redirect-to-login'>Login </span></div>
                        <button class="btn" type="submit">Register</button>
                    </div>
                </form>
            </div>

        </div>
    </div>`

components.loginScreen = `    <div class="container-login">
<div class="login-container">
    <div class="login-form">
        <div class="title">
            MindX Chat
        </div>
        <form id="form-login">
            <div class="input-wrapper">
                <input type="text" name="email" placeholder="Email">
                <div class="error" id="error-email-login"></div>
            </div>
            <div class="input-wrapper">
                <input type="password" name="password" placeholder="Password">
                <div class="error" id="error-password-login"></div>   
            </div>    
            <div class="submit-wrapper">
                <div>Don't have an account ? <span class="cursor-pointer" id='redirect-to-register'>Register </span></div>
                <button class="btn" type="submit">Login</button>
            </div>
        </form>
    </div>
</div>
</div>`
components.chatScreen = `
    <div id="welcomeUser">
<div class="chat-header">
    MindX chat
</div>
<div class="chat-container">
    <div class="aside-left">
        <div class="new-conversation">
            <button class="btn" id="new-conversation">+New conversation</button>
        </div>
        <div class="list-conversations">

        </div>
    </div>
    <div class="main">
        <div class="conversation-detail">
            <div class="conversation-title">First conversattion</div>
            <div class="list-message">
            </div>
            <form id="sendMessageForm">
                <input type="text" autocomplete="off" class="input" name="message" placeholder="Type a message">
                <button class="btn"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
            </form>
        </div>
    </div>
    <div class="aside-right">
        <div class="show-information">
            <div class="list-information">
            </div>
            <form id="add-users">
            <input type="text" autocomplete="off" class="input" name="" placeholder="Email">
            <button class="btn">Add</button>
            </form>
        </div>
</div></div>
</div>
`
components.createConversation = `
<div class="create-conversation-container">
    <div class="title-header">Techkids Chat</div>
    <div class="create-form">
        <h3>Create conversation</h3>
        <form id="create-conversation-form">
            <div class="input-wrapper">
                <input type="text" name="title" placeholder="Conversation name">
                <div class="error" id="conversation-name-error"></div>
            </div>
            <div class="input-wrapper">
                <input type="text" name="email" placeholder="Friend email">
                <div class="error" id="conversation-email-error"></div>
            </div>
            <div class="create-wrapper">
                <button class="btn" type="submit">Create</button>
                <button type="button" class="btn" style="background: #bdbdbb;"id="back-to-chat">Cancel</button>
            </div>
        </form>
    </div>

</div>`
