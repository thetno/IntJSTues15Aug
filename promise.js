(function () {

    function getSlowNetworkData(x) {
        return new Promise(
                (resolve, reject) => {
            setTimeout(
                    () => {
                if (Math.random() > 0.3) {
                    resolve("network data based on " + x);
                } else {
                    reject(new Error("network failure!!!"));
                }
            }
            , 2000);
        });
    }

    function getButtonClickPromise(btn) {
        return new Promise(
                (resolve, reject) =>
        {
            btn.onclick = () => resolve("Button clicked");
        });
    }

    getButtonClickPromise(document.getElementById("mybutton"))
            .then(x => {
                console.log("got a message from pipeline " + x);
                return "step completed: " + x;
            })
            .then(getSlowNetworkData)
            .then(x => {
                console.log("successful intermediate ");
                return x;
            })
            .then(x => x, e => e.message)
            .then(x => console.log("final answer: " + x))
            ;

    console.log("pipeline configured...");

})(); 