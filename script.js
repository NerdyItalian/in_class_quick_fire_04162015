var johnAndrew = [0, 8, 2, 0, 1, 9, 8, 2];
var aliciaJoyce = [0, 8, 0, 3, 1, 9, 8, 4];
var giovanniMilton = [0, 9, 2, 7, 2, 0, 1, 3];
var milesLuca = [0, 7, 2, 1, 2, 0, 0, 9];
var linusEmil = [0, 3, 1, 7, 2, 0, 1, 1];
var loveHubby = [1, 1, 1, 0, 2, 0, 1, 2];


var familyRocks = [johnAndrew, aliciaJoyce, giovanniMilton, milesLuca, linusEmil, loveHubby];

for(var i = 0; i < familyRocks.length; i++){
	for (var j = 0; j < familyRocks[i].length; j++){
		familyRocks[i][j] = changeUp(familyRocks[i][j]);
	}
	console.log(familyRocks[i]);
}

function changeUp(familyRocks){
	familyRocks = (familyRocks + 1) * 2;
	return familyRocks;
}

