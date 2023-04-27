const data = (req, res) => {
    res.send({
        "nodejs": "Node.js is an open-source, cross-platform, Javascript runtime environment built on Chrome’s V8 Javascript engine that executes Javascript Code outside a web browser.",
        "Open source": "Open source mean code that is designed to be publicly accessible",
        "cross-platform": "We can run nodejs code on various platforms like Mac, Windows, or Where javascript is installed, The code we wrote in one machine can run on another machine.",
        "Run-Time Environment": "The runtime environment is just the environment in which your application is running.",
        "sync & async": "Nodejs is asynchronous and single-threaded in nature",
    })
}