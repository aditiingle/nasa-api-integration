# nasa-api-integration
This project is a web application that displays NASA's Astronomy Picture of the Day (APOD) using the NASA API. Built with Express.js, EJS, and Axios, the app dynamically retrieves and showcases daily space images with detailed descriptions. It features a user-friendly interface styled with CSS and serves static assets from a public folder, displaying images from NASA’s collection.

![Preview of my website](https://github.com/aditiingle/nasa-api-integration/blob/developer/home.png)

## Getting Started

To get started with this project, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/nasa-apod-project.git
    cd nasa-api-integration
    ```

2. Initialize npm (if not already done):

    ```bash
    npm init -y
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory of the project and add your NASA API key in the following format:

    ```
    NASA_API_KEY=your_api_key_here
    ```

5. Start the server:

    ```bash
    nodemon index.js
    ```

6. Open your browser and go to `http://localhost:3000` to view the project.

### File Structure

- `app.js`: Main server file (or `index.js` if that’s the name of your main file).
- `/views`: Contains EJS templates for rendering pages.
- `/public`: Contains static files like CSS and images.
