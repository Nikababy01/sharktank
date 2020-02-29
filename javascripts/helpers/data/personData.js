const persons = [
    {
        id:'person1',
        name: 'zoe',
        isDead: false
    },
    {
        id:'person1',
        name: 'aaron',
        isDead: false
    },
    {
        id:'person1',
        name: 'bethany',
        isDead: false
    },
    {
        id:'person1',
        name: 'davis',
        isDead: false
    },
    {
        id:'person1',
        name: 'john',
        isDead: false
    },
    {
        id:'person1',
        name: 'kenneth',
        isDead: false
    },
    {
        id:'person1',
        name: 'monique',
        isDead: false
    },
    {
        id:'person1',
        name: 'zachary',
        isDead: false
    },
    {
        id:'person1',
        name: 'anca',
        isDead: false
    },
    {
        id:'person1',
        name: 'beth',
        isDead: false
    },
    {
        id:'person1',
        name: 'christopher',
        isDead: false
    },
    {
        id:'person1',
        name: 'david',
        isDead: false
    },
    {
        id:'person1',
        name: 'dylan',
        isDead: false
    },
    {
        id:'person1',
        name: 'joey',
        isDead: false
    },
    {
        id:'person1',
        name: 'jose',
        isDead: false
    },
    {
        id:'person1',
        name: 'kayla',
        isDead: false
    },
    {
        id:'person1',
        name: 'liza',
        isDead: false
    },
    {
        id:'person1',
        name: 'michele',
        isDead: false
    },
    {
        id:'person1',
        name: 'ola',
        isDead: false
    },
    {
        id:'person1',
        name: 'sarah',
        isDead: false
    },
    {
        id:'person1',
        name: 'stephen',
        isDead: true
    },
    {
        id:'person1',
        name: 'steven',
        isDead: true
    },
    {
        id:'person1',
        name: 'todd',
        isDead: true
    },
    {
        id:'person1',
        name: 'zac',
        isDead: true
    },
];

const getAlivePersons = () => {
    return persons.filter((x) => x.isDead === false);
};

const getDeadPersons = () => {
    return persons.filter((x) => x.isDead === true);
};

const randomMurder =()=>{
    const alivePeople= getAlivePersons();
    const randomNum = Math.floor(Math.random()* alivePeople.length);
    const deadPersonsId = alivePeople[randomNum].id;//checks to see if person is dead
    const deadMan= persons.findIndex((x)=> x.id === deadPersonsId);//search for people that are dead
    persons[deadMan].isDead = true;
};


const bringToLife = (personId)=> {
    
  const itLives = persons.findIndex((x) => x.id === personId);
  persons[itLives].isDead= false;
};


export default { getAlivePersons, getDeadPersons, randomMurder};