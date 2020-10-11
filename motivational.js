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
  url:"https://www.googleapis.com/books/v1/volumes?q=motivational" ,
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
    item=res.items[i];
    console.log(item);
    t1= item.volumeInfo;
    t2=item.id;
    rating=item.averageRating ;
    console.log(t2);
    console.log(t1);
    title=t1.title;
    console.log(title);
    author= t1.authors || "n/a";
      console.log(author);
     // list.innerHTML+= "AUTHOR:"+ author+"<br />"
      publisher=t1.publisher || "n/a";
      description=t1.description;
     // list.innerHTML+= "PUBLISHER:"  + publisher+"<br />"
      
      book=t1.industryIdentifiers[1];
      //books=t1.industryIdentifiers[2];
      console.log(book);
     
      item=res.items[0];
      t1= item.volumeInfo;
      bookI=t1.imageLinks;
      bookIm=bookI.thumbnail;
      console.log(bookIm);
      
   



var listing = 
      '<div id="' + i + '" class="entry">' + 
        
        '<div class="stats">' +
          '<hr>' + 
          '<h4>Rank ' + title + '</h4>' +
          '<p>' + 
        '<img src="' +"http://books.google.com/books/content?id="+t2+"&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" + '">' + 
        '</p>' + 
        '<h4>By ' + author + '</h4>' +
          
        '</div>' +
        
        '<p>Published by' +publisher + '</p>' +
        '<p>' + description + '</p>' + 
        '<h4>Rating: ' + rating+ '</h4>' 
        //'<h2><a href="' + buylink+'" >'+'<img src="download.png" style="width: 30px; height:30px ;position:relative;left:50%">'+ '</a></h2>'
      '</div>';
      
      $('#xd').append(listing);
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
