function process(){
    console.log("Start");
    setTimeout(function exec(){
        console.log("Execte some task1");
    },10000);
    for (let index = 0; index <1e9; index++) {
        // some task
    }
    setTimeout(function exec(){
        console.log("Execte some task2");
    },5000);
    for (let index = 0; index <1e9; index++) {
        // some task
    }
    console.log("End");
}

process();
console.log("Global Tata");