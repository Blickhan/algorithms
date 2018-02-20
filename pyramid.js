function pyramid(n) {
    const midpoint = Math.floor((n*2-1)/2);
    for(let i = 0; i < n; i++) {
        let level = '';
        for(let j = 0; j < n*2-1; j++) {
            if(j >= midpoint - i && j <= midpoint + i) {
                level += '#'
            }
            else {
                level += ' ';
            }
        }
        console.log(level);
    }
}

pyramid(10);