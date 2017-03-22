#What's A Diner Architecture For?

Every app worth its salt has something you can _do_. And when you do something, it changes the state of your app. Whether you've Liked a page, toggled a sidebar menu, or zooming in on a photo, the app needs to keep track of what's happening, so it can know what it can do from that point. That's your state.

The Diner Architecture is a complete blueprint for structuring your state management. It is _not_ a plan for how to scale an app, how to build a route hierarchy, or what makes a container component.

But state management is an important part of your app, and a pain point if you don't have a carefully planned system.

Now, when I say "Diner Architecture", I'm describing a state management architecture most famously used by Dan Abramov in designing Redux (and since by a few others). There are other, similar architectures as well, and we'll discuss the Diner Architecture and alternatives in further detail in our [Diner Architecture][Diner Architecture] section.

But now that you know what it's for, [What's A Diner Architecture Look Like?][What's A Diner Architecture Look Like?]

[Diner Architecture]: ../architecture/centrality.md
[What's A Diner Architecture Look Like?]: ./look.md
