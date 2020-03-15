/*
Function akan me-return string tersebut dengan menukar karakter yang uppercase menjadi lowercase, 
dan sebaliknya. Spasi dan simbol diabaikan.
*/

function tukarBesarKecil(kalimat) {

    var hurufBesar = kalimat.toUpperCase();
    var hurufKecil = kalimat.toLowerCase();
    var newSentence ='';

    for (var i = 0; i < kalimat.length; i++)
    {
        if (kalimat[i] == hurufBesar[i])
        {
            newSentence += kalimat[i].toLowerCase();
        }
        else if (kalimat[i] == hurufKecil[i])
        {
            newSentence += kalimat[i].toUpperCase();
        }
    }
    return newSentence;
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"