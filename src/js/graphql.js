const query = {
  Movie(title: "Inception") {
    releaseDate
    actors {
      name
    }
  }
}
 
client.request(query)
      .then(data => console.log(data))
