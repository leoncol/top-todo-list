export default

function addToList(list, task){
    list.content.push(task);
    console.log(list.content);
}


window.addToList = addToList;
console.log('working;');