
let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}


let b = 3;
while (b) { // when i becomes 0, the condition becomes falsy, and the loop stops
  alert( b );
  b--;
}


let c = 3;
while (c) alert(i--);
