 <head>
        <meta charset="UTF-8">
        <title>mon planing</title>
<!--style de la page--> <link rel="stylesheet" href="datetime.css">
        
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.9.0/moment-with-locales.js"></script>




<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css.map">


<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">


<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.37/js/bootstrap-datetimepicker.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.37/css/bootstrap-datetimepicker.min.css">


</head>
    <body>







         <br>
         <center> 
         <div class="cal">
            <div class="container">
              
                  <div class="div-head">
                        <div class="div-logo">  <img src="else/logo3.jpg" alt=""></div>
                        <div class="div-titre"> <img class="img-titre" src="else/titre5.jpg" alt=""></div>
                        
                    </div>
        
                  <div class="panel">
                        
                       <div class="panel-heading"><p>prennez vos rendez-vous en un seul click</p>
                    </div>
                       

<br><br>

                                   <div class="row">
                                      <div class="col-md-12">
                                           <h5>selectionnez une date et heure pour votre rendez-vous</h5>
                                           <br>
                                           
                          
                                              
                                              <div class="input-group date" id="datetimepicker">
                                              <form  method="post" action="insert.php">
                                              <input type="text" name="date_heure" class="form-control" />
                                       <span class="input-group-addon"><span class="glyphicon-calendar glyphicon"></span></span>
                                          
                                            </div>
                                     
                                  </div>
                                        </div>
                                    
<br>      
                 <input type="submit" class="btn" value="confirmer">
                 
                 <br>
                 <br>
                 <br>
                 </center>
          





                 </form>
                    </div>
               </div>
           </div>
      </div>

  

                
<!--modifier mon rendez vous-->

<footer>
  <center>
  
<p1>
               vous pouvez modifier et annuler  les rendez vous que vous avez reserver au part avant</p1> <br>

               <input type="reset" calss="btn" value="annuler">       
              
         <input type="submit" class="btn"  value="modifier">  
         <br><br>
         <p2> 
  
    merci  de respecter vos rendez-vous et vous rendre au laboratoir a l'heure, tout retard affect nos service ,
    on vous pris de bien vouloir respecter cela .
   </p2>


           


</center>



<footer>

<script>
$(function () {
     var date = new Date();
            var currentMonth = date.getMonth();
            var currentDate = date.getDate();
            var currentYear = date.getFullYear();
            $('#datetimepicker').datetimepicker({ 
              
              format:'MM/DD   HH:mm',
               minDate: new Date(currentYear, currentMonth, currentDate),// daysOfWeekDisabled: [0, 6],
            
                    disabledTimeIntervals: [[moment({ h: 0 }), moment({ h: 6 })], [moment({ h: 17, m: 30 }), moment({ h: 24 })]],
          enabledHours: [ 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
          stepping: 10
            }
                
                
                
                );
                    
        
    
        });

    </script>
        
    </body>
</html>