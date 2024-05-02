let i = 3;

while (i) {
  alert( i-- );
}


let a = 3;

alert(a--); // shows 3, decreases i to 2

alert(a--) // shows 2, decreases i to 1

alert(a--) // shows 1, decreases i to 0

// done, while(i) check stops the loop


let b = 0;
while (++b < 5) alert( b );

let c = 0;
while (c++ < 5) alert( c );


for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      alert( i );
    }
  }


  let d = 0;
while (d < 3) {
  alert( `number ${d}!` );
  d++;
}


let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}