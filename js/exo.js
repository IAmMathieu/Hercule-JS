console.log('test 1...2...1...2');

const profil = {
    hercule: {
        name: 'Hercule',
        job: 'Demi-dieu',
        age: 35,
        departement: 75,
        arm: 60.5,
        inRelationship: true,
    },
    friends: ['Jupiter', 'Junon', 'Alcmène', 'Déjanire'],
    addTitle() {
        let banner = document.querySelector('#header-banner');
        let title = document.createElement('h1');
        title.classList.add('banner__title');
        title.textContent = 'Vous consultez le profil de Hercule';
        banner.append(title);
    },
    workList() {
        for (workIndex = 0; workIndex < 12; workIndex++) {
            base.displayWork(workIndex);
        }
    },
    isAvailable() {
        const currentHour = base.getHour();
        const availableElm = document.querySelector('#availability');
        if (currentHour >= 8 && currentHour <= 20) {
            availableElm.textContent = 'Disponible';
        } else {
            availableElm.textContent = 'Non Disponible';
            availableElm.classList.add('off');
        }
    },
    makePseudo(prenom, dep) {
        return `${prenom}-du-${dep}`;
    },
    getPseudo(pseudo) {
        const pseudoElm = document.querySelector('#profil-name');
        pseudoElm.textContent = pseudo;
    },
    menuToggler() {
        const menuElm = document.querySelector('#menu-toggler');

        menuElm.addEventListener('click', () => {
            const headBanElm = document.querySelector('#header-banner');
            headBanElm.classList.toggle('banner--open');
        });
    },
    submitMessage() {
        const contactElm = document.querySelector('#contact');
        contactElm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Hercule ne souhaite pas être dérangé');
        });
    },
    voteCount() {
        for (const key in base.vote) {
            const candidatVote = Math.round((base.vote[key] / 173) * 100);
            const candidatElm = document.querySelector(`#trends-${key} .people__popularity`);
            const barElm = document.querySelector(`#trends-${key} .people__bar`);
            barElm.style.width = `${candidatVote}%`;
            candidatElm.textContent = `${candidatVote}%`;
        }
    },
    addActivities() {
        const activitiesListElm = document.querySelector('#activities .tasks');
        for (const activity of base.activities) {
            if (activity.author === 'Hercule' && activity.finished === true) {
                const titleElm = document.createElement('li');
                titleElm.textContent = activity.title;
                activitiesListElm.append(titleElm);
            }
        }
        const activitiesElm = document.querySelector('#activities');
        activitiesElm.classList.remove('hidden');
    },
    init: function () {
        base.fillProfil(profil.hercule);
        base.printFriends(profil.friends);
        base.setBestFriend(profil.friends[0]);
        profil.addTitle();
        profil.workList();
        profil.isAvailable();
        profil.voteCount();
        profil.menuToggler();
        profil.submitMessage();
        profil.getPseudo(profil.makePseudo(profil.hercule.name, profil.hercule.age));
        profil.addActivities();
    },
};

document.addEventListener('DOMContentLoaded', profil.init);
