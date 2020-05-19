/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.value = '';
    this.nextLevel = new Map();
    this.isEndOfWord = false;
};

var Trie = function(character) {
    this.value = character;
    this.nextLevel = new Map();
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let currentNode = this;
    for(const character of word) {
        if(!currentNode.nextLevel.get(character))
            currentNode.nextLevel.set(character, new Trie(character));
        currentNode = currentNode.nextLevel.get(character);
    }
    currentNode.isEndOfWord = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let currentNode = this;
    for(const character of word) {
        if(currentNode.nextLevel.get(character))
            currentNode = currentNode.nextLevel.get(character);
        else
            return false;
    }
    return currentNode.isEndOfWord || false;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let currentNode = this;
    for(const character of prefix) {
        if(currentNode.nextLevel.get(character))
            currentNode = currentNode.nextLevel.get(character);
        else
            return false;
    }
    return true;
};

Trie.prototype.printTrie = function() {
    console.log(this.value);
    for(const node of this.nextLevel.values())
        node.printTrie();
    
}

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */


var obj = new Trie()
obj.insert('word');
obj.insert('hello');
obj.insert('help');
obj.printTrie();
console.log(obj.search('word'));
console.log(obj.search('wor'));
console.log(obj.search('hello'));
console.log(obj.search('he'));
console.log(obj.startsWith('wor'));