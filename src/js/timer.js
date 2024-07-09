function getTimeRemaining(endtime) {
  var t = endtime - new Date().getTime();
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  return {
    total: t,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
      startNewDay();
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

function getEndOfDay() {
  var now = new Date();
  var endOfDay = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1,
    0,
    0,
    0
  );
  return endOfDay.getTime();
}

function startNewDay() {
  var newDeadline = getEndOfDay();
  initializeClock('countdown-one', newDeadline);
  initializeClock('countdown-two', newDeadline);
  initializeClock('countdown-three', newDeadline);
}

var deadline = getEndOfDay();
initializeClock('countdown-one', deadline);
initializeClock('countdown-two', deadline);
initializeClock('countdown-three', deadline);
