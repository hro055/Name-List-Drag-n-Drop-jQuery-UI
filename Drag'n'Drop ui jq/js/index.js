$(document).ready(function() {
  $( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  } );
  
    var myArr=[];
    $(document).on("click", "#add", function(){
        var val = $("#inp").val();
        myArr.push(val);
        $("#inp").val('');
        var output = '';
        for(let i = 0; i< myArr.length; i++) {
            output += "<li class='message ui-state-default' id='"+i+"' draggable='true'><span>"+ myArr[i] +"</span></li>";
            $("#sortable").html(output);
        }

    });


});
 
         











     



