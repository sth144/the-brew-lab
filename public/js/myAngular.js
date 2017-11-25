/***************************************************************************************
    Title: Brew Lab Angular Controllers
    Author: Sean Hinds
    Date: 11/16/17
    Description: An AngularJS module which defines a set of
        controllers for the Brew Lab website.
***************************************************************************************/


// define an Angular module

var myAngular = angular.module('myAngular', []);

/***************************************************************************************
    This is the defualt controller
***************************************************************************************/

myAngular.controller('ctrl1', function($scope) {

    $scope.first = 1;
    $scope.second = 1;
    
    // activate the navbar icons when they are clicked

    $("#navbar li").click(function() {
        $(this).addClass("active");
    });

    // I found that this was necessary to cause the carousel
    // to start automatically

    $(document).ready(function() {
        $('.carousel').carousel();
    });
    
});

/***************************************************************************************
    this controller causes panels to appear when corresponding
    li is moused-over
***************************************************************************************/

myAngular.controller('mousePop', function($scope) {



    var clicked = false;
    


    // These targets appear on both equipment and process pages. This is perfectly fine

    var targets =  
        [["lFirst", "pFirst"], ["lSecond", "pSecond"], ["lThird",     "pThird"], 
        ["lFourth", "pFourth"], ["lFifth", "pFifth"], ["lSixth", "pSixth"], 
        ["lSeventh", "pSeventh"], ["lEighth", "pEighth"], ["lNinth", "pNinth"], 
        ["lTenth", "pTenth"], ["lRes1", "pRes1"], ["lRes2", "pRes2"], 
        ["lRes3", "pRes3"], ["lRes4", "pRes4"], ["lRes5", "pRes5"], 
        ["lRes6", "pRes6"], ["lRes7", "pRes7"], ["lRes8", "pRes8"], 
        ["lRes9", "pRes9"], ["lRes10", "pRes10"]];

    // this function is called whenever the mouse hovers over a tag with 
    // ng-mouseover=mouseOver($event)

    $scope.mouseOver = function(event) {
       if (!clicked) {
        var instruct = document.getElementById("instruct");
        instruct.style.display = "none";

        // iterate through all targets

            for (var j = 0; j < targets.length; j++) {

                var tar = document.getElementById(targets[j][1]);

                // set each target to be invisible

                if (tar) {

                    tar.style.display = "none";
                    event.stopPropagation;

                }
            }


	    var el = event.target;
        var i;

        // find the target
 
        for (var j = 0; j < targets.length; j++) {

            if (targets[j][0] == el.id) {
                i = j;
            }

        }

        // set target display to inline-block

        var tar = document.getElementById(targets[i][1]);
        tar.style.display = "inline-block";
        }
    };


    $scope.mouseClick = function(event) {

        console.log('clicked');

        clicked = true;

        var instruct = document.getElementById("instruct");
        instruct.style.display = "none";

        // iterate through all targets

        for (var j = 0; j < targets.length; j++) {

            var tar = document.getElementById(targets[j][1]);

            // set each target to be invisible

            if (tar) {

                tar.style.display = "none";
                event.stopPropagation;

            }
        }

        var el = event.target;
        var i;

        // find the target

        for (var j = 0; j < targets.length; j++) {

            if (targets[j][0] == el.id) {
                i = j;
            }

        }

        // set target display to inline-block

        var tar = document.getElementById(targets[i][1]);
        tar.style.display = "inline-block";

    }; 
    

    // this function is called whenever the mouse hovers off of a tag with 
    // ng-mouseoff=mouseOff($event)

    $scope.mouseOff = function(event) {

        // define el to point to the DOM element

        var el = event.target;
        var i;

        // iterate through the targets

        for (var j = 0; j < targets.length; j++) {

            if (targets[j][0] == el.id) {
                i = j;
            }

        }

        // set the target display to "none"

        var tar = document.getElementById(targets[i][1]);
        tar.style.display = "none";
        event.stopPropagation;

    }
    
});


/***************************************************************************************
    This controller controls the select box and causes different panels to be displayed
    based on whichever item is selected
***************************************************************************************/

myAngular.controller('sel', function($scope) {

    //

    var targs = [
        {strId: "Pilsener", strTarg: "pilsener"},
        {strId: "India Pale Ale", strTarg: "indiaPaleAle"},
        {strId: "Brown Ale", strTarg: "brownAle"},
        {strId: "Porter", strTarg: "porter"},
        {strId: "Stout", strTarg: "stout"},
        {strId: "Oktoberfest", strTarg: "oktoberfest"},
        {strId: "Lambic", strTarg: "lambic"},
        {strId: "Saison", strTarg: "saison"},
        {strId: "Bock", strTarg: "bock"},
        {strId: "Gose", strTarg: "gose"}
    ];

    // point to the selectBox

    var beers = document.getElementById("selectBox");

    // every time the selected item index is changed

    beers.addEventListener("change", function() {

        // iterate through the targets, set display to none

        for (var k = 0; k < targs.length; k++) {

            console.log("hello");
            var del = document.getElementById(targs[k].strTarg);
            del.style.display = "none";
        }

        // store query string from selected item in tex

        var tex = qStrFromSelect(beers);
        console.log(tex);
        var i;

        // search for query string among targets

        for (var j = 0; j < targs.length; j++) {
            if (targs[j].strId === tex) {
                i = j;
            }
        }

        // identify the target panel and display it

        console.log(i);
        var tPan = document.getElementById(targs[i].strTarg);
        tPan.style.display = "inline-block";

    });

    // get query string from selected item

    function qStrFromSelect(box) {


        if (box.selectedIndex == -1) {

            return null;

        }

        return box.options[box.selectedIndex].text;

    }

    
});