const fs = require("fs");

class Fetcher {
    static getMessage(){
        let messages = fs.readFileSync("./messages.txt").toString();
        messages = messages.split("\n");
        return messages[Math.floor(Math.random() * Math.floor(messages.length))];
    }
}

module.exports = Fetcher