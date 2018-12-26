function xoanOc(n) {
    
    var x = 0;
    let i = j = 0;
    let b = [];
    for(i = 0 ; i < n ; i++){
        b[i] = [];
    }
    i = 0;
    // for(j = 0 ; j < n ; j++){
    //     b[0][j] = i + j + 1;
    // } // luc nay j = n
    // for(i = 1 ; i < n ; i++){
    //     b[i][n-1] = i + j;
    // } // luc nay i = n
    // for(j = n-2 ; j > -1 ; j--){
    //     b[n-1][j] = b[n-1][j+1] + 1 ;
    // }//luc nay j = -1
    // for(i = n -2 ; i > 0 ; i--){
    //     b[i][j+1] = b[i+1][j+1] + 1 ;
    // } // luc nay i = 0
    if (n%2 != 0){
        b[(n-1)/2][(n-1)/2] = n*n;
    }
    do {
        
        for(j = x ; j < (n-x) ; j++){
            if(j > 0){
                b[i][j] = b[i][j-1] + 1;
            }
            else {
                b[0][0] = 1;
            }
        } // luc nay j = n - 1
        j = j - 1;
        for(i = x + 1 ; i < (n - x); i++){
            b[i][j] = b[i-1][j] + 1;
        }// i = n - x
        i = i - 1;
        for(j = n - x - 2; j > (x-1); j--){
            b[i][j] = b[i][j+1] + 1;
        }// j = x - 1
        j = j + 1;
        for(i = n - x - 2; i > x ; i--){
            b[i][j] = b[i+1][j] + 1 ;
        }
        x = x + 1;
        i = x;
    } while(x <= (n/2 - 1))
    return b;
}
