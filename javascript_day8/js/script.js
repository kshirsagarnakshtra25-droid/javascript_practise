// fetch("https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=d9c9eeead83ae94c8c6c2cc9f0ea479a")
//   .then(response => response.json())
//   .then(data => {
//     console.log("Current Temperature:", (data.main.temp - 273.15).toFixed(2) + " °C");
//     console.log("Minimum Temperature:", (data.main.temp_min - 273.15).toFixed(2) + " °C");
//     console.log("Maximum Temperature:", (data.main.temp_max - 273.15).toFixed(2) + " °C");
//     console.log("Pressure:", data.main.pressure + " hPa");
//     console.log("Humidity:", data.main.humidity + "%");
//   })
//   .catch(error => {
//     console.log("Error:", error);
//   });



async function searchMovie(title) {
    const apiKey = " 66c73e66"; // Replace with your actual OMDb API key

    const url = `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${apiKey}`;

    try {
        const response = await fetch(url);
        const movie = await response.json();

        if (movie.Response === "False") {
            console.log(movie.Error);
            return;
        }

        console.log("Title:", movie.Title);
        console.log("Year:", movie.Year);
        console.log("IMDb Rating:", movie.imdbRating);
        console.log("Genre:", movie.Genre);
        console.log("Director:", movie.Director);
        console.log("Actors:", movie.Actors);
        console.log("Plot:", movie.Plot);
    } catch (error) {
        console.log("Error:", error);
    }
}

searchMovie("Inception");