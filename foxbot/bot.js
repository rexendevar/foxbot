const { Client, Attachment } = require('discord.js');
const fs = require('fs');
const rimraf = require('rimraf');
const rif = require('replace-in-file');
var cfig = require('./package.json')
var logger = require('winston');
var auth = require('./auth.json');
const zipFolder = require('zip-a-folder');
var client = new Client();
const dir = ("./current\\")
var options = {
  files: [null],
  from: 'cdn.discordapp.com',
  to: 'media.discordapp.net',
};
function zipcurrent(callback) {
        zipFolder.zipFolder('./current', './current.zip', function(err) {
			console.log('zippedwi')
			var a = ('test')
			callback(a)
            if(err) {
                console.log('Something went wrong!', err);
            }
        });
}
function dealwith(received) {
	var culprit = received.author.tag
	var channelID = received.channel
	if (!fs.existsSync(`./current/${channelID.id}.txt`)){
		fs.writeFileSync((dir + channelID.id +'.txt'), (`\r\n // ${received.content} messaged by ${received.author.tag} at ${received.createdTimestamp} (${received.id})`), (err, test) => {
			console.log('idek');
			options.files.append(dir + channelID.id +'.txt')
		})
	}
	var uzchannel = received.guild.channels.find(ch => ch.name === cfig.zchannel);
	if (received.author == client.user) {
        return
    }
	if (channelID.id != uzchannel.id){
		try {
			fs.readFile((dir + channelID.id +'.txt'), (err, data) => {
			  contents = (data);
		    }) 
		} catch(e) {
			console.log("actual error")
        }
		fs.appendFile((dir + channelID.id +'.txt'), (`\r\n // ${received.content} messaged by ${received.author.tag} at ${received.createdTimestamp} (${received.id})`), (err) => {
			console.log("write success");
		})
	} 
	if (received.attachments.size > 0){
		var attach = (received.attachments).array();
		attach.forEach(function(attachment) {
			var file = (attachment.proxyURL);
			fs.appendFile((dir + channelID.id +'.txt'), (`\r\n // ${file} messaged by ${received.author.tag} at time ${received.createdTimestamp} (${received.id})`), (err) => {
				console.log("img write success");
			})
		}) 
	}
	let allowedRole = received.guild.roles.find(r => r.name === cfig.modrole);
	if (received.member._roles.includes(allowedRole.id)) {
		if (received.content === (cfig.prefix + 'bsod')){
			received.channel.send('ono')
				.then(sent => {
					console.log('purposely bluescreened, as requested by ' + culprit)
					client.destroy()
				})
		}
		if (received.content === (cfig.prefix + 'archive')){
			console.log('initialized')
			rif(options, (error, changedFiles) => {
				if (error) {
					return console.error('Error occurred:', error);
				}
					console.log('Modified files:', changedFiles.join(', '));
					zipcurrent(function(a){
						console.log(a)
						var attachment = new Attachment("./current.zip");
						uzchannel.send(attachment)
						console.log('sent')
						rimraf('./current/*', function () { console.log('done'); });
					})
				});
		};
	};
}
var contents = "";
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('everything you tell me', { type: 'LISTENING' })
});
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
contents = "start of log";
client.on('message', (message) => {
	dealwith(message)
});
client.login(auth.token);