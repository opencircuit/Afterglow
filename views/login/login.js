'use strict'

let ElementMaker = require("../../common/js/ElementMaker.js");
let elementMaker = new ElementMaker();

let ElementManager = require("../../common/js/ElementManager.js");
let elementManager = new ElementManager();

function initializeSetup() {
    
    initializeCanvas();
    initializeSettings();
    populateStarsArray();
    addMouseMovementEventHandler();
    launchLogin();
    connectingDotsAnimation();
}

function launchLogin() {

    let containerId = "form";
    let container = document.getElementById(containerId);
    elementMaker.clearAllChildElements(container);

    container.appendChild(elementMaker.getHeader("h1", "User Login"));
    container.appendChild(elementMaker.getNormalTextbox("Username"));
    container.appendChild(elementMaker.getPasswordTextbox("Password"));
    container.appendChild(elementMaker.getButton("Login", launchEditor));
    container.appendChild(elementMaker.getButton("Register", launchRegistration));
    elementManager.resizeElementContainerTextboxes();
}

function launchRegistration() {

    let containerId = "form";
    let container = document.getElementById(containerId);
    elementMaker.clearAllChildElements(container);

    container.appendChild(elementMaker.getHeader("h1", "User Registration"));
    container.appendChild(elementMaker.getNormalTextbox("Username"));
    container.appendChild(elementMaker.getPasswordTextbox("Password"));
    container.appendChild(elementMaker.getPasswordTextbox("Confirm Password"));
    container.appendChild(elementMaker.getButton("Register", launchLogin));
    elementManager.resizeElementContainerTextboxes();
}

function launchEditor() {

    let remote = require("electron").remote;
    let main = remote.require("./main.js");

    let viewPath = "views\\editor\\editor.html";
    let window = main.openWindow(viewPath, 1200, 600);
    window.maximize();
}