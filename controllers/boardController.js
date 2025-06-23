const Board = require('../models/Board');

exports.getBoards = async (req, res) => {
  const boards = await Board.find();
  res.json(boards);
};

exports.createBoard = async (req, res) => {
  const board = new Board(req.body);
  await board.save();
  res.status(201).json(board);
};
