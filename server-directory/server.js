// const express = require("express");
// const path = require("path");
// const app = express();

// // Nastavení statických souborů
// app.use(express.static(path.join(__dirname, "../")));

// // Definujte cesty
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../", "index.html"));
// });

// app.get("/sitemap.xml", (req, res) => {
//   res.sendFile(path.join(__dirname, "../", "index.html"));
// });

// app.get("/robots.txt", (req, res) => {
//   res.sendFile(path.join(__dirname, "../", "index.html"));
// });

// app.get("/sortiment", (req, res) => {
//   res.sendFile(path.join(__dirname, "../", "index.html"));
// });

// app.get("/kontakt", (req, res) => {
//   res.sendFile(path.join(__dirname, "../", "index.html"));
// });

// app.get("/aktualne", (req, res) => {
//   res.sendFile(path.join(__dirname, "../", "index.html"));
// });

// app.get("/o-nas", (req, res) => {
//   res.sendFile(path.join(__dirname, "../", "index.html"));
// });

// app.get("/nase-sluzby", (req, res) => {
//   res.sendFile(path.join(__dirname, "../", "/index.html"));
// });

// app.get("/sortiment/:categoryName", (req, res) => {
//   res.sendFile(path.join(__dirname, "../", "index.html"));
// });

// app.get("/admin", (req, res) => {
//   res.sendFile(path.join(__dirname, "../", "index.html"));
// });

// // Middleware pro zachycení neexistujících cest
// app.use((req, res, next) => {
//   res.status(404).sendFile(path.join(__dirname, "../", "index.html"));
// });

// // Spusťte server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}`);
// });
