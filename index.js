// var googleapis = require('googleapis');
// googleapis.client.setApiKey('');

// var youtube = google.youtube('v3');


// console.log(requests)

const API_KEY = 'AIzaSyCoYQQJVjlzZ-CLRHWUyhoqCr2SkVdvERA'
var { google } = require('googleapis');
var youtube = google.youtube({
    version: 'v3',
    auth: API_KEY
});


// youtube.search.list({
//     part: 'snippet',
//     q: 'your search query'
//   }, function (err, data) {
//     if (err) {
//       console.error('Error: ' + err);
//     }
//     if (data) {
//       console.log(data)
//     }
//   });

const search = () => {
    let response = youtube.search.list({ part: 'snippet', q: 'cats', maxResults: 10 }).then(r => {
        console.log(r.data.items)
    })
    // console.log(response);
}

const comment = (videoId, comment) => {
    youtube.commentThreads.insert({
        "part": [
            "snippet"
        ],
        "resource": {
            "snippet": {
                "videoId": videoId,
                "topLevelComment": {
                    "snippet": {
                        "textOriginal": comment
                    }
                }
            }
        }
    })
        .then((response) => {
            // Handle the results here (response.result has the parsed body).
            console.log("Response", response);
        },
            function (err) { console.error("Execute error", err); });
}
// console.log(search())
console.log(comment('5jgVUKlXKlY', 'skit nice bro'))