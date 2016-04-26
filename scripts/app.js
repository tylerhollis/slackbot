// Ask bot "Will you help me with my music career?" and get a response from Prince.

module.exports = function(robot) {
  return robot.hear(/Will you help me with my music career?/i, function(res) {
    return res.send("First you have to purify yourself in the waters of Lake Minnetonka.");
  });
  return bot.hear(/Hi Hubot! My name is (.*)/i, function(msg) {
  		var name;
  		name = msg.match[0];
  		if (name == "Hubot") ){
  			return msg.send("You're not Hubot--I'm Hubot!");    
  		} else {
			return msg.reply("Nice to meet you, " + name + "!");
		}
	});
};
