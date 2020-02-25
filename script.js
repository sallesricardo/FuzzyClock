prepos = ['it', 'is'];
minutes = ['oclock',
          'five',
          'ten',
          'quarter',
          'twenty',
          'half',];
junction = ['past',
          'at',
          'to',
          'on',];
hours = [ 'twelve',
          'one',
          'two',
          'three',
          'four',
          'Five',
          'six',
          'seven',
          'eight',
          'nine',
          'Ten',
          'eleven',
          'twelve',];

var last = 0;

function nextstring(){
  $('.Field').removeClass('FieldActive');
  $('.' + classes[last]).addClass('FieldActive');
  last += 1;
  if (last >= classes.length){
    last = 0;
  }
}

//setInterval(nextstring, 1000);

function getTime(){
  var today = new Date();
  var hour = today.getHours();
  var minute = today.getMinutes();
  if (minute >= 35){
    hour += 1;
    if (hour > 24){
      hour = 0;
    }
  }
  if (hour > 12){
    hour -= 12;
  }
  var hour_class = hours[hour];
  $('.Field').removeClass('FieldActive');
  $('.' + prepos[0]).addClass('FieldActive');
  $('.' + prepos[1]).addClass('FieldActive');
  $('.' + hour_class).addClass('FieldActive');
  var minute_class = minutes[0];
  if (minute >= 5 && minute < 10){
    $('.' + minutes[1]).addClass('FieldActive');
    $('.' + junction[0]).addClass('FieldActive');
  } else if (minute >= 10 && minute < 15){
    $('.' + minutes[2]).addClass('FieldActive');
    $('.' + junction[0]).addClass('FieldActive');
  } else if (minute >= 15 && minute < 20){
    $('.' + minutes[3]).addClass('FieldActive');
    $('.' + junction[0]).addClass('FieldActive');
  } else if (minute >= 20 && minute < 25){
    $('.' + minutes[4]).addClass('FieldActive');
    $('.' + junction[0]).addClass('FieldActive');
  } else if (minute >= 25 && minute < 30){
    $('.' + minutes[4]).addClass('FieldActive');
    $('.' + minutes[1]).addClass('FieldActive');
    $('.' + junction[0]).addClass('FieldActive');
  } else if (minute >= 30 && minute < 35){
    $('.' + minutes[5]).addClass('FieldActive');
    $('.' + junction[0]).addClass('FieldActive');
  } else if (minute >= 35 && minute < 40){
    $('.' + minutes[4]).addClass('FieldActive');
    $('.' + minutes[1]).addClass('FieldActive');
    $('.' + junction[2]).addClass('FieldActive');
  } else if (minute >= 40 && minute < 45){
    $('.' + minutes[4]).addClass('FieldActive');
    $('.' + junction[2]).addClass('FieldActive');
  } else if (minute >= 45 && minute < 50){
    $('.' + minutes[3]).addClass('FieldActive');
    $('.' + junction[2]).addClass('FieldActive');
  } else if (minute >= 50 && minute < 55){
    $('.' + minutes[2]).addClass('FieldActive');
    $('.' + junction[2]).addClass('FieldActive');
  } else if (minute >= 55 && minute <= 59){
    $('.' + minutes[1]).addClass('FieldActive');
    $('.' + junction[2]).addClass('FieldActive');
  } else {
    $('.' + minutes[0]).addClass('FieldActive');
  }
  
}

setInterval(getTime, 1000);