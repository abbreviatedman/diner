# What Is A "Diner Architecture"?
        
        First thing's first: a Diner app is a Redux app, and the Diner Architecture is a reframing of the Redux Architecture. Diner's code only differs from Redux in the way it's invoked; the functionality is identical.
        
        There are other architectures that are similar to Diner's and Redux's: Flux, Cycle, and others. These are Diner-Like Architectures, and we'll explore their buffet styles and food court styles in-depth later. There are advantages and drawbacks to the other systems, and exploring their differences can help us understand state management architecture just a little bit better.
        
        Here, in brief, are the advantages of this style of state management:
        
        *Immutability:* none of your data is overwritten
        *Centrality:* one place where your state is kept
        *Readonlyity:* you can never change the state directly
        
        More on what each of those characteristics gives you very shortly. But first: [what is a Diner Architecture FOR?][whatIsADinerArchitectureFor]
        
        [whatIsADinerArchitectureFor]: ./whatIsADinerArchitectureFor
