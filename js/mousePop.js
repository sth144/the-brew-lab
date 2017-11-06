var app = angular.module('app', []);

app.controller('mousePop', function($scope) {
    
    var targets =  
        [["lFirst", "pFirst"], ["lSecond", "pSecond"], ["lThird",     "pThird"], ["lFourth", "pFourth"], ["lFifth", "pFifth"], ["lSixth", "pSixth"], ["lSeventh", "pSeventh"], ["lEigth", "pEighth"], ["lNinth", "pNinth"], ["lTenth", "pTenth"], 
        ["lRes1", "pRes1"], ["lRes2", "pRes2"], ["lRes3", "pRes3"], ["lRes4", "pRes4"], ["lRes5", "pRes5"], ["lRes6", "pRes6"], ["lRes7", "pRes7"], ["lRes8", "pRes8"], ["lRes9", "pRes9"], ["lRes10", "pRes10"]];

    $scope.mouseOver = function(event) {
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
