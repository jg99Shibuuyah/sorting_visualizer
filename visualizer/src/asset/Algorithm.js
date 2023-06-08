import React from "react";
// import Button


const bubbleSort =  (arr) => {
    var i, j, temp; 
    var swapped ; 


}

const selectionSort =  (arr) => {
    var  i, j, indx;
    for( i=0; i<arr.length; i++ ){
        indx = i;

        for( j=i+1; j<arr.length; j++ ){

            if (arr[j]<arr[indx]){
                indx = j; 
            } 
        }
        selectionSwap(arr, indx, i);
    }
 

} 
const selectionSwap = (arr, x, y) => {
     var temp = arr[x]; 
     arr[x]= arr[y];
     arr[y] =temp;
}


const insertionSort =  (arr) => {


} 
const quickSort  = (arr) => {

}
const mergeSort  = (arr) => {
    
}



export  {bubbleSort, selectionSort, insertionSort, quickSort,mergeSort }