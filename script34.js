document.addEventListener('DOMContentLoaded', function() {
    const timeDisplay = document.getElementById('time');
    const alarmTimeInput = document.getElementById('alarmTime');
    const alarmToggle = document.getElementById('alarmToggle');
    const snoozeBtn = document.getElementById('snoozeBtn');
    const dismissBtn = document.getElementById('dismissBtn');
    
    let alarmTime;
    let alarmInterval;
    
    function updateTime() {
      const now = new Date();
      timeDisplay.textContent = now.toLocaleTimeString();
      
      if (alarmTime && alarmTime.getHours() === now.getHours() && alarmTime.getMinutes() === now.getMinutes()) {
        ringAlarm();
      }
    }
    
    function ringAlarm() {
      clearInterval(alarmInterval);
      alert('Alarm is ringing!');
      alarmInterval = setInterval(ringAlarm, 5000); // Repeat every 5 seconds until dismissed
    }
    
    function setAlarm() {
      const [hours, minutes] = alarmTimeInput.value.split(':');
      alarmTime = new Date();
      alarmTime.setHours(parseInt(hours, 10));
      alarmTime.setMinutes(parseInt(minutes, 10));
    }
    
    alarmTimeInput.addEventListener('change', setAlarm);
    alarmToggle.addEventListener('change', function() {
      if (this.checked) {
        setAlarm();
      } else {
        alarmTime = null;
        clearInterval(alarmInterval);
      }
    });
    
    snoozeBtn.addEventListener('click', function() {
      clearInterval(alarmInterval);
      setTimeout(ringAlarm, 300000); // Snooze for 5 minutes (300,000 milliseconds)
    });
    
    dismissBtn.addEventListener('click', function() {
      clearInterval(alarmInterval);
      alarmTime = null;
      alarmToggle.checked = false;
    });
    
    updateTime(); // Initial call to display current time
    setInterval(updateTime, 1000); // Update time every second
  });
  