const fs = require("fs");

function getCurrentDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  return `[LOG]${year}-${month}-${day}-${hours}-${minutes}-${seconds}.txt`;
}

function newLog() {
  const file_path = getCurrentDateTime();
  fs.open(file_path, "w", function (err, file) {
    if (err) {
      console.error(`Error creating new log file: ${err.message}`);
    } else {
      //console.log(`New log file created: ${file_path}`);
    }
  });
}

function add(text = "") {
  if (text.length === 0) {
    console.warn("Text length cannot be 0.");
    return;
  }

  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  const toAppend = `[LOG] ${hours}-${minutes}-${seconds}: ${text}\n`;
  const file_path = getCurrentDateTime();

  fs.appendFile(file_path, toAppend, function (err) {
    if (err) {
      console.error(`Error appending to log file: ${err.message}`);
    } else {
      //console.log(`Added log entry to file: ${file_path}`);
    }
  });
}

function error(text="") {
  if (text.length === 0) {
    console.warn("Text length cannot be 0.");
    return;
  }

  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  const toAppend = `[ERROR] ${hours}-${minutes}-${seconds}: ${text}\n`;
  const file_path = getCurrentDateTime();

  fs.appendFile(file_path, toAppend, function (err) {
    if (err) {
      console.error(`Error appending to log file: ${err.message}`);
    } else {
      //console.log(`Added log entry to file: ${file_path}`);
    }
  });
}

module.exports = {
  add,
  newLog,
  error,
};
