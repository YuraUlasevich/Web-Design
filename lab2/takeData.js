var myDiv = document.getElementById("myDiv");

myDiv.addEventListener("click", function() {
    var request = new XMLHttpRequest();
    request.open('GET', "qa.txt", false);
    request.send();
    console.log(request);
    if(request.status == 200){
        document.getElementById("answer").innerHTML = request.responseText;
    }
});
