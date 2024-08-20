//BFS and DFS are search algorithms

//Vertex visiting and Vertex exploration

// BFS - We visit all neighbors before exploring to the next vertex
// DFS - We keep exploring the next vertex until there are no neighbors to visit before coming back

//--- BFS ---//
// Uses a Queue data structure
// All neighboring vertex must be visited before exploring the next vertex
//Add visited vertex to the queue
//Select next vertex to explore from the queue Q[0]

//--- DFS ---//
// Uses a Stack  data structure

const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

function depthFirstSearch(graph, source) {
  const stack = [source];

  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);
    stack.push(...graph[current]);
  }
}

function depthFirstSearchRecursion(graph, source){
    console.log(source);

    for(const neighbors of graph[source]){
        depthFirstSearchRecursion(graph, neighbors) 
    }
}

// depthFirstSearch(graph, "a");
// depthFirstSearchRecursion(graph, 'a')

function breathFirstSearch(graph, source){
    const queue = [source];

    while(queue.length>0){
        const current = queue.shift();
        console.log(current);

        queue.push(...graph[current])
    }
}

breathFirstSearch(graph, 'a')

// problem hasPath

function hasPathDFS(graph, source, destination){

    const stack = [source];

    while(stack.length > 0){
        const current = stack.pop();

        for(const neighbor of graph[current]){
            if(neighbor === destination) return true;
            stack.push(neighbor)
        }
    }

    return false;

}

const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = {};
  
    for(const edge of edges){
  
      if(graph[edge[0]]){
        graph[edge[0]].push(edge[1])
      }else{
        graph[edge[0]] = [edge[1]]
      }
  
      if(graph[edge[1]]){
        graph[edge[1]].push(edge[0])
      }else{
        graph[edge[1]] = [edge[0]]
      }
    }
  
    const set = new Set();
    const stack = [nodeA];
  
     while(stack.length > 0){
       const current = stack.pop();
  
       if(set.has(current)) continue;
       
       for(const neighbor of graph[current]){
         if(neighbor === nodeB) return true;
  
         stack.push(neighbor)
       }
  
       set.add(current);
     }
  
    return false;
    
  };
  

  const connectedComponentsCount = (graph) => {

    let count = 0;
    const visited = new Set();
  
    for(const item in graph){
  
      if(visited.has(item)) continue;
      
      const stack = [item];
      
      while(stack.length > 0){
        const current = stack.pop();
  
        if(visited.has(String(current))) continue;
  
        for(const neighbor of graph[current]){
          stack.push(neighbor);
        }
        visited.add(String(current));
  
      }
  
      count++;  
    }
  
    return count;
  };

  
  const shortestPath = (edges, nodeA, nodeB) => {
    const graph = {};
  
    for(const edge of edges ){
      if(!(edge[0] in graph))  graph[edge[0]] = [];
       if(!(edge[1] in graph))  graph[edge[1]] = [];
  
      graph[edge[1]].push(edge[0])
      graph[edge[0]].push(edge[1])
    }
  
    const queue = [[nodeA, 0]];
    const visited = new Set();
  
    while(queue.length > 0){
      const current = queue.shift();
  
      if(visited.has(current[0])) continue;
  
      if(current[0] === nodeB) return current[1];
  
      for(const neighbor of graph[current[0]]){
        queue.push([neighbor, current[1]+1])
      }
      visited.add(current[0]);
    }
  
    return -1;
    
  };
  

  const largestComponent = (graph) => {
    const visited = new Set();
    let longest = 0;
    
    for(const item in graph){
  
      if(visited.has(item)) continue;
  
      const stack = [item];
      let path = 0;
  
      while(stack.length >0){
        const current = stack.pop();
  
        if(visited.has(String(current))) continue;
        
        stack.push(...graph[current]);
        path++;
        visited.add(current);
      }
  
      longest = Math.max(path, longest)
    }
  
    return longest;
  };

  const islandCount = (grid) => {

    const visited = new Set();
    const gridHeight = grid.length - 1;
    const gridWidth = grid[0].length - 1;
    let island = 0;
    for(let i=0; i<=gridHeight; i++){
  
      for(let j=0; j<=gridWidth; j++){
        if(grid[i][j] === 'W') continue;
  
        if(visited.has(`${i}#${j}`)) continue;
  
        
        const stack = [[i,j]];
  
        while(stack.length >0){
          const current = stack.pop();
          let [k, l] = current;
  
         
  
          if(visited.has(`${k}#${l}`)) continue;
          //top
          if(k > 0 && grid[k-1][l] ==='L'){
            stack.push([k-1, l])
          }
  
          //bottom
          if(k<gridHeight && grid[k+1][l] ==='L'){
            stack.push([k+1, l])
          }
          
          //left
          if(l>0 && grid[k][l-1]==='L'){
            stack.push([k, l-1])
          }
          
          //right
          if(l<gridWidth && grid[k][l+1]==='L'){
            stack.push([k, l+1])
          }
  
          visited.add(`${k}#${l}`)
          
        }
  
        island++;
      }
    }
  
    return island;
  };
  

  const minimumIsland = (grid) => {
    const visited = new Set();
     const gridHeight = grid.length - 1;
     const gridWidth = grid[0].length - 1;
     let minIsland;
     for(let i=0; i<=gridHeight; i++){
   
       for(let j=0; j<=gridWidth; j++){
         if(grid[i][j] === 'W') continue;
   
         if(visited.has(`${i}#${j}`)) continue;
   
         
         const stack = [[i,j]];
         let path = 0;
   
         while(stack.length >0){
           const current = stack.pop();
           let [k, l] = current;
   
          
   
           if(visited.has(`${k}#${l}`)) continue;
           //top
           if(k > 0 && grid[k-1][l] ==='L'){
             stack.push([k-1, l])
           }
   
           //bottom
           if(k<gridHeight && grid[k+1][l] ==='L'){
             stack.push([k+1, l])
           }
           
           //left
           if(l>0 && grid[k][l-1]==='L'){
             stack.push([k, l-1])
           }
           
           //right
           if(l<gridWidth && grid[k][l+1]==='L'){
             stack.push([k, l+1])
           }
   
           visited.add(`${k}#${l}`)
           path++;
           
         }
 
         if(minIsland){
           minIsland = Math.min(minIsland, path);
         }else{
           minIsland = path;
         }
        
       }
     }
 
   return minIsland;
 };
 