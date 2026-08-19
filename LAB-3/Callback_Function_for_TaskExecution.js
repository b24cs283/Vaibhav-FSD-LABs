function doTask(callback) {
    console.log("Task is running");

    callback();
}

function taskCompleted() {
    console.log("Task is completed");
}

doTask(taskCompleted);