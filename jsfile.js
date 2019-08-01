
 
function add1( nom ) { 

    var quantite = document.getElementById( nom ).value ++; 
    console.log(quantite)
   
 var total= document.getElementById('ttc1');
 
 
 total.innerHTML=(quantite+1)*549;
 sum();
     
     } 
 
   function substract1( nom ) { 
    if(document.getElementById( nom ).value>0)
        { var quantite = document.getElementById( nom ).value --; 
         console.log(quantite)
       
         var total= document.getElementById('ttc1');
 
 
         total.innerHTML=(quantite-1)*549;
     
         sum();}
     
     } 
 
 
 
     function add2( nom ) { 
 
         var quantite = document.getElementById( nom ).value ++; 
        
      var total= document.getElementById('ttc2');
      
      
      total.innerHTML=(quantite+1)*870;
      sum();
          
          } 
      
        function substract2( nom ) { 
         if(document.getElementById( nom ).value>0){
              var quantite = document.getElementById( nom ).value --; 
             
              var total= document.getElementById('ttc2');
      
      
              total.innerHTML=(quantite-1)*870;
              sum();
          } 
 
 
         }
     
 
          function add3( nom ) { 
 
             var quantite = document.getElementById( nom ).value ++; 
            
          var total= document.getElementById('ttc3');
          
          
          total.innerHTML=(quantite+1)*349;
          sum();
              
              } 
          
            function substract3( nom ) { 
             if(document.getElementById( nom ).value>0){
                  var quantite = document.getElementById( nom ).value --; 
                 
                  var total= document.getElementById('ttc3');
          
          
                  total.innerHTML=(quantite-1)*349;
                  sum();
              } 
     
             }
 
 
              function sum() {
                 let element = 0;
                 let sum = document.getElementById('sum')
                 let prix = Array.from(document.querySelectorAll('.prix'))
                 for (let x = 0; x < prix.length; x++) {
                     element += Number(prix[x].innerText);
                     sum.innerText = element + "$"
                 }
             }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
         
 
    
      
 
 
 