const fs = require('fs');
const path = require('path');

const globalPlayersPath = path.join(__dirname, 'data', 'global_players.json');
const players = JSON.parse(fs.readFileSync(globalPlayersPath, 'utf-8'));

const missingNumericIds = players.filter(
  (player) => player.dupr && player.dupr.trim() !== '' && player.duprNumericId == null
);

console.log(`Found ${missingNumericIds.length} players with DUPR ID but missing duprNumericId.`);

if (missingNumericIds.length === 0) {
  process.exit(0);
}

const rows = missingNumericIds.map((player) => ({
  firstName: player.firstName,
  lastName: player.lastName,
  dupr: player.dupr,
  duprRating: player.duprRating,
  playerId: player.playerId,
}));

console.table(rows);
