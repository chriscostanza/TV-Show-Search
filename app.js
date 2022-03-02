const resultsList = document.querySelector("#results")
const searchForm = document.querySelector("#searchForm")

const showSearch = async (searchTerm) => {
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
    for (show of res.data) {
        const newLI = document.createElement('LI')
        const newIMG = document.createElement('IMG')
        if (show.show.image) {
            newIMG.src = show.show.image.medium;
            newIMG.classList = "movieThumb"
        }

        newLI.append(show.show.name, newIMG)
        resultsList.append(newLI)
    }
}

searchForm.addEventListener('input', (event) => {
    event.preventDefault()
    resultsList.innerText = ''
    showSearch(searchForm.elements.query.value);
})