// defining a class
class Facebook {

    userName : string;
    place : string;
    school : string;
    friendsCount : number;
    followers : number;
    
    
    constructor (userName : string,place : string,school : string,friendsCount : number,followers :number){
       this.userName = userName;
       this.place = place;
       this.school = school;
       this.friendsCount = friendsCount;
       this.followers = followers;
    }// end constructor
    
    // method.
    getPlace = ()=>{
        return this.place
    }
    getSchool = ()=>{
        return this.school
    }
    getFriendsCount = ()=>{
        return this.friendsCount
    }
    getFollowersCount = ()=>{
        return this.followers
    }
    
    }// end class 
    
    
    let profile = new Facebook("manikantalse", 'Hyderabad', 'Siddhartha' , 500 , 50)
    
    let place = profile.getPlace()

    console.log("Place of stay:" + place);