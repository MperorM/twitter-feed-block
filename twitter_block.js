url = document.URL;
url = location.href;
var post = "https:\/\/twitter.com\/.+\/status\/+.*";
matches = url.match(post);

if (matches == null) {
    var all = document.getElementsByTagName("*");
    for (let i = 0; i < all.length; i++) {
        all[i].style.display = "none";
    }
};