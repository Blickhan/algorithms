function matrix(n) {

    let results = [];
    for(let i = 0; i < n; i++) {
        results.push([]);
    };

    let counter = 0;
    let startColumn = 0;
    let endColumn = n-1;
    let startRow = 0;
    let endRow = n-1;

    while(startColumn < endColumn && startRow < endRow) {
        for(let i = startColumn; i <= endColumn; i++) {
            results[startRow][i] = counter++;
        }
        startRow++;

        for(let i = startRow; i <= endRow; i++) {
            results[i][endColumn] = counter++;
        }
        endColumn--;

        for(let i = endColumn; i >= startColumn; i--) {
            results[endRow][i] = counter++;
        }
        endRow--;

        for(let i = endRow; i >= startRow; i--) {
            results[i][startColumn] = counter++;
        }
        startColumn++;
    }

    return results;
}
let m =matrix(4);
