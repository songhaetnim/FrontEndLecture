function timer(h, m) {
    let time, hour = 0, minute = 0;
    if (m - 45 < 0) {
      minute = 60 + (m - 45) 
      hour = h - 1

      if (hour == -1) { 
        hour = 23;
      }
    } else {
      minute = m - 45;
    }
    time = hour + ':' + minute
    return time;
  }
  console.log(timer(10, 10))
  console.log(timer(0, 30))
  console.log(timer(23, 40))