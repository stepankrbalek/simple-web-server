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
        <form action="/login" method="post">
            <label for="username">Uživatelské jméno:</label>
            <input type="text" id="username" name="username" required>
            <br>
            <label for="password">Heslo:</label>
            <input type="password" id="password" name="password" required>
            <br>
            <button type="submit">Přihlásit se</button>
        </form>
    `);
});

// Zpracování přihlašovacího formuláře
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  // Zde můžete přidat zpracování uživatelského jména a hesla
  console.log(`Přihlášený uživatel: ${username} + ${password}`);
  res.send(`Přihlášený uživatel: ${username}`);
});

// Spuštění serveru
app.listen(PORT, () => {
  console.log(`Server běží na http://localhost:${PORT}`);
});
