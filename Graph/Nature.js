class SpiderWeb {
  constructor() {
    this.adjacencyList = {};
  }

  // add a vertex
  addAnchorThread(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  // add a edge 
  addFrameThread(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) this.addAnchorThread(vertex1);
    if (!this.adjacencyList[vertex2]) this.addAnchorThread(vertex2);
    this.adjacencyList[vertex1].push(vertex2);
    // this.adjacencyList[vertex2].push(vertex1);
  }

  // remove a edge
  removeFrameThread(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(vertex => vertex !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vertex => vertex !== vertex1);
  }

  // remove a vertex
  removeAnchorThread(vertex) {
    while(!this.adjacencyList[vertex]?.length) {
      let adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeFrameThread(vertex, adjacentVertex)
    }
    delete this.adjacencyList[vertex];
  }

  // display the graph
  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex, ":", this.adjacencyList[vertex])
    }
  }

}

const graph = new SpiderWeb()

graph.addAnchorThread('Wall Art');
graph.addAnchorThread("Walked by Mindset Coach")
graph.addFrameThread("Wall Art", "Walked by Mindset Chach")

graph.addAnchorThread('ChatGPT');
graph.addFrameThread("ChatGPT", "Walked by Mindset Chach")

graph.addAnchorThread('Decided to sprint during my walk')
graph.addFrameThread("ChatGPT", "Decided to sprint during my walk");


graph.addAnchorThread("Scrimba");
graph.addAnchorThread("Speader at Meetup referenced JavaScript frequently and Job search")
graph.addFrameThread("Scrimba", "Speader at Meetup referenced JavaScript frequently and Job search")

graph.addAnchorThread("Wild Life")
graph.addAnchorThread("Apon returning wall art I crossed paths with a family walking their kids and dogs")
graph.addFrameThread("Wild Life", "Apon returning wall art I crossed paths with a family walking their kids and mini dogs")

graph.addAnchorThread("Sora generated wild life")
graph.addFrameThread("Wild Life", "Sora generated wild life")

graph.addAnchorThread("Linkedin")
graph.addFrameThread("ChatGPT", "Linkedin")

graph.addAnchorThread("Samsung Health Ring closed as I was walking by a person, not isolated from people")
graph.addFrameThread("Linkedin", "Samsung Health Ring closed as I was walking by a person, not isolated from people")

graph.addAnchorThread("Random person on linkedin stumbled across a comment of mine, then read my resume. Finaly the answer is clear to the question Where are you? Moderatly Average.")
graph.addFrameThread("Wild Life", "Random person on linkedin stumbled across a comment of mine, then read my resume. Finaly the answer is clear to the question Where are you? Moderatly Average.")





graph.display();