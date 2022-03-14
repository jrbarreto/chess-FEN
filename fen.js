const fen1 = "2rqk2r/1p3pp1/p2bbn1p/3p4/3Q1N2/P1N1P1P1/1P3P1P/R3KB1R w KQk - 1 14";
const fen2 = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
const fen3 = "2rqk2r/1p3pp1/p2bbn1p/3p4/3Q1N2/P1N1P1P1/1P3P1P/R3KB1R w KQk - 1 14";


//-----Modificar FEN: BASE -----
const modifiedFen = fen => {

  const regex1 = /[1rnbqk]/i;
  // const regex2 = /[2345678]/;

  const structure = fen.split(" ").slice(0, 1).join('').split('');

  const li = structure.map(item => {
    const rta = item
      .replace(regex1, 'x')
      .replace('2', 'xx')
      .replace('3', 'xxx')
      .replace('4', 'xxxx')
      .replace('5', 'xxxxx')
      .replace('6', 'xxxxxx')
      .replace('7', 'xxxxxxx')
      .replace('8', 'xxxxxxxx')

    return rta;
  
  });

  const resp = li.join('');
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