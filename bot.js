/**
 * 
 */
var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', 
		function (user, userID, channelID, message, evt) {
		    // Our bot needs to know if it will execute a command
		    // It will listen for messages that will start with `!`
		    if (message.substring(0, 1) == '!') {
		        var args = message.substring(1).split(' '); // Converts the string 'message' into an array object where each word is an item in the array
		        var cmdPrefix = args[0];
		        var cmdCategory = args[1];
		        var cmdOperation = args[2];
		        var cmdValue = args[3];
		        
		        //args = args.splice(1);
		        if (cmdPrefix == "tc") {
		        	switch(cmdCategory) {
			            case "help":
			                bot.sendMessage({
			                    to: channelID,
			                    message: 	'Valid categories include:\n' +
			                    			'!tc add\n' +
			                    			'!tc configure\n' +
			                    			'!tc create\n' +
			                    			'!tc display\n' +
			                    			'!tc edit\n' +
			                    			'!tc permissions\n' +
			                    			'!tc record\n' +
			                    			'!tc register\n' +
			                    			'!tc remove'
			                });
			                break;
			            
			            case "add":
			            	bot.sendMessage({
			            		to: channelID,
			            		message: 'Congratulations, you can spell ' + cmdCategory + '.  If this is not what you were trying to spell, be sure to leave a very embarrassing bug report for the developer in the appropriate channel.'
			            	});
			            	break;
			            	
			            case "configure":
			            	bot.sendMessage({
			            		to: channelID,
			            		message: 'Congratulations, you can spell ' + cmdCategory + '.  If this is not what you were trying to spell, be sure to leave a very embarrassing bug report for the developer in the appropriate channel.'
			            	});
			            	break;
			            	
			            case "create":
			            	bot.sendMessage({
			            		to: channelID,
			            		message: 'Congratulations, you can spell ' + cmdCategory + '.  If this is not what you were trying to spell, be sure to leave a very embarrassing bug report for the developer in the appropriate channel.'
			            	});
			            	break;
			            
			            case "display":
			            	bot.sendMessage({
			            		to: channelID,
			            		message: 'Congratulations, you can spell ' + cmdCategory + '.  If this is not what you were trying to spell, be sure to leave a very embarrassing bug report for the developer in the appropriate channel.'
			            	});
			            	break;
			            	
			            case "edit":
			            	bot.sendMessage({
			            		to: channelID,
			            		message: 'Congratulations, you can spell ' + cmdCategory + '.  If this is not what you were trying to spell, be sure to leave a very embarrassing bug report for the developer in the appropriate channel.'
			            	});
			            	break;
			            	
			            case "permissions":
			            	bot.sendMessage({
			            		to: channelID,
			            		message: 'Congratulations, you can spell ' + cmdCategory + '.  If this is not what you were trying to spell, be sure to leave a very embarrassing bug report for the developer in the appropriate channel.'
			            	});
			            	break;
			            	
			            case "record":
			            	bot.sendMessage({
			            		to: channelID,
			            		message: 'Congratulations, you can spell ' + cmdCategory + '.  If this is not what you were trying to spell, be sure to leave a very embarrassing bug report for the developer in the appropriate channel.'
			            	});
			            	break;
			            	
			            case "register":
			            	bot.sendMessage({
			            		to: channelID,
			            		message: 'Congratulations, you can spell ' + cmdCategory + '.  If this is not what you were trying to spell, be sure to leave a very embarrassing bug report for the developer in the appropriate channel.'
			            	});
			            	break;
			            	
			            case "remove":
			            	bot.sendMessage({
			            		to: channelID,
			            		message: 'Congratulations, you can spell ' + cmdCategory + '.  If this is not what you were trying to spell, be sure to leave a very embarrassing bug report for the developer in the appropriate channel.'
			            	});
			            	break;
			            	
			            default:
			            	bot.sendMessage({
			            		to: channelID,
			            		message: 'Not a valid category; for a list of valid command categories, type `!tc help`'
			            	})
			            

		        	}
		        }
		        else {
		        	bot.sendMessage({
		        		to: channelID,
		        		message: 'Not a valid command;  All commmands must start with "!tc";  For help, type `!tc help`'
		        	});
		        }
		        
		     }
		}
);