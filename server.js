const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Nastavení portu
const PORT = 80;

// Middleware pro zpracování těla požadavku
app.use(bodyParser.urlencoded({ extended: true }));

// Statické soubory
app.use(express.static("public"));

// Formulář pro zadání uživatelského jména a hesla
app.get("/", (req, res) => {
  res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Přihlášení</title>
            <link rel="stylesheet" href="/style.css">
        </head>
        <body>
            <div class="login-container">
                <h1>Přihlášení</h1>
                <form action="/login" method="post">
                    <input type="text" id="username" name="username" placeholder="Uživatelské jméno" required>
                    <input type="password" id="password" name="password" placeholder="Heslo" required>
                    <button type="submit">Přihlásit se</button>
                </form>
            </div>
        </body>
        </html>
    `);
});

// Zpracování přihlašovacího formuláře
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  // Zde můžete přidat zpracování uživatelského jména a hesla
  console.log(`Přihlášený uživatel: ${username} + ${password}`);
  res.send(`Hacknuli jsme tvůj účet: ${username} + ${password}`);
});

// Spuštění serveru
app.listen(PORT, () => {
  console.log(`Server běží na http://localhost:${PORT}`);
});
