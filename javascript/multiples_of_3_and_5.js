$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
    });
});

function fct() {
    var output;
    var inpt = answer.value;
    if(inpt == "233168"){
        output = "Correct!";
        document.getElementById("message").innerHTML = output;
        document.getElementById("incorrectBtn").style.display = 'none';
        document.getElementById("correctBtn").style.display = 'inline';
    }
    else{
        output = "Incorrect!";
        document.getElementById("message").innerHTML = output;
        document.getElementById("incorrectBtn").style.display = 'inline';
        document.getElementById("correctBtn").style.display = 'none';
    }
}