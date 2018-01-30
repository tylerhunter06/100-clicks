var config = {
    apiKey: "AIzaSyA1oEZ5Y7_Szm3G5Iotcc7zSXSouPJvo64",
    authDomain: "clickcountdown-f1234.firebaseapp.com",
    databaseURL: "https://clickcountdown-f1234.firebaseio.com",
    projectId: "clickcountdown-f1234",
    storageBucket: "clickcountdown-f1234.appspot.com",
    messagingSenderId: "856691015725"
};

firebase.initializeApp(config);

//variable to reference the database
var database = firebase.database();

//initial value
var initialValue = 100;

//keeps tracks of clicks
var clickCounter = initialValue;


database.ref().on("value",function(snapshot){
    initialValue = snapshot.val().clicks;
    $('#clickValue').html(initialValue);
    console.log(snapshot.val());
});

$('#clickButton').on("click",function (){
    initialValue--;
    database.ref().set({
        clicks:initialValue
    });

});

$('#restartButton').on("click",function(){
    database.ref().set({
        clicks: 100
    });
});