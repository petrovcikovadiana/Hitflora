const path = require("path");

module.exports = {
  entry: "./src/index.js", // Adjust the entry point based on your project
  output: {
    filename: "bundle.js", // Output file name
    path: path.resolve(__dirname, "dist"), // Output directory
    publicPath: "/", // Public path for the bundled files
  },
  module: {
    rules: [
      // Define rules for handling different file types (e.g., JavaScript, CSS, etc.)
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"), // Serve content from the 'dist' directory
    port: 3000, // Port number for the development server
    historyApiFallback: {
      index: "/Hitflora/index.html",
    }, // Enable history API fallback for client-side routing
  },
};
