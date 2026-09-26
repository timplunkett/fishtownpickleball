(function () {
  const DATA = {
 "players": [
  {
   "name": "Jingwei Wu",
   "gender": "Male",
   "team": "Bounce Malvern Black",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 14,
   "losses": 0,
   "pointsWon": 294,
   "totalPointsAgainst": 180,
   "mixedWins": 7,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 114,
   "ppg": 21,
   "leagueRank": 1,
   "rating": 3.7,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -1.1,
   "playerId": "58e052c4-6ab5-46a7-8e6c-6c7a465262e5"
  },
  {
   "name": "Pam Boyd",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 16,
   "wins": 16,
   "losses": 0,
   "pointsWon": 336,
   "totalPointsAgainst": 231,
   "mixedWins": 8,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 105,
   "ppg": 21,
   "leagueRank": 8,
   "rating": 2.1,
   "ratingGames": 16,
   "confidence": 69,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -1.2,
   "playerId": "04aefa29-20e3-41b7-a680-19d13f9d4289"
  },
  {
   "name": "Jay Rohatgi",
   "gender": "Male",
   "team": "Pickle Place",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 19,
   "losses": 0,
   "pointsWon": 399,
   "totalPointsAgainst": 300,
   "mixedWins": 9,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 99,
   "ppg": 21,
   "leagueRank": 6,
   "rating": 2.6,
   "ratingGames": 19,
   "confidence": 77,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.8,
   "playerId": "f5831f41-366b-4666-b780-448fc7971ad7"
  },
  {
   "name": "Gary Sidhu",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 7,
   "losses": 0,
   "pointsWon": 147,
   "totalPointsAgainst": 67,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 80,
   "ppg": 21,
   "leagueRank": 9,
   "rating": 4.1,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": -1.7,
   "playerId": "fa28fec9-9eff-4831-912d-4180f8760eeb"
  },
  {
   "name": "Rebecca Lederman",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 14,
   "wins": 14,
   "losses": 0,
   "pointsWon": 294,
   "totalPointsAgainst": 215,
   "mixedWins": 6,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 79,
   "ppg": 21,
   "leagueRank": 3,
   "rating": 2.6,
   "ratingGames": 14,
   "confidence": 69,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": -0.3,
   "playerId": "cb324481-3d73-47c2-9cc0-a1e1650dd87f"
  },
  {
   "name": "Keith Goldberg",
   "gender": "Male",
   "team": "Bounce Malvern Black",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 7,
   "losses": 0,
   "pointsWon": 147,
   "totalPointsAgainst": 85,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 62,
   "ppg": 21,
   "leagueRank": 25,
   "rating": 2.7,
   "ratingGames": 7,
   "confidence": 48,
   "strengthOfPartners": 2.2,
   "strengthOfOpponents": -1.2,
   "playerId": "37a0fa2c-df0b-4d92-900b-a9f20f441ad8"
  },
  {
   "name": "Marc Pellicane",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 8,
   "losses": 0,
   "pointsWon": 168,
   "totalPointsAgainst": 106,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 62,
   "ppg": 21,
   "leagueRank": 4,
   "rating": 2.5,
   "ratingGames": 8,
   "confidence": 60,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": -1.1,
   "playerId": "1c13f01f-aeb7-45db-9faf-a6567d22bb81"
  },
  {
   "name": "Karen Moliver",
   "gender": "Female",
   "team": "Pickle Place",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 7,
   "losses": 0,
   "pointsWon": 147,
   "totalPointsAgainst": 94,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 53,
   "ppg": 21,
   "leagueRank": 12,
   "rating": 2.2,
   "ratingGames": 7,
   "confidence": 51,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -1.9,
   "playerId": "6412a5fc-5f1f-4dcf-a1b9-c1838eeabec9"
  },
  {
   "name": "Gina Pultorak",
   "gender": "Female",
   "team": "Pickle Place",
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
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 48,
   "ppg": 21,
   "leagueRank": 17,
   "rating": 1.2,
   "ratingGames": 7,
   "confidence": 57,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -2.1,
   "playerId": "43326f18-7e59-4bc6-8008-7ec14cbcb18a"
  },
  {
   "name": "Chaoxia Cheng",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 80,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 46,
   "ppg": 21,
   "leagueRank": 10,
   "rating": 3.9,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -0.8,
   "playerId": "0b80a91d-626d-40b7-9cd9-e9ea96ec7e59"
  },
  {
   "name": "Bud Heller",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 85,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 41,
   "ppg": 21,
   "leagueRank": 2,
   "rating": 2.9,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.5,
   "playerId": "9282b1b2-6551-481c-b9b8-2a246a49a621"
  },
  {
   "name": "Simon Perry",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 7,
   "losses": 0,
   "pointsWon": 147,
   "totalPointsAgainst": 115,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 32,
   "ppg": 21,
   "leagueRank": 14,
   "rating": 1.8,
   "ratingGames": 7,
   "confidence": 55,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.8,
   "playerId": "03c7bdf6-926c-4d90-9416-117cd3478b50"
  },
  {
   "name": "Marc Harden",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 24,
   "wins": 23,
   "losses": 1,
   "pointsWon": 502,
   "totalPointsAgainst": 322,
   "mixedWins": 11,
   "mixedLosses": 1,
   "genderWins": 12,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 95.8,
   "diff": 180,
   "ppg": 20.9,
   "leagueRank": 5,
   "rating": 3.9,
   "ratingGames": 24,
   "confidence": 79,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": -0.7,
   "playerId": "55194d2f-f537-4e19-b901-86c559f25ef2"
  },
  {
   "name": "Carol Mastroianni",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 15,
   "wins": 14,
   "losses": 1,
   "pointsWon": 308,
   "totalPointsAgainst": 253,
   "mixedWins": 6,
   "mixedLosses": 1,
   "genderWins": 8,
   "genderLosses": 0,
   "clutchWins": 6,
   "clutchLosses": 0,
   "winPct": 93.3,
   "diff": 55,
   "ppg": 20.5,
   "leagueRank": 13,
   "rating": 0.8,
   "ratingGames": 15,
   "confidence": 72,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -1.1,
   "playerId": "7f851011-9322-43f9-aff2-754565a615c7"
  },
  {
   "name": "Darren Saks",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 13,
   "losses": 1,
   "pointsWon": 291,
   "totalPointsAgainst": 185,
   "mixedWins": 6,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 92.9,
   "diff": 106,
   "ppg": 20.8,
   "leagueRank": 7,
   "rating": 4.7,
   "ratingGames": 14,
   "confidence": 70,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.6,
   "playerId": "9bf7b8ab-4dfa-442b-be12-77580a5ea1dc"
  },
  {
   "name": "Karan Pescatore",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 12,
   "losses": 1,
   "pointsWon": 267,
   "totalPointsAgainst": 200,
   "mixedWins": 6,
   "mixedLosses": 1,
   "genderWins": 6,
   "genderLosses": 0,
   "clutchWins": 4,
   "clutchLosses": 0,
   "winPct": 92.3,
   "diff": 67,
   "ppg": 20.5,
   "leagueRank": 11,
   "rating": 2.6,
   "ratingGames": 13,
   "confidence": 68,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -0.2,
   "playerId": "2cb4b2dd-d14b-4bab-a8be-ef4b14845711"
  },
  {
   "name": "Carly Pfeffer",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 11,
   "wins": 10,
   "losses": 1,
   "pointsWon": 224,
   "totalPointsAgainst": 174,
   "mixedWins": 7,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 90.9,
   "diff": 50,
   "ppg": 20.4,
   "leagueRank": 15,
   "rating": 1.3,
   "ratingGames": 11,
   "confidence": 65,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": -0.5,
   "playerId": "387e74d4-66ee-4a52-a4ac-aae3dbe1d21b"
  },
  {
   "name": "Jonathan Brand",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 14,
   "losses": 2,
   "pointsWon": 332,
   "totalPointsAgainst": 264,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 8,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 87.5,
   "diff": 68,
   "ppg": 20.8,
   "leagueRank": 16,
   "rating": 2.3,
   "ratingGames": 16,
   "confidence": 72,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": 0.2,
   "playerId": "3d1b28fd-25f4-4145-bccd-6b25ab627ffe"
  },
  {
   "name": "James Shaw",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 166,
   "totalPointsAgainst": 130,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 87.5,
   "diff": 36,
   "ppg": 20.8,
   "leagueRank": 20,
   "rating": 0.6,
   "ratingGames": 8,
   "confidence": 60,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": -0.9,
   "playerId": "439e30a7-6097-4e20-8a7b-25c57dd5b5d0"
  },
  {
   "name": "Vicki Main",
   "gender": "Female",
   "team": "Bounce Malvern Black",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 19,
   "losses": 3,
   "pointsWon": 454,
   "totalPointsAgainst": 341,
   "mixedWins": 10,
   "mixedLosses": 1,
   "genderWins": 9,
   "genderLosses": 2,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 86.4,
   "diff": 113,
   "ppg": 20.6,
   "leagueRank": 18,
   "rating": 1.9,
   "ratingGames": 22,
   "confidence": 79,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.8,
   "playerId": "89bdcff6-2fba-4bde-b831-872bf9ce7843"
  },
  {
   "name": "Alex Lee",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 12,
   "losses": 2,
   "pointsWon": 284,
   "totalPointsAgainst": 214,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 7,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 85.7,
   "diff": 70,
   "ppg": 20.3,
   "leagueRank": 19,
   "rating": 2.7,
   "ratingGames": 14,
   "confidence": 69,
   "strengthOfPartners": 2,
   "strengthOfOpponents": 0.3,
   "playerId": "22e2201d-16d7-4474-847b-5f4f0cef44e6"
  },
  {
   "name": "Eric Luque",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 144,
   "totalPointsAgainst": 115,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 85.7,
   "diff": 29,
   "ppg": 20.6,
   "leagueRank": 31,
   "rating": 2,
   "ratingGames": 7,
   "confidence": 58,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.4,
   "playerId": "b3c28078-ab31-4002-9e09-5fa3f627d8c1"
  },
  {
   "name": "Alicia Maguire",
   "gender": "Female",
   "team": "Pickle Place",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 145,
   "totalPointsAgainst": 125,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 85.7,
   "diff": 20,
   "ppg": 20.7,
   "leagueRank": 40,
   "rating": 1.6,
   "ratingGames": 7,
   "confidence": 58,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.3,
   "playerId": "36927aca-827a-4408-ab82-9dc0d06e2c8d"
  },
  {
   "name": "Shauna Muller",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 124,
   "totalPointsAgainst": 99,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 83.3,
   "diff": 25,
   "ppg": 20.7,
   "leagueRank": 21,
   "rating": 0.7,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": 2.8,
   "strengthOfOpponents": -0.1,
   "playerId": "45efdf62-1562-4402-afee-8f0e1e3e81c1"
  },
  {
   "name": "Brian Gonzalez",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 118,
   "totalPointsAgainst": 104,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 14,
   "ppg": 19.7,
   "leagueRank": 38,
   "rating": -1.2,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": -1.3,
   "playerId": "ecc02ab8-5e9c-4950-89b7-be3f397683c3"
  },
  {
   "name": "Susan Ackley",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 19,
   "losses": 4,
   "pointsWon": 471,
   "totalPointsAgainst": 383,
   "mixedWins": 9,
   "mixedLosses": 2,
   "genderWins": 10,
   "genderLosses": 2,
   "clutchWins": 6,
   "clutchLosses": 2,
   "winPct": 82.6,
   "diff": 88,
   "ppg": 20.5,
   "leagueRank": 22,
   "rating": 1.7,
   "ratingGames": 23,
   "confidence": 78,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.8,
   "playerId": "07a0e948-6308-4920-a6a8-1d5945552ecb"
  },
  {
   "name": "Patricia Boyle",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 13,
   "losses": 3,
   "pointsWon": 322,
   "totalPointsAgainst": 258,
   "mixedWins": 7,
   "mixedLosses": 1,
   "genderWins": 6,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 81.3,
   "diff": 64,
   "ppg": 20.1,
   "leagueRank": 26,
   "rating": 1.3,
   "ratingGames": 16,
   "confidence": 71,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": -0.5,
   "playerId": "9fca325b-c7aa-493e-bd24-a4b782073699"
  },
  {
   "name": "Thomas Ross",
   "gender": "Male",
   "team": "Pickle Place",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 13,
   "losses": 3,
   "pointsWon": 322,
   "totalPointsAgainst": 269,
   "mixedWins": 8,
   "mixedLosses": 1,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 5,
   "clutchLosses": 0,
   "winPct": 81.3,
   "diff": 53,
   "ppg": 20.1,
   "leagueRank": 29,
   "rating": 0.6,
   "ratingGames": 16,
   "confidence": 74,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -1.2,
   "playerId": "eab86a29-43ef-4b31-ba94-928f57f56c9c"
  },
  {
   "name": "Jonathan Goldner",
   "gender": "Male",
   "team": "Pickle Place",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 101,
   "totalPointsAgainst": 88,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 80,
   "diff": 13,
   "ppg": 20.2,
   "leagueRank": 60,
   "rating": 1,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.2,
   "playerId": "5142be9e-adb4-4f40-8632-1f6daa6d824b"
  },
  {
   "name": "Sandy Alkins",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 19,
   "losses": 5,
   "pointsWon": 485,
   "totalPointsAgainst": 378,
   "mixedWins": 11,
   "mixedLosses": 1,
   "genderWins": 8,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 79.2,
   "diff": 107,
   "ppg": 20.2,
   "leagueRank": 28,
   "rating": 1.1,
   "ratingGames": 24,
   "confidence": 80,
   "strengthOfPartners": 2.2,
   "strengthOfOpponents": -0.5,
   "playerId": "9c29c52b-9d2a-4a5f-b967-7bafd018446b"
  },
  {
   "name": "Tom Zentmeyer",
   "gender": "Male",
   "team": "Pickle Place",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 15,
   "losses": 4,
   "pointsWon": 385,
   "totalPointsAgainst": 299,
   "mixedWins": 7,
   "mixedLosses": 2,
   "genderWins": 8,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 78.9,
   "diff": 86,
   "ppg": 20.3,
   "leagueRank": 27,
   "rating": 1.6,
   "ratingGames": 19,
   "confidence": 76,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.8,
   "playerId": "c16d16f0-3cc1-4c9d-8bfb-98615ffeaacd"
  },
  {
   "name": "Kelly Hanson Word",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 11,
   "losses": 3,
   "pointsWon": 282,
   "totalPointsAgainst": 214,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 8,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 78.6,
   "diff": 68,
   "ppg": 20.1,
   "leagueRank": 23,
   "rating": 3.3,
   "ratingGames": 14,
   "confidence": 67,
   "strengthOfPartners": 2.1,
   "strengthOfOpponents": 0.8,
   "playerId": "ecfbb129-ba7d-4b52-92b9-869fa7487248"
  },
  {
   "name": "Daniel Chernin",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 11,
   "losses": 3,
   "pointsWon": 287,
   "totalPointsAgainst": 231,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 78.6,
   "diff": 56,
   "ppg": 20.5,
   "leagueRank": 24,
   "rating": 2.4,
   "ratingGames": 14,
   "confidence": 68,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.3,
   "playerId": "9fc26554-f672-4501-9d2e-a8553fd79eaf"
  },
  {
   "name": "Jane Meng",
   "gender": "Female",
   "team": "Pickle Place",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 11,
   "losses": 3,
   "pointsWon": 288,
   "totalPointsAgainst": 235,
   "mixedWins": 7,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 5,
   "clutchLosses": 3,
   "winPct": 78.6,
   "diff": 53,
   "ppg": 20.6,
   "leagueRank": 30,
   "rating": 0.6,
   "ratingGames": 14,
   "confidence": 72,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -1.3,
   "playerId": "c365e1dd-21cf-4f38-a802-1aaaf6d0914b"
  },
  {
   "name": "Emil Pescatore",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 10,
   "losses": 3,
   "pointsWon": 256,
   "totalPointsAgainst": 230,
   "mixedWins": 5,
   "mixedLosses": 1,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 0,
   "winPct": 76.9,
   "diff": 26,
   "ppg": 19.7,
   "leagueRank": 42,
   "rating": -0.6,
   "ratingGames": 13,
   "confidence": 69,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": -0.5,
   "playerId": "1c9b7abf-dae6-4e0d-a31d-485e99a01fec"
  },
  {
   "name": "Robert Block",
   "gender": "Male",
   "team": "Pickle Place",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 13,
   "wins": 10,
   "losses": 3,
   "pointsWon": 255,
   "totalPointsAgainst": 234,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 1,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 76.9,
   "diff": 21,
   "ppg": 19.6,
   "leagueRank": 48,
   "rating": -0.6,
   "ratingGames": 13,
   "confidence": 71,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -1.2,
   "playerId": "23d1d322-f31d-46b3-bf95-d86faab58b06"
  },
  {
   "name": "Stephanie Woomer",
   "gender": "Female",
   "team": "Bounce Malvern Black",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 22,
   "losses": 7,
   "pointsWon": 581,
   "totalPointsAgainst": 465,
   "mixedWins": 12,
   "mixedLosses": 3,
   "genderWins": 10,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 75.9,
   "diff": 116,
   "ppg": 20,
   "leagueRank": 33,
   "rating": 2,
   "ratingGames": 29,
   "confidence": 83,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.4,
   "playerId": "e05f57f5-c898-404e-b86f-c2460cc23b06"
  },
  {
   "name": "Tera Baccile",
   "gender": "Female",
   "team": "Bounce Malvern Black",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 22,
   "losses": 7,
   "pointsWon": 570,
   "totalPointsAgainst": 484,
   "mixedWins": 10,
   "mixedLosses": 5,
   "genderWins": 12,
   "genderLosses": 2,
   "clutchWins": 7,
   "clutchLosses": 2,
   "winPct": 75.9,
   "diff": 86,
   "ppg": 19.7,
   "leagueRank": 41,
   "rating": 1.2,
   "ratingGames": 29,
   "confidence": 83,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.2,
   "playerId": "d5aa92c7-71df-47c7-84fb-6710e1ed81e2"
  },
  {
   "name": "Robert Finley",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 18,
   "losses": 6,
   "pointsWon": 483,
   "totalPointsAgainst": 393,
   "mixedWins": 9,
   "mixedLosses": 3,
   "genderWins": 9,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 75,
   "diff": 90,
   "ppg": 20.1,
   "leagueRank": 37,
   "rating": 0.7,
   "ratingGames": 24,
   "confidence": 80,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": -0.5,
   "playerId": "0d70122a-9002-461f-8600-a9afed2e8c3f"
  },
  {
   "name": "Michael Dieterle",
   "gender": "Male",
   "team": "Bounce Malvern Black",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 15,
   "losses": 5,
   "pointsWon": 408,
   "totalPointsAgainst": 337,
   "mixedWins": 8,
   "mixedLosses": 2,
   "genderWins": 7,
   "genderLosses": 3,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 75,
   "diff": 71,
   "ppg": 20.4,
   "leagueRank": 36,
   "rating": 0.8,
   "ratingGames": 20,
   "confidence": 78,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.8,
   "playerId": "4259501c-f1e3-4859-acd0-c25f342a1b92"
  },
  {
   "name": "Stacey Frank",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 12,
   "losses": 4,
   "pointsWon": 324,
   "totalPointsAgainst": 264,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 7,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 75,
   "diff": 60,
   "ppg": 20.3,
   "leagueRank": 32,
   "rating": 2.1,
   "ratingGames": 16,
   "confidence": 73,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0.2,
   "playerId": "768c88bd-683d-4204-8124-a589c8028b6e"
  },
  {
   "name": "Christopher Boyle",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 6,
   "losses": 2,
   "pointsWon": 161,
   "totalPointsAgainst": 118,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 75,
   "diff": 43,
   "ppg": 20.1,
   "leagueRank": 35,
   "rating": 0.6,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": -1.4,
   "playerId": "84729bcd-2c46-4a3b-b0a3-13a7e7d46dfb"
  },
  {
   "name": "Amy Chrebet",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 10,
   "losses": 4,
   "pointsWon": 276,
   "totalPointsAgainst": 241,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 71.4,
   "diff": 35,
   "ppg": 19.7,
   "leagueRank": 45,
   "rating": 0,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.8,
   "playerId": "6f511e98-567a-4b33-8831-ed123f01f952"
  },
  {
   "name": "Harriet Levin",
   "gender": "Female",
   "team": "Bounce Malvern Black",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 139,
   "totalPointsAgainst": 136,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 71.4,
   "diff": 3,
   "ppg": 19.9,
   "leagueRank": 79,
   "rating": 1.4,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 1.6,
   "playerId": "aeff8297-a479-4b3b-9a49-72c410ac8e26"
  },
  {
   "name": "Kate Siedell",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 17,
   "losses": 7,
   "pointsWon": 485,
   "totalPointsAgainst": 357,
   "mixedWins": 8,
   "mixedLosses": 4,
   "genderWins": 9,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 5,
   "winPct": 70.8,
   "diff": 128,
   "ppg": 20.2,
   "leagueRank": 34,
   "rating": 2.2,
   "ratingGames": 24,
   "confidence": 79,
   "strengthOfPartners": 2.2,
   "strengthOfOpponents": -0.3,
   "playerId": "8decf039-f1e5-4182-b3cf-6756789ae87a"
  },
  {
   "name": "Jim Darcangelo",
   "gender": "Male",
   "team": "Bounce Malvern Black",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 19,
   "losses": 8,
   "pointsWon": 532,
   "totalPointsAgainst": 464,
   "mixedWins": 11,
   "mixedLosses": 3,
   "genderWins": 8,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 70.4,
   "diff": 68,
   "ppg": 19.7,
   "leagueRank": 47,
   "rating": 1.3,
   "ratingGames": 27,
   "confidence": 83,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.1,
   "playerId": "0530512b-466d-4ff7-9e89-7961b4a63110"
  },
  {
   "name": "Bill Brandt",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 9,
   "losses": 4,
   "pointsWon": 263,
   "totalPointsAgainst": 245,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 69.2,
   "diff": 18,
   "ppg": 20.2,
   "leagueRank": 50,
   "rating": 0.3,
   "ratingGames": 13,
   "confidence": 67,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": -0.8,
   "playerId": "dc530014-0e3b-4485-b265-8555bafe6e19"
  },
  {
   "name": "Janine Forrest",
   "gender": "Female",
   "team": "Pickle Place",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 16,
   "wins": 11,
   "losses": 5,
   "pointsWon": 310,
   "totalPointsAgainst": 275,
   "mixedWins": 6,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 68.8,
   "diff": 35,
   "ppg": 19.4,
   "leagueRank": 52,
   "rating": 0.5,
   "ratingGames": 16,
   "confidence": 74,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.5,
   "playerId": "dd30bbd2-24c2-431a-8b21-2de326c75ab3"
  },
  {
   "name": "Lei Dong",
   "gender": "Male",
   "team": "Stelton Sports",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 13,
   "losses": 6,
   "pointsWon": 375,
   "totalPointsAgainst": 337,
   "mixedWins": 8,
   "mixedLosses": 4,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 68.4,
   "diff": 38,
   "ppg": 19.7,
   "leagueRank": 44,
   "rating": 0.9,
   "ratingGames": 19,
   "confidence": 72,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.4,
   "playerId": "f9ac936e-7371-4ea9-8a97-7969635046fd"
  },
  {
   "name": "Katherine Maruyama",
   "gender": "Female",
   "team": "Bounce Malvern Black",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 21,
   "wins": 14,
   "losses": 7,
   "pointsWon": 417,
   "totalPointsAgainst": 346,
   "mixedWins": 7,
   "mixedLosses": 3,
   "genderWins": 7,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 66.7,
   "diff": 71,
   "ppg": 19.9,
   "leagueRank": 43,
   "rating": 2.1,
   "ratingGames": 21,
   "confidence": 78,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.2,
   "playerId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a"
  },
  {
   "name": "Ryan Sherry",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 122,
   "totalPointsAgainst": 98,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 66.7,
   "diff": 24,
   "ppg": 20.3,
   "leagueRank": 39,
   "rating": 2.1,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0.5,
   "playerId": "6d8254ae-6e00-4704-8c1e-936733eb9b09"
  },
  {
   "name": "Guy Judkowski",
   "gender": "Male",
   "team": "Pickle Place",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 8,
   "losses": 4,
   "pointsWon": 237,
   "totalPointsAgainst": 221,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 66.7,
   "diff": 16,
   "ppg": 19.8,
   "leagueRank": 59,
   "rating": -0.7,
   "ratingGames": 12,
   "confidence": 70,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -1,
   "playerId": "aaddf7e8-7ad2-4472-a8bd-89e6d5abc78c"
  },
  {
   "name": "Scott Rubin",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 118,
   "totalPointsAgainst": 104,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 14,
   "ppg": 19.7,
   "leagueRank": 67,
   "rating": -0.4,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -1.4,
   "playerId": "c12175df-b959-4efe-95e7-e5298b783da8"
  },
  {
   "name": "John Pineda",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 115,
   "totalPointsAgainst": 103,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 12,
   "ppg": 19.2,
   "leagueRank": 69,
   "rating": 0.7,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.7,
   "playerId": "099e3831-88c1-4907-9869-f193db58b64b"
  },
  {
   "name": "Roseann Catania",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 116,
   "totalPointsAgainst": 111,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 5,
   "ppg": 19.3,
   "leagueRank": 74,
   "rating": 0.5,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": -0.6,
   "playerId": "67b0e676-9779-4bcb-8c38-86f2c84e1d73"
  },
  {
   "name": "Erika Simone",
   "gender": "Female",
   "team": "Bounce Malvern Black",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 9,
   "losses": 5,
   "pointsWon": 279,
   "totalPointsAgainst": 228,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 4,
   "winPct": 64.3,
   "diff": 51,
   "ppg": 19.9,
   "leagueRank": 51,
   "rating": -0.3,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": -1.3,
   "playerId": "04f98aa6-f69e-462c-9a13-4060a3072922"
  },
  {
   "name": "Alice Napolitano",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 14,
   "losses": 8,
   "pointsWon": 411,
   "totalPointsAgainst": 365,
   "mixedWins": 9,
   "mixedLosses": 1,
   "genderWins": 5,
   "genderLosses": 7,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 63.6,
   "diff": 46,
   "ppg": 18.7,
   "leagueRank": 55,
   "rating": 1.4,
   "ratingGames": 22,
   "confidence": 78,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.3,
   "playerId": "d56483b8-a5b8-4c1f-8437-39fcf90a5030"
  },
  {
   "name": "Shaoyi Sun",
   "gender": "Female",
   "team": "Stelton Sports",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 7,
   "losses": 4,
   "pointsWon": 223,
   "totalPointsAgainst": 194,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 63.6,
   "diff": 29,
   "ppg": 20.3,
   "leagueRank": 46,
   "rating": 1.6,
   "ratingGames": 11,
   "confidence": 65,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.4,
   "playerId": "fb20f45d-7f81-4d2a-a258-eede4cdec27b"
  },
  {
   "name": "Michael Finkelstein",
   "gender": "Male",
   "team": "Bounce Malvern Black",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 27,
   "wins": 17,
   "losses": 10,
   "pointsWon": 530,
   "totalPointsAgainst": 481,
   "mixedWins": 10,
   "mixedLosses": 5,
   "genderWins": 7,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 63,
   "diff": 49,
   "ppg": 19.6,
   "leagueRank": 58,
   "rating": -0.1,
   "ratingGames": 27,
   "confidence": 82,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -0.3,
   "playerId": "861c3f68-2c96-4a96-a75e-645020f73a5c"
  },
  {
   "name": "Brian Rowan",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 162,
   "totalPointsAgainst": 147,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 62.5,
   "diff": 15,
   "ppg": 20.3,
   "leagueRank": 49,
   "rating": 0.7,
   "ratingGames": 8,
   "confidence": 57,
   "strengthOfPartners": 2.2,
   "strengthOfOpponents": 0.7,
   "playerId": "136b6979-e0f4-4af2-9f5e-949b8d4bf423"
  },
  {
   "name": "Chanda Mccoy",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 153,
   "totalPointsAgainst": 139,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 62.5,
   "diff": 14,
   "ppg": 19.1,
   "leagueRank": 62,
   "rating": 0.5,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -0.8,
   "playerId": "30cb78cb-f962-40f9-bd02-78d336920431"
  },
  {
   "name": "Ceil Gomez",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 146,
   "totalPointsAgainst": 139,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 62.5,
   "diff": 7,
   "ppg": 18.3,
   "leagueRank": 72,
   "rating": -1.8,
   "ratingGames": 8,
   "confidence": 57,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -1.8,
   "playerId": "e1cb1b3c-8e14-423b-bf0f-5ad2dabd6a4c"
  },
  {
   "name": "Michael Dombrowiecki",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 13,
   "losses": 8,
   "pointsWon": 407,
   "totalPointsAgainst": 359,
   "mixedWins": 6,
   "mixedLosses": 4,
   "genderWins": 7,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 61.9,
   "diff": 48,
   "ppg": 19.4,
   "leagueRank": 54,
   "rating": 0.7,
   "ratingGames": 21,
   "confidence": 78,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.1,
   "playerId": "3ac34ef1-17a5-4ab6-8d17-be4bd5a0a040"
  },
  {
   "name": "John Morabito",
   "gender": "Male",
   "team": "Bounce Malvern Black",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 8,
   "losses": 5,
   "pointsWon": 254,
   "totalPointsAgainst": 232,
   "mixedWins": 6,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 61.5,
   "diff": 22,
   "ppg": 19.5,
   "leagueRank": 56,
   "rating": 1.2,
   "ratingGames": 13,
   "confidence": 68,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.4,
   "playerId": "a018e2a6-8278-4354-8802-810742e62edf"
  },
  {
   "name": "Tom Maley",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 8,
   "losses": 5,
   "pointsWon": 239,
   "totalPointsAgainst": 229,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 61.5,
   "diff": 10,
   "ppg": 18.4,
   "leagueRank": 68,
   "rating": -0.3,
   "ratingGames": 13,
   "confidence": 68,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.3,
   "playerId": "e05f8bd0-e64b-42dd-b6a0-42249573b3f4"
  },
  {
   "name": "Christopher Krecke",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 101,
   "totalPointsAgainst": 93,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 60,
   "diff": 8,
   "ppg": 20.2,
   "leagueRank": 57,
   "rating": 0.4,
   "ratingGames": 5,
   "confidence": 49,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": 0.5,
   "playerId": "788eac4e-f5a9-42f5-a1f2-69fc2f299678"
  },
  {
   "name": "Alfonse Calato",
   "gender": "Male",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 101,
   "totalPointsAgainst": 99,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 60,
   "diff": 2,
   "ppg": 20.2,
   "leagueRank": 53,
   "rating": 0.3,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -0.2,
   "playerId": "ca6af12a-17d5-44b7-a137-49789e9eac2c"
  },
  {
   "name": "Sarah Nazario",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 13,
   "losses": 9,
   "pointsWon": 421,
   "totalPointsAgainst": 389,
   "mixedWins": 6,
   "mixedLosses": 5,
   "genderWins": 7,
   "genderLosses": 4,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 59.1,
   "diff": 32,
   "ppg": 19.1,
   "leagueRank": 63,
   "rating": 0.8,
   "ratingGames": 22,
   "confidence": 77,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.1,
   "playerId": "d457bcf7-383d-4b25-a7a9-a456e5803087"
  },
  {
   "name": "Katrina Mcintyre",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 8,
   "losses": 6,
   "pointsWon": 268,
   "totalPointsAgainst": 249,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 57.1,
   "diff": 19,
   "ppg": 19.1,
   "leagueRank": 65,
   "rating": 1.5,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0,
   "playerId": "eeead4e9-eec9-4cfc-887d-44222225d436"
  },
  {
   "name": "Sachin Pathare",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 132,
   "totalPointsAgainst": 123,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 57.1,
   "diff": 9,
   "ppg": 18.9,
   "leagueRank": 76,
   "rating": 1.7,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 0.1,
   "playerId": "cb93ea73-1422-4b53-9665-41182caba8c8"
  },
  {
   "name": "Sue Johnson",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 137,
   "totalPointsAgainst": 130,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 57.1,
   "diff": 7,
   "ppg": 19.6,
   "leagueRank": 85,
   "rating": 0.2,
   "ratingGames": 7,
   "confidence": 56,
   "strengthOfPartners": -1,
   "strengthOfOpponents": -0.9,
   "playerId": "c6046610-1dba-4bad-bc89-57e5baa0983f"
  },
  {
   "name": "Dottie Kelly",
   "gender": "Female",
   "team": "Pickle Place",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 134,
   "totalPointsAgainst": 130,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 57.1,
   "diff": 4,
   "ppg": 19.1,
   "leagueRank": 90,
   "rating": 0.7,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.8,
   "playerId": "57a09a98-991d-47a7-a13d-fb2afa6bd8ef"
  },
  {
   "name": "Barbara Hess",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 130,
   "totalPointsAgainst": 131,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 57.1,
   "diff": -1,
   "ppg": 18.6,
   "leagueRank": 89,
   "rating": 0.7,
   "ratingGames": 7,
   "confidence": 51,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.5,
   "playerId": "21baa2cb-e882-442e-a5e0-a6d88126c9c3"
  },
  {
   "name": "Liangang Liu",
   "gender": "Male",
   "team": "Stelton Sports",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 11,
   "losses": 9,
   "pointsWon": 372,
   "totalPointsAgainst": 364,
   "mixedWins": 4,
   "mixedLosses": 7,
   "genderWins": 7,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 55,
   "diff": 8,
   "ppg": 18.6,
   "leagueRank": 71,
   "rating": 0.1,
   "ratingGames": 20,
   "confidence": 73,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.1,
   "playerId": "34618d40-6e62-4ab3-aa28-fc61c9ac1920"
  },
  {
   "name": "Amy Johnson",
   "gender": "Female",
   "team": "Flemington Blue",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 6,
   "losses": 5,
   "pointsWon": 217,
   "totalPointsAgainst": 209,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 54.5,
   "diff": 8,
   "ppg": 19.7,
   "leagueRank": 70,
   "rating": -1,
   "ratingGames": 11,
   "confidence": 64,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -1,
   "playerId": "74e493de-dca7-4bf2-b9ac-630484282502"
  },
  {
   "name": "Michael Swell",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 7,
   "losses": 6,
   "pointsWon": 249,
   "totalPointsAgainst": 220,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 53.8,
   "diff": 29,
   "ppg": 19.2,
   "leagueRank": 64,
   "rating": 1.9,
   "ratingGames": 13,
   "confidence": 67,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.7,
   "playerId": "5436acd1-542a-4ca5-a652-c0addcf23ea2"
  },
  {
   "name": "Lindsay Duphily",
   "gender": "Female",
   "team": "Bounce Malvern Boom",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 7,
   "losses": 6,
   "pointsWon": 253,
   "totalPointsAgainst": 233,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 53.8,
   "diff": 20,
   "ppg": 19.5,
   "leagueRank": 61,
   "rating": 1,
   "ratingGames": 13,
   "confidence": 69,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.2,
   "playerId": "de318a9b-7e48-41ed-ba22-e06fe8e1f894"
  },
  {
   "name": "Sam Zhou",
   "gender": "Male",
   "team": "Stelton Sports",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 7,
   "losses": 6,
   "pointsWon": 240,
   "totalPointsAgainst": 236,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 53.8,
   "diff": 4,
   "ppg": 18.5,
   "leagueRank": 73,
   "rating": 1.2,
   "ratingGames": 13,
   "confidence": 67,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.7,
   "playerId": "dcc4f317-c0ad-4878-8540-d8aa3aa53d8a"
  },
  {
   "name": "David Osborne",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 7,
   "losses": 7,
   "pointsWon": 268,
   "totalPointsAgainst": 239,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 50,
   "diff": 29,
   "ppg": 19.1,
   "leagueRank": 66,
   "rating": 2.2,
   "ratingGames": 14,
   "confidence": 69,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.2,
   "playerId": "418e7ba5-3e06-40ec-9b83-19d3bf10c9cb"
  },
  {
   "name": "Jill Lesnik",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 115,
   "totalPointsAgainst": 105,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": 10,
   "ppg": 19.2,
   "leagueRank": 75,
   "rating": -0.2,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": -0.1,
   "playerId": "340fe4f1-f3ed-4fb1-9ba3-74752ee1d864"
  },
  {
   "name": "Kajal Sinkar",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 116,
   "totalPointsAgainst": 108,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": 8,
   "ppg": 19.3,
   "leagueRank": 87,
   "rating": 1.5,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.4,
   "playerId": "9d7f6585-d5f4-44fa-a4f9-24737a072f72"
  },
  {
   "name": "Meryl Nadler",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 116,
   "totalPointsAgainst": 110,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": 6,
   "ppg": 19.3,
   "leagueRank": 91,
   "rating": 0.2,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.1,
   "playerId": "90987b97-d181-4c15-9c7c-e0bebff4e9b0"
  },
  {
   "name": "Marykristin Haskell",
   "gender": "Female",
   "team": "Pickle Place",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 117,
   "totalPointsAgainst": 115,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": 2,
   "ppg": 19.5,
   "leagueRank": 95,
   "rating": 0.2,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.6,
   "playerId": "ecb01f29-37c9-4caa-a023-dc5d2591f375"
  },
  {
   "name": "Picky Vorabouth",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 8,
   "losses": 8,
   "pointsWon": 292,
   "totalPointsAgainst": 292,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 50,
   "diff": 0,
   "ppg": 18.3,
   "leagueRank": 78,
   "rating": 2.3,
   "ratingGames": 16,
   "confidence": 73,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 1.2,
   "playerId": "38336cb3-6ff4-4187-abe5-3f0a819d0a0d"
  },
  {
   "name": "Abraham Telechanski",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 148,
   "totalPointsAgainst": 149,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": -1,
   "ppg": 18.5,
   "leagueRank": 82,
   "rating": 0.2,
   "ratingGames": 8,
   "confidence": 56,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": -0.2,
   "playerId": "e022118e-9373-4e2a-94f6-391f4fb84a54"
  },
  {
   "name": "Liangjie Zhu",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 24,
   "wins": 12,
   "losses": 12,
   "pointsWon": 431,
   "totalPointsAgainst": 449,
   "mixedWins": 5,
   "mixedLosses": 7,
   "genderWins": 7,
   "genderLosses": 5,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 50,
   "diff": -18,
   "ppg": 18,
   "leagueRank": 84,
   "rating": 0.5,
   "ratingGames": 24,
   "confidence": 78,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.3,
   "playerId": "972856ec-207d-4f89-9d97-6fda7c0e083b"
  },
  {
   "name": "Christine Dugan",
   "gender": "Female",
   "team": "Bounce Malvern Boom",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 27,
   "wins": 13,
   "losses": 14,
   "pointsWon": 487,
   "totalPointsAgainst": 518,
   "mixedWins": 7,
   "mixedLosses": 8,
   "genderWins": 6,
   "genderLosses": 6,
   "clutchWins": 6,
   "clutchLosses": 3,
   "winPct": 48.1,
   "diff": -31,
   "ppg": 18,
   "leagueRank": 88,
   "rating": 1.1,
   "ratingGames": 27,
   "confidence": 82,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.7,
   "playerId": "213bd4a2-a13d-4540-b93e-69e1e9116ff8"
  },
  {
   "name": "Mei Li",
   "gender": "Female",
   "team": "Stelton Sports",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 9,
   "losses": 10,
   "pointsWon": 350,
   "totalPointsAgainst": 350,
   "mixedWins": 8,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 47.4,
   "diff": 0,
   "ppg": 18.4,
   "leagueRank": 83,
   "rating": 1,
   "ratingGames": 19,
   "confidence": 74,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.7,
   "playerId": "28330003-3125-4050-be9a-ddd726dccfe2"
  },
  {
   "name": "Ann Betterton",
   "gender": "Female",
   "team": "Stelton Sports",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 8,
   "losses": 9,
   "pointsWon": 322,
   "totalPointsAgainst": 323,
   "mixedWins": 5,
   "mixedLosses": 5,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 47.1,
   "diff": -1,
   "ppg": 18.9,
   "leagueRank": 81,
   "rating": 0.2,
   "ratingGames": 17,
   "confidence": 74,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.1,
   "playerId": "abe02688-e77f-414b-9747-25f3bdc149c7"
  },
  {
   "name": "Aimee Castellano",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 6,
   "losses": 7,
   "pointsWon": 224,
   "totalPointsAgainst": 243,
   "mixedWins": 1,
   "mixedLosses": 4,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 46.2,
   "diff": -19,
   "ppg": 17.2,
   "leagueRank": 94,
   "rating": 0.8,
   "ratingGames": 13,
   "confidence": 70,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 1.1,
   "playerId": "e76985fb-efd1-4180-a340-e4f36abbc8b4"
  },
  {
   "name": "Steven Gregov",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 6,
   "losses": 7,
   "pointsWon": 226,
   "totalPointsAgainst": 250,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 46.2,
   "diff": -24,
   "ppg": 17.4,
   "leagueRank": 77,
   "rating": -0.9,
   "ratingGames": 13,
   "confidence": 72,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.2,
   "playerId": "3efad314-83fb-4441-a7bf-510228cea1f8"
  },
  {
   "name": "Jamila Sefiane",
   "gender": "Female",
   "team": "Bounce Malvern Boom",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 9,
   "losses": 11,
   "pointsWon": 359,
   "totalPointsAgainst": 387,
   "mixedWins": 4,
   "mixedLosses": 6,
   "genderWins": 5,
   "genderLosses": 5,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 45,
   "diff": -28,
   "ppg": 18,
   "leagueRank": 92,
   "rating": 0.7,
   "ratingGames": 20,
   "confidence": 78,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.8,
   "playerId": "c0851114-0611-4b02-9589-fd249179eabc"
  },
  {
   "name": "Jennifer Qian",
   "gender": "Female",
   "team": "Stelton Sports",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 7,
   "losses": 9,
   "pointsWon": 291,
   "totalPointsAgainst": 311,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 4,
   "genderLosses": 5,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 43.8,
   "diff": -20,
   "ppg": 18.2,
   "leagueRank": 98,
   "rating": -0.5,
   "ratingGames": 16,
   "confidence": 71,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.5,
   "playerId": "902a9e2d-2ac4-4d19-9ae7-e945ece1da00"
  },
  {
   "name": "Christine Papa",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 6,
   "losses": 8,
   "pointsWon": 269,
   "totalPointsAgainst": 262,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 42.9,
   "diff": 7,
   "ppg": 19.2,
   "leagueRank": 86,
   "rating": 0.2,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.1,
   "playerId": "d156a552-7fa9-488e-9bfa-745feb859950"
  },
  {
   "name": "Cindy Hu",
   "gender": "Female",
   "team": "Bounce Malvern Boom",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 137,
   "totalPointsAgainst": 141,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 42.9,
   "diff": -4,
   "ppg": 19.6,
   "leagueRank": 116,
   "rating": 0,
   "ratingGames": 7,
   "confidence": 55,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.1,
   "playerId": "a7a0fcd1-7ff8-4ef9-a3c3-24c30ae30169"
  },
  {
   "name": "Todd Gasparre",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 5,
   "losses": 7,
   "pointsWon": 232,
   "totalPointsAgainst": 223,
   "mixedWins": 1,
   "mixedLosses": 5,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 41.7,
   "diff": 9,
   "ppg": 19.3,
   "leagueRank": 80,
   "rating": 0.9,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.7,
   "playerId": "9f205d60-6056-482a-bcca-3dfdbacf1e8d"
  },
  {
   "name": "Natasha De Carvalho",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 5,
   "losses": 7,
   "pointsWon": 217,
   "totalPointsAgainst": 226,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 41.7,
   "diff": -9,
   "ppg": 18.1,
   "leagueRank": 97,
   "rating": 0.3,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.9,
   "playerId": "462f3a15-22ed-4fa3-b698-78678a5d6966"
  },
  {
   "name": "Yi Gu",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 7,
   "losses": 10,
   "pointsWon": 313,
   "totalPointsAgainst": 313,
   "mixedWins": 3,
   "mixedLosses": 6,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 41.2,
   "diff": 0,
   "ppg": 18.4,
   "leagueRank": 93,
   "rating": 0.1,
   "ratingGames": 17,
   "confidence": 74,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.1,
   "playerId": "0640ecce-0b14-4eac-9cbd-be86592d6102"
  },
  {
   "name": "Janet Garrity",
   "gender": "Female",
   "team": "Pickle Place",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 7,
   "losses": 10,
   "pointsWon": 308,
   "totalPointsAgainst": 325,
   "mixedWins": 3,
   "mixedLosses": 5,
   "genderWins": 4,
   "genderLosses": 5,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 41.2,
   "diff": -17,
   "ppg": 18.1,
   "leagueRank": 109,
   "rating": -2.3,
   "ratingGames": 17,
   "confidence": 74,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.8,
   "playerId": "e687e44a-22a6-4f8e-a3ac-b328fae537c3"
  },
  {
   "name": "Paul Rappport",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 94,
   "totalPointsAgainst": 96,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 40,
   "diff": -2,
   "ppg": 18.8,
   "leagueRank": 118,
   "rating": 0.2,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0,
   "playerId": "f2258c77-73cb-49de-991e-ed0cc4f3f9e2"
  },
  {
   "name": "Nancy Blank",
   "gender": "Female",
   "team": "Pickle Place",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 88,
   "totalPointsAgainst": 92,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 40,
   "diff": -4,
   "ppg": 17.6,
   "leagueRank": 128,
   "rating": -0.5,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -0.3,
   "playerId": "03fc28a7-e11b-49f8-84e3-0b2a7fd0a9a7"
  },
  {
   "name": "Jorge Diaz",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 4,
   "losses": 6,
   "pointsWon": 178,
   "totalPointsAgainst": 185,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 40,
   "diff": -7,
   "ppg": 17.8,
   "leagueRank": 103,
   "rating": -0.2,
   "ratingGames": 10,
   "confidence": 63,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": -0.6,
   "playerId": "5384ac1d-574b-4fe8-9360-010e903e9ec0"
  },
  {
   "name": "Mengchu Zhou",
   "gender": "Male",
   "team": "Stelton Sports",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 10,
   "wins": 4,
   "losses": 6,
   "pointsWon": 181,
   "totalPointsAgainst": 190,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 40,
   "diff": -9,
   "ppg": 18.1,
   "leagueRank": 100,
   "rating": -1.4,
   "ratingGames": 10,
   "confidence": 63,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -0.8,
   "playerId": "14fc7872-1e6f-419e-adcb-d8e63826a37d"
  },
  {
   "name": "Derek Le",
   "gender": "Male",
   "team": "Bounce Malvern Black",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 8,
   "losses": 12,
   "pointsWon": 359,
   "totalPointsAgainst": 371,
   "mixedWins": 1,
   "mixedLosses": 7,
   "genderWins": 7,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 5,
   "winPct": 40,
   "diff": -12,
   "ppg": 18,
   "leagueRank": 104,
   "rating": -0.7,
   "ratingGames": 20,
   "confidence": 77,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.4,
   "playerId": "8cf7b40c-ed2c-4c8b-83bd-b9f2d486c690"
  },
  {
   "name": "Denise Richmond",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 8,
   "losses": 12,
   "pointsWon": 340,
   "totalPointsAgainst": 379,
   "mixedWins": 3,
   "mixedLosses": 7,
   "genderWins": 5,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 40,
   "diff": -39,
   "ppg": 17,
   "leagueRank": 110,
   "rating": -0.3,
   "ratingGames": 20,
   "confidence": 77,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.8,
   "playerId": "422cd941-43db-4123-a07e-3316583f51ee"
  },
  {
   "name": "Brett Kleger",
   "gender": "Male",
   "team": "Bounce Malvern Boom",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 8,
   "losses": 12,
   "pointsWon": 339,
   "totalPointsAgainst": 391,
   "mixedWins": 5,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 8,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 40,
   "diff": -52,
   "ppg": 17,
   "leagueRank": 112,
   "rating": -0.4,
   "ratingGames": 20,
   "confidence": 77,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.6,
   "playerId": "5b11ac59-091a-46d3-beb5-2d65d5d77135"
  },
  {
   "name": "Richard Demeuse",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 5,
   "losses": 8,
   "pointsWon": 240,
   "totalPointsAgainst": 246,
   "mixedWins": 1,
   "mixedLosses": 5,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 5,
   "winPct": 38.5,
   "diff": -6,
   "ppg": 18.5,
   "leagueRank": 96,
   "rating": 0.5,
   "ratingGames": 13,
   "confidence": 71,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.2,
   "playerId": "d88f1d1e-be4e-449e-b9b2-c468753e1dd3"
  },
  {
   "name": "David Mcintyre",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 5,
   "losses": 8,
   "pointsWon": 243,
   "totalPointsAgainst": 249,
   "mixedWins": 4,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 5,
   "winPct": 38.5,
   "diff": -6,
   "ppg": 18.7,
   "leagueRank": 99,
   "rating": -0.7,
   "ratingGames": 13,
   "confidence": 69,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.1,
   "playerId": "1f3700d5-63e4-495e-92c1-1248224ed61d"
  },
  {
   "name": "Tara Lombardo",
   "gender": "Female",
   "team": "Premiere",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 5,
   "losses": 8,
   "pointsWon": 225,
   "totalPointsAgainst": 258,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 38.5,
   "diff": -33,
   "ppg": 17.3,
   "leagueRank": 111,
   "rating": -0.2,
   "ratingGames": 13,
   "confidence": 70,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 0.4,
   "playerId": "77d20dd0-823c-474e-b470-12f69db5a588"
  },
  {
   "name": "John Zhong",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 149,
   "totalPointsAgainst": 158,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 37.5,
   "diff": -9,
   "ppg": 18.6,
   "leagueRank": 102,
   "rating": -1.5,
   "ratingGames": 8,
   "confidence": 59,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.6,
   "playerId": "6bfd212d-c7b4-4eff-ae3c-5e9424080282"
  },
  {
   "name": "Kristen Soucie",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 148,
   "totalPointsAgainst": 158,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 37.5,
   "diff": -10,
   "ppg": 18.5,
   "leagueRank": 107,
   "rating": -1.3,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.1,
   "playerId": "8ebf2370-8a82-495e-97ea-5168dd2b14c4"
  },
  {
   "name": "Rui Zhang",
   "gender": "Female",
   "team": "Stelton Sports",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 19,
   "wins": 7,
   "losses": 12,
   "pointsWon": 343,
   "totalPointsAgainst": 367,
   "mixedWins": 6,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 8,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 36.8,
   "diff": -24,
   "ppg": 18.1,
   "leagueRank": 106,
   "rating": -0.4,
   "ratingGames": 19,
   "confidence": 76,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.5,
   "playerId": "c218d668-b78a-4726-b2df-fe7730a50963"
  },
  {
   "name": "James Gross",
   "gender": "Male",
   "team": "Premiere",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 4,
   "losses": 7,
   "pointsWon": 155,
   "totalPointsAgainst": 204,
   "mixedWins": 2,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 36.4,
   "diff": -49,
   "ppg": 14.1,
   "leagueRank": 127,
   "rating": -0.8,
   "ratingGames": 11,
   "confidence": 63,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 1.1,
   "playerId": "6b3f649d-2418-4136-b045-4795d55e643d"
  },
  {
   "name": "Lily Liu",
   "gender": "Female",
   "team": "Premiere",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 5,
   "losses": 9,
   "pointsWon": 240,
   "totalPointsAgainst": 263,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 35.7,
   "diff": -23,
   "ppg": 17.1,
   "leagueRank": 108,
   "rating": 0.6,
   "ratingGames": 14,
   "confidence": 72,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 0.4,
   "playerId": "91f78b3d-a1b7-44a8-a804-6035152bf1a2"
  },
  {
   "name": "Marc Friedman",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 20,
   "wins": 7,
   "losses": 13,
   "pointsWon": 355,
   "totalPointsAgainst": 380,
   "mixedWins": 3,
   "mixedLosses": 6,
   "genderWins": 4,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 5,
   "winPct": 35,
   "diff": -25,
   "ppg": 17.8,
   "leagueRank": 113,
   "rating": -3,
   "ratingGames": 20,
   "confidence": 77,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -1,
   "playerId": "d7bdde76-1007-4b20-a804-4efcd08c3598"
  },
  {
   "name": "Eva Danieli",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 15,
   "wins": 5,
   "losses": 10,
   "pointsWon": 267,
   "totalPointsAgainst": 264,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 33.3,
   "diff": 3,
   "ppg": 17.8,
   "leagueRank": 105,
   "rating": -0.6,
   "ratingGames": 15,
   "confidence": 72,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0.3,
   "playerId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae"
  },
  {
   "name": "Leon Li",
   "gender": "Male",
   "team": "Stelton Sports",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 107,
   "totalPointsAgainst": 113,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 33.3,
   "diff": -6,
   "ppg": 17.8,
   "leagueRank": 122,
   "rating": -0.9,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.5,
   "playerId": "528de93e-9cf4-480d-a9ba-5b20f6f23f87"
  },
  {
   "name": "Jeffrey Rubin",
   "gender": "Male",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 112,
   "totalPointsAgainst": 120,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 33.3,
   "diff": -8,
   "ppg": 18.7,
   "leagueRank": 101,
   "rating": 0.4,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": 0.1,
   "playerId": "e3a89681-1dac-4f6e-8982-2245996406e6"
  },
  {
   "name": "Peter Shen",
   "gender": "Male",
   "team": "Stelton Sports",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 99,
   "totalPointsAgainst": 117,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 33.3,
   "diff": -18,
   "ppg": 16.5,
   "leagueRank": 135,
   "rating": -1.2,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.6,
   "playerId": "7417eca2-2140-47f9-bd14-be210ba9d630"
  },
  {
   "name": "Lance Brown",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 4,
   "losses": 8,
   "pointsWon": 198,
   "totalPointsAgainst": 237,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 33.3,
   "diff": -39,
   "ppg": 16.5,
   "leagueRank": 117,
   "rating": -1.8,
   "ratingGames": 12,
   "confidence": 66,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.8,
   "playerId": "5d13288d-69fe-4d0b-bf69-51c1d24e3409"
  },
  {
   "name": "Sandro Stefanelli",
   "gender": "Male",
   "team": "Bounce Malvern Boom",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 26,
   "wins": 8,
   "losses": 18,
   "pointsWon": 452,
   "totalPointsAgainst": 519,
   "mixedWins": 6,
   "mixedLosses": 8,
   "genderWins": 2,
   "genderLosses": 10,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 30.8,
   "diff": -67,
   "ppg": 17.4,
   "leagueRank": 114,
   "rating": -0.2,
   "ratingGames": 26,
   "confidence": 82,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.8,
   "playerId": "1872d8d8-f958-4747-af3a-443d5f88a1c3"
  },
  {
   "name": "Sandra Thompson",
   "gender": "Female",
   "team": "Bounce Malvern Boom",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 7,
   "losses": 16,
   "pointsWon": 371,
   "totalPointsAgainst": 456,
   "mixedWins": 3,
   "mixedLosses": 8,
   "genderWins": 4,
   "genderLosses": 8,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 30.4,
   "diff": -85,
   "ppg": 16.1,
   "leagueRank": 124,
   "rating": -1.4,
   "ratingGames": 23,
   "confidence": 81,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.8,
   "playerId": "9fc1b2e8-f3a2-4d1d-991f-1551bf05fb31"
  },
  {
   "name": "Art Muth",
   "gender": "Male",
   "team": "Flemington Blue",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 3,
   "losses": 7,
   "pointsWon": 174,
   "totalPointsAgainst": 199,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 30,
   "diff": -25,
   "ppg": 17.4,
   "leagueRank": 121,
   "rating": -2.6,
   "ratingGames": 10,
   "confidence": 63,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.7,
   "playerId": "6bfc3a49-53cb-4c03-b8cb-94552158ccbe"
  },
  {
   "name": "Cuc Dang",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 119,
   "totalPointsAgainst": 141,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 28.6,
   "diff": -22,
   "ppg": 17,
   "leagueRank": 137,
   "rating": -0.9,
   "ratingGames": 7,
   "confidence": 54,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.4,
   "playerId": "817939be-36ae-4a5d-8c02-62138ab71d4c"
  },
  {
   "name": "Bob Castellano",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 96,
   "totalPointsAgainst": 143,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 28.6,
   "diff": -47,
   "ppg": 13.7,
   "leagueRank": 159,
   "rating": -1.6,
   "ratingGames": 7,
   "confidence": 56,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 1.9,
   "playerId": "7bb24154-bd52-4081-a3e6-0b8afcde62d5"
  },
  {
   "name": "Brandon Fulford",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 5,
   "losses": 13,
   "pointsWon": 298,
   "totalPointsAgainst": 357,
   "mixedWins": 1,
   "mixedLosses": 8,
   "genderWins": 4,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 27.8,
   "diff": -59,
   "ppg": 16.6,
   "leagueRank": 125,
   "rating": -2.9,
   "ratingGames": 18,
   "confidence": 74,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.1,
   "playerId": "906383cd-e781-48bc-9004-0fc5427c7e62"
  },
  {
   "name": "Derek Livingston",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 3,
   "losses": 8,
   "pointsWon": 159,
   "totalPointsAgainst": 222,
   "mixedWins": 0,
   "mixedLosses": 5,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 27.3,
   "diff": -63,
   "ppg": 14.5,
   "leagueRank": 134,
   "rating": -1.3,
   "ratingGames": 11,
   "confidence": 68,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 1.2,
   "playerId": "593561e7-e873-4261-85ee-25b6ab524bfa"
  },
  {
   "name": "Ellen Xu",
   "gender": "Female",
   "team": "Stelton Sports",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 1,
   "losses": 3,
   "pointsWon": 74,
   "totalPointsAgainst": 78,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 25,
   "diff": -4,
   "ppg": 18.5,
   "leagueRank": 162,
   "rating": -1.6,
   "ratingGames": 4,
   "confidence": 42,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -1.1,
   "playerId": "b8ecc741-4ae9-4e26-b199-497d34dac2b9"
  },
  {
   "name": "Bart Allgeier",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 1,
   "losses": 3,
   "pointsWon": 75,
   "totalPointsAgainst": 81,
   "mixedWins": 0,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 25,
   "diff": -6,
   "ppg": 18.8,
   "leagueRank": 158,
   "rating": -0.9,
   "ratingGames": 4,
   "confidence": 42,
   "strengthOfPartners": -2,
   "strengthOfOpponents": -1.1,
   "playerId": "236ac99f-3ad9-42b7-bb97-a2c238fbbf98"
  },
  {
   "name": "Lara Webb",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 133,
   "totalPointsAgainst": 159,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 25,
   "diff": -26,
   "ppg": 16.6,
   "leagueRank": 120,
   "rating": 0.4,
   "ratingGames": 8,
   "confidence": 59,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": 1,
   "playerId": "096a6a65-5d60-461f-91ed-d2eafbd7dd76"
  },
  {
   "name": "Ron Skotarczak",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 131,
   "totalPointsAgainst": 158,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 25,
   "diff": -27,
   "ppg": 16.4,
   "leagueRank": 123,
   "rating": 1.2,
   "ratingGames": 8,
   "confidence": 54,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 2.4,
   "playerId": "034ca84d-576b-41d0-ba1c-103104b1be1f"
  },
  {
   "name": "Craig Batten",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 3,
   "losses": 9,
   "pointsWon": 197,
   "totalPointsAgainst": 238,
   "mixedWins": 1,
   "mixedLosses": 6,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 25,
   "diff": -41,
   "ppg": 16.4,
   "leagueRank": 129,
   "rating": -3.3,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.1,
   "playerId": "3a9ee2e5-e88b-4b96-932d-dc09dbfa001d"
  },
  {
   "name": "Jim Peng",
   "gender": "Male",
   "team": "Stelton Sports",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 4,
   "losses": 12,
   "pointsWon": 268,
   "totalPointsAgainst": 314,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 9,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 25,
   "diff": -46,
   "ppg": 16.8,
   "leagueRank": 126,
   "rating": -1.1,
   "ratingGames": 16,
   "confidence": 73,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.4,
   "playerId": "eddc4924-517f-46ac-9827-935983daa9db"
  },
  {
   "name": "Jiang Jin",
   "gender": "Male",
   "team": "Bounce Malvern Boom",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 3,
   "losses": 10,
   "pointsWon": 234,
   "totalPointsAgainst": 257,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 23.1,
   "diff": -23,
   "ppg": 18,
   "leagueRank": 115,
   "rating": -0.2,
   "ratingGames": 13,
   "confidence": 70,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.3,
   "playerId": "579cead3-d960-4c14-8905-8c17c70ca003"
  },
  {
   "name": "Steve Gerwer",
   "gender": "Male",
   "team": "Premiere",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 13,
   "wins": 3,
   "losses": 10,
   "pointsWon": 187,
   "totalPointsAgainst": 261,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 23.1,
   "diff": -74,
   "ppg": 14.4,
   "leagueRank": 142,
   "rating": -2.7,
   "ratingGames": 13,
   "confidence": 71,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 0.5,
   "playerId": "a5a6470f-9dee-468c-85fe-4286ee0b4ecd"
  },
  {
   "name": "Ronnie Yin",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 22,
   "wins": 5,
   "losses": 17,
   "pointsWon": 349,
   "totalPointsAgainst": 446,
   "mixedWins": 4,
   "mixedLosses": 8,
   "genderWins": 1,
   "genderLosses": 9,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 22.7,
   "diff": -97,
   "ppg": 15.9,
   "leagueRank": 136,
   "rating": -1.9,
   "ratingGames": 22,
   "confidence": 78,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 1,
   "playerId": "988636eb-4604-44d6-af70-2732b787ec2a"
  },
  {
   "name": "Linda Zhu",
   "gender": "Female",
   "team": "Bounce Malvern Boom",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 4,
   "losses": 14,
   "pointsWon": 282,
   "totalPointsAgainst": 361,
   "mixedWins": 2,
   "mixedLosses": 7,
   "genderWins": 2,
   "genderLosses": 7,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 22.2,
   "diff": -79,
   "ppg": 15.7,
   "leagueRank": 133,
   "rating": -1.1,
   "ratingGames": 18,
   "confidence": 76,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 1,
   "playerId": "fd596225-797e-4125-876b-633dae2efc65"
  },
  {
   "name": "Kristina Rhodes",
   "gender": "Female",
   "team": "Bounce Malvern Boom",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 3,
   "losses": 11,
   "pointsWon": 225,
   "totalPointsAgainst": 284,
   "mixedWins": 1,
   "mixedLosses": 5,
   "genderWins": 2,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 21.4,
   "diff": -59,
   "ppg": 16.1,
   "leagueRank": 131,
   "rating": -1.1,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 1.4,
   "playerId": "77ecd1c3-b1df-469a-83ba-d12bd56f2c6a"
  },
  {
   "name": "June Lee",
   "gender": "Female",
   "team": "Stelton Sports",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 93,
   "totalPointsAgainst": 103,
   "mixedWins": 0,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 20,
   "diff": -10,
   "ppg": 18.6,
   "leagueRank": 144,
   "rating": -0.3,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 0.1,
   "playerId": "c5098f72-b304-4552-b25b-8f4dec2709e0"
  },
  {
   "name": "Savita Nandal",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 2,
   "losses": 8,
   "pointsWon": 168,
   "totalPointsAgainst": 202,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 20,
   "diff": -34,
   "ppg": 16.8,
   "leagueRank": 130,
   "rating": -2,
   "ratingGames": 10,
   "confidence": 63,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0,
   "playerId": "ce787b4f-30b9-4fd0-a12a-caba1f27ca68"
  },
  {
   "name": "Andrew Fleischer",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 67,
   "totalPointsAgainst": 103,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 20,
   "diff": -36,
   "ppg": 13.4,
   "leagueRank": 172,
   "rating": -1.7,
   "ratingGames": 5,
   "confidence": 49,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 1.4,
   "playerId": "d1b4ea08-869c-4a17-a8c3-e96b13dd8ec7"
  },
  {
   "name": "John Darrah",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 4,
   "losses": 16,
   "pointsWon": 345,
   "totalPointsAgainst": 401,
   "mixedWins": 1,
   "mixedLosses": 11,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 20,
   "diff": -56,
   "ppg": 17.3,
   "leagueRank": 119,
   "rating": 0.5,
   "ratingGames": 20,
   "confidence": 77,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": 0.8,
   "playerId": "6c1eeebb-15d3-4e98-81e6-e3d1a0ae8a84"
  },
  {
   "name": "Chris Norton",
   "gender": "Male",
   "team": "Bounce Malvern Boom",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 5,
   "losses": 20,
   "pointsWon": 381,
   "totalPointsAgainst": 503,
   "mixedWins": 3,
   "mixedLosses": 10,
   "genderWins": 2,
   "genderLosses": 10,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 20,
   "diff": -122,
   "ppg": 15.2,
   "leagueRank": 139,
   "rating": -2,
   "ratingGames": 25,
   "confidence": 81,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 1,
   "playerId": "395868e3-8573-41ad-9b13-84b6a7bf7f35"
  },
  {
   "name": "John Ficarra",
   "gender": "Male",
   "team": "Premiere",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 2,
   "losses": 9,
   "pointsWon": 150,
   "totalPointsAgainst": 221,
   "mixedWins": 1,
   "mixedLosses": 5,
   "genderWins": 1,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 18.2,
   "diff": -71,
   "ppg": 13.6,
   "leagueRank": 157,
   "rating": -2.7,
   "ratingGames": 11,
   "confidence": 66,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0.7,
   "playerId": "b1a0876c-0702-497d-95a4-5a8a894ff2d5"
  },
  {
   "name": "Stepan Nevshehirlian",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 2,
   "losses": 9,
   "pointsWon": 152,
   "totalPointsAgainst": 224,
   "mixedWins": 1,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 18.2,
   "diff": -72,
   "ppg": 13.8,
   "leagueRank": 145,
   "rating": -1.3,
   "ratingGames": 11,
   "confidence": 67,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 1.6,
   "playerId": "1e11f6a0-d704-4404-91c8-f8a6ac9b7383"
  },
  {
   "name": "Jay Zeng",
   "gender": "Male",
   "team": "Stelton Sports",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 99,
   "totalPointsAgainst": 124,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 16.7,
   "diff": -25,
   "ppg": 16.5,
   "leagueRank": 156,
   "rating": -2.4,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.2,
   "playerId": "abc4de4c-a9af-4b75-8e57-5b7374af96c2"
  },
  {
   "name": "Anthony Wands",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 93,
   "totalPointsAgainst": 120,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 16.7,
   "diff": -27,
   "ppg": 15.5,
   "leagueRank": 153,
   "rating": -0.4,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 1.7,
   "playerId": "1762a9ad-6493-4407-a0ce-de2de697c313"
  },
  {
   "name": "Coby Resnick",
   "gender": "Female",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 96,
   "totalPointsAgainst": 124,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 16.7,
   "diff": -28,
   "ppg": 16,
   "leagueRank": 138,
   "rating": -2.4,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": -0.4,
   "playerId": "0f80fa65-da5b-48e1-8a59-ae8d5f0cf158"
  },
  {
   "name": "Erik Lombardo",
   "gender": "Male",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 93,
   "totalPointsAgainst": 123,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 16.7,
   "diff": -30,
   "ppg": 15.5,
   "leagueRank": 141,
   "rating": -0.4,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": 1.3,
   "playerId": "834f3d3e-bde3-4b30-af4c-d1eadb344dfd"
  },
  {
   "name": "Jill Scully",
   "gender": "Female",
   "team": "Bounce Malvern Black",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 90,
   "totalPointsAgainst": 122,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 16.7,
   "diff": -32,
   "ppg": 15,
   "leagueRank": 178,
   "rating": -1.6,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 1.9,
   "playerId": "754a47b8-0711-4929-928f-9bafe8f9dbc0"
  },
  {
   "name": "Emily Abbott",
   "gender": "Female",
   "team": "Pickle Place",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 91,
   "totalPointsAgainst": 123,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 16.7,
   "diff": -32,
   "ppg": 15.2,
   "leagueRank": 169,
   "rating": -3.7,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.3,
   "playerId": "d0a77087-5f1c-4d8c-841d-af39ac48dca3"
  },
  {
   "name": "Ed Gieske",
   "gender": "Male",
   "team": "Bounce Malvern Boom",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 92,
   "totalPointsAgainst": 124,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 16.7,
   "diff": -32,
   "ppg": 15.3,
   "leagueRank": 175,
   "rating": 0,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 2.3,
   "playerId": "314486b1-6723-4b33-9dba-fa5756065707"
  },
  {
   "name": "Nancy Lin",
   "gender": "Female",
   "team": "Premiere",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 2,
   "losses": 10,
   "pointsWon": 173,
   "totalPointsAgainst": 244,
   "mixedWins": 1,
   "mixedLosses": 6,
   "genderWins": 1,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 16.7,
   "diff": -71,
   "ppg": 14.4,
   "leagueRank": 150,
   "rating": -2.3,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 0.6,
   "playerId": "88bcb8e1-970f-4535-bec1-beb232f1f77a"
  },
  {
   "name": "Tom Kresky",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 2,
   "losses": 11,
   "pointsWon": 217,
   "totalPointsAgainst": 266,
   "mixedWins": 0,
   "mixedLosses": 7,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 15.4,
   "diff": -49,
   "ppg": 16.7,
   "leagueRank": 132,
   "rating": -1.3,
   "ratingGames": 13,
   "confidence": 70,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.6,
   "playerId": "81875a5e-2b65-4152-bace-b4c96517579d"
  },
  {
   "name": "Hal Golden",
   "gender": "Male",
   "team": "Bounce Malvern Boom",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 2,
   "losses": 12,
   "pointsWon": 225,
   "totalPointsAgainst": 290,
   "mixedWins": 1,
   "mixedLosses": 5,
   "genderWins": 1,
   "genderLosses": 7,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 14.3,
   "diff": -65,
   "ppg": 16.1,
   "leagueRank": 143,
   "rating": -2.3,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.8,
   "playerId": "476c99a2-15e5-4e99-8471-7c2b6394faa3"
  },
  {
   "name": "Wendy Zukerberg",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 127,
   "totalPointsAgainst": 166,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 12.5,
   "diff": -39,
   "ppg": 15.9,
   "leagueRank": 140,
   "rating": -0.5,
   "ratingGames": 8,
   "confidence": 57,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 2.1,
   "playerId": "f34665bd-6866-415f-a498-21d7f69fb895"
  },
  {
   "name": "Tara Kramer",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 121,
   "totalPointsAgainst": 166,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 12.5,
   "diff": -45,
   "ppg": 15.1,
   "leagueRank": 147,
   "rating": -1.5,
   "ratingGames": 8,
   "confidence": 61,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 1.4,
   "playerId": "dae62b8e-5f8e-4721-8f41-3218518d1e30"
  },
  {
   "name": "Cynthia Covie",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 117,
   "totalPointsAgainst": 163,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 12.5,
   "diff": -46,
   "ppg": 14.6,
   "leagueRank": 148,
   "rating": -1.7,
   "ratingGames": 8,
   "confidence": 59,
   "strengthOfPartners": -2.2,
   "strengthOfOpponents": 0.4,
   "playerId": "b146d15b-2ed7-4087-a6a0-90d4538aea72"
  },
  {
   "name": "Stacy Garretson",
   "gender": "Female",
   "team": "Flemington Green",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 115,
   "totalPointsAgainst": 164,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 12.5,
   "diff": -49,
   "ppg": 14.4,
   "leagueRank": 154,
   "rating": -1.1,
   "ratingGames": 8,
   "confidence": 60,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 2,
   "playerId": "85dd9a28-a510-493a-bfe4-9cc7d3550ff2"
  },
  {
   "name": "Steve Hong",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 1,
   "losses": 10,
   "pointsWon": 164,
   "totalPointsAgainst": 224,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 9.1,
   "diff": -60,
   "ppg": 14.9,
   "leagueRank": 151,
   "rating": -0.7,
   "ratingGames": 11,
   "confidence": 66,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 1.4,
   "playerId": "a861a127-253c-4cb2-a1d6-93a37558b93a"
  },
  {
   "name": "Sal Frangipane",
   "gender": "Male",
   "team": "Premiere",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 1,
   "losses": 11,
   "pointsWon": 187,
   "totalPointsAgainst": 243,
   "mixedWins": 0,
   "mixedLosses": 5,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 8.3,
   "diff": -56,
   "ppg": 15.6,
   "leagueRank": 146,
   "rating": -0.7,
   "ratingGames": 12,
   "confidence": 70,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 1.2,
   "playerId": "3bfdf88b-aaa3-4f8d-a673-6a15001fb45a"
  },
  {
   "name": "David Marchese",
   "gender": "Male",
   "team": "Bounce Malvern Boom",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 1,
   "losses": 11,
   "pointsWon": 188,
   "totalPointsAgainst": 246,
   "mixedWins": 1,
   "mixedLosses": 5,
   "genderWins": 0,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 8.3,
   "diff": -58,
   "ppg": 15.7,
   "leagueRank": 149,
   "rating": -2,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 1,
   "playerId": "aa802904-9a39-4b0e-ad2b-d1a1ea2fcc5b"
  },
  {
   "name": "Quen Koon Ng",
   "gender": "Female",
   "team": "Premiere",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 1,
   "losses": 11,
   "pointsWon": 168,
   "totalPointsAgainst": 249,
   "mixedWins": 0,
   "mixedLosses": 5,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 8.3,
   "diff": -81,
   "ppg": 14,
   "leagueRank": 163,
   "rating": -3.5,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 0.4,
   "playerId": "6c655208-0558-4174-a618-7988d5783914"
  },
  {
   "name": "Lisa Loeber",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 1,
   "losses": 13,
   "pointsWon": 199,
   "totalPointsAgainst": 287,
   "mixedWins": 1,
   "mixedLosses": 6,
   "genderWins": 0,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 7.1,
   "diff": -88,
   "ppg": 14.2,
   "leagueRank": 161,
   "rating": -1.4,
   "ratingGames": 14,
   "confidence": 72,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": 1.4,
   "playerId": "9e88e95a-d634-4484-8a3e-76e54b82a5fd"
  },
  {
   "name": "Evelyn Du",
   "gender": "Female",
   "team": "Allstar Pickler",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 1,
   "losses": 14,
   "pointsWon": 234,
   "totalPointsAgainst": 312,
   "mixedWins": 1,
   "mixedLosses": 7,
   "genderWins": 0,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 6.7,
   "diff": -78,
   "ppg": 15.6,
   "leagueRank": 152,
   "rating": -1,
   "ratingGames": 15,
   "confidence": 71,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 1.6,
   "playerId": "08547f36-c938-4f82-a783-9c89ab07500c"
  },
  {
   "name": "Laura Sweet",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 1,
   "losses": 22,
   "pointsWon": 348,
   "totalPointsAgainst": 481,
   "mixedWins": 0,
   "mixedLosses": 12,
   "genderWins": 1,
   "genderLosses": 10,
   "clutchWins": 1,
   "clutchLosses": 5,
   "winPct": 4.3,
   "diff": -133,
   "ppg": 15.1,
   "leagueRank": 160,
   "rating": -1.6,
   "ratingGames": 23,
   "confidence": 79,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 1.3,
   "playerId": "7b7b29be-c4b7-4ca9-8fd9-77ec362e761b"
  },
  {
   "name": "Wally Liu",
   "gender": "Male",
   "team": "Premiere",
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
   "leagueRank": 197,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "0a36460a-ac00-4501-8a7f-9b217bfbddc7"
  },
  {
   "name": "Todd Mitchell",
   "gender": "Male",
   "team": "Pickleball Palace",
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
   "leagueRank": 202,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "164bf044-d118-4bee-8bd6-d0bad38b79ea"
  },
  {
   "name": "Kate Curren",
   "gender": "Female",
   "team": "Pickleball Palace",
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
   "leagueRank": 187,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "20e006d9-72f9-4f9e-bad5-750694224782"
  },
  {
   "name": "Liz Cuozzo",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
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
   "leagueRank": 186,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "2b2d474d-281c-42d7-854b-6bfe32f20563"
  },
  {
   "name": "Brad Daddis",
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
   "leagueRank": 188,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "3b22e073-2c4b-4245-a142-29441ec509a3"
  },
  {
   "name": "Cynthia Eisen",
   "gender": "Female",
   "team": "Pickle Place",
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
   "leagueRank": 191,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "4c762958-33e1-4b41-8077-424cb639af7e"
  },
  {
   "name": "Eric Markowitz",
   "gender": "Male",
   "team": "Pickle Place",
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
   "leagueRank": 200,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "5a16df6a-43c6-40a7-bfe7-52e5e2ad1948"
  },
  {
   "name": "Zemin Zeng",
   "gender": "Male",
   "team": "Stelton Sports",
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
   "leagueRank": 224,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "6f2553e1-299a-407f-b919-41d4b3a84bae"
  },
  {
   "name": "Margaret Weidlich",
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
   "leagueRank": 221,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "7021e97f-1e5e-4adb-ac80-1a9c919caba6"
  },
  {
   "name": "Susan Debbs",
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
   "leagueRank": 189,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "753dcbff-f1a6-4fb1-97bf-2f76e08df8b9"
  },
  {
   "name": "Jeff Lorman",
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
   "leagueRank": 199,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "75789bbc-0dde-460e-b905-7bd1189c6a90"
  },
  {
   "name": "Todd Law",
   "gender": "Male",
   "team": "Pickle Place",
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
   "leagueRank": 196,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "9b0fe5d7-4586-4629-8408-928794ca1c3b"
  },
  {
   "name": "Jaime Padilla",
   "gender": "Male",
   "team": "Premiere",
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
   "leagueRank": 204,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "aa73e326-7295-4153-8f57-b4903877923d"
  },
  {
   "name": "Christy Beale",
   "gender": "Female",
   "team": "Bounce Malvern Boom",
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
   "playerId": "d034daeb-3fd8-4273-80f5-3a272ceab674"
  },
  {
   "name": "Dana Sun",
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
   "leagueRank": 215,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "f0ced78a-591c-415f-9839-a538a6cb0d2c"
  },
  {
   "name": "Amanda Quinn",
   "gender": "Female",
   "team": "Pickleball Palace",
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
   "leagueRank": 208,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "f1248cc3-96c3-4671-9b08-533d22eb710f"
  },
  {
   "name": "Jeffrey Susskind",
   "gender": "Male",
   "team": "Pickleball Palace",
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
   "leagueRank": 216,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "fd8d97f4-ff3e-46e2-aa8f-e5408a6a9e9c"
  },
  {
   "name": "Jacklyn Beck",
   "gender": "Female",
   "team": "Premiere",
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
   "leagueRank": 184,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "08991f81-441f-4dd8-8332-4a50044d429d"
  },
  {
   "name": "Mark Fappiano",
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
   "leagueRank": 193,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "14289b5c-46c9-4728-b43d-9f01eeb74b8d"
  },
  {
   "name": "Stephen Locker",
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
   "leagueRank": 198,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "188607ba-a609-4881-87bb-7c997a032cc2"
  },
  {
   "name": "Ed Saxman",
   "gender": "Male",
   "team": "Pickle Place",
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
   "leagueRank": 213,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "32244c70-6859-44af-a408-8294d65b592d"
  },
  {
   "name": "Yang Wang",
   "gender": "Male",
   "team": "ACE Moorestown",
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
   "leagueRank": 220,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "389300d9-75bf-4c93-9fbc-cab6881f49b4"
  },
  {
   "name": "Thomas Schillow",
   "gender": "Male",
   "team": "ACE Moorestown",
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
   "leagueRank": 214,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "4ab0fd39-c108-419c-80f8-0dbe37dd75be"
  },
  {
   "name": "Kim Hamilton",
   "gender": "Female",
   "team": "ACE Moorestown",
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
   "leagueRank": 194,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "4d6a9dce-3c23-4d65-85f9-8b440c44a318"
  },
  {
   "name": "John Hauth",
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
   "leagueRank": 195,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "60e2facd-7ab0-4dee-9e9e-919be67cf30c"
  },
  {
   "name": "Fabienne Yu",
   "gender": "Female",
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
   "leagueRank": 223,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "943ac52a-070f-4bdc-baf8-efe14d0f40ea"
  },
  {
   "name": "Marek Beck",
   "gender": "Male",
   "team": "Premiere",
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
   "leagueRank": 185,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "a7e7f77c-ee2e-4de3-a26e-c74576b0fd56"
  },
  {
   "name": "John Sallo",
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
   "leagueRank": 212,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "b379a353-c35e-4a6e-8ea4-ea21ebcdafa0"
  },
  {
   "name": "David Eisen",
   "gender": "Male",
   "team": "Pickle Place",
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
   "leagueRank": 192,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "d4b4ed3c-0c4b-4f8b-9b98-a5d448bfb361"
  },
  {
   "name": "John Rogers",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
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
   "leagueRank": 209,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "ea556dfe-e3ee-4ad0-ba0f-62e1e9f6bf89"
  },
  {
   "name": "Yang Xu",
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
   "leagueRank": 222,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "f607099c-35f9-448c-9077-1792b245f68e"
  },
  {
   "name": "Ping Yang",
   "gender": "Female",
   "team": "Stelton Sports",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 89,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 0,
   "diff": -16,
   "ppg": 17.8,
   "leagueRank": 171,
   "rating": -1.6,
   "ratingGames": 5,
   "confidence": 43,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.1,
   "playerId": "a1b13a29-05c7-4582-9227-22a7bcb0e713"
  },
  {
   "name": "Jieping Wang",
   "gender": "Male",
   "team": "Allstar Pickler",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 0,
   "losses": 4,
   "pointsWon": 58,
   "totalPointsAgainst": 84,
   "mixedWins": 0,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -26,
   "ppg": 14.5,
   "leagueRank": 181,
   "rating": -2.1,
   "ratingGames": 4,
   "confidence": 37,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.8,
   "playerId": "c9088878-9755-4e32-abed-4a4e5a42f9a8"
  },
  {
   "name": "Danny Mellul",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 75,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -30,
   "ppg": 15,
   "leagueRank": 179,
   "rating": -1.9,
   "ratingGames": 5,
   "confidence": 51,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.8,
   "playerId": "5dccd915-178e-4316-8e9b-e0a3db8edfa9"
  },
  {
   "name": "Lucy Chow",
   "gender": "Female",
   "team": "Bounce Malvern Boom",
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
   "winPct": 0,
   "diff": -31,
   "ppg": 15.8,
   "leagueRank": 180,
   "rating": -0.3,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 1.9,
   "playerId": "84f2d830-3dbf-4dfd-bd4b-f9eb3fb04091"
  },
  {
   "name": "Jimmy Shapiro",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 0,
   "losses": 7,
   "pointsWon": 111,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -36,
   "ppg": 15.9,
   "leagueRank": 168,
   "rating": -1.7,
   "ratingGames": 7,
   "confidence": 58,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 0.6,
   "playerId": "7b57c36d-a6eb-470e-b132-26d1f2a47b74"
  },
  {
   "name": "Amy Maussner",
   "gender": "Female",
   "team": "APC Garden State",
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
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -43,
   "ppg": 13.8,
   "leagueRank": 173,
   "rating": -1.5,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 1.8,
   "playerId": "8b17c8d0-5ea7-44ee-9a80-7e3c246c92d3"
  },
  {
   "name": "Rosalyn Goldsmith",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 61,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -44,
   "ppg": 12.2,
   "leagueRank": 182,
   "rating": -2.5,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 1.9,
   "playerId": "545c12c3-3098-47ca-b35e-429f37f481f5"
  },
  {
   "name": "Dan Loreti",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 79,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -47,
   "ppg": 13.2,
   "leagueRank": 176,
   "rating": -1,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 2.4,
   "playerId": "2ce4808a-9400-42cb-a756-fa8ecdf2a1eb"
  },
  {
   "name": "Kerry Gray-Style",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 0,
   "losses": 7,
   "pointsWon": 96,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -51,
   "ppg": 13.7,
   "leagueRank": 174,
   "rating": -1.4,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 1.8,
   "playerId": "5d2f1c91-647e-4f06-bd5e-ad6550674ce4"
  },
  {
   "name": "Gary Garretson",
   "gender": "Male",
   "team": "Flemington Green",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 75,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -51,
   "ppg": 12.5,
   "leagueRank": 177,
   "rating": -2.1,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 2.3,
   "playerId": "d4126276-6b83-42be-b943-9957df46992c"
  },
  {
   "name": "Hayley Yandoli",
   "gender": "Female",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 0,
   "losses": 7,
   "pointsWon": 93,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -54,
   "ppg": 13.3,
   "leagueRank": 170,
   "rating": -2.6,
   "ratingGames": 7,
   "confidence": 58,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 1.3,
   "playerId": "1fc2dd51-135b-46d6-91ef-9291b573e78a"
  },
  {
   "name": "Talen Singer",
   "gender": "Male",
   "team": "Bounce Malvern Boom",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 0,
   "losses": 12,
   "pointsWon": 178,
   "totalPointsAgainst": 252,
   "mixedWins": 0,
   "mixedLosses": 6,
   "genderWins": 0,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 0,
   "diff": -74,
   "ppg": 14.8,
   "leagueRank": 164,
   "rating": -1.8,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 1.7,
   "playerId": "d4cdb8c8-9220-4aa7-b48a-41f9f30dff51"
  },
  {
   "name": "Tim Bruno",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 0,
   "losses": 13,
   "pointsWon": 181,
   "totalPointsAgainst": 273,
   "mixedWins": 0,
   "mixedLosses": 7,
   "genderWins": 0,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -92,
   "ppg": 13.9,
   "leagueRank": 166,
   "rating": -1.7,
   "ratingGames": 13,
   "confidence": 70,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": 1.5,
   "playerId": "ef5a4f7c-58d1-42fa-81c2-1f9f09a60a0f"
  },
  {
   "name": "Jiyun Yuh",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 16,
   "wins": 0,
   "losses": 16,
   "pointsWon": 232,
   "totalPointsAgainst": 336,
   "mixedWins": 0,
   "mixedLosses": 8,
   "genderWins": 0,
   "genderLosses": 8,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 0,
   "diff": -104,
   "ppg": 14.5,
   "leagueRank": 165,
   "rating": -3.8,
   "ratingGames": 16,
   "confidence": 71,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.4,
   "playerId": "c94ae231-9f0c-4212-b769-7bd708d8fc38"
  },
  {
   "name": "Kelly Dalsey",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 0,
   "losses": 14,
   "pointsWon": 185,
   "totalPointsAgainst": 294,
   "mixedWins": 0,
   "mixedLosses": 7,
   "genderWins": 0,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 0,
   "diff": -109,
   "ppg": 13.2,
   "leagueRank": 167,
   "rating": -3.1,
   "ratingGames": 14,
   "confidence": 69,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 1.1,
   "playerId": "4329b94b-0d60-43f1-92ff-3757bc0a03d6"
  }
 ],
 "teams": [
  {
   "name": "ACE Moorestown",
   "w": 3,
   "l": 0,
   "pf": 1986,
   "pa": 1507,
   "gw": 79,
   "gl": 17,
   "diff": 479,
   "gameDiff": 62,
   "power": 1.8,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     39,
     9
    ],
    "male": [
     21,
     3
    ],
    "female": [
     19,
     5
    ]
   }
  },
  {
   "name": "Pickle Place",
   "w": 3,
   "l": 0,
   "pf": 1780,
   "pa": 1547,
   "gw": 72,
   "gl": 24,
   "diff": 233,
   "gameDiff": 48,
   "power": 0.4,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     39,
     9
    ],
    "male": [
     21,
     3
    ],
    "female": [
     12,
     12
    ]
   }
  },
  {
   "name": "Flemington Blue",
   "w": 3,
   "l": 0,
   "pf": 1736,
   "pa": 1596,
   "gw": 65,
   "gl": 31,
   "diff": 140,
   "gameDiff": 34,
   "power": -0.2,
   "powerRank": 4,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     31,
     17
    ],
    "male": [
     12,
     12
    ],
    "female": [
     22,
     2
    ]
   }
  },
  {
   "name": "Pickleball Palace",
   "w": 2,
   "l": 0,
   "pf": 1319,
   "pa": 1050,
   "gw": 53,
   "gl": 11,
   "diff": 269,
   "gameDiff": 42,
   "power": 1.7,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     25,
     7
    ],
    "male": [
     13,
     3
    ],
    "female": [
     15,
     1
    ]
   }
  },
  {
   "name": "Bounce Malvern Black",
   "w": 3,
   "l": 1,
   "pf": 2577,
   "pa": 2186,
   "gw": 90,
   "gl": 38,
   "diff": 391,
   "gameDiff": 52,
   "power": 1.2,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     46,
     18
    ],
    "male": [
     21,
     11
    ],
    "female": [
     23,
     9
    ]
   }
  },
  {
   "name": "Jersey Pickleball Club",
   "w": 2,
   "l": 1,
   "pf": 1846,
   "pa": 1695,
   "gw": 53,
   "gl": 43,
   "diff": 151,
   "gameDiff": 10,
   "power": 0.8,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     26,
     22
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
   "name": "Stelton Sports",
   "w": 1,
   "l": 2,
   "pf": 1809,
   "pa": 1859,
   "gw": 42,
   "gl": 54,
   "diff": -50,
   "gameDiff": -12,
   "power": -0.1,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     24,
     24
    ],
    "male": [
     10,
     14
    ],
    "female": [
     8,
     16
    ]
   }
  },
  {
   "name": "Flemington Green",
   "w": 1,
   "l": 2,
   "pf": 1564,
   "pa": 1725,
   "gw": 33,
   "gl": 63,
   "diff": -161,
   "gameDiff": -30,
   "power": -0.1,
   "powerRank": 4,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     13,
     35
    ],
    "male": [
     8,
     16
    ],
    "female": [
     12,
     12
    ]
   }
  },
  {
   "name": "Allstar Pickler",
   "w": 0,
   "l": 3,
   "pf": 1536,
   "pa": 1758,
   "gw": 28,
   "gl": 68,
   "diff": -222,
   "gameDiff": -40,
   "power": -0.5,
   "powerRank": 5,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     14,
     34
    ],
    "male": [
     10,
     14
    ],
    "female": [
     4,
     20
    ]
   }
  },
  {
   "name": "Bounce Malvern Boom",
   "w": 0,
   "l": 4,
   "pf": 2219,
   "pa": 2614,
   "gw": 37,
   "gl": 91,
   "diff": -395,
   "gameDiff": -54,
   "power": -0.6,
   "powerRank": 5,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     20,
     44
    ],
    "male": [
     4,
     28
    ],
    "female": [
     13,
     19
    ]
   }
  },
  {
   "name": "Premiere",
   "w": 0,
   "l": 2,
   "pf": 1012,
   "pa": 1300,
   "gw": 15,
   "gl": 49,
   "diff": -288,
   "gameDiff": -34,
   "power": -1.4,
   "powerRank": 6,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     8,
     24
    ],
    "male": [
     4,
     12
    ],
    "female": [
     3,
     13
    ]
   }
  },
  {
   "name": "APC Garden State",
   "w": 0,
   "l": 3,
   "pf": 1448,
   "pa": 1995,
   "gw": 9,
   "gl": 87,
   "diff": -547,
   "gameDiff": -78,
   "power": -1.5,
   "powerRank": 6,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     3,
     45
    ],
    "male": [
     5,
     19
    ],
    "female": [
     1,
     23
    ]
   }
  }
 ],
 "duos": [
  {
   "a": "Denise Richmond",
   "b": "Katrina Mcintyre",
   "team": "Flemington Green",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.3,
   "avgActual": 6.3,
   "avgExpected": 0.9,
   "aId": "422cd941-43db-4123-a07e-3316583f51ee",
   "bId": "eeead4e9-eec9-4cfc-887d-44222225d436"
  },
  {
   "a": "Christine Dugan",
   "b": "Kristina Rhodes",
   "team": "Bounce Malvern Boom",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 2,
   "avgActual": 1,
   "avgExpected": -2.9,
   "aId": "213bd4a2-a13d-4540-b93e-69e1e9116ff8",
   "bId": "77ecd1c3-b1df-469a-83ba-d12bd56f2c6a"
  },
  {
   "a": "Susan Ackley",
   "b": "Tom Maley",
   "team": "Flemington Blue",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.8,
   "avgActual": 6.3,
   "avgExpected": 2.2,
   "aId": "07a0e948-6308-4920-a6a8-1d5945552ecb",
   "bId": "e05f8bd0-e64b-42dd-b6a0-42249573b3f4"
  },
  {
   "a": "Karan Pescatore",
   "b": "Kelly Hanson Word",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.6,
   "avgActual": 8.3,
   "avgExpected": 5,
   "aId": "2cb4b2dd-d14b-4bab-a8be-ef4b14845711",
   "bId": "ecfbb129-ba7d-4b52-92b9-869fa7487248"
  },
  {
   "a": "Brandon Fulford",
   "b": "Liangjie Zhu",
   "team": "Allstar Pickler",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 2,
   "avgExpected": -1,
   "aId": "906383cd-e781-48bc-9004-0fc5427c7e62",
   "bId": "972856ec-207d-4f89-9d97-6fda7c0e083b"
  },
  {
   "a": "Jim Darcangelo",
   "b": "Tera Baccile",
   "team": "Bounce Malvern Black",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.5,
   "avgActual": 6,
   "avgExpected": 3,
   "aId": "0530512b-466d-4ff7-9e89-7961b4a63110",
   "bId": "d5aa92c7-71df-47c7-84fb-6710e1ed81e2"
  },
  {
   "a": "Carly Pfeffer",
   "b": "Daniel Chernin",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.5,
   "avgActual": 6.5,
   "avgExpected": 3.5,
   "aId": "387e74d4-66ee-4a52-a4ac-aae3dbe1d21b",
   "bId": "9fc26554-f672-4501-9d2e-a8553fd79eaf"
  },
  {
   "a": "Mei Li",
   "b": "Sam Zhou",
   "team": "Stelton Sports",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 3.5,
   "avgExpected": 0.6,
   "aId": "28330003-3125-4050-be9a-ddd726dccfe2",
   "bId": "dcc4f317-c0ad-4878-8540-d8aa3aa53d8a"
  },
  {
   "a": "Marc Harden",
   "b": "Kate Siedell",
   "team": "ACE Moorestown",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 9.3,
   "avgExpected": 7.1,
   "aId": "55194d2f-f537-4e19-b901-86c559f25ef2",
   "bId": "8decf039-f1e5-4182-b3cf-6756789ae87a"
  },
  {
   "a": "Jim Darcangelo",
   "b": "Derek Le",
   "team": "Bounce Malvern Black",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.2,
   "avgActual": 1.3,
   "avgExpected": -1.2,
   "aId": "0530512b-466d-4ff7-9e89-7961b4a63110",
   "bId": "8cf7b40c-ed2c-4c8b-83bd-b9f2d486c690"
  },
  {
   "a": "Kelly Dalsey",
   "b": "Laura Sweet",
   "team": "APC Garden State",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 1.2,
   "avgActual": -5,
   "avgExpected": -7.8,
   "aId": "4329b94b-0d60-43f1-92ff-3757bc0a03d6",
   "bId": "7b7b29be-c4b7-4ca9-8fd9-77ec362e761b"
  },
  {
   "a": "Nancy Lin",
   "b": "John Ficarra",
   "team": "Premiere",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.1,
   "avgActual": -3.3,
   "avgExpected": -6,
   "aId": "88bcb8e1-970f-4535-bec1-beb232f1f77a",
   "bId": "b1a0876c-0702-497d-95a4-5a8a894ff2d5"
  },
  {
   "a": "Sandro Stefanelli",
   "b": "Sandra Thompson",
   "team": "Bounce Malvern Boom",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1,
   "avgActual": -1,
   "avgExpected": -3.3,
   "aId": "1872d8d8-f958-4747-af3a-443d5f88a1c3",
   "bId": "9fc1b2e8-f3a2-4d1d-991f-1551bf05fb31"
  },
  {
   "a": "Michael Swell",
   "b": "Alice Napolitano",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1,
   "avgActual": 5.3,
   "avgExpected": 3.3,
   "aId": "5436acd1-542a-4ca5-a652-c0addcf23ea2",
   "bId": "d56483b8-a5b8-4c1f-8437-39fcf90a5030"
  },
  {
   "a": "Rebecca Lederman",
   "b": "Kelly Hanson Word",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1,
   "avgActual": 7,
   "avgExpected": 4.8,
   "aId": "cb324481-3d73-47c2-9cc0-a1e1650dd87f",
   "bId": "ecfbb129-ba7d-4b52-92b9-869fa7487248"
  },
  {
   "a": "Michael Dieterle",
   "b": "Stephanie Woomer",
   "team": "Bounce Malvern Black",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1,
   "avgActual": 6.7,
   "avgExpected": 4.4,
   "aId": "4259501c-f1e3-4859-acd0-c25f342a1b92",
   "bId": "e05f57f5-c898-404e-b86f-c2460cc23b06"
  },
  {
   "a": "Sandro Stefanelli",
   "b": "Chris Norton",
   "team": "Bounce Malvern Boom",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.9,
   "avgActual": -3.2,
   "avgExpected": -5,
   "aId": "1872d8d8-f958-4747-af3a-443d5f88a1c3",
   "bId": "395868e3-8573-41ad-9b13-84b6a7bf7f35"
  },
  {
   "a": "Alex Lee",
   "b": "Daniel Chernin",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 5.3,
   "avgExpected": 3.3,
   "aId": "22e2201d-16d7-4474-847b-5f4f0cef44e6",
   "bId": "9fc26554-f672-4501-9d2e-a8553fd79eaf"
  },
  {
   "a": "Chris Norton",
   "b": "Linda Zhu",
   "team": "Bounce Malvern Boom",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.9,
   "avgActual": -2,
   "avgExpected": -3.6,
   "aId": "395868e3-8573-41ad-9b13-84b6a7bf7f35",
   "bId": "fd596225-797e-4125-876b-633dae2efc65"
  },
  {
   "a": "Vicki Main",
   "b": "Tera Baccile",
   "team": "Bounce Malvern Black",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 6,
   "avgExpected": 4.2,
   "aId": "89bdcff6-2fba-4bde-b831-872bf9ce7843",
   "bId": "d5aa92c7-71df-47c7-84fb-6710e1ed81e2"
  },
  {
   "a": "Laura Sweet",
   "b": "Lisa Loeber",
   "team": "APC Garden State",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.8,
   "avgActual": -4.7,
   "avgExpected": -6.5,
   "aId": "7b7b29be-c4b7-4ca9-8fd9-77ec362e761b",
   "bId": "9e88e95a-d634-4484-8a3e-76e54b82a5fd"
  },
  {
   "a": "Eva Danieli",
   "b": "Sarah Nazario",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.7,
   "avgActual": 1.5,
   "avgExpected": 0.1,
   "aId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae",
   "bId": "d457bcf7-383d-4b25-a7a9-a456e5803087"
  },
  {
   "a": "Jorge Diaz",
   "b": "Amy Johnson",
   "team": "Flemington Blue",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 2.7,
   "avgExpected": 1.2,
   "aId": "5384ac1d-574b-4fe8-9360-010e903e9ec0",
   "bId": "74e493de-dca7-4bf2-b9ac-630484282502"
  },
  {
   "a": "Tom Zentmeyer",
   "b": "Thomas Ross",
   "team": "Pickle Place",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 6.7,
   "avgExpected": 5.2,
   "aId": "c16d16f0-3cc1-4c9d-8bfb-98615ffeaacd",
   "bId": "eab86a29-43ef-4b31-ba94-928f57f56c9c"
  },
  {
   "a": "Rui Zhang",
   "b": "Lei Dong",
   "team": "Stelton Sports",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 1.7,
   "avgExpected": 0.8,
   "aId": "c218d668-b78a-4726-b2df-fe7730a50963",
   "bId": "f9ac936e-7371-4ea9-8a97-7969635046fd"
  },
  {
   "a": "Alex Lee",
   "b": "Rebecca Lederman",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.6,
   "avgActual": 7.3,
   "avgExpected": 5.9,
   "aId": "22e2201d-16d7-4474-847b-5f4f0cef44e6",
   "bId": "cb324481-3d73-47c2-9cc0-a1e1650dd87f"
  },
  {
   "a": "Pam Boyd",
   "b": "Robert Finley",
   "team": "ACE Moorestown",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.6,
   "avgActual": 6.5,
   "avgExpected": 5.3,
   "aId": "04aefa29-20e3-41b7-a680-19d13f9d4289",
   "bId": "0d70122a-9002-461f-8600-a9afed2e8c3f"
  },
  {
   "a": "Marc Harden",
   "b": "Sandy Alkins",
   "team": "ACE Moorestown",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 8,
   "avgExpected": 6.9,
   "aId": "55194d2f-f537-4e19-b901-86c559f25ef2",
   "bId": "9c29c52b-9d2a-4a5f-b967-7bafd018446b"
  },
  {
   "a": "Robert Finley",
   "b": "Marc Harden",
   "team": "ACE Moorestown",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 7,
   "avgExpected": 6.1,
   "aId": "0d70122a-9002-461f-8600-a9afed2e8c3f",
   "bId": "55194d2f-f537-4e19-b901-86c559f25ef2"
  },
  {
   "a": "Jim Darcangelo",
   "b": "Michael Finkelstein",
   "team": "Bounce Malvern Black",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 3,
   "avgExpected": 1.7,
   "aId": "0530512b-466d-4ff7-9e89-7961b4a63110",
   "bId": "861c3f68-2c96-4a96-a75e-645020f73a5c"
  },
  {
   "a": "Michael Dombrowiecki",
   "b": "Amy Chrebet",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 4.3,
   "avgExpected": 3.2,
   "aId": "3ac34ef1-17a5-4ab6-8d17-be4bd5a0a040",
   "bId": "6f511e98-567a-4b33-8831-ed123f01f952"
  },
  {
   "a": "Liangang Liu",
   "b": "Lei Dong",
   "team": "Stelton Sports",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 4.2,
   "avgExpected": 3.4,
   "aId": "34618d40-6e62-4ab3-aa28-fc61c9ac1920",
   "bId": "f9ac936e-7371-4ea9-8a97-7969635046fd"
  },
  {
   "a": "Jennifer Qian",
   "b": "Shaoyi Sun",
   "team": "Stelton Sports",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 1.7,
   "avgExpected": 0.5,
   "aId": "902a9e2d-2ac4-4d19-9ae7-e945ece1da00",
   "bId": "fb20f45d-7f81-4d2a-a258-eede4cdec27b"
  },
  {
   "a": "Michael Dieterle",
   "b": "Derek Le",
   "team": "Bounce Malvern Black",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 3,
   "avgExpected": 2.1,
   "aId": "4259501c-f1e3-4859-acd0-c25f342a1b92",
   "bId": "8cf7b40c-ed2c-4c8b-83bd-b9f2d486c690"
  },
  {
   "a": "Evelyn Du",
   "b": "Ronnie Yin",
   "team": "Allstar Pickler",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 0.4,
   "avgActual": -6.7,
   "avgExpected": -7.5,
   "aId": "08547f36-c938-4f82-a783-9c89ab07500c",
   "bId": "988636eb-4604-44d6-af70-2732b787ec2a"
  },
  {
   "a": "John Darrah",
   "b": "Tom Kresky",
   "team": "APC Garden State",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.4,
   "avgActual": -1,
   "avgExpected": -1.8,
   "aId": "6c1eeebb-15d3-4e98-81e6-e3d1a0ae8a84",
   "bId": "81875a5e-2b65-4152-bace-b4c96517579d"
  },
  {
   "a": "David Mcintyre",
   "b": "Katrina Mcintyre",
   "team": "Flemington Green",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 1.3,
   "avgExpected": 0.5,
   "aId": "1f3700d5-63e4-495e-92c1-1248224ed61d",
   "bId": "eeead4e9-eec9-4cfc-887d-44222225d436"
  },
  {
   "a": "Amy Chrebet",
   "b": "Sarah Nazario",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 3.3,
   "avgExpected": 2.4,
   "aId": "6f511e98-567a-4b33-8831-ed123f01f952",
   "bId": "d457bcf7-383d-4b25-a7a9-a456e5803087"
  },
  {
   "a": "Mei Li",
   "b": "Lei Dong",
   "team": "Stelton Sports",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 1.8,
   "avgExpected": 1.2,
   "aId": "28330003-3125-4050-be9a-ddd726dccfe2",
   "bId": "f9ac936e-7371-4ea9-8a97-7969635046fd"
  },
  {
   "a": "Jonathan Brand",
   "b": "Marc Harden",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.3,
   "avgActual": 7.3,
   "avgExpected": 6.7,
   "aId": "3d1b28fd-25f4-4145-bccd-6b25ab627ffe",
   "bId": "55194d2f-f537-4e19-b901-86c559f25ef2"
  },
  {
   "a": "Tom Zentmeyer",
   "b": "Jay Rohatgi",
   "team": "Pickle Place",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 0.3,
   "avgActual": 7.4,
   "avgExpected": 6.8,
   "aId": "c16d16f0-3cc1-4c9d-8bfb-98615ffeaacd",
   "bId": "f5831f41-366b-4666-b780-448fc7971ad7"
  },
  {
   "a": "Jamila Sefiane",
   "b": "Lindsay Duphily",
   "team": "Bounce Malvern Boom",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 3.7,
   "avgExpected": 3,
   "aId": "c0851114-0611-4b02-9589-fd249179eabc",
   "bId": "de318a9b-7e48-41ed-ba22-e06fe8e1f894"
  },
  {
   "a": "Sandro Stefanelli",
   "b": "Jamila Sefiane",
   "team": "Bounce Malvern Boom",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 0,
   "avgExpected": -0.7,
   "aId": "1872d8d8-f958-4747-af3a-443d5f88a1c3",
   "bId": "c0851114-0611-4b02-9589-fd249179eabc"
  },
  {
   "a": "David Osborne",
   "b": "Christine Papa",
   "team": "Flemington Green",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 1.3,
   "avgExpected": 1.2,
   "aId": "418e7ba5-3e06-40ec-9b83-19d3bf10c9cb",
   "bId": "d156a552-7fa9-488e-9bfa-745feb859950"
  },
  {
   "a": "Michael Dombrowiecki",
   "b": "Michael Swell",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 1.3,
   "avgExpected": 1.2,
   "aId": "3ac34ef1-17a5-4ab6-8d17-be4bd5a0a040",
   "bId": "5436acd1-542a-4ca5-a652-c0addcf23ea2"
  },
  {
   "a": "Yi Gu",
   "b": "Lance Brown",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.1,
   "avgActual": -3,
   "avgExpected": -3.3,
   "aId": "0640ecce-0b14-4eac-9cbd-be86592d6102",
   "bId": "5d13288d-69fe-4d0b-bf69-51c1d24e3409"
  },
  {
   "a": "Chris Norton",
   "b": "Brett Kleger",
   "team": "Bounce Malvern Boom",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.1,
   "avgActual": -3,
   "avgExpected": -3.3,
   "aId": "395868e3-8573-41ad-9b13-84b6a7bf7f35",
   "bId": "5b11ac59-091a-46d3-beb5-2d65d5d77135"
  },
  {
   "a": "Marc Friedman",
   "b": "Tom Maley",
   "team": "Flemington Blue",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0,
   "avgActual": -2,
   "avgExpected": -2,
   "aId": "d7bdde76-1007-4b20-a804-4efcd08c3598",
   "bId": "e05f8bd0-e64b-42dd-b6a0-42249573b3f4"
  },
  {
   "a": "Kate Siedell",
   "b": "Sandy Alkins",
   "team": "ACE Moorestown",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0,
   "avgActual": 3.7,
   "avgExpected": 3.6,
   "aId": "8decf039-f1e5-4182-b3cf-6756789ae87a",
   "bId": "9c29c52b-9d2a-4a5f-b967-7bafd018446b"
  },
  {
   "a": "Robert Finley",
   "b": "Stacey Frank",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0,
   "avgActual": 1.3,
   "avgExpected": 1.3,
   "aId": "0d70122a-9002-461f-8600-a9afed2e8c3f",
   "bId": "768c88bd-683d-4204-8124-a589c8028b6e"
  },
  {
   "a": "Amy Chrebet",
   "b": "Alice Napolitano",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0,
   "avgActual": 2,
   "avgExpected": 2,
   "aId": "6f511e98-567a-4b33-8831-ed123f01f952",
   "bId": "d56483b8-a5b8-4c1f-8437-39fcf90a5030"
  },
  {
   "a": "John Darrah",
   "b": "Laura Sweet",
   "team": "APC Garden State",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.1,
   "avgActual": -3.5,
   "avgExpected": -3.3,
   "aId": "6c1eeebb-15d3-4e98-81e6-e3d1a0ae8a84",
   "bId": "7b7b29be-c4b7-4ca9-8fd9-77ec362e761b"
  },
  {
   "a": "Sandro Stefanelli",
   "b": "Christine Dugan",
   "team": "Bounce Malvern Boom",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 0.7,
   "avgExpected": 0.9,
   "aId": "1872d8d8-f958-4747-af3a-443d5f88a1c3",
   "bId": "213bd4a2-a13d-4540-b93e-69e1e9116ff8"
  },
  {
   "a": "Pam Boyd",
   "b": "Sandy Alkins",
   "team": "ACE Moorestown",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": -0.1,
   "avgActual": 5.3,
   "avgExpected": 5.4,
   "aId": "04aefa29-20e3-41b7-a680-19d13f9d4289",
   "bId": "9c29c52b-9d2a-4a5f-b967-7bafd018446b"
  },
  {
   "a": "Katherine Maruyama",
   "b": "Stephanie Woomer",
   "team": "Bounce Malvern Black",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 4.3,
   "avgExpected": 4.7,
   "aId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a",
   "bId": "e05f57f5-c898-404e-b86f-c2460cc23b06"
  },
  {
   "a": "Hal Golden",
   "b": "Jiang Jin",
   "team": "Bounce Malvern Boom",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.2,
   "avgActual": -5,
   "avgExpected": -4.5,
   "aId": "476c99a2-15e5-4e99-8471-7c2b6394faa3",
   "bId": "579cead3-d960-4c14-8905-8c17c70ca003"
  },
  {
   "a": "Sandro Stefanelli",
   "b": "Brett Kleger",
   "team": "Bounce Malvern Boom",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.2,
   "avgActual": -2,
   "avgExpected": -1.6,
   "aId": "1872d8d8-f958-4747-af3a-443d5f88a1c3",
   "bId": "5b11ac59-091a-46d3-beb5-2d65d5d77135"
  },
  {
   "a": "Liangang Liu",
   "b": "Ann Betterton",
   "team": "Stelton Sports",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.2,
   "avgActual": -0.4,
   "avgExpected": -0.1,
   "aId": "34618d40-6e62-4ab3-aa28-fc61c9ac1920",
   "bId": "abe02688-e77f-414b-9747-25f3bdc149c7"
  },
  {
   "a": "Picky Vorabouth",
   "b": "Liangjie Zhu",
   "team": "Allstar Pickler",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 0.7,
   "avgExpected": 1.2,
   "aId": "38336cb3-6ff4-4187-abe5-3f0a819d0a0d",
   "bId": "972856ec-207d-4f89-9d97-6fda7c0e083b"
  },
  {
   "a": "Christine Dugan",
   "b": "David Marchese",
   "team": "Bounce Malvern Boom",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.2,
   "avgActual": -1.7,
   "avgExpected": -1.1,
   "aId": "213bd4a2-a13d-4540-b93e-69e1e9116ff8",
   "bId": "aa802904-9a39-4b0e-ad2b-d1a1ea2fcc5b"
  },
  {
   "a": "Michael Dieterle",
   "b": "Tera Baccile",
   "team": "Bounce Malvern Black",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 3.3,
   "avgExpected": 3.7,
   "aId": "4259501c-f1e3-4859-acd0-c25f342a1b92",
   "bId": "d5aa92c7-71df-47c7-84fb-6710e1ed81e2"
  },
  {
   "a": "Stacey Frank",
   "b": "Kate Siedell",
   "team": "ACE Moorestown",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 2.8,
   "avgExpected": 3.4,
   "aId": "768c88bd-683d-4204-8124-a589c8028b6e",
   "bId": "8decf039-f1e5-4182-b3cf-6756789ae87a"
  },
  {
   "a": "Sandra Thompson",
   "b": "Jamila Sefiane",
   "team": "Bounce Malvern Boom",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.3,
   "avgActual": -3,
   "avgExpected": -2.2,
   "aId": "9fc1b2e8-f3a2-4d1d-991f-1551bf05fb31",
   "bId": "c0851114-0611-4b02-9589-fd249179eabc"
  },
  {
   "a": "Michael Dombrowiecki",
   "b": "Darren Saks",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.3,
   "avgActual": 6,
   "avgExpected": 6.8,
   "aId": "3ac34ef1-17a5-4ab6-8d17-be4bd5a0a040",
   "bId": "9bf7b8ab-4dfa-442b-be12-77580a5ea1dc"
  },
  {
   "a": "Mei Li",
   "b": "Jennifer Qian",
   "team": "Stelton Sports",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.3,
   "avgActual": -2.7,
   "avgExpected": -2.1,
   "aId": "28330003-3125-4050-be9a-ddd726dccfe2",
   "bId": "902a9e2d-2ac4-4d19-9ae7-e945ece1da00"
  },
  {
   "a": "Emil Pescatore",
   "b": "Karan Pescatore",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 0,
   "avgExpected": 0.7,
   "aId": "1c9b7abf-dae6-4e0d-a31d-485e99a01fec",
   "bId": "2cb4b2dd-d14b-4bab-a8be-ef4b14845711"
  },
  {
   "a": "Michael Dieterle",
   "b": "Michael Finkelstein",
   "team": "Bounce Malvern Black",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 1.7,
   "avgExpected": 2.4,
   "aId": "4259501c-f1e3-4859-acd0-c25f342a1b92",
   "bId": "861c3f68-2c96-4a96-a75e-645020f73a5c"
  },
  {
   "a": "Tera Baccile",
   "b": "Stephanie Woomer",
   "team": "Bounce Malvern Black",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": -0.4,
   "avgActual": 4.6,
   "avgExpected": 5.4,
   "aId": "d5aa92c7-71df-47c7-84fb-6710e1ed81e2",
   "bId": "e05f57f5-c898-404e-b86f-c2460cc23b06"
  },
  {
   "a": "John Darrah",
   "b": "Jiyun Yuh",
   "team": "APC Garden State",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.4,
   "avgActual": -4,
   "avgExpected": -3.2,
   "aId": "6c1eeebb-15d3-4e98-81e6-e3d1a0ae8a84",
   "bId": "c94ae231-9f0c-4212-b769-7bd708d8fc38"
  },
  {
   "a": "Christine Dugan",
   "b": "Hal Golden",
   "team": "Bounce Malvern Boom",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.4,
   "avgActual": -2.3,
   "avgExpected": -1.3,
   "aId": "213bd4a2-a13d-4540-b93e-69e1e9116ff8",
   "bId": "476c99a2-15e5-4e99-8471-7c2b6394faa3"
  },
  {
   "a": "Chris Norton",
   "b": "Jamila Sefiane",
   "team": "Bounce Malvern Boom",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.4,
   "avgActual": -4,
   "avgExpected": -3.1,
   "aId": "395868e3-8573-41ad-9b13-84b6a7bf7f35",
   "bId": "c0851114-0611-4b02-9589-fd249179eabc"
  },
  {
   "a": "Carly Pfeffer",
   "b": "Rebecca Lederman",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.4,
   "avgActual": 5,
   "avgExpected": 6,
   "aId": "387e74d4-66ee-4a52-a4ac-aae3dbe1d21b",
   "bId": "cb324481-3d73-47c2-9cc0-a1e1650dd87f"
  },
  {
   "a": "Michael Finkelstein",
   "b": "Vicki Main",
   "team": "Bounce Malvern Black",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.4,
   "avgActual": 3,
   "avgExpected": 3.9,
   "aId": "861c3f68-2c96-4a96-a75e-645020f73a5c",
   "bId": "89bdcff6-2fba-4bde-b831-872bf9ce7843"
  },
  {
   "a": "Vicki Main",
   "b": "Stephanie Woomer",
   "team": "Bounce Malvern Black",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.5,
   "avgActual": 3.7,
   "avgExpected": 4.9,
   "aId": "89bdcff6-2fba-4bde-b831-872bf9ce7843",
   "bId": "e05f57f5-c898-404e-b86f-c2460cc23b06"
  },
  {
   "a": "Michael Finkelstein",
   "b": "Stephanie Woomer",
   "team": "Bounce Malvern Black",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.6,
   "avgActual": 1,
   "avgExpected": 2,
   "aId": "861c3f68-2c96-4a96-a75e-645020f73a5c",
   "bId": "e05f57f5-c898-404e-b86f-c2460cc23b06"
  },
  {
   "a": "Susan Ackley",
   "b": "Carol Mastroianni",
   "team": "Flemington Blue",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": -0.6,
   "avgActual": 3.3,
   "avgExpected": 4.5,
   "aId": "07a0e948-6308-4920-a6a8-1d5945552ecb",
   "bId": "7f851011-9322-43f9-aff2-754565a615c7"
  },
  {
   "a": "Mengchu Zhou",
   "b": "Jim Peng",
   "team": "Stelton Sports",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -3.3,
   "avgExpected": -2,
   "aId": "14fc7872-1e6f-419e-adcb-d8e63826a37d",
   "bId": "eddc4924-517f-46ac-9827-935983daa9db"
  },
  {
   "a": "Robert Finley",
   "b": "Patricia Boyle",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.7,
   "avgActual": 0.3,
   "avgExpected": 2,
   "aId": "0d70122a-9002-461f-8600-a9afed2e8c3f",
   "bId": "9fca325b-c7aa-493e-bd24-a4b782073699"
  },
  {
   "a": "Sandra Thompson",
   "b": "Linda Zhu",
   "team": "Bounce Malvern Boom",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -6.2,
   "avgExpected": -4.9,
   "aId": "9fc1b2e8-f3a2-4d1d-991f-1551bf05fb31",
   "bId": "fd596225-797e-4125-876b-633dae2efc65"
  },
  {
   "a": "Liangjie Zhu",
   "b": "Ronnie Yin",
   "team": "Allstar Pickler",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -4.2,
   "avgExpected": -2.8,
   "aId": "972856ec-207d-4f89-9d97-6fda7c0e083b",
   "bId": "988636eb-4604-44d6-af70-2732b787ec2a"
  },
  {
   "a": "Susan Ackley",
   "b": "Amy Johnson",
   "team": "Flemington Blue",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.8,
   "avgActual": 0.7,
   "avgExpected": 2.6,
   "aId": "07a0e948-6308-4920-a6a8-1d5945552ecb",
   "bId": "74e493de-dca7-4bf2-b9ac-630484282502"
  },
  {
   "a": "Michael Dombrowiecki",
   "b": "Sarah Nazario",
   "team": "Jersey Pickleball Club",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.9,
   "avgActual": -1,
   "avgExpected": 0.6,
   "aId": "3ac34ef1-17a5-4ab6-8d17-be4bd5a0a040",
   "bId": "d457bcf7-383d-4b25-a7a9-a456e5803087"
  },
  {
   "a": "Liangang Liu",
   "b": "Jennifer Qian",
   "team": "Stelton Sports",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.9,
   "avgActual": -3,
   "avgExpected": -1.5,
   "aId": "34618d40-6e62-4ab3-aa28-fc61c9ac1920",
   "bId": "902a9e2d-2ac4-4d19-9ae7-e945ece1da00"
  },
  {
   "a": "Todd Gasparre",
   "b": "Sarah Nazario",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1,
   "avgActual": -2.7,
   "avgExpected": -0.3,
   "aId": "9f205d60-6056-482a-bcca-3dfdbacf1e8d",
   "bId": "d457bcf7-383d-4b25-a7a9-a456e5803087"
  },
  {
   "a": "Laura Sweet",
   "b": "Tom Kresky",
   "team": "APC Garden State",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -6,
   "avgExpected": -3.4,
   "aId": "7b7b29be-c4b7-4ca9-8fd9-77ec362e761b",
   "bId": "81875a5e-2b65-4152-bace-b4c96517579d"
  },
  {
   "a": "Eva Danieli",
   "b": "Alice Napolitano",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -3,
   "avgExpected": -0.7,
   "aId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae",
   "bId": "d56483b8-a5b8-4c1f-8437-39fcf90a5030"
  },
  {
   "a": "Ann Betterton",
   "b": "Rui Zhang",
   "team": "Stelton Sports",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -4,
   "avgExpected": -1.4,
   "aId": "abe02688-e77f-414b-9747-25f3bdc149c7",
   "bId": "c218d668-b78a-4726-b2df-fe7730a50963"
  },
  {
   "a": "Jorge Diaz",
   "b": "Art Muth",
   "team": "Flemington Blue",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.3,
   "avgActual": -5,
   "avgExpected": -2,
   "aId": "5384ac1d-574b-4fe8-9360-010e903e9ec0",
   "bId": "6bfc3a49-53cb-4c03-b8cb-94552158ccbe"
  },
  {
   "a": "Jonathan Brand",
   "b": "Kate Siedell",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.4,
   "avgActual": 0.3,
   "avgExpected": 3.5,
   "aId": "3d1b28fd-25f4-4145-bccd-6b25ab627ffe",
   "bId": "8decf039-f1e5-4182-b3cf-6756789ae87a"
  },
  {
   "a": "Erika Simone",
   "b": "Jim Darcangelo",
   "team": "Bounce Malvern Black",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.7,
   "avgActual": -0.3,
   "avgExpected": 3.6,
   "aId": "04f98aa6-f69e-462c-9a13-4060a3072922",
   "bId": "0530512b-466d-4ff7-9e89-7961b4a63110"
  },
  {
   "a": "Derek Le",
   "b": "Tera Baccile",
   "team": "Bounce Malvern Black",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.8,
   "avgActual": -6.7,
   "avgExpected": -2.4,
   "aId": "8cf7b40c-ed2c-4c8b-83bd-b9f2d486c690",
   "bId": "d5aa92c7-71df-47c7-84fb-6710e1ed81e2"
  },
  {
   "a": "Christine Dugan",
   "b": "Sandra Thompson",
   "team": "Bounce Malvern Boom",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -2.3,
   "avgActual": -6.7,
   "avgExpected": -1.3,
   "aId": "213bd4a2-a13d-4540-b93e-69e1e9116ff8",
   "bId": "9fc1b2e8-f3a2-4d1d-991f-1551bf05fb31"
  }
 ],
 "matches": [
  {
   "result": "home",
   "week": 1,
   "home": "Flemington Blue",
   "away": "Allstar Pickler",
   "time": "2026-08-22T12:00:00",
   "complete": true,
   "homePoints": 483,
   "awayPoints": 426,
   "homeGW": 24,
   "awayGW": 8,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Susan Ackley",
      "Tom Maley"
     ],
     "a": [
      "Evelyn Du",
      "Liangjie Zhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Chaoxia Cheng",
      "Marc Friedman"
     ],
     "a": [
      "Ronnie Yin",
      "Sachin Pathare"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Amy Johnson",
      "Jorge Diaz"
     ],
     "a": [
      "Savita Nandal",
      "Brandon Fulford"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Sue Johnson",
      "Art Muth"
     ],
     "a": [
      "",
      "Bart Allgeier"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Susan Ackley",
      "Chaoxia Cheng"
     ],
     "a": [
      "Evelyn Du",
      "Ronnie Yin"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Amy Johnson",
      "Sue Johnson"
     ],
     "a": [
      "Savita Nandal",
      ""
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Marc Friedman",
      "Tom Maley"
     ],
     "a": [
      "Liangjie Zhu",
      "Sachin Pathare"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Bill Brandt",
      "Art Muth"
     ],
     "a": [
      "Bart Allgeier",
      "John Zhong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Susan Ackley",
      "Marc Friedman"
     ],
     "a": [
      "Evelyn Du",
      "Liangjie Zhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Chaoxia Cheng",
      "Tom Maley"
     ],
     "a": [
      "Ronnie Yin",
      "Sachin Pathare"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Amy Johnson",
      "Bill Brandt"
     ],
     "a": [
      "Savita Nandal",
      "Bart Allgeier"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Sue Johnson",
      "Jorge Diaz"
     ],
     "a": [
      "",
      "Brandon Fulford"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Chaoxia Cheng",
      "Susan Ackley"
     ],
     "a": [
      "Evelyn Du",
      "Ronnie Yin"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Amy Johnson",
      "Sue Johnson"
     ],
     "a": [
      "Savita Nandal",
      ""
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Bill Brandt",
      "Art Muth"
     ],
     "a": [
      "Liangjie Zhu",
      "John Zhong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jorge Diaz",
      "Marc Friedman"
     ],
     "a": [
      "Sachin Pathare",
      "Brandon Fulford"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Susan Ackley",
      "Tom Maley"
     ],
     "a": [
      "Ronnie Yin",
      "Liangjie Zhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Chaoxia Cheng",
      "Marc Friedman"
     ],
     "a": [
      "Evelyn Du",
      "Brandon Fulford"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Amy Johnson",
      "Bill Brandt"
     ],
     "a": [
      "Savita Nandal",
      "Sachin Pathare"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Sue Johnson",
      "Art Muth"
     ],
     "a": [
      "",
      "Bart Allgeier"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Susan Ackley",
      "Amy Johnson"
     ],
     "a": [
      "Evelyn Du",
      "Savita Nandal"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Sue Johnson",
      "Chaoxia Cheng"
     ],
     "a": [
      "Ronnie Yin",
      ""
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Tom Maley",
      "Jorge Diaz"
     ],
     "a": [
      "Liangjie Zhu",
      "Sachin Pathare"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Bill Brandt",
      "Marc Friedman"
     ],
     "a": [
      "Brandon Fulford",
      "Bart Allgeier"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Susan Ackley",
      "Bill Brandt"
     ],
     "a": [
      "Savita Nandal",
      "Liangjie Zhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Chaoxia Cheng",
      "Tom Maley"
     ],
     "a": [
      "Evelyn Du",
      "Sachin Pathare"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Amy Johnson",
      "Art Muth"
     ],
     "a": [
      "Ronnie Yin",
      "Brandon Fulford"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Sue Johnson",
      "Jorge Diaz"
     ],
     "a": [
      "",
      "Bart Allgeier"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Susan Ackley",
      "Sue Johnson"
     ],
     "a": [
      "Savita Nandal",
      "Ronnie Yin"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Amy Johnson",
      "Chaoxia Cheng"
     ],
     "a": [
      "Evelyn Du",
      ""
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jorge Diaz",
      "Art Muth"
     ],
     "a": [
      "Liangjie Zhu",
      "Brandon Fulford"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Tom Maley",
      "Marc Friedman"
     ],
     "a": [
      "Bart Allgeier",
      "John Zhong"
     ]
    }
   ],
   "subs": [
    "Bart Allgeier",
    "Sachin Pathare"
   ]
  },
  {
   "result": "home",
   "week": 1,
   "home": "ACE Moorestown",
   "away": "Bounce Malvern Black",
   "time": "2026-08-22T14:00:00",
   "complete": true,
   "homePoints": 656,
   "awayPoints": 582,
   "homeGW": 21,
   "awayGW": 11,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Kate Siedell",
      "Brian Rowan"
     ],
     "a": [
      "Harriet Levin",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Sandy Alkins",
      "Marc Harden"
     ],
     "a": [
      "Tera Baccile",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Stacey Frank",
      "Jonathan Brand"
     ],
     "a": [
      "Katherine Maruyama",
      "John Morabito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Patricia Boyle",
      "Robert Finley"
     ],
     "a": [
      "Jill Scully",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kate Siedell",
      "Sandy Alkins"
     ],
     "a": [
      "Tera Baccile",
      "Harriet Levin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Patricia Boyle",
      "Stacey Frank"
     ],
     "a": [
      "Stephanie Woomer",
      "Jill Scully"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Marc Harden",
      "Robert Finley"
     ],
     "a": [
      "Jim Darcangelo",
      "Derek Le"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Brian Rowan",
      "Jonathan Brand"
     ],
     "a": [
      "Michael Finkelstein",
      "John Morabito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Sandy Alkins",
      "Jonathan Brand"
     ],
     "a": [
      "Katherine Maruyama",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Kate Siedell",
      "Marc Harden"
     ],
     "a": [
      "Stephanie Woomer",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Patricia Boyle",
      "Robert Finley"
     ],
     "a": [
      "Tera Baccile",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Stacey Frank",
      "Brian Rowan"
     ],
     "a": [
      "Harriet Levin",
      "John Morabito"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Patricia Boyle",
      "Stacey Frank"
     ],
     "a": [
      "Jill Scully",
      "Stephanie Woomer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Sandy Alkins",
      "Kate Siedell"
     ],
     "a": [
      "Harriet Levin",
      "Katherine Maruyama"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Marc Harden",
      "Brian Rowan"
     ],
     "a": [
      "Derek Le",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jonathan Brand",
      "Robert Finley"
     ],
     "a": [
      "John Morabito",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Patricia Boyle",
      "Brian Rowan"
     ],
     "a": [
      "Tera Baccile",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kate Siedell",
      "Jonathan Brand"
     ],
     "a": [
      "Katherine Maruyama",
      "John Morabito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Stacey Frank",
      "Robert Finley"
     ],
     "a": [
      "Stephanie Woomer",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Sandy Alkins",
      "Marc Harden"
     ],
     "a": [
      "Jill Scully",
      "Derek Le"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Stacey Frank",
      "Kate Siedell"
     ],
     "a": [
      "Tera Baccile",
      "Harriet Levin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Patricia Boyle",
      "Sandy Alkins"
     ],
     "a": [
      "Katherine Maruyama",
      "Jill Scully"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jonathan Brand",
      "Marc Harden"
     ],
     "a": [
      "Jim Darcangelo",
      "Derek Le"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Robert Finley",
      "Brian Rowan"
     ],
     "a": [
      "John Morabito",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Sandy Alkins",
      "Brian Rowan"
     ],
     "a": [
      "Harriet Levin",
      "John Morabito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Stacey Frank",
      "Robert Finley"
     ],
     "a": [
      "Tera Baccile",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Patricia Boyle",
      "Jonathan Brand"
     ],
     "a": [
      "Stephanie Woomer",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Kate Siedell",
      "Marc Harden"
     ],
     "a": [
      "Jill Scully",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Patricia Boyle",
      "Sandy Alkins"
     ],
     "a": [
      "Tera Baccile",
      "Stephanie Woomer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Stacey Frank",
      "Kate Siedell"
     ],
     "a": [
      "Harriet Levin",
      "Katherine Maruyama"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Brian Rowan",
      "Marc Harden"
     ],
     "a": [
      "Michael Finkelstein",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jonathan Brand",
      "Robert Finley"
     ],
     "a": [
      "Derek Le",
      "John Morabito"
     ]
    }
   ],
   "subs": [
    "Brian Rowan"
   ]
  },
  {
   "result": "home",
   "week": 1,
   "home": "Pickle Place",
   "away": "APC Garden State",
   "time": "2026-08-22T14:00:00",
   "complete": true,
   "homePoints": 668,
   "awayPoints": 493,
   "homeGW": 29,
   "awayGW": 3,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Gina Pultorak",
      "Jay Rohatgi"
     ],
     "a": [
      "Cynthia Covie",
      "Derek Livingston"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Karen Moliver",
      "Tom Zentmeyer"
     ],
     "a": [
      "Kelly Dalsey",
      "Tim Bruno"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Janet Garrity",
      "Robert Block"
     ],
     "a": [
      "Jiyun Yuh",
      "John Darrah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jane Meng",
      "Guy Judkowski"
     ],
     "a": [
      "Laura Sweet",
      "Tom Kresky"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Janine Forrest",
      "Karen Moliver"
     ],
     "a": [
      "Kelly Dalsey",
      "Laura Sweet"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Jane Meng",
      "Gina Pultorak"
     ],
     "a": [
      "Cynthia Covie",
      "Jiyun Yuh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Robert Block",
      "Thomas Ross"
     ],
     "a": [
      "John Darrah",
      "Tom Kresky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jay Rohatgi",
      "Tom Zentmeyer"
     ],
     "a": [
      "Tim Bruno",
      "Stepan Nevshehirlian"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Janet Garrity",
      "Guy Judkowski"
     ],
     "a": [
      "Cynthia Covie",
      "Stepan Nevshehirlian"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Janine Forrest",
      "Robert Block"
     ],
     "a": [
      "Kelly Dalsey",
      "Derek Livingston"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jane Meng",
      "Thomas Ross"
     ],
     "a": [
      "Jiyun Yuh",
      "Tim Bruno"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Gina Pultorak",
      "Tom Zentmeyer"
     ],
     "a": [
      "Laura Sweet",
      "John Darrah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Janine Forrest",
      "Karen Moliver"
     ],
     "a": [
      "Cynthia Covie",
      "Laura Sweet"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Gina Pultorak",
      "Janet Garrity"
     ],
     "a": [
      "Kelly Dalsey",
      "Jiyun Yuh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Thomas Ross",
      "Tom Zentmeyer"
     ],
     "a": [
      "Derek Livingston",
      "Stepan Nevshehirlian"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Guy Judkowski",
      "Jay Rohatgi"
     ],
     "a": [
      "John Darrah",
      "Tom Kresky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Karen Moliver",
      "Guy Judkowski"
     ],
     "a": [
      "Laura Sweet",
      "John Darrah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Janine Forrest",
      "Jay Rohatgi"
     ],
     "a": [
      "Jiyun Yuh",
      "Tim Bruno"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jane Meng",
      "Robert Block"
     ],
     "a": [
      "Cynthia Covie",
      "Tom Kresky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Gina Pultorak",
      "Thomas Ross"
     ],
     "a": [
      "Kelly Dalsey",
      "Stepan Nevshehirlian"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Janine Forrest",
      "Jane Meng"
     ],
     "a": [
      "Laura Sweet",
      "Jiyun Yuh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Janet Garrity",
      "Karen Moliver"
     ],
     "a": [
      "Cynthia Covie",
      "Kelly Dalsey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jay Rohatgi",
      "Robert Block"
     ],
     "a": [
      "Tim Bruno",
      "Tom Kresky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Guy Judkowski",
      "Tom Zentmeyer"
     ],
     "a": [
      "Derek Livingston",
      "Stepan Nevshehirlian"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Jane Meng",
      "Jay Rohatgi"
     ],
     "a": [
      "Laura Sweet",
      "Derek Livingston"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Karen Moliver",
      "Tom Zentmeyer"
     ],
     "a": [
      "Cynthia Covie",
      "Tim Bruno"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Janet Garrity",
      "Thomas Ross"
     ],
     "a": [
      "Jiyun Yuh",
      "John Darrah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Gina Pultorak",
      "Robert Block"
     ],
     "a": [
      "Kelly Dalsey",
      "Tom Kresky"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Gina Pultorak",
      "Karen Moliver"
     ],
     "a": [
      "Laura Sweet",
      "Kelly Dalsey"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jane Meng",
      "Janet Garrity"
     ],
     "a": [
      "Cynthia Covie",
      "Jiyun Yuh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Guy Judkowski",
      "Thomas Ross"
     ],
     "a": [
      "Derek Livingston",
      "Tim Bruno"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jay Rohatgi",
      "Tom Zentmeyer"
     ],
     "a": [
      "Stepan Nevshehirlian",
      "John Darrah"
     ]
    }
   ],
   "subs": [
    "Gina Pultorak",
    "Karen Moliver"
   ]
  },
  {
   "result": "away",
   "week": 1,
   "home": "Bounce Malvern Boom",
   "away": "Flemington Green",
   "time": "2026-08-22T14:00:00",
   "complete": true,
   "homePoints": 585,
   "awayPoints": 644,
   "homeGW": 13,
   "awayGW": 19,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Lindsay Duphily",
      "Chris Norton"
     ],
     "a": [
      "Katrina Mcintyre",
      "David Mcintyre"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Cindy Hu",
      "Sandro Stefanelli"
     ],
     "a": [
      "Denise Richmond",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sandra Thompson",
      "Jiang Jin"
     ],
     "a": [
      "Christine Papa",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Christine Dugan",
      "Hal Golden"
     ],
     "a": [
      "Kristen Soucie",
      "Richard Demeuse"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sandra Thompson",
      "Jamila Sefiane"
     ],
     "a": [
      "Katrina Mcintyre",
      "Denise Richmond"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Lindsay Duphily",
      "Christine Dugan"
     ],
     "a": [
      "Christine Papa",
      "Kristen Soucie"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Hal Golden",
      "Jiang Jin"
     ],
     "a": [
      "Eric Luque",
      "David Osborne"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Sandro Stefanelli",
      "Brett Kleger"
     ],
     "a": [
      "Craig Batten",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 27,
     "as": 29,
     "h": [
      "Cindy Hu",
      "Hal Golden"
     ],
     "a": [
      "Katrina Mcintyre",
      "David Mcintyre"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lindsay Duphily",
      "Brett Kleger"
     ],
     "a": [
      "Christine Papa",
      "Craig Batten"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jamila Sefiane",
      "Chris Norton"
     ],
     "a": [
      "Kristen Soucie",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Christine Dugan",
      "Sandro Stefanelli"
     ],
     "a": [
      "Denise Richmond",
      "Eric Luque"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Cindy Hu",
      "Sandra Thompson"
     ],
     "a": [
      "Katrina Mcintyre",
      "Kristen Soucie"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lindsay Duphily",
      "Jamila Sefiane"
     ],
     "a": [
      "Christine Papa",
      "Denise Richmond"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Hal Golden",
      "Sandro Stefanelli"
     ],
     "a": [
      "Craig Batten",
      "David Osborne"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jiang Jin",
      "Chris Norton"
     ],
     "a": [
      "Richard Demeuse",
      "David Mcintyre"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Christine Dugan",
      "Hal Golden"
     ],
     "a": [
      "Denise Richmond",
      "David Mcintyre"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Sandra Thompson",
      "Brett Kleger"
     ],
     "a": [
      "Kristen Soucie",
      "Craig Batten"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jamila Sefiane",
      "Sandro Stefanelli"
     ],
     "a": [
      "Katrina Mcintyre",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Cindy Hu",
      "Jiang Jin"
     ],
     "a": [
      "Christine Papa",
      "Richard Demeuse"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Christine Dugan",
      "Sandra Thompson"
     ],
     "a": [
      "Katrina Mcintyre",
      "Christine Papa"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 27,
     "as": 29,
     "h": [
      "Lindsay Duphily",
      "Cindy Hu"
     ],
     "a": [
      "Denise Richmond",
      "Kristen Soucie"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Hal Golden",
      "Chris Norton"
     ],
     "a": [
      "David Osborne",
      "Richard Demeuse"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jiang Jin",
      "Brett Kleger"
     ],
     "a": [
      "Craig Batten",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Sandra Thompson",
      "Sandro Stefanelli"
     ],
     "a": [
      "Denise Richmond",
      "David Mcintyre"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Lindsay Duphily",
      "Jiang Jin"
     ],
     "a": [
      "Katrina Mcintyre",
      "Craig Batten"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Cindy Hu",
      "Brett Kleger"
     ],
     "a": [
      "Kristen Soucie",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Jamila Sefiane",
      "Chris Norton"
     ],
     "a": [
      "Christine Papa",
      "David Osborne"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lindsay Duphily",
      "Cindy Hu"
     ],
     "a": [
      "Christine Papa",
      "Kristen Soucie"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Christine Dugan",
      "Jamila Sefiane"
     ],
     "a": [
      "Katrina Mcintyre",
      "Denise Richmond"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Chris Norton",
      "Sandro Stefanelli"
     ],
     "a": [
      "Eric Luque",
      "David Osborne"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Hal Golden",
      "Brett Kleger"
     ],
     "a": [
      "Richard Demeuse",
      "David Mcintyre"
     ]
    }
   ],
   "subs": [
    "David Mcintyre"
   ]
  },
  {
   "result": "away",
   "week": 2,
   "home": "Premiere",
   "away": "Jersey Pickleball Club",
   "time": "2026-08-29T10:00:00",
   "complete": true,
   "homePoints": 437,
   "awayPoints": 673,
   "homeGW": 4,
   "awayGW": 28,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Quen Koon Ng",
      "John Ficarra"
     ],
     "a": [
      "Alice Napolitano",
      "Michael Swell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Lily Liu",
      "Steve Gerwer"
     ],
     "a": [
      "Sarah Nazario",
      "Gary Sidhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Tara Lombardo",
      "James Gross"
     ],
     "a": [
      "Eva Danieli",
      "Yi Gu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Hayley Yandoli",
      "Sal Frangipane"
     ],
     "a": [
      "Amy Chrebet",
      "Darren Saks"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Hayley Yandoli",
      "Tara Lombardo"
     ],
     "a": [
      "Alice Napolitano",
      "Amy Chrebet"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Lily Liu",
      "Nancy Lin"
     ],
     "a": [
      "Eva Danieli",
      "Sarah Nazario"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Steve Gerwer",
      "Sal Frangipane"
     ],
     "a": [
      "Michael Swell",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "James Gross",
      "Erik Lombardo"
     ],
     "a": [
      "Yi Gu",
      "Darren Saks"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Hayley Yandoli",
      "Steve Gerwer"
     ],
     "a": [
      "Alice Napolitano",
      "Gary Sidhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Lily Liu",
      "Sal Frangipane"
     ],
     "a": [
      "Sarah Nazario",
      "Michael Swell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Nancy Lin",
      "John Ficarra"
     ],
     "a": [
      "Eva Danieli",
      "Darren Saks"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Quen Koon Ng",
      "Erik Lombardo"
     ],
     "a": [
      "Amy Chrebet",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Tara Lombardo",
      "Quen Koon Ng"
     ],
     "a": [
      "Alice Napolitano",
      "Eva Danieli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 29,
     "as": 27,
     "h": [
      "Lily Liu",
      "Nancy Lin"
     ],
     "a": [
      "Amy Chrebet",
      "Sarah Nazario"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "James Gross",
      "John Ficarra"
     ],
     "a": [
      "Michael Swell",
      "Gary Sidhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Sal Frangipane",
      "Erik Lombardo"
     ],
     "a": [
      "Michael Dombrowiecki",
      "Darren Saks"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Nancy Lin",
      "Steve Gerwer"
     ],
     "a": [
      "Alice Napolitano",
      "Michael Swell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Hayley Yandoli",
      "James Gross"
     ],
     "a": [
      "Sarah Nazario",
      "Gary Sidhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Tara Lombardo",
      "Erik Lombardo"
     ],
     "a": [
      "Eva Danieli",
      "Yi Gu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Lily Liu",
      "John Ficarra"
     ],
     "a": [
      "Amy Chrebet",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lily Liu",
      "Tara Lombardo"
     ],
     "a": [
      "Alice Napolitano",
      "Amy Chrebet"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Hayley Yandoli",
      "Quen Koon Ng"
     ],
     "a": [
      "Eva Danieli",
      "Sarah Nazario"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Steve Gerwer",
      "John Ficarra"
     ],
     "a": [
      "Yi Gu",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Sal Frangipane",
      "James Gross"
     ],
     "a": [
      "Darren Saks",
      "Gary Sidhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Quen Koon Ng",
      "James Gross"
     ],
     "a": [
      "Alice Napolitano",
      "Gary Sidhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Nancy Lin",
      "Sal Frangipane"
     ],
     "a": [
      "Sarah Nazario",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Tara Lombardo",
      "Steve Gerwer"
     ],
     "a": [
      "Eva Danieli",
      "Darren Saks"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Hayley Yandoli",
      "Erik Lombardo"
     ],
     "a": [
      "Amy Chrebet",
      "Yi Gu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Lily Liu",
      "Hayley Yandoli"
     ],
     "a": [
      "Alice Napolitano",
      "Eva Danieli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Quen Koon Ng",
      "Nancy Lin"
     ],
     "a": [
      "Amy Chrebet",
      "Sarah Nazario"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Sal Frangipane",
      "John Ficarra"
     ],
     "a": [
      "Yi Gu",
      "Gary Sidhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Steve Gerwer",
      "Erik Lombardo"
     ],
     "a": [
      "Darren Saks",
      "Michael Dombrowiecki"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 2,
   "home": "Flemington Blue",
   "away": "Stelton Sports",
   "time": "2026-08-29T12:00:00",
   "complete": true,
   "homePoints": 626,
   "awayPoints": 595,
   "homeGW": 20,
   "awayGW": 12,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Susan Ackley",
      "Simon Perry"
     ],
     "a": [
      "Jennifer Qian",
      "Liangang Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Carol Mastroianni",
      "Tom Maley"
     ],
     "a": [
      "Mei Li",
      "Lei Dong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Roseann Catania",
      "Marc Friedman"
     ],
     "a": [
      "Rui Zhang",
      "Mengchu Zhou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sue Johnson",
      "Art Muth"
     ],
     "a": [
      "Ann Betterton",
      "Jay Zeng"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Susan Ackley",
      "Carol Mastroianni"
     ],
     "a": [
      "Jennifer Qian",
      "Mei Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Amy Johnson",
      "Sue Johnson"
     ],
     "a": [
      "June Lee",
      "Ping Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Simon Perry",
      "Tom Maley"
     ],
     "a": [
      "Jay Zeng",
      "Jim Peng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Marc Friedman",
      "Jorge Diaz"
     ],
     "a": [
      "Lei Dong",
      "Mengchu Zhou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Susan Ackley",
      "Simon Perry"
     ],
     "a": [
      "Ann Betterton",
      "Liangang Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Roseann Catania",
      "Marc Friedman"
     ],
     "a": [
      "Mei Li",
      "Mengchu Zhou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sue Johnson",
      "Art Muth"
     ],
     "a": [
      "Rui Zhang",
      "Lei Dong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Amy Johnson",
      "Jorge Diaz"
     ],
     "a": [
      "Ping Yang",
      "Jim Peng"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Susan Ackley",
      "Carol Mastroianni"
     ],
     "a": [
      "Rui Zhang",
      "June Lee"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Roseann Catania",
      "Sue Johnson"
     ],
     "a": [
      "Mei Li",
      "Ping Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Simon Perry",
      "Tom Maley"
     ],
     "a": [
      "Jay Zeng",
      "Jim Peng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Art Muth",
      "Marc Friedman"
     ],
     "a": [
      "Lei Dong",
      "Liangang Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Susan Ackley",
      "Tom Maley"
     ],
     "a": [
      "Jennifer Qian",
      "Liangang Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Carol Mastroianni",
      "Simon Perry"
     ],
     "a": [
      "Mei Li",
      "Jay Zeng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Amy Johnson",
      "Jorge Diaz"
     ],
     "a": [
      "Rui Zhang",
      "Lei Dong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sue Johnson",
      "Marc Friedman"
     ],
     "a": [
      "Ann Betterton",
      "Jim Peng"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Susan Ackley",
      "Amy Johnson"
     ],
     "a": [
      "June Lee",
      "Jennifer Qian"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Roseann Catania",
      "Carol Mastroianni"
     ],
     "a": [
      "Rui Zhang",
      "Ann Betterton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Tom Maley",
      "Marc Friedman"
     ],
     "a": [
      "Jay Zeng",
      "Mengchu Zhou"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Art Muth",
      "Jorge Diaz"
     ],
     "a": [
      "Jim Peng",
      "Liangang Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Carol Mastroianni",
      "Simon Perry"
     ],
     "a": [
      "Ann Betterton",
      "Liangang Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Amy Johnson",
      "Tom Maley"
     ],
     "a": [
      "Mei Li",
      "Lei Dong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sue Johnson",
      "Jorge Diaz"
     ],
     "a": [
      "Ping Yang",
      "Mengchu Zhou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Roseann Catania",
      "Art Muth"
     ],
     "a": [
      "June Lee",
      "Jay Zeng"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Susan Ackley",
      "Amy Johnson"
     ],
     "a": [
      "June Lee",
      "Ping Yang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Roseann Catania",
      "Carol Mastroianni"
     ],
     "a": [
      "Jennifer Qian",
      "Rui Zhang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Simon Perry",
      "Marc Friedman"
     ],
     "a": [
      "Jim Peng",
      "Mengchu Zhou"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Art Muth",
      "Jorge Diaz"
     ],
     "a": [
      "Lei Dong",
      "Liangang Liu"
     ]
    }
   ],
   "subs": [
    "Roseann Catania"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Pickleball Palace",
   "away": "Allstar Pickler",
   "time": "2026-08-29T12:00:00",
   "complete": true,
   "homePoints": 654,
   "awayPoints": 523,
   "homeGW": 27,
   "awayGW": 5,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Rebecca Lederman",
      "Alex Lee"
     ],
     "a": [
      "Evelyn Du",
      "Ron Skotarczak"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Karan Pescatore",
      "Emil Pescatore"
     ],
     "a": [
      "Picky Vorabouth",
      "Anthony Wands"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Carly Pfeffer",
      "Bud Heller"
     ],
     "a": [
      "Wendy Zukerberg",
      "Jieping Wang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Shauna Muller",
      "Daniel Chernin"
     ],
     "a": [
      "Ronnie Yin",
      "Liangjie Zhu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kelly Hanson Word",
      "Shauna Muller"
     ],
     "a": [
      "Picky Vorabouth",
      "Wendy Zukerberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Rebecca Lederman",
      "Carly Pfeffer"
     ],
     "a": [
      "Ronnie Yin",
      "Evelyn Du"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Bud Heller",
      "Brian Gonzalez"
     ],
     "a": [
      "Jieping Wang",
      "Anthony Wands"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Daniel Chernin",
      "Alex Lee"
     ],
     "a": [
      "Liangjie Zhu",
      "Ron Skotarczak"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Carly Pfeffer",
      "Daniel Chernin"
     ],
     "a": [
      "Evelyn Du",
      "Ron Skotarczak"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Rebecca Lederman",
      "Brian Gonzalez"
     ],
     "a": [
      "Picky Vorabouth",
      "Brandon Fulford"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kelly Hanson Word",
      "Emil Pescatore"
     ],
     "a": [
      "Wendy Zukerberg",
      "Anthony Wands"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Karan Pescatore",
      "Alex Lee"
     ],
     "a": [
      "Ronnie Yin",
      "Liangjie Zhu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kelly Hanson Word",
      "Rebecca Lederman"
     ],
     "a": [
      "Picky Vorabouth",
      "Wendy Zukerberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Shauna Muller",
      "Karan Pescatore"
     ],
     "a": [
      "Ronnie Yin",
      "Evelyn Du"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Daniel Chernin",
      "Emil Pescatore"
     ],
     "a": [
      "Ron Skotarczak",
      "Brandon Fulford"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Bud Heller",
      "Brian Gonzalez"
     ],
     "a": [
      "Liangjie Zhu",
      "Jieping Wang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Kelly Hanson Word",
      "Daniel Chernin"
     ],
     "a": [
      "Wendy Zukerberg",
      "Ron Skotarczak"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Shauna Muller",
      "Alex Lee"
     ],
     "a": [
      "Picky Vorabouth",
      "Liangjie Zhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Rebecca Lederman",
      "Bud Heller"
     ],
     "a": [
      "Evelyn Du",
      "Anthony Wands"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Carly Pfeffer",
      "Emil Pescatore"
     ],
     "a": [
      "Ronnie Yin",
      "Brandon Fulford"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Shauna Muller",
      "Rebecca Lederman"
     ],
     "a": [
      "Wendy Zukerberg",
      "Evelyn Du"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kelly Hanson Word",
      "Karan Pescatore"
     ],
     "a": [
      "Ronnie Yin",
      "Picky Vorabouth"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Alex Lee",
      "Bud Heller"
     ],
     "a": [
      "Ron Skotarczak",
      "Liangjie Zhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Brian Gonzalez",
      "Emil Pescatore"
     ],
     "a": [
      "Jieping Wang",
      "Brandon Fulford"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Kelly Hanson Word",
      "Alex Lee"
     ],
     "a": [
      "Picky Vorabouth",
      "Ron Skotarczak"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Shauna Muller",
      "Bud Heller"
     ],
     "a": [
      "Wendy Zukerberg",
      "Liangjie Zhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Karan Pescatore",
      "Brian Gonzalez"
     ],
     "a": [
      "Evelyn Du",
      "Brandon Fulford"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Carly Pfeffer",
      "Daniel Chernin"
     ],
     "a": [
      "Ronnie Yin",
      "Anthony Wands"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Karan Pescatore",
      "Kelly Hanson Word"
     ],
     "a": [
      "Picky Vorabouth",
      "Evelyn Du"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Carly Pfeffer",
      "Rebecca Lederman"
     ],
     "a": [
      "Ronnie Yin",
      "Wendy Zukerberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Daniel Chernin",
      "Alex Lee"
     ],
     "a": [
      "Ron Skotarczak",
      "Anthony Wands"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Brian Gonzalez",
      "Emil Pescatore"
     ],
     "a": [
      "Liangjie Zhu",
      "Brandon Fulford"
     ]
    }
   ],
   "subs": [
    "Ron Skotarczak",
    "Anthony Wands",
    "Picky Vorabouth",
    "Jieping Wang",
    "Wendy Zukerberg"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "ACE Moorestown",
   "away": "APC Garden State",
   "time": "2026-08-29T14:00:00",
   "complete": true,
   "homePoints": 665,
   "awayPoints": 431,
   "homeGW": 30,
   "awayGW": 2,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Patricia Boyle",
      "Christopher Boyle"
     ],
     "a": [
      "Laura Sweet",
      "John Darrah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Kate Siedell",
      "Marc Pellicane"
     ],
     "a": [
      "Kelly Dalsey",
      "Derek Livingston"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Pam Boyd",
      "Robert Finley"
     ],
     "a": [
      "Kerry Gray-Style",
      "Tim Bruno"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sandy Alkins",
      "Marc Harden"
     ],
     "a": [
      "Amy Maussner",
      "Stepan Nevshehirlian"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kate Siedell",
      "Patricia Boyle"
     ],
     "a": [
      "Laura Sweet",
      "Kerry Gray-Style"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Pam Boyd",
      "Sandy Alkins"
     ],
     "a": [
      "Lisa Loeber",
      "Amy Maussner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Christopher Boyle",
      "Marc Pellicane"
     ],
     "a": [
      "John Darrah",
      "Tim Bruno"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Marc Harden",
      "Robert Finley"
     ],
     "a": [
      "Steve Hong",
      "Andrew Fleischer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kate Siedell",
      "Marc Harden"
     ],
     "a": [
      "Lisa Loeber",
      "Derek Livingston"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Patricia Boyle",
      "Robert Finley"
     ],
     "a": [
      "Kerry Gray-Style",
      "John Darrah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Pam Boyd",
      "Christopher Boyle"
     ],
     "a": [
      "Kelly Dalsey",
      "Stepan Nevshehirlian"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sandy Alkins",
      "Marc Pellicane"
     ],
     "a": [
      "Laura Sweet",
      "Andrew Fleischer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kate Siedell",
      "Sandy Alkins"
     ],
     "a": [
      "Laura Sweet",
      "Kelly Dalsey"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Patricia Boyle",
      "Pam Boyd"
     ],
     "a": [
      "Amy Maussner",
      "Kerry Gray-Style"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Marc Harden",
      "Marc Pellicane"
     ],
     "a": [
      "Tim Bruno",
      "Steve Hong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Robert Finley",
      "Christopher Boyle"
     ],
     "a": [
      "Andrew Fleischer",
      "Derek Livingston"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Patricia Boyle",
      "Christopher Boyle"
     ],
     "a": [
      "Kelly Dalsey",
      "Tim Bruno"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Sandy Alkins",
      "Marc Pellicane"
     ],
     "a": [
      "Lisa Loeber",
      "John Darrah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Pam Boyd",
      "Robert Finley"
     ],
     "a": [
      "Amy Maussner",
      "Andrew Fleischer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Kate Siedell",
      "Marc Harden"
     ],
     "a": [
      "Laura Sweet",
      "Stepan Nevshehirlian"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kate Siedell",
      "Patricia Boyle"
     ],
     "a": [
      "Kerry Gray-Style",
      "Kelly Dalsey"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Pam Boyd",
      "Sandy Alkins"
     ],
     "a": [
      "Lisa Loeber",
      "Amy Maussner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Christopher Boyle",
      "Robert Finley"
     ],
     "a": [
      "John Darrah",
      "Derek Livingston"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Marc Pellicane",
      "Marc Harden"
     ],
     "a": [
      "Stepan Nevshehirlian",
      "Steve Hong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Kate Siedell",
      "Christopher Boyle"
     ],
     "a": [
      "Laura Sweet",
      "Tim Bruno"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Pam Boyd",
      "Marc Harden"
     ],
     "a": [
      "Kerry Gray-Style",
      "Steve Hong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Patricia Boyle",
      "Marc Pellicane"
     ],
     "a": [
      "Amy Maussner",
      "John Darrah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Sandy Alkins",
      "Robert Finley"
     ],
     "a": [
      "Lisa Loeber",
      "Andrew Fleischer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kate Siedell",
      "Sandy Alkins"
     ],
     "a": [
      "Laura Sweet",
      "Lisa Loeber"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Pam Boyd",
      "Patricia Boyle"
     ],
     "a": [
      "Kelly Dalsey",
      "Kerry Gray-Style"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Marc Harden",
      "Christopher Boyle"
     ],
     "a": [
      "Stepan Nevshehirlian",
      "Tim Bruno"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Robert Finley",
      "Marc Pellicane"
     ],
     "a": [
      "Derek Livingston",
      "Steve Hong"
     ]
    }
   ],
   "subs": [
    "Marc Pellicane",
    "Christopher Boyle",
    "Amy Maussner"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Pickle Place",
   "away": "Bounce Malvern Boom",
   "time": "2026-08-29T14:00:00",
   "complete": true,
   "homePoints": 639,
   "awayPoints": 612,
   "homeGW": 20,
   "awayGW": 12,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Jane Meng",
      "Tom Zentmeyer"
     ],
     "a": [
      "Jamila Sefiane",
      "Chris Norton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Emily Abbott",
      "Guy Judkowski"
     ],
     "a": [
      "Christine Dugan",
      "David Marchese"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Alicia Maguire",
      "Jay Rohatgi"
     ],
     "a": [
      "Lindsay Duphily",
      "Hal Golden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Janine Forrest",
      "Robert Block"
     ],
     "a": [
      "Sandra Thompson",
      "Jiang Jin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Alicia Maguire",
      "Janine Forrest"
     ],
     "a": [
      "Lindsay Duphily",
      "Jamila Sefiane"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jane Meng",
      "Janet Garrity"
     ],
     "a": [
      "Sandra Thompson",
      "Linda Zhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Thomas Ross",
      "Tom Zentmeyer"
     ],
     "a": [
      "David Marchese",
      "Hal Golden"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jay Rohatgi",
      "Robert Block"
     ],
     "a": [
      "Sandro Stefanelli",
      "Jiang Jin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Janet Garrity",
      "Guy Judkowski"
     ],
     "a": [
      "Jamila Sefiane",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Janine Forrest",
      "Tom Zentmeyer"
     ],
     "a": [
      "Christine Dugan",
      "Hal Golden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Jane Meng",
      "Thomas Ross"
     ],
     "a": [
      "Lindsay Duphily",
      "Jiang Jin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Emily Abbott",
      "Robert Block"
     ],
     "a": [
      "Linda Zhu",
      "Chris Norton"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jane Meng",
      "Janine Forrest"
     ],
     "a": [
      "Linda Zhu",
      "Jamila Sefiane"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Alicia Maguire",
      "Emily Abbott"
     ],
     "a": [
      "Sandra Thompson",
      "Christine Dugan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Guy Judkowski",
      "Thomas Ross"
     ],
     "a": [
      "Jiang Jin",
      "Hal Golden"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jay Rohatgi",
      "Tom Zentmeyer"
     ],
     "a": [
      "Chris Norton",
      "David Marchese"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Janet Garrity",
      "Robert Block"
     ],
     "a": [
      "Christine Dugan",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Jane Meng",
      "Jay Rohatgi"
     ],
     "a": [
      "Lindsay Duphily",
      "Hal Golden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Janine Forrest",
      "Thomas Ross"
     ],
     "a": [
      "Linda Zhu",
      "Jiang Jin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Alicia Maguire",
      "Guy Judkowski"
     ],
     "a": [
      "Sandra Thompson",
      "David Marchese"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Alicia Maguire",
      "Janet Garrity"
     ],
     "a": [
      "Sandra Thompson",
      "Jamila Sefiane"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Emily Abbott",
      "Janine Forrest"
     ],
     "a": [
      "Lindsay Duphily",
      "Christine Dugan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jay Rohatgi",
      "Tom Zentmeyer"
     ],
     "a": [
      "Chris Norton",
      "Hal Golden"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Guy Judkowski",
      "Robert Block"
     ],
     "a": [
      "Sandro Stefanelli",
      "David Marchese"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Janet Garrity",
      "Tom Zentmeyer"
     ],
     "a": [
      "Jamila Sefiane",
      "Jiang Jin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Alicia Maguire",
      "Thomas Ross"
     ],
     "a": [
      "Christine Dugan",
      "David Marchese"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Emily Abbott",
      "Jay Rohatgi"
     ],
     "a": [
      "Linda Zhu",
      "Chris Norton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Jane Meng",
      "Robert Block"
     ],
     "a": [
      "Sandra Thompson",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Emily Abbott",
      "Janet Garrity"
     ],
     "a": [
      "Lindsay Duphily",
      "Jamila Sefiane"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Alicia Maguire",
      "Jane Meng"
     ],
     "a": [
      "Christine Dugan",
      "Linda Zhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Guy Judkowski",
      "Jay Rohatgi"
     ],
     "a": [
      "Jiang Jin",
      "Hal Golden"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Thomas Ross",
      "Tom Zentmeyer"
     ],
     "a": [
      "Sandro Stefanelli",
      "Chris Norton"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 2,
   "home": "Bounce Malvern Black",
   "away": "Flemington Green",
   "time": "2026-08-30T14:00:00",
   "complete": true,
   "homePoints": 667,
   "awayPoints": 478,
   "homeGW": 27,
   "awayGW": 5,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Tera Baccile",
      "Jingwei Wu"
     ],
     "a": [
      "Aimee Castellano",
      "Steven Gregov"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Katherine Maruyama",
      "Jim Darcangelo"
     ],
     "a": [
      "Denise Richmond",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Stephanie Woomer",
      "Keith Goldberg"
     ],
     "a": [
      "Stacy Garretson",
      "Gary Garretson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Vicki Main",
      "Michael Finkelstein"
     ],
     "a": [
      "Tara Kramer",
      "Bob Castellano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Katherine Maruyama",
      "Tera Baccile"
     ],
     "a": [
      "Aimee Castellano",
      "Stacy Garretson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Stephanie Woomer",
      "Vicki Main"
     ],
     "a": [
      "Denise Richmond",
      "Tara Kramer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Keith Goldberg",
      "Jingwei Wu"
     ],
     "a": [
      "Bob Castellano",
      "Dan Loreti"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Michael Dieterle",
      "Michael Finkelstein"
     ],
     "a": [
      "Richard Demeuse",
      "Steven Gregov"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Stephanie Woomer",
      "Michael Dieterle"
     ],
     "a": [
      "Stacy Garretson",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Katherine Maruyama",
      "Michael Finkelstein"
     ],
     "a": [
      "Tara Kramer",
      "Dan Loreti"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Tera Baccile",
      "Jim Darcangelo"
     ],
     "a": [
      "Aimee Castellano",
      "Bob Castellano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Vicki Main",
      "Jingwei Wu"
     ],
     "a": [
      "Denise Richmond",
      "Gary Garretson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Stephanie Woomer",
      "Katherine Maruyama"
     ],
     "a": [
      "Aimee Castellano",
      "Stacy Garretson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Tera Baccile",
      "Vicki Main"
     ],
     "a": [
      "Denise Richmond",
      "Tara Kramer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jim Darcangelo",
      "Jingwei Wu"
     ],
     "a": [
      "Bob Castellano",
      "Dan Loreti"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Michael Dieterle",
      "Keith Goldberg"
     ],
     "a": [
      "Gary Garretson",
      "Steven Gregov"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Vicki Main",
      "Michael Dieterle"
     ],
     "a": [
      "Denise Richmond",
      "Gary Garretson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Katherine Maruyama",
      "Keith Goldberg"
     ],
     "a": [
      "Stacy Garretson",
      "Dan Loreti"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Stephanie Woomer",
      "Michael Finkelstein"
     ],
     "a": [
      "Aimee Castellano",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Tera Baccile",
      "Jim Darcangelo"
     ],
     "a": [
      "Tara Kramer",
      "Steven Gregov"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Katherine Maruyama",
      "Vicki Main"
     ],
     "a": [
      "Aimee Castellano",
      "Denise Richmond"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Stephanie Woomer",
      "Tera Baccile"
     ],
     "a": [
      "Stacy Garretson",
      "Tara Kramer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jim Darcangelo",
      "Keith Goldberg"
     ],
     "a": [
      "Steven Gregov",
      "Dan Loreti"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Jingwei Wu",
      "Michael Finkelstein"
     ],
     "a": [
      "Bob Castellano",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Tera Baccile",
      "Michael Dieterle"
     ],
     "a": [
      "Tara Kramer",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Vicki Main",
      "Michael Finkelstein"
     ],
     "a": [
      "Denise Richmond",
      "Steven Gregov"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Katherine Maruyama",
      "Jingwei Wu"
     ],
     "a": [
      "Stacy Garretson",
      "Bob Castellano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Stephanie Woomer",
      "Keith Goldberg"
     ],
     "a": [
      "Aimee Castellano",
      "Gary Garretson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Katherine Maruyama",
      "Stephanie Woomer"
     ],
     "a": [
      "Aimee Castellano",
      "Tara Kramer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Tera Baccile",
      "Vicki Main"
     ],
     "a": [
      "Stacy Garretson",
      "Denise Richmond"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jim Darcangelo",
      "Michael Dieterle"
     ],
     "a": [
      "Bob Castellano",
      "Richard Demeuse"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Keith Goldberg",
      "Jingwei Wu"
     ],
     "a": [
      "Gary Garretson",
      "Dan Loreti"
     ]
    }
   ],
   "subs": [
    "Dan Loreti",
    "Steven Gregov",
    "Gary Garretson"
   ]
  },
  {
   "result": "home",
   "week": 4,
   "home": "Jersey Pickleball Club",
   "away": "Stelton Sports",
   "time": "2026-09-12T14:00:00",
   "complete": true,
   "homePoints": 646,
   "awayPoints": 593,
   "homeGW": 19,
   "awayGW": 13,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Amy Chrebet",
      "Lance Brown"
     ],
     "a": [
      "Ann Betterton",
      "Liangang Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Sarah Nazario",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Shaoyi Sun",
      "Sam Zhou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Natasha De Carvalho",
      "Yi Gu"
     ],
     "a": [
      "Mei Li",
      "Lei Dong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Meryl Nadler",
      "Darren Saks"
     ],
     "a": [
      "Rui Zhang",
      "Jim Peng"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Sarah Nazario",
      "Amy Chrebet"
     ],
     "a": [
      "Jennifer Qian",
      "Shaoyi Sun"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Alice Napolitano",
      "Natasha De Carvalho"
     ],
     "a": [
      "Mei Li",
      "Rui Zhang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Darren Saks",
      "Todd Gasparre"
     ],
     "a": [
      "Jim Peng",
      "Peter Shen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Yi Gu",
      "Lance Brown"
     ],
     "a": [
      "Lei Dong",
      "Liangang Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Natasha De Carvalho",
      "Yi Gu"
     ],
     "a": [
      "Jennifer Qian",
      "Liangang Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Sarah Nazario",
      "Todd Gasparre"
     ],
     "a": [
      "Mei Li",
      "Lei Dong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Amy Chrebet",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Rui Zhang",
      "Peter Shen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Alice Napolitano",
      "Darren Saks"
     ],
     "a": [
      "Ann Betterton",
      "Sam Zhou"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Alice Napolitano",
      "Amy Chrebet"
     ],
     "a": [
      "Jennifer Qian",
      "Mei Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Natasha De Carvalho",
      "Meryl Nadler"
     ],
     "a": [
      "Ann Betterton",
      "Shaoyi Sun"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Michael Dombrowiecki",
      "Todd Gasparre"
     ],
     "a": [
      "Jim Peng",
      "Peter Shen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Darren Saks",
      "Lance Brown"
     ],
     "a": [
      "Sam Zhou",
      "Liangang Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Natasha De Carvalho",
      "Lance Brown"
     ],
     "a": [
      "Shaoyi Sun",
      "Peter Shen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sarah Nazario",
      "Todd Gasparre"
     ],
     "a": [
      "Mei Li",
      "Sam Zhou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Meryl Nadler",
      "Yi Gu"
     ],
     "a": [
      "Rui Zhang",
      "Lei Dong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Alice Napolitano",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Ann Betterton",
      "Jim Peng"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 26,
     "as": 28,
     "h": [
      "Meryl Nadler",
      "Alice Napolitano"
     ],
     "a": [
      "Jennifer Qian",
      "Shaoyi Sun"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sarah Nazario",
      "Amy Chrebet"
     ],
     "a": [
      "Rui Zhang",
      "Ann Betterton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Darren Saks",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Jim Peng",
      "Sam Zhou"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Yi Gu",
      "Todd Gasparre"
     ],
     "a": [
      "Lei Dong",
      "Liangang Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Amy Chrebet",
      "Yi Gu"
     ],
     "a": [
      "Jennifer Qian",
      "Liangang Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Alice Napolitano",
      "Darren Saks"
     ],
     "a": [
      "Mei Li",
      "Sam Zhou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sarah Nazario",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Rui Zhang",
      "Lei Dong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Meryl Nadler",
      "Lance Brown"
     ],
     "a": [
      "Shaoyi Sun",
      "Peter Shen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Meryl Nadler",
      "Natasha De Carvalho"
     ],
     "a": [
      "Rui Zhang",
      "Jennifer Qian"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Alice Napolitano",
      "Sarah Nazario"
     ],
     "a": [
      "Mei Li",
      "Ann Betterton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Michael Dombrowiecki",
      "Todd Gasparre"
     ],
     "a": [
      "Jim Peng",
      "Liangang Liu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Darren Saks",
      "Lance Brown"
     ],
     "a": [
      "Peter Shen",
      "Sam Zhou"
     ]
    }
   ],
   "subs": [
    "Peter Shen"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "Pickleball Palace",
   "away": "Jersey Pickleball Club",
   "time": "2026-09-19T12:00:00",
   "complete": true,
   "homePoints": 665,
   "awayPoints": 527,
   "homeGW": 26,
   "awayGW": 6,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Carly Pfeffer",
      "Daniel Chernin"
     ],
     "a": [
      "Sarah Nazario",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kelly Hanson Word",
      "Ryan Sherry"
     ],
     "a": [
      "Alice Napolitano",
      "Michael Swell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Rebecca Lederman",
      "Alex Lee"
     ],
     "a": [
      "Eva Danieli",
      "Todd Gasparre"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Karan Pescatore",
      "Christopher Krecke"
     ],
     "a": [
      "Rosalyn Goldsmith",
      "Yi Gu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kelly Hanson Word",
      "Rebecca Lederman"
     ],
     "a": [
      "Alice Napolitano",
      "Eva Danieli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Carly Pfeffer",
      "Jill Lesnik"
     ],
     "a": [
      "Sarah Nazario",
      "Natasha De Carvalho"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Daniel Chernin",
      "Alex Lee"
     ],
     "a": [
      "Michael Swell",
      "Todd Gasparre"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ryan Sherry",
      "Emil Pescatore"
     ],
     "a": [
      "Michael Dombrowiecki",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Karan Pescatore",
      "Emil Pescatore"
     ],
     "a": [
      "Sarah Nazario",
      "Todd Gasparre"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Carly Pfeffer",
      "Daniel Chernin"
     ],
     "a": [
      "Eva Danieli",
      "Michael Swell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Jill Lesnik",
      "Ryan Sherry"
     ],
     "a": [
      "Rosalyn Goldsmith",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Rebecca Lederman",
      "Christopher Krecke"
     ],
     "a": [
      "Natasha De Carvalho",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kelly Hanson Word",
      "Karan Pescatore"
     ],
     "a": [
      "Eva Danieli",
      "Sarah Nazario"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Carly Pfeffer",
      "Rebecca Lederman"
     ],
     "a": [
      "Alice Napolitano",
      "Rosalyn Goldsmith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ryan Sherry",
      "Christopher Krecke"
     ],
     "a": [
      "Michael Swell",
      "Todd Gasparre"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Alex Lee",
      "Emil Pescatore"
     ],
     "a": [
      "Michael Dombrowiecki",
      "Yi Gu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Carly Pfeffer",
      "Emil Pescatore"
     ],
     "a": [
      "Sarah Nazario",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kelly Hanson Word",
      "Daniel Chernin"
     ],
     "a": [
      "Alice Napolitano",
      "Michael Swell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Karan Pescatore",
      "Alex Lee"
     ],
     "a": [
      "Rosalyn Goldsmith",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jill Lesnik",
      "Christopher Krecke"
     ],
     "a": [
      "Natasha De Carvalho",
      "Todd Gasparre"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Rebecca Lederman",
      "Kelly Hanson Word"
     ],
     "a": [
      "Alice Napolitano",
      "Eva Danieli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Karan Pescatore",
      "Jill Lesnik"
     ],
     "a": [
      "Sarah Nazario",
      "Natasha De Carvalho"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Christopher Krecke",
      "Daniel Chernin"
     ],
     "a": [
      "Michael Dombrowiecki",
      "Michael Swell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Alex Lee",
      "Emil Pescatore"
     ],
     "a": [
      "Lance Brown",
      "Yi Gu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jill Lesnik",
      "Daniel Chernin"
     ],
     "a": [
      "Alice Napolitano",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Karan Pescatore",
      "Emil Pescatore"
     ],
     "a": [
      "Eva Danieli",
      "Todd Gasparre"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kelly Hanson Word",
      "Ryan Sherry"
     ],
     "a": [
      "Natasha De Carvalho",
      "Michael Swell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Rebecca Lederman",
      "Alex Lee"
     ],
     "a": [
      "Rosalyn Goldsmith",
      "Yi Gu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Rebecca Lederman",
      "Jill Lesnik"
     ],
     "a": [
      "Sarah Nazario",
      "Eva Danieli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Kelly Hanson Word",
      "Karan Pescatore"
     ],
     "a": [
      "Alice Napolitano",
      "Natasha De Carvalho"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Alex Lee",
      "Ryan Sherry"
     ],
     "a": [
      "Michael Swell",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Daniel Chernin",
      "Emil Pescatore"
     ],
     "a": [
      "Yi Gu",
      "Lance Brown"
     ]
    }
   ],
   "subs": [
    "Christopher Krecke"
   ]
  },
  {
   "result": "away",
   "week": 5,
   "home": "Allstar Pickler",
   "away": "Stelton Sports",
   "time": "2026-09-19T12:00:00",
   "complete": true,
   "homePoints": 587,
   "awayPoints": 621,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Ronnie Yin",
      "Liangjie Zhu"
     ],
     "a": [
      "Jennifer Qian",
      "Liangang Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kajal Sinkar",
      "John Zhong"
     ],
     "a": [
      "Mei Li",
      "Lei Dong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Cuc Dang",
      "Brandon Fulford"
     ],
     "a": [
      "Shaoyi Sun",
      "Sam Zhou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Picky Vorabouth",
      "Abraham Telechanski"
     ],
     "a": [
      "Rui Zhang",
      "Leon Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ronnie Yin",
      "Cuc Dang"
     ],
     "a": [
      "Ann Betterton",
      "Shaoyi Sun"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Picky Vorabouth",
      "Kajal Sinkar"
     ],
     "a": [
      "Mei Li",
      "Rui Zhang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Liangjie Zhu",
      "John Zhong"
     ],
     "a": [
      "Jim Peng",
      "Mengchu Zhou"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Abraham Telechanski",
      "Brandon Fulford"
     ],
     "a": [
      "Lei Dong",
      "Liangang Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Savita Nandal",
      "Paul Rappport"
     ],
     "a": [
      "Ann Betterton",
      "Liangang Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Picky Vorabouth",
      "Brandon Fulford"
     ],
     "a": [
      "Mei Li",
      "Sam Zhou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Kajal Sinkar",
      "Abraham Telechanski"
     ],
     "a": [
      "Rui Zhang",
      "Lei Dong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Ronnie Yin",
      "Liangjie Zhu"
     ],
     "a": [
      "Ellen Xu",
      "Leon Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Picky Vorabouth",
      "Kajal Sinkar"
     ],
     "a": [
      "Jennifer Qian",
      "Mei Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ronnie Yin",
      "Cuc Dang"
     ],
     "a": [
      "Shaoyi Sun",
      "Ellen Xu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Liangjie Zhu",
      "Paul Rappport"
     ],
     "a": [
      "Mengchu Zhou",
      "Jim Peng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "John Zhong",
      "Abraham Telechanski"
     ],
     "a": [
      "Sam Zhou",
      "Leon Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Picky Vorabouth",
      "Liangjie Zhu"
     ],
     "a": [
      "Jennifer Qian",
      "Liangang Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Cuc Dang",
      "Paul Rappport"
     ],
     "a": [
      "Mei Li",
      "Sam Zhou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kajal Sinkar",
      "Brandon Fulford"
     ],
     "a": [
      "Rui Zhang",
      "Lei Dong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ronnie Yin",
      "Abraham Telechanski"
     ],
     "a": [
      "Ann Betterton",
      "Leon Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Cuc Dang",
      "Savita Nandal"
     ],
     "a": [
      "Ann Betterton",
      "Ellen Xu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Picky Vorabouth",
      "Ronnie Yin"
     ],
     "a": [
      "Rui Zhang",
      "Shaoyi Sun"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Liangjie Zhu",
      "Brandon Fulford"
     ],
     "a": [
      "Jim Peng",
      "Leon Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Abraham Telechanski",
      "Paul Rappport"
     ],
     "a": [
      "Mengchu Zhou",
      "Sam Zhou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Cuc Dang",
      "Paul Rappport"
     ],
     "a": [
      "Ann Betterton",
      "Liangang Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Savita Nandal",
      "John Zhong"
     ],
     "a": [
      "Jennifer Qian",
      "Mengchu Zhou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Picky Vorabouth",
      "Liangjie Zhu"
     ],
     "a": [
      "Mei Li",
      "Lei Dong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ronnie Yin",
      "Abraham Telechanski"
     ],
     "a": [
      "Ellen Xu",
      "Leon Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Savita Nandal",
      "Kajal Sinkar"
     ],
     "a": [
      "Jennifer Qian",
      "Shaoyi Sun"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Cuc Dang",
      "Picky Vorabouth"
     ],
     "a": [
      "Ann Betterton",
      "Rui Zhang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Abraham Telechanski",
      "John Zhong"
     ],
     "a": [
      "Jim Peng",
      "Sam Zhou"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Liangjie Zhu",
      "Brandon Fulford"
     ],
     "a": [
      "Lei Dong",
      "Liangang Liu"
     ]
    }
   ],
   "subs": [
    "Picky Vorabouth",
    "Cuc Dang"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "Flemington Blue",
   "away": "Premiere",
   "time": "2026-09-19T12:00:00",
   "complete": true,
   "homePoints": 627,
   "awayPoints": 575,
   "homeGW": 21,
   "awayGW": 11,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Susan Ackley",
      "Steven Gregov"
     ],
     "a": [
      "Quen Koon Ng",
      "Jeffrey Rubin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Chanda Mccoy",
      "Marc Friedman"
     ],
     "a": [
      "Lily Liu",
      "Steve Gerwer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Carol Mastroianni",
      "Bill Brandt"
     ],
     "a": [
      "Tara Lombardo",
      "Sal Frangipane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Ceil Gomez",
      "Scott Rubin"
     ],
     "a": [
      "Nancy Lin",
      "John Ficarra"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Susan Ackley",
      "Carol Mastroianni"
     ],
     "a": [
      "Lily Liu",
      "Coby Resnick"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ceil Gomez",
      "Chanda Mccoy"
     ],
     "a": [
      "Tara Lombardo",
      "Quen Koon Ng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Bill Brandt",
      "John Pineda"
     ],
     "a": [
      "Jeffrey Rubin",
      "James Gross"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Steven Gregov",
      "Marc Friedman"
     ],
     "a": [
      "Steve Gerwer",
      "Alfonse Calato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Chanda Mccoy",
      "Bill Brandt"
     ],
     "a": [
      "Lily Liu",
      "Alfonse Calato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Susan Ackley",
      "Steven Gregov"
     ],
     "a": [
      "Nancy Lin",
      "Sal Frangipane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ceil Gomez",
      "John Pineda"
     ],
     "a": [
      "Coby Resnick",
      "James Gross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Carol Mastroianni",
      "Scott Rubin"
     ],
     "a": [
      "Tara Lombardo",
      "John Ficarra"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Chanda Mccoy",
      "Ceil Gomez"
     ],
     "a": [
      "Coby Resnick",
      "Tara Lombardo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Susan Ackley",
      "Carol Mastroianni"
     ],
     "a": [
      "Nancy Lin",
      "Quen Koon Ng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Bill Brandt",
      "Marc Friedman"
     ],
     "a": [
      "Jeffrey Rubin",
      "John Ficarra"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "John Pineda",
      "Scott Rubin"
     ],
     "a": [
      "Sal Frangipane",
      "Steve Gerwer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Chanda Mccoy",
      "Bill Brandt"
     ],
     "a": [
      "Nancy Lin",
      "Jeffrey Rubin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Susan Ackley",
      "Scott Rubin"
     ],
     "a": [
      "Tara Lombardo",
      "Alfonse Calato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Ceil Gomez",
      "Steven Gregov"
     ],
     "a": [
      "Lily Liu",
      "James Gross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Carol Mastroianni",
      "Marc Friedman"
     ],
     "a": [
      "Quen Koon Ng",
      "Steve Gerwer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Susan Ackley",
      "Chanda Mccoy"
     ],
     "a": [
      "Lily Liu",
      "Tara Lombardo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Carol Mastroianni",
      "Ceil Gomez"
     ],
     "a": [
      "Coby Resnick",
      "Quen Koon Ng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Steven Gregov",
      "Scott Rubin"
     ],
     "a": [
      "Steve Gerwer",
      "John Ficarra"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Marc Friedman",
      "John Pineda"
     ],
     "a": [
      "James Gross",
      "Sal Frangipane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Susan Ackley",
      "John Pineda"
     ],
     "a": [
      "Tara Lombardo",
      "Jeffrey Rubin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Chanda Mccoy",
      "Steven Gregov"
     ],
     "a": [
      "Lily Liu",
      "Alfonse Calato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Ceil Gomez",
      "Marc Friedman"
     ],
     "a": [
      "Coby Resnick",
      "Steve Gerwer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Carol Mastroianni",
      "Bill Brandt"
     ],
     "a": [
      "Nancy Lin",
      "John Ficarra"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Carol Mastroianni",
      "Chanda Mccoy"
     ],
     "a": [
      "Coby Resnick",
      "Nancy Lin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Susan Ackley",
      "Ceil Gomez"
     ],
     "a": [
      "Lily Liu",
      "Quen Koon Ng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Steven Gregov",
      "Bill Brandt"
     ],
     "a": [
      "Jeffrey Rubin",
      "Sal Frangipane"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Scott Rubin",
      "John Pineda"
     ],
     "a": [
      "Alfonse Calato",
      "James Gross"
     ]
    }
   ],
   "subs": [
    "Chanda Mccoy"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "Bounce Malvern Black",
   "away": "APC Garden State",
   "time": "2026-09-19T13:00:00",
   "complete": true,
   "homePoints": 662,
   "awayPoints": 524,
   "homeGW": 28,
   "awayGW": 4,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Tera Baccile",
      "Jim Darcangelo"
     ],
     "a": [
      "Lara Webb",
      "Tom Kresky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Stephanie Woomer",
      "Michael Finkelstein"
     ],
     "a": [
      "Jiyun Yuh",
      "Jimmy Shapiro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Vicki Main",
      "Michael Dieterle"
     ],
     "a": [
      "Laura Sweet",
      "John Darrah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Erika Simone",
      "Derek Le"
     ],
     "a": [
      "Lisa Loeber",
      "Steve Hong"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Erika Simone",
      "Stephanie Woomer"
     ],
     "a": [
      "Lisa Loeber",
      "Jiyun Yuh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Vicki Main",
      "Tera Baccile"
     ],
     "a": [
      "Lara Webb",
      "Laura Sweet"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Michael Dieterle",
      "John Morabito"
     ],
     "a": [
      "John Darrah",
      "Tom Kresky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Derek Le",
      "Michael Finkelstein"
     ],
     "a": [
      "Danny Mellul",
      "Jimmy Shapiro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Tera Baccile",
      "Michael Dieterle"
     ],
     "a": [
      "Lisa Loeber",
      "Jimmy Shapiro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Stephanie Woomer",
      "Jim Darcangelo"
     ],
     "a": [
      "Lara Webb",
      "Steve Hong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Vicki Main",
      "John Morabito"
     ],
     "a": [
      "Jiyun Yuh",
      "John Darrah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Erika Simone",
      "Michael Finkelstein"
     ],
     "a": [
      "Laura Sweet",
      "Tom Kresky"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Erika Simone",
      "Vicki Main"
     ],
     "a": [
      "Laura Sweet",
      "Lara Webb"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Tera Baccile",
      "Stephanie Woomer"
     ],
     "a": [
      "Jiyun Yuh",
      "Lisa Loeber"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jim Darcangelo",
      "John Morabito"
     ],
     "a": [
      "Danny Mellul",
      "Tom Kresky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Michael Dieterle",
      "Derek Le"
     ],
     "a": [
      "Steve Hong",
      "Jimmy Shapiro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Stephanie Woomer",
      "Michael Finkelstein"
     ],
     "a": [
      "Laura Sweet",
      "Tom Kresky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Vicki Main",
      "Jim Darcangelo"
     ],
     "a": [
      "Lisa Loeber",
      "Danny Mellul"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Tera Baccile",
      "Derek Le"
     ],
     "a": [
      "Lara Webb",
      "John Darrah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Erika Simone",
      "John Morabito"
     ],
     "a": [
      "Jiyun Yuh",
      "Steve Hong"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Vicki Main",
      "Stephanie Woomer"
     ],
     "a": [
      "Lisa Loeber",
      "Laura Sweet"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Erika Simone",
      "Tera Baccile"
     ],
     "a": [
      "Lara Webb",
      "Jiyun Yuh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jim Darcangelo",
      "Derek Le"
     ],
     "a": [
      "John Darrah",
      "Jimmy Shapiro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Michael Finkelstein",
      "Michael Dieterle"
     ],
     "a": [
      "Danny Mellul",
      "Steve Hong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Erika Simone",
      "Jim Darcangelo"
     ],
     "a": [
      "Jiyun Yuh",
      "John Darrah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Stephanie Woomer",
      "Michael Dieterle"
     ],
     "a": [
      "Laura Sweet",
      "Jimmy Shapiro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Vicki Main",
      "Michael Finkelstein"
     ],
     "a": [
      "Lisa Loeber",
      "Tom Kresky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Tera Baccile",
      "John Morabito"
     ],
     "a": [
      "Lara Webb",
      "Danny Mellul"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tera Baccile",
      "Stephanie Woomer"
     ],
     "a": [
      "Laura Sweet",
      "Lisa Loeber"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Vicki Main",
      "Erika Simone"
     ],
     "a": [
      "Jiyun Yuh",
      "Lara Webb"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Derek Le",
      "Michael Dieterle"
     ],
     "a": [
      "Tom Kresky",
      "John Darrah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jim Darcangelo",
      "Michael Finkelstein"
     ],
     "a": [
      "Steve Hong",
      "Jimmy Shapiro"
     ]
    }
   ],
   "subs": [
    "Lara Webb",
    "Danny Mellul"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "Pickle Place",
   "away": "Flemington Green",
   "time": "2026-09-19T14:00:00",
   "complete": true,
   "homePoints": 473,
   "awayPoints": 442,
   "homeGW": 23,
   "awayGW": 9,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Marykristin Haskell",
      "Jay Rohatgi"
     ],
     "a": [
      "Katrina Mcintyre",
      "David Mcintyre"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Janet Garrity",
      "Thomas Ross"
     ],
     "a": [
      "Christine Papa",
      "Craig Batten"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Dottie Kelly",
      "Tom Zentmeyer"
     ],
     "a": [
      "Aimee Castellano",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Janine Forrest",
      "Jonathan Goldner"
     ],
     "a": [
      "Denise Richmond",
      "Richard Demeuse"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Janet Garrity",
      "Janine Forrest"
     ],
     "a": [
      "Katrina Mcintyre",
      "Christine Papa"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Dottie Kelly",
      "Marykristin Haskell"
     ],
     "a": [
      "Aimee Castellano",
      "Barbara Hess"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Jay Rohatgi",
      "Tom Zentmeyer"
     ],
     "a": [
      "David Osborne",
      "Richard Demeuse"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Robert Block",
      "Thomas Ross"
     ],
     "a": [
      "David Mcintyre",
      "Craig Batten"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Dottie Kelly",
      "Jay Rohatgi"
     ],
     "a": [
      "Denise Richmond",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Nancy Blank",
      "Thomas Ross"
     ],
     "a": [
      "Aimee Castellano",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Janet Garrity",
      "Jonathan Goldner"
     ],
     "a": [
      "Katrina Mcintyre",
      "Craig Batten"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Marykristin Haskell",
      "Tom Zentmeyer"
     ],
     "a": [
      "Barbara Hess",
      "David Mcintyre"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Janine Forrest",
      "Marykristin Haskell"
     ],
     "a": [
      "Christine Papa",
      "Barbara Hess"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Janet Garrity",
      "Nancy Blank"
     ],
     "a": [
      "Aimee Castellano",
      "Denise Richmond"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jonathan Goldner",
      "Tom Zentmeyer"
     ],
     "a": [
      "David Mcintyre",
      "David Osborne"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Jay Rohatgi",
      "Robert Block"
     ],
     "a": [
      "Richard Demeuse",
      "Craig Batten"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Nancy Blank",
      "Thomas Ross"
     ],
     "a": [
      "Barbara Hess",
      "Craig Batten"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Marykristin Haskell",
      "Tom Zentmeyer"
     ],
     "a": [
      "Christine Papa",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Dottie Kelly",
      "Jonathan Goldner"
     ],
     "a": [
      "Katrina Mcintyre",
      "David Mcintyre"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Janet Garrity",
      "Robert Block"
     ],
     "a": [
      "Denise Richmond",
      "Richard Demeuse"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Dottie Kelly",
      "Janine Forrest"
     ],
     "a": [
      "Katrina Mcintyre",
      "Barbara Hess"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Janet Garrity",
      "Nancy Blank"
     ],
     "a": [
      "Aimee Castellano",
      "Christine Papa"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jay Rohatgi",
      "Jonathan Goldner"
     ],
     "a": [
      "David Osborne",
      "David Mcintyre"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Thomas Ross",
      "Tom Zentmeyer"
     ],
     "a": [
      "Craig Batten",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Janine Forrest",
      "Jay Rohatgi"
     ],
     "a": [
      "Christine Papa",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Marykristin Haskell",
      "Robert Block"
     ],
     "a": [
      "Aimee Castellano",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Nancy Blank",
      "Jonathan Goldner"
     ],
     "a": [
      "Denise Richmond",
      "Craig Batten"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Dottie Kelly",
      "Thomas Ross"
     ],
     "a": [
      "Barbara Hess",
      "David Mcintyre"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Dottie Kelly",
      "Janine Forrest"
     ],
     "a": [
      "Aimee Castellano",
      "Barbara Hess"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Marykristin Haskell",
      "Nancy Blank"
     ],
     "a": [
      "Denise Richmond",
      "Katrina Mcintyre"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jay Rohatgi",
      "Tom Zentmeyer"
     ],
     "a": [
      "David Osborne",
      "Craig Batten"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Jonathan Goldner",
      "Robert Block"
     ],
     "a": [
      "David Mcintyre",
      "Richard Demeuse"
     ]
    }
   ],
   "subs": [
    "David Mcintyre",
    "Dottie Kelly"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "ACE Moorestown",
   "away": "Bounce Malvern Boom",
   "time": "2026-09-19T14:00:00",
   "complete": true,
   "homePoints": 665,
   "awayPoints": 494,
   "homeGW": 28,
   "awayGW": 4,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kate Siedell",
      "Jonathan Brand"
     ],
     "a": [
      "Kristina Rhodes",
      "Brett Kleger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Stacey Frank",
      "James Shaw"
     ],
     "a": [
      "Christine Dugan",
      "Talen Singer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Pam Boyd",
      "Robert Finley"
     ],
     "a": [
      "Lucy Chow",
      "Ed Gieske"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Sandy Alkins",
      "Marc Harden"
     ],
     "a": [
      "Linda Zhu",
      "Chris Norton"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kate Siedell",
      "Stacey Frank"
     ],
     "a": [
      "Kristina Rhodes",
      "Sandra Thompson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Pam Boyd",
      "Sandy Alkins"
     ],
     "a": [
      "Linda Zhu",
      "Lucy Chow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jonathan Brand",
      "James Shaw"
     ],
     "a": [
      "Brett Kleger",
      "Talen Singer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Marc Harden",
      "Robert Finley"
     ],
     "a": [
      "Chris Norton",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Sandy Alkins",
      "Jonathan Brand"
     ],
     "a": [
      "Kristina Rhodes",
      "Ed Gieske"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Stacey Frank",
      "Robert Finley"
     ],
     "a": [
      "Christine Dugan",
      "Brett Kleger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Pam Boyd",
      "James Shaw"
     ],
     "a": [
      "Lucy Chow",
      "Chris Norton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kate Siedell",
      "Marc Harden"
     ],
     "a": [
      "Sandra Thompson",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sandy Alkins",
      "Kate Siedell"
     ],
     "a": [
      "Kristina Rhodes",
      "Christine Dugan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Pam Boyd",
      "Stacey Frank"
     ],
     "a": [
      "Linda Zhu",
      "Sandra Thompson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "James Shaw",
      "Robert Finley"
     ],
     "a": [
      "Brett Kleger",
      "Chris Norton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jonathan Brand",
      "Marc Harden"
     ],
     "a": [
      "Ed Gieske",
      "Talen Singer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Stacey Frank",
      "Jonathan Brand"
     ],
     "a": [
      "Christine Dugan",
      "Chris Norton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Kate Siedell",
      "Marc Harden"
     ],
     "a": [
      "Lucy Chow",
      "Brett Kleger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Pam Boyd",
      "Robert Finley"
     ],
     "a": [
      "Sandra Thompson",
      "Talen Singer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Sandy Alkins",
      "James Shaw"
     ],
     "a": [
      "Linda Zhu",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kate Siedell",
      "Stacey Frank"
     ],
     "a": [
      "Christine Dugan",
      "Kristina Rhodes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sandy Alkins",
      "Pam Boyd"
     ],
     "a": [
      "Linda Zhu",
      "Lucy Chow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jonathan Brand",
      "James Shaw"
     ],
     "a": [
      "Brett Kleger",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Marc Harden",
      "Robert Finley"
     ],
     "a": [
      "Ed Gieske",
      "Talen Singer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Stacey Frank",
      "James Shaw"
     ],
     "a": [
      "Kristina Rhodes",
      "Talen Singer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Kate Siedell",
      "Jonathan Brand"
     ],
     "a": [
      "Christine Dugan",
      "Ed Gieske"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Sandy Alkins",
      "Robert Finley"
     ],
     "a": [
      "Sandra Thompson",
      "Chris Norton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Pam Boyd",
      "Marc Harden"
     ],
     "a": [
      "Linda Zhu",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Pam Boyd",
      "Stacey Frank"
     ],
     "a": [
      "Kristina Rhodes",
      "Lucy Chow"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Kate Siedell",
      "Sandy Alkins"
     ],
     "a": [
      "Sandra Thompson",
      "Christine Dugan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Robert Finley",
      "James Shaw"
     ],
     "a": [
      "Brett Kleger",
      "Chris Norton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Marc Harden",
      "Jonathan Brand"
     ],
     "a": [
      "Sandro Stefanelli",
      "Ed Gieske"
     ]
    }
   ],
   "subs": [
    "Ed Gieske",
    "James Shaw",
    "Kristina Rhodes",
    "Lucy Chow"
   ]
  },
  {
   "result": "away",
   "week": 6,
   "home": "Bounce Malvern Boom",
   "away": "Bounce Malvern Black",
   "time": "2026-09-23T19:00:00",
   "complete": true,
   "homePoints": 528,
   "awayPoints": 666,
   "homeGW": 8,
   "awayGW": 24,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Kristina Rhodes",
      "Brett Kleger"
     ],
     "a": [
      "Katherine Maruyama",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 4,
     "as": 21,
     "h": [
      "Sandra Thompson",
      "Chris Norton"
     ],
     "a": [
      "Stephanie Woomer",
      "Jingwei Wu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jamila Sefiane",
      "Sandro Stefanelli"
     ],
     "a": [
      "Vicki Main",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Christine Dugan",
      "Talen Singer"
     ],
     "a": [
      "Tera Baccile",
      "Michael Dieterle"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Linda Zhu",
      "Sandra Thompson"
     ],
     "a": [
      "Stephanie Woomer",
      "Tera Baccile"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kristina Rhodes",
      "Jamila Sefiane"
     ],
     "a": [
      "Katherine Maruyama",
      "Erika Simone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "David Marchese",
      "Sandro Stefanelli"
     ],
     "a": [
      "Michael Finkelstein",
      "Michael Dieterle"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Talen Singer",
      "Brett Kleger"
     ],
     "a": [
      "Jim Darcangelo",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Christine Dugan",
      "Brett Kleger"
     ],
     "a": [
      "Katherine Maruyama",
      "Michael Dieterle"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Linda Zhu",
      "Chris Norton"
     ],
     "a": [
      "Stephanie Woomer",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jamila Sefiane",
      "David Marchese"
     ],
     "a": [
      "Vicki Main",
      "Jingwei Wu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Kristina Rhodes",
      "Sandro Stefanelli"
     ],
     "a": [
      "Erika Simone",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Sandra Thompson",
      "Linda Zhu"
     ],
     "a": [
      "Vicki Main",
      "Katherine Maruyama"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Christine Dugan",
      "Kristina Rhodes"
     ],
     "a": [
      "Erika Simone",
      "Tera Baccile"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Chris Norton",
      "Talen Singer"
     ],
     "a": [
      "Michael Finkelstein",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Brett Kleger",
      "Sandro Stefanelli"
     ],
     "a": [
      "Jingwei Wu",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Christine Dugan",
      "Sandro Stefanelli"
     ],
     "a": [
      "Stephanie Woomer",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jamila Sefiane",
      "David Marchese"
     ],
     "a": [
      "Vicki Main",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sandra Thompson",
      "Brett Kleger"
     ],
     "a": [
      "Tera Baccile",
      "Michael Dieterle"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Linda Zhu",
      "Talen Singer"
     ],
     "a": [
      "Erika Simone",
      "Jingwei Wu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Sandra Thompson",
      "Jamila Sefiane"
     ],
     "a": [
      "Katherine Maruyama",
      "Stephanie Woomer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Christine Dugan",
      "Kristina Rhodes"
     ],
     "a": [
      "Vicki Main",
      "Tera Baccile"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Brett Kleger",
      "Chris Norton"
     ],
     "a": [
      "Michael Dieterle",
      "Derek Le"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Talen Singer",
      "David Marchese"
     ],
     "a": [
      "Jingwei Wu",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jamila Sefiane",
      "Talen Singer"
     ],
     "a": [
      "Katherine Maruyama",
      "Jingwei Wu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Christine Dugan",
      "David Marchese"
     ],
     "a": [
      "Stephanie Woomer",
      "Michael Dieterle"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kristina Rhodes",
      "Sandro Stefanelli"
     ],
     "a": [
      "Tera Baccile",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Linda Zhu",
      "Chris Norton"
     ],
     "a": [
      "Erika Simone",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Kristina Rhodes",
      "Linda Zhu"
     ],
     "a": [
      "Katherine Maruyama",
      "Erika Simone"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Christine Dugan",
      "Jamila Sefiane"
     ],
     "a": [
      "Stephanie Woomer",
      "Vicki Main"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "David Marchese",
      "Brett Kleger"
     ],
     "a": [
      "Jingwei Wu",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Sandro Stefanelli",
      "Chris Norton"
     ],
     "a": [
      "Michael Dieterle",
      "Derek Le"
     ]
    }
   ],
   "subs": [
    "Kristina Rhodes"
   ]
  },
  {
   "result": null,
   "week": 6,
   "home": "Premiere",
   "away": "Allstar Pickler",
   "time": "2026-09-26T12:00:00",
   "complete": false,
   "games": [
    {
     "t": "mixed",
     "h": [
      "Jacklyn Beck",
      "Marek Beck"
     ],
     "a": [
      "Evelyn Du",
      "Abraham Telechanski"
     ],
     "hSub": [
      1,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Hayley Yandoli",
      "Erik Lombardo"
     ],
     "a": [
      "Margaret Weidlich",
      "Mark Fappiano"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Nancy Lin",
      "John Ficarra"
     ],
     "a": [
      "Cuc Dang",
      "John Sallo"
     ],
     "aSub": [
      1,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Tara Lombardo",
      "Alfonse Calato"
     ],
     "a": [
      "Ronnie Yin",
      "Liangjie Zhu"
     ]
    },
    {
     "t": "female",
     "h": [
      "Tara Lombardo",
      "Hayley Yandoli"
     ],
     "a": [
      "Cuc Dang",
      "Margaret Weidlich"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "female",
     "h": [
      "Quen Koon Ng",
      "Nancy Lin"
     ],
     "a": [
      "Evelyn Du",
      "Ronnie Yin"
     ]
    },
    {
     "t": "male",
     "h": [
      "John Ficarra",
      "James Gross"
     ],
     "a": [
      "Liangjie Zhu",
      "Mark Fappiano"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Jeffrey Rubin",
      "Marek Beck"
     ],
     "a": [
      "Abraham Telechanski",
      "John Sallo"
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
      "Hayley Yandoli",
      "Alfonse Calato"
     ],
     "a": [
      "Evelyn Du",
      "Abraham Telechanski"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Quen Koon Ng",
      "James Gross"
     ],
     "a": [
      "Margaret Weidlich",
      "Mark Fappiano"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Tara Lombardo",
      "Erik Lombardo"
     ],
     "a": [
      "Cuc Dang",
      "Yang Xu"
     ],
     "aSub": [
      1,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Jacklyn Beck",
      "Marek Beck"
     ],
     "a": [
      "Ronnie Yin",
      "Liangjie Zhu"
     ],
     "hSub": [
      1,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Quen Koon Ng",
      "Nancy Lin"
     ],
     "a": [
      "Margaret Weidlich",
      "Cuc Dang"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Jacklyn Beck",
      "Hayley Yandoli"
     ],
     "a": [
      "Ronnie Yin",
      "Evelyn Du"
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "male",
     "h": [
      "John Ficarra",
      "James Gross"
     ],
     "a": [
      "John Sallo",
      "Yang Xu"
     ],
     "aSub": [
      1,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Alfonse Calato",
      "Jeffrey Rubin"
     ],
     "a": [
      "Abraham Telechanski",
      "Mark Fappiano"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Tara Lombardo",
      "Marek Beck"
     ],
     "a": [
      "Evelyn Du",
      "Mark Fappiano"
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
      "Jacklyn Beck",
      "Jeffrey Rubin"
     ],
     "a": [
      "Cuc Dang",
      "Abraham Telechanski"
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
      "Quen Koon Ng",
      "John Ficarra"
     ],
     "a": [
      "Margaret Weidlich",
      "Liangjie Zhu"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Nancy Lin",
      "Erik Lombardo"
     ],
     "a": [
      "Ronnie Yin",
      "John Sallo"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Nancy Lin",
      "Hayley Yandoli"
     ],
     "a": [
      "Cuc Dang",
      "Evelyn Du"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "female",
     "h": [
      "Tara Lombardo",
      "Jacklyn Beck"
     ],
     "a": [
      "Ronnie Yin",
      "Margaret Weidlich"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Alfonse Calato",
      "Marek Beck"
     ],
     "a": [
      "Liangjie Zhu",
      "John Sallo"
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
      "Erik Lombardo",
      "James Gross"
     ],
     "a": [
      "Mark Fappiano",
      "Yang Xu"
     ],
     "aSub": [
      1,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Hayley Yandoli",
      "Jeffrey Rubin"
     ],
     "a": [
      "Cuc Dang",
      "Liangjie Zhu"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Quen Koon Ng",
      "James Gross"
     ],
     "a": [
      "Evelyn Du",
      "Yang Xu"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Nancy Lin",
      "John Ficarra"
     ],
     "a": [
      "Margaret Weidlich",
      "Abraham Telechanski"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Tara Lombardo",
      "Alfonse Calato"
     ],
     "a": [
      "Ronnie Yin",
      "Mark Fappiano"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Quen Koon Ng",
      "Hayley Yandoli"
     ],
     "a": [
      "Evelyn Du",
      "Margaret Weidlich"
     ]
    },
    {
     "t": "female",
     "h": [
      "Tara Lombardo",
      "Jacklyn Beck"
     ],
     "a": [
      "Cuc Dang",
      "Ronnie Yin"
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
      "Erik Lombardo",
      "Marek Beck"
     ],
     "a": [
      "John Sallo",
      "Liangjie Zhu"
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
      "Alfonse Calato",
      "Jeffrey Rubin"
     ],
     "a": [
      "Yang Xu",
      "Abraham Telechanski"
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
   "home": "Flemington Blue",
   "away": "Jersey Pickleball Club",
   "time": "2026-09-26T12:00:00",
   "complete": false,
   "games": [
    {
     "t": "mixed",
     "h": [
      "Susan Ackley",
      "Bill Brandt"
     ],
     "a": [
      "Alice Napolitano",
      "Darren Saks"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Chanda Mccoy",
      "John Pineda"
     ],
     "a": [
      "Natasha De Carvalho",
      "John Rogers"
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
     "t": "mixed",
     "h": [
      "Fabienne Yu",
      "Marc Friedman"
     ],
     "a": [
      "Amy Chrebet",
      "Yi Gu"
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Carol Mastroianni",
      "Scott Rubin"
     ],
     "a": [
      "Meryl Nadler",
      "Lance Brown"
     ]
    },
    {
     "t": "female",
     "h": [
      "Susan Ackley",
      "Carol Mastroianni"
     ],
     "a": [
      "Alice Napolitano",
      "Natasha De Carvalho"
     ]
    },
    {
     "t": "female",
     "h": [
      "Chanda Mccoy",
      "Ceil Gomez"
     ],
     "a": [
      "Amy Chrebet",
      "Meryl Nadler"
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "male",
     "h": [
      "Bill Brandt",
      "Marc Friedman"
     ],
     "a": [
      "John Rogers",
      "Darren Saks"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "male",
     "h": [
      "Scott Rubin",
      "John Pineda"
     ],
     "a": [
      "Yi Gu",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Fabienne Yu",
      "Marc Friedman"
     ],
     "a": [
      "Alice Napolitano",
      "John Rogers"
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
     "t": "mixed",
     "h": [
      "Susan Ackley",
      "Bill Brandt"
     ],
     "a": [
      "Natasha De Carvalho",
      "Yi Gu"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Chanda Mccoy",
      "Scott Rubin"
     ],
     "a": [
      "Amy Chrebet",
      "Lance Brown"
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Ceil Gomez",
      "John Pineda"
     ],
     "a": [
      "Meryl Nadler",
      "Darren Saks"
     ]
    },
    {
     "t": "female",
     "h": [
      "Chanda Mccoy",
      "Ceil Gomez"
     ],
     "a": [
      "Alice Napolitano",
      "Amy Chrebet"
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "female",
     "h": [
      "Susan Ackley",
      "Carol Mastroianni"
     ],
     "a": [
      "Natasha De Carvalho",
      "Meryl Nadler"
     ]
    },
    {
     "t": "male",
     "h": [
      "John Pineda",
      "Scott Rubin"
     ],
     "a": [
      "Darren Saks",
      "Yi Gu"
     ]
    },
    {
     "t": "male",
     "h": [
      "Bill Brandt",
      "Marc Friedman"
     ],
     "a": [
      "John Rogers",
      "Lance Brown"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Chanda Mccoy",
      "Bill Brandt"
     ],
     "a": [
      "Alice Napolitano",
      "Darren Saks"
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Fabienne Yu",
      "John Pineda"
     ],
     "a": [
      "Natasha De Carvalho",
      "John Rogers"
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
     "t": "mixed",
     "h": [
      "Carol Mastroianni",
      "Marc Friedman"
     ],
     "a": [
      "Amy Chrebet",
      "Yi Gu"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Ceil Gomez",
      "Scott Rubin"
     ],
     "a": [
      "Meryl Nadler",
      "Lance Brown"
     ]
    },
    {
     "t": "female",
     "h": [
      "Susan Ackley",
      "Ceil Gomez"
     ],
     "a": [
      "Alice Napolitano",
      "Natasha De Carvalho"
     ]
    },
    {
     "t": "female",
     "h": [
      "Carol Mastroianni",
      "Fabienne Yu"
     ],
     "a": [
      "Amy Chrebet",
      "Meryl Nadler"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Bill Brandt",
      "John Pineda"
     ],
     "a": [
      "Darren Saks",
      "John Rogers"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Scott Rubin",
      "Marc Friedman"
     ],
     "a": [
      "Yi Gu",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Chanda Mccoy",
      "Bill Brandt"
     ],
     "a": [
      "Alice Napolitano",
      "Lance Brown"
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Susan Ackley",
      "John Pineda"
     ],
     "a": [
      "Natasha De Carvalho",
      "Yi Gu"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Fabienne Yu",
      "Scott Rubin"
     ],
     "a": [
      "Amy Chrebet",
      "John Rogers"
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
     "t": "mixed",
     "h": [
      "Ceil Gomez",
      "Marc Friedman"
     ],
     "a": [
      "Meryl Nadler",
      "Darren Saks"
     ]
    },
    {
     "t": "female",
     "h": [
      "Chanda Mccoy",
      "Carol Mastroianni"
     ],
     "a": [
      "Alice Napolitano",
      "Amy Chrebet"
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "female",
     "h": [
      "Susan Ackley",
      "Fabienne Yu"
     ],
     "a": [
      "Natasha De Carvalho",
      "Meryl Nadler"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "John Pineda",
      "Marc Friedman"
     ],
     "a": [
      "Darren Saks",
      "Yi Gu"
     ]
    },
    {
     "t": "male",
     "h": [
      "Bill Brandt",
      "Scott Rubin"
     ],
     "a": [
      "John Rogers",
      "Lance Brown"
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
   "home": "APC Garden State",
   "away": "Flemington Green",
   "time": "2026-09-26T13:00:00",
   "complete": false,
   "games": [
    {
     "t": "mixed",
     "h": [
      "Kelly Dalsey",
      "John Darrah"
     ],
     "a": [
      "Katrina Mcintyre",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Cynthia Covie",
      "Steve Hong"
     ],
     "a": [
      "Barbara Hess",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Kerry Gray-Style",
      "Jimmy Shapiro"
     ],
     "a": [
      "Aimee Castellano",
      "Bob Castellano"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Lisa Loeber",
      "Andrew Fleischer"
     ],
     "a": [
      "Christine Papa",
      "Craig Batten"
     ]
    },
    {
     "t": "female",
     "h": [
      "Cynthia Covie",
      "Lisa Loeber"
     ],
     "a": [
      "Tara Kramer",
      "Christine Papa"
     ]
    },
    {
     "t": "female",
     "h": [
      "Kelly Dalsey",
      "Kerry Gray-Style"
     ],
     "a": [
      "Kristen Soucie",
      "Aimee Castellano"
     ]
    },
    {
     "t": "male",
     "h": [
      "Jimmy Shapiro",
      "Stepan Nevshehirlian"
     ],
     "a": [
      "Eric Luque",
      "David Osborne"
     ]
    },
    {
     "t": "male",
     "h": [
      "John Darrah",
      "Tom Kresky"
     ],
     "a": [
      "Bob Castellano",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Lisa Loeber",
      "Stepan Nevshehirlian"
     ],
     "a": [
      "Aimee Castellano",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Kerry Gray-Style",
      "Tom Kresky"
     ],
     "a": [
      "Kristen Soucie",
      "Craig Batten"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Kelly Dalsey",
      "Steve Hong"
     ],
     "a": [
      "Katrina Mcintyre",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Cynthia Covie",
      "Andrew Fleischer"
     ],
     "a": [
      "Barbara Hess",
      "Bob Castellano"
     ]
    },
    {
     "t": "female",
     "h": [
      "Cynthia Covie",
      "Lisa Loeber"
     ],
     "a": [
      "Tara Kramer",
      "Aimee Castellano"
     ]
    },
    {
     "t": "female",
     "h": [
      "Kelly Dalsey",
      "Kerry Gray-Style"
     ],
     "a": [
      "Katrina Mcintyre",
      "Christine Papa"
     ]
    },
    {
     "t": "male",
     "h": [
      "John Darrah",
      "Andrew Fleischer"
     ],
     "a": [
      "Eric Luque",
      "Richard Demeuse"
     ]
    },
    {
     "t": "male",
     "h": [
      "Stepan Nevshehirlian",
      "Jimmy Shapiro"
     ],
     "a": [
      "Craig Batten",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Kerry Gray-Style",
      "Tom Kresky"
     ],
     "a": [
      "Tara Kramer",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Lisa Loeber",
      "Jimmy Shapiro"
     ],
     "a": [
      "Kristen Soucie",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Cynthia Covie",
      "Andrew Fleischer"
     ],
     "a": [
      "Aimee Castellano",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Kelly Dalsey",
      "Steve Hong"
     ],
     "a": [
      "Katrina Mcintyre",
      "Bob Castellano"
     ]
    },
    {
     "t": "female",
     "h": [
      "Cynthia Covie",
      "Kerry Gray-Style"
     ],
     "a": [
      "Christine Papa",
      "Barbara Hess"
     ]
    },
    {
     "t": "female",
     "h": [
      "Kelly Dalsey",
      "Lisa Loeber"
     ],
     "a": [
      "Kristen Soucie",
      "Tara Kramer"
     ]
    },
    {
     "t": "male",
     "h": [
      "John Darrah",
      "Tom Kresky"
     ],
     "a": [
      "David Osborne",
      "Eric Luque"
     ]
    },
    {
     "t": "male",
     "h": [
      "Steve Hong",
      "Stepan Nevshehirlian"
     ],
     "a": [
      "Bob Castellano",
      "Craig Batten"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Kerry Gray-Style",
      "Andrew Fleischer"
     ],
     "a": [
      "Barbara Hess",
      "Bob Castellano"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Kelly Dalsey",
      "John Darrah"
     ],
     "a": [
      "Tara Kramer",
      "Craig Batten"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Lisa Loeber",
      "Steve Hong"
     ],
     "a": [
      "Kristen Soucie",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Cynthia Covie",
      "Jimmy Shapiro"
     ],
     "a": [
      "Aimee Castellano",
      "David Osborne"
     ]
    },
    {
     "t": "female",
     "h": [
      "Cynthia Covie",
      "Kelly Dalsey"
     ],
     "a": [
      "Katrina Mcintyre",
      "Christine Papa"
     ]
    },
    {
     "t": "female",
     "h": [
      "Lisa Loeber",
      "Kerry Gray-Style"
     ],
     "a": [
      "Aimee Castellano",
      "Barbara Hess"
     ]
    },
    {
     "t": "male",
     "h": [
      "John Darrah",
      "Stepan Nevshehirlian"
     ],
     "a": [
      "Craig Batten",
      "Eric Luque"
     ]
    },
    {
     "t": "male",
     "h": [
      "Tom Kresky",
      "Jimmy Shapiro"
     ],
     "a": [
      "David Osborne",
      "Richard Demeuse"
     ]
    }
   ]
  },
  {
   "result": null,
   "week": 6,
   "home": "Pickle Place",
   "away": "ACE Moorestown",
   "time": "2026-09-26T14:00:00",
   "complete": false,
   "games": [
    {
     "t": "mixed",
     "h": [
      "Marykristin Haskell",
      "Tom Zentmeyer"
     ],
     "a": [
      "Kate Siedell",
      "Thomas Schillow"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Janet Garrity",
      "Thomas Ross"
     ],
     "a": [
      "Kim Hamilton",
      "Robert Finley"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Jane Meng",
      "David Eisen"
     ],
     "a": [
      "Stacey Frank",
      "Marc Harden"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Cynthia Eisen",
      "Jonathan Goldner"
     ],
     "a": [
      "Susan Debbs",
      "Jeff Lorman"
     ]
    },
    {
     "t": "female",
     "h": [
      "Jane Meng",
      "Janet Garrity"
     ],
     "a": [
      "Stacey Frank",
      "Kate Siedell"
     ]
    },
    {
     "t": "female",
     "h": [
      "Cynthia Eisen",
      "Marykristin Haskell"
     ],
     "a": [
      "Susan Debbs",
      "Kim Hamilton"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Jonathan Goldner",
      "Tom Zentmeyer"
     ],
     "a": [
      "Thomas Schillow",
      "Yang Wang"
     ],
     "aSub": [
      1,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "David Eisen",
      "Ed Saxman"
     ],
     "a": [
      "Marc Harden",
      "Robert Finley"
     ],
     "hSub": [
      1,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Marykristin Haskell",
      "David Eisen"
     ],
     "a": [
      "Kate Siedell",
      "Marc Harden"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Janet Garrity",
      "Jonathan Goldner"
     ],
     "a": [
      "Stacey Frank",
      "Jeff Lorman"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Jane Meng",
      "Ed Saxman"
     ],
     "a": [
      "Susan Debbs",
      "Yang Wang"
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
      "Emily Abbott",
      "Thomas Ross"
     ],
     "a": [
      "Kim Hamilton",
      "Thomas Schillow"
     ],
     "aSub": [
      1,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Jane Meng",
      "Nancy Blank"
     ],
     "a": [
      "Stacey Frank",
      "Susan Debbs"
     ]
    },
    {
     "t": "female",
     "h": [
      "Cynthia Eisen",
      "Emily Abbott"
     ],
     "a": [
      "Kate Siedell",
      "Kim Hamilton"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Jonathan Goldner",
      "Thomas Ross"
     ],
     "a": [
      "Thomas Schillow",
      "Robert Finley"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "male",
     "h": [
      "Ed Saxman",
      "Tom Zentmeyer"
     ],
     "a": [
      "Jeff Lorman",
      "Yang Wang"
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
     "t": "mixed",
     "h": [
      "Nancy Blank",
      "Thomas Ross"
     ],
     "a": [
      "Stacey Frank",
      "Jeff Lorman"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Marykristin Haskell",
      "Tom Zentmeyer"
     ],
     "a": [
      "Kim Hamilton",
      "Marc Harden"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Cynthia Eisen",
      "Ed Saxman"
     ],
     "a": [
      "Susan Debbs",
      "Robert Finley"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Jane Meng",
      "David Eisen"
     ],
     "a": [
      "Kate Siedell",
      "Yang Wang"
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
      "Emily Abbott",
      "Janet Garrity"
     ],
     "a": [
      "Kate Siedell",
      "Susan Debbs"
     ]
    },
    {
     "t": "female",
     "h": [
      "Marykristin Haskell",
      "Nancy Blank"
     ],
     "a": [
      "Kim Hamilton",
      "Stacey Frank"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "male",
     "h": [
      "Thomas Ross",
      "Tom Zentmeyer"
     ],
     "a": [
      "Thomas Schillow",
      "Marc Harden"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "male",
     "h": [
      "David Eisen",
      "Jonathan Goldner"
     ],
     "a": [
      "Robert Finley",
      "Yang Wang"
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
     "t": "mixed",
     "h": [
      "Nancy Blank",
      "Jonathan Goldner"
     ],
     "a": [
      "Kim Hamilton",
      "Robert Finley"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Janet Garrity",
      "Ed Saxman"
     ],
     "a": [
      "Susan Debbs",
      "Marc Harden"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Cynthia Eisen",
      "Tom Zentmeyer"
     ],
     "a": [
      "Stacey Frank",
      "Thomas Schillow"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Emily Abbott",
      "David Eisen"
     ],
     "a": [
      "Kate Siedell",
      "Jeff Lorman"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Cynthia Eisen",
      "Nancy Blank"
     ],
     "a": [
      "Kim Hamilton",
      "Susan Debbs"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "female",
     "h": [
      "Emily Abbott",
      "Marykristin Haskell"
     ],
     "a": [
      "Kate Siedell",
      "Stacey Frank"
     ]
    },
    {
     "t": "male",
     "h": [
      "Ed Saxman",
      "Thomas Ross"
     ],
     "a": [
      "Robert Finley",
      "Marc Harden"
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "male",
     "h": [
      "Jonathan Goldner",
      "Tom Zentmeyer"
     ],
     "a": [
      "Thomas Schillow",
      "Yang Wang"
     ],
     "aSub": [
      1,
      1
     ]
    }
   ]
  },
  {
   "result": null,
   "week": 6,
   "home": "Stelton Sports",
   "away": "Bounce Malvern Boom",
   "time": "2026-09-27T12:00:00",
   "complete": false,
   "games": [
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Jamila Sefiane",
      "Ed Gieske"
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
      "Cindy Hu",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Christine Dugan",
      "Chris Norton"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Sandra Thompson",
      "Brett Kleger"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Jamila Sefiane",
      "Christine Dugan"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Linda Zhu",
      "Sandra Thompson"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Brett Kleger",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Jiang Jin",
      "Ed Gieske"
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
      "Jamila Sefiane",
      "Chris Norton"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Cindy Hu",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Christine Dugan",
      "Brett Kleger"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Linda Zhu",
      "Jiang Jin"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Jamila Sefiane",
      "Sandra Thompson"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Cindy Hu",
      "Linda Zhu"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Brett Kleger",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Chris Norton",
      "Ed Gieske"
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
      "Cindy Hu",
      "Jiang Jin"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Christine Dugan",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Linda Zhu",
      "Ed Gieske"
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
      "Sandra Thompson",
      "Brett Kleger"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Jamila Sefiane",
      "Christine Dugan"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Cindy Hu",
      "Sandra Thompson"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Sandro Stefanelli",
      "Chris Norton"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Jiang Jin",
      "Ed Gieske"
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
      "Jamila Sefiane",
      "Ed Gieske"
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
      "Cindy Hu",
      "Chris Norton"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Christine Dugan",
      "Brett Kleger"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Linda Zhu",
      "Jiang Jin"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Christine Dugan",
      "Cindy Hu"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Jamila Sefiane",
      "Linda Zhu"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Jiang Jin",
      "Brett Kleger"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Sandro Stefanelli",
      "Chris Norton"
     ]
    }
   ]
  },
  {
   "result": null,
   "week": 6,
   "home": "Premiere",
   "away": "Pickle Place",
   "time": "2026-09-27T12:00:00",
   "complete": false,
   "games": [
    {
     "t": "mixed",
     "h": [
      "Quen Koon Ng",
      "Steve Gerwer"
     ],
     "a": [
      "Marykristin Haskell",
      "Jay Rohatgi"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Tara Lombardo",
      "Jeffrey Rubin"
     ],
     "a": [
      "Alicia Maguire",
      "Eric Markowitz"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Nancy Lin",
      "Alfonse Calato"
     ],
     "a": [
      "Janet Garrity",
      "Jonathan Goldner"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Hayley Yandoli",
      "Erik Lombardo"
     ],
     "a": [
      "Jane Meng",
      "David Eisen"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Quen Koon Ng",
      "Hayley Yandoli"
     ],
     "a": [
      "Alicia Maguire",
      "Janet Garrity"
     ]
    },
    {
     "t": "female",
     "h": [
      "Tara Lombardo",
      "Nancy Lin"
     ],
     "a": [
      "Jane Meng",
      "Marykristin Haskell"
     ]
    },
    {
     "t": "male",
     "h": [
      "Sal Frangipane",
      "Steve Gerwer"
     ],
     "a": [
      "Jay Rohatgi",
      "Jonathan Goldner"
     ]
    },
    {
     "t": "male",
     "h": [
      "John Ficarra",
      "Jeffrey Rubin"
     ],
     "a": [
      "Ed Saxman",
      "Eric Markowitz"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Tara Lombardo",
      "Sal Frangipane"
     ],
     "a": [
      "Alicia Maguire",
      "Jonathan Goldner"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Nancy Lin",
      "John Ficarra"
     ],
     "a": [
      "Jane Meng",
      "Jay Rohatgi"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Hayley Yandoli",
      "Alfonse Calato"
     ],
     "a": [
      "Cynthia Eisen",
      "Ed Saxman"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Quen Koon Ng",
      "Erik Lombardo"
     ],
     "a": [
      "Janet Garrity",
      "David Eisen"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Tara Lombardo",
      "Hayley Yandoli"
     ],
     "a": [
      "Cynthia Eisen",
      "Marykristin Haskell"
     ]
    },
    {
     "t": "female",
     "h": [
      "Quen Koon Ng",
      "Nancy Lin"
     ],
     "a": [
      "Janet Garrity",
      "Nancy Blank"
     ]
    },
    {
     "t": "male",
     "h": [
      "Alfonse Calato",
      "Jeffrey Rubin"
     ],
     "a": [
      "Eric Markowitz",
      "Jonathan Goldner"
     ]
    },
    {
     "t": "male",
     "h": [
      "John Ficarra",
      "Steve Gerwer"
     ],
     "a": [
      "David Eisen",
      "Ed Saxman"
     ],
     "aSub": [
      1,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Nancy Lin",
      "Sal Frangipane"
     ],
     "a": [
      "Alicia Maguire",
      "Jay Rohatgi"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Quen Koon Ng",
      "Jeffrey Rubin"
     ],
     "a": [
      "Marykristin Haskell",
      "Eric Markowitz"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Tara Lombardo",
      "Erik Lombardo"
     ],
     "a": [
      "Nancy Blank",
      "David Eisen"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Hayley Yandoli",
      "John Ficarra"
     ],
     "a": [
      "Janet Garrity",
      "Ed Saxman"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Quen Koon Ng",
      "Tara Lombardo"
     ],
     "a": [
      "Alicia Maguire",
      "Jane Meng"
     ]
    },
    {
     "t": "female",
     "h": [
      "Nancy Lin",
      "Hayley Yandoli"
     ],
     "a": [
      "Cynthia Eisen",
      "Nancy Blank"
     ]
    },
    {
     "t": "male",
     "h": [
      "Erik Lombardo",
      "Alfonse Calato"
     ],
     "a": [
      "Jay Rohatgi",
      "Jonathan Goldner"
     ]
    },
    {
     "t": "male",
     "h": [
      "Sal Frangipane",
      "Steve Gerwer"
     ],
     "a": [
      "David Eisen",
      "Eric Markowitz"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Quen Koon Ng",
      "John Ficarra"
     ],
     "a": [
      "Cynthia Eisen",
      "Jay Rohatgi"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Tara Lombardo",
      "Alfonse Calato"
     ],
     "a": [
      "Jane Meng",
      "Eric Markowitz"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Hayley Yandoli",
      "Jeffrey Rubin"
     ],
     "a": [
      "Nancy Blank",
      "Jonathan Goldner"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Nancy Lin",
      "Steve Gerwer"
     ],
     "a": [
      "Marykristin Haskell",
      "Ed Saxman"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Quen Koon Ng",
      "Nancy Lin"
     ],
     "a": [
      "Cynthia Eisen",
      "Marykristin Haskell"
     ]
    },
    {
     "t": "female",
     "h": [
      "Tara Lombardo",
      "Hayley Yandoli"
     ],
     "a": [
      "Alicia Maguire",
      "Nancy Blank"
     ]
    },
    {
     "t": "male",
     "h": [
      "Alfonse Calato",
      "Jeffrey Rubin"
     ],
     "a": [
      "Eric Markowitz",
      "Jay Rohatgi"
     ]
    },
    {
     "t": "male",
     "h": [
      "Erik Lombardo",
      "Sal Frangipane"
     ],
     "a": [
      "David Eisen",
      "Ed Saxman"
     ],
     "aSub": [
      1,
      1
     ]
    }
   ]
  },
  {
   "result": null,
   "week": 6,
   "home": "Allstar Pickler",
   "away": "Flemington Green",
   "time": "2026-09-27T13:00:00",
   "complete": false,
   "games": [
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Stacy Garretson",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Tara Kramer",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Aimee Castellano",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Barbara Hess",
      "John Hauth"
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
      "Aimee Castellano",
      "Barbara Hess"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Tara Kramer",
      "Christine Papa"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Eric Luque",
      "Richard Demeuse"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "David Osborne",
      "John Hauth"
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
      "Stacy Garretson",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Christine Papa",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Tara Kramer",
      "John Hauth"
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
      "Aimee Castellano",
      "Eric Luque"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Aimee Castellano",
      "Stacy Garretson"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Barbara Hess",
      "Tara Kramer"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Eric Luque",
      "David Osborne"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Richard Demeuse",
      "John Hauth"
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
      "Barbara Hess",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Aimee Castellano",
      "John Hauth"
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
      "Christine Papa",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Stacy Garretson",
      "David Osborne"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Aimee Castellano",
      "Tara Kramer"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Barbara Hess",
      "Christine Papa"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "David Osborne",
      "Richard Demeuse"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Eric Luque",
      "John Hauth"
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
      "Tara Kramer",
      "John Hauth"
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
      "Aimee Castellano",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Christine Papa",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Stacy Garretson",
      "Richard Demeuse"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Aimee Castellano",
      "Barbara Hess"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Christine Papa",
      "Stacy Garretson"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Eric Luque",
      "John Hauth"
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
      "David Osborne",
      "Richard Demeuse"
     ]
    }
   ]
  },
  {
   "result": null,
   "week": 6,
   "home": "Flemington Blue",
   "away": "APC Garden State",
   "time": "2026-09-27T13:00:00",
   "complete": false,
   "games": [
    {
     "t": "mixed",
     "h": [
      "Susan Ackley",
      "Bill Brandt"
     ],
     "a": [
      "Kelly Dalsey",
      "Stepan Nevshehirlian"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Carol Mastroianni",
      "Steven Gregov"
     ],
     "a": [
      "Laura Sweet",
      "John Darrah"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Amy Johnson",
      "Stephen Locker"
     ],
     "a": [
      "Cynthia Covie",
      "Steve Hong"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Sue Johnson",
      "John Pineda"
     ],
     "a": [
      "Jiyun Yuh",
      "Derek Livingston"
     ]
    },
    {
     "t": "female",
     "h": [
      "Carol Mastroianni",
      "Susan Ackley"
     ],
     "a": [
      "Laura Sweet",
      "Kelly Dalsey"
     ]
    },
    {
     "t": "female",
     "h": [
      "Amy Johnson",
      "Sue Johnson"
     ],
     "a": [
      "Cynthia Covie",
      "Jiyun Yuh"
     ]
    },
    {
     "t": "male",
     "h": [
      "Bill Brandt",
      "Stephen Locker"
     ],
     "a": [
      "John Darrah",
      "Tom Kresky"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Steven Gregov",
      "Jorge Diaz"
     ],
     "a": [
      "Derek Livingston",
      "Stepan Nevshehirlian"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Susan Ackley",
      "Steven Gregov"
     ],
     "a": [
      "Laura Sweet",
      "Tom Kresky"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Carol Mastroianni",
      "Bill Brandt"
     ],
     "a": [
      "Cynthia Covie",
      "Derek Livingston"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Amy Johnson",
      "John Pineda"
     ],
     "a": [
      "Jiyun Yuh",
      "Stepan Nevshehirlian"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Sue Johnson",
      "Jorge Diaz"
     ],
     "a": [
      "Kelly Dalsey",
      "Steve Hong"
     ]
    },
    {
     "t": "female",
     "h": [
      "Carol Mastroianni",
      "Susan Ackley"
     ],
     "a": [
      "Cynthia Covie",
      "Laura Sweet"
     ]
    },
    {
     "t": "female",
     "h": [
      "Amy Johnson",
      "Sue Johnson"
     ],
     "a": [
      "Kelly Dalsey",
      "Jiyun Yuh"
     ]
    },
    {
     "t": "male",
     "h": [
      "Bill Brandt",
      "Steven Gregov"
     ],
     "a": [
      "Stepan Nevshehirlian",
      "Steve Hong"
     ]
    },
    {
     "t": "male",
     "h": [
      "John Pineda",
      "Stephen Locker"
     ],
     "a": [
      "Derek Livingston",
      "John Darrah"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Susan Ackley",
      "Bill Brandt"
     ],
     "a": [
      "Cynthia Covie",
      "Tom Kresky"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Carol Mastroianni",
      "Stephen Locker"
     ],
     "a": [
      "Jiyun Yuh",
      "John Darrah"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Amy Johnson",
      "Jorge Diaz"
     ],
     "a": [
      "Laura Sweet",
      "Steve Hong"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Sue Johnson",
      "John Pineda"
     ],
     "a": [
      "Kelly Dalsey",
      "Derek Livingston"
     ]
    },
    {
     "t": "female",
     "h": [
      "Carol Mastroianni",
      "Sue Johnson"
     ],
     "a": [
      "Laura Sweet",
      "Jiyun Yuh"
     ]
    },
    {
     "t": "female",
     "h": [
      "Susan Ackley",
      "Amy Johnson"
     ],
     "a": [
      "Cynthia Covie",
      "Kelly Dalsey"
     ]
    },
    {
     "t": "male",
     "h": [
      "Steven Gregov",
      "Stephen Locker"
     ],
     "a": [
      "John Darrah",
      "Stepan Nevshehirlian"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "John Pineda",
      "Jorge Diaz"
     ],
     "a": [
      "Derek Livingston",
      "Tom Kresky"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Susan Ackley",
      "Steven Gregov"
     ],
     "a": [
      "Jiyun Yuh",
      "Stepan Nevshehirlian"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Carol Mastroianni",
      "Bill Brandt"
     ],
     "a": [
      "Kelly Dalsey",
      "Steve Hong"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Amy Johnson",
      "Stephen Locker"
     ],
     "a": [
      "Laura Sweet",
      "John Darrah"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Sue Johnson",
      "Jorge Diaz"
     ],
     "a": [
      "Cynthia Covie",
      "Tom Kresky"
     ]
    },
    {
     "t": "female",
     "h": [
      "Susan Ackley",
      "Sue Johnson"
     ],
     "a": [
      "Laura Sweet",
      "Kelly Dalsey"
     ]
    },
    {
     "t": "female",
     "h": [
      "Carol Mastroianni",
      "Amy Johnson"
     ],
     "a": [
      "Cynthia Covie",
      "Jiyun Yuh"
     ]
    },
    {
     "t": "male",
     "h": [
      "John Pineda",
      "Steven Gregov"
     ],
     "a": [
      "Derek Livingston",
      "Stepan Nevshehirlian"
     ]
    },
    {
     "t": "male",
     "h": [
      "Bill Brandt",
      "Jorge Diaz"
     ],
     "a": [
      "Tom Kresky",
      "Steve Hong"
     ]
    }
   ]
  },
  {
   "result": null,
   "week": 6,
   "home": "Jersey Pickleball Club",
   "away": "Bounce Malvern Black",
   "time": "2026-09-27T18:00:00",
   "complete": false,
   "games": [
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Harriet Levin",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Stephanie Woomer",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Katherine Maruyama",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Erika Simone",
      "Jingwei Wu"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Erika Simone",
      "Tera Baccile"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Stephanie Woomer",
      "Harriet Levin"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Michael Finkelstein",
      "Jingwei Wu"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Derek Le",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Tera Baccile",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Katherine Maruyama",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Harriet Levin",
      "Jingwei Wu"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Stephanie Woomer",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Erika Simone",
      "Katherine Maruyama"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Harriet Levin",
      "Tera Baccile"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Keith Goldberg",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Jingwei Wu",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Stephanie Woomer",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Tera Baccile",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Erika Simone",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Katherine Maruyama",
      "Keith Goldberg"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Erika Simone",
      "Stephanie Woomer"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Katherine Maruyama",
      "Harriet Levin"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Michael Finkelstein",
      "Derek Le"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Jingwei Wu",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Harriet Levin",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Stephanie Woomer",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Tera Baccile",
      "Jingwei Wu"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Erika Simone",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Stephanie Woomer",
      "Tera Baccile"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Harriet Levin",
      "Katherine Maruyama"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Jim Darcangelo",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Derek Le",
      "Keith Goldberg"
     ]
    }
   ]
  },
  {
   "result": null,
   "week": 6,
   "home": "Stelton Sports",
   "away": "Pickleball Palace",
   "time": "2026-10-04T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Allstar Pickler",
   "away": "Jersey Pickleball Club",
   "time": "2026-10-03T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Flemington Green",
   "away": "ACE Moorestown",
   "time": "2026-10-03T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Pickleball Palace",
   "away": "Flemington Blue",
   "time": "2026-10-03T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "APC Garden State",
   "away": "Bounce Malvern Boom",
   "time": "2026-10-03T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Stelton Sports",
   "away": "Premiere",
   "time": "2026-10-03T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Bounce Malvern Black",
   "away": "Pickle Place",
   "time": "2026-10-03T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Flemington Blue",
   "away": "Pickleball Palace",
   "time": "2026-10-10T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Premiere",
   "away": "Stelton Sports",
   "time": "2026-10-10T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Pickle Place",
   "away": "Bounce Malvern Black",
   "time": "2026-10-10T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "ACE Moorestown",
   "away": "Flemington Green",
   "time": "2026-10-10T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Bounce Malvern Boom",
   "away": "APC Garden State",
   "time": "2026-10-10T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Jersey Pickleball Club",
   "away": "Allstar Pickler",
   "time": "2026-10-10T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Pickleball Palace",
   "away": "Premiere",
   "time": "2026-10-17T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Flemington Green",
   "away": "Bounce Malvern Boom",
   "time": "2026-10-17T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Allstar Pickler",
   "away": "Flemington Blue",
   "time": "2026-10-17T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "APC Garden State",
   "away": "Pickle Place",
   "time": "2026-10-17T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Bounce Malvern Black",
   "away": "ACE Moorestown",
   "time": "2026-10-17T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Stelton Sports",
   "away": "Jersey Pickleball Club",
   "time": "2026-10-17T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Premiere",
   "away": "Pickleball Palace",
   "time": "2026-10-18T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Premiere",
   "away": "Flemington Blue",
   "time": "2026-10-24T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "APC Garden State",
   "away": "Bounce Malvern Black",
   "time": "2026-10-24T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Flemington Green",
   "away": "Pickle Place",
   "time": "2026-10-24T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Bounce Malvern Boom",
   "away": "ACE Moorestown",
   "time": "2026-10-24T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Stelton Sports",
   "away": "Allstar Pickler",
   "time": "2026-10-24T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Jersey Pickleball Club",
   "away": "Pickleball Palace",
   "time": "2026-10-24T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "ACE Moorestown",
   "away": "Jersey Pickleball Club",
   "time": "2026-10-25T09:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "APC Garden State",
   "away": "Stelton Sports",
   "time": "2026-10-25T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Pickle Place",
   "away": "Allstar Pickler",
   "time": "2026-10-25T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Bounce Malvern Boom",
   "away": "Flemington Blue",
   "time": "2026-10-25T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Bounce Malvern Black",
   "away": "Pickleball Palace",
   "time": "2026-10-25T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Flemington Green",
   "away": "Premiere",
   "time": "2026-10-25T18:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Flemington Green",
   "away": "APC Garden State",
   "time": "2026-10-31T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Pickleball Palace",
   "away": "Stelton Sports",
   "time": "2026-10-31T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Allstar Pickler",
   "away": "Premiere",
   "time": "2026-10-31T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Jersey Pickleball Club",
   "away": "Flemington Blue",
   "time": "2026-10-31T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Bounce Malvern Black",
   "away": "Bounce Malvern Boom",
   "time": "2026-10-31T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "ACE Moorestown",
   "away": "Pickle Place",
   "time": "2026-10-31T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Pickleball Palace",
   "away": "ACE Moorestown",
   "time": "2026-11-01T09:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Flemington Green",
   "away": "Bounce Malvern Black",
   "time": "2026-11-07T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Allstar Pickler",
   "away": "Pickleball Palace",
   "time": "2026-11-07T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "APC Garden State",
   "away": "ACE Moorestown",
   "time": "2026-11-07T13:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Jersey Pickleball Club",
   "away": "Premiere",
   "time": "2026-11-07T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Stelton Sports",
   "away": "Flemington Blue",
   "time": "2026-11-07T14:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Bounce Malvern Boom",
   "away": "Pickle Place",
   "time": "2026-11-07T14:00:00",
   "complete": false
  }
 ],
 "playoffs": [],
 "extraPlayerIds": {
  "Brooke Obrien": "06b66cca-2292-4bbe-962e-1217c4418e18",
  "Yang Ruan": "313153f7-7e8f-4e60-9340-0e0d1a43d6be",
  "Judy Qiu": "524b4051-2245-4d13-a9ec-2c2aac3ec980",
  "Ping Peng": "7af65ce9-d7e3-4d00-b19b-653e6d2dc8d9",
  "Andrea Dellechiaie": "84e4d40d-3b98-4822-b073-e9dc71c0d4d7",
  "Virasack Vorabouth": "a478ffa6-7bfc-4c67-9b3d-0aad661a58bc",
  "Joe Palumbo": "b39664c3-1a6e-4493-968f-6e7f7939f694",
  "Xilin Zhao": "bfecc55a-a909-44da-8292-6b59b37a6043",
  "Alex Miller": "d74d4a67-cb90-44d8-aeea-b48fab564427",
  "Liby Saigal": "dc2026ad-428a-4822-ae40-889727c35b10",
  "Yongzhe Tian": "e1a924b8-3b3a-4780-8348-08a730ba61f2",
  "Rick Vazquez": "e532dafb-ff0f-43fc-82be-687d34ab8c14"
 },
 "meta": {
  "matchesPlayed": 18,
  "provisionalMatches": 0,
  "weeks": "1-6",
  "totalPlayers": 212,
  "ratingHistoryWeeks": [
   {
    "week": 1,
    "label": "1",
    "seq": 0
   },
   {
    "week": 2,
    "label": "2",
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
   },
   {
    "week": 6,
    "label": "6",
    "seq": 5
   }
  ],
  "divisionSlug": "2edc44e7",
  "hasPlayoffs": false,
  "typicalDay": "Saturdays",
  "detailFile": "compiled/detail-2edc44e7.js",
  "clubName": "",
  "divisionName": "4.0 (50+)",
  "leagueType": "travel",
  "seasonSlug": "2026-fall",
  "seasonLabel": "Fall 2026",
  "seasonStatus": "current",
  "podCount": 1,
  "podNames": [
   "North / South"
  ],
  "podSource": "api",
  "reportedPods": [
   "North",
   "South"
  ],
  "podMismatch": {
   "crossPodMatchups": 12,
   "totalMatchups": 72,
   "reported": {
    "South": [
     "ACE Moorestown",
     "APC Garden State",
     "Bounce Malvern Black",
     "Bounce Malvern Boom",
     "Flemington Green",
     "Pickle Place"
    ],
    "North": [
     "Allstar Pickler",
     "Flemington Blue",
     "Jersey Pickleball Club",
     "Pickleball Palace",
     "Premiere",
     "Stelton Sports"
    ]
   },
   "schedule": {
    "Pod 1": [
     "ACE Moorestown",
     "Allstar Pickler",
     "APC Garden State",
     "Bounce Malvern Black",
     "Bounce Malvern Boom",
     "Flemington Blue",
     "Flemington Green",
     "Jersey Pickleball Club",
     "Pickle Place",
     "Pickleball Palace",
     "Premiere",
     "Stelton Sports"
    ]
   }
  }
 }
};
  DATA.meta.asOf = "2026-09-26T02:38:52.379Z";
  window.DATA = DATA;
  window.CPL_DATASETS = window.CPL_DATASETS || {};
  window.CPL_DATASETS["2edc44e7"] = DATA;
})();
