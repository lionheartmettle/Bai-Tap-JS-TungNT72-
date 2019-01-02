
var arrivals = [1,3,5];
var departures = [2,6,8];
var k = 1;

function checkRoomPossible(arrivals, departures, k) {
    // debugger;
    var t = [];
    var x;
    var count = 0;
    let i;
    var c = [];
    for (i = 0; i < arrivals.length; i += 1) {
        t[i] = [];
        t[i].push(arrivals[i]);
        t[i].push(departures[i]);
    }
    for (x = arrivals[0]; x < departures[departures.length - 1]; x += 1) {
        for (i = 0; i < t.length; i += 1) {
            if (t[i][0] <= x && x <= t[i][1]) {
                count += 1;
            }
        }
        c.push(count);
        count = 0;
    }
    if(Math.max.apply(Math,c) <= k) {
        return true;
    }

    return false;


}
