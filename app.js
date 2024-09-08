// Importing the required modules
import express from "express"; // Express framework for building the web server
import axios from "axios"; // Axios for making HTTP requests
import dotenv from "dotenv"; // Import dotenv

dotenv.config(); // Load environment variables

const app = express(); // Create an instance of the Express app
const port = 3000; // Define the port number for the server

app.use(express.static("public")); // Serve static files (like CSS) from the "public" folder

app.set('view engine', 'ejs'); // Set the template/view engine to EJS (for rendering HTML templates)

app.get('/', (req, res) => { // Define the route for the home page ("/")
    res.render("index"); // Render the "index" template (HTML page)
});

app.get('/about', (req, res) => {
    res.render('about');
});

// Define the route for the NASA APOD (Astronomy Picture of the Day) page
app.get('/nasa-apod', async (req, res) => {
    const apiKey = process.env.NASA_API_KEY; // To the user: Add your NASA API key here
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`; // // NASA API endpoint URL

    try {
        const response = await axios.get(apiUrl); // Make a GET request to the NASA API to fetch the APOD data
        res.render('apod', { data: response.data }); // Render the "apod" template and pass the fetched data to it
    } catch (error) {
        res.render('apod', { data: null, error: 'Error fetching data from NASA API.' });
    }
});

// Start the server and listen on the specified port (3000)
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });