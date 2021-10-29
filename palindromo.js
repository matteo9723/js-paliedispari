 let risposta = palindroma(prompt('inserisci una parola'));   

 alert(risposta);

function palindroma(parola) {

  let parolaDivisa = parola.split('');

  let esito = 0
  
  k = 1 ;
  
  for(let i = 0 ; i < (Math.floor(parolaDivisa.length / 2)) ; i++){
     
     if(parolaDivisa[i]===parolaDivisa[parolaDivisa.length - k]){
      esito = esito + 1 ;
    }
    k++
  }
  
   if(esito === (Math.floor(parolaDivisa.length / 2))){
     return 'la parola è palindroma';
   }else{return 'la parola non è palindroma'};
       
}
