const { findGamesByPawnStructure } = require('./index');
const Lichess = require('lichess-client')
const lichess = new Lichess('lip_TFVotLXNmlWVUMeji9r2')

// lichess.account.account().then(console.log)


async function main() {
	const numberOfGames = 5; // number of games to retrieve from lichess
	const username = 'alcalawil';
	const fen = '8/pp3ppp/4p3/8/3P4/8/PP3PPP/8 w - - 0 1'; // fen you want to search for

	const options = { max: numberOfGames, moves: true };
	const fullGames = await lichess.games.listByUser(username, options);
	
	// start processing games
	console.time('process_timer');
	const games = fullGames.map(fullgame => fullgame.moves);
	
	console.log('Lichess games >>>>>\n', games);
	
	// find games by pawn structure
	const gamesByPawnStructure = findGamesByPawnStructure(fen, games, 'string_moves');
	console.log(`Hey we found ${gamesByPawnStructure.length} games`);
	
	console.timeEnd('process_timer')
};

main();