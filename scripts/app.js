// Ask bot "Will you help me with my music career?" and get a response from Prince.
// Ask bot who is cooler and get randomized response.

module.exports = function(robot) {
  return robot.hear(/Will you help me with my music career?/i, function(res) {
    return res.send("First you have to purify yourself in the waters of Lake Minnetonka.");
  });
var choosen_response;

choosen_response = msg.random([1, 2, 3, 4, 5]);

if (choosen_response >= 3) {
  msg.send(msg.random(uhh_what));
} else {
  msg.send("Clearly " + msg.match[choosen_response + 2] + " is " + msg.match[2]);
}
};

// return msg.send("Clearly " + msg.match[botAnswers + 2] + " is " + msg.match[2]);