# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot
![Screenshot 2021-12-09 at 22-13-33 Base Apparel Coming Soon](https://user-images.githubusercontent.com/19538219/145516742-522aadd6-26c9-4af8-947c-68e22ac658eb.png)


### Links

- Repo URL: [https://github.com/sadiejay/base-apparel/](https://github.com/sadiejay/base-apparel/)
- Live Site URL: [https://sadiejay.github.io/base-apparel/](https://sadiejay.github.io/base-apparel/)

## My process
- Built out mobile view first

- Added media query for tablet and desktop

- Played around with bakground img vs figure element for the hero img

- Added JS email validation.

- Added hover animation to button

- Revisted the project a month later:
  - Changed text alignment for desktop
  - Bumped up font size for `h1`
  - Removed browser styles for `p` and `figure`
  - Added background img for desktop
  - Added a padding to `figure.content-wrapper` and `main .content-wrapper`
    - not my most elegant solution but wasn't sure how to get the two elements aligned.
  - Added aria labels on button and input.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned


- It's taken about 4 hours to code the mobile view.

- I'm stuck on the button and how to overlap. Maybe a change in html is needed?
  - I learned that it's the border of the form that creates the look of the button overlapping the input area.

- First time using variables in a long time.

-Excited to play around with hover states for the first time in a long time, as well as min(), and clamp().
  - Oops! After strugging for days on resizing a mobile image for desktop, I never got around to playing with `min()` and `clamp()`

- Don't be like me and forget that there's two images. I was stumped on img resizing for days.
  - I wanted to play around with background image and `figure` / `img` tags in the css for better positioning of the hero but again, got too bogged down trying to resize a mobile img for mobile :faceplam:  

  #### code snippets

```css
.container {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-areas: 
        "header header hero"
        "main main hero"
        "footer footer hero"
        ;
        grid-template-rows: minmax(auto, max-content) minmax(500px, 30fr) minmax(auto,max-content);
        grid-template-columns: repeat( 2, minmax(0, calc((980px*.66666)/2)) ) minmax(33%, auto);
      }
```
  - the math! I'm thinking there's a simpler way but this is working well enough.

```js
form.addEventListener('submit', (e)=> {
    e.preventDefault();
    validateEmail(emailInput);
});
```
  - Honestly, all of my js I'm proud of. I really stuggled with this.

### Continued development

For future project, I need to improve my js skills!! 
- I think this could be a nice simple project for react or svelte as well. 

I'm also surprised at how this project didn't seem to lend well to responsive design. I tried my best tho!

### Useful resources

- [Email Validation Code](https://www.w3resource.com/javascript/form/email-validation.php) - This is the template for my email validation code.
 - Stack Overflow - [How to add button inside input](https://stackoverflow.com/questions/15314407/how-to-add-button-inside-input) - Thanks to this question, I realized the form had the border and not some overlap thing.

## Author

- Github - [@sadiejay](https://github.com/sadiejay)
- Frontend Mentor - [@sadiejay](https://www.frontendmentor.io/profile/sadiejay)

## Acknowledgments

- Thanks to Matthias Burchardt on the frontend mentors slack for your help with the validation code!
