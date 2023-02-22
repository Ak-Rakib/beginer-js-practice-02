/*
    1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
    Now convert this array into an even array (array with even
    numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
    method. Hints: add one to any odd number and it will become an even
    number.
*/

// First try but i didn't found expected answer
// const emptyArray = [];
// const oddArray = [1, 3, 5, 7, 9];
// const convertToEvenArray = oddArray.map(even => {
//     for(let i =1; i < 10; i++){
//         if(i !== 0){
//             emptyArray.push(i);
//         }
//     }
//    console.log(even + emptyArray);
// });

// Try this second time and i has founded expected output Alhamdulillah! 
const oddArray = [1, 3, 5, 7, 9];
const duplicateOddArray = [1, 3, 5, 7, 9];
const convertToEvenArray = oddArray.map((a, i) => a + duplicateOddArray[i]);
// console.log(convertToEvenArray);





/*
    2) You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
    return/get all the elements which are divisible by 10 using
    array.filter() method.
*/

const array = [33, 50, 79, 78, 90, 101, 30];
const getConvertToDivisibleBy10Array = array.filter(x => x % 10 === 0);
// console.log(getConvertToDivisibleBy10Array);





/*
    3) Now do the same task of question 2. But do this using array.find()
    method. Then compare the output of question 2 & question 3.
*/

const sameArray = [33, 50, 79, 78, 90, 101, 30];
const getSameEquationUsingFind = sameArray.find(x => x % 10 === 0);
// console.log(getSameEquationUsingFind);


// Then compare the output of question 2 & question 3
const compareAboveEquation = [...getConvertToDivisibleBy10Array, getSameEquationUsingFind];
// console.log(compareAboveEquation);




/*
    1) You have an array [ 1, 9, 17, 22 ]. Add the all elements
    of this array and give output. Do this using for loop &
    array.reduce() method.
*/

const reduceArray = [1, 9, 17, 22];
const sumInsideElement = reduceArray.reduce((sum, num) => sum + num, 0);
// console.log(sumInsideElement);




/*
                        const people = [
                            {name: 'Meena', age: 34},
                            {name: 'lima', age: 24},
                            {name: 'upo', age: 21},
                        ];
    1) Challenging Follow above array of objects. So, you have 3 objects as
    array element. Can you find out the total sum from here?

    20 + 15 + 22 = 57 . The output will be 57

    What are you thinking? Yeah! Do it with for loop. I know you can do it.
    But! Wait !! Wait !!! Do the same task using array.reduce() method.
*/

const people = [
    { name: 'Meena', age: 34 },
    { name: 'lima', age: 24 },
    { name: 'upo', age: 21 },
];
const [a, b, c] = people.map(age => age.age);
// console.log([a,b,c]);

const getSumInsideObjectAge = [a, b, c].reduce((sum, age) => sum + age, 0);
// console.log(getSumInsideObjectAge);






/*
        const student = {
            name: 'Fredie',
            age: 26,
        }
*/

const student = {
    name: 'Fredie',
    age: 26,
}
// console.log(student.age);




/*
    let data = {
        location: [{
            latitude: '34.5, 37.8',
            longitude: '98.77, 58.7',
            city: 'Hyderabad',
            country: 'India'
        }]
    }
*/

let data = {
    location: [{
        latitude: '34.5, 37.8',
        longitude: '98.77, 58.7',
        city: 'Hyderabad',
        country: 'India'
    }]
}
// console.log(data.location[0].city);




/*
                {
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",                                    ● Console the value of email
                                                                ● Console the value of address
                                                                ● Console the value of city
                                                                ● Console the value of lat
                                                                ● Console the value of company
                                                                  name
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}
*/

const user = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }

  console.log(user.email);
  console.log(user.address);
  console.log(user.address.city);
  console.log(user.company.name);

