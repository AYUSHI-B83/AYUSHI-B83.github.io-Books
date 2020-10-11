

    


 function openNav() {
   document.getElementById("mySidebar").style.width = "250px";
   document.getElementById("main").style.marginLeft = "250px";
}

 function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

$( ".inner-switch" ).on("click", function() {
  if( $( "body" ).hasClass( "dark" )) {
    $( "body" ).removeClass( "dark" );
    $( ".inner-switch" ).text( "OFF" );
  } else {
    $( "body" ).addClass( "dark" );
    $( ".inner-switch" ).text( "ON" );
  }
});






      




$(document).ready(function() {
  var item,title,author,publisher,bookLink;
  //var list= document.getElementById("list");
  searchData=$("#xd").val();
  var searchData;
   
  searchData = searchData.replace(/ /g,''); 
    
  //var bookUrl="https://www.googleapis.com/books/v1/volumes?q="+searchData+":keyes&key=AIzaSyDrqGXMv57Ghi8zzsZgAzBqyF9bveTe4XQ" ;
  
  
  


$("#Search").click(function(){

 // var list= document.getElementById("list");
  console.log("5");
  //list.innerHTML= "";
  
  searchData=$("#xd").val();
  
  console.log(searchData);
  if(searchData=== "" || searchData === null){
      displayError();
  }
  else{
      $.ajax({
          url: "https://www.googleapis.com/books/v1/volumes?q="+searchData+":keyes&key=AIzaSyDrqGXMv57Ghi8zzsZgAzBqyF9bveTe4XQ" ,
          dataType:"json" ,
          success: function(res){
              console.log(searchData);
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
              alert("Something went wrong!....");
          }
      


      })
  
  }
  

});


function displayResults(res){
  //window.open("result.html");
  //window.history.pushState({},"Test","result.html");
 // var list= document.getElementById("list");
  //list.innerHTML= "";
  
     item=res.items[0];
      console.log(item);
      t1= item.volumeInfo;
      t2=item.id;
      console.log(t2);
      console.log(t1);
      title=t1.title;
      console.log(title);
      description=t1.description;
     


      //list.innerHTML= "TITLE:"+title +"<br />"
    // bookI=t1.imageLinks;
     // bookIm=bookI.smallThumbnail;
     // console.log(bookIm);
      
    //  src = bookIm;
              //img = document.createElement('img');

         // img.src = src;
          
        // document.body.appendChild(img);
      
      author= t1.authors;
      console.log(author);
     // list.innerHTML+= "AUTHOR:"+ author+"<br />"
      publisher=t1.publisher;
     // list.innerHTML+= "PUBLISHER:"  + publisher+"<br />"
      
      book=t1.industryIdentifiers[1];
      //books=t1.industryIdentifiers[2];
      console.log(book);
      bookIsbn=book.identifier;
      console.log(bookIsbn);
     // bookIsbns=books.identifier;
     // list.innerHTML= "TITLE:"+title +"<br />" + "AUTHOR:"+ author+"<br />" +"PUBLISHER:"  + publisher+"<br />" +"BOOKISBN:" +bookIsbn; 

     // list.innerHTML= "TITLE:"+title +"<br />" + "AUTHOR:"+ author+"<br />" +"PUBLISHER:"  + publisher+"<br />" +"BOOKISBN:" +bookIsbn ;
      //createButton(); 

      //query="TITLE:"+title +"<br />" + "AUTHOR:"+ author+"<br />" +"PUBLISHER:"  + publisher+"<br />" +"BOOKISBN:" +bookIsbn ;
     // console.log(query);
     // window.location.href = "result.html" + query;




     
var queryString = "?Title:" + title+ "&Author:" + author +"&Publisher:"  + publisher+ "&Description:"+description+"&ISBN:" +bookIsbn ;

window.location.href = "result.html" + queryString ;

      
          
}

// function createButton() {
//     var element = document.createElement("button");
//     element.appendChild(document.createTextNode("Click to Read!!"));
//     var page = document.getElementById("btns");
//     page.appendChild(element);;

//     document.getElementById("btns");

// }


//     function read() {
      
      
//         console.log("mkc");
//     }

  // function read(){
  //     google.books.load();
  
  //     function initialize() {
  //       var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
  //       viewer.load('ISBN:0738531367');
  //     }
  
  //     google.books.setOnLoadCallback(initialize);
  
  // }



  /*function createButton() {
    var element = document.createElement("button");
    element.appendChild(document.createTextNode("Click to Read!!"));
    var page = document.getElementById("btns");
    page.appendChild(element);;
  
    
  
  }  */ 
  
    







      


      /*list.innerHTML += '<div class="row mt-4">' +
                        formatOutput(title1,author1,publisher1,bookIsbn)+
                        formatOutput(title2,author2,bookLink2,bookIsbn2)
                        '</div>'; */


  

  /*function formatOutput(bookImg,title,author,publisher,bookLink,bookIsbn){
      var viewerUrl = 'book.html?isbn='+bookIsbn;
      var htmlCard= '<div class="col-lg-6"><div class="row-no-gutters"><div class="col-md-4"></div><div class= "col-md-8"><div class="card-body"><h5 class="card-title">${title}</h5><p class="card-text">Author: ${author}</p><p class="card-text">Publisher: ${publisher}</p><a target="-blank" href="#" class="btn btn-secondary">Read book</a></div></div></div></div>'
                     
                     return htmlCard; 
         
                  
  }  */


  function displayError(){
      alert("search item cannot be completed");
  }



})







  // function read() {
      
      
  //     console.log("mkc");
  // }



  