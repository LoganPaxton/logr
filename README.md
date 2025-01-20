# Logr
A lightweight logging utility made for Node.js  
[![NPM badge](https://img.shields.io/npm/v/logr-v1?logo=npm)](https://www.npmjs.com/package/logr-v1)
![NPM Stats](https://img.shields.io/npm/dm/logr-v1.svg)
======

> [!IMPORTANT]
> As of 1/20/25, this repository in now archived. If you would like something added, fork it and create try to your own Logr.

## Milestones
First, I just want to say thank you to those that have made this possible!  
✅ 100 Downloads (Reached on day 1!)  
✅ 200 Downloads (Reached on day 7!)  
❌ 300 Downloads  
❌ 400 Downloads  
❌ 500 Downloads  

## Features

- Create new log files with timestamped filenames.
- Append log entries with various types (e.g., LOG, ERROR, WARN).
- Simple and easy-to-use API.

## Installation

To install, run this command:

```bash
npm i logr-v1
```

## Usage
To use this module, you need to add these few lines of code.
```javascript
const { Logger } = require("logr-v1")

const logr = new Logger(); // This will create a new Logr instance
```
Examples  
```javascript
logr.add("Text to log", "LOG"); // First argument is text to log. The second one is the type of log it will be (Eg. Log, error, warn)
logr.add("Error to log", "ERROR");
logr.add("Warning to log", "WARN");

logr.output = true // This will log to the console and to the log file if set to true
```
***Note:*** *Types are not case-sensitive*


## Change Log
_Smaller bug fixes won't be added (Eg. Version x.x.1)_  
Version 1.1.0
- `logr.error` is now deprecated
- Added types to `logr.add`
<!-- -->
Version 2.0.0
- Completely revamped Logr (Check the usage)

## License
This project is licensed under the Apache 2.0 License - See the LICENSE file for more details

## Contributing
Contributions are welcome! Please, feel free to open a pull-request, or open an issue!
