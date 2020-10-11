$( ".inner-switch" ).on("click", function() {
    if( $( "body" ).hasClass( "dark" )) {
      $( "body" ).removeClass( "dark" );
      $( ".inner-switch" ).text( "OFF" );
    } else {
      $( "body" ).addClass( "dark" );
      $( ".inner-switch" ).text( "ON" );
    }
  });
  
$.ajax({
    url:"https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Yq4BGhiQmtF9nSumppEnxUIYRJvFCdea" ,
    dataType:"json" ,
    success: function(res){
        
    console.log(res);
        if(Response.totalItem === 0){
            alert("NO RESULTS!!...TRY AGAIN");
            
        }
        else{
           // $("title");
            //$(".book-list").css('visibility:visible');
            
            displayResults(res);

        }
    },
    
    error:function(){
        alert("something wrong!....");
    }



})



function displayResults(res){
    for(var i =0;i<15;i++){
    var book=res.results.books[i];
    console.log(book);
var isbn = book.isbns[0].isbn10;
var buylink=book.buy_links[0].url;
console.log(isbn);
    //var bookInfo = book.book_details[0];
    var lastWeekRank = book.rank_last_week || 'n/a';
    var weeksOnList = book.weeks_on_list || 'New this week!';
    //var image=book.book_image;
  console.log(lastWeekRank);


  var listing = 
        '<div id="' + book.rank + '" class="entry">' + 
          
          '<div class="stats">' +
            '<hr>' + 
            '<h4>Rank ' + book.rank + '</h4>' +
            '<p>' + 
          '<img src="' +book.book_image + '">' + 
          '</p>' + 
            '<p>Last Week: ' + lastWeekRank + '</p>' + 
            '<p>Weeks on list: ' + weeksOnList + '</p>' +
          '</div>' +
          '<h4>By ' + book.author + '</h4>' +
          '<p>Published by' + book.publisher + '</p>' +
          '<p>' + book.description + '</p>' + 
          '<h2><a href="' + buylink+'" >'+'<img src="download.png" style="width: 30px; height:30px ;position:relative;left:50%">'+ '</a></h2>'
        '</div>';
        
        $('#best-seller-titles').append(listing);
       // updateCover(res,i);
    }

}



/*function updateCover( res,i){
    var book=res.results.books[i];
    var image=book.book_image;
    src = image;
              img = document.createElement('img');

          img.src = src;
          
         document.body.appendChild(img);

}
*/
