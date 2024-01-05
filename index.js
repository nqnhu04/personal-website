$(document).ready(function(e) {
    //experience cards redirect
    $(".card").on("click", function(){
        let cardId = $(this).attr("id");
        if (cardId === "saikou" ){
            window.open(
                'https://www.saikouniku.com/',
                '_blank'
              );
        } else if (cardId === "directv"){
            window.open(
                'https://github.com/nqnhu04/directv-break-through-tech',
                '_blank'
              );
        } else{
            window.open(
                'https://americanproductdistributor.com/',
                '_blank'
              );
        }
    });
});