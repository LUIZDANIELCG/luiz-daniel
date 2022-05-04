$(function() {
    $("#button").on("click",function() {
        $("#button").hide();
    })
    $(".item").on("click",function(){
        const tecla= $(this).attr("data-item");
        if (tecla==="clear"){
            $("#result").html("");
            return false;
        }else{
        let valor= $("#result").html();
        valor= valor + tecla;
        $("#result").html(valor);
    }
    })
})