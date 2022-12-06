const { ActivityType } = require("discord.js")
module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
    setInterval(() => client.user.setActivity({ name: `with a Thingy`, type: ActivityType.Playing }), 22000);
}};
