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
    getLikes = ()=>{
        return this.likes
    }
    getDislikes = ()=>{
        return this.dislikes
    }
    getSubscribers = ()=>{
        return this.subscribers
    }

    getRelatedVideos = ()=>{
        return "fetching related videos..."
    }
    
    }// end class 
    
    
    let video = new Youtube("Edwisor", 2000 , 100 , 2, 500)
    
    let views = video.getViewCount()
    let likes = video.getLikes();
    let dislikes = video.getDislikes();
    let subscribers = video.getSubscribers();
    let relatedVideos = video.getRelatedVideos();

    console.log("-------- Youtube ----------");
    console.log("Number of views: " + views);
    console.log("Number of likes: " + likes);
    console.log("Number of dislikes: " + dislikes);
    console.log("Number of subscribers: " + subscribers);
    console.log("Related videos: " + relatedVideos);
