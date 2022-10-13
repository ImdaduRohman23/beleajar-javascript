// let arr = [-2, -5, 0, 2, 6];
// let sumPlus = [];
// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] > 0) {
//         sumPlus.push(arr[i]);
//     }
// }
// console.log(sumPlus.length/arr.length);

// function plusMinus(arr) {
//     // Write your code here
//     let plus = 0;
//     let minus = 0;
//     let zero = 0;
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] > 0) {
//             plus++
//         } else if (arr[i] < 0) {
//             minus++
//         } else if (arr[i] == 0) {
//             zero++
//         }
//     }
//     return [
//         plus/arr.length,
//         minus/arr.length,
//         zero/arr.length
//     ]
// }

// console.log(plusMinus([2, -1, 0, -1, -1]))

// var a = '4';
// var b = 4;
// console.log(parseFloat(a))

// function factorial(n) {
//     let jmlh = 1;
//     for( let i = n; i > 0; i--){
//             jmlh *= i;
//         }
//     console.log(jmlh)
// }
// factorial(4);

//DAY 2:CONDITIONAL STATEMENT: SWITCH
// let a = 'aikol';
// let z ='';
// let y ='';
// for(let i = 0; i < a.length; i++){
//     // console.log(a[i])
//     if(a[i] == 'a' ||a[i] == 'i' ||a[i] == 'u' ||a[i] == 'e' ||a[i] == 'o'){
//         // console.log('naise')
//         z += a[i];
//     } else y += a[i];
// }
// let n = z.concat(y);
// for(let i = 0; i < n.length; i++){
//     console.log(n[i])
// }

//Day 2: Conditional Statements: Switch
// function getLetter(s) {
//     // Write your code here

//     switch(s.charAt(0)) {
//         case 'a': 
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//             return 'A'
//             break
//         case 'b':
//         case 'c':
//         case 'd':
//         case 'f':
//         case 'g':
//             return 'B'
//             break
//         case 'h':
//         case 'j':
//         case 'k':
//         case 'l':
//         case 'm':            
//             return 'C'
//             break
//         case 'n':
//         case 'p':
//         case 'q':
//         case 'r':
//         case 's':
//         case 't':
//         case 'v':
//         case 'w':
//         case 'x':
//         case 'y':
//         case 'z': 
//             return 'D'
//             break
//     }
    
// }
// getLetter('as')

//Day 3: Arrays
// function getSecondLargest(nums) {
//     // Complete the function
//     nums.sort((a, b) => b-a);
//     var largest2 = nums[0];

//     for(let i = nums.length; i >= 0 ; i--){
//         if(largest2 == nums[i] ){
//             largest2 = nums[i+1];
//         }

//     }
//     return largest2
// }
// console.log(getSecondLargest([1, 4, 5, 2, 5, 6, 6]))

//Day 3: Try, Catch, and Finally
// function reverseString(s) {
//     try{
//         s = s.split('').reverse().join('')
//     } catch(e) {
//         console.log(e.message)
//     } finally {
//         console.log(s)
//     }
// }

//Day 3: Throw
// function isPositive(a) {
//     if (a == 0) throw Error('Zero Error');
//     if (a < 0) throw Error('Negative Error');
//     if (a > 0) throw Error('YES');
// }

//Day 4: Create a Rectangle Object
// function Rectangle(a, b) {
//     const rec = {
//         length: a,
//         width: b,
//         perimeter: 2*(a+b),
//         area: a*b
//     }
//     return rec
// }

// console.log(Rectangle(4,5));

//Day 4: Count Objects
function getCount(objects) {
    
    let c=0;
    for( let i in objects) {
        if(objects[i].x === objects[i].y){
            c++
        }
    }
    return c
}
