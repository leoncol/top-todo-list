export { getSelectedList }

function getSelectedList(){
    const currentList = localStorage.getItem('currentList');
    return JSON.parse(currentList);
}