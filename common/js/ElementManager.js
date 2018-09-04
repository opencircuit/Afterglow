'use strict'

class ElementManager {

    resizeElementContainerTextboxes() {

        let containers = document.getElementsByClassName("element_container");
        let textboxWidth = 0;

        for (let i = 0; i < containers.length; ++i) {

            let div = containers[i];
            let label = div.getElementsByTagName("label")[0];
            if (label == null) { continue; }

            let divWidth = div.offsetWidth;
            let labelWidth = label.offsetWidth;
            let newWidth = divWidth - (labelWidth + 130);
            if (textboxWidth === 0) { textboxWidth = newWidth; }
            if (newWidth < textboxWidth) { textboxWidth = newWidth; }
        }

        for (let i = 0; i < containers.length; ++i) {

            let div = containers[i];
            let textbox = div.getElementsByTagName("input")[0];
            if (textbox == null) { continue; }

            textbox.removeAttribute("style");
            textbox.setAttribute("style", "width: " + textboxWidth + "px");
        }
    }
}

module.exports = ElementManager;