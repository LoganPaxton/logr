# Logr [BETA]
*Warning: Logr is in its beta stages, so expect bugs!*

## Features

- Create new log files with timestamped filenames.
- Append log entries with various types (e.g., LOG, ERROR, INFO).
- Simple and easy-to-use API.

## Installation

To install, run this command:

```bash
npm i logr-v1
```

## Usage
To use this module, add these two lines of code:
```javascript
const logr = require("logr")

logr.newLog(); // This will create a new log file
```
To start logging you can use `logr.add("Text", "LOG");` (Types are not case-sensitive)  
**Note:** You must provide text, and define its type when using `logr.add()`
```javascript
logr.add("This is a log entry", "LOG");
logr.add("This is a warning entry", "WARN");
logr.add("This is a error entry", "ERROR");
```

## Change Log
Version 1.1.0
- `logr.error` is now deprecated
- Added types to `logr.add`

## License
This project is licensed under the Apache 2.0 License - See the LICENSE file for more details

## Contributing
Contributions are welcome! Please, feel free to open a pull-request, or open an issue!
