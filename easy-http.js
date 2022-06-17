function easyHTTP() {
    this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request
easyHTTP.prototype.get = function(url, callback) {
    this.http.open('GET', url, true);

    /* for ES 5, we need to set another variable self */
    /* in ES 6, we can just use an arrow function and not worry about the this scope */
    let self = this;
    this.http.onload = function() {
        if(self.http.status === 200) {
            callback(self.http.responseText);
        }
    }
    this.http.send();
}
// Make an HTTP POST Request

// Make an HTTP PUT Request

// Make an HTTP DELETE Request