
# light-log

light weight log for an easy use with some functionalities.

![alt tag](https://travis-ci.org/PolSendra/light-log.svg?branch=master)
![alt tag](https://david-dm.org/PolSendra/light-log.svg)
[![devDependencies Status](https://david-dm.org/PolSendra/loggerjs/dev-status.png)](https://david-dm.org/PolSendra/light-log?type=dev)

# Install
```
npm install --save light-log
```

# Usage

The most easy use is:
```
log('some text');
log(error); // where error is an instance of Error.
```
The logger will detect what environment are you in and will write the log to a file of to the terminal depending on the situation.
