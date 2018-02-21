// not 100% sure if this works for all cases

function maxSequence(arr) {
    let sortedArr = arr.slice();
    sortedArr = sortedArr.sort(function(a, b){return a-b});
    let maxSeq = 0;
    for(let i = 1; i <= arr.length; i++) { // modify size of chunk
        for(let j = 0; j+i <= arr.length; j++) { // modify index of chunk
            let curChunk = arr.slice(j,j+i);
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
    if(arr1.length != arr2.length)
        return false;

    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i]!=arr2[i]) {
            return false;
        }                    
    }
    return true;
}
// maxSequence([5,4,3,2,1])
// maxSequence([5,4,3,1,2])
// maxSequence([5,4,1,2,3])
// maxSequence([5,1,2,3,4])
// maxSequence([1,2,3,4,5])

maxSequence([4,4,13,2,3]) // 3
maxSequence([5,10,12,1,10,4]) // 2