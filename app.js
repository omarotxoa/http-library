const http = new easyHTTP;

// Get Posts
http.get('https://jsonplaceholder.typicode.com/posts', function(posts) {
    console.log(posts);
});