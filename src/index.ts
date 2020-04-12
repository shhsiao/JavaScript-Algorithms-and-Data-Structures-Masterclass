import * as http from 'http';

const app = http.createServer((req, res) => {
    console.log(req.url);
    res.end('hello,world');
});
console.log('start listening...');
app.listen(3000);
