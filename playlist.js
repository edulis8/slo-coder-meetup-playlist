var playlist = [];


function Song(title, artist, album) {
    this.title = title;
    this.artist = artist;
    this.album = album;

    this.addToPlaylist = function() {
        playlist.push(this);
    };
    
}

var song1 = new Song("Enter Sandman", "Metallica", "The Black Album");
var song2 = new Song("You", "Gold Panda", "Lucky Shiner");
var song3 = new Song("Holland 1944", "Neutral Milk Hotel", "On Avery Island");
var song4 = new Song("Wishbone", "Architecture in Helsinki", "In Case We Die");

song1.addToPlaylist();
song2.addToPlaylist();
song3.addToPlaylist();
song4.addToPlaylist();



var playInOrder = function(){
    console.log("Playing in order:");
    for(i=0; i < playlist.length; i++) {
        console.log(i);
        for (property in playlist[i]){
                if(typeof playlist[i][property] === "string"){
                console.log(property + ": " + playlist[i][property] + ".");
             }
            
        }
    console.log("----");
 }
 }


function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
    
        temp = array[i]; 
        array[i] = array[j]; 
        array[j] = temp; 
    }

    return array;
}

var littleArray = [0,1,2,3];

var randomNumberArray = shuffle(littleArray);

var playRandom = function(){
    console.log("Playing randomly");
    for(i = 0; i < randomNumberArray.length; i++){
        console.log(randomNumberArray[i]);
        for (property in playlist[i]){
            if(typeof playlist[i][property] === "string"){
                
     console.log(property + ": " + playlist[randomNumberArray[i]][property]);
            }
        }
    console.log("---");
    }
    
};

playInOrder();
playRandom();

