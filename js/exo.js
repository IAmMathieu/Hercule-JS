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
