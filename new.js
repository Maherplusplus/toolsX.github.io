




function Validate() {
    window.value = [];

   if( !$('#form #1').val()){
    window.value.push("\nFirst name")
   }

   if( !$('#form #2').val()){
    window.value.push("\nLast name")
}

if( !$('#form #3').val()){
    window.value.push("\nPersonal website")
}

if( !$('#form #4').val()){
    window.value.push("\nPhone number")
}

if( !$('#form #5').val()){
    window.value.push("\nEmail")
}
if( !$('#form #6').val()){
    window.value.push("\nUsername")
}
    
if( !$('#form #7').val()){
    window.value.push("\nPassword")
}

if( !$('#form #8').val()){
    window.value.push("\nDegree name")
}

if( !$('#form #9').val()){
    window.value.push("\nWhen will you graduate")
}


  

    
  } 

$("#submit").click(function(){

   

   
        alert("the following inputs are empty: " + window.value )
  

    $('#form input').each(function(){
      
        if(!$(this).val()){
            
            $(this).addClass("empty");
            
           
        } else{
            $(this).removeClass("empty");
        }
       
    });
   
   
    
});



$("input").on("change paste keyup", function() {
    $(this).removeClass("empty");


    
 });

 $("#2").on("change paste keyup", function() {
   

    if(!$("#1").val()){
        alert("fill the previous inputs first!");
        $(this).val("");
    }
    
 });

 $("#3").on("change paste keyup", function() {
   

    if(!$("#1").val() || !$("#2").val()){
        alert("fill the previous inputs first!");
        $(this).val("");
    }
    
 });

 $("#4").on("change paste keyup", function() {
   

    if(!$("#1").val() || !$("#2").val() ||  !$("#3").val()){
        alert("fill the previous inputs first!");
        $(this).val("");
    }
    
 });


 $("#5").on("change paste keyup", function() {
   

    if(!$("#1").val() || !$("#2").val() ||  !$("#3").val() || !$("#4").val()){
        alert("fill the previous inputs first!");
        $(this).val("");
    }
    
 });

 $("#6").on("change paste keyup", function() {
   

    if(!$("#1").val() || !$("#2").val() ||  !$("#3").val() || !$("#4").val() || !$("#5").val()){
        alert("fill the previous inputs first!");
        $(this).val("");
    }
    
 });

 $("#7").on("change paste keyup", function() {
   

    if(!$("#1").val() || !$("#2").val() ||  !$("#3").val() || !$("#4").val() || !$("#5").val() || !$("#6").val()){
        alert("fill the previous inputs first!");
        $(this).val("");
    }
    
 });

 $("#8").on("change paste keyup", function() {
   

    if(!$("#1").val() || !$("#2").val() ||  !$("#3").val() || !$("#4").val() || !$("#5").val() || !$("#6").val() || !$("#7").val()){
        alert("fill the previous inputs first!");
        $(this).val("");
    }
    
 });

 $("#9").on("change paste keyup", function() {
   

    if(!$("#1").val() || !$("#2").val() ||  !$("#3").val() || !$("#4").val() || !$("#5").val() || !$("#6").val() || !$("#7").val() || !$("#8").val()){
        alert("fill the previous inputs first!");
        $(this).val("");
    }
    
 });


 $("#save").click(function(){
    
    var str=$("#5").val();
    var nameParts = str.split("@");
    var name = nameParts.length==2 ? nameParts[0] : null;

    alert("The application of " + name + " is saved!");
 })





 function formatISOLocal(d) {
    let z = n => ('0' + n).slice(-2);
    return d.getFullYear()+'-'+z(d.getMonth()+1) + '-' + z(d.getDate());
  }
  
  window.onload = function() {
    let inp = document.querySelector('#9');
    let d = new Date();
    inp.min = formatISOLocal(d);
    inp.defaultValue = inp.min;
    d.setFullYear(d.getFullYear() + 1);
    inp.max = formatISOLocal(d);
   
    console.log(inp.outerHTML);
  }