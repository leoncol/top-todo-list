export default


function getTaskIndex (list, taskName){
    const getIndex = (element) => element.title == taskName;
    let index = list.content.findIndex(getIndex);
    return index;
    



    }   

window.getTaskIndex = getTaskIndex;