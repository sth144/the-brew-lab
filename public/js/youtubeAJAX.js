/******************************************************************
    Title: AJAX Script for iFrame-Embedded Youtube Video
    Author: Sean Hinds
    Date: 11/16/17
    Description:This script is an AJAX request. Asynchronously 
        loads the Youtube iframe API The architecture of this 
        script was borrowed from the Youtube iframe API 
        documentation at 
        https://developers.google.com/youtube/iframe_api_reference
******************************************************************/


// define tag to be a script DOM element

var tag = document.createElement('script');


// set tag.src to the iframe_api

tag.src = "https://www.youtube.com/iframe_api";


// find the first existing script in the DOM

var firstScript = document.getElementsByTagName('script')[0];


// insert tag into the DOM

firstScript.parentNode.insertBefore(tag, firstScript);


// As soon as the API loads, define an iframe

var player;

function onYouTubeIframeAPIReady() {

    player = new YT.Player('player', {

    width: '56%',
    height: '450px',
    videoId: 'TVtqwWGguFk',

    events: {

            'onStateChange': onPlayerStateChange

        }

    });

}


// API calls this function when iframe loads

function onPlayerReady(event) {

    event.target.playVideo();

}


// The API calls this function any time the player's state changes

var done = false;

function onPlayerStateChange(event) {

    if (event.data == YT.PlayerState.PLAYING && !done) {

        done = true;
        
    }

}
