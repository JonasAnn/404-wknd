const deadline = 'March 31 2021 16:04:00 UTC-04:00';

function getTimeRemaining(endtime){
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor( (total/1000) % 60 );
    const minutes = Math.floor( (total/1000/60) % 60 );
    const hours = Math.floor( (total/(1000*60*60)) % 24 );
    const days = Math.floor( total/(1000*60*60*24) );
    console.log(seconds);
    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
    
  }

function initializeClock(endtime) {
        
    const minute = document.getElementById("minutes");
    const hour = document.getElementById("hours");
    const day = document.getElementById("days");


    const timeinterval = setInterval(() => {
      const t = getTimeRemaining(endtime);

        minute.innerHTML = t.minutes;
        hour.innerHTML = t.seconds;
        day.innerHTML = t.days;
        second.innerHTML = t.hours;

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    },1000);
  }

  initializeClock(deadline);
