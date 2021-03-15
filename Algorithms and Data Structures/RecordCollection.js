// You start with an updateRecords function that takes an object like collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.

// Your function must always return the entire object.
// If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
// If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
// If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
// If value is an empty string, delete the given prop property from the album.
// Note: A copy of the collection object is used for the tests.

var collection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(object, id, prop, value) {
  
     if(object.hasOwnProperty(id)&&prop!=="tracks"){
  
        if(value){
  
          object[id][prop] = value;
  
        }else{
  
         delete object[id][prop];
  
        }
  
     }else if(object.hasOwnProperty(id)&&prop==="tracks"){
  
       if(value){
  
        if(object[id].hasOwnProperty("tracks")){
  
          object[id][prop].push(value);
  
         }else{
  
          object[id][prop] = [];
  
          object[id][prop].push(value);
  
        }  
  
      }else{
  
        if(object[id].hasOwnProperty("tracks")){
  
         delete object[id][prop];
  
        }
  
      }
  
     }
    return object;
     
  }
  
  updateRecords(collection, 5439, 'artist', 'ABBA');