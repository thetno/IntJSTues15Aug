
(function () {
    console.log("mymodule loading...");
    let x = 99;
    window.theValueOfXIs = x;
    function buttonClicked() {
        console.log("you clicked me");
    }
    let button = document.getElementById("mybutton");
    button.onclick = buttonClicked;
})();