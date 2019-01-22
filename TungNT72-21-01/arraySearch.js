function arrSeach(arr,num) {
    for (var i = 0; i < arr.length; i += 1) {
        if (num <= arr[i]) {
            return i;
        }
    }
    return i;
}