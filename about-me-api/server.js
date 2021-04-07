const express = require('express');
const app = express();

const cors = require('cors');

// Applies CORS as middleware
app.use(cors());

app.options('*', cors());

app.get('/jonathan', function(req, res) {
    res.send({
        "name": "Jonathan",
        "age": 16,
        "school": "Eagle Academy",
        "favorite_genre": "Rap",
        "video_game": "2k20",
        "field_of_study": "Engineering"
    });
});

// Sets up our server to listen to commands
app.listen(3000, function() {
    console.log('Server running on port 3000!');
})