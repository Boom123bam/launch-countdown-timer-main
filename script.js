const targetDate = new Date(2023, 11, 25);

function updateTime() {
  const now = new Date();
  const timeDiff = Math.abs(targetDate - now);

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (timeDiff % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  day.innerHTML = days.toString().padStart(2, "0");
  hour.innerHTML = hours.toString().padStart(2, "0");
  minute.innerHTML = minutes.toString().padStart(2, "0");
  second.innerHTML = seconds.toString().padStart(2, "0");
}

setInterval(updateTime, 1000);
