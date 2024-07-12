# Logr [BETA]
*Warning Logr is in its beta stages, so expect bugs!*

# Usage / Installation
To install, run this command `npm i logr-v1`.  
To use this module, add these two lines of code
```javascript
const logr = require("logr");

logr.newLog(); // This will create a new log file
```
To start logging, you can either use `logr.add("Text")` or `logr.error("Error")`. If you use `logr.error()`, it will output a [ERROR] in the log file.  
_Note you must put text in either the `logr.add` or the `logr.error` if you do not, it will throw an error_

## Change Log
Currently None (It's V 1.0.0)
