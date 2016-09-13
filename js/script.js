$.ajax({
     url: "http://www.dach.org/firmenprofil_Verlag-und-Medienhaus-Harald-Schlecht-Tuttlingen_60130.html",
     dataType: 'text',
     success: function(data) {
          var elements = $("<tbody>").html(data)[0].getElementsByTagName("tr")[0].getElementsByTagName("td")[1].innerHTML;
          
          console.log(elements.split('\n'));
               for(var i = 0; i < elements.length; i++) {
               var theText = elements[i].firstChild.nodeValue;
               // Do something here
               console.log(theText);
          }
     }
});