const fen1 = "2rqk2r/1p3pp1/p2bbn1p/3p4/3Q1N2/P1N1P1P1/1P3P1P/R3KB1R w KQk - 1 14";
const fen2 = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
const fen3 = "2rqk2r/1p3pp1/p2bbn1p/3p4/3Q1N2/P1N1P1P1/1P3P1P/R3KB1R w KQk - 1 14";


//-----Modificar FEN: BASE -----
const modifiedFen = fen => {

  const structure = fen.split(" ").slice(0, 1).join('');
  
  const modifen = [];
  for(let i=0; i < structure.length; i++) {
    switch(structure[i]) {
      case '1':
      case 'r':
      case 'n':
      case 'b':
      case 'q':
      case 'k':
      case 'R':
      case 'N':
      case 'B':
      case 'Q':
      case 'K':
        modifen[i] = 'x';
        break;
      case '2':
        modifen[i] = 'xx';
        break;
      case '3':
        modifen[i] = 'xxx';
        break;
      case '4':
        modifen[i] = 'xxxx';
        break;
      case '5':
        modifen[i] = 'xxxxx';
        break;
      case '6':
        modifen[i] = 'xxxxxx';
        break;
      case '7':
        modifen[i] = 'xxxxxxx';
        break;
      case '8':
        modifen[i] = 'xxxxxxxx';
        break;
      default:
        modifen[i] = structure[i];
    }
  }

  const resp = modifen.join('');
  
  return resp;
};


const s1 = modifiedFen(fen1);
const s2 = modifiedFen(fen2);
const s3 = modifiedFen(fen3);

console.log(s1);
console.log(s2);
console.log(s3);


//----- Comparar FEN: BASE -----
const comparedFens = (fen1, fen2) => {
  return fen1 === fen2;
};


console.log(comparedFens(s1, s2));
console.log(comparedFens(s1, s3));