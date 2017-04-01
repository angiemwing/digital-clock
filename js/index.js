
function displayTime() {
  // setting the var to the value of the Date() object 
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var day = currentTime.getDay();
  var date = currentTime.getDate();
  var month = currentTime.getMonth();
  var year = currentTime.getYear();
  
        // If the hours digit is less than 10
        if(hours < 10) {
            hours = "0" + hours;
        }
        if(minutes < 10) {
            minutes = "0" + minutes;
        }        
        if(seconds < 10) {
            seconds = "0" + seconds;
        }
  
  var clockDiv = $('#clock');
  clockDiv.html(hours + ":" + minutes + ":" + seconds);
  
  var dayDiv = $('#day');
  dayDiv.html('<p>the day is something like</p> ' + month + "."  + day + "."  + year);

}; // end of displayTIme function

displayTime();
setInterval(displayTime, 1000);