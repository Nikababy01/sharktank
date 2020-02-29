import utils from '../helpers/utils.js';
import personData from '../helpers/data/personData.js';

const tankBuilder = () => {
const persons= personData.getAlivePersons();
    let domString = '';
domString += '<div class="card">';
domString += '<div class= "card-header"> Shark Tank </div>';
domString += '<ul class= " list- group list-group-flush">';
persons.forEach((person) => {
    domString += `<li class="list-group-item">${person.name}</li>`;
});

 domString += '<ul class="list-group">';
 domString += '<li class="list-group-item active">Cras justo odio</li>';
 domString += '<li class="list-group-item">Dapibus ac facilisis in</li>';
 domString += '<li class="list-group-item">Morbi leo risus</li>';
 domString += '<li class="list-group-item">Porta ac consectetur ac</li>';
 domString += '<li class="list-group-item">Vestibulum at eros</li>';
 domString += '</ul>';
 domString += '</div>';
utils.printToDom('tank',domString);
};

export default {tankBuilder};