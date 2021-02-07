let myItems = ["Item one", "Item two", "Item three"];

// setTimeout(function, time) - sets a function to be triggered after a certain time specified in miliseconds

// This function will console log hello after five seconds
// setTimeout(function sayHello() {
//     console.log("Hello");
// }, 5000);

// Function to render items from the array in the HTML
function displayItems() {
    setTimeout(function listIterator() {
        for (let i = 0; i < myItems.length; i++) {
            document.querySelector("body").innerHTML += '<br>' + myItems[i];
        }
    // This one executes after one second, so faster that addItem function
    }, 1000);
};

// Function to add another item
function addItem(item) {
    // await in the async function expects a promise, so this function has to return a promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            myItems.push(item);

            const error = false;

            if (!error) {
                resolve();
            } else {
                reject("Error!")
            }
        // This function should execute after two seconds, wihtout async/await it wouldn't work because it would occur after displayItems function
        }, 2000);
    });

    
}

async function itemHandler() {
    await addItem("Item four");
    displayItems();
}

itemHandler();