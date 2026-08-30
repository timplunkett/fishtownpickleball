(function () {
  const DATA = {
 "players": [
  {
   "name": "Anuraag Verma",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 14,
   "losses": 0,
   "pointsWon": 294,
   "totalPointsAgainst": 180,
   "mixedWins": 6,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 114,
   "ppg": 21,
   "leagueRank": 8,
   "rating": 4,
   "ratingGames": 14,
   "confidence": 68,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -1.1,
   "playerId": "c6b0c203-9659-494f-993b-dadd300ed3e8"
  },
  {
   "name": "Anne Buckley",
   "gender": "Female",
   "team": "Pickleball Palace Black",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 8,
   "losses": 0,
   "pointsWon": 168,
   "totalPointsAgainst": 91,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 77,
   "ppg": 21,
   "leagueRank": 7,
   "rating": 4.1,
   "ratingGames": 8,
   "confidence": 55,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -1.2,
   "playerId": "07881006-c083-4729-8424-410aeee08940"
  },
  {
   "name": "John Danks",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 7,
   "losses": 0,
   "pointsWon": 147,
   "totalPointsAgainst": 87,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 60,
   "ppg": 21,
   "leagueRank": 17,
   "rating": 3.2,
   "ratingGames": 7,
   "confidence": 51,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -1.4,
   "playerId": "f2e5778f-44c1-46ed-b27d-f3728fa84378"
  },
  {
   "name": "Guillermo Wong",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton Strikers",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 68,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 58,
   "ppg": 21,
   "leagueRank": 5,
   "rating": 4.4,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.8,
   "playerId": "85be9d97-bc90-4108-8d5d-dea6a31ef6f3"
  },
  {
   "name": "Jill Honicker",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 68,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "4d244e17-5296-404e-b826-a70de60cfb14",
   "winPct": 100,
   "diff": 58,
   "ppg": 21,
   "leagueRank": 3,
   "rating": 4.4,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.9
  },
  {
   "name": "Nicole Tarallo",
   "gender": "Female",
   "team": "Life Time Red Bank",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 77,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 49,
   "ppg": 21,
   "leagueRank": 4,
   "rating": 19.3,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": 13.4,
   "strengthOfOpponents": 18.7,
   "playerId": "d16138ba-5e8f-4f9e-9464-478ba4320c11"
  },
  {
   "name": "Jake Denooyer",
   "gender": "Male",
   "team": "Pickleball Palace Black",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 7,
   "losses": 0,
   "pointsWon": 147,
   "totalPointsAgainst": 100,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 47,
   "ppg": 21,
   "leagueRank": 16,
   "rating": 2.5,
   "ratingGames": 7,
   "confidence": 49,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -1.1,
   "playerId": "a314079a-16b7-42f5-be34-41e1672f7377"
  },
  {
   "name": "John Gardler",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton Strikers",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 80,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 46,
   "ppg": 21,
   "leagueRank": 14,
   "rating": 2,
   "ratingGames": 6,
   "confidence": 46,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -1.8,
   "playerId": "3c87532d-0a54-4e25-a210-3eb7a771a346"
  },
  {
   "name": "Tony Sethi",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton Strikers",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 81,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 45,
   "ppg": 21,
   "leagueRank": 13,
   "rating": 1.6,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -1.9,
   "playerId": "d75fb048-848d-41de-ae51-df5a0454b327"
  },
  {
   "name": "Ward Greer",
   "gender": "Male",
   "team": "Pickleball Palace Black",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 85,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 41,
   "ppg": 21,
   "leagueRank": 15,
   "rating": 2.1,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -1.2,
   "playerId": "f0bbb8a7-1a68-4c7f-9450-3eae9249535b"
  },
  {
   "name": "Crista Renauro",
   "gender": "Female",
   "team": "Forward",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 7,
   "losses": 0,
   "pointsWon": 147,
   "totalPointsAgainst": 108,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 39,
   "ppg": 21,
   "leagueRank": 18,
   "rating": 1.6,
   "ratingGames": 7,
   "confidence": 55,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -0.8,
   "playerId": "21785bf3-2af4-4120-a15c-d7824a55b711"
  },
  {
   "name": "Jeffrey Lindstrom",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 89,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 37,
   "ppg": 21,
   "leagueRank": 19,
   "rating": 1.8,
   "ratingGames": 6,
   "confidence": 46,
   "strengthOfPartners": 2.4,
   "strengthOfOpponents": -0.4,
   "playerId": "4911178f-bf5a-41f2-b2a9-5a86b0adca69"
  },
  {
   "name": "Steven Heller",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 90,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 36,
   "ppg": 21,
   "leagueRank": 9,
   "rating": 3.1,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.1,
   "playerId": "344856f5-8559-411b-8fe7-2b5405bb9db6"
  },
  {
   "name": "Jessica Ren",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 5,
   "losses": 0,
   "pointsWon": 105,
   "totalPointsAgainst": 69,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 36,
   "ppg": 21,
   "leagueRank": 11,
   "rating": 1.7,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -1.5,
   "playerId": "5fc95fcb-4ed3-47b9-be7e-0ce9498dc977"
  },
  {
   "name": "Lenn Yeger",
   "gender": "Male",
   "team": "PKLD",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 92,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 34,
   "ppg": 21,
   "leagueRank": 6,
   "rating": -10.2,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": -4.9,
   "strengthOfOpponents": -13.7,
   "playerId": "25da358c-64df-44f1-b260-9b5cd85c298e"
  },
  {
   "name": "Darin Gall",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 7,
   "losses": 0,
   "pointsWon": 147,
   "totalPointsAgainst": 113,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 34,
   "ppg": 21,
   "leagueRank": 12,
   "rating": 1.6,
   "ratingGames": 7,
   "confidence": 48,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -1,
   "playerId": "9b286e84-ad6b-4d88-8306-75906ac6dd8c"
  },
  {
   "name": "Caroline Kinlin",
   "gender": "Female",
   "team": "Life Time Red Bank",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 5,
   "wins": 5,
   "losses": 0,
   "pointsWon": 105,
   "totalPointsAgainst": 76,
   "mixedWins": 1,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 29,
   "ppg": 21,
   "leagueRank": 41,
   "rating": 16.6,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": 19,
   "strengthOfOpponents": 21.5,
   "playerId": "d5933ee7-ffb8-4b4a-92cd-1a28579372d6"
  },
  {
   "name": "Yayuan Lien",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton Prime Time",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 99,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 27,
   "ppg": 21,
   "leagueRank": 2,
   "rating": 3.8,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 1,
   "playerId": "f4725f25-ce53-4104-8f94-d558d8c39e84"
  },
  {
   "name": "Rosa Tenan",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton Strikers",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 5,
   "losses": 0,
   "pointsWon": 105,
   "totalPointsAgainst": 83,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 22,
   "ppg": 21,
   "leagueRank": 22,
   "rating": 0.2,
   "ratingGames": 5,
   "confidence": 44,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -1.3,
   "playerId": "f22a22d7-f20d-459b-a7b4-3612b4ff9291"
  },
  {
   "name": "Richard Madonna",
   "gender": "Male",
   "team": "PKLD",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 4,
   "losses": 0,
   "pointsWon": 84,
   "totalPointsAgainst": 63,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 21,
   "ppg": 21,
   "leagueRank": 28,
   "rating": 2.3,
   "ratingGames": 4,
   "confidence": 38,
   "strengthOfPartners": -4.3,
   "strengthOfOpponents": -2.5,
   "playerId": "76eb43a1-44ae-49bb-a3a6-10d93cb100bb"
  },
  {
   "name": "Cathy Orourke",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 105,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 4,
   "clutchLosses": 0,
   "playerId": "d0485529-ede0-4a73-b48c-a0a57803ff25",
   "winPct": 100,
   "diff": 21,
   "ppg": 21,
   "leagueRank": 20,
   "rating": 1.6,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.2
  },
  {
   "name": "Henry Dornemann",
   "gender": "Male",
   "team": "One Love",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 5,
   "losses": 0,
   "pointsWon": 105,
   "totalPointsAgainst": 88,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 17,
   "ppg": 21,
   "leagueRank": 10,
   "rating": 17.4,
   "ratingGames": 5,
   "confidence": 43,
   "strengthOfPartners": -5,
   "strengthOfOpponents": 11.4,
   "playerId": "48c08d33-ec80-4d01-8def-ce9e3ab6eb5a"
  },
  {
   "name": "Dan Callaghan",
   "gender": "Male",
   "team": "Forward",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 14,
   "wins": 13,
   "losses": 1,
   "pointsWon": 292,
   "totalPointsAgainst": 204,
   "mixedWins": 8,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 92.9,
   "diff": 88,
   "ppg": 20.9,
   "leagueRank": 23,
   "rating": 2.4,
   "ratingGames": 14,
   "confidence": 69,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -0.9,
   "playerId": "d1e5126f-1ca9-4bc2-a745-1922b42893ae"
  },
  {
   "name": "Zalene Corey",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 13,
   "losses": 1,
   "pointsWon": 286,
   "totalPointsAgainst": 210,
   "mixedWins": 6,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 92.9,
   "diff": 76,
   "ppg": 20.4,
   "leagueRank": 27,
   "rating": 2.1,
   "ratingGames": 14,
   "confidence": 68,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -1.1,
   "playerId": "e0ffa27a-6b29-48f8-b162-154c995b3d97"
  },
  {
   "name": "George Nouaime",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 11,
   "losses": 1,
   "pointsWon": 240,
   "totalPointsAgainst": 167,
   "mixedWins": 5,
   "mixedLosses": 1,
   "genderWins": 6,
   "genderLosses": 0,
   "clutchWins": 4,
   "clutchLosses": 0,
   "winPct": 91.7,
   "diff": 73,
   "ppg": 20,
   "leagueRank": 29,
   "rating": 2.3,
   "ratingGames": 12,
   "confidence": 66,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -1.2,
   "playerId": "379ba4b1-4102-4424-bdee-300e8e4fa35b"
  },
  {
   "name": "Chris Allander",
   "gender": "Male",
   "team": "Forward",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 161,
   "totalPointsAgainst": 108,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 87.5,
   "diff": 53,
   "ppg": 20.1,
   "leagueRank": 32,
   "rating": 2.3,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": -0.8,
   "playerId": "7d76fb68-9895-40c5-b321-f5d5d64d2b02"
  },
  {
   "name": "Brian Kelly",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton Strikers",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 163,
   "totalPointsAgainst": 117,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 87.5,
   "diff": 46,
   "ppg": 20.4,
   "leagueRank": 33,
   "rating": 1.4,
   "ratingGames": 8,
   "confidence": 53,
   "strengthOfPartners": 2.2,
   "strengthOfOpponents": -0.7,
   "playerId": "68cc5ac4-2840-4816-b36f-9df7aa9c3c90"
  },
  {
   "name": "Theresa Corderi",
   "gender": "Female",
   "team": "Pickleball Palace Black",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 166,
   "totalPointsAgainst": 124,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 87.5,
   "diff": 42,
   "ppg": 20.8,
   "leagueRank": 36,
   "rating": 1.1,
   "ratingGames": 8,
   "confidence": 55,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -1.1,
   "playerId": "5a35b4ac-7b94-48d4-bd8f-d9c327751821"
  },
  {
   "name": "Alex Chang",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 12,
   "losses": 2,
   "pointsWon": 290,
   "totalPointsAgainst": 213,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 6,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 85.7,
   "diff": 77,
   "ppg": 20.7,
   "leagueRank": 26,
   "rating": 3.2,
   "ratingGames": 14,
   "confidence": 70,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.3,
   "playerId": "93c5b40e-d4ff-4fc5-b7fa-de1e6a82110b"
  },
  {
   "name": "Lisa Howdyshell",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 12,
   "losses": 2,
   "pointsWon": 287,
   "totalPointsAgainst": 213,
   "mixedWins": 6,
   "mixedLosses": 1,
   "genderWins": 6,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 85.7,
   "diff": 74,
   "ppg": 20.5,
   "leagueRank": 42,
   "rating": 1.4,
   "ratingGames": 14,
   "confidence": 70,
   "strengthOfPartners": 2.2,
   "strengthOfOpponents": -0.7,
   "playerId": "90e0fbef-1218-4eb3-887f-b9cc31e73163"
  },
  {
   "name": "Matthew Memmo",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 12,
   "losses": 2,
   "pointsWon": 286,
   "totalPointsAgainst": 214,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 6,
   "genderLosses": 0,
   "clutchWins": 4,
   "clutchLosses": 0,
   "winPct": 85.7,
   "diff": 72,
   "ppg": 20.4,
   "leagueRank": 44,
   "rating": 1.4,
   "ratingGames": 14,
   "confidence": 68,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": -0.9,
   "playerId": "6f3b12bf-032c-458d-bd38-5f9dbe04d374"
  },
  {
   "name": "Ying Lin",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 145,
   "totalPointsAgainst": 82,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "b31d49f9-a969-4c47-a7a5-2ae2b7a914df",
   "winPct": 85.7,
   "diff": 63,
   "ppg": 20.7,
   "leagueRank": 24,
   "rating": 2.8,
   "ratingGames": 7,
   "confidence": 49,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -1.8
  },
  {
   "name": "James Azarowicz",
   "gender": "Male",
   "team": "Pickleball Palace Black",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 145,
   "totalPointsAgainst": 102,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 85.7,
   "diff": 43,
   "ppg": 20.7,
   "leagueRank": 37,
   "rating": 1.2,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": -1.3,
   "playerId": "c22c2b8e-2758-4b56-b8e4-6758dc47a61d"
  },
  {
   "name": "Lori Wild",
   "gender": "Female",
   "team": "Forward",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 145,
   "totalPointsAgainst": 110,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 85.7,
   "diff": 35,
   "ppg": 20.7,
   "leagueRank": 35,
   "rating": 1.4,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -1.1,
   "playerId": "b1066a81-7537-4512-939d-5acbf11ef9aa"
  },
  {
   "name": "Craig Mehnert",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 140,
   "totalPointsAgainst": 106,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 85.7,
   "diff": 34,
   "ppg": 20,
   "leagueRank": 21,
   "rating": 4.4,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.8,
   "playerId": "371edee5-b6ce-436c-b3ef-b93807443dd8"
  },
  {
   "name": "Michael Hsieh",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 137,
   "totalPointsAgainst": 105,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 85.7,
   "diff": 32,
   "ppg": 19.6,
   "leagueRank": 30,
   "rating": 3.1,
   "ratingGames": 7,
   "confidence": 54,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.5,
   "playerId": "df366b7b-3468-492e-ae2f-b7ad65d5439e"
  },
  {
   "name": "Michael Barry",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 145,
   "totalPointsAgainst": 117,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 85.7,
   "diff": 28,
   "ppg": 20.7,
   "leagueRank": 38,
   "rating": 1.9,
   "ratingGames": 7,
   "confidence": 50,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0,
   "playerId": "8aa9db46-30ca-4985-93b5-33ad3d7d1963"
  },
  {
   "name": "Louis Sapirman",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 143,
   "totalPointsAgainst": 116,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 85.7,
   "diff": 27,
   "ppg": 20.4,
   "leagueRank": 49,
   "rating": 0.7,
   "ratingGames": 7,
   "confidence": 50,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.9,
   "playerId": "2a05bac5-f8e0-4e68-928e-bb0ac69f1921"
  },
  {
   "name": "Suzanne Garcia",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 141,
   "totalPointsAgainst": 117,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 85.7,
   "diff": 24,
   "ppg": 20.1,
   "leagueRank": 25,
   "rating": 2.5,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.1,
   "playerId": "f3172220-bb2d-4714-892c-5bb3d728239e"
  },
  {
   "name": "Richard Fox",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 142,
   "totalPointsAgainst": 121,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 85.7,
   "diff": 21,
   "ppg": 20.3,
   "leagueRank": 40,
   "rating": 1.9,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.2,
   "playerId": "ef0bc1ce-6709-4172-97a6-8ea5a462bea4"
  },
  {
   "name": "Craig Rathjen",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 145,
   "totalPointsAgainst": 127,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 85.7,
   "diff": 18,
   "ppg": 20.7,
   "leagueRank": 161,
   "rating": 0.4,
   "ratingGames": 7,
   "confidence": 49,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.4,
   "playerId": "51197be0-3fa1-4888-b0be-df5af704e8a4"
  },
  {
   "name": "Ellen Rubiato",
   "gender": "Female",
   "team": "Forward",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 11,
   "losses": 2,
   "pointsWon": 266,
   "totalPointsAgainst": 180,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 5,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 84.6,
   "diff": 86,
   "ppg": 20.5,
   "leagueRank": 31,
   "rating": 3,
   "ratingGames": 13,
   "confidence": 66,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.8,
   "playerId": "9b6e4166-d6a4-4e8c-812b-65e4d35477f3"
  },
  {
   "name": "Eric Brezina",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 11,
   "losses": 2,
   "pointsWon": 260,
   "totalPointsAgainst": 220,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 7,
   "genderLosses": 0,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 84.6,
   "diff": 40,
   "ppg": 20,
   "leagueRank": 51,
   "rating": 1.9,
   "ratingGames": 13,
   "confidence": 62,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0,
   "playerId": "717be0e6-148f-4bab-a433-22e4f97d5c47"
  },
  {
   "name": "Jennifer Laroque",
   "gender": "Female",
   "team": "Forward",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 10,
   "losses": 2,
   "pointsWon": 244,
   "totalPointsAgainst": 185,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 6,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 83.3,
   "diff": 59,
   "ppg": 20.3,
   "leagueRank": 46,
   "rating": 1.9,
   "ratingGames": 12,
   "confidence": 66,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.8,
   "playerId": "e870b473-4955-4ccf-82ce-88f72bf2d917"
  },
  {
   "name": "Carolyn Laverdiere",
   "gender": "Female",
   "team": "Forward",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 10,
   "losses": 2,
   "pointsWon": 228,
   "totalPointsAgainst": 172,
   "mixedWins": 3,
   "mixedLosses": 2,
   "genderWins": 7,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 56,
   "ppg": 19,
   "leagueRank": 56,
   "rating": 0.7,
   "ratingGames": 12,
   "confidence": 66,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": -1,
   "playerId": "ebc26b7d-1ba3-4cf6-a11f-ad6e79c2ff1b"
  },
  {
   "name": "Eden Paredes",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 120,
   "totalPointsAgainst": 87,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 33,
   "ppg": 20,
   "leagueRank": 52,
   "rating": 1,
   "ratingGames": 6,
   "confidence": 46,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -1.7,
   "playerId": "6feb852e-6d64-42d2-8135-3c625b7a0af3"
  },
  {
   "name": "Eric Pollock",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 119,
   "totalPointsAgainst": 89,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 30,
   "ppg": 19.8,
   "leagueRank": 48,
   "rating": 1.1,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -0.9,
   "playerId": "347f3214-5905-4d1b-8666-9290abe9b727"
  },
  {
   "name": "Jennifer Applebee",
   "gender": "Female",
   "team": "PickleRage Union County",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 122,
   "totalPointsAgainst": 92,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 30,
   "ppg": 20.3,
   "leagueRank": 39,
   "rating": 2.2,
   "ratingGames": 6,
   "confidence": 46,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.4,
   "playerId": "fee5a8cb-84fc-4d3f-abbe-99d91c2dc9a3"
  },
  {
   "name": "Teresa Carr",
   "gender": "Female",
   "team": "PickleRage Union County",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 124,
   "totalPointsAgainst": 94,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "b84f31ed-afcf-4045-b351-8ece85cdeb26",
   "winPct": 83.3,
   "diff": 30,
   "ppg": 20.7,
   "leagueRank": 97,
   "rating": 1.6,
   "ratingGames": 6,
   "confidence": 47,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -0.5
  },
  {
   "name": "Anthony Leone",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 124,
   "totalPointsAgainst": 102,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 83.3,
   "diff": 22,
   "ppg": 20.7,
   "leagueRank": 50,
   "rating": 0.8,
   "ratingGames": 6,
   "confidence": 37,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.8,
   "playerId": "a8715ef7-f760-4097-b642-eae44c0a5de7"
  },
  {
   "name": "Maria Fanfa",
   "gender": "Female",
   "team": "Picklr Fair Lawn",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 117,
   "totalPointsAgainst": 96,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "98bfa16f-b5e6-4534-a4b9-5b84267284d4",
   "winPct": 83.3,
   "diff": 21,
   "ppg": 19.5,
   "leagueRank": 45,
   "rating": 1.9,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.1
  },
  {
   "name": "Scott Auty",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 124,
   "totalPointsAgainst": 104,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "53024744-72eb-4d56-b0c9-93a6201bdc33",
   "winPct": 83.3,
   "diff": 20,
   "ppg": 20.7,
   "leagueRank": 54,
   "rating": 0.1,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": -0.8
  },
  {
   "name": "Qiuyan Kong",
   "gender": "Female",
   "team": "Picklr Fair Lawn",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 121,
   "totalPointsAgainst": 106,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 15,
   "ppg": 20.2,
   "leagueRank": 75,
   "rating": 1.5,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.5,
   "playerId": "e2b4f0ef-182b-4f3c-8b8e-144aee0e8eb4"
  },
  {
   "name": "Jeff Pillar",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 122,
   "totalPointsAgainst": 109,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 13,
   "ppg": 20.3,
   "leagueRank": 63,
   "rating": -0.7,
   "ratingGames": 6,
   "confidence": 47,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -1.3,
   "playerId": "5934eab7-8a6e-46fd-81e8-95bfb5d7fef6"
  },
  {
   "name": "Ren Mortara",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 9,
   "losses": 2,
   "pointsWon": 214,
   "totalPointsAgainst": 166,
   "mixedWins": 6,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 81.8,
   "diff": 48,
   "ppg": 19.5,
   "leagueRank": 55,
   "rating": 1.6,
   "ratingGames": 11,
   "confidence": 65,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -1,
   "playerId": "91b2bf26-24f1-437f-82d4-f8ad382c0479"
  },
  {
   "name": "Tracy Kaban",
   "gender": "Female",
   "team": "One Love",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 101,
   "totalPointsAgainst": 78,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "ca3da64e-b479-46c8-a6ef-e9a5430c12c5",
   "winPct": 80,
   "diff": 23,
   "ppg": 20.2,
   "leagueRank": 43,
   "rating": -19.5,
   "ratingGames": 5,
   "confidence": 39,
   "strengthOfPartners": 41,
   "strengthOfOpponents": 0.6
  },
  {
   "name": "Marcia Rathjen",
   "gender": "Female",
   "team": "Picklr Fair Lawn",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 95,
   "totalPointsAgainst": 77,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 80,
   "diff": 18,
   "ppg": 19,
   "leagueRank": 47,
   "rating": 1.4,
   "ratingGames": 5,
   "confidence": 42,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.2,
   "playerId": "713e7456-5ec1-4fa6-ac0f-bb04c2a56c18"
  },
  {
   "name": "Olga Sedycias",
   "gender": "Female",
   "team": "Picklr Fair Lawn",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 102,
   "totalPointsAgainst": 85,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 80,
   "diff": 17,
   "ppg": 20.4,
   "leagueRank": 98,
   "rating": 0.7,
   "ratingGames": 5,
   "confidence": 43,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.6,
   "playerId": "7c14ace8-2c5f-416f-8619-efa19901a78c"
  },
  {
   "name": "Tom Dominczyk",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 101,
   "totalPointsAgainst": 85,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 80,
   "diff": 16,
   "ppg": 20.2,
   "leagueRank": 59,
   "rating": 0.2,
   "ratingGames": 5,
   "confidence": 49,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -1.1,
   "playerId": "9beb7596-d6b9-41aa-ab94-66d16839c1f5"
  },
  {
   "name": "Andrew Bush",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 99,
   "totalPointsAgainst": 83,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 80,
   "diff": 16,
   "ppg": 19.8,
   "leagueRank": 58,
   "rating": 0.8,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.5,
   "playerId": "e8598b52-28b9-41b0-9485-42efee80b3f3"
  },
  {
   "name": "Andrew Craig",
   "gender": "Male",
   "team": "Pickleball Palace Blue",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 101,
   "totalPointsAgainst": 92,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 80,
   "diff": 9,
   "ppg": 20.2,
   "leagueRank": 53,
   "rating": 1.7,
   "ratingGames": 5,
   "confidence": 43,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.4,
   "playerId": "12282462-33ce-4ae9-81ae-5bb224883f78"
  },
  {
   "name": "Artemio Tuquero",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton Strikers",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 96,
   "totalPointsAgainst": 88,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 80,
   "diff": 8,
   "ppg": 19.2,
   "leagueRank": 82,
   "rating": -0.2,
   "ratingGames": 5,
   "confidence": 43,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.6,
   "playerId": "38af77d4-eaa3-4189-8eb9-b137ea3cbecd"
  },
  {
   "name": "Kim Slomeana",
   "gender": "Female",
   "team": "Forward",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 10,
   "losses": 3,
   "pointsWon": 257,
   "totalPointsAgainst": 219,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 7,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 76.9,
   "diff": 38,
   "ppg": 19.8,
   "leagueRank": 74,
   "rating": 1.3,
   "ratingGames": 13,
   "confidence": 68,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.1,
   "playerId": "2b6f81eb-315c-4313-b515-d21d76d5f3e8"
  },
  {
   "name": "Lynette Pil",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton Strikers",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 9,
   "losses": 3,
   "pointsWon": 242,
   "totalPointsAgainst": 195,
   "mixedWins": 5,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 75,
   "diff": 47,
   "ppg": 20.2,
   "leagueRank": 61,
   "rating": 1.4,
   "ratingGames": 12,
   "confidence": 67,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": -0.2,
   "playerId": "92b709b8-b68c-436f-95e5-d9db2908cc3c"
  },
  {
   "name": "Betsy Hansbury",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 9,
   "losses": 3,
   "pointsWon": 233,
   "totalPointsAgainst": 194,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 75,
   "diff": 39,
   "ppg": 19.4,
   "leagueRank": 65,
   "rating": 2.5,
   "ratingGames": 12,
   "confidence": 66,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.2,
   "playerId": "708f285b-0855-47a2-a8b4-9c1459f65781"
  },
  {
   "name": "Bart Van Der Gaag",
   "gender": "Male",
   "team": "PKLD",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 9,
   "losses": 3,
   "pointsWon": 240,
   "totalPointsAgainst": 203,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 75,
   "diff": 37,
   "ppg": 20,
   "leagueRank": 69,
   "rating": -4.5,
   "ratingGames": 12,
   "confidence": 66,
   "strengthOfPartners": -3.4,
   "strengthOfOpponents": -6.3,
   "playerId": "24b5e97e-55d9-4d59-82ca-3b616f25d3a1"
  },
  {
   "name": "Paul Phillips",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 9,
   "losses": 3,
   "pointsWon": 241,
   "totalPointsAgainst": 214,
   "mixedWins": 6,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 6,
   "clutchLosses": 0,
   "winPct": 75,
   "diff": 27,
   "ppg": 20.1,
   "leagueRank": 79,
   "rating": 0.1,
   "ratingGames": 12,
   "confidence": 64,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.7,
   "playerId": "9ef3e1b1-2818-46f0-ab0b-2ee190d176b3"
  },
  {
   "name": "Angela Salemmo",
   "gender": "Female",
   "team": "Premiere Dinkers",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 6,
   "losses": 2,
   "pointsWon": 157,
   "totalPointsAgainst": 133,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 75,
   "diff": 24,
   "ppg": 19.6,
   "leagueRank": 64,
   "rating": 16.7,
   "ratingGames": 8,
   "confidence": 57,
   "strengthOfPartners": -43.8,
   "strengthOfOpponents": -10.9,
   "playerId": "1c4c9ff1-1050-48c3-b278-3a5afbf51a7c"
  },
  {
   "name": "Christine Ostapiak",
   "gender": "Female",
   "team": "Pickleball Palace Black",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 6,
   "losses": 2,
   "pointsWon": 161,
   "totalPointsAgainst": 141,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "e5d63f22-5a18-4b5d-b916-61d59e17fc0d",
   "winPct": 75,
   "diff": 20,
   "ppg": 20.1,
   "leagueRank": 81,
   "rating": -0.7,
   "ratingGames": 8,
   "confidence": 53,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -1
  },
  {
   "name": "David Katz",
   "gender": "Male",
   "team": "One Love",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 3,
   "losses": 1,
   "pointsWon": 80,
   "totalPointsAgainst": 63,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 75,
   "diff": 17,
   "ppg": 20,
   "leagueRank": 78,
   "rating": -4.8,
   "ratingGames": 4,
   "confidence": 41,
   "strengthOfPartners": -25.1,
   "strengthOfOpponents": -19.4,
   "playerId": "d55d3206-5478-4a12-b49a-095d301a098b"
  },
  {
   "name": "Jackie Coneeny",
   "gender": "Female",
   "team": "Life Time Red Bank",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 3,
   "losses": 1,
   "pointsWon": 81,
   "totalPointsAgainst": 68,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 75,
   "diff": 13,
   "ppg": 20.3,
   "leagueRank": 89,
   "rating": 35.6,
   "ratingGames": 4,
   "confidence": 43,
   "strengthOfPartners": 13.1,
   "strengthOfOpponents": 40.6,
   "playerId": "cee0559f-0285-4e86-9254-128f836efee8"
  },
  {
   "name": "Jennifer Makfinsky",
   "gender": "Female",
   "team": "PKLD",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 15,
   "wins": 11,
   "losses": 4,
   "pointsWon": 299,
   "totalPointsAgainst": 252,
   "mixedWins": 6,
   "mixedLosses": 1,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 73.3,
   "diff": 47,
   "ppg": 19.9,
   "leagueRank": 67,
   "rating": -6.5,
   "ratingGames": 15,
   "confidence": 67,
   "strengthOfPartners": -3.5,
   "strengthOfOpponents": -7.4,
   "playerId": "67fe047d-4c6f-4a2b-9946-afdd938d18c8"
  },
  {
   "name": "Krishma Patel",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton Strikers",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 8,
   "losses": 3,
   "pointsWon": 219,
   "totalPointsAgainst": 162,
   "mixedWins": 3,
   "mixedLosses": 2,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 72.7,
   "diff": 57,
   "ppg": 19.9,
   "leagueRank": 57,
   "rating": 2.9,
   "ratingGames": 11,
   "confidence": 66,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.1,
   "playerId": "80331047-7a76-4c4b-9075-b40e26933c6f"
  },
  {
   "name": "Donna Stone",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton Strikers",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 8,
   "losses": 3,
   "pointsWon": 214,
   "totalPointsAgainst": 166,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 72.7,
   "diff": 48,
   "ppg": 19.5,
   "leagueRank": 71,
   "rating": 2,
   "ratingGames": 11,
   "confidence": 62,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.3,
   "playerId": "af8a6e4b-f588-45db-906e-5766f1307e50"
  },
  {
   "name": "Sheila Curran",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 8,
   "losses": 3,
   "pointsWon": 222,
   "totalPointsAgainst": 175,
   "mixedWins": 5,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 72.7,
   "diff": 47,
   "ppg": 20.2,
   "leagueRank": 62,
   "rating": 2,
   "ratingGames": 11,
   "confidence": 66,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.7,
   "playerId": "bbb3cbbd-edc3-4fa6-adef-800076f97402"
  },
  {
   "name": "Olga Turova",
   "gender": "Female",
   "team": "Monroe",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 8,
   "losses": 3,
   "pointsWon": 217,
   "totalPointsAgainst": 189,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 72.7,
   "diff": 28,
   "ppg": 19.7,
   "leagueRank": 70,
   "rating": 5.2,
   "ratingGames": 11,
   "confidence": 64,
   "strengthOfPartners": -11.9,
   "strengthOfOpponents": -3.6,
   "playerId": "1aeb5726-1c67-4c13-8884-b35f0c5c854f"
  },
  {
   "name": "Maria Cecilia Holgado",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton Strikers",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 8,
   "losses": 3,
   "pointsWon": 219,
   "totalPointsAgainst": 191,
   "mixedWins": 4,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 72.7,
   "diff": 28,
   "ppg": 19.9,
   "leagueRank": 80,
   "rating": 0.8,
   "ratingGames": 11,
   "confidence": 63,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0,
   "playerId": "c1c60fc3-68c8-421e-90bb-cdcf21b5a936"
  },
  {
   "name": "Jeffrey Hartford",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 8,
   "losses": 3,
   "pointsWon": 220,
   "totalPointsAgainst": 199,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 6,
   "genderLosses": 1,
   "clutchWins": 5,
   "clutchLosses": 1,
   "winPct": 72.7,
   "diff": 21,
   "ppg": 20,
   "leagueRank": 87,
   "rating": 0.2,
   "ratingGames": 11,
   "confidence": 64,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.2,
   "playerId": "3801a1f8-353e-4ecf-ada7-e8ed5ff23235"
  },
  {
   "name": "Bill Venella",
   "gender": "Male",
   "team": "Forward",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 10,
   "losses": 4,
   "pointsWon": 284,
   "totalPointsAgainst": 224,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 6,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 71.4,
   "diff": 60,
   "ppg": 20.3,
   "leagueRank": 68,
   "rating": 2.6,
   "ratingGames": 14,
   "confidence": 66,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0,
   "playerId": "357a050a-a8ad-4998-a511-814c7c69caad"
  },
  {
   "name": "Lingshan Hsieh",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 14,
   "wins": 10,
   "losses": 4,
   "pointsWon": 273,
   "totalPointsAgainst": 221,
   "mixedWins": 6,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 71.4,
   "diff": 52,
   "ppg": 19.5,
   "leagueRank": 72,
   "rating": 2.1,
   "ratingGames": 14,
   "confidence": 67,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.1,
   "playerId": "7fe3ca78-6219-4723-a8ad-49bce55b0238"
  },
  {
   "name": "Joan Rudderow",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 10,
   "losses": 4,
   "pointsWon": 268,
   "totalPointsAgainst": 239,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 71.4,
   "diff": 29,
   "ppg": 19.1,
   "leagueRank": 84,
   "rating": 1.3,
   "ratingGames": 14,
   "confidence": 65,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.1,
   "playerId": "dca2ce61-749b-421c-9205-0a16fc656a36"
  },
  {
   "name": "Jay Parisi",
   "gender": "Male",
   "team": "Premiere Dinkers",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 132,
   "totalPointsAgainst": 109,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 71.4,
   "diff": 23,
   "ppg": 18.9,
   "leagueRank": 76,
   "rating": -5,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -5.2,
   "playerId": "31c63d42-7ed4-45ec-9831-f1bb4569e6c7"
  },
  {
   "name": "Alan Weissman",
   "gender": "Male",
   "team": "Pickleball Palace Black",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 143,
   "totalPointsAgainst": 122,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 71.4,
   "diff": 21,
   "ppg": 20.4,
   "leagueRank": 86,
   "rating": -0.4,
   "ratingGames": 7,
   "confidence": 48,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -1.3,
   "playerId": "12febf17-8650-40dd-92ca-a0bda06caf0f"
  },
  {
   "name": "Linda Bozzo",
   "gender": "Female",
   "team": "PickleRage Union County",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 141,
   "totalPointsAgainst": 120,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 71.4,
   "diff": 21,
   "ppg": 20.1,
   "leagueRank": 130,
   "rating": 0,
   "ratingGames": 7,
   "confidence": 50,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": -0.6,
   "playerId": "94c45058-cae5-4085-ad9e-684309568903"
  },
  {
   "name": "Holly Ferguson",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 7,
   "losses": 3,
   "pointsWon": 202,
   "totalPointsAgainst": 172,
   "mixedWins": 4,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 70,
   "diff": 30,
   "ppg": 20.2,
   "leagueRank": 85,
   "rating": 0.2,
   "ratingGames": 10,
   "confidence": 61,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -1.3,
   "playerId": "a1b6d08e-816a-4e07-84f2-616a7050b00b"
  },
  {
   "name": "Dennis Higman",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 9,
   "losses": 4,
   "pointsWon": 251,
   "totalPointsAgainst": 199,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 69.2,
   "diff": 52,
   "ppg": 19.3,
   "leagueRank": 73,
   "rating": 2.8,
   "ratingGames": 13,
   "confidence": 66,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0,
   "playerId": "b8fabebb-fd0f-49a8-929a-defbac098e43"
  },
  {
   "name": "Christina Zumbo-Zerega",
   "gender": "Female",
   "team": "Colts Neck Racquet Club",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 119,
   "totalPointsAgainst": 88,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 66.7,
   "diff": 31,
   "ppg": 19.8,
   "leagueRank": 60,
   "rating": 1.6,
   "ratingGames": 6,
   "confidence": 45,
   "strengthOfPartners": -2.6,
   "strengthOfOpponents": -2.6,
   "playerId": "b5518a36-f696-4635-918a-4d6ee23968ff"
  },
  {
   "name": "Elliot Fishman",
   "gender": "Male",
   "team": "PKLD",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 8,
   "losses": 4,
   "pointsWon": 225,
   "totalPointsAgainst": 196,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 66.7,
   "diff": 29,
   "ppg": 18.8,
   "leagueRank": 104,
   "rating": -0.2,
   "ratingGames": 12,
   "confidence": 63,
   "strengthOfPartners": -3.9,
   "strengthOfOpponents": -3.2,
   "playerId": "3617a420-089d-408c-abf0-c3894b33a47e"
  },
  {
   "name": "Andrew Frey",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 8,
   "losses": 4,
   "pointsWon": 237,
   "totalPointsAgainst": 211,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 66.7,
   "diff": 26,
   "ppg": 19.8,
   "leagueRank": 90,
   "rating": 1.6,
   "ratingGames": 12,
   "confidence": 64,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.2,
   "playerId": "beb70730-42da-4979-93b9-bd5c88a52d75"
  },
  {
   "name": "Ginger Evans",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 120,
   "totalPointsAgainst": 98,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 22,
   "ppg": 20,
   "leagueRank": 77,
   "rating": 2,
   "ratingGames": 6,
   "confidence": 47,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.1,
   "playerId": "f9ea65b5-8f59-4c04-89b0-69ca9429c325"
  },
  {
   "name": "Eric Brody",
   "gender": "Male",
   "team": "One Love",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 8,
   "losses": 4,
   "pointsWon": 235,
   "totalPointsAgainst": 214,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 66.7,
   "diff": 21,
   "ppg": 19.6,
   "leagueRank": 95,
   "rating": -32.7,
   "ratingGames": 12,
   "confidence": 60,
   "strengthOfPartners": 51,
   "strengthOfOpponents": 2.8,
   "playerId": "bbb95dae-c7a1-4e34-b74f-29ff5fc70f29"
  },
  {
   "name": "Ed Amato",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 118,
   "totalPointsAgainst": 97,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 66.7,
   "diff": 21,
   "ppg": 19.7,
   "leagueRank": 83,
   "rating": 1,
   "ratingGames": 6,
   "confidence": 46,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.8,
   "playerId": "ce893b2d-f5ea-40aa-98c0-d67402405b64"
  },
  {
   "name": "Dean Lim",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton Strikers",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 122,
   "totalPointsAgainst": 104,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 66.7,
   "diff": 18,
   "ppg": 20.3,
   "leagueRank": 91,
   "rating": 0.2,
   "ratingGames": 6,
   "confidence": 47,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.9,
   "playerId": "9d8ac19c-2a48-423f-a8ac-56d66cb6ccff"
  },
  {
   "name": "Gail Hannagan",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 113,
   "totalPointsAgainst": 97,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 66.7,
   "diff": 16,
   "ppg": 18.8,
   "leagueRank": 110,
   "rating": 0.8,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.6,
   "playerId": "3d17e05b-9fe9-4d04-a0c7-4e03c1e6530e"
  },
  {
   "name": "Harihar Chudamani",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 114,
   "totalPointsAgainst": 100,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 66.7,
   "diff": 14,
   "ppg": 19,
   "leagueRank": 127,
   "rating": -1.3,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": -1.4,
   "playerId": "06b13278-0d0c-40c5-b2f2-acd50b8bfc36"
  },
  {
   "name": "Adele Hackney",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 110,
   "totalPointsAgainst": 97,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 66.7,
   "diff": 13,
   "ppg": 18.3,
   "leagueRank": 120,
   "rating": 0.8,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0,
   "playerId": "c1e41980-e98d-4208-aa10-dc04e407cf8f"
  },
  {
   "name": "Bing Zhu",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 117,
   "totalPointsAgainst": 104,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 66.7,
   "diff": 13,
   "ppg": 19.5,
   "leagueRank": 114,
   "rating": -0.2,
   "ratingGames": 6,
   "confidence": 43,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -1,
   "playerId": "e6f1ad88-f91d-41ca-9771-833b1f38eff3"
  },
  {
   "name": "Lori Frank",
   "gender": "Female",
   "team": "Jersey Devil",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 120,
   "totalPointsAgainst": 108,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 12,
   "ppg": 20,
   "leagueRank": 88,
   "rating": 1.1,
   "ratingGames": 6,
   "confidence": 47,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.1,
   "playerId": "8e51fde0-5ddd-4e6e-b2f6-49cf79cb8030"
  },
  {
   "name": "Eric Smith",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 111,
   "totalPointsAgainst": 101,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 66.7,
   "diff": 10,
   "ppg": 18.5,
   "leagueRank": 109,
   "rating": 1.7,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.8,
   "playerId": "3120fa05-d5d9-4b71-a339-4ed92f3e5b06"
  },
  {
   "name": "Angela Bartelt",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 118,
   "totalPointsAgainst": 109,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 66.7,
   "diff": 9,
   "ppg": 19.7,
   "leagueRank": 113,
   "rating": 0,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.8,
   "playerId": "42277c06-ba82-4f93-927a-9fd6f17a5ddc"
  },
  {
   "name": "Mark Skolnik",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 120,
   "totalPointsAgainst": 112,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 8,
   "ppg": 20,
   "leagueRank": 102,
   "rating": 0.1,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.1,
   "playerId": "b2f66825-4c89-450c-ae68-db22d0418c80"
  },
  {
   "name": "Edie Kwasnoski",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 116,
   "totalPointsAgainst": 118,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 4,
   "clutchLosses": 1,
   "playerId": "2b4dc294-9f7a-40c5-978e-59adf81286d7",
   "winPct": 66.7,
   "diff": -2,
   "ppg": 19.3,
   "leagueRank": 124,
   "rating": -0.6,
   "ratingGames": 6,
   "confidence": 47,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.1
  },
  {
   "name": "Dan Amabile",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 112,
   "totalPointsAgainst": 115,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 66.7,
   "diff": -3,
   "ppg": 18.7,
   "leagueRank": 116,
   "rating": 1.5,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 1.1,
   "playerId": "3d3123f8-a4db-460f-8df3-70e6271cacfa"
  },
  {
   "name": "Lynn Snyder",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 9,
   "losses": 5,
   "pointsWon": 275,
   "totalPointsAgainst": 216,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 64.3,
   "diff": 59,
   "ppg": 19.6,
   "leagueRank": 94,
   "rating": 1.5,
   "ratingGames": 14,
   "confidence": 69,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -0.4,
   "playerId": "1973cf93-7507-478a-b457-4fa7ec0951af"
  },
  {
   "name": "Jeffrey Quinlan",
   "gender": "Male",
   "team": "Monroe",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 9,
   "losses": 5,
   "pointsWon": 271,
   "totalPointsAgainst": 237,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 64.3,
   "diff": 34,
   "ppg": 19.4,
   "leagueRank": 92,
   "rating": -4.5,
   "ratingGames": 14,
   "confidence": 69,
   "strengthOfPartners": -6.5,
   "strengthOfOpponents": -7.4,
   "playerId": "f7bf88cc-9cdb-4d3c-b768-c2922c5a8456"
  },
  {
   "name": "Dajie （David） Yang",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 9,
   "losses": 5,
   "pointsWon": 268,
   "totalPointsAgainst": 259,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 64.3,
   "diff": 9,
   "ppg": 19.1,
   "leagueRank": 132,
   "rating": -0.7,
   "ratingGames": 14,
   "confidence": 66,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.5,
   "playerId": "b153649d-e405-4192-85f9-c1871ba0eba0"
  },
  {
   "name": "Subhas Desai",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton Strikers",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 7,
   "losses": 4,
   "pointsWon": 211,
   "totalPointsAgainst": 164,
   "mixedWins": 2,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 63.6,
   "diff": 47,
   "ppg": 19.2,
   "leagueRank": 100,
   "rating": 1,
   "ratingGames": 11,
   "confidence": 63,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": -0.5,
   "playerId": "b9a91028-9ddd-410a-a8a7-84a23b0f577b"
  },
  {
   "name": "Srinatha Nanjundaiah",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton Strikers",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 7,
   "losses": 4,
   "pointsWon": 213,
   "totalPointsAgainst": 174,
   "mixedWins": 3,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 63.6,
   "diff": 39,
   "ppg": 19.4,
   "leagueRank": 103,
   "rating": 1.6,
   "ratingGames": 11,
   "confidence": 61,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.4,
   "playerId": "2fa3bb27-766b-4a83-b0b4-0ecffc01b778"
  },
  {
   "name": "George Zhou",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 7,
   "losses": 4,
   "pointsWon": 204,
   "totalPointsAgainst": 165,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "e623609f-5136-415f-a018-74427cfa13ff",
   "winPct": 63.6,
   "diff": 39,
   "ppg": 18.5,
   "leagueRank": 105,
   "rating": 1.6,
   "ratingGames": 11,
   "confidence": 64,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.7
  },
  {
   "name": "Sarah Stangota",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 11,
   "wins": 7,
   "losses": 4,
   "pointsWon": 210,
   "totalPointsAgainst": 179,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 63.6,
   "diff": 31,
   "ppg": 19.1,
   "leagueRank": 111,
   "rating": 0.6,
   "ratingGames": 11,
   "confidence": 65,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.5,
   "playerId": "80fbbb8f-8f4d-4a6f-bc08-925f29df32ea"
  },
  {
   "name": "Phillip Perry",
   "gender": "Male",
   "team": "One Love",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 7,
   "losses": 4,
   "pointsWon": 217,
   "totalPointsAgainst": 195,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 63.6,
   "diff": 22,
   "ppg": 19.7,
   "leagueRank": 93,
   "rating": -62.3,
   "ratingGames": 11,
   "confidence": 64,
   "strengthOfPartners": 69.1,
   "strengthOfOpponents": -8.9,
   "playerId": "acc4012f-320c-4b43-8ec7-f60ca7419e03"
  },
  {
   "name": "Donna Shabinaw",
   "gender": "Female",
   "team": "Pickleball Palace Black",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 161,
   "totalPointsAgainst": 138,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "b76b0425-e8ac-48b3-aa4e-cbb462179fbe",
   "winPct": 62.5,
   "diff": 23,
   "ppg": 20.1,
   "leagueRank": 115,
   "rating": -0.3,
   "ratingGames": 8,
   "confidence": 52,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -1.1
  },
  {
   "name": "John Rogers",
   "gender": "Male",
   "team": "Premiere Dinkers",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 10,
   "losses": 6,
   "pointsWon": 302,
   "totalPointsAgainst": 283,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 62.5,
   "diff": 19,
   "ppg": 18.9,
   "leagueRank": 122,
   "rating": -83.4,
   "ratingGames": 16,
   "confidence": 70,
   "strengthOfPartners": -2.8,
   "strengthOfOpponents": 8.2,
   "playerId": "45bc6397-1703-4a4b-bde7-fda65905fe3a"
  },
  {
   "name": "David Cardinale",
   "gender": "Male",
   "team": "Premiere Dinkers",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 150,
   "totalPointsAgainst": 140,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 62.5,
   "diff": 10,
   "ppg": 18.8,
   "leagueRank": 117,
   "rating": -16.3,
   "ratingGames": 8,
   "confidence": 52,
   "strengthOfPartners": 7.5,
   "strengthOfOpponents": -9.1,
   "playerId": "45665a14-3a51-4fa1-a210-314d4f39f720"
  },
  {
   "name": "Greg Taylor",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 13,
   "wins": 8,
   "losses": 5,
   "pointsWon": 243,
   "totalPointsAgainst": 228,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 61.5,
   "diff": 15,
   "ppg": 18.7,
   "leagueRank": 131,
   "rating": 0.1,
   "ratingGames": 13,
   "confidence": 66,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.1,
   "playerId": "701f7029-4353-4548-b8db-b7ac7ed3d847"
  },
  {
   "name": "Theresa Dumbrique",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton Strikers",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 99,
   "totalPointsAgainst": 77,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 60,
   "diff": 22,
   "ppg": 19.8,
   "leagueRank": 101,
   "rating": 1.6,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -0.1,
   "playerId": "0e3e69b5-e482-4ff9-bebe-f4ddab5eab85"
  },
  {
   "name": "Scott Perrone",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton Strikers",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 101,
   "totalPointsAgainst": 80,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 60,
   "diff": 21,
   "ppg": 20.2,
   "leagueRank": 108,
   "rating": 0,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -1.4,
   "playerId": "b7f4c737-4ebf-41e0-8a14-13124005eb7c"
  },
  {
   "name": "Joseph Romagnolo",
   "gender": "Male",
   "team": "Premiere Dinkers",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 15,
   "wins": 9,
   "losses": 6,
   "pointsWon": 290,
   "totalPointsAgainst": 271,
   "mixedWins": 3,
   "mixedLosses": 5,
   "genderWins": 6,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 60,
   "diff": 19,
   "ppg": 19.3,
   "leagueRank": 125,
   "rating": 46.3,
   "ratingGames": 15,
   "confidence": 71,
   "strengthOfPartners": -42.2,
   "strengthOfOpponents": 7.6,
   "playerId": "1972795c-9185-4d19-8352-6244573e3ca5"
  },
  {
   "name": "Sharon Oddy",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 99,
   "totalPointsAgainst": 81,
   "mixedWins": 1,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 60,
   "diff": 18,
   "ppg": 19.8,
   "leagueRank": 107,
   "rating": 0.4,
   "ratingGames": 5,
   "confidence": 44,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -1.2,
   "playerId": "697e9a10-3950-4376-96f8-8b1f083875f1"
  },
  {
   "name": "Xinxin Huang",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 99,
   "totalPointsAgainst": 82,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 60,
   "diff": 17,
   "ppg": 19.8,
   "leagueRank": 119,
   "rating": -0.6,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -1.8,
   "playerId": "d45fab4f-9820-4e79-b3c5-b889c924af20"
  },
  {
   "name": "Clare Cruz",
   "gender": "Female",
   "team": "Pickleball Palace Blue",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 95,
   "totalPointsAgainst": 85,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 60,
   "diff": 10,
   "ppg": 19,
   "leagueRank": 106,
   "rating": 2.1,
   "ratingGames": 5,
   "confidence": 44,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 0.2,
   "playerId": "f54b54e0-be28-4155-a198-e63fc2ed0912"
  },
  {
   "name": "Cheryl Raiken",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 93,
   "totalPointsAgainst": 86,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 60,
   "diff": 7,
   "ppg": 18.6,
   "leagueRank": 145,
   "rating": -0.4,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.5,
   "playerId": "39966b06-c83d-47ea-a62c-d6c22c429d19"
  },
  {
   "name": "Deirdre Monahan",
   "gender": "Female",
   "team": "One Love",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 95,
   "totalPointsAgainst": 88,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 60,
   "diff": 7,
   "ppg": 19,
   "leagueRank": 118,
   "rating": 25.1,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": -2.1,
   "strengthOfOpponents": 20.8,
   "playerId": "6e94f49e-e75e-4061-8ca2-967f52f4eb07"
  },
  {
   "name": "Mary Logan Comerford",
   "gender": "Female",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 91,
   "totalPointsAgainst": 88,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 60,
   "diff": 3,
   "ppg": 18.2,
   "leagueRank": 138,
   "rating": -12,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": -21.3,
   "strengthOfOpponents": -21.8,
   "playerId": "c447d749-70d6-4bcc-b311-5f532d3b0a99"
  },
  {
   "name": "Stephanie A. Umbach",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 96,
   "totalPointsAgainst": 93,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "c6bf4d6c-5e3d-48c9-9be7-dadacd5a465d",
   "winPct": 60,
   "diff": 3,
   "ppg": 19.2,
   "leagueRank": 147,
   "rating": 0,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.1
  },
  {
   "name": "Risa Korzekwinski",
   "gender": "Female",
   "team": "Premiere Dinkers",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 98,
   "totalPointsAgainst": 96,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 60,
   "diff": 2,
   "ppg": 19.6,
   "leagueRank": 126,
   "rating": 7.1,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": 5.9,
   "strengthOfOpponents": 9.1,
   "playerId": "f033c90c-8093-4e48-a42e-3277a14adbc3"
  },
  {
   "name": "Donna Facconerusin",
   "gender": "Female",
   "team": "Life Time Red Bank",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 93,
   "totalPointsAgainst": 93,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 60,
   "diff": 0,
   "ppg": 18.6,
   "leagueRank": 136,
   "rating": 10,
   "ratingGames": 5,
   "confidence": 44,
   "strengthOfPartners": 23.8,
   "strengthOfOpponents": 20.9,
   "playerId": "e81f3561-3e91-48aa-8430-f177ad30248b"
  },
  {
   "name": "Margo Langer",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 94,
   "totalPointsAgainst": 97,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 60,
   "diff": -3,
   "ppg": 18.8,
   "leagueRank": 157,
   "rating": -0.7,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.1,
   "playerId": "0ac4f132-2c5c-4a1b-92a6-350f1952aa75"
  },
  {
   "name": "Tina Convery",
   "gender": "Female",
   "team": "Jersey Devil",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 89,
   "totalPointsAgainst": 93,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 60,
   "diff": -4,
   "ppg": 17.8,
   "leagueRank": 162,
   "rating": -0.2,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.7,
   "playerId": "f739e9d0-4a76-43d8-9423-4a0ddbfcd63d"
  },
  {
   "name": "Luz Bonner",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton Prime Time",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 78,
   "totalPointsAgainst": 85,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 60,
   "diff": -7,
   "ppg": 15.6,
   "leagueRank": 172,
   "rating": 0.3,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 1.4,
   "playerId": "ef6c941f-29da-4723-95a8-63a508079685"
  },
  {
   "name": "Kim Barton",
   "gender": "Female",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 84,
   "totalPointsAgainst": 99,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 60,
   "diff": -15,
   "ppg": 16.8,
   "leagueRank": 184,
   "rating": -2.9,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": -5.7,
   "strengthOfOpponents": -3.9,
   "playerId": "618ea8c2-7d45-4878-b110-9e8450a2e0e1"
  },
  {
   "name": "Antoinette Mccormick",
   "gender": "Female",
   "team": "PKLD",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 7,
   "losses": 5,
   "pointsWon": 229,
   "totalPointsAgainst": 197,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 58.3,
   "diff": 32,
   "ppg": 19.1,
   "leagueRank": 121,
   "rating": -3.2,
   "ratingGames": 12,
   "confidence": 64,
   "strengthOfPartners": -3.3,
   "strengthOfOpponents": -5.1,
   "playerId": "71a2741e-56bc-4b1f-ad9a-13ce0a7ca9b8"
  },
  {
   "name": "Eric Fang",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 7,
   "losses": 5,
   "pointsWon": 226,
   "totalPointsAgainst": 195,
   "mixedWins": 3,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 58.3,
   "diff": 31,
   "ppg": 18.8,
   "leagueRank": 128,
   "rating": 0.8,
   "ratingGames": 12,
   "confidence": 65,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.5,
   "playerId": "a2e21de9-b9d3-4727-a66f-101c62e00a5d"
  },
  {
   "name": "Irish Lee",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 7,
   "losses": 5,
   "pointsWon": 233,
   "totalPointsAgainst": 211,
   "mixedWins": 3,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 58.3,
   "diff": 22,
   "ppg": 19.4,
   "leagueRank": 133,
   "rating": -0.1,
   "ratingGames": 12,
   "confidence": 63,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -0.4,
   "playerId": "1b93f56f-c9be-4d20-b0a4-e155b558a11c"
  },
  {
   "name": "Timothy Cassidy",
   "gender": "Male",
   "team": "One Love",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 12,
   "wins": 7,
   "losses": 5,
   "pointsWon": 229,
   "totalPointsAgainst": 224,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 58.3,
   "diff": 5,
   "ppg": 19.1,
   "leagueRank": 140,
   "rating": 145.9,
   "ratingGames": 12,
   "confidence": 63,
   "strengthOfPartners": -28.2,
   "strengthOfOpponents": -0.2,
   "playerId": "33b16b4f-95d4-4467-aba6-44b22d090bb5"
  },
  {
   "name": "Matt Becker",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 7,
   "losses": 5,
   "pointsWon": 221,
   "totalPointsAgainst": 217,
   "mixedWins": 5,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 58.3,
   "diff": 4,
   "ppg": 18.4,
   "leagueRank": 149,
   "rating": 1.1,
   "ratingGames": 12,
   "confidence": 61,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.7,
   "playerId": "604007f9-8645-4f0f-9909-e3a9b2fa6dd7"
  },
  {
   "name": "Kathi Savage",
   "gender": "Female",
   "team": "PickleRage Union County",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 127,
   "totalPointsAgainst": 108,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 57.1,
   "diff": 19,
   "ppg": 18.1,
   "leagueRank": 142,
   "rating": 0.1,
   "ratingGames": 7,
   "confidence": 47,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.7,
   "playerId": "304fa353-a564-41f6-ba23-ed9c19ace5b9"
  },
  {
   "name": "Tinglan Zhao",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 8,
   "losses": 6,
   "pointsWon": 266,
   "totalPointsAgainst": 247,
   "mixedWins": 4,
   "mixedLosses": 4,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 57.1,
   "diff": 19,
   "ppg": 19,
   "leagueRank": 135,
   "rating": 0.2,
   "ratingGames": 14,
   "confidence": 67,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.1,
   "playerId": "5f2e3f29-7b61-4d23-ba5a-23bfe5eac362"
  },
  {
   "name": "Melissa Freedman",
   "gender": "Female",
   "team": "Colts Neck Racquet Club",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 139,
   "totalPointsAgainst": 122,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 57.1,
   "diff": 17,
   "ppg": 19.9,
   "leagueRank": 96,
   "rating": -0.9,
   "ratingGames": 7,
   "confidence": 54,
   "strengthOfPartners": -3.2,
   "strengthOfOpponents": -3.5,
   "playerId": "fcfdec94-0e44-4583-8b2a-089109e9bd33"
  },
  {
   "name": "Steven Truzzolino",
   "gender": "Male",
   "team": "PKLD",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 136,
   "totalPointsAgainst": 123,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 57.1,
   "diff": 13,
   "ppg": 19.4,
   "leagueRank": 123,
   "rating": -3.9,
   "ratingGames": 7,
   "confidence": 54,
   "strengthOfPartners": -5.5,
   "strengthOfOpponents": -6.8,
   "playerId": "91c0c6ae-3f05-46c0-b1aa-6f328a4bf820"
  },
  {
   "name": "Joseph Gronczewski",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 133,
   "totalPointsAgainst": 121,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "f6eef486-8999-4247-a7d8-20251377021c",
   "winPct": 57.1,
   "diff": 12,
   "ppg": 19,
   "leagueRank": 112,
   "rating": 2.4,
   "ratingGames": 7,
   "confidence": 56,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.6
  },
  {
   "name": "Filomena Rega",
   "gender": "Female",
   "team": "Monroe",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 8,
   "losses": 6,
   "pointsWon": 264,
   "totalPointsAgainst": 258,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 6,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 57.1,
   "diff": 6,
   "ppg": 18.9,
   "leagueRank": 143,
   "rating": -24.3,
   "ratingGames": 14,
   "confidence": 67,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -16.3,
   "playerId": "b466c6a0-1ec9-4148-819b-972cc37ca5ec"
  },
  {
   "name": "Anthony Manzo",
   "gender": "Male",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 131,
   "totalPointsAgainst": 127,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 57.1,
   "diff": 4,
   "ppg": 18.7,
   "leagueRank": 139,
   "rating": 2,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": -10.2,
   "strengthOfOpponents": -3.8,
   "playerId": "031d7489-2ebb-4fb5-959b-88a86d0fff46"
  },
  {
   "name": "Tami Mohney",
   "gender": "Female",
   "team": "Mercer Bucks",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 130,
   "totalPointsAgainst": 126,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 57.1,
   "diff": 4,
   "ppg": 18.6,
   "leagueRank": 129,
   "rating": 2.6,
   "ratingGames": 7,
   "confidence": 50,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 1.1,
   "playerId": "639b104c-36e6-48d0-9948-b17158f92030"
  },
  {
   "name": "Frank Leccese",
   "gender": "Male",
   "team": "Colts Neck Racquet Club",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 127,
   "totalPointsAgainst": 129,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 57.1,
   "diff": -2,
   "ppg": 18.1,
   "leagueRank": 204,
   "rating": -3.5,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": -2.1,
   "strengthOfOpponents": -3.6,
   "playerId": "3250f1d1-8527-44ee-9d87-114fa4183213"
  },
  {
   "name": "Bobbi Rentko",
   "gender": "Female",
   "team": "PKLD",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 9,
   "wins": 5,
   "losses": 4,
   "pointsWon": 168,
   "totalPointsAgainst": 158,
   "mixedWins": 3,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 55.6,
   "diff": 10,
   "ppg": 18.7,
   "leagueRank": 144,
   "rating": -1.4,
   "ratingGames": 9,
   "confidence": 60,
   "strengthOfPartners": -4.6,
   "strengthOfOpponents": -3.9,
   "playerId": "66469f12-c5eb-4a44-97b6-c40c3fbbf89c"
  },
  {
   "name": "Bonny Mayerberg",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 6,
   "losses": 5,
   "pointsWon": 205,
   "totalPointsAgainst": 195,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 54.5,
   "diff": 10,
   "ppg": 18.6,
   "leagueRank": 152,
   "rating": 0.1,
   "ratingGames": 11,
   "confidence": 63,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.3,
   "playerId": "0e543890-4c91-45d2-bd5d-819dc476b245"
  },
  {
   "name": "Kimberly Kusumoto",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 6,
   "losses": 5,
   "pointsWon": 190,
   "totalPointsAgainst": 212,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 4,
   "clutchLosses": 0,
   "winPct": 54.5,
   "diff": -22,
   "ppg": 17.3,
   "leagueRank": 205,
   "rating": -2.7,
   "ratingGames": 11,
   "confidence": 63,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.6,
   "playerId": "5345c73e-518d-4066-8a0a-3c6c5c80de56"
  },
  {
   "name": "Jessie Fang",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 7,
   "losses": 6,
   "pointsWon": 239,
   "totalPointsAgainst": 229,
   "mixedWins": 4,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 53.8,
   "diff": 10,
   "ppg": 18.4,
   "leagueRank": 159,
   "rating": -0.4,
   "ratingGames": 13,
   "confidence": 67,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.3,
   "playerId": "fa9c688a-62ba-4bd3-806a-b47b05235128"
  },
  {
   "name": "Amy Farrell",
   "gender": "Female",
   "team": "Monroe",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 7,
   "losses": 6,
   "pointsWon": 240,
   "totalPointsAgainst": 242,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 53.8,
   "diff": -2,
   "ppg": 18.5,
   "leagueRank": 158,
   "rating": 2.7,
   "ratingGames": 13,
   "confidence": 68,
   "strengthOfPartners": -12.9,
   "strengthOfOpponents": -4.6,
   "playerId": "73509e7b-7c99-4b1e-998c-a9de94daa2a2"
  },
  {
   "name": "Barbara Markoglu",
   "gender": "Female",
   "team": "Premiere Dinkers",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 8,
   "losses": 7,
   "pointsWon": 292,
   "totalPointsAgainst": 280,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 53.3,
   "diff": 12,
   "ppg": 19.5,
   "leagueRank": 148,
   "rating": -117.8,
   "ratingGames": 15,
   "confidence": 71,
   "strengthOfPartners": 2.9,
   "strengthOfOpponents": -7,
   "playerId": "4ca325bd-f0d7-4b18-b570-c6ef241d2ff5"
  },
  {
   "name": "Joe Moore",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 114,
   "totalPointsAgainst": 102,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": 12,
   "ppg": 19,
   "leagueRank": 150,
   "rating": 0.8,
   "ratingGames": 6,
   "confidence": 47,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.1,
   "playerId": "04965ab9-e69f-43ba-a064-c7d3351fbf68"
  },
  {
   "name": "Maureen Bruno",
   "gender": "Female",
   "team": "PKLD",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 120,
   "totalPointsAgainst": 109,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 50,
   "diff": 11,
   "ppg": 20,
   "leagueRank": 146,
   "rating": -3.4,
   "ratingGames": 6,
   "confidence": 46,
   "strengthOfPartners": -4.9,
   "strengthOfOpponents": -6.2,
   "playerId": "e94c3831-b63f-4858-a2a1-94c0c10ee4e7"
  },
  {
   "name": "Elaine Aquilone",
   "gender": "Female",
   "team": "Life Time Red Bank",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 115,
   "totalPointsAgainst": 105,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": 10,
   "ppg": 19.2,
   "leagueRank": 153,
   "rating": 17.4,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": 10.3,
   "strengthOfOpponents": 18.8,
   "playerId": "07b5c571-951d-446b-86d8-63c1c406bf3c"
  },
  {
   "name": "Ray Baker",
   "gender": "Male",
   "team": "Life Time Red Bank",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 114,
   "totalPointsAgainst": 106,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "2fdf723b-616f-4e34-9f50-fe833ff48f68",
   "winPct": 50,
   "diff": 8,
   "ppg": 19,
   "leagueRank": 154,
   "rating": 6.2,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": 17.6,
   "strengthOfOpponents": 13.3
  },
  {
   "name": "Erik Abramson",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 2,
   "losses": 2,
   "pointsWon": 79,
   "totalPointsAgainst": 75,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "ea77bb43-8f4b-49df-8931-43c6cc9729a2",
   "winPct": 50,
   "diff": 4,
   "ppg": 19.8,
   "leagueRank": 169,
   "rating": 0.9,
   "ratingGames": 4,
   "confidence": 42,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.8
  },
  {
   "name": "Cheryl Parker",
   "gender": "Female",
   "team": "One Love",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 109,
   "totalPointsAgainst": 108,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": 1,
   "ppg": 18.2,
   "leagueRank": 163,
   "rating": 23.2,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": -8.1,
   "strengthOfOpponents": 15.2,
   "playerId": "1409bca4-8901-4ba4-8b38-c139781f5e07"
  },
  {
   "name": "Kenny Mayerhofer",
   "gender": "Male",
   "team": "Life Time Red Bank",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 114,
   "totalPointsAgainst": 113,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "cb1a0db3-dc7b-4516-9269-3ccb10e4febf",
   "winPct": 50,
   "diff": 1,
   "ppg": 19,
   "leagueRank": 160,
   "rating": 7.4,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": 25.8,
   "strengthOfOpponents": 19
  },
  {
   "name": "Franchesa Mclean",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton Prime Time",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 108,
   "totalPointsAgainst": 110,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": -2,
   "ppg": 18,
   "leagueRank": 167,
   "rating": -0.3,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 0.7,
   "playerId": "84a3279f-7449-4f3a-9d37-1cb1bfe2c45e"
  },
  {
   "name": "Doug Jordan",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 102,
   "totalPointsAgainst": 104,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 50,
   "diff": -2,
   "ppg": 17,
   "leagueRank": 193,
   "rating": -1.3,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.6,
   "playerId": "bdc6a670-57d8-4098-8970-a8521b64c4a9"
  },
  {
   "name": "Ken Wager",
   "gender": "Male",
   "team": "Forward",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 113,
   "totalPointsAgainst": 116,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": -3,
   "ppg": 18.8,
   "leagueRank": 178,
   "rating": -1.8,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -0.6,
   "playerId": "74697f0e-f479-4b6c-804f-fdc4719d8a39"
  },
  {
   "name": "Fritz Jean-Brian",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton Prime Time",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 101,
   "totalPointsAgainst": 104,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": -3,
   "ppg": 16.8,
   "leagueRank": 170,
   "rating": 1.2,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 1.2,
   "playerId": "cf7d6ea4-8472-467c-9685-7ef589f5f2e6"
  },
  {
   "name": "Ericka Lyn Mayer",
   "gender": "Female",
   "team": "One Love",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 110,
   "totalPointsAgainst": 113,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "442d80c7-8eaf-413b-b99b-7cdaddb08b7c",
   "winPct": 50,
   "diff": -3,
   "ppg": 18.3,
   "leagueRank": 171,
   "rating": -39.5,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 3.1,
   "strengthOfOpponents": -31.2
  },
  {
   "name": "Tao Zhu",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 5,
   "losses": 5,
   "pointsWon": 187,
   "totalPointsAgainst": 191,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": -4,
   "ppg": 18.7,
   "leagueRank": 155,
   "rating": 1.4,
   "ratingGames": 10,
   "confidence": 64,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.8,
   "playerId": "fce9f902-9a8a-4ee0-8faa-eee3226b7b91"
  },
  {
   "name": "Jonathan Gross",
   "gender": "Male",
   "team": "Colts Neck Racquet Club",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 107,
   "totalPointsAgainst": 114,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 50,
   "diff": -7,
   "ppg": 17.8,
   "leagueRank": 185,
   "rating": -4.1,
   "ratingGames": 6,
   "confidence": 46,
   "strengthOfPartners": -3.8,
   "strengthOfOpponents": -4.7,
   "playerId": "549f3426-e486-41a7-ac30-9666c61da3c5"
  },
  {
   "name": "Jennifer Taddeo",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton Strikers",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 2,
   "losses": 2,
   "pointsWon": 67,
   "totalPointsAgainst": 76,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 50,
   "diff": -9,
   "ppg": 16.8,
   "leagueRank": 248,
   "rating": -1.9,
   "ratingGames": 4,
   "confidence": 41,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.7,
   "playerId": "6d1eb271-9f12-4102-a818-e1c6e64048d2"
  },
  {
   "name": "Michael Burns",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 142,
   "totalPointsAgainst": 152,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": -10,
   "ppg": 17.8,
   "leagueRank": 174,
   "rating": -0.9,
   "ratingGames": 8,
   "confidence": 56,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.1,
   "playerId": "8142380a-a08e-4510-9c99-7bc928b665ed"
  },
  {
   "name": "Mary Foster",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton Prime Time",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 93,
   "totalPointsAgainst": 104,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 50,
   "diff": -11,
   "ppg": 15.5,
   "leagueRank": 200,
   "rating": -0.4,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.9,
   "playerId": "71b7fe55-42fb-4b59-a77c-c14d62384125"
  },
  {
   "name": "Michele Collins",
   "gender": "Female",
   "team": "One Love",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 10,
   "wins": 5,
   "losses": 5,
   "pointsWon": 181,
   "totalPointsAgainst": 193,
   "mixedWins": 4,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": -12,
   "ppg": 18.1,
   "leagueRank": 175,
   "rating": 9.7,
   "ratingGames": 10,
   "confidence": 61,
   "strengthOfPartners": 7.2,
   "strengthOfOpponents": 11,
   "playerId": "b2b07a6e-b0b0-4040-94ae-9f93af110941"
  },
  {
   "name": "Christine Strasser",
   "gender": "Female",
   "team": "PKLD",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 2,
   "losses": 2,
   "pointsWon": 66,
   "totalPointsAgainst": 78,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 50,
   "diff": -12,
   "ppg": 16.5,
   "leagueRank": 240,
   "rating": -0.5,
   "ratingGames": 4,
   "confidence": 40,
   "strengthOfPartners": -5.3,
   "strengthOfOpponents": -1.6,
   "playerId": "d4812653-0565-4e52-a63f-901d22ab86cf"
  },
  {
   "name": "Tracy Narag",
   "gender": "Female",
   "team": "Pickleball Palace Blue",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 101,
   "totalPointsAgainst": 114,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": -13,
   "ppg": 16.8,
   "leagueRank": 192,
   "rating": -0.3,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.8,
   "playerId": "bc3af4c8-b7d2-4f23-a2c2-c7d04191ac89"
  },
  {
   "name": "Scott Gardo",
   "gender": "Male",
   "team": "Forward",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 7,
   "losses": 7,
   "pointsWon": 242,
   "totalPointsAgainst": 258,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": -16,
   "ppg": 17.3,
   "leagueRank": 199,
   "rating": -1.3,
   "ratingGames": 14,
   "confidence": 67,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.3,
   "playerId": "2580158f-1c0c-4a5a-8a0c-b48d2c1f0067"
  },
  {
   "name": "Freddy Alicea",
   "gender": "Male",
   "team": "PKLD",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 6,
   "losses": 7,
   "pointsWon": 246,
   "totalPointsAgainst": 241,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 46.2,
   "diff": 5,
   "ppg": 18.9,
   "leagueRank": 168,
   "rating": -7.7,
   "ratingGames": 13,
   "confidence": 64,
   "strengthOfPartners": -3.5,
   "strengthOfOpponents": -7,
   "playerId": "66505a6b-2dfe-4454-b71b-e3fdd2b7a692"
  },
  {
   "name": "Lauren Ricks",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 5,
   "losses": 6,
   "pointsWon": 209,
   "totalPointsAgainst": 186,
   "mixedWins": 2,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 45.5,
   "diff": 23,
   "ppg": 19,
   "leagueRank": 156,
   "rating": 0.8,
   "ratingGames": 11,
   "confidence": 65,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.1,
   "playerId": "07e276d3-773e-4a62-865e-4248969ec4d3"
  },
  {
   "name": "Martyn Babitz",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 5,
   "losses": 6,
   "pointsWon": 207,
   "totalPointsAgainst": 208,
   "mixedWins": 2,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 45.5,
   "diff": -1,
   "ppg": 18.8,
   "leagueRank": 173,
   "rating": -0.3,
   "ratingGames": 11,
   "confidence": 63,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0,
   "playerId": "cf328b8f-9626-4bdf-8069-da6d0f8b17e9"
  },
  {
   "name": "Amy Santopietro",
   "gender": "Female",
   "team": "One Love",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 5,
   "losses": 6,
   "pointsWon": 194,
   "totalPointsAgainst": 205,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 45.5,
   "diff": -11,
   "ppg": 17.6,
   "leagueRank": 190,
   "rating": -28.9,
   "ratingGames": 11,
   "confidence": 64,
   "strengthOfPartners": 37.5,
   "strengthOfOpponents": -0.5,
   "playerId": "894ef6a1-ee5a-4729-bee3-f11f57c22e16"
  },
  {
   "name": "Carolyn King",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 136,
   "totalPointsAgainst": 131,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 42.9,
   "diff": 5,
   "ppg": 19.4,
   "leagueRank": 166,
   "rating": 0.2,
   "ratingGames": 7,
   "confidence": 50,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.3,
   "playerId": "a22b2393-4aae-4ee0-8e9c-7e3b386f9f0e"
  },
  {
   "name": "Corey Abrams",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 133,
   "totalPointsAgainst": 130,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "1a37dcd5-8896-4e3e-8219-898b6a418e86",
   "winPct": 42.9,
   "diff": 3,
   "ppg": 19,
   "leagueRank": 165,
   "rating": 1.1,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 1.2
  },
  {
   "name": "Daniel Ryan",
   "gender": "Male",
   "team": "Life Time Red Bank",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 127,
   "totalPointsAgainst": 127,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 42.9,
   "diff": 0,
   "ppg": 18.1,
   "leagueRank": 99,
   "rating": -2.8,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": 11.5,
   "strengthOfOpponents": 3.5,
   "playerId": "d3981774-293f-436c-96ce-b08158d31860"
  },
  {
   "name": "Audrey Brisson",
   "gender": "Female",
   "team": "Jersey Devil",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 130,
   "totalPointsAgainst": 136,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 42.9,
   "diff": -6,
   "ppg": 18.6,
   "leagueRank": 188,
   "rating": 0.1,
   "ratingGames": 7,
   "confidence": 54,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.7,
   "playerId": "1bec31ec-6396-4b0a-826c-831ae5df347e"
  },
  {
   "name": "Dennis Tenorio",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 126,
   "totalPointsAgainst": 132,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 42.9,
   "diff": -6,
   "ppg": 18,
   "leagueRank": 164,
   "rating": -0.4,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.4,
   "playerId": "2563bcb0-eff4-4311-8e03-9a21b61691a0"
  },
  {
   "name": "Michele Iacono",
   "gender": "Female",
   "team": "Colts Neck Racquet Club",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 122,
   "totalPointsAgainst": 128,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 42.9,
   "diff": -6,
   "ppg": 17.4,
   "leagueRank": 257,
   "rating": -2.4,
   "ratingGames": 7,
   "confidence": 56,
   "strengthOfPartners": -2.8,
   "strengthOfOpponents": -2.9,
   "playerId": "396a1928-4154-4d64-9ac3-e499acc6cd31"
  },
  {
   "name": "Heidi Weinroth",
   "gender": "Female",
   "team": "Jersey Devil",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 132,
   "totalPointsAgainst": 139,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 42.9,
   "diff": -7,
   "ppg": 18.9,
   "leagueRank": 186,
   "rating": -0.5,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.5,
   "playerId": "5ccea74f-290a-4648-b0fd-2a8b7d9fc6d2"
  },
  {
   "name": "Jean Knab",
   "gender": "Female",
   "team": "Mercer Bucks",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 122,
   "totalPointsAgainst": 130,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 42.9,
   "diff": -8,
   "ppg": 17.4,
   "leagueRank": 194,
   "rating": -0.1,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.5,
   "playerId": "abce612c-0edd-4b72-ab5a-f1983c38f545"
  },
  {
   "name": "Amy Moore",
   "gender": "Female",
   "team": "Jersey Devil",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 127,
   "totalPointsAgainst": 135,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 42.9,
   "diff": -8,
   "ppg": 18.1,
   "leagueRank": 196,
   "rating": -0.5,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.5,
   "playerId": "c037ad35-3550-447f-af7f-f62674d0c1ac"
  },
  {
   "name": "Chris Hannah",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 5,
   "losses": 7,
   "pointsWon": 215,
   "totalPointsAgainst": 211,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 41.7,
   "diff": 4,
   "ppg": 17.9,
   "leagueRank": 187,
   "rating": -0.3,
   "ratingGames": 12,
   "confidence": 65,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0,
   "playerId": "4be457d0-c765-45af-b64d-da383c437a53"
  },
  {
   "name": "Paul Glickenhaus",
   "gender": "Male",
   "team": "Monroe",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 5,
   "losses": 7,
   "pointsWon": 202,
   "totalPointsAgainst": 219,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 41.7,
   "diff": -17,
   "ppg": 16.8,
   "leagueRank": 209,
   "rating": -9.1,
   "ratingGames": 12,
   "confidence": 67,
   "strengthOfPartners": -6.5,
   "strengthOfOpponents": -8.6,
   "playerId": "7a41c8d6-ca5f-4bc5-8299-9e63b5ce97cd"
  },
  {
   "name": "Xiaojun Yuan",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 5,
   "losses": 7,
   "pointsWon": 194,
   "totalPointsAgainst": 229,
   "mixedWins": 3,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "8f21d0e1-3bff-42d5-a59a-f8240b2b7eb2",
   "winPct": 41.7,
   "diff": -35,
   "ppg": 16.2,
   "leagueRank": 218,
   "rating": -0.4,
   "ratingGames": 12,
   "confidence": 67,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 1.5
  },
  {
   "name": "Noach Shapiro",
   "gender": "Male",
   "team": "Pickleball Palace Black",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 95,
   "totalPointsAgainst": 85,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 40,
   "diff": 10,
   "ppg": 19,
   "leagueRank": 182,
   "rating": -0.4,
   "ratingGames": 5,
   "confidence": 43,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -1,
   "playerId": "aaedba87-275e-40f9-8683-a1db0d570cd7"
  },
  {
   "name": "Mylene Tenorio",
   "gender": "Female",
   "team": "Picklr Fair Lawn",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 92,
   "totalPointsAgainst": 87,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 40,
   "diff": 5,
   "ppg": 18.4,
   "leagueRank": 141,
   "rating": 0.2,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.2,
   "playerId": "ddd5dc5f-551a-4cc1-b809-7d215e0f1eef"
  },
  {
   "name": "Kelly Mcbride",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 88,
   "totalPointsAgainst": 87,
   "mixedWins": 0,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "415eebaa-9058-4ccd-9b55-1641fe744bed",
   "winPct": 40,
   "diff": 1,
   "ppg": 17.6,
   "leagueRank": 179,
   "rating": 1.4,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 1.1
  },
  {
   "name": "Sandy Cohen",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 86,
   "totalPointsAgainst": 88,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "daa313b5-4017-4281-9fb9-b7baabdb5d30",
   "winPct": 40,
   "diff": -2,
   "ppg": 17.2,
   "leagueRank": 189,
   "rating": 1,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.8
  },
  {
   "name": "Eleni Leone",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 89,
   "totalPointsAgainst": 92,
   "mixedWins": 1,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 40,
   "diff": -3,
   "ppg": 17.8,
   "leagueRank": 214,
   "rating": -1.3,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.4,
   "playerId": "2e5dc033-4c92-4dbf-b52a-5e29efc8d009"
  },
  {
   "name": "Patty Direzze",
   "gender": "Female",
   "team": "Picklr Fair Lawn",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 96,
   "totalPointsAgainst": 100,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 40,
   "diff": -4,
   "ppg": 19.2,
   "leagueRank": 137,
   "rating": -1.2,
   "ratingGames": 5,
   "confidence": 41,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.6,
   "playerId": "826ca41a-b56b-4688-9a30-330a67e541f3"
  },
  {
   "name": "Karen Austin",
   "gender": "Female",
   "team": "Dill Dinkers Newport",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 81,
   "totalPointsAgainst": 91,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 40,
   "diff": -10,
   "ppg": 16.2,
   "leagueRank": 208,
   "rating": 0.2,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": -2,
   "strengthOfOpponents": 0.2,
   "playerId": "f704be9a-6fb6-4107-bc74-423326f9e46e"
  },
  {
   "name": "Mark Baker",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 88,
   "totalPointsAgainst": 100,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 40,
   "diff": -12,
   "ppg": 17.6,
   "leagueRank": 276,
   "rating": -2.4,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.6,
   "playerId": "2edb3f79-df7a-4e92-a4d5-e78774a90e92"
  },
  {
   "name": "Erik Harrison",
   "gender": "Male",
   "team": "One Love",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 4,
   "losses": 6,
   "pointsWon": 180,
   "totalPointsAgainst": 193,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 40,
   "diff": -13,
   "ppg": 18,
   "leagueRank": 202,
   "rating": 11,
   "ratingGames": 10,
   "confidence": 62,
   "strengthOfPartners": -2.7,
   "strengthOfOpponents": 7,
   "playerId": "f988ea5f-06b9-477c-88ee-1563d1c8ecfa"
  },
  {
   "name": "Marie Granberg",
   "gender": "Female",
   "team": "Premiere Dinkers",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 80,
   "totalPointsAgainst": 94,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 40,
   "diff": -14,
   "ppg": 16,
   "leagueRank": 232,
   "rating": -8.1,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -5.2,
   "playerId": "5dc61395-a860-4a13-a909-ac514c1055af"
  },
  {
   "name": "Erica Marcus",
   "gender": "Female",
   "team": "One Love",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 81,
   "totalPointsAgainst": 97,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 40,
   "diff": -16,
   "ppg": 16.2,
   "leagueRank": 236,
   "rating": 8.6,
   "ratingGames": 5,
   "confidence": 43,
   "strengthOfPartners": 12.8,
   "strengthOfOpponents": 15.7,
   "playerId": "79f3d36c-20e8-4e22-bf51-faf37d039ac4"
  },
  {
   "name": "Petra Jones",
   "gender": "Female",
   "team": "PKLD",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 77,
   "totalPointsAgainst": 94,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 40,
   "diff": -17,
   "ppg": 15.4,
   "leagueRank": 241,
   "rating": -2.1,
   "ratingGames": 5,
   "confidence": 42,
   "strengthOfPartners": -2.3,
   "strengthOfOpponents": -1.3,
   "playerId": "fae801e4-0589-4d19-a58b-2c4d3586299a"
  },
  {
   "name": "Bob Debarge",
   "gender": "Male",
   "team": "Monroe",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 13,
   "wins": 5,
   "losses": 8,
   "pointsWon": 236,
   "totalPointsAgainst": 240,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 38.5,
   "diff": -4,
   "ppg": 18.2,
   "leagueRank": 191,
   "rating": -13.2,
   "ratingGames": 13,
   "confidence": 68,
   "strengthOfPartners": -8.9,
   "strengthOfOpponents": -12.9,
   "playerId": "e0d98c57-92dd-4719-ab14-3635205f3328"
  },
  {
   "name": "Karen Rosenberg",
   "gender": "Female",
   "team": "PKLD",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 13,
   "wins": 5,
   "losses": 8,
   "pointsWon": 236,
   "totalPointsAgainst": 252,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 38.5,
   "diff": -16,
   "ppg": 18.2,
   "leagueRank": 213,
   "rating": -3.7,
   "ratingGames": 13,
   "confidence": 68,
   "strengthOfPartners": -4.1,
   "strengthOfOpponents": -3.9,
   "playerId": "17fc1097-95ae-4095-a83d-ca9124bef274"
  },
  {
   "name": "Pamela Toy",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 5,
   "losses": 8,
   "pointsWon": 222,
   "totalPointsAgainst": 254,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "53a2fafe-37e7-4673-ae8d-a6c36cf06003",
   "winPct": 38.5,
   "diff": -32,
   "ppg": 17.1,
   "leagueRank": 212,
   "rating": 0.6,
   "ratingGames": 13,
   "confidence": 68,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 1.3
  },
  {
   "name": "Paul Mcalary",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 145,
   "totalPointsAgainst": 155,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 37.5,
   "diff": -10,
   "ppg": 18.1,
   "leagueRank": 201,
   "rating": -1.2,
   "ratingGames": 8,
   "confidence": 57,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.4,
   "playerId": "4b2fda63-a536-4730-9140-4a372b1726e9"
  },
  {
   "name": "Derik Lochtenbergh",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 141,
   "totalPointsAgainst": 157,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 37.5,
   "diff": -16,
   "ppg": 17.6,
   "leagueRank": 207,
   "rating": 1.2,
   "ratingGames": 8,
   "confidence": 54,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 1.4,
   "playerId": "cf71e3c3-dee4-401c-a276-afd72a53dc5a"
  },
  {
   "name": "Felix Soto",
   "gender": "Male",
   "team": "Premiere Aces",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 145,
   "totalPointsAgainst": 162,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 37.5,
   "diff": -17,
   "ppg": 18.1,
   "leagueRank": 438,
   "rating": 5.1,
   "ratingGames": 8,
   "confidence": 56,
   "strengthOfPartners": -30.5,
   "strengthOfOpponents": -10.4,
   "playerId": "8db2af6c-d2cf-4613-a2c3-f512de991c85"
  },
  {
   "name": "Jerry Ridder",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 131,
   "totalPointsAgainst": 159,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "17d83f5c-38ad-4048-afbb-7302f3aff397",
   "winPct": 37.5,
   "diff": -28,
   "ppg": 16.4,
   "leagueRank": 224,
   "rating": -1,
   "ratingGames": 8,
   "confidence": 53,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.5
  },
  {
   "name": "Sherry Silinger",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 128,
   "totalPointsAgainst": 158,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "e3874889-50a3-472f-aada-20f41ce1bc3f",
   "winPct": 37.5,
   "diff": -30,
   "ppg": 16,
   "leagueRank": 230,
   "rating": -0.2,
   "ratingGames": 8,
   "confidence": 52,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 1
  },
  {
   "name": "Brenda Mee",
   "gender": "Female",
   "team": "One Love",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 4,
   "losses": 7,
   "pointsWon": 190,
   "totalPointsAgainst": 219,
   "mixedWins": 2,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 36.4,
   "diff": -29,
   "ppg": 17.3,
   "leagueRank": 231,
   "rating": 129,
   "ratingGames": 11,
   "confidence": 64,
   "strengthOfPartners": -2.9,
   "strengthOfOpponents": -2.9,
   "playerId": "797026a4-96ca-4435-bab9-3cbc13655e20"
  },
  {
   "name": "Karen Chin",
   "gender": "Female",
   "team": "Premiere Dinkers",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 5,
   "losses": 9,
   "pointsWon": 255,
   "totalPointsAgainst": 268,
   "mixedWins": 3,
   "mixedLosses": 5,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 35.7,
   "diff": -13,
   "ppg": 18.2,
   "leagueRank": 210,
   "rating": 32.4,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": -45.5,
   "strengthOfOpponents": -1.5,
   "playerId": "0685c1ca-d8fb-4a1d-a039-8be856ce5c56"
  },
  {
   "name": "Wen Chang",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 5,
   "losses": 9,
   "pointsWon": 238,
   "totalPointsAgainst": 271,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 35.7,
   "diff": -33,
   "ppg": 17,
   "leagueRank": 219,
   "rating": 0,
   "ratingGames": 14,
   "confidence": 70,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 0.5,
   "playerId": "9a0d5103-b8d7-4b5b-a890-59a6ec5fb115"
  },
  {
   "name": "Marita Dow",
   "gender": "Female",
   "team": "PickleRage Union County",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 111,
   "totalPointsAgainst": 107,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 33.3,
   "diff": 4,
   "ppg": 18.5,
   "leagueRank": 274,
   "rating": -0.4,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.4,
   "playerId": "9de9a96a-2ff8-49eb-b59f-1e898a7c07de"
  },
  {
   "name": "Erica Ruggieri",
   "gender": "Female",
   "team": "Life Time Red Bank",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 105,
   "totalPointsAgainst": 108,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 33.3,
   "diff": -3,
   "ppg": 17.5,
   "leagueRank": 151,
   "rating": 22.6,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": 24.1,
   "strengthOfOpponents": 31.1,
   "playerId": "c9070b8b-ce6e-46e7-a724-bd168579c596"
  },
  {
   "name": "Cindy Suter",
   "gender": "Female",
   "team": "Mercer Bucks",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 107,
   "totalPointsAgainst": 113,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 33.3,
   "diff": -6,
   "ppg": 17.8,
   "leagueRank": 206,
   "rating": 0.6,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.5,
   "playerId": "e02b78d9-59ab-45d4-b11c-887d749a7da6"
  },
  {
   "name": "Pete Dunn",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 113,
   "totalPointsAgainst": 119,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 3,
   "playerId": "8e45f538-d95a-4554-9ccf-443a06b5a89e",
   "winPct": 33.3,
   "diff": -6,
   "ppg": 18.8,
   "leagueRank": 195,
   "rating": -0.1,
   "ratingGames": 6,
   "confidence": 47,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.3
  },
  {
   "name": "Lynn Quinn",
   "gender": "Female",
   "team": "Pickleball Palace Blue",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 111,
   "totalPointsAgainst": 118,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 33.3,
   "diff": -7,
   "ppg": 18.5,
   "leagueRank": 197,
   "rating": 1.1,
   "ratingGames": 6,
   "confidence": 43,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 1.1,
   "playerId": "d6c99730-dfc7-4a86-aa1e-163058c5b8c2"
  },
  {
   "name": "Michelle Lehman",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 3,
   "wins": 1,
   "losses": 2,
   "pointsWon": 53,
   "totalPointsAgainst": 61,
   "mixedWins": 1,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 33.3,
   "diff": -8,
   "ppg": 17.7,
   "leagueRank": 304,
   "rating": -0.9,
   "ratingGames": 3,
   "confidence": 35,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": 1.2,
   "playerId": "e6d3fc2c-be78-47b3-ba8f-ac978e0c33af"
  },
  {
   "name": "Michael Salerno",
   "gender": "Male",
   "team": "Colts Neck Racquet Club",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 104,
   "totalPointsAgainst": 114,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 33.3,
   "diff": -10,
   "ppg": 17.3,
   "leagueRank": 264,
   "rating": -2.6,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": -2.5,
   "strengthOfOpponents": -2.6,
   "playerId": "d580012d-5954-4900-94db-82fa10dc97b0"
  },
  {
   "name": "Nghia Bui",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 104,
   "totalPointsAgainst": 115,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 33.3,
   "diff": -11,
   "ppg": 17.3,
   "leagueRank": 217,
   "rating": -0.3,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 1.1,
   "playerId": "c8d634ab-9452-4ea2-8b66-20db1aca3a43"
  },
  {
   "name": "Brian Schartz",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 102,
   "totalPointsAgainst": 114,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 33.3,
   "diff": -12,
   "ppg": 17,
   "leagueRank": 247,
   "rating": -1.6,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.2,
   "playerId": "6d468ccd-ec39-47be-8f06-028c695af323"
  },
  {
   "name": "Todd Gelfand",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 104,
   "totalPointsAgainst": 118,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 33.3,
   "diff": -14,
   "ppg": 17.3,
   "leagueRank": 221,
   "rating": -0.3,
   "ratingGames": 6,
   "confidence": 46,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.3,
   "playerId": "370d2bae-330f-4377-b277-2ad2b1b6937e"
  },
  {
   "name": "Marianne Rosato",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 105,
   "totalPointsAgainst": 119,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 33.3,
   "diff": -14,
   "ppg": 17.5,
   "leagueRank": 220,
   "rating": -0.2,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.7,
   "playerId": "c6fa0543-ddb2-46bf-83dc-f08f731c3eb3"
  },
  {
   "name": "Feng Zhang",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 108,
   "totalPointsAgainst": 122,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "db7a2656-a6f9-4a16-a9b6-2edcbd009e55",
   "winPct": 33.3,
   "diff": -14,
   "ppg": 18,
   "leagueRank": 222,
   "rating": -1.2,
   "ratingGames": 6,
   "confidence": 46,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.1
  },
  {
   "name": "Dino Del Rosario",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton Prime Time",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 100,
   "totalPointsAgainst": 115,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 33.3,
   "diff": -15,
   "ppg": 16.7,
   "leagueRank": 227,
   "rating": 0.3,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 1.5,
   "playerId": "365d44e5-260b-4d47-95db-ae71ef319e15"
  },
  {
   "name": "Barbara Hand",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 101,
   "totalPointsAgainst": 116,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 33.3,
   "diff": -15,
   "ppg": 16.8,
   "leagueRank": 229,
   "rating": 0,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 1.4,
   "playerId": "a04312ab-d364-478d-8329-503d278a6824"
  },
  {
   "name": "Mark Zamkoff",
   "gender": "Male",
   "team": "Life Time Red Bank",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 101,
   "totalPointsAgainst": 118,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 33.3,
   "diff": -17,
   "ppg": 16.8,
   "leagueRank": 198,
   "rating": 11.2,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": 13.6,
   "strengthOfOpponents": 17.5,
   "playerId": "4e4deaa6-3de9-450b-bfb2-1d86752d92ab"
  },
  {
   "name": "Daniel Brennan",
   "gender": "Male",
   "team": "Colts Neck Racquet Club",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 93,
   "totalPointsAgainst": 111,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 33.3,
   "diff": -18,
   "ppg": 15.5,
   "leagueRank": 253,
   "rating": -3.8,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": -2.5,
   "strengthOfOpponents": -3,
   "playerId": "11ea22dc-50d3-47ee-8189-89c6f976ca51"
  },
  {
   "name": "Bill Vit",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 102,
   "totalPointsAgainst": 120,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 33.3,
   "diff": -18,
   "ppg": 17,
   "leagueRank": 225,
   "rating": 0.1,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0.8,
   "playerId": "1993029d-4e84-416d-a8aa-48fde81e5ad9"
  },
  {
   "name": "Richard Ricciardi",
   "gender": "Male",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 100,
   "totalPointsAgainst": 119,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 33.3,
   "diff": -19,
   "ppg": 16.7,
   "leagueRank": 246,
   "rating": 15.9,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": -8.2,
   "strengthOfOpponents": 10.7,
   "playerId": "705bad48-cc2d-40fe-b96f-409996010d0d"
  },
  {
   "name": "Denise Macfarlane",
   "gender": "Female",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 99,
   "totalPointsAgainst": 122,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 33.3,
   "diff": -23,
   "ppg": 16.5,
   "leagueRank": 244,
   "rating": -1.2,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": -11,
   "strengthOfOpponents": -4.6,
   "playerId": "e1bab994-3d01-403e-9147-91c845803ca2"
  },
  {
   "name": "Ken Gross",
   "gender": "Male",
   "team": "Mercer Bucks",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 92,
   "totalPointsAgainst": 121,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 33.3,
   "diff": -29,
   "ppg": 15.3,
   "leagueRank": 258,
   "rating": -1.3,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.8,
   "playerId": "f71dc5e5-ec39-4753-9b37-0c23c8848953"
  },
  {
   "name": "Manuela Caiati",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 3,
   "losses": 7,
   "pointsWon": 150,
   "totalPointsAgainst": 202,
   "mixedWins": 1,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 30,
   "diff": -52,
   "ppg": 15,
   "leagueRank": 269,
   "rating": -1.8,
   "ratingGames": 10,
   "confidence": 61,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.9,
   "playerId": "055f3bbb-3d19-4709-b29e-0e4ad54ba0cb"
  },
  {
   "name": "Frank Iacono",
   "gender": "Male",
   "team": "Colts Neck Racquet Club",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 119,
   "totalPointsAgainst": 129,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 28.6,
   "diff": -10,
   "ppg": 17,
   "leagueRank": 251,
   "rating": -2.5,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": -2.6,
   "strengthOfOpponents": -2.5,
   "playerId": "2cccc005-6a1a-4566-98be-15805e750e49"
  },
  {
   "name": "Paul King",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 128,
   "totalPointsAgainst": 140,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 4,
   "playerId": "66e85dd2-3b39-4ebd-85cf-0244dd335889",
   "winPct": 28.6,
   "diff": -12,
   "ppg": 18.3,
   "leagueRank": 216,
   "rating": 0.7,
   "ratingGames": 7,
   "confidence": 50,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 1.3
  },
  {
   "name": "Buyi Zhang",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 125,
   "totalPointsAgainst": 141,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 3,
   "playerId": "abd55992-7237-4a92-817d-3d39388369c9",
   "winPct": 28.6,
   "diff": -16,
   "ppg": 17.9,
   "leagueRank": 238,
   "rating": -1.3,
   "ratingGames": 7,
   "confidence": 47,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.5
  },
  {
   "name": "John Hans",
   "gender": "Male",
   "team": "Premiere Aces",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 123,
   "totalPointsAgainst": 142,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 28.6,
   "diff": -19,
   "ppg": 17.6,
   "leagueRank": 228,
   "rating": 0.2,
   "ratingGames": 7,
   "confidence": 49,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0.8,
   "playerId": "ffde9017-6c1a-4fb4-947d-6a46338593ce"
  },
  {
   "name": "Sam Doctor",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 121,
   "totalPointsAgainst": 141,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 28.6,
   "diff": -20,
   "ppg": 17.3,
   "leagueRank": 233,
   "rating": 0.6,
   "ratingGames": 7,
   "confidence": 48,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": 1,
   "playerId": "3070f4fd-b54d-4aac-81e9-72ffc24c2845"
  },
  {
   "name": "Ki Keys",
   "gender": "Female",
   "team": "Premiere Aces",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 106,
   "totalPointsAgainst": 141,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "f7fc9d8b-2c1b-4931-aa5a-4bb2572392d4",
   "winPct": 28.6,
   "diff": -35,
   "ppg": 15.1,
   "leagueRank": 265,
   "rating": 0.4,
   "ratingGames": 7,
   "confidence": 51,
   "strengthOfPartners": -2.2,
   "strengthOfOpponents": 1.7
  },
  {
   "name": "Jen Ritchie",
   "gender": "Female",
   "team": "Premiere Aces",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 100,
   "totalPointsAgainst": 143,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 28.6,
   "diff": -43,
   "ppg": 14.3,
   "leagueRank": 282,
   "rating": -1.6,
   "ratingGames": 7,
   "confidence": 54,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 1.2,
   "playerId": "89740069-e9bc-4808-9d13-e7365f65169d"
  },
  {
   "name": "David Wisch",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 11,
   "wins": 3,
   "losses": 8,
   "pointsWon": 197,
   "totalPointsAgainst": 214,
   "mixedWins": 0,
   "mixedLosses": 5,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 27.3,
   "diff": -17,
   "ppg": 17.9,
   "leagueRank": 237,
   "rating": -1.4,
   "ratingGames": 11,
   "confidence": 65,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.1,
   "playerId": "9e3072fb-dce5-48d8-b320-0fe5cb411d0f"
  },
  {
   "name": "Judith Macarthur",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 3,
   "losses": 8,
   "pointsWon": 192,
   "totalPointsAgainst": 222,
   "mixedWins": 1,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 27.3,
   "diff": -30,
   "ppg": 17.5,
   "leagueRank": 235,
   "rating": 0.4,
   "ratingGames": 11,
   "confidence": 65,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0.9,
   "playerId": "ea5676f2-c36c-4c54-b9df-c6fb5926b61e"
  },
  {
   "name": "Jonathan Capeci",
   "gender": "Male",
   "team": "Forward",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 1,
   "losses": 3,
   "pointsWon": 73,
   "totalPointsAgainst": 80,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "5481b1c1-9e1f-4a36-8674-9677bed7a8cb",
   "winPct": 25,
   "diff": -7,
   "ppg": 18.3,
   "leagueRank": 281,
   "rating": -1.7,
   "ratingGames": 4,
   "confidence": 42,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.4
  },
  {
   "name": "Tom Zamojcin",
   "gender": "Male",
   "team": "Forward",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 1,
   "losses": 3,
   "pointsWon": 66,
   "totalPointsAgainst": 82,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 25,
   "diff": -16,
   "ppg": 16.5,
   "leagueRank": 307,
   "rating": -2.9,
   "ratingGames": 4,
   "confidence": 40,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.5,
   "playerId": "34431083-c759-47d8-82ca-d7d9fd8cc483"
  },
  {
   "name": "Victorino Ramos",
   "gender": "Male",
   "team": "PKLD",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 1,
   "losses": 3,
   "pointsWon": 56,
   "totalPointsAgainst": 75,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 25,
   "diff": -19,
   "ppg": 14,
   "leagueRank": 320,
   "rating": -2.5,
   "ratingGames": 4,
   "confidence": 37,
   "strengthOfPartners": -4.1,
   "strengthOfOpponents": -2.2,
   "playerId": "c25f7e12-5eab-4d47-9daa-0a6ab4ee1e01"
  },
  {
   "name": "Amy Neckes",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 3,
   "losses": 9,
   "pointsWon": 205,
   "totalPointsAgainst": 240,
   "mixedWins": 1,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 25,
   "diff": -35,
   "ppg": 17.1,
   "leagueRank": 254,
   "rating": -1.1,
   "ratingGames": 12,
   "confidence": 66,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.5,
   "playerId": "5691a68e-0367-4af2-b318-4e927e00d4d6"
  },
  {
   "name": "Karin Schneider",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 127,
   "totalPointsAgainst": 164,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "6b3df055-e504-46b4-8072-5ebded92a310",
   "winPct": 25,
   "diff": -37,
   "ppg": 15.9,
   "leagueRank": 266,
   "rating": -1.3,
   "ratingGames": 8,
   "confidence": 54,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.7
  },
  {
   "name": "Grace Brennan",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 3,
   "losses": 9,
   "pointsWon": 195,
   "totalPointsAgainst": 237,
   "mixedWins": 1,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 25,
   "diff": -42,
   "ppg": 16.3,
   "leagueRank": 255,
   "rating": -0.6,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 1.1,
   "playerId": "15778391-96b7-4888-9d08-d63b96e104ca"
  },
  {
   "name": "Alexandra Romagnolo",
   "gender": "Female",
   "team": "Premiere Dinkers",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 3,
   "losses": 9,
   "pointsWon": 198,
   "totalPointsAgainst": 242,
   "mixedWins": 1,
   "mixedLosses": 6,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 25,
   "diff": -44,
   "ppg": 16.5,
   "leagueRank": 273,
   "rating": -34,
   "ratingGames": 12,
   "confidence": 67,
   "strengthOfPartners": 6.9,
   "strengthOfOpponents": -17.4,
   "playerId": "5b2cd4fb-dda2-4578-8b82-73ad0c7153dd"
  },
  {
   "name": "John Zampini",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 118,
   "totalPointsAgainst": 163,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "368129c9-202c-459c-bdfd-da8ca04597f7",
   "winPct": 25,
   "diff": -45,
   "ppg": 14.8,
   "leagueRank": 277,
   "rating": -1.4,
   "ratingGames": 8,
   "confidence": 54,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 1.2
  },
  {
   "name": "Jill Nixon",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 3,
   "losses": 11,
   "pointsWon": 241,
   "totalPointsAgainst": 262,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 21.4,
   "diff": -21,
   "ppg": 17.2,
   "leagueRank": 234,
   "rating": 1.3,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 1.2,
   "playerId": "8c0ea31a-a5e4-49f4-b97c-703e6edfe6d2"
  },
  {
   "name": "Josephine O'Neill",
   "gender": "Female",
   "team": "Dill Dinkers Newport",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 94,
   "totalPointsAgainst": 97,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 20,
   "diff": -3,
   "ppg": 18.8,
   "leagueRank": 211,
   "rating": 1.3,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 1.3,
   "playerId": "87aec82d-09fc-40c9-8298-03c21c2a095c"
  },
  {
   "name": "Janet Bodner",
   "gender": "Female",
   "team": "One Love",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 90,
   "totalPointsAgainst": 98,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 20,
   "diff": -8,
   "ppg": 18,
   "leagueRank": 252,
   "rating": -25.9,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": -11.7,
   "strengthOfOpponents": -28.4,
   "playerId": "4e07b66d-dd15-42ea-9566-0b82e7d94c15"
  },
  {
   "name": "Jerry Margulies",
   "gender": "Male",
   "team": "Mercer Bucks",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 91,
   "totalPointsAgainst": 103,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 20,
   "diff": -12,
   "ppg": 18.2,
   "leagueRank": 239,
   "rating": 0.5,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 1,
   "playerId": "e5bf1611-3d03-4600-9e72-301e91a9db18"
  },
  {
   "name": "Bonnie Russo",
   "gender": "Female",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 87,
   "totalPointsAgainst": 101,
   "mixedWins": 0,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 20,
   "diff": -14,
   "ppg": 17.4,
   "leagueRank": 267,
   "rating": -27.4,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": -13.8,
   "strengthOfOpponents": -30.2,
   "playerId": "c32a3777-ab2f-457c-9232-39bee809dfc9"
  },
  {
   "name": "Judy Williamson",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton Prime Time",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 82,
   "totalPointsAgainst": 96,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 20,
   "diff": -14,
   "ppg": 16.4,
   "leagueRank": 263,
   "rating": -0.9,
   "ratingGames": 5,
   "confidence": 44,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": -0.3,
   "playerId": "e646e3ee-5e39-48c7-933f-e567af0de814"
  },
  {
   "name": "Mark Garner",
   "gender": "Male",
   "team": "Pickleball Palace Blue",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 86,
   "totalPointsAgainst": 103,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 20,
   "diff": -17,
   "ppg": 17.2,
   "leagueRank": 259,
   "rating": -0.8,
   "ratingGames": 5,
   "confidence": 44,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 1.1,
   "playerId": "c9e3d3ee-24e9-437d-b770-fb4a3b5a37b3"
  },
  {
   "name": "Michele Anthony",
   "gender": "Female",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 80,
   "totalPointsAgainst": 98,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 20,
   "diff": -18,
   "ppg": 16,
   "leagueRank": 280,
   "rating": -23.3,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": -25,
   "strengthOfOpponents": -31.7,
   "playerId": "8d58ade4-bdf5-4a43-8e5f-824fd1ae6f61"
  },
  {
   "name": "Lisa Munjack",
   "gender": "Female",
   "team": "Pickleball Palace Blue",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 80,
   "totalPointsAgainst": 102,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 20,
   "diff": -22,
   "ppg": 16,
   "leagueRank": 288,
   "rating": -2.2,
   "ratingGames": 5,
   "confidence": 43,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.8,
   "playerId": "d04e4e93-c62c-4352-ac19-a5c7ce293763"
  },
  {
   "name": "Al Chen",
   "gender": "Male",
   "team": "Pickleball Palace Blue",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 69,
   "totalPointsAgainst": 93,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 20,
   "diff": -24,
   "ppg": 13.8,
   "leagueRank": 294,
   "rating": -0.7,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 1,
   "playerId": "d1662b32-b01f-4f6a-95a0-ff4fe00d4d32"
  },
  {
   "name": "Marleen Tuquero",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton Strikers",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 73,
   "totalPointsAgainst": 100,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 20,
   "diff": -27,
   "ppg": 14.6,
   "leagueRank": 311,
   "rating": -3.2,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0,
   "playerId": "d5598dfe-2fd3-4178-9068-6baf887689b2"
  },
  {
   "name": "Lorraine Roeller",
   "gender": "Female",
   "team": "Pickleball Palace Blue",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 74,
   "totalPointsAgainst": 103,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 20,
   "diff": -29,
   "ppg": 14.8,
   "leagueRank": 292,
   "rating": -1.3,
   "ratingGames": 5,
   "confidence": 43,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 1.2,
   "playerId": "f60538ea-d405-4f9b-a8ac-8545414538c0"
  },
  {
   "name": "Chris Owens",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 65,
   "totalPointsAgainst": 100,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 20,
   "diff": -35,
   "ppg": 13,
   "leagueRank": 301,
   "rating": -1.3,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 1.9,
   "playerId": "44fb406f-7185-4218-9c33-d9094f55f82d"
  },
  {
   "name": "Dan Carrion",
   "gender": "Male",
   "team": "One Love",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 2,
   "losses": 8,
   "pointsWon": 169,
   "totalPointsAgainst": 206,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 20,
   "diff": -37,
   "ppg": 16.9,
   "leagueRank": 275,
   "rating": -19.2,
   "ratingGames": 10,
   "confidence": 61,
   "strengthOfPartners": 19.6,
   "strengthOfOpponents": -1.8,
   "playerId": "833c4691-ccec-4d0d-b9a1-0a833728ea7f"
  },
  {
   "name": "Cindy Barban",
   "gender": "Female",
   "team": "Pickleball Palace Blue",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 60,
   "totalPointsAgainst": 103,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 20,
   "diff": -43,
   "ppg": 12,
   "leagueRank": 322,
   "rating": -3,
   "ratingGames": 5,
   "confidence": 43,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 0.9,
   "playerId": "abb97d79-dd49-46e2-ada3-d97b74daefac"
  },
  {
   "name": "Stacey Nusser",
   "gender": "Female",
   "team": "Premiere Aces",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 108,
   "totalPointsAgainst": 123,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "24f324f0-f821-45ef-8278-4b65de08b7b5",
   "winPct": 16.7,
   "diff": -15,
   "ppg": 18,
   "leagueRank": 250,
   "rating": -0.3,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": 0.2
  },
  {
   "name": "Craig Mclean",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 103,
   "totalPointsAgainst": 120,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 16.7,
   "diff": -17,
   "ppg": 17.2,
   "leagueRank": 249,
   "rating": 1.1,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 2,
   "playerId": "16ec94ae-388b-4b42-ae48-4c05203b6492"
  },
  {
   "name": "Frank Fama",
   "gender": "Male",
   "team": "Premiere Aces",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 102,
   "totalPointsAgainst": 120,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 16.7,
   "diff": -18,
   "ppg": 17,
   "leagueRank": 261,
   "rating": 0.7,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": -2.6,
   "strengthOfOpponents": 0.8,
   "playerId": "470a69e9-14e8-46ea-8442-328398904e1f"
  },
  {
   "name": "Jim Nixon",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 104,
   "totalPointsAgainst": 122,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "de5fc252-98c5-4c6a-b7eb-63b4d946c9a3",
   "winPct": 16.7,
   "diff": -18,
   "ppg": 17.3,
   "leagueRank": 260,
   "rating": -0.6,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.7
  },
  {
   "name": "Brian Schneider",
   "gender": "Male",
   "team": "Premiere Dinkers",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 100,
   "totalPointsAgainst": 121,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 16.7,
   "diff": -21,
   "ppg": 16.7,
   "leagueRank": 287,
   "rating": 21.4,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": -54,
   "strengthOfOpponents": -7.5,
   "playerId": "311c04fb-3844-4543-a0e0-877f48e24075"
  },
  {
   "name": "Irma Myersdonihoo",
   "gender": "Female",
   "team": "Dill Dinkers Newport",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 100,
   "totalPointsAgainst": 121,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 16.7,
   "diff": -21,
   "ppg": 16.7,
   "leagueRank": 262,
   "rating": 0.4,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": 1.2,
   "playerId": "84de6bd2-281f-424f-bbc0-254f670e052b"
  },
  {
   "name": "Vivian Funchion",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 99,
   "totalPointsAgainst": 121,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "c92ae5b3-6059-4c8a-ac04-fe0cbd1eb47c",
   "winPct": 16.7,
   "diff": -22,
   "ppg": 16.5,
   "leagueRank": 272,
   "rating": -0.7,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.6
  },
  {
   "name": "Diane Bracco",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 99,
   "totalPointsAgainst": 122,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 16.7,
   "diff": -23,
   "ppg": 16.5,
   "leagueRank": 268,
   "rating": 0,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": 1,
   "playerId": "c7dd526f-b8fe-4172-977d-912044350954"
  },
  {
   "name": "Karen Mcbride",
   "gender": "Female",
   "team": "Dill Dinkers Newport",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 97,
   "totalPointsAgainst": 120,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 16.7,
   "diff": -23,
   "ppg": 16.2,
   "leagueRank": 270,
   "rating": -0.3,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 1.5,
   "playerId": "f86cfd40-dc38-4bc2-88b8-e0f4c4f5bc1a"
  },
  {
   "name": "Shari Gagliardo",
   "gender": "Female",
   "team": "Colts Neck Racquet Club",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 99,
   "totalPointsAgainst": 124,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 16.7,
   "diff": -25,
   "ppg": 16.5,
   "leagueRank": 289,
   "rating": -4.3,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": -3.3,
   "strengthOfOpponents": -3.1,
   "playerId": "17772fc9-b0bb-456e-82a9-9b25ff7fbf09"
  },
  {
   "name": "Dmitry Strashnov",
   "gender": "Male",
   "team": "PKLD",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 94,
   "totalPointsAgainst": 119,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 16.7,
   "diff": -25,
   "ppg": 15.7,
   "leagueRank": 299,
   "rating": -4.5,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": -3.1,
   "strengthOfOpponents": -3.2,
   "playerId": "b613137c-a590-4ca1-9835-aff71d263018"
  },
  {
   "name": "Stanley Okpor",
   "gender": "Male",
   "team": "Pickleball Palace Blue",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 97,
   "totalPointsAgainst": 122,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 16.7,
   "diff": -25,
   "ppg": 16.2,
   "leagueRank": 279,
   "rating": -0.8,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 1.2,
   "playerId": "dba57d37-2d91-4c25-96ae-cbc287043db4"
  },
  {
   "name": "Joshua Holloway",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 91,
   "totalPointsAgainst": 120,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 16.7,
   "diff": -29,
   "ppg": 15.2,
   "leagueRank": 290,
   "rating": -1.6,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.8,
   "playerId": "b8919b61-f5ef-4322-a5fd-51364c3e0fbc"
  },
  {
   "name": "Gina Lavignera",
   "gender": "Female",
   "team": "Colts Neck Racquet Club",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 93,
   "totalPointsAgainst": 123,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 16.7,
   "diff": -30,
   "ppg": 15.5,
   "leagueRank": 297,
   "rating": -6,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": -2.7,
   "strengthOfOpponents": -3.8,
   "playerId": "a8f8cba7-d3be-4df0-8d9c-9608f102859a"
  },
  {
   "name": "Gregory Mcquibben",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton Prime Time",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 85,
   "totalPointsAgainst": 121,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 16.7,
   "diff": -36,
   "ppg": 14.2,
   "leagueRank": 296,
   "rating": -0.5,
   "ratingGames": 6,
   "confidence": 45,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 2,
   "playerId": "10110730-45a5-496c-94db-748fbe7f5bdf"
  },
  {
   "name": "Lisa Miller",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 84,
   "totalPointsAgainst": 120,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "dfb719fa-b0aa-436f-868b-0130018d36c6",
   "winPct": 16.7,
   "diff": -36,
   "ppg": 14,
   "leagueRank": 303,
   "rating": -1.7,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 1
  },
  {
   "name": "Vlad Feldman",
   "gender": "Male",
   "team": "Premiere Aces",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 80,
   "totalPointsAgainst": 122,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 16.7,
   "diff": -42,
   "ppg": 13.3,
   "leagueRank": 309,
   "rating": -1.7,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 1.2,
   "playerId": "3b1371bf-00ac-4162-aeb0-66736c008394"
  },
  {
   "name": "Charlie Belluardo",
   "gender": "Male",
   "team": "Monroe",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 12,
   "wins": 2,
   "losses": 10,
   "pointsWon": 186,
   "totalPointsAgainst": 245,
   "mixedWins": 1,
   "mixedLosses": 7,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 16.7,
   "diff": -59,
   "ppg": 15.5,
   "leagueRank": 295,
   "rating": -30.5,
   "ratingGames": 12,
   "confidence": 66,
   "strengthOfPartners": -5.9,
   "strengthOfOpponents": -20.8,
   "playerId": "cc693656-24c1-45d5-8058-30da8df62609"
  },
  {
   "name": "Albert Ciappina",
   "gender": "Male",
   "team": "Premiere Aces",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 56,
   "totalPointsAgainst": 120,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 16.7,
   "diff": -64,
   "ppg": 9.3,
   "leagueRank": 335,
   "rating": -3.7,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 1.6,
   "playerId": "9eb6f237-6b09-455a-a7c0-523fba38a70f"
  },
  {
   "name": "Joseph Koerner",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 2,
   "losses": 11,
   "pointsWon": 191,
   "totalPointsAgainst": 257,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 0,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 15.4,
   "diff": -66,
   "ppg": 14.7,
   "leagueRank": 293,
   "rating": -0.5,
   "ratingGames": 13,
   "confidence": 70,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 1.6,
   "playerId": "b49f166d-9cd4-4b86-961d-380dd8189a87"
  },
  {
   "name": "Chuck Silvester",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 126,
   "totalPointsAgainst": 140,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 14.3,
   "diff": -14,
   "ppg": 18,
   "leagueRank": 180,
   "rating": -0.7,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.7,
   "playerId": "3911a60f-cab7-4b28-9ba0-244c000980ba"
  },
  {
   "name": "Blair Lane",
   "gender": "Male",
   "team": "Life Time Red Bank",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 127,
   "totalPointsAgainst": 145,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 14.3,
   "diff": -18,
   "ppg": 18.1,
   "leagueRank": 223,
   "rating": 43.1,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": 12.3,
   "strengthOfOpponents": 41.3,
   "playerId": "9ff56e0a-03ab-4488-b27d-24150e777b03"
  },
  {
   "name": "Jason Belmont",
   "gender": "Male",
   "team": "Mercer Bucks",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 120,
   "totalPointsAgainst": 144,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 14.3,
   "diff": -24,
   "ppg": 17.1,
   "leagueRank": 271,
   "rating": -0.5,
   "ratingGames": 7,
   "confidence": 55,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 1.1,
   "playerId": "a1df4f80-0b37-4f8b-a71f-b11b6eb85f4c"
  },
  {
   "name": "Howard Eng",
   "gender": "Male",
   "team": "Mercer Bucks",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 112,
   "totalPointsAgainst": 137,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 14.3,
   "diff": -25,
   "ppg": 16,
   "leagueRank": 283,
   "rating": -0.5,
   "ratingGames": 7,
   "confidence": 54,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 1.4,
   "playerId": "7727f912-4c91-468e-bc39-42aa85e084ab"
  },
  {
   "name": "Lisa Angelini",
   "gender": "Female",
   "team": "Mercer Bucks",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 118,
   "totalPointsAgainst": 145,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 14.3,
   "diff": -27,
   "ppg": 16.9,
   "leagueRank": 285,
   "rating": -2.4,
   "ratingGames": 7,
   "confidence": 54,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.2,
   "playerId": "b79cef1c-cecc-48d4-9b14-4505bca1cce9"
  },
  {
   "name": "Farzad Shadzik",
   "gender": "Male",
   "team": "Mercer Bucks",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 114,
   "totalPointsAgainst": 142,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 14.3,
   "diff": -28,
   "ppg": 16.3,
   "leagueRank": 286,
   "rating": -1.5,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.9,
   "playerId": "f7e6727a-13ba-4c66-b148-a2f294ff640e"
  },
  {
   "name": "Apparao Avancha",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 115,
   "totalPointsAgainst": 145,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 14.3,
   "diff": -30,
   "ppg": 16.4,
   "leagueRank": 284,
   "rating": -1.9,
   "ratingGames": 7,
   "confidence": 43,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.8,
   "playerId": "d84632f4-bec0-4399-8b04-64c6ea340362"
  },
  {
   "name": "Andria Lochtenbergh",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 96,
   "totalPointsAgainst": 140,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 14.3,
   "diff": -44,
   "ppg": 13.7,
   "leagueRank": 310,
   "rating": -2.4,
   "ratingGames": 7,
   "confidence": 54,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 1.2,
   "playerId": "b624b900-f2f1-48d4-9e19-c0ff0238d34d"
  },
  {
   "name": "Scott Heist",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 2,
   "losses": 12,
   "pointsWon": 205,
   "totalPointsAgainst": 290,
   "mixedWins": 1,
   "mixedLosses": 6,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 14.3,
   "diff": -85,
   "ppg": 14.6,
   "leagueRank": 300,
   "rating": -2.8,
   "ratingGames": 14,
   "confidence": 68,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.7,
   "playerId": "43296dc0-9f07-4173-a3c4-6df92c7bbb37"
  },
  {
   "name": "Lucy Sha",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 131,
   "totalPointsAgainst": 166,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "4807af08-76d9-4c85-9e4b-c16be77b4d78",
   "winPct": 12.5,
   "diff": -35,
   "ppg": 16.4,
   "leagueRank": 278,
   "rating": -0.2,
   "ratingGames": 8,
   "confidence": 53,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 1.3
  },
  {
   "name": "Alan Carr",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 125,
   "totalPointsAgainst": 166,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "08e9f294-3f72-42c0-9e89-ca3be388b9e2",
   "winPct": 12.5,
   "diff": -41,
   "ppg": 15.6,
   "leagueRank": 291,
   "rating": -1.1,
   "ratingGames": 8,
   "confidence": 53,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 1.1
  },
  {
   "name": "Leah Greenstein",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 9,
   "wins": 1,
   "losses": 8,
   "pointsWon": 123,
   "totalPointsAgainst": 185,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 11.1,
   "diff": -62,
   "ppg": 13.7,
   "leagueRank": 318,
   "rating": -3.3,
   "ratingGames": 9,
   "confidence": 62,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.7,
   "playerId": "ca06b5ce-3001-408e-bdc6-9e183022b9f3"
  },
  {
   "name": "Tom Giunta",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 1,
   "losses": 11,
   "pointsWon": 165,
   "totalPointsAgainst": 249,
   "mixedWins": 1,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 8.3,
   "diff": -84,
   "ppg": 13.8,
   "leagueRank": 319,
   "rating": -2.8,
   "ratingGames": 12,
   "confidence": 65,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 1.6,
   "playerId": "951454ae-d2ba-4339-99de-1a47c62bbaac"
  },
  {
   "name": "Hector Lopez",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 1,
   "losses": 12,
   "pointsWon": 206,
   "totalPointsAgainst": 269,
   "mixedWins": 0,
   "mixedLosses": 7,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 4,
   "winPct": 7.7,
   "diff": -63,
   "ppg": 15.8,
   "leagueRank": 298,
   "rating": -2.2,
   "ratingGames": 13,
   "confidence": 66,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.8,
   "playerId": "e02b2266-0586-4da7-9451-b90445d145bf"
  },
  {
   "name": "Michael Ross",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 1,
   "losses": 13,
   "pointsWon": 193,
   "totalPointsAgainst": 282,
   "mixedWins": 1,
   "mixedLosses": 6,
   "genderWins": 0,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 7.1,
   "diff": -89,
   "ppg": 13.8,
   "leagueRank": 314,
   "rating": -1.3,
   "ratingGames": 14,
   "confidence": 67,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 1.9,
   "playerId": "5db691c2-51e1-4500-a9e7-60c0f303f6d0"
  },
  {
   "name": "Amanda Nguyen",
   "gender": "Female",
   "team": "PickleRage Union County",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 245,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "005fa3be-9004-46b4-a3e2-77cd8b27b08e"
  },
  {
   "name": "Reg Blaber",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 360,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "03769e99-2521-4e52-bef4-cf55e57e9460"
  },
  {
   "name": "Paula De Nisc",
   "gender": "Female",
   "team": "Premiere Aces",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 373,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "069b6990-9fae-4294-bf0a-2e428a9f763e"
  },
  {
   "name": "Rick Weiser",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 457,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "0748d687-13e0-403d-95de-28c640adaf43"
  },
  {
   "name": "Gregg Downs",
   "gender": "Male",
   "team": "Mercer Bucks",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 381,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "0956f219-4f96-47e1-958e-662675120005"
  },
  {
   "name": "Erick Matthijs",
   "gender": "Male",
   "team": "Colts Neck Racquet Club",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 203,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "10a021d2-07de-48ec-945d-c752499443a0"
  },
  {
   "name": "Tracy Leahy",
   "gender": "Female",
   "team": "Mercer Bucks",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 404,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "133dd4ec-1061-4445-9254-fd84ddd0cc5a"
  },
  {
   "name": "Jack Decicco",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 374,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "13e775b3-99f6-4eb1-b794-e5f6aff1967b"
  },
  {
   "name": "Anette Schuetz",
   "gender": "Female",
   "team": "Dill Dinkers Newport",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 434,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "156cabc5-a5d7-4235-8aa2-a5503557e479"
  },
  {
   "name": "Michael Schuller",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 181,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "19f146a7-cb7b-40cf-aed9-98bf25a18aec"
  },
  {
   "name": "Christina Samtmann",
   "gender": "Female",
   "team": "Forward",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 433,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "1c3b8ddb-6596-4a83-ac12-05bfbf4610ce"
  },
  {
   "name": "Anthony Viola",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 452,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "2e35e9c0-513c-4f32-bd0d-d4f79dc29345"
  },
  {
   "name": "Danny Pellegrini",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 426,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "32df945d-84b6-409d-b2ab-109d6dc1e3de"
  },
  {
   "name": "Kristin Duva",
   "gender": "Female",
   "team": "Pickleball Palace Black",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 382,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "33bedbfd-6715-4614-8662-650a8bc4c678"
  },
  {
   "name": "Pete Certo",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 365,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "3572118b-4e01-4e64-96a4-a7cc80869425"
  },
  {
   "name": "Bill Gold",
   "gender": "Male",
   "team": "Pickleball Palace Blue",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 387,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "368337c0-e1f6-4cd2-89ec-41b1e06042ea"
  },
  {
   "name": "Renee Froeberg",
   "gender": "Female",
   "team": "Picklr Fair Lawn",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 66,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "3804b024-a017-4fa2-90d3-5d726e764f44"
  },
  {
   "name": "Keith Seager",
   "gender": "Male",
   "team": "One Love",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 435,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "3beead1c-6ded-4df1-9c68-1687ff5c29e8"
  },
  {
   "name": "Christy Walker",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 453,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "4076828c-aa6f-47c8-b495-55eed2afe29d"
  },
  {
   "name": "Albert Tiegs",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 447,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "428e1d85-29dc-43ed-9458-eec3cf6ae52d"
  },
  {
   "name": "Michele Latwis",
   "gender": "Female",
   "team": "PKLD",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 403,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "4badaa4b-ba4d-4e2b-8bb3-b9d10864142b"
  },
  {
   "name": "John Stassi",
   "gender": "Male",
   "team": "Premiere Dinkers",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 442,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "52bf7c5c-a7a8-4aa1-8943-94e370a74e40"
  },
  {
   "name": "James Xiong",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 461,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "53b9424e-9645-4e0e-a582-5023f17b9ebd"
  },
  {
   "name": "Frank Messina",
   "gender": "Male",
   "team": "Colts Neck Racquet Club",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 312,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "555bc2a7-4111-4cde-bc1d-30dbec8fbd9f"
  },
  {
   "name": "Leo Decker",
   "gender": "Male",
   "team": "Life Time Red Bank",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 1,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "5c87fe0e-e161-49a5-b92c-7a47b37f28eb"
  },
  {
   "name": "Ken Bienkowski",
   "gender": "Male",
   "team": "Pickleball Palace Black",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 359,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "5cc85746-e4a6-432e-bfe5-8166f02867ce"
  },
  {
   "name": "Jimbo Jimenez",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton Prime Time",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 398,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "60a4c469-c1b6-4d90-b6e9-5dfdbde95aab"
  },
  {
   "name": "Joe Miller",
   "gender": "Male",
   "team": "Mercer Bucks",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 415,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "60dd7215-9a24-459a-ba3c-43e91f044239"
  },
  {
   "name": "Arthur Gary Dellostritto",
   "gender": "Male",
   "team": "Colts Neck Racquet Club",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 376,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "63811fd7-7206-48a8-a427-4463da0fc4f8"
  },
  {
   "name": "Doreen Calcagno",
   "gender": "Female",
   "team": "Premiere Aces",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 363,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "66f03f68-32e7-4619-b10b-043ec13b121a"
  },
  {
   "name": "Lori Pinelli",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton Prime Time",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 429,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "6a1ee7ea-3109-4ab1-80c9-8beb7181907e"
  },
  {
   "name": "Debbie Spurr",
   "gender": "Female",
   "team": "Pickleball Palace Black",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 439,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "6bf05f56-b25f-4e40-9bb9-986d4aebda92"
  },
  {
   "name": "David Barban",
   "gender": "Male",
   "team": "Pickleball Palace Blue",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 355,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "6ffc191a-d2b1-4839-bd30-f93b5f9cd4d9"
  },
  {
   "name": "Jonathan Pang",
   "gender": "Male",
   "team": "Mercer Bucks",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 423,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "7c7117d7-1b77-4c7d-b520-74b3fd9d7be7"
  },
  {
   "name": "Carleen Thompson",
   "gender": "Female",
   "team": "Premiere Aces",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 446,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "80d3657c-1570-4969-8584-dcebedb261b4"
  },
  {
   "name": "Laura Van Dyke",
   "gender": "Female",
   "team": "Pickleball Palace Blue",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 450,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "80f9d87d-c824-4680-8d52-6c565388972e"
  },
  {
   "name": "Erica Stevens",
   "gender": "Female",
   "team": "Dill Dinkers Newport",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 443,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "8433ad3d-29ba-48ec-8e0a-2e8552a12fcb"
  },
  {
   "name": "Eldon Carandan",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 243,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "888253bb-161e-4029-9170-1f7002abdbee"
  },
  {
   "name": "Joseph Calcagno",
   "gender": "Male",
   "team": "Premiere Aces",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 364,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "8913a682-b086-4e45-98fa-4b8bd871f250"
  },
  {
   "name": "Rob Oddy",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 420,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "89ba31d0-20be-4443-b93e-aab0866ad62d"
  },
  {
   "name": "Matt Mcnulty",
   "gender": "Male",
   "team": "Pickleball Palace Black",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 414,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "8d5bd62d-d038-491c-a8c1-1f276a0ed0dc"
  },
  {
   "name": "Terri Marxen",
   "gender": "Female",
   "team": "Pickleball Palace Black",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 411,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "902886e7-a7e2-4ed6-a560-edbc523012fd"
  },
  {
   "name": "David Mccarthy",
   "gender": "Male",
   "team": "Life Time Red Bank",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 134,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "90af44f2-013b-4fa5-bf79-fc11c13ae897"
  },
  {
   "name": "Lucille Licciardello",
   "gender": "Female",
   "team": "Colts Neck Racquet Club",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 302,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "96dc9c19-55d6-432d-a17a-b3ae274f63a7"
  },
  {
   "name": "Cheryl Minerowicz",
   "gender": "Female",
   "team": "Pickleball Palace Black",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 416,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "98cf9a34-6d8e-4aed-81d1-1a6f2fe864f2"
  },
  {
   "name": "Geoffrey Baird",
   "gender": "Male",
   "team": "Pickleball Palace Blue",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 353,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "98d6ec7e-e3ac-47ce-a2a2-a000399c9e4f"
  },
  {
   "name": "Frank Marchiano",
   "gender": "Male",
   "team": "Premiere Aces",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 410,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "a2fd43d6-c9c6-42d2-8f2f-a013616ab399"
  },
  {
   "name": "Heather King",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 401,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "a3f83304-9f0d-4613-b871-ecaa6bf9c7d0"
  },
  {
   "name": "Gary Leon",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 405,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "a7163fb2-63f3-46c4-9d0d-b333eea0b503"
  },
  {
   "name": "Denise Stassi",
   "gender": "Female",
   "team": "Premiere Dinkers",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 441,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "a7a3b4ab-c0af-49d3-ae64-b784fc58d238"
  },
  {
   "name": "Audrey Lotti",
   "gender": "Female",
   "team": "Monroe",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 409,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "aa46ebc1-bcda-4333-b10b-7e1518949cb5"
  },
  {
   "name": "Peter O'Farrill",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 176,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "ab221032-e648-4f2f-bc66-a05cee00c25c"
  },
  {
   "name": "Randy Kraftsow",
   "gender": "Female",
   "team": "Forward",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 402,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "b4abc444-82dd-446c-b55e-ad3ca1610ebd"
  },
  {
   "name": "Randall Bell",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton Prime Time",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 357,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "ba70e1c6-5eb3-48a3-a0f0-77963ac31a3a"
  },
  {
   "name": "Gina Digirolamo",
   "gender": "Female",
   "team": "Premiere Aces",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 379,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "bb8e590f-a342-432c-93ed-5757fcf6eecf"
  },
  {
   "name": "Edward Verish",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 451,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "bcbd0332-5104-40b6-a2a1-78fc174a0392"
  },
  {
   "name": "Cheryl Tarby",
   "gender": "Female",
   "team": "Mercer Bucks",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 445,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "c131fed2-9bcb-427c-99c1-b507dda92320"
  },
  {
   "name": "Cindy Rossine",
   "gender": "Female",
   "team": "Colts Neck Racquet Club",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 183,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "c26c3257-4a5f-47e7-80cb-5eef4fe2868c"
  },
  {
   "name": "Lorraine Delcampo",
   "gender": "Female",
   "team": "Jersey Devil",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 375,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "c48bcd8a-9960-40d5-9c89-f19f9db11de0"
  },
  {
   "name": "Lolita Hagen",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 391,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "c4ac93eb-8c41-45e6-9ff3-026934b618b5"
  },
  {
   "name": "Diane Herbst",
   "gender": "Female",
   "team": "Pickleball Palace Black",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 394,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "cadae4ee-fcfc-42ab-bfba-86525b5df4c9"
  },
  {
   "name": "Charlene Fletcher",
   "gender": "Female",
   "team": "Pickleball Palace Black",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 385,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "d05d7514-8679-4d34-ad12-654b496f2308"
  },
  {
   "name": "Cathy Matko",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 412,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "d4b1538b-bc04-4208-b52e-5a2bd5a452a4"
  },
  {
   "name": "Linda Vilaikeo",
   "gender": "Female",
   "team": "PickleRage Union County",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 256,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "d6387c1c-d4a1-437d-86c1-da6c66811b1d"
  },
  {
   "name": "Peggy Matzen",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 413,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "d64631c2-5086-4d28-b93e-26c8661af87b"
  },
  {
   "name": "Roe Palermo",
   "gender": "Female",
   "team": "Premiere Aces",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 422,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "d86280ad-5733-417d-af40-42a66c14b874"
  },
  {
   "name": "Frances Smith",
   "gender": "Female",
   "team": "Pickleball Palace Blue",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 437,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "dede68c9-f6a4-40b6-8a2c-2eca456d4151"
  },
  {
   "name": "Oleg Goldinberg",
   "gender": "Male",
   "team": "Monroe",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 388,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "e1133097-a8a6-4076-be0f-d5024f47ccc1"
  },
  {
   "name": "Thomas Roeller",
   "gender": "Male",
   "team": "Pickleball Palace Blue",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 430,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "e77590e0-255e-4437-b56f-d6aaf80dc2af"
  },
  {
   "name": "Michael Rosenmertz",
   "gender": "Male",
   "team": "PKLD",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 431,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "e82e246e-7ff8-4f9d-9e0c-bcf5d4aa68d8"
  },
  {
   "name": "Kathy Baker",
   "gender": "Female",
   "team": "Life Time Red Bank",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 354,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "e84d93a0-c527-4a44-a896-ccc20d0ac474"
  },
  {
   "name": "Ling Tsui",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 448,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "e9eef724-5532-4330-a00b-190cfdc8a8e2"
  },
  {
   "name": "Russ Colchamiro",
   "gender": "Male",
   "team": "Pickleball Palace Blue",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 367,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "ebf3ac46-4f39-4dfd-97fa-9eb671e5fe61"
  },
  {
   "name": "Dave Darch",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 371,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "ec2ef0a6-432b-411c-ade1-9359c00587ba"
  },
  {
   "name": "Mary Hain",
   "gender": "Female",
   "team": "Forward",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 392,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "eda84f5e-5e1e-4e49-b754-eacf36917f94"
  },
  {
   "name": "Sharon Rarig",
   "gender": "Female",
   "team": "Colts Neck Racquet Club",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 242,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "f0fbd8dc-a5a3-45f7-8ca5-f0cb985f5f23"
  },
  {
   "name": "Kim Biddle",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 358,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "f37c6f74-78f5-431a-be59-e1dae5fcf37c"
  },
  {
   "name": "Tony Ursino",
   "gender": "Male",
   "team": "Monroe",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 449,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "f6ae9cd2-5152-44d6-a145-94753ac8bab2"
  },
  {
   "name": "Marie Walsh Mccarty",
   "gender": "Female",
   "team": "Life Time Red Bank",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 177,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "f7f80e1e-cebe-432b-9862-1120daaba26e"
  },
  {
   "name": "Rafael Moreano",
   "gender": "Male",
   "team": "Pickleball Palace Black",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 419,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "f919968b-e6a7-4ea2-9d1d-049898bf39f4"
  },
  {
   "name": "Edward Weinstein",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 456,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "faf49383-130d-4d3d-8de0-2348c95fe4e6"
  },
  {
   "name": "Betsy Peyton",
   "gender": "Female",
   "team": "One Love",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 0,
   "wins": 0,
   "losses": 0,
   "pointsWon": 0,
   "totalPointsAgainst": 0,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": 0,
   "ppg": 0,
   "leagueRank": 428,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "fbb519b9-fe15-4ecf-a916-8557761ca54b"
  },
  {
   "name": "Guy Ercol",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 0,
   "losses": 4,
   "pointsWon": 69,
   "totalPointsAgainst": 84,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "709ddeff-95a4-467e-8098-64cd1a332828",
   "winPct": 0,
   "diff": -15,
   "ppg": 17.3,
   "leagueRank": 323,
   "rating": -1,
   "ratingGames": 4,
   "confidence": 43,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.7
  },
  {
   "name": "Denise Caracciolo",
   "gender": "Female",
   "team": "Premiere Dinkers",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 81,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 0,
   "diff": -24,
   "ppg": 16.2,
   "leagueRank": 321,
   "rating": 16.3,
   "ratingGames": 5,
   "confidence": 44,
   "strengthOfPartners": -24.4,
   "strengthOfOpponents": 4.9,
   "playerId": "71c0464b-3b64-425f-abfa-19769bea2288"
  },
  {
   "name": "Bill Lam",
   "gender": "Male",
   "team": "Pickleball Palace Blue",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 99,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -27,
   "ppg": 16.5,
   "leagueRank": 305,
   "rating": -0.6,
   "ratingGames": 6,
   "confidence": 46,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 1.4,
   "playerId": "7fe8e4a4-6d94-4cb2-831f-23e53d4a8603"
  },
  {
   "name": "Hafeez Saheed",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 4,
   "wins": 0,
   "losses": 4,
   "pointsWon": 56,
   "totalPointsAgainst": 84,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 0,
   "diff": -28,
   "ppg": 14,
   "leagueRank": 339,
   "rating": -1.7,
   "ratingGames": 4,
   "confidence": 40,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 1.3,
   "playerId": "a0d294b1-27ed-4751-ae6c-eadf62746d20"
  },
  {
   "name": "Christine Fletcher",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 96,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 0,
   "diff": -30,
   "ppg": 16,
   "leagueRank": 308,
   "rating": -0.6,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 1.6,
   "playerId": "85b6cf96-6ca6-460f-924d-a70bce3ea487"
  },
  {
   "name": "Michelle Corbett",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton Prime Time",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 0,
   "losses": 4,
   "pointsWon": 53,
   "totalPointsAgainst": 84,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -31,
   "ppg": 13.3,
   "leagueRank": 342,
   "rating": -1.1,
   "ratingGames": 4,
   "confidence": 40,
   "strengthOfPartners": -2.7,
   "strengthOfOpponents": 1.4,
   "playerId": "4dc56079-f189-46c7-b2c6-d2951ab05d7e"
  },
  {
   "name": "Scott Walden",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 95,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "f74767f9-212a-4197-b80c-ada302226df6",
   "winPct": 0,
   "diff": -31,
   "ppg": 15.8,
   "leagueRank": 315,
   "rating": -1.7,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 0.4
  },
  {
   "name": "Amy Clayman",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 0,
   "losses": 7,
   "pointsWon": 116,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 4,
   "playerId": "b827322d-e01b-4ca5-b8ae-680982fa8cd1",
   "winPct": 0,
   "diff": -31,
   "ppg": 16.6,
   "leagueRank": 306,
   "rating": -1.2,
   "ratingGames": 7,
   "confidence": 49,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.7
  },
  {
   "name": "Eric Clayman",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 73,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "ca8205f9-30ea-4e27-a901-f4156adf6b95",
   "winPct": 0,
   "diff": -32,
   "ppg": 14.6,
   "leagueRank": 325,
   "rating": -2.3,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 0.4
  },
  {
   "name": "Claudia Dunlevy",
   "gender": "Female",
   "team": "Mercer Bucks",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 72,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -33,
   "ppg": 14.4,
   "leagueRank": 332,
   "rating": -2.6,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 1,
   "playerId": "dbfefc28-df9b-4ffb-a76b-8a53f7303a25"
  },
  {
   "name": "Deb Gray",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 92,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "1dbfbe97-7726-41af-82f5-2be34b3badd6",
   "winPct": 0,
   "diff": -34,
   "ppg": 15.3,
   "leagueRank": 317,
   "rating": -1.6,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 1.6
  },
  {
   "name": "Michael Hougentogler",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 69,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -36,
   "ppg": 13.8,
   "leagueRank": 328,
   "rating": -1.6,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 1.5,
   "playerId": "1997e1b5-dfe2-4122-96f5-404f6f4c390d"
  },
  {
   "name": "Joe Mccutchon",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 69,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -36,
   "ppg": 13.8,
   "leagueRank": 326,
   "rating": -1.6,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": 1.3,
   "playerId": "d8b7c10e-d155-4b1f-85e5-a69c47f064ae"
  },
  {
   "name": "Ed Mendoza",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton Prime Time",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 68,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -37,
   "ppg": 13.6,
   "leagueRank": 333,
   "rating": -2.7,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.7,
   "playerId": "cb4a8451-13f9-4c27-8dc6-847fea7be9b4"
  },
  {
   "name": "Charles Rhodes",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 67,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 0,
   "diff": -38,
   "ppg": 13.4,
   "leagueRank": 330,
   "rating": -2.2,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 1.5,
   "playerId": "974a3164-e331-4631-aa56-fe8b2b0acb2b"
  },
  {
   "name": "David Margraff",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 88,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "0f95f23f-ac68-44b0-81c2-7009fbcee055",
   "winPct": 0,
   "diff": -38,
   "ppg": 14.7,
   "leagueRank": 329,
   "rating": -2.5,
   "ratingGames": 6,
   "confidence": 43,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 1
  },
  {
   "name": "Tracy Waffenfeld",
   "gender": "Male",
   "team": "Pickleball Palace Blue",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 65,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -40,
   "ppg": 13,
   "leagueRank": 337,
   "rating": -3.2,
   "ratingGames": 5,
   "confidence": 42,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 0.3,
   "playerId": "2bc6c3c4-805a-4584-bbb9-6185448a3298"
  },
  {
   "name": "Gina Blahut",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 65,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -40,
   "ppg": 13,
   "leagueRank": 338,
   "rating": -3.4,
   "ratingGames": 5,
   "confidence": 43,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.4,
   "playerId": "8fb69116-2ad4-417c-ad3a-912a9b13782b"
  },
  {
   "name": "Angela Chen",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 0,
   "losses": 7,
   "pointsWon": 107,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "0eea8d08-e55e-40be-b1cd-4853b2fbb11d",
   "winPct": 0,
   "diff": -40,
   "ppg": 15.3,
   "leagueRank": 324,
   "rating": -2.3,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 1.3
  },
  {
   "name": "Sheila Dolan",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 61,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "11fa899f-b583-4990-a6ee-71f08e643d60",
   "winPct": 0,
   "diff": -44,
   "ppg": 12.2,
   "leagueRank": 340,
   "rating": -3.5,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 1.3
  },
  {
   "name": "James Carter",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 0,
   "losses": 8,
   "pointsWon": 120,
   "totalPointsAgainst": 168,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 0,
   "diff": -48,
   "ppg": 15,
   "leagueRank": 316,
   "rating": -1.4,
   "ratingGames": 8,
   "confidence": 56,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 1.3,
   "playerId": "812eedea-eef8-4f59-a41b-8c2f02f45fc1"
  },
  {
   "name": "Joseph Carrado",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton Prime Time",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 0,
   "losses": 4,
   "pointsWon": 34,
   "totalPointsAgainst": 84,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -50,
   "ppg": 8.5,
   "leagueRank": 349,
   "rating": -3.8,
   "ratingGames": 4,
   "confidence": 40,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 1.9,
   "playerId": "83ef92aa-1e74-4ef1-8a56-ce4458a80528"
  },
  {
   "name": "Warren Howard",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton Prime Time",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 54,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -51,
   "ppg": 10.8,
   "leagueRank": 341,
   "rating": -3.2,
   "ratingGames": 5,
   "confidence": 43,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": 1.4,
   "playerId": "b5b20410-43ee-4dc8-bb2b-dadb159ca3f1"
  },
  {
   "name": "Donna Fama",
   "gender": "Female",
   "team": "Premiere Aces",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 52,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "42843773-6096-4a7a-acb6-8be5b875fcf6",
   "winPct": 0,
   "diff": -53,
   "ppg": 10.4,
   "leagueRank": 345,
   "rating": -3.4,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 1.5
  },
  {
   "name": "Jennifer Genna",
   "gender": "Female",
   "team": "Dill Dinkers Newport",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 51,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -54,
   "ppg": 10.2,
   "leagueRank": 344,
   "rating": -3.8,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 1.4,
   "playerId": "3bbb4212-6e2d-4a32-b704-ee264ca9ebad"
  },
  {
   "name": "Dana Isom",
   "gender": "Female",
   "team": "Dill Dinkers Newport",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 51,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -54,
   "ppg": 10.2,
   "leagueRank": 346,
   "rating": -4.3,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 0.9,
   "playerId": "b984beff-58a1-46ab-a7f3-4fb6daa871d8"
  },
  {
   "name": "Nancy Ciappina",
   "gender": "Female",
   "team": "Premiere Aces",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 0,
   "losses": 7,
   "pointsWon": 92,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -55,
   "ppg": 13.1,
   "leagueRank": 334,
   "rating": -2.4,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 1.6,
   "playerId": "02318afc-9bde-4df3-a7b3-7f1d1da3186c"
  },
  {
   "name": "Bruce Freedman",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 70,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "7ddf77c0-349d-4332-8209-10b5cc5be62a",
   "winPct": 0,
   "diff": -56,
   "ppg": 11.7,
   "leagueRank": 343,
   "rating": -4.3,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.5
  },
  {
   "name": "Deborah Jordan",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 48,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "7625818c-612a-4d6e-8172-426379bb306a",
   "winPct": 0,
   "diff": -57,
   "ppg": 9.6,
   "leagueRank": 348,
   "rating": -4.4,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 1
  },
  {
   "name": "Irene Guile",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 0,
   "losses": 8,
   "pointsWon": 108,
   "totalPointsAgainst": 168,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "ee2b1370-05ac-455a-8be6-d2adf00a4f98",
   "winPct": 0,
   "diff": -60,
   "ppg": 13.5,
   "leagueRank": 331,
   "rating": -2.6,
   "ratingGames": 8,
   "confidence": 55,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 1.4
  },
  {
   "name": "Tracy Giunta",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 0,
   "losses": 11,
   "pointsWon": 170,
   "totalPointsAgainst": 231,
   "mixedWins": 0,
   "mixedLosses": 6,
   "genderWins": 0,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 0,
   "diff": -61,
   "ppg": 15.5,
   "leagueRank": 313,
   "rating": -2,
   "ratingGames": 11,
   "confidence": 66,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.8,
   "playerId": "0053115a-f6c0-43c0-ab0e-ec6abf16bc32"
  },
  {
   "name": "Jim Ritchie",
   "gender": "Male",
   "team": "Premiere Aces",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 11,
   "wins": 0,
   "losses": 11,
   "pointsWon": 161,
   "totalPointsAgainst": 231,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 0,
   "diff": -70,
   "ppg": 14.6,
   "leagueRank": 327,
   "rating": -3.6,
   "ratingGames": 11,
   "confidence": 66,
   "strengthOfPartners": -3.4,
   "strengthOfOpponents": -0.9,
   "playerId": "26593c53-dc79-4970-9b87-82c6fa9b3bb3"
  },
  {
   "name": "Danya George",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 0,
   "losses": 11,
   "pointsWon": 136,
   "totalPointsAgainst": 231,
   "mixedWins": 0,
   "mixedLosses": 6,
   "genderWins": 0,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -95,
   "ppg": 12.4,
   "leagueRank": 336,
   "rating": -3.1,
   "ratingGames": 11,
   "confidence": 63,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 1.8,
   "playerId": "fbaf1cdd-118b-4d51-a42e-f06908cc3f3c"
  }
 ],
 "teams": [
  {
   "name": "Pickleball Palace Black",
   "w": 1,
   "l": 0,
   "pf": 664,
   "pa": 504,
   "gw": 26,
   "gl": 6,
   "diff": 160,
   "gameDiff": 20,
   "power": 1.1,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": "Northwest",
   "podName": "Northwest",
   "fmt": {
    "mixed": [
     12,
     4
    ],
    "male": [
     7,
     1
    ],
    "female": [
     7,
     1
    ]
   }
  },
  {
   "name": "Bounce Malvern",
   "w": 2,
   "l": 0,
   "pf": 1292,
   "pa": 1025,
   "gw": 51,
   "gl": 13,
   "diff": 267,
   "gameDiff": 38,
   "power": 1.1,
   "powerRank": 2,
   "pod": 2,
   "reportedPod": "Southwest",
   "podName": "Southwest",
   "fmt": {
    "mixed": [
     24,
     8
    ],
    "male": [
     15,
     1
    ],
    "female": [
     12,
     4
    ]
   }
  },
  {
   "name": "Forward",
   "w": 2,
   "l": 0,
   "pf": 1290,
   "pa": 1054,
   "gw": 48,
   "gl": 16,
   "diff": 236,
   "gameDiff": 32,
   "power": 1.2,
   "powerRank": 1,
   "pod": 2,
   "reportedPod": "Southwest",
   "podName": "Southwest",
   "fmt": {
    "mixed": [
     22,
     10
    ],
    "male": [
     10,
     6
    ],
    "female": [
     16,
     0
    ]
   }
  },
  {
   "name": "Pickleball Kingdom Hamilton Strikers",
   "w": 2,
   "l": 0,
   "pf": 1287,
   "pa": 1029,
   "gw": 47,
   "gl": 17,
   "diff": 258,
   "gameDiff": 30,
   "power": 1.2,
   "powerRank": 3,
   "pod": 3,
   "reportedPod": "Southeast",
   "podName": "Northeast / Southeast",
   "fmt": {
    "mixed": [
     24,
     8
    ],
    "male": [
     13,
     3
    ],
    "female": [
     10,
     6
    ]
   }
  },
  {
   "name": "Flemington Blue",
   "w": 2,
   "l": 0,
   "pf": 1275,
   "pa": 1102,
   "gw": 46,
   "gl": 18,
   "diff": 173,
   "gameDiff": 28,
   "power": 0.6,
   "powerRank": 4,
   "pod": 3,
   "reportedPod": "Southeast",
   "podName": "Northeast / Southeast",
   "fmt": {
    "mixed": [
     25,
     7
    ],
    "male": [
     12,
     4
    ],
    "female": [
     9,
     7
    ]
   }
  },
  {
   "name": "PickleRage Union County",
   "w": 1,
   "l": 0,
   "pf": 647,
   "pa": 533,
   "gw": 23,
   "gl": 9,
   "diff": 114,
   "gameDiff": 14,
   "power": 0.9,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": "Northwest",
   "podName": "Northwest",
   "fmt": {
    "mixed": [
     11,
     5
    ],
    "male": [
     7,
     1
    ],
    "female": [
     5,
     3
    ]
   }
  },
  {
   "name": "Picklr Fair Lawn",
   "w": 1,
   "l": 0,
   "pf": 636,
   "pa": 583,
   "gw": 20,
   "gl": 12,
   "diff": 53,
   "gameDiff": 8,
   "power": 0.7,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": "Northwest",
   "podName": "Northwest",
   "fmt": {
    "mixed": [
     10,
     6
    ],
    "male": [
     4,
     4
    ],
    "female": [
     6,
     2
    ]
   }
  },
  {
   "name": "Jersey Devil",
   "w": 1,
   "l": 0,
   "pf": 626,
   "pa": 590,
   "gw": 20,
   "gl": 12,
   "diff": 36,
   "gameDiff": 8,
   "power": 0.6,
   "powerRank": 3,
   "pod": 2,
   "reportedPod": "Southwest",
   "podName": "Southwest",
   "fmt": {
    "mixed": [
     10,
     6
    ],
    "male": [
     7,
     1
    ],
    "female": [
     3,
     5
    ]
   }
  },
  {
   "name": "PKLD",
   "w": 2,
   "l": 0,
   "pf": 1225,
   "pa": 1150,
   "gw": 37,
   "gl": 27,
   "diff": 75,
   "gameDiff": 10,
   "power": -3.9,
   "powerRank": 10,
   "pod": 3,
   "reportedPod": "Northeast",
   "podName": "Northeast / Southeast",
   "fmt": {
    "mixed": [
     21,
     11
    ],
    "male": [
     9,
     7
    ],
    "female": [
     7,
     9
    ]
   }
  },
  {
   "name": "Life Time Red Bank",
   "w": 1,
   "l": 0,
   "pf": 610,
   "pa": 574,
   "gw": 17,
   "gl": 15,
   "diff": 36,
   "gameDiff": 2,
   "power": 16.6,
   "powerRank": 1,
   "pod": 3,
   "reportedPod": "Northeast",
   "podName": "Northeast / Southeast",
   "fmt": {
    "mixed": [
     8,
     8
    ],
    "male": [
     2,
     6
    ],
    "female": [
     7,
     1
    ]
   }
  },
  {
   "name": "Allstar Pickler",
   "w": 1,
   "l": 1,
   "pf": 1245,
   "pa": 1104,
   "gw": 39,
   "gl": 25,
   "diff": 141,
   "gameDiff": 14,
   "power": 0.6,
   "powerRank": 4,
   "pod": 1,
   "reportedPod": "Northwest",
   "podName": "Northwest",
   "fmt": {
    "mixed": [
     19,
     13
    ],
    "male": [
     11,
     5
    ],
    "female": [
     9,
     7
    ]
   }
  },
  {
   "name": "Dill Dinkers Hatboro",
   "w": 1,
   "l": 1,
   "pf": 1215,
   "pa": 1126,
   "gw": 36,
   "gl": 28,
   "diff": 89,
   "gameDiff": 8,
   "power": 0.6,
   "powerRank": 4,
   "pod": 2,
   "reportedPod": "Southwest",
   "podName": "Southwest",
   "fmt": {
    "mixed": [
     18,
     14
    ],
    "male": [
     7,
     9
    ],
    "female": [
     11,
     5
    ]
   }
  },
  {
   "name": "One Love",
   "w": 1,
   "l": 1,
   "pf": 3205,
   "pa": 1217,
   "gw": 33,
   "gl": 31,
   "diff": 1988,
   "gameDiff": 2,
   "power": 13.3,
   "powerRank": 2,
   "pod": 3,
   "reportedPod": "Northeast",
   "podName": "Northeast / Southeast",
   "fmt": {
    "mixed": [
     18,
     14
    ],
    "male": [
     9,
     7
    ],
    "female": [
     6,
     10
    ]
   }
  },
  {
   "name": "ACE Moorestown",
   "w": 1,
   "l": 1,
   "pf": 1195,
   "pa": 1174,
   "gw": 32,
   "gl": 32,
   "diff": 21,
   "gameDiff": 0,
   "power": 0.2,
   "powerRank": 5,
   "pod": 3,
   "reportedPod": "Southeast",
   "podName": "Northeast / Southeast",
   "fmt": {
    "mixed": [
     15,
     17
    ],
    "male": [
     10,
     6
    ],
    "female": [
     7,
     9
    ]
   }
  },
  {
   "name": "Premiere Dinkers",
   "w": 1,
   "l": 1,
   "pf": 1197,
   "pa": 3218,
   "gw": 30,
   "gl": 34,
   "diff": -2021,
   "gameDiff": -4,
   "power": -18.9,
   "powerRank": 12,
   "pod": 3,
   "reportedPod": "Northeast",
   "podName": "Northeast / Southeast",
   "fmt": {
    "mixed": [
     15,
     17
    ],
    "male": [
     9,
     7
    ],
    "female": [
     6,
     10
    ]
   }
  },
  {
   "name": "Monroe",
   "w": 0,
   "l": 2,
   "pf": 1159,
   "pa": 1207,
   "gw": 30,
   "gl": 34,
   "diff": -48,
   "gameDiff": -4,
   "power": -9.2,
   "powerRank": 11,
   "pod": 3,
   "reportedPod": "Northeast",
   "podName": "Northeast / Southeast",
   "fmt": {
    "mixed": [
     13,
     19
    ],
    "male": [
     7,
     9
    ],
    "female": [
     10,
     6
    ]
   }
  },
  {
   "name": "Colts Neck Racquet Club",
   "w": 0,
   "l": 1,
   "pf": 578,
   "pa": 608,
   "gw": 13,
   "gl": 19,
   "diff": -30,
   "gameDiff": -6,
   "power": -2.8,
   "powerRank": 9,
   "pod": 3,
   "reportedPod": "Northeast",
   "podName": "Northeast / Southeast",
   "fmt": {
    "mixed": [
     5,
     11
    ],
    "male": [
     4,
     4
    ],
    "female": [
     4,
     4
    ]
   }
  },
  {
   "name": "Pickleball Kingdom Hamilton Prime Time",
   "w": 0,
   "l": 1,
   "pf": 508,
   "pa": 623,
   "gw": 11,
   "gl": 21,
   "diff": -115,
   "gameDiff": -10,
   "power": -0.4,
   "powerRank": 6,
   "pod": 3,
   "reportedPod": "Southeast",
   "podName": "Northeast / Southeast",
   "fmt": {
    "mixed": [
     6,
     10
    ],
    "male": [
     0,
     8
    ],
    "female": [
     5,
     3
    ]
   }
  },
  {
   "name": "Pickleball Palace Blue",
   "w": 0,
   "l": 1,
   "pf": 533,
   "pa": 647,
   "gw": 9,
   "gl": 23,
   "diff": -114,
   "gameDiff": -14,
   "power": -0.6,
   "powerRank": 5,
   "pod": 1,
   "reportedPod": "Northwest",
   "podName": "Northwest",
   "fmt": {
    "mixed": [
     5,
     11
    ],
    "male": [
     1,
     7
    ],
    "female": [
     3,
     5
    ]
   }
  },
  {
   "name": "Bounce Philly",
   "w": 0,
   "l": 2,
   "pf": 1058,
   "pa": 1271,
   "gw": 18,
   "gl": 46,
   "diff": -213,
   "gameDiff": -28,
   "power": -0.6,
   "powerRank": 6,
   "pod": 2,
   "reportedPod": "Southwest",
   "podName": "Southwest",
   "fmt": {
    "mixed": [
     10,
     22
    ],
    "male": [
     6,
     10
    ],
    "female": [
     2,
     14
    ]
   }
  },
  {
   "name": "Mercer Bucks",
   "w": 0,
   "l": 1,
   "pf": 544,
   "pa": 638,
   "gw": 8,
   "gl": 24,
   "diff": -94,
   "gameDiff": -16,
   "power": -0.5,
   "powerRank": 7,
   "pod": 3,
   "reportedPod": "Southeast",
   "podName": "Northeast / Southeast",
   "fmt": {
    "mixed": [
     4,
     12
    ],
    "male": [
     1,
     7
    ],
    "female": [
     3,
     5
    ]
   }
  },
  {
   "name": "Flemington Green",
   "w": 0,
   "l": 2,
   "pf": 1066,
   "pa": 1309,
   "gw": 16,
   "gl": 48,
   "diff": -243,
   "gameDiff": -32,
   "power": -0.8,
   "powerRank": 8,
   "pod": 3,
   "reportedPod": "Southeast",
   "podName": "Northeast / Southeast",
   "fmt": {
    "mixed": [
     6,
     26
    ],
    "male": [
     4,
     12
    ],
    "female": [
     6,
     10
    ]
   }
  },
  {
   "name": "Players Courtyard",
   "w": 0,
   "l": 2,
   "pf": 1040,
   "pa": 1277,
   "gw": 15,
   "gl": 49,
   "diff": -237,
   "gameDiff": -34,
   "power": -0.5,
   "powerRank": 5,
   "pod": 2,
   "reportedPod": "Southwest",
   "podName": "Southwest",
   "fmt": {
    "mixed": [
     9,
     23
    ],
    "male": [
     3,
     13
    ],
    "female": [
     3,
     13
    ]
   }
  },
  {
   "name": "Pickleball Kingdom Hillsborough",
   "w": 0,
   "l": 1,
   "pf": 504,
   "pa": 664,
   "gw": 6,
   "gl": 26,
   "diff": -160,
   "gameDiff": -20,
   "power": -1.1,
   "powerRank": 7,
   "pod": 1,
   "reportedPod": "Northwest",
   "podName": "Northwest",
   "fmt": {
    "mixed": [
     4,
     12
    ],
    "male": [
     1,
     7
    ],
    "female": [
     1,
     7
    ]
   }
  },
  {
   "name": "Premiere Aces",
   "w": 0,
   "l": 1,
   "pf": 468,
   "pa": 662,
   "gw": 5,
   "gl": 27,
   "diff": -194,
   "gameDiff": -22,
   "power": -0.9,
   "powerRank": 6,
   "pod": 1,
   "reportedPod": "Northwest",
   "podName": "Northwest",
   "fmt": {
    "mixed": [
     3,
     13
    ],
    "male": [
     1,
     7
    ],
    "female": [
     1,
     7
    ]
   }
  },
  {
   "name": "Dill Dinkers Newport",
   "w": 0,
   "l": 1,
   "pf": 481,
   "pa": 659,
   "gw": 4,
   "gl": 28,
   "diff": -178,
   "gameDiff": -24,
   "power": -1.1,
   "powerRank": 7,
   "pod": 2,
   "reportedPod": "Southwest",
   "podName": "Southwest",
   "fmt": {
    "mixed": [
     3,
     13
    ],
    "male": [
     0,
     8
    ],
    "female": [
     1,
     7
    ]
   }
  }
 ],
 "duos": [
  {
   "a": "Joseph Romagnolo",
   "b": "John Rogers",
   "team": "Premiere Dinkers",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 38.7,
   "avgActual": 2.3,
   "avgExpected": -88,
   "aId": "1972795c-9185-4d19-8352-6244573e3ca5",
   "bId": "45bc6397-1703-4a4b-bde7-fda65905fe3a"
  },
  {
   "a": "Karen Chin",
   "b": "Barbara Markoglu",
   "team": "Premiere Dinkers",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 21.9,
   "avgActual": -1,
   "avgExpected": -52.2,
   "aId": "0685c1ca-d8fb-4a1d-a039-8be856ce5c56",
   "bId": "4ca325bd-f0d7-4b18-b570-c6ef241d2ff5"
  },
  {
   "a": "Michele Collins",
   "b": "Erik Harrison",
   "team": "One Love",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 12.6,
   "avgActual": 1.7,
   "avgExpected": -27.7,
   "aId": "b2b07a6e-b0b0-4040-94ae-9f93af110941",
   "bId": "f988ea5f-06b9-477c-88ee-1563d1c8ecfa"
  },
  {
   "a": "Joseph Romagnolo",
   "b": "Barbara Markoglu",
   "team": "Premiere Dinkers",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 12,
   "avgActual": 1,
   "avgExpected": -26.9,
   "aId": "1972795c-9185-4d19-8352-6244573e3ca5",
   "bId": "4ca325bd-f0d7-4b18-b570-c6ef241d2ff5"
  },
  {
   "a": "Karen Chin",
   "b": "John Rogers",
   "team": "Premiere Dinkers",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 11.9,
   "avgActual": 3.3,
   "avgExpected": -20.6,
   "aId": "0685c1ca-d8fb-4a1d-a039-8be856ce5c56",
   "bId": "45bc6397-1703-4a4b-bde7-fda65905fe3a"
  },
  {
   "a": "Dan Carrion",
   "b": "Erik Harrison",
   "team": "One Love",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 6.1,
   "avgActual": -8,
   "avgExpected": -22.1,
   "aId": "833c4691-ccec-4d0d-b9a1-0a833728ea7f",
   "bId": "f988ea5f-06b9-477c-88ee-1563d1c8ecfa"
  },
  {
   "a": "Paul Phillips",
   "b": "Sheila Curran",
   "team": "Flemington Blue",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.5,
   "avgActual": 8.7,
   "avgExpected": 2.9,
   "aId": "9ef3e1b1-2818-46f0-ab0b-2ee190d176b3",
   "bId": "bbb3cbbd-edc3-4fa6-adef-800076f97402"
  },
  {
   "a": "Ellen Rubiato",
   "b": "Carolyn Laverdiere",
   "team": "Forward",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.1,
   "avgActual": 12,
   "avgExpected": 7.2,
   "aId": "9b6e4166-d6a4-4e8c-812b-65e4d35477f3",
   "bId": "ebc26b7d-1ba3-4cf6-a11f-ad6e79c2ff1b"
  },
  {
   "a": "Srinatha Nanjundaiah",
   "b": "Subhas Desai",
   "team": "Pickleball Kingdom Hamilton Strikers",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.8,
   "avgActual": 8.5,
   "avgExpected": 4.8,
   "aId": "2fa3bb27-766b-4a83-b0b4-0ecffc01b778",
   "bId": "b9a91028-9ddd-410a-a8a7-84a23b0f577b"
  },
  {
   "a": "Bart Van Der Gaag",
   "b": "Elliot Fishman",
   "team": "PKLD",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.7,
   "avgActual": 4.5,
   "avgExpected": 1,
   "aId": "24b5e97e-55d9-4d59-82ca-3b616f25d3a1",
   "bId": "3617a420-089d-408c-abf0-c3894b33a47e"
  },
  {
   "a": "Tinglan Zhao",
   "b": "Joan Rudderow",
   "team": "ACE Moorestown",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.7,
   "avgActual": 5.3,
   "avgExpected": 1.9,
   "aId": "5f2e3f29-7b61-4d23-ba5a-23bfe5eac362",
   "bId": "dca2ce61-749b-421c-9205-0a16fc656a36"
  },
  {
   "a": "Dajie （David） Yang",
   "b": "Jessie Fang",
   "team": "Allstar Pickler",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.6,
   "avgActual": 4.3,
   "avgExpected": 0.6,
   "aId": "b153649d-e405-4192-85f9-c1871ba0eba0",
   "bId": "fa9c688a-62ba-4bd3-806a-b47b05235128"
  },
  {
   "a": "Greg Taylor",
   "b": "Dennis Higman",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 7.3,
   "avgExpected": 4.1,
   "aId": "701f7029-4353-4548-b8db-b7ac7ed3d847",
   "bId": "b8fabebb-fd0f-49a8-929a-defbac098e43"
  },
  {
   "a": "Jeffrey Hartford",
   "b": "Eric Brezina",
   "team": "Flemington Blue",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 6,
   "avgExpected": 3.6,
   "aId": "3801a1f8-353e-4ecf-ada7-e8ed5ff23235",
   "bId": "717be0e6-148f-4bab-a433-22e4f97d5c47"
  },
  {
   "a": "Lynn Snyder",
   "b": "Anuraag Verma",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.1,
   "avgActual": 10.7,
   "avgExpected": 8.1,
   "aId": "1973cf93-7507-478a-b457-4fa7ec0951af",
   "bId": "c6b0c203-9659-494f-993b-dadd300ed3e8"
  },
  {
   "a": "Lingshan Hsieh",
   "b": "Alex Chang",
   "team": "Allstar Pickler",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1,
   "avgActual": 6.3,
   "avgExpected": 4,
   "aId": "7fe3ca78-6219-4723-a8ad-49bce55b0238",
   "bId": "93c5b40e-d4ff-4fc5-b7fa-de1e6a82110b"
  },
  {
   "a": "Bill Venella",
   "b": "Ellen Rubiato",
   "team": "Forward",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 7,
   "avgExpected": 5.4,
   "aId": "357a050a-a8ad-4998-a511-814c7c69caad",
   "bId": "9b6e4166-d6a4-4e8c-812b-65e4d35477f3"
  },
  {
   "a": "George Nouaime",
   "b": "Matthew Memmo",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 7.3,
   "avgExpected": 6.1,
   "aId": "379ba4b1-4102-4424-bdee-300e8e4fa35b",
   "bId": "6f3b12bf-032c-458d-bd38-5f9dbe04d374"
  },
  {
   "a": "Matthew Memmo",
   "b": "Zalene Corey",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 6.3,
   "avgExpected": 5.2,
   "aId": "6f3b12bf-032c-458d-bd38-5f9dbe04d374",
   "bId": "e0ffa27a-6b29-48f8-b162-154c995b3d97"
  },
  {
   "a": "Lynn Snyder",
   "b": "Lisa Howdyshell",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 2.7,
   "avgExpected": 1.6,
   "aId": "1973cf93-7507-478a-b457-4fa7ec0951af",
   "bId": "90e0fbef-1218-4eb3-887f-b9cc31e73163"
  },
  {
   "a": "Scott Gardo",
   "b": "Bill Venella",
   "team": "Forward",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 1.3,
   "avgExpected": 0.4,
   "aId": "2580158f-1c0c-4a5a-8a0c-b48d2c1f0067",
   "bId": "357a050a-a8ad-4998-a511-814c7c69caad"
  },
  {
   "a": "Brian Kelly",
   "b": "Maria Cecilia Holgado",
   "team": "Pickleball Kingdom Hamilton Strikers",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.2,
   "avgActual": 2,
   "avgExpected": 1.5,
   "aId": "68cc5ac4-2840-4816-b36f-9df7aa9c3c90",
   "bId": "c1c60fc3-68c8-421e-90bb-cdcf21b5a936"
  },
  {
   "a": "Scott Heist",
   "b": "Hector Lopez",
   "team": "Flemington Green",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.2,
   "avgActual": -6.3,
   "avgExpected": -6.9,
   "aId": "43296dc0-9f07-4173-a3c4-6df92c7bbb37",
   "bId": "e02b2266-0586-4da7-9451-b90445d145bf"
  },
  {
   "a": "Lisa Howdyshell",
   "b": "Zalene Corey",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.1,
   "avgActual": 6.7,
   "avgExpected": 6.5,
   "aId": "90e0fbef-1218-4eb3-887f-b9cc31e73163",
   "bId": "e0ffa27a-6b29-48f8-b162-154c995b3d97"
  },
  {
   "a": "Michael Ross",
   "b": "Tom Giunta",
   "team": "Players Courtyard",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0,
   "avgActual": -9.7,
   "avgExpected": -9.6,
   "aId": "5db691c2-51e1-4500-a9e7-60c0f303f6d0",
   "bId": "951454ae-d2ba-4339-99de-1a47c62bbaac"
  },
  {
   "a": "Bobbi Rentko",
   "b": "Freddy Alicea",
   "team": "PKLD",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 1.7,
   "avgExpected": 2.1,
   "aId": "66469f12-c5eb-4a44-97b6-c40c3fbbf89c",
   "bId": "66505a6b-2dfe-4454-b71b-e3fdd2b7a692"
  },
  {
   "a": "Lauren Ricks",
   "b": "Chris Hannah",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.2,
   "avgActual": -1.3,
   "avgExpected": -0.9,
   "aId": "07e276d3-773e-4a62-865e-4248969ec4d3",
   "bId": "4be457d0-c765-45af-b64d-da383c437a53"
  },
  {
   "a": "Greg Taylor",
   "b": "Martyn Babitz",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.2,
   "avgActual": -1.7,
   "avgExpected": -1.1,
   "aId": "701f7029-4353-4548-b8db-b7ac7ed3d847",
   "bId": "cf328b8f-9626-4bdf-8069-da6d0f8b17e9"
  },
  {
   "a": "Lisa Howdyshell",
   "b": "Anuraag Verma",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.3,
   "avgActual": 5.7,
   "avgExpected": 6.4,
   "aId": "90e0fbef-1218-4eb3-887f-b9cc31e73163",
   "bId": "c6b0c203-9659-494f-993b-dadd300ed3e8"
  },
  {
   "a": "Irish Lee",
   "b": "George Zhou",
   "team": "Allstar Pickler",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 3,
   "avgExpected": 3.7,
   "aId": "1b93f56f-c9be-4d20-b0a4-e155b558a11c",
   "bId": "e623609f-5136-415f-a018-74427cfa13ff"
  },
  {
   "a": "Jeffrey Hartford",
   "b": "Paul Phillips",
   "team": "Flemington Blue",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.5,
   "avgActual": 0.3,
   "avgExpected": 1.4,
   "aId": "3801a1f8-353e-4ecf-ada7-e8ed5ff23235",
   "bId": "9ef3e1b1-2818-46f0-ab0b-2ee190d176b3"
  },
  {
   "a": "Hector Lopez",
   "b": "Judith Macarthur",
   "team": "Flemington Green",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -4.7,
   "avgExpected": -3.1,
   "aId": "e02b2266-0586-4da7-9451-b90445d145bf",
   "bId": "ea5676f2-c36c-4c54-b9df-c6fb5926b61e"
  },
  {
   "a": "Greg Taylor",
   "b": "Joan Rudderow",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.8,
   "avgActual": -0.3,
   "avgExpected": 1.6,
   "aId": "701f7029-4353-4548-b8db-b7ac7ed3d847",
   "bId": "dca2ce61-749b-421c-9205-0a16fc656a36"
  },
  {
   "a": "Michael Ross",
   "b": "Danya George",
   "team": "Players Courtyard",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1,
   "avgActual": -11.7,
   "avgExpected": -9.3,
   "aId": "5db691c2-51e1-4500-a9e7-60c0f303f6d0",
   "bId": "fbaf1cdd-118b-4d51-a42e-f06908cc3f3c"
  },
  {
   "a": "Michael Ross",
   "b": "Jill Nixon",
   "team": "Players Courtyard",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.2,
   "avgActual": -7,
   "avgExpected": -4.3,
   "aId": "5db691c2-51e1-4500-a9e7-60c0f303f6d0",
   "bId": "8c0ea31a-a5e4-49f4-b97c-703e6edfe6d2"
  },
  {
   "a": "Karen Rosenberg",
   "b": "Jennifer Makfinsky",
   "team": "PKLD",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -1.3,
   "avgActual": 2.8,
   "avgExpected": 5.4,
   "aId": "17fc1097-95ae-4095-a83d-ca9124bef274",
   "bId": "67fe047d-4c6f-4a2b-9946-afdd938d18c8"
  },
  {
   "a": "Eric Fang",
   "b": "Dajie （David） Yang",
   "team": "Allstar Pickler",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.3,
   "avgActual": -4,
   "avgExpected": -0.9,
   "aId": "a2e21de9-b9d3-4727-a66f-101c62e00a5d",
   "bId": "b153649d-e405-4192-85f9-c1871ba0eba0"
  },
  {
   "a": "Tinglan Zhao",
   "b": "Dennis Higman",
   "team": "ACE Moorestown",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.3,
   "avgActual": -0.2,
   "avgExpected": 2.4,
   "aId": "5f2e3f29-7b61-4d23-ba5a-23bfe5eac362",
   "bId": "b8fabebb-fd0f-49a8-929a-defbac098e43"
  },
  {
   "a": "Bob Debarge",
   "b": "Jeffrey Quinlan",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -3.4,
   "avgActual": 2.7,
   "avgExpected": 10.5,
   "aId": "e0d98c57-92dd-4719-ab14-3635205f3328",
   "bId": "f7bf88cc-9cdb-4d3c-b768-c2922c5a8456"
  },
  {
   "a": "Olga Turova",
   "b": "Filomena Rega",
   "team": "Monroe",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -3.8,
   "avgActual": 3.7,
   "avgExpected": 12.5,
   "aId": "1aeb5726-1c67-4c13-8884-b35f0c5c854f",
   "bId": "b466c6a0-1ec9-4148-819b-972cc37ca5ec"
  },
  {
   "a": "Filomena Rega",
   "b": "Jeffrey Quinlan",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -4.5,
   "avgActual": -2.7,
   "avgExpected": 7.9,
   "aId": "b466c6a0-1ec9-4148-819b-972cc37ca5ec",
   "bId": "f7bf88cc-9cdb-4d3c-b768-c2922c5a8456"
  },
  {
   "a": "Amy Farrell",
   "b": "Filomena Rega",
   "team": "Monroe",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -5.7,
   "avgActual": 1.5,
   "avgExpected": 13,
   "aId": "73509e7b-7c99-4b1e-998c-a9de94daa2a2",
   "bId": "b466c6a0-1ec9-4148-819b-972cc37ca5ec"
  },
  {
   "a": "Timothy Cassidy",
   "b": "Amy Santopietro",
   "team": "One Love",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -29.8,
   "avgActual": -3.3,
   "avgExpected": 66.3,
   "aId": "33b16b4f-95d4-4467-aba6-44b22d090bb5",
   "bId": "894ef6a1-ee5a-4729-bee3-f11f57c22e16"
  },
  {
   "a": "Timothy Cassidy",
   "b": "Phillip Perry",
   "team": "One Love",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -41.3,
   "avgActual": 2.5,
   "avgExpected": 85.2,
   "aId": "33b16b4f-95d4-4467-aba6-44b22d090bb5",
   "bId": "acc4012f-320c-4b43-8ec7-f60ca7419e03"
  },
  {
   "a": "Timothy Cassidy",
   "b": "Eric Brody",
   "team": "One Love",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -49.8,
   "avgActual": 0.8,
   "avgExpected": 100.3,
   "aId": "33b16b4f-95d4-4467-aba6-44b22d090bb5",
   "bId": "bbb95dae-c7a1-4e34-b74f-29ff5fc70f29"
  },
  {
   "a": "John Rogers",
   "b": "Barbara Markoglu",
   "team": "Premiere Dinkers",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -155.3,
   "avgActual": -663.3,
   "avgExpected": -300.9,
   "aId": "45bc6397-1703-4a4b-bde7-fda65905fe3a",
   "bId": "4ca325bd-f0d7-4b18-b570-c6ef241d2ff5"
  }
 ],
 "matches": [
  {
   "result": "away",
   "week": 1,
   "home": "Colts Neck Racquet Club",
   "away": "PKLD",
   "time": "2026-08-22T13:00:00",
   "complete": true,
   "homePoints": 578,
   "awayPoints": 608,
   "homeGW": 13,
   "awayGW": 19,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Christina Zumbo-Zerega",
      "Frank Leccese"
     ],
     "a": [
      "Christine Strasser",
      "Freddy Alicea"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Melissa Freedman",
      "Daniel Brennan"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Bart Van Der Gaag"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Gina Lavignera",
      "Jonathan Gross"
     ],
     "a": [
      "Petra Jones",
      "Dmitry Strashnov"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Shari Gagliardo",
      "Frank Iacono"
     ],
     "a": [
      "Antoinette Mccormick",
      "Richard Madonna"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Melissa Freedman",
      "Christina Zumbo-Zerega"
     ],
     "a": [
      "Christine Strasser",
      "Petra Jones"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Michele Iacono",
      "Gina Lavignera"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Karen Rosenberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Michael Salerno",
      "Frank Iacono"
     ],
     "a": [
      "Richard Madonna",
      "Bart Van Der Gaag"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Frank Leccese",
      "Jonathan Gross"
     ],
     "a": [
      "Dmitry Strashnov",
      "Freddy Alicea"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Christina Zumbo-Zerega",
      "Daniel Brennan"
     ],
     "a": [
      "Petra Jones",
      "Victorino Ramos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Shari Gagliardo",
      "Michael Salerno"
     ],
     "a": [
      "Karen Rosenberg",
      "Elliot Fishman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Melissa Freedman",
      "Frank Iacono"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Richard Madonna"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Michele Iacono",
      "Frank Leccese"
     ],
     "a": [
      "Antoinette Mccormick",
      "Dmitry Strashnov"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Melissa Freedman",
      "Michele Iacono"
     ],
     "a": [
      "Christine Strasser",
      "Karen Rosenberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Shari Gagliardo",
      "Gina Lavignera"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Antoinette Mccormick"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Frank Leccese",
      "Michael Salerno"
     ],
     "a": [
      "Bart Van Der Gaag",
      "Elliot Fishman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Daniel Brennan",
      "Jonathan Gross"
     ],
     "a": [
      "Dmitry Strashnov",
      "Victorino Ramos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Gina Lavignera",
      "Daniel Brennan"
     ],
     "a": [
      "Bobbi Rentko",
      "Elliot Fishman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Christina Zumbo-Zerega",
      "Frank Iacono"
     ],
     "a": [
      "Petra Jones",
      "Victorino Ramos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Michele Iacono",
      "Michael Salerno"
     ],
     "a": [
      "Antoinette Mccormick",
      "Richard Madonna"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Shari Gagliardo",
      "Jonathan Gross"
     ],
     "a": [
      "Christine Strasser",
      "Freddy Alicea"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Christina Zumbo-Zerega",
      "Michele Iacono"
     ],
     "a": [
      "Bobbi Rentko",
      "Petra Jones"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Melissa Freedman",
      "Gina Lavignera"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Karen Rosenberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Daniel Brennan",
      "Frank Leccese"
     ],
     "a": [
      "Bart Van Der Gaag",
      "Elliot Fishman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Frank Iacono",
      "Jonathan Gross"
     ],
     "a": [
      "Freddy Alicea",
      "Victorino Ramos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Melissa Freedman",
      "Frank Leccese"
     ],
     "a": [
      "Bobbi Rentko",
      "Freddy Alicea"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Michele Iacono",
      "Daniel Brennan"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Elliot Fishman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Christina Zumbo-Zerega",
      "Michael Salerno"
     ],
     "a": [
      "Antoinette Mccormick",
      "Dmitry Strashnov"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Shari Gagliardo",
      "Frank Iacono"
     ],
     "a": [
      "Karen Rosenberg",
      "Bart Van Der Gaag"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Michele Iacono",
      "Shari Gagliardo"
     ],
     "a": [
      "Antoinette Mccormick",
      "Karen Rosenberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Melissa Freedman",
      "Gina Lavignera"
     ],
     "a": [
      "Bobbi Rentko",
      "Jennifer Makfinsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Frank Iacono",
      "Frank Leccese"
     ],
     "a": [
      "Dmitry Strashnov",
      "Elliot Fishman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Michael Salerno",
      "Jonathan Gross"
     ],
     "a": [
      "Bart Van Der Gaag",
      "Freddy Alicea"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 1,
   "home": "Players Courtyard",
   "away": "Bounce Malvern",
   "time": "2026-08-22T13:00:00",
   "complete": true,
   "homePoints": 544,
   "awayPoints": 633,
   "homeGW": 9,
   "awayGW": 23,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jill Nixon",
      "Michael Ross"
     ],
     "a": [
      "Zalene Corey",
      "George Nouaime"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Xiaojun Yuan",
      "Joseph Koerner"
     ],
     "a": [
      "Lynn Snyder",
      "Anuraag Verma"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Suzanne Garcia",
      "Tom Giunta"
     ],
     "a": [
      "Kimberly Kusumoto",
      "Brian Schartz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Tracy Giunta",
      "Jim Nixon"
     ],
     "a": [
      "Lisa Howdyshell",
      "Matthew Memmo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jill Nixon",
      "Suzanne Garcia"
     ],
     "a": [
      "Lynn Snyder",
      "Stephanie A. Umbach"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Danya George",
      "Xiaojun Yuan"
     ],
     "a": [
      "Lisa Howdyshell",
      "Zalene Corey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Joseph Koerner",
      "Michael Ross"
     ],
     "a": [
      "Matthew Memmo",
      "George Nouaime"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Tom Giunta",
      "Todd Gelfand"
     ],
     "a": [
      "Anuraag Verma",
      "Jeff Pillar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Tracy Giunta",
      "Todd Gelfand"
     ],
     "a": [
      "Lynn Snyder",
      "Jeff Pillar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Danya George",
      "Michael Ross"
     ],
     "a": [
      "Lisa Howdyshell",
      "Anuraag Verma"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Suzanne Garcia",
      "Jim Nixon"
     ],
     "a": [
      "Stephanie A. Umbach",
      "Matthew Memmo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Jill Nixon",
      "Joseph Koerner"
     ],
     "a": [
      "Kimberly Kusumoto",
      "Brian Schartz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Danya George",
      "Jill Nixon"
     ],
     "a": [
      "Lisa Howdyshell",
      "Zalene Corey"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Xiaojun Yuan",
      "Suzanne Garcia"
     ],
     "a": [
      "Kimberly Kusumoto",
      "Stephanie A. Umbach"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Michael Ross",
      "Tom Giunta"
     ],
     "a": [
      "Anuraag Verma",
      "George Nouaime"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jim Nixon",
      "Todd Gelfand"
     ],
     "a": [
      "Jeff Pillar",
      "Brian Schartz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Danya George",
      "Joseph Koerner"
     ],
     "a": [
      "Zalene Corey",
      "Matthew Memmo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jill Nixon",
      "Michael Ross"
     ],
     "a": [
      "Lisa Howdyshell",
      "Anuraag Verma"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Tracy Giunta",
      "Tom Giunta"
     ],
     "a": [
      "Kimberly Kusumoto",
      "Jeff Pillar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Suzanne Garcia",
      "Todd Gelfand"
     ],
     "a": [
      "Lynn Snyder",
      "Brian Schartz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Danya George",
      "Tracy Giunta"
     ],
     "a": [
      "Stephanie A. Umbach",
      "Zalene Corey"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jill Nixon",
      "Xiaojun Yuan"
     ],
     "a": [
      "Lisa Howdyshell",
      "Lynn Snyder"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Joseph Koerner",
      "Jim Nixon"
     ],
     "a": [
      "George Nouaime",
      "Jeff Pillar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Michael Ross",
      "Tom Giunta"
     ],
     "a": [
      "Matthew Memmo",
      "Anuraag Verma"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Xiaojun Yuan",
      "Joseph Koerner"
     ],
     "a": [
      "Lynn Snyder",
      "Matthew Memmo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Suzanne Garcia",
      "Michael Ross"
     ],
     "a": [
      "Kimberly Kusumoto",
      "George Nouaime"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Danya George",
      "Todd Gelfand"
     ],
     "a": [
      "Stephanie A. Umbach",
      "Jeff Pillar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Tracy Giunta",
      "Jim Nixon"
     ],
     "a": [
      "Zalene Corey",
      "Brian Schartz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Tracy Giunta",
      "Jill Nixon"
     ],
     "a": [
      "Kimberly Kusumoto",
      "Zalene Corey"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Suzanne Garcia",
      "Xiaojun Yuan"
     ],
     "a": [
      "Lisa Howdyshell",
      "Lynn Snyder"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Michael Ross",
      "Jim Nixon"
     ],
     "a": [
      "Matthew Memmo",
      "George Nouaime"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Todd Gelfand",
      "Joseph Koerner"
     ],
     "a": [
      "Brian Schartz",
      "Anuraag Verma"
     ]
    }
   ],
   "subs": [
    "Stephanie A. Umbach",
    "Jim Nixon",
    "Xiaojun Yuan"
   ]
  },
  {
   "result": "away",
   "week": 1,
   "home": "Pickleball Kingdom Hamilton Prime Time",
   "away": "Pickleball Kingdom Hamilton Strikers",
   "time": "2026-08-22T13:00:00",
   "complete": true,
   "homePoints": 508,
   "awayPoints": 623,
   "homeGW": 11,
   "awayGW": 21,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Franchesa Mclean",
      "Dino Del Rosario"
     ],
     "a": [
      "Lynette Pil",
      "Tony Sethi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Mary Foster",
      "Gregory Mcquibben"
     ],
     "a": [
      "Krishma Patel",
      "Brian Kelly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Luz Bonner",
      "Fritz Jean-Brian"
     ],
     "a": [
      "Donna Stone",
      "Subhas Desai"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Michelle Corbett",
      "Ed Mendoza"
     ],
     "a": [
      "Jennifer Taddeo",
      "Srinatha Nanjundaiah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Mary Foster",
      "Judy Williamson"
     ],
     "a": [
      "Lynette Pil",
      "Maria Cecilia Holgado"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Franchesa Mclean",
      "Yayuan Lien"
     ],
     "a": [
      "Krishma Patel",
      "Marleen Tuquero"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Fritz Jean-Brian",
      "Gregory Mcquibben"
     ],
     "a": [
      "Guillermo Wong",
      "Artemio Tuquero"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 3,
     "as": 21,
     "h": [
      "Joseph Carrado",
      "Warren Howard"
     ],
     "a": [
      "Subhas Desai",
      "Srinatha Nanjundaiah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Michelle Corbett",
      "Gregory Mcquibben"
     ],
     "a": [
      "Lynette Pil",
      "Artemio Tuquero"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Judy Williamson",
      "Ed Mendoza"
     ],
     "a": [
      "Donna Stone",
      "Tony Sethi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Luz Bonner",
      "Dino Del Rosario"
     ],
     "a": [
      "Marleen Tuquero",
      "Srinatha Nanjundaiah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Mary Foster",
      "Fritz Jean-Brian"
     ],
     "a": [
      "Maria Cecilia Holgado",
      "Guillermo Wong"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Franchesa Mclean",
      "Luz Bonner"
     ],
     "a": [
      "Krishma Patel",
      "Donna Stone"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Mary Foster",
      "Yayuan Lien"
     ],
     "a": [
      "Maria Cecilia Holgado",
      "Jennifer Taddeo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Gregory Mcquibben",
      "Dino Del Rosario"
     ],
     "a": [
      "Brian Kelly",
      "Guillermo Wong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Ed Mendoza",
      "Warren Howard"
     ],
     "a": [
      "Subhas Desai",
      "Tony Sethi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Franchesa Mclean",
      "Fritz Jean-Brian"
     ],
     "a": [
      "Marleen Tuquero",
      "Artemio Tuquero"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Michelle Corbett",
      "Joseph Carrado"
     ],
     "a": [
      "Lynette Pil",
      "Guillermo Wong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Judy Williamson",
      "Warren Howard"
     ],
     "a": [
      "Jennifer Taddeo",
      "Tony Sethi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Yayuan Lien",
      "Dino Del Rosario"
     ],
     "a": [
      "Krishma Patel",
      "Srinatha Nanjundaiah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Mary Foster",
      "Judy Williamson"
     ],
     "a": [
      "Marleen Tuquero",
      "Jennifer Taddeo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Luz Bonner",
      "Yayuan Lien"
     ],
     "a": [
      "Lynette Pil",
      "Donna Stone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Fritz Jean-Brian",
      "Joseph Carrado"
     ],
     "a": [
      "Subhas Desai",
      "Srinatha Nanjundaiah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Gregory Mcquibben",
      "Warren Howard"
     ],
     "a": [
      "Brian Kelly",
      "Guillermo Wong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Judy Williamson",
      "Ed Mendoza"
     ],
     "a": [
      "Marleen Tuquero",
      "Artemio Tuquero"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Yayuan Lien",
      "Fritz Jean-Brian"
     ],
     "a": [
      "Donna Stone",
      "Subhas Desai"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Michelle Corbett",
      "Joseph Carrado"
     ],
     "a": [
      "Krishma Patel",
      "Tony Sethi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Franchesa Mclean",
      "Dino Del Rosario"
     ],
     "a": [
      "Maria Cecilia Holgado",
      "Brian Kelly"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Franchesa Mclean",
      "Yayuan Lien"
     ],
     "a": [
      "Lynette Pil",
      "Maria Cecilia Holgado"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Mary Foster",
      "Luz Bonner"
     ],
     "a": [
      "Krishma Patel",
      "Donna Stone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Gregory Mcquibben",
      "Warren Howard"
     ],
     "a": [
      "Brian Kelly",
      "Tony Sethi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Ed Mendoza",
      "Dino Del Rosario"
     ],
     "a": [
      "Guillermo Wong",
      "Artemio Tuquero"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 1,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Pickleball Palace Black",
   "time": "2026-08-22T13:00:00",
   "complete": true,
   "homePoints": 504,
   "awayPoints": 664,
   "homeGW": 6,
   "awayGW": 26,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Karin Schneider",
      "John Zampini"
     ],
     "a": [
      "Theresa Corderi",
      "Ward Greer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Irene Guile",
      "James Carter"
     ],
     "a": [
      "Donna Shabinaw",
      "Alan Weissman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lucy Sha",
      "Jerry Ridder"
     ],
     "a": [
      "Christine Ostapiak",
      "James Azarowicz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Sherry Silinger",
      "Alan Carr"
     ],
     "a": [
      "Anne Buckley",
      "Jake Denooyer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Irene Guile",
      "Lucy Sha"
     ],
     "a": [
      "Theresa Corderi",
      "Anne Buckley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 18,
     "h": [
      "Karin Schneider",
      "Sherry Silinger"
     ],
     "a": [
      "Christine Ostapiak",
      "Donna Shabinaw"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Alan Carr",
      "Jerry Ridder"
     ],
     "a": [
      "Noach Shapiro",
      "Alan Weissman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "James Carter",
      "John Zampini"
     ],
     "a": [
      "James Azarowicz",
      "Jake Denooyer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Irene Guile",
      "John Zampini"
     ],
     "a": [
      "Anne Buckley",
      "James Azarowicz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Karin Schneider",
      "Jerry Ridder"
     ],
     "a": [
      "Theresa Corderi",
      "Alan Weissman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Lucy Sha",
      "James Carter"
     ],
     "a": [
      "Christine Ostapiak",
      "Jake Denooyer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Sherry Silinger",
      "Alan Carr"
     ],
     "a": [
      "Donna Shabinaw",
      "Ward Greer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Karin Schneider",
      "Sherry Silinger"
     ],
     "a": [
      "Anne Buckley",
      "Donna Shabinaw"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Irene Guile",
      "Lucy Sha"
     ],
     "a": [
      "Theresa Corderi",
      "Christine Ostapiak"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Alan Carr",
      "Jerry Ridder"
     ],
     "a": [
      "Ward Greer",
      "Alan Weissman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "John Zampini",
      "James Carter"
     ],
     "a": [
      "Jake Denooyer",
      "Noach Shapiro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sherry Silinger",
      "Jerry Ridder"
     ],
     "a": [
      "Christine Ostapiak",
      "Noach Shapiro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Karin Schneider",
      "Alan Carr"
     ],
     "a": [
      "Theresa Corderi",
      "Alan Weissman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Irene Guile",
      "James Carter"
     ],
     "a": [
      "Anne Buckley",
      "Ward Greer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lucy Sha",
      "John Zampini"
     ],
     "a": [
      "Donna Shabinaw",
      "James Azarowicz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Sherry Silinger",
      "Irene Guile"
     ],
     "a": [
      "Theresa Corderi",
      "Donna Shabinaw"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Karin Schneider",
      "Lucy Sha"
     ],
     "a": [
      "Anne Buckley",
      "Christine Ostapiak"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jerry Ridder",
      "John Zampini"
     ],
     "a": [
      "Jake Denooyer",
      "Noach Shapiro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Alan Carr",
      "James Carter"
     ],
     "a": [
      "Alan Weissman",
      "James Azarowicz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sherry Silinger",
      "John Zampini"
     ],
     "a": [
      "Donna Shabinaw",
      "Noach Shapiro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Irene Guile",
      "Alan Carr"
     ],
     "a": [
      "Anne Buckley",
      "James Azarowicz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Karin Schneider",
      "Jerry Ridder"
     ],
     "a": [
      "Christine Ostapiak",
      "Ward Greer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lucy Sha",
      "James Carter"
     ],
     "a": [
      "Theresa Corderi",
      "Jake Denooyer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Karin Schneider",
      "Irene Guile"
     ],
     "a": [
      "Christine Ostapiak",
      "Donna Shabinaw"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Sherry Silinger",
      "Lucy Sha"
     ],
     "a": [
      "Theresa Corderi",
      "Anne Buckley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Alan Carr",
      "John Zampini"
     ],
     "a": [
      "Alan Weissman",
      "Jake Denooyer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jerry Ridder",
      "James Carter"
     ],
     "a": [
      "Ward Greer",
      "James Azarowicz"
     ]
    }
   ],
   "subs": [
    "Christine Ostapiak",
    "Donna Shabinaw",
    "Sherry Silinger",
    "Karin Schneider",
    "Jerry Ridder",
    "Lucy Sha",
    "Alan Carr",
    "Irene Guile",
    "John Zampini"
   ]
  },
  {
   "result": "away",
   "week": 1,
   "home": "One Love",
   "away": "Life Time Red Bank",
   "time": "2026-08-22T13:00:00",
   "complete": true,
   "homePoints": 574,
   "awayPoints": 610,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Cheryl Parker",
      "Phillip Perry"
     ],
     "a": [
      "Nicole Tarallo",
      "Ray Baker"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Amy Santopietro",
      "Timothy Cassidy"
     ],
     "a": [
      "Jackie Coneeny",
      "Mark Zamkoff"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Erica Marcus",
      "Henry Dornemann"
     ],
     "a": [
      "Elaine Aquilone",
      "Daniel Ryan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Deirdre Monahan",
      "Eric Brody"
     ],
     "a": [
      "Erica Ruggieri",
      "Blair Lane"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Cheryl Parker",
      "Deirdre Monahan"
     ],
     "a": [
      "Donna Facconerusin",
      "Caroline Kinlin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Brenda Mee",
      "Amy Santopietro"
     ],
     "a": [
      "Erica Ruggieri",
      "Nicole Tarallo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Phillip Perry",
      "Timothy Cassidy"
     ],
     "a": [
      "Mark Zamkoff",
      "Ray Baker"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Henry Dornemann",
      "Eric Brody"
     ],
     "a": [
      "Daniel Ryan",
      "Kenny Mayerhofer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Brenda Mee",
      "Dan Carrion"
     ],
     "a": [
      "Elaine Aquilone",
      "Daniel Ryan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Michele Collins",
      "Erik Harrison"
     ],
     "a": [
      "Jackie Coneeny",
      "Kenny Mayerhofer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Erica Marcus",
      "Henry Dornemann"
     ],
     "a": [
      "Donna Facconerusin",
      "Blair Lane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Deirdre Monahan",
      "Eric Brody"
     ],
     "a": [
      "Erica Ruggieri",
      "Mark Zamkoff"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Cheryl Parker",
      "Deirdre Monahan"
     ],
     "a": [
      "Elaine Aquilone",
      "Jackie Coneeny"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Amy Santopietro",
      "Michele Collins"
     ],
     "a": [
      "Nicole Tarallo",
      "Caroline Kinlin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Phillip Perry",
      "Timothy Cassidy"
     ],
     "a": [
      "Blair Lane",
      "Kenny Mayerhofer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Henry Dornemann",
      "Eric Brody"
     ],
     "a": [
      "Daniel Ryan",
      "Mark Zamkoff"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Cheryl Parker",
      "Phillip Perry"
     ],
     "a": [
      "Donna Facconerusin",
      "Daniel Ryan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Amy Santopietro",
      "Timothy Cassidy"
     ],
     "a": [
      "Nicole Tarallo",
      "Kenny Mayerhofer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Brenda Mee",
      "Dan Carrion"
     ],
     "a": [
      "Erica Ruggieri",
      "Blair Lane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Michele Collins",
      "Erik Harrison"
     ],
     "a": [
      "Elaine Aquilone",
      "Ray Baker"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Michele Collins",
      "Brenda Mee"
     ],
     "a": [
      "Caroline Kinlin",
      "Jackie Coneeny"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Erica Marcus",
      "Deirdre Monahan"
     ],
     "a": [
      "Donna Facconerusin",
      "Nicole Tarallo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Dan Carrion",
      "Erik Harrison"
     ],
     "a": [
      "Ray Baker",
      "Daniel Ryan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Eric Brody",
      "Timothy Cassidy"
     ],
     "a": [
      "Blair Lane",
      "Kenny Mayerhofer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Amy Santopietro",
      "Phillip Perry"
     ],
     "a": [
      "Caroline Kinlin",
      "Kenny Mayerhofer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Erica Marcus",
      "Dan Carrion"
     ],
     "a": [
      "Elaine Aquilone",
      "Ray Baker"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Brenda Mee",
      "Erik Harrison"
     ],
     "a": [
      "Donna Facconerusin",
      "Blair Lane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Cheryl Parker",
      "Henry Dornemann"
     ],
     "a": [
      "Erica Ruggieri",
      "Mark Zamkoff"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Cheryl Parker",
      "Erica Marcus"
     ],
     "a": [
      "Elaine Aquilone",
      "Nicole Tarallo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Brenda Mee",
      "Michele Collins"
     ],
     "a": [
      "Caroline Kinlin",
      "Erica Ruggieri"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Dan Carrion",
      "Erik Harrison"
     ],
     "a": [
      "Mark Zamkoff",
      "Daniel Ryan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Timothy Cassidy",
      "Eric Brody"
     ],
     "a": [
      "Ray Baker",
      "Blair Lane"
     ]
    }
   ],
   "subs": [
    "Kenny Mayerhofer",
    "Ray Baker"
   ]
  },
  {
   "result": "home",
   "week": 1,
   "home": "Premiere Dinkers",
   "away": "Monroe",
   "time": "2026-08-22T13:00:00",
   "complete": true,
   "homePoints": 590,
   "awayPoints": 587,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Alexandra Romagnolo",
      "Joseph Romagnolo"
     ],
     "a": [
      "Mary Logan Comerford",
      "Charlie Belluardo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Angela Salemmo",
      "Jay Parisi"
     ],
     "a": [
      "Olga Turova",
      "Richard Ricciardi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Karen Chin",
      "John Rogers"
     ],
     "a": [
      "Amy Farrell",
      "Paul Glickenhaus"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Barbara Markoglu",
      "Brian Schneider"
     ],
     "a": [
      "Filomena Rega",
      "Jeffrey Quinlan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Angela Salemmo",
      "Alexandra Romagnolo"
     ],
     "a": [
      "Amy Farrell",
      "Filomena Rega"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Karen Chin",
      "Barbara Markoglu"
     ],
     "a": [
      "Bonnie Russo",
      "Michele Anthony"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jay Parisi",
      "Joseph Romagnolo"
     ],
     "a": [
      "Richard Ricciardi",
      "Bob Debarge"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jim Ritchie",
      "John Rogers"
     ],
     "a": [
      "Paul Glickenhaus",
      "Jeffrey Quinlan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Barbara Markoglu",
      "Brian Schneider"
     ],
     "a": [
      "Bonnie Russo",
      "Bob Debarge"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Karen Chin",
      "John Rogers"
     ],
     "a": [
      "Michele Anthony",
      "Charlie Belluardo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Alexandra Romagnolo",
      "Joseph Romagnolo"
     ],
     "a": [
      "Olga Turova",
      "Jeffrey Quinlan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Angela Salemmo",
      "Jay Parisi"
     ],
     "a": [
      "Mary Logan Comerford",
      "Paul Glickenhaus"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Karen Chin",
      "Barbara Markoglu"
     ],
     "a": [
      "Olga Turova",
      "Filomena Rega"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Alexandra Romagnolo",
      "Angela Salemmo"
     ],
     "a": [
      "Bonnie Russo",
      "Amy Farrell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jay Parisi",
      "Jim Ritchie"
     ],
     "a": [
      "Bob Debarge",
      "Jeffrey Quinlan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "John Rogers",
      "Joseph Romagnolo"
     ],
     "a": [
      "Charlie Belluardo",
      "Richard Ricciardi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Karen Chin",
      "Brian Schneider"
     ],
     "a": [
      "Amy Farrell",
      "Richard Ricciardi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Barbara Markoglu",
      "Joseph Romagnolo"
     ],
     "a": [
      "Filomena Rega",
      "Bob Debarge"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Alexandra Romagnolo",
      "Jay Parisi"
     ],
     "a": [
      "Mary Logan Comerford",
      "Paul Glickenhaus"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Angela Salemmo",
      "John Rogers"
     ],
     "a": [
      "Michele Anthony",
      "Charlie Belluardo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Alexandra Romagnolo",
      "Karen Chin"
     ],
     "a": [
      "Filomena Rega",
      "Olga Turova"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Barbara Markoglu",
      "Angela Salemmo"
     ],
     "a": [
      "Bonnie Russo",
      "Michele Anthony"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jay Parisi",
      "Joseph Romagnolo"
     ],
     "a": [
      "Paul Glickenhaus",
      "Richard Ricciardi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Brian Schneider",
      "John Rogers"
     ],
     "a": [
      "Bob Debarge",
      "Jeffrey Quinlan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Karen Chin",
      "Jim Ritchie"
     ],
     "a": [
      "Olga Turova",
      "Bob Debarge"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Barbara Markoglu",
      "John Rogers"
     ],
     "a": [
      "Mary Logan Comerford",
      "Charlie Belluardo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Alexandra Romagnolo",
      "Brian Schneider"
     ],
     "a": [
      "Michele Anthony",
      "Paul Glickenhaus"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Angela Salemmo",
      "Joseph Romagnolo"
     ],
     "a": [
      "Amy Farrell",
      "Jeffrey Quinlan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Karen Chin",
      "Alexandra Romagnolo"
     ],
     "a": [
      "Bonnie Russo",
      "Mary Logan Comerford"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Barbara Markoglu",
      "Angela Salemmo"
     ],
     "a": [
      "Amy Farrell",
      "Filomena Rega"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jay Parisi",
      "John Rogers"
     ],
     "a": [
      "Charlie Belluardo",
      "Bob Debarge"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jim Ritchie",
      "Brian Schneider"
     ],
     "a": [
      "Jeffrey Quinlan",
      "Richard Ricciardi"
     ]
    }
   ],
   "subs": [
    "Jim Ritchie"
   ]
  },
  {
   "result": "away",
   "week": 1,
   "home": "Dill Dinkers Hatboro",
   "away": "Jersey Devil",
   "time": "2026-08-22T13:00:00",
   "complete": true,
   "homePoints": 590,
   "awayPoints": 626,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Edie Kwasnoski",
      "Andrew Frey"
     ],
     "a": [
      "Heidi Weinroth",
      "Richard Fox"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Carolyn King",
      "Matt Becker"
     ],
     "a": [
      "Amy Moore",
      "Joe Moore"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Bonny Mayerberg",
      "David Margraff"
     ],
     "a": [
      "Tina Convery",
      "Darin Gall"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Betsy Hansbury",
      "David Wisch"
     ],
     "a": [
      "Audrey Brisson",
      "Mark Skolnik"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Betsy Hansbury",
      "Carolyn King"
     ],
     "a": [
      "Amy Moore",
      "Heidi Weinroth"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lauren Ricks",
      "Bonny Mayerberg"
     ],
     "a": [
      "Audrey Brisson",
      "Lori Frank"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "David Wisch",
      "Andrew Frey"
     ],
     "a": [
      "Richard Fox",
      "Mark Skolnik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Matt Becker",
      "Chris Hannah"
     ],
     "a": [
      "Darin Gall",
      "Eric Smith"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Betsy Hansbury",
      "Andrew Frey"
     ],
     "a": [
      "Tina Convery",
      "Eric Smith"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Carolyn King",
      "Matt Becker"
     ],
     "a": [
      "Audrey Brisson",
      "Joe Moore"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Edie Kwasnoski",
      "David Margraff"
     ],
     "a": [
      "Amy Moore",
      "Darin Gall"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lauren Ricks",
      "Chris Hannah"
     ],
     "a": [
      "Lori Frank",
      "Mark Skolnik"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Betsy Hansbury",
      "Lauren Ricks"
     ],
     "a": [
      "Tina Convery",
      "Audrey Brisson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Edie Kwasnoski",
      "Bonny Mayerberg"
     ],
     "a": [
      "Heidi Weinroth",
      "Lori Frank"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "David Margraff",
      "Chris Hannah"
     ],
     "a": [
      "Richard Fox",
      "Darin Gall"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "David Wisch",
      "Matt Becker"
     ],
     "a": [
      "Joe Moore",
      "Eric Smith"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Bonny Mayerberg",
      "David Margraff"
     ],
     "a": [
      "Lori Frank",
      "Joe Moore"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lauren Ricks",
      "Chris Hannah"
     ],
     "a": [
      "Heidi Weinroth",
      "Eric Smith"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Edie Kwasnoski",
      "Andrew Frey"
     ],
     "a": [
      "Amy Moore",
      "Mark Skolnik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Carolyn King",
      "David Wisch"
     ],
     "a": [
      "Audrey Brisson",
      "Richard Fox"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Carolyn King",
      "Bonny Mayerberg"
     ],
     "a": [
      "Amy Moore",
      "Tina Convery"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Betsy Hansbury",
      "Edie Kwasnoski"
     ],
     "a": [
      "Audrey Brisson",
      "Heidi Weinroth"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "David Margraff",
      "David Wisch"
     ],
     "a": [
      "Darin Gall",
      "Mark Skolnik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Andrew Frey",
      "Matt Becker"
     ],
     "a": [
      "Joe Moore",
      "Richard Fox"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Carolyn King",
      "Andrew Frey"
     ],
     "a": [
      "Tina Convery",
      "Richard Fox"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Lauren Ricks",
      "David Wisch"
     ],
     "a": [
      "Heidi Weinroth",
      "Darin Gall"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Betsy Hansbury",
      "Matt Becker"
     ],
     "a": [
      "Amy Moore",
      "Eric Smith"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Bonny Mayerberg",
      "Chris Hannah"
     ],
     "a": [
      "Lori Frank",
      "Mark Skolnik"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Betsy Hansbury",
      "Edie Kwasnoski"
     ],
     "a": [
      "Heidi Weinroth",
      "Audrey Brisson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Carolyn King",
      "Lauren Ricks"
     ],
     "a": [
      "Amy Moore",
      "Lori Frank"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Andrew Frey",
      "Chris Hannah"
     ],
     "a": [
      "Richard Fox",
      "Eric Smith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Matt Becker",
      "David Margraff"
     ],
     "a": [
      "Joe Moore",
      "Darin Gall"
     ]
    }
   ],
   "subs": [
    "Edie Kwasnoski",
    "David Margraff"
   ]
  },
  {
   "result": "away",
   "week": 1,
   "home": "Pickleball Palace Blue",
   "away": "PickleRage Union County",
   "time": "2026-08-22T14:00:00",
   "complete": true,
   "homePoints": 533,
   "awayPoints": 647,
   "homeGW": 9,
   "awayGW": 23,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lynn Quinn",
      "Andrew Craig"
     ],
     "a": [
      "Jennifer Applebee",
      "Ed Amato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Clare Cruz",
      "Al Chen"
     ],
     "a": [
      "Kathi Savage",
      "Mark Baker"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Lorraine Roeller",
      "Mark Garner"
     ],
     "a": [
      "Linda Bozzo",
      "John Danks"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Tracy Narag",
      "Stanley Okpor"
     ],
     "a": [
      "Teresa Carr",
      "Michael Barry"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lisa Munjack",
      "Lynn Quinn"
     ],
     "a": [
      "Jennifer Applebee",
      "Linda Bozzo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Clare Cruz",
      "Cindy Barban"
     ],
     "a": [
      "Marita Dow",
      "Kathi Savage"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Bill Lam",
      "Stanley Okpor"
     ],
     "a": [
      "John Danks",
      "Louis Sapirman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Mark Garner",
      "Andrew Craig"
     ],
     "a": [
      "Mark Baker",
      "Michael Barry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Lisa Munjack",
      "Al Chen"
     ],
     "a": [
      "Teresa Carr",
      "John Danks"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Tracy Narag",
      "Bill Lam"
     ],
     "a": [
      "Kathi Savage",
      "Michael Barry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Cindy Barban",
      "Tracy Waffenfeld"
     ],
     "a": [
      "Marita Dow",
      "Ed Amato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Lynn Quinn",
      "Mark Garner"
     ],
     "a": [
      "Linda Bozzo",
      "Louis Sapirman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lorraine Roeller",
      "Tracy Narag"
     ],
     "a": [
      "Linda Bozzo",
      "Teresa Carr"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Lisa Munjack",
      "Lynn Quinn"
     ],
     "a": [
      "Marita Dow",
      "Jennifer Applebee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Bill Lam",
      "Mark Garner"
     ],
     "a": [
      "John Danks",
      "Louis Sapirman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Stanley Okpor",
      "Tracy Waffenfeld"
     ],
     "a": [
      "Mark Baker",
      "Ed Amato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lorraine Roeller",
      "Al Chen"
     ],
     "a": [
      "Teresa Carr",
      "Louis Sapirman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Cindy Barban",
      "Tracy Waffenfeld"
     ],
     "a": [
      "Kathi Savage",
      "John Danks"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lynn Quinn",
      "Mark Garner"
     ],
     "a": [
      "Jennifer Applebee",
      "Michael Barry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lisa Munjack",
      "Andrew Craig"
     ],
     "a": [
      "Marita Dow",
      "Mark Baker"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Tracy Narag",
      "Clare Cruz"
     ],
     "a": [
      "Marita Dow",
      "Kathi Savage"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Lorraine Roeller",
      "Cindy Barban"
     ],
     "a": [
      "Linda Bozzo",
      "Jennifer Applebee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Bill Lam",
      "Tracy Waffenfeld"
     ],
     "a": [
      "Mark Baker",
      "Louis Sapirman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Stanley Okpor",
      "Andrew Craig"
     ],
     "a": [
      "Ed Amato",
      "Michael Barry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Tracy Narag",
      "Andrew Craig"
     ],
     "a": [
      "Marita Dow",
      "Ed Amato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Cindy Barban",
      "Al Chen"
     ],
     "a": [
      "Kathi Savage",
      "John Danks"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Clare Cruz",
      "Bill Lam"
     ],
     "a": [
      "Teresa Carr",
      "Michael Barry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lynn Quinn",
      "Stanley Okpor"
     ],
     "a": [
      "Linda Bozzo",
      "Louis Sapirman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Clare Cruz",
      "Lisa Munjack"
     ],
     "a": [
      "Linda Bozzo",
      "Teresa Carr"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Lorraine Roeller",
      "Tracy Narag"
     ],
     "a": [
      "Jennifer Applebee",
      "Kathi Savage"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Al Chen",
      "Tracy Waffenfeld"
     ],
     "a": [
      "Louis Sapirman",
      "Ed Amato"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Stanley Okpor",
      "Bill Lam"
     ],
     "a": [
      "Michael Barry",
      "John Danks"
     ]
    }
   ],
   "subs": [
    "Teresa Carr"
   ]
  },
  {
   "result": "away",
   "week": 1,
   "home": "Allstar Pickler",
   "away": "Picklr Fair Lawn",
   "time": "2026-08-22T14:30:00",
   "complete": true,
   "homePoints": 583,
   "awayPoints": 636,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jessie Fang",
      "Alex Chang"
     ],
     "a": [
      "Qiuyan Kong",
      "Michael Hsieh"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 30,
     "as": 28,
     "h": [
      "Lingshan Hsieh",
      "Dajie （David） Yang"
     ],
     "a": [
      "Mylene Tenorio",
      "Chuck Silvester"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Angela Chen",
      "Eric Fang"
     ],
     "a": [
      "Maria Fanfa",
      "Dennis Tenorio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Feng Zhang",
      "Buyi Zhang"
     ],
     "a": [
      "Patty Direzze",
      "Craig Rathjen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lingshan Hsieh",
      "Feng Zhang"
     ],
     "a": [
      "Marcia Rathjen",
      "Patty Direzze"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jessie Fang",
      "Irish Lee"
     ],
     "a": [
      "Qiuyan Kong",
      "Olga Sedycias"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Alex Chang",
      "Eric Fang"
     ],
     "a": [
      "Chuck Silvester",
      "Dennis Tenorio"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Buyi Zhang",
      "George Zhou"
     ],
     "a": [
      "Michael Hsieh",
      "Craig Rathjen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Angela Chen",
      "Eric Fang"
     ],
     "a": [
      "Mylene Tenorio",
      "Michael Hsieh"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Irish Lee",
      "Alex Chang"
     ],
     "a": [
      "Olga Sedycias",
      "Chuck Silvester"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jessie Fang",
      "Dajie （David） Yang"
     ],
     "a": [
      "Patty Direzze",
      "Dennis Tenorio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Feng Zhang",
      "George Zhou"
     ],
     "a": [
      "Maria Fanfa",
      "Erik Abramson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Angela Chen",
      "Feng Zhang"
     ],
     "a": [
      "Marcia Rathjen",
      "Olga Sedycias"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Lingshan Hsieh",
      "Irish Lee"
     ],
     "a": [
      "Maria Fanfa",
      "Mylene Tenorio"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Alex Chang",
      "Buyi Zhang"
     ],
     "a": [
      "Craig Rathjen",
      "Erik Abramson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Eric Fang",
      "Dajie （David） Yang"
     ],
     "a": [
      "Michael Hsieh",
      "Chuck Silvester"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jessie Fang",
      "Buyi Zhang"
     ],
     "a": [
      "Maria Fanfa",
      "Dennis Tenorio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Lingshan Hsieh",
      "Alex Chang"
     ],
     "a": [
      "Marcia Rathjen",
      "Michael Hsieh"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Irish Lee",
      "George Zhou"
     ],
     "a": [
      "Qiuyan Kong",
      "Erik Abramson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Angela Chen",
      "Dajie （David） Yang"
     ],
     "a": [
      "Olga Sedycias",
      "Craig Rathjen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jessie Fang",
      "Feng Zhang"
     ],
     "a": [
      "Mylene Tenorio",
      "Patty Direzze"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Angela Chen",
      "Lingshan Hsieh"
     ],
     "a": [
      "Qiuyan Kong",
      "Marcia Rathjen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Eric Fang",
      "Dajie （David） Yang"
     ],
     "a": [
      "Michael Hsieh",
      "Craig Rathjen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Buyi Zhang",
      "George Zhou"
     ],
     "a": [
      "Dennis Tenorio",
      "Chuck Silvester"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Feng Zhang",
      "Dajie （David） Yang"
     ],
     "a": [
      "Patty Direzze",
      "Chuck Silvester"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jessie Fang",
      "Buyi Zhang"
     ],
     "a": [
      "Maria Fanfa",
      "Craig Rathjen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Angela Chen",
      "George Zhou"
     ],
     "a": [
      "Marcia Rathjen",
      "Michael Hsieh"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Lingshan Hsieh",
      "Alex Chang"
     ],
     "a": [
      "Qiuyan Kong",
      "Dennis Tenorio"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Jessie Fang",
      "Lingshan Hsieh"
     ],
     "a": [
      "Maria Fanfa",
      "Mylene Tenorio"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Angela Chen",
      "Irish Lee"
     ],
     "a": [
      "Qiuyan Kong",
      "Olga Sedycias"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Alex Chang",
      "Dajie （David） Yang"
     ],
     "a": [
      "Chuck Silvester",
      "Erik Abramson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Eric Fang",
      "Buyi Zhang"
     ],
     "a": [
      "Dennis Tenorio",
      "Craig Rathjen"
     ]
    }
   ],
   "subs": [
    "Erik Abramson",
    "Maria Fanfa",
    "Feng Zhang",
    "Buyi Zhang",
    "Angela Chen",
    "George Zhou"
   ]
  },
  {
   "result": "home",
   "week": 1,
   "home": "ACE Moorestown",
   "away": "Mercer Bucks",
   "time": "2026-08-22T15:00:00",
   "complete": true,
   "homePoints": 638,
   "awayPoints": 544,
   "homeGW": 24,
   "awayGW": 8,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Joan Rudderow",
      "Greg Taylor"
     ],
     "a": [
      "Jean Knab",
      "Jason Belmont"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Angela Bartelt",
      "Scott Auty"
     ],
     "a": [
      "Lisa Angelini",
      "Farzad Shadzik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Tinglan Zhao",
      "Dennis Higman"
     ],
     "a": [
      "Claudia Dunlevy",
      "Ken Gross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ginger Evans",
      "Steven Heller"
     ],
     "a": [
      "Tami Mohney",
      "Howard Eng"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Angela Bartelt",
      "Amy Neckes"
     ],
     "a": [
      "Jean Knab",
      "Lisa Angelini"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Tinglan Zhao",
      "Joan Rudderow"
     ],
     "a": [
      "Claudia Dunlevy",
      "Cindy Suter"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Greg Taylor",
      "Dennis Higman"
     ],
     "a": [
      "Farzad Shadzik",
      "Howard Eng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Steven Heller",
      "Martyn Babitz"
     ],
     "a": [
      "Jerry Margulies",
      "Jason Belmont"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Amy Neckes",
      "Greg Taylor"
     ],
     "a": [
      "Jean Knab",
      "Jason Belmont"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Ginger Evans",
      "Martyn Babitz"
     ],
     "a": [
      "Lisa Angelini",
      "Jerry Margulies"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Tinglan Zhao",
      "Steven Heller"
     ],
     "a": [
      "Tami Mohney",
      "Farzad Shadzik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Angela Bartelt",
      "Scott Auty"
     ],
     "a": [
      "Claudia Dunlevy",
      "Ken Gross"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Amy Neckes",
      "Ginger Evans"
     ],
     "a": [
      "Jean Knab",
      "Tami Mohney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Tinglan Zhao",
      "Joan Rudderow"
     ],
     "a": [
      "Cindy Suter",
      "Lisa Angelini"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Steven Heller",
      "Martyn Babitz"
     ],
     "a": [
      "Farzad Shadzik",
      "Howard Eng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Dennis Higman",
      "Scott Auty"
     ],
     "a": [
      "Ken Gross",
      "Jerry Margulies"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Amy Neckes",
      "Greg Taylor"
     ],
     "a": [
      "Lisa Angelini",
      "Jerry Margulies"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Joan Rudderow",
      "Steven Heller"
     ],
     "a": [
      "Claudia Dunlevy",
      "Jason Belmont"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Tinglan Zhao",
      "Dennis Higman"
     ],
     "a": [
      "Tami Mohney",
      "Howard Eng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Angela Bartelt",
      "Martyn Babitz"
     ],
     "a": [
      "Cindy Suter",
      "Ken Gross"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Joan Rudderow",
      "Angela Bartelt"
     ],
     "a": [
      "Jean Knab",
      "Cindy Suter"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Ginger Evans",
      "Amy Neckes"
     ],
     "a": [
      "Claudia Dunlevy",
      "Tami Mohney"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Greg Taylor",
      "Martyn Babitz"
     ],
     "a": [
      "Ken Gross",
      "Farzad Shadzik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Scott Auty",
      "Dennis Higman"
     ],
     "a": [
      "Jason Belmont",
      "Howard Eng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Ginger Evans",
      "Dennis Higman"
     ],
     "a": [
      "Jean Knab",
      "Ken Gross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tinglan Zhao",
      "Martyn Babitz"
     ],
     "a": [
      "Lisa Angelini",
      "Howard Eng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Angela Bartelt",
      "Greg Taylor"
     ],
     "a": [
      "Tami Mohney",
      "Farzad Shadzik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Joan Rudderow",
      "Scott Auty"
     ],
     "a": [
      "Cindy Suter",
      "Jason Belmont"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Joan Rudderow",
      "Amy Neckes"
     ],
     "a": [
      "Jean Knab",
      "Cindy Suter"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Tinglan Zhao",
      "Ginger Evans"
     ],
     "a": [
      "Lisa Angelini",
      "Tami Mohney"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Dennis Higman",
      "Greg Taylor"
     ],
     "a": [
      "Jason Belmont",
      "Farzad Shadzik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Scott Auty",
      "Steven Heller"
     ],
     "a": [
      "Jerry Margulies",
      "Howard Eng"
     ]
    }
   ],
   "subs": [
    "Scott Auty"
   ]
  },
  {
   "result": "home",
   "week": 1,
   "home": "Forward",
   "away": "Bounce Philly",
   "time": "2026-08-22T15:00:00",
   "complete": true,
   "homePoints": 646,
   "awayPoints": 558,
   "homeGW": 22,
   "awayGW": 10,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Ellen Rubiato",
      "Bill Venella"
     ],
     "a": [
      "Andria Lochtenbergh",
      "Derik Lochtenbergh"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 30,
     "as": 28,
     "h": [
      "Jennifer Laroque",
      "Scott Gardo"
     ],
     "a": [
      "Pamela Toy",
      "Paul Mcalary"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kim Slomeana",
      "Ken Wager"
     ],
     "a": [
      "Vivian Funchion",
      "Wen Chang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Lori Wild",
      "Dan Callaghan"
     ],
     "a": [
      "Lisa Miller",
      "Michael Burns"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Lori Wild",
      "Carolyn Laverdiere"
     ],
     "a": [
      "Vivian Funchion",
      "Deb Gray"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kim Slomeana",
      "Ellen Rubiato"
     ],
     "a": [
      "Andria Lochtenbergh",
      "Pamela Toy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Tom Zamojcin",
      "Scott Gardo"
     ],
     "a": [
      "Wen Chang",
      "Paul Mcalary"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Bill Venella",
      "Ken Wager"
     ],
     "a": [
      "Michael Burns",
      "Derik Lochtenbergh"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ellen Rubiato",
      "Tom Zamojcin"
     ],
     "a": [
      "Pamela Toy",
      "Michael Burns"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kim Slomeana",
      "Scott Gardo"
     ],
     "a": [
      "Lisa Miller",
      "Paul Mcalary"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Carolyn Laverdiere",
      "Jonathan Capeci"
     ],
     "a": [
      "Andria Lochtenbergh",
      "Derik Lochtenbergh"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jennifer Laroque",
      "Dan Callaghan"
     ],
     "a": [
      "Deb Gray",
      "Wen Chang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Carolyn Laverdiere",
      "Lori Wild"
     ],
     "a": [
      "Lisa Miller",
      "Andria Lochtenbergh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Kim Slomeana",
      "Jennifer Laroque"
     ],
     "a": [
      "Vivian Funchion",
      "Deb Gray"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ken Wager",
      "Dan Callaghan"
     ],
     "a": [
      "Wen Chang",
      "Paul Mcalary"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Bill Venella",
      "Scott Gardo"
     ],
     "a": [
      "Michael Burns",
      "Derik Lochtenbergh"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ellen Rubiato",
      "Tom Zamojcin"
     ],
     "a": [
      "Vivian Funchion",
      "Paul Mcalary"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jennifer Laroque",
      "Ken Wager"
     ],
     "a": [
      "Lisa Miller",
      "Wen Chang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Lori Wild",
      "Jonathan Capeci"
     ],
     "a": [
      "Pamela Toy",
      "Michael Burns"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kim Slomeana",
      "Dan Callaghan"
     ],
     "a": [
      "Deb Gray",
      "Derik Lochtenbergh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lori Wild",
      "Jennifer Laroque"
     ],
     "a": [
      "Vivian Funchion",
      "Lisa Miller"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ellen Rubiato",
      "Carolyn Laverdiere"
     ],
     "a": [
      "Andria Lochtenbergh",
      "Pamela Toy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Scott Gardo",
      "Tom Zamojcin"
     ],
     "a": [
      "Michael Burns",
      "Wen Chang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Bill Venella",
      "Jonathan Capeci"
     ],
     "a": [
      "Derik Lochtenbergh",
      "Paul Mcalary"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kim Slomeana",
      "Ken Wager"
     ],
     "a": [
      "Vivian Funchion",
      "Paul Mcalary"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Lori Wild",
      "Scott Gardo"
     ],
     "a": [
      "Andria Lochtenbergh",
      "Michael Burns"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Carolyn Laverdiere",
      "Dan Callaghan"
     ],
     "a": [
      "Deb Gray",
      "Wen Chang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Ellen Rubiato",
      "Bill Venella"
     ],
     "a": [
      "Pamela Toy",
      "Derik Lochtenbergh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Jennifer Laroque",
      "Carolyn Laverdiere"
     ],
     "a": [
      "Andria Lochtenbergh",
      "Lisa Miller"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kim Slomeana",
      "Lori Wild"
     ],
     "a": [
      "Deb Gray",
      "Pamela Toy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Bill Venella",
      "Dan Callaghan"
     ],
     "a": [
      "Derik Lochtenbergh",
      "Wen Chang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jonathan Capeci",
      "Ken Wager"
     ],
     "a": [
      "Michael Burns",
      "Paul Mcalary"
     ]
    }
   ],
   "subs": [
    "Lisa Miller",
    "Deb Gray",
    "Pamela Toy",
    "Vivian Funchion",
    "Jonathan Capeci"
   ]
  },
  {
   "result": "away",
   "week": 1,
   "home": "Flemington Green",
   "away": "Flemington Blue",
   "time": "2026-08-22T15:00:00",
   "complete": true,
   "homePoints": 545,
   "awayPoints": 645,
   "homeGW": 10,
   "awayGW": 22,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Grace Brennan",
      "Apparao Avancha"
     ],
     "a": [
      "Sarah Stangota",
      "Anthony Leone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Marianne Rosato",
      "Sam Doctor"
     ],
     "a": [
      "Gail Hannagan",
      "Eric Brezina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tao Zhu",
      "Bill Vit"
     ],
     "a": [
      "Holly Ferguson",
      "Jeffrey Hartford"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Manuela Caiati",
      "Scott Heist"
     ],
     "a": [
      "Xinxin Huang",
      "Ren Mortara"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Manuela Caiati",
      "Leah Greenstein"
     ],
     "a": [
      "Gail Hannagan",
      "Xinxin Huang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Marianne Rosato",
      "Judith Macarthur"
     ],
     "a": [
      "Sheila Curran",
      "Eleni Leone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Apparao Avancha",
      "Sam Doctor"
     ],
     "a": [
      "Anthony Leone",
      "Eric Brezina"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Hector Lopez",
      "Bill Vit"
     ],
     "a": [
      "Tom Dominczyk",
      "Paul Phillips"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Grace Brennan",
      "Bill Vit"
     ],
     "a": [
      "Sheila Curran",
      "Jeffrey Hartford"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Marianne Rosato",
      "Apparao Avancha"
     ],
     "a": [
      "Eleni Leone",
      "Anthony Leone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Judith Macarthur",
      "Scott Heist"
     ],
     "a": [
      "Sarah Stangota",
      "Ren Mortara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Tao Zhu",
      "Hector Lopez"
     ],
     "a": [
      "Holly Ferguson",
      "Tom Dominczyk"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Tao Zhu",
      "Grace Brennan"
     ],
     "a": [
      "Gail Hannagan",
      "Eleni Leone"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Manuela Caiati",
      "Leah Greenstein"
     ],
     "a": [
      "Holly Ferguson",
      "Xinxin Huang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Sam Doctor",
      "Scott Heist"
     ],
     "a": [
      "Eric Brezina",
      "Jeffrey Hartford"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Bill Vit",
      "Hector Lopez"
     ],
     "a": [
      "Ren Mortara",
      "Paul Phillips"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Leah Greenstein",
      "Scott Heist"
     ],
     "a": [
      "Sarah Stangota",
      "Tom Dominczyk"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Manuela Caiati",
      "Sam Doctor"
     ],
     "a": [
      "Xinxin Huang",
      "Eric Brezina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Marianne Rosato",
      "Apparao Avancha"
     ],
     "a": [
      "Gail Hannagan",
      "Anthony Leone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Judith Macarthur",
      "Hector Lopez"
     ],
     "a": [
      "Sheila Curran",
      "Paul Phillips"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Grace Brennan",
      "Marianne Rosato"
     ],
     "a": [
      "Sheila Curran",
      "Sarah Stangota"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Manuela Caiati",
      "Judith Macarthur"
     ],
     "a": [
      "Holly Ferguson",
      "Eleni Leone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Sam Doctor",
      "Scott Heist"
     ],
     "a": [
      "Eric Brezina",
      "Jeffrey Hartford"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Apparao Avancha",
      "Bill Vit"
     ],
     "a": [
      "Tom Dominczyk",
      "Ren Mortara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Grace Brennan",
      "Sam Doctor"
     ],
     "a": [
      "Gail Hannagan",
      "Tom Dominczyk"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Leah Greenstein",
      "Bill Vit"
     ],
     "a": [
      "Sheila Curran",
      "Ren Mortara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Judith Macarthur",
      "Hector Lopez"
     ],
     "a": [
      "Xinxin Huang",
      "Paul Phillips"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tao Zhu",
      "Apparao Avancha"
     ],
     "a": [
      "Sarah Stangota",
      "Anthony Leone"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Grace Brennan",
      "Marianne Rosato"
     ],
     "a": [
      "Gail Hannagan",
      "Sarah Stangota"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Leah Greenstein",
      "Tao Zhu"
     ],
     "a": [
      "Eleni Leone",
      "Holly Ferguson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Sam Doctor",
      "Apparao Avancha"
     ],
     "a": [
      "Eric Brezina",
      "Anthony Leone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Scott Heist",
      "Hector Lopez"
     ],
     "a": [
      "Jeffrey Hartford",
      "Paul Phillips"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 2,
   "home": "Players Courtyard",
   "away": "Forward",
   "time": "2026-08-29T13:00:00",
   "complete": true,
   "homePoints": 496,
   "awayPoints": 644,
   "homeGW": 6,
   "awayGW": 26,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Tracy Giunta",
      "Joseph Koerner"
     ],
     "a": [
      "Crista Renauro",
      "Chris Allander"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Christine Fletcher",
      "Tom Giunta"
     ],
     "a": [
      "Jennifer Laroque",
      "Dan Callaghan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Xiaojun Yuan",
      "Nghia Bui"
     ],
     "a": [
      "Ellen Rubiato",
      "Bill Venella"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 4,
     "h": [
      "Jill Nixon",
      "Craig Mehnert"
     ],
     "a": [
      "Carolyn Laverdiere",
      "Scott Gardo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Jill Nixon",
      "Tracy Giunta"
     ],
     "a": [
      "Kim Slomeana",
      "Crista Renauro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Danya George",
      "Xiaojun Yuan"
     ],
     "a": [
      "Ellen Rubiato",
      "Carolyn Laverdiere"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Joseph Koerner",
      "Tom Giunta"
     ],
     "a": [
      "Bill Venella",
      "Chris Allander"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Nghia Bui",
      "Michael Ross"
     ],
     "a": [
      "Scott Gardo",
      "Dan Callaghan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jill Nixon",
      "Tom Giunta"
     ],
     "a": [
      "Crista Renauro",
      "Dan Callaghan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Danya George",
      "Michael Ross"
     ],
     "a": [
      "Ellen Rubiato",
      "Chris Allander"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Xiaojun Yuan",
      "Craig Mehnert"
     ],
     "a": [
      "Kim Slomeana",
      "Scott Gardo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Christine Fletcher",
      "Nghia Bui"
     ],
     "a": [
      "Jennifer Laroque",
      "Bill Venella"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Danya George",
      "Tracy Giunta"
     ],
     "a": [
      "Carolyn Laverdiere",
      "Ellen Rubiato"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Christine Fletcher",
      "Xiaojun Yuan"
     ],
     "a": [
      "Kim Slomeana",
      "Jennifer Laroque"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Joseph Koerner",
      "Michael Ross"
     ],
     "a": [
      "Bill Venella",
      "Scott Gardo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Craig Mehnert",
      "Tom Giunta"
     ],
     "a": [
      "Dan Callaghan",
      "Chris Allander"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Danya George",
      "Joseph Koerner"
     ],
     "a": [
      "Ellen Rubiato",
      "Dan Callaghan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Christine Fletcher",
      "Nghia Bui"
     ],
     "a": [
      "Crista Renauro",
      "Scott Gardo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jill Nixon",
      "Michael Ross"
     ],
     "a": [
      "Carolyn Laverdiere",
      "Chris Allander"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Xiaojun Yuan",
      "Craig Mehnert"
     ],
     "a": [
      "Kim Slomeana",
      "Bill Venella"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Tracy Giunta",
      "Christine Fletcher"
     ],
     "a": [
      "Jennifer Laroque",
      "Carolyn Laverdiere"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jill Nixon",
      "Michelle Lehman"
     ],
     "a": [
      "Kim Slomeana",
      "Crista Renauro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Craig Mehnert",
      "Nghia Bui"
     ],
     "a": [
      "Chris Allander",
      "Scott Gardo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Joseph Koerner",
      "Tom Giunta"
     ],
     "a": [
      "Dan Callaghan",
      "Bill Venella"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jill Nixon",
      "Joseph Koerner"
     ],
     "a": [
      "Ellen Rubiato",
      "Bill Venella"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Tracy Giunta",
      "Tom Giunta"
     ],
     "a": [
      "Carolyn Laverdiere",
      "Dan Callaghan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Michelle Lehman",
      "Craig Mehnert"
     ],
     "a": [
      "Jennifer Laroque",
      "Scott Gardo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 4,
     "as": 21,
     "h": [
      "Danya George",
      "Michael Ross"
     ],
     "a": [
      "Crista Renauro",
      "Chris Allander"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jill Nixon",
      "Christine Fletcher"
     ],
     "a": [
      "Kim Slomeana",
      "Ellen Rubiato"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Xiaojun Yuan",
      "Michelle Lehman"
     ],
     "a": [
      "Crista Renauro",
      "Jennifer Laroque"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Michael Ross",
      "Tom Giunta"
     ],
     "a": [
      "Chris Allander",
      "Dan Callaghan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Craig Mehnert",
      "Nghia Bui"
     ],
     "a": [
      "Bill Venella",
      "Scott Gardo"
     ]
    }
   ],
   "subs": [
    "Xiaojun Yuan"
   ]
  },
  {
   "result": null,
   "week": 2,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Pickleball Palace Blue",
   "time": "2026-08-29T13:00:00",
   "complete": false,
   "games": [
    {
     "t": "mixed",
     "h": [
      "Karin Schneider",
      "Tim Lockburner"
     ],
     "a": [
      "Cheryl Minerowicz",
      "John Cusano"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Christine Levesque",
      "Jerry Ridder"
     ],
     "a": [
      "Lynn Quinn",
      "Geoffrey Baird"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Corinne Demeuse",
      "Brian Borer"
     ],
     "a": [
      "Kristin Duva",
      "Mark Garner"
     ]
    },
    {
     "t": "female",
     "h": [
      "Christine Levesque",
      "Robin Aiello"
     ],
     "a": [
      "Cheryl Minerowicz",
      "Lynn Quinn"
     ]
    },
    {
     "t": "female",
     "h": [
      "Corinne Demeuse",
      "Karin Schneider"
     ],
     "a": [
      "Christine Ostapiak",
      "Noelie Hillebrecht"
     ]
    },
    {
     "t": "male",
     "h": [
      "Brian Borer",
      "Tim Lockburner"
     ],
     "a": [
      "Stanley Okpor",
      "Geoffrey Baird"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Karin Schneider",
      "Tim Lockburner"
     ],
     "a": [
      "Kristin Duva",
      "John Cusano"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Robin Aiello",
      "Gary Leon"
     ],
     "a": [
      "Lynn Quinn",
      "Geoffrey Baird"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Christine Levesque",
      "Jerry Ridder"
     ],
     "a": [
      "Noelie Hillebrecht",
      "Mark Garner"
     ]
    },
    {
     "t": "female",
     "h": [
      "Corinne Demeuse",
      "Karin Schneider"
     ],
     "a": [
      "Cheryl Minerowicz",
      "Noelie Hillebrecht"
     ]
    },
    {
     "t": "female",
     "h": [
      "Christine Levesque",
      "Robin Aiello"
     ],
     "a": [
      "Kristin Duva",
      "Lynn Quinn"
     ]
    },
    {
     "t": "male",
     "h": [
      "Gary Leon",
      "Jerry Ridder"
     ],
     "a": [
      "Stanley Okpor",
      "John Cusano"
     ]
    },
    {
     "t": "male",
     "h": [
      "Brian Borer",
      "Tim Lockburner"
     ],
     "a": [
      "Mark Garner",
      "Tracy Waffenfeld"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Karin Schneider",
      "Brian Borer"
     ],
     "a": [
      "Lynn Quinn",
      "John Cusano"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Corinne Demeuse",
      "Jerry Ridder"
     ],
     "a": [
      "Cheryl Minerowicz",
      "Geoffrey Baird"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Christine Levesque",
      "Gary Leon"
     ],
     "a": [
      "Christine Ostapiak",
      "Mark Garner"
     ]
    },
    {
     "t": "female",
     "h": [
      "Karin Schneider",
      "Robin Aiello"
     ],
     "a": [
      "Christine Ostapiak",
      "Kristin Duva"
     ]
    },
    {
     "t": "female",
     "h": [
      "Christine Levesque",
      "Corinne Demeuse"
     ],
     "a": [
      "Noelie Hillebrecht",
      "Lynn Quinn"
     ]
    },
    {
     "t": "male",
     "h": [
      "Gary Leon",
      "Tim Lockburner"
     ],
     "a": [
      "Tracy Waffenfeld",
      "Stanley Okpor"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Corinne Demeuse",
      "Gary Leon"
     ],
     "a": [
      "Noelie Hillebrecht",
      "John Cusano"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Karin Schneider",
      "Brian Borer"
     ],
     "a": [
      "Cheryl Minerowicz",
      "Mark Garner"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Christine Levesque",
      "Tim Lockburner"
     ],
     "a": [
      "Christine Ostapiak",
      "Stanley Okpor"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Robin Aiello",
      "Jerry Ridder"
     ],
     "a": [
      "Kristin Duva",
      "Tracy Waffenfeld"
     ]
    },
    {
     "t": "female",
     "h": [
      "Christine Levesque",
      "Karin Schneider"
     ],
     "a": [
      "Christine Ostapiak",
      "Lynn Quinn"
     ]
    },
    {
     "t": "female",
     "h": [
      "Corinne Demeuse",
      "Robin Aiello"
     ],
     "a": [
      "Kristin Duva",
      "Noelie Hillebrecht"
     ]
    },
    {
     "t": "male",
     "h": [
      "Jerry Ridder",
      "Brian Borer"
     ],
     "a": [
      "Mark Garner",
      "Stanley Okpor"
     ]
    }
   ]
  },
  {
   "result": "away",
   "week": 2,
   "home": "Premiere Dinkers",
   "away": "One Love",
   "time": "2026-08-29T13:00:00",
   "complete": true,
   "homePoints": 607,
   "awayPoints": 2631,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Barbara Markoglu",
      "Joseph Romagnolo"
     ],
     "a": [
      "Amy Santopietro",
      "Dan Carrion"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Karen Chin",
      "John Rogers"
     ],
     "a": [
      "Janet Bodner",
      "David Katz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Alexandra Romagnolo",
      "David Cardinale"
     ],
     "a": [
      "Ericka Lyn Mayer",
      "Eric Brody"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Denise Caracciolo",
      "Felix Soto"
     ],
     "a": [
      "Michele Collins",
      "Phillip Perry"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Barbara Markoglu",
      "Karen Chin"
     ],
     "a": [
      "Ericka Lyn Mayer",
      "Michele Collins"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Marie Granberg",
      "Denise Caracciolo"
     ],
     "a": [
      "Tracy Kaban",
      "Brenda Mee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Joseph Romagnolo",
      "John Rogers"
     ],
     "a": [
      "Phillip Perry",
      "Timothy Cassidy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Felix Soto",
      "David Cardinale"
     ],
     "a": [
      "Eric Brody",
      "Erik Harrison"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Barbara Markoglu",
      "Joseph Romagnolo"
     ],
     "a": [
      "Amy Santopietro",
      "Dan Carrion"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Karen Chin",
      "John Rogers"
     ],
     "a": [
      "Janet Bodner",
      "David Katz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Marie Granberg",
      "David Cardinale"
     ],
     "a": [
      "Ericka Lyn Mayer",
      "Eric Brody"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Risa Korzekwinski",
      "Felix Soto"
     ],
     "a": [
      "Michele Collins",
      "Phillip Perry"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Barbara Markoglu",
      "Alexandra Romagnolo"
     ],
     "a": [
      "Ericka Lyn Mayer",
      "Janet Bodner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Risa Korzekwinski",
      "Denise Caracciolo"
     ],
     "a": [
      "Tracy Kaban",
      "Brenda Mee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "John Rogers",
      "Joseph Romagnolo"
     ],
     "a": [
      "Timothy Cassidy",
      "Phillip Perry"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Felix Soto",
      "David Cardinale"
     ],
     "a": [
      "Eric Brody",
      "Erik Harrison"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 2020,
     "h": [
      "Barbara Markoglu",
      "John Rogers"
     ],
     "a": [
      "Brenda Mee",
      "Timothy Cassidy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Karen Chin",
      "Joseph Romagnolo"
     ],
     "a": [
      "Michele Collins",
      "Erik Harrison"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Risa Korzekwinski",
      "David Cardinale"
     ],
     "a": [
      "Tracy Kaban",
      "Dan Carrion"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Alexandra Romagnolo",
      "Felix Soto"
     ],
     "a": [
      "Amy Santopietro",
      "David Katz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Denise Caracciolo",
      "Marie Granberg"
     ],
     "a": [
      "Tracy Kaban",
      "Amy Santopietro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Karen Chin",
      "Risa Korzekwinski"
     ],
     "a": [
      "Brenda Mee",
      "Ericka Lyn Mayer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "John Rogers",
      "Felix Soto"
     ],
     "a": [
      "Eric Brody",
      "Timothy Cassidy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Joseph Romagnolo",
      "David Cardinale"
     ],
     "a": [
      "Dan Carrion",
      "Erik Harrison"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Barbara Markoglu",
      "John Rogers"
     ],
     "a": [
      "Brenda Mee",
      "Phillip Perry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Karen Chin",
      "Joseph Romagnolo"
     ],
     "a": [
      "Amy Santopietro",
      "Timothy Cassidy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Alexandra Romagnolo",
      "Felix Soto"
     ],
     "a": [
      "Janet Bodner",
      "Dan Carrion"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Marie Granberg",
      "David Cardinale"
     ],
     "a": [
      "Tracy Kaban",
      "David Katz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Marie Granberg",
      "Risa Korzekwinski"
     ],
     "a": [
      "Janet Bodner",
      "Michele Collins"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Barbara Markoglu",
      "Denise Caracciolo"
     ],
     "a": [
      "Amy Santopietro",
      "Ericka Lyn Mayer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "John Rogers",
      "Felix Soto"
     ],
     "a": [
      "Phillip Perry",
      "Erik Harrison"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Joseph Romagnolo",
      "David Cardinale"
     ],
     "a": [
      "Timothy Cassidy",
      "Eric Brody"
     ]
    }
   ],
   "subs": [
    "Felix Soto",
    "Ericka Lyn Mayer",
    "Tracy Kaban"
   ]
  },
  {
   "result": "away",
   "week": 2,
   "home": "Dill Dinkers Newport",
   "away": "Bounce Malvern",
   "time": "2026-08-29T13:00:00",
   "complete": true,
   "homePoints": 481,
   "awayPoints": 659,
   "homeGW": 4,
   "awayGW": 28,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Karen Mcbride",
      "Joshua Holloway"
     ],
     "a": [
      "Lynn Snyder",
      "Anuraag Verma"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Jennifer Genna",
      "Joe Mccutchon"
     ],
     "a": [
      "Eden Paredes",
      "George Nouaime"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Josephine O'Neill",
      "Craig Mclean"
     ],
     "a": [
      "Zalene Corey",
      "Jeffrey Lindstrom"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Irma Myersdonihoo",
      "Chris Owens"
     ],
     "a": [
      "Lisa Howdyshell",
      "Matthew Memmo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Dana Isom",
      "Karen Austin"
     ],
     "a": [
      "Zalene Corey",
      "Kimberly Kusumoto"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Irma Myersdonihoo",
      "Karen Mcbride"
     ],
     "a": [
      "Lisa Howdyshell",
      "Eden Paredes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Michael Hougentogler",
      "Charles Rhodes"
     ],
     "a": [
      "Matthew Memmo",
      "Jeffrey Lindstrom"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Joshua Holloway",
      "Joe Mccutchon"
     ],
     "a": [
      "Harihar Chudamani",
      "Anuraag Verma"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Jennifer Genna",
      "Chris Owens"
     ],
     "a": [
      "Lynn Snyder",
      "Anuraag Verma"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Dana Isom",
      "Michael Hougentogler"
     ],
     "a": [
      "Lisa Howdyshell",
      "George Nouaime"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Josephine O'Neill",
      "Joshua Holloway"
     ],
     "a": [
      "Kimberly Kusumoto",
      "Matthew Memmo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Karen Mcbride",
      "Craig Mclean"
     ],
     "a": [
      "Eden Paredes",
      "Harihar Chudamani"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Jennifer Genna",
      "Karen Austin"
     ],
     "a": [
      "Zalene Corey",
      "Lisa Howdyshell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Dana Isom",
      "Irma Myersdonihoo"
     ],
     "a": [
      "Eden Paredes",
      "Lynn Snyder"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Joe Mccutchon",
      "Charles Rhodes"
     ],
     "a": [
      "Harihar Chudamani",
      "George Nouaime"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Michael Hougentogler",
      "Craig Mclean"
     ],
     "a": [
      "Anuraag Verma",
      "Jeffrey Lindstrom"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Irma Myersdonihoo",
      "Craig Mclean"
     ],
     "a": [
      "Lisa Howdyshell",
      "Anuraag Verma"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Karen Mcbride",
      "Charles Rhodes"
     ],
     "a": [
      "Lynn Snyder",
      "George Nouaime"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Josephine O'Neill",
      "Chris Owens"
     ],
     "a": [
      "Zalene Corey",
      "Matthew Memmo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Karen Austin",
      "Joshua Holloway"
     ],
     "a": [
      "Kimberly Kusumoto",
      "Harihar Chudamani"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Josephine O'Neill",
      "Karen Mcbride"
     ],
     "a": [
      "Lisa Howdyshell",
      "Lynn Snyder"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jennifer Genna",
      "Dana Isom"
     ],
     "a": [
      "Zalene Corey",
      "Eden Paredes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Charles Rhodes",
      "Craig Mclean"
     ],
     "a": [
      "Jeffrey Lindstrom",
      "Matthew Memmo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Joe Mccutchon",
      "Michael Hougentogler"
     ],
     "a": [
      "Anuraag Verma",
      "Harihar Chudamani"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Karen Austin",
      "Michael Hougentogler"
     ],
     "a": [
      "Kimberly Kusumoto",
      "George Nouaime"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Irma Myersdonihoo",
      "Joe Mccutchon"
     ],
     "a": [
      "Lisa Howdyshell",
      "Jeffrey Lindstrom"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Karen Mcbride",
      "Chris Owens"
     ],
     "a": [
      "Zalene Corey",
      "Matthew Memmo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Dana Isom",
      "Joshua Holloway"
     ],
     "a": [
      "Lynn Snyder",
      "Harihar Chudamani"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Karen Austin",
      "Josephine O'Neill"
     ],
     "a": [
      "Zalene Corey",
      "Lynn Snyder"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Irma Myersdonihoo",
      "Jennifer Genna"
     ],
     "a": [
      "Kimberly Kusumoto",
      "Eden Paredes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Joshua Holloway",
      "Craig Mclean"
     ],
     "a": [
      "Jeffrey Lindstrom",
      "Anuraag Verma"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Chris Owens",
      "Charles Rhodes"
     ],
     "a": [
      "Matthew Memmo",
      "George Nouaime"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": null,
   "week": 2,
   "home": "Picklr Fair Lawn",
   "away": "PickleRage Union County",
   "time": "2026-08-29T14:00:00",
   "complete": false,
   "games": [
    {
     "t": "mixed",
     "h": [
      "Olga Sedycias",
      "Craig Rathjen"
     ],
     "a": [
      "Linda Bozzo",
      "John Danks"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Renee Froeberg",
      "Peter O'Farrill"
     ],
     "a": [
      "Teresa Carr",
      "Steve Nuguid"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Marcia Rathjen",
      "Dennis Tenorio"
     ],
     "a": [
      "Amanda Nguyen",
      "Mark Baker"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Mylene Tenorio",
      "Chuck Silvester"
     ],
     "a": [
      "Marita Dow",
      "Marty Tan"
     ]
    },
    {
     "t": "female",
     "h": [
      "Olga Sedycias",
      "Qiuyan Kong"
     ],
     "a": [
      "Linda Bozzo",
      "Teresa Carr"
     ]
    },
    {
     "t": "female",
     "h": [
      "Mylene Tenorio",
      "Renee Froeberg"
     ],
     "a": [
      "Amanda Nguyen",
      "Linda Vilaikeo"
     ]
    },
    {
     "t": "male",
     "h": [
      "Chuck Silvester",
      "Craig Rathjen"
     ],
     "a": [
      "Michael Schuller",
      "John Danks"
     ]
    },
    {
     "t": "male",
     "h": [
      "Eldon Carandan",
      "Peter O'Farrill"
     ],
     "a": [
      "Steve Nuguid",
      "Marty Tan"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Renee Froeberg",
      "Dennis Tenorio"
     ],
     "a": [
      "Linda Bozzo",
      "Steve Nuguid"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Patty Direzze",
      "Craig Rathjen"
     ],
     "a": [
      "Linda Vilaikeo",
      "Marty Tan"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Mylene Tenorio",
      "Eldon Carandan"
     ],
     "a": [
      "Teresa Carr",
      "John Danks"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Qiuyan Kong",
      "Chuck Silvester"
     ],
     "a": [
      "Marita Dow",
      "Mark Baker"
     ]
    },
    {
     "t": "female",
     "h": [
      "Olga Sedycias",
      "Qiuyan Kong"
     ],
     "a": [
      "Linda Vilaikeo",
      "Linda Bozzo"
     ]
    },
    {
     "t": "female",
     "h": [
      "Marcia Rathjen",
      "Patty Direzze"
     ],
     "a": [
      "Teresa Carr",
      "Amanda Nguyen"
     ]
    },
    {
     "t": "male",
     "h": [
      "Chuck Silvester",
      "Eldon Carandan"
     ],
     "a": [
      "Mark Baker",
      "Michael Schuller"
     ]
    },
    {
     "t": "male",
     "h": [
      "Dennis Tenorio",
      "Craig Rathjen"
     ],
     "a": [
      "John Danks",
      "Marty Tan"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Renee Froeberg",
      "Peter O'Farrill"
     ],
     "a": [
      "Linda Bozzo",
      "John Danks"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Marcia Rathjen",
      "Dennis Tenorio"
     ],
     "a": [
      "Marita Dow",
      "Michael Schuller"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Mylene Tenorio",
      "Chuck Silvester"
     ],
     "a": [
      "Linda Vilaikeo",
      "Steve Nuguid"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Qiuyan Kong",
      "Eldon Carandan"
     ],
     "a": [
      "Amanda Nguyen",
      "Marty Tan"
     ]
    },
    {
     "t": "female",
     "h": [
      "Mylene Tenorio",
      "Renee Froeberg"
     ],
     "a": [
      "Teresa Carr",
      "Linda Vilaikeo"
     ]
    },
    {
     "t": "female",
     "h": [
      "Marcia Rathjen",
      "Patty Direzze"
     ],
     "a": [
      "Marita Dow",
      "Amanda Nguyen"
     ]
    },
    {
     "t": "male",
     "h": [
      "Eldon Carandan",
      "Craig Rathjen"
     ],
     "a": [
      "John Danks",
      "Michael Schuller"
     ]
    },
    {
     "t": "male",
     "h": [
      "Chuck Silvester",
      "Peter O'Farrill"
     ],
     "a": [
      "Mark Baker",
      "Steve Nuguid"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Qiuyan Kong",
      "Craig Rathjen"
     ],
     "a": [
      "Linda Bozzo",
      "Marty Tan"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Olga Sedycias",
      "Dennis Tenorio"
     ],
     "a": [
      "Linda Vilaikeo",
      "Steve Nuguid"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Marcia Rathjen",
      "Eldon Carandan"
     ],
     "a": [
      "Amanda Nguyen",
      "Michael Schuller"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Patty Direzze",
      "Peter O'Farrill"
     ],
     "a": [
      "Marita Dow",
      "Mark Baker"
     ]
    },
    {
     "t": "female",
     "h": [
      "Marcia Rathjen",
      "Olga Sedycias"
     ],
     "a": [
      "Linda Bozzo",
      "Linda Vilaikeo"
     ]
    },
    {
     "t": "female",
     "h": [
      "Qiuyan Kong",
      "Patty Direzze"
     ],
     "a": [
      "Amanda Nguyen",
      "Marita Dow"
     ]
    },
    {
     "t": "male",
     "h": [
      "Dennis Tenorio",
      "Peter O'Farrill"
     ],
     "a": [
      "Steve Nuguid",
      "Michael Schuller"
     ]
    },
    {
     "t": "male",
     "h": [
      "Eldon Carandan",
      "Craig Rathjen"
     ],
     "a": [
      "John Danks",
      "Marty Tan"
     ]
    }
   ]
  },
  {
   "result": "away",
   "week": 2,
   "home": "Monroe",
   "away": "PKLD",
   "time": "2026-08-29T14:00:00",
   "complete": true,
   "homePoints": 572,
   "awayPoints": 617,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Olga Turova",
      "Charlie Belluardo"
     ],
     "a": [
      "Bobbi Rentko",
      "Freddy Alicea"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Denise Macfarlane",
      "Bob Debarge"
     ],
     "a": [
      "Maureen Bruno",
      "Lenn Yeger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Filomena Rega",
      "Jeffrey Quinlan"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Steven Truzzolino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Amy Farrell",
      "Anthony Manzo"
     ],
     "a": [
      "Karen Rosenberg",
      "Elliot Fishman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Denise Macfarlane",
      "Filomena Rega"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Karen Rosenberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Kim Barton",
      "Amy Farrell"
     ],
     "a": [
      "Bobbi Rentko",
      "Antoinette Mccormick"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Paul Glickenhaus",
      "Anthony Manzo"
     ],
     "a": [
      "Bart Van Der Gaag",
      "Elliot Fishman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jeffrey Quinlan",
      "Bob Debarge"
     ],
     "a": [
      "Steven Truzzolino",
      "Lenn Yeger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Amy Farrell",
      "Charlie Belluardo"
     ],
     "a": [
      "Maureen Bruno",
      "Bart Van Der Gaag"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Denise Macfarlane",
      "Anthony Manzo"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Steven Truzzolino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Olga Turova",
      "Paul Glickenhaus"
     ],
     "a": [
      "Karen Rosenberg",
      "Freddy Alicea"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Filomena Rega",
      "Jeffrey Quinlan"
     ],
     "a": [
      "Antoinette Mccormick",
      "Elliot Fishman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Filomena Rega",
      "Amy Farrell"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Antoinette Mccormick"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Olga Turova",
      "Kim Barton"
     ],
     "a": [
      "Maureen Bruno",
      "Karen Rosenberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Bob Debarge",
      "Paul Glickenhaus"
     ],
     "a": [
      "Bart Van Der Gaag",
      "Lenn Yeger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Charlie Belluardo",
      "Anthony Manzo"
     ],
     "a": [
      "Steven Truzzolino",
      "Freddy Alicea"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Denise Macfarlane",
      "Charlie Belluardo"
     ],
     "a": [
      "Maureen Bruno",
      "Bart Van Der Gaag"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kim Barton",
      "Jeffrey Quinlan"
     ],
     "a": [
      "Karen Rosenberg",
      "Steven Truzzolino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Olga Turova",
      "Paul Glickenhaus"
     ],
     "a": [
      "Bobbi Rentko",
      "Freddy Alicea"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Filomena Rega",
      "Bob Debarge"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Lenn Yeger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Denise Macfarlane",
      "Amy Farrell"
     ],
     "a": [
      "Maureen Bruno",
      "Antoinette Mccormick"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Filomena Rega",
      "Olga Turova"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Bobbi Rentko"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Paul Glickenhaus",
      "Bob Debarge"
     ],
     "a": [
      "Bart Van Der Gaag",
      "Freddy Alicea"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jeffrey Quinlan",
      "Anthony Manzo"
     ],
     "a": [
      "Steven Truzzolino",
      "Elliot Fishman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Amy Farrell",
      "Bob Debarge"
     ],
     "a": [
      "Karen Rosenberg",
      "Steven Truzzolino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Kim Barton",
      "Charlie Belluardo"
     ],
     "a": [
      "Antoinette Mccormick",
      "Lenn Yeger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Filomena Rega",
      "Anthony Manzo"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Freddy Alicea"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Olga Turova",
      "Jeffrey Quinlan"
     ],
     "a": [
      "Bobbi Rentko",
      "Elliot Fishman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Filomena Rega",
      "Amy Farrell"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Karen Rosenberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Denise Macfarlane",
      "Kim Barton"
     ],
     "a": [
      "Antoinette Mccormick",
      "Maureen Bruno"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jeffrey Quinlan",
      "Anthony Manzo"
     ],
     "a": [
      "Bart Van Der Gaag",
      "Elliot Fishman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Charlie Belluardo",
      "Paul Glickenhaus"
     ],
     "a": [
      "Lenn Yeger",
      "Freddy Alicea"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": null,
   "week": 2,
   "home": "Mercer Bucks",
   "away": "Pickleball Kingdom Hamilton Prime Time",
   "time": "2026-08-29T14:00:00",
   "complete": false,
   "games": [
    {
     "t": "mixed",
     "h": [
      "Lisa Angelini",
      "Farzad Shadzik"
     ],
     "a": [
      "Luz Bonner",
      "Fritz Jean-Brian"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Jean Knab",
      "Ken Gross"
     ],
     "a": [
      "Franchesa Mclean",
      "Ed Mendoza"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Mary Harmon",
      "Jason Belmont"
     ],
     "a": [
      "Mary Foster",
      "Gregory Mcquibben"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Cheryl Tarby",
      "Jonathan Pang"
     ],
     "a": [
      "Judy Williamson",
      "Warren Howard"
     ]
    },
    {
     "t": "female",
     "h": [
      "Jean Knab",
      "Mary Harmon"
     ],
     "a": [
      "Luz Bonner",
      "Franchesa Mclean"
     ]
    },
    {
     "t": "female",
     "h": [
      "Lisa Angelini",
      "Tracy Leahy"
     ],
     "a": [
      "Mary Foster",
      "Michelle Corbett"
     ]
    },
    {
     "t": "male",
     "h": [
      "Farzad Shadzik",
      "Jason Belmont"
     ],
     "a": [
      "Fritz Jean-Brian",
      "Ed Mendoza"
     ]
    },
    {
     "t": "male",
     "h": [
      "Joe Miller",
      "Ken Gross"
     ],
     "a": [
      "Gregory Mcquibben",
      "Warren Howard"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Jean Knab",
      "Farzad Shadzik"
     ],
     "a": [
      "Franchesa Mclean",
      "Fritz Jean-Brian"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Lisa Angelini",
      "Jason Belmont"
     ],
     "a": [
      "Luz Bonner",
      "Gregory Mcquibben"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Cheryl Tarby",
      "Ken Gross"
     ],
     "a": [
      "Michelle Corbett",
      "Ed Mendoza"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Tracy Leahy",
      "Jonathan Pang"
     ],
     "a": [
      "Mary Foster",
      "Warren Howard"
     ]
    },
    {
     "t": "female",
     "h": [
      "Mary Harmon",
      "Cheryl Tarby"
     ],
     "a": [
      "Luz Bonner",
      "Mary Foster"
     ]
    },
    {
     "t": "female",
     "h": [
      "Jean Knab",
      "Tracy Leahy"
     ],
     "a": [
      "Franchesa Mclean",
      "Judy Williamson"
     ]
    },
    {
     "t": "male",
     "h": [
      "Farzad Shadzik",
      "Jason Belmont"
     ],
     "a": [
      "Fritz Jean-Brian",
      "Gregory Mcquibben"
     ]
    },
    {
     "t": "male",
     "h": [
      "Joe Miller",
      "Jonathan Pang"
     ],
     "a": [
      "Ed Mendoza",
      "Warren Howard"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Lisa Angelini",
      "Ken Gross"
     ],
     "a": [
      "Luz Bonner",
      "Fritz Jean-Brian"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Mary Harmon",
      "Jason Belmont"
     ],
     "a": [
      "Mary Foster",
      "Gregory Mcquibben"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Cheryl Tarby",
      "Jonathan Pang"
     ],
     "a": [
      "Judy Williamson",
      "Ed Mendoza"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Tracy Leahy",
      "Joe Miller"
     ],
     "a": [
      "Michelle Corbett",
      "Warren Howard"
     ]
    },
    {
     "t": "female",
     "h": [
      "Jean Knab",
      "Lisa Angelini"
     ],
     "a": [
      "Mary Foster",
      "Judy Williamson"
     ]
    },
    {
     "t": "female",
     "h": [
      "Mary Harmon",
      "Cheryl Tarby"
     ],
     "a": [
      "Franchesa Mclean",
      "Michelle Corbett"
     ]
    },
    {
     "t": "male",
     "h": [
      "Joe Miller",
      "Jonathan Pang"
     ],
     "a": [
      "Fritz Jean-Brian",
      "Warren Howard"
     ]
    },
    {
     "t": "male",
     "h": [
      "Farzad Shadzik",
      "Ken Gross"
     ],
     "a": [
      "Ed Mendoza",
      "Gregory Mcquibben"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Mary Harmon",
      "Farzad Shadzik"
     ],
     "a": [
      "Mary Foster",
      "Fritz Jean-Brian"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Tracy Leahy",
      "Ken Gross"
     ],
     "a": [
      "Luz Bonner",
      "Ed Mendoza"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Jean Knab",
      "Jason Belmont"
     ],
     "a": [
      "Franchesa Mclean",
      "Gregory Mcquibben"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Lisa Angelini",
      "Joe Miller"
     ],
     "a": [
      "Judy Williamson",
      "Warren Howard"
     ]
    },
    {
     "t": "female",
     "h": [
      "Jean Knab",
      "Mary Harmon"
     ],
     "a": [
      "Franchesa Mclean",
      "Mary Foster"
     ]
    },
    {
     "t": "female",
     "h": [
      "Lisa Angelini",
      "Cheryl Tarby"
     ],
     "a": [
      "Luz Bonner",
      "Judy Williamson"
     ]
    },
    {
     "t": "male",
     "h": [
      "Jason Belmont",
      "Ken Gross"
     ],
     "a": [
      "Fritz Jean-Brian",
      "Ed Mendoza"
     ]
    },
    {
     "t": "male",
     "h": [
      "Jonathan Pang",
      "Farzad Shadzik"
     ],
     "a": [
      "Gregory Mcquibben",
      "Warren Howard"
     ]
    }
   ]
  },
  {
   "result": "away",
   "week": 2,
   "home": "Bounce Philly",
   "away": "Dill Dinkers Hatboro",
   "time": "2026-08-29T14:00:00",
   "complete": true,
   "homePoints": 500,
   "awayPoints": 625,
   "homeGW": 8,
   "awayGW": 24,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Pamela Toy",
      "Corey Abrams"
     ],
     "a": [
      "Betsy Hansbury",
      "Andrew Bush"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Deborah Jordan",
      "Joseph Gronczewski"
     ],
     "a": [
      "Bonny Mayerberg",
      "Andrew Frey"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Barbara Hand",
      "Scott Walden"
     ],
     "a": [
      "Adele Hackney",
      "Eric Pollock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Sheila Dolan",
      "Wen Chang"
     ],
     "a": [
      "Jill Honicker",
      "Chris Hannah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Barbara Hand",
      "Pamela Toy"
     ],
     "a": [
      "Cheryl Raiken",
      "Jill Honicker"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Kelly Mcbride",
      "Sandy Cohen"
     ],
     "a": [
      "Adele Hackney",
      "Lauren Ricks"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Corey Abrams",
      "Joseph Gronczewski"
     ],
     "a": [
      "Matt Becker",
      "Chris Hannah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Bruce Freedman",
      "Wen Chang"
     ],
     "a": [
      "David Wisch",
      "Eric Pollock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kelly Mcbride",
      "Corey Abrams"
     ],
     "a": [
      "Bonny Mayerberg",
      "Matt Becker"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Sandy Cohen",
      "Joseph Gronczewski"
     ],
     "a": [
      "Betsy Hansbury",
      "David Wisch"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Deborah Jordan",
      "Bruce Freedman"
     ],
     "a": [
      "Lauren Ricks",
      "Andrew Bush"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sheila Dolan",
      "Scott Walden"
     ],
     "a": [
      "Cheryl Raiken",
      "Andrew Frey"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Barbara Hand",
      "Pamela Toy"
     ],
     "a": [
      "Betsy Hansbury",
      "Adele Hackney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Kelly Mcbride",
      "Sheila Dolan"
     ],
     "a": [
      "Jill Honicker",
      "Bonny Mayerberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Bruce Freedman",
      "Joseph Gronczewski"
     ],
     "a": [
      "Andrew Frey",
      "Chris Hannah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Wen Chang",
      "Scott Walden"
     ],
     "a": [
      "Andrew Bush",
      "Eric Pollock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Pamela Toy",
      "Corey Abrams"
     ],
     "a": [
      "Lauren Ricks",
      "Chris Hannah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Barbara Hand",
      "Wen Chang"
     ],
     "a": [
      "Cheryl Raiken",
      "David Wisch"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Deborah Jordan",
      "Scott Walden"
     ],
     "a": [
      "Adele Hackney",
      "Matt Becker"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Sandy Cohen",
      "Bruce Freedman"
     ],
     "a": [
      "Jill Honicker",
      "Eric Pollock"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Barbara Hand",
      "Kelly Mcbride"
     ],
     "a": [
      "Lauren Ricks",
      "Betsy Hansbury"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sandy Cohen",
      "Sheila Dolan"
     ],
     "a": [
      "Cheryl Raiken",
      "Bonny Mayerberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Corey Abrams",
      "Wen Chang"
     ],
     "a": [
      "Matt Becker",
      "Andrew Frey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Joseph Gronczewski",
      "Scott Walden"
     ],
     "a": [
      "David Wisch",
      "Andrew Bush"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Pamela Toy",
      "Joseph Gronczewski"
     ],
     "a": [
      "Adele Hackney",
      "Andrew Bush"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Barbara Hand",
      "Corey Abrams"
     ],
     "a": [
      "Jill Honicker",
      "Andrew Frey"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Sheila Dolan",
      "Wen Chang"
     ],
     "a": [
      "Betsy Hansbury",
      "Eric Pollock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Deborah Jordan",
      "Bruce Freedman"
     ],
     "a": [
      "Bonny Mayerberg",
      "Chris Hannah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Pamela Toy",
      "Deborah Jordan"
     ],
     "a": [
      "Lauren Ricks",
      "Jill Honicker"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Sandy Cohen",
      "Kelly Mcbride"
     ],
     "a": [
      "Cheryl Raiken",
      "Adele Hackney"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Corey Abrams",
      "Joseph Gronczewski"
     ],
     "a": [
      "Matt Becker",
      "Eric Pollock"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Bruce Freedman",
      "Scott Walden"
     ],
     "a": [
      "David Wisch",
      "Chris Hannah"
     ]
    }
   ],
   "subs": [
    "Bruce Freedman",
    "Kelly Mcbride",
    "Joseph Gronczewski",
    "Deborah Jordan",
    "Sheila Dolan",
    "Corey Abrams",
    "Pamela Toy",
    "Scott Walden",
    "Sandy Cohen",
    "Jill Honicker"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Allstar Pickler",
   "away": "Premiere Aces",
   "time": "2026-08-29T14:30:00",
   "complete": true,
   "homePoints": 662,
   "awayPoints": 468,
   "homeGW": 27,
   "awayGW": 5,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jessie Fang",
      "Alex Chang"
     ],
     "a": [
      "Jen Ritchie",
      "John Hans"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Irish Lee",
      "George Zhou"
     ],
     "a": [
      "Stacey Nusser",
      "Jim Ritchie"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Ying Lin",
      "Eric Fang"
     ],
     "a": [
      "Nancy Ciappina",
      "Albert Ciappina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lingshan Hsieh",
      "Dajie （David） Yang"
     ],
     "a": [
      "Ki Keys",
      "Vlad Feldman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Irish Lee",
      "Jessica Ren"
     ],
     "a": [
      "Jen Ritchie",
      "Stacey Nusser"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jessie Fang",
      "Ying Lin"
     ],
     "a": [
      "Ki Keys",
      "Donna Fama"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Alex Chang",
      "Eric Fang"
     ],
     "a": [
      "Jim Ritchie",
      "Vlad Feldman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Dajie （David） Yang",
      "Bing Zhu"
     ],
     "a": [
      "Albert Ciappina",
      "Frank Fama"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Lingshan Hsieh",
      "Eric Fang"
     ],
     "a": [
      "Nancy Ciappina",
      "Frank Fama"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Jessica Ren",
      "Alex Chang"
     ],
     "a": [
      "Ki Keys",
      "John Hans"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jessie Fang",
      "Dajie （David） Yang"
     ],
     "a": [
      "Stacey Nusser",
      "Jim Ritchie"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Ying Lin",
      "George Zhou"
     ],
     "a": [
      "Donna Fama",
      "Albert Ciappina"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Irish Lee",
      "Ying Lin"
     ],
     "a": [
      "Ki Keys",
      "Jen Ritchie"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Lingshan Hsieh",
      "Jessica Ren"
     ],
     "a": [
      "Nancy Ciappina",
      "Donna Fama"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Alex Chang",
      "George Zhou"
     ],
     "a": [
      "Albert Ciappina",
      "Vlad Feldman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Dajie （David） Yang",
      "Bing Zhu"
     ],
     "a": [
      "Jim Ritchie",
      "John Hans"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Jessie Fang",
      "George Zhou"
     ],
     "a": [
      "Jen Ritchie",
      "Albert Ciappina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lingshan Hsieh",
      "Alex Chang"
     ],
     "a": [
      "Nancy Ciappina",
      "Frank Fama"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Irish Lee",
      "Bing Zhu"
     ],
     "a": [
      "Stacey Nusser",
      "John Hans"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Jessica Ren",
      "Eric Fang"
     ],
     "a": [
      "Donna Fama",
      "Vlad Feldman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jessie Fang",
      "Ying Lin"
     ],
     "a": [
      "Nancy Ciappina",
      "Jen Ritchie"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Lingshan Hsieh",
      "Irish Lee"
     ],
     "a": [
      "Donna Fama",
      "Ki Keys"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Dajie （David） Yang",
      "Eric Fang"
     ],
     "a": [
      "Frank Fama",
      "Jim Ritchie"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "George Zhou",
      "Bing Zhu"
     ],
     "a": [
      "John Hans",
      "Vlad Feldman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Irish Lee",
      "George Zhou"
     ],
     "a": [
      "Jen Ritchie",
      "Jim Ritchie"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Lingshan Hsieh",
      "Bing Zhu"
     ],
     "a": [
      "Nancy Ciappina",
      "John Hans"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 4,
     "h": [
      "Ying Lin",
      "Alex Chang"
     ],
     "a": [
      "Ki Keys",
      "Albert Ciappina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jessie Fang",
      "Dajie （David） Yang"
     ],
     "a": [
      "Stacey Nusser",
      "Frank Fama"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Lingshan Hsieh",
      "Ying Lin"
     ],
     "a": [
      "Jen Ritchie",
      "Ki Keys"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Irish Lee",
      "Jessica Ren"
     ],
     "a": [
      "Nancy Ciappina",
      "Stacey Nusser"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Alex Chang",
      "Dajie （David） Yang"
     ],
     "a": [
      "Frank Fama",
      "Jim Ritchie"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Eric Fang",
      "Bing Zhu"
     ],
     "a": [
      "John Hans",
      "Vlad Feldman"
     ]
    }
   ],
   "subs": [
    "Stacey Nusser",
    "Ki Keys",
    "Donna Fama",
    "Ying Lin",
    "George Zhou"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Life Time Red Bank",
   "away": "Colts Neck Racquet Club",
   "time": "2026-08-29T14:30:00",
   "complete": true,
   "provisional": true,
   "homePoints": 644,
   "awayPoints": 513,
   "homeGW": 23,
   "awayGW": 9,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Nicole Tarallo",
      "Leo Decker"
     ],
     "a": [
      "Michele Iacono",
      "Frank Iacono"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Donna Facconerusin",
      "David Mccarthy"
     ],
     "a": [
      "Lucille Licciardello",
      "Erick Matthijs"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Caroline Kinlin",
      "Mark Zamkoff"
     ],
     "a": [
      "Cindy Rossine",
      "Frank Leccese"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Marie Walsh Mccarty",
      "Daniel Ryan"
     ],
     "a": [
      "Shari Gagliardo",
      "Frank Messina"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Nicole Tarallo",
      "Caroline Kinlin"
     ],
     "a": [
      "Lucille Licciardello",
      "Sharon Rarig"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Marie Walsh Mccarty",
      "Erica Ruggieri"
     ],
     "a": [
      "Michele Iacono",
      "Cindy Rossine"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 4,
     "h": [
      "Leo Decker",
      "Daniel Ryan"
     ],
     "a": [
      "Frank Iacono",
      "Michael Salerno"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Blair Lane",
      "Mark Zamkoff"
     ],
     "a": [
      "Frank Messina",
      "Erick Matthijs"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Erica Ruggieri",
      "Leo Decker"
     ],
     "a": [
      "Cindy Rossine",
      "Erick Matthijs"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Caroline Kinlin",
      "Blair Lane"
     ],
     "a": [
      "Sharon Rarig",
      "Frank Iacono"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Nicole Tarallo",
      "Daniel Ryan"
     ],
     "a": [
      "Michele Iacono",
      "Frank Leccese"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Marie Walsh Mccarty",
      "David Mccarthy"
     ],
     "a": [
      "Lucille Licciardello",
      "Michael Salerno"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 18,
     "h": [
      "Marie Walsh Mccarty",
      "Nicole Tarallo"
     ],
     "a": [
      "Michele Iacono",
      "Sharon Rarig"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Donna Facconerusin",
      "Erica Ruggieri"
     ],
     "a": [
      "Lucille Licciardello",
      "Shari Gagliardo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Mark Zamkoff",
      "Daniel Ryan"
     ],
     "a": [
      "Frank Iacono",
      "Frank Leccese"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Blair Lane",
      "David Mccarthy"
     ],
     "a": [
      "Frank Messina",
      "Michael Salerno"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Donna Facconerusin",
      "Daniel Ryan"
     ],
     "a": [
      "Shari Gagliardo",
      "Frank Iacono"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Caroline Kinlin",
      "Leo Decker"
     ],
     "a": [
      "Michele Iacono",
      "Erick Matthijs"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Nicole Tarallo",
      "Blair Lane"
     ],
     "a": [
      "Lucille Licciardello",
      "Frank Messina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Erica Ruggieri",
      "Mark Zamkoff"
     ],
     "a": [
      "Cindy Rossine",
      "Frank Leccese"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Nicole Tarallo",
      "Donna Facconerusin"
     ],
     "a": [
      "Michele Iacono",
      "Cindy Rossine"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Caroline Kinlin",
      "Erica Ruggieri"
     ],
     "a": [
      "Shari Gagliardo",
      "Sharon Rarig"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "David Mccarthy",
      "Blair Lane"
     ],
     "a": [
      "Michael Salerno",
      "Erick Matthijs"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Leo Decker",
      "Daniel Ryan"
     ],
     "a": [
      "Frank Messina",
      "Frank Leccese"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Caroline Kinlin",
      "David Mccarthy"
     ],
     "a": [
      "Lucille Licciardello",
      "Michael Salerno"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Nicole Tarallo",
      "Mark Zamkoff"
     ],
     "a": [
      "Michele Iacono",
      "Frank Iacono"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Donna Facconerusin",
      "Leo Decker"
     ],
     "a": [
      "Sharon Rarig",
      "Frank Leccese"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Erica Ruggieri",
      "Blair Lane"
     ],
     "a": [
      "Cindy Rossine",
      "Erick Matthijs"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Erica Ruggieri",
      "Caroline Kinlin"
     ],
     "a": [
      "Michele Iacono",
      "Sharon Rarig"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Nicole Tarallo",
      "Donna Facconerusin"
     ],
     "a": [
      "Lucille Licciardello",
      "Cindy Rossine"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Leo Decker",
      "David Mccarthy"
     ],
     "a": [
      "Frank Iacono",
      "Frank Messina"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Daniel Ryan",
      "Mark Zamkoff"
     ],
     "a": [
      "Frank Leccese",
      "Michael Salerno"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 2,
   "home": "Flemington Blue",
   "away": "ACE Moorestown",
   "time": "2026-08-29T15:00:00",
   "complete": true,
   "homePoints": 630,
   "awayPoints": 557,
   "homeGW": 24,
   "awayGW": 8,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Holly Ferguson",
      "Paul Phillips"
     ],
     "a": [
      "Amy Clayman",
      "Eric Clayman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sarah Stangota",
      "Jeffrey Hartford"
     ],
     "a": [
      "Tinglan Zhao",
      "Dennis Higman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Margo Langer",
      "Doug Jordan"
     ],
     "a": [
      "Joan Rudderow",
      "Greg Taylor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Cathy Orourke",
      "Eric Brezina"
     ],
     "a": [
      "Amy Neckes",
      "Martyn Babitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Cathy Orourke",
      "Margo Langer"
     ],
     "a": [
      "Amy Clayman",
      "Joan Rudderow"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Sheila Curran",
      "Sharon Oddy"
     ],
     "a": [
      "Gina Blahut",
      "Amy Neckes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Ren Mortara",
      "Doug Jordan"
     ],
     "a": [
      "Greg Taylor",
      "Dennis Higman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jeffrey Hartford",
      "Paul Phillips"
     ],
     "a": [
      "Pete Dunn",
      "Guy Ercol"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Holly Ferguson",
      "Doug Jordan"
     ],
     "a": [
      "Gina Blahut",
      "Martyn Babitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Sarah Stangota",
      "Ren Mortara"
     ],
     "a": [
      "Amy Neckes",
      "Eric Clayman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Sheila Curran",
      "Paul Phillips"
     ],
     "a": [
      "Joan Rudderow",
      "Greg Taylor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Cathy Orourke",
      "Eric Brezina"
     ],
     "a": [
      "Tinglan Zhao",
      "Dennis Higman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Sarah Stangota",
      "Sharon Oddy"
     ],
     "a": [
      "Gina Blahut",
      "Amy Neckes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Sheila Curran",
      "Margo Langer"
     ],
     "a": [
      "Tinglan Zhao",
      "Amy Clayman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Doug Jordan",
      "Paul Phillips"
     ],
     "a": [
      "Pete Dunn",
      "Greg Taylor"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Eric Brezina",
      "Jeffrey Hartford"
     ],
     "a": [
      "Martyn Babitz",
      "Guy Ercol"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Sarah Stangota",
      "Eric Brezina"
     ],
     "a": [
      "Joan Rudderow",
      "Dennis Higman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Cathy Orourke",
      "Jeffrey Hartford"
     ],
     "a": [
      "Tinglan Zhao",
      "Pete Dunn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Holly Ferguson",
      "Ren Mortara"
     ],
     "a": [
      "Amy Clayman",
      "Eric Clayman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sheila Curran",
      "Paul Phillips"
     ],
     "a": [
      "Amy Neckes",
      "Guy Ercol"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sharon Oddy",
      "Margo Langer"
     ],
     "a": [
      "Joan Rudderow",
      "Tinglan Zhao"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Sheila Curran",
      "Holly Ferguson"
     ],
     "a": [
      "Amy Clayman",
      "Gina Blahut"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Eric Brezina",
      "Jeffrey Hartford"
     ],
     "a": [
      "Greg Taylor",
      "Martyn Babitz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Doug Jordan",
      "Ren Mortara"
     ],
     "a": [
      "Eric Clayman",
      "Pete Dunn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Sarah Stangota",
      "Eric Brezina"
     ],
     "a": [
      "Joan Rudderow",
      "Dennis Higman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Cathy Orourke",
      "Paul Phillips"
     ],
     "a": [
      "Amy Clayman",
      "Pete Dunn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Margo Langer",
      "Ren Mortara"
     ],
     "a": [
      "Tinglan Zhao",
      "Guy Ercol"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Sharon Oddy",
      "Doug Jordan"
     ],
     "a": [
      "Gina Blahut",
      "Eric Clayman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Cathy Orourke",
      "Holly Ferguson"
     ],
     "a": [
      "Amy Neckes",
      "Amy Clayman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Sheila Curran",
      "Sharon Oddy"
     ],
     "a": [
      "Joan Rudderow",
      "Tinglan Zhao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Ren Mortara",
      "Eric Brezina"
     ],
     "a": [
      "Martyn Babitz",
      "Greg Taylor"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jeffrey Hartford",
      "Paul Phillips"
     ],
     "a": [
      "Dennis Higman",
      "Pete Dunn"
     ]
    }
   ],
   "subs": [
    "Pete Dunn",
    "Guy Ercol",
    "Amy Clayman",
    "Eric Clayman",
    "Cathy Orourke"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Pickleball Kingdom Hamilton Strikers",
   "away": "Flemington Green",
   "time": "2026-08-29T15:00:00",
   "complete": true,
   "homePoints": 664,
   "awayPoints": 521,
   "homeGW": 26,
   "awayGW": 6,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Krishma Patel",
      "Subhas Desai"
     ],
     "a": [
      "Manuela Caiati",
      "Dan Amabile"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Donna Stone",
      "Scott Perrone"
     ],
     "a": [
      "Grace Brennan",
      "Scott Heist"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Rosa Tenan",
      "John Gardler"
     ],
     "a": [
      "Diane Bracco",
      "Hector Lopez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Maria Cecilia Holgado",
      "Brian Kelly"
     ],
     "a": [
      "Tao Zhu",
      "Paul King"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Donna Stone",
      "Maria Cecilia Holgado"
     ],
     "a": [
      "Diane Bracco",
      "Leah Greenstein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Theresa Dumbrique",
      "Lynette Pil"
     ],
     "a": [
      "Grace Brennan",
      "Judith Macarthur"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Srinatha Nanjundaiah",
      "Subhas Desai"
     ],
     "a": [
      "Dan Amabile",
      "Paul King"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "John Gardler",
      "Brian Kelly"
     ],
     "a": [
      "Scott Heist",
      "Hector Lopez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Donna Stone",
      "Dean Lim"
     ],
     "a": [
      "Leah Greenstein",
      "Dan Amabile"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Rosa Tenan",
      "John Gardler"
     ],
     "a": [
      "Diane Bracco",
      "Hafeez Saheed"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Maria Cecilia Holgado",
      "Scott Perrone"
     ],
     "a": [
      "Judith Macarthur",
      "Scott Heist"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Lynette Pil",
      "Srinatha Nanjundaiah"
     ],
     "a": [
      "Tao Zhu",
      "Hector Lopez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Theresa Dumbrique",
      "Lynette Pil"
     ],
     "a": [
      "Diane Bracco",
      "Tao Zhu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Krishma Patel",
      "Rosa Tenan"
     ],
     "a": [
      "Grace Brennan",
      "Judith Macarthur"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Dean Lim",
      "Scott Perrone"
     ],
     "a": [
      "Dan Amabile",
      "Scott Heist"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Subhas Desai",
      "Srinatha Nanjundaiah"
     ],
     "a": [
      "Hector Lopez",
      "Paul King"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Theresa Dumbrique",
      "Subhas Desai"
     ],
     "a": [
      "Tao Zhu",
      "Dan Amabile"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Krishma Patel",
      "Srinatha Nanjundaiah"
     ],
     "a": [
      "Manuela Caiati",
      "Paul King"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Rosa Tenan",
      "Dean Lim"
     ],
     "a": [
      "Leah Greenstein",
      "Scott Heist"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Donna Stone",
      "Scott Perrone"
     ],
     "a": [
      "Diane Bracco",
      "Hector Lopez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Maria Cecilia Holgado",
      "Donna Stone"
     ],
     "a": [
      "Grace Brennan",
      "Manuela Caiati"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Krishma Patel",
      "Lynette Pil"
     ],
     "a": [
      "Judith Macarthur",
      "Tao Zhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Dean Lim",
      "Srinatha Nanjundaiah"
     ],
     "a": [
      "Dan Amabile",
      "Paul King"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Subhas Desai",
      "John Gardler"
     ],
     "a": [
      "Scott Heist",
      "Hafeez Saheed"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Maria Cecilia Holgado",
      "Brian Kelly"
     ],
     "a": [
      "Grace Brennan",
      "Paul King"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 4,
     "h": [
      "Theresa Dumbrique",
      "John Gardler"
     ],
     "a": [
      "Manuela Caiati",
      "Hafeez Saheed"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lynette Pil",
      "Subhas Desai"
     ],
     "a": [
      "Judith Macarthur",
      "Hector Lopez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Rosa Tenan",
      "Dean Lim"
     ],
     "a": [
      "Diane Bracco",
      "Scott Heist"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Lynette Pil",
      "Krishma Patel"
     ],
     "a": [
      "Grace Brennan",
      "Leah Greenstein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Theresa Dumbrique",
      "Maria Cecilia Holgado"
     ],
     "a": [
      "Judith Macarthur",
      "Manuela Caiati"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Srinatha Nanjundaiah",
      "Dean Lim"
     ],
     "a": [
      "Paul King",
      "Hafeez Saheed"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "John Gardler",
      "Scott Perrone"
     ],
     "a": [
      "Scott Heist",
      "Hector Lopez"
     ]
    }
   ],
   "subs": [
    "Paul King"
   ]
  },
  {
   "result": null,
   "week": 4,
   "home": "PickleRage Union County",
   "away": "Pickleball Palace Blue",
   "time": "2026-09-12T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Jersey Devil",
   "away": "Dill Dinkers Hatboro",
   "time": "2026-09-12T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Bounce Philly",
   "away": "Forward",
   "time": "2026-09-12T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Pickleball Palace Black",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-09-12T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Bounce Malvern",
   "away": "Players Courtyard",
   "time": "2026-09-12T14:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Picklr Fair Lawn",
   "away": "Allstar Pickler",
   "time": "2026-09-12T14:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Pickleball Kingdom Hamilton Prime Time",
   "away": "ACE Moorestown",
   "time": "2026-09-19T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "One Love",
   "away": "Monroe",
   "time": "2026-09-19T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "PKLD",
   "away": "Life Time Red Bank",
   "time": "2026-09-19T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Dill Dinkers Newport",
   "away": "Forward",
   "time": "2026-09-19T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Colts Neck Racquet Club",
   "away": "Premiere Dinkers",
   "time": "2026-09-19T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Jersey Devil",
   "away": "Bounce Malvern",
   "time": "2026-09-19T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Mercer Bucks",
   "away": "Flemington Green",
   "time": "2026-09-19T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Picklr Fair Lawn",
   "away": "Pickleball Palace Blue",
   "time": "2026-09-19T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Bounce Philly",
   "away": "Players Courtyard",
   "time": "2026-09-19T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Pickleball Palace Black",
   "away": "Allstar Pickler",
   "time": "2026-09-19T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Premiere Aces",
   "away": "PickleRage Union County",
   "time": "2026-09-19T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Flemington Blue",
   "away": "Pickleball Kingdom Hamilton Strikers",
   "time": "2026-09-19T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "PickleRage Union County",
   "away": "Picklr Fair Lawn",
   "time": "2026-09-26T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "One Love",
   "away": "Colts Neck Racquet Club",
   "time": "2026-09-26T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "PKLD",
   "away": "Premiere Dinkers",
   "time": "2026-09-26T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Pickleball Kingdom Hamilton Prime Time",
   "away": "Flemington Green",
   "time": "2026-09-26T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Dill Dinkers Hatboro",
   "away": "Bounce Philly",
   "time": "2026-09-26T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Pickleball Palace Blue",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-09-26T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Bounce Malvern",
   "away": "Dill Dinkers Newport",
   "time": "2026-09-26T14:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Monroe",
   "away": "Life Time Red Bank",
   "time": "2026-09-26T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Forward",
   "away": "Players Courtyard",
   "time": "2026-09-26T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Premiere Aces",
   "away": "Allstar Pickler",
   "time": "2026-09-26T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Flemington Blue",
   "away": "Mercer Bucks",
   "time": "2026-09-26T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Colts Neck Racquet Club",
   "away": "Flemington Green",
   "time": "2026-09-27T09:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Picklr Fair Lawn",
   "away": "Premiere Aces",
   "time": "2026-09-27T09:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Pickleball Palace Blue",
   "away": "Pickleball Palace Black",
   "time": "2026-09-27T09:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Jersey Devil",
   "away": "Bounce Philly",
   "time": "2026-09-27T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Dill Dinkers Hatboro",
   "away": "Forward",
   "time": "2026-09-27T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Dill Dinkers Newport",
   "away": "Players Courtyard",
   "time": "2026-09-27T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "PickleRage Union County",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-09-27T16:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Premiere Dinkers",
   "away": "Mercer Bucks",
   "time": "2026-09-27T17:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "ACE Moorestown",
   "away": "One Love",
   "time": "2026-09-27T17:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Monroe",
   "away": "Pickleball Kingdom Hamilton Prime Time",
   "time": "2026-09-27T17:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Pickleball Kingdom Hamilton Strikers",
   "away": "Life Time Red Bank",
   "time": "2026-09-27T18:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Flemington Blue",
   "away": "PKLD",
   "time": "2026-09-27T18:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Players Courtyard",
   "away": "Bounce Philly",
   "time": "2026-10-03T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "PickleRage Union County",
   "away": "Premiere Aces",
   "time": "2026-10-03T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Colts Neck Racquet Club",
   "away": "Monroe",
   "time": "2026-10-03T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "PKLD",
   "away": "One Love",
   "time": "2026-10-03T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Allstar Pickler",
   "away": "Pickleball Palace Black",
   "time": "2026-10-03T14:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Bounce Malvern",
   "away": "Jersey Devil",
   "time": "2026-10-03T14:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Pickleball Kingdom Hamilton Strikers",
   "away": "Mercer Bucks",
   "time": "2026-10-03T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Forward",
   "away": "Dill Dinkers Newport",
   "time": "2026-10-03T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Pickleball Palace Blue",
   "away": "Picklr Fair Lawn",
   "time": "2026-10-03T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Premiere Dinkers",
   "away": "Life Time Red Bank",
   "time": "2026-10-03T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Flemington Green",
   "away": "ACE Moorestown",
   "time": "2026-10-03T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Flemington Blue",
   "away": "Pickleball Kingdom Hamilton Prime Time",
   "time": "2026-10-03T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "One Love",
   "away": "Premiere Dinkers",
   "time": "2026-10-10T10:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Dill Dinkers Hatboro",
   "away": "Players Courtyard",
   "time": "2026-10-10T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Colts Neck Racquet Club",
   "away": "Life Time Red Bank",
   "time": "2026-10-10T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Pickleball Kingdom Hamilton Prime Time",
   "away": "Mercer Bucks",
   "time": "2026-10-10T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "PKLD",
   "away": "Monroe",
   "time": "2026-10-10T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Picklr Fair Lawn",
   "time": "2026-10-10T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Allstar Pickler",
   "away": "PickleRage Union County",
   "time": "2026-10-10T14:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Bounce Malvern",
   "away": "Forward",
   "time": "2026-10-10T14:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Flemington Green",
   "away": "Pickleball Kingdom Hamilton Strikers",
   "time": "2026-10-10T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Jersey Devil",
   "away": "Dill Dinkers Newport",
   "time": "2026-10-10T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "ACE Moorestown",
   "away": "Flemington Blue",
   "time": "2026-10-10T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Premiere Aces",
   "away": "Pickleball Palace Black",
   "time": "2026-10-10T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Dill Dinkers Hatboro",
   "away": "Bounce Malvern",
   "time": "2026-10-17T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Allstar Pickler",
   "time": "2026-10-17T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Dill Dinkers Newport",
   "away": "Bounce Philly",
   "time": "2026-10-17T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Jersey Devil",
   "away": "Players Courtyard",
   "time": "2026-10-17T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Picklr Fair Lawn",
   "away": "Pickleball Palace Black",
   "time": "2026-10-17T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Life Time Red Bank",
   "away": "PKLD",
   "time": "2026-10-17T14:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Monroe",
   "away": "One Love",
   "time": "2026-10-17T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "ACE Moorestown",
   "away": "Pickleball Kingdom Hamilton Prime Time",
   "time": "2026-10-17T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Premiere Dinkers",
   "away": "Colts Neck Racquet Club",
   "time": "2026-10-17T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Flemington Green",
   "away": "Mercer Bucks",
   "time": "2026-10-17T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Pickleball Kingdom Hamilton Strikers",
   "away": "Flemington Blue",
   "time": "2026-10-17T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Pickleball Palace Blue",
   "away": "Premiere Aces",
   "time": "2026-10-17T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Premiere Aces",
   "time": "2026-10-24T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Colts Neck Racquet Club",
   "away": "One Love",
   "time": "2026-10-24T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Jersey Devil",
   "away": "Forward",
   "time": "2026-10-24T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Dill Dinkers Newport",
   "away": "Dill Dinkers Hatboro",
   "time": "2026-10-24T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Pickleball Palace Black",
   "away": "PickleRage Union County",
   "time": "2026-10-24T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Bounce Philly",
   "away": "Bounce Malvern",
   "time": "2026-10-24T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Mercer Bucks",
   "away": "Flemington Blue",
   "time": "2026-10-24T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Life Time Red Bank",
   "away": "Monroe",
   "time": "2026-10-24T14:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Allstar Pickler",
   "away": "Pickleball Palace Blue",
   "time": "2026-10-24T14:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Premiere Dinkers",
   "away": "PKLD",
   "time": "2026-10-24T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Pickleball Kingdom Hamilton Strikers",
   "away": "ACE Moorestown",
   "time": "2026-10-24T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Flemington Green",
   "away": "Pickleball Kingdom Hamilton Prime Time",
   "time": "2026-10-24T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Allstar Pickler",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-10-25T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Pickleball Palace Black",
   "away": "Picklr Fair Lawn",
   "time": "2026-10-25T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Bounce Philly",
   "away": "Dill Dinkers Newport",
   "time": "2026-10-25T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Bounce Malvern",
   "away": "Dill Dinkers Hatboro",
   "time": "2026-10-25T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "PKLD",
   "away": "ACE Moorestown",
   "time": "2026-10-25T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Players Courtyard",
   "away": "Jersey Devil",
   "time": "2026-10-25T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Flemington Green",
   "away": "Premiere Dinkers",
   "time": "2026-10-25T18:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Mercer Bucks",
   "away": "Monroe",
   "time": "2026-10-25T18:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "One Love",
   "away": "Pickleball Kingdom Hamilton Strikers",
   "time": "2026-10-25T18:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Premiere Aces",
   "away": "Pickleball Palace Blue",
   "time": "2026-10-25T18:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Pickleball Kingdom Hamilton Prime Time",
   "away": "Colts Neck Racquet Club",
   "time": "2026-10-25T18:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Life Time Red Bank",
   "away": "Flemington Blue",
   "time": "2026-10-25T18:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "One Love",
   "away": "PKLD",
   "time": "2026-10-31T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Pickleball Kingdom Hamilton Prime Time",
   "away": "Flemington Blue",
   "time": "2026-10-31T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Players Courtyard",
   "away": "Dill Dinkers Newport",
   "time": "2026-10-31T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "PickleRage Union County",
   "time": "2026-10-31T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Mercer Bucks",
   "away": "Pickleball Kingdom Hamilton Strikers",
   "time": "2026-10-31T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Bounce Philly",
   "away": "Jersey Devil",
   "time": "2026-10-31T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Life Time Red Bank",
   "away": "Premiere Dinkers",
   "time": "2026-10-31T14:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Forward",
   "away": "Dill Dinkers Hatboro",
   "time": "2026-10-31T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Premiere Aces",
   "away": "Picklr Fair Lawn",
   "time": "2026-10-31T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Pickleball Palace Black",
   "away": "Pickleball Palace Blue",
   "time": "2026-10-31T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "ACE Moorestown",
   "away": "Flemington Green",
   "time": "2026-10-31T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Monroe",
   "away": "Colts Neck Racquet Club",
   "time": "2026-10-31T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Dill Dinkers Hatboro",
   "away": "Dill Dinkers Newport",
   "time": "2026-11-07T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "PickleRage Union County",
   "away": "Pickleball Palace Black",
   "time": "2026-11-07T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "PKLD",
   "away": "Colts Neck Racquet Club",
   "time": "2026-11-07T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Mercer Bucks",
   "away": "ACE Moorestown",
   "time": "2026-11-07T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Pickleball Palace Blue",
   "away": "Allstar Pickler",
   "time": "2026-11-07T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Bounce Malvern",
   "away": "Bounce Philly",
   "time": "2026-11-07T14:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Life Time Red Bank",
   "away": "One Love",
   "time": "2026-11-07T14:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Forward",
   "away": "Jersey Devil",
   "time": "2026-11-07T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Monroe",
   "away": "Premiere Dinkers",
   "time": "2026-11-07T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Pickleball Kingdom Hamilton Strikers",
   "away": "Pickleball Kingdom Hamilton Prime Time",
   "time": "2026-11-07T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Premiere Aces",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-11-07T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Flemington Blue",
   "away": "Flemington Green",
   "time": "2026-11-07T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 13,
   "home": "Dill Dinkers Newport",
   "away": "Jersey Devil",
   "time": "2026-11-14T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 13,
   "home": "Players Courtyard",
   "away": "Dill Dinkers Hatboro",
   "time": "2026-11-14T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 13,
   "home": "PickleRage Union County",
   "away": "Allstar Pickler",
   "time": "2026-11-14T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 13,
   "home": "Picklr Fair Lawn",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-11-14T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 13,
   "home": "Pickleball Palace Black",
   "away": "Premiere Aces",
   "time": "2026-11-14T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 13,
   "home": "ACE Moorestown",
   "away": "Pickleball Kingdom Hamilton Strikers",
   "time": "2026-11-14T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 13,
   "home": "Forward",
   "away": "Bounce Malvern",
   "time": "2026-11-14T15:00:00",
   "complete": false
  }
 ],
 "playoffs": [],
 "extraPlayerIds": {
  "Huifang Yao": "0678b5e4-cf92-49cb-8689-2d90cc356950",
  "Jayne Brown": "0b04e2c1-d1c3-46d9-ab14-c71c0b99624f",
  "Linda Goss": "14e5edae-ff22-415b-8267-d46a2117ed8d",
  "Jenn Allen": "1741b412-8d86-480b-a9f3-88447159088a",
  "Emil De Carvalho": "22b206f2-1586-44b8-ba33-b51480e6a23e",
  "Cynthia Wojtkowski": "26b8531a-1f4c-4ffd-86ac-3ffb92eeee55",
  "Corinne Demeuse": "2a820b56-af8a-4856-8db8-fb8e7c133e08",
  "Dan Sweetman": "2f212831-0629-494e-90b0-d16fc59fc666",
  "Jack Peng": "30527f36-bdaa-4a8b-ad77-c9864d5b94a9",
  "Haiying Hu": "30568077-6244-48c9-b1cb-66d788ed8a4a",
  "Tim Lockburner": "3c881311-2724-4972-bc8e-f3ffcbd51cd0",
  "Robin Aiello": "45790302-b906-4a8b-8a2d-08fbfaf6cbad",
  "Brian Borer": "47124d07-437f-49ee-b6ba-fc48943aee42",
  "Qiao Yang": "4be24db4-ce32-40fa-bd9d-1900b731a602",
  "Ron Dodson": "4f3b5d69-09ea-4e93-b797-c772df1dd2f8",
  "Matthew Colasanto": "5d997109-fb91-4c4c-b3f7-0a98b3d6786b",
  "Amy Condi": "626ddb03-dc2f-4bf5-ba36-0119e6e2b557",
  "Marty Tan": "64a75f67-1825-4e71-8704-25f0e370ae81",
  "Nancy Hornback": "6df1fd0f-6b38-4538-a53b-c4d141e604bc",
  "Calvin Giles": "6e9ad16e-485c-47b3-90fc-d713d861ca16",
  "Scott Rothschild": "6f4df2db-2114-4c90-b889-b969317403c7",
  "Sheryl Axelrod": "6f9e0a16-373f-4c8e-8e9f-31a4696b1a96",
  "Ira Feinberg": "72cdc96c-9681-4a9d-8336-0fdda1c3a6c8",
  "Steve Nuguid": "761a4cfd-197b-4887-b9d8-ec32a9a7cf10",
  "Neal Shipon": "7d298d79-0931-4682-8a6f-305e27d992b7",
  "Wenge Li": "7d534d9a-c409-42fa-bce1-c04428d6c5e3",
  "John Cusano": "809fbee0-ae20-4726-9468-9e0e23f6696a",
  "Mary Delorenzo": "88030e00-b9ac-4970-af9a-5b12904cd78c",
  "Noelie Hillebrecht": "97419da1-c259-41a5-8503-2decd14e8a9a",
  "Maryann Colella": "9855697f-b3f5-4fc4-a2b1-53e650a89d1c",
  "Indira Wojcik": "a8ff9958-d91e-4e7f-a381-ec83440e8af8",
  "Bill Starnes": "ab2aa3a5-6292-4d5c-af60-a42f2210e286",
  "Edward Goodman": "c227d83e-6edf-44f6-8517-dd057c42bfc7",
  "Scott Moore": "c25daa27-7d35-45da-82f3-8ff1c62bcce3",
  "Sharon Pastore": "cdd6b427-286b-4fe5-941c-7bdaf9de2843",
  "Nipam Patel": "dadd5cb5-8165-44be-8553-8774bc0949e2",
  "Michael Bardello": "de078500-3a0d-4d35-9d54-8ee4fe57eb2a",
  "Norm Jones": "e25b79a2-a054-4642-a926-1499e0768832",
  "Christine Levesque": "e34d4b70-a0fc-4087-8386-98fb172aee4c",
  "Jane Wang": "e4623ed7-3392-4f18-a65e-ed2922aed69d",
  "Jenny Winters": "ea0e9b2c-cdde-48d1-8585-fd47053329b6",
  "Eileen Killeen": "edaf31af-06d9-4f4c-a073-0876969e3cea",
  "Allen Wang": "ede18e3c-5075-4bfe-9108-daefd58e87bc",
  "Mary Harmon": "fc528b4b-0dfe-4334-9619-0abce2d33972",
  "Mike Yang": "fde88c4a-e006-4396-bc8a-92bf97916537"
 },
 "meta": {
  "matchesPlayed": 20,
  "weeks": "1-2",
  "totalPlayers": 414,
  "ratingHistoryWeeks": [
   1,
   2
  ],
  "divisionSlug": "1e12eb3f",
  "hasPlayoffs": false,
  "typicalDay": "Saturdays",
  "detailFile": "detail-1e12eb3f.js",
  "clubName": "",
  "divisionName": "3.0 (50+)",
  "leagueType": "travel",
  "podCount": 3,
  "podNames": [
   "Northwest",
   "Southwest",
   "Northeast / Southeast"
  ],
  "podSource": "api",
  "reportedPods": [
   "Northeast",
   "Northwest",
   "Southeast",
   "Southwest"
  ],
  "podMismatch": {
   "crossPodMatchups": 12,
   "totalMatchups": 156,
   "reported": {
    "Northwest": [
     "Allstar Pickler",
     "Pickleball Kingdom Hillsborough",
     "Pickleball Palace Black",
     "Pickleball Palace Blue",
     "PickleRage Union County",
     "Picklr Fair Lawn",
     "Premiere Aces"
    ],
    "Southwest": [
     "Bounce Malvern",
     "Bounce Philly",
     "Dill Dinkers Hatboro",
     "Dill Dinkers Newport",
     "Forward",
     "Jersey Devil",
     "Players Courtyard"
    ],
    "Southeast": [
     "ACE Moorestown",
     "Flemington Blue",
     "Flemington Green",
     "Mercer Bucks",
     "Pickleball Kingdom Hamilton Prime Time",
     "Pickleball Kingdom Hamilton Strikers"
    ],
    "Northeast": [
     "Colts Neck Racquet Club",
     "Life Time Red Bank",
     "Monroe",
     "One Love",
     "PKLD",
     "Premiere Dinkers"
    ]
   },
   "schedule": {
    "Pod 1": [
     "Allstar Pickler",
     "Pickleball Kingdom Hillsborough",
     "Pickleball Palace Black",
     "Pickleball Palace Blue",
     "PickleRage Union County",
     "Picklr Fair Lawn",
     "Premiere Aces"
    ],
    "Pod 2": [
     "Bounce Malvern",
     "Bounce Philly",
     "Dill Dinkers Hatboro",
     "Dill Dinkers Newport",
     "Forward",
     "Jersey Devil",
     "Players Courtyard"
    ],
    "Pod 3": [
     "ACE Moorestown",
     "Colts Neck Racquet Club",
     "Flemington Blue",
     "Flemington Green",
     "Life Time Red Bank",
     "Mercer Bucks",
     "Monroe",
     "One Love",
     "Pickleball Kingdom Hamilton Prime Time",
     "Pickleball Kingdom Hamilton Strikers",
     "PKLD",
     "Premiere Dinkers"
    ]
   }
  }
 }
};
  DATA.meta.asOf = "2026-08-30";
  window.DATA = DATA;
  window.CPL_DATASETS = window.CPL_DATASETS || {};
  window.CPL_DATASETS["1e12eb3f"] = DATA;
})();
