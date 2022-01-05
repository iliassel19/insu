# Frontend Mentor - Insure landing page solution

This is a solution to the [Insure landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/insure-landing-page-uTU68JV8). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### Screenshot

(/insure-landing-page-master/screenshot/Screenshot\ desktop.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow

### What I learned

Buildinng this webpage was very amusing, especialy beceause of the patterns, because I had to figure out technics to try to create a similar webpage as the one already given in form of screenshots.
So along with the excessive use of " position:absolute " to implement patterns. So, I thought of using " background " proprety . But I already used it for color, and as I was trying to get this out, I found that we can used different background propreties and that worked perfectly.
Furthermore, I wanted to add a special touch to my work. I have seen a lot of portfolios via " Awwwards " and the smooth scrolling really caught my attention. So I used a JS code taken from Jonas Schmedtmann whom course helped me so much.

To see how you can add code snippets, see below:

```css
.how-we-work {
  background-color: hsl(256, 26%, 20%);
  background-image: url(/insure-landing-page-master/images/bg-pattern-how-we-work-desktop.svg);
  background-repeat: no-repeat;
  background-position: right;
}
```

```js
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});
```

### Continued development

The switch between CSS Grid and Flexbox is a thing that I really want to perfection. Especialy when it comes to media quierries. I want to be smooth and quick in switching between this two technics.

## Author

- Website - [](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)

## Acknowledgments

The main person that I think helped me very much is Jonas schmedtmann because from his project that I learned some technics that I used for this project.
