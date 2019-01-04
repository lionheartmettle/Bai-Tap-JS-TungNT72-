function partition (arr, low, hight) {
    var pivot = arr[hight];
    var i = low - 1;
    
    for (var j = low; j < hight; j++) {
        if (arr[j] <= pivot) {
            i++;
            //swap vi tri arr[i] va arr[j]    
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    //swap vi tri arr[i+1] va arr[hight]   
    let temp = arr[i+1];
    arr[i+1] = arr[hight];
    arr[hight] = temp;
    return (i + 1);
}
function quickSort (arr, low, hight) {
    // debugger;
    if (low < hight) {
        pi = partition(arr, low, hight);
        quickSort(arr, low, pi - 1);  // Before pi
        quickSort(arr, pi + 1, hight); // After pi
        return arr;
    } else {
        return arr;
    }
}