for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
    alert(i);
  }


  // for (let i = 0; i < 3; i++) alert(i)

// run begin
let a = 0
// if condition → run body and run step
if (a < 3) { alert(a); a++ }
// if condition → run body and run step
if (a < 3) { alert(a); a++ }
// if condition → run body and run step
if (a < 3) { alert(a); a++ }
// ...finish, because now i == 3


for (let i = 0; i < 3; i++) {
    alert(i); // 0, 1, 2
  }
  alert(i); // error, no such variable


  let i = 0;

for (i = 0; i < 3; i++) { // use an existing variable
  alert(i); // 0, 1, 2
}

alert(i); // 3, visible, because declared outside of the loop


let b = 0; // we have i already declared and assigned

for (; b < 3; b++) { // no need for "begin"
  alert( b ); // 0, 1, 2
}


let c = 0;

for (; c < 3;) {
  alert( c++ );
}