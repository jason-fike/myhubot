// Description:
// My slackbot is meant to provide slack users with quick links to the MDN glossary for terms they have questions about while coding.
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//  hubot glossary term (only working up to 2 words) - @user this might be helpful: link to MDN glossary page
//  hubot hi/hello/hey - @user hello, how can I help you?
//  hubot thanks/thank you - @user you're welcome. Keep up the good work!
//
// Notes:
// I'm having trouble getting this to handle both terms that are one word long and three words long
// I was hoping to add in some error handling that would make the slack bot only respond if a user's prompt was three words of less (longest word in MDN glossary is 3 words)
// What would have been even better is if I could only respond if the resulting MDN link was a valid site. I would need to be able to get the 404 response back into the code at run time.
//
// Author:
// jason-fike
//

module.exports = function(robot) {
    robot.respond(/(.*) (.*)/i, function(msg) {
      var term;
      term = msg.match[1] + "_" + msg.match[2];
      if (msg.match[2] === "thanks" || term === "thank_you") {
        return msg.reply("you're welcome. Keep up the good work!");
      } else if (msg.match[2] === "hi" || msg.match[2] === "hello" || msg.match[2] === "hey") {
        return msg.reply("hello, how can I help you?");
      } else if (msg.match[1] === "") {
        return msg.reply("this might be helpful: https://developer.mozilla.org/en-US/docs/Glossary/" + msg.match[2]);
      } else {
        return msg.reply("this might be helpful: https://developer.mozilla.org/en-US/docs/Glossary/" + msg.match[1] + "_" + msg.match[2]);
      }
    });
}

/*
    robot.respond(/(.*) (.*) (.*)/i, function(msg) {
      if (msg.match[2] === "thanks") {
        return msg.reply("you're welcome. Keep up the good work!");
      } else if (msg.match[1] === "" && msg.match[2] === "") {
        return msg.reply("this might be helpful: https://developer.mozilla.org/en-US/docs/Glossary/" + msg.match[3]);
      } else if (msg.match[1] === "") {
        return msg.reply("this might be helpful: https://developer.mozilla.org/en-US/docs/Glossary/" + msg.match[2] + "_" + msg.match[3]);
      } else {
        return msg.reply("this might be helpful: https://developer.mozilla.org/en-US/docs/Glossary/" + msg.match[1] + "_" + msg.match[2] + "_" + msg.match[3]);
      } 

    //  Example
    robot.hear(/javascript/i, function(msg) {
      return msg.send("I love coding!");
    });
*/

/************************************

EXAMPLES OF THE KEY HUBOT FUNCTIONS

************************************/


/* IMPORTANT! 
You can have only one instance of module.exports in each JavaScript file. 
If you want to supplement your existing code above with any the code below, 
you need to move the contents of module.exports below into the module.exports code above. 
*/

/*
var squirrels;
squirrels = ["http://img.skitch.com/20100714-d6q52xajfh4cimxr3888yb77ru.jpg", "https://img.skitch.com/20111026-r2wsngtu4jftwxmsytdke6arwd.png", "http://cl.ly/1i0s1r3t2s2G3P1N3t3M/Screen_Shot_2011-10-27_at_9.36.45_AM.png", "http://shipitsquirrel.github.com/images/squirrel.png"];

module.exports = function(robot) {
  // Basic example of respond / send. If the user enters hi or hello the bot responds "Howdy!" 
  return robot.respond(/hi|hello/i, function(msg) {
    return msg.send("Howdy!");
  });

  // Random Example
  //If a user enters 'ship it' we return a random squirrel, which is popular for symbolizing shipping something with engineers
  return robot.hear(/ship it/i, function(msg) {
    return msg.send(msg.random(squirrels));
  });
};
*/