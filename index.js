const baconAndEggs = require('./baconAndEggs');

const diner = {
  owner: {
    hire: (cook, cleanBill) => {

      let dinersClubMembers = [];

      let bill = cleanBill;

      const prepare = (ticket) => {
        bill = cook(bill, ticket);
        dinersClubMembers.forEach(clubMember => clubMember());
      };

      prepare({menuItem: "Don't use this menuItem, okay? It's for initializing a clean state. So..."});

      const serve = () => {
        return bill;
      };

      const frequent = dinersClubMember => {

        dinersClubMembers.push(dinersClubMember);

        const dinersClub = {
          dinersClubMembership: {
            leaveDinersClub: () => {
              const regularTable = dinersClubMembers.indexOf(dinersClubMember);
              dinersClubMembers.splice(regularTable, 1);
            }
          }
        };
        return dinersClub;
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

//waiter.takeOrder inconvenience method?
