console.log('test 1...2...1...2');

const hercule = {
    name: 'Hercule',
    job: 'Demi-dieu',
    age: 35,
    departement: 75,
    arm: 60.5,
    inRelationship: true,
};

base.fillProfil(hercule);

const friends = ['Jupiter', 'Junon', 'Alcmène', 'Déjanire'];

base.printFriends(friends);

base.setBestFriend(friends[0]);

function addTitle() {
    let banner = document.querySelector('#header-banner');
    let title = document.createElement('h1');
    title.classList.add('banner__title');
    title.textContent = 'Vous consultez le profil de Hercule';
    banner.append(title);
}

addTitle();

function workList() {
    for (workIndex = 0; workIndex < 12; workIndex++) {
        base.displayWork(workIndex);
    }
}

workList();

function isAvailable() {
    const currentHour = base.getHour();
    const availableElm = document.querySelector('#availability');
    if (currentHour >= 8 && currentHour <= 20) {
        availableElm.textContent = 'Disponible';
    } else {
        availableElm.textContent = 'Non Disponible';
        availableElm.classList.add('off');
    }
}

isAvailable();

function makePseudo(prenom, dep) {
    return `${prenom}-du-${dep}`;
}
const hercPseudo = makePseudo('Hercule', 75);

function getPseudo(pseudo) {
    const pseudoElm = document.querySelector('#profil-name');
    pseudoElm.textContent = hercPseudo;
}

getPseudo(hercPseudo);

function menuToggler() {
    const menuElm = document.querySelector('#menu-toggler');

    menuElm.addEventListener('click', () => {
        const headBanElm = document.querySelector('#header-banner');
        headBanElm.classList.toggle('banner--open');
    });
}

menuToggler();
