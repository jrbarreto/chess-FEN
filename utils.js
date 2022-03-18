const { Chess } = require('chess.js')

function deleteTags(pgn) {
	const result = pgn.replace(/\[[^\]]*\]/g, '');
	return result.replaceAll('\n', '');;
}

function deleteBraces(pgn) {
	var result = pgn;

	while (result.includes('{') || result.includes('}')) {
		const start = result.indexOf('{');
		const end = result.indexOf('}');
		result = result.slice(0,start) + result.slice(end+2, result.length)
	}
	
	return result;
}

function deleteNumbersAndSymbols(pgn) {
	return pgn.replace(/\d+\./g, '');
}

function convertToMovesList(pgn) {
	const result = pgn.split(' ').filter(x => x !== '')
	// delete last element
	return result.slice(0, result.length - 1);
}

function convertMoveListToFENList(moveList) {
	const chess = new Chess();

	return moveList.map(move => {
		// 1. execute move in chess.js
		chess.move(move);
		// 2. get FEN from chess.js
		// 3. Add FEN to FEN list
		return chess.fen();
		// fenList.push(chess.fen());
	});

	// return fenList;
}

function convertFenToFenX(fen) {
	const regex1 = /[1rnbqk]/i;
	const regex2 = /[2-8]/;
	const x = 'X';
  
	const structure = fen.split(" ").slice(0, 1).join('').split('');
  
	const li = structure.map(item => {
	  
	  return item
		.replace(regex1, x)
		.replace(regex2, x.repeat(item));
  
	});
  
	const resp = li.join('');
	return resp;
};

/* ------------------------------------------------------*/

function convertFenListToFenxList(fenList) {
	const fenxList = [];

	fenList.forEach(fen => {
		const fenX = convertFenToFenX(fen);
		fenxList.push(fenX);
	});

	return fenxList;
}

function convertPGNToFENxList(PGN) {
	// 1. Borrar tags
	const pgn = deleteTags(PGN);

	// 1.1 Borrar {}
	const pgn2 = deleteBraces(pgn);

	// 2. borrar numeros, punto y el espacio que hay antes de la juga del blanco
	const pgn3 = deleteNumbersAndSymbols(pgn2);

	// 3. transoformar PGN a lista de jugadas
	const moveList = convertToMovesList(pgn3);

	// 4. convertir cada jugada a FEN (chess.js)
	const fenList = convertMoveListToFENList(moveList);

	// 5. convertir esa lista FEN a una lista FENx (con la funcion de jaime)
	const fenxList = convertFenListToFenxList(fenList);

	// 6. retornar la lista de FENx
	return fenxList;
}

module.exports = { convertPGNToFENxList, convertFenToFenX };
