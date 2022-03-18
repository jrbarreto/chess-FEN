const { fen1, fen2, fen3 } = require('./data/FENs');
const { convertFenToFenX, convertPGNToFENxList } = require('./utils');
const { pgnDB } = require('./data/PGNs');

// 1. Convertir input (fen que queremos buscar) a fenX
console.log(fen1);
const fenx1 = convertFenToFenX(fen1);
console.log(fenx1, '\n\n');

// 2. Obtener lista de PGN
	// hecho arriba

// 3. Recorrer lista de PGN
const gamesFound = [];

for (let index = 0; index < pgnDB.length; index++) {
	// execute
	const pgn = pgnDB[index];
	const fenxList = convertPGNToFENxList(pgn);
	
	// check if original fenx exists in fenxList
	if (fenxList.includes(fenx1)) {
		console.log('>>>>>>>>>>> Tequila!!! ')
		gamesFound.push(pgn);
	} else {
		console.log('>>>>>>>>>>> No tequila... ')
	}
}

console.log(gamesFound.length);
