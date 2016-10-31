## Live Link
View the live app here: https://tweet-stream-ldh.herokuapp.com/

## About
TweetStream is a live streaming app for Twitter.  Users search by a keyword or hashtag for the latest tweets that match the search parameter.  It's a great way to see what people all over the world are talking about on a topic that interests the user. The user does not need to be logged into Twitter to use the app.

The app makes use of web sockets from Socket.io to constantly push new Tweets into the browser.  It runs on an Express server and accesses the Twitter Streaming API, which returns JSON data.  This is made easier using the Twit node package.

Styling includes CSS and Twitter Bootstrap based around the bright Twitter blue.

## Quickstart
**In Terminal**
* Make sure you have the following prgrams installed on your computer:
  * Node.js
  * Git
  * A text editor like Sublime Text or Atom
* Clone the repository
 `git clone https://github.com/lhochsz/twitterfeed`
* Move into the folder
`cd twitterfeed`
* Install Node packages
 `npm install`
* Go to the [Twitter API](https://apps.twitter.com/) and create an account to get a set of keys and tokens for access to the API.
* Create a file in the main app folder called `set-keys.bash`
* Put the keys and tokens in `set-keys.bash` in the following format:
```bash
export TWITTER_CONSUMER_KEY='XXX'
export TWITTER_CONSUMER_SECRET='XXX'
export TWITTER_ACCESS_TOKEN='XXX'
export TWITTER_ACCESS_TOKEN_SECRET='XXX'
```
* Run `. set-keys.bash` in the Command Line to set the source for the Twitter API keys
* Start server in the command line
 `npm start`
* Go to (http://localhost:3000/) in your browser
* Start searching for Tweets!

## Technologies
* [Twitter API](https://apps.twitter.com/) - Twitter Streaming API
* [Express](http://expressjs.com/) - A web framework from Node.js
* [EJS](http://www.embeddedjs.com/) - JavaScript Templating
* [Twit](https://github.com/ttezel/twit) - Make calls to the Twitter Streaming API
* [Socket.io](http://socket.io/) - Event-driven bi-directional communication between Node/Express server and the browser.
* [Twitter Bootstrap](http://getbootstrap.com/) - CSS Library
* [Seiyria Bootstrap Slider](https://github.com/seiyria/bootstrap-slider) - Slider for maximum number of Tweets displayed on the page
* Middleware - BodyParser

## Planning
* [Trello/User Stories](https://trello.com/b/eihaYAa6/twitter-app)
* [Wireframe](https://github.com/lhochsz/twitterfeed/blob/master/public/images/wireframe.JPG)

## Future Developments
* Adding routes for the ability to keep a list of favorite search terms
* Showing time in user's timezone instead of UTC timezone
* Fully tested using Chai and Supertest
