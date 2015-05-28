$(function(){

  var cat = function(source){
    this.votes=0;
    this.source=source;
  }

  var photos = []

  var pictures;
  $.ajax({
    url:'https://api.imgur.com/3/album/cv3fW.json',
    headers:{
     "Authorization": "Client-ID d956fdd060faa48"
    }
   })
  .done(function(info) {
    var array = info.data.images;
    console.log(array);
     for (i=0; i < array.length; i++){
      photos.push(new cat(array[i].link));
     }
     console.log(photos);
     last();
   });



  var last = function(){
    var number1 = Math.floor(Math.random()* photos.length);
    var number2 = Math.floor(Math.random()* photos.length);

    if (number1 != number2) {
        $('#pic1').attr('src',photos[number1].source);
        $('#pic2').attr('src',photos[number2].source);
    } else {
      var number1 = Math.floor(Math.random()* photos.length);
        $('#pic1').attr('src',photos[number1].source);
        $('#pic2').attr('src',photos[number2].source);
    }

    var total1=0
    $('#button1').on('click',function() {
    $('#total1').html(function() {
      return total1 += 1 });
    })

    var total2=0
    $('#button2').on('click',function() {
    $('#total2').html(function() {
      return total2 += 1 });
    });

    $('#button1').on('click',function(){
      $('#pic2').slideUp();
      $('#button2').slideUp();
    });
    $('#button2').on('click',function(){
      $('#pic1').slideUp();
      $('#button1').slideUp();
    });
  }

});


