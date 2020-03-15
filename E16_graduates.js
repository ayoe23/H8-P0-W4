/*
Implementasikan function graduates untuk mendapatkan daftar student yang lulus dengan aturan:
- Student dapat dinyatakan lulus apabila score lebih besar dari 75.
- Masukkan name dan score dari student ke class yang dia ikuti.
- Student yang tidak lulus tidak perlu ditampilkan.
*/

function graduates (students) {
    
    var objResult = {};
    var className;

    for (var i = 0; i < students.length; i++)
    {
        className = students[i].class;
        
        if (objResult[className] == undefined)
        {
            objResult[className] = [];
        }
    }
    
    for (var j = 0; j < students.length; j++)
    {
        className = students[j].class;
        
        if (students[j].score > 75)
        {
            objResult[className].push({
                name : students[j].name,
                score : students[j].score,
            });
        }   
    }
    return objResult;
}
    
console.log(graduates([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }
  
  console.log(graduates([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Alexander', score: 100 },
  //     { name: 'Vladimir', score: 92 }
  //   ],
  //   wolves: [
  //     { name: 'Alisa', score: 76 },
  //   ],
  //   tigers: [
  //     { name: 'Viktor', score: 80 }
  //   ]
  // }
  
  
  console.log(graduates([])); //{}