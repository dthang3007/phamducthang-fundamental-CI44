window.onload = () => {
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyCECVyWVRMobTAbBFLC11Iq15mHqbMHtBU",
        authDomain: "chatci44.firebaseapp.com",
        databaseURL: "https://chatci44.firebaseio.com",
        projectId: "chatci44",
        storageBucket: "chatci44.appspot.com",
        messagingSenderId: "70429057452",
        appId: "1:70429057452:web:c48e3d8763651530301a09"
    };
    firebase.initializeApp(firebaseConfig);
    console.log('loaded')
    // templateQueryDatabase()
    firebase.auth().onAuthStateChanged(function (user) {
        if (user && user.emailVerified) {
            
            model.currentUser = {
                displayName: user.displayName,
                email: user.email,
            };
            view.setActiveScreen('chatScreen')
        } else {

            view.setActiveScreen('loginScreen')

        }
    });

}

// templateQueryDatabase = async () => {
//     //getone
//     // try {
//     //     const docId = "tWbTEULiXnULzvTK1NAa"
//     //     let user = await firebase.firestore().collection('users').doc(docId).get()

//     //     console.log(getDataFormDoc(user))
//     // } catch (e) {
//     //     console.log(e)
//     // }
//     //getmany
//     // try {
//     //     let user = await firebase.firestore().collection('users').where('age',"==",20).get()
//     //     console.log(getDataFormDocs(user.docs))
//     // } catch (e) {
//     //     console.log(e)
//     // }

//     //create
//     // try{
//     //     const datatoCreate={
//     //         name: 'Create',
//     //         age: 20,
//     //         email: 'pdt3072000@gmail.com',
//     //         phoneNumber: firebase.firestore.FiledValue.arrayUnion("0123123123")
//     //     }
//     //     let user=firebase.firestore().collection('users').add(datatoCreate)
//     // }catch(e){
//     //     console.log(e)
//     // }

//     //update
//     // try{
//     //     const docIdUpDate='DlBP4mJNYPjO8sT3nyEU'
//     //     const dataToUpdate={
//     //         age:20,
//     //         address:"HN",
//     //         phones:['0423415']
//     //     }
//     //     await firebase.firestore().collection('users').doc(docIdUpDate).update(dataToUpdate)
//     // }catch(e){

//     // }
//     //delete
//     const dataIdDelte='NMkEt0es2FQzXd5L9pZ0'
//     await firebase.firestore().collection('users').doc(dataIdDelte).delete()
// }

