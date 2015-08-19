// .js file for silent song player

$(document).ready(function(){

	var playlist = [];
	var playlist2 = [];


function Song(title, artist, album) {
    this.title = title;
    this.artist = artist;
    this.album = album;

    this.addToPlaylist = function(array) {
        array.push(this);
    };
    
}

var song1 = new Song("1 Enter Sandman ", "Metallica", "The Black Album");
var song2 = new Song("2 You", "Gold Panda", "Lucky Shiner");
var song3 = new Song("3 Holland 1944", "Neutral Milk Hotel", "On Avery Island");
var song4 = new Song("4 Wishbone", "Architecture in Helsinki", "In Case We Die");

song1.addToPlaylist(playlist);
song2.addToPlaylist(playlist);
song3.addToPlaylist(playlist);
song4.addToPlaylist(playlist);

song1.addToPlaylist(playlist2);
song2.addToPlaylist(playlist2);
song3.addToPlaylist(playlist2);
song4.addToPlaylist(playlist2);



var playInOrder = function(array){
    console.log("Playing in order:");
    for(i=0; i < array.length; i++) {
        console.log(i);
        for (property in array[i]){
                if(typeof array[i][property] === "string"){
                console.log(property + ": " + array[i][property] + ".");
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

console.log(shuffle(littleArray));


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

//playInOrder();
//playRandom();
var shuffleToken = false;
var shuffledPlaylist = [];


var htmlSong0 = "<h2>" + playlist[0]["title"] +"</h2>" + "<h3>"+playlist[0]["artist"]+"</h3>" + "<h3>"+ playlist[0]["album"] +"</h3>"
var counter = 0
//play playlist[counter]

	$("#play").click(function(){

		$("#screen").html(htmlSong0);


	});

	$("#next").click(function(){


		counter++;
		
		if(counter >= playlist.length){
			counter = 0;
		}

		if(shuffleToken === false){

			console.log("play forward");
			console.log(counter);

		
		$("#screen").html("<h2>" + playlist[counter]["title"] 
							+"</h2>" + "<h3>"+playlist[counter]["artist"]+"</h3>" + 
							"<h3>"+ playlist[counter]["album"] +"</h3>");

		playInOrder(playlist);
		//playInOrder(shuffledPlaylist);

	} //end if

		if(shuffleToken === true){

			console.log("shuffle forward");
			console.log(counter);

			$("#screen").html("<h2>" + shuffledPlaylist[counter]["title"] 
							+"</h2>" + "<h3>"+shuffledPlaylist[counter]["artist"]+"</h3>" + 
							"<h3>"+ shuffledPlaylist[counter]["album"] +"</h3>");

		}


	});



	$("#last").click(function(){
		counter--;
		
		if(counter<0){
			counter = 3;
		}

		if(shuffleToken === false){

			console.log('play back');

		$("#screen").html("<h2>" + playlist[counter]["title"] 
								+"</h2>" + "<h3>"+playlist[counter]["artist"]+"</h3>" + 
								"<h3>"+ playlist[counter]["album"] +"</h3>");
	}

		if(shuffleToken === true){
			console.log("shuffle back");
			$("#screen").html("<h2>" + shuffledPlaylist[counter]["title"] 
							+"</h2>" + "<h3>"+shuffledPlaylist[counter]["artist"]+"</h3>" + 
							"<h3>"+ shuffledPlaylist[counter]["album"] +"</h3>");

		}
					
	});

	


	$("#shuffle").click(function(){

		$(this).toggleClass("btn btn-success");

		

		if($(this).text() === "Shuffle Play On"){
			$(this).text("Shuffle Play Off");
			
		}

		else if($(this).text() === "Shuffle Play Off"){
			$(this).text("Shuffle Play On");
			
		}

		


	});

	$("#shuffle").click(function(){

		shuffleToken = shuffleToken ? false : true;

		if(shuffleToken === true){
			shuffledPlaylist = shuffle(playlist2);
		}



		console.log("shuffletoken is " + shuffleToken);

	});


		//$("#screen").click(function(){

		
		//$("#screen").html("<h2>STUFF</h2>");


	//	};) // end function
	//} //end if*/
$("#addbtn").click(function(){

	var title = $("#title").val();
	var artist = $('#artist').val();
	var album = $('#album').val();

	console.log(title +' '+ artist+' '+album);

	var songNew = new Song(title, artist, album);
	playlist.push(songNew);
	
	playInOrder(playlist);

	$("#paragraph").html("<p>" + title + " " + artist + " " + album + " has been added. Thank you!</p>");


});







});// end doc ready

