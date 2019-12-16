const regForm = document.getElementById('regForm');
var validObjects = document.querySelectorAll('[customValidate]');
validObjects.forEach(function(element) {
    element.addEventListener('blur', function() {
        var emoji = element.previousElementSibling;
        var label = emoji.previousElementSibling;

        if (!element.value) {
            emoji.className = "far fa-frown float-right  text-danger";
            var span = document.createElement("span");
            span.innerHTML = "&emsp;* Required";
            span.style.color = "red";
            if (!label.getElementsByTagName("span")[0])
                label.appendChild(span);
            isValid = false;
        } else {
            emoji.className = "far fa-smile float-right  text-success";
            var span = label.getElementsByTagName("span")[0];
            if (span)
                label.removeChild(span);
            isValid = true;
        }
    });
});
regForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var isValid = true;
    validObjects.forEach(function(element) {
        if(!(element.value)){
            isValid = false;
            return;
        }
     });
    if (!isValid) {
        alert("empty!");
    } else {
        alert("success!");
    }
});