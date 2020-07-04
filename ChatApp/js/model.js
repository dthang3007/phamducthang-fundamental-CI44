const model = {}
model.currentUser = {}
model.collectionName = "conversations"
model.currentConversation = undefined
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
            view.setActiveScreen("chatScreen")
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
    if (data.length > 0) {
        model.currentConversation = data[0]
        view.showCurrentConversation()
    }
 
}
model.updateMessages =async(message)=>{
    await firebase.firestore().collection(model.collectionName).doc(model.currentConversation.id).update({
        messages: firebase.firestore.FieldValue.arrayUnion(message)
    })
    
}