// code your solution 
function superbowlWin(array) {
    let win = array.find(function(e){
        return e.result === "W";
    });
    if (win) {
        return win.year;
    } else {
        return undefined;
    }
}