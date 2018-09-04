'use strict'

class FileManager {

    // fileSystem = require('fs');
    // path = require("path");
    // projectName = "Streamline";

    makeDirectory(relativeDirectoryPath) {

        let fileSystem = require('fs');
        let directoryPath = getRootDirectory() + relativeDirectoryPath;
        if (fileSystem.existsSync(directoryPath)) { return; }
        fileSystem.mkdirSync(directoryPath);
        return directoryPath;
    }
    
    getRootDirectory() {
        
        let path = require("path");
        let projectName = "Streamline";
        let directoryArray = path.resolve(__dirname).split("\\" + projectName);
        let rootDirectory = directoryArray[0] + "\\" + projectName;
        return rootDirectory;
    }
    
    getItemsInDirectory(targetDirectory) {
    
        let fileSystem = require('fs');
        let directories = [];
    
        fileSystem.readdirSync(targetDirectory).forEach(file => {
            directories.push(file);
        })
    
        return directories;
    }
}

module.exports = FileManager;