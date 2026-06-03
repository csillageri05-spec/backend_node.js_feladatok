const sqlite3 = require("sqlite3").verbose();
require("dotenv").config();

const dbPath = process.env.DB_FILE || "./database.sqlite";

const connection = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Hiba az SQLite adatbázis megnyitásakor:", err.message);
    return;
  }
  console.log("Sikeresen csatlakozva az SQLite adatbázishoz.");

  // Kapcsolódás után futtatjuk az adatbázis inicializálását
  initDatabase();
});

function initDatabase() {
  // A db.serialize() biztosítja, hogy a lépések sorban, egymás után fussanak le
  connection.serialize(() => {
    // 1. Tábla létrehozása a kért szerkezettel
    connection.run(`
      CREATE TABLE IF NOT EXISTS termek (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nev TEXT NOT NULL,
        ar REAL NOT NULL,
        leiras TEXT,
        kedvezmeny BOOLEAN,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // 2. Ellenőrizzük, hogy vannak-e már adatok a táblában
    connection.get("SELECT COUNT(*) AS count FROM termek", (err, row) => {
      if (err) {
        console.error("Hiba az ellenőrzés során:", err.message);
        return;
      }

      // Ha a darabszám 0, akkor beszúrjuk az alap adatokat
      if (row.count === 0) {
        console.log("Az adatbázis üres. Alapértelmezett adatok hozzáadása...");

        // Előkészítjük a beszúró parancsot (elég a nev, ar, leiras mezőket megadni)
        const insertStmt = connection.prepare(
          "INSERT INTO termek (nev, ar, leiras, kedvezmeny) VALUES (?, ?, ?, ?)",
        );

        // Itt adhatod meg az alap adataidat
        // --- DIÁK- ÉS PROGRAMOZÓBARÁT ALAPADATOK (ÖSSZESEN 8 TERMÉK) ---

        // 1. A túlélőkészlet alapja
        insertStmt.run(
          "Koffein-infúzió 5000 XL",
          2490,
          "Az utolsó éjszakai kódoláshoz. Mellékhatás: látod a mátrixot és beszélsz a routerrel.",
          true,
        );

        // 2. A legfontosabb kolléga
        insertStmt.run(
          "Szent Gumikacsa (Mentális Támasz)",
          990,
          "Professzionális hibakereső és pszichológus. Nem vitatkozik, csak hallgat és nem ítél el.",
          true,
        );

        // 3. A csoda, ami nem létezik
        insertStmt.run(
          "Kód, ami elsőre lefut",
          99999,
          "Mitikus erejű ereklye. Állítólag létezik, de még egyetlen szenior fejlesztő sem látta.",
          false,
        );

        // 4. A záródolgozat védelmezője
        insertStmt.run(
          "Diploma-vonzó Talizmán",
          4500,
          "Megvédi a kódot a prezentáció közbeni 'Merge Conflict'-októl és a váratlan kékhaláltól.",
          true,
        );

        // 5. Az őszinte verziókövetés
        insertStmt.run(
          "Végső_Kész_Záró_NaMostMárTényleg_V5.zip",
          0,
          "A projektnek az a verziója, amit hajnali 4-kor neveztél el, és fogalmad sincs, mi van benne.",
          true,
        );

        // 6. Az MI-asszisztens törékeny lelke
        insertStmt.run(
          "ChatGPT Prémium Könnyek",
          3200,
          "Amikor a mesterséges intelligencia is azt mondja a kódodra, hogy 'Hát, haver, ezt inkább engedjük el'.",
          true,
        );

        // 7. A fejlesztők igazi fegyvere
        insertStmt.run(
          "Ctrl+C + Ctrl+V Billentyűkombináció",
          1490,
          "A modern szoftverfejlesztés alapköve. Kopásálló kivitelben, kifejezetten StackOverflow-huszároknak.",
          true,
        );

        // 8. Veszélyhelyzet esetére
        insertStmt.run(
          "Szenior Energiaital",
          850,
          "Összetevők: 90% pánik, 10% koffein. Garantáltan elmulasztja az imposztor-szindrómát legalább 20 percre.",
          true,
        );

        // Lezárjuk az előkészített folyamatot
        insertStmt.finalize();
        console.log("Alapértelmezett adatok sikeresen feltöltve!");
      }
    });
  });
}

module.exports = connection;
