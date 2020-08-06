//feetToMile
function feetToMile(feet) {
    var mile = feet / 5280;
    return mile;
}
var result1 = feetToMile(5280);
console.log(result1);


//woodCalculator
function woodCalculator(chair, table, khat) {
    var chairFeetCount = chair * 1;
    var tableFeetCount = table * 3;
    var khatFeetCount = khat * 5;
    var totalWoodFeet = chairFeetCount + tableFeetCount + khatFeetCount;
    return totalWoodFeet;
}
var result = woodCalculator(2, 2, 2);
console.log(result);


// //brickCalculator
function brickCalculator(brick10, brick20, brick30) {
    var brick10Count = brick10 * 15;
    var brick20Count = brick20 * 12;
    var brick30Count = brick30 * 10;
    var totalBrickCount = brick10 + brick20 + brick30;
    return totalBrickCount;
}
var results = brickCalculator(15000, 12000, 1000);
console.log(results);


//tinyFriend
function tinyFriend(friend) {
    var little = friend[0];
    for (var i = 0; i < friend.lenght; i++) {
        var littleFriend = friend[i];
        if (littleFriend > little) {
            little = littleFriend;
        }
    }
    return little;
}
// Vai ami ei assignment ta ja pereci tai koreci kinto sothik vabe bujhte pari nai tai ei assignment and javascript somporke kisu janar cilo help korbe please! ami javascript mone hochse sob bujheci kisukhon por sob ojana hoye jachce. sothik vabe dhorte parci nah.
