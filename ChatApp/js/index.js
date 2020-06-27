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
    firebase.auth().onAuthStateChanged(function (user) {
        if (user&&user.emailVerified) {
            console.log(user)
            model.currentUser = {
                displayName: user.displayName,
                email: user.email,
            };
            view.setActiveScreen('chatScreen')
        } else {
            alert("Chua xac nhan email")
            view.setActiveScreen('loginScreen')

        }
    });

}