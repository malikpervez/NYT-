const API_KEY = "73b19491b83909c7e07016f4bb4644f9:2:60667290"; 
const LIST_NAME = "hardcover-fiction";
const API_STEM = "https://api.nytimes.com/svc/books/v3/lists";


//async function that grabs the books from NYT api into Json format
function fetchBooks(list_name = LIST_NAME) {
    let url = `${API_STEM}/${LIST_NAME}?response-format=json&api-key=${API_KEY}`;
    return fetch(url)
    .then(response => response.json())
    .then(responseJson => {
        return responseJson.results.books;
    })
    .catch(error => {
        console.log(error);
    })
}

export default fetchBooks;