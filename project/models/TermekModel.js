const db = require("../config/db");

// 1. Minden sor lekérése -> db.all()
const getAll = (callback) => {
  const sql = "SELECT * FROM termek";

  db.all(sql, [], (err, rows) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, rows);
  });
};

// 2. Egyetlen sor lekérése -> db.get()
const getById = (id, callback) => {
  const sql = "SELECT * FROM termek WHERE id = ?";

  db.get(sql, [id], (err, row) => {
    if (err) {
      return callback(err, null);
    }
    // SQLite-nál a db.get alapból egy darab objektumot ad vissza, 
    // így nem kell a [0]-s indexszel trükközni, mint a MySQL-nél.
    callback(null, row); 
  });
};

// 3. Beszúrás -> db.run()
const create = (data, callback) => {
  const sql = `
    INSERT INTO termek (nev, ar, leiras, keszlet)
    VALUES (?, ?, ?, ?)
  `;

  const values = [
    data.nev,
    data.ar,
    data.leiras,
    data.keszlet,
  ];

  // FIGYELEM: Itt sima function()-t használunk arrow function (=>) helyett,
  // mert az SQLite a 'this' kontextusban adja vissza a beszúrt ID-t!
  db.run(sql, values, function (err) {
    if (err) {
      return callback(err, null);
    }
    // Visszaadjuk a MySQL-hez hasonló struktúrát, hogy ne törjön el a kontrollered
    callback(null, { insertId: this.lastID, changes: this.changes });
  });
};

// 4. Frissítés -> db.run()
const update = (id, data, callback) => {
  const sql = `
    UPDATE termek
    SET nev = ?, ar = ?, leiras = ?, keszlet = ?
    WHERE id = ?
  `;

  const values = [
    data.nev,
    data.ar,
    data.leiras,
    data.keszlet,
    id,
  ];

  db.run(sql, values, function (err) {
    if (err) {
      return callback(err, null);
    }
    callback(null, { changes: this.changes });
  });
};

// 5. Törlés -> db.run()
const remove = (id, callback) => {
  const sql = "DELETE FROM termek WHERE id = ?";

  db.run(sql, [id], function (err) {
    if (err) {
      return callback(err, null);
    }
    callback(null, { changes: this.changes });
  });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};