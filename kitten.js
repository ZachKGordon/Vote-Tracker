$(function(){

var cat = function(source){
  this.votes=0;
  this.source=source;
}

photos = []
photos.push(one = new cat('photos/01 - pPA0iM0.jpg'));
photos.push(two = new cat('photos/02 - 7ykJ1xi.jpg'));
photos.push(three = new cat('photos/03 - n91EiPd.jpg'));
photos.push(four = new cat('photos/04 - LDiTFeQ.jpg'));
photos.push(five = new cat('photos/05 - ywavhKp.jpg'));
photos.push(six = new cat('photos/06 - 9Fg6CZS.jpg'));
photos.push(seven = new cat('photos/07 - leaDJOY.jpg'));
photos.push(eight = new cat('photos/08 - XA0PRs2.jpg'));
photos.push(nine = new cat('photos/09 - rkO8XVX.jpg'));
photos.push(ten = new cat('photos/10 - QBZjjMe.jpg'));
photos.push(eleven = new cat ('photos/11 - aGJW6lS.jpg'));
photos.push(twelve = new cat('photos/12 - 60maZWt.jpg'));
photos.push(thirteen = new cat('photos/13 - u9wzm0f.jpg'));
photos.push(fouteen = new cat('photos/14 - vyz8MGP.jpg'));


var number1 = Math.floor(Math.random()* photos.length);
var number2 = Math.floor(Math.random()* photos.length);

if (number1 != number2) {
  $(function(){
    $('#pic1').attr('src',photos[number1].source);
    $('#pic2').attr('src',photos[number2].source);
  })
} else {
  var number1 = Math.floor(Math.random()* photos.length);
  $(function(){
    $('#pic1').attr('src',photos[number1].source);
    $('#pic2').attr('src',photos[number2].source);
  });
}

var total1=0
  $('#button1').click(function() {
  $('#total1').html(function() {
    return total1 += 1 });
  })

  var total2=0
  $('#button2').click(function() {
  $('#total2').html(function() {
    return total2 += 1 });
  });

    $('#button1').click(function(){
        $('#pic2').slideUp();
        $('#button2').slideUp();
    });
    $('#button2').click(function(){
        $('#pic1').slideUp();
        $('#button1').slideUp();
    });
});


// var total=0
//   $('button').click(function() {
//   $(this).html(function() {
//     return total += 1 });
//   var loserId = this.id == 'button1' ? 'button2' :'button1';

//   });

