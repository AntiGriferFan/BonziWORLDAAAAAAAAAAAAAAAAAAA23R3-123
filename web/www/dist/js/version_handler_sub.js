$(document).ready(function(){
    $.getJSON("../../dist/json/version.json", function(result){
      $.each(result, function(i, field){
        $(".ver").text("BonziWORLD Community Edition  v" + field + " ");
    });
  });
});
