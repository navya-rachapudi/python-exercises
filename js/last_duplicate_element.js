const arr = [1, 5, 5, 6, 6, 7, 9];
function dupLastIndex(arr) 
    {
      n = arr.length
        for (let i = n - 1; i > 0; i--) 
        {
            if (arr[i] === arr[i - 1]) 
            {
            return [arr[i], i]
            }
        }
    }
 console.log(dupLastIndex(arr))