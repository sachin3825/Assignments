function updateTime() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  // Format time in 12-hour format (HH:MM:SS AM/PM)
  const time12 =
    hour >= 12
      ? `${(hour % 12).toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")}:${second.toString().padStart(2, "0")} PM`
      : `${hour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")}:${second.toString().padStart(2, "0")} AM`;

  console.clear(); // Clear the console before updating the time
  console.log(time12);
}

setInterval(updateTime, 1000);

updateTime();
