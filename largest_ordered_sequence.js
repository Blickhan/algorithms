// not 100% sure if this works for all cases

function maxTickets(tickets) {
    let sortedArr = tickets.slice();
    sortedArr = sortedArr.sort(function(a, b){return a-b});
    let maxSeq = 0;
    for(let i = 1; i <= tickets.length; i++) { // modify size of chunk
        for(let j = 0; j+i <= tickets.length; j++) { // modify index of chunk
            let curChunk = tickets.slice(j,j+i);
            for(let k = 0;k+i <= sortedArr.length; k++) { // check curChunk against all same sized chunks of sortedArr
                let curChunkSorted = sortedArr.slice(k,k+i);            
                if(arraysAreEqual(curChunk, curChunkSorted)) {
                    maxSeq = i;
                    break;
                }
            }
        }
    }
    console.log(maxSeq)
    return maxSeq;
}

function arraysAreEqual(arr1, arr2) {
    for(let i = 0; i<i; i++) {
        if(arr1[i]!=arr2[i]) {
            return false;
        }                    
    }
    return true;
}
maxTickets([5,4,3,2,1])
maxTickets([5,4,3,1,2])
maxTickets([5,4,1,2,3])
maxTickets([5,1,2,3,4])
maxTickets([1,2,3,4,5])
//maxTickets([2,3,13,4,4])
//maxTickets([4,4,13,2,3])
//maxTickets([13,2,3,4,4])
//maxTickets([2,3,4,4,13])
//maxTickets([5,10,12,1,10,4])