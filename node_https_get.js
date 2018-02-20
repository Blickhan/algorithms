const https = require('https');

https.get('https://jsonmock.hackerrank.com/api/movies/search/?Title=spiderman',(res) => {
    console.log(res)
    let data = '';
 
    // A chunk of data has been recieved.
    res.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Print out the result.
    res.on('end', () => {
        let d = JSON.parse(data);
        let titles = d.data.map(movie => movie.Title).sort();
        console.log(titles);
    });
});