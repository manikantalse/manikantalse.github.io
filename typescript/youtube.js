// defining a class
var Youtube = /** @class */ (function () {
    function Youtube(videoTitle, viewCount, likes, dislikes, subscribers) {
        var _this = this;
        // method.
        this.getViewCount = function () {
            return _this.viewCount;
        };
        this.getlikes = function () {
            return _this.likes;
        };
        this.getdislikes = function () {
            return _this.dislikes;
        };
        this.getsubscribers = function () {
            return _this.subscribers;
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
var likes = video.getlikes();
console.log("Number of views:" + views);
