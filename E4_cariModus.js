
function cariModus(arr) {
    
    var counter = 0;
    var modusCount = 0;
    var numModus = 0;
    var jmlModus = 0;
    
    for (var a = 0; a < arr.length; a++)
    {
        for (var b = 0; b < arr.length; b++)
        {
            if (arr[a] === arr [b] && a !== b)
            {
                counter += arr[a];
            }
        
            if (counter > modusCount)
            {
                modusCount = counter;
                numModus = a;
            }
        }
    }

    if (numModus === 0)
    {
        return -1;
    }

    for (var c = 0; c < arr.length; c++)
    {
        jmlModus += arr[c];

        if (jmlModus / arr.length === arr[c])
        {
            return -1;
        }   
    }
    return arr[numModus];
}

  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1