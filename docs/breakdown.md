# Project Design Breakdown Document

**Magic 8-Ball Webpage**

Saturday, April 22, 2023

Jack Montoro, Andrew Pan, Andrew Masek, Zuo Yang, Xander Hinrichsen

## Introduction

Our objective with this Magic 8-Ball assignment is to explore AI software that will allow us to create a 
webpage that performs all the features typical of a Magic 8-Ball. To this end, we found a number of features
characteristic of similar webpages that we will want to implement in this project.

## Design Considerations

We found that the vast majority of magic 8-ball pages on the internet include at least some image of a 
magic 8-ball, a space to enter your query, an animation once the button is pressed, and some response
after the animation finishes. Your task will be to use (free) AI tools that will allow you to add these 
features along with some optional additional features to spice things up.

### Theme Idea

We discussed implementing a "Magic Conch", where there are character buttons to represent characters from the show:

-These characters can say quotes from the show when clicked

-Example: If user clicks Squidward, the magic conch gives generally negative responses ("Conch Response").

When the user types in their question and generates an answer, the conch string is pulled and smoke appears.

### Goals and Guidelines

1. First, you will want to develop the skeleton of your webpage, potentially with some Chatbot prompt,
that will give you some rough outline of your implementation.

2. Secondly, you will want to generate a list of responses that will be selected randomly given some
user query. 

3. Thirdly, you will need to select some initial 8-Ball image that the user will encounter upon visiting
the site before any prediction is generated.

4. Preferably, you will want to implement some animation after the prediction button is pressed that will
provide the user with the impression that the 8-ball is "thinking" to make the page more aesthetically
convincing. 

5. (Optional) If you can find a free AI tool that will allow you to dictate responses to the user,
this could be very helpful for visually impaired users. This is optional because it is difficult to find
such a service that will allow you to download the generated audio quotes free of charge.

### Development Methods
For the code and response generation, it will be helpful to use a chatbot service such as ChatGPT.

For image creation, there are a number of services that will allow you to create images in various
artistic styles such as DreamStudio, which allows you to generate a fixed number of trial images 
free of charge. I have provided one example of an 8-ball rendition in the assets folder using this
service. 

## Architectural Strategies

The main portion of this project will be hosted through a webpage written in HTML. The rest of the program
will presumably interface with the page via CSS and JavaScript functions and objects.
