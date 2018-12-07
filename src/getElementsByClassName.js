// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:


var getElementsByClassName = function(className, node = document.body) {
  let $body = [].includes.call(node.classList, className);
  let output = [];
  if($body) {
    output.push(node);
  }
 for(let i = 0; i < node.children.length; i++) {
  if(getElementsByClassName(className, node.children[i]).length) {
     output.push(getElementsByClassName(className, node.children[i]))
   }
  }
 return output.reduce((all,item) => {
   return all.concat(item)
 }, []);
};












