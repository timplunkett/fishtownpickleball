(function () {
  const DATA = {
 "players": [
  {
   "name": "Jake Denooyer",
   "gender": "Male",
   "team": "Pickleball Palace Black",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 14,
   "losses": 0,
   "pointsWon": 294,
   "totalPointsAgainst": 178,
   "mixedWins": 6,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 116,
   "ppg": 21,
   "leagueRank": 3,
   "rating": 3.4,
   "ratingGames": 14,
   "confidence": 68,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -1.4,
   "playerId": "a314079a-16b7-42f5-be34-41e1672f7377"
  },
  {
   "name": "Jill Honicker",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 12,
   "losses": 0,
   "pointsWon": 252,
   "totalPointsAgainst": 155,
   "mixedWins": 6,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 97,
   "ppg": 21,
   "leagueRank": 1,
   "rating": 5.5,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.2,
   "playerId": "4d244e17-5296-404e-b826-a70de60cfb14"
  },
  {
   "name": "Huifang Yao",
   "gender": "Female",
   "team": "PickleRage Union County",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 7,
   "losses": 0,
   "pointsWon": 147,
   "totalPointsAgainst": 89,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 58,
   "ppg": 21,
   "leagueRank": 76,
   "rating": 1.8,
   "ratingGames": 7,
   "confidence": 55,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -2.1,
   "playerId": "0678b5e4-cf92-49cb-8689-2d90cc356950"
  },
  {
   "name": "Wenge Li",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 7,
   "losses": 0,
   "pointsWon": 147,
   "totalPointsAgainst": 99,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 48,
   "ppg": 21,
   "leagueRank": 83,
   "rating": 2.2,
   "ratingGames": 7,
   "confidence": 56,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -1.5,
   "playerId": "7d534d9a-c409-42fa-bce1-c04428d6c5e3"
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
   "leagueRank": 13,
   "rating": 1.5,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -1.6,
   "playerId": "f0bbb8a7-1a68-4c7f-9450-3eae9249535b"
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
   "leagueRank": 67,
   "rating": 1.5,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -1,
   "playerId": "25da358c-64df-44f1-b260-9b5cd85c298e"
  },
  {
   "name": "Rick Weiser",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 4,
   "losses": 0,
   "pointsWon": 84,
   "totalPointsAgainst": 54,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 30,
   "ppg": 21,
   "leagueRank": 64,
   "rating": 1.7,
   "ratingGames": 4,
   "confidence": 42,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -1.6,
   "playerId": "0748d687-13e0-403d-95de-28c640adaf43"
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
   "leagueRank": 118,
   "rating": 1.6,
   "ratingGames": 4,
   "confidence": 43,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.5,
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
   "winPct": 100,
   "diff": 21,
   "ppg": 21,
   "leagueRank": 90,
   "rating": 1.5,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.1,
   "playerId": "d0485529-ede0-4a73-b48c-a0a57803ff25"
  },
  {
   "name": "Cheryl Minerowicz",
   "gender": "Female",
   "team": "Pickleball Palace Black",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 17,
   "losses": 1,
   "pointsWon": 368,
   "totalPointsAgainst": 243,
   "mixedWins": 9,
   "mixedLosses": 1,
   "genderWins": 8,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 94.4,
   "diff": 125,
   "ppg": 20.4,
   "leagueRank": 2,
   "rating": 2.3,
   "ratingGames": 18,
   "confidence": 76,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -1.6,
   "playerId": "98cf9a34-6d8e-4aed-81d1-1a6f2fe864f2"
  },
  {
   "name": "Mary Hain",
   "gender": "Female",
   "team": "Forward",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 11,
   "losses": 1,
   "pointsWon": 248,
   "totalPointsAgainst": 141,
   "mixedWins": 7,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 91.7,
   "diff": 107,
   "ppg": 20.7,
   "leagueRank": 5,
   "rating": 4.5,
   "ratingGames": 12,
   "confidence": 66,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": -0.6,
   "playerId": "eda84f5e-5e1e-4e49-b754-eacf36917f94"
  },
  {
   "name": "Henry Dornemann",
   "gender": "Male",
   "team": "One Love",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 10,
   "losses": 1,
   "pointsWon": 229,
   "totalPointsAgainst": 187,
   "mixedWins": 5,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 5,
   "clutchLosses": 1,
   "winPct": 90.9,
   "diff": 42,
   "ppg": 20.8,
   "leagueRank": 6,
   "rating": 3.2,
   "ratingGames": 11,
   "confidence": 64,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.2,
   "playerId": "48c08d33-ec80-4d01-8def-ce9e3ab6eb5a"
  },
  {
   "name": "John Danks",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 19,
   "losses": 2,
   "pointsWon": 436,
   "totalPointsAgainst": 297,
   "mixedWins": 11,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 90.5,
   "diff": 139,
   "ppg": 20.8,
   "leagueRank": 4,
   "rating": 4.9,
   "ratingGames": 21,
   "confidence": 78,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.2,
   "playerId": "f2e5778f-44c1-46ed-b27d-f3728fa84378"
  },
  {
   "name": "Dan Callaghan",
   "gender": "Male",
   "team": "Forward",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 30,
   "wins": 27,
   "losses": 3,
   "pointsWon": 624,
   "totalPointsAgainst": 422,
   "mixedWins": 16,
   "mixedLosses": 0,
   "genderWins": 11,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 90,
   "diff": 202,
   "ppg": 20.8,
   "leagueRank": 8,
   "rating": 2.9,
   "ratingGames": 30,
   "confidence": 84,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": -0.9,
   "playerId": "d1e5126f-1ca9-4bc2-a745-1922b42893ae"
  },
  {
   "name": "Theresa Corderi",
   "gender": "Female",
   "team": "Pickleball Palace Black",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 18,
   "losses": 2,
   "pointsWon": 416,
   "totalPointsAgainst": 284,
   "mixedWins": 7,
   "mixedLosses": 2,
   "genderWins": 11,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 90,
   "diff": 132,
   "ppg": 20.8,
   "leagueRank": 10,
   "rating": 1.8,
   "ratingGames": 20,
   "confidence": 77,
   "strengthOfPartners": 2,
   "strengthOfOpponents": -1.2,
   "playerId": "5a35b4ac-7b94-48d4-bd8f-d9c327751821"
  },
  {
   "name": "Jennifer Applebee",
   "gender": "Female",
   "team": "PickleRage Union County",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 18,
   "losses": 2,
   "pointsWon": 414,
   "totalPointsAgainst": 316,
   "mixedWins": 8,
   "mixedLosses": 2,
   "genderWins": 10,
   "genderLosses": 0,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 90,
   "diff": 98,
   "ppg": 20.7,
   "leagueRank": 9,
   "rating": 2.8,
   "ratingGames": 20,
   "confidence": 76,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.3,
   "playerId": "fee5a8cb-84fc-4d3f-abbe-99d91c2dc9a3"
  },
  {
   "name": "Kristin Duva",
   "gender": "Female",
   "team": "Pickleball Palace Black",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 15,
   "losses": 2,
   "pointsWon": 351,
   "totalPointsAgainst": 250,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 9,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 88.2,
   "diff": 101,
   "ppg": 20.6,
   "leagueRank": 31,
   "rating": 2.3,
   "ratingGames": 17,
   "confidence": 73,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -1,
   "playerId": "33bedbfd-6715-4614-8662-650a8bc4c678"
  },
  {
   "name": "Chris Allander",
   "gender": "Male",
   "team": "Forward",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 21,
   "losses": 3,
   "pointsWon": 487,
   "totalPointsAgainst": 316,
   "mixedWins": 12,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 87.5,
   "diff": 171,
   "ppg": 20.3,
   "leagueRank": 12,
   "rating": 2.9,
   "ratingGames": 24,
   "confidence": 80,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": -1,
   "playerId": "7d76fb68-9895-40c5-b321-f5d5d64d2b02"
  },
  {
   "name": "Vicki Luckett",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 166,
   "totalPointsAgainst": 99,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 87.5,
   "diff": 67,
   "ppg": 20.8,
   "leagueRank": 62,
   "rating": 3.3,
   "ratingGames": 8,
   "confidence": 55,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -1.5,
   "playerId": "256cd63c-8a39-4636-b393-4544c4c8a8e1"
  },
  {
   "name": "Pilot Sung",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 166,
   "totalPointsAgainst": 114,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 87.5,
   "diff": 52,
   "ppg": 20.8,
   "leagueRank": 52,
   "rating": 4.5,
   "ratingGames": 8,
   "confidence": 57,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.1,
   "playerId": "45194127-5788-4152-92e6-25915e5419d8"
  },
  {
   "name": "Carolyn Laroque",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 162,
   "totalPointsAgainst": 129,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 87.5,
   "diff": 33,
   "ppg": 20.3,
   "leagueRank": 99,
   "rating": 1.2,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -1,
   "playerId": "1b62307b-ca04-485d-8788-bc54f446a638"
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
   "leagueRank": 20,
   "rating": 1.6,
   "ratingGames": 14,
   "confidence": 72,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": -0.7,
   "playerId": "90e0fbef-1218-4eb3-887f-b9cc31e73163"
  },
  {
   "name": "Crista Renauro",
   "gender": "Female",
   "team": "Forward",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 12,
   "losses": 2,
   "pointsWon": 287,
   "totalPointsAgainst": 216,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 6,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 85.7,
   "diff": 71,
   "ppg": 20.5,
   "leagueRank": 23,
   "rating": 1.4,
   "ratingGames": 14,
   "confidence": 72,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": -0.8,
   "playerId": "21785bf3-2af4-4120-a15c-d7824a55b711"
  },
  {
   "name": "Christine Ostapiak",
   "gender": "Female",
   "team": "Pickleball Palace Blue",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 12,
   "losses": 2,
   "pointsWon": 287,
   "totalPointsAgainst": 237,
   "mixedWins": 6,
   "mixedLosses": 1,
   "genderWins": 6,
   "genderLosses": 1,
   "clutchWins": 4,
   "clutchLosses": 0,
   "winPct": 85.7,
   "diff": 50,
   "ppg": 20.5,
   "leagueRank": 97,
   "rating": 0,
   "ratingGames": 14,
   "confidence": 69,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -1.2,
   "playerId": "e5d63f22-5a18-4b5d-b916-61d59e17fc0d"
  },
  {
   "name": "Anne Buckley",
   "gender": "Female",
   "team": "Pickleball Palace Black",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 17,
   "losses": 3,
   "pointsWon": 409,
   "totalPointsAgainst": 270,
   "mixedWins": 9,
   "mixedLosses": 1,
   "genderWins": 8,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 85,
   "diff": 139,
   "ppg": 20.5,
   "leagueRank": 14,
   "rating": 3.4,
   "ratingGames": 20,
   "confidence": 76,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -0.8,
   "playerId": "07881006-c083-4729-8424-410aeee08940"
  },
  {
   "name": "Ellen Rubiato",
   "gender": "Female",
   "team": "Forward",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 17,
   "losses": 3,
   "pointsWon": 405,
   "totalPointsAgainst": 266,
   "mixedWins": 10,
   "mixedLosses": 2,
   "genderWins": 7,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 85,
   "diff": 139,
   "ppg": 20.3,
   "leagueRank": 18,
   "rating": 2.1,
   "ratingGames": 20,
   "confidence": 77,
   "strengthOfPartners": 2.2,
   "strengthOfOpponents": -1.1,
   "playerId": "9b6e4166-d6a4-4e8c-812b-65e4d35477f3"
  },
  {
   "name": "Matthew Memmo",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 17,
   "losses": 3,
   "pointsWon": 408,
   "totalPointsAgainst": 312,
   "mixedWins": 9,
   "mixedLosses": 2,
   "genderWins": 8,
   "genderLosses": 1,
   "clutchWins": 4,
   "clutchLosses": 0,
   "winPct": 85,
   "diff": 96,
   "ppg": 20.4,
   "leagueRank": 25,
   "rating": 2.6,
   "ratingGames": 20,
   "confidence": 77,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.4,
   "playerId": "6f3b12bf-032c-458d-bd38-5f9dbe04d374"
  },
  {
   "name": "Suzanne Garcia",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 11,
   "losses": 2,
   "pointsWon": 265,
   "totalPointsAgainst": 182,
   "mixedWins": 6,
   "mixedLosses": 1,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 84.6,
   "diff": 83,
   "ppg": 20.4,
   "leagueRank": 7,
   "rating": 4.2,
   "ratingGames": 13,
   "confidence": 69,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.3,
   "playerId": "f3172220-bb2d-4714-892c-5bb3d728239e"
  },
  {
   "name": "Alan Weissman",
   "gender": "Male",
   "team": "Pickleball Palace Black",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 11,
   "losses": 2,
   "pointsWon": 269,
   "totalPointsAgainst": 212,
   "mixedWins": 6,
   "mixedLosses": 1,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 84.6,
   "diff": 57,
   "ppg": 20.7,
   "leagueRank": 30,
   "rating": 0.4,
   "ratingGames": 13,
   "confidence": 67,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -1.4,
   "playerId": "12febf17-8650-40dd-92ca-a0bda06caf0f"
  },
  {
   "name": "Anthony Leone",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 11,
   "losses": 2,
   "pointsWon": 269,
   "totalPointsAgainst": 219,
   "mixedWins": 7,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 1,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 84.6,
   "diff": 50,
   "ppg": 20.7,
   "leagueRank": 16,
   "rating": 2.6,
   "ratingGames": 13,
   "confidence": 67,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.3,
   "playerId": "a8715ef7-f760-4097-b642-eae44c0a5de7"
  },
  {
   "name": "Yayuan Lien",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton Prime Time",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 11,
   "losses": 2,
   "pointsWon": 260,
   "totalPointsAgainst": 223,
   "mixedWins": 6,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 84.6,
   "diff": 37,
   "ppg": 20,
   "leagueRank": 15,
   "rating": 4.7,
   "ratingGames": 13,
   "confidence": 71,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 0.9,
   "playerId": "f4725f25-ce53-4104-8f94-d558d8c39e84"
  },
  {
   "name": "James Azarowicz",
   "gender": "Male",
   "team": "Pickleball Palace Black",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 19,
   "wins": 16,
   "losses": 3,
   "pointsWon": 388,
   "totalPointsAgainst": 269,
   "mixedWins": 9,
   "mixedLosses": 1,
   "genderWins": 7,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 84.2,
   "diff": 119,
   "ppg": 20.4,
   "leagueRank": 24,
   "rating": 1.9,
   "ratingGames": 19,
   "confidence": 75,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": -1.1,
   "playerId": "c22c2b8e-2758-4b56-b8e4-6758dc47a61d"
  },
  {
   "name": "Carolyn Laverdiere",
   "gender": "Female",
   "team": "Forward",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 16,
   "losses": 3,
   "pointsWon": 369,
   "totalPointsAgainst": 261,
   "mixedWins": 7,
   "mixedLosses": 2,
   "genderWins": 9,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 84.2,
   "diff": 108,
   "ppg": 19.4,
   "leagueRank": 32,
   "rating": 1.2,
   "ratingGames": 19,
   "confidence": 77,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": -1.2,
   "playerId": "ebc26b7d-1ba3-4cf6-a11f-ad6e79c2ff1b"
  },
  {
   "name": "Kim Slomeana",
   "gender": "Female",
   "team": "Forward",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 16,
   "losses": 3,
   "pointsWon": 383,
   "totalPointsAgainst": 292,
   "mixedWins": 6,
   "mixedLosses": 3,
   "genderWins": 10,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 84.2,
   "diff": 91,
   "ppg": 20.2,
   "leagueRank": 29,
   "rating": 2.3,
   "ratingGames": 19,
   "confidence": 75,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.4,
   "playerId": "2b6f81eb-315c-4313-b515-d21d76d5f3e8"
  },
  {
   "name": "Jennifer Laroque",
   "gender": "Female",
   "team": "Forward",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 20,
   "losses": 4,
   "pointsWon": 486,
   "totalPointsAgainst": 342,
   "mixedWins": 8,
   "mixedLosses": 3,
   "genderWins": 12,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 83.3,
   "diff": 144,
   "ppg": 20.3,
   "leagueRank": 27,
   "rating": 2.6,
   "ratingGames": 24,
   "confidence": 80,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": -0.7,
   "playerId": "e870b473-4955-4ccf-82ce-88f72bf2d917"
  },
  {
   "name": "Caroline Kinlin",
   "gender": "Female",
   "team": "Life Time Red Bank",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 12,
   "wins": 10,
   "losses": 2,
   "pointsWon": 244,
   "totalPointsAgainst": 188,
   "mixedWins": 3,
   "mixedLosses": 2,
   "genderWins": 7,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 83.3,
   "diff": 56,
   "ppg": 20.3,
   "leagueRank": 22,
   "rating": 2.5,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.6,
   "playerId": "d5933ee7-ffb8-4b4a-92cd-1a28579372d6"
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
   "leagueRank": 145,
   "rating": 1.3,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": 2.1,
   "strengthOfOpponents": -0.4,
   "playerId": "347f3214-5905-4d1b-8666-9290abe9b727"
  },
  {
   "name": "Dan Sweetman",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 123,
   "totalPointsAgainst": 95,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 28,
   "ppg": 20.5,
   "leagueRank": 132,
   "rating": 2.8,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0,
   "playerId": "2f212831-0629-494e-90b0-d16fc59fc666"
  },
  {
   "name": "Marty Tan",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 119,
   "totalPointsAgainst": 92,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 27,
   "ppg": 19.8,
   "leagueRank": 136,
   "rating": 2,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.1,
   "playerId": "64a75f67-1825-4e71-8704-25f0e370ae81"
  },
  {
   "name": "Carl Nath",
   "gender": "Male",
   "team": "Life Time Red Bank",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 120,
   "totalPointsAgainst": 97,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 23,
   "ppg": 20,
   "leagueRank": 144,
   "rating": 1.3,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": 2.2,
   "strengthOfOpponents": 0.2,
   "playerId": "cef5e952-96d9-473e-8059-ccb6705e31fe"
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
   "winPct": 83.3,
   "diff": 20,
   "ppg": 20.7,
   "leagueRank": 57,
   "rating": 0.7,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": 2,
   "strengthOfOpponents": -0.1,
   "playerId": "53024744-72eb-4d56-b0c9-93a6201bdc33"
  },
  {
   "name": "Gregg Downs",
   "gender": "Male",
   "team": "Mercer Bucks",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 123,
   "totalPointsAgainst": 107,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 16,
   "ppg": 20.5,
   "leagueRank": 162,
   "rating": 0.9,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.5,
   "playerId": "0956f219-4f96-47e1-958e-662675120005"
  },
  {
   "name": "Frank Choi",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 124,
   "totalPointsAgainst": 116,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 5,
   "clutchLosses": 1,
   "winPct": 83.3,
   "diff": 8,
   "ppg": 20.7,
   "leagueRank": 167,
   "rating": 1.2,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.7,
   "playerId": "36634ff8-fb26-4b88-9978-85c3863c3436"
  },
  {
   "name": "Bill Venella",
   "gender": "Male",
   "team": "Forward",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 18,
   "losses": 4,
   "pointsWon": 452,
   "totalPointsAgainst": 307,
   "mixedWins": 8,
   "mixedLosses": 2,
   "genderWins": 10,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 81.8,
   "diff": 145,
   "ppg": 20.5,
   "leagueRank": 21,
   "rating": 3.3,
   "ratingGames": 22,
   "confidence": 78,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": -0.4,
   "playerId": "357a050a-a8ad-4998-a511-814c7c69caad"
  },
  {
   "name": "Alex Chang",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 18,
   "losses": 4,
   "pointsWon": 451,
   "totalPointsAgainst": 357,
   "mixedWins": 9,
   "mixedLosses": 3,
   "genderWins": 9,
   "genderLosses": 1,
   "clutchWins": 5,
   "clutchLosses": 3,
   "winPct": 81.8,
   "diff": 94,
   "ppg": 20.5,
   "leagueRank": 19,
   "rating": 3.7,
   "ratingGames": 22,
   "confidence": 80,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.1,
   "playerId": "93c5b40e-d4ff-4fc5-b7fa-de1e6a82110b"
  },
  {
   "name": "John Gardler",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton Strikers",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 9,
   "losses": 2,
   "pointsWon": 226,
   "totalPointsAgainst": 161,
   "mixedWins": 5,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 81.8,
   "diff": 65,
   "ppg": 20.5,
   "leagueRank": 17,
   "rating": 2.6,
   "ratingGames": 11,
   "confidence": 63,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -1.1,
   "playerId": "3c87532d-0a54-4e25-a210-3eb7a771a346"
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
   "leagueRank": 33,
   "rating": 1.9,
   "ratingGames": 11,
   "confidence": 66,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.7,
   "playerId": "91b2bf26-24f1-437f-82d4-f8ad382c0479"
  },
  {
   "name": "Jeff Pillar",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 9,
   "losses": 2,
   "pointsWon": 221,
   "totalPointsAgainst": 199,
   "mixedWins": 4,
   "mixedLosses": 1,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 5,
   "clutchLosses": 0,
   "winPct": 81.8,
   "diff": 22,
   "ppg": 20.1,
   "leagueRank": 101,
   "rating": -0.6,
   "ratingGames": 11,
   "confidence": 66,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -1.1,
   "playerId": "5934eab7-8a6e-46fd-81e8-95bfb5d7fef6"
  },
  {
   "name": "Tracy Kaban",
   "gender": "Female",
   "team": "One Love",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 8,
   "losses": 2,
   "pointsWon": 204,
   "totalPointsAgainst": 166,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 80,
   "diff": 38,
   "ppg": 20.4,
   "leagueRank": 26,
   "rating": 3.8,
   "ratingGames": 10,
   "confidence": 63,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.3,
   "playerId": "ca3da64e-b479-46c8-a6ef-e9a5430c12c5"
  },
  {
   "name": "Anthony Viola",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 101,
   "totalPointsAgainst": 72,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 80,
   "diff": 29,
   "ppg": 20.2,
   "leagueRank": 105,
   "rating": 0.9,
   "ratingGames": 5,
   "confidence": 50,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -1.9,
   "playerId": "2e35e9c0-513c-4f32-bd0d-d4f79dc29345"
  },
  {
   "name": "Kathy Baker",
   "gender": "Female",
   "team": "Life Time Red Bank",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 103,
   "totalPointsAgainst": 82,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 80,
   "diff": 21,
   "ppg": 20.6,
   "leagueRank": 141,
   "rating": 2.5,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.7,
   "playerId": "e84d93a0-c527-4a44-a896-ccc20d0ac474"
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
   "leagueRank": 180,
   "rating": 0.6,
   "ratingGames": 5,
   "confidence": 49,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": -0.3,
   "playerId": "e8598b52-28b9-41b0-9485-42efee80b3f3"
  },
  {
   "name": "Joe Miller",
   "gender": "Male",
   "team": "Mercer Bucks",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 100,
   "totalPointsAgainst": 85,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 80,
   "diff": 15,
   "ppg": 20,
   "leagueRank": 184,
   "rating": 0.1,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": -2.3,
   "playerId": "60dd7215-9a24-459a-ba3c-43e91f044239"
  },
  {
   "name": "Renee Froeberg",
   "gender": "Female",
   "team": "Picklr Fair Lawn",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 95,
   "totalPointsAgainst": 85,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 80,
   "diff": 10,
   "ppg": 19,
   "leagueRank": 226,
   "rating": 1.8,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.4,
   "playerId": "3804b024-a017-4fa2-90d3-5d726e764f44"
  },
  {
   "name": "Ed Amato",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 15,
   "losses": 4,
   "pointsWon": 383,
   "totalPointsAgainst": 314,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 9,
   "genderLosses": 2,
   "clutchWins": 6,
   "clutchLosses": 1,
   "winPct": 78.9,
   "diff": 69,
   "ppg": 20.2,
   "leagueRank": 37,
   "rating": 2.2,
   "ratingGames": 19,
   "confidence": 76,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.2,
   "playerId": "ce893b2d-f5ea-40aa-98c0-d67402405b64"
  },
  {
   "name": "Leo Decker",
   "gender": "Male",
   "team": "Life Time Red Bank",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 11,
   "losses": 3,
   "pointsWon": 284,
   "totalPointsAgainst": 203,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 78.6,
   "diff": 81,
   "ppg": 20.3,
   "leagueRank": 28,
   "rating": 3,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.9,
   "playerId": "5c87fe0e-e161-49a5-b92c-7a47b37f28eb"
  },
  {
   "name": "David Cardinale",
   "gender": "Male",
   "team": "Premiere Dinkers",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 11,
   "losses": 3,
   "pointsWon": 276,
   "totalPointsAgainst": 241,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 4,
   "clutchLosses": 0,
   "winPct": 78.6,
   "diff": 35,
   "ppg": 19.7,
   "leagueRank": 42,
   "rating": 2.9,
   "ratingGames": 14,
   "confidence": 70,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.1,
   "playerId": "45665a14-3a51-4fa1-a210-314d4f39f720"
  },
  {
   "name": "Debbie Spurr",
   "gender": "Female",
   "team": "Pickleball Palace Black",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 9,
   "wins": 7,
   "losses": 2,
   "pointsWon": 178,
   "totalPointsAgainst": 125,
   "mixedWins": 6,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 77.8,
   "diff": 53,
   "ppg": 19.8,
   "leagueRank": 38,
   "rating": 1.4,
   "ratingGames": 9,
   "confidence": 63,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -1.3,
   "playerId": "6bf05f56-b25f-4e40-9bb9-986d4aebda92"
  },
  {
   "name": "Ginger Evans",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 10,
   "losses": 3,
   "pointsWon": 261,
   "totalPointsAgainst": 208,
   "mixedWins": 5,
   "mixedLosses": 1,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 76.9,
   "diff": 53,
   "ppg": 20.1,
   "leagueRank": 35,
   "rating": 2.1,
   "ratingGames": 13,
   "confidence": 70,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.3,
   "playerId": "f9ea65b5-8f59-4c04-89b0-69ca9429c325"
  },
  {
   "name": "Betsy Hansbury",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 13,
   "losses": 4,
   "pointsWon": 336,
   "totalPointsAgainst": 281,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 9,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 76.5,
   "diff": 55,
   "ppg": 19.8,
   "leagueRank": 43,
   "rating": 3.4,
   "ratingGames": 17,
   "confidence": 74,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 1.1,
   "playerId": "708f285b-0855-47a2-a8b4-9c1459f65781"
  },
  {
   "name": "Maria Fanfa",
   "gender": "Female",
   "team": "Picklr Fair Lawn",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 13,
   "losses": 4,
   "pointsWon": 329,
   "totalPointsAgainst": 280,
   "mixedWins": 10,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 76.5,
   "diff": 49,
   "ppg": 19.4,
   "leagueRank": 53,
   "rating": 2.4,
   "ratingGames": 17,
   "confidence": 74,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0,
   "playerId": "98bfa16f-b5e6-4534-a4b9-5b84267284d4"
  },
  {
   "name": "Zalene Corey",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 16,
   "losses": 5,
   "pointsWon": 414,
   "totalPointsAgainst": 339,
   "mixedWins": 8,
   "mixedLosses": 2,
   "genderWins": 8,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 76.2,
   "diff": 75,
   "ppg": 19.7,
   "leagueRank": 56,
   "rating": 1.5,
   "ratingGames": 21,
   "confidence": 78,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.5,
   "playerId": "e0ffa27a-6b29-48f8-b162-154c995b3d97"
  },
  {
   "name": "Anuraag Verma",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 15,
   "losses": 5,
   "pointsWon": 389,
   "totalPointsAgainst": 300,
   "mixedWins": 6,
   "mixedLosses": 3,
   "genderWins": 9,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 75,
   "diff": 89,
   "ppg": 19.5,
   "leagueRank": 54,
   "rating": 2.6,
   "ratingGames": 20,
   "confidence": 76,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.5,
   "playerId": "c6b0c203-9659-494f-993b-dadd300ed3e8"
  },
  {
   "name": "Nicole Tarallo",
   "gender": "Female",
   "team": "Life Time Red Bank",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 15,
   "losses": 5,
   "pointsWon": 401,
   "totalPointsAgainst": 313,
   "mixedWins": 7,
   "mixedLosses": 3,
   "genderWins": 8,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 75,
   "diff": 88,
   "ppg": 20.1,
   "leagueRank": 36,
   "rating": 3,
   "ratingGames": 21,
   "confidence": 78,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.2,
   "playerId": "d16138ba-5e8f-4f9e-9464-478ba4320c11"
  },
  {
   "name": "Lori Wild",
   "gender": "Female",
   "team": "Forward",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 15,
   "losses": 5,
   "pointsWon": 393,
   "totalPointsAgainst": 308,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 10,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 75,
   "diff": 85,
   "ppg": 19.7,
   "leagueRank": 60,
   "rating": 1.3,
   "ratingGames": 20,
   "confidence": 76,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -0.7,
   "playerId": "b1066a81-7537-4512-939d-5acbf11ef9aa"
  },
  {
   "name": "Guillermo Wong",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton Strikers",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 9,
   "losses": 3,
   "pointsWon": 239,
   "totalPointsAgainst": 178,
   "mixedWins": 3,
   "mixedLosses": 2,
   "genderWins": 6,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 75,
   "diff": 61,
   "ppg": 19.9,
   "leagueRank": 34,
   "rating": 3.4,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.1,
   "playerId": "85be9d97-bc90-4108-8d5d-dea6a31ef6f3"
  },
  {
   "name": "Marcia Rathjen",
   "gender": "Female",
   "team": "Picklr Fair Lawn",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 12,
   "losses": 4,
   "pointsWon": 311,
   "totalPointsAgainst": 252,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 9,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 75,
   "diff": 59,
   "ppg": 19.4,
   "leagueRank": 46,
   "rating": 2.9,
   "ratingGames": 16,
   "confidence": 74,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0,
   "playerId": "713e7456-5ec1-4fa6-ac0f-bb04c2a56c18"
  },
  {
   "name": "Mylene Tenorio",
   "gender": "Female",
   "team": "Picklr Fair Lawn",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 20,
   "wins": 15,
   "losses": 5,
   "pointsWon": 400,
   "totalPointsAgainst": 344,
   "mixedWins": 9,
   "mixedLosses": 2,
   "genderWins": 6,
   "genderLosses": 3,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 75,
   "diff": 56,
   "ppg": 20,
   "leagueRank": 51,
   "rating": 1.9,
   "ratingGames": 20,
   "confidence": 77,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.2,
   "playerId": "ddd5dc5f-551a-4cc1-b809-7d215e0f1eef"
  },
  {
   "name": "Tony Sethi",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton Strikers",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 9,
   "losses": 3,
   "pointsWon": 246,
   "totalPointsAgainst": 200,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 0,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 75,
   "diff": 46,
   "ppg": 20.5,
   "leagueRank": 40,
   "rating": 1.4,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.5,
   "playerId": "d75fb048-848d-41de-ae51-df5a0454b327"
  },
  {
   "name": "Eric Brezina",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 15,
   "losses": 5,
   "pointsWon": 398,
   "totalPointsAgainst": 354,
   "mixedWins": 7,
   "mixedLosses": 3,
   "genderWins": 8,
   "genderLosses": 2,
   "clutchWins": 6,
   "clutchLosses": 2,
   "winPct": 75,
   "diff": 44,
   "ppg": 19.9,
   "leagueRank": 59,
   "rating": 2.1,
   "ratingGames": 20,
   "confidence": 75,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.8,
   "playerId": "717be0e6-148f-4bab-a433-22e4f97d5c47"
  },
  {
   "name": "Joe Moore",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 9,
   "losses": 3,
   "pointsWon": 240,
   "totalPointsAgainst": 199,
   "mixedWins": 3,
   "mixedLosses": 2,
   "genderWins": 6,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 75,
   "diff": 41,
   "ppg": 20,
   "leagueRank": 41,
   "rating": 2.7,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.6,
   "playerId": "04965ab9-e69f-43ba-a064-c7d3351fbf68"
  },
  {
   "name": "Cheryl Tarby",
   "gender": "Female",
   "team": "Mercer Bucks",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 9,
   "losses": 3,
   "pointsWon": 244,
   "totalPointsAgainst": 208,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 6,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 75,
   "diff": 36,
   "ppg": 20.3,
   "leagueRank": 55,
   "rating": 1.3,
   "ratingGames": 12,
   "confidence": 67,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": -1.2,
   "playerId": "c131fed2-9bcb-427c-99c1-b507dda92320"
  },
  {
   "name": "Adele Hackney",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 9,
   "losses": 3,
   "pointsWon": 234,
   "totalPointsAgainst": 203,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 75,
   "diff": 31,
   "ppg": 19.5,
   "leagueRank": 63,
   "rating": 1.9,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.7,
   "playerId": "c1e41980-e98d-4208-aa10-dc04e407cf8f"
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
   "leagueRank": 95,
   "rating": 2.4,
   "ratingGames": 8,
   "confidence": 59,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0,
   "playerId": "1c4c9ff1-1050-48c3-b278-3a5afbf51a7c"
  },
  {
   "name": "Charlene Fletcher",
   "gender": "Female",
   "team": "Pickleball Palace Black",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 3,
   "losses": 1,
   "pointsWon": 82,
   "totalPointsAgainst": 72,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 75,
   "diff": 10,
   "ppg": 20.5,
   "leagueRank": 198,
   "rating": 0.1,
   "ratingGames": 4,
   "confidence": 43,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.7,
   "playerId": "d05d7514-8679-4d34-ad12-654b496f2308"
  },
  {
   "name": "George Nouaime",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 17,
   "losses": 6,
   "pointsWon": 450,
   "totalPointsAgainst": 380,
   "mixedWins": 9,
   "mixedLosses": 4,
   "genderWins": 8,
   "genderLosses": 2,
   "clutchWins": 8,
   "clutchLosses": 1,
   "winPct": 73.9,
   "diff": 70,
   "ppg": 19.6,
   "leagueRank": 72,
   "rating": 1.6,
   "ratingGames": 23,
   "confidence": 80,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.6,
   "playerId": "379ba4b1-4102-4424-bdee-300e8e4fa35b"
  },
  {
   "name": "Dennis Higman",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 14,
   "losses": 5,
   "pointsWon": 374,
   "totalPointsAgainst": 280,
   "mixedWins": 7,
   "mixedLosses": 3,
   "genderWins": 7,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 73.7,
   "diff": 94,
   "ppg": 19.7,
   "leagueRank": 39,
   "rating": 3.4,
   "ratingGames": 19,
   "confidence": 76,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.1,
   "playerId": "b8fabebb-fd0f-49a8-929a-defbac098e43"
  },
  {
   "name": "Andrew Frey",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 14,
   "losses": 5,
   "pointsWon": 382,
   "totalPointsAgainst": 323,
   "mixedWins": 7,
   "mixedLosses": 3,
   "genderWins": 7,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 73.7,
   "diff": 59,
   "ppg": 20.1,
   "leagueRank": 49,
   "rating": 2.9,
   "ratingGames": 19,
   "confidence": 76,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.6,
   "playerId": "beb70730-42da-4979-93b9-bd5c88a52d75"
  },
  {
   "name": "Jennifer Makfinsky",
   "gender": "Female",
   "team": "PKLD",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 22,
   "wins": 16,
   "losses": 6,
   "pointsWon": 442,
   "totalPointsAgainst": 371,
   "mixedWins": 8,
   "mixedLosses": 2,
   "genderWins": 8,
   "genderLosses": 4,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 72.7,
   "diff": 71,
   "ppg": 20.1,
   "leagueRank": 45,
   "rating": 3.9,
   "ratingGames": 22,
   "confidence": 78,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.9,
   "playerId": "67fe047d-4c6f-4a2b-9946-afdd938d18c8"
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
   "leagueRank": 50,
   "rating": 2,
   "ratingGames": 11,
   "confidence": 67,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.6,
   "playerId": "bbb3cbbd-edc3-4fa6-adef-800076f97402"
  },
  {
   "name": "Dean Lim",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton Strikers",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 8,
   "losses": 3,
   "pointsWon": 221,
   "totalPointsAgainst": 201,
   "mixedWins": 5,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 72.7,
   "diff": 20,
   "ppg": 20.1,
   "leagueRank": 77,
   "rating": -0.1,
   "ratingGames": 11,
   "confidence": 64,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.6,
   "playerId": "9d8ac19c-2a48-423f-a8ac-56d66cb6ccff"
  },
  {
   "name": "Tina Convery",
   "gender": "Female",
   "team": "Jersey Devil",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 11,
   "wins": 8,
   "losses": 3,
   "pointsWon": 210,
   "totalPointsAgainst": 205,
   "mixedWins": 6,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 5,
   "clutchLosses": 0,
   "winPct": 72.7,
   "diff": 5,
   "ppg": 19.1,
   "leagueRank": 98,
   "rating": 1.1,
   "ratingGames": 11,
   "confidence": 65,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 1.1,
   "playerId": "f739e9d0-4a76-43d8-9423-4a0ddbfcd63d"
  },
  {
   "name": "Olga Turova",
   "gender": "Female",
   "team": "Monroe",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 13,
   "losses": 5,
   "pointsWon": 358,
   "totalPointsAgainst": 318,
   "mixedWins": 6,
   "mixedLosses": 5,
   "genderWins": 7,
   "genderLosses": 0,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 72.2,
   "diff": 40,
   "ppg": 19.9,
   "leagueRank": 65,
   "rating": 1.5,
   "ratingGames": 18,
   "confidence": 75,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.1,
   "playerId": "1aeb5726-1c67-4c13-8884-b35f0c5c854f"
  },
  {
   "name": "Louis Sapirman",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 15,
   "losses": 6,
   "pointsWon": 413,
   "totalPointsAgainst": 338,
   "mixedWins": 6,
   "mixedLosses": 4,
   "genderWins": 9,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 71.4,
   "diff": 75,
   "ppg": 19.7,
   "leagueRank": 69,
   "rating": 1.3,
   "ratingGames": 21,
   "confidence": 78,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": -0.3,
   "playerId": "2a05bac5-f8e0-4e68-928e-bb0ac69f1921"
  },
  {
   "name": "Ying Lin",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 10,
   "losses": 4,
   "pointsWon": 276,
   "totalPointsAgainst": 202,
   "mixedWins": 6,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 71.4,
   "diff": 74,
   "ppg": 19.7,
   "leagueRank": 44,
   "rating": 2.4,
   "ratingGames": 14,
   "confidence": 70,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.8,
   "playerId": "b31d49f9-a969-4c47-a7a5-2ae2b7a914df"
  },
  {
   "name": "Steven Truzzolino",
   "gender": "Male",
   "team": "PKLD",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 10,
   "losses": 4,
   "pointsWon": 278,
   "totalPointsAgainst": 221,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 71.4,
   "diff": 57,
   "ppg": 19.9,
   "leagueRank": 47,
   "rating": 3.2,
   "ratingGames": 14,
   "confidence": 69,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.5,
   "playerId": "91c0c6ae-3f05-46c0-b1aa-6f328a4bf820"
  },
  {
   "name": "Amy Moore",
   "gender": "Female",
   "team": "Jersey Devil",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 10,
   "losses": 4,
   "pointsWon": 274,
   "totalPointsAgainst": 227,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 6,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 71.4,
   "diff": 47,
   "ppg": 19.6,
   "leagueRank": 58,
   "rating": 1.9,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.2,
   "playerId": "c037ad35-3550-447f-af7f-f62674d0c1ac"
  },
  {
   "name": "Michael Barry",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 10,
   "losses": 4,
   "pointsWon": 277,
   "totalPointsAgainst": 242,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 71.4,
   "diff": 35,
   "ppg": 19.8,
   "leagueRank": 70,
   "rating": 2.2,
   "ratingGames": 14,
   "confidence": 70,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0.9,
   "playerId": "8aa9db46-30ca-4985-93b5-33ad3d7d1963"
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
   "leagueRank": 75,
   "rating": 1.2,
   "ratingGames": 14,
   "confidence": 69,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.2,
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
   "leagueRank": 154,
   "rating": 1.5,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": -0.8,
   "playerId": "31c63d42-7ed4-45ec-9831-f1bb4569e6c7"
  },
  {
   "name": "Michael Keane",
   "gender": "Male",
   "team": "Premiere Dinkers",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 132,
   "totalPointsAgainst": 113,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 71.4,
   "diff": 19,
   "ppg": 18.9,
   "leagueRank": 171,
   "rating": 0.2,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.9,
   "playerId": "730e7308-823f-4571-a7da-52806054582c"
  },
  {
   "name": "Allen Wang",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 137,
   "totalPointsAgainst": 130,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 71.4,
   "diff": 7,
   "ppg": 19.6,
   "leagueRank": 210,
   "rating": 2.2,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.8,
   "playerId": "ede18e3c-5075-4bfe-9108-daefd58e87bc"
  },
  {
   "name": "Krishma Patel",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton Strikers",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 12,
   "losses": 5,
   "pointsWon": 339,
   "totalPointsAgainst": 280,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 8,
   "genderLosses": 2,
   "clutchWins": 6,
   "clutchLosses": 2,
   "winPct": 70.6,
   "diff": 59,
   "ppg": 19.9,
   "leagueRank": 61,
   "rating": 2.3,
   "ratingGames": 17,
   "confidence": 75,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0,
   "playerId": "80331047-7a76-4c4b-9075-b40e26933c6f"
  },
  {
   "name": "Donna Stone",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton Strikers",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 12,
   "losses": 5,
   "pointsWon": 326,
   "totalPointsAgainst": 275,
   "mixedWins": 5,
   "mixedLosses": 4,
   "genderWins": 7,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 70.6,
   "diff": 51,
   "ppg": 19.2,
   "leagueRank": 78,
   "rating": 1.4,
   "ratingGames": 17,
   "confidence": 75,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0,
   "playerId": "af8a6e4b-f588-45db-906e-5766f1307e50"
  },
  {
   "name": "Bart Van Der Gaag",
   "gender": "Male",
   "team": "PKLD",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 12,
   "losses": 5,
   "pointsWon": 336,
   "totalPointsAgainst": 294,
   "mixedWins": 5,
   "mixedLosses": 1,
   "genderWins": 7,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 70.6,
   "diff": 42,
   "ppg": 19.8,
   "leagueRank": 73,
   "rating": 0.8,
   "ratingGames": 17,
   "confidence": 74,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -0.1,
   "playerId": "24b5e97e-55d9-4d59-82ca-3b616f25d3a1"
  },
  {
   "name": "Qiuyan Kong",
   "gender": "Female",
   "team": "Picklr Fair Lawn",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 12,
   "losses": 5,
   "pointsWon": 335,
   "totalPointsAgainst": 308,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 6,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 70.6,
   "diff": 27,
   "ppg": 19.7,
   "leagueRank": 82,
   "rating": 1,
   "ratingGames": 17,
   "confidence": 74,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.2,
   "playerId": "e2b4f0ef-182b-4f3c-8b8e-144aee0e8eb4"
  },
  {
   "name": "Linda Bozzo",
   "gender": "Female",
   "team": "PickleRage Union County",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 20,
   "wins": 14,
   "losses": 6,
   "pointsWon": 397,
   "totalPointsAgainst": 323,
   "mixedWins": 7,
   "mixedLosses": 3,
   "genderWins": 7,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 70,
   "diff": 74,
   "ppg": 19.9,
   "leagueRank": 66,
   "rating": 0.7,
   "ratingGames": 20,
   "confidence": 77,
   "strengthOfPartners": 1.7,
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
   "leagueRank": 79,
   "rating": 0.6,
   "ratingGames": 10,
   "confidence": 62,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.9,
   "playerId": "a1b6d08e-816a-4e07-84f2-616a7050b00b"
  },
  {
   "name": "Rosa Tenan",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton Strikers",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 7,
   "losses": 3,
   "pointsWon": 194,
   "totalPointsAgainst": 182,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 70,
   "diff": 12,
   "ppg": 19.4,
   "leagueRank": 108,
   "rating": -0.7,
   "ratingGames": 10,
   "confidence": 62,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.5,
   "playerId": "f22a22d7-f20d-459b-a7b4-3612b4ff9291"
  },
  {
   "name": "Christina Zumbo-Zerega",
   "gender": "Female",
   "team": "Colts Neck Racquet Club",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 13,
   "wins": 9,
   "losses": 4,
   "pointsWon": 262,
   "totalPointsAgainst": 206,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 69.2,
   "diff": 56,
   "ppg": 20.2,
   "leagueRank": 48,
   "rating": 2.4,
   "ratingGames": 13,
   "confidence": 68,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.6,
   "playerId": "b5518a36-f696-4635-918a-4d6ee23968ff"
  },
  {
   "name": "Matt Mcnulty",
   "gender": "Male",
   "team": "Pickleball Palace Black",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 9,
   "losses": 4,
   "pointsWon": 261,
   "totalPointsAgainst": 206,
   "mixedWins": 6,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 69.2,
   "diff": 55,
   "ppg": 20.1,
   "leagueRank": 71,
   "rating": 1,
   "ratingGames": 13,
   "confidence": 70,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -1,
   "playerId": "8d5bd62d-d038-491c-a8c1-1f276a0ed0dc"
  },
  {
   "name": "Brian Kelly",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton Strikers",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 13,
   "wins": 9,
   "losses": 4,
   "pointsWon": 248,
   "totalPointsAgainst": 217,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 4,
   "clutchLosses": 0,
   "winPct": 69.2,
   "diff": 31,
   "ppg": 19.1,
   "leagueRank": 94,
   "rating": -0.1,
   "ratingGames": 13,
   "confidence": 69,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": -0.4,
   "playerId": "68cc5ac4-2840-4816-b36f-9df7aa9c3c90"
  },
  {
   "name": "Maria Cecilia Holgado",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton Strikers",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 11,
   "losses": 5,
   "pointsWon": 316,
   "totalPointsAgainst": 287,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 68.8,
   "diff": 29,
   "ppg": 19.8,
   "leagueRank": 92,
   "rating": 1.4,
   "ratingGames": 16,
   "confidence": 73,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.4,
   "playerId": "c1c60fc3-68c8-421e-90bb-cdcf21b5a936"
  },
  {
   "name": "Kathi Savage",
   "gender": "Female",
   "team": "PickleRage Union County",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 13,
   "losses": 6,
   "pointsWon": 363,
   "totalPointsAgainst": 289,
   "mixedWins": 7,
   "mixedLosses": 3,
   "genderWins": 6,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 68.4,
   "diff": 74,
   "ppg": 19.1,
   "leagueRank": 85,
   "rating": 0.9,
   "ratingGames": 19,
   "confidence": 76,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -0.7,
   "playerId": "304fa353-a564-41f6-ba23-ed9c19ace5b9"
  },
  {
   "name": "Craig Mehnert",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 19,
   "wins": 13,
   "losses": 6,
   "pointsWon": 366,
   "totalPointsAgainst": 322,
   "mixedWins": 7,
   "mixedLosses": 4,
   "genderWins": 6,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 68.4,
   "diff": 44,
   "ppg": 19.3,
   "leagueRank": 68,
   "rating": 3.5,
   "ratingGames": 19,
   "confidence": 76,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.9,
   "playerId": "371edee5-b6ce-436c-b3ef-b93807443dd8"
  },
  {
   "name": "Greg Taylor",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 19,
   "wins": 13,
   "losses": 6,
   "pointsWon": 364,
   "totalPointsAgainst": 321,
   "mixedWins": 5,
   "mixedLosses": 4,
   "genderWins": 8,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 68.4,
   "diff": 43,
   "ppg": 19.2,
   "leagueRank": 87,
   "rating": 0.9,
   "ratingGames": 19,
   "confidence": 76,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0,
   "playerId": "701f7029-4353-4548-b8db-b7ac7ed3d847"
  },
  {
   "name": "Jeffrey Lindstrom",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 18,
   "wins": 12,
   "losses": 6,
   "pointsWon": 359,
   "totalPointsAgainst": 292,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 6,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 66.7,
   "diff": 67,
   "ppg": 19.9,
   "leagueRank": 84,
   "rating": 0.7,
   "ratingGames": 18,
   "confidence": 75,
   "strengthOfPartners": 2.1,
   "strengthOfOpponents": -0.4,
   "playerId": "4911178f-bf5a-41f2-b2a9-5a86b0adca69"
  },
  {
   "name": "Steven Heller",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 8,
   "losses": 4,
   "pointsWon": 237,
   "totalPointsAgainst": 192,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 45,
   "ppg": 19.8,
   "leagueRank": 74,
   "rating": 1.8,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0,
   "playerId": "344856f5-8559-411b-8fe7-2b5405bb9db6"
  },
  {
   "name": "Filomena Rega",
   "gender": "Female",
   "team": "Monroe",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 14,
   "losses": 7,
   "pointsWon": 409,
   "totalPointsAgainst": 367,
   "mixedWins": 4,
   "mixedLosses": 5,
   "genderWins": 10,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 66.7,
   "diff": 42,
   "ppg": 19.5,
   "leagueRank": 93,
   "rating": 1.2,
   "ratingGames": 21,
   "confidence": 76,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0.5,
   "playerId": "b466c6a0-1ec9-4148-819b-972cc37ca5ec"
  },
  {
   "name": "Jenn Allen",
   "gender": "Female",
   "team": "Jersey Devil",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 118,
   "totalPointsAgainst": 85,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 66.7,
   "diff": 33,
   "ppg": 19.7,
   "leagueRank": 91,
   "rating": 2,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.8,
   "playerId": "1741b412-8d86-480b-a9f3-88447159088a"
  },
  {
   "name": "Lorraine Delcampo",
   "gender": "Female",
   "team": "Jersey Devil",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 8,
   "losses": 4,
   "pointsWon": 236,
   "totalPointsAgainst": 207,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 29,
   "ppg": 19.7,
   "leagueRank": 81,
   "rating": 1.6,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.3,
   "playerId": "c48bcd8a-9960-40d5-9c89-f19f9db11de0"
  },
  {
   "name": "Gerard Scipione",
   "gender": "Male",
   "team": "Pickleball Palace Black",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 122,
   "totalPointsAgainst": 95,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 66.7,
   "diff": 27,
   "ppg": 20.3,
   "leagueRank": 122,
   "rating": 0.1,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": -1.3,
   "playerId": "cc559f7c-6bee-455a-a2e9-bb6f994ddb85"
  },
  {
   "name": "John Stassi",
   "gender": "Male",
   "team": "Premiere Dinkers",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 120,
   "totalPointsAgainst": 97,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 66.7,
   "diff": 23,
   "ppg": 20,
   "leagueRank": 208,
   "rating": 1.4,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -1.1,
   "playerId": "52bf7c5c-a7a8-4aa1-8943-94e370a74e40"
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
   "leagueRank": 89,
   "rating": 1.1,
   "ratingGames": 12,
   "confidence": 64,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.2,
   "playerId": "bbb95dae-c7a1-4e34-b74f-29ff5fc70f29"
  },
  {
   "name": "Audrey Lotti",
   "gender": "Female",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 122,
   "totalPointsAgainst": 104,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 66.7,
   "diff": 18,
   "ppg": 20.3,
   "leagueRank": 199,
   "rating": 1.9,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.2,
   "playerId": "aa46ebc1-bcda-4333-b10b-7e1518949cb5"
  },
  {
   "name": "Qiao Yang",
   "gender": "Female",
   "team": "PickleRage Union County",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 119,
   "totalPointsAgainst": 108,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 11,
   "ppg": 19.8,
   "leagueRank": 230,
   "rating": 0.6,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.2,
   "playerId": "4be24db4-ce32-40fa-bd9d-1900b731a602"
  },
  {
   "name": "David Barban",
   "gender": "Male",
   "team": "Pickleball Palace Blue",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 113,
   "totalPointsAgainst": 106,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 66.7,
   "diff": 7,
   "ppg": 18.8,
   "leagueRank": 233,
   "rating": 1.9,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 1.6,
   "playerId": "6ffc191a-d2b1-4839-bd30-f93b5f9cd4d9"
  },
  {
   "name": "David Mccarthy",
   "gender": "Male",
   "team": "Life Time Red Bank",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 117,
   "totalPointsAgainst": 113,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 4,
   "ppg": 19.5,
   "leagueRank": 265,
   "rating": -2.1,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -2,
   "playerId": "90af44f2-013b-4fa5-bf79-fc11c13ae897"
  },
  {
   "name": "Bill Starnes",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 118,
   "totalPointsAgainst": 116,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 2,
   "ppg": 19.7,
   "leagueRank": 245,
   "rating": 0.6,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.5,
   "playerId": "ab2aa3a5-6292-4d5c-af60-a42f2210e286"
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
   "winPct": 66.7,
   "diff": -2,
   "ppg": 19.3,
   "leagueRank": 263,
   "rating": 0,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": 1,
   "playerId": "2b4dc294-9f7a-40c5-978e-59adf81286d7"
  },
  {
   "name": "Amy Farrell",
   "gender": "Female",
   "team": "Monroe",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 13,
   "losses": 7,
   "pointsWon": 376,
   "totalPointsAgainst": 337,
   "mixedWins": 7,
   "mixedLosses": 3,
   "genderWins": 6,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 65,
   "diff": 39,
   "ppg": 18.8,
   "leagueRank": 104,
   "rating": 1.5,
   "ratingGames": 20,
   "confidence": 78,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0,
   "playerId": "73509e7b-7c99-4b1e-998c-a9de94daa2a2"
  },
  {
   "name": "Jeffrey Quinlan",
   "gender": "Male",
   "team": "Monroe",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 13,
   "losses": 7,
   "pointsWon": 378,
   "totalPointsAgainst": 341,
   "mixedWins": 7,
   "mixedLosses": 3,
   "genderWins": 6,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 65,
   "diff": 37,
   "ppg": 18.9,
   "leagueRank": 103,
   "rating": 1.7,
   "ratingGames": 20,
   "confidence": 77,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.4,
   "playerId": "f7bf88cc-9cdb-4d3c-b768-c2922c5a8456"
  },
  {
   "name": "Olga Sedycias",
   "gender": "Female",
   "team": "Picklr Fair Lawn",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 13,
   "losses": 7,
   "pointsWon": 385,
   "totalPointsAgainst": 351,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 8,
   "genderLosses": 4,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 65,
   "diff": 34,
   "ppg": 19.3,
   "leagueRank": 107,
   "rating": 0.9,
   "ratingGames": 20,
   "confidence": 77,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.1,
   "playerId": "7c14ace8-2c5f-416f-8619-efa19901a78c"
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
   "leagueRank": 88,
   "rating": 1.7,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -0.3,
   "playerId": "1973cf93-7507-478a-b457-4fa7ec0951af"
  },
  {
   "name": "Anthony Manzo",
   "gender": "Male",
   "team": "Monroe",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 14,
   "wins": 9,
   "losses": 5,
   "pointsWon": 265,
   "totalPointsAgainst": 238,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 64.3,
   "diff": 27,
   "ppg": 18.9,
   "leagueRank": 102,
   "rating": 3.1,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 1.3,
   "playerId": "031d7489-2ebb-4fb5-959b-88a86d0fff46"
  },
  {
   "name": "Jean Knab",
   "gender": "Female",
   "team": "Mercer Bucks",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 9,
   "losses": 5,
   "pointsWon": 267,
   "totalPointsAgainst": 247,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 64.3,
   "diff": 20,
   "ppg": 19.1,
   "leagueRank": 114,
   "rating": 0.5,
   "ratingGames": 14,
   "confidence": 69,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.6,
   "playerId": "abce612c-0edd-4b72-ab5a-f1983c38f545"
  },
  {
   "name": "Richard Fox",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 9,
   "losses": 5,
   "pointsWon": 266,
   "totalPointsAgainst": 253,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 5,
   "clutchLosses": 1,
   "winPct": 64.3,
   "diff": 13,
   "ppg": 19,
   "leagueRank": 117,
   "rating": 1.3,
   "ratingGames": 14,
   "confidence": 70,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.8,
   "playerId": "ef0bc1ce-6709-4172-97a6-8ea5a462bea4"
  },
  {
   "name": "Eric Smith",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 9,
   "losses": 5,
   "pointsWon": 257,
   "totalPointsAgainst": 248,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 64.3,
   "diff": 9,
   "ppg": 18.4,
   "leagueRank": 127,
   "rating": 1.3,
   "ratingGames": 14,
   "confidence": 73,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 1.1,
   "playerId": "3120fa05-d5d9-4b71-a339-4ed92f3e5b06"
  },
  {
   "name": "Mark Garner",
   "gender": "Male",
   "team": "Pickleball Palace Blue",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 16,
   "losses": 9,
   "pointsWon": 478,
   "totalPointsAgainst": 422,
   "mixedWins": 7,
   "mixedLosses": 7,
   "genderWins": 9,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 64,
   "diff": 56,
   "ppg": 19.1,
   "leagueRank": 177,
   "rating": 0.2,
   "ratingGames": 25,
   "confidence": 80,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.6,
   "playerId": "c9e3d3ee-24e9-437d-b770-fb4a3b5a37b3"
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
   "leagueRank": 96,
   "rating": 0.9,
   "ratingGames": 11,
   "confidence": 66,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": -0.7,
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
   "leagueRank": 100,
   "rating": 1.6,
   "ratingGames": 11,
   "confidence": 62,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.6,
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
   "winPct": 63.6,
   "diff": 39,
   "ppg": 18.5,
   "leagueRank": 142,
   "rating": 1.3,
   "ratingGames": 11,
   "confidence": 66,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -1,
   "playerId": "e623609f-5136-415f-a018-74427cfa13ff"
  },
  {
   "name": "Scott Gardo",
   "gender": "Male",
   "team": "Forward",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 14,
   "losses": 8,
   "pointsWon": 408,
   "totalPointsAgainst": 372,
   "mixedWins": 7,
   "mixedLosses": 4,
   "genderWins": 7,
   "genderLosses": 4,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 63.6,
   "diff": 36,
   "ppg": 18.5,
   "leagueRank": 137,
   "rating": -0.6,
   "ratingGames": 22,
   "confidence": 78,
   "strengthOfPartners": 2,
   "strengthOfOpponents": -0.2,
   "playerId": "2580158f-1c0c-4a5a-8a0c-b48d2c1f0067"
  },
  {
   "name": "Teresa Carr",
   "gender": "Female",
   "team": "PickleRage Union County",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 7,
   "losses": 4,
   "pointsWon": 217,
   "totalPointsAgainst": 188,
   "mixedWins": 5,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 63.6,
   "diff": 29,
   "ppg": 19.7,
   "leagueRank": 138,
   "rating": 1.2,
   "ratingGames": 11,
   "confidence": 67,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.2,
   "playerId": "b84f31ed-afcf-4045-b351-8ece85cdeb26"
  },
  {
   "name": "Stanley Okpor",
   "gender": "Male",
   "team": "Pickleball Palace Blue",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 12,
   "losses": 7,
   "pointsWon": 358,
   "totalPointsAgainst": 311,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 6,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 63.2,
   "diff": 47,
   "ppg": 18.8,
   "leagueRank": 106,
   "rating": 2,
   "ratingGames": 19,
   "confidence": 77,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.2,
   "playerId": "dba57d37-2d91-4c25-96ae-cbc287043db4"
  },
  {
   "name": "Marie Walsh Mccarty",
   "gender": "Female",
   "team": "Life Time Red Bank",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 158,
   "totalPointsAgainst": 125,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 62.5,
   "diff": 33,
   "ppg": 19.8,
   "leagueRank": 131,
   "rating": 1.2,
   "ratingGames": 9,
   "confidence": 63,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.5,
   "playerId": "f7f80e1e-cebe-432b-9862-1120daaba26e"
  },
  {
   "name": "Elliot Fishman",
   "gender": "Male",
   "team": "PKLD",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 10,
   "losses": 6,
   "pointsWon": 300,
   "totalPointsAgainst": 272,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 62.5,
   "diff": 28,
   "ppg": 18.8,
   "leagueRank": 116,
   "rating": 2.3,
   "ratingGames": 16,
   "confidence": 72,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.6,
   "playerId": "3617a420-089d-408c-abf0-c3894b33a47e"
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
   "winPct": 62.5,
   "diff": 23,
   "ppg": 20.1,
   "leagueRank": 113,
   "rating": -0.5,
   "ratingGames": 8,
   "confidence": 55,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -1.2,
   "playerId": "b76b0425-e8ac-48b3-aa4e-cbb462179fbe"
  },
  {
   "name": "Michael Burns",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 15,
   "losses": 9,
   "pointsWon": 445,
   "totalPointsAgainst": 427,
   "mixedWins": 8,
   "mixedLosses": 4,
   "genderWins": 7,
   "genderLosses": 5,
   "clutchWins": 6,
   "clutchLosses": 2,
   "winPct": 62.5,
   "diff": 18,
   "ppg": 18.5,
   "leagueRank": 121,
   "rating": 1.2,
   "ratingGames": 24,
   "confidence": 80,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.1,
   "playerId": "8142380a-a08e-4510-9c99-7bc928b665ed"
  },
  {
   "name": "David Katz",
   "gender": "Male",
   "team": "One Love",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 145,
   "totalPointsAgainst": 132,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 62.5,
   "diff": 13,
   "ppg": 18.1,
   "leagueRank": 160,
   "rating": 2.2,
   "ratingGames": 8,
   "confidence": 57,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.2,
   "playerId": "d55d3206-5478-4a12-b49a-095d301a098b"
  },
  {
   "name": "Jackie Coneeny",
   "gender": "Female",
   "team": "Life Time Red Bank",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 150,
   "totalPointsAgainst": 140,
   "mixedWins": 3,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 62.5,
   "diff": 10,
   "ppg": 18.8,
   "leagueRank": 172,
   "rating": 0.4,
   "ratingGames": 8,
   "confidence": 62,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0,
   "playerId": "cee0559f-0285-4e86-9254-128f836efee8"
  },
  {
   "name": "Sue Mah",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 145,
   "totalPointsAgainst": 137,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 62.5,
   "diff": 8,
   "ppg": 18.1,
   "leagueRank": 223,
   "rating": 1.2,
   "ratingGames": 8,
   "confidence": 59,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.1,
   "playerId": "408eed1b-b867-4f9a-b796-7dc23c6d2311"
  },
  {
   "name": "John Cusano",
   "gender": "Male",
   "team": "Pickleball Palace Blue",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 8,
   "losses": 5,
   "pointsWon": 237,
   "totalPointsAgainst": 194,
   "mixedWins": 4,
   "mixedLosses": 4,
   "genderWins": 4,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 61.5,
   "diff": 43,
   "ppg": 18.2,
   "leagueRank": 115,
   "rating": 1.1,
   "ratingGames": 13,
   "confidence": 70,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.8,
   "playerId": "809fbee0-ae20-4726-9468-9e0e23f6696a"
  },
  {
   "name": "Eden Paredes",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 8,
   "losses": 5,
   "pointsWon": 247,
   "totalPointsAgainst": 220,
   "mixedWins": 3,
   "mixedLosses": 2,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 61.5,
   "diff": 27,
   "ppg": 19,
   "leagueRank": 123,
   "rating": 1.1,
   "ratingGames": 13,
   "confidence": 69,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.2,
   "playerId": "6feb852e-6d64-42d2-8135-3c625b7a0af3"
  },
  {
   "name": "Angela Bartelt",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 8,
   "losses": 5,
   "pointsWon": 257,
   "totalPointsAgainst": 231,
   "mixedWins": 4,
   "mixedLosses": 4,
   "genderWins": 4,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 61.5,
   "diff": 26,
   "ppg": 19.8,
   "leagueRank": 111,
   "rating": 1.1,
   "ratingGames": 13,
   "confidence": 70,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.2,
   "playerId": "42277c06-ba82-4f93-927a-9fd6f17a5ddc"
  },
  {
   "name": "Gail Hannagan",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 8,
   "losses": 5,
   "pointsWon": 253,
   "totalPointsAgainst": 231,
   "mixedWins": 5,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 61.5,
   "diff": 22,
   "ppg": 19.5,
   "leagueRank": 112,
   "rating": 2,
   "ratingGames": 13,
   "confidence": 69,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.9,
   "playerId": "3d17e05b-9fe9-4d04-a0c7-4e03c1e6530e"
  },
  {
   "name": "Michael Hsieh",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 8,
   "losses": 5,
   "pointsWon": 235,
   "totalPointsAgainst": 219,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 61.5,
   "diff": 16,
   "ppg": 18.1,
   "leagueRank": 133,
   "rating": 1.4,
   "ratingGames": 13,
   "confidence": 69,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.8,
   "playerId": "df366b7b-3468-492e-ae2f-b7ad65d5439e"
  },
  {
   "name": "Lynette Pil",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton Strikers",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 11,
   "losses": 7,
   "pointsWon": 349,
   "totalPointsAgainst": 316,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 6,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 61.1,
   "diff": 33,
   "ppg": 19.4,
   "leagueRank": 119,
   "rating": 0.6,
   "ratingGames": 18,
   "confidence": 76,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.1,
   "playerId": "92b709b8-b68c-436f-95e5-d9db2908cc3c"
  },
  {
   "name": "Paul Phillips",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 11,
   "losses": 7,
   "pointsWon": 341,
   "totalPointsAgainst": 329,
   "mixedWins": 7,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 6,
   "clutchLosses": 1,
   "winPct": 61.1,
   "diff": 12,
   "ppg": 18.9,
   "leagueRank": 140,
   "rating": -0.5,
   "ratingGames": 18,
   "confidence": 73,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.3,
   "playerId": "9ef3e1b1-2818-46f0-ab0b-2ee190d176b3"
  },
  {
   "name": "Daniel Ryan",
   "gender": "Male",
   "team": "Life Time Red Bank",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 12,
   "losses": 8,
   "pointsWon": 369,
   "totalPointsAgainst": 325,
   "mixedWins": 4,
   "mixedLosses": 4,
   "genderWins": 8,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 60,
   "diff": 44,
   "ppg": 18.5,
   "leagueRank": 124,
   "rating": 1.9,
   "ratingGames": 20,
   "confidence": 77,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0,
   "playerId": "d3981774-293f-436c-96ce-b08158d31860"
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
   "leagueRank": 182,
   "rating": 2.1,
   "ratingGames": 5,
   "confidence": 49,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.3,
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
   "leagueRank": 188,
   "rating": -0.4,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -1.8,
   "playerId": "b7f4c737-4ebf-41e0-8a14-13124005eb7c"
  },
  {
   "name": "Calvin Giles",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 101,
   "totalPointsAgainst": 83,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 60,
   "diff": 18,
   "ppg": 20.2,
   "leagueRank": 275,
   "rating": 0.9,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -1.3,
   "playerId": "6e9ad16e-485c-47b3-90fc-d713d861ca16"
  },
  {
   "name": "Darin Gall",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 12,
   "losses": 8,
   "pointsWon": 376,
   "totalPointsAgainst": 359,
   "mixedWins": 6,
   "mixedLosses": 3,
   "genderWins": 6,
   "genderLosses": 5,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 60,
   "diff": 17,
   "ppg": 18.8,
   "leagueRank": 135,
   "rating": 0.4,
   "ratingGames": 20,
   "confidence": 76,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.4,
   "playerId": "9b286e84-ad6b-4d88-8306-75906ac6dd8c"
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
   "leagueRank": 243,
   "rating": 0,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -1.1,
   "playerId": "d45fab4f-9820-4e79-b3c5-b889c924af20"
  },
  {
   "name": "Barbara Markoglu",
   "gender": "Female",
   "team": "Premiere Dinkers",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 9,
   "losses": 6,
   "pointsWon": 294,
   "totalPointsAgainst": 278,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 60,
   "diff": 16,
   "ppg": 19.6,
   "leagueRank": 129,
   "rating": 0.3,
   "ratingGames": 15,
   "confidence": 72,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -0.6,
   "playerId": "4ca325bd-f0d7-4b18-b570-c6ef241d2ff5"
  },
  {
   "name": "Patty Direzze",
   "gender": "Female",
   "team": "Picklr Fair Lawn",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 9,
   "losses": 6,
   "pointsWon": 280,
   "totalPointsAgainst": 270,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 7,
   "genderLosses": 1,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 60,
   "diff": 10,
   "ppg": 18.7,
   "leagueRank": 139,
   "rating": 0.1,
   "ratingGames": 15,
   "confidence": 70,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.1,
   "playerId": "826ca41a-b56b-4688-9a30-330a67e541f3"
  },
  {
   "name": "Lolita Hagen",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 96,
   "totalPointsAgainst": 90,
   "mixedWins": 1,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 60,
   "diff": 6,
   "ppg": 19.2,
   "leagueRank": 225,
   "rating": -0.4,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.5,
   "playerId": "c4ac93eb-8c41-45e6-9ff3-026934b618b5"
  },
  {
   "name": "Wallace Eng",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 94,
   "totalPointsAgainst": 88,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 60,
   "diff": 6,
   "ppg": 18.8,
   "leagueRank": 300,
   "rating": -0.3,
   "ratingGames": 5,
   "confidence": 49,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": -0.1,
   "playerId": "360f036f-ac8c-46bf-b5be-a891c069e5b9"
  },
  {
   "name": "Tracy Leahy",
   "gender": "Female",
   "team": "Mercer Bucks",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 98,
   "totalPointsAgainst": 94,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 60,
   "diff": 4,
   "ppg": 19.6,
   "leagueRank": 279,
   "rating": -1,
   "ratingGames": 5,
   "confidence": 50,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": -1.7,
   "playerId": "133dd4ec-1061-4445-9254-fd84ddd0cc5a"
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
   "leagueRank": 273,
   "rating": 0.9,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": -2.5,
   "strengthOfOpponents": -0.8,
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
   "winPct": 60,
   "diff": 3,
   "ppg": 19.2,
   "leagueRank": 307,
   "rating": 0.5,
   "ratingGames": 5,
   "confidence": 49,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.3,
   "playerId": "c6bf4d6c-5e3d-48c9-9be7-dadacd5a465d"
  },
  {
   "name": "Jenny Winters",
   "gender": "Female",
   "team": "Pickleball Palace Blue",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 99,
   "totalPointsAgainst": 97,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 60,
   "diff": 2,
   "ppg": 19.8,
   "leagueRank": 291,
   "rating": 0.4,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.5,
   "playerId": "ea0e9b2c-cdde-48d1-8585-fd47053329b6"
  },
  {
   "name": "Heather King",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 9,
   "losses": 6,
   "pointsWon": 262,
   "totalPointsAgainst": 274,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 60,
   "diff": -12,
   "ppg": 17.5,
   "leagueRank": 189,
   "rating": -1.1,
   "ratingGames": 15,
   "confidence": 72,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.2,
   "playerId": "a3f83304-9f0d-4613-b871-ecaa6bf9c7d0"
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
   "leagueRank": 324,
   "rating": -1.6,
   "ratingGames": 5,
   "confidence": 49,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.1,
   "playerId": "618ea8c2-7d45-4878-b110-9e8450a2e0e1"
  },
  {
   "name": "Jeffrey Hartford",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 10,
   "losses": 7,
   "pointsWon": 337,
   "totalPointsAgainst": 317,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 7,
   "genderLosses": 4,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 58.8,
   "diff": 20,
   "ppg": 19.8,
   "leagueRank": 130,
   "rating": 0.4,
   "ratingGames": 17,
   "confidence": 74,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.1,
   "playerId": "3801a1f8-353e-4ecf-ada7-e8ed5ff23235"
  },
  {
   "name": "Phillip Perry",
   "gender": "Male",
   "team": "One Love",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 10,
   "losses": 7,
   "pointsWon": 324,
   "totalPointsAgainst": 304,
   "mixedWins": 4,
   "mixedLosses": 4,
   "genderWins": 6,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 58.8,
   "diff": 20,
   "ppg": 19.1,
   "leagueRank": 126,
   "rating": 1.9,
   "ratingGames": 17,
   "confidence": 75,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.1,
   "playerId": "acc4012f-320c-4b43-8ec7-f60ca7419e03"
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
   "rating": 0.6,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.8,
   "playerId": "a2e21de9-b9d3-4727-a66f-101c62e00a5d"
  },
  {
   "name": "Andrew Craig",
   "gender": "Male",
   "team": "Pickleball Palace Blue",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 7,
   "losses": 5,
   "pointsWon": 223,
   "totalPointsAgainst": 228,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 58.3,
   "diff": -5,
   "ppg": 18.6,
   "leagueRank": 149,
   "rating": 1,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 1.4,
   "playerId": "12282462-33ce-4ae9-81ae-5bb224883f78"
  },
  {
   "name": "Matt Becker",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 11,
   "losses": 8,
   "pointsWon": 350,
   "totalPointsAgainst": 337,
   "mixedWins": 7,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 6,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 57.9,
   "diff": 13,
   "ppg": 18.4,
   "leagueRank": 146,
   "rating": 1.2,
   "ratingGames": 19,
   "confidence": 75,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 1.1,
   "playerId": "604007f9-8645-4f0f-9909-e3a9b2fa6dd7"
  },
  {
   "name": "Tinglan Zhao",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 12,
   "losses": 9,
   "pointsWon": 404,
   "totalPointsAgainst": 351,
   "mixedWins": 6,
   "mixedLosses": 6,
   "genderWins": 6,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 57.1,
   "diff": 53,
   "ppg": 19.2,
   "leagueRank": 120,
   "rating": 0.7,
   "ratingGames": 21,
   "confidence": 77,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -0.2,
   "playerId": "5f2e3f29-7b61-4d23-ba5a-23bfe5eac362"
  },
  {
   "name": "Melissa Freedman",
   "gender": "Female",
   "team": "Colts Neck Racquet Club",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 8,
   "losses": 6,
   "pointsWon": 280,
   "totalPointsAgainst": 250,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 6,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 5,
   "winPct": 57.1,
   "diff": 30,
   "ppg": 20,
   "leagueRank": 109,
   "rating": 2.2,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.4,
   "playerId": "fcfdec94-0e44-4583-8b2a-089109e9bd33"
  },
  {
   "name": "Jason Belmont",
   "gender": "Male",
   "team": "Mercer Bucks",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 21,
   "wins": 12,
   "losses": 9,
   "pointsWon": 398,
   "totalPointsAgainst": 381,
   "mixedWins": 6,
   "mixedLosses": 5,
   "genderWins": 6,
   "genderLosses": 4,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 57.1,
   "diff": 17,
   "ppg": 19,
   "leagueRank": 147,
   "rating": -0.1,
   "ratingGames": 21,
   "confidence": 78,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.4,
   "playerId": "a1df4f80-0b37-4f8b-a71f-b11b6eb85f4c"
  },
  {
   "name": "Tiran Rishon",
   "gender": "Male",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 128,
   "totalPointsAgainst": 115,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 57.1,
   "diff": 13,
   "ppg": 18.3,
   "leagueRank": 232,
   "rating": 0.3,
   "ratingGames": 7,
   "confidence": 54,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": 0.2,
   "playerId": "94303649-fbc0-4a75-b863-c7385e5b62bb"
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
   "winPct": 57.1,
   "diff": 12,
   "ppg": 19,
   "leagueRank": 246,
   "rating": 3,
   "ratingGames": 7,
   "confidence": 57,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 1.1,
   "playerId": "f6eef486-8999-4247-a7d8-20251377021c"
  },
  {
   "name": "Beth Pardilla",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 123,
   "totalPointsAgainst": 127,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 57.1,
   "diff": -4,
   "ppg": 17.6,
   "leagueRank": 241,
   "rating": 2,
   "ratingGames": 7,
   "confidence": 56,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 1.6,
   "playerId": "8c91a1ca-2f64-4dc4-a33c-44e8c6f08eee"
  },
  {
   "name": "Mary Harmon",
   "gender": "Female",
   "team": "Mercer Bucks",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 8,
   "losses": 6,
   "pointsWon": 248,
   "totalPointsAgainst": 253,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 57.1,
   "diff": -5,
   "ppg": 17.7,
   "leagueRank": 193,
   "rating": -1.6,
   "ratingGames": 14,
   "confidence": 70,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.5,
   "playerId": "fc528b4b-0dfe-4334-9619-0abce2d33972"
  },
  {
   "name": "John Rogers",
   "gender": "Male",
   "team": "Premiere Dinkers",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 13,
   "losses": 10,
   "pointsWon": 427,
   "totalPointsAgainst": 421,
   "mixedWins": 8,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 7,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 56.5,
   "diff": 6,
   "ppg": 18.6,
   "leagueRank": 164,
   "rating": -0.3,
   "ratingGames": 23,
   "confidence": 78,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.6,
   "playerId": "45bc6397-1703-4a4b-bde7-fda65905fe3a"
  },
  {
   "name": "Bonny Mayerberg",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 9,
   "losses": 7,
   "pointsWon": 294,
   "totalPointsAgainst": 284,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 56.3,
   "diff": 10,
   "ppg": 18.4,
   "leagueRank": 157,
   "rating": 0.7,
   "ratingGames": 16,
   "confidence": 72,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.4,
   "playerId": "0e543890-4c91-45d2-bd5d-819dc476b245"
  },
  {
   "name": "Michele Collins",
   "gender": "Female",
   "team": "One Love",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 16,
   "wins": 9,
   "losses": 7,
   "pointsWon": 293,
   "totalPointsAgainst": 302,
   "mixedWins": 6,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 5,
   "clutchLosses": 1,
   "winPct": 56.3,
   "diff": -9,
   "ppg": 18.3,
   "leagueRank": 175,
   "rating": -0.2,
   "ratingGames": 16,
   "confidence": 74,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.2,
   "playerId": "b2b07a6e-b0b0-4040-94ae-9f93af110941"
  },
  {
   "name": "Tao Zhu",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 10,
   "losses": 8,
   "pointsWon": 342,
   "totalPointsAgainst": 318,
   "mixedWins": 5,
   "mixedLosses": 5,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 55.6,
   "diff": 24,
   "ppg": 19,
   "leagueRank": 125,
   "rating": 2.5,
   "ratingGames": 18,
   "confidence": 76,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.5,
   "playerId": "fce9f902-9a8a-4ee0-8faa-eee3226b7b91"
  },
  {
   "name": "Sarah Stangota",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 18,
   "wins": 10,
   "losses": 8,
   "pointsWon": 341,
   "totalPointsAgainst": 318,
   "mixedWins": 7,
   "mixedLosses": 5,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 55.6,
   "diff": 23,
   "ppg": 18.9,
   "leagueRank": 143,
   "rating": 0.3,
   "ratingGames": 18,
   "confidence": 76,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0.3,
   "playerId": "80fbbb8f-8f4d-4a6f-bc08-925f29df32ea"
  },
  {
   "name": "Bing Zhu",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 10,
   "losses": 8,
   "pointsWon": 326,
   "totalPointsAgainst": 318,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 8,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 55.6,
   "diff": 8,
   "ppg": 18.1,
   "leagueRank": 169,
   "rating": -0.6,
   "ratingGames": 18,
   "confidence": 76,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.2,
   "playerId": "e6f1ad88-f91d-41ca-9771-833b1f38eff3"
  },
  {
   "name": "Tracy Narag",
   "gender": "Female",
   "team": "Pickleball Palace Blue",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 10,
   "losses": 8,
   "pointsWon": 333,
   "totalPointsAgainst": 336,
   "mixedWins": 2,
   "mixedLosses": 7,
   "genderWins": 8,
   "genderLosses": 1,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 55.6,
   "diff": -3,
   "ppg": 18.5,
   "leagueRank": 155,
   "rating": 1,
   "ratingGames": 18,
   "confidence": 76,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.8,
   "playerId": "bc3af4c8-b7d2-4f23-a2c2-c7d04191ac89"
  },
  {
   "name": "Dajie （David） Yang",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 16,
   "losses": 13,
   "pointsWon": 536,
   "totalPointsAgainst": 549,
   "mixedWins": 7,
   "mixedLosses": 8,
   "genderWins": 9,
   "genderLosses": 5,
   "clutchWins": 7,
   "clutchLosses": 3,
   "winPct": 55.2,
   "diff": -13,
   "ppg": 18.5,
   "leagueRank": 176,
   "rating": -0.6,
   "ratingGames": 29,
   "confidence": 82,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.1,
   "playerId": "b153649d-e405-4192-85f9-c1871ba0eba0"
  },
  {
   "name": "Lynn Quinn",
   "gender": "Female",
   "team": "Pickleball Palace Blue",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 11,
   "losses": 9,
   "pointsWon": 387,
   "totalPointsAgainst": 351,
   "mixedWins": 7,
   "mixedLosses": 4,
   "genderWins": 4,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 55,
   "diff": 36,
   "ppg": 19.4,
   "leagueRank": 134,
   "rating": 2.2,
   "ratingGames": 20,
   "confidence": 74,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.6,
   "playerId": "d6c99730-dfc7-4a86-aa1e-163058c5b8c2"
  },
  {
   "name": "Sharon Oddy",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 6,
   "losses": 5,
   "pointsWon": 217,
   "totalPointsAgainst": 176,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 54.5,
   "diff": 41,
   "ppg": 19.7,
   "leagueRank": 110,
   "rating": 1.1,
   "ratingGames": 11,
   "confidence": 65,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.8,
   "playerId": "697e9a10-3950-4376-96f8-8b1f083875f1"
  },
  {
   "name": "Noelie Hillebrecht",
   "gender": "Female",
   "team": "Pickleball Palace Blue",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 6,
   "losses": 5,
   "pointsWon": 204,
   "totalPointsAgainst": 184,
   "mixedWins": 2,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 54.5,
   "diff": 20,
   "ppg": 18.5,
   "leagueRank": 204,
   "rating": -0.2,
   "ratingGames": 11,
   "confidence": 66,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.8,
   "playerId": "97419da1-c259-41a5-8503-2decd14e8a9a"
  },
  {
   "name": "Eleni Leone",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 6,
   "losses": 5,
   "pointsWon": 207,
   "totalPointsAgainst": 193,
   "mixedWins": 3,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 54.5,
   "diff": 14,
   "ppg": 18.8,
   "leagueRank": 150,
   "rating": 0,
   "ratingGames": 11,
   "confidence": 66,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0.1,
   "playerId": "2e5dc033-4c92-4dbf-b52a-5e29efc8d009"
  },
  {
   "name": "David Mcdonough",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 6,
   "losses": 5,
   "pointsWon": 206,
   "totalPointsAgainst": 198,
   "mixedWins": 3,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 54.5,
   "diff": 8,
   "ppg": 18.7,
   "leagueRank": 194,
   "rating": 1.3,
   "ratingGames": 11,
   "confidence": 68,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.2,
   "playerId": "7fc31e7b-bf19-43f2-a876-728d72287383"
  },
  {
   "name": "Tom Dominczyk",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 6,
   "losses": 5,
   "pointsWon": 211,
   "totalPointsAgainst": 203,
   "mixedWins": 3,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 54.5,
   "diff": 8,
   "ppg": 19.2,
   "leagueRank": 148,
   "rating": 0.1,
   "ratingGames": 11,
   "confidence": 67,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.1,
   "playerId": "9beb7596-d6b9-41aa-ab94-66d16839c1f5"
  },
  {
   "name": "Petra Jones",
   "gender": "Female",
   "team": "PKLD",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 6,
   "losses": 5,
   "pointsWon": 187,
   "totalPointsAgainst": 204,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 54.5,
   "diff": -17,
   "ppg": 17,
   "leagueRank": 207,
   "rating": 0.3,
   "ratingGames": 11,
   "confidence": 65,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.7,
   "playerId": "fae801e4-0589-4d19-a58b-2c4d3586299a"
  },
  {
   "name": "Erica Ruggieri",
   "gender": "Female",
   "team": "Life Time Red Bank",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 7,
   "losses": 6,
   "pointsWon": 243,
   "totalPointsAgainst": 224,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 53.8,
   "diff": 19,
   "ppg": 18.7,
   "leagueRank": 152,
   "rating": 0.2,
   "ratingGames": 13,
   "confidence": 69,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.6,
   "playerId": "c9070b8b-ce6e-46e7-a724-bd168579c596"
  },
  {
   "name": "Elaine Aquilone",
   "gender": "Female",
   "team": "Life Time Red Bank",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 7,
   "losses": 6,
   "pointsWon": 243,
   "totalPointsAgainst": 226,
   "mixedWins": 4,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 53.8,
   "diff": 17,
   "ppg": 18.7,
   "leagueRank": 153,
   "rating": -0.4,
   "ratingGames": 13,
   "confidence": 69,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -0.3,
   "playerId": "07b5c571-951d-446b-86d8-63c1c406bf3c"
  },
  {
   "name": "Steve Nuguid",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 7,
   "losses": 6,
   "pointsWon": 251,
   "totalPointsAgainst": 239,
   "mixedWins": 3,
   "mixedLosses": 5,
   "genderWins": 4,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 53.8,
   "diff": 12,
   "ppg": 19.3,
   "leagueRank": 166,
   "rating": -1.7,
   "ratingGames": 13,
   "confidence": 70,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -1.1,
   "playerId": "761a4cfd-197b-4887-b9d8-ec32a9a7cf10"
  },
  {
   "name": "Ken Gross",
   "gender": "Male",
   "team": "Mercer Bucks",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 7,
   "losses": 6,
   "pointsWon": 235,
   "totalPointsAgainst": 227,
   "mixedWins": 3,
   "mixedLosses": 5,
   "genderWins": 4,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 53.8,
   "diff": 8,
   "ppg": 18.1,
   "leagueRank": 173,
   "rating": -0.4,
   "ratingGames": 13,
   "confidence": 69,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.6,
   "playerId": "f71dc5e5-ec39-4753-9b37-0c23c8848953"
  },
  {
   "name": "Cindy Rossine",
   "gender": "Female",
   "team": "Colts Neck Racquet Club",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 7,
   "losses": 6,
   "pointsWon": 245,
   "totalPointsAgainst": 242,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 53.8,
   "diff": 3,
   "ppg": 18.8,
   "leagueRank": 156,
   "rating": 0.4,
   "ratingGames": 13,
   "confidence": 70,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": -0.2,
   "playerId": "c26c3257-4a5f-47e7-80cb-5eef4fe2868c"
  },
  {
   "name": "Bobbi Rentko",
   "gender": "Female",
   "team": "PKLD",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 7,
   "losses": 6,
   "pointsWon": 236,
   "totalPointsAgainst": 237,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 53.8,
   "diff": -1,
   "ppg": 18.2,
   "leagueRank": 174,
   "rating": 0.1,
   "ratingGames": 13,
   "confidence": 69,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.7,
   "playerId": "66469f12-c5eb-4a44-97b6-c40c3fbbf89c"
  },
  {
   "name": "Brian Schartz",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 8,
   "losses": 7,
   "pointsWon": 281,
   "totalPointsAgainst": 263,
   "mixedWins": 4,
   "mixedLosses": 4,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 53.3,
   "diff": 18,
   "ppg": 18.7,
   "leagueRank": 165,
   "rating": 0.7,
   "ratingGames": 15,
   "confidence": 73,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.1,
   "playerId": "6d468ccd-ec39-47be-8f06-028c695af323"
  },
  {
   "name": "Donna Facconerusin",
   "gender": "Female",
   "team": "Life Time Red Bank",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 8,
   "losses": 7,
   "pointsWon": 282,
   "totalPointsAgainst": 276,
   "mixedWins": 3,
   "mixedLosses": 5,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 53.3,
   "diff": 6,
   "ppg": 18.8,
   "leagueRank": 178,
   "rating": -1.2,
   "ratingGames": 15,
   "confidence": 73,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.4,
   "playerId": "e81f3561-3e91-48aa-8430-f177ad30248b"
  },
  {
   "name": "Tracy Waffenfeld",
   "gender": "Male",
   "team": "Pickleball Palace Blue",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 9,
   "losses": 8,
   "pointsWon": 301,
   "totalPointsAgainst": 307,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 6,
   "genderLosses": 5,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 52.9,
   "diff": -6,
   "ppg": 17.7,
   "leagueRank": 200,
   "rating": -1.3,
   "ratingGames": 17,
   "confidence": 74,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.6,
   "playerId": "2bc6c3c4-805a-4584-bbb9-6185448a3298"
  },
  {
   "name": "Craig Rathjen",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 10,
   "losses": 9,
   "pointsWon": 345,
   "totalPointsAgainst": 364,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 5,
   "genderLosses": 7,
   "clutchWins": 6,
   "clutchLosses": 3,
   "winPct": 52.6,
   "diff": -19,
   "ppg": 18.2,
   "leagueRank": 191,
   "rating": 0.6,
   "ratingGames": 19,
   "confidence": 73,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 1.1,
   "playerId": "51197be0-3fa1-4888-b0be-df5af704e8a4"
  },
  {
   "name": "Farzad Shadzik",
   "gender": "Male",
   "team": "Mercer Bucks",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 11,
   "losses": 10,
   "pointsWon": 382,
   "totalPointsAgainst": 349,
   "mixedWins": 5,
   "mixedLosses": 4,
   "genderWins": 6,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 52.4,
   "diff": 33,
   "ppg": 18.2,
   "leagueRank": 159,
   "rating": 1.4,
   "ratingGames": 21,
   "confidence": 78,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -0.2,
   "playerId": "f7e6727a-13ba-4c66-b148-a2f294ff640e"
  },
  {
   "name": "Lisa Angelini",
   "gender": "Female",
   "team": "Mercer Bucks",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 11,
   "losses": 10,
   "pointsWon": 397,
   "totalPointsAgainst": 384,
   "mixedWins": 7,
   "mixedLosses": 5,
   "genderWins": 4,
   "genderLosses": 5,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 52.4,
   "diff": 13,
   "ppg": 18.9,
   "leagueRank": 168,
   "rating": -0.2,
   "ratingGames": 21,
   "confidence": 78,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.3,
   "playerId": "b79cef1c-cecc-48d4-9b14-4505bca1cce9"
  },
  {
   "name": "Audrey Brisson",
   "gender": "Female",
   "team": "Jersey Devil",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 11,
   "losses": 10,
   "pointsWon": 394,
   "totalPointsAgainst": 385,
   "mixedWins": 7,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 7,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 52.4,
   "diff": 9,
   "ppg": 18.8,
   "leagueRank": 158,
   "rating": 1.5,
   "ratingGames": 21,
   "confidence": 78,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 1.1,
   "playerId": "1bec31ec-6396-4b0a-826c-831ae5df347e"
  },
  {
   "name": "Chuck Silvester",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 12,
   "losses": 12,
   "pointsWon": 459,
   "totalPointsAgainst": 442,
   "mixedWins": 7,
   "mixedLosses": 4,
   "genderWins": 5,
   "genderLosses": 8,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 50,
   "diff": 17,
   "ppg": 19.1,
   "leagueRank": 161,
   "rating": 0.9,
   "ratingGames": 24,
   "confidence": 80,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.4,
   "playerId": "3911a60f-cab7-4b28-9ba0-244c000980ba"
  },
  {
   "name": "Jerry Margulies",
   "gender": "Male",
   "team": "Mercer Bucks",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 5,
   "losses": 5,
   "pointsWon": 192,
   "totalPointsAgainst": 176,
   "mixedWins": 2,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 50,
   "diff": 16,
   "ppg": 19.2,
   "leagueRank": 151,
   "rating": 0.5,
   "ratingGames": 10,
   "confidence": 64,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.5,
   "playerId": "e5bf1611-3d03-4600-9e72-301e91a9db18"
  },
  {
   "name": "Harihar Chudamani",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 8,
   "losses": 8,
   "pointsWon": 300,
   "totalPointsAgainst": 286,
   "mixedWins": 4,
   "mixedLosses": 4,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 50,
   "diff": 14,
   "ppg": 18.8,
   "leagueRank": 185,
   "rating": -0.5,
   "ratingGames": 16,
   "confidence": 75,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.5,
   "playerId": "06b13278-0d0c-40c5-b2f2-acd50b8bfc36"
  },
  {
   "name": "Michael Schuller",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 8,
   "losses": 8,
   "pointsWon": 299,
   "totalPointsAgainst": 286,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 50,
   "diff": 13,
   "ppg": 18.7,
   "leagueRank": 183,
   "rating": -0.4,
   "ratingGames": 16,
   "confidence": 74,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.1,
   "playerId": "19f146a7-cb7b-40cf-aed9-98bf25a18aec"
  },
  {
   "name": "Rafael Moreano",
   "gender": "Male",
   "team": "Pickleball Palace Black",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 2,
   "losses": 2,
   "pointsWon": 80,
   "totalPointsAgainst": 67,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": 13,
   "ppg": 20,
   "leagueRank": 264,
   "rating": 1.1,
   "ratingGames": 4,
   "confidence": 44,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.4,
   "playerId": "f919968b-e6a7-4ea2-9d1d-049898bf39f4"
  },
  {
   "name": "Oleg Goldinberg",
   "gender": "Male",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 118,
   "totalPointsAgainst": 106,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": 12,
   "ppg": 19.7,
   "leagueRank": 267,
   "rating": 1.3,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.6,
   "playerId": "e1133097-a8a6-4076-be0f-d5024f47ccc1"
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
   "leagueRank": 280,
   "rating": -0.1,
   "ratingGames": 6,
   "confidence": 47,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.9,
   "playerId": "e94c3831-b63f-4858-a2a1-94c0c10ee4e7"
  },
  {
   "name": "Matt Stone",
   "gender": "Male",
   "team": "Pickleball Palace Blue",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 120,
   "totalPointsAgainst": 109,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 50,
   "diff": 11,
   "ppg": 20,
   "leagueRank": 259,
   "rating": 2.5,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 1.5,
   "playerId": "f32137a7-e7f0-4891-8691-81732f3db7f5"
  },
  {
   "name": "Lingshan Hsieh",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 24,
   "wins": 12,
   "losses": 12,
   "pointsWon": 427,
   "totalPointsAgainst": 419,
   "mixedWins": 8,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 9,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 50,
   "diff": 8,
   "ppg": 17.8,
   "leagueRank": 186,
   "rating": 1.3,
   "ratingGames": 24,
   "confidence": 80,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.5,
   "playerId": "7fe3ca78-6219-4723-a8ad-49bce55b0238"
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
   "winPct": 50,
   "diff": 8,
   "ppg": 19,
   "leagueRank": 288,
   "rating": 0,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.7,
   "playerId": "2fdf723b-616f-4e34-9f50-fe833ff48f68"
  },
  {
   "name": "Mark Skolnik",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 9,
   "losses": 9,
   "pointsWon": 348,
   "totalPointsAgainst": 341,
   "mixedWins": 6,
   "mixedLosses": 5,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 50,
   "diff": 7,
   "ppg": 19.3,
   "leagueRank": 163,
   "rating": 0.8,
   "ratingGames": 18,
   "confidence": 76,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.7,
   "playerId": "b2f66825-4c89-450c-ae68-db22d0418c80"
  },
  {
   "name": "Martyn Babitz",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 8,
   "losses": 8,
   "pointsWon": 298,
   "totalPointsAgainst": 293,
   "mixedWins": 3,
   "mixedLosses": 5,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": 5,
   "ppg": 18.6,
   "leagueRank": 179,
   "rating": 0.5,
   "ratingGames": 16,
   "confidence": 73,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.3,
   "playerId": "cf328b8f-9626-4bdf-8069-da6d0f8b17e9"
  },
  {
   "name": "Cindy Suter",
   "gender": "Female",
   "team": "Mercer Bucks",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 6,
   "losses": 6,
   "pointsWon": 226,
   "totalPointsAgainst": 221,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": 5,
   "ppg": 18.8,
   "leagueRank": 181,
   "rating": -0.3,
   "ratingGames": 12,
   "confidence": 66,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.4,
   "playerId": "e02b78d9-59ab-45d4-b11c-887d749a7da6"
  },
  {
   "name": "Kim Biddle",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 150,
   "totalPointsAgainst": 145,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": 5,
   "ppg": 18.8,
   "leagueRank": 282,
   "rating": -2.2,
   "ratingGames": 8,
   "confidence": 57,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -1.6,
   "playerId": "f37c6f74-78f5-431a-be59-e1dae5fcf37c"
  },
  {
   "name": "Joanna Zhang",
   "gender": "Female",
   "team": "Picklr Fair Lawn",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 115,
   "totalPointsAgainst": 111,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": 4,
   "ppg": 19.2,
   "leagueRank": 296,
   "rating": -0.4,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": 0.2,
   "playerId": "b0c386a2-b875-4432-b5ef-e248a87d85dc"
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
   "winPct": 50,
   "diff": 4,
   "ppg": 19.8,
   "leagueRank": 310,
   "rating": 0.8,
   "ratingGames": 4,
   "confidence": 44,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 1,
   "playerId": "ea77bb43-8f4b-49df-8931-43c6cc9729a2"
  },
  {
   "name": "Ken Bienkowski",
   "gender": "Male",
   "team": "Pickleball Palace Black",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 115,
   "totalPointsAgainst": 112,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": 3,
   "ppg": 19.2,
   "leagueRank": 228,
   "rating": -1.4,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.9,
   "playerId": "5cc85746-e4a6-432e-bfe5-8166f02867ce"
  },
  {
   "name": "Keith Seager",
   "gender": "Male",
   "team": "One Love",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 105,
   "totalPointsAgainst": 103,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 50,
   "diff": 2,
   "ppg": 17.5,
   "leagueRank": 304,
   "rating": 1.4,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 1.5,
   "playerId": "3beead1c-6ded-4df1-9c68-1687ff5c29e8"
  },
  {
   "name": "Mandy Collins",
   "gender": "Female",
   "team": "Pickleball Palace Blue",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 110,
   "totalPointsAgainst": 109,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": 1,
   "ppg": 18.3,
   "leagueRank": 295,
   "rating": 1.2,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.9,
   "playerId": "2a59237c-117d-426c-b266-1b968c1a56c0"
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
   "winPct": 50,
   "diff": 1,
   "ppg": 19,
   "leagueRank": 299,
   "rating": -0.3,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0,
   "playerId": "cb1a0db3-dc7b-4516-9269-3ccb10e4febf"
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
   "leagueRank": 328,
   "rating": -1,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.3,
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
   "leagueRank": 318,
   "rating": -1.2,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": 2,
   "strengthOfOpponents": 0.3,
   "playerId": "74697f0e-f479-4b6c-804f-fdc4719d8a39"
  },
  {
   "name": "Dave Darch",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 116,
   "totalPointsAgainst": 119,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": -3,
   "ppg": 19.3,
   "leagueRank": 222,
   "rating": 0.8,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 1.3,
   "playerId": "ec2ef0a6-432b-411c-ade1-9359c00587ba"
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
   "winPct": 50,
   "diff": -3,
   "ppg": 18.3,
   "leagueRank": 309,
   "rating": -0.2,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -0.3,
   "playerId": "442d80c7-8eaf-413b-b99b-7cdaddb08b7c"
  },
  {
   "name": "Gina Lavignera",
   "gender": "Female",
   "team": "Colts Neck Racquet Club",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 6,
   "losses": 6,
   "pointsWon": 217,
   "totalPointsAgainst": 222,
   "mixedWins": 2,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": -5,
   "ppg": 18.1,
   "leagueRank": 196,
   "rating": -0.1,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.2,
   "playerId": "a8f8cba7-d3be-4df0-8d9c-9608f102859a"
  },
  {
   "name": "Denise Stassi",
   "gender": "Female",
   "team": "Premiere Dinkers",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 114,
   "totalPointsAgainst": 120,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": -6,
   "ppg": 19,
   "leagueRank": 311,
   "rating": 0.3,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.9,
   "playerId": "a7a3b4ab-c0af-49d3-ae64-b784fc58d238"
  },
  {
   "name": "Sheung Tom",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 2,
   "losses": 2,
   "pointsWon": 71,
   "totalPointsAgainst": 80,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 50,
   "diff": -9,
   "ppg": 17.8,
   "leagueRank": 348,
   "rating": -0.5,
   "ratingGames": 4,
   "confidence": 41,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.7,
   "playerId": "2a7bc14d-1e84-4554-aeb4-00dd726c8f6a"
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
   "leagueRank": 345,
   "rating": -1.6,
   "ratingGames": 4,
   "confidence": 44,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.4,
   "playerId": "6d1eb271-9f12-4102-a818-e1c6e64048d2"
  },
  {
   "name": "Artemio Tuquero",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton Strikers",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 5,
   "losses": 5,
   "pointsWon": 181,
   "totalPointsAgainst": 191,
   "mixedWins": 2,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 50,
   "diff": -10,
   "ppg": 18.1,
   "leagueRank": 217,
   "rating": -1.4,
   "ratingGames": 10,
   "confidence": 64,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.6,
   "playerId": "38af77d4-eaa3-4189-8eb9-b137ea3cbecd"
  },
  {
   "name": "Wai Yiu",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 2,
   "losses": 2,
   "pointsWon": 68,
   "totalPointsAgainst": 79,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 50,
   "diff": -11,
   "ppg": 17,
   "leagueRank": 373,
   "rating": -1.5,
   "ratingGames": 4,
   "confidence": 43,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.2,
   "playerId": "77e46249-c354-488b-9939-8a5c21dbf8ab"
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
   "leagueRank": 378,
   "rating": -0.6,
   "ratingGames": 4,
   "confidence": 44,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.5,
   "playerId": "d4812653-0565-4e52-a63f-901d22ab86cf"
  },
  {
   "name": "Dan Amabile",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 6,
   "losses": 6,
   "pointsWon": 222,
   "totalPointsAgainst": 236,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": -14,
   "ppg": 18.5,
   "leagueRank": 187,
   "rating": 0.5,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.5,
   "playerId": "3d3123f8-a4db-460f-8df3-70e6271cacfa"
  },
  {
   "name": "Erick Matthijs",
   "gender": "Male",
   "team": "Colts Neck Racquet Club",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 2,
   "losses": 2,
   "pointsWon": 61,
   "totalPointsAgainst": 80,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 50,
   "diff": -19,
   "ppg": 15.3,
   "leagueRank": 390,
   "rating": -1.3,
   "ratingGames": 4,
   "confidence": 45,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": 0.2,
   "playerId": "10a021d2-07de-48ec-945d-c752499443a0"
  },
  {
   "name": "Barbara Hand",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 10,
   "losses": 11,
   "pointsWon": 363,
   "totalPointsAgainst": 358,
   "mixedWins": 5,
   "mixedLosses": 5,
   "genderWins": 5,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 47.6,
   "diff": 5,
   "ppg": 17.3,
   "leagueRank": 195,
   "rating": 2.3,
   "ratingGames": 21,
   "confidence": 79,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 1.1,
   "playerId": "a04312ab-d364-478d-8329-503d278a6824"
  },
  {
   "name": "Joseph Romagnolo",
   "gender": "Male",
   "team": "Premiere Dinkers",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 21,
   "wins": 10,
   "losses": 11,
   "pointsWon": 389,
   "totalPointsAgainst": 390,
   "mixedWins": 3,
   "mixedLosses": 8,
   "genderWins": 7,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 47.6,
   "diff": -1,
   "ppg": 18.5,
   "leagueRank": 201,
   "rating": -1.1,
   "ratingGames": 21,
   "confidence": 78,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.6,
   "playerId": "1972795c-9185-4d19-8352-6244573e3ca5"
  },
  {
   "name": "Frank Leccese",
   "gender": "Male",
   "team": "Colts Neck Racquet Club",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 10,
   "losses": 11,
   "pointsWon": 375,
   "totalPointsAgainst": 391,
   "mixedWins": 6,
   "mixedLosses": 5,
   "genderWins": 4,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 47.6,
   "diff": -16,
   "ppg": 17.9,
   "leagueRank": 213,
   "rating": -0.6,
   "ratingGames": 21,
   "confidence": 78,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0,
   "playerId": "3250f1d1-8527-44ee-9d87-114fa4183213"
  },
  {
   "name": "Mary Foster",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton Prime Time",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 21,
   "wins": 10,
   "losses": 11,
   "pointsWon": 374,
   "totalPointsAgainst": 393,
   "mixedWins": 5,
   "mixedLosses": 5,
   "genderWins": 5,
   "genderLosses": 6,
   "clutchWins": 5,
   "clutchLosses": 5,
   "winPct": 47.6,
   "diff": -19,
   "ppg": 17.8,
   "leagueRank": 206,
   "rating": 0.6,
   "ratingGames": 21,
   "confidence": 78,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.2,
   "playerId": "71b7fe55-42fb-4b59-a77c-c14d62384125"
  },
  {
   "name": "Fritz Jean-Brian",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton Prime Time",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 10,
   "losses": 11,
   "pointsWon": 367,
   "totalPointsAgainst": 390,
   "mixedWins": 7,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 7,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 47.6,
   "diff": -23,
   "ppg": 17.5,
   "leagueRank": 212,
   "rating": 1.4,
   "ratingGames": 21,
   "confidence": 78,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0.6,
   "playerId": "cf7d6ea4-8472-467c-9685-7ef589f5f2e6"
  },
  {
   "name": "Chris Hannah",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 9,
   "losses": 10,
   "pointsWon": 346,
   "totalPointsAgainst": 343,
   "mixedWins": 4,
   "mixedLosses": 5,
   "genderWins": 5,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 47.4,
   "diff": 3,
   "ppg": 18.2,
   "leagueRank": 202,
   "rating": -0.6,
   "ratingGames": 19,
   "confidence": 75,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.3,
   "playerId": "4be457d0-c765-45af-b64d-da383c437a53"
  },
  {
   "name": "Karen Rosenberg",
   "gender": "Female",
   "team": "PKLD",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 19,
   "wins": 9,
   "losses": 10,
   "pointsWon": 350,
   "totalPointsAgainst": 367,
   "mixedWins": 5,
   "mixedLosses": 5,
   "genderWins": 4,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 47.4,
   "diff": -17,
   "ppg": 18.4,
   "leagueRank": 218,
   "rating": -2,
   "ratingGames": 19,
   "confidence": 77,
   "strengthOfPartners": 2,
   "strengthOfOpponents": 0.3,
   "playerId": "17fc1097-95ae-4095-a83d-ca9124bef274"
  },
  {
   "name": "Antoinette Mccormick",
   "gender": "Female",
   "team": "PKLD",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 8,
   "losses": 9,
   "pointsWon": 306,
   "totalPointsAgainst": 290,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 4,
   "winPct": 47.1,
   "diff": 16,
   "ppg": 18,
   "leagueRank": 190,
   "rating": 0,
   "ratingGames": 17,
   "confidence": 74,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.1,
   "playerId": "71a2741e-56bc-4b1f-ad9a-13ce0a7ca9b8"
  },
  {
   "name": "Marita Dow",
   "gender": "Female",
   "team": "PickleRage Union County",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 8,
   "losses": 9,
   "pointsWon": 310,
   "totalPointsAgainst": 297,
   "mixedWins": 5,
   "mixedLosses": 5,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 47.1,
   "diff": 13,
   "ppg": 18.2,
   "leagueRank": 203,
   "rating": -1.2,
   "ratingGames": 17,
   "confidence": 75,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.8,
   "playerId": "9de9a96a-2ff8-49eb-b59f-1e898a7c07de"
  },
  {
   "name": "Irish Lee",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 8,
   "losses": 9,
   "pointsWon": 309,
   "totalPointsAgainst": 305,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 47.1,
   "diff": 4,
   "ppg": 18.2,
   "leagueRank": 205,
   "rating": -0.7,
   "ratingGames": 17,
   "confidence": 74,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.2,
   "playerId": "1b93f56f-c9be-4d20-b0a4-e155b558a11c"
  },
  {
   "name": "Erik Harrison",
   "gender": "Male",
   "team": "One Love",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 7,
   "losses": 8,
   "pointsWon": 273,
   "totalPointsAgainst": 290,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 46.7,
   "diff": -17,
   "ppg": 18.2,
   "leagueRank": 219,
   "rating": -0.9,
   "ratingGames": 15,
   "confidence": 72,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.4,
   "playerId": "f988ea5f-06b9-477c-88ee-1563d1c8ecfa"
  },
  {
   "name": "Xiaojun Yuan",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 11,
   "losses": 13,
   "pointsWon": 422,
   "totalPointsAgainst": 434,
   "mixedWins": 6,
   "mixedLosses": 6,
   "genderWins": 5,
   "genderLosses": 7,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 45.8,
   "diff": -12,
   "ppg": 17.6,
   "leagueRank": 211,
   "rating": -0.2,
   "ratingGames": 24,
   "confidence": 80,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.7,
   "playerId": "8f21d0e1-3bff-42d5-a59a-f8240b2b7eb2"
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
   "leagueRank": 170,
   "rating": 1.1,
   "ratingGames": 11,
   "confidence": 67,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.3,
   "playerId": "07e276d3-773e-4a62-865e-4248969ec4d3"
  },
  {
   "name": "Patricia Cordts",
   "gender": "Female",
   "team": "Picklr Fair Lawn",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 5,
   "losses": 6,
   "pointsWon": 193,
   "totalPointsAgainst": 191,
   "mixedWins": 1,
   "mixedLosses": 4,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 45.5,
   "diff": 2,
   "ppg": 17.5,
   "leagueRank": 256,
   "rating": 0.4,
   "ratingGames": 11,
   "confidence": 67,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.3,
   "playerId": "23a140de-aca7-44ce-9843-519f43a392e3"
  },
  {
   "name": "Margo Langer",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 5,
   "losses": 6,
   "pointsWon": 211,
   "totalPointsAgainst": 210,
   "mixedWins": 3,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 45.5,
   "diff": 1,
   "ppg": 19.2,
   "leagueRank": 192,
   "rating": -0.4,
   "ratingGames": 11,
   "confidence": 66,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.1,
   "playerId": "0ac4f132-2c5c-4a1b-92a6-350f1952aa75"
  },
  {
   "name": "Wen Chang",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 10,
   "losses": 12,
   "pointsWon": 379,
   "totalPointsAgainst": 390,
   "mixedWins": 4,
   "mixedLosses": 7,
   "genderWins": 6,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 45.5,
   "diff": -11,
   "ppg": 17.2,
   "leagueRank": 216,
   "rating": 1,
   "ratingGames": 22,
   "confidence": 79,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.6,
   "playerId": "9a0d5103-b8d7-4b5b-a890-59a6ec5fb115"
  },
  {
   "name": "Eldon Carandan",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 8,
   "losses": 10,
   "pointsWon": 333,
   "totalPointsAgainst": 336,
   "mixedWins": 4,
   "mixedLosses": 4,
   "genderWins": 4,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 44.4,
   "diff": -3,
   "ppg": 18.5,
   "leagueRank": 209,
   "rating": 0,
   "ratingGames": 18,
   "confidence": 75,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.6,
   "playerId": "888253bb-161e-4029-9170-1f7002abdbee"
  },
  {
   "name": "Geoffrey Baird",
   "gender": "Male",
   "team": "Pickleball Palace Blue",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 8,
   "losses": 10,
   "pointsWon": 331,
   "totalPointsAgainst": 335,
   "mixedWins": 3,
   "mixedLosses": 7,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 44.4,
   "diff": -4,
   "ppg": 18.4,
   "leagueRank": 214,
   "rating": -0.2,
   "ratingGames": 18,
   "confidence": 77,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.5,
   "playerId": "98d6ec7e-e3ac-47ce-a2a2-a000399c9e4f"
  },
  {
   "name": "Jessie Fang",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 8,
   "losses": 10,
   "pointsWon": 311,
   "totalPointsAgainst": 325,
   "mixedWins": 5,
   "mixedLosses": 6,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 44.4,
   "diff": -14,
   "ppg": 17.3,
   "leagueRank": 237,
   "rating": -1.6,
   "ratingGames": 18,
   "confidence": 77,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.2,
   "playerId": "fa9c688a-62ba-4bd3-806a-b47b05235128"
  },
  {
   "name": "Luz Bonner",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton Prime Time",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 18,
   "wins": 8,
   "losses": 10,
   "pointsWon": 300,
   "totalPointsAgainst": 340,
   "mixedWins": 5,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 44.4,
   "diff": -40,
   "ppg": 16.7,
   "leagueRank": 248,
   "rating": -1.4,
   "ratingGames": 18,
   "confidence": 76,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.2,
   "playerId": "ef6c941f-29da-4723-95a8-63a508079685"
  },
  {
   "name": "Jessica Ren",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 7,
   "losses": 9,
   "pointsWon": 274,
   "totalPointsAgainst": 296,
   "mixedWins": 4,
   "mixedLosses": 5,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 43.8,
   "diff": -22,
   "ppg": 17.1,
   "leagueRank": 240,
   "rating": -0.9,
   "ratingGames": 16,
   "confidence": 75,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.1,
   "playerId": "5fc95fcb-4ed3-47b9-be7e-0ce9498dc977"
  },
  {
   "name": "Dennis Tenorio",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 10,
   "losses": 13,
   "pointsWon": 411,
   "totalPointsAgainst": 427,
   "mixedWins": 9,
   "mixedLosses": 6,
   "genderWins": 1,
   "genderLosses": 7,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 43.5,
   "diff": -16,
   "ppg": 17.9,
   "leagueRank": 227,
   "rating": -1.5,
   "ratingGames": 23,
   "confidence": 80,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.1,
   "playerId": "2563bcb0-eff4-4311-8e03-9a21b61691a0"
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
   "winPct": 42.9,
   "diff": 3,
   "ppg": 19,
   "leagueRank": 302,
   "rating": 1.2,
   "ratingGames": 7,
   "confidence": 56,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": 1.6,
   "playerId": "1a37dcd5-8896-4e3e-8219-898b6a418e86"
  },
  {
   "name": "Jimbo Jimenez",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton Prime Time",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 130,
   "totalPointsAgainst": 137,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 42.9,
   "diff": -7,
   "ppg": 18.6,
   "leagueRank": 286,
   "rating": 1.3,
   "ratingGames": 7,
   "confidence": 57,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 1.4,
   "playerId": "60a4c469-c1b6-4d90-b6e9-5dfdbde95aab"
  },
  {
   "name": "Freddy Alicea",
   "gender": "Male",
   "team": "PKLD",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 8,
   "losses": 11,
   "pointsWon": 349,
   "totalPointsAgainst": 361,
   "mixedWins": 5,
   "mixedLosses": 5,
   "genderWins": 3,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 42.1,
   "diff": -12,
   "ppg": 18.4,
   "leagueRank": 221,
   "rating": -0.7,
   "ratingGames": 19,
   "confidence": 75,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0,
   "playerId": "66505a6b-2dfe-4454-b71b-e3fdd2b7a692"
  },
  {
   "name": "Frances Smith",
   "gender": "Female",
   "team": "Pickleball Palace Blue",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 5,
   "losses": 7,
   "pointsWon": 215,
   "totalPointsAgainst": 224,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 41.7,
   "diff": -9,
   "ppg": 17.9,
   "leagueRank": 224,
   "rating": 0.2,
   "ratingGames": 12,
   "confidence": 67,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.7,
   "playerId": "dede68c9-f6a4-40b6-8a2c-2eca456d4151"
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
   "leagueRank": 250,
   "rating": -1.6,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.2,
   "playerId": "7a41c8d6-ca5f-4bc5-8299-9e63b5ce97cd"
  },
  {
   "name": "Derik Lochtenbergh",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 10,
   "losses": 14,
   "pointsWon": 435,
   "totalPointsAgainst": 453,
   "mixedWins": 5,
   "mixedLosses": 7,
   "genderWins": 5,
   "genderLosses": 7,
   "clutchWins": 4,
   "clutchLosses": 6,
   "winPct": 41.7,
   "diff": -18,
   "ppg": 18.1,
   "leagueRank": 215,
   "rating": 1.9,
   "ratingGames": 24,
   "confidence": 78,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 1.2,
   "playerId": "cf71e3c3-dee4-401c-a276-afd72a53dc5a"
  },
  {
   "name": "Jonathan Gross",
   "gender": "Male",
   "team": "Colts Neck Racquet Club",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 5,
   "losses": 7,
   "pointsWon": 209,
   "totalPointsAgainst": 233,
   "mixedWins": 1,
   "mixedLosses": 4,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 41.7,
   "diff": -24,
   "ppg": 17.4,
   "leagueRank": 255,
   "rating": -1.7,
   "ratingGames": 12,
   "confidence": 67,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.3,
   "playerId": "549f3426-e486-41a7-ac30-9666c61da3c5"
  },
  {
   "name": "Karen Chin",
   "gender": "Female",
   "team": "Premiere Dinkers",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 9,
   "losses": 13,
   "pointsWon": 400,
   "totalPointsAgainst": 419,
   "mixedWins": 6,
   "mixedLosses": 6,
   "genderWins": 3,
   "genderLosses": 7,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 40.9,
   "diff": -19,
   "ppg": 18.2,
   "leagueRank": 234,
   "rating": -0.4,
   "ratingGames": 22,
   "confidence": 80,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.1,
   "playerId": "0685c1ca-d8fb-4a1d-a039-8be856ce5c56"
  },
  {
   "name": "Frank Iacono",
   "gender": "Male",
   "team": "Colts Neck Racquet Club",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 9,
   "losses": 13,
   "pointsWon": 375,
   "totalPointsAgainst": 402,
   "mixedWins": 5,
   "mixedLosses": 7,
   "genderWins": 4,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 5,
   "winPct": 40.9,
   "diff": -27,
   "ppg": 17,
   "leagueRank": 239,
   "rating": 0.2,
   "ratingGames": 22,
   "confidence": 79,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.4,
   "playerId": "2cccc005-6a1a-4566-98be-15805e750e49"
  },
  {
   "name": "Terri Marxen",
   "gender": "Female",
   "team": "Pickleball Palace Black",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 89,
   "totalPointsAgainst": 86,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 40,
   "diff": 3,
   "ppg": 17.8,
   "leagueRank": 313,
   "rating": -0.4,
   "ratingGames": 5,
   "confidence": 49,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0,
   "playerId": "902886e7-a7e2-4ed6-a560-edbc523012fd"
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
   "winPct": 40,
   "diff": 1,
   "ppg": 17.6,
   "leagueRank": 346,
   "rating": 1.6,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 1.6,
   "playerId": "415eebaa-9058-4ccd-9b55-1641fe744bed"
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
   "winPct": 40,
   "diff": -2,
   "ppg": 17.2,
   "leagueRank": 360,
   "rating": 1.3,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 1.2,
   "playerId": "daa313b5-4017-4281-9fb9-b7baabdb5d30"
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
   "leagueRank": 370,
   "rating": -1.2,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.7,
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
   "leagueRank": 371,
   "rating": -2,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.2,
   "playerId": "79f3d36c-20e8-4e22-bf51-faf37d039ac4"
  },
  {
   "name": "Mark Zamkoff",
   "gender": "Male",
   "team": "Life Time Red Bank",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 7,
   "losses": 11,
   "pointsWon": 321,
   "totalPointsAgainst": 340,
   "mixedWins": 3,
   "mixedLosses": 6,
   "genderWins": 4,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 38.9,
   "diff": -19,
   "ppg": 17.8,
   "leagueRank": 253,
   "rating": -2.2,
   "ratingGames": 18,
   "confidence": 76,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.3,
   "playerId": "4e4deaa6-3de9-450b-bfb2-1d86752d92ab"
  },
  {
   "name": "Manuela Caiati",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 7,
   "losses": 11,
   "pointsWon": 303,
   "totalPointsAgainst": 344,
   "mixedWins": 3,
   "mixedLosses": 6,
   "genderWins": 4,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 38.9,
   "diff": -41,
   "ppg": 16.8,
   "leagueRank": 261,
   "rating": 0.4,
   "ratingGames": 18,
   "confidence": 75,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 0.7,
   "playerId": "055f3bbb-3d19-4709-b29e-0e4ad54ba0cb"
  },
  {
   "name": "Sam Doctor",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 5,
   "losses": 8,
   "pointsWon": 224,
   "totalPointsAgainst": 235,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 38.5,
   "diff": -11,
   "ppg": 17.2,
   "leagueRank": 236,
   "rating": 1.4,
   "ratingGames": 13,
   "confidence": 67,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 1,
   "playerId": "3070f4fd-b54d-4aac-81e9-72ffc24c2845"
  },
  {
   "name": "Heidi Weinroth",
   "gender": "Female",
   "team": "Jersey Devil",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 5,
   "losses": 8,
   "pointsWon": 242,
   "totalPointsAgainst": 255,
   "mixedWins": 4,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 7,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 38.5,
   "diff": -13,
   "ppg": 18.6,
   "leagueRank": 229,
   "rating": 0.6,
   "ratingGames": 13,
   "confidence": 69,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 1.5,
   "playerId": "5ccea74f-290a-4648-b0fd-2a8b7d9fc6d2"
  },
  {
   "name": "Nghia Bui",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 5,
   "losses": 8,
   "pointsWon": 242,
   "totalPointsAgainst": 255,
   "mixedWins": 1,
   "mixedLosses": 5,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 5,
   "winPct": 38.5,
   "diff": -13,
   "ppg": 18.6,
   "leagueRank": 220,
   "rating": -0.2,
   "ratingGames": 13,
   "confidence": 70,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.7,
   "playerId": "c8d634ab-9452-4ea2-8b66-20db1aca3a43"
  },
  {
   "name": "Tami Mohney",
   "gender": "Female",
   "team": "Mercer Bucks",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 13,
   "wins": 5,
   "losses": 8,
   "pointsWon": 225,
   "totalPointsAgainst": 244,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 38.5,
   "diff": -19,
   "ppg": 17.3,
   "leagueRank": 258,
   "rating": 0,
   "ratingGames": 13,
   "confidence": 69,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.7,
   "playerId": "639b104c-36e6-48d0-9948-b17158f92030"
  },
  {
   "name": "Lori Frank",
   "gender": "Female",
   "team": "Jersey Devil",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 5,
   "losses": 8,
   "pointsWon": 230,
   "totalPointsAgainst": 249,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 38.5,
   "diff": -19,
   "ppg": 17.7,
   "leagueRank": 247,
   "rating": 0.3,
   "ratingGames": 13,
   "confidence": 69,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 1.4,
   "playerId": "8e51fde0-5ddd-4e6e-b2f6-49cf79cb8030"
  },
  {
   "name": "Risa Korzekwinski",
   "gender": "Female",
   "team": "Premiere Dinkers",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 5,
   "losses": 8,
   "pointsWon": 236,
   "totalPointsAgainst": 260,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 38.5,
   "diff": -24,
   "ppg": 18.2,
   "leagueRank": 254,
   "rating": -0.6,
   "ratingGames": 13,
   "confidence": 70,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.3,
   "playerId": "f033c90c-8093-4e48-a42e-3277a14adbc3"
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
   "winPct": 38.5,
   "diff": -32,
   "ppg": 17.1,
   "leagueRank": 260,
   "rating": 0.4,
   "ratingGames": 13,
   "confidence": 70,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 1.6,
   "playerId": "53a2fafe-37e7-4673-ae8d-a6c36cf06003"
  },
  {
   "name": "David Wisch",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 16,
   "wins": 6,
   "losses": 10,
   "pointsWon": 297,
   "totalPointsAgainst": 301,
   "mixedWins": 1,
   "mixedLosses": 7,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 37.5,
   "diff": -4,
   "ppg": 18.6,
   "leagueRank": 231,
   "rating": 0.1,
   "ratingGames": 16,
   "confidence": 74,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.6,
   "playerId": "9e3072fb-dce5-48d8-b320-0fe5cb411d0f"
  },
  {
   "name": "Patrick Neary",
   "gender": "Male",
   "team": "Forward",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 141,
   "totalPointsAgainst": 147,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 37.5,
   "diff": -6,
   "ppg": 17.6,
   "leagueRank": 330,
   "rating": -1.9,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": -0.2,
   "playerId": "977152d9-389c-4ac9-8b39-59308f2194ec"
  },
  {
   "name": "Dave Slomeana",
   "gender": "Male",
   "team": "Forward",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 135,
   "totalPointsAgainst": 150,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 37.5,
   "diff": -15,
   "ppg": 16.9,
   "leagueRank": 341,
   "rating": -2.6,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.5,
   "playerId": "a347fd69-663d-4ab6-bec8-f8ff046ecb97"
  },
  {
   "name": "Sherry Sili",
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
   "winPct": 37.5,
   "diff": -30,
   "ppg": 16,
   "leagueRank": 305,
   "rating": -0.5,
   "ratingGames": 8,
   "confidence": 55,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.9,
   "playerId": "e3874889-50a3-472f-aada-20f41ce1bc3f"
  },
  {
   "name": "Adam Chu",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 124,
   "totalPointsAgainst": 160,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 37.5,
   "diff": -36,
   "ppg": 15.5,
   "leagueRank": 316,
   "rating": -0.6,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 1.4,
   "playerId": "504f0d97-3ecb-4f0c-a624-e67043196f8b"
  },
  {
   "name": "Amy Santopietro",
   "gender": "Female",
   "team": "One Love",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 6,
   "losses": 10,
   "pointsWon": 268,
   "totalPointsAgainst": 308,
   "mixedWins": 4,
   "mixedLosses": 7,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 37.5,
   "diff": -40,
   "ppg": 16.8,
   "leagueRank": 276,
   "rating": -1.2,
   "ratingGames": 16,
   "confidence": 73,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.3,
   "playerId": "894ef6a1-ee5a-4729-bee3-f11f57c22e16"
  },
  {
   "name": "Kimberly Kusumoto",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 6,
   "losses": 10,
   "pointsWon": 248,
   "totalPointsAgainst": 317,
   "mixedWins": 3,
   "mixedLosses": 5,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 4,
   "clutchLosses": 0,
   "winPct": 37.5,
   "diff": -69,
   "ppg": 15.5,
   "leagueRank": 315,
   "rating": -3.5,
   "ratingGames": 16,
   "confidence": 74,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.3,
   "playerId": "5345c73e-518d-4066-8a0a-3c6c5c80de56"
  },
  {
   "name": "Deirdre Monahan",
   "gender": "Female",
   "team": "One Love",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 4,
   "losses": 7,
   "pointsWon": 196,
   "totalPointsAgainst": 210,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 4,
   "winPct": 36.4,
   "diff": -14,
   "ppg": 17.8,
   "leagueRank": 244,
   "rating": 0.5,
   "ratingGames": 11,
   "confidence": 65,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.6,
   "playerId": "6e94f49e-e75e-4061-8ca2-967f52f4eb07"
  },
  {
   "name": "Judy Williamson",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton Prime Time",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 4,
   "losses": 7,
   "pointsWon": 199,
   "totalPointsAgainst": 215,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 36.4,
   "diff": -16,
   "ppg": 18.1,
   "leagueRank": 242,
   "rating": -0.2,
   "ratingGames": 11,
   "confidence": 66,
   "strengthOfPartners": -2.1,
   "strengthOfOpponents": -0.5,
   "playerId": "e646e3ee-5e39-48c7-933f-e567af0de814"
  },
  {
   "name": "Bill Vit",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 4,
   "losses": 7,
   "pointsWon": 193,
   "totalPointsAgainst": 214,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 36.4,
   "diff": -21,
   "ppg": 17.5,
   "leagueRank": 249,
   "rating": 0.9,
   "ratingGames": 11,
   "confidence": 65,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0.8,
   "playerId": "1993029d-4e84-416d-a8aa-48fde81e5ad9"
  },
  {
   "name": "Christine Fletcher",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 4,
   "losses": 7,
   "pointsWon": 189,
   "totalPointsAgainst": 211,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 36.4,
   "diff": -22,
   "ppg": 17.2,
   "leagueRank": 298,
   "rating": -0.5,
   "ratingGames": 11,
   "confidence": 67,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.3,
   "playerId": "85b6cf96-6ca6-460f-924d-a70bce3ea487"
  },
  {
   "name": "Josephine O'Neill",
   "gender": "Female",
   "team": "Dill Dinkers Newport",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 11,
   "wins": 4,
   "losses": 7,
   "pointsWon": 181,
   "totalPointsAgainst": 207,
   "mixedWins": 1,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 36.4,
   "diff": -26,
   "ppg": 16.5,
   "leagueRank": 262,
   "rating": 1.6,
   "ratingGames": 11,
   "confidence": 68,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 1.6,
   "playerId": "87aec82d-09fc-40c9-8298-03c21c2a095c"
  },
  {
   "name": "Peter O'Farrill",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 4,
   "losses": 7,
   "pointsWon": 176,
   "totalPointsAgainst": 211,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 36.4,
   "diff": -35,
   "ppg": 16,
   "leagueRank": 320,
   "rating": -1.8,
   "ratingGames": 11,
   "confidence": 64,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.7,
   "playerId": "ab221032-e648-4f2f-bc66-a05cee00c25c"
  },
  {
   "name": "Howard Eng",
   "gender": "Male",
   "team": "Mercer Bucks",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 5,
   "losses": 9,
   "pointsWon": 246,
   "totalPointsAgainst": 259,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 35.7,
   "diff": -13,
   "ppg": 17.6,
   "leagueRank": 257,
   "rating": 0.1,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.8,
   "playerId": "7727f912-4c91-468e-bc39-42aa85e084ab"
  },
  {
   "name": "Amanda Nguyen",
   "gender": "Female",
   "team": "PickleRage Union County",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 5,
   "losses": 9,
   "pointsWon": 248,
   "totalPointsAgainst": 276,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 35.7,
   "diff": -28,
   "ppg": 17.7,
   "leagueRank": 268,
   "rating": -0.6,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.9,
   "playerId": "005fa3be-9004-46b4-a3e2-77cd8b27b08e"
  },
  {
   "name": "Timothy Cassidy",
   "gender": "Male",
   "team": "One Love",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 17,
   "wins": 6,
   "losses": 11,
   "pointsWon": 295,
   "totalPointsAgainst": 331,
   "mixedWins": 1,
   "mixedLosses": 7,
   "genderWins": 5,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 35.3,
   "diff": -36,
   "ppg": 17.4,
   "leagueRank": 272,
   "rating": -1.9,
   "ratingGames": 17,
   "confidence": 72,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0,
   "playerId": "33b16b4f-95d4-4467-aba6-44b22d090bb5"
  },
  {
   "name": "Noach Shapiro",
   "gender": "Male",
   "team": "Pickleball Palace Black",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 9,
   "wins": 3,
   "losses": 6,
   "pointsWon": 171,
   "totalPointsAgainst": 161,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 33.3,
   "diff": 10,
   "ppg": 19,
   "leagueRank": 238,
   "rating": -1,
   "ratingGames": 9,
   "confidence": 58,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": -0.5,
   "playerId": "aaedba87-275e-40f9-8683-a1db0d570cd7"
  },
  {
   "name": "Lisa Pinder",
   "gender": "Female",
   "team": "Jersey Devil",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 105,
   "totalPointsAgainst": 102,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 33.3,
   "diff": 3,
   "ppg": 17.5,
   "leagueRank": 281,
   "rating": -0.3,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.2,
   "playerId": "7c49b9f3-7f46-4e68-8786-4fe39fdd8f2b"
  },
  {
   "name": "Carolyn King",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 4,
   "losses": 8,
   "pointsWon": 228,
   "totalPointsAgainst": 234,
   "mixedWins": 2,
   "mixedLosses": 6,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 33.3,
   "diff": -6,
   "ppg": 19,
   "leagueRank": 235,
   "rating": 0.5,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 1.3,
   "playerId": "a22b2393-4aae-4ee0-8e9c-7e3b386f9f0e"
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
   "winPct": 33.3,
   "diff": -6,
   "ppg": 18.8,
   "leagueRank": 277,
   "rating": -0.4,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.2,
   "playerId": "8e45f538-d95a-4554-9ccf-443a06b5a89e"
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
   "leagueRank": 401,
   "rating": -0.3,
   "ratingGames": 3,
   "confidence": 38,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 1.6,
   "playerId": "e6d3fc2c-be78-47b3-ba8f-ac978e0c33af"
  },
  {
   "name": "Jonathan Pang",
   "gender": "Male",
   "team": "Mercer Bucks",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 111,
   "totalPointsAgainst": 120,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 33.3,
   "diff": -9,
   "ppg": 18.5,
   "leagueRank": 368,
   "rating": -3.7,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -2.1,
   "playerId": "7c7117d7-1b77-4c7d-b520-74b3fd9d7be7"
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
   "leagueRank": 357,
   "rating": 0.9,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 1.5,
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
   "winPct": 33.3,
   "diff": -14,
   "ppg": 18,
   "leagueRank": 359,
   "rating": 0.3,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 1.1,
   "playerId": "db7a2656-a6f9-4a16-a9b6-2edcbd009e55"
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
   "leagueRank": 366,
   "rating": 0.5,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 0.9,
   "playerId": "365d44e5-260b-4d47-95db-ae71ef319e15"
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
   "leagueRank": 382,
   "rating": -2.1,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.3,
   "playerId": "705bad48-cc2d-40fe-b96f-409996010d0d"
  },
  {
   "name": "Daniel Brennan",
   "gender": "Male",
   "team": "Colts Neck Racquet Club",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 4,
   "losses": 8,
   "pointsWon": 199,
   "totalPointsAgainst": 219,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 33.3,
   "diff": -20,
   "ppg": 16.6,
   "leagueRank": 278,
   "rating": 0.1,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.7,
   "playerId": "11ea22dc-50d3-47ee-8189-89c6f976ca51"
  },
  {
   "name": "Jack Decicco",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 4,
   "losses": 8,
   "pointsWon": 212,
   "totalPointsAgainst": 234,
   "mixedWins": 2,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 33.3,
   "diff": -22,
   "ppg": 17.7,
   "leagueRank": 269,
   "rating": -0.7,
   "ratingGames": 12,
   "confidence": 67,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 1.1,
   "playerId": "13e775b3-99f6-4eb1-b794-e5f6aff1967b"
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
   "leagueRank": 381,
   "rating": -1.3,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.9,
   "playerId": "e1bab994-3d01-403e-9147-91c845803ca2"
  },
  {
   "name": "Alan Fang",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 94,
   "totalPointsAgainst": 122,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 33.3,
   "diff": -28,
   "ppg": 15.7,
   "leagueRank": 384,
   "rating": -1.1,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 1.2,
   "playerId": "9e2fa561-8fb5-455c-9c10-8ebbec13df4d"
  },
  {
   "name": "Paul Mcalary",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 8,
   "losses": 16,
   "pointsWon": 436,
   "totalPointsAgainst": 468,
   "mixedWins": 2,
   "mixedLosses": 10,
   "genderWins": 6,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 6,
   "winPct": 33.3,
   "diff": -32,
   "ppg": 18.2,
   "leagueRank": 252,
   "rating": -0.4,
   "ratingGames": 24,
   "confidence": 80,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.5,
   "playerId": "4b2fda63-a536-4730-9140-4a372b1726e9"
  },
  {
   "name": "Lucy Sha",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 5,
   "losses": 10,
   "pointsWon": 261,
   "totalPointsAgainst": 294,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 33.3,
   "diff": -33,
   "ppg": 17.4,
   "leagueRank": 251,
   "rating": 2.1,
   "ratingGames": 15,
   "confidence": 71,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 1.7,
   "playerId": "4807af08-76d9-4c85-9e4b-c16be77b4d78"
  },
  {
   "name": "Clare Cruz",
   "gender": "Female",
   "team": "Pickleball Palace Blue",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 5,
   "losses": 11,
   "pointsWon": 279,
   "totalPointsAgainst": 309,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 3,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 31.3,
   "diff": -30,
   "ppg": 17.4,
   "leagueRank": 274,
   "rating": -0.5,
   "ratingGames": 16,
   "confidence": 75,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.8,
   "playerId": "f54b54e0-be28-4155-a198-e63fc2ed0912"
  },
  {
   "name": "Blair Lane",
   "gender": "Male",
   "team": "Life Time Red Bank",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 4,
   "losses": 9,
   "pointsWon": 238,
   "totalPointsAgainst": 249,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 30.8,
   "diff": -11,
   "ppg": 18.3,
   "leagueRank": 270,
   "rating": -2.1,
   "ratingGames": 13,
   "confidence": 69,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -1,
   "playerId": "9ff56e0a-03ab-4488-b27d-24150e777b03"
  },
  {
   "name": "Linda Vilaikeo",
   "gender": "Female",
   "team": "PickleRage Union County",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 4,
   "losses": 9,
   "pointsWon": 234,
   "totalPointsAgainst": 252,
   "mixedWins": 2,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 5,
   "winPct": 30.8,
   "diff": -18,
   "ppg": 18,
   "leagueRank": 271,
   "rating": -0.2,
   "ratingGames": 13,
   "confidence": 70,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.9,
   "playerId": "d6387c1c-d4a1-437d-86c1-da6c66811b1d"
  },
  {
   "name": "Cheryl Raiken",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 3,
   "losses": 7,
   "pointsWon": 172,
   "totalPointsAgainst": 191,
   "mixedWins": 1,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 30,
   "diff": -19,
   "ppg": 17.2,
   "leagueRank": 292,
   "rating": -1.8,
   "ratingGames": 10,
   "confidence": 65,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 0.5,
   "playerId": "39966b06-c83d-47ea-a62c-d6c22c429d19"
  },
  {
   "name": "Denise Caracciolo",
   "gender": "Female",
   "team": "Premiere Dinkers",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 3,
   "losses": 7,
   "pointsWon": 174,
   "totalPointsAgainst": 203,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 30,
   "diff": -29,
   "ppg": 17.4,
   "leagueRank": 290,
   "rating": -0.6,
   "ratingGames": 10,
   "confidence": 65,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.8,
   "playerId": "71c0464b-3b64-425f-abfa-19769bea2288"
  },
  {
   "name": "Karen Austin",
   "gender": "Female",
   "team": "Dill Dinkers Newport",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 3,
   "losses": 7,
   "pointsWon": 160,
   "totalPointsAgainst": 190,
   "mixedWins": 1,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 30,
   "diff": -30,
   "ppg": 16,
   "leagueRank": 285,
   "rating": 0.4,
   "ratingGames": 10,
   "confidence": 65,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 1.1,
   "playerId": "f704be9a-6fb6-4107-bc74-423326f9e46e"
  },
  {
   "name": "Grace Brennan",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 6,
   "losses": 14,
   "pointsWon": 332,
   "totalPointsAgainst": 387,
   "mixedWins": 3,
   "mixedLosses": 6,
   "genderWins": 3,
   "genderLosses": 8,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 30,
   "diff": -55,
   "ppg": 16.6,
   "leagueRank": 287,
   "rating": -0.9,
   "ratingGames": 20,
   "confidence": 78,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.8,
   "playerId": "15778391-96b7-4888-9d08-d63b96e104ca"
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
   "winPct": 28.6,
   "diff": -12,
   "ppg": 18.3,
   "leagueRank": 325,
   "rating": 0.4,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 1,
   "playerId": "66e85dd2-3b39-4ebd-85cf-0244dd335889"
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
   "winPct": 28.6,
   "diff": -16,
   "ppg": 17.9,
   "leagueRank": 374,
   "rating": -1.2,
   "ratingGames": 7,
   "confidence": 54,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.5,
   "playerId": "abd55992-7237-4a92-817d-3d39388369c9"
  },
  {
   "name": "Claudia Forte",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 119,
   "totalPointsAgainst": 137,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 28.6,
   "diff": -18,
   "ppg": 17,
   "leagueRank": 372,
   "rating": -0.3,
   "ratingGames": 7,
   "confidence": 50,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.5,
   "playerId": "3a42632c-4e3f-4ae6-b2e8-bc2280a6d58f"
  },
  {
   "name": "Christopher Brett",
   "gender": "Male",
   "team": "Life Time Red Bank",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 109,
   "totalPointsAgainst": 140,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 28.6,
   "diff": -31,
   "ppg": 15.6,
   "leagueRank": 380,
   "rating": -1.1,
   "ratingGames": 7,
   "confidence": 54,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 1.8,
   "playerId": "4719124e-bbc1-4a42-aa0b-a8159f7778e2"
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
   "winPct": 28.6,
   "diff": -35,
   "ppg": 15.1,
   "leagueRank": 343,
   "rating": 0.4,
   "ratingGames": 7,
   "confidence": 55,
   "strengthOfPartners": -3.3,
   "strengthOfOpponents": 1.2,
   "playerId": "f7fc9d8b-2c1b-4931-aa5a-4bb2572392d4"
  },
  {
   "name": "Michele Iacono",
   "gender": "Female",
   "team": "Colts Neck Racquet Club",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 4,
   "losses": 10,
   "pointsWon": 222,
   "totalPointsAgainst": 273,
   "mixedWins": 1,
   "mixedLosses": 6,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 28.6,
   "diff": -51,
   "ppg": 15.9,
   "leagueRank": 308,
   "rating": -1,
   "ratingGames": 15,
   "confidence": 73,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 1,
   "playerId": "396a1928-4154-4d64-9ac3-e499acc6cd31"
  },
  {
   "name": "Amy Neckes",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 5,
   "losses": 13,
   "pointsWon": 306,
   "totalPointsAgainst": 351,
   "mixedWins": 3,
   "mixedLosses": 6,
   "genderWins": 2,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 27.8,
   "diff": -45,
   "ppg": 17,
   "leagueRank": 297,
   "rating": -1.8,
   "ratingGames": 18,
   "confidence": 76,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.2,
   "playerId": "5691a68e-0367-4af2-b318-4e927e00d4d6"
  },
  {
   "name": "Sharon Rarig",
   "gender": "Female",
   "team": "Colts Neck Racquet Club",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 3,
   "losses": 8,
   "pointsWon": 200,
   "totalPointsAgainst": 212,
   "mixedWins": 1,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 27.3,
   "diff": -12,
   "ppg": 18.2,
   "leagueRank": 266,
   "rating": 1,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.7,
   "playerId": "f0fbd8dc-a5a3-45f7-8ca5-f0cb985f5f23"
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
   "leagueRank": 283,
   "rating": 0.1,
   "ratingGames": 11,
   "confidence": 67,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.9,
   "playerId": "ea5676f2-c36c-4c54-b9df-c6fb5926b61e"
  },
  {
   "name": "Brenda Mee",
   "gender": "Female",
   "team": "One Love",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 3,
   "losses": 8,
   "pointsWon": 188,
   "totalPointsAgainst": 221,
   "mixedWins": 1,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 27.3,
   "diff": -33,
   "ppg": 17.1,
   "leagueRank": 301,
   "rating": -2.2,
   "ratingGames": 11,
   "confidence": 67,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0,
   "playerId": "797026a4-96ca-4435-bab9-3cbc13655e20"
  },
  {
   "name": "Dmitry Strashnov",
   "gender": "Male",
   "team": "PKLD",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 3,
   "losses": 8,
   "pointsWon": 184,
   "totalPointsAgainst": 218,
   "mixedWins": 2,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 27.3,
   "diff": -34,
   "ppg": 16.7,
   "leagueRank": 303,
   "rating": -2.3,
   "ratingGames": 11,
   "confidence": 65,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.1,
   "playerId": "b613137c-a590-4ca1-9835-aff71d263018"
  },
  {
   "name": "Lisa Munjack",
   "gender": "Female",
   "team": "Pickleball Palace Blue",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 3,
   "losses": 8,
   "pointsWon": 186,
   "totalPointsAgainst": 221,
   "mixedWins": 2,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 27.3,
   "diff": -35,
   "ppg": 16.9,
   "leagueRank": 331,
   "rating": -1.6,
   "ratingGames": 11,
   "confidence": 66,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 1,
   "playerId": "d04e4e93-c62c-4352-ac19-a5c7ce293763"
  },
  {
   "name": "Andria Lochtenbergh",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 6,
   "losses": 16,
   "pointsWon": 334,
   "totalPointsAgainst": 431,
   "mixedWins": 4,
   "mixedLosses": 7,
   "genderWins": 2,
   "genderLosses": 9,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 27.3,
   "diff": -97,
   "ppg": 15.2,
   "leagueRank": 322,
   "rating": -2.6,
   "ratingGames": 22,
   "confidence": 78,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.9,
   "playerId": "b624b900-f2f1-48d4-9e19-c0ff0238d34d"
  },
  {
   "name": "Bob Debarge",
   "gender": "Male",
   "team": "Monroe",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 19,
   "wins": 5,
   "losses": 14,
   "pointsWon": 331,
   "totalPointsAgainst": 366,
   "mixedWins": 2,
   "mixedLosses": 6,
   "genderWins": 3,
   "genderLosses": 8,
   "clutchWins": 0,
   "clutchLosses": 4,
   "winPct": 26.3,
   "diff": -35,
   "ppg": 17.4,
   "leagueRank": 284,
   "rating": -0.3,
   "ratingGames": 19,
   "confidence": 76,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.8,
   "playerId": "e0d98c57-92dd-4719-ab14-3635205f3328"
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
   "winPct": 25,
   "diff": -7,
   "ppg": 18.3,
   "leagueRank": 398,
   "rating": -1.1,
   "ratingGames": 4,
   "confidence": 45,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.4,
   "playerId": "5481b1c1-9e1f-4a36-8674-9677bed7a8cb"
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
   "leagueRank": 421,
   "rating": -2,
   "ratingGames": 4,
   "confidence": 43,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.4,
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
   "leagueRank": 431,
   "rating": -1.8,
   "ratingGames": 4,
   "confidence": 42,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.2,
   "playerId": "c25f7e12-5eab-4d47-9daa-0a6ab4ee1e01"
  },
  {
   "name": "Cheryl Parker",
   "gender": "Female",
   "team": "One Love",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 3,
   "losses": 9,
   "pointsWon": 207,
   "totalPointsAgainst": 234,
   "mixedWins": 2,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 4,
   "winPct": 25,
   "diff": -27,
   "ppg": 17.3,
   "leagueRank": 293,
   "rating": -0.8,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 1.1,
   "playerId": "1409bca4-8901-4ba4-8b38-c139781f5e07"
  },
  {
   "name": "Michael Salerno",
   "gender": "Male",
   "team": "Colts Neck Racquet Club",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 3,
   "losses": 9,
   "pointsWon": 192,
   "totalPointsAgainst": 233,
   "mixedWins": 1,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 25,
   "diff": -41,
   "ppg": 16,
   "leagueRank": 312,
   "rating": -1.7,
   "ratingGames": 12,
   "confidence": 67,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0,
   "playerId": "d580012d-5954-4900-94db-82fa10dc97b0"
  },
  {
   "name": "Todd Gelfand",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 12,
   "wins": 3,
   "losses": 9,
   "pointsWon": 192,
   "totalPointsAgainst": 237,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 25,
   "diff": -45,
   "ppg": 16,
   "leagueRank": 317,
   "rating": -1.5,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.5,
   "playerId": "370d2bae-330f-4377-b277-2ad2b1b6937e"
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
   "winPct": 25,
   "diff": -45,
   "ppg": 14.8,
   "leagueRank": 352,
   "rating": -1,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 1.4,
   "playerId": "368129c9-202c-459c-bdfd-da8ca04597f7"
  },
  {
   "name": "Irma Myersdonihoo",
   "gender": "Female",
   "team": "Dill Dinkers Newport",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 3,
   "losses": 9,
   "pointsWon": 186,
   "totalPointsAgainst": 235,
   "mixedWins": 1,
   "mixedLosses": 5,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 25,
   "diff": -49,
   "ppg": 15.5,
   "leagueRank": 306,
   "rating": 1.2,
   "ratingGames": 12,
   "confidence": 67,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": 1.9,
   "playerId": "84de6bd2-281f-424f-bbc0-254f670e052b"
  },
  {
   "name": "Al Chen",
   "gender": "Male",
   "team": "Pickleball Palace Blue",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 3,
   "losses": 9,
   "pointsWon": 182,
   "totalPointsAgainst": 233,
   "mixedWins": 1,
   "mixedLosses": 6,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 25,
   "diff": -51,
   "ppg": 15.2,
   "leagueRank": 327,
   "rating": -1.3,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.9,
   "playerId": "d1662b32-b01f-4f6a-95a0-ff4fe00d4d32"
  },
  {
   "name": "Felix Soto",
   "gender": "Male",
   "team": "Premiere Aces",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 3,
   "losses": 10,
   "pointsWon": 203,
   "totalPointsAgainst": 267,
   "mixedWins": 1,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 23.1,
   "diff": -64,
   "ppg": 15.6,
   "leagueRank": 435,
   "rating": -2.3,
   "ratingGames": 13,
   "confidence": 70,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.4,
   "playerId": "8db2af6c-d2cf-4613-a2c3-f512de991c85"
  },
  {
   "name": "Frank Messina",
   "gender": "Male",
   "team": "Colts Neck Racquet Club",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 3,
   "losses": 10,
   "pointsWon": 194,
   "totalPointsAgainst": 266,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 23.1,
   "diff": -72,
   "ppg": 14.9,
   "leagueRank": 339,
   "rating": -3.9,
   "ratingGames": 13,
   "confidence": 69,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.1,
   "playerId": "555bc2a7-4111-4cde-bc1d-30dbec8fbd9f"
  },
  {
   "name": "Marleen Tuquero",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton Strikers",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 9,
   "wins": 2,
   "losses": 7,
   "pointsWon": 130,
   "totalPointsAgainst": 181,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 22.2,
   "diff": -51,
   "ppg": 14.4,
   "leagueRank": 361,
   "rating": -4,
   "ratingGames": 9,
   "confidence": 61,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.1,
   "playerId": "d5598dfe-2fd3-4178-9068-6baf887689b2"
  },
  {
   "name": "Joseph Koerner",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 4,
   "losses": 14,
   "pointsWon": 276,
   "totalPointsAgainst": 349,
   "mixedWins": 3,
   "mixedLosses": 6,
   "genderWins": 1,
   "genderLosses": 8,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 22.2,
   "diff": -73,
   "ppg": 15.3,
   "leagueRank": 323,
   "rating": 0.3,
   "ratingGames": 18,
   "confidence": 77,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 1.4,
   "playerId": "b49f166d-9cd4-4b86-961d-380dd8189a87"
  },
  {
   "name": "Jill Nixon",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 4,
   "losses": 15,
   "pointsWon": 328,
   "totalPointsAgainst": 360,
   "mixedWins": 2,
   "mixedLosses": 6,
   "genderWins": 2,
   "genderLosses": 9,
   "clutchWins": 1,
   "clutchLosses": 5,
   "winPct": 21.1,
   "diff": -32,
   "ppg": 17.3,
   "leagueRank": 289,
   "rating": 0.6,
   "ratingGames": 19,
   "confidence": 77,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 1,
   "playerId": "8c0ea31a-a5e4-49f4-b97c-703e6edfe6d2"
  },
  {
   "name": "Gregory Mcquibben",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton Prime Time",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 4,
   "losses": 15,
   "pointsWon": 266,
   "totalPointsAgainst": 385,
   "mixedWins": 3,
   "mixedLosses": 6,
   "genderWins": 1,
   "genderLosses": 9,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 21.1,
   "diff": -119,
   "ppg": 14,
   "leagueRank": 351,
   "rating": -3.7,
   "ratingGames": 19,
   "confidence": 76,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.4,
   "playerId": "10110730-45a5-496c-94db-748fbe7f5bdf"
  },
  {
   "name": "Michael Rosenmertz",
   "gender": "Male",
   "team": "PKLD",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 86,
   "totalPointsAgainst": 92,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 20,
   "diff": -6,
   "ppg": 17.2,
   "leagueRank": 377,
   "rating": 0.8,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 1.2,
   "playerId": "e82e246e-7ff8-4f9d-9e0c-bcf5d4aa68d8"
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
   "leagueRank": 399,
   "rating": -0.7,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": -2.7,
   "strengthOfOpponents": -0.1,
   "playerId": "8d58ade4-bdf5-4a43-8e5f-824fd1ae6f61"
  },
  {
   "name": "Bonnie Russo",
   "gender": "Female",
   "team": "Monroe",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 2,
   "losses": 8,
   "pointsWon": 175,
   "totalPointsAgainst": 204,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 20,
   "diff": -29,
   "ppg": 17.5,
   "leagueRank": 314,
   "rating": -2.4,
   "ratingGames": 10,
   "confidence": 63,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.1,
   "playerId": "c32a3777-ab2f-457c-9232-39bee809dfc9"
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
   "leagueRank": 429,
   "rating": -1.2,
   "ratingGames": 5,
   "confidence": 49,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 1.7,
   "playerId": "f60538ea-d405-4f9b-a8ac-8545414538c0"
  },
  {
   "name": "Lori Pinelli",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton Prime Time",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 71,
   "totalPointsAgainst": 103,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 20,
   "diff": -32,
   "ppg": 14.2,
   "leagueRank": 417,
   "rating": -2.2,
   "ratingGames": 5,
   "confidence": 49,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.8,
   "playerId": "6a1ee7ea-3109-4ab1-80c9-8beb7181907e"
  },
  {
   "name": "Mark Baker",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 2,
   "losses": 8,
   "pointsWon": 172,
   "totalPointsAgainst": 205,
   "mixedWins": 0,
   "mixedLosses": 5,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 20,
   "diff": -33,
   "ppg": 17.2,
   "leagueRank": 350,
   "rating": -2.5,
   "ratingGames": 10,
   "confidence": 66,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0,
   "playerId": "2edb3f79-df7a-4e92-a4d5-e78774a90e92"
  },
  {
   "name": "Ling Tsui",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 2,
   "losses": 8,
   "pointsWon": 157,
   "totalPointsAgainst": 193,
   "mixedWins": 1,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 20,
   "diff": -36,
   "ppg": 15.7,
   "leagueRank": 358,
   "rating": -1.4,
   "ratingGames": 10,
   "confidence": 66,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 1.4,
   "playerId": "e9eef724-5532-4330-a00b-190cfdc8a8e2"
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
   "leagueRank": 321,
   "rating": -2,
   "ratingGames": 10,
   "confidence": 64,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": -0.1,
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
   "leagueRank": 442,
   "rating": -2.4,
   "ratingGames": 5,
   "confidence": 49,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 1.6,
   "playerId": "abb97d79-dd49-46e2-ada3-d97b74daefac"
  },
  {
   "name": "Shari Gagliardo",
   "gender": "Female",
   "team": "Colts Neck Racquet Club",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 2,
   "losses": 8,
   "pointsWon": 153,
   "totalPointsAgainst": 198,
   "mixedWins": 1,
   "mixedLosses": 5,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 20,
   "diff": -45,
   "ppg": 15.3,
   "leagueRank": 336,
   "rating": -2.1,
   "ratingGames": 10,
   "confidence": 65,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.3,
   "playerId": "17772fc9-b0bb-456e-82a9-9b25ff7fbf09"
  },
  {
   "name": "Franchesa Mclean",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton Prime Time",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 20,
   "wins": 4,
   "losses": 16,
   "pointsWon": 323,
   "totalPointsAgainst": 401,
   "mixedWins": 2,
   "mixedLosses": 7,
   "genderWins": 2,
   "genderLosses": 9,
   "clutchWins": 1,
   "clutchLosses": 5,
   "winPct": 20,
   "diff": -78,
   "ppg": 16.2,
   "leagueRank": 326,
   "rating": -2.8,
   "ratingGames": 20,
   "confidence": 76,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.4,
   "playerId": "84a3279f-7449-4f3a-9d37-1cb1bfe2c45e"
  },
  {
   "name": "Ed Mendoza",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton Prime Time",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 4,
   "losses": 16,
   "pointsWon": 289,
   "totalPointsAgainst": 406,
   "mixedWins": 4,
   "mixedLosses": 7,
   "genderWins": 0,
   "genderLosses": 9,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 20,
   "diff": -117,
   "ppg": 14.5,
   "leagueRank": 347,
   "rating": -3.6,
   "ratingGames": 20,
   "confidence": 77,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.4,
   "playerId": "cb4a8451-13f9-4c27-8dc6-847fea7be9b4"
  },
  {
   "name": "Karin Schneider",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 3,
   "losses": 13,
   "pointsWon": 246,
   "totalPointsAgainst": 322,
   "mixedWins": 2,
   "mixedLosses": 6,
   "genderWins": 1,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 18.8,
   "diff": -76,
   "ppg": 15.4,
   "leagueRank": 329,
   "rating": -0.8,
   "ratingGames": 16,
   "confidence": 71,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 1,
   "playerId": "6b3df055-e504-46b4-8072-5ebded92a310"
  },
  {
   "name": "Frank Fama",
   "gender": "Male",
   "team": "Premiere Aces",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 2,
   "losses": 9,
   "pointsWon": 179,
   "totalPointsAgainst": 222,
   "mixedWins": 1,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 18.2,
   "diff": -43,
   "ppg": 16.3,
   "leagueRank": 319,
   "rating": -0.2,
   "ratingGames": 11,
   "confidence": 67,
   "strengthOfPartners": -2.1,
   "strengthOfOpponents": 0.8,
   "playerId": "470a69e9-14e8-46ea-8442-328398904e1f"
  },
  {
   "name": "Vlad Feldman",
   "gender": "Male",
   "team": "Premiere Aces",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 2,
   "losses": 9,
   "pointsWon": 171,
   "totalPointsAgainst": 225,
   "mixedWins": 1,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 18.2,
   "diff": -54,
   "ppg": 15.5,
   "leagueRank": 333,
   "rating": -1,
   "ratingGames": 11,
   "confidence": 67,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": 0.8,
   "playerId": "3b1371bf-00ac-4162-aeb0-66736c008394"
  },
  {
   "name": "Alexandra Romagnolo",
   "gender": "Female",
   "team": "Premiere Dinkers",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 3,
   "losses": 14,
   "pointsWon": 272,
   "totalPointsAgainst": 347,
   "mixedWins": 1,
   "mixedLosses": 9,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 17.6,
   "diff": -75,
   "ppg": 16,
   "leagueRank": 342,
   "rating": -3.8,
   "ratingGames": 17,
   "confidence": 75,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.2,
   "playerId": "5b2cd4fb-dda2-4578-8b82-73ad0c7153dd"
  },
  {
   "name": "Leah Greenstein",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 3,
   "losses": 14,
   "pointsWon": 247,
   "totalPointsAgainst": 344,
   "mixedWins": 0,
   "mixedLosses": 8,
   "genderWins": 3,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 17.6,
   "diff": -97,
   "ppg": 14.5,
   "leagueRank": 353,
   "rating": -4,
   "ratingGames": 17,
   "confidence": 76,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.4,
   "playerId": "ca06b5ce-3001-408e-bdc6-9e183022b9f3"
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
   "winPct": 16.7,
   "diff": -15,
   "ppg": 18,
   "leagueRank": 334,
   "rating": -1,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": -2.3,
   "strengthOfOpponents": -0.7,
   "playerId": "24f324f0-f821-45ef-8278-4b65de08b7b5"
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
   "leagueRank": 335,
   "rating": 0.3,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 1.4,
   "playerId": "16ec94ae-388b-4b42-ae48-4c05203b6492"
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
   "winPct": 16.7,
   "diff": -18,
   "ppg": 17.3,
   "leagueRank": 391,
   "rating": -0.1,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 1.2,
   "playerId": "de5fc252-98c5-4c6a-b7eb-63b4d946c9a3"
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
   "leagueRank": 407,
   "rating": -1.6,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": -0.1,
   "playerId": "311c04fb-3844-4543-a0e0-877f48e24075"
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
   "winPct": 16.7,
   "diff": -22,
   "ppg": 16.5,
   "leagueRank": 395,
   "rating": -0.5,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 1.1,
   "playerId": "c92ae5b3-6059-4c8a-ac04-fe0cbd1eb47c"
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
   "leagueRank": 396,
   "rating": -0.1,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": -2,
   "strengthOfOpponents": 0.8,
   "playerId": "c7dd526f-b8fe-4172-977d-912044350954"
  },
  {
   "name": "Elisa Riesenbach",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 97,
   "totalPointsAgainst": 124,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 16.7,
   "diff": -27,
   "ppg": 16.2,
   "leagueRank": 405,
   "rating": -1.3,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": -2.2,
   "strengthOfOpponents": 0.1,
   "playerId": "76b5ed62-1637-473f-a484-a86faf95338a"
  },
  {
   "name": "Brian Borer",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 87,
   "totalPointsAgainst": 116,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 16.7,
   "diff": -29,
   "ppg": 14.5,
   "leagueRank": 412,
   "rating": -0.4,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": -2.2,
   "strengthOfOpponents": 0.9,
   "playerId": "47124d07-437f-49ee-b6ba-fc48943aee42"
  },
  {
   "name": "Lisa Miller",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 1,
   "outsideSub": false,
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
   "winPct": 16.7,
   "diff": -36,
   "ppg": 14,
   "leagueRank": 418,
   "rating": -1.5,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 1.5,
   "playerId": "dfb719fa-b0aa-436f-868b-0130018d36c6"
  },
  {
   "name": "Maria Medina",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 81,
   "totalPointsAgainst": 123,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 16.7,
   "diff": -42,
   "ppg": 13.5,
   "leagueRank": 423,
   "rating": -1.7,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 1.8,
   "playerId": "5b296802-eaf0-4fc6-8798-38d35f37aa54"
  },
  {
   "name": "Laura Peng",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 81,
   "totalPointsAgainst": 123,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 16.7,
   "diff": -42,
   "ppg": 13.5,
   "leagueRank": 420,
   "rating": -0.9,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 2.3,
   "playerId": "fee0899c-870f-49f7-b07b-d34ed516a9f9"
  },
  {
   "name": "Frank Marchiano",
   "gender": "Male",
   "team": "Premiere Aces",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 77,
   "totalPointsAgainst": 124,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 16.7,
   "diff": -47,
   "ppg": 12.8,
   "leagueRank": 392,
   "rating": -2.1,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": -2.9,
   "strengthOfOpponents": 0.7,
   "playerId": "a2fd43d6-c9c6-42d2-8f2f-a013616ab399"
  },
  {
   "name": "Karen Mcbride",
   "gender": "Female",
   "team": "Dill Dinkers Newport",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 12,
   "wins": 2,
   "losses": 10,
   "pointsWon": 184,
   "totalPointsAgainst": 242,
   "mixedWins": 1,
   "mixedLosses": 6,
   "genderWins": 1,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 16.7,
   "diff": -58,
   "ppg": 15.3,
   "leagueRank": 332,
   "rating": -0.5,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 1.6,
   "playerId": "f86cfd40-dc38-4bc2-88b8-e0f4c4f5bc1a"
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
   "leagueRank": 344,
   "rating": -3.5,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.1,
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
   "leagueRank": 415,
   "rating": -3.6,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": -2,
   "strengthOfOpponents": 1.4,
   "playerId": "9eb6f237-6b09-455a-a7c0-523fba38a70f"
  },
  {
   "name": "Joshua Holloway",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 2,
   "losses": 10,
   "pointsWon": 179,
   "totalPointsAgainst": 244,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 0,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 16.7,
   "diff": -65,
   "ppg": 14.9,
   "leagueRank": 340,
   "rating": -2,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.8,
   "playerId": "b8919b61-f5ef-4322-a5fd-51364c3e0fbc"
  },
  {
   "name": "Scott Heist",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 3,
   "losses": 16,
   "pointsWon": 278,
   "totalPointsAgainst": 391,
   "mixedWins": 2,
   "mixedLosses": 8,
   "genderWins": 1,
   "genderLosses": 8,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 15.8,
   "diff": -113,
   "ppg": 14.6,
   "leagueRank": 356,
   "rating": -3.2,
   "ratingGames": 19,
   "confidence": 74,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.5,
   "playerId": "43296dc0-9f07-4173-a3c4-6df92c7bbb37"
  },
  {
   "name": "Warren Howard",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton Prime Time",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 3,
   "losses": 16,
   "pointsWon": 269,
   "totalPointsAgainst": 386,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 1,
   "genderLosses": 11,
   "clutchWins": 0,
   "clutchLosses": 4,
   "winPct": 15.8,
   "diff": -117,
   "ppg": 14.2,
   "leagueRank": 362,
   "rating": -3.1,
   "ratingGames": 19,
   "confidence": 72,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": 0.3,
   "playerId": "b5b20410-43ee-4dc8-bb2b-dadb159ca3f1"
  },
  {
   "name": "John Hans",
   "gender": "Male",
   "team": "Premiere Aces",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 2,
   "losses": 11,
   "pointsWon": 203,
   "totalPointsAgainst": 268,
   "mixedWins": 2,
   "mixedLosses": 6,
   "genderWins": 0,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 15.4,
   "diff": -65,
   "ppg": 15.6,
   "leagueRank": 337,
   "rating": -1.3,
   "ratingGames": 13,
   "confidence": 70,
   "strengthOfPartners": -2.3,
   "strengthOfOpponents": 0.5,
   "playerId": "ffde9017-6c1a-4fb4-947d-6a46338593ce"
  },
  {
   "name": "Richard Tang",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 112,
   "totalPointsAgainst": 145,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 14.3,
   "diff": -33,
   "ppg": 16,
   "leagueRank": 410,
   "rating": -2.2,
   "ratingGames": 7,
   "confidence": 49,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.3,
   "playerId": "c3467776-5ed3-43a0-bcbf-144c79f32561"
  },
  {
   "name": "Lucille Licciardello",
   "gender": "Female",
   "team": "Colts Neck Racquet Club",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 104,
   "totalPointsAgainst": 145,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 14.3,
   "diff": -41,
   "ppg": 14.9,
   "leagueRank": 404,
   "rating": -2.6,
   "ratingGames": 7,
   "confidence": 55,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 0.2,
   "playerId": "96dc9c19-55d6-432d-a17a-b3ae274f63a7"
  },
  {
   "name": "Chantal Reme",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 96,
   "totalPointsAgainst": 143,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 14.3,
   "diff": -47,
   "ppg": 13.7,
   "leagueRank": 427,
   "rating": -2.9,
   "ratingGames": 7,
   "confidence": 55,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 1.1,
   "playerId": "c1486563-656a-4953-88d2-015e47c6fb47"
  },
  {
   "name": "Scott Walden",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 2,
   "losses": 12,
   "pointsWon": 220,
   "totalPointsAgainst": 280,
   "mixedWins": 0,
   "mixedLosses": 7,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 14.3,
   "diff": -60,
   "ppg": 15.7,
   "leagueRank": 338,
   "rating": -2,
   "ratingGames": 14,
   "confidence": 70,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.5,
   "playerId": "f74767f9-212a-4197-b80c-ada302226df6"
  },
  {
   "name": "Jen Ritchie",
   "gender": "Female",
   "team": "Premiere Aces",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 2,
   "losses": 13,
   "pointsWon": 205,
   "totalPointsAgainst": 311,
   "mixedWins": 1,
   "mixedLosses": 6,
   "genderWins": 1,
   "genderLosses": 7,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 13.3,
   "diff": -106,
   "ppg": 13.7,
   "leagueRank": 369,
   "rating": -3.1,
   "ratingGames": 15,
   "confidence": 72,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 0.9,
   "playerId": "89740069-e9bc-4808-9d13-e7365f65169d"
  },
  {
   "name": "Jerry Ridder",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 3,
   "losses": 20,
   "pointsWon": 324,
   "totalPointsAgainst": 474,
   "mixedWins": 2,
   "mixedLosses": 10,
   "genderWins": 1,
   "genderLosses": 10,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 13,
   "diff": -150,
   "ppg": 14.1,
   "leagueRank": 363,
   "rating": -2.5,
   "ratingGames": 23,
   "confidence": 80,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 1.1,
   "playerId": "17d83f5c-38ad-4048-afbb-7302f3aff397"
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
   "winPct": 12.5,
   "diff": -41,
   "ppg": 15.6,
   "leagueRank": 367,
   "rating": -0.4,
   "ratingGames": 8,
   "confidence": 57,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": 1.4,
   "playerId": "08e9f294-3f72-42c0-9e89-ca3be388b9e2"
  },
  {
   "name": "Gina Digirolamo",
   "gender": "Female",
   "team": "Premiere Aces",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 118,
   "totalPointsAgainst": 165,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 12.5,
   "diff": -47,
   "ppg": 14.8,
   "leagueRank": 349,
   "rating": -0.5,
   "ratingGames": 8,
   "confidence": 57,
   "strengthOfPartners": -2.7,
   "strengthOfOpponents": 1.2,
   "playerId": "bb8e590f-a342-432c-93ed-5757fcf6eecf"
  },
  {
   "name": "Danya George",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 2,
   "losses": 14,
   "pointsWon": 213,
   "totalPointsAgainst": 321,
   "mixedWins": 1,
   "mixedLosses": 8,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 12.5,
   "diff": -108,
   "ppg": 13.3,
   "leagueRank": 375,
   "rating": -3.3,
   "ratingGames": 16,
   "confidence": 73,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.8,
   "playerId": "fbaf1cdd-118b-4d51-a42e-f06908cc3f3c"
  },
  {
   "name": "Janet Bodner",
   "gender": "Female",
   "team": "One Love",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 9,
   "wins": 1,
   "losses": 8,
   "pointsWon": 142,
   "totalPointsAgainst": 182,
   "mixedWins": 1,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 11.1,
   "diff": -40,
   "ppg": 15.8,
   "leagueRank": 385,
   "rating": -4,
   "ratingGames": 9,
   "confidence": 60,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.3,
   "playerId": "4e07b66d-dd15-42ea-9566-0b82e7d94c15"
  },
  {
   "name": "Tom Giunta",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 2,
   "losses": 16,
   "pointsWon": 259,
   "totalPointsAgainst": 373,
   "mixedWins": 1,
   "mixedLosses": 6,
   "genderWins": 1,
   "genderLosses": 10,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 11.1,
   "diff": -114,
   "ppg": 14.4,
   "leagueRank": 365,
   "rating": -2.6,
   "ratingGames": 18,
   "confidence": 76,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 1.3,
   "playerId": "951454ae-d2ba-4339-99de-1a47c62bbaac"
  },
  {
   "name": "Chris Owens",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 1,
   "losses": 9,
   "pointsWon": 118,
   "totalPointsAgainst": 205,
   "mixedWins": 1,
   "mixedLosses": 7,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 10,
   "diff": -87,
   "ppg": 11.8,
   "leagueRank": 389,
   "rating": -2.4,
   "ratingGames": 10,
   "confidence": 65,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 2,
   "playerId": "44fb406f-7185-4218-9c33-d9094f55f82d"
  },
  {
   "name": "Tracy Giunta",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 2,
   "losses": 21,
   "pointsWon": 349,
   "totalPointsAgainst": 469,
   "mixedWins": 1,
   "mixedLosses": 11,
   "genderWins": 1,
   "genderLosses": 10,
   "clutchWins": 0,
   "clutchLosses": 4,
   "winPct": 8.7,
   "diff": -120,
   "ppg": 15.2,
   "leagueRank": 364,
   "rating": -2.1,
   "ratingGames": 23,
   "confidence": 80,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.8,
   "playerId": "0053115a-f6c0-43c0-ab0e-ec6abf16bc32"
  },
  {
   "name": "Apparao Avancha",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 1,
   "losses": 11,
   "pointsWon": 192,
   "totalPointsAgainst": 250,
   "mixedWins": 1,
   "mixedLosses": 5,
   "genderWins": 0,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 8.3,
   "diff": -58,
   "ppg": 16,
   "leagueRank": 354,
   "rating": -2.4,
   "ratingGames": 12,
   "confidence": 66,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 1.3,
   "playerId": "d84632f4-bec0-4399-8b04-64c6ea340362"
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
   "leagueRank": 355,
   "rating": -2.6,
   "ratingGames": 13,
   "confidence": 67,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.6,
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
   "leagueRank": 376,
   "rating": -1.5,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 1.8,
   "playerId": "5db691c2-51e1-4500-a9e7-60c0f303f6d0"
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
   "leagueRank": 462,
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
   "leagueRank": 484,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "069b6990-9fae-4294-bf0a-2e428a9f763e"
  },
  {
   "name": "Thomas Musso",
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
   "leagueRank": 516,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "08f0cbb6-992f-4643-85bd-bf004ddb0734"
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
   "leagueRank": 533,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "156cabc5-a5d7-4235-8aa2-a5503557e479"
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
   "leagueRank": 532,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "1c3b8ddb-6596-4a83-ac12-05bfbf4610ce"
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
   "leagueRank": 523,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "32df945d-84b6-409d-b2ab-109d6dc1e3de"
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
   "leagueRank": 470,
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
   "leagueRank": 496,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "368337c0-e1f6-4cd2-89ec-41b1e06042ea"
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
   "leagueRank": 543,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "4076828c-aa6f-47c8-b495-55eed2afe29d"
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
   "leagueRank": 487,
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
   "leagueRank": 468,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "66f03f68-32e7-4619-b10b-043ec13b121a"
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
   "leagueRank": 538,
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
   "leagueRank": 542,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "80f9d87d-c824-4680-8d52-6c565388972e"
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
   "leagueRank": 469,
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
   "leagueRank": 517,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "89ba31d0-20be-4443-b93e-aab0866ad62d"
  },
  {
   "name": "Erwin Wong",
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
   "leagueRank": 549,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "a2806e74-6e0e-4848-a9d0-6b3bc6bf0060"
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
   "leagueRank": 507,
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
   "leagueRank": 461,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "ba70e1c6-5eb3-48a3-a0f0-77963ac31a3a"
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
   "leagueRank": 499,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "cadae4ee-fcfc-42ab-bfba-86525b5df4c9"
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
   "leagueRank": 513,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "d4b1538b-bc04-4208-b52e-5a2bd5a452a4"
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
   "leagueRank": 514,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "d64631c2-5086-4d28-b93e-26c8661af87b"
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
   "leagueRank": 530,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "e77590e0-255e-4437-b56f-d6aaf80dc2af"
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
   "leagueRank": 474,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "ebf3ac46-4f39-4dfd-97fa-9eb671e5fe61"
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
   "leagueRank": 540,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "f6ae9cd2-5152-44d6-a145-94753ac8bab2"
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
   "leagueRank": 525,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "fbb519b9-fe15-4ecf-a916-8557761ca54b"
  },
  {
   "name": "Jodi De Waal",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 0,
   "outsideSub": true,
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
   "leagueRank": 485,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "029d9ce1-1951-4439-8ec5-4792ecf1e957"
  },
  {
   "name": "Brett Wilson",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 0,
   "outsideSub": true,
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
   "leagueRank": 546,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "0442b5bc-7af7-4e95-acc1-08adc22cdb2e"
  },
  {
   "name": "Feng Song",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
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
   "leagueRank": 536,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "04d8793a-fa03-4789-86fe-49b33eacbbea"
  },
  {
   "name": "Frank Rodriguez",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 0,
   "outsideSub": true,
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
   "leagueRank": 529,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "0d326b1f-4b59-4138-a03a-1adf0d465b70"
  },
  {
   "name": "Suzanne Bauer",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 0,
   "outsideSub": true,
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
   "leagueRank": 460,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "129227bd-dad6-4c63-9d24-d3c6a34e9621"
  },
  {
   "name": "Sara Hylan",
   "gender": "Female",
   "team": "Life Time Red Bank",
   "matches": 0,
   "outsideSub": true,
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
   "leagueRank": 502,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "153fa815-ce9c-4c36-8fce-c525887f05b1"
  },
  {
   "name": "Eulett Pryce",
   "gender": "Female",
   "team": "Dill Dinkers Newport",
   "matches": 0,
   "outsideSub": true,
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
   "leagueRank": 526,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "1a3200ad-62cc-442b-b172-3686236ea552"
  },
  {
   "name": "Christopher Chierchia",
   "gender": "Male",
   "team": "One Love",
   "matches": 0,
   "outsideSub": true,
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
   "leagueRank": 472,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "2a0a0727-3550-460f-a019-4cdfe310469a"
  },
  {
   "name": "April Danks",
   "gender": "Female",
   "team": "Premiere Aces",
   "matches": 0,
   "outsideSub": true,
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
   "leagueRank": 480,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "37721720-7c72-44d7-bc7c-c73f62e2fb4b"
  },
  {
   "name": "Ed Palek",
   "gender": "Male",
   "team": "Forward",
   "matches": 0,
   "outsideSub": true,
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
   "leagueRank": 520,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "405bd830-a019-4631-98a5-212b6ffadaaa"
  },
  {
   "name": "Beth Hyland",
   "gender": "Female",
   "team": "Dill Dinkers Newport",
   "matches": 0,
   "outsideSub": true,
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
   "leagueRank": 503,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "45a2a93a-32a4-41a0-b270-ef17b9ff2391"
  },
  {
   "name": "Michael Altilio",
   "gender": "Male",
   "team": "Life Time Red Bank",
   "matches": 0,
   "outsideSub": true,
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
   "playerId": "4e4e7aba-3b58-490c-a288-cb42f2fd1f74"
  },
  {
   "name": "Nicholai Ola",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton Prime Time",
   "matches": 0,
   "outsideSub": true,
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
   "leagueRank": 518,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "590c2bb4-2fd5-484b-a75f-4863c40c9f66"
  },
  {
   "name": "Debra Crawford",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton Prime Time",
   "matches": 0,
   "outsideSub": true,
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
   "leagueRank": 477,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "5c28285b-7837-4f7b-8841-c23b92fe26af"
  },
  {
   "name": "Raul Real",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton Prime Time",
   "matches": 0,
   "outsideSub": true,
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
   "leagueRank": 527,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "5e605c22-faea-41b7-82ac-60046caa7b43"
  },
  {
   "name": "Nancy Hornback",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 0,
   "outsideSub": true,
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
   "leagueRank": 500,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "6df1fd0f-6b38-4538-a53b-c4d141e604bc"
  },
  {
   "name": "Scott Rothschild",
   "gender": "Male",
   "team": "PKLD",
   "matches": 0,
   "outsideSub": true,
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
   "leagueRank": 531,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "6f4df2db-2114-4c90-b889-b969317403c7"
  },
  {
   "name": "Neal Shipon",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 0,
   "outsideSub": true,
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
   "leagueRank": 535,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "7d298d79-0931-4682-8a6f-305e27d992b7"
  },
  {
   "name": "Vincent Daversa",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 0,
   "outsideSub": true,
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
   "leagueRank": 481,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "80054c20-062f-4190-b268-c8e0e90d089a"
  },
  {
   "name": "Julie Orts",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 0,
   "outsideSub": true,
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
   "leagueRank": 519,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "8471c0ed-751f-45e9-a85f-3125465ee459"
  },
  {
   "name": "Regina Festa",
   "gender": "Female",
   "team": "Premiere Aces",
   "matches": 0,
   "outsideSub": true,
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
   "leagueRank": 493,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "9fafa9fd-7012-4a7e-8b91-28c33ecc0f21"
  },
  {
   "name": "Anthony Dejesse",
   "gender": "Male",
   "team": "Forward",
   "matches": 0,
   "outsideSub": true,
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
   "leagueRank": 486,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "a05eff32-b5f1-479b-a823-d1c89922235e"
  },
  {
   "name": "Achilles Alon",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 0,
   "outsideSub": true,
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
   "leagueRank": 455,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "bba20fc9-f147-4875-af0c-0426a70c2b7a"
  },
  {
   "name": "Marilyn Manzo",
   "gender": "Female",
   "team": "Colts Neck Racquet Club",
   "matches": 0,
   "outsideSub": true,
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
   "leagueRank": 511,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "d28c20ed-56ea-431e-99b0-791754752e37"
  },
  {
   "name": "David Ward",
   "gender": "Male",
   "team": "Forward",
   "matches": 0,
   "outsideSub": true,
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
   "leagueRank": 545,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "d52e39b2-80ba-4c68-b6ce-7945feefd838"
  },
  {
   "name": "Virgo Marjamaa",
   "gender": "Male",
   "team": "Life Time Red Bank",
   "matches": 0,
   "outsideSub": true,
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
   "leagueRank": 512,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "d8d92449-f754-45b9-acf1-821822b1abb5"
  },
  {
   "name": "Nipam Patel",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 0,
   "outsideSub": true,
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
   "leagueRank": 522,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "dadd5cb5-8165-44be-8553-8774bc0949e2"
  },
  {
   "name": "Joe Amendolara",
   "gender": "Male",
   "team": "Premiere Aces",
   "matches": 0,
   "outsideSub": true,
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
   "playerId": "e014dcb5-a4a2-4cf6-8773-14fb13bf2c7b"
  },
  {
   "name": "Sabrina Trunzo Dinkle",
   "gender": "Female",
   "team": "Premiere Aces",
   "matches": 0,
   "outsideSub": true,
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
   "leagueRank": 539,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "e61fbd7e-0b43-42a1-b2ae-03f4279ca2a1"
  },
  {
   "name": "Weiyong Sun",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
   "matches": 0,
   "outsideSub": true,
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
   "leagueRank": 537,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "f1189c90-cc36-40a6-91cb-ab1274e3b07a"
  },
  {
   "name": "Judi London",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 0,
   "outsideSub": true,
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
   "leagueRank": 509,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "f5a9ad03-1ba0-4048-b558-a5813164d067"
  },
  {
   "name": "Enza Cristino",
   "gender": "Female",
   "team": "Premiere Aces",
   "matches": 0,
   "outsideSub": true,
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
   "leagueRank": 478,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "f8a02dac-93af-436d-bbab-f6b69803f19a"
  },
  {
   "name": "Mike Yang",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 0,
   "outsideSub": true,
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
   "leagueRank": 550,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "fde88c4a-e006-4396-bc8a-92bf97916537"
  },
  {
   "name": "Patrice Gallary",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 0,
   "outsideSub": true,
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
   "leagueRank": 494,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "ffeaed4d-cfb0-4c86-a3e9-15d162d7e247"
  },
  {
   "name": "James Xiong",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 1,
   "wins": 0,
   "losses": 1,
   "pointsWon": 19,
   "totalPointsAgainst": 21,
   "mixedWins": 0,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -2,
   "ppg": 19,
   "leagueRank": 433,
   "rating": 0.4,
   "ratingGames": 1,
   "confidence": 18,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 1.2,
   "playerId": "53b9424e-9645-4e0e-a582-5023f17b9ebd"
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
   "winPct": 0,
   "diff": -15,
   "ppg": 17.3,
   "leagueRank": 419,
   "rating": -1,
   "ratingGames": 4,
   "confidence": 45,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.7,
   "playerId": "709ddeff-95a4-467e-8098-64cd1a332828"
  },
  {
   "name": "Michele Latwis",
   "gender": "Female",
   "team": "PKLD",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 0,
   "losses": 4,
   "pointsWon": 62,
   "totalPointsAgainst": 84,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -22,
   "ppg": 15.5,
   "leagueRank": 441,
   "rating": -1.2,
   "ratingGames": 4,
   "confidence": 43,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 1.5,
   "playerId": "4badaa4b-ba4d-4e2b-8bb3-b9d10864142b"
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
   "leagueRank": 426,
   "rating": -0.5,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 2.1,
   "playerId": "7fe8e4a4-6d94-4cb2-831f-23e53d4a8603"
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
   "winPct": 0,
   "diff": -31,
   "ppg": 16.6,
   "leagueRank": 387,
   "rating": -1.1,
   "ratingGames": 7,
   "confidence": 51,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.8,
   "playerId": "b827322d-e01b-4ca5-b8ae-680982fa8cd1"
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
   "winPct": 0,
   "diff": -32,
   "ppg": 14.6,
   "leagueRank": 422,
   "rating": -2.1,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0.6,
   "playerId": "ca8205f9-30ea-4e27-a901-f4156adf6b95"
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
   "leagueRank": 438,
   "rating": -2.3,
   "ratingGames": 5,
   "confidence": 50,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 1.1,
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
   "winPct": 0,
   "diff": -34,
   "ppg": 15.3,
   "leagueRank": 430,
   "rating": -1.2,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 2.1,
   "playerId": "1dbfbe97-7726-41af-82f5-2be34b3badd6"
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
   "leagueRank": 424,
   "rating": -1.8,
   "ratingGames": 5,
   "confidence": 50,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": 1,
   "playerId": "1997e1b5-dfe2-4122-96f5-404f6f4c390d"
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
   "winPct": 0,
   "diff": -38,
   "ppg": 14.7,
   "leagueRank": 437,
   "rating": -2.7,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 1.1,
   "playerId": "0f95f23f-ac68-44b0-81c2-7009fbcee055"
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
   "leagueRank": 432,
   "rating": -3,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 0.7,
   "playerId": "8fb69116-2ad4-417c-ad3a-912a9b13782b"
  },
  {
   "name": "Robert Shea",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 83,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -43,
   "ppg": 13.8,
   "leagueRank": 436,
   "rating": -2.3,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": -2.5,
   "strengthOfOpponents": 0.5,
   "playerId": "c95c4833-a2e9-44ca-8451-b39430659a7e"
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
   "winPct": 0,
   "diff": -44,
   "ppg": 12.2,
   "leagueRank": 451,
   "rating": -3.4,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 1.6,
   "playerId": "11fa899f-b583-4990-a6ee-71f08e643d60"
  },
  {
   "name": "Robin Aiello",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 0,
   "losses": 8,
   "pointsWon": 122,
   "totalPointsAgainst": 168,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 0,
   "diff": -46,
   "ppg": 15.3,
   "leagueRank": 393,
   "rating": -0.8,
   "ratingGames": 8,
   "confidence": 57,
   "strengthOfPartners": -2.2,
   "strengthOfOpponents": 1.2,
   "playerId": "45790302-b906-4a8b-8a2d-08fbfaf6cbad"
  },
  {
   "name": "Christine Levesque",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 0,
   "losses": 8,
   "pointsWon": 122,
   "totalPointsAgainst": 168,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 0,
   "diff": -46,
   "ppg": 15.3,
   "leagueRank": 394,
   "rating": -0.9,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": -2.3,
   "strengthOfOpponents": 1.1,
   "playerId": "e34d4b70-a0fc-4087-8386-98fb172aee4c"
  },
  {
   "name": "Debra Oconnor",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 59,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -46,
   "ppg": 11.8,
   "leagueRank": 450,
   "rating": -1.4,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": 2.4,
   "playerId": "f7c88db9-9ba4-4fb0-993a-1c030f0be6f6"
  },
  {
   "name": "Albert Tiegs",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 58,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -47,
   "ppg": 11.6,
   "leagueRank": 434,
   "rating": -2.4,
   "ratingGames": 5,
   "confidence": 50,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 1.8,
   "playerId": "428e1d85-29dc-43ed-9458-eec3cf6ae52d"
  },
  {
   "name": "Yabing Wang",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 77,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -49,
   "ppg": 12.8,
   "leagueRank": 440,
   "rating": -2.5,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 1.9,
   "playerId": "aece4768-4e30-4684-a619-88ade6c672cf"
  },
  {
   "name": "Tim Lockburner",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 0,
   "losses": 7,
   "pointsWon": 98,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -49,
   "ppg": 14,
   "leagueRank": 425,
   "rating": -2.8,
   "ratingGames": 7,
   "confidence": 56,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 0.6,
   "playerId": "3c881311-2724-4972-bc8e-f3ffcbd51cd0"
  },
  {
   "name": "Michelle Corbett",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton Prime Time",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 0,
   "losses": 8,
   "pointsWon": 118,
   "totalPointsAgainst": 168,
   "mixedWins": 0,
   "mixedLosses": 6,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -50,
   "ppg": 14.8,
   "leagueRank": 402,
   "rating": -1.7,
   "ratingGames": 8,
   "confidence": 59,
   "strengthOfPartners": -3,
   "strengthOfOpponents": 0.3,
   "playerId": "4dc56079-f189-46c7-b2c6-d2951ab05d7e"
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
   "leagueRank": 453,
   "rating": -4,
   "ratingGames": 4,
   "confidence": 43,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 1.6,
   "playerId": "83ef92aa-1e74-4ef1-8a56-ce4458a80528"
  },
  {
   "name": "Amy Condi",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 76,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -50,
   "ppg": 12.7,
   "leagueRank": 445,
   "rating": -3.4,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 1.4,
   "playerId": "626ddb03-dc2f-4bf5-ba36-0119e6e2b557"
  },
  {
   "name": "Roe Palermo",
   "gender": "Female",
   "team": "Premiere Aces",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 0,
   "losses": 8,
   "pointsWon": 115,
   "totalPointsAgainst": 168,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -53,
   "ppg": 14.4,
   "leagueRank": 383,
   "rating": -0.8,
   "ratingGames": 8,
   "confidence": 57,
   "strengthOfPartners": -3.2,
   "strengthOfOpponents": 1.1,
   "playerId": "d86280ad-5733-417d-af40-42a66c14b874"
  },
  {
   "name": "Edward Weinstein",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 73,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -53,
   "ppg": 12.2,
   "leagueRank": 413,
   "rating": -1,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": -2.3,
   "strengthOfOpponents": 2.4,
   "playerId": "faf49383-130d-4d3d-8de0-2348c95fe4e6"
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
   "leagueRank": 439,
   "rating": -3.9,
   "ratingGames": 5,
   "confidence": 49,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": 1,
   "playerId": "3bbb4212-6e2d-4a32-b704-ee264ca9ebad"
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
   "leagueRank": 416,
   "rating": -2.7,
   "ratingGames": 7,
   "confidence": 56,
   "strengthOfPartners": -2.1,
   "strengthOfOpponents": 0.7,
   "playerId": "02318afc-9bde-4df3-a7b3-7f1d1da3186c"
  },
  {
   "name": "Bruce Freedman",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 1,
   "outsideSub": false,
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
   "winPct": 0,
   "diff": -56,
   "ppg": 11.7,
   "leagueRank": 446,
   "rating": -4,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 1,
   "playerId": "7ddf77c0-349d-4332-8209-10b5cc5be62a"
  },
  {
   "name": "Hafeez Saheed",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 9,
   "wins": 0,
   "losses": 9,
   "pointsWon": 133,
   "totalPointsAgainst": 189,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 4,
   "winPct": 0,
   "diff": -56,
   "ppg": 14.8,
   "leagueRank": 406,
   "rating": -2.4,
   "ratingGames": 9,
   "confidence": 63,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.9,
   "playerId": "a0d294b1-27ed-4751-ae6c-eadf62746d20"
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
   "winPct": 0,
   "diff": -57,
   "ppg": 9.6,
   "leagueRank": 452,
   "rating": -3.9,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 1.5,
   "playerId": "7625818c-612a-4d6e-8172-426379bb306a"
  },
  {
   "name": "Gary Leon",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 64,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -62,
   "ppg": 10.7,
   "leagueRank": 447,
   "rating": -4.3,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": -2.2,
   "strengthOfOpponents": 0.5,
   "playerId": "a7163fb2-63f3-46c4-9d0d-b333eea0b503"
  },
  {
   "name": "Zuojun Zhang",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 0,
   "losses": 8,
   "pointsWon": 104,
   "totalPointsAgainst": 168,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -64,
   "ppg": 13,
   "leagueRank": 411,
   "rating": -2.5,
   "ratingGames": 8,
   "confidence": 60,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 1.6,
   "playerId": "19e9d78d-3bda-4887-aca0-30bb81935898"
  },
  {
   "name": "Tina White",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 61,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -65,
   "ppg": 10.2,
   "leagueRank": 449,
   "rating": -4.5,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": 0.7,
   "playerId": "0be5bd1e-33a2-41b0-beaf-fa0c9cbbdafe"
  },
  {
   "name": "Erica Stevens",
   "gender": "Female",
   "team": "Dill Dinkers Newport",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 36,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -69,
   "ppg": 7.2,
   "leagueRank": 444,
   "rating": -4.6,
   "ratingGames": 5,
   "confidence": 49,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 2.1,
   "playerId": "8433ad3d-29ba-48ec-8e0a-2e8552a12fcb"
  },
  {
   "name": "Wendy Seiferheld",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 0,
   "losses": 8,
   "pointsWon": 91,
   "totalPointsAgainst": 168,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -77,
   "ppg": 11.4,
   "leagueRank": 443,
   "rating": -5.6,
   "ratingGames": 8,
   "confidence": 59,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.5,
   "playerId": "5feb4ca5-da15-41eb-abe3-59e229f732da"
  },
  {
   "name": "Angela Chen",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 0,
   "losses": 13,
   "pointsWon": 188,
   "totalPointsAgainst": 273,
   "mixedWins": 0,
   "mixedLosses": 6,
   "genderWins": 0,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 0,
   "diff": -85,
   "ppg": 14.5,
   "leagueRank": 388,
   "rating": -2.1,
   "ratingGames": 13,
   "confidence": 71,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 1.7,
   "playerId": "0eea8d08-e55e-40be-b1cd-4853b2fbb11d"
  },
  {
   "name": "Charles Rhodes",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 0,
   "losses": 10,
   "pointsWon": 115,
   "totalPointsAgainst": 210,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 8,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 0,
   "diff": -95,
   "ppg": 11.5,
   "leagueRank": 403,
   "rating": -2.1,
   "ratingGames": 10,
   "confidence": 65,
   "strengthOfPartners": -2.2,
   "strengthOfOpponents": 2.2,
   "playerId": "974a3164-e331-4631-aa56-fe8b2b0acb2b"
  },
  {
   "name": "Jim Ritchie",
   "gender": "Male",
   "team": "Premiere Aces",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 16,
   "wins": 0,
   "losses": 16,
   "pointsWon": 240,
   "totalPointsAgainst": 336,
   "mixedWins": 0,
   "mixedLosses": 7,
   "genderWins": 0,
   "genderLosses": 9,
   "clutchWins": 0,
   "clutchLosses": 4,
   "winPct": 0,
   "diff": -96,
   "ppg": 15,
   "leagueRank": 379,
   "rating": -3.1,
   "ratingGames": 16,
   "confidence": 75,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.6,
   "playerId": "26593c53-dc79-4970-9b87-82c6fa9b3bb3"
  },
  {
   "name": "Dana Isom",
   "gender": "Female",
   "team": "Dill Dinkers Newport",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 9,
   "wins": 0,
   "losses": 9,
   "pointsWon": 86,
   "totalPointsAgainst": 189,
   "mixedWins": 0,
   "mixedLosses": 5,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -103,
   "ppg": 9.6,
   "leagueRank": 414,
   "rating": -4.5,
   "ratingGames": 9,
   "confidence": 63,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": 1.6,
   "playerId": "b984beff-58a1-46ab-a7f3-4fb6daa871d8"
  },
  {
   "name": "Joe Mccutchon",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 0,
   "losses": 10,
   "pointsWon": 107,
   "totalPointsAgainst": 210,
   "mixedWins": 0,
   "mixedLosses": 5,
   "genderWins": 0,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -103,
   "ppg": 10.7,
   "leagueRank": 409,
   "rating": -3.7,
   "ratingGames": 10,
   "confidence": 65,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 2.1,
   "playerId": "d8b7c10e-d155-4b1f-85e5-a69c47f064ae"
  },
  {
   "name": "Edward Verish",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 0,
   "losses": 11,
   "pointsWon": 126,
   "totalPointsAgainst": 231,
   "mixedWins": 0,
   "mixedLosses": 7,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -105,
   "ppg": 11.5,
   "leagueRank": 428,
   "rating": -4.7,
   "ratingGames": 11,
   "confidence": 68,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": 0.6,
   "playerId": "bcbd0332-5104-40b6-a2a1-78fc174a0392"
  },
  {
   "name": "James Carter",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 0,
   "losses": 16,
   "pointsWon": 222,
   "totalPointsAgainst": 336,
   "mixedWins": 0,
   "mixedLosses": 8,
   "genderWins": 0,
   "genderLosses": 8,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 0,
   "diff": -114,
   "ppg": 13.9,
   "leagueRank": 386,
   "rating": -2.1,
   "ratingGames": 16,
   "confidence": 72,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 1.6,
   "playerId": "812eedea-eef8-4f59-a41b-8c2f02f45fc1"
  },
  {
   "name": "Donna Fama",
   "gender": "Female",
   "team": "Premiere Aces",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 0,
   "losses": 13,
   "pointsWon": 150,
   "totalPointsAgainst": 273,
   "mixedWins": 0,
   "mixedLosses": 6,
   "genderWins": 0,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -123,
   "ppg": 11.5,
   "leagueRank": 408,
   "rating": -5.5,
   "ratingGames": 13,
   "confidence": 69,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 0.5,
   "playerId": "42843773-6096-4a7a-acb6-8be5b875fcf6"
  },
  {
   "name": "Corinne Demeuse",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 0,
   "losses": 14,
   "pointsWon": 167,
   "totalPointsAgainst": 294,
   "mixedWins": 0,
   "mixedLosses": 7,
   "genderWins": 0,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -127,
   "ppg": 11.9,
   "leagueRank": 400,
   "rating": -3.8,
   "ratingGames": 14,
   "confidence": 70,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": 1.3,
   "playerId": "2a820b56-af8a-4856-8db8-fb8e7c133e08"
  },
  {
   "name": "Irene Guile",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 0,
   "losses": 14,
   "pointsWon": 167,
   "totalPointsAgainst": 294,
   "mixedWins": 0,
   "mixedLosses": 7,
   "genderWins": 0,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 0,
   "diff": -127,
   "ppg": 11.9,
   "leagueRank": 397,
   "rating": -3.9,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 1.5,
   "playerId": "ee2b1370-05ac-455a-8be6-d2adf00a4f98"
  }
 ],
 "teams": [
  {
   "name": "Forward",
   "w": 4,
   "l": 0,
   "pf": 2576,
   "pa": 1950,
   "gw": 99,
   "gl": 29,
   "diff": 626,
   "gameDiff": 70,
   "power": 1.7,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": "Southwest",
   "podName": "Southwest",
   "fmt": {
    "mixed": [
     49,
     15
    ],
    "male": [
     21,
     11
    ],
    "female": [
     29,
     3
    ]
   }
  },
  {
   "name": "Pickleball Palace Black",
   "w": 3,
   "l": 0,
   "pf": 1975,
   "pa": 1458,
   "gw": 76,
   "gl": 20,
   "diff": 517,
   "gameDiff": 56,
   "power": 1.5,
   "powerRank": 1,
   "pod": 2,
   "reportedPod": "Northwest",
   "podName": "Northwest",
   "fmt": {
    "mixed": [
     38,
     10
    ],
    "male": [
     18,
     6
    ],
    "female": [
     20,
     4
    ]
   }
  },
  {
   "name": "Flemington Blue",
   "w": 3,
   "l": 0,
   "pf": 1921,
   "pa": 1723,
   "gw": 62,
   "gl": 34,
   "diff": 198,
   "gameDiff": 28,
   "power": 0.9,
   "powerRank": 1,
   "pod": 3,
   "reportedPod": "Southeast",
   "podName": "Northeast / Southeast",
   "fmt": {
    "mixed": [
     35,
     13
    ],
    "male": [
     15,
     9
    ],
    "female": [
     12,
     12
    ]
   }
  },
  {
   "name": "Life Time Red Bank",
   "w": 3,
   "l": 0,
   "pf": 1851,
   "pa": 1679,
   "gw": 56,
   "gl": 40,
   "diff": 172,
   "gameDiff": 16,
   "power": 0.5,
   "powerRank": 2,
   "pod": 3,
   "reportedPod": "Northeast",
   "podName": "Northeast / Southeast",
   "fmt": {
    "mixed": [
     27,
     21
    ],
    "male": [
     12,
     12
    ],
    "female": [
     17,
     7
    ]
   }
  },
  {
   "name": "Bounce Malvern",
   "w": 3,
   "l": 1,
   "pf": 2494,
   "pa": 2191,
   "gw": 85,
   "gl": 43,
   "diff": 303,
   "gameDiff": 42,
   "power": 0.7,
   "powerRank": 4,
   "pod": 1,
   "reportedPod": "Southwest",
   "podName": "Southwest",
   "fmt": {
    "mixed": [
     43,
     21
    ],
    "male": [
     23,
     9
    ],
    "female": [
     19,
     13
    ]
   }
  },
  {
   "name": "PickleRage Union County",
   "w": 3,
   "l": 1,
   "pf": 2511,
   "pa": 2164,
   "gw": 84,
   "gl": 44,
   "diff": 347,
   "gameDiff": 40,
   "power": 1,
   "powerRank": 2,
   "pod": 2,
   "reportedPod": "Northwest",
   "podName": "Northwest",
   "fmt": {
    "mixed": [
     42,
     22
    ],
    "male": [
     23,
     9
    ],
    "female": [
     19,
     13
    ]
   }
  },
  {
   "name": "Picklr Fair Lawn",
   "w": 3,
   "l": 1,
   "pf": 2418,
   "pa": 2298,
   "gw": 76,
   "gl": 52,
   "diff": 120,
   "gameDiff": 24,
   "power": 0.7,
   "powerRank": 3,
   "pod": 2,
   "reportedPod": "Northwest",
   "podName": "Northwest",
   "fmt": {
    "mixed": [
     41,
     23
    ],
    "male": [
     12,
     20
    ],
    "female": [
     23,
     9
    ]
   }
  },
  {
   "name": "Pickleball Kingdom Hamilton Strikers",
   "w": 2,
   "l": 1,
   "pf": 1908,
   "pa": 1675,
   "gw": 63,
   "gl": 33,
   "diff": 233,
   "gameDiff": 30,
   "power": 0.8,
   "powerRank": 2,
   "pod": 3,
   "reportedPod": "Southeast",
   "podName": "Northeast / Southeast",
   "fmt": {
    "mixed": [
     30,
     18
    ],
    "male": [
     18,
     6
    ],
    "female": [
     15,
     9
    ]
   }
  },
  {
   "name": "Dill Dinkers Hatboro",
   "w": 2,
   "l": 1,
   "pf": 1853,
   "pa": 1718,
   "gw": 56,
   "gl": 40,
   "diff": 135,
   "gameDiff": 16,
   "power": 1.2,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": "Southwest",
   "podName": "Southwest",
   "fmt": {
    "mixed": [
     25,
     23
    ],
    "male": [
     14,
     10
    ],
    "female": [
     17,
     7
    ]
   }
  },
  {
   "name": "Jersey Devil",
   "w": 2,
   "l": 1,
   "pf": 1850,
   "pa": 1772,
   "gw": 54,
   "gl": 42,
   "diff": 78,
   "gameDiff": 12,
   "power": 1,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": "Southwest",
   "podName": "Southwest",
   "fmt": {
    "mixed": [
     29,
     19
    ],
    "male": [
     13,
     11
    ],
    "female": [
     12,
     12
    ]
   }
  },
  {
   "name": "ACE Moorestown",
   "w": 2,
   "l": 1,
   "pf": 1835,
   "pa": 1703,
   "gw": 53,
   "gl": 43,
   "diff": 132,
   "gameDiff": 10,
   "power": 0.7,
   "powerRank": 3,
   "pod": 3,
   "reportedPod": "Southeast",
   "podName": "Northeast / Southeast",
   "fmt": {
    "mixed": [
     24,
     24
    ],
    "male": [
     17,
     7
    ],
    "female": [
     12,
     12
    ]
   }
  },
  {
   "name": "PKLD",
   "w": 2,
   "l": 1,
   "pf": 1817,
   "pa": 1747,
   "gw": 53,
   "gl": 43,
   "diff": 70,
   "gameDiff": 10,
   "power": 0.6,
   "powerRank": 1,
   "pod": 3,
   "reportedPod": "Northeast",
   "podName": "Northeast / Southeast",
   "fmt": {
    "mixed": [
     29,
     19
    ],
    "male": [
     13,
     11
    ],
    "female": [
     11,
     13
    ]
   }
  },
  {
   "name": "Mercer Bucks",
   "w": 2,
   "l": 1,
   "pf": 1808,
   "pa": 1756,
   "gw": 51,
   "gl": 45,
   "diff": 52,
   "gameDiff": 6,
   "power": -0.1,
   "powerRank": 4,
   "pod": 3,
   "reportedPod": "Southeast",
   "podName": "Northeast / Southeast",
   "fmt": {
    "mixed": [
     23,
     25
    ],
    "male": [
     14,
     10
    ],
    "female": [
     14,
     10
    ]
   }
  },
  {
   "name": "Allstar Pickler",
   "w": 2,
   "l": 2,
   "pf": 2340,
   "pa": 2342,
   "gw": 63,
   "gl": 65,
   "diff": -2,
   "gameDiff": -2,
   "power": 0.2,
   "powerRank": 5,
   "pod": 2,
   "reportedPod": "Northwest",
   "podName": "Northwest",
   "fmt": {
    "mixed": [
     31,
     33
    ],
    "male": [
     22,
     10
    ],
    "female": [
     10,
     22
    ]
   }
  },
  {
   "name": "Monroe",
   "w": 1,
   "l": 2,
   "pf": 1778,
   "pa": 1770,
   "gw": 49,
   "gl": 47,
   "diff": 8,
   "gameDiff": 2,
   "power": 0.3,
   "powerRank": 3,
   "pod": 3,
   "reportedPod": "Northeast",
   "podName": "Northeast / Southeast",
   "fmt": {
    "mixed": [
     23,
     25
    ],
    "male": [
     10,
     14
    ],
    "female": [
     16,
     8
    ]
   }
  },
  {
   "name": "Premiere Dinkers",
   "w": 1,
   "l": 2,
   "pf": 1798,
   "pa": 1841,
   "gw": 46,
   "gl": 50,
   "diff": -43,
   "gameDiff": -4,
   "power": -0.3,
   "powerRank": 5,
   "pod": 3,
   "reportedPod": "Northeast",
   "podName": "Northeast / Southeast",
   "fmt": {
    "mixed": [
     24,
     24
    ],
    "male": [
     14,
     10
    ],
    "female": [
     8,
     16
    ]
   }
  },
  {
   "name": "One Love",
   "w": 1,
   "l": 2,
   "pf": 1768,
   "pa": 1836,
   "gw": 45,
   "gl": 51,
   "diff": -68,
   "gameDiff": -6,
   "power": -0.1,
   "powerRank": 4,
   "pod": 3,
   "reportedPod": "Northeast",
   "podName": "Northeast / Southeast",
   "fmt": {
    "mixed": [
     23,
     25
    ],
    "male": [
     14,
     10
    ],
    "female": [
     8,
     16
    ]
   }
  },
  {
   "name": "Colts Neck Racquet Club",
   "w": 1,
   "l": 2,
   "pf": 1714,
   "pa": 1853,
   "gw": 39,
   "gl": 57,
   "diff": -139,
   "gameDiff": -18,
   "power": -0.4,
   "powerRank": 6,
   "pod": 3,
   "reportedPod": "Northeast",
   "podName": "Northeast / Southeast",
   "fmt": {
    "mixed": [
     18,
     30
    ],
    "male": [
     9,
     15
    ],
    "female": [
     12,
     12
    ]
   }
  },
  {
   "name": "Pickleball Palace Blue",
   "w": 1,
   "l": 3,
   "pf": 2359,
   "pa": 2349,
   "gw": 65,
   "gl": 63,
   "diff": 10,
   "gameDiff": 2,
   "power": 0.3,
   "powerRank": 4,
   "pod": 2,
   "reportedPod": "Northwest",
   "podName": "Northwest",
   "fmt": {
    "mixed": [
     28,
     36
    ],
    "male": [
     18,
     14
    ],
    "female": [
     19,
     13
    ]
   }
  },
  {
   "name": "Bounce Philly",
   "w": 1,
   "l": 3,
   "pf": 2150,
   "pa": 2483,
   "gw": 43,
   "gl": 85,
   "diff": -333,
   "gameDiff": -42,
   "power": -0.2,
   "powerRank": 5,
   "pod": 1,
   "reportedPod": "Southwest",
   "podName": "Southwest",
   "fmt": {
    "mixed": [
     22,
     42
    ],
    "male": [
     15,
     17
    ],
    "female": [
     6,
     26
    ]
   }
  },
  {
   "name": "Pickleball Kingdom Hamilton Prime Time",
   "w": 0,
   "l": 3,
   "pf": 1599,
   "pa": 1922,
   "gw": 32,
   "gl": 64,
   "diff": -323,
   "gameDiff": -32,
   "power": -1.1,
   "powerRank": 6,
   "pod": 3,
   "reportedPod": "Southeast",
   "podName": "Northeast / Southeast",
   "fmt": {
    "mixed": [
     20,
     28
    ],
    "male": [
     3,
     21
    ],
    "female": [
     9,
     15
    ]
   }
  },
  {
   "name": "Players Courtyard",
   "w": 0,
   "l": 4,
   "pf": 2154,
   "pa": 2517,
   "gw": 39,
   "gl": 89,
   "diff": -363,
   "gameDiff": -50,
   "power": -0.5,
   "powerRank": 6,
   "pod": 1,
   "reportedPod": "Southwest",
   "podName": "Southwest",
   "fmt": {
    "mixed": [
     20,
     44
    ],
    "male": [
     10,
     22
    ],
    "female": [
     9,
     23
    ]
   }
  },
  {
   "name": "Flemington Green",
   "w": 0,
   "l": 3,
   "pf": 1622,
   "pa": 1914,
   "gw": 27,
   "gl": 69,
   "diff": -292,
   "gameDiff": -42,
   "power": -0.7,
   "powerRank": 5,
   "pod": 3,
   "reportedPod": "Southeast",
   "podName": "Northeast / Southeast",
   "fmt": {
    "mixed": [
     12,
     36
    ],
    "male": [
     5,
     19
    ],
    "female": [
     10,
     14
    ]
   }
  },
  {
   "name": "Pickleball Kingdom Hillsborough",
   "w": 0,
   "l": 3,
   "pf": 1397,
   "pa": 1977,
   "gw": 13,
   "gl": 83,
   "diff": -580,
   "gameDiff": -70,
   "power": -1.5,
   "powerRank": 6,
   "pod": 2,
   "reportedPod": "Northwest",
   "podName": "Northwest",
   "fmt": {
    "mixed": [
     8,
     40
    ],
    "male": [
     1,
     23
    ],
    "female": [
     4,
     20
    ]
   }
  },
  {
   "name": "Dill Dinkers Newport",
   "w": 0,
   "l": 2,
   "pf": 867,
   "pa": 1313,
   "gw": 8,
   "gl": 56,
   "diff": -446,
   "gameDiff": -48,
   "power": -1.4,
   "powerRank": 7,
   "pod": 1,
   "reportedPod": "Southwest",
   "podName": "Southwest",
   "fmt": {
    "mixed": [
     4,
     28
    ],
    "male": [
     0,
     16
    ],
    "female": [
     4,
     12
    ]
   }
  },
  {
   "name": "Premiere Aces",
   "w": 0,
   "l": 2,
   "pf": 929,
   "pa": 1341,
   "gw": 7,
   "gl": 57,
   "diff": -412,
   "gameDiff": -50,
   "power": -2.1,
   "powerRank": 7,
   "pod": 2,
   "reportedPod": "Northwest",
   "podName": "Northwest",
   "fmt": {
    "mixed": [
     4,
     28
    ],
    "male": [
     2,
     14
    ],
    "female": [
     1,
     15
    ]
   }
  }
 ],
 "duos": [
  {
   "a": "Dennis Tenorio",
   "b": "Maria Fanfa",
   "team": "Picklr Fair Lawn",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 2.6,
   "avgActual": 7,
   "avgExpected": 2.4,
   "aId": "2563bcb0-eff4-4311-8e03-9a21b61691a0",
   "bId": "98bfa16f-b5e6-4534-a4b9-5b84267284d4"
  },
  {
   "a": "Paul Phillips",
   "b": "Sheila Curran",
   "team": "Flemington Blue",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.6,
   "avgActual": 8.7,
   "avgExpected": 2.6,
   "aId": "9ef3e1b1-2818-46f0-ab0b-2ee190d176b3",
   "bId": "bbb3cbbd-edc3-4fa6-adef-800076f97402"
  },
  {
   "a": "Kim Slomeana",
   "b": "Jennifer Laroque",
   "team": "Forward",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.6,
   "avgActual": 12,
   "avgExpected": 5.9,
   "aId": "2b6f81eb-315c-4313-b515-d21d76d5f3e8",
   "bId": "e870b473-4955-4ccf-82ce-88f72bf2d917"
  },
  {
   "a": "Greg Taylor",
   "b": "Dennis Higman",
   "team": "ACE Moorestown",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 2.2,
   "avgActual": 9.4,
   "avgExpected": 5.4,
   "aId": "701f7029-4353-4548-b8db-b7ac7ed3d847",
   "bId": "b8fabebb-fd0f-49a8-929a-defbac098e43"
  },
  {
   "a": "Cheryl Tarby",
   "b": "Mary Harmon",
   "team": "Mercer Bucks",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.2,
   "avgActual": 6,
   "avgExpected": 0.9,
   "aId": "c131fed2-9bcb-427c-99c1-b507dda92320",
   "bId": "fc528b4b-0dfe-4334-9619-0abce2d33972"
  },
  {
   "a": "Tracy Narag",
   "b": "Frances Smith",
   "team": "Pickleball Palace Blue",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.2,
   "avgActual": 5.7,
   "avgExpected": 0.5,
   "aId": "bc3af4c8-b7d2-4f23-a2c2-c7d04191ac89",
   "bId": "dede68c9-f6a4-40b6-8a2c-2eca456d4151"
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
   "avgExpected": 7,
   "aId": "9b6e4166-d6a4-4e8c-812b-65e4d35477f3",
   "bId": "ebc26b7d-1ba3-4cf6-a11f-ad6e79c2ff1b"
  },
  {
   "a": "Gregory Mcquibben",
   "b": "Mary Foster",
   "team": "Pickleball Kingdom Hamilton Prime Time",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.9,
   "avgActual": 1.7,
   "avgExpected": -2.7,
   "aId": "10110730-45a5-496c-94db-748fbe7f5bdf",
   "bId": "71b7fe55-42fb-4b59-a77c-c14d62384125"
  },
  {
   "a": "Krishma Patel",
   "b": "Donna Stone",
   "team": "Pickleball Kingdom Hamilton Strikers",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.9,
   "avgActual": 7.8,
   "avgExpected": 4,
   "aId": "80331047-7a76-4c4b-9075-b40e26933c6f",
   "bId": "af8a6e4b-f588-45db-906e-5766f1307e50"
  },
  {
   "a": "Audrey Brisson",
   "b": "Mark Skolnik",
   "team": "Jersey Devil",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.8,
   "avgActual": 3.7,
   "avgExpected": -0.5,
   "aId": "1bec31ec-6396-4b0a-826c-831ae5df347e",
   "bId": "b2f66825-4c89-450c-ae68-db22d0418c80"
  },
  {
   "a": "Grace Brennan",
   "b": "Tao Zhu",
   "team": "Flemington Green",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.8,
   "avgActual": 5.7,
   "avgExpected": 1.6,
   "aId": "15778391-96b7-4888-9d08-d63b96e104ca",
   "bId": "fce9f902-9a8a-4ee0-8faa-eee3226b7b91"
  },
  {
   "a": "Tinglan Zhao",
   "b": "Joan Rudderow",
   "team": "ACE Moorestown",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.8,
   "avgActual": 5.3,
   "avgExpected": 1.7,
   "aId": "5f2e3f29-7b61-4d23-ba5a-23bfe5eac362",
   "bId": "dca2ce61-749b-421c-9205-0a16fc656a36"
  },
  {
   "a": "Scott Gardo",
   "b": "Dan Callaghan",
   "team": "Forward",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.8,
   "avgActual": 10.3,
   "avgExpected": 6.2,
   "aId": "2580158f-1c0c-4a5a-8a0c-b48d2c1f0067",
   "bId": "d1e5126f-1ca9-4bc2-a745-1922b42893ae"
  },
  {
   "a": "Jennifer Makfinsky",
   "b": "Steven Truzzolino",
   "team": "PKLD",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.7,
   "avgActual": 8.3,
   "avgExpected": 4.9,
   "aId": "67fe047d-4c6f-4a2b-9946-afdd938d18c8",
   "bId": "91c0c6ae-3f05-46c0-b1aa-6f328a4bf820"
  },
  {
   "a": "Kristin Duva",
   "b": "Cheryl Minerowicz",
   "team": "Pickleball Palace Black",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.7,
   "avgActual": 9.7,
   "avgExpected": 5.8,
   "aId": "33bedbfd-6715-4614-8662-650a8bc4c678",
   "bId": "98cf9a34-6d8e-4aed-81d1-1a6f2fe864f2"
  },
  {
   "a": "Srinatha Nanjundaiah",
   "b": "Subhas Desai",
   "team": "Pickleball Kingdom Hamilton Strikers",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.6,
   "avgActual": 8.5,
   "avgExpected": 5.3,
   "aId": "2fa3bb27-766b-4a83-b0b4-0ecffc01b778",
   "bId": "b9a91028-9ddd-410a-a8a7-84a23b0f577b"
  },
  {
   "a": "Jennifer Laroque",
   "b": "Carolyn Laverdiere",
   "team": "Forward",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.6,
   "avgActual": 10.7,
   "avgExpected": 7,
   "aId": "e870b473-4955-4ccf-82ce-88f72bf2d917",
   "bId": "ebc26b7d-1ba3-4cf6-a11f-ad6e79c2ff1b"
  },
  {
   "a": "Crista Renauro",
   "b": "Chris Allander",
   "team": "Forward",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.6,
   "avgActual": 9.5,
   "avgExpected": 6.4,
   "aId": "21785bf3-2af4-4120-a15c-d7824a55b711",
   "bId": "7d76fb68-9895-40c5-b321-f5d5d64d2b02"
  },
  {
   "a": "Lynn Snyder",
   "b": "Anuraag Verma",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.5,
   "avgActual": 10.7,
   "avgExpected": 7.2,
   "aId": "1973cf93-7507-478a-b457-4fa7ec0951af",
   "bId": "c6b0c203-9659-494f-993b-dadd300ed3e8"
  },
  {
   "a": "Mark Zamkoff",
   "b": "Daniel Ryan",
   "team": "Life Time Red Bank",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 3,
   "avgExpected": 0,
   "aId": "4e4deaa6-3de9-450b-bfb2-1d86752d92ab",
   "bId": "d3981774-293f-436c-96ce-b08158d31860"
  },
  {
   "a": "Craig Rathjen",
   "b": "Michael Hsieh",
   "team": "Picklr Fair Lawn",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 3,
   "avgExpected": 0,
   "aId": "51197be0-3fa1-4888-b0be-df5af704e8a4",
   "bId": "df366b7b-3468-492e-ae2f-b7ad65d5439e"
  },
  {
   "a": "Gail Hannagan",
   "b": "Sarah Stangota",
   "team": "Flemington Blue",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 3.3,
   "avgExpected": -0.2,
   "aId": "3d17e05b-9fe9-4d04-a0c7-4e03c1e6530e",
   "bId": "80fbbb8f-8f4d-4a6f-bc08-925f29df32ea"
  },
  {
   "a": "Michael Burns",
   "b": "Wen Chang",
   "team": "Bounce Philly",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.5,
   "avgActual": 8.7,
   "avgExpected": 5.2,
   "aId": "8142380a-a08e-4510-9c99-7bc928b665ed",
   "bId": "9a0d5103-b8d7-4b5b-a890-59a6ec5fb115"
  },
  {
   "a": "Scott Gardo",
   "b": "Lori Wild",
   "team": "Forward",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.5,
   "avgActual": 6,
   "avgExpected": 2.4,
   "aId": "2580158f-1c0c-4a5a-8a0c-b48d2c1f0067",
   "bId": "b1066a81-7537-4512-939d-5acbf11ef9aa"
  },
  {
   "a": "Jake Denooyer",
   "b": "James Azarowicz",
   "team": "Pickleball Palace Black",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 12.3,
   "avgExpected": 9,
   "aId": "a314079a-16b7-42f5-be34-41e1672f7377",
   "bId": "c22c2b8e-2758-4b56-b8e4-6758dc47a61d"
  },
  {
   "a": "Marcia Rathjen",
   "b": "Patty Direzze",
   "team": "Picklr Fair Lawn",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 5.3,
   "avgExpected": 2.5,
   "aId": "713e7456-5ec1-4fa6-ac0f-bb04c2a56c18",
   "bId": "826ca41a-b56b-4688-9a30-330a67e541f3"
  },
  {
   "a": "Krishma Patel",
   "b": "Lynette Pil",
   "team": "Pickleball Kingdom Hamilton Strikers",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 7,
   "avgExpected": 3.7,
   "aId": "80331047-7a76-4c4b-9075-b40e26933c6f",
   "bId": "92b709b8-b68c-436f-95e5-d9db2908cc3c"
  },
  {
   "a": "Xiaojun Yuan",
   "b": "Suzanne Garcia",
   "team": "Players Courtyard",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.3,
   "avgActual": 9.8,
   "avgExpected": 7.1,
   "aId": "8f21d0e1-3bff-42d5-a59a-f8240b2b7eb2",
   "bId": "f3172220-bb2d-4714-892c-5bb3d728239e"
  },
  {
   "a": "Gregory Mcquibben",
   "b": "Fritz Jean-Brian",
   "team": "Pickleball Kingdom Hamilton Prime Time",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.3,
   "avgActual": -1,
   "avgExpected": -4,
   "aId": "10110730-45a5-496c-94db-748fbe7f5bdf",
   "bId": "cf7d6ea4-8472-467c-9685-7ef589f5f2e6"
  },
  {
   "a": "Kathi Savage",
   "b": "John Danks",
   "team": "PickleRage Union County",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.3,
   "avgActual": 11.3,
   "avgExpected": 8.3,
   "aId": "304fa353-a564-41f6-ba23-ed9c19ace5b9",
   "bId": "f2e5778f-44c1-46ed-b27d-f3728fa84378"
  },
  {
   "a": "Marcia Rathjen",
   "b": "Olga Sedycias",
   "team": "Picklr Fair Lawn",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.3,
   "avgActual": 7,
   "avgExpected": 4,
   "aId": "713e7456-5ec1-4fa6-ac0f-bb04c2a56c18",
   "bId": "7c14ace8-2c5f-416f-8619-efa19901a78c"
  },
  {
   "a": "Karen Rosenberg",
   "b": "Jennifer Makfinsky",
   "team": "PKLD",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 2.8,
   "avgExpected": 0.7,
   "aId": "17fc1097-95ae-4095-a83d-ca9124bef274",
   "bId": "67fe047d-4c6f-4a2b-9946-afdd938d18c8"
  },
  {
   "a": "Jennifer Makfinsky",
   "b": "Antoinette Mccormick",
   "team": "PKLD",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 4.7,
   "avgExpected": 1.9,
   "aId": "67fe047d-4c6f-4a2b-9946-afdd938d18c8",
   "bId": "71a2741e-56bc-4b1f-ad9a-13ce0a7ca9b8"
  },
  {
   "a": "Linda Bozzo",
   "b": "John Danks",
   "team": "PickleRage Union County",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 8.3,
   "avgExpected": 5.4,
   "aId": "94c45058-cae5-4085-ad9e-684309568903",
   "bId": "f2e5778f-44c1-46ed-b27d-f3728fa84378"
  },
  {
   "a": "Gail Hannagan",
   "b": "Eric Brezina",
   "team": "Flemington Blue",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 3.7,
   "avgExpected": 0.8,
   "aId": "3d17e05b-9fe9-4d04-a0c7-4e03c1e6530e",
   "bId": "717be0e6-148f-4bab-a433-22e4f97d5c47"
  },
  {
   "a": "Joseph Romagnolo",
   "b": "David Cardinale",
   "team": "Premiere Dinkers",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 7,
   "avgExpected": 4.3,
   "aId": "1972795c-9185-4d19-8352-6244573e3ca5",
   "bId": "45665a14-3a51-4fa1-a210-314d4f39f720"
  },
  {
   "a": "Anthony Manzo",
   "b": "Filomena Rega",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 4.3,
   "avgExpected": 1.6,
   "aId": "031d7489-2ebb-4fb5-959b-88a86d0fff46",
   "bId": "b466c6a0-1ec9-4148-819b-972cc37ca5ec"
  },
  {
   "a": "Jen Ritchie",
   "b": "John Hans",
   "team": "Premiere Aces",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.2,
   "avgActual": -4.7,
   "avgExpected": -7.5,
   "aId": "89740069-e9bc-4808-9d13-e7365f65169d",
   "bId": "ffde9017-6c1a-4fb4-947d-6a46338593ce"
  },
  {
   "a": "Dean Lim",
   "b": "Rosa Tenan",
   "team": "Pickleball Kingdom Hamilton Strikers",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 5.7,
   "avgExpected": 2.8,
   "aId": "9d8ac19c-2a48-423f-a8ac-56d66cb6ccff",
   "bId": "f22a22d7-f20d-459b-a7b4-3612b4ff9291"
  },
  {
   "a": "Eldon Carandan",
   "b": "Maria Fanfa",
   "team": "Picklr Fair Lawn",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 4,
   "avgExpected": 1.7,
   "aId": "888253bb-161e-4029-9170-1f7002abdbee",
   "bId": "98bfa16f-b5e6-4534-a4b9-5b84267284d4"
  },
  {
   "a": "Frank Iacono",
   "b": "Frank Leccese",
   "team": "Colts Neck Racquet Club",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 2,
   "avgExpected": -0.7,
   "aId": "2cccc005-6a1a-4566-98be-15805e750e49",
   "bId": "3250f1d1-8527-44ee-9d87-114fa4183213"
  },
  {
   "a": "Amy Farrell",
   "b": "Filomena Rega",
   "team": "Monroe",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 4.3,
   "avgExpected": 2.4,
   "aId": "73509e7b-7c99-4b1e-998c-a9de94daa2a2",
   "bId": "b466c6a0-1ec9-4148-819b-972cc37ca5ec"
  },
  {
   "a": "Craig Mehnert",
   "b": "Nghia Bui",
   "team": "Players Courtyard",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.1,
   "avgActual": 4,
   "avgExpected": 1.7,
   "aId": "371edee5-b6ce-436c-b3ef-b93807443dd8",
   "bId": "c8d634ab-9452-4ea2-8b66-20db1aca3a43"
  },
  {
   "a": "Franchesa Mclean",
   "b": "Fritz Jean-Brian",
   "team": "Pickleball Kingdom Hamilton Prime Time",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1,
   "avgActual": 1.7,
   "avgExpected": -0.6,
   "aId": "84a3279f-7449-4f3a-9d37-1cb1bfe2c45e",
   "bId": "cf7d6ea4-8472-467c-9685-7ef589f5f2e6"
  },
  {
   "a": "Matt Becker",
   "b": "Carolyn King",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1,
   "avgActual": 0.7,
   "avgExpected": -1.6,
   "aId": "604007f9-8645-4f0f-9909-e3a9b2fa6dd7",
   "bId": "a22b2393-4aae-4ee0-8e9c-7e3b386f9f0e"
  },
  {
   "a": "Karen Chin",
   "b": "John Rogers",
   "team": "Premiere Dinkers",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1,
   "avgActual": 3.3,
   "avgExpected": 1.3,
   "aId": "0685c1ca-d8fb-4a1d-a039-8be856ce5c56",
   "bId": "45bc6397-1703-4a4b-bde7-fda65905fe3a"
  },
  {
   "a": "Louis Sapirman",
   "b": "Ed Amato",
   "team": "PickleRage Union County",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1,
   "avgActual": 5.4,
   "avgExpected": 3.6,
   "aId": "2a05bac5-f8e0-4e68-928e-bb0ac69f1921",
   "bId": "ce893b2d-f5ea-40aa-98c0-d67402405b64"
  },
  {
   "a": "Eleni Leone",
   "b": "Anthony Leone",
   "team": "Flemington Blue",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1,
   "avgActual": 4.3,
   "avgExpected": 2,
   "aId": "2e5dc033-4c92-4dbf-b52a-5e29efc8d009",
   "bId": "a8715ef7-f760-4097-b642-eae44c0a5de7"
  },
  {
   "a": "Bill Venella",
   "b": "Ellen Rubiato",
   "team": "Forward",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1,
   "avgActual": 7.8,
   "avgExpected": 6.1,
   "aId": "357a050a-a8ad-4998-a511-814c7c69caad",
   "bId": "9b6e4166-d6a4-4e8c-812b-65e4d35477f3"
  },
  {
   "a": "Tami Mohney",
   "b": "Howard Eng",
   "team": "Mercer Bucks",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 1,
   "avgActual": -0.5,
   "avgExpected": -2.5,
   "aId": "639b104c-36e6-48d0-9948-b17158f92030",
   "bId": "7727f912-4c91-468e-bc39-42aa85e084ab"
  },
  {
   "a": "Steven Heller",
   "b": "Tinglan Zhao",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1,
   "avgActual": 6,
   "avgExpected": 3.7,
   "aId": "344856f5-8559-411b-8fe7-2b5405bb9db6",
   "bId": "5f2e3f29-7b61-4d23-ba5a-23bfe5eac362"
  },
  {
   "a": "Crista Renauro",
   "b": "Jennifer Laroque",
   "team": "Forward",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1,
   "avgActual": 8,
   "avgExpected": 5.6,
   "aId": "21785bf3-2af4-4120-a15c-d7824a55b711",
   "bId": "e870b473-4955-4ccf-82ce-88f72bf2d917"
  },
  {
   "a": "Michele Collins",
   "b": "Erik Harrison",
   "team": "One Love",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 1.7,
   "avgExpected": -0.5,
   "aId": "b2b07a6e-b0b0-4040-94ae-9f93af110941",
   "bId": "f988ea5f-06b9-477c-88ee-1563d1c8ecfa"
  },
  {
   "a": "Warren Howard",
   "b": "Judy Williamson",
   "team": "Pickleball Kingdom Hamilton Prime Time",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.9,
   "avgActual": -0.3,
   "avgExpected": -2.4,
   "aId": "b5b20410-43ee-4dc8-bb2b-dadb159ca3f1",
   "bId": "e646e3ee-5e39-48c7-933f-e567af0de814"
  },
  {
   "a": "Dajie （David） Yang",
   "b": "Jessie Fang",
   "team": "Allstar Pickler",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 1,
   "avgExpected": -0.8,
   "aId": "b153649d-e405-4192-85f9-c1871ba0eba0",
   "bId": "fa9c688a-62ba-4bd3-806a-b47b05235128"
  },
  {
   "a": "Paul Mcalary",
   "b": "Michael Burns",
   "team": "Bounce Philly",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 1.3,
   "avgExpected": -0.7,
   "aId": "4b2fda63-a536-4730-9140-4a372b1726e9",
   "bId": "8142380a-a08e-4510-9c99-7bc928b665ed"
  },
  {
   "a": "Nicole Tarallo",
   "b": "Donna Facconerusin",
   "team": "Life Time Red Bank",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.8,
   "avgActual": 5,
   "avgExpected": 3.2,
   "aId": "d16138ba-5e8f-4f9e-9464-478ba4320c11",
   "bId": "e81f3561-3e91-48aa-8430-f177ad30248b"
  },
  {
   "a": "Shari Gagliardo",
   "b": "Frank Iacono",
   "team": "Colts Neck Racquet Club",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.8,
   "avgActual": -0.3,
   "avgExpected": -2.3,
   "aId": "17772fc9-b0bb-456e-82a9-9b25ff7fbf09",
   "bId": "2cccc005-6a1a-4566-98be-15805e750e49"
  },
  {
   "a": "Bart Van Der Gaag",
   "b": "Elliot Fishman",
   "team": "PKLD",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.8,
   "avgActual": 2.8,
   "avgExpected": 1.4,
   "aId": "24b5e97e-55d9-4d59-82ca-3b616f25d3a1",
   "bId": "3617a420-089d-408c-abf0-c3894b33a47e"
  },
  {
   "a": "Irish Lee",
   "b": "Lingshan Hsieh",
   "team": "Allstar Pickler",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 2.7,
   "avgExpected": 0.7,
   "aId": "1b93f56f-c9be-4d20-b0a4-e155b558a11c",
   "bId": "7fe3ca78-6219-4723-a8ad-49bce55b0238"
  },
  {
   "a": "Jeffrey Hartford",
   "b": "Eric Brezina",
   "team": "Flemington Blue",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 4.2,
   "avgExpected": 2.8,
   "aId": "3801a1f8-353e-4ecf-ada7-e8ed5ff23235",
   "bId": "717be0e6-148f-4bab-a433-22e4f97d5c47"
  },
  {
   "a": "Tracy Waffenfeld",
   "b": "John Cusano",
   "team": "Pickleball Palace Blue",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 3.7,
   "avgExpected": 1.8,
   "aId": "2bc6c3c4-805a-4584-bbb9-6185448a3298",
   "bId": "809fbee0-ae20-4726-9468-9e0e23f6696a"
  },
  {
   "a": "Frank Leccese",
   "b": "Cindy Rossine",
   "team": "Colts Neck Racquet Club",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 2.3,
   "avgExpected": 0.6,
   "aId": "3250f1d1-8527-44ee-9d87-114fa4183213",
   "bId": "c26c3257-4a5f-47e7-80cb-5eef4fe2868c"
  },
  {
   "a": "Barbara Hand",
   "b": "Andria Lochtenbergh",
   "team": "Bounce Philly",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.8,
   "avgActual": 0.3,
   "avgExpected": -1.3,
   "aId": "a04312ab-d364-478d-8329-503d278a6824",
   "bId": "b624b900-f2f1-48d4-9e19-c0ff0238d34d"
  },
  {
   "a": "Matthew Memmo",
   "b": "Zalene Corey",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 7,
   "avgExpected": 5.5,
   "aId": "6f3b12bf-032c-458d-bd38-5f9dbe04d374",
   "bId": "e0ffa27a-6b29-48f8-b162-154c995b3d97"
  },
  {
   "a": "Lingshan Hsieh",
   "b": "Dajie （David） Yang",
   "team": "Allstar Pickler",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.7,
   "avgActual": 0.5,
   "avgExpected": -0.9,
   "aId": "7fe3ca78-6219-4723-a8ad-49bce55b0238",
   "bId": "b153649d-e405-4192-85f9-c1871ba0eba0"
  },
  {
   "a": "Lingshan Hsieh",
   "b": "Alex Chang",
   "team": "Allstar Pickler",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 6.3,
   "avgExpected": 4.7,
   "aId": "7fe3ca78-6219-4723-a8ad-49bce55b0238",
   "bId": "93c5b40e-d4ff-4fc5-b7fa-de1e6a82110b"
  },
  {
   "a": "Manuela Caiati",
   "b": "Leah Greenstein",
   "team": "Flemington Green",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.7,
   "avgActual": -2.5,
   "avgExpected": -4,
   "aId": "055f3bbb-3d19-4709-b29e-0e4ad54ba0cb",
   "bId": "ca06b5ce-3001-408e-bdc6-9e183022b9f3"
  },
  {
   "a": "Lisa Angelini",
   "b": "Jerry Margulies",
   "team": "Mercer Bucks",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.7,
   "avgActual": 3.7,
   "avgExpected": 2.1,
   "aId": "b79cef1c-cecc-48d4-9b14-4505bca1cce9",
   "bId": "e5bf1611-3d03-4600-9e72-301e91a9db18"
  },
  {
   "a": "Craig Mehnert",
   "b": "Xiaojun Yuan",
   "team": "Players Courtyard",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.7,
   "avgActual": 2,
   "avgExpected": 0.7,
   "aId": "371edee5-b6ce-436c-b3ef-b93807443dd8",
   "bId": "8f21d0e1-3bff-42d5-a59a-f8240b2b7eb2"
  },
  {
   "a": "Harihar Chudamani",
   "b": "Anuraag Verma",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 6.7,
   "avgExpected": 5.1,
   "aId": "06b13278-0d0c-40c5-b2f2-acd50b8bfc36",
   "bId": "c6b0c203-9659-494f-993b-dadd300ed3e8"
  },
  {
   "a": "Cheryl Parker",
   "b": "Deirdre Monahan",
   "team": "One Love",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.6,
   "avgActual": -0.7,
   "avgExpected": -2,
   "aId": "1409bca4-8901-4ba4-8b38-c139781f5e07",
   "bId": "6e94f49e-e75e-4061-8ca2-967f52f4eb07"
  },
  {
   "a": "Erica Ruggieri",
   "b": "Caroline Kinlin",
   "team": "Life Time Red Bank",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.6,
   "avgActual": 5.3,
   "avgExpected": 3.9,
   "aId": "c9070b8b-ce6e-46e7-a724-bd168579c596",
   "bId": "d5933ee7-ffb8-4b4a-92cd-1a28579372d6"
  },
  {
   "a": "Anne Buckley",
   "b": "Theresa Corderi",
   "team": "Pickleball Palace Black",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 0.6,
   "avgActual": 7.6,
   "avgExpected": 6.4,
   "aId": "07881006-c083-4729-8424-410aeee08940",
   "bId": "5a35b4ac-7b94-48d4-bd8f-d9c327751821"
  },
  {
   "a": "Fritz Jean-Brian",
   "b": "Luz Bonner",
   "team": "Pickleball Kingdom Hamilton Prime Time",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 0.3,
   "avgExpected": -1,
   "aId": "cf7d6ea4-8472-467c-9685-7ef589f5f2e6",
   "bId": "ef6c941f-29da-4723-95a8-63a508079685"
  },
  {
   "a": "Bobbi Rentko",
   "b": "Freddy Alicea",
   "team": "PKLD",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.6,
   "avgActual": -0.2,
   "avgExpected": -1.4,
   "aId": "66469f12-c5eb-4a44-97b6-c40c3fbbf89c",
   "bId": "66505a6b-2dfe-4454-b71b-e3fdd2b7a692"
  },
  {
   "a": "Linda Bozzo",
   "b": "Teresa Carr",
   "team": "PickleRage Union County",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 3.3,
   "avgExpected": 2,
   "aId": "94c45058-cae5-4085-ad9e-684309568903",
   "bId": "b84f31ed-afcf-4045-b351-8ece85cdeb26"
  },
  {
   "a": "Chuck Silvester",
   "b": "Eldon Carandan",
   "team": "Picklr Fair Lawn",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 2.8,
   "avgExpected": 1.5,
   "aId": "3911a60f-cab7-4b28-9ba0-244c000980ba",
   "bId": "888253bb-161e-4029-9170-1f7002abdbee"
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
   "avgExpected": 1.5,
   "aId": "1973cf93-7507-478a-b457-4fa7ec0951af",
   "bId": "90e0fbef-1218-4eb3-887f-b9cc31e73163"
  },
  {
   "a": "James Carter",
   "b": "Irene Guile",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.5,
   "avgActual": -8,
   "avgExpected": -9.2,
   "aId": "812eedea-eef8-4f59-a41b-8c2f02f45fc1",
   "bId": "ee2b1370-05ac-455a-8be6-d2adf00a4f98"
  },
  {
   "a": "Anne Buckley",
   "b": "James Azarowicz",
   "team": "Pickleball Palace Black",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 9.5,
   "avgExpected": 8.5,
   "aId": "07881006-c083-4729-8424-410aeee08940",
   "bId": "c22c2b8e-2758-4b56-b8e4-6758dc47a61d"
  },
  {
   "a": "Daniel Brennan",
   "b": "Gina Lavignera",
   "team": "Colts Neck Racquet Club",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.5,
   "avgActual": -0.3,
   "avgExpected": -1.5,
   "aId": "11ea22dc-50d3-47ee-8189-89c6f976ca51",
   "bId": "a8f8cba7-d3be-4df0-8d9c-9608f102859a"
  },
  {
   "a": "Jason Belmont",
   "b": "Jean Knab",
   "team": "Mercer Bucks",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 3.3,
   "avgExpected": 2.2,
   "aId": "a1df4f80-0b37-4f8b-a71f-b11b6eb85f4c",
   "bId": "abce612c-0edd-4b72-ab5a-f1983c38f545"
  },
  {
   "a": "Bill Venella",
   "b": "Chris Allander",
   "team": "Forward",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 11.7,
   "avgExpected": 10.4,
   "aId": "357a050a-a8ad-4998-a511-814c7c69caad",
   "bId": "7d76fb68-9895-40c5-b321-f5d5d64d2b02"
  },
  {
   "a": "Eden Paredes",
   "b": "Zalene Corey",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 5,
   "avgExpected": 3.8,
   "aId": "6feb852e-6d64-42d2-8135-3c625b7a0af3",
   "bId": "e0ffa27a-6b29-48f8-b162-154c995b3d97"
  },
  {
   "a": "Betsy Hansbury",
   "b": "Adele Hackney",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 4.3,
   "avgExpected": 3.1,
   "aId": "708f285b-0855-47a2-a8b4-9c1459f65781",
   "bId": "c1e41980-e98d-4208-aa10-dc04e407cf8f"
  },
  {
   "a": "Tracy Giunta",
   "b": "Tom Giunta",
   "team": "Players Courtyard",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.4,
   "avgActual": -4.3,
   "avgExpected": -5.3,
   "aId": "0053115a-f6c0-43c0-ab0e-ec6abf16bc32",
   "bId": "951454ae-d2ba-4339-99de-1a47c62bbaac"
  },
  {
   "a": "Matt Becker",
   "b": "Andrew Frey",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.4,
   "avgActual": 3,
   "avgExpected": 2,
   "aId": "604007f9-8645-4f0f-9909-e3a9b2fa6dd7",
   "bId": "beb70730-42da-4979-93b9-bd5c88a52d75"
  },
  {
   "a": "John Rogers",
   "b": "Barbara Markoglu",
   "team": "Premiere Dinkers",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.4,
   "avgActual": 3.3,
   "avgExpected": 2.3,
   "aId": "45bc6397-1703-4a4b-bde7-fda65905fe3a",
   "bId": "4ca325bd-f0d7-4b18-b570-c6ef241d2ff5"
  },
  {
   "a": "Alex Chang",
   "b": "Dajie （David） Yang",
   "team": "Allstar Pickler",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.4,
   "avgActual": 3.5,
   "avgExpected": 2.8,
   "aId": "93c5b40e-d4ff-4fc5-b7fa-de1e6a82110b",
   "bId": "b153649d-e405-4192-85f9-c1871ba0eba0"
  },
  {
   "a": "Scott Heist",
   "b": "Hector Lopez",
   "team": "Flemington Green",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.4,
   "avgActual": -6.3,
   "avgExpected": -7.3,
   "aId": "43296dc0-9f07-4173-a3c4-6df92c7bbb37",
   "bId": "e02b2266-0586-4da7-9451-b90445d145bf"
  },
  {
   "a": "Scott Gardo",
   "b": "Bill Venella",
   "team": "Forward",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 3,
   "avgExpected": 2.3,
   "aId": "2580158f-1c0c-4a5a-8a0c-b48d2c1f0067",
   "bId": "357a050a-a8ad-4998-a511-814c7c69caad"
  },
  {
   "a": "Tami Mohney",
   "b": "Farzad Shadzik",
   "team": "Mercer Bucks",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 2,
   "avgExpected": 1,
   "aId": "639b104c-36e6-48d0-9948-b17158f92030",
   "bId": "f7e6727a-13ba-4c66-b148-a2f294ff640e"
  },
  {
   "a": "George Nouaime",
   "b": "Matthew Memmo",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.3,
   "avgActual": 7.3,
   "avgExpected": 6.6,
   "aId": "379ba4b1-4102-4424-bdee-300e8e4fa35b",
   "bId": "6f3b12bf-032c-458d-bd38-5f9dbe04d374"
  },
  {
   "a": "Freddy Alicea",
   "b": "Dmitry Strashnov",
   "team": "PKLD",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.3,
   "avgActual": -2,
   "avgExpected": -2.8,
   "aId": "66505a6b-2dfe-4454-b71b-e3fdd2b7a692",
   "bId": "b613137c-a590-4ca1-9835-aff71d263018"
  },
  {
   "a": "Karen Chin",
   "b": "Alexandra Romagnolo",
   "team": "Premiere Dinkers",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.3,
   "avgActual": -4,
   "avgExpected": -4.7,
   "aId": "0685c1ca-d8fb-4a1d-a039-8be856ce5c56",
   "bId": "5b2cd4fb-dda2-4578-8b82-73ad0c7153dd"
  },
  {
   "a": "Chuck Silvester",
   "b": "Mylene Tenorio",
   "team": "Picklr Fair Lawn",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 3.3,
   "avgExpected": 2.8,
   "aId": "3911a60f-cab7-4b28-9ba0-244c000980ba",
   "bId": "ddd5dc5f-551a-4cc1-b809-7d215e0f1eef"
  },
  {
   "a": "Sarah Stangota",
   "b": "Anthony Leone",
   "team": "Flemington Blue",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 3.3,
   "avgExpected": 2.7,
   "aId": "80fbbb8f-8f4d-4a6f-bc08-925f29df32ea",
   "bId": "a8715ef7-f760-4097-b642-eae44c0a5de7"
  },
  {
   "a": "Jason Belmont",
   "b": "Farzad Shadzik",
   "team": "Mercer Bucks",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 3,
   "avgExpected": 2.5,
   "aId": "a1df4f80-0b37-4f8b-a71f-b11b6eb85f4c",
   "bId": "f7e6727a-13ba-4c66-b148-a2f294ff640e"
  },
  {
   "a": "Chris Allander",
   "b": "Ellen Rubiato",
   "team": "Forward",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.3,
   "avgActual": 9.7,
   "avgExpected": 9,
   "aId": "7d76fb68-9895-40c5-b321-f5d5d64d2b02",
   "bId": "9b6e4166-d6a4-4e8c-812b-65e4d35477f3"
  },
  {
   "a": "Chris Owens",
   "b": "Irma Myersdonihoo",
   "team": "Dill Dinkers Newport",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.3,
   "avgActual": -4.7,
   "avgExpected": -5.4,
   "aId": "44fb406f-7185-4218-9c33-d9094f55f82d",
   "bId": "84de6bd2-281f-424f-bbc0-254f670e052b"
  },
  {
   "a": "Mary Foster",
   "b": "Warren Howard",
   "team": "Pickleball Kingdom Hamilton Prime Time",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.3,
   "avgActual": -2.3,
   "avgExpected": -3.1,
   "aId": "71b7fe55-42fb-4b59-a77c-c14d62384125",
   "bId": "b5b20410-43ee-4dc8-bb2b-dadb159ca3f1"
  },
  {
   "a": "Joseph Koerner",
   "b": "Danya George",
   "team": "Players Courtyard",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.2,
   "avgActual": -4.2,
   "avgExpected": -4.7,
   "aId": "b49f166d-9cd4-4b86-961d-380dd8189a87",
   "bId": "fbaf1cdd-118b-4d51-a42e-f06908cc3f3c"
  },
  {
   "a": "Brian Kelly",
   "b": "Maria Cecilia Holgado",
   "team": "Pickleball Kingdom Hamilton Strikers",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 0.8,
   "avgExpected": 0.5,
   "aId": "68cc5ac4-2840-4816-b36f-9df7aa9c3c90",
   "bId": "c1c60fc3-68c8-421e-90bb-cdcf21b5a936"
  },
  {
   "a": "Louis Sapirman",
   "b": "Linda Bozzo",
   "team": "PickleRage Union County",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 2,
   "avgExpected": 1.5,
   "aId": "2a05bac5-f8e0-4e68-928e-bb0ac69f1921",
   "bId": "94c45058-cae5-4085-ad9e-684309568903"
  },
  {
   "a": "Mark Baker",
   "b": "Marita Dow",
   "team": "PickleRage Union County",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.2,
   "avgActual": -3,
   "avgExpected": -3.6,
   "aId": "2edb3f79-df7a-4e92-a4d5-e78774a90e92",
   "bId": "9de9a96a-2ff8-49eb-b59f-1e898a7c07de"
  },
  {
   "a": "Jeffrey Hartford",
   "b": "Paul Phillips",
   "team": "Flemington Blue",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 1,
   "avgExpected": 0.7,
   "aId": "3801a1f8-353e-4ecf-ada7-e8ed5ff23235",
   "bId": "9ef3e1b1-2818-46f0-ab0b-2ee190d176b3"
  },
  {
   "a": "Jeffrey Lindstrom",
   "b": "Zalene Corey",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 0.3,
   "avgExpected": -0.1,
   "aId": "4911178f-bf5a-41f2-b2a9-5a86b0adca69",
   "bId": "e0ffa27a-6b29-48f8-b162-154c995b3d97"
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
   "avgExpected": 6.3,
   "aId": "90e0fbef-1218-4eb3-887f-b9cc31e73163",
   "bId": "e0ffa27a-6b29-48f8-b162-154c995b3d97"
  },
  {
   "a": "Timothy Cassidy",
   "b": "Phillip Perry",
   "team": "One Love",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 1,
   "avgExpected": 0.8,
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
   "synergy": 0.1,
   "avgActual": 0.8,
   "avgExpected": 0.5,
   "aId": "33b16b4f-95d4-4467-aba6-44b22d090bb5",
   "bId": "bbb95dae-c7a1-4e34-b74f-29ff5fc70f29"
  },
  {
   "a": "Gina Lavignera",
   "b": "Melissa Freedman",
   "team": "Colts Neck Racquet Club",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 0.3,
   "avgExpected": 0.2,
   "aId": "a8f8cba7-d3be-4df0-8d9c-9608f102859a",
   "bId": "fcfdec94-0e44-4583-8b2a-089109e9bd33"
  },
  {
   "a": "Olga Turova",
   "b": "Filomena Rega",
   "team": "Monroe",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 0.1,
   "avgActual": 3,
   "avgExpected": 2.9,
   "aId": "1aeb5726-1c67-4c13-8884-b35f0c5c854f",
   "bId": "b466c6a0-1ec9-4148-819b-972cc37ca5ec"
  },
  {
   "a": "Marita Dow",
   "b": "Ed Amato",
   "team": "PickleRage Union County",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 4.5,
   "avgExpected": 4.4,
   "aId": "9de9a96a-2ff8-49eb-b59f-1e898a7c07de",
   "bId": "ce893b2d-f5ea-40aa-98c0-d67402405b64"
  },
  {
   "a": "Manuela Caiati",
   "b": "Scott Heist",
   "team": "Flemington Green",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.1,
   "avgActual": -3.3,
   "avgExpected": -3.6,
   "aId": "055f3bbb-3d19-4709-b29e-0e4ad54ba0cb",
   "bId": "43296dc0-9f07-4173-a3c4-6df92c7bbb37"
  },
  {
   "a": "Dan Callaghan",
   "b": "Jennifer Laroque",
   "team": "Forward",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.1,
   "avgActual": 7,
   "avgExpected": 6.8,
   "aId": "d1e5126f-1ca9-4bc2-a745-1922b42893ae",
   "bId": "e870b473-4955-4ccf-82ce-88f72bf2d917"
  },
  {
   "a": "Craig Rathjen",
   "b": "Eldon Carandan",
   "team": "Picklr Fair Lawn",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.1,
   "avgActual": -4,
   "avgExpected": -4.2,
   "aId": "51197be0-3fa1-4888-b0be-df5af704e8a4",
   "bId": "888253bb-161e-4029-9170-1f7002abdbee"
  },
  {
   "a": "Jessica Ren",
   "b": "Alex Chang",
   "team": "Allstar Pickler",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.1,
   "avgActual": 2,
   "avgExpected": 1.8,
   "aId": "5fc95fcb-4ed3-47b9-be7e-0ce9498dc977",
   "bId": "93c5b40e-d4ff-4fc5-b7fa-de1e6a82110b"
  },
  {
   "a": "Amy Neckes",
   "b": "Martyn Babitz",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.1,
   "avgActual": -0.7,
   "avgExpected": -1,
   "aId": "5691a68e-0367-4af2-b318-4e927e00d4d6",
   "bId": "cf328b8f-9626-4bdf-8069-da6d0f8b17e9"
  },
  {
   "a": "Lisa Howdyshell",
   "b": "Anuraag Verma",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0,
   "avgActual": 5.7,
   "avgExpected": 5.6,
   "aId": "90e0fbef-1218-4eb3-887f-b9cc31e73163",
   "bId": "c6b0c203-9659-494f-993b-dadd300ed3e8"
  },
  {
   "a": "Kimberly Kusumoto",
   "b": "Zalene Corey",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0,
   "avgActual": -0.7,
   "avgExpected": -0.7,
   "aId": "5345c73e-518d-4066-8a0a-3c6c5c80de56",
   "bId": "e0ffa27a-6b29-48f8-b162-154c995b3d97"
  },
  {
   "a": "Joseph Romagnolo",
   "b": "Barbara Markoglu",
   "team": "Premiere Dinkers",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0,
   "avgActual": 1,
   "avgExpected": 1,
   "aId": "1972795c-9185-4d19-8352-6244573e3ca5",
   "bId": "4ca325bd-f0d7-4b18-b570-c6ef241d2ff5"
  },
  {
   "a": "Lori Wild",
   "b": "Carolyn Laverdiere",
   "team": "Forward",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0,
   "avgActual": 4.8,
   "avgExpected": 4.7,
   "aId": "b1066a81-7537-4512-939d-5acbf11ef9aa",
   "bId": "ebc26b7d-1ba3-4cf6-a11f-ad6e79c2ff1b"
  },
  {
   "a": "Michael Burns",
   "b": "Andria Lochtenbergh",
   "team": "Bounce Philly",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0,
   "avgActual": -1,
   "avgExpected": -1,
   "aId": "8142380a-a08e-4510-9c99-7bc928b665ed",
   "bId": "b624b900-f2f1-48d4-9e19-c0ff0238d34d"
  },
  {
   "a": "Donna Stone",
   "b": "Maria Cecilia Holgado",
   "team": "Pickleball Kingdom Hamilton Strikers",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0,
   "avgActual": 3.3,
   "avgExpected": 3.3,
   "aId": "af8a6e4b-f588-45db-906e-5766f1307e50",
   "bId": "c1c60fc3-68c8-421e-90bb-cdcf21b5a936"
  },
  {
   "a": "Blair Lane",
   "b": "Erica Ruggieri",
   "team": "Life Time Red Bank",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 0,
   "avgExpected": 0.1,
   "aId": "9ff56e0a-03ab-4488-b27d-24150e777b03",
   "bId": "c9070b8b-ce6e-46e7-a724-bd168579c596"
  },
  {
   "a": "Mary Foster",
   "b": "Judy Williamson",
   "team": "Pickleball Kingdom Hamilton Prime Time",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 1.3,
   "avgExpected": 1.5,
   "aId": "71b7fe55-42fb-4b59-a77c-c14d62384125",
   "bId": "e646e3ee-5e39-48c7-933f-e567af0de814"
  },
  {
   "a": "Lauren Ricks",
   "b": "Chris Hannah",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -1.3,
   "avgExpected": -1,
   "aId": "07e276d3-773e-4a62-865e-4248969ec4d3",
   "bId": "4be457d0-c765-45af-b64d-da383c437a53"
  },
  {
   "a": "Lori Frank",
   "b": "Mark Skolnik",
   "team": "Jersey Devil",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 0,
   "avgExpected": 0.2,
   "aId": "8e51fde0-5ddd-4e6e-b2f6-49cf79cb8030",
   "bId": "b2f66825-4c89-450c-ae68-db22d0418c80"
  },
  {
   "a": "Linda Bozzo",
   "b": "Jennifer Applebee",
   "team": "PickleRage Union County",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.1,
   "avgActual": 6.3,
   "avgExpected": 6.5,
   "aId": "94c45058-cae5-4085-ad9e-684309568903",
   "bId": "fee5a8cb-84fc-4d3f-abbe-99d91c2dc9a3"
  },
  {
   "a": "Olga Sedycias",
   "b": "Qiuyan Kong",
   "team": "Picklr Fair Lawn",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 1.8,
   "avgExpected": 2,
   "aId": "7c14ace8-2c5f-416f-8619-efa19901a78c",
   "bId": "e2b4f0ef-182b-4f3c-8b8e-144aee0e8eb4"
  },
  {
   "a": "Paul Mcalary",
   "b": "Wen Chang",
   "team": "Bounce Philly",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 0.5,
   "avgExpected": 0.7,
   "aId": "4b2fda63-a536-4730-9140-4a372b1726e9",
   "bId": "9a0d5103-b8d7-4b5b-a890-59a6ec5fb115"
  },
  {
   "a": "Jeffrey Lindstrom",
   "b": "Matthew Memmo",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 3.3,
   "avgExpected": 3.5,
   "aId": "4911178f-bf5a-41f2-b2a9-5a86b0adca69",
   "bId": "6f3b12bf-032c-458d-bd38-5f9dbe04d374"
  },
  {
   "a": "Farzad Shadzik",
   "b": "Mary Harmon",
   "team": "Mercer Bucks",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -1.3,
   "avgExpected": -1.1,
   "aId": "f7e6727a-13ba-4c66-b148-a2f294ff640e",
   "bId": "fc528b4b-0dfe-4334-9619-0abce2d33972"
  },
  {
   "a": "Frank Iacono",
   "b": "Sharon Rarig",
   "team": "Colts Neck Racquet Club",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -0.7,
   "avgExpected": -0.3,
   "aId": "2cccc005-6a1a-4566-98be-15805e750e49",
   "bId": "f0fbd8dc-a5a3-45f7-8ca5-f0cb985f5f23"
  },
  {
   "a": "Michael Ross",
   "b": "Tom Giunta",
   "team": "Players Courtyard",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.2,
   "avgActual": -9.7,
   "avgExpected": -9.2,
   "aId": "5db691c2-51e1-4500-a9e7-60c0f303f6d0",
   "bId": "951454ae-d2ba-4339-99de-1a47c62bbaac"
  },
  {
   "a": "Tracy Giunta",
   "b": "Jill Nixon",
   "team": "Players Courtyard",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.2,
   "avgActual": -2.3,
   "avgExpected": -2,
   "aId": "0053115a-f6c0-43c0-ab0e-ec6abf16bc32",
   "bId": "8c0ea31a-a5e4-49f4-b97c-703e6edfe6d2"
  },
  {
   "a": "Karen Rosenberg",
   "b": "Elliot Fishman",
   "team": "PKLD",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.2,
   "avgActual": -0.2,
   "avgExpected": 0.1,
   "aId": "17fc1097-95ae-4095-a83d-ca9124bef274",
   "bId": "3617a420-089d-408c-abf0-c3894b33a47e"
  },
  {
   "a": "Irish Lee",
   "b": "George Zhou",
   "team": "Allstar Pickler",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 3,
   "avgExpected": 3.4,
   "aId": "1b93f56f-c9be-4d20-b0a4-e155b558a11c",
   "bId": "e623609f-5136-415f-a018-74427cfa13ff"
  },
  {
   "a": "Dan Callaghan",
   "b": "Carolyn Laverdiere",
   "team": "Forward",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": -0.2,
   "avgActual": 6,
   "avgExpected": 6.4,
   "aId": "d1e5126f-1ca9-4bc2-a745-1922b42893ae",
   "bId": "ebc26b7d-1ba3-4cf6-a11f-ad6e79c2ff1b"
  },
  {
   "a": "Amy Neckes",
   "b": "Greg Taylor",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.2,
   "avgActual": -1.7,
   "avgExpected": -1.1,
   "aId": "5691a68e-0367-4af2-b318-4e927e00d4d6",
   "bId": "701f7029-4353-4548-b8db-b7ac7ed3d847"
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
   "a": "Geoffrey Baird",
   "b": "Lynn Quinn",
   "team": "Pickleball Palace Blue",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 3,
   "avgExpected": 3.4,
   "aId": "98d6ec7e-e3ac-47ce-a2a2-a000399c9e4f",
   "bId": "d6c99730-dfc7-4a86-aa1e-163058c5b8c2"
  },
  {
   "a": "Franchesa Mclean",
   "b": "Yayuan Lien",
   "team": "Pickleball Kingdom Hamilton Prime Time",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 0,
   "avgExpected": 0.7,
   "aId": "84a3279f-7449-4f3a-9d37-1cb1bfe2c45e",
   "bId": "f4725f25-ce53-4104-8f94-d558d8c39e84"
  },
  {
   "a": "Warren Howard",
   "b": "Ed Mendoza",
   "team": "Pickleball Kingdom Hamilton Prime Time",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.3,
   "avgActual": -9,
   "avgExpected": -8.3,
   "aId": "b5b20410-43ee-4dc8-bb2b-dadb159ca3f1",
   "bId": "cb4a8451-13f9-4c27-8dc6-847fea7be9b4"
  },
  {
   "a": "Artemio Tuquero",
   "b": "Marleen Tuquero",
   "team": "Pickleball Kingdom Hamilton Strikers",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.3,
   "avgActual": -4,
   "avgExpected": -3.4,
   "aId": "38af77d4-eaa3-4189-8eb9-b137ea3cbecd",
   "bId": "d5598dfe-2fd3-4178-9068-6baf887689b2"
  },
  {
   "a": "Joe Moore",
   "b": "Amy Moore",
   "team": "Jersey Devil",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 4,
   "avgExpected": 4.6,
   "aId": "04965ab9-e69f-43ba-a064-c7d3351fbf68",
   "bId": "c037ad35-3550-447f-af7f-f62674d0c1ac"
  },
  {
   "a": "Audrey Brisson",
   "b": "Heidi Weinroth",
   "team": "Jersey Devil",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -2.7,
   "avgExpected": -1.9,
   "aId": "1bec31ec-6396-4b0a-826c-831ae5df347e",
   "bId": "5ccea74f-290a-4648-b0fd-2a8b7d9fc6d2"
  },
  {
   "a": "Chris Hannah",
   "b": "Andrew Frey",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 0.7,
   "avgExpected": 1.4,
   "aId": "4be457d0-c765-45af-b64d-da383c437a53",
   "bId": "beb70730-42da-4979-93b9-bd5c88a52d75"
  },
  {
   "a": "Christina Zumbo-Zerega",
   "b": "Melissa Freedman",
   "team": "Colts Neck Racquet Club",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 4.3,
   "avgExpected": 5.1,
   "aId": "b5518a36-f696-4635-918a-4d6ee23968ff",
   "bId": "fcfdec94-0e44-4583-8b2a-089109e9bd33"
  },
  {
   "a": "Tracy Waffenfeld",
   "b": "Al Chen",
   "team": "Pickleball Palace Blue",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.3,
   "avgActual": -4.3,
   "avgExpected": -3.6,
   "aId": "2bc6c3c4-805a-4584-bbb9-6185448a3298",
   "bId": "d1662b32-b01f-4f6a-95a0-ff4fe00d4d32"
  },
  {
   "a": "Dennis Tenorio",
   "b": "Craig Rathjen",
   "team": "Picklr Fair Lawn",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.3,
   "avgActual": -5,
   "avgExpected": -4.3,
   "aId": "2563bcb0-eff4-4311-8e03-9a21b61691a0",
   "bId": "51197be0-3fa1-4888-b0be-df5af704e8a4"
  },
  {
   "a": "Paul Mcalary",
   "b": "Derik Lochtenbergh",
   "team": "Bounce Philly",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -1.5,
   "avgExpected": -0.8,
   "aId": "4b2fda63-a536-4730-9140-4a372b1726e9",
   "bId": "cf71e3c3-dee4-401c-a276-afd72a53dc5a"
  },
  {
   "a": "Bill Venella",
   "b": "Dan Callaghan",
   "team": "Forward",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 6.3,
   "avgExpected": 7,
   "aId": "357a050a-a8ad-4998-a511-814c7c69caad",
   "bId": "d1e5126f-1ca9-4bc2-a745-1922b42893ae"
  },
  {
   "a": "Lori Wild",
   "b": "Mary Hain",
   "team": "Forward",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 7,
   "avgExpected": 7.6,
   "aId": "b1066a81-7537-4512-939d-5acbf11ef9aa",
   "bId": "eda84f5e-5e1e-4e49-b754-eacf36917f94"
  },
  {
   "a": "Amy Santopietro",
   "b": "Phillip Perry",
   "team": "One Love",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.4,
   "avgActual": -1.7,
   "avgExpected": -0.7,
   "aId": "894ef6a1-ee5a-4729-bee3-f11f57c22e16",
   "bId": "acc4012f-320c-4b43-8ec7-f60ca7419e03"
  },
  {
   "a": "Eric Smith",
   "b": "Darin Gall",
   "team": "Jersey Devil",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.4,
   "avgActual": -1,
   "avgExpected": 0,
   "aId": "3120fa05-d5d9-4b71-a339-4ed92f3e5b06",
   "bId": "9b286e84-ad6b-4d88-8306-75906ac6dd8c"
  },
  {
   "a": "Joseph Romagnolo",
   "b": "John Rogers",
   "team": "Premiere Dinkers",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -0.6,
   "avgExpected": 0.1,
   "aId": "1972795c-9185-4d19-8352-6244573e3ca5",
   "bId": "45bc6397-1703-4a4b-bde7-fda65905fe3a"
  },
  {
   "a": "Andria Lochtenbergh",
   "b": "Derik Lochtenbergh",
   "team": "Bounce Philly",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -0.4,
   "avgActual": -5,
   "avgExpected": -4.4,
   "aId": "b624b900-f2f1-48d4-9e19-c0ff0238d34d",
   "bId": "cf71e3c3-dee4-401c-a276-afd72a53dc5a"
  },
  {
   "a": "Chris Allander",
   "b": "Dan Callaghan",
   "team": "Forward",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -0.4,
   "avgActual": 5.8,
   "avgExpected": 6.5,
   "aId": "7d76fb68-9895-40c5-b321-f5d5d64d2b02",
   "bId": "d1e5126f-1ca9-4bc2-a745-1922b42893ae"
  },
  {
   "a": "Irish Lee",
   "b": "Jessica Ren",
   "team": "Allstar Pickler",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.4,
   "avgActual": 0,
   "avgExpected": 0.8,
   "aId": "1b93f56f-c9be-4d20-b0a4-e155b558a11c",
   "bId": "5fc95fcb-4ed3-47b9-be7e-0ce9498dc977"
  },
  {
   "a": "Eric Brezina",
   "b": "Sarah Stangota",
   "team": "Flemington Blue",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.4,
   "avgActual": -2.3,
   "avgExpected": -1.3,
   "aId": "717be0e6-148f-4bab-a433-22e4f97d5c47",
   "bId": "80fbbb8f-8f4d-4a6f-bc08-925f29df32ea"
  },
  {
   "a": "Karen Chin",
   "b": "Barbara Markoglu",
   "team": "Premiere Dinkers",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -1,
   "avgExpected": 0.2,
   "aId": "0685c1ca-d8fb-4a1d-a039-8be856ce5c56",
   "bId": "4ca325bd-f0d7-4b18-b570-c6ef241d2ff5"
  },
  {
   "a": "Patty Direzze",
   "b": "Peter O'Farrill",
   "team": "Picklr Fair Lawn",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -5,
   "avgExpected": -3.7,
   "aId": "826ca41a-b56b-4688-9a30-330a67e541f3",
   "bId": "ab221032-e648-4f2f-bc66-a05cee00c25c"
  },
  {
   "a": "John Gardler",
   "b": "Rosa Tenan",
   "team": "Pickleball Kingdom Hamilton Strikers",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.5,
   "avgActual": 1.8,
   "avgExpected": 2.8,
   "aId": "3c87532d-0a54-4e25-a210-3eb7a771a346",
   "bId": "f22a22d7-f20d-459b-a7b4-3612b4ff9291"
  },
  {
   "a": "Craig Rathjen",
   "b": "Olga Sedycias",
   "team": "Picklr Fair Lawn",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.6,
   "avgActual": -0.3,
   "avgExpected": 1,
   "aId": "51197be0-3fa1-4888-b0be-df5af704e8a4",
   "bId": "7c14ace8-2c5f-416f-8619-efa19901a78c"
  },
  {
   "a": "Hector Lopez",
   "b": "Judith Macarthur",
   "team": "Flemington Green",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -4.7,
   "avgExpected": -3.3,
   "aId": "e02b2266-0586-4da7-9451-b90445d145bf",
   "bId": "ea5676f2-c36c-4c54-b9df-c6fb5926b61e"
  },
  {
   "a": "Janet Bodner",
   "b": "David Katz",
   "team": "One Love",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -4,
   "avgExpected": -2.8,
   "aId": "4e07b66d-dd15-42ea-9566-0b82e7d94c15",
   "bId": "d55d3206-5478-4a12-b49a-095d301a098b"
  },
  {
   "a": "Dennis Tenorio",
   "b": "Marcia Rathjen",
   "team": "Picklr Fair Lawn",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.6,
   "avgActual": 0.5,
   "avgExpected": 1.7,
   "aId": "2563bcb0-eff4-4311-8e03-9a21b61691a0",
   "bId": "713e7456-5ec1-4fa6-ac0f-bb04c2a56c18"
  },
  {
   "a": "Maria Fanfa",
   "b": "Mylene Tenorio",
   "team": "Picklr Fair Lawn",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.7,
   "avgActual": 2,
   "avgExpected": 3.5,
   "aId": "98bfa16f-b5e6-4534-a4b9-5b84267284d4",
   "bId": "ddd5dc5f-551a-4cc1-b809-7d215e0f1eef"
  },
  {
   "a": "Scott Gardo",
   "b": "Jennifer Laroque",
   "team": "Forward",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -0.7,
   "avgExpected": 1.1,
   "aId": "2580158f-1c0c-4a5a-8a0c-b48d2c1f0067",
   "bId": "e870b473-4955-4ccf-82ce-88f72bf2d917"
  },
  {
   "a": "Jeffrey Lindstrom",
   "b": "Anuraag Verma",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.7,
   "avgActual": 1.3,
   "avgExpected": 2.6,
   "aId": "4911178f-bf5a-41f2-b2a9-5a86b0adca69",
   "bId": "c6b0c203-9659-494f-993b-dadd300ed3e8"
  },
  {
   "a": "Bonny Mayerberg",
   "b": "Cheryl Raiken",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -3.7,
   "avgExpected": -2,
   "aId": "0e543890-4c91-45d2-bd5d-819dc476b245",
   "bId": "39966b06-c83d-47ea-a62c-d6c22c429d19"
  },
  {
   "a": "Lynette Pil",
   "b": "Tony Sethi",
   "team": "Pickleball Kingdom Hamilton Strikers",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.8,
   "avgActual": -0.7,
   "avgExpected": 1.1,
   "aId": "92b709b8-b68c-436f-95e5-d9db2908cc3c",
   "bId": "d75fb048-848d-41de-ae51-df5a0454b327"
  },
  {
   "a": "Ed Mendoza",
   "b": "Judy Williamson",
   "team": "Pickleball Kingdom Hamilton Prime Time",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.8,
   "avgActual": -4,
   "avgExpected": -2.1,
   "aId": "cb4a8451-13f9-4c27-8dc6-847fea7be9b4",
   "bId": "e646e3ee-5e39-48c7-933f-e567af0de814"
  },
  {
   "a": "Mary Foster",
   "b": "Fritz Jean-Brian",
   "team": "Pickleball Kingdom Hamilton Prime Time",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.8,
   "avgActual": -1.7,
   "avgExpected": -0.2,
   "aId": "71b7fe55-42fb-4b59-a77c-c14d62384125",
   "bId": "cf7d6ea4-8472-467c-9685-7ef589f5f2e6"
  },
  {
   "a": "Chris Hannah",
   "b": "Matt Becker",
   "team": "Dill Dinkers Hatboro",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -3.2,
   "avgExpected": -1.7,
   "aId": "4be457d0-c765-45af-b64d-da383c437a53",
   "bId": "604007f9-8645-4f0f-9909-e3a9b2fa6dd7"
  },
  {
   "a": "Bob Debarge",
   "b": "Jeffrey Quinlan",
   "team": "Monroe",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -2.2,
   "avgExpected": -0.7,
   "aId": "e0d98c57-92dd-4719-ab14-3635205f3328",
   "bId": "f7bf88cc-9cdb-4d3c-b768-c2922c5a8456"
  },
  {
   "a": "Kathi Savage",
   "b": "Marita Dow",
   "team": "PickleRage Union County",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.8,
   "avgActual": 0,
   "avgExpected": 1.8,
   "aId": "304fa353-a564-41f6-ba23-ed9c19ace5b9",
   "bId": "9de9a96a-2ff8-49eb-b59f-1e898a7c07de"
  },
  {
   "a": "Michael Burns",
   "b": "Derik Lochtenbergh",
   "team": "Bounce Philly",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -0.8,
   "avgExpected": 0.7,
   "aId": "8142380a-a08e-4510-9c99-7bc928b665ed",
   "bId": "cf71e3c3-dee4-401c-a276-afd72a53dc5a"
  },
  {
   "a": "Jason Belmont",
   "b": "Mary Harmon",
   "team": "Mercer Bucks",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.8,
   "avgActual": -1.2,
   "avgExpected": 0.3,
   "aId": "a1df4f80-0b37-4f8b-a71f-b11b6eb85f4c",
   "bId": "fc528b4b-0dfe-4334-9619-0abce2d33972"
  },
  {
   "a": "Timothy Cassidy",
   "b": "Amy Santopietro",
   "team": "One Love",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.9,
   "avgActual": -5.6,
   "avgExpected": -3.9,
   "aId": "33b16b4f-95d4-4467-aba6-44b22d090bb5",
   "bId": "894ef6a1-ee5a-4729-bee3-f11f57c22e16"
  },
  {
   "a": "Gregory Mcquibben",
   "b": "Warren Howard",
   "team": "Pickleball Kingdom Hamilton Prime Time",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -0.9,
   "avgActual": -9.4,
   "avgExpected": -7.7,
   "aId": "10110730-45a5-496c-94db-748fbe7f5bdf",
   "bId": "b5b20410-43ee-4dc8-bb2b-dadb159ca3f1"
  },
  {
   "a": "Lisa Munjack",
   "b": "Lynn Quinn",
   "team": "Pickleball Palace Blue",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -4,
   "avgExpected": -2,
   "aId": "d04e4e93-c62c-4352-ac19-a5c7ce293763",
   "bId": "d6c99730-dfc7-4a86-aa1e-163058c5b8c2"
  },
  {
   "a": "Andrew Craig",
   "b": "Stanley Okpor",
   "team": "Pickleball Palace Blue",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.9,
   "avgActual": -3.3,
   "avgExpected": -1.1,
   "aId": "12282462-33ce-4ae9-81ae-5bb224883f78",
   "bId": "dba57d37-2d91-4c25-96ae-cbc287043db4"
  },
  {
   "a": "Xiaojun Yuan",
   "b": "Nghia Bui",
   "team": "Players Courtyard",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.9,
   "avgActual": -3.3,
   "avgExpected": -1.2,
   "aId": "8f21d0e1-3bff-42d5-a59a-f8240b2b7eb2",
   "bId": "c8d634ab-9452-4ea2-8b66-20db1aca3a43"
  },
  {
   "a": "Michael Ross",
   "b": "Jill Nixon",
   "team": "Players Courtyard",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1,
   "avgActual": -7,
   "avgExpected": -4.7,
   "aId": "5db691c2-51e1-4500-a9e7-60c0f303f6d0",
   "bId": "8c0ea31a-a5e4-49f4-b97c-703e6edfe6d2"
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
   "a": "Joseph Romagnolo",
   "b": "Alexandra Romagnolo",
   "team": "Premiere Dinkers",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1,
   "avgActual": -8,
   "avgExpected": -5.7,
   "aId": "1972795c-9185-4d19-8352-6244573e3ca5",
   "bId": "5b2cd4fb-dda2-4578-8b82-73ad0c7153dd"
  },
  {
   "a": "Sam Doctor",
   "b": "Apparao Avancha",
   "team": "Flemington Green",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1,
   "avgActual": -6,
   "avgExpected": -4,
   "aId": "3070f4fd-b54d-4aac-81e9-72ffc24c2845",
   "bId": "d84632f4-bec0-4399-8b04-64c6ea340362"
  },
  {
   "a": "Greg Taylor",
   "b": "Joan Rudderow",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1,
   "avgActual": -0.3,
   "avgExpected": 1.9,
   "aId": "701f7029-4353-4548-b8db-b7ac7ed3d847",
   "bId": "dca2ce61-749b-421c-9205-0a16fc656a36"
  },
  {
   "a": "Harihar Chudamani",
   "b": "George Nouaime",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1,
   "avgActual": -1,
   "avgExpected": 1.4,
   "aId": "06b13278-0d0c-40c5-b2f2-acd50b8bfc36",
   "bId": "379ba4b1-4102-4424-bdee-300e8e4fa35b"
  },
  {
   "a": "Filomena Rega",
   "b": "Jeffrey Quinlan",
   "team": "Monroe",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.1,
   "avgActual": -0.5,
   "avgExpected": 1.7,
   "aId": "b466c6a0-1ec9-4148-819b-972cc37ca5ec",
   "bId": "f7bf88cc-9cdb-4d3c-b768-c2922c5a8456"
  },
  {
   "a": "Scott Heist",
   "b": "Leah Greenstein",
   "team": "Flemington Green",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -9.7,
   "avgExpected": -7.2,
   "aId": "43296dc0-9f07-4173-a3c4-6df92c7bbb37",
   "bId": "ca06b5ce-3001-408e-bdc6-9e183022b9f3"
  },
  {
   "a": "Ying Lin",
   "b": "Jessie Fang",
   "team": "Allstar Pickler",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1.1,
   "avgActual": 0.7,
   "avgExpected": 3.2,
   "aId": "b31d49f9-a969-4c47-a7a5-2ae2b7a914df",
   "bId": "fa9c688a-62ba-4bd3-806a-b47b05235128"
  },
  {
   "a": "Frank Iacono",
   "b": "Michael Salerno",
   "team": "Colts Neck Racquet Club",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.2,
   "avgActual": -5.3,
   "avgExpected": -2.5,
   "aId": "2cccc005-6a1a-4566-98be-15805e750e49",
   "bId": "d580012d-5954-4900-94db-82fa10dc97b0"
  },
  {
   "a": "Bill Vit",
   "b": "Leah Greenstein",
   "team": "Flemington Green",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.2,
   "avgActual": -8,
   "avgExpected": -5.1,
   "aId": "1993029d-4e84-416d-a8aa-48fde81e5ad9",
   "bId": "ca06b5ce-3001-408e-bdc6-9e183022b9f3"
  },
  {
   "a": "Karen Rosenberg",
   "b": "Steven Truzzolino",
   "team": "PKLD",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.2,
   "avgActual": -2.3,
   "avgExpected": 0.5,
   "aId": "17fc1097-95ae-4095-a83d-ca9124bef274",
   "bId": "91c0c6ae-3f05-46c0-b1aa-6f328a4bf820"
  },
  {
   "a": "Franchesa Mclean",
   "b": "Luz Bonner",
   "team": "Pickleball Kingdom Hamilton Prime Time",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.3,
   "avgActual": -8.7,
   "avgExpected": -5.6,
   "aId": "84a3279f-7449-4f3a-9d37-1cb1bfe2c45e",
   "bId": "ef6c941f-29da-4723-95a8-63a508079685"
  },
  {
   "a": "Eric Brezina",
   "b": "Anthony Leone",
   "team": "Flemington Blue",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -1.3,
   "avgActual": 1.8,
   "avgExpected": 4.4,
   "aId": "717be0e6-148f-4bab-a433-22e4f97d5c47",
   "bId": "a8715ef7-f760-4097-b642-eae44c0a5de7"
  },
  {
   "a": "Howard Eng",
   "b": "Farzad Shadzik",
   "team": "Mercer Bucks",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.3,
   "avgActual": -3,
   "avgExpected": -0.5,
   "aId": "7727f912-4c91-468e-bc39-42aa85e084ab",
   "bId": "f7e6727a-13ba-4c66-b148-a2f294ff640e"
  },
  {
   "a": "Wen Chang",
   "b": "Barbara Hand",
   "team": "Bounce Philly",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1.3,
   "avgActual": 1.3,
   "avgExpected": 4.3,
   "aId": "9a0d5103-b8d7-4b5b-a890-59a6ec5fb115",
   "bId": "a04312ab-d364-478d-8329-503d278a6824"
  },
  {
   "a": "Bobbi Rentko",
   "b": "Jennifer Makfinsky",
   "team": "PKLD",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.4,
   "avgActual": -1.3,
   "avgExpected": 2,
   "aId": "66469f12-c5eb-4a44-97b6-c40c3fbbf89c",
   "bId": "67fe047d-4c6f-4a2b-9946-afdd938d18c8"
  },
  {
   "a": "Dennis Tenorio",
   "b": "Chuck Silvester",
   "team": "Picklr Fair Lawn",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.4,
   "avgActual": -5.7,
   "avgExpected": -2.4,
   "aId": "2563bcb0-eff4-4311-8e03-9a21b61691a0",
   "bId": "3911a60f-cab7-4b28-9ba0-244c000980ba"
  },
  {
   "a": "Michael Schuller",
   "b": "John Danks",
   "team": "PickleRage Union County",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.4,
   "avgActual": -0.3,
   "avgExpected": 2.8,
   "aId": "19f146a7-cb7b-40cf-aed9-98bf25a18aec",
   "bId": "f2e5778f-44c1-46ed-b27d-f3728fa84378"
  },
  {
   "a": "Eric Fang",
   "b": "Dajie （David） Yang",
   "team": "Allstar Pickler",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.6,
   "avgActual": -4,
   "avgExpected": -0.3,
   "aId": "a2e21de9-b9d3-4727-a66f-101c62e00a5d",
   "bId": "b153649d-e405-4192-85f9-c1871ba0eba0"
  },
  {
   "a": "Tracy Giunta",
   "b": "Danya George",
   "team": "Players Courtyard",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.7,
   "avgActual": -11,
   "avgExpected": -7.1,
   "aId": "0053115a-f6c0-43c0-ab0e-ec6abf16bc32",
   "bId": "fbaf1cdd-118b-4d51-a42e-f06908cc3f3c"
  },
  {
   "a": "Dan Carrion",
   "b": "Erik Harrison",
   "team": "One Love",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.7,
   "avgActual": -8,
   "avgExpected": -4,
   "aId": "833c4691-ccec-4d0d-b9a1-0a833728ea7f",
   "bId": "f988ea5f-06b9-477c-88ee-1563d1c8ecfa"
  },
  {
   "a": "Mark Zamkoff",
   "b": "Erica Ruggieri",
   "team": "Life Time Red Bank",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.9,
   "avgActual": -7.7,
   "avgExpected": -3.3,
   "aId": "4e4deaa6-3de9-450b-bfb2-1d86752d92ab",
   "bId": "c9070b8b-ce6e-46e7-a724-bd168579c596"
  },
  {
   "a": "Tinglan Zhao",
   "b": "Dennis Higman",
   "team": "ACE Moorestown",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -2,
   "avgActual": -0.2,
   "avgExpected": 3.7,
   "aId": "5f2e3f29-7b61-4d23-ba5a-23bfe5eac362",
   "bId": "b8fabebb-fd0f-49a8-929a-defbac098e43"
  },
  {
   "a": "Lisa Angelini",
   "b": "Cindy Suter",
   "team": "Mercer Bucks",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -2,
   "avgActual": -3.3,
   "avgExpected": 1.3,
   "aId": "b79cef1c-cecc-48d4-9b14-4505bca1cce9",
   "bId": "e02b78d9-59ab-45d4-b11c-887d749a7da6"
  },
  {
   "a": "Mary Foster",
   "b": "Luz Bonner",
   "team": "Pickleball Kingdom Hamilton Prime Time",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -2.1,
   "avgActual": -6,
   "avgExpected": -1.2,
   "aId": "71b7fe55-42fb-4b59-a77c-c14d62384125",
   "bId": "ef6c941f-29da-4723-95a8-63a508079685"
  }
 ],
 "matches": [
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
    "Jim Nixon"
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
    "Ray Baker",
    "Kenny Mayerhofer"
   ]
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
      "Sherry Sili",
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
      "Sherry Sili"
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
      "Sherry Sili",
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
      "Sherry Sili"
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
      "Sherry Sili",
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
      "Sherry Sili",
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
      "Sherry Sili",
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
      "Sherry Sili",
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
    "Alan Carr",
    "John Zampini",
    "Lucy Sha",
    "Karin Schneider",
    "Donna Shabinaw",
    "Sherry Sili",
    "Christine Ostapiak",
    "Irene Guile"
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
    "David Margraff",
    "Edie Kwasnoski"
   ]
  },
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
    "Buyi Zhang",
    "Feng Zhang",
    "George Zhou",
    "Erik Abramson"
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
    "Deb Gray",
    "Pamela Toy",
    "Jonathan Capeci",
    "Vivian Funchion"
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
   "subs": []
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
   "result": "away",
   "week": 2,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Pickleball Palace Blue",
   "time": "2026-08-29T13:00:00",
   "complete": true,
   "homePoints": 455,
   "awayPoints": 663,
   "homeGW": 1,
   "awayGW": 31,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
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
     "ff": 0,
     "hs": 19,
     "as": 21,
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
     "ff": 0,
     "hs": 18,
     "as": 21,
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
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Robin Aiello",
      "Robert Shea"
     ],
     "a": [
      "Christine Ostapiak",
      "Tracy Waffenfeld"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
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
     "ff": 0,
     "hs": 11,
     "as": 21,
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
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Robert Shea",
      "Gary Leon"
     ],
     "a": [
      "John Cusano",
      "Tracy Waffenfeld"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
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
     "ff": 0,
     "hs": 14,
     "as": 21,
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
     "ff": 0,
     "hs": 12,
     "as": 21,
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
     "ff": 0,
     "hs": 18,
     "as": 21,
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
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Corinne Demeuse",
      "Robert Shea"
     ],
     "a": [
      "Cheryl Minerowicz",
      "Stanley Okpor"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
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
     "ff": 0,
     "hs": 12,
     "as": 21,
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
     "ff": 0,
     "hs": 10,
     "as": 21,
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
     "ff": 0,
     "hs": 19,
     "as": 21,
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
     "ff": 0,
     "hs": 9,
     "as": 21,
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
     "ff": 0,
     "hs": 17,
     "as": 21,
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
     "ff": 0,
     "hs": 15,
     "as": 21,
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
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Robin Aiello",
      "Robert Shea"
     ],
     "a": [
      "Kristin Duva",
      "Stanley Okpor"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
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
     "ff": 0,
     "hs": 7,
     "as": 21,
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
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Robert Shea",
      "Jerry Ridder"
     ],
     "a": [
      "Mark Garner",
      "Geoffrey Baird"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
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
     "ff": 0,
     "hs": 9,
     "as": 21,
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
     "ff": 0,
     "hs": 21,
     "as": 11,
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
     "ff": 0,
     "hs": 16,
     "as": 21,
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
     "ff": 0,
     "hs": 15,
     "as": 21,
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
     "ff": 0,
     "hs": 16,
     "as": 21,
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
     "ff": 0,
     "hs": 16,
     "as": 21,
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
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Tim Lockburner",
      "Robert Shea"
     ],
     "a": [
      "Tracy Waffenfeld",
      "Geoffrey Baird"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Jerry Ridder",
      "Brian Borer"
     ],
     "a": [
      "Mark Garner",
      "Stanley Okpor"
     ]
    }
   ],
   "subs": [
    "Corinne Demeuse",
    "Kristin Duva",
    "Tim Lockburner",
    "Robin Aiello",
    "Brian Borer",
    "Karin Schneider",
    "John Cusano",
    "Cheryl Minerowicz",
    "Robert Shea",
    "Christine Levesque"
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
   "awayPoints": 631,
   "homeGW": 15,
   "awayGW": 17,
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
     "as": 20,
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
    "Ericka Lyn Mayer",
    "Felix Soto"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Mercer Bucks",
   "away": "Pickleball Kingdom Hamilton Prime Time",
   "time": "2026-08-29T14:00:00",
   "complete": true,
   "homePoints": 659,
   "awayPoints": 562,
   "homeGW": 22,
   "awayGW": 10,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
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
     "ff": 0,
     "hs": 21,
     "as": 16,
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
     "ff": 0,
     "hs": 22,
     "as": 20,
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
     "ff": 0,
     "hs": 18,
     "as": 21,
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
     "ff": 0,
     "hs": 21,
     "as": 19,
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
     "ff": 0,
     "hs": 22,
     "as": 20,
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
     "ff": 0,
     "hs": 21,
     "as": 11,
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
     "ff": 0,
     "hs": 21,
     "as": 11,
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
     "ff": 0,
     "hs": 21,
     "as": 14,
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
     "ff": 0,
     "hs": 21,
     "as": 16,
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
     "ff": 0,
     "hs": 21,
     "as": 17,
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
     "ff": 0,
     "hs": 16,
     "as": 21,
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
     "ff": 0,
     "hs": 21,
     "as": 14,
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
     "ff": 0,
     "hs": 21,
     "as": 18,
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
     "ff": 0,
     "hs": 18,
     "as": 21,
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
     "ff": 0,
     "hs": 22,
     "as": 20,
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
     "ff": 0,
     "hs": 20,
     "as": 22,
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
     "ff": 0,
     "hs": 23,
     "as": 25,
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
     "ff": 0,
     "hs": 19,
     "as": 21,
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
     "ff": 0,
     "hs": 21,
     "as": 15,
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
     "ff": 0,
     "hs": 21,
     "as": 23,
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
     "ff": 0,
     "hs": 21,
     "as": 14,
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
     "ff": 0,
     "hs": 16,
     "as": 21,
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
     "ff": 0,
     "hs": 21,
     "as": 3,
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
     "ff": 0,
     "hs": 20,
     "as": 22,
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
     "ff": 0,
     "hs": 19,
     "as": 21,
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
     "ff": 0,
     "hs": 21,
     "as": 10,
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
     "ff": 0,
     "hs": 23,
     "as": 21,
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
     "ff": 0,
     "hs": 23,
     "as": 21,
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
     "ff": 0,
     "hs": 21,
     "as": 17,
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
     "ff": 0,
     "hs": 21,
     "as": 17,
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
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jonathan Pang",
      "Farzad Shadzik"
     ],
     "a": [
      "Gregory Mcquibben",
      "Warren Howard"
     ]
    }
   ],
   "subs": [
    "Mary Harmon"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Picklr Fair Lawn",
   "away": "PickleRage Union County",
   "time": "2026-08-29T14:00:00",
   "complete": true,
   "homePoints": 579,
   "awayPoints": 564,
   "homeGW": 20,
   "awayGW": 12,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
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
     "ff": 0,
     "hs": 21,
     "as": 13,
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
     "ff": 0,
     "hs": 21,
     "as": 17,
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
     "ff": 1,
     "hs": 1,
     "as": 0,
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
     "ff": 0,
     "hs": 15,
     "as": 21,
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
     "ff": 0,
     "hs": 21,
     "as": 14,
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
     "ff": 0,
     "hs": 17,
     "as": 21,
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
     "ff": 0,
     "hs": 19,
     "as": 21,
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
     "ff": 0,
     "hs": 21,
     "as": 18,
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
     "ff": 0,
     "hs": 13,
     "as": 21,
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
     "ff": 0,
     "hs": 16,
     "as": 21,
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
     "ff": 0,
     "hs": 21,
     "as": 18,
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
     "ff": 0,
     "hs": 21,
     "as": 16,
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
     "ff": 0,
     "hs": 21,
     "as": 19,
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
     "ff": 0,
     "hs": 21,
     "as": 14,
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
     "ff": 0,
     "hs": 14,
     "as": 21,
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
     "ff": 0,
     "hs": 11,
     "as": 21,
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
     "ff": 0,
     "hs": 21,
     "as": 11,
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
     "ff": 0,
     "hs": 21,
     "as": 19,
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
     "ff": 0,
     "hs": 16,
     "as": 21,
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
     "ff": 0,
     "hs": 21,
     "as": 19,
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
     "ff": 0,
     "hs": 21,
     "as": 7,
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
     "ff": 0,
     "hs": 23,
     "as": 21,
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
     "ff": 0,
     "hs": 21,
     "as": 17,
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
     "ff": 0,
     "hs": 21,
     "as": 14,
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
     "ff": 0,
     "hs": 21,
     "as": 19,
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
     "ff": 0,
     "hs": 18,
     "as": 21,
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
     "ff": 0,
     "hs": 21,
     "as": 18,
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
     "ff": 0,
     "hs": 21,
     "as": 19,
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
     "ff": 0,
     "hs": 21,
     "as": 19,
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
     "ff": 0,
     "hs": 15,
     "as": 21,
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
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Eldon Carandan",
      "Craig Rathjen"
     ],
     "a": [
      "John Danks",
      "Marty Tan"
     ]
    }
   ],
   "subs": [
    "Marty Tan",
    "Steve Nuguid",
    "Teresa Carr"
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
    "Sheila Dolan",
    "Corey Abrams",
    "Kelly Mcbride",
    "Jill Honicker",
    "Pamela Toy",
    "Deborah Jordan",
    "Sandy Cohen",
    "Joseph Gronczewski"
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
    "Donna Fama",
    "Ying Lin",
    "George Zhou",
    "Ki Keys"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Life Time Red Bank",
   "away": "Colts Neck Racquet Club",
   "time": "2026-08-29T14:30:00",
   "complete": true,
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
      "Frank Iacono"
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
      "Frank Messina"
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
    "Guy Ercol",
    "Pete Dunn",
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
   "result": "home",
   "week": 4,
   "home": "PickleRage Union County",
   "away": "Pickleball Palace Blue",
   "time": "2026-09-12T13:00:00",
   "complete": true,
   "homePoints": 621,
   "awayPoints": 591,
   "homeGW": 19,
   "awayGW": 13,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Linda Vilaikeo",
      "Louis Sapirman"
     ],
     "a": [
      "Frances Smith",
      "Matt Stone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kathi Savage",
      "Ed Amato"
     ],
     "a": [
      "Tracy Narag",
      "Stanley Okpor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Amanda Nguyen",
      "Michael Barry"
     ],
     "a": [
      "Lynn Quinn",
      "Andrew Craig"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jennifer Applebee",
      "John Danks"
     ],
     "a": [
      "Clare Cruz",
      "Geoffrey Baird"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Amanda Nguyen",
      "Linda Vilaikeo"
     ],
     "a": [
      "Tracy Narag",
      "Clare Cruz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kathi Savage",
      "Qiao Yang"
     ],
     "a": [
      "Frances Smith",
      "Lisa Munjack"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "John Danks",
      "Ed Amato"
     ],
     "a": [
      "Geoffrey Baird",
      "Andrew Craig"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Michael Schuller",
      "Michael Barry"
     ],
     "a": [
      "David Barban",
      "Stanley Okpor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Amanda Nguyen",
      "Michael Schuller"
     ],
     "a": [
      "Tracy Narag",
      "David Barban"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Qiao Yang",
      "Louis Sapirman"
     ],
     "a": [
      "Lisa Munjack",
      "Stanley Okpor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jennifer Applebee",
      "Michael Barry"
     ],
     "a": [
      "Lynn Quinn",
      "Matt Stone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kathi Savage",
      "John Danks"
     ],
     "a": [
      "Frances Smith",
      "Geoffrey Baird"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Kathi Savage",
      "Linda Vilaikeo"
     ],
     "a": [
      "Tracy Narag",
      "Frances Smith"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jennifer Applebee",
      "Amanda Nguyen"
     ],
     "a": [
      "Clare Cruz",
      "Lynn Quinn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Ed Amato",
      "Michael Barry"
     ],
     "a": [
      "Geoffrey Baird",
      "Matt Stone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Louis Sapirman",
      "Michael Schuller"
     ],
     "a": [
      "Stanley Okpor",
      "Andrew Craig"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jennifer Applebee",
      "Louis Sapirman"
     ],
     "a": [
      "Tracy Narag",
      "Andrew Craig"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Qiao Yang",
      "Michael Schuller"
     ],
     "a": [
      "Clare Cruz",
      "Matt Stone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kathi Savage",
      "Michael Barry"
     ],
     "a": [
      "Lisa Munjack",
      "David Barban"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Amanda Nguyen",
      "John Danks"
     ],
     "a": [
      "Lynn Quinn",
      "Geoffrey Baird"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Amanda Nguyen",
      "Qiao Yang"
     ],
     "a": [
      "Tracy Narag",
      "Lisa Munjack"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Linda Vilaikeo",
      "Jennifer Applebee"
     ],
     "a": [
      "Frances Smith",
      "Lynn Quinn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Louis Sapirman",
      "Ed Amato"
     ],
     "a": [
      "Geoffrey Baird",
      "Matt Stone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "John Danks",
      "Michael Schuller"
     ],
     "a": [
      "Andrew Craig",
      "David Barban"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Qiao Yang",
      "Michael Barry"
     ],
     "a": [
      "Lisa Munjack",
      "Geoffrey Baird"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jennifer Applebee",
      "John Danks"
     ],
     "a": [
      "Lynn Quinn",
      "David Barban"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Linda Vilaikeo",
      "Ed Amato"
     ],
     "a": [
      "Frances Smith",
      "Andrew Craig"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kathi Savage",
      "Louis Sapirman"
     ],
     "a": [
      "Clare Cruz",
      "Stanley Okpor"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Qiao Yang",
      "Amanda Nguyen"
     ],
     "a": [
      "Clare Cruz",
      "Frances Smith"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jennifer Applebee",
      "Linda Vilaikeo"
     ],
     "a": [
      "Lynn Quinn",
      "Lisa Munjack"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "John Danks",
      "Michael Barry"
     ],
     "a": [
      "Andrew Craig",
      "Stanley Okpor"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Louis Sapirman",
      "Ed Amato"
     ],
     "a": [
      "David Barban",
      "Matt Stone"
     ]
    }
   ],
   "subs": [
    "Qiao Yang",
    "Matt Stone"
   ]
  },
  {
   "result": "away",
   "week": 4,
   "home": "Jersey Devil",
   "away": "Dill Dinkers Hatboro",
   "time": "2026-09-12T13:00:00",
   "complete": true,
   "homePoints": 592,
   "awayPoints": 638,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Tina Convery",
      "Dave Darch"
     ],
     "a": [
      "Carolyn King",
      "Chris Hannah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Audrey Brisson",
      "Jack Decicco"
     ],
     "a": [
      "Adele Hackney",
      "Andrew Frey"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lori Frank",
      "Darin Gall"
     ],
     "a": [
      "Jill Honicker",
      "Matt Becker"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lorraine Delcampo",
      "Richard Fox"
     ],
     "a": [
      "Bonny Mayerberg",
      "Bill Starnes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Heidi Weinroth",
      "Lori Frank"
     ],
     "a": [
      "Jill Honicker",
      "Betsy Hansbury"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Lorraine Delcampo",
      "Audrey Brisson"
     ],
     "a": [
      "Bonny Mayerberg",
      "Cheryl Raiken"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Darin Gall",
      "Mark Skolnik"
     ],
     "a": [
      "Chris Hannah",
      "Matt Becker"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Richard Fox",
      "Jack Decicco"
     ],
     "a": [
      "Andrew Frey",
      "David Wisch"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Lori Frank",
      "Darin Gall"
     ],
     "a": [
      "Jill Honicker",
      "Matt Becker"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Heidi Weinroth",
      "Richard Fox"
     ],
     "a": [
      "Adele Hackney",
      "Chris Hannah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tina Convery",
      "Mark Skolnik"
     ],
     "a": [
      "Carolyn King",
      "Bill Starnes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Lorraine Delcampo",
      "Dave Darch"
     ],
     "a": [
      "Cheryl Raiken",
      "David Wisch"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Audrey Brisson",
      "Lori Frank"
     ],
     "a": [
      "Adele Hackney",
      "Betsy Hansbury"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Heidi Weinroth",
      "Tina Convery"
     ],
     "a": [
      "Bonny Mayerberg",
      "Cheryl Raiken"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Darin Gall",
      "Dave Darch"
     ],
     "a": [
      "Andrew Frey",
      "Chris Hannah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Jack Decicco",
      "Mark Skolnik"
     ],
     "a": [
      "David Wisch",
      "Bill Starnes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Audrey Brisson",
      "Dave Darch"
     ],
     "a": [
      "Jill Honicker",
      "Andrew Frey"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Tina Convery",
      "Richard Fox"
     ],
     "a": [
      "Adele Hackney",
      "Matt Becker"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Lori Frank",
      "Jack Decicco"
     ],
     "a": [
      "Cheryl Raiken",
      "Bill Starnes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lorraine Delcampo",
      "Mark Skolnik"
     ],
     "a": [
      "Carolyn King",
      "David Wisch"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Lorraine Delcampo",
      "Lori Frank"
     ],
     "a": [
      "Jill Honicker",
      "Bonny Mayerberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Audrey Brisson",
      "Heidi Weinroth"
     ],
     "a": [
      "Adele Hackney",
      "Betsy Hansbury"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Jack Decicco",
      "Darin Gall"
     ],
     "a": [
      "Andrew Frey",
      "Bill Starnes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Richard Fox",
      "Mark Skolnik"
     ],
     "a": [
      "Matt Becker",
      "Chris Hannah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Heidi Weinroth",
      "Darin Gall"
     ],
     "a": [
      "Carolyn King",
      "Matt Becker"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tina Convery",
      "Dave Darch"
     ],
     "a": [
      "Betsy Hansbury",
      "Chris Hannah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Lori Frank",
      "Mark Skolnik"
     ],
     "a": [
      "Adele Hackney",
      "David Wisch"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Audrey Brisson",
      "Richard Fox"
     ],
     "a": [
      "Cheryl Raiken",
      "Andrew Frey"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Heidi Weinroth",
      "Lorraine Delcampo"
     ],
     "a": [
      "Jill Honicker",
      "Carolyn King"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Tina Convery",
      "Audrey Brisson"
     ],
     "a": [
      "Betsy Hansbury",
      "Bonny Mayerberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Dave Darch",
      "Jack Decicco"
     ],
     "a": [
      "Andrew Frey",
      "Matt Becker"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Richard Fox",
      "Darin Gall"
     ],
     "a": [
      "Chris Hannah",
      "Bill Starnes"
     ]
    }
   ],
   "subs": [
    "Jill Honicker",
    "Bill Starnes"
   ]
  },
  {
   "result": "away",
   "week": 4,
   "home": "Bounce Philly",
   "away": "Forward",
   "time": "2026-09-12T14:00:00",
   "complete": true,
   "homePoints": 510,
   "awayPoints": 632,
   "homeGW": 9,
   "awayGW": 23,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Barbara Hand",
      "Michael Burns"
     ],
     "a": [
      "Lori Wild",
      "Dave Slomeana"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Andria Lochtenbergh",
      "Derik Lochtenbergh"
     ],
     "a": [
      "Jennifer Laroque",
      "Dan Callaghan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Maria Medina",
      "Scott Walden"
     ],
     "a": [
      "Crista Renauro",
      "Chris Allander"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Chantal Reme",
      "Paul Mcalary"
     ],
     "a": [
      "Kim Slomeana",
      "Patrick Neary"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Barbara Hand",
      "Andria Lochtenbergh"
     ],
     "a": [
      "Mary Hain",
      "Kim Slomeana"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Chantal Reme",
      "Debra Oconnor"
     ],
     "a": [
      "Lori Wild",
      "Crista Renauro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Paul Mcalary",
      "Michael Burns"
     ],
     "a": [
      "Patrick Neary",
      "Chris Allander"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Derik Lochtenbergh",
      "Scott Walden"
     ],
     "a": [
      "Dan Callaghan",
      "Dave Slomeana"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Chantal Reme",
      "Michael Burns"
     ],
     "a": [
      "Crista Renauro",
      "Dave Slomeana"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Maria Medina",
      "Scott Walden"
     ],
     "a": [
      "Lori Wild",
      "Dan Callaghan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Andria Lochtenbergh",
      "Derik Lochtenbergh"
     ],
     "a": [
      "Mary Hain",
      "Patrick Neary"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Debra Oconnor",
      "Paul Mcalary"
     ],
     "a": [
      "Jennifer Laroque",
      "Chris Allander"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Debra Oconnor",
      "Maria Medina"
     ],
     "a": [
      "Lori Wild",
      "Mary Hain"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Barbara Hand",
      "Chantal Reme"
     ],
     "a": [
      "Kim Slomeana",
      "Jennifer Laroque"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Michael Burns",
      "Paul Mcalary"
     ],
     "a": [
      "Dan Callaghan",
      "Chris Allander"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Scott Walden",
      "Derik Lochtenbergh"
     ],
     "a": [
      "Patrick Neary",
      "Dave Slomeana"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Andria Lochtenbergh",
      "Michael Burns"
     ],
     "a": [
      "Mary Hain",
      "Dan Callaghan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Barbara Hand",
      "Paul Mcalary"
     ],
     "a": [
      "Jennifer Laroque",
      "Chris Allander"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Chantal Reme",
      "Scott Walden"
     ],
     "a": [
      "Kim Slomeana",
      "Dave Slomeana"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Maria Medina",
      "Derik Lochtenbergh"
     ],
     "a": [
      "Crista Renauro",
      "Patrick Neary"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Barbara Hand",
      "Andria Lochtenbergh"
     ],
     "a": [
      "Crista Renauro",
      "Jennifer Laroque"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Maria Medina",
      "Debra Oconnor"
     ],
     "a": [
      "Lori Wild",
      "Mary Hain"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Paul Mcalary",
      "Derik Lochtenbergh"
     ],
     "a": [
      "Dan Callaghan",
      "Patrick Neary"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Scott Walden",
      "Michael Burns"
     ],
     "a": [
      "Dave Slomeana",
      "Chris Allander"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Barbara Hand",
      "Paul Mcalary"
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
      "Chantal Reme",
      "Scott Walden"
     ],
     "a": [
      "Kim Slomeana",
      "Dan Callaghan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Andria Lochtenbergh",
      "Michael Burns"
     ],
     "a": [
      "Lori Wild",
      "Dave Slomeana"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Maria Medina",
      "Derik Lochtenbergh"
     ],
     "a": [
      "Mary Hain",
      "Patrick Neary"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Barbara Hand",
      "Chantal Reme"
     ],
     "a": [
      "Kim Slomeana",
      "Lori Wild"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Debra Oconnor",
      "Andria Lochtenbergh"
     ],
     "a": [
      "Crista Renauro",
      "Jennifer Laroque"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Michael Burns",
      "Derik Lochtenbergh"
     ],
     "a": [
      "Chris Allander",
      "Dan Callaghan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Paul Mcalary",
      "Scott Walden"
     ],
     "a": [
      "Patrick Neary",
      "Dave Slomeana"
     ]
    }
   ],
   "subs": [
    "Maria Medina",
    "Patrick Neary",
    "Dave Slomeana",
    "Debra Oconnor"
   ]
  },
  {
   "result": "home",
   "week": 4,
   "home": "Pickleball Palace Black",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-09-12T14:00:00",
   "complete": true,
   "homePoints": 650,
   "awayPoints": 438,
   "homeGW": 26,
   "awayGW": 6,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Anne Buckley",
      "James Azarowicz"
     ],
     "a": [
      "Lucy Sha",
      "Zuojun Zhang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Terri Marxen",
      "Matt Mcnulty"
     ],
     "a": [
      "Laura Peng",
      "Jerry Ridder"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Debbie Spurr",
      "Jake Denooyer"
     ],
     "a": [
      "Irene Guile",
      "James Carter"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kristin Duva",
      "Gerard Scipione"
     ],
     "a": [
      "Beth Pardilla",
      "Adam Chu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Cheryl Minerowicz",
      "Theresa Corderi"
     ],
     "a": [
      "Irene Guile",
      "Corinne Demeuse"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Debbie Spurr",
      "Terri Marxen"
     ],
     "a": [
      "Lucy Sha",
      "Beth Pardilla"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Mark Garner",
      "Jake Denooyer"
     ],
     "a": [
      "Zuojun Zhang",
      "Adam Chu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "James Azarowicz",
      "Gerard Scipione"
     ],
     "a": [
      "Jerry Ridder",
      "James Carter"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Cheryl Minerowicz",
      "Matt Mcnulty"
     ],
     "a": [
      "Lucy Sha",
      "Zuojun Zhang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Anne Buckley",
      "Jake Denooyer"
     ],
     "a": [
      "Laura Peng",
      "Jerry Ridder"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Theresa Corderi",
      "James Azarowicz"
     ],
     "a": [
      "Beth Pardilla",
      "James Carter"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kristin Duva",
      "Mark Garner"
     ],
     "a": [
      "Corinne Demeuse",
      "Adam Chu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Theresa Corderi",
      "Debbie Spurr"
     ],
     "a": [
      "Irene Guile",
      "Corinne Demeuse"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Anne Buckley",
      "Terri Marxen"
     ],
     "a": [
      "Lucy Sha",
      "Beth Pardilla"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Mark Garner",
      "James Azarowicz"
     ],
     "a": [
      "Jerry Ridder",
      "Zuojun Zhang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Gerard Scipione",
      "Jake Denooyer"
     ],
     "a": [
      "James Carter",
      "Adam Chu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kristin Duva",
      "Matt Mcnulty"
     ],
     "a": [
      "Beth Pardilla",
      "Adam Chu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Theresa Corderi",
      "Jake Denooyer"
     ],
     "a": [
      "Laura Peng",
      "James Carter"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Terri Marxen",
      "Mark Garner"
     ],
     "a": [
      "Irene Guile",
      "Zuojun Zhang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Cheryl Minerowicz",
      "Gerard Scipione"
     ],
     "a": [
      "Corinne Demeuse",
      "Jerry Ridder"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Theresa Corderi",
      "Kristin Duva"
     ],
     "a": [
      "Beth Pardilla",
      "Irene Guile"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Debbie Spurr",
      "Anne Buckley"
     ],
     "a": [
      "Lucy Sha",
      "Laura Peng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "James Azarowicz",
      "Jake Denooyer"
     ],
     "a": [
      "Jerry Ridder",
      "Zuojun Zhang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Matt Mcnulty",
      "Mark Garner"
     ],
     "a": [
      "James Carter",
      "Adam Chu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Terri Marxen",
      "Gerard Scipione"
     ],
     "a": [
      "Lucy Sha",
      "Adam Chu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Debbie Spurr",
      "Matt Mcnulty"
     ],
     "a": [
      "Corinne Demeuse",
      "James Carter"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Cheryl Minerowicz",
      "Mark Garner"
     ],
     "a": [
      "Irene Guile",
      "Jerry Ridder"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Anne Buckley",
      "James Azarowicz"
     ],
     "a": [
      "Laura Peng",
      "Zuojun Zhang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Cheryl Minerowicz",
      "Kristin Duva"
     ],
     "a": [
      "Laura Peng",
      "Beth Pardilla"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Theresa Corderi",
      "Anne Buckley"
     ],
     "a": [
      "Corinne Demeuse",
      "Lucy Sha"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Jake Denooyer",
      "James Azarowicz"
     ],
     "a": [
      "Jerry Ridder",
      "Adam Chu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Matt Mcnulty",
      "Gerard Scipione"
     ],
     "a": [
      "James Carter",
      "Zuojun Zhang"
     ]
    }
   ],
   "subs": [
    "Zuojun Zhang",
    "Corinne Demeuse",
    "Lucy Sha",
    "Adam Chu",
    "Beth Pardilla",
    "Mark Garner",
    "Irene Guile",
    "Laura Peng"
   ]
  },
  {
   "result": "away",
   "week": 4,
   "home": "Picklr Fair Lawn",
   "away": "Allstar Pickler",
   "time": "2026-09-12T14:30:00",
   "complete": true,
   "homePoints": 577,
   "awayPoints": 579,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Patty Direzze",
      "Peter O'Farrill"
     ],
     "a": [
      "Ying Lin",
      "Pilot Sung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Marcia Rathjen",
      "Dennis Tenorio"
     ],
     "a": [
      "Jessica Ren",
      "Alex Chang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Maria Fanfa",
      "Eldon Carandan"
     ],
     "a": [
      "Jessie Fang",
      "James Xiong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Mylene Tenorio",
      "Chuck Silvester"
     ],
     "a": [
      "Lingshan Hsieh",
      "Dajie （David） Yang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Patricia Cordts",
      "Olga Sedycias"
     ],
     "a": [
      "Lingshan Hsieh",
      "Ling Tsui"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Marcia Rathjen",
      "Patty Direzze"
     ],
     "a": [
      "Irish Lee",
      "Ying Lin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Chuck Silvester",
      "Eldon Carandan"
     ],
     "a": [
      "Alex Chang",
      "Bing Zhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Michael Hsieh",
      "Craig Rathjen"
     ],
     "a": [
      "Dajie （David） Yang",
      "Pilot Sung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Olga Sedycias",
      "Dennis Tenorio"
     ],
     "a": [
      "Ying Lin",
      "Bing Zhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Maria Fanfa",
      "Peter O'Farrill"
     ],
     "a": [
      "Ling Tsui",
      "Pilot Sung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Mylene Tenorio",
      "Chuck Silvester"
     ],
     "a": [
      "Jessica Ren",
      "Dajie （David） Yang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Patricia Cordts",
      "Michael Hsieh"
     ],
     "a": [
      "Irish Lee",
      "Alex Chang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Maria Fanfa",
      "Mylene Tenorio"
     ],
     "a": [
      "Ying Lin",
      "Lingshan Hsieh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Marcia Rathjen",
      "Patricia Cordts"
     ],
     "a": [
      "Jessie Fang",
      "Ling Tsui"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Craig Rathjen",
      "Eldon Carandan"
     ],
     "a": [
      "Alex Chang",
      "Dajie （David） Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Peter O'Farrill",
      "Michael Hsieh"
     ],
     "a": [
      "Bing Zhu",
      "Pilot Sung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Mylene Tenorio",
      "Eldon Carandan"
     ],
     "a": [
      "Ling Tsui",
      "Alex Chang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Maria Fanfa",
      "Dennis Tenorio"
     ],
     "a": [
      "Jessie Fang",
      "Dajie （David） Yang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Olga Sedycias",
      "Craig Rathjen"
     ],
     "a": [
      "Jessica Ren",
      "Bing Zhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Patricia Cordts",
      "Chuck Silvester"
     ],
     "a": [
      "Ying Lin",
      "Pilot Sung"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Olga Sedycias",
      "Marcia Rathjen"
     ],
     "a": [
      "Jessie Fang",
      "Ying Lin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Patty Direzze",
      "Patricia Cordts"
     ],
     "a": [
      "Lingshan Hsieh",
      "Irish Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Michael Hsieh",
      "Craig Rathjen"
     ],
     "a": [
      "Dajie （David） Yang",
      "Pilot Sung"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Peter O'Farrill",
      "Chuck Silvester"
     ],
     "a": [
      "Bing Zhu",
      "Alex Chang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Maria Fanfa",
      "Eldon Carandan"
     ],
     "a": [
      "Jessica Ren",
      "Alex Chang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Marcia Rathjen",
      "Dennis Tenorio"
     ],
     "a": [
      "Lingshan Hsieh",
      "Dajie （David） Yang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Patty Direzze",
      "Peter O'Farrill"
     ],
     "a": [
      "Jessie Fang",
      "Pilot Sung"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Mylene Tenorio",
      "Michael Hsieh"
     ],
     "a": [
      "Irish Lee",
      "Bing Zhu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Olga Sedycias",
      "Maria Fanfa"
     ],
     "a": [
      "Ying Lin",
      "Ling Tsui"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Patty Direzze",
      "Patricia Cordts"
     ],
     "a": [
      "Jessica Ren",
      "Irish Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Chuck Silvester",
      "Michael Hsieh"
     ],
     "a": [
      "Alex Chang",
      "Dajie （David） Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Dennis Tenorio",
      "Craig Rathjen"
     ],
     "a": [
      "Pilot Sung",
      "Bing Zhu"
     ]
    }
   ],
   "subs": [
    "Pilot Sung",
    "Ying Lin"
   ]
  },
  {
   "result": "home",
   "week": 4,
   "home": "Bounce Malvern",
   "away": "Players Courtyard",
   "time": "2026-09-12T14:30:00",
   "complete": true,
   "homePoints": 658,
   "awayPoints": 534,
   "homeGW": 24,
   "awayGW": 8,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Kim Biddle",
      "Calvin Giles"
     ],
     "a": [
      "Xiaojun Yuan",
      "Nghia Bui"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Carolyn Laroque",
      "Jeffrey Lindstrom"
     ],
     "a": [
      "Tracy Giunta",
      "Tom Giunta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Heather King",
      "Harihar Chudamani"
     ],
     "a": [
      "Tina White",
      "Edward Verish"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Vicki Luckett",
      "George Nouaime"
     ],
     "a": [
      "Claudia Forte",
      "Craig Mehnert"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kim Biddle",
      "Heather King"
     ],
     "a": [
      "Claudia Forte",
      "Elisa Riesenbach"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Carolyn Laroque",
      "Vicki Luckett"
     ],
     "a": [
      "Tracy Giunta",
      "Xiaojun Yuan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jeffrey Lindstrom",
      "George Nouaime"
     ],
     "a": [
      "Craig Mehnert",
      "Tom Giunta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jeff Pillar",
      "Brian Schartz"
     ],
     "a": [
      "Nghia Bui",
      "David Mcdonough"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Carolyn Laroque",
      "Harihar Chudamani"
     ],
     "a": [
      "Xiaojun Yuan",
      "Craig Mehnert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Vicki Luckett",
      "Jeffrey Lindstrom"
     ],
     "a": [
      "Claudia Forte",
      "Edward Verish"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Heather King",
      "Calvin Giles"
     ],
     "a": [
      "Elisa Riesenbach",
      "David Mcdonough"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Kim Biddle",
      "Brian Schartz"
     ],
     "a": [
      "Tina White",
      "Tom Giunta"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kim Biddle",
      "Carolyn Laroque"
     ],
     "a": [
      "Elisa Riesenbach",
      "Tina White"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Heather King",
      "Vicki Luckett"
     ],
     "a": [
      "Tracy Giunta",
      "Claudia Forte"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "George Nouaime",
      "Harihar Chudamani"
     ],
     "a": [
      "Craig Mehnert",
      "Nghia Bui"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Calvin Giles",
      "Jeff Pillar"
     ],
     "a": [
      "Tom Giunta",
      "Edward Verish"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Vicki Luckett",
      "Brian Schartz"
     ],
     "a": [
      "Tina White",
      "Craig Mehnert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kim Biddle",
      "George Nouaime"
     ],
     "a": [
      "Elisa Riesenbach",
      "Edward Verish"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Carolyn Laroque",
      "Jeffrey Lindstrom"
     ],
     "a": [
      "Tracy Giunta",
      "David Mcdonough"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Heather King",
      "Jeff Pillar"
     ],
     "a": [
      "Xiaojun Yuan",
      "Nghia Bui"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Vicki Luckett",
      "Carolyn Laroque"
     ],
     "a": [
      "Tina White",
      "Elisa Riesenbach"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Heather King",
      "Kim Biddle"
     ],
     "a": [
      "Tracy Giunta",
      "Claudia Forte"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Calvin Giles",
      "Brian Schartz"
     ],
     "a": [
      "Edward Verish",
      "David Mcdonough"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jeff Pillar",
      "George Nouaime"
     ],
     "a": [
      "Nghia Bui",
      "Tom Giunta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Carolyn Laroque",
      "Jeff Pillar"
     ],
     "a": [
      "Xiaojun Yuan",
      "Craig Mehnert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Vicki Luckett",
      "Jeffrey Lindstrom"
     ],
     "a": [
      "Tina White",
      "Edward Verish"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Heather King",
      "George Nouaime"
     ],
     "a": [
      "Claudia Forte",
      "Nghia Bui"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Kim Biddle",
      "Harihar Chudamani"
     ],
     "a": [
      "Tracy Giunta",
      "David Mcdonough"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Carolyn Laroque",
      "Heather King"
     ],
     "a": [
      "Xiaojun Yuan",
      "Tracy Giunta"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Kim Biddle",
      "Vicki Luckett"
     ],
     "a": [
      "Elisa Riesenbach",
      "Claudia Forte"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Harihar Chudamani",
      "Brian Schartz"
     ],
     "a": [
      "Craig Mehnert",
      "Nghia Bui"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Calvin Giles",
      "Jeffrey Lindstrom"
     ],
     "a": [
      "Tom Giunta",
      "David Mcdonough"
     ]
    }
   ],
   "subs": [
    "Tina White",
    "Carolyn Laroque",
    "Vicki Luckett",
    "Claudia Forte",
    "Calvin Giles",
    "Elisa Riesenbach"
   ]
  },
  {
   "result": "away",
   "week": 5,
   "home": "One Love",
   "away": "Monroe",
   "time": "2026-09-19T13:00:00",
   "complete": true,
   "homePoints": 563,
   "awayPoints": 619,
   "homeGW": 13,
   "awayGW": 19,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Cheryl Parker",
      "Keith Seager"
     ],
     "a": [
      "Amy Farrell",
      "Anthony Manzo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Janet Bodner",
      "David Katz"
     ],
     "a": [
      "Olga Turova",
      "Tiran Rishon"
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
      "Filomena Rega",
      "Jeffrey Quinlan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Michele Collins",
      "Henry Dornemann"
     ],
     "a": [
      "Audrey Lotti",
      "Oleg Goldinberg"
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
      "Olga Turova",
      "Filomena Rega"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Tracy Kaban",
      "Michele Collins"
     ],
     "a": [
      "Audrey Lotti",
      "Bonnie Russo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Phillip Perry",
      "David Katz"
     ],
     "a": [
      "Anthony Manzo",
      "Tiran Rishon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Henry Dornemann",
      "Erik Harrison"
     ],
     "a": [
      "Bob Debarge",
      "Oleg Goldinberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Cheryl Parker",
      "Keith Seager"
     ],
     "a": [
      "Olga Turova",
      "Anthony Manzo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Janet Bodner",
      "David Katz"
     ],
     "a": [
      "Audrey Lotti",
      "Jeffrey Quinlan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Amy Santopietro",
      "Timothy Cassidy"
     ],
     "a": [
      "Amy Farrell",
      "Tiran Rishon"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Michele Collins",
      "Henry Dornemann"
     ],
     "a": [
      "Bonnie Russo",
      "Bob Debarge"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Cheryl Parker",
      "Deirdre Monahan"
     ],
     "a": [
      "Olga Turova",
      "Filomena Rega"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Michele Collins",
      "Tracy Kaban"
     ],
     "a": [
      "Amy Farrell",
      "Bonnie Russo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "David Katz",
      "Phillip Perry"
     ],
     "a": [
      "Tiran Rishon",
      "Bob Debarge"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Henry Dornemann",
      "Erik Harrison"
     ],
     "a": [
      "Jeffrey Quinlan",
      "Oleg Goldinberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Deirdre Monahan",
      "Keith Seager"
     ],
     "a": [
      "Olga Turova",
      "Tiran Rishon"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Michele Collins",
      "Timothy Cassidy"
     ],
     "a": [
      "Audrey Lotti",
      "Oleg Goldinberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Tracy Kaban",
      "Erik Harrison"
     ],
     "a": [
      "Filomena Rega",
      "Anthony Manzo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Amy Santopietro",
      "Phillip Perry"
     ],
     "a": [
      "Amy Farrell",
      "Jeffrey Quinlan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Cheryl Parker",
      "Amy Santopietro"
     ],
     "a": [
      "Amy Farrell",
      "Filomena Rega"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Janet Bodner",
      "Deirdre Monahan"
     ],
     "a": [
      "Audrey Lotti",
      "Bonnie Russo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Erik Harrison",
      "Phillip Perry"
     ],
     "a": [
      "Oleg Goldinberg",
      "Anthony Manzo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Henry Dornemann",
      "Keith Seager"
     ],
     "a": [
      "Jeffrey Quinlan",
      "Bob Debarge"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Deirdre Monahan",
      "Keith Seager"
     ],
     "a": [
      "Filomena Rega",
      "Anthony Manzo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Michele Collins",
      "Timothy Cassidy"
     ],
     "a": [
      "Amy Farrell",
      "Tiran Rishon"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Tracy Kaban",
      "Erik Harrison"
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
      "Amy Santopietro",
      "Phillip Perry"
     ],
     "a": [
      "Bonnie Russo",
      "Oleg Goldinberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Tracy Kaban",
      "Cheryl Parker"
     ],
     "a": [
      "Audrey Lotti",
      "Olga Turova"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Deirdre Monahan",
      "Janet Bodner"
     ],
     "a": [
      "Amy Farrell",
      "Filomena Rega"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Phillip Perry",
      "Timothy Cassidy"
     ],
     "a": [
      "Tiran Rishon",
      "Anthony Manzo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Keith Seager",
      "Henry Dornemann"
     ],
     "a": [
      "Jeffrey Quinlan",
      "Bob Debarge"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 5,
   "home": "Jersey Devil",
   "away": "Bounce Malvern",
   "time": "2026-09-19T13:00:00",
   "complete": true,
   "homePoints": 632,
   "awayPoints": 544,
   "homeGW": 22,
   "awayGW": 10,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Amy Moore",
      "Eric Smith"
     ],
     "a": [
      "Heather King",
      "Anuraag Verma"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Lorraine Delcampo",
      "Darin Gall"
     ],
     "a": [
      "Amy Condi",
      "George Nouaime"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Audrey Brisson",
      "Mark Skolnik"
     ],
     "a": [
      "Zalene Corey",
      "Jeffrey Lindstrom"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jenn Allen",
      "Jack Decicco"
     ],
     "a": [
      "Eden Paredes",
      "Matthew Memmo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Lisa Pinder",
      "Jenn Allen"
     ],
     "a": [
      "Zalene Corey",
      "Kimberly Kusumoto"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Amy Moore",
      "Audrey Brisson"
     ],
     "a": [
      "Eden Paredes",
      "Heather King"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Eric Smith",
      "Darin Gall"
     ],
     "a": [
      "Jeffrey Lindstrom",
      "Matthew Memmo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Joe Moore",
      "Jack Decicco"
     ],
     "a": [
      "Harihar Chudamani",
      "Brian Schartz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Lorraine Delcampo",
      "Darin Gall"
     ],
     "a": [
      "Amy Condi",
      "Harihar Chudamani"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Lisa Pinder",
      "Mark Skolnik"
     ],
     "a": [
      "Heather King",
      "George Nouaime"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Audrey Brisson",
      "Eric Smith"
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
     "as": 15,
     "h": [
      "Amy Moore",
      "Joe Moore"
     ],
     "a": [
      "Kimberly Kusumoto",
      "Anuraag Verma"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Amy Moore",
      "Lisa Pinder"
     ],
     "a": [
      "Heather King",
      "Amy Condi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Lorraine Delcampo",
      "Jenn Allen"
     ],
     "a": [
      "Kimberly Kusumoto",
      "Eden Paredes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Eric Smith",
      "Joe Moore"
     ],
     "a": [
      "Anuraag Verma",
      "Jeffrey Lindstrom"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jack Decicco",
      "Mark Skolnik"
     ],
     "a": [
      "Matthew Memmo",
      "Brian Schartz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lorraine Delcampo",
      "Mark Skolnik"
     ],
     "a": [
      "Eden Paredes",
      "Harihar Chudamani"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jenn Allen",
      "Jack Decicco"
     ],
     "a": [
      "Zalene Corey",
      "Brian Schartz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lisa Pinder",
      "Darin Gall"
     ],
     "a": [
      "Heather King",
      "Matthew Memmo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Audrey Brisson",
      "Eric Smith"
     ],
     "a": [
      "Amy Condi",
      "George Nouaime"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Audrey Brisson",
      "Jenn Allen"
     ],
     "a": [
      "Kimberly Kusumoto",
      "Amy Condi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Amy Moore",
      "Lorraine Delcampo"
     ],
     "a": [
      "Zalene Corey",
      "Eden Paredes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jack Decicco",
      "Joe Moore"
     ],
     "a": [
      "Jeffrey Lindstrom",
      "Anuraag Verma"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Eric Smith",
      "Darin Gall"
     ],
     "a": [
      "Harihar Chudamani",
      "George Nouaime"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Lorraine Delcampo",
      "Jack Decicco"
     ],
     "a": [
      "Heather King",
      "Brian Schartz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Audrey Brisson",
      "Mark Skolnik"
     ],
     "a": [
      "Eden Paredes",
      "George Nouaime"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Lisa Pinder",
      "Eric Smith"
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
     "as": 13,
     "h": [
      "Amy Moore",
      "Joe Moore"
     ],
     "a": [
      "Amy Condi",
      "Anuraag Verma"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Audrey Brisson",
      "Lisa Pinder"
     ],
     "a": [
      "Zalene Corey",
      "Eden Paredes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Amy Moore",
      "Jenn Allen"
     ],
     "a": [
      "Heather King",
      "Kimberly Kusumoto"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Darin Gall",
      "Joe Moore"
     ],
     "a": [
      "Matthew Memmo",
      "Jeffrey Lindstrom"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Eric Smith",
      "Mark Skolnik"
     ],
     "a": [
      "Anuraag Verma",
      "Harihar Chudamani"
     ]
    }
   ],
   "subs": [
    "Jenn Allen",
    "Amy Condi",
    "Lisa Pinder"
   ]
  },
  {
   "result": "away",
   "week": 5,
   "home": "Pickleball Kingdom Hamilton Prime Time",
   "away": "ACE Moorestown",
   "time": "2026-09-19T13:00:00",
   "complete": true,
   "homePoints": 529,
   "awayPoints": 640,
   "homeGW": 11,
   "awayGW": 21,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lori Pinelli",
      "Ed Mendoza"
     ],
     "a": [
      "Amy Neckes",
      "Anthony Viola"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Yayuan Lien",
      "Gregory Mcquibben"
     ],
     "a": [
      "Tinglan Zhao",
      "Steven Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Mary Foster",
      "Warren Howard"
     ],
     "a": [
      "Angela Bartelt",
      "Greg Taylor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Franchesa Mclean",
      "Jimbo Jimenez"
     ],
     "a": [
      "Lolita Hagen",
      "Dennis Higman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Luz Bonner",
      "Franchesa Mclean"
     ],
     "a": [
      "Ginger Evans",
      "Lolita Hagen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Mary Foster",
      "Lori Pinelli"
     ],
     "a": [
      "Tinglan Zhao",
      "Angela Bartelt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Jimbo Jimenez",
      "Ed Mendoza"
     ],
     "a": [
      "Greg Taylor",
      "Dennis Higman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Fritz Jean-Brian",
      "Warren Howard"
     ],
     "a": [
      "Rick Weiser",
      "Martyn Babitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Mary Foster",
      "Fritz Jean-Brian"
     ],
     "a": [
      "Ginger Evans",
      "Dennis Higman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Yayuan Lien",
      "Jimbo Jimenez"
     ],
     "a": [
      "Angela Bartelt",
      "Steven Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Luz Bonner",
      "Ed Mendoza"
     ],
     "a": [
      "Tinglan Zhao",
      "Anthony Viola"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Franchesa Mclean",
      "Gregory Mcquibben"
     ],
     "a": [
      "Amy Neckes",
      "Martyn Babitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Lori Pinelli",
      "Franchesa Mclean"
     ],
     "a": [
      "Tinglan Zhao",
      "Ginger Evans"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Luz Bonner",
      "Yayuan Lien"
     ],
     "a": [
      "Lolita Hagen",
      "Amy Neckes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Fritz Jean-Brian",
      "Gregory Mcquibben"
     ],
     "a": [
      "Anthony Viola",
      "Greg Taylor"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Ed Mendoza",
      "Warren Howard"
     ],
     "a": [
      "Rick Weiser",
      "Steven Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Mary Foster",
      "Warren Howard"
     ],
     "a": [
      "Angela Bartelt",
      "Dennis Higman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Luz Bonner",
      "Jimbo Jimenez"
     ],
     "a": [
      "Amy Neckes",
      "Greg Taylor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Yayuan Lien",
      "Ed Mendoza"
     ],
     "a": [
      "Ginger Evans",
      "Steven Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Franchesa Mclean",
      "Fritz Jean-Brian"
     ],
     "a": [
      "Tinglan Zhao",
      "Martyn Babitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Mary Foster",
      "Franchesa Mclean"
     ],
     "a": [
      "Lolita Hagen",
      "Ginger Evans"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lori Pinelli",
      "Yayuan Lien"
     ],
     "a": [
      "Angela Bartelt",
      "Tinglan Zhao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Fritz Jean-Brian",
      "Jimbo Jimenez"
     ],
     "a": [
      "Dennis Higman",
      "Steven Heller"
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
      "Rick Weiser",
      "Anthony Viola"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Luz Bonner",
      "Jimbo Jimenez"
     ],
     "a": [
      "Ginger Evans",
      "Greg Taylor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Lori Pinelli",
      "Gregory Mcquibben"
     ],
     "a": [
      "Tinglan Zhao",
      "Steven Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Yayuan Lien",
      "Ed Mendoza"
     ],
     "a": [
      "Angela Bartelt",
      "Anthony Viola"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Mary Foster",
      "Fritz Jean-Brian"
     ],
     "a": [
      "Amy Neckes",
      "Martyn Babitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Mary Foster",
      "Luz Bonner"
     ],
     "a": [
      "Lolita Hagen",
      "Amy Neckes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Franchesa Mclean",
      "Yayuan Lien"
     ],
     "a": [
      "Angela Bartelt",
      "Ginger Evans"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Fritz Jean-Brian",
      "Jimbo Jimenez"
     ],
     "a": [
      "Martyn Babitz",
      "Rick Weiser"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Ed Mendoza",
      "Warren Howard"
     ],
     "a": [
      "Greg Taylor",
      "Dennis Higman"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 5,
   "home": "Colts Neck Racquet Club",
   "away": "Premiere Dinkers",
   "time": "2026-09-19T13:00:00",
   "complete": true,
   "homePoints": 623,
   "awayPoints": 601,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Cindy Rossine",
      "Frank Iacono"
     ],
     "a": [
      "Risa Korzekwinski",
      "John Rogers"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Christina Zumbo-Zerega",
      "Frank Leccese"
     ],
     "a": [
      "Alexandra Romagnolo",
      "Joseph Romagnolo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Sharon Rarig",
      "Frank Messina"
     ],
     "a": [
      "Denise Stassi",
      "John Stassi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Melissa Freedman",
      "Jonathan Gross"
     ],
     "a": [
      "Karen Chin",
      "David Cardinale"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Melissa Freedman",
      "Christina Zumbo-Zerega"
     ],
     "a": [
      "Karen Chin",
      "Denise Caracciolo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Sharon Rarig",
      "Gina Lavignera"
     ],
     "a": [
      "Risa Korzekwinski",
      "Alexandra Romagnolo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Frank Leccese",
      "Jonathan Gross"
     ],
     "a": [
      "John Rogers",
      "Joseph Romagnolo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Frank Messina",
      "Daniel Brennan"
     ],
     "a": [
      "Michael Keane",
      "John Stassi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sharon Rarig",
      "Frank Iacono"
     ],
     "a": [
      "Karen Chin",
      "John Stassi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Cindy Rossine",
      "Frank Leccese"
     ],
     "a": [
      "Alexandra Romagnolo",
      "John Rogers"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Gina Lavignera",
      "Daniel Brennan"
     ],
     "a": [
      "Denise Caracciolo",
      "David Cardinale"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Christina Zumbo-Zerega",
      "Jonathan Gross"
     ],
     "a": [
      "Risa Korzekwinski",
      "Michael Keane"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Cindy Rossine",
      "Gina Lavignera"
     ],
     "a": [
      "Karen Chin",
      "Alexandra Romagnolo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Melissa Freedman",
      "Sharon Rarig"
     ],
     "a": [
      "Risa Korzekwinski",
      "Denise Stassi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Frank Iacono",
      "Daniel Brennan"
     ],
     "a": [
      "John Rogers",
      "Joseph Romagnolo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Jonathan Gross",
      "Frank Messina"
     ],
     "a": [
      "John Stassi",
      "Michael Keane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Cindy Rossine",
      "Frank Leccese"
     ],
     "a": [
      "Karen Chin",
      "David Cardinale"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Melissa Freedman",
      "Frank Messina"
     ],
     "a": [
      "Alexandra Romagnolo",
      "John Stassi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Christina Zumbo-Zerega",
      "Frank Iacono"
     ],
     "a": [
      "Denise Stassi",
      "Joseph Romagnolo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Gina Lavignera",
      "Jonathan Gross"
     ],
     "a": [
      "Risa Korzekwinski",
      "Michael Keane"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Cindy Rossine",
      "Sharon Rarig"
     ],
     "a": [
      "Karen Chin",
      "Denise Caracciolo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Christina Zumbo-Zerega",
      "Melissa Freedman"
     ],
     "a": [
      "Risa Korzekwinski",
      "Denise Stassi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Frank Leccese",
      "Frank Iacono"
     ],
     "a": [
      "John Rogers",
      "John Stassi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jonathan Gross",
      "Daniel Brennan"
     ],
     "a": [
      "David Cardinale",
      "Michael Keane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Gina Lavignera",
      "Daniel Brennan"
     ],
     "a": [
      "Karen Chin",
      "Michael Keane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Christina Zumbo-Zerega",
      "Frank Messina"
     ],
     "a": [
      "Risa Korzekwinski",
      "Joseph Romagnolo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Melissa Freedman",
      "Frank Leccese"
     ],
     "a": [
      "Denise Caracciolo",
      "John Rogers"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Sharon Rarig",
      "Frank Iacono"
     ],
     "a": [
      "Denise Stassi",
      "David Cardinale"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Melissa Freedman",
      "Gina Lavignera"
     ],
     "a": [
      "Karen Chin",
      "Denise Stassi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Cindy Rossine",
      "Christina Zumbo-Zerega"
     ],
     "a": [
      "Risa Korzekwinski",
      "Denise Caracciolo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Frank Leccese",
      "Daniel Brennan"
     ],
     "a": [
      "John Rogers",
      "Michael Keane"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Frank Iacono",
      "Frank Messina"
     ],
     "a": [
      "David Cardinale",
      "Joseph Romagnolo"
     ]
    }
   ],
   "subs": [
    "Michael Keane"
   ]
  },
  {
   "result": "away",
   "week": 5,
   "home": "PKLD",
   "away": "Life Time Red Bank",
   "time": "2026-09-19T13:00:00",
   "complete": true,
   "homePoints": 592,
   "awayPoints": 597,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Petra Jones",
      "Freddy Alicea"
     ],
     "a": [
      "Elaine Aquilone",
      "Leo Decker"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Karen Rosenberg",
      "Elliot Fishman"
     ],
     "a": [
      "Jackie Coneeny",
      "Mark Zamkoff"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Michele Latwis",
      "Michael Rosenmertz"
     ],
     "a": [
      "Kathy Baker",
      "Daniel Ryan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jennifer Makfinsky",
      "Steven Truzzolino"
     ],
     "a": [
      "Nicole Tarallo",
      "Christopher Brett"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jennifer Makfinsky",
      "Petra Jones"
     ],
     "a": [
      "Nicole Tarallo",
      "Marie Walsh Mccarty"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Bobbi Rentko",
      "Antoinette Mccormick"
     ],
     "a": [
      "Kathy Baker",
      "Jackie Coneeny"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Steven Truzzolino",
      "Freddy Alicea"
     ],
     "a": [
      "Christopher Brett",
      "Daniel Ryan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Dmitry Strashnov",
      "Michael Rosenmertz"
     ],
     "a": [
      "Leo Decker",
      "Carl Nath"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jennifer Makfinsky",
      "Bart Van Der Gaag"
     ],
     "a": [
      "Elaine Aquilone",
      "Christopher Brett"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Karen Rosenberg",
      "Steven Truzzolino"
     ],
     "a": [
      "Nicole Tarallo",
      "Mark Zamkoff"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Petra Jones",
      "Michael Rosenmertz"
     ],
     "a": [
      "Donna Facconerusin",
      "Leo Decker"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Bobbi Rentko",
      "Freddy Alicea"
     ],
     "a": [
      "Kathy Baker",
      "Carl Nath"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jennifer Makfinsky",
      "Antoinette Mccormick"
     ],
     "a": [
      "Kathy Baker",
      "Nicole Tarallo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Petra Jones",
      "Michele Latwis"
     ],
     "a": [
      "Marie Walsh Mccarty",
      "Elaine Aquilone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Elliot Fishman",
      "Bart Van Der Gaag"
     ],
     "a": [
      "Daniel Ryan",
      "Carl Nath"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Steven Truzzolino",
      "Michael Rosenmertz"
     ],
     "a": [
      "Mark Zamkoff",
      "Christopher Brett"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Karen Rosenberg",
      "Bart Van Der Gaag"
     ],
     "a": [
      "Jackie Coneeny",
      "Leo Decker"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Petra Jones",
      "Dmitry Strashnov"
     ],
     "a": [
      "Donna Facconerusin",
      "Mark Zamkoff"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Antoinette Mccormick",
      "Steven Truzzolino"
     ],
     "a": [
      "Elaine Aquilone",
      "Christopher Brett"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Michele Latwis",
      "Michael Rosenmertz"
     ],
     "a": [
      "Nicole Tarallo",
      "Carl Nath"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Antoinette Mccormick",
      "Karen Rosenberg"
     ],
     "a": [
      "Marie Walsh Mccarty",
      "Elaine Aquilone"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jennifer Makfinsky",
      "Bobbi Rentko"
     ],
     "a": [
      "Kathy Baker",
      "Donna Facconerusin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Freddy Alicea",
      "Dmitry Strashnov"
     ],
     "a": [
      "Leo Decker",
      "Mark Zamkoff"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Elliot Fishman",
      "Bart Van Der Gaag"
     ],
     "a": [
      "Daniel Ryan",
      "Carl Nath"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Karen Rosenberg",
      "Elliot Fishman"
     ],
     "a": [
      "Nicole Tarallo",
      "Christopher Brett"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Jennifer Makfinsky",
      "Steven Truzzolino"
     ],
     "a": [
      "Jackie Coneeny",
      "Daniel Ryan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Antoinette Mccormick",
      "Freddy Alicea"
     ],
     "a": [
      "Marie Walsh Mccarty",
      "Carl Nath"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Michele Latwis",
      "Dmitry Strashnov"
     ],
     "a": [
      "Elaine Aquilone",
      "Leo Decker"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jennifer Makfinsky",
      "Karen Rosenberg"
     ],
     "a": [
      "Nicole Tarallo",
      "Elaine Aquilone"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Bobbi Rentko",
      "Petra Jones"
     ],
     "a": [
      "Donna Facconerusin",
      "Marie Walsh Mccarty"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Freddy Alicea",
      "Dmitry Strashnov"
     ],
     "a": [
      "Mark Zamkoff",
      "Leo Decker"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Steven Truzzolino",
      "Bart Van Der Gaag"
     ],
     "a": [
      "Daniel Ryan",
      "Christopher Brett"
     ]
    }
   ],
   "subs": [
    "Christopher Brett",
    "Carl Nath"
   ]
  },
  {
   "result": "away",
   "week": 5,
   "home": "Dill Dinkers Newport",
   "away": "Forward",
   "time": "2026-09-19T13:00:00",
   "complete": true,
   "homePoints": 386,
   "awayPoints": 654,
   "homeGW": 4,
   "awayGW": 28,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Irma Myersdonihoo",
      "Chris Owens"
     ],
     "a": [
      "Mary Hain",
      "Bill Venella"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Karen Austin",
      "Edward Weinstein"
     ],
     "a": [
      "Ellen Rubiato",
      "Chris Allander"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Karen Mcbride",
      "Albert Tiegs"
     ],
     "a": [
      "Carolyn Laverdiere",
      "Dan Callaghan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Josephine O'Neill",
      "Joshua Holloway"
     ],
     "a": [
      "Jennifer Laroque",
      "Scott Gardo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Dana Isom",
      "Erica Stevens"
     ],
     "a": [
      "Ellen Rubiato",
      "Jennifer Laroque"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Karen Austin",
      "Josephine O'Neill"
     ],
     "a": [
      "Carolyn Laverdiere",
      "Lori Wild"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Joe Mccutchon",
      "Charles Rhodes"
     ],
     "a": [
      "Chris Allander",
      "Bill Venella"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Joshua Holloway",
      "Albert Tiegs"
     ],
     "a": [
      "Dan Callaghan",
      "Scott Gardo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Karen Mcbride",
      "Joshua Holloway"
     ],
     "a": [
      "Lori Wild",
      "Scott Gardo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Dana Isom",
      "Edward Weinstein"
     ],
     "a": [
      "Ellen Rubiato",
      "Bill Venella"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Erica Stevens",
      "Chris Owens"
     ],
     "a": [
      "Carolyn Laverdiere",
      "Chris Allander"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Irma Myersdonihoo",
      "Joe Mccutchon"
     ],
     "a": [
      "Mary Hain",
      "Dan Callaghan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Josephine O'Neill",
      "Karen Mcbride"
     ],
     "a": [
      "Jennifer Laroque",
      "Lori Wild"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Karen Austin",
      "Irma Myersdonihoo"
     ],
     "a": [
      "Mary Hain",
      "Ellen Rubiato"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Chris Owens",
      "Albert Tiegs"
     ],
     "a": [
      "Chris Allander",
      "Scott Gardo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Charles Rhodes",
      "Edward Weinstein"
     ],
     "a": [
      "Dan Callaghan",
      "Bill Venella"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Karen Austin",
      "Joshua Holloway"
     ],
     "a": [
      "Carolyn Laverdiere",
      "Scott Gardo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Dana Isom",
      "Chris Owens"
     ],
     "a": [
      "Ellen Rubiato",
      "Dan Callaghan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Erica Stevens",
      "Edward Weinstein"
     ],
     "a": [
      "Jennifer Laroque",
      "Bill Venella"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Josephine O'Neill",
      "Joe Mccutchon"
     ],
     "a": [
      "Mary Hain",
      "Chris Allander"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Josephine O'Neill",
      "Erica Stevens"
     ],
     "a": [
      "Jennifer Laroque",
      "Carolyn Laverdiere"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Irma Myersdonihoo",
      "Karen Mcbride"
     ],
     "a": [
      "Mary Hain",
      "Lori Wild"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Joshua Holloway",
      "Joe Mccutchon"
     ],
     "a": [
      "Scott Gardo",
      "Dan Callaghan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Charles Rhodes",
      "Albert Tiegs"
     ],
     "a": [
      "Chris Allander",
      "Bill Venella"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Dana Isom",
      "Charles Rhodes"
     ],
     "a": [
      "Ellen Rubiato",
      "Chris Allander"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Karen Austin",
      "Joe Mccutchon"
     ],
     "a": [
      "Mary Hain",
      "Bill Venella"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Irma Myersdonihoo",
      "Chris Owens"
     ],
     "a": [
      "Lori Wild",
      "Scott Gardo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Karen Mcbride",
      "Edward Weinstein"
     ],
     "a": [
      "Carolyn Laverdiere",
      "Dan Callaghan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Karen Mcbride",
      "Erica Stevens"
     ],
     "a": [
      "Carolyn Laverdiere",
      "Lori Wild"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Josephine O'Neill",
      "Irma Myersdonihoo"
     ],
     "a": [
      "Ellen Rubiato",
      "Jennifer Laroque"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Joshua Holloway",
      "Charles Rhodes"
     ],
     "a": [
      "Chris Allander",
      "Dan Callaghan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Albert Tiegs",
      "Edward Weinstein"
     ],
     "a": [
      "Bill Venella",
      "Scott Gardo"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 5,
   "home": "Premiere Aces",
   "away": "PickleRage Union County",
   "time": "2026-09-19T13:00:00",
   "complete": true,
   "homePoints": 461,
   "awayPoints": 679,
   "homeGW": 2,
   "awayGW": 30,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jen Ritchie",
      "John Hans"
     ],
     "a": [
      "Jennifer Applebee",
      "Louis Sapirman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Donna Fama",
      "Frank Marchiano"
     ],
     "a": [
      "Marita Dow",
      "Ed Amato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Gina Digirolamo",
      "Frank Fama"
     ],
     "a": [
      "Kathi Savage",
      "Steve Nuguid"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Roe Palermo",
      "Jim Ritchie"
     ],
     "a": [
      "Huifang Yao",
      "Wenge Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jen Ritchie",
      "Roe Palermo"
     ],
     "a": [
      "Kathi Savage",
      "Marita Dow"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Donna Fama",
      "Gina Digirolamo"
     ],
     "a": [
      "Linda Bozzo",
      "Huifang Yao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Vlad Feldman",
      "Frank Marchiano"
     ],
     "a": [
      "Ed Amato",
      "Michael Schuller"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Jim Ritchie",
      "Felix Soto"
     ],
     "a": [
      "Louis Sapirman",
      "Wenge Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jen Ritchie",
      "Frank Marchiano"
     ],
     "a": [
      "Linda Bozzo",
      "Louis Sapirman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Gina Digirolamo",
      "Jim Ritchie"
     ],
     "a": [
      "Jennifer Applebee",
      "Steve Nuguid"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Donna Fama",
      "John Hans"
     ],
     "a": [
      "Marita Dow",
      "Michael Schuller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Roe Palermo",
      "Vlad Feldman"
     ],
     "a": [
      "Kathi Savage",
      "Wenge Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Jen Ritchie",
      "Gina Digirolamo"
     ],
     "a": [
      "Kathi Savage",
      "Jennifer Applebee"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Donna Fama",
      "Roe Palermo"
     ],
     "a": [
      "Marita Dow",
      "Huifang Yao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Frank Fama",
      "Frank Marchiano"
     ],
     "a": [
      "Louis Sapirman",
      "Ed Amato"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Felix Soto",
      "John Hans"
     ],
     "a": [
      "Michael Schuller",
      "Wenge Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Donna Fama",
      "Frank Marchiano"
     ],
     "a": [
      "Linda Bozzo",
      "Steve Nuguid"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Jen Ritchie",
      "Vlad Feldman"
     ],
     "a": [
      "Marita Dow",
      "Ed Amato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Roe Palermo",
      "John Hans"
     ],
     "a": [
      "Jennifer Applebee",
      "Michael Schuller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Gina Digirolamo",
      "Frank Fama"
     ],
     "a": [
      "Huifang Yao",
      "Wenge Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jen Ritchie",
      "Gina Digirolamo"
     ],
     "a": [
      "Jennifer Applebee",
      "Huifang Yao"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Donna Fama",
      "Roe Palermo"
     ],
     "a": [
      "Kathi Savage",
      "Linda Bozzo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Felix Soto",
      "Frank Marchiano"
     ],
     "a": [
      "Louis Sapirman",
      "Michael Schuller"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Vlad Feldman",
      "Frank Fama"
     ],
     "a": [
      "Ed Amato",
      "Steve Nuguid"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jen Ritchie",
      "John Hans"
     ],
     "a": [
      "Huifang Yao",
      "Louis Sapirman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Roe Palermo",
      "Jim Ritchie"
     ],
     "a": [
      "Linda Bozzo",
      "Ed Amato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Donna Fama",
      "Felix Soto"
     ],
     "a": [
      "Jennifer Applebee",
      "Steve Nuguid"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Gina Digirolamo",
      "Vlad Feldman"
     ],
     "a": [
      "Marita Dow",
      "Wenge Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jen Ritchie",
      "Roe Palermo"
     ],
     "a": [
      "Kathi Savage",
      "Huifang Yao"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Donna Fama",
      "Gina Digirolamo"
     ],
     "a": [
      "Jennifer Applebee",
      "Linda Bozzo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "John Hans",
      "Jim Ritchie"
     ],
     "a": [
      "Steve Nuguid",
      "Wenge Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Frank Fama",
      "Felix Soto"
     ],
     "a": [
      "Ed Amato",
      "Louis Sapirman"
     ]
    }
   ],
   "subs": [
    "Huifang Yao",
    "Donna Fama",
    "Steve Nuguid",
    "Wenge Li"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "Picklr Fair Lawn",
   "away": "Pickleball Palace Blue",
   "time": "2026-09-19T14:00:00",
   "complete": true,
   "homePoints": 626,
   "awayPoints": 572,
   "homeGW": 20,
   "awayGW": 12,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Mylene Tenorio",
      "Chuck Silvester"
     ],
     "a": [
      "Noelie Hillebrecht",
      "John Cusano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Maria Fanfa",
      "Eldon Carandan"
     ],
     "a": [
      "Tracy Narag",
      "Geoffrey Baird"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Patricia Cordts",
      "Wallace Eng"
     ],
     "a": [
      "Frances Smith",
      "Tracy Waffenfeld"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Qiuyan Kong",
      "Dan Sweetman"
     ],
     "a": [
      "Mandy Collins",
      "Mark Garner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Mylene Tenorio",
      "Joanna Zhang"
     ],
     "a": [
      "Frances Smith",
      "Tracy Narag"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Olga Sedycias",
      "Qiuyan Kong"
     ],
     "a": [
      "Jenny Winters",
      "Mandy Collins"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Dennis Tenorio",
      "Chuck Silvester"
     ],
     "a": [
      "Geoffrey Baird",
      "John Cusano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Wai Yiu",
      "Eldon Carandan"
     ],
     "a": [
      "Al Chen",
      "Tracy Waffenfeld"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Mylene Tenorio",
      "Chuck Silvester"
     ],
     "a": [
      "Tracy Narag",
      "Geoffrey Baird"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Patricia Cordts",
      "Wai Yiu"
     ],
     "a": [
      "Mandy Collins",
      "Mark Garner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Joanna Zhang",
      "Dan Sweetman"
     ],
     "a": [
      "Frances Smith",
      "John Cusano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Maria Fanfa",
      "Dennis Tenorio"
     ],
     "a": [
      "Noelie Hillebrecht",
      "Al Chen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Joanna Zhang",
      "Patricia Cordts"
     ],
     "a": [
      "Tracy Narag",
      "Frances Smith"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Olga Sedycias",
      "Qiuyan Kong"
     ],
     "a": [
      "Mandy Collins",
      "Clare Cruz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Eldon Carandan",
      "Chuck Silvester"
     ],
     "a": [
      "Tracy Waffenfeld",
      "Al Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Dan Sweetman",
      "Wallace Eng"
     ],
     "a": [
      "Mark Garner",
      "Geoffrey Baird"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Mylene Tenorio",
      "Wallace Eng"
     ],
     "a": [
      "Tracy Narag",
      "Mark Garner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Maria Fanfa",
      "Dennis Tenorio"
     ],
     "a": [
      "Clare Cruz",
      "John Cusano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Qiuyan Kong",
      "Chuck Silvester"
     ],
     "a": [
      "Jenny Winters",
      "Geoffrey Baird"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Olga Sedycias",
      "Dan Sweetman"
     ],
     "a": [
      "Mandy Collins",
      "Al Chen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Joanna Zhang",
      "Qiuyan Kong"
     ],
     "a": [
      "Jenny Winters",
      "Mandy Collins"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Mylene Tenorio",
      "Maria Fanfa"
     ],
     "a": [
      "Noelie Hillebrecht",
      "Clare Cruz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Wallace Eng",
      "Eldon Carandan"
     ],
     "a": [
      "Tracy Waffenfeld",
      "John Cusano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Wai Yiu",
      "Dennis Tenorio"
     ],
     "a": [
      "Mark Garner",
      "Al Chen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Maria Fanfa",
      "Eldon Carandan"
     ],
     "a": [
      "Clare Cruz",
      "John Cusano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Joanna Zhang",
      "Dan Sweetman"
     ],
     "a": [
      "Noelie Hillebrecht",
      "Al Chen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Patricia Cordts",
      "Dennis Tenorio"
     ],
     "a": [
      "Frances Smith",
      "Tracy Waffenfeld"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Olga Sedycias",
      "Wai Yiu"
     ],
     "a": [
      "Jenny Winters",
      "Mark Garner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Mylene Tenorio",
      "Joanna Zhang"
     ],
     "a": [
      "Noelie Hillebrecht",
      "Clare Cruz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Olga Sedycias",
      "Patricia Cordts"
     ],
     "a": [
      "Tracy Narag",
      "Jenny Winters"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Chuck Silvester",
      "Eldon Carandan"
     ],
     "a": [
      "Tracy Waffenfeld",
      "John Cusano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Wallace Eng",
      "Dan Sweetman"
     ],
     "a": [
      "Mark Garner",
      "Al Chen"
     ]
    }
   ],
   "subs": [
    "Mandy Collins",
    "Dan Sweetman",
    "Wallace Eng",
    "Wai Yiu",
    "John Cusano",
    "Joanna Zhang",
    "Jenny Winters"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "Bounce Philly",
   "away": "Players Courtyard",
   "time": "2026-09-19T14:00:00",
   "complete": true,
   "homePoints": 582,
   "awayPoints": 580,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Wendy Seiferheld",
      "Paul Mcalary"
     ],
     "a": [
      "Christine Fletcher",
      "Todd Gelfand"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Sue Mah",
      "Michael Burns"
     ],
     "a": [
      "Xiaojun Yuan",
      "Frank Choi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Barbara Hand",
      "Wen Chang"
     ],
     "a": [
      "Tracy Giunta",
      "Edward Verish"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Andria Lochtenbergh",
      "Derik Lochtenbergh"
     ],
     "a": [
      "Suzanne Garcia",
      "Craig Mehnert"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Sue Mah",
      "Wendy Seiferheld"
     ],
     "a": [
      "Xiaojun Yuan",
      "Jill Nixon"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Barbara Hand",
      "Andria Lochtenbergh"
     ],
     "a": [
      "Tracy Giunta",
      "Danya George"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Derik Lochtenbergh",
      "Michael Burns"
     ],
     "a": [
      "Todd Gelfand",
      "Joseph Koerner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Paul Mcalary",
      "Wen Chang"
     ],
     "a": [
      "Craig Mehnert",
      "David Mcdonough"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Barbara Hand",
      "Wen Chang"
     ],
     "a": [
      "Suzanne Garcia",
      "David Mcdonough"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Wendy Seiferheld",
      "Michael Burns"
     ],
     "a": [
      "Danya George",
      "Joseph Koerner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 27,
     "as": 29,
     "h": [
      "Andria Lochtenbergh",
      "Derik Lochtenbergh"
     ],
     "a": [
      "Christine Fletcher",
      "Frank Choi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sue Mah",
      "Paul Mcalary"
     ],
     "a": [
      "Tracy Giunta",
      "Edward Verish"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Sue Mah",
      "Wendy Seiferheld"
     ],
     "a": [
      "Suzanne Garcia",
      "Xiaojun Yuan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Barbara Hand",
      "Andria Lochtenbergh"
     ],
     "a": [
      "Jill Nixon",
      "Tracy Giunta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Michael Burns",
      "Wen Chang"
     ],
     "a": [
      "Todd Gelfand",
      "Edward Verish"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Derik Lochtenbergh",
      "Paul Mcalary"
     ],
     "a": [
      "Frank Choi",
      "Craig Mehnert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Andria Lochtenbergh",
      "Michael Burns"
     ],
     "a": [
      "Jill Nixon",
      "Todd Gelfand"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Barbara Hand",
      "Derik Lochtenbergh"
     ],
     "a": [
      "Xiaojun Yuan",
      "Craig Mehnert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Sue Mah",
      "Wen Chang"
     ],
     "a": [
      "Danya George",
      "Joseph Koerner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Wendy Seiferheld",
      "Paul Mcalary"
     ],
     "a": [
      "Christine Fletcher",
      "David Mcdonough"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Sue Mah",
      "Barbara Hand"
     ],
     "a": [
      "Jill Nixon",
      "Suzanne Garcia"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Wendy Seiferheld",
      "Andria Lochtenbergh"
     ],
     "a": [
      "Christine Fletcher",
      "Danya George"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Paul Mcalary",
      "Wen Chang"
     ],
     "a": [
      "Edward Verish",
      "Joseph Koerner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Michael Burns",
      "Derik Lochtenbergh"
     ],
     "a": [
      "David Mcdonough",
      "Frank Choi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Andria Lochtenbergh",
      "Michael Burns"
     ],
     "a": [
      "Danya George",
      "Edward Verish"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Barbara Hand",
      "Derik Lochtenbergh"
     ],
     "a": [
      "Tracy Giunta",
      "Todd Gelfand"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sue Mah",
      "Paul Mcalary"
     ],
     "a": [
      "Xiaojun Yuan",
      "Frank Choi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Wendy Seiferheld",
      "Wen Chang"
     ],
     "a": [
      "Suzanne Garcia",
      "Craig Mehnert"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Wendy Seiferheld",
      "Andria Lochtenbergh"
     ],
     "a": [
      "Xiaojun Yuan",
      "Suzanne Garcia"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Sue Mah",
      "Barbara Hand"
     ],
     "a": [
      "Jill Nixon",
      "Christine Fletcher"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Michael Burns",
      "Wen Chang"
     ],
     "a": [
      "Todd Gelfand",
      "David Mcdonough"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Derik Lochtenbergh",
      "Paul Mcalary"
     ],
     "a": [
      "Frank Choi",
      "Joseph Koerner"
     ]
    }
   ],
   "subs": [
    "Sue Mah",
    "Wendy Seiferheld"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "Mercer Bucks",
   "away": "Flemington Green",
   "time": "2026-09-19T14:00:00",
   "complete": true,
   "homePoints": 605,
   "awayPoints": 556,
   "homeGW": 21,
   "awayGW": 11,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Mary Harmon",
      "Farzad Shadzik"
     ],
     "a": [
      "Tao Zhu",
      "Sam Doctor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Cheryl Tarby",
      "Jason Belmont"
     ],
     "a": [
      "Manuela Caiati",
      "Apparao Avancha"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Tami Mohney",
      "Howard Eng"
     ],
     "a": [
      "Grace Brennan",
      "Dan Amabile"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lisa Angelini",
      "Gregg Downs"
     ],
     "a": [
      "Leah Greenstein",
      "Bill Vit"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Cindy Suter",
      "Lisa Angelini"
     ],
     "a": [
      "Leah Greenstein",
      "Manuela Caiati"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Mary Harmon",
      "Tami Mohney"
     ],
     "a": [
      "Tao Zhu",
      "Grace Brennan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Howard Eng",
      "Jerry Margulies"
     ],
     "a": [
      "Scott Heist",
      "Hafeez Saheed"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Farzad Shadzik",
      "Jason Belmont"
     ],
     "a": [
      "Sam Doctor",
      "Apparao Avancha"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Cheryl Tarby",
      "Howard Eng"
     ],
     "a": [
      "Leah Greenstein",
      "Bill Vit"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Mary Harmon",
      "Farzad Shadzik"
     ],
     "a": [
      "Grace Brennan",
      "Hafeez Saheed"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Lisa Angelini",
      "Gregg Downs"
     ],
     "a": [
      "Tao Zhu",
      "Apparao Avancha"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Cindy Suter",
      "Jerry Margulies"
     ],
     "a": [
      "Manuela Caiati",
      "Scott Heist"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Tami Mohney",
      "Lisa Angelini"
     ],
     "a": [
      "Tao Zhu",
      "Manuela Caiati"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Cheryl Tarby",
      "Cindy Suter"
     ],
     "a": [
      "Grace Brennan",
      "Leah Greenstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jason Belmont",
      "Gregg Downs"
     ],
     "a": [
      "Dan Amabile",
      "Hafeez Saheed"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Howard Eng",
      "Farzad Shadzik"
     ],
     "a": [
      "Sam Doctor",
      "Bill Vit"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Tami Mohney",
      "Howard Eng"
     ],
     "a": [
      "Tao Zhu",
      "Dan Amabile"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Cheryl Tarby",
      "Gregg Downs"
     ],
     "a": [
      "Grace Brennan",
      "Bill Vit"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 2,
     "h": [
      "Lisa Angelini",
      "Jerry Margulies"
     ],
     "a": [
      "Leah Greenstein",
      "Scott Heist"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Mary Harmon",
      "Jason Belmont"
     ],
     "a": [
      "Manuela Caiati",
      "Sam Doctor"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Mary Harmon",
      "Tami Mohney"
     ],
     "a": [
      "Tao Zhu",
      "Leah Greenstein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Cheryl Tarby",
      "Cindy Suter"
     ],
     "a": [
      "Grace Brennan",
      "Manuela Caiati"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jason Belmont",
      "Farzad Shadzik"
     ],
     "a": [
      "Apparao Avancha",
      "Hafeez Saheed"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jerry Margulies",
      "Gregg Downs"
     ],
     "a": [
      "Dan Amabile",
      "Scott Heist"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Tami Mohney",
      "Farzad Shadzik"
     ],
     "a": [
      "Grace Brennan",
      "Hafeez Saheed"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Cindy Suter",
      "Jerry Margulies"
     ],
     "a": [
      "Manuela Caiati",
      "Scott Heist"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lisa Angelini",
      "Howard Eng"
     ],
     "a": [
      "Tao Zhu",
      "Sam Doctor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Mary Harmon",
      "Jason Belmont"
     ],
     "a": [
      "Leah Greenstein",
      "Dan Amabile"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Mary Harmon",
      "Cheryl Tarby"
     ],
     "a": [
      "Grace Brennan",
      "Tao Zhu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lisa Angelini",
      "Cindy Suter"
     ],
     "a": [
      "Manuela Caiati",
      "Leah Greenstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Gregg Downs",
      "Jason Belmont"
     ],
     "a": [
      "Dan Amabile",
      "Bill Vit"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Farzad Shadzik",
      "Howard Eng"
     ],
     "a": [
      "Sam Doctor",
      "Apparao Avancha"
     ]
    }
   ],
   "subs": [
    "Mary Harmon"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "Flemington Blue",
   "away": "Pickleball Kingdom Hamilton Strikers",
   "time": "2026-09-19T15:00:00",
   "complete": true,
   "homePoints": 646,
   "awayPoints": 621,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Gail Hannagan",
      "Eric Brezina"
     ],
     "a": [
      "Donna Stone",
      "Guillermo Wong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Sarah Stangota",
      "Anthony Leone"
     ],
     "a": [
      "Krishma Patel",
      "Tony Sethi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Sharon Oddy",
      "Jeffrey Hartford"
     ],
     "a": [
      "Maria Cecilia Holgado",
      "Brian Kelly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Eleni Leone",
      "Paul Phillips"
     ],
     "a": [
      "Rosa Tenan",
      "John Gardler"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sharon Oddy",
      "Margo Langer"
     ],
     "a": [
      "Lynette Pil",
      "Marleen Tuquero"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Gail Hannagan",
      "Sarah Stangota"
     ],
     "a": [
      "Krishma Patel",
      "Maria Cecilia Holgado"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Eric Brezina",
      "Anthony Leone"
     ],
     "a": [
      "Guillermo Wong",
      "Tony Sethi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jeffrey Hartford",
      "Tom Dominczyk"
     ],
     "a": [
      "Dean Lim",
      "Artemio Tuquero"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Sarah Stangota",
      "Eric Brezina"
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
     "as": 17,
     "h": [
      "Eleni Leone",
      "Anthony Leone"
     ],
     "a": [
      "Maria Cecilia Holgado",
      "Brian Kelly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Gail Hannagan",
      "Tom Dominczyk"
     ],
     "a": [
      "Rosa Tenan",
      "John Gardler"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Margo Langer",
      "Paul Phillips"
     ],
     "a": [
      "Marleen Tuquero",
      "Artemio Tuquero"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Margo Langer",
      "Gail Hannagan"
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
     "as": 12,
     "h": [
      "Eleni Leone",
      "Sharon Oddy"
     ],
     "a": [
      "Rosa Tenan",
      "Marleen Tuquero"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Anthony Leone",
      "Tom Dominczyk"
     ],
     "a": [
      "Guillermo Wong",
      "Dean Lim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jeffrey Hartford",
      "Paul Phillips"
     ],
     "a": [
      "John Gardler",
      "Artemio Tuquero"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Eleni Leone",
      "Eric Brezina"
     ],
     "a": [
      "Maria Cecilia Holgado",
      "Guillermo Wong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Sharon Oddy",
      "Anthony Leone"
     ],
     "a": [
      "Donna Stone",
      "Brian Kelly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Sarah Stangota",
      "Paul Phillips"
     ],
     "a": [
      "Rosa Tenan",
      "Dean Lim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Margo Langer",
      "Jeffrey Hartford"
     ],
     "a": [
      "Lynette Pil",
      "Artemio Tuquero"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Gail Hannagan",
      "Sharon Oddy"
     ],
     "a": [
      "Maria Cecilia Holgado",
      "Donna Stone"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Sarah Stangota",
      "Margo Langer"
     ],
     "a": [
      "Krishma Patel",
      "Lynette Pil"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jeffrey Hartford",
      "Eric Brezina"
     ],
     "a": [
      "Tony Sethi",
      "Brian Kelly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Paul Phillips",
      "Tom Dominczyk"
     ],
     "a": [
      "Guillermo Wong",
      "John Gardler"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Gail Hannagan",
      "Eric Brezina"
     ],
     "a": [
      "Rosa Tenan",
      "Guillermo Wong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Eleni Leone",
      "Anthony Leone"
     ],
     "a": [
      "Lynette Pil",
      "Tony Sethi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Margo Langer",
      "Tom Dominczyk"
     ],
     "a": [
      "Krishma Patel",
      "Dean Lim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Sarah Stangota",
      "Paul Phillips"
     ],
     "a": [
      "Donna Stone",
      "John Gardler"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Sharon Oddy",
      "Eleni Leone"
     ],
     "a": [
      "Lynette Pil",
      "Marleen Tuquero"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Sarah Stangota",
      "Gail Hannagan"
     ],
     "a": [
      "Krishma Patel",
      "Donna Stone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Jeffrey Hartford",
      "Tom Dominczyk"
     ],
     "a": [
      "Tony Sethi",
      "Dean Lim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Anthony Leone",
      "Eric Brezina"
     ],
     "a": [
      "Brian Kelly",
      "Artemio Tuquero"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 5,
   "home": "Pickleball Palace Black",
   "away": "Allstar Pickler",
   "time": "2026-09-19T15:00:00",
   "complete": true,
   "homePoints": 661,
   "awayPoints": 516,
   "homeGW": 24,
   "awayGW": 8,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Charlene Fletcher",
      "Ken Bienkowski"
     ],
     "a": [
      "Sheung Tom",
      "Dajie （David） Yang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Cheryl Minerowicz",
      "Alan Weissman"
     ],
     "a": [
      "Jessica Ren",
      "Alan Fang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kristin Duva",
      "James Azarowicz"
     ],
     "a": [
      "Ling Tsui",
      "Allen Wang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Debbie Spurr",
      "Matt Mcnulty"
     ],
     "a": [
      "Lingshan Hsieh",
      "Richard Tang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Anne Buckley",
      "Theresa Corderi"
     ],
     "a": [
      "Angela Chen",
      "Lingshan Hsieh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Cheryl Minerowicz",
      "Kristin Duva"
     ],
     "a": [
      "Jessica Ren",
      "Yabing Wang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Rafael Moreano",
      "Noach Shapiro"
     ],
     "a": [
      "Alan Fang",
      "Allen Wang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ken Bienkowski",
      "Matt Mcnulty"
     ],
     "a": [
      "Dajie （David） Yang",
      "Richard Tang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Debbie Spurr",
      "Ken Bienkowski"
     ],
     "a": [
      "Jessica Ren",
      "Richard Tang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Anne Buckley",
      "Matt Mcnulty"
     ],
     "a": [
      "Yabing Wang",
      "Bing Zhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Charlene Fletcher",
      "Alan Weissman"
     ],
     "a": [
      "Sheung Tom",
      "Dajie （David） Yang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Theresa Corderi",
      "James Azarowicz"
     ],
     "a": [
      "Angela Chen",
      "Alan Fang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kristin Duva",
      "Charlene Fletcher"
     ],
     "a": [
      "Jessica Ren",
      "Ling Tsui"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Cheryl Minerowicz",
      "Theresa Corderi"
     ],
     "a": [
      "Angela Chen",
      "Yabing Wang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Noach Shapiro",
      "Matt Mcnulty"
     ],
     "a": [
      "Dajie （David） Yang",
      "Allen Wang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Rafael Moreano",
      "Ken Bienkowski"
     ],
     "a": [
      "Bing Zhu",
      "Richard Tang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Anne Buckley",
      "Noach Shapiro"
     ],
     "a": [
      "Sheung Tom",
      "Allen Wang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Theresa Corderi",
      "Rafael Moreano"
     ],
     "a": [
      "Lingshan Hsieh",
      "Alan Fang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Debbie Spurr",
      "Alan Weissman"
     ],
     "a": [
      "Angela Chen",
      "Richard Tang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Cheryl Minerowicz",
      "James Azarowicz"
     ],
     "a": [
      "Ling Tsui",
      "Dajie （David） Yang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kristin Duva",
      "Anne Buckley"
     ],
     "a": [
      "Jessica Ren",
      "Angela Chen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Cheryl Minerowicz",
      "Charlene Fletcher"
     ],
     "a": [
      "Lingshan Hsieh",
      "Yabing Wang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 27,
     "as": 29,
     "h": [
      "Matt Mcnulty",
      "James Azarowicz"
     ],
     "a": [
      "Bing Zhu",
      "Allen Wang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Ken Bienkowski",
      "Alan Weissman"
     ],
     "a": [
      "Dajie （David） Yang",
      "Richard Tang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Anne Buckley",
      "Alan Weissman"
     ],
     "a": [
      "Sheung Tom",
      "Alan Fang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Theresa Corderi",
      "Matt Mcnulty"
     ],
     "a": [
      "Yabing Wang",
      "Bing Zhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Debbie Spurr",
      "Rafael Moreano"
     ],
     "a": [
      "Jessica Ren",
      "Dajie （David） Yang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Cheryl Minerowicz",
      "Noach Shapiro"
     ],
     "a": [
      "Ling Tsui",
      "Allen Wang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Anne Buckley",
      "Theresa Corderi"
     ],
     "a": [
      "Ling Tsui",
      "Angela Chen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Cheryl Minerowicz",
      "Kristin Duva"
     ],
     "a": [
      "Lingshan Hsieh",
      "Yabing Wang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Matt Mcnulty",
      "Alan Weissman"
     ],
     "a": [
      "Richard Tang",
      "Alan Fang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "James Azarowicz",
      "Ken Bienkowski"
     ],
     "a": [
      "Bing Zhu",
      "Allen Wang"
     ]
    }
   ],
   "subs": [
    "Alan Fang",
    "Richard Tang",
    "Allen Wang"
   ]
  },
  {
   "result": null,
   "week": 6,
   "home": "PKLD",
   "away": "Premiere Dinkers",
   "time": "2026-09-26T11:00:00",
   "complete": false,
   "games": [
    {
     "t": "mixed",
     "h": [
      "Jennifer Makfinsky",
      "Steven Truzzolino"
     ],
     "a": [
      "Barbara Markoglu",
      "David Cardinale"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Karen Rosenberg",
      "Bart Van Der Gaag"
     ],
     "a": [
      "Alexandra Romagnolo",
      "Thomas Musso"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Christine Strasser",
      "Lenn Yeger"
     ],
     "a": [
      "Denise Stassi",
      "John Stassi"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Maureen Bruno",
      "Victorino Ramos"
     ],
     "a": [
      "Risa Korzekwinski",
      "John Rogers"
     ]
    },
    {
     "t": "female",
     "h": [
      "Jennifer Makfinsky",
      "Antoinette Mccormick"
     ],
     "a": [
      "Barbara Markoglu",
      "Alexandra Romagnolo"
     ]
    },
    {
     "t": "female",
     "h": [
      "Christine Strasser",
      "Petra Jones"
     ],
     "a": [
      "Denise Stassi",
      "Risa Korzekwinski"
     ]
    },
    {
     "t": "male",
     "h": [
      "Steven Truzzolino",
      "Lenn Yeger"
     ],
     "a": [
      "David Cardinale",
      "Joseph Romagnolo"
     ]
    },
    {
     "t": "male",
     "h": [
      "Bart Van Der Gaag",
      "Elliot Fishman"
     ],
     "a": [
      "John Stassi",
      "John Rogers"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Christine Strasser",
      "Freddy Alicea"
     ],
     "a": [
      "Marie Granberg",
      "Thomas Musso"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Maureen Bruno",
      "Lenn Yeger"
     ],
     "a": [
      "Denise Caracciolo",
      "David Cardinale"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Jennifer Makfinsky",
      "Steven Truzzolino"
     ],
     "a": [
      "Barbara Markoglu",
      "Joseph Romagnolo"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Petra Jones",
      "Bart Van Der Gaag"
     ],
     "a": [
      "Denise Stassi",
      "John Stassi"
     ]
    },
    {
     "t": "female",
     "h": [
      "Karen Rosenberg",
      "Petra Jones"
     ],
     "a": [
      "Risa Korzekwinski",
      "Alexandra Romagnolo"
     ]
    },
    {
     "t": "female",
     "h": [
      "Antoinette Mccormick",
      "Maureen Bruno"
     ],
     "a": [
      "Barbara Markoglu",
      "Marie Granberg"
     ]
    },
    {
     "t": "male",
     "h": [
      "Freddy Alicea",
      "Victorino Ramos"
     ],
     "a": [
      "Thomas Musso",
      "Joseph Romagnolo"
     ]
    },
    {
     "t": "male",
     "h": [
      "Bart Van Der Gaag",
      "Steven Truzzolino"
     ],
     "a": [
      "David Cardinale",
      "John Rogers"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Karen Rosenberg",
      "Steven Truzzolino"
     ],
     "a": [
      "Denise Caracciolo",
      "John Rogers"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Jennifer Makfinsky",
      "Lenn Yeger"
     ],
     "a": [
      "Barbara Markoglu",
      "John Stassi"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Antoinette Mccormick",
      "Elliot Fishman"
     ],
     "a": [
      "Risa Korzekwinski",
      "Thomas Musso"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Maureen Bruno",
      "Bart Van Der Gaag"
     ],
     "a": [
      "Marie Granberg",
      "David Cardinale"
     ]
    },
    {
     "t": "female",
     "h": [
      "Jennifer Makfinsky",
      "Karen Rosenberg"
     ],
     "a": [
      "Denise Stassi",
      "Alexandra Romagnolo"
     ]
    },
    {
     "t": "female",
     "h": [
      "Maureen Bruno",
      "Christine Strasser"
     ],
     "a": [
      "Denise Caracciolo",
      "Risa Korzekwinski"
     ]
    },
    {
     "t": "male",
     "h": [
      "Lenn Yeger",
      "Victorino Ramos"
     ],
     "a": [
      "John Rogers",
      "Joseph Romagnolo"
     ]
    },
    {
     "t": "male",
     "h": [
      "Freddy Alicea",
      "Elliot Fishman"
     ],
     "a": [
      "David Cardinale",
      "John Stassi"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Karen Rosenberg",
      "Elliot Fishman"
     ],
     "a": [
      "Denise Caracciolo",
      "Thomas Musso"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Jennifer Makfinsky",
      "Victorino Ramos"
     ],
     "a": [
      "Barbara Markoglu",
      "John Rogers"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Petra Jones",
      "Freddy Alicea"
     ],
     "a": [
      "Alexandra Romagnolo",
      "David Cardinale"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Antoinette Mccormick",
      "Lenn Yeger"
     ],
     "a": [
      "Denise Stassi",
      "Joseph Romagnolo"
     ]
    },
    {
     "t": "female",
     "h": [
      "Christine Strasser",
      "Petra Jones"
     ],
     "a": [
      "Denise Caracciolo",
      "Marie Granberg"
     ]
    },
    {
     "t": "female",
     "h": [
      "Jennifer Makfinsky",
      "Karen Rosenberg"
     ],
     "a": [
      "Risa Korzekwinski",
      "Denise Stassi"
     ]
    },
    {
     "t": "male",
     "h": [
      "Lenn Yeger",
      "Freddy Alicea"
     ],
     "a": [
      "David Cardinale",
      "Joseph Romagnolo"
     ]
    },
    {
     "t": "male",
     "h": [
      "Bart Van Der Gaag",
      "Elliot Fishman"
     ],
     "a": [
      "John Stassi",
      "Thomas Musso"
     ]
    }
   ]
  },
  {
   "result": null,
   "week": 6,
   "home": "PickleRage Union County",
   "away": "Picklr Fair Lawn",
   "time": "2026-09-26T12:00:00",
   "complete": false,
   "games": [
    {
     "t": "mixed",
     "h": [
      "Qiao Yang",
      "Mike Yang"
     ],
     "a": [
      "Mylene Tenorio",
      "Chuck Silvester"
     ],
     "hSub": [
      1,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Kathi Savage",
      "Ed Amato"
     ],
     "a": [
      "Qiuyan Kong",
      "Michael Hsieh"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Marita Dow",
      "Wenge Li"
     ],
     "a": [
      "Patty Direzze",
      "Weiyong Sun"
     ],
     "hSub": [
      0,
      1
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Linda Bozzo",
      "Achilles Alon"
     ],
     "a": [
      "Patricia Cordts",
      "Dennis Tenorio"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Kathi Savage",
      "Qiao Yang"
     ],
     "a": [
      "Patty Direzze",
      "Patricia Cordts"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Linda Bozzo",
      "Huifang Yao"
     ],
     "a": [
      "Olga Sedycias",
      "Qiuyan Kong"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Ed Amato",
      "John Danks"
     ],
     "a": [
      "Eldon Carandan",
      "Michael Hsieh"
     ]
    },
    {
     "t": "male",
     "h": [
      "Achilles Alon",
      "Mike Yang"
     ],
     "a": [
      "Chuck Silvester",
      "Peter O'Farrill"
     ],
     "hSub": [
      1,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Qiao Yang",
      "Wenge Li"
     ],
     "a": [
      "Mylene Tenorio",
      "Chuck Silvester"
     ],
     "hSub": [
      1,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Huifang Yao",
      "Mike Yang"
     ],
     "a": [
      "Qiuyan Kong",
      "Peter O'Farrill"
     ],
     "hSub": [
      1,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Linda Bozzo",
      "John Danks"
     ],
     "a": [
      "Olga Sedycias",
      "Eldon Carandan"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Marita Dow",
      "Ed Amato"
     ],
     "a": [
      "Joanna Zhang",
      "Dennis Tenorio"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "female",
     "h": [
      "Qiao Yang",
      "Kathi Savage"
     ],
     "a": [
      "Patty Direzze",
      "Patricia Cordts"
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "female",
     "h": [
      "Huifang Yao",
      "Marita Dow"
     ],
     "a": [
      "Joanna Zhang",
      "Mylene Tenorio"
     ],
     "hSub": [
      1,
      0
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "male",
     "h": [
      "Ed Amato",
      "John Danks"
     ],
     "a": [
      "Michael Hsieh",
      "Eldon Carandan"
     ]
    },
    {
     "t": "male",
     "h": [
      "Wenge Li",
      "Achilles Alon"
     ],
     "a": [
      "Dennis Tenorio",
      "Weiyong Sun"
     ],
     "hSub": [
      1,
      1
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Huifang Yao",
      "Wenge Li"
     ],
     "a": [
      "Mylene Tenorio",
      "Michael Hsieh"
     ],
     "hSub": [
      1,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Marita Dow",
      "Mike Yang"
     ],
     "a": [
      "Qiuyan Kong",
      "Peter O'Farrill"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Kathi Savage",
      "Achilles Alon"
     ],
     "a": [
      "Patty Direzze",
      "Weiyong Sun"
     ],
     "hSub": [
      0,
      1
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Linda Bozzo",
      "John Danks"
     ],
     "a": [
      "Olga Sedycias",
      "Chuck Silvester"
     ]
    },
    {
     "t": "female",
     "h": [
      "Huifang Yao",
      "Qiao Yang"
     ],
     "a": [
      "Olga Sedycias",
      "Qiuyan Kong"
     ],
     "hSub": [
      1,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Kathi Savage",
      "Marita Dow"
     ],
     "a": [
      "Joanna Zhang",
      "Patty Direzze"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "male",
     "h": [
      "Achilles Alon",
      "John Danks"
     ],
     "a": [
      "Peter O'Farrill",
      "Eldon Carandan"
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "male",
     "h": [
      "Ed Amato",
      "Wenge Li"
     ],
     "a": [
      "Dennis Tenorio",
      "Michael Hsieh"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Qiao Yang",
      "Mike Yang"
     ],
     "a": [
      "Mylene Tenorio",
      "Michael Hsieh"
     ],
     "hSub": [
      1,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Huifang Yao",
      "Wenge Li"
     ],
     "a": [
      "Qiuyan Kong",
      "Weiyong Sun"
     ],
     "hSub": [
      1,
      1
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Kathi Savage",
      "John Danks"
     ],
     "a": [
      "Joanna Zhang",
      "Chuck Silvester"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Linda Bozzo",
      "Achilles Alon"
     ],
     "a": [
      "Patricia Cordts",
      "Eldon Carandan"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Linda Bozzo",
      "Qiao Yang"
     ],
     "a": [
      "Olga Sedycias",
      "Patricia Cordts"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Huifang Yao",
      "Marita Dow"
     ],
     "a": [
      "Joanna Zhang",
      "Mylene Tenorio"
     ],
     "hSub": [
      1,
      0
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "male",
     "h": [
      "John Danks",
      "Achilles Alon"
     ],
     "a": [
      "Eldon Carandan",
      "Peter O'Farrill"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Ed Amato",
      "Wenge Li"
     ],
     "a": [
      "Chuck Silvester",
      "Dennis Tenorio"
     ],
     "hSub": [
      0,
      1
     ]
    }
   ]
  },
  {
   "result": null,
   "week": 6,
   "home": "Pickleball Kingdom Hamilton Prime Time",
   "away": "Flemington Green",
   "time": "2026-09-26T13:00:00",
   "complete": false,
   "games": [
    {
     "t": "mixed",
     "h": [
      "Yayuan Lien",
      "Fritz Jean-Brian"
     ],
     "a": [
      "Marianne Rosato",
      "Brett Wilson"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Mary Foster",
      "Raul Real"
     ],
     "a": [
      "Manuela Caiati",
      "Sam Doctor"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Luz Bonner",
      "Jimbo Jimenez"
     ],
     "a": [
      "Judith Macarthur",
      "Scott Heist"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Debra Crawford",
      "Ed Mendoza"
     ],
     "a": [
      "Diane Bracco",
      "Hector Lopez"
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "female",
     "h": [
      "Franchesa Mclean",
      "Debra Crawford"
     ],
     "a": [
      "Marianne Rosato",
      "Grace Brennan"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Mary Foster",
      "Yayuan Lien"
     ],
     "a": [
      "Diane Bracco",
      "Suzanne Bauer"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Ed Mendoza",
      "Nicholai Ola"
     ],
     "a": [
      "Sam Doctor",
      "Hafeez Saheed"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Jimbo Jimenez",
      "Raul Real"
     ],
     "a": [
      "Brett Wilson",
      "Hector Lopez"
     ],
     "hSub": [
      0,
      1
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Luz Bonner",
      "Nicholai Ola"
     ],
     "a": [
      "Diane Bracco",
      "Hafeez Saheed"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Mary Foster",
      "Fritz Jean-Brian"
     ],
     "a": [
      "Judith Macarthur",
      "Scott Heist"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Debra Crawford",
      "Ed Mendoza"
     ],
     "a": [
      "Suzanne Bauer",
      "Brett Wilson"
     ],
     "hSub": [
      1,
      0
     ],
     "aSub": [
      1,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Franchesa Mclean",
      "Jimbo Jimenez"
     ],
     "a": [
      "Grace Brennan",
      "Hector Lopez"
     ]
    },
    {
     "t": "female",
     "h": [
      "Yayuan Lien",
      "Luz Bonner"
     ],
     "a": [
      "Marianne Rosato",
      "Judith Macarthur"
     ]
    },
    {
     "t": "female",
     "h": [
      "Mary Foster",
      "Franchesa Mclean"
     ],
     "a": [
      "Grace Brennan",
      "Manuela Caiati"
     ]
    },
    {
     "t": "male",
     "h": [
      "Fritz Jean-Brian",
      "Jimbo Jimenez"
     ],
     "a": [
      "Brett Wilson",
      "Hafeez Saheed"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "male",
     "h": [
      "Raul Real",
      "Ed Mendoza"
     ],
     "a": [
      "Sam Doctor",
      "Scott Heist"
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Yayuan Lien",
      "Ed Mendoza"
     ],
     "a": [
      "Suzanne Bauer",
      "Sam Doctor"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Mary Foster",
      "Nicholai Ola"
     ],
     "a": [
      "Marianne Rosato",
      "Brett Wilson"
     ],
     "hSub": [
      0,
      1
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Debra Crawford",
      "Raul Real"
     ],
     "a": [
      "Diane Bracco",
      "Hector Lopez"
     ],
     "hSub": [
      1,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Franchesa Mclean",
      "Fritz Jean-Brian"
     ],
     "a": [
      "Manuela Caiati",
      "Scott Heist"
     ]
    },
    {
     "t": "female",
     "h": [
      "Franchesa Mclean",
      "Luz Bonner"
     ],
     "a": [
      "Grace Brennan",
      "Marianne Rosato"
     ]
    },
    {
     "t": "female",
     "h": [
      "Mary Foster",
      "Debra Crawford"
     ],
     "a": [
      "Manuela Caiati",
      "Suzanne Bauer"
     ],
     "hSub": [
      0,
      1
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Fritz Jean-Brian",
      "Nicholai Ola"
     ],
     "a": [
      "Sam Doctor",
      "Hafeez Saheed"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Jimbo Jimenez",
      "Ed Mendoza"
     ],
     "a": [
      "Hector Lopez",
      "Scott Heist"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Yayuan Lien",
      "Jimbo Jimenez"
     ],
     "a": [
      "Manuela Caiati",
      "Sam Doctor"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Mary Foster",
      "Fritz Jean-Brian"
     ],
     "a": [
      "Diane Bracco",
      "Brett Wilson"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Luz Bonner",
      "Nicholai Ola"
     ],
     "a": [
      "Suzanne Bauer",
      "Hafeez Saheed"
     ],
     "hSub": [
      0,
      1
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Debra Crawford",
      "Raul Real"
     ],
     "a": [
      "Judith Macarthur",
      "Hector Lopez"
     ],
     "hSub": [
      1,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Mary Foster",
      "Luz Bonner"
     ],
     "a": [
      "Judith Macarthur",
      "Marianne Rosato"
     ]
    },
    {
     "t": "female",
     "h": [
      "Yayuan Lien",
      "Franchesa Mclean"
     ],
     "a": [
      "Diane Bracco",
      "Grace Brennan"
     ]
    },
    {
     "t": "male",
     "h": [
      "Fritz Jean-Brian",
      "Nicholai Ola"
     ],
     "a": [
      "Sam Doctor",
      "Scott Heist"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Jimbo Jimenez",
      "Raul Real"
     ],
     "a": [
      "Brett Wilson",
      "Hafeez Saheed"
     ],
     "hSub": [
      0,
      1
     ],
     "aSub": [
      1,
      0
     ]
    }
   ]
  },
  {
   "result": null,
   "week": 6,
   "home": "Dill Dinkers Hatboro",
   "away": "Bounce Philly",
   "time": "2026-09-26T13:00:00",
   "complete": false,
   "games": [
    {
     "t": "mixed",
     "h": [
      "Betsy Hansbury",
      "Eric Pollock"
     ],
     "a": [
      "Barbara Hand",
      "Michael Burns"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Lauren Ricks",
      "Andrew Bush"
     ],
     "a": [
      "Lisa Miller",
      "Wen Chang"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Bonny Mayerberg",
      "Chris Hannah"
     ],
     "a": [
      "Deb Gray",
      "Bruce Freedman"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Carolyn King",
      "Nipam Patel"
     ],
     "a": [
      "Chantal Reme",
      "Scott Walden"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Betsy Hansbury",
      "Lauren Ricks"
     ],
     "a": [
      "Barbara Hand",
      "Lisa Miller"
     ]
    },
    {
     "t": "female",
     "h": [
      "Carolyn King",
      "Jodi De Waal"
     ],
     "a": [
      "Chantal Reme",
      "Patrice Gallary"
     ],
     "hSub": [
      0,
      1
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Andrew Bush",
      "David Wisch"
     ],
     "a": [
      "Michael Burns",
      "Wen Chang"
     ]
    },
    {
     "t": "male",
     "h": [
      "Eric Pollock",
      "Matt Becker"
     ],
     "a": [
      "Scott Walden",
      "Bruce Freedman"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Lauren Ricks",
      "Chris Hannah"
     ],
     "a": [
      "Lisa Miller",
      "Michael Burns"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Betsy Hansbury",
      "Matt Becker"
     ],
     "a": [
      "Barbara Hand",
      "Wen Chang"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Bonny Mayerberg",
      "David Wisch"
     ],
     "a": [
      "Patrice Gallary",
      "Bruce Freedman"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Jodi De Waal",
      "Nipam Patel"
     ],
     "a": [
      "Deb Gray",
      "Scott Walden"
     ],
     "hSub": [
      1,
      1
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "female",
     "h": [
      "Bonny Mayerberg",
      "Betsy Hansbury"
     ],
     "a": [
      "Lisa Miller",
      "Chantal Reme"
     ]
    },
    {
     "t": "female",
     "h": [
      "Carolyn King",
      "Jodi De Waal"
     ],
     "a": [
      "Patrice Gallary",
      "Deb Gray"
     ],
     "hSub": [
      0,
      1
     ],
     "aSub": [
      1,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Andrew Bush",
      "Eric Pollock"
     ],
     "a": [
      "Michael Burns",
      "Scott Walden"
     ]
    },
    {
     "t": "male",
     "h": [
      "Chris Hannah",
      "Nipam Patel"
     ],
     "a": [
      "Wen Chang",
      "Bruce Freedman"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Carolyn King",
      "Eric Pollock"
     ],
     "a": [
      "Barbara Hand",
      "Wen Chang"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Jodi De Waal",
      "Andrew Bush"
     ],
     "a": [
      "Chantal Reme",
      "Michael Burns"
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Lauren Ricks",
      "Matt Becker"
     ],
     "a": [
      "Patrice Gallary",
      "Scott Walden"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Bonny Mayerberg",
      "David Wisch"
     ],
     "a": [
      "Deb Gray",
      "Bruce Freedman"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "female",
     "h": [
      "Carolyn King",
      "Betsy Hansbury"
     ],
     "a": [
      "Barbara Hand",
      "Lisa Miller"
     ]
    },
    {
     "t": "female",
     "h": [
      "Lauren Ricks",
      "Jodi De Waal"
     ],
     "a": [
      "Chantal Reme",
      "Patrice Gallary"
     ],
     "hSub": [
      0,
      1
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "David Wisch",
      "Chris Hannah"
     ],
     "a": [
      "Michael Burns",
      "Wen Chang"
     ]
    },
    {
     "t": "male",
     "h": [
      "Matt Becker",
      "Nipam Patel"
     ],
     "a": [
      "Scott Walden",
      "Bruce Freedman"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Lauren Ricks",
      "Eric Pollock"
     ],
     "a": [
      "Barbara Hand",
      "Michael Burns"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Bonny Mayerberg",
      "Andrew Bush"
     ],
     "a": [
      "Patrice Gallary",
      "Wen Chang"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Betsy Hansbury",
      "Chris Hannah"
     ],
     "a": [
      "Deb Gray",
      "Scott Walden"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Carolyn King",
      "Nipam Patel"
     ],
     "a": [
      "Lisa Miller",
      "Bruce Freedman"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Bonny Mayerberg",
      "Lauren Ricks"
     ],
     "a": [
      "Barbara Hand",
      "Deb Gray"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Betsy Hansbury",
      "Jodi De Waal"
     ],
     "a": [
      "Lisa Miller",
      "Chantal Reme"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Andrew Bush",
      "Matt Becker"
     ],
     "a": [
      "Wen Chang",
      "Scott Walden"
     ]
    },
    {
     "t": "male",
     "h": [
      "David Wisch",
      "Eric Pollock"
     ],
     "a": [
      "Michael Burns",
      "Bruce Freedman"
     ]
    }
   ]
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
   "home": "One Love",
   "away": "Colts Neck Racquet Club",
   "time": "2026-09-26T14:00:00",
   "complete": false,
   "games": [
    {
     "t": "mixed",
     "h": [
      "Deirdre Monahan",
      "David Katz"
     ],
     "a": [
      "Cindy Rossine",
      "Frank Leccese"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Cheryl Parker",
      "Henry Dornemann"
     ],
     "a": [
      "Christina Zumbo-Zerega",
      "Frank Messina"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Amy Santopietro",
      "Dan Carrion"
     ],
     "a": [
      "Melissa Freedman",
      "Jonathan Gross"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Michele Collins",
      "Timothy Cassidy"
     ],
     "a": [
      "Shari Gagliardo",
      "Daniel Brennan"
     ]
    },
    {
     "t": "female",
     "h": [
      "Brenda Mee",
      "Deirdre Monahan"
     ],
     "a": [
      "Christina Zumbo-Zerega",
      "Melissa Freedman"
     ]
    },
    {
     "t": "female",
     "h": [
      "Tracy Kaban",
      "Amy Santopietro"
     ],
     "a": [
      "Cindy Rossine",
      "Sharon Rarig"
     ]
    },
    {
     "t": "male",
     "h": [
      "Timothy Cassidy",
      "Henry Dornemann"
     ],
     "a": [
      "Frank Leccese",
      "Frank Messina"
     ]
    },
    {
     "t": "male",
     "h": [
      "Keith Seager",
      "Christopher Chierchia"
     ],
     "a": [
      "Jonathan Gross",
      "Michael Salerno"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Tracy Kaban",
      "Timothy Cassidy"
     ],
     "a": [
      "Shari Gagliardo",
      "Michael Salerno"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Cheryl Parker",
      "Keith Seager"
     ],
     "a": [
      "Melissa Freedman",
      "Daniel Brennan"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Michele Collins",
      "Henry Dornemann"
     ],
     "a": [
      "Christina Zumbo-Zerega",
      "Frank Leccese"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Brenda Mee",
      "Christopher Chierchia"
     ],
     "a": [
      "Sharon Rarig",
      "Frank Messina"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Deirdre Monahan",
      "Cheryl Parker"
     ],
     "a": [
      "Melissa Freedman",
      "Sharon Rarig"
     ]
    },
    {
     "t": "female",
     "h": [
      "Brenda Mee",
      "Tracy Kaban"
     ],
     "a": [
      "Cindy Rossine",
      "Shari Gagliardo"
     ]
    },
    {
     "t": "male",
     "h": [
      "David Katz",
      "Keith Seager"
     ],
     "a": [
      "Jonathan Gross",
      "Frank Leccese"
     ]
    },
    {
     "t": "male",
     "h": [
      "Dan Carrion",
      "Christopher Chierchia"
     ],
     "a": [
      "Daniel Brennan",
      "Michael Salerno"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Deirdre Monahan",
      "Timothy Cassidy"
     ],
     "a": [
      "Cindy Rossine",
      "Frank Messina"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Cheryl Parker",
      "Henry Dornemann"
     ],
     "a": [
      "Sharon Rarig",
      "Daniel Brennan"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Amy Santopietro",
      "Dan Carrion"
     ],
     "a": [
      "Christina Zumbo-Zerega",
      "Michael Salerno"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Michele Collins",
      "David Katz"
     ],
     "a": [
      "Shari Gagliardo",
      "Jonathan Gross"
     ]
    },
    {
     "t": "female",
     "h": [
      "Tracy Kaban",
      "Amy Santopietro"
     ],
     "a": [
      "Cindy Rossine",
      "Sharon Rarig"
     ]
    },
    {
     "t": "female",
     "h": [
      "Deirdre Monahan",
      "Brenda Mee"
     ],
     "a": [
      "Christina Zumbo-Zerega",
      "Melissa Freedman"
     ]
    },
    {
     "t": "male",
     "h": [
      "Henry Dornemann",
      "Timothy Cassidy"
     ],
     "a": [
      "Daniel Brennan",
      "Frank Leccese"
     ]
    },
    {
     "t": "male",
     "h": [
      "Keith Seager",
      "Christopher Chierchia"
     ],
     "a": [
      "Jonathan Gross",
      "Frank Messina"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Tracy Kaban",
      "Timothy Cassidy"
     ],
     "a": [
      "Shari Gagliardo",
      "Frank Messina"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Cheryl Parker",
      "Keith Seager"
     ],
     "a": [
      "Cindy Rossine",
      "Frank Leccese"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Michele Collins",
      "Dan Carrion"
     ],
     "a": [
      "Christina Zumbo-Zerega",
      "Jonathan Gross"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Brenda Mee",
      "Christopher Chierchia"
     ],
     "a": [
      "Melissa Freedman",
      "Michael Salerno"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Brenda Mee",
      "Tracy Kaban"
     ],
     "a": [
      "Christina Zumbo-Zerega",
      "Sharon Rarig"
     ]
    },
    {
     "t": "female",
     "h": [
      "Cheryl Parker",
      "Deirdre Monahan"
     ],
     "a": [
      "Melissa Freedman",
      "Shari Gagliardo"
     ]
    },
    {
     "t": "male",
     "h": [
      "Keith Seager",
      "Timothy Cassidy"
     ],
     "a": [
      "Frank Messina",
      "Daniel Brennan"
     ]
    },
    {
     "t": "male",
     "h": [
      "Christopher Chierchia",
      "Henry Dornemann"
     ],
     "a": [
      "Frank Leccese",
      "Michael Salerno"
     ],
     "hSub": [
      1,
      0
     ]
    }
   ]
  },
  {
   "result": null,
   "week": 6,
   "home": "Bounce Malvern",
   "away": "Dill Dinkers Newport",
   "time": "2026-09-26T14:30:00",
   "complete": false,
   "games": [
    {
     "t": "mixed",
     "h": [
      "Zalene Corey",
      "Anuraag Verma"
     ],
     "a": [
      "Josephine O'Neill",
      "Joshua Holloway"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Nancy Hornback",
      "George Nouaime"
     ],
     "a": [
      "Karen Mcbride",
      "Craig Mclean"
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Lynn Snyder",
      "Brian Schartz"
     ],
     "a": [
      "Anette Schuetz",
      "Chris Owens"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Heather King",
      "Jeffrey Lindstrom"
     ],
     "a": [
      "Eulett Pryce",
      "Albert Tiegs"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "female",
     "h": [
      "Lynn Snyder",
      "Amy Condi"
     ],
     "a": [
      "Josephine O'Neill",
      "Karen Austin"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Heather King",
      "Nancy Hornback"
     ],
     "a": [
      "Karen Mcbride",
      "Beth Hyland"
     ],
     "hSub": [
      0,
      1
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Anuraag Verma",
      "Harihar Chudamani"
     ],
     "a": [
      "Craig Mclean",
      "Charles Rhodes"
     ]
    },
    {
     "t": "male",
     "h": [
      "George Nouaime",
      "Neal Shipon"
     ],
     "a": [
      "Joshua Holloway",
      "Michael Hougentogler"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Zalene Corey",
      "Brian Schartz"
     ],
     "a": [
      "Josephine O'Neill",
      "Joshua Holloway"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Lynn Snyder",
      "Anuraag Verma"
     ],
     "a": [
      "Karen Mcbride",
      "Craig Mclean"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Nancy Hornback",
      "Harihar Chudamani"
     ],
     "a": [
      "Eulett Pryce",
      "Chris Owens"
     ],
     "hSub": [
      1,
      0
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Amy Condi",
      "Jeffrey Lindstrom"
     ],
     "a": [
      "Anette Schuetz",
      "Albert Tiegs"
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "female",
     "h": [
      "Zalene Corey",
      "Amy Condi"
     ],
     "a": [
      "Josephine O'Neill",
      "Karen Austin"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Lynn Snyder",
      "Heather King"
     ],
     "a": [
      "Karen Mcbride",
      "Beth Hyland"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Jeffrey Lindstrom",
      "George Nouaime"
     ],
     "a": [
      "Michael Hougentogler",
      "Charles Rhodes"
     ]
    },
    {
     "t": "male",
     "h": [
      "Brian Schartz",
      "Harihar Chudamani"
     ],
     "a": [
      "Joshua Holloway",
      "Craig Mclean"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Nancy Hornback",
      "Anuraag Verma"
     ],
     "a": [
      "Karen Austin",
      "Chris Owens"
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Lynn Snyder",
      "Brian Schartz"
     ],
     "a": [
      "Beth Hyland",
      "Albert Tiegs"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Zalene Corey",
      "Jeffrey Lindstrom"
     ],
     "a": [
      "Anette Schuetz",
      "Michael Hougentogler"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Heather King",
      "Harihar Chudamani"
     ],
     "a": [
      "Eulett Pryce",
      "Charles Rhodes"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "female",
     "h": [
      "Zalene Corey",
      "Heather King"
     ],
     "a": [
      "Josephine O'Neill",
      "Anette Schuetz"
     ]
    },
    {
     "t": "female",
     "h": [
      "Lynn Snyder",
      "Amy Condi"
     ],
     "a": [
      "Karen Mcbride",
      "Karen Austin"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Anuraag Verma",
      "Jeffrey Lindstrom"
     ],
     "a": [
      "Craig Mclean",
      "Michael Hougentogler"
     ]
    },
    {
     "t": "male",
     "h": [
      "George Nouaime",
      "Neal Shipon"
     ],
     "a": [
      "Joshua Holloway",
      "Albert Tiegs"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Amy Condi",
      "Harihar Chudamani"
     ],
     "a": [
      "Josephine O'Neill",
      "Chris Owens"
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Heather King",
      "George Nouaime"
     ],
     "a": [
      "Beth Hyland",
      "Craig Mclean"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Nancy Hornback",
      "Brian Schartz"
     ],
     "a": [
      "Karen Mcbride",
      "Joshua Holloway"
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Zalene Corey",
      "Jeffrey Lindstrom"
     ],
     "a": [
      "Anette Schuetz",
      "Charles Rhodes"
     ]
    },
    {
     "t": "female",
     "h": [
      "Lynn Snyder",
      "Nancy Hornback"
     ],
     "a": [
      "Beth Hyland",
      "Karen Austin"
     ],
     "hSub": [
      0,
      1
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "female",
     "h": [
      "Heather King",
      "Amy Condi"
     ],
     "a": [
      "Eulett Pryce",
      "Anette Schuetz"
     ],
     "hSub": [
      0,
      1
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "male",
     "h": [
      "Anuraag Verma",
      "George Nouaime"
     ],
     "a": [
      "Chris Owens",
      "Michael Hougentogler"
     ]
    },
    {
     "t": "male",
     "h": [
      "Neal Shipon",
      "Harihar Chudamani"
     ],
     "a": [
      "Charles Rhodes",
      "Albert Tiegs"
     ],
     "hSub": [
      1,
      0
     ]
    }
   ]
  },
  {
   "result": null,
   "week": 6,
   "home": "Monroe",
   "away": "Life Time Red Bank",
   "time": "2026-09-26T15:00:00",
   "complete": false,
   "games": [
    {
     "t": "mixed",
     "h": [
      "Audrey Lotti",
      "Jeffrey Quinlan"
     ],
     "a": [
      "Donna Facconerusin",
      "Virgo Marjamaa"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Filomena Rega",
      "Anthony Manzo"
     ],
     "a": [
      "Caroline Kinlin",
      "David Mccarthy"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Amy Farrell",
      "Tiran Rishon"
     ],
     "a": [
      "Kathy Baker",
      "Daniel Ryan"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Olga Turova",
      "Oleg Goldinberg"
     ],
     "a": [
      "Jackie Coneeny",
      "Carl Nath"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Filomena Rega",
      "Amy Farrell"
     ],
     "a": [
      "Sara Hylan",
      "Kathy Baker"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "female",
     "h": [
      "Audrey Lotti",
      "Denise Macfarlane"
     ],
     "a": [
      "Caroline Kinlin",
      "Erica Ruggieri"
     ]
    },
    {
     "t": "male",
     "h": [
      "Tiran Rishon",
      "Jeffrey Quinlan"
     ],
     "a": [
      "Carl Nath",
      "Daniel Ryan"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "male",
     "h": [
      "Oleg Goldinberg",
      "Richard Ricciardi"
     ],
     "a": [
      "David Mccarthy",
      "Blair Lane"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Denise Macfarlane",
      "Richard Ricciardi"
     ],
     "a": [
      "Erica Ruggieri",
      "Blair Lane"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Audrey Lotti",
      "Tiran Rishon"
     ],
     "a": [
      "Donna Facconerusin",
      "Virgo Marjamaa"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Filomena Rega",
      "Anthony Manzo"
     ],
     "a": [
      "Jackie Coneeny",
      "Carl Nath"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Olga Turova",
      "Oleg Goldinberg"
     ],
     "a": [
      "Sara Hylan",
      "Daniel Ryan"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "female",
     "h": [
      "Olga Turova",
      "Filomena Rega"
     ],
     "a": [
      "Donna Facconerusin",
      "Kathy Baker"
     ]
    },
    {
     "t": "female",
     "h": [
      "Audrey Lotti",
      "Amy Farrell"
     ],
     "a": [
      "Sara Hylan",
      "Jackie Coneeny"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "male",
     "h": [
      "Anthony Manzo",
      "Jeffrey Quinlan"
     ],
     "a": [
      "Daniel Ryan",
      "David Mccarthy"
     ]
    },
    {
     "t": "male",
     "h": [
      "Tiran Rishon",
      "Oleg Goldinberg"
     ],
     "a": [
      "Blair Lane",
      "Michael Altilio"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Olga Turova",
      "Jeffrey Quinlan"
     ],
     "a": [
      "Caroline Kinlin",
      "Michael Altilio"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Denise Macfarlane",
      "Tiran Rishon"
     ],
     "a": [
      "Jackie Coneeny",
      "Virgo Marjamaa"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Audrey Lotti",
      "Richard Ricciardi"
     ],
     "a": [
      "Erica Ruggieri",
      "David Mccarthy"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Amy Farrell",
      "Anthony Manzo"
     ],
     "a": [
      "Kathy Baker",
      "Carl Nath"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Filomena Rega",
      "Denise Macfarlane"
     ],
     "a": [
      "Caroline Kinlin",
      "Donna Facconerusin"
     ]
    },
    {
     "t": "female",
     "h": [
      "Olga Turova",
      "Amy Farrell"
     ],
     "a": [
      "Kathy Baker",
      "Sara Hylan"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Anthony Manzo",
      "Oleg Goldinberg"
     ],
     "a": [
      "Virgo Marjamaa",
      "Blair Lane"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "male",
     "h": [
      "Tiran Rishon",
      "Richard Ricciardi"
     ],
     "a": [
      "David Mccarthy",
      "Michael Altilio"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Amy Farrell",
      "Anthony Manzo"
     ],
     "a": [
      "Kathy Baker",
      "Carl Nath"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Olga Turova",
      "Jeffrey Quinlan"
     ],
     "a": [
      "Sara Hylan",
      "Blair Lane"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Filomena Rega",
      "Oleg Goldinberg"
     ],
     "a": [
      "Jackie Coneeny",
      "Virgo Marjamaa"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Audrey Lotti",
      "Richard Ricciardi"
     ],
     "a": [
      "Erica Ruggieri",
      "David Mccarthy"
     ]
    },
    {
     "t": "female",
     "h": [
      "Olga Turova",
      "Filomena Rega"
     ],
     "a": [
      "Caroline Kinlin",
      "Jackie Coneeny"
     ]
    },
    {
     "t": "female",
     "h": [
      "Amy Farrell",
      "Denise Macfarlane"
     ],
     "a": [
      "Erica Ruggieri",
      "Donna Facconerusin"
     ]
    },
    {
     "t": "male",
     "h": [
      "Anthony Manzo",
      "Tiran Rishon"
     ],
     "a": [
      "Carl Nath",
      "Michael Altilio"
     ],
     "aSub": [
      1,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Jeffrey Quinlan",
      "Richard Ricciardi"
     ],
     "a": [
      "Virgo Marjamaa",
      "Blair Lane"
     ],
     "aSub": [
      1,
      0
     ]
    }
   ]
  },
  {
   "result": null,
   "week": 6,
   "home": "Forward",
   "away": "Players Courtyard",
   "time": "2026-09-26T15:00:00",
   "complete": false,
   "games": [
    {
     "t": "mixed",
     "h": [
      "Crista Renauro",
      "David Ward"
     ],
     "a": [
      "Suzanne Garcia",
      "Michael Ross"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Jennifer Laroque",
      "Scott Gardo"
     ],
     "a": [
      "Xiaojun Yuan",
      "Edward Verish"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Kim Slomeana",
      "Jonathan Capeci"
     ],
     "a": [
      "Danya George",
      "Tom Giunta"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Ellen Rubiato",
      "Ken Wager"
     ],
     "a": [
      "Elisa Riesenbach",
      "Joseph Koerner"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "female",
     "h": [
      "Carolyn Laverdiere",
      "Mary Hain"
     ],
     "a": [
      "Xiaojun Yuan",
      "Danya George"
     ]
    },
    {
     "t": "female",
     "h": [
      "Kim Slomeana",
      "Crista Renauro"
     ],
     "a": [
      "Suzanne Garcia",
      "Elisa Riesenbach"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Ed Palek",
      "David Ward"
     ],
     "a": [
      "Craig Mehnert",
      "Frank Choi"
     ],
     "hSub": [
      1,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Scott Gardo",
      "Ken Wager"
     ],
     "a": [
      "Tom Giunta",
      "Michael Ross"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Jennifer Laroque",
      "Ed Palek"
     ],
     "a": [
      "Danya George",
      "Michael Ross"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Carolyn Laverdiere",
      "Ken Wager"
     ],
     "a": [
      "Suzanne Garcia",
      "Edward Verish"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Ellen Rubiato",
      "Jonathan Capeci"
     ],
     "a": [
      "Xiaojun Yuan",
      "Joseph Koerner"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Mary Hain",
      "Scott Gardo"
     ],
     "a": [
      "Elisa Riesenbach",
      "Craig Mehnert"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "female",
     "h": [
      "Ellen Rubiato",
      "Crista Renauro"
     ],
     "a": [
      "Suzanne Garcia",
      "Xiaojun Yuan"
     ]
    },
    {
     "t": "female",
     "h": [
      "Kim Slomeana",
      "Mary Hain"
     ],
     "a": [
      "Elisa Riesenbach",
      "Danya George"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "male",
     "h": [
      "Ken Wager",
      "David Ward"
     ],
     "a": [
      "Michael Ross",
      "Tom Giunta"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Ed Palek",
      "Jonathan Capeci"
     ],
     "a": [
      "Joseph Koerner",
      "Frank Choi"
     ],
     "hSub": [
      1,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Jennifer Laroque",
      "David Ward"
     ],
     "a": [
      "Suzanne Garcia",
      "Tom Giunta"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Carolyn Laverdiere",
      "Jonathan Capeci"
     ],
     "a": [
      "Xiaojun Yuan",
      "Craig Mehnert"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Crista Renauro",
      "Scott Gardo"
     ],
     "a": [
      "Elisa Riesenbach",
      "Edward Verish"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Ellen Rubiato",
      "Ed Palek"
     ],
     "a": [
      "Danya George",
      "Joseph Koerner"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Mary Hain",
      "Kim Slomeana"
     ],
     "a": [
      "Xiaojun Yuan",
      "Elisa Riesenbach"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Ellen Rubiato",
      "Carolyn Laverdiere"
     ],
     "a": [
      "Danya George",
      "Suzanne Garcia"
     ]
    },
    {
     "t": "male",
     "h": [
      "Ken Wager",
      "David Ward"
     ],
     "a": [
      "Edward Verish",
      "Craig Mehnert"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Ed Palek",
      "Scott Gardo"
     ],
     "a": [
      "Frank Choi",
      "Tom Giunta"
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Jennifer Laroque",
      "Ken Wager"
     ],
     "a": [
      "Elisa Riesenbach",
      "Joseph Koerner"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Carolyn Laverdiere",
      "Ed Palek"
     ],
     "a": [
      "Xiaojun Yuan",
      "Frank Choi"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Mary Hain",
      "Jonathan Capeci"
     ],
     "a": [
      "Suzanne Garcia",
      "Craig Mehnert"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Crista Renauro",
      "Scott Gardo"
     ],
     "a": [
      "Danya George",
      "Edward Verish"
     ]
    },
    {
     "t": "female",
     "h": [
      "Ellen Rubiato",
      "Kim Slomeana"
     ],
     "a": [
      "Xiaojun Yuan",
      "Suzanne Garcia"
     ]
    },
    {
     "t": "female",
     "h": [
      "Crista Renauro",
      "Jennifer Laroque"
     ],
     "a": [
      "Danya George",
      "Elisa Riesenbach"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Scott Gardo",
      "Ken Wager"
     ],
     "a": [
      "Frank Choi",
      "Craig Mehnert"
     ]
    },
    {
     "t": "male",
     "h": [
      "David Ward",
      "Jonathan Capeci"
     ],
     "a": [
      "Joseph Koerner",
      "Tom Giunta"
     ],
     "hSub": [
      1,
      1
     ]
    }
   ]
  },
  {
   "result": null,
   "week": 6,
   "home": "Flemington Blue",
   "away": "Mercer Bucks",
   "time": "2026-09-26T15:00:00",
   "complete": false,
   "games": [
    {
     "t": "mixed",
     "h": [
      "Sharon Oddy",
      "Tom Dominczyk"
     ],
     "a": [
      "Cheryl Tarby",
      "Howard Eng"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Holly Ferguson",
      "Ren Mortara"
     ],
     "a": [
      "Tami Mohney",
      "Jason Belmont"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Gail Hannagan",
      "Anthony Leone"
     ],
     "a": [
      "Jean Knab",
      "Gregg Downs"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Sheila Curran",
      "Doug Jordan"
     ],
     "a": [
      "Cindy Suter",
      "Jerry Margulies"
     ]
    },
    {
     "t": "female",
     "h": [
      "Gail Hannagan",
      "Cathy Matko"
     ],
     "a": [
      "Tami Mohney",
      "Jean Knab"
     ]
    },
    {
     "t": "female",
     "h": [
      "Sharon Oddy",
      "Xinxin Huang"
     ],
     "a": [
      "Tracy Leahy",
      "Cindy Suter"
     ]
    },
    {
     "t": "male",
     "h": [
      "Paul Phillips",
      "Tom Dominczyk"
     ],
     "a": [
      "Howard Eng",
      "Jerry Margulies"
     ]
    },
    {
     "t": "male",
     "h": [
      "Anthony Leone",
      "Ren Mortara"
     ],
     "a": [
      "Gregg Downs",
      "Joe Miller"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Holly Ferguson",
      "Tom Dominczyk"
     ],
     "a": [
      "Cindy Suter",
      "Gregg Downs"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Cathy Matko",
      "Anthony Leone"
     ],
     "a": [
      "Jean Knab",
      "Jason Belmont"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Gail Hannagan",
      "Doug Jordan"
     ],
     "a": [
      "Cheryl Tarby",
      "Howard Eng"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Sheila Curran",
      "Paul Phillips"
     ],
     "a": [
      "Tracy Leahy",
      "Joe Miller"
     ]
    },
    {
     "t": "female",
     "h": [
      "Sheila Curran",
      "Xinxin Huang"
     ],
     "a": [
      "Jean Knab",
      "Tami Mohney"
     ]
    },
    {
     "t": "female",
     "h": [
      "Sharon Oddy",
      "Gail Hannagan"
     ],
     "a": [
      "Cindy Suter",
      "Cheryl Tarby"
     ]
    },
    {
     "t": "male",
     "h": [
      "Anthony Leone",
      "Tom Dominczyk"
     ],
     "a": [
      "Gregg Downs",
      "Jason Belmont"
     ]
    },
    {
     "t": "male",
     "h": [
      "Ren Mortara",
      "Paul Phillips"
     ],
     "a": [
      "Jerry Margulies",
      "Howard Eng"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Sharon Oddy",
      "Anthony Leone"
     ],
     "a": [
      "Cheryl Tarby",
      "Jason Belmont"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Holly Ferguson",
      "Doug Jordan"
     ],
     "a": [
      "Tami Mohney",
      "Howard Eng"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Cathy Matko",
      "Ren Mortara"
     ],
     "a": [
      "Tracy Leahy",
      "Joe Miller"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Xinxin Huang",
      "Paul Phillips"
     ],
     "a": [
      "Cindy Suter",
      "Jerry Margulies"
     ]
    },
    {
     "t": "female",
     "h": [
      "Sheila Curran",
      "Cathy Matko"
     ],
     "a": [
      "Jean Knab",
      "Tracy Leahy"
     ]
    },
    {
     "t": "female",
     "h": [
      "Gail Hannagan",
      "Xinxin Huang"
     ],
     "a": [
      "Cindy Suter",
      "Cheryl Tarby"
     ]
    },
    {
     "t": "male",
     "h": [
      "Paul Phillips",
      "Doug Jordan"
     ],
     "a": [
      "Gregg Downs",
      "Jerry Margulies"
     ]
    },
    {
     "t": "male",
     "h": [
      "Ren Mortara",
      "Tom Dominczyk"
     ],
     "a": [
      "Joe Miller",
      "Jason Belmont"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Sheila Curran",
      "Tom Dominczyk"
     ],
     "a": [
      "Tracy Leahy",
      "Gregg Downs"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Holly Ferguson",
      "Doug Jordan"
     ],
     "a": [
      "Tami Mohney",
      "Howard Eng"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Sharon Oddy",
      "Anthony Leone"
     ],
     "a": [
      "Jean Knab",
      "Jason Belmont"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Xinxin Huang",
      "Ren Mortara"
     ],
     "a": [
      "Cheryl Tarby",
      "Joe Miller"
     ]
    },
    {
     "t": "female",
     "h": [
      "Sharon Oddy",
      "Gail Hannagan"
     ],
     "a": [
      "Cheryl Tarby",
      "Jean Knab"
     ]
    },
    {
     "t": "female",
     "h": [
      "Holly Ferguson",
      "Cathy Matko"
     ],
     "a": [
      "Tami Mohney",
      "Cindy Suter"
     ]
    },
    {
     "t": "male",
     "h": [
      "Anthony Leone",
      "Tom Dominczyk"
     ],
     "a": [
      "Howard Eng",
      "Jason Belmont"
     ]
    },
    {
     "t": "male",
     "h": [
      "Ren Mortara",
      "Paul Phillips"
     ],
     "a": [
      "Gregg Downs",
      "Jerry Margulies"
     ]
    }
   ]
  },
  {
   "result": null,
   "week": 6,
   "home": "Premiere Aces",
   "away": "Allstar Pickler",
   "time": "2026-09-26T15:00:00",
   "complete": false,
   "games": [
    {
     "t": "mixed",
     "h": [
      "Carleen Thompson",
      "Frank Marchiano"
     ],
     "a": [
      "Jessie Fang",
      "Feng Song"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "April Danks",
      "Frank Fama"
     ],
     "a": [
      "Ling Tsui",
      "Bing Zhu"
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Doreen Calcagno",
      "Felix Soto"
     ],
     "a": [
      "Lingshan Hsieh",
      "Erwin Wong"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Enza Cristino",
      "Joseph Calcagno"
     ],
     "a": [
      "Jessica Ren",
      "Alex Chang"
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "female",
     "h": [
      "Enza Cristino",
      "Carleen Thompson"
     ],
     "a": [
      "Ling Tsui",
      "Yabing Wang"
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "female",
     "h": [
      "Doreen Calcagno",
      "April Danks"
     ],
     "a": [
      "Irish Lee",
      "Jessica Ren"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Frank Fama",
      "Frank Marchiano"
     ],
     "a": [
      "Alex Chang",
      "James Xiong"
     ]
    },
    {
     "t": "male",
     "h": [
      "Felix Soto",
      "Joseph Calcagno"
     ],
     "a": [
      "Bing Zhu",
      "Alan Fang"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Doreen Calcagno",
      "Frank Marchiano"
     ],
     "a": [
      "Lingshan Hsieh",
      "Bing Zhu"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "April Danks",
      "Joseph Calcagno"
     ],
     "a": [
      "Jessie Fang",
      "Alex Chang"
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Enza Cristino",
      "Frank Fama"
     ],
     "a": [
      "Yabing Wang",
      "Erwin Wong"
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Carleen Thompson",
      "Joe Amendolara"
     ],
     "a": [
      "Irish Lee",
      "Feng Song"
     ],
     "hSub": [
      0,
      1
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Carleen Thompson",
      "Doreen Calcagno"
     ],
     "a": [
      "Lingshan Hsieh",
      "Irish Lee"
     ]
    },
    {
     "t": "female",
     "h": [
      "Enza Cristino",
      "April Danks"
     ],
     "a": [
      "Jessica Ren",
      "Ling Tsui"
     ],
     "hSub": [
      1,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Felix Soto",
      "Joseph Calcagno"
     ],
     "a": [
      "Alan Fang",
      "Erwin Wong"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "male",
     "h": [
      "Frank Fama",
      "Joe Amendolara"
     ],
     "a": [
      "Alex Chang",
      "James Xiong"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "April Danks",
      "Frank Marchiano"
     ],
     "a": [
      "Irish Lee",
      "Bing Zhu"
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Carleen Thompson",
      "Felix Soto"
     ],
     "a": [
      "Ling Tsui",
      "Alex Chang"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Doreen Calcagno",
      "Joseph Calcagno"
     ],
     "a": [
      "Jessica Ren",
      "Erwin Wong"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Enza Cristino",
      "Joe Amendolara"
     ],
     "a": [
      "Jessie Fang",
      "Feng Song"
     ],
     "hSub": [
      1,
      1
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Enza Cristino",
      "April Danks"
     ],
     "a": [
      "Ling Tsui",
      "Yabing Wang"
     ],
     "hSub": [
      1,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Doreen Calcagno",
      "Carleen Thompson"
     ],
     "a": [
      "Lingshan Hsieh",
      "Jessie Fang"
     ]
    },
    {
     "t": "male",
     "h": [
      "Joe Amendolara",
      "Joseph Calcagno"
     ],
     "a": [
      "Alan Fang",
      "Erwin Wong"
     ],
     "hSub": [
      1,
      0
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "male",
     "h": [
      "Frank Fama",
      "Felix Soto"
     ],
     "a": [
      "Bing Zhu",
      "James Xiong"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Doreen Calcagno",
      "Joe Amendolara"
     ],
     "a": [
      "Lingshan Hsieh",
      "James Xiong"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Carleen Thompson",
      "Felix Soto"
     ],
     "a": [
      "Jessica Ren",
      "Alan Fang"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "April Danks",
      "Frank Fama"
     ],
     "a": [
      "Jessie Fang",
      "Bing Zhu"
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Enza Cristino",
      "Joseph Calcagno"
     ],
     "a": [
      "Yabing Wang",
      "Feng Song"
     ],
     "hSub": [
      1,
      0
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Doreen Calcagno",
      "April Danks"
     ],
     "a": [
      "Irish Lee",
      "Jessica Ren"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Enza Cristino",
      "Carleen Thompson"
     ],
     "a": [
      "Lingshan Hsieh",
      "Yabing Wang"
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "male",
     "h": [
      "Frank Fama",
      "Frank Marchiano"
     ],
     "a": [
      "Alan Fang",
      "James Xiong"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "male",
     "h": [
      "Joe Amendolara",
      "Joseph Calcagno"
     ],
     "a": [
      "Alex Chang",
      "Feng Song"
     ],
     "hSub": [
      1,
      0
     ],
     "aSub": [
      0,
      1
     ]
    }
   ]
  },
  {
   "result": null,
   "week": 6,
   "home": "Pickleball Palace Blue",
   "away": "Pickleball Palace Black",
   "time": "2026-09-27T09:00:00",
   "complete": false,
   "games": [
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Charlene Fletcher",
      "Ken Bienkowski"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Debbie Spurr",
      "James Azarowicz"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Anne Buckley",
      "Jake Denooyer"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Theresa Corderi",
      "Ward Greer"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Terri Marxen",
      "Charlene Fletcher"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Anne Buckley",
      "Theresa Corderi"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Jake Denooyer",
      "Ward Greer"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Rafael Moreano",
      "Alan Weissman"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Theresa Corderi",
      "James Azarowicz"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Charlene Fletcher",
      "Rafael Moreano"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Debbie Spurr",
      "Ken Bienkowski"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Terri Marxen",
      "Alan Weissman"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Debbie Spurr",
      "Anne Buckley"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Theresa Corderi",
      "Charlene Fletcher"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "James Azarowicz",
      "Ward Greer"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Jake Denooyer",
      "Ken Bienkowski"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Theresa Corderi",
      "Jake Denooyer"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Anne Buckley",
      "Alan Weissman"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Debbie Spurr",
      "Rafael Moreano"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Terri Marxen",
      "James Azarowicz"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Anne Buckley",
      "Charlene Fletcher"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Terri Marxen",
      "Debbie Spurr"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Ken Bienkowski",
      "Alan Weissman"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Ward Greer",
      "Rafael Moreano"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Charlene Fletcher",
      "Alan Weissman"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Theresa Corderi",
      "Jake Denooyer"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Terri Marxen",
      "Rafael Moreano"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Anne Buckley",
      "James Azarowicz"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Anne Buckley",
      "Theresa Corderi"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Debbie Spurr",
      "Charlene Fletcher"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Ken Bienkowski",
      "Ward Greer"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "James Azarowicz",
      "Jake Denooyer"
     ]
    }
   ]
  },
  {
   "result": null,
   "week": 6,
   "home": "Colts Neck Racquet Club",
   "away": "Flemington Green",
   "time": "2026-09-27T09:00:00",
   "complete": false,
   "games": [
    {
     "t": "mixed",
     "h": [
      "Shari Gagliardo",
      "Daniel Brennan"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Christina Zumbo-Zerega",
      "Frank Iacono"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Cindy Rossine",
      "Frank Leccese"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Melissa Freedman",
      "Michael Salerno"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "female",
     "h": [
      "Christina Zumbo-Zerega",
      "Cindy Rossine"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "female",
     "h": [
      "Melissa Freedman",
      "Shari Gagliardo"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "male",
     "h": [
      "Frank Iacono",
      "Jonathan Gross"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "male",
     "h": [
      "Frank Leccese",
      "Michael Salerno"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Melissa Freedman",
      "Frank Iacono"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Cindy Rossine",
      "Michael Salerno"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Marilyn Manzo",
      "Daniel Brennan"
     ],
     "a": [
      "",
      ""
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Shari Gagliardo",
      "Jonathan Gross"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "female",
     "h": [
      "Marilyn Manzo",
      "Shari Gagliardo"
     ],
     "a": [
      "",
      ""
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "female",
     "h": [
      "Melissa Freedman",
      "Christina Zumbo-Zerega"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "male",
     "h": [
      "Jonathan Gross",
      "Frank Leccese"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "male",
     "h": [
      "Frank Iacono",
      "Daniel Brennan"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Cindy Rossine",
      "Frank Leccese"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Marilyn Manzo",
      "Jonathan Gross"
     ],
     "a": [
      "",
      ""
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Shari Gagliardo",
      "Frank Iacono"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Christina Zumbo-Zerega",
      "Michael Salerno"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "female",
     "h": [
      "Christina Zumbo-Zerega",
      "Melissa Freedman"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "female",
     "h": [
      "Marilyn Manzo",
      "Cindy Rossine"
     ],
     "a": [
      "",
      ""
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "male",
     "h": [
      "Frank Leccese",
      "Daniel Brennan"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "male",
     "h": [
      "Michael Salerno",
      "Frank Iacono"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Melissa Freedman",
      "Jonathan Gross"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Christina Zumbo-Zerega",
      "Frank Leccese"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Shari Gagliardo",
      "Michael Salerno"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Cindy Rossine",
      "Daniel Brennan"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "female",
     "h": [
      "Christina Zumbo-Zerega",
      "Shari Gagliardo"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "female",
     "h": [
      "Cindy Rossine",
      "Melissa Freedman"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "male",
     "h": [
      "Frank Iacono",
      "Frank Leccese"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "male",
     "h": [
      "Jonathan Gross",
      "Daniel Brennan"
     ],
     "a": [
      "",
      ""
     ]
    }
   ]
  },
  {
   "result": null,
   "week": 6,
   "home": "Picklr Fair Lawn",
   "away": "Premiere Aces",
   "time": "2026-09-27T09:00:00",
   "complete": false,
   "games": [
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Regina Festa",
      "Frank Fama"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Sabrina Trunzo Dinkle",
      "Joseph Calcagno"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Doreen Calcagno",
      "Joe Amendolara"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Carleen Thompson",
      "Frank Marchiano"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Doreen Calcagno",
      "Carleen Thompson"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Regina Festa",
      "Sabrina Trunzo Dinkle"
     ],
     "aSub": [
      1,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Frank Fama",
      "Frank Marchiano"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Joe Amendolara",
      "Joseph Calcagno"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Sabrina Trunzo Dinkle",
      "Frank Fama"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Doreen Calcagno",
      "Frank Marchiano"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Carleen Thompson",
      "Joe Amendolara"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Regina Festa",
      "Joseph Calcagno"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Doreen Calcagno",
      "Regina Festa"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Carleen Thompson",
      "Sabrina Trunzo Dinkle"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Frank Fama",
      "Joseph Calcagno"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Frank Marchiano",
      "Joe Amendolara"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Doreen Calcagno",
      "Joe Amendolara"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Regina Festa",
      "Joseph Calcagno"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Carleen Thompson",
      "Frank Fama"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Sabrina Trunzo Dinkle",
      "Frank Marchiano"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Doreen Calcagno",
      "Sabrina Trunzo Dinkle"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Regina Festa",
      "Carleen Thompson"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Frank Fama",
      "Joseph Calcagno"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Frank Marchiano",
      "Joe Amendolara"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Regina Festa",
      "Joe Amendolara"
     ],
     "aSub": [
      1,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Doreen Calcagno",
      "Frank Marchiano"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Carleen Thompson",
      "Joseph Calcagno"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Sabrina Trunzo Dinkle",
      "Frank Fama"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Doreen Calcagno",
      "Carleen Thompson"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Regina Festa",
      "Sabrina Trunzo Dinkle"
     ],
     "aSub": [
      1,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Frank Fama",
      "Frank Marchiano"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Joe Amendolara",
      "Joseph Calcagno"
     ],
     "aSub": [
      1,
      0
     ]
    }
   ]
  },
  {
   "result": null,
   "week": 6,
   "home": "Dill Dinkers Newport",
   "away": "Players Courtyard",
   "time": "2026-09-27T15:00:00",
   "complete": false,
   "games": [
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Suzanne Garcia",
      "David Mcdonough"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Tracy Giunta",
      "Michael Ross"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Xiaojun Yuan",
      "Craig Mehnert"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Suzanne Garcia",
      "Xiaojun Yuan"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Frank Choi",
      "David Mcdonough"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Tom Giunta",
      "Joseph Koerner"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Xiaojun Yuan",
      "Joseph Koerner"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Suzanne Garcia",
      "Frank Choi"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Tracy Giunta",
      "Tom Giunta"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Tracy Giunta",
      "Suzanne Garcia"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "David Mcdonough",
      "Craig Mehnert"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Michael Ross",
      "Tom Giunta"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Xiaojun Yuan",
      "Joseph Koerner"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Tracy Giunta",
      "Tom Giunta"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Suzanne Garcia",
      "Michael Ross"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Xiaojun Yuan",
      "Tracy Giunta"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Joseph Koerner",
      "Craig Mehnert"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Frank Choi",
      "Tom Giunta"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Suzanne Garcia",
      "Craig Mehnert"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Tracy Giunta",
      "David Mcdonough"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Xiaojun Yuan",
      "Frank Choi"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Suzanne Garcia",
      "Xiaojun Yuan"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Craig Mehnert",
      "Frank Choi"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "David Mcdonough",
      "Michael Ross"
     ]
    }
   ]
  },
  {
   "result": null,
   "week": 6,
   "home": "Dill Dinkers Hatboro",
   "away": "Forward",
   "time": "2026-09-27T15:00:00",
   "complete": false,
   "games": [
    {
     "t": "mixed",
     "h": [
      "Lauren Ricks",
      "Andrew Bush"
     ],
     "a": [
      "Crista Renauro",
      "Chris Allander"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Carolyn King",
      "Andrew Frey"
     ],
     "a": [
      "Kim Slomeana",
      "Anthony Dejesse"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Betsy Hansbury",
      "Matt Becker"
     ],
     "a": [
      "Jennifer Laroque",
      "Ken Wager"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Cheryl Raiken",
      "Eric Pollock"
     ],
     "a": [
      "Carolyn Laverdiere",
      "Scott Gardo"
     ]
    },
    {
     "t": "female",
     "h": [
      "Betsy Hansbury",
      "Carolyn King"
     ],
     "a": [
      "Kim Slomeana",
      "Jennifer Laroque"
     ]
    },
    {
     "t": "female",
     "h": [
      "Lauren Ricks",
      "Bonny Mayerberg"
     ],
     "a": [
      "Lori Wild",
      "Mary Hain"
     ]
    },
    {
     "t": "male",
     "h": [
      "David Wisch",
      "Andrew Frey"
     ],
     "a": [
      "Scott Gardo",
      "Patrick Neary"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Matt Becker",
      "Eric Pollock"
     ],
     "a": [
      "Ken Wager",
      "Chris Allander"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Adele Hackney",
      "Andrew Frey"
     ],
     "a": [
      "Crista Renauro",
      "Ken Wager"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Bonny Mayerberg",
      "David Wisch"
     ],
     "a": [
      "Mary Hain",
      "Patrick Neary"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Betsy Hansbury",
      "Andrew Bush"
     ],
     "a": [
      "Carolyn Laverdiere",
      "Chris Allander"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Cheryl Raiken",
      "Matt Becker"
     ],
     "a": [
      "Lori Wild",
      "Anthony Dejesse"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Carolyn King",
      "Cheryl Raiken"
     ],
     "a": [
      "Kim Slomeana",
      "Mary Hain"
     ]
    },
    {
     "t": "female",
     "h": [
      "Adele Hackney",
      "Lauren Ricks"
     ],
     "a": [
      "Jennifer Laroque",
      "Crista Renauro"
     ]
    },
    {
     "t": "male",
     "h": [
      "David Wisch",
      "Matt Becker"
     ],
     "a": [
      "Chris Allander",
      "Anthony Dejesse"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Andrew Bush",
      "Eric Pollock"
     ],
     "a": [
      "Scott Gardo",
      "Patrick Neary"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Carolyn King",
      "Eric Pollock"
     ],
     "a": [
      "Mary Hain",
      "Ken Wager"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Betsy Hansbury",
      "Andrew Frey"
     ],
     "a": [
      "Jennifer Laroque",
      "Scott Gardo"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Adele Hackney",
      "David Wisch"
     ],
     "a": [
      "Carolyn Laverdiere",
      "Chris Allander"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Bonny Mayerberg",
      "Andrew Bush"
     ],
     "a": [
      "Lori Wild",
      "Patrick Neary"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Cheryl Raiken",
      "Lauren Ricks"
     ],
     "a": [
      "Kim Slomeana",
      "Crista Renauro"
     ]
    },
    {
     "t": "female",
     "h": [
      "Betsy Hansbury",
      "Adele Hackney"
     ],
     "a": [
      "Carolyn Laverdiere",
      "Lori Wild"
     ]
    },
    {
     "t": "male",
     "h": [
      "Eric Pollock",
      "Andrew Frey"
     ],
     "a": [
      "Ken Wager",
      "Scott Gardo"
     ]
    },
    {
     "t": "male",
     "h": [
      "Matt Becker",
      "Andrew Bush"
     ],
     "a": [
      "Patrick Neary",
      "Anthony Dejesse"
     ],
     "aSub": [
      1,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Bonny Mayerberg",
      "Andrew Frey"
     ],
     "a": [
      "Jennifer Laroque",
      "Chris Allander"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Adele Hackney",
      "Eric Pollock"
     ],
     "a": [
      "Carolyn Laverdiere",
      "Anthony Dejesse"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Cheryl Raiken",
      "David Wisch"
     ],
     "a": [
      "Lori Wild",
      "Ken Wager"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Carolyn King",
      "Matt Becker"
     ],
     "a": [
      "Mary Hain",
      "Patrick Neary"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Bonny Mayerberg",
      "Adele Hackney"
     ],
     "a": [
      "Crista Renauro",
      "Jennifer Laroque"
     ]
    },
    {
     "t": "female",
     "h": [
      "Betsy Hansbury",
      "Lauren Ricks"
     ],
     "a": [
      "Carolyn Laverdiere",
      "Kim Slomeana"
     ]
    },
    {
     "t": "male",
     "h": [
      "Matt Becker",
      "Andrew Frey"
     ],
     "a": [
      "Chris Allander",
      "Ken Wager"
     ]
    },
    {
     "t": "male",
     "h": [
      "David Wisch",
      "Andrew Bush"
     ],
     "a": [
      "Anthony Dejesse",
      "Scott Gardo"
     ],
     "aSub": [
      1,
      0
     ]
    }
   ]
  },
  {
   "result": null,
   "week": 6,
   "home": "Jersey Devil",
   "away": "Bounce Philly",
   "time": "2026-09-27T15:00:00",
   "complete": false,
   "games": [
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Barbara Hand",
      "Wen Chang"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Julie Orts",
      "Michael Burns"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Judi London",
      "Bruce Freedman"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Lisa Miller",
      "Vincent Daversa"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Barbara Hand",
      "Lisa Miller"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Judi London",
      "Julie Orts"
     ],
     "aSub": [
      1,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Michael Burns",
      "Wen Chang"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Bruce Freedman",
      "Vincent Daversa"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Barbara Hand",
      "Michael Burns"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Lisa Miller",
      "Wen Chang"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Judi London",
      "Bruce Freedman"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Julie Orts",
      "Vincent Daversa"
     ],
     "aSub": [
      1,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Lisa Miller",
      "Barbara Hand"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Julie Orts",
      "Judi London"
     ],
     "aSub": [
      1,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Michael Burns",
      "Bruce Freedman"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Wen Chang",
      "Vincent Daversa"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Lisa Miller",
      "Michael Burns"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Barbara Hand",
      "Wen Chang"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Julie Orts",
      "Bruce Freedman"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Judi London",
      "Vincent Daversa"
     ],
     "aSub": [
      1,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Barbara Hand",
      "Julie Orts"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Lisa Miller",
      "Judi London"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Michael Burns",
      "Wen Chang"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Bruce Freedman",
      "Vincent Daversa"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Barbara Hand",
      "Bruce Freedman"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Judi London",
      "Wen Chang"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Julie Orts",
      "Michael Burns"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Lisa Miller",
      "Vincent Daversa"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Barbara Hand",
      "Judi London"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Lisa Miller",
      "Julie Orts"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Michael Burns",
      "Vincent Daversa"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Wen Chang",
      "Bruce Freedman"
     ]
    }
   ]
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
   "home": "ACE Moorestown",
   "away": "One Love",
   "time": "2026-09-27T17:00:00",
   "complete": false,
   "games": [
    {
     "t": "mixed",
     "h": [
      "Lolita Hagen",
      "Anthony Viola"
     ],
     "a": [
      "Deirdre Monahan",
      "David Katz"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Tinglan Zhao",
      "Steven Heller"
     ],
     "a": [
      "Cheryl Parker",
      "Henry Dornemann"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Ginger Evans",
      "Greg Taylor"
     ],
     "a": [
      "Janet Bodner",
      "Dan Carrion"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Joan Rudderow",
      "Dennis Higman"
     ],
     "a": [
      "Erica Marcus",
      "Timothy Cassidy"
     ]
    },
    {
     "t": "female",
     "h": [
      "Gina Blahut",
      "Tinglan Zhao"
     ],
     "a": [
      "Michele Collins",
      "Deirdre Monahan"
     ]
    },
    {
     "t": "female",
     "h": [
      "Ginger Evans",
      "Joan Rudderow"
     ],
     "a": [
      "Tracy Kaban",
      "Janet Bodner"
     ]
    },
    {
     "t": "male",
     "h": [
      "Rick Weiser",
      "Martyn Babitz"
     ],
     "a": [
      "Eric Brody",
      "Erik Harrison"
     ]
    },
    {
     "t": "male",
     "h": [
      "Dennis Higman",
      "Greg Taylor"
     ],
     "a": [
      "Henry Dornemann",
      "Timothy Cassidy"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Joan Rudderow",
      "Steven Heller"
     ],
     "a": [
      "Janet Bodner",
      "Erik Harrison"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Lolita Hagen",
      "Rick Weiser"
     ],
     "a": [
      "Erica Marcus",
      "Henry Dornemann"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Gina Blahut",
      "Anthony Viola"
     ],
     "a": [
      "Cheryl Parker",
      "Eric Brody"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Amy Neckes",
      "Martyn Babitz"
     ],
     "a": [
      "Tracy Kaban",
      "Timothy Cassidy"
     ]
    },
    {
     "t": "female",
     "h": [
      "Gina Blahut",
      "Amy Neckes"
     ],
     "a": [
      "Tracy Kaban",
      "Michele Collins"
     ]
    },
    {
     "t": "female",
     "h": [
      "Tinglan Zhao",
      "Ginger Evans"
     ],
     "a": [
      "Deirdre Monahan",
      "Cheryl Parker"
     ]
    },
    {
     "t": "male",
     "h": [
      "Rick Weiser",
      "Dennis Higman"
     ],
     "a": [
      "Eric Brody",
      "David Katz"
     ]
    },
    {
     "t": "male",
     "h": [
      "Greg Taylor",
      "Anthony Viola"
     ],
     "a": [
      "Erik Harrison",
      "Dan Carrion"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Amy Neckes",
      "Rick Weiser"
     ],
     "a": [
      "Deirdre Monahan",
      "Timothy Cassidy"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Gina Blahut",
      "Martyn Babitz"
     ],
     "a": [
      "Cheryl Parker",
      "Henry Dornemann"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Joan Rudderow",
      "Dennis Higman"
     ],
     "a": [
      "Janet Bodner",
      "Dan Carrion"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Lolita Hagen",
      "Steven Heller"
     ],
     "a": [
      "Erica Marcus",
      "David Katz"
     ]
    },
    {
     "t": "female",
     "h": [
      "Joan Rudderow",
      "Ginger Evans"
     ],
     "a": [
      "Tracy Kaban",
      "Janet Bodner"
     ]
    },
    {
     "t": "female",
     "h": [
      "Tinglan Zhao",
      "Lolita Hagen"
     ],
     "a": [
      "Deirdre Monahan",
      "Michele Collins"
     ]
    },
    {
     "t": "male",
     "h": [
      "Anthony Viola",
      "Greg Taylor"
     ],
     "a": [
      "Henry Dornemann",
      "Timothy Cassidy"
     ]
    },
    {
     "t": "male",
     "h": [
      "Steven Heller",
      "Martyn Babitz"
     ],
     "a": [
      "Eric Brody",
      "Erik Harrison"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Gina Blahut",
      "Steven Heller"
     ],
     "a": [
      "Tracy Kaban",
      "Timothy Cassidy"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Amy Neckes",
      "Martyn Babitz"
     ],
     "a": [
      "Cheryl Parker",
      "Eric Brody"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Tinglan Zhao",
      "Anthony Viola"
     ],
     "a": [
      "Erica Marcus",
      "Dan Carrion"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Ginger Evans",
      "Dennis Higman"
     ],
     "a": [
      "Michele Collins",
      "Erik Harrison"
     ]
    },
    {
     "t": "female",
     "h": [
      "Ginger Evans",
      "Lolita Hagen"
     ],
     "a": [
      "Michele Collins",
      "Tracy Kaban"
     ]
    },
    {
     "t": "female",
     "h": [
      "Joan Rudderow",
      "Tinglan Zhao"
     ],
     "a": [
      "Cheryl Parker",
      "Deirdre Monahan"
     ]
    },
    {
     "t": "male",
     "h": [
      "Rick Weiser",
      "Anthony Viola"
     ],
     "a": [
      "Eric Brody",
      "Timothy Cassidy"
     ]
    },
    {
     "t": "male",
     "h": [
      "Dennis Higman",
      "Greg Taylor"
     ],
     "a": [
      "Henry Dornemann",
      "Erik Harrison"
     ]
    }
   ]
  },
  {
   "result": null,
   "week": 6,
   "home": "Monroe",
   "away": "Pickleball Kingdom Hamilton Prime Time",
   "time": "2026-09-27T17:00:00",
   "complete": false,
   "games": [
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Yayuan Lien",
      "Fritz Jean-Brian"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Mary Foster",
      "Nicholai Ola"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Luz Bonner",
      "Jimbo Jimenez"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Debra Crawford",
      "Brian Kelly"
     ],
     "aSub": [
      1,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Yayuan Lien",
      "Mary Foster"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Debra Crawford",
      "Franchesa Mclean"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Fritz Jean-Brian",
      "Nicholai Ola"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Jimbo Jimenez",
      "Ed Mendoza"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Yayuan Lien",
      "Ed Mendoza"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Franchesa Mclean",
      "Fritz Jean-Brian"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Luz Bonner",
      "Nicholai Ola"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Debra Crawford",
      "Brian Kelly"
     ],
     "aSub": [
      1,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Yayuan Lien",
      "Franchesa Mclean"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Luz Bonner",
      "Mary Foster"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Jimbo Jimenez",
      "Brian Kelly"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Nicholai Ola",
      "Ed Mendoza"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Debra Crawford",
      "Jimbo Jimenez"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Mary Foster",
      "Ed Mendoza"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Luz Bonner",
      "Fritz Jean-Brian"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Franchesa Mclean",
      "Nicholai Ola"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Yayuan Lien",
      "Mary Foster"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Debra Crawford",
      "Franchesa Mclean"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Fritz Jean-Brian",
      "Brian Kelly"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Jimbo Jimenez",
      "Ed Mendoza"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Yayuan Lien",
      "Ed Mendoza"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Mary Foster",
      "Brian Kelly"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Luz Bonner",
      "Fritz Jean-Brian"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Debra Crawford",
      "Jimbo Jimenez"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Yayuan Lien",
      "Luz Bonner"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Mary Foster",
      "Franchesa Mclean"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Fritz Jean-Brian",
      "Nicholai Ola"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Jimbo Jimenez",
      "Brian Kelly"
     ],
     "aSub": [
      0,
      1
     ]
    }
   ]
  },
  {
   "result": null,
   "week": 6,
   "home": "Premiere Dinkers",
   "away": "Mercer Bucks",
   "time": "2026-09-27T17:00:00",
   "complete": false,
   "games": [
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Tami Mohney",
      "Howard Eng"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Jean Knab",
      "Gregg Downs"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Lisa Angelini",
      "Joe Miller"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Cheryl Tarby",
      "Jason Belmont"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Jean Knab",
      "Lisa Angelini"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Cheryl Tarby",
      "Cindy Suter"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Howard Eng",
      "Jason Belmont"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Jerry Margulies",
      "Gregg Downs"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Jean Knab",
      "Jason Belmont"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Tami Mohney",
      "Howard Eng"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Lisa Angelini",
      "Joe Miller"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Cindy Suter",
      "Jerry Margulies"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Tami Mohney",
      "Jean Knab"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Cheryl Tarby",
      "Cindy Suter"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Howard Eng",
      "Jerry Margulies"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Gregg Downs",
      "Joe Miller"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Cheryl Tarby",
      "Jerry Margulies"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Tami Mohney",
      "Jason Belmont"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Cindy Suter",
      "Joe Miller"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Lisa Angelini",
      "Gregg Downs"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Tami Mohney",
      "Lisa Angelini"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Jean Knab",
      "Cheryl Tarby"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Jason Belmont",
      "Gregg Downs"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Howard Eng",
      "Joe Miller"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Jean Knab",
      "Jason Belmont"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Cheryl Tarby",
      "Gregg Downs"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Lisa Angelini",
      "Howard Eng"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Cindy Suter",
      "Jerry Margulies"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Tami Mohney",
      "Cindy Suter"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Cheryl Tarby",
      "Jean Knab"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Howard Eng",
      "Jerry Margulies"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Gregg Downs",
      "Jason Belmont"
     ]
    }
   ]
  },
  {
   "result": null,
   "week": 6,
   "home": "Flemington Blue",
   "away": "PKLD",
   "time": "2026-09-27T18:00:00",
   "complete": false,
   "games": [
    {
     "t": "mixed",
     "h": [
      "Eleni Leone",
      "Frank Rodriguez"
     ],
     "a": [
      "Maureen Bruno",
      "Lenn Yeger"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Gail Hannagan",
      "Anthony Leone"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Steven Truzzolino"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Holly Ferguson",
      "Ren Mortara"
     ],
     "a": [
      "Petra Jones",
      "Freddy Alicea"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Sharon Oddy",
      "Jeffrey Hartford"
     ],
     "a": [
      "Karen Rosenberg",
      "Scott Rothschild"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Sharon Oddy",
      "Eleni Leone"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Karen Rosenberg"
     ]
    },
    {
     "t": "female",
     "h": [
      "Gail Hannagan",
      "Margo Langer"
     ],
     "a": [
      "Bobbi Rentko",
      "Maureen Bruno"
     ]
    },
    {
     "t": "male",
     "h": [
      "Anthony Leone",
      "Frank Rodriguez"
     ],
     "a": [
      "Steven Truzzolino",
      "Elliot Fishman"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Jeffrey Hartford",
      "Paul Phillips"
     ],
     "a": [
      "Freddy Alicea",
      "Scott Rothschild"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Holly Ferguson",
      "Paul Phillips"
     ],
     "a": [
      "Petra Jones",
      "Lenn Yeger"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Gail Hannagan",
      "Frank Rodriguez"
     ],
     "a": [
      "Karen Rosenberg",
      "Steven Truzzolino"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Margo Langer",
      "Ren Mortara"
     ],
     "a": [
      "Bobbi Rentko",
      "Elliot Fishman"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Eleni Leone",
      "Anthony Leone"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Scott Rothschild"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Holly Ferguson",
      "Eleni Leone"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Bobbi Rentko"
     ]
    },
    {
     "t": "female",
     "h": [
      "Sharon Oddy",
      "Margo Langer"
     ],
     "a": [
      "Karen Rosenberg",
      "Petra Jones"
     ]
    },
    {
     "t": "male",
     "h": [
      "Jeffrey Hartford",
      "Frank Rodriguez"
     ],
     "a": [
      "Steven Truzzolino",
      "Lenn Yeger"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Anthony Leone",
      "Ren Mortara"
     ],
     "a": [
      "Freddy Alicea",
      "Elliot Fishman"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Gail Hannagan",
      "Jeffrey Hartford"
     ],
     "a": [
      "Karen Rosenberg",
      "Lenn Yeger"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Sharon Oddy",
      "Anthony Leone"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Steven Truzzolino"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Margo Langer",
      "Paul Phillips"
     ],
     "a": [
      "Bobbi Rentko",
      "Freddy Alicea"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Holly Ferguson",
      "Ren Mortara"
     ],
     "a": [
      "Maureen Bruno",
      "Elliot Fishman"
     ]
    },
    {
     "t": "female",
     "h": [
      "Holly Ferguson",
      "Eleni Leone"
     ],
     "a": [
      "Bobbi Rentko",
      "Petra Jones"
     ]
    },
    {
     "t": "female",
     "h": [
      "Sharon Oddy",
      "Gail Hannagan"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Maureen Bruno"
     ]
    },
    {
     "t": "male",
     "h": [
      "Jeffrey Hartford",
      "Frank Rodriguez"
     ],
     "a": [
      "Steven Truzzolino",
      "Scott Rothschild"
     ],
     "hSub": [
      0,
      1
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Ren Mortara",
      "Paul Phillips"
     ],
     "a": [
      "Lenn Yeger",
      "Freddy Alicea"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Eleni Leone",
      "Anthony Leone"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Lenn Yeger"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Margo Langer",
      "Frank Rodriguez"
     ],
     "a": [
      "Petra Jones",
      "Steven Truzzolino"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Sharon Oddy",
      "Ren Mortara"
     ],
     "a": [
      "Maureen Bruno",
      "Elliot Fishman"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Holly Ferguson",
      "Paul Phillips"
     ],
     "a": [
      "Karen Rosenberg",
      "Scott Rothschild"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Gail Hannagan",
      "Margo Langer"
     ],
     "a": [
      "Jennifer Makfinsky",
      "Karen Rosenberg"
     ]
    },
    {
     "t": "female",
     "h": [
      "Sharon Oddy",
      "Eleni Leone"
     ],
     "a": [
      "Maureen Bruno",
      "Petra Jones"
     ]
    },
    {
     "t": "male",
     "h": [
      "Anthony Leone",
      "Frank Rodriguez"
     ],
     "a": [
      "Steven Truzzolino",
      "Lenn Yeger"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Jeffrey Hartford",
      "Paul Phillips"
     ],
     "a": [
      "Elliot Fishman",
      "Freddy Alicea"
     ]
    }
   ]
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
   "home": "Forward",
   "away": "Dill Dinkers Newport",
   "time": "2026-10-03T15:00:00",
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
   "home": "Flemington Blue",
   "away": "Pickleball Kingdom Hamilton Prime Time",
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
   "home": "Pickleball Palace Blue",
   "away": "Picklr Fair Lawn",
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
   "week": 8,
   "home": "One Love",
   "away": "Premiere Dinkers",
   "time": "2026-10-10T10:00:00",
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
   "home": "Dill Dinkers Hatboro",
   "away": "Players Courtyard",
   "time": "2026-10-10T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Premiere Aces",
   "away": "Pickleball Palace Black",
   "time": "2026-10-10T14:00:00",
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
   "home": "Allstar Pickler",
   "away": "PickleRage Union County",
   "time": "2026-10-10T14:30:00",
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
   "home": "Pickleball Kingdom Hamilton Strikers",
   "away": "Life Time Red Bank",
   "time": "2026-10-11T12:00:00",
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
   "home": "Dill Dinkers Newport",
   "away": "Bounce Philly",
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
   "home": "Dill Dinkers Newport",
   "away": "Dill Dinkers Hatboro",
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
   "home": "Colts Neck Racquet Club",
   "away": "One Love",
   "time": "2026-10-24T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Mercer Bucks",
   "away": "Flemington Blue",
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
   "home": "Allstar Pickler",
   "away": "Pickleball Palace Blue",
   "time": "2026-10-24T14:30:00",
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
   "home": "Pickleball Kingdom Hamilton Strikers",
   "away": "ACE Moorestown",
   "time": "2026-10-24T15:00:00",
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
   "home": "Flemington Green",
   "away": "Pickleball Kingdom Hamilton Prime Time",
   "time": "2026-10-24T15:00:00",
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
   "home": "Bounce Malvern",
   "away": "Dill Dinkers Hatboro",
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
   "home": "PKLD",
   "away": "ACE Moorestown",
   "time": "2026-10-25T15:00:00",
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
   "home": "One Love",
   "away": "Pickleball Kingdom Hamilton Strikers",
   "time": "2026-10-25T18:00:00",
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
   "home": "Bounce Philly",
   "away": "Jersey Devil",
   "time": "2026-10-31T14:00:00",
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
   "home": "Life Time Red Bank",
   "away": "Premiere Dinkers",
   "time": "2026-10-31T14:30:00",
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
   "home": "Forward",
   "away": "Dill Dinkers Hatboro",
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
   "week": 11,
   "home": "ACE Moorestown",
   "away": "Flemington Green",
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
   "home": "PKLD",
   "away": "Colts Neck Racquet Club",
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
   "home": "Pickleball Palace Blue",
   "away": "Allstar Pickler",
   "time": "2026-11-07T14:00:00",
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
   "home": "Monroe",
   "away": "Premiere Dinkers",
   "time": "2026-11-07T15:00:00",
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
   "home": "Premiere Aces",
   "away": "Pickleball Kingdom Hillsborough",
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
   "home": "Flemington Blue",
   "away": "Flemington Green",
   "time": "2026-11-07T15:00:00",
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
   "home": "Dill Dinkers Newport",
   "away": "Jersey Devil",
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
  },
  {
   "result": null,
   "week": 13,
   "home": "Pickleball Palace Black",
   "away": "Premiere Aces",
   "time": "2026-11-14T15:00:00",
   "complete": false
  }
 ],
 "playoffs": [],
 "extraPlayerIds": {
  "Lisa Brower": "04e9aff2-d148-4ff7-8161-a42b0328aa7e",
  "Jayne Brown": "0b04e2c1-d1c3-46d9-ab14-c71c0b99624f",
  "Mike Ussak": "0cb40ae1-3c39-43f7-9017-397eaa7e25f5",
  "Peter Lunarola": "12c54c90-1be8-4575-8714-11076f1a5758",
  "Linda Goss": "14e5edae-ff22-415b-8267-d46a2117ed8d",
  "Emil De Carvalho": "22b206f2-1586-44b8-ba33-b51480e6a23e",
  "Cynthia Wojtkowski": "26b8531a-1f4c-4ffd-86ac-3ffb92eeee55",
  "Jack Peng": "30527f36-bdaa-4a8b-ad77-c9864d5b94a9",
  "Haiying Hu": "30568077-6244-48c9-b1cb-66d788ed8a4a",
  "Jim Shih": "33e2962e-1f89-4317-9859-9191b4376a2c",
  "Ron Dodson": "4f3b5d69-09ea-4e93-b797-c772df1dd2f8",
  "Steve Brossok": "5caeabb2-cef2-4a5f-99dc-5b3636d1d09e",
  "Theresa Crowther": "5d42dbc9-9c0e-4bf4-bf14-8a94414f08aa",
  "Matthew Colasanto": "5d997109-fb91-4c4c-b3f7-0a98b3d6786b",
  "Tim Donovan": "6366cf7a-d40d-430c-b9ed-488085aa68cb",
  "Sheryl Axelrod": "6f9e0a16-373f-4c8e-8e9f-31a4696b1a96",
  "Ira Feinberg": "72cdc96c-9681-4a9d-8336-0fdda1c3a6c8",
  "Mary Delorenzo": "88030e00-b9ac-4970-af9a-5b12904cd78c",
  "Stephen Littenberg": "8aa63b50-7f8f-4393-9ee8-8c5bac4e5e83",
  "Brian Chatburn": "92d013b9-8178-4a31-abed-8ba62f4540cb",
  "Maryann Colella": "9855697f-b3f5-4fc4-a2b1-53e650a89d1c",
  "Indira Wojcik": "a8ff9958-d91e-4e7f-a381-ec83440e8af8",
  "Barbara Brossok": "b1d99b73-dd73-4998-a310-0c6f0ed36b4b",
  "Vincent Rizzo": "ba7888da-e110-406f-b2fd-4c1166dc28ed",
  "Edward Goodman": "c227d83e-6edf-44f6-8517-dd057c42bfc7",
  "Scott Moore": "c25daa27-7d35-45da-82f3-8ff1c62bcce3",
  "Lenore David": "c5c674c6-e1c9-4f4b-96bf-873e84931042",
  "Kayla Gipson": "cac68244-9c27-49bf-9354-1e9282427426",
  "Sharon Pastore": "cdd6b427-286b-4fe5-941c-7bdaf9de2843",
  "Michael Bardello": "de078500-3a0d-4d35-9d54-8ee4fe57eb2a",
  "Lynn Bresnahan": "dfc7b259-63e3-4fbe-bb0f-0eab2f84f4a8",
  "Norm Jones": "e25b79a2-a054-4642-a926-1499e0768832",
  "Jane Wang": "e4623ed7-3392-4f18-a65e-ed2922aed69d",
  "Eileen Killeen": "edaf31af-06d9-4f4c-a073-0876969e3cea"
 },
 "meta": {
  "matchesPlayed": 42,
  "provisionalMatches": 0,
  "weeks": "1-5",
  "totalPlayers": 506,
  "ratingHistoryWeeks": [
   {
    "week": 1,
    "label": "1",
    "seq": 0
   },
   {
    "week": 2,
    "label": "2",
    "seq": 1
   },
   {
    "week": 4,
    "label": "4",
    "seq": 2
   },
   {
    "week": 5,
    "label": "5",
    "seq": 3
   }
  ],
  "divisionSlug": "1e12eb3f",
  "hasPlayoffs": false,
  "typicalDay": "Saturdays",
  "detailFile": "compiled/detail-1e12eb3f.js",
  "clubName": "",
  "divisionName": "3.0 (50+)",
  "leagueType": "travel",
  "seasonSlug": "2026-fall",
  "seasonLabel": "Fall 2026",
  "seasonStatus": "current",
  "podCount": 3,
  "podNames": [
   "Southwest",
   "Northwest",
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
    "Southwest": [
     "Bounce Malvern",
     "Bounce Philly",
     "Dill Dinkers Hatboro",
     "Dill Dinkers Newport",
     "Forward",
     "Jersey Devil",
     "Players Courtyard"
    ],
    "Northwest": [
     "Allstar Pickler",
     "Pickleball Kingdom Hillsborough",
     "Pickleball Palace Black",
     "Pickleball Palace Blue",
     "PickleRage Union County",
     "Picklr Fair Lawn",
     "Premiere Aces"
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
     "Bounce Malvern",
     "Bounce Philly",
     "Dill Dinkers Hatboro",
     "Dill Dinkers Newport",
     "Forward",
     "Jersey Devil",
     "Players Courtyard"
    ],
    "Pod 2": [
     "Allstar Pickler",
     "Pickleball Kingdom Hillsborough",
     "Pickleball Palace Black",
     "Pickleball Palace Blue",
     "PickleRage Union County",
     "Picklr Fair Lawn",
     "Premiere Aces"
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
  DATA.meta.asOf = "2026-09-26T15:25:40.647Z";
  window.DATA = DATA;
  window.CPL_DATASETS = window.CPL_DATASETS || {};
  window.CPL_DATASETS["1e12eb3f"] = DATA;
})();
