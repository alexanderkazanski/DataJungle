class TrieNode {
  constructor() {
    this.children = {}
    this.isEndOfWord = false
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode()
      }
      node = node.children[char]
    }
    node.isEndOfWord = true;
  }
  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.isEndOfWord;
  }
  searchPrefix(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char]
    }
    return true;
  }
}

const trie = new Trie();
const eagleSpecies = [
  "Golden Eagle",
  "Bald Eagle",
  "Harpy Eagle",
  "Philippine Eagle",
  "Wedge-Tailed Eagle",
  "White-Bellied Sea Eagle",
  "Crested Eagle",
  "Crowned Hawk Eagle",
  "Martial Eagle",
  "Steller's Sea Eagle"
];
for (let word of eagleSpecies) {
  trie.insert(word);
}

console.log(trie.search("Golden")); // false
console.log(trie.searchPrefix("Golden")); // true

const kingOfTheSky = "Bald Eagle"
console.log(trie.search(kingOfTheSky)) // true
