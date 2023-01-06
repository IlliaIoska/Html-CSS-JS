const req = new XMLHttpRequest();

req.onload = () => {
    console.log("LOADED!");
    const data = JSON.parse(this.Response);
    console.log(data);
}

req.onerror = () => {
    console.log("ERROR!");
    console.log(this.responseText);
}

req.open("GET", "https://swapi.dev/api/people/1");
req.send();
