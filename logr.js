const fs = require('fs');
const dayjs = require('dayjs');

class Logger {
  constructor() {
    this._output = false;
    this._filePath = null;
  }

  set output(value) {
    if (typeof value === "boolean") {
      this._output = value;
    } else {
      console.warn("logger.output must be set to a boolean!");
    }
  }

  newLog() {
    const logsDir = 'logs';

    // Create the logs directory if it doesn't exist
    fs.mkdir(logsDir, { recursive: true }, (err) => {
      if (err) throw err;

      const filePath = `${logsDir}/${dayjs().format('YYYY-MM-DD-HH-mm-ss')}.txt`;
      this._filePath = filePath;

      fs.open(filePath, 'w', (err, file) => {
        if (err) throw err;
        //console.log(`Log file created at ${this._filePath}`);
      });
    });
  }

  log(text="", type="") {
    if (text.length === 0) {
      console.error("Text is required!");
      return;
    } else if (type.length === 0) {
      console.error("Type is required!");
      return;
    }

    type = type.toLowerCase();

    if (type !== "log" && type !== "warn" && type !== "error") {
      console.error(`Type cannot be ${type}!`);
      return;
    }

    if (this._output === true) {
      console.log(`[${type.toUpperCase()}] ${dayjs().format('HH:mm:ss')}: ${text}`);
    } else if (this._filePath) {
      const logText = `[${type.toUpperCase()}] ${dayjs().format('HH:mm:ss')}: ${text}\n`;
      fs.appendFile(this._filePath, logText, (err) => {
        if (err) throw err;
      });
    } else {
      console.error("Log file path is not set. Did you call newLog()?");
    }
  }
}

module.exports = {
  Logger
}
