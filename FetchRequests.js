


// const ul = document.querySelector("#jokes");
// const btn = document.querySelector("button");


// const addNewJoke = async () => {
//     const joke = await getJoke();
//     const newLi = document.createElement("LI");
//     newLi.append(joke);
//     // ul.append(newLi);
//     ul.appendChild(newLi);

// }
// const getJoke = async () => {
//     try {
//         const header = {headers: {Accept: "application/json"}};
//         const res = await axios.get("https://icanhazdadjoke.com/", header);
//         return res.data.joke;
//     } catch (e) {
//         console.log("oops!", e)
//     }
// }

// btn.addEventListener("click", addNewJoke);

// const getSWCharactersName = async (id) => {
//     try {
//         const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//         console.log(res.data);
//     } catch (e) {
//         console.log("No such data found", e);
//     }
// }

// axios.get("https://swapi.dev/api/peoplef/1/") // axious performes a request and simultaneously returns JSON data
// .then(res => {
//     console.log("Response from axios request: ", res);
// })

// const getSWCharacters = async () => {
// try {
//     const response = await fetch("https://swapi.dev/api/peoplef/1/");
//     const jsonResponse = await response.json();
//     console.log(jsonResponse.name);

//     const response2 = await fetch("https://swapi.dev/api/people/2/");
//     const jsonResponse2 = await response2.json();
//     console.log(jsonResponse2.name);
// } catch (e) {
//     console.log("Oops!", e);
// }
// }

// getSWCharacters();

// fetch("https://swapi.dev/api/people/1/")
// .then((response) => {
//     console.log("Resolved!", response);
//     return response.json();
//     // .then((jsonData) => {
//     //     console.log(jsonData.nam);
//     // })
//     // .catch((e) => {
//     //     console.log("ERROR: ", e);
//     // })
// })
// .then((jsonResponse) => {
//     console.log(jsonResponse.name);
//     return fetch("https://swapi.dev/api/people/2");
// })
// .then((response2) => {
//     console.log("Resolved", response2);
//     return response2.json();
// })
// .then((jsonResponse2) => {
//     console.log(jsonResponse2.name);
// })
// .catch((e) => {
//     console.log("ERROR occured", e);
// })