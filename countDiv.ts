// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N: number, A: number[]): number[] {
    let map:{[key:number]: number} = {};
    let maxCount = - Infinity;
    let isMaxcount = false;
    let trackCount =0;
 
    for(let i=1; i<=N; i++){
        map[i]=0;
    }
 
 
    for(const item of A){
      
      if(item +1 === N && !isMaxcount){
           isMaxcount = true;
           trackCount = maxCount;
           continue;
        }
        
        if(isMaxcount === true && item +1 !== N && map[item] < trackCount){
            map[item] = trackCount;
        }
 
        const valueCount = map[item] + 1;
        maxCount = Math.max(maxCount, valueCount);
        map[item] = valueCount;
    }
 
    const result:number[] = [];
 
    for(const m in map){
        if(map[m] < trackCount) {
            result.push(trackCount);
        }else{
            result.push(map[m]);
        }
    }
 
    return result;
 }
 