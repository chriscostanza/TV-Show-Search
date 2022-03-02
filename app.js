const resultsList = document.querySelector("#results");
const searchForm = document.querySelector("#searchForm");

const showSearch = async (searchTerm) => {
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
    for (show of res.data) {
        const newLI = document.createElement('LI');
        const newIMG = document.createElement('IMG');
        const newA = document.createElement('A');
        newA.href = show.show.url
        console.dir(newA)
        if (show.show.image) {
            newIMG.src = show.show.image.medium;
            newIMG.classList = "movieThumb"
        }
        newA.append(show.show.name)
        newLI.append(newA, newIMG)
        resultsList.append(newLI)
    }
}

searchForm.addEventListener('input', (event) => {
    event.preventDefault()
    resultsList.innerText = ''
    showSearch(searchForm.elements.query.value);
})
