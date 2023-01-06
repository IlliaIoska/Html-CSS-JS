let makeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4 + 1);
        setTimeout(() => {
            if (delay > 3) {
                resolve("resolved!");
            } else {
                reject("rejected!");
            }
        }, delay)
    })
}



makeRequest("fdafds")
.then(() => {
    console.log("Yay!");
})