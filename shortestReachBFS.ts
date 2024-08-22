

function bfs(n: number, m: number, edges: number[][], s: number): number[] {
    let dist:{[key:string]:number} = {};
    const graph:{[key:string]:number[]} = {};
    
     for(let i=1; i<=n; i++){
         dist[i]= -1
         graph[i] = []
     }
     
     for(const edge of edges){
         graph[edge[0]].push(edge[1]);
         graph[edge[1]].push(edge[0])
     }
     
     const queue = [s];
     dist[s] =0;
     
     while(queue.length>0 ){
         const current = queue.shift();
   
         for(const neighbor of graph[current]){
            if(dist[neighbor] === -1){
             queue.push(neighbor);
             dist[neighbor] = dist[current] + 6
            }
         }
     }
     const result = [];
     for(let i=1; i<=n; i++){
         if(i !== s){
             result.push(dist[i])
         }
     }
   
    return result;
   }