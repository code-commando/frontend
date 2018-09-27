//action creators
// import superagent from 'superagent';

export const RANDOM_PAIRS='RANDOM_PAIRS';


// let apiURL = 'http://localhost:3000/api/v1/roster';



export const randomPairs = (pairs) => ({
  type: RANDOM_PAIRS,
  payload: pairs,
});


// Thunk action returns a function that dispatches an action.


const roster = ['Brittany Bolstad',
  'Anna Boyatyuk',
  'Tyler Confalone',
  'Autumn Curtis',
  'Khoa Huynh',
  'Phillip Kim',
  'Michael Lennerblom',
  'Josh McClung',
  'James McDaniel',
  'Aaron Meade',
  'Haley Mendoza',
  'Madhu Rebbana',
  'Maxwell Rediker',
  'Richard Tae',
  'Tama Rushin',
  'Ariel Altaras'];




function randomize(roster) {
  for (var i = 0; i < roster.length - 1; i++) {
    var j = i + Math.floor(Math.random() * (roster.length - i));
    var temp = roster[j];
    roster[j] = roster[i];
    roster[i] = temp;
  } 
  
  let pairs = [];
  
  for(let i = 0; i < roster.length-1; i +=2) {
    pairs.push([roster[i] + ', ' + roster[i+1]]);
  }
  
  if(roster.length %2 === 1) {
    let extra;
    extra = roster.pop();
    pairs[pairs.length -1 ].push(extra);
  }
  
  var newArr = [];
  for (let k = 0; k < pairs.length; k ++ ){
    newArr.push(pairs[k].join().split(','));
  }
  
  return newArr;
}  











export const randomPairsThunk = () => {
  return dispatch => {

    // const rando = Math.floor(Math.random() * roster.length);

    let pairsInfo = {
      'count': 1,
      'results': randomize(roster),
      'classCode': '401n5',
    };

    dispatch(randomPairs(pairsInfo));


    // superagent
    //   .get(`${apiURL}/pairs?classCode=401n5`)
    //   .then(pairs => {
    //     console.log('pairs', pairs);
    //     dispatch(randomPairs(pairs.body));
    //   });
  };
};

