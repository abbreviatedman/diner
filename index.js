const baconAndEggs = require('./baconAndEggs');
// const
const diner = {
  gm: {
    assembleTeam: (cooks) => {

      const hireCooksOnly = (cooksObject, weedingOutProcess) => {
        return Object.keys(cooksObject).reduce((moreSelectiveCooksObject, cookKey) => { //COOOKIEEE
            if (weedingOutProcess(cooksObject[cookKey])) {
              moreSelectiveCooksObject[cookKey] = cooksObject[cookKey];
            }
            return moreSelectiveCooksObject;
        }, {});
      };

      const assignSpecialtiesToCooks = (cooksObject, taskAssigningProcess) => {
        return Object.keys(cooksObject).reduce((dividedLaborObject, cookKey) => {
          dividedLaborObject[cookKey] = taskAssigningProcess(cooksObject[cookKey], cookKey);
          return dividedLaborObject;
        }, {});
      };

    const hiredCooks = hireCooksOnly(cooks, cook => typeof cook === 'function');
    const headChef = (dish = {}, ticket) => assignSpecialtiesToCooks(hiredCooks, (cook, cookKey) => cook(dish[cookKey], ticket));
    return headChef;
    }
  },

  owner: {
    hire: (cook, cleanBill = {}) => {

      let dinersClubMembers = [];

      let bill = cleanBill;

      const prepare = (ticket) => {
        bill = cook(bill, ticket);
        dinersClubMembers.forEach(clubMember => clubMember());
      };

      prepare({menuItem: '"We stopped to eat breakfast at a diner run by a white-haired lady who gave us extra-large portions of potatoes as church-bells rang in the nearby town. Then off again." - Jack Kerouac, On the Road'});

      const serve = () => {
        return bill;
      };

      const frequent = dinersClubMember => {

        dinersClubMembers.push(dinersClubMember);

        const dinersClubMembership = {
            leaveDinersClub: () => {
              const regularTable = dinersClubMembers.indexOf(dinersClubMember);
              dinersClubMembers.splice(regularTable, 1);
            }
          };
        return dinersClubMembership;
      };

    const restaurant = {
      serve,
      frequent,
      prepare,
      baconAndEggs
    };


    return restaurant;
    }
  }
};

module.exports = diner;
