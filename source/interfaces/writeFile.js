import fs from 'fs';

export default writeLog () {
    fs.appendFile('logsFile.log', 'Hey there1a1!' + '\r\n', function (err) {
        if (err) {
            return console.log(err);
        }
        console.log('The file was saved!');
    });
}
