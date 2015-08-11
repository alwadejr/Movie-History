define(function(){
  return function(){
      var userInput = $('#inputTitle').val();
      console.log(userInput);
      $.ajax({
        url:"http://www.omdbapi.com/?t=" + userInput,
        method: "GET"
      }).done(function(data){
        console.log(data);
        $.ajax({
          url: "https://movie-application.firebaseio.com/.json",
          method: "POST",
          data: JSON.stringify(data)
        }).done(function(){
          console.log("loaded to firebase");
          });
      });
    };
});