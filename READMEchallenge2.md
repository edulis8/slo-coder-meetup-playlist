Second challenge using previous playlist code to make a website utilizing jQuery to display playlist.
-----

The CEO of Pointless Industries has developed what is sure to be the next billion dollar product

on the Internet.  Think about it... what is the problem with every music player you’ve ever used?

Answer: They’re noisy! Your only options are to wear uncomfortable ­ possibly even unstylish ­ 

headphones or earbuds, or just not use your music player at all.

Our Solution: The Silent Song Player! Load all your favorite music, but instead of playing your 

songs, the SSP will simply display information about it and you can just THINK about your song. 

Even better, a loophole in copyright law allows us to provide this amazing service while paying 

ZERO royalties!  

Hope your stock options have vested!

Our designers have been hard at work preparing a slick UX for the SSP, now all we need you to 

do is make it work!

Here’s what we need you to do:

1. Download the Silent Song Player folder. This has all the HTML, CSS, Bootstrap, 

images, etc.  Copy this folder to a local drive.

2. Open the index.html file in a browser and make sure it is working for you. Then...

3. Make the song objects and array playlist

a. Songs should be stored as JavaScript objects

b. The playlist should be an array of these objects. We hear you’re an expert on this 

stuff!

c. We don’t have our database online yet, so you might want to hardcode a few 

songs into the program. 

d. Since you’re using jQuery, don’t forget to wrap your custom functions in a single 

document ready function.

$(document).ready(function(){

All your code here

});

4. Enable Play Button

5. Enable Last and Next Song Buttons

6. Enable Shuffle Play Button

a. The play button should display the title, artists and album of a song to the screen 

in an attractive way. Our designers have already done some CSS styling in the 

screen, so displaying titles as <h2> and everything else as <h3> should look 

great!

a. These buttons should play the next or previous song in the playlist... silently!

hint: remember the ‘this’ keyword

another hint: Google ‘jquery toggleClass’

a. When this button is clicked, it should turn green and the text should change to 

“Shuffle Play On”

b. When it is clicked again it should return to orange and “Shuffle Play Off”

c. Use the Bootstrap classes “btn­primary” for orange and “btn­success” for green.

d. When the playlist is in shuffle play, next song should display a random song from 

the playlist.

hint: Google ‘JavaScript Fisher­Yates algorithm’

e. Last song should still display the previous song played

f. When shuffle mode is off, the playlist should play in order.

7. Enable the Add Song Form

hint: use .val() to get the text of an input form

a. The user should be able to add a title, artist and album and have the application 

turn all that into a new song object, and then add that song to the playlist.

b. Remember the new songs won’t stick until we get our databases working, so 

you’ll have to test your functionality with a console.log or something.

c. OR ­ if you are really a code ninja, you could save your songs and playlist 

using local storage. Do this only if you have time, and if you are familiar with 

JSON data. If not, don’t worry about it, we’ll get there!

http://www.smashingmagazine.com/2010/10/local­storage­and­how­to­use­it/

Good luck! Hopefully your coding abilities are just a good as our CEO’s AMAZING business 

idea.  We’re all counting on you!
