const pariDispari = prompt('decidi pari o dispari');

const numeroUtente = parseInt(prompt('dimmi un numero da 1 a 5'));

const numeroComputer = numRandom();

console.log(numeroComputer);

const somma = numeroComputer+numeroUtente;


const esito = oddEven();

console.log(esito);


if(pariDispari === esito){
  alert('utente win');
}else{alert('computer win')}



function numRandom(){
  x = Math.ceil(Math.random()*5);
  return x;
}

function oddEven(){
  if(somma % 2 === 0){
    return 'pari'
  }else{
    return 'dispari'
  }
}