import baconAndEggs from './baconAndEggs';

const diner = {
  owner: {
    hire: (cook, cleanBill) => {

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

export const {owner} = diner;

export default diner;
