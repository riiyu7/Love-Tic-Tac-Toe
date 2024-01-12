# Testing

Welcome to TESTING.md. I will discuss in this file the testing I have completed to ensure that all elements are tested and are responsive across different devices.

Return back to the [README.md](README.md) file.



## Code Validation

### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.

| Page      | W3C URL                                                                                                   | Screenshot                                                       | Notes           |
| ---       | ---                                                                                                       | ---                                                              | ---             |
| Home      | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Friiyu7.github.io%2FTic-Tac-Toe%2Findex.html)         | ![screenshot](documentation/test/validator-w3-index.html.png)    | Pass: No Errors |
| Play Now  | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Friiyu7.github.io%2FTic-Tac-Toe%2Fplay.html)          | ![screenshot](documentation/test/validator-w3-play.html.png)     | Pass: No Errors |
| Feedback  | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Friiyu7.github.io%2FTic-Tac-Toe%2Ffeedback.html)      | ![screenshot](documentation/test/validator-w3-feedback.html.png) | Pass: No Errors |
| Thank You | [W3c](https://validator.w3.org/nu/?doc=https%3A%2F%2Friiyu7.github.io%2FTic-Tac-Toe%2Fthankyou.html%3F)   | ![screenshot](documentation/test/validator-w3-thankyou.html.png) | Pass: No Errors |

### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.


| File      | Jigsaw URL                                                                                               | Screenshot                                             | Notes           |
| ---       | ---                                                                                                      | ---                                                    | ---             |
| style.css | [Jigsaw](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Friiyu7.github.io%2FTic-Tac-Toe) | ![screenshot](documentation/test/validator-w3-css.png) | Pass: No Errors |


### JavaScript

I have used the recommended [JShint Validator](https://jshint.com) to validate all of my JS files.

| File      | Screenshot                                                   | Notes           |
| ---       | ---                                                          | ---             |
| script.js | ![screenshot](documentation/test/validator-jshint-scipt.png) | Pass: No Errors |


## Browser Compatibility

I have used different browsers to check any browser compatibility issues.

The browsers that I used were:

- [Chrome](https://www.google.com/)
- [Edge](https://www.microsoft.com/edge)
- [Brave](https://brave.com/download)


I've tested my deployed project on multiple browsers to check for compatibility issues.

| Browser | Home                                                    | Play                                                   | Feedback                                                   | Thank You                                                  | Notes             |
| ---     | ---                                                     | ---                                                    | ---                                                        | ---                                                        | ---               |
| Chrome  | ![screenshot](documentation/test/chrome-index-page.png) | ![screenshot](documentation/test/chrome-play-page.png) | ![screenshot](documentation/test/chrome-feedback-page.png) | ![screenshot](documentation/test/chrome-thankyou-page.png) | Works as expected |
| Edge    | ![screenshot](documentation/test/edge-index-page.png)   | ![screenshot](documentation/test/edge-play-page.png)   | ![screenshot](documentation/test/edge-feedback-page.png)   | ![screenshot](documentation/test/edge-thankyou-page.png)   | Works as expected |
| Brave   | ![screenshot](documentation/test/brave-index-page.png)  | ![screenshot](documentation/test/brave-play-page.png)  | ![screenshot](documentation/test/brave-feedback1-page.png) | ![screenshot](documentation/test/brave-feedback-page.png)  | Works as expected |

## Responsiveness


I've tested my deployed project on multiple devices to check for responsiveness issues.

| Device            | Home                                             | Play                                            | Feedback                                             | Thank You                                            | Notes                |
| ---               | ---                                              | ---                                             | ---                                                  | ---                                                  | ---                  |
| Mobile (DevTools) | ![screenshot](documentation/test/dv-m-index.png) | ![screenshot](documentation/test/dv-m-play.png) | ![screenshot](documentation/test/dv-m-feedback.png)  | ![screenshot](documentation/test/dv-m-thankyou.png)  | Works as expected    |
| Tablet (DevTools) | ![screenshot](documentation/test/dv-t-index.png) | ![screenshot](documentation/test/dv-t-play.png) | ![screenshot](documentation/test/dv-t-feedback.png)  | ![screenshot](documentation/test/dv-t-thankyou.png)  | Works as expected    |
| Desktop           | ![screenshot](documentation/test/dt-index.png)   | ![screenshot](documentation/test/dt-play.png)   | ![screenshot](documentation/test/dt-feedback.png)    | ![screenshot](documentation/test/dt-thankyou.png)    | Works as expected    |
| Samsung s23 Ultra | ![screenshot](documentation/test/m-index.jpg)    | ![screenshot](documentation/test/m-play.jpg)    | ![screenshot](documentation/test/m-feedback.jpg)     | ![screenshot](documentation/test/m-thankyou.jpg)     | Works as expected    |



## Lighthouse Audit

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues.

| Page      | Mobile                                                             | Desktop                                                             | Notes                |
| ---       | ---                                                                | ---                                                                 | ---                  | 
| Home      | ![screenshot](documentation/test/llighthouse-mobile-index.png)     | ![screenshot](documentation/test/llighthouse-desktop-index.png)     | Some minor warnings  |
| Play      | ![screenshot](documentation/test/llighthouse-mobile-play.png)      | ![screenshot](documentation/test/llighthouse-desktop-play.png)      | Some minor warnings  |
| Feedback  | ![screenshot](documentation/test/llighthouse-mobile-feedback.png)  | ![screenshot](documentation/test/llighthouse-desktop-feedback.png)  | Some minor warnings  |
| Thank you | ![screenshot](documentation/test/llighthouse-mobile-thankyou.png)  | ![screenshot](documentation/test/llighthouse-desktop-thankyou.png)  | Some minor warnings  |

## Defensive Programming

Defensive programming was manually tested with the below user acceptance testing:

| Page   | Expectation | Test | Result | Fix | Screenshot |
| ---    | --- | --- | --- | --- | --- |
| Home   | | | | | |
|        | Love Tic Tac Toe Header is expected to redirect to index.html when the user clicks on heading. | Tested the feature by clicking 'Love Tic Tac Toe' in the header. | The feature behaved as expected, and it redirects to index.html. | Test concluded and passed. | ![screenshot](documentation/test/dp-index-1.png) |
|        | Play Now feature is expected to redirect to play.html when the user clicks the button. | Tested the feature by clicking the 'Play Now' button. | The feature behaved as expected, and it redirects to play.html. | Test concluded and passed | ![screenshot](documentation/test/dp-index-2.png) |
| Play   | | | | | |
|        | Restart button is expected to restart the board when clicked. | Tested the feature by clicking 'Restart'. | The feature behaved as expected, and it restarted the board. | Test concluded and passed. | ![screenshot](documentation/test/dp-play2.png) |
|        | Turn Counter is expected to change after every turn when the user clicks a box on the grid. | Tested the feature by clicking the grid, and the turn counter changed accordingly. | The feature behaved as expected, and it restarted the board. | Test concluded and passed. | ![screenshot](documentation/test/dp-play-1.png) |
| Feedback | | | | | |
|        | Name field is expected to show error message when left empty. | Tested the feature by leaving field blank and clicking 'Submit'. | The feature behaved as expected, and displayed a error message. | Test concluded and passed. | ![screenshot](documentation/test/dp-feedback-1.png) |
|        | Email Name field is expected to show error message when left empty. | Tested the feature by leaving field blank and clicking submit.  | The feature behaved as expected, and displayed an error message. | Test concluded and passed. | ![screenshot](documentation/test/dp-feedback-2.png) |
|        | Submit button redirects to thankyou.html. | Tested the feature by adding information to fields and clicking submit. | The feature behaved as expected, and it redirects to thankyou.html  | Test concluded and passed. | ![screenshot](documentation/test/dp-feedback-3.png) |
| Thank You | | | | | |
|        | Countdown timer countsdown to 10 before redirecting user to index.html. | Tested the feature by waiting 10 seconds. | The feature behaved as expected, and it redirected to index.html. | Test concluded and passed. | ![screenshot](documentation/test/dp-Thankyou-1.png) |
|        | Play Now feature is expected to redirect to play.html when the user clicks the button. | Tested the feature by clicking 'Play Now' button. | The feature behaved as expected, and it redirects to play.html. | Test concluded and passed.  | ![screenshot](documentation/test/dp-Thankyou-2.png) |
| All Pages | Responsive Nav bar should redirect users to relevant paes | Tested the feature by clicking through all pages on all HTML pages | The feature behaved as expected, and it redirects to relevant pages | Test concluded and passed.  | ![screenshot](documentation/test/dp-nav-1.png) |
|           | social media icons should redirect users to relevant social media links | Tested the feature by clicking through all social media icons and reviewing code to ensure it opens in a new tab | The feature didin't open a new tab when clicked  | Fixed issue by adding target="_blank" to anchor link, and when clicked, a new tab opens. | ![screenshot](documentation/test/dp-socialmedia-1.png) |


## Bugs

- JS Uncaught TypeError: Cannot read properties of null script.js:71 (reading 'addEventListener').

    ![screenshot](documentation/test/bug-1-script.js-feedback.png)

    - To fix this, I removed line 94 from my feedback.html page, as I had no JS within that page, it caused the above bug.

- Redirect Timer on thankyou.html went below 10 seconds and would not redirect.

    ![screenshot](documentation/test/thankyou-bug1.png)

    - To fix this, I added a meta tag ' http-equiv="refresh" content="10;url=index.html ' on line 6, which resolved the issue.


## Unfixed Bugs

I started the project using the desktop view, and towards the end of the project, I added media queries, which resulted in inconsistent CSS on my play.HTML page, the following bugs were found:

- Bug with Turn counter position

    ![screenshot](documentation/test/bug-media-queries.png)

    - Attempted fix: I tried to add additional media queries to handle the position of the turn counter, but as I changed the CSS, the position kept varying with different devices.


    - Bug with Win message position

    ![screenshot](documentation/test/bug-2-media-queries.png)

    - Attempted fix: I tried to add additional media queries to handle the position of the message, and I experienced a similar problem as above.


    - Future resolution: I will attempt to create the same game but using root variables as well, creating the website from lower dimensions to higher dimensions to ensure the elements like this are consistent across all devices.

