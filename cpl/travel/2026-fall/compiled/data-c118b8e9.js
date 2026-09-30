(function () {
  const DATA = {
 "players": [
  {
   "name": "Nathan Labarba",
   "gender": "Male",
   "team": "Montville",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 7,
   "losses": 0,
   "pointsWon": 147,
   "totalPointsAgainst": 82,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 65,
   "ppg": 21,
   "leagueRank": 65,
   "rating": 3.8,
   "ratingGames": 7,
   "confidence": 58,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -1,
   "playerId": "09a7d6c3-7bc5-4760-97a7-71f06a1197a1"
  },
  {
   "name": "Sal Cocuzza",
   "gender": "Male",
   "team": "Montville",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 7,
   "losses": 0,
   "pointsWon": 147,
   "totalPointsAgainst": 98,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 49,
   "ppg": 21,
   "leagueRank": 76,
   "rating": 1.8,
   "ratingGames": 7,
   "confidence": 60,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -1.8,
   "playerId": "665c8622-ccbc-4273-9af7-fd9d8840581a"
  },
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
   "leagueRank": 93,
   "rating": 1.2,
   "ratingGames": 7,
   "confidence": 60,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -1.4,
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
   "leagueRank": 79,
   "rating": 2.2,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.3,
   "playerId": "0534f11f-c60b-49bf-8407-3d2ce0f1b7a0"
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
   "leagueRank": 1,
   "rating": 4.2,
   "ratingGames": 16,
   "confidence": 75,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.6,
   "playerId": "a131a707-f20e-4838-9dcf-7cecb40c2705"
  },
  {
   "name": "Harvey Mitchell",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 23,
   "losses": 2,
   "pointsWon": 521,
   "totalPointsAgainst": 354,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 23,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 92,
   "diff": 167,
   "ppg": 20.8,
   "leagueRank": 2,
   "rating": 4.7,
   "ratingGames": 25,
   "confidence": 83,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0,
   "playerId": "c5fa38d0-add2-462c-b3de-5b62dd4d1386"
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
   "leagueRank": 6,
   "rating": 2.8,
   "ratingGames": 25,
   "confidence": 83,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -0.3,
   "playerId": "870112b1-afc3-4ff6-b784-7f872210bf37"
  },
  {
   "name": "Christopher Hendrickson",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 48,
   "wins": 42,
   "losses": 6,
   "pointsWon": 990,
   "totalPointsAgainst": 764,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 42,
   "genderLosses": 6,
   "clutchWins": 9,
   "clutchLosses": 4,
   "winPct": 87.5,
   "diff": 226,
   "ppg": 20.6,
   "leagueRank": 4,
   "rating": 4,
   "ratingGames": 48,
   "confidence": 90,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": 0.7,
   "playerId": "7fc1ed1b-4763-49b4-a077-46a92c0df3d6"
  },
  {
   "name": "Shalin Rawal",
   "gender": "Male",
   "team": "Montville",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 21,
   "losses": 3,
   "pointsWon": 497,
   "totalPointsAgainst": 358,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 21,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 87.5,
   "diff": 139,
   "ppg": 20.7,
   "leagueRank": 3,
   "rating": 4.2,
   "ratingGames": 24,
   "confidence": 81,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0,
   "playerId": "08530d21-2dc5-4f71-9d49-9191ec192860"
  },
  {
   "name": "Graham Heavenrich",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 32,
   "wins": 28,
   "losses": 4,
   "pointsWon": 651,
   "totalPointsAgainst": 525,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 28,
   "genderLosses": 4,
   "clutchWins": 7,
   "clutchLosses": 1,
   "winPct": 87.5,
   "diff": 126,
   "ppg": 20.3,
   "leagueRank": 10,
   "rating": 2.3,
   "ratingGames": 32,
   "confidence": 86,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0.1,
   "playerId": "27d8a10f-ee9b-467c-bf8c-4872ce63de90"
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
   "leagueRank": 32,
   "rating": 2.8,
   "ratingGames": 8,
   "confidence": 60,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.9,
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
   "leagueRank": 115,
   "rating": 1.9,
   "ratingGames": 8,
   "confidence": 62,
   "strengthOfPartners": -0.2,
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
   "leagueRank": 77,
   "rating": 1.6,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0,
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
   "leagueRank": 63,
   "rating": 1,
   "ratingGames": 8,
   "confidence": 62,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.4,
   "playerId": "2d37c246-0ab5-45ca-bb7b-c869e24452b5"
  },
  {
   "name": "Elliott Albanese",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 12,
   "losses": 2,
   "pointsWon": 286,
   "totalPointsAgainst": 188,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 85.7,
   "diff": 98,
   "ppg": 20.4,
   "leagueRank": 5,
   "rating": 3.5,
   "ratingGames": 14,
   "confidence": 74,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.7,
   "playerId": "6af88387-5e2b-4ea7-b732-22885e4931a8"
  },
  {
   "name": "Daniel Dechristopher",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 17,
   "losses": 3,
   "pointsWon": 409,
   "totalPointsAgainst": 323,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 17,
   "genderLosses": 3,
   "clutchWins": 4,
   "clutchLosses": 0,
   "winPct": 85,
   "diff": 86,
   "ppg": 20.5,
   "leagueRank": 7,
   "rating": 3.6,
   "ratingGames": 20,
   "confidence": 80,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.6,
   "playerId": "899ba1d1-37e5-4ad6-8daa-f726376776e5"
  },
  {
   "name": "Jun Zhi Tan",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 33,
   "losses": 6,
   "pointsWon": 794,
   "totalPointsAgainst": 603,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 33,
   "genderLosses": 6,
   "clutchWins": 9,
   "clutchLosses": 2,
   "winPct": 84.6,
   "diff": 191,
   "ppg": 20.4,
   "leagueRank": 8,
   "rating": 3.5,
   "ratingGames": 39,
   "confidence": 88,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.3,
   "playerId": "d0e16b4b-7708-425d-ae9d-e3992c4e7fe2"
  },
  {
   "name": "Dion Brown",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 122,
   "totalPointsAgainst": 88,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 34,
   "ppg": 20.3,
   "leagueRank": 108,
   "rating": 3.3,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.2,
   "playerId": "4c6d1b49-9a66-4e43-8a49-cf56c2901a3b"
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
   "leagueRank": 127,
   "rating": 2.1,
   "ratingGames": 6,
   "confidence": 57,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.3,
   "playerId": "c8f3b265-67a8-412c-84f5-aee92a913aac"
  },
  {
   "name": "Harlos Vizcarrondo",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 124,
   "totalPointsAgainst": 104,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 83.3,
   "diff": 20,
   "ppg": 20.7,
   "leagueRank": 125,
   "rating": 1.3,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0,
   "playerId": "9e348e82-13d0-4911-8efa-e5a2f7afded1"
  },
  {
   "name": "Jieping Wang",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 122,
   "totalPointsAgainst": 111,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 11,
   "ppg": 20.3,
   "leagueRank": 141,
   "rating": 0.7,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": -1.2,
   "playerId": "c9088878-9755-4e32-abed-4a4e5a42f9a8"
  },
  {
   "name": "Umang Pathak",
   "gender": "Male",
   "team": "Montville",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 40,
   "wins": 33,
   "losses": 7,
   "pointsWon": 822,
   "totalPointsAgainst": 620,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 33,
   "genderLosses": 7,
   "clutchWins": 8,
   "clutchLosses": 5,
   "winPct": 82.5,
   "diff": 202,
   "ppg": 20.6,
   "leagueRank": 9,
   "rating": 4.1,
   "ratingGames": 40,
   "confidence": 87,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.2,
   "playerId": "30ecad69-b82a-45aa-94c5-f0f7869a0d12"
  },
  {
   "name": "Brandon Tsang",
   "gender": "Male",
   "team": "Montville",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 33,
   "wins": 27,
   "losses": 6,
   "pointsWon": 672,
   "totalPointsAgainst": 576,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 27,
   "genderLosses": 6,
   "clutchWins": 7,
   "clutchLosses": 3,
   "winPct": 81.8,
   "diff": 96,
   "ppg": 20.4,
   "leagueRank": 16,
   "rating": 1.5,
   "ratingGames": 33,
   "confidence": 86,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.5,
   "playerId": "c80b5964-35f3-46b9-a0fa-9c3c9c673161"
  },
  {
   "name": "Matt Enz",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 26,
   "losses": 6,
   "pointsWon": 654,
   "totalPointsAgainst": 538,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 26,
   "genderLosses": 6,
   "clutchWins": 9,
   "clutchLosses": 3,
   "winPct": 81.3,
   "diff": 116,
   "ppg": 20.4,
   "leagueRank": 14,
   "rating": 1.4,
   "ratingGames": 32,
   "confidence": 86,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -0.4,
   "playerId": "683d1fdd-2fa0-4775-a8dd-0f733aa9f1a3"
  },
  {
   "name": "Jamison Rowles",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 21,
   "losses": 5,
   "pointsWon": 526,
   "totalPointsAgainst": 410,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 21,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 80.8,
   "diff": 116,
   "ppg": 20.2,
   "leagueRank": 12,
   "rating": 2.6,
   "ratingGames": 26,
   "confidence": 84,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": 0.2,
   "playerId": "cae7c2db-b4d5-4927-9c44-ff92176b5507"
  },
  {
   "name": "Matheus Korndoerfer",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 21,
   "losses": 5,
   "pointsWon": 509,
   "totalPointsAgainst": 431,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 21,
   "genderLosses": 5,
   "clutchWins": 5,
   "clutchLosses": 1,
   "winPct": 80.8,
   "diff": 78,
   "ppg": 19.6,
   "leagueRank": 20,
   "rating": 2.3,
   "ratingGames": 26,
   "confidence": 84,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.2,
   "playerId": "e1f41428-436c-436e-b752-af9cead487be"
  },
  {
   "name": "Kyle Korman",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 28,
   "losses": 7,
   "pointsWon": 702,
   "totalPointsAgainst": 587,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 28,
   "genderLosses": 7,
   "clutchWins": 7,
   "clutchLosses": 4,
   "winPct": 80,
   "diff": 115,
   "ppg": 20.1,
   "leagueRank": 17,
   "rating": 1.9,
   "ratingGames": 35,
   "confidence": 87,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.1,
   "playerId": "d61a3828-6dfc-480a-b26a-534b0fe58268"
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
   "leagueRank": 13,
   "rating": 2.8,
   "ratingGames": 15,
   "confidence": 75,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.1,
   "playerId": "084f4667-3553-4f23-b4c7-62d6c8afb42a"
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
   "leagueRank": 15,
   "rating": 2.5,
   "ratingGames": 38,
   "confidence": 88,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.2,
   "playerId": "20c15f19-5b27-4c9f-bc75-da3d516a015b"
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
   "leagueRank": 25,
   "rating": 1.5,
   "ratingGames": 14,
   "confidence": 74,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.5,
   "playerId": "39c75937-8a66-4688-85f8-6c547400e441"
  },
  {
   "name": "Jimmy Ramja",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 49,
   "wins": 38,
   "losses": 11,
   "pointsWon": 989,
   "totalPointsAgainst": 828,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 38,
   "genderLosses": 11,
   "clutchWins": 14,
   "clutchLosses": 6,
   "winPct": 77.6,
   "diff": 161,
   "ppg": 20.2,
   "leagueRank": 23,
   "rating": 1.6,
   "ratingGames": 49,
   "confidence": 90,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.5,
   "playerId": "ade57877-7c11-4a46-88bf-789a50906901"
  },
  {
   "name": "Ashish Kumar",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 31,
   "wins": 24,
   "losses": 7,
   "pointsWon": 626,
   "totalPointsAgainst": 504,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 24,
   "genderLosses": 7,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 77.4,
   "diff": 122,
   "ppg": 20.2,
   "leagueRank": 11,
   "rating": 4.1,
   "ratingGames": 31,
   "confidence": 86,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.4,
   "playerId": "5df02573-21d4-40ea-8b41-f81372a474b3"
  },
  {
   "name": "David Brandolph",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 43,
   "wins": 33,
   "losses": 10,
   "pointsWon": 852,
   "totalPointsAgainst": 714,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 33,
   "genderLosses": 10,
   "clutchWins": 6,
   "clutchLosses": 5,
   "winPct": 76.7,
   "diff": 138,
   "ppg": 19.8,
   "leagueRank": 19,
   "rating": 3.2,
   "ratingGames": 43,
   "confidence": 89,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.3,
   "playerId": "be10853a-1f2c-4b56-8fd7-902ddc686401"
  },
  {
   "name": "Jordan Demcher",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 29,
   "losses": 9,
   "pointsWon": 765,
   "totalPointsAgainst": 611,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 29,
   "genderLosses": 9,
   "clutchWins": 5,
   "clutchLosses": 5,
   "winPct": 76.3,
   "diff": 154,
   "ppg": 20.1,
   "leagueRank": 18,
   "rating": 2.8,
   "ratingGames": 38,
   "confidence": 87,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.1,
   "playerId": "6d1beb10-bd5c-456f-95b5-1823752e8c62"
  },
  {
   "name": "Luca Hendrickson",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 48,
   "wins": 36,
   "losses": 12,
   "pointsWon": 969,
   "totalPointsAgainst": 782,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 36,
   "genderLosses": 12,
   "clutchWins": 7,
   "clutchLosses": 8,
   "winPct": 75,
   "diff": 187,
   "ppg": 20.2,
   "leagueRank": 21,
   "rating": 2.9,
   "ratingGames": 48,
   "confidence": 90,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": 0.6,
   "playerId": "bd14255e-c654-49a4-99a1-26e02c67c7c7"
  },
  {
   "name": "Jason Feldman",
   "gender": "Male",
   "team": "Premiere",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 32,
   "wins": 24,
   "losses": 8,
   "pointsWon": 637,
   "totalPointsAgainst": 502,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 24,
   "genderLosses": 8,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 75,
   "diff": 135,
   "ppg": 19.9,
   "leagueRank": 22,
   "rating": 1.9,
   "ratingGames": 32,
   "confidence": 86,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.7,
   "playerId": "5636cdc5-7a65-4202-abbb-5999eee35ab3"
  },
  {
   "name": "Sal Bwint",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 9,
   "losses": 3,
   "pointsWon": 242,
   "totalPointsAgainst": 193,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 75,
   "diff": 49,
   "ppg": 20.2,
   "leagueRank": 46,
   "rating": 1,
   "ratingGames": 12,
   "confidence": 71,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -0.7,
   "playerId": "8db75058-7f84-48bc-9a6c-e15a8fa1a71e"
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
   "leagueRank": 26,
   "rating": 1.7,
   "ratingGames": 20,
   "confidence": 80,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.5,
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
   "leagueRank": 55,
   "rating": 0.9,
   "ratingGames": 12,
   "confidence": 71,
   "strengthOfPartners": 2.3,
   "strengthOfOpponents": 0.2,
   "playerId": "93280d5d-b0c8-49cd-94fe-0350f3e2dac5"
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
   "leagueRank": 150,
   "rating": 1.9,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.5,
   "playerId": "d5e18b3e-0836-42c4-9774-810e048ef675"
  },
  {
   "name": "Andy Suphaphol",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 6,
   "losses": 2,
   "pointsWon": 163,
   "totalPointsAgainst": 146,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 75,
   "diff": 17,
   "ppg": 20.4,
   "leagueRank": 189,
   "rating": -1.3,
   "ratingGames": 8,
   "confidence": 59,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": -2.4,
   "playerId": "a58f9ffa-60cc-46b5-ba59-0c78a43ac986"
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
   "leagueRank": 140,
   "rating": 1.1,
   "ratingGames": 8,
   "confidence": 60,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": -0.8,
   "playerId": "c5e40aa9-efbf-4937-b44d-1b8f06693ba4"
  },
  {
   "name": "Anthony Simonetti",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 31,
   "wins": 23,
   "losses": 8,
   "pointsWon": 617,
   "totalPointsAgainst": 540,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 23,
   "genderLosses": 8,
   "clutchWins": 7,
   "clutchLosses": 4,
   "winPct": 74.2,
   "diff": 77,
   "ppg": 19.9,
   "leagueRank": 29,
   "rating": 2.5,
   "ratingGames": 31,
   "confidence": 86,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0.9,
   "playerId": "3a2b64a1-6eb6-41e4-92fe-8da3d95af11b"
  },
  {
   "name": "Kevin Tran",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 20,
   "losses": 7,
   "pointsWon": 542,
   "totalPointsAgainst": 457,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 20,
   "genderLosses": 7,
   "clutchWins": 7,
   "clutchLosses": 4,
   "winPct": 74.1,
   "diff": 85,
   "ppg": 20.1,
   "leagueRank": 24,
   "rating": 2.1,
   "ratingGames": 27,
   "confidence": 83,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0,
   "playerId": "5a604a32-f8bf-45a8-b6b3-ef2922e0eeaf"
  },
  {
   "name": "Jeff Axelrad",
   "gender": "Male",
   "team": "Montville",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 14,
   "losses": 5,
   "pointsWon": 375,
   "totalPointsAgainst": 347,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 14,
   "genderLosses": 5,
   "clutchWins": 9,
   "clutchLosses": 1,
   "winPct": 73.7,
   "diff": 28,
   "ppg": 19.7,
   "leagueRank": 43,
   "rating": 0.3,
   "ratingGames": 19,
   "confidence": 80,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0,
   "playerId": "27009a0b-037c-4934-9f52-d21c928ef173"
  },
  {
   "name": "John Manuzza",
   "gender": "Male",
   "team": "Montville",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 34,
   "wins": 25,
   "losses": 9,
   "pointsWon": 685,
   "totalPointsAgainst": 599,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 25,
   "genderLosses": 9,
   "clutchWins": 9,
   "clutchLosses": 4,
   "winPct": 73.5,
   "diff": 86,
   "ppg": 20.1,
   "leagueRank": 28,
   "rating": 0.9,
   "ratingGames": 34,
   "confidence": 86,
   "strengthOfPartners": 2.1,
   "strengthOfOpponents": 0.3,
   "playerId": "5d3156e6-7886-4184-9d2f-3ec44d72bb3b"
  },
  {
   "name": "Bennett Pereira",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 22,
   "losses": 8,
   "pointsWon": 579,
   "totalPointsAgainst": 516,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 22,
   "genderLosses": 8,
   "clutchWins": 7,
   "clutchLosses": 2,
   "winPct": 73.3,
   "diff": 63,
   "ppg": 19.3,
   "leagueRank": 41,
   "rating": 0.7,
   "ratingGames": 30,
   "confidence": 85,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.2,
   "playerId": "6a2ea39b-8b67-4cdf-83f7-c16fb3224655"
  },
  {
   "name": "Joseph Lynskey",
   "gender": "Male",
   "team": "Premiere",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 40,
   "wins": 29,
   "losses": 11,
   "pointsWon": 798,
   "totalPointsAgainst": 682,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 29,
   "genderLosses": 11,
   "clutchWins": 6,
   "clutchLosses": 6,
   "winPct": 72.5,
   "diff": 116,
   "ppg": 20,
   "leagueRank": 27,
   "rating": 2.1,
   "ratingGames": 40,
   "confidence": 88,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.1,
   "playerId": "0e8c08b7-0e58-434b-8830-f37779f821dc"
  },
  {
   "name": "Sree Harsha Konduru",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 40,
   "wins": 29,
   "losses": 11,
   "pointsWon": 789,
   "totalPointsAgainst": 689,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 29,
   "genderLosses": 11,
   "clutchWins": 9,
   "clutchLosses": 6,
   "winPct": 72.5,
   "diff": 100,
   "ppg": 19.7,
   "leagueRank": 30,
   "rating": 2.3,
   "ratingGames": 40,
   "confidence": 88,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.5,
   "playerId": "439cf2c1-044c-450c-9dcc-4fdeafbb81cd"
  },
  {
   "name": "Ricky Jutkiewicz",
   "gender": "Male",
   "team": "Home Court",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 32,
   "wins": 23,
   "losses": 9,
   "pointsWon": 623,
   "totalPointsAgainst": 554,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 23,
   "genderLosses": 9,
   "clutchWins": 7,
   "clutchLosses": 3,
   "winPct": 71.9,
   "diff": 69,
   "ppg": 19.5,
   "leagueRank": 35,
   "rating": 1.7,
   "ratingGames": 32,
   "confidence": 86,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0,
   "playerId": "a24bc2af-aca9-45dd-a827-12fb12f7b784"
  },
  {
   "name": "David Wheeler",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 48,
   "wins": 34,
   "losses": 14,
   "pointsWon": 943,
   "totalPointsAgainst": 840,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 34,
   "genderLosses": 14,
   "clutchWins": 13,
   "clutchLosses": 8,
   "winPct": 70.8,
   "diff": 103,
   "ppg": 19.6,
   "leagueRank": 44,
   "rating": 0.6,
   "ratingGames": 48,
   "confidence": 90,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0,
   "playerId": "d335be77-6a7a-4f96-91c6-0a5cbcc8ea9f"
  },
  {
   "name": "Lincoln Jensen",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 12,
   "losses": 5,
   "pointsWon": 312,
   "totalPointsAgainst": 295,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 70.6,
   "diff": 17,
   "ppg": 18.4,
   "leagueRank": 87,
   "rating": -1.1,
   "ratingGames": 17,
   "confidence": 77,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.7,
   "playerId": "98842749-0d7d-4b20-b78a-50c79d087699"
  },
  {
   "name": "Daniel Borgia",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 26,
   "losses": 11,
   "pointsWon": 722,
   "totalPointsAgainst": 607,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 26,
   "genderLosses": 11,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 70.3,
   "diff": 115,
   "ppg": 19.5,
   "leagueRank": 33,
   "rating": 2.8,
   "ratingGames": 37,
   "confidence": 88,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.2,
   "playerId": "ae3cd925-c856-44dd-9cf5-3a2bd343adf2"
  },
  {
   "name": "Dennis Yap",
   "gender": "Male",
   "team": "Home Court",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 26,
   "losses": 11,
   "pointsWon": 714,
   "totalPointsAgainst": 625,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 26,
   "genderLosses": 11,
   "clutchWins": 7,
   "clutchLosses": 2,
   "winPct": 70.3,
   "diff": 89,
   "ppg": 19.3,
   "leagueRank": 38,
   "rating": 1.5,
   "ratingGames": 37,
   "confidence": 87,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.2,
   "playerId": "45ea05c6-ef48-4b0a-9f71-a640be038d08"
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
   "leagueRank": 31,
   "rating": 2.9,
   "ratingGames": 20,
   "confidence": 79,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.3,
   "playerId": "d411862a-491a-47dc-93a8-4a12f821afd7"
  },
  {
   "name": "Noah Ludwigsen",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 56,
   "wins": 39,
   "losses": 17,
   "pointsWon": 1131,
   "totalPointsAgainst": 979,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 39,
   "genderLosses": 17,
   "clutchWins": 12,
   "clutchLosses": 13,
   "winPct": 69.6,
   "diff": 152,
   "ppg": 20.2,
   "leagueRank": 36,
   "rating": 1.4,
   "ratingGames": 56,
   "confidence": 91,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": 0.3,
   "playerId": "67f9503a-202f-4982-8e97-9b3383a35aee"
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
   "leagueRank": 57,
   "rating": 0.4,
   "ratingGames": 23,
   "confidence": 82,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.3,
   "playerId": "8a4095e6-2a3e-4a88-a6d2-8c1da135ce42"
  },
  {
   "name": "Carlos Idrovo",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 9,
   "losses": 4,
   "pointsWon": 259,
   "totalPointsAgainst": 226,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 69.2,
   "diff": 33,
   "ppg": 19.9,
   "leagueRank": 122,
   "rating": 1.4,
   "ratingGames": 13,
   "confidence": 73,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.1,
   "playerId": "5c6366e8-1fad-44ee-bf38-4ba5d838769d"
  },
  {
   "name": "Meet Thakkar",
   "gender": "Male",
   "team": "Montville",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 20,
   "losses": 9,
   "pointsWon": 557,
   "totalPointsAgainst": 497,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 20,
   "genderLosses": 9,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 69,
   "diff": 60,
   "ppg": 19.2,
   "leagueRank": 47,
   "rating": 1.3,
   "ratingGames": 29,
   "confidence": 84,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.3,
   "playerId": "f68fa078-e500-4427-9d65-338e840f318c"
  },
  {
   "name": "Andrew Neave",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 29,
   "wins": 20,
   "losses": 9,
   "pointsWon": 567,
   "totalPointsAgainst": 519,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 20,
   "genderLosses": 9,
   "clutchWins": 8,
   "clutchLosses": 2,
   "winPct": 69,
   "diff": 48,
   "ppg": 19.6,
   "leagueRank": 59,
   "rating": -0.9,
   "ratingGames": 29,
   "confidence": 85,
   "strengthOfPartners": 2,
   "strengthOfOpponents": -0.3,
   "playerId": "2f7d6c14-4f06-470b-a4ba-f28199e823b0"
  },
  {
   "name": "Matthew Schwartz",
   "gender": "Male",
   "team": "Premiere",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 22,
   "losses": 10,
   "pointsWon": 633,
   "totalPointsAgainst": 533,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 22,
   "genderLosses": 10,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 68.8,
   "diff": 100,
   "ppg": 19.8,
   "leagueRank": 37,
   "rating": 0.9,
   "ratingGames": 32,
   "confidence": 86,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -0.3,
   "playerId": "a432d3e0-17c2-4741-a4b2-7f72b7a81a5f"
  },
  {
   "name": "Neil Dedhia",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 22,
   "losses": 10,
   "pointsWon": 629,
   "totalPointsAgainst": 565,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 22,
   "genderLosses": 10,
   "clutchWins": 8,
   "clutchLosses": 5,
   "winPct": 68.8,
   "diff": 64,
   "ppg": 19.7,
   "leagueRank": 45,
   "rating": 0.2,
   "ratingGames": 32,
   "confidence": 86,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.5,
   "playerId": "20f3e907-41d8-40bb-8cef-cb6fed84a2aa"
  },
  {
   "name": "Tyler Bayly",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 19,
   "losses": 9,
   "pointsWon": 543,
   "totalPointsAgainst": 461,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 19,
   "genderLosses": 9,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 67.9,
   "diff": 82,
   "ppg": 19.4,
   "leagueRank": 34,
   "rating": 2.3,
   "ratingGames": 28,
   "confidence": 84,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.2,
   "playerId": "642b7fc5-f304-459a-889e-e726dc9edeab"
  },
  {
   "name": "Akash Raju",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 40,
   "wins": 27,
   "losses": 13,
   "pointsWon": 792,
   "totalPointsAgainst": 665,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 27,
   "genderLosses": 13,
   "clutchWins": 6,
   "clutchLosses": 6,
   "winPct": 67.5,
   "diff": 127,
   "ppg": 19.8,
   "leagueRank": 39,
   "rating": 1.3,
   "ratingGames": 40,
   "confidence": 88,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.4,
   "playerId": "a2fc30f9-b494-4781-900e-1e0b7d531f02"
  },
  {
   "name": "Cesar Santamaria-Aranda",
   "gender": "Male",
   "team": "Montville",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 40,
   "wins": 27,
   "losses": 13,
   "pointsWon": 786,
   "totalPointsAgainst": 729,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 27,
   "genderLosses": 13,
   "clutchWins": 11,
   "clutchLosses": 5,
   "winPct": 67.5,
   "diff": 57,
   "ppg": 19.7,
   "leagueRank": 53,
   "rating": 1.3,
   "ratingGames": 40,
   "confidence": 87,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.3,
   "playerId": "fbde98cb-9eee-431b-b164-244249c26728"
  },
  {
   "name": "Jeff Laniado",
   "gender": "Male",
   "team": "Montville",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 18,
   "losses": 9,
   "pointsWon": 531,
   "totalPointsAgainst": 481,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 18,
   "genderLosses": 9,
   "clutchWins": 5,
   "clutchLosses": 5,
   "winPct": 66.7,
   "diff": 50,
   "ppg": 19.7,
   "leagueRank": 49,
   "rating": 0.9,
   "ratingGames": 27,
   "confidence": 84,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0.3,
   "playerId": "06d52e99-941a-4ced-9968-f56e6075105a"
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
   "leagueRank": 54,
   "rating": -0.1,
   "ratingGames": 18,
   "confidence": 78,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": -0.5,
   "playerId": "3196f425-e79a-4def-b7c3-bc3205976ba3"
  },
  {
   "name": "Yong Kim",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 14,
   "losses": 7,
   "pointsWon": 417,
   "totalPointsAgainst": 372,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 14,
   "genderLosses": 7,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 66.7,
   "diff": 45,
   "ppg": 19.9,
   "leagueRank": 51,
   "rating": 0.2,
   "ratingGames": 21,
   "confidence": 80,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.5,
   "playerId": "ca670ae8-0768-49d4-9984-f708cd52786c"
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
   "leagueRank": 42,
   "rating": 2.3,
   "ratingGames": 15,
   "confidence": 75,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.2,
   "playerId": "b243c9db-ff2c-4db7-bcfd-27f3b0e7b6f1"
  },
  {
   "name": "Julian Edgren",
   "gender": "Male",
   "team": "Flemington",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 122,
   "totalPointsAgainst": 112,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 66.7,
   "diff": 10,
   "ppg": 20.3,
   "leagueRank": 195,
   "rating": -0.4,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": -1.7,
   "playerId": "b979a109-08fd-4041-8da4-e306ef13330a"
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
   "leagueRank": 214,
   "rating": -0.5,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": 2.1,
   "strengthOfOpponents": 0.2,
   "playerId": "e0faca04-4875-4806-b0a3-4830f4dcd52e"
  },
  {
   "name": "Paul Perumaly",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 19,
   "losses": 10,
   "pointsWon": 561,
   "totalPointsAgainst": 517,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 19,
   "genderLosses": 10,
   "clutchWins": 7,
   "clutchLosses": 2,
   "winPct": 65.5,
   "diff": 44,
   "ppg": 19.3,
   "leagueRank": 58,
   "rating": 1,
   "ratingGames": 29,
   "confidence": 85,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.3,
   "playerId": "9d9eff5c-bb8e-47b7-b1e6-7e4c7055bb8b"
  },
  {
   "name": "Russell Cripps",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 15,
   "losses": 8,
   "pointsWon": 445,
   "totalPointsAgainst": 378,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 15,
   "genderLosses": 8,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 65.2,
   "diff": 67,
   "ppg": 19.3,
   "leagueRank": 62,
   "rating": 0.1,
   "ratingGames": 23,
   "confidence": 82,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -0.7,
   "playerId": "43d2bf2c-e732-4ce8-adae-035d989fa792"
  },
  {
   "name": "Daniel Antonelli",
   "gender": "Male",
   "team": "Premiere",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 40,
   "wins": 26,
   "losses": 14,
   "pointsWon": 770,
   "totalPointsAgainst": 689,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 26,
   "genderLosses": 14,
   "clutchWins": 5,
   "clutchLosses": 3,
   "winPct": 65,
   "diff": 81,
   "ppg": 19.3,
   "leagueRank": 56,
   "rating": 1.9,
   "ratingGames": 40,
   "confidence": 88,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.4,
   "playerId": "cd0eb94b-4d32-4ba9-bcdc-3fba205d90f0"
  },
  {
   "name": "Yongzhe Tian",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 13,
   "losses": 7,
   "pointsWon": 394,
   "totalPointsAgainst": 344,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 13,
   "genderLosses": 7,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 65,
   "diff": 50,
   "ppg": 19.7,
   "leagueRank": 40,
   "rating": 2.1,
   "ratingGames": 20,
   "confidence": 80,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.1,
   "playerId": "e1a924b8-3b3a-4780-8348-08a730ba61f2"
  },
  {
   "name": "Michael Vincent",
   "gender": "Male",
   "team": "Home Court",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 22,
   "losses": 12,
   "pointsWon": 662,
   "totalPointsAgainst": 597,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 22,
   "genderLosses": 12,
   "clutchWins": 8,
   "clutchLosses": 5,
   "winPct": 64.7,
   "diff": 65,
   "ppg": 19.5,
   "leagueRank": 60,
   "rating": 0.5,
   "ratingGames": 34,
   "confidence": 86,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.5,
   "playerId": "7f44421c-476c-4857-99ed-3376b32289ca"
  },
  {
   "name": "Jacob Yoo",
   "gender": "Male",
   "team": "Home Court",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 45,
   "wins": 29,
   "losses": 16,
   "pointsWon": 879,
   "totalPointsAgainst": 794,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 29,
   "genderLosses": 16,
   "clutchWins": 9,
   "clutchLosses": 7,
   "winPct": 64.4,
   "diff": 85,
   "ppg": 19.5,
   "leagueRank": 52,
   "rating": 1.6,
   "ratingGames": 45,
   "confidence": 89,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.2,
   "playerId": "df0934fe-e584-4b4f-a549-a90499016d33"
  },
  {
   "name": "Nicholas Brow",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 14,
   "wins": 9,
   "losses": 5,
   "pointsWon": 268,
   "totalPointsAgainst": 256,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 64.3,
   "diff": 12,
   "ppg": 19.1,
   "leagueRank": 118,
   "rating": 0.5,
   "ratingGames": 14,
   "confidence": 75,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.4,
   "playerId": "fdbf0c0b-a961-47e4-abbe-5a56ad7a7bec"
  },
  {
   "name": "Samuel Kashefska",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 24,
   "losses": 14,
   "pointsWon": 762,
   "totalPointsAgainst": 671,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 24,
   "genderLosses": 14,
   "clutchWins": 9,
   "clutchLosses": 8,
   "winPct": 63.2,
   "diff": 91,
   "ppg": 20.1,
   "leagueRank": 48,
   "rating": 1.8,
   "ratingGames": 38,
   "confidence": 87,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.2,
   "playerId": "e4a31aff-39d6-49b3-95c4-131421e956a0"
  },
  {
   "name": "Nicholas Lugo",
   "gender": "Male",
   "team": "Monroe",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 22,
   "losses": 13,
   "pointsWon": 679,
   "totalPointsAgainst": 665,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 22,
   "genderLosses": 13,
   "clutchWins": 12,
   "clutchLosses": 5,
   "winPct": 62.9,
   "diff": 14,
   "ppg": 19.4,
   "leagueRank": 67,
   "rating": 0.9,
   "ratingGames": 35,
   "confidence": 87,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.3,
   "playerId": "8f9be7cc-3ddf-436f-8727-02cbdd0d453f"
  },
  {
   "name": "Shyler Smith",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 10,
   "losses": 6,
   "pointsWon": 304,
   "totalPointsAgainst": 278,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 62.5,
   "diff": 26,
   "ppg": 19,
   "leagueRank": 64,
   "rating": 3.3,
   "ratingGames": 16,
   "confidence": 76,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 1.4,
   "playerId": "aabb2c71-bc56-468e-91b9-d431d6f2d26b"
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
   "leagueRank": 85,
   "rating": 0.3,
   "ratingGames": 16,
   "confidence": 77,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.1,
   "playerId": "1448a485-6172-48af-96e0-f4876e9c5268"
  },
  {
   "name": "Matthew Rafaniello",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 158,
   "totalPointsAgainst": 156,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 62.5,
   "diff": 2,
   "ppg": 19.8,
   "leagueRank": 236,
   "rating": -2.8,
   "ratingGames": 8,
   "confidence": 61,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -2.4,
   "playerId": "021fbd88-6b98-47eb-aa92-96ed959d8a4b"
  },
  {
   "name": "Varun Kabaria",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 156,
   "totalPointsAgainst": 154,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 62.5,
   "diff": 2,
   "ppg": 19.5,
   "leagueRank": 147,
   "rating": 0.6,
   "ratingGames": 8,
   "confidence": 62,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0,
   "playerId": "49f9e3a4-2ae2-4335-ada3-28486b1a65d4"
  },
  {
   "name": "Jesse Mynahan",
   "gender": "Male",
   "team": "Montville",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 45,
   "wins": 28,
   "losses": 17,
   "pointsWon": 884,
   "totalPointsAgainst": 807,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 28,
   "genderLosses": 17,
   "clutchWins": 9,
   "clutchLosses": 8,
   "winPct": 62.2,
   "diff": 77,
   "ppg": 19.6,
   "leagueRank": 72,
   "rating": -0.6,
   "ratingGames": 45,
   "confidence": 88,
   "strengthOfPartners": 2.1,
   "strengthOfOpponents": -0.1,
   "playerId": "66b5f8fe-1456-4ca5-ba6a-9ee4de2052cb"
  },
  {
   "name": "Lj Dequina",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 13,
   "losses": 8,
   "pointsWon": 401,
   "totalPointsAgainst": 368,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 13,
   "genderLosses": 8,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 61.9,
   "diff": 33,
   "ppg": 19.1,
   "leagueRank": 81,
   "rating": 0,
   "ratingGames": 21,
   "confidence": 81,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.6,
   "playerId": "e4cb9932-d672-4089-a643-f2d16e3bd98a"
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
   "leagueRank": 71,
   "rating": 1.4,
   "ratingGames": 21,
   "confidence": 81,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.5,
   "playerId": "639af9e8-08fd-496d-84d6-6e7859e8c6d3"
  },
  {
   "name": "Nesip Cengiz",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 13,
   "losses": 8,
   "pointsWon": 393,
   "totalPointsAgainst": 389,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 13,
   "genderLosses": 8,
   "clutchWins": 5,
   "clutchLosses": 1,
   "winPct": 61.9,
   "diff": 4,
   "ppg": 18.7,
   "leagueRank": 107,
   "rating": -0.8,
   "ratingGames": 21,
   "confidence": 81,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.6,
   "playerId": "c737d3dd-dfe2-4f58-a095-fb40fc601866"
  },
  {
   "name": "Jack Barry",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 24,
   "losses": 15,
   "pointsWon": 746,
   "totalPointsAgainst": 697,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 24,
   "genderLosses": 15,
   "clutchWins": 8,
   "clutchLosses": 6,
   "winPct": 61.5,
   "diff": 49,
   "ppg": 19.1,
   "leagueRank": 69,
   "rating": 1.5,
   "ratingGames": 39,
   "confidence": 88,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0,
   "playerId": "763342e5-4d13-45b7-8630-9d840cb7b8b3"
  },
  {
   "name": "Carlos Rincon",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 31,
   "wins": 19,
   "losses": 12,
   "pointsWon": 597,
   "totalPointsAgainst": 543,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 19,
   "genderLosses": 12,
   "clutchWins": 4,
   "clutchLosses": 6,
   "winPct": 61.3,
   "diff": 54,
   "ppg": 19.3,
   "leagueRank": 66,
   "rating": 0.9,
   "ratingGames": 31,
   "confidence": 85,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.2,
   "playerId": "9886815c-3bf4-42b1-b650-1ec17ff2c167"
  },
  {
   "name": "Ryan Hathaway",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 11,
   "losses": 7,
   "pointsWon": 353,
   "totalPointsAgainst": 291,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 11,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 5,
   "winPct": 61.1,
   "diff": 62,
   "ppg": 19.6,
   "leagueRank": 50,
   "rating": 2.4,
   "ratingGames": 18,
   "confidence": 79,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": 0.6,
   "playerId": "8b8ebfab-9618-4bba-a52b-6aa7679d3390"
  },
  {
   "name": "Tim Bruno",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 22,
   "losses": 14,
   "pointsWon": 673,
   "totalPointsAgainst": 625,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 22,
   "genderLosses": 14,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 61.1,
   "diff": 48,
   "ppg": 18.7,
   "leagueRank": 83,
   "rating": 0.4,
   "ratingGames": 36,
   "confidence": 87,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.1,
   "playerId": "ef5a4f7c-58d1-42fa-81c2-1f9f09a60a0f"
  },
  {
   "name": "Ali Bhimji",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 11,
   "losses": 7,
   "pointsWon": 338,
   "totalPointsAgainst": 318,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 11,
   "genderLosses": 7,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 61.1,
   "diff": 20,
   "ppg": 18.8,
   "leagueRank": 98,
   "rating": -0.6,
   "ratingGames": 18,
   "confidence": 78,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.5,
   "playerId": "3651f648-493a-4517-8085-a8b9cb086c07"
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
   "leagueRank": 73,
   "rating": 0.6,
   "ratingGames": 23,
   "confidence": 82,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.1,
   "playerId": "d6ca21c0-822e-422f-9721-34120ba90184"
  },
  {
   "name": "Michael Barndt",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 33,
   "wins": 20,
   "losses": 13,
   "pointsWon": 644,
   "totalPointsAgainst": 567,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 20,
   "genderLosses": 13,
   "clutchWins": 8,
   "clutchLosses": 5,
   "winPct": 60.6,
   "diff": 77,
   "ppg": 19.5,
   "leagueRank": 61,
   "rating": 1.4,
   "ratingGames": 33,
   "confidence": 86,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.1,
   "playerId": "50853eee-28e0-4380-b379-35935eb2115a"
  },
  {
   "name": "Yashraj Kurani",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 23,
   "losses": 15,
   "pointsWon": 734,
   "totalPointsAgainst": 652,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 23,
   "genderLosses": 15,
   "clutchWins": 6,
   "clutchLosses": 8,
   "winPct": 60.5,
   "diff": 82,
   "ppg": 19.3,
   "leagueRank": 70,
   "rating": 0.7,
   "ratingGames": 38,
   "confidence": 88,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.3,
   "playerId": "63950363-4747-4faf-b89a-eb88f8b9e81d"
  },
  {
   "name": "Dan Yang",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 23,
   "losses": 15,
   "pointsWon": 720,
   "totalPointsAgainst": 693,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 23,
   "genderLosses": 15,
   "clutchWins": 10,
   "clutchLosses": 3,
   "winPct": 60.5,
   "diff": 27,
   "ppg": 18.9,
   "leagueRank": 91,
   "rating": -0.1,
   "ratingGames": 38,
   "confidence": 87,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.1,
   "playerId": "667a80aa-7b06-46b5-a4ae-6989224ab5f9"
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
   "leagueRank": 68,
   "rating": 1.2,
   "ratingGames": 30,
   "confidence": 85,
   "strengthOfPartners": -1,
   "strengthOfOpponents": -0.4,
   "playerId": "4a5131e4-a912-4913-8ff5-9281e53c6974"
  },
  {
   "name": "Dan Carpenter",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 12,
   "losses": 8,
   "pointsWon": 385,
   "totalPointsAgainst": 356,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 8,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 60,
   "diff": 29,
   "ppg": 19.3,
   "leagueRank": 88,
   "rating": 0,
   "ratingGames": 20,
   "confidence": 80,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -1,
   "playerId": "2811dd08-7b50-455b-bc23-46b064a912eb"
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
   "leagueRank": 223,
   "rating": 2,
   "ratingGames": 5,
   "confidence": 52,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0,
   "playerId": "3bdfa83e-2025-4441-b347-fade413a4179"
  },
  {
   "name": "Ritesh Patel",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 16,
   "losses": 11,
   "pointsWon": 526,
   "totalPointsAgainst": 488,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 16,
   "genderLosses": 11,
   "clutchWins": 8,
   "clutchLosses": 4,
   "winPct": 59.3,
   "diff": 38,
   "ppg": 19.5,
   "leagueRank": 89,
   "rating": 0.2,
   "ratingGames": 27,
   "confidence": 83,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.5,
   "playerId": "e2f86c8b-755e-42a0-8828-f2965f4fbbe7"
  },
  {
   "name": "Matthew Carrington",
   "gender": "Male",
   "team": "Home Court",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 16,
   "losses": 11,
   "pointsWon": 491,
   "totalPointsAgainst": 490,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 16,
   "genderLosses": 11,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 59.3,
   "diff": 1,
   "ppg": 18.2,
   "leagueRank": 106,
   "rating": -0.5,
   "ratingGames": 27,
   "confidence": 84,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.1,
   "playerId": "6a2f3777-38b2-4f02-b550-ce38395914d2"
  },
  {
   "name": "Marc Kunesch",
   "gender": "Male",
   "team": "Home Court",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 20,
   "losses": 14,
   "pointsWon": 664,
   "totalPointsAgainst": 613,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 20,
   "genderLosses": 14,
   "clutchWins": 5,
   "clutchLosses": 8,
   "winPct": 58.8,
   "diff": 51,
   "ppg": 19.5,
   "leagueRank": 78,
   "rating": 0.1,
   "ratingGames": 34,
   "confidence": 86,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.6,
   "playerId": "aeaef27d-01b3-4fb2-91f3-4be8c7602aa3"
  },
  {
   "name": "David Reyes",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 10,
   "losses": 7,
   "pointsWon": 328,
   "totalPointsAgainst": 303,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 7,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 58.8,
   "diff": 25,
   "ppg": 19.3,
   "leagueRank": 74,
   "rating": 1,
   "ratingGames": 17,
   "confidence": 78,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.2,
   "playerId": "adc043ce-7b2d-4ae9-87e0-c927f28c473a"
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
   "leagueRank": 101,
   "rating": -0.2,
   "ratingGames": 34,
   "confidence": 87,
   "strengthOfPartners": 0.7,
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
   "leagueRank": 120,
   "rating": -0.8,
   "ratingGames": 17,
   "confidence": 77,
   "strengthOfPartners": 2.1,
   "strengthOfOpponents": 0.2,
   "playerId": "ebc8788f-79c2-4204-a14a-47b6bc480d5d"
  },
  {
   "name": "Varun Gurram",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 48,
   "wins": 28,
   "losses": 20,
   "pointsWon": 943,
   "totalPointsAgainst": 871,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 28,
   "genderLosses": 20,
   "clutchWins": 10,
   "clutchLosses": 15,
   "winPct": 58.3,
   "diff": 72,
   "ppg": 19.6,
   "leagueRank": 80,
   "rating": 1.2,
   "ratingGames": 48,
   "confidence": 90,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.5,
   "playerId": "44864b51-f901-4470-a6bd-891495ffd132"
  },
  {
   "name": "Brandon Dejesus",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 43,
   "wins": 25,
   "losses": 18,
   "pointsWon": 824,
   "totalPointsAgainst": 761,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 25,
   "genderLosses": 18,
   "clutchWins": 8,
   "clutchLosses": 6,
   "winPct": 58.1,
   "diff": 63,
   "ppg": 19.2,
   "leagueRank": 86,
   "rating": 1.4,
   "ratingGames": 43,
   "confidence": 88,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.1,
   "playerId": "d50feac2-f147-47d2-8930-99b21b2842ba"
  },
  {
   "name": "Jose Campos",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 31,
   "wins": 18,
   "losses": 13,
   "pointsWon": 578,
   "totalPointsAgainst": 546,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 18,
   "genderLosses": 13,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 58.1,
   "diff": 32,
   "ppg": 18.6,
   "leagueRank": 114,
   "rating": -0.7,
   "ratingGames": 31,
   "confidence": 86,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -1.1,
   "playerId": "197e3b9a-eded-4a87-8391-13a7c6d18c8f"
  },
  {
   "name": "Steven Hummel",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 31,
   "wins": 18,
   "losses": 13,
   "pointsWon": 566,
   "totalPointsAgainst": 562,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 18,
   "genderLosses": 13,
   "clutchWins": 7,
   "clutchLosses": 2,
   "winPct": 58.1,
   "diff": 4,
   "ppg": 18.3,
   "leagueRank": 100,
   "rating": 1.7,
   "ratingGames": 31,
   "confidence": 86,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.8,
   "playerId": "c5bf56d5-50a9-4a1f-a6f8-3f3f5af91cca"
  },
  {
   "name": "Jason Wu",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 11,
   "losses": 8,
   "pointsWon": 357,
   "totalPointsAgainst": 339,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 11,
   "genderLosses": 8,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 57.9,
   "diff": 18,
   "ppg": 18.8,
   "leagueRank": 82,
   "rating": 2,
   "ratingGames": 19,
   "confidence": 79,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.6,
   "playerId": "5e42a5f7-22d1-4613-a829-b62121ddc704"
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
   "leagueRank": 219,
   "rating": 0.5,
   "ratingGames": 7,
   "confidence": 60,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0,
   "playerId": "a6be8670-4787-48dd-83ff-b2157062cb84"
  },
  {
   "name": "Kevin Sheehan",
   "gender": "Male",
   "team": "Home Court",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 44,
   "wins": 25,
   "losses": 19,
   "pointsWon": 843,
   "totalPointsAgainst": 805,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 25,
   "genderLosses": 19,
   "clutchWins": 10,
   "clutchLosses": 8,
   "winPct": 56.8,
   "diff": 38,
   "ppg": 19.2,
   "leagueRank": 95,
   "rating": 0.4,
   "ratingGames": 44,
   "confidence": 88,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0,
   "playerId": "115f3958-d110-41f0-a04c-aa2f8e17a54f"
  },
  {
   "name": "Bryan Mccourt",
   "gender": "Male",
   "team": "Home Court",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 44,
   "wins": 25,
   "losses": 19,
   "pointsWon": 838,
   "totalPointsAgainst": 803,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 25,
   "genderLosses": 19,
   "clutchWins": 7,
   "clutchLosses": 6,
   "winPct": 56.8,
   "diff": 35,
   "ppg": 19,
   "leagueRank": 103,
   "rating": -0.1,
   "ratingGames": 44,
   "confidence": 88,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.2,
   "playerId": "74f9fe34-f8c5-49dd-b504-939d0b4f5aaa"
  },
  {
   "name": "Jonathan Dong",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 17,
   "losses": 13,
   "pointsWon": 562,
   "totalPointsAgainst": 557,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 17,
   "genderLosses": 13,
   "clutchWins": 7,
   "clutchLosses": 4,
   "winPct": 56.7,
   "diff": 5,
   "ppg": 18.7,
   "leagueRank": 109,
   "rating": -0.3,
   "ratingGames": 30,
   "confidence": 85,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0,
   "playerId": "edbeb52a-85fd-48ff-acc5-a5c8415a731d"
  },
  {
   "name": "Pritpal Singh",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 46,
   "wins": 26,
   "losses": 20,
   "pointsWon": 878,
   "totalPointsAgainst": 812,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 26,
   "genderLosses": 20,
   "clutchWins": 8,
   "clutchLosses": 7,
   "winPct": 56.5,
   "diff": 66,
   "ppg": 19.1,
   "leagueRank": 75,
   "rating": 1.7,
   "ratingGames": 46,
   "confidence": 90,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.4,
   "playerId": "631b24ae-9bc2-4db3-964b-33f86933021e"
  },
  {
   "name": "Gary White",
   "gender": "Male",
   "team": "Premiere",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 18,
   "losses": 14,
   "pointsWon": 613,
   "totalPointsAgainst": 575,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 18,
   "genderLosses": 14,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 56.3,
   "diff": 38,
   "ppg": 19.2,
   "leagueRank": 92,
   "rating": 1.2,
   "ratingGames": 32,
   "confidence": 86,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.7,
   "playerId": "9a26eab9-96be-45e1-b380-2845a0e8e668"
  },
  {
   "name": "George Vega Jr",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 18,
   "losses": 14,
   "pointsWon": 614,
   "totalPointsAgainst": 578,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 18,
   "genderLosses": 14,
   "clutchWins": 5,
   "clutchLosses": 8,
   "winPct": 56.3,
   "diff": 36,
   "ppg": 19.2,
   "leagueRank": 104,
   "rating": -0.2,
   "ratingGames": 32,
   "confidence": 86,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.2,
   "playerId": "be19bf10-b8a5-4626-8c10-f13ac708231d"
  },
  {
   "name": "Cullen Curley",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 19,
   "losses": 15,
   "pointsWon": 661,
   "totalPointsAgainst": 612,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 19,
   "genderLosses": 15,
   "clutchWins": 5,
   "clutchLosses": 7,
   "winPct": 55.9,
   "diff": 49,
   "ppg": 19.4,
   "leagueRank": 90,
   "rating": 0.3,
   "ratingGames": 34,
   "confidence": 86,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0,
   "playerId": "8cebf901-66b9-41d0-963d-12dac7334c8f"
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
   "leagueRank": 99,
   "rating": 0.6,
   "ratingGames": 27,
   "confidence": 84,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.1,
   "playerId": "176df588-c3ff-4b50-a66a-4df99647254b"
  },
  {
   "name": "Pat Wilson",
   "gender": "Male",
   "team": "Home Court",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 11,
   "losses": 9,
   "pointsWon": 376,
   "totalPointsAgainst": 372,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 11,
   "genderLosses": 9,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 55,
   "diff": 4,
   "ppg": 18.8,
   "leagueRank": 117,
   "rating": -0.2,
   "ratingGames": 20,
   "confidence": 80,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0,
   "playerId": "2e77eb09-81b2-4cc7-8ed1-4cbf034705f6"
  },
  {
   "name": "Arnold Poblete",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 31,
   "wins": 17,
   "losses": 14,
   "pointsWon": 603,
   "totalPointsAgainst": 571,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 17,
   "genderLosses": 14,
   "clutchWins": 4,
   "clutchLosses": 8,
   "winPct": 54.8,
   "diff": 32,
   "ppg": 19.5,
   "leagueRank": 84,
   "rating": 1.4,
   "ratingGames": 31,
   "confidence": 86,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0,
   "playerId": "c19e964a-d126-4e9f-9ce4-83c315f2f535"
  },
  {
   "name": "Christopher Uston",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 12,
   "losses": 10,
   "pointsWon": 417,
   "totalPointsAgainst": 389,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 10,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 54.5,
   "diff": 28,
   "ppg": 19,
   "leagueRank": 96,
   "rating": 0.9,
   "ratingGames": 22,
   "confidence": 81,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.1,
   "playerId": "e1f6c6fa-db86-4fed-9faa-dbc2fe29f373"
  },
  {
   "name": "Tom Kresky",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 33,
   "wins": 18,
   "losses": 15,
   "pointsWon": 631,
   "totalPointsAgainst": 607,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 18,
   "genderLosses": 15,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 54.5,
   "diff": 24,
   "ppg": 19.1,
   "leagueRank": 119,
   "rating": -1.4,
   "ratingGames": 33,
   "confidence": 86,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.7,
   "playerId": "81875a5e-2b65-4152-bace-b4c96517579d"
  },
  {
   "name": "Ayon Codner",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 39,
   "wins": 21,
   "losses": 18,
   "pointsWon": 749,
   "totalPointsAgainst": 695,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 21,
   "genderLosses": 18,
   "clutchWins": 5,
   "clutchLosses": 9,
   "winPct": 53.8,
   "diff": 54,
   "ppg": 19.2,
   "leagueRank": 97,
   "rating": 1.1,
   "ratingGames": 39,
   "confidence": 88,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.3,
   "playerId": "497b0077-b7ae-4025-ad32-94c9da47ab80"
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
   "leagueRank": 138,
   "rating": 0.8,
   "ratingGames": 13,
   "confidence": 74,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.2,
   "playerId": "bd958367-8cce-4f24-ba5a-208bac9b42b0"
  },
  {
   "name": "Robert Huntley",
   "gender": "Male",
   "team": "Home Court",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 22,
   "losses": 19,
   "pointsWon": 766,
   "totalPointsAgainst": 752,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 22,
   "genderLosses": 19,
   "clutchWins": 8,
   "clutchLosses": 7,
   "winPct": 53.7,
   "diff": 14,
   "ppg": 18.7,
   "leagueRank": 121,
   "rating": -0.6,
   "ratingGames": 41,
   "confidence": 87,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.3,
   "playerId": "b5dec967-9e3a-49b4-b136-597711d099cc"
  },
  {
   "name": "Corey Chen",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 16,
   "losses": 14,
   "pointsWon": 576,
   "totalPointsAgainst": 536,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 16,
   "genderLosses": 14,
   "clutchWins": 2,
   "clutchLosses": 6,
   "winPct": 53.3,
   "diff": 40,
   "ppg": 19.2,
   "leagueRank": 111,
   "rating": -0.3,
   "ratingGames": 30,
   "confidence": 84,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.5,
   "playerId": "b549a93c-acec-4419-9e30-5d8375518d2d"
  },
  {
   "name": "Ping Peng",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 16,
   "losses": 14,
   "pointsWon": 562,
   "totalPointsAgainst": 532,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 16,
   "genderLosses": 14,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 53.3,
   "diff": 30,
   "ppg": 18.7,
   "leagueRank": 110,
   "rating": 0.6,
   "ratingGames": 30,
   "confidence": 86,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0,
   "playerId": "7af65ce9-d7e3-4d00-b19b-653e6d2dc8d9"
  },
  {
   "name": "Uzoma Nwankwo",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 45,
   "wins": 24,
   "losses": 21,
   "pointsWon": 824,
   "totalPointsAgainst": 799,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 24,
   "genderLosses": 21,
   "clutchWins": 6,
   "clutchLosses": 6,
   "winPct": 53.3,
   "diff": 25,
   "ppg": 18.3,
   "leagueRank": 113,
   "rating": 1,
   "ratingGames": 45,
   "confidence": 89,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.4,
   "playerId": "c6482905-6954-4241-a6c3-ba077c367846"
  },
  {
   "name": "Vincent Rigoglioso",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 36,
   "wins": 19,
   "losses": 17,
   "pointsWon": 662,
   "totalPointsAgainst": 685,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 19,
   "genderLosses": 17,
   "clutchWins": 10,
   "clutchLosses": 3,
   "winPct": 52.8,
   "diff": -23,
   "ppg": 18.4,
   "leagueRank": 132,
   "rating": -0.9,
   "ratingGames": 36,
   "confidence": 88,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.2,
   "playerId": "d0c9ae50-0cdc-4f72-9ece-0b996f323f73"
  },
  {
   "name": "Shreyas Suresh Hassan",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 20,
   "losses": 18,
   "pointsWon": 702,
   "totalPointsAgainst": 695,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 20,
   "genderLosses": 18,
   "clutchWins": 7,
   "clutchLosses": 4,
   "winPct": 52.6,
   "diff": 7,
   "ppg": 18.5,
   "leagueRank": 123,
   "rating": 0.5,
   "ratingGames": 38,
   "confidence": 87,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0,
   "playerId": "e1d9f3bc-ec4e-4690-810c-a67452049768"
  },
  {
   "name": "Avneesh Agarwal",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 11,
   "losses": 10,
   "pointsWon": 375,
   "totalPointsAgainst": 394,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 11,
   "genderLosses": 10,
   "clutchWins": 7,
   "clutchLosses": 2,
   "winPct": 52.4,
   "diff": -19,
   "ppg": 17.9,
   "leagueRank": 144,
   "rating": -0.8,
   "ratingGames": 21,
   "confidence": 80,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.1,
   "playerId": "f0ac7d85-0e7b-4f28-80fe-3282c3c875ed"
  },
  {
   "name": "Salman Saad",
   "gender": "Male",
   "team": "Monroe",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 13,
   "losses": 12,
   "pointsWon": 487,
   "totalPointsAgainst": 467,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 13,
   "genderLosses": 12,
   "clutchWins": 6,
   "clutchLosses": 7,
   "winPct": 52,
   "diff": 20,
   "ppg": 19.5,
   "leagueRank": 102,
   "rating": 1.1,
   "ratingGames": 25,
   "confidence": 83,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.1,
   "playerId": "f7c4d103-d246-456d-8fd5-6418c6a0e002"
  },
  {
   "name": "Eric Ruiz",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 18,
   "losses": 17,
   "pointsWon": 683,
   "totalPointsAgainst": 641,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 18,
   "genderLosses": 17,
   "clutchWins": 5,
   "clutchLosses": 10,
   "winPct": 51.4,
   "diff": 42,
   "ppg": 19.5,
   "leagueRank": 105,
   "rating": 0.4,
   "ratingGames": 35,
   "confidence": 87,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.1,
   "playerId": "505e9bce-f386-4a4f-9a41-a1d7e0bb0527"
  },
  {
   "name": "Rohit Mankotia",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 36,
   "wins": 18,
   "losses": 18,
   "pointsWon": 698,
   "totalPointsAgainst": 653,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 18,
   "genderLosses": 18,
   "clutchWins": 7,
   "clutchLosses": 9,
   "winPct": 50,
   "diff": 45,
   "ppg": 19.4,
   "leagueRank": 116,
   "rating": -0.1,
   "ratingGames": 36,
   "confidence": 87,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0,
   "playerId": "541e3e2d-76eb-4cd3-9bfe-9f94c0b9cdeb"
  },
  {
   "name": "Rob Telles",
   "gender": "Male",
   "team": "Premiere",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 7,
   "losses": 7,
   "pointsWon": 274,
   "totalPointsAgainst": 262,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 7,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 50,
   "diff": 12,
   "ppg": 19.6,
   "leagueRank": 94,
   "rating": 1.5,
   "ratingGames": 14,
   "confidence": 74,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.8,
   "playerId": "d27652b4-447c-4563-b89f-19a8e1e79568"
  },
  {
   "name": "Timothy Lynskey",
   "gender": "Male",
   "team": "Premiere",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 16,
   "losses": 16,
   "pointsWon": 594,
   "totalPointsAgainst": 583,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 16,
   "genderLosses": 16,
   "clutchWins": 4,
   "clutchLosses": 6,
   "winPct": 50,
   "diff": 11,
   "ppg": 18.6,
   "leagueRank": 124,
   "rating": 0.5,
   "ratingGames": 32,
   "confidence": 86,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.7,
   "playerId": "718c6948-a987-43bb-a1f3-cf7aead75edb"
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
   "leagueRank": 234,
   "rating": 0.1,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": 2.1,
   "strengthOfOpponents": 0.4,
   "playerId": "5c88bc5a-3350-4271-8305-114385b45a3d"
  },
  {
   "name": "Luke Simon",
   "gender": "Male",
   "team": "Montville",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 6,
   "losses": 6,
   "pointsWon": 222,
   "totalPointsAgainst": 219,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 50,
   "diff": 3,
   "ppg": 18.5,
   "leagueRank": 175,
   "rating": -2.5,
   "ratingGames": 12,
   "confidence": 72,
   "strengthOfPartners": 2.2,
   "strengthOfOpponents": -0.7,
   "playerId": "0069c456-f712-435e-abd7-461018159661"
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
   "leagueRank": 221,
   "rating": 2.2,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 1.6,
   "playerId": "d7bb9db3-39bc-4f9b-9c8c-f1415ef09a27"
  },
  {
   "name": "Imran Mazhar",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 151,
   "totalPointsAgainst": 157,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": -6,
   "ppg": 18.9,
   "leagueRank": 204,
   "rating": 2.2,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 2.3,
   "playerId": "bf932162-305c-4efe-8b6d-b7316c0b4136"
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
   "leagueRank": 241,
   "rating": 0.7,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 1.7,
   "playerId": "dc530014-0e3b-4485-b265-8555bafe6e19"
  },
  {
   "name": "Mark Waters",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 21,
   "losses": 21,
   "pointsWon": 767,
   "totalPointsAgainst": 789,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 21,
   "genderLosses": 21,
   "clutchWins": 7,
   "clutchLosses": 4,
   "winPct": 50,
   "diff": -22,
   "ppg": 18.3,
   "leagueRank": 133,
   "rating": -0.5,
   "ratingGames": 42,
   "confidence": 89,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.2,
   "playerId": "1baee0ad-faae-4c61-894a-a347710fdfea"
  },
  {
   "name": "Bruce Nguyen",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 43,
   "wins": 21,
   "losses": 22,
   "pointsWon": 773,
   "totalPointsAgainst": 801,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 21,
   "genderLosses": 22,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 48.8,
   "diff": -28,
   "ppg": 18,
   "leagueRank": 137,
   "rating": 0.4,
   "ratingGames": 43,
   "confidence": 89,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.7,
   "playerId": "33233dc6-b78e-4deb-88d4-2742aacf5eb9"
  },
  {
   "name": "Ethan Fu",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 13,
   "losses": 14,
   "pointsWon": 482,
   "totalPointsAgainst": 492,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 13,
   "genderLosses": 14,
   "clutchWins": 4,
   "clutchLosses": 6,
   "winPct": 48.1,
   "diff": -10,
   "ppg": 17.9,
   "leagueRank": 143,
   "rating": -0.4,
   "ratingGames": 27,
   "confidence": 84,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.1,
   "playerId": "a8585e9c-872e-466c-9583-9680e557f757"
  },
  {
   "name": "Kevin Lew",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 22,
   "losses": 24,
   "pointsWon": 821,
   "totalPointsAgainst": 869,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 22,
   "genderLosses": 24,
   "clutchWins": 10,
   "clutchLosses": 9,
   "winPct": 47.8,
   "diff": -48,
   "ppg": 17.8,
   "leagueRank": 139,
   "rating": 0,
   "ratingGames": 46,
   "confidence": 90,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.4,
   "playerId": "03886b04-b474-4dda-b7f3-eb4f4954399c"
  },
  {
   "name": "Hua Lin",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 44,
   "wins": 21,
   "losses": 23,
   "pointsWon": 811,
   "totalPointsAgainst": 840,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 21,
   "genderLosses": 23,
   "clutchWins": 13,
   "clutchLosses": 8,
   "winPct": 47.7,
   "diff": -29,
   "ppg": 18.4,
   "leagueRank": 128,
   "rating": 1.6,
   "ratingGames": 44,
   "confidence": 89,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.6,
   "playerId": "6b263caa-80f7-40d2-9248-559f91ffe71e"
  },
  {
   "name": "Ziyu Huang",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 18,
   "losses": 20,
   "pointsWon": 707,
   "totalPointsAgainst": 721,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 18,
   "genderLosses": 20,
   "clutchWins": 8,
   "clutchLosses": 3,
   "winPct": 47.4,
   "diff": -14,
   "ppg": 18.6,
   "leagueRank": 129,
   "rating": 0.7,
   "ratingGames": 38,
   "confidence": 88,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.7,
   "playerId": "d06d8b3c-72d6-4ae3-ade8-d7cb7cbd70f7"
  },
  {
   "name": "Jared Rapoport",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 16,
   "losses": 18,
   "pointsWon": 646,
   "totalPointsAgainst": 629,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 16,
   "genderLosses": 18,
   "clutchWins": 3,
   "clutchLosses": 10,
   "winPct": 47.1,
   "diff": 17,
   "ppg": 19,
   "leagueRank": 126,
   "rating": 0,
   "ratingGames": 34,
   "confidence": 87,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.1,
   "playerId": "b19f3a31-ce60-4c40-b903-1fd60c95f649"
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
   "leagueRank": 136,
   "rating": 0.3,
   "ratingGames": 17,
   "confidence": 78,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": 0.8,
   "playerId": "31b78615-afb3-4856-8cb1-de2b8d43a115"
  },
  {
   "name": "Venu Yengala",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 47,
   "wins": 22,
   "losses": 25,
   "pointsWon": 850,
   "totalPointsAgainst": 911,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 22,
   "genderLosses": 25,
   "clutchWins": 17,
   "clutchLosses": 6,
   "winPct": 46.8,
   "diff": -61,
   "ppg": 18.1,
   "leagueRank": 142,
   "rating": 0.5,
   "ratingGames": 47,
   "confidence": 90,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.8,
   "playerId": "b4cbf5ad-5c2c-46bf-bf50-f50683964b46"
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
   "leagueRank": 112,
   "rating": 0.5,
   "ratingGames": 15,
   "confidence": 75,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.6,
   "playerId": "08b7041c-a90b-47ba-802a-5f71e6b98999"
  },
  {
   "name": "Uttam Purohit",
   "gender": "Male",
   "team": "Monroe",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 11,
   "losses": 13,
   "pointsWon": 456,
   "totalPointsAgainst": 453,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 11,
   "genderLosses": 13,
   "clutchWins": 5,
   "clutchLosses": 5,
   "winPct": 45.8,
   "diff": 3,
   "ppg": 19,
   "leagueRank": 131,
   "rating": 0,
   "ratingGames": 24,
   "confidence": 83,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.1,
   "playerId": "5bec8637-0324-4af8-8084-3779e0f43521"
  },
  {
   "name": "Leon Li",
   "gender": "Male",
   "team": "Monroe",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 9,
   "losses": 11,
   "pointsWon": 359,
   "totalPointsAgainst": 372,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 11,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 45,
   "diff": -13,
   "ppg": 18,
   "leagueRank": 145,
   "rating": -0.1,
   "ratingGames": 20,
   "confidence": 80,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.1,
   "playerId": "528de93e-9cf4-480d-a9ba-5b20f6f23f87"
  },
  {
   "name": "Tayon Hart",
   "gender": "Male",
   "team": "Monroe",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 9,
   "losses": 11,
   "pointsWon": 358,
   "totalPointsAgainst": 377,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 11,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 45,
   "diff": -19,
   "ppg": 17.9,
   "leagueRank": 151,
   "rating": 0.1,
   "ratingGames": 20,
   "confidence": 80,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.2,
   "playerId": "545f9968-fc0a-420b-ba42-db16c6e1f884"
  },
  {
   "name": "Larry Minsky",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 13,
   "losses": 16,
   "pointsWon": 505,
   "totalPointsAgainst": 551,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 13,
   "genderLosses": 16,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 44.8,
   "diff": -46,
   "ppg": 17.4,
   "leagueRank": 162,
   "rating": -0.5,
   "ratingGames": 29,
   "confidence": 85,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.2,
   "playerId": "41f7a2a8-8fcd-4282-b501-cd5b83ec7440"
  },
  {
   "name": "Joseph Luka",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 12,
   "losses": 15,
   "pointsWon": 496,
   "totalPointsAgainst": 507,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 15,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 44.4,
   "diff": -11,
   "ppg": 18.4,
   "leagueRank": 149,
   "rating": -1.1,
   "ratingGames": 27,
   "confidence": 84,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.5,
   "playerId": "482a6a13-3cb9-438b-8494-3f70a4f1cffe"
  },
  {
   "name": "Ken Weinstein",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 12,
   "losses": 15,
   "pointsWon": 479,
   "totalPointsAgainst": 497,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 15,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 44.4,
   "diff": -18,
   "ppg": 17.7,
   "leagueRank": 157,
   "rating": -1.1,
   "ratingGames": 27,
   "confidence": 84,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.2,
   "playerId": "d07bda42-9d33-4c03-a7f3-a8a468083bdd"
  },
  {
   "name": "Derek Livingston",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 14,
   "losses": 18,
   "pointsWon": 593,
   "totalPointsAgainst": 563,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 14,
   "genderLosses": 18,
   "clutchWins": 2,
   "clutchLosses": 8,
   "winPct": 43.8,
   "diff": 30,
   "ppg": 18.5,
   "leagueRank": 130,
   "rating": 1.9,
   "ratingGames": 32,
   "confidence": 86,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0,
   "playerId": "593561e7-e873-4261-85ee-25b6ab524bfa"
  },
  {
   "name": "Jimmy Shapiro",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 13,
   "losses": 17,
   "pointsWon": 560,
   "totalPointsAgainst": 547,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 13,
   "genderLosses": 17,
   "clutchWins": 5,
   "clutchLosses": 7,
   "winPct": 43.3,
   "diff": 13,
   "ppg": 18.7,
   "leagueRank": 134,
   "rating": 0.3,
   "ratingGames": 30,
   "confidence": 86,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.1,
   "playerId": "7b57c36d-a6eb-470e-b132-26d1f2a47b74"
  },
  {
   "name": "Mathew Yang",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 13,
   "losses": 17,
   "pointsWon": 540,
   "totalPointsAgainst": 578,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 13,
   "genderLosses": 17,
   "clutchWins": 5,
   "clutchLosses": 7,
   "winPct": 43.3,
   "diff": -38,
   "ppg": 18,
   "leagueRank": 159,
   "rating": -0.9,
   "ratingGames": 30,
   "confidence": 85,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.1,
   "playerId": "12ec758b-f05d-40ec-b082-a76f07cbe792"
  },
  {
   "name": "David Bogatyrev",
   "gender": "Male",
   "team": "Monroe",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 44,
   "wins": 19,
   "losses": 25,
   "pointsWon": 819,
   "totalPointsAgainst": 839,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 19,
   "genderLosses": 25,
   "clutchWins": 7,
   "clutchLosses": 7,
   "winPct": 43.2,
   "diff": -20,
   "ppg": 18.6,
   "leagueRank": 135,
   "rating": 1.9,
   "ratingGames": 44,
   "confidence": 89,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.9,
   "playerId": "e77a59ee-8653-4d89-903c-75109d3f17c8"
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
   "leagueRank": 240,
   "rating": 0.2,
   "ratingGames": 7,
   "confidence": 60,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.2,
   "playerId": "da53bfc3-c4c3-4746-b5b6-4f4af796cf0f"
  },
  {
   "name": "Sandeep Malhotra",
   "gender": "Male",
   "team": "Montville",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 9,
   "losses": 12,
   "pointsWon": 381,
   "totalPointsAgainst": 378,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 12,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 42.9,
   "diff": 3,
   "ppg": 18.1,
   "leagueRank": 155,
   "rating": -1.2,
   "ratingGames": 21,
   "confidence": 81,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0,
   "playerId": "c24596e0-9eeb-4195-b1ff-d4ca3e418d84"
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
   "leagueRank": 158,
   "rating": -1.6,
   "ratingGames": 14,
   "confidence": 74,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": -0.2,
   "playerId": "b4af1ed9-5d7e-4212-a206-3c9a97b6958a"
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
   "leagueRank": 263,
   "rating": -1.3,
   "ratingGames": 7,
   "confidence": 60,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0,
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
   "leagueRank": 183,
   "rating": -1.9,
   "ratingGames": 21,
   "confidence": 81,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": -0.8,
   "playerId": "a63211cf-31ed-448e-8c87-2aaaf8e84a7b"
  },
  {
   "name": "Sushil Rijhwani",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 33,
   "wins": 14,
   "losses": 19,
   "pointsWon": 583,
   "totalPointsAgainst": 595,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 14,
   "genderLosses": 19,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 42.4,
   "diff": -12,
   "ppg": 17.7,
   "leagueRank": 164,
   "rating": -0.8,
   "ratingGames": 33,
   "confidence": 87,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0,
   "playerId": "8fea334f-ad12-4c45-b67d-a127ec551f4e"
  },
  {
   "name": "Niman Ahmeti",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 11,
   "losses": 15,
   "pointsWon": 460,
   "totalPointsAgainst": 494,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 11,
   "genderLosses": 15,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 42.3,
   "diff": -34,
   "ppg": 17.7,
   "leagueRank": 185,
   "rating": -3,
   "ratingGames": 26,
   "confidence": 83,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -1.2,
   "playerId": "40681083-620d-4293-829f-91121323135c"
  },
  {
   "name": "Michael Gilbert",
   "gender": "Male",
   "team": "Home Court",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 11,
   "losses": 15,
   "pointsWon": 456,
   "totalPointsAgainst": 507,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 11,
   "genderLosses": 15,
   "clutchWins": 3,
   "clutchLosses": 6,
   "winPct": 42.3,
   "diff": -51,
   "ppg": 17.5,
   "leagueRank": 168,
   "rating": -0.2,
   "ratingGames": 26,
   "confidence": 83,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 1.1,
   "playerId": "5acb8305-77d8-4089-88b6-9fbfa9400f6a"
  },
  {
   "name": "Eden Ksendzovsky",
   "gender": "Male",
   "team": "Premiere",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 31,
   "wins": 13,
   "losses": 18,
   "pointsWon": 555,
   "totalPointsAgainst": 557,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 13,
   "genderLosses": 18,
   "clutchWins": 1,
   "clutchLosses": 6,
   "winPct": 41.9,
   "diff": -2,
   "ppg": 17.9,
   "leagueRank": 153,
   "rating": -0.3,
   "ratingGames": 31,
   "confidence": 85,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.6,
   "playerId": "75496a80-8064-40ae-ba4b-36c156d70885"
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
   "leagueRank": 148,
   "rating": 0.2,
   "ratingGames": 24,
   "confidence": 83,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.4,
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
   "leagueRank": 194,
   "rating": -0.6,
   "ratingGames": 12,
   "confidence": 70,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": -0.4,
   "playerId": "29646b59-bcf0-4a90-a70d-2824eb639c4c"
  },
  {
   "name": "David Shapiro",
   "gender": "Male",
   "team": "Flemington",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 15,
   "losses": 21,
   "pointsWon": 639,
   "totalPointsAgainst": 667,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 15,
   "genderLosses": 21,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 41.7,
   "diff": -28,
   "ppg": 17.8,
   "leagueRank": 154,
   "rating": -0.2,
   "ratingGames": 36,
   "confidence": 87,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.1,
   "playerId": "c39cd158-0c19-4819-8653-18084e6ce982"
  },
  {
   "name": "Dilip Patel",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 17,
   "losses": 24,
   "pointsWon": 729,
   "totalPointsAgainst": 786,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 17,
   "genderLosses": 24,
   "clutchWins": 7,
   "clutchLosses": 7,
   "winPct": 41.5,
   "diff": -57,
   "ppg": 17.8,
   "leagueRank": 160,
   "rating": 0.3,
   "ratingGames": 41,
   "confidence": 89,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.8,
   "playerId": "7573445f-7dbd-4c2f-867a-ae95ae7ed168"
  },
  {
   "name": "Allan Orchard",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 12,
   "losses": 17,
   "pointsWon": 528,
   "totalPointsAgainst": 551,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 17,
   "clutchWins": 2,
   "clutchLosses": 9,
   "winPct": 41.4,
   "diff": -23,
   "ppg": 18.2,
   "leagueRank": 146,
   "rating": 0.7,
   "ratingGames": 29,
   "confidence": 85,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.3,
   "playerId": "4f34c672-f457-467f-98d8-7d5d6c8add16"
  },
  {
   "name": "Gary Garretson",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 12,
   "losses": 17,
   "pointsWon": 513,
   "totalPointsAgainst": 537,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 17,
   "clutchWins": 2,
   "clutchLosses": 6,
   "winPct": 41.4,
   "diff": -24,
   "ppg": 17.7,
   "leagueRank": 163,
   "rating": -0.3,
   "ratingGames": 29,
   "confidence": 85,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": -0.1,
   "playerId": "d4126276-6b83-42be-b943-9957df46992c"
  },
  {
   "name": "Daniel Hadley",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 11,
   "losses": 16,
   "pointsWon": 473,
   "totalPointsAgainst": 506,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 11,
   "genderLosses": 16,
   "clutchWins": 3,
   "clutchLosses": 6,
   "winPct": 40.7,
   "diff": -33,
   "ppg": 17.5,
   "leagueRank": 173,
   "rating": -0.9,
   "ratingGames": 27,
   "confidence": 83,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": -0.4,
   "playerId": "23adcd68-130d-4176-b367-d3cd31260d21"
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
   "leagueRank": 177,
   "rating": -1.1,
   "ratingGames": 27,
   "confidence": 84,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": -0.6,
   "playerId": "4f98756a-9726-48fe-a241-2579f96eee16"
  },
  {
   "name": "Matt Inzerillo",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 17,
   "losses": 25,
   "pointsWon": 747,
   "totalPointsAgainst": 773,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 17,
   "genderLosses": 25,
   "clutchWins": 2,
   "clutchLosses": 5,
   "winPct": 40.5,
   "diff": -26,
   "ppg": 17.8,
   "leagueRank": 165,
   "rating": -1.1,
   "ratingGames": 42,
   "confidence": 89,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.3,
   "playerId": "51ceabf9-8258-4835-9835-c7d915220185"
  },
  {
   "name": "Jimmy Lee",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 17,
   "losses": 25,
   "pointsWon": 754,
   "totalPointsAgainst": 795,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 17,
   "genderLosses": 25,
   "clutchWins": 5,
   "clutchLosses": 10,
   "winPct": 40.5,
   "diff": -41,
   "ppg": 18,
   "leagueRank": 170,
   "rating": -0.6,
   "ratingGames": 42,
   "confidence": 89,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.4,
   "playerId": "f2c53e42-1eac-48dd-9c93-682ec5c1ac98"
  },
  {
   "name": "Eric Berlinger",
   "gender": "Male",
   "team": "Flemington",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 52,
   "wins": 21,
   "losses": 31,
   "pointsWon": 931,
   "totalPointsAgainst": 991,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 21,
   "genderLosses": 31,
   "clutchWins": 7,
   "clutchLosses": 9,
   "winPct": 40.4,
   "diff": -60,
   "ppg": 17.9,
   "leagueRank": 152,
   "rating": 1.1,
   "ratingGames": 52,
   "confidence": 90,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.6,
   "playerId": "2fda2042-6613-42f8-ad93-c3cff9a58f3e"
  },
  {
   "name": "Paul Rappoport",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 80,
   "totalPointsAgainst": 101,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 40,
   "diff": -21,
   "ppg": 16,
   "leagueRank": 269,
   "rating": -1.2,
   "ratingGames": 5,
   "confidence": 49,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.5,
   "playerId": "f2258c77-73cb-49de-991e-ed0cc4f3f9e2"
  },
  {
   "name": "Harsh Upadhyaya",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 12,
   "losses": 18,
   "pointsWon": 531,
   "totalPointsAgainst": 559,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 18,
   "clutchWins": 6,
   "clutchLosses": 6,
   "winPct": 40,
   "diff": -28,
   "ppg": 17.7,
   "leagueRank": 167,
   "rating": -0.4,
   "ratingGames": 30,
   "confidence": 86,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.2,
   "playerId": "3b9648e1-481c-4007-9932-d8df648f7bab"
  },
  {
   "name": "Mario Contreras",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 12,
   "losses": 18,
   "pointsWon": 530,
   "totalPointsAgainst": 571,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 18,
   "clutchWins": 5,
   "clutchLosses": 3,
   "winPct": 40,
   "diff": -41,
   "ppg": 17.7,
   "leagueRank": 176,
   "rating": -1.1,
   "ratingGames": 30,
   "confidence": 85,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": -0.2,
   "playerId": "323d96c3-4160-410b-96a5-87263e825f62"
  },
  {
   "name": "Craig Butler",
   "gender": "Male",
   "team": "Flemington",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 53,
   "wins": 21,
   "losses": 32,
   "pointsWon": 926,
   "totalPointsAgainst": 974,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 21,
   "genderLosses": 32,
   "clutchWins": 4,
   "clutchLosses": 11,
   "winPct": 39.6,
   "diff": -48,
   "ppg": 17.5,
   "leagueRank": 161,
   "rating": 1.2,
   "ratingGames": 53,
   "confidence": 90,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 0.4,
   "playerId": "b50c51e8-3ce3-44ec-98e7-6cc11a705f17"
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
   "leagueRank": 156,
   "rating": 0.2,
   "ratingGames": 28,
   "confidence": 85,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 1,
   "playerId": "3ac34ef1-17a5-4ab6-8d17-be4bd5a0a040"
  },
  {
   "name": "Christopher Monzon",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 9,
   "losses": 14,
   "pointsWon": 412,
   "totalPointsAgainst": 444,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 14,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 39.1,
   "diff": -32,
   "ppg": 17.9,
   "leagueRank": 182,
   "rating": -2.6,
   "ratingGames": 23,
   "confidence": 82,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.5,
   "playerId": "b205e6a7-d62d-42bf-b2d5-e7e5d0c109ec"
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
   "leagueRank": 184,
   "rating": 0.1,
   "ratingGames": 23,
   "confidence": 83,
   "strengthOfPartners": -1.8,
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
   "leagueRank": 178,
   "rating": -1.3,
   "ratingGames": 18,
   "confidence": 79,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.2,
   "playerId": "a6d48fe9-1e3d-470b-8a0c-6061231f34ce"
  },
  {
   "name": "Thomas Moran",
   "gender": "Male",
   "team": "Pickleball HQ",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 10,
   "losses": 16,
   "pointsWon": 466,
   "totalPointsAgainst": 507,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 16,
   "clutchWins": 4,
   "clutchLosses": 6,
   "winPct": 38.5,
   "diff": -41,
   "ppg": 17.9,
   "leagueRank": 191,
   "rating": -3,
   "ratingGames": 26,
   "confidence": 83,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.9,
   "playerId": "9571d7b5-fc34-4c77-a51f-c99b286e4304"
  },
  {
   "name": "Jason Mcmanmon",
   "gender": "Male",
   "team": "Monroe",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 34,
   "wins": 13,
   "losses": 21,
   "pointsWon": 610,
   "totalPointsAgainst": 669,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 13,
   "genderLosses": 21,
   "clutchWins": 7,
   "clutchLosses": 6,
   "winPct": 38.2,
   "diff": -59,
   "ppg": 17.9,
   "leagueRank": 171,
   "rating": -0.3,
   "ratingGames": 34,
   "confidence": 86,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.7,
   "playerId": "9adf9c4e-91c0-4483-af44-9ad4a86a81ce"
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
   "leagueRank": 228,
   "rating": 1.2,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 1,
   "playerId": "adc25ed0-4bc3-47da-9509-4caeb8f90185"
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
   "leagueRank": 237,
   "rating": -0.8,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.7,
   "playerId": "f53cbe34-439d-4183-8c32-7264fbca23fa"
  },
  {
   "name": "Prashanth Koshy",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 9,
   "losses": 15,
   "pointsWon": 435,
   "totalPointsAgainst": 470,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 15,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 37.5,
   "diff": -35,
   "ppg": 18.1,
   "leagueRank": 180,
   "rating": -1.7,
   "ratingGames": 24,
   "confidence": 83,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.2,
   "playerId": "5b619b72-b78a-49ba-872d-c64db6084a67"
  },
  {
   "name": "Sean Majury",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 12,
   "losses": 20,
   "pointsWon": 539,
   "totalPointsAgainst": 622,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 20,
   "clutchWins": 6,
   "clutchLosses": 2,
   "winPct": 37.5,
   "diff": -83,
   "ppg": 16.8,
   "leagueRank": 188,
   "rating": -1.1,
   "ratingGames": 32,
   "confidence": 86,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.3,
   "playerId": "e41c0cda-fb97-4912-8e8a-fa99ff1725d0"
  },
  {
   "name": "Jonathan Carter",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 14,
   "losses": 24,
   "pointsWon": 680,
   "totalPointsAgainst": 729,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 14,
   "genderLosses": 24,
   "clutchWins": 4,
   "clutchLosses": 9,
   "winPct": 36.8,
   "diff": -49,
   "ppg": 17.9,
   "leagueRank": 181,
   "rating": -1.3,
   "ratingGames": 38,
   "confidence": 88,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0,
   "playerId": "33fe293d-5913-41af-8f89-4a431ed92ab7"
  },
  {
   "name": "Andy Ro",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 28,
   "wins": 10,
   "losses": 18,
   "pointsWon": 505,
   "totalPointsAgainst": 541,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 18,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 35.7,
   "diff": -36,
   "ppg": 18,
   "leagueRank": 172,
   "rating": 0.2,
   "ratingGames": 28,
   "confidence": 85,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.3,
   "playerId": "f3f6addc-ea42-4e7b-ac54-67bf69cffeeb"
  },
  {
   "name": "Erik Reilly",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 45,
   "wins": 16,
   "losses": 29,
   "pointsWon": 828,
   "totalPointsAgainst": 877,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 16,
   "genderLosses": 29,
   "clutchWins": 8,
   "clutchLosses": 16,
   "winPct": 35.6,
   "diff": -49,
   "ppg": 18.4,
   "leagueRank": 166,
   "rating": 0.9,
   "ratingGames": 45,
   "confidence": 89,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.6,
   "playerId": "479815f2-1e14-4b96-9423-d99c15b2fe2b"
  },
  {
   "name": "Angelo Disipio",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 12,
   "losses": 22,
   "pointsWon": 598,
   "totalPointsAgainst": 654,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 22,
   "clutchWins": 3,
   "clutchLosses": 8,
   "winPct": 35.3,
   "diff": -56,
   "ppg": 17.6,
   "leagueRank": 186,
   "rating": -1.3,
   "ratingGames": 34,
   "confidence": 87,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.1,
   "playerId": "79bb5bba-c449-4cdd-948b-fb5f8efdaebb"
  },
  {
   "name": "Chris Machuzak",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 40,
   "wins": 14,
   "losses": 26,
   "pointsWon": 686,
   "totalPointsAgainst": 748,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 14,
   "genderLosses": 26,
   "clutchWins": 5,
   "clutchLosses": 7,
   "winPct": 35,
   "diff": -62,
   "ppg": 17.2,
   "leagueRank": 190,
   "rating": -1,
   "ratingGames": 40,
   "confidence": 89,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.1,
   "playerId": "dba4c9d8-6ffb-49ae-99d1-79c341a68de7"
  },
  {
   "name": "David Fiscella",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 8,
   "losses": 15,
   "pointsWon": 407,
   "totalPointsAgainst": 443,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 15,
   "clutchWins": 3,
   "clutchLosses": 6,
   "winPct": 34.8,
   "diff": -36,
   "ppg": 17.7,
   "leagueRank": 169,
   "rating": 1.2,
   "ratingGames": 23,
   "confidence": 82,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 0.7,
   "playerId": "fa546fa2-45f5-4ad6-91ec-b6f6044ad8b0"
  },
  {
   "name": "Jacob Rosengarten",
   "gender": "Male",
   "team": "Monroe",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 12,
   "losses": 23,
   "pointsWon": 622,
   "totalPointsAgainst": 684,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 23,
   "clutchWins": 6,
   "clutchLosses": 5,
   "winPct": 34.3,
   "diff": -62,
   "ppg": 17.8,
   "leagueRank": 179,
   "rating": 0.6,
   "ratingGames": 35,
   "confidence": 87,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 1,
   "playerId": "b2f8ea85-7734-47a2-8ce7-bd968b3a51bc"
  },
  {
   "name": "Sean Diamond",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 13,
   "losses": 25,
   "pointsWon": 642,
   "totalPointsAgainst": 720,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 13,
   "genderLosses": 25,
   "clutchWins": 2,
   "clutchLosses": 8,
   "winPct": 34.2,
   "diff": -78,
   "ppg": 16.9,
   "leagueRank": 196,
   "rating": -1,
   "ratingGames": 38,
   "confidence": 87,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.1,
   "playerId": "635ba257-e1ed-4db3-8303-5f241388437e"
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
   "leagueRank": 267,
   "rating": -0.2,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 1.4,
   "playerId": "183983b9-993f-471e-ac3d-224dcee6d80f"
  },
  {
   "name": "Samrat Sood",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 5,
   "losses": 10,
   "pointsWon": 250,
   "totalPointsAgainst": 287,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 10,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 33.3,
   "diff": -37,
   "ppg": 16.7,
   "leagueRank": 210,
   "rating": -2.8,
   "ratingGames": 15,
   "confidence": 76,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.1,
   "playerId": "da802117-fbc3-4b98-9653-9924387691cc"
  },
  {
   "name": "Wensheng Yue",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 12,
   "losses": 24,
   "pointsWon": 636,
   "totalPointsAgainst": 705,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 24,
   "clutchWins": 6,
   "clutchLosses": 7,
   "winPct": 33.3,
   "diff": -69,
   "ppg": 17.7,
   "leagueRank": 187,
   "rating": -1.5,
   "ratingGames": 36,
   "confidence": 88,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0,
   "playerId": "d11f5bc0-8b23-488d-86fb-13eebe9e2257"
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
   "leagueRank": 197,
   "rating": -0.7,
   "ratingGames": 16,
   "confidence": 76,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.4,
   "playerId": "159ef92f-0a83-4619-b65d-3ba60a2ba992"
  },
  {
   "name": "Franklin Lupianez",
   "gender": "Male",
   "team": "Flemington",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 45,
   "wins": 14,
   "losses": 31,
   "pointsWon": 766,
   "totalPointsAgainst": 875,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 14,
   "genderLosses": 31,
   "clutchWins": 3,
   "clutchLosses": 7,
   "winPct": 31.1,
   "diff": -109,
   "ppg": 17,
   "leagueRank": 202,
   "rating": -1.8,
   "ratingGames": 45,
   "confidence": 89,
   "strengthOfPartners": -1,
   "strengthOfOpponents": -0.3,
   "playerId": "17caef8b-84d4-4052-9695-7c74190925a1"
  },
  {
   "name": "Dhruv Dobariya",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 45,
   "wins": 14,
   "losses": 31,
   "pointsWon": 748,
   "totalPointsAgainst": 884,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 14,
   "genderLosses": 31,
   "clutchWins": 7,
   "clutchLosses": 5,
   "winPct": 31.1,
   "diff": -136,
   "ppg": 16.6,
   "leagueRank": 207,
   "rating": -1.3,
   "ratingGames": 45,
   "confidence": 90,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.8,
   "playerId": "ac44fd3c-0c87-47aa-bf26-4333b632f524"
  },
  {
   "name": "Stephen Fredericksen",
   "gender": "Male",
   "team": "Monroe",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 9,
   "losses": 20,
   "pointsWon": 507,
   "totalPointsAgainst": 571,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 20,
   "clutchWins": 6,
   "clutchLosses": 5,
   "winPct": 31,
   "diff": -64,
   "ppg": 17.5,
   "leagueRank": 192,
   "rating": -1.3,
   "ratingGames": 29,
   "confidence": 85,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.5,
   "playerId": "622cb64f-dd0c-4bff-8c19-81d287977c53"
  },
  {
   "name": "Kurt Skalamera",
   "gender": "Male",
   "team": "Monroe",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 9,
   "losses": 20,
   "pointsWon": 495,
   "totalPointsAgainst": 583,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 20,
   "clutchWins": 6,
   "clutchLosses": 2,
   "winPct": 31,
   "diff": -88,
   "ppg": 17.1,
   "leagueRank": 203,
   "rating": -1.6,
   "ratingGames": 29,
   "confidence": 85,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.8,
   "playerId": "04000200-8214-42ff-9a0d-2189ffaccd42"
  },
  {
   "name": "Ben Cortes",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 13,
   "losses": 29,
   "pointsWon": 695,
   "totalPointsAgainst": 837,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 13,
   "genderLosses": 29,
   "clutchWins": 9,
   "clutchLosses": 4,
   "winPct": 31,
   "diff": -142,
   "ppg": 16.5,
   "leagueRank": 211,
   "rating": -1.6,
   "ratingGames": 42,
   "confidence": 89,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.4,
   "playerId": "4d89659f-a86c-4416-93f2-5c868fe0e984"
  },
  {
   "name": "Shawn Gold",
   "gender": "Male",
   "team": "Monroe",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 8,
   "losses": 18,
   "pointsWon": 482,
   "totalPointsAgainst": 515,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 18,
   "clutchWins": 4,
   "clutchLosses": 10,
   "winPct": 30.8,
   "diff": -33,
   "ppg": 18.5,
   "leagueRank": 174,
   "rating": 0.3,
   "ratingGames": 26,
   "confidence": 84,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 1,
   "playerId": "e2d70cc7-b655-43d5-a059-063bfe722001"
  },
  {
   "name": "John Fallone",
   "gender": "Male",
   "team": "Flemington",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 12,
   "losses": 27,
   "pointsWon": 642,
   "totalPointsAgainst": 760,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 27,
   "clutchWins": 4,
   "clutchLosses": 6,
   "winPct": 30.8,
   "diff": -118,
   "ppg": 16.5,
   "leagueRank": 205,
   "rating": -0.9,
   "ratingGames": 39,
   "confidence": 87,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.6,
   "playerId": "5127c0b9-aaf8-49c5-a94f-bf92e7ae60f8"
  },
  {
   "name": "Steppan Konoplev",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 11,
   "losses": 25,
   "pointsWon": 621,
   "totalPointsAgainst": 708,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 11,
   "genderLosses": 25,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 30.6,
   "diff": -87,
   "ppg": 17.3,
   "leagueRank": 193,
   "rating": -0.4,
   "ratingGames": 36,
   "confidence": 88,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": 0.1,
   "playerId": "8f076d51-25ba-4203-97f8-12194ba5b001"
  },
  {
   "name": "David Tabacco",
   "gender": "Male",
   "team": "Flemington",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 11,
   "losses": 25,
   "pointsWon": 599,
   "totalPointsAgainst": 712,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 11,
   "genderLosses": 25,
   "clutchWins": 5,
   "clutchLosses": 6,
   "winPct": 30.6,
   "diff": -113,
   "ppg": 16.6,
   "leagueRank": 206,
   "rating": -1.1,
   "ratingGames": 36,
   "confidence": 86,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.4,
   "playerId": "717d97f0-4f08-476f-9c53-7595605bc0b0"
  },
  {
   "name": "Rick Olafsson",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 6,
   "losses": 14,
   "pointsWon": 338,
   "totalPointsAgainst": 392,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 14,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 30,
   "diff": -54,
   "ppg": 16.9,
   "leagueRank": 201,
   "rating": -0.7,
   "ratingGames": 20,
   "confidence": 81,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 0.2,
   "playerId": "088a0cec-3f4c-4100-afd4-33d4462dc7e3"
  },
  {
   "name": "Vinay Mutt",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 8,
   "losses": 19,
   "pointsWon": 437,
   "totalPointsAgainst": 528,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 19,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 29.6,
   "diff": -91,
   "ppg": 16.2,
   "leagueRank": 217,
   "rating": -1.8,
   "ratingGames": 27,
   "confidence": 84,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.5,
   "playerId": "7caafc32-1aed-4fb7-b145-baf82cbbe2d2"
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
   "leagueRank": 200,
   "rating": -1.2,
   "ratingGames": 21,
   "confidence": 81,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": -0.1,
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
   "leagueRank": 226,
   "rating": -4.5,
   "ratingGames": 21,
   "confidence": 81,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -1.3,
   "playerId": "06a3741d-10e5-462b-ba95-aa997d4eb8ea"
  },
  {
   "name": "Tom Hadler",
   "gender": "Male",
   "team": "Flemington",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 5,
   "losses": 13,
   "pointsWon": 291,
   "totalPointsAgainst": 350,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 13,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 27.8,
   "diff": -59,
   "ppg": 16.2,
   "leagueRank": 218,
   "rating": -1.8,
   "ratingGames": 18,
   "confidence": 77,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": -0.1,
   "playerId": "c5d07eb6-d276-4503-a077-c092e89c2ae8"
  },
  {
   "name": "Brandon Fulford",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 40,
   "wins": 11,
   "losses": 29,
   "pointsWon": 702,
   "totalPointsAgainst": 801,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 11,
   "genderLosses": 29,
   "clutchWins": 8,
   "clutchLosses": 12,
   "winPct": 27.5,
   "diff": -99,
   "ppg": 17.6,
   "leagueRank": 198,
   "rating": -0.8,
   "ratingGames": 40,
   "confidence": 88,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.3,
   "playerId": "906383cd-e781-48bc-9004-0fc5427c7e62"
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
   "leagueRank": 215,
   "rating": -4,
   "ratingGames": 33,
   "confidence": 86,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.8,
   "playerId": "e8aee14f-dbc4-4e5c-be4a-4f948e2e13fc"
  },
  {
   "name": "J-P Lautenschlager",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 6,
   "losses": 16,
   "pointsWon": 362,
   "totalPointsAgainst": 434,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 16,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 27.3,
   "diff": -72,
   "ppg": 16.5,
   "leagueRank": 220,
   "rating": -2.6,
   "ratingGames": 22,
   "confidence": 81,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0,
   "playerId": "5c3659f9-08d3-4745-832b-f7dd3f8c5ae5"
  },
  {
   "name": "Franklin Yiu",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 48,
   "wins": 13,
   "losses": 35,
   "pointsWon": 819,
   "totalPointsAgainst": 953,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 13,
   "genderLosses": 35,
   "clutchWins": 6,
   "clutchLosses": 8,
   "winPct": 27.1,
   "diff": -134,
   "ppg": 17.1,
   "leagueRank": 212,
   "rating": -1.8,
   "ratingGames": 48,
   "confidence": 89,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -0.1,
   "playerId": "020affa0-bff4-49cb-94c0-a9eb9ba09b77"
  },
  {
   "name": "Ren Macalalag",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 34,
   "wins": 9,
   "losses": 25,
   "pointsWon": 579,
   "totalPointsAgainst": 660,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 25,
   "clutchWins": 4,
   "clutchLosses": 8,
   "winPct": 26.5,
   "diff": -81,
   "ppg": 17,
   "leagueRank": 209,
   "rating": -0.1,
   "ratingGames": 34,
   "confidence": 86,
   "strengthOfPartners": -2.1,
   "strengthOfOpponents": 0.1,
   "playerId": "24db47b3-dedc-418d-9210-3b5fea1952da"
  },
  {
   "name": "Paul Chantler",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 7,
   "losses": 20,
   "pointsWon": 428,
   "totalPointsAgainst": 536,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 20,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 25.9,
   "diff": -108,
   "ppg": 15.9,
   "leagueRank": 232,
   "rating": -2.3,
   "ratingGames": 27,
   "confidence": 84,
   "strengthOfPartners": -2.3,
   "strengthOfOpponents": -0.5,
   "playerId": "b1f8fd31-d4ed-4824-9ae6-174e5e2f21c2"
  },
  {
   "name": "Siva Indupuru",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 9,
   "losses": 26,
   "pointsWon": 615,
   "totalPointsAgainst": 699,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 26,
   "clutchWins": 5,
   "clutchLosses": 12,
   "winPct": 25.7,
   "diff": -84,
   "ppg": 17.6,
   "leagueRank": 199,
   "rating": -0.4,
   "ratingGames": 35,
   "confidence": 87,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.5,
   "playerId": "5f264528-efdb-4bda-88ed-8003f98c1c9b"
  },
  {
   "name": "Jesse Pettit",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 10,
   "losses": 29,
   "pointsWon": 657,
   "totalPointsAgainst": 783,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 29,
   "clutchWins": 5,
   "clutchLosses": 7,
   "winPct": 25.6,
   "diff": -126,
   "ppg": 16.8,
   "leagueRank": 208,
   "rating": 0,
   "ratingGames": 39,
   "confidence": 88,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": 0.7,
   "playerId": "d6e30691-3b20-465b-8fa8-560017c20c15"
  },
  {
   "name": "Syed Haider",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 147,
   "totalPointsAgainst": 162,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 25,
   "diff": -15,
   "ppg": 18.4,
   "leagueRank": 250,
   "rating": 0,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 1.6,
   "playerId": "e9d967d2-d906-43e5-9ab9-afc93f17df03"
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
   "leagueRank": 260,
   "rating": -3.6,
   "ratingGames": 8,
   "confidence": 61,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -1,
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
   "leagueRank": 265,
   "rating": 0.1,
   "ratingGames": 8,
   "confidence": 61,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0.9,
   "playerId": "f46a315a-aae5-44b5-ab45-6949706396fd"
  },
  {
   "name": "John Sallo",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 4,
   "losses": 12,
   "pointsWon": 273,
   "totalPointsAgainst": 322,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 12,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 25,
   "diff": -49,
   "ppg": 17.1,
   "leagueRank": 238,
   "rating": -0.8,
   "ratingGames": 16,
   "confidence": 76,
   "strengthOfPartners": -2.4,
   "strengthOfOpponents": -0.2,
   "playerId": "b379a353-c35e-4a6e-8ea4-ea21ebcdafa0"
  },
  {
   "name": "John Coyle",
   "gender": "Male",
   "team": "Monroe",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 6,
   "losses": 18,
   "pointsWon": 401,
   "totalPointsAgainst": 477,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 18,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 25,
   "diff": -76,
   "ppg": 16.7,
   "leagueRank": 225,
   "rating": -3,
   "ratingGames": 24,
   "confidence": 83,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.1,
   "playerId": "54d78d2c-c0d7-42c0-aef4-567311f2e51e"
  },
  {
   "name": "Joel Steinbrunner",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 6,
   "losses": 18,
   "pointsWon": 400,
   "totalPointsAgainst": 481,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 18,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 25,
   "diff": -81,
   "ppg": 16.7,
   "leagueRank": 213,
   "rating": -1.3,
   "ratingGames": 24,
   "confidence": 82,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 0.3,
   "playerId": "d6628146-5ecf-46fa-9ec2-4385171098fd"
  },
  {
   "name": "Rick Wickenheisser",
   "gender": "Male",
   "team": "Flemington",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 7,
   "losses": 21,
   "pointsWon": 448,
   "totalPointsAgainst": 554,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 21,
   "clutchWins": 1,
   "clutchLosses": 5,
   "winPct": 25,
   "diff": -106,
   "ppg": 16,
   "leagueRank": 233,
   "rating": -3,
   "ratingGames": 28,
   "confidence": 84,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": -0.2,
   "playerId": "741048e8-2c91-4466-bb1c-1a624d1dabd9"
  },
  {
   "name": "Aleks Mirkovic",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 40,
   "wins": 10,
   "losses": 30,
   "pointsWon": 647,
   "totalPointsAgainst": 805,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 30,
   "clutchWins": 7,
   "clutchLosses": 6,
   "winPct": 25,
   "diff": -158,
   "ppg": 16.2,
   "leagueRank": 222,
   "rating": -1.4,
   "ratingGames": 40,
   "confidence": 88,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": 0.3,
   "playerId": "f006963a-4e8e-433d-8c9a-e278ac32ea9c"
  },
  {
   "name": "Ian Diamond",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 5,
   "losses": 16,
   "pointsWon": 342,
   "totalPointsAgainst": 418,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 16,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 23.8,
   "diff": -76,
   "ppg": 16.3,
   "leagueRank": 231,
   "rating": -3,
   "ratingGames": 21,
   "confidence": 81,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": -0.7,
   "playerId": "f5a96445-7d1c-459b-8642-12a5d11554db"
  },
  {
   "name": "Aaron Chan",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 8,
   "losses": 26,
   "pointsWon": 566,
   "totalPointsAgainst": 676,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 26,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 23.5,
   "diff": -110,
   "ppg": 16.6,
   "leagueRank": 227,
   "rating": -2.8,
   "ratingGames": 34,
   "confidence": 87,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.3,
   "playerId": "57666861-23d0-4809-9556-b646579f2fd6"
  },
  {
   "name": "Josh Rito",
   "gender": "Male",
   "team": "Flemington",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 44,
   "wins": 10,
   "losses": 34,
   "pointsWon": 710,
   "totalPointsAgainst": 879,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 34,
   "clutchWins": 2,
   "clutchLosses": 8,
   "winPct": 22.7,
   "diff": -169,
   "ppg": 16.1,
   "leagueRank": 235,
   "rating": -3.2,
   "ratingGames": 44,
   "confidence": 88,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": -0.2,
   "playerId": "a4c54a14-35b4-4b90-aabd-3d81ad719f4d"
  },
  {
   "name": "Andress Mims",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 40,
   "wins": 9,
   "losses": 31,
   "pointsWon": 677,
   "totalPointsAgainst": 805,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 31,
   "clutchWins": 4,
   "clutchLosses": 11,
   "winPct": 22.5,
   "diff": -128,
   "ppg": 16.9,
   "leagueRank": 230,
   "rating": -2.9,
   "ratingGames": 40,
   "confidence": 88,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.1,
   "playerId": "e9878f35-8a92-4887-834e-d8a76881ae41"
  },
  {
   "name": "Josh Fink",
   "gender": "Male",
   "team": "Flemington",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 8,
   "losses": 30,
   "pointsWon": 656,
   "totalPointsAgainst": 767,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 30,
   "clutchWins": 3,
   "clutchLosses": 10,
   "winPct": 21.1,
   "diff": -111,
   "ppg": 17.3,
   "leagueRank": 216,
   "rating": -0.9,
   "ratingGames": 38,
   "confidence": 87,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.6,
   "playerId": "6a70d918-9cd3-47d0-a40a-901a406452b6"
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
   "leagueRank": 245,
   "rating": -1.6,
   "ratingGames": 15,
   "confidence": 74,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 0.4,
   "playerId": "77f18b1c-db78-4d0e-b81d-6d1efde8bb08"
  },
  {
   "name": "Jaiveer Narwal",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 5,
   "losses": 20,
   "pointsWon": 424,
   "totalPointsAgainst": 500,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 20,
   "clutchWins": 2,
   "clutchLosses": 6,
   "winPct": 20,
   "diff": -76,
   "ppg": 17,
   "leagueRank": 229,
   "rating": -1.7,
   "ratingGames": 25,
   "confidence": 84,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.5,
   "playerId": "96042156-2ff1-44d0-9b96-8448964b4981"
  },
  {
   "name": "Bren Calpin",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 3,
   "losses": 13,
   "pointsWon": 275,
   "totalPointsAgainst": 329,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 13,
   "clutchWins": 2,
   "clutchLosses": 6,
   "winPct": 18.8,
   "diff": -54,
   "ppg": 17.2,
   "leagueRank": 224,
   "rating": -2.3,
   "ratingGames": 16,
   "confidence": 75,
   "strengthOfPartners": -2.5,
   "strengthOfOpponents": -1,
   "playerId": "7f4b7644-6117-4eee-b3d8-a4955507923e"
  },
  {
   "name": "Stephane Sabathier",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 2,
   "losses": 9,
   "pointsWon": 174,
   "totalPointsAgainst": 224,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 9,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 18.2,
   "diff": -50,
   "ppg": 15.8,
   "leagueRank": 264,
   "rating": -2.3,
   "ratingGames": 11,
   "confidence": 68,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 1,
   "playerId": "c45a1c4a-3aec-4920-ac7b-22142f13030f"
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
   "leagueRank": 273,
   "rating": -2.1,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": -2,
   "strengthOfOpponents": 0.6,
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
   "leagueRank": 247,
   "rating": -1.9,
   "ratingGames": 12,
   "confidence": 71,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 1.2,
   "playerId": "a861a127-253c-4cb2-a1d6-93a37558b93a"
  },
  {
   "name": "Cosme Tapia",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 2,
   "losses": 10,
   "pointsWon": 189,
   "totalPointsAgainst": 242,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 10,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 16.7,
   "diff": -53,
   "ppg": 15.8,
   "leagueRank": 254,
   "rating": -1.7,
   "ratingGames": 12,
   "confidence": 71,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.6,
   "playerId": "32712f41-d770-4a6c-b536-d596bab73e13"
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
   "leagueRank": 257,
   "rating": -3.1,
   "ratingGames": 12,
   "confidence": 70,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.6,
   "playerId": "199ae8e1-22b4-4d8d-a41d-29cb984a3b33"
  },
  {
   "name": "Andy Knight",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 4,
   "losses": 21,
   "pointsWon": 374,
   "totalPointsAgainst": 505,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 21,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 16,
   "diff": -131,
   "ppg": 15,
   "leagueRank": 249,
   "rating": -3.6,
   "ratingGames": 25,
   "confidence": 83,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.2,
   "playerId": "fd8fa2a4-7f58-41d2-897e-e7df225c4ad0"
  },
  {
   "name": "Francis Thai",
   "gender": "Male",
   "team": "PickleRage Union County",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 3,
   "losses": 16,
   "pointsWon": 293,
   "totalPointsAgainst": 393,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 16,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 15.8,
   "diff": -100,
   "ppg": 15.4,
   "leagueRank": 248,
   "rating": -3.1,
   "ratingGames": 19,
   "confidence": 79,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.2,
   "playerId": "a78758b7-fe50-4865-b059-83a9d177e857"
  },
  {
   "name": "Gianni Roman",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 6,
   "losses": 32,
   "pointsWon": 576,
   "totalPointsAgainst": 781,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 32,
   "clutchWins": 4,
   "clutchLosses": 6,
   "winPct": 15.8,
   "diff": -205,
   "ppg": 15.2,
   "leagueRank": 244,
   "rating": -2.1,
   "ratingGames": 38,
   "confidence": 88,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": 0.7,
   "playerId": "22294f41-611f-4e8f-962e-377e43209945"
  },
  {
   "name": "Xavier Vazquez",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 2,
   "losses": 11,
   "pointsWon": 191,
   "totalPointsAgainst": 268,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 11,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 15.4,
   "diff": -77,
   "ppg": 14.7,
   "leagueRank": 262,
   "rating": -1.6,
   "ratingGames": 13,
   "confidence": 73,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": 1,
   "playerId": "24bfad4a-0221-485a-8550-c0bdd971484a"
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
   "leagueRank": 270,
   "rating": -2.1,
   "ratingGames": 7,
   "confidence": 60,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.3,
   "playerId": "3ea74039-550d-4a76-a514-e024aea9fd85"
  },
  {
   "name": "Wen Jin",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 2,
   "losses": 12,
   "pointsWon": 230,
   "totalPointsAgainst": 288,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 12,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 14.3,
   "diff": -58,
   "ppg": 16.4,
   "leagueRank": 255,
   "rating": -2.4,
   "ratingGames": 14,
   "confidence": 75,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": -0.1,
   "playerId": "dd2384fe-4bb2-4085-a917-6e7989beb8a7"
  },
  {
   "name": "Saad Talat Siddiqui",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 4,
   "losses": 26,
   "pointsWon": 473,
   "totalPointsAgainst": 606,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 26,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 13.3,
   "diff": -133,
   "ppg": 15.8,
   "leagueRank": 243,
   "rating": -2.7,
   "ratingGames": 30,
   "confidence": 84,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": -0.2,
   "playerId": "ebfeb773-e8cd-4b6a-aafd-ee2772540168"
  },
  {
   "name": "Xan Hong",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 38,
   "wins": 4,
   "losses": 34,
   "pointsWon": 532,
   "totalPointsAgainst": 787,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 34,
   "clutchWins": 3,
   "clutchLosses": 6,
   "winPct": 10.5,
   "diff": -255,
   "ppg": 14,
   "leagueRank": 259,
   "rating": -5.5,
   "ratingGames": 38,
   "confidence": 88,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": -0.3,
   "playerId": "e83b9a6f-83c6-4b66-a470-a0cae4f462df"
  },
  {
   "name": "Bill Violette",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 2,
   "losses": 19,
   "pointsWon": 346,
   "totalPointsAgainst": 437,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 19,
   "clutchWins": 2,
   "clutchLosses": 7,
   "winPct": 9.5,
   "diff": -91,
   "ppg": 16.5,
   "leagueRank": 242,
   "rating": -1.9,
   "ratingGames": 21,
   "confidence": 82,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": 0.2,
   "playerId": "63eeb91c-2c9c-4dbe-8662-58fbb1d95092"
  },
  {
   "name": "Cory Mintz",
   "gender": "Male",
   "team": "Monroe",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 1,
   "losses": 10,
   "pointsWon": 173,
   "totalPointsAgainst": 229,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 10,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 9.1,
   "diff": -56,
   "ppg": 15.7,
   "leagueRank": 268,
   "rating": -3.2,
   "ratingGames": 11,
   "confidence": 69,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.4,
   "playerId": "33feb337-f2ab-4e6d-819b-9535ec743685"
  },
  {
   "name": "Ian Kohn",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 3,
   "losses": 31,
   "pointsWon": 498,
   "totalPointsAgainst": 708,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 31,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 8.8,
   "diff": -210,
   "ppg": 14.6,
   "leagueRank": 256,
   "rating": -3.5,
   "ratingGames": 34,
   "confidence": 87,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 0.5,
   "playerId": "ef0e9803-0038-4cb9-ad16-a55c54f00339"
  },
  {
   "name": "John Pineda",
   "gender": "Male",
   "team": "Flemington",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 2,
   "losses": 21,
   "pointsWon": 342,
   "totalPointsAgainst": 464,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 21,
   "clutchWins": 0,
   "clutchLosses": 6,
   "winPct": 8.7,
   "diff": -122,
   "ppg": 14.9,
   "leagueRank": 253,
   "rating": -2.6,
   "ratingGames": 23,
   "confidence": 82,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 1,
   "playerId": "099e3831-88c1-4907-9869-f193db58b64b"
  },
  {
   "name": "Madhu Raghunathan",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 1,
   "losses": 13,
   "pointsWon": 207,
   "totalPointsAgainst": 292,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 13,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 7.1,
   "diff": -85,
   "ppg": 14.8,
   "leagueRank": 266,
   "rating": -4.1,
   "ratingGames": 14,
   "confidence": 74,
   "strengthOfPartners": -2,
   "strengthOfOpponents": -0.6,
   "playerId": "f008538f-037a-4850-ad1d-fd9108382a81"
  },
  {
   "name": "Big G",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 3,
   "losses": 39,
   "pointsWon": 648,
   "totalPointsAgainst": 873,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 39,
   "clutchWins": 1,
   "clutchLosses": 10,
   "winPct": 7.1,
   "diff": -225,
   "ppg": 15.4,
   "leagueRank": 251,
   "rating": -2.8,
   "ratingGames": 42,
   "confidence": 89,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 0.3,
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
   "leagueRank": 246,
   "rating": -2.1,
   "ratingGames": 19,
   "confidence": 79,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.5,
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
   "leagueRank": 261,
   "rating": -2.2,
   "ratingGames": 19,
   "confidence": 79,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": 1.1,
   "playerId": "8767c73e-fa5a-4e68-9ded-850b7ab50693"
  },
  {
   "name": "Buyi Zhang",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 1,
   "losses": 19,
   "pointsWon": 292,
   "totalPointsAgainst": 418,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 19,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 5,
   "diff": -126,
   "ppg": 14.6,
   "leagueRank": 258,
   "rating": -2.9,
   "ratingGames": 20,
   "confidence": 79,
   "strengthOfPartners": -2,
   "strengthOfOpponents": 0.4,
   "playerId": "abd55992-7237-4a92-817d-3d39388369c9"
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
   "leagueRank": 287,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "8f9053fa-7f27-4269-9b57-24af31d53222"
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
   "leagueRank": 298,
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
   "leagueRank": 288,
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
   "leagueRank": 282,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "d88f1d1e-be4e-449e-b9b2-c468753e1dd3"
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
   "leagueRank": 281,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "f59307d0-0495-421c-8cee-28c2e2b56bcf"
  },
  {
   "name": "Raymond Romulo",
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
   "leagueRank": 294,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "15b15e13-3415-47e0-aa4f-cba485205b89"
  },
  {
   "name": "Vyas Maddukuri",
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
   "leagueRank": 291,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "4c208ee3-c374-413b-8941-b1ad278acfb5"
  },
  {
   "name": "John Zhong",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 3,
   "wins": 0,
   "losses": 3,
   "pointsWon": 49,
   "totalPointsAgainst": 63,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -14,
   "ppg": 16.3,
   "leagueRank": 276,
   "rating": -2.8,
   "ratingGames": 3,
   "confidence": 39,
   "strengthOfPartners": -2.1,
   "strengthOfOpponents": -1.9,
   "playerId": "6bfd212d-c7b4-4eff-ae3c-5e9424080282"
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
   "leagueRank": 277,
   "rating": -2.7,
   "ratingGames": 4,
   "confidence": 46,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.8,
   "playerId": "e1859a0e-b6a3-451b-a14e-f4d978fc520d"
  },
  {
   "name": "Simon Darlington",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 0,
   "losses": 8,
   "pointsWon": 115,
   "totalPointsAgainst": 168,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 8,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -53,
   "ppg": 14.4,
   "leagueRank": 274,
   "rating": -3.2,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 0.3,
   "playerId": "9ae1e374-e878-450b-9552-e80472590d9e"
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
   "leagueRank": 272,
   "rating": -5.2,
   "ratingGames": 9,
   "confidence": 65,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -0.8,
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
   "leagueRank": 275,
   "rating": -2.4,
   "ratingGames": 8,
   "confidence": 62,
   "strengthOfPartners": -2.2,
   "strengthOfOpponents": 1.1,
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
   "leagueRank": 271,
   "rating": -4.6,
   "ratingGames": 11,
   "confidence": 70,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": 0.3,
   "playerId": "3e2aac0c-7c01-4c71-a288-900b54059019"
  }
 ],
 "teams": [
  {
   "name": "Pickleball HQ",
   "w": 7,
   "l": 0,
   "pf": 4543,
   "pa": 4026,
   "gw": 156,
   "gl": 68,
   "diff": 517,
   "gameDiff": 88,
   "power": 1,
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
     156,
     68
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Bounce Malvern",
   "w": 6,
   "l": 0,
   "pf": 3851,
   "pa": 3222,
   "gw": 143,
   "gl": 49,
   "diff": 629,
   "gameDiff": 94,
   "power": 1.4,
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
     143,
     49
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Montville",
   "w": 6,
   "l": 0,
   "pf": 3911,
   "pa": 3387,
   "gw": 139,
   "gl": 53,
   "diff": 524,
   "gameDiff": 86,
   "power": 1.3,
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
     139,
     53
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Pickleball Kingdom Hillsborough",
   "w": 4,
   "l": 1,
   "pf": 3182,
   "pa": 2843,
   "gw": 99,
   "gl": 61,
   "diff": 339,
   "gameDiff": 38,
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
     99,
     61
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Premiere",
   "w": 4,
   "l": 1,
   "pf": 3152,
   "pa": 2867,
   "gw": 98,
   "gl": 62,
   "diff": 285,
   "gameDiff": 36,
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
     98,
     62
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
   "l": 2,
   "pf": 3802,
   "pa": 3531,
   "gw": 120,
   "gl": 72,
   "diff": 271,
   "gameDiff": 48,
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
     120,
     72
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Bounce Tempest",
   "w": 4,
   "l": 2,
   "pf": 3729,
   "pa": 3559,
   "gw": 110,
   "gl": 82,
   "diff": 170,
   "gameDiff": 28,
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
     110,
     82
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Pickleball Kingdom Lehigh Valley",
   "w": 3,
   "l": 2,
   "pf": 3220,
   "pa": 2922,
   "gw": 95,
   "gl": 65,
   "diff": 298,
   "gameDiff": 30,
   "power": 0.9,
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
     95,
     65
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Home Court",
   "w": 3,
   "l": 3,
   "pf": 3768,
   "pa": 3568,
   "gw": 115,
   "gl": 77,
   "diff": 200,
   "gameDiff": 38,
   "power": 0.4,
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
     115,
     77
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "APC Garden State",
   "w": 3,
   "l": 3,
   "pf": 3588,
   "pa": 3577,
   "gw": 91,
   "gl": 101,
   "diff": 11,
   "gameDiff": -10,
   "power": 0.1,
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
     91,
     101
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
   "l": 3,
   "pf": 3501,
   "pa": 3705,
   "gw": 82,
   "gl": 110,
   "diff": -204,
   "gameDiff": -28,
   "power": -0.5,
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
     82,
     110
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
   "l": 3,
   "pf": 2892,
   "pa": 3084,
   "gw": 69,
   "gl": 91,
   "diff": -192,
   "gameDiff": -22,
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
     69,
     91
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
   "l": 4,
   "pf": 3631,
   "pa": 3584,
   "gw": 95,
   "gl": 97,
   "diff": 47,
   "gameDiff": -2,
   "power": -0.1,
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
     95,
     97
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Monroe",
   "w": 2,
   "l": 4,
   "pf": 3616,
   "pa": 3855,
   "gw": 76,
   "gl": 116,
   "diff": -239,
   "gameDiff": -40,
   "power": -0.1,
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
     76,
     116
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
   "l": 5,
   "pf": 3531,
   "pa": 3722,
   "gw": 81,
   "gl": 111,
   "diff": -191,
   "gameDiff": -30,
   "power": 0.1,
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
     81,
     111
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
   "l": 5,
   "pf": 3213,
   "pa": 3861,
   "gw": 49,
   "gl": 143,
   "diff": -648,
   "gameDiff": -94,
   "power": -1.4,
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
     49,
     143
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Flemington",
   "w": 1,
   "l": 6,
   "pf": 3845,
   "pa": 4366,
   "gw": 74,
   "gl": 150,
   "diff": -521,
   "gameDiff": -76,
   "power": -0.9,
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
     74,
     150
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
   "l": 6,
   "pf": 3358,
   "pa": 3907,
   "gw": 55,
   "gl": 137,
   "diff": -549,
   "gameDiff": -82,
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
     55,
     137
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
   "l": 6,
   "pf": 3216,
   "pa": 3963,
   "gw": 45,
   "gl": 147,
   "diff": -747,
   "gameDiff": -102,
   "power": -1.6,
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
     45,
     147
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
   "synergy": 3.7,
   "avgActual": 8,
   "avgExpected": 0.6,
   "aId": "176df588-c3ff-4b50-a66a-4df99647254b",
   "bId": "8fea334f-ad12-4c45-b67d-a127ec551f4e"
  },
  {
   "a": "Eric Berlinger",
   "b": "Craig Butler",
   "team": "Flemington",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 3.2,
   "avgActual": 11,
   "avgExpected": 4.6,
   "aId": "2fda2042-6613-42f8-ad93-c3cff9a58f3e",
   "bId": "b50c51e8-3ce3-44ec-98e7-6cc11a705f17"
  },
  {
   "a": "Ken Weinstein",
   "b": "Vincent Rigoglioso",
   "team": "Bounce Tempest",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 2.5,
   "avgActual": 5.5,
   "avgExpected": 0.5,
   "aId": "d07bda42-9d33-4c03-a7f3-a8a468083bdd",
   "bId": "d0c9ae50-0cdc-4f72-9ece-0b996f323f73"
  },
  {
   "a": "Stephen Fredericksen",
   "b": "Salman Saad",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 2.5,
   "avgActual": 5.3,
   "avgExpected": -0.4,
   "aId": "622cb64f-dd0c-4bff-8c19-81d287977c53",
   "bId": "f7c4d103-d246-456d-8fd5-6418c6a0e002"
  },
  {
   "a": "Joseph Lynskey",
   "b": "Nacio Marshall",
   "team": "Premiere",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.4,
   "avgActual": 8,
   "avgExpected": 2.3,
   "aId": "0e8c08b7-0e58-434b-8830-f37779f821dc",
   "bId": "b4af1ed9-5d7e-4212-a206-3c9a97b6958a"
  },
  {
   "a": "Michael Barndt",
   "b": "David Reyes",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.4,
   "avgActual": 7.7,
   "avgExpected": 2,
   "aId": "50853eee-28e0-4380-b379-35935eb2115a",
   "bId": "adc043ce-7b2d-4ae9-87e0-c927f28c473a"
  },
  {
   "a": "Yashraj Kurani",
   "b": "Elliott Albanese",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 2.4,
   "avgActual": 9,
   "avgExpected": 4.3,
   "aId": "63950363-4747-4faf-b89a-eb88f8b9e81d",
   "bId": "6af88387-5e2b-4ea7-b732-22885e4931a8"
  },
  {
   "a": "Matt Inzerillo",
   "b": "Daniel Dechristopher",
   "team": "APC Garden State",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 2.2,
   "avgActual": 10.8,
   "avgExpected": 6.3,
   "aId": "51ceabf9-8258-4835-9835-c7d915220185",
   "bId": "899ba1d1-37e5-4ad6-8daa-f726376776e5"
  },
  {
   "a": "George Vega Jr",
   "b": "Ritesh Patel",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.2,
   "avgActual": 6,
   "avgExpected": 0.9,
   "aId": "be19bf10-b8a5-4626-8c10-f13ac708231d",
   "bId": "e2f86c8b-755e-42a0-8828-f2965f4fbbe7"
  },
  {
   "a": "Steppan Konoplev",
   "b": "Paul Chantler",
   "team": "Dill Dinkers Newport",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 2.1,
   "avgActual": 1.8,
   "avgExpected": -2.4,
   "aId": "8f076d51-25ba-4203-97f8-12194ba5b001",
   "bId": "b1f8fd31-d4ed-4824-9ae6-174e5e2f21c2"
  },
  {
   "a": "Luca Hendrickson",
   "b": "David Wheeler",
   "team": "Pickleball HQ",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 2.1,
   "avgActual": 7.8,
   "avgExpected": 3.5,
   "aId": "bd14255e-c654-49a4-99a1-26e02c67c7c7",
   "bId": "d335be77-6a7a-4f96-91c6-0a5cbcc8ea9f"
  },
  {
   "a": "Siva Indupuru",
   "b": "Hua Lin",
   "team": "Dill Dinkers Freehold",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 2.1,
   "avgActual": 3,
   "avgExpected": -0.5,
   "aId": "5f264528-efdb-4bda-88ed-8003f98c1c9b",
   "bId": "6b263caa-80f7-40d2-9248-559f91ffe71e"
  },
  {
   "a": "Umang Pathak",
   "b": "Sandeep Malhotra",
   "team": "Montville",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.1,
   "avgActual": 8,
   "avgExpected": 3,
   "aId": "30ecad69-b82a-45aa-94c5-f0f7869a0d12",
   "bId": "c24596e0-9eeb-4195-b1ff-d4ca3e418d84"
  },
  {
   "a": "Aaron Chan",
   "b": "Venu Yengala",
   "team": "Pickleball Kingdom Hamilton",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 2.1,
   "avgActual": -0.3,
   "avgExpected": -3.7,
   "aId": "57666861-23d0-4809-9556-b646579f2fd6",
   "bId": "b4cbf5ad-5c2c-46bf-bf50-f50683964b46"
  },
  {
   "a": "Leon Li",
   "b": "John Coyle",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 2.1,
   "avgActual": 3,
   "avgExpected": -2,
   "aId": "528de93e-9cf4-480d-a9ba-5b20f6f23f87",
   "bId": "54d78d2c-c0d7-42c0-aef4-567311f2e51e"
  },
  {
   "a": "Elliott Albanese",
   "b": "Akash Raju",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.1,
   "avgActual": 11.3,
   "avgExpected": 6.3,
   "aId": "6af88387-5e2b-4ea7-b732-22885e4931a8",
   "bId": "a2fc30f9-b494-4781-900e-1e0b7d531f02"
  },
  {
   "a": "Sean Diamond",
   "b": "Edward Fu",
   "team": "PickleRage Union County",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 2,
   "avgActual": 4.5,
   "avgExpected": 0.5,
   "aId": "635ba257-e1ed-4db3-8303-5f241388437e",
   "bId": "b243c9db-ff2c-4db7-bcfd-27f3b0e7b6f1"
  },
  {
   "a": "Alex Kustas",
   "b": "Daniel Hadley",
   "team": "Jersey Devil",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 2,
   "avgActual": 7.5,
   "avgExpected": 3.6,
   "aId": "08b7041c-a90b-47ba-802a-5f71e6b98999",
   "bId": "23adcd68-130d-4176-b367-d3cd31260d21"
  },
  {
   "a": "Neil Dedhia",
   "b": "Ping Peng",
   "team": "Pickle House",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 2,
   "avgActual": 5,
   "avgExpected": 1.3,
   "aId": "20f3e907-41d8-40bb-8cef-cb6fed84a2aa",
   "bId": "7af65ce9-d7e3-4d00-b19b-653e6d2dc8d9"
  },
  {
   "a": "Daniel Borgia",
   "b": "Jimmy Lee",
   "team": "Bounce Tempest",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.9,
   "avgActual": 4.5,
   "avgExpected": 0.7,
   "aId": "ae3cd925-c856-44dd-9cf5-3a2bd343adf2",
   "bId": "f2c53e42-1eac-48dd-9c93-682ec5c1ac98"
  },
  {
   "a": "Niman Ahmeti",
   "b": "Jimmy Ramja",
   "team": "Pickleball HQ",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.9,
   "avgActual": 4.7,
   "avgExpected": 0.2,
   "aId": "40681083-620d-4293-829f-91121323135c",
   "bId": "ade57877-7c11-4a46-88bf-789a50906901"
  },
  {
   "a": "Kevin Lew",
   "b": "Hua Lin",
   "team": "Dill Dinkers Freehold",
   "n": 10,
   "w": 9,
   "l": 1,
   "synergy": 1.9,
   "avgActual": 3.1,
   "avgExpected": 0.4,
   "aId": "03886b04-b474-4dda-b7f3-eb4f4954399c",
   "bId": "6b263caa-80f7-40d2-9248-559f91ffe71e"
  },
  {
   "a": "Anthony Simonetti",
   "b": "Noah Ludwigsen",
   "team": "Pickleball HQ",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 1.9,
   "avgActual": 6.2,
   "avgExpected": 3,
   "aId": "3a2b64a1-6eb6-41e4-92fe-8da3d95af11b",
   "bId": "67f9503a-202f-4982-8e97-9b3383a35aee"
  },
  {
   "a": "Dan Carpenter",
   "b": "Jonathan Carter",
   "team": "Jersey Devil",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.9,
   "avgActual": 5,
   "avgExpected": 0.6,
   "aId": "2811dd08-7b50-455b-bc23-46b064a912eb",
   "bId": "33fe293d-5913-41af-8f89-4a431ed92ab7"
  },
  {
   "a": "Rick Wickenheisser",
   "b": "Josh Rito",
   "team": "Flemington",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.9,
   "avgActual": -0.2,
   "avgExpected": -4,
   "aId": "741048e8-2c91-4466-bb1c-1a624d1dabd9",
   "bId": "a4c54a14-35b4-4b90-aabd-3d81ad719f4d"
  },
  {
   "a": "Tyler Bayly",
   "b": "Uzoma Nwankwo",
   "team": "APC Garden State",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 1.8,
   "avgActual": 5.7,
   "avgExpected": 2.9,
   "aId": "642b7fc5-f304-459a-889e-e726dc9edeab",
   "bId": "c6482905-6954-4241-a6c3-ba077c367846"
  },
  {
   "a": "Ren Macalalag",
   "b": "Vinay Mutt",
   "team": "PickleRage Union County",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 1.8,
   "avgActual": 1.8,
   "avgExpected": -1.5,
   "aId": "24db47b3-dedc-418d-9210-3b5fea1952da",
   "bId": "7caafc32-1aed-4fb7-b145-baf82cbbe2d2"
  },
  {
   "a": "Sean Diamond",
   "b": "Jack Barry",
   "team": "PickleRage Union County",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.8,
   "avgActual": 3.3,
   "avgExpected": -0.8,
   "aId": "635ba257-e1ed-4db3-8303-5f241388437e",
   "bId": "763342e5-4d13-45b7-8630-9d840cb7b8b3"
  },
  {
   "a": "Larry Minsky",
   "b": "Arnold Poblete",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.8,
   "avgActual": 3.3,
   "avgExpected": -0.9,
   "aId": "41f7a2a8-8fcd-4282-b501-cd5b83ec7440",
   "bId": "c19e964a-d126-4e9f-9ce4-83c315f2f535"
  },
  {
   "a": "Paul Perumaly",
   "b": "David Brandolph",
   "team": "Bounce Tempest",
   "n": 6,
   "w": 6,
   "l": 0,
   "synergy": 1.7,
   "avgActual": 6.7,
   "avgExpected": 3.8,
   "aId": "9d9eff5c-bb8e-47b7-b1e6-7e4c7055bb8b",
   "bId": "be10853a-1f2c-4b56-8fd7-902ddc686401"
  },
  {
   "a": "Dilip Patel",
   "b": "Jaiveer Narwal",
   "team": "Pickleball Kingdom Hamilton",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.7,
   "avgActual": 1,
   "avgExpected": -2.3,
   "aId": "7573445f-7dbd-4c2f-867a-ae95ae7ed168",
   "bId": "96042156-2ff1-44d0-9b96-8448964b4981"
  },
  {
   "a": "Erik Reilly",
   "b": "Ben Cortes",
   "team": "Dill Dinkers Freehold",
   "n": 12,
   "w": 7,
   "l": 5,
   "synergy": 1.7,
   "avgActual": 0.8,
   "avgExpected": -1.5,
   "aId": "479815f2-1e14-4b96-9423-d99c15b2fe2b",
   "bId": "4d89659f-a86c-4416-93f2-5c868fe0e984"
  },
  {
   "a": "Tom Kresky",
   "b": "Christopher Uston",
   "team": "Jersey Devil",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.7,
   "avgActual": 4.5,
   "avgExpected": 1.2,
   "aId": "81875a5e-2b65-4152-bace-b4c96517579d",
   "bId": "e1f6c6fa-db86-4fed-9faa-dbc2fe29f373"
  },
  {
   "a": "Alessio Muscara",
   "b": "Mike Leach",
   "team": "Picklr Newtown",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.6,
   "avgActual": 5.4,
   "avgExpected": 2.5,
   "aId": "4a5131e4-a912-4913-8ff5-9281e53c6974",
   "bId": "a63211cf-31ed-448e-8c87-2aaaf8e84a7b"
  },
  {
   "a": "Matt Enz",
   "b": "Jamison Rowles",
   "team": "Bounce Malvern",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 1.6,
   "avgActual": 7.2,
   "avgExpected": 4.3,
   "aId": "683d1fdd-2fa0-4775-a8dd-0f733aa9f1a3",
   "bId": "cae7c2db-b4d5-4927-9c44-ff92176b5507"
  },
  {
   "a": "Matthew Carrington",
   "b": "Michael Vincent",
   "team": "Home Court",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.6,
   "avgActual": 5.8,
   "avgExpected": 2.5,
   "aId": "6a2f3777-38b2-4f02-b550-ce38395914d2",
   "bId": "7f44421c-476c-4857-99ed-3376b32289ca"
  },
  {
   "a": "Jason Feldman",
   "b": "Daniel Antonelli",
   "team": "Premiere",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.5,
   "avgActual": 9.3,
   "avgExpected": 5.8,
   "aId": "5636cdc5-7a65-4202-abbb-5999eee35ab3",
   "bId": "cd0eb94b-4d32-4ba9-bcdc-3fba205d90f0"
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
   "avgExpected": 2.6,
   "aId": "639af9e8-08fd-496d-84d6-6e7859e8c6d3",
   "bId": "a8585e9c-872e-466c-9583-9680e557f757"
  },
  {
   "a": "Franklin Lupianez",
   "b": "David Tabacco",
   "team": "Flemington",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 1.5,
   "avgActual": 0.6,
   "avgExpected": -2.1,
   "aId": "17caef8b-84d4-4052-9695-7c74190925a1",
   "bId": "717d97f0-4f08-476f-9c53-7595605bc0b0"
  },
  {
   "a": "Keith Richard",
   "b": "Aleks Mirkovic",
   "team": "Dill Dinkers Newport",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.5,
   "avgActual": 2,
   "avgExpected": -1.6,
   "aId": "cb2183c7-8c7b-4ebf-93da-66aeabe13d3b",
   "bId": "f006963a-4e8e-433d-8c9a-e278ac32ea9c"
  },
  {
   "a": "Brandon Dejesus",
   "b": "Christopher Uston",
   "team": "Jersey Devil",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 1.5,
   "avgActual": 4.2,
   "avgExpected": 1.6,
   "aId": "d50feac2-f147-47d2-8930-99b21b2842ba",
   "bId": "e1f6c6fa-db86-4fed-9faa-dbc2fe29f373"
  },
  {
   "a": "Timothy Lynskey",
   "b": "Gary White",
   "team": "Premiere",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 1.5,
   "avgActual": 2.6,
   "avgExpected": -0.2,
   "aId": "718c6948-a987-43bb-a1f3-cf7aead75edb",
   "bId": "9a26eab9-96be-45e1-b380-2845a0e8e668"
  },
  {
   "a": "Nicholas Lugo",
   "b": "Jason Mcmanmon",
   "team": "Monroe",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 2.2,
   "avgExpected": -0.4,
   "aId": "8f9be7cc-3ddf-436f-8727-02cbdd0d453f",
   "bId": "9adf9c4e-91c0-4483-af44-9ad4a86a81ce"
  },
  {
   "a": "Kurt Skalamera",
   "b": "Jason Mcmanmon",
   "team": "Monroe",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 1.4,
   "avgActual": 0.2,
   "avgExpected": -2.3,
   "aId": "04000200-8214-42ff-9a0d-2189ffaccd42",
   "bId": "9adf9c4e-91c0-4483-af44-9ad4a86a81ce"
  },
  {
   "a": "Dan Ladislaw",
   "b": "Jordan Demcher",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 5,
   "avgExpected": 2.2,
   "aId": "31b78615-afb3-4856-8cb1-de2b8d43a115",
   "bId": "6d1beb10-bd5c-456f-95b5-1823752e8c62"
  },
  {
   "a": "Rajeeth Nadig",
   "b": "Sree Harsha Konduru",
   "team": "Pickle House",
   "n": 8,
   "w": 8,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 5.5,
   "avgExpected": 3.4,
   "aId": "20c15f19-5b27-4c9f-bc75-da3d516a015b",
   "bId": "439cf2c1-044c-450c-9dcc-4fdeafbb81cd"
  },
  {
   "a": "Ayon Codner",
   "b": "Rohit Mankotia",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 1.4,
   "avgActual": 4,
   "avgExpected": 1.7,
   "aId": "497b0077-b7ae-4025-ad32-94c9da47ab80",
   "bId": "541e3e2d-76eb-4cd3-9bfe-9f94c0b9cdeb"
  },
  {
   "a": "Ayon Codner",
   "b": "Eric Ruiz",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 9,
   "w": 6,
   "l": 3,
   "synergy": 1.4,
   "avgActual": 2.7,
   "avgExpected": 0.6,
   "aId": "497b0077-b7ae-4025-ad32-94c9da47ab80",
   "bId": "505e9bce-f386-4a4f-9a41-a1d7e0bb0527"
  },
  {
   "a": "Paul Chantler",
   "b": "Ian Diamond",
   "team": "Dill Dinkers Newport",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.4,
   "avgActual": 0.5,
   "avgExpected": -2.3,
   "aId": "b1f8fd31-d4ed-4824-9ae6-174e5e2f21c2",
   "bId": "f5a96445-7d1c-459b-8642-12a5d11554db"
  },
  {
   "a": "Kevin Sheehan",
   "b": "Ricky Jutkiewicz",
   "team": "Home Court",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 3.7,
   "avgExpected": 0.5,
   "aId": "115f3958-d110-41f0-a04c-aa2f8e17a54f",
   "bId": "a24bc2af-aca9-45dd-a827-12fb12f7b784"
  },
  {
   "a": "Jason Mcmanmon",
   "b": "Jacob Rosengarten",
   "team": "Monroe",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": 1.3,
   "avgActual": -0.6,
   "avgExpected": -2.6,
   "aId": "9adf9c4e-91c0-4483-af44-9ad4a86a81ce",
   "bId": "b2f8ea85-7734-47a2-8ce7-bd968b3a51bc"
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
   "avgExpected": 2.6,
   "aId": "3196f425-e79a-4def-b7c3-bc3205976ba3",
   "bId": "e1f41428-436c-436e-b752-af9cead487be"
  },
  {
   "a": "Graham Heavenrich",
   "b": "Harrison Bohrer",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.3,
   "avgActual": 5.3,
   "avgExpected": 2.4,
   "aId": "27d8a10f-ee9b-467c-bf8c-4872ce63de90",
   "bId": "8a4095e6-2a3e-4a88-a6d2-8c1da135ce42"
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
   "avgExpected": 2.6,
   "aId": "51ceabf9-8258-4835-9835-c7d915220185",
   "bId": "bd958367-8cce-4f24-ba5a-208bac9b42b0"
  },
  {
   "a": "Alessio Muscara",
   "b": "Gary Garretson",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.3,
   "avgActual": 8.3,
   "avgExpected": 5.2,
   "aId": "4a5131e4-a912-4913-8ff5-9281e53c6974",
   "bId": "d4126276-6b83-42be-b943-9957df46992c"
  },
  {
   "a": "Jose Campos",
   "b": "Niman Ahmeti",
   "team": "Pickleball HQ",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 2.8,
   "avgExpected": 0.4,
   "aId": "197e3b9a-eded-4a87-8391-13a7c6d18c8f",
   "bId": "40681083-620d-4293-829f-91121323135c"
  },
  {
   "a": "Bruce Nguyen",
   "b": "Chris Machuzak",
   "team": "APC Garden State",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 1.3,
   "avgActual": 3.2,
   "avgExpected": 0.8,
   "aId": "33233dc6-b78e-4deb-88d4-2742aacf5eb9",
   "bId": "dba4c9d8-6ffb-49ae-99d1-79c341a68de7"
  },
  {
   "a": "Timothy Lynskey",
   "b": "Daniel Antonelli",
   "team": "Premiere",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 5,
   "avgExpected": 2.7,
   "aId": "718c6948-a987-43bb-a1f3-cf7aead75edb",
   "bId": "cd0eb94b-4d32-4ba9-bcdc-3fba205d90f0"
  },
  {
   "a": "Sushil Rijhwani",
   "b": "Avneesh Agarwal",
   "team": "Pickle House",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.2,
   "avgActual": 2.5,
   "avgExpected": 0.2,
   "aId": "8fea334f-ad12-4c45-b67d-a127ec551f4e",
   "bId": "f0ac7d85-0e7b-4f28-80fe-3282c3c875ed"
  },
  {
   "a": "Bill Olderman",
   "b": "Meet Thakkar",
   "team": "Montville",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 3.3,
   "avgExpected": 0.8,
   "aId": "30c847e2-9b5e-4ad7-851d-9d624f94a11b",
   "bId": "f68fa078-e500-4427-9d65-338e840f318c"
  },
  {
   "a": "Kevin Tran",
   "b": "Samuel Kashefska",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 7,
   "w": 7,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 5.7,
   "avgExpected": 3.8,
   "aId": "5a604a32-f8bf-45a8-b6b3-ef2922e0eeaf",
   "bId": "e4a31aff-39d6-49b3-95c4-131421e956a0"
  },
  {
   "a": "Bryan Mccourt",
   "b": "Robert Huntley",
   "team": "Home Court",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": 1.2,
   "avgActual": 0.5,
   "avgExpected": -1.3,
   "aId": "74f9fe34-f8c5-49dd-b504-939d0b4f5aaa",
   "bId": "b5dec967-9e3a-49b4-b136-597711d099cc"
  },
  {
   "a": "Yashraj Kurani",
   "b": "George Vega Jr",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 1.2,
   "avgActual": 2.2,
   "avgExpected": 0.1,
   "aId": "63950363-4747-4faf-b89a-eb88f8b9e81d",
   "bId": "be19bf10-b8a5-4626-8c10-f13ac708231d"
  },
  {
   "a": "Ali Bhimji",
   "b": "Michael Barndt",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 3.5,
   "avgExpected": 1.1,
   "aId": "3651f648-493a-4517-8085-a8b9cb086c07",
   "bId": "50853eee-28e0-4380-b379-35935eb2115a"
  },
  {
   "a": "Corey Chen",
   "b": "Jun Zhi Tan",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 6.2,
   "avgExpected": 4,
   "aId": "b549a93c-acec-4419-9e30-5d8375518d2d",
   "bId": "d0e16b4b-7708-425d-ae9d-e3992c4e7fe2"
  },
  {
   "a": "Stephen Fredericksen",
   "b": "Jacob Rosengarten",
   "team": "Monroe",
   "n": 8,
   "w": 3,
   "l": 5,
   "synergy": 1.1,
   "avgActual": -1.9,
   "avgExpected": -3.6,
   "aId": "622cb64f-dd0c-4bff-8c19-81d287977c53",
   "bId": "b2f8ea85-7734-47a2-8ce7-bd968b3a51bc"
  },
  {
   "a": "Franklin Yiu",
   "b": "Sean Majury",
   "team": "Allstar Pickler",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 1.1,
   "avgActual": -0.3,
   "avgExpected": -2.1,
   "aId": "020affa0-bff4-49cb-94c0-a9eb9ba09b77",
   "bId": "e41c0cda-fb97-4912-8e8a-fa99ff1725d0"
  },
  {
   "a": "Brandon Dejesus",
   "b": "Frederick Cox",
   "team": "Jersey Devil",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.1,
   "avgActual": 1.5,
   "avgExpected": -0.6,
   "aId": "d50feac2-f147-47d2-8930-99b21b2842ba",
   "bId": "e8aee14f-dbc4-4e5c-be4a-4f948e2e13fc"
  },
  {
   "a": "Derek Livingston",
   "b": "Tim Bruno",
   "team": "Jersey Devil",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": 1.1,
   "avgActual": 4.5,
   "avgExpected": 2.9,
   "aId": "593561e7-e873-4261-85ee-25b6ab524bfa",
   "bId": "ef5a4f7c-58d1-42fa-81c2-1f9f09a60a0f"
  },
  {
   "a": "Dhruv Dobariya",
   "b": "Ziyu Huang",
   "team": "Pickleball Kingdom Hamilton",
   "n": 9,
   "w": 5,
   "l": 4,
   "synergy": 1.1,
   "avgActual": -0.6,
   "avgExpected": -2.2,
   "aId": "ac44fd3c-0c87-47aa-bf26-4333b632f524",
   "bId": "d06d8b3c-72d6-4ae3-ade8-d7cb7cbd70f7"
  },
  {
   "a": "Bennett Pereira",
   "b": "Jitendra Arora",
   "team": "Pickle House",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 4.7,
   "avgExpected": 2.2,
   "aId": "6a2ea39b-8b67-4cdf-83f7-c16fb3224655",
   "bId": "a117b66b-f319-4fc0-8ee2-feb3f17767d0"
  },
  {
   "a": "Francis Thai",
   "b": "Andy Knight",
   "team": "PickleRage Union County",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 1.1,
   "avgActual": -6.2,
   "avgExpected": -8.5,
   "aId": "a78758b7-fe50-4865-b059-83a9d177e857",
   "bId": "fd8fa2a4-7f58-41d2-897e-e7df225c4ad0"
  },
  {
   "a": "Jeff Laniado",
   "b": "Cesar Santamaria-Aranda",
   "team": "Montville",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 3,
   "avgExpected": 1.1,
   "aId": "06d52e99-941a-4ced-9968-f56e6075105a",
   "bId": "fbde98cb-9eee-431b-b164-244249c26728"
  },
  {
   "a": "Michael Barndt",
   "b": "Cullen Curley",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 1.1,
   "avgActual": 3.8,
   "avgExpected": 2,
   "aId": "50853eee-28e0-4380-b379-35935eb2115a",
   "bId": "8cebf901-66b9-41d0-963d-12dac7334c8f"
  },
  {
   "a": "Jose Campos",
   "b": "Kyle Korman",
   "team": "Pickleball HQ",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.1,
   "avgActual": 6,
   "avgExpected": 3.3,
   "aId": "197e3b9a-eded-4a87-8391-13a7c6d18c8f",
   "bId": "d61a3828-6dfc-480a-b26a-534b0fe58268"
  },
  {
   "a": "David Wheeler",
   "b": "Kyle Korman",
   "team": "Pickleball HQ",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 5.6,
   "avgExpected": 3.7,
   "aId": "d335be77-6a7a-4f96-91c6-0a5cbcc8ea9f",
   "bId": "d61a3828-6dfc-480a-b26a-534b0fe58268"
  },
  {
   "a": "Jesse Pettit",
   "b": "David Fiscella",
   "team": "Dill Dinkers Newport",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.1,
   "avgActual": 2,
   "avgExpected": -0.6,
   "aId": "d6e30691-3b20-465b-8fa8-560017c20c15",
   "bId": "fa546fa2-45f5-4ad6-91ec-b6f6044ad8b0"
  },
  {
   "a": "Harsh Upadhyaya",
   "b": "Ashish Kumar",
   "team": "Pickleball Kingdom Hamilton",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.1,
   "avgActual": 6.3,
   "avgExpected": 3.8,
   "aId": "3b9648e1-481c-4007-9932-d8df648f7bab",
   "bId": "5df02573-21d4-40ea-8b41-f81372a474b3"
  },
  {
   "a": "Mathew Yang",
   "b": "Larry Minsky",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 0.7,
   "avgExpected": -2,
   "aId": "12ec758b-f05d-40ec-b082-a76f07cbe792",
   "bId": "41f7a2a8-8fcd-4282-b501-cd5b83ec7440"
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
   "a": "Andrew Neave",
   "b": "Jordan Demcher",
   "team": "Bounce Malvern",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 1,
   "avgActual": 4.7,
   "avgExpected": 3.2,
   "aId": "2f7d6c14-4f06-470b-a4ba-f28199e823b0",
   "bId": "6d1beb10-bd5c-456f-95b5-1823752e8c62"
  },
  {
   "a": "Jonathan Carter",
   "b": "Derek Livingston",
   "team": "Jersey Devil",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": 1,
   "avgActual": 2.3,
   "avgExpected": 0.8,
   "aId": "33fe293d-5913-41af-8f89-4a431ed92ab7",
   "bId": "593561e7-e873-4261-85ee-25b6ab524bfa"
  },
  {
   "a": "Steppan Konoplev",
   "b": "Ian Diamond",
   "team": "Dill Dinkers Newport",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1,
   "avgActual": -0.3,
   "avgExpected": -2.6,
   "aId": "8f076d51-25ba-4203-97f8-12194ba5b001",
   "bId": "f5a96445-7d1c-459b-8642-12a5d11554db"
  },
  {
   "a": "John Fallone",
   "b": "Josh Fink",
   "team": "Flemington",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 1,
   "avgActual": -0.8,
   "avgExpected": -2.5,
   "aId": "5127c0b9-aaf8-49c5-a94f-bf92e7ae60f8",
   "bId": "6a70d918-9cd3-47d0-a40a-901a406452b6"
  },
  {
   "a": "Marc Padre",
   "b": "Jun Zhi Tan",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1,
   "avgActual": 11,
   "avgExpected": 8.6,
   "aId": "a131a707-f20e-4838-9dcf-7cecb40c2705",
   "bId": "d0e16b4b-7708-425d-ae9d-e3992c4e7fe2"
  },
  {
   "a": "J-P Lautenschlager",
   "b": "Andy Ro",
   "team": "Picklr Newtown",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 1,
   "avgActual": 0.2,
   "avgExpected": -1.6,
   "aId": "5c3659f9-08d3-4745-832b-f7dd3f8c5ae5",
   "bId": "f3f6addc-ea42-4e7b-ac54-67bf69cffeeb"
  },
  {
   "a": "Joseph Lynskey",
   "b": "Christopher Giasi",
   "team": "Premiere",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 1,
   "avgActual": 2.8,
   "avgExpected": 1.1,
   "aId": "0e8c08b7-0e58-434b-8830-f37779f821dc",
   "bId": "d6ca21c0-822e-422f-9721-34120ba90184"
  },
  {
   "a": "Varun Gurram",
   "b": "Bennett Pereira",
   "team": "Pickle House",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1,
   "avgActual": 3.3,
   "avgExpected": 1.3,
   "aId": "44864b51-f901-4470-a6bd-891495ffd132",
   "bId": "6a2ea39b-8b67-4cdf-83f7-c16fb3224655"
  },
  {
   "a": "Anthony Simonetti",
   "b": "Christopher Hendrickson",
   "team": "Pickleball HQ",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 1,
   "avgActual": 4.6,
   "avgExpected": 2.9,
   "aId": "3a2b64a1-6eb6-41e4-92fe-8da3d95af11b",
   "bId": "7fc1ed1b-4763-49b4-a077-46a92c0df3d6"
  },
  {
   "a": "Eden Ksendzovsky",
   "b": "Rob Telles",
   "team": "Premiere",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1,
   "avgActual": 1.7,
   "avgExpected": -0.7,
   "aId": "75496a80-8064-40ae-ba4b-36c156d70885",
   "bId": "d27652b4-447c-4563-b89f-19a8e1e79568"
  },
  {
   "a": "Franklin Lupianez",
   "b": "Craig Butler",
   "team": "Flemington",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1,
   "avgActual": 1.8,
   "avgExpected": -0.3,
   "aId": "17caef8b-84d4-4052-9695-7c74190925a1",
   "bId": "b50c51e8-3ce3-44ec-98e7-6cc11a705f17"
  },
  {
   "a": "Michael Dombrowiecki",
   "b": "Jacob Rosengarten",
   "team": "Monroe",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.9,
   "avgActual": -1.7,
   "avgExpected": -3.5,
   "aId": "3ac34ef1-17a5-4ab6-8d17-be4bd5a0a040",
   "bId": "b2f8ea85-7734-47a2-8ce7-bd968b3a51bc"
  },
  {
   "a": "Joseph Lynskey",
   "b": "Matthew Schwartz",
   "team": "Premiere",
   "n": 7,
   "w": 7,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 6,
   "avgExpected": 4.6,
   "aId": "0e8c08b7-0e58-434b-8830-f37779f821dc",
   "bId": "a432d3e0-17c2-4741-a4b2-7f72b7a81a5f"
  },
  {
   "a": "Andrew Neave",
   "b": "Matt Enz",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 2,
   "avgExpected": 0.3,
   "aId": "2f7d6c14-4f06-470b-a4ba-f28199e823b0",
   "bId": "683d1fdd-2fa0-4775-a8dd-0f733aa9f1a3"
  },
  {
   "a": "Bryan Mccourt",
   "b": "Jacob Yoo",
   "team": "Home Court",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 6.7,
   "avgExpected": 4.5,
   "aId": "74f9fe34-f8c5-49dd-b504-939d0b4f5aaa",
   "bId": "df0934fe-e584-4b4f-a549-a90499016d33"
  },
  {
   "a": "Ricky Jutkiewicz",
   "b": "Marc Kunesch",
   "team": "Home Court",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 3.5,
   "avgExpected": 1.7,
   "aId": "a24bc2af-aca9-45dd-a827-12fb12f7b784",
   "bId": "aeaef27d-01b3-4fb2-91f3-4be8c7602aa3"
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
   "avgExpected": 5.5,
   "aId": "439cf2c1-044c-450c-9dcc-4fdeafbb81cd",
   "bId": "7af65ce9-d7e3-4d00-b19b-653e6d2dc8d9"
  },
  {
   "a": "Harsh Upadhyaya",
   "b": "Venu Yengala",
   "team": "Pickleball Kingdom Hamilton",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.9,
   "avgActual": 0.4,
   "avgExpected": -1.3,
   "aId": "3b9648e1-481c-4007-9932-d8df648f7bab",
   "bId": "b4cbf5ad-5c2c-46bf-bf50-f50683964b46"
  },
  {
   "a": "Franklin Lupianez",
   "b": "David Shapiro",
   "team": "Flemington",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.9,
   "avgActual": 2.7,
   "avgExpected": 1.1,
   "aId": "17caef8b-84d4-4052-9695-7c74190925a1",
   "bId": "c39cd158-0c19-4819-8653-18084e6ce982"
  },
  {
   "a": "Sean Diamond",
   "b": "Dan Yang",
   "team": "PickleRage Union County",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 0.9,
   "avgActual": 1.6,
   "avgExpected": 0.1,
   "aId": "635ba257-e1ed-4db3-8303-5f241388437e",
   "bId": "667a80aa-7b06-46b5-a4ae-6989224ab5f9"
  },
  {
   "a": "Kevin Tran",
   "b": "Carlos Rincon",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 6,
   "w": 6,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 5.8,
   "avgExpected": 4.4,
   "aId": "5a604a32-f8bf-45a8-b6b3-ef2922e0eeaf",
   "bId": "9886815c-3bf4-42b1-b650-1ec17ff2c167"
  },
  {
   "a": "Umang Pathak",
   "b": "Ramam Durba",
   "team": "Montville",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 5.8,
   "avgExpected": 4,
   "aId": "30ecad69-b82a-45aa-94c5-f0f7869a0d12",
   "bId": "93280d5d-b0c8-49cd-94fe-0350f3e2dac5"
  },
  {
   "a": "Brandon Tsang",
   "b": "Meet Thakkar",
   "team": "Montville",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 5,
   "avgExpected": 3.3,
   "aId": "c80b5964-35f3-46b9-a0fa-9c3c9c673161",
   "bId": "f68fa078-e500-4427-9d65-338e840f318c"
  },
  {
   "a": "Christopher Hendrickson",
   "b": "Luca Hendrickson",
   "team": "Pickleball HQ",
   "n": 12,
   "w": 11,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 6.6,
   "avgExpected": 5.4,
   "aId": "7fc1ed1b-4763-49b4-a077-46a92c0df3d6",
   "bId": "bd14255e-c654-49a4-99a1-26e02c67c7c7"
  },
  {
   "a": "Jun Zhi Tan",
   "b": "Ritesh Patel",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 6,
   "w": 6,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 5.7,
   "avgExpected": 4.1,
   "aId": "d0e16b4b-7708-425d-ae9d-e3992c4e7fe2",
   "bId": "e2f86c8b-755e-42a0-8828-f2965f4fbbe7"
  },
  {
   "a": "Yashraj Kurani",
   "b": "Akash Raju",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 0.9,
   "avgActual": 4.4,
   "avgExpected": 3.1,
   "aId": "63950363-4747-4faf-b89a-eb88f8b9e81d",
   "bId": "a2fc30f9-b494-4781-900e-1e0b7d531f02"
  },
  {
   "a": "John Sallo",
   "b": "Saad Talat Siddiqui",
   "team": "Allstar Pickler",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.9,
   "avgActual": -0.5,
   "avgExpected": -2.2,
   "aId": "b379a353-c35e-4a6e-8ea4-ea21ebcdafa0",
   "bId": "ebfeb773-e8cd-4b6a-aafd-ee2772540168"
  },
  {
   "a": "Kurt Skalamera",
   "b": "Salman Saad",
   "team": "Monroe",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 0.8,
   "avgExpected": -1,
   "aId": "04000200-8214-42ff-9a0d-2189ffaccd42",
   "bId": "f7c4d103-d246-456d-8fd5-6418c6a0e002"
  },
  {
   "a": "Michael Dombrowiecki",
   "b": "Stephen Fredericksen",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 0.7,
   "avgExpected": -1.3,
   "aId": "3ac34ef1-17a5-4ab6-8d17-be4bd5a0a040",
   "bId": "622cb64f-dd0c-4bff-8c19-81d287977c53"
  },
  {
   "a": "Steppan Konoplev",
   "b": "David Fiscella",
   "team": "Dill Dinkers Newport",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 0.3,
   "avgExpected": -1.7,
   "aId": "8f076d51-25ba-4203-97f8-12194ba5b001",
   "bId": "fa546fa2-45f5-4ad6-91ec-b6f6044ad8b0"
  },
  {
   "a": "Joseph Luka",
   "b": "Jared Rapoport",
   "team": "Bounce Tempest",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.9,
   "avgActual": 4,
   "avgExpected": 2.3,
   "aId": "482a6a13-3cb9-438b-8494-3f70a4f1cffe",
   "bId": "b19f3a31-ce60-4c40-b903-1fd60c95f649"
  },
  {
   "a": "Bren Calpin",
   "b": "Xan Hong",
   "team": "Dill Dinkers Newport",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.9,
   "avgActual": -2.2,
   "avgExpected": -3.9,
   "aId": "7f4b7644-6117-4eee-b3d8-a4955507923e",
   "bId": "e83b9a6f-83c6-4b66-a470-a0cae4f462df"
  },
  {
   "a": "Prashanth Koshy",
   "b": "Christopher Monzon",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 2,
   "avgExpected": -0.2,
   "aId": "5b619b72-b78a-49ba-872d-c64db6084a67",
   "bId": "b205e6a7-d62d-42bf-b2d5-e7e5d0c109ec"
  },
  {
   "a": "Eric Berlinger",
   "b": "Rick Wickenheisser",
   "team": "Flemington",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.9,
   "avgActual": 0.8,
   "avgExpected": -1,
   "aId": "2fda2042-6613-42f8-ad93-c3cff9a58f3e",
   "bId": "741048e8-2c91-4466-bb1c-1a624d1dabd9"
  },
  {
   "a": "Michael Gilbert",
   "b": "Marc Kunesch",
   "team": "Home Court",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.9,
   "avgActual": -0.5,
   "avgExpected": -2.2,
   "aId": "5acb8305-77d8-4089-88b6-9fbfa9400f6a",
   "bId": "aeaef27d-01b3-4fb2-91f3-4be8c7602aa3"
  },
  {
   "a": "Xavier Vazquez",
   "b": "Jesse Pettit",
   "team": "Dill Dinkers Newport",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.9,
   "avgActual": -2,
   "avgExpected": -3.8,
   "aId": "24bfad4a-0221-485a-8550-c0bdd971484a",
   "bId": "d6e30691-3b20-465b-8fa8-560017c20c15"
  },
  {
   "a": "Franklin Yiu",
   "b": "Brandon Fulford",
   "team": "Allstar Pickler",
   "n": 10,
   "w": 2,
   "l": 8,
   "synergy": 0.8,
   "avgActual": -2,
   "avgExpected": -3,
   "aId": "020affa0-bff4-49cb-94c0-a9eb9ba09b77",
   "bId": "906383cd-e781-48bc-9004-0fc5427c7e62"
  },
  {
   "a": "Pritpal Singh",
   "b": "Dhruv Dobariya",
   "team": "Pickleball Kingdom Hamilton",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 0.8,
   "avgExpected": -0.9,
   "aId": "631b24ae-9bc2-4db3-964b-33f86933021e",
   "bId": "ac44fd3c-0c87-47aa-bf26-4333b632f524"
  },
  {
   "a": "Craig Butler",
   "b": "David Shapiro",
   "team": "Flemington",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 0.8,
   "avgActual": 2.1,
   "avgExpected": 0.9,
   "aId": "b50c51e8-3ce3-44ec-98e7-6cc11a705f17",
   "bId": "c39cd158-0c19-4819-8653-18084e6ce982"
  },
  {
   "a": "Jeff Axelrad",
   "b": "Jesse Mynahan",
   "team": "Montville",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.8,
   "avgActual": 2.7,
   "avgExpected": 0.7,
   "aId": "27009a0b-037c-4934-9f52-d21c928ef173",
   "bId": "66b5f8fe-1456-4ca5-ba6a-9ee4de2052cb"
  },
  {
   "a": "Sandeep Malhotra",
   "b": "Brandon Tsang",
   "team": "Montville",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.8,
   "avgActual": 5.7,
   "avgExpected": 3.9,
   "aId": "c24596e0-9eeb-4195-b1ff-d4ca3e418d84",
   "bId": "c80b5964-35f3-46b9-a0fa-9c3c9c673161"
  },
  {
   "a": "George Vega Jr",
   "b": "Jun Zhi Tan",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 4.4,
   "avgExpected": 3,
   "aId": "be19bf10-b8a5-4626-8c10-f13ac708231d",
   "bId": "d0e16b4b-7708-425d-ae9d-e3992c4e7fe2"
  },
  {
   "a": "Joseph Luka",
   "b": "Ethan Fu",
   "team": "Bounce Tempest",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 0.5,
   "avgExpected": -1.1,
   "aId": "482a6a13-3cb9-438b-8494-3f70a4f1cffe",
   "bId": "a8585e9c-872e-466c-9583-9680e557f757"
  },
  {
   "a": "Ian Kohn",
   "b": "Big G",
   "team": "Dill Dinkers Freehold",
   "n": 10,
   "w": 0,
   "l": 10,
   "synergy": 0.8,
   "avgActual": -6.7,
   "avgExpected": -7.8,
   "aId": "ef0e9803-0038-4cb9-ad16-a55c54f00339",
   "bId": "f75516ca-4ed9-4ca2-84d3-a6af16b16a27"
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
   "avgExpected": 3.5,
   "aId": "b243c9db-ff2c-4db7-bcfd-27f3b0e7b6f1",
   "bId": "edbeb52a-85fd-48ff-acc5-a5c8415a731d"
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
   "a": "Michael Dombrowiecki",
   "b": "Nicholas Lugo",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 1,
   "avgExpected": -0.8,
   "aId": "3ac34ef1-17a5-4ab6-8d17-be4bd5a0a040",
   "bId": "8f9be7cc-3ddf-436f-8727-02cbdd0d453f"
  },
  {
   "a": "Ricky Jutkiewicz",
   "b": "Jacob Yoo",
   "team": "Home Court",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 1.8,
   "avgExpected": 0.3,
   "aId": "a24bc2af-aca9-45dd-a827-12fb12f7b784",
   "bId": "df0934fe-e584-4b4f-a549-a90499016d33"
  },
  {
   "a": "David Brandolph",
   "b": "Nicholas Brow",
   "team": "Bounce Tempest",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.8,
   "avgActual": 3.3,
   "avgExpected": 1.7,
   "aId": "be10853a-1f2c-4b56-8fd7-902ddc686401",
   "bId": "fdbf0c0b-a961-47e4-abbe-5a56ad7a7bec"
  },
  {
   "a": "Prashanth Koshy",
   "b": "Akash Raju",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 1,
   "avgExpected": -1,
   "aId": "5b619b72-b78a-49ba-872d-c64db6084a67",
   "bId": "a2fc30f9-b494-4781-900e-1e0b7d531f02"
  },
  {
   "a": "John Coyle",
   "b": "David Bogatyrev",
   "team": "Monroe",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.7,
   "avgActual": 0.5,
   "avgExpected": -0.8,
   "aId": "54d78d2c-c0d7-42c0-aef4-567311f2e51e",
   "bId": "e77a59ee-8653-4d89-903c-75109d3f17c8"
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
   "avgExpected": -6.6,
   "aId": "77f18b1c-db78-4d0e-b81d-6d1efde8bb08",
   "bId": "8767c73e-fa5a-4e68-9ded-850b7ab50693"
  },
  {
   "a": "Mark Waters",
   "b": "Matt Inzerillo",
   "team": "APC Garden State",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": 0.7,
   "avgActual": 0.1,
   "avgExpected": -0.9,
   "aId": "1baee0ad-faae-4c61-894a-a347710fdfea",
   "bId": "51ceabf9-8258-4835-9835-c7d915220185"
  },
  {
   "a": "Sree Harsha Konduru",
   "b": "Varun Gurram",
   "team": "Pickle House",
   "n": 10,
   "w": 6,
   "l": 4,
   "synergy": 0.7,
   "avgActual": 2.5,
   "avgExpected": 1.6,
   "aId": "439cf2c1-044c-450c-9dcc-4fdeafbb81cd",
   "bId": "44864b51-f901-4470-a6bd-891495ffd132"
  },
  {
   "a": "Sree Harsha Konduru",
   "b": "Jitendra Arora",
   "team": "Pickle House",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 3,
   "avgExpected": 1.3,
   "aId": "439cf2c1-044c-450c-9dcc-4fdeafbb81cd",
   "bId": "a117b66b-f319-4fc0-8ee2-feb3f17767d0"
  },
  {
   "a": "Jason Wu",
   "b": "Steven Hummel",
   "team": "Picklr Newtown",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 3,
   "avgExpected": 1.6,
   "aId": "5e42a5f7-22d1-4613-a829-b62121ddc704",
   "bId": "c5bf56d5-50a9-4a1f-a6f8-3f3f5af91cca"
  },
  {
   "a": "Michael Johnson",
   "b": "Gary Garretson",
   "team": "Picklr Newtown",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.7,
   "avgActual": 1.2,
   "avgExpected": 0,
   "aId": "4f98756a-9726-48fe-a241-2579f96eee16",
   "bId": "d4126276-6b83-42be-b943-9957df46992c"
  },
  {
   "a": "Noah Ludwigsen",
   "b": "Jimmy Ramja",
   "team": "Pickleball HQ",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 5.3,
   "avgExpected": 3.8,
   "aId": "67f9503a-202f-4982-8e97-9b3383a35aee",
   "bId": "ade57877-7c11-4a46-88bf-789a50906901"
  },
  {
   "a": "Michael Gilbert",
   "b": "Jacob Yoo",
   "team": "Home Court",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.7,
   "avgActual": 0.3,
   "avgExpected": -1.1,
   "aId": "5acb8305-77d8-4089-88b6-9fbfa9400f6a",
   "bId": "df0934fe-e584-4b4f-a549-a90499016d33"
  },
  {
   "a": "Matthew Carrington",
   "b": "Marc Kunesch",
   "team": "Home Court",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 3.3,
   "avgExpected": 1.7,
   "aId": "6a2f3777-38b2-4f02-b550-ce38395914d2",
   "bId": "aeaef27d-01b3-4fb2-91f3-4be8c7602aa3"
  },
  {
   "a": "Uttam Purohit",
   "b": "David Bogatyrev",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.7,
   "avgActual": 1.3,
   "avgExpected": -0.2,
   "aId": "5bec8637-0324-4af8-8084-3779e0f43521",
   "bId": "e77a59ee-8653-4d89-903c-75109d3f17c8"
  },
  {
   "a": "Anthony Simonetti",
   "b": "Thomas Moran",
   "team": "Pickleball HQ",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 2.3,
   "avgExpected": 0.7,
   "aId": "3a2b64a1-6eb6-41e4-92fe-8da3d95af11b",
   "bId": "9571d7b5-fc34-4c77-a51f-c99b286e4304"
  },
  {
   "a": "Rick Olafsson",
   "b": "Jesse Pettit",
   "team": "Dill Dinkers Newport",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.7,
   "avgActual": -2.5,
   "avgExpected": -3.9,
   "aId": "088a0cec-3f4c-4100-afd4-33d4462dc7e3",
   "bId": "d6e30691-3b20-465b-8fa8-560017c20c15"
  },
  {
   "a": "Joseph Lynskey",
   "b": "Eden Ksendzovsky",
   "team": "Premiere",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.7,
   "avgActual": 2,
   "avgExpected": 0.7,
   "aId": "0e8c08b7-0e58-434b-8830-f37779f821dc",
   "bId": "75496a80-8064-40ae-ba4b-36c156d70885"
  },
  {
   "a": "Kevin Lew",
   "b": "Wensheng Yue",
   "team": "Dill Dinkers Freehold",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": 0.7,
   "avgActual": 0.6,
   "avgExpected": -0.4,
   "aId": "03886b04-b474-4dda-b7f3-eb4f4954399c",
   "bId": "d11f5bc0-8b23-488d-86fb-13eebe9e2257"
  },
  {
   "a": "Dan Carpenter",
   "b": "Brandon Dejesus",
   "team": "Jersey Devil",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.7,
   "avgActual": 3,
   "avgExpected": 1.5,
   "aId": "2811dd08-7b50-455b-bc23-46b064a912eb",
   "bId": "d50feac2-f147-47d2-8930-99b21b2842ba"
  },
  {
   "a": "Jacob Rosengarten",
   "b": "David Bogatyrev",
   "team": "Monroe",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.7,
   "avgActual": 2.5,
   "avgExpected": 1.2,
   "aId": "b2f8ea85-7734-47a2-8ce7-bd968b3a51bc",
   "bId": "e77a59ee-8653-4d89-903c-75109d3f17c8"
  },
  {
   "a": "Jason Wu",
   "b": "Andy Ro",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.7,
   "avgActual": -1,
   "avgExpected": -2.6,
   "aId": "5e42a5f7-22d1-4613-a829-b62121ddc704",
   "bId": "f3f6addc-ea42-4e7b-ac54-67bf69cffeeb"
  },
  {
   "a": "Tayon Hart",
   "b": "Uttam Purohit",
   "team": "Monroe",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.7,
   "avgActual": 0.5,
   "avgExpected": -0.9,
   "aId": "545f9968-fc0a-420b-ba42-db16c6e1f884",
   "bId": "5bec8637-0324-4af8-8084-3779e0f43521"
  },
  {
   "a": "Daniel Borgia",
   "b": "Jared Rapoport",
   "team": "Bounce Tempest",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.6,
   "avgActual": 5.8,
   "avgExpected": 4.6,
   "aId": "ae3cd925-c856-44dd-9cf5-3a2bd343adf2",
   "bId": "b19f3a31-ce60-4c40-b903-1fd60c95f649"
  },
  {
   "a": "Meet Thakkar",
   "b": "Cesar Santamaria-Aranda",
   "team": "Montville",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 1.5,
   "avgExpected": 0.3,
   "aId": "f68fa078-e500-4427-9d65-338e840f318c",
   "bId": "fbde98cb-9eee-431b-b164-244249c26728"
  },
  {
   "a": "Angelo Disipio",
   "b": "Steven Hummel",
   "team": "Picklr Newtown",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 0.8,
   "avgExpected": -0.4,
   "aId": "79bb5bba-c449-4cdd-948b-fb5f8efdaebb",
   "bId": "c5bf56d5-50a9-4a1f-a6f8-3f3f5af91cca"
  },
  {
   "a": "Jimmy Ramja",
   "b": "David Wheeler",
   "team": "Pickleball HQ",
   "n": 11,
   "w": 10,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 3.6,
   "avgExpected": 2.9,
   "aId": "ade57877-7c11-4a46-88bf-789a50906901",
   "bId": "d335be77-6a7a-4f96-91c6-0a5cbcc8ea9f"
  },
  {
   "a": "Pedro Delgado",
   "b": "Big G",
   "team": "Dill Dinkers Freehold",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.6,
   "avgActual": -4.7,
   "avgExpected": -6,
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
   "synergy": 0.6,
   "avgActual": -2,
   "avgExpected": -3.2,
   "aId": "148387a8-f20a-44df-981d-0d9d2e7bf443",
   "bId": "5f264528-efdb-4bda-88ed-8003f98c1c9b"
  },
  {
   "a": "Pat Wilson",
   "b": "Michael Vincent",
   "team": "Home Court",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 1.3,
   "avgExpected": 0,
   "aId": "2e77eb09-81b2-4cc7-8ed1-4cbf034705f6",
   "bId": "7f44421c-476c-4857-99ed-3376b32289ca"
  },
  {
   "a": "Gianni Roman",
   "b": "Saad Talat Siddiqui",
   "team": "Allstar Pickler",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 0.6,
   "avgActual": -4.2,
   "avgExpected": -5.4,
   "aId": "22294f41-611f-4e8f-962e-377e43209945",
   "bId": "ebfeb773-e8cd-4b6a-aafd-ee2772540168"
  },
  {
   "a": "Ashish Kumar",
   "b": "Samrat Sood",
   "team": "Pickleball Kingdom Hamilton",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 3,
   "avgExpected": 1.7,
   "aId": "5df02573-21d4-40ea-8b41-f81372a474b3",
   "bId": "da802117-fbc3-4b98-9653-9924387691cc"
  },
  {
   "a": "Ritesh Patel",
   "b": "Lj Dequina",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.6,
   "avgActual": 4,
   "avgExpected": 2.7,
   "aId": "e2f86c8b-755e-42a0-8828-f2965f4fbbe7",
   "bId": "e4cb9932-d672-4089-a643-f2d16e3bd98a"
  },
  {
   "a": "Yashraj Kurani",
   "b": "Jun Zhi Tan",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.6,
   "avgActual": 4.7,
   "avgExpected": 3.4,
   "aId": "63950363-4747-4faf-b89a-eb88f8b9e81d",
   "bId": "d0e16b4b-7708-425d-ae9d-e3992c4e7fe2"
  },
  {
   "a": "Jordan Demcher",
   "b": "Jr Burrs",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.6,
   "avgActual": 7,
   "avgExpected": 5.5,
   "aId": "6d1beb10-bd5c-456f-95b5-1823752e8c62",
   "bId": "870112b1-afc3-4ff6-b784-7f872210bf37"
  },
  {
   "a": "John Coyle",
   "b": "Uttam Purohit",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 0.7,
   "avgExpected": -0.6,
   "aId": "54d78d2c-c0d7-42c0-aef4-567311f2e51e",
   "bId": "5bec8637-0324-4af8-8084-3779e0f43521"
  },
  {
   "a": "Jason Feldman",
   "b": "Matthew Schwartz",
   "team": "Premiere",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 5.8,
   "avgExpected": 5,
   "aId": "5636cdc5-7a65-4202-abbb-5999eee35ab3",
   "bId": "a432d3e0-17c2-4741-a4b2-7f72b7a81a5f"
  },
  {
   "a": "Shawn Gold",
   "b": "David Bogatyrev",
   "team": "Monroe",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": 0.5,
   "avgActual": 1,
   "avgExpected": 0.3,
   "aId": "e2d70cc7-b655-43d5-a059-063bfe722001",
   "bId": "e77a59ee-8653-4d89-903c-75109d3f17c8"
  },
  {
   "a": "Dan Ladislaw",
   "b": "Matheus Korndoerfer",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 1,
   "avgExpected": -0.1,
   "aId": "31b78615-afb3-4856-8cb1-de2b8d43a115",
   "bId": "e1f41428-436c-436e-b752-af9cead487be"
  },
  {
   "a": "Jared Rapoport",
   "b": "Ken Weinstein",
   "team": "Bounce Tempest",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 1,
   "avgExpected": 0,
   "aId": "b19f3a31-ce60-4c40-b903-1fd60c95f649",
   "bId": "d07bda42-9d33-4c03-a7f3-a8a468083bdd"
  },
  {
   "a": "Franklin Yiu",
   "b": "Allan Orchard",
   "team": "Allstar Pickler",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": 0.5,
   "avgActual": 0.3,
   "avgExpected": -0.5,
   "aId": "020affa0-bff4-49cb-94c0-a9eb9ba09b77",
   "bId": "4f34c672-f457-467f-98d8-7d5d6c8add16"
  },
  {
   "a": "Bruce Nguyen",
   "b": "Uzoma Nwankwo",
   "team": "APC Garden State",
   "n": 9,
   "w": 6,
   "l": 3,
   "synergy": 0.5,
   "avgActual": -0.1,
   "avgExpected": -0.9,
   "aId": "33233dc6-b78e-4deb-88d4-2742aacf5eb9",
   "bId": "c6482905-6954-4241-a6c3-ba077c367846"
  },
  {
   "a": "Rajeeth Nadig",
   "b": "Bennett Pereira",
   "team": "Pickle House",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 5,
   "avgExpected": 3.9,
   "aId": "20c15f19-5b27-4c9f-bc75-da3d516a015b",
   "bId": "6a2ea39b-8b67-4cdf-83f7-c16fb3224655"
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
   "avgExpected": -4.5,
   "aId": "5127c0b9-aaf8-49c5-a94f-bf92e7ae60f8",
   "bId": "c39cd158-0c19-4819-8653-18084e6ce982"
  },
  {
   "a": "John Manuzza",
   "b": "Cesar Santamaria-Aranda",
   "team": "Montville",
   "n": 8,
   "w": 7,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 2.8,
   "avgExpected": 2.1,
   "aId": "5d3156e6-7886-4184-9d2f-3ec44d72bb3b",
   "bId": "fbde98cb-9eee-431b-b164-244249c26728"
  },
  {
   "a": "Rohit Mankotia",
   "b": "Carlos Rincon",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 0.3,
   "avgExpected": -0.8,
   "aId": "541e3e2d-76eb-4cd3-9bfe-9f94c0b9cdeb",
   "bId": "9886815c-3bf4-42b1-b650-1ec17ff2c167"
  },
  {
   "a": "Xan Hong",
   "b": "Aleks Mirkovic",
   "team": "Dill Dinkers Newport",
   "n": 8,
   "w": 2,
   "l": 6,
   "synergy": 0.5,
   "avgActual": -5.2,
   "avgExpected": -6.1,
   "aId": "e83b9a6f-83c6-4b66-a470-a0cae4f462df",
   "bId": "f006963a-4e8e-433d-8c9a-e278ac32ea9c"
  },
  {
   "a": "Shalin Rawal",
   "b": "Jesse Mynahan",
   "team": "Montville",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 3.8,
   "avgExpected": 3,
   "aId": "08530d21-2dc5-4f71-9d49-9191ec192860",
   "bId": "66b5f8fe-1456-4ca5-ba6a-9ee4de2052cb"
  },
  {
   "a": "Shalin Rawal",
   "b": "Umang Pathak",
   "team": "Montville",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 9,
   "avgExpected": 8.1,
   "aId": "08530d21-2dc5-4f71-9d49-9191ec192860",
   "bId": "30ecad69-b82a-45aa-94c5-f0f7869a0d12"
  },
  {
   "a": "Pat Wilson",
   "b": "Matthew Carrington",
   "team": "Home Court",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 0.7,
   "avgExpected": -0.6,
   "aId": "2e77eb09-81b2-4cc7-8ed1-4cbf034705f6",
   "bId": "6a2f3777-38b2-4f02-b550-ce38395914d2"
  },
  {
   "a": "Jimmy Duong",
   "b": "Michael Johnson",
   "team": "Picklr Newtown",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.5,
   "avgActual": -1.5,
   "avgExpected": -2.5,
   "aId": "06a3741d-10e5-462b-ba95-aa997d4eb8ea",
   "bId": "4f98756a-9726-48fe-a241-2579f96eee16"
  },
  {
   "a": "Malay Kaity",
   "b": "Jesse Pettit",
   "team": "Dill Dinkers Newport",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.5,
   "avgActual": -4.7,
   "avgExpected": -5.9,
   "aId": "199ae8e1-22b4-4d8d-a41d-29cb984a3b33",
   "bId": "d6e30691-3b20-465b-8fa8-560017c20c15"
  },
  {
   "a": "Dilip Patel",
   "b": "Dhruv Dobariya",
   "team": "Pickleball Kingdom Hamilton",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.5,
   "avgActual": -1,
   "avgExpected": -1.9,
   "aId": "7573445f-7dbd-4c2f-867a-ae95ae7ed168",
   "bId": "ac44fd3c-0c87-47aa-bf26-4333b632f524"
  },
  {
   "a": "Jeff Laniado",
   "b": "Sandeep Malhotra",
   "team": "Montville",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.5,
   "avgActual": -0.7,
   "avgExpected": -1.8,
   "aId": "06d52e99-941a-4ced-9968-f56e6075105a",
   "bId": "c24596e0-9eeb-4195-b1ff-d4ca3e418d84"
  },
  {
   "a": "Josh Rito",
   "b": "Tom Hadler",
   "team": "Flemington",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 0.5,
   "avgActual": -1.8,
   "avgExpected": -2.7,
   "aId": "a4c54a14-35b4-4b90-aabd-3d81ad719f4d",
   "bId": "c5d07eb6-d276-4503-a077-c092e89c2ae8"
  },
  {
   "a": "Tayon Hart",
   "b": "Nicholas Lugo",
   "team": "Monroe",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 3.8,
   "avgExpected": 2.8,
   "aId": "545f9968-fc0a-420b-ba42-db16c6e1f884",
   "bId": "8f9be7cc-3ddf-436f-8727-02cbdd0d453f"
  },
  {
   "a": "Aleks Mirkovic",
   "b": "David Fiscella",
   "team": "Dill Dinkers Newport",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 0,
   "avgExpected": -0.9,
   "aId": "f006963a-4e8e-433d-8c9a-e278ac32ea9c",
   "bId": "fa546fa2-45f5-4ad6-91ec-b6f6044ad8b0"
  },
  {
   "a": "Gary White",
   "b": "Daniel Antonelli",
   "team": "Premiere",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 1.6,
   "avgExpected": 0.9,
   "aId": "9a26eab9-96be-45e1-b380-2845a0e8e668",
   "bId": "cd0eb94b-4d32-4ba9-bcdc-3fba205d90f0"
  },
  {
   "a": "Paul Perumaly",
   "b": "Daniel Borgia",
   "team": "Bounce Tempest",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 2.8,
   "avgExpected": 1.9,
   "aId": "9d9eff5c-bb8e-47b7-b1e6-7e4c7055bb8b",
   "bId": "ae3cd925-c856-44dd-9cf5-3a2bd343adf2"
  },
  {
   "a": "Chris Machuzak",
   "b": "Andress Mims",
   "team": "APC Garden State",
   "n": 10,
   "w": 1,
   "l": 9,
   "synergy": 0.4,
   "avgActual": -3.7,
   "avgExpected": -4.3,
   "aId": "dba4c9d8-6ffb-49ae-99d1-79c341a68de7",
   "bId": "e9878f35-8a92-4887-834e-d8a76881ae41"
  },
  {
   "a": "Jaiveer Narwal",
   "b": "Dhruv Dobariya",
   "team": "Pickleball Kingdom Hamilton",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.4,
   "avgActual": -2.5,
   "avgExpected": -3.2,
   "aId": "96042156-2ff1-44d0-9b96-8448964b4981",
   "bId": "ac44fd3c-0c87-47aa-bf26-4333b632f524"
  },
  {
   "a": "Dan Yang",
   "b": "Shreyas Suresh Hassan",
   "team": "PickleRage Union County",
   "n": 10,
   "w": 5,
   "l": 5,
   "synergy": 0.4,
   "avgActual": 0.2,
   "avgExpected": -0.3,
   "aId": "667a80aa-7b06-46b5-a4ae-6989224ab5f9",
   "bId": "e1d9f3bc-ec4e-4690-810c-a67452049768"
  },
  {
   "a": "Jesse Mynahan",
   "b": "Cesar Santamaria-Aranda",
   "team": "Montville",
   "n": 10,
   "w": 5,
   "l": 5,
   "synergy": 0.4,
   "avgActual": 1.2,
   "avgExpected": 0.6,
   "aId": "66b5f8fe-1456-4ca5-ba6a-9ee4de2052cb",
   "bId": "fbde98cb-9eee-431b-b164-244249c26728"
  },
  {
   "a": "Eric Ruiz",
   "b": "Cullen Curley",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 2.2,
   "avgExpected": 1.5,
   "aId": "505e9bce-f386-4a4f-9a41-a1d7e0bb0527",
   "bId": "8cebf901-66b9-41d0-963d-12dac7334c8f"
  },
  {
   "a": "Angelo Disipio",
   "b": "Arnold Poblete",
   "team": "Picklr Newtown",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 2.2,
   "avgExpected": 1.6,
   "aId": "79bb5bba-c449-4cdd-948b-fb5f8efdaebb",
   "bId": "c19e964a-d126-4e9f-9ce4-83c315f2f535"
  },
  {
   "a": "Noah Ludwigsen",
   "b": "David Wheeler",
   "team": "Pickleball HQ",
   "n": 11,
   "w": 8,
   "l": 3,
   "synergy": 0.4,
   "avgActual": 2,
   "avgExpected": 1.5,
   "aId": "67f9503a-202f-4982-8e97-9b3383a35aee",
   "bId": "d335be77-6a7a-4f96-91c6-0a5cbcc8ea9f"
  },
  {
   "a": "Jimmy Ramja",
   "b": "Kyle Korman",
   "team": "Pickleball HQ",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.4,
   "avgActual": 6.5,
   "avgExpected": 5.8,
   "aId": "ade57877-7c11-4a46-88bf-789a50906901",
   "bId": "d61a3828-6dfc-480a-b26a-534b0fe58268"
  },
  {
   "a": "Erik Reilly",
   "b": "Wensheng Yue",
   "team": "Dill Dinkers Freehold",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": 0.4,
   "avgActual": -0.4,
   "avgExpected": -1,
   "aId": "479815f2-1e14-4b96-9423-d99c15b2fe2b",
   "bId": "d11f5bc0-8b23-488d-86fb-13eebe9e2257"
  },
  {
   "a": "Marc Padre",
   "b": "George Vega Jr",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.4,
   "avgActual": 6,
   "avgExpected": 5,
   "aId": "a131a707-f20e-4838-9dcf-7cecb40c2705",
   "bId": "be19bf10-b8a5-4626-8c10-f13ac708231d"
  },
  {
   "a": "Marc Padre",
   "b": "Akash Raju",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.4,
   "avgActual": 8,
   "avgExpected": 7,
   "aId": "a131a707-f20e-4838-9dcf-7cecb40c2705",
   "bId": "a2fc30f9-b494-4781-900e-1e0b7d531f02"
  },
  {
   "a": "Daniel Hadley",
   "b": "Mario Contreras",
   "team": "Jersey Devil",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 0,
   "avgExpected": -0.8,
   "aId": "23adcd68-130d-4176-b367-d3cd31260d21",
   "bId": "323d96c3-4160-410b-96a5-87263e825f62"
  },
  {
   "a": "Graham Heavenrich",
   "b": "Matt Enz",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.4,
   "avgActual": 4.3,
   "avgExpected": 3.5,
   "aId": "27d8a10f-ee9b-467c-bf8c-4872ce63de90",
   "bId": "683d1fdd-2fa0-4775-a8dd-0f733aa9f1a3"
  },
  {
   "a": "Hua Lin",
   "b": "Ian Kohn",
   "team": "Dill Dinkers Freehold",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.4,
   "avgActual": -2,
   "avgExpected": -2.8,
   "aId": "6b263caa-80f7-40d2-9248-559f91ffe71e",
   "bId": "ef0e9803-0038-4cb9-ad16-a55c54f00339"
  },
  {
   "a": "Kyle Martin",
   "b": "Vincent Rigoglioso",
   "team": "Bounce Tempest",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.3,
   "avgActual": -1,
   "avgExpected": -1.5,
   "aId": "639af9e8-08fd-496d-84d6-6e7859e8c6d3",
   "bId": "d0c9ae50-0cdc-4f72-9ece-0b996f323f73"
  },
  {
   "a": "Dennis Yap",
   "b": "Robert Huntley",
   "team": "Home Court",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 2.9,
   "avgExpected": 2.4,
   "aId": "45ea05c6-ef48-4b0a-9f71-a640be038d08",
   "bId": "b5dec967-9e3a-49b4-b136-597711d099cc"
  },
  {
   "a": "Jarred Goeckeler",
   "b": "Brandon Dejesus",
   "team": "Jersey Devil",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.3,
   "avgActual": 4,
   "avgExpected": 3.4,
   "aId": "084f4667-3553-4f23-b4c7-62d6c8afb42a",
   "bId": "d50feac2-f147-47d2-8930-99b21b2842ba"
  },
  {
   "a": "Mark Waters",
   "b": "Bruce Nguyen",
   "team": "APC Garden State",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 0.3,
   "avgActual": -1.1,
   "avgExpected": -1.6,
   "aId": "1baee0ad-faae-4c61-894a-a347710fdfea",
   "bId": "33233dc6-b78e-4deb-88d4-2742aacf5eb9"
  },
  {
   "a": "Varun Gurram",
   "b": "Avneesh Agarwal",
   "team": "Pickle House",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.3,
   "avgActual": -3,
   "avgExpected": -3.7,
   "aId": "44864b51-f901-4470-a6bd-891495ffd132",
   "bId": "f0ac7d85-0e7b-4f28-80fe-3282c3c875ed"
  },
  {
   "a": "Rajeeth Nadig",
   "b": "Varun Gurram",
   "team": "Pickle House",
   "n": 10,
   "w": 7,
   "l": 3,
   "synergy": 0.3,
   "avgActual": 3,
   "avgExpected": 2.6,
   "aId": "20c15f19-5b27-4c9f-bc75-da3d516a015b",
   "bId": "44864b51-f901-4470-a6bd-891495ffd132"
  },
  {
   "a": "Harsh Upadhyaya",
   "b": "Pritpal Singh",
   "team": "Pickleball Kingdom Hamilton",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 2.3,
   "avgExpected": 1.7,
   "aId": "3b9648e1-481c-4007-9932-d8df648f7bab",
   "bId": "631b24ae-9bc2-4db3-964b-33f86933021e"
  },
  {
   "a": "John Fallone",
   "b": "David Tabacco",
   "team": "Flemington",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.3,
   "avgActual": -2.7,
   "avgExpected": -3.2,
   "aId": "5127c0b9-aaf8-49c5-a94f-bf92e7ae60f8",
   "bId": "717d97f0-4f08-476f-9c53-7595605bc0b0"
  },
  {
   "a": "Umang Pathak",
   "b": "John Manuzza",
   "team": "Montville",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 4.1,
   "avgExpected": 3.7,
   "aId": "30ecad69-b82a-45aa-94c5-f0f7869a0d12",
   "bId": "5d3156e6-7886-4184-9d2f-3ec44d72bb3b"
  },
  {
   "a": "Michael Barndt",
   "b": "Carlos Rincon",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 9,
   "w": 5,
   "l": 4,
   "synergy": 0.3,
   "avgActual": 3.1,
   "avgExpected": 2.7,
   "aId": "50853eee-28e0-4380-b379-35935eb2115a",
   "bId": "9886815c-3bf4-42b1-b650-1ec17ff2c167"
  },
  {
   "a": "Rohit Mankotia",
   "b": "Samuel Kashefska",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.3,
   "avgActual": 1.7,
   "avgExpected": 1.1,
   "aId": "541e3e2d-76eb-4cd3-9bfe-9f94c0b9cdeb",
   "bId": "e4a31aff-39d6-49b3-95c4-131421e956a0"
  },
  {
   "a": "Mathew Yang",
   "b": "Arnold Poblete",
   "team": "Picklr Newtown",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 1.8,
   "avgExpected": 1.4,
   "aId": "12ec758b-f05d-40ec-b082-a76f07cbe792",
   "bId": "c19e964a-d126-4e9f-9ce4-83c315f2f535"
  },
  {
   "a": "Jose Campos",
   "b": "Nesip Cengiz",
   "team": "Pickleball HQ",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 2.8,
   "avgExpected": 2.2,
   "aId": "197e3b9a-eded-4a87-8391-13a7c6d18c8f",
   "bId": "c737d3dd-dfe2-4f58-a095-fb40fc601866"
  },
  {
   "a": "Bruce Nguyen",
   "b": "Jimmy Shapiro",
   "team": "APC Garden State",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.3,
   "avgActual": -2.3,
   "avgExpected": -3,
   "aId": "33233dc6-b78e-4deb-88d4-2742aacf5eb9",
   "bId": "7b57c36d-a6eb-470e-b132-26d1f2a47b74"
  },
  {
   "a": "Nicholas Lugo",
   "b": "Salman Saad",
   "team": "Monroe",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 0.7,
   "avgExpected": 0.2,
   "aId": "8f9be7cc-3ddf-436f-8727-02cbdd0d453f",
   "bId": "f7c4d103-d246-456d-8fd5-6418c6a0e002"
  },
  {
   "a": "Daniel Borgia",
   "b": "Yong Kim",
   "team": "Bounce Tempest",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.3,
   "avgActual": 7.3,
   "avgExpected": 6.6,
   "aId": "ae3cd925-c856-44dd-9cf5-3a2bd343adf2",
   "bId": "ca670ae8-0768-49d4-9984-f708cd52786c"
  },
  {
   "a": "Jason Feldman",
   "b": "Eden Ksendzovsky",
   "team": "Premiere",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.3,
   "avgActual": 1.7,
   "avgExpected": 1.1,
   "aId": "5636cdc5-7a65-4202-abbb-5999eee35ab3",
   "bId": "75496a80-8064-40ae-ba4b-36c156d70885"
  },
  {
   "a": "Joseph Lynskey",
   "b": "Timothy Lynskey",
   "team": "Premiere",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 0,
   "avgExpected": -0.6,
   "aId": "0e8c08b7-0e58-434b-8830-f37779f821dc",
   "bId": "718c6948-a987-43bb-a1f3-cf7aead75edb"
  },
  {
   "a": "Joel Steinbrunner",
   "b": "Aleks Mirkovic",
   "team": "Dill Dinkers Newport",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 0.3,
   "avgActual": -3.5,
   "avgExpected": -4,
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
   "synergy": 0.3,
   "avgActual": -3.2,
   "avgExpected": -3.9,
   "aId": "159ef92f-0a83-4619-b65d-3ba60a2ba992",
   "bId": "f75516ca-4ed9-4ca2-84d3-a6af16b16a27"
  },
  {
   "a": "Sujoy Gayen",
   "b": "Hua Lin",
   "team": "Dill Dinkers Freehold",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 1,
   "avgExpected": 0.2,
   "aId": "159ef92f-0a83-4619-b65d-3ba60a2ba992",
   "bId": "6b263caa-80f7-40d2-9248-559f91ffe71e"
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
   "avgExpected": -4.4,
   "aId": "24db47b3-dedc-418d-9210-3b5fea1952da",
   "bId": "d634d992-c9d8-4e31-acb7-45b1161eee19"
  },
  {
   "a": "Nesip Cengiz",
   "b": "Kyle Korman",
   "team": "Pickleball HQ",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.3,
   "avgActual": 3.7,
   "avgExpected": 2.9,
   "aId": "c737d3dd-dfe2-4f58-a095-fb40fc601866",
   "bId": "d61a3828-6dfc-480a-b26a-534b0fe58268"
  },
  {
   "a": "Michael Dombrowiecki",
   "b": "Shawn Gold",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 0.7,
   "avgExpected": 0.3,
   "aId": "3ac34ef1-17a5-4ab6-8d17-be4bd5a0a040",
   "bId": "e2d70cc7-b655-43d5-a059-063bfe722001"
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
   "avgExpected": 3.2,
   "aId": "639af9e8-08fd-496d-84d6-6e7859e8c6d3",
   "bId": "9d9eff5c-bb8e-47b7-b1e6-7e4c7055bb8b"
  },
  {
   "a": "Jared Rapoport",
   "b": "Vincent Rigoglioso",
   "team": "Bounce Tempest",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.2,
   "avgActual": -1.7,
   "avgExpected": -2.2,
   "aId": "b19f3a31-ce60-4c40-b903-1fd60c95f649",
   "bId": "d0c9ae50-0cdc-4f72-9ece-0b996f323f73"
  },
  {
   "a": "Jordan Demcher",
   "b": "Ryan Hathaway",
   "team": "Bounce Malvern",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 4,
   "avgExpected": 3.6,
   "aId": "6d1beb10-bd5c-456f-95b5-1823752e8c62",
   "bId": "8b8ebfab-9618-4bba-a52b-6aa7679d3390"
  },
  {
   "a": "Bryan Mccourt",
   "b": "Michael Vincent",
   "team": "Home Court",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 0.2,
   "avgActual": 0.9,
   "avgExpected": 0.6,
   "aId": "74f9fe34-f8c5-49dd-b504-939d0b4f5aaa",
   "bId": "7f44421c-476c-4857-99ed-3376b32289ca"
  },
  {
   "a": "Kevin Sheehan",
   "b": "Dennis Yap",
   "team": "Home Court",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": 0.2,
   "avgActual": 3.4,
   "avgExpected": 3,
   "aId": "115f3958-d110-41f0-a04c-aa2f8e17a54f",
   "bId": "45ea05c6-ef48-4b0a-9f71-a640be038d08"
  },
  {
   "a": "Dan Ruble",
   "b": "Tim Bruno",
   "team": "Jersey Devil",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 2,
   "avgExpected": 1.8,
   "aId": "d411862a-491a-47dc-93a8-4a12f821afd7",
   "bId": "ef5a4f7c-58d1-42fa-81c2-1f9f09a60a0f"
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
   "avgExpected": 0.2,
   "aId": "084f4667-3553-4f23-b4c7-62d6c8afb42a",
   "bId": "81875a5e-2b65-4152-bace-b4c96517579d"
  },
  {
   "a": "Mark Waters",
   "b": "Jimmy Shapiro",
   "team": "APC Garden State",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.2,
   "avgActual": 0.2,
   "avgExpected": -0.2,
   "aId": "1baee0ad-faae-4c61-894a-a347710fdfea",
   "bId": "7b57c36d-a6eb-470e-b132-26d1f2a47b74"
  },
  {
   "a": "Eric Berlinger",
   "b": "David Tabacco",
   "team": "Flemington",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 0.2,
   "avgActual": -1.3,
   "avgExpected": -1.7,
   "aId": "2fda2042-6613-42f8-ad93-c3cff9a58f3e",
   "bId": "717d97f0-4f08-476f-9c53-7595605bc0b0"
  },
  {
   "a": "John Fallone",
   "b": "Craig Butler",
   "team": "Flemington",
   "n": 9,
   "w": 4,
   "l": 5,
   "synergy": 0.2,
   "avgActual": -0.1,
   "avgExpected": -0.4,
   "aId": "5127c0b9-aaf8-49c5-a94f-bf92e7ae60f8",
   "bId": "b50c51e8-3ce3-44ec-98e7-6cc11a705f17"
  },
  {
   "a": "Bill Violette",
   "b": "Xan Hong",
   "team": "Dill Dinkers Newport",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.2,
   "avgActual": -6,
   "avgExpected": -6.4,
   "aId": "63eeb91c-2c9c-4dbe-8662-58fbb1d95092",
   "bId": "e83b9a6f-83c6-4b66-a470-a0cae4f462df"
  },
  {
   "a": "Luca Hendrickson",
   "b": "Kyle Korman",
   "team": "Pickleball HQ",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 3.8,
   "avgExpected": 3.4,
   "aId": "bd14255e-c654-49a4-99a1-26e02c67c7c7",
   "bId": "d61a3828-6dfc-480a-b26a-534b0fe58268"
  },
  {
   "a": "Franklin Lupianez",
   "b": "John Fallone",
   "team": "Flemington",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.2,
   "avgActual": -3.2,
   "avgExpected": -3.5,
   "aId": "17caef8b-84d4-4052-9695-7c74190925a1",
   "bId": "5127c0b9-aaf8-49c5-a94f-bf92e7ae60f8"
  },
  {
   "a": "Prashanth Koshy",
   "b": "Ritesh Patel",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 0.2,
   "avgActual": -0.8,
   "avgExpected": -1.2,
   "aId": "5b619b72-b78a-49ba-872d-c64db6084a67",
   "bId": "e2f86c8b-755e-42a0-8828-f2965f4fbbe7"
  },
  {
   "a": "Pritpal Singh",
   "b": "Ziyu Huang",
   "team": "Pickleball Kingdom Hamilton",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 0.5,
   "avgExpected": 0,
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
   "synergy": 0.2,
   "avgActual": -0.2,
   "avgExpected": -0.7,
   "aId": "20f3e907-41d8-40bb-8cef-cb6fed84a2aa",
   "bId": "a117b66b-f319-4fc0-8ee2-feb3f17767d0"
  },
  {
   "a": "Varun Gurram",
   "b": "Jitendra Arora",
   "team": "Pickle House",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 2.5,
   "avgExpected": 2.1,
   "aId": "44864b51-f901-4470-a6bd-891495ffd132",
   "bId": "a117b66b-f319-4fc0-8ee2-feb3f17767d0"
  },
  {
   "a": "Yongzhe Tian",
   "b": "Andress Mims",
   "team": "APC Garden State",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.2,
   "avgActual": 0.3,
   "avgExpected": -0.1,
   "aId": "e1a924b8-3b3a-4780-8348-08a730ba61f2",
   "bId": "e9878f35-8a92-4887-834e-d8a76881ae41"
  },
  {
   "a": "Joseph Lynskey",
   "b": "Gary White",
   "team": "Premiere",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 0,
   "avgExpected": -0.5,
   "aId": "0e8c08b7-0e58-434b-8830-f37779f821dc",
   "bId": "9a26eab9-96be-45e1-b380-2845a0e8e668"
  },
  {
   "a": "Tom Kresky",
   "b": "Frederick Cox",
   "team": "Jersey Devil",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.2,
   "avgActual": -0.3,
   "avgExpected": -0.8,
   "aId": "81875a5e-2b65-4152-bace-b4c96517579d",
   "bId": "e8aee14f-dbc4-4e5c-be4a-4f948e2e13fc"
  },
  {
   "a": "Andrew Mclean",
   "b": "Gary Garretson",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 1,
   "avgExpected": 0.5,
   "aId": "2d439cdc-347e-4beb-9975-1b31bc46f2df",
   "bId": "d4126276-6b83-42be-b943-9957df46992c"
  },
  {
   "a": "Kevin Sheehan",
   "b": "Robert Huntley",
   "team": "Home Court",
   "n": 10,
   "w": 6,
   "l": 4,
   "synergy": 0.1,
   "avgActual": -0.1,
   "avgExpected": -0.2,
   "aId": "115f3958-d110-41f0-a04c-aa2f8e17a54f",
   "bId": "b5dec967-9e3a-49b4-b136-597711d099cc"
  },
  {
   "a": "Kevin Sheehan",
   "b": "Bryan Mccourt",
   "team": "Home Court",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 2.1,
   "avgExpected": 2,
   "aId": "115f3958-d110-41f0-a04c-aa2f8e17a54f",
   "bId": "74f9fe34-f8c5-49dd-b504-939d0b4f5aaa"
  },
  {
   "a": "Marc Kunesch",
   "b": "Robert Huntley",
   "team": "Home Court",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": 0.1,
   "avgActual": 1.5,
   "avgExpected": 1.3,
   "aId": "aeaef27d-01b3-4fb2-91f3-4be8c7602aa3",
   "bId": "b5dec967-9e3a-49b4-b136-597711d099cc"
  },
  {
   "a": "Tom Kresky",
   "b": "Dan Ruble",
   "team": "Jersey Devil",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 2,
   "avgExpected": 1.8,
   "aId": "81875a5e-2b65-4152-bace-b4c96517579d",
   "bId": "d411862a-491a-47dc-93a8-4a12f821afd7"
  },
  {
   "a": "Dilip Patel",
   "b": "Ziyu Huang",
   "team": "Pickleball Kingdom Hamilton",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 1.3,
   "avgExpected": 1.1,
   "aId": "7573445f-7dbd-4c2f-867a-ae95ae7ed168",
   "bId": "d06d8b3c-72d6-4ae3-ade8-d7cb7cbd70f7"
  },
  {
   "a": "Ashish Kumar",
   "b": "Pritpal Singh",
   "team": "Pickleball Kingdom Hamilton",
   "n": 9,
   "w": 8,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 6.2,
   "avgExpected": 6,
   "aId": "5df02573-21d4-40ea-8b41-f81372a474b3",
   "bId": "631b24ae-9bc2-4db3-964b-33f86933021e"
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
   "avgExpected": -0.6,
   "aId": "27009a0b-037c-4934-9f52-d21c928ef173",
   "bId": "5d3156e6-7886-4184-9d2f-3ec44d72bb3b"
  },
  {
   "a": "Andrew Mclean",
   "b": "Michael Johnson",
   "team": "Picklr Newtown",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": 0.1,
   "avgActual": -3.6,
   "avgExpected": -3.8,
   "aId": "2d439cdc-347e-4beb-9975-1b31bc46f2df",
   "bId": "4f98756a-9726-48fe-a241-2579f96eee16"
  },
  {
   "a": "Kevin Sheehan",
   "b": "Michael Gilbert",
   "team": "Home Court",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.1,
   "avgActual": -2.4,
   "avgExpected": -2.5,
   "aId": "115f3958-d110-41f0-a04c-aa2f8e17a54f",
   "bId": "5acb8305-77d8-4089-88b6-9fbfa9400f6a"
  },
  {
   "a": "Rajeeth Nadig",
   "b": "Jitendra Arora",
   "team": "Pickle House",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 3.5,
   "avgExpected": 3.4,
   "aId": "20c15f19-5b27-4c9f-bc75-da3d516a015b",
   "bId": "a117b66b-f319-4fc0-8ee2-feb3f17767d0"
  },
  {
   "a": "Graham Heavenrich",
   "b": "Jamison Rowles",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 3.3,
   "avgExpected": 3.1,
   "aId": "27d8a10f-ee9b-467c-bf8c-4872ce63de90",
   "bId": "cae7c2db-b4d5-4927-9c44-ff92176b5507"
  },
  {
   "a": "Dhruv Dobariya",
   "b": "Venu Yengala",
   "team": "Pickleball Kingdom Hamilton",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.1,
   "avgActual": -3,
   "avgExpected": -3.2,
   "aId": "ac44fd3c-0c87-47aa-bf26-4333b632f524",
   "bId": "b4cbf5ad-5c2c-46bf-bf50-f50683964b46"
  },
  {
   "a": "Larry Minsky",
   "b": "Andy Ro",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.1,
   "avgActual": -0.7,
   "avgExpected": -0.9,
   "aId": "41f7a2a8-8fcd-4282-b501-cd5b83ec7440",
   "bId": "f3f6addc-ea42-4e7b-ac54-67bf69cffeeb"
  },
  {
   "a": "Wensheng Yue",
   "b": "Ian Kohn",
   "team": "Dill Dinkers Freehold",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.1,
   "avgActual": -3.3,
   "avgExpected": -3.6,
   "aId": "d11f5bc0-8b23-488d-86fb-13eebe9e2257",
   "bId": "ef0e9803-0038-4cb9-ad16-a55c54f00339"
  },
  {
   "a": "Sujoy Gayen",
   "b": "Erik Reilly",
   "team": "Dill Dinkers Freehold",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.1,
   "avgActual": -2,
   "avgExpected": -2.2,
   "aId": "159ef92f-0a83-4619-b65d-3ba60a2ba992",
   "bId": "479815f2-1e14-4b96-9423-d99c15b2fe2b"
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
   "a": "David Brandolph",
   "b": "Vincent Rigoglioso",
   "team": "Bounce Tempest",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0,
   "avgActual": 1.8,
   "avgExpected": 1.8,
   "aId": "be10853a-1f2c-4b56-8fd7-902ddc686401",
   "bId": "d0c9ae50-0cdc-4f72-9ece-0b996f323f73"
  },
  {
   "a": "Jared Rapoport",
   "b": "Jimmy Lee",
   "team": "Bounce Tempest",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0,
   "avgActual": -2,
   "avgExpected": -1.9,
   "aId": "b19f3a31-ce60-4c40-b903-1fd60c95f649",
   "bId": "f2c53e42-1eac-48dd-9c93-682ec5c1ac98"
  },
  {
   "a": "Bruce Nguyen",
   "b": "Matt Inzerillo",
   "team": "APC Garden State",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0,
   "avgActual": -2,
   "avgExpected": -2,
   "aId": "33233dc6-b78e-4deb-88d4-2742aacf5eb9",
   "bId": "51ceabf9-8258-4835-9835-c7d915220185"
  },
  {
   "a": "Uzoma Nwankwo",
   "b": "Chris Machuzak",
   "team": "APC Garden State",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0,
   "avgActual": 0.7,
   "avgExpected": 0.7,
   "aId": "c6482905-6954-4241-a6c3-ba077c367846",
   "bId": "dba4c9d8-6ffb-49ae-99d1-79c341a68de7"
  },
  {
   "a": "Ashish Kumar",
   "b": "Ziyu Huang",
   "team": "Pickleball Kingdom Hamilton",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0,
   "avgActual": 5.8,
   "avgExpected": 5.7,
   "aId": "5df02573-21d4-40ea-8b41-f81372a474b3",
   "bId": "d06d8b3c-72d6-4ae3-ade8-d7cb7cbd70f7"
  },
  {
   "a": "Jack Barry",
   "b": "Shreyas Suresh Hassan",
   "team": "PickleRage Union County",
   "n": 10,
   "w": 7,
   "l": 3,
   "synergy": 0,
   "avgActual": 2.9,
   "avgExpected": 2.9,
   "aId": "763342e5-4d13-45b7-8630-9d840cb7b8b3",
   "bId": "e1d9f3bc-ec4e-4690-810c-a67452049768"
  },
  {
   "a": "Jeff Laniado",
   "b": "Meet Thakkar",
   "team": "Montville",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0,
   "avgActual": 0.3,
   "avgExpected": 0.3,
   "aId": "06d52e99-941a-4ced-9968-f56e6075105a",
   "bId": "f68fa078-e500-4427-9d65-338e840f318c"
  },
  {
   "a": "Jesse Mynahan",
   "b": "Brandon Tsang",
   "team": "Montville",
   "n": 9,
   "w": 6,
   "l": 3,
   "synergy": 0,
   "avgActual": 1.8,
   "avgExpected": 1.7,
   "aId": "66b5f8fe-1456-4ca5-ba6a-9ee4de2052cb",
   "bId": "c80b5964-35f3-46b9-a0fa-9c3c9c673161"
  },
  {
   "a": "Michael Vincent",
   "b": "Jacob Yoo",
   "team": "Home Court",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0,
   "avgActual": 0.4,
   "avgExpected": 0.4,
   "aId": "7f44421c-476c-4857-99ed-3376b32289ca",
   "bId": "df0934fe-e584-4b4f-a549-a90499016d33"
  },
  {
   "a": "Carlos Idrovo",
   "b": "Jimmy Ramja",
   "team": "Pickleball HQ",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0,
   "avgActual": 2.7,
   "avgExpected": 2.7,
   "aId": "5c6366e8-1fad-44ee-bf38-4ba5d838769d",
   "bId": "ade57877-7c11-4a46-88bf-789a50906901"
  },
  {
   "a": "Gary White",
   "b": "Christopher Giasi",
   "team": "Premiere",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0,
   "avgActual": 4.3,
   "avgExpected": 4.3,
   "aId": "9a26eab9-96be-45e1-b380-2845a0e8e668",
   "bId": "d6ca21c0-822e-422f-9721-34120ba90184"
  },
  {
   "a": "Daniel Antonelli",
   "b": "Rob Telles",
   "team": "Premiere",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0,
   "avgActual": 2.3,
   "avgExpected": 2.4,
   "aId": "cd0eb94b-4d32-4ba9-bcdc-3fba205d90f0",
   "bId": "d27652b4-447c-4563-b89f-19a8e1e79568"
  },
  {
   "a": "Ben Cortes",
   "b": "Big G",
   "team": "Dill Dinkers Freehold",
   "n": 6,
   "w": 0,
   "l": 6,
   "synergy": 0,
   "avgActual": -5.7,
   "avgExpected": -5.7,
   "aId": "4d89659f-a86c-4416-93f2-5c868fe0e984",
   "bId": "f75516ca-4ed9-4ca2-84d3-a6af16b16a27"
  },
  {
   "a": "Joel Steinbrunner",
   "b": "Jesse Pettit",
   "team": "Dill Dinkers Newport",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0,
   "avgActual": -0.2,
   "avgExpected": -0.3,
   "aId": "d6628146-5ecf-46fa-9ec2-4385171098fd",
   "bId": "d6e30691-3b20-465b-8fa8-560017c20c15"
  },
  {
   "a": "Neil Dedhia",
   "b": "Aidan Fredericks",
   "team": "Pickle House",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0,
   "avgActual": 2.3,
   "avgExpected": 2.4,
   "aId": "20f3e907-41d8-40bb-8cef-cb6fed84a2aa",
   "bId": "a6d48fe9-1e3d-470b-8a0c-6061231f34ce"
  },
  {
   "a": "Dan Carpenter",
   "b": "Tom Kresky",
   "team": "Jersey Devil",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0,
   "avgActual": 1.8,
   "avgExpected": 1.7,
   "aId": "2811dd08-7b50-455b-bc23-46b064a912eb",
   "bId": "81875a5e-2b65-4152-bace-b4c96517579d"
  },
  {
   "a": "Noah Ludwigsen",
   "b": "Kyle Korman",
   "team": "Pickleball HQ",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0,
   "avgActual": 1.3,
   "avgExpected": 1.2,
   "aId": "67f9503a-202f-4982-8e97-9b3383a35aee",
   "bId": "d61a3828-6dfc-480a-b26a-534b0fe58268"
  },
  {
   "a": "Steppan Konoplev",
   "b": "Jesse Pettit",
   "team": "Dill Dinkers Newport",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0,
   "avgActual": -0.7,
   "avgExpected": -0.7,
   "aId": "8f076d51-25ba-4203-97f8-12194ba5b001",
   "bId": "d6e30691-3b20-465b-8fa8-560017c20c15"
  },
  {
   "a": "Graham Heavenrich",
   "b": "Matheus Korndoerfer",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.1,
   "avgActual": 4,
   "avgExpected": 4.3,
   "aId": "27d8a10f-ee9b-467c-bf8c-4872ce63de90",
   "bId": "e1f41428-436c-436e-b752-af9cead487be"
  },
  {
   "a": "Marc Kunesch",
   "b": "Jacob Yoo",
   "team": "Home Court",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 5.8,
   "avgExpected": 5.9,
   "aId": "aeaef27d-01b3-4fb2-91f3-4be8c7602aa3",
   "bId": "df0934fe-e584-4b4f-a549-a90499016d33"
  },
  {
   "a": "Uzoma Nwankwo",
   "b": "Andress Mims",
   "team": "APC Garden State",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.1,
   "avgActual": -3.5,
   "avgExpected": -3.4,
   "aId": "c6482905-6954-4241-a6c3-ba077c367846",
   "bId": "e9878f35-8a92-4887-834e-d8a76881ae41"
  },
  {
   "a": "Pritpal Singh",
   "b": "Venu Yengala",
   "team": "Pickleball Kingdom Hamilton",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 1.5,
   "avgExpected": 1.7,
   "aId": "631b24ae-9bc2-4db3-964b-33f86933021e",
   "bId": "b4cbf5ad-5c2c-46bf-bf50-f50683964b46"
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
   "a": "Cullen Curley",
   "b": "Samuel Kashefska",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 2,
   "avgExpected": 2.1,
   "aId": "8cebf901-66b9-41d0-963d-12dac7334c8f",
   "bId": "e4a31aff-39d6-49b3-95c4-131421e956a0"
  },
  {
   "a": "Andrew Mclean",
   "b": "Steven Hummel",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -1,
   "avgExpected": -0.7,
   "aId": "2d439cdc-347e-4beb-9975-1b31bc46f2df",
   "bId": "c5bf56d5-50a9-4a1f-a6f8-3f3f5af91cca"
  },
  {
   "a": "Jason Wu",
   "b": "Arnold Poblete",
   "team": "Picklr Newtown",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": -0.1,
   "avgActual": 4.8,
   "avgExpected": 5,
   "aId": "5e42a5f7-22d1-4613-a829-b62121ddc704",
   "bId": "c19e964a-d126-4e9f-9ce4-83c315f2f535"
  },
  {
   "a": "Kevin Lew",
   "b": "Erik Reilly",
   "team": "Dill Dinkers Freehold",
   "n": 12,
   "w": 4,
   "l": 8,
   "synergy": -0.1,
   "avgActual": -1,
   "avgExpected": -0.9,
   "aId": "03886b04-b474-4dda-b7f3-eb4f4954399c",
   "bId": "479815f2-1e14-4b96-9423-d99c15b2fe2b"
  },
  {
   "a": "Eric Berlinger",
   "b": "Josh Fink",
   "team": "Flemington",
   "n": 9,
   "w": 2,
   "l": 7,
   "synergy": -0.1,
   "avgActual": -2.4,
   "avgExpected": -2.3,
   "aId": "2fda2042-6613-42f8-ad93-c3cff9a58f3e",
   "bId": "6a70d918-9cd3-47d0-a40a-901a406452b6"
  },
  {
   "a": "Akash Raju",
   "b": "Lj Dequina",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 1.7,
   "avgExpected": 1.8,
   "aId": "a2fc30f9-b494-4781-900e-1e0b7d531f02",
   "bId": "e4cb9932-d672-4089-a643-f2d16e3bd98a"
  },
  {
   "a": "Yashraj Kurani",
   "b": "Marc Padre",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.1,
   "avgActual": 6.7,
   "avgExpected": 7,
   "aId": "63950363-4747-4faf-b89a-eb88f8b9e81d",
   "bId": "a131a707-f20e-4838-9dcf-7cecb40c2705"
  },
  {
   "a": "Buyi Zhang",
   "b": "Saad Talat Siddiqui",
   "team": "Allstar Pickler",
   "n": 6,
   "w": 0,
   "l": 6,
   "synergy": -0.1,
   "avgActual": -6.7,
   "avgExpected": -6.5,
   "aId": "abd55992-7237-4a92-817d-3d39388369c9",
   "bId": "ebfeb773-e8cd-4b6a-aafd-ee2772540168"
  },
  {
   "a": "Jason Feldman",
   "b": "Timothy Lynskey",
   "team": "Premiere",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.1,
   "avgActual": 5.7,
   "avgExpected": 5.9,
   "aId": "5636cdc5-7a65-4202-abbb-5999eee35ab3",
   "bId": "718c6948-a987-43bb-a1f3-cf7aead75edb"
  },
  {
   "a": "Harsh Upadhyaya",
   "b": "Aaron Chan",
   "team": "Pickleball Kingdom Hamilton",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -1.7,
   "avgExpected": -1.3,
   "aId": "3b9648e1-481c-4007-9932-d8df648f7bab",
   "bId": "57666861-23d0-4809-9556-b646579f2fd6"
  },
  {
   "a": "Jimmy Ramja",
   "b": "Nesip Cengiz",
   "team": "Pickleball HQ",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 0.7,
   "avgExpected": 0.9,
   "aId": "ade57877-7c11-4a46-88bf-789a50906901",
   "bId": "c737d3dd-dfe2-4f58-a095-fb40fc601866"
  },
  {
   "a": "Jack Barry",
   "b": "Jonathan Dong",
   "team": "PickleRage Union County",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": -0.1,
   "avgActual": 0,
   "avgExpected": 0.1,
   "aId": "763342e5-4d13-45b7-8630-9d840cb7b8b3",
   "bId": "edbeb52a-85fd-48ff-acc5-a5c8415a731d"
  },
  {
   "a": "Josh Fink",
   "b": "David Shapiro",
   "team": "Flemington",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -0.7,
   "avgExpected": -0.6,
   "aId": "6a70d918-9cd3-47d0-a40a-901a406452b6",
   "bId": "c39cd158-0c19-4819-8653-18084e6ce982"
  },
  {
   "a": "Pat Wilson",
   "b": "Ricky Jutkiewicz",
   "team": "Home Court",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 2,
   "avgExpected": 2.3,
   "aId": "2e77eb09-81b2-4cc7-8ed1-4cbf034705f6",
   "bId": "a24bc2af-aca9-45dd-a827-12fb12f7b784"
  },
  {
   "a": "Graham Heavenrich",
   "b": "Harvey Mitchell",
   "team": "Bounce Malvern",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": -0.2,
   "avgActual": 6.8,
   "avgExpected": 7.1,
   "aId": "27d8a10f-ee9b-467c-bf8c-4872ce63de90",
   "bId": "c5fa38d0-add2-462c-b3de-5b62dd4d1386"
  },
  {
   "a": "Dennis Yap",
   "b": "Jacob Yoo",
   "team": "Home Court",
   "n": 10,
   "w": 7,
   "l": 3,
   "synergy": -0.2,
   "avgActual": 2.4,
   "avgExpected": 2.7,
   "aId": "45ea05c6-ef48-4b0a-9f71-a640be038d08",
   "bId": "df0934fe-e584-4b4f-a549-a90499016d33"
  },
  {
   "a": "Matt Inzerillo",
   "b": "Tyler Bayly",
   "team": "APC Garden State",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.2,
   "avgActual": -0.8,
   "avgExpected": -0.4,
   "aId": "51ceabf9-8258-4835-9835-c7d915220185",
   "bId": "642b7fc5-f304-459a-889e-e726dc9edeab"
  },
  {
   "a": "Mario Contreras",
   "b": "Jonathan Carter",
   "team": "Jersey Devil",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.2,
   "avgActual": -5,
   "avgExpected": -4.7,
   "aId": "323d96c3-4160-410b-96a5-87263e825f62",
   "bId": "33fe293d-5913-41af-8f89-4a431ed92ab7"
  },
  {
   "a": "Bennett Pereira",
   "b": "Ping Peng",
   "team": "Pickle House",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.2,
   "avgActual": 0.3,
   "avgExpected": 0.7,
   "aId": "6a2ea39b-8b67-4cdf-83f7-c16fb3224655",
   "bId": "7af65ce9-d7e3-4d00-b19b-653e6d2dc8d9"
  },
  {
   "a": "Aaron Chan",
   "b": "Dhruv Dobariya",
   "team": "Pickleball Kingdom Hamilton",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -0.2,
   "avgActual": -5.4,
   "avgExpected": -5,
   "aId": "57666861-23d0-4809-9556-b646579f2fd6",
   "bId": "ac44fd3c-0c87-47aa-bf26-4333b632f524"
  },
  {
   "a": "Dan Yang",
   "b": "Jack Barry",
   "team": "PickleRage Union County",
   "n": 10,
   "w": 7,
   "l": 3,
   "synergy": -0.2,
   "avgActual": 1.1,
   "avgExpected": 1.4,
   "aId": "667a80aa-7b06-46b5-a4ae-6989224ab5f9",
   "bId": "763342e5-4d13-45b7-8630-9d840cb7b8b3"
  },
  {
   "a": "Franklin Lupianez",
   "b": "Eric Berlinger",
   "team": "Flemington",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.2,
   "avgActual": -1.7,
   "avgExpected": -1.4,
   "aId": "17caef8b-84d4-4052-9695-7c74190925a1",
   "bId": "2fda2042-6613-42f8-ad93-c3cff9a58f3e"
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
   "a": "John Manuzza",
   "b": "Brandon Tsang",
   "team": "Montville",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 2.8,
   "avgExpected": 3.1,
   "aId": "5d3156e6-7886-4184-9d2f-3ec44d72bb3b",
   "bId": "c80b5964-35f3-46b9-a0fa-9c3c9c673161"
  },
  {
   "a": "Jimmy Duong",
   "b": "Gary Garretson",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.2,
   "avgActual": -1.3,
   "avgExpected": -0.8,
   "aId": "06a3741d-10e5-462b-ba95-aa997d4eb8ea",
   "bId": "d4126276-6b83-42be-b943-9957df46992c"
  },
  {
   "a": "Bill Violette",
   "b": "Steppan Konoplev",
   "team": "Dill Dinkers Newport",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.2,
   "avgActual": -3.2,
   "avgExpected": -2.9,
   "aId": "63eeb91c-2c9c-4dbe-8662-58fbb1d95092",
   "bId": "8f076d51-25ba-4203-97f8-12194ba5b001"
  },
  {
   "a": "Noah Ludwigsen",
   "b": "Luca Hendrickson",
   "team": "Pickleball HQ",
   "n": 12,
   "w": 8,
   "l": 4,
   "synergy": -0.2,
   "avgActual": 3.2,
   "avgExpected": 3.4,
   "aId": "67f9503a-202f-4982-8e97-9b3383a35aee",
   "bId": "bd14255e-c654-49a4-99a1-26e02c67c7c7"
  },
  {
   "a": "Jeff Laniado",
   "b": "Umang Pathak",
   "team": "Montville",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": -0.2,
   "avgActual": 4.3,
   "avgExpected": 4.7,
   "aId": "06d52e99-941a-4ced-9968-f56e6075105a",
   "bId": "30ecad69-b82a-45aa-94c5-f0f7869a0d12"
  },
  {
   "a": "Dennis Yap",
   "b": "Bryan Mccourt",
   "team": "Home Court",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 0.8,
   "avgExpected": 1.2,
   "aId": "45ea05c6-ef48-4b0a-9f71-a640be038d08",
   "bId": "74f9fe34-f8c5-49dd-b504-939d0b4f5aaa"
  },
  {
   "a": "Daniel Hadley",
   "b": "Frederick Cox",
   "team": "Jersey Devil",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -0.2,
   "avgActual": -3.2,
   "avgExpected": -2.8,
   "aId": "23adcd68-130d-4176-b367-d3cd31260d21",
   "bId": "e8aee14f-dbc4-4e5c-be4a-4f948e2e13fc"
  },
  {
   "a": "Harrison Bohrer",
   "b": "Lincoln Jensen",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 0.8,
   "avgExpected": 1.1,
   "aId": "8a4095e6-2a3e-4a88-a6d2-8c1da135ce42",
   "bId": "98842749-0d7d-4b20-b78a-50c79d087699"
  },
  {
   "a": "Christopher Uston",
   "b": "Tim Bruno",
   "team": "Jersey Devil",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.2,
   "avgActual": -2,
   "avgExpected": -1.5,
   "aId": "e1f6c6fa-db86-4fed-9faa-dbc2fe29f373",
   "bId": "ef5a4f7c-58d1-42fa-81c2-1f9f09a60a0f"
  },
  {
   "a": "Uday Acham",
   "b": "Siva Indupuru",
   "team": "Dill Dinkers Freehold",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.2,
   "avgActual": -1,
   "avgExpected": -0.7,
   "aId": "29646b59-bcf0-4a90-a70d-2824eb639c4c",
   "bId": "5f264528-efdb-4bda-88ed-8003f98c1c9b"
  },
  {
   "a": "Andrew Neave",
   "b": "Matheus Korndoerfer",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": -0.2,
   "avgActual": 3.3,
   "avgExpected": 3.7,
   "aId": "2f7d6c14-4f06-470b-a4ba-f28199e823b0",
   "bId": "e1f41428-436c-436e-b752-af9cead487be"
  },
  {
   "a": "Dan Yang",
   "b": "Jonathan Dong",
   "team": "PickleRage Union County",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": -0.2,
   "avgActual": -0.3,
   "avgExpected": 0,
   "aId": "667a80aa-7b06-46b5-a4ae-6989224ab5f9",
   "bId": "edbeb52a-85fd-48ff-acc5-a5c8415a731d"
  },
  {
   "a": "Eric Ruiz",
   "b": "Carlos Rincon",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.2,
   "avgActual": -1.7,
   "avgExpected": -1.2,
   "aId": "505e9bce-f386-4a4f-9a41-a1d7e0bb0527",
   "bId": "9886815c-3bf4-42b1-b650-1ec17ff2c167"
  },
  {
   "a": "Jason Mcmanmon",
   "b": "Shawn Gold",
   "team": "Monroe",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -0.3,
   "avgActual": -2,
   "avgExpected": -1.6,
   "aId": "9adf9c4e-91c0-4483-af44-9ad4a86a81ce",
   "bId": "e2d70cc7-b655-43d5-a059-063bfe722001"
  },
  {
   "a": "Jr Burrs",
   "b": "Ryan Hathaway",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 2.7,
   "avgExpected": 3.3,
   "aId": "870112b1-afc3-4ff6-b784-7f872210bf37",
   "bId": "8b8ebfab-9618-4bba-a52b-6aa7679d3390"
  },
  {
   "a": "Gianni Roman",
   "b": "Sean Majury",
   "team": "Allstar Pickler",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -0.3,
   "avgActual": -7,
   "avgExpected": -6.4,
   "aId": "22294f41-611f-4e8f-962e-377e43209945",
   "bId": "e41c0cda-fb97-4912-8e8a-fa99ff1725d0"
  },
  {
   "a": "Michael Vincent",
   "b": "Ricky Jutkiewicz",
   "team": "Home Court",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 2.8,
   "avgExpected": 3.3,
   "aId": "7f44421c-476c-4857-99ed-3376b32289ca",
   "bId": "a24bc2af-aca9-45dd-a827-12fb12f7b784"
  },
  {
   "a": "Bruce Nguyen",
   "b": "Daniel Dechristopher",
   "team": "APC Garden State",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": -0.3,
   "avgActual": 4.5,
   "avgExpected": 5.1,
   "aId": "33233dc6-b78e-4deb-88d4-2742aacf5eb9",
   "bId": "899ba1d1-37e5-4ad6-8daa-f726376776e5"
  },
  {
   "a": "Brandon Dejesus",
   "b": "Tim Bruno",
   "team": "Jersey Devil",
   "n": 9,
   "w": 6,
   "l": 3,
   "synergy": -0.3,
   "avgActual": 1.3,
   "avgExpected": 1.7,
   "aId": "d50feac2-f147-47d2-8930-99b21b2842ba",
   "bId": "ef5a4f7c-58d1-42fa-81c2-1f9f09a60a0f"
  },
  {
   "a": "Harsh Upadhyaya",
   "b": "Dilip Patel",
   "team": "Pickleball Kingdom Hamilton",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.3,
   "avgActual": -1.8,
   "avgExpected": -1.2,
   "aId": "3b9648e1-481c-4007-9932-d8df648f7bab",
   "bId": "7573445f-7dbd-4c2f-867a-ae95ae7ed168"
  },
  {
   "a": "Anil Kumar Jakkaladki",
   "b": "Jitendra Arora",
   "team": "Pickle House",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": -0.3,
   "avgActual": 0.3,
   "avgExpected": 0.7,
   "aId": "176df588-c3ff-4b50-a66a-4df99647254b",
   "bId": "a117b66b-f319-4fc0-8ee2-feb3f17767d0"
  },
  {
   "a": "Ping Peng",
   "b": "Sushil Rijhwani",
   "team": "Pickle House",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.3,
   "avgActual": 0,
   "avgExpected": 0.5,
   "aId": "7af65ce9-d7e3-4d00-b19b-653e6d2dc8d9",
   "bId": "8fea334f-ad12-4c45-b67d-a127ec551f4e"
  },
  {
   "a": "Aaron Chan",
   "b": "Ziyu Huang",
   "team": "Pickleball Kingdom Hamilton",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.3,
   "avgActual": -3,
   "avgExpected": -2.4,
   "aId": "57666861-23d0-4809-9556-b646579f2fd6",
   "bId": "d06d8b3c-72d6-4ae3-ade8-d7cb7cbd70f7"
  },
  {
   "a": "Eric Berlinger",
   "b": "Josh Rito",
   "team": "Flemington",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -2.2,
   "avgExpected": -1.7,
   "aId": "2fda2042-6613-42f8-ad93-c3cff9a58f3e",
   "bId": "a4c54a14-35b4-4b90-aabd-3d81ad719f4d"
  },
  {
   "a": "Rohit Mankotia",
   "b": "David Reyes",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 0.3,
   "avgExpected": 1.1,
   "aId": "541e3e2d-76eb-4cd3-9bfe-9f94c0b9cdeb",
   "bId": "adc043ce-7b2d-4ae9-87e0-c927f28c473a"
  },
  {
   "a": "Ayon Codner",
   "b": "Cullen Curley",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.3,
   "avgActual": 1.2,
   "avgExpected": 1.7,
   "aId": "497b0077-b7ae-4025-ad32-94c9da47ab80",
   "bId": "8cebf901-66b9-41d0-963d-12dac7334c8f"
  },
  {
   "a": "Shalin Rawal",
   "b": "John Manuzza",
   "team": "Montville",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": -0.3,
   "avgActual": 4.3,
   "avgExpected": 4.9,
   "aId": "08530d21-2dc5-4f71-9d49-9191ec192860",
   "bId": "5d3156e6-7886-4184-9d2f-3ec44d72bb3b"
  },
  {
   "a": "Akash Raju",
   "b": "Christopher Monzon",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.3,
   "avgActual": -1.7,
   "avgExpected": -0.9,
   "aId": "a2fc30f9-b494-4781-900e-1e0b7d531f02",
   "bId": "b205e6a7-d62d-42bf-b2d5-e7e5d0c109ec"
  },
  {
   "a": "Matt Inzerillo",
   "b": "Jimmy Shapiro",
   "team": "APC Garden State",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.3,
   "avgActual": -0.2,
   "avgExpected": 0.4,
   "aId": "51ceabf9-8258-4835-9835-c7d915220185",
   "bId": "7b57c36d-a6eb-470e-b132-26d1f2a47b74"
  },
  {
   "a": "Uttam Purohit",
   "b": "Salman Saad",
   "team": "Monroe",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.3,
   "avgActual": 1,
   "avgExpected": 1.6,
   "aId": "5bec8637-0324-4af8-8084-3779e0f43521",
   "bId": "f7c4d103-d246-456d-8fd5-6418c6a0e002"
  },
  {
   "a": "Tyler Bayly",
   "b": "Yongzhe Tian",
   "team": "APC Garden State",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 3.8,
   "avgExpected": 4.4,
   "aId": "642b7fc5-f304-459a-889e-e726dc9edeab",
   "bId": "e1a924b8-3b3a-4780-8348-08a730ba61f2"
  },
  {
   "a": "John Pineda",
   "b": "Craig Butler",
   "team": "Flemington",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.3,
   "avgActual": -6.5,
   "avgExpected": -5.9,
   "aId": "099e3831-88c1-4907-9869-f193db58b64b",
   "bId": "b50c51e8-3ce3-44ec-98e7-6cc11a705f17"
  },
  {
   "a": "Matthew Carrington",
   "b": "Jacob Yoo",
   "team": "Home Court",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.3,
   "avgActual": 0.8,
   "avgExpected": 1.3,
   "aId": "6a2f3777-38b2-4f02-b550-ce38395914d2",
   "bId": "df0934fe-e584-4b4f-a549-a90499016d33"
  },
  {
   "a": "Kurt Skalamera",
   "b": "Jacob Rosengarten",
   "team": "Monroe",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -5.7,
   "avgExpected": -4.8,
   "aId": "04000200-8214-42ff-9a0d-2189ffaccd42",
   "bId": "b2f8ea85-7734-47a2-8ce7-bd968b3a51bc"
  },
  {
   "a": "Leland Weinert",
   "b": "Jr Burrs",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": -0.4,
   "avgActual": 3.8,
   "avgExpected": 4.6,
   "aId": "3196f425-e79a-4def-b7c3-bc3205976ba3",
   "bId": "870112b1-afc3-4ff6-b784-7f872210bf37"
  },
  {
   "a": "Jordan Demcher",
   "b": "Harvey Mitchell",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.4,
   "avgActual": 4.7,
   "avgExpected": 5.6,
   "aId": "6d1beb10-bd5c-456f-95b5-1823752e8c62",
   "bId": "c5fa38d0-add2-462c-b3de-5b62dd4d1386"
  },
  {
   "a": "Matt Enz",
   "b": "Jr Burrs",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": -0.4,
   "avgActual": 6.8,
   "avgExpected": 7.5,
   "aId": "683d1fdd-2fa0-4775-a8dd-0f733aa9f1a3",
   "bId": "870112b1-afc3-4ff6-b784-7f872210bf37"
  },
  {
   "a": "David Brandolph",
   "b": "Jimmy Lee",
   "team": "Bounce Tempest",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.4,
   "avgActual": 1.2,
   "avgExpected": 1.9,
   "aId": "be10853a-1f2c-4b56-8fd7-902ddc686401",
   "bId": "f2c53e42-1eac-48dd-9c93-682ec5c1ac98"
  },
  {
   "a": "Ping Peng",
   "b": "Avneesh Agarwal",
   "team": "Pickle House",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.4,
   "avgActual": -2.3,
   "avgExpected": -1.3,
   "aId": "7af65ce9-d7e3-4d00-b19b-653e6d2dc8d9",
   "bId": "f0ac7d85-0e7b-4f28-80fe-3282c3c875ed"
  },
  {
   "a": "Jeff Axelrad",
   "b": "Brandon Tsang",
   "team": "Montville",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.4,
   "avgActual": 2.3,
   "avgExpected": 3.4,
   "aId": "27009a0b-037c-4934-9f52-d21c928ef173",
   "bId": "c80b5964-35f3-46b9-a0fa-9c3c9c673161"
  },
  {
   "a": "Bill Olderman",
   "b": "Umang Pathak",
   "team": "Montville",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.4,
   "avgActual": 3.3,
   "avgExpected": 4.2,
   "aId": "30c847e2-9b5e-4ad7-851d-9d624f94a11b",
   "bId": "30ecad69-b82a-45aa-94c5-f0f7869a0d12"
  },
  {
   "a": "Eric Ruiz",
   "b": "Rohit Mankotia",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.4,
   "avgActual": 0.7,
   "avgExpected": 1.4,
   "aId": "505e9bce-f386-4a4f-9a41-a1d7e0bb0527",
   "bId": "541e3e2d-76eb-4cd3-9bfe-9f94c0b9cdeb"
  },
  {
   "a": "Mathew Yang",
   "b": "Angelo Disipio",
   "team": "Picklr Newtown",
   "n": 9,
   "w": 3,
   "l": 6,
   "synergy": -0.4,
   "avgActual": -3.3,
   "avgExpected": -2.7,
   "aId": "12ec758b-f05d-40ec-b082-a76f07cbe792",
   "bId": "79bb5bba-c449-4cdd-948b-fb5f8efdaebb"
  },
  {
   "a": "Hua Lin",
   "b": "Wensheng Yue",
   "team": "Dill Dinkers Freehold",
   "n": 9,
   "w": 3,
   "l": 6,
   "synergy": -0.4,
   "avgActual": -1.6,
   "avgExpected": -0.9,
   "aId": "6b263caa-80f7-40d2-9248-559f91ffe71e",
   "bId": "d11f5bc0-8b23-488d-86fb-13eebe9e2257"
  },
  {
   "a": "Niman Ahmeti",
   "b": "Nesip Cengiz",
   "team": "Pickleball HQ",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -2.6,
   "avgExpected": -1.9,
   "aId": "40681083-620d-4293-829f-91121323135c",
   "bId": "c737d3dd-dfe2-4f58-a095-fb40fc601866"
  },
  {
   "a": "Christopher Hendrickson",
   "b": "Kyle Korman",
   "team": "Pickleball HQ",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -0.4,
   "avgActual": 3.2,
   "avgExpected": 4,
   "aId": "7fc1ed1b-4763-49b4-a077-46a92c0df3d6",
   "bId": "d61a3828-6dfc-480a-b26a-534b0fe58268"
  },
  {
   "a": "Jose Campos",
   "b": "Luca Hendrickson",
   "team": "Pickleball HQ",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.4,
   "avgActual": 1,
   "avgExpected": 2,
   "aId": "197e3b9a-eded-4a87-8391-13a7c6d18c8f",
   "bId": "bd14255e-c654-49a4-99a1-26e02c67c7c7"
  },
  {
   "a": "Ali Bhimji",
   "b": "Carlos Rincon",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.4,
   "avgActual": -0.2,
   "avgExpected": 0.6,
   "aId": "3651f648-493a-4517-8085-a8b9cb086c07",
   "bId": "9886815c-3bf4-42b1-b650-1ec17ff2c167"
  },
  {
   "a": "J-P Lautenschlager",
   "b": "Mike Leach",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.4,
   "avgActual": -4.3,
   "avgExpected": -3.4,
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
   "synergy": -0.4,
   "avgActual": -2,
   "avgExpected": -1.2,
   "aId": "79bb5bba-c449-4cdd-948b-fb5f8efdaebb",
   "bId": "f3f6addc-ea42-4e7b-ac54-67bf69cffeeb"
  },
  {
   "a": "Thomas Moran",
   "b": "Jimmy Ramja",
   "team": "Pickleball HQ",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.4,
   "avgActual": 0.2,
   "avgExpected": 1,
   "aId": "9571d7b5-fc34-4c77-a51f-c99b286e4304",
   "bId": "ade57877-7c11-4a46-88bf-789a50906901"
  },
  {
   "a": "Jordan Demcher",
   "b": "Charles Evans",
   "team": "Bounce Malvern",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.4,
   "avgActual": 2,
   "avgExpected": 2.7,
   "aId": "6d1beb10-bd5c-456f-95b5-1823752e8c62",
   "bId": "ebc8788f-79c2-4204-a14a-47b6bc480d5d"
  },
  {
   "a": "Shreyas Suresh Hassan",
   "b": "Jonathan Dong",
   "team": "PickleRage Union County",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": -0.4,
   "avgActual": -0.7,
   "avgExpected": -0.2,
   "aId": "e1d9f3bc-ec4e-4690-810c-a67452049768",
   "bId": "edbeb52a-85fd-48ff-acc5-a5c8415a731d"
  },
  {
   "a": "Vinay Mutt",
   "b": "Shreyas Suresh Hassan",
   "team": "PickleRage Union County",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.4,
   "avgActual": -3.8,
   "avgExpected": -3.2,
   "aId": "7caafc32-1aed-4fb7-b145-baf82cbbe2d2",
   "bId": "e1d9f3bc-ec4e-4690-810c-a67452049768"
  },
  {
   "a": "Sean Diamond",
   "b": "Francis Thai",
   "team": "PickleRage Union County",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -7.3,
   "avgExpected": -6.3,
   "aId": "635ba257-e1ed-4db3-8303-5f241388437e",
   "bId": "a78758b7-fe50-4865-b059-83a9d177e857"
  },
  {
   "a": "Dennis Yap",
   "b": "Michael Gilbert",
   "team": "Home Court",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.4,
   "avgActual": -1,
   "avgExpected": 0,
   "aId": "45ea05c6-ef48-4b0a-9f71-a640be038d08",
   "bId": "5acb8305-77d8-4089-88b6-9fbfa9400f6a"
  },
  {
   "a": "Franklin Yiu",
   "b": "Gianni Roman",
   "team": "Allstar Pickler",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -6.5,
   "avgExpected": -5.5,
   "aId": "020affa0-bff4-49cb-94c0-a9eb9ba09b77",
   "bId": "22294f41-611f-4e8f-962e-377e43209945"
  },
  {
   "a": "Brandon Fulford",
   "b": "Sean Majury",
   "team": "Allstar Pickler",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -3,
   "avgExpected": -2.1,
   "aId": "906383cd-e781-48bc-9004-0fc5427c7e62",
   "bId": "e41c0cda-fb97-4912-8e8a-fa99ff1725d0"
  },
  {
   "a": "Elias Eid",
   "b": "Brandon Fulford",
   "team": "Allstar Pickler",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -4,
   "avgExpected": -2.9,
   "aId": "77f18b1c-db78-4d0e-b81d-6d1efde8bb08",
   "bId": "906383cd-e781-48bc-9004-0fc5427c7e62"
  },
  {
   "a": "Mark Waters",
   "b": "Tyler Bayly",
   "team": "APC Garden State",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.5,
   "avgActual": 2.7,
   "avgExpected": 3.8,
   "aId": "1baee0ad-faae-4c61-894a-a347710fdfea",
   "bId": "642b7fc5-f304-459a-889e-e726dc9edeab"
  },
  {
   "a": "Ren Macalalag",
   "b": "Francis Thai",
   "team": "PickleRage Union County",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.5,
   "avgActual": -3.8,
   "avgExpected": -3,
   "aId": "24db47b3-dedc-418d-9210-3b5fea1952da",
   "bId": "a78758b7-fe50-4865-b059-83a9d177e857"
  },
  {
   "a": "Rohit Mankotia",
   "b": "Kevin Tran",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.5,
   "avgActual": 0.5,
   "avgExpected": 1.3,
   "aId": "541e3e2d-76eb-4cd3-9bfe-9f94c0b9cdeb",
   "bId": "5a604a32-f8bf-45a8-b6b3-ef2922e0eeaf"
  },
  {
   "a": "Alessio Muscara",
   "b": "Steven Hummel",
   "team": "Picklr Newtown",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": -0.5,
   "avgActual": 1.3,
   "avgExpected": 2.2,
   "aId": "4a5131e4-a912-4913-8ff5-9281e53c6974",
   "bId": "c5bf56d5-50a9-4a1f-a6f8-3f3f5af91cca"
  },
  {
   "a": "Noah Ludwigsen",
   "b": "Christopher Hendrickson",
   "team": "Pickleball HQ",
   "n": 12,
   "w": 10,
   "l": 2,
   "synergy": -0.5,
   "avgActual": 3.7,
   "avgExpected": 4.3,
   "aId": "67f9503a-202f-4982-8e97-9b3383a35aee",
   "bId": "7fc1ed1b-4763-49b4-a077-46a92c0df3d6"
  },
  {
   "a": "Ali Bhimji",
   "b": "Ayon Codner",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.5,
   "avgActual": 0.7,
   "avgExpected": 1.8,
   "aId": "3651f648-493a-4517-8085-a8b9cb086c07",
   "bId": "497b0077-b7ae-4025-ad32-94c9da47ab80"
  },
  {
   "a": "Franklin Yiu",
   "b": "John Sallo",
   "team": "Allstar Pickler",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.5,
   "avgActual": -5,
   "avgExpected": -3.9,
   "aId": "020affa0-bff4-49cb-94c0-a9eb9ba09b77",
   "bId": "b379a353-c35e-4a6e-8ea4-ea21ebcdafa0"
  },
  {
   "a": "Mark Waters",
   "b": "Uzoma Nwankwo",
   "team": "APC Garden State",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -1.7,
   "avgExpected": -0.7,
   "aId": "1baee0ad-faae-4c61-894a-a347710fdfea",
   "bId": "c6482905-6954-4241-a6c3-ba077c367846"
  },
  {
   "a": "Paul Perumaly",
   "b": "Yong Kim",
   "team": "Bounce Tempest",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.5,
   "avgActual": 0.5,
   "avgExpected": 1.5,
   "aId": "9d9eff5c-bb8e-47b7-b1e6-7e4c7055bb8b",
   "bId": "ca670ae8-0768-49d4-9984-f708cd52786c"
  },
  {
   "a": "Graham Heavenrich",
   "b": "Lincoln Jensen",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.5,
   "avgActual": 1,
   "avgExpected": 2,
   "aId": "27d8a10f-ee9b-467c-bf8c-4872ce63de90",
   "bId": "98842749-0d7d-4b20-b78a-50c79d087699"
  },
  {
   "a": "Neil Dedhia",
   "b": "Varun Gurram",
   "team": "Pickle House",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.5,
   "avgActual": 1.8,
   "avgExpected": 2.7,
   "aId": "20f3e907-41d8-40bb-8cef-cb6fed84a2aa",
   "bId": "44864b51-f901-4470-a6bd-891495ffd132"
  },
  {
   "a": "John Pineda",
   "b": "Eric Berlinger",
   "team": "Flemington",
   "n": 6,
   "w": 0,
   "l": 6,
   "synergy": -0.5,
   "avgActual": -6.3,
   "avgExpected": -5.5,
   "aId": "099e3831-88c1-4907-9869-f193db58b64b",
   "bId": "2fda2042-6613-42f8-ad93-c3cff9a58f3e"
  },
  {
   "a": "Ben Cortes",
   "b": "Ian Kohn",
   "team": "Dill Dinkers Freehold",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -0.5,
   "avgActual": -7.8,
   "avgExpected": -6.9,
   "aId": "4d89659f-a86c-4416-93f2-5c868fe0e984",
   "bId": "ef0e9803-0038-4cb9-ad16-a55c54f00339"
  },
  {
   "a": "Jack Barry",
   "b": "Vinay Mutt",
   "team": "PickleRage Union County",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -1.7,
   "avgExpected": -0.8,
   "aId": "763342e5-4d13-45b7-8630-9d840cb7b8b3",
   "bId": "7caafc32-1aed-4fb7-b145-baf82cbbe2d2"
  },
  {
   "a": "Neil Dedhia",
   "b": "Sree Harsha Konduru",
   "team": "Pickle House",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.5,
   "avgActual": 1,
   "avgExpected": 2.1,
   "aId": "20f3e907-41d8-40bb-8cef-cb6fed84a2aa",
   "bId": "439cf2c1-044c-450c-9dcc-4fdeafbb81cd"
  },
  {
   "a": "Allan Orchard",
   "b": "Sean Majury",
   "team": "Allstar Pickler",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -2,
   "avgExpected": -1.1,
   "aId": "4f34c672-f457-467f-98d8-7d5d6c8add16",
   "bId": "e41c0cda-fb97-4912-8e8a-fa99ff1725d0"
  },
  {
   "a": "Eric Ruiz",
   "b": "Samuel Kashefska",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 8,
   "w": 3,
   "l": 5,
   "synergy": -0.6,
   "avgActual": 0.6,
   "avgExpected": 1.5,
   "aId": "505e9bce-f386-4a4f-9a41-a1d7e0bb0527",
   "bId": "e4a31aff-39d6-49b3-95c4-131421e956a0"
  },
  {
   "a": "Ayon Codner",
   "b": "Samuel Kashefska",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": -0.6,
   "avgActual": 1.3,
   "avgExpected": 2.2,
   "aId": "497b0077-b7ae-4025-ad32-94c9da47ab80",
   "bId": "e4a31aff-39d6-49b3-95c4-131421e956a0"
  },
  {
   "a": "Cullen Curley",
   "b": "David Reyes",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.6,
   "avgActual": 0.5,
   "avgExpected": 1.7,
   "aId": "8cebf901-66b9-41d0-963d-12dac7334c8f",
   "bId": "adc043ce-7b2d-4ae9-87e0-c927f28c473a"
  },
  {
   "a": "Anthony Simonetti",
   "b": "Luca Hendrickson",
   "team": "Pickleball HQ",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": -0.6,
   "avgActual": 1.9,
   "avgExpected": 2.8,
   "aId": "3a2b64a1-6eb6-41e4-92fe-8da3d95af11b",
   "bId": "bd14255e-c654-49a4-99a1-26e02c67c7c7"
  },
  {
   "a": "Joseph Luka",
   "b": "Jimmy Lee",
   "team": "Bounce Tempest",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -0.6,
   "avgActual": -2.8,
   "avgExpected": -1.7,
   "aId": "482a6a13-3cb9-438b-8494-3f70a4f1cffe",
   "bId": "f2c53e42-1eac-48dd-9c93-682ec5c1ac98"
  },
  {
   "a": "Jordan Demcher",
   "b": "Jamison Rowles",
   "team": "Bounce Malvern",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -0.6,
   "avgActual": 3.6,
   "avgExpected": 4.6,
   "aId": "6d1beb10-bd5c-456f-95b5-1823752e8c62",
   "bId": "cae7c2db-b4d5-4927-9c44-ff92176b5507"
  },
  {
   "a": "Leon Li",
   "b": "Nicholas Lugo",
   "team": "Monroe",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -1.2,
   "avgExpected": 0,
   "aId": "528de93e-9cf4-480d-a9ba-5b20f6f23f87",
   "bId": "8f9be7cc-3ddf-436f-8727-02cbdd0d453f"
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
   "avgExpected": 1.3,
   "aId": "27d8a10f-ee9b-467c-bf8c-4872ce63de90",
   "bId": "2f7d6c14-4f06-470b-a4ba-f28199e823b0"
  },
  {
   "a": "Ethan Fu",
   "b": "Jimmy Lee",
   "team": "Bounce Tempest",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -0.7,
   "avgActual": -2.4,
   "avgExpected": -1.3,
   "aId": "a8585e9c-872e-466c-9583-9680e557f757",
   "bId": "f2c53e42-1eac-48dd-9c93-682ec5c1ac98"
  },
  {
   "a": "Gianni Roman",
   "b": "Peter Chen",
   "team": "Allstar Pickler",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -9,
   "avgExpected": -7.3,
   "aId": "22294f41-611f-4e8f-962e-377e43209945",
   "bId": "8767c73e-fa5a-4e68-9ded-850b7ab50693"
  },
  {
   "a": "Michael Vincent",
   "b": "Marc Kunesch",
   "team": "Home Court",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -0.7,
   "avgActual": 2.8,
   "avgExpected": 4.1,
   "aId": "7f44421c-476c-4857-99ed-3376b32289ca",
   "bId": "aeaef27d-01b3-4fb2-91f3-4be8c7602aa3"
  },
  {
   "a": "Bennett Pereira",
   "b": "Sushil Rijhwani",
   "team": "Pickle House",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -2,
   "avgExpected": -0.4,
   "aId": "6a2ea39b-8b67-4cdf-83f7-c16fb3224655",
   "bId": "8fea334f-ad12-4c45-b67d-a127ec551f4e"
  },
  {
   "a": "Venu Yengala",
   "b": "Ziyu Huang",
   "team": "Pickleball Kingdom Hamilton",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -0.7,
   "avgActual": -2.3,
   "avgExpected": -1.1,
   "aId": "b4cbf5ad-5c2c-46bf-bf50-f50683964b46",
   "bId": "d06d8b3c-72d6-4ae3-ade8-d7cb7cbd70f7"
  },
  {
   "a": "Josh Rito",
   "b": "Craig Butler",
   "team": "Flemington",
   "n": 9,
   "w": 1,
   "l": 8,
   "synergy": -0.7,
   "avgActual": -5,
   "avgExpected": -3.9,
   "aId": "a4c54a14-35b4-4b90-aabd-3d81ad719f4d",
   "bId": "b50c51e8-3ce3-44ec-98e7-6cc11a705f17"
  },
  {
   "a": "Ayon Codner",
   "b": "Kevin Tran",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.7,
   "avgActual": 0.3,
   "avgExpected": 2,
   "aId": "497b0077-b7ae-4025-ad32-94c9da47ab80",
   "bId": "5a604a32-f8bf-45a8-b6b3-ef2922e0eeaf"
  },
  {
   "a": "Steppan Konoplev",
   "b": "Xan Hong",
   "team": "Dill Dinkers Newport",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -6,
   "avgExpected": -4.4,
   "aId": "8f076d51-25ba-4203-97f8-12194ba5b001",
   "bId": "e83b9a6f-83c6-4b66-a470-a0cae4f462df"
  },
  {
   "a": "John Fallone",
   "b": "Josh Rito",
   "team": "Flemington",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -7,
   "avgExpected": -5.5,
   "aId": "5127c0b9-aaf8-49c5-a94f-bf92e7ae60f8",
   "bId": "a4c54a14-35b4-4b90-aabd-3d81ad719f4d"
  },
  {
   "a": "Alessio Muscara",
   "b": "J-P Lautenschlager",
   "team": "Picklr Newtown",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.7,
   "avgActual": -2.5,
   "avgExpected": -1.3,
   "aId": "4a5131e4-a912-4913-8ff5-9281e53c6974",
   "bId": "5c3659f9-08d3-4745-832b-f7dd3f8c5ae5"
  },
  {
   "a": "Aaron Chan",
   "b": "Ashish Kumar",
   "team": "Pickleball Kingdom Hamilton",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -0.7,
   "avgExpected": 1,
   "aId": "57666861-23d0-4809-9556-b646579f2fd6",
   "bId": "5df02573-21d4-40ea-8b41-f81372a474b3"
  },
  {
   "a": "Daniel Antonelli",
   "b": "Christopher Giasi",
   "team": "Premiere",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -0.8,
   "avgExpected": 0.4,
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
   "synergy": -0.7,
   "avgActual": -1,
   "avgExpected": 0.3,
   "aId": "593561e7-e873-4261-85ee-25b6ab524bfa",
   "bId": "e8aee14f-dbc4-4e5c-be4a-4f948e2e13fc"
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
   "a": "Timothy Lynskey",
   "b": "Rob Telles",
   "team": "Premiere",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -3.3,
   "avgExpected": -1.8,
   "aId": "718c6948-a987-43bb-a1f3-cf7aead75edb",
   "bId": "d27652b4-447c-4563-b89f-19a8e1e79568"
  },
  {
   "a": "David Brandolph",
   "b": "Yong Kim",
   "team": "Bounce Tempest",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.7,
   "avgActual": 3.7,
   "avgExpected": 5.2,
   "aId": "be10853a-1f2c-4b56-8fd7-902ddc686401",
   "bId": "ca670ae8-0768-49d4-9984-f708cd52786c"
  },
  {
   "a": "Jesse Pettit",
   "b": "Aleks Mirkovic",
   "team": "Dill Dinkers Newport",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.7,
   "avgActual": -4.7,
   "avgExpected": -3.4,
   "aId": "d6e30691-3b20-465b-8fa8-560017c20c15",
   "bId": "f006963a-4e8e-433d-8c9a-e278ac32ea9c"
  },
  {
   "a": "Pat Wilson",
   "b": "Bryan Mccourt",
   "team": "Home Court",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -1,
   "avgExpected": 0.7,
   "aId": "2e77eb09-81b2-4cc7-8ed1-4cbf034705f6",
   "bId": "74f9fe34-f8c5-49dd-b504-939d0b4f5aaa"
  },
  {
   "a": "Gary White",
   "b": "Matthew Schwartz",
   "team": "Premiere",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -0.8,
   "avgActual": -1,
   "avgExpected": 0.4,
   "aId": "9a26eab9-96be-45e1-b380-2845a0e8e668",
   "bId": "a432d3e0-17c2-4741-a4b2-7f72b7a81a5f"
  },
  {
   "a": "Stephen Fredericksen",
   "b": "David Bogatyrev",
   "team": "Monroe",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.8,
   "avgActual": -0.5,
   "avgExpected": 1.1,
   "aId": "622cb64f-dd0c-4bff-8c19-81d287977c53",
   "bId": "e77a59ee-8653-4d89-903c-75109d3f17c8"
  },
  {
   "a": "Bryan Mccourt",
   "b": "Ricky Jutkiewicz",
   "team": "Home Court",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": -0.8,
   "avgActual": 1.6,
   "avgExpected": 2.8,
   "aId": "74f9fe34-f8c5-49dd-b504-939d0b4f5aaa",
   "bId": "a24bc2af-aca9-45dd-a827-12fb12f7b784"
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
   "avgExpected": -2.2,
   "aId": "323d96c3-4160-410b-96a5-87263e825f62",
   "bId": "e8aee14f-dbc4-4e5c-be4a-4f948e2e13fc"
  },
  {
   "a": "Tom Kresky",
   "b": "Tim Bruno",
   "team": "Jersey Devil",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -0.5,
   "avgExpected": 0.8,
   "aId": "81875a5e-2b65-4152-bace-b4c96517579d",
   "bId": "ef5a4f7c-58d1-42fa-81c2-1f9f09a60a0f"
  },
  {
   "a": "Harsh Upadhyaya",
   "b": "Jaiveer Narwal",
   "team": "Pickleball Kingdom Hamilton",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -5.7,
   "avgExpected": -3.7,
   "aId": "3b9648e1-481c-4007-9932-d8df648f7bab",
   "bId": "96042156-2ff1-44d0-9b96-8448964b4981"
  },
  {
   "a": "Eric Ruiz",
   "b": "Michael Barndt",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.8,
   "avgActual": 1.7,
   "avgExpected": 3.4,
   "aId": "505e9bce-f386-4a4f-9a41-a1d7e0bb0527",
   "bId": "50853eee-28e0-4380-b379-35935eb2115a"
  },
  {
   "a": "Paul Chantler",
   "b": "Xan Hong",
   "team": "Dill Dinkers Newport",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -0.8,
   "avgActual": -7.8,
   "avgExpected": -6.3,
   "aId": "b1f8fd31-d4ed-4824-9ae6-174e5e2f21c2",
   "bId": "e83b9a6f-83c6-4b66-a470-a0cae4f462df"
  },
  {
   "a": "Siva Indupuru",
   "b": "Big G",
   "team": "Dill Dinkers Freehold",
   "n": 8,
   "w": 0,
   "l": 8,
   "synergy": -0.8,
   "avgActual": -5.6,
   "avgExpected": -4.4,
   "aId": "5f264528-efdb-4bda-88ed-8003f98c1c9b",
   "bId": "f75516ca-4ed9-4ca2-84d3-a6af16b16a27"
  },
  {
   "a": "Christopher Hendrickson",
   "b": "Jimmy Ramja",
   "team": "Pickleball HQ",
   "n": 9,
   "w": 7,
   "l": 2,
   "synergy": -0.8,
   "avgActual": 3.8,
   "avgExpected": 4.9,
   "aId": "7fc1ed1b-4763-49b4-a077-46a92c0df3d6",
   "bId": "ade57877-7c11-4a46-88bf-789a50906901"
  },
  {
   "a": "Michael Vollmer",
   "b": "Hua Lin",
   "team": "Dill Dinkers Freehold",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -0.8,
   "avgActual": -4.2,
   "avgExpected": -2.8,
   "aId": "148387a8-f20a-44df-981d-0d9d2e7bf443",
   "bId": "6b263caa-80f7-40d2-9248-559f91ffe71e"
  },
  {
   "a": "Akash Raju",
   "b": "Jun Zhi Tan",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": -0.8,
   "avgActual": 3.8,
   "avgExpected": 5.2,
   "aId": "a2fc30f9-b494-4781-900e-1e0b7d531f02",
   "bId": "d0e16b4b-7708-425d-ae9d-e3992c4e7fe2"
  },
  {
   "a": "Christopher Monzon",
   "b": "Lj Dequina",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -3,
   "avgExpected": -1.5,
   "aId": "b205e6a7-d62d-42bf-b2d5-e7e5d0c109ec",
   "bId": "e4cb9932-d672-4089-a643-f2d16e3bd98a"
  },
  {
   "a": "Kevin Sheehan",
   "b": "Jacob Yoo",
   "team": "Home Court",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -1,
   "avgExpected": 0.5,
   "aId": "115f3958-d110-41f0-a04c-aa2f8e17a54f",
   "bId": "df0934fe-e584-4b4f-a549-a90499016d33"
  },
  {
   "a": "Jared Rapoport",
   "b": "Yong Kim",
   "team": "Bounce Tempest",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -0.2,
   "avgExpected": 1.2,
   "aId": "b19f3a31-ce60-4c40-b903-1fd60c95f649",
   "bId": "ca670ae8-0768-49d4-9984-f708cd52786c"
  },
  {
   "a": "Jesse Pettit",
   "b": "Xan Hong",
   "team": "Dill Dinkers Newport",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -0.8,
   "avgActual": -8.2,
   "avgExpected": -6.8,
   "aId": "d6e30691-3b20-465b-8fa8-560017c20c15",
   "bId": "e83b9a6f-83c6-4b66-a470-a0cae4f462df"
  },
  {
   "a": "Malay Kaity",
   "b": "David Fiscella",
   "team": "Dill Dinkers Newport",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.8,
   "avgActual": -4.7,
   "avgExpected": -2.8,
   "aId": "199ae8e1-22b4-4d8d-a41d-29cb984a3b33",
   "bId": "fa546fa2-45f5-4ad6-91ec-b6f6044ad8b0"
  },
  {
   "a": "Pritpal Singh",
   "b": "Jaiveer Narwal",
   "team": "Pickleball Kingdom Hamilton",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.8,
   "avgActual": -0.7,
   "avgExpected": 1.2,
   "aId": "631b24ae-9bc2-4db3-964b-33f86933021e",
   "bId": "96042156-2ff1-44d0-9b96-8448964b4981"
  },
  {
   "a": "Akash Raju",
   "b": "Corey Chen",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -0.8,
   "avgActual": 0.4,
   "avgExpected": 1.6,
   "aId": "a2fc30f9-b494-4781-900e-1e0b7d531f02",
   "bId": "b549a93c-acec-4419-9e30-5d8375518d2d"
  },
  {
   "a": "Matthew Carrington",
   "b": "Robert Huntley",
   "team": "Home Court",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -3,
   "avgExpected": -1.2,
   "aId": "6a2f3777-38b2-4f02-b550-ce38395914d2",
   "bId": "b5dec967-9e3a-49b4-b136-597711d099cc"
  },
  {
   "a": "Arnold Poblete",
   "b": "Gary Garretson",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.8,
   "avgActual": -2.7,
   "avgExpected": -0.9,
   "aId": "c19e964a-d126-4e9f-9ce4-83c315f2f535",
   "bId": "d4126276-6b83-42be-b943-9957df46992c"
  },
  {
   "a": "Niman Ahmeti",
   "b": "Thomas Moran",
   "team": "Pickleball HQ",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -5.7,
   "avgExpected": -3.9,
   "aId": "40681083-620d-4293-829f-91121323135c",
   "bId": "9571d7b5-fc34-4c77-a51f-c99b286e4304"
  },
  {
   "a": "John Coyle",
   "b": "Stephen Fredericksen",
   "team": "Monroe",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -6,
   "avgExpected": -3.9,
   "aId": "54d78d2c-c0d7-42c0-aef4-567311f2e51e",
   "bId": "622cb64f-dd0c-4bff-8c19-81d287977c53"
  },
  {
   "a": "Joseph Lynskey",
   "b": "Jason Feldman",
   "team": "Premiere",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": -0.9,
   "avgActual": 6.3,
   "avgExpected": 8.1,
   "aId": "0e8c08b7-0e58-434b-8830-f37779f821dc",
   "bId": "5636cdc5-7a65-4202-abbb-5999eee35ab3"
  },
  {
   "a": "Aaron Chan",
   "b": "Jaiveer Narwal",
   "team": "Pickleball Kingdom Hamilton",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.9,
   "avgActual": -6.7,
   "avgExpected": -5,
   "aId": "57666861-23d0-4809-9556-b646579f2fd6",
   "bId": "96042156-2ff1-44d0-9b96-8448964b4981"
  },
  {
   "a": "Bennett Pereira",
   "b": "Avneesh Agarwal",
   "team": "Pickle House",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.9,
   "avgActual": -3.2,
   "avgExpected": -1.4,
   "aId": "6a2ea39b-8b67-4cdf-83f7-c16fb3224655",
   "bId": "f0ac7d85-0e7b-4f28-80fe-3282c3c875ed"
  },
  {
   "a": "Ren Macalalag",
   "b": "Sean Diamond",
   "team": "PickleRage Union County",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -0.9,
   "avgActual": -3.4,
   "avgExpected": -1.7,
   "aId": "24db47b3-dedc-418d-9210-3b5fea1952da",
   "bId": "635ba257-e1ed-4db3-8303-5f241388437e"
  },
  {
   "a": "Umang Pathak",
   "b": "Jesse Mynahan",
   "team": "Montville",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": -0.9,
   "avgActual": 1.6,
   "avgExpected": 3,
   "aId": "30ecad69-b82a-45aa-94c5-f0f7869a0d12",
   "bId": "66b5f8fe-1456-4ca5-ba6a-9ee4de2052cb"
  },
  {
   "a": "Kevin Lew",
   "b": "Ben Cortes",
   "team": "Dill Dinkers Freehold",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.9,
   "avgActual": -3.8,
   "avgExpected": -2.4,
   "aId": "03886b04-b474-4dda-b7f3-eb4f4954399c",
   "bId": "4d89659f-a86c-4416-93f2-5c868fe0e984"
  },
  {
   "a": "Michael Gilbert",
   "b": "Matthew Carrington",
   "team": "Home Court",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -3.8,
   "avgExpected": -2.3,
   "aId": "5acb8305-77d8-4089-88b6-9fbfa9400f6a",
   "bId": "6a2f3777-38b2-4f02-b550-ce38395914d2"
  },
  {
   "a": "Akash Raju",
   "b": "George Vega Jr",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.9,
   "avgActual": 1.8,
   "avgExpected": 3.6,
   "aId": "a2fc30f9-b494-4781-900e-1e0b7d531f02",
   "bId": "be19bf10-b8a5-4626-8c10-f13ac708231d"
  },
  {
   "a": "Joseph Lynskey",
   "b": "Daniel Antonelli",
   "team": "Premiere",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.9,
   "avgActual": 1.8,
   "avgExpected": 3.6,
   "aId": "0e8c08b7-0e58-434b-8830-f37779f821dc",
   "bId": "cd0eb94b-4d32-4ba9-bcdc-3fba205d90f0"
  },
  {
   "a": "Jason Feldman",
   "b": "Gary White",
   "team": "Premiere",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1,
   "avgActual": 0.3,
   "avgExpected": 2.2,
   "aId": "5636cdc5-7a65-4202-abbb-5999eee35ab3",
   "bId": "9a26eab9-96be-45e1-b380-2845a0e8e668"
  },
  {
   "a": "Ethan Fu",
   "b": "Ken Weinstein",
   "team": "Bounce Tempest",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1,
   "avgActual": -3.3,
   "avgExpected": -1,
   "aId": "a8585e9c-872e-466c-9583-9680e557f757",
   "bId": "d07bda42-9d33-4c03-a7f3-a8a468083bdd"
  },
  {
   "a": "Jonathan Carter",
   "b": "Brandon Dejesus",
   "team": "Jersey Devil",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -1,
   "avgActual": -1,
   "avgExpected": 0.8,
   "aId": "33fe293d-5913-41af-8f89-4a431ed92ab7",
   "bId": "d50feac2-f147-47d2-8930-99b21b2842ba"
  },
  {
   "a": "Jaiveer Narwal",
   "b": "Venu Yengala",
   "team": "Pickleball Kingdom Hamilton",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1,
   "avgActual": -6,
   "avgExpected": -3.7,
   "aId": "96042156-2ff1-44d0-9b96-8448964b4981",
   "bId": "b4cbf5ad-5c2c-46bf-bf50-f50683964b46"
  },
  {
   "a": "Ren Macalalag",
   "b": "Andy Knight",
   "team": "PickleRage Union County",
   "n": 8,
   "w": 1,
   "l": 7,
   "synergy": -1,
   "avgActual": -5.9,
   "avgExpected": -4.3,
   "aId": "24db47b3-dedc-418d-9210-3b5fea1952da",
   "bId": "fd8fa2a4-7f58-41d2-897e-e7df225c4ad0"
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
   "avgExpected": -2.9,
   "aId": "17caef8b-84d4-4052-9695-7c74190925a1",
   "bId": "6a70d918-9cd3-47d0-a40a-901a406452b6"
  },
  {
   "a": "Bryan Mccourt",
   "b": "Marc Kunesch",
   "team": "Home Court",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1,
   "avgActual": -3.3,
   "avgExpected": -1,
   "aId": "74f9fe34-f8c5-49dd-b504-939d0b4f5aaa",
   "bId": "aeaef27d-01b3-4fb2-91f3-4be8c7602aa3"
  },
  {
   "a": "Ali Bhimji",
   "b": "Cullen Curley",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1,
   "avgActual": -4.7,
   "avgExpected": -2.4,
   "aId": "3651f648-493a-4517-8085-a8b9cb086c07",
   "bId": "8cebf901-66b9-41d0-963d-12dac7334c8f"
  },
  {
   "a": "Timothy Lynskey",
   "b": "Eden Ksendzovsky",
   "team": "Premiere",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -1,
   "avgActual": -4.6,
   "avgExpected": -2.8,
   "aId": "718c6948-a987-43bb-a1f3-cf7aead75edb",
   "bId": "75496a80-8064-40ae-ba4b-36c156d70885"
  },
  {
   "a": "Dan Ruble",
   "b": "Christopher Uston",
   "team": "Jersey Devil",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1,
   "avgActual": 2,
   "avgExpected": 4.1,
   "aId": "d411862a-491a-47dc-93a8-4a12f821afd7",
   "bId": "e1f6c6fa-db86-4fed-9faa-dbc2fe29f373"
  },
  {
   "a": "Siva Indupuru",
   "b": "Ian Kohn",
   "team": "Dill Dinkers Freehold",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1,
   "avgActual": -7.7,
   "avgExpected": -5.3,
   "aId": "5f264528-efdb-4bda-88ed-8003f98c1c9b",
   "bId": "ef0e9803-0038-4cb9-ad16-a55c54f00339"
  },
  {
   "a": "Rick Wickenheisser",
   "b": "Craig Butler",
   "team": "Flemington",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -1,
   "avgActual": -2.3,
   "avgExpected": -0.7,
   "aId": "741048e8-2c91-4466-bb1c-1a624d1dabd9",
   "bId": "b50c51e8-3ce3-44ec-98e7-6cc11a705f17"
  },
  {
   "a": "Shalin Rawal",
   "b": "Meet Thakkar",
   "team": "Montville",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1,
   "avgActual": 3.3,
   "avgExpected": 5.7,
   "aId": "08530d21-2dc5-4f71-9d49-9191ec192860",
   "bId": "f68fa078-e500-4427-9d65-338e840f318c"
  },
  {
   "a": "John Pineda",
   "b": "John Fallone",
   "team": "Flemington",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1,
   "avgActual": -7.2,
   "avgExpected": -5.3,
   "aId": "099e3831-88c1-4907-9869-f193db58b64b",
   "bId": "5127c0b9-aaf8-49c5-a94f-bf92e7ae60f8"
  },
  {
   "a": "Saad Talat Siddiqui",
   "b": "Madhu Raghunathan",
   "team": "Allstar Pickler",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1,
   "avgActual": -7.7,
   "avgExpected": -5.3,
   "aId": "ebfeb773-e8cd-4b6a-aafd-ee2772540168",
   "bId": "f008538f-037a-4850-ad1d-fd9108382a81"
  },
  {
   "a": "Kevin Sheehan",
   "b": "Michael Vincent",
   "team": "Home Court",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -1.1,
   "avgActual": 0.4,
   "avgExpected": 2.5,
   "aId": "115f3958-d110-41f0-a04c-aa2f8e17a54f",
   "bId": "7f44421c-476c-4857-99ed-3376b32289ca"
  },
  {
   "a": "Allan Orchard",
   "b": "Brandon Fulford",
   "team": "Allstar Pickler",
   "n": 7,
   "w": 1,
   "l": 6,
   "synergy": -1.1,
   "avgActual": -3,
   "avgExpected": -1.2,
   "aId": "4f34c672-f457-467f-98d8-7d5d6c8add16",
   "bId": "906383cd-e781-48bc-9004-0fc5427c7e62"
  },
  {
   "a": "Jose Campos",
   "b": "Thomas Moran",
   "team": "Pickleball HQ",
   "n": 8,
   "w": 1,
   "l": 7,
   "synergy": -1.1,
   "avgActual": -3.5,
   "avgExpected": -1.8,
   "aId": "197e3b9a-eded-4a87-8391-13a7c6d18c8f",
   "bId": "9571d7b5-fc34-4c77-a51f-c99b286e4304"
  },
  {
   "a": "Eden Ksendzovsky",
   "b": "Daniel Antonelli",
   "team": "Premiere",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -1.1,
   "avgActual": -1,
   "avgExpected": 0.7,
   "aId": "75496a80-8064-40ae-ba4b-36c156d70885",
   "bId": "cd0eb94b-4d32-4ba9-bcdc-3fba205d90f0"
  },
  {
   "a": "Erik Reilly",
   "b": "Siva Indupuru",
   "team": "Dill Dinkers Freehold",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -1.1,
   "avgActual": -2.2,
   "avgExpected": -0.2,
   "aId": "479815f2-1e14-4b96-9423-d99c15b2fe2b",
   "bId": "5f264528-efdb-4bda-88ed-8003f98c1c9b"
  },
  {
   "a": "Yashraj Kurani",
   "b": "Corey Chen",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -1,
   "avgExpected": 1,
   "aId": "63950363-4747-4faf-b89a-eb88f8b9e81d",
   "bId": "b549a93c-acec-4419-9e30-5d8375518d2d"
  },
  {
   "a": "Daniel Borgia",
   "b": "David Brandolph",
   "team": "Bounce Tempest",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -1.2,
   "avgActual": 2.8,
   "avgExpected": 5,
   "aId": "ae3cd925-c856-44dd-9cf5-3a2bd343adf2",
   "bId": "be10853a-1f2c-4b56-8fd7-902ddc686401"
  },
  {
   "a": "Matt Enz",
   "b": "Harrison Bohrer",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -1.2,
   "avgActual": 1,
   "avgExpected": 3.5,
   "aId": "683d1fdd-2fa0-4775-a8dd-0f733aa9f1a3",
   "bId": "8a4095e6-2a3e-4a88-a6d2-8c1da135ce42"
  },
  {
   "a": "Dilip Patel",
   "b": "Venu Yengala",
   "team": "Pickleball Kingdom Hamilton",
   "n": 8,
   "w": 3,
   "l": 5,
   "synergy": -1.2,
   "avgActual": -3.4,
   "avgExpected": -1.6,
   "aId": "7573445f-7dbd-4c2f-867a-ae95ae7ed168",
   "bId": "b4cbf5ad-5c2c-46bf-bf50-f50683964b46"
  },
  {
   "a": "Aaron Chan",
   "b": "Pritpal Singh",
   "team": "Pickleball Kingdom Hamilton",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -1.2,
   "avgActual": -3.2,
   "avgExpected": -1.1,
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
   "synergy": -1.2,
   "avgActual": -2,
   "avgExpected": 0.3,
   "aId": "4516a66f-67b3-4981-a16d-036deb8db9bc",
   "bId": "b50c51e8-3ce3-44ec-98e7-6cc11a705f17"
  },
  {
   "a": "Sean Diamond",
   "b": "Andy Knight",
   "team": "PickleRage Union County",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -1.2,
   "avgActual": -8.6,
   "avgExpected": -6.4,
   "aId": "635ba257-e1ed-4db3-8303-5f241388437e",
   "bId": "fd8fa2a4-7f58-41d2-897e-e7df225c4ad0"
  },
  {
   "a": "Michael Barndt",
   "b": "Rohit Mankotia",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.2,
   "avgActual": -2.7,
   "avgExpected": 0.2,
   "aId": "50853eee-28e0-4380-b379-35935eb2115a",
   "bId": "541e3e2d-76eb-4cd3-9bfe-9f94c0b9cdeb"
  },
  {
   "a": "Aleks Mirkovic",
   "b": "Ian Diamond",
   "team": "Dill Dinkers Newport",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.2,
   "avgActual": -8.3,
   "avgExpected": -5.5,
   "aId": "f006963a-4e8e-433d-8c9a-e278ac32ea9c",
   "bId": "f5a96445-7d1c-459b-8642-12a5d11554db"
  },
  {
   "a": "Christopher Monzon",
   "b": "George Vega Jr",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.2,
   "avgActual": -5.7,
   "avgExpected": -3.3,
   "aId": "b205e6a7-d62d-42bf-b2d5-e7e5d0c109ec",
   "bId": "be19bf10-b8a5-4626-8c10-f13ac708231d"
  },
  {
   "a": "Daniel Hadley",
   "b": "Jonathan Carter",
   "team": "Jersey Devil",
   "n": 8,
   "w": 1,
   "l": 7,
   "synergy": -1.2,
   "avgActual": -5.4,
   "avgExpected": -3.6,
   "aId": "23adcd68-130d-4176-b367-d3cd31260d21",
   "bId": "33fe293d-5913-41af-8f89-4a431ed92ab7"
  },
  {
   "a": "Rakshit Maddur Gopinath",
   "b": "Varun Gurram",
   "team": "Pickle House",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.2,
   "avgActual": -2.2,
   "avgExpected": 0.2,
   "aId": "1448a485-6172-48af-96e0-f4876e9c5268",
   "bId": "44864b51-f901-4470-a6bd-891495ffd132"
  },
  {
   "a": "Dan Carpenter",
   "b": "Mario Contreras",
   "team": "Jersey Devil",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -1.2,
   "avgActual": -1.2,
   "avgExpected": 0.9,
   "aId": "2811dd08-7b50-455b-bc23-46b064a912eb",
   "bId": "323d96c3-4160-410b-96a5-87263e825f62"
  },
  {
   "a": "Sean Diamond",
   "b": "Vinay Mutt",
   "team": "PickleRage Union County",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.2,
   "avgActual": -6.2,
   "avgExpected": -3.8,
   "aId": "635ba257-e1ed-4db3-8303-5f241388437e",
   "bId": "7caafc32-1aed-4fb7-b145-baf82cbbe2d2"
  },
  {
   "a": "Luke Simon",
   "b": "Meet Thakkar",
   "team": "Montville",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.2,
   "avgActual": -3,
   "avgExpected": -0.1,
   "aId": "0069c456-f712-435e-abd7-461018159661",
   "bId": "f68fa078-e500-4427-9d65-338e840f318c"
  },
  {
   "a": "Franklin Lupianez",
   "b": "Rick Wickenheisser",
   "team": "Flemington",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.2,
   "avgActual": -6.2,
   "avgExpected": -3.8,
   "aId": "17caef8b-84d4-4052-9695-7c74190925a1",
   "bId": "741048e8-2c91-4466-bb1c-1a624d1dabd9"
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
   "a": "Josh Fink",
   "b": "David Tabacco",
   "team": "Flemington",
   "n": 6,
   "w": 0,
   "l": 6,
   "synergy": -1.3,
   "avgActual": -6.8,
   "avgExpected": -4.6,
   "aId": "6a70d918-9cd3-47d0-a40a-901a406452b6",
   "bId": "717d97f0-4f08-476f-9c53-7595605bc0b0"
  },
  {
   "a": "Jimmy Shapiro",
   "b": "Uzoma Nwankwo",
   "team": "APC Garden State",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.3,
   "avgActual": 1,
   "avgExpected": 3.9,
   "aId": "7b57c36d-a6eb-470e-b132-26d1f2a47b74",
   "bId": "c6482905-6954-4241-a6c3-ba077c367846"
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
   "a": "Vinay Mutt",
   "b": "Andy Knight",
   "team": "PickleRage Union County",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.3,
   "avgActual": -8.7,
   "avgExpected": -5.6,
   "aId": "7caafc32-1aed-4fb7-b145-baf82cbbe2d2",
   "bId": "fd8fa2a4-7f58-41d2-897e-e7df225c4ad0"
  },
  {
   "a": "Prashanth Koshy",
   "b": "George Vega Jr",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.3,
   "avgActual": -5.7,
   "avgExpected": -2.7,
   "aId": "5b619b72-b78a-49ba-872d-c64db6084a67",
   "bId": "be19bf10-b8a5-4626-8c10-f13ac708231d"
  },
  {
   "a": "Mark Waters",
   "b": "Chris Machuzak",
   "team": "APC Garden State",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.4,
   "avgActual": -5.7,
   "avgExpected": -3,
   "aId": "1baee0ad-faae-4c61-894a-a347710fdfea",
   "bId": "dba4c9d8-6ffb-49ae-99d1-79c341a68de7"
  },
  {
   "a": "Anil Kumar Jakkaladki",
   "b": "Sree Harsha Konduru",
   "team": "Pickle House",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.4,
   "avgActual": 0,
   "avgExpected": 2.8,
   "aId": "176df588-c3ff-4b50-a66a-4df99647254b",
   "bId": "439cf2c1-044c-450c-9dcc-4fdeafbb81cd"
  },
  {
   "a": "Franklin Lupianez",
   "b": "Josh Rito",
   "team": "Flemington",
   "n": 8,
   "w": 1,
   "l": 7,
   "synergy": -1.4,
   "avgActual": -4.5,
   "avgExpected": -2.4,
   "aId": "17caef8b-84d4-4052-9695-7c74190925a1",
   "bId": "a4c54a14-35b4-4b90-aabd-3d81ad719f4d"
  },
  {
   "a": "Bruce Nguyen",
   "b": "Andress Mims",
   "team": "APC Garden State",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.4,
   "avgActual": -6.5,
   "avgExpected": -3.7,
   "aId": "33233dc6-b78e-4deb-88d4-2742aacf5eb9",
   "bId": "e9878f35-8a92-4887-834e-d8a76881ae41"
  },
  {
   "a": "Anthony Simonetti",
   "b": "David Wheeler",
   "team": "Pickleball HQ",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": -1.4,
   "avgActual": -0.7,
   "avgExpected": 1.5,
   "aId": "3a2b64a1-6eb6-41e4-92fe-8da3d95af11b",
   "bId": "d335be77-6a7a-4f96-91c6-0a5cbcc8ea9f"
  },
  {
   "a": "Andrew Neave",
   "b": "Jamison Rowles",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.4,
   "avgActual": -1.7,
   "avgExpected": 1.6,
   "aId": "2f7d6c14-4f06-470b-a4ba-f28199e823b0",
   "bId": "cae7c2db-b4d5-4927-9c44-ff92176b5507"
  },
  {
   "a": "Russell Cripps",
   "b": "Matt Enz",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.4,
   "avgActual": 0.5,
   "avgExpected": 3.3,
   "aId": "43d2bf2c-e732-4ce8-adae-035d989fa792",
   "bId": "683d1fdd-2fa0-4775-a8dd-0f733aa9f1a3"
  },
  {
   "a": "Kyle Martin",
   "b": "Daniel Borgia",
   "team": "Bounce Tempest",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.5,
   "avgActual": -1.3,
   "avgExpected": 2.2,
   "aId": "639af9e8-08fd-496d-84d6-6e7859e8c6d3",
   "bId": "ae3cd925-c856-44dd-9cf5-3a2bd343adf2"
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
   "avgExpected": -0.9,
   "aId": "12ec758b-f05d-40ec-b082-a76f07cbe792",
   "bId": "c5bf56d5-50a9-4a1f-a6f8-3f3f5af91cca"
  },
  {
   "a": "Matt Inzerillo",
   "b": "Andress Mims",
   "team": "APC Garden State",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -1.5,
   "avgActual": -5,
   "avgExpected": -2.4,
   "aId": "51ceabf9-8258-4835-9835-c7d915220185",
   "bId": "e9878f35-8a92-4887-834e-d8a76881ae41"
  },
  {
   "a": "Elliott Albanese",
   "b": "Jun Zhi Tan",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -1.5,
   "avgActual": 6.3,
   "avgExpected": 9.8,
   "aId": "6af88387-5e2b-4ea7-b732-22885e4931a8",
   "bId": "d0e16b4b-7708-425d-ae9d-e3992c4e7fe2"
  },
  {
   "a": "Jimmy Shapiro",
   "b": "Chris Machuzak",
   "team": "APC Garden State",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -1.6,
   "avgActual": -3.4,
   "avgExpected": -0.6,
   "aId": "7b57c36d-a6eb-470e-b132-26d1f2a47b74",
   "bId": "dba4c9d8-6ffb-49ae-99d1-79c341a68de7"
  },
  {
   "a": "David Tabacco",
   "b": "Josh Rito",
   "team": "Flemington",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.6,
   "avgActual": -9.7,
   "avgExpected": -6.5,
   "aId": "717d97f0-4f08-476f-9c53-7595605bc0b0",
   "bId": "a4c54a14-35b4-4b90-aabd-3d81ad719f4d"
  },
  {
   "a": "Larry Minsky",
   "b": "Michael Johnson",
   "team": "Picklr Newtown",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -1.6,
   "avgActual": -3,
   "avgExpected": -0.1,
   "aId": "41f7a2a8-8fcd-4282-b501-cd5b83ec7440",
   "bId": "4f98756a-9726-48fe-a241-2579f96eee16"
  },
  {
   "a": "Nicholas Lugo",
   "b": "Jacob Rosengarten",
   "team": "Monroe",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -1.6,
   "avgActual": -0.7,
   "avgExpected": 2.4,
   "aId": "8f9be7cc-3ddf-436f-8727-02cbdd0d453f",
   "bId": "b2f8ea85-7734-47a2-8ce7-bd968b3a51bc"
  },
  {
   "a": "Tom Kresky",
   "b": "Brandon Dejesus",
   "team": "Jersey Devil",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.6,
   "avgActual": -1.2,
   "avgExpected": 1.9,
   "aId": "81875a5e-2b65-4152-bace-b4c96517579d",
   "bId": "d50feac2-f147-47d2-8930-99b21b2842ba"
  },
  {
   "a": "Vincent Rigoglioso",
   "b": "Jimmy Lee",
   "team": "Bounce Tempest",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.7,
   "avgActual": -6.7,
   "avgExpected": -2.7,
   "aId": "d0c9ae50-0cdc-4f72-9ece-0b996f323f73",
   "bId": "f2c53e42-1eac-48dd-9c93-682ec5c1ac98"
  },
  {
   "a": "Daniel Dechristopher",
   "b": "Uzoma Nwankwo",
   "team": "APC Garden State",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.7,
   "avgActual": 1,
   "avgExpected": 4.5,
   "aId": "899ba1d1-37e5-4ad6-8daa-f726376776e5",
   "bId": "c6482905-6954-4241-a6c3-ba077c367846"
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
   "avgExpected": -0.2,
   "aId": "40681083-620d-4293-829f-91121323135c",
   "bId": "d61a3828-6dfc-480a-b26a-534b0fe58268"
  },
  {
   "a": "Gianni Roman",
   "b": "Buyi Zhang",
   "team": "Allstar Pickler",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.7,
   "avgActual": -9.3,
   "avgExpected": -5.4,
   "aId": "22294f41-611f-4e8f-962e-377e43209945",
   "bId": "abd55992-7237-4a92-817d-3d39388369c9"
  },
  {
   "a": "Kurt Skalamera",
   "b": "David Bogatyrev",
   "team": "Monroe",
   "n": 7,
   "w": 1,
   "l": 6,
   "synergy": -1.7,
   "avgActual": -4.9,
   "avgExpected": -2.1,
   "aId": "04000200-8214-42ff-9a0d-2189ffaccd42",
   "bId": "e77a59ee-8653-4d89-903c-75109d3f17c8"
  },
  {
   "a": "Bill Olderman",
   "b": "Cesar Santamaria-Aranda",
   "team": "Montville",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1.7,
   "avgActual": -0.7,
   "avgExpected": 3.3,
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
   "synergy": -1.7,
   "avgActual": -7.3,
   "avgExpected": -3.4,
   "aId": "635ba257-e1ed-4db3-8303-5f241388437e",
   "bId": "d634d992-c9d8-4e31-acb7-45b1161eee19"
  },
  {
   "a": "Daniel Borgia",
   "b": "Vincent Rigoglioso",
   "team": "Bounce Tempest",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.8,
   "avgActual": -3,
   "avgExpected": 1.1,
   "aId": "ae3cd925-c856-44dd-9cf5-3a2bd343adf2",
   "bId": "d0c9ae50-0cdc-4f72-9ece-0b996f323f73"
  },
  {
   "a": "Steppan Konoplev",
   "b": "Aleks Mirkovic",
   "team": "Dill Dinkers Newport",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -1.8,
   "avgActual": -7,
   "avgExpected": -3.8,
   "aId": "8f076d51-25ba-4203-97f8-12194ba5b001",
   "bId": "f006963a-4e8e-433d-8c9a-e278ac32ea9c"
  },
  {
   "a": "Jimmy Duong",
   "b": "Mike Leach",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.8,
   "avgActual": -9.7,
   "avgExpected": -5.5,
   "aId": "06a3741d-10e5-462b-ba95-aa997d4eb8ea",
   "bId": "a63211cf-31ed-448e-8c87-2aaaf8e84a7b"
  },
  {
   "a": "Russell Cripps",
   "b": "Lincoln Jensen",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.8,
   "avgActual": -4.7,
   "avgExpected": -0.5,
   "aId": "43d2bf2c-e732-4ce8-adae-035d989fa792",
   "bId": "98842749-0d7d-4b20-b78a-50c79d087699"
  },
  {
   "a": "Dhruv Dobariya",
   "b": "Samrat Sood",
   "team": "Pickleball Kingdom Hamilton",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.8,
   "avgActual": -8.7,
   "avgExpected": -4.4,
   "aId": "ac44fd3c-0c87-47aa-bf26-4333b632f524",
   "bId": "da802117-fbc3-4b98-9653-9924387691cc"
  },
  {
   "a": "Joseph Luka",
   "b": "Ken Weinstein",
   "team": "Bounce Tempest",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -1.9,
   "avgActual": -3.4,
   "avgExpected": -0.1,
   "aId": "482a6a13-3cb9-438b-8494-3f70a4f1cffe",
   "bId": "d07bda42-9d33-4c03-a7f3-a8a468083bdd"
  },
  {
   "a": "Niman Ahmeti",
   "b": "David Wheeler",
   "team": "Pickleball HQ",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.9,
   "avgActual": -5.7,
   "avgExpected": -1.3,
   "aId": "40681083-620d-4293-829f-91121323135c",
   "bId": "d335be77-6a7a-4f96-91c6-0a5cbcc8ea9f"
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
   "avgExpected": -2.6,
   "aId": "8fea334f-ad12-4c45-b67d-a127ec551f4e",
   "bId": "a6d48fe9-1e3d-470b-8a0c-6061231f34ce"
  },
  {
   "a": "Ethan Fu",
   "b": "Vincent Rigoglioso",
   "team": "Bounce Tempest",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -2,
   "avgActual": -6.7,
   "avgExpected": -2,
   "aId": "a8585e9c-872e-466c-9583-9680e557f757",
   "bId": "d0c9ae50-0cdc-4f72-9ece-0b996f323f73"
  },
  {
   "a": "Sushil Rijhwani",
   "b": "Jitendra Arora",
   "team": "Pickle House",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2,
   "avgActual": -5.3,
   "avgExpected": -0.7,
   "aId": "8fea334f-ad12-4c45-b67d-a127ec551f4e",
   "bId": "a117b66b-f319-4fc0-8ee2-feb3f17767d0"
  },
  {
   "a": "Craig Butler",
   "b": "Tom Hadler",
   "team": "Flemington",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2,
   "avgActual": -7.3,
   "avgExpected": -2.7,
   "aId": "b50c51e8-3ce3-44ec-98e7-6cc11a705f17",
   "bId": "c5d07eb6-d276-4503-a077-c092e89c2ae8"
  },
  {
   "a": "Kevin Lew",
   "b": "Big G",
   "team": "Dill Dinkers Freehold",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.1,
   "avgActual": -8,
   "avgExpected": -3.2,
   "aId": "03886b04-b474-4dda-b7f3-eb4f4954399c",
   "bId": "f75516ca-4ed9-4ca2-84d3-a6af16b16a27"
  },
  {
   "a": "Larry Minsky",
   "b": "Mike Leach",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.1,
   "avgActual": -8.7,
   "avgExpected": -3.8,
   "aId": "41f7a2a8-8fcd-4282-b501-cd5b83ec7440",
   "bId": "a63211cf-31ed-448e-8c87-2aaaf8e84a7b"
  },
  {
   "a": "John Coyle",
   "b": "Jacob Rosengarten",
   "team": "Monroe",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.1,
   "avgActual": -6.3,
   "avgExpected": -1.4,
   "aId": "54d78d2c-c0d7-42c0-aef4-567311f2e51e",
   "bId": "b2f8ea85-7734-47a2-8ce7-bd968b3a51bc"
  },
  {
   "a": "Franklin Yiu",
   "b": "Madhu Raghunathan",
   "team": "Allstar Pickler",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.1,
   "avgActual": -8,
   "avgExpected": -3.2,
   "aId": "020affa0-bff4-49cb-94c0-a9eb9ba09b77",
   "bId": "f008538f-037a-4850-ad1d-fd9108382a81"
  },
  {
   "a": "Ben Cortes",
   "b": "Wensheng Yue",
   "team": "Dill Dinkers Freehold",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.2,
   "avgActual": -8,
   "avgExpected": -2.8,
   "aId": "4d89659f-a86c-4416-93f2-5c868fe0e984",
   "bId": "d11f5bc0-8b23-488d-86fb-13eebe9e2257"
  },
  {
   "a": "Matt Inzerillo",
   "b": "Chris Machuzak",
   "team": "APC Garden State",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -2.3,
   "avgActual": -7.7,
   "avgExpected": -3.1,
   "aId": "51ceabf9-8258-4835-9835-c7d915220185",
   "bId": "dba4c9d8-6ffb-49ae-99d1-79c341a68de7"
  },
  {
   "a": "Harsh Upadhyaya",
   "b": "Dhruv Dobariya",
   "team": "Pickleball Kingdom Hamilton",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -2.5,
   "avgActual": -7.7,
   "avgExpected": -2.8,
   "aId": "3b9648e1-481c-4007-9932-d8df648f7bab",
   "bId": "ac44fd3c-0c87-47aa-bf26-4333b632f524"
  },
  {
   "a": "Timothy Lynskey",
   "b": "Matthew Schwartz",
   "team": "Premiere",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -2.5,
   "avgActual": -2.7,
   "avgExpected": 2.3,
   "aId": "718c6948-a987-43bb-a1f3-cf7aead75edb",
   "bId": "a432d3e0-17c2-4741-a4b2-7f72b7a81a5f"
  },
  {
   "a": "Eric Berlinger",
   "b": "David Shapiro",
   "team": "Flemington",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -3,
   "avgActual": -7,
   "avgExpected": -1.6,
   "aId": "2fda2042-6613-42f8-ad93-c3cff9a58f3e",
   "bId": "c39cd158-0c19-4819-8653-18084e6ce982"
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
    "Christopher Monzon"
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
    "Christopher Monzon"
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
   "result": "away",
   "week": 5,
   "home": "Pickleball Kingdom Lehigh Valley",
   "away": "Montville",
   "time": "2026-09-22T19:00:00",
   "complete": true,
   "homePoints": 606,
   "awayPoints": 622,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
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
     "ff": 0,
     "hs": 13,
     "as": 21,
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
     "ff": 0,
     "hs": 13,
     "as": 21,
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
     "ff": 0,
     "hs": 21,
     "as": 14,
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
     "ff": 0,
     "hs": 18,
     "as": 21,
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
     "ff": 0,
     "hs": 23,
     "as": 21,
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
     "ff": 0,
     "hs": 17,
     "as": 21,
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
     "ff": 0,
     "hs": 21,
     "as": 12,
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
     "ff": 0,
     "hs": 21,
     "as": 17,
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
     "ff": 0,
     "hs": 23,
     "as": 21,
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
     "ff": 0,
     "hs": 17,
     "as": 21,
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
     "ff": 0,
     "hs": 12,
     "as": 21,
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
     "ff": 0,
     "hs": 18,
     "as": 21,
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
     "ff": 0,
     "hs": 21,
     "as": 17,
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
     "ff": 0,
     "hs": 13,
     "as": 21,
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
     "ff": 0,
     "hs": 21,
     "as": 12,
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
     "ff": 0,
     "hs": 19,
     "as": 21,
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
     "ff": 0,
     "hs": 21,
     "as": 15,
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
     "ff": 0,
     "hs": 13,
     "as": 21,
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
     "ff": 0,
     "hs": 20,
     "as": 22,
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
     "ff": 0,
     "hs": 16,
     "as": 21,
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
     "ff": 0,
     "hs": 17,
     "as": 21,
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
     "ff": 0,
     "hs": 21,
     "as": 15,
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
     "ff": 0,
     "hs": 18,
     "as": 21,
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
     "ff": 0,
     "hs": 21,
     "as": 23,
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
     "ff": 0,
     "hs": 23,
     "as": 21,
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
     "ff": 0,
     "hs": 20,
     "as": 22,
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
     "ff": 0,
     "hs": 25,
     "as": 23,
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
     "ff": 0,
     "hs": 21,
     "as": 17,
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
     "ff": 0,
     "hs": 21,
     "as": 14,
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
     "ff": 0,
     "hs": 16,
     "as": 21,
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
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Samuel Kashefska",
      "Rohit Mankotia"
     ],
     "a": [
      "Meet Thakkar",
      "Jeff Laniado"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 5,
   "home": "Flemington",
   "away": "PickleRage Union County",
   "time": "2026-09-22T19:00:00",
   "complete": true,
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
   "result": "home",
   "week": 5,
   "home": "APC Garden State",
   "away": "Bounce Tempest",
   "time": "2026-09-22T19:30:00",
   "complete": true,
   "homePoints": 630,
   "awayPoints": 592,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
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
     "ff": 0,
     "hs": 21,
     "as": 18,
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
     "ff": 0,
     "hs": 21,
     "as": 15,
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
     "ff": 0,
     "hs": 25,
     "as": 22,
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
     "ff": 0,
     "hs": 22,
     "as": 20,
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
     "ff": 0,
     "hs": 15,
     "as": 21,
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
     "ff": 0,
     "hs": 21,
     "as": 15,
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
     "ff": 0,
     "hs": 18,
     "as": 21,
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
     "ff": 0,
     "hs": 22,
     "as": 20,
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
     "ff": 0,
     "hs": 16,
     "as": 21,
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
     "ff": 0,
     "hs": 21,
     "as": 13,
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
     "ff": 0,
     "hs": 12,
     "as": 21,
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
     "ff": 0,
     "hs": 17,
     "as": 21,
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
     "ff": 0,
     "hs": 21,
     "as": 17,
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
     "ff": 0,
     "hs": 21,
     "as": 15,
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
     "ff": 0,
     "hs": 21,
     "as": 7,
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
     "ff": 0,
     "hs": 16,
     "as": 21,
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
     "ff": 0,
     "hs": 18,
     "as": 21,
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
     "ff": 0,
     "hs": 14,
     "as": 21,
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
     "ff": 0,
     "hs": 21,
     "as": 10,
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
     "ff": 0,
     "hs": 16,
     "as": 21,
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
     "ff": 0,
     "hs": 16,
     "as": 21,
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
     "ff": 0,
     "hs": 21,
     "as": 15,
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
     "ff": 0,
     "hs": 22,
     "as": 24,
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
     "ff": 0,
     "hs": 23,
     "as": 21,
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
     "ff": 0,
     "hs": 21,
     "as": 16,
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
     "ff": 0,
     "hs": 20,
     "as": 22,
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
     "ff": 0,
     "hs": 24,
     "as": 26,
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
     "ff": 0,
     "hs": 19,
     "as": 21,
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
     "ff": 0,
     "hs": 22,
     "as": 20,
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
     "ff": 0,
     "hs": 21,
     "as": 19,
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
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Daniel Dechristopher",
      "Matt Inzerillo"
     ],
     "a": [
      "Vincent Rigoglioso",
      "Ethan Fu"
     ]
    }
   ],
   "subs": []
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
      "Thomas Moran"
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
   "result": "away",
   "week": 5,
   "home": "Pickleball Kingdom Hamilton",
   "away": "Monroe",
   "time": "2026-09-22T19:30:00",
   "complete": true,
   "homePoints": 600,
   "awayPoints": 620,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
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
     "ff": 0,
     "hs": 15,
     "as": 24,
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
     "ff": 0,
     "hs": 21,
     "as": 17,
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
     "ff": 0,
     "hs": 14,
     "as": 21,
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
     "ff": 0,
     "hs": 22,
     "as": 20,
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
     "ff": 0,
     "hs": 8,
     "as": 21,
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
     "ff": 0,
     "hs": 21,
     "as": 18,
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
     "ff": 0,
     "hs": 21,
     "as": 16,
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
     "ff": 0,
     "hs": 27,
     "as": 25,
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
     "ff": 0,
     "hs": 21,
     "as": 10,
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
     "ff": 0,
     "hs": 13,
     "as": 21,
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
     "ff": 0,
     "hs": 12,
     "as": 21,
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
     "ff": 0,
     "hs": 19,
     "as": 21,
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
     "ff": 0,
     "hs": 12,
     "as": 21,
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
     "ff": 0,
     "hs": 15,
     "as": 21,
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
     "ff": 0,
     "hs": 21,
     "as": 16,
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
     "ff": 0,
     "hs": 18,
     "as": 21,
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
     "ff": 0,
     "hs": 27,
     "as": 25,
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
     "ff": 0,
     "hs": 21,
     "as": 16,
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
     "ff": 0,
     "hs": 17,
     "as": 21,
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
     "ff": 0,
     "hs": 22,
     "as": 20,
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
     "ff": 0,
     "hs": 21,
     "as": 23,
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
     "ff": 0,
     "hs": 21,
     "as": 14,
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
     "ff": 0,
     "hs": 21,
     "as": 13,
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
     "ff": 0,
     "hs": 21,
     "as": 14,
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
     "ff": 0,
     "hs": 15,
     "as": 21,
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
     "ff": 0,
     "hs": 18,
     "as": 21,
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
     "ff": 0,
     "hs": 20,
     "as": 22,
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
     "ff": 0,
     "hs": 21,
     "as": 19,
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
     "ff": 0,
     "hs": 16,
     "as": 21,
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
     "ff": 0,
     "hs": 16,
     "as": 21,
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
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Ashish Kumar",
      "Pritpal Singh"
     ],
     "a": [
      "Shawn Gold",
      "Stephen Fredericksen"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 5,
   "home": "Home Court",
   "away": "Allstar Pickler",
   "time": "2026-09-22T19:30:00",
   "complete": true,
   "homePoints": 677,
   "awayPoints": 497,
   "homeGW": 31,
   "awayGW": 1,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
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
     "ff": 0,
     "hs": 17,
     "as": 21,
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
     "ff": 0,
     "hs": 21,
     "as": 10,
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
     "ff": 0,
     "hs": 21,
     "as": 12,
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
     "ff": 0,
     "hs": 22,
     "as": 20,
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
     "ff": 0,
     "hs": 23,
     "as": 21,
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
     "ff": 0,
     "hs": 21,
     "as": 18,
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
     "ff": 0,
     "hs": 21,
     "as": 18,
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
     "ff": 0,
     "hs": 21,
     "as": 13,
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
     "ff": 0,
     "hs": 21,
     "as": 13,
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
     "ff": 0,
     "hs": 21,
     "as": 14,
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
     "ff": 0,
     "hs": 22,
     "as": 20,
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
     "ff": 0,
     "hs": 21,
     "as": 13,
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
     "ff": 0,
     "hs": 21,
     "as": 16,
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
     "ff": 0,
     "hs": 22,
     "as": 20,
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
     "ff": 0,
     "hs": 21,
     "as": 12,
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
     "ff": 0,
     "hs": 21,
     "as": 13,
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
     "ff": 0,
     "hs": 22,
     "as": 20,
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
     "ff": 0,
     "hs": 21,
     "as": 19,
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
     "ff": 0,
     "hs": 21,
     "as": 11,
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
     "ff": 0,
     "hs": 21,
     "as": 11,
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
     "ff": 0,
     "hs": 21,
     "as": 19,
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
     "ff": 0,
     "hs": 21,
     "as": 18,
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
     "ff": 0,
     "hs": 21,
     "as": 15,
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
     "ff": 0,
     "hs": 21,
     "as": 11,
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
     "ff": 0,
     "hs": 21,
     "as": 10,
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
     "ff": 0,
     "hs": 21,
     "as": 10,
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
     "ff": 0,
     "hs": 21,
     "as": 16,
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
     "ff": 0,
     "hs": 24,
     "as": 22,
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
     "ff": 0,
     "hs": 21,
     "as": 16,
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
     "ff": 0,
     "hs": 21,
     "as": 15,
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
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Marc Kunesch",
      "Robert Huntley"
     ],
     "a": [
      "Brandon Fulford",
      "Buyi Zhang"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 5,
   "home": "Dill Dinkers Newport",
   "away": "Bounce Malvern",
   "time": "2026-09-22T19:30:00",
   "complete": true,
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
      "Steppan Konoplev",
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
      "Bill Violette"
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
      "Xavier Vazquez"
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
      "Steppan Konoplev",
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
      "Steppan Konoplev",
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
   "result": "away",
   "week": 5,
   "home": "Dill Dinkers Newport",
   "away": "Pickleball HQ",
   "time": "2026-09-27T12:00:00",
   "complete": true,
   "provisional": true,
   "homePoints": 637,
   "awayPoints": 643,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jesse Pettit",
      "Steppan Konoplev"
     ],
     "a": [
      "Noah Ludwigsen",
      "Andy Suphaphol"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Bren Calpin",
      "Joel Steinbrunner"
     ],
     "a": [
      "Jimmy Ramja",
      "David Wheeler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Aleks Mirkovic",
      "Xan Hong"
     ],
     "a": [
      "Niman Ahmeti",
      "Matthew Rafaniello"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ian Diamond",
      "Paul Chantler"
     ],
     "a": [
      "Jose Campos",
      "Thomas Moran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jesse Pettit",
      "Steppan Konoplev"
     ],
     "a": [
      "Noah Ludwigsen",
      "Andy Suphaphol"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Bren Calpin",
      "Joel Steinbrunner"
     ],
     "a": [
      "Jimmy Ramja",
      "David Wheeler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Aleks Mirkovic",
      "Xan Hong"
     ],
     "a": [
      "Niman Ahmeti",
      "Matthew Rafaniello"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ian Diamond",
      "Paul Chantler"
     ],
     "a": [
      "Jose Campos",
      "Thomas Moran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Aleks Mirkovic",
      "Joel Steinbrunner"
     ],
     "a": [
      "Noah Ludwigsen",
      "Matthew Rafaniello"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jesse Pettit",
      "Xan Hong"
     ],
     "a": [
      "Jimmy Ramja",
      "Andy Suphaphol"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Ian Diamond",
      "Steppan Konoplev"
     ],
     "a": [
      "David Wheeler",
      "Jose Campos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Bren Calpin",
      "Paul Chantler"
     ],
     "a": [
      "Niman Ahmeti",
      "Thomas Moran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Aleks Mirkovic",
      "Joel Steinbrunner"
     ],
     "a": [
      "Noah Ludwigsen",
      "Matthew Rafaniello"
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
      "Jimmy Ramja",
      "Andy Suphaphol"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ian Diamond",
      "Steppan Konoplev"
     ],
     "a": [
      "David Wheeler",
      "Jose Campos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Bren Calpin",
      "Paul Chantler"
     ],
     "a": [
      "Niman Ahmeti",
      "Thomas Moran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jesse Pettit",
      "Aleks Mirkovic"
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
      "Steppan Konoplev",
      "Joel Steinbrunner"
     ],
     "a": [
      "Jimmy Ramja",
      "Matthew Rafaniello"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ian Diamond",
      "Bren Calpin"
     ],
     "a": [
      "Andy Suphaphol",
      "Thomas Moran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Xan Hong",
      "Paul Chantler"
     ],
     "a": [
      "Niman Ahmeti",
      "Jose Campos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Jesse Pettit",
      "Aleks Mirkovic"
     ],
     "a": [
      "Noah Ludwigsen",
      "David Wheeler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Steppan Konoplev",
      "Joel Steinbrunner"
     ],
     "a": [
      "Jimmy Ramja",
      "Matthew Rafaniello"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ian Diamond",
      "Bren Calpin"
     ],
     "a": [
      "Andy Suphaphol",
      "Thomas Moran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Xan Hong",
      "Paul Chantler"
     ],
     "a": [
      "Niman Ahmeti",
      "Jose Campos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Joel Steinbrunner",
      "Jesse Pettit"
     ],
     "a": [
      "Noah Ludwigsen",
      "Jose Campos"
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
      "Jimmy Ramja",
      "Thomas Moran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Paul Chantler",
      "Steppan Konoplev"
     ],
     "a": [
      "Niman Ahmeti",
      "David Wheeler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Bren Calpin",
      "Xan Hong"
     ],
     "a": [
      "Andy Suphaphol",
      "Matthew Rafaniello"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Joel Steinbrunner",
      "Jesse Pettit"
     ],
     "a": [
      "Noah Ludwigsen",
      "Thomas Moran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Aleks Mirkovic",
      "Ian Diamond"
     ],
     "a": [
      "Jimmy Ramja",
      "Jose Campos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Paul Chantler",
      "Steppan Konoplev"
     ],
     "a": [
      "Niman Ahmeti",
      "David Wheeler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Bren Calpin",
      "Xan Hong"
     ],
     "a": [
      "Andy Suphaphol",
      "Matthew Rafaniello"
     ]
    }
   ],
   "subs": [
    "Andy Suphaphol",
    "Bren Calpin",
    "Matthew Rafaniello"
   ]
  },
  {
   "result": "away",
   "week": 5,
   "home": "PickleRage Union County",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-09-27T13:00:00",
   "complete": true,
   "homePoints": 560,
   "awayPoints": 643,
   "homeGW": 11,
   "awayGW": 21,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Francis Thai",
      "Ren Macalalag"
     ],
     "a": [
      "Akash Raju",
      "Yashraj Kurani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Shreyas Suresh Hassan",
      "Vinay Mutt"
     ],
     "a": [
      "George Vega Jr",
      "Elliott Albanese"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jonathan Dong",
      "Jack Barry"
     ],
     "a": [
      "Jun Zhi Tan",
      "Ritesh Patel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Dan Yang",
      "Sean Diamond"
     ],
     "a": [
      "Corey Chen",
      "Lj Dequina"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Jack Barry",
      "Jonathan Dong"
     ],
     "a": [
      "Jun Zhi Tan",
      "Ritesh Patel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Ren Macalalag",
      "Francis Thai"
     ],
     "a": [
      "Akash Raju",
      "Yashraj Kurani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Shreyas Suresh Hassan",
      "Vinay Mutt"
     ],
     "a": [
      "George Vega Jr",
      "Elliott Albanese"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Dan Yang",
      "Sean Diamond"
     ],
     "a": [
      "Prashanth Koshy",
      "Lj Dequina"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Ren Macalalag",
      "Andy Knight"
     ],
     "a": [
      "Jun Zhi Tan",
      "George Vega Jr"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Dan Yang",
      "Jack Barry"
     ],
     "a": [
      "Ritesh Patel",
      "Prashanth Koshy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Vinay Mutt",
      "Sean Diamond"
     ],
     "a": [
      "Akash Raju",
      "Corey Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Shreyas Suresh Hassan",
      "Jonathan Dong"
     ],
     "a": [
      "Elliott Albanese",
      "Yashraj Kurani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Francis Thai",
      "Andy Knight"
     ],
     "a": [
      "Jun Zhi Tan",
      "Lj Dequina"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Dan Yang",
      "Jack Barry"
     ],
     "a": [
      "Akash Raju",
      "Corey Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Sean Diamond",
      "Ren Macalalag"
     ],
     "a": [
      "Elliott Albanese",
      "Yashraj Kurani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jonathan Dong",
      "Shreyas Suresh Hassan"
     ],
     "a": [
      "George Vega Jr",
      "Prashanth Koshy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Dan Yang",
      "Jonathan Dong"
     ],
     "a": [
      "Corey Chen",
      "George Vega Jr"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Shreyas Suresh Hassan",
      "Jack Barry"
     ],
     "a": [
      "Yashraj Kurani",
      "Lj Dequina"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Francis Thai",
      "Sean Diamond"
     ],
     "a": [
      "Jun Zhi Tan",
      "Elliott Albanese"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ren Macalalag",
      "Vinay Mutt"
     ],
     "a": [
      "Akash Raju",
      "Prashanth Koshy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jonathan Dong",
      "Dan Yang"
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
     "as": 23,
     "h": [
      "Shreyas Suresh Hassan",
      "Jack Barry"
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
      "Sean Diamond",
      "Andy Knight"
     ],
     "a": [
      "Jun Zhi Tan",
      "Elliott Albanese"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ren Macalalag",
      "Vinay Mutt"
     ],
     "a": [
      "Akash Raju",
      "Lj Dequina"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jack Barry",
      "Sean Diamond"
     ],
     "a": [
      "Yashraj Kurani",
      "Corey Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jonathan Dong",
      "Vinay Mutt"
     ],
     "a": [
      "Lj Dequina",
      "Ritesh Patel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Dan Yang",
      "Shreyas Suresh Hassan"
     ],
     "a": [
      "Jun Zhi Tan",
      "Prashanth Koshy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Francis Thai",
      "Andy Knight"
     ],
     "a": [
      "George Vega Jr",
      "Akash Raju"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Francis Thai",
      "Vinay Mutt"
     ],
     "a": [
      "Jun Zhi Tan",
      "Corey Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Dan Yang",
      "Shreyas Suresh Hassan"
     ],
     "a": [
      "Yashraj Kurani",
      "George Vega Jr"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jack Barry",
      "Sean Diamond"
     ],
     "a": [
      "Ritesh Patel",
      "Prashanth Koshy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Andy Knight",
      "Ren Macalalag"
     ],
     "a": [
      "Akash Raju",
      "Elliott Albanese"
     ]
    }
   ],
   "subs": [
    "Elliott Albanese"
   ]
  },
  {
   "result": "away",
   "week": 5,
   "home": "Home Court",
   "away": "Pickleball Kingdom Lehigh Valley",
   "time": "2026-09-27T16:00:00",
   "complete": true,
   "homePoints": 560,
   "awayPoints": 640,
   "homeGW": 13,
   "awayGW": 19,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Dennis Yap",
      "Robert Huntley"
     ],
     "a": [
      "Samuel Kashefska",
      "Cullen Curley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kevin Sheehan",
      "Ricky Jutkiewicz"
     ],
     "a": [
      "Eric Ruiz",
      "Ayon Codner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Bryan Mccourt",
      "Michael Vincent"
     ],
     "a": [
      "David Reyes",
      "Rohit Mankotia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jacob Yoo",
      "Michael Gilbert"
     ],
     "a": [
      "Carlos Rincon",
      "Michael Barndt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Dennis Yap",
      "Jacob Yoo"
     ],
     "a": [
      "Eric Ruiz",
      "Ayon Codner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kevin Sheehan",
      "Michael Gilbert"
     ],
     "a": [
      "Dion Brown",
      "Rohit Mankotia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ricky Jutkiewicz",
      "Michael Vincent"
     ],
     "a": [
      "Cullen Curley",
      "David Reyes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Bryan Mccourt",
      "Robert Huntley"
     ],
     "a": [
      "Harlos Vizcarrondo",
      "Michael Barndt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Bryan Mccourt",
      "Michael Gilbert"
     ],
     "a": [
      "Harlos Vizcarrondo",
      "Samuel Kashefska"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Dennis Yap",
      "Jacob Yoo"
     ],
     "a": [
      "Carlos Rincon",
      "Eric Ruiz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Ricky Jutkiewicz",
      "Robert Huntley"
     ],
     "a": [
      "David Reyes",
      "Michael Barndt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kevin Sheehan",
      "Michael Vincent"
     ],
     "a": [
      "Cullen Curley",
      "Dion Brown"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jacob Yoo",
      "Ricky Jutkiewicz"
     ],
     "a": [
      "Ayon Codner",
      "Samuel Kashefska"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Dennis Yap",
      "Michael Gilbert"
     ],
     "a": [
      "Michael Barndt",
      "Rohit Mankotia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Kevin Sheehan",
      "Robert Huntley"
     ],
     "a": [
      "Cullen Curley",
      "Dion Brown"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Bryan Mccourt",
      "Michael Vincent"
     ],
     "a": [
      "Harlos Vizcarrondo",
      "David Reyes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jacob Yoo",
      "Ricky Jutkiewicz"
     ],
     "a": [
      "Eric Ruiz",
      "Samuel Kashefska"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Dennis Yap",
      "Robert Huntley"
     ],
     "a": [
      "Ayon Codner",
      "Rohit Mankotia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Bryan Mccourt",
      "Michael Gilbert"
     ],
     "a": [
      "Carlos Rincon",
      "Harlos Vizcarrondo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kevin Sheehan",
      "Michael Vincent"
     ],
     "a": [
      "Michael Barndt",
      "Cullen Curley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Dennis Yap",
      "Bryan Mccourt"
     ],
     "a": [
      "Rohit Mankotia",
      "Eric Ruiz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kevin Sheehan",
      "Michael Gilbert"
     ],
     "a": [
      "Carlos Rincon",
      "Dion Brown"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jacob Yoo",
      "Michael Vincent"
     ],
     "a": [
      "Cullen Curley",
      "Ayon Codner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Ricky Jutkiewicz",
      "Robert Huntley"
     ],
     "a": [
      "David Reyes",
      "Samuel Kashefska"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Dennis Yap",
      "Michael Gilbert"
     ],
     "a": [
      "Rohit Mankotia",
      "Samuel Kashefska"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Jacob Yoo",
      "Michael Vincent"
     ],
     "a": [
      "Ayon Codner",
      "Dion Brown"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Robert Huntley",
      "Bryan Mccourt"
     ],
     "a": [
      "Harlos Vizcarrondo",
      "Michael Barndt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kevin Sheehan",
      "Ricky Jutkiewicz"
     ],
     "a": [
      "Eric Ruiz",
      "Carlos Rincon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jacob Yoo",
      "Michael Gilbert"
     ],
     "a": [
      "Rohit Mankotia",
      "Samuel Kashefska"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Ricky Jutkiewicz",
      "Michael Vincent"
     ],
     "a": [
      "Ayon Codner",
      "Harlos Vizcarrondo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kevin Sheehan",
      "Robert Huntley"
     ],
     "a": [
      "Carlos Rincon",
      "Dion Brown"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Dennis Yap",
      "Bryan Mccourt"
     ],
     "a": [
      "Cullen Curley",
      "Eric Ruiz"
     ]
    }
   ],
   "subs": [
    "Dion Brown"
   ]
  },
  {
   "result": "away",
   "week": 5,
   "home": "Allstar Pickler",
   "away": "Flemington",
   "time": "2026-09-27T16:00:00",
   "complete": true,
   "homePoints": 495,
   "awayPoints": 594,
   "homeGW": 8,
   "awayGW": 24,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Paul Rappoport",
      "Gianni Roman"
     ],
     "a": [
      "Eric Berlinger",
      "Craig Butler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Franklin Yiu",
      "Wen Jin"
     ],
     "a": [
      "David Shapiro",
      "Franklin Lupianez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "John Sallo",
      "Madhu Raghunathan"
     ],
     "a": [
      "Tom Hadler",
      "David Tabacco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "John Zhong",
      "Saad Talat Siddiqui"
     ],
     "a": [
      "Josh Rito",
      "Rick Wickenheisser"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Paul Rappoport",
      "Gianni Roman"
     ],
     "a": [
      "Craig Butler",
      "Eric Berlinger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Franklin Yiu",
      "Wen Jin"
     ],
     "a": [
      "David Shapiro",
      "Franklin Lupianez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "John Sallo",
      "Madhu Raghunathan"
     ],
     "a": [
      "David Tabacco",
      "Tom Hadler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "John Zhong",
      "Saad Talat Siddiqui"
     ],
     "a": [
      "Josh Rito",
      "Julian Edgren"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Paul Rappoport",
      "Jieping Wang"
     ],
     "a": [
      "David Shapiro",
      "Julian Edgren"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Wen Jin",
      "Gianni Roman"
     ],
     "a": [
      "Eric Berlinger",
      "David Tabacco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Franklin Yiu",
      "Madhu Raghunathan"
     ],
     "a": [
      "Tom Hadler",
      "Josh Rito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "John Sallo",
      "John Zhong"
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
     "as": 19,
     "h": [
      "Paul Rappoport",
      "Jieping Wang"
     ],
     "a": [
      "David Shapiro",
      "Julian Edgren"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Wen Jin",
      "Gianni Roman"
     ],
     "a": [
      "Franklin Lupianez",
      "David Tabacco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Franklin Yiu",
      "Madhu Raghunathan"
     ],
     "a": [
      "Tom Hadler",
      "Josh Rito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "John Sallo",
      "Saad Talat Siddiqui"
     ],
     "a": [
      "Craig Butler",
      "Rick Wickenheisser"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Paul Rappoport",
      "Wen Jin"
     ],
     "a": [
      "Craig Butler",
      "David Shapiro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Franklin Yiu",
      "Jieping Wang"
     ],
     "a": [
      "Eric Berlinger",
      "Rick Wickenheisser"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Gianni Roman",
      "Madhu Raghunathan"
     ],
     "a": [
      "David Tabacco",
      "Julian Edgren"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "John Sallo",
      "Saad Talat Siddiqui"
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
      "John Sallo",
      "Gianni Roman"
     ],
     "a": [
      "Craig Butler",
      "Tom Hadler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Franklin Yiu",
      "Jieping Wang"
     ],
     "a": [
      "Eric Berlinger",
      "Rick Wickenheisser"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "Brandon Fulford",
      "Wen Jin"
     ],
     "a": [
      "David Tabacco",
      "Julian Edgren"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Madhu Raghunathan",
      "Saad Talat Siddiqui"
     ],
     "a": [
      "Franklin Lupianez",
      "Josh Rito"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "Brandon Fulford",
      "Madhu Raghunathan"
     ],
     "a": [
      "Craig Butler",
      "David Shapiro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Franklin Yiu",
      "John Sallo"
     ],
     "a": [
      "Eric Berlinger",
      "Tom Hadler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jieping Wang",
      "Gianni Roman"
     ],
     "a": [
      "Franklin Lupianez",
      "Rick Wickenheisser"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Wen Jin",
      "Saad Talat Siddiqui"
     ],
     "a": [
      "Julian Edgren",
      "Josh Rito"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "Brandon Fulford",
      "Madhu Raghunathan"
     ],
     "a": [
      "Craig Butler",
      "Tom Hadler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Franklin Yiu",
      "John Sallo"
     ],
     "a": [
      "Eric Berlinger",
      "Julian Edgren"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jieping Wang",
      "Wen Jin"
     ],
     "a": [
      "Franklin Lupianez",
      "Rick Wickenheisser"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Gianni Roman",
      "Saad Talat Siddiqui"
     ],
     "a": [
      "David Shapiro",
      "David Tabacco"
     ]
    }
   ],
   "subs": [
    "John Zhong",
    "John Sallo",
    "Julian Edgren",
    "Jieping Wang",
    "Wen Jin",
    "Paul Rappoport"
   ]
  },
  {
   "result": "away",
   "week": 6,
   "home": "Dill Dinkers Freehold",
   "away": "Monroe",
   "time": "2026-09-29T19:00:00",
   "complete": true,
   "homePoints": 619,
   "awayPoints": 649,
   "homeGW": 13,
   "awayGW": 19,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kevin Lew",
      "Erik Reilly"
     ],
     "a": [
      "David Bogatyrev",
      "Tayon Hart"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Hua Lin",
      "Wensheng Yue"
     ],
     "a": [
      "Kurt Skalamera",
      "Uttam Purohit"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Ian Kohn",
      "Big G"
     ],
     "a": [
      "Jacob Rosengarten",
      "Nicholas Lugo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Siva Indupuru",
      "Ben Cortes"
     ],
     "a": [
      "Cory Mintz",
      "Salman Saad"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Erik Reilly",
      "Kevin Lew"
     ],
     "a": [
      "David Bogatyrev",
      "Salman Saad"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Hua Lin",
      "Siva Indupuru"
     ],
     "a": [
      "Tayon Hart",
      "Uttam Purohit"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ian Kohn",
      "Big G"
     ],
     "a": [
      "Jacob Rosengarten",
      "Nicholas Lugo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Wensheng Yue",
      "Ben Cortes"
     ],
     "a": [
      "John Coyle",
      "Leon Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Erik Reilly",
      "Ben Cortes"
     ],
     "a": [
      "Jacob Rosengarten",
      "Cory Mintz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kevin Lew",
      "Wensheng Yue"
     ],
     "a": [
      "Nicholas Lugo",
      "Leon Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Hua Lin",
      "Ian Kohn"
     ],
     "a": [
      "Tayon Hart",
      "Uttam Purohit"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Big G",
      "Siva Indupuru"
     ],
     "a": [
      "Kurt Skalamera",
      "Salman Saad"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Ben Cortes",
      "Ian Kohn"
     ],
     "a": [
      "Jacob Rosengarten",
      "David Bogatyrev"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kevin Lew",
      "Big G"
     ],
     "a": [
      "John Coyle",
      "Uttam Purohit"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Erik Reilly",
      "Siva Indupuru"
     ],
     "a": [
      "Nicholas Lugo",
      "Tayon Hart"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Hua Lin",
      "Wensheng Yue"
     ],
     "a": [
      "Kurt Skalamera",
      "Salman Saad"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kevin Lew",
      "Hua Lin"
     ],
     "a": [
      "Kurt Skalamera",
      "David Bogatyrev"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Wensheng Yue",
      "Big G"
     ],
     "a": [
      "John Coyle",
      "Uttam Purohit"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Erik Reilly",
      "Ian Kohn"
     ],
     "a": [
      "Leon Li",
      "Tayon Hart"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Ben Cortes",
      "Siva Indupuru"
     ],
     "a": [
      "Nicholas Lugo",
      "Cory Mintz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Erik Reilly",
      "Ben Cortes"
     ],
     "a": [
      "Jacob Rosengarten",
      "John Coyle"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kevin Lew",
      "Hua Lin"
     ],
     "a": [
      "Kurt Skalamera",
      "David Bogatyrev"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Siva Indupuru",
      "Big G"
     ],
     "a": [
      "Leon Li",
      "Salman Saad"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Wensheng Yue",
      "Ian Kohn"
     ],
     "a": [
      "Uttam Purohit",
      "Cory Mintz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kevin Lew",
      "Wensheng Yue"
     ],
     "a": [
      "Jacob Rosengarten",
      "John Coyle"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ben Cortes",
      "Big G"
     ],
     "a": [
      "Nicholas Lugo",
      "Tayon Hart"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Hua Lin",
      "Ian Kohn"
     ],
     "a": [
      "Leon Li",
      "Salman Saad"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Erik Reilly",
      "Siva Indupuru"
     ],
     "a": [
      "Cory Mintz",
      "David Bogatyrev"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Hua Lin",
      "Siva Indupuru"
     ],
     "a": [
      "Jacob Rosengarten",
      "David Bogatyrev"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Erik Reilly",
      "Wensheng Yue"
     ],
     "a": [
      "Nicholas Lugo",
      "Kurt Skalamera"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Ben Cortes",
      "Ian Kohn"
     ],
     "a": [
      "Leon Li",
      "Tayon Hart"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Kevin Lew",
      "Big G"
     ],
     "a": [
      "Salman Saad",
      "Uttam Purohit"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 6,
   "home": "Premiere",
   "away": "Pickle House",
   "time": "2026-09-29T19:00:00",
   "complete": true,
   "homePoints": 639,
   "awayPoints": 598,
   "homeGW": 19,
   "awayGW": 13,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Timothy Lynskey",
      "Rob Telles"
     ],
     "a": [
      "Sree Harsha Konduru",
      "Varun Gurram"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jason Feldman",
      "Gary White"
     ],
     "a": [
      "Shyler Smith",
      "Bennett Pereira"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Eden Ksendzovsky",
      "Daniel Antonelli"
     ],
     "a": [
      "Ping Peng",
      "Neil Dedhia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Matthew Schwartz",
      "Joseph Lynskey"
     ],
     "a": [
      "Sushil Rijhwani",
      "Avneesh Agarwal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jason Feldman",
      "Gary White"
     ],
     "a": [
      "Sree Harsha Konduru",
      "Shyler Smith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Timothy Lynskey",
      "Rob Telles"
     ],
     "a": [
      "Varun Gurram",
      "Bennett Pereira"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Joseph Lynskey",
      "Matthew Schwartz"
     ],
     "a": [
      "Sushil Rijhwani",
      "Neil Dedhia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Daniel Antonelli",
      "Eden Ksendzovsky"
     ],
     "a": [
      "Ping Peng",
      "Avneesh Agarwal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Joseph Lynskey",
      "Timothy Lynskey"
     ],
     "a": [
      "Sree Harsha Konduru",
      "Varun Gurram"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Matthew Schwartz",
      "Gary White"
     ],
     "a": [
      "Shyler Smith",
      "Neil Dedhia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Jason Feldman",
      "Eden Ksendzovsky"
     ],
     "a": [
      "Sushil Rijhwani",
      "Ping Peng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Daniel Antonelli",
      "Rob Telles"
     ],
     "a": [
      "Bennett Pereira",
      "Avneesh Agarwal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Matthew Schwartz",
      "Gary White"
     ],
     "a": [
      "Sree Harsha Konduru",
      "Shyler Smith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jason Feldman",
      "Eden Ksendzovsky"
     ],
     "a": [
      "Varun Gurram",
      "Neil Dedhia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Daniel Antonelli",
      "Rob Telles"
     ],
     "a": [
      "Bennett Pereira",
      "Ping Peng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 30,
     "as": 28,
     "h": [
      "Joseph Lynskey",
      "Timothy Lynskey"
     ],
     "a": [
      "Sushil Rijhwani",
      "Avneesh Agarwal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Gary White",
      "Timothy Lynskey"
     ],
     "a": [
      "Shyler Smith",
      "Varun Gurram"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Matthew Schwartz",
      "Jason Feldman"
     ],
     "a": [
      "Bennett Pereira",
      "Avneesh Agarwal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Eden Ksendzovsky",
      "Rob Telles"
     ],
     "a": [
      "Sree Harsha Konduru",
      "Neil Dedhia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Daniel Antonelli",
      "Joseph Lynskey"
     ],
     "a": [
      "Sushil Rijhwani",
      "Ping Peng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Gary White",
      "Timothy Lynskey"
     ],
     "a": [
      "Shyler Smith",
      "Sushil Rijhwani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Matthew Schwartz",
      "Jason Feldman"
     ],
     "a": [
      "Ping Peng",
      "Bennett Pereira"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Eden Ksendzovsky",
      "Rob Telles"
     ],
     "a": [
      "Sree Harsha Konduru",
      "Neil Dedhia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Daniel Antonelli",
      "Joseph Lynskey"
     ],
     "a": [
      "Varun Gurram",
      "Avneesh Agarwal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Eden Ksendzovsky",
      "Timothy Lynskey"
     ],
     "a": [
      "Shyler Smith",
      "Varun Gurram"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Gary White",
      "Joseph Lynskey"
     ],
     "a": [
      "Sree Harsha Konduru",
      "Bennett Pereira"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Rob Telles",
      "Matthew Schwartz"
     ],
     "a": [
      "Sushil Rijhwani",
      "Neil Dedhia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jason Feldman",
      "Daniel Antonelli"
     ],
     "a": [
      "Ping Peng",
      "Avneesh Agarwal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jason Feldman",
      "Daniel Antonelli"
     ],
     "a": [
      "Varun Gurram",
      "Avneesh Agarwal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Eden Ksendzovsky",
      "Timothy Lynskey"
     ],
     "a": [
      "Shyler Smith",
      "Bennett Pereira"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Rob Telles",
      "Matthew Schwartz"
     ],
     "a": [
      "Sree Harsha Konduru",
      "Sushil Rijhwani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Joseph Lynskey",
      "Gary White"
     ],
     "a": [
      "Ping Peng",
      "Neil Dedhia"
     ]
    }
   ],
   "subs": [
    "Shyler Smith"
   ]
  },
  {
   "result": "home",
   "week": 6,
   "home": "Bounce Malvern",
   "away": "Picklr Newtown",
   "time": "2026-09-29T19:00:00",
   "complete": true,
   "homePoints": 659,
   "awayPoints": 535,
   "homeGW": 26,
   "awayGW": 6,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Graham Heavenrich",
      "Lincoln Jensen"
     ],
     "a": [
      "Arnold Poblete",
      "Larry Minsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Russell Cripps",
      "Ryan Hathaway"
     ],
     "a": [
      "Gary Garretson",
      "Jason Wu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Matt Enz",
      "Sal Bwint"
     ],
     "a": [
      "Andy Ro",
      "J-P Lautenschlager"
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
      "Angelo Disipio",
      "Mathew Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jordan Demcher",
      "Ryan Hathaway"
     ],
     "a": [
      "Arnold Poblete",
      "Larry Minsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Harvey Mitchell",
      "Matt Enz"
     ],
     "a": [
      "Gary Garretson",
      "Steven Hummel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Russell Cripps",
      "Lincoln Jensen"
     ],
     "a": [
      "Stephane Sabathier",
      "Andy Ro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jamison Rowles",
      "Sal Bwint"
     ],
     "a": [
      "Angelo Disipio",
      "Mathew Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Matheus Korndoerfer",
      "Russell Cripps"
     ],
     "a": [
      "Arnold Poblete",
      "Steven Hummel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lincoln Jensen",
      "Sal Bwint"
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
     "as": 11,
     "h": [
      "Andrew Neave",
      "Jordan Demcher"
     ],
     "a": [
      "Angelo Disipio",
      "Stephane Sabathier"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Graham Heavenrich",
      "Jamison Rowles"
     ],
     "a": [
      "Jason Wu",
      "Mathew Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Jamison Rowles",
      "Ryan Hathaway"
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
     "as": 14,
     "h": [
      "Matheus Korndoerfer",
      "Jordan Demcher"
     ],
     "a": [
      "Steven Hummel",
      "Stephane Sabathier"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Harvey Mitchell",
      "Andrew Neave"
     ],
     "a": [
      "Andy Ro",
      "Larry Minsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Graham Heavenrich",
      "Matt Enz"
     ],
     "a": [
      "Mathew Yang",
      "Jason Wu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Matt Enz",
      "Jamison Rowles"
     ],
     "a": [
      "Steven Hummel",
      "Stephane Sabathier"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Harvey Mitchell",
      "Matheus Korndoerfer"
     ],
     "a": [
      "Jason Wu",
      "Andy Ro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Ryan Hathaway",
      "Sal Bwint"
     ],
     "a": [
      "Gary Garretson",
      "J-P Lautenschlager"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Russell Cripps",
      "Lincoln Jensen"
     ],
     "a": [
      "Angelo Disipio",
      "Larry Minsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Graham Heavenrich",
      "Matheus Korndoerfer"
     ],
     "a": [
      "Steven Hummel",
      "J-P Lautenschlager"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Harvey Mitchell",
      "Jamison Rowles"
     ],
     "a": [
      "Jason Wu",
      "Andy Ro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jordan Demcher",
      "Ryan Hathaway"
     ],
     "a": [
      "Angelo Disipio",
      "Gary Garretson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Andrew Neave",
      "Matt Enz"
     ],
     "a": [
      "Mathew Yang",
      "Arnold Poblete"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Harvey Mitchell",
      "Jordan Demcher"
     ],
     "a": [
      "Jason Wu",
      "Steven Hummel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lincoln Jensen",
      "Andrew Neave"
     ],
     "a": [
      "Angelo Disipio",
      "J-P Lautenschlager"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Graham Heavenrich",
      "Sal Bwint"
     ],
     "a": [
      "Arnold Poblete",
      "Stephane Sabathier"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Matt Enz",
      "Russell Cripps"
     ],
     "a": [
      "Larry Minsky",
      "Mathew Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Harvey Mitchell",
      "Graham Heavenrich"
     ],
     "a": [
      "Jason Wu",
      "Steven Hummel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Matheus Korndoerfer",
      "Sal Bwint"
     ],
     "a": [
      "J-P Lautenschlager",
      "Gary Garretson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jordan Demcher",
      "Jamison Rowles"
     ],
     "a": [
      "Arnold Poblete",
      "Andy Ro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Russell Cripps",
      "Ryan Hathaway"
     ],
     "a": [
      "Stephane Sabathier",
      "Larry Minsky"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 6,
   "home": "APC Garden State",
   "away": "Dill Dinkers Newport",
   "time": "2026-09-29T19:30:00",
   "complete": true,
   "homePoints": 662,
   "awayPoints": 519,
   "homeGW": 26,
   "awayGW": 6,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Bruce Nguyen",
      "Andress Mims"
     ],
     "a": [
      "David Fiscella",
      "Aleks Mirkovic"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Tyler Bayly",
      "Mark Waters"
     ],
     "a": [
      "Jesse Pettit",
      "Simon Darlington"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Uzoma Nwankwo",
      "Chris Machuzak"
     ],
     "a": [
      "Cosme Tapia",
      "Xavier Vazquez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Matt Inzerillo",
      "Yongzhe Tian"
     ],
     "a": [
      "Xan Hong",
      "Paul Chantler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jimmy Shapiro",
      "Yongzhe Tian"
     ],
     "a": [
      "David Fiscella",
      "Cosme Tapia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Daniel Dechristopher",
      "Mark Waters"
     ],
     "a": [
      "Jesse Pettit",
      "Rick Olafsson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Tyler Bayly",
      "Uzoma Nwankwo"
     ],
     "a": [
      "Aleks Mirkovic",
      "Xan Hong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Bruce Nguyen",
      "Chris Machuzak"
     ],
     "a": [
      "Simon Darlington",
      "Xavier Vazquez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Andress Mims",
      "Uzoma Nwankwo"
     ],
     "a": [
      "David Fiscella",
      "Jesse Pettit"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Daniel Dechristopher",
      "Matt Inzerillo"
     ],
     "a": [
      "Aleks Mirkovic",
      "Cosme Tapia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Mark Waters",
      "Tyler Bayly"
     ],
     "a": [
      "Xavier Vazquez",
      "Xan Hong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Bruce Nguyen",
      "Chris Machuzak"
     ],
     "a": [
      "Simon Darlington",
      "Paul Chantler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Tyler Bayly",
      "Jimmy Shapiro"
     ],
     "a": [
      "David Fiscella",
      "Rick Olafsson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Bruce Nguyen",
      "Daniel Dechristopher"
     ],
     "a": [
      "Aleks Mirkovic",
      "Simon Darlington"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Matt Inzerillo",
      "Andress Mims"
     ],
     "a": [
      "Jesse Pettit",
      "Xavier Vazquez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Chris Machuzak",
      "Yongzhe Tian"
     ],
     "a": [
      "Cosme Tapia",
      "Paul Chantler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Andress Mims",
      "Yongzhe Tian"
     ],
     "a": [
      "David Fiscella",
      "Aleks Mirkovic"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Bruce Nguyen",
      "Matt Inzerillo"
     ],
     "a": [
      "Jesse Pettit",
      "Simon Darlington"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Daniel Dechristopher",
      "Mark Waters"
     ],
     "a": [
      "Cosme Tapia",
      "Xavier Vazquez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Jimmy Shapiro",
      "Uzoma Nwankwo"
     ],
     "a": [
      "Xan Hong",
      "Paul Chantler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Andress Mims",
      "Chris Machuzak"
     ],
     "a": [
      "David Fiscella",
      "Rick Olafsson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Mark Waters",
      "Matt Inzerillo"
     ],
     "a": [
      "Aleks Mirkovic",
      "Simon Darlington"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Tyler Bayly",
      "Yongzhe Tian"
     ],
     "a": [
      "Jesse Pettit",
      "Xavier Vazquez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Daniel Dechristopher",
      "Uzoma Nwankwo"
     ],
     "a": [
      "Cosme Tapia",
      "Paul Chantler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Chris Machuzak",
      "Tyler Bayly"
     ],
     "a": [
      "David Fiscella",
      "Jesse Pettit"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Mark Waters",
      "Uzoma Nwankwo"
     ],
     "a": [
      "Aleks Mirkovic",
      "Cosme Tapia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Jimmy Shapiro",
      "Matt Inzerillo"
     ],
     "a": [
      "Xavier Vazquez",
      "Xan Hong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Andress Mims",
      "Yongzhe Tian"
     ],
     "a": [
      "Simon Darlington",
      "Paul Chantler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Bruce Nguyen",
      "Mark Waters"
     ],
     "a": [
      "David Fiscella",
      "Cosme Tapia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Tyler Bayly",
      "Yongzhe Tian"
     ],
     "a": [
      "Jesse Pettit",
      "Rick Olafsson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Chris Machuzak",
      "Uzoma Nwankwo"
     ],
     "a": [
      "Aleks Mirkovic",
      "Xan Hong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Daniel Dechristopher",
      "Matt Inzerillo"
     ],
     "a": [
      "Simon Darlington",
      "Xavier Vazquez"
     ]
    }
   ],
   "subs": [
    "Simon Darlington"
   ]
  },
  {
   "result": null,
   "week": 6,
   "home": "Allstar Pickler",
   "away": "Pickleball Kingdom Lehigh Valley",
   "time": "2026-09-29T19:30:00",
   "complete": false,
   "games": [
    {
     "t": "male",
     "h": [
      "Sean Majury",
      "Madhu Raghunathan"
     ],
     "a": [
      "Ayon Codner",
      "Eric Ruiz"
     ]
    },
    {
     "t": "male",
     "h": [
      "Vyas Maddukuri",
      "Saad Talat Siddiqui"
     ],
     "a": [
      "Samuel Kashefska",
      "Cullen Curley"
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "male",
     "h": [
      "Alexander King",
      "Jonathan Lugtu"
     ],
     "a": [
      "Raymond Romulo",
      "David Reyes"
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
      "Franklin Yiu",
      "Chaitanya Sharma"
     ],
     "a": [
      "Rohit Mankotia",
      "Michael Barndt"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Franklin Yiu",
      "Chaitanya Sharma"
     ],
     "a": [
      "Ayon Codner",
      "Eric Ruiz"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Vyas Maddukuri",
      "Saad Talat Siddiqui"
     ],
     "a": [
      "Samuel Kashefska",
      "David Reyes"
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "male",
     "h": [
      "Alexander King",
      "Jonathan Lugtu"
     ],
     "a": [
      "Rohit Mankotia",
      "Raymond Romulo"
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
     "t": "male",
     "h": [
      "Sean Majury",
      "Madhu Raghunathan"
     ],
     "a": [
      "Cullen Curley",
      "Michael Barndt"
     ]
    },
    {
     "t": "male",
     "h": [
      "Franklin Yiu",
      "Sean Majury"
     ],
     "a": [
      "Ayon Codner",
      "Cullen Curley"
     ]
    },
    {
     "t": "male",
     "h": [
      "Madhu Raghunathan",
      "Saad Talat Siddiqui"
     ],
     "a": [
      "Samuel Kashefska",
      "Rohit Mankotia"
     ]
    },
    {
     "t": "male",
     "h": [
      "Alexander King",
      "Chaitanya Sharma"
     ],
     "a": [
      "Eric Ruiz",
      "Raymond Romulo"
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
     "t": "male",
     "h": [
      "Vyas Maddukuri",
      "Jonathan Lugtu"
     ],
     "a": [
      "David Reyes",
      "Michael Barndt"
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "male",
     "h": [
      "Franklin Yiu",
      "Sean Majury"
     ],
     "a": [
      "Rohit Mankotia",
      "Ayon Codner"
     ]
    },
    {
     "t": "male",
     "h": [
      "Madhu Raghunathan",
      "Saad Talat Siddiqui"
     ],
     "a": [
      "Samuel Kashefska",
      "Eric Ruiz"
     ]
    },
    {
     "t": "male",
     "h": [
      "Vyas Maddukuri",
      "Jonathan Lugtu"
     ],
     "a": [
      "Cullen Curley",
      "David Reyes"
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "male",
     "h": [
      "Alexander King",
      "Chaitanya Sharma"
     ],
     "a": [
      "Raymond Romulo",
      "Michael Barndt"
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
     "t": "male",
     "h": [
      "Alexander King",
      "Madhu Raghunathan"
     ],
     "a": [
      "Ayon Codner",
      "Raymond Romulo"
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
     "t": "male",
     "h": [
      "Franklin Yiu",
      "Jonathan Lugtu"
     ],
     "a": [
      "Rohit Mankotia",
      "Eric Ruiz"
     ]
    },
    {
     "t": "male",
     "h": [
      "Sean Majury",
      "Saad Talat Siddiqui"
     ],
     "a": [
      "Cullen Curley",
      "Samuel Kashefska"
     ]
    },
    {
     "t": "male",
     "h": [
      "Vyas Maddukuri",
      "Chaitanya Sharma"
     ],
     "a": [
      "David Reyes",
      "Michael Barndt"
     ],
     "hSub": [
      1,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Franklin Yiu",
      "Jonathan Lugtu"
     ],
     "a": [
      "Rohit Mankotia",
      "David Reyes"
     ]
    },
    {
     "t": "male",
     "h": [
      "Sean Majury",
      "Vyas Maddukuri"
     ],
     "a": [
      "Samuel Kashefska",
      "Eric Ruiz"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Alexander King",
      "Madhu Raghunathan"
     ],
     "a": [
      "Cullen Curley",
      "Raymond Romulo"
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
     "t": "male",
     "h": [
      "Chaitanya Sharma",
      "Saad Talat Siddiqui"
     ],
     "a": [
      "Ayon Codner",
      "Michael Barndt"
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "male",
     "h": [
      "Chaitanya Sharma",
      "Saad Talat Siddiqui"
     ],
     "a": [
      "Ayon Codner",
      "David Reyes"
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "male",
     "h": [
      "Sean Majury",
      "Jonathan Lugtu"
     ],
     "a": [
      "Rohit Mankotia",
      "Samuel Kashefska"
     ]
    },
    {
     "t": "male",
     "h": [
      "Alexander King",
      "Franklin Yiu"
     ],
     "a": [
      "Eric Ruiz",
      "Raymond Romulo"
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
     "t": "male",
     "h": [
      "Vyas Maddukuri",
      "Madhu Raghunathan"
     ],
     "a": [
      "Cullen Curley",
      "Michael Barndt"
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "male",
     "h": [
      "Jonathan Lugtu",
      "Saad Talat Siddiqui"
     ],
     "a": [
      "Ayon Codner",
      "Samuel Kashefska"
     ]
    },
    {
     "t": "male",
     "h": [
      "Sean Majury",
      "Chaitanya Sharma"
     ],
     "a": [
      "Rohit Mankotia",
      "Cullen Curley"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Alexander King",
      "Franklin Yiu"
     ],
     "a": [
      "David Reyes",
      "Raymond Romulo"
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
     "t": "male",
     "h": [
      "Vyas Maddukuri",
      "Madhu Raghunathan"
     ],
     "a": [
      "Eric Ruiz",
      "Michael Barndt"
     ],
     "hSub": [
      1,
      0
     ]
    }
   ]
  },
  {
   "result": "home",
   "week": 6,
   "home": "Pickleball HQ",
   "away": "Pickleball Kingdom Hamilton",
   "time": "2026-09-29T19:30:00",
   "complete": true,
   "homePoints": 643,
   "awayPoints": 555,
   "homeGW": 23,
   "awayGW": 9,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jimmy Ramja",
      "David Wheeler"
     ],
     "a": [
      "Imran Mazhar",
      "Syed Haider"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Christopher Hendrickson",
      "Noah Ludwigsen"
     ],
     "a": [
      "Ashish Kumar",
      "Samrat Sood"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kyle Korman",
      "Nesip Cengiz"
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
      "Luca Hendrickson",
      "Anthony Simonetti"
     ],
     "a": [
      "Venu Yengala",
      "Pritpal Singh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Luca Hendrickson",
      "Anthony Simonetti"
     ],
     "a": [
      "Imran Mazhar",
      "Syed Haider"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Christopher Hendrickson",
      "Noah Ludwigsen"
     ],
     "a": [
      "Ashish Kumar",
      "Pritpal Singh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kyle Korman",
      "Carlos Idrovo"
     ],
     "a": [
      "Venu Yengala",
      "Dhruv Dobariya"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jimmy Ramja",
      "Nesip Cengiz"
     ],
     "a": [
      "Dilip Patel",
      "Jaiveer Narwal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Luca Hendrickson",
      "Noah Ludwigsen"
     ],
     "a": [
      "Imran Mazhar",
      "Pritpal Singh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Christopher Hendrickson",
      "Anthony Simonetti"
     ],
     "a": [
      "Ashish Kumar",
      "Syed Haider"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Kyle Korman",
      "David Wheeler"
     ],
     "a": [
      "Samrat Sood",
      "Dhruv Dobariya"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Carlos Idrovo",
      "Jimmy Ramja"
     ],
     "a": [
      "Venu Yengala",
      "Aaron Chan"
     ]
    },
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
      "Ashish Kumar",
      "Pritpal Singh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Luca Hendrickson",
      "Noah Ludwigsen"
     ],
     "a": [
      "Dhruv Dobariya",
      "Imran Mazhar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Jimmy Ramja",
      "Kyle Korman"
     ],
     "a": [
      "Aaron Chan",
      "Venu Yengala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Carlos Idrovo",
      "Nesip Cengiz"
     ],
     "a": [
      "Dilip Patel",
      "Syed Haider"
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
      "Ashish Kumar",
      "Dhruv Dobariya"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Carlos Idrovo",
      "Nesip Cengiz"
     ],
     "a": [
      "Venu Yengala",
      "Jaiveer Narwal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Anthony Simonetti",
      "Noah Ludwigsen"
     ],
     "a": [
      "Dilip Patel",
      "Imran Mazhar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jimmy Ramja",
      "David Wheeler"
     ],
     "a": [
      "Samrat Sood",
      "Syed Haider"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Luca Hendrickson",
      "Christopher Hendrickson"
     ],
     "a": [
      "Pritpal Singh",
      "Imran Mazhar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Anthony Simonetti",
      "Noah Ludwigsen"
     ],
     "a": [
      "Ashish Kumar",
      "Dilip Patel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "David Wheeler",
      "Carlos Idrovo"
     ],
     "a": [
      "Venu Yengala",
      "Syed Haider"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kyle Korman",
      "Nesip Cengiz"
     ],
     "a": [
      "Dhruv Dobariya",
      "Aaron Chan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Anthony Simonetti",
      "David Wheeler"
     ],
     "a": [
      "Ashish Kumar",
      "Dhruv Dobariya"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Noah Ludwigsen",
      "Kyle Korman"
     ],
     "a": [
      "Pritpal Singh",
      "Syed Haider"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Luca Hendrickson",
      "Jimmy Ramja"
     ],
     "a": [
      "Imran Mazhar",
      "Jaiveer Narwal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Christopher Hendrickson",
      "Carlos Idrovo"
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
      "Christopher Hendrickson",
      "Jimmy Ramja"
     ],
     "a": [
      "Ashish Kumar",
      "Imran Mazhar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "David Wheeler",
      "Anthony Simonetti"
     ],
     "a": [
      "Pritpal Singh",
      "Syed Haider"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Noah Ludwigsen",
      "Kyle Korman"
     ],
     "a": [
      "Venu Yengala",
      "Dilip Patel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Luca Hendrickson",
      "Nesip Cengiz"
     ],
     "a": [
      "Dhruv Dobariya",
      "Jaiveer Narwal"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 6,
   "home": "Montville",
   "away": "Flemington",
   "time": "2026-09-29T19:30:00",
   "complete": true,
   "homePoints": 676,
   "awayPoints": 489,
   "homeGW": 29,
   "awayGW": 3,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Shalin Rawal",
      "Umang Pathak"
     ],
     "a": [
      "Eric Berlinger",
      "John Pineda"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Brandon Tsang",
      "Meet Thakkar"
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
      "Jeff Axelrad",
      "Sal Cocuzza"
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
     "as": 13,
     "h": [
      "Nathan Labarba",
      "Jesse Mynahan"
     ],
     "a": [
      "Tom Hadler",
      "Rick Wickenheisser"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Shalin Rawal",
      "Umang Pathak"
     ],
     "a": [
      "Eric Berlinger",
      "John Pineda"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jeff Axelrad",
      "Nathan Labarba"
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
     "as": 15,
     "h": [
      "Jesse Mynahan",
      "Brandon Tsang"
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
     "as": 14,
     "h": [
      "Luke Simon",
      "Meet Thakkar"
     ],
     "a": [
      "Tom Hadler",
      "Josh Rito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Jeff Axelrad",
      "Nathan Labarba"
     ],
     "a": [
      "Craig Butler",
      "Tom Hadler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Umang Pathak",
      "Luke Simon"
     ],
     "a": [
      "John Fallone",
      "Josh Rito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Shalin Rawal",
      "Jesse Mynahan"
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
     "as": 11,
     "h": [
      "Sal Cocuzza",
      "Meet Thakkar"
     ],
     "a": [
      "David Tabacco",
      "Rick Wickenheisser"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Sal Cocuzza",
      "Meet Thakkar"
     ],
     "a": [
      "Craig Butler",
      "John Pineda"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Luke Simon",
      "Shalin Rawal"
     ],
     "a": [
      "John Fallone",
      "David Tabacco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Jesse Mynahan",
      "Umang Pathak"
     ],
     "a": [
      "Eric Berlinger",
      "Josh Fink"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jeff Axelrad",
      "Brandon Tsang"
     ],
     "a": [
      "Josh Rito",
      "Rick Wickenheisser"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Umang Pathak",
      "Luke Simon"
     ],
     "a": [
      "John Pineda",
      "John Fallone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Meet Thakkar",
      "Shalin Rawal"
     ],
     "a": [
      "Craig Butler",
      "Josh Fink"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Sal Cocuzza",
      "Brandon Tsang"
     ],
     "a": [
      "Tom Hadler",
      "Josh Rito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jesse Mynahan",
      "Nathan Labarba"
     ],
     "a": [
      "David Tabacco",
      "Rick Wickenheisser"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Nathan Labarba",
      "Umang Pathak"
     ],
     "a": [
      "John Pineda",
      "John Fallone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Brandon Tsang",
      "Meet Thakkar"
     ],
     "a": [
      "Josh Rito",
      "Craig Butler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Shalin Rawal",
      "Jesse Mynahan"
     ],
     "a": [
      "Eric Berlinger",
      "David Tabacco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jeff Axelrad",
      "Sal Cocuzza"
     ],
     "a": [
      "Tom Hadler",
      "Rick Wickenheisser"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Nathan Labarba",
      "Umang Pathak"
     ],
     "a": [
      "Craig Butler",
      "John Pineda"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Shalin Rawal",
      "Meet Thakkar"
     ],
     "a": [
      "Eric Berlinger",
      "Tom Hadler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jesse Mynahan",
      "Jeff Axelrad"
     ],
     "a": [
      "John Fallone",
      "Josh Fink"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Luke Simon",
      "Sal Cocuzza"
     ],
     "a": [
      "Josh Rito",
      "Rick Wickenheisser"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Meet Thakkar",
      "Nathan Labarba"
     ],
     "a": [
      "Craig Butler",
      "Tom Hadler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Shalin Rawal",
      "Luke Simon"
     ],
     "a": [
      "Eric Berlinger",
      "David Tabacco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Sal Cocuzza",
      "Brandon Tsang"
     ],
     "a": [
      "Josh Fink",
      "John Fallone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Umang Pathak",
      "Jesse Mynahan"
     ],
     "a": [
      "John Pineda",
      "Josh Rito"
     ]
    }
   ],
   "subs": [
    "Luke Simon",
    "Nathan Labarba",
    "Sal Cocuzza"
   ]
  },
  {
   "result": "home",
   "week": 6,
   "home": "Bounce Tempest",
   "away": "Jersey Devil",
   "time": "2026-09-29T19:30:00",
   "complete": true,
   "homePoints": 628,
   "awayPoints": 606,
   "homeGW": 19,
   "awayGW": 13,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "David Brandolph",
      "Daniel Borgia"
     ],
     "a": [
      "Brandon Dejesus",
      "Tim Bruno"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Nicholas Brow",
      "Paul Perumaly"
     ],
     "a": [
      "Christopher Uston",
      "Jonathan Carter"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Vincent Rigoglioso",
      "Jared Rapoport"
     ],
     "a": [
      "Dan Carpenter",
      "Tom Kresky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Joseph Luka",
      "Jimmy Lee"
     ],
     "a": [
      "Derek Livingston",
      "Daniel Hadley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "David Brandolph",
      "Paul Perumaly"
     ],
     "a": [
      "Christopher Uston",
      "Brandon Dejesus"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Vincent Rigoglioso",
      "Daniel Borgia"
     ],
     "a": [
      "Dan Carpenter",
      "Jonathan Carter"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jimmy Lee",
      "Jared Rapoport"
     ],
     "a": [
      "Tom Kresky",
      "Derek Livingston"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Ken Weinstein",
      "Joseph Luka"
     ],
     "a": [
      "Tim Bruno",
      "Mario Contreras"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "David Brandolph",
      "Daniel Borgia"
     ],
     "a": [
      "Brandon Dejesus",
      "Christopher Uston"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Nicholas Brow",
      "Vincent Rigoglioso"
     ],
     "a": [
      "Jonathan Carter",
      "Daniel Hadley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jared Rapoport",
      "Paul Perumaly"
     ],
     "a": [
      "Tim Bruno",
      "Tom Kresky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Joseph Luka",
      "Ken Weinstein"
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
     "as": 17,
     "h": [
      "David Brandolph",
      "Nicholas Brow"
     ],
     "a": [
      "Dan Carpenter",
      "Brandon Dejesus"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Vincent Rigoglioso",
      "Paul Perumaly"
     ],
     "a": [
      "Derek Livingston",
      "Tim Bruno"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jared Rapoport",
      "Ken Weinstein"
     ],
     "a": [
      "Tom Kresky",
      "Christopher Uston"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jimmy Lee",
      "Joseph Luka"
     ],
     "a": [
      "Daniel Hadley",
      "Mario Contreras"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "David Brandolph",
      "Paul Perumaly"
     ],
     "a": [
      "Tim Bruno",
      "Brandon Dejesus"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jared Rapoport",
      "Nicholas Brow"
     ],
     "a": [
      "Jonathan Carter",
      "Christopher Uston"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Vincent Rigoglioso",
      "Ken Weinstein"
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
     "as": 15,
     "h": [
      "Jimmy Lee",
      "Daniel Borgia"
     ],
     "a": [
      "Derek Livingston",
      "Daniel Hadley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "David Brandolph",
      "Nicholas Brow"
     ],
     "a": [
      "Christopher Uston",
      "Tim Bruno"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Jimmy Lee",
      "Daniel Borgia"
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
      "Paul Perumaly",
      "Joseph Luka"
     ],
     "a": [
      "Tom Kresky",
      "Derek Livingston"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ken Weinstein",
      "Vincent Rigoglioso"
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
     "as": 19,
     "h": [
      "Daniel Borgia",
      "Paul Perumaly"
     ],
     "a": [
      "Dan Carpenter",
      "Brandon Dejesus"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Jared Rapoport",
      "Nicholas Brow"
     ],
     "a": [
      "Tim Bruno",
      "Derek Livingston"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Jimmy Lee",
      "Ken Weinstein"
     ],
     "a": [
      "Tom Kresky",
      "Christopher Uston"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Joseph Luka",
      "Vincent Rigoglioso"
     ],
     "a": [
      "Daniel Hadley",
      "Mario Contreras"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Joseph Luka",
      "Daniel Borgia"
     ],
     "a": [
      "Mario Contreras",
      "Brandon Dejesus"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jimmy Lee",
      "David Brandolph"
     ],
     "a": [
      "Tim Bruno",
      "Christopher Uston"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Paul Perumaly",
      "Jared Rapoport"
     ],
     "a": [
      "Derek Livingston",
      "Jonathan Carter"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Nicholas Brow",
      "Ken Weinstein"
     ],
     "a": [
      "Daniel Hadley",
      "Dan Carpenter"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 6,
   "home": "Home Court",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-09-29T19:30:00",
   "complete": true,
   "homePoints": 647,
   "awayPoints": 612,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Dennis Yap",
      "Jacob Yoo"
     ],
     "a": [
      "Jun Zhi Tan",
      "George Vega Jr"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kevin Sheehan",
      "Ricky Jutkiewicz"
     ],
     "a": [
      "Akash Raju",
      "Yashraj Kurani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 28,
     "h": [
      "Bryan Mccourt",
      "Marc Kunesch"
     ],
     "a": [
      "Corey Chen",
      "Varun Kabaria"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Matthew Carrington",
      "Robert Huntley"
     ],
     "a": [
      "Prashanth Koshy",
      "Christopher Monzon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Dennis Yap",
      "Kevin Sheehan"
     ],
     "a": [
      "Jun Zhi Tan",
      "George Vega Jr"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jacob Yoo",
      "Matthew Carrington"
     ],
     "a": [
      "Akash Raju",
      "Yashraj Kurani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Bryan Mccourt",
      "Robert Huntley"
     ],
     "a": [
      "Christopher Monzon",
      "Varun Kabaria"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ricky Jutkiewicz",
      "Michael Vincent"
     ],
     "a": [
      "Corey Chen",
      "Prashanth Koshy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Marc Kunesch",
      "Robert Huntley"
     ],
     "a": [
      "George Vega Jr",
      "Christopher Monzon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Dennis Yap",
      "Bryan Mccourt"
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
      "Jacob Yoo",
      "Ricky Jutkiewicz"
     ],
     "a": [
      "Jun Zhi Tan",
      "Yashraj Kurani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Matthew Carrington",
      "Michael Gilbert"
     ],
     "a": [
      "Prashanth Koshy",
      "Varun Kabaria"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Marc Kunesch",
      "Robert Huntley"
     ],
     "a": [
      "George Vega Jr",
      "Christopher Monzon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Bryan Mccourt",
      "Michael Vincent"
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
      "Dennis Yap",
      "Kevin Sheehan"
     ],
     "a": [
      "Jun Zhi Tan",
      "Yashraj Kurani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Matthew Carrington",
      "Michael Gilbert"
     ],
     "a": [
      "Varun Kabaria",
      "Prashanth Koshy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Bryan Mccourt",
      "Kevin Sheehan"
     ],
     "a": [
      "Akash Raju",
      "Christopher Monzon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Marc Kunesch",
      "Michael Gilbert"
     ],
     "a": [
      "Yashraj Kurani",
      "Varun Kabaria"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Dennis Yap",
      "Matthew Carrington"
     ],
     "a": [
      "Jun Zhi Tan",
      "Corey Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jacob Yoo",
      "Michael Vincent"
     ],
     "a": [
      "George Vega Jr",
      "Prashanth Koshy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Bryan Mccourt",
      "Robert Huntley"
     ],
     "a": [
      "Akash Raju",
      "Christopher Monzon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Marc Kunesch",
      "Michael Vincent"
     ],
     "a": [
      "Varun Kabaria",
      "Yashraj Kurani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jacob Yoo",
      "Ricky Jutkiewicz"
     ],
     "a": [
      "Jun Zhi Tan",
      "Corey Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Kevin Sheehan",
      "Michael Gilbert"
     ],
     "a": [
      "George Vega Jr",
      "Prashanth Koshy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Dennis Yap",
      "Michael Gilbert"
     ],
     "a": [
      "Jun Zhi Tan",
      "Christopher Monzon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Matthew Carrington",
      "Michael Vincent"
     ],
     "a": [
      "Yashraj Kurani",
      "Corey Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jacob Yoo",
      "Kevin Sheehan"
     ],
     "a": [
      "Prashanth Koshy",
      "Akash Raju"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Marc Kunesch",
      "Ricky Jutkiewicz"
     ],
     "a": [
      "George Vega Jr",
      "Varun Kabaria"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kevin Sheehan",
      "Robert Huntley"
     ],
     "a": [
      "George Vega Jr",
      "Yashraj Kurani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Dennis Yap",
      "Jacob Yoo"
     ],
     "a": [
      "Jun Zhi Tan",
      "Christopher Monzon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Bryan Mccourt",
      "Ricky Jutkiewicz"
     ],
     "a": [
      "Akash Raju",
      "Prashanth Koshy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Matthew Carrington",
      "Michael Vincent"
     ],
     "a": [
      "Corey Chen",
      "Varun Kabaria"
     ]
    }
   ],
   "subs": [
    "Varun Kabaria",
    "Christopher Monzon"
   ]
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
   "home": "Bounce Malvern",
   "away": "Premiere",
   "time": "2026-10-13T19:30:00",
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
  "Chris Cheng": "0c6bb34d-2f84-4d14-b3c7-378346532a11",
  "Steve Peck": "17c1d95a-2f52-4329-a52a-a991d1fc3335",
  "Jacob Alpert": "1cd5949a-4196-4e3a-a611-7188d34f4708",
  "Chris Shung": "2253df3c-7a50-4a9a-b197-2f80d64b089f",
  "Yiqun (Nina) Chen": "39da74b5-60a5-49cf-ae21-80b24602c3f4",
  "Justin Umana": "5eba9352-3bf9-4927-831e-52eaa3fb65a7",
  "Xhulio Kola": "765b48a2-1800-4796-9b6e-39f78b3dfe8c",
  "Craig Wu": "8667ff30-fa9e-4078-a6a0-63fcb68c8425",
  "Steven Santiago": "add792d2-e174-42b1-8bf8-bc9e2c2aa354",
  "Sean Liotine": "b7a5d158-2b7c-4fdc-83ab-aea797095631",
  "Zane Pagotto": "bf789141-926d-44b1-83c9-d5e5853589cb",
  "Rahul Desai": "ccf688a3-76c8-4dfe-8fd0-19dfb8f0ccd9",
  "Jason Ilkowitz": "dcd4414c-5981-4a70-a4dc-fd943d6d5e17",
  "Chris Gander": "ebc6c2b2-f16d-478f-90fb-886d4e67f0aa",
  "Andrew Liou": "fd14ada2-5855-4bb3-a8cd-d68aba23ba95"
 },
 "availableSubs": [
  {
   "name": "Luke Simon",
   "playerId": "0069c456-f712-435e-abd7-461018159661",
   "gender": "Male",
   "team": "Montville",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Matthew Rafaniello",
   "playerId": "021fbd88-6b98-47eb-aa92-96ed959d8a4b",
   "gender": "Male",
   "team": "Pickleball HQ",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Chuang Li",
   "playerId": "0534f11f-c60b-49bf-8407-3d2ce0f1b7a0",
   "gender": "Male",
   "team": "Bounce Tempest",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Jarred Goeckeler",
   "playerId": "084f4667-3553-4f23-b4c7-62d6c8afb42a",
   "gender": "Male",
   "team": "Jersey Devil",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Alex Kustas",
   "playerId": "08b7041c-a90b-47ba-802a-5f71e6b98999",
   "gender": "Male",
   "team": "Jersey Devil",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Alexander King",
   "playerId": "08f3645c-2c99-4ed0-9b8b-62b9be1a97a8",
   "gender": "Male",
   "team": "Allstar Pickler",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Nathan Labarba",
   "playerId": "09a7d6c3-7bc5-4760-97a7-71f06a1197a1",
   "gender": "Male",
   "team": "Montville",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Chris Cheng",
   "playerId": "0c6bb34d-2f84-4d14-b3c7-378346532a11",
   "gender": "Male",
   "team": "Allstar Pickler",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Sujoy Gayen",
   "playerId": "159ef92f-0a83-4619-b65d-3ba60a2ba992",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Raymond Romulo",
   "playerId": "15b15e13-3415-47e0-aa4f-cba485205b89",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Todd Mitchell",
   "playerId": "164bf044-d118-4bee-8bd6-d0bad38b79ea",
   "gender": "Male",
   "team": "Montville",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Steve Peck",
   "playerId": "17c1d95a-2f52-4329-a52a-a991d1fc3335",
   "gender": "Male",
   "team": "Home Court",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Steve Roth",
   "playerId": "183983b9-993f-471e-ac3d-224dcee6d80f",
   "gender": "Male",
   "team": "Allstar Pickler",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Malay Kaity",
   "playerId": "199ae8e1-22b4-4d8d-a41d-29cb984a3b33",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Jacob Alpert",
   "playerId": "1cd5949a-4196-4e3a-a611-7188d34f4708",
   "gender": "Male",
   "team": "Jersey Devil",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Chris Shung",
   "playerId": "2253df3c-7a50-4a9a-b197-2f80d64b089f",
   "gender": "Male",
   "team": "PickleRage Union County",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Michael Mazzola",
   "playerId": "2d37c246-0ab5-45ca-bb7b-c869e24452b5",
   "gender": "Male",
   "team": "Premiere",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Jim Boy Baring",
   "playerId": "39c75937-8a66-4688-85f8-6c547400e441",
   "gender": "Male",
   "team": "Premiere",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Yiqun (Nina) Chen",
   "playerId": "39da74b5-60a5-49cf-ae21-80b24602c3f4",
   "gender": "Female",
   "team": "Dill Dinkers Newport",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Andrew Lin",
   "playerId": "3bdfa83e-2025-4441-b347-fade413a4179",
   "gender": "Male",
   "team": "Allstar Pickler",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Roberto Marcillo",
   "playerId": "4516a66f-67b3-4981-a16d-036deb8db9bc",
   "gender": "Male",
   "team": "Flemington",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Varun Kabaria",
   "playerId": "49f9e3a4-2ae2-4335-ada3-28486b1a65d4",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Vyas Maddukuri",
   "playerId": "4c208ee3-c374-413b-8941-b1ad278acfb5",
   "gender": "Male",
   "team": "Allstar Pickler",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Dion Brown",
   "playerId": "4c6d1b49-9a66-4e43-8a49-cf56c2901a3b",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Justin Umana",
   "playerId": "5eba9352-3bf9-4927-831e-52eaa3fb65a7",
   "gender": "Male",
   "team": "PickleRage Union County",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Sal Cocuzza",
   "playerId": "665c8622-ccbc-4273-9af7-fd9d8840581a",
   "gender": "Male",
   "team": "Montville",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Elliott Albanese",
   "playerId": "6af88387-5e2b-4ea7-b732-22885e4931a8",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "John Zhong",
   "playerId": "6bfd212d-c7b4-4eff-ae3c-5e9424080282",
   "gender": "Male",
   "team": "Allstar Pickler",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Abhishekh Mehra",
   "playerId": "6e92db16-8465-411e-bc3f-935badc74f47",
   "gender": "Male",
   "team": "Pickle House",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Xhulio Kola",
   "playerId": "765b48a2-1800-4796-9b6e-39f78b3dfe8c",
   "gender": "Male",
   "team": "Montville",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Elias Eid",
   "playerId": "77f18b1c-db78-4d0e-b81d-6d1efde8bb08",
   "gender": "Male",
   "team": "Allstar Pickler",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "David Brond",
   "playerId": "790dc637-f23d-4942-af8a-bfd20b474282",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Bren Calpin",
   "playerId": "7f4b7644-6117-4eee-b3d8-a4955507923e",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Craig Wu",
   "playerId": "8667ff30-fa9e-4078-a6a0-63fcb68c8425",
   "gender": "Male",
   "team": "Home Court",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Simon Darlington",
   "playerId": "9ae1e374-e878-450b-9552-e80472590d9e",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Marc Padre",
   "playerId": "a131a707-f20e-4838-9dcf-7cecb40c2705",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Andy Suphaphol",
   "playerId": "a58f9ffa-60cc-46b5-ba59-0c78a43ac986",
   "gender": "Male",
   "team": "Pickleball HQ",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Jake Cohen",
   "playerId": "a6be8670-4787-48dd-83ff-b2157062cb84",
   "gender": "Male",
   "team": "Bounce Tempest",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Shyler Smith",
   "playerId": "aabb2c71-bc56-468e-91b9-d431d6f2d26b",
   "gender": "Male",
   "team": "Pickle House",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Yash Mehta",
   "playerId": "adc25ed0-4bc3-47da-9509-4caeb8f90185",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Steven Santiago",
   "playerId": "add792d2-e174-42b1-8bf8-bc9e2c2aa354",
   "gender": "Male",
   "team": "Premiere",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Christopher Monzon",
   "playerId": "b205e6a7-d62d-42bf-b2d5-e7e5d0c109ec",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Edward Fu",
   "playerId": "b243c9db-ff2c-4db7-bcfd-27f3b0e7b6f1",
   "gender": "Male",
   "team": "PickleRage Union County",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "John Sallo",
   "playerId": "b379a353-c35e-4a6e-8ea4-ea21ebcdafa0",
   "gender": "Male",
   "team": "Allstar Pickler",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Nacio Marshall",
   "playerId": "b4af1ed9-5d7e-4212-a206-3c9a97b6958a",
   "gender": "Male",
   "team": "Premiere",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Sean Liotine",
   "playerId": "b7a5d158-2b7c-4fdc-83ab-aea797095631",
   "gender": "Male",
   "team": "Premiere",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Julian Edgren",
   "playerId": "b979a109-08fd-4041-8da4-e306ef13330a",
   "gender": "Male",
   "team": "Flemington",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Zane Pagotto",
   "playerId": "bf789141-926d-44b1-83c9-d5e5853589cb",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Xilin Zhao",
   "playerId": "bfecc55a-a909-44da-8292-6b59b37a6043",
   "gender": "Male",
   "team": "Allstar Pickler",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Peter David",
   "playerId": "c5e40aa9-efbf-4937-b44d-1b8f06693ba4",
   "gender": "Male",
   "team": "Jersey Devil",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Abdullah Osman",
   "playerId": "c8f3b265-67a8-412c-84f5-aee92a913aac",
   "gender": "Male",
   "team": "Montville",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Jieping Wang",
   "playerId": "c9088878-9755-4e32-abed-4a4e5a42f9a8",
   "gender": "Male",
   "team": "Allstar Pickler",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Rahul Desai",
   "playerId": "ccf688a3-76c8-4dfe-8fd0-19dfb8f0ccd9",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Chaitanya Sharma",
   "playerId": "d5e18b3e-0836-42c4-9774-810e048ef675",
   "gender": "Male",
   "team": "Allstar Pickler",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Steve Lerner",
   "playerId": "d634d992-c9d8-4e31-acb7-45b1161eee19",
   "gender": "Male",
   "team": "PickleRage Union County",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Yufan Chen",
   "playerId": "da53bfc3-c4c3-4746-b5b6-4f4af796cf0f",
   "gender": "Male",
   "team": "Bounce Tempest",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Jason Ilkowitz",
   "playerId": "dcd4414c-5981-4a70-a4dc-fd943d6d5e17",
   "gender": "Male",
   "team": "Premiere",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Wen Jin",
   "playerId": "dd2384fe-4bb2-4085-a917-6e7989beb8a7",
   "gender": "Male",
   "team": "Allstar Pickler",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Mark Bernstein",
   "playerId": "ddd8803a-e678-4f57-b6e8-68f011cd7108",
   "gender": "Male",
   "team": "PickleRage Union County",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Kyle Kelly",
   "playerId": "e0faca04-4875-4806-b0a3-4830f4dcd52e",
   "gender": "Male",
   "team": "Bounce Tempest",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Nitin Chawke",
   "playerId": "e1859a0e-b6a3-451b-a14e-f4d978fc520d",
   "gender": "Male",
   "team": "Dill Dinkers Newport",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Bing Zhu",
   "playerId": "e6f1ad88-f91d-41ca-9771-833b1f38eff3",
   "gender": "Male",
   "team": "Allstar Pickler",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Chris Gander",
   "playerId": "ebc6c2b2-f16d-478f-90fb-886d4e67f0aa",
   "gender": "Male",
   "team": "Allstar Pickler",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Paul Rappoport",
   "playerId": "f2258c77-73cb-49de-991e-ed0cc4f3f9e2",
   "gender": "Male",
   "team": "Allstar Pickler",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Andrew Liou",
   "playerId": "fd14ada2-5855-4bb3-a8cd-d68aba23ba95",
   "gender": "Male",
   "team": "PickleRage Union County",
   "isCaptain": false,
   "outsideSub": true
  }
 ],
 "meta": {
  "matchesPlayed": 56,
  "provisionalMatches": 1,
  "weeks": "1-6",
  "totalPlayers": 282,
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
    "label": "5a",
    "seq": 4
   },
   {
    "week": 5,
    "label": "5b",
    "seq": 5
   },
   {
    "week": 6,
    "label": "6",
    "seq": 6
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
    "East": [
     "Dill Dinkers Freehold",
     "Monroe",
     "Pickle House",
     "Pickleball HQ",
     "Pickleball Kingdom Hamilton",
     "Premiere"
    ],
    "South": [
     "APC Garden State",
     "Bounce Malvern",
     "Bounce Tempest",
     "Dill Dinkers Newport",
     "Jersey Devil",
     "Picklr Newtown"
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
  DATA.meta.asOf = "2026-09-30T11:40:24.965Z";
  window.DATA = DATA;
  window.CPL_DATASETS = window.CPL_DATASETS || {};
  window.CPL_DATASETS["c118b8e9"] = DATA;
})();
