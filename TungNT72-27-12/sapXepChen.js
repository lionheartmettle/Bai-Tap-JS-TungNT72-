function sxChen(a) {
    var i = j = 0;
    var t ;
    for( i = 0; i < a.length; i += 1){
        j = i -1;
        t = a[i];
        while(j >= 0 && t < a[j]){
            a[j+1] = a[j];
            j--;
        }
        a[j+1] = t;
    }
    return a;
}