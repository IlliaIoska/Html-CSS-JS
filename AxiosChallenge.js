const form = document.querySelector("#searchForm");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.querySelector("input");
    const showTitle = input.value;
    reqTVShows(showTitle);
})
const reqTVShows = async(filmTitle) => {
    try {
        const reqSpecs =  {params: {q: filmTitle}};
        const res  = await axios.get("https://api.tvmaze.com/search/shows", reqSpecs);
        getShowsImages(res.data);
    } catch(e) {
        console.log("Error!", e);
    }
    
}

const getShowsImages = (shows) => {
    for (let showRecord of shows) {
        if (showRecord.show.image) {
            const showImg = document.createElement("IMG");
            showImg.src = showRecord.show.image.medium;
            document.body.append(showImg);
        }
    }
}

