

function flipMatrix(matrix){
    const len = matrix.length - 1;
    const mid = Math.floor(len/2);
    const maxMatrix = [new Array(mid).fill(0), new Array(mid).fill(0)];


    for(let i=0; i<= mid; i++){
        for(let j=0; j<= mid; j++){
            const max = Math.max(matrix[i][j], matrix[i][len-j], matrix[len-i][j], matrix[len-i][len-j])
            maxMatrix[i][j] = max;
        }
    }

    return maxMatrix;
}

const value = [[112,42,83,119], [56, 125, 56, 49], [15, 78, 101, 43], [62,98,114,108]]

console.log(flipMatrix(value))


function findZigZagSequence(arr){
      
    const len = arr.length - 1;
    let left =0;
    let right = len;
    
    while(left < right){
       const min = Math.min(arr[left], arr[right]);
       const max = Math.max(arr[left], arr[right]);
       
       arr[left] = min;
       arr[right] = max;
       
       if(left !== 0){
          const leftMin =  Math.min(arr[left], arr[left-1]);
          const leftMax =  Math.max(arr[left], arr[left-1]);
          
          arr[left -1] = leftMin;
          arr[left] = leftMax;
       }
        
        left++;
        right--;
    }
    
    return arr;
    
}