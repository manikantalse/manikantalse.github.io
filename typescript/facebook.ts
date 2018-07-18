// defining a class
class Facebook {

    userName : string;
    place : string;
    school : string;
    friendsCount : number;
    followers : number;
    birthday : string;
    
    
    constructor (userName : string,place : string,school : string,friendsCount : number,followers :number, birthday : string){
       this.userName = userName;
       this.place = place;
       this.school = school;
       this.friendsCount = friendsCount;
       this.followers = followers;
       this.birthday = birthday;
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
    getAge = ()=>{
        
        var birthdate:any = new Date(this.birthday);
        let currDate:any = new Date();
        let diff:number = currDate-birthdate;
        let age:number = Math.floor(diff/31536000000);
        return age
    }
    
    }// end class 
    
    
    let profile = new Facebook("manikantalse", 'Hyderabad', 'Siddhartha' , 500 , 50, '1995/05/27')
    
    let place = profile.getPlace()
    let school = profile.getSchool()
    let friendsCount = profile.getFriendsCount()
    let followersCount = profile.getFollowersCount()
    let age = profile.getAge()

    console.log("-------- Social Profile ----------");
    console.log("Place of stay: " + place);
    console.log("School: " + school);
    console.log("Number of Friends: " + friendsCount);
    console.log("Number of Followers: " + followersCount);
    console.log("Age: " + age);