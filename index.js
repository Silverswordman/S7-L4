const dataBooks = function () {
  fetch("https://striveschool-api.herokuapp.com/books",{})
  
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("errore generico");
    }
  });
  .then ((booksData)=> {console.log( "books", booksData)})
};
