const fs = require('fs');

// Read and parse JSON files
const file1Data = fs.readFileSync('file1.json', 'utf-8');
const file2Data = fs.readFileSync('file2.json', 'utf-8');

const file1Json = JSON.parse(file1Data);
const file2Json = JSON.parse(file2Data);

// Iterate through the objects and copy imageUrl if names match
for (let i = 0; i < file1Json.season_players.length; i++) {
  const nameToMatch = file1Json.season_players[i].name;
  const matchingObject = file2Json.season_players.find(obj => obj.name === nameToMatch);
  if (matchingObject) {
    matchingObject.player.imageUrl = file1Json.season_players[i].player.imageUrl;
   
  }
}
// file2Json.season_players.map((p)=> console.log(p.player))
// Write the updated JSON data back to file2
fs.writeFileSync('file2.json', JSON.stringify(file2Json, null, 2), 'utf-8');

