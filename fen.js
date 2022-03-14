const fen1 = "2rqk2r/1p3pp1/p2bbn1p/3p4/3Q1N2/P1N1P1P1/1P3P1P/R3KB1R w KQk - 1 14";
const fen2 = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
const fen3 = "2rqk2r/1p3pp1/p2bbn1p/3p4/3Q1N2/P1N1P1P1/1P3P1P/R3KB1R w KQk - 1 14";


//-----Modificar FEN: BASE -----
const modifiedFen = fen => {

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


const s1 = modifiedFen(fen1);
const s2 = modifiedFen(fen2);
const s3 = modifiedFen(fen3);

console.log(s1);
console.log(s2);
console.log(s3);
