function drawHeart(w, ht, hm, hb) {
    var heart = '';
    var width = 9;
    //top
    for(k=0;k<7;k++){
        for(l=0;l<ht;l++){
            if(k==0){
                for(i=0;i<width;i++){
                    for(j=0;j<w;j++){
                        i==2 || i==6 ? heart+='#' : heart+='.'
                    }
                }
                heart+='\n'
            }
            else if(k==1){
                for(i=0;i<width;i++){
                    for(j=0;j<w;j++){
                        i%4==0 ? heart+='.' : heart+='#'
                    }
                }
                heart+='\n'
            }
            else if(k==5){
                for(i=0;i<width;i++){
                    for(j=0;j<w;j++){
                        i==2 || i==6 ? heart+='.' : heart+='#'
                    }
                }
                heart+='\n'
            }
            else if(k==6){
                for(i=0;i<width;i++){
                    for(j=0;j<w;j++){
                        i==2 || i==3 || i==5 || i==6 ? heart+='.' : heart+='#'
                    }
                }
                heart+='\n'
            }
            else{
                for(i=0;i<width;i++){
                    for(j=0;j<w;j++){
                        heart+='#'
                    }                       
                }
                heart+='\n'
            }
        }
    }

    //middle
    for(l=0;l<hm;l++){
        for(i=0;i<width;i++){
            for(j=0;j<w;j++){
                i<2 || i>6 && i<width ? heart+='#' : heart+='.'
            }
        }
        heart+='\n'
    }

    //bottom
    for(k=0;k<7;k++){
        for(l=0;l<hb;l++){
            if(k==0){
                for(i=0;i<width;i++){
                    for(j=0;j<w;j++){
                        i<3 || i>5 && i<width ? heart+='#' : heart+='.'
                    }
                }
                heart+='\n'
            }
            else if(k==1){
                for(i=0;i<width;i++){
                    for(j=0;j<w;j++){
                        i==4 ? heart+='.' : heart+='#'
                    }
                }
                heart+='\n'
            }
            else{
                for(i=0;i<width;i++){
                    for(j=0;j<w;j++){
                        i<k-2 || i>=width-(k-2) && i<width ? heart+='.' : heart+='#'
                    }
                }
                if(k<6){heart+='\n'}
            }
         
        }
    }
    console.log(heart);
}
 
drawHeart(2,1,1,1); 


