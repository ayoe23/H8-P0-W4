
function naikAngkot(arrPenumpang) {
    
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    
    var arr = [];   
    var bayar = 0;

    for (var i = 0; i < arrPenumpang.length; i++)
    {
        var check = {};

        for (var j = 0; j < rute.length; j++)
        {
            if (rute[j] == arrPenumpang[i][1]) 
            {
                naikDari = j;
            }
            if (rute[j] == arrPenumpang[i][2])
            {
                tujuan = j;
            }
        }
        check.penumpang = arrPenumpang[i][0];
        check.naikDari = arrPenumpang[i][1];
        check.tujuan = arrPenumpang[i][2];

        bayar = ((tujuan - naikDari) * 2000) ;
        check.bayar = bayar;
        
        arr.push(check);
    }
    return arr;
}
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]
