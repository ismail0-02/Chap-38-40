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

//ques 5//
//ans 5//




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

//ques 7//
//ans 7//
let sentence = "my name is ismail"
let charInd ;

function myIndex(char) {
    for (let i = 0; i< sentence.length; i++){  
    if (sentence[i]==char){
        charInd = i
        break;
        
    }
    }
    console.log(charInd);
    
}myIndex("i")

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


//ques 9 //
//ans 9 //

function employeIncome(hours){
    if (hours > 40) {
        let moreHours = hours - 40
        console.log("More hours employe work -->",moreHours);  
        let paid = moreHours *12
        console.log("Total Overtime paid of employe is -->",paid);
        
    }else{
        console.log("Employe did not work overtime!");
        
    }
    

    
}employeIncome(40)


//ques 10 //
//ans 10 //

function cost(amount){
 let hundreds  = Math.floor(amount /100)
    console.log("The note of 100's are -->",hundreds);

    amount = amount % 100
let fifties = Math.floor(amount/50)
  console.log("The note of 50's are -->",fifties);
 amount = amount %50
let ten = Math.floor(amount/10)
 console.log("The note of 10's are -->",ten);
    
}cost(490)









console.log("js running -->");

let para = "my name is hasan";

let charIndex = -1;
// console.log(para.indexOf("s"));

function myIndexOf(char) {
  for (let i = 0; i < para.length; i++) {
    if (para[i] == char) {
      charIndex = i;
      break;
    }
  }

  console.log(char);
}

myIndexOf("a");

// console.log(charIndex);