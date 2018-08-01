//DEFINE ARGS
var portm=19131;
//S
try{
var WebSocketServer = require("ws").Server;
var fs=require("fs");
var wss = new WebSocketServer({port: portm});
}catch(err){
	console.log("Error when loading require packages: %s.",err.message);
	process.exit(1);
}

console.log('MyAgentR by LNSSPsd');
console.log("Version: v1.1");
console.log("Please Connect Client to 127.0.0.1:%s.",portm);

var see=true;

function gamecmd(cmd,ws){
	ws.send(JSON.stringify(
	{
		"body": {
			"origin": {
				"type": "player"
			},
			"commandLine": cmd,
			"version": 1
		},
		"header": {
			"requestId": "0ffae098-00ff-ffff-abbbbbdf3f44",
			"messagePurpose": "commandRequest",
			"version": 1,
			"messageType": "commandRequest"
		}
	}
	));
}

function gamecmds(cmd,ws){
	ws.send(JSON.stringify(
	{
		"body": {
			"origin": {
				"type": "player"
			},
			"commandLine": cmd,
			"version": 1
		},
		"header": {
			"requestId": "00000000-0001-0000-000000000000",
			"messagePurpose": "commandRequest",
			"version": 1,
			"messageType": "commandRequest"
		}
	}
	));
}

function serverinf(msg,ws){
	if(see==true){
		//console.log("[Server] %s",msg);
		gamecmds("me "+msg,ws);
	}else{
		gamecmds("msg @s |\n"+msg,ws);
	}
}

wss.on('connection', function connection(ws){
	//var logtogame=true;
	
	console.log('Client Connected!');
	//console.log('Listening Events...');
	
	ws.send(JSON.stringify(
	{
		"body": {
			"eventName": "WorldUnloaded"
		},
		"header": {
			"requestId": "233ae098-00ff-ffff-abbbbbbbbbdd3344",
			"messagePurpose": "subscribe",
			"version": 1,
			"messageType": "commandRequest"
		}
	}
	));
	ws.send(JSON.stringify(
	{
		"body": {
			"eventName": "BlockBroken"
		},
		"header": {
			"requestId": "fffdb098-00ff-ffff-abbbbbbbbbdd3344",
			"messagePurpose": "subscribe",
			"version": 1,
			"messageType": "commandRequest"
		}
	}
	));
	ws.send(JSON.stringify(
	{
		"body": {
			"eventName": "BlockPlaced"
		},
		"header": {
			"requestId": "aaaae098-00ff-ffff-abbbbbbbbbdd3344",
			"messagePurpose": "subscribe",
			"version": 1,
			"messageType": "commandRequest"
		}
	}
	));
	ws.send(JSON.stringify(
	{
		"body": {
			"eventName": "BoardTextUpdated"
		},
		"header": {
			"requestId": "0ffa0000-00ff-ffff-abbbbbbbbbdd3344",
			"messagePurpose": "subscribe",
			"version": 1,
			"messageType": "commandRequest"
		}
	}
	));
	ws.send(JSON.stringify(
	{
		"body": {
			"eventName": "AgentCreated"
		},
		"header": {
			"requestId": "0ddbe098-00ff-ffff-abbbbbbbbbdd3344",
			"messagePurpose": "subscribe",
			"version": 1,
			"messageType": "commandRequest"
		}
	}
	));
	ws.send(JSON.stringify(
	{
		"body": {
			"eventName": "AgentCommand"
		},
		"header": {
			"requestId": "0ffae090-00ff-ffff-abbbbbbbbbdd3344",
			"messagePurpose": "subscribe",
			"version": 1,
			"messageType": "commandRequest"
		}
	}
	));
	ws.send(JSON.stringify(
	{
		"body": {
			"eventName": "BossKilled"
		},
		"header": {
			"requestId": "0ffae009-00ff-ffff-abbbbbbbbbdd3344",
			"messagePurpose": "subscribe",
			"version": 1,
			"messageType": "commandRequest"
		}
	}
	));
	ws.send(JSON.stringify(
	{
		"body": {
			"eventName": "ItemCrafted"
		},
		"header": {
			"requestId": "affae098-00ff-ffff-abbbbbbbbbdd3344",
			"messagePurpose": "subscribe",
			"version": 1,
			"messageType": "commandRequest"
		}
	}
	));
	ws.send(JSON.stringify(
	{
		"body": {
			"eventName": "ItemDestroyed"
		},
		"header": {
			"requestId": "effae098-00ff-ffff-abbbbbbbbbdd3344",
			"messagePurpose": "subscribe",
			"version": 1,
			"messageType": "commandRequest"
		}
	}
	));
	ws.send(JSON.stringify(
	{
		"body": {
			"eventName": "ItemUsed"
		},
		"header": {
			"requestId": "0f334098-00ff-ffff-abbbbbbbbbdd3344",
			"messagePurpose": "subscribe",
			"version": 1,
			"messageType": "commandRequest"
		}
	}
	));
	ws.send(JSON.stringify(
	{
		"body": {
			"eventName": "MobKilled"
		},
		"header": {
			"requestId": "0ffae098-00ee-ffff-abbbbbbbbbdd3344",
			"messagePurpose": "subscribe",
			"version": 1,
			"messageType": "commandRequest"
		}
	}
	));
	ws.send(JSON.stringify(
	{
		"body": {
			"eventName": "PlayerDied"
		},
		"header": {
			"requestId": "0ffae098-00ff-f333-abbbbbbbbbdd3344",
			"messagePurpose": "subscribe",
			"version": 1,
			"messageType": "commandRequest"
		}
	}
	));
	ws.send(JSON.stringify(
	{
		"body": {
			"eventName": "PlayerJoin"
		},
		"header": {
			"requestId": "0ffae098-00ff-ffff-abbb09bbbbdd3344",
			"messagePurpose": "subscribe",
			"version": 1,
			"messageType": "commandRequest"
		}
	}
	));
	ws.send(JSON.stringify(
	{
		"body": {
			"eventName": "PlayerLeave"
		},
		"header": {
			"requestId": "0ffae098-00ff-ffff-aabbbbbbbbdd3344",
			"messagePurpose": "subscribe",
			"version": 1,
			"messageType": "commandRequest"
		}
	}
	));
	ws.send(JSON.stringify(
	{
		"body": {
			"eventName": "PlayerTeleported"
		},
		"header": {
			"requestId": "0ffae098-00ff-ffff-abbbbcccbbdd3344",
			"messagePurpose": "subscribe",
			"version": 1,
			"messageType": "commandRequest"
		}
	}
	));
	ws.send(JSON.stringify(
	{
		"body": {
			"eventName": "PortalBuilt"
		},
		"header": {
			"requestId": "0ffae098-00ff-ffff-abbbbbdddbdd3344",
			"messagePurpose": "subscribe",
			"version": 1,
			"messageType": "commandRequest"
		}
	}
	));
	ws.send(JSON.stringify(
	{
		"body": {
			"eventName": "PortalUsed"
		},
		"header": {
			"requestId": "0ffae098-00ff-ffff-abbbbbbbbbdf3344",
			"messagePurpose": "subscribe",
			"version": 1,
			"messageType": "commandRequest"
		}
	}
	));
	ws.send(JSON.stringify(
	{
		"body": {
			"eventName": "PlayerMessage"
		},
		"header": {
			"requestId": "0ffae098-00ff-ffff-abbbbbbbbbdf3344",
			"messagePurpose": "subscribe",
			"version": 1,
			"messageType": "commandRequest"
		}
	}
	));
	serverinf("MyAgent Connected.\nPlease use */check <Your Key> to login.\nIf you not checked,Websocket will disconnect in 12s.\n[MyAgent By LNSSPsd]",ws);
	/*gamecmd("agent create",ws);// /connect 127.0.0.1:19131
	gamecmd("agent till forward",ws);*/
	var checked=false;
	setTimeout(function(){
		if(checked==false){serverinf("Websocket check Timed out.\nDisconnecting...",ws);}
	},21000);
	setTimeout(function(){
		if(checked==false){ws.terminate();}
	},22000);
	
	ws.on('message',function incoming(message){
		//ws.terminate();
		console.log('received: %s',message);
		if(JSON.parse(message).body.eventName=="PlayerMessage"){
		if(JSON.parse(message).body.properties.MessageType=="me" || JSON.parse(message).body.properties.MessageType=="say"){
			return;
		}
		}
		if(checked==false){
			if(JSON.parse(message).body.eventName=="PlayerMessage"){
				if(JSON.parse(message).body.properties.Message.substring(0,8)=="*/check "){
					var keys=(fs.readFileSync("keys.txt","ascii")+" ").split(" ");
					for(var i=0;i<=keys.length;i++){
						if(JSON.parse(message).body.properties.Message.split(" ")[1]==keys[i]){
							serverinf("Key is OK!\nType */help to get help!\nEnjoy It!:)",ws);
							checked=true;
							return;
						}
					}
					serverinf("Bad Key.\nPlease Check it!",ws);
				}
			}
			return;
		}
		if(JSON.parse(message).header.messagePurpose=="commandResponse" && JSON.parse(message).header.requestId!="00000000-0001-0000-000000000000")
		{
			serverinf("Command Response:\nMessage:"+JSON.parse(message).body.statusMessage,ws);
		}
		if(JSON.parse(message).body.eventName=="AgentCommand" && JSON.parse(message).header.requestId!="00000000-0000-0001-000000000000")
		{
			serverinf("Agent Command:\nResult:"+JSON.parse(message).body.properties.Result,ws);
		}
		if(JSON.parse(message).body.eventName=="PlayerMessage"/* && JSON.parse(message).body.properties.MessageType=="chat"*/ && JSON.parse(message).header.requestId!="00000000-0001-0000-000000000000")
		{
			if(JSON.parse(message).body.properties.Message.substring(0,2)=="./")
			{
				gamecmd(JSON.parse(message).body.properties.Message.split("/")[1],ws);
			}
			if(JSON.parse(message).body.properties.Message.substring(1,2)=="/"&&JSON.parse(message).body.properties.Message.substring(0,1)==":"&&JSON.parse(message).body.properties.Message.substring(0,1)!=".")
			{
				try{
				var sped=JSON.parse(message).body.properties.Message.split("/");
				var spee=sped.split("~");
				var qs=parseInt(spee[1]);
				var ed=1;
				while(true){
					if(qs==ed){break;}
					setTimeout(function(){gamecmd("agent "+spee[0],ws);},500*ed);
					ed++;
				}
				}catch(ew){
					serverinf("Error when doing loop");
					return;
				}
				return;
			}
			if(JSON.parse(message).body.properties.Message.substring(2,3)=="/"&&JSON.parse(message).body.properties.Message.substring(0,1)=="!")
			{
				var sped=JSON.parse(message).body.properties.Message.split("!")[1].split("/");
				var qs=parseInt(sped[0]);
				var ed=0;
				while(true){
					if(qs==ed){break;}
					setTimeout(function(){gamecmd(sped[1],ws);},500*ed);
					ed++;
				}
			}
			if(JSON.parse(message).body.properties.Message.substring(0,2)=="*/")
			{
				if(JSON.parse(message).body.properties.Message=="*/bye")
			{
				serverinf("Disconnecting..\nGoodBye!",ws);
				ws.terminate();
				return;
			}
				//var splcmd=JSON.parse(message).body.properties.Message.split(" ");
				//switch(splcmd[0]){
				//	case "*/move":
				//	if(splcmd[1]!="forward" && splcmd[1]!="back" && splcmd[1]!="up" && splcmd[1]!="down" && splcmd[1]!="left" && splcmd[1]!="right")
				//	{
				//		serverinf("Invalid!!",ws);
				//		break;
				//	}
				//	gamecmd("agent move "+splcmd[1],ws);
				//	break;
				//	case "*/turn":
				//	if(splcmd[1]!="left" && splcmd[1]!="right")
				//	{
				//		serverinf("Invalid!!!",ws);
				//		break;
				//	}
				//	gamecmd("agent turn "+splcmd[1],ws);
				//	break;
				//	case "*/attack":
				//	if(splcmd[1]!="forward" && splcmd[1]!="back" && splcmd[1]!="up" && splcmd[1]!="down" && splcmd[1]!="left" && splcmd[1]!="right")
				//	{
				//		serverinf("Invalid!!",ws);
				//		break;
				//	}
				//gamecmd("agent attack "+splcmd[1],ws);
				//	break;
				//	case "*/destroy":
				//	if(splcmd[1]!="forward" && splcmd[1]!="back" && splcmd[1]!="up" && splcmd[1]!="down" && splcmd[1]!="left" && splcmd[1]!="right")
				//	{
				//		serverinf("Invalid!!",ws);
				//		break;
				//	}
				//	gamecmd("agent destroy "+splcmd[1],ws);
				//	break;
				//}
				switch(JSON.parse(message).body.properties.Message)
				{
					case "*/help":
					serverinf("MyAgent v1 by LNSSPsd\n*/create: Create Agent.\n\
*/move <direction>:move to selected direction.\n\
(Direction: forward|back|up|down|left|right)\n\
(turnDirection: left|right)\n\
(quantity: 0-255)\n\
*/turn <turnDirection>:turn left or right.\n\
*/attack <direction>:attack target in <direction>.\n\
*/destroy <direction>:destroy block in <direction>.\n\
*/drop <slot:int> <quantity:int> <direction>:drop item in <slot:quantity> to <direction>.\n",ws);
serverinf("*/dropall <direction>:drop all item from agent's bag to <direction>.\n\
*/inspect <direction>:inspect what block in front.\n\
*/inspectdata <direction>:inspect block data in front.\n\
*/detect <direction>:Unknown because Result is 'false'?\n\
*/detectredstone <direction>:Detect redstone activated in <direction>?\n",ws);
serverinf("*/transfer <srcSlotNum:int> <quantity:int> <dstSlotNum:int>:transfer <quntity> <src> to <dst>\n\
*/tp:tp agent to player.\n\
*/collect <item:string>:collect <item>.\n\
*/till <direction>:till for <direction>.\n\
*/place <slotNum:int> <direction>:Put <slotNum>'s block to <direction>.\n\
*/getitemcount|getitemspace|getitemdetail <slotNum:item>",ws);
serverinf("*/check <key>:check your key\n\
*/bye:Disconnect Websocket.\n\
*/cmdc: Run cmdc.txt(Command collection)",ws);

					break;
					case "*/cmdc":
						try{
						var cmdc=(fs.readFileSync("cmdc.txt","ascii")+"$").split("$");
						for(var cc=0;cc<=cmdc.length;cc++){
							setTimeout(function(){gamecmds(cmdc[cc],ws);},500*cc);
						}
						setTimeout(function(){serverinf("Commands Collection Done.",ws);},500*cmdc.length);
						}catch(err){
							serverinf("Error when doing command collections: "+err.message,ws);
						}
						break;
					default:
					gamecmd("agent "+JSON.parse(message).body.properties.Message.split("/")[1],ws);
					//serverinf("Unknown command.",ws);
				}
			}
			console.log("<%s> %s",JSON.parse(message).body.properties.Sender,JSON.parse(message).body.properties.Message);
		}
	});
});
