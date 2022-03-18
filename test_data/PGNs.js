const PGN_1 = `
[Event "1st Simon Bolivar Open 2012"]
[Site "San Cristobal VEN"]
[Date "2012.09.27"]
[Round "5.9"]
[White "Alcala Vitora,Wilfredo Enrique"]
[Black "Alvarez Pedraza,A"]
[Result "1/2-1/2"]
[WhiteElo "1962"]
[BlackElo "2526"]
[BlackTitle "GM"]
[UTCDate "2022.02.22"]
[UTCTime "17:21:32"]
[Variant "Standard"]
[ECO "E11"]
[Opening "Bogo-Indian Defense: Vitolins Variation"]
[Annotator "https://lichess.org/@/alcalawil"]

1. d4 Nf6 2. c4 e6 3. Nf3 Bb4+ 4. Bd2 c5 5. Bxb4 cxb4 6. Qa4 Nc6 7. Nbd2 O-O 8. e4 d5 9. e5 Ne4 10. Rd1 f6 11. cxd5 exd5 12. Qb3 Kh8 13. Bd3 Nxd2 14. Rxd2 fxe5 15. dxe5 Be6 16. Bb1 Na5 17. Qxb4 Nc4 18. Rd4 Rxf3 19. gxf3 Nxe5 20. Rf4 d4 21. Rg1 Rc8 22. Rg3 d3 23. Kd1 Bd5 24. h4 Qe8 25. Qd4 Rd8 26. Qc3 Rc8 27. Qd4 Rd8 28. Qc3 Bc6 29. h5 Qxh5 30. Qd4 Qe8 31. Qe3 Qh5 32. Qd4 Qh1+ 33. Kd2 Nc4+ 34. Qxc4 Qf1 35. Qd4 Qe2+ 36. Kc3 Qe1+ 37. Kb3 Qe6+ { [%cal Gd3d1] } 38. Kc3 Qe1+ 39. Kb3 Qe6+ 40. Kc3 Qe1+ 41. Kb3 Qe6+ 42. Ka3 Rxd4 { 1/2-1/2 The game is a draw. } 1/2-1/2
`;

const PGN_2 = `
[Event "San Cristobal Bolivar op 1st"]
[Site "San Cristobal"]
[Date "2012.09.28"]
[Round "7"]
[White "Alcala Vitora, Wilfredo Enrique"]
[Black "Ruge, Edison"]
[Result "0-1"]
[WhiteElo "1962"]
[BlackElo "2205"]
[UTCDate "2022.02.23"]
[UTCTime "16:41:57"]
[Variant "Standard"]
[ECO "E76"]
[Opening "King's Indian Defense: Four Pawns Attack, Dynamic Attack"]
[Annotator "https://lichess.org/@/alcalawil"]

1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f4 O-O 6. Nf3 c5 7. d5 e6 8. dxe6 Bxe6 9. Bd3 Bg4 10. O-O Nc6 11. Qe1 Nd7 12. Kh1 Nb4 13. Bb1 Nb6 14. a3 Nc6 15. Bd3 Na5 16. Nd2 Re8 17. Qg3 Be6 18. f5 Bxc4 19. Nxc4 Naxc4 20. Bg5 f6 21. Bxc4+ Nxc4 22. Nd5 fxg5 23. f6 Ne5 24. Qb3 Kh8 25. fxg7+ Kxg7 26. Qxb7+ Kh6 27. Nf6 Rh8 28. b4 Rb8 29. Qxa7 cxb4 30. axb4 Ra8 31. Qxa8 Qxa8 32. Rxa8 Rxa8 33. Rb1 Nc4 34. Kg1 Na3 35. Ra1 { 0-1 White resigns. } 0-1
`;

const PGN_3 = `
[Event "Grand Prix 2022 Belgrade"]
[Site "Belgrade, Serbia"]
[Date "2022.03.13"]
[Round "12.1"]
[White "Rapport, Richard"]
[Black "Andreikin, Dmitry"]
[Result "1-0"]
[WhiteTitle "GM"]
[BlackTitle "GM"]
[UTCDate "2022.03.13"]
[UTCTime "13:46:45"]
[Variant "Standard"]
[ECO "D31"]
[Opening "Queen's Gambit Declined: Janowski Variation"]
[Annotator "https://lichess.org/@/loepare"]
[Event "alcalawil's Study: peon aislado test"]
[Site "https://lichess.org/study/t8ReUnLk/k3wgRSdh"]
[Result "*"]
[UTCDate "2022.03.15"]
[UTCTime "02:12:05"]
[Variant "Standard"]
[ECO "D31"]
[Opening "Queen's Gambit Declined: Janowski Variation"]
[Annotator "https://lichess.org/@/alcalawil"]

1. d4 d5 2. c4 e6 3. Nc3 a6 4. cxd5 exd5 5. a3 h6 6. Bf4 Nf6 7. e3 c5 8. Be5 Be6 9. Nge2 Nc6 10. Nf4 cxd4 11. Bxd4 Nxd4 12. Qxd4 Bd6 13. g3 O-O 14. Be2 Rc8 15. Rc1 *
`;

const pgnDB = [
	PGN_1,
	PGN_2,
	PGN_3
];

module.exports = { pgnDB };
