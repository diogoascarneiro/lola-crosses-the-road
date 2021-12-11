// Class Section
class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      if (callback) {
        callback();
      }
      return this.currentTime++;
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    if (this.currentTime / 100 < 60) {
      return Math.floor(this.currentTime / 100);
    } else {
      return Math.floor(this.currentTime / 100) % 60;
    }
  }

  getMilliseconds() {
    if (this.currentTime < 100) {
      return this.currentTime;
    } else {
      return this.currentTime % 100;
    }
  }

  computeTwoDigitNumber(value) {
    return value.toString().padStart(2, "0");
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let formattedTime = `${this.computeTwoDigitNumber(
      this.getMinutes()
    )}:${this.computeTwoDigitNumber(
      this.getSeconds()
    )}:${this.computeTwoDigitNumber(this.getMilliseconds())}`;
    return formattedTime;
  }
}

// DOM Manipulation Section

// Get Timer Elements

const minDecElement = document.getElementById("minDec");
const minUniElement = document.getElementById("minUni");
const secDecElement = document.getElementById("secDec");
const secUniElement = document.getElementById("secUni");
const milDecElement = document.getElementById("milDec");
const milUniElement = document.getElementById("milUni");
const splitsElement = document.getElementById("splits");

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  let minutes = currentGame.timer.computeTwoDigitNumber(
    currentGame.timer.getMinutes()
  );
  minDecElement.textContent = minutes[0];
  minUniElement.textContent = minutes[1];
}

function printSeconds() {
  let seconds = currentGame.timer.computeTwoDigitNumber(
    currentGame.timer.getSeconds()
  );
  secDecElement.textContent = seconds[0];
  secUniElement.textContent = seconds[1];
}

function printMilliseconds() {
  let millisec = currentGame.timer.computeTwoDigitNumber(
    currentGame.timer.getMilliseconds()
  );
  milDecElement.textContent = millisec[0];
  milUniElement.textContent = millisec[1];
}

function printHiScores(scoreArray) {
  scoreArray.forEach((score) => {
    let scoreElem = document.createElement("li");
    scoreElem.textContent = score;
    splitsElement.appendChild(scoreElem);
  });
}

function clearHiScores() {
  while (splitsElement.firstChild) {
    splitsElement.removeChild(splitsElement.firstChild);
  }
}

function sortHiScores(scoreArray) {
  scoreArray.sort();
}
