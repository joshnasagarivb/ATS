    setInterval(() => {
        console.log("Runs every 1 second"); 
    }, 1000);
    setTimeout(() => {
        console.log("Runs every 1 second");  
    }, 1000);
    setImmediate(() => {
        console.log("Runs");  
    });