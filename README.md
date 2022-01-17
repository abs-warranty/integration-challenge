# Automotive Business Solutions Integration Challenge

## Setup

1. If you haven't already, sign up for GitHub and [install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
2. [Create a new repository](https://github.com/new) called `integration-challenge` and set it to Private.
3. Clone this repository. `git clone https://github.com/abs-warranty/integration-challange.git`
4. `cd` into the cloned integration-challenge repo and add your private repository as a remote, so you can push to it. `git remote add upstream git@github.com:YOUR_USERNAME/integration-challenge.git`
5. Create a new branch off of the `integration-challenge` repo where you can make your code changes and open a PR to the `master` branch once you're done. `get checkout -b challenge`
6. After you have finished coding the challenge, when you're ready to push your code to your branch, make sure to do `git push upstream challenge`.

Make sure yuo have Node.js and `yarn` installed globally, then start the repo:

```(terminal)
yarn install
yarn start
```

You should now have the app running on `http://localhost:8083`.

**Before submitting your code, please make sure to lint and format it.**

## Challenge

1. We'd like you to create your own modal component.

   - Treat it like a component that you'll be integrating in a variety of websites. Your code should be good quality, even if the client's website is not. Readable, maintainable code is good. Your modal should interfere as little as possible with the client’s website code, and it should be reusable in other websites. Remember, the client may modify their website's javascript code in the future, and ideally your integration should be separated enough from their code such that the modal can continue working.
   - Your modal's HTML, javascript, and CSS should be handwritten by you. Please use either vanilla JS or jQuery.
   - Your modal will ask the user to pick between 3 different warranty options, or opt out of selecting a warranty.

2. Once you have your modal, the client has asked you to integrate it into their website (`client/index.html`)
   - Whenever a user clicks `Purchase`, your modal should appear.
   - When they submit the modal, their selection should be attached to the data that is posted.

## Tips

- Try not to remove or change the client's code where possible, but instead focus on adding to it.
- Adding classes or IDs to elements on the client's website is often ok if necessary to enable the javascript to access specific DOM elements.
- On some clients' websites, you may need to work around the way they coded their app.
