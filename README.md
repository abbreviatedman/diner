DinerJS is an implementation of Redux that uses a consistent metaphor so you can quickly grasp it.

I'll be writing more about its design soon enough, and if you want to help make Diner better, please contribute! But in the meantime, here's just the basic usage:

Download it in the command line using npm:

`npm install diner`


Import it into your project:

```javascript
import diner from 'diner';
```

If you want to avoid writing `diner.owner.hire` later you can import the following instead:

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

Write out your `cook`:

```javascript
const mathCook = (dish = {total: 0}, order) {
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

Set up a clean `bill`:

```javascript
const cleanBill = {total: 0};
```

Wire it together:

```javascript
const restaurant = owner.hire(mathCook, cleanBill);
```

That's design. How do we use it?

Give your `order` to your `waiter`. He'll translate it to a `ticket` you can give to the `chef`. 

```javascript
const ticket = addWaiter(3);
```

Tell the `chef` to make that `ticket` into a _meal_:

```javascript
restaurant.prepare(ticket);
```

Get your data onto the table where you can eat/use it:

```javascript
const currentTotal = restaurant.serve();
```

Have a front end that wants to run a function every time there's a new `dish`? Well!:

```javascript
restaurant.frequent(callbackFunction);
```

Now that will run every time your application's state updates.

Does your front end want to stop "listening" to the state? Store the return value of `frequent`.

```javascript
const dinersClubMembership = restaurant.frequent(callbackFunction);
```

Then, when your component's ready to leave:

```javascript
dinersClubMembership.leaveDinersClub();
```

That's it!

What we need to add to make it a full-functioned Redux-like:

1. Sanity checks. We have none!
2. Clearer docs for those who've never used Redux before.
3. The ability to incorporate middleware. ("Specials"?)
4. The ability to combine reducers. ("Hire a head chef"?)

Want to help? Do one of those things!

Have your own ideas for how to improve DinerJS? Do one of _those_ things.

Thanks for reading!
