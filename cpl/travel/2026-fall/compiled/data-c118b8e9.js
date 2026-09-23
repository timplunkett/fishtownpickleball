(function () {
  const DATA = {
 "players": [
  {
   "name": "Abhishekh Mehra",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 7,
   "losses": 0,
   "pointsWon": 147,
   "totalPointsAgainst": 113,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 34,
   "ppg": 21,
   "leagueRank": 62,
   "rating": 1.1,
   "ratingGames": 7,
   "confidence": 59,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -1.2,
   "playerId": "6e92db16-8465-411e-bc3f-935badc74f47"
  },
  {
   "name": "Chuang Li",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 101,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 25,
   "ppg": 21,
   "leagueRank": 59,
   "rating": 1.9,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.1,
   "playerId": "0534f11f-c60b-49bf-8407-3d2ce0f1b7a0"
  },
  {
   "name": "Harvey Mitchell",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 18,
   "losses": 1,
   "pointsWon": 397,
   "totalPointsAgainst": 259,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 18,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 94.7,
   "diff": 138,
   "ppg": 20.9,
   "leagueRank": 1,
   "rating": 4.6,
   "ratingGames": 19,
   "confidence": 79,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.3,
   "playerId": "c5fa38d0-add2-462c-b3de-5b62dd4d1386"
  },
  {
   "name": "Marc Padre",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 15,
   "losses": 1,
   "pointsWon": 332,
   "totalPointsAgainst": 215,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 15,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 93.8,
   "diff": 117,
   "ppg": 20.8,
   "leagueRank": 2,
   "rating": 4.3,
   "ratingGames": 16,
   "confidence": 74,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -0.3,
   "playerId": "a131a707-f20e-4838-9dcf-7cecb40c2705"
  },
  {
   "name": "Christopher Hendrickson",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 40,
   "wins": 37,
   "losses": 3,
   "pointsWon": 834,
   "totalPointsAgainst": 623,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 37,
   "genderLosses": 3,
   "clutchWins": 8,
   "clutchLosses": 3,
   "winPct": 92.5,
   "diff": 211,
   "ppg": 20.9,
   "leagueRank": 3,
   "rating": 4.1,
   "ratingGames": 40,
   "confidence": 88,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": 0.5,
   "playerId": "7fc1ed1b-4763-49b4-a077-46a92c0df3d6"
  },
  {
   "name": "Jun Zhi Tan",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 21,
   "losses": 2,
   "pointsWon": 471,
   "totalPointsAgainst": 339,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 21,
   "genderLosses": 2,
   "clutchWins": 6,
   "clutchLosses": 0,
   "winPct": 91.3,
   "diff": 132,
   "ppg": 20.5,
   "leagueRank": 5,
   "rating": 3.3,
   "ratingGames": 23,
   "confidence": 81,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.4,
   "playerId": "d0e16b4b-7708-425d-ae9d-e3992c4e7fe2"
  },
  {
   "name": "Graham Heavenrich",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 26,
   "wins": 23,
   "losses": 3,
   "pointsWon": 533,
   "totalPointsAgainst": 426,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 23,
   "genderLosses": 3,
   "clutchWins": 6,
   "clutchLosses": 1,
   "winPct": 88.5,
   "diff": 107,
   "ppg": 20.5,
   "leagueRank": 9,
   "rating": 2.1,
   "ratingGames": 26,
   "confidence": 83,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -0.2,
   "playerId": "27d8a10f-ee9b-467c-bf8c-4872ce63de90"
  },
  {
   "name": "Ashish Kumar",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 15,
   "losses": 2,
   "pointsWon": 353,
   "totalPointsAgainst": 261,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 15,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 88.2,
   "diff": 92,
   "ppg": 20.8,
   "leagueRank": 4,
   "rating": 3.6,
   "ratingGames": 17,
   "confidence": 77,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.3,
   "playerId": "5df02573-21d4-40ea-8b41-f81372a474b3"
  },
  {
   "name": "Jr Burrs",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 22,
   "losses": 3,
   "pointsWon": 514,
   "totalPointsAgainst": 382,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 22,
   "genderLosses": 3,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 88,
   "diff": 132,
   "ppg": 20.6,
   "leagueRank": 8,
   "rating": 2.8,
   "ratingGames": 25,
   "confidence": 83,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.4,
   "playerId": "870112b1-afc3-4ff6-b784-7f872210bf37"
  },
  {
   "name": "Umang Pathak",
   "gender": "Male",
   "team": "Montville",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 21,
   "losses": 3,
   "pointsWon": 494,
   "totalPointsAgainst": 373,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 21,
   "genderLosses": 3,
   "clutchWins": 7,
   "clutchLosses": 1,
   "winPct": 87.5,
   "diff": 121,
   "ppg": 20.6,
   "leagueRank": 6,
   "rating": 4,
   "ratingGames": 24,
   "confidence": 80,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.2,
   "playerId": "30ecad69-b82a-45aa-94c5-f0f7869a0d12"
  },
  {
   "name": "Shalin Rawal",
   "gender": "Male",
   "team": "Montville",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 166,
   "totalPointsAgainst": 103,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 87.5,
   "diff": 63,
   "ppg": 20.8,
   "leagueRank": 39,
   "rating": 4,
   "ratingGames": 8,
   "confidence": 61,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.5,
   "playerId": "08530d21-2dc5-4f71-9d49-9191ec192860"
  },
  {
   "name": "Mark Bernstein",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 166,
   "totalPointsAgainst": 117,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 87.5,
   "diff": 49,
   "ppg": 20.8,
   "leagueRank": 13,
   "rating": 2.3,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -1.3,
   "playerId": "ddd8803a-e678-4f57-b6e8-68f011cd7108"
  },
  {
   "name": "Alexander King",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 166,
   "totalPointsAgainst": 125,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 87.5,
   "diff": 41,
   "ppg": 20.8,
   "leagueRank": 43,
   "rating": 1.6,
   "ratingGames": 8,
   "confidence": 61,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -1.2,
   "playerId": "08f3645c-2c99-4ed0-9b8b-62b9be1a97a8"
  },
  {
   "name": "Todd Mitchell",
   "gender": "Male",
   "team": "Montville",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 166,
   "totalPointsAgainst": 141,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 1,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 87.5,
   "diff": 25,
   "ppg": 20.8,
   "leagueRank": 56,
   "rating": 1.9,
   "ratingGames": 8,
   "confidence": 62,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.3,
   "playerId": "164bf044-d118-4bee-8bd6-d0bad38b79ea"
  },
  {
   "name": "Michael Mazzola",
   "gender": "Male",
   "team": "Premiere",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 162,
   "totalPointsAgainst": 137,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 87.5,
   "diff": 25,
   "ppg": 20.3,
   "leagueRank": 40,
   "rating": 1.2,
   "ratingGames": 8,
   "confidence": 61,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.3,
   "playerId": "2d37c246-0ab5-45ca-bb7b-c869e24452b5"
  },
  {
   "name": "Dennis Yap",
   "gender": "Male",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 13,
   "losses": 2,
   "pointsWon": 308,
   "totalPointsAgainst": 227,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 13,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 86.7,
   "diff": 81,
   "ppg": 20.5,
   "leagueRank": 7,
   "rating": 3.4,
   "ratingGames": 15,
   "confidence": 72,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.2,
   "playerId": "45ea05c6-ef48-4b0a-9f71-a640be038d08"
  },
  {
   "name": "Elliott Albanese",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 143,
   "totalPointsAgainst": 92,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 85.7,
   "diff": 51,
   "ppg": 20.4,
   "leagueRank": 15,
   "rating": 3.4,
   "ratingGames": 7,
   "confidence": 58,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.4,
   "playerId": "6af88387-5e2b-4ea7-b732-22885e4931a8"
  },
  {
   "name": "Daniel Dechristopher",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 144,
   "totalPointsAgainst": 124,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 85.7,
   "diff": 20,
   "ppg": 20.6,
   "leagueRank": 99,
   "rating": 2.5,
   "ratingGames": 7,
   "confidence": 59,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -1.2,
   "playerId": "899ba1d1-37e5-4ad6-8daa-f726376776e5"
  },
  {
   "name": "Jason Feldman",
   "gender": "Male",
   "team": "Premiere",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 24,
   "wins": 20,
   "losses": 4,
   "pointsWon": 485,
   "totalPointsAgainst": 359,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 20,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 83.3,
   "diff": 126,
   "ppg": 20.2,
   "leagueRank": 11,
   "rating": 2.1,
   "ratingGames": 24,
   "confidence": 81,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -1.1,
   "playerId": "5636cdc5-7a65-4202-abbb-5999eee35ab3"
  },
  {
   "name": "Jason Wu",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 10,
   "losses": 2,
   "pointsWon": 243,
   "totalPointsAgainst": 194,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 83.3,
   "diff": 49,
   "ppg": 20.3,
   "leagueRank": 10,
   "rating": 2.4,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.6,
   "playerId": "5e42a5f7-22d1-4613-a829-b62121ddc704"
  },
  {
   "name": "Ali Bhimji",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 10,
   "losses": 2,
   "pointsWon": 246,
   "totalPointsAgainst": 201,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 83.3,
   "diff": 45,
   "ppg": 20.5,
   "leagueRank": 20,
   "rating": -0.4,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -1.8,
   "playerId": "3651f648-493a-4517-8085-a8b9cb086c07"
  },
  {
   "name": "Abdullah Osman",
   "gender": "Male",
   "team": "Montville",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 122,
   "totalPointsAgainst": 99,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 23,
   "ppg": 20.3,
   "leagueRank": 101,
   "rating": 2,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.3,
   "playerId": "c8f3b265-67a8-412c-84f5-aee92a913aac"
  },
  {
   "name": "Bennett Pereira",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 18,
   "losses": 4,
   "pointsWon": 434,
   "totalPointsAgainst": 364,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 18,
   "genderLosses": 4,
   "clutchWins": 5,
   "clutchLosses": 1,
   "winPct": 81.8,
   "diff": 70,
   "ppg": 19.7,
   "leagueRank": 28,
   "rating": 0.8,
   "ratingGames": 22,
   "confidence": 81,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.7,
   "playerId": "6a2ea39b-8b67-4cdf-83f7-c16fb3224655"
  },
  {
   "name": "Matt Enz",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 21,
   "losses": 5,
   "pointsWon": 532,
   "totalPointsAgainst": 436,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 21,
   "genderLosses": 5,
   "clutchWins": 7,
   "clutchLosses": 3,
   "winPct": 80.8,
   "diff": 96,
   "ppg": 20.5,
   "leagueRank": 17,
   "rating": 1.3,
   "ratingGames": 26,
   "confidence": 83,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.6,
   "playerId": "683d1fdd-2fa0-4775-a8dd-0f733aa9f1a3"
  },
  {
   "name": "Kevin Tran",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 16,
   "losses": 4,
   "pointsWon": 412,
   "totalPointsAgainst": 322,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 16,
   "genderLosses": 4,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 80,
   "diff": 90,
   "ppg": 20.6,
   "leagueRank": 12,
   "rating": 2.8,
   "ratingGames": 20,
   "confidence": 79,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.4,
   "playerId": "5a604a32-f8bf-45a8-b6b3-ef2922e0eeaf"
  },
  {
   "name": "Matheus Korndoerfer",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 16,
   "losses": 4,
   "pointsWon": 388,
   "totalPointsAgainst": 330,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 16,
   "genderLosses": 4,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 80,
   "diff": 58,
   "ppg": 19.4,
   "leagueRank": 30,
   "rating": 2.5,
   "ratingGames": 20,
   "confidence": 79,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.1,
   "playerId": "e1f41428-436c-436e-b752-af9cead487be"
  },
  {
   "name": "Jarred Goeckeler",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 12,
   "losses": 3,
   "pointsWon": 297,
   "totalPointsAgainst": 246,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 80,
   "diff": 51,
   "ppg": 19.8,
   "leagueRank": 16,
   "rating": 2.9,
   "ratingGames": 15,
   "confidence": 75,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.1,
   "playerId": "084f4667-3553-4f23-b4c7-62d6c8afb42a"
  },
  {
   "name": "David Brandolph",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 23,
   "losses": 6,
   "pointsWon": 567,
   "totalPointsAgainst": 471,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 23,
   "genderLosses": 6,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 79.3,
   "diff": 96,
   "ppg": 19.6,
   "leagueRank": 24,
   "rating": 2.7,
   "ratingGames": 29,
   "confidence": 85,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.1,
   "playerId": "be10853a-1f2c-4b56-8fd7-902ddc686401"
  },
  {
   "name": "Akash Raju",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 19,
   "losses": 5,
   "pointsWon": 487,
   "totalPointsAgainst": 374,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 19,
   "genderLosses": 5,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 79.2,
   "diff": 113,
   "ppg": 20.3,
   "leagueRank": 14,
   "rating": 1.8,
   "ratingGames": 24,
   "confidence": 81,
   "strengthOfPartners": 2,
   "strengthOfOpponents": -0.3,
   "playerId": "a2fc30f9-b494-4781-900e-1e0b7d531f02"
  },
  {
   "name": "Rajeeth Nadig",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 30,
   "losses": 8,
   "pointsWon": 766,
   "totalPointsAgainst": 639,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 30,
   "genderLosses": 8,
   "clutchWins": 10,
   "clutchLosses": 5,
   "winPct": 78.9,
   "diff": 127,
   "ppg": 20.2,
   "leagueRank": 21,
   "rating": 2.5,
   "ratingGames": 38,
   "confidence": 88,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.3,
   "playerId": "20c15f19-5b27-4c9f-bc75-da3d516a015b"
  },
  {
   "name": "Yong Kim",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 11,
   "losses": 3,
   "pointsWon": 286,
   "totalPointsAgainst": 239,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 11,
   "genderLosses": 3,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 78.6,
   "diff": 47,
   "ppg": 20.4,
   "leagueRank": 23,
   "rating": 0.9,
   "ratingGames": 14,
   "confidence": 72,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.8,
   "playerId": "ca670ae8-0768-49d4-9984-f708cd52786c"
  },
  {
   "name": "Jim Boy Baring",
   "gender": "Male",
   "team": "Premiere",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 11,
   "losses": 3,
   "pointsWon": 278,
   "totalPointsAgainst": 251,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 11,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 78.6,
   "diff": 27,
   "ppg": 19.9,
   "leagueRank": 35,
   "rating": 1.8,
   "ratingGames": 14,
   "confidence": 74,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.7,
   "playerId": "39c75937-8a66-4688-85f8-6c547400e441"
  },
  {
   "name": "Anthony Simonetti",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 23,
   "wins": 18,
   "losses": 5,
   "pointsWon": 464,
   "totalPointsAgainst": 391,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 18,
   "genderLosses": 5,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 78.3,
   "diff": 73,
   "ppg": 20.2,
   "leagueRank": 25,
   "rating": 2.3,
   "ratingGames": 23,
   "confidence": 81,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0.5,
   "playerId": "3a2b64a1-6eb6-41e4-92fe-8da3d95af11b"
  },
  {
   "name": "Sree Harsha Konduru",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 32,
   "wins": 25,
   "losses": 7,
   "pointsWon": 644,
   "totalPointsAgainst": 538,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 25,
   "genderLosses": 7,
   "clutchWins": 8,
   "clutchLosses": 5,
   "winPct": 78.1,
   "diff": 106,
   "ppg": 20.1,
   "leagueRank": 18,
   "rating": 2.8,
   "ratingGames": 32,
   "confidence": 86,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.4,
   "playerId": "439cf2c1-044c-450c-9dcc-4fdeafbb81cd"
  },
  {
   "name": "Brandon Tsang",
   "gender": "Male",
   "team": "Montville",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 21,
   "losses": 6,
   "pointsWon": 546,
   "totalPointsAgainst": 474,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 21,
   "genderLosses": 6,
   "clutchWins": 5,
   "clutchLosses": 3,
   "winPct": 77.8,
   "diff": 72,
   "ppg": 20.2,
   "leagueRank": 29,
   "rating": 1.4,
   "ratingGames": 27,
   "confidence": 83,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.3,
   "playerId": "c80b5964-35f3-46b9-a0fa-9c3c9c673161"
  },
  {
   "name": "Luca Hendrickson",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 40,
   "wins": 31,
   "losses": 9,
   "pointsWon": 807,
   "totalPointsAgainst": 641,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 31,
   "genderLosses": 9,
   "clutchWins": 6,
   "clutchLosses": 5,
   "winPct": 77.5,
   "diff": 166,
   "ppg": 20.2,
   "leagueRank": 19,
   "rating": 2.7,
   "ratingGames": 40,
   "confidence": 88,
   "strengthOfPartners": 2,
   "strengthOfOpponents": 0.5,
   "playerId": "bd14255e-c654-49a4-99a1-26e02c67c7c7"
  },
  {
   "name": "Noah Ludwigsen",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 40,
   "wins": 31,
   "losses": 9,
   "pointsWon": 820,
   "totalPointsAgainst": 675,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 31,
   "genderLosses": 9,
   "clutchWins": 9,
   "clutchLosses": 8,
   "winPct": 77.5,
   "diff": 145,
   "ppg": 20.5,
   "leagueRank": 22,
   "rating": 1.5,
   "ratingGames": 40,
   "confidence": 88,
   "strengthOfPartners": 2.5,
   "strengthOfOpponents": 0.2,
   "playerId": "67f9503a-202f-4982-8e97-9b3383a35aee"
  },
  {
   "name": "John Manuzza",
   "gender": "Male",
   "team": "Montville",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 26,
   "wins": 20,
   "losses": 6,
   "pointsWon": 527,
   "totalPointsAgainst": 446,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 20,
   "genderLosses": 6,
   "clutchWins": 7,
   "clutchLosses": 3,
   "winPct": 76.9,
   "diff": 81,
   "ppg": 20.3,
   "leagueRank": 27,
   "rating": 1.1,
   "ratingGames": 26,
   "confidence": 81,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": -0.1,
   "playerId": "5d3156e6-7886-4184-9d2f-3ec44d72bb3b"
  },
  {
   "name": "Avneesh Agarwal",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 10,
   "losses": 3,
   "pointsWon": 252,
   "totalPointsAgainst": 228,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 3,
   "clutchWins": 6,
   "clutchLosses": 0,
   "winPct": 76.9,
   "diff": 24,
   "ppg": 19.4,
   "leagueRank": 50,
   "rating": 0.2,
   "ratingGames": 13,
   "confidence": 71,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.5,
   "playerId": "f0ac7d85-0e7b-4f28-80fe-3282c3c875ed"
  },
  {
   "name": "Jimmy Ramja",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 26,
   "losses": 8,
   "pointsWon": 687,
   "totalPointsAgainst": 578,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 26,
   "genderLosses": 8,
   "clutchWins": 10,
   "clutchLosses": 5,
   "winPct": 76.5,
   "diff": 109,
   "ppg": 20.2,
   "leagueRank": 31,
   "rating": 1.3,
   "ratingGames": 34,
   "confidence": 86,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.3,
   "playerId": "ade57877-7c11-4a46-88bf-789a50906901"
  },
  {
   "name": "Russell Cripps",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 13,
   "losses": 4,
   "pointsWon": 333,
   "totalPointsAgainst": 261,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 13,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 76.5,
   "diff": 72,
   "ppg": 19.6,
   "leagueRank": 33,
   "rating": 1,
   "ratingGames": 17,
   "confidence": 77,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -0.8,
   "playerId": "43d2bf2c-e732-4ce8-adae-035d989fa792"
  },
  {
   "name": "Kyle Korman",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 22,
   "losses": 7,
   "pointsWon": 576,
   "totalPointsAgainst": 506,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 22,
   "genderLosses": 7,
   "clutchWins": 7,
   "clutchLosses": 4,
   "winPct": 75.9,
   "diff": 70,
   "ppg": 19.9,
   "leagueRank": 38,
   "rating": 1.1,
   "ratingGames": 29,
   "confidence": 85,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.1,
   "playerId": "d61a3828-6dfc-480a-b26a-534b0fe58268"
  },
  {
   "name": "Jordan Demcher",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 24,
   "losses": 8,
   "pointsWon": 641,
   "totalPointsAgainst": 517,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 24,
   "genderLosses": 8,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 75,
   "diff": 124,
   "ppg": 20,
   "leagueRank": 26,
   "rating": 2.8,
   "ratingGames": 32,
   "confidence": 85,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.1,
   "playerId": "6d1beb10-bd5c-456f-95b5-1823752e8c62"
  },
  {
   "name": "Jamison Rowles",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 15,
   "losses": 5,
   "pointsWon": 400,
   "totalPointsAgainst": 324,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 15,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 75,
   "diff": 76,
   "ppg": 20,
   "leagueRank": 32,
   "rating": 1.9,
   "ratingGames": 20,
   "confidence": 79,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0,
   "playerId": "cae7c2db-b4d5-4927-9c44-ff92176b5507"
  },
  {
   "name": "Neil Dedhia",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 18,
   "losses": 6,
   "pointsWon": 484,
   "totalPointsAgainst": 411,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 18,
   "genderLosses": 6,
   "clutchWins": 6,
   "clutchLosses": 4,
   "winPct": 75,
   "diff": 73,
   "ppg": 20.2,
   "leagueRank": 37,
   "rating": 0.5,
   "ratingGames": 24,
   "confidence": 82,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.9,
   "playerId": "20f3e907-41d8-40bb-8cef-cb6fed84a2aa"
  },
  {
   "name": "Bill Olderman",
   "gender": "Male",
   "team": "Montville",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 15,
   "losses": 5,
   "pointsWon": 396,
   "totalPointsAgainst": 348,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 15,
   "genderLosses": 5,
   "clutchWins": 6,
   "clutchLosses": 1,
   "winPct": 75,
   "diff": 48,
   "ppg": 19.8,
   "leagueRank": 36,
   "rating": 1.6,
   "ratingGames": 20,
   "confidence": 79,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.4,
   "playerId": "30c847e2-9b5e-4ad7-851d-9d624f94a11b"
  },
  {
   "name": "Ramam Durba",
   "gender": "Male",
   "team": "Montville",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 9,
   "losses": 3,
   "pointsWon": 242,
   "totalPointsAgainst": 205,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 75,
   "diff": 37,
   "ppg": 20.2,
   "leagueRank": 34,
   "rating": 0.5,
   "ratingGames": 12,
   "confidence": 70,
   "strengthOfPartners": 2.2,
   "strengthOfOpponents": -0.1,
   "playerId": "93280d5d-b0c8-49cd-94fe-0350f3e2dac5"
  },
  {
   "name": "Dan Carpenter",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 9,
   "losses": 3,
   "pointsWon": 234,
   "totalPointsAgainst": 206,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 75,
   "diff": 28,
   "ppg": 19.5,
   "leagueRank": 51,
   "rating": -0.6,
   "ratingGames": 12,
   "confidence": 71,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": -1.9,
   "playerId": "2811dd08-7b50-455b-bc23-46b064a912eb"
  },
  {
   "name": "Chaitanya Sharma",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 6,
   "losses": 2,
   "pointsWon": 159,
   "totalPointsAgainst": 133,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 75,
   "diff": 26,
   "ppg": 19.9,
   "leagueRank": 90,
   "rating": 1.6,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.5,
   "playerId": "d5e18b3e-0836-42c4-9774-810e048ef675"
  },
  {
   "name": "Lincoln Jensen",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 9,
   "losses": 3,
   "pointsWon": 218,
   "totalPointsAgainst": 198,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 75,
   "diff": 20,
   "ppg": 18.2,
   "leagueRank": 70,
   "rating": -0.5,
   "ratingGames": 12,
   "confidence": 70,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.7,
   "playerId": "98842749-0d7d-4b20-b78a-50c79d087699"
  },
  {
   "name": "Peter David",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 6,
   "losses": 2,
   "pointsWon": 156,
   "totalPointsAgainst": 140,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 75,
   "diff": 16,
   "ppg": 19.5,
   "leagueRank": 111,
   "rating": 1.1,
   "ratingGames": 8,
   "confidence": 57,
   "strengthOfPartners": -1,
   "strengthOfOpponents": -0.7,
   "playerId": "c5e40aa9-efbf-4937-b44d-1b8f06693ba4"
  },
  {
   "name": "Cesar Santamaria-Aranda",
   "gender": "Male",
   "team": "Montville",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 23,
   "losses": 9,
   "pointsWon": 636,
   "totalPointsAgainst": 578,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 23,
   "genderLosses": 9,
   "clutchWins": 10,
   "clutchLosses": 4,
   "winPct": 71.9,
   "diff": 58,
   "ppg": 19.9,
   "leagueRank": 49,
   "rating": 0.7,
   "ratingGames": 32,
   "confidence": 84,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.1,
   "playerId": "fbde98cb-9eee-431b-b164-244249c26728"
  },
  {
   "name": "Matthew Schwartz",
   "gender": "Male",
   "team": "Premiere",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 17,
   "losses": 7,
   "pointsWon": 476,
   "totalPointsAgainst": 395,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 17,
   "genderLosses": 7,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 70.8,
   "diff": 81,
   "ppg": 19.8,
   "leagueRank": 48,
   "rating": 0.4,
   "ratingGames": 24,
   "confidence": 81,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": -0.7,
   "playerId": "a432d3e0-17c2-4741-a4b2-7f72b7a81a5f"
  },
  {
   "name": "David Wheeler",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 24,
   "losses": 10,
   "pointsWon": 685,
   "totalPointsAgainst": 592,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 24,
   "genderLosses": 10,
   "clutchWins": 8,
   "clutchLosses": 8,
   "winPct": 70.6,
   "diff": 93,
   "ppg": 20.1,
   "leagueRank": 42,
   "rating": 1.5,
   "ratingGames": 34,
   "confidence": 87,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 0.3,
   "playerId": "d335be77-6a7a-4f96-91c6-0a5cbcc8ea9f"
  },
  {
   "name": "Dan Ruble",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 14,
   "losses": 6,
   "pointsWon": 395,
   "totalPointsAgainst": 338,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 14,
   "genderLosses": 6,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 70,
   "diff": 57,
   "ppg": 19.8,
   "leagueRank": 41,
   "rating": 2.8,
   "ratingGames": 20,
   "confidence": 78,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0,
   "playerId": "d411862a-491a-47dc-93a8-4a12f821afd7"
  },
  {
   "name": "Samuel Kashefska",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 16,
   "losses": 7,
   "pointsWon": 467,
   "totalPointsAgainst": 400,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 16,
   "genderLosses": 7,
   "clutchWins": 6,
   "clutchLosses": 6,
   "winPct": 69.6,
   "diff": 67,
   "ppg": 20.3,
   "leagueRank": 44,
   "rating": 0.8,
   "ratingGames": 23,
   "confidence": 80,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.6,
   "playerId": "e4a31aff-39d6-49b3-95c4-131421e956a0"
  },
  {
   "name": "Harrison Bohrer",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 16,
   "losses": 7,
   "pointsWon": 447,
   "totalPointsAgainst": 402,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 16,
   "genderLosses": 7,
   "clutchWins": 5,
   "clutchLosses": 3,
   "winPct": 69.6,
   "diff": 45,
   "ppg": 19.4,
   "leagueRank": 65,
   "rating": 0.2,
   "ratingGames": 23,
   "confidence": 82,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.4,
   "playerId": "8a4095e6-2a3e-4a88-a6d2-8c1da135ce42"
  },
  {
   "name": "Brandon Dejesus",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 25,
   "losses": 11,
   "pointsWon": 715,
   "totalPointsAgainst": 614,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 25,
   "genderLosses": 11,
   "clutchWins": 8,
   "clutchLosses": 5,
   "winPct": 69.4,
   "diff": 101,
   "ppg": 19.9,
   "leagueRank": 45,
   "rating": 2,
   "ratingGames": 36,
   "confidence": 86,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.6,
   "playerId": "d50feac2-f147-47d2-8930-99b21b2842ba"
  },
  {
   "name": "Jesse Mynahan",
   "gender": "Male",
   "team": "Montville",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 29,
   "wins": 20,
   "losses": 9,
   "pointsWon": 575,
   "totalPointsAgainst": 520,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 20,
   "genderLosses": 9,
   "clutchWins": 9,
   "clutchLosses": 3,
   "winPct": 69,
   "diff": 55,
   "ppg": 19.8,
   "leagueRank": 60,
   "rating": -0.1,
   "ratingGames": 29,
   "confidence": 83,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": -0.3,
   "playerId": "66b5f8fe-1456-4ca5-ba6a-9ee4de2052cb"
  },
  {
   "name": "George Vega Jr",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 11,
   "losses": 5,
   "pointsWon": 318,
   "totalPointsAgainst": 272,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 11,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 68.8,
   "diff": 46,
   "ppg": 19.9,
   "leagueRank": 47,
   "rating": 1.6,
   "ratingGames": 16,
   "confidence": 74,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.3,
   "playerId": "be19bf10-b8a5-4626-8c10-f13ac708231d"
  },
  {
   "name": "Jeff Laniado",
   "gender": "Male",
   "team": "Montville",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 13,
   "losses": 6,
   "pointsWon": 378,
   "totalPointsAgainst": 337,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 13,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 68.4,
   "diff": 41,
   "ppg": 19.9,
   "leagueRank": 53,
   "rating": 0.5,
   "ratingGames": 19,
   "confidence": 77,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": -0.1,
   "playerId": "06d52e99-941a-4ced-9968-f56e6075105a"
  },
  {
   "name": "Yashraj Kurani",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 15,
   "losses": 7,
   "pointsWon": 437,
   "totalPointsAgainst": 361,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 15,
   "genderLosses": 7,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 68.2,
   "diff": 76,
   "ppg": 19.9,
   "leagueRank": 46,
   "rating": 1.7,
   "ratingGames": 22,
   "confidence": 81,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.2,
   "playerId": "63950363-4747-4faf-b89a-eb88f8b9e81d"
  },
  {
   "name": "Ping Peng",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 15,
   "losses": 7,
   "pointsWon": 427,
   "totalPointsAgainst": 369,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 15,
   "genderLosses": 7,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 68.2,
   "diff": 58,
   "ppg": 19.4,
   "leagueRank": 52,
   "rating": 1.1,
   "ratingGames": 22,
   "confidence": 82,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.3,
   "playerId": "7af65ce9-d7e3-4d00-b19b-653e6d2dc8d9"
  },
  {
   "name": "Tim Bruno",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 19,
   "losses": 9,
   "pointsWon": 531,
   "totalPointsAgainst": 482,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 19,
   "genderLosses": 9,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 67.9,
   "diff": 49,
   "ppg": 19,
   "leagueRank": 72,
   "rating": -0.1,
   "ratingGames": 28,
   "confidence": 83,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.5,
   "playerId": "ef5a4f7c-58d1-42fa-81c2-1f9f09a60a0f"
  },
  {
   "name": "Carlos Rincon",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 12,
   "losses": 6,
   "pointsWon": 354,
   "totalPointsAgainst": 302,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 66.7,
   "diff": 52,
   "ppg": 19.7,
   "leagueRank": 57,
   "rating": 0.9,
   "ratingGames": 18,
   "confidence": 76,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.4,
   "playerId": "9886815c-3bf4-42b1-b650-1ec17ff2c167"
  },
  {
   "name": "Leland Weinert",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 12,
   "losses": 6,
   "pointsWon": 355,
   "totalPointsAgainst": 307,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 66.7,
   "diff": 48,
   "ppg": 19.7,
   "leagueRank": 66,
   "rating": -0.5,
   "ratingGames": 18,
   "confidence": 78,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": -0.8,
   "playerId": "3196f425-e79a-4def-b7c3-bc3205976ba3"
  },
  {
   "name": "Lj Dequina",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 10,
   "losses": 5,
   "pointsWon": 291,
   "totalPointsAgainst": 257,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 66.7,
   "diff": 34,
   "ppg": 19.4,
   "leagueRank": 67,
   "rating": 0.8,
   "ratingGames": 15,
   "confidence": 72,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.5,
   "playerId": "e4cb9932-d672-4089-a643-f2d16e3bd98a"
  },
  {
   "name": "Steven Hummel",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 16,
   "losses": 8,
   "pointsWon": 454,
   "totalPointsAgainst": 422,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 16,
   "genderLosses": 8,
   "clutchWins": 6,
   "clutchLosses": 2,
   "winPct": 66.7,
   "diff": 32,
   "ppg": 18.9,
   "leagueRank": 71,
   "rating": 1.6,
   "ratingGames": 24,
   "confidence": 82,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.2,
   "playerId": "c5bf56d5-50a9-4a1f-a6f8-3f3f5af91cca"
  },
  {
   "name": "Edward Fu",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 10,
   "losses": 5,
   "pointsWon": 290,
   "totalPointsAgainst": 268,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 5,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 66.7,
   "diff": 22,
   "ppg": 19.3,
   "leagueRank": 54,
   "rating": 2.6,
   "ratingGames": 15,
   "confidence": 74,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.4,
   "playerId": "b243c9db-ff2c-4db7-bcfd-27f3b0e7b6f1"
  },
  {
   "name": "Samrat Sood",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 116,
   "totalPointsAgainst": 101,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 15,
   "ppg": 19.3,
   "leagueRank": 149,
   "rating": -0.3,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -1.1,
   "playerId": "da802117-fbc3-4b98-9653-9924387691cc"
  },
  {
   "name": "Kyle Kelly",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 113,
   "totalPointsAgainst": 107,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 6,
   "ppg": 18.8,
   "leagueRank": 168,
   "rating": 0.1,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": 0.4,
   "playerId": "e0faca04-4875-4806-b0a3-4830f4dcd52e"
  },
  {
   "name": "Joseph Lynskey",
   "gender": "Male",
   "team": "Premiere",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 21,
   "losses": 11,
   "pointsWon": 630,
   "totalPointsAgainst": 549,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 21,
   "genderLosses": 11,
   "clutchWins": 3,
   "clutchLosses": 6,
   "winPct": 65.6,
   "diff": 81,
   "ppg": 19.7,
   "leagueRank": 61,
   "rating": 1.8,
   "ratingGames": 32,
   "confidence": 85,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0,
   "playerId": "0e8c08b7-0e58-434b-8830-f37779f821dc"
  },
  {
   "name": "Daniel Borgia",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 15,
   "losses": 8,
   "pointsWon": 442,
   "totalPointsAgainst": 375,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 15,
   "genderLosses": 8,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 65.2,
   "diff": 67,
   "ppg": 19.2,
   "leagueRank": 63,
   "rating": 2.2,
   "ratingGames": 23,
   "confidence": 81,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.1,
   "playerId": "ae3cd925-c856-44dd-9cf5-3a2bd343adf2"
  },
  {
   "name": "Jonathan Dong",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 15,
   "losses": 8,
   "pointsWon": 441,
   "totalPointsAgainst": 420,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 15,
   "genderLosses": 8,
   "clutchWins": 6,
   "clutchLosses": 3,
   "winPct": 65.2,
   "diff": 21,
   "ppg": 19.2,
   "leagueRank": 77,
   "rating": 0.3,
   "ratingGames": 23,
   "confidence": 81,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0,
   "playerId": "edbeb52a-85fd-48ff-acc5-a5c8415a731d"
  },
  {
   "name": "Michael Barndt",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 13,
   "losses": 7,
   "pointsWon": 394,
   "totalPointsAgainst": 327,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 13,
   "genderLosses": 7,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 65,
   "diff": 67,
   "ppg": 19.7,
   "leagueRank": 55,
   "rating": 1.4,
   "ratingGames": 20,
   "confidence": 78,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.7,
   "playerId": "50853eee-28e0-4380-b379-35935eb2115a"
  },
  {
   "name": "Jack Barry",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 31,
   "wins": 20,
   "losses": 11,
   "pointsWon": 598,
   "totalPointsAgainst": 559,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 20,
   "genderLosses": 11,
   "clutchWins": 8,
   "clutchLosses": 4,
   "winPct": 64.5,
   "diff": 39,
   "ppg": 19.3,
   "leagueRank": 75,
   "rating": 1.1,
   "ratingGames": 31,
   "confidence": 85,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.2,
   "playerId": "763342e5-4d13-45b7-8630-9d840cb7b8b3"
  },
  {
   "name": "Christopher Uston",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 9,
   "losses": 5,
   "pointsWon": 273,
   "totalPointsAgainst": 227,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 64.3,
   "diff": 46,
   "ppg": 19.5,
   "leagueRank": 58,
   "rating": 0.8,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.8,
   "playerId": "e1f6c6fa-db86-4fed-9faa-dbc2fe29f373"
  },
  {
   "name": "Michael Vincent",
   "gender": "Male",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 9,
   "losses": 5,
   "pointsWon": 278,
   "totalPointsAgainst": 254,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 5,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 64.3,
   "diff": 24,
   "ppg": 19.9,
   "leagueRank": 68,
   "rating": 0.6,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.2,
   "playerId": "7f44421c-476c-4857-99ed-3376b32289ca"
  },
  {
   "name": "Bryan Mccourt",
   "gender": "Male",
   "team": "Home Court",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 22,
   "wins": 14,
   "losses": 8,
   "pointsWon": 419,
   "totalPointsAgainst": 395,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 14,
   "genderLosses": 8,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 63.6,
   "diff": 24,
   "ppg": 19,
   "leagueRank": 82,
   "rating": 0.2,
   "ratingGames": 22,
   "confidence": 80,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0,
   "playerId": "74f9fe34-f8c5-49dd-b504-939d0b4f5aaa"
  },
  {
   "name": "Dan Yang",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 19,
   "losses": 11,
   "pointsWon": 570,
   "totalPointsAgainst": 537,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 19,
   "genderLosses": 11,
   "clutchWins": 7,
   "clutchLosses": 2,
   "winPct": 63.3,
   "diff": 33,
   "ppg": 19,
   "leagueRank": 85,
   "rating": 0.4,
   "ratingGames": 30,
   "confidence": 83,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.1,
   "playerId": "667a80aa-7b06-46b5-a4ae-6989224ab5f9"
  },
  {
   "name": "Pritpal Singh",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 32,
   "wins": 20,
   "losses": 12,
   "pointsWon": 605,
   "totalPointsAgainst": 543,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 20,
   "genderLosses": 12,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 62.5,
   "diff": 62,
   "ppg": 18.9,
   "leagueRank": 69,
   "rating": 1.9,
   "ratingGames": 32,
   "confidence": 86,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.2,
   "playerId": "631b24ae-9bc2-4db3-964b-33f86933021e"
  },
  {
   "name": "Gary White",
   "gender": "Male",
   "team": "Premiere",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 15,
   "losses": 9,
   "pointsWon": 471,
   "totalPointsAgainst": 420,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 15,
   "genderLosses": 9,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 62.5,
   "diff": 51,
   "ppg": 19.6,
   "leagueRank": 73,
   "rating": 1.5,
   "ratingGames": 24,
   "confidence": 82,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.4,
   "playerId": "9a26eab9-96be-45e1-b380-2845a0e8e668"
  },
  {
   "name": "Arnold Poblete",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 15,
   "losses": 9,
   "pointsWon": 481,
   "totalPointsAgainst": 437,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 15,
   "genderLosses": 9,
   "clutchWins": 4,
   "clutchLosses": 6,
   "winPct": 62.5,
   "diff": 44,
   "ppg": 20,
   "leagueRank": 64,
   "rating": 1.1,
   "ratingGames": 24,
   "confidence": 82,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.5,
   "playerId": "c19e964a-d126-4e9f-9ce4-83c315f2f535"
  },
  {
   "name": "Ayon Codner",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 24,
   "wins": 15,
   "losses": 9,
   "pointsWon": 468,
   "totalPointsAgainst": 426,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 15,
   "genderLosses": 9,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 62.5,
   "diff": 42,
   "ppg": 19.5,
   "leagueRank": 79,
   "rating": 0.7,
   "ratingGames": 24,
   "confidence": 82,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.3,
   "playerId": "497b0077-b7ae-4025-ad32-94c9da47ab80"
  },
  {
   "name": "Andrew Neave",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 24,
   "wins": 15,
   "losses": 9,
   "pointsWon": 462,
   "totalPointsAgainst": 437,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 15,
   "genderLosses": 9,
   "clutchWins": 6,
   "clutchLosses": 2,
   "winPct": 62.5,
   "diff": 25,
   "ppg": 19.3,
   "leagueRank": 94,
   "rating": -1.1,
   "ratingGames": 24,
   "confidence": 82,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": -0.2,
   "playerId": "2f7d6c14-4f06-470b-a4ba-f28199e823b0"
  },
  {
   "name": "Rakshit Maddur Gopinath",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 10,
   "losses": 6,
   "pointsWon": 298,
   "totalPointsAgainst": 276,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 62.5,
   "diff": 22,
   "ppg": 18.6,
   "leagueRank": 92,
   "rating": 0.4,
   "ratingGames": 16,
   "confidence": 77,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.1,
   "playerId": "1448a485-6172-48af-96e0-f4876e9c5268"
  },
  {
   "name": "Paul Perumaly",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 13,
   "losses": 8,
   "pointsWon": 406,
   "totalPointsAgainst": 370,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 13,
   "genderLosses": 8,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 61.9,
   "diff": 36,
   "ppg": 19.3,
   "leagueRank": 76,
   "rating": 1,
   "ratingGames": 21,
   "confidence": 80,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.2,
   "playerId": "9d9eff5c-bb8e-47b7-b1e6-7e4c7055bb8b"
  },
  {
   "name": "Kyle Martin",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 13,
   "losses": 8,
   "pointsWon": 397,
   "totalPointsAgainst": 371,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 13,
   "genderLosses": 8,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 61.9,
   "diff": 26,
   "ppg": 18.9,
   "leagueRank": 84,
   "rating": 1.3,
   "ratingGames": 21,
   "confidence": 80,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.4,
   "playerId": "639af9e8-08fd-496d-84d6-6e7859e8c6d3"
  },
  {
   "name": "Joseph Luka",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 8,
   "losses": 5,
   "pointsWon": 255,
   "totalPointsAgainst": 232,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 5,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 61.5,
   "diff": 23,
   "ppg": 19.6,
   "leagueRank": 83,
   "rating": -0.9,
   "ratingGames": 13,
   "confidence": 70,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -1.5,
   "playerId": "482a6a13-3cb9-438b-8494-3f70a4f1cffe"
  },
  {
   "name": "Meet Thakkar",
   "gender": "Male",
   "team": "Montville",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 8,
   "losses": 5,
   "pointsWon": 249,
   "totalPointsAgainst": 226,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 61.5,
   "diff": 23,
   "ppg": 19.2,
   "leagueRank": 74,
   "rating": 2.1,
   "ratingGames": 13,
   "confidence": 70,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.8,
   "playerId": "f68fa078-e500-4427-9d65-338e840f318c"
  },
  {
   "name": "Jeff Axelrad",
   "gender": "Male",
   "team": "Montville",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 8,
   "losses": 5,
   "pointsWon": 249,
   "totalPointsAgainst": 256,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 5,
   "clutchWins": 7,
   "clutchLosses": 1,
   "winPct": 61.5,
   "diff": -7,
   "ppg": 19.2,
   "leagueRank": 104,
   "rating": -0.4,
   "ratingGames": 13,
   "confidence": 72,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.4,
   "playerId": "27009a0b-037c-4934-9f52-d21c928ef173"
  },
  {
   "name": "Christopher Giasi",
   "gender": "Male",
   "team": "Premiere",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 14,
   "losses": 9,
   "pointsWon": 444,
   "totalPointsAgainst": 404,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 14,
   "genderLosses": 9,
   "clutchWins": 2,
   "clutchLosses": 5,
   "winPct": 60.9,
   "diff": 40,
   "ppg": 19.3,
   "leagueRank": 81,
   "rating": 0.9,
   "ratingGames": 23,
   "confidence": 82,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.2,
   "playerId": "d6ca21c0-822e-422f-9721-34120ba90184"
  },
  {
   "name": "Jose Campos",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 14,
   "losses": 9,
   "pointsWon": 431,
   "totalPointsAgainst": 395,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 14,
   "genderLosses": 9,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 60.9,
   "diff": 36,
   "ppg": 18.7,
   "leagueRank": 98,
   "rating": 0.4,
   "ratingGames": 23,
   "confidence": 81,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.7,
   "playerId": "197e3b9a-eded-4a87-8391-13a7c6d18c8f"
  },
  {
   "name": "Corey Chen",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 9,
   "losses": 6,
   "pointsWon": 298,
   "totalPointsAgainst": 257,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 60,
   "diff": 41,
   "ppg": 19.9,
   "leagueRank": 78,
   "rating": 0.5,
   "ratingGames": 15,
   "confidence": 72,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.8,
   "playerId": "b549a93c-acec-4419-9e30-5d8375518d2d"
  },
  {
   "name": "Alessio Muscara",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 18,
   "losses": 12,
   "pointsWon": 574,
   "totalPointsAgainst": 537,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 18,
   "genderLosses": 12,
   "clutchWins": 8,
   "clutchLosses": 4,
   "winPct": 60,
   "diff": 37,
   "ppg": 19.1,
   "leagueRank": 86,
   "rating": 0.9,
   "ratingGames": 30,
   "confidence": 84,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": -0.5,
   "playerId": "4a5131e4-a912-4913-8ff5-9281e53c6974"
  },
  {
   "name": "Andrew Lin",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 96,
   "totalPointsAgainst": 86,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 60,
   "diff": 10,
   "ppg": 19.2,
   "leagueRank": 178,
   "rating": 1.5,
   "ratingGames": 5,
   "confidence": 50,
   "strengthOfPartners": -1,
   "strengthOfOpponents": -0.1,
   "playerId": "3bdfa83e-2025-4441-b347-fade413a4179"
  },
  {
   "name": "Nesip Cengiz",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 9,
   "losses": 6,
   "pointsWon": 273,
   "totalPointsAgainst": 281,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 6,
   "clutchWins": 5,
   "clutchLosses": 0,
   "winPct": 60,
   "diff": -8,
   "ppg": 18.2,
   "leagueRank": 123,
   "rating": -0.9,
   "ratingGames": 15,
   "confidence": 74,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.4,
   "playerId": "c737d3dd-dfe2-4f58-a095-fb40fc601866"
  },
  {
   "name": "Daniel Antonelli",
   "gender": "Male",
   "team": "Premiere",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 19,
   "losses": 13,
   "pointsWon": 607,
   "totalPointsAgainst": 563,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 19,
   "genderLosses": 13,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 59.4,
   "diff": 44,
   "ppg": 19,
   "leagueRank": 95,
   "rating": 1.5,
   "ratingGames": 32,
   "confidence": 86,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.5,
   "playerId": "cd0eb94b-4d32-4ba9-bcdc-3fba205d90f0"
  },
  {
   "name": "Rohit Mankotia",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 22,
   "wins": 13,
   "losses": 9,
   "pointsWon": 434,
   "totalPointsAgainst": 401,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 13,
   "genderLosses": 9,
   "clutchWins": 6,
   "clutchLosses": 5,
   "winPct": 59.1,
   "diff": 33,
   "ppg": 19.7,
   "leagueRank": 96,
   "rating": -0.4,
   "ratingGames": 22,
   "confidence": 81,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.6,
   "playerId": "541e3e2d-76eb-4cd3-9bfe-9f94c0b9cdeb"
  },
  {
   "name": "Jitendra Arora",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 20,
   "losses": 14,
   "pointsWon": 651,
   "totalPointsAgainst": 628,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 20,
   "genderLosses": 14,
   "clutchWins": 7,
   "clutchLosses": 6,
   "winPct": 58.8,
   "diff": 23,
   "ppg": 19.1,
   "leagueRank": 103,
   "rating": -0.3,
   "ratingGames": 34,
   "confidence": 87,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.1,
   "playerId": "a117b66b-f319-4fc0-8ee2-feb3f17767d0"
  },
  {
   "name": "Charles Evans",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 10,
   "losses": 7,
   "pointsWon": 314,
   "totalPointsAgainst": 302,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 7,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 58.8,
   "diff": 12,
   "ppg": 18.5,
   "leagueRank": 118,
   "rating": -1.2,
   "ratingGames": 17,
   "confidence": 76,
   "strengthOfPartners": 2.1,
   "strengthOfOpponents": 0,
   "playerId": "ebc8788f-79c2-4204-a14a-47b6bc480d5d"
  },
  {
   "name": "David Reyes",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 7,
   "losses": 5,
   "pointsWon": 228,
   "totalPointsAgainst": 225,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 5,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 58.3,
   "diff": 3,
   "ppg": 19,
   "leagueRank": 109,
   "rating": -0.4,
   "ratingGames": 12,
   "confidence": 70,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.2,
   "playerId": "adc043ce-7b2d-4ae9-87e0-c927f28c473a"
  },
  {
   "name": "Varun Gurram",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 40,
   "wins": 23,
   "losses": 17,
   "pointsWon": 788,
   "totalPointsAgainst": 727,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 23,
   "genderLosses": 17,
   "clutchWins": 8,
   "clutchLosses": 13,
   "winPct": 57.5,
   "diff": 61,
   "ppg": 19.7,
   "leagueRank": 89,
   "rating": 0.9,
   "ratingGames": 40,
   "confidence": 88,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.4,
   "playerId": "44864b51-f901-4470-a6bd-891495ffd132"
  },
  {
   "name": "Eric Ruiz",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 12,
   "losses": 9,
   "pointsWon": 414,
   "totalPointsAgainst": 374,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 9,
   "clutchWins": 4,
   "clutchLosses": 6,
   "winPct": 57.1,
   "diff": 40,
   "ppg": 19.7,
   "leagueRank": 97,
   "rating": -0.1,
   "ratingGames": 21,
   "confidence": 80,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.7,
   "playerId": "505e9bce-f386-4a4f-9a41-a1d7e0bb0527"
  },
  {
   "name": "Ricky Jutkiewicz",
   "gender": "Male",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 14,
   "wins": 8,
   "losses": 6,
   "pointsWon": 267,
   "totalPointsAgainst": 235,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 57.1,
   "diff": 32,
   "ppg": 19.1,
   "leagueRank": 88,
   "rating": 1.1,
   "ratingGames": 14,
   "confidence": 72,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.1,
   "playerId": "a24bc2af-aca9-45dd-a827-12fb12f7b784"
  },
  {
   "name": "Tyler Bayly",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 8,
   "losses": 6,
   "pointsWon": 256,
   "totalPointsAgainst": 233,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 57.1,
   "diff": 23,
   "ppg": 18.3,
   "leagueRank": 80,
   "rating": 2.6,
   "ratingGames": 14,
   "confidence": 73,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 1,
   "playerId": "642b7fc5-f304-459a-889e-e726dc9edeab"
  },
  {
   "name": "Robert Huntley",
   "gender": "Male",
   "team": "Home Court",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 12,
   "losses": 9,
   "pointsWon": 406,
   "totalPointsAgainst": 383,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 9,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 57.1,
   "diff": 23,
   "ppg": 19.3,
   "leagueRank": 93,
   "rating": 0.4,
   "ratingGames": 21,
   "confidence": 78,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.1,
   "playerId": "b5dec967-9e3a-49b4-b136-597711d099cc"
  },
  {
   "name": "Carlos Idrovo",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 137,
   "totalPointsAgainst": 127,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 57.1,
   "diff": 10,
   "ppg": 19.6,
   "leagueRank": 176,
   "rating": 0.7,
   "ratingGames": 7,
   "confidence": 59,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.1,
   "playerId": "5c6366e8-1fad-44ee-bf38-4ba5d838769d"
  },
  {
   "name": "Jake Cohen",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 138,
   "totalPointsAgainst": 130,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 57.1,
   "diff": 8,
   "ppg": 19.7,
   "leagueRank": 175,
   "rating": 0.6,
   "ratingGames": 7,
   "confidence": 59,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0,
   "playerId": "a6be8670-4787-48dd-83ff-b2157062cb84"
  },
  {
   "name": "Vincent Rigoglioso",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 21,
   "wins": 12,
   "losses": 9,
   "pointsWon": 393,
   "totalPointsAgainst": 397,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 9,
   "clutchWins": 6,
   "clutchLosses": 2,
   "winPct": 57.1,
   "diff": -4,
   "ppg": 18.7,
   "leagueRank": 117,
   "rating": -0.7,
   "ratingGames": 21,
   "confidence": 81,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.1,
   "playerId": "d0c9ae50-0cdc-4f72-9ece-0b996f323f73"
  },
  {
   "name": "Jacob Yoo",
   "gender": "Male",
   "team": "Home Court",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 13,
   "losses": 10,
   "pointsWon": 444,
   "totalPointsAgainst": 418,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 13,
   "genderLosses": 10,
   "clutchWins": 5,
   "clutchLosses": 5,
   "winPct": 56.5,
   "diff": 26,
   "ppg": 19.3,
   "leagueRank": 91,
   "rating": 1.4,
   "ratingGames": 23,
   "confidence": 81,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.6,
   "playerId": "df0934fe-e584-4b4f-a549-a90499016d33"
  },
  {
   "name": "Venu Yengala",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 18,
   "losses": 14,
   "pointsWon": 601,
   "totalPointsAgainst": 604,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 18,
   "genderLosses": 14,
   "clutchWins": 13,
   "clutchLosses": 5,
   "winPct": 56.3,
   "diff": -3,
   "ppg": 18.8,
   "leagueRank": 107,
   "rating": 1.1,
   "ratingGames": 32,
   "confidence": 86,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.7,
   "playerId": "b4cbf5ad-5c2c-46bf-bf50-f50683964b46"
  },
  {
   "name": "Sushil Rijhwani",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 14,
   "losses": 11,
   "pointsWon": 451,
   "totalPointsAgainst": 427,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 14,
   "genderLosses": 11,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 56,
   "diff": 24,
   "ppg": 18,
   "leagueRank": 121,
   "rating": -0.3,
   "ratingGames": 25,
   "confidence": 83,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.3,
   "playerId": "8fea334f-ad12-4c45-b67d-a127ec551f4e"
  },
  {
   "name": "Anil Kumar Jakkaladki",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 15,
   "losses": 12,
   "pointsWon": 519,
   "totalPointsAgainst": 493,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 15,
   "genderLosses": 12,
   "clutchWins": 8,
   "clutchLosses": 5,
   "winPct": 55.6,
   "diff": 26,
   "ppg": 19.2,
   "leagueRank": 102,
   "rating": 0.6,
   "ratingGames": 27,
   "confidence": 84,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.2,
   "playerId": "176df588-c3ff-4b50-a66a-4df99647254b"
  },
  {
   "name": "Jared Rapoport",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 11,
   "losses": 9,
   "pointsWon": 394,
   "totalPointsAgainst": 350,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 11,
   "genderLosses": 9,
   "clutchWins": 1,
   "clutchLosses": 6,
   "winPct": 55,
   "diff": 44,
   "ppg": 19.7,
   "leagueRank": 87,
   "rating": 0.7,
   "ratingGames": 20,
   "confidence": 80,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.6,
   "playerId": "b19f3a31-ce60-4c40-b903-1fd60c95f649"
  },
  {
   "name": "Nicholas Lugo",
   "gender": "Male",
   "team": "Monroe",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 11,
   "losses": 9,
   "pointsWon": 376,
   "totalPointsAgainst": 395,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 11,
   "genderLosses": 9,
   "clutchWins": 8,
   "clutchLosses": 3,
   "winPct": 55,
   "diff": -19,
   "ppg": 18.8,
   "leagueRank": 115,
   "rating": 0.8,
   "ratingGames": 20,
   "confidence": 79,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 1.1,
   "playerId": "8f9be7cc-3ddf-436f-8727-02cbdd0d453f"
  },
  {
   "name": "Kevin Sheehan",
   "gender": "Male",
   "team": "Home Court",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 12,
   "losses": 10,
   "pointsWon": 419,
   "totalPointsAgainst": 401,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 10,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 54.5,
   "diff": 18,
   "ppg": 19,
   "leagueRank": 108,
   "rating": -0.2,
   "ratingGames": 22,
   "confidence": 79,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0,
   "playerId": "115f3958-d110-41f0-a04c-aa2f8e17a54f"
  },
  {
   "name": "Timothy Lynskey",
   "gender": "Male",
   "team": "Premiere",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 13,
   "losses": 11,
   "pointsWon": 453,
   "totalPointsAgainst": 423,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 13,
   "genderLosses": 11,
   "clutchWins": 2,
   "clutchLosses": 5,
   "winPct": 54.2,
   "diff": 30,
   "ppg": 18.9,
   "leagueRank": 106,
   "rating": 0.9,
   "ratingGames": 24,
   "confidence": 82,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.4,
   "playerId": "718c6948-a987-43bb-a1f3-cf7aead75edb"
  },
  {
   "name": "Sandeep Malhotra",
   "gender": "Male",
   "team": "Montville",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 7,
   "losses": 6,
   "pointsWon": 248,
   "totalPointsAgainst": 216,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 53.8,
   "diff": 32,
   "ppg": 19.1,
   "leagueRank": 100,
   "rating": -0.2,
   "ratingGames": 13,
   "confidence": 72,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -0.6,
   "playerId": "c24596e0-9eeb-4195-b1ff-d4ca3e418d84"
  },
  {
   "name": "Tom Kresky",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 26,
   "wins": 14,
   "losses": 12,
   "pointsWon": 491,
   "totalPointsAgainst": 477,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 14,
   "genderLosses": 12,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 53.8,
   "diff": 14,
   "ppg": 18.9,
   "leagueRank": 126,
   "rating": -1.9,
   "ratingGames": 26,
   "confidence": 83,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -1,
   "playerId": "81875a5e-2b65-4152-bace-b4c96517579d"
  },
  {
   "name": "Neale Smith",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 7,
   "losses": 6,
   "pointsWon": 240,
   "totalPointsAgainst": 229,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 53.8,
   "diff": 11,
   "ppg": 18.5,
   "leagueRank": 105,
   "rating": 0.7,
   "ratingGames": 13,
   "confidence": 73,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": -0.4,
   "playerId": "bd958367-8cce-4f24-ba5a-208bac9b42b0"
  },
  {
   "name": "Shreyas Suresh Hassan",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 16,
   "losses": 14,
   "pointsWon": 558,
   "totalPointsAgainst": 553,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 16,
   "genderLosses": 14,
   "clutchWins": 6,
   "clutchLosses": 3,
   "winPct": 53.3,
   "diff": 5,
   "ppg": 18.6,
   "leagueRank": 124,
   "rating": -0.1,
   "ratingGames": 30,
   "confidence": 83,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.3,
   "playerId": "e1d9f3bc-ec4e-4690-810c-a67452049768"
  },
  {
   "name": "Ritesh Patel",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 11,
   "losses": 10,
   "pointsWon": 407,
   "totalPointsAgainst": 385,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 11,
   "genderLosses": 10,
   "clutchWins": 6,
   "clutchLosses": 4,
   "winPct": 52.4,
   "diff": 22,
   "ppg": 19.4,
   "leagueRank": 119,
   "rating": -0.6,
   "ratingGames": 21,
   "confidence": 78,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.5,
   "playerId": "e2f86c8b-755e-42a0-8828-f2965f4fbbe7"
  },
  {
   "name": "Allan Orchard",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 11,
   "losses": 10,
   "pointsWon": 395,
   "totalPointsAgainst": 387,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 11,
   "genderLosses": 10,
   "clutchWins": 2,
   "clutchLosses": 6,
   "winPct": 52.4,
   "diff": 8,
   "ppg": 18.8,
   "leagueRank": 112,
   "rating": 1,
   "ratingGames": 21,
   "confidence": 79,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.4,
   "playerId": "4f34c672-f457-467f-98d8-7d5d6c8add16"
  },
  {
   "name": "Gary Garretson",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 12,
   "losses": 11,
   "pointsWon": 436,
   "totalPointsAgainst": 411,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 11,
   "clutchWins": 2,
   "clutchLosses": 6,
   "winPct": 52.2,
   "diff": 25,
   "ppg": 19,
   "leagueRank": 114,
   "rating": 0.6,
   "ratingGames": 23,
   "confidence": 82,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": -0.7,
   "playerId": "d4126276-6b83-42be-b943-9957df46992c"
  },
  {
   "name": "Cullen Curley",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 10,
   "losses": 10,
   "pointsWon": 391,
   "totalPointsAgainst": 362,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 10,
   "clutchWins": 3,
   "clutchLosses": 6,
   "winPct": 50,
   "diff": 29,
   "ppg": 19.6,
   "leagueRank": 116,
   "rating": -0.4,
   "ratingGames": 20,
   "confidence": 79,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.6,
   "playerId": "8cebf901-66b9-41d0-963d-12dac7334c8f"
  },
  {
   "name": "Ryan Hathaway",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 6,
   "losses": 6,
   "pointsWon": 229,
   "totalPointsAgainst": 206,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 50,
   "diff": 23,
   "ppg": 19.1,
   "leagueRank": 110,
   "rating": 1.5,
   "ratingGames": 12,
   "confidence": 71,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 0.8,
   "playerId": "8b8ebfab-9618-4bba-a52b-6aa7679d3390"
  },
  {
   "name": "Sal Bwint",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 116,
   "totalPointsAgainst": 103,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": 13,
   "ppg": 19.3,
   "leagueRank": 182,
   "rating": 0.2,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.3,
   "playerId": "8db75058-7f84-48bc-9a6c-e15a8fa1a71e"
  },
  {
   "name": "Vincent Demarco",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 116,
   "totalPointsAgainst": 107,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": 9,
   "ppg": 19.3,
   "leagueRank": 193,
   "rating": -0.3,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": 2,
   "strengthOfOpponents": 0,
   "playerId": "5c88bc5a-3350-4271-8305-114385b45a3d"
  },
  {
   "name": "Andrew Ferraro",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 118,
   "totalPointsAgainst": 119,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": -1,
   "ppg": 19.7,
   "leagueRank": 177,
   "rating": 2.1,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 1.3,
   "playerId": "d7bb9db3-39bc-4f9b-9c8c-f1415ef09a27"
  },
  {
   "name": "Ken Weinstein",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 10,
   "losses": 10,
   "pointsWon": 355,
   "totalPointsAgainst": 359,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 10,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": -4,
   "ppg": 17.8,
   "leagueRank": 134,
   "rating": -1,
   "ratingGames": 20,
   "confidence": 79,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.3,
   "playerId": "d07bda42-9d33-4c03-a7f3-a8a468083bdd"
  },
  {
   "name": "Cosme Tapia",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 2,
   "losses": 2,
   "pointsWon": 63,
   "totalPointsAgainst": 74,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 50,
   "diff": -11,
   "ppg": 15.8,
   "leagueRank": 239,
   "rating": -0.5,
   "ratingGames": 4,
   "confidence": 44,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0.1,
   "playerId": "32712f41-d770-4a6c-b536-d596bab73e13"
  },
  {
   "name": "Bill Brandt",
   "gender": "Male",
   "team": "Flemington",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 140,
   "totalPointsAgainst": 157,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": -17,
   "ppg": 17.5,
   "leagueRank": 185,
   "rating": 0.9,
   "ratingGames": 8,
   "confidence": 61,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 1.6,
   "playerId": "dc530014-0e3b-4485-b265-8555bafe6e19"
  },
  {
   "name": "Mathew Yang",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 12,
   "losses": 12,
   "pointsWon": 432,
   "totalPointsAgainst": 456,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 12,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 50,
   "diff": -24,
   "ppg": 18,
   "leagueRank": 136,
   "rating": -0.9,
   "ratingGames": 24,
   "confidence": 81,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.1,
   "playerId": "12ec758b-f05d-40ec-b082-a76f07cbe792"
  },
  {
   "name": "Sean Majury",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 12,
   "losses": 12,
   "pointsWon": 428,
   "totalPointsAgainst": 454,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 12,
   "clutchWins": 6,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": -26,
   "ppg": 17.8,
   "leagueRank": 132,
   "rating": 0.1,
   "ratingGames": 24,
   "confidence": 81,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.5,
   "playerId": "e41c0cda-fb97-4912-8e8a-fa99ff1725d0"
  },
  {
   "name": "Marc Kunesch",
   "gender": "Male",
   "team": "Home Court",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 10,
   "losses": 11,
   "pointsWon": 399,
   "totalPointsAgainst": 397,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 11,
   "clutchWins": 3,
   "clutchLosses": 6,
   "winPct": 47.6,
   "diff": 2,
   "ppg": 19,
   "leagueRank": 125,
   "rating": 0.6,
   "ratingGames": 21,
   "confidence": 79,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.5,
   "playerId": "aeaef27d-01b3-4fb2-91f3-4be8c7602aa3"
  },
  {
   "name": "Andy Ro",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 21,
   "wins": 10,
   "losses": 11,
   "pointsWon": 388,
   "totalPointsAgainst": 394,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 11,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 47.6,
   "diff": -6,
   "ppg": 18.5,
   "leagueRank": 127,
   "rating": 0.4,
   "ratingGames": 21,
   "confidence": 81,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": -0.2,
   "playerId": "f3f6addc-ea42-4e7b-ac54-67bf69cffeeb"
  },
  {
   "name": "Hua Lin",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 17,
   "losses": 19,
   "pointsWon": 654,
   "totalPointsAgainst": 688,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 17,
   "genderLosses": 19,
   "clutchWins": 11,
   "clutchLosses": 5,
   "winPct": 47.2,
   "diff": -34,
   "ppg": 18.2,
   "leagueRank": 128,
   "rating": 1.4,
   "ratingGames": 36,
   "confidence": 87,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.7,
   "playerId": "6b263caa-80f7-40d2-9248-559f91ffe71e"
  },
  {
   "name": "Dan Ladislaw",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 8,
   "losses": 9,
   "pointsWon": 311,
   "totalPointsAgainst": 299,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 9,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 47.1,
   "diff": 12,
   "ppg": 18.3,
   "leagueRank": 133,
   "rating": 0,
   "ratingGames": 17,
   "confidence": 77,
   "strengthOfPartners": 2,
   "strengthOfOpponents": 0.6,
   "playerId": "31b78615-afb3-4856-8cb1-de2b8d43a115"
  },
  {
   "name": "Alex Kustas",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 7,
   "losses": 8,
   "pointsWon": 294,
   "totalPointsAgainst": 263,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 8,
   "clutchWins": 2,
   "clutchLosses": 6,
   "winPct": 46.7,
   "diff": 31,
   "ppg": 19.6,
   "leagueRank": 113,
   "rating": 0.3,
   "ratingGames": 15,
   "confidence": 74,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.8,
   "playerId": "08b7041c-a90b-47ba-802a-5f71e6b98999"
  },
  {
   "name": "Salman Saad",
   "gender": "Male",
   "team": "Monroe",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 6,
   "losses": 7,
   "pointsWon": 250,
   "totalPointsAgainst": 250,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 7,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 46.2,
   "diff": 0,
   "ppg": 19.2,
   "leagueRank": 122,
   "rating": 1.5,
   "ratingGames": 13,
   "confidence": 69,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.6,
   "playerId": "f7c4d103-d246-456d-8fd5-6418c6a0e002"
  },
  {
   "name": "Ziyu Huang",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 31,
   "wins": 14,
   "losses": 17,
   "pointsWon": 576,
   "totalPointsAgainst": 596,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 14,
   "genderLosses": 17,
   "clutchWins": 7,
   "clutchLosses": 3,
   "winPct": 45.2,
   "diff": -20,
   "ppg": 18.6,
   "leagueRank": 130,
   "rating": 0.8,
   "ratingGames": 31,
   "confidence": 86,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.8,
   "playerId": "d06d8b3c-72d6-4ae3-ade8-d7cb7cbd70f7"
  },
  {
   "name": "Ethan Fu",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 9,
   "losses": 11,
   "pointsWon": 373,
   "totalPointsAgainst": 361,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 11,
   "clutchWins": 2,
   "clutchLosses": 6,
   "winPct": 45,
   "diff": 12,
   "ppg": 18.7,
   "leagueRank": 129,
   "rating": -0.5,
   "ratingGames": 20,
   "confidence": 79,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.6,
   "playerId": "a8585e9c-872e-466c-9583-9680e557f757"
  },
  {
   "name": "Kevin Lew",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 17,
   "losses": 21,
   "pointsWon": 671,
   "totalPointsAgainst": 725,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 17,
   "genderLosses": 21,
   "clutchWins": 9,
   "clutchLosses": 9,
   "winPct": 44.7,
   "diff": -54,
   "ppg": 17.7,
   "leagueRank": 140,
   "rating": -0.2,
   "ratingGames": 38,
   "confidence": 87,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.5,
   "playerId": "03886b04-b474-4dda-b7f3-eb4f4954399c"
  },
  {
   "name": "Niman Ahmeti",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 8,
   "losses": 10,
   "pointsWon": 314,
   "totalPointsAgainst": 336,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 10,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 44.4,
   "diff": -22,
   "ppg": 17.4,
   "leagueRank": 153,
   "rating": -1.8,
   "ratingGames": 18,
   "confidence": 77,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.3,
   "playerId": "40681083-620d-4293-829f-91121323135c"
  },
  {
   "name": "Derek Livingston",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 11,
   "losses": 14,
   "pointsWon": 459,
   "totalPointsAgainst": 442,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 11,
   "genderLosses": 14,
   "clutchWins": 2,
   "clutchLosses": 6,
   "winPct": 44,
   "diff": 17,
   "ppg": 18.4,
   "leagueRank": 131,
   "rating": 1.3,
   "ratingGames": 25,
   "confidence": 81,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": -0.4,
   "playerId": "593561e7-e873-4261-85ee-25b6ab524bfa"
  },
  {
   "name": "Eden Ksendzovsky",
   "gender": "Male",
   "team": "Premiere",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 23,
   "wins": 10,
   "losses": 13,
   "pointsWon": 410,
   "totalPointsAgainst": 408,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 13,
   "clutchWins": 0,
   "clutchLosses": 4,
   "winPct": 43.5,
   "diff": 2,
   "ppg": 17.8,
   "leagueRank": 139,
   "rating": -0.4,
   "ratingGames": 23,
   "confidence": 81,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.4,
   "playerId": "75496a80-8064-40ae-ba4b-36c156d70885"
  },
  {
   "name": "Yufan Chen",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 137,
   "totalPointsAgainst": 128,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 42.9,
   "diff": 9,
   "ppg": 19.6,
   "leagueRank": 203,
   "rating": 0.1,
   "ratingGames": 7,
   "confidence": 59,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.1,
   "playerId": "da53bfc3-c4c3-4746-b5b6-4f4af796cf0f"
  },
  {
   "name": "Nacio Marshall",
   "gender": "Male",
   "team": "Premiere",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 6,
   "losses": 8,
   "pointsWon": 253,
   "totalPointsAgainst": 253,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 8,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 42.9,
   "diff": 0,
   "ppg": 18.1,
   "leagueRank": 143,
   "rating": -1.6,
   "ratingGames": 14,
   "confidence": 73,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": -0.3,
   "playerId": "b4af1ed9-5d7e-4212-a206-3c9a97b6958a"
  },
  {
   "name": "Jimmy Lee",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 12,
   "losses": 16,
   "pointsWon": 512,
   "totalPointsAgainst": 531,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 16,
   "clutchWins": 4,
   "clutchLosses": 7,
   "winPct": 42.9,
   "diff": -19,
   "ppg": 18.3,
   "leagueRank": 144,
   "rating": -1.2,
   "ratingGames": 28,
   "confidence": 84,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0,
   "playerId": "f2c53e42-1eac-48dd-9c93-682ec5c1ac98"
  },
  {
   "name": "David Brond",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 116,
   "totalPointsAgainst": 141,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 42.9,
   "diff": -25,
   "ppg": 16.6,
   "leagueRank": 217,
   "rating": -1.2,
   "ratingGames": 7,
   "confidence": 59,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0.1,
   "playerId": "790dc637-f23d-4942-af8a-bfd20b474282"
  },
  {
   "name": "Mike Leach",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 9,
   "losses": 12,
   "pointsWon": 351,
   "totalPointsAgainst": 383,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 12,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 42.9,
   "diff": -32,
   "ppg": 16.7,
   "leagueRank": 167,
   "rating": -1.8,
   "ratingGames": 21,
   "confidence": 81,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": -0.8,
   "playerId": "a63211cf-31ed-448e-8c87-2aaaf8e84a7b"
  },
  {
   "name": "Matthew Carrington",
   "gender": "Male",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 6,
   "losses": 8,
   "pointsWon": 232,
   "totalPointsAgainst": 273,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 8,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 42.9,
   "diff": -41,
   "ppg": 16.6,
   "leagueRank": 164,
   "rating": -0.9,
   "ratingGames": 14,
   "confidence": 72,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 1.1,
   "playerId": "6a2f3777-38b2-4f02-b550-ce38395914d2"
  },
  {
   "name": "Jason Mcmanmon",
   "gender": "Male",
   "team": "Monroe",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 26,
   "wins": 11,
   "losses": 15,
   "pointsWon": 470,
   "totalPointsAgainst": 512,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 11,
   "genderLosses": 15,
   "clutchWins": 6,
   "clutchLosses": 4,
   "winPct": 42.3,
   "diff": -42,
   "ppg": 18.1,
   "leagueRank": 137,
   "rating": 0.4,
   "ratingGames": 26,
   "confidence": 82,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 1.1,
   "playerId": "9adf9c4e-91c0-4483-af44-9ad4a86a81ce"
  },
  {
   "name": "Uzoma Nwankwo",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 31,
   "wins": 13,
   "losses": 18,
   "pointsWon": 552,
   "totalPointsAgainst": 565,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 13,
   "genderLosses": 18,
   "clutchWins": 2,
   "clutchLosses": 6,
   "winPct": 41.9,
   "diff": -13,
   "ppg": 17.8,
   "leagueRank": 135,
   "rating": 1.5,
   "ratingGames": 31,
   "confidence": 86,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 1,
   "playerId": "c6482905-6954-4241-a6c3-ba077c367846"
  },
  {
   "name": "Roberto Marcillo",
   "gender": "Male",
   "team": "Flemington",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 10,
   "losses": 14,
   "pointsWon": 443,
   "totalPointsAgainst": 456,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 14,
   "clutchWins": 4,
   "clutchLosses": 6,
   "winPct": 41.7,
   "diff": -13,
   "ppg": 18.5,
   "leagueRank": 120,
   "rating": 0,
   "ratingGames": 24,
   "confidence": 82,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.1,
   "playerId": "4516a66f-67b3-4981-a16d-036deb8db9bc"
  },
  {
   "name": "Uday Acham",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 5,
   "losses": 7,
   "pointsWon": 213,
   "totalPointsAgainst": 232,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 7,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 41.7,
   "diff": -19,
   "ppg": 17.8,
   "leagueRank": 141,
   "rating": 0.1,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 0.1,
   "playerId": "29646b59-bcf0-4a90-a70d-2824eb639c4c"
  },
  {
   "name": "Craig Butler",
   "gender": "Male",
   "team": "Flemington",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 16,
   "losses": 23,
   "pointsWon": 687,
   "totalPointsAgainst": 713,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 16,
   "genderLosses": 23,
   "clutchWins": 3,
   "clutchLosses": 9,
   "winPct": 41,
   "diff": -26,
   "ppg": 17.6,
   "leagueRank": 138,
   "rating": 1.2,
   "ratingGames": 39,
   "confidence": 87,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 0.2,
   "playerId": "b50c51e8-3ce3-44ec-98e7-6cc11a705f17"
  },
  {
   "name": "Michael Johnson",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 11,
   "losses": 16,
   "pointsWon": 459,
   "totalPointsAgainst": 496,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 11,
   "genderLosses": 16,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 40.7,
   "diff": -37,
   "ppg": 17,
   "leagueRank": 162,
   "rating": -1.2,
   "ratingGames": 27,
   "confidence": 84,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": -0.7,
   "playerId": "4f98756a-9726-48fe-a241-2579f96eee16"
  },
  {
   "name": "Prashanth Koshy",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 4,
   "losses": 6,
   "pointsWon": 187,
   "totalPointsAgainst": 194,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 40,
   "diff": -7,
   "ppg": 18.7,
   "leagueRank": 148,
   "rating": -1.1,
   "ratingGames": 10,
   "confidence": 66,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.5,
   "playerId": "5b619b72-b78a-49ba-872d-c64db6084a67"
  },
  {
   "name": "Dilip Patel",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 12,
   "losses": 18,
   "pointsWon": 535,
   "totalPointsAgainst": 575,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 18,
   "clutchWins": 5,
   "clutchLosses": 7,
   "winPct": 40,
   "diff": -40,
   "ppg": 17.8,
   "leagueRank": 145,
   "rating": 0.3,
   "ratingGames": 30,
   "confidence": 85,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.9,
   "playerId": "7573445f-7dbd-4c2f-867a-ae95ae7ed168"
  },
  {
   "name": "Bruce Nguyen",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 12,
   "losses": 18,
   "pointsWon": 518,
   "totalPointsAgainst": 579,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 18,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 40,
   "diff": -61,
   "ppg": 17.3,
   "leagueRank": 154,
   "rating": -0.5,
   "ratingGames": 30,
   "confidence": 85,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.9,
   "playerId": "33233dc6-b78e-4deb-88d4-2742aacf5eb9"
  },
  {
   "name": "Angelo Disipio",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 11,
   "losses": 17,
   "pointsWon": 504,
   "totalPointsAgainst": 531,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 11,
   "genderLosses": 17,
   "clutchWins": 3,
   "clutchLosses": 7,
   "winPct": 39.3,
   "diff": -27,
   "ppg": 18,
   "leagueRank": 151,
   "rating": -1.2,
   "ratingGames": 28,
   "confidence": 84,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.1,
   "playerId": "79bb5bba-c449-4cdd-948b-fb5f8efdaebb"
  },
  {
   "name": "Michael Dombrowiecki",
   "gender": "Male",
   "team": "Monroe",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 28,
   "wins": 11,
   "losses": 17,
   "pointsWon": 506,
   "totalPointsAgainst": 545,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 11,
   "genderLosses": 17,
   "clutchWins": 5,
   "clutchLosses": 5,
   "winPct": 39.3,
   "diff": -39,
   "ppg": 18.1,
   "leagueRank": 142,
   "rating": 0.2,
   "ratingGames": 28,
   "confidence": 84,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 1,
   "playerId": "3ac34ef1-17a5-4ab6-8d17-be4bd5a0a040"
  },
  {
   "name": "Harsh Upadhyaya",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 9,
   "losses": 14,
   "pointsWon": 405,
   "totalPointsAgainst": 430,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 14,
   "clutchWins": 5,
   "clutchLosses": 5,
   "winPct": 39.1,
   "diff": -25,
   "ppg": 17.6,
   "leagueRank": 152,
   "rating": -0.6,
   "ratingGames": 23,
   "confidence": 82,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.3,
   "playerId": "3b9648e1-481c-4007-9932-d8df648f7bab"
  },
  {
   "name": "Larry Minsky",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 9,
   "losses": 14,
   "pointsWon": 388,
   "totalPointsAgainst": 442,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 14,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 39.1,
   "diff": -54,
   "ppg": 16.9,
   "leagueRank": 172,
   "rating": -1.5,
   "ratingGames": 23,
   "confidence": 81,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0,
   "playerId": "41f7a2a8-8fcd-4282-b501-cd5b83ec7440"
  },
  {
   "name": "Keith Richard",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 9,
   "losses": 14,
   "pointsWon": 389,
   "totalPointsAgainst": 453,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 14,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 39.1,
   "diff": -64,
   "ppg": 16.9,
   "leagueRank": 165,
   "rating": 0.5,
   "ratingGames": 23,
   "confidence": 82,
   "strengthOfPartners": -2.3,
   "strengthOfOpponents": 0.5,
   "playerId": "cb2183c7-8c7b-4ebf-93da-66aeabe13d3b"
  },
  {
   "name": "Aidan Fredericks",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 7,
   "losses": 11,
   "pointsWon": 327,
   "totalPointsAgainst": 353,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 11,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 38.9,
   "diff": -26,
   "ppg": 18.2,
   "leagueRank": 160,
   "rating": -1.2,
   "ratingGames": 18,
   "confidence": 78,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.3,
   "playerId": "a6d48fe9-1e3d-470b-8a0c-6061231f34ce"
  },
  {
   "name": "John Fallone",
   "gender": "Male",
   "team": "Flemington",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 31,
   "wins": 12,
   "losses": 19,
   "pointsWon": 515,
   "totalPointsAgainst": 592,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 19,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 38.7,
   "diff": -77,
   "ppg": 16.6,
   "leagueRank": 169,
   "rating": -0.6,
   "ratingGames": 31,
   "confidence": 84,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.4,
   "playerId": "5127c0b9-aaf8-49c5-a94f-bf92e7ae60f8"
  },
  {
   "name": "Pat Wilson",
   "gender": "Male",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 5,
   "losses": 8,
   "pointsWon": 233,
   "totalPointsAgainst": 250,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 8,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 38.5,
   "diff": -17,
   "ppg": 17.9,
   "leagueRank": 146,
   "rating": 0.5,
   "ratingGames": 13,
   "confidence": 71,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 1.2,
   "playerId": "2e77eb09-81b2-4cc7-8ed1-4cbf034705f6"
  },
  {
   "name": "Mark Waters",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 11,
   "losses": 18,
   "pointsWon": 507,
   "totalPointsAgainst": 567,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 11,
   "genderLosses": 18,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 37.9,
   "diff": -60,
   "ppg": 17.5,
   "leagueRank": 157,
   "rating": -0.9,
   "ratingGames": 29,
   "confidence": 85,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.4,
   "playerId": "1baee0ad-faae-4c61-894a-a347710fdfea"
  },
  {
   "name": "Yash Mehta",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 148,
   "totalPointsAgainst": 149,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 37.5,
   "diff": -1,
   "ppg": 18.5,
   "leagueRank": 192,
   "rating": 1.2,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 1,
   "playerId": "adc25ed0-4bc3-47da-9509-4caeb8f90185"
  },
  {
   "name": "Shyler Smith",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 140,
   "totalPointsAgainst": 150,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 37.5,
   "diff": -10,
   "ppg": 17.5,
   "leagueRank": 199,
   "rating": 2.3,
   "ratingGames": 8,
   "confidence": 62,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 2.1,
   "playerId": "aabb2c71-bc56-468e-91b9-d431d6f2d26b"
  },
  {
   "name": "Brian “Bubba” Falco",
   "gender": "Male",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 147,
   "totalPointsAgainst": 160,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 37.5,
   "diff": -13,
   "ppg": 18.4,
   "leagueRank": 194,
   "rating": -0.5,
   "ratingGames": 8,
   "confidence": 62,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.9,
   "playerId": "f53cbe34-439d-4183-8c32-7264fbca23fa"
  },
  {
   "name": "Jonathan Carter",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 12,
   "losses": 20,
   "pointsWon": 575,
   "totalPointsAgainst": 611,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 20,
   "clutchWins": 3,
   "clutchLosses": 8,
   "winPct": 37.5,
   "diff": -36,
   "ppg": 18,
   "leagueRank": 163,
   "rating": -1.6,
   "ratingGames": 32,
   "confidence": 85,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.2,
   "playerId": "33fe293d-5913-41af-8f89-4a431ed92ab7"
  },
  {
   "name": "J-P Lautenschlager",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 6,
   "losses": 10,
   "pointsWon": 268,
   "totalPointsAgainst": 308,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 10,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 37.5,
   "diff": -40,
   "ppg": 16.8,
   "leagueRank": 180,
   "rating": -2.4,
   "ratingGames": 16,
   "confidence": 75,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.3,
   "playerId": "5c3659f9-08d3-4745-832b-f7dd3f8c5ae5"
  },
  {
   "name": "Franklin Yiu",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 12,
   "losses": 20,
   "pointsWon": 564,
   "totalPointsAgainst": 619,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 20,
   "clutchWins": 5,
   "clutchLosses": 6,
   "winPct": 37.5,
   "diff": -55,
   "ppg": 17.6,
   "leagueRank": 155,
   "rating": -0.7,
   "ratingGames": 32,
   "confidence": 84,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.3,
   "playerId": "020affa0-bff4-49cb-94c0-a9eb9ba09b77"
  },
  {
   "name": "David Shapiro",
   "gender": "Male",
   "team": "Flemington",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 11,
   "losses": 19,
   "pointsWon": 517,
   "totalPointsAgainst": 564,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 11,
   "genderLosses": 19,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 36.7,
   "diff": -47,
   "ppg": 17.2,
   "leagueRank": 158,
   "rating": -0.3,
   "ratingGames": 30,
   "confidence": 84,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.3,
   "playerId": "c39cd158-0c19-4819-8653-18084e6ce982"
  },
  {
   "name": "Thomas Moran",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 6,
   "losses": 11,
   "pointsWon": 298,
   "totalPointsAgainst": 335,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 11,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 35.3,
   "diff": -37,
   "ppg": 17.5,
   "leagueRank": 189,
   "rating": -3,
   "ratingGames": 17,
   "confidence": 76,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.4,
   "playerId": "9571d7b5-fc34-4c77-a51f-c99b286e4304"
  },
  {
   "name": "Jimmy Shapiro",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 7,
   "losses": 13,
   "pointsWon": 367,
   "totalPointsAgainst": 387,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 13,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 35,
   "diff": -20,
   "ppg": 18.4,
   "leagueRank": 147,
   "rating": 0.2,
   "ratingGames": 20,
   "confidence": 80,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.2,
   "playerId": "7b57c36d-a6eb-470e-b132-26d1f2a47b74"
  },
  {
   "name": "Daniel Hadley",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 7,
   "losses": 13,
   "pointsWon": 348,
   "totalPointsAgainst": 373,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 13,
   "clutchWins": 1,
   "clutchLosses": 6,
   "winPct": 35,
   "diff": -25,
   "ppg": 17.4,
   "leagueRank": 170,
   "rating": -0.5,
   "ratingGames": 20,
   "confidence": 77,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": -0.5,
   "playerId": "23adcd68-130d-4176-b367-d3cd31260d21"
  },
  {
   "name": "David Bogatyrev",
   "gender": "Male",
   "team": "Monroe",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 10,
   "losses": 19,
   "pointsWon": 525,
   "totalPointsAgainst": 574,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 19,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 34.5,
   "diff": -49,
   "ppg": 18.1,
   "leagueRank": 150,
   "rating": 1.6,
   "ratingGames": 29,
   "confidence": 83,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 1.5,
   "playerId": "e77a59ee-8653-4d89-903c-75109d3f17c8"
  },
  {
   "name": "Brandon Fulford",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 32,
   "wins": 11,
   "losses": 21,
   "pointsWon": 573,
   "totalPointsAgainst": 633,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 11,
   "genderLosses": 21,
   "clutchWins": 8,
   "clutchLosses": 9,
   "winPct": 34.4,
   "diff": -60,
   "ppg": 17.9,
   "leagueRank": 161,
   "rating": -0.3,
   "ratingGames": 32,
   "confidence": 84,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.5,
   "playerId": "906383cd-e781-48bc-9004-0fc5427c7e62"
  },
  {
   "name": "Rob Telles",
   "gender": "Male",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 116,
   "totalPointsAgainst": 122,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 33.3,
   "diff": -6,
   "ppg": 19.3,
   "leagueRank": 221,
   "rating": 0.2,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.9,
   "playerId": "d27652b4-447c-4563-b89f-19a8e1e79568"
  },
  {
   "name": "Christopher Monzon",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 5,
   "losses": 10,
   "pointsWon": 263,
   "totalPointsAgainst": 287,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 10,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 33.3,
   "diff": -24,
   "ppg": 17.5,
   "leagueRank": 187,
   "rating": -3.2,
   "ratingGames": 15,
   "confidence": 74,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.7,
   "playerId": "b205e6a7-d62d-42bf-b2d5-e7e5d0c109ec"
  },
  {
   "name": "Steve Roth",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 92,
   "totalPointsAgainst": 120,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 33.3,
   "diff": -28,
   "ppg": 15.3,
   "leagueRank": 245,
   "rating": 0.1,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 1.9,
   "playerId": "183983b9-993f-471e-ac3d-224dcee6d80f"
  },
  {
   "name": "Mario Contreras",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 8,
   "losses": 16,
   "pointsWon": 418,
   "totalPointsAgainst": 469,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 16,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 33.3,
   "diff": -51,
   "ppg": 17.4,
   "leagueRank": 186,
   "rating": -1.8,
   "ratingGames": 24,
   "confidence": 81,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": -0.4,
   "playerId": "323d96c3-4160-410b-96a5-87263e825f62"
  },
  {
   "name": "Sean Diamond",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 10,
   "losses": 20,
   "pointsWon": 510,
   "totalPointsAgainst": 566,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 20,
   "clutchWins": 1,
   "clutchLosses": 7,
   "winPct": 33.3,
   "diff": -56,
   "ppg": 17,
   "leagueRank": 181,
   "rating": -1.2,
   "ratingGames": 30,
   "confidence": 84,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": -0.1,
   "playerId": "635ba257-e1ed-4db3-8303-5f241388437e"
  },
  {
   "name": "Erik Reilly",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 37,
   "wins": 12,
   "losses": 25,
   "pointsWon": 674,
   "totalPointsAgainst": 728,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 25,
   "clutchWins": 7,
   "clutchLosses": 13,
   "winPct": 32.4,
   "diff": -54,
   "ppg": 18.2,
   "leagueRank": 156,
   "rating": 0.8,
   "ratingGames": 37,
   "confidence": 86,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.7,
   "playerId": "479815f2-1e14-4b96-9423-d99c15b2fe2b"
  },
  {
   "name": "Jacob Rosengarten",
   "gender": "Male",
   "team": "Monroe",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 9,
   "losses": 19,
   "pointsWon": 498,
   "totalPointsAgainst": 547,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 19,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 32.1,
   "diff": -49,
   "ppg": 17.8,
   "leagueRank": 159,
   "rating": 1.6,
   "ratingGames": 28,
   "confidence": 83,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 1.6,
   "playerId": "b2f8ea85-7734-47a2-8ce7-bd968b3a51bc"
  },
  {
   "name": "Wensheng Yue",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 9,
   "losses": 19,
   "pointsWon": 484,
   "totalPointsAgainst": 549,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 19,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 32.1,
   "diff": -65,
   "ppg": 17.3,
   "leagueRank": 174,
   "rating": -1.4,
   "ratingGames": 28,
   "confidence": 85,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.3,
   "playerId": "d11f5bc0-8b23-488d-86fb-13eebe9e2257"
  },
  {
   "name": "Stephen Fredericksen",
   "gender": "Male",
   "team": "Monroe",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 7,
   "losses": 15,
   "pointsWon": 392,
   "totalPointsAgainst": 435,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 15,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 31.8,
   "diff": -43,
   "ppg": 17.8,
   "leagueRank": 166,
   "rating": -1.1,
   "ratingGames": 22,
   "confidence": 80,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.7,
   "playerId": "622cb64f-dd0c-4bff-8c19-81d287977c53"
  },
  {
   "name": "Eric Berlinger",
   "gender": "Male",
   "team": "Flemington",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 12,
   "losses": 26,
   "pointsWon": 666,
   "totalPointsAgainst": 743,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 26,
   "clutchWins": 5,
   "clutchLosses": 8,
   "winPct": 31.6,
   "diff": -77,
   "ppg": 17.5,
   "leagueRank": 171,
   "rating": -0.1,
   "ratingGames": 38,
   "confidence": 87,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.3,
   "playerId": "2fda2042-6613-42f8-ad93-c3cff9a58f3e"
  },
  {
   "name": "Sujoy Gayen",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 5,
   "losses": 11,
   "pointsWon": 270,
   "totalPointsAgainst": 308,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 11,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 31.3,
   "diff": -38,
   "ppg": 16.9,
   "leagueRank": 179,
   "rating": -0.8,
   "ratingGames": 16,
   "confidence": 75,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.3,
   "playerId": "159ef92f-0a83-4619-b65d-3ba60a2ba992"
  },
  {
   "name": "Matt Inzerillo",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 9,
   "losses": 20,
   "pointsWon": 492,
   "totalPointsAgainst": 561,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 20,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 31,
   "diff": -69,
   "ppg": 17,
   "leagueRank": 183,
   "rating": -1.4,
   "ratingGames": 29,
   "confidence": 85,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0,
   "playerId": "51ceabf9-8258-4835-9835-c7d915220185"
  },
  {
   "name": "Michael Gilbert",
   "gender": "Male",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 4,
   "losses": 9,
   "pointsWon": 217,
   "totalPointsAgainst": 259,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 9,
   "clutchWins": 0,
   "clutchLosses": 4,
   "winPct": 30.8,
   "diff": -42,
   "ppg": 16.7,
   "leagueRank": 188,
   "rating": 0,
   "ratingGames": 13,
   "confidence": 71,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 1.7,
   "playerId": "5acb8305-77d8-4089-88b6-9fbfa9400f6a"
  },
  {
   "name": "Vinay Mutt",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 6,
   "losses": 14,
   "pointsWon": 320,
   "totalPointsAgainst": 387,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 14,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 30,
   "diff": -67,
   "ppg": 16,
   "leagueRank": 202,
   "rating": -1.9,
   "ratingGames": 20,
   "confidence": 79,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.3,
   "playerId": "7caafc32-1aed-4fb7-b145-baf82cbbe2d2"
  },
  {
   "name": "Dhruv Dobariya",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 9,
   "losses": 21,
   "pointsWon": 505,
   "totalPointsAgainst": 601,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 21,
   "clutchWins": 6,
   "clutchLosses": 5,
   "winPct": 30,
   "diff": -96,
   "ppg": 16.8,
   "leagueRank": 195,
   "rating": -1.5,
   "ratingGames": 30,
   "confidence": 85,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.8,
   "playerId": "ac44fd3c-0c87-47aa-bf26-4333b632f524"
  },
  {
   "name": "Yongzhe Tian",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 125,
   "totalPointsAgainst": 134,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 28.6,
   "diff": -9,
   "ppg": 17.9,
   "leagueRank": 232,
   "rating": 1.1,
   "ratingGames": 7,
   "confidence": 59,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 1.5,
   "playerId": "e1a924b8-3b3a-4780-8348-08a730ba61f2"
  },
  {
   "name": "Andrew Mclean",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 6,
   "losses": 15,
   "pointsWon": 369,
   "totalPointsAgainst": 413,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 15,
   "clutchWins": 2,
   "clutchLosses": 5,
   "winPct": 28.6,
   "diff": -44,
   "ppg": 17.6,
   "leagueRank": 191,
   "rating": -1.4,
   "ratingGames": 21,
   "confidence": 81,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": -0.2,
   "playerId": "2d439cdc-347e-4beb-9975-1b31bc46f2df"
  },
  {
   "name": "Jimmy Duong",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 6,
   "losses": 15,
   "pointsWon": 352,
   "totalPointsAgainst": 416,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 15,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 28.6,
   "diff": -64,
   "ppg": 16.8,
   "leagueRank": 209,
   "rating": -4.5,
   "ratingGames": 21,
   "confidence": 80,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -1.3,
   "playerId": "06a3741d-10e5-462b-ba95-aa997d4eb8ea"
  },
  {
   "name": "Frederick Cox",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 33,
   "wins": 9,
   "losses": 24,
   "pointsWon": 582,
   "totalPointsAgainst": 650,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 24,
   "clutchWins": 4,
   "clutchLosses": 8,
   "winPct": 27.3,
   "diff": -68,
   "ppg": 17.6,
   "leagueRank": 196,
   "rating": -4.1,
   "ratingGames": 33,
   "confidence": 86,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.9,
   "playerId": "e8aee14f-dbc4-4e5c-be4a-4f948e2e13fc"
  },
  {
   "name": "David Fiscella",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 4,
   "losses": 11,
   "pointsWon": 256,
   "totalPointsAgainst": 302,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 11,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 26.7,
   "diff": -46,
   "ppg": 17.1,
   "leagueRank": 184,
   "rating": 1.1,
   "ratingGames": 15,
   "confidence": 74,
   "strengthOfPartners": -2.4,
   "strengthOfOpponents": 1,
   "playerId": "fa546fa2-45f5-4ad6-91ec-b6f6044ad8b0"
  },
  {
   "name": "Ben Cortes",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 9,
   "losses": 25,
   "pointsWon": 555,
   "totalPointsAgainst": 687,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 25,
   "clutchWins": 7,
   "clutchLosses": 4,
   "winPct": 26.5,
   "diff": -132,
   "ppg": 16.3,
   "leagueRank": 201,
   "rating": -1.6,
   "ratingGames": 34,
   "confidence": 86,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.6,
   "playerId": "4d89659f-a86c-4416-93f2-5c868fe0e984"
  },
  {
   "name": "Franklin Lupianez",
   "gender": "Male",
   "team": "Flemington",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 10,
   "losses": 28,
   "pointsWon": 634,
   "totalPointsAgainst": 755,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 28,
   "clutchWins": 3,
   "clutchLosses": 7,
   "winPct": 26.3,
   "diff": -121,
   "ppg": 16.7,
   "leagueRank": 198,
   "rating": -1.9,
   "ratingGames": 38,
   "confidence": 87,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0,
   "playerId": "17caef8b-84d4-4052-9695-7c74190925a1"
  },
  {
   "name": "Ren Macalalag",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 27,
   "wins": 7,
   "losses": 20,
   "pointsWon": 473,
   "totalPointsAgainst": 517,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 20,
   "clutchWins": 2,
   "clutchLosses": 8,
   "winPct": 25.9,
   "diff": -44,
   "ppg": 17.5,
   "leagueRank": 190,
   "rating": 0,
   "ratingGames": 27,
   "confidence": 82,
   "strengthOfPartners": -2.2,
   "strengthOfOpponents": -0.3,
   "playerId": "24db47b3-dedc-418d-9210-3b5fea1952da"
  },
  {
   "name": "Xavier Vazquez",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 1,
   "losses": 3,
   "pointsWon": 65,
   "totalPointsAgainst": 81,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 25,
   "diff": -16,
   "ppg": 16.3,
   "leagueRank": 248,
   "rating": 1.4,
   "ratingGames": 4,
   "confidence": 44,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": 2.5,
   "playerId": "24bfad4a-0221-485a-8550-c0bdd971484a"
  },
  {
   "name": "Ed Villaverde",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 144,
   "totalPointsAgainst": 163,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 25,
   "diff": -19,
   "ppg": 18,
   "leagueRank": 206,
   "rating": -2.9,
   "ratingGames": 8,
   "confidence": 59,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.4,
   "playerId": "3edc72f0-c23d-4ad5-9842-cde023cd7514"
  },
  {
   "name": "Jonathan Lugtu",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 138,
   "totalPointsAgainst": 164,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 25,
   "diff": -26,
   "ppg": 17.3,
   "leagueRank": 231,
   "rating": -0.1,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 1.2,
   "playerId": "f46a315a-aae5-44b5-ab45-6949706396fd"
  },
  {
   "name": "Aleks Mirkovic",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 6,
   "losses": 18,
   "pointsWon": 376,
   "totalPointsAgainst": 482,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 18,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 25,
   "diff": -106,
   "ppg": 15.7,
   "leagueRank": 212,
   "rating": -1.2,
   "ratingGames": 24,
   "confidence": 82,
   "strengthOfPartners": -2,
   "strengthOfOpponents": 0.5,
   "playerId": "f006963a-4e8e-433d-8c9a-e278ac32ea9c"
  },
  {
   "name": "Josh Fink",
   "gender": "Male",
   "team": "Flemington",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 31,
   "wins": 7,
   "losses": 24,
   "pointsWon": 534,
   "totalPointsAgainst": 622,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 24,
   "clutchWins": 2,
   "clutchLosses": 9,
   "winPct": 22.6,
   "diff": -88,
   "ppg": 17.2,
   "leagueRank": 197,
   "rating": -0.6,
   "ratingGames": 31,
   "confidence": 85,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 0.4,
   "playerId": "6a70d918-9cd3-47d0-a40a-901a406452b6"
  },
  {
   "name": "Chris Machuzak",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 6,
   "losses": 21,
   "pointsWon": 443,
   "totalPointsAgainst": 527,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 21,
   "clutchWins": 2,
   "clutchLosses": 6,
   "winPct": 22.2,
   "diff": -84,
   "ppg": 16.4,
   "leagueRank": 208,
   "rating": -1.5,
   "ratingGames": 27,
   "confidence": 84,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.4,
   "playerId": "dba4c9d8-6ffb-49ae-99d1-79c341a68de7"
  },
  {
   "name": "Kurt Skalamera",
   "gender": "Male",
   "team": "Monroe",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 5,
   "losses": 18,
   "pointsWon": 381,
   "totalPointsAgainst": 467,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 18,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 21.7,
   "diff": -86,
   "ppg": 16.6,
   "leagueRank": 207,
   "rating": -1.6,
   "ratingGames": 23,
   "confidence": 81,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 1,
   "playerId": "04000200-8214-42ff-9a0d-2189ffaccd42"
  },
  {
   "name": "David Tabacco",
   "gender": "Male",
   "team": "Flemington",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 5,
   "losses": 18,
   "pointsWon": 363,
   "totalPointsAgainst": 472,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 18,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 21.7,
   "diff": -109,
   "ppg": 15.8,
   "leagueRank": 216,
   "rating": -1.6,
   "ratingGames": 23,
   "confidence": 79,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 0.7,
   "playerId": "717d97f0-4f08-476f-9c53-7595605bc0b0"
  },
  {
   "name": "Jaiveer Narwal",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 3,
   "losses": 11,
   "pointsWon": 236,
   "totalPointsAgainst": 276,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 11,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 21.4,
   "diff": -40,
   "ppg": 16.9,
   "leagueRank": 200,
   "rating": -0.8,
   "ratingGames": 14,
   "confidence": 74,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.8,
   "playerId": "96042156-2ff1-44d0-9b96-8448964b4981"
  },
  {
   "name": "Leon Li",
   "gender": "Male",
   "team": "Monroe",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 3,
   "losses": 11,
   "pointsWon": 233,
   "totalPointsAgainst": 283,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 11,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 21.4,
   "diff": -50,
   "ppg": 16.6,
   "leagueRank": 205,
   "rating": -1.2,
   "ratingGames": 14,
   "confidence": 73,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.7,
   "playerId": "528de93e-9cf4-480d-a9ba-5b20f6f23f87"
  },
  {
   "name": "Andress Mims",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 6,
   "losses": 22,
   "pointsWon": 470,
   "totalPointsAgainst": 567,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 22,
   "clutchWins": 3,
   "clutchLosses": 8,
   "winPct": 21.4,
   "diff": -97,
   "ppg": 16.8,
   "leagueRank": 211,
   "rating": -2.8,
   "ratingGames": 28,
   "confidence": 84,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0,
   "playerId": "e9878f35-8a92-4887-834e-d8a76881ae41"
  },
  {
   "name": "Shawn Gold",
   "gender": "Male",
   "team": "Monroe",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 4,
   "losses": 15,
   "pointsWon": 355,
   "totalPointsAgainst": 386,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 15,
   "clutchWins": 2,
   "clutchLosses": 9,
   "winPct": 21.1,
   "diff": -31,
   "ppg": 18.7,
   "leagueRank": 173,
   "rating": 0.2,
   "ratingGames": 19,
   "confidence": 78,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 1.1,
   "playerId": "e2d70cc7-b655-43d5-a059-063bfe722001"
  },
  {
   "name": "Stephane Sabathier",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 81,
   "totalPointsAgainst": 100,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 20,
   "diff": -19,
   "ppg": 16.2,
   "leagueRank": 253,
   "rating": -1.5,
   "ratingGames": 5,
   "confidence": 44,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.7,
   "playerId": "c45a1c4a-3aec-4920-ac7b-22142f13030f"
  },
  {
   "name": "Uttam Purohit",
   "gender": "Male",
   "team": "Monroe",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 2,
   "losses": 8,
   "pointsWon": 178,
   "totalPointsAgainst": 204,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 8,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 20,
   "diff": -26,
   "ppg": 17.8,
   "leagueRank": 220,
   "rating": -1.9,
   "ratingGames": 10,
   "confidence": 64,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.4,
   "playerId": "5bec8637-0324-4af8-8084-3779e0f43521"
  },
  {
   "name": "Elias Eid",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 3,
   "losses": 12,
   "pointsWon": 242,
   "totalPointsAgainst": 305,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 12,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 20,
   "diff": -63,
   "ppg": 16.1,
   "leagueRank": 213,
   "rating": -1,
   "ratingGames": 15,
   "confidence": 73,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.9,
   "playerId": "77f18b1c-db78-4d0e-b81d-6d1efde8bb08"
  },
  {
   "name": "Saad Talat Siddiqui",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 3,
   "losses": 12,
   "pointsWon": 233,
   "totalPointsAgainst": 297,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 12,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 20,
   "diff": -64,
   "ppg": 15.5,
   "leagueRank": 218,
   "rating": -1.8,
   "ratingGames": 15,
   "confidence": 73,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 0.3,
   "playerId": "ebfeb773-e8cd-4b6a-aafd-ee2772540168"
  },
  {
   "name": "Rick Wickenheisser",
   "gender": "Male",
   "team": "Flemington",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 3,
   "losses": 12,
   "pointsWon": 232,
   "totalPointsAgainst": 299,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 12,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 20,
   "diff": -67,
   "ppg": 15.5,
   "leagueRank": 223,
   "rating": -3.3,
   "ratingGames": 15,
   "confidence": 75,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": -0.2,
   "playerId": "741048e8-2c91-4466-bb1c-1a624d1dabd9"
  },
  {
   "name": "Steppan Konoplev",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 5,
   "losses": 20,
   "pointsWon": 421,
   "totalPointsAgainst": 513,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 20,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 20,
   "diff": -92,
   "ppg": 16.8,
   "leagueRank": 210,
   "rating": -1.7,
   "ratingGames": 25,
   "confidence": 83,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": 0,
   "playerId": "8f076d51-25ba-4203-97f8-12194ba5b001"
  },
  {
   "name": "Andy Knight",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 4,
   "losses": 16,
   "pointsWon": 306,
   "totalPointsAgainst": 400,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 16,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 20,
   "diff": -94,
   "ppg": 15.3,
   "leagueRank": 227,
   "rating": -3.7,
   "ratingGames": 20,
   "confidence": 79,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.2,
   "playerId": "fd8fa2a4-7f58-41d2-897e-e7df225c4ad0"
  },
  {
   "name": "Aaron Chan",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 5,
   "losses": 20,
   "pointsWon": 409,
   "totalPointsAgainst": 504,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 20,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 20,
   "diff": -95,
   "ppg": 16.4,
   "leagueRank": 215,
   "rating": -3,
   "ratingGames": 25,
   "confidence": 83,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.4,
   "playerId": "57666861-23d0-4809-9556-b646579f2fd6"
  },
  {
   "name": "Rick Olafsson",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 4,
   "losses": 17,
   "pointsWon": 338,
   "totalPointsAgainst": 423,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 17,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 19,
   "diff": -85,
   "ppg": 16.1,
   "leagueRank": 214,
   "rating": -1.2,
   "ratingGames": 21,
   "confidence": 81,
   "strengthOfPartners": -2,
   "strengthOfOpponents": 0.3,
   "playerId": "088a0cec-3f4c-4100-afd4-33d4462dc7e3"
  },
  {
   "name": "Siva Indupuru",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 5,
   "losses": 22,
   "pointsWon": 457,
   "totalPointsAgainst": 539,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 22,
   "clutchWins": 1,
   "clutchLosses": 9,
   "winPct": 18.5,
   "diff": -82,
   "ppg": 16.9,
   "leagueRank": 204,
   "rating": -0.3,
   "ratingGames": 27,
   "confidence": 83,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.8,
   "playerId": "5f264528-efdb-4bda-88ed-8003f98c1c9b"
  },
  {
   "name": "Xilin Zhao",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 84,
   "totalPointsAgainst": 124,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 16.7,
   "diff": -40,
   "ppg": 14,
   "leagueRank": 254,
   "rating": -2.2,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0.7,
   "playerId": "bfecc55a-a909-44da-8292-6b59b37a6043"
  },
  {
   "name": "Steve Hong",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 2,
   "losses": 10,
   "pointsWon": 198,
   "totalPointsAgainst": 240,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 10,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 16.7,
   "diff": -42,
   "ppg": 16.5,
   "leagueRank": 219,
   "rating": -2.2,
   "ratingGames": 12,
   "confidence": 70,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.8,
   "playerId": "a861a127-253c-4cb2-a1d6-93a37558b93a"
  },
  {
   "name": "Malay Kaity",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 2,
   "losses": 10,
   "pointsWon": 179,
   "totalPointsAgainst": 245,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 10,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 16.7,
   "diff": -66,
   "ppg": 14.9,
   "leagueRank": 225,
   "rating": -2.4,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.7,
   "playerId": "199ae8e1-22b4-4d8d-a41d-29cb984a3b33"
  },
  {
   "name": "Francis Thai",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 2,
   "losses": 11,
   "pointsWon": 205,
   "totalPointsAgainst": 269,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 11,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 15.4,
   "diff": -64,
   "ppg": 15.8,
   "leagueRank": 236,
   "rating": -4.3,
   "ratingGames": 13,
   "confidence": 72,
   "strengthOfPartners": -1,
   "strengthOfOpponents": -0.8,
   "playerId": "a78758b7-fe50-4865-b059-83a9d177e857"
  },
  {
   "name": "Ian Diamond",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 2,
   "losses": 11,
   "pointsWon": 200,
   "totalPointsAgainst": 269,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 11,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 15.4,
   "diff": -69,
   "ppg": 15.4,
   "leagueRank": 229,
   "rating": -3.6,
   "ratingGames": 13,
   "confidence": 72,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": -0.4,
   "playerId": "f5a96445-7d1c-459b-8642-12a5d11554db"
  },
  {
   "name": "Didier Jean-Baptiste",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 118,
   "totalPointsAgainst": 138,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 14.3,
   "diff": -20,
   "ppg": 16.9,
   "leagueRank": 249,
   "rating": -1.9,
   "ratingGames": 7,
   "confidence": 60,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.4,
   "playerId": "3ea74039-550d-4a76-a514-e024aea9fd85"
  },
  {
   "name": "Wen Jin",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 116,
   "totalPointsAgainst": 145,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 14.3,
   "diff": -29,
   "ppg": 16.6,
   "leagueRank": 250,
   "rating": -0.7,
   "ratingGames": 7,
   "confidence": 58,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 1.2,
   "playerId": "dd2384fe-4bb2-4085-a917-6e7989beb8a7"
  },
  {
   "name": "Gianni Roman",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 3,
   "losses": 19,
   "pointsWon": 325,
   "totalPointsAgainst": 456,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 19,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 13.6,
   "diff": -131,
   "ppg": 14.8,
   "leagueRank": 235,
   "rating": -1.8,
   "ratingGames": 22,
   "confidence": 79,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 1.4,
   "playerId": "22294f41-611f-4e8f-962e-377e43209945"
  },
  {
   "name": "Josh Rito",
   "gender": "Male",
   "team": "Flemington",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 4,
   "losses": 26,
   "pointsWon": 466,
   "totalPointsAgainst": 617,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 26,
   "clutchWins": 1,
   "clutchLosses": 7,
   "winPct": 13.3,
   "diff": -151,
   "ppg": 15.5,
   "leagueRank": 230,
   "rating": -4,
   "ratingGames": 30,
   "confidence": 84,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.1,
   "playerId": "a4c54a14-35b4-4b90-aabd-3d81ad719f4d"
  },
  {
   "name": "Jesse Pettit",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 3,
   "losses": 20,
   "pointsWon": 356,
   "totalPointsAgainst": 475,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 20,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 13,
   "diff": -119,
   "ppg": 15.5,
   "leagueRank": 228,
   "rating": -1.5,
   "ratingGames": 23,
   "confidence": 82,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": 0.8,
   "playerId": "d6e30691-3b20-465b-8fa8-560017c20c15"
  },
  {
   "name": "John Sallo",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 129,
   "totalPointsAgainst": 164,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 12.5,
   "diff": -35,
   "ppg": 16.1,
   "leagueRank": 247,
   "rating": -1.5,
   "ratingGames": 8,
   "confidence": 61,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0.4,
   "playerId": "b379a353-c35e-4a6e-8ea4-ea21ebcdafa0"
  },
  {
   "name": "Bren Calpin",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 122,
   "totalPointsAgainst": 166,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 12.5,
   "diff": -44,
   "ppg": 15.3,
   "leagueRank": 246,
   "rating": -3.5,
   "ratingGames": 8,
   "confidence": 61,
   "strengthOfPartners": -2,
   "strengthOfOpponents": -0.9,
   "playerId": "7f4b7644-6117-4eee-b3d8-a4955507923e"
  },
  {
   "name": "John Pineda",
   "gender": "Male",
   "team": "Flemington",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 2,
   "losses": 14,
   "pointsWon": 260,
   "totalPointsAgainst": 317,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 14,
   "clutchWins": 0,
   "clutchLosses": 6,
   "winPct": 12.5,
   "diff": -57,
   "ppg": 16.3,
   "leagueRank": 222,
   "rating": -2.2,
   "ratingGames": 16,
   "confidence": 75,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0,
   "playerId": "099e3831-88c1-4907-9869-f193db58b64b"
  },
  {
   "name": "Joel Steinbrunner",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 2,
   "losses": 14,
   "pointsWon": 241,
   "totalPointsAgainst": 330,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 14,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 12.5,
   "diff": -89,
   "ppg": 15.1,
   "leagueRank": 233,
   "rating": -2.7,
   "ratingGames": 16,
   "confidence": 75,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0.4,
   "playerId": "d6628146-5ecf-46fa-9ec2-4385171098fd"
  },
  {
   "name": "Xan Hong",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 24,
   "wins": 3,
   "losses": 21,
   "pointsWon": 324,
   "totalPointsAgainst": 495,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 21,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 12.5,
   "diff": -171,
   "ppg": 13.5,
   "leagueRank": 243,
   "rating": -5,
   "ratingGames": 24,
   "confidence": 83,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": -0.2,
   "playerId": "e83b9a6f-83c6-4b66-a470-a0cae4f462df"
  },
  {
   "name": "Bill Violette",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 2,
   "losses": 18,
   "pointsWon": 327,
   "totalPointsAgainst": 416,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 18,
   "clutchWins": 2,
   "clutchLosses": 6,
   "winPct": 10,
   "diff": -89,
   "ppg": 16.4,
   "leagueRank": 226,
   "rating": -2,
   "ratingGames": 20,
   "confidence": 80,
   "strengthOfPartners": -2,
   "strengthOfOpponents": 0,
   "playerId": "63eeb91c-2c9c-4dbe-8662-58fbb1d95092"
  },
  {
   "name": "John Coyle",
   "gender": "Male",
   "team": "Monroe",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 1,
   "losses": 10,
   "pointsWon": 179,
   "totalPointsAgainst": 225,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 10,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 9.1,
   "diff": -46,
   "ppg": 16.3,
   "leagueRank": 241,
   "rating": -1.6,
   "ratingGames": 11,
   "confidence": 69,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.7,
   "playerId": "54d78d2c-c0d7-42c0-aef4-567311f2e51e"
  },
  {
   "name": "Buyi Zhang",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 1,
   "losses": 11,
   "pointsWon": 175,
   "totalPointsAgainst": 250,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 11,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 8.3,
   "diff": -75,
   "ppg": 14.6,
   "leagueRank": 240,
   "rating": -3,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0.3,
   "playerId": "abd55992-7237-4a92-817d-3d39388369c9"
  },
  {
   "name": "Paul Chantler",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 1,
   "losses": 12,
   "pointsWon": 197,
   "totalPointsAgainst": 271,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 12,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 7.7,
   "diff": -74,
   "ppg": 15.2,
   "leagueRank": 237,
   "rating": -3,
   "ratingGames": 13,
   "confidence": 72,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": 0,
   "playerId": "b1f8fd31-d4ed-4824-9ae6-174e5e2f21c2"
  },
  {
   "name": "Ian Kohn",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 2,
   "losses": 24,
   "pointsWon": 367,
   "totalPointsAgainst": 542,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 24,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 7.7,
   "diff": -175,
   "ppg": 14.1,
   "leagueRank": 242,
   "rating": -3.4,
   "ratingGames": 26,
   "confidence": 83,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0.6,
   "playerId": "ef0e9803-0038-4cb9-ad16-a55c54f00339"
  },
  {
   "name": "Big G",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 2,
   "losses": 32,
   "pointsWon": 508,
   "totalPointsAgainst": 708,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 32,
   "clutchWins": 1,
   "clutchLosses": 7,
   "winPct": 5.9,
   "diff": -200,
   "ppg": 14.9,
   "leagueRank": 238,
   "rating": -2.9,
   "ratingGames": 34,
   "confidence": 86,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 0.5,
   "playerId": "f75516ca-4ed9-4ca2-84d3-a6af16b16a27"
  },
  {
   "name": "Michael Vollmer",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 1,
   "losses": 18,
   "pointsWon": 310,
   "totalPointsAgainst": 397,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 18,
   "clutchWins": 1,
   "clutchLosses": 8,
   "winPct": 5.3,
   "diff": -87,
   "ppg": 16.3,
   "leagueRank": 234,
   "rating": -1.8,
   "ratingGames": 19,
   "confidence": 78,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.7,
   "playerId": "148387a8-f20a-44df-981d-0d9d2e7bf443"
  },
  {
   "name": "Peter Chen",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 1,
   "losses": 18,
   "pointsWon": 266,
   "totalPointsAgainst": 394,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 18,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 5.3,
   "diff": -128,
   "ppg": 14,
   "leagueRank": 244,
   "rating": -2.5,
   "ratingGames": 19,
   "confidence": 79,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 1.1,
   "playerId": "8767c73e-fa5a-4e68-9ded-850b7ab50693"
  },
  {
   "name": "Mike Konzelman",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
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
   "leagueRank": 272,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "8f9053fa-7f27-4269-9b57-24af31d53222"
  },
  {
   "name": "Harlos Vizcarrondo",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
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
   "leagueRank": 283,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "9e348e82-13d0-4911-8efa-e5a2f7afded1"
  },
  {
   "name": "Kyle Wilson",
   "gender": "Male",
   "team": "Home Court",
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
   "leagueRank": 284,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "b4df3298-b7ff-41ed-8453-9aa5e64a26de"
  },
  {
   "name": "Ryan Lehrfeld",
   "gender": "Male",
   "team": "APC Garden State",
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
   "leagueRank": 273,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "cfc63dad-7d45-4fa6-810d-5d3bbc7619ca"
  },
  {
   "name": "Richard Demeuse",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
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
   "leagueRank": 268,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "d88f1d1e-be4e-449e-b9b2-c468753e1dd3"
  },
  {
   "name": "Madhu Raghunathan",
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
   "leagueRank": 279,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "f008538f-037a-4850-ad1d-fd9108382a81"
  },
  {
   "name": "Brian Criscuolo",
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
   "leagueRank": 266,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "f59307d0-0495-421c-8cee-28c2e2b56bcf"
  },
  {
   "name": "Nicholas Brow",
   "gender": "Male",
   "team": "Bounce Tempest",
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
   "leagueRank": 262,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "fdbf0c0b-a961-47e4-abbe-5a56ad7a7bec"
  },
  {
   "name": "Dion Brown",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
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
   "leagueRank": 263,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "4c6d1b49-9a66-4e43-8a49-cf56c2901a3b"
  },
  {
   "name": "Luke Simon",
   "gender": "Male",
   "team": "Montville",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 96,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 0,
   "diff": -30,
   "ppg": 16,
   "leagueRank": 256,
   "rating": -3.4,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.4,
   "playerId": "0069c456-f712-435e-abd7-461018159661"
  },
  {
   "name": "Nitin Chawke",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 0,
   "losses": 4,
   "pointsWon": 54,
   "totalPointsAgainst": 84,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -30,
   "ppg": 13.5,
   "leagueRank": 260,
   "rating": -2.6,
   "ratingGames": 4,
   "confidence": 45,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.9,
   "playerId": "e1859a0e-b6a3-451b-a14e-f4d978fc520d"
  },
  {
   "name": "Tom Hadler",
   "gender": "Male",
   "team": "Flemington",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 74,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -31,
   "ppg": 14.8,
   "leagueRank": 259,
   "rating": -2.3,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": -2.3,
   "strengthOfOpponents": -0.1,
   "playerId": "c5d07eb6-d276-4503-a077-c092e89c2ae8"
  },
  {
   "name": "Cory Mintz",
   "gender": "Male",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 78,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -48,
   "ppg": 13,
   "leagueRank": 258,
   "rating": -2.4,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 1.5,
   "playerId": "33feb337-f2ab-4e6d-819b-9535ec743685"
  },
  {
   "name": "Tayon Hart",
   "gender": "Male",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 0,
   "losses": 7,
   "pointsWon": 97,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -50,
   "ppg": 13.9,
   "leagueRank": 257,
   "rating": -2.7,
   "ratingGames": 7,
   "confidence": 57,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.8,
   "playerId": "545f9968-fc0a-420b-ba42-db16c6e1f884"
  },
  {
   "name": "Steve Lerner",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 9,
   "wins": 0,
   "losses": 9,
   "pointsWon": 127,
   "totalPointsAgainst": 189,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 9,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 0,
   "diff": -62,
   "ppg": 14.1,
   "leagueRank": 251,
   "rating": -4.7,
   "ratingGames": 9,
   "confidence": 64,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": -0.5,
   "playerId": "d634d992-c9d8-4e31-acb7-45b1161eee19"
  },
  {
   "name": "Bing Zhu",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 0,
   "losses": 8,
   "pointsWon": 105,
   "totalPointsAgainst": 168,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 8,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -63,
   "ppg": 13.1,
   "leagueRank": 255,
   "rating": -3.3,
   "ratingGames": 8,
   "confidence": 60,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": 0.6,
   "playerId": "e6f1ad88-f91d-41ca-9771-833b1f38eff3"
  },
  {
   "name": "Pedro Delgado",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 0,
   "losses": 11,
   "pointsWon": 135,
   "totalPointsAgainst": 231,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 11,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -96,
   "ppg": 12.3,
   "leagueRank": 252,
   "rating": -4.2,
   "ratingGames": 11,
   "confidence": 70,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": 0.6,
   "playerId": "3e2aac0c-7c01-4c71-a288-900b54059019"
  }
 ],
 "teams": [
  {
   "name": "Bounce Malvern",
   "w": 5,
   "l": 0,
   "pf": 3192,
   "pa": 2687,
   "gw": 117,
   "gl": 43,
   "diff": 505,
   "gameDiff": 74,
   "power": 1.3,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": "South",
   "podName": "East / South",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     117,
     43
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Pickleball HQ",
   "w": 5,
   "l": 0,
   "pf": 3257,
   "pa": 2834,
   "gw": 115,
   "gl": 45,
   "diff": 423,
   "gameDiff": 70,
   "power": 1.3,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": "East",
   "podName": "East / South",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     115,
     45
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Montville",
   "w": 4,
   "l": 0,
   "pf": 2613,
   "pa": 2292,
   "gw": 92,
   "gl": 36,
   "diff": 321,
   "gameDiff": 56,
   "power": 1.1,
   "powerRank": 1,
   "pod": 2,
   "reportedPod": "North",
   "podName": "North",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     92,
     36
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Pickleball Kingdom Hillsborough",
   "w": 3,
   "l": 0,
   "pf": 1927,
   "pa": 1636,
   "gw": 64,
   "gl": 32,
   "diff": 291,
   "gameDiff": 32,
   "power": 1,
   "powerRank": 2,
   "pod": 2,
   "reportedPod": "North",
   "podName": "North",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     64,
     32
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Pickle House",
   "w": 4,
   "l": 1,
   "pf": 3204,
   "pa": 2892,
   "gw": 107,
   "gl": 53,
   "diff": 312,
   "gameDiff": 54,
   "power": 0.8,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": "East",
   "podName": "East / South",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     107,
     53
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Premiere",
   "w": 3,
   "l": 1,
   "pf": 2513,
   "pa": 2269,
   "gw": 79,
   "gl": 49,
   "diff": 244,
   "gameDiff": 30,
   "power": 1,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": "East",
   "podName": "East / South",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     79,
     49
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Bounce Tempest",
   "w": 3,
   "l": 1,
   "pf": 2509,
   "pa": 2323,
   "gw": 77,
   "gl": 51,
   "diff": 186,
   "gameDiff": 26,
   "power": 0.5,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": "South",
   "podName": "East / South",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     77,
     51
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Pickleball Kingdom Lehigh Valley",
   "w": 2,
   "l": 1,
   "pf": 1974,
   "pa": 1740,
   "gw": 62,
   "gl": 34,
   "diff": 234,
   "gameDiff": 28,
   "power": 0.6,
   "powerRank": 3,
   "pod": 2,
   "reportedPod": "North",
   "podName": "North",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     62,
     34
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Picklr Newtown",
   "w": 3,
   "l": 2,
   "pf": 2966,
   "pa": 3046,
   "gw": 76,
   "gl": 84,
   "diff": -80,
   "gameDiff": -8,
   "power": -0.6,
   "powerRank": 5,
   "pod": 1,
   "reportedPod": "South",
   "podName": "East / South",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     76,
     84
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "PickleRage Union County",
   "w": 2,
   "l": 2,
   "pf": 2332,
   "pa": 2441,
   "gw": 58,
   "gl": 70,
   "diff": -109,
   "gameDiff": -12,
   "power": -0.5,
   "powerRank": 5,
   "pod": 2,
   "reportedPod": "North",
   "podName": "North",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     58,
     70
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Jersey Devil",
   "w": 2,
   "l": 3,
   "pf": 3025,
   "pa": 2956,
   "gw": 82,
   "gl": 78,
   "diff": 69,
   "gameDiff": 4,
   "power": -0.3,
   "powerRank": 4,
   "pod": 1,
   "reportedPod": "South",
   "podName": "East / South",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     82,
     78
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Home Court",
   "w": 1,
   "l": 2,
   "pf": 1884,
   "pa": 1819,
   "gw": 53,
   "gl": 43,
   "diff": 65,
   "gameDiff": 10,
   "power": 0.6,
   "powerRank": 4,
   "pod": 2,
   "reportedPod": "North",
   "podName": "North",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     53,
     43
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Pickleball Kingdom Hamilton",
   "w": 1,
   "l": 3,
   "pf": 2376,
   "pa": 2459,
   "gw": 57,
   "gl": 71,
   "diff": -83,
   "gameDiff": -14,
   "power": 0.2,
   "powerRank": 4,
   "pod": 1,
   "reportedPod": "East",
   "podName": "East / South",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     57,
     71
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "APC Garden State",
   "w": 1,
   "l": 3,
   "pf": 2296,
   "pa": 2466,
   "gw": 47,
   "gl": 81,
   "diff": -170,
   "gameDiff": -34,
   "power": -0.2,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": "South",
   "podName": "East / South",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     47,
     81
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Allstar Pickler",
   "w": 1,
   "l": 3,
   "pf": 2221,
   "pa": 2590,
   "gw": 40,
   "gl": 88,
   "diff": -369,
   "gameDiff": -48,
   "power": -0.8,
   "powerRank": 6,
   "pod": 2,
   "reportedPod": "North",
   "podName": "North",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     40,
     88
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Monroe",
   "w": 0,
   "l": 4,
   "pf": 2347,
   "pa": 2636,
   "gw": 40,
   "gl": 88,
   "diff": -289,
   "gameDiff": -48,
   "power": 0,
   "powerRank": 5,
   "pod": 1,
   "reportedPod": "East",
   "podName": "East / South",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     40,
     88
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Flemington",
   "w": 0,
   "l": 5,
   "pf": 2762,
   "pa": 3195,
   "gw": 47,
   "gl": 113,
   "diff": -433,
   "gameDiff": -66,
   "power": -1,
   "powerRank": 7,
   "pod": 2,
   "reportedPod": "North",
   "podName": "North",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     47,
     113
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Dill Dinkers Freehold",
   "w": 0,
   "l": 5,
   "pf": 2739,
   "pa": 3258,
   "gw": 42,
   "gl": 118,
   "diff": -519,
   "gameDiff": -76,
   "power": -1,
   "powerRank": 6,
   "pod": 1,
   "reportedPod": "East",
   "podName": "East / South",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     42,
     118
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Dill Dinkers Newport",
   "w": 0,
   "l": 4,
   "pf": 2060,
   "pa": 2658,
   "gw": 25,
   "gl": 103,
   "diff": -598,
   "gameDiff": -78,
   "power": -1.8,
   "powerRank": 6,
   "pod": 1,
   "reportedPod": "South",
   "podName": "East / South",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     25,
     103
    ],
    "female": [
     0,
     0
    ]
   }
  }
 ],
 "duos": [
  {
   "a": "Anil Kumar Jakkaladki",
   "b": "Sushil Rijhwani",
   "team": "Pickle House",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 3.5,
   "avgActual": 8,
   "avgExpected": 1,
   "aId": "176df588-c3ff-4b50-a66a-4df99647254b",
   "bId": "8fea334f-ad12-4c45-b67d-a127ec551f4e"
  },
  {
   "a": "Aaron Chan",
   "b": "Venu Yengala",
   "team": "Pickleball Kingdom Hamilton",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 2.6,
   "avgActual": 3,
   "avgExpected": -2.2,
   "aId": "57666861-23d0-4809-9556-b646579f2fd6",
   "bId": "b4cbf5ad-5c2c-46bf-bf50-f50683964b46"
  },
  {
   "a": "Siva Indupuru",
   "b": "Hua Lin",
   "team": "Dill Dinkers Freehold",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 2.3,
   "avgActual": 3.5,
   "avgExpected": -1,
   "aId": "5f264528-efdb-4bda-88ed-8003f98c1c9b",
   "bId": "6b263caa-80f7-40d2-9248-559f91ffe71e"
  },
  {
   "a": "Brandon Dejesus",
   "b": "Christopher Uston",
   "team": "Jersey Devil",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 2.2,
   "avgActual": 9,
   "avgExpected": 4.6,
   "aId": "d50feac2-f147-47d2-8930-99b21b2842ba",
   "bId": "e1f6c6fa-db86-4fed-9faa-dbc2fe29f373"
  },
  {
   "a": "Yashraj Kurani",
   "b": "Akash Raju",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.1,
   "avgActual": 10.3,
   "avgExpected": 5.3,
   "aId": "63950363-4747-4faf-b89a-eb88f8b9e81d",
   "bId": "a2fc30f9-b494-4781-900e-1e0b7d531f02"
  },
  {
   "a": "Sean Diamond",
   "b": "Edward Fu",
   "team": "PickleRage Union County",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 2.1,
   "avgActual": 4.5,
   "avgExpected": 0.3,
   "aId": "635ba257-e1ed-4db3-8303-5f241388437e",
   "bId": "b243c9db-ff2c-4db7-bcfd-27f3b0e7b6f1"
  },
  {
   "a": "Joseph Lynskey",
   "b": "Nacio Marshall",
   "team": "Premiere",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2,
   "avgActual": 8,
   "avgExpected": 3.3,
   "aId": "0e8c08b7-0e58-434b-8830-f37779f821dc",
   "bId": "b4af1ed9-5d7e-4212-a206-3c9a97b6958a"
  },
  {
   "a": "Luca Hendrickson",
   "b": "David Wheeler",
   "team": "Pickleball HQ",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 2,
   "avgActual": 7.8,
   "avgExpected": 3.8,
   "aId": "bd14255e-c654-49a4-99a1-26e02c67c7c7",
   "bId": "d335be77-6a7a-4f96-91c6-0a5cbcc8ea9f"
  },
  {
   "a": "Ren Macalalag",
   "b": "Vinay Mutt",
   "team": "PickleRage Union County",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 2,
   "avgActual": 4,
   "avgExpected": -0.7,
   "aId": "24db47b3-dedc-418d-9210-3b5fea1952da",
   "bId": "7caafc32-1aed-4fb7-b145-baf82cbbe2d2"
  },
  {
   "a": "Tyler Bayly",
   "b": "Uzoma Nwankwo",
   "team": "APC Garden State",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.8,
   "avgActual": 5.3,
   "avgExpected": 1.7,
   "aId": "642b7fc5-f304-459a-889e-e726dc9edeab",
   "bId": "c6482905-6954-4241-a6c3-ba077c367846"
  },
  {
   "a": "Matt Enz",
   "b": "Jamison Rowles",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.8,
   "avgActual": 7,
   "avgExpected": 3.3,
   "aId": "683d1fdd-2fa0-4775-a8dd-0f733aa9f1a3",
   "bId": "cae7c2db-b4d5-4927-9c44-ff92176b5507"
  },
  {
   "a": "Alex Kustas",
   "b": "Daniel Hadley",
   "team": "Jersey Devil",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.8,
   "avgActual": 7.5,
   "avgExpected": 3.8,
   "aId": "08b7041c-a90b-47ba-802a-5f71e6b98999",
   "bId": "23adcd68-130d-4176-b367-d3cd31260d21"
  },
  {
   "a": "Niman Ahmeti",
   "b": "Jimmy Ramja",
   "team": "Pickleball HQ",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.7,
   "avgActual": 4.7,
   "avgExpected": 0.8,
   "aId": "40681083-620d-4293-829f-91121323135c",
   "bId": "ade57877-7c11-4a46-88bf-789a50906901"
  },
  {
   "a": "Anthony Simonetti",
   "b": "Noah Ludwigsen",
   "team": "Pickleball HQ",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.7,
   "avgActual": 7.8,
   "avgExpected": 4.4,
   "aId": "3a2b64a1-6eb6-41e4-92fe-8da3d95af11b",
   "bId": "67f9503a-202f-4982-8e97-9b3383a35aee"
  },
  {
   "a": "Neil Dedhia",
   "b": "Ping Peng",
   "team": "Pickle House",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.7,
   "avgActual": 7.7,
   "avgExpected": 3.7,
   "aId": "20f3e907-41d8-40bb-8cef-cb6fed84a2aa",
   "bId": "7af65ce9-d7e3-4d00-b19b-653e6d2dc8d9"
  },
  {
   "a": "Ayon Codner",
   "b": "Eric Ruiz",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.6,
   "avgActual": 4.4,
   "avgExpected": 1.4,
   "aId": "497b0077-b7ae-4025-ad32-94c9da47ab80",
   "bId": "505e9bce-f386-4a4f-9a41-a1d7e0bb0527"
  },
  {
   "a": "Kevin Lew",
   "b": "Hua Lin",
   "team": "Dill Dinkers Freehold",
   "n": 8,
   "w": 7,
   "l": 1,
   "synergy": 1.6,
   "avgActual": 2.4,
   "avgExpected": 0,
   "aId": "03886b04-b474-4dda-b7f3-eb4f4954399c",
   "bId": "6b263caa-80f7-40d2-9248-559f91ffe71e"
  },
  {
   "a": "Dan Ladislaw",
   "b": "Jordan Demcher",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 5,
   "avgExpected": 1.9,
   "aId": "31b78615-afb3-4856-8cb1-de2b8d43a115",
   "bId": "6d1beb10-bd5c-456f-95b5-1823752e8c62"
  },
  {
   "a": "Kyle Martin",
   "b": "Ethan Fu",
   "team": "Bounce Tempest",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 6,
   "avgExpected": 2.5,
   "aId": "639af9e8-08fd-496d-84d6-6e7859e8c6d3",
   "bId": "a8585e9c-872e-466c-9583-9680e557f757"
  },
  {
   "a": "David Brandolph",
   "b": "Vincent Rigoglioso",
   "team": "Bounce Tempest",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.5,
   "avgActual": 4.7,
   "avgExpected": 1.2,
   "aId": "be10853a-1f2c-4b56-8fd7-902ddc686401",
   "bId": "d0c9ae50-0cdc-4f72-9ece-0b996f323f73"
  },
  {
   "a": "Franklin Lupianez",
   "b": "David Tabacco",
   "team": "Flemington",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.5,
   "avgActual": -0.7,
   "avgExpected": -3.6,
   "aId": "17caef8b-84d4-4052-9695-7c74190925a1",
   "bId": "717d97f0-4f08-476f-9c53-7595605bc0b0"
  },
  {
   "a": "Michael Barndt",
   "b": "Cullen Curley",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 7.3,
   "avgExpected": 3.8,
   "aId": "50853eee-28e0-4380-b379-35935eb2115a",
   "bId": "8cebf901-66b9-41d0-963d-12dac7334c8f"
  },
  {
   "a": "Alessio Muscara",
   "b": "Mike Leach",
   "team": "Picklr Newtown",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 5.4,
   "avgExpected": 2.7,
   "aId": "4a5131e4-a912-4913-8ff5-9281e53c6974",
   "bId": "a63211cf-31ed-448e-8c87-2aaaf8e84a7b"
  },
  {
   "a": "Paul Perumaly",
   "b": "David Brandolph",
   "team": "Bounce Tempest",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 7,
   "avgExpected": 4.2,
   "aId": "9d9eff5c-bb8e-47b7-b1e6-7e4c7055bb8b",
   "bId": "be10853a-1f2c-4b56-8fd7-902ddc686401"
  },
  {
   "a": "Keith Richard",
   "b": "Aleks Mirkovic",
   "team": "Dill Dinkers Newport",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 2,
   "avgExpected": -1.2,
   "aId": "cb2183c7-8c7b-4ebf-93da-66aeabe13d3b",
   "bId": "f006963a-4e8e-433d-8c9a-e278ac32ea9c"
  },
  {
   "a": "J-P Lautenschlager",
   "b": "Andy Ro",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 3.3,
   "avgExpected": 0,
   "aId": "5c3659f9-08d3-4745-832b-f7dd3f8c5ae5",
   "bId": "f3f6addc-ea42-4e7b-ac54-67bf69cffeeb"
  },
  {
   "a": "Timothy Lynskey",
   "b": "Daniel Antonelli",
   "team": "Premiere",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 5,
   "avgExpected": 2.5,
   "aId": "718c6948-a987-43bb-a1f3-cf7aead75edb",
   "bId": "cd0eb94b-4d32-4ba9-bcdc-3fba205d90f0"
  },
  {
   "a": "Leland Weinert",
   "b": "Matheus Korndoerfer",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 5.3,
   "avgExpected": 2.7,
   "aId": "3196f425-e79a-4def-b7c3-bc3205976ba3",
   "bId": "e1f41428-436c-436e-b752-af9cead487be"
  },
  {
   "a": "Dennis Yap",
   "b": "Robert Huntley",
   "team": "Home Court",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.3,
   "avgActual": 7.8,
   "avgExpected": 5.1,
   "aId": "45ea05c6-ef48-4b0a-9f71-a640be038d08",
   "bId": "b5dec967-9e3a-49b4-b136-597711d099cc"
  },
  {
   "a": "Matt Inzerillo",
   "b": "Neale Smith",
   "team": "APC Garden State",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.3,
   "avgActual": 5.7,
   "avgExpected": 2.7,
   "aId": "51ceabf9-8258-4835-9835-c7d915220185",
   "bId": "bd958367-8cce-4f24-ba5a-208bac9b42b0"
  },
  {
   "a": "Jonathan Carter",
   "b": "Derek Livingston",
   "team": "Jersey Devil",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 1.3,
   "avgActual": 3,
   "avgExpected": 0.8,
   "aId": "33fe293d-5913-41af-8f89-4a431ed92ab7",
   "bId": "593561e7-e873-4261-85ee-25b6ab524bfa"
  },
  {
   "a": "Steppan Konoplev",
   "b": "David Fiscella",
   "team": "Dill Dinkers Newport",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 0.3,
   "avgExpected": -2.6,
   "aId": "8f076d51-25ba-4203-97f8-12194ba5b001",
   "bId": "fa546fa2-45f5-4ad6-91ec-b6f6044ad8b0"
  },
  {
   "a": "Bennett Pereira",
   "b": "Jitendra Arora",
   "team": "Pickle House",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 4.7,
   "avgExpected": 1.9,
   "aId": "6a2ea39b-8b67-4cdf-83f7-c16fb3224655",
   "bId": "a117b66b-f319-4fc0-8ee2-feb3f17767d0"
  },
  {
   "a": "Erik Reilly",
   "b": "Ben Cortes",
   "team": "Dill Dinkers Freehold",
   "n": 10,
   "w": 5,
   "l": 5,
   "synergy": 1.2,
   "avgActual": -0.5,
   "avgExpected": -2.2,
   "aId": "479815f2-1e14-4b96-9423-d99c15b2fe2b",
   "bId": "4d89659f-a86c-4416-93f2-5c868fe0e984"
  },
  {
   "a": "Jose Campos",
   "b": "Niman Ahmeti",
   "team": "Pickleball HQ",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 2.7,
   "avgExpected": -0.2,
   "aId": "197e3b9a-eded-4a87-8391-13a7c6d18c8f",
   "bId": "40681083-620d-4293-829f-91121323135c"
  },
  {
   "a": "Timothy Lynskey",
   "b": "Gary White",
   "team": "Premiere",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 4.7,
   "avgExpected": 1.8,
   "aId": "718c6948-a987-43bb-a1f3-cf7aead75edb",
   "bId": "9a26eab9-96be-45e1-b380-2845a0e8e668"
  },
  {
   "a": "Kurt Skalamera",
   "b": "Jason Mcmanmon",
   "team": "Monroe",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 1.1,
   "avgActual": 0.2,
   "avgExpected": -1.8,
   "aId": "04000200-8214-42ff-9a0d-2189ffaccd42",
   "bId": "9adf9c4e-91c0-4483-af44-9ad4a86a81ce"
  },
  {
   "a": "Graham Heavenrich",
   "b": "Harrison Bohrer",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.1,
   "avgActual": 5.3,
   "avgExpected": 2.8,
   "aId": "27d8a10f-ee9b-467c-bf8c-4872ce63de90",
   "bId": "8a4095e6-2a3e-4a88-a6d2-8c1da135ce42"
  },
  {
   "a": "Ricky Jutkiewicz",
   "b": "Marc Kunesch",
   "team": "Home Court",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 3.3,
   "avgExpected": 0.8,
   "aId": "a24bc2af-aca9-45dd-a827-12fb12f7b784",
   "bId": "aeaef27d-01b3-4fb2-91f3-4be8c7602aa3"
  },
  {
   "a": "Rajeeth Nadig",
   "b": "Sree Harsha Konduru",
   "team": "Pickle House",
   "n": 8,
   "w": 8,
   "l": 0,
   "synergy": 1.1,
   "avgActual": 5.5,
   "avgExpected": 3.8,
   "aId": "20c15f19-5b27-4c9f-bc75-da3d516a015b",
   "bId": "439cf2c1-044c-450c-9dcc-4fdeafbb81cd"
  },
  {
   "a": "Kevin Tran",
   "b": "Samuel Kashefska",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 1.1,
   "avgActual": 7.2,
   "avgExpected": 5.3,
   "aId": "5a604a32-f8bf-45a8-b6b3-ef2922e0eeaf",
   "bId": "e4a31aff-39d6-49b3-95c4-131421e956a0"
  },
  {
   "a": "Marc Padre",
   "b": "Jun Zhi Tan",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.1,
   "avgActual": 11,
   "avgExpected": 8.3,
   "aId": "a131a707-f20e-4838-9dcf-7cecb40c2705",
   "bId": "d0e16b4b-7708-425d-ae9d-e3992c4e7fe2"
  },
  {
   "a": "Bryan Mccourt",
   "b": "Robert Huntley",
   "team": "Home Court",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 2.3,
   "avgExpected": 0.1,
   "aId": "74f9fe34-f8c5-49dd-b504-939d0b4f5aaa",
   "bId": "b5dec967-9e3a-49b4-b136-597711d099cc"
  },
  {
   "a": "Hua Lin",
   "b": "Ian Kohn",
   "team": "Dill Dinkers Freehold",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.1,
   "avgActual": -1,
   "avgExpected": -3.5,
   "aId": "6b263caa-80f7-40d2-9248-559f91ffe71e",
   "bId": "ef0e9803-0038-4cb9-ad16-a55c54f00339"
  },
  {
   "a": "Michael Dombrowiecki",
   "b": "David Bogatyrev",
   "team": "Monroe",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": 1,
   "avgActual": 0.5,
   "avgExpected": -1,
   "aId": "3ac34ef1-17a5-4ab6-8d17-be4bd5a0a040",
   "bId": "e77a59ee-8653-4d89-903c-75109d3f17c8"
  },
  {
   "a": "Mark Waters",
   "b": "Matt Inzerillo",
   "team": "APC Garden State",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 1,
   "avgActual": 0.2,
   "avgExpected": -1.5,
   "aId": "1baee0ad-faae-4c61-894a-a347710fdfea",
   "bId": "51ceabf9-8258-4835-9835-c7d915220185"
  },
  {
   "a": "Craig Butler",
   "b": "David Shapiro",
   "team": "Flemington",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 1,
   "avgActual": 2,
   "avgExpected": 0.3,
   "aId": "b50c51e8-3ce3-44ec-98e7-6cc11a705f17",
   "bId": "c39cd158-0c19-4819-8653-18084e6ce982"
  },
  {
   "a": "Umang Pathak",
   "b": "Ramam Durba",
   "team": "Montville",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1,
   "avgActual": 5.8,
   "avgExpected": 3.7,
   "aId": "30ecad69-b82a-45aa-94c5-f0f7869a0d12",
   "bId": "93280d5d-b0c8-49cd-94fe-0350f3e2dac5"
  },
  {
   "a": "Jeff Laniado",
   "b": "Cesar Santamaria-Aranda",
   "team": "Montville",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1,
   "avgActual": 2,
   "avgExpected": 0.3,
   "aId": "06d52e99-941a-4ced-9968-f56e6075105a",
   "bId": "fbde98cb-9eee-431b-b164-244249c26728"
  },
  {
   "a": "Luca Hendrickson",
   "b": "Kyle Korman",
   "team": "Pickleball HQ",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1,
   "avgActual": 3.8,
   "avgExpected": 2.1,
   "aId": "bd14255e-c654-49a4-99a1-26e02c67c7c7",
   "bId": "d61a3828-6dfc-480a-b26a-534b0fe58268"
  },
  {
   "a": "John Fallone",
   "b": "Josh Fink",
   "team": "Flemington",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1,
   "avgActual": 0.3,
   "avgExpected": -1.7,
   "aId": "5127c0b9-aaf8-49c5-a94f-bf92e7ae60f8",
   "bId": "6a70d918-9cd3-47d0-a40a-901a406452b6"
  },
  {
   "a": "Joseph Lynskey",
   "b": "Eden Ksendzovsky",
   "team": "Premiere",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 1,
   "avgActual": 2,
   "avgExpected": 0.3,
   "aId": "0e8c08b7-0e58-434b-8830-f37779f821dc",
   "bId": "75496a80-8064-40ae-ba4b-36c156d70885"
  },
  {
   "a": "Varun Gurram",
   "b": "Bennett Pereira",
   "team": "Pickle House",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1,
   "avgActual": 3.7,
   "avgExpected": 1.4,
   "aId": "44864b51-f901-4470-a6bd-891495ffd132",
   "bId": "6a2ea39b-8b67-4cdf-83f7-c16fb3224655"
  },
  {
   "a": "Ethan Fu",
   "b": "Jimmy Lee",
   "team": "Bounce Tempest",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.9,
   "avgActual": 1.6,
   "avgExpected": 0,
   "aId": "a8585e9c-872e-466c-9583-9680e557f757",
   "bId": "f2c53e42-1eac-48dd-9c93-682ec5c1ac98"
  },
  {
   "a": "Bryan Mccourt",
   "b": "Michael Vincent",
   "team": "Home Court",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 3.5,
   "avgExpected": 1.7,
   "aId": "74f9fe34-f8c5-49dd-b504-939d0b4f5aaa",
   "bId": "7f44421c-476c-4857-99ed-3376b32289ca"
  },
  {
   "a": "Kevin Sheehan",
   "b": "Bryan Mccourt",
   "team": "Home Court",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 3,
   "avgExpected": 1.2,
   "aId": "115f3958-d110-41f0-a04c-aa2f8e17a54f",
   "bId": "74f9fe34-f8c5-49dd-b504-939d0b4f5aaa"
  },
  {
   "a": "Sree Harsha Konduru",
   "b": "Ping Peng",
   "team": "Pickle House",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 7.7,
   "avgExpected": 5.6,
   "aId": "439cf2c1-044c-450c-9dcc-4fdeafbb81cd",
   "bId": "7af65ce9-d7e3-4d00-b19b-653e6d2dc8d9"
  },
  {
   "a": "Dilip Patel",
   "b": "Jaiveer Narwal",
   "team": "Pickleball Kingdom Hamilton",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.9,
   "avgActual": 0.7,
   "avgExpected": -1.4,
   "aId": "7573445f-7dbd-4c2f-867a-ae95ae7ed168",
   "bId": "96042156-2ff1-44d0-9b96-8448964b4981"
  },
  {
   "a": "Pritpal Singh",
   "b": "Dhruv Dobariya",
   "team": "Pickleball Kingdom Hamilton",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 0.8,
   "avgExpected": -1.1,
   "aId": "631b24ae-9bc2-4db3-964b-33f86933021e",
   "bId": "ac44fd3c-0c87-47aa-bf26-4333b632f524"
  },
  {
   "a": "Sean Diamond",
   "b": "Dan Yang",
   "team": "PickleRage Union County",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.9,
   "avgActual": 2.2,
   "avgExpected": 0.6,
   "aId": "635ba257-e1ed-4db3-8303-5f241388437e",
   "bId": "667a80aa-7b06-46b5-a4ae-6989224ab5f9"
  },
  {
   "a": "Bill Olderman",
   "b": "Meet Thakkar",
   "team": "Montville",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 3.3,
   "avgExpected": 1.5,
   "aId": "30c847e2-9b5e-4ad7-851d-9d624f94a11b",
   "bId": "f68fa078-e500-4427-9d65-338e840f318c"
  },
  {
   "a": "Jun Zhi Tan",
   "b": "Ritesh Patel",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 5.5,
   "avgExpected": 3.6,
   "aId": "d0e16b4b-7708-425d-ae9d-e3992c4e7fe2",
   "bId": "e2f86c8b-755e-42a0-8828-f2965f4fbbe7"
  },
  {
   "a": "Joseph Lynskey",
   "b": "Christopher Giasi",
   "team": "Premiere",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.9,
   "avgActual": 2.8,
   "avgExpected": 1.1,
   "aId": "0e8c08b7-0e58-434b-8830-f37779f821dc",
   "bId": "d6ca21c0-822e-422f-9721-34120ba90184"
  },
  {
   "a": "Anthony Simonetti",
   "b": "Christopher Hendrickson",
   "team": "Pickleball HQ",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 6,
   "avgExpected": 4,
   "aId": "3a2b64a1-6eb6-41e4-92fe-8da3d95af11b",
   "bId": "7fc1ed1b-4763-49b4-a077-46a92c0df3d6"
  },
  {
   "a": "Michael Gilbert",
   "b": "Marc Kunesch",
   "team": "Home Court",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.9,
   "avgActual": 0,
   "avgExpected": -2,
   "aId": "5acb8305-77d8-4089-88b6-9fbfa9400f6a",
   "bId": "aeaef27d-01b3-4fb2-91f3-4be8c7602aa3"
  },
  {
   "a": "Andrew Neave",
   "b": "Matt Enz",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 2,
   "avgExpected": 0.1,
   "aId": "2f7d6c14-4f06-470b-a4ba-f28199e823b0",
   "bId": "683d1fdd-2fa0-4775-a8dd-0f733aa9f1a3"
  },
  {
   "a": "Uzoma Nwankwo",
   "b": "Chris Machuzak",
   "team": "APC Garden State",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.8,
   "avgActual": 0,
   "avgExpected": -1.6,
   "aId": "c6482905-6954-4241-a6c3-ba077c367846",
   "bId": "dba4c9d8-6ffb-49ae-99d1-79c341a68de7"
  },
  {
   "a": "Derek Livingston",
   "b": "Tim Bruno",
   "team": "Jersey Devil",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.8,
   "avgActual": 4.2,
   "avgExpected": 2.8,
   "aId": "593561e7-e873-4261-85ee-25b6ab524bfa",
   "bId": "ef5a4f7c-58d1-42fa-81c2-1f9f09a60a0f"
  },
  {
   "a": "Michael Barndt",
   "b": "Carlos Rincon",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.8,
   "avgActual": 5.3,
   "avgExpected": 4.1,
   "aId": "50853eee-28e0-4380-b379-35935eb2115a",
   "bId": "9886815c-3bf4-42b1-b650-1ec17ff2c167"
  },
  {
   "a": "John Manuzza",
   "b": "Cesar Santamaria-Aranda",
   "team": "Montville",
   "n": 6,
   "w": 6,
   "l": 0,
   "synergy": 0.8,
   "avgActual": 3.8,
   "avgExpected": 2.6,
   "aId": "5d3156e6-7886-4184-9d2f-3ec44d72bb3b",
   "bId": "fbde98cb-9eee-431b-b164-244249c26728"
  },
  {
   "a": "Alessio Muscara",
   "b": "Gary Garretson",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.8,
   "avgActual": 8.3,
   "avgExpected": 6.4,
   "aId": "4a5131e4-a912-4913-8ff5-9281e53c6974",
   "bId": "d4126276-6b83-42be-b943-9957df46992c"
  },
  {
   "a": "Rick Olafsson",
   "b": "Aleks Mirkovic",
   "team": "Dill Dinkers Newport",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.8,
   "avgActual": -2.7,
   "avgExpected": -4.5,
   "aId": "088a0cec-3f4c-4100-afd4-33d4462dc7e3",
   "bId": "f006963a-4e8e-433d-8c9a-e278ac32ea9c"
  },
  {
   "a": "Jose Campos",
   "b": "Kyle Korman",
   "team": "Pickleball HQ",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.8,
   "avgActual": 6,
   "avgExpected": 4.1,
   "aId": "197e3b9a-eded-4a87-8391-13a7c6d18c8f",
   "bId": "d61a3828-6dfc-480a-b26a-534b0fe58268"
  },
  {
   "a": "Christopher Hendrickson",
   "b": "Luca Hendrickson",
   "team": "Pickleball HQ",
   "n": 10,
   "w": 10,
   "l": 0,
   "synergy": 0.8,
   "avgActual": 7,
   "avgExpected": 5.8,
   "aId": "7fc1ed1b-4763-49b4-a077-46a92c0df3d6",
   "bId": "bd14255e-c654-49a4-99a1-26e02c67c7c7"
  },
  {
   "a": "Pedro Delgado",
   "b": "Big G",
   "team": "Dill Dinkers Freehold",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.8,
   "avgActual": -4.7,
   "avgExpected": -6.4,
   "aId": "3e2aac0c-7c01-4c71-a288-900b54059019",
   "bId": "f75516ca-4ed9-4ca2-84d3-a6af16b16a27"
  },
  {
   "a": "Michael Vollmer",
   "b": "Siva Indupuru",
   "team": "Dill Dinkers Freehold",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 0.8,
   "avgActual": -2,
   "avgExpected": -3.5,
   "aId": "148387a8-f20a-44df-981d-0d9d2e7bf443",
   "bId": "5f264528-efdb-4bda-88ed-8003f98c1c9b"
  },
  {
   "a": "Anthony Simonetti",
   "b": "Thomas Moran",
   "team": "Pickleball HQ",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 2.3,
   "avgExpected": 0.5,
   "aId": "3a2b64a1-6eb6-41e4-92fe-8da3d95af11b",
   "bId": "9571d7b5-fc34-4c77-a51f-c99b286e4304"
  },
  {
   "a": "Malay Kaity",
   "b": "Jesse Pettit",
   "team": "Dill Dinkers Newport",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.8,
   "avgActual": -4.7,
   "avgExpected": -6.6,
   "aId": "199ae8e1-22b4-4d8d-a41d-29cb984a3b33",
   "bId": "d6e30691-3b20-465b-8fa8-560017c20c15"
  },
  {
   "a": "Franklin Lupianez",
   "b": "Craig Butler",
   "team": "Flemington",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.8,
   "avgActual": 1.8,
   "avgExpected": 0.2,
   "aId": "17caef8b-84d4-4052-9695-7c74190925a1",
   "bId": "b50c51e8-3ce3-44ec-98e7-6cc11a705f17"
  },
  {
   "a": "Edward Fu",
   "b": "Jonathan Dong",
   "team": "PickleRage Union County",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.8,
   "avgActual": 5.3,
   "avgExpected": 3.6,
   "aId": "b243c9db-ff2c-4db7-bcfd-27f3b0e7b6f1",
   "bId": "edbeb52a-85fd-48ff-acc5-a5c8415a731d"
  },
  {
   "a": "Tom Kresky",
   "b": "Frederick Cox",
   "team": "Jersey Devil",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.8,
   "avgActual": -0.3,
   "avgExpected": -2.1,
   "aId": "81875a5e-2b65-4152-bace-b4c96517579d",
   "bId": "e8aee14f-dbc4-4e5c-be4a-4f948e2e13fc"
  },
  {
   "a": "Ping Peng",
   "b": "Aidan Fredericks",
   "team": "Pickle House",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.8,
   "avgActual": -0.3,
   "avgExpected": -2.2,
   "aId": "7af65ce9-d7e3-4d00-b19b-653e6d2dc8d9",
   "bId": "a6d48fe9-1e3d-470b-8a0c-6061231f34ce"
  },
  {
   "a": "Nicholas Lugo",
   "b": "Jason Mcmanmon",
   "team": "Monroe",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.8,
   "avgActual": 2.3,
   "avgExpected": 0.7,
   "aId": "8f9be7cc-3ddf-436f-8727-02cbdd0d453f",
   "bId": "9adf9c4e-91c0-4483-af44-9ad4a86a81ce"
  },
  {
   "a": "Michael Dombrowiecki",
   "b": "Nicholas Lugo",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 1,
   "avgExpected": -0.9,
   "aId": "3ac34ef1-17a5-4ab6-8d17-be4bd5a0a040",
   "bId": "8f9be7cc-3ddf-436f-8727-02cbdd0d453f"
  },
  {
   "a": "Jason Feldman",
   "b": "Matthew Schwartz",
   "team": "Premiere",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 7,
   "avgExpected": 5.8,
   "aId": "5636cdc5-7a65-4202-abbb-5999eee35ab3",
   "bId": "a432d3e0-17c2-4741-a4b2-7f72b7a81a5f"
  },
  {
   "a": "Gary White",
   "b": "Daniel Antonelli",
   "team": "Premiere",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 1.6,
   "avgExpected": 0.4,
   "aId": "9a26eab9-96be-45e1-b380-2845a0e8e668",
   "bId": "cd0eb94b-4d32-4ba9-bcdc-3fba205d90f0"
  },
  {
   "a": "Andrew Neave",
   "b": "Jordan Demcher",
   "team": "Bounce Malvern",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 3.8,
   "avgExpected": 2.7,
   "aId": "2f7d6c14-4f06-470b-a4ba-f28199e823b0",
   "bId": "6d1beb10-bd5c-456f-95b5-1823752e8c62"
  },
  {
   "a": "Elias Eid",
   "b": "Peter Chen",
   "team": "Allstar Pickler",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 0.7,
   "avgActual": -5.2,
   "avgExpected": -6.7,
   "aId": "77f18b1c-db78-4d0e-b81d-6d1efde8bb08",
   "bId": "8767c73e-fa5a-4e68-9ded-850b7ab50693"
  },
  {
   "a": "Franklin Yiu",
   "b": "Allan Orchard",
   "team": "Allstar Pickler",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.7,
   "avgActual": 2.5,
   "avgExpected": 1.4,
   "aId": "020affa0-bff4-49cb-94c0-a9eb9ba09b77",
   "bId": "4f34c672-f457-467f-98d8-7d5d6c8add16"
  },
  {
   "a": "Franklin Yiu",
   "b": "Brandon Fulford",
   "team": "Allstar Pickler",
   "n": 8,
   "w": 2,
   "l": 6,
   "synergy": 0.7,
   "avgActual": -1.5,
   "avgExpected": -2.5,
   "aId": "020affa0-bff4-49cb-94c0-a9eb9ba09b77",
   "bId": "906383cd-e781-48bc-9004-0fc5427c7e62"
  },
  {
   "a": "Chris Machuzak",
   "b": "Andress Mims",
   "team": "APC Garden State",
   "n": 7,
   "w": 1,
   "l": 6,
   "synergy": 0.7,
   "avgActual": -3.1,
   "avgExpected": -4.3,
   "aId": "dba4c9d8-6ffb-49ae-99d1-79c341a68de7",
   "bId": "e9878f35-8a92-4887-834e-d8a76881ae41"
  },
  {
   "a": "Dan Yang",
   "b": "Shreyas Suresh Hassan",
   "team": "PickleRage Union County",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": 0.7,
   "avgActual": 0.9,
   "avgExpected": -0.1,
   "aId": "667a80aa-7b06-46b5-a4ae-6989224ab5f9",
   "bId": "e1d9f3bc-ec4e-4690-810c-a67452049768"
  },
  {
   "a": "Mathew Yang",
   "b": "Arnold Poblete",
   "team": "Picklr Newtown",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 2.6,
   "avgExpected": 1.4,
   "aId": "12ec758b-f05d-40ec-b082-a76f07cbe792",
   "bId": "c19e964a-d126-4e9f-9ce4-83c315f2f535"
  },
  {
   "a": "Michael Dombrowiecki",
   "b": "Stephen Fredericksen",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 0.7,
   "avgExpected": -1.1,
   "aId": "3ac34ef1-17a5-4ab6-8d17-be4bd5a0a040",
   "bId": "622cb64f-dd0c-4bff-8c19-81d287977c53"
  },
  {
   "a": "Varun Gurram",
   "b": "Jitendra Arora",
   "team": "Pickle House",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.7,
   "avgActual": 2.5,
   "avgExpected": 1,
   "aId": "44864b51-f901-4470-a6bd-891495ffd132",
   "bId": "a117b66b-f319-4fc0-8ee2-feb3f17767d0"
  },
  {
   "a": "Jack Barry",
   "b": "Jonathan Dong",
   "team": "PickleRage Union County",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 2.4,
   "avgExpected": 1.1,
   "aId": "763342e5-4d13-45b7-8630-9d840cb7b8b3",
   "bId": "edbeb52a-85fd-48ff-acc5-a5c8415a731d"
  },
  {
   "a": "Brandon Dejesus",
   "b": "Frederick Cox",
   "team": "Jersey Devil",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 1.5,
   "avgExpected": 0.3,
   "aId": "d50feac2-f147-47d2-8930-99b21b2842ba",
   "bId": "e8aee14f-dbc4-4e5c-be4a-4f948e2e13fc"
  },
  {
   "a": "Mark Waters",
   "b": "Bruce Nguyen",
   "team": "APC Garden State",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.6,
   "avgActual": -1.2,
   "avgExpected": -2.4,
   "aId": "1baee0ad-faae-4c61-894a-a347710fdfea",
   "bId": "33233dc6-b78e-4deb-88d4-2742aacf5eb9"
  },
  {
   "a": "Rajeeth Nadig",
   "b": "Varun Gurram",
   "team": "Pickle House",
   "n": 10,
   "w": 7,
   "l": 3,
   "synergy": 0.6,
   "avgActual": 3,
   "avgExpected": 2.2,
   "aId": "20c15f19-5b27-4c9f-bc75-da3d516a015b",
   "bId": "44864b51-f901-4470-a6bd-891495ffd132"
  },
  {
   "a": "Umang Pathak",
   "b": "John Manuzza",
   "team": "Montville",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 5.5,
   "avgExpected": 4.5,
   "aId": "30ecad69-b82a-45aa-94c5-f0f7869a0d12",
   "bId": "5d3156e6-7886-4184-9d2f-3ec44d72bb3b"
  },
  {
   "a": "Erik Reilly",
   "b": "Wensheng Yue",
   "team": "Dill Dinkers Freehold",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.6,
   "avgActual": -0.2,
   "avgExpected": -1.1,
   "aId": "479815f2-1e14-4b96-9423-d99c15b2fe2b",
   "bId": "d11f5bc0-8b23-488d-86fb-13eebe9e2257"
  },
  {
   "a": "Noah Ludwigsen",
   "b": "Jimmy Ramja",
   "team": "Pickleball HQ",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.6,
   "avgActual": 5.3,
   "avgExpected": 4,
   "aId": "67f9503a-202f-4982-8e97-9b3383a35aee",
   "bId": "ade57877-7c11-4a46-88bf-789a50906901"
  },
  {
   "a": "Jimmy Duong",
   "b": "Michael Johnson",
   "team": "Picklr Newtown",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.6,
   "avgActual": -1.5,
   "avgExpected": -2.8,
   "aId": "06a3741d-10e5-462b-ba95-aa997d4eb8ea",
   "bId": "4f98756a-9726-48fe-a241-2579f96eee16"
  },
  {
   "a": "Kevin Lew",
   "b": "Wensheng Yue",
   "team": "Dill Dinkers Freehold",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.6,
   "avgActual": 0.5,
   "avgExpected": -0.4,
   "aId": "03886b04-b474-4dda-b7f3-eb4f4954399c",
   "bId": "d11f5bc0-8b23-488d-86fb-13eebe9e2257"
  },
  {
   "a": "Michael Dombrowiecki",
   "b": "Jacob Rosengarten",
   "team": "Monroe",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.5,
   "avgActual": -1.7,
   "avgExpected": -2.7,
   "aId": "3ac34ef1-17a5-4ab6-8d17-be4bd5a0a040",
   "bId": "b2f8ea85-7734-47a2-8ce7-bd968b3a51bc"
  },
  {
   "a": "Paul Perumaly",
   "b": "Daniel Borgia",
   "team": "Bounce Tempest",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 3,
   "avgExpected": 1.8,
   "aId": "9d9eff5c-bb8e-47b7-b1e6-7e4c7055bb8b",
   "bId": "ae3cd925-c856-44dd-9cf5-3a2bd343adf2"
  },
  {
   "a": "Jared Rapoport",
   "b": "Ken Weinstein",
   "team": "Bounce Tempest",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 2,
   "avgExpected": 0.9,
   "aId": "b19f3a31-ce60-4c40-b903-1fd60c95f649",
   "bId": "d07bda42-9d33-4c03-a7f3-a8a468083bdd"
  },
  {
   "a": "Brandon Fulford",
   "b": "Sean Majury",
   "team": "Allstar Pickler",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 0.3,
   "avgExpected": -0.9,
   "aId": "906383cd-e781-48bc-9004-0fc5427c7e62",
   "bId": "e41c0cda-fb97-4912-8e8a-fa99ff1725d0"
  },
  {
   "a": "Dhruv Dobariya",
   "b": "Ziyu Huang",
   "team": "Pickleball Kingdom Hamilton",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": 0.5,
   "avgActual": -1.5,
   "avgExpected": -2.3,
   "aId": "ac44fd3c-0c87-47aa-bf26-4333b632f524",
   "bId": "d06d8b3c-72d6-4ae3-ade8-d7cb7cbd70f7"
  },
  {
   "a": "Sree Harsha Konduru",
   "b": "Jitendra Arora",
   "team": "Pickle House",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 3,
   "avgExpected": 1.9,
   "aId": "439cf2c1-044c-450c-9dcc-4fdeafbb81cd",
   "bId": "a117b66b-f319-4fc0-8ee2-feb3f17767d0"
  },
  {
   "a": "John Fallone",
   "b": "David Shapiro",
   "team": "Flemington",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.5,
   "avgActual": -3.3,
   "avgExpected": -4.4,
   "aId": "5127c0b9-aaf8-49c5-a94f-bf92e7ae60f8",
   "bId": "c39cd158-0c19-4819-8653-18084e6ce982"
  },
  {
   "a": "Jesse Mynahan",
   "b": "Cesar Santamaria-Aranda",
   "team": "Montville",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": 0.5,
   "avgActual": 2.5,
   "avgExpected": 1.7,
   "aId": "66b5f8fe-1456-4ca5-ba6a-9ee4de2052cb",
   "bId": "fbde98cb-9eee-431b-b164-244249c26728"
  },
  {
   "a": "Franklin Lupianez",
   "b": "John Fallone",
   "team": "Flemington",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.5,
   "avgActual": -3.2,
   "avgExpected": -4.1,
   "aId": "17caef8b-84d4-4052-9695-7c74190925a1",
   "bId": "5127c0b9-aaf8-49c5-a94f-bf92e7ae60f8"
  },
  {
   "a": "Marc Padre",
   "b": "Akash Raju",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 8,
   "avgExpected": 6.8,
   "aId": "a131a707-f20e-4838-9dcf-7cecb40c2705",
   "bId": "a2fc30f9-b494-4781-900e-1e0b7d531f02"
  },
  {
   "a": "Nicholas Lugo",
   "b": "Salman Saad",
   "team": "Monroe",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 0.8,
   "avgExpected": -0.3,
   "aId": "8f9be7cc-3ddf-436f-8727-02cbdd0d453f",
   "bId": "f7c4d103-d246-456d-8fd5-6418c6a0e002"
  },
  {
   "a": "Joseph Luka",
   "b": "Jared Rapoport",
   "team": "Bounce Tempest",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 4,
   "avgExpected": 3,
   "aId": "482a6a13-3cb9-438b-8494-3f70a4f1cffe",
   "bId": "b19f3a31-ce60-4c40-b903-1fd60c95f649"
  },
  {
   "a": "Graham Heavenrich",
   "b": "Matt Enz",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 5,
   "avgExpected": 3.9,
   "aId": "27d8a10f-ee9b-467c-bf8c-4872ce63de90",
   "bId": "683d1fdd-2fa0-4775-a8dd-0f733aa9f1a3"
  },
  {
   "a": "Jordan Demcher",
   "b": "Jr Burrs",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 7,
   "avgExpected": 5.9,
   "aId": "6d1beb10-bd5c-456f-95b5-1823752e8c62",
   "bId": "870112b1-afc3-4ff6-b784-7f872210bf37"
  },
  {
   "a": "Jason Mcmanmon",
   "b": "Jacob Rosengarten",
   "team": "Monroe",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": 0.4,
   "avgActual": -0.6,
   "avgExpected": -1.1,
   "aId": "9adf9c4e-91c0-4483-af44-9ad4a86a81ce",
   "bId": "b2f8ea85-7734-47a2-8ce7-bd968b3a51bc"
  },
  {
   "a": "Franklin Yiu",
   "b": "Sean Majury",
   "team": "Allstar Pickler",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 0.2,
   "avgExpected": -0.5,
   "aId": "020affa0-bff4-49cb-94c0-a9eb9ba09b77",
   "bId": "e41c0cda-fb97-4912-8e8a-fa99ff1725d0"
  },
  {
   "a": "Sree Harsha Konduru",
   "b": "Varun Gurram",
   "team": "Pickle House",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": 0.4,
   "avgActual": 2.6,
   "avgExpected": 2,
   "aId": "439cf2c1-044c-450c-9dcc-4fdeafbb81cd",
   "bId": "44864b51-f901-4470-a6bd-891495ffd132"
  },
  {
   "a": "Rajeeth Nadig",
   "b": "Bennett Pereira",
   "team": "Pickle House",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.4,
   "avgActual": 5,
   "avgExpected": 4.2,
   "aId": "20c15f19-5b27-4c9f-bc75-da3d516a015b",
   "bId": "6a2ea39b-8b67-4cdf-83f7-c16fb3224655"
  },
  {
   "a": "Kevin Tran",
   "b": "Carlos Rincon",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.4,
   "avgActual": 6.8,
   "avgExpected": 5.9,
   "aId": "5a604a32-f8bf-45a8-b6b3-ef2922e0eeaf",
   "bId": "9886815c-3bf4-42b1-b650-1ec17ff2c167"
  },
  {
   "a": "Rick Olafsson",
   "b": "Steppan Konoplev",
   "team": "Dill Dinkers Newport",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.4,
   "avgActual": -2.2,
   "avgExpected": -3.1,
   "aId": "088a0cec-3f4c-4100-afd4-33d4462dc7e3",
   "bId": "8f076d51-25ba-4203-97f8-12194ba5b001"
  },
  {
   "a": "Angelo Disipio",
   "b": "Steven Hummel",
   "team": "Picklr Newtown",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 0.8,
   "avgExpected": 0.1,
   "aId": "79bb5bba-c449-4cdd-948b-fb5f8efdaebb",
   "bId": "c5bf56d5-50a9-4a1f-a6f8-3f3f5af91cca"
  },
  {
   "a": "Jason Feldman",
   "b": "Eden Ksendzovsky",
   "team": "Premiere",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 2.5,
   "avgExpected": 1.6,
   "aId": "5636cdc5-7a65-4202-abbb-5999eee35ab3",
   "bId": "75496a80-8064-40ae-ba4b-36c156d70885"
  },
  {
   "a": "Joel Steinbrunner",
   "b": "Aleks Mirkovic",
   "team": "Dill Dinkers Newport",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.4,
   "avgActual": -5.2,
   "avgExpected": -6.1,
   "aId": "d6628146-5ecf-46fa-9ec2-4385171098fd",
   "bId": "f006963a-4e8e-433d-8c9a-e278ac32ea9c"
  },
  {
   "a": "Sujoy Gayen",
   "b": "Big G",
   "team": "Dill Dinkers Freehold",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.4,
   "avgActual": -3.2,
   "avgExpected": -4.1,
   "aId": "159ef92f-0a83-4619-b65d-3ba60a2ba992",
   "bId": "f75516ca-4ed9-4ca2-84d3-a6af16b16a27"
  },
  {
   "a": "Joseph Lynskey",
   "b": "Matthew Schwartz",
   "team": "Premiere",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 0.3,
   "avgActual": 5.2,
   "avgExpected": 4.7,
   "aId": "0e8c08b7-0e58-434b-8830-f37779f821dc",
   "bId": "a432d3e0-17c2-4741-a4b2-7f72b7a81a5f"
  },
  {
   "a": "Stephen Fredericksen",
   "b": "Jacob Rosengarten",
   "team": "Monroe",
   "n": 8,
   "w": 3,
   "l": 5,
   "synergy": 0.3,
   "avgActual": -1.9,
   "avgExpected": -2.4,
   "aId": "622cb64f-dd0c-4bff-8c19-81d287977c53",
   "bId": "b2f8ea85-7734-47a2-8ce7-bd968b3a51bc"
  },
  {
   "a": "David Wheeler",
   "b": "Kyle Korman",
   "team": "Pickleball HQ",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 3.8,
   "avgExpected": 3.2,
   "aId": "d335be77-6a7a-4f96-91c6-0a5cbcc8ea9f",
   "bId": "d61a3828-6dfc-480a-b26a-534b0fe58268"
  },
  {
   "a": "Ren Macalalag",
   "b": "Steve Lerner",
   "team": "PickleRage Union County",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 0.3,
   "avgActual": -3.7,
   "avgExpected": -4.3,
   "aId": "24db47b3-dedc-418d-9210-3b5fea1952da",
   "bId": "d634d992-c9d8-4e31-acb7-45b1161eee19"
  },
  {
   "a": "Shawn Gold",
   "b": "David Bogatyrev",
   "team": "Monroe",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 0.2,
   "avgActual": -1,
   "avgExpected": -1.2,
   "aId": "e2d70cc7-b655-43d5-a059-063bfe722001",
   "bId": "e77a59ee-8653-4d89-903c-75109d3f17c8"
  },
  {
   "a": "Kyle Martin",
   "b": "Paul Perumaly",
   "team": "Bounce Tempest",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.2,
   "avgActual": 3.7,
   "avgExpected": 3.3,
   "aId": "639af9e8-08fd-496d-84d6-6e7859e8c6d3",
   "bId": "9d9eff5c-bb8e-47b7-b1e6-7e4c7055bb8b"
  },
  {
   "a": "Dan Ladislaw",
   "b": "Matheus Korndoerfer",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 1,
   "avgExpected": 0.6,
   "aId": "31b78615-afb3-4856-8cb1-de2b8d43a115",
   "bId": "e1f41428-436c-436e-b752-af9cead487be"
  },
  {
   "a": "Jordan Demcher",
   "b": "Ryan Hathaway",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 2.3,
   "avgExpected": 1.9,
   "aId": "6d1beb10-bd5c-456f-95b5-1823752e8c62",
   "bId": "8b8ebfab-9618-4bba-a52b-6aa7679d3390"
  },
  {
   "a": "Jarred Goeckeler",
   "b": "Tom Kresky",
   "team": "Jersey Devil",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 0.5,
   "avgExpected": 0,
   "aId": "084f4667-3553-4f23-b4c7-62d6c8afb42a",
   "bId": "81875a5e-2b65-4152-bace-b4c96517579d"
  },
  {
   "a": "Ashish Kumar",
   "b": "Ziyu Huang",
   "team": "Pickleball Kingdom Hamilton",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.2,
   "avgActual": 5,
   "avgExpected": 4.5,
   "aId": "5df02573-21d4-40ea-8b41-f81372a474b3",
   "bId": "d06d8b3c-72d6-4ae3-ade8-d7cb7cbd70f7"
  },
  {
   "a": "Harsh Upadhyaya",
   "b": "Venu Yengala",
   "team": "Pickleball Kingdom Hamilton",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 0,
   "avgExpected": -0.4,
   "aId": "3b9648e1-481c-4007-9932-d8df648f7bab",
   "bId": "b4cbf5ad-5c2c-46bf-bf50-f50683964b46"
  },
  {
   "a": "Ashish Kumar",
   "b": "Pritpal Singh",
   "team": "Pickleball Kingdom Hamilton",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 0.2,
   "avgActual": 8.2,
   "avgExpected": 7.8,
   "aId": "5df02573-21d4-40ea-8b41-f81372a474b3",
   "bId": "631b24ae-9bc2-4db3-964b-33f86933021e"
  },
  {
   "a": "Eric Ruiz",
   "b": "Samuel Kashefska",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 3,
   "avgExpected": 2.7,
   "aId": "505e9bce-f386-4a4f-9a41-a1d7e0bb0527",
   "bId": "e4a31aff-39d6-49b3-95c4-131421e956a0"
  },
  {
   "a": "Ayon Codner",
   "b": "Samuel Kashefska",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 3.6,
   "avgExpected": 3.2,
   "aId": "497b0077-b7ae-4025-ad32-94c9da47ab80",
   "bId": "e4a31aff-39d6-49b3-95c4-131421e956a0"
  },
  {
   "a": "Rohit Mankotia",
   "b": "Kevin Tran",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 3.8,
   "avgExpected": 3.4,
   "aId": "541e3e2d-76eb-4cd3-9bfe-9f94c0b9cdeb",
   "bId": "5a604a32-f8bf-45a8-b6b3-ef2922e0eeaf"
  },
  {
   "a": "Ayon Codner",
   "b": "Cullen Curley",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 2,
   "avgExpected": 1.6,
   "aId": "497b0077-b7ae-4025-ad32-94c9da47ab80",
   "bId": "8cebf901-66b9-41d0-963d-12dac7334c8f"
  },
  {
   "a": "Cullen Curley",
   "b": "Samuel Kashefska",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 0.7,
   "avgExpected": 0.3,
   "aId": "8cebf901-66b9-41d0-963d-12dac7334c8f",
   "bId": "e4a31aff-39d6-49b3-95c4-131421e956a0"
  },
  {
   "a": "Jimmy Ramja",
   "b": "David Wheeler",
   "team": "Pickleball HQ",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 3.3,
   "avgExpected": 2.9,
   "aId": "ade57877-7c11-4a46-88bf-789a50906901",
   "bId": "d335be77-6a7a-4f96-91c6-0a5cbcc8ea9f"
  },
  {
   "a": "Sandeep Malhotra",
   "b": "Brandon Tsang",
   "team": "Montville",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.2,
   "avgActual": 5.7,
   "avgExpected": 5.1,
   "aId": "c24596e0-9eeb-4195-b1ff-d4ca3e418d84",
   "bId": "c80b5964-35f3-46b9-a0fa-9c3c9c673161"
  },
  {
   "a": "Kevin Sheehan",
   "b": "Jacob Yoo",
   "team": "Home Court",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.2,
   "avgActual": -0.3,
   "avgExpected": -0.9,
   "aId": "115f3958-d110-41f0-a04c-aa2f8e17a54f",
   "bId": "df0934fe-e584-4b4f-a549-a90499016d33"
  },
  {
   "a": "Dilip Patel",
   "b": "Dhruv Dobariya",
   "team": "Pickleball Kingdom Hamilton",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.2,
   "avgActual": -1.7,
   "avgExpected": -2.1,
   "aId": "7573445f-7dbd-4c2f-867a-ae95ae7ed168",
   "bId": "ac44fd3c-0c87-47aa-bf26-4333b632f524"
  },
  {
   "a": "Graham Heavenrich",
   "b": "Lincoln Jensen",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.2,
   "avgActual": 4,
   "avgExpected": 3.5,
   "aId": "27d8a10f-ee9b-467c-bf8c-4872ce63de90",
   "bId": "98842749-0d7d-4b20-b78a-50c79d087699"
  },
  {
   "a": "Rajeeth Nadig",
   "b": "Jitendra Arora",
   "team": "Pickle House",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 3.5,
   "avgExpected": 3.1,
   "aId": "20c15f19-5b27-4c9f-bc75-da3d516a015b",
   "bId": "a117b66b-f319-4fc0-8ee2-feb3f17767d0"
  },
  {
   "a": "Ian Kohn",
   "b": "Big G",
   "team": "Dill Dinkers Freehold",
   "n": 8,
   "w": 0,
   "l": 8,
   "synergy": 0.2,
   "avgActual": -7.9,
   "avgExpected": -8.1,
   "aId": "ef0e9803-0038-4cb9-ad16-a55c54f00339",
   "bId": "f75516ca-4ed9-4ca2-84d3-a6af16b16a27"
  },
  {
   "a": "Ben Cortes",
   "b": "Big G",
   "team": "Dill Dinkers Freehold",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": 0.2,
   "avgActual": -5.8,
   "avgExpected": -6.2,
   "aId": "4d89659f-a86c-4416-93f2-5c868fe0e984",
   "bId": "f75516ca-4ed9-4ca2-84d3-a6af16b16a27"
  },
  {
   "a": "Michael Dombrowiecki",
   "b": "Shawn Gold",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 0.7,
   "avgExpected": 0.4,
   "aId": "3ac34ef1-17a5-4ab6-8d17-be4bd5a0a040",
   "bId": "e2d70cc7-b655-43d5-a059-063bfe722001"
  },
  {
   "a": "Kyle Martin",
   "b": "Vincent Rigoglioso",
   "team": "Bounce Tempest",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.1,
   "avgActual": -1,
   "avgExpected": -1.1,
   "aId": "639af9e8-08fd-496d-84d6-6e7859e8c6d3",
   "bId": "d0c9ae50-0cdc-4f72-9ece-0b996f323f73"
  },
  {
   "a": "Dan Ruble",
   "b": "Tim Bruno",
   "team": "Jersey Devil",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 2,
   "avgExpected": 1.8,
   "aId": "d411862a-491a-47dc-93a8-4a12f821afd7",
   "bId": "ef5a4f7c-58d1-42fa-81c2-1f9f09a60a0f"
  },
  {
   "a": "Eric Berlinger",
   "b": "Josh Rito",
   "team": "Flemington",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.1,
   "avgActual": -2.2,
   "avgExpected": -2.4,
   "aId": "2fda2042-6613-42f8-ad93-c3cff9a58f3e",
   "bId": "a4c54a14-35b4-4b90-aabd-3d81ad719f4d"
  },
  {
   "a": "Eric Berlinger",
   "b": "David Tabacco",
   "team": "Flemington",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.1,
   "avgActual": -4,
   "avgExpected": -4.2,
   "aId": "2fda2042-6613-42f8-ad93-c3cff9a58f3e",
   "bId": "717d97f0-4f08-476f-9c53-7595605bc0b0"
  },
  {
   "a": "Franklin Lupianez",
   "b": "Eric Berlinger",
   "team": "Flemington",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.1,
   "avgActual": -1.7,
   "avgExpected": -2,
   "aId": "17caef8b-84d4-4052-9695-7c74190925a1",
   "bId": "2fda2042-6613-42f8-ad93-c3cff9a58f3e"
  },
  {
   "a": "Jeff Axelrad",
   "b": "John Manuzza",
   "team": "Montville",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.1,
   "avgActual": -0.3,
   "avgExpected": -0.7,
   "aId": "27009a0b-037c-4934-9f52-d21c928ef173",
   "bId": "5d3156e6-7886-4184-9d2f-3ec44d72bb3b"
  },
  {
   "a": "Angelo Disipio",
   "b": "Arnold Poblete",
   "team": "Picklr Newtown",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 2.2,
   "avgExpected": 2,
   "aId": "79bb5bba-c449-4cdd-948b-fb5f8efdaebb",
   "bId": "c19e964a-d126-4e9f-9ce4-83c315f2f535"
  },
  {
   "a": "Michael Johnson",
   "b": "Gary Garretson",
   "team": "Picklr Newtown",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.1,
   "avgActual": 1.2,
   "avgExpected": 1,
   "aId": "4f98756a-9726-48fe-a241-2579f96eee16",
   "bId": "d4126276-6b83-42be-b943-9957df46992c"
  },
  {
   "a": "Hua Lin",
   "b": "Wensheng Yue",
   "team": "Dill Dinkers Freehold",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": 0.1,
   "avgActual": -1.4,
   "avgExpected": -1.6,
   "aId": "6b263caa-80f7-40d2-9248-559f91ffe71e",
   "bId": "d11f5bc0-8b23-488d-86fb-13eebe9e2257"
  },
  {
   "a": "Yashraj Kurani",
   "b": "George Vega Jr",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 2,
   "avgExpected": 1.8,
   "aId": "63950363-4747-4faf-b89a-eb88f8b9e81d",
   "bId": "be19bf10-b8a5-4626-8c10-f13ac708231d"
  },
  {
   "a": "Pritpal Singh",
   "b": "Ziyu Huang",
   "team": "Pickleball Kingdom Hamilton",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 0.5,
   "avgExpected": 0.3,
   "aId": "631b24ae-9bc2-4db3-964b-33f86933021e",
   "bId": "d06d8b3c-72d6-4ae3-ade8-d7cb7cbd70f7"
  },
  {
   "a": "Neil Dedhia",
   "b": "Jitendra Arora",
   "team": "Pickle House",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.1,
   "avgActual": -0.2,
   "avgExpected": -0.4,
   "aId": "20f3e907-41d8-40bb-8cef-cb6fed84a2aa",
   "bId": "a117b66b-f319-4fc0-8ee2-feb3f17767d0"
  },
  {
   "a": "Neil Dedhia",
   "b": "Aidan Fredericks",
   "team": "Pickle House",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 2.3,
   "avgExpected": 2.1,
   "aId": "20f3e907-41d8-40bb-8cef-cb6fed84a2aa",
   "bId": "a6d48fe9-1e3d-470b-8a0c-6061231f34ce"
  },
  {
   "a": "Sujoy Gayen",
   "b": "Hua Lin",
   "team": "Dill Dinkers Freehold",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 1,
   "avgExpected": 0.7,
   "aId": "159ef92f-0a83-4619-b65d-3ba60a2ba992",
   "bId": "6b263caa-80f7-40d2-9248-559f91ffe71e"
  },
  {
   "a": "Jim Boy Baring",
   "b": "Gary White",
   "team": "Premiere",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0,
   "avgActual": 1.3,
   "avgExpected": 1.4,
   "aId": "39c75937-8a66-4688-85f8-6c547400e441",
   "bId": "9a26eab9-96be-45e1-b380-2845a0e8e668"
  },
  {
   "a": "Allan Orchard",
   "b": "Sean Majury",
   "team": "Allstar Pickler",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0,
   "avgActual": 1,
   "avgExpected": 1,
   "aId": "4f34c672-f457-467f-98d8-7d5d6c8add16",
   "bId": "e41c0cda-fb97-4912-8e8a-fa99ff1725d0"
  },
  {
   "a": "Bruce Nguyen",
   "b": "Uzoma Nwankwo",
   "team": "APC Garden State",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 0,
   "avgActual": -1.1,
   "avgExpected": -1.1,
   "aId": "33233dc6-b78e-4deb-88d4-2742aacf5eb9",
   "bId": "c6482905-6954-4241-a6c3-ba077c367846"
  },
  {
   "a": "Jarred Goeckeler",
   "b": "Brandon Dejesus",
   "team": "Jersey Devil",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0,
   "avgActual": 4,
   "avgExpected": 3.9,
   "aId": "084f4667-3553-4f23-b4c7-62d6c8afb42a",
   "bId": "d50feac2-f147-47d2-8930-99b21b2842ba"
  },
  {
   "a": "Tom Kresky",
   "b": "Dan Ruble",
   "team": "Jersey Devil",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0,
   "avgActual": 2,
   "avgExpected": 2,
   "aId": "81875a5e-2b65-4152-bace-b4c96517579d",
   "bId": "d411862a-491a-47dc-93a8-4a12f821afd7"
  },
  {
   "a": "Brandon Dejesus",
   "b": "Tim Bruno",
   "team": "Jersey Devil",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 0,
   "avgActual": 3.7,
   "avgExpected": 3.7,
   "aId": "d50feac2-f147-47d2-8930-99b21b2842ba",
   "bId": "ef5a4f7c-58d1-42fa-81c2-1f9f09a60a0f"
  },
  {
   "a": "Jack Barry",
   "b": "Shreyas Suresh Hassan",
   "team": "PickleRage Union County",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 0,
   "avgActual": 2.4,
   "avgExpected": 2.4,
   "aId": "763342e5-4d13-45b7-8630-9d840cb7b8b3",
   "bId": "e1d9f3bc-ec4e-4690-810c-a67452049768"
  },
  {
   "a": "John Fallone",
   "b": "David Tabacco",
   "team": "Flemington",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0,
   "avgActual": -3,
   "avgExpected": -3,
   "aId": "5127c0b9-aaf8-49c5-a94f-bf92e7ae60f8",
   "bId": "717d97f0-4f08-476f-9c53-7595605bc0b0"
  },
  {
   "a": "Umang Pathak",
   "b": "Jesse Mynahan",
   "team": "Montville",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0,
   "avgActual": 2.8,
   "avgExpected": 2.8,
   "aId": "30ecad69-b82a-45aa-94c5-f0f7869a0d12",
   "bId": "66b5f8fe-1456-4ca5-ba6a-9ee4de2052cb"
  },
  {
   "a": "Andrew Mclean",
   "b": "Michael Johnson",
   "team": "Picklr Newtown",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": 0,
   "avgActual": -3.6,
   "avgExpected": -3.7,
   "aId": "2d439cdc-347e-4beb-9975-1b31bc46f2df",
   "bId": "4f98756a-9726-48fe-a241-2579f96eee16"
  },
  {
   "a": "Bill Violette",
   "b": "Steppan Konoplev",
   "team": "Dill Dinkers Newport",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0,
   "avgActual": -3.7,
   "avgExpected": -3.7,
   "aId": "63eeb91c-2c9c-4dbe-8662-58fbb1d95092",
   "bId": "8f076d51-25ba-4203-97f8-12194ba5b001"
  },
  {
   "a": "Jose Campos",
   "b": "Nesip Cengiz",
   "team": "Pickleball HQ",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0,
   "avgActual": 2.8,
   "avgExpected": 2.8,
   "aId": "197e3b9a-eded-4a87-8391-13a7c6d18c8f",
   "bId": "c737d3dd-dfe2-4f58-a095-fb40fc601866"
  },
  {
   "a": "Marc Padre",
   "b": "George Vega Jr",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0,
   "avgActual": 6,
   "avgExpected": 6,
   "aId": "a131a707-f20e-4838-9dcf-7cecb40c2705",
   "bId": "be19bf10-b8a5-4626-8c10-f13ac708231d"
  },
  {
   "a": "Josh Fink",
   "b": "David Shapiro",
   "team": "Flemington",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0,
   "avgActual": -0.7,
   "avgExpected": -0.8,
   "aId": "6a70d918-9cd3-47d0-a40a-901a406452b6",
   "bId": "c39cd158-0c19-4819-8653-18084e6ce982"
  },
  {
   "a": "Jr Burrs",
   "b": "Ryan Hathaway",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 2.7,
   "avgExpected": 2.9,
   "aId": "870112b1-afc3-4ff6-b784-7f872210bf37",
   "bId": "8b8ebfab-9618-4bba-a52b-6aa7679d3390"
  },
  {
   "a": "Graham Heavenrich",
   "b": "Harvey Mitchell",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": -0.1,
   "avgActual": 6.5,
   "avgExpected": 6.8,
   "aId": "27d8a10f-ee9b-467c-bf8c-4872ce63de90",
   "bId": "c5fa38d0-add2-462c-b3de-5b62dd4d1386"
  },
  {
   "a": "Mario Contreras",
   "b": "Jonathan Carter",
   "team": "Jersey Devil",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.1,
   "avgActual": -5,
   "avgExpected": -4.8,
   "aId": "323d96c3-4160-410b-96a5-87263e825f62",
   "bId": "33fe293d-5913-41af-8f89-4a431ed92ab7"
  },
  {
   "a": "Anil Kumar Jakkaladki",
   "b": "Jitendra Arora",
   "team": "Pickle House",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 0.3,
   "avgExpected": 0.4,
   "aId": "176df588-c3ff-4b50-a66a-4df99647254b",
   "bId": "a117b66b-f319-4fc0-8ee2-feb3f17767d0"
  },
  {
   "a": "Aaron Chan",
   "b": "Ziyu Huang",
   "team": "Pickleball Kingdom Hamilton",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -3,
   "avgExpected": -2.9,
   "aId": "57666861-23d0-4809-9556-b646579f2fd6",
   "bId": "d06d8b3c-72d6-4ae3-ade8-d7cb7cbd70f7"
  },
  {
   "a": "Eric Berlinger",
   "b": "Roberto Marcillo",
   "team": "Flemington",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 3.3,
   "avgExpected": 3.4,
   "aId": "2fda2042-6613-42f8-ad93-c3cff9a58f3e",
   "bId": "4516a66f-67b3-4981-a16d-036deb8db9bc"
  },
  {
   "a": "Franklin Lupianez",
   "b": "David Shapiro",
   "team": "Flemington",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 0.5,
   "avgExpected": 0.7,
   "aId": "17caef8b-84d4-4052-9695-7c74190925a1",
   "bId": "c39cd158-0c19-4819-8653-18084e6ce982"
  },
  {
   "a": "John Fallone",
   "b": "Craig Butler",
   "team": "Flemington",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": -0.1,
   "avgActual": 0.7,
   "avgExpected": 0.8,
   "aId": "5127c0b9-aaf8-49c5-a94f-bf92e7ae60f8",
   "bId": "b50c51e8-3ce3-44ec-98e7-6cc11a705f17"
  },
  {
   "a": "Dan Yang",
   "b": "Jack Barry",
   "team": "PickleRage Union County",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 1.4,
   "avgExpected": 1.6,
   "aId": "667a80aa-7b06-46b5-a4ae-6989224ab5f9",
   "bId": "763342e5-4d13-45b7-8630-9d840cb7b8b3"
  },
  {
   "a": "Jimmy Ramja",
   "b": "Kyle Korman",
   "team": "Pickleball HQ",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.1,
   "avgActual": 5,
   "avgExpected": 5.2,
   "aId": "ade57877-7c11-4a46-88bf-789a50906901",
   "bId": "d61a3828-6dfc-480a-b26a-534b0fe58268"
  },
  {
   "a": "Christopher Hendrickson",
   "b": "Jimmy Ramja",
   "team": "Pickleball HQ",
   "n": 8,
   "w": 7,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 4.9,
   "avgExpected": 5,
   "aId": "7fc1ed1b-4763-49b4-a077-46a92c0df3d6",
   "bId": "ade57877-7c11-4a46-88bf-789a50906901"
  },
  {
   "a": "Eric Berlinger",
   "b": "Josh Fink",
   "team": "Flemington",
   "n": 7,
   "w": 1,
   "l": 6,
   "synergy": -0.1,
   "avgActual": -3,
   "avgExpected": -2.8,
   "aId": "2fda2042-6613-42f8-ad93-c3cff9a58f3e",
   "bId": "6a70d918-9cd3-47d0-a40a-901a406452b6"
  },
  {
   "a": "Prashanth Koshy",
   "b": "Ritesh Patel",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.1,
   "avgActual": -1,
   "avgExpected": -0.7,
   "aId": "5b619b72-b78a-49ba-872d-c64db6084a67",
   "bId": "e2f86c8b-755e-42a0-8828-f2965f4fbbe7"
  },
  {
   "a": "Jordan Demcher",
   "b": "Jamison Rowles",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 4,
   "avgExpected": 4.3,
   "aId": "6d1beb10-bd5c-456f-95b5-1823752e8c62",
   "bId": "cae7c2db-b4d5-4927-9c44-ff92176b5507"
  },
  {
   "a": "Uday Acham",
   "b": "Siva Indupuru",
   "team": "Dill Dinkers Freehold",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.1,
   "avgActual": -1,
   "avgExpected": -0.8,
   "aId": "29646b59-bcf0-4a90-a70d-2824eb639c4c",
   "bId": "5f264528-efdb-4bda-88ed-8003f98c1c9b"
  },
  {
   "a": "Gary White",
   "b": "Christopher Giasi",
   "team": "Premiere",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 4.3,
   "avgExpected": 4.6,
   "aId": "9a26eab9-96be-45e1-b380-2845a0e8e668",
   "bId": "d6ca21c0-822e-422f-9721-34120ba90184"
  },
  {
   "a": "Ben Cortes",
   "b": "Ian Kohn",
   "team": "Dill Dinkers Freehold",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.1,
   "avgActual": -7,
   "avgExpected": -6.8,
   "aId": "4d89659f-a86c-4416-93f2-5c868fe0e984",
   "bId": "ef0e9803-0038-4cb9-ad16-a55c54f00339"
  },
  {
   "a": "Sujoy Gayen",
   "b": "Erik Reilly",
   "team": "Dill Dinkers Freehold",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.1,
   "avgActual": -2,
   "avgExpected": -1.8,
   "aId": "159ef92f-0a83-4619-b65d-3ba60a2ba992",
   "bId": "479815f2-1e14-4b96-9423-d99c15b2fe2b"
  },
  {
   "a": "Jack Barry",
   "b": "Vinay Mutt",
   "team": "PickleRage Union County",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.1,
   "avgActual": -1.7,
   "avgExpected": -1.5,
   "aId": "763342e5-4d13-45b7-8630-9d840cb7b8b3",
   "bId": "7caafc32-1aed-4fb7-b145-baf82cbbe2d2"
  },
  {
   "a": "Andrew Mclean",
   "b": "Gary Garretson",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 1,
   "avgExpected": 1.3,
   "aId": "2d439cdc-347e-4beb-9975-1b31bc46f2df",
   "bId": "d4126276-6b83-42be-b943-9957df46992c"
  },
  {
   "a": "Harsh Upadhyaya",
   "b": "Dilip Patel",
   "team": "Pickleball Kingdom Hamilton",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.2,
   "avgActual": -1.6,
   "avgExpected": -1.3,
   "aId": "3b9648e1-481c-4007-9932-d8df648f7bab",
   "bId": "7573445f-7dbd-4c2f-867a-ae95ae7ed168"
  },
  {
   "a": "Aaron Chan",
   "b": "Dhruv Dobariya",
   "team": "Pickleball Kingdom Hamilton",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.2,
   "avgActual": -6,
   "avgExpected": -5.6,
   "aId": "57666861-23d0-4809-9556-b646579f2fd6",
   "bId": "ac44fd3c-0c87-47aa-bf26-4333b632f524"
  },
  {
   "a": "Dilip Patel",
   "b": "Ziyu Huang",
   "team": "Pickleball Kingdom Hamilton",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.2,
   "avgActual": 0,
   "avgExpected": 0.5,
   "aId": "7573445f-7dbd-4c2f-867a-ae95ae7ed168",
   "bId": "d06d8b3c-72d6-4ae3-ade8-d7cb7cbd70f7"
  },
  {
   "a": "Jeff Laniado",
   "b": "Bill Olderman",
   "team": "Montville",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 1.7,
   "avgExpected": 2.1,
   "aId": "06d52e99-941a-4ced-9968-f56e6075105a",
   "bId": "30c847e2-9b5e-4ad7-851d-9d624f94a11b"
  },
  {
   "a": "Cullen Curley",
   "b": "David Reyes",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 1.3,
   "avgExpected": 1.7,
   "aId": "8cebf901-66b9-41d0-963d-12dac7334c8f",
   "bId": "adc043ce-7b2d-4ae9-87e0-c927f28c473a"
  },
  {
   "a": "Xan Hong",
   "b": "Aleks Mirkovic",
   "team": "Dill Dinkers Newport",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.2,
   "avgActual": -7.2,
   "avgExpected": -6.8,
   "aId": "e83b9a6f-83c6-4b66-a470-a0cae4f462df",
   "bId": "f006963a-4e8e-433d-8c9a-e278ac32ea9c"
  },
  {
   "a": "Noah Ludwigsen",
   "b": "Luca Hendrickson",
   "team": "Pickleball HQ",
   "n": 10,
   "w": 7,
   "l": 3,
   "synergy": -0.2,
   "avgActual": 3.5,
   "avgExpected": 3.8,
   "aId": "67f9503a-202f-4982-8e97-9b3383a35aee",
   "bId": "bd14255e-c654-49a4-99a1-26e02c67c7c7"
  },
  {
   "a": "Noah Ludwigsen",
   "b": "Christopher Hendrickson",
   "team": "Pickleball HQ",
   "n": 10,
   "w": 9,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 4.6,
   "avgExpected": 4.9,
   "aId": "67f9503a-202f-4982-8e97-9b3383a35aee",
   "bId": "7fc1ed1b-4763-49b4-a077-46a92c0df3d6"
  },
  {
   "a": "Christopher Hendrickson",
   "b": "Kyle Korman",
   "team": "Pickleball HQ",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 3.2,
   "avgExpected": 3.6,
   "aId": "7fc1ed1b-4763-49b4-a077-46a92c0df3d6",
   "bId": "d61a3828-6dfc-480a-b26a-534b0fe58268"
  },
  {
   "a": "Jeff Laniado",
   "b": "Umang Pathak",
   "team": "Montville",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.2,
   "avgActual": 4.7,
   "avgExpected": 5.1,
   "aId": "06d52e99-941a-4ced-9968-f56e6075105a",
   "bId": "30ecad69-b82a-45aa-94c5-f0f7869a0d12"
  },
  {
   "a": "Andrew Neave",
   "b": "Matheus Korndoerfer",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.2,
   "avgActual": 3.7,
   "avgExpected": 4,
   "aId": "2f7d6c14-4f06-470b-a4ba-f28199e823b0",
   "bId": "e1f41428-436c-436e-b752-af9cead487be"
  },
  {
   "a": "John Pineda",
   "b": "Eric Berlinger",
   "team": "Flemington",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.2,
   "avgActual": -4.5,
   "avgExpected": -4,
   "aId": "099e3831-88c1-4907-9869-f193db58b64b",
   "bId": "2fda2042-6613-42f8-ad93-c3cff9a58f3e"
  },
  {
   "a": "Jason Mcmanmon",
   "b": "Shawn Gold",
   "team": "Monroe",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.3,
   "avgActual": -2.8,
   "avgExpected": -2.2,
   "aId": "9adf9c4e-91c0-4483-af44-9ad4a86a81ce",
   "bId": "e2d70cc7-b655-43d5-a059-063bfe722001"
  },
  {
   "a": "Matt Enz",
   "b": "Jr Burrs",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": -0.3,
   "avgActual": 6.8,
   "avgExpected": 7.4,
   "aId": "683d1fdd-2fa0-4775-a8dd-0f733aa9f1a3",
   "bId": "870112b1-afc3-4ff6-b784-7f872210bf37"
  },
  {
   "a": "Kevin Sheehan",
   "b": "Dennis Yap",
   "team": "Home Court",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 4,
   "avgExpected": 4.6,
   "aId": "115f3958-d110-41f0-a04c-aa2f8e17a54f",
   "bId": "45ea05c6-ef48-4b0a-9f71-a640be038d08"
  },
  {
   "a": "Matt Inzerillo",
   "b": "Tyler Bayly",
   "team": "APC Garden State",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.3,
   "avgActual": -2,
   "avgExpected": -1.3,
   "aId": "51ceabf9-8258-4835-9835-c7d915220185",
   "bId": "642b7fc5-f304-459a-889e-e726dc9edeab"
  },
  {
   "a": "Pritpal Singh",
   "b": "Venu Yengala",
   "team": "Pickleball Kingdom Hamilton",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 2.6,
   "avgExpected": 3.2,
   "aId": "631b24ae-9bc2-4db3-964b-33f86933021e",
   "bId": "b4cbf5ad-5c2c-46bf-bf50-f50683964b46"
  },
  {
   "a": "Ren Macalalag",
   "b": "Francis Thai",
   "team": "PickleRage Union County",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -3.5,
   "avgExpected": -2.9,
   "aId": "24db47b3-dedc-418d-9210-3b5fea1952da",
   "bId": "a78758b7-fe50-4865-b059-83a9d177e857"
  },
  {
   "a": "John Manuzza",
   "b": "Brandon Tsang",
   "team": "Montville",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 2.8,
   "avgExpected": 3.3,
   "aId": "5d3156e6-7886-4184-9d2f-3ec44d72bb3b",
   "bId": "c80b5964-35f3-46b9-a0fa-9c3c9c673161"
  },
  {
   "a": "Bill Violette",
   "b": "Xan Hong",
   "team": "Dill Dinkers Newport",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -6,
   "avgExpected": -5.4,
   "aId": "63eeb91c-2c9c-4dbe-8662-58fbb1d95092",
   "bId": "e83b9a6f-83c6-4b66-a470-a0cae4f462df"
  },
  {
   "a": "Jason Wu",
   "b": "Arnold Poblete",
   "team": "Picklr Newtown",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": -0.3,
   "avgActual": 4.8,
   "avgExpected": 5.3,
   "aId": "5e42a5f7-22d1-4613-a829-b62121ddc704",
   "bId": "c19e964a-d126-4e9f-9ce4-83c315f2f535"
  },
  {
   "a": "Noah Ludwigsen",
   "b": "David Wheeler",
   "team": "Pickleball HQ",
   "n": 9,
   "w": 6,
   "l": 3,
   "synergy": -0.3,
   "avgActual": 1.6,
   "avgExpected": 1.9,
   "aId": "67f9503a-202f-4982-8e97-9b3383a35aee",
   "bId": "d335be77-6a7a-4f96-91c6-0a5cbcc8ea9f"
  },
  {
   "a": "Matthew Carrington",
   "b": "Jacob Yoo",
   "team": "Home Court",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.3,
   "avgActual": -3,
   "avgExpected": -2.3,
   "aId": "6a2f3777-38b2-4f02-b550-ce38395914d2",
   "bId": "df0934fe-e584-4b4f-a549-a90499016d33"
  },
  {
   "a": "Gianni Roman",
   "b": "Sean Majury",
   "team": "Allstar Pickler",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.4,
   "avgActual": -6.7,
   "avgExpected": -5.9,
   "aId": "22294f41-611f-4e8f-962e-377e43209945",
   "bId": "e41c0cda-fb97-4912-8e8a-fa99ff1725d0"
  },
  {
   "a": "Gianni Roman",
   "b": "Peter Chen",
   "team": "Allstar Pickler",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -9,
   "avgExpected": -8.1,
   "aId": "22294f41-611f-4e8f-962e-377e43209945",
   "bId": "8767c73e-fa5a-4e68-9ded-850b7ab50693"
  },
  {
   "a": "Mark Waters",
   "b": "Jimmy Shapiro",
   "team": "APC Garden State",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -1,
   "avgExpected": -0.4,
   "aId": "1baee0ad-faae-4c61-894a-a347710fdfea",
   "bId": "7b57c36d-a6eb-470e-b132-26d1f2a47b74"
  },
  {
   "a": "Uzoma Nwankwo",
   "b": "Andress Mims",
   "team": "APC Garden State",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -3.5,
   "avgExpected": -2.7,
   "aId": "c6482905-6954-4241-a6c3-ba077c367846",
   "bId": "e9878f35-8a92-4887-834e-d8a76881ae41"
  },
  {
   "a": "Alessio Muscara",
   "b": "Steven Hummel",
   "team": "Picklr Newtown",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": -0.4,
   "avgActual": 1.3,
   "avgExpected": 1.9,
   "aId": "4a5131e4-a912-4913-8ff5-9281e53c6974",
   "bId": "c5bf56d5-50a9-4a1f-a6f8-3f3f5af91cca"
  },
  {
   "a": "Andrew Mclean",
   "b": "Steven Hummel",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.4,
   "avgActual": -1,
   "avgExpected": -0.2,
   "aId": "2d439cdc-347e-4beb-9975-1b31bc46f2df",
   "bId": "c5bf56d5-50a9-4a1f-a6f8-3f3f5af91cca"
  },
  {
   "a": "Mathew Yang",
   "b": "Angelo Disipio",
   "team": "Picklr Newtown",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -0.4,
   "avgActual": -3,
   "avgExpected": -2.4,
   "aId": "12ec758b-f05d-40ec-b082-a76f07cbe792",
   "bId": "79bb5bba-c449-4cdd-948b-fb5f8efdaebb"
  },
  {
   "a": "Steppan Konoplev",
   "b": "Xan Hong",
   "team": "Dill Dinkers Newport",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -6,
   "avgExpected": -5,
   "aId": "8f076d51-25ba-4203-97f8-12194ba5b001",
   "bId": "e83b9a6f-83c6-4b66-a470-a0cae4f462df"
  },
  {
   "a": "Yashraj Kurani",
   "b": "Marc Padre",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.4,
   "avgActual": 6.7,
   "avgExpected": 7.6,
   "aId": "63950363-4747-4faf-b89a-eb88f8b9e81d",
   "bId": "a131a707-f20e-4838-9dcf-7cecb40c2705"
  },
  {
   "a": "Ali Bhimji",
   "b": "Carlos Rincon",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.4,
   "avgActual": 2.7,
   "avgExpected": 3.6,
   "aId": "3651f648-493a-4517-8085-a8b9cb086c07",
   "bId": "9886815c-3bf4-42b1-b650-1ec17ff2c167"
  },
  {
   "a": "Uttam Purohit",
   "b": "Salman Saad",
   "team": "Monroe",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -1.2,
   "avgExpected": -0.4,
   "aId": "5bec8637-0324-4af8-8084-3779e0f43521",
   "bId": "f7c4d103-d246-456d-8fd5-6418c6a0e002"
  },
  {
   "a": "Jason Feldman",
   "b": "Timothy Lynskey",
   "team": "Premiere",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.4,
   "avgActual": 5.7,
   "avgExpected": 6.7,
   "aId": "5636cdc5-7a65-4202-abbb-5999eee35ab3",
   "bId": "718c6948-a987-43bb-a1f3-cf7aead75edb"
  },
  {
   "a": "Daniel Hadley",
   "b": "Frederick Cox",
   "team": "Jersey Devil",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -0.4,
   "avgActual": -3.2,
   "avgExpected": -2.5,
   "aId": "23adcd68-130d-4176-b367-d3cd31260d21",
   "bId": "e8aee14f-dbc4-4e5c-be4a-4f948e2e13fc"
  },
  {
   "a": "Daniel Hadley",
   "b": "Jonathan Carter",
   "team": "Jersey Devil",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -0.4,
   "avgActual": -4.5,
   "avgExpected": -3.8,
   "aId": "23adcd68-130d-4176-b367-d3cd31260d21",
   "bId": "33fe293d-5913-41af-8f89-4a431ed92ab7"
  },
  {
   "a": "Joseph Lynskey",
   "b": "Jason Feldman",
   "team": "Premiere",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": -0.5,
   "avgActual": 6.3,
   "avgExpected": 7.3,
   "aId": "0e8c08b7-0e58-434b-8830-f37779f821dc",
   "bId": "5636cdc5-7a65-4202-abbb-5999eee35ab3"
  },
  {
   "a": "Dennis Yap",
   "b": "Jacob Yoo",
   "team": "Home Court",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.5,
   "avgActual": 2.5,
   "avgExpected": 3.5,
   "aId": "45ea05c6-ef48-4b0a-9f71-a640be038d08",
   "bId": "df0934fe-e584-4b4f-a549-a90499016d33"
  },
  {
   "a": "Jesse Mynahan",
   "b": "Brandon Tsang",
   "team": "Montville",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": -0.5,
   "avgActual": 1.3,
   "avgExpected": 2,
   "aId": "66b5f8fe-1456-4ca5-ba6a-9ee4de2052cb",
   "bId": "c80b5964-35f3-46b9-a0fa-9c3c9c673161"
  },
  {
   "a": "Eric Ruiz",
   "b": "Cullen Curley",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.5,
   "avgActual": 0.3,
   "avgExpected": 1.5,
   "aId": "505e9bce-f386-4a4f-9a41-a1d7e0bb0527",
   "bId": "8cebf901-66b9-41d0-963d-12dac7334c8f"
  },
  {
   "a": "Jimmy Duong",
   "b": "Gary Garretson",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -1.3,
   "avgExpected": -0.2,
   "aId": "06a3741d-10e5-462b-ba95-aa997d4eb8ea",
   "bId": "d4126276-6b83-42be-b943-9957df46992c"
  },
  {
   "a": "Kevin Lew",
   "b": "Erik Reilly",
   "team": "Dill Dinkers Freehold",
   "n": 10,
   "w": 2,
   "l": 8,
   "synergy": -0.5,
   "avgActual": -1.7,
   "avgExpected": -1,
   "aId": "03886b04-b474-4dda-b7f3-eb4f4954399c",
   "bId": "479815f2-1e14-4b96-9423-d99c15b2fe2b"
  },
  {
   "a": "Jesse Pettit",
   "b": "Xan Hong",
   "team": "Dill Dinkers Newport",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -9.7,
   "avgExpected": -8.5,
   "aId": "d6e30691-3b20-465b-8fa8-560017c20c15",
   "bId": "e83b9a6f-83c6-4b66-a470-a0cae4f462df"
  },
  {
   "a": "Rick Olafsson",
   "b": "Jesse Pettit",
   "team": "Dill Dinkers Newport",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -5.7,
   "avgExpected": -4.5,
   "aId": "088a0cec-3f4c-4100-afd4-33d4462dc7e3",
   "bId": "d6e30691-3b20-465b-8fa8-560017c20c15"
  },
  {
   "a": "Shreyas Suresh Hassan",
   "b": "Jonathan Dong",
   "team": "PickleRage Union County",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -1,
   "avgExpected": -0.2,
   "aId": "e1d9f3bc-ec4e-4690-810c-a67452049768",
   "bId": "edbeb52a-85fd-48ff-acc5-a5c8415a731d"
  },
  {
   "a": "Leland Weinert",
   "b": "Jr Burrs",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": -0.6,
   "avgActual": 3.8,
   "avgExpected": 4.9,
   "aId": "3196f425-e79a-4def-b7c3-bc3205976ba3",
   "bId": "870112b1-afc3-4ff6-b784-7f872210bf37"
  },
  {
   "a": "Venu Yengala",
   "b": "Ziyu Huang",
   "team": "Pickleball Kingdom Hamilton",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -1.8,
   "avgExpected": -0.8,
   "aId": "b4cbf5ad-5c2c-46bf-bf50-f50683964b46",
   "bId": "d06d8b3c-72d6-4ae3-ade8-d7cb7cbd70f7"
  },
  {
   "a": "Ren Macalalag",
   "b": "Sean Diamond",
   "team": "PickleRage Union County",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.6,
   "avgActual": -2,
   "avgExpected": -0.7,
   "aId": "24db47b3-dedc-418d-9210-3b5fea1952da",
   "bId": "635ba257-e1ed-4db3-8303-5f241388437e"
  },
  {
   "a": "Rohit Mankotia",
   "b": "Samuel Kashefska",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -0.7,
   "avgExpected": 0.7,
   "aId": "541e3e2d-76eb-4cd3-9bfe-9f94c0b9cdeb",
   "bId": "e4a31aff-39d6-49b3-95c4-131421e956a0"
  },
  {
   "a": "Bill Olderman",
   "b": "Umang Pathak",
   "team": "Montville",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.6,
   "avgActual": 3.3,
   "avgExpected": 4.8,
   "aId": "30c847e2-9b5e-4ad7-851d-9d624f94a11b",
   "bId": "30ecad69-b82a-45aa-94c5-f0f7869a0d12"
  },
  {
   "a": "Alessio Muscara",
   "b": "J-P Lautenschlager",
   "team": "Picklr Newtown",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.6,
   "avgActual": -2.5,
   "avgExpected": -1.6,
   "aId": "4a5131e4-a912-4913-8ff5-9281e53c6974",
   "bId": "5c3659f9-08d3-4745-832b-f7dd3f8c5ae5"
  },
  {
   "a": "Anthony Simonetti",
   "b": "Luca Hendrickson",
   "team": "Pickleball HQ",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": -0.6,
   "avgActual": 2.2,
   "avgExpected": 3.1,
   "aId": "3a2b64a1-6eb6-41e4-92fe-8da3d95af11b",
   "bId": "bd14255e-c654-49a4-99a1-26e02c67c7c7"
  },
  {
   "a": "Jared Rapoport",
   "b": "Yong Kim",
   "team": "Bounce Tempest",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.6,
   "avgActual": 2.8,
   "avgExpected": 3.9,
   "aId": "b19f3a31-ce60-4c40-b903-1fd60c95f649",
   "bId": "ca670ae8-0768-49d4-9984-f708cd52786c"
  },
  {
   "a": "Daniel Antonelli",
   "b": "Christopher Giasi",
   "team": "Premiere",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -0.8,
   "avgExpected": 0.3,
   "aId": "cd0eb94b-4d32-4ba9-bcdc-3fba205d90f0",
   "bId": "d6ca21c0-822e-422f-9721-34120ba90184"
  },
  {
   "a": "Derek Livingston",
   "b": "Frederick Cox",
   "team": "Jersey Devil",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -1,
   "avgExpected": 0,
   "aId": "593561e7-e873-4261-85ee-25b6ab524bfa",
   "bId": "e8aee14f-dbc4-4e5c-be4a-4f948e2e13fc"
  },
  {
   "a": "Jordan Demcher",
   "b": "Charles Evans",
   "team": "Bounce Malvern",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.6,
   "avgActual": 2,
   "avgExpected": 3,
   "aId": "6d1beb10-bd5c-456f-95b5-1823752e8c62",
   "bId": "ebc8788f-79c2-4204-a14a-47b6bc480d5d"
  },
  {
   "a": "Dan Yang",
   "b": "Jonathan Dong",
   "team": "PickleRage Union County",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -0.2,
   "avgExpected": 0.9,
   "aId": "667a80aa-7b06-46b5-a4ae-6989224ab5f9",
   "bId": "edbeb52a-85fd-48ff-acc5-a5c8415a731d"
  },
  {
   "a": "Leon Li",
   "b": "Nicholas Lugo",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -3.3,
   "avgExpected": -1.8,
   "aId": "528de93e-9cf4-480d-a9ba-5b20f6f23f87",
   "bId": "8f9be7cc-3ddf-436f-8727-02cbdd0d453f"
  },
  {
   "a": "Gary White",
   "b": "Matthew Schwartz",
   "team": "Premiere",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.7,
   "avgActual": 0.8,
   "avgExpected": 2.2,
   "aId": "9a26eab9-96be-45e1-b380-2845a0e8e668",
   "bId": "a432d3e0-17c2-4741-a4b2-7f72b7a81a5f"
  },
  {
   "a": "Graham Heavenrich",
   "b": "Andrew Neave",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.7,
   "avgActual": -0.2,
   "avgExpected": 1.1,
   "aId": "27d8a10f-ee9b-467c-bf8c-4872ce63de90",
   "bId": "2f7d6c14-4f06-470b-a4ba-f28199e823b0"
  },
  {
   "a": "Kevin Sheehan",
   "b": "Robert Huntley",
   "team": "Home Court",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -0.8,
   "avgExpected": 0.4,
   "aId": "115f3958-d110-41f0-a04c-aa2f8e17a54f",
   "bId": "b5dec967-9e3a-49b4-b136-597711d099cc"
  },
  {
   "a": "Elias Eid",
   "b": "Brandon Fulford",
   "team": "Allstar Pickler",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -4,
   "avgExpected": -2.4,
   "aId": "77f18b1c-db78-4d0e-b81d-6d1efde8bb08",
   "bId": "906383cd-e781-48bc-9004-0fc5427c7e62"
  },
  {
   "a": "Ping Peng",
   "b": "Sushil Rijhwani",
   "team": "Pickle House",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.7,
   "avgActual": 2,
   "avgExpected": 3.7,
   "aId": "7af65ce9-d7e3-4d00-b19b-653e6d2dc8d9",
   "bId": "8fea334f-ad12-4c45-b67d-a127ec551f4e"
  },
  {
   "a": "Dilip Patel",
   "b": "Venu Yengala",
   "team": "Pickleball Kingdom Hamilton",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -2.3,
   "avgExpected": -1.2,
   "aId": "7573445f-7dbd-4c2f-867a-ae95ae7ed168",
   "bId": "b4cbf5ad-5c2c-46bf-bf50-f50683964b46"
  },
  {
   "a": "Josh Rito",
   "b": "Craig Butler",
   "team": "Flemington",
   "n": 8,
   "w": 1,
   "l": 7,
   "synergy": -0.7,
   "avgActual": -5.2,
   "avgExpected": -4.2,
   "aId": "a4c54a14-35b4-4b90-aabd-3d81ad719f4d",
   "bId": "b50c51e8-3ce3-44ec-98e7-6cc11a705f17"
  },
  {
   "a": "Ayon Codner",
   "b": "Rohit Mankotia",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.7,
   "avgActual": 0.8,
   "avgExpected": 2.2,
   "aId": "497b0077-b7ae-4025-ad32-94c9da47ab80",
   "bId": "541e3e2d-76eb-4cd3-9bfe-9f94c0b9cdeb"
  },
  {
   "a": "Eric Ruiz",
   "b": "Michael Barndt",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.7,
   "avgActual": 1.7,
   "avgExpected": 3.3,
   "aId": "505e9bce-f386-4a4f-9a41-a1d7e0bb0527",
   "bId": "50853eee-28e0-4380-b379-35935eb2115a"
  },
  {
   "a": "Eric Ruiz",
   "b": "Rohit Mankotia",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -0.2,
   "avgExpected": 1.1,
   "aId": "505e9bce-f386-4a4f-9a41-a1d7e0bb0527",
   "bId": "541e3e2d-76eb-4cd3-9bfe-9f94c0b9cdeb"
  },
  {
   "a": "Niman Ahmeti",
   "b": "Nesip Cengiz",
   "team": "Pickleball HQ",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -2.6,
   "avgExpected": -1.3,
   "aId": "40681083-620d-4293-829f-91121323135c",
   "bId": "c737d3dd-dfe2-4f58-a095-fb40fc601866"
  },
  {
   "a": "Michael Vollmer",
   "b": "Hua Lin",
   "team": "Dill Dinkers Freehold",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -0.7,
   "avgActual": -4.2,
   "avgExpected": -2.9,
   "aId": "148387a8-f20a-44df-981d-0d9d2e7bf443",
   "bId": "6b263caa-80f7-40d2-9248-559f91ffe71e"
  },
  {
   "a": "Akash Raju",
   "b": "George Vega Jr",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.7,
   "avgActual": 1.7,
   "avgExpected": 3.4,
   "aId": "a2fc30f9-b494-4781-900e-1e0b7d531f02",
   "bId": "be19bf10-b8a5-4626-8c10-f13ac708231d"
  },
  {
   "a": "Matt Inzerillo",
   "b": "Jimmy Shapiro",
   "team": "APC Garden State",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -3.7,
   "avgExpected": -1.9,
   "aId": "51ceabf9-8258-4835-9835-c7d915220185",
   "bId": "7b57c36d-a6eb-470e-b132-26d1f2a47b74"
  },
  {
   "a": "J-P Lautenschlager",
   "b": "Mike Leach",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -4.3,
   "avgExpected": -2.8,
   "aId": "5c3659f9-08d3-4745-832b-f7dd3f8c5ae5",
   "bId": "a63211cf-31ed-448e-8c87-2aaaf8e84a7b"
  },
  {
   "a": "Angelo Disipio",
   "b": "Andy Ro",
   "team": "Picklr Newtown",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -2,
   "avgExpected": -0.7,
   "aId": "79bb5bba-c449-4cdd-948b-fb5f8efdaebb",
   "bId": "f3f6addc-ea42-4e7b-ac54-67bf69cffeeb"
  },
  {
   "a": "Timothy Lynskey",
   "b": "Eden Ksendzovsky",
   "team": "Premiere",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -3,
   "avgExpected": -1.4,
   "aId": "718c6948-a987-43bb-a1f3-cf7aead75edb",
   "bId": "75496a80-8064-40ae-ba4b-36c156d70885"
  },
  {
   "a": "Rajeeth Nadig",
   "b": "Neil Dedhia",
   "team": "Pickle House",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.7,
   "avgActual": 2,
   "avgExpected": 3.6,
   "aId": "20c15f19-5b27-4c9f-bc75-da3d516a015b",
   "bId": "20f3e907-41d8-40bb-8cef-cb6fed84a2aa"
  },
  {
   "a": "Erik Reilly",
   "b": "Siva Indupuru",
   "team": "Dill Dinkers Freehold",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -2.3,
   "avgExpected": -0.6,
   "aId": "479815f2-1e14-4b96-9423-d99c15b2fe2b",
   "bId": "5f264528-efdb-4bda-88ed-8003f98c1c9b"
  },
  {
   "a": "Sean Diamond",
   "b": "Vinay Mutt",
   "team": "PickleRage Union County",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -5.7,
   "avgExpected": -4,
   "aId": "635ba257-e1ed-4db3-8303-5f241388437e",
   "bId": "7caafc32-1aed-4fb7-b145-baf82cbbe2d2"
  },
  {
   "a": "Mario Contreras",
   "b": "Frederick Cox",
   "team": "Jersey Devil",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -0.8,
   "avgActual": -3.7,
   "avgExpected": -2.3,
   "aId": "323d96c3-4160-410b-96a5-87263e825f62",
   "bId": "e8aee14f-dbc4-4e5c-be4a-4f948e2e13fc"
  },
  {
   "a": "Bennett Pereira",
   "b": "Sushil Rijhwani",
   "team": "Pickle House",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.8,
   "avgActual": -2,
   "avgExpected": 0,
   "aId": "6a2ea39b-8b67-4cdf-83f7-c16fb3224655",
   "bId": "8fea334f-ad12-4c45-b67d-a127ec551f4e"
  },
  {
   "a": "Kevin Lew",
   "b": "Ben Cortes",
   "team": "Dill Dinkers Freehold",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.8,
   "avgActual": -3.8,
   "avgExpected": -2.6,
   "aId": "03886b04-b474-4dda-b7f3-eb4f4954399c",
   "bId": "4d89659f-a86c-4416-93f2-5c868fe0e984"
  },
  {
   "a": "Buyi Zhang",
   "b": "Saad Talat Siddiqui",
   "team": "Allstar Pickler",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.8,
   "avgActual": -7,
   "avgExpected": -5.4,
   "aId": "abd55992-7237-4a92-817d-3d39388369c9",
   "bId": "ebfeb773-e8cd-4b6a-aafd-ee2772540168"
  },
  {
   "a": "Mark Waters",
   "b": "Uzoma Nwankwo",
   "team": "APC Garden State",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.8,
   "avgActual": -4.3,
   "avgExpected": -2.4,
   "aId": "1baee0ad-faae-4c61-894a-a347710fdfea",
   "bId": "c6482905-6954-4241-a6c3-ba077c367846"
  },
  {
   "a": "Joseph Luka",
   "b": "Ken Weinstein",
   "team": "Bounce Tempest",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.8,
   "avgActual": 0,
   "avgExpected": 1.9,
   "aId": "482a6a13-3cb9-438b-8494-3f70a4f1cffe",
   "bId": "d07bda42-9d33-4c03-a7f3-a8a468083bdd"
  },
  {
   "a": "Harrison Bohrer",
   "b": "Lincoln Jensen",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.8,
   "avgActual": 0.8,
   "avgExpected": 2.3,
   "aId": "8a4095e6-2a3e-4a88-a6d2-8c1da135ce42",
   "bId": "98842749-0d7d-4b20-b78a-50c79d087699"
  },
  {
   "a": "Russell Cripps",
   "b": "Matt Enz",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.8,
   "avgActual": 2,
   "avgExpected": 3.9,
   "aId": "43d2bf2c-e732-4ce8-adae-035d989fa792",
   "bId": "683d1fdd-2fa0-4775-a8dd-0f733aa9f1a3"
  },
  {
   "a": "Kurt Skalamera",
   "b": "Jacob Rosengarten",
   "team": "Monroe",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -5.7,
   "avgExpected": -3.5,
   "aId": "04000200-8214-42ff-9a0d-2189ffaccd42",
   "bId": "b2f8ea85-7734-47a2-8ce7-bd968b3a51bc"
  },
  {
   "a": "David Brandolph",
   "b": "Jimmy Lee",
   "team": "Bounce Tempest",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.9,
   "avgActual": -0.5,
   "avgExpected": 1.3,
   "aId": "be10853a-1f2c-4b56-8fd7-902ddc686401",
   "bId": "f2c53e42-1eac-48dd-9c93-682ec5c1ac98"
  },
  {
   "a": "Allan Orchard",
   "b": "Brandon Fulford",
   "team": "Allstar Pickler",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.9,
   "avgActual": -3.4,
   "avgExpected": -1.7,
   "aId": "4f34c672-f457-467f-98d8-7d5d6c8add16",
   "bId": "906383cd-e781-48bc-9004-0fc5427c7e62"
  },
  {
   "a": "Ren Macalalag",
   "b": "Andy Knight",
   "team": "PickleRage Union County",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -0.9,
   "avgActual": -5.2,
   "avgExpected": -3.6,
   "aId": "24db47b3-dedc-418d-9210-3b5fea1952da",
   "bId": "fd8fa2a4-7f58-41d2-897e-e7df225c4ad0"
  },
  {
   "a": "Jose Campos",
   "b": "Thomas Moran",
   "team": "Pickleball HQ",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -0.9,
   "avgActual": -3.2,
   "avgExpected": -1.7,
   "aId": "197e3b9a-eded-4a87-8391-13a7c6d18c8f",
   "bId": "9571d7b5-fc34-4c77-a51f-c99b286e4304"
  },
  {
   "a": "Malay Kaity",
   "b": "David Fiscella",
   "team": "Dill Dinkers Newport",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.9,
   "avgActual": -4.7,
   "avgExpected": -2.6,
   "aId": "199ae8e1-22b4-4d8d-a41d-29cb984a3b33",
   "bId": "fa546fa2-45f5-4ad6-91ec-b6f6044ad8b0"
  },
  {
   "a": "Neil Dedhia",
   "b": "Varun Gurram",
   "team": "Pickle House",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.9,
   "avgActual": 1.7,
   "avgExpected": 3.8,
   "aId": "20f3e907-41d8-40bb-8cef-cb6fed84a2aa",
   "bId": "44864b51-f901-4470-a6bd-891495ffd132"
  },
  {
   "a": "Franklin Yiu",
   "b": "Gianni Roman",
   "team": "Allstar Pickler",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1,
   "avgActual": -6.5,
   "avgExpected": -4.6,
   "aId": "020affa0-bff4-49cb-94c0-a9eb9ba09b77",
   "bId": "22294f41-611f-4e8f-962e-377e43209945"
  },
  {
   "a": "Siva Indupuru",
   "b": "Big G",
   "team": "Dill Dinkers Freehold",
   "n": 6,
   "w": 0,
   "l": 6,
   "synergy": -1,
   "avgActual": -6.5,
   "avgExpected": -4.8,
   "aId": "5f264528-efdb-4bda-88ed-8003f98c1c9b",
   "bId": "f75516ca-4ed9-4ca2-84d3-a6af16b16a27"
  },
  {
   "a": "Jose Campos",
   "b": "Luca Hendrickson",
   "team": "Pickleball HQ",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1,
   "avgActual": 1,
   "avgExpected": 3.3,
   "aId": "197e3b9a-eded-4a87-8391-13a7c6d18c8f",
   "bId": "bd14255e-c654-49a4-99a1-26e02c67c7c7"
  },
  {
   "a": "Franklin Lupianez",
   "b": "Josh Fink",
   "team": "Flemington",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -1,
   "avgActual": -4.8,
   "avgExpected": -3.1,
   "aId": "17caef8b-84d4-4052-9695-7c74190925a1",
   "bId": "6a70d918-9cd3-47d0-a40a-901a406452b6"
  },
  {
   "a": "Christopher Monzon",
   "b": "Lj Dequina",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1,
   "avgActual": -3,
   "avgExpected": -1,
   "aId": "b205e6a7-d62d-42bf-b2d5-e7e5d0c109ec",
   "bId": "e4cb9932-d672-4089-a643-f2d16e3bd98a"
  },
  {
   "a": "Larry Minsky",
   "b": "Michael Johnson",
   "team": "Picklr Newtown",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -1,
   "avgActual": -3,
   "avgExpected": -1.2,
   "aId": "41f7a2a8-8fcd-4282-b501-cd5b83ec7440",
   "bId": "4f98756a-9726-48fe-a241-2579f96eee16"
  },
  {
   "a": "Paul Perumaly",
   "b": "Yong Kim",
   "team": "Bounce Tempest",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1,
   "avgActual": 0.5,
   "avgExpected": 2.4,
   "aId": "9d9eff5c-bb8e-47b7-b1e6-7e4c7055bb8b",
   "bId": "ca670ae8-0768-49d4-9984-f708cd52786c"
  },
  {
   "a": "Andrew Neave",
   "b": "Jamison Rowles",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1,
   "avgActual": -1.7,
   "avgExpected": 0.6,
   "aId": "2f7d6c14-4f06-470b-a4ba-f28199e823b0",
   "bId": "cae7c2db-b4d5-4927-9c44-ff92176b5507"
  },
  {
   "a": "Vinay Mutt",
   "b": "Andy Knight",
   "team": "PickleRage Union County",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1,
   "avgActual": -8.7,
   "avgExpected": -6.3,
   "aId": "7caafc32-1aed-4fb7-b145-baf82cbbe2d2",
   "bId": "fd8fa2a4-7f58-41d2-897e-e7df225c4ad0"
  },
  {
   "a": "Matt Enz",
   "b": "Harrison Bohrer",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -1.1,
   "avgActual": 1,
   "avgExpected": 3.2,
   "aId": "683d1fdd-2fa0-4775-a8dd-0f733aa9f1a3",
   "bId": "8a4095e6-2a3e-4a88-a6d2-8c1da135ce42"
  },
  {
   "a": "Aaron Chan",
   "b": "Jaiveer Narwal",
   "team": "Pickleball Kingdom Hamilton",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -7.3,
   "avgExpected": -4.8,
   "aId": "57666861-23d0-4809-9556-b646579f2fd6",
   "bId": "96042156-2ff1-44d0-9b96-8448964b4981"
  },
  {
   "a": "Kurt Skalamera",
   "b": "David Bogatyrev",
   "team": "Monroe",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -1.1,
   "avgActual": -4.4,
   "avgExpected": -2.5,
   "aId": "04000200-8214-42ff-9a0d-2189ffaccd42",
   "bId": "e77a59ee-8653-4d89-903c-75109d3f17c8"
  },
  {
   "a": "Eden Ksendzovsky",
   "b": "Daniel Antonelli",
   "team": "Premiere",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -2,
   "avgExpected": -0.1,
   "aId": "75496a80-8064-40ae-ba4b-36c156d70885",
   "bId": "cd0eb94b-4d32-4ba9-bcdc-3fba205d90f0"
  },
  {
   "a": "Dan Ruble",
   "b": "Christopher Uston",
   "team": "Jersey Devil",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.1,
   "avgActual": 2,
   "avgExpected": 4.2,
   "aId": "d411862a-491a-47dc-93a8-4a12f821afd7",
   "bId": "e1f6c6fa-db86-4fed-9faa-dbc2fe29f373"
  },
  {
   "a": "Akash Raju",
   "b": "Corey Chen",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.1,
   "avgActual": 0.7,
   "avgExpected": 3.1,
   "aId": "a2fc30f9-b494-4781-900e-1e0b7d531f02",
   "bId": "b549a93c-acec-4419-9e30-5d8375518d2d"
  },
  {
   "a": "Marc Kunesch",
   "b": "Robert Huntley",
   "team": "Home Court",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.2,
   "avgActual": -2.7,
   "avgExpected": -0.2,
   "aId": "aeaef27d-01b3-4fb2-91f3-4be8c7602aa3",
   "bId": "b5dec967-9e3a-49b4-b136-597711d099cc"
  },
  {
   "a": "Jimmy Shapiro",
   "b": "Chris Machuzak",
   "team": "APC Garden State",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.2,
   "avgActual": -2.7,
   "avgExpected": -0.4,
   "aId": "7b57c36d-a6eb-470e-b132-26d1f2a47b74",
   "bId": "dba4c9d8-6ffb-49ae-99d1-79c341a68de7"
  },
  {
   "a": "Steppan Konoplev",
   "b": "Aleks Mirkovic",
   "team": "Dill Dinkers Newport",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.2,
   "avgActual": -5.7,
   "avgExpected": -2.8,
   "aId": "8f076d51-25ba-4203-97f8-12194ba5b001",
   "bId": "f006963a-4e8e-433d-8c9a-e278ac32ea9c"
  },
  {
   "a": "Anthony Simonetti",
   "b": "David Wheeler",
   "team": "Pickleball HQ",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -1.2,
   "avgActual": 0.8,
   "avgExpected": 2.9,
   "aId": "3a2b64a1-6eb6-41e4-92fe-8da3d95af11b",
   "bId": "d335be77-6a7a-4f96-91c6-0a5cbcc8ea9f"
  },
  {
   "a": "Thomas Moran",
   "b": "Jimmy Ramja",
   "team": "Pickleball HQ",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.2,
   "avgActual": -2,
   "avgExpected": 0.3,
   "aId": "9571d7b5-fc34-4c77-a51f-c99b286e4304",
   "bId": "ade57877-7c11-4a46-88bf-789a50906901"
  },
  {
   "a": "Siva Indupuru",
   "b": "Ian Kohn",
   "team": "Dill Dinkers Freehold",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.2,
   "avgActual": -7.7,
   "avgExpected": -4.9,
   "aId": "5f264528-efdb-4bda-88ed-8003f98c1c9b",
   "bId": "ef0e9803-0038-4cb9-ad16-a55c54f00339"
  },
  {
   "a": "Vinay Mutt",
   "b": "Shreyas Suresh Hassan",
   "team": "PickleRage Union County",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.2,
   "avgActual": -5,
   "avgExpected": -2.6,
   "aId": "7caafc32-1aed-4fb7-b145-baf82cbbe2d2",
   "bId": "e1d9f3bc-ec4e-4690-810c-a67452049768"
  },
  {
   "a": "Kyle Martin",
   "b": "Daniel Borgia",
   "team": "Bounce Tempest",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.3,
   "avgActual": -1.3,
   "avgExpected": 1.7,
   "aId": "639af9e8-08fd-496d-84d6-6e7859e8c6d3",
   "bId": "ae3cd925-c856-44dd-9cf5-3a2bd343adf2"
  },
  {
   "a": "Ethan Fu",
   "b": "Ken Weinstein",
   "team": "Bounce Tempest",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.3,
   "avgActual": -3.3,
   "avgExpected": -0.4,
   "aId": "a8585e9c-872e-466c-9583-9680e557f757",
   "bId": "d07bda42-9d33-4c03-a7f3-a8a468083bdd"
  },
  {
   "a": "Derek Livingston",
   "b": "Steve Hong",
   "team": "Jersey Devil",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.3,
   "avgActual": -5.7,
   "avgExpected": -3.1,
   "aId": "593561e7-e873-4261-85ee-25b6ab524bfa",
   "bId": "a861a127-253c-4cb2-a1d6-93a37558b93a"
  },
  {
   "a": "Tom Kresky",
   "b": "Tim Bruno",
   "team": "Jersey Devil",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -1.3,
   "avgActual": -1.6,
   "avgExpected": 0.8,
   "aId": "81875a5e-2b65-4152-bace-b4c96517579d",
   "bId": "ef5a4f7c-58d1-42fa-81c2-1f9f09a60a0f"
  },
  {
   "a": "Mark Waters",
   "b": "Chris Machuzak",
   "team": "APC Garden State",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.3,
   "avgActual": -5.7,
   "avgExpected": -3.1,
   "aId": "1baee0ad-faae-4c61-894a-a347710fdfea",
   "bId": "dba4c9d8-6ffb-49ae-99d1-79c341a68de7"
  },
  {
   "a": "David Tabacco",
   "b": "Josh Rito",
   "team": "Flemington",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.3,
   "avgActual": -9.7,
   "avgExpected": -7.1,
   "aId": "717d97f0-4f08-476f-9c53-7595605bc0b0",
   "bId": "a4c54a14-35b4-4b90-aabd-3d81ad719f4d"
  },
  {
   "a": "Akash Raju",
   "b": "Jun Zhi Tan",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": -1.3,
   "avgActual": 3.8,
   "avgExpected": 5.9,
   "aId": "a2fc30f9-b494-4781-900e-1e0b7d531f02",
   "bId": "d0e16b4b-7708-425d-ae9d-e3992c4e7fe2"
  },
  {
   "a": "Larry Minsky",
   "b": "Gary Garretson",
   "team": "Picklr Newtown",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.3,
   "avgActual": -5,
   "avgExpected": -2.4,
   "aId": "41f7a2a8-8fcd-4282-b501-cd5b83ec7440",
   "bId": "d4126276-6b83-42be-b943-9957df46992c"
  },
  {
   "a": "Rakshit Maddur Gopinath",
   "b": "Varun Gurram",
   "team": "Pickle House",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.3,
   "avgActual": -2.2,
   "avgExpected": 0.3,
   "aId": "1448a485-6172-48af-96e0-f4876e9c5268",
   "bId": "44864b51-f901-4470-a6bd-891495ffd132"
  },
  {
   "a": "Dan Carpenter",
   "b": "Mario Contreras",
   "team": "Jersey Devil",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.3,
   "avgActual": -2.5,
   "avgExpected": 0.2,
   "aId": "2811dd08-7b50-455b-bc23-46b064a912eb",
   "bId": "323d96c3-4160-410b-96a5-87263e825f62"
  },
  {
   "a": "Aaron Chan",
   "b": "Pritpal Singh",
   "team": "Pickleball Kingdom Hamilton",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.4,
   "avgActual": -5,
   "avgExpected": -2.2,
   "aId": "57666861-23d0-4809-9556-b646579f2fd6",
   "bId": "631b24ae-9bc2-4db3-964b-33f86933021e"
  },
  {
   "a": "Roberto Marcillo",
   "b": "Craig Butler",
   "team": "Flemington",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.4,
   "avgActual": -2,
   "avgExpected": 0.8,
   "aId": "4516a66f-67b3-4981-a16d-036deb8db9bc",
   "bId": "b50c51e8-3ce3-44ec-98e7-6cc11a705f17"
  },
  {
   "a": "Sean Diamond",
   "b": "Andy Knight",
   "team": "PickleRage Union County",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.4,
   "avgActual": -8.5,
   "avgExpected": -5.8,
   "aId": "635ba257-e1ed-4db3-8303-5f241388437e",
   "bId": "fd8fa2a4-7f58-41d2-897e-e7df225c4ad0"
  },
  {
   "a": "Josh Fink",
   "b": "David Tabacco",
   "team": "Flemington",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.4,
   "avgActual": -7.5,
   "avgExpected": -4.7,
   "aId": "6a70d918-9cd3-47d0-a40a-901a406452b6",
   "bId": "717d97f0-4f08-476f-9c53-7595605bc0b0"
  },
  {
   "a": "Tom Kresky",
   "b": "Brandon Dejesus",
   "team": "Jersey Devil",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.4,
   "avgActual": -1.2,
   "avgExpected": 1.5,
   "aId": "81875a5e-2b65-4152-bace-b4c96517579d",
   "bId": "d50feac2-f147-47d2-8930-99b21b2842ba"
  },
  {
   "a": "Jonathan Carter",
   "b": "Brandon Dejesus",
   "team": "Jersey Devil",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -1.5,
   "avgActual": -1,
   "avgExpected": 1.7,
   "aId": "33fe293d-5913-41af-8f89-4a431ed92ab7",
   "bId": "d50feac2-f147-47d2-8930-99b21b2842ba"
  },
  {
   "a": "Franklin Lupianez",
   "b": "Josh Rito",
   "team": "Flemington",
   "n": 6,
   "w": 0,
   "l": 6,
   "synergy": -1.5,
   "avgActual": -6.2,
   "avgExpected": -3.7,
   "aId": "17caef8b-84d4-4052-9695-7c74190925a1",
   "bId": "a4c54a14-35b4-4b90-aabd-3d81ad719f4d"
  },
  {
   "a": "Matt Inzerillo",
   "b": "Chris Machuzak",
   "team": "APC Garden State",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.5,
   "avgActual": -7.3,
   "avgExpected": -3.9,
   "aId": "51ceabf9-8258-4835-9835-c7d915220185",
   "bId": "dba4c9d8-6ffb-49ae-99d1-79c341a68de7"
  },
  {
   "a": "Mathew Yang",
   "b": "Steven Hummel",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.5,
   "avgActual": -4.3,
   "avgExpected": -0.8,
   "aId": "12ec758b-f05d-40ec-b082-a76f07cbe792",
   "bId": "c5bf56d5-50a9-4a1f-a6f8-3f3f5af91cca"
  },
  {
   "a": "Matt Inzerillo",
   "b": "Andress Mims",
   "team": "APC Garden State",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.5,
   "avgActual": -5.7,
   "avgExpected": -2.7,
   "aId": "51ceabf9-8258-4835-9835-c7d915220185",
   "bId": "e9878f35-8a92-4887-834e-d8a76881ae41"
  },
  {
   "a": "Bill Olderman",
   "b": "Cesar Santamaria-Aranda",
   "team": "Montville",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1.5,
   "avgActual": -0.7,
   "avgExpected": 2.9,
   "aId": "30c847e2-9b5e-4ad7-851d-9d624f94a11b",
   "bId": "fbde98cb-9eee-431b-b164-244249c26728"
  },
  {
   "a": "Sean Diamond",
   "b": "Steve Lerner",
   "team": "PickleRage Union County",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.5,
   "avgActual": -7.3,
   "avgExpected": -3.9,
   "aId": "635ba257-e1ed-4db3-8303-5f241388437e",
   "bId": "d634d992-c9d8-4e31-acb7-45b1161eee19"
  },
  {
   "a": "Bryan Mccourt",
   "b": "Ricky Jutkiewicz",
   "team": "Home Court",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.6,
   "avgActual": -2.2,
   "avgExpected": 1,
   "aId": "74f9fe34-f8c5-49dd-b504-939d0b4f5aaa",
   "bId": "a24bc2af-aca9-45dd-a827-12fb12f7b784"
  },
  {
   "a": "Larry Minsky",
   "b": "Mike Leach",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.6,
   "avgActual": -8.7,
   "avgExpected": -4.9,
   "aId": "41f7a2a8-8fcd-4282-b501-cd5b83ec7440",
   "bId": "a63211cf-31ed-448e-8c87-2aaaf8e84a7b"
  },
  {
   "a": "Anil Kumar Jakkaladki",
   "b": "Sree Harsha Konduru",
   "team": "Pickle House",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.7,
   "avgActual": 0,
   "avgExpected": 3.4,
   "aId": "176df588-c3ff-4b50-a66a-4df99647254b",
   "bId": "439cf2c1-044c-450c-9dcc-4fdeafbb81cd"
  },
  {
   "a": "Niman Ahmeti",
   "b": "Kyle Korman",
   "team": "Pickleball HQ",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.7,
   "avgActual": -3.5,
   "avgExpected": -0.1,
   "aId": "40681083-620d-4293-829f-91121323135c",
   "bId": "d61a3828-6dfc-480a-b26a-534b0fe58268"
  },
  {
   "a": "Michael Gilbert",
   "b": "Matthew Carrington",
   "team": "Home Court",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.7,
   "avgActual": -7.7,
   "avgExpected": -4.3,
   "aId": "5acb8305-77d8-4089-88b6-9fbfa9400f6a",
   "bId": "6a2f3777-38b2-4f02-b550-ce38395914d2"
  },
  {
   "a": "Jimmy Duong",
   "b": "Mike Leach",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.7,
   "avgActual": -9.7,
   "avgExpected": -5.7,
   "aId": "06a3741d-10e5-462b-ba95-aa997d4eb8ea",
   "bId": "a63211cf-31ed-448e-8c87-2aaaf8e84a7b"
  },
  {
   "a": "Rick Wickenheisser",
   "b": "Craig Butler",
   "team": "Flemington",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.7,
   "avgActual": -5.5,
   "avgExpected": -2.1,
   "aId": "741048e8-2c91-4466-bb1c-1a624d1dabd9",
   "bId": "b50c51e8-3ce3-44ec-98e7-6cc11a705f17"
  },
  {
   "a": "Sushil Rijhwani",
   "b": "Aidan Fredericks",
   "team": "Pickle House",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.9,
   "avgActual": -7,
   "avgExpected": -2.5,
   "aId": "8fea334f-ad12-4c45-b67d-a127ec551f4e",
   "bId": "a6d48fe9-1e3d-470b-8a0c-6061231f34ce"
  },
  {
   "a": "Daniel Borgia",
   "b": "David Brandolph",
   "team": "Bounce Tempest",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -2,
   "avgActual": 0.3,
   "avgExpected": 5.1,
   "aId": "ae3cd925-c856-44dd-9cf5-3a2bd343adf2",
   "bId": "be10853a-1f2c-4b56-8fd7-902ddc686401"
  },
  {
   "a": "Harsh Upadhyaya",
   "b": "Dhruv Dobariya",
   "team": "Pickleball Kingdom Hamilton",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -2.1,
   "avgActual": -7.7,
   "avgExpected": -3.5,
   "aId": "3b9648e1-481c-4007-9932-d8df648f7bab",
   "bId": "ac44fd3c-0c87-47aa-bf26-4333b632f524"
  },
  {
   "a": "Sushil Rijhwani",
   "b": "Jitendra Arora",
   "team": "Pickle House",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.2,
   "avgActual": -5.3,
   "avgExpected": -0.3,
   "aId": "8fea334f-ad12-4c45-b67d-a127ec551f4e",
   "bId": "a117b66b-f319-4fc0-8ee2-feb3f17767d0"
  },
  {
   "a": "Eric Berlinger",
   "b": "David Shapiro",
   "team": "Flemington",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -2.2,
   "avgActual": -7,
   "avgExpected": -3.1,
   "aId": "2fda2042-6613-42f8-ad93-c3cff9a58f3e",
   "bId": "c39cd158-0c19-4819-8653-18084e6ce982"
  },
  {
   "a": "Timothy Lynskey",
   "b": "Matthew Schwartz",
   "team": "Premiere",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -2.3,
   "avgActual": -2.7,
   "avgExpected": 1.8,
   "aId": "718c6948-a987-43bb-a1f3-cf7aead75edb",
   "bId": "a432d3e0-17c2-4741-a4b2-7f72b7a81a5f"
  }
 ],
 "matches": [
  {
   "result": "away",
   "week": 1,
   "home": "Monroe",
   "away": "Premiere",
   "time": "2026-08-25T19:00:00",
   "complete": true,
   "homePoints": 536,
   "awayPoints": 647,
   "homeGW": 6,
   "awayGW": 26,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "David Bogatyrev",
      "John Coyle"
     ],
     "a": [
      "Jason Feldman",
      "Matthew Schwartz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jacob Rosengarten",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Jim Boy Baring",
      "Daniel Antonelli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Tayon Hart",
      "Kurt Skalamera"
     ],
     "a": [
      "Nacio Marshall",
      "Joseph Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 28,
     "as": 30,
     "h": [
      "Jason Mcmanmon",
      "Shawn Gold"
     ],
     "a": [
      "Gary White",
      "Michael Mazzola"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Michael Dombrowiecki",
      "Cory Mintz"
     ],
     "a": [
      "Jason Feldman",
      "Nacio Marshall"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "David Bogatyrev",
      "Shawn Gold"
     ],
     "a": [
      "Jim Boy Baring",
      "Michael Mazzola"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Tayon Hart",
      "John Coyle"
     ],
     "a": [
      "Matthew Schwartz",
      "Joseph Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jason Mcmanmon",
      "Jacob Rosengarten"
     ],
     "a": [
      "Gary White",
      "Daniel Antonelli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Tayon Hart",
      "Kurt Skalamera"
     ],
     "a": [
      "Matthew Schwartz",
      "Jason Feldman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Shawn Gold",
      "David Bogatyrev"
     ],
     "a": [
      "Nacio Marshall",
      "Daniel Antonelli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jason Mcmanmon",
      "Jacob Rosengarten"
     ],
     "a": [
      "Jim Boy Baring",
      "Gary White"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "John Coyle",
      "Stephen Fredericksen"
     ],
     "a": [
      "Joseph Lynskey",
      "Michael Mazzola"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Michael Dombrowiecki",
      "David Bogatyrev"
     ],
     "a": [
      "Jim Boy Baring",
      "Daniel Antonelli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jacob Rosengarten",
      "Stephen Fredericksen"
     ],
     "a": [
      "Nacio Marshall",
      "Michael Mazzola"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Shawn Gold",
      "Tayon Hart"
     ],
     "a": [
      "Matthew Schwartz",
      "Joseph Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Kurt Skalamera",
      "Cory Mintz"
     ],
     "a": [
      "Jason Feldman",
      "Gary White"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "David Bogatyrev",
      "Cory Mintz"
     ],
     "a": [
      "Jason Feldman",
      "Gary White"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jacob Rosengarten",
      "Kurt Skalamera"
     ],
     "a": [
      "Matthew Schwartz",
      "Daniel Antonelli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Tayon Hart",
      "John Coyle"
     ],
     "a": [
      "Nacio Marshall",
      "Joseph Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jason Mcmanmon",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Jim Boy Baring",
      "Michael Mazzola"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Shawn Gold",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Nacio Marshall",
      "Daniel Antonelli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Cory Mintz",
      "Kurt Skalamera"
     ],
     "a": [
      "Joseph Lynskey",
      "Jason Feldman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jason Mcmanmon",
      "Stephen Fredericksen"
     ],
     "a": [
      "Matthew Schwartz",
      "Michael Mazzola"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "David Bogatyrev",
      "John Coyle"
     ],
     "a": [
      "Jim Boy Baring",
      "Gary White"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jacob Rosengarten",
      "Stephen Fredericksen"
     ],
     "a": [
      "Jim Boy Baring",
      "Joseph Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jason Mcmanmon",
      "Kurt Skalamera"
     ],
     "a": [
      "Matthew Schwartz",
      "Gary White"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "David Bogatyrev",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Nacio Marshall",
      "Jason Feldman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Tayon Hart",
      "Cory Mintz"
     ],
     "a": [
      "Michael Mazzola",
      "Daniel Antonelli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "David Bogatyrev",
      "Stephen Fredericksen"
     ],
     "a": [
      "Nacio Marshall",
      "Michael Mazzola"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jason Mcmanmon",
      "Tayon Hart"
     ],
     "a": [
      "Matthew Schwartz",
      "Gary White"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jacob Rosengarten",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Jim Boy Baring",
      "Joseph Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "John Coyle",
      "Cory Mintz"
     ],
     "a": [
      "Jason Feldman",
      "Daniel Antonelli"
     ]
    }
   ],
   "subs": [
    "Michael Mazzola",
    "Jim Boy Baring",
    "Nacio Marshall"
   ]
  },
  {
   "result": "home",
   "week": 1,
   "home": "Bounce Malvern",
   "away": "Bounce Tempest",
   "time": "2026-08-25T19:30:00",
   "complete": true,
   "homePoints": 639,
   "awayPoints": 535,
   "homeGW": 23,
   "awayGW": 9,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Dan Ladislaw",
      "Jordan Demcher"
     ],
     "a": [
      "Daniel Borgia",
      "Ken Weinstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Matt Enz",
      "Harvey Mitchell"
     ],
     "a": [
      "Paul Perumaly",
      "Jimmy Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ryan Hathaway",
      "Andrew Neave"
     ],
     "a": [
      "David Brandolph",
      "Jared Rapoport"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jr Burrs",
      "Leland Weinert"
     ],
     "a": [
      "Ethan Fu",
      "Kyle Martin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Leland Weinert",
      "Matheus Korndoerfer"
     ],
     "a": [
      "David Brandolph",
      "Vincent Rigoglioso"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jr Burrs",
      "Ryan Hathaway"
     ],
     "a": [
      "Ken Weinstein",
      "Kyle Martin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Harrison Bohrer",
      "Graham Heavenrich"
     ],
     "a": [
      "Jimmy Lee",
      "Jared Rapoport"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jordan Demcher",
      "Andrew Neave"
     ],
     "a": [
      "Paul Perumaly",
      "Ethan Fu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Graham Heavenrich",
      "Harvey Mitchell"
     ],
     "a": [
      "David Brandolph",
      "Ken Weinstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Harrison Bohrer",
      "Ryan Hathaway"
     ],
     "a": [
      "Jimmy Lee",
      "Vincent Rigoglioso"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Matt Enz",
      "Andrew Neave"
     ],
     "a": [
      "Paul Perumaly",
      "Kyle Martin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Dan Ladislaw",
      "Leland Weinert"
     ],
     "a": [
      "Daniel Borgia",
      "Jared Rapoport"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jr Burrs",
      "Graham Heavenrich"
     ],
     "a": [
      "Jimmy Lee",
      "Ken Weinstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jordan Demcher",
      "Andrew Neave"
     ],
     "a": [
      "Paul Perumaly",
      "Vincent Rigoglioso"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Dan Ladislaw",
      "Matheus Korndoerfer"
     ],
     "a": [
      "Daniel Borgia",
      "Kyle Martin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Matt Enz",
      "Leland Weinert"
     ],
     "a": [
      "David Brandolph",
      "Ethan Fu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ryan Hathaway",
      "Matheus Korndoerfer"
     ],
     "a": [
      "David Brandolph",
      "Paul Perumaly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jordan Demcher",
      "Graham Heavenrich"
     ],
     "a": [
      "Daniel Borgia",
      "Jimmy Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Harrison Bohrer",
      "Harvey Mitchell"
     ],
     "a": [
      "Kyle Martin",
      "Jared Rapoport"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Matt Enz",
      "Andrew Neave"
     ],
     "a": [
      "Vincent Rigoglioso",
      "Ethan Fu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Harvey Mitchell",
      "Jordan Demcher"
     ],
     "a": [
      "Daniel Borgia",
      "Paul Perumaly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Harrison Bohrer",
      "Dan Ladislaw"
     ],
     "a": [
      "David Brandolph",
      "Kyle Martin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jr Burrs",
      "Matt Enz"
     ],
     "a": [
      "Vincent Rigoglioso",
      "Jared Rapoport"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Matheus Korndoerfer",
      "Leland Weinert"
     ],
     "a": [
      "Ken Weinstein",
      "Ethan Fu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Harvey Mitchell",
      "Dan Ladislaw"
     ],
     "a": [
      "David Brandolph",
      "Jimmy Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jr Burrs",
      "Matheus Korndoerfer"
     ],
     "a": [
      "Paul Perumaly",
      "Ken Weinstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ryan Hathaway",
      "Leland Weinert"
     ],
     "a": [
      "Daniel Borgia",
      "Vincent Rigoglioso"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Graham Heavenrich",
      "Andrew Neave"
     ],
     "a": [
      "Jared Rapoport",
      "Ethan Fu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Jordan Demcher",
      "Ryan Hathaway"
     ],
     "a": [
      "David Brandolph",
      "Daniel Borgia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Harvey Mitchell",
      "Jr Burrs"
     ],
     "a": [
      "Vincent Rigoglioso",
      "Kyle Martin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Matt Enz",
      "Harrison Bohrer"
     ],
     "a": [
      "Ken Weinstein",
      "Jared Rapoport"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Graham Heavenrich",
      "Matheus Korndoerfer"
     ],
     "a": [
      "Jimmy Lee",
      "Ethan Fu"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 1,
   "home": "Allstar Pickler",
   "away": "Home Court",
   "time": "2026-08-25T19:30:00",
   "complete": true,
   "homePoints": 564,
   "awayPoints": 693,
   "homeGW": 8,
   "awayGW": 24,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Elias Eid",
      "Xilin Zhao"
     ],
     "a": [
      "Bryan Mccourt",
      "Michael Vincent"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Wen Jin",
      "Allan Orchard"
     ],
     "a": [
      "Ricky Jutkiewicz",
      "Dennis Yap"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Franklin Yiu",
      "Gianni Roman"
     ],
     "a": [
      "Robert Huntley",
      "Kevin Sheehan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Brandon Fulford",
      "Sean Majury"
     ],
     "a": [
      "Marc Kunesch",
      "Jacob Yoo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Wen Jin",
      "Allan Orchard"
     ],
     "a": [
      "Bryan Mccourt",
      "Michael Vincent"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Elias Eid",
      "Xilin Zhao"
     ],
     "a": [
      "Ricky Jutkiewicz",
      "Dennis Yap"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Brandon Fulford",
      "Sean Majury"
     ],
     "a": [
      "Robert Huntley",
      "Kevin Sheehan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Franklin Yiu",
      "Gianni Roman"
     ],
     "a": [
      "Marc Kunesch",
      "Jacob Yoo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Gianni Roman",
      "Sean Majury"
     ],
     "a": [
      "Bryan Mccourt",
      "Kevin Sheehan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Elias Eid",
      "Peter Chen"
     ],
     "a": [
      "Ricky Jutkiewicz",
      "Michael Vincent"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Franklin Yiu",
      "Allan Orchard"
     ],
     "a": [
      "Robert Huntley",
      "Marc Kunesch"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Brandon Fulford",
      "Wen Jin"
     ],
     "a": [
      "Dennis Yap",
      "Jacob Yoo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Elias Eid",
      "Peter Chen"
     ],
     "a": [
      "Bryan Mccourt",
      "Kevin Sheehan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 32,
     "as": 30,
     "h": [
      "Brandon Fulford",
      "Wen Jin"
     ],
     "a": [
      "Ricky Jutkiewicz",
      "Michael Vincent"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Franklin Yiu",
      "Allan Orchard"
     ],
     "a": [
      "Robert Huntley",
      "Marc Kunesch"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sean Majury",
      "Gianni Roman"
     ],
     "a": [
      "Dennis Yap",
      "Jacob Yoo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Elias Eid",
      "Wen Jin"
     ],
     "a": [
      "Bryan Mccourt",
      "Jacob Yoo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Sean Majury",
      "Allan Orchard"
     ],
     "a": [
      "Ricky Jutkiewicz",
      "Marc Kunesch"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Xilin Zhao",
      "Gianni Roman"
     ],
     "a": [
      "Michael Vincent",
      "Kevin Sheehan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Brandon Fulford",
      "Franklin Yiu"
     ],
     "a": [
      "Robert Huntley",
      "Dennis Yap"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Peter Chen",
      "Wen Jin"
     ],
     "a": [
      "Bryan Mccourt",
      "Jacob Yoo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Sean Majury",
      "Allan Orchard"
     ],
     "a": [
      "Ricky Jutkiewicz",
      "Marc Kunesch"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Xilin Zhao",
      "Gianni Roman"
     ],
     "a": [
      "Michael Vincent",
      "Kevin Sheehan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Brandon Fulford",
      "Franklin Yiu"
     ],
     "a": [
      "Robert Huntley",
      "Dennis Yap"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Brandon Fulford",
      "Elias Eid"
     ],
     "a": [
      "Bryan Mccourt",
      "Ricky Jutkiewicz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Peter Chen",
      "Gianni Roman"
     ],
     "a": [
      "Kevin Sheehan",
      "Dennis Yap"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Xilin Zhao",
      "Wen Jin"
     ],
     "a": [
      "Marc Kunesch",
      "Michael Vincent"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 33,
     "as": 31,
     "h": [
      "Sean Majury",
      "Franklin Yiu"
     ],
     "a": [
      "Jacob Yoo",
      "Robert Huntley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Peter Chen",
      "Xilin Zhao"
     ],
     "a": [
      "Bryan Mccourt",
      "Ricky Jutkiewicz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Elias Eid",
      "Gianni Roman"
     ],
     "a": [
      "Dennis Yap",
      "Kevin Sheehan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Brandon Fulford",
      "Allan Orchard"
     ],
     "a": [
      "Marc Kunesch",
      "Michael Vincent"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Franklin Yiu",
      "Sean Majury"
     ],
     "a": [
      "Jacob Yoo",
      "Robert Huntley"
     ]
    }
   ],
   "subs": [
    "Elias Eid",
    "Xilin Zhao",
    "Wen Jin"
   ]
  },
  {
   "result": "away",
   "week": 1,
   "home": "Jersey Devil",
   "away": "APC Garden State",
   "time": "2026-08-25T19:30:00",
   "complete": true,
   "homePoints": 561,
   "awayPoints": 625,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Tim Bruno",
      "Dan Ruble"
     ],
     "a": [
      "Uzoma Nwankwo",
      "Tyler Bayly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jarred Goeckeler",
      "Tom Kresky"
     ],
     "a": [
      "Mark Waters",
      "Jimmy Shapiro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 27,
     "as": 29,
     "h": [
      "Frederick Cox",
      "Brandon Dejesus"
     ],
     "a": [
      "Matt Inzerillo",
      "Neale Smith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Steve Hong",
      "Derek Livingston"
     ],
     "a": [
      "Daniel Dechristopher",
      "Bruce Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Steve Hong",
      "Mario Contreras"
     ],
     "a": [
      "Uzoma Nwankwo",
      "Bruce Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Brandon Dejesus",
      "Jarred Goeckeler"
     ],
     "a": [
      "Mark Waters",
      "Tyler Bayly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tom Kresky",
      "Dan Ruble"
     ],
     "a": [
      "Jimmy Shapiro",
      "Neale Smith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Jonathan Carter",
      "Derek Livingston"
     ],
     "a": [
      "Chris Machuzak",
      "Andress Mims"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Tim Bruno",
      "Dan Ruble"
     ],
     "a": [
      "Uzoma Nwankwo",
      "Daniel Dechristopher"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Mario Contreras",
      "Frederick Cox"
     ],
     "a": [
      "Mark Waters",
      "Bruce Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jonathan Carter",
      "Brandon Dejesus"
     ],
     "a": [
      "Chris Machuzak",
      "Andress Mims"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jarred Goeckeler",
      "Tom Kresky"
     ],
     "a": [
      "Matt Inzerillo",
      "Tyler Bayly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Tom Kresky",
      "Dan Ruble"
     ],
     "a": [
      "Mark Waters",
      "Jimmy Shapiro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Steve Hong",
      "Derek Livingston"
     ],
     "a": [
      "Chris Machuzak",
      "Neale Smith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Tim Bruno",
      "Brandon Dejesus"
     ],
     "a": [
      "Matt Inzerillo",
      "Bruce Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 22,
     "h": [
      "Mario Contreras",
      "Frederick Cox"
     ],
     "a": [
      "Daniel Dechristopher",
      "Andress Mims"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jarred Goeckeler",
      "Dan Ruble"
     ],
     "a": [
      "Uzoma Nwankwo",
      "Andress Mims"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Frederick Cox",
      "Steve Hong"
     ],
     "a": [
      "Chris Machuzak",
      "Jimmy Shapiro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Tim Bruno",
      "Tom Kresky"
     ],
     "a": [
      "Matt Inzerillo",
      "Neale Smith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jonathan Carter",
      "Derek Livingston"
     ],
     "a": [
      "Tyler Bayly",
      "Daniel Dechristopher"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Brandon Dejesus",
      "Frederick Cox"
     ],
     "a": [
      "Uzoma Nwankwo",
      "Daniel Dechristopher"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Tim Bruno",
      "Tom Kresky"
     ],
     "a": [
      "Matt Inzerillo",
      "Mark Waters"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jonathan Carter",
      "Mario Contreras"
     ],
     "a": [
      "Bruce Nguyen",
      "Tyler Bayly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jarred Goeckeler",
      "Dan Ruble"
     ],
     "a": [
      "Neale Smith",
      "Andress Mims"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Brandon Dejesus",
      "Jarred Goeckeler"
     ],
     "a": [
      "Uzoma Nwankwo",
      "Chris Machuzak"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Tim Bruno",
      "Derek Livingston"
     ],
     "a": [
      "Bruce Nguyen",
      "Mark Waters"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 5,
     "as": 22,
     "h": [
      "Frederick Cox",
      "Steve Hong"
     ],
     "a": [
      "Matt Inzerillo",
      "Daniel Dechristopher"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jonathan Carter",
      "Mario Contreras"
     ],
     "a": [
      "Neale Smith",
      "Tyler Bayly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jarred Goeckeler",
      "Frederick Cox"
     ],
     "a": [
      "Tyler Bayly",
      "Uzoma Nwankwo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Tim Bruno",
      "Derek Livingston"
     ],
     "a": [
      "Mark Waters",
      "Chris Machuzak"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jonathan Carter",
      "Brandon Dejesus"
     ],
     "a": [
      "Jimmy Shapiro",
      "Andress Mims"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Mario Contreras",
      "Steve Hong"
     ],
     "a": [
      "Bruce Nguyen",
      "Daniel Dechristopher"
     ]
    }
   ],
   "subs": [
    "Jarred Goeckeler"
   ]
  },
  {
   "result": "home",
   "week": 1,
   "home": "Pickle House",
   "away": "Pickleball Kingdom Hamilton",
   "time": "2026-08-25T19:30:00",
   "complete": true,
   "homePoints": 638,
   "awayPoints": 567,
   "homeGW": 22,
   "awayGW": 10,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Jitendra Arora",
      "Sushil Rijhwani"
     ],
     "a": [
      "Dhruv Dobariya",
      "Ziyu Huang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Rajeeth Nadig",
      "Anil Kumar Jakkaladki"
     ],
     "a": [
      "Harsh Upadhyaya",
      "Dilip Patel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Varun Gurram",
      "Sree Harsha Konduru"
     ],
     "a": [
      "Pritpal Singh",
      "Venu Yengala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Bennett Pereira",
      "Ping Peng"
     ],
     "a": [
      "Aaron Chan",
      "Jaiveer Narwal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Jitendra Arora",
      "Anil Kumar Jakkaladki"
     ],
     "a": [
      "Dhruv Dobariya",
      "Ziyu Huang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Rajeeth Nadig",
      "Bennett Pereira"
     ],
     "a": [
      "Harsh Upadhyaya",
      "Dilip Patel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Sree Harsha Konduru",
      "Varun Gurram"
     ],
     "a": [
      "Pritpal Singh",
      "Venu Yengala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Sushil Rijhwani",
      "Avneesh Agarwal"
     ],
     "a": [
      "Jaiveer Narwal",
      "Aaron Chan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jitendra Arora",
      "Ping Peng"
     ],
     "a": [
      "Dhruv Dobariya",
      "Aaron Chan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Sushil Rijhwani",
      "Bennett Pereira"
     ],
     "a": [
      "Harsh Upadhyaya",
      "Ziyu Huang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Sree Harsha Konduru",
      "Rajeeth Nadig"
     ],
     "a": [
      "Pritpal Singh",
      "Dilip Patel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Avneesh Agarwal",
      "Varun Gurram"
     ],
     "a": [
      "Venu Yengala",
      "Ashish Kumar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Anil Kumar Jakkaladki",
      "Sushil Rijhwani"
     ],
     "a": [
      "Dhruv Dobariya",
      "Harsh Upadhyaya"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jitendra Arora",
      "Avneesh Agarwal"
     ],
     "a": [
      "Ziyu Huang",
      "Ashish Kumar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Varun Gurram",
      "Rajeeth Nadig"
     ],
     "a": [
      "Pritpal Singh",
      "Dilip Patel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Sree Harsha Konduru",
      "Ping Peng"
     ],
     "a": [
      "Jaiveer Narwal",
      "Venu Yengala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Sushil Rijhwani",
      "Ping Peng"
     ],
     "a": [
      "Dhruv Dobariya",
      "Aaron Chan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sree Harsha Konduru",
      "Rajeeth Nadig"
     ],
     "a": [
      "Ziyu Huang",
      "Venu Yengala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Varun Gurram",
      "Anil Kumar Jakkaladki"
     ],
     "a": [
      "Pritpal Singh",
      "Harsh Upadhyaya"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jitendra Arora",
      "Bennett Pereira"
     ],
     "a": [
      "Jaiveer Narwal",
      "Dilip Patel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Varun Gurram",
      "Ping Peng"
     ],
     "a": [
      "Dhruv Dobariya",
      "Pritpal Singh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Sree Harsha Konduru",
      "Sushil Rijhwani"
     ],
     "a": [
      "Ziyu Huang",
      "Dilip Patel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jitendra Arora",
      "Anil Kumar Jakkaladki"
     ],
     "a": [
      "Harsh Upadhyaya",
      "Venu Yengala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Bennett Pereira",
      "Avneesh Agarwal"
     ],
     "a": [
      "Jaiveer Narwal",
      "Ashish Kumar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Varun Gurram",
      "Rajeeth Nadig"
     ],
     "a": [
      "Dilip Patel",
      "Venu Yengala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Sree Harsha Konduru",
      "Anil Kumar Jakkaladki"
     ],
     "a": [
      "Harsh Upadhyaya",
      "Jaiveer Narwal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Bennett Pereira",
      "Sushil Rijhwani"
     ],
     "a": [
      "Pritpal Singh",
      "Ashish Kumar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Ping Peng",
      "Avneesh Agarwal"
     ],
     "a": [
      "Aaron Chan",
      "Ziyu Huang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Anil Kumar Jakkaladki",
      "Avneesh Agarwal"
     ],
     "a": [
      "Dhruv Dobariya",
      "Jaiveer Narwal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sree Harsha Konduru",
      "Jitendra Arora"
     ],
     "a": [
      "Ziyu Huang",
      "Harsh Upadhyaya"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Rajeeth Nadig",
      "Bennett Pereira"
     ],
     "a": [
      "Pritpal Singh",
      "Aaron Chan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Varun Gurram",
      "Ping Peng"
     ],
     "a": [
      "Venu Yengala",
      "Dilip Patel"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 1,
   "home": "PickleRage Union County",
   "away": "Flemington",
   "time": "2026-08-25T19:30:00",
   "complete": true,
   "homePoints": 605,
   "awayPoints": 593,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Andy Knight",
      "Francis Thai"
     ],
     "a": [
      "Eric Berlinger",
      "Roberto Marcillo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jack Barry",
      "Shreyas Suresh Hassan"
     ],
     "a": [
      "Craig Butler",
      "Josh Rito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Mark Bernstein",
      "Dan Yang"
     ],
     "a": [
      "David Shapiro",
      "John Fallone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sean Diamond",
      "Ren Macalalag"
     ],
     "a": [
      "David Tabacco",
      "Franklin Lupianez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Andy Knight",
      "Francis Thai"
     ],
     "a": [
      "Eric Berlinger",
      "Roberto Marcillo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jack Barry",
      "Shreyas Suresh Hassan"
     ],
     "a": [
      "Craig Butler",
      "Josh Rito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Mark Bernstein",
      "Dan Yang"
     ],
     "a": [
      "David Shapiro",
      "John Fallone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Sean Diamond",
      "Ren Macalalag"
     ],
     "a": [
      "Franklin Lupianez",
      "David Tabacco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Shreyas Suresh Hassan",
      "Dan Yang"
     ],
     "a": [
      "Craig Butler",
      "Roberto Marcillo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jack Barry",
      "Francis Thai"
     ],
     "a": [
      "Eric Berlinger",
      "Josh Rito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Ren Macalalag",
      "Andy Knight"
     ],
     "a": [
      "David Shapiro",
      "Franklin Lupianez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Sean Diamond",
      "Mark Bernstein"
     ],
     "a": [
      "John Fallone",
      "David Tabacco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Shreyas Suresh Hassan",
      "Dan Yang"
     ],
     "a": [
      "Roberto Marcillo",
      "Craig Butler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jack Barry",
      "Francis Thai"
     ],
     "a": [
      "Josh Rito",
      "Eric Berlinger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ren Macalalag",
      "Andy Knight"
     ],
     "a": [
      "Franklin Lupianez",
      "David Shapiro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sean Diamond",
      "Mark Bernstein"
     ],
     "a": [
      "David Tabacco",
      "John Fallone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Sean Diamond",
      "Dan Yang"
     ],
     "a": [
      "David Shapiro",
      "Craig Butler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Mark Bernstein",
      "Jack Barry"
     ],
     "a": [
      "David Tabacco",
      "Eric Berlinger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Ren Macalalag",
      "Francis Thai"
     ],
     "a": [
      "John Fallone",
      "Roberto Marcillo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Shreyas Suresh Hassan",
      "Andy Knight"
     ],
     "a": [
      "Franklin Lupianez",
      "Josh Rito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sean Diamond",
      "Dan Yang"
     ],
     "a": [
      "Craig Butler",
      "David Shapiro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Mark Bernstein",
      "Jack Barry"
     ],
     "a": [
      "David Tabacco",
      "Eric Berlinger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Ren Macalalag",
      "Francis Thai"
     ],
     "a": [
      "John Fallone",
      "Roberto Marcillo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Shreyas Suresh Hassan",
      "Andy Knight"
     ],
     "a": [
      "Franklin Lupianez",
      "Josh Rito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Sean Diamond",
      "Andy Knight"
     ],
     "a": [
      "John Fallone",
      "Craig Butler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jack Barry",
      "Dan Yang"
     ],
     "a": [
      "David Shapiro",
      "Roberto Marcillo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Mark Bernstein",
      "Ren Macalalag"
     ],
     "a": [
      "David Tabacco",
      "Josh Rito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Shreyas Suresh Hassan",
      "Francis Thai"
     ],
     "a": [
      "Franklin Lupianez",
      "Eric Berlinger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Andy Knight",
      "Sean Diamond"
     ],
     "a": [
      "Craig Butler",
      "John Fallone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jack Barry",
      "Dan Yang"
     ],
     "a": [
      "David Shapiro",
      "Roberto Marcillo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 2,
     "h": [
      "Mark Bernstein",
      "Ren Macalalag"
     ],
     "a": [
      "David Tabacco",
      "Josh Rito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Francis Thai",
      "Shreyas Suresh Hassan"
     ],
     "a": [
      "Eric Berlinger",
      "Franklin Lupianez"
     ]
    }
   ],
   "subs": [
    "Roberto Marcillo",
    "Mark Bernstein"
   ]
  },
  {
   "result": "home",
   "week": 1,
   "home": "Montville",
   "away": "Pickleball Kingdom Lehigh Valley",
   "time": "2026-08-25T19:30:00",
   "complete": true,
   "homePoints": 679,
   "awayPoints": 616,
   "homeGW": 25,
   "awayGW": 7,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Brandon Tsang",
      "Jeff Axelrad"
     ],
     "a": [
      "Ayon Codner",
      "Rohit Mankotia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Jesse Mynahan",
      "Cesar Santamaria-Aranda"
     ],
     "a": [
      "Samuel Kashefska",
      "Eric Ruiz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Bill Olderman",
      "Meet Thakkar"
     ],
     "a": [
      "Cullen Curley",
      "Kevin Tran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Umang Pathak",
      "John Manuzza"
     ],
     "a": [
      "Michael Barndt",
      "Carlos Rincon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Cesar Santamaria-Aranda",
      "John Manuzza"
     ],
     "a": [
      "Michael Barndt",
      "Eric Ruiz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Ramam Durba",
      "Brandon Tsang"
     ],
     "a": [
      "Ayon Codner",
      "Samuel Kashefska"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Umang Pathak",
      "Jesse Mynahan"
     ],
     "a": [
      "Rohit Mankotia",
      "Kevin Tran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jeff Laniado",
      "Bill Olderman"
     ],
     "a": [
      "Cullen Curley",
      "David Reyes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Jesse Mynahan",
      "Cesar Santamaria-Aranda"
     ],
     "a": [
      "Kevin Tran",
      "Carlos Rincon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 30,
     "as": 28,
     "h": [
      "Jeff Axelrad",
      "John Manuzza"
     ],
     "a": [
      "Samuel Kashefska",
      "Rohit Mankotia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Bill Olderman",
      "Umang Pathak"
     ],
     "a": [
      "Ayon Codner",
      "Eric Ruiz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Jeff Laniado",
      "Meet Thakkar"
     ],
     "a": [
      "Michael Barndt",
      "David Reyes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Umang Pathak",
      "Ramam Durba"
     ],
     "a": [
      "Cullen Curley",
      "Carlos Rincon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jeff Axelrad",
      "Cesar Santamaria-Aranda"
     ],
     "a": [
      "Samuel Kashefska",
      "Kevin Tran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jesse Mynahan",
      "Brandon Tsang"
     ],
     "a": [
      "Rohit Mankotia",
      "David Reyes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jeff Laniado",
      "Meet Thakkar"
     ],
     "a": [
      "Ayon Codner",
      "Michael Barndt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jeff Laniado",
      "Cesar Santamaria-Aranda"
     ],
     "a": [
      "Ayon Codner",
      "Cullen Curley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Brandon Tsang",
      "Meet Thakkar"
     ],
     "a": [
      "Rohit Mankotia",
      "Eric Ruiz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Ramam Durba",
      "Bill Olderman"
     ],
     "a": [
      "Samuel Kashefska",
      "Michael Barndt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Umang Pathak",
      "John Manuzza"
     ],
     "a": [
      "Carlos Rincon",
      "David Reyes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Jesse Mynahan",
      "Brandon Tsang"
     ],
     "a": [
      "Cullen Curley",
      "Samuel Kashefska"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Bill Olderman",
      "Umang Pathak"
     ],
     "a": [
      "Ayon Codner",
      "David Reyes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Cesar Santamaria-Aranda",
      "Meet Thakkar"
     ],
     "a": [
      "Kevin Tran",
      "Eric Ruiz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "John Manuzza",
      "Jeff Axelrad"
     ],
     "a": [
      "Michael Barndt",
      "Carlos Rincon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jeff Axelrad",
      "Jesse Mynahan"
     ],
     "a": [
      "Eric Ruiz",
      "Cullen Curley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jeff Laniado",
      "Cesar Santamaria-Aranda"
     ],
     "a": [
      "Rohit Mankotia",
      "Michael Barndt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Umang Pathak",
      "Ramam Durba"
     ],
     "a": [
      "Ayon Codner",
      "Carlos Rincon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Brandon Tsang",
      "John Manuzza"
     ],
     "a": [
      "David Reyes",
      "Kevin Tran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Ramam Durba",
      "Brandon Tsang"
     ],
     "a": [
      "Cullen Curley",
      "Michael Barndt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Bill Olderman",
      "Meet Thakkar"
     ],
     "a": [
      "Ayon Codner",
      "Kevin Tran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jeff Axelrad",
      "Cesar Santamaria-Aranda"
     ],
     "a": [
      "Samuel Kashefska",
      "Eric Ruiz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jesse Mynahan",
      "Umang Pathak"
     ],
     "a": [
      "Rohit Mankotia",
      "Carlos Rincon"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 1,
   "home": "Dill Dinkers Newport",
   "away": "Picklr Newtown",
   "time": "2026-08-25T19:30:00",
   "complete": true,
   "homePoints": 544,
   "awayPoints": 663,
   "homeGW": 8,
   "awayGW": 24,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Steppan Konoplev",
      "Paul Chantler"
     ],
     "a": [
      "Angelo Disipio",
      "Arnold Poblete"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Rick Olafsson",
      "Ian Diamond"
     ],
     "a": [
      "Gary Garretson",
      "Alessio Muscara"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Keith Richard",
      "Bill Violette"
     ],
     "a": [
      "Steven Hummel",
      "Jason Wu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Aleks Mirkovic",
      "Xan Hong"
     ],
     "a": [
      "Mike Leach",
      "Andrew Mclean"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Steppan Konoplev",
      "Ian Diamond"
     ],
     "a": [
      "Michael Johnson",
      "Andrew Mclean"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Rick Olafsson",
      "Paul Chantler"
     ],
     "a": [
      "Steven Hummel",
      "Alessio Muscara"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Keith Richard",
      "Xan Hong"
     ],
     "a": [
      "Jimmy Duong",
      "Gary Garretson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Aleks Mirkovic",
      "Bill Violette"
     ],
     "a": [
      "Mike Leach",
      "Mathew Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Aleks Mirkovic",
      "Keith Richard"
     ],
     "a": [
      "Jimmy Duong",
      "Gary Garretson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Rick Olafsson",
      "Steppan Konoplev"
     ],
     "a": [
      "Steven Hummel",
      "Andrew Mclean"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ian Diamond",
      "Paul Chantler"
     ],
     "a": [
      "Angelo Disipio",
      "Mathew Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Xan Hong",
      "Bill Violette"
     ],
     "a": [
      "Arnold Poblete",
      "Jason Wu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Keith Richard",
      "Ian Diamond"
     ],
     "a": [
      "Gary Garretson",
      "Michael Johnson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Aleks Mirkovic",
      "Paul Chantler"
     ],
     "a": [
      "Jimmy Duong",
      "Jason Wu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Steppan Konoplev",
      "Xan Hong"
     ],
     "a": [
      "Mike Leach",
      "Alessio Muscara"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Rick Olafsson",
      "Bill Violette"
     ],
     "a": [
      "Angelo Disipio",
      "Mathew Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Keith Richard",
      "Paul Chantler"
     ],
     "a": [
      "Mike Leach",
      "Alessio Muscara"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Aleks Mirkovic",
      "Ian Diamond"
     ],
     "a": [
      "Steven Hummel",
      "Jason Wu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Rick Olafsson",
      "Xan Hong"
     ],
     "a": [
      "Arnold Poblete",
      "Mathew Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Steppan Konoplev",
      "Bill Violette"
     ],
     "a": [
      "Gary Garretson",
      "Michael Johnson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Steppan Konoplev",
      "Keith Richard"
     ],
     "a": [
      "Angelo Disipio",
      "Arnold Poblete"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Rick Olafsson",
      "Aleks Mirkovic"
     ],
     "a": [
      "Mike Leach",
      "Mathew Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 3,
     "as": 21,
     "h": [
      "Ian Diamond",
      "Xan Hong"
     ],
     "a": [
      "Gary Garretson",
      "Alessio Muscara"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Paul Chantler",
      "Bill Violette"
     ],
     "a": [
      "Jimmy Duong",
      "Andrew Mclean"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Rick Olafsson",
      "Keith Richard"
     ],
     "a": [
      "Arnold Poblete",
      "Mathew Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Steppan Konoplev",
      "Aleks Mirkovic"
     ],
     "a": [
      "Angelo Disipio",
      "Steven Hummel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Paul Chantler",
      "Xan Hong"
     ],
     "a": [
      "Jimmy Duong",
      "Jason Wu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Ian Diamond",
      "Bill Violette"
     ],
     "a": [
      "Michael Johnson",
      "Mike Leach"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Steppan Konoplev",
      "Paul Chantler"
     ],
     "a": [
      "Arnold Poblete",
      "Jason Wu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Rick Olafsson",
      "Ian Diamond"
     ],
     "a": [
      "Jimmy Duong",
      "Andrew Mclean"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Keith Richard",
      "Bill Violette"
     ],
     "a": [
      "Steven Hummel",
      "Alessio Muscara"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Aleks Mirkovic",
      "Xan Hong"
     ],
     "a": [
      "Angelo Disipio",
      "Michael Johnson"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 1,
   "home": "Pickleball HQ",
   "away": "Dill Dinkers Freehold",
   "time": "2026-08-25T19:30:00",
   "complete": true,
   "homePoints": 692,
   "awayPoints": 509,
   "homeGW": 30,
   "awayGW": 2,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Noah Ludwigsen",
      "David Wheeler"
     ],
     "a": [
      "Erik Reilly",
      "Ben Cortes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jose Campos",
      "Kyle Korman"
     ],
     "a": [
      "Kevin Lew",
      "Siva Indupuru"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Niman Ahmeti",
      "Jimmy Ramja"
     ],
     "a": [
      "Michael Vollmer",
      "Pedro Delgado"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Luca Hendrickson",
      "Christopher Hendrickson"
     ],
     "a": [
      "Hua Lin",
      "Wensheng Yue"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Noah Ludwigsen",
      "David Wheeler"
     ],
     "a": [
      "Erik Reilly",
      "Kevin Lew"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Nesip Cengiz",
      "Niman Ahmeti"
     ],
     "a": [
      "Michael Vollmer",
      "Ben Cortes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kyle Korman",
      "Jimmy Ramja"
     ],
     "a": [
      "Siva Indupuru",
      "Big G"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Christopher Hendrickson",
      "Luca Hendrickson"
     ],
     "a": [
      "Hua Lin",
      "Wensheng Yue"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Noah Ludwigsen",
      "Luca Hendrickson"
     ],
     "a": [
      "Erik Reilly",
      "Pedro Delgado"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "David Wheeler",
      "Kyle Korman"
     ],
     "a": [
      "Kevin Lew",
      "Ben Cortes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jose Campos",
      "Nesip Cengiz"
     ],
     "a": [
      "Michael Vollmer",
      "Big G"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Christopher Hendrickson",
      "Jimmy Ramja"
     ],
     "a": [
      "Wensheng Yue",
      "Siva Indupuru"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Noah Ludwigsen",
      "Luca Hendrickson"
     ],
     "a": [
      "Erik Reilly",
      "Wensheng Yue"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Kyle Korman",
      "David Wheeler"
     ],
     "a": [
      "Kevin Lew",
      "Hua Lin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Christopher Hendrickson",
      "Jimmy Ramja"
     ],
     "a": [
      "Ben Cortes",
      "Pedro Delgado"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jose Campos",
      "Niman Ahmeti"
     ],
     "a": [
      "Siva Indupuru",
      "Big G"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Noah Ludwigsen",
      "Christopher Hendrickson"
     ],
     "a": [
      "Erik Reilly",
      "Ben Cortes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jimmy Ramja",
      "David Wheeler"
     ],
     "a": [
      "Kevin Lew",
      "Hua Lin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Luca Hendrickson",
      "Kyle Korman"
     ],
     "a": [
      "Michael Vollmer",
      "Wensheng Yue"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Nesip Cengiz",
      "Jose Campos"
     ],
     "a": [
      "Pedro Delgado",
      "Big G"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Noah Ludwigsen",
      "Christopher Hendrickson"
     ],
     "a": [
      "Erik Reilly",
      "Kevin Lew"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Luca Hendrickson",
      "Kyle Korman"
     ],
     "a": [
      "Michael Vollmer",
      "Hua Lin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jimmy Ramja",
      "David Wheeler"
     ],
     "a": [
      "Wensheng Yue",
      "Siva Indupuru"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Nesip Cengiz",
      "Niman Ahmeti"
     ],
     "a": [
      "Pedro Delgado",
      "Big G"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Noah Ludwigsen",
      "Jimmy Ramja"
     ],
     "a": [
      "Erik Reilly",
      "Big G"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 3,
     "h": [
      "Luca Hendrickson",
      "David Wheeler"
     ],
     "a": [
      "Kevin Lew",
      "Pedro Delgado"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jose Campos",
      "Niman Ahmeti"
     ],
     "a": [
      "Michael Vollmer",
      "Siva Indupuru"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Christopher Hendrickson",
      "Kyle Korman"
     ],
     "a": [
      "Hua Lin",
      "Ben Cortes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Noah Ludwigsen",
      "Jimmy Ramja"
     ],
     "a": [
      "Kevin Lew",
      "Big G"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kyle Korman",
      "Niman Ahmeti"
     ],
     "a": [
      "Michael Vollmer",
      "Pedro Delgado"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Luca Hendrickson",
      "Jose Campos"
     ],
     "a": [
      "Wensheng Yue",
      "Ben Cortes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Christopher Hendrickson",
      "David Wheeler"
     ],
     "a": [
      "Hua Lin",
      "Siva Indupuru"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 2,
   "home": "Flemington",
   "away": "Montville",
   "time": "2026-09-01T19:00:00",
   "complete": true,
   "homePoints": 512,
   "awayPoints": 656,
   "homeGW": 7,
   "awayGW": 25,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "John Fallone",
      "Josh Fink"
     ],
     "a": [
      "John Manuzza",
      "Umang Pathak"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Bill Brandt",
      "Eric Berlinger"
     ],
     "a": [
      "Jesse Mynahan",
      "Shalin Rawal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "David Shapiro",
      "Craig Butler"
     ],
     "a": [
      "Cesar Santamaria-Aranda",
      "Jeff Laniado"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "David Tabacco",
      "Franklin Lupianez"
     ],
     "a": [
      "Brandon Tsang",
      "Sandeep Malhotra"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "David Tabacco",
      "Franklin Lupianez"
     ],
     "a": [
      "John Manuzza",
      "Cesar Santamaria-Aranda"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Josh Fink",
      "Josh Rito"
     ],
     "a": [
      "Jesse Mynahan",
      "Sandeep Malhotra"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "David Shapiro",
      "Craig Butler"
     ],
     "a": [
      "Umang Pathak",
      "Shalin Rawal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Eric Berlinger",
      "Bill Brandt"
     ],
     "a": [
      "Ramam Durba",
      "Jeff Laniado"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Bill Brandt",
      "David Shapiro"
     ],
     "a": [
      "Umang Pathak",
      "Ramam Durba"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Eric Berlinger",
      "Franklin Lupianez"
     ],
     "a": [
      "Shalin Rawal",
      "Sandeep Malhotra"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Craig Butler",
      "Josh Rito"
     ],
     "a": [
      "Jesse Mynahan",
      "Cesar Santamaria-Aranda"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Josh Fink",
      "John Fallone"
     ],
     "a": [
      "Brandon Tsang",
      "John Manuzza"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Bill Brandt",
      "David Shapiro"
     ],
     "a": [
      "Jeff Laniado",
      "Umang Pathak"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Franklin Lupianez",
      "Josh Fink"
     ],
     "a": [
      "Jesse Mynahan",
      "Brandon Tsang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Craig Butler",
      "Josh Rito"
     ],
     "a": [
      "Cesar Santamaria-Aranda",
      "Shalin Rawal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "John Fallone",
      "David Tabacco"
     ],
     "a": [
      "Sandeep Malhotra",
      "Ramam Durba"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "David Tabacco",
      "Josh Fink"
     ],
     "a": [
      "John Manuzza",
      "Umang Pathak"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Bill Brandt",
      "Craig Butler"
     ],
     "a": [
      "Cesar Santamaria-Aranda",
      "Jeff Laniado"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Josh Rito",
      "John Fallone"
     ],
     "a": [
      "Brandon Tsang",
      "Sandeep Malhotra"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Eric Berlinger",
      "David Shapiro"
     ],
     "a": [
      "Shalin Rawal",
      "Ramam Durba"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Eric Berlinger",
      "Franklin Lupianez"
     ],
     "a": [
      "John Manuzza",
      "Shalin Rawal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Craig Butler",
      "Bill Brandt"
     ],
     "a": [
      "Jesse Mynahan",
      "Brandon Tsang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "David Tabacco",
      "Josh Fink"
     ],
     "a": [
      "Umang Pathak",
      "Jeff Laniado"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "John Fallone",
      "Josh Rito"
     ],
     "a": [
      "Cesar Santamaria-Aranda",
      "Ramam Durba"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Eric Berlinger",
      "Josh Fink"
     ],
     "a": [
      "John Manuzza",
      "Cesar Santamaria-Aranda"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Bill Brandt",
      "David Tabacco"
     ],
     "a": [
      "Jesse Mynahan",
      "Shalin Rawal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Franklin Lupianez",
      "John Fallone"
     ],
     "a": [
      "Umang Pathak",
      "Sandeep Malhotra"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "David Shapiro",
      "Josh Rito"
     ],
     "a": [
      "Jeff Laniado",
      "Ramam Durba"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Bill Brandt",
      "Franklin Lupianez"
     ],
     "a": [
      "John Manuzza",
      "Shalin Rawal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Craig Butler",
      "John Fallone"
     ],
     "a": [
      "Umang Pathak",
      "Ramam Durba"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Eric Berlinger",
      "David Tabacco"
     ],
     "a": [
      "Jesse Mynahan",
      "Cesar Santamaria-Aranda"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Josh Rito",
      "David Shapiro"
     ],
     "a": [
      "Brandon Tsang",
      "Jeff Laniado"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 2,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Home Court",
   "time": "2026-09-01T19:00:00",
   "complete": true,
   "homePoints": 620,
   "awayPoints": 588,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Lj Dequina",
      "Marc Padre"
     ],
     "a": [
      "Bryan Mccourt",
      "Marc Kunesch"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jun Zhi Tan",
      "Ritesh Patel"
     ],
     "a": [
      "Jacob Yoo",
      "Michael Vincent"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Akash Raju",
      "Yashraj Kurani"
     ],
     "a": [
      "Michael Gilbert",
      "Matthew Carrington"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Christopher Monzon",
      "George Vega Jr"
     ],
     "a": [
      "Dennis Yap",
      "Kevin Sheehan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ritesh Patel",
      "Prashanth Koshy"
     ],
     "a": [
      "Bryan Mccourt",
      "Michael Vincent"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lj Dequina",
      "Akash Raju"
     ],
     "a": [
      "Michael Gilbert",
      "Jacob Yoo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jun Zhi Tan",
      "George Vega Jr"
     ],
     "a": [
      "Pat Wilson",
      "Marc Kunesch"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Christopher Monzon",
      "Marc Padre"
     ],
     "a": [
      "Robert Huntley",
      "Kevin Sheehan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Ritesh Patel",
      "Yashraj Kurani"
     ],
     "a": [
      "Michael Vincent",
      "Pat Wilson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Akash Raju",
      "Jun Zhi Tan"
     ],
     "a": [
      "Michael Gilbert",
      "Kevin Sheehan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Christopher Monzon",
      "Lj Dequina"
     ],
     "a": [
      "Marc Kunesch",
      "Matthew Carrington"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "George Vega Jr",
      "Marc Padre"
     ],
     "a": [
      "Dennis Yap",
      "Jacob Yoo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Prashanth Koshy",
      "Ritesh Patel"
     ],
     "a": [
      "Bryan Mccourt",
      "Marc Kunesch"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Yashraj Kurani",
      "Lj Dequina"
     ],
     "a": [
      "Pat Wilson",
      "Matthew Carrington"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "George Vega Jr",
      "Christopher Monzon"
     ],
     "a": [
      "Robert Huntley",
      "Dennis Yap"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Akash Raju",
      "Marc Padre"
     ],
     "a": [
      "Kevin Sheehan",
      "Jacob Yoo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Prashanth Koshy",
      "Yashraj Kurani"
     ],
     "a": [
      "Bryan Mccourt",
      "Dennis Yap"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Akash Raju",
      "George Vega Jr"
     ],
     "a": [
      "Michael Vincent",
      "Jacob Yoo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Jun Zhi Tan",
      "Marc Padre"
     ],
     "a": [
      "Michael Gilbert",
      "Matthew Carrington"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lj Dequina",
      "Christopher Monzon"
     ],
     "a": [
      "Robert Huntley",
      "Kevin Sheehan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Akash Raju",
      "Christopher Monzon"
     ],
     "a": [
      "Bryan Mccourt",
      "Robert Huntley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Marc Padre",
      "Yashraj Kurani"
     ],
     "a": [
      "Michael Vincent",
      "Pat Wilson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lj Dequina",
      "George Vega Jr"
     ],
     "a": [
      "Marc Kunesch",
      "Matthew Carrington"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jun Zhi Tan",
      "Prashanth Koshy"
     ],
     "a": [
      "Dennis Yap",
      "Jacob Yoo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Ritesh Patel",
      "Akash Raju"
     ],
     "a": [
      "Bryan Mccourt",
      "Michael Vincent"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jun Zhi Tan",
      "George Vega Jr"
     ],
     "a": [
      "Michael Gilbert",
      "Kevin Sheehan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Lj Dequina",
      "Marc Padre"
     ],
     "a": [
      "Pat Wilson",
      "Matthew Carrington"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Yashraj Kurani",
      "Christopher Monzon"
     ],
     "a": [
      "Robert Huntley",
      "Dennis Yap"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ritesh Patel",
      "Marc Padre"
     ],
     "a": [
      "Bryan Mccourt",
      "Robert Huntley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Akash Raju",
      "Jun Zhi Tan"
     ],
     "a": [
      "Michael Gilbert",
      "Jacob Yoo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Prashanth Koshy",
      "Lj Dequina"
     ],
     "a": [
      "Marc Kunesch",
      "Pat Wilson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Yashraj Kurani",
      "George Vega Jr"
     ],
     "a": [
      "Dennis Yap",
      "Kevin Sheehan"
     ]
    }
   ],
   "subs": [
    "Marc Padre",
    "Christopher Monzon",
    "Lj Dequina"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Pickleball Kingdom Lehigh Valley",
   "away": "Allstar Pickler",
   "time": "2026-09-01T19:00:00",
   "complete": true,
   "homePoints": 675,
   "awayPoints": 485,
   "homeGW": 29,
   "awayGW": 3,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Ayon Codner",
      "Ali Bhimji"
     ],
     "a": [
      "Saad Talat Siddiqui",
      "Buyi Zhang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Samuel Kashefska",
      "Eric Ruiz"
     ],
     "a": [
      "Peter Chen",
      "Bing Zhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Cullen Curley",
      "Rohit Mankotia"
     ],
     "a": [
      "Brandon Fulford",
      "John Sallo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Carlos Rincon",
      "Kevin Tran"
     ],
     "a": [
      "Franklin Yiu",
      "Gianni Roman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Carlos Rincon",
      "Michael Barndt"
     ],
     "a": [
      "Saad Talat Siddiqui",
      "Buyi Zhang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ayon Codner",
      "Samuel Kashefska"
     ],
     "a": [
      "Peter Chen",
      "Bing Zhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Cullen Curley",
      "Eric Ruiz"
     ],
     "a": [
      "Brandon Fulford",
      "John Sallo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Rohit Mankotia",
      "Kevin Tran"
     ],
     "a": [
      "Franklin Yiu",
      "Gianni Roman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ayon Codner",
      "Rohit Mankotia"
     ],
     "a": [
      "Saad Talat Siddiqui",
      "Bing Zhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Michael Barndt",
      "Eric Ruiz"
     ],
     "a": [
      "Peter Chen",
      "Buyi Zhang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Cullen Curley",
      "Ali Bhimji"
     ],
     "a": [
      "Brandon Fulford",
      "Gianni Roman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Samuel Kashefska",
      "Kevin Tran"
     ],
     "a": [
      "Franklin Yiu",
      "John Sallo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Carlos Rincon",
      "Kevin Tran"
     ],
     "a": [
      "Saad Talat Siddiqui",
      "Bing Zhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Rohit Mankotia",
      "Ali Bhimji"
     ],
     "a": [
      "Peter Chen",
      "Buyi Zhang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Samuel Kashefska",
      "Cullen Curley"
     ],
     "a": [
      "Brandon Fulford",
      "Gianni Roman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Ayon Codner",
      "Eric Ruiz"
     ],
     "a": [
      "Franklin Yiu",
      "John Sallo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Michael Barndt",
      "Cullen Curley"
     ],
     "a": [
      "Saad Talat Siddiqui",
      "Peter Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Samuel Kashefska",
      "Eric Ruiz"
     ],
     "a": [
      "Gianni Roman",
      "Bing Zhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Carlos Rincon",
      "Ali Bhimji"
     ],
     "a": [
      "Buyi Zhang",
      "John Sallo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Ayon Codner",
      "Rohit Mankotia"
     ],
     "a": [
      "Franklin Yiu",
      "Brandon Fulford"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kevin Tran",
      "Ali Bhimji"
     ],
     "a": [
      "Saad Talat Siddiqui",
      "John Sallo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Carlos Rincon",
      "Michael Barndt"
     ],
     "a": [
      "Peter Chen",
      "Gianni Roman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Ayon Codner",
      "Eric Ruiz"
     ],
     "a": [
      "Bing Zhu",
      "Buyi Zhang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Samuel Kashefska",
      "Rohit Mankotia"
     ],
     "a": [
      "Franklin Yiu",
      "Brandon Fulford"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Eric Ruiz",
      "Rohit Mankotia"
     ],
     "a": [
      "Saad Talat Siddiqui",
      "John Sallo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Michael Barndt",
      "Ali Bhimji"
     ],
     "a": [
      "Gianni Roman",
      "Buyi Zhang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Samuel Kashefska",
      "Kevin Tran"
     ],
     "a": [
      "Franklin Yiu",
      "Peter Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Ayon Codner",
      "Cullen Curley"
     ],
     "a": [
      "Brandon Fulford",
      "Bing Zhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Ali Bhimji",
      "Michael Barndt"
     ],
     "a": [
      "Saad Talat Siddiqui",
      "Gianni Roman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Rohit Mankotia",
      "Carlos Rincon"
     ],
     "a": [
      "Buyi Zhang",
      "John Sallo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ayon Codner",
      "Samuel Kashefska"
     ],
     "a": [
      "Franklin Yiu",
      "Bing Zhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Kevin Tran",
      "Cullen Curley"
     ],
     "a": [
      "Brandon Fulford",
      "Peter Chen"
     ]
    }
   ],
   "subs": [
    "John Sallo",
    "Bing Zhu"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Picklr Newtown",
   "away": "APC Garden State",
   "time": "2026-09-01T19:00:00",
   "complete": true,
   "homePoints": 603,
   "awayPoints": 596,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Mathew Yang",
      "Andy Ro"
     ],
     "a": [
      "Uzoma Nwankwo",
      "Bruce Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Steven Hummel",
      "Angelo Disipio"
     ],
     "a": [
      "Neale Smith",
      "Mark Waters"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Gary Garretson",
      "Alessio Muscara"
     ],
     "a": [
      "Jimmy Shapiro",
      "Matt Inzerillo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Larry Minsky",
      "Michael Johnson"
     ],
     "a": [
      "Didier Jean-Baptiste",
      "Andress Mims"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Mathew Yang",
      "Angelo Disipio"
     ],
     "a": [
      "Didier Jean-Baptiste",
      "Uzoma Nwankwo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "J-P Lautenschlager",
      "Mike Leach"
     ],
     "a": [
      "Matt Inzerillo",
      "Mark Waters"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jimmy Duong",
      "Alessio Muscara"
     ],
     "a": [
      "Chris Machuzak",
      "Andress Mims"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Steven Hummel",
      "Gary Garretson"
     ],
     "a": [
      "Neale Smith",
      "Bruce Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Mathew Yang",
      "Gary Garretson"
     ],
     "a": [
      "Uzoma Nwankwo",
      "Mark Waters"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "J-P Lautenschlager",
      "Mike Leach"
     ],
     "a": [
      "Chris Machuzak",
      "Jimmy Shapiro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Andy Ro",
      "Angelo Disipio"
     ],
     "a": [
      "Bruce Nguyen",
      "Didier Jean-Baptiste"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Larry Minsky",
      "Michael Johnson"
     ],
     "a": [
      "Neale Smith",
      "Andress Mims"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Andy Ro",
      "Steven Hummel"
     ],
     "a": [
      "Uzoma Nwankwo",
      "Jimmy Shapiro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Alessio Muscara",
      "J-P Lautenschlager"
     ],
     "a": [
      "Mark Waters",
      "Chris Machuzak"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Larry Minsky",
      "Jimmy Duong"
     ],
     "a": [
      "Matt Inzerillo",
      "Neale Smith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Mathew Yang",
      "Michael Johnson"
     ],
     "a": [
      "Andress Mims",
      "Bruce Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Larry Minsky",
      "Gary Garretson"
     ],
     "a": [
      "Neale Smith",
      "Uzoma Nwankwo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jimmy Duong",
      "Angelo Disipio"
     ],
     "a": [
      "Mark Waters",
      "Jimmy Shapiro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Mike Leach",
      "Alessio Muscara"
     ],
     "a": [
      "Matt Inzerillo",
      "Chris Machuzak"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Mathew Yang",
      "Steven Hummel"
     ],
     "a": [
      "Didier Jean-Baptiste",
      "Bruce Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Mike Leach",
      "Jimmy Duong"
     ],
     "a": [
      "Andress Mims",
      "Uzoma Nwankwo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "J-P Lautenschlager",
      "Alessio Muscara"
     ],
     "a": [
      "Jimmy Shapiro",
      "Neale Smith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Angelo Disipio",
      "Gary Garretson"
     ],
     "a": [
      "Matt Inzerillo",
      "Didier Jean-Baptiste"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Andy Ro",
      "Michael Johnson"
     ],
     "a": [
      "Chris Machuzak",
      "Bruce Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Larry Minsky",
      "Mike Leach"
     ],
     "a": [
      "Chris Machuzak",
      "Uzoma Nwankwo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Mathew Yang",
      "Alessio Muscara"
     ],
     "a": [
      "Didier Jean-Baptiste",
      "Mark Waters"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Andy Ro",
      "Steven Hummel"
     ],
     "a": [
      "Jimmy Shapiro",
      "Bruce Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "J-P Lautenschlager",
      "Michael Johnson"
     ],
     "a": [
      "Andress Mims",
      "Matt Inzerillo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Larry Minsky",
      "Gary Garretson"
     ],
     "a": [
      "Bruce Nguyen",
      "Uzoma Nwankwo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Michael Johnson",
      "Jimmy Duong"
     ],
     "a": [
      "Matt Inzerillo",
      "Mark Waters"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Andy Ro",
      "J-P Lautenschlager"
     ],
     "a": [
      "Jimmy Shapiro",
      "Andress Mims"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Angelo Disipio",
      "Steven Hummel"
     ],
     "a": [
      "Didier Jean-Baptiste",
      "Neale Smith"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 2,
   "home": "Monroe",
   "away": "Pickleball HQ",
   "time": "2026-09-01T19:30:00",
   "complete": true,
   "homePoints": 604,
   "awayPoints": 656,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "David Bogatyrev",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Luca Hendrickson",
      "Noah Ludwigsen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jacob Rosengarten",
      "Stephen Fredericksen"
     ],
     "a": [
      "Christopher Hendrickson",
      "Jimmy Ramja"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Uttam Purohit",
      "Salman Saad"
     ],
     "a": [
      "Thomas Moran",
      "Jose Campos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Shawn Gold",
      "Jason Mcmanmon"
     ],
     "a": [
      "Carlos Idrovo",
      "David Wheeler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Shawn Gold",
      "David Bogatyrev"
     ],
     "a": [
      "Luca Hendrickson",
      "Noah Ludwigsen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Salman Saad",
      "Nicholas Lugo"
     ],
     "a": [
      "Christopher Hendrickson",
      "Jimmy Ramja"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jason Mcmanmon",
      "Kurt Skalamera"
     ],
     "a": [
      "Thomas Moran",
      "Jose Campos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jacob Rosengarten",
      "Stephen Fredericksen"
     ],
     "a": [
      "Anthony Simonetti",
      "David Wheeler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kurt Skalamera",
      "Salman Saad"
     ],
     "a": [
      "Christopher Hendrickson",
      "Noah Ludwigsen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Shawn Gold",
      "David Bogatyrev"
     ],
     "a": [
      "Luca Hendrickson",
      "Anthony Simonetti"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Nicholas Lugo",
      "Uttam Purohit"
     ],
     "a": [
      "Carlos Idrovo",
      "Jose Campos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Michael Dombrowiecki",
      "Stephen Fredericksen"
     ],
     "a": [
      "Jimmy Ramja",
      "David Wheeler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jacob Rosengarten",
      "Nicholas Lugo"
     ],
     "a": [
      "Christopher Hendrickson",
      "Noah Ludwigsen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "David Bogatyrev",
      "Uttam Purohit"
     ],
     "a": [
      "Luca Hendrickson",
      "Anthony Simonetti"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jason Mcmanmon",
      "Kurt Skalamera"
     ],
     "a": [
      "Carlos Idrovo",
      "Jose Campos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Michael Dombrowiecki",
      "Stephen Fredericksen"
     ],
     "a": [
      "Jimmy Ramja",
      "Thomas Moran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jason Mcmanmon",
      "Jacob Rosengarten"
     ],
     "a": [
      "Noah Ludwigsen",
      "David Wheeler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Nicholas Lugo",
      "Shawn Gold"
     ],
     "a": [
      "Luca Hendrickson",
      "Christopher Hendrickson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "David Bogatyrev",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Jimmy Ramja",
      "Carlos Idrovo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kurt Skalamera",
      "Salman Saad"
     ],
     "a": [
      "Thomas Moran",
      "Anthony Simonetti"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Shawn Gold",
      "Nicholas Lugo"
     ],
     "a": [
      "David Wheeler",
      "Noah Ludwigsen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jacob Rosengarten",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Luca Hendrickson",
      "Christopher Hendrickson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Salman Saad",
      "Uttam Purohit"
     ],
     "a": [
      "Jimmy Ramja",
      "Carlos Idrovo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kurt Skalamera",
      "Stephen Fredericksen"
     ],
     "a": [
      "Thomas Moran",
      "Anthony Simonetti"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Nicholas Lugo",
      "Salman Saad"
     ],
     "a": [
      "Carlos Idrovo",
      "Noah Ludwigsen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Michael Dombrowiecki",
      "Jacob Rosengarten"
     ],
     "a": [
      "Christopher Hendrickson",
      "Jose Campos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "David Bogatyrev",
      "Uttam Purohit"
     ],
     "a": [
      "Anthony Simonetti",
      "David Wheeler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jason Mcmanmon",
      "Shawn Gold"
     ],
     "a": [
      "Luca Hendrickson",
      "Jimmy Ramja"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "David Bogatyrev",
      "Kurt Skalamera"
     ],
     "a": [
      "Anthony Simonetti",
      "Noah Ludwigsen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jason Mcmanmon",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Christopher Hendrickson",
      "Jose Campos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Jacob Rosengarten",
      "Nicholas Lugo"
     ],
     "a": [
      "Luca Hendrickson",
      "David Wheeler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Shawn Gold",
      "Stephen Fredericksen"
     ],
     "a": [
      "Thomas Moran",
      "Carlos Idrovo"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 2,
   "home": "Dill Dinkers Newport",
   "away": "Bounce Tempest",
   "time": "2026-09-01T19:30:00",
   "complete": true,
   "homePoints": 535,
   "awayPoints": 655,
   "homeGW": 9,
   "awayGW": 23,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "David Fiscella",
      "Paul Chantler"
     ],
     "a": [
      "Daniel Borgia",
      "Paul Perumaly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Keith Richard",
      "Rick Olafsson"
     ],
     "a": [
      "Jared Rapoport",
      "Yong Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Jesse Pettit",
      "Ian Diamond"
     ],
     "a": [
      "Jimmy Lee",
      "Joseph Luka"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "David Brond",
      "Steppan Konoplev"
     ],
     "a": [
      "Ethan Fu",
      "Ken Weinstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Keith Richard",
      "Steppan Konoplev"
     ],
     "a": [
      "Daniel Borgia",
      "Paul Perumaly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "David Fiscella",
      "Ian Diamond"
     ],
     "a": [
      "David Brandolph",
      "Jimmy Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jesse Pettit",
      "Paul Chantler"
     ],
     "a": [
      "Jared Rapoport",
      "Yong Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "David Brond",
      "Rick Olafsson"
     ],
     "a": [
      "Ethan Fu",
      "Ken Weinstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "David Brond",
      "Nitin Chawke"
     ],
     "a": [
      "David Brandolph",
      "Jimmy Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jesse Pettit",
      "Xan Hong"
     ],
     "a": [
      "Daniel Borgia",
      "Jared Rapoport"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Keith Richard",
      "Cosme Tapia"
     ],
     "a": [
      "Paul Perumaly",
      "Ken Weinstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "David Fiscella",
      "Malay Kaity"
     ],
     "a": [
      "Ethan Fu",
      "Joseph Luka"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "David Fiscella",
      "Steppan Konoplev"
     ],
     "a": [
      "David Brandolph",
      "Ethan Fu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jesse Pettit",
      "Rick Olafsson"
     ],
     "a": [
      "Yong Kim",
      "Jimmy Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Keith Richard",
      "Ian Diamond"
     ],
     "a": [
      "Paul Perumaly",
      "Joseph Luka"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "David Brond",
      "Paul Chantler"
     ],
     "a": [
      "Daniel Borgia",
      "Ken Weinstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "David Fiscella",
      "Xan Hong"
     ],
     "a": [
      "David Brandolph",
      "Paul Perumaly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jesse Pettit",
      "Cosme Tapia"
     ],
     "a": [
      "Daniel Borgia",
      "Joseph Luka"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Keith Richard",
      "Nitin Chawke"
     ],
     "a": [
      "Ethan Fu",
      "Yong Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "David Brond",
      "Malay Kaity"
     ],
     "a": [
      "Jared Rapoport",
      "Ken Weinstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jesse Pettit",
      "David Fiscella"
     ],
     "a": [
      "Daniel Borgia",
      "David Brandolph"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "David Brond",
      "Keith Richard"
     ],
     "a": [
      "Paul Perumaly",
      "Yong Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Steppan Konoplev",
      "Rick Olafsson"
     ],
     "a": [
      "Jared Rapoport",
      "Jimmy Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ian Diamond",
      "Paul Chantler"
     ],
     "a": [
      "Ken Weinstein",
      "Joseph Luka"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Keith Richard",
      "Xan Hong"
     ],
     "a": [
      "David Brandolph",
      "Daniel Borgia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "David Fiscella",
      "Nitin Chawke"
     ],
     "a": [
      "Paul Perumaly",
      "Yong Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "David Brond",
      "Cosme Tapia"
     ],
     "a": [
      "Jared Rapoport",
      "Joseph Luka"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jesse Pettit",
      "Malay Kaity"
     ],
     "a": [
      "Ethan Fu",
      "Jimmy Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Paul Chantler",
      "Nitin Chawke"
     ],
     "a": [
      "Daniel Borgia",
      "Yong Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Rick Olafsson",
      "Xan Hong"
     ],
     "a": [
      "David Brandolph",
      "Ken Weinstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Ian Diamond",
      "Cosme Tapia"
     ],
     "a": [
      "Jared Rapoport",
      "Joseph Luka"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Steppan Konoplev",
      "Malay Kaity"
     ],
     "a": [
      "Ethan Fu",
      "Jimmy Lee"
     ]
    }
   ],
   "subs": [
    "Malay Kaity",
    "David Brond",
    "Nitin Chawke"
   ]
  },
  {
   "result": "away",
   "week": 2,
   "home": "Pickleball Kingdom Hamilton",
   "away": "Premiere",
   "time": "2026-09-01T19:30:00",
   "complete": true,
   "homePoints": 602,
   "awayPoints": 626,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Aaron Chan",
      "Venu Yengala"
     ],
     "a": [
      "Matthew Schwartz",
      "Jason Feldman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Pritpal Singh",
      "Ashish Kumar"
     ],
     "a": [
      "Eden Ksendzovsky",
      "Brian “Bubba” Falco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Dhruv Dobariya",
      "Ziyu Huang"
     ],
     "a": [
      "Joseph Lynskey",
      "Christopher Giasi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Harsh Upadhyaya",
      "Dilip Patel"
     ],
     "a": [
      "Daniel Antonelli",
      "Timothy Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Dhruv Dobariya",
      "Ziyu Huang"
     ],
     "a": [
      "Jason Feldman",
      "Christopher Giasi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jaiveer Narwal",
      "Dilip Patel"
     ],
     "a": [
      "Daniel Antonelli",
      "Brian “Bubba” Falco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Harsh Upadhyaya",
      "Venu Yengala"
     ],
     "a": [
      "Matthew Schwartz",
      "Joseph Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Pritpal Singh",
      "Ashish Kumar"
     ],
     "a": [
      "Eden Ksendzovsky",
      "Timothy Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jaiveer Narwal",
      "Dilip Patel"
     ],
     "a": [
      "Matthew Schwartz",
      "Timothy Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Ziyu Huang",
      "Ashish Kumar"
     ],
     "a": [
      "Jason Feldman",
      "Eden Ksendzovsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Venu Yengala",
      "Harsh Upadhyaya"
     ],
     "a": [
      "Joseph Lynskey",
      "Daniel Antonelli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Pritpal Singh",
      "Dhruv Dobariya"
     ],
     "a": [
      "Brian “Bubba” Falco",
      "Christopher Giasi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Dhruv Dobariya",
      "Harsh Upadhyaya"
     ],
     "a": [
      "Jason Feldman",
      "Timothy Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ziyu Huang",
      "Jaiveer Narwal"
     ],
     "a": [
      "Matthew Schwartz",
      "Christopher Giasi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Pritpal Singh",
      "Aaron Chan"
     ],
     "a": [
      "Eden Ksendzovsky",
      "Daniel Antonelli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Venu Yengala",
      "Dilip Patel"
     ],
     "a": [
      "Joseph Lynskey",
      "Brian “Bubba” Falco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Ashish Kumar",
      "Venu Yengala"
     ],
     "a": [
      "Brian “Bubba” Falco",
      "Daniel Antonelli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Pritpal Singh",
      "Ziyu Huang"
     ],
     "a": [
      "Joseph Lynskey",
      "Christopher Giasi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Dhruv Dobariya",
      "Harsh Upadhyaya"
     ],
     "a": [
      "Eden Ksendzovsky",
      "Jason Feldman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jaiveer Narwal",
      "Aaron Chan"
     ],
     "a": [
      "Timothy Lynskey",
      "Matthew Schwartz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Pritpal Singh",
      "Ziyu Huang"
     ],
     "a": [
      "Joseph Lynskey",
      "Eden Ksendzovsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Venu Yengala",
      "Dilip Patel"
     ],
     "a": [
      "Jason Feldman",
      "Brian “Bubba” Falco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ashish Kumar",
      "Aaron Chan"
     ],
     "a": [
      "Matthew Schwartz",
      "Christopher Giasi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Dhruv Dobariya",
      "Jaiveer Narwal"
     ],
     "a": [
      "Daniel Antonelli",
      "Timothy Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Pritpal Singh",
      "Jaiveer Narwal"
     ],
     "a": [
      "Eden Ksendzovsky",
      "Brian “Bubba” Falco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Dhruv Dobariya",
      "Dilip Patel"
     ],
     "a": [
      "Matthew Schwartz",
      "Jason Feldman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Ashish Kumar",
      "Harsh Upadhyaya"
     ],
     "a": [
      "Christopher Giasi",
      "Timothy Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Venu Yengala",
      "Ziyu Huang"
     ],
     "a": [
      "Joseph Lynskey",
      "Daniel Antonelli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Ziyu Huang",
      "Dilip Patel"
     ],
     "a": [
      "Brian “Bubba” Falco",
      "Matthew Schwartz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Pritpal Singh",
      "Dhruv Dobariya"
     ],
     "a": [
      "Daniel Antonelli",
      "Christopher Giasi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Aaron Chan",
      "Harsh Upadhyaya"
     ],
     "a": [
      "Eden Ksendzovsky",
      "Timothy Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Venu Yengala",
      "Jaiveer Narwal"
     ],
     "a": [
      "Jason Feldman",
      "Joseph Lynskey"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 2,
   "home": "Jersey Devil",
   "away": "Bounce Malvern",
   "time": "2026-09-01T19:30:00",
   "complete": true,
   "homePoints": 568,
   "awayPoints": 611,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Tim Bruno",
      "Brandon Dejesus"
     ],
     "a": [
      "Graham Heavenrich",
      "Andrew Neave"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Derek Livingston",
      "Frederick Cox"
     ],
     "a": [
      "Harrison Bohrer",
      "Charles Evans"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Jonathan Carter",
      "Mario Contreras"
     ],
     "a": [
      "Harvey Mitchell",
      "Vincent Demarco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Daniel Hadley",
      "Christopher Uston"
     ],
     "a": [
      "Sal Bwint",
      "Lincoln Jensen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Daniel Hadley",
      "Frederick Cox"
     ],
     "a": [
      "Sal Bwint",
      "Russell Cripps"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Dan Ruble",
      "Christopher Uston"
     ],
     "a": [
      "Charles Evans",
      "Lincoln Jensen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Brandon Dejesus",
      "Jonathan Carter"
     ],
     "a": [
      "Andrew Neave",
      "Harrison Bohrer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Tim Bruno",
      "Steve Hong"
     ],
     "a": [
      "Jordan Demcher",
      "Jamison Rowles"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Brandon Dejesus",
      "Christopher Uston"
     ],
     "a": [
      "Lincoln Jensen",
      "Russell Cripps"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tim Bruno",
      "Dan Ruble"
     ],
     "a": [
      "Jordan Demcher",
      "Vincent Demarco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Daniel Hadley",
      "Jonathan Carter"
     ],
     "a": [
      "Harvey Mitchell",
      "Sal Bwint"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Steve Hong",
      "Derek Livingston"
     ],
     "a": [
      "Graham Heavenrich",
      "Andrew Neave"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Brandon Dejesus",
      "Christopher Uston"
     ],
     "a": [
      "Harrison Bohrer",
      "Jamison Rowles"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Dan Ruble",
      "Tim Bruno"
     ],
     "a": [
      "Sal Bwint",
      "Vincent Demarco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Derek Livingston",
      "Frederick Cox"
     ],
     "a": [
      "Graham Heavenrich",
      "Lincoln Jensen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Mario Contreras",
      "Jonathan Carter"
     ],
     "a": [
      "Jordan Demcher",
      "Charles Evans"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Daniel Hadley",
      "Frederick Cox"
     ],
     "a": [
      "Jordan Demcher",
      "Andrew Neave"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Christopher Uston",
      "Dan Ruble"
     ],
     "a": [
      "Harvey Mitchell",
      "Charles Evans"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Mario Contreras",
      "Derek Livingston"
     ],
     "a": [
      "Graham Heavenrich",
      "Harrison Bohrer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Tim Bruno",
      "Steve Hong"
     ],
     "a": [
      "Russell Cripps",
      "Jamison Rowles"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Daniel Hadley",
      "Jonathan Carter"
     ],
     "a": [
      "Russell Cripps",
      "Harvey Mitchell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Mario Contreras",
      "Derek Livingston"
     ],
     "a": [
      "Sal Bwint",
      "Vincent Demarco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Dan Ruble",
      "Steve Hong"
     ],
     "a": [
      "Harrison Bohrer",
      "Lincoln Jensen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Tim Bruno",
      "Brandon Dejesus"
     ],
     "a": [
      "Andrew Neave",
      "Jamison Rowles"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Frederick Cox",
      "Dan Ruble"
     ],
     "a": [
      "Harvey Mitchell",
      "Graham Heavenrich"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Tim Bruno",
      "Christopher Uston"
     ],
     "a": [
      "Jordan Demcher",
      "Charles Evans"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Brandon Dejesus",
      "Steve Hong"
     ],
     "a": [
      "Andrew Neave",
      "Jamison Rowles"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Mario Contreras",
      "Daniel Hadley"
     ],
     "a": [
      "Vincent Demarco",
      "Russell Cripps"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Brandon Dejesus",
      "Jonathan Carter"
     ],
     "a": [
      "Sal Bwint",
      "Graham Heavenrich"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Frederick Cox",
      "Christopher Uston"
     ],
     "a": [
      "Harrison Bohrer",
      "Lincoln Jensen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Steve Hong",
      "Derek Livingston"
     ],
     "a": [
      "Harvey Mitchell",
      "Jamison Rowles"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Dan Ruble",
      "Mario Contreras"
     ],
     "a": [
      "Jordan Demcher",
      "Vincent Demarco"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 2,
   "home": "Pickle House",
   "away": "Dill Dinkers Freehold",
   "time": "2026-09-01T19:30:00",
   "complete": true,
   "homePoints": 646,
   "awayPoints": 554,
   "homeGW": 25,
   "awayGW": 7,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Rajeeth Nadig",
      "Jitendra Arora"
     ],
     "a": [
      "Erik Reilly",
      "Kevin Lew"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Varun Gurram",
      "Bennett Pereira"
     ],
     "a": [
      "Hua Lin",
      "Wensheng Yue"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Avneesh Agarwal",
      "Abhishekh Mehra"
     ],
     "a": [
      "Uday Acham",
      "Siva Indupuru"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Rakshit Maddur Gopinath",
      "Neil Dedhia"
     ],
     "a": [
      "Big G",
      "Ian Kohn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jitendra Arora",
      "Sushil Rijhwani"
     ],
     "a": [
      "Erik Reilly",
      "Kevin Lew"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Varun Gurram",
      "Rajeeth Nadig"
     ],
     "a": [
      "Hua Lin",
      "Wensheng Yue"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Abhishekh Mehra",
      "Bennett Pereira"
     ],
     "a": [
      "Michael Vollmer",
      "Ben Cortes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Avneesh Agarwal",
      "Neil Dedhia"
     ],
     "a": [
      "Ian Kohn",
      "Big G"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Sushil Rijhwani",
      "Rajeeth Nadig"
     ],
     "a": [
      "Erik Reilly",
      "Ben Cortes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Varun Gurram",
      "Neil Dedhia"
     ],
     "a": [
      "Michael Vollmer",
      "Big G"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Bennett Pereira",
      "Abhishekh Mehra"
     ],
     "a": [
      "Ian Kohn",
      "Pedro Delgado"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Rakshit Maddur Gopinath",
      "Avneesh Agarwal"
     ],
     "a": [
      "Siva Indupuru",
      "Uday Acham"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jitendra Arora",
      "Rajeeth Nadig"
     ],
     "a": [
      "Erik Reilly",
      "Ben Cortes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Varun Gurram",
      "Sushil Rijhwani"
     ],
     "a": [
      "Kevin Lew",
      "Wensheng Yue"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Avneesh Agarwal",
      "Abhishekh Mehra"
     ],
     "a": [
      "Michael Vollmer",
      "Hua Lin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Bennett Pereira",
      "Rakshit Maddur Gopinath"
     ],
     "a": [
      "Big G",
      "Pedro Delgado"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sushil Rijhwani",
      "Abhishekh Mehra"
     ],
     "a": [
      "Erik Reilly",
      "Wensheng Yue"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Varun Gurram",
      "Rakshit Maddur Gopinath"
     ],
     "a": [
      "Hua Lin",
      "Ben Cortes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Avneesh Agarwal",
      "Jitendra Arora"
     ],
     "a": [
      "Kevin Lew",
      "Uday Acham"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Rajeeth Nadig",
      "Neil Dedhia"
     ],
     "a": [
      "Michael Vollmer",
      "Siva Indupuru"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 28,
     "as": 30,
     "h": [
      "Jitendra Arora",
      "Neil Dedhia"
     ],
     "a": [
      "Erik Reilly",
      "Wensheng Yue"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Varun Gurram",
      "Rakshit Maddur Gopinath"
     ],
     "a": [
      "Kevin Lew",
      "Hua Lin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Sushil Rijhwani",
      "Bennett Pereira"
     ],
     "a": [
      "Pedro Delgado",
      "Uday Acham"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Rajeeth Nadig",
      "Abhishekh Mehra"
     ],
     "a": [
      "Michael Vollmer",
      "Siva Indupuru"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Varun Gurram",
      "Rajeeth Nadig"
     ],
     "a": [
      "Michael Vollmer",
      "Hua Lin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jitendra Arora",
      "Bennett Pereira"
     ],
     "a": [
      "Uday Acham",
      "Ben Cortes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Sushil Rijhwani",
      "Avneesh Agarwal"
     ],
     "a": [
      "Ian Kohn",
      "Pedro Delgado"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Rakshit Maddur Gopinath",
      "Abhishekh Mehra"
     ],
     "a": [
      "Big G",
      "Siva Indupuru"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Varun Gurram",
      "Jitendra Arora"
     ],
     "a": [
      "Kevin Lew",
      "Wensheng Yue"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Rajeeth Nadig",
      "Sushil Rijhwani"
     ],
     "a": [
      "Pedro Delgado",
      "Ben Cortes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Avneesh Agarwal",
      "Bennett Pereira"
     ],
     "a": [
      "Uday Acham",
      "Big G"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Neil Dedhia",
      "Rakshit Maddur Gopinath"
     ],
     "a": [
      "Ian Kohn",
      "Siva Indupuru"
     ]
    }
   ],
   "subs": [
    "Abhishekh Mehra"
   ]
  },
  {
   "result": "home",
   "week": 3,
   "home": "Bounce Malvern",
   "away": "APC Garden State",
   "time": "2026-09-08T19:00:00",
   "complete": true,
   "homePoints": 641,
   "awayPoints": 548,
   "homeGW": 23,
   "awayGW": 9,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Graham Heavenrich",
      "Ryan Hathaway"
     ],
     "a": [
      "Uzoma Nwankwo",
      "Tyler Bayly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Jordan Demcher",
      "Andrew Neave"
     ],
     "a": [
      "Matt Inzerillo",
      "Mark Waters"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jr Burrs",
      "Leland Weinert"
     ],
     "a": [
      "Chris Machuzak",
      "Andress Mims"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Matheus Korndoerfer",
      "Dan Ladislaw"
     ],
     "a": [
      "Yongzhe Tian",
      "Bruce Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jamison Rowles",
      "Jordan Demcher"
     ],
     "a": [
      "Uzoma Nwankwo",
      "Bruce Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Graham Heavenrich",
      "Matt Enz"
     ],
     "a": [
      "Matt Inzerillo",
      "Tyler Bayly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jr Burrs",
      "Dan Ladislaw"
     ],
     "a": [
      "Mark Waters",
      "Andrew Ferraro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Matheus Korndoerfer",
      "Andrew Neave"
     ],
     "a": [
      "Andress Mims",
      "Yongzhe Tian"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jordan Demcher",
      "Dan Ladislaw"
     ],
     "a": [
      "Uzoma Nwankwo",
      "Matt Inzerillo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ryan Hathaway",
      "Leland Weinert"
     ],
     "a": [
      "Mark Waters",
      "Chris Machuzak"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Matt Enz",
      "Andrew Neave"
     ],
     "a": [
      "Andress Mims",
      "Andrew Ferraro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jamison Rowles",
      "Graham Heavenrich"
     ],
     "a": [
      "Tyler Bayly",
      "Yongzhe Tian"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jordan Demcher",
      "Ryan Hathaway"
     ],
     "a": [
      "Uzoma Nwankwo",
      "Tyler Bayly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Jamison Rowles",
      "Jr Burrs"
     ],
     "a": [
      "Matt Inzerillo",
      "Yongzhe Tian"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Matt Enz",
      "Dan Ladislaw"
     ],
     "a": [
      "Mark Waters",
      "Bruce Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Matheus Korndoerfer",
      "Andrew Neave"
     ],
     "a": [
      "Chris Machuzak",
      "Andress Mims"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jamison Rowles",
      "Matt Enz"
     ],
     "a": [
      "Uzoma Nwankwo",
      "Andress Mims"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jordan Demcher",
      "Dan Ladislaw"
     ],
     "a": [
      "Andrew Ferraro",
      "Matt Inzerillo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Graham Heavenrich",
      "Matheus Korndoerfer"
     ],
     "a": [
      "Bruce Nguyen",
      "Tyler Bayly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jr Burrs",
      "Leland Weinert"
     ],
     "a": [
      "Chris Machuzak",
      "Mark Waters"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Matheus Korndoerfer",
      "Leland Weinert"
     ],
     "a": [
      "Uzoma Nwankwo",
      "Bruce Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jr Burrs",
      "Ryan Hathaway"
     ],
     "a": [
      "Andrew Ferraro",
      "Chris Machuzak"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Graham Heavenrich",
      "Andrew Neave"
     ],
     "a": [
      "Yongzhe Tian",
      "Andress Mims"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jamison Rowles",
      "Matt Enz"
     ],
     "a": [
      "Tyler Bayly",
      "Matt Inzerillo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Matheus Korndoerfer",
      "Dan Ladislaw"
     ],
     "a": [
      "Uzoma Nwankwo",
      "Yongzhe Tian"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jordan Demcher",
      "Ryan Hathaway"
     ],
     "a": [
      "Matt Inzerillo",
      "Bruce Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Leland Weinert",
      "Jamison Rowles"
     ],
     "a": [
      "Andrew Ferraro",
      "Mark Waters"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Graham Heavenrich",
      "Matt Enz"
     ],
     "a": [
      "Tyler Bayly",
      "Chris Machuzak"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jordan Demcher",
      "Andrew Neave"
     ],
     "a": [
      "Uzoma Nwankwo",
      "Chris Machuzak"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Matheus Korndoerfer",
      "Leland Weinert"
     ],
     "a": [
      "Matt Inzerillo",
      "Andress Mims"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jr Burrs",
      "Ryan Hathaway"
     ],
     "a": [
      "Andrew Ferraro",
      "Yongzhe Tian"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Graham Heavenrich",
      "Jamison Rowles"
     ],
     "a": [
      "Bruce Nguyen",
      "Mark Waters"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 3,
   "home": "Premiere",
   "away": "Pickleball HQ",
   "time": "2026-09-08T19:00:00",
   "complete": true,
   "homePoints": 587,
   "awayPoints": 632,
   "homeGW": 11,
   "awayGW": 21,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Rob Telles",
      "Jim Boy Baring"
     ],
     "a": [
      "Noah Ludwigsen",
      "Luca Hendrickson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Daniel Antonelli",
      "Timothy Lynskey"
     ],
     "a": [
      "David Wheeler",
      "Anthony Simonetti"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Joseph Lynskey",
      "Eden Ksendzovsky"
     ],
     "a": [
      "Christopher Hendrickson",
      "Jimmy Ramja"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Christopher Giasi",
      "Gary White"
     ],
     "a": [
      "Nesip Cengiz",
      "Niman Ahmeti"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Joseph Lynskey",
      "Gary White"
     ],
     "a": [
      "Noah Ludwigsen",
      "Luca Hendrickson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Daniel Antonelli",
      "Christopher Giasi"
     ],
     "a": [
      "Anthony Simonetti",
      "Christopher Hendrickson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Timothy Lynskey",
      "Nacio Marshall"
     ],
     "a": [
      "David Wheeler",
      "Kyle Korman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Rob Telles",
      "Eden Ksendzovsky"
     ],
     "a": [
      "Nesip Cengiz",
      "Jimmy Ramja"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Gary White",
      "Daniel Antonelli"
     ],
     "a": [
      "Noah Ludwigsen",
      "David Wheeler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Eden Ksendzovsky",
      "Joseph Lynskey"
     ],
     "a": [
      "Anthony Simonetti",
      "Luca Hendrickson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Timothy Lynskey",
      "Rob Telles"
     ],
     "a": [
      "Christopher Hendrickson",
      "Kyle Korman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jim Boy Baring",
      "Nacio Marshall"
     ],
     "a": [
      "Nesip Cengiz",
      "Niman Ahmeti"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Eden Ksendzovsky",
      "Daniel Antonelli"
     ],
     "a": [
      "David Wheeler",
      "Noah Ludwigsen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Joseph Lynskey",
      "Christopher Giasi"
     ],
     "a": [
      "Luca Hendrickson",
      "Anthony Simonetti"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Gary White",
      "Timothy Lynskey"
     ],
     "a": [
      "Christopher Hendrickson",
      "Jimmy Ramja"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Nacio Marshall",
      "Jim Boy Baring"
     ],
     "a": [
      "Niman Ahmeti",
      "Kyle Korman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Joseph Lynskey",
      "Timothy Lynskey"
     ],
     "a": [
      "Christopher Hendrickson",
      "Noah Ludwigsen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Daniel Antonelli",
      "Christopher Giasi"
     ],
     "a": [
      "Anthony Simonetti",
      "David Wheeler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Eden Ksendzovsky",
      "Gary White"
     ],
     "a": [
      "Luca Hendrickson",
      "Niman Ahmeti"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Rob Telles",
      "Nacio Marshall"
     ],
     "a": [
      "Nesip Cengiz",
      "Jimmy Ramja"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Joseph Lynskey",
      "Timothy Lynskey"
     ],
     "a": [
      "Christopher Hendrickson",
      "Noah Ludwigsen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Daniel Antonelli",
      "Rob Telles"
     ],
     "a": [
      "Anthony Simonetti",
      "Nesip Cengiz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jim Boy Baring",
      "Gary White"
     ],
     "a": [
      "Luca Hendrickson",
      "Kyle Korman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Christopher Giasi",
      "Nacio Marshall"
     ],
     "a": [
      "Jimmy Ramja",
      "Niman Ahmeti"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Eden Ksendzovsky",
      "Timothy Lynskey"
     ],
     "a": [
      "Anthony Simonetti",
      "Noah Ludwigsen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jim Boy Baring",
      "Christopher Giasi"
     ],
     "a": [
      "Nesip Cengiz",
      "David Wheeler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Daniel Antonelli",
      "Gary White"
     ],
     "a": [
      "Christopher Hendrickson",
      "Luca Hendrickson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Nacio Marshall",
      "Joseph Lynskey"
     ],
     "a": [
      "Kyle Korman",
      "Niman Ahmeti"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Daniel Antonelli",
      "Eden Ksendzovsky"
     ],
     "a": [
      "Noah Ludwigsen",
      "Jimmy Ramja"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jim Boy Baring",
      "Timothy Lynskey"
     ],
     "a": [
      "Anthony Simonetti",
      "Kyle Korman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Joseph Lynskey",
      "Gary White"
     ],
     "a": [
      "Christopher Hendrickson",
      "Luca Hendrickson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Rob Telles",
      "Christopher Giasi"
     ],
     "a": [
      "David Wheeler",
      "Niman Ahmeti"
     ]
    }
   ],
   "subs": [
    "Jim Boy Baring",
    "Nacio Marshall"
   ]
  },
  {
   "result": "away",
   "week": 3,
   "home": "Dill Dinkers Freehold",
   "away": "Pickleball Kingdom Hamilton",
   "time": "2026-09-08T19:00:00",
   "complete": true,
   "homePoints": 568,
   "awayPoints": 644,
   "homeGW": 9,
   "awayGW": 23,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Wensheng Yue",
      "Hua Lin"
     ],
     "a": [
      "Pritpal Singh",
      "Aaron Chan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Erik Reilly",
      "Kevin Lew"
     ],
     "a": [
      "Ziyu Huang",
      "Dhruv Dobariya"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Michael Vollmer",
      "Siva Indupuru"
     ],
     "a": [
      "Venu Yengala",
      "Harsh Upadhyaya"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Ben Cortes",
      "Big G"
     ],
     "a": [
      "Ashish Kumar",
      "Samrat Sood"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Ian Kohn",
      "Big G"
     ],
     "a": [
      "Pritpal Singh",
      "Ashish Kumar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Michael Vollmer",
      "Hua Lin"
     ],
     "a": [
      "Ziyu Huang",
      "Venu Yengala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Erik Reilly",
      "Ben Cortes"
     ],
     "a": [
      "Dilip Patel",
      "Harsh Upadhyaya"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kevin Lew",
      "Uday Acham"
     ],
     "a": [
      "Dhruv Dobariya",
      "Samrat Sood"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Ian Kohn",
      "Big G"
     ],
     "a": [
      "Pritpal Singh",
      "Venu Yengala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Erik Reilly",
      "Kevin Lew"
     ],
     "a": [
      "Ziyu Huang",
      "Dhruv Dobariya"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Uday Acham",
      "Siva Indupuru"
     ],
     "a": [
      "Ashish Kumar",
      "Aaron Chan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Ben Cortes",
      "Wensheng Yue"
     ],
     "a": [
      "Dilip Patel",
      "Harsh Upadhyaya"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kevin Lew",
      "Wensheng Yue"
     ],
     "a": [
      "Pritpal Singh",
      "Samrat Sood"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Michael Vollmer",
      "Hua Lin"
     ],
     "a": [
      "Ziyu Huang",
      "Venu Yengala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Erik Reilly",
      "Siva Indupuru"
     ],
     "a": [
      "Harsh Upadhyaya",
      "Dhruv Dobariya"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Ben Cortes",
      "Uday Acham"
     ],
     "a": [
      "Dilip Patel",
      "Aaron Chan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Ian Kohn",
      "Uday Acham"
     ],
     "a": [
      "Pritpal Singh",
      "Harsh Upadhyaya"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Erik Reilly",
      "Wensheng Yue"
     ],
     "a": [
      "Dilip Patel",
      "Dhruv Dobariya"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kevin Lew",
      "Ben Cortes"
     ],
     "a": [
      "Ashish Kumar",
      "Ziyu Huang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Hua Lin",
      "Big G"
     ],
     "a": [
      "Aaron Chan",
      "Venu Yengala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Big G",
      "Siva Indupuru"
     ],
     "a": [
      "Pritpal Singh",
      "Venu Yengala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Erik Reilly",
      "Ben Cortes"
     ],
     "a": [
      "Ziyu Huang",
      "Aaron Chan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Hua Lin",
      "Kevin Lew"
     ],
     "a": [
      "Ashish Kumar",
      "Dilip Patel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Wensheng Yue",
      "Michael Vollmer"
     ],
     "a": [
      "Harsh Upadhyaya",
      "Samrat Sood"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Hua Lin",
      "Siva Indupuru"
     ],
     "a": [
      "Pritpal Singh",
      "Dhruv Dobariya"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Kevin Lew",
      "Michael Vollmer"
     ],
     "a": [
      "Ashish Kumar",
      "Harsh Upadhyaya"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Uday Acham",
      "Ian Kohn"
     ],
     "a": [
      "Venu Yengala",
      "Samrat Sood"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Erik Reilly",
      "Wensheng Yue"
     ],
     "a": [
      "Dilip Patel",
      "Ziyu Huang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Ian Kohn",
      "Michael Vollmer"
     ],
     "a": [
      "Pritpal Singh",
      "Ashish Kumar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Erik Reilly",
      "Hua Lin"
     ],
     "a": [
      "Venu Yengala",
      "Dhruv Dobariya"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Wensheng Yue",
      "Kevin Lew"
     ],
     "a": [
      "Harsh Upadhyaya",
      "Aaron Chan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Siva Indupuru",
      "Uday Acham"
     ],
     "a": [
      "Dilip Patel",
      "Samrat Sood"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 3,
   "home": "Pickleball Kingdom Lehigh Valley",
   "away": "Flemington",
   "time": "2026-09-08T19:00:00",
   "complete": true,
   "homePoints": 683,
   "awayPoints": 576,
   "homeGW": 26,
   "awayGW": 6,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Samuel Kashefska",
      "Eric Ruiz"
     ],
     "a": [
      "Eric Berlinger",
      "Roberto Marcillo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Rohit Mankotia",
      "Kevin Tran"
     ],
     "a": [
      "John Pineda",
      "Josh Fink"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ayon Codner",
      "Ali Bhimji"
     ],
     "a": [
      "Craig Butler",
      "Franklin Lupianez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Michael Barndt",
      "Carlos Rincon"
     ],
     "a": [
      "David Tabacco",
      "Josh Rito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ayon Codner",
      "Samuel Kashefska"
     ],
     "a": [
      "Eric Berlinger",
      "Roberto Marcillo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Rohit Mankotia",
      "Eric Ruiz"
     ],
     "a": [
      "John Pineda",
      "Josh Fink"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ali Bhimji",
      "Carlos Rincon"
     ],
     "a": [
      "Craig Butler",
      "Franklin Lupianez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Cullen Curley",
      "David Reyes"
     ],
     "a": [
      "David Tabacco",
      "Josh Rito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Ayon Codner",
      "Rohit Mankotia"
     ],
     "a": [
      "John Pineda",
      "Eric Berlinger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Samuel Kashefska",
      "Cullen Curley"
     ],
     "a": [
      "Craig Butler",
      "Roberto Marcillo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Michael Barndt",
      "Eric Ruiz"
     ],
     "a": [
      "Josh Fink",
      "David Tabacco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ali Bhimji",
      "David Reyes"
     ],
     "a": [
      "Franklin Lupianez",
      "Josh Rito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Samuel Kashefska",
      "Kevin Tran"
     ],
     "a": [
      "Eric Berlinger",
      "John Pineda"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ayon Codner",
      "Eric Ruiz"
     ],
     "a": [
      "Craig Butler",
      "Roberto Marcillo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Rohit Mankotia",
      "David Reyes"
     ],
     "a": [
      "Josh Fink",
      "David Tabacco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Cullen Curley",
      "Michael Barndt"
     ],
     "a": [
      "Franklin Lupianez",
      "Josh Rito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Samuel Kashefska",
      "Michael Barndt"
     ],
     "a": [
      "Craig Butler",
      "John Pineda"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ayon Codner",
      "Cullen Curley"
     ],
     "a": [
      "Roberto Marcillo",
      "David Tabacco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Rohit Mankotia",
      "Kevin Tran"
     ],
     "a": [
      "Josh Fink",
      "Franklin Lupianez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Carlos Rincon",
      "Ali Bhimji"
     ],
     "a": [
      "Eric Berlinger",
      "Josh Rito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Samuel Kashefska",
      "Kevin Tran"
     ],
     "a": [
      "John Pineda",
      "Craig Butler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Carlos Rincon",
      "Michael Barndt"
     ],
     "a": [
      "David Tabacco",
      "Roberto Marcillo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Ayon Codner",
      "Eric Ruiz"
     ],
     "a": [
      "Josh Fink",
      "Franklin Lupianez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Cullen Curley",
      "David Reyes"
     ],
     "a": [
      "Eric Berlinger",
      "Josh Rito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Eric Ruiz",
      "Cullen Curley"
     ],
     "a": [
      "John Pineda",
      "David Tabacco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Rohit Mankotia",
      "Samuel Kashefska"
     ],
     "a": [
      "Eric Berlinger",
      "Josh Fink"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "David Reyes",
      "Ali Bhimji"
     ],
     "a": [
      "Craig Butler",
      "Josh Rito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ayon Codner",
      "Kevin Tran"
     ],
     "a": [
      "Roberto Marcillo",
      "Franklin Lupianez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 29,
     "as": 27,
     "h": [
      "Rohit Mankotia",
      "Eric Ruiz"
     ],
     "a": [
      "John Pineda",
      "David Tabacco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Ayon Codner",
      "Samuel Kashefska"
     ],
     "a": [
      "Eric Berlinger",
      "Josh Fink"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "David Reyes",
      "Michael Barndt"
     ],
     "a": [
      "Craig Butler",
      "Josh Rito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kevin Tran",
      "Carlos Rincon"
     ],
     "a": [
      "Roberto Marcillo",
      "Franklin Lupianez"
     ]
    }
   ],
   "subs": [
    "Roberto Marcillo"
   ]
  },
  {
   "result": "home",
   "week": 3,
   "home": "Bounce Tempest",
   "away": "Picklr Newtown",
   "time": "2026-09-08T19:30:00",
   "complete": true,
   "homePoints": 663,
   "awayPoints": 543,
   "homeGW": 25,
   "awayGW": 7,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Yong Kim",
      "David Brandolph"
     ],
     "a": [
      "Michael Johnson",
      "Andrew Mclean"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Jimmy Lee",
      "Paul Perumaly"
     ],
     "a": [
      "J-P Lautenschlager",
      "Alessio Muscara"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Vincent Rigoglioso",
      "Kyle Martin"
     ],
     "a": [
      "Arnold Poblete",
      "Angelo Disipio"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Joseph Luka",
      "Jared Rapoport"
     ],
     "a": [
      "Andy Ro",
      "Larry Minsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Yong Kim",
      "Paul Perumaly"
     ],
     "a": [
      "Steven Hummel",
      "Alessio Muscara"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jimmy Lee",
      "Ethan Fu"
     ],
     "a": [
      "Mathew Yang",
      "Larry Minsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kyle Martin",
      "Vincent Rigoglioso"
     ],
     "a": [
      "Arnold Poblete",
      "Angelo Disipio"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jared Rapoport",
      "Joseph Luka"
     ],
     "a": [
      "Michael Johnson",
      "Jimmy Duong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "David Brandolph",
      "Jimmy Lee"
     ],
     "a": [
      "Steven Hummel",
      "Alessio Muscara"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Yong Kim",
      "Paul Perumaly"
     ],
     "a": [
      "Mathew Yang",
      "Larry Minsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ken Weinstein",
      "Vincent Rigoglioso"
     ],
     "a": [
      "Arnold Poblete",
      "Jimmy Duong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Kyle Martin",
      "Ethan Fu"
     ],
     "a": [
      "J-P Lautenschlager",
      "Andrew Mclean"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "David Brandolph",
      "Vincent Rigoglioso"
     ],
     "a": [
      "Steven Hummel",
      "Andrew Mclean"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Yong Kim",
      "Jared Rapoport"
     ],
     "a": [
      "Mathew Yang",
      "Angelo Disipio"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Ken Weinstein",
      "Joseph Luka"
     ],
     "a": [
      "Andy Ro",
      "Jimmy Duong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kyle Martin",
      "Ethan Fu"
     ],
     "a": [
      "Michael Johnson",
      "J-P Lautenschlager"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "David Brandolph",
      "Paul Perumaly"
     ],
     "a": [
      "Michael Johnson",
      "Andrew Mclean"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jared Rapoport",
      "Yong Kim"
     ],
     "a": [
      "Mathew Yang",
      "Angelo Disipio"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jimmy Lee",
      "Vincent Rigoglioso"
     ],
     "a": [
      "Andy Ro",
      "J-P Lautenschlager"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Ken Weinstein",
      "Joseph Luka"
     ],
     "a": [
      "Larry Minsky",
      "Alessio Muscara"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Paul Perumaly",
      "Kyle Martin"
     ],
     "a": [
      "Steven Hummel",
      "Angelo Disipio"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Joseph Luka",
      "Jimmy Lee"
     ],
     "a": [
      "Arnold Poblete",
      "Mathew Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Ken Weinstein",
      "Vincent Rigoglioso"
     ],
     "a": [
      "Andy Ro",
      "Jimmy Duong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jared Rapoport",
      "Ethan Fu"
     ],
     "a": [
      "Larry Minsky",
      "Michael Johnson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "David Brandolph",
      "Paul Perumaly"
     ],
     "a": [
      "Steven Hummel",
      "Angelo Disipio"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jimmy Lee",
      "Yong Kim"
     ],
     "a": [
      "Arnold Poblete",
      "Mathew Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jared Rapoport",
      "Ken Weinstein"
     ],
     "a": [
      "J-P Lautenschlager",
      "Alessio Muscara"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Joseph Luka",
      "Ethan Fu"
     ],
     "a": [
      "Larry Minsky",
      "Andrew Mclean"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "David Brandolph",
      "Vincent Rigoglioso"
     ],
     "a": [
      "Steven Hummel",
      "Andrew Mclean"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Paul Perumaly",
      "Kyle Martin"
     ],
     "a": [
      "Alessio Muscara",
      "Jimmy Duong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Yong Kim",
      "Ken Weinstein"
     ],
     "a": [
      "Arnold Poblete",
      "Andy Ro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jimmy Lee",
      "Ethan Fu"
     ],
     "a": [
      "Larry Minsky",
      "Michael Johnson"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 3,
   "home": "Allstar Pickler",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-09-08T19:30:00",
   "complete": true,
   "homePoints": 555,
   "awayPoints": 654,
   "homeGW": 10,
   "awayGW": 22,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Brandon Fulford",
      "Allan Orchard"
     ],
     "a": [
      "George Vega Jr",
      "Yashraj Kurani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Franklin Yiu",
      "Jonathan Lugtu"
     ],
     "a": [
      "Jun Zhi Tan",
      "Ritesh Patel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Elias Eid",
      "Steve Roth"
     ],
     "a": [
      "Corey Chen",
      "Ed Villaverde"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Sean Majury",
      "Gianni Roman"
     ],
     "a": [
      "Marc Padre",
      "Akash Raju"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Brandon Fulford",
      "Allan Orchard"
     ],
     "a": [
      "George Vega Jr",
      "Yashraj Kurani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Franklin Yiu",
      "Jonathan Lugtu"
     ],
     "a": [
      "Jun Zhi Tan",
      "Ritesh Patel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Elias Eid",
      "Steve Roth"
     ],
     "a": [
      "Corey Chen",
      "Ed Villaverde"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Sean Majury",
      "Gianni Roman"
     ],
     "a": [
      "Marc Padre",
      "Akash Raju"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Peter Chen",
      "Steve Roth"
     ],
     "a": [
      "Marc Padre",
      "Jun Zhi Tan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Brandon Fulford",
      "Franklin Yiu"
     ],
     "a": [
      "Akash Raju",
      "George Vega Jr"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Elias Eid",
      "Jonathan Lugtu"
     ],
     "a": [
      "Yashraj Kurani",
      "Corey Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Sean Majury",
      "Allan Orchard"
     ],
     "a": [
      "Ritesh Patel",
      "Ed Villaverde"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Allan Orchard",
      "Steve Roth"
     ],
     "a": [
      "Marc Padre",
      "Jun Zhi Tan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Brandon Fulford",
      "Franklin Yiu"
     ],
     "a": [
      "Akash Raju",
      "George Vega Jr"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Elias Eid",
      "Jonathan Lugtu"
     ],
     "a": [
      "Yashraj Kurani",
      "Corey Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sean Majury",
      "Peter Chen"
     ],
     "a": [
      "Ed Villaverde",
      "Ritesh Patel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Franklin Yiu",
      "Peter Chen"
     ],
     "a": [
      "Ed Villaverde",
      "Jun Zhi Tan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Gianni Roman",
      "Steve Roth"
     ],
     "a": [
      "Yashraj Kurani",
      "Marc Padre"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Brandon Fulford",
      "Elias Eid"
     ],
     "a": [
      "George Vega Jr",
      "Ritesh Patel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Sean Majury",
      "Jonathan Lugtu"
     ],
     "a": [
      "Akash Raju",
      "Corey Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Franklin Yiu",
      "Allan Orchard"
     ],
     "a": [
      "Ed Villaverde",
      "Jun Zhi Tan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Peter Chen",
      "Gianni Roman"
     ],
     "a": [
      "Yashraj Kurani",
      "Marc Padre"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Brandon Fulford",
      "Elias Eid"
     ],
     "a": [
      "George Vega Jr",
      "Ritesh Patel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Sean Majury",
      "Jonathan Lugtu"
     ],
     "a": [
      "Akash Raju",
      "Corey Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Franklin Yiu",
      "Allan Orchard"
     ],
     "a": [
      "Ed Villaverde",
      "Yashraj Kurani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jonathan Lugtu",
      "Gianni Roman"
     ],
     "a": [
      "Akash Raju",
      "Jun Zhi Tan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Elias Eid",
      "Peter Chen"
     ],
     "a": [
      "George Vega Jr",
      "Marc Padre"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Brandon Fulford",
      "Sean Majury"
     ],
     "a": [
      "Ritesh Patel",
      "Corey Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Franklin Yiu",
      "Sean Majury"
     ],
     "a": [
      "Ed Villaverde",
      "Yashraj Kurani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Elias Eid",
      "Peter Chen"
     ],
     "a": [
      "Akash Raju",
      "Jun Zhi Tan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Steve Roth",
      "Gianni Roman"
     ],
     "a": [
      "George Vega Jr",
      "Marc Padre"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Brandon Fulford",
      "Jonathan Lugtu"
     ],
     "a": [
      "Ritesh Patel",
      "Corey Chen"
     ]
    }
   ],
   "subs": [
    "Steve Roth",
    "Elias Eid",
    "Marc Padre"
   ]
  },
  {
   "result": "home",
   "week": 3,
   "home": "Montville",
   "away": "PickleRage Union County",
   "time": "2026-09-08T19:30:00",
   "complete": true,
   "homePoints": 643,
   "awayPoints": 561,
   "homeGW": 23,
   "awayGW": 9,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Bill Olderman",
      "Umang Pathak"
     ],
     "a": [
      "Jack Barry",
      "Jonathan Dong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Cesar Santamaria-Aranda",
      "Jeff Laniado"
     ],
     "a": [
      "Dan Yang",
      "Shreyas Suresh Hassan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jeff Axelrad",
      "John Manuzza"
     ],
     "a": [
      "Sean Diamond",
      "Edward Fu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sandeep Malhotra",
      "Brandon Tsang"
     ],
     "a": [
      "Andy Knight",
      "Ren Macalalag"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "John Manuzza",
      "Umang Pathak"
     ],
     "a": [
      "Sean Diamond",
      "Edward Fu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jesse Mynahan",
      "Cesar Santamaria-Aranda"
     ],
     "a": [
      "Vinay Mutt",
      "Andy Knight"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Jeff Axelrad",
      "Sandeep Malhotra"
     ],
     "a": [
      "Jack Barry",
      "Jonathan Dong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Brandon Tsang",
      "Jeff Laniado"
     ],
     "a": [
      "Shreyas Suresh Hassan",
      "Dan Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Umang Pathak",
      "Jesse Mynahan"
     ],
     "a": [
      "Sean Diamond",
      "Ren Macalalag"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jeff Laniado",
      "Sandeep Malhotra"
     ],
     "a": [
      "Dan Yang",
      "Jack Barry"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "John Manuzza",
      "Brandon Tsang"
     ],
     "a": [
      "Edward Fu",
      "Vinay Mutt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Bill Olderman",
      "Cesar Santamaria-Aranda"
     ],
     "a": [
      "Jonathan Dong",
      "Shreyas Suresh Hassan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jesse Mynahan",
      "Cesar Santamaria-Aranda"
     ],
     "a": [
      "Andy Knight",
      "Ren Macalalag"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Brandon Tsang",
      "Jeff Axelrad"
     ],
     "a": [
      "Edward Fu",
      "Vinay Mutt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Sandeep Malhotra",
      "Umang Pathak"
     ],
     "a": [
      "Shreyas Suresh Hassan",
      "Jonathan Dong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Bill Olderman",
      "Jeff Laniado"
     ],
     "a": [
      "Jack Barry",
      "Dan Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Umang Pathak",
      "Jesse Mynahan"
     ],
     "a": [
      "Ren Macalalag",
      "Edward Fu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "John Manuzza",
      "Brandon Tsang"
     ],
     "a": [
      "Sean Diamond",
      "Andy Knight"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Jeff Axelrad",
      "Bill Olderman"
     ],
     "a": [
      "Dan Yang",
      "Jonathan Dong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Sandeep Malhotra",
      "Cesar Santamaria-Aranda"
     ],
     "a": [
      "Shreyas Suresh Hassan",
      "Jack Barry"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Bill Olderman",
      "Cesar Santamaria-Aranda"
     ],
     "a": [
      "Jack Barry",
      "Andy Knight"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jeff Axelrad",
      "Jeff Laniado"
     ],
     "a": [
      "Vinay Mutt",
      "Shreyas Suresh Hassan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Brandon Tsang",
      "Jesse Mynahan"
     ],
     "a": [
      "Sean Diamond",
      "Jonathan Dong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "John Manuzza",
      "Umang Pathak"
     ],
     "a": [
      "Ren Macalalag",
      "Edward Fu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jesse Mynahan",
      "Jeff Axelrad"
     ],
     "a": [
      "Ren Macalalag",
      "Vinay Mutt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "John Manuzza",
      "Cesar Santamaria-Aranda"
     ],
     "a": [
      "Edward Fu",
      "Andy Knight"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Umang Pathak",
      "Jeff Laniado"
     ],
     "a": [
      "Jack Barry",
      "Sean Diamond"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Bill Olderman",
      "Sandeep Malhotra"
     ],
     "a": [
      "Dan Yang",
      "Jonathan Dong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sandeep Malhotra",
      "Jeff Axelrad"
     ],
     "a": [
      "Edward Fu",
      "Jonathan Dong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Umang Pathak",
      "Cesar Santamaria-Aranda"
     ],
     "a": [
      "Jack Barry",
      "Shreyas Suresh Hassan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Bill Olderman",
      "Jeff Laniado"
     ],
     "a": [
      "Sean Diamond",
      "Dan Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jesse Mynahan",
      "Brandon Tsang"
     ],
     "a": [
      "Andy Knight",
      "Vinay Mutt"
     ]
    }
   ],
   "subs": [
    "Edward Fu"
   ]
  },
  {
   "result": "home",
   "week": 3,
   "home": "Jersey Devil",
   "away": "Dill Dinkers Newport",
   "time": "2026-09-08T19:30:00",
   "complete": true,
   "homePoints": 666,
   "awayPoints": 508,
   "homeGW": 27,
   "awayGW": 5,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Dan Ruble",
      "Tim Bruno"
     ],
     "a": [
      "Aleks Mirkovic",
      "Jesse Pettit"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Christopher Uston",
      "Brandon Dejesus"
     ],
     "a": [
      "Joel Steinbrunner",
      "Keith Richard"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Mario Contreras",
      "Dan Carpenter"
     ],
     "a": [
      "Bren Calpin",
      "Steppan Konoplev"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Tom Kresky",
      "Frederick Cox"
     ],
     "a": [
      "Xan Hong",
      "Bill Violette"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Derek Livingston",
      "Jonathan Carter"
     ],
     "a": [
      "Aleks Mirkovic",
      "Jesse Pettit"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Dan Ruble",
      "Tim Bruno"
     ],
     "a": [
      "Keith Richard",
      "Joel Steinbrunner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Tom Kresky",
      "Christopher Uston"
     ],
     "a": [
      "Bren Calpin",
      "Steppan Konoplev"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Mario Contreras",
      "Dan Carpenter"
     ],
     "a": [
      "Xan Hong",
      "Bill Violette"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Brandon Dejesus",
      "Tim Bruno"
     ],
     "a": [
      "Aleks Mirkovic",
      "Keith Richard"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Tom Kresky",
      "Christopher Uston"
     ],
     "a": [
      "Joel Steinbrunner",
      "Jesse Pettit"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Dan Carpenter",
      "Jonathan Carter"
     ],
     "a": [
      "Xan Hong",
      "Steppan Konoplev"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Derek Livingston",
      "Frederick Cox"
     ],
     "a": [
      "Bren Calpin",
      "Bill Violette"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Christopher Uston",
      "Dan Ruble"
     ],
     "a": [
      "Aleks Mirkovic",
      "Keith Richard"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Mario Contreras",
      "Jonathan Carter"
     ],
     "a": [
      "Joel Steinbrunner",
      "Jesse Pettit"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Brandon Dejesus",
      "Frederick Cox"
     ],
     "a": [
      "Xan Hong",
      "Steppan Konoplev"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Tom Kresky",
      "Tim Bruno"
     ],
     "a": [
      "Bren Calpin",
      "Bill Violette"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Christopher Uston",
      "Dan Carpenter"
     ],
     "a": [
      "Aleks Mirkovic",
      "Joel Steinbrunner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Brandon Dejesus",
      "Jonathan Carter"
     ],
     "a": [
      "Keith Richard",
      "Jesse Pettit"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Derek Livingston",
      "Frederick Cox"
     ],
     "a": [
      "Bren Calpin",
      "Xan Hong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Dan Ruble",
      "Tom Kresky"
     ],
     "a": [
      "Bill Violette",
      "Steppan Konoplev"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Brandon Dejesus",
      "Tim Bruno"
     ],
     "a": [
      "Aleks Mirkovic",
      "Joel Steinbrunner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Tom Kresky",
      "Dan Ruble"
     ],
     "a": [
      "Keith Richard",
      "Jesse Pettit"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Frederick Cox",
      "Mario Contreras"
     ],
     "a": [
      "Bren Calpin",
      "Xan Hong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jonathan Carter",
      "Derek Livingston"
     ],
     "a": [
      "Bill Violette",
      "Steppan Konoplev"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Tim Bruno",
      "Derek Livingston"
     ],
     "a": [
      "Bren Calpin",
      "Keith Richard"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Brandon Dejesus",
      "Christopher Uston"
     ],
     "a": [
      "Joel Steinbrunner",
      "Xan Hong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Dan Ruble",
      "Mario Contreras"
     ],
     "a": [
      "Jesse Pettit",
      "Bill Violette"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jonathan Carter",
      "Dan Carpenter"
     ],
     "a": [
      "Aleks Mirkovic",
      "Steppan Konoplev"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Tim Bruno",
      "Derek Livingston"
     ],
     "a": [
      "Bren Calpin",
      "Keith Richard"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Frederick Cox",
      "Mario Contreras"
     ],
     "a": [
      "Joel Steinbrunner",
      "Xan Hong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Dan Ruble",
      "Christopher Uston"
     ],
     "a": [
      "Jesse Pettit",
      "Bill Violette"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Brandon Dejesus",
      "Dan Carpenter"
     ],
     "a": [
      "Aleks Mirkovic",
      "Steppan Konoplev"
     ]
    }
   ],
   "subs": [
    "Bren Calpin"
   ]
  },
  {
   "result": "away",
   "week": 3,
   "home": "Monroe",
   "away": "Pickle House",
   "time": "2026-09-08T19:30:00",
   "complete": true,
   "homePoints": 601,
   "awayPoints": 677,
   "homeGW": 8,
   "awayGW": 24,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "David Bogatyrev",
      "Shawn Gold"
     ],
     "a": [
      "Sree Harsha Konduru",
      "Varun Gurram"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Leon Li",
      "Kurt Skalamera"
     ],
     "a": [
      "Rajeeth Nadig",
      "Bennett Pereira"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Nicholas Lugo",
      "Stephen Fredericksen"
     ],
     "a": [
      "Jitendra Arora",
      "Anil Kumar Jakkaladki"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jacob Rosengarten",
      "John Coyle"
     ],
     "a": [
      "Ping Peng",
      "Aidan Fredericks"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "David Bogatyrev",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Sree Harsha Konduru",
      "Rajeeth Nadig"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jason Mcmanmon",
      "Shawn Gold"
     ],
     "a": [
      "Varun Gurram",
      "Bennett Pereira"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Leon Li",
      "Kurt Skalamera"
     ],
     "a": [
      "Jitendra Arora",
      "Ping Peng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Jacob Rosengarten",
      "Stephen Fredericksen"
     ],
     "a": [
      "Anil Kumar Jakkaladki",
      "Neil Dedhia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "David Bogatyrev",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Sree Harsha Konduru",
      "Varun Gurram"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jacob Rosengarten",
      "Stephen Fredericksen"
     ],
     "a": [
      "Jitendra Arora",
      "Rajeeth Nadig"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jason Mcmanmon",
      "Nicholas Lugo"
     ],
     "a": [
      "Anil Kumar Jakkaladki",
      "Aidan Fredericks"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Shawn Gold",
      "John Coyle"
     ],
     "a": [
      "Bennett Pereira",
      "Neil Dedhia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jacob Rosengarten",
      "Kurt Skalamera"
     ],
     "a": [
      "Sree Harsha Konduru",
      "Rajeeth Nadig"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jason Mcmanmon",
      "Nicholas Lugo"
     ],
     "a": [
      "Anil Kumar Jakkaladki",
      "Varun Gurram"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Leon Li",
      "Stephen Fredericksen"
     ],
     "a": [
      "Jitendra Arora",
      "Bennett Pereira"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Michael Dombrowiecki",
      "John Coyle"
     ],
     "a": [
      "Aidan Fredericks",
      "Neil Dedhia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Shawn Gold",
      "David Bogatyrev"
     ],
     "a": [
      "Sree Harsha Konduru",
      "Jitendra Arora"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Nicholas Lugo",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Anil Kumar Jakkaladki",
      "Aidan Fredericks"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jacob Rosengarten",
      "Kurt Skalamera"
     ],
     "a": [
      "Varun Gurram",
      "Rajeeth Nadig"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Leon Li",
      "Stephen Fredericksen"
     ],
     "a": [
      "Bennett Pereira",
      "Neil Dedhia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Nicholas Lugo",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Sree Harsha Konduru",
      "Anil Kumar Jakkaladki"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "David Bogatyrev",
      "Kurt Skalamera"
     ],
     "a": [
      "Varun Gurram",
      "Jitendra Arora"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Shawn Gold",
      "Jason Mcmanmon"
     ],
     "a": [
      "Rajeeth Nadig",
      "Bennett Pereira"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Leon Li",
      "John Coyle"
     ],
     "a": [
      "Aidan Fredericks",
      "Neil Dedhia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jason Mcmanmon",
      "Jacob Rosengarten"
     ],
     "a": [
      "Sree Harsha Konduru",
      "Bennett Pereira"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "David Bogatyrev",
      "Kurt Skalamera"
     ],
     "a": [
      "Varun Gurram",
      "Rajeeth Nadig"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Shawn Gold",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Jitendra Arora",
      "Aidan Fredericks"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Leon Li",
      "John Coyle"
     ],
     "a": [
      "Anil Kumar Jakkaladki",
      "Neil Dedhia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "David Bogatyrev",
      "Stephen Fredericksen"
     ],
     "a": [
      "Sree Harsha Konduru",
      "Aidan Fredericks"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jason Mcmanmon",
      "Jacob Rosengarten"
     ],
     "a": [
      "Rajeeth Nadig",
      "Anil Kumar Jakkaladki"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Michael Dombrowiecki",
      "Shawn Gold"
     ],
     "a": [
      "Varun Gurram",
      "Bennett Pereira"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Nicholas Lugo",
      "Leon Li"
     ],
     "a": [
      "Jitendra Arora",
      "Neil Dedhia"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 4,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Flemington",
   "time": "2026-09-15T19:00:00",
   "complete": true,
   "homePoints": 653,
   "awayPoints": 493,
   "homeGW": 26,
   "awayGW": 6,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Akash Raju",
      "Yashraj Kurani"
     ],
     "a": [
      "Eric Berlinger",
      "Josh Fink"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Christopher Monzon",
      "Lj Dequina"
     ],
     "a": [
      "Craig Butler",
      "David Shapiro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Jun Zhi Tan",
      "Ritesh Patel"
     ],
     "a": [
      "Franklin Lupianez",
      "Tom Hadler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Corey Chen",
      "Elliott Albanese"
     ],
     "a": [
      "John Fallone",
      "Rick Wickenheisser"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jun Zhi Tan",
      "Elliott Albanese"
     ],
     "a": [
      "Eric Berlinger",
      "Josh Fink"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ritesh Patel",
      "Prashanth Koshy"
     ],
     "a": [
      "Craig Butler",
      "David Shapiro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Lj Dequina",
      "Christopher Monzon"
     ],
     "a": [
      "Josh Rito",
      "Tom Hadler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Akash Raju",
      "Yashraj Kurani"
     ],
     "a": [
      "John Fallone",
      "Rick Wickenheisser"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Jun Zhi Tan",
      "Corey Chen"
     ],
     "a": [
      "Craig Butler",
      "Rick Wickenheisser"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Elliott Albanese",
      "Akash Raju"
     ],
     "a": [
      "Eric Berlinger",
      "John Fallone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Christopher Monzon",
      "Yashraj Kurani"
     ],
     "a": [
      "Franklin Lupianez",
      "Josh Rito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Lj Dequina",
      "Ritesh Patel"
     ],
     "a": [
      "Josh Fink",
      "Tom Hadler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Corey Chen",
      "Jun Zhi Tan"
     ],
     "a": [
      "Craig Butler",
      "Rick Wickenheisser"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Elliott Albanese",
      "Akash Raju"
     ],
     "a": [
      "David Shapiro",
      "John Fallone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Prashanth Koshy",
      "Christopher Monzon"
     ],
     "a": [
      "Franklin Lupianez",
      "Josh Rito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Lj Dequina",
      "Ritesh Patel"
     ],
     "a": [
      "Josh Fink",
      "Tom Hadler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Akash Raju",
      "Jun Zhi Tan"
     ],
     "a": [
      "Eric Berlinger",
      "David Shapiro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Elliott Albanese",
      "Yashraj Kurani"
     ],
     "a": [
      "Craig Butler",
      "John Fallone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Corey Chen",
      "Christopher Monzon"
     ],
     "a": [
      "Franklin Lupianez",
      "Josh Fink"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Prashanth Koshy",
      "Ritesh Patel"
     ],
     "a": [
      "Josh Rito",
      "Tom Hadler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Akash Raju",
      "Jun Zhi Tan"
     ],
     "a": [
      "Eric Berlinger",
      "David Shapiro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Elliott Albanese",
      "Yashraj Kurani"
     ],
     "a": [
      "Craig Butler",
      "John Fallone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Lj Dequina",
      "Corey Chen"
     ],
     "a": [
      "Josh Fink",
      "Franklin Lupianez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Prashanth Koshy",
      "Christopher Monzon"
     ],
     "a": [
      "Josh Rito",
      "Rick Wickenheisser"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Akash Raju",
      "Corey Chen"
     ],
     "a": [
      "John Fallone",
      "Franklin Lupianez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Jun Zhi Tan",
      "Lj Dequina"
     ],
     "a": [
      "Craig Butler",
      "Josh Rito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Elliott Albanese",
      "Christopher Monzon"
     ],
     "a": [
      "Josh Fink",
      "David Shapiro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ritesh Patel",
      "Yashraj Kurani"
     ],
     "a": [
      "Eric Berlinger",
      "Rick Wickenheisser"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Yashraj Kurani",
      "Jun Zhi Tan"
     ],
     "a": [
      "John Fallone",
      "Franklin Lupianez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Corey Chen",
      "Prashanth Koshy"
     ],
     "a": [
      "Craig Butler",
      "Josh Rito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Lj Dequina",
      "Akash Raju"
     ],
     "a": [
      "David Shapiro",
      "Josh Fink"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Christopher Monzon",
      "Ritesh Patel"
     ],
     "a": [
      "Eric Berlinger",
      "Rick Wickenheisser"
     ]
    }
   ],
   "subs": [
    "Elliott Albanese",
    "Christopher Monzon",
    "Lj Dequina"
   ]
  },
  {
   "result": "away",
   "week": 4,
   "home": "Dill Dinkers Freehold",
   "away": "Jersey Devil",
   "time": "2026-09-15T19:00:00",
   "complete": true,
   "homePoints": 609,
   "awayPoints": 623,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sujoy Gayen",
      "Ian Kohn"
     ],
     "a": [
      "Tim Bruno",
      "Brandon Dejesus"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Erik Reilly",
      "Ben Cortes"
     ],
     "a": [
      "Derek Livingston",
      "Alex Kustas"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Wensheng Yue",
      "Big G"
     ],
     "a": [
      "Dan Carpenter",
      "Tom Kresky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kevin Lew",
      "Hua Lin"
     ],
     "a": [
      "Daniel Hadley",
      "Jonathan Carter"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Hua Lin",
      "Wensheng Yue"
     ],
     "a": [
      "Daniel Hadley",
      "Jonathan Carter"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Ben Cortes",
      "Ian Kohn"
     ],
     "a": [
      "Tom Kresky",
      "Dan Carpenter"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sujoy Gayen",
      "Big G"
     ],
     "a": [
      "Tim Bruno",
      "Brandon Dejesus"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Erik Reilly",
      "Kevin Lew"
     ],
     "a": [
      "Derek Livingston",
      "Alex Kustas"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Erik Reilly",
      "Ben Cortes"
     ],
     "a": [
      "Derek Livingston",
      "Frederick Cox"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sujoy Gayen",
      "Big G"
     ],
     "a": [
      "Jonathan Carter",
      "Alex Kustas"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Wensheng Yue",
      "Ian Kohn"
     ],
     "a": [
      "Tim Bruno",
      "Tom Kresky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Kevin Lew",
      "Hua Lin"
     ],
     "a": [
      "Dan Carpenter",
      "Mario Contreras"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Erik Reilly",
      "Sujoy Gayen"
     ],
     "a": [
      "Tim Bruno",
      "Derek Livingston"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Hua Lin",
      "Ian Kohn"
     ],
     "a": [
      "Daniel Hadley",
      "Alex Kustas"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Ben Cortes",
      "Big G"
     ],
     "a": [
      "Brandon Dejesus",
      "Tom Kresky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kevin Lew",
      "Wensheng Yue"
     ],
     "a": [
      "Frederick Cox",
      "Mario Contreras"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Kevin Lew",
      "Ben Cortes"
     ],
     "a": [
      "Jonathan Carter",
      "Alex Kustas"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Sujoy Gayen",
      "Hua Lin"
     ],
     "a": [
      "Dan Carpenter",
      "Mario Contreras"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Erik Reilly",
      "Wensheng Yue"
     ],
     "a": [
      "Tom Kresky",
      "Tim Bruno"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Big G",
      "Ian Kohn"
     ],
     "a": [
      "Frederick Cox",
      "Brandon Dejesus"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kevin Lew",
      "Ben Cortes"
     ],
     "a": [
      "Mario Contreras",
      "Frederick Cox"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Wensheng Yue",
      "Ian Kohn"
     ],
     "a": [
      "Tom Kresky",
      "Brandon Dejesus"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Hua Lin",
      "Big G"
     ],
     "a": [
      "Daniel Hadley",
      "Alex Kustas"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Erik Reilly",
      "Sujoy Gayen"
     ],
     "a": [
      "Derek Livingston",
      "Tim Bruno"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ben Cortes",
      "Big G"
     ],
     "a": [
      "Dan Carpenter",
      "Tim Bruno"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Erik Reilly",
      "Hua Lin"
     ],
     "a": [
      "Mario Contreras",
      "Brandon Dejesus"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sujoy Gayen",
      "Ian Kohn"
     ],
     "a": [
      "Frederick Cox",
      "Daniel Hadley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Kevin Lew",
      "Wensheng Yue"
     ],
     "a": [
      "Derek Livingston",
      "Jonathan Carter"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Big G",
      "Ian Kohn"
     ],
     "a": [
      "Dan Carpenter",
      "Brandon Dejesus"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Erik Reilly",
      "Kevin Lew"
     ],
     "a": [
      "Jonathan Carter",
      "Derek Livingston"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Sujoy Gayen",
      "Ben Cortes"
     ],
     "a": [
      "Mario Contreras",
      "Alex Kustas"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Hua Lin",
      "Wensheng Yue"
     ],
     "a": [
      "Daniel Hadley",
      "Frederick Cox"
     ]
    }
   ],
   "subs": [
    "Alex Kustas",
    "Sujoy Gayen"
   ]
  },
  {
   "result": "home",
   "week": 4,
   "home": "Pickleball HQ",
   "away": "APC Garden State",
   "time": "2026-09-15T19:30:00",
   "complete": true,
   "homePoints": 661,
   "awayPoints": 527,
   "homeGW": 28,
   "awayGW": 4,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Christopher Hendrickson",
      "Anthony Simonetti"
     ],
     "a": [
      "Uzoma Nwankwo",
      "Shyler Smith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jimmy Ramja",
      "David Wheeler"
     ],
     "a": [
      "Jimmy Shapiro",
      "Chris Machuzak"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Noah Ludwigsen",
      "Luca Hendrickson"
     ],
     "a": [
      "Bruce Nguyen",
      "Mark Waters"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jose Campos",
      "Thomas Moran"
     ],
     "a": [
      "Matt Inzerillo",
      "Andress Mims"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Christopher Hendrickson",
      "Anthony Simonetti"
     ],
     "a": [
      "Uzoma Nwankwo",
      "Bruce Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kyle Korman",
      "Jimmy Ramja"
     ],
     "a": [
      "Mark Waters",
      "Matt Inzerillo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jose Campos",
      "Thomas Moran"
     ],
     "a": [
      "Andress Mims",
      "Shyler Smith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Luca Hendrickson",
      "Noah Ludwigsen"
     ],
     "a": [
      "Jimmy Shapiro",
      "Chris Machuzak"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Noah Ludwigsen",
      "Christopher Hendrickson"
     ],
     "a": [
      "Uzoma Nwankwo",
      "Mark Waters"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Luca Hendrickson",
      "Anthony Simonetti"
     ],
     "a": [
      "Shyler Smith",
      "Bruce Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kyle Korman",
      "David Wheeler"
     ],
     "a": [
      "Jimmy Shapiro",
      "Matt Inzerillo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jimmy Ramja",
      "Thomas Moran"
     ],
     "a": [
      "Chris Machuzak",
      "Andress Mims"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Anthony Simonetti",
      "Luca Hendrickson"
     ],
     "a": [
      "Uzoma Nwankwo",
      "Shyler Smith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jimmy Ramja",
      "David Wheeler"
     ],
     "a": [
      "Matt Inzerillo",
      "Mark Waters"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Noah Ludwigsen",
      "Christopher Hendrickson"
     ],
     "a": [
      "Jimmy Shapiro",
      "Bruce Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jose Campos",
      "Kyle Korman"
     ],
     "a": [
      "Chris Machuzak",
      "Andress Mims"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Noah Ludwigsen",
      "David Wheeler"
     ],
     "a": [
      "Uzoma Nwankwo",
      "Andress Mims"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Luca Hendrickson",
      "Christopher Hendrickson"
     ],
     "a": [
      "Shyler Smith",
      "Bruce Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Anthony Simonetti",
      "Thomas Moran"
     ],
     "a": [
      "Jimmy Shapiro",
      "Mark Waters"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kyle Korman",
      "Jimmy Ramja"
     ],
     "a": [
      "Matt Inzerillo",
      "Chris Machuzak"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Christopher Hendrickson",
      "Luca Hendrickson"
     ],
     "a": [
      "Uzoma Nwankwo",
      "Bruce Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Anthony Simonetti",
      "David Wheeler"
     ],
     "a": [
      "Shyler Smith",
      "Andress Mims"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jimmy Ramja",
      "Noah Ludwigsen"
     ],
     "a": [
      "Mark Waters",
      "Jimmy Shapiro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kyle Korman",
      "Jose Campos"
     ],
     "a": [
      "Matt Inzerillo",
      "Chris Machuzak"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Anthony Simonetti",
      "Noah Ludwigsen"
     ],
     "a": [
      "Uzoma Nwankwo",
      "Mark Waters"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Luca Hendrickson",
      "Jose Campos"
     ],
     "a": [
      "Shyler Smith",
      "Jimmy Shapiro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Christopher Hendrickson",
      "Kyle Korman"
     ],
     "a": [
      "Bruce Nguyen",
      "Chris Machuzak"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jimmy Ramja",
      "Thomas Moran"
     ],
     "a": [
      "Andress Mims",
      "Matt Inzerillo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Luca Hendrickson",
      "Jose Campos"
     ],
     "a": [
      "Uzoma Nwankwo",
      "Chris Machuzak"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "David Wheeler",
      "Christopher Hendrickson"
     ],
     "a": [
      "Shyler Smith",
      "Mark Waters"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Noah Ludwigsen",
      "Anthony Simonetti"
     ],
     "a": [
      "Andress Mims",
      "Bruce Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Thomas Moran",
      "Kyle Korman"
     ],
     "a": [
      "Jimmy Shapiro",
      "Matt Inzerillo"
     ]
    }
   ],
   "subs": [
    "Shyler Smith"
   ]
  },
  {
   "result": "away",
   "week": 4,
   "home": "Monroe",
   "away": "Bounce Tempest",
   "time": "2026-09-15T19:30:00",
   "complete": true,
   "homePoints": 606,
   "awayPoints": 656,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Leon Li",
      "David Bogatyrev"
     ],
     "a": [
      "David Brandolph",
      "Chuang Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jason Mcmanmon",
      "Nicholas Lugo"
     ],
     "a": [
      "Kyle Kelly",
      "Daniel Borgia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Salman Saad",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Kyle Martin",
      "Vincent Rigoglioso"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jacob Rosengarten",
      "Uttam Purohit"
     ],
     "a": [
      "Jimmy Lee",
      "Yufan Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Stephen Fredericksen",
      "Jacob Rosengarten"
     ],
     "a": [
      "David Brandolph",
      "Chuang Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "David Bogatyrev",
      "Kurt Skalamera"
     ],
     "a": [
      "Kyle Kelly",
      "Daniel Borgia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Leon Li",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Jake Cohen",
      "Kyle Martin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jason Mcmanmon",
      "Nicholas Lugo"
     ],
     "a": [
      "Yufan Chen",
      "Jimmy Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jacob Rosengarten",
      "Stephen Fredericksen"
     ],
     "a": [
      "David Brandolph",
      "Kyle Kelly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "David Bogatyrev",
      "Kurt Skalamera"
     ],
     "a": [
      "Yufan Chen",
      "Daniel Borgia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Leon Li",
      "Nicholas Lugo"
     ],
     "a": [
      "Vincent Rigoglioso",
      "Kyle Martin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Uttam Purohit",
      "Salman Saad"
     ],
     "a": [
      "Jake Cohen",
      "Jimmy Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jason Mcmanmon",
      "Kurt Skalamera"
     ],
     "a": [
      "Yufan Chen",
      "David Brandolph"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Leon Li",
      "Nicholas Lugo"
     ],
     "a": [
      "Daniel Borgia",
      "Kyle Martin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Uttam Purohit",
      "Salman Saad"
     ],
     "a": [
      "Vincent Rigoglioso",
      "Chuang Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Stephen Fredericksen",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Jimmy Lee",
      "Jake Cohen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Nicholas Lugo",
      "Michael Dombrowiecki"
     ],
     "a": [
      "David Brandolph",
      "Yufan Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "David Bogatyrev",
      "Jacob Rosengarten"
     ],
     "a": [
      "Daniel Borgia",
      "Chuang Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Stephen Fredericksen",
      "Salman Saad"
     ],
     "a": [
      "Kyle Martin",
      "Kyle Kelly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Jason Mcmanmon",
      "Kurt Skalamera"
     ],
     "a": [
      "Vincent Rigoglioso",
      "Jake Cohen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Leon Li",
      "Jason Mcmanmon"
     ],
     "a": [
      "David Brandolph",
      "Jake Cohen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "David Bogatyrev",
      "Jacob Rosengarten"
     ],
     "a": [
      "Daniel Borgia",
      "Kyle Martin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kurt Skalamera",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Vincent Rigoglioso",
      "Chuang Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Stephen Fredericksen",
      "Salman Saad"
     ],
     "a": [
      "Jimmy Lee",
      "Kyle Kelly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Salman Saad",
      "Nicholas Lugo"
     ],
     "a": [
      "David Brandolph",
      "Kyle Kelly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Leon Li",
      "Uttam Purohit"
     ],
     "a": [
      "Yufan Chen",
      "Vincent Rigoglioso"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "David Bogatyrev",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Jimmy Lee",
      "Daniel Borgia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jacob Rosengarten",
      "Jason Mcmanmon"
     ],
     "a": [
      "Kyle Martin",
      "Jake Cohen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "David Bogatyrev",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Daniel Borgia",
      "Yufan Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Jacob Rosengarten",
      "Jason Mcmanmon"
     ],
     "a": [
      "David Brandolph",
      "Kyle Martin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Salman Saad",
      "Nicholas Lugo"
     ],
     "a": [
      "Vincent Rigoglioso",
      "Jake Cohen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Leon Li",
      "Uttam Purohit"
     ],
     "a": [
      "Jimmy Lee",
      "Chuang Li"
     ]
    }
   ],
   "subs": [
    "Chuang Li",
    "Jake Cohen",
    "Yufan Chen",
    "Kyle Kelly"
   ]
  },
  {
   "result": "home",
   "week": 4,
   "home": "Allstar Pickler",
   "away": "PickleRage Union County",
   "time": "2026-09-15T19:30:00",
   "complete": true,
   "homePoints": 617,
   "awayPoints": 568,
   "homeGW": 19,
   "awayGW": 13,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Sean Majury",
      "Chaitanya Sharma"
     ],
     "a": [
      "Edward Fu",
      "Dan Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Allan Orchard",
      "Franklin Yiu"
     ],
     "a": [
      "Vinay Mutt",
      "Shreyas Suresh Hassan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Andrew Lin",
      "Saad Talat Siddiqui"
     ],
     "a": [
      "Jack Barry",
      "Jonathan Dong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Brandon Fulford",
      "Alexander King"
     ],
     "a": [
      "Ren Macalalag",
      "Sean Diamond"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Sean Majury",
      "Chaitanya Sharma"
     ],
     "a": [
      "Sean Diamond",
      "Edward Fu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Brandon Fulford",
      "Alexander King"
     ],
     "a": [
      "Jack Barry",
      "Dan Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Allan Orchard",
      "Franklin Yiu"
     ],
     "a": [
      "Vinay Mutt",
      "Andy Knight"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Andrew Lin",
      "Saad Talat Siddiqui"
     ],
     "a": [
      "Shreyas Suresh Hassan",
      "Jonathan Dong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Alexander King",
      "Franklin Yiu"
     ],
     "a": [
      "Steve Lerner",
      "Ren Macalalag"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Chaitanya Sharma",
      "Saad Talat Siddiqui"
     ],
     "a": [
      "Shreyas Suresh Hassan",
      "Jonathan Dong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Sean Majury",
      "Buyi Zhang"
     ],
     "a": [
      "Sean Diamond",
      "Edward Fu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Brandon Fulford",
      "Allan Orchard"
     ],
     "a": [
      "Jack Barry",
      "Dan Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Sean Majury",
      "Andrew Lin"
     ],
     "a": [
      "Vinay Mutt",
      "Jack Barry"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Brandon Fulford",
      "Allan Orchard"
     ],
     "a": [
      "Edward Fu",
      "Jonathan Dong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Chaitanya Sharma",
      "Saad Talat Siddiqui"
     ],
     "a": [
      "Andy Knight",
      "Sean Diamond"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Alexander King",
      "Franklin Yiu"
     ],
     "a": [
      "Ren Macalalag",
      "Steve Lerner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Alexander King",
      "Andrew Lin"
     ],
     "a": [
      "Vinay Mutt",
      "Sean Diamond"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Allan Orchard",
      "Chaitanya Sharma"
     ],
     "a": [
      "Shreyas Suresh Hassan",
      "Dan Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Sean Majury",
      "Franklin Yiu"
     ],
     "a": [
      "Andy Knight",
      "Ren Macalalag"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Brandon Fulford",
      "Saad Talat Siddiqui"
     ],
     "a": [
      "Edward Fu",
      "Jonathan Dong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Alexander King",
      "Chaitanya Sharma"
     ],
     "a": [
      "Jack Barry",
      "Vinay Mutt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Buyi Zhang",
      "Saad Talat Siddiqui"
     ],
     "a": [
      "Edward Fu",
      "Andy Knight"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Brandon Fulford",
      "Franklin Yiu"
     ],
     "a": [
      "Steve Lerner",
      "Sean Diamond"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Allan Orchard",
      "Sean Majury"
     ],
     "a": [
      "Shreyas Suresh Hassan",
      "Dan Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Alexander King",
      "Sean Majury"
     ],
     "a": [
      "Sean Diamond",
      "Vinay Mutt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Buyi Zhang",
      "Saad Talat Siddiqui"
     ],
     "a": [
      "Shreyas Suresh Hassan",
      "Jack Barry"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Allan Orchard",
      "Chaitanya Sharma"
     ],
     "a": [
      "Ren Macalalag",
      "Jonathan Dong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Brandon Fulford",
      "Franklin Yiu"
     ],
     "a": [
      "Edward Fu",
      "Dan Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Franklin Yiu",
      "Sean Majury"
     ],
     "a": [
      "Jonathan Dong",
      "Dan Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Allan Orchard",
      "Alexander King"
     ],
     "a": [
      "Ren Macalalag",
      "Andy Knight"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Brandon Fulford",
      "Chaitanya Sharma"
     ],
     "a": [
      "Steve Lerner",
      "Vinay Mutt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Andrew Lin",
      "Buyi Zhang"
     ],
     "a": [
      "Shreyas Suresh Hassan",
      "Jack Barry"
     ]
    }
   ],
   "subs": [
    "Alexander King",
    "Andrew Lin",
    "Edward Fu",
    "Chaitanya Sharma",
    "Steve Lerner"
   ]
  },
  {
   "result": "home",
   "week": 4,
   "home": "Montville",
   "away": "Home Court",
   "time": "2026-09-15T19:30:00",
   "complete": true,
   "homePoints": 635,
   "awayPoints": 603,
   "homeGW": 19,
   "awayGW": 13,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Cesar Santamaria-Aranda",
      "John Manuzza"
     ],
     "a": [
      "Bryan Mccourt",
      "Kevin Sheehan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Meet Thakkar",
      "Bill Olderman"
     ],
     "a": [
      "Ricky Jutkiewicz",
      "Pat Wilson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Brandon Tsang",
      "Abdullah Osman"
     ],
     "a": [
      "Jacob Yoo",
      "Matthew Carrington"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Todd Mitchell",
      "Jesse Mynahan"
     ],
     "a": [
      "Marc Kunesch",
      "Michael Gilbert"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jesse Mynahan",
      "Cesar Santamaria-Aranda"
     ],
     "a": [
      "Matthew Carrington",
      "Michael Gilbert"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Brandon Tsang",
      "Abdullah Osman"
     ],
     "a": [
      "Bryan Mccourt",
      "Ricky Jutkiewicz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Bill Olderman",
      "Luke Simon"
     ],
     "a": [
      "Jacob Yoo",
      "Pat Wilson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Todd Mitchell",
      "John Manuzza"
     ],
     "a": [
      "Robert Huntley",
      "Kevin Sheehan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Brandon Tsang",
      "Jesse Mynahan"
     ],
     "a": [
      "Robert Huntley",
      "Marc Kunesch"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Meet Thakkar",
      "Bill Olderman"
     ],
     "a": [
      "Bryan Mccourt",
      "Ricky Jutkiewicz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Luke Simon",
      "John Manuzza"
     ],
     "a": [
      "Kevin Sheehan",
      "Matthew Carrington"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Cesar Santamaria-Aranda",
      "Todd Mitchell"
     ],
     "a": [
      "Jacob Yoo",
      "Pat Wilson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Cesar Santamaria-Aranda",
      "Jesse Mynahan"
     ],
     "a": [
      "Ricky Jutkiewicz",
      "Marc Kunesch"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Todd Mitchell",
      "John Manuzza"
     ],
     "a": [
      "Robert Huntley",
      "Matthew Carrington"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Meet Thakkar",
      "Brandon Tsang"
     ],
     "a": [
      "Pat Wilson",
      "Michael Gilbert"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Bill Olderman",
      "Abdullah Osman"
     ],
     "a": [
      "Jacob Yoo",
      "Kevin Sheehan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Cesar Santamaria-Aranda",
      "Bill Olderman"
     ],
     "a": [
      "Jacob Yoo",
      "Matthew Carrington"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "John Manuzza",
      "Abdullah Osman"
     ],
     "a": [
      "Marc Kunesch",
      "Michael Gilbert"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Meet Thakkar",
      "Luke Simon"
     ],
     "a": [
      "Ricky Jutkiewicz",
      "Pat Wilson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Jesse Mynahan",
      "Todd Mitchell"
     ],
     "a": [
      "Bryan Mccourt",
      "Robert Huntley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Brandon Tsang",
      "Luke Simon"
     ],
     "a": [
      "Bryan Mccourt",
      "Robert Huntley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Bill Olderman",
      "Todd Mitchell"
     ],
     "a": [
      "Marc Kunesch",
      "Kevin Sheehan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jesse Mynahan",
      "Abdullah Osman"
     ],
     "a": [
      "Matthew Carrington",
      "Michael Gilbert"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Meet Thakkar",
      "Cesar Santamaria-Aranda"
     ],
     "a": [
      "Ricky Jutkiewicz",
      "Jacob Yoo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Todd Mitchell",
      "Cesar Santamaria-Aranda"
     ],
     "a": [
      "Matthew Carrington",
      "Jacob Yoo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Abdullah Osman",
      "John Manuzza"
     ],
     "a": [
      "Robert Huntley",
      "Marc Kunesch"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Luke Simon",
      "Meet Thakkar"
     ],
     "a": [
      "Bryan Mccourt",
      "Kevin Sheehan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jesse Mynahan",
      "Brandon Tsang"
     ],
     "a": [
      "Pat Wilson",
      "Michael Gilbert"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Bill Olderman",
      "Brandon Tsang"
     ],
     "a": [
      "Michael Gilbert",
      "Marc Kunesch"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "John Manuzza",
      "Cesar Santamaria-Aranda"
     ],
     "a": [
      "Robert Huntley",
      "Matthew Carrington"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jesse Mynahan",
      "Luke Simon"
     ],
     "a": [
      "Jacob Yoo",
      "Kevin Sheehan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Meet Thakkar",
      "Todd Mitchell"
     ],
     "a": [
      "Bryan Mccourt",
      "Pat Wilson"
     ]
    }
   ],
   "subs": [
    "Luke Simon",
    "Todd Mitchell",
    "Abdullah Osman"
   ]
  },
  {
   "result": "away",
   "week": 4,
   "home": "Pickleball Kingdom Hamilton",
   "away": "Bounce Malvern",
   "time": "2026-09-15T19:30:00",
   "complete": true,
   "homePoints": 563,
   "awayPoints": 627,
   "homeGW": 10,
   "awayGW": 22,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Pritpal Singh",
      "Ziyu Huang"
     ],
     "a": [
      "Jr Burrs",
      "Charles Evans"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Venu Yengala",
      "Dilip Patel"
     ],
     "a": [
      "Jordan Demcher",
      "Dan Ladislaw"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Roberto Marcillo",
      "Dhruv Dobariya"
     ],
     "a": [
      "Matheus Korndoerfer",
      "Harrison Bohrer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Yash Mehta",
      "Aaron Chan"
     ],
     "a": [
      "Matt Enz",
      "Russell Cripps"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Venu Yengala",
      "Aaron Chan"
     ],
     "a": [
      "Andrew Neave",
      "Dan Ladislaw"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Dhruv Dobariya",
      "Roberto Marcillo"
     ],
     "a": [
      "Harrison Bohrer",
      "Matt Enz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Dilip Patel",
      "Yash Mehta"
     ],
     "a": [
      "Jamison Rowles",
      "Jordan Demcher"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Pritpal Singh",
      "Ziyu Huang"
     ],
     "a": [
      "Russell Cripps",
      "Jr Burrs"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Pritpal Singh",
      "Roberto Marcillo"
     ],
     "a": [
      "Harrison Bohrer",
      "Charles Evans"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Dilip Patel",
      "Yash Mehta"
     ],
     "a": [
      "Dan Ladislaw",
      "Russell Cripps"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Ziyu Huang",
      "Dhruv Dobariya"
     ],
     "a": [
      "Matt Enz",
      "Jamison Rowles"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Aaron Chan",
      "Venu Yengala"
     ],
     "a": [
      "Matheus Korndoerfer",
      "Andrew Neave"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Ziyu Huang",
      "Dhruv Dobariya"
     ],
     "a": [
      "Jr Burrs",
      "Dan Ladislaw"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Pritpal Singh",
      "Roberto Marcillo"
     ],
     "a": [
      "Jordan Demcher",
      "Charles Evans"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Yash Mehta",
      "Venu Yengala"
     ],
     "a": [
      "Harrison Bohrer",
      "Andrew Neave"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Dilip Patel",
      "Aaron Chan"
     ],
     "a": [
      "Jamison Rowles",
      "Matheus Korndoerfer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Ziyu Huang",
      "Venu Yengala"
     ],
     "a": [
      "Jr Burrs",
      "Jordan Demcher"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Yash Mehta",
      "Pritpal Singh"
     ],
     "a": [
      "Matheus Korndoerfer",
      "Charles Evans"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Dilip Patel",
      "Dhruv Dobariya"
     ],
     "a": [
      "Jamison Rowles",
      "Andrew Neave"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Aaron Chan",
      "Roberto Marcillo"
     ],
     "a": [
      "Matt Enz",
      "Russell Cripps"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Pritpal Singh",
      "Venu Yengala"
     ],
     "a": [
      "Russell Cripps",
      "Dan Ladislaw"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Dilip Patel",
      "Roberto Marcillo"
     ],
     "a": [
      "Jamison Rowles",
      "Matt Enz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ziyu Huang",
      "Yash Mehta"
     ],
     "a": [
      "Matheus Korndoerfer",
      "Harrison Bohrer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Dhruv Dobariya",
      "Aaron Chan"
     ],
     "a": [
      "Jordan Demcher",
      "Charles Evans"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ziyu Huang",
      "Roberto Marcillo"
     ],
     "a": [
      "Matheus Korndoerfer",
      "Dan Ladislaw"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Venu Yengala",
      "Dilip Patel"
     ],
     "a": [
      "Jamison Rowles",
      "Jordan Demcher"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Yash Mehta",
      "Dhruv Dobariya"
     ],
     "a": [
      "Jr Burrs",
      "Matt Enz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Pritpal Singh",
      "Aaron Chan"
     ],
     "a": [
      "Russell Cripps",
      "Andrew Neave"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ziyu Huang",
      "Aaron Chan"
     ],
     "a": [
      "Matt Enz",
      "Harrison Bohrer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Pritpal Singh",
      "Yash Mehta"
     ],
     "a": [
      "Matheus Korndoerfer",
      "Charles Evans"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Dilip Patel",
      "Roberto Marcillo"
     ],
     "a": [
      "Jordan Demcher",
      "Andrew Neave"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Venu Yengala",
      "Dhruv Dobariya"
     ],
     "a": [
      "Jamison Rowles",
      "Jr Burrs"
     ]
    }
   ],
   "subs": [
    "Roberto Marcillo",
    "Yash Mehta"
   ]
  },
  {
   "result": "home",
   "week": 4,
   "home": "Pickle House",
   "away": "Picklr Newtown",
   "time": "2026-09-15T19:30:00",
   "complete": true,
   "homePoints": 636,
   "awayPoints": 554,
   "homeGW": 22,
   "awayGW": 10,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Rajeeth Nadig",
      "Rakshit Maddur Gopinath"
     ],
     "a": [
      "Michael Johnson",
      "Gary Garretson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Sree Harsha Konduru",
      "Varun Gurram"
     ],
     "a": [
      "Andrew Mclean",
      "Angelo Disipio"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Anil Kumar Jakkaladki",
      "Jitendra Arora"
     ],
     "a": [
      "Mike Leach",
      "Arnold Poblete"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Ping Peng",
      "Sushil Rijhwani"
     ],
     "a": [
      "Alessio Muscara",
      "J-P Lautenschlager"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Varun Gurram",
      "Jitendra Arora"
     ],
     "a": [
      "Michael Johnson",
      "Larry Minsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Sree Harsha Konduru",
      "Rajeeth Nadig"
     ],
     "a": [
      "Andrew Mclean",
      "Gary Garretson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Rakshit Maddur Gopinath",
      "Aidan Fredericks"
     ],
     "a": [
      "Mike Leach",
      "Andy Ro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Ping Peng",
      "Neil Dedhia"
     ],
     "a": [
      "Alessio Muscara",
      "J-P Lautenschlager"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Anil Kumar Jakkaladki",
      "Sushil Rijhwani"
     ],
     "a": [
      "Steven Hummel",
      "Larry Minsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Sree Harsha Konduru",
      "Varun Gurram"
     ],
     "a": [
      "Mathew Yang",
      "Angelo Disipio"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Ping Peng",
      "Aidan Fredericks"
     ],
     "a": [
      "Arnold Poblete",
      "Alessio Muscara"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Rajeeth Nadig",
      "Neil Dedhia"
     ],
     "a": [
      "Michael Johnson",
      "Andrew Mclean"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Varun Gurram",
      "Rakshit Maddur Gopinath"
     ],
     "a": [
      "Steven Hummel",
      "Larry Minsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Sree Harsha Konduru",
      "Rajeeth Nadig"
     ],
     "a": [
      "Mathew Yang",
      "Angelo Disipio"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Anil Kumar Jakkaladki",
      "Sushil Rijhwani"
     ],
     "a": [
      "Arnold Poblete",
      "Gary Garretson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Aidan Fredericks",
      "Neil Dedhia"
     ],
     "a": [
      "Mike Leach",
      "J-P Lautenschlager"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Rajeeth Nadig",
      "Varun Gurram"
     ],
     "a": [
      "Steven Hummel",
      "Mathew Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Aidan Fredericks",
      "Sree Harsha Konduru"
     ],
     "a": [
      "J-P Lautenschlager",
      "Andrew Mclean"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Anil Kumar Jakkaladki",
      "Ping Peng"
     ],
     "a": [
      "Arnold Poblete",
      "Gary Garretson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Neil Dedhia",
      "Jitendra Arora"
     ],
     "a": [
      "Andy Ro",
      "Michael Johnson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Rajeeth Nadig",
      "Ping Peng"
     ],
     "a": [
      "Steven Hummel",
      "Mathew Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Sree Harsha Konduru",
      "Jitendra Arora"
     ],
     "a": [
      "Alessio Muscara",
      "Angelo Disipio"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Varun Gurram",
      "Neil Dedhia"
     ],
     "a": [
      "Arnold Poblete",
      "Mike Leach"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Sushil Rijhwani",
      "Aidan Fredericks"
     ],
     "a": [
      "Andy Ro",
      "J-P Lautenschlager"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Sushil Rijhwani",
      "Rajeeth Nadig"
     ],
     "a": [
      "Steven Hummel",
      "Alessio Muscara"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sree Harsha Konduru",
      "Ping Peng"
     ],
     "a": [
      "Mathew Yang",
      "Andy Ro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Anil Kumar Jakkaladki",
      "Jitendra Arora"
     ],
     "a": [
      "Michael Johnson",
      "Andrew Mclean"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Varun Gurram",
      "Aidan Fredericks"
     ],
     "a": [
      "Gary Garretson",
      "Larry Minsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Varun Gurram",
      "Rajeeth Nadig"
     ],
     "a": [
      "Steven Hummel",
      "Alessio Muscara"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 28,
     "as": 30,
     "h": [
      "Sree Harsha Konduru",
      "Anil Kumar Jakkaladki"
     ],
     "a": [
      "Mathew Yang",
      "Arnold Poblete"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Jitendra Arora",
      "Sushil Rijhwani"
     ],
     "a": [
      "Angelo Disipio",
      "Andy Ro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Ping Peng",
      "Neil Dedhia"
     ],
     "a": [
      "Mike Leach",
      "Larry Minsky"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 5,
   "home": "Picklr Newtown",
   "away": "Jersey Devil",
   "time": "2026-09-22T19:00:00",
   "complete": true,
   "homePoints": 603,
   "awayPoints": 607,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jason Wu",
      "Andrew Mclean"
     ],
     "a": [
      "Brandon Dejesus",
      "Jarred Goeckeler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Alessio Muscara",
      "Mike Leach"
     ],
     "a": [
      "Frederick Cox",
      "Peter David"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Arnold Poblete",
      "Larry Minsky"
     ],
     "a": [
      "Tom Kresky",
      "Alex Kustas"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Michael Johnson",
      "Gary Garretson"
     ],
     "a": [
      "Daniel Hadley",
      "Jonathan Carter"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jason Wu",
      "Angelo Disipio"
     ],
     "a": [
      "Brandon Dejesus",
      "Jarred Goeckeler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Alessio Muscara",
      "Mike Leach"
     ],
     "a": [
      "Peter David",
      "Frederick Cox"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Larry Minsky",
      "Andy Ro"
     ],
     "a": [
      "Alex Kustas",
      "Tom Kresky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Michael Johnson",
      "Gary Garretson"
     ],
     "a": [
      "Daniel Hadley",
      "Jonathan Carter"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 27,
     "as": 29,
     "h": [
      "Larry Minsky",
      "Stephane Sabathier"
     ],
     "a": [
      "Peter David",
      "Brandon Dejesus"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Alessio Muscara",
      "Arnold Poblete"
     ],
     "a": [
      "Tom Kresky",
      "Jarred Goeckeler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Mike Leach",
      "Jimmy Duong"
     ],
     "a": [
      "Alex Kustas",
      "Daniel Hadley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Gary Garretson",
      "Andrew Mclean"
     ],
     "a": [
      "Jonathan Carter",
      "Frederick Cox"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Michael Johnson",
      "Stephane Sabathier"
     ],
     "a": [
      "Brandon Dejesus",
      "Peter David"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Andy Ro",
      "Alessio Muscara"
     ],
     "a": [
      "Jarred Goeckeler",
      "Tom Kresky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jimmy Duong",
      "Mike Leach"
     ],
     "a": [
      "Daniel Hadley",
      "Alex Kustas"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Angelo Disipio",
      "Arnold Poblete"
     ],
     "a": [
      "Frederick Cox",
      "Jonathan Carter"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Larry Minsky",
      "Gary Garretson"
     ],
     "a": [
      "Jarred Goeckeler",
      "Alex Kustas"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jason Wu",
      "Andy Ro"
     ],
     "a": [
      "Brandon Dejesus",
      "Tom Kresky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jimmy Duong",
      "Michael Johnson"
     ],
     "a": [
      "Daniel Hadley",
      "Frederick Cox"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Arnold Poblete",
      "Andrew Mclean"
     ],
     "a": [
      "Peter David",
      "Jonathan Carter"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Larry Minsky",
      "Mike Leach"
     ],
     "a": [
      "Alex Kustas",
      "Jarred Goeckeler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Stephane Sabathier",
      "Jason Wu"
     ],
     "a": [
      "Tom Kresky",
      "Brandon Dejesus"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Michael Johnson",
      "Jimmy Duong"
     ],
     "a": [
      "Frederick Cox",
      "Daniel Hadley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Andrew Mclean",
      "Angelo Disipio"
     ],
     "a": [
      "Jonathan Carter",
      "Peter David"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jason Wu",
      "Arnold Poblete"
     ],
     "a": [
      "Brandon Dejesus",
      "Alex Kustas"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Andy Ro",
      "Angelo Disipio"
     ],
     "a": [
      "Jarred Goeckeler",
      "Jonathan Carter"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Alessio Muscara",
      "Stephane Sabathier"
     ],
     "a": [
      "Peter David",
      "Daniel Hadley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Gary Garretson",
      "Andrew Mclean"
     ],
     "a": [
      "Frederick Cox",
      "Tom Kresky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jason Wu",
      "Arnold Poblete"
     ],
     "a": [
      "Alex Kustas",
      "Brandon Dejesus"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Angelo Disipio",
      "Andy Ro"
     ],
     "a": [
      "Jonathan Carter",
      "Jarred Goeckeler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Alessio Muscara",
      "Stephane Sabathier"
     ],
     "a": [
      "Daniel Hadley",
      "Peter David"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Gary Garretson",
      "Jimmy Duong"
     ],
     "a": [
      "Tom Kresky",
      "Frederick Cox"
     ]
    }
   ],
   "subs": [
    "Jarred Goeckeler",
    "Alex Kustas",
    "Peter David"
   ]
  },
  {
   "result": "away",
   "week": 5,
   "home": "Dill Dinkers Freehold",
   "away": "Premiere",
   "time": "2026-09-22T19:00:00",
   "complete": true,
   "homePoints": 499,
   "awayPoints": 653,
   "homeGW": 8,
   "awayGW": 24,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Siva Indupuru",
      "Big G"
     ],
     "a": [
      "Matthew Schwartz",
      "Joseph Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kevin Lew",
      "Sujoy Gayen"
     ],
     "a": [
      "Eden Ksendzovsky",
      "Jason Feldman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Hua Lin",
      "Ian Kohn"
     ],
     "a": [
      "Christopher Giasi",
      "Gary White"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Erik Reilly",
      "Ben Cortes"
     ],
     "a": [
      "Daniel Antonelli",
      "Timothy Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Kevin Lew",
      "Sujoy Gayen"
     ],
     "a": [
      "Jason Feldman",
      "Eden Ksendzovsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Hua Lin",
      "Ian Kohn"
     ],
     "a": [
      "Christopher Giasi",
      "Gary White"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Erik Reilly",
      "Ben Cortes"
     ],
     "a": [
      "Daniel Antonelli",
      "Timothy Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Siva Indupuru",
      "Big G"
     ],
     "a": [
      "Matthew Schwartz",
      "Joseph Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Ian Kohn",
      "Big G"
     ],
     "a": [
      "Matthew Schwartz",
      "Jason Feldman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Hua Lin",
      "Sujoy Gayen"
     ],
     "a": [
      "Daniel Antonelli",
      "Eden Ksendzovsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kevin Lew",
      "Ben Cortes"
     ],
     "a": [
      "Gary White",
      "Timothy Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Erik Reilly",
      "Siva Indupuru"
     ],
     "a": [
      "Joseph Lynskey",
      "Christopher Giasi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Ian Kohn",
      "Big G"
     ],
     "a": [
      "Matthew Schwartz",
      "Jason Feldman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Erik Reilly",
      "Siva Indupuru"
     ],
     "a": [
      "Joseph Lynskey",
      "Christopher Giasi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Hua Lin",
      "Sujoy Gayen"
     ],
     "a": [
      "Eden Ksendzovsky",
      "Daniel Antonelli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Kevin Lew",
      "Ben Cortes"
     ],
     "a": [
      "Gary White",
      "Timothy Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Sujoy Gayen",
      "Big G"
     ],
     "a": [
      "Christopher Giasi",
      "Eden Ksendzovsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Erik Reilly",
      "Kevin Lew"
     ],
     "a": [
      "Gary White",
      "Daniel Antonelli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Hua Lin",
      "Siva Indupuru"
     ],
     "a": [
      "Matthew Schwartz",
      "Timothy Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Ben Cortes",
      "Ian Kohn"
     ],
     "a": [
      "Joseph Lynskey",
      "Jason Feldman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Hua Lin",
      "Siva Indupuru"
     ],
     "a": [
      "Matthew Schwartz",
      "Timothy Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Sujoy Gayen",
      "Big G"
     ],
     "a": [
      "Christopher Giasi",
      "Eden Ksendzovsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Erik Reilly",
      "Kevin Lew"
     ],
     "a": [
      "Gary White",
      "Daniel Antonelli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ben Cortes",
      "Ian Kohn"
     ],
     "a": [
      "Jason Feldman",
      "Joseph Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kevin Lew",
      "Hua Lin"
     ],
     "a": [
      "Gary White",
      "Matthew Schwartz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ben Cortes",
      "Big G"
     ],
     "a": [
      "Jason Feldman",
      "Timothy Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Ian Kohn",
      "Siva Indupuru"
     ],
     "a": [
      "Joseph Lynskey",
      "Eden Ksendzovsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Erik Reilly",
      "Sujoy Gayen"
     ],
     "a": [
      "Daniel Antonelli",
      "Christopher Giasi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Siva Indupuru",
      "Ian Kohn"
     ],
     "a": [
      "Joseph Lynskey",
      "Eden Ksendzovsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Ben Cortes",
      "Big G"
     ],
     "a": [
      "Jason Feldman",
      "Timothy Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Erik Reilly",
      "Sujoy Gayen"
     ],
     "a": [
      "Daniel Antonelli",
      "Christopher Giasi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kevin Lew",
      "Hua Lin"
     ],
     "a": [
      "Gary White",
      "Matthew Schwartz"
     ]
    }
   ],
   "subs": [
    "Sujoy Gayen"
   ]
  },
  {
   "result": null,
   "week": 5,
   "home": "Pickleball Kingdom Lehigh Valley",
   "away": "Montville",
   "time": "2026-09-22T19:00:00",
   "complete": false,
   "games": [
    {
     "t": "male",
     "h": [
      "Samuel Kashefska",
      "Kevin Tran"
     ],
     "a": [
      "Umang Pathak",
      "John Manuzza"
     ]
    },
    {
     "t": "male",
     "h": [
      "Carlos Rincon",
      "Michael Barndt"
     ],
     "a": [
      "Shalin Rawal",
      "Jesse Mynahan"
     ]
    },
    {
     "t": "male",
     "h": [
      "Ayon Codner",
      "Ali Bhimji"
     ],
     "a": [
      "Cesar Santamaria-Aranda",
      "Jeff Laniado"
     ]
    },
    {
     "t": "male",
     "h": [
      "Rohit Mankotia",
      "Eric Ruiz"
     ],
     "a": [
      "Meet Thakkar",
      "Sandeep Malhotra"
     ]
    },
    {
     "t": "male",
     "h": [
      "Cullen Curley",
      "Michael Barndt"
     ],
     "a": [
      "Shalin Rawal",
      "John Manuzza"
     ]
    },
    {
     "t": "male",
     "h": [
      "Carlos Rincon",
      "Kevin Tran"
     ],
     "a": [
      "Cesar Santamaria-Aranda",
      "Jesse Mynahan"
     ]
    },
    {
     "t": "male",
     "h": [
      "Samuel Kashefska",
      "Eric Ruiz"
     ],
     "a": [
      "Sandeep Malhotra",
      "Umang Pathak"
     ]
    },
    {
     "t": "male",
     "h": [
      "Rohit Mankotia",
      "Ayon Codner"
     ],
     "a": [
      "Jeff Laniado",
      "Meet Thakkar"
     ]
    },
    {
     "t": "male",
     "h": [
      "Samuel Kashefska",
      "Cullen Curley"
     ],
     "a": [
      "John Manuzza",
      "Sandeep Malhotra"
     ]
    },
    {
     "t": "male",
     "h": [
      "Ayon Codner",
      "Eric Ruiz"
     ],
     "a": [
      "Umang Pathak",
      "Jesse Mynahan"
     ]
    },
    {
     "t": "male",
     "h": [
      "Rohit Mankotia",
      "Kevin Tran"
     ],
     "a": [
      "Meet Thakkar",
      "Cesar Santamaria-Aranda"
     ]
    },
    {
     "t": "male",
     "h": [
      "Carlos Rincon",
      "Ali Bhimji"
     ],
     "a": [
      "Jeff Laniado",
      "Shalin Rawal"
     ]
    },
    {
     "t": "male",
     "h": [
      "Ayon Codner",
      "Samuel Kashefska"
     ],
     "a": [
      "John Manuzza",
      "Cesar Santamaria-Aranda"
     ]
    },
    {
     "t": "male",
     "h": [
      "Eric Ruiz",
      "Cullen Curley"
     ],
     "a": [
      "Jesse Mynahan",
      "Jeff Laniado"
     ]
    },
    {
     "t": "male",
     "h": [
      "Rohit Mankotia",
      "Kevin Tran"
     ],
     "a": [
      "Umang Pathak",
      "Shalin Rawal"
     ]
    },
    {
     "t": "male",
     "h": [
      "Michael Barndt",
      "Ali Bhimji"
     ],
     "a": [
      "Meet Thakkar",
      "Sandeep Malhotra"
     ]
    },
    {
     "t": "male",
     "h": [
      "Ayon Codner",
      "Samuel Kashefska"
     ],
     "a": [
      "Umang Pathak",
      "John Manuzza"
     ]
    },
    {
     "t": "male",
     "h": [
      "Carlos Rincon",
      "Kevin Tran"
     ],
     "a": [
      "Cesar Santamaria-Aranda",
      "Jesse Mynahan"
     ]
    },
    {
     "t": "male",
     "h": [
      "Ali Bhimji",
      "Cullen Curley"
     ],
     "a": [
      "Shalin Rawal",
      "Meet Thakkar"
     ]
    },
    {
     "t": "male",
     "h": [
      "Rohit Mankotia",
      "Michael Barndt"
     ],
     "a": [
      "Jeff Laniado",
      "Sandeep Malhotra"
     ]
    },
    {
     "t": "male",
     "h": [
      "Ayon Codner",
      "Kevin Tran"
     ],
     "a": [
      "Meet Thakkar",
      "John Manuzza"
     ]
    },
    {
     "t": "male",
     "h": [
      "Ali Bhimji",
      "Cullen Curley"
     ],
     "a": [
      "Shalin Rawal",
      "Jesse Mynahan"
     ]
    },
    {
     "t": "male",
     "h": [
      "Carlos Rincon",
      "Michael Barndt"
     ],
     "a": [
      "Sandeep Malhotra",
      "Cesar Santamaria-Aranda"
     ]
    },
    {
     "t": "male",
     "h": [
      "Samuel Kashefska",
      "Eric Ruiz"
     ],
     "a": [
      "Umang Pathak",
      "Jeff Laniado"
     ]
    },
    {
     "t": "male",
     "h": [
      "Rohit Mankotia",
      "Carlos Rincon"
     ],
     "a": [
      "Shalin Rawal",
      "John Manuzza"
     ]
    },
    {
     "t": "male",
     "h": [
      "Samuel Kashefska",
      "Kevin Tran"
     ],
     "a": [
      "Umang Pathak",
      "Jesse Mynahan"
     ]
    },
    {
     "t": "male",
     "h": [
      "Ayon Codner",
      "Eric Ruiz"
     ],
     "a": [
      "Cesar Santamaria-Aranda",
      "Meet Thakkar"
     ]
    },
    {
     "t": "male",
     "h": [
      "Cullen Curley",
      "Michael Barndt"
     ],
     "a": [
      "Jeff Laniado",
      "Sandeep Malhotra"
     ]
    },
    {
     "t": "male",
     "h": [
      "Carlos Rincon",
      "Eric Ruiz"
     ],
     "a": [
      "John Manuzza",
      "Cesar Santamaria-Aranda"
     ]
    },
    {
     "t": "male",
     "h": [
      "Cullen Curley",
      "Ayon Codner"
     ],
     "a": [
      "Jesse Mynahan",
      "Sandeep Malhotra"
     ]
    },
    {
     "t": "male",
     "h": [
      "Michael Barndt",
      "Ali Bhimji"
     ],
     "a": [
      "Umang Pathak",
      "Shalin Rawal"
     ]
    },
    {
     "t": "male",
     "h": [
      "Samuel Kashefska",
      "Rohit Mankotia"
     ],
     "a": [
      "Meet Thakkar",
      "Jeff Laniado"
     ]
    }
   ]
  },
  {
   "result": "away",
   "week": 5,
   "home": "Flemington",
   "away": "PickleRage Union County",
   "time": "2026-09-22T19:00:00",
   "complete": true,
   "provisional": true,
   "homePoints": 588,
   "awayPoints": 598,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Eric Berlinger",
      "Craig Butler"
     ],
     "a": [
      "Shreyas Suresh Hassan",
      "Vinay Mutt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Josh Fink",
      "David Shapiro"
     ],
     "a": [
      "Ren Macalalag",
      "Steve Lerner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "John Fallone",
      "Franklin Lupianez"
     ],
     "a": [
      "Jonathan Dong",
      "Jack Barry"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "John Pineda",
      "Rick Wickenheisser"
     ],
     "a": [
      "Dan Yang",
      "Sean Diamond"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "John Fallone",
      "Franklin Lupianez"
     ],
     "a": [
      "Steve Lerner",
      "Ren Macalalag"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Josh Fink",
      "David Shapiro"
     ],
     "a": [
      "Jack Barry",
      "Jonathan Dong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Eric Berlinger",
      "Craig Butler"
     ],
     "a": [
      "Vinay Mutt",
      "Shreyas Suresh Hassan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Rick Wickenheisser",
      "John Pineda"
     ],
     "a": [
      "Sean Diamond",
      "Dan Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Eric Berlinger",
      "John Pineda"
     ],
     "a": [
      "Jack Barry",
      "Dan Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Craig Butler",
      "Rick Wickenheisser"
     ],
     "a": [
      "Vinay Mutt",
      "Sean Diamond"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "David Shapiro",
      "Franklin Lupianez"
     ],
     "a": [
      "Francis Thai",
      "Ren Macalalag"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "John Fallone",
      "Josh Fink"
     ],
     "a": [
      "Shreyas Suresh Hassan",
      "Jonathan Dong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 27,
     "as": 29,
     "h": [
      "David Shapiro",
      "Franklin Lupianez"
     ],
     "a": [
      "Jonathan Dong",
      "Shreyas Suresh Hassan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Eric Berlinger",
      "John Pineda"
     ],
     "a": [
      "Jack Barry",
      "Dan Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Craig Butler",
      "Rick Wickenheisser"
     ],
     "a": [
      "Francis Thai",
      "Ren Macalalag"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "John Fallone",
      "Josh Fink"
     ],
     "a": [
      "Steve Lerner",
      "Sean Diamond"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Eric Berlinger",
      "David Shapiro"
     ],
     "a": [
      "Vinay Mutt",
      "Ren Macalalag"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "John Pineda",
      "John Fallone"
     ],
     "a": [
      "Dan Yang",
      "Jonathan Dong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Rick Wickenheisser",
      "Josh Fink"
     ],
     "a": [
      "Sean Diamond",
      "Steve Lerner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Craig Butler",
      "Franklin Lupianez"
     ],
     "a": [
      "Jack Barry",
      "Shreyas Suresh Hassan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Eric Berlinger",
      "David Shapiro"
     ],
     "a": [
      "Jonathan Dong",
      "Dan Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Craig Butler",
      "Franklin Lupianez"
     ],
     "a": [
      "Sean Diamond",
      "Francis Thai"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "John Pineda",
      "John Fallone"
     ],
     "a": [
      "Ren Macalalag",
      "Vinay Mutt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Rick Wickenheisser",
      "Josh Fink"
     ],
     "a": [
      "Jack Barry",
      "Shreyas Suresh Hassan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Rick Wickenheisser",
      "Franklin Lupianez"
     ],
     "a": [
      "Jonathan Dong",
      "Sean Diamond"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "John Pineda",
      "David Shapiro"
     ],
     "a": [
      "Francis Thai",
      "Steve Lerner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Eric Berlinger",
      "Josh Fink"
     ],
     "a": [
      "Shreyas Suresh Hassan",
      "Dan Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Craig Butler",
      "John Fallone"
     ],
     "a": [
      "Vinay Mutt",
      "Jack Barry"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Craig Butler",
      "John Fallone"
     ],
     "a": [
      "Sean Diamond",
      "Francis Thai"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "John Pineda",
      "David Shapiro"
     ],
     "a": [
      "Vinay Mutt",
      "Jack Barry"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Eric Berlinger",
      "Josh Fink"
     ],
     "a": [
      "Ren Macalalag",
      "Jonathan Dong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Rick Wickenheisser",
      "Franklin Lupianez"
     ],
     "a": [
      "Dan Yang",
      "Shreyas Suresh Hassan"
     ]
    }
   ],
   "subs": [
    "Steve Lerner"
   ]
  },
  {
   "result": null,
   "week": 5,
   "home": "APC Garden State",
   "away": "Bounce Tempest",
   "time": "2026-09-22T19:30:00",
   "complete": false,
   "games": [
    {
     "t": "male",
     "h": [
      "Uzoma Nwankwo",
      "Andress Mims"
     ],
     "a": [
      "David Brandolph",
      "Vincent Rigoglioso"
     ]
    },
    {
     "t": "male",
     "h": [
      "Bruce Nguyen",
      "Daniel Dechristopher"
     ],
     "a": [
      "Daniel Borgia",
      "Nicholas Brow"
     ]
    },
    {
     "t": "male",
     "h": [
      "Jimmy Shapiro",
      "Mark Waters"
     ],
     "a": [
      "Yong Kim",
      "Jared Rapoport"
     ]
    },
    {
     "t": "male",
     "h": [
      "Tyler Bayly",
      "Yongzhe Tian"
     ],
     "a": [
      "Joseph Luka",
      "Jimmy Lee"
     ]
    },
    {
     "t": "male",
     "h": [
      "Uzoma Nwankwo",
      "Bruce Nguyen"
     ],
     "a": [
      "David Brandolph",
      "Vincent Rigoglioso"
     ]
    },
    {
     "t": "male",
     "h": [
      "Chris Machuzak",
      "Jimmy Shapiro"
     ],
     "a": [
      "Daniel Borgia",
      "Nicholas Brow"
     ]
    },
    {
     "t": "male",
     "h": [
      "Mark Waters",
      "Yongzhe Tian"
     ],
     "a": [
      "Yong Kim",
      "Jared Rapoport"
     ]
    },
    {
     "t": "male",
     "h": [
      "Tyler Bayly",
      "Daniel Dechristopher"
     ],
     "a": [
      "Joseph Luka",
      "Ethan Fu"
     ]
    },
    {
     "t": "male",
     "h": [
      "Andress Mims",
      "Daniel Dechristopher"
     ],
     "a": [
      "David Brandolph",
      "Yong Kim"
     ]
    },
    {
     "t": "male",
     "h": [
      "Bruce Nguyen",
      "Mark Waters"
     ],
     "a": [
      "Daniel Borgia",
      "Jared Rapoport"
     ]
    },
    {
     "t": "male",
     "h": [
      "Uzoma Nwankwo",
      "Tyler Bayly"
     ],
     "a": [
      "Jimmy Lee",
      "Vincent Rigoglioso"
     ]
    },
    {
     "t": "male",
     "h": [
      "Matt Inzerillo",
      "Chris Machuzak"
     ],
     "a": [
      "Nicholas Brow",
      "Ethan Fu"
     ]
    },
    {
     "t": "male",
     "h": [
      "Bruce Nguyen",
      "Andress Mims"
     ],
     "a": [
      "Daniel Borgia",
      "Yong Kim"
     ]
    },
    {
     "t": "male",
     "h": [
      "Tyler Bayly",
      "Matt Inzerillo"
     ],
     "a": [
      "Vincent Rigoglioso",
      "Jared Rapoport"
     ]
    },
    {
     "t": "male",
     "h": [
      "Jimmy Shapiro",
      "Yongzhe Tian"
     ],
     "a": [
      "Nicholas Brow",
      "Joseph Luka"
     ]
    },
    {
     "t": "male",
     "h": [
      "Daniel Dechristopher",
      "Chris Machuzak"
     ],
     "a": [
      "Jimmy Lee",
      "Ethan Fu"
     ]
    },
    {
     "t": "male",
     "h": [
      "Chris Machuzak",
      "Andress Mims"
     ],
     "a": [
      "David Brandolph",
      "Yong Kim"
     ]
    },
    {
     "t": "male",
     "h": [
      "Matt Inzerillo",
      "Mark Waters"
     ],
     "a": [
      "Daniel Borgia",
      "Jared Rapoport"
     ]
    },
    {
     "t": "male",
     "h": [
      "Jimmy Shapiro",
      "Uzoma Nwankwo"
     ],
     "a": [
      "Vincent Rigoglioso",
      "Joseph Luka"
     ]
    },
    {
     "t": "male",
     "h": [
      "Yongzhe Tian",
      "Tyler Bayly"
     ],
     "a": [
      "Jimmy Lee",
      "Ethan Fu"
     ]
    },
    {
     "t": "male",
     "h": [
      "Daniel Dechristopher",
      "Uzoma Nwankwo"
     ],
     "a": [
      "David Brandolph",
      "Nicholas Brow"
     ]
    },
    {
     "t": "male",
     "h": [
      "Mark Waters",
      "Andress Mims"
     ],
     "a": [
      "Daniel Borgia",
      "Yong Kim"
     ]
    },
    {
     "t": "male",
     "h": [
      "Bruce Nguyen",
      "Chris Machuzak"
     ],
     "a": [
      "Joseph Luka",
      "Jimmy Lee"
     ]
    },
    {
     "t": "male",
     "h": [
      "Matt Inzerillo",
      "Jimmy Shapiro"
     ],
     "a": [
      "Vincent Rigoglioso",
      "Ethan Fu"
     ]
    },
    {
     "t": "male",
     "h": [
      "Daniel Dechristopher",
      "Yongzhe Tian"
     ],
     "a": [
      "David Brandolph",
      "Jared Rapoport"
     ]
    },
    {
     "t": "male",
     "h": [
      "Uzoma Nwankwo",
      "Bruce Nguyen"
     ],
     "a": [
      "Daniel Borgia",
      "Vincent Rigoglioso"
     ]
    },
    {
     "t": "male",
     "h": [
      "Tyler Bayly",
      "Matt Inzerillo"
     ],
     "a": [
      "Nicholas Brow",
      "Jimmy Lee"
     ]
    },
    {
     "t": "male",
     "h": [
      "Chris Machuzak",
      "Andress Mims"
     ],
     "a": [
      "Joseph Luka",
      "Ethan Fu"
     ]
    },
    {
     "t": "male",
     "h": [
      "Bruce Nguyen",
      "Jimmy Shapiro"
     ],
     "a": [
      "David Brandolph",
      "Nicholas Brow"
     ]
    },
    {
     "t": "male",
     "h": [
      "Mark Waters",
      "Yongzhe Tian"
     ],
     "a": [
      "Yong Kim",
      "Joseph Luka"
     ]
    },
    {
     "t": "male",
     "h": [
      "Tyler Bayly",
      "Uzoma Nwankwo"
     ],
     "a": [
      "Jared Rapoport",
      "Jimmy Lee"
     ]
    },
    {
     "t": "male",
     "h": [
      "Daniel Dechristopher",
      "Matt Inzerillo"
     ],
     "a": [
      "Vincent Rigoglioso",
      "Ethan Fu"
     ]
    }
   ]
  },
  {
   "result": "away",
   "week": 5,
   "home": "Pickle House",
   "away": "Pickleball HQ",
   "time": "2026-09-22T19:30:00",
   "complete": true,
   "homePoints": 607,
   "awayPoints": 616,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Aidan Fredericks",
      "Sushil Rijhwani"
     ],
     "a": [
      "Noah Ludwigsen",
      "Christopher Hendrickson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sree Harsha Konduru",
      "Varun Gurram"
     ],
     "a": [
      "Luca Hendrickson",
      "Kyle Korman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Rajeeth Nadig",
      "Neil Dedhia"
     ],
     "a": [
      "Jimmy Ramja",
      "David Wheeler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jitendra Arora",
      "Anil Kumar Jakkaladki"
     ],
     "a": [
      "Jose Campos",
      "Thomas Moran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jitendra Arora",
      "Anil Kumar Jakkaladki"
     ],
     "a": [
      "Noah Ludwigsen",
      "Christopher Hendrickson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Sree Harsha Konduru",
      "Rajeeth Nadig"
     ],
     "a": [
      "Luca Hendrickson",
      "Kyle Korman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Varun Gurram",
      "Rakshit Maddur Gopinath"
     ],
     "a": [
      "Jimmy Ramja",
      "David Wheeler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sushil Rijhwani",
      "Ping Peng"
     ],
     "a": [
      "Nesip Cengiz",
      "Niman Ahmeti"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Aidan Fredericks",
      "Ping Peng"
     ],
     "a": [
      "Noah Ludwigsen",
      "Luca Hendrickson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Sree Harsha Konduru",
      "Varun Gurram"
     ],
     "a": [
      "Christopher Hendrickson",
      "Kyle Korman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Rajeeth Nadig",
      "Rakshit Maddur Gopinath"
     ],
     "a": [
      "Jimmy Ramja",
      "Niman Ahmeti"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Anil Kumar Jakkaladki",
      "Sushil Rijhwani"
     ],
     "a": [
      "Thomas Moran",
      "Jose Campos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ping Peng",
      "Anil Kumar Jakkaladki"
     ],
     "a": [
      "Noah Ludwigsen",
      "Luca Hendrickson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Sree Harsha Konduru",
      "Rajeeth Nadig"
     ],
     "a": [
      "Christopher Hendrickson",
      "Kyle Korman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Varun Gurram",
      "Neil Dedhia"
     ],
     "a": [
      "Jimmy Ramja",
      "Thomas Moran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Sushil Rijhwani",
      "Rakshit Maddur Gopinath"
     ],
     "a": [
      "Nesip Cengiz",
      "Jose Campos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Varun Gurram",
      "Sushil Rijhwani"
     ],
     "a": [
      "Noah Ludwigsen",
      "David Wheeler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Aidan Fredericks",
      "Rakshit Maddur Gopinath"
     ],
     "a": [
      "Luca Hendrickson",
      "Christopher Hendrickson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Rajeeth Nadig",
      "Jitendra Arora"
     ],
     "a": [
      "Thomas Moran",
      "Nesip Cengiz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Sree Harsha Konduru",
      "Neil Dedhia"
     ],
     "a": [
      "Kyle Korman",
      "Niman Ahmeti"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Varun Gurram",
      "Rajeeth Nadig"
     ],
     "a": [
      "Noah Ludwigsen",
      "David Wheeler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jitendra Arora",
      "Aidan Fredericks"
     ],
     "a": [
      "Luca Hendrickson",
      "Christopher Hendrickson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sree Harsha Konduru",
      "Anil Kumar Jakkaladki"
     ],
     "a": [
      "Kyle Korman",
      "Nesip Cengiz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 32,
     "as": 30,
     "h": [
      "Ping Peng",
      "Neil Dedhia"
     ],
     "a": [
      "Jose Campos",
      "Niman Ahmeti"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Varun Gurram",
      "Rajeeth Nadig"
     ],
     "a": [
      "Noah Ludwigsen",
      "Kyle Korman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jitendra Arora",
      "Neil Dedhia"
     ],
     "a": [
      "Luca Hendrickson",
      "David Wheeler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Rakshit Maddur Gopinath",
      "Anil Kumar Jakkaladki"
     ],
     "a": [
      "Christopher Hendrickson",
      "Jimmy Ramja"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Sree Harsha Konduru",
      "Ping Peng"
     ],
     "a": [
      "Niman Ahmeti",
      "Thomas Moran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Varun Gurram",
      "Jitendra Arora"
     ],
     "a": [
      "Noah Ludwigsen",
      "Kyle Korman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Ping Peng",
      "Rajeeth Nadig"
     ],
     "a": [
      "Luca Hendrickson",
      "David Wheeler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Sree Harsha Konduru",
      "Rakshit Maddur Gopinath"
     ],
     "a": [
      "Christopher Hendrickson",
      "Jimmy Ramja"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sushil Rijhwani",
      "Aidan Fredericks"
     ],
     "a": [
      "Nesip Cengiz",
      "Jose Campos"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": null,
   "week": 5,
   "home": "Pickleball Kingdom Hamilton",
   "away": "Monroe",
   "time": "2026-09-22T19:30:00",
   "complete": false,
   "games": [
    {
     "t": "male",
     "h": [
      "Harsh Upadhyaya",
      "Jaiveer Narwal"
     ],
     "a": [
      "Jason Mcmanmon",
      "Shawn Gold"
     ]
    },
    {
     "t": "male",
     "h": [
      "Venu Yengala",
      "Ziyu Huang"
     ],
     "a": [
      "Tayon Hart",
      "David Bogatyrev"
     ]
    },
    {
     "t": "male",
     "h": [
      "Aaron Chan",
      "Pritpal Singh"
     ],
     "a": [
      "Stephen Fredericksen",
      "John Coyle"
     ]
    },
    {
     "t": "male",
     "h": [
      "Dhruv Dobariya",
      "Dilip Patel"
     ],
     "a": [
      "Nicholas Lugo",
      "Uttam Purohit"
     ]
    },
    {
     "t": "male",
     "h": [
      "Venu Yengala",
      "Dhruv Dobariya"
     ],
     "a": [
      "Jason Mcmanmon",
      "Shawn Gold"
     ]
    },
    {
     "t": "male",
     "h": [
      "Harsh Upadhyaya",
      "Jaiveer Narwal"
     ],
     "a": [
      "Uttam Purohit",
      "David Bogatyrev"
     ]
    },
    {
     "t": "male",
     "h": [
      "Ashish Kumar",
      "Samrat Sood"
     ],
     "a": [
      "Nicholas Lugo",
      "John Coyle"
     ]
    },
    {
     "t": "male",
     "h": [
      "Ziyu Huang",
      "Dilip Patel"
     ],
     "a": [
      "Stephen Fredericksen",
      "Tayon Hart"
     ]
    },
    {
     "t": "male",
     "h": [
      "Pritpal Singh",
      "Ashish Kumar"
     ],
     "a": [
      "Uttam Purohit",
      "Tayon Hart"
     ]
    },
    {
     "t": "male",
     "h": [
      "Aaron Chan",
      "Harsh Upadhyaya"
     ],
     "a": [
      "John Coyle",
      "Stephen Fredericksen"
     ]
    },
    {
     "t": "male",
     "h": [
      "Ziyu Huang",
      "Jaiveer Narwal"
     ],
     "a": [
      "Shawn Gold",
      "David Bogatyrev"
     ]
    },
    {
     "t": "male",
     "h": [
      "Venu Yengala",
      "Dhruv Dobariya"
     ],
     "a": [
      "Jason Mcmanmon",
      "Nicholas Lugo"
     ]
    },
    {
     "t": "male",
     "h": [
      "Pritpal Singh",
      "Jaiveer Narwal"
     ],
     "a": [
      "John Coyle",
      "Uttam Purohit"
     ]
    },
    {
     "t": "male",
     "h": [
      "Venu Yengala",
      "Dilip Patel"
     ],
     "a": [
      "Salman Saad",
      "Stephen Fredericksen"
     ]
    },
    {
     "t": "male",
     "h": [
      "Samrat Sood",
      "Ziyu Huang"
     ],
     "a": [
      "Shawn Gold",
      "David Bogatyrev"
     ]
    },
    {
     "t": "male",
     "h": [
      "Ashish Kumar",
      "Harsh Upadhyaya"
     ],
     "a": [
      "Jason Mcmanmon",
      "Nicholas Lugo"
     ]
    },
    {
     "t": "male",
     "h": [
      "Harsh Upadhyaya",
      "Dilip Patel"
     ],
     "a": [
      "Salman Saad",
      "Nicholas Lugo"
     ]
    },
    {
     "t": "male",
     "h": [
      "Venu Yengala",
      "Aaron Chan"
     ],
     "a": [
      "Stephen Fredericksen",
      "David Bogatyrev"
     ]
    },
    {
     "t": "male",
     "h": [
      "Dhruv Dobariya",
      "Jaiveer Narwal"
     ],
     "a": [
      "Jason Mcmanmon",
      "John Coyle"
     ]
    },
    {
     "t": "male",
     "h": [
      "Pritpal Singh",
      "Samrat Sood"
     ],
     "a": [
      "Uttam Purohit",
      "Tayon Hart"
     ]
    },
    {
     "t": "male",
     "h": [
      "Harsh Upadhyaya",
      "Venu Yengala"
     ],
     "a": [
      "Salman Saad",
      "Nicholas Lugo"
     ]
    },
    {
     "t": "male",
     "h": [
      "Pritpal Singh",
      "Jaiveer Narwal"
     ],
     "a": [
      "Stephen Fredericksen",
      "David Bogatyrev"
     ]
    },
    {
     "t": "male",
     "h": [
      "Dilip Patel",
      "Dhruv Dobariya"
     ],
     "a": [
      "Jason Mcmanmon",
      "Uttam Purohit"
     ]
    },
    {
     "t": "male",
     "h": [
      "Ashish Kumar",
      "Ziyu Huang"
     ],
     "a": [
      "Shawn Gold",
      "John Coyle"
     ]
    },
    {
     "t": "male",
     "h": [
      "Ziyu Huang",
      "Dhruv Dobariya"
     ],
     "a": [
      "Jason Mcmanmon",
      "Salman Saad"
     ]
    },
    {
     "t": "male",
     "h": [
      "Dilip Patel",
      "Samrat Sood"
     ],
     "a": [
      "John Coyle",
      "David Bogatyrev"
     ]
    },
    {
     "t": "male",
     "h": [
      "Pritpal Singh",
      "Harsh Upadhyaya"
     ],
     "a": [
      "Nicholas Lugo",
      "Tayon Hart"
     ]
    },
    {
     "t": "male",
     "h": [
      "Ashish Kumar",
      "Aaron Chan"
     ],
     "a": [
      "Shawn Gold",
      "Uttam Purohit"
     ]
    },
    {
     "t": "male",
     "h": [
      "Ziyu Huang",
      "Venu Yengala"
     ],
     "a": [
      "Jason Mcmanmon",
      "Salman Saad"
     ]
    },
    {
     "t": "male",
     "h": [
      "Dhruv Dobariya",
      "Samrat Sood"
     ],
     "a": [
      "John Coyle",
      "David Bogatyrev"
     ]
    },
    {
     "t": "male",
     "h": [
      "Jaiveer Narwal",
      "Aaron Chan"
     ],
     "a": [
      "Nicholas Lugo",
      "Tayon Hart"
     ]
    },
    {
     "t": "male",
     "h": [
      "Ashish Kumar",
      "Pritpal Singh"
     ],
     "a": [
      "Shawn Gold",
      "Stephen Fredericksen"
     ]
    }
   ]
  },
  {
   "result": null,
   "week": 5,
   "home": "Home Court",
   "away": "Allstar Pickler",
   "time": "2026-09-22T19:30:00",
   "complete": false,
   "games": [
    {
     "t": "male",
     "h": [
      "Dennis Yap",
      "Robert Huntley"
     ],
     "a": [
      "Brandon Fulford",
      "Franklin Yiu"
     ]
    },
    {
     "t": "male",
     "h": [
      "Bryan Mccourt",
      "Pat Wilson"
     ],
     "a": [
      "Allan Orchard",
      "Gianni Roman"
     ]
    },
    {
     "t": "male",
     "h": [
      "Jacob Yoo",
      "Marc Kunesch"
     ],
     "a": [
      "Sean Majury",
      "Madhu Raghunathan"
     ]
    },
    {
     "t": "male",
     "h": [
      "Matthew Carrington",
      "Michael Vincent"
     ],
     "a": [
      "Saad Talat Siddiqui",
      "Buyi Zhang"
     ]
    },
    {
     "t": "male",
     "h": [
      "Dennis Yap",
      "Robert Huntley"
     ],
     "a": [
      "Brandon Fulford",
      "Franklin Yiu"
     ]
    },
    {
     "t": "male",
     "h": [
      "Bryan Mccourt",
      "Kevin Sheehan"
     ],
     "a": [
      "Allan Orchard",
      "Gianni Roman"
     ]
    },
    {
     "t": "male",
     "h": [
      "Matthew Carrington",
      "Pat Wilson"
     ],
     "a": [
      "Sean Majury",
      "Madhu Raghunathan"
     ]
    },
    {
     "t": "male",
     "h": [
      "Jacob Yoo",
      "Marc Kunesch"
     ],
     "a": [
      "Saad Talat Siddiqui",
      "Buyi Zhang"
     ]
    },
    {
     "t": "male",
     "h": [
      "Kevin Sheehan",
      "Robert Huntley"
     ],
     "a": [
      "Brandon Fulford",
      "Sean Majury"
     ]
    },
    {
     "t": "male",
     "h": [
      "Dennis Yap",
      "Jacob Yoo"
     ],
     "a": [
      "Allan Orchard",
      "Franklin Yiu"
     ]
    },
    {
     "t": "male",
     "h": [
      "Ricky Jutkiewicz",
      "Bryan Mccourt"
     ],
     "a": [
      "Gianni Roman",
      "Saad Talat Siddiqui"
     ]
    },
    {
     "t": "male",
     "h": [
      "Marc Kunesch",
      "Michael Vincent"
     ],
     "a": [
      "Buyi Zhang",
      "Madhu Raghunathan"
     ]
    },
    {
     "t": "male",
     "h": [
      "Kevin Sheehan",
      "Robert Huntley"
     ],
     "a": [
      "Brandon Fulford",
      "Sean Majury"
     ]
    },
    {
     "t": "male",
     "h": [
      "Dennis Yap",
      "Jacob Yoo"
     ],
     "a": [
      "Allan Orchard",
      "Franklin Yiu"
     ]
    },
    {
     "t": "male",
     "h": [
      "Ricky Jutkiewicz",
      "Pat Wilson"
     ],
     "a": [
      "Gianni Roman",
      "Saad Talat Siddiqui"
     ]
    },
    {
     "t": "male",
     "h": [
      "Marc Kunesch",
      "Michael Vincent"
     ],
     "a": [
      "Buyi Zhang",
      "Madhu Raghunathan"
     ]
    },
    {
     "t": "male",
     "h": [
      "Ricky Jutkiewicz",
      "Bryan Mccourt"
     ],
     "a": [
      "Gianni Roman",
      "Sean Majury"
     ]
    },
    {
     "t": "male",
     "h": [
      "Dennis Yap",
      "Pat Wilson"
     ],
     "a": [
      "Allan Orchard",
      "Brandon Fulford"
     ]
    },
    {
     "t": "male",
     "h": [
      "Kevin Sheehan",
      "Michael Vincent"
     ],
     "a": [
      "Franklin Yiu",
      "Buyi Zhang"
     ]
    },
    {
     "t": "male",
     "h": [
      "Jacob Yoo",
      "Matthew Carrington"
     ],
     "a": [
      "Madhu Raghunathan",
      "Saad Talat Siddiqui"
     ]
    },
    {
     "t": "male",
     "h": [
      "Matthew Carrington",
      "Michael Vincent"
     ],
     "a": [
      "Gianni Roman",
      "Buyi Zhang"
     ]
    },
    {
     "t": "male",
     "h": [
      "Ricky Jutkiewicz",
      "Pat Wilson"
     ],
     "a": [
      "Allan Orchard",
      "Brandon Fulford"
     ]
    },
    {
     "t": "male",
     "h": [
      "Bryan Mccourt",
      "Kevin Sheehan"
     ],
     "a": [
      "Sean Majury",
      "Franklin Yiu"
     ]
    },
    {
     "t": "male",
     "h": [
      "Marc Kunesch",
      "Robert Huntley"
     ],
     "a": [
      "Saad Talat Siddiqui",
      "Madhu Raghunathan"
     ]
    },
    {
     "t": "male",
     "h": [
      "Michael Vincent",
      "Pat Wilson"
     ],
     "a": [
      "Gianni Roman",
      "Buyi Zhang"
     ]
    },
    {
     "t": "male",
     "h": [
      "Bryan Mccourt",
      "Jacob Yoo"
     ],
     "a": [
      "Allan Orchard",
      "Sean Majury"
     ]
    },
    {
     "t": "male",
     "h": [
      "Dennis Yap",
      "Kevin Sheehan"
     ],
     "a": [
      "Franklin Yiu",
      "Madhu Raghunathan"
     ]
    },
    {
     "t": "male",
     "h": [
      "Marc Kunesch",
      "Matthew Carrington"
     ],
     "a": [
      "Brandon Fulford",
      "Saad Talat Siddiqui"
     ]
    },
    {
     "t": "male",
     "h": [
      "Jacob Yoo",
      "Matthew Carrington"
     ],
     "a": [
      "Gianni Roman",
      "Madhu Raghunathan"
     ]
    },
    {
     "t": "male",
     "h": [
      "Dennis Yap",
      "Kevin Sheehan"
     ],
     "a": [
      "Allan Orchard",
      "Sean Majury"
     ]
    },
    {
     "t": "male",
     "h": [
      "Bryan Mccourt",
      "Pat Wilson"
     ],
     "a": [
      "Franklin Yiu",
      "Saad Talat Siddiqui"
     ]
    },
    {
     "t": "male",
     "h": [
      "Marc Kunesch",
      "Robert Huntley"
     ],
     "a": [
      "Brandon Fulford",
      "Buyi Zhang"
     ]
    }
   ]
  },
  {
   "result": "away",
   "week": 5,
   "home": "Dill Dinkers Newport",
   "away": "Bounce Malvern",
   "time": "2026-09-22T19:30:00",
   "complete": true,
   "provisional": true,
   "homePoints": 473,
   "awayPoints": 674,
   "homeGW": 3,
   "awayGW": 29,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Joel Steinbrunner",
      "Aleks Mirkovic"
     ],
     "a": [
      "Graham Heavenrich",
      "Matt Enz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Steppan Konoplev",
      "David Fiscella"
     ],
     "a": [
      "Jordan Demcher",
      "Charles Evans"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Rick Olafsson",
      "Malay Kaity"
     ],
     "a": [
      "Harrison Bohrer",
      "Jr Burrs"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Xan Hong",
      "Jesse Pettit"
     ],
     "a": [
      "Leland Weinert",
      "Lincoln Jensen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Joel Steinbrunner",
      "Aleks Mirkovic"
     ],
     "a": [
      "Harvey Mitchell",
      "Charles Evans"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Steppan Konoplev",
      "David Fiscella"
     ],
     "a": [
      "Graham Heavenrich",
      "Harrison Bohrer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Rick Olafsson",
      "Malay Kaity"
     ],
     "a": [
      "Leland Weinert",
      "Russell Cripps"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jesse Pettit",
      "Xan Hong"
     ],
     "a": [
      "Jr Burrs",
      "Matt Enz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Aleks Mirkovic",
      "David Fiscella"
     ],
     "a": [
      "Charles Evans",
      "Matt Enz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Joel Steinbrunner",
      "Malay Kaity"
     ],
     "a": [
      "Graham Heavenrich",
      "Russell Cripps"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Rick Olafsson",
      "Jesse Pettit"
     ],
     "a": [
      "Jr Burrs",
      "Jordan Demcher"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Bill Violette",
      "Xavier Vazquez"
     ],
     "a": [
      "Lincoln Jensen",
      "Harvey Mitchell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Aleks Mirkovic",
      "David Fiscella"
     ],
     "a": [
      "Jordan Demcher",
      "Jr Burrs"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Joel Steinbrunner",
      "Malay Kaity"
     ],
     "a": [
      "Leland Weinert",
      "Harrison Bohrer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Rick Olafsson",
      "Jesse Pettit"
     ],
     "a": [
      "Charles Evans",
      "Matt Enz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Bill Violette",
      "Xavier Vazquez"
     ],
     "a": [
      "Harvey Mitchell",
      "Graham Heavenrich"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "David Fiscella",
      "Joel Steinbrunner"
     ],
     "a": [
      "Graham Heavenrich",
      "Lincoln Jensen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Malay Kaity",
      "Jesse Pettit"
     ],
     "a": [
      "Harvey Mitchell",
      "Leland Weinert"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Steppan Konoplev",
      "Rick Olafsson"
     ],
     "a": [
      "Matt Enz",
      "Harrison Bohrer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Aleks Mirkovic",
      "Xan Hong"
     ],
     "a": [
      "Russell Cripps",
      "Jordan Demcher"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "David Fiscella",
      "Joel Steinbrunner"
     ],
     "a": [
      "Leland Weinert",
      "Charles Evans"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Malay Kaity",
      "Jesse Pettit"
     ],
     "a": [
      "Harvey Mitchell",
      "Russell Cripps"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Steppan Konoplev",
      "Rick Olafsson"
     ],
     "a": [
      "Harrison Bohrer",
      "Lincoln Jensen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Aleks Mirkovic",
      "Xan Hong"
     ],
     "a": [
      "Jr Burrs",
      "Matt Enz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "David Fiscella",
      "Malay Kaity"
     ],
     "a": [
      "Jr Burrs",
      "Russell Cripps"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Rick Olafsson",
      "Aleks Mirkovic"
     ],
     "a": [
      "Jordan Demcher",
      "Charles Evans"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Bill Violette",
      "Joel Steinbrunner"
     ],
     "a": [
      "Harrison Bohrer",
      "Lincoln Jensen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Xavier Vazquez",
      "Jesse Pettit"
     ],
     "a": [
      "Graham Heavenrich",
      "Harvey Mitchell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "David Fiscella",
      "Malay Kaity"
     ],
     "a": [
      "Graham Heavenrich",
      "Lincoln Jensen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Rick Olafsson",
      "Aleks Mirkovic"
     ],
     "a": [
      "Jordan Demcher",
      "Harvey Mitchell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Bill Violette",
      "Joel Steinbrunner"
     ],
     "a": [
      "Jr Burrs",
      "Leland Weinert"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Xavier Vazquez",
      "Jesse Pettit"
     ],
     "a": [
      "Matt Enz",
      "Russell Cripps"
     ]
    }
   ],
   "subs": [
    "Malay Kaity"
   ]
  },
  {
   "result": null,
   "week": 5,
   "home": "Dill Dinkers Newport",
   "away": "Pickleball HQ",
   "time": "2026-09-27T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "PickleRage Union County",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-09-27T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Home Court",
   "away": "Pickleball Kingdom Lehigh Valley",
   "time": "2026-09-27T16:00:00",
   "complete": false,
   "games": [
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Rohit Mankotia",
      "Michael Barndt"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Eric Ruiz",
      "Harlos Vizcarrondo"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Samuel Kashefska",
      "David Reyes"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Cullen Curley",
      "Dion Brown"
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
      "Michael Barndt",
      "Harlos Vizcarrondo"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Rohit Mankotia",
      "Dion Brown"
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
      "Samuel Kashefska",
      "Eric Ruiz"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "David Reyes",
      "Ali Bhimji"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Cullen Curley",
      "David Reyes"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Michael Barndt",
      "Ali Bhimji"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Rohit Mankotia",
      "Eric Ruiz"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Samuel Kashefska",
      "Dion Brown"
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
      "David Reyes",
      "Ali Bhimji"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Cullen Curley",
      "Dion Brown"
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
      "Harlos Vizcarrondo",
      "Michael Barndt"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Rohit Mankotia",
      "Samuel Kashefska"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Michael Barndt",
      "Ali Bhimji"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Rohit Mankotia",
      "Dion Brown"
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
      "Samuel Kashefska",
      "Eric Ruiz"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Cullen Curley",
      "David Reyes"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Samuel Kashefska",
      "Michael Barndt"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Eric Ruiz",
      "Dion Brown"
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
      "Rohit Mankotia",
      "Eric Ruiz"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Samuel Kashefska",
      "Harlos Vizcarrondo"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Rohit Mankotia",
      "David Reyes"
     ]
    }
   ]
  },
  {
   "result": null,
   "week": 5,
   "home": "Allstar Pickler",
   "away": "Flemington",
   "time": "2026-09-27T16:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Dill Dinkers Freehold",
   "away": "Monroe",
   "time": "2026-09-29T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Premiere",
   "away": "Pickle House",
   "time": "2026-09-29T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Bounce Malvern",
   "away": "Picklr Newtown",
   "time": "2026-09-29T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "APC Garden State",
   "away": "Dill Dinkers Newport",
   "time": "2026-09-29T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Allstar Pickler",
   "away": "Pickleball Kingdom Lehigh Valley",
   "time": "2026-09-29T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Pickleball HQ",
   "away": "Pickleball Kingdom Hamilton",
   "time": "2026-09-29T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Montville",
   "away": "Flemington",
   "time": "2026-09-29T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Bounce Tempest",
   "away": "Jersey Devil",
   "time": "2026-09-29T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Home Court",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-09-29T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Flemington",
   "away": "Pickleball Kingdom Lehigh Valley",
   "time": "2026-10-06T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Allstar Pickler",
   "time": "2026-10-06T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Picklr Newtown",
   "away": "Bounce Malvern",
   "time": "2026-10-06T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Dill Dinkers Newport",
   "away": "APC Garden State",
   "time": "2026-10-06T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Pickle House",
   "away": "Premiere",
   "time": "2026-10-06T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "PickleRage Union County",
   "away": "Montville",
   "time": "2026-10-06T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Pickleball Kingdom Hamilton",
   "away": "Pickleball HQ",
   "time": "2026-10-06T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Jersey Devil",
   "away": "Bounce Tempest",
   "time": "2026-10-06T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Monroe",
   "away": "Dill Dinkers Freehold",
   "time": "2026-10-06T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Bounce Malvern",
   "away": "Premiere",
   "time": "2026-10-13T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Pickleball Kingdom Lehigh Valley",
   "time": "2026-10-13T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Picklr Newtown",
   "away": "Pickleball Kingdom Hamilton",
   "time": "2026-10-13T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Jersey Devil",
   "away": "Monroe",
   "time": "2026-10-13T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "APC Garden State",
   "away": "Dill Dinkers Freehold",
   "time": "2026-10-13T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "PickleRage Union County",
   "away": "Home Court",
   "time": "2026-10-13T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Allstar Pickler",
   "away": "Montville",
   "time": "2026-10-13T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Bounce Tempest",
   "away": "Pickle House",
   "time": "2026-10-13T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Premiere",
   "away": "Pickleball Kingdom Hamilton",
   "time": "2026-10-20T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Dill Dinkers Freehold",
   "away": "Pickle House",
   "time": "2026-10-20T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Bounce Malvern",
   "away": "Jersey Devil",
   "time": "2026-10-20T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Flemington",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-10-20T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Pickleball HQ",
   "away": "Monroe",
   "time": "2026-10-20T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "PickleRage Union County",
   "away": "Allstar Pickler",
   "time": "2026-10-20T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Bounce Tempest",
   "away": "Dill Dinkers Newport",
   "time": "2026-10-20T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "APC Garden State",
   "away": "Picklr Newtown",
   "time": "2026-10-20T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Home Court",
   "away": "Montville",
   "time": "2026-10-20T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Pickleball Kingdom Lehigh Valley",
   "away": "Home Court",
   "time": "2026-10-25T09:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Flemington",
   "away": "Allstar Pickler",
   "time": "2026-10-25T09:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "PickleRage Union County",
   "time": "2026-10-25T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Premiere",
   "away": "Dill Dinkers Newport",
   "time": "2026-10-25T18:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Picklr Newtown",
   "away": "Bounce Tempest",
   "time": "2026-10-27T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Pickle House",
   "away": "Monroe",
   "time": "2026-10-27T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Pickleball HQ",
   "away": "Premiere",
   "time": "2026-10-27T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "PickleRage Union County",
   "away": "Pickleball Kingdom Lehigh Valley",
   "time": "2026-10-27T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Montville",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-10-27T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "APC Garden State",
   "away": "Bounce Malvern",
   "time": "2026-10-27T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Home Court",
   "away": "Flemington",
   "time": "2026-10-27T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Dill Dinkers Newport",
   "away": "Jersey Devil",
   "time": "2026-10-27T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Pickleball Kingdom Hamilton",
   "away": "Dill Dinkers Freehold",
   "time": "2026-10-27T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Pickleball Kingdom Lehigh Valley",
   "away": "PickleRage Union County",
   "time": "2026-11-03T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Montville",
   "time": "2026-11-03T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Premiere",
   "away": "Monroe",
   "time": "2026-11-03T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Flemington",
   "away": "Home Court",
   "time": "2026-11-03T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Dill Dinkers Freehold",
   "away": "Pickleball HQ",
   "time": "2026-11-03T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "APC Garden State",
   "away": "Jersey Devil",
   "time": "2026-11-03T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Pickleball Kingdom Hamilton",
   "away": "Pickle House",
   "time": "2026-11-03T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Bounce Tempest",
   "away": "Bounce Malvern",
   "time": "2026-11-03T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Picklr Newtown",
   "away": "Dill Dinkers Newport",
   "time": "2026-11-03T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Pickleball Kingdom Lehigh Valley",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-11-10T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Premiere",
   "away": "Dill Dinkers Freehold",
   "time": "2026-11-10T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Bounce Malvern",
   "away": "Dill Dinkers Newport",
   "time": "2026-11-10T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Jersey Devil",
   "away": "Picklr Newtown",
   "time": "2026-11-10T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Bounce Tempest",
   "away": "APC Garden State",
   "time": "2026-11-10T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Montville",
   "away": "Allstar Pickler",
   "time": "2026-11-10T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Monroe",
   "away": "Pickleball Kingdom Hamilton",
   "time": "2026-11-10T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Home Court",
   "away": "PickleRage Union County",
   "time": "2026-11-10T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Pickleball HQ",
   "away": "Pickle House",
   "time": "2026-11-10T19:30:00",
   "complete": false
  }
 ],
 "playoffs": [],
 "extraPlayerIds": {
  "Matthew Rafaniello": "021fbd88-6b98-47eb-aa92-96ed959d8a4b",
  "Chris Cheng": "0c6bb34d-2f84-4d14-b3c7-378346532a11",
  "Steve Peck": "17c1d95a-2f52-4329-a52a-a991d1fc3335",
  "Jacob Alpert": "1cd5949a-4196-4e3a-a611-7188d34f4708",
  "Chris Shung": "2253df3c-7a50-4a9a-b197-2f80d64b089f",
  "Yiqun (Nina) Chen": "39da74b5-60a5-49cf-ae21-80b24602c3f4",
  "Justin Umana": "5eba9352-3bf9-4927-831e-52eaa3fb65a7",
  "Craig Wu": "8667ff30-fa9e-4078-a6a0-63fcb68c8425",
  "Simon Darlington": "9ae1e374-e878-450b-9552-e80472590d9e",
  "Steven Santiago": "add792d2-e174-42b1-8bf8-bc9e2c2aa354",
  "Sean Liotine": "b7a5d158-2b7c-4fdc-83ab-aea797095631",
  "Zane Pagotto": "bf789141-926d-44b1-83c9-d5e5853589cb",
  "Rahul Desai": "ccf688a3-76c8-4dfe-8fd0-19dfb8f0ccd9",
  "Jason Ilkowitz": "dcd4414c-5981-4a70-a4dc-fd943d6d5e17",
  "Chris Gander": "ebc6c2b2-f16d-478f-90fb-886d4e67f0aa",
  "Andrew Liou": "fd14ada2-5855-4bb3-a8cd-d68aba23ba95"
 },
 "meta": {
  "matchesPlayed": 40,
  "provisionalMatches": 2,
  "weeks": "1-5",
  "totalPlayers": 268,
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
    "week": 3,
    "label": "3",
    "seq": 2
   },
   {
    "week": 4,
    "label": "4",
    "seq": 3
   },
   {
    "week": 5,
    "label": "5",
    "seq": 4
   }
  ],
  "divisionSlug": "c118b8e9",
  "hasPlayoffs": false,
  "typicalDay": "Tuesdays",
  "detailFile": "compiled/detail-c118b8e9.js",
  "clubName": "",
  "divisionName": "3.75 Mens",
  "leagueType": "travel",
  "seasonSlug": "2026-fall",
  "seasonLabel": "Fall 2026",
  "seasonStatus": "current",
  "singleGender": "Male",
  "podCount": 2,
  "podNames": [
   "East / South",
   "North"
  ],
  "podSource": "api",
  "reportedPods": [
   "East",
   "North",
   "South"
  ],
  "podMismatch": {
   "crossPodMatchups": 12,
   "totalMatchups": 114,
   "reported": {
    "South": [
     "APC Garden State",
     "Bounce Malvern",
     "Bounce Tempest",
     "Dill Dinkers Newport",
     "Jersey Devil",
     "Picklr Newtown"
    ],
    "East": [
     "Dill Dinkers Freehold",
     "Monroe",
     "Pickle House",
     "Pickleball HQ",
     "Pickleball Kingdom Hamilton",
     "Premiere"
    ],
    "North": [
     "Allstar Pickler",
     "Flemington",
     "Home Court",
     "Montville",
     "Pickleball Kingdom Hillsborough",
     "Pickleball Kingdom Lehigh Valley",
     "PickleRage Union County"
    ]
   },
   "schedule": {
    "Pod 1": [
     "APC Garden State",
     "Bounce Malvern",
     "Bounce Tempest",
     "Dill Dinkers Freehold",
     "Dill Dinkers Newport",
     "Jersey Devil",
     "Monroe",
     "Pickle House",
     "Pickleball HQ",
     "Pickleball Kingdom Hamilton",
     "Picklr Newtown",
     "Premiere"
    ],
    "Pod 2": [
     "Allstar Pickler",
     "Flemington",
     "Home Court",
     "Montville",
     "Pickleball Kingdom Hillsborough",
     "Pickleball Kingdom Lehigh Valley",
     "PickleRage Union County"
    ]
   }
  }
 }
};
  DATA.meta.asOf = "2026-09-23T02:34:54.534Z";
  window.DATA = DATA;
  window.CPL_DATASETS = window.CPL_DATASETS || {};
  window.CPL_DATASETS["c118b8e9"] = DATA;
})();
