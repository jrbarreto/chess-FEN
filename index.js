const { Chess } = require('chess.js')

function deleteTags(pgn) {
	const result = pgn.replace(/\[[^\]]*\]/g, '');
	return result.replaceAll('\n', '');;
}

function deleteSubVariations(pgn) {
	var result = pgn;

	while (result.includes('{') || result.includes('}')) {
		const start = result.indexOf('{');
		const end = result.indexOf('}');
		result = result.slice(0,start) + result.slice(end+2, result.length)
	}
	
	return result;
}

function cleanNumbersAndSymbols(pgn) {
	return pgn.replace(/\d+\./g, '');
}

function convertStringMovesToList(pgn) {
	const moveList = pgn.split(' ').filter(x => x !== '')

	// delete game result or the last move (could improve but actully we don't need the last move)
	return moveList.slice(0, moveList.length - 1);
}

function convertMoveListToFENList(moveList) {
	const chess = new Chess();

	return moveList.map(move => {
		chess.move(move);
		return chess.fen();
	});
}

function convertFenToFenX(fen) {
	const regex1 = /[1rnbqk]/i;
	const regex2 = /[2-8]/;
	const x = 'x';
  
	const structure = fen.split(" ").slice(0, 1).join('').split('');
  
	const li = structure.map(item => {
	  
	  return item
		.replace(regex1, x)
		.replace(regex2, x.repeat(item));
  
	});
  
	const resp = li.join('');
	return resp;
};

function convertFenListToFenxList(fenList) {
	const fenxList = [];

	fenList.forEach(fen => {
		const fenX = convertFenToFenX(fen);
		fenxList.push(fenX);
	});

	return fenxList;
}

function convertPGNToFENxList(PGN) {
	// PGN cleanup
	let pgn = deleteTags(PGN);
	pgn = deleteSubVariations(pgn);
	pgn = cleanNumbersAndSymbols(pgn);

	// convert clean PGN to move list: e.g: "e4 e5 Nf3 Nc6 Bc4 Bc5" to ["e4", "e5", "Nf3", "Nc6", "Bc4", "Bc5"]
	const moveList = convertStringMovesToList(pgn);
	const fenList = convertMoveListToFENList(moveList);

	// convert every move of the list to fenX position (e.g: "e4" to ["XXXXXXXX/pppppppp/XXXXXXXX/XXXXXXXX/XXXXPXXX/XXXXXXXX/PPPPXPPP/XXXXXXXX"])
	const fenXList = convertFenListToFenxList(fenList);

	return fenXList;
}

/* ------------------------------------------------------*/

/**
 * Receivs a FEN position and a list of PGNs and returns the PGNs that match the pawn structure of the FEN position
 * @param {string} fenPosition 
 * @param {Array<string>} pgnList
 * @returns {Array<string>} a list of PGNs that match the pawn structure of the FEN position
 */
function findGamesByPawnStructure(fenPosition, pgnList) {
	// convert fen input to fenX
	const fenx = convertFenToFenX(fenPosition);
	const foundGames = [];
	
	// iterate PGN database
	pgnList.forEach(pgn => {
		// convert pgn to fenxList
		const fenxList = convertPGNToFENxList(pgn);

		// check if original fenx exists in fenxList
		if (fenxList.includes(fenx)) {
			console.log('>>>>>>>>>>> Tequila!!! ')
			foundGames.push(pgn);
		}
	});	

	return foundGames;
}

module.exports = { findGamesByPawnStructure, convertFenToFenX };
