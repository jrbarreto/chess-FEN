# Chess Pawn structure searcher

This is a powerful chess searcher based on pawn structures.

## What is a FENx?
FenX is a new kind of FEN that ignores all of the pieces and blank spaces to focus on the pawn structure only.

To do it we replace any piece (both white and black) with `x`

e.g: 

after moving e4 the resulting FEN is `rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1`

and this position in FENx should be `xxxxxxxx/pppppppp/xxxxxxxx/xxxxxxxx/xxxxPxxx/xxxxxxxx/PPPPxPPP/xxxxxxxx`

## TODO

- Read a real database (what kind of database?) (PGN, .FEN, CBH)
- Fix PGN with special characters (we should trim them)
- Create frontend
- Get FEN from fronten position
- Show found games
