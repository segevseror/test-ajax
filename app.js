
    $('#setSession').on('click' , function(){
        $.ajax({
            url: "http://localhost/test-api/set.php",
            method : 'POST',
            data: {
                setSession: $('#sessionText').val()
            }
          }).done(function(res) {
              console.log(res);
          });
    })
    
  
    $('#test-btn').on('click' , function(){
        $.ajax({
            url: "http://localhost/test-api/get.php",
            method : 'GET',
            dataType : 'JSON'
        }).done(function(res) {
            $('#msg').html('the session to save in php his: ' + res['test'])
        });
    })


  


  