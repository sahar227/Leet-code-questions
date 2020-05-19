/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    let currentOddNode = head;
    const startEvenNode = head !== null ? head.next : null;
    let currentEvenNode = startEvenNode;

    if(currentOddNode === null || currentEvenNode === null)
        return head;
    
    let currentTraversalNode = currentEvenNode.next;
    let i = 3;

    while(currentTraversalNode !== null) {
        if(i % 2) {
            currentOddNode.next = currentTraversalNode;
            currentOddNode = currentTraversalNode;
        }
        else {
            currentEvenNode.next = currentTraversalNode;
            currentEvenNode = currentTraversalNode;
        }
        currentTraversalNode = currentTraversalNode.next;
        i++;
    }
    currentOddNode.next = startEvenNode;
    currentEvenNode.next = null;
    return head;
    
};