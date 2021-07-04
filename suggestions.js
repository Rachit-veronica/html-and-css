 const movie = [
     {name: 'channel'},
     {name: 'loki'},
     {name: 'youtube'},
     {name: 'mitro'}
 ];

const list = document.getElementById('list');

function setlist(group){
    clearlist();
    for(const person of group){
        const item = document.createElement('li');
        item.classList.add('list-group-item');
        const text = Document.createTextNode(person.name);
        item.appendChild(text);
        list.appendChild(item);
    }
    if (group.length === 0){
        setNoResult();
    }

}

function clearlist() {
    while (list.firstChild){
        list.removeChild(list.firstChild);
    }

}

function setNoResult(){
    const item = document.createElement('li');
        item.classList.add('list-group-item');
        const text = Document.createTextNode('No results found');
        item.appendChild(text);
        list.appendChild(item);
}
function getRelevacy(vlaue, searchTerm){
    if(vlaue === searchTerm){
        return 2;
    } else if (value.startswith(searchTerm)) {
        return 1;
    } else if(value.include(searchTerm)){
        return 0;
    } else{
        return -1;
    }
}
const searchInput = document.getElementById("search");

searchInput.addEventListener('input', (event) => {
    let value = event.target.value;
    if(vlaue && value.trim().length > 0){
       value = value.trim().toLowerCase();
       setList(movie.filter(person => {
           return person.name.includes(value);
       }).sort((A, personB) => {
            return getRelevacy(personB.name,value) - getRelevacy(personA.nqme,value);
       })); 
    } else{
        clearlist();
    }
})