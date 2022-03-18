const { fen1 } = require('./test_data/FENs');
const { pgnDB } = require('./test_data/PGNs');
const { findGamesByPawnStructure, convertFenToFenX } = require('./index');

console.log(findGamesByPawnStructure(fen1, pgnDB)[0]);


console.log(convertFenToFenX('rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1'))