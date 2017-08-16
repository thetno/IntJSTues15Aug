(function() {
    
    let btn = document.getElementById("mybutton");
    btn.onclick = e=>{
        console.log("button pressed, blocking");
        let x = 0;
        setTimeout(
                ()=>console.log("unblocking"),
                5000);
    };
})();