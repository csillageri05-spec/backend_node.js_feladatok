const TermekModel = require("../models/TermekModel");

const getAllTermek = (req, res) => {
  TermekModel.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

const getTermekById = (req, res) => {
  const id = req.params.id;

  TermekModel.getById(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (!result) {
      return res.status(404).json({ message: "Nincs ilyen termék" });
    }

    res.json(result);
  });
};

const createTermek = (req, res) => {
  const data = req.body;

  if (!data.nev || !data.ar) {
    return res.status(400).json({ message: "Hiányzó adatok" });
  }

  TermekModel.create(data, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.status(201).json({
      message: "Termék létrehozva",
      id: result.insertId,
    });
  });
};

const updateTermek = (req, res) => {
  const id = req.params.id;
  const data = req.body;

  TermekModel.update(id, data, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Nincs ilyen termék" });
    }

    res.json({ message: "Termék frissítve" });
  });
};

const deleteTermek = (req, res) => {
  const id = req.params.id;

  TermekModel.remove(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Nincs ilyen termék" });
    }

    res.json({ message: "Termék törölve" });
  });
};

module.exports = {
  getAllTermek,
  getTermekById,
  createTermek,
  updateTermek,
  deleteTermek,
};