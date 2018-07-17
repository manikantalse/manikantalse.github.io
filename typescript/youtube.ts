// defining a class
class Youtube {

    videoTitle : string;
    viewCount : number;
    likes : number;
    dislikes : number;
    subscribers : number;
    
    
    constructor (videoTitle : string,viewCount : number,likes : number,dislikes : number,subscribers :number){
       this.videoTitle = videoTitle;
       this.viewCount = viewCount;
       this.likes = likes;
       this.dislikes = dislikes;
       this.subscribers = subscribers;
    }// end constructor
    
    // method.
    getViewCount = ()=>{
        return this.viewCount
    }
    getlikes = ()=>{
        return this.likes
    }
    getdislikes = ()=>{
        return this.dislikes
    }
    getsubscribers = ()=>{
        return this.subscribers
    }
    
    }// end class 
    
    
    let video = new Youtube("Edwisor", 2000 , 100 , 2, 500)
    
    let views = video.getViewCount()
    let likes = video.getlikes();

    console.log("Number of views:" +views);