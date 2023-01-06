const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 5);
        setTimeout(() => {
            if (delay > 4) {
                resolve("Yay");
            } else {
                reject("Nay");
            }
        }, delay)
    })
        
}

async function makeTwoRequests() {
    try {
        let data1 = await fakeRequest("/lol");
        console.log(data1);
        let data2 = await fakeRequest("/lol2"); 
    } catch(e) {
        console.log("Oops");
        console.log(e);
    }
}

// const delayedColorChange = (color, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             resolve();
//         }, delay)
//     })
// }

// async function rainbow() {
//     await delayedColorChange("green", 1000);
//     console.log("HI");
// }




// let makeRequest = async (url) => {
//     if (url === "abc") {
//         return "Yay";
//     } else {
//         return "Bay";
//     }
// }

// makeRequest("abc")
//     .then((msg) => {
//     console.log("Yay!");
//     console.log(msg);
//     })
//     .catch(() => {
//     console.log("Bay!");
//     })

// let makeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const delay = Math.floor(Math.random() * 6);
//         setTimeout(() => {
//             if (delay > 3) {
//                 resolve("resolved!");
//             } else {
//                 reject("rejected!");
//             }
//         }, delay)
//     })
// }



// makeRequest("fdafds")
// .then(() => {
//     console.log("Yay!");
// })
// .catch(() => {
//     console.log("Bay!");
// })

