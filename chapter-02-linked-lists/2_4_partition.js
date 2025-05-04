/**
 * Problem 2.4: Partition
 * 
 * Rearrange a linked list so that all values < x come before values >= x.
 * 
 * Time Complexity: O(N)
 * Space Complexity: O(1) (reusing existing nodes)
 */

function partition(head, x) {
    let beforeStart = null;
    let beforeEnd = null;
    let afterStart = null;
    let afterEnd = null;

    let current = head;

    while(current !== null) {
        const next = current.next;
        current.next = null;

        if(current.value < x) {
            if (beforeStart===null) {
                
            }
        }
    }
}