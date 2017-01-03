var datetime = null,
        date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

$(document).ready(function(){
    datetime = $('#time')
    update();
    setInterval(update, 1000);

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


});
