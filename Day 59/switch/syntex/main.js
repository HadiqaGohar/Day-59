let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too big' );
    break;
  default:
    alert( "I don't know such values" );
}


let b = 2 + 2;

switch (b) {
  case 3:
    alert( 'Too small' );
  case 4:
    alert( 'Exactly!' );
  case 5:
    alert( 'Too big' );
  default:
    alert( "I don't know such values" );
}


let c = "1";
let d = 0;

switch (+c) {
  case d + 1:
    alert("this runs, because +c is 1, exactly equals d+1");
    break;

  default:
    alert("this doesn't run");
}