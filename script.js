
///////////////////////////
//The parameter passed determines the number of elements

displayed from the series
function* fibo(number){
    var n1=0 ,n2=1,n3;
    for (let i = 1; i <= number; i++) {
       // debugger;
        yield n1;
        n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
    }
}
var x=fibo(5)

///////////////////////////
//the parameter passed determines the max number of the displayed series should not exceed its value.

function* Fibonacci(max){
    var n1=0,n2=1,n3;
    yield n1 ;
    yield n2;
    n3=n1+n2;
    while(n3<max+1){
        yield n3;
        n1=n2;
        n2=n3;
        n3=n1+n2;  
    }
}
var x=Fibonacci(5)
