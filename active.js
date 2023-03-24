$(".box-dungtich").click(function() {  
    $(".box-dungtich").removeClass("activess"); // This will remove first-list classes from all <li> tags
    $(this).addClass("activess"); // This will add first-list class in clicked <li>   
  });