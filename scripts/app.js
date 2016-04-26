// Ask bot "Will you help me with my music career?" and get a response from Prince.
// Ask bot who is cooler and get randomized response.

module.exports = function(robot) {
  return robot.hear(/Will you help me with my music career?/i, function(res) {
    return res.send("First you have to purify yourself in the waters of Lake Minnetonka.");
  });

  return robot.hear(/Who is (better|worse)\?* (.*) or (.*?)\??$/i, function(msg) {
    var botAnswers;
    botAnswers = msg.random([1, 2, 3, 4, 5]);
    if (botAnswers >= 3) {
      return msg.send(msg.random(uhh_what));
    } else {
      return msg.send("Clearly " + msg.match[botAnswers + 2] + " is " + msg.match[2]);
    }
  });
};
