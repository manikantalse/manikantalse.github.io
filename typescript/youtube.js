// defining a class
var Youtube = /** @class */ (function () {
    function Youtube(videoTitle, viewCount, likes, dislikes, subscribers) {
        var _this = this;
        // method.
        this.getViewCount = function () {
            return _this.viewCount;
        };
        this.getLikes = function () {
            return _this.likes;
        };
        this.getDislikes = function () {
            return _this.dislikes;
        };
        this.getSubscribers = function () {
            return _this.subscribers;
        };
        this.getRelatedVideos = function () {
            return "fetching related videos...";
        };
        this.videoTitle = videoTitle;
        this.viewCount = viewCount;
        this.likes = likes;
        this.dislikes = dislikes;
        this.subscribers = subscribers;
    } // end constructor
    return Youtube;
}()); // end class 
var video = new Youtube("Edwisor", 2000, 100, 2, 500);
var views = video.getViewCount();
var likes = video.getLikes();
var dislikes = video.getDislikes();
var subscribers = video.getSubscribers();
var relatedVideos = video.getRelatedVideos();
console.log("-------- Youtube ----------");
console.log("Number of views: " + views);
console.log("Number of likes: " + likes);
console.log("Number of dislikes: " + dislikes);
console.log("Number of subscribers: " + subscribers);
console.log("Related videos: " + relatedVideos);
