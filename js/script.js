// FizzBuzz (senza usare le funzioni)
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// 1) imposto una variabile per poi andare a sostiure al numero la stringa con il suo nome
var numero;
var i;
for (i = 1; i <= 100 ; i++){
  //2)Imposto con priorità il valore comune ad entrambi i numeri altrimenti 
  if ( i % 3 == 0 && i % 5 == 0){
    numero = "FizzBuzz";
  } else if (i % 5 == 0) {
    numero = "Buzz";
  } else if (i % 3 == 0) {
    numero = "Fizz";
  } else {
    numero = i;
  }
  console.log(numero);
}
