var recipes = {}

function updateObjectWithKeyAndValue(object,key,value) {
  
}
function updateObjectWithKeyAndValue(object,key,value) {
  Object.assign({},object,{key:value})
}
function destructivelyUpdateObjectWithKeyAndValue(object,key,value) {
  object[key] = value
  return object
}
function deleteFromObjectByKey(object,key) {
  delete object.key
  
}
function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key]
}
function destructivelyDeleteFromObjectByKey(object,key) {
  
}