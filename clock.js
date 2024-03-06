function updateTime() {
    // Get the current date and time
  
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
  
    // Format the time with leading zeros
  
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
  
    // Set the text of the clock element
  
    let clock = document.getElementById("clock");
    clock.innerHTML = hour + ":" + minute + ":" + second;
  }
  
  // Update the clock every second
  
  setInterval(updateTime, 1000);