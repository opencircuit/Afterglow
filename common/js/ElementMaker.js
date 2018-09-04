'use strict'

class ElementMaker {

    getHeader(tagName, headerText) {

        let elementId = this.createElementId(headerText);
        let header = this.createHeader(tagName, elementId, headerText);
        return header;
    }

    getNormalTextbox(labelText) {

        let elementId = this.createElementId(labelText);
        let div = this.createDiv(elementId);
        let label = this.createLabel(elementId, labelText);
        let textbox = this.createNormalTextbox(elementId, labelText);
        div.appendChild(label);
        div.appendChild(textbox);
        return div;
    }

    getPasswordTextbox(labelText) {

        let elementId = this.createElementId(labelText);
        let div = this.createDiv(elementId);
        let label = this.createLabel(elementId, labelText);
        let textbox = this.createPasswordTextbox(elementId, labelText);
        div.appendChild(label);
        div.appendChild(textbox);
        return div;
    }

    getDropdown(labelText) {

        let elementId = this.createElementId(labelText);
        let div = this.createDiv(elementId);
        let label = this.createLabel(elementId, labelText);
        let dropdown = this.createDropdown(elementId, labelText);
        div.appendChild(label);
        div.appendChild(dropdown);
        return div;
    }

    addDropdownOptions(elementId, options) {

        let dropdown = document.getElementById(elementId);

        for (let optionIndex = 0; optionIndex < options.length; optionIndex++) {

            let option = document.createElement("option");
            option.innerHTML = options[optionIndex];
            option.value = optionIndex;
            dropdown.appendChild(option);
        }
    }

    getButton(buttonText, eventFunction) {

        let elementId = this.createElementId(buttonText);
        let div = this.createDiv(elementId);
        let button = this.createButton(elementId, buttonText);
        button.addEventListener("click", eventFunction, false);
        div.appendChild(button);
        return div;
    }

    //**************************************************************************************
    //**************************************************************************************

    clearAllChildElements(container) {

        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }

    clearDropdownOptions(elementId) {

        let dropdown = document.getElementById(elementId);

        for (let i = dropdown.options.length - 1 ; i >= 0 ; i--) {
            dropdown.remove(i);
        }
    }

    //**************************************************************************************
    //**************************************************************************************

    createHeader(tagName, elementId, headerText) {

        let header = document.createElement(tagName);
        header.setAttribute("id", tagName + "_" + elementId);
        header.innerHTML = headerText;
        return header;
    }

    createButton(elementId, buttonText) {

        let button = document.createElement("button");
        button.setAttribute("id", "button_" + elementId);
        button.setAttribute("type", "submit");
        button.innerHTML = buttonText;
        return button;
    }

    createDropdown(elementId) {

        let dropdown = document.createElement("select");
        dropdown.setAttribute("id", "select_" + elementId);
        dropdown.setAttribute("type", "dropdown");
        return dropdown;
    }

    createNormalTextbox(elementId, placeholderText) {

        let textbox = this.createTextbox(elementId, placeholderText);
        textbox.setAttribute("type", "password");
        return textbox;
    }

    createPasswordTextbox(elementId, placeholderText) {

        let textbox = this.createTextbox(elementId, placeholderText);
        textbox.setAttribute("type", "textbox");
        return textbox;
    }

    createTextbox(elementId, placeholderText) {

        let textbox = document.createElement("input");
        textbox.setAttribute("id", "input_" + elementId);
        textbox.setAttribute("placeholder", placeholderText);
        return textbox;
    }

    createLabel(elementId, labelText) {

        let label = document.createElement("label");
        label.setAttribute("id", "label_" + elementId);
        label.innerHTML = labelText + ": ";
        return label;
    }

    createDiv(elementId) {

        let div = document.createElement("div");
        div.setAttribute("id", "div_" + elementId)
        div.setAttribute("class", "element_container");
        return div;
    }

    createElementId(text) {

        return text.split(' ').join('_').toLowerCase();
    }
}

module.exports = ElementMaker;