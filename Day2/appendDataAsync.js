var fs = require("fs");

new_data = " \n This will be added to the async-file we've previously created";

fs.appendFile('async_message.txt', new_data, (err) => {
    if (err) {
        throw err;
    }
    console.log("New_data has been added to the file");
});