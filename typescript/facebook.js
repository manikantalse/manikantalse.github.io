// defining a class
var Facebook = /** @class */ (function () {
    function Facebook(userName, place, school, friendsCount, followers) {
        var _this = this;
        // method.
        this.getPlace = function () {
            return _this.place;
        };
        this.getSchool = function () {
            return _this.school;
        };
        this.getFriendsCount = function () {
            return _this.friendsCount;
        };
        this.getFollowersCount = function () {
            return _this.followers;
        };
        this.userName = userName;
        this.place = place;
        this.school = school;
        this.friendsCount = friendsCount;
        this.followers = followers;
    } // end constructor
    return Facebook;
}()); // end class 
var profile = new Facebook("manikantalse", 'Hyderabad', 'Siddhartha', 500, 50);
var place = profile.getPlace();
console.log("Place of stay:" + place);
