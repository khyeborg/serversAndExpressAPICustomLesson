// Access the jonathan route
let url = 'http://localhost:3000/jonathan';
fetch(url)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        console.log(data);
    });