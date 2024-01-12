# Testing

Welcome, in this file I will discuss in this file the testing I have completed to ensure that all elements are tested and are responsive across diffrent devices.

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

The browsers which I used were:

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

🛑🛑🛑🛑🛑 START OF NOTES (to be deleted) 🛑🛑🛑🛑🛑

Defensive programming (defensive design) is extremely important!

When building projects that accept user inputs or forms, you should always test the level of security for each.
Examples of this could include (not limited to):

Forms:
- Users cannot submit an empty form
- Users must enter valid email addresses

You'll want to test all functionality on your application, whether it's a standard form,
or uses CRUD functionality for data manipulation on a database.
Make sure to include the `required` attribute on any form-fields that should be mandatory.
Try to access various pages on your site as different user types (User-A, User-B, guest user, admin, superuser).

You should include any manual tests performed, and the expected results/outcome.

Testing should be replicable.
Ideally, tests cases should focus on each individual section of every page on the website.
Each test case should be specific, objective, and step-wise replicable.

Instead of adding a general overview saying that everything works fine,
consider documenting tests on each element of the page
(ie. button clicks, input box validation, navigation links, etc.) by testing them in their happy flow,
and also the bad/exception flow, mentioning the expected and observed results,
and drawing a parallel between them where applicable.

Consider using the following format for manual test cases:

Expected Outcome / Test Performed / Result Received / Fixes Implemented

- **Expected**: "Feature is expected to do X when the user does Y."
- **Testing**: "Tested the feature by doing Y."
- (either) **Result**: "The feature behaved as expected, and it did Y."
- (or) **Result**: "The feature did not respond to A, B, or C."
- **Fix**: "I did Z to the code because something was missing."

Use the table below as a basic start, and expand on it using the logic above.

🛑🛑🛑🛑🛑 END OF NOTES (to be deleted) 🛑🛑🛑🛑🛑

Defensive programming was manually tested with the below user acceptance testing:

| Page   | Expectation | Test | Result | Fix | Screenshot |
| ---    | --- | --- | --- | --- | --- |
| Home   | | | | | |
|        | Love Tic Tac Toe Header is expected to do redirect to index.html when the user clicks on heading | Tested the feature by clicking 'Love Tic Tac Toe' in Nav | The feature behaved as expected, and it redirects to index.html| Test concluded and passed | ![screenshot](documentation/test/dp-index-1.png) |
|        | Play Now feature is expected to redirect to play.html when the user clicks the button            | Tested the feature by clicking 'Play Now' button| The feature behaved as expected, and it redirects to play.html | Test concluded and passed | ![screenshot](documentation/test/dp-index-2.png) |
| Play   | | | | | |
|        | Restart button is expected to change when clicked | Tested the feature by click 'Restart' | The feature behaved as expected, and it restarted the board | Test concluded and passed | ![screenshot](documentation/feature03.png) |
|        | Turn Counter is expected to change after every turn when the user clicks a box on the grid | Tested the feature by clicking grid, and the turn counter changed accordingly |  Test concluded and passed | ![screenshot](documentation/test/dp-play-1.png) |
|        | 
| Feedback | | | | | |
|        | Name is expected to do X when the user does Y | Tested the feature by doing Y | The feature behaved as expected, and it did Y | Test concluded and passed | ![screenshot](documentation/test/dp-play2.png) |
|        | Email is expected to do X when the user does Y | Tested the feature by doing Y | The feature did not respond to A, B, or C. | I did Z to the code because something was missing | ![screenshot](documentation/feature06.png) |
| Thank You| | | | | |
|        | Feature is expected to do X when the user does Y | Tested the feature by doing Y | The feature behaved as expected, and it did Y | Test concluded and passed | ![screenshot](documentation/feature07.png) |
|        | Feature is expected to do X when the user does Y | Tested the feature by doing Y | The feature did not respond to A, B, or C. | I did Z to the code because something was missing | ![screenshot](documentation/feature08.png) |

| All | Nav Bar
|     | Social media




## Bugs

- JS Uncaught TypeError: Cannot read properties of null script.js:71 (reading 'addEventListener')

    ![screenshot](documentation/test/bug-1-script.js-feedback.png)

    - To fix this, I removed line 94 from my feedback.html page as I had no JS within that page it caused the above bug.

- Redirect Timer on thankyou.html went below 10seconds and would not redirect

    ![screenshot](documentation/test/thankyou-bug1.png)

    - To fix this, I added a meta tag ' http-equiv="refresh" content="10;url=index.html ' on line 6 which resolved the issue.


## Unfixed Bugs

I started the project using the desktop view and towards the end of the project I added media queries which resulted in inconsistent CSS on my play.HTML page, the following bugs were found:

- Bug with Turn counter position

    ![screenshot](documentation/test/bug-media-queries.png)

    - Attempted fix: I tried to add additional media queries to handle the position of the turn counter, but as I changed the CSS, the position kept varying with different devices.


    - Bug with Win message position

    ![screenshot](documentation/test/bug-2-media-queries.png)

    - Attempted fix: I tried to add additional media queries to handle the position of the message and I experienced a similar problem as above.


    - Future resolution: I will attempt to create the same game but using root variables as well creating the website from lower dimensions to higher to ensure the elements like this are consitent across all devices

