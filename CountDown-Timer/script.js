window.onload = function () {
  const endDate = new Date("1 jan 2024");
  const countdownContainer = document.querySelector(".countdown-container");

  function countdown() {
    const currentDate = new Date();
    const timeDifference = (endDate - currentDate) /1000;

    if (timeDifference <= 0) {
      clearInterval(countdownInterval);
      countdownContainer.innerHTML = "<p>Countdown expired </p>";
      return;
    }

    const days = Math.floor(timeDifference / 3600 / 24);
    const hours = Math.floor(timeDifference / 3600) % 24 ;
    const minutes = Math.floor(timeDifference / 60) % 60;
    const seconds = Math.floor(timeDifference) % 60;

    console.log(
      `days: ${days} hours: ${hours} minutes: ${minutes} seconds: ${seconds}`
    );

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }

  countdown();
  const countdownInterval = setInterval(countdown, 1000);
};
