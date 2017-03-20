Diner.js is a re-implementation of Redux that uses a consistent metaphor so you can quickly grasp it.

# [View the full Diner docs.][docs]

If you don't feel like reading the full docs, here's just the basic usage:

Download Diner in the command line using `npm` or `yarn`:

```bash
npm install diner
```

Import it into your project:

```javascript
import diner from 'diner';
```

If you want to write `owner.hire` later instead of writing out `diner.owner.hire` every time, you can import the following instead:

```javascript
import {owner} from 'diner';
```

But I'd encourage you not to destructure beyond that: the point here is to encourage thinking in the full metaphor. Who's hiring? The `owner` is. Noun-verb.

Make a `menu`:

```javascript
const menu = {
    ADD_TO_TOTAL: 'ADD_TO_TOTAL'
    SUBTRACT_FROM_TOTAL: 'SUBTRACT_FROM_TOTAL'
};
```

Define your `waiters`:

```javascript
const addWaiter = (number) => {
    return {
        menuItem: menu.ADD_TO_TOTAL,
        number: number
    }
};
```

```javascript
const subtractWaiter = (number) => {
    return {
        menuItem: menu.SUBTRACT_FROM_TOTAL,
        number: number
    }
};
```

Set up a clean `bill`:

```javascript
const cleanBill = {total: 0};
```

(The `cleanBill` is very important to setting up your state. When you have everything set up, Diner will populate the state with your `cleanBill` for you!)

Write out your `cook`:

```javascript
const mathCook = (dish = cleanBill, order) {
    const newDish = Object.assign({}, dish);
    switch (order.menuItem) {
        case menu.ADD_TO_TOTAL:
            newDish.total += order.number;
            break;
        case menu.SUBTRACT_FROM_TOTAL:
            newDish.total -= order.number;
            break;
        default: return dish;
    }
    return newDish;
}
```

Are you ready to wire it all together? Me too!

```javascript
const restaurant = owner.hire(mathCook);
```

If your `restaurant` is getting bigger and your `cook` is getting overworked (think of the `switch` statement as his apron getting messier and messier), bring in a `gm` to `assembleTeam` and give you a `headChef` to manage it all.

Split up your `cook` into separate `cooks`. Then do the following:

```javascript
import {gm} from 'diner';

const headChef = gm.assembleTeam(math: mathCook, users: userCook, cookies: cookieCook, orders: orderCook);

owner.hire(headChef);
```

Now your state will hold an object with those keys, and each key will have the state that that particular `cook` is in charge of.

So that's design. How do we _use_ it?

Give your `order` to your `waiter`. He'll translate it to a `ticket` you can give to the `chef`.

```javascript
const ticket = addWaiter(3);
```

Tell the `chef` to make that `ticket` into a _meal_:

```javascript
restaurant.prepare(ticket);
```

Now your data is on our central, read-only state tree.

When you want your data back so you can eat/use it:

```javascript
const {total} = restaurant.serve();
```

Or, if you have a headChef system going on, you'll have a `buffet` instead of a `dish`, and you'll have to choose which `dish` you want:

```javascript
const {math} = restaurant.serve();
console.log

const {users} = restaurant.serve();
const {userList} = users;
```

That's all you need to get a diner app up and running.

But wait, there's more! Do you have a front end that wants to run a function every time there's a new `dish`? Well!:

```javascript
restaurant.frequent(callbackFunction);
```

Now that `callbackFunction` will run every time your application's state updates.

Does your front end want to stop "listening" to the state? Stop throwing away your old return values. We can use them!

```javascript
const dinersClubMembership = restaurant.frequent(callbackFunction);
```

Then, when your component's ready to stop 'listening':

```javascript
dinersClubMembership.leaveDinersClub();
```

That's it!

Now here's what we need to add to make diner a full-functioned Redux-like:

1. Sanity checks. We have literally none! Are you passing the right things in the right places? WHO KNOWS.
2. Clearer docs for those who've never used Redux before.
3. The ability to incorporate middleware. ("Middlemen"?)

Want to help? Do one of those things!

Have your own ideas for how to improve Diner.js? Do one of _those_ things.

Thanks for reading!

[docs]: https://abbreviatedman.gitbooks.io/dinerjs/
