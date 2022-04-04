let a = (JSON.parse(window.localStorage.getItem("allWrong")))


for(let i=1; i<a.length; i++){
    // console.log(a[i])
    if(a[i] != null){
        let leng=a[i].length
        for(let j=0; j<leng; j++){
            if(a[i][j][6] == 1){
                if(a[i][j][8] == 1){}
                else if(a[i][j][8] == 2){}
                else if(a[i][j][8] == 3){}
                else if(a[i][j][8] == 4){}
                else if(a[i][j][8] == 5){}
            }
            else if(a[i][j][6] == 2){
                if(a[i][j][8] == 1){}
                else if(a[i][j][8] == 2){}
                else if(a[i][j][8] == 3){}
                else if(a[i][j][8] == 4){}
                else if(a[i][j][8] == 5){}
            }
            else if(a[i][j][6] == 3){
                if(a[i][j][8] == 1 && a[i][j][9] == '-' ){}
                else if(a[i][j][8] == 2){}
                else if(a[i][j][8] == 3){}
                else if(a[i][j][8] == 4){}
                else if(a[i][j][8] == 5){}
                else if(a[i][j][8] == 6){}
                else if(a[i][j][8] == 7){}
                else if(a[i][j][8] == 8){}
                else if(a[i][j][8] == 9){}
                else if(a[i][j][8] == 1 && a[i][j][9] == 0 ){}
            }
        }
    }
}