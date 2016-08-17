var fs = require("fs");

time = 0
filename = "./time.txt"

if (fs.existsSync(filename)) {
	time = fs.readFileSync(filename)/1;
}

setInterval(function(){
	time += 1000;
	fs.writeFileSync(filename, time);
	process.stdout.write('\033c');
	console.log("Hours: " + Math.floor(time/3600/1000))
	console.log("Minutes: " + Math.floor(time/60/1000%60))
	console.log("Seconds: " + Math.floor(time/1000%60))
}, 1000);