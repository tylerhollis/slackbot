// module.exports = function(robot) {
// 	robot.respond(/Will you help me with my music career?/, function(res) {
//     return res.send(/"First you have to purify yourself in the waters of Lake Minnetonka."/);  
// 	});
// };

module.exports = function(robot) {
  return robot.hear(/Call/i, function(res) {
    return res.send("Response");
  });
};
