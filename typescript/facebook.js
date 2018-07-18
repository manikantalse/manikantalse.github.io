// defining a class
var Facebook = /** @class */ (function () {
    function Facebook(userName, place, school, friendsCount, followers, birthday) {
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
        this.getAge = function () {
            var birthdate = new Date(_this.birthday);
            var currDate = new Date();
            var diff = currDate - birthdate;
            var age = Math.floor(diff / 31536000000);
            return age;
        };
        this.userName = userName;
        this.place = place;
        this.school = school;
        this.friendsCount = friendsCount;
        this.followers = followers;
        this.birthday = birthday;
    } // end constructor
    return Facebook;
}()); // end class 
var profile = new Facebook("manikantalse", 'Hyderabad', 'Siddhartha', 500, 50, '1995/05/27');
var place = profile.getPlace();
var school = profile.getSchool();
var friendsCount = profile.getFriendsCount();
var followersCount = profile.getFollowersCount();
var age = profile.getAge();
console.log("-------- Social Profile ----------");
console.log("Place of stay: " + place);
console.log("School: " + school);
console.log("Number of Friends: " + friendsCount);
console.log("Number of Followers: " + followersCount);
console.log("Age: " + age);
