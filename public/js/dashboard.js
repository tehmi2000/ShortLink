// Fetch user's data and store it in a variable
const userData = {};

// Handles the display of the drop menu
const showMenu = function(e) {
    alert(String.fromCodePoint(0x1F605) + " I'm displaying the menu");
};

// Handles the display of the search form
const showSearchForm = function (e) {
    alert(String.fromCodePoint(0x1F605) + " I'm displaying search form");
};

// Handles the display of the notification
const showAllNotifications = function (e) {
    alert(String.fromCodePoint(0x1F605) + " I'm displaying the notifications");
};

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

const addHandlers = function() {
    // Get elements that need to have some behaviours and gives them their behaviours
    const menuButton = document.querySelector(".dashboard-body .body-header .menu-btn")
    const searchButton = document.querySelector(".dashboard-body .body-header .search-btn");
    const notificationButton = document.querySelector(".dashboard-body .body-header .notify-btn");

    menuButton.addEventListener("click", showMenu);
    searchButton.addEventListener("click", showSearchForm);
    notificationButton.addEventListener("click", showAllNotifications);
};

const insertUserData = function(data) {
    // Inserts the data gotten from server into the HTML element
    if (Object.keys(data).length > 0) {
        console.log("Data has been received");
    } else {
        console.log("There is no data yet...");
    }
};

const getUserData = function(identifier) {
    // Passes the identifier to the server using the fetch api to get the user's data and...
    // ...inserts user data from data variable
    insertUserData(userData);
};

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// When all element have been rendered...
document.addEventListener("DOMContentLoaded", function(){
    let identity = null;

    // Give element their corresponding functions and behaviours
    addHandlers();

    // Get curent user's session username or any means of identiication and pass it to getUserData
    getUserData(identity);
});