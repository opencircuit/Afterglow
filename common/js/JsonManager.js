'use strict'

class JsonManager {

    loadJsonObject(relativeFilePath) {

        let filePath = getRootDirectory() + "\\" + relativeFilePath;
        let jsonObject = JSON.parse(fileSystem.readFileSync(filePath, "utf8"));
        return jsonObject;
    }
}

module.exports = JsonManager;