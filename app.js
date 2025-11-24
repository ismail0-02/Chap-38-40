console.log("Hello world!");


//ques 1//
//ans 1//
function power(a,b){
    return a**b
    
}console.log(power(5,2));

//ques 2//
//ans 2//
function leap(year){
    if(year % 4 == 0){
        console.log(`${year} is a leap year`);
    }else{
        console.log(`${year} is not a leap year`);
        
    }
}leap(1964)


//ques 3//
//ans 3//
function area(a,b,c){
    let S = (a+b+c)/2
    console.log(S);
    function total(){
    let A ;
    A = S*(S-a)*(S-b)*(S-c)
    return A
        
    }console.log(total());
    
}area(5,5,4)


//ques 4//
//ans 4//
function mainFunction(){
    function sub(sub1,sub2,sub3){
    
        let noOfSub = 3
        let oneSub = 100
        let total = oneSub * noOfSub
       
        
        function avg(){
            let avg =(sub1+sub2+sub3)/noOfSub

            console.log(avg);
            
            
        }avg()
         function per(){
        let per = ((sub1+sub2+sub3)/ total)*100
        console.log(`The percantage is${per}%`);
        
    }per()

    } sub(90,90,90);
   }mainFunction()

   
//ques 6//
//ans 6//
function vowel(){
    

let sentence = "There is an aeroplane"
let senArr = sentence.split("");
for(let i=0;i<senArr.length;i++){
if(senArr[i]=="a" || senArr[i]=="e" || senArr[i]=="i" || senArr[i]=="o" || senArr[i]=="u"){
       senArr.splice(i,1)
    }

}
console.log(senArr.join("").trim());

}vowel()


//ques 8//
//ans 8//

function distance(dis){
    
dis = parseFloat(dis)
console.log( dis);
function meter(){
    let meter = dis *1000 
    console.log("The distance between lahore and katachi is :",meter,"m");
    function centimeters(){
        let centimeters = meter * 100
           console.log("The distance between lahore and katachi is :",centimeters,"cm");
    }centimeters()
    function feets(){
       let foot  = meter * 3280.84
        console.log("The distance between lahore and katachi is :",foot,"ft");

        function inches(){
         let inches = foot * 12
          console.log("The distance between lahore and katachi is :",inches,"inches");
        }inches()

    }feets()

}meter()

}distance(5)




