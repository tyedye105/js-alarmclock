var AlarmClock =require('./../js/alarm-clock.js').alarmclockModules;

var analogTime = null,
        date = null,
        time = null,
        audioElement= null,
        alarms = [];

var update = function () {
    time = moment(new Date());
    date.html(time.format('dddd, MMMM Do YYYY'));
    analogTime.html(time.format( 'h:mm:ss a'));
    alarms.forEach(function(alarm,index) {
      if (alarm.hours === time.get('hour') && (alarm.minutes === time.get('minutes'))){
        alarms.splice(index,1);
        $('#myModal').modal('show');
        playSound();
      }
    });
};
function playSound(){
  audioElement;
  if(!audioElement) {
    audioElement = document.createElement('audio');
    audioElement.innerHTML = '<source src="' + 'alarm.mp3'+ '" type="audio/mpeg" />'
  }
  audioElement.play();
}
$(document).ready(function(){
    analogTime = $('#analogTime');
    date = $('#date');
    update();
    setInterval(update, 1000);
    $("#setAlarm").submit(function(event){
      event.preventDefault();
      var hours = parseInt($('#hours').val());
      var minutes = parseInt($('#minutes').val());
      var ampm = $('#ampm option:selected').val();
      (ampm === "AM") ? hours = hours : hours = hours + 12;
      var alarm = new AlarmClock (hours, minutes);
      alarms.push(alarm);
    });
    $("#addAlarm").click(function() {
      $("#alarmForm").toggleClass("hidden");
    });
    $("#snoozeForm").submit(function(event){
      event.preventDefault();
      var snooze = parseInt($('#timeTosnooze').val());
      var minutes = (time.get('minutes') + snooze) % 60;
      var hours = null;
      (time.get('minutes') + snooze) >= 60 ? hours = time.get('hours') + 1 : hours = time.get('hours');
      var alarmSnooze = new AlarmClock( hours, minutes);
      alarms.push(alarmSnooze);
      $('#myModal').modal('hide');
      audioElement.pause()
      console.log(alarms)
    });
});


// $('#time').text(moment("123", "hmm").format("HH:mm"));
// $('#time').text(moment('2012 July','YYYY MMM', 'en'));
// moment().get('date');
// moment().set('month', 3);  // April
// moment().add(7, 'days').subtract(1, 'months').year(2009).hours(0).minutes(0).seconds(0);
// moment().add({days:7,months:1}); // with object literal

// var a = moment([2007, 0, 28]);
// var b = moment([2007, 0, 29]);
// a.from(b) // "a day ago"


// moment([2007, 0, 29]).toNow(); // in 4 years

// var a = moment([2007, 0, 28]);
// var b = moment([2007, 0, 29]);
// a.to(b) // "in a day"

// var timer = moment.duration(5, "seconds").timer({loop: true}, function() {
//   // Callback
// });
