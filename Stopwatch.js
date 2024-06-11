window.onload = function () {
    let minutes = 0;
    let seconds = 0;
    let tens = 0;
    let appendMinutes = document.querySelector('#minutes');
    let appendTens = document.querySelector('#tens');
    let appendSeconds = document.querySelector('#seconds');
    let startBtn = document.querySelector('#start');
    let stopBtn = document.querySelector('#stop');
    let resetBtn = document.querySelector('#reset');
    let lapBtn = document.querySelector('#lap');
    let lapsList = document.querySelector('#lapsList');
    let intervalId; // Use a variable to store the interval ID for clarity
  
    const startTimer = () => {
      tens++;
  
      if (tens < 10) {
        appendTens.innerHTML = '0' + tens;
      } else {
        appendTens.innerHTML = tens;
      }
  
      if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = seconds < 10 ? '0' + seconds : seconds;
        tens = 0;
        appendTens.innerHTML = '00';
      }
  
      if (seconds > 59) {
        minutes++;
        appendMinutes.innerHTML = minutes < 10 ? '0' + minutes : minutes;
        seconds = 0;
        appendSeconds.innerHTML = '00';
      }
    };
  
    startBtn.addEventListener('click', () => { // Use addEventListener for modern browsers
      clearInterval(intervalId); // Clear any existing interval before starting
      intervalId = setInterval(startTimer, 10);
    });
  
    stopBtn.addEventListener('click', () => {
      clearInterval(intervalId);
    });
  
    resetBtn.addEventListener('click', () => {
      clearInterval(intervalId);
      tens = 0;
      seconds = 0;
      minutes = 0;
      appendTens.innerHTML = '00';
      appendSeconds.innerHTML = '00';
      appendMinutes.innerHTML = '00';
      lapsList.innerHTML = '';
    });
  
    lapBtn.addEventListener('click', () => {
      let lapTime = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}:${tens < 10 ? '0' + tens : tens}`;
      let lapItem = document.createElement('li');
      lapItem.innerText = lapTime;
      lapsList.appendChild(lapItem);
    });
  };
  