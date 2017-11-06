var appSel = angular.module('appSel', []);

appSel.controller('sel', function($scope) {

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

    beers.addEventListener("click", function() {

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
