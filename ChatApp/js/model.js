const model = {}
model.currentUser = {}
model.collectionName = "conversations"
model.currentConversation = undefined
model.conversations = undefined
model.register = async (firstName, lastName, email, password) => {
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        await firebase.auth().currentUser.sendEmailVerification()
        await firebase.auth().currentUser.updateProfile(
            {
                displayName: firstName + lastName
            }
        )

        alert("Account success")
    }
    catch (e) {
        alert(e.message)
    }
}
model.login = async (email, password) => {
    try {
        let user = await firebase.auth().signInWithEmailAndPassword(email, password)
        console.log(user)
        if (user && user.user.emailVerified) {
            model.currentUser = {
                displayName: user.user.displayName,
                email: user.user.email
            }
            console.log(model.currentUser.displayName)
        } else {
            alert("Chua xac nhan email")
        }
    } catch (e) {
        alert(e.message)
    }
}
model.loadConversations = async () => {
    let conversations = await firebase.firestore().collection(model.collectionName).get()
    let data = utils.getDataFormDocs(conversations.docs)
    model.conversations = data
    if (data.length > 0) {
        model.currentConversation = data[0]
        view.showCurrentConversation()
        console.log(model.conversations)
    }
    view.showConversation()
}
model.addMessage = async (message) => {
    await firebase.firestore().collection(model.collectionName).doc(model.currentConversation.id).update({
        messages: firebase.firestore.FieldValue.arrayUnion(message)
    })
}
model.listenConversationsChange = () => {
    let isFistRun = false
    firebase.firestore().collection(model.collectionName).where('users', 'array-contains', model.currentUser.email).onSnapshot((res) => {
        if (!isFistRun) {
            isFistRun = true
            return
        }
        const docChanges = res.docChanges()
        console.log(docChanges)
        for (let oneChange of docChanges) {
            const type = oneChange.type
            const oneChangeData = utils.getDataFormDoc(oneChange.doc)
            console.log(oneChangeData)
            if (type === 'modified') {
                if (oneChangeData.id === model.currentConversation.id) {
                    view.addMessage(oneChangeData.messages[oneChangeData.messages.length - 1])
                }
                for (let i = 0; i < model.conversations.length; i++) {
                    const element = model.conversations[i]
                    if (element.id === oneChangeData.id) {
                        model.conversations[i] = oneChangeData
                    }
                }
                console.log(model.conversations)
            }else if(type==="added"){
                model.conversations.push(oneChangeData)
                view.addConversation(oneChangeData)
            }
        }
    })
}
model.changeCurrentConversation=(conversationId)=>{
    
for(conversation of model.conversations){
    
    if(conversation.id==conversationId){
        model.currentConversation=conversation
    }
    view.showCurrentConversation()
    view.showUsers()
}}
model.createConversation=async (conversation)=>{
    await firebase.firestore().collection(model.collectionName).add(conversation)
    view.backToChatScreen()
}

