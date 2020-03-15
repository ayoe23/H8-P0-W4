function changeMe(arr) {

    var object = {};

    for (var i = 0; i < arr.length; i++)
    {
        object.firstName = arr[i][0];
        object.lastName = arr[i][1];
        object.gender = arr[i][2];
        object.age = arr[i][3];
        {
            if (object.age == undefined)
            {
                object.age = 'Invalid Birthday';
            }
            else
            {
                object.age = 2020 - arr[i][3];
            }
        } 

        console.log(i+1 + '. ' + object.firstName + ' ' + object.lastName + ' :');
        console.log(object);
    }

    if (arr.length == 0)
    {
        console.log('""');
    }
    
}
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""