const { fen1 } = require('./test_data/FENs');
const { pgnDB } = require('./test_data/PGNs');
const { findGamesByPawnStructure, convertFenToFenX } = require('./index');

const fen = '8/pppppppp/8/8/3P4/8/PPP1PPPP/8 w - - 0 1'
console.log(findGamesByPawnStructure(fen, pgnDB, 'pgn'));


// console.log(convertFenToFenX('rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1'))