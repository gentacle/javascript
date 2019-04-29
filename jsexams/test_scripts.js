// function run(){
//     console.log('3초 후 시작');   
// };
// console.log('시작');
// setTimeout(run, 3000);
// console.log('끝');

// var num1 = 1;
// var num2 = 2;
// var result = 3;
// var string1 = num1 + ' 더하기' + num2 +'는 \'' + result + '\'';
// console.log(string1);

// const num3 =1;
// const num4 =2;
// const result2 =3;
// const string2 = `${num3} 더하기 ${num4}는 '${result2}'` ;
// console.log(string2);



// var relationship1 = {
//     name:'zero',
//     friends:['nero','hero','xero'],
//     logFriends: function(){
//         var that = this;
//         this.friends.forEach(function(friend){
//             console.log(that.name, friend);
//         });
//     },
// };
// relationship1.logFriends();

// const relationship2 = {
//     name: 'zero',
//     friends: ['nero','hero','xero'],
//     logFriends(){
//         this.friends.forEach(friend =>{
//             console.log(this.name, friend);
//         });
//     },
// };
// relationship2.logFriends();



// var candyMachine = {
//     status:{
//         name:'node',
//         count:5,
//     },
//     getCandy: function(){
//         this.status.count --;
//         return this.status.count;
//     }
// };
// var getCandy = candyMachine.getCandy;
// var count = candyMachine.status.count;

// const candyMachine = {
//     status:{
//         name:'node',
//         count:5,
//     },
//     getCandy(){
//         this.status.count--;
//         return this.status.count;
//     }
// };
// const {getCandy,status:{count}} = candyMachine;



// const condition = '';
// const promise = new Promise((resolve,reject)=>{
//     if(condition){
//         resolve('성공');
//     }else{
//         reject('실패');
//     }
// });

// promise
//     .then((message)=>{
//             console.log(message);
//         })
//     .catch((error)=>{
//         console.log(error);
//         });



// function findAndSaveUser(Users) {
//     Users.findOne({})
//         .then((user)=>{
//             user.name = 'zero';
//             return user.save();
//         })
//         .then((user)=>{
//             return Users.findOne({gender:'m'});
//         })
//         .then((user)=>{

//         })
//         .catch(err=>{
//             console.error(err);
//         });
//     }



const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
Promise.all([promise1,promise2])
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.error(error);    
});


