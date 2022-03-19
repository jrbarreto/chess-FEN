const u1 = "2rqk2r/1p3pp1/p2bbn1p/3p4/3Q1N2/P1N1P1P1/1P3P1P/R3KB1R w KQk - 1 14";
const u2 = "8/5pp1/3p4/2p1p3/3PP3/2P5/5PP1/8";
const u3 = "8/8/8/8/3PP3/2P5/5PP1/8 w - - 0 1";
const u4 = "8/8/1P6/8/3PP3/2P5/5PP1/8 w - - 0 1";
const u5 = "8/8/4p3/8/3PP3/2P5/5PP1/8 w - - 0 1";
const u6 = "8/8/8/4p3/3PP3/2P5/5PP1/8 w - - 0 1";

const db1 = "r2q1rk1/1b1nbppp/p2p1n2/1pp1p3/3PP3/2P2N1P/PPBN1PP1/R1BQR1K1 w - - 0 13";


//Convierte a los FEN en al patron que necesitamos para comparar.
//Este ejemplo lo he modificado para que sólo cambie los numeros por "X"
// [rnbqkbnr/pppppppp/xxxxxxxx/xxxxxxxx/xxxxxxxx/xxxxxxxx/PPPPPPPP/RNBQKBNR]
function convertFenToFenX(fen) {
	const regex2 = /[1-8]/;
	const x = '-'; 
	const structure = fen.split(" ").slice(0, 1).join('').split(''); 
	const li = structure.map(item => item.replace(regex2, x.repeat(item))); 
	const resp = li.join('');
	return resp;
};

//Funcion para generar el array que contenga la ubicacion de los 'p' del fen del usuario
// [rnbqkbnr/pppppppp/xxxxxxxx/xxxxxxxx/xxxxxxxx/xxxxxxxx/PPPPPPPP/RNBQKBNR]
// arrp = [10,11,12,13,14,15,16,17] y arrP = [55, 56, 57, 58, 59, 60, 61, 62]
function convertArrayOfP(fenx, letter) {
  let arrayOfP = [];
  for(let i=0; i < fenx.length; i++) {
    if(fenx[i] === letter) {
      arrayOfP = [...arrayOfP, i];
    }
  }
  return arrayOfP;
}


//Funcion que recorre el fen de la DB y compara sus 'p's con las ubicaciones del array generado en la f anterior
function counterComparePs(fenxDB, pSearch, letter) {
  let num = 0; 
  for(let i = 0; i <= pSearch.length; i++) {
    const valor = pSearch[i];
    if(fenxDB[valor] === letter) {
      num++;
    }
  }  
  const aprob = num === pSearch.length;
  return aprob;
}


function compareFENStructures(a, b) {

  const fenUser = convertFenToFenX(a);
  const fenDB = convertFenToFenX(b);

  const pLowercaseUser = convertArrayOfP(fenUser, 'p');
  const pUppercaseUser = convertArrayOfP(fenUser, 'P');


  const compLower = counterComparePs(fenDB, pLowercaseUser, 'p');
  const compUpper = counterComparePs(fenDB, pUppercaseUser, 'P');


  const finish = compLower && compUpper ? 'Tequila!!!' : 'No Tequila :c';

  return finish;
}


const comp1 = compareFENStructures(u1, db1);
console.log(comp1);

const comp2 = compareFENStructures(u2, db1);
console.log(comp2);

const comp3 = compareFENStructures(u3, db1);
console.log(comp3);

const comp4 = compareFENStructures(u4, db1);
console.log(comp4);

const comp5 = compareFENStructures(u5, db1);
console.log(comp5);

const comp6 = compareFENStructures(u6, db1);
console.log(comp6);