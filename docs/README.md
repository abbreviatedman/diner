What's The Point Here?

###Why did I write Diner?

*I had this great idea:* a diner metaphor that helps people better understand how all of Redux's pieces fit together. Then I thought about how to get this idea out there. Should I write a blog post explaining the way I made sense of Redux?

*That's when I had this _weird_ idea:* I'm a coder, right? So why not explain it by coding a library? It would work _just exactly_ like Redux, but it would change the method names, and a couple of the method shapes, and include copious documentation, all to encourage the use of this diner metaphor. Thus DinerJS was born.

###How do I use Diner?

You can use Diner one of two ways:

1. The simpler way: use Redux, while reading these docs to understand it better.
2. Download [Diner.js](github.com/abbreviatedman/diner) and use it to enforce upon yourself the use of the metaphor. (Metaphorce!) You should probably still read these docs, though.


###Who should use Diner?

* Those looking to understand frameworks with immutable central states, particularly Redux.
* Those who use Redux but don't quite get how it all fits together.
* Those who use Redux regularly but still find themselves occasionally having to pause to reason about it.

###Who shouldn't use Diner, though?

- Those who understand Redux so thoroughly that they've written multiple Medium posts about it. (I'm being silly. _Obviously_ you don't need to understand a topic to write a Medium post about it.)
- Those who code in Redux so effortlessly that others refer to them as the single source of truth.
- Those who hate central state systems and are furthermore entirely sure they're never going to change their mind about it no never just uh _uh_.
- Dan Abramov.


###How did I write Diner?

*Very, very slowly.* I made sure to completely understand every Redux method before I re-implemented it in Diner. And if you want to understand something fully, this is one of the greatest ways to do it! I highly encourage you to check out Redux's source code, which is concise and beautiful and chock full of functional programming concepts. Dan Abramov has also written copious and helpful comments in the code, so if you want to do a deep dive, check that out. I'd also check out the Slim Redux gist he made; it contains all of Redux's functional code, but strips out the comments and all (highly important!) sanity checks, so you can see all the code relevant to understanding it in one 99-line file. A great read!

As I carefully reimplemented Redux, it became more and more apparent how close a match the diner metaphor was to Redux, from the broad strokes of its architecture to its tiniest functions, and how to adapt the metaphor where it didn't match. And so I began not just to carefully reimplement it, but to think about how to encourage the use of this metaphor. That question, how best to shape and describe frameworks for maximum usability, is far from answered.

For more thoughts about metaphor, code, and usability, skip to the Diner Project section at the end of these docs. Or, let's march right on through to explaining
[how a diner-like architecture works] [dinerArchitecture].

[dinerArchitecture]: ./introduction/quickIntro.md
