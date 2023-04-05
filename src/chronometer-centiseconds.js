class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      if (printTimeCallback) {
        printTimeCallback();
      }
      this.currentTime += 1;
    }, 10);
  }

  getMinutes() {
    let seconds = Math.floor(this.currentTime / 100);
    if (!this.currentTime) {
      return 0;
    } else {
      return Math.floor(seconds / 60);
    }
  }

  getSeconds() {
    let seconds = Math.floor(this.currentTime / 100);
    if (!this.currentTime) {
      return 0;
    } else if (seconds >= 60) {
      return seconds % 60;
    } else {
      return seconds;
    }
  }

  getCentiseconds() {
    if (!this.currentTime) {
      return 0;
    } else if (this.currentTime >= 100) {
      return this.currentTime % 100;
    } else {
      return this.currentTime;
    }
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return "0" + value;
    } else {
      return value.toString().slice(0, 2);
    }
  }

  stop() {
    return clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return (
      this.computeTwoDigitNumber(this.getMinutes()) +
      ":" +
      this.computeTwoDigitNumber(this.getSeconds()) +
      "." +
      this.computeTwoDigitNumber(this.getCentiseconds())
    );
  }
}
