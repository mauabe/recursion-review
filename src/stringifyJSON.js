// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if(typeof obj === 'string')
    {return  '"' + obj+ '"' ;}
  if(typeof obj === 'number')
    {return  '' + obj + '' ;}
  if(typeof obj === 'boolean')
    {return  '' + obj + '' ;}
  if(obj === null)
    {return  'null' ;}
  // ========

  if(Array.isArray(obj)) {
    if(obj[0] === undefined){
      return '[]';
    }
    for(let i = 0; i < obj.length; i++){
     obj[i] = stringifyJSON(obj[i])
    }
    
    obj = '[' + obj + ']'
  }
  if(typeof obj === 'object' && !Array.isArray(obj)) {

   return '{' + Object.values(obj).reduce( (all, item, index) => {
          if(typeof item === 'function' || typeof item === 'undefined') {
       return '';
     }
    all.push(stringifyJSON(Object.keys(obj)[index]) + ':' + stringifyJSON(Object.values(obj)[index]))
     return all;
   }, []) + '}'; 
 }



  return '' + obj + '';
};
