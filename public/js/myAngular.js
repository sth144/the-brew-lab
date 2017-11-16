var myAngular = angular.module('myAngular', []);

myAngular.controller('ctrl1', function($scope) {

    $scope.first = 1;
    $scope.second = 1;
    
    $("#navbar li").click(function() {
        $(this).addClass("active");
    });

    $(document).ready(function() {
        $('.carousel').carousel();
    });
    
});

myAngular.controller('mousePop', function($scope) {
    
    // These targets appear on both equipment and process pages. This is perfectly fine
    var targets =  
        [["lFirst", "pFirst"], ["lSecond", "pSecond"], ["lThird",     "pThird"], ["lFourth", "pFourth"], ["lFifth", "pFifth"], ["lSixth", "pSixth"], ["lSeventh", "pSeventh"], ["lEighth", "pEighth"], ["lNinth", "pNinth"], ["lTenth", "pTenth"], 
        ["lRes1", "pRes1"], ["lRes2", "pRes2"], ["lRes3", "pRes3"], ["lRes4", "pRes4"], ["lRes5", "pRes5"], ["lRes6", "pRes6"], ["lRes7", "pRes7"], ["lRes8", "pRes8"], ["lRes9", "pRes9"], ["lRes10", "pRes10"]];

    $scope.mouseOver = function(event) {

        var instruct = document.getElementById("instruct");
        instruct.style.display = "none";

        for (var j = 0; j < targets.length; j++) {
            var tar = document.getElementById(targets[j][1]);
            if (tar) {
                tar.style.display = "none";
                event.stopPropagation;
            }
        }
	    var el = event.target;
        var i;
        for (var j = 0; j < targets.length; j++) {
            if (targets[j][0] == el.id) {
                i = j;
            }
        }
        var tar = document.getElementById(targets[i][1]);
        tar.style.display = "inline-block";

    };
    
    $scope.mouseOff = function(event) {
        var el = event.target;
        var i;
        for (var j = 0; j < targets.length; j++) {
            if (targets[j][0] == el.id) {
                i = j;
            }
        }
        var tar = document.getElementById(targets[i][1]);
        tar.style.display = "none";
        event.stopPropagation;
    }
    
});

myAngular.controller('sel', function($scope) {

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

    var beers = document.getElementById("selectBox");

    beers.addEventListener("change", function() {

        for (var k = 0; k < targs.length; k++) {
            console.log("hello");
            var del = document.getElementById(targs[k].strTarg);
            del.style.display = "none";
        }

        var tex = qStrFromSelect(beers);
        console.log(tex);
        var i;
        for (var j = 0; j < targs.length; j++) {
            if (targs[j].strId === tex) {
                i = j;
            }
        }
        console.log(i);
        var tPan = document.getElementById(targs[i].strTarg);
        tPan.style.display = "inline-block";

    });

    function qStrFromSelect(box) {

        if (box.selectedIndex == -1) {

            return null;

        }

        return box.options[box.selectedIndex].text;

    }

    
});