## Live Link
View the live app here: https://tweet-stream-ldh.herokuapp.com/

## About
TweetStream is a live streaming app for Twitter.  Users search by a keyword or hashtag for the latest tweets that match the search parameter.  It's a great way to see what people all over the world are talking about on a topic that interests the user.

The app makes use of web sockets from Socket.io to constantly push new Tweets into the browser.  It runs on an Express server and accesses the Twitter Streaming API, which returns JSON data.  The user does not need to be logged into Twitter to use the app.

## Quickstart
**In Terminal**
* Clone the repository
 `git clone https://github.com/lhochsz/twitterfeed`
* Move into the folder
`cd twitterfeed`
* Install Node packages
 `npm init`
* Start server
 `npm start`
* Go to (http://localhost:3000/) in your browser
* Start searching for Tweets!

## Technologies
* [Twitter API](https://apps.twitter.com/) - Twitter Streaming API
* [Express](http://expressjs.com/) - A web framework from Node.js
* [EJS](http://www.embeddedjs.com/) - JavaScript Templating
* [Twit](https://github.com/ttezel/twit) - Make calls to the Twitter Streaming API
* [Socket.io](http://socket.io/) - Event-driven bi-directional communication between Node/Express server and the browser.
* Middleware - BodyParser

## Planning
* [Trello/User Stories](https://trello.com/b/eihaYAa6/twitter-app)
* [Wireframe](https://github.com/lhochsz/twitterfeed/blob/master/public/images/wireframe.JPG)

## Future Developments
* Adding routes for the ability to keep a list of favorite search terms
* Showing time in user's timezone instead of UTC timezone
