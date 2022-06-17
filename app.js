const http = new easyHTTP;

// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(error, posts) {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log(posts);
//     }
// });

// Get Single Posts
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(error, post) {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log(post);
//     }
// });


// POST request

// Create Data
const data = {
    title: 'Custom Post', 
    body: 'This is a custom post'
};

// Create Post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(error, post) {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log(post);
//     }
// });

// PUT request
// Update Post
// Here we are updating the post with ID of one with the above data we created.
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(error, post) {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log(post);
//     }
// });


// DELETE Request
// This deletes the post with ID of 1
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(error, posts) {
    if(error) {
        console.log(error);
    } else {
        console.log(posts);
    }
});
