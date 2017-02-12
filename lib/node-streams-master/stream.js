
var fs = require('fs'),
    files = fs.readdirSync('./music'),
    clips = [],
    stream,
    currentfile,
    dhh = fs.createWriteStream('./music/test0.mp3');

// create an array with filenames (time)
files.forEach(function (file) {
    clips.push(file.substring(0, 6));  
});

// Sort
clips.sort(function (a, b) {
    return a - b;
});


// recursive function
function main() {

    if (!clips.length) {
        dhh.end("Done");
        return;
    }
    
    currentfile = './music/' + clips.shift() + '.mp3';
    stream = fs.createReadStream(currentfile);
    
    stream.pipe(dhh, {end: false});
    
    stream.on("end", function() {
        console.log(currentfile + ' appended');
        main();        
    });
}


main();
