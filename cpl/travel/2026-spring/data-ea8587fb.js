(function () {
  const DATA = {
 "players": [
  {
   "name": "Katarzyna Clevenger",
   "gender": "Female",
   "team": "ACE",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 7,
   "losses": 0,
   "pointsWon": 147,
   "totalPointsAgainst": 106,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "adc8c45e-c260-49fe-a318-ee643df2b86f",
   "winPct": 100,
   "diff": 41,
   "ppg": 21,
   "leagueRank": 50,
   "rating": 2.1,
   "ratingGames": 7,
   "confidence": 59,
   "strengthOfPartners": 2.8,
   "strengthOfOpponents": 0.1
  },
  {
   "name": "Jonathan Brand",
   "gender": "Male",
   "team": "ACE",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 86,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "3d1b28fd-25f4-4145-bccd-6b25ab627ffe",
   "winPct": 100,
   "diff": 40,
   "ppg": 21,
   "leagueRank": 49,
   "rating": 1.7,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": 2.7,
   "strengthOfOpponents": -0.5
  },
  {
   "name": "Jingwei Wu",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 7,
   "losses": 0,
   "pointsWon": 147,
   "totalPointsAgainst": 110,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "58e052c4-6ab5-46a7-8e6c-6c7a465262e5",
   "winPct": 100,
   "diff": 37,
   "ppg": 21,
   "leagueRank": 54,
   "rating": 1.4,
   "ratingGames": 7,
   "confidence": 61,
   "strengthOfPartners": 2.3,
   "strengthOfOpponents": -0.4
  },
  {
   "name": "Gog Boonswang",
   "gender": "Male",
   "team": "ACE",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 5,
   "losses": 0,
   "pointsWon": 105,
   "totalPointsAgainst": 80,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "0de1a7eb-b5b2-4a71-8800-1416980b0e68",
   "winPct": 100,
   "diff": 25,
   "ppg": 21,
   "leagueRank": 51,
   "rating": 0.6,
   "ratingGames": 5,
   "confidence": 51,
   "strengthOfPartners": 3.4,
   "strengthOfOpponents": -0.2
  },
  {
   "name": "Daniel Chernin",
   "gender": "Male",
   "team": "Home Court",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 15,
   "losses": 1,
   "pointsWon": 332,
   "totalPointsAgainst": 233,
   "mixedWins": 7,
   "mixedLosses": 1,
   "genderWins": 8,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 0,
   "playerId": "9fc26554-f672-4501-9d2e-a8553fd79eaf",
   "winPct": 93.8,
   "diff": 99,
   "ppg": 20.8,
   "leagueRank": 53,
   "rating": 3.8,
   "ratingGames": 16,
   "confidence": 76,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 0.1
  },
  {
   "name": "Kelly Karrer",
   "gender": "Female",
   "team": "ACE",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 14,
   "losses": 1,
   "pointsWon": 304,
   "totalPointsAgainst": 236,
   "mixedWins": 6,
   "mixedLosses": 1,
   "genderWins": 8,
   "genderLosses": 0,
   "clutchWins": 4,
   "clutchLosses": 0,
   "playerId": "8fb35aa1-9d99-4c72-9d67-73e7a074b016",
   "winPct": 93.3,
   "diff": 68,
   "ppg": 20.3,
   "leagueRank": 33,
   "rating": 1.1,
   "ratingGames": 15,
   "confidence": 76,
   "strengthOfPartners": 2.9,
   "strengthOfOpponents": -0.1
  },
  {
   "name": "Ed Hutchinson",
   "gender": "Male",
   "team": "ACE",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 25,
   "losses": 2,
   "pointsWon": 563,
   "totalPointsAgainst": 383,
   "mixedWins": 13,
   "mixedLosses": 2,
   "genderWins": 12,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 92.6,
   "diff": 180,
   "ppg": 20.9,
   "leagueRank": 9,
   "rating": 5.1,
   "ratingGames": 27,
   "confidence": 85,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": 0.6,
   "playerId": "ab2b30c5-ffb3-4863-b7a2-af2272f13452"
  },
  {
   "name": "Marc Harden",
   "gender": "Male",
   "team": "ACE",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 33,
   "losses": 4,
   "pointsWon": 766,
   "totalPointsAgainst": 482,
   "mixedWins": 22,
   "mixedLosses": 2,
   "genderWins": 11,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 89.2,
   "diff": 284,
   "ppg": 20.7,
   "leagueRank": 1,
   "rating": 5.2,
   "ratingGames": 37,
   "confidence": 88,
   "strengthOfPartners": 2.4,
   "strengthOfOpponents": 0.3,
   "playerId": "55194d2f-f537-4e19-b901-86c559f25ef2"
  },
  {
   "name": "Sandy Alkins",
   "gender": "Female",
   "team": "ACE",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 24,
   "losses": 3,
   "pointsWon": 555,
   "totalPointsAgainst": 414,
   "mixedWins": 10,
   "mixedLosses": 2,
   "genderWins": 14,
   "genderLosses": 1,
   "clutchWins": 6,
   "clutchLosses": 1,
   "winPct": 88.9,
   "diff": 141,
   "ppg": 20.6,
   "leagueRank": 15,
   "rating": 2.4,
   "ratingGames": 27,
   "confidence": 84,
   "strengthOfPartners": 2.6,
   "strengthOfOpponents": 0.1,
   "playerId": "9c29c52b-9d2a-4a5f-b967-7bafd018446b"
  },
  {
   "name": "James Shaw",
   "gender": "Male",
   "team": "ACE",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 43,
   "wins": 38,
   "losses": 5,
   "pointsWon": 887,
   "totalPointsAgainst": 640,
   "mixedWins": 14,
   "mixedLosses": 3,
   "genderWins": 24,
   "genderLosses": 2,
   "clutchWins": 8,
   "clutchLosses": 2,
   "winPct": 88.4,
   "diff": 247,
   "ppg": 20.6,
   "leagueRank": 3,
   "rating": 3.2,
   "ratingGames": 43,
   "confidence": 89,
   "strengthOfPartners": 2,
   "strengthOfOpponents": -0.1,
   "playerId": "439e30a7-6097-4e20-8a7b-25c57dd5b5d0"
  },
  {
   "name": "Derek Callihan",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 166,
   "totalPointsAgainst": 135,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "5eccfff7-0902-4be1-a70e-361ff447bf6a",
   "winPct": 87.5,
   "diff": 31,
   "ppg": 20.8,
   "leagueRank": 88,
   "rating": 1.7,
   "ratingGames": 8,
   "confidence": 64,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.4
  },
  {
   "name": "Tera Baccile",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 54,
   "wins": 47,
   "losses": 7,
   "pointsWon": 1109,
   "totalPointsAgainst": 783,
   "mixedWins": 23,
   "mixedLosses": 3,
   "genderWins": 24,
   "genderLosses": 4,
   "clutchWins": 6,
   "clutchLosses": 5,
   "winPct": 87,
   "diff": 326,
   "ppg": 20.5,
   "leagueRank": 4,
   "rating": 3.5,
   "ratingGames": 54,
   "confidence": 91,
   "strengthOfPartners": 2.3,
   "strengthOfOpponents": 0,
   "playerId": "d5aa92c7-71df-47c7-84fb-6710e1ed81e2"
  },
  {
   "name": "Kate Curren",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 68,
   "wins": 59,
   "losses": 9,
   "pointsWon": 1391,
   "totalPointsAgainst": 1007,
   "mixedWins": 28,
   "mixedLosses": 6,
   "genderWins": 31,
   "genderLosses": 3,
   "clutchWins": 9,
   "clutchLosses": 3,
   "winPct": 86.8,
   "diff": 384,
   "ppg": 20.5,
   "leagueRank": 6,
   "rating": 4.3,
   "ratingGames": 68,
   "confidence": 92,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.1,
   "playerId": "20e006d9-72f9-4f9e-bad5-750694224782"
  },
  {
   "name": "Harriet Levin",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 73,
   "wins": 63,
   "losses": 10,
   "pointsWon": 1496,
   "totalPointsAgainst": 1048,
   "mixedWins": 33,
   "mixedLosses": 5,
   "genderWins": 30,
   "genderLosses": 5,
   "clutchWins": 10,
   "clutchLosses": 6,
   "winPct": 86.3,
   "diff": 448,
   "ppg": 20.5,
   "leagueRank": 5,
   "rating": 4.5,
   "ratingGames": 73,
   "confidence": 93,
   "strengthOfPartners": 2.1,
   "strengthOfOpponents": 0.4,
   "playerId": "aeff8297-a479-4b3b-9a49-72c410ac8e26"
  },
  {
   "name": "Brian Rowan",
   "gender": "Male",
   "team": "ACE",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 36,
   "losses": 6,
   "pointsWon": 849,
   "totalPointsAgainst": 660,
   "mixedWins": 19,
   "mixedLosses": 1,
   "genderWins": 17,
   "genderLosses": 5,
   "clutchWins": 8,
   "clutchLosses": 2,
   "winPct": 85.7,
   "diff": 189,
   "ppg": 20.2,
   "leagueRank": 11,
   "rating": 2.2,
   "ratingGames": 42,
   "confidence": 89,
   "strengthOfPartners": 2.4,
   "strengthOfOpponents": 0.1,
   "playerId": "136b6979-e0f4-4af2-9f5e-949b8d4bf423"
  },
  {
   "name": "Jeffrey Susskind",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 18,
   "losses": 3,
   "pointsWon": 428,
   "totalPointsAgainst": 337,
   "mixedWins": 9,
   "mixedLosses": 1,
   "genderWins": 9,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 85.7,
   "diff": 91,
   "ppg": 20.4,
   "leagueRank": 34,
   "rating": 2.6,
   "ratingGames": 21,
   "confidence": 80,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": 0.2,
   "playerId": "fd8d97f4-ff3e-46e2-aa8f-e5408a6a9e9c"
  },
  {
   "name": "Dana Luscombe",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 39,
   "losses": 7,
   "pointsWon": 951,
   "totalPointsAgainst": 628,
   "mixedWins": 20,
   "mixedLosses": 3,
   "genderWins": 19,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 6,
   "winPct": 84.8,
   "diff": 323,
   "ppg": 20.7,
   "leagueRank": 2,
   "rating": 3.9,
   "ratingGames": 46,
   "confidence": 90,
   "strengthOfPartners": 2.4,
   "strengthOfOpponents": -0.2,
   "playerId": "be6e11f7-09a1-4b1c-af3d-a052b3c36b7f"
  },
  {
   "name": "Robert Finley",
   "gender": "Male",
   "team": "ACE",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 33,
   "losses": 6,
   "pointsWon": 779,
   "totalPointsAgainst": 630,
   "mixedWins": 11,
   "mixedLosses": 6,
   "genderWins": 22,
   "genderLosses": 0,
   "clutchWins": 12,
   "clutchLosses": 1,
   "winPct": 84.6,
   "diff": 149,
   "ppg": 20,
   "leagueRank": 16,
   "rating": 0.7,
   "ratingGames": 39,
   "confidence": 89,
   "strengthOfPartners": 2.3,
   "strengthOfOpponents": -0.4,
   "playerId": "0d70122a-9002-461f-8600-a9afed2e8c3f"
  },
  {
   "name": "Susan Ackley",
   "gender": "Female",
   "team": "Flemington",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 32,
   "losses": 6,
   "pointsWon": 773,
   "totalPointsAgainst": 563,
   "mixedWins": 13,
   "mixedLosses": 5,
   "genderWins": 19,
   "genderLosses": 1,
   "clutchWins": 5,
   "clutchLosses": 3,
   "winPct": 84.2,
   "diff": 210,
   "ppg": 20.3,
   "leagueRank": 18,
   "rating": 5.3,
   "ratingGames": 38,
   "confidence": 88,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.6,
   "playerId": "07a0e948-6308-4920-a6a8-1d5945552ecb"
  },
  {
   "name": "Kelly Hanson Word",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 61,
   "wins": 51,
   "losses": 10,
   "pointsWon": 1239,
   "totalPointsAgainst": 900,
   "mixedWins": 24,
   "mixedLosses": 6,
   "genderWins": 27,
   "genderLosses": 4,
   "clutchWins": 6,
   "clutchLosses": 5,
   "winPct": 83.6,
   "diff": 339,
   "ppg": 20.3,
   "leagueRank": 12,
   "rating": 4.1,
   "ratingGames": 61,
   "confidence": 92,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0,
   "playerId": "ecfbb129-ba7d-4b52-92b9-869fa7487248"
  },
  {
   "name": "Kamala Gangavalli",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 15,
   "losses": 3,
   "pointsWon": 360,
   "totalPointsAgainst": 313,
   "mixedWins": 8,
   "mixedLosses": 1,
   "genderWins": 7,
   "genderLosses": 2,
   "clutchWins": 7,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 47,
   "ppg": 20,
   "leagueRank": 65,
   "rating": 1.7,
   "ratingGames": 18,
   "confidence": 78,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0,
   "playerId": "26297bb5-23ec-465a-b348-de2b64b6a939"
  },
  {
   "name": "Jill Scully",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 124,
   "totalPointsAgainst": 77,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 47,
   "ppg": 20.7,
   "leagueRank": 69,
   "rating": 1.3,
   "ratingGames": 6,
   "confidence": 57,
   "strengthOfPartners": 2.4,
   "strengthOfOpponents": -1.7,
   "playerId": "754a47b8-0711-4929-928f-9bafe8f9dbc0"
  },
  {
   "name": "Renee Hollander",
   "gender": "Female",
   "team": "Bounce Malvern",
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
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "a38016b3-0c18-4f44-9ad5-35d4589cfb7e",
   "winPct": 83.3,
   "diff": 20,
   "ppg": 20.7,
   "leagueRank": 113,
   "rating": 2.8,
   "ratingGames": 6,
   "confidence": 57,
   "strengthOfPartners": 3,
   "strengthOfOpponents": 2.2
  },
  {
   "name": "Stephanie Woomer",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 69,
   "wins": 57,
   "losses": 12,
   "pointsWon": 1399,
   "totalPointsAgainst": 1033,
   "mixedWins": 25,
   "mixedLosses": 8,
   "genderWins": 32,
   "genderLosses": 4,
   "clutchWins": 9,
   "clutchLosses": 5,
   "winPct": 82.6,
   "diff": 366,
   "ppg": 20.3,
   "leagueRank": 7,
   "rating": 2.7,
   "ratingGames": 69,
   "confidence": 93,
   "strengthOfPartners": 2.4,
   "strengthOfOpponents": 0,
   "playerId": "e05f57f5-c898-404e-b86f-c2460cc23b06"
  },
  {
   "name": "Keith Goldberg",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 63,
   "wins": 52,
   "losses": 11,
   "pointsWon": 1280,
   "totalPointsAgainst": 940,
   "mixedWins": 28,
   "mixedLosses": 4,
   "genderWins": 24,
   "genderLosses": 7,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 82.5,
   "diff": 340,
   "ppg": 20.3,
   "leagueRank": 10,
   "rating": 3.3,
   "ratingGames": 63,
   "confidence": 92,
   "strengthOfPartners": 2.6,
   "strengthOfOpponents": 0.4,
   "playerId": "37a0fa2c-df0b-4d92-900b-a9f20f441ad8"
  },
  {
   "name": "Kate Siedell",
   "gender": "Female",
   "team": "ACE",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 85,
   "wins": 70,
   "losses": 15,
   "pointsWon": 1721,
   "totalPointsAgainst": 1303,
   "mixedWins": 37,
   "mixedLosses": 5,
   "genderWins": 33,
   "genderLosses": 10,
   "clutchWins": 16,
   "clutchLosses": 7,
   "winPct": 82.4,
   "diff": 418,
   "ppg": 20.2,
   "leagueRank": 13,
   "rating": 3.4,
   "ratingGames": 85,
   "confidence": 93,
   "strengthOfPartners": 2.5,
   "strengthOfOpponents": 0.6,
   "playerId": "8decf039-f1e5-4182-b3cf-6756789ae87a"
  },
  {
   "name": "Katherine Maruyama",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 77,
   "wins": 63,
   "losses": 14,
   "pointsWon": 1577,
   "totalPointsAgainst": 1139,
   "mixedWins": 31,
   "mixedLosses": 10,
   "genderWins": 32,
   "genderLosses": 4,
   "clutchWins": 9,
   "clutchLosses": 8,
   "winPct": 81.8,
   "diff": 438,
   "ppg": 20.5,
   "leagueRank": 8,
   "rating": 3.6,
   "ratingGames": 77,
   "confidence": 93,
   "strengthOfPartners": 2.5,
   "strengthOfOpponents": 0.3,
   "playerId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a"
  },
  {
   "name": "Sang Nguyen",
   "gender": "Male",
   "team": "ACE",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 18,
   "losses": 4,
   "pointsWon": 451,
   "totalPointsAgainst": 372,
   "mixedWins": 9,
   "mixedLosses": 3,
   "genderWins": 9,
   "genderLosses": 1,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 81.8,
   "diff": 79,
   "ppg": 20.5,
   "leagueRank": 45,
   "rating": 2,
   "ratingGames": 22,
   "confidence": 82,
   "strengthOfPartners": 2.9,
   "strengthOfOpponents": 0.8,
   "playerId": "cbdf396a-6766-42d5-8fdb-d8011cbcace8"
  },
  {
   "name": "Rebecca Lederman",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 31,
   "losses": 7,
   "pointsWon": 764,
   "totalPointsAgainst": 607,
   "mixedWins": 16,
   "mixedLosses": 3,
   "genderWins": 15,
   "genderLosses": 4,
   "clutchWins": 8,
   "clutchLosses": 3,
   "winPct": 81.6,
   "diff": 157,
   "ppg": 20.1,
   "leagueRank": 19,
   "rating": 2.6,
   "ratingGames": 38,
   "confidence": 88,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": 0.3,
   "playerId": "cb324481-3d73-47c2-9cc0-a1e1650dd87f"
  },
  {
   "name": "Jeff Lorman",
   "gender": "Male",
   "team": "ACE",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 26,
   "losses": 6,
   "pointsWon": 647,
   "totalPointsAgainst": 506,
   "mixedWins": 14,
   "mixedLosses": 4,
   "genderWins": 12,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 81.3,
   "diff": 141,
   "ppg": 20.2,
   "leagueRank": 17,
   "rating": 2,
   "ratingGames": 32,
   "confidence": 86,
   "strengthOfPartners": 2.3,
   "strengthOfOpponents": 0,
   "playerId": "75789bbc-0dde-460e-b905-7bd1189c6a90"
  },
  {
   "name": "Alex Lee",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 47,
   "wins": 38,
   "losses": 9,
   "pointsWon": 949,
   "totalPointsAgainst": 741,
   "mixedWins": 19,
   "mixedLosses": 5,
   "genderWins": 19,
   "genderLosses": 4,
   "clutchWins": 8,
   "clutchLosses": 3,
   "winPct": 80.9,
   "diff": 208,
   "ppg": 20.2,
   "leagueRank": 20,
   "rating": 3.7,
   "ratingGames": 47,
   "confidence": 90,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.5,
   "playerId": "22e2201d-16d7-4474-847b-5f4f0cef44e6"
  },
  {
   "name": "Marc Pellicane",
   "gender": "Male",
   "team": "ACE",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 48,
   "wins": 38,
   "losses": 10,
   "pointsWon": 967,
   "totalPointsAgainst": 710,
   "mixedWins": 10,
   "mixedLosses": 6,
   "genderWins": 28,
   "genderLosses": 4,
   "clutchWins": 5,
   "clutchLosses": 6,
   "winPct": 79.2,
   "diff": 257,
   "ppg": 20.1,
   "leagueRank": 14,
   "rating": 2.6,
   "ratingGames": 48,
   "confidence": 90,
   "strengthOfPartners": 2.5,
   "strengthOfOpponents": 0,
   "playerId": "1c13f01f-aeb7-45db-9faf-a6567d22bb81"
  },
  {
   "name": "Kerry Schaffer",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 19,
   "losses": 5,
   "pointsWon": 474,
   "totalPointsAgainst": 401,
   "mixedWins": 8,
   "mixedLosses": 4,
   "genderWins": 11,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 79.2,
   "diff": 73,
   "ppg": 19.8,
   "leagueRank": 29,
   "rating": 0.5,
   "ratingGames": 24,
   "confidence": 82,
   "strengthOfPartners": 2.5,
   "strengthOfOpponents": 0,
   "playerId": "6c18454a-479d-4cb7-9bd7-2e2c414ee744"
  },
  {
   "name": "Alice Napolitano",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 43,
   "wins": 34,
   "losses": 9,
   "pointsWon": 855,
   "totalPointsAgainst": 728,
   "mixedWins": 17,
   "mixedLosses": 6,
   "genderWins": 17,
   "genderLosses": 3,
   "clutchWins": 7,
   "clutchLosses": 3,
   "winPct": 79.1,
   "diff": 127,
   "ppg": 19.9,
   "leagueRank": 23,
   "rating": 2.7,
   "ratingGames": 43,
   "confidence": 90,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.3,
   "playerId": "d56483b8-a5b8-4c1f-8437-39fcf90a5030"
  },
  {
   "name": "Pam Boyd",
   "gender": "Female",
   "team": "ACE",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 80,
   "wins": 61,
   "losses": 19,
   "pointsWon": 1583,
   "totalPointsAgainst": 1311,
   "mixedWins": 34,
   "mixedLosses": 6,
   "genderWins": 27,
   "genderLosses": 13,
   "clutchWins": 20,
   "clutchLosses": 5,
   "winPct": 76.3,
   "diff": 272,
   "ppg": 19.8,
   "leagueRank": 22,
   "rating": 1.6,
   "ratingGames": 80,
   "confidence": 93,
   "strengthOfPartners": 2,
   "strengthOfOpponents": 0.2,
   "playerId": "04aefa29-20e3-41b7-a680-19d13f9d4289"
  },
  {
   "name": "Michael Dieterle",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 63,
   "wins": 48,
   "losses": 15,
   "pointsWon": 1249,
   "totalPointsAgainst": 1018,
   "mixedWins": 24,
   "mixedLosses": 6,
   "genderWins": 24,
   "genderLosses": 9,
   "clutchWins": 8,
   "clutchLosses": 5,
   "winPct": 76.2,
   "diff": 231,
   "ppg": 19.8,
   "leagueRank": 21,
   "rating": 1.4,
   "ratingGames": 63,
   "confidence": 92,
   "strengthOfPartners": 2.3,
   "strengthOfOpponents": 0.1,
   "playerId": "4259501c-f1e3-4859-acd0-c25f342a1b92"
  },
  {
   "name": "Carly Pfeffer",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 21,
   "losses": 7,
   "pointsWon": 558,
   "totalPointsAgainst": 459,
   "mixedWins": 9,
   "mixedLosses": 4,
   "genderWins": 12,
   "genderLosses": 3,
   "clutchWins": 5,
   "clutchLosses": 1,
   "winPct": 75,
   "diff": 99,
   "ppg": 19.9,
   "leagueRank": 39,
   "rating": 2.6,
   "ratingGames": 28,
   "confidence": 85,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.3,
   "playerId": "387e74d4-66ee-4a52-a4ac-aae3dbe1d21b"
  },
  {
   "name": "Liby Saigal",
   "gender": "Female",
   "team": "Home Court",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 12,
   "losses": 4,
   "pointsWon": 317,
   "totalPointsAgainst": 255,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 6,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "dc2026ad-428a-4822-ae40-889727c35b10",
   "winPct": 75,
   "diff": 62,
   "ppg": 19.8,
   "leagueRank": 78,
   "rating": 3.4,
   "ratingGames": 16,
   "confidence": 75,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.5
  },
  {
   "name": "Susan Perry",
   "gender": "Female",
   "team": "ACE",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 9,
   "losses": 3,
   "pointsWon": 244,
   "totalPointsAgainst": 214,
   "mixedWins": 5,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 7,
   "clutchLosses": 1,
   "playerId": "757d136f-a9ac-432e-a582-3769f40d0b2d",
   "winPct": 75,
   "diff": 30,
   "ppg": 20.3,
   "leagueRank": 91,
   "rating": 0.4,
   "ratingGames": 12,
   "confidence": 71,
   "strengthOfPartners": 2,
   "strengthOfOpponents": 0
  },
  {
   "name": "Donna Taylor",
   "gender": "Female",
   "team": "ACE",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 13,
   "losses": 5,
   "pointsWon": 357,
   "totalPointsAgainst": 285,
   "mixedWins": 8,
   "mixedLosses": 1,
   "genderWins": 5,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 72.2,
   "diff": 72,
   "ppg": 19.8,
   "leagueRank": 70,
   "rating": 0.6,
   "ratingGames": 18,
   "confidence": 78,
   "strengthOfPartners": 2.4,
   "strengthOfOpponents": -0.4,
   "playerId": "c17e02c9-4feb-47ce-bf5e-29b03155bf21"
  },
  {
   "name": "Raymond Yuen",
   "gender": "Male",
   "team": "Monroe",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 137,
   "totalPointsAgainst": 122,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "6b4a8c95-2b38-498c-9c91-ff083fe842f3",
   "winPct": 71.4,
   "diff": 15,
   "ppg": 19.6,
   "leagueRank": 145,
   "rating": 0.4,
   "ratingGames": 7,
   "confidence": 61,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.8
  },
  {
   "name": "Derek Le",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 62,
   "wins": 44,
   "losses": 18,
   "pointsWon": 1213,
   "totalPointsAgainst": 1047,
   "mixedWins": 20,
   "mixedLosses": 8,
   "genderWins": 24,
   "genderLosses": 10,
   "clutchWins": 11,
   "clutchLosses": 6,
   "winPct": 71,
   "diff": 166,
   "ppg": 19.6,
   "leagueRank": 25,
   "rating": 0.9,
   "ratingGames": 62,
   "confidence": 92,
   "strengthOfPartners": 2.2,
   "strengthOfOpponents": 0.2,
   "playerId": "8cf7b40c-ed2c-4c8b-83bd-b9f2d486c690"
  },
  {
   "name": "Brad Daddis",
   "gender": "Male",
   "team": "ACE",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 17,
   "losses": 7,
   "pointsWon": 479,
   "totalPointsAgainst": 404,
   "mixedWins": 15,
   "mixedLosses": 5,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 70.8,
   "diff": 75,
   "ppg": 20,
   "leagueRank": 38,
   "rating": 1,
   "ratingGames": 24,
   "confidence": 83,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": -0.1,
   "playerId": "3b22e073-2c4b-4245-a142-29441ec509a3"
  },
  {
   "name": "Andrea Dellechiaie",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 29,
   "losses": 12,
   "pointsWon": 812,
   "totalPointsAgainst": 687,
   "mixedWins": 11,
   "mixedLosses": 10,
   "genderWins": 18,
   "genderLosses": 2,
   "clutchWins": 10,
   "clutchLosses": 7,
   "winPct": 70.7,
   "diff": 125,
   "ppg": 19.8,
   "leagueRank": 27,
   "rating": 1.7,
   "ratingGames": 41,
   "confidence": 89,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0,
   "playerId": "84e4d40d-3b98-4822-b073-e9dc71c0d4d7"
  },
  {
   "name": "Jean Wang",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 47,
   "wins": 33,
   "losses": 14,
   "pointsWon": 925,
   "totalPointsAgainst": 779,
   "mixedWins": 17,
   "mixedLosses": 5,
   "genderWins": 16,
   "genderLosses": 9,
   "clutchWins": 7,
   "clutchLosses": 6,
   "winPct": 70.2,
   "diff": 146,
   "ppg": 19.7,
   "leagueRank": 30,
   "rating": 3.3,
   "ratingGames": 47,
   "confidence": 90,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.4,
   "playerId": "1188fc00-7ef5-4671-9ef9-2c7d162a2604"
  },
  {
   "name": "Karan Pescatore",
   "gender": "Female",
   "team": "Home Court",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 47,
   "wins": 33,
   "losses": 14,
   "pointsWon": 934,
   "totalPointsAgainst": 805,
   "mixedWins": 20,
   "mixedLosses": 4,
   "genderWins": 13,
   "genderLosses": 10,
   "clutchWins": 9,
   "clutchLosses": 8,
   "winPct": 70.2,
   "diff": 129,
   "ppg": 19.9,
   "leagueRank": 35,
   "rating": 2.7,
   "ratingGames": 47,
   "confidence": 90,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.2,
   "playerId": "2cb4b2dd-d14b-4bab-a8be-ef4b14845711"
  },
  {
   "name": "Johnson Chang",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 43,
   "wins": 30,
   "losses": 13,
   "pointsWon": 849,
   "totalPointsAgainst": 737,
   "mixedWins": 12,
   "mixedLosses": 5,
   "genderWins": 18,
   "genderLosses": 8,
   "clutchWins": 9,
   "clutchLosses": 6,
   "winPct": 69.8,
   "diff": 112,
   "ppg": 19.7,
   "leagueRank": 32,
   "rating": 1.5,
   "ratingGames": 43,
   "confidence": 89,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0.3,
   "playerId": "6994f1c2-d156-436a-bbb6-e9e348bea33a"
  },
  {
   "name": "Darren Saks",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 25,
   "losses": 11,
   "pointsWon": 699,
   "totalPointsAgainst": 647,
   "mixedWins": 14,
   "mixedLosses": 4,
   "genderWins": 11,
   "genderLosses": 7,
   "clutchWins": 10,
   "clutchLosses": 4,
   "winPct": 69.4,
   "diff": 52,
   "ppg": 19.4,
   "leagueRank": 41,
   "rating": 1.4,
   "ratingGames": 37,
   "confidence": 88,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.3,
   "playerId": "9bf7b8ab-4dfa-442b-be12-77580a5ea1dc"
  },
  {
   "name": "Stacey Frank",
   "gender": "Female",
   "team": "ACE",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 68,
   "wins": 47,
   "losses": 21,
   "pointsWon": 1335,
   "totalPointsAgainst": 1097,
   "mixedWins": 21,
   "mixedLosses": 12,
   "genderWins": 26,
   "genderLosses": 9,
   "clutchWins": 14,
   "clutchLosses": 10,
   "winPct": 69.1,
   "diff": 238,
   "ppg": 19.6,
   "leagueRank": 24,
   "rating": 2.6,
   "ratingGames": 68,
   "confidence": 92,
   "strengthOfPartners": 2.4,
   "strengthOfOpponents": 0.8,
   "playerId": "768c88bd-683d-4204-8124-a589c8028b6e"
  },
  {
   "name": "Michael Finkelstein",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 68,
   "wins": 47,
   "losses": 21,
   "pointsWon": 1350,
   "totalPointsAgainst": 1157,
   "mixedWins": 27,
   "mixedLosses": 12,
   "genderWins": 20,
   "genderLosses": 9,
   "clutchWins": 12,
   "clutchLosses": 11,
   "winPct": 69.1,
   "diff": 193,
   "ppg": 19.9,
   "leagueRank": 26,
   "rating": 1.2,
   "ratingGames": 68,
   "confidence": 92,
   "strengthOfPartners": 2.1,
   "strengthOfOpponents": 0.3,
   "playerId": "861c3f68-2c96-4a96-a75e-645020f73a5c"
  },
  {
   "name": "Laura Elleman",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 20,
   "losses": 9,
   "pointsWon": 554,
   "totalPointsAgainst": 492,
   "mixedWins": 8,
   "mixedLosses": 6,
   "genderWins": 12,
   "genderLosses": 3,
   "clutchWins": 7,
   "clutchLosses": 2,
   "winPct": 69,
   "diff": 62,
   "ppg": 19.1,
   "leagueRank": 37,
   "rating": 0.5,
   "ratingGames": 29,
   "confidence": 84,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.4,
   "playerId": "3e6056c2-7c5b-4123-b457-ffcf82d3b422"
  },
  {
   "name": "Raneeta Sawhney-Rigby",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 11,
   "losses": 5,
   "pointsWon": 296,
   "totalPointsAgainst": 242,
   "mixedWins": 7,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "8ee2191e-34c1-4f6b-b366-5a1bbc5bcb36",
   "winPct": 68.8,
   "diff": 54,
   "ppg": 18.5,
   "leagueRank": 92,
   "rating": 3.4,
   "ratingGames": 16,
   "confidence": 75,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 1
  },
  {
   "name": "Gary Sidhu",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 13,
   "losses": 6,
   "pointsWon": 380,
   "totalPointsAgainst": 323,
   "mixedWins": 6,
   "mixedLosses": 4,
   "genderWins": 7,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 68.4,
   "diff": 57,
   "ppg": 20,
   "leagueRank": 90,
   "rating": 3.1,
   "ratingGames": 19,
   "confidence": 80,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.6,
   "playerId": "fa28fec9-9eff-4831-912d-4180f8760eeb"
  },
  {
   "name": "Rick Vazquez",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 26,
   "losses": 12,
   "pointsWon": 733,
   "totalPointsAgainst": 681,
   "mixedWins": 15,
   "mixedLosses": 6,
   "genderWins": 11,
   "genderLosses": 6,
   "clutchWins": 7,
   "clutchLosses": 3,
   "winPct": 68.4,
   "diff": 52,
   "ppg": 19.3,
   "leagueRank": 43,
   "rating": 0.2,
   "ratingGames": 38,
   "confidence": 88,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": 0.3,
   "playerId": "e532dafb-ff0f-43fc-82be-687d34ab8c14"
  },
  {
   "name": "Lily Liu",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 53,
   "wins": 36,
   "losses": 17,
   "pointsWon": 1022,
   "totalPointsAgainst": 930,
   "mixedWins": 16,
   "mixedLosses": 10,
   "genderWins": 20,
   "genderLosses": 7,
   "clutchWins": 12,
   "clutchLosses": 7,
   "winPct": 67.9,
   "diff": 92,
   "ppg": 19.3,
   "leagueRank": 46,
   "rating": 3.4,
   "ratingGames": 53,
   "confidence": 91,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.7,
   "playerId": "91f78b3d-a1b7-44a8-a804-6035152bf1a2"
  },
  {
   "name": "Liangjie Zhu",
   "gender": "Male",
   "team": "Montville",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 59,
   "wins": 40,
   "losses": 19,
   "pointsWon": 1166,
   "totalPointsAgainst": 1035,
   "mixedWins": 17,
   "mixedLosses": 13,
   "genderWins": 23,
   "genderLosses": 6,
   "clutchWins": 14,
   "clutchLosses": 10,
   "winPct": 67.8,
   "diff": 131,
   "ppg": 19.8,
   "leagueRank": 42,
   "rating": 2.6,
   "ratingGames": 59,
   "confidence": 91,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0,
   "playerId": "972856ec-207d-4f89-9d97-6fda7c0e083b"
  },
  {
   "name": "Brian Gonzalez",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 60,
   "wins": 40,
   "losses": 20,
   "pointsWon": 1177,
   "totalPointsAgainst": 1028,
   "mixedWins": 20,
   "mixedLosses": 10,
   "genderWins": 20,
   "genderLosses": 10,
   "clutchWins": 12,
   "clutchLosses": 9,
   "winPct": 66.7,
   "diff": 149,
   "ppg": 19.6,
   "leagueRank": 36,
   "rating": 1,
   "ratingGames": 60,
   "confidence": 92,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.1,
   "playerId": "ecc02ab8-5e9c-4950-89b7-be3f397683c3"
  },
  {
   "name": "Roger Graterol",
   "gender": "Male",
   "team": "ACE",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 18,
   "losses": 9,
   "pointsWon": 522,
   "totalPointsAgainst": 463,
   "mixedWins": 6,
   "mixedLosses": 7,
   "genderWins": 12,
   "genderLosses": 2,
   "clutchWins": 8,
   "clutchLosses": 4,
   "winPct": 66.7,
   "diff": 59,
   "ppg": 19.3,
   "leagueRank": 52,
   "rating": 0.9,
   "ratingGames": 27,
   "confidence": 85,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 0.2,
   "playerId": "23262a95-4498-4ca1-87a9-713c02337168"
  },
  {
   "name": "Tom Maley",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 8,
   "losses": 4,
   "pointsWon": 232,
   "totalPointsAgainst": 219,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 4,
   "clutchLosses": 1,
   "playerId": "e05f8bd0-e64b-42dd-b6a0-42249573b3f4",
   "winPct": 66.7,
   "diff": 13,
   "ppg": 19.3,
   "leagueRank": 136,
   "rating": 0.2,
   "ratingGames": 12,
   "confidence": 72,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.2
  },
  {
   "name": "Kerry Gray-Style",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 106,
   "totalPointsAgainst": 115,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 0,
   "playerId": "5d2f1c91-647e-4f06-bd5e-ad6550674ce4",
   "winPct": 66.7,
   "diff": -9,
   "ppg": 17.7,
   "leagueRank": 207,
   "rating": -0.9,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": -0.4
  },
  {
   "name": "Marr Flores",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 108,
   "totalPointsAgainst": 117,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 0,
   "playerId": "1009522f-1f54-4cf1-a0a0-e24ad64f4a66",
   "winPct": 66.7,
   "diff": -9,
   "ppg": 18,
   "leagueRank": 198,
   "rating": -0.8,
   "ratingGames": 6,
   "confidence": 57,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": 1
  },
  {
   "name": "Jim Darcangelo",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 65,
   "wins": 43,
   "losses": 22,
   "pointsWon": 1266,
   "totalPointsAgainst": 1090,
   "mixedWins": 20,
   "mixedLosses": 9,
   "genderWins": 23,
   "genderLosses": 13,
   "clutchWins": 7,
   "clutchLosses": 8,
   "winPct": 66.2,
   "diff": 176,
   "ppg": 19.5,
   "leagueRank": 31,
   "rating": 0.4,
   "ratingGames": 65,
   "confidence": 92,
   "strengthOfPartners": 2.5,
   "strengthOfOpponents": 0.1,
   "playerId": "0530512b-466d-4ff7-9e89-7961b4a63110"
  },
  {
   "name": "Vicki Main",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 53,
   "wins": 35,
   "losses": 18,
   "pointsWon": 1035,
   "totalPointsAgainst": 870,
   "mixedWins": 16,
   "mixedLosses": 11,
   "genderWins": 19,
   "genderLosses": 7,
   "clutchWins": 5,
   "clutchLosses": 10,
   "winPct": 66,
   "diff": 165,
   "ppg": 19.5,
   "leagueRank": 28,
   "rating": 1.3,
   "ratingGames": 53,
   "confidence": 91,
   "strengthOfPartners": 2.4,
   "strengthOfOpponents": 0.3,
   "playerId": "89bdcff6-2fba-4bde-b831-872bf9ce7843"
  },
  {
   "name": "Abraham Telechanski",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 79,
   "wins": 52,
   "losses": 27,
   "pointsWon": 1517,
   "totalPointsAgainst": 1379,
   "mixedWins": 27,
   "mixedLosses": 12,
   "genderWins": 25,
   "genderLosses": 15,
   "clutchWins": 9,
   "clutchLosses": 8,
   "winPct": 65.8,
   "diff": 138,
   "ppg": 19.2,
   "leagueRank": 47,
   "rating": 2.5,
   "ratingGames": 79,
   "confidence": 93,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.5,
   "playerId": "e022118e-9373-4e2a-94f6-391f4fb84a54"
  },
  {
   "name": "Michael Swell",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 49,
   "wins": 32,
   "losses": 17,
   "pointsWon": 967,
   "totalPointsAgainst": 843,
   "mixedWins": 16,
   "mixedLosses": 7,
   "genderWins": 16,
   "genderLosses": 10,
   "clutchWins": 6,
   "clutchLosses": 9,
   "winPct": 65.3,
   "diff": 124,
   "ppg": 19.7,
   "leagueRank": 40,
   "rating": 2.8,
   "ratingGames": 49,
   "confidence": 90,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.7,
   "playerId": "5436acd1-542a-4ca5-a652-c0addcf23ea2"
  },
  {
   "name": "Yaowen Li",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 26,
   "losses": 15,
   "pointsWon": 780,
   "totalPointsAgainst": 714,
   "mixedWins": 14,
   "mixedLosses": 5,
   "genderWins": 12,
   "genderLosses": 10,
   "clutchWins": 9,
   "clutchLosses": 3,
   "winPct": 63.4,
   "diff": 66,
   "ppg": 19,
   "leagueRank": 55,
   "rating": 2,
   "ratingGames": 41,
   "confidence": 89,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.4,
   "playerId": "b0747e45-3190-47d6-97ef-8bb041bf0ba8"
  },
  {
   "name": "Marc Padre",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 79,
   "wins": 50,
   "losses": 29,
   "pointsWon": 1523,
   "totalPointsAgainst": 1399,
   "mixedWins": 23,
   "mixedLosses": 16,
   "genderWins": 27,
   "genderLosses": 13,
   "clutchWins": 10,
   "clutchLosses": 13,
   "winPct": 63.3,
   "diff": 124,
   "ppg": 19.3,
   "leagueRank": 48,
   "rating": 1.7,
   "ratingGames": 79,
   "confidence": 93,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.2,
   "playerId": "a131a707-f20e-4838-9dcf-7cecb40c2705"
  },
  {
   "name": "Fabienne Yu",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 51,
   "wins": 32,
   "losses": 19,
   "pointsWon": 961,
   "totalPointsAgainst": 903,
   "mixedWins": 17,
   "mixedLosses": 10,
   "genderWins": 15,
   "genderLosses": 9,
   "clutchWins": 9,
   "clutchLosses": 7,
   "winPct": 62.7,
   "diff": 58,
   "ppg": 18.8,
   "leagueRank": 57,
   "rating": 0.7,
   "ratingGames": 51,
   "confidence": 90,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.4,
   "playerId": "943ac52a-070f-4bdc-baf8-efe14d0f40ea"
  },
  {
   "name": "Jennifer Wang",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 159,
   "totalPointsAgainst": 137,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "59d2f8a4-3875-4cd2-8245-123b01ea9e22",
   "winPct": 62.5,
   "diff": 22,
   "ppg": 19.9,
   "leagueRank": 44,
   "rating": 1.3,
   "ratingGames": 8,
   "confidence": 64,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.1
  },
  {
   "name": "Clifford Luster",
   "gender": "Male",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 10,
   "losses": 6,
   "pointsWon": 301,
   "totalPointsAgainst": 284,
   "mixedWins": 7,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 62.5,
   "diff": 17,
   "ppg": 18.8,
   "leagueRank": 131,
   "rating": 1.6,
   "ratingGames": 16,
   "confidence": 77,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.7,
   "playerId": "3f47746a-2105-493a-941a-b15c4b02a520"
  },
  {
   "name": "David Osborne",
   "gender": "Male",
   "team": "Flemington",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 58,
   "wins": 36,
   "losses": 22,
   "pointsWon": 1102,
   "totalPointsAgainst": 1068,
   "mixedWins": 20,
   "mixedLosses": 12,
   "genderWins": 16,
   "genderLosses": 10,
   "clutchWins": 15,
   "clutchLosses": 7,
   "winPct": 62.1,
   "diff": 34,
   "ppg": 19,
   "leagueRank": 64,
   "rating": 1.4,
   "ratingGames": 58,
   "confidence": 92,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.7,
   "playerId": "418e7ba5-3e06-40ec-9b83-19d3bf10c9cb"
  },
  {
   "name": "Stacy Garretson",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 64,
   "wins": 39,
   "losses": 25,
   "pointsWon": 1189,
   "totalPointsAgainst": 1169,
   "mixedWins": 19,
   "mixedLosses": 12,
   "genderWins": 20,
   "genderLosses": 13,
   "clutchWins": 15,
   "clutchLosses": 7,
   "winPct": 60.9,
   "diff": 20,
   "ppg": 18.6,
   "leagueRank": 68,
   "rating": 1.5,
   "ratingGames": 64,
   "confidence": 92,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.9,
   "playerId": "85dd9a28-a510-493a-bfe4-9cc7d3550ff2"
  },
  {
   "name": "Eva Danieli",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 58,
   "wins": 35,
   "losses": 23,
   "pointsWon": 1109,
   "totalPointsAgainst": 1039,
   "mixedWins": 17,
   "mixedLosses": 14,
   "genderWins": 18,
   "genderLosses": 9,
   "clutchWins": 10,
   "clutchLosses": 5,
   "winPct": 60.3,
   "diff": 70,
   "ppg": 19.1,
   "leagueRank": 58,
   "rating": 1.2,
   "ratingGames": 59,
   "confidence": 92,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.3,
   "playerId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae"
  },
  {
   "name": "Aimee Castellano",
   "gender": "Female",
   "team": "Flemington",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 60,
   "wins": 36,
   "losses": 24,
   "pointsWon": 1145,
   "totalPointsAgainst": 1066,
   "mixedWins": 20,
   "mixedLosses": 12,
   "genderWins": 16,
   "genderLosses": 12,
   "clutchWins": 11,
   "clutchLosses": 11,
   "winPct": 60,
   "diff": 79,
   "ppg": 19.1,
   "leagueRank": 63,
   "rating": 3,
   "ratingGames": 60,
   "confidence": 92,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 1.4,
   "playerId": "e76985fb-efd1-4180-a340-e4f36abbc8b4"
  },
  {
   "name": "Sarah Mcparland",
   "gender": "Female",
   "team": "Home Court",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 60,
   "wins": 36,
   "losses": 24,
   "pointsWon": 1114,
   "totalPointsAgainst": 1072,
   "mixedWins": 18,
   "mixedLosses": 12,
   "genderWins": 18,
   "genderLosses": 12,
   "clutchWins": 10,
   "clutchLosses": 1,
   "winPct": 60,
   "diff": 42,
   "ppg": 18.6,
   "leagueRank": 66,
   "rating": 1.4,
   "ratingGames": 60,
   "confidence": 91,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.5,
   "playerId": "958e8cb9-1c97-4932-b495-29c28578a123"
  },
  {
   "name": "Cuc Dang",
   "gender": "Female",
   "team": "Montville",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 6,
   "losses": 4,
   "pointsWon": 188,
   "totalPointsAgainst": 185,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "817939be-36ae-4a5d-8c02-62138ab71d4c",
   "winPct": 60,
   "diff": 3,
   "ppg": 18.8,
   "leagueRank": 173,
   "rating": -0.2,
   "ratingGames": 10,
   "confidence": 68,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": -0.9
  },
  {
   "name": "Joe Palumbo",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 73,
   "wins": 43,
   "losses": 30,
   "pointsWon": 1382,
   "totalPointsAgainst": 1330,
   "mixedWins": 19,
   "mixedLosses": 18,
   "genderWins": 24,
   "genderLosses": 12,
   "clutchWins": 19,
   "clutchLosses": 12,
   "winPct": 58.9,
   "diff": 52,
   "ppg": 18.9,
   "leagueRank": 62,
   "rating": 0,
   "ratingGames": 74,
   "confidence": 93,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0,
   "playerId": "b39664c3-1a6e-4493-968f-6e7f7939f694"
  },
  {
   "name": "Liz Cuozzo",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 20,
   "losses": 14,
   "pointsWon": 655,
   "totalPointsAgainst": 619,
   "mixedWins": 12,
   "mixedLosses": 6,
   "genderWins": 8,
   "genderLosses": 8,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 58.8,
   "diff": 36,
   "ppg": 19.3,
   "leagueRank": 60,
   "rating": 0.4,
   "ratingGames": 34,
   "confidence": 87,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.2,
   "playerId": "2b2d474d-281c-42d7-854b-6bfe32f20563"
  },
  {
   "name": "Kristen Soucie",
   "gender": "Female",
   "team": "Flemington",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 10,
   "losses": 7,
   "pointsWon": 319,
   "totalPointsAgainst": 297,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 58.8,
   "diff": 22,
   "ppg": 18.8,
   "leagueRank": 132,
   "rating": 1.4,
   "ratingGames": 17,
   "confidence": 79,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.2,
   "playerId": "8ebf2370-8a82-495e-97ea-5168dd2b14c4"
  },
  {
   "name": "Emil Pescatore",
   "gender": "Male",
   "team": "Home Court",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 63,
   "wins": 37,
   "losses": 26,
   "pointsWon": 1169,
   "totalPointsAgainst": 1155,
   "mixedWins": 18,
   "mixedLosses": 14,
   "genderWins": 19,
   "genderLosses": 12,
   "clutchWins": 13,
   "clutchLosses": 6,
   "winPct": 58.7,
   "diff": 14,
   "ppg": 18.6,
   "leagueRank": 74,
   "rating": 0.9,
   "ratingGames": 63,
   "confidence": 92,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.8,
   "playerId": "1c9b7abf-dae6-4e0d-a31d-485e99a01fec"
  },
  {
   "name": "Richard Demeuse",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 64,
   "wins": 37,
   "losses": 27,
   "pointsWon": 1217,
   "totalPointsAgainst": 1110,
   "mixedWins": 16,
   "mixedLosses": 14,
   "genderWins": 21,
   "genderLosses": 13,
   "clutchWins": 5,
   "clutchLosses": 9,
   "winPct": 57.8,
   "diff": 107,
   "ppg": 19,
   "leagueRank": 59,
   "rating": 1.3,
   "ratingGames": 64,
   "confidence": 92,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.2,
   "playerId": "d88f1d1e-be4e-449e-b9b2-c468753e1dd3"
  },
  {
   "name": "Frank Ding",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 47,
   "wins": 27,
   "losses": 20,
   "pointsWon": 886,
   "totalPointsAgainst": 862,
   "mixedWins": 13,
   "mixedLosses": 9,
   "genderWins": 14,
   "genderLosses": 11,
   "clutchWins": 13,
   "clutchLosses": 7,
   "winPct": 57.4,
   "diff": 24,
   "ppg": 18.9,
   "leagueRank": 67,
   "rating": 0.5,
   "ratingGames": 47,
   "confidence": 90,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.5,
   "playerId": "f83efefa-b8dd-49c2-90a1-9baa1e03315b"
  },
  {
   "name": "Susan M Fett",
   "gender": "Female",
   "team": "Home Court",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 8,
   "losses": 6,
   "pointsWon": 274,
   "totalPointsAgainst": 248,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 4,
   "playerId": "91857142-d537-4b98-bbc2-481129371949",
   "winPct": 57.1,
   "diff": 26,
   "ppg": 19.6,
   "leagueRank": 159,
   "rating": 1.4,
   "ratingGames": 14,
   "confidence": 75,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.2
  },
  {
   "name": "Jocelyn Carney",
   "gender": "Female",
   "team": "Monroe",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 140,
   "totalPointsAgainst": 127,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 2,
   "playerId": "99f7821f-79d3-4e9e-9a9f-01043edcebee",
   "winPct": 57.1,
   "diff": 13,
   "ppg": 20,
   "leagueRank": 175,
   "rating": 0.5,
   "ratingGames": 7,
   "confidence": 61,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.5
  },
  {
   "name": "Chris Taormina",
   "gender": "Male",
   "team": "Montville",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 8,
   "losses": 6,
   "pointsWon": 258,
   "totalPointsAgainst": 257,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 57.1,
   "diff": 1,
   "ppg": 18.4,
   "leagueRank": 185,
   "rating": 2.2,
   "ratingGames": 14,
   "confidence": 74,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 1.6,
   "playerId": "fd4a1329-b94d-4a30-aef4-8e3482909441"
  },
  {
   "name": "Elyse Diamond",
   "gender": "Female",
   "team": "ACE",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 18,
   "losses": 14,
   "pointsWon": 608,
   "totalPointsAgainst": 562,
   "mixedWins": 12,
   "mixedLosses": 7,
   "genderWins": 6,
   "genderLosses": 7,
   "clutchWins": 6,
   "clutchLosses": 3,
   "winPct": 56.3,
   "diff": 46,
   "ppg": 19,
   "leagueRank": 56,
   "rating": 1,
   "ratingGames": 32,
   "confidence": 85,
   "strengthOfPartners": 2.2,
   "strengthOfOpponents": 0.9,
   "playerId": "a0c9637b-5b23-4797-a46a-d2df7bb0fae9"
  },
  {
   "name": "Michael Dombrowiecki",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 43,
   "wins": 24,
   "losses": 19,
   "pointsWon": 828,
   "totalPointsAgainst": 772,
   "mixedWins": 8,
   "mixedLosses": 11,
   "genderWins": 16,
   "genderLosses": 8,
   "clutchWins": 11,
   "clutchLosses": 7,
   "winPct": 55.8,
   "diff": 56,
   "ppg": 19.3,
   "leagueRank": 61,
   "rating": 1.1,
   "ratingGames": 43,
   "confidence": 89,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.3,
   "playerId": "3ac34ef1-17a5-4ab6-8d17-be4bd5a0a040"
  },
  {
   "name": "Mei Li",
   "gender": "Female",
   "team": "Stelton Sports",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 53,
   "wins": 29,
   "losses": 24,
   "pointsWon": 995,
   "totalPointsAgainst": 960,
   "mixedWins": 17,
   "mixedLosses": 14,
   "genderWins": 12,
   "genderLosses": 10,
   "clutchWins": 9,
   "clutchLosses": 9,
   "winPct": 54.7,
   "diff": 35,
   "ppg": 18.8,
   "leagueRank": 75,
   "rating": 1.1,
   "ratingGames": 53,
   "confidence": 91,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0,
   "playerId": "28330003-3125-4050-be9a-ddd726dccfe2"
  },
  {
   "name": "Jill Lesnik",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 13,
   "losses": 11,
   "pointsWon": 464,
   "totalPointsAgainst": 438,
   "mixedWins": 7,
   "mixedLosses": 6,
   "genderWins": 6,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 6,
   "winPct": 54.2,
   "diff": 26,
   "ppg": 19.3,
   "leagueRank": 83,
   "rating": 0.1,
   "ratingGames": 24,
   "confidence": 83,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0,
   "playerId": "340fe4f1-f3ed-4fb1-9ba3-74752ee1d864"
  },
  {
   "name": "Brad Oldham",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 48,
   "wins": 26,
   "losses": 22,
   "pointsWon": 892,
   "totalPointsAgainst": 866,
   "mixedWins": 8,
   "mixedLosses": 15,
   "genderWins": 18,
   "genderLosses": 7,
   "clutchWins": 7,
   "clutchLosses": 6,
   "winPct": 54.2,
   "diff": 26,
   "ppg": 18.6,
   "leagueRank": 73,
   "rating": 1,
   "ratingGames": 48,
   "confidence": 90,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.8,
   "playerId": "965b56ee-6fb4-4bd1-9708-8ced2c5dd9a2"
  },
  {
   "name": "Guy Ohn",
   "gender": "Male",
   "team": "Monroe",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 63,
   "wins": 34,
   "losses": 29,
   "pointsWon": 1196,
   "totalPointsAgainst": 1141,
   "mixedWins": 19,
   "mixedLosses": 15,
   "genderWins": 15,
   "genderLosses": 14,
   "clutchWins": 11,
   "clutchLosses": 11,
   "winPct": 54,
   "diff": 55,
   "ppg": 19,
   "leagueRank": 77,
   "rating": 2.1,
   "ratingGames": 63,
   "confidence": 92,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.4,
   "playerId": "f394b637-236e-4fee-b26f-374c90c3dd1e"
  },
  {
   "name": "Kevin Sheehan",
   "gender": "Male",
   "team": "Montville",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 7,
   "losses": 6,
   "pointsWon": 254,
   "totalPointsAgainst": 235,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 53.8,
   "diff": 19,
   "ppg": 19.5,
   "leagueRank": 172,
   "rating": 2.1,
   "ratingGames": 13,
   "confidence": 72,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.5,
   "playerId": "115f3958-d110-41f0-a04c-aa2f8e17a54f"
  },
  {
   "name": "Jinfa Chen",
   "gender": "Male",
   "team": "Montville",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 7,
   "losses": 6,
   "pointsWon": 241,
   "totalPointsAgainst": 239,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 1,
   "playerId": "b94d06e3-a921-4454-8599-8754c8d14a02",
   "winPct": 53.8,
   "diff": 2,
   "ppg": 18.5,
   "leagueRank": 182,
   "rating": 0.4,
   "ratingGames": 13,
   "confidence": 72,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.6
  },
  {
   "name": "Robin Varro",
   "gender": "Female",
   "team": "Montville",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 7,
   "losses": 6,
   "pointsWon": 239,
   "totalPointsAgainst": 247,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 4,
   "clutchLosses": 3,
   "playerId": "afc31d5e-9b63-4d23-b450-babafc674884",
   "winPct": 53.8,
   "diff": -8,
   "ppg": 18.4,
   "leagueRank": 192,
   "rating": -0.5,
   "ratingGames": 13,
   "confidence": 74,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0
  },
  {
   "name": "Natasha De Carvalho",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 56,
   "wins": 30,
   "losses": 26,
   "pointsWon": 1037,
   "totalPointsAgainst": 1039,
   "mixedWins": 13,
   "mixedLosses": 14,
   "genderWins": 17,
   "genderLosses": 12,
   "clutchWins": 8,
   "clutchLosses": 6,
   "winPct": 53.6,
   "diff": -2,
   "ppg": 18.5,
   "leagueRank": 81,
   "rating": 0.6,
   "ratingGames": 56,
   "confidence": 92,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.6,
   "playerId": "462f3a15-22ed-4fa3-b698-78678a5d6966"
  },
  {
   "name": "Eric Luque",
   "gender": "Male",
   "team": "Flemington",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 77,
   "wins": 41,
   "losses": 36,
   "pointsWon": 1423,
   "totalPointsAgainst": 1408,
   "mixedWins": 25,
   "mixedLosses": 16,
   "genderWins": 16,
   "genderLosses": 20,
   "clutchWins": 16,
   "clutchLosses": 12,
   "winPct": 53.2,
   "diff": 15,
   "ppg": 18.5,
   "leagueRank": 85,
   "rating": 1.3,
   "ratingGames": 77,
   "confidence": 93,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 1.1,
   "playerId": "b3c28078-ab31-4002-9e09-5fa3f627d8c1"
  },
  {
   "name": "Lance Brown",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 17,
   "losses": 15,
   "pointsWon": 599,
   "totalPointsAgainst": 587,
   "mixedWins": 8,
   "mixedLosses": 8,
   "genderWins": 9,
   "genderLosses": 7,
   "clutchWins": 8,
   "clutchLosses": 4,
   "winPct": 53.1,
   "diff": 12,
   "ppg": 18.7,
   "leagueRank": 71,
   "rating": -0.4,
   "ratingGames": 32,
   "confidence": 87,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.2,
   "playerId": "5d13288d-69fe-4d0b-bf69-51c1d24e3409"
  },
  {
   "name": "Rosalyn Goldsmith",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 18,
   "losses": 16,
   "pointsWon": 613,
   "totalPointsAgainst": 636,
   "mixedWins": 8,
   "mixedLosses": 11,
   "genderWins": 10,
   "genderLosses": 5,
   "clutchWins": 8,
   "clutchLosses": 4,
   "winPct": 52.9,
   "diff": -23,
   "ppg": 18,
   "leagueRank": 87,
   "rating": -1.3,
   "ratingGames": 34,
   "confidence": 88,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.1,
   "playerId": "545c12c3-3098-47ca-b35e-429f37f481f5"
  },
  {
   "name": "Sinitra Siengsanaoh",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 12,
   "losses": 11,
   "pointsWon": 416,
   "totalPointsAgainst": 420,
   "mixedWins": 6,
   "mixedLosses": 7,
   "genderWins": 6,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 52.2,
   "diff": -4,
   "ppg": 18.1,
   "leagueRank": 128,
   "rating": -1.7,
   "ratingGames": 23,
   "confidence": 82,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": -0.1,
   "playerId": "bd5e1a4c-a9d5-4683-a74e-90c0df2d84cd"
  },
  {
   "name": "Barbara Hess",
   "gender": "Female",
   "team": "Flemington",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 43,
   "wins": 22,
   "losses": 21,
   "pointsWon": 806,
   "totalPointsAgainst": 794,
   "mixedWins": 10,
   "mixedLosses": 13,
   "genderWins": 12,
   "genderLosses": 8,
   "clutchWins": 5,
   "clutchLosses": 12,
   "winPct": 51.2,
   "diff": 12,
   "ppg": 18.7,
   "leagueRank": 86,
   "rating": 1.7,
   "ratingGames": 43,
   "confidence": 90,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 1.2,
   "playerId": "21baa2cb-e882-442e-a5e0-a6d88126c9c3"
  },
  {
   "name": "Carol Mastroianni",
   "gender": "Female",
   "team": "Flemington",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 47,
   "wins": 24,
   "losses": 23,
   "pointsWon": 892,
   "totalPointsAgainst": 855,
   "mixedWins": 8,
   "mixedLosses": 12,
   "genderWins": 16,
   "genderLosses": 11,
   "clutchWins": 7,
   "clutchLosses": 8,
   "winPct": 51.1,
   "diff": 37,
   "ppg": 19,
   "leagueRank": 79,
   "rating": 2,
   "ratingGames": 47,
   "confidence": 90,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.7,
   "playerId": "7f851011-9322-43f9-aff2-754565a615c7"
  },
  {
   "name": "Rui Zhang",
   "gender": "Female",
   "team": "Stelton Sports",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 77,
   "wins": 39,
   "losses": 38,
   "pointsWon": 1406,
   "totalPointsAgainst": 1415,
   "mixedWins": 23,
   "mixedLosses": 16,
   "genderWins": 16,
   "genderLosses": 22,
   "clutchWins": 15,
   "clutchLosses": 11,
   "winPct": 50.6,
   "diff": -9,
   "ppg": 18.3,
   "leagueRank": 93,
   "rating": 1.1,
   "ratingGames": 77,
   "confidence": 93,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.3,
   "playerId": "c218d668-b78a-4726-b2df-fe7730a50963"
  },
  {
   "name": "Bud Heller",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 21,
   "losses": 21,
   "pointsWon": 789,
   "totalPointsAgainst": 752,
   "mixedWins": 11,
   "mixedLosses": 9,
   "genderWins": 10,
   "genderLosses": 12,
   "clutchWins": 5,
   "clutchLosses": 9,
   "winPct": 50,
   "diff": 37,
   "ppg": 18.8,
   "leagueRank": 76,
   "rating": 0.6,
   "ratingGames": 42,
   "confidence": 89,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.2,
   "playerId": "9282b1b2-6551-481c-b9b8-2a246a49a621"
  },
  {
   "name": "Charlie Johnston",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 17,
   "losses": 17,
   "pointsWon": 627,
   "totalPointsAgainst": 608,
   "mixedWins": 10,
   "mixedLosses": 7,
   "genderWins": 7,
   "genderLosses": 10,
   "clutchWins": 1,
   "clutchLosses": 5,
   "winPct": 50,
   "diff": 19,
   "ppg": 18.4,
   "leagueRank": 80,
   "rating": -0.1,
   "ratingGames": 34,
   "confidence": 87,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0,
   "playerId": "1bad49ab-f2b8-439b-9e4b-3ff3cb8ca325"
  },
  {
   "name": "Marvin Lavy",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 6,
   "losses": 6,
   "pointsWon": 234,
   "totalPointsAgainst": 216,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 6,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 3,
   "playerId": "cc5ae59c-2584-4816-a938-9d03dd590009",
   "winPct": 50,
   "diff": 18,
   "ppg": 19.5,
   "leagueRank": 166,
   "rating": 0.6,
   "ratingGames": 12,
   "confidence": 71,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -0.6
  },
  {
   "name": "Bobo Delaney",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 151,
   "totalPointsAgainst": 143,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "abfea953-ca27-4d56-b668-8083e5eb6df4",
   "winPct": 50,
   "diff": 8,
   "ppg": 18.9,
   "leagueRank": 201,
   "rating": 0.6,
   "ratingGames": 8,
   "confidence": 61,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": -0.4
  },
  {
   "name": "Wen Jin",
   "gender": "Male",
   "team": "Stelton Sports",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 5,
   "losses": 5,
   "pointsWon": 195,
   "totalPointsAgainst": 192,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 50,
   "diff": 3,
   "ppg": 19.5,
   "leagueRank": 181,
   "rating": 0.1,
   "ratingGames": 10,
   "confidence": 68,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.3,
   "playerId": "dd2384fe-4bb2-4085-a917-6e7989beb8a7"
  },
  {
   "name": "Toby Mcmahan",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 140,
   "totalPointsAgainst": 139,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 50,
   "diff": 1,
   "ppg": 17.5,
   "leagueRank": 211,
   "rating": -0.7,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 0.2,
   "playerId": "795d3c75-0080-4a6c-9e78-fcafcd86f1d2"
  },
  {
   "name": "Sushma Rayapudi",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 109,
   "totalPointsAgainst": 109,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "ea658d89-a540-405d-9819-9c98a0484f60",
   "winPct": 50,
   "diff": 0,
   "ppg": 18.2,
   "leagueRank": 208,
   "rating": 0.2,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0
  },
  {
   "name": "John Chalerm",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 108,
   "totalPointsAgainst": 113,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "c94b7f57-f476-43db-8fc3-e23331d97b63",
   "winPct": 50,
   "diff": -5,
   "ppg": 18,
   "leagueRank": 217,
   "rating": 0.2,
   "ratingGames": 6,
   "confidence": 57,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.5
  },
  {
   "name": "Sergey Konyukhov",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 111,
   "totalPointsAgainst": 116,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "c4b5a5b1-ac09-4c8c-94fb-6b6ab853f3a4",
   "winPct": 50,
   "diff": -5,
   "ppg": 18.5,
   "leagueRank": 214,
   "rating": -0.6,
   "ratingGames": 6,
   "confidence": 57,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.4
  },
  {
   "name": "Ali Fordyce",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 7,
   "losses": 7,
   "pointsWon": 248,
   "totalPointsAgainst": 258,
   "mixedWins": 4,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 3,
   "playerId": "9e2cc278-7356-491f-b853-945e33a988d2",
   "winPct": 50,
   "diff": -10,
   "ppg": 17.7,
   "leagueRank": 205,
   "rating": 0.6,
   "ratingGames": 14,
   "confidence": 75,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.7
  },
  {
   "name": "David Shapiro",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 6,
   "losses": 6,
   "pointsWon": 211,
   "totalPointsAgainst": 225,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 1,
   "playerId": "c39cd158-0c19-4819-8653-18084e6ce982",
   "winPct": 50,
   "diff": -14,
   "ppg": 17.6,
   "leagueRank": 204,
   "rating": -0.7,
   "ratingGames": 13,
   "confidence": 72,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0
  },
  {
   "name": "Bennett Shanker",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 51,
   "wins": 25,
   "losses": 26,
   "pointsWon": 927,
   "totalPointsAgainst": 971,
   "mixedWins": 11,
   "mixedLosses": 16,
   "genderWins": 14,
   "genderLosses": 10,
   "clutchWins": 13,
   "clutchLosses": 7,
   "winPct": 49,
   "diff": -44,
   "ppg": 18.2,
   "leagueRank": 100,
   "rating": -0.3,
   "ratingGames": 51,
   "confidence": 91,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.1,
   "playerId": "a86dc96c-b346-460c-a94c-df0551d5027a"
  },
  {
   "name": "Eliezer Mintz",
   "gender": "Male",
   "team": "Monroe",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 47,
   "wins": 23,
   "losses": 24,
   "pointsWon": 857,
   "totalPointsAgainst": 903,
   "mixedWins": 6,
   "mixedLosses": 16,
   "genderWins": 17,
   "genderLosses": 8,
   "clutchWins": 10,
   "clutchLosses": 6,
   "winPct": 48.9,
   "diff": -46,
   "ppg": 18.2,
   "leagueRank": 103,
   "rating": 0.5,
   "ratingGames": 47,
   "confidence": 90,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.6,
   "playerId": "832fb271-fb5e-43aa-b442-95c03fb78342"
  },
  {
   "name": "George Mandl",
   "gender": "Male",
   "team": "Home Court",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 33,
   "wins": 16,
   "losses": 17,
   "pointsWon": 582,
   "totalPointsAgainst": 633,
   "mixedWins": 7,
   "mixedLosses": 11,
   "genderWins": 9,
   "genderLosses": 6,
   "clutchWins": 10,
   "clutchLosses": 3,
   "winPct": 48.5,
   "diff": -51,
   "ppg": 17.6,
   "leagueRank": 108,
   "rating": -1.8,
   "ratingGames": 33,
   "confidence": 87,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.3,
   "playerId": "a0019103-8887-4a15-bbe0-d1c35cdd7b0d"
  },
  {
   "name": "Lei Dong",
   "gender": "Male",
   "team": "Stelton Sports",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 62,
   "wins": 30,
   "losses": 32,
   "pointsWon": 1094,
   "totalPointsAgainst": 1152,
   "mixedWins": 22,
   "mixedLosses": 16,
   "genderWins": 8,
   "genderLosses": 16,
   "clutchWins": 11,
   "clutchLosses": 6,
   "winPct": 48.4,
   "diff": -58,
   "ppg": 17.6,
   "leagueRank": 107,
   "rating": -0.9,
   "ratingGames": 62,
   "confidence": 92,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.1,
   "playerId": "f9ac936e-7371-4ea9-8a97-7969635046fd"
  },
  {
   "name": "Anita Bobba",
   "gender": "Female",
   "team": "Home Court",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 13,
   "losses": 14,
   "pointsWon": 502,
   "totalPointsAgainst": 479,
   "mixedWins": 5,
   "mixedLosses": 9,
   "genderWins": 8,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 48.1,
   "diff": 23,
   "ppg": 18.6,
   "leagueRank": 111,
   "rating": 1.8,
   "ratingGames": 27,
   "confidence": 84,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.4,
   "playerId": "abc68487-3415-49a2-bdfb-dd56eb5af20d"
  },
  {
   "name": "Kerry Shannon",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 11,
   "losses": 12,
   "pointsWon": 413,
   "totalPointsAgainst": 414,
   "mixedWins": 6,
   "mixedLosses": 6,
   "genderWins": 5,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 47.8,
   "diff": -1,
   "ppg": 18,
   "leagueRank": 150,
   "rating": -0.5,
   "ratingGames": 23,
   "confidence": 82,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.4,
   "playerId": "e61c60c8-6141-4d98-af74-740d4d849655"
  },
  {
   "name": "Scott Friedman",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 11,
   "losses": 12,
   "pointsWon": 420,
   "totalPointsAgainst": 446,
   "mixedWins": 6,
   "mixedLosses": 7,
   "genderWins": 5,
   "genderLosses": 5,
   "clutchWins": 5,
   "clutchLosses": 3,
   "winPct": 47.8,
   "diff": -26,
   "ppg": 18.3,
   "leagueRank": 151,
   "rating": -2,
   "ratingGames": 23,
   "confidence": 83,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.5,
   "playerId": "d40fde69-77a2-4998-a631-fba159129d2f"
  },
  {
   "name": "Meryl Nadler",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 44,
   "wins": 21,
   "losses": 23,
   "pointsWon": 805,
   "totalPointsAgainst": 825,
   "mixedWins": 9,
   "mixedLosses": 11,
   "genderWins": 12,
   "genderLosses": 12,
   "clutchWins": 7,
   "clutchLosses": 3,
   "winPct": 47.7,
   "diff": -20,
   "ppg": 18.3,
   "leagueRank": 89,
   "rating": -0.9,
   "ratingGames": 45,
   "confidence": 90,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.2,
   "playerId": "90987b97-d181-4c15-9c7c-e0bebff4e9b0"
  },
  {
   "name": "Oliveira Karen",
   "gender": "Female",
   "team": "Montville",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 20,
   "losses": 22,
   "pointsWon": 761,
   "totalPointsAgainst": 761,
   "mixedWins": 15,
   "mixedLosses": 8,
   "genderWins": 5,
   "genderLosses": 14,
   "clutchWins": 4,
   "clutchLosses": 6,
   "winPct": 47.6,
   "diff": 0,
   "ppg": 18.1,
   "leagueRank": 95,
   "rating": 0.6,
   "ratingGames": 42,
   "confidence": 89,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.3,
   "playerId": "80b535f7-a6f6-4905-90ae-69c8695f99be"
  },
  {
   "name": "Lucy Li",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 59,
   "wins": 28,
   "losses": 31,
   "pointsWon": 1080,
   "totalPointsAgainst": 1108,
   "mixedWins": 17,
   "mixedLosses": 14,
   "genderWins": 11,
   "genderLosses": 17,
   "clutchWins": 10,
   "clutchLosses": 11,
   "winPct": 47.5,
   "diff": -28,
   "ppg": 18.3,
   "leagueRank": 138,
   "rating": 1,
   "ratingGames": 59,
   "confidence": 92,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.7,
   "playerId": "d22f8b69-76a6-41e0-8b04-c5dae68d9f69"
  },
  {
   "name": "Liangang Liu",
   "gender": "Male",
   "team": "Stelton Sports",
   "matches": 12,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 78,
   "wins": 37,
   "losses": 41,
   "pointsWon": 1422,
   "totalPointsAgainst": 1449,
   "mixedWins": 22,
   "mixedLosses": 22,
   "genderWins": 15,
   "genderLosses": 19,
   "clutchWins": 13,
   "clutchLosses": 14,
   "winPct": 47.4,
   "diff": -27,
   "ppg": 18.2,
   "leagueRank": 97,
   "rating": 0.6,
   "ratingGames": 78,
   "confidence": 93,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.3,
   "playerId": "34618d40-6e62-4ab3-aa28-fc61c9ac1920"
  },
  {
   "name": "Susan St. Pierre",
   "gender": "Female",
   "team": "Monroe",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 17,
   "losses": 19,
   "pointsWon": 662,
   "totalPointsAgainst": 657,
   "mixedWins": 9,
   "mixedLosses": 9,
   "genderWins": 8,
   "genderLosses": 10,
   "clutchWins": 4,
   "clutchLosses": 6,
   "playerId": "001c2d38-829b-4fd0-b249-472f78337387",
   "winPct": 47.2,
   "diff": 5,
   "ppg": 18.4,
   "leagueRank": 125,
   "rating": 0.2,
   "ratingGames": 36,
   "confidence": 87,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.2
  },
  {
   "name": "Jamie Sandman",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 53,
   "wins": 25,
   "losses": 28,
   "pointsWon": 964,
   "totalPointsAgainst": 1002,
   "mixedWins": 10,
   "mixedLosses": 16,
   "genderWins": 15,
   "genderLosses": 12,
   "clutchWins": 12,
   "clutchLosses": 12,
   "winPct": 47.2,
   "diff": -38,
   "ppg": 18.2,
   "leagueRank": 98,
   "rating": 0,
   "ratingGames": 53,
   "confidence": 90,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.7,
   "playerId": "33ab547b-ef45-48f8-baa6-be7ad9e29b67"
  },
  {
   "name": "Pam Friedman",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 16,
   "losses": 18,
   "pointsWon": 646,
   "totalPointsAgainst": 647,
   "mixedWins": 7,
   "mixedLosses": 10,
   "genderWins": 9,
   "genderLosses": 8,
   "clutchWins": 6,
   "clutchLosses": 8,
   "winPct": 47.1,
   "diff": -1,
   "ppg": 19,
   "leagueRank": 84,
   "rating": -0.7,
   "ratingGames": 34,
   "confidence": 87,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.3,
   "playerId": "94d51b2d-359c-450c-b1c8-728944462b01"
  },
  {
   "name": "David Coleman",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 7,
   "losses": 8,
   "pointsWon": 283,
   "totalPointsAgainst": 287,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 46.7,
   "diff": -4,
   "ppg": 18.9,
   "leagueRank": 168,
   "rating": -0.8,
   "ratingGames": 15,
   "confidence": 76,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 0.4,
   "playerId": "ec3ddbcf-c126-4225-901a-c3c3a9ac479b"
  },
  {
   "name": "Zemin Zeng",
   "gender": "Male",
   "team": "Stelton Sports",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 6,
   "losses": 7,
   "pointsWon": 245,
   "totalPointsAgainst": 242,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 3,
   "playerId": "6f2553e1-299a-407f-b919-41d4b3a84bae",
   "winPct": 46.2,
   "diff": 3,
   "ppg": 18.8,
   "leagueRank": 194,
   "rating": 0.3,
   "ratingGames": 13,
   "confidence": 73,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.1
  },
  {
   "name": "Amy Chrebet",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 61,
   "wins": 28,
   "losses": 33,
   "pointsWon": 1114,
   "totalPointsAgainst": 1148,
   "mixedWins": 13,
   "mixedLosses": 16,
   "genderWins": 15,
   "genderLosses": 17,
   "clutchWins": 12,
   "clutchLosses": 11,
   "winPct": 45.9,
   "diff": -34,
   "ppg": 18.3,
   "leagueRank": 96,
   "rating": 0,
   "ratingGames": 61,
   "confidence": 92,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.5,
   "playerId": "6f511e98-567a-4b33-8831-ed123f01f952"
  },
  {
   "name": "Sara Wiggert",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 16,
   "losses": 19,
   "pointsWon": 630,
   "totalPointsAgainst": 665,
   "mixedWins": 9,
   "mixedLosses": 10,
   "genderWins": 7,
   "genderLosses": 9,
   "clutchWins": 8,
   "clutchLosses": 3,
   "winPct": 45.7,
   "diff": -35,
   "ppg": 18,
   "leagueRank": 99,
   "rating": -0.8,
   "ratingGames": 35,
   "confidence": 88,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.6,
   "playerId": "6cf82c92-fdfb-46bc-bad1-beec6ab96691"
  },
  {
   "name": "Christine Papa",
   "gender": "Female",
   "team": "Flemington",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 21,
   "losses": 25,
   "pointsWon": 824,
   "totalPointsAgainst": 875,
   "mixedWins": 9,
   "mixedLosses": 15,
   "genderWins": 12,
   "genderLosses": 10,
   "clutchWins": 10,
   "clutchLosses": 7,
   "winPct": 45.7,
   "diff": -51,
   "ppg": 17.9,
   "leagueRank": 115,
   "rating": 0.3,
   "ratingGames": 46,
   "confidence": 90,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.8,
   "playerId": "d156a552-7fa9-488e-9bfa-745feb859950"
  },
  {
   "name": "Chris Heimerle",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 10,
   "losses": 12,
   "pointsWon": 413,
   "totalPointsAgainst": 425,
   "mixedWins": 6,
   "mixedLosses": 7,
   "genderWins": 4,
   "genderLosses": 5,
   "clutchWins": 5,
   "clutchLosses": 5,
   "winPct": 45.5,
   "diff": -12,
   "ppg": 18.8,
   "leagueRank": 144,
   "rating": -1.4,
   "ratingGames": 22,
   "confidence": 83,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.1,
   "playerId": "fc870151-9569-4e09-883d-c81e9cfaf6d8"
  },
  {
   "name": "Peter Shen",
   "gender": "Male",
   "team": "Stelton Sports",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 5,
   "losses": 6,
   "pointsWon": 197,
   "totalPointsAgainst": 209,
   "mixedWins": 2,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 2,
   "playerId": "7417eca2-2140-47f9-bd14-be210ba9d630",
   "winPct": 45.5,
   "diff": -12,
   "ppg": 17.9,
   "leagueRank": 210,
   "rating": -0.6,
   "ratingGames": 11,
   "confidence": 70,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -0.3
  },
  {
   "name": "Yang Wang",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 44,
   "wins": 20,
   "losses": 24,
   "pointsWon": 813,
   "totalPointsAgainst": 831,
   "mixedWins": 7,
   "mixedLosses": 13,
   "genderWins": 13,
   "genderLosses": 11,
   "clutchWins": 9,
   "clutchLosses": 4,
   "winPct": 45.5,
   "diff": -18,
   "ppg": 18.5,
   "leagueRank": 102,
   "rating": 1.2,
   "ratingGames": 44,
   "confidence": 90,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.6,
   "playerId": "389300d9-75bf-4c93-9fbc-cab6881f49b4"
  },
  {
   "name": "Cynthia Covie",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 19,
   "losses": 23,
   "pointsWon": 758,
   "totalPointsAgainst": 809,
   "mixedWins": 8,
   "mixedLosses": 13,
   "genderWins": 11,
   "genderLosses": 10,
   "clutchWins": 8,
   "clutchLosses": 6,
   "winPct": 45.2,
   "diff": -51,
   "ppg": 18,
   "leagueRank": 116,
   "rating": -0.3,
   "ratingGames": 42,
   "confidence": 89,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": -0.1,
   "playerId": "b146d15b-2ed7-4087-a6a0-90d4538aea72"
  },
  {
   "name": "Andrew Hyman",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 47,
   "wins": 21,
   "losses": 26,
   "pointsWon": 870,
   "totalPointsAgainst": 892,
   "mixedWins": 10,
   "mixedLosses": 13,
   "genderWins": 11,
   "genderLosses": 13,
   "clutchWins": 11,
   "clutchLosses": 11,
   "winPct": 44.7,
   "diff": -22,
   "ppg": 18.5,
   "leagueRank": 94,
   "rating": -0.2,
   "ratingGames": 47,
   "confidence": 90,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.2,
   "playerId": "dbda3e07-6332-4467-bdf0-be18b2686573"
  },
  {
   "name": "Debbie Tovitz",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 9,
   "wins": 4,
   "losses": 5,
   "pointsWon": 155,
   "totalPointsAgainst": 175,
   "mixedWins": 3,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 44.4,
   "diff": -20,
   "ppg": 17.2,
   "leagueRank": 230,
   "rating": -3,
   "ratingGames": 9,
   "confidence": 65,
   "strengthOfPartners": 2.3,
   "strengthOfOpponents": 0.1,
   "playerId": "1260ba09-fd19-4cad-95d4-325744e32327"
  },
  {
   "name": "Sam Zhou",
   "gender": "Male",
   "team": "Stelton Sports",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 43,
   "wins": 19,
   "losses": 24,
   "pointsWon": 746,
   "totalPointsAgainst": 814,
   "mixedWins": 12,
   "mixedLosses": 14,
   "genderWins": 7,
   "genderLosses": 10,
   "clutchWins": 5,
   "clutchLosses": 7,
   "winPct": 44.2,
   "diff": -68,
   "ppg": 17.3,
   "leagueRank": 120,
   "rating": -0.9,
   "ratingGames": 43,
   "confidence": 89,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.2,
   "playerId": "dcc4f317-c0ad-4878-8540-d8aa3aa53d8a"
  },
  {
   "name": "Sandeep Malhotra",
   "gender": "Male",
   "team": "Home Court",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 55,
   "wins": 24,
   "losses": 31,
   "pointsWon": 1008,
   "totalPointsAgainst": 1037,
   "mixedWins": 11,
   "mixedLosses": 15,
   "genderWins": 13,
   "genderLosses": 16,
   "clutchWins": 8,
   "clutchLosses": 11,
   "winPct": 43.6,
   "diff": -29,
   "ppg": 18.3,
   "leagueRank": 106,
   "rating": 0.3,
   "ratingGames": 55,
   "confidence": 91,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.2,
   "playerId": "c24596e0-9eeb-4195-b1ff-d4ca3e418d84"
  },
  {
   "name": "Howie Steiner",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 12,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 76,
   "wins": 33,
   "losses": 43,
   "pointsWon": 1355,
   "totalPointsAgainst": 1436,
   "mixedWins": 8,
   "mixedLosses": 24,
   "genderWins": 25,
   "genderLosses": 19,
   "clutchWins": 13,
   "clutchLosses": 13,
   "winPct": 43.4,
   "diff": -81,
   "ppg": 17.8,
   "leagueRank": 118,
   "rating": 0.7,
   "ratingGames": 76,
   "confidence": 93,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.9,
   "playerId": "5f8dc611-79bf-404d-99fc-f3ea9178d8f0"
  },
  {
   "name": "Kajal Sinkar",
   "gender": "Female",
   "team": "Home Court",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 16,
   "losses": 21,
   "pointsWon": 654,
   "totalPointsAgainst": 677,
   "mixedWins": 7,
   "mixedLosses": 11,
   "genderWins": 9,
   "genderLosses": 10,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 43.2,
   "diff": -23,
   "ppg": 17.7,
   "leagueRank": 112,
   "rating": -0.3,
   "ratingGames": 37,
   "confidence": 88,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.1,
   "playerId": "9d7f6585-d5f4-44fa-a4f9-24737a072f72"
  },
  {
   "name": "Ronnie Yin",
   "gender": "Female",
   "team": "Montville",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 44,
   "wins": 19,
   "losses": 25,
   "pointsWon": 791,
   "totalPointsAgainst": 819,
   "mixedWins": 9,
   "mixedLosses": 10,
   "genderWins": 10,
   "genderLosses": 15,
   "clutchWins": 7,
   "clutchLosses": 7,
   "winPct": 43.2,
   "diff": -28,
   "ppg": 18,
   "leagueRank": 104,
   "rating": -1.7,
   "ratingGames": 44,
   "confidence": 89,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.4,
   "playerId": "988636eb-4604-44d6-af70-2732b787ec2a"
  },
  {
   "name": "Helen Liu",
   "gender": "Female",
   "team": "Monroe",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 130,
   "totalPointsAgainst": 130,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "53cc1790-d8b9-4b64-a8b3-6e10b2eeb131",
   "winPct": 42.9,
   "diff": 0,
   "ppg": 18.6,
   "leagueRank": 223,
   "rating": -0.5,
   "ratingGames": 7,
   "confidence": 61,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.1
  },
  {
   "name": "Oraldo Estrada",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 123,
   "totalPointsAgainst": 131,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "b773da3e-b192-44a6-8714-d31c06b681a9",
   "winPct": 42.9,
   "diff": -8,
   "ppg": 17.6,
   "leagueRank": 225,
   "rating": -0.6,
   "ratingGames": 7,
   "confidence": 59,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.1
  },
  {
   "name": "Louis Vessichelli",
   "gender": "Male",
   "team": "Montville",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 49,
   "wins": 21,
   "losses": 28,
   "pointsWon": 909,
   "totalPointsAgainst": 942,
   "mixedWins": 13,
   "mixedLosses": 18,
   "genderWins": 8,
   "genderLosses": 10,
   "clutchWins": 9,
   "clutchLosses": 11,
   "winPct": 42.9,
   "diff": -33,
   "ppg": 18.6,
   "leagueRank": 105,
   "rating": 0.3,
   "ratingGames": 49,
   "confidence": 91,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.4,
   "playerId": "cb8c8404-c482-4fe5-bd01-35b348fccfd4"
  },
  {
   "name": "Robert Huntley",
   "gender": "Male",
   "team": "Home Court",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 68,
   "wins": 29,
   "losses": 39,
   "pointsWon": 1227,
   "totalPointsAgainst": 1276,
   "mixedWins": 16,
   "mixedLosses": 17,
   "genderWins": 13,
   "genderLosses": 22,
   "clutchWins": 7,
   "clutchLosses": 11,
   "winPct": 42.6,
   "diff": -49,
   "ppg": 18,
   "leagueRank": 114,
   "rating": 0.5,
   "ratingGames": 68,
   "confidence": 93,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.6,
   "playerId": "b5dec967-9e3a-49b4-b136-597711d099cc"
  },
  {
   "name": "Ann Betterton",
   "gender": "Female",
   "team": "Stelton Sports",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 50,
   "wins": 21,
   "losses": 29,
   "pointsWon": 914,
   "totalPointsAgainst": 950,
   "mixedWins": 9,
   "mixedLosses": 17,
   "genderWins": 12,
   "genderLosses": 12,
   "clutchWins": 12,
   "clutchLosses": 7,
   "winPct": 42,
   "diff": -36,
   "ppg": 18.3,
   "leagueRank": 110,
   "rating": -0.4,
   "ratingGames": 50,
   "confidence": 90,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.2,
   "playerId": "abe02688-e77f-414b-9747-25f3bdc149c7"
  },
  {
   "name": "Christine Chwe",
   "gender": "Female",
   "team": "Home Court",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 15,
   "losses": 21,
   "pointsWon": 665,
   "totalPointsAgainst": 668,
   "mixedWins": 5,
   "mixedLosses": 12,
   "genderWins": 10,
   "genderLosses": 9,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 41.7,
   "diff": -3,
   "ppg": 18.5,
   "leagueRank": 101,
   "rating": -0.7,
   "ratingGames": 36,
   "confidence": 88,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.2,
   "playerId": "fedc1fc4-c949-46e7-b435-5c343ba66635"
  },
  {
   "name": "Amanda Quinn",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 10,
   "losses": 14,
   "pointsWon": 419,
   "totalPointsAgainst": 442,
   "mixedWins": 2,
   "mixedLosses": 10,
   "genderWins": 8,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 41.7,
   "diff": -23,
   "ppg": 17.5,
   "leagueRank": 135,
   "rating": -1.7,
   "ratingGames": 24,
   "confidence": 83,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.3,
   "playerId": "f1248cc3-96c3-4671-9b08-533d22eb710f"
  },
  {
   "name": "Richard Abate",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 49,
   "wins": 20,
   "losses": 29,
   "pointsWon": 887,
   "totalPointsAgainst": 922,
   "mixedWins": 6,
   "mixedLosses": 16,
   "genderWins": 14,
   "genderLosses": 13,
   "clutchWins": 7,
   "clutchLosses": 9,
   "winPct": 40.8,
   "diff": -35,
   "ppg": 18.1,
   "leagueRank": 109,
   "rating": -0.6,
   "ratingGames": 49,
   "confidence": 90,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0,
   "playerId": "a18c309a-f364-4ae6-b06a-7faf4e1c525d"
  },
  {
   "name": "Lance Stopek",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 49,
   "wins": 20,
   "losses": 29,
   "pointsWon": 887,
   "totalPointsAgainst": 959,
   "mixedWins": 8,
   "mixedLosses": 16,
   "genderWins": 12,
   "genderLosses": 13,
   "clutchWins": 10,
   "clutchLosses": 12,
   "winPct": 40.8,
   "diff": -72,
   "ppg": 18.1,
   "leagueRank": 122,
   "rating": 0.2,
   "ratingGames": 49,
   "confidence": 90,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.6,
   "playerId": "3a249058-9862-4d27-9562-c73c5a685d96"
  },
  {
   "name": "Jennifer Burke",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 11,
   "losses": 16,
   "pointsWon": 466,
   "totalPointsAgainst": 501,
   "mixedWins": 5,
   "mixedLosses": 9,
   "genderWins": 6,
   "genderLosses": 7,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 40.7,
   "diff": -35,
   "ppg": 17.3,
   "leagueRank": 146,
   "rating": -2.5,
   "ratingGames": 27,
   "confidence": 84,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.3,
   "playerId": "18bcc459-8067-4650-ad73-3183fae3ea1f"
  },
  {
   "name": "John Dechristopher",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 94,
   "totalPointsAgainst": 89,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "57ad882f-2a78-4756-adcf-3839833ddcd3",
   "winPct": 40,
   "diff": 5,
   "ppg": 18.8,
   "leagueRank": 220,
   "rating": 0.2,
   "ratingGames": 5,
   "confidence": 52,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -0.6
  },
  {
   "name": "Surbhi Sabharwal",
   "gender": "Female",
   "team": "Montville",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 6,
   "losses": 9,
   "pointsWon": 286,
   "totalPointsAgainst": 284,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 6,
   "playerId": "6ff2d1f1-1ffd-4140-820d-b2333c370dcd",
   "winPct": 40,
   "diff": 2,
   "ppg": 19.1,
   "leagueRank": 180,
   "rating": 1.2,
   "ratingGames": 15,
   "confidence": 76,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.3
  },
  {
   "name": "Gregg Valeri",
   "gender": "Male",
   "team": "Montville",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 95,
   "totalPointsAgainst": 98,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "1776cf1e-9587-49c3-8ec7-059fe2eb8243",
   "winPct": 40,
   "diff": -3,
   "ppg": 19,
   "leagueRank": 227,
   "rating": 1,
   "ratingGames": 5,
   "confidence": 51,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": 0.3
  },
  {
   "name": "Sam Barett",
   "gender": "Male",
   "team": "Stelton Sports",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 83,
   "totalPointsAgainst": 97,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "6d606ac1-5840-40e6-a818-f38de6f1711c",
   "winPct": 40,
   "diff": -14,
   "ppg": 16.6,
   "leagueRank": 238,
   "rating": -1.8,
   "ratingGames": 5,
   "confidence": 52,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.2
  },
  {
   "name": "Yang Ruan",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 12,
   "losses": 18,
   "pointsWon": 548,
   "totalPointsAgainst": 578,
   "mixedWins": 7,
   "mixedLosses": 11,
   "genderWins": 5,
   "genderLosses": 7,
   "clutchWins": 6,
   "clutchLosses": 7,
   "winPct": 40,
   "diff": -30,
   "ppg": 18.3,
   "leagueRank": 119,
   "rating": 0.6,
   "ratingGames": 30,
   "confidence": 84,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 1,
   "playerId": "313153f7-7e8f-4e60-9340-0e0d1a43d6be"
  },
  {
   "name": "Denise Richmond",
   "gender": "Female",
   "team": "Flemington",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 45,
   "wins": 18,
   "losses": 27,
   "pointsWon": 814,
   "totalPointsAgainst": 868,
   "mixedWins": 11,
   "mixedLosses": 11,
   "genderWins": 7,
   "genderLosses": 16,
   "clutchWins": 6,
   "clutchLosses": 11,
   "winPct": 40,
   "diff": -54,
   "ppg": 18.1,
   "leagueRank": 117,
   "rating": -0.5,
   "ratingGames": 45,
   "confidence": 90,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.4,
   "playerId": "422cd941-43db-4123-a07e-3316583f51ee"
  },
  {
   "name": "Mike Giampapa",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 6,
   "losses": 9,
   "pointsWon": 237,
   "totalPointsAgainst": 292,
   "mixedWins": 3,
   "mixedLosses": 5,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 40,
   "diff": -55,
   "ppg": 15.8,
   "leagueRank": 221,
   "rating": -3,
   "ratingGames": 15,
   "confidence": 75,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.3,
   "playerId": "61488bc4-71af-4dda-8031-5938382529e5"
  },
  {
   "name": "Andre Yang",
   "gender": "Male",
   "team": "Montville",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 48,
   "wins": 19,
   "losses": 29,
   "pointsWon": 852,
   "totalPointsAgainst": 909,
   "mixedWins": 12,
   "mixedLosses": 14,
   "genderWins": 7,
   "genderLosses": 15,
   "clutchWins": 3,
   "clutchLosses": 10,
   "winPct": 39.6,
   "diff": -57,
   "ppg": 17.8,
   "leagueRank": 121,
   "rating": 0.3,
   "ratingGames": 48,
   "confidence": 90,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.6,
   "playerId": "b9cede07-396d-42c4-84f3-c0e66ecb8f71"
  },
  {
   "name": "Suzanne \"Zan\" Davies",
   "gender": "Female",
   "team": "Stelton Sports",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 33,
   "wins": 13,
   "losses": 20,
   "pointsWon": 580,
   "totalPointsAgainst": 621,
   "mixedWins": 4,
   "mixedLosses": 12,
   "genderWins": 9,
   "genderLosses": 8,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 39.4,
   "diff": -41,
   "ppg": 17.6,
   "leagueRank": 127,
   "rating": -0.4,
   "ratingGames": 33,
   "confidence": 87,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.1,
   "playerId": "25b25938-9a27-4d08-97c1-6db7a6b7ff24"
  },
  {
   "name": "Amy Johnson",
   "gender": "Female",
   "team": "Flemington",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 11,
   "losses": 17,
   "pointsWon": 514,
   "totalPointsAgainst": 538,
   "mixedWins": 4,
   "mixedLosses": 8,
   "genderWins": 7,
   "genderLosses": 9,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 39.3,
   "diff": -24,
   "ppg": 18.4,
   "leagueRank": 141,
   "rating": -0.8,
   "ratingGames": 28,
   "confidence": 85,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0,
   "playerId": "74e493de-dca7-4bf2-b9ac-630484282502"
  },
  {
   "name": "John Burke",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 9,
   "losses": 14,
   "pointsWon": 393,
   "totalPointsAgainst": 441,
   "mixedWins": 5,
   "mixedLosses": 6,
   "genderWins": 4,
   "genderLosses": 8,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 39.1,
   "diff": -48,
   "ppg": 17.1,
   "leagueRank": 188,
   "rating": -1.3,
   "ratingGames": 23,
   "confidence": 82,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0,
   "playerId": "31e2f010-7d86-4706-a172-d0936f4421f0"
  },
  {
   "name": "Hayley Yandoli",
   "gender": "Female",
   "team": "Monroe",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 18,
   "losses": 28,
   "pointsWon": 804,
   "totalPointsAgainst": 888,
   "mixedWins": 11,
   "mixedLosses": 11,
   "genderWins": 7,
   "genderLosses": 17,
   "clutchWins": 6,
   "clutchLosses": 9,
   "winPct": 39.1,
   "diff": -84,
   "ppg": 17.5,
   "leagueRank": 137,
   "rating": 0,
   "ratingGames": 46,
   "confidence": 90,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.7,
   "playerId": "1fc2dd51-135b-46d6-91ef-9291b573e78a"
  },
  {
   "name": "Jennifer Qian",
   "gender": "Female",
   "team": "Stelton Sports",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 69,
   "wins": 27,
   "losses": 42,
   "pointsWon": 1195,
   "totalPointsAgainst": 1285,
   "mixedWins": 14,
   "mixedLosses": 18,
   "genderWins": 13,
   "genderLosses": 24,
   "clutchWins": 8,
   "clutchLosses": 11,
   "winPct": 39.1,
   "diff": -90,
   "ppg": 17.3,
   "leagueRank": 129,
   "rating": -0.2,
   "ratingGames": 69,
   "confidence": 93,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.5,
   "playerId": "902a9e2d-2ac4-4d19-9ae7-e945ece1da00"
  },
  {
   "name": "Steven Gregov",
   "gender": "Male",
   "team": "Flemington",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 18,
   "losses": 28,
   "pointsWon": 785,
   "totalPointsAgainst": 885,
   "mixedWins": 8,
   "mixedLosses": 13,
   "genderWins": 10,
   "genderLosses": 15,
   "clutchWins": 5,
   "clutchLosses": 8,
   "winPct": 39.1,
   "diff": -100,
   "ppg": 17.1,
   "leagueRank": 140,
   "rating": -1.3,
   "ratingGames": 46,
   "confidence": 90,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.2,
   "playerId": "3efad314-83fb-4441-a7bf-510228cea1f8"
  },
  {
   "name": "Michael Barninger",
   "gender": "Male",
   "team": "Home Court",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 14,
   "losses": 22,
   "pointsWon": 645,
   "totalPointsAgainst": 704,
   "mixedWins": 9,
   "mixedLosses": 7,
   "genderWins": 5,
   "genderLosses": 15,
   "clutchWins": 8,
   "clutchLosses": 4,
   "winPct": 38.9,
   "diff": -59,
   "ppg": 17.9,
   "leagueRank": 123,
   "rating": -0.2,
   "ratingGames": 36,
   "confidence": 88,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.4,
   "playerId": "330f9632-9de4-4574-810a-1923f34d7ca6"
  },
  {
   "name": "Kelly Dalsey",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 5,
   "losses": 8,
   "pointsWon": 217,
   "totalPointsAgainst": 260,
   "mixedWins": 1,
   "mixedLosses": 6,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 2,
   "playerId": "4329b94b-0d60-43f1-92ff-3757bc0a03d6",
   "winPct": 38.5,
   "diff": -43,
   "ppg": 16.7,
   "leagueRank": 235,
   "rating": 0,
   "ratingGames": 13,
   "confidence": 74,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 1.5
  },
  {
   "name": "Laura Sweet",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 12,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 86,
   "wins": 33,
   "losses": 53,
   "pointsWon": 1515,
   "totalPointsAgainst": 1669,
   "mixedWins": 18,
   "mixedLosses": 25,
   "genderWins": 15,
   "genderLosses": 28,
   "clutchWins": 14,
   "clutchLosses": 14,
   "winPct": 38.4,
   "diff": -154,
   "ppg": 17.6,
   "leagueRank": 139,
   "rating": 0.9,
   "ratingGames": 86,
   "confidence": 94,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 1.1,
   "playerId": "7b7b29be-c4b7-4ca9-8fd9-77ec362e761b"
  },
  {
   "name": "Renee Mitzner",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 8,
   "losses": 13,
   "pointsWon": 361,
   "totalPointsAgainst": 408,
   "mixedWins": 4,
   "mixedLosses": 7,
   "genderWins": 4,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 38.1,
   "diff": -47,
   "ppg": 17.2,
   "leagueRank": 193,
   "rating": -2,
   "ratingGames": 21,
   "confidence": 81,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -0.6,
   "playerId": "c980f026-901d-4a06-9147-04dadea2b86d"
  },
  {
   "name": "Amanda Brouillard",
   "gender": "Female",
   "team": "Montville",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 16,
   "losses": 26,
   "pointsWon": 739,
   "totalPointsAgainst": 795,
   "mixedWins": 6,
   "mixedLosses": 16,
   "genderWins": 10,
   "genderLosses": 10,
   "clutchWins": 7,
   "clutchLosses": 7,
   "winPct": 38.1,
   "diff": -56,
   "ppg": 17.6,
   "leagueRank": 126,
   "rating": -1,
   "ratingGames": 42,
   "confidence": 89,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.2,
   "playerId": "2b29199f-62de-4125-a014-dd9f9e612cb1"
  },
  {
   "name": "Yi Gu",
   "gender": "Male",
   "team": "Monroe",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 45,
   "wins": 17,
   "losses": 28,
   "pointsWon": 771,
   "totalPointsAgainst": 877,
   "mixedWins": 7,
   "mixedLosses": 12,
   "genderWins": 10,
   "genderLosses": 16,
   "clutchWins": 7,
   "clutchLosses": 6,
   "winPct": 37.8,
   "diff": -106,
   "ppg": 17.1,
   "leagueRank": 152,
   "rating": -0.8,
   "ratingGames": 45,
   "confidence": 90,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.6,
   "playerId": "0640ecce-0b14-4eac-9cbd-be86592d6102"
  },
  {
   "name": "Sal Frangipane",
   "gender": "Male",
   "team": "Monroe",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 135,
   "totalPointsAgainst": 153,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "3bfdf88b-aaa3-4f8d-a673-6a15001fb45a",
   "winPct": 37.5,
   "diff": -18,
   "ppg": 16.9,
   "leagueRank": 239,
   "rating": -1.6,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.1
  },
  {
   "name": "Jeffrey Heil",
   "gender": "Male",
   "team": "Montville",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 12,
   "losses": 20,
   "pointsWon": 578,
   "totalPointsAgainst": 624,
   "mixedWins": 6,
   "mixedLosses": 10,
   "genderWins": 6,
   "genderLosses": 10,
   "clutchWins": 4,
   "clutchLosses": 10,
   "winPct": 37.5,
   "diff": -46,
   "ppg": 18.1,
   "leagueRank": 124,
   "rating": -0.7,
   "ratingGames": 32,
   "confidence": 87,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.2,
   "playerId": "d44c4151-84f7-4ec8-9e48-420a627107fd"
  },
  {
   "name": "Scott Rubin",
   "gender": "Male",
   "team": "Flemington",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 51,
   "wins": 19,
   "losses": 32,
   "pointsWon": 879,
   "totalPointsAgainst": 988,
   "mixedWins": 12,
   "mixedLosses": 14,
   "genderWins": 7,
   "genderLosses": 18,
   "clutchWins": 7,
   "clutchLosses": 11,
   "winPct": 37.3,
   "diff": -109,
   "ppg": 17.2,
   "leagueRank": 143,
   "rating": -1.4,
   "ratingGames": 51,
   "confidence": 91,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.3,
   "playerId": "c12175df-b959-4efe-95e7-e5298b783da8"
  },
  {
   "name": "Ivona Reszka",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 13,
   "losses": 22,
   "pointsWon": 611,
   "totalPointsAgainst": 681,
   "mixedWins": 7,
   "mixedLosses": 10,
   "genderWins": 6,
   "genderLosses": 12,
   "clutchWins": 5,
   "clutchLosses": 8,
   "winPct": 37.1,
   "diff": -70,
   "ppg": 17.5,
   "leagueRank": 133,
   "rating": -1.7,
   "ratingGames": 35,
   "confidence": 87,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.1,
   "playerId": "a06e906c-dd36-4585-b03a-48a49b915662"
  },
  {
   "name": "Art Muth",
   "gender": "Male",
   "team": "Flemington",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 17,
   "losses": 29,
   "pointsWon": 808,
   "totalPointsAgainst": 898,
   "mixedWins": 13,
   "mixedLosses": 10,
   "genderWins": 4,
   "genderLosses": 19,
   "clutchWins": 8,
   "clutchLosses": 6,
   "winPct": 37,
   "diff": -90,
   "ppg": 17.6,
   "leagueRank": 142,
   "rating": -0.4,
   "ratingGames": 46,
   "confidence": 90,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.7,
   "playerId": "6bfc3a49-53cb-4c03-b8cb-94552158ccbe"
  },
  {
   "name": "Naresh Malhotra",
   "gender": "Male",
   "team": "Monroe",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 15,
   "losses": 26,
   "pointsWon": 733,
   "totalPointsAgainst": 792,
   "mixedWins": 6,
   "mixedLosses": 13,
   "genderWins": 9,
   "genderLosses": 13,
   "clutchWins": 6,
   "clutchLosses": 10,
   "winPct": 36.6,
   "diff": -59,
   "ppg": 17.9,
   "leagueRank": 134,
   "rating": 0.1,
   "ratingGames": 41,
   "confidence": 89,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.7,
   "playerId": "732686cf-d4c9-4a45-a966-451f07bd3115"
  },
  {
   "name": "Santhosh Pillai",
   "gender": "Male",
   "team": "Monroe",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 50,
   "wins": 18,
   "losses": 32,
   "pointsWon": 876,
   "totalPointsAgainst": 976,
   "mixedWins": 6,
   "mixedLosses": 17,
   "genderWins": 12,
   "genderLosses": 15,
   "clutchWins": 5,
   "clutchLosses": 8,
   "winPct": 36,
   "diff": -100,
   "ppg": 17.5,
   "leagueRank": 148,
   "rating": 0,
   "ratingGames": 50,
   "confidence": 91,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.9,
   "playerId": "7d25c9f9-c478-402a-9139-cc8781686a8e"
  },
  {
   "name": "Brett Dellavolpe",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 5,
   "losses": 9,
   "pointsWon": 245,
   "totalPointsAgainst": 262,
   "mixedWins": 0,
   "mixedLosses": 7,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 35.7,
   "diff": -17,
   "ppg": 17.5,
   "leagueRank": 222,
   "rating": -1.4,
   "ratingGames": 14,
   "confidence": 74,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -0.7,
   "playerId": "f3ff50d8-e345-4cae-865b-92d4767d6749"
  },
  {
   "name": "Kristen Silvestri",
   "gender": "Female",
   "team": "Montville",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 54,
   "wins": 19,
   "losses": 35,
   "pointsWon": 923,
   "totalPointsAgainst": 1046,
   "mixedWins": 9,
   "mixedLosses": 19,
   "genderWins": 10,
   "genderLosses": 16,
   "clutchWins": 6,
   "clutchLosses": 8,
   "winPct": 35.2,
   "diff": -123,
   "ppg": 17.1,
   "leagueRank": 149,
   "rating": -0.6,
   "ratingGames": 54,
   "confidence": 91,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.3,
   "playerId": "035a8041-2b2d-4050-a71d-9a8e7fb1b5e6"
  },
  {
   "name": "Dint Moore",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 13,
   "losses": 24,
   "pointsWon": 609,
   "totalPointsAgainst": 723,
   "mixedWins": 9,
   "mixedLosses": 9,
   "genderWins": 4,
   "genderLosses": 15,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 35.1,
   "diff": -114,
   "ppg": 16.5,
   "leagueRank": 165,
   "rating": -2.2,
   "ratingGames": 37,
   "confidence": 88,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.4,
   "playerId": "53e6f48d-1702-4121-9bae-8809c365e5c6"
  },
  {
   "name": "Leon Li",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 16,
   "losses": 30,
   "pointsWon": 804,
   "totalPointsAgainst": 873,
   "mixedWins": 12,
   "mixedLosses": 12,
   "genderWins": 4,
   "genderLosses": 18,
   "clutchWins": 3,
   "clutchLosses": 8,
   "winPct": 34.8,
   "diff": -69,
   "ppg": 17.5,
   "leagueRank": 147,
   "rating": 0.4,
   "ratingGames": 46,
   "confidence": 90,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.9,
   "playerId": "528de93e-9cf4-480d-a9ba-5b20f6f23f87"
  },
  {
   "name": "Rich Gaborow",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 113,
   "totalPointsAgainst": 117,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "4482c5d0-0106-41d5-8214-d5e0aabb0d4f",
   "winPct": 33.3,
   "diff": -4,
   "ppg": 18.8,
   "leagueRank": 234,
   "rating": 1.7,
   "ratingGames": 6,
   "confidence": 57,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 2.5
  },
  {
   "name": "Cindy Wang",
   "gender": "Female",
   "team": "Montville",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 99,
   "totalPointsAgainst": 120,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 33.3,
   "diff": -21,
   "ppg": 16.5,
   "leagueRank": 246,
   "rating": -0.8,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.8,
   "playerId": "43591e18-9405-426d-bb8b-3fb004656823"
  },
  {
   "name": "Stacy Fairley",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 4,
   "losses": 8,
   "pointsWon": 200,
   "totalPointsAgainst": 240,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "0f432e98-3bd5-4842-ad3d-fd4d924e9105",
   "winPct": 33.3,
   "diff": -40,
   "ppg": 16.7,
   "leagueRank": 236,
   "rating": -1.3,
   "ratingGames": 12,
   "confidence": 72,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 1.4
  },
  {
   "name": "Erik Lombardo",
   "gender": "Male",
   "team": "Monroe",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 12,
   "losses": 24,
   "pointsWon": 617,
   "totalPointsAgainst": 713,
   "mixedWins": 6,
   "mixedLosses": 14,
   "genderWins": 6,
   "genderLosses": 10,
   "clutchWins": 6,
   "clutchLosses": 7,
   "winPct": 33.3,
   "diff": -96,
   "ppg": 17.1,
   "leagueRank": 160,
   "rating": -1.5,
   "ratingGames": 36,
   "confidence": 87,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.2,
   "playerId": "834f3d3e-bde3-4b30-af4c-d1eadb344dfd"
  },
  {
   "name": "Lara Webb",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 54,
   "wins": 18,
   "losses": 36,
   "pointsWon": 934,
   "totalPointsAgainst": 1053,
   "mixedWins": 9,
   "mixedLosses": 19,
   "genderWins": 9,
   "genderLosses": 17,
   "clutchWins": 10,
   "clutchLosses": 12,
   "winPct": 33.3,
   "diff": -119,
   "ppg": 17.3,
   "leagueRank": 157,
   "rating": 0.3,
   "ratingGames": 54,
   "confidence": 91,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 1.1,
   "playerId": "096a6a65-5d60-461f-91ed-d2eafbd7dd76"
  },
  {
   "name": "Zhe Ding",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 43,
   "wins": 14,
   "losses": 29,
   "pointsWon": 743,
   "totalPointsAgainst": 837,
   "mixedWins": 8,
   "mixedLosses": 11,
   "genderWins": 6,
   "genderLosses": 18,
   "clutchWins": 5,
   "clutchLosses": 8,
   "winPct": 32.6,
   "diff": -94,
   "ppg": 17.3,
   "leagueRank": 161,
   "rating": -0.3,
   "ratingGames": 43,
   "confidence": 88,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 1.1,
   "playerId": "71b536a9-d6d0-46f0-9427-97f761e6bce7"
  },
  {
   "name": "Tim Ahn",
   "gender": "Male",
   "team": "Monroe",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 53,
   "wins": 17,
   "losses": 36,
   "pointsWon": 931,
   "totalPointsAgainst": 1040,
   "mixedWins": 7,
   "mixedLosses": 23,
   "genderWins": 10,
   "genderLosses": 13,
   "clutchWins": 9,
   "clutchLosses": 11,
   "winPct": 32.1,
   "diff": -109,
   "ppg": 17.6,
   "leagueRank": 155,
   "rating": -0.1,
   "ratingGames": 53,
   "confidence": 91,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.8,
   "playerId": "54431f9b-4785-4c4d-bdf9-94baf6da6a52"
  },
  {
   "name": "Evelyn Du",
   "gender": "Female",
   "team": "Montville",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 44,
   "wins": 14,
   "losses": 30,
   "pointsWon": 765,
   "totalPointsAgainst": 857,
   "mixedWins": 9,
   "mixedLosses": 14,
   "genderWins": 5,
   "genderLosses": 16,
   "clutchWins": 5,
   "clutchLosses": 9,
   "winPct": 31.8,
   "diff": -92,
   "ppg": 17.4,
   "leagueRank": 154,
   "rating": -0.5,
   "ratingGames": 44,
   "confidence": 89,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.7,
   "playerId": "08547f36-c938-4f82-a783-9c89ab07500c"
  },
  {
   "name": "Jim Peng",
   "gender": "Male",
   "team": "Stelton Sports",
   "matches": 12,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 66,
   "wins": 21,
   "losses": 45,
   "pointsWon": 1143,
   "totalPointsAgainst": 1287,
   "mixedWins": 10,
   "mixedLosses": 13,
   "genderWins": 11,
   "genderLosses": 32,
   "clutchWins": 9,
   "clutchLosses": 15,
   "winPct": 31.8,
   "diff": -144,
   "ppg": 17.3,
   "leagueRank": 158,
   "rating": -0.3,
   "ratingGames": 66,
   "confidence": 92,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.7,
   "playerId": "eddc4924-517f-46ac-9827-935983daa9db"
  },
  {
   "name": "Shaoyi Sun",
   "gender": "Female",
   "team": "Stelton Sports",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 51,
   "wins": 16,
   "losses": 35,
   "pointsWon": 819,
   "totalPointsAgainst": 973,
   "mixedWins": 8,
   "mixedLosses": 17,
   "genderWins": 8,
   "genderLosses": 18,
   "clutchWins": 3,
   "clutchLosses": 7,
   "winPct": 31.4,
   "diff": -154,
   "ppg": 16.1,
   "leagueRank": 178,
   "rating": -1.6,
   "ratingGames": 51,
   "confidence": 91,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.3,
   "playerId": "fb20f45d-7f81-4d2a-a258-eede4cdec27b"
  },
  {
   "name": "Sue Johnson",
   "gender": "Female",
   "team": "Flemington",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 10,
   "losses": 22,
   "pointsWon": 527,
   "totalPointsAgainst": 642,
   "mixedWins": 6,
   "mixedLosses": 12,
   "genderWins": 4,
   "genderLosses": 10,
   "clutchWins": 6,
   "clutchLosses": 2,
   "winPct": 31.3,
   "diff": -115,
   "ppg": 16.5,
   "leagueRank": 177,
   "rating": -2.1,
   "ratingGames": 32,
   "confidence": 86,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.6,
   "playerId": "c6046610-1dba-4bad-bc89-57e5baa0983f"
  },
  {
   "name": "Jack Brod",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 45,
   "wins": 14,
   "losses": 31,
   "pointsWon": 771,
   "totalPointsAgainst": 883,
   "mixedWins": 11,
   "mixedLosses": 16,
   "genderWins": 3,
   "genderLosses": 15,
   "clutchWins": 5,
   "clutchLosses": 10,
   "winPct": 31.1,
   "diff": -112,
   "ppg": 17.1,
   "leagueRank": 169,
   "rating": 0,
   "ratingGames": 45,
   "confidence": 89,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 1.2,
   "playerId": "015b5d91-0510-4901-9180-a9f68d22a421"
  },
  {
   "name": "Darin Morgan",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 9,
   "losses": 20,
   "pointsWon": 490,
   "totalPointsAgainst": 570,
   "mixedWins": 6,
   "mixedLosses": 11,
   "genderWins": 3,
   "genderLosses": 9,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 31,
   "diff": -80,
   "ppg": 16.9,
   "leagueRank": 176,
   "rating": 0.9,
   "ratingGames": 29,
   "confidence": 85,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 1.5,
   "playerId": "dd2e7522-5de0-4018-b8f2-f0e332bff293"
  },
  {
   "name": "Albert Pamudji",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 59,
   "wins": 18,
   "losses": 41,
   "pointsWon": 1008,
   "totalPointsAgainst": 1152,
   "mixedWins": 15,
   "mixedLosses": 13,
   "genderWins": 3,
   "genderLosses": 28,
   "clutchWins": 4,
   "clutchLosses": 9,
   "winPct": 30.5,
   "diff": -144,
   "ppg": 17.1,
   "leagueRank": 164,
   "rating": -1.5,
   "ratingGames": 59,
   "confidence": 92,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.6,
   "playerId": "f8c55797-409c-4cf0-a2d5-241ec95f60b2"
  },
  {
   "name": "Andrea Smith",
   "gender": "Female",
   "team": "Home Court",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 7,
   "losses": 16,
   "pointsWon": 383,
   "totalPointsAgainst": 443,
   "mixedWins": 5,
   "mixedLosses": 8,
   "genderWins": 2,
   "genderLosses": 8,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 30.4,
   "diff": -60,
   "ppg": 16.7,
   "leagueRank": 212,
   "rating": -0.6,
   "ratingGames": 23,
   "confidence": 82,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.5,
   "playerId": "1318bc01-f23f-47da-94cb-ac71b8f3e694"
  },
  {
   "name": "Marc Friedman",
   "gender": "Male",
   "team": "Flemington",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 14,
   "losses": 32,
   "pointsWon": 824,
   "totalPointsAgainst": 903,
   "mixedWins": 6,
   "mixedLosses": 16,
   "genderWins": 8,
   "genderLosses": 16,
   "clutchWins": 4,
   "clutchLosses": 13,
   "winPct": 30.4,
   "diff": -79,
   "ppg": 17.9,
   "leagueRank": 153,
   "rating": -0.7,
   "ratingGames": 46,
   "confidence": 90,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.5,
   "playerId": "d7bdde76-1007-4b20-a804-4efcd08c3598"
  },
  {
   "name": "Tracey Collins",
   "gender": "Female",
   "team": "Monroe",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 14,
   "losses": 32,
   "pointsWon": 812,
   "totalPointsAgainst": 908,
   "mixedWins": 10,
   "mixedLosses": 13,
   "genderWins": 4,
   "genderLosses": 19,
   "clutchWins": 6,
   "clutchLosses": 11,
   "winPct": 30.4,
   "diff": -96,
   "ppg": 17.7,
   "leagueRank": 156,
   "rating": -0.1,
   "ratingGames": 46,
   "confidence": 90,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.8,
   "playerId": "f01a9ccb-b72e-4980-bdc0-73ed5a72f92c"
  },
  {
   "name": "Ted Lee",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 33,
   "wins": 10,
   "losses": 23,
   "pointsWon": 553,
   "totalPointsAgainst": 650,
   "mixedWins": 7,
   "mixedLosses": 7,
   "genderWins": 3,
   "genderLosses": 16,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 30.3,
   "diff": -97,
   "ppg": 16.8,
   "leagueRank": 170,
   "rating": -1.9,
   "ratingGames": 33,
   "confidence": 87,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.3,
   "playerId": "f6d91a04-e692-4905-96a6-968175585586"
  },
  {
   "name": "Margaret Weidlich",
   "gender": "Female",
   "team": "Home Court",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 55,
   "wins": 16,
   "losses": 39,
   "pointsWon": 940,
   "totalPointsAgainst": 1071,
   "mixedWins": 7,
   "mixedLosses": 21,
   "genderWins": 9,
   "genderLosses": 18,
   "clutchWins": 6,
   "clutchLosses": 13,
   "winPct": 29.1,
   "diff": -131,
   "ppg": 17.1,
   "leagueRank": 162,
   "rating": -2.2,
   "ratingGames": 55,
   "confidence": 91,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.1,
   "playerId": "7021e97f-1e5e-4adb-ac80-1a9c919caba6"
  },
  {
   "name": "Liang Chao",
   "gender": "Female",
   "team": "Montville",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 11,
   "losses": 27,
   "pointsWon": 610,
   "totalPointsAgainst": 749,
   "mixedWins": 7,
   "mixedLosses": 13,
   "genderWins": 4,
   "genderLosses": 14,
   "clutchWins": 1,
   "clutchLosses": 6,
   "winPct": 28.9,
   "diff": -139,
   "ppg": 16.1,
   "leagueRank": 184,
   "rating": -1.6,
   "ratingGames": 38,
   "confidence": 88,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.8,
   "playerId": "34ae5ecc-b6b2-44a4-b0a6-b8e59437a32c"
  },
  {
   "name": "Brandon Fulford",
   "gender": "Male",
   "team": "Montville",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 52,
   "wins": 15,
   "losses": 37,
   "pointsWon": 862,
   "totalPointsAgainst": 1044,
   "mixedWins": 4,
   "mixedLosses": 20,
   "genderWins": 11,
   "genderLosses": 17,
   "clutchWins": 8,
   "clutchLosses": 9,
   "winPct": 28.8,
   "diff": -182,
   "ppg": 16.6,
   "leagueRank": 179,
   "rating": -2.5,
   "ratingGames": 52,
   "confidence": 91,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.1,
   "playerId": "906383cd-e781-48bc-9004-0fc5427c7e62"
  },
  {
   "name": "Tara Kramer",
   "gender": "Female",
   "team": "Flemington",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 8,
   "losses": 20,
   "pointsWon": 443,
   "totalPointsAgainst": 546,
   "mixedWins": 4,
   "mixedLosses": 11,
   "genderWins": 4,
   "genderLosses": 9,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 28.6,
   "diff": -103,
   "ppg": 15.8,
   "leagueRank": 203,
   "rating": -2.9,
   "ratingGames": 28,
   "confidence": 85,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.5,
   "playerId": "dae62b8e-5f8e-4721-8f41-3218518d1e30"
  },
  {
   "name": "Wally Liu",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 10,
   "losses": 26,
   "pointsWon": 562,
   "totalPointsAgainst": 711,
   "mixedWins": 9,
   "mixedLosses": 13,
   "genderWins": 1,
   "genderLosses": 13,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 27.8,
   "diff": -149,
   "ppg": 15.6,
   "leagueRank": 190,
   "rating": -3,
   "ratingGames": 36,
   "confidence": 87,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.6,
   "playerId": "0a36460a-ac00-4501-8a7f-9b217bfbddc7"
  },
  {
   "name": "Michele Dabal",
   "gender": "Female",
   "team": "Montville",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 8,
   "losses": 21,
   "pointsWon": 498,
   "totalPointsAgainst": 568,
   "mixedWins": 3,
   "mixedLosses": 9,
   "genderWins": 5,
   "genderLosses": 12,
   "clutchWins": 1,
   "clutchLosses": 9,
   "winPct": 27.6,
   "diff": -70,
   "ppg": 17.2,
   "leagueRank": 171,
   "rating": -0.4,
   "ratingGames": 29,
   "confidence": 86,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.8,
   "playerId": "6dd6742b-80cc-45b6-b5df-2eed3b7f00a1"
  },
  {
   "name": "Michael Vincent",
   "gender": "Male",
   "team": "Home Court",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 10,
   "losses": 27,
   "pointsWon": 645,
   "totalPointsAgainst": 712,
   "mixedWins": 6,
   "mixedLosses": 15,
   "genderWins": 4,
   "genderLosses": 12,
   "clutchWins": 1,
   "clutchLosses": 8,
   "winPct": 27,
   "diff": -67,
   "ppg": 17.4,
   "leagueRank": 163,
   "rating": -0.5,
   "ratingGames": 37,
   "confidence": 88,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.3,
   "playerId": "7f44421c-476c-4857-99ed-3376b32289ca"
  },
  {
   "name": "Vita Mulholland",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 56,
   "wins": 15,
   "losses": 41,
   "pointsWon": 911,
   "totalPointsAgainst": 1108,
   "mixedWins": 8,
   "mixedLosses": 20,
   "genderWins": 7,
   "genderLosses": 21,
   "clutchWins": 6,
   "clutchLosses": 6,
   "winPct": 26.8,
   "diff": -197,
   "ppg": 16.3,
   "leagueRank": 189,
   "rating": -0.5,
   "ratingGames": 56,
   "confidence": 91,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 1.2,
   "playerId": "fe0555e5-2ec9-4dc2-a44b-4017d5afbb41"
  },
  {
   "name": "Peter Chen",
   "gender": "Male",
   "team": "Montville",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 7,
   "losses": 20,
   "pointsWon": 430,
   "totalPointsAgainst": 544,
   "mixedWins": 3,
   "mixedLosses": 7,
   "genderWins": 4,
   "genderLosses": 13,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 25.9,
   "diff": -114,
   "ppg": 15.9,
   "leagueRank": 209,
   "rating": -3,
   "ratingGames": 27,
   "confidence": 85,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0,
   "playerId": "8767c73e-fa5a-4e68-9ded-850b7ab50693"
  },
  {
   "name": "Feng Ling",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 1,
   "losses": 3,
   "pointsWon": 69,
   "totalPointsAgainst": 82,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "b3e11fd0-f2cb-4338-b771-6490d98cf348",
   "winPct": 25,
   "diff": -13,
   "ppg": 17.3,
   "leagueRank": 245,
   "rating": -2,
   "ratingGames": 4,
   "confidence": 45,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": -0.8
  },
  {
   "name": "Lan Bin",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 1,
   "losses": 3,
   "pointsWon": 62,
   "totalPointsAgainst": 82,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "97ed17e1-9a68-45fe-adf5-f20d33ea7239",
   "winPct": 25,
   "diff": -20,
   "ppg": 15.5,
   "leagueRank": 250,
   "rating": -2.1,
   "ratingGames": 4,
   "confidence": 43,
   "strengthOfPartners": -2,
   "strengthOfOpponents": -0.6
  },
  {
   "name": "Cheryl Isbirian",
   "gender": "Female",
   "team": "Home Court",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 135,
   "totalPointsAgainst": 162,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "23c87311-dae9-47a5-be80-30aab8231ce2",
   "winPct": 25,
   "diff": -27,
   "ppg": 16.9,
   "leagueRank": 249,
   "rating": 1.5,
   "ratingGames": 8,
   "confidence": 64,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 2.9
  },
  {
   "name": "Coby Resnick",
   "gender": "Female",
   "team": "Monroe",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 132,
   "totalPointsAgainst": 163,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "0f80fa65-da5b-48e1-8a59-ae8d5f0cf158",
   "winPct": 25,
   "diff": -31,
   "ppg": 16.5,
   "leagueRank": 251,
   "rating": 1,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 2.3
  },
  {
   "name": "Wendy Zukerberg",
   "gender": "Female",
   "team": "Montville",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 4,
   "losses": 12,
   "pointsWon": 274,
   "totalPointsAgainst": 310,
   "mixedWins": 2,
   "mixedLosses": 6,
   "genderWins": 2,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 5,
   "winPct": 25,
   "diff": -36,
   "ppg": 17.1,
   "leagueRank": 228,
   "rating": -0.1,
   "ratingGames": 16,
   "confidence": 75,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.8,
   "playerId": "f34665bd-6866-415f-a498-21d7f69fb895"
  },
  {
   "name": "Bill Ly",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 3,
   "losses": 9,
   "pointsWon": 198,
   "totalPointsAgainst": 241,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "a994d97f-5970-4332-adf1-d7ec828e84a3",
   "winPct": 25,
   "diff": -43,
   "ppg": 16.5,
   "leagueRank": 240,
   "rating": -2.7,
   "ratingGames": 12,
   "confidence": 72,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.1
  },
  {
   "name": "Riguo Zheng",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 3,
   "losses": 9,
   "pointsWon": 195,
   "totalPointsAgainst": 239,
   "mixedWins": 0,
   "mixedLosses": 6,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "c5fa0e7c-eb97-45fa-8a86-850a918fff54",
   "winPct": 25,
   "diff": -44,
   "ppg": 16.3,
   "leagueRank": 242,
   "rating": -1.3,
   "ratingGames": 12,
   "confidence": 72,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.9
  },
  {
   "name": "Jitendra Arora",
   "gender": "Male",
   "team": "Montville",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 117,
   "totalPointsAgainst": 161,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "a117b66b-f319-4fc0-8ee2-feb3f17767d0",
   "winPct": 25,
   "diff": -44,
   "ppg": 14.6,
   "leagueRank": 262,
   "rating": 1.3,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 3.1
  },
  {
   "name": "Gajendra Mehta",
   "gender": "Male",
   "team": "Stelton Sports",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 3,
   "losses": 9,
   "pointsWon": 197,
   "totalPointsAgainst": 245,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 1,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 2,
   "playerId": "9ecb04f7-d32e-4f28-8585-aad932450f89",
   "winPct": 25,
   "diff": -48,
   "ppg": 16.4,
   "leagueRank": 243,
   "rating": -1.4,
   "ratingGames": 12,
   "confidence": 72,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.9
  },
  {
   "name": "Daniel Mellul",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 4,
   "losses": 12,
   "pointsWon": 269,
   "totalPointsAgainst": 319,
   "mixedWins": 3,
   "mixedLosses": 7,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 25,
   "diff": -50,
   "ppg": 16.8,
   "leagueRank": 233,
   "rating": -1.7,
   "ratingGames": 16,
   "confidence": 78,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.2,
   "playerId": "5dccd915-178e-4316-8e9b-e0a3db8edfa9"
  },
  {
   "name": "Nicole Nelson",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 3,
   "losses": 9,
   "pointsWon": 189,
   "totalPointsAgainst": 240,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "2e2b7732-48a3-4102-86f9-555111fa9ae8",
   "winPct": 25,
   "diff": -51,
   "ppg": 15.8,
   "leagueRank": 241,
   "rating": -2.8,
   "ratingGames": 12,
   "confidence": 72,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -0.2
  },
  {
   "name": "Quen Koon Ng",
   "gender": "Female",
   "team": "Monroe",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 110,
   "totalPointsAgainst": 164,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "6c655208-0558-4174-a618-7988d5783914",
   "winPct": 25,
   "diff": -54,
   "ppg": 13.8,
   "leagueRank": 266,
   "rating": -1.8,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 1.6
  },
  {
   "name": "Franklin Lupianez",
   "gender": "Male",
   "team": "Home Court",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 6,
   "losses": 19,
   "pointsWon": 438,
   "totalPointsAgainst": 508,
   "mixedWins": 3,
   "mixedLosses": 9,
   "genderWins": 3,
   "genderLosses": 10,
   "clutchWins": 4,
   "clutchLosses": 7,
   "winPct": 24,
   "diff": -70,
   "ppg": 17.5,
   "leagueRank": 196,
   "rating": -1.4,
   "ratingGames": 25,
   "confidence": 84,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.1,
   "playerId": "17caef8b-84d4-4052-9695-7c74190925a1"
  },
  {
   "name": "Brian Caine",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 6,
   "losses": 19,
   "pointsWon": 430,
   "totalPointsAgainst": 504,
   "mixedWins": 3,
   "mixedLosses": 9,
   "genderWins": 3,
   "genderLosses": 10,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 24,
   "diff": -74,
   "ppg": 17.2,
   "leagueRank": 202,
   "rating": -1.2,
   "ratingGames": 25,
   "confidence": 84,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.8,
   "playerId": "7d0e32ca-3e4e-455f-968c-f5d427efeacb"
  },
  {
   "name": "Todd Stein",
   "gender": "Male",
   "team": "Flemington",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 5,
   "losses": 16,
   "pointsWon": 331,
   "totalPointsAgainst": 415,
   "mixedWins": 3,
   "mixedLosses": 5,
   "genderWins": 2,
   "genderLosses": 11,
   "clutchWins": 2,
   "clutchLosses": 5,
   "winPct": 23.8,
   "diff": -84,
   "ppg": 15.8,
   "leagueRank": 232,
   "rating": -1.8,
   "ratingGames": 21,
   "confidence": 81,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 1.1,
   "playerId": "63fb8f7d-8f83-4bdf-89c7-fc3ca7139df5"
  },
  {
   "name": "Tara Lombardo",
   "gender": "Female",
   "team": "Monroe",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 55,
   "wins": 13,
   "losses": 42,
   "pointsWon": 911,
   "totalPointsAgainst": 1103,
   "mixedWins": 11,
   "mixedLosses": 17,
   "genderWins": 2,
   "genderLosses": 25,
   "clutchWins": 8,
   "clutchLosses": 12,
   "winPct": 23.6,
   "diff": -192,
   "ppg": 16.6,
   "leagueRank": 191,
   "rating": -0.9,
   "ratingGames": 55,
   "confidence": 91,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 1,
   "playerId": "77d20dd0-823c-474e-b470-12f69db5a588"
  },
  {
   "name": "Mengchu Zhou",
   "gender": "Male",
   "team": "Stelton Sports",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 6,
   "losses": 20,
   "pointsWon": 462,
   "totalPointsAgainst": 504,
   "mixedWins": 5,
   "mixedLosses": 7,
   "genderWins": 1,
   "genderLosses": 13,
   "clutchWins": 2,
   "clutchLosses": 9,
   "winPct": 23.1,
   "diff": -42,
   "ppg": 17.8,
   "leagueRank": 187,
   "rating": -1.3,
   "ratingGames": 26,
   "confidence": 84,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.1,
   "playerId": "14fc7872-1e6f-419e-adcb-d8e63826a37d"
  },
  {
   "name": "Ayten Mayer",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 8,
   "losses": 27,
   "pointsWon": 591,
   "totalPointsAgainst": 707,
   "mixedWins": 4,
   "mixedLosses": 14,
   "genderWins": 4,
   "genderLosses": 13,
   "clutchWins": 4,
   "clutchLosses": 11,
   "winPct": 22.9,
   "diff": -116,
   "ppg": 16.9,
   "leagueRank": 186,
   "rating": -1.9,
   "ratingGames": 35,
   "confidence": 87,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.3,
   "playerId": "8072e25c-4788-48b5-a440-0d4403f89f4f"
  },
  {
   "name": "Claudia Van Loo",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 5,
   "losses": 17,
   "pointsWon": 351,
   "totalPointsAgainst": 438,
   "mixedWins": 3,
   "mixedLosses": 8,
   "genderWins": 2,
   "genderLosses": 9,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 22.7,
   "diff": -87,
   "ppg": 16,
   "leagueRank": 224,
   "rating": -3.7,
   "ratingGames": 22,
   "confidence": 82,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": -0.6,
   "playerId": "9066a581-73c5-410c-b3c3-af202f2d5ae5"
  },
  {
   "name": "Sarah Flynn",
   "gender": "Female",
   "team": "Monroe",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 8,
   "losses": 28,
   "pointsWon": 578,
   "totalPointsAgainst": 723,
   "mixedWins": 6,
   "mixedLosses": 12,
   "genderWins": 2,
   "genderLosses": 16,
   "clutchWins": 2,
   "clutchLosses": 6,
   "winPct": 22.2,
   "diff": -145,
   "ppg": 16.1,
   "leagueRank": 195,
   "rating": -2,
   "ratingGames": 36,
   "confidence": 88,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.6,
   "playerId": "29b01229-f7ed-4692-bdb4-32926b8a7cc5"
  },
  {
   "name": "Yue Fei",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 3,
   "losses": 11,
   "pointsWon": 227,
   "totalPointsAgainst": 282,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 3,
   "playerId": "adf031d4-82e4-4f54-8b1c-e27c219669f1",
   "winPct": 21.4,
   "diff": -55,
   "ppg": 16.2,
   "leagueRank": 247,
   "rating": -0.2,
   "ratingGames": 14,
   "confidence": 74,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 1.2
  },
  {
   "name": "Michael Oppenheim",
   "gender": "Male",
   "team": "Montville",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 4,
   "losses": 15,
   "pointsWon": 335,
   "totalPointsAgainst": 384,
   "mixedWins": 1,
   "mixedLosses": 6,
   "genderWins": 3,
   "genderLosses": 9,
   "clutchWins": 1,
   "clutchLosses": 6,
   "winPct": 21.1,
   "diff": -49,
   "ppg": 17.6,
   "leagueRank": 231,
   "rating": -1.8,
   "ratingGames": 19,
   "confidence": 80,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.1,
   "playerId": "4155c169-e722-48c6-8835-e0c83f27468a"
  },
  {
   "name": "Jiyun Yuh",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 71,
   "wins": 15,
   "losses": 56,
   "pointsWon": 1157,
   "totalPointsAgainst": 1441,
   "mixedWins": 4,
   "mixedLosses": 32,
   "genderWins": 11,
   "genderLosses": 24,
   "clutchWins": 8,
   "clutchLosses": 10,
   "winPct": 21.1,
   "diff": -284,
   "ppg": 16.3,
   "leagueRank": 197,
   "rating": -3,
   "ratingGames": 71,
   "confidence": 93,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.4,
   "playerId": "c94ae231-9f0c-4212-b769-7bd708d8fc38"
  },
  {
   "name": "Sharon Streit",
   "gender": "Female",
   "team": "Home Court",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 7,
   "losses": 27,
   "pointsWon": 578,
   "totalPointsAgainst": 682,
   "mixedWins": 3,
   "mixedLosses": 14,
   "genderWins": 4,
   "genderLosses": 13,
   "clutchWins": 2,
   "clutchLosses": 11,
   "winPct": 20.6,
   "diff": -104,
   "ppg": 17,
   "leagueRank": 183,
   "rating": -1.8,
   "ratingGames": 34,
   "confidence": 87,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.4,
   "playerId": "9f9e5b25-d385-4c12-adb3-233c612619c4"
  },
  {
   "name": "Glenn Markowitz",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 81,
   "totalPointsAgainst": 101,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "50ec28bd-1277-47b6-b72c-735d12ac4a70",
   "winPct": 20,
   "diff": -20,
   "ppg": 16.2,
   "leagueRank": 255,
   "rating": 0.1,
   "ratingGames": 5,
   "confidence": 52,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": 1.2
  },
  {
   "name": "Michael Goldstein",
   "gender": "Male",
   "team": "Montville",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 82,
   "totalPointsAgainst": 103,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "3a661f96-1d75-4d90-b49f-72c000ec0db3",
   "winPct": 20,
   "diff": -21,
   "ppg": 16.4,
   "leagueRank": 252,
   "rating": -0.9,
   "ratingGames": 5,
   "confidence": 52,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.9
  },
  {
   "name": "Jinghua Shao",
   "gender": "Female",
   "team": "Stelton Sports",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 72,
   "totalPointsAgainst": 100,
   "mixedWins": 0,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "761f2ca8-5e68-420f-986e-7f59003169dd",
   "winPct": 20,
   "diff": -28,
   "ppg": 14.4,
   "leagueRank": 259,
   "rating": -3.7,
   "ratingGames": 5,
   "confidence": 51,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.7
  },
  {
   "name": "Jiangang Li",
   "gender": "Male",
   "team": "Stelton Sports",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 70,
   "totalPointsAgainst": 103,
   "mixedWins": 0,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "2af973bf-1b1f-486d-9193-28fbede57a6b",
   "winPct": 20,
   "diff": -33,
   "ppg": 14,
   "leagueRank": 264,
   "rating": -2.6,
   "ratingGames": 5,
   "confidence": 52,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.4
  },
  {
   "name": "Laura Spilatro",
   "gender": "Female",
   "team": "Home Court",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 5,
   "losses": 22,
   "pointsWon": 424,
   "totalPointsAgainst": 531,
   "mixedWins": 2,
   "mixedLosses": 10,
   "genderWins": 3,
   "genderLosses": 12,
   "clutchWins": 1,
   "clutchLosses": 6,
   "winPct": 18.5,
   "diff": -107,
   "ppg": 15.7,
   "leagueRank": 218,
   "rating": -3.3,
   "ratingGames": 27,
   "confidence": 85,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.3,
   "playerId": "459df1a4-6663-4d9e-9b05-bf33f5e9d8ea"
  },
  {
   "name": "Lillian Gin-Lee",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 2,
   "losses": 9,
   "pointsWon": 180,
   "totalPointsAgainst": 216,
   "mixedWins": 2,
   "mixedLosses": 6,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 18.2,
   "diff": -36,
   "ppg": 16.4,
   "leagueRank": 244,
   "rating": -1.2,
   "ratingGames": 11,
   "confidence": 71,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.9,
   "playerId": "d0c84615-b81a-4bc6-8493-3907b097e43c"
  },
  {
   "name": "Mark Lim",
   "gender": "Male",
   "team": "Home Court",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 5,
   "losses": 23,
   "pointsWon": 448,
   "totalPointsAgainst": 562,
   "mixedWins": 2,
   "mixedLosses": 12,
   "genderWins": 3,
   "genderLosses": 11,
   "clutchWins": 1,
   "clutchLosses": 5,
   "winPct": 17.9,
   "diff": -114,
   "ppg": 16,
   "leagueRank": 219,
   "rating": -2.9,
   "ratingGames": 28,
   "confidence": 85,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.4,
   "playerId": "2d3c137a-6e03-4cfe-bce1-945d60358b5b"
  },
  {
   "name": "Andrea Mui",
   "gender": "Female",
   "team": "Monroe",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 64,
   "wins": 11,
   "losses": 53,
   "pointsWon": 1018,
   "totalPointsAgainst": 1287,
   "mixedWins": 8,
   "mixedLosses": 24,
   "genderWins": 3,
   "genderLosses": 29,
   "clutchWins": 5,
   "clutchLosses": 13,
   "winPct": 17.2,
   "diff": -269,
   "ppg": 15.9,
   "leagueRank": 206,
   "rating": -1.3,
   "ratingGames": 64,
   "confidence": 92,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 1.2,
   "playerId": "7a1f2b24-7109-4933-9428-c8fef6eb8348"
  },
  {
   "name": "Kimberly Schwartz",
   "gender": "Female",
   "team": "Montville",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 93,
   "totalPointsAgainst": 120,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "bb235d73-c023-4543-82b0-37abbf747f7d",
   "winPct": 16.7,
   "diff": -27,
   "ppg": 15.5,
   "leagueRank": 258,
   "rating": -1.4,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.9
  },
  {
   "name": "David King",
   "gender": "Male",
   "team": "Montville",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 2,
   "losses": 10,
   "pointsWon": 169,
   "totalPointsAgainst": 244,
   "mixedWins": 0,
   "mixedLosses": 5,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "86d26f19-6cb9-442b-b089-994609b4fd77",
   "winPct": 16.7,
   "diff": -75,
   "ppg": 14.1,
   "leagueRank": 257,
   "rating": -1.3,
   "ratingGames": 12,
   "confidence": 72,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 1.8
  },
  {
   "name": "Lori Flickinger",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 6,
   "losses": 30,
   "pointsWon": 558,
   "totalPointsAgainst": 733,
   "mixedWins": 3,
   "mixedLosses": 16,
   "genderWins": 3,
   "genderLosses": 14,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 16.7,
   "diff": -175,
   "ppg": 15.5,
   "leagueRank": 216,
   "rating": -0.6,
   "ratingGames": 36,
   "confidence": 88,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 1.8,
   "playerId": "7be2e586-5d71-40e2-b708-c862448e40da"
  },
  {
   "name": "Savita Nandal",
   "gender": "Female",
   "team": "Montville",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 4,
   "losses": 21,
   "pointsWon": 346,
   "totalPointsAgainst": 510,
   "mixedWins": 2,
   "mixedLosses": 11,
   "genderWins": 2,
   "genderLosses": 10,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 16,
   "diff": -164,
   "ppg": 13.8,
   "leagueRank": 237,
   "rating": -1.8,
   "ratingGames": 25,
   "confidence": 84,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 1.7,
   "playerId": "ce787b4f-30b9-4fd0-a12a-caba1f27ca68"
  },
  {
   "name": "Dave Pellicane",
   "gender": "Male",
   "team": "Stelton Sports",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 6,
   "losses": 32,
   "pointsWon": 628,
   "totalPointsAgainst": 775,
   "mixedWins": 2,
   "mixedLosses": 14,
   "genderWins": 4,
   "genderLosses": 18,
   "clutchWins": 4,
   "clutchLosses": 9,
   "winPct": 15.8,
   "diff": -147,
   "ppg": 16.5,
   "leagueRank": 200,
   "rating": -2.3,
   "ratingGames": 38,
   "confidence": 88,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.4,
   "playerId": "2725f46f-cb36-411b-bf79-70611fbda07c"
  },
  {
   "name": "Laurence Emerson",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 45,
   "wins": 7,
   "losses": 38,
   "pointsWon": 705,
   "totalPointsAgainst": 907,
   "mixedWins": 3,
   "mixedLosses": 19,
   "genderWins": 4,
   "genderLosses": 19,
   "clutchWins": 2,
   "clutchLosses": 7,
   "winPct": 15.6,
   "diff": -202,
   "ppg": 15.7,
   "leagueRank": 213,
   "rating": -2.4,
   "ratingGames": 45,
   "confidence": 90,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.5,
   "playerId": "d1d8de9c-d716-4531-8f30-70742305ac46"
  },
  {
   "name": "Bob Castellano",
   "gender": "Male",
   "team": "Flemington",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 6,
   "losses": 33,
   "pointsWon": 607,
   "totalPointsAgainst": 793,
   "mixedWins": 3,
   "mixedLosses": 16,
   "genderWins": 3,
   "genderLosses": 17,
   "clutchWins": 3,
   "clutchLosses": 8,
   "winPct": 15.4,
   "diff": -186,
   "ppg": 15.6,
   "leagueRank": 215,
   "rating": -3.2,
   "ratingGames": 39,
   "confidence": 89,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.8,
   "playerId": "7bb24154-bd52-4081-a3e6-0b8afcde62d5"
  },
  {
   "name": "Paula Cushing",
   "gender": "Female",
   "team": "Monroe",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 33,
   "wins": 5,
   "losses": 28,
   "pointsWon": 457,
   "totalPointsAgainst": 682,
   "mixedWins": 4,
   "mixedLosses": 12,
   "genderWins": 1,
   "genderLosses": 16,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 15.2,
   "diff": -225,
   "ppg": 13.8,
   "leagueRank": 229,
   "rating": -3.3,
   "ratingGames": 33,
   "confidence": 87,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 1.5,
   "playerId": "f8a42c6f-43b2-4769-b0ed-a1d648353e04"
  },
  {
   "name": "Ryan Sherry",
   "gender": "Male",
   "team": "Montville",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 119,
   "totalPointsAgainst": 137,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 3,
   "playerId": "6d8254ae-6e00-4704-8c1e-936733eb9b09",
   "winPct": 14.3,
   "diff": -18,
   "ppg": 17,
   "leagueRank": 253,
   "rating": 1.6,
   "ratingGames": 7,
   "confidence": 57,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 2.1
  },
  {
   "name": "Neil Shroff",
   "gender": "Male",
   "team": "Home Court",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 126,
   "totalPointsAgainst": 166,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "3747bd2d-caa8-455b-aa07-edae17f06d6c",
   "winPct": 12.5,
   "diff": -40,
   "ppg": 15.8,
   "leagueRank": 261,
   "rating": -2.7,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 1
  },
  {
   "name": "Jen Carara",
   "gender": "Female",
   "team": "Monroe",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 122,
   "totalPointsAgainst": 164,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "3123a017-5268-43cb-8306-d70ac18760c3",
   "winPct": 12.5,
   "diff": -42,
   "ppg": 15.3,
   "leagueRank": 267,
   "rating": 1,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 2.8
  },
  {
   "name": "Ben Xie",
   "gender": "Male",
   "team": "Stelton Sports",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 9,
   "wins": 1,
   "losses": 8,
   "pointsWon": 128,
   "totalPointsAgainst": 187,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "ed9f303e-a29c-4172-a72d-6a9a31bf7124",
   "winPct": 11.1,
   "diff": -59,
   "ppg": 14.2,
   "leagueRank": 271,
   "rating": -3.2,
   "ratingGames": 9,
   "confidence": 66,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.7
  },
  {
   "name": "Karan Bhagat",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 9,
   "wins": 1,
   "losses": 8,
   "pointsWon": 124,
   "totalPointsAgainst": 187,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 11.1,
   "diff": -63,
   "ppg": 13.8,
   "leagueRank": 270,
   "rating": -4.8,
   "ratingGames": 10,
   "confidence": 67,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.1,
   "playerId": "69c075d1-004a-4e82-934c-373878b9c3c0"
  },
  {
   "name": "Nancy Lin",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 2,
   "losses": 16,
   "pointsWon": 225,
   "totalPointsAgainst": 373,
   "mixedWins": 0,
   "mixedLosses": 9,
   "genderWins": 2,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 11.1,
   "diff": -148,
   "ppg": 12.5,
   "leagueRank": 260,
   "rating": -4.6,
   "ratingGames": 18,
   "confidence": 80,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 1.2,
   "playerId": "88bcb8e1-970f-4535-bec1-beb232f1f77a"
  },
  {
   "name": "Ping Yang",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 1,
   "losses": 10,
   "pointsWon": 157,
   "totalPointsAgainst": 229,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "a1b13a29-05c7-4582-9227-22a7bcb0e713",
   "winPct": 9.1,
   "diff": -72,
   "ppg": 14.3,
   "leagueRank": 263,
   "rating": -3.8,
   "ratingGames": 11,
   "confidence": 69,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.3
  },
  {
   "name": "Neal Kirschner",
   "gender": "Male",
   "team": "Montville",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 1,
   "losses": 12,
   "pointsWon": 205,
   "totalPointsAgainst": 271,
   "mixedWins": 0,
   "mixedLosses": 8,
   "genderWins": 1,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 4,
   "playerId": "d4838dd9-7b8b-4791-bd2e-751d9c6f63e1",
   "winPct": 7.7,
   "diff": -66,
   "ppg": 15.8,
   "leagueRank": 254,
   "rating": -2.1,
   "ratingGames": 13,
   "confidence": 73,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.7
  },
  {
   "name": "Rick Derose",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 3,
   "losses": 38,
   "pointsWon": 614,
   "totalPointsAgainst": 837,
   "mixedWins": 3,
   "mixedLosses": 21,
   "genderWins": 0,
   "genderLosses": 17,
   "clutchWins": 1,
   "clutchLosses": 8,
   "winPct": 7.3,
   "diff": -223,
   "ppg": 15,
   "leagueRank": 226,
   "rating": -3,
   "ratingGames": 41,
   "confidence": 89,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.7,
   "playerId": "823fc9d2-d052-423c-87a9-bd601b54a414"
  },
  {
   "name": "Jay Coffey",
   "gender": "Male",
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
   "leagueRank": 288,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "0a52d226-f759-45b0-886c-09768e3407cf"
  },
  {
   "name": "Marc Bondi",
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
   "leagueRank": 284,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "66bb83ba-582b-4066-a944-45d022d4673f"
  },
  {
   "name": "Susan Debbs",
   "gender": "Female",
   "team": "ACE",
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
   "leagueRank": 291,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "753dcbff-f1a6-4fb1-97bf-2f76e08df8b9"
  },
  {
   "name": "Eli Joseph",
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
   "leagueRank": 300,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "cd755ee1-a5fd-452a-b4c9-6e406bdcd1ef"
  },
  {
   "name": "Sushil Rijhwani",
   "gender": "Male",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 82,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "8fea334f-ad12-4c45-b67d-a127ec551f4e",
   "winPct": 0,
   "diff": -23,
   "ppg": 16.4,
   "leagueRank": 265,
   "rating": -2.8,
   "ratingGames": 5,
   "confidence": 53,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.1
  },
  {
   "name": "Cathy Proctor",
   "gender": "Female",
   "team": "Stelton Sports",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 94,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "cb02b0c7-7df6-481e-aeb2-5f945a9522bc",
   "winPct": 0,
   "diff": -32,
   "ppg": 15.7,
   "leagueRank": 269,
   "rating": -2.2,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.5
  },
  {
   "name": "Anthony Wands",
   "gender": "Male",
   "team": "Stelton Sports",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 89,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "1762a9ad-6493-4407-a0ce-de2de697c313",
   "winPct": 0,
   "diff": -37,
   "ppg": 14.8,
   "leagueRank": 273,
   "rating": -2.4,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.8
  },
  {
   "name": "Cristina Gil",
   "gender": "Female",
   "team": "Stelton Sports",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 66,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "503d7e15-e083-476a-b97c-51b6f3fe28f9",
   "winPct": 0,
   "diff": -39,
   "ppg": 13.2,
   "leagueRank": 278,
   "rating": -2.5,
   "ratingGames": 5,
   "confidence": 51,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 1
  },
  {
   "name": "Carolyn Dardani-Horensky",
   "gender": "Female",
   "team": "Pickleball Kingdom Hamilton",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 0,
   "losses": 7,
   "pointsWon": 99,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "6acb77b2-e82c-4de7-b333-89fbe85c9997",
   "winPct": 0,
   "diff": -48,
   "ppg": 14.1,
   "leagueRank": 276,
   "rating": -2.1,
   "ratingGames": 7,
   "confidence": 59,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 1.9
  },
  {
   "name": "Amy Maussner",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 0,
   "losses": 8,
   "pointsWon": 116,
   "totalPointsAgainst": 168,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "8b17c8d0-5ea7-44ee-9a80-7e3c246c92d3",
   "winPct": 0,
   "diff": -52,
   "ppg": 14.5,
   "leagueRank": 274,
   "rating": 0.3,
   "ratingGames": 8,
   "confidence": 65,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 2.8
  },
  {
   "name": "Julia Hollman",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 0,
   "losses": 8,
   "pointsWon": 112,
   "totalPointsAgainst": 168,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 0,
   "diff": -56,
   "ppg": 14,
   "leagueRank": 275,
   "rating": -1.9,
   "ratingGames": 8,
   "confidence": 62,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 1.6,
   "playerId": "ab244dd7-ca2a-4e68-befd-b60c8fbad96f"
  },
  {
   "name": "Ezra Chen",
   "gender": "Male",
   "team": "Home Court",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 0,
   "losses": 7,
   "pointsWon": 85,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "d53e0fad-a64c-40cb-b79d-0b03bd5a3051",
   "winPct": 0,
   "diff": -62,
   "ppg": 12.1,
   "leagueRank": 279,
   "rating": -1.9,
   "ratingGames": 7,
   "confidence": 58,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 2.6
  },
  {
   "name": "Christine Cardinal",
   "gender": "Female",
   "team": "ACE",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 0,
   "losses": 8,
   "pointsWon": 103,
   "totalPointsAgainst": 168,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "025d7701-550f-4828-9e24-d9718f998f22",
   "winPct": 0,
   "diff": -65,
   "ppg": 12.9,
   "leagueRank": 277,
   "rating": -1.7,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 3.5
  },
  {
   "name": "Marianne Contessa",
   "gender": "Female",
   "team": "Monroe",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 0,
   "losses": 8,
   "pointsWon": 98,
   "totalPointsAgainst": 168,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "8196ea93-e9b4-4bf6-8b62-c6a25fc84363",
   "winPct": 0,
   "diff": -70,
   "ppg": 12.3,
   "leagueRank": 280,
   "rating": -2.1,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 2.8
  },
  {
   "name": "Samir Fahmy",
   "gender": "Male",
   "team": "Montville",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 0,
   "losses": 8,
   "pointsWon": 94,
   "totalPointsAgainst": 168,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "676e5ffb-371d-49ad-9431-3cdb2407a0eb",
   "winPct": 0,
   "diff": -74,
   "ppg": 11.8,
   "leagueRank": 281,
   "rating": -3,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 2.4
  },
  {
   "name": "Golda Steier",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 0,
   "losses": 11,
   "pointsWon": 152,
   "totalPointsAgainst": 231,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 8,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -79,
   "ppg": 13.8,
   "leagueRank": 272,
   "rating": -1.1,
   "ratingGames": 11,
   "confidence": 69,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 2.3,
   "playerId": "a2752756-2869-4830-8ca6-705e62931def"
  },
  {
   "name": "Trish Hicks",
   "gender": "Female",
   "team": "Stelton Sports",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 0,
   "losses": 8,
   "pointsWon": 82,
   "totalPointsAgainst": 168,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "b92b79f9-8291-4706-99ea-30a1b1e42e95",
   "winPct": 0,
   "diff": -86,
   "ppg": 10.3,
   "leagueRank": 282,
   "rating": -2.7,
   "ratingGames": 8,
   "confidence": 64,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 3.3
  }
 ],
 "teams": [
  {
   "name": "ACE",
   "w": 12,
   "l": 0,
   "pf": 7196,
   "pa": 5671,
   "gw": 278,
   "gl": 74,
   "diff": 1525,
   "gameDiff": 204,
   "power": 2.3,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     137,
     39
    ],
    "male": [
     78,
     10
    ],
    "female": [
     63,
     25
    ]
   }
  },
  {
   "name": "Pickleball Palace",
   "w": 11,
   "l": 1,
   "pf": 7386,
   "pa": 6555,
   "gw": 255,
   "gl": 129,
   "diff": 831,
   "gameDiff": 126,
   "power": 1.2,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     123,
     69
    ],
    "male": [
     57,
     39
    ],
    "female": [
     75,
     21
    ]
   }
  },
  {
   "name": "Bounce Malvern",
   "w": 10,
   "l": 2,
   "pf": 7544,
   "pa": 5844,
   "gw": 303,
   "gl": 81,
   "diff": 1700,
   "gameDiff": 222,
   "power": 2.3,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     150,
     42
    ],
    "male": [
     70,
     26
    ],
    "female": [
     83,
     13
    ]
   }
  },
  {
   "name": "Jersey Pickleball Club",
   "w": 10,
   "l": 2,
   "pf": 7232,
   "pa": 6949,
   "gw": 222,
   "gl": 162,
   "diff": 283,
   "gameDiff": 60,
   "power": 0.6,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     104,
     88
    ],
    "male": [
     59,
     37
    ],
    "female": [
     59,
     37
    ]
   }
  },
  {
   "name": "Pickleball Kingdom Hillsborough",
   "w": 6,
   "l": 6,
   "pf": 6450,
   "pa": 6623,
   "gw": 170,
   "gl": 214,
   "diff": -173,
   "gameDiff": -44,
   "power": 0,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     83,
     109
    ],
    "male": [
     59,
     37
    ],
    "female": [
     28,
     68
    ]
   }
  },
  {
   "name": "Pickleball Kingdom Hamilton",
   "w": 6,
   "l": 6,
   "pf": 6964,
   "pa": 7386,
   "gw": 169,
   "gl": 215,
   "diff": -422,
   "gameDiff": -46,
   "power": 0.2,
   "powerRank": 4,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     93,
     99
    ],
    "male": [
     27,
     69
    ],
    "female": [
     49,
     47
    ]
   }
  },
  {
   "name": "Flemington",
   "w": 4,
   "l": 8,
   "pf": 7096,
   "pa": 7389,
   "gw": 174,
   "gl": 210,
   "diff": -293,
   "gameDiff": -36,
   "power": 0.3,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     90,
     102
    ],
    "male": [
     33,
     63
    ],
    "female": [
     51,
     45
    ]
   }
  },
  {
   "name": "Montville",
   "w": 4,
   "l": 8,
   "pf": 6876,
   "pa": 7570,
   "gw": 143,
   "gl": 241,
   "diff": -694,
   "gameDiff": -98,
   "power": -0.4,
   "powerRank": 5,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     73,
     119
    ],
    "male": [
     38,
     58
    ],
    "female": [
     32,
     64
    ]
   }
  },
  {
   "name": "Stelton Sports",
   "w": 3,
   "l": 9,
   "pf": 6914,
   "pa": 7472,
   "gw": 152,
   "gl": 232,
   "diff": -558,
   "gameDiff": -80,
   "power": -0.4,
   "powerRank": 6,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     82,
     110
    ],
    "male": [
     30,
     66
    ],
    "female": [
     40,
     56
    ]
   }
  },
  {
   "name": "Home Court",
   "w": 2,
   "l": 10,
   "pf": 7055,
   "pa": 7369,
   "gw": 165,
   "gl": 219,
   "diff": -314,
   "gameDiff": -54,
   "power": 0,
   "powerRank": 4,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     84,
     108
    ],
    "male": [
     38,
     58
    ],
    "female": [
     43,
     53
    ]
   }
  },
  {
   "name": "Monroe",
   "w": 2,
   "l": 10,
   "pf": 6170,
   "pa": 7054,
   "gw": 118,
   "gl": 234,
   "diff": -884,
   "gameDiff": -116,
   "power": -0.4,
   "powerRank": 5,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     63,
     113
    ],
    "male": [
     41,
     47
    ],
    "female": [
     14,
     74
    ]
   }
  },
  {
   "name": "APC Garden State",
   "w": 2,
   "l": 10,
   "pf": 6692,
   "pa": 7693,
   "gw": 123,
   "gl": 261,
   "diff": -1001,
   "gameDiff": -138,
   "power": -0.5,
   "powerRank": 6,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     54,
     138
    ],
    "male": [
     38,
     58
    ],
    "female": [
     31,
     65
    ]
   }
  }
 ],
 "duos": [
  {
   "a": "Michael Dombrowiecki",
   "b": "Lance Brown",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 3.1,
   "avgActual": 6,
   "avgExpected": -0.2,
   "aId": "3ac34ef1-17a5-4ab6-8d17-be4bd5a0a040",
   "bId": "5d13288d-69fe-4d0b-bf69-51c1d24e3409"
  },
  {
   "a": "Laura Elleman",
   "b": "Amanda Quinn",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 3,
   "avgActual": 9,
   "avgExpected": 2,
   "aId": "3e6056c2-7c5b-4123-b457-ffcf82d3b422",
   "bId": "f1248cc3-96c3-4671-9b08-533d22eb710f"
  },
  {
   "a": "Sarah Flynn",
   "b": "Erik Lombardo",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 2.6,
   "avgActual": 3,
   "avgExpected": -3.2,
   "aId": "29b01229-f7ed-4692-bdb4-32926b8a7cc5",
   "bId": "834f3d3e-bde3-4b30-af4c-d1eadb344dfd"
  },
  {
   "a": "Yi Gu",
   "b": "Hayley Yandoli",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 2.6,
   "avgActual": 4,
   "avgExpected": -2.1,
   "aId": "0640ecce-0b14-4eac-9cbd-be86592d6102",
   "bId": "1fc2dd51-135b-46d6-91ef-9291b573e78a"
  },
  {
   "a": "Carol Mastroianni",
   "b": "Christine Papa",
   "team": "Flemington",
   "n": 7,
   "w": 7,
   "l": 0,
   "synergy": 2.6,
   "avgActual": 4.7,
   "avgExpected": 0.7,
   "aId": "7f851011-9322-43f9-aff2-754565a615c7",
   "bId": "d156a552-7fa9-488e-9bfa-745feb859950"
  },
  {
   "a": "Abraham Telechanski",
   "b": "Kerry Shannon",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 2.5,
   "avgActual": 6.8,
   "avgExpected": 2.4,
   "aId": "e022118e-9373-4e2a-94f6-391f4fb84a54",
   "bId": "e61c60c8-6141-4d98-af74-740d4d849655"
  },
  {
   "a": "Jennifer Qian",
   "b": "Shaoyi Sun",
   "team": "Stelton Sports",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": 2.4,
   "avgActual": 1.3,
   "avgExpected": -2.3,
   "aId": "902a9e2d-2ac4-4d19-9ae7-e945ece1da00",
   "bId": "fb20f45d-7f81-4d2a-a258-eede4cdec27b"
  },
  {
   "a": "Andrea Smith",
   "b": "Sandeep Malhotra",
   "team": "Home Court",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.4,
   "avgActual": 7,
   "avgExpected": 1.4,
   "aId": "1318bc01-f23f-47da-94cb-ac71b8f3e694",
   "bId": "c24596e0-9eeb-4195-b1ff-d4ca3e418d84"
  },
  {
   "a": "Kevin Sheehan",
   "b": "Liang Chao",
   "team": "Montville",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 2.4,
   "avgActual": 6,
   "avgExpected": 1.3,
   "aId": "115f3958-d110-41f0-a04c-aa2f8e17a54f",
   "bId": "34ae5ecc-b6b2-44a4-b0a6-b8e59437a32c"
  },
  {
   "a": "Alex Lee",
   "b": "Johnson Chang",
   "team": "Pickleball Palace",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 2.4,
   "avgActual": 8.4,
   "avgExpected": 4.1,
   "aId": "22e2201d-16d7-4474-847b-5f4f0cef44e6",
   "bId": "6994f1c2-d156-436a-bbb6-e9e348bea33a"
  },
  {
   "a": "Rui Zhang",
   "b": "Jim Peng",
   "team": "Stelton Sports",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 2.3,
   "avgActual": 3.1,
   "avgExpected": -0.4,
   "aId": "c218d668-b78a-4726-b2df-fe7730a50963",
   "bId": "eddc4924-517f-46ac-9827-935983daa9db"
  },
  {
   "a": "Oliveira Karen",
   "b": "Liangjie Zhu",
   "team": "Montville",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 2.3,
   "avgActual": 7.5,
   "avgExpected": 3.7,
   "aId": "80b535f7-a6f6-4905-90ae-69c8695f99be",
   "bId": "972856ec-207d-4f89-9d97-6fda7c0e083b"
  },
  {
   "a": "Sarah Mcparland",
   "b": "Anita Bobba",
   "team": "Home Court",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.3,
   "avgActual": 10,
   "avgExpected": 4.6,
   "aId": "958e8cb9-1c97-4932-b495-29c28578a123",
   "bId": "abc68487-3415-49a2-bdfb-dd56eb5af20d"
  },
  {
   "a": "Dint Moore",
   "b": "Marc Padre",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 2.2,
   "avgActual": 3.3,
   "avgExpected": -1.1,
   "aId": "53e6f48d-1702-4121-9bae-8809c365e5c6",
   "bId": "a131a707-f20e-4838-9dcf-7cecb40c2705"
  },
  {
   "a": "Meryl Nadler",
   "b": "Darren Saks",
   "team": "Jersey Pickleball Club",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 2.2,
   "avgActual": 6.2,
   "avgExpected": 2.2,
   "aId": "90987b97-d181-4c15-9c7c-e0bebff4e9b0",
   "bId": "9bf7b8ab-4dfa-442b-be12-77580a5ea1dc"
  },
  {
   "a": "Jamie Sandman",
   "b": "Leon Li",
   "team": "Pickleball Kingdom Hamilton",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 2.1,
   "avgActual": 2.4,
   "avgExpected": -1.3,
   "aId": "33ab547b-ef45-48f8-baa6-be7ad9e29b67",
   "bId": "528de93e-9cf4-480d-a9ba-5b20f6f23f87"
  },
  {
   "a": "Natasha De Carvalho",
   "b": "Alice Napolitano",
   "team": "Jersey Pickleball Club",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 2.1,
   "avgActual": 5.4,
   "avgExpected": 1.6,
   "aId": "462f3a15-22ed-4fa3-b698-78678a5d6966",
   "bId": "d56483b8-a5b8-4c1f-8437-39fcf90a5030"
  },
  {
   "a": "Marc Harden",
   "b": "Kate Siedell",
   "team": "ACE",
   "n": 12,
   "w": 12,
   "l": 0,
   "synergy": 2.1,
   "avgActual": 11.6,
   "avgExpected": 8.8,
   "aId": "55194d2f-f537-4e19-b901-86c559f25ef2",
   "bId": "8decf039-f1e5-4182-b3cf-6756789ae87a"
  },
  {
   "a": "Laura Elleman",
   "b": "Kelly Hanson Word",
   "team": "Pickleball Palace",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 2.1,
   "avgActual": 8.4,
   "avgExpected": 4.5,
   "aId": "3e6056c2-7c5b-4123-b457-ffcf82d3b422",
   "bId": "ecfbb129-ba7d-4b52-92b9-869fa7487248"
  },
  {
   "a": "Richard Demeuse",
   "b": "Brett Dellavolpe",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.1,
   "avgActual": 7.3,
   "avgExpected": 2.5,
   "aId": "d88f1d1e-be4e-449e-b9b2-c468753e1dd3",
   "bId": "f3ff50d8-e345-4cae-865b-92d4767d6749"
  },
  {
   "a": "Steven Gregov",
   "b": "Bob Castellano",
   "team": "Flemington",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 2,
   "avgActual": -2.6,
   "avgExpected": -6.3,
   "aId": "3efad314-83fb-4441-a7bf-510228cea1f8",
   "bId": "7bb24154-bd52-4081-a3e6-0b8afcde62d5"
  },
  {
   "a": "Fabienne Yu",
   "b": "Yaowen Li",
   "team": "Pickleball Kingdom Hamilton",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 2,
   "avgActual": 6.3,
   "avgExpected": 3.1,
   "aId": "943ac52a-070f-4bdc-baf8-efe14d0f40ea",
   "bId": "b0747e45-3190-47d6-97ef-8bb041bf0ba8"
  },
  {
   "a": "Hayley Yandoli",
   "b": "Guy Ohn",
   "team": "Monroe",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 2,
   "avgActual": 4.2,
   "avgExpected": 0.7,
   "aId": "1fc2dd51-135b-46d6-91ef-9291b573e78a",
   "bId": "f394b637-236e-4fee-b26f-374c90c3dd1e"
  },
  {
   "a": "Eva Danieli",
   "b": "Andrew Hyman",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 2,
   "avgActual": 5.5,
   "avgExpected": 1.5,
   "aId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae",
   "bId": "dbda3e07-6332-4467-bdf0-be18b2686573"
  },
  {
   "a": "Michael Dieterle",
   "b": "Michael Finkelstein",
   "team": "Bounce Malvern",
   "n": 6,
   "w": 6,
   "l": 0,
   "synergy": 1.9,
   "avgActual": 6.2,
   "avgExpected": 3,
   "aId": "4259501c-f1e3-4859-acd0-c25f342a1b92",
   "bId": "861c3f68-2c96-4a96-a75e-645020f73a5c"
  },
  {
   "a": "Brad Oldham",
   "b": "Joe Palumbo",
   "team": "Jersey Pickleball Club",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 1.9,
   "avgActual": 2.8,
   "avgExpected": -0.3,
   "aId": "965b56ee-6fb4-4bd1-9708-8ced2c5dd9a2",
   "bId": "b39664c3-1a6e-4493-968f-6e7f7939f694"
  },
  {
   "a": "Margaret Weidlich",
   "b": "Kajal Sinkar",
   "team": "Home Court",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.9,
   "avgActual": 5,
   "avgExpected": 0.5,
   "aId": "7021e97f-1e5e-4adb-ac80-1a9c919caba6",
   "bId": "9d7f6585-d5f4-44fa-a4f9-24737a072f72"
  },
  {
   "a": "Scott Rubin",
   "b": "Christine Papa",
   "team": "Flemington",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.9,
   "avgActual": 2.3,
   "avgExpected": -1.6,
   "aId": "c12175df-b959-4efe-95e7-e5298b783da8",
   "bId": "d156a552-7fa9-488e-9bfa-745feb859950"
  },
  {
   "a": "Naresh Malhotra",
   "b": "Eliezer Mintz",
   "team": "Monroe",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.9,
   "avgActual": 4.3,
   "avgExpected": 0.5,
   "aId": "732686cf-d4c9-4a45-a966-451f07bd3115",
   "bId": "832fb271-fb5e-43aa-b442-95c03fb78342"
  },
  {
   "a": "Lance Stopek",
   "b": "Howie Steiner",
   "team": "APC Garden State",
   "n": 13,
   "w": 9,
   "l": 4,
   "synergy": 1.9,
   "avgActual": 1.5,
   "avgExpected": -1,
   "aId": "3a249058-9862-4d27-9562-c73c5a685d96",
   "bId": "5f8dc611-79bf-404d-99fc-f3ea9178d8f0"
  },
  {
   "a": "Liangjie Zhu",
   "b": "Chris Taormina",
   "team": "Montville",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.9,
   "avgActual": 6.3,
   "avgExpected": 1.8,
   "aId": "972856ec-207d-4f89-9d97-6fda7c0e083b",
   "bId": "fd4a1329-b94d-4a30-aef4-8e3482909441"
  },
  {
   "a": "Art Muth",
   "b": "Sue Johnson",
   "team": "Flemington",
   "n": 11,
   "w": 6,
   "l": 5,
   "synergy": 1.8,
   "avgActual": -0.5,
   "avgExpected": -3,
   "aId": "6bfc3a49-53cb-4c03-b8cb-94552158ccbe",
   "bId": "c6046610-1dba-4bad-bc89-57e5baa0983f"
  },
  {
   "a": "Barbara Hess",
   "b": "David Osborne",
   "team": "Flemington",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.8,
   "avgActual": 3,
   "avgExpected": -0.6,
   "aId": "21baa2cb-e882-442e-a5e0-a6d88126c9c3",
   "bId": "418e7ba5-3e06-40ec-9b83-19d3bf10c9cb"
  },
  {
   "a": "Liangang Liu",
   "b": "Lucy Li",
   "team": "Stelton Sports",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.8,
   "avgActual": 6.3,
   "avgExpected": 2.1,
   "aId": "34618d40-6e62-4ab3-aa28-fc61c9ac1920",
   "bId": "d22f8b69-76a6-41e0-8b04-c5dae68d9f69"
  },
  {
   "a": "Yi Gu",
   "b": "Paula Cushing",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.7,
   "avgActual": -4.3,
   "avgExpected": -8.4,
   "aId": "0640ecce-0b14-4eac-9cbd-be86592d6102",
   "bId": "f8a42c6f-43b2-4769-b0ed-a1d648353e04"
  },
  {
   "a": "Jennifer Burke",
   "b": "John Burke",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.7,
   "avgActual": 2.8,
   "avgExpected": -0.7,
   "aId": "18bcc459-8067-4650-ad73-3183fae3ea1f",
   "bId": "31e2f010-7d86-4706-a172-d0936f4421f0"
  },
  {
   "a": "Brad Oldham",
   "b": "Darren Saks",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.7,
   "avgActual": 5,
   "avgExpected": 1.7,
   "aId": "965b56ee-6fb4-4bd1-9708-8ced2c5dd9a2",
   "bId": "9bf7b8ab-4dfa-442b-be12-77580a5ea1dc"
  },
  {
   "a": "Surbhi Sabharwal",
   "b": "Ronnie Yin",
   "team": "Montville",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.7,
   "avgActual": 3,
   "avgExpected": -1,
   "aId": "6ff2d1f1-1ffd-4140-820d-b2333c370dcd",
   "bId": "988636eb-4604-44d6-af70-2732b787ec2a"
  },
  {
   "a": "Kristen Silvestri",
   "b": "Ronnie Yin",
   "team": "Montville",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 1.7,
   "avgActual": 1.7,
   "avgExpected": -0.9,
   "aId": "035a8041-2b2d-4050-a71d-9a8e7fb1b5e6",
   "bId": "988636eb-4604-44d6-af70-2732b787ec2a"
  },
  {
   "a": "Steven Gregov",
   "b": "Denise Richmond",
   "team": "Flemington",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.7,
   "avgActual": -0.3,
   "avgExpected": -4.3,
   "aId": "3efad314-83fb-4441-a7bf-510228cea1f8",
   "bId": "422cd941-43db-4123-a07e-3316583f51ee"
  },
  {
   "a": "Jeff Lorman",
   "b": "Elyse Diamond",
   "team": "ACE",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 1.6,
   "avgActual": 4,
   "avgExpected": 1.5,
   "aId": "75789bbc-0dde-460e-b905-7bd1189c6a90",
   "bId": "a0c9637b-5b23-4797-a46a-d2df7bb0fae9"
  },
  {
   "a": "Naresh Malhotra",
   "b": "Tracey Collins",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.6,
   "avgActual": 2,
   "avgExpected": -1.7,
   "aId": "732686cf-d4c9-4a45-a966-451f07bd3115",
   "bId": "f01a9ccb-b72e-4980-bdc0-73ed5a72f92c"
  },
  {
   "a": "Michael Swell",
   "b": "Eva Danieli",
   "team": "Jersey Pickleball Club",
   "n": 9,
   "w": 8,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 3.8,
   "avgExpected": 1.6,
   "aId": "5436acd1-542a-4ca5-a652-c0addcf23ea2",
   "bId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae"
  },
  {
   "a": "Pam Boyd",
   "b": "Sandy Alkins",
   "team": "ACE",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 6.3,
   "avgExpected": 3.2,
   "aId": "04aefa29-20e3-41b7-a680-19d13f9d4289",
   "bId": "9c29c52b-9d2a-4a5f-b967-7bafd018446b"
  },
  {
   "a": "Amy Chrebet",
   "b": "Eva Danieli",
   "team": "Jersey Pickleball Club",
   "n": 8,
   "w": 7,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 4.1,
   "avgExpected": 1.9,
   "aId": "6f511e98-567a-4b33-8831-ed123f01f952",
   "bId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae"
  },
  {
   "a": "Charlie Johnston",
   "b": "John Burke",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.5,
   "avgActual": 2.8,
   "avgExpected": -0.3,
   "aId": "1bad49ab-f2b8-439b-9e4b-3ff3cb8ca325",
   "bId": "31e2f010-7d86-4706-a172-d0936f4421f0"
  },
  {
   "a": "Oliveira Karen",
   "b": "Jeffrey Heil",
   "team": "Montville",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.5,
   "avgActual": 5,
   "avgExpected": 1.6,
   "aId": "80b535f7-a6f6-4905-90ae-69c8695f99be",
   "bId": "d44c4151-84f7-4ec8-9e48-420a627107fd"
  },
  {
   "a": "Marc Padre",
   "b": "Richard Abate",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 3.2,
   "avgExpected": 0.6,
   "aId": "a131a707-f20e-4838-9dcf-7cecb40c2705",
   "bId": "a18c309a-f364-4ae6-b06a-7faf4e1c525d"
  },
  {
   "a": "Raneeta Sawhney-Rigby",
   "b": "Marc Padre",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 5,
   "avgExpected": 1.6,
   "aId": "8ee2191e-34c1-4f6b-b366-5a1bbc5bcb36",
   "bId": "a131a707-f20e-4838-9dcf-7cecb40c2705"
  },
  {
   "a": "Vicki Main",
   "b": "Harriet Levin",
   "team": "Bounce Malvern",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 1.4,
   "avgActual": 6.6,
   "avgExpected": 4.3,
   "aId": "89bdcff6-2fba-4bde-b831-872bf9ce7843",
   "bId": "aeff8297-a479-4b3b-9a49-72c410ac8e26"
  },
  {
   "a": "Kate Curren",
   "b": "Kelly Hanson Word",
   "team": "Pickleball Palace",
   "n": 8,
   "w": 8,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 10,
   "avgExpected": 7.9,
   "aId": "20e006d9-72f9-4f9e-bad5-750694224782",
   "bId": "ecfbb129-ba7d-4b52-92b9-869fa7487248"
  },
  {
   "a": "Pam Boyd",
   "b": "Stacey Frank",
   "team": "ACE",
   "n": 11,
   "w": 8,
   "l": 3,
   "synergy": 1.4,
   "avgActual": 5.3,
   "avgExpected": 3.4,
   "aId": "04aefa29-20e3-41b7-a680-19d13f9d4289",
   "bId": "768c88bd-683d-4204-8124-a589c8028b6e"
  },
  {
   "a": "David Osborne",
   "b": "Eric Luque",
   "team": "Flemington",
   "n": 11,
   "w": 10,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 2.3,
   "avgExpected": 0.3,
   "aId": "418e7ba5-3e06-40ec-9b83-19d3bf10c9cb",
   "bId": "b3c28078-ab31-4002-9e09-5fa3f627d8c1"
  },
  {
   "a": "Natasha De Carvalho",
   "b": "Rosalyn Goldsmith",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 1.3,
   "avgExpected": -1.9,
   "aId": "462f3a15-22ed-4fa3-b698-78678a5d6966",
   "bId": "545c12c3-3098-47ca-b35e-429f37f481f5"
  },
  {
   "a": "Denise Richmond",
   "b": "Scott Rubin",
   "team": "Flemington",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 3.3,
   "avgExpected": 0.5,
   "aId": "422cd941-43db-4123-a07e-3316583f51ee",
   "bId": "c12175df-b959-4efe-95e7-e5298b783da8"
  },
  {
   "a": "Scott Rubin",
   "b": "Marc Friedman",
   "team": "Flemington",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 0,
   "avgExpected": -3.4,
   "aId": "c12175df-b959-4efe-95e7-e5298b783da8",
   "bId": "d7bdde76-1007-4b20-a804-4efcd08c3598"
  },
  {
   "a": "Derek Le",
   "b": "Katherine Maruyama",
   "team": "Bounce Malvern",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 6.3,
   "avgExpected": 4.1,
   "aId": "8cf7b40c-ed2c-4c8b-83bd-b9f2d486c690",
   "bId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a"
  },
  {
   "a": "Richard Abate",
   "b": "Richard Demeuse",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 1.4,
   "avgActual": 4,
   "avgExpected": 1.6,
   "aId": "a18c309a-f364-4ae6-b06a-7faf4e1c525d",
   "bId": "d88f1d1e-be4e-449e-b9b2-c468753e1dd3"
  },
  {
   "a": "Pam Boyd",
   "b": "Kelly Karrer",
   "team": "ACE",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 8.7,
   "avgExpected": 5.5,
   "aId": "04aefa29-20e3-41b7-a680-19d13f9d4289",
   "bId": "8fb35aa1-9d99-4c72-9d67-73e7a074b016"
  },
  {
   "a": "Suzanne \"Zan\" Davies",
   "b": "Mei Li",
   "team": "Stelton Sports",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.4,
   "avgActual": 0.8,
   "avgExpected": -2,
   "aId": "25b25938-9a27-4d08-97c1-6db7a6b7ff24",
   "bId": "28330003-3125-4050-be9a-ddd726dccfe2"
  },
  {
   "a": "Leon Li",
   "b": "Stacy Garretson",
   "team": "Pickleball Kingdom Hamilton",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 1.3,
   "avgActual": 3.8,
   "avgExpected": 1.5,
   "aId": "528de93e-9cf4-480d-a9ba-5b20f6f23f87",
   "bId": "85dd9a28-a510-493a-bfe4-9cc7d3550ff2"
  },
  {
   "a": "Jean Wang",
   "b": "Frank Ding",
   "team": "Pickleball Kingdom Hamilton",
   "n": 13,
   "w": 10,
   "l": 3,
   "synergy": 1.3,
   "avgActual": 4.5,
   "avgExpected": 2.8,
   "aId": "1188fc00-7ef5-4671-9ef9-2c7d162a2604",
   "bId": "f83efefa-b8dd-49c2-90a1-9baa1e03315b"
  },
  {
   "a": "Lily Liu",
   "b": "Fabienne Yu",
   "team": "Pickleball Kingdom Hamilton",
   "n": 8,
   "w": 7,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 4,
   "avgExpected": 2.1,
   "aId": "91f78b3d-a1b7-44a8-a804-6035152bf1a2",
   "bId": "943ac52a-070f-4bdc-baf8-efe14d0f40ea"
  },
  {
   "a": "Tara Lombardo",
   "b": "Guy Ohn",
   "team": "Monroe",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 1.3,
   "avgActual": 2,
   "avgExpected": -0.3,
   "aId": "77d20dd0-823c-474e-b470-12f69db5a588",
   "bId": "f394b637-236e-4fee-b26f-374c90c3dd1e"
  },
  {
   "a": "Jim Darcangelo",
   "b": "Michael Dieterle",
   "team": "Bounce Malvern",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 4,
   "avgExpected": 1.8,
   "aId": "0530512b-466d-4ff7-9e89-7961b4a63110",
   "bId": "4259501c-f1e3-4859-acd0-c25f342a1b92"
  },
  {
   "a": "Keith Goldberg",
   "b": "Dana Luscombe",
   "team": "Bounce Malvern",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 9,
   "avgExpected": 6.9,
   "aId": "37a0fa2c-df0b-4d92-900b-a9f20f441ad8",
   "bId": "be6e11f7-09a1-4b1c-af3d-a052b3c36b7f"
  },
  {
   "a": "Pam Friedman",
   "b": "Darren Saks",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.3,
   "avgActual": 4.5,
   "avgExpected": 1.8,
   "aId": "94d51b2d-359c-450c-b1c8-728944462b01",
   "bId": "9bf7b8ab-4dfa-442b-be12-77580a5ea1dc"
  },
  {
   "a": "Eric Luque",
   "b": "Aimee Castellano",
   "team": "Flemington",
   "n": 13,
   "w": 10,
   "l": 3,
   "synergy": 1.3,
   "avgActual": 2.5,
   "avgExpected": 0.9,
   "aId": "b3c28078-ab31-4002-9e09-5fa3f627d8c1",
   "bId": "e76985fb-efd1-4180-a340-e4f36abbc8b4"
  },
  {
   "a": "Robert Finley",
   "b": "Marc Pellicane",
   "team": "ACE",
   "n": 6,
   "w": 6,
   "l": 0,
   "synergy": 1.3,
   "avgActual": 7.5,
   "avgExpected": 5.3,
   "aId": "0d70122a-9002-461f-8600-a9afed2e8c3f",
   "bId": "1c13f01f-aeb7-45db-9faf-a6567d22bb81"
  },
  {
   "a": "Naresh Malhotra",
   "b": "Santhosh Pillai",
   "team": "Monroe",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 1.3,
   "avgActual": -0.2,
   "avgExpected": -2.4,
   "aId": "732686cf-d4c9-4a45-a966-451f07bd3115",
   "bId": "7d25c9f9-c478-402a-9139-cc8781686a8e"
  },
  {
   "a": "Andrea Mui",
   "b": "Guy Ohn",
   "team": "Monroe",
   "n": 9,
   "w": 5,
   "l": 4,
   "synergy": 1.3,
   "avgActual": 1.9,
   "avgExpected": 0,
   "aId": "7a1f2b24-7109-4933-9428-c8fef6eb8348",
   "bId": "f394b637-236e-4fee-b26f-374c90c3dd1e"
  },
  {
   "a": "Yang Wang",
   "b": "Howie Steiner",
   "team": "APC Garden State",
   "n": 11,
   "w": 8,
   "l": 3,
   "synergy": 1.3,
   "avgActual": 2.6,
   "avgExpected": 0.8,
   "aId": "389300d9-75bf-4c93-9fbc-cab6881f49b4",
   "bId": "5f8dc611-79bf-404d-99fc-f3ea9178d8f0"
  },
  {
   "a": "Amy Johnson",
   "b": "Marc Friedman",
   "team": "Flemington",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.3,
   "avgActual": 0.8,
   "avgExpected": -1.8,
   "aId": "74e493de-dca7-4bf2-b9ac-630484282502",
   "bId": "d7bdde76-1007-4b20-a804-4efcd08c3598"
  },
  {
   "a": "Meryl Nadler",
   "b": "Alice Napolitano",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.3,
   "avgActual": 5.3,
   "avgExpected": 2.6,
   "aId": "90987b97-d181-4c15-9c7c-e0bebff4e9b0",
   "bId": "d56483b8-a5b8-4c1f-8437-39fcf90a5030"
  },
  {
   "a": "Marc Pellicane",
   "b": "Sang Nguyen",
   "team": "ACE",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.3,
   "avgActual": 7.3,
   "avgExpected": 4.3,
   "aId": "1c13f01f-aeb7-45db-9faf-a6567d22bb81",
   "bId": "cbdf396a-6766-42d5-8fdb-d8011cbcace8"
  },
  {
   "a": "Ayten Mayer",
   "b": "Ivona Reszka",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 1.3,
   "avgActual": -2,
   "avgExpected": -4.4,
   "aId": "8072e25c-4788-48b5-a440-0d4403f89f4f",
   "bId": "a06e906c-dd36-4585-b03a-48a49b915662"
  },
  {
   "a": "Susan M Fett",
   "b": "Robert Huntley",
   "team": "Home Court",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.3,
   "avgActual": 5.7,
   "avgExpected": 2.6,
   "aId": "91857142-d537-4b98-bbc2-481129371949",
   "bId": "b5dec967-9e3a-49b4-b136-597711d099cc"
  },
  {
   "a": "Sarah Mcparland",
   "b": "Sharon Streit",
   "team": "Home Court",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 1.3,
   "avgExpected": -1.8,
   "aId": "958e8cb9-1c97-4932-b495-29c28578a123",
   "bId": "9f9e5b25-d385-4c12-adb3-233c612619c4"
  },
  {
   "a": "Nicole Nelson",
   "b": "Richard Abate",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 1.7,
   "avgExpected": -1.3,
   "aId": "2e2b7732-48a3-4102-86f9-555111fa9ae8",
   "bId": "a18c309a-f364-4ae6-b06a-7faf4e1c525d"
  },
  {
   "a": "Ann Betterton",
   "b": "Lucy Li",
   "team": "Stelton Sports",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 5,
   "avgExpected": 2.4,
   "aId": "abe02688-e77f-414b-9747-25f3bdc149c7",
   "bId": "d22f8b69-76a6-41e0-8b04-c5dae68d9f69"
  },
  {
   "a": "Raneeta Sawhney-Rigby",
   "b": "Abraham Telechanski",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.3,
   "avgActual": 7.3,
   "avgExpected": 4.4,
   "aId": "8ee2191e-34c1-4f6b-b366-5a1bbc5bcb36",
   "bId": "e022118e-9373-4e2a-94f6-391f4fb84a54"
  },
  {
   "a": "Fabienne Yu",
   "b": "Albert Pamudji",
   "team": "Pickleball Kingdom Hamilton",
   "n": 15,
   "w": 9,
   "l": 6,
   "synergy": 1.2,
   "avgActual": 0.5,
   "avgExpected": -0.9,
   "aId": "943ac52a-070f-4bdc-baf8-efe14d0f40ea",
   "bId": "f8c55797-409c-4cf0-a2d5-241ec95f60b2"
  },
  {
   "a": "Vicki Main",
   "b": "Dana Luscombe",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 9,
   "avgExpected": 6.3,
   "aId": "89bdcff6-2fba-4bde-b831-872bf9ce7843",
   "bId": "be6e11f7-09a1-4b1c-af3d-a052b3c36b7f"
  },
  {
   "a": "Keith Goldberg",
   "b": "Harriet Levin",
   "team": "Bounce Malvern",
   "n": 10,
   "w": 10,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 7.5,
   "avgExpected": 5.8,
   "aId": "37a0fa2c-df0b-4d92-900b-a9f20f441ad8",
   "bId": "aeff8297-a479-4b3b-9a49-72c410ac8e26"
  },
  {
   "a": "Andrea Dellechiaie",
   "b": "Rick Vazquez",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 4.3,
   "avgExpected": 1.5,
   "aId": "84e4d40d-3b98-4822-b073-e9dc71c0d4d7",
   "bId": "e532dafb-ff0f-43fc-82be-687d34ab8c14"
  },
  {
   "a": "Brad Daddis",
   "b": "Elyse Diamond",
   "team": "ACE",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 1.2,
   "avgActual": 3.8,
   "avgExpected": 1.7,
   "aId": "3b22e073-2c4b-4245-a142-29441ec509a3",
   "bId": "a0c9637b-5b23-4797-a46a-d2df7bb0fae9"
  },
  {
   "a": "Tera Baccile",
   "b": "Stephanie Woomer",
   "team": "Bounce Malvern",
   "n": 11,
   "w": 11,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 8.4,
   "avgExpected": 6.8,
   "aId": "d5aa92c7-71df-47c7-84fb-6710e1ed81e2",
   "bId": "e05f57f5-c898-404e-b86f-c2460cc23b06"
  },
  {
   "a": "Lance Stopek",
   "b": "Laurence Emerson",
   "team": "APC Garden State",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": 1.2,
   "avgActual": -2.6,
   "avgExpected": -4.7,
   "aId": "3a249058-9862-4d27-9562-c73c5a685d96",
   "bId": "d1d8de9c-d716-4531-8f30-70742305ac46"
  },
  {
   "a": "Brandon Fulford",
   "b": "Liangjie Zhu",
   "team": "Montville",
   "n": 6,
   "w": 6,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 3.3,
   "avgExpected": 1.4,
   "aId": "906383cd-e781-48bc-9004-0fc5427c7e62",
   "bId": "972856ec-207d-4f89-9d97-6fda7c0e083b"
  },
  {
   "a": "Kristen Silvestri",
   "b": "Amanda Brouillard",
   "team": "Montville",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 0,
   "avgExpected": -2.8,
   "aId": "035a8041-2b2d-4050-a71d-9a8e7fb1b5e6",
   "bId": "2b29199f-62de-4125-a014-dd9f9e612cb1"
  },
  {
   "a": "Tara Lombardo",
   "b": "Tracey Collins",
   "team": "Monroe",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 1.2,
   "avgActual": -3,
   "avgExpected": -5.3,
   "aId": "77d20dd0-823c-474e-b470-12f69db5a588",
   "bId": "f01a9ccb-b72e-4980-bdc0-73ed5a72f92c"
  },
  {
   "a": "Kelly Hanson Word",
   "b": "Jeffrey Susskind",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 9.7,
   "avgExpected": 6.9,
   "aId": "ecfbb129-ba7d-4b52-92b9-869fa7487248",
   "bId": "fd8d97f4-ff3e-46e2-aa8f-e5408a6a9e9c"
  },
  {
   "a": "Lori Flickinger",
   "b": "Laurence Emerson",
   "team": "APC Garden State",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 1.2,
   "avgActual": -4.2,
   "avgExpected": -6.7,
   "aId": "7be2e586-5d71-40e2-b708-c862448e40da",
   "bId": "d1d8de9c-d716-4531-8f30-70742305ac46"
  },
  {
   "a": "James Shaw",
   "b": "Sang Nguyen",
   "team": "ACE",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 5,
   "avgExpected": 2.1,
   "aId": "439e30a7-6097-4e20-8a7b-25c57dd5b5d0",
   "bId": "cbdf396a-6766-42d5-8fdb-d8011cbcace8"
  },
  {
   "a": "Carol Mastroianni",
   "b": "Scott Rubin",
   "team": "Flemington",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 1.3,
   "avgExpected": -1.4,
   "aId": "7f851011-9322-43f9-aff2-754565a615c7",
   "bId": "c12175df-b959-4efe-95e7-e5298b783da8"
  },
  {
   "a": "Steven Gregov",
   "b": "Tara Kramer",
   "team": "Flemington",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 1,
   "avgExpected": -1.8,
   "aId": "3efad314-83fb-4441-a7bf-510228cea1f8",
   "bId": "dae62b8e-5f8e-4721-8f41-3218518d1e30"
  },
  {
   "a": "Jack Brod",
   "b": "Leon Li",
   "team": "Pickleball Kingdom Hamilton",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": 1.1,
   "avgActual": -1.6,
   "avgExpected": -3.3,
   "aId": "015b5d91-0510-4901-9180-a9f68d22a421",
   "bId": "528de93e-9cf4-480d-a9ba-5b20f6f23f87"
  },
  {
   "a": "Sam Zhou",
   "b": "Jim Peng",
   "team": "Stelton Sports",
   "n": 10,
   "w": 4,
   "l": 6,
   "synergy": 1.1,
   "avgActual": -1.3,
   "avgExpected": -2.8,
   "aId": "dcc4f317-c0ad-4878-8540-d8aa3aa53d8a",
   "bId": "eddc4924-517f-46ac-9827-935983daa9db"
  },
  {
   "a": "Sarah Mcparland",
   "b": "Robert Huntley",
   "team": "Home Court",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 1.1,
   "avgActual": 2.3,
   "avgExpected": 0.5,
   "aId": "958e8cb9-1c97-4932-b495-29c28578a123",
   "bId": "b5dec967-9e3a-49b4-b136-597711d099cc"
  },
  {
   "a": "Jiyun Yuh",
   "b": "Vita Mulholland",
   "team": "APC Garden State",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 0.7,
   "avgExpected": -2,
   "aId": "c94ae231-9f0c-4212-b769-7bd708d8fc38",
   "bId": "fe0555e5-2ec9-4dc2-a44b-4017d5afbb41"
  },
  {
   "a": "Tom Maley",
   "b": "Frank Ding",
   "team": "Pickleball Kingdom Hamilton",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.1,
   "avgActual": 2.3,
   "avgExpected": 0,
   "aId": "e05f8bd0-e64b-42dd-b6a0-42249573b3f4",
   "bId": "f83efefa-b8dd-49c2-90a1-9baa1e03315b"
  },
  {
   "a": "Mei Li",
   "b": "Lei Dong",
   "team": "Stelton Sports",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 2.6,
   "avgExpected": 0.7,
   "aId": "28330003-3125-4050-be9a-ddd726dccfe2",
   "bId": "f9ac936e-7371-4ea9-8a97-7969635046fd"
  },
  {
   "a": "Sharon Streit",
   "b": "Sandeep Malhotra",
   "team": "Home Court",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.1,
   "avgActual": -0.7,
   "avgExpected": -3.3,
   "aId": "9f9e5b25-d385-4c12-adb3-233c612619c4",
   "bId": "c24596e0-9eeb-4195-b1ff-d4ca3e418d84"
  },
  {
   "a": "Evelyn Du",
   "b": "Amanda Brouillard",
   "team": "Montville",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.1,
   "avgActual": -0.2,
   "avgExpected": -2.5,
   "aId": "08547f36-c938-4f82-a783-9c89ab07500c",
   "bId": "2b29199f-62de-4125-a014-dd9f9e612cb1"
  },
  {
   "a": "Vicki Main",
   "b": "Katherine Maruyama",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1,
   "avgActual": 9,
   "avgExpected": 6.6,
   "aId": "89bdcff6-2fba-4bde-b831-872bf9ce7843",
   "bId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a"
  },
  {
   "a": "Michael Finkelstein",
   "b": "Katherine Maruyama",
   "team": "Bounce Malvern",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 1,
   "avgActual": 4.5,
   "avgExpected": 2.9,
   "aId": "861c3f68-2c96-4a96-a75e-645020f73a5c",
   "bId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a"
  },
  {
   "a": "Rick Vazquez",
   "b": "Brian Gonzalez",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1,
   "avgActual": 4,
   "avgExpected": 1.7,
   "aId": "e532dafb-ff0f-43fc-82be-687d34ab8c14",
   "bId": "ecc02ab8-5e9c-4950-89b7-be3f397683c3"
  },
  {
   "a": "Kristen Silvestri",
   "b": "Liang Chao",
   "team": "Montville",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1,
   "avgActual": -0.5,
   "avgExpected": -2.5,
   "aId": "035a8041-2b2d-4050-a71d-9a8e7fb1b5e6",
   "bId": "34ae5ecc-b6b2-44a4-b0a6-b8e59437a32c"
  },
  {
   "a": "Bob Castellano",
   "b": "Aimee Castellano",
   "team": "Flemington",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": 1,
   "avgActual": -0.1,
   "avgExpected": -1.7,
   "aId": "7bb24154-bd52-4081-a3e6-0b8afcde62d5",
   "bId": "e76985fb-efd1-4180-a340-e4f36abbc8b4"
  },
  {
   "a": "Pam Boyd",
   "b": "Susan Perry",
   "team": "ACE",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1,
   "avgActual": 3.5,
   "avgExpected": 1.5,
   "aId": "04aefa29-20e3-41b7-a680-19d13f9d4289",
   "bId": "757d136f-a9ac-432e-a582-3769f40d0b2d"
  },
  {
   "a": "Brian Rowan",
   "b": "Ed Hutchinson",
   "team": "ACE",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1,
   "avgActual": 9,
   "avgExpected": 7,
   "aId": "136b6979-e0f4-4af2-9f5e-949b8d4bf423",
   "bId": "ab2b30c5-ffb3-4863-b7a2-af2272f13452"
  },
  {
   "a": "Marc Friedman",
   "b": "Aimee Castellano",
   "team": "Flemington",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1,
   "avgActual": 1,
   "avgExpected": -1.3,
   "aId": "d7bdde76-1007-4b20-a804-4efcd08c3598",
   "bId": "e76985fb-efd1-4180-a340-e4f36abbc8b4"
  },
  {
   "a": "Margaret Weidlich",
   "b": "Michael Vincent",
   "team": "Home Court",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1,
   "avgActual": 1.3,
   "avgExpected": -0.9,
   "aId": "7021e97f-1e5e-4adb-ac80-1a9c919caba6",
   "bId": "7f44421c-476c-4857-99ed-3376b32289ca"
  },
  {
   "a": "Karan Pescatore",
   "b": "Robert Huntley",
   "team": "Home Court",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1,
   "avgActual": 4.6,
   "avgExpected": 2.7,
   "aId": "2cb4b2dd-d14b-4bab-a8be-ef4b14845711",
   "bId": "b5dec967-9e3a-49b4-b136-597711d099cc"
  },
  {
   "a": "Emil Pescatore",
   "b": "George Mandl",
   "team": "Home Court",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1,
   "avgActual": 2.2,
   "avgExpected": 0.3,
   "aId": "1c9b7abf-dae6-4e0d-a31d-485e99a01fec",
   "bId": "a0019103-8887-4a15-bbe0-d1c35cdd7b0d"
  },
  {
   "a": "Kajal Sinkar",
   "b": "Christine Chwe",
   "team": "Home Court",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1,
   "avgActual": 5,
   "avgExpected": 2.6,
   "aId": "9d7f6585-d5f4-44fa-a4f9-24737a072f72",
   "bId": "fedc1fc4-c949-46e7-b435-5c343ba66635"
  },
  {
   "a": "Liz Cuozzo",
   "b": "Brad Oldham",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1,
   "avgActual": 3.7,
   "avgExpected": 1.3,
   "aId": "2b2d474d-281c-42d7-854b-6bfe32f20563",
   "bId": "965b56ee-6fb4-4bd1-9708-8ced2c5dd9a2"
  },
  {
   "a": "Rebecca Lederman",
   "b": "Kelly Hanson Word",
   "team": "Pickleball Palace",
   "n": 8,
   "w": 7,
   "l": 1,
   "synergy": 1,
   "avgActual": 7.8,
   "avgExpected": 6.2,
   "aId": "cb324481-3d73-47c2-9cc0-a1e1650dd87f",
   "bId": "ecfbb129-ba7d-4b52-92b9-869fa7487248"
  },
  {
   "a": "Tim Ahn",
   "b": "Erik Lombardo",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.9,
   "avgActual": -1.7,
   "avgExpected": -3.7,
   "aId": "54431f9b-4785-4c4d-bdf9-94baf6da6a52",
   "bId": "834f3d3e-bde3-4b30-af4c-d1eadb344dfd"
  },
  {
   "a": "Dana Luscombe",
   "b": "Stephanie Woomer",
   "team": "Bounce Malvern",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 9,
   "avgExpected": 7.4,
   "aId": "be6e11f7-09a1-4b1c-af3d-a052b3c36b7f",
   "bId": "e05f57f5-c898-404e-b86f-c2460cc23b06"
  },
  {
   "a": "Emil Pescatore",
   "b": "Sarah Mcparland",
   "team": "Home Court",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": 0.9,
   "avgActual": 0.8,
   "avgExpected": -0.6,
   "aId": "1c9b7abf-dae6-4e0d-a31d-485e99a01fec",
   "bId": "958e8cb9-1c97-4932-b495-29c28578a123"
  },
  {
   "a": "Brian Rowan",
   "b": "Kate Siedell",
   "team": "ACE",
   "n": 8,
   "w": 8,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 6,
   "avgExpected": 4.7,
   "aId": "136b6979-e0f4-4af2-9f5e-949b8d4bf423",
   "bId": "8decf039-f1e5-4182-b3cf-6756789ae87a"
  },
  {
   "a": "Robert Finley",
   "b": "Roger Graterol",
   "team": "ACE",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 2.3,
   "avgExpected": 0.2,
   "aId": "0d70122a-9002-461f-8600-a9afed2e8c3f",
   "bId": "23262a95-4498-4ca1-87a9-713c02337168"
  },
  {
   "a": "Zhe Ding",
   "b": "Yaowen Li",
   "team": "Pickleball Kingdom Hamilton",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 1,
   "avgExpected": -1.1,
   "aId": "71b536a9-d6d0-46f0-9427-97f761e6bce7",
   "bId": "b0747e45-3190-47d6-97ef-8bb041bf0ba8"
  },
  {
   "a": "Emil Pescatore",
   "b": "Liby Saigal",
   "team": "Home Court",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 5.3,
   "avgExpected": 3.4,
   "aId": "1c9b7abf-dae6-4e0d-a31d-485e99a01fec",
   "bId": "dc2026ad-428a-4822-ae40-889727c35b10"
  },
  {
   "a": "Alex Lee",
   "b": "Jeffrey Susskind",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 6.5,
   "avgExpected": 4.6,
   "aId": "22e2201d-16d7-4474-847b-5f4f0cef44e6",
   "bId": "fd8d97f4-ff3e-46e2-aa8f-e5408a6a9e9c"
  },
  {
   "a": "Michele Dabal",
   "b": "Ronnie Yin",
   "team": "Montville",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 0.3,
   "avgExpected": -1.7,
   "aId": "6dd6742b-80cc-45b6-b5df-2eed3b7f00a1",
   "bId": "988636eb-4604-44d6-af70-2732b787ec2a"
  },
  {
   "a": "Michael Dombrowiecki",
   "b": "Amy Chrebet",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 3,
   "avgExpected": 1,
   "aId": "3ac34ef1-17a5-4ab6-8d17-be4bd5a0a040",
   "bId": "6f511e98-567a-4b33-8831-ed123f01f952"
  },
  {
   "a": "Suzanne \"Zan\" Davies",
   "b": "Jim Peng",
   "team": "Stelton Sports",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.9,
   "avgActual": 0,
   "avgExpected": -1.9,
   "aId": "25b25938-9a27-4d08-97c1-6db7a6b7ff24",
   "bId": "eddc4924-517f-46ac-9827-935983daa9db"
  },
  {
   "a": "Jack Brod",
   "b": "Stacy Garretson",
   "team": "Pickleball Kingdom Hamilton",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.9,
   "avgActual": 0,
   "avgExpected": -1.6,
   "aId": "015b5d91-0510-4901-9180-a9f68d22a421",
   "bId": "85dd9a28-a510-493a-bfe4-9cc7d3550ff2"
  },
  {
   "a": "Jill Lesnik",
   "b": "Bud Heller",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 2.3,
   "avgExpected": 0.3,
   "aId": "340fe4f1-f3ed-4fb1-9ba3-74752ee1d864",
   "bId": "9282b1b2-6551-481c-b9b8-2a246a49a621"
  },
  {
   "a": "Liz Cuozzo",
   "b": "Amy Chrebet",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.9,
   "avgActual": -0.2,
   "avgExpected": -2,
   "aId": "2b2d474d-281c-42d7-854b-6bfe32f20563",
   "bId": "6f511e98-567a-4b33-8831-ed123f01f952"
  },
  {
   "a": "Evelyn Du",
   "b": "Wendy Zukerberg",
   "team": "Montville",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.9,
   "avgActual": 2,
   "avgExpected": -0.2,
   "aId": "08547f36-c938-4f82-a783-9c89ab07500c",
   "bId": "f34665bd-6866-415f-a498-21d7f69fb895"
  },
  {
   "a": "Jamie Sandman",
   "b": "Stacy Garretson",
   "team": "Pickleball Kingdom Hamilton",
   "n": 15,
   "w": 10,
   "l": 5,
   "synergy": 0.8,
   "avgActual": 0.8,
   "avgExpected": -0.2,
   "aId": "33ab547b-ef45-48f8-baa6-be7ad9e29b67",
   "bId": "85dd9a28-a510-493a-bfe4-9cc7d3550ff2"
  },
  {
   "a": "Kate Curren",
   "b": "Andrea Dellechiaie",
   "team": "Pickleball Palace",
   "n": 10,
   "w": 10,
   "l": 0,
   "synergy": 0.8,
   "avgActual": 7.6,
   "avgExpected": 6.5,
   "aId": "20e006d9-72f9-4f9e-bad5-750694224782",
   "bId": "84e4d40d-3b98-4822-b073-e9dc71c0d4d7"
  },
  {
   "a": "Sarah Mcparland",
   "b": "Christine Chwe",
   "team": "Home Court",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.8,
   "avgActual": 2.2,
   "avgExpected": 0.8,
   "aId": "958e8cb9-1c97-4932-b495-29c28578a123",
   "bId": "fedc1fc4-c949-46e7-b435-5c343ba66635"
  },
  {
   "a": "Michael Swell",
   "b": "Brad Oldham",
   "team": "Jersey Pickleball Club",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 0.8,
   "avgActual": 3.6,
   "avgExpected": 2.4,
   "aId": "5436acd1-542a-4ca5-a652-c0addcf23ea2",
   "bId": "965b56ee-6fb4-4bd1-9708-8ced2c5dd9a2"
  },
  {
   "a": "Lance Brown",
   "b": "Meryl Nadler",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 2.7,
   "avgExpected": 0.7,
   "aId": "5d13288d-69fe-4d0b-bf69-51c1d24e3409",
   "bId": "90987b97-d181-4c15-9c7c-e0bebff4e9b0"
  },
  {
   "a": "Kristen Silvestri",
   "b": "Louis Vessichelli",
   "team": "Montville",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.8,
   "avgActual": -0.2,
   "avgExpected": -1.5,
   "aId": "035a8041-2b2d-4050-a71d-9a8e7fb1b5e6",
   "bId": "cb8c8404-c482-4fe5-bd01-35b348fccfd4"
  },
  {
   "a": "Amy Chrebet",
   "b": "Brad Oldham",
   "team": "Jersey Pickleball Club",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.8,
   "avgActual": 0.7,
   "avgExpected": -0.6,
   "aId": "6f511e98-567a-4b33-8831-ed123f01f952",
   "bId": "965b56ee-6fb4-4bd1-9708-8ced2c5dd9a2"
  },
  {
   "a": "Vicki Main",
   "b": "Derek Le",
   "team": "Bounce Malvern",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 0.8,
   "avgActual": 2.6,
   "avgExpected": 1.2,
   "aId": "89bdcff6-2fba-4bde-b831-872bf9ce7843",
   "bId": "8cf7b40c-ed2c-4c8b-83bd-b9f2d486c690"
  },
  {
   "a": "Michael Dieterle",
   "b": "Tera Baccile",
   "team": "Bounce Malvern",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 6.3,
   "avgExpected": 5.1,
   "aId": "4259501c-f1e3-4859-acd0-c25f342a1b92",
   "bId": "d5aa92c7-71df-47c7-84fb-6710e1ed81e2"
  },
  {
   "a": "Natasha De Carvalho",
   "b": "Andrew Hyman",
   "team": "Jersey Pickleball Club",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 0.8,
   "avgExpected": -0.7,
   "aId": "462f3a15-22ed-4fa3-b698-78678a5d6966",
   "bId": "dbda3e07-6332-4467-bdf0-be18b2686573"
  },
  {
   "a": "James Shaw",
   "b": "Stacey Frank",
   "team": "ACE",
   "n": 9,
   "w": 7,
   "l": 2,
   "synergy": 0.8,
   "avgActual": 6.7,
   "avgExpected": 5.5,
   "aId": "439e30a7-6097-4e20-8a7b-25c57dd5b5d0",
   "bId": "768c88bd-683d-4204-8124-a589c8028b6e"
  },
  {
   "a": "Cynthia Covie",
   "b": "Vita Mulholland",
   "team": "APC Garden State",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.8,
   "avgActual": 0,
   "avgExpected": -1.3,
   "aId": "b146d15b-2ed7-4087-a6a0-90d4538aea72",
   "bId": "fe0555e5-2ec9-4dc2-a44b-4017d5afbb41"
  },
  {
   "a": "Tracey Collins",
   "b": "Guy Ohn",
   "team": "Monroe",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.8,
   "avgActual": 2,
   "avgExpected": 0.7,
   "aId": "f01a9ccb-b72e-4980-bdc0-73ed5a72f92c",
   "bId": "f394b637-236e-4fee-b26f-374c90c3dd1e"
  },
  {
   "a": "Pam Boyd",
   "b": "Sang Nguyen",
   "team": "ACE",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 3.8,
   "avgExpected": 2.2,
   "aId": "04aefa29-20e3-41b7-a680-19d13f9d4289",
   "bId": "cbdf396a-6766-42d5-8fdb-d8011cbcace8"
  },
  {
   "a": "Howie Steiner",
   "b": "Bennett Shanker",
   "team": "APC Garden State",
   "n": 10,
   "w": 6,
   "l": 4,
   "synergy": 0.8,
   "avgActual": 1.8,
   "avgExpected": 0.7,
   "aId": "5f8dc611-79bf-404d-99fc-f3ea9178d8f0",
   "bId": "a86dc96c-b346-460c-a94c-df0551d5027a"
  },
  {
   "a": "Sharon Streit",
   "b": "Robert Huntley",
   "team": "Home Court",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.8,
   "avgActual": -1,
   "avgExpected": -2.8,
   "aId": "9f9e5b25-d385-4c12-adb3-233c612619c4",
   "bId": "b5dec967-9e3a-49b4-b136-597711d099cc"
  },
  {
   "a": "Kamala Gangavalli",
   "b": "Abraham Telechanski",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.8,
   "avgActual": 4.8,
   "avgExpected": 3.2,
   "aId": "26297bb5-23ec-465a-b348-de2b64b6a939",
   "bId": "e022118e-9373-4e2a-94f6-391f4fb84a54"
  },
  {
   "a": "Susan St. Pierre",
   "b": "Marc Padre",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 2.8,
   "avgExpected": 1.1,
   "aId": "001c2d38-829b-4fd0-b249-472f78337387",
   "bId": "a131a707-f20e-4838-9dcf-7cecb40c2705"
  },
  {
   "a": "Marc Pellicane",
   "b": "Ed Hutchinson",
   "team": "ACE",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.8,
   "avgActual": 8.3,
   "avgExpected": 6.4,
   "aId": "1c13f01f-aeb7-45db-9faf-a6567d22bb81",
   "bId": "ab2b30c5-ffb3-4863-b7a2-af2272f13452"
  },
  {
   "a": "Stacy Garretson",
   "b": "Ted Lee",
   "team": "Pickleball Kingdom Hamilton",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 1.3,
   "avgExpected": -0.1,
   "aId": "85dd9a28-a510-493a-bfe4-9cc7d3550ff2",
   "bId": "f6d91a04-e692-4905-96a6-968175585586"
  },
  {
   "a": "Bud Heller",
   "b": "Brian Gonzalez",
   "team": "Pickleball Palace",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": 0.7,
   "avgActual": 2.4,
   "avgExpected": 1.3,
   "aId": "9282b1b2-6551-481c-b9b8-2a246a49a621",
   "bId": "ecc02ab8-5e9c-4950-89b7-be3f397683c3"
  },
  {
   "a": "Carly Pfeffer",
   "b": "Andrea Dellechiaie",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 6.7,
   "avgExpected": 5,
   "aId": "387e74d4-66ee-4a52-a4ac-aae3dbe1d21b",
   "bId": "84e4d40d-3b98-4822-b073-e9dc71c0d4d7"
  },
  {
   "a": "Michael Swell",
   "b": "Alice Napolitano",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 5.8,
   "avgExpected": 4.5,
   "aId": "5436acd1-542a-4ca5-a652-c0addcf23ea2",
   "bId": "d56483b8-a5b8-4c1f-8437-39fcf90a5030"
  },
  {
   "a": "Margaret Weidlich",
   "b": "Sandeep Malhotra",
   "team": "Home Court",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.7,
   "avgActual": -0.2,
   "avgExpected": -1.5,
   "aId": "7021e97f-1e5e-4adb-ac80-1a9c919caba6",
   "bId": "c24596e0-9eeb-4195-b1ff-d4ca3e418d84"
  },
  {
   "a": "Michael Dombrowiecki",
   "b": "Michael Swell",
   "team": "Jersey Pickleball Club",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 0.7,
   "avgActual": 4.7,
   "avgExpected": 3.6,
   "aId": "3ac34ef1-17a5-4ab6-8d17-be4bd5a0a040",
   "bId": "5436acd1-542a-4ca5-a652-c0addcf23ea2"
  },
  {
   "a": "Evelyn Du",
   "b": "Andre Yang",
   "team": "Montville",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.7,
   "avgActual": -0.3,
   "avgExpected": -1.4,
   "aId": "08547f36-c938-4f82-a783-9c89ab07500c",
   "bId": "b9cede07-396d-42c4-84f3-c0e66ecb8f71"
  },
  {
   "a": "Liangang Liu",
   "b": "Jennifer Qian",
   "team": "Stelton Sports",
   "n": 17,
   "w": 9,
   "l": 8,
   "synergy": 0.7,
   "avgActual": 0.6,
   "avgExpected": -0.3,
   "aId": "34618d40-6e62-4ab3-aa28-fc61c9ac1920",
   "bId": "902a9e2d-2ac4-4d19-9ae7-e945ece1da00"
  },
  {
   "a": "Marc Pellicane",
   "b": "Marc Harden",
   "team": "ACE",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 9,
   "avgExpected": 7.5,
   "aId": "1c13f01f-aeb7-45db-9faf-a6567d22bb81",
   "bId": "55194d2f-f537-4e19-b901-86c559f25ef2"
  },
  {
   "a": "Kate Siedell",
   "b": "Sandy Alkins",
   "team": "ACE",
   "n": 7,
   "w": 7,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 7.1,
   "avgExpected": 6.1,
   "aId": "8decf039-f1e5-4182-b3cf-6756789ae87a",
   "bId": "9c29c52b-9d2a-4a5f-b967-7bafd018446b"
  },
  {
   "a": "Robert Finley",
   "b": "Marc Harden",
   "team": "ACE",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 7.3,
   "avgExpected": 5.8,
   "aId": "0d70122a-9002-461f-8600-a9afed2e8c3f",
   "bId": "55194d2f-f537-4e19-b901-86c559f25ef2"
  },
  {
   "a": "Sinitra Siengsanaoh",
   "b": "Kelly Hanson Word",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 3.8,
   "avgExpected": 2.4,
   "aId": "bd5e1a4c-a9d5-4683-a74e-90c0df2d84cd",
   "bId": "ecfbb129-ba7d-4b52-92b9-869fa7487248"
  },
  {
   "a": "Ali Fordyce",
   "b": "Richard Demeuse",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 4,
   "avgExpected": 2.4,
   "aId": "9e2cc278-7356-491f-b853-945e33a988d2",
   "bId": "d88f1d1e-be4e-449e-b9b2-c468753e1dd3"
  },
  {
   "a": "Ali Fordyce",
   "b": "Marc Padre",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 2.7,
   "avgExpected": 1.1,
   "aId": "9e2cc278-7356-491f-b853-945e33a988d2",
   "bId": "a131a707-f20e-4838-9dcf-7cecb40c2705"
  },
  {
   "a": "Kamala Gangavalli",
   "b": "Richard Demeuse",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 5.3,
   "avgExpected": 3.7,
   "aId": "26297bb5-23ec-465a-b348-de2b64b6a939",
   "bId": "d88f1d1e-be4e-449e-b9b2-c468753e1dd3"
  },
  {
   "a": "Sara Wiggert",
   "b": "Abraham Telechanski",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 0.7,
   "avgActual": 0.4,
   "avgExpected": -0.7,
   "aId": "6cf82c92-fdfb-46bc-bad1-beec6ab96691",
   "bId": "e022118e-9373-4e2a-94f6-391f4fb84a54"
  },
  {
   "a": "Lara Webb",
   "b": "Jiyun Yuh",
   "team": "APC Garden State",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": 0.6,
   "avgActual": -4.3,
   "avgExpected": -5.3,
   "aId": "096a6a65-5d60-461f-91ed-d2eafbd7dd76",
   "bId": "c94ae231-9f0c-4212-b769-7bd708d8fc38"
  },
  {
   "a": "Brian Caine",
   "b": "Darin Morgan",
   "team": "APC Garden State",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": 0.6,
   "avgActual": -2.4,
   "avgExpected": -3.5,
   "aId": "7d0e32ca-3e4e-455f-968c-f5d427efeacb",
   "bId": "dd2e7522-5de0-4018-b8f2-f0e332bff293"
  },
  {
   "a": "Jiyun Yuh",
   "b": "Darin Morgan",
   "team": "APC Garden State",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 0.6,
   "avgActual": -3,
   "avgExpected": -3.9,
   "aId": "c94ae231-9f0c-4212-b769-7bd708d8fc38",
   "bId": "dd2e7522-5de0-4018-b8f2-f0e332bff293"
  },
  {
   "a": "Jack Brod",
   "b": "Wally Liu",
   "team": "Pickleball Kingdom Hamilton",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.6,
   "avgActual": -2.7,
   "avgExpected": -4,
   "aId": "015b5d91-0510-4901-9180-a9f68d22a421",
   "bId": "0a36460a-ac00-4501-8a7f-9b217bfbddc7"
  },
  {
   "a": "Hayley Yandoli",
   "b": "Sarah Flynn",
   "team": "Monroe",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.6,
   "avgActual": -1.5,
   "avgExpected": -2.7,
   "aId": "1fc2dd51-135b-46d6-91ef-9291b573e78a",
   "bId": "29b01229-f7ed-4692-bdb4-32926b8a7cc5"
  },
  {
   "a": "Natasha De Carvalho",
   "b": "Pam Friedman",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 2.5,
   "avgExpected": 1.3,
   "aId": "462f3a15-22ed-4fa3-b698-78678a5d6966",
   "bId": "94d51b2d-359c-450c-b1c8-728944462b01"
  },
  {
   "a": "Liangang Liu",
   "b": "Ann Betterton",
   "team": "Stelton Sports",
   "n": 14,
   "w": 7,
   "l": 7,
   "synergy": 0.6,
   "avgActual": 0.5,
   "avgExpected": -0.3,
   "aId": "34618d40-6e62-4ab3-aa28-fc61c9ac1920",
   "bId": "abe02688-e77f-414b-9747-25f3bdc149c7"
  },
  {
   "a": "Stacey Frank",
   "b": "Elyse Diamond",
   "team": "ACE",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.6,
   "avgActual": 2.3,
   "avgExpected": 1.4,
   "aId": "768c88bd-683d-4204-8124-a589c8028b6e",
   "bId": "a0c9637b-5b23-4797-a46a-d2df7bb0fae9"
  },
  {
   "a": "Stacey Frank",
   "b": "Ed Hutchinson",
   "team": "ACE",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.6,
   "avgActual": 7,
   "avgExpected": 5.6,
   "aId": "768c88bd-683d-4204-8124-a589c8028b6e",
   "bId": "ab2b30c5-ffb3-4863-b7a2-af2272f13452"
  },
  {
   "a": "Barbara Hess",
   "b": "Eric Luque",
   "team": "Flemington",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.6,
   "avgActual": 1.5,
   "avgExpected": 0.5,
   "aId": "21baa2cb-e882-442e-a5e0-a6d88126c9c3",
   "bId": "b3c28078-ab31-4002-9e09-5fa3f627d8c1"
  },
  {
   "a": "Barbara Hess",
   "b": "Aimee Castellano",
   "team": "Flemington",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 0.6,
   "avgActual": 1.6,
   "avgExpected": 0.7,
   "aId": "21baa2cb-e882-442e-a5e0-a6d88126c9c3",
   "bId": "e76985fb-efd1-4180-a340-e4f36abbc8b4"
  },
  {
   "a": "Susan Ackley",
   "b": "Aimee Castellano",
   "team": "Flemington",
   "n": 8,
   "w": 8,
   "l": 0,
   "synergy": 0.6,
   "avgActual": 8.5,
   "avgExpected": 7.6,
   "aId": "07a0e948-6308-4920-a6a8-1d5945552ecb",
   "bId": "e76985fb-efd1-4180-a340-e4f36abbc8b4"
  },
  {
   "a": "Lei Dong",
   "b": "Shaoyi Sun",
   "team": "Stelton Sports",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": 0.6,
   "avgActual": -2.4,
   "avgExpected": -3.4,
   "aId": "f9ac936e-7371-4ea9-8a97-7969635046fd",
   "bId": "fb20f45d-7f81-4d2a-a258-eede4cdec27b"
  },
  {
   "a": "Mark Lim",
   "b": "Michael Vincent",
   "team": "Home Court",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.6,
   "avgActual": -2.7,
   "avgExpected": -4.1,
   "aId": "2d3c137a-6e03-4cfe-bce1-945d60358b5b",
   "bId": "7f44421c-476c-4857-99ed-3376b32289ca"
  },
  {
   "a": "Mark Lim",
   "b": "Robert Huntley",
   "team": "Home Court",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.6,
   "avgActual": -1.5,
   "avgExpected": -2.8,
   "aId": "2d3c137a-6e03-4cfe-bce1-945d60358b5b",
   "bId": "b5dec967-9e3a-49b4-b136-597711d099cc"
  },
  {
   "a": "Alex Lee",
   "b": "Carly Pfeffer",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.6,
   "avgActual": 5.3,
   "avgExpected": 3.8,
   "aId": "22e2201d-16d7-4474-847b-5f4f0cef44e6",
   "bId": "387e74d4-66ee-4a52-a4ac-aae3dbe1d21b"
  },
  {
   "a": "Vicki Main",
   "b": "Tera Baccile",
   "team": "Bounce Malvern",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 4.1,
   "avgExpected": 3.3,
   "aId": "89bdcff6-2fba-4bde-b831-872bf9ce7843",
   "bId": "d5aa92c7-71df-47c7-84fb-6710e1ed81e2"
  },
  {
   "a": "Yi Gu",
   "b": "Eliezer Mintz",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 0.7,
   "avgExpected": -0.8,
   "aId": "0640ecce-0b14-4eac-9cbd-be86592d6102",
   "bId": "832fb271-fb5e-43aa-b442-95c03fb78342"
  },
  {
   "a": "Rick Derose",
   "b": "Vita Mulholland",
   "team": "APC Garden State",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.6,
   "avgActual": -1.2,
   "avgExpected": -2.5,
   "aId": "823fc9d2-d052-423c-87a9-bd601b54a414",
   "bId": "fe0555e5-2ec9-4dc2-a44b-4017d5afbb41"
  },
  {
   "a": "Lara Webb",
   "b": "Daniel Mellul",
   "team": "APC Garden State",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.6,
   "avgActual": -0.7,
   "avgExpected": -1.9,
   "aId": "096a6a65-5d60-461f-91ed-d2eafbd7dd76",
   "bId": "5dccd915-178e-4316-8e9b-e0a3db8edfa9"
  },
  {
   "a": "Tara Lombardo",
   "b": "Andrea Mui",
   "team": "Monroe",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": 0.6,
   "avgActual": -3.2,
   "avgExpected": -4.2,
   "aId": "77d20dd0-823c-474e-b470-12f69db5a588",
   "bId": "7a1f2b24-7109-4933-9428-c8fef6eb8348"
  },
  {
   "a": "Michael Vincent",
   "b": "Sandeep Malhotra",
   "team": "Home Court",
   "n": 8,
   "w": 3,
   "l": 5,
   "synergy": 0.6,
   "avgActual": -0.1,
   "avgExpected": -1,
   "aId": "7f44421c-476c-4857-99ed-3376b32289ca",
   "bId": "c24596e0-9eeb-4195-b1ff-d4ca3e418d84"
  },
  {
   "a": "Zhe Ding",
   "b": "Albert Pamudji",
   "team": "Pickleball Kingdom Hamilton",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": 0.6,
   "avgActual": -3.8,
   "avgExpected": -4.8,
   "aId": "71b536a9-d6d0-46f0-9427-97f761e6bce7",
   "bId": "f8c55797-409c-4cf0-a2d5-241ec95f60b2"
  },
  {
   "a": "Barbara Hess",
   "b": "Art Muth",
   "team": "Flemington",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 1.3,
   "avgExpected": -0.2,
   "aId": "21baa2cb-e882-442e-a5e0-a6d88126c9c3",
   "bId": "6bfc3a49-53cb-4c03-b8cb-94552158ccbe"
  },
  {
   "a": "Susan St. Pierre",
   "b": "Jennifer Qian",
   "team": "Stelton Sports",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 1.5,
   "avgExpected": 0.4,
   "aId": "001c2d38-829b-4fd0-b249-472f78337387",
   "bId": "902a9e2d-2ac4-4d19-9ae7-e945ece1da00"
  },
  {
   "a": "Yang Wang",
   "b": "Laura Sweet",
   "team": "APC Garden State",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 0.6,
   "avgActual": 1.3,
   "avgExpected": 0.3,
   "aId": "389300d9-75bf-4c93-9fbc-cab6881f49b4",
   "bId": "7b7b29be-c4b7-4ca9-8fd9-77ec362e761b"
  },
  {
   "a": "Alex Lee",
   "b": "Rebecca Lederman",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.6,
   "avgActual": 5.3,
   "avgExpected": 4,
   "aId": "22e2201d-16d7-4474-847b-5f4f0cef44e6",
   "bId": "cb324481-3d73-47c2-9cc0-a1e1650dd87f"
  },
  {
   "a": "Yang Wang",
   "b": "Bennett Shanker",
   "team": "APC Garden State",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 1.3,
   "avgExpected": 0.2,
   "aId": "389300d9-75bf-4c93-9fbc-cab6881f49b4",
   "bId": "a86dc96c-b346-460c-a94c-df0551d5027a"
  },
  {
   "a": "Wally Liu",
   "b": "Lily Liu",
   "team": "Pickleball Kingdom Hamilton",
   "n": 13,
   "w": 8,
   "l": 5,
   "synergy": 0.5,
   "avgActual": -0.5,
   "avgExpected": -1.1,
   "aId": "0a36460a-ac00-4501-8a7f-9b217bfbddc7",
   "bId": "91f78b3d-a1b7-44a8-a804-6035152bf1a2"
  },
  {
   "a": "Dint Moore",
   "b": "Abraham Telechanski",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.5,
   "avgActual": 0.8,
   "avgExpected": 0,
   "aId": "53e6f48d-1702-4121-9bae-8809c365e5c6",
   "bId": "e022118e-9373-4e2a-94f6-391f4fb84a54"
  },
  {
   "a": "Sinitra Siengsanaoh",
   "b": "Brian Gonzalez",
   "team": "Pickleball Palace",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 1.5,
   "avgExpected": 0.7,
   "aId": "bd5e1a4c-a9d5-4683-a74e-90c0df2d84cd",
   "bId": "ecc02ab8-5e9c-4950-89b7-be3f397683c3"
  },
  {
   "a": "Clifford Luster",
   "b": "Sarah Mcparland",
   "team": "Home Court",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 3.8,
   "avgExpected": 2.8,
   "aId": "3f47746a-2105-493a-941a-b15c4b02a520",
   "bId": "958e8cb9-1c97-4932-b495-29c28578a123"
  },
  {
   "a": "Dave Pellicane",
   "b": "Rui Zhang",
   "team": "Stelton Sports",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.5,
   "avgActual": -3.3,
   "avgExpected": -4.6,
   "aId": "2725f46f-cb36-411b-bf79-70611fbda07c",
   "bId": "c218d668-b78a-4726-b2df-fe7730a50963"
  },
  {
   "a": "Liang Chao",
   "b": "Louis Vessichelli",
   "team": "Montville",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.5,
   "avgActual": -0.7,
   "avgExpected": -1.8,
   "aId": "34ae5ecc-b6b2-44a4-b0a6-b8e59437a32c",
   "bId": "cb8c8404-c482-4fe5-bd01-35b348fccfd4"
  },
  {
   "a": "Marc Friedman",
   "b": "Tara Kramer",
   "team": "Flemington",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 0.5,
   "avgActual": -5.7,
   "avgExpected": -6.7,
   "aId": "d7bdde76-1007-4b20-a804-4efcd08c3598",
   "bId": "dae62b8e-5f8e-4721-8f41-3218518d1e30"
  },
  {
   "a": "Pam Boyd",
   "b": "Brian Rowan",
   "team": "ACE",
   "n": 8,
   "w": 8,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 4,
   "avgExpected": 3.2,
   "aId": "04aefa29-20e3-41b7-a680-19d13f9d4289",
   "bId": "136b6979-e0f4-4af2-9f5e-949b8d4bf423"
  },
  {
   "a": "Liz Cuozzo",
   "b": "Andrew Hyman",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 1.7,
   "avgExpected": 0.5,
   "aId": "2b2d474d-281c-42d7-854b-6bfe32f20563",
   "bId": "dbda3e07-6332-4467-bdf0-be18b2686573"
  },
  {
   "a": "Joe Palumbo",
   "b": "Andrew Hyman",
   "team": "Jersey Pickleball Club",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 1.3,
   "avgExpected": 0.5,
   "aId": "b39664c3-1a6e-4493-968f-6e7f7939f694",
   "bId": "dbda3e07-6332-4467-bdf0-be18b2686573"
  },
  {
   "a": "Charlie Johnston",
   "b": "Kate Curren",
   "team": "Pickleball Palace",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 5.7,
   "avgExpected": 4.8,
   "aId": "1bad49ab-f2b8-439b-9e4b-3ff3cb8ca325",
   "bId": "20e006d9-72f9-4f9e-bad5-750694224782"
  },
  {
   "a": "Darin Morgan",
   "b": "Vita Mulholland",
   "team": "APC Garden State",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.5,
   "avgActual": -4.5,
   "avgExpected": -5.5,
   "aId": "dd2e7522-5de0-4018-b8f2-f0e332bff293",
   "bId": "fe0555e5-2ec9-4dc2-a44b-4017d5afbb41"
  },
  {
   "a": "David Osborne",
   "b": "Carol Mastroianni",
   "team": "Flemington",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 3.8,
   "avgExpected": 2.7,
   "aId": "418e7ba5-3e06-40ec-9b83-19d3bf10c9cb",
   "bId": "7f851011-9322-43f9-aff2-754565a615c7"
  },
  {
   "a": "Tara Lombardo",
   "b": "Santhosh Pillai",
   "team": "Monroe",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.5,
   "avgActual": -2.5,
   "avgExpected": -3.6,
   "aId": "77d20dd0-823c-474e-b470-12f69db5a588",
   "bId": "7d25c9f9-c478-402a-9139-cc8781686a8e"
  },
  {
   "a": "Michael Oppenheim",
   "b": "Jeffrey Heil",
   "team": "Montville",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.5,
   "avgActual": -2.3,
   "avgExpected": -3.4,
   "aId": "4155c169-e722-48c6-8835-e0c83f27468a",
   "bId": "d44c4151-84f7-4ec8-9e48-420a627107fd"
  },
  {
   "a": "Bob Castellano",
   "b": "Scott Rubin",
   "team": "Flemington",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.5,
   "avgActual": -5.7,
   "avgExpected": -6.9,
   "aId": "7bb24154-bd52-4081-a3e6-0b8afcde62d5",
   "bId": "c12175df-b959-4efe-95e7-e5298b783da8"
  },
  {
   "a": "Jim Darcangelo",
   "b": "Dana Luscombe",
   "team": "Bounce Malvern",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 6.4,
   "avgExpected": 5.5,
   "aId": "0530512b-466d-4ff7-9e89-7961b4a63110",
   "bId": "be6e11f7-09a1-4b1c-af3d-a052b3c36b7f"
  },
  {
   "a": "Kajal Sinkar",
   "b": "Sandeep Malhotra",
   "team": "Home Court",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 0.3,
   "avgExpected": -0.6,
   "aId": "9d7f6585-d5f4-44fa-a4f9-24737a072f72",
   "bId": "c24596e0-9eeb-4195-b1ff-d4ca3e418d84"
  },
  {
   "a": "Mei Li",
   "b": "Zemin Zeng",
   "team": "Stelton Sports",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 3.8,
   "avgExpected": 2.9,
   "aId": "28330003-3125-4050-be9a-ddd726dccfe2",
   "bId": "6f2553e1-299a-407f-b919-41d4b3a84bae"
  },
  {
   "a": "Zemin Zeng",
   "b": "Lei Dong",
   "team": "Stelton Sports",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 0.7,
   "avgExpected": -0.6,
   "aId": "6f2553e1-299a-407f-b919-41d4b3a84bae",
   "bId": "f9ac936e-7371-4ea9-8a97-7969635046fd"
  },
  {
   "a": "Michael Barninger",
   "b": "Margaret Weidlich",
   "team": "Home Court",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.5,
   "avgActual": -0.5,
   "avgExpected": -1.5,
   "aId": "330f9632-9de4-4574-810a-1923f34d7ca6",
   "bId": "7021e97f-1e5e-4adb-ac80-1a9c919caba6"
  },
  {
   "a": "Johnson Chang",
   "b": "Rebecca Lederman",
   "team": "Pickleball Palace",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 3.6,
   "avgExpected": 2.7,
   "aId": "6994f1c2-d156-436a-bbb6-e9e348bea33a",
   "bId": "cb324481-3d73-47c2-9cc0-a1e1650dd87f"
  },
  {
   "a": "Ted Lee",
   "b": "Frank Ding",
   "team": "Pickleball Kingdom Hamilton",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": 0.4,
   "avgActual": -0.7,
   "avgExpected": -1.4,
   "aId": "f6d91a04-e692-4905-96a6-968175585586",
   "bId": "f83efefa-b8dd-49c2-90a1-9baa1e03315b"
  },
  {
   "a": "Jim Darcangelo",
   "b": "Keith Goldberg",
   "team": "Bounce Malvern",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 2.7,
   "avgExpected": 2.1,
   "aId": "0530512b-466d-4ff7-9e89-7961b4a63110",
   "bId": "37a0fa2c-df0b-4d92-900b-a9f20f441ad8"
  },
  {
   "a": "Harriet Levin",
   "b": "Katherine Maruyama",
   "team": "Bounce Malvern",
   "n": 15,
   "w": 13,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 7.2,
   "avgExpected": 6.7,
   "aId": "aeff8297-a479-4b3b-9a49-72c410ac8e26",
   "bId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a"
  },
  {
   "a": "Ayten Mayer",
   "b": "Richard Abate",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": 0.4,
   "avgActual": -2.2,
   "avgExpected": -2.9,
   "aId": "8072e25c-4788-48b5-a440-0d4403f89f4f",
   "bId": "a18c309a-f364-4ae6-b06a-7faf4e1c525d"
  },
  {
   "a": "Lance Brown",
   "b": "Alice Napolitano",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.4,
   "avgActual": 5,
   "avgExpected": 4,
   "aId": "5d13288d-69fe-4d0b-bf69-51c1d24e3409",
   "bId": "d56483b8-a5b8-4c1f-8437-39fcf90a5030"
  },
  {
   "a": "Robert Finley",
   "b": "James Shaw",
   "team": "ACE",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.4,
   "avgActual": 6.3,
   "avgExpected": 5.4,
   "aId": "0d70122a-9002-461f-8600-a9afed2e8c3f",
   "bId": "439e30a7-6097-4e20-8a7b-25c57dd5b5d0"
  },
  {
   "a": "Denise Richmond",
   "b": "Eric Luque",
   "team": "Flemington",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 1,
   "avgExpected": 0.1,
   "aId": "422cd941-43db-4123-a07e-3316583f51ee",
   "bId": "b3c28078-ab31-4002-9e09-5fa3f627d8c1"
  },
  {
   "a": "Liz Cuozzo",
   "b": "Natasha De Carvalho",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 2.3,
   "avgExpected": 1.3,
   "aId": "2b2d474d-281c-42d7-854b-6bfe32f20563",
   "bId": "462f3a15-22ed-4fa3-b698-78678a5d6966"
  },
  {
   "a": "Johnson Chang",
   "b": "David Coleman",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 2.3,
   "avgExpected": 1.4,
   "aId": "6994f1c2-d156-436a-bbb6-e9e348bea33a",
   "bId": "ec3ddbcf-c126-4225-901a-c3c3a9ac479b"
  },
  {
   "a": "Oliveira Karen",
   "b": "Andre Yang",
   "team": "Montville",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 2.4,
   "avgExpected": 1.7,
   "aId": "80b535f7-a6f6-4905-90ae-69c8695f99be",
   "bId": "b9cede07-396d-42c4-84f3-c0e66ecb8f71"
  },
  {
   "a": "Dana Luscombe",
   "b": "Tera Baccile",
   "team": "Bounce Malvern",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 8.2,
   "avgExpected": 7.5,
   "aId": "be6e11f7-09a1-4b1c-af3d-a052b3c36b7f",
   "bId": "d5aa92c7-71df-47c7-84fb-6710e1ed81e2"
  },
  {
   "a": "Franklin Lupianez",
   "b": "Laura Spilatro",
   "team": "Home Court",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.4,
   "avgActual": -1.3,
   "avgExpected": -2.3,
   "aId": "17caef8b-84d4-4052-9695-7c74190925a1",
   "bId": "459df1a4-6663-4d9e-9b05-bf33f5e9d8ea"
  },
  {
   "a": "Eva Danieli",
   "b": "Joe Palumbo",
   "team": "Jersey Pickleball Club",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": 0.4,
   "avgActual": 2.1,
   "avgExpected": 1.5,
   "aId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae",
   "bId": "b39664c3-1a6e-4493-968f-6e7f7939f694"
  },
  {
   "a": "Lori Flickinger",
   "b": "Golda Steier",
   "team": "APC Garden State",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.4,
   "avgActual": -6.3,
   "avgExpected": -7.2,
   "aId": "7be2e586-5d71-40e2-b708-c862448e40da",
   "bId": "a2752756-2869-4830-8ca6-705e62931def"
  },
  {
   "a": "Sarah Flynn",
   "b": "Eliezer Mintz",
   "team": "Monroe",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.4,
   "avgActual": -0.7,
   "avgExpected": -1.5,
   "aId": "29b01229-f7ed-4692-bdb4-32926b8a7cc5",
   "bId": "832fb271-fb5e-43aa-b442-95c03fb78342"
  },
  {
   "a": "Marc Pellicane",
   "b": "Kate Siedell",
   "team": "ACE",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 5,
   "avgExpected": 4.3,
   "aId": "1c13f01f-aeb7-45db-9faf-a6567d22bb81",
   "bId": "8decf039-f1e5-4182-b3cf-6756789ae87a"
  },
  {
   "a": "Brad Oldham",
   "b": "Gary Sidhu",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 2,
   "avgExpected": 1,
   "aId": "965b56ee-6fb4-4bd1-9708-8ced2c5dd9a2",
   "bId": "fa28fec9-9eff-4831-912d-4180f8760eeb"
  },
  {
   "a": "Kamala Gangavalli",
   "b": "Sara Wiggert",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.4,
   "avgActual": 2,
   "avgExpected": 1,
   "aId": "26297bb5-23ec-465a-b348-de2b64b6a939",
   "bId": "6cf82c92-fdfb-46bc-bad1-beec6ab96691"
  },
  {
   "a": "Laura Sweet",
   "b": "Bennett Shanker",
   "team": "APC Garden State",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 2,
   "avgExpected": 1.5,
   "aId": "7b7b29be-c4b7-4ca9-8fd9-77ec362e761b",
   "bId": "a86dc96c-b346-460c-a94c-df0551d5027a"
  },
  {
   "a": "Howie Steiner",
   "b": "Darin Morgan",
   "team": "APC Garden State",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.3,
   "avgActual": -1.7,
   "avgExpected": -2.3,
   "aId": "5f8dc611-79bf-404d-99fc-f3ea9178d8f0",
   "bId": "dd2e7522-5de0-4018-b8f2-f0e332bff293"
  },
  {
   "a": "Tim Ahn",
   "b": "Andrea Mui",
   "team": "Monroe",
   "n": 11,
   "w": 1,
   "l": 10,
   "synergy": 0.3,
   "avgActual": -3.7,
   "avgExpected": -4.2,
   "aId": "54431f9b-4785-4c4d-bdf9-94baf6da6a52",
   "bId": "7a1f2b24-7109-4933-9428-c8fef6eb8348"
  },
  {
   "a": "Natasha De Carvalho",
   "b": "Meryl Nadler",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 1,
   "avgExpected": 0.3,
   "aId": "462f3a15-22ed-4fa3-b698-78678a5d6966",
   "bId": "90987b97-d181-4c15-9c7c-e0bebff4e9b0"
  },
  {
   "a": "Mei Li",
   "b": "Sam Zhou",
   "team": "Stelton Sports",
   "n": 10,
   "w": 5,
   "l": 5,
   "synergy": 0.3,
   "avgActual": 1,
   "avgExpected": 0.5,
   "aId": "28330003-3125-4050-be9a-ddd726dccfe2",
   "bId": "dcc4f317-c0ad-4878-8540-d8aa3aa53d8a"
  },
  {
   "a": "Dave Pellicane",
   "b": "Ann Betterton",
   "team": "Stelton Sports",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 0.3,
   "avgActual": -3.5,
   "avgExpected": -4.1,
   "aId": "2725f46f-cb36-411b-bf79-70611fbda07c",
   "bId": "abe02688-e77f-414b-9747-25f3bdc149c7"
  },
  {
   "a": "Stacey Frank",
   "b": "Kate Siedell",
   "team": "ACE",
   "n": 13,
   "w": 11,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 3.8,
   "avgExpected": 3.4,
   "aId": "768c88bd-683d-4204-8124-a589c8028b6e",
   "bId": "8decf039-f1e5-4182-b3cf-6756789ae87a"
  },
  {
   "a": "David Osborne",
   "b": "Amy Johnson",
   "team": "Flemington",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 0.5,
   "avgExpected": 0,
   "aId": "418e7ba5-3e06-40ec-9b83-19d3bf10c9cb",
   "bId": "74e493de-dca7-4bf2-b9ac-630484282502"
  },
  {
   "a": "Denise Richmond",
   "b": "Amy Johnson",
   "team": "Flemington",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.3,
   "avgActual": 0,
   "avgExpected": -0.5,
   "aId": "422cd941-43db-4123-a07e-3316583f51ee",
   "bId": "74e493de-dca7-4bf2-b9ac-630484282502"
  },
  {
   "a": "Liangang Liu",
   "b": "Lei Dong",
   "team": "Stelton Sports",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": 0.3,
   "avgActual": -0.4,
   "avgExpected": -0.9,
   "aId": "34618d40-6e62-4ab3-aa28-fc61c9ac1920",
   "bId": "f9ac936e-7371-4ea9-8a97-7969635046fd"
  },
  {
   "a": "Natasha De Carvalho",
   "b": "Joe Palumbo",
   "team": "Jersey Pickleball Club",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 1.6,
   "avgExpected": 1,
   "aId": "462f3a15-22ed-4fa3-b698-78678a5d6966",
   "bId": "b39664c3-1a6e-4493-968f-6e7f7939f694"
  },
  {
   "a": "Liangang Liu",
   "b": "Wen Jin",
   "team": "Stelton Sports",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 2,
   "avgExpected": 1.4,
   "aId": "34618d40-6e62-4ab3-aa28-fc61c9ac1920",
   "bId": "dd2384fe-4bb2-4085-a917-6e7989beb8a7"
  },
  {
   "a": "Harriet Levin",
   "b": "Stephanie Woomer",
   "team": "Bounce Malvern",
   "n": 7,
   "w": 7,
   "l": 0,
   "synergy": 0.3,
   "avgActual": 8.6,
   "avgExpected": 8.2,
   "aId": "aeff8297-a479-4b3b-9a49-72c410ac8e26",
   "bId": "e05f57f5-c898-404e-b86f-c2460cc23b06"
  },
  {
   "a": "Rick Derose",
   "b": "Jiyun Yuh",
   "team": "APC Garden State",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": 0.3,
   "avgActual": -6.2,
   "avgExpected": -6.8,
   "aId": "823fc9d2-d052-423c-87a9-bd601b54a414",
   "bId": "c94ae231-9f0c-4212-b769-7bd708d8fc38"
  },
  {
   "a": "Mark Lim",
   "b": "Anita Bobba",
   "team": "Home Court",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.3,
   "avgActual": -2.2,
   "avgExpected": -2.8,
   "aId": "2d3c137a-6e03-4cfe-bce1-945d60358b5b",
   "bId": "abc68487-3415-49a2-bdfb-dd56eb5af20d"
  },
  {
   "a": "Rick Derose",
   "b": "Cynthia Covie",
   "team": "APC Garden State",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": 0.3,
   "avgActual": -0.4,
   "avgExpected": -0.9,
   "aId": "823fc9d2-d052-423c-87a9-bd601b54a414",
   "bId": "b146d15b-2ed7-4087-a6a0-90d4538aea72"
  },
  {
   "a": "Cynthia Covie",
   "b": "Jiyun Yuh",
   "team": "APC Garden State",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": 0.3,
   "avgActual": -1.7,
   "avgExpected": -2.1,
   "aId": "b146d15b-2ed7-4087-a6a0-90d4538aea72",
   "bId": "c94ae231-9f0c-4212-b769-7bd708d8fc38"
  },
  {
   "a": "Andrea Mui",
   "b": "Tracey Collins",
   "team": "Monroe",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 0.3,
   "avgActual": -4,
   "avgExpected": -4.7,
   "aId": "7a1f2b24-7109-4933-9428-c8fef6eb8348",
   "bId": "f01a9ccb-b72e-4980-bdc0-73ed5a72f92c"
  },
  {
   "a": "Stacy Garretson",
   "b": "Tom Maley",
   "team": "Pickleball Kingdom Hamilton",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 2.7,
   "avgExpected": 1.9,
   "aId": "85dd9a28-a510-493a-bfe4-9cc7d3550ff2",
   "bId": "e05f8bd0-e64b-42dd-b6a0-42249573b3f4"
  },
  {
   "a": "Laura Sweet",
   "b": "Jiyun Yuh",
   "team": "APC Garden State",
   "n": 13,
   "w": 4,
   "l": 9,
   "synergy": 0.3,
   "avgActual": -2.5,
   "avgExpected": -3,
   "aId": "7b7b29be-c4b7-4ca9-8fd9-77ec362e761b",
   "bId": "c94ae231-9f0c-4212-b769-7bd708d8fc38"
  },
  {
   "a": "Roger Graterol",
   "b": "James Shaw",
   "team": "ACE",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 6.3,
   "avgExpected": 5.7,
   "aId": "23262a95-4498-4ca1-87a9-713c02337168",
   "bId": "439e30a7-6097-4e20-8a7b-25c57dd5b5d0"
  },
  {
   "a": "Wally Liu",
   "b": "Nancy Lin",
   "team": "Pickleball Kingdom Hamilton",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 0.3,
   "avgActual": -11,
   "avgExpected": -11.5,
   "aId": "0a36460a-ac00-4501-8a7f-9b217bfbddc7",
   "bId": "88bcb8e1-970f-4535-bec1-beb232f1f77a"
  },
  {
   "a": "Liang Chao",
   "b": "Savita Nandal",
   "team": "Montville",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.3,
   "avgActual": -6,
   "avgExpected": -6.7,
   "aId": "34ae5ecc-b6b2-44a4-b0a6-b8e59437a32c",
   "bId": "ce787b4f-30b9-4fd0-a12a-caba1f27ca68"
  },
  {
   "a": "Suzanne \"Zan\" Davies",
   "b": "Rui Zhang",
   "team": "Stelton Sports",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.3,
   "avgActual": 5.7,
   "avgExpected": 4.9,
   "aId": "25b25938-9a27-4d08-97c1-6db7a6b7ff24",
   "bId": "c218d668-b78a-4726-b2df-fe7730a50963"
  },
  {
   "a": "Susan St. Pierre",
   "b": "Lei Dong",
   "team": "Stelton Sports",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 0,
   "avgExpected": -0.6,
   "aId": "001c2d38-829b-4fd0-b249-472f78337387",
   "bId": "f9ac936e-7371-4ea9-8a97-7969635046fd"
  },
  {
   "a": "Ed Hutchinson",
   "b": "Donna Taylor",
   "team": "ACE",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 4.3,
   "avgExpected": 3.7,
   "aId": "ab2b30c5-ffb3-4863-b7a2-af2272f13452",
   "bId": "c17e02c9-4feb-47ce-bf5e-29b03155bf21"
  },
  {
   "a": "Laura Sweet",
   "b": "Lori Flickinger",
   "team": "APC Garden State",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.2,
   "avgActual": -4.5,
   "avgExpected": -4.9,
   "aId": "7b7b29be-c4b7-4ca9-8fd9-77ec362e761b",
   "bId": "7be2e586-5d71-40e2-b708-c862448e40da"
  },
  {
   "a": "Michael Finkelstein",
   "b": "Dana Luscombe",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 5.7,
   "avgExpected": 5.3,
   "aId": "861c3f68-2c96-4a96-a75e-645020f73a5c",
   "bId": "be6e11f7-09a1-4b1c-af3d-a052b3c36b7f"
  },
  {
   "a": "Lucy Li",
   "b": "Abraham Telechanski",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 2.8,
   "avgExpected": 2.4,
   "aId": "d22f8b69-76a6-41e0-8b04-c5dae68d9f69",
   "bId": "e022118e-9373-4e2a-94f6-391f4fb84a54"
  },
  {
   "a": "Dave Pellicane",
   "b": "Liangang Liu",
   "team": "Stelton Sports",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": 0.2,
   "avgActual": -0.7,
   "avgExpected": -1,
   "aId": "2725f46f-cb36-411b-bf79-70611fbda07c",
   "bId": "34618d40-6e62-4ab3-aa28-fc61c9ac1920"
  },
  {
   "a": "Andre Yang",
   "b": "Jeffrey Heil",
   "team": "Montville",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.2,
   "avgActual": 0,
   "avgExpected": -0.4,
   "aId": "b9cede07-396d-42c4-84f3-c0e66ecb8f71",
   "bId": "d44c4151-84f7-4ec8-9e48-420a627107fd"
  },
  {
   "a": "Art Muth",
   "b": "Bob Castellano",
   "team": "Flemington",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.2,
   "avgActual": -4.7,
   "avgExpected": -5.1,
   "aId": "6bfc3a49-53cb-4c03-b8cb-94552158ccbe",
   "bId": "7bb24154-bd52-4081-a3e6-0b8afcde62d5"
  },
  {
   "a": "Susan Ackley",
   "b": "Eric Luque",
   "team": "Flemington",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 5.3,
   "avgExpected": 5,
   "aId": "07a0e948-6308-4920-a6a8-1d5945552ecb",
   "bId": "b3c28078-ab31-4002-9e09-5fa3f627d8c1"
  },
  {
   "a": "Amy Chrebet",
   "b": "Joe Palumbo",
   "team": "Jersey Pickleball Club",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.2,
   "avgActual": -1,
   "avgExpected": -1.4,
   "aId": "6f511e98-567a-4b33-8831-ed123f01f952",
   "bId": "b39664c3-1a6e-4493-968f-6e7f7939f694"
  },
  {
   "a": "Rui Zhang",
   "b": "Lei Dong",
   "team": "Stelton Sports",
   "n": 20,
   "w": 13,
   "l": 7,
   "synergy": 0.2,
   "avgActual": 0.7,
   "avgExpected": 0.5,
   "aId": "c218d668-b78a-4726-b2df-fe7730a50963",
   "bId": "f9ac936e-7371-4ea9-8a97-7969635046fd"
  },
  {
   "a": "Kate Curren",
   "b": "Carly Pfeffer",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.2,
   "avgActual": 5,
   "avgExpected": 4.5,
   "aId": "20e006d9-72f9-4f9e-bad5-750694224782",
   "bId": "387e74d4-66ee-4a52-a4ac-aae3dbe1d21b"
  },
  {
   "a": "Amanda Brouillard",
   "b": "Oliveira Karen",
   "team": "Montville",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.2,
   "avgActual": 1.3,
   "avgExpected": 0.9,
   "aId": "2b29199f-62de-4125-a014-dd9f9e612cb1",
   "bId": "80b535f7-a6f6-4905-90ae-69c8695f99be"
  },
  {
   "a": "Michele Dabal",
   "b": "Oliveira Karen",
   "team": "Montville",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.2,
   "avgActual": -1.7,
   "avgExpected": -2.2,
   "aId": "6dd6742b-80cc-45b6-b5df-2eed3b7f00a1",
   "bId": "80b535f7-a6f6-4905-90ae-69c8695f99be"
  },
  {
   "a": "Carol Mastroianni",
   "b": "Kristen Soucie",
   "team": "Flemington",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 2.5,
   "avgExpected": 2.1,
   "aId": "7f851011-9322-43f9-aff2-754565a615c7",
   "bId": "8ebf2370-8a82-495e-97ea-5168dd2b14c4"
  },
  {
   "a": "Jim Darcangelo",
   "b": "Tera Baccile",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.2,
   "avgActual": 5.7,
   "avgExpected": 5.2,
   "aId": "0530512b-466d-4ff7-9e89-7961b4a63110",
   "bId": "d5aa92c7-71df-47c7-84fb-6710e1ed81e2"
  },
  {
   "a": "Lara Webb",
   "b": "Lance Stopek",
   "team": "APC Garden State",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 0.1,
   "avgActual": -0.8,
   "avgExpected": -1.1,
   "aId": "096a6a65-5d60-461f-91ed-d2eafbd7dd76",
   "bId": "3a249058-9862-4d27-9562-c73c5a685d96"
  },
  {
   "a": "Lori Flickinger",
   "b": "Vita Mulholland",
   "team": "APC Garden State",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 0.1,
   "avgActual": -5,
   "avgExpected": -5.3,
   "aId": "7be2e586-5d71-40e2-b708-c862448e40da",
   "bId": "fe0555e5-2ec9-4dc2-a44b-4017d5afbb41"
  },
  {
   "a": "Jim Darcangelo",
   "b": "Harriet Levin",
   "team": "Bounce Malvern",
   "n": 13,
   "w": 10,
   "l": 3,
   "synergy": 0.1,
   "avgActual": 4.5,
   "avgExpected": 4.4,
   "aId": "0530512b-466d-4ff7-9e89-7961b4a63110",
   "bId": "aeff8297-a479-4b3b-9a49-72c410ac8e26"
  },
  {
   "a": "Michael Finkelstein",
   "b": "Stephanie Woomer",
   "team": "Bounce Malvern",
   "n": 15,
   "w": 11,
   "l": 4,
   "synergy": 0.1,
   "avgActual": 3.4,
   "avgExpected": 3.2,
   "aId": "861c3f68-2c96-4a96-a75e-645020f73a5c",
   "bId": "e05f57f5-c898-404e-b86f-c2460cc23b06"
  },
  {
   "a": "Santhosh Pillai",
   "b": "Eliezer Mintz",
   "team": "Monroe",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 0.1,
   "avgActual": 0.1,
   "avgExpected": 0.1,
   "aId": "7d25c9f9-c478-402a-9139-cc8781686a8e",
   "bId": "832fb271-fb5e-43aa-b442-95c03fb78342"
  },
  {
   "a": "Emil Pescatore",
   "b": "Robert Huntley",
   "team": "Home Court",
   "n": 10,
   "w": 6,
   "l": 4,
   "synergy": 0.1,
   "avgActual": -0.7,
   "avgExpected": -0.9,
   "aId": "1c9b7abf-dae6-4e0d-a31d-485e99a01fec",
   "bId": "b5dec967-9e3a-49b4-b136-597711d099cc"
  },
  {
   "a": "Mengchu Zhou",
   "b": "Dave Pellicane",
   "team": "Stelton Sports",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 0.1,
   "avgActual": -3.2,
   "avgExpected": -3.4,
   "aId": "14fc7872-1e6f-419e-adcb-d8e63826a37d",
   "bId": "2725f46f-cb36-411b-bf79-70611fbda07c"
  },
  {
   "a": "Brian Rowan",
   "b": "Marc Pellicane",
   "team": "ACE",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 4.6,
   "avgExpected": 4.5,
   "aId": "136b6979-e0f4-4af2-9f5e-949b8d4bf423",
   "bId": "1c13f01f-aeb7-45db-9faf-a6567d22bb81"
  },
  {
   "a": "James Shaw",
   "b": "Jeff Lorman",
   "team": "ACE",
   "n": 7,
   "w": 7,
   "l": 0,
   "synergy": 0.1,
   "avgActual": 6.4,
   "avgExpected": 6.2,
   "aId": "439e30a7-6097-4e20-8a7b-25c57dd5b5d0",
   "bId": "75789bbc-0dde-460e-b905-7bd1189c6a90"
  },
  {
   "a": "Todd Stein",
   "b": "Marc Friedman",
   "team": "Flemington",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.1,
   "avgActual": -4.3,
   "avgExpected": -4.6,
   "aId": "63fb8f7d-8f83-4bdf-89c7-fc3ca7139df5",
   "bId": "d7bdde76-1007-4b20-a804-4efcd08c3598"
  },
  {
   "a": "Eric Luque",
   "b": "Marc Friedman",
   "team": "Flemington",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.1,
   "avgActual": -1,
   "avgExpected": -1.2,
   "aId": "b3c28078-ab31-4002-9e09-5fa3f627d8c1",
   "bId": "d7bdde76-1007-4b20-a804-4efcd08c3598"
  },
  {
   "a": "David Osborne",
   "b": "Aimee Castellano",
   "team": "Flemington",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 1.6,
   "avgExpected": 1.5,
   "aId": "418e7ba5-3e06-40ec-9b83-19d3bf10c9cb",
   "bId": "e76985fb-efd1-4180-a340-e4f36abbc8b4"
  },
  {
   "a": "Mark Lim",
   "b": "Margaret Weidlich",
   "team": "Home Court",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.1,
   "avgActual": -4.3,
   "avgExpected": -4.6,
   "aId": "2d3c137a-6e03-4cfe-bce1-945d60358b5b",
   "bId": "7021e97f-1e5e-4adb-ac80-1a9c919caba6"
  },
  {
   "a": "Laura Elleman",
   "b": "Bud Heller",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.1,
   "avgActual": 5,
   "avgExpected": 4.8,
   "aId": "3e6056c2-7c5b-4123-b457-ffcf82d3b422",
   "bId": "9282b1b2-6551-481c-b9b8-2a246a49a621"
  },
  {
   "a": "Lara Webb",
   "b": "Laura Sweet",
   "team": "APC Garden State",
   "n": 13,
   "w": 5,
   "l": 8,
   "synergy": 0.1,
   "avgActual": -0.2,
   "avgExpected": -0.4,
   "aId": "096a6a65-5d60-461f-91ed-d2eafbd7dd76",
   "bId": "7b7b29be-c4b7-4ca9-8fd9-77ec362e761b"
  },
  {
   "a": "Michael Finkelstein",
   "b": "Derek Le",
   "team": "Bounce Malvern",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 1.1,
   "avgExpected": 0.9,
   "aId": "861c3f68-2c96-4a96-a75e-645020f73a5c",
   "bId": "8cf7b40c-ed2c-4c8b-83bd-b9f2d486c690"
  },
  {
   "a": "Keith Goldberg",
   "b": "Derek Le",
   "team": "Bounce Malvern",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 3.3,
   "avgExpected": 3.2,
   "aId": "37a0fa2c-df0b-4d92-900b-a9f20f441ad8",
   "bId": "8cf7b40c-ed2c-4c8b-83bd-b9f2d486c690"
  },
  {
   "a": "Amy Johnson",
   "b": "Carol Mastroianni",
   "team": "Flemington",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.1,
   "avgActual": -1.3,
   "avgExpected": -1.6,
   "aId": "74e493de-dca7-4bf2-b9ac-630484282502",
   "bId": "7f851011-9322-43f9-aff2-754565a615c7"
  },
  {
   "a": "Andrea Smith",
   "b": "Laura Spilatro",
   "team": "Home Court",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.1,
   "avgActual": -7.3,
   "avgExpected": -7.5,
   "aId": "1318bc01-f23f-47da-94cb-ac71b8f3e694",
   "bId": "459df1a4-6663-4d9e-9b05-bf33f5e9d8ea"
  },
  {
   "a": "Stacy Garretson",
   "b": "Yaowen Li",
   "team": "Pickleball Kingdom Hamilton",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 2,
   "avgExpected": 1.8,
   "aId": "85dd9a28-a510-493a-bfe4-9cc7d3550ff2",
   "bId": "b0747e45-3190-47d6-97ef-8bb041bf0ba8"
  },
  {
   "a": "Ivona Reszka",
   "b": "Marc Padre",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 0.8,
   "avgExpected": 0.7,
   "aId": "a06e906c-dd36-4585-b03a-48a49b915662",
   "bId": "a131a707-f20e-4838-9dcf-7cecb40c2705"
  },
  {
   "a": "Amy Chrebet",
   "b": "Alice Napolitano",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 1.3,
   "avgExpected": 1.2,
   "aId": "6f511e98-567a-4b33-8831-ed123f01f952",
   "bId": "d56483b8-a5b8-4c1f-8437-39fcf90a5030"
  },
  {
   "a": "Keith Goldberg",
   "b": "Tera Baccile",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.1,
   "avgActual": 8.5,
   "avgExpected": 8.4,
   "aId": "37a0fa2c-df0b-4d92-900b-a9f20f441ad8",
   "bId": "d5aa92c7-71df-47c7-84fb-6710e1ed81e2"
  },
  {
   "a": "Margaret Weidlich",
   "b": "Susan M Fett",
   "team": "Home Court",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.1,
   "avgActual": -1,
   "avgExpected": -1.3,
   "aId": "7021e97f-1e5e-4adb-ac80-1a9c919caba6",
   "bId": "91857142-d537-4b98-bbc2-481129371949"
  },
  {
   "a": "Karan Pescatore",
   "b": "Michael Barninger",
   "team": "Home Court",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.1,
   "avgActual": 3,
   "avgExpected": 2.7,
   "aId": "2cb4b2dd-d14b-4bab-a8be-ef4b14845711",
   "bId": "330f9632-9de4-4574-810a-1923f34d7ca6"
  },
  {
   "a": "David Osborne",
   "b": "Marc Friedman",
   "team": "Flemington",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 0.3,
   "avgExpected": 0.1,
   "aId": "418e7ba5-3e06-40ec-9b83-19d3bf10c9cb",
   "bId": "d7bdde76-1007-4b20-a804-4efcd08c3598"
  },
  {
   "a": "Sara Wiggert",
   "b": "Richard Demeuse",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 1.3,
   "avgExpected": 1.1,
   "aId": "6cf82c92-fdfb-46bc-bad1-beec6ab96691",
   "bId": "d88f1d1e-be4e-449e-b9b2-c468753e1dd3"
  },
  {
   "a": "Michael Dieterle",
   "b": "Katherine Maruyama",
   "team": "Bounce Malvern",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 0,
   "avgActual": 5.1,
   "avgExpected": 5.2,
   "aId": "4259501c-f1e3-4859-acd0-c25f342a1b92",
   "bId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a"
  },
  {
   "a": "Hayley Yandoli",
   "b": "Santhosh Pillai",
   "team": "Monroe",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0,
   "avgActual": -3,
   "avgExpected": -3,
   "aId": "1fc2dd51-135b-46d6-91ef-9291b573e78a",
   "bId": "7d25c9f9-c478-402a-9139-cc8781686a8e"
  },
  {
   "a": "Tim Ahn",
   "b": "Eliezer Mintz",
   "team": "Monroe",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0,
   "avgActual": -0.3,
   "avgExpected": -0.3,
   "aId": "54431f9b-4785-4c4d-bdf9-94baf6da6a52",
   "bId": "832fb271-fb5e-43aa-b442-95c03fb78342"
  },
  {
   "a": "Marc Padre",
   "b": "Lucy Li",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0,
   "avgActual": 3,
   "avgExpected": 3.1,
   "aId": "a131a707-f20e-4838-9dcf-7cecb40c2705",
   "bId": "d22f8b69-76a6-41e0-8b04-c5dae68d9f69"
  },
  {
   "a": "Ann Betterton",
   "b": "Rui Zhang",
   "team": "Stelton Sports",
   "n": 11,
   "w": 7,
   "l": 4,
   "synergy": 0,
   "avgActual": 0.7,
   "avgExpected": 0.7,
   "aId": "abe02688-e77f-414b-9747-25f3bdc149c7",
   "bId": "c218d668-b78a-4726-b2df-fe7730a50963"
  },
  {
   "a": "Amy Johnson",
   "b": "Sue Johnson",
   "team": "Flemington",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0,
   "avgActual": -2.5,
   "avgExpected": -2.4,
   "aId": "74e493de-dca7-4bf2-b9ac-630484282502",
   "bId": "c6046610-1dba-4bad-bc89-57e5baa0983f"
  },
  {
   "a": "Rosalyn Goldsmith",
   "b": "Amy Chrebet",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0,
   "avgActual": -0.3,
   "avgExpected": -0.3,
   "aId": "545c12c3-3098-47ca-b35e-429f37f481f5",
   "bId": "6f511e98-567a-4b33-8831-ed123f01f952"
  },
  {
   "a": "Derek Le",
   "b": "Harriet Levin",
   "team": "Bounce Malvern",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0,
   "avgActual": 4.7,
   "avgExpected": 4.6,
   "aId": "8cf7b40c-ed2c-4c8b-83bd-b9f2d486c690",
   "bId": "aeff8297-a479-4b3b-9a49-72c410ac8e26"
  },
  {
   "a": "David Osborne",
   "b": "Christine Papa",
   "team": "Flemington",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0,
   "avgActual": 0.8,
   "avgExpected": 0.8,
   "aId": "418e7ba5-3e06-40ec-9b83-19d3bf10c9cb",
   "bId": "d156a552-7fa9-488e-9bfa-745feb859950"
  },
  {
   "a": "Pam Boyd",
   "b": "Brad Daddis",
   "team": "ACE",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0,
   "avgActual": 3.7,
   "avgExpected": 3.6,
   "aId": "04aefa29-20e3-41b7-a680-19d13f9d4289",
   "bId": "3b22e073-2c4b-4245-a142-29441ec509a3"
  },
  {
   "a": "Jiyun Yuh",
   "b": "Laurence Emerson",
   "team": "APC Garden State",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": 0,
   "avgActual": -4.7,
   "avgExpected": -4.7,
   "aId": "c94ae231-9f0c-4212-b769-7bd708d8fc38",
   "bId": "d1d8de9c-d716-4531-8f30-70742305ac46"
  },
  {
   "a": "Lance Stopek",
   "b": "Laura Sweet",
   "team": "APC Garden State",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0,
   "avgActual": -0.2,
   "avgExpected": -0.3,
   "aId": "3a249058-9862-4d27-9562-c73c5a685d96",
   "bId": "7b7b29be-c4b7-4ca9-8fd9-77ec362e761b"
  },
  {
   "a": "Mei Li",
   "b": "Rui Zhang",
   "team": "Stelton Sports",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0,
   "avgActual": 0,
   "avgExpected": 0.1,
   "aId": "28330003-3125-4050-be9a-ddd726dccfe2",
   "bId": "c218d668-b78a-4726-b2df-fe7730a50963"
  },
  {
   "a": "Lily Liu",
   "b": "Albert Pamudji",
   "team": "Pickleball Kingdom Hamilton",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0,
   "avgActual": 0.3,
   "avgExpected": 0.4,
   "aId": "91f78b3d-a1b7-44a8-a804-6035152bf1a2",
   "bId": "f8c55797-409c-4cf0-a2d5-241ec95f60b2"
  },
  {
   "a": "Yi Gu",
   "b": "Erik Lombardo",
   "team": "Monroe",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0,
   "avgActual": -0.8,
   "avgExpected": -0.8,
   "aId": "0640ecce-0b14-4eac-9cbd-be86592d6102",
   "bId": "834f3d3e-bde3-4b30-af4c-d1eadb344dfd"
  },
  {
   "a": "Claudia Van Loo",
   "b": "Marc Padre",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0,
   "avgActual": 0,
   "avgExpected": 0,
   "aId": "9066a581-73c5-410c-b3c3-af202f2d5ae5",
   "bId": "a131a707-f20e-4838-9dcf-7cecb40c2705"
  },
  {
   "a": "Ivona Reszka",
   "b": "Abraham Telechanski",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0,
   "avgActual": 1.7,
   "avgExpected": 1.6,
   "aId": "a06e906c-dd36-4585-b03a-48a49b915662",
   "bId": "e022118e-9373-4e2a-94f6-391f4fb84a54"
  },
  {
   "a": "Alex Lee",
   "b": "Brian Gonzalez",
   "team": "Pickleball Palace",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0,
   "avgActual": 3.8,
   "avgExpected": 3.8,
   "aId": "22e2201d-16d7-4474-847b-5f4f0cef44e6",
   "bId": "ecc02ab8-5e9c-4950-89b7-be3f397683c3"
  },
  {
   "a": "Kerry Schaffer",
   "b": "Katherine Maruyama",
   "team": "Bounce Malvern",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 0,
   "avgActual": 3.7,
   "avgExpected": 3.7,
   "aId": "6c18454a-479d-4cb7-9bd7-2e2c414ee744",
   "bId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a"
  },
  {
   "a": "Amy Chrebet",
   "b": "Scott Friedman",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0,
   "avgActual": -1,
   "avgExpected": -0.9,
   "aId": "6f511e98-567a-4b33-8831-ed123f01f952",
   "bId": "d40fde69-77a2-4998-a631-fba159129d2f"
  },
  {
   "a": "Jim Darcangelo",
   "b": "Katherine Maruyama",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0,
   "avgActual": 2.7,
   "avgExpected": 2.7,
   "aId": "0530512b-466d-4ff7-9e89-7961b4a63110",
   "bId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a"
  },
  {
   "a": "Brandon Fulford",
   "b": "Ronnie Yin",
   "team": "Montville",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0,
   "avgActual": -4,
   "avgExpected": -3.9,
   "aId": "906383cd-e781-48bc-9004-0fc5427c7e62",
   "bId": "988636eb-4604-44d6-af70-2732b787ec2a"
  },
  {
   "a": "Eva Danieli",
   "b": "Meryl Nadler",
   "team": "Jersey Pickleball Club",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -0.1,
   "avgActual": -0.4,
   "avgExpected": -0.3,
   "aId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae",
   "bId": "90987b97-d181-4c15-9c7c-e0bebff4e9b0"
  },
  {
   "a": "Liangang Liu",
   "b": "Sam Zhou",
   "team": "Stelton Sports",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 3,
   "avgExpected": 3.3,
   "aId": "34618d40-6e62-4ab3-aa28-fc61c9ac1920",
   "bId": "dcc4f317-c0ad-4878-8540-d8aa3aa53d8a"
  },
  {
   "a": "Liangjie Zhu",
   "b": "Louis Vessichelli",
   "team": "Montville",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 2.8,
   "avgExpected": 3,
   "aId": "972856ec-207d-4f89-9d97-6fda7c0e083b",
   "bId": "cb8c8404-c482-4fe5-bd01-35b348fccfd4"
  },
  {
   "a": "Evelyn Du",
   "b": "Liangjie Zhu",
   "team": "Montville",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.1,
   "avgActual": -1,
   "avgExpected": -0.8,
   "aId": "08547f36-c938-4f82-a783-9c89ab07500c",
   "bId": "972856ec-207d-4f89-9d97-6fda7c0e083b"
  },
  {
   "a": "Denise Richmond",
   "b": "Christine Papa",
   "team": "Flemington",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 0,
   "avgExpected": 0.3,
   "aId": "422cd941-43db-4123-a07e-3316583f51ee",
   "bId": "d156a552-7fa9-488e-9bfa-745feb859950"
  },
  {
   "a": "Mengchu Zhou",
   "b": "Ann Betterton",
   "team": "Stelton Sports",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -2,
   "avgExpected": -1.8,
   "aId": "14fc7872-1e6f-419e-adcb-d8e63826a37d",
   "bId": "abe02688-e77f-414b-9747-25f3bdc149c7"
  },
  {
   "a": "Katherine Maruyama",
   "b": "Stephanie Woomer",
   "team": "Bounce Malvern",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": -0.1,
   "avgActual": 6.2,
   "avgExpected": 6.5,
   "aId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a",
   "bId": "e05f57f5-c898-404e-b86f-c2460cc23b06"
  },
  {
   "a": "Laura Sweet",
   "b": "Rick Derose",
   "team": "APC Garden State",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.1,
   "avgActual": -6.7,
   "avgExpected": -6.4,
   "aId": "7b7b29be-c4b7-4ca9-8fd9-77ec362e761b",
   "bId": "823fc9d2-d052-423c-87a9-bd601b54a414"
  },
  {
   "a": "Joe Palumbo",
   "b": "Alice Napolitano",
   "team": "Jersey Pickleball Club",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 2.3,
   "avgExpected": 2.5,
   "aId": "b39664c3-1a6e-4493-968f-6e7f7939f694",
   "bId": "d56483b8-a5b8-4c1f-8437-39fcf90a5030"
  },
  {
   "a": "Michael Dombrowiecki",
   "b": "Joe Palumbo",
   "team": "Jersey Pickleball Club",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": -0.1,
   "avgActual": 0.1,
   "avgExpected": 0.3,
   "aId": "3ac34ef1-17a5-4ab6-8d17-be4bd5a0a040",
   "bId": "b39664c3-1a6e-4493-968f-6e7f7939f694"
  },
  {
   "a": "Brandon Fulford",
   "b": "Jeffrey Heil",
   "team": "Montville",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.1,
   "avgActual": -2.7,
   "avgExpected": -2.3,
   "aId": "906383cd-e781-48bc-9004-0fc5427c7e62",
   "bId": "d44c4151-84f7-4ec8-9e48-420a627107fd"
  },
  {
   "a": "Peter Chen",
   "b": "Brandon Fulford",
   "team": "Montville",
   "n": 7,
   "w": 1,
   "l": 6,
   "synergy": -0.1,
   "avgActual": -6.6,
   "avgExpected": -6.4,
   "aId": "8767c73e-fa5a-4e68-9ded-850b7ab50693",
   "bId": "906383cd-e781-48bc-9004-0fc5427c7e62"
  },
  {
   "a": "Richard Demeuse",
   "b": "Abraham Telechanski",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 9,
   "w": 6,
   "l": 3,
   "synergy": -0.1,
   "avgActual": 2.8,
   "avgExpected": 2.9,
   "aId": "d88f1d1e-be4e-449e-b9b2-c468753e1dd3",
   "bId": "e022118e-9373-4e2a-94f6-391f4fb84a54"
  },
  {
   "a": "Yi Gu",
   "b": "Tracey Collins",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 1,
   "avgExpected": 1.2,
   "aId": "0640ecce-0b14-4eac-9cbd-be86592d6102",
   "bId": "f01a9ccb-b72e-4980-bdc0-73ed5a72f92c"
  },
  {
   "a": "Marc Padre",
   "b": "Richard Demeuse",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 13,
   "w": 8,
   "l": 5,
   "synergy": -0.1,
   "avgActual": 3,
   "avgExpected": 3.1,
   "aId": "a131a707-f20e-4838-9dcf-7cecb40c2705",
   "bId": "d88f1d1e-be4e-449e-b9b2-c468753e1dd3"
  },
  {
   "a": "Brian Rowan",
   "b": "Roger Graterol",
   "team": "ACE",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 4.7,
   "avgExpected": 4.8,
   "aId": "136b6979-e0f4-4af2-9f5e-949b8d4bf423",
   "bId": "23262a95-4498-4ca1-87a9-713c02337168"
  },
  {
   "a": "Rebecca Lederman",
   "b": "David Coleman",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -1.7,
   "avgExpected": -1.5,
   "aId": "cb324481-3d73-47c2-9cc0-a1e1650dd87f",
   "bId": "ec3ddbcf-c126-4225-901a-c3c3a9ac479b"
  },
  {
   "a": "Gajendra Mehta",
   "b": "Rui Zhang",
   "team": "Stelton Sports",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -1,
   "avgExpected": -0.7,
   "aId": "9ecb04f7-d32e-4f28-8585-aad932450f89",
   "bId": "c218d668-b78a-4726-b2df-fe7730a50963"
  },
  {
   "a": "Bennett Shanker",
   "b": "Vita Mulholland",
   "team": "APC Garden State",
   "n": 10,
   "w": 4,
   "l": 6,
   "synergy": -0.2,
   "avgActual": -2.2,
   "avgExpected": -1.9,
   "aId": "a86dc96c-b346-460c-a94c-df0551d5027a",
   "bId": "fe0555e5-2ec9-4dc2-a44b-4017d5afbb41"
  },
  {
   "a": "Jean Wang",
   "b": "Lily Liu",
   "team": "Pickleball Kingdom Hamilton",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": -0.2,
   "avgActual": 8,
   "avgExpected": 8.4,
   "aId": "1188fc00-7ef5-4671-9ef9-2c7d162a2604",
   "bId": "91f78b3d-a1b7-44a8-a804-6035152bf1a2"
  },
  {
   "a": "Jim Darcangelo",
   "b": "Michael Finkelstein",
   "team": "Bounce Malvern",
   "n": 10,
   "w": 4,
   "l": 6,
   "synergy": -0.2,
   "avgActual": 0,
   "avgExpected": 0.3,
   "aId": "0530512b-466d-4ff7-9e89-7961b4a63110",
   "bId": "861c3f68-2c96-4a96-a75e-645020f73a5c"
  },
  {
   "a": "Carly Pfeffer",
   "b": "Bud Heller",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.2,
   "avgActual": 2.5,
   "avgExpected": 2.8,
   "aId": "387e74d4-66ee-4a52-a4ac-aae3dbe1d21b",
   "bId": "9282b1b2-6551-481c-b9b8-2a246a49a621"
  },
  {
   "a": "Emil Pescatore",
   "b": "Karan Pescatore",
   "team": "Home Court",
   "n": 11,
   "w": 8,
   "l": 3,
   "synergy": -0.2,
   "avgActual": 2.1,
   "avgExpected": 2.4,
   "aId": "1c9b7abf-dae6-4e0d-a31d-485e99a01fec",
   "bId": "2cb4b2dd-d14b-4bab-a8be-ef4b14845711"
  },
  {
   "a": "Eric Luque",
   "b": "Tara Kramer",
   "team": "Flemington",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.2,
   "avgActual": -4,
   "avgExpected": -3.4,
   "aId": "b3c28078-ab31-4002-9e09-5fa3f627d8c1",
   "bId": "dae62b8e-5f8e-4721-8f41-3218518d1e30"
  },
  {
   "a": "Andrea Smith",
   "b": "Michael Vincent",
   "team": "Home Court",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.2,
   "avgActual": -1.5,
   "avgExpected": -1,
   "aId": "1318bc01-f23f-47da-94cb-ac71b8f3e694",
   "bId": "7f44421c-476c-4857-99ed-3376b32289ca"
  },
  {
   "a": "Oliveira Karen",
   "b": "Jinfa Chen",
   "team": "Montville",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 0.3,
   "avgExpected": 0.7,
   "aId": "80b535f7-a6f6-4905-90ae-69c8695f99be",
   "bId": "b94d06e3-a921-4454-8599-8754c8d14a02"
  },
  {
   "a": "Eric Luque",
   "b": "Christine Papa",
   "team": "Flemington",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.2,
   "avgActual": -1.6,
   "avgExpected": -1.2,
   "aId": "b3c28078-ab31-4002-9e09-5fa3f627d8c1",
   "bId": "d156a552-7fa9-488e-9bfa-745feb859950"
  },
  {
   "a": "Pam Boyd",
   "b": "Marc Harden",
   "team": "ACE",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": -0.2,
   "avgActual": 5,
   "avgExpected": 5.5,
   "aId": "04aefa29-20e3-41b7-a680-19d13f9d4289",
   "bId": "55194d2f-f537-4e19-b901-86c559f25ef2"
  },
  {
   "a": "Rick Derose",
   "b": "Laurence Emerson",
   "team": "APC Garden State",
   "n": 7,
   "w": 0,
   "l": 7,
   "synergy": -0.2,
   "avgActual": -6,
   "avgExpected": -5.7,
   "aId": "823fc9d2-d052-423c-87a9-bd601b54a414",
   "bId": "d1d8de9c-d716-4531-8f30-70742305ac46"
  },
  {
   "a": "Mei Li",
   "b": "Liangang Liu",
   "team": "Stelton Sports",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 2,
   "avgExpected": 2.6,
   "aId": "28330003-3125-4050-be9a-ddd726dccfe2",
   "bId": "34618d40-6e62-4ab3-aa28-fc61c9ac1920"
  },
  {
   "a": "Rick Vazquez",
   "b": "Jeffrey Susskind",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 1.8,
   "avgExpected": 2.1,
   "aId": "e532dafb-ff0f-43fc-82be-687d34ab8c14",
   "bId": "fd8d97f4-ff3e-46e2-aa8f-e5408a6a9e9c"
  },
  {
   "a": "Lance Brown",
   "b": "Amy Chrebet",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 0.7,
   "avgExpected": 1.2,
   "aId": "5d13288d-69fe-4d0b-bf69-51c1d24e3409",
   "bId": "6f511e98-567a-4b33-8831-ed123f01f952"
  },
  {
   "a": "Kate Siedell",
   "b": "Donna Taylor",
   "team": "ACE",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.2,
   "avgActual": 2.8,
   "avgExpected": 3.2,
   "aId": "8decf039-f1e5-4182-b3cf-6756789ae87a",
   "bId": "c17e02c9-4feb-47ce-bf5e-29b03155bf21"
  },
  {
   "a": "Derek Le",
   "b": "Dana Luscombe",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.2,
   "avgActual": 6,
   "avgExpected": 6.4,
   "aId": "8cf7b40c-ed2c-4c8b-83bd-b9f2d486c690",
   "bId": "be6e11f7-09a1-4b1c-af3d-a052b3c36b7f"
  },
  {
   "a": "Kelly Dalsey",
   "b": "Bennett Shanker",
   "team": "APC Garden State",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.2,
   "avgActual": -3.3,
   "avgExpected": -2.8,
   "aId": "4329b94b-0d60-43f1-92ff-3757bc0a03d6",
   "bId": "a86dc96c-b346-460c-a94c-df0551d5027a"
  },
  {
   "a": "Franklin Lupianez",
   "b": "Sharon Streit",
   "team": "Home Court",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.2,
   "avgActual": -4.7,
   "avgExpected": -4.3,
   "aId": "17caef8b-84d4-4052-9695-7c74190925a1",
   "bId": "9f9e5b25-d385-4c12-adb3-233c612619c4"
  },
  {
   "a": "Santhosh Pillai",
   "b": "Marianne Contessa",
   "team": "Monroe",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.2,
   "avgActual": -7,
   "avgExpected": -6.5,
   "aId": "7d25c9f9-c478-402a-9139-cc8781686a8e",
   "bId": "8196ea93-e9b4-4bf6-8b62-c6a25fc84363"
  },
  {
   "a": "Stacy Garretson",
   "b": "Lily Liu",
   "team": "Pickleball Kingdom Hamilton",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 4.4,
   "avgExpected": 4.9,
   "aId": "85dd9a28-a510-493a-bfe4-9cc7d3550ff2",
   "bId": "91f78b3d-a1b7-44a8-a804-6035152bf1a2"
  },
  {
   "a": "Tara Lombardo",
   "b": "Erik Lombardo",
   "team": "Monroe",
   "n": 11,
   "w": 3,
   "l": 8,
   "synergy": -0.3,
   "avgActual": -3.7,
   "avgExpected": -3.3,
   "aId": "77d20dd0-823c-474e-b470-12f69db5a588",
   "bId": "834f3d3e-bde3-4b30-af4c-d1eadb344dfd"
  },
  {
   "a": "Richard Abate",
   "b": "Marvin Lavy",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.3,
   "avgActual": 0.8,
   "avgExpected": 1.3,
   "aId": "a18c309a-f364-4ae6-b06a-7faf4e1c525d",
   "bId": "cc5ae59c-2584-4816-a938-9d03dd590009"
  },
  {
   "a": "Emil Pescatore",
   "b": "Sandeep Malhotra",
   "team": "Home Court",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": -0.3,
   "avgActual": 0,
   "avgExpected": 0.5,
   "aId": "1c9b7abf-dae6-4e0d-a31d-485e99a01fec",
   "bId": "c24596e0-9eeb-4195-b1ff-d4ca3e418d84"
  },
  {
   "a": "Pam Boyd",
   "b": "Robert Finley",
   "team": "ACE",
   "n": 8,
   "w": 7,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 4.4,
   "avgExpected": 4.9,
   "aId": "04aefa29-20e3-41b7-a680-19d13f9d4289",
   "bId": "0d70122a-9002-461f-8600-a9afed2e8c3f"
  },
  {
   "a": "Barbara Hess",
   "b": "Denise Richmond",
   "team": "Flemington",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.3,
   "avgActual": -2.7,
   "avgExpected": -2.2,
   "aId": "21baa2cb-e882-442e-a5e0-a6d88126c9c3",
   "bId": "422cd941-43db-4123-a07e-3316583f51ee"
  },
  {
   "a": "Leon Li",
   "b": "Zhe Ding",
   "team": "Pickleball Kingdom Hamilton",
   "n": 8,
   "w": 2,
   "l": 6,
   "synergy": -0.3,
   "avgActual": -2.7,
   "avgExpected": -2.4,
   "aId": "528de93e-9cf4-480d-a9ba-5b20f6f23f87",
   "bId": "71b536a9-d6d0-46f0-9427-97f761e6bce7"
  },
  {
   "a": "David Osborne",
   "b": "Denise Richmond",
   "team": "Flemington",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.3,
   "avgActual": -0.5,
   "avgExpected": 0,
   "aId": "418e7ba5-3e06-40ec-9b83-19d3bf10c9cb",
   "bId": "422cd941-43db-4123-a07e-3316583f51ee"
  },
  {
   "a": "Jennifer Qian",
   "b": "Jim Peng",
   "team": "Stelton Sports",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -0.3,
   "avgActual": -2.4,
   "avgExpected": -2,
   "aId": "902a9e2d-2ac4-4d19-9ae7-e945ece1da00",
   "bId": "eddc4924-517f-46ac-9827-935983daa9db"
  },
  {
   "a": "Darren Saks",
   "b": "Andrew Hyman",
   "team": "Jersey Pickleball Club",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.3,
   "avgActual": 0.6,
   "avgExpected": 1.2,
   "aId": "9bf7b8ab-4dfa-442b-be12-77580a5ea1dc",
   "bId": "dbda3e07-6332-4467-bdf0-be18b2686573"
  },
  {
   "a": "Sarah Mcparland",
   "b": "George Mandl",
   "team": "Home Court",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.3,
   "avgActual": 0.5,
   "avgExpected": 0.9,
   "aId": "958e8cb9-1c97-4932-b495-29c28578a123",
   "bId": "a0019103-8887-4a15-bbe0-d1c35cdd7b0d"
  },
  {
   "a": "Michael Vincent",
   "b": "Kajal Sinkar",
   "team": "Home Court",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.3,
   "avgActual": -2.5,
   "avgExpected": -1.8,
   "aId": "7f44421c-476c-4857-99ed-3376b32289ca",
   "bId": "9d7f6585-d5f4-44fa-a4f9-24737a072f72"
  },
  {
   "a": "Lara Webb",
   "b": "Howie Steiner",
   "team": "APC Garden State",
   "n": 9,
   "w": 3,
   "l": 6,
   "synergy": -0.3,
   "avgActual": -1,
   "avgExpected": -0.5,
   "aId": "096a6a65-5d60-461f-91ed-d2eafbd7dd76",
   "bId": "5f8dc611-79bf-404d-99fc-f3ea9178d8f0"
  },
  {
   "a": "Nancy Lin",
   "b": "Lily Liu",
   "team": "Pickleball Kingdom Hamilton",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.3,
   "avgActual": -2.7,
   "avgExpected": -2.2,
   "aId": "88bcb8e1-970f-4535-bec1-beb232f1f77a",
   "bId": "91f78b3d-a1b7-44a8-a804-6035152bf1a2"
  },
  {
   "a": "Dave Pellicane",
   "b": "Lei Dong",
   "team": "Stelton Sports",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -0.3,
   "avgActual": -4,
   "avgExpected": -3.5,
   "aId": "2725f46f-cb36-411b-bf79-70611fbda07c",
   "bId": "f9ac936e-7371-4ea9-8a97-7969635046fd"
  },
  {
   "a": "Yang Ruan",
   "b": "Zhe Ding",
   "team": "Pickleball Kingdom Hamilton",
   "n": 14,
   "w": 5,
   "l": 9,
   "synergy": -0.3,
   "avgActual": -1.3,
   "avgExpected": -0.9,
   "aId": "313153f7-7e8f-4e60-9340-0e0d1a43d6be",
   "bId": "71b536a9-d6d0-46f0-9427-97f761e6bce7"
  },
  {
   "a": "Yi Gu",
   "b": "Tim Ahn",
   "team": "Monroe",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -2.8,
   "avgExpected": -2.2,
   "aId": "0640ecce-0b14-4eac-9cbd-be86592d6102",
   "bId": "54431f9b-4785-4c4d-bdf9-94baf6da6a52"
  },
  {
   "a": "Yang Ruan",
   "b": "Jamie Sandman",
   "team": "Pickleball Kingdom Hamilton",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -0.3,
   "avgActual": -2.3,
   "avgExpected": -1.8,
   "aId": "313153f7-7e8f-4e60-9340-0e0d1a43d6be",
   "bId": "33ab547b-ef45-48f8-baa6-be7ad9e29b67"
  },
  {
   "a": "Kate Curren",
   "b": "Alex Lee",
   "team": "Pickleball Palace",
   "n": 8,
   "w": 7,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 7.5,
   "avgExpected": 8,
   "aId": "20e006d9-72f9-4f9e-bad5-750694224782",
   "bId": "22e2201d-16d7-4474-847b-5f4f0cef44e6"
  },
  {
   "a": "Susan Ackley",
   "b": "Art Muth",
   "team": "Flemington",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 2.7,
   "avgExpected": 3.4,
   "aId": "07a0e948-6308-4920-a6a8-1d5945552ecb",
   "bId": "6bfc3a49-53cb-4c03-b8cb-94552158ccbe"
  },
  {
   "a": "Meryl Nadler",
   "b": "Joe Palumbo",
   "team": "Jersey Pickleball Club",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -0.3,
   "avgActual": -1.4,
   "avgExpected": -0.9,
   "aId": "90987b97-d181-4c15-9c7c-e0bebff4e9b0",
   "bId": "b39664c3-1a6e-4493-968f-6e7f7939f694"
  },
  {
   "a": "Liz Cuozzo",
   "b": "Joe Palumbo",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.3,
   "avgActual": -1,
   "avgExpected": -0.4,
   "aId": "2b2d474d-281c-42d7-854b-6bfe32f20563",
   "bId": "b39664c3-1a6e-4493-968f-6e7f7939f694"
  },
  {
   "a": "Nicole Nelson",
   "b": "Dint Moore",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -5.7,
   "avgExpected": -5,
   "aId": "2e2b7732-48a3-4102-86f9-555111fa9ae8",
   "bId": "53e6f48d-1702-4121-9bae-8809c365e5c6"
  },
  {
   "a": "Yi Gu",
   "b": "Guy Ohn",
   "team": "Monroe",
   "n": 9,
   "w": 4,
   "l": 5,
   "synergy": -0.4,
   "avgActual": -0.9,
   "avgExpected": -0.3,
   "aId": "0640ecce-0b14-4eac-9cbd-be86592d6102",
   "bId": "f394b637-236e-4fee-b26f-374c90c3dd1e"
  },
  {
   "a": "Kate Siedell",
   "b": "Ed Hutchinson",
   "team": "ACE",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.4,
   "avgActual": 4,
   "avgExpected": 5,
   "aId": "8decf039-f1e5-4182-b3cf-6756789ae87a",
   "bId": "ab2b30c5-ffb3-4863-b7a2-af2272f13452"
  },
  {
   "a": "Jack Brod",
   "b": "Albert Pamudji",
   "team": "Pickleball Kingdom Hamilton",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.4,
   "avgActual": -4.7,
   "avgExpected": -4,
   "aId": "015b5d91-0510-4901-9180-a9f68d22a421",
   "bId": "f8c55797-409c-4cf0-a2d5-241ec95f60b2"
  },
  {
   "a": "Santhosh Pillai",
   "b": "Guy Ohn",
   "team": "Monroe",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": -0.4,
   "avgActual": 1.9,
   "avgExpected": 2.5,
   "aId": "7d25c9f9-c478-402a-9139-cc8781686a8e",
   "bId": "f394b637-236e-4fee-b26f-374c90c3dd1e"
  },
  {
   "a": "Laura Elleman",
   "b": "Chris Heimerle",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.4,
   "avgActual": -1.7,
   "avgExpected": -0.8,
   "aId": "3e6056c2-7c5b-4123-b457-ffcf82d3b422",
   "bId": "fc870151-9569-4e09-883d-c81e9cfaf6d8"
  },
  {
   "a": "Peter Chen",
   "b": "Liangjie Zhu",
   "team": "Montville",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.4,
   "avgActual": -0.7,
   "avgExpected": 0.3,
   "aId": "8767c73e-fa5a-4e68-9ded-850b7ab50693",
   "bId": "972856ec-207d-4f89-9d97-6fda7c0e083b"
  },
  {
   "a": "Yang Wang",
   "b": "Vita Mulholland",
   "team": "APC Garden State",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.4,
   "avgActual": -1.3,
   "avgExpected": -0.5,
   "aId": "389300d9-75bf-4c93-9fbc-cab6881f49b4",
   "bId": "fe0555e5-2ec9-4dc2-a44b-4017d5afbb41"
  },
  {
   "a": "Katherine Maruyama",
   "b": "Tera Baccile",
   "team": "Bounce Malvern",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": -0.4,
   "avgActual": 5.7,
   "avgExpected": 6.3,
   "aId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a",
   "bId": "d5aa92c7-71df-47c7-84fb-6710e1ed81e2"
  },
  {
   "a": "Jim Darcangelo",
   "b": "Derek Le",
   "team": "Bounce Malvern",
   "n": 9,
   "w": 6,
   "l": 3,
   "synergy": -0.4,
   "avgActual": 1.6,
   "avgExpected": 2.2,
   "aId": "0530512b-466d-4ff7-9e89-7961b4a63110",
   "bId": "8cf7b40c-ed2c-4c8b-83bd-b9f2d486c690"
  },
  {
   "a": "Hayley Yandoli",
   "b": "Tim Ahn",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.4,
   "avgActual": -3,
   "avgExpected": -2.1,
   "aId": "1fc2dd51-135b-46d6-91ef-9291b573e78a",
   "bId": "54431f9b-4785-4c4d-bdf9-94baf6da6a52"
  },
  {
   "a": "Derek Le",
   "b": "Tera Baccile",
   "team": "Bounce Malvern",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -0.4,
   "avgActual": 1.8,
   "avgExpected": 2.6,
   "aId": "8cf7b40c-ed2c-4c8b-83bd-b9f2d486c690",
   "bId": "d5aa92c7-71df-47c7-84fb-6710e1ed81e2"
  },
  {
   "a": "Michael Vincent",
   "b": "Sharon Streit",
   "team": "Home Court",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -2.3,
   "avgExpected": -1.3,
   "aId": "7f44421c-476c-4857-99ed-3376b32289ca",
   "bId": "9f9e5b25-d385-4c12-adb3-233c612619c4"
  },
  {
   "a": "Hayley Yandoli",
   "b": "Erik Lombardo",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.4,
   "avgActual": -1.7,
   "avgExpected": -0.8,
   "aId": "1fc2dd51-135b-46d6-91ef-9291b573e78a",
   "bId": "834f3d3e-bde3-4b30-af4c-d1eadb344dfd"
  },
  {
   "a": "Johnson Chang",
   "b": "Brian Gonzalez",
   "team": "Pickleball Palace",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -0.4,
   "avgActual": 1,
   "avgExpected": 1.6,
   "aId": "6994f1c2-d156-436a-bbb6-e9e348bea33a",
   "bId": "ecc02ab8-5e9c-4950-89b7-be3f397683c3"
  },
  {
   "a": "Susan St. Pierre",
   "b": "Rui Zhang",
   "team": "Stelton Sports",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.4,
   "avgActual": 2,
   "avgExpected": 2.9,
   "aId": "001c2d38-829b-4fd0-b249-472f78337387",
   "bId": "c218d668-b78a-4726-b2df-fe7730a50963"
  },
  {
   "a": "Leon Li",
   "b": "Lucy Li",
   "team": "Pickleball Kingdom Hamilton",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.4,
   "avgActual": -4.5,
   "avgExpected": -3.6,
   "aId": "528de93e-9cf4-480d-a9ba-5b20f6f23f87",
   "bId": "d22f8b69-76a6-41e0-8b04-c5dae68d9f69"
  },
  {
   "a": "Jack Brod",
   "b": "Jamie Sandman",
   "team": "Pickleball Kingdom Hamilton",
   "n": 14,
   "w": 5,
   "l": 9,
   "synergy": -0.5,
   "avgActual": -2.1,
   "avgExpected": -1.5,
   "aId": "015b5d91-0510-4901-9180-a9f68d22a421",
   "bId": "33ab547b-ef45-48f8-baa6-be7ad9e29b67"
  },
  {
   "a": "Laura Sweet",
   "b": "Vita Mulholland",
   "team": "APC Garden State",
   "n": 8,
   "w": 2,
   "l": 6,
   "synergy": -0.5,
   "avgActual": -4.1,
   "avgExpected": -3.4,
   "aId": "7b7b29be-c4b7-4ca9-8fd9-77ec362e761b",
   "bId": "fe0555e5-2ec9-4dc2-a44b-4017d5afbb41"
  },
  {
   "a": "Howie Steiner",
   "b": "Laura Sweet",
   "team": "APC Garden State",
   "n": 14,
   "w": 5,
   "l": 9,
   "synergy": -0.5,
   "avgActual": -2.2,
   "avgExpected": -1.5,
   "aId": "5f8dc611-79bf-404d-99fc-f3ea9178d8f0",
   "bId": "7b7b29be-c4b7-4ca9-8fd9-77ec362e761b"
  },
  {
   "a": "Rui Zhang",
   "b": "Shaoyi Sun",
   "team": "Stelton Sports",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.5,
   "avgActual": -1.8,
   "avgExpected": -0.9,
   "aId": "c218d668-b78a-4726-b2df-fe7730a50963",
   "bId": "fb20f45d-7f81-4d2a-a258-eede4cdec27b"
  },
  {
   "a": "Liangjie Zhu",
   "b": "Jeffrey Heil",
   "team": "Montville",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.5,
   "avgActual": 1.7,
   "avgExpected": 2.7,
   "aId": "972856ec-207d-4f89-9d97-6fda7c0e083b",
   "bId": "d44c4151-84f7-4ec8-9e48-420a627107fd"
  },
  {
   "a": "Barbara Hess",
   "b": "Bob Castellano",
   "team": "Flemington",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -7,
   "avgExpected": -5.8,
   "aId": "21baa2cb-e882-442e-a5e0-a6d88126c9c3",
   "bId": "7bb24154-bd52-4081-a3e6-0b8afcde62d5"
  },
  {
   "a": "Kate Siedell",
   "b": "Elyse Diamond",
   "team": "ACE",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.5,
   "avgActual": 0.4,
   "avgExpected": 1.4,
   "aId": "8decf039-f1e5-4182-b3cf-6756789ae87a",
   "bId": "a0c9637b-5b23-4797-a46a-d2df7bb0fae9"
  },
  {
   "a": "Marc Harden",
   "b": "Stacey Frank",
   "team": "ACE",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.5,
   "avgActual": 4.3,
   "avgExpected": 5.4,
   "aId": "55194d2f-f537-4e19-b901-86c559f25ef2",
   "bId": "768c88bd-683d-4204-8124-a589c8028b6e"
  },
  {
   "a": "Scott Rubin",
   "b": "Sue Johnson",
   "team": "Flemington",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -6.7,
   "avgExpected": -5.4,
   "aId": "c12175df-b959-4efe-95e7-e5298b783da8",
   "bId": "c6046610-1dba-4bad-bc89-57e5baa0983f"
  },
  {
   "a": "Rosalyn Goldsmith",
   "b": "Darren Saks",
   "team": "Jersey Pickleball Club",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.5,
   "avgActual": 0,
   "avgExpected": 0.9,
   "aId": "545c12c3-3098-47ca-b35e-429f37f481f5",
   "bId": "9bf7b8ab-4dfa-442b-be12-77580a5ea1dc"
  },
  {
   "a": "Michael Swell",
   "b": "Joe Palumbo",
   "team": "Jersey Pickleball Club",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -0.5,
   "avgActual": 2,
   "avgExpected": 2.7,
   "aId": "5436acd1-542a-4ca5-a652-c0addcf23ea2",
   "bId": "b39664c3-1a6e-4493-968f-6e7f7939f694"
  },
  {
   "a": "Amanda Brouillard",
   "b": "Louis Vessichelli",
   "team": "Montville",
   "n": 10,
   "w": 2,
   "l": 8,
   "synergy": -0.5,
   "avgActual": -1.8,
   "avgExpected": -1,
   "aId": "2b29199f-62de-4125-a014-dd9f9e612cb1",
   "bId": "cb8c8404-c482-4fe5-bd01-35b348fccfd4"
  },
  {
   "a": "Denise Richmond",
   "b": "Carol Mastroianni",
   "team": "Flemington",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -0.5,
   "avgActual": -3,
   "avgExpected": -2.1,
   "aId": "422cd941-43db-4123-a07e-3316583f51ee",
   "bId": "7f851011-9322-43f9-aff2-754565a615c7"
  },
  {
   "a": "Michael Barninger",
   "b": "Robert Huntley",
   "team": "Home Court",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.5,
   "avgActual": -2.4,
   "avgExpected": -1.5,
   "aId": "330f9632-9de4-4574-810a-1923f34d7ca6",
   "bId": "b5dec967-9e3a-49b4-b136-597711d099cc"
  },
  {
   "a": "Jim Darcangelo",
   "b": "Stephanie Woomer",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.5,
   "avgActual": 3.5,
   "avgExpected": 4.5,
   "aId": "0530512b-466d-4ff7-9e89-7961b4a63110",
   "bId": "e05f57f5-c898-404e-b86f-c2460cc23b06"
  },
  {
   "a": "Kate Siedell",
   "b": "Sang Nguyen",
   "team": "ACE",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": -0.5,
   "avgActual": 3.3,
   "avgExpected": 4.1,
   "aId": "8decf039-f1e5-4182-b3cf-6756789ae87a",
   "bId": "cbdf396a-6766-42d5-8fdb-d8011cbcace8"
  },
  {
   "a": "Michael Barninger",
   "b": "George Mandl",
   "team": "Home Court",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.5,
   "avgActual": -4,
   "avgExpected": -3.1,
   "aId": "330f9632-9de4-4574-810a-1923f34d7ca6",
   "bId": "a0019103-8887-4a15-bbe0-d1c35cdd7b0d"
  },
  {
   "a": "Jeff Lorman",
   "b": "Stacey Frank",
   "team": "ACE",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.5,
   "avgActual": 2,
   "avgExpected": 3.1,
   "aId": "75789bbc-0dde-460e-b905-7bd1189c6a90",
   "bId": "768c88bd-683d-4204-8124-a589c8028b6e"
  },
  {
   "a": "Margaret Weidlich",
   "b": "George Mandl",
   "team": "Home Court",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -3.3,
   "avgExpected": -2.2,
   "aId": "7021e97f-1e5e-4adb-ac80-1a9c919caba6",
   "bId": "a0019103-8887-4a15-bbe0-d1c35cdd7b0d"
  },
  {
   "a": "Laura Sweet",
   "b": "Laurence Emerson",
   "team": "APC Garden State",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -4.2,
   "avgExpected": -3.2,
   "aId": "7b7b29be-c4b7-4ca9-8fd9-77ec362e761b",
   "bId": "d1d8de9c-d716-4531-8f30-70742305ac46"
  },
  {
   "a": "Brian Caine",
   "b": "Cynthia Covie",
   "team": "APC Garden State",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -4,
   "avgExpected": -2.7,
   "aId": "7d0e32ca-3e4e-455f-968c-f5d427efeacb",
   "bId": "b146d15b-2ed7-4087-a6a0-90d4538aea72"
  },
  {
   "a": "Lori Flickinger",
   "b": "Cynthia Covie",
   "team": "APC Garden State",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -2.3,
   "avgExpected": -1.1,
   "aId": "7be2e586-5d71-40e2-b708-c862448e40da",
   "bId": "b146d15b-2ed7-4087-a6a0-90d4538aea72"
  },
  {
   "a": "Keith Goldberg",
   "b": "Katherine Maruyama",
   "team": "Bounce Malvern",
   "n": 10,
   "w": 8,
   "l": 2,
   "synergy": -0.6,
   "avgActual": 5.8,
   "avgExpected": 6.6,
   "aId": "37a0fa2c-df0b-4d92-900b-a9f20f441ad8",
   "bId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a"
  },
  {
   "a": "Margaret Weidlich",
   "b": "Christine Chwe",
   "team": "Home Court",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -3.7,
   "avgExpected": -2.2,
   "aId": "7021e97f-1e5e-4adb-ac80-1a9c919caba6",
   "bId": "fedc1fc4-c949-46e7-b435-5c343ba66635"
  },
  {
   "a": "Karan Pescatore",
   "b": "Margaret Weidlich",
   "team": "Home Court",
   "n": 9,
   "w": 4,
   "l": 5,
   "synergy": -0.6,
   "avgActual": -0.4,
   "avgExpected": 0.4,
   "aId": "2cb4b2dd-d14b-4bab-a8be-ef4b14845711",
   "bId": "7021e97f-1e5e-4adb-ac80-1a9c919caba6"
  },
  {
   "a": "Liangjie Zhu",
   "b": "Ronnie Yin",
   "team": "Montville",
   "n": 12,
   "w": 8,
   "l": 4,
   "synergy": -0.6,
   "avgActual": 1.8,
   "avgExpected": 2.6,
   "aId": "972856ec-207d-4f89-9d97-6fda7c0e083b",
   "bId": "988636eb-4604-44d6-af70-2732b787ec2a"
  },
  {
   "a": "Evelyn Du",
   "b": "Louis Vessichelli",
   "team": "Montville",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -2.3,
   "avgExpected": -1,
   "aId": "08547f36-c938-4f82-a783-9c89ab07500c",
   "bId": "cb8c8404-c482-4fe5-bd01-35b348fccfd4"
  },
  {
   "a": "Sam Zhou",
   "b": "Shaoyi Sun",
   "team": "Stelton Sports",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": -0.6,
   "avgActual": -3.5,
   "avgExpected": -2.5,
   "aId": "dcc4f317-c0ad-4878-8540-d8aa3aa53d8a",
   "bId": "fb20f45d-7f81-4d2a-a258-eede4cdec27b"
  },
  {
   "a": "Steven Gregov",
   "b": "Eric Luque",
   "team": "Flemington",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.6,
   "avgActual": -1.7,
   "avgExpected": -0.7,
   "aId": "3efad314-83fb-4441-a7bf-510228cea1f8",
   "bId": "b3c28078-ab31-4002-9e09-5fa3f627d8c1"
  },
  {
   "a": "Marc Pellicane",
   "b": "Sandy Alkins",
   "team": "ACE",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.6,
   "avgActual": 4.7,
   "avgExpected": 6,
   "aId": "1c13f01f-aeb7-45db-9faf-a6567d22bb81",
   "bId": "9c29c52b-9d2a-4a5f-b967-7bafd018446b"
  },
  {
   "a": "Tracey Collins",
   "b": "Paula Cushing",
   "team": "Monroe",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -8.7,
   "avgExpected": -7.4,
   "aId": "f01a9ccb-b72e-4980-bdc0-73ed5a72f92c",
   "bId": "f8a42c6f-43b2-4769-b0ed-a1d648353e04"
  },
  {
   "a": "Tim Ahn",
   "b": "Guy Ohn",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.6,
   "avgActual": 4,
   "avgExpected": 5.5,
   "aId": "54431f9b-4785-4c4d-bdf9-94baf6da6a52",
   "bId": "f394b637-236e-4fee-b26f-374c90c3dd1e"
  },
  {
   "a": "Michael Finkelstein",
   "b": "Vicki Main",
   "team": "Bounce Malvern",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": -0.6,
   "avgActual": 1.9,
   "avgExpected": 2.8,
   "aId": "861c3f68-2c96-4a96-a75e-645020f73a5c",
   "bId": "89bdcff6-2fba-4bde-b831-872bf9ce7843"
  },
  {
   "a": "Michael Dombrowiecki",
   "b": "Natasha De Carvalho",
   "team": "Jersey Pickleball Club",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -0.2,
   "avgExpected": 1,
   "aId": "3ac34ef1-17a5-4ab6-8d17-be4bd5a0a040",
   "bId": "462f3a15-22ed-4fa3-b698-78678a5d6966"
  },
  {
   "a": "Mei Li",
   "b": "Jennifer Qian",
   "team": "Stelton Sports",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": -0.6,
   "avgActual": 0.7,
   "avgExpected": 1.7,
   "aId": "28330003-3125-4050-be9a-ddd726dccfe2",
   "bId": "902a9e2d-2ac4-4d19-9ae7-e945ece1da00"
  },
  {
   "a": "Fabienne Yu",
   "b": "Ted Lee",
   "team": "Pickleball Kingdom Hamilton",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -4,
   "avgExpected": -2.7,
   "aId": "943ac52a-070f-4bdc-baf8-efe14d0f40ea",
   "bId": "f6d91a04-e692-4905-96a6-968175585586"
  },
  {
   "a": "Kristen Soucie",
   "b": "Scott Rubin",
   "team": "Flemington",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -1,
   "avgExpected": 0.4,
   "aId": "8ebf2370-8a82-495e-97ea-5168dd2b14c4",
   "bId": "c12175df-b959-4efe-95e7-e5298b783da8"
  },
  {
   "a": "Christine Papa",
   "b": "Aimee Castellano",
   "team": "Flemington",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -1,
   "avgExpected": 0.1,
   "aId": "d156a552-7fa9-488e-9bfa-745feb859950",
   "bId": "e76985fb-efd1-4180-a340-e4f36abbc8b4"
  },
  {
   "a": "Amy Chrebet",
   "b": "Andrew Hyman",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -3.7,
   "avgExpected": -2.3,
   "aId": "6f511e98-567a-4b33-8831-ed123f01f952",
   "bId": "dbda3e07-6332-4467-bdf0-be18b2686573"
  },
  {
   "a": "Bennett Shanker",
   "b": "Laurence Emerson",
   "team": "APC Garden State",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -3.2,
   "avgExpected": -2.1,
   "aId": "a86dc96c-b346-460c-a94c-df0551d5027a",
   "bId": "d1d8de9c-d716-4531-8f30-70742305ac46"
  },
  {
   "a": "Karan Pescatore",
   "b": "Sharon Streit",
   "team": "Home Court",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.6,
   "avgActual": 0.3,
   "avgExpected": 1.6,
   "aId": "2cb4b2dd-d14b-4bab-a8be-ef4b14845711",
   "bId": "9f9e5b25-d385-4c12-adb3-233c612619c4"
  },
  {
   "a": "Naresh Malhotra",
   "b": "Andrea Mui",
   "team": "Monroe",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -5.7,
   "avgExpected": -4.2,
   "aId": "732686cf-d4c9-4a45-a966-451f07bd3115",
   "bId": "7a1f2b24-7109-4933-9428-c8fef6eb8348"
  },
  {
   "a": "Susan Ackley",
   "b": "Barbara Hess",
   "team": "Flemington",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": -0.6,
   "avgActual": 4,
   "avgExpected": 5.3,
   "aId": "07a0e948-6308-4920-a6a8-1d5945552ecb",
   "bId": "21baa2cb-e882-442e-a5e0-a6d88126c9c3"
  },
  {
   "a": "Susan St. Pierre",
   "b": "Sara Wiggert",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -4,
   "avgExpected": -2.5,
   "aId": "001c2d38-829b-4fd0-b249-472f78337387",
   "bId": "6cf82c92-fdfb-46bc-bad1-beec6ab96691"
  },
  {
   "a": "Kevin Sheehan",
   "b": "Liangjie Zhu",
   "team": "Montville",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.6,
   "avgActual": 1,
   "avgExpected": 2.4,
   "aId": "115f3958-d110-41f0-a04c-aa2f8e17a54f",
   "bId": "972856ec-207d-4f89-9d97-6fda7c0e083b"
  },
  {
   "a": "Wally Liu",
   "b": "Albert Pamudji",
   "team": "Pickleball Kingdom Hamilton",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -9,
   "avgExpected": -7.7,
   "aId": "0a36460a-ac00-4501-8a7f-9b217bfbddc7",
   "bId": "f8c55797-409c-4cf0-a2d5-241ec95f60b2"
  },
  {
   "a": "Andrea Mui",
   "b": "Eliezer Mintz",
   "team": "Monroe",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -5.7,
   "avgExpected": -4.1,
   "aId": "7a1f2b24-7109-4933-9428-c8fef6eb8348",
   "bId": "832fb271-fb5e-43aa-b442-95c03fb78342"
  },
  {
   "a": "Hayley Yandoli",
   "b": "Andrea Mui",
   "team": "Monroe",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -4.7,
   "avgExpected": -3,
   "aId": "1fc2dd51-135b-46d6-91ef-9291b573e78a",
   "bId": "7a1f2b24-7109-4933-9428-c8fef6eb8348"
  },
  {
   "a": "Brian Gonzalez",
   "b": "Kelly Hanson Word",
   "team": "Pickleball Palace",
   "n": 8,
   "w": 8,
   "l": 0,
   "synergy": -0.7,
   "avgActual": 5.6,
   "avgExpected": 6.7,
   "aId": "ecc02ab8-5e9c-4950-89b7-be3f397683c3",
   "bId": "ecfbb129-ba7d-4b52-92b9-869fa7487248"
  },
  {
   "a": "Kate Curren",
   "b": "Rick Vazquez",
   "team": "Pickleball Palace",
   "n": 10,
   "w": 8,
   "l": 2,
   "synergy": -0.7,
   "avgActual": 3.4,
   "avgExpected": 4.4,
   "aId": "20e006d9-72f9-4f9e-bad5-750694224782",
   "bId": "e532dafb-ff0f-43fc-82be-687d34ab8c14"
  },
  {
   "a": "Jennifer Burke",
   "b": "Kate Curren",
   "team": "Pickleball Palace",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.7,
   "avgActual": 2,
   "avgExpected": 3.3,
   "aId": "18bcc459-8067-4650-ad73-3183fae3ea1f",
   "bId": "20e006d9-72f9-4f9e-bad5-750694224782"
  },
  {
   "a": "Sandeep Malhotra",
   "b": "Christine Chwe",
   "team": "Home Court",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -4.3,
   "avgExpected": -2.7,
   "aId": "c24596e0-9eeb-4195-b1ff-d4ca3e418d84",
   "bId": "fedc1fc4-c949-46e7-b435-5c343ba66635"
  },
  {
   "a": "Jeff Lorman",
   "b": "Kate Siedell",
   "team": "ACE",
   "n": 6,
   "w": 6,
   "l": 0,
   "synergy": -0.7,
   "avgActual": 5.5,
   "avgExpected": 6.6,
   "aId": "75789bbc-0dde-460e-b905-7bd1189c6a90",
   "bId": "8decf039-f1e5-4182-b3cf-6756789ae87a"
  },
  {
   "a": "Brad Daddis",
   "b": "Stacey Frank",
   "team": "ACE",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.7,
   "avgActual": 2.2,
   "avgExpected": 3.5,
   "aId": "3b22e073-2c4b-4245-a142-29441ec509a3",
   "bId": "768c88bd-683d-4204-8124-a589c8028b6e"
  },
  {
   "a": "Yaowen Li",
   "b": "Frank Ding",
   "team": "Pickleball Kingdom Hamilton",
   "n": 9,
   "w": 6,
   "l": 3,
   "synergy": -0.7,
   "avgActual": 1,
   "avgExpected": 2,
   "aId": "b0747e45-3190-47d6-97ef-8bb041bf0ba8",
   "bId": "f83efefa-b8dd-49c2-90a1-9baa1e03315b"
  },
  {
   "a": "Rosalyn Goldsmith",
   "b": "Brad Oldham",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -2.7,
   "avgExpected": -1.1,
   "aId": "545c12c3-3098-47ca-b35e-429f37f481f5",
   "bId": "965b56ee-6fb4-4bd1-9708-8ced2c5dd9a2"
  },
  {
   "a": "Lance Brown",
   "b": "Andrew Hyman",
   "team": "Jersey Pickleball Club",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -1.6,
   "avgExpected": -0.3,
   "aId": "5d13288d-69fe-4d0b-bf69-51c1d24e3409",
   "bId": "dbda3e07-6332-4467-bdf0-be18b2686573"
  },
  {
   "a": "John Burke",
   "b": "Andrea Dellechiaie",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -2.7,
   "avgExpected": -1.1,
   "aId": "31e2f010-7d86-4706-a172-d0936f4421f0",
   "bId": "84e4d40d-3b98-4822-b073-e9dc71c0d4d7"
  },
  {
   "a": "Franklin Lupianez",
   "b": "Robert Huntley",
   "team": "Home Court",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -3.7,
   "avgExpected": -2.1,
   "aId": "17caef8b-84d4-4052-9695-7c74190925a1",
   "bId": "b5dec967-9e3a-49b4-b136-597711d099cc"
  },
  {
   "a": "Sarah Mcparland",
   "b": "Kajal Sinkar",
   "team": "Home Court",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.7,
   "avgActual": -0.7,
   "avgExpected": 0.6,
   "aId": "958e8cb9-1c97-4932-b495-29c28578a123",
   "bId": "9d7f6585-d5f4-44fa-a4f9-24737a072f72"
  },
  {
   "a": "Michael Dieterle",
   "b": "Vicki Main",
   "team": "Bounce Malvern",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -0.7,
   "avgActual": 1.8,
   "avgExpected": 3.1,
   "aId": "4259501c-f1e3-4859-acd0-c25f342a1b92",
   "bId": "89bdcff6-2fba-4bde-b831-872bf9ce7843"
  },
  {
   "a": "Bennett Shanker",
   "b": "Cynthia Covie",
   "team": "APC Garden State",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -1.7,
   "avgExpected": -0.3,
   "aId": "a86dc96c-b346-460c-a94c-df0551d5027a",
   "bId": "b146d15b-2ed7-4087-a6a0-90d4538aea72"
  },
  {
   "a": "Marc Padre",
   "b": "David Shapiro",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -2.3,
   "avgExpected": -0.8,
   "aId": "a131a707-f20e-4838-9dcf-7cecb40c2705",
   "bId": "c39cd158-0c19-4819-8653-18084e6ce982"
  },
  {
   "a": "Richard Abate",
   "b": "Abraham Telechanski",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 8,
   "w": 3,
   "l": 5,
   "synergy": -0.8,
   "avgActual": 0,
   "avgExpected": 1.2,
   "aId": "a18c309a-f364-4ae6-b06a-7faf4e1c525d",
   "bId": "e022118e-9373-4e2a-94f6-391f4fb84a54"
  },
  {
   "a": "Michael Dombrowiecki",
   "b": "Alice Napolitano",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.8,
   "avgActual": 0,
   "avgExpected": 1.5,
   "aId": "3ac34ef1-17a5-4ab6-8d17-be4bd5a0a040",
   "bId": "d56483b8-a5b8-4c1f-8437-39fcf90a5030"
  },
  {
   "a": "Mengchu Zhou",
   "b": "Mei Li",
   "team": "Stelton Sports",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.8,
   "avgActual": -0.7,
   "avgExpected": 0.9,
   "aId": "14fc7872-1e6f-419e-adcb-d8e63826a37d",
   "bId": "28330003-3125-4050-be9a-ddd726dccfe2"
  },
  {
   "a": "Eliezer Mintz",
   "b": "Tracey Collins",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.8,
   "avgActual": -3,
   "avgExpected": -1.1,
   "aId": "832fb271-fb5e-43aa-b442-95c03fb78342",
   "bId": "f01a9ccb-b72e-4980-bdc0-73ed5a72f92c"
  },
  {
   "a": "Michael Dieterle",
   "b": "Derek Le",
   "team": "Bounce Malvern",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": -0.8,
   "avgActual": 0.6,
   "avgExpected": 1.8,
   "aId": "4259501c-f1e3-4859-acd0-c25f342a1b92",
   "bId": "8cf7b40c-ed2c-4c8b-83bd-b9f2d486c690"
  },
  {
   "a": "Art Muth",
   "b": "Marc Friedman",
   "team": "Flemington",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -0.8,
   "avgActual": -2.7,
   "avgExpected": -1.4,
   "aId": "6bfc3a49-53cb-4c03-b8cb-94552158ccbe",
   "bId": "d7bdde76-1007-4b20-a804-4efcd08c3598"
  },
  {
   "a": "Naresh Malhotra",
   "b": "Paula Cushing",
   "team": "Monroe",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -5,
   "avgExpected": -3.4,
   "aId": "732686cf-d4c9-4a45-a966-451f07bd3115",
   "bId": "f8a42c6f-43b2-4769-b0ed-a1d648353e04"
  },
  {
   "a": "Suzanne \"Zan\" Davies",
   "b": "Liangang Liu",
   "team": "Stelton Sports",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.8,
   "avgActual": -2.3,
   "avgExpected": -0.5,
   "aId": "25b25938-9a27-4d08-97c1-6db7a6b7ff24",
   "bId": "34618d40-6e62-4ab3-aa28-fc61c9ac1920"
  },
  {
   "a": "Natasha De Carvalho",
   "b": "Amy Chrebet",
   "team": "Jersey Pickleball Club",
   "n": 8,
   "w": 2,
   "l": 6,
   "synergy": -0.8,
   "avgActual": -4.1,
   "avgExpected": -2.9,
   "aId": "462f3a15-22ed-4fa3-b698-78678a5d6966",
   "bId": "6f511e98-567a-4b33-8831-ed123f01f952"
  },
  {
   "a": "Eric Luque",
   "b": "Scott Rubin",
   "team": "Flemington",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -5,
   "avgExpected": -3.2,
   "aId": "b3c28078-ab31-4002-9e09-5fa3f627d8c1",
   "bId": "c12175df-b959-4efe-95e7-e5298b783da8"
  },
  {
   "a": "Sara Wiggert",
   "b": "Richard Abate",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.8,
   "avgActual": -3.7,
   "avgExpected": -1.9,
   "aId": "6cf82c92-fdfb-46bc-bad1-beec6ab96691",
   "bId": "a18c309a-f364-4ae6-b06a-7faf4e1c525d"
  },
  {
   "a": "Amanda Brouillard",
   "b": "Liangjie Zhu",
   "team": "Montville",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -0.8,
   "avgExpected": 0.6,
   "aId": "2b29199f-62de-4125-a014-dd9f9e612cb1",
   "bId": "972856ec-207d-4f89-9d97-6fda7c0e083b"
  },
  {
   "a": "Yang Wang",
   "b": "Jiyun Yuh",
   "team": "APC Garden State",
   "n": 8,
   "w": 0,
   "l": 8,
   "synergy": -0.9,
   "avgActual": -4.7,
   "avgExpected": -3.4,
   "aId": "389300d9-75bf-4c93-9fbc-cab6881f49b4",
   "bId": "c94ae231-9f0c-4212-b769-7bd708d8fc38"
  },
  {
   "a": "Yang Wang",
   "b": "Brian Caine",
   "team": "APC Garden State",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.9,
   "avgActual": -1.8,
   "avgExpected": -0.1,
   "aId": "389300d9-75bf-4c93-9fbc-cab6881f49b4",
   "bId": "7d0e32ca-3e4e-455f-968c-f5d427efeacb"
  },
  {
   "a": "Michael Dieterle",
   "b": "Dana Luscombe",
   "team": "Bounce Malvern",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -0.9,
   "avgActual": 2.8,
   "avgExpected": 4.5,
   "aId": "4259501c-f1e3-4859-acd0-c25f342a1b92",
   "bId": "be6e11f7-09a1-4b1c-af3d-a052b3c36b7f"
  },
  {
   "a": "Yi Gu",
   "b": "Sarah Flynn",
   "team": "Monroe",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -5.7,
   "avgExpected": -3.8,
   "aId": "0640ecce-0b14-4eac-9cbd-be86592d6102",
   "bId": "29b01229-f7ed-4692-bdb4-32926b8a7cc5"
  },
  {
   "a": "Marc Padre",
   "b": "Abraham Telechanski",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 11,
   "w": 8,
   "l": 3,
   "synergy": -0.9,
   "avgActual": 1.3,
   "avgExpected": 2.6,
   "aId": "a131a707-f20e-4838-9dcf-7cecb40c2705",
   "bId": "e022118e-9373-4e2a-94f6-391f4fb84a54"
  },
  {
   "a": "John Burke",
   "b": "Bud Heller",
   "team": "Pickleball Palace",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.9,
   "avgActual": -4.2,
   "avgExpected": -2.6,
   "aId": "31e2f010-7d86-4706-a172-d0936f4421f0",
   "bId": "9282b1b2-6551-481c-b9b8-2a246a49a621"
  },
  {
   "a": "Lance Brown",
   "b": "Pam Friedman",
   "team": "Jersey Pickleball Club",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.9,
   "avgActual": -3.4,
   "avgExpected": -1.8,
   "aId": "5d13288d-69fe-4d0b-bf69-51c1d24e3409",
   "bId": "94d51b2d-359c-450c-b1c8-728944462b01"
  },
  {
   "a": "Kristen Silvestri",
   "b": "Andre Yang",
   "team": "Montville",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.9,
   "avgActual": -2,
   "avgExpected": 0.1,
   "aId": "035a8041-2b2d-4050-a71d-9a8e7fb1b5e6",
   "bId": "b9cede07-396d-42c4-84f3-c0e66ecb8f71"
  },
  {
   "a": "Anita Bobba",
   "b": "Sandeep Malhotra",
   "team": "Home Court",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.9,
   "avgActual": 0.3,
   "avgExpected": 2.3,
   "aId": "abc68487-3415-49a2-bdfb-dd56eb5af20d",
   "bId": "c24596e0-9eeb-4195-b1ff-d4ca3e418d84"
  },
  {
   "a": "Zhe Ding",
   "b": "Ted Lee",
   "team": "Pickleball Kingdom Hamilton",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -6.7,
   "avgExpected": -4.5,
   "aId": "71b536a9-d6d0-46f0-9427-97f761e6bce7",
   "bId": "f6d91a04-e692-4905-96a6-968175585586"
  },
  {
   "a": "Johnson Chang",
   "b": "Kelly Hanson Word",
   "team": "Pickleball Palace",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.9,
   "avgActual": 3.5,
   "avgExpected": 5,
   "aId": "6994f1c2-d156-436a-bbb6-e9e348bea33a",
   "bId": "ecfbb129-ba7d-4b52-92b9-869fa7487248"
  },
  {
   "a": "Charlie Johnston",
   "b": "Andrea Dellechiaie",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.9,
   "avgActual": 0.7,
   "avgExpected": 2.7,
   "aId": "1bad49ab-f2b8-439b-9e4b-3ff3cb8ca325",
   "bId": "84e4d40d-3b98-4822-b073-e9dc71c0d4d7"
  },
  {
   "a": "Suzanne \"Zan\" Davies",
   "b": "Jennifer Qian",
   "team": "Stelton Sports",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -2.5,
   "avgExpected": -0.8,
   "aId": "25b25938-9a27-4d08-97c1-6db7a6b7ff24",
   "bId": "902a9e2d-2ac4-4d19-9ae7-e945ece1da00"
  },
  {
   "a": "Brian Rowan",
   "b": "Jeff Lorman",
   "team": "ACE",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.9,
   "avgActual": 1.3,
   "avgExpected": 3.5,
   "aId": "136b6979-e0f4-4af2-9f5e-949b8d4bf423",
   "bId": "75789bbc-0dde-460e-b905-7bd1189c6a90"
  },
  {
   "a": "Sarah Flynn",
   "b": "Tara Lombardo",
   "team": "Monroe",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -5.7,
   "avgExpected": -3.6,
   "aId": "29b01229-f7ed-4692-bdb4-32926b8a7cc5",
   "bId": "77d20dd0-823c-474e-b470-12f69db5a588"
  },
  {
   "a": "Lance Stopek",
   "b": "Lori Flickinger",
   "team": "APC Garden State",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1,
   "avgActual": -4.2,
   "avgExpected": -2.3,
   "aId": "3a249058-9862-4d27-9562-c73c5a685d96",
   "bId": "7be2e586-5d71-40e2-b708-c862448e40da"
  },
  {
   "a": "Pam Boyd",
   "b": "Kate Siedell",
   "team": "ACE",
   "n": 11,
   "w": 9,
   "l": 2,
   "synergy": -1,
   "avgActual": 2.5,
   "avgExpected": 4,
   "aId": "04aefa29-20e3-41b7-a680-19d13f9d4289",
   "bId": "8decf039-f1e5-4182-b3cf-6756789ae87a"
  },
  {
   "a": "Barbara Hess",
   "b": "Scott Rubin",
   "team": "Flemington",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1,
   "avgActual": -3,
   "avgExpected": -0.9,
   "aId": "21baa2cb-e882-442e-a5e0-a6d88126c9c3",
   "bId": "c12175df-b959-4efe-95e7-e5298b783da8"
  },
  {
   "a": "Andrea Smith",
   "b": "Mark Lim",
   "team": "Home Court",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1,
   "avgActual": -6.3,
   "avgExpected": -4,
   "aId": "1318bc01-f23f-47da-94cb-ac71b8f3e694",
   "bId": "2d3c137a-6e03-4cfe-bce1-945d60358b5b"
  },
  {
   "a": "Keith Goldberg",
   "b": "Michael Dieterle",
   "team": "Bounce Malvern",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": -1,
   "avgActual": 2.3,
   "avgExpected": 3.7,
   "aId": "37a0fa2c-df0b-4d92-900b-a9f20f441ad8",
   "bId": "4259501c-f1e3-4859-acd0-c25f342a1b92"
  },
  {
   "a": "Liangang Liu",
   "b": "Jim Peng",
   "team": "Stelton Sports",
   "n": 13,
   "w": 4,
   "l": 9,
   "synergy": -1,
   "avgActual": -3.1,
   "avgExpected": -1.8,
   "aId": "34618d40-6e62-4ab3-aa28-fc61c9ac1920",
   "bId": "eddc4924-517f-46ac-9827-935983daa9db"
  },
  {
   "a": "Roger Graterol",
   "b": "Stacey Frank",
   "team": "ACE",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1,
   "avgActual": -3.3,
   "avgExpected": -0.9,
   "aId": "23262a95-4498-4ca1-87a9-713c02337168",
   "bId": "768c88bd-683d-4204-8124-a589c8028b6e"
  },
  {
   "a": "Carol Mastroianni",
   "b": "Aimee Castellano",
   "team": "Flemington",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1,
   "avgActual": 2,
   "avgExpected": 4.4,
   "aId": "7f851011-9322-43f9-aff2-754565a615c7",
   "bId": "e76985fb-efd1-4180-a340-e4f36abbc8b4"
  },
  {
   "a": "Jill Lesnik",
   "b": "Rebecca Lederman",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1,
   "avgActual": 2.3,
   "avgExpected": 4.7,
   "aId": "340fe4f1-f3ed-4fb1-9ba3-74752ee1d864",
   "bId": "cb324481-3d73-47c2-9cc0-a1e1650dd87f"
  },
  {
   "a": "Pam Boyd",
   "b": "Donna Taylor",
   "team": "ACE",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1,
   "avgActual": 0.3,
   "avgExpected": 2.6,
   "aId": "04aefa29-20e3-41b7-a680-19d13f9d4289",
   "bId": "c17e02c9-4feb-47ce-bf5e-29b03155bf21"
  },
  {
   "a": "Laurence Emerson",
   "b": "Vita Mulholland",
   "team": "APC Garden State",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1,
   "avgActual": -7.7,
   "avgExpected": -5.7,
   "aId": "d1d8de9c-d716-4531-8f30-70742305ac46",
   "bId": "fe0555e5-2ec9-4dc2-a44b-4017d5afbb41"
  },
  {
   "a": "Laura Sweet",
   "b": "Darin Morgan",
   "team": "APC Garden State",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -4,
   "avgExpected": -1.8,
   "aId": "7b7b29be-c4b7-4ca9-8fd9-77ec362e761b",
   "bId": "dd2e7522-5de0-4018-b8f2-f0e332bff293"
  },
  {
   "a": "Andrea Mui",
   "b": "Paula Cushing",
   "team": "Monroe",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -1.1,
   "avgActual": -11.2,
   "avgExpected": -9.3,
   "aId": "7a1f2b24-7109-4933-9428-c8fef6eb8348",
   "bId": "f8a42c6f-43b2-4769-b0ed-a1d648353e04"
  },
  {
   "a": "Natasha De Carvalho",
   "b": "Michael Swell",
   "team": "Jersey Pickleball Club",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -1.1,
   "avgActual": -2,
   "avgExpected": -0.1,
   "aId": "462f3a15-22ed-4fa3-b698-78678a5d6966",
   "bId": "5436acd1-542a-4ca5-a652-c0addcf23ea2"
  },
  {
   "a": "Robert Huntley",
   "b": "Sandeep Malhotra",
   "team": "Home Court",
   "n": 8,
   "w": 2,
   "l": 6,
   "synergy": -1.1,
   "avgActual": -1.1,
   "avgExpected": 0.6,
   "aId": "b5dec967-9e3a-49b4-b136-597711d099cc",
   "bId": "c24596e0-9eeb-4195-b1ff-d4ca3e418d84"
  },
  {
   "a": "Marc Pellicane",
   "b": "Elyse Diamond",
   "team": "ACE",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.1,
   "avgActual": -0.7,
   "avgExpected": 1.4,
   "aId": "1c13f01f-aeb7-45db-9faf-a6567d22bb81",
   "bId": "a0c9637b-5b23-4797-a46a-d2df7bb0fae9"
  },
  {
   "a": "Jennifer Burke",
   "b": "Charlie Johnston",
   "team": "Pickleball Palace",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -2.6,
   "avgExpected": -0.7,
   "aId": "18bcc459-8067-4650-ad73-3183fae3ea1f",
   "bId": "1bad49ab-f2b8-439b-9e4b-3ff3cb8ca325"
  },
  {
   "a": "Art Muth",
   "b": "Scott Rubin",
   "team": "Flemington",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.1,
   "avgActual": -6,
   "avgExpected": -3.7,
   "aId": "6bfc3a49-53cb-4c03-b8cb-94552158ccbe",
   "bId": "c12175df-b959-4efe-95e7-e5298b783da8"
  },
  {
   "a": "Evelyn Du",
   "b": "Ronnie Yin",
   "team": "Montville",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.1,
   "avgActual": -6.5,
   "avgExpected": -4.3,
   "aId": "08547f36-c938-4f82-a783-9c89ab07500c",
   "bId": "988636eb-4604-44d6-af70-2732b787ec2a"
  },
  {
   "a": "Wally Liu",
   "b": "Ted Lee",
   "team": "Pickleball Kingdom Hamilton",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -1.1,
   "avgActual": -7,
   "avgExpected": -5,
   "aId": "0a36460a-ac00-4501-8a7f-9b217bfbddc7",
   "bId": "f6d91a04-e692-4905-96a6-968175585586"
  },
  {
   "a": "Yaowen Li",
   "b": "Albert Pamudji",
   "team": "Pickleball Kingdom Hamilton",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -1.1,
   "avgActual": -0.9,
   "avgExpected": 0.9,
   "aId": "b0747e45-3190-47d6-97ef-8bb041bf0ba8",
   "bId": "f8c55797-409c-4cf0-a2d5-241ec95f60b2"
  },
  {
   "a": "Bill Ly",
   "b": "Richard Demeuse",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -4,
   "avgExpected": -1.4,
   "aId": "a994d97f-5970-4332-adf1-d7ec828e84a3",
   "bId": "d88f1d1e-be4e-449e-b9b2-c468753e1dd3"
  },
  {
   "a": "Franklin Lupianez",
   "b": "Michael Vincent",
   "team": "Home Court",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -7.3,
   "avgExpected": -4.7,
   "aId": "17caef8b-84d4-4052-9695-7c74190925a1",
   "bId": "7f44421c-476c-4857-99ed-3376b32289ca"
  },
  {
   "a": "Michael Dieterle",
   "b": "Kerry Schaffer",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1.1,
   "avgActual": -0.3,
   "avgExpected": 2.2,
   "aId": "4259501c-f1e3-4859-acd0-c25f342a1b92",
   "bId": "6c18454a-479d-4cb7-9bd7-2e2c414ee744"
  },
  {
   "a": "Andrea Mui",
   "b": "Santhosh Pillai",
   "team": "Monroe",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -4.7,
   "avgExpected": -2.1,
   "aId": "7a1f2b24-7109-4933-9428-c8fef6eb8348",
   "bId": "7d25c9f9-c478-402a-9139-cc8781686a8e"
  },
  {
   "a": "Tim Ahn",
   "b": "Naresh Malhotra",
   "team": "Monroe",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -1.1,
   "avgActual": -3.2,
   "avgExpected": -1.3,
   "aId": "54431f9b-4785-4c4d-bdf9-94baf6da6a52",
   "bId": "732686cf-d4c9-4a45-a966-451f07bd3115"
  },
  {
   "a": "Robert Finley",
   "b": "Brian Rowan",
   "team": "ACE",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -1.1,
   "avgActual": 2.7,
   "avgExpected": 5.2,
   "aId": "0d70122a-9002-461f-8600-a9afed2e8c3f",
   "bId": "136b6979-e0f4-4af2-9f5e-949b8d4bf423"
  },
  {
   "a": "Lara Webb",
   "b": "Brian Caine",
   "team": "APC Garden State",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.2,
   "avgActual": -6,
   "avgExpected": -3.1,
   "aId": "096a6a65-5d60-461f-91ed-d2eafbd7dd76",
   "bId": "7d0e32ca-3e4e-455f-968c-f5d427efeacb"
  },
  {
   "a": "Sarah Flynn",
   "b": "Andrea Mui",
   "team": "Monroe",
   "n": 7,
   "w": 0,
   "l": 7,
   "synergy": -1.2,
   "avgActual": -8.1,
   "avgExpected": -6.3,
   "aId": "29b01229-f7ed-4692-bdb4-32926b8a7cc5",
   "bId": "7a1f2b24-7109-4933-9428-c8fef6eb8348"
  },
  {
   "a": "Mei Li",
   "b": "Ann Betterton",
   "team": "Stelton Sports",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.2,
   "avgActual": -3.2,
   "avgExpected": -0.9,
   "aId": "28330003-3125-4050-be9a-ddd726dccfe2",
   "bId": "abe02688-e77f-414b-9747-25f3bdc149c7"
  },
  {
   "a": "Marc Pellicane",
   "b": "James Shaw",
   "team": "ACE",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": -1.2,
   "avgActual": 5.3,
   "avgExpected": 7.3,
   "aId": "1c13f01f-aeb7-45db-9faf-a6567d22bb81",
   "bId": "439e30a7-6097-4e20-8a7b-25c57dd5b5d0"
  },
  {
   "a": "Steven Gregov",
   "b": "Scott Rubin",
   "team": "Flemington",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": -1.2,
   "avgActual": -2.7,
   "avgExpected": -0.9,
   "aId": "3efad314-83fb-4441-a7bf-510228cea1f8",
   "bId": "c12175df-b959-4efe-95e7-e5298b783da8"
  },
  {
   "a": "Debbie Tovitz",
   "b": "Alex Lee",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.2,
   "avgActual": -2.7,
   "avgExpected": 0.1,
   "aId": "1260ba09-fd19-4cad-95d4-325744e32327",
   "bId": "22e2201d-16d7-4474-847b-5f4f0cef44e6"
  },
  {
   "a": "Kristen Silvestri",
   "b": "Peter Chen",
   "team": "Montville",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.2,
   "avgActual": -4,
   "avgExpected": -1.3,
   "aId": "035a8041-2b2d-4050-a71d-9a8e7fb1b5e6",
   "bId": "8767c73e-fa5a-4e68-9ded-850b7ab50693"
  },
  {
   "a": "Sue Johnson",
   "b": "Christine Papa",
   "team": "Flemington",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.2,
   "avgActual": -5.7,
   "avgExpected": -3.3,
   "aId": "c6046610-1dba-4bad-bc89-57e5baa0983f",
   "bId": "d156a552-7fa9-488e-9bfa-745feb859950"
  },
  {
   "a": "Emil Pescatore",
   "b": "Margaret Weidlich",
   "team": "Home Court",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.2,
   "avgActual": -5.7,
   "avgExpected": -3.4,
   "aId": "1c9b7abf-dae6-4e0d-a31d-485e99a01fec",
   "bId": "7021e97f-1e5e-4adb-ac80-1a9c919caba6"
  },
  {
   "a": "Natasha De Carvalho",
   "b": "Eva Danieli",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.2,
   "avgActual": -1.7,
   "avgExpected": 1.1,
   "aId": "462f3a15-22ed-4fa3-b698-78678a5d6966",
   "bId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae"
  },
  {
   "a": "Guy Ohn",
   "b": "Paula Cushing",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.3,
   "avgActual": -4.7,
   "avgExpected": -1.7,
   "aId": "f394b637-236e-4fee-b26f-374c90c3dd1e",
   "bId": "f8a42c6f-43b2-4769-b0ed-a1d648353e04"
  },
  {
   "a": "Vicki Main",
   "b": "Stephanie Woomer",
   "team": "Bounce Malvern",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": -1.3,
   "avgActual": -0.1,
   "avgExpected": 2,
   "aId": "89bdcff6-2fba-4bde-b831-872bf9ce7843",
   "bId": "e05f57f5-c898-404e-b86f-c2460cc23b06"
  },
  {
   "a": "Karan Pescatore",
   "b": "Sarah Mcparland",
   "team": "Home Court",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -1.3,
   "avgActual": 0.8,
   "avgExpected": 3,
   "aId": "2cb4b2dd-d14b-4bab-a8be-ef4b14845711",
   "bId": "958e8cb9-1c97-4932-b495-29c28578a123"
  },
  {
   "a": "Eva Danieli",
   "b": "Alice Napolitano",
   "team": "Jersey Pickleball Club",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -1.3,
   "avgActual": 2.2,
   "avgExpected": 4.5,
   "aId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae",
   "bId": "d56483b8-a5b8-4c1f-8437-39fcf90a5030"
  },
  {
   "a": "Brandon Fulford",
   "b": "Louis Vessichelli",
   "team": "Montville",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.3,
   "avgActual": -5,
   "avgExpected": -1.9,
   "aId": "906383cd-e781-48bc-9004-0fc5427c7e62",
   "bId": "cb8c8404-c482-4fe5-bd01-35b348fccfd4"
  },
  {
   "a": "Claudia Van Loo",
   "b": "Renee Mitzner",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.3,
   "avgActual": -7.7,
   "avgExpected": -4.7,
   "aId": "9066a581-73c5-410c-b3c3-af202f2d5ae5",
   "bId": "c980f026-901d-4a06-9147-04dadea2b86d"
  },
  {
   "a": "Pam Friedman",
   "b": "Andrew Hyman",
   "team": "Jersey Pickleball Club",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -1.3,
   "avgActual": -4,
   "avgExpected": -1.6,
   "aId": "94d51b2d-359c-450c-b1c8-728944462b01",
   "bId": "dbda3e07-6332-4467-bdf0-be18b2686573"
  },
  {
   "a": "Hayley Yandoli",
   "b": "Tracey Collins",
   "team": "Monroe",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -1.3,
   "avgActual": -3.2,
   "avgExpected": -1,
   "aId": "1fc2dd51-135b-46d6-91ef-9291b573e78a",
   "bId": "f01a9ccb-b72e-4980-bdc0-73ed5a72f92c"
  },
  {
   "a": "Santhosh Pillai",
   "b": "Erik Lombardo",
   "team": "Monroe",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.3,
   "avgActual": -4,
   "avgExpected": -1.3,
   "aId": "7d25c9f9-c478-402a-9139-cc8781686a8e",
   "bId": "834f3d3e-bde3-4b30-af4c-d1eadb344dfd"
  },
  {
   "a": "Darren Saks",
   "b": "Joe Palumbo",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1.3,
   "avgActual": 1.3,
   "avgExpected": 4.4,
   "aId": "9bf7b8ab-4dfa-442b-be12-77580a5ea1dc",
   "bId": "b39664c3-1a6e-4493-968f-6e7f7939f694"
  },
  {
   "a": "Robert Huntley",
   "b": "Christine Chwe",
   "team": "Home Court",
   "n": 7,
   "w": 1,
   "l": 6,
   "synergy": -1.4,
   "avgActual": -3.1,
   "avgExpected": -1,
   "aId": "b5dec967-9e3a-49b4-b136-597711d099cc",
   "bId": "fedc1fc4-c949-46e7-b435-5c343ba66635"
  },
  {
   "a": "Laura Spilatro",
   "b": "Sandeep Malhotra",
   "team": "Home Court",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.4,
   "avgActual": -4.3,
   "avgExpected": -1.1,
   "aId": "459df1a4-6663-4d9e-9b05-bf33f5e9d8ea",
   "bId": "c24596e0-9eeb-4195-b1ff-d4ca3e418d84"
  },
  {
   "a": "Suzanne \"Zan\" Davies",
   "b": "Dave Pellicane",
   "team": "Stelton Sports",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.4,
   "avgActual": -4.7,
   "avgExpected": -1.3,
   "aId": "25b25938-9a27-4d08-97c1-6db7a6b7ff24",
   "bId": "2725f46f-cb36-411b-bf79-70611fbda07c"
  },
  {
   "a": "Andrea Dellechiaie",
   "b": "Brian Gonzalez",
   "team": "Pickleball Palace",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -1.4,
   "avgActual": 0.2,
   "avgExpected": 2.5,
   "aId": "84e4d40d-3b98-4822-b073-e9dc71c0d4d7",
   "bId": "ecc02ab8-5e9c-4950-89b7-be3f397683c3"
  },
  {
   "a": "David Osborne",
   "b": "Todd Stein",
   "team": "Flemington",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.4,
   "avgActual": -5,
   "avgExpected": -1.7,
   "aId": "418e7ba5-3e06-40ec-9b83-19d3bf10c9cb",
   "bId": "63fb8f7d-8f83-4bdf-89c7-fc3ca7139df5"
  },
  {
   "a": "Keith Goldberg",
   "b": "Stephanie Woomer",
   "team": "Bounce Malvern",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -1.5,
   "avgActual": 2.6,
   "avgExpected": 5.2,
   "aId": "37a0fa2c-df0b-4d92-900b-a9f20f441ad8",
   "bId": "e05f57f5-c898-404e-b86f-c2460cc23b06"
  },
  {
   "a": "Surbhi Sabharwal",
   "b": "Jeffrey Heil",
   "team": "Montville",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.5,
   "avgActual": -4.7,
   "avgExpected": -1.1,
   "aId": "6ff2d1f1-1ffd-4140-820d-b2333c370dcd",
   "bId": "d44c4151-84f7-4ec8-9e48-420a627107fd"
  },
  {
   "a": "Mengchu Zhou",
   "b": "Jim Peng",
   "team": "Stelton Sports",
   "n": 8,
   "w": 0,
   "l": 8,
   "synergy": -1.5,
   "avgActual": -4.2,
   "avgExpected": -2,
   "aId": "14fc7872-1e6f-419e-adcb-d8e63826a37d",
   "bId": "eddc4924-517f-46ac-9827-935983daa9db"
  },
  {
   "a": "Naresh Malhotra",
   "b": "Guy Ohn",
   "team": "Monroe",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -1.5,
   "avgActual": -1.4,
   "avgExpected": 1.4,
   "aId": "732686cf-d4c9-4a45-a966-451f07bd3115",
   "bId": "f394b637-236e-4fee-b26f-374c90c3dd1e"
  },
  {
   "a": "Steven Gregov",
   "b": "Sue Johnson",
   "team": "Flemington",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.5,
   "avgActual": -9.7,
   "avgExpected": -6.3,
   "aId": "3efad314-83fb-4441-a7bf-510228cea1f8",
   "bId": "c6046610-1dba-4bad-bc89-57e5baa0983f"
  },
  {
   "a": "Kristen Silvestri",
   "b": "Brandon Fulford",
   "team": "Montville",
   "n": 12,
   "w": 0,
   "l": 12,
   "synergy": -1.6,
   "avgActual": -6.2,
   "avgExpected": -4.1,
   "aId": "035a8041-2b2d-4050-a71d-9a8e7fb1b5e6",
   "bId": "906383cd-e781-48bc-9004-0fc5427c7e62"
  },
  {
   "a": "Howie Steiner",
   "b": "Rick Derose",
   "team": "APC Garden State",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.6,
   "avgActual": -7.7,
   "avgExpected": -4,
   "aId": "5f8dc611-79bf-404d-99fc-f3ea9178d8f0",
   "bId": "823fc9d2-d052-423c-87a9-bd601b54a414"
  },
  {
   "a": "Kate Curren",
   "b": "Brian Gonzalez",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -1.6,
   "avgActual": 4.3,
   "avgExpected": 7.4,
   "aId": "20e006d9-72f9-4f9e-bad5-750694224782",
   "bId": "ecc02ab8-5e9c-4950-89b7-be3f397683c3"
  },
  {
   "a": "Tim Ahn",
   "b": "Tracey Collins",
   "team": "Monroe",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.6,
   "avgActual": -3.5,
   "avgExpected": -0.3,
   "aId": "54431f9b-4785-4c4d-bdf9-94baf6da6a52",
   "bId": "f01a9ccb-b72e-4980-bdc0-73ed5a72f92c"
  },
  {
   "a": "Laura Spilatro",
   "b": "Sharon Streit",
   "team": "Home Court",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.6,
   "avgActual": -8.2,
   "avgExpected": -5,
   "aId": "459df1a4-6663-4d9e-9b05-bf33f5e9d8ea",
   "bId": "9f9e5b25-d385-4c12-adb3-233c612619c4"
  },
  {
   "a": "Jennifer Qian",
   "b": "Rui Zhang",
   "team": "Stelton Sports",
   "n": 11,
   "w": 2,
   "l": 9,
   "synergy": -1.7,
   "avgActual": -4,
   "avgExpected": -1.7,
   "aId": "902a9e2d-2ac4-4d19-9ae7-e945ece1da00",
   "bId": "c218d668-b78a-4726-b2df-fe7730a50963"
  },
  {
   "a": "Kajal Sinkar",
   "b": "George Mandl",
   "team": "Home Court",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.7,
   "avgActual": -3.7,
   "avgExpected": -0.3,
   "aId": "9d7f6585-d5f4-44fa-a4f9-24737a072f72",
   "bId": "a0019103-8887-4a15-bbe0-d1c35cdd7b0d"
  },
  {
   "a": "Katherine Maruyama",
   "b": "Dana Luscombe",
   "team": "Bounce Malvern",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -1.7,
   "avgActual": 4.2,
   "avgExpected": 7,
   "aId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a",
   "bId": "be6e11f7-09a1-4b1c-af3d-a052b3c36b7f"
  },
  {
   "a": "Carol Mastroianni",
   "b": "Marc Friedman",
   "team": "Flemington",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -1.7,
   "avgActual": -2.8,
   "avgExpected": 0,
   "aId": "7f851011-9322-43f9-aff2-754565a615c7",
   "bId": "d7bdde76-1007-4b20-a804-4efcd08c3598"
  },
  {
   "a": "Ayten Mayer",
   "b": "Richard Demeuse",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -1.7,
   "avgActual": -3.4,
   "avgExpected": -0.4,
   "aId": "8072e25c-4788-48b5-a440-0d4403f89f4f",
   "bId": "d88f1d1e-be4e-449e-b9b2-c468753e1dd3"
  },
  {
   "a": "Amy Chrebet",
   "b": "Pam Friedman",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.7,
   "avgActual": -3.2,
   "avgExpected": 0.3,
   "aId": "6f511e98-567a-4b33-8831-ed123f01f952",
   "bId": "94d51b2d-359c-450c-b1c8-728944462b01"
  },
  {
   "a": "Liangjie Zhu",
   "b": "Andre Yang",
   "team": "Montville",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.8,
   "avgActual": 0,
   "avgExpected": 3.6,
   "aId": "972856ec-207d-4f89-9d97-6fda7c0e083b",
   "bId": "b9cede07-396d-42c4-84f3-c0e66ecb8f71"
  },
  {
   "a": "Michael Finkelstein",
   "b": "Harriet Levin",
   "team": "Bounce Malvern",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": -1.8,
   "avgActual": 1.7,
   "avgExpected": 4.7,
   "aId": "861c3f68-2c96-4a96-a75e-645020f73a5c",
   "bId": "aeff8297-a479-4b3b-9a49-72c410ac8e26"
  },
  {
   "a": "Sara Wiggert",
   "b": "Raneeta Sawhney-Rigby",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.8,
   "avgActual": -4.3,
   "avgExpected": -0.2,
   "aId": "6cf82c92-fdfb-46bc-bad1-beec6ab96691",
   "bId": "8ee2191e-34c1-4f6b-b366-5a1bbc5bcb36"
  },
  {
   "a": "Leon Li",
   "b": "Albert Pamudji",
   "team": "Pickleball Kingdom Hamilton",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.9,
   "avgActual": -6.2,
   "avgExpected": -2.3,
   "aId": "528de93e-9cf4-480d-a9ba-5b20f6f23f87",
   "bId": "f8c55797-409c-4cf0-a2d5-241ec95f60b2"
  },
  {
   "a": "Bob Castellano",
   "b": "Eric Luque",
   "team": "Flemington",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.9,
   "avgActual": -7.2,
   "avgExpected": -3.5,
   "aId": "7bb24154-bd52-4081-a3e6-0b8afcde62d5",
   "bId": "b3c28078-ab31-4002-9e09-5fa3f627d8c1"
  },
  {
   "a": "Art Muth",
   "b": "Eric Luque",
   "team": "Flemington",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -1.9,
   "avgActual": -4.2,
   "avgExpected": -1,
   "aId": "6bfc3a49-53cb-4c03-b8cb-94552158ccbe",
   "bId": "b3c28078-ab31-4002-9e09-5fa3f627d8c1"
  },
  {
   "a": "Dint Moore",
   "b": "Kerry Shannon",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.9,
   "avgActual": -6,
   "avgExpected": -2.2,
   "aId": "53e6f48d-1702-4121-9bae-8809c365e5c6",
   "bId": "e61c60c8-6141-4d98-af74-740d4d849655"
  },
  {
   "a": "Lara Webb",
   "b": "Rick Derose",
   "team": "APC Garden State",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.9,
   "avgActual": -12.3,
   "avgExpected": -7.9,
   "aId": "096a6a65-5d60-461f-91ed-d2eafbd7dd76",
   "bId": "823fc9d2-d052-423c-87a9-bd601b54a414"
  },
  {
   "a": "Alex Lee",
   "b": "Jill Lesnik",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1.9,
   "avgActual": -0.3,
   "avgExpected": 4.1,
   "aId": "22e2201d-16d7-4474-847b-5f4f0cef44e6",
   "bId": "340fe4f1-f3ed-4fb1-9ba3-74752ee1d864"
  },
  {
   "a": "Lance Stopek",
   "b": "Jiyun Yuh",
   "team": "APC Garden State",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -2,
   "avgActual": -6.7,
   "avgExpected": -2.7,
   "aId": "3a249058-9862-4d27-9562-c73c5a685d96",
   "bId": "c94ae231-9f0c-4212-b769-7bd708d8fc38"
  },
  {
   "a": "Hayley Yandoli",
   "b": "Tara Lombardo",
   "team": "Monroe",
   "n": 7,
   "w": 1,
   "l": 6,
   "synergy": -2,
   "avgActual": -6.9,
   "avgExpected": -3.7,
   "aId": "1fc2dd51-135b-46d6-91ef-9291b573e78a",
   "bId": "77d20dd0-823c-474e-b470-12f69db5a588"
  },
  {
   "a": "Natasha De Carvalho",
   "b": "Brad Oldham",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2,
   "avgActual": -5.7,
   "avgExpected": -0.9,
   "aId": "462f3a15-22ed-4fa3-b698-78678a5d6966",
   "bId": "965b56ee-6fb4-4bd1-9708-8ced2c5dd9a2"
  },
  {
   "a": "Jean Wang",
   "b": "Fabienne Yu",
   "team": "Pickleball Kingdom Hamilton",
   "n": 12,
   "w": 6,
   "l": 6,
   "synergy": -2.1,
   "avgActual": 0.4,
   "avgExpected": 3.3,
   "aId": "1188fc00-7ef5-4671-9ef9-2c7d162a2604",
   "bId": "943ac52a-070f-4bdc-baf8-efe14d0f40ea"
  },
  {
   "a": "Jim Darcangelo",
   "b": "Vicki Main",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.1,
   "avgActual": -5.3,
   "avgExpected": -0.4,
   "aId": "0530512b-466d-4ff7-9e89-7961b4a63110",
   "bId": "89bdcff6-2fba-4bde-b831-872bf9ce7843"
  },
  {
   "a": "Margaret Weidlich",
   "b": "Robert Huntley",
   "team": "Home Court",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -2.1,
   "avgActual": -8.5,
   "avgExpected": -4.3,
   "aId": "7021e97f-1e5e-4adb-ac80-1a9c919caba6",
   "bId": "b5dec967-9e3a-49b4-b136-597711d099cc"
  },
  {
   "a": "Pam Boyd",
   "b": "Roger Graterol",
   "team": "ACE",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -2.1,
   "avgActual": -1,
   "avgExpected": 2.8,
   "aId": "04aefa29-20e3-41b7-a680-19d13f9d4289",
   "bId": "23262a95-4498-4ca1-87a9-713c02337168"
  },
  {
   "a": "Sara Wiggert",
   "b": "Marc Padre",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.1,
   "avgActual": -6.7,
   "avgExpected": -1.7,
   "aId": "6cf82c92-fdfb-46bc-bad1-beec6ab96691",
   "bId": "a131a707-f20e-4838-9dcf-7cecb40c2705"
  },
  {
   "a": "Stacy Fairley",
   "b": "Marc Padre",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.1,
   "avgActual": -8,
   "avgExpected": -3.1,
   "aId": "0f432e98-3bd5-4842-ad3d-fd4d924e9105",
   "bId": "a131a707-f20e-4838-9dcf-7cecb40c2705"
  },
  {
   "a": "Todd Stein",
   "b": "Christine Papa",
   "team": "Flemington",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -2.2,
   "avgActual": -8.7,
   "avgExpected": -4.4,
   "aId": "63fb8f7d-8f83-4bdf-89c7-fc3ca7139df5",
   "bId": "d156a552-7fa9-488e-9bfa-745feb859950"
  },
  {
   "a": "Steven Gregov",
   "b": "Christine Papa",
   "team": "Flemington",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.3,
   "avgActual": -9.7,
   "avgExpected": -4.4,
   "aId": "3efad314-83fb-4441-a7bf-510228cea1f8",
   "bId": "d156a552-7fa9-488e-9bfa-745feb859950"
  },
  {
   "a": "Dint Moore",
   "b": "Richard Abate",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.4,
   "avgActual": -9.3,
   "avgExpected": -3.7,
   "aId": "53e6f48d-1702-4121-9bae-8809c365e5c6",
   "bId": "a18c309a-f364-4ae6-b06a-7faf4e1c525d"
  },
  {
   "a": "Ivona Reszka",
   "b": "Richard Demeuse",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -2.4,
   "avgActual": -4.7,
   "avgExpected": 0,
   "aId": "a06e906c-dd36-4585-b03a-48a49b915662",
   "bId": "d88f1d1e-be4e-449e-b9b2-c468753e1dd3"
  },
  {
   "a": "Liz Cuozzo",
   "b": "Meryl Nadler",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -2.5,
   "avgActual": -3.7,
   "avgExpected": 1.2,
   "aId": "2b2d474d-281c-42d7-854b-6bfe32f20563",
   "bId": "90987b97-d181-4c15-9c7c-e0bebff4e9b0"
  },
  {
   "a": "Howie Steiner",
   "b": "Lori Flickinger",
   "team": "APC Garden State",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -2.6,
   "avgActual": -7.5,
   "avgExpected": -2.3,
   "aId": "5f8dc611-79bf-404d-99fc-f3ea9178d8f0",
   "bId": "7be2e586-5d71-40e2-b708-c862448e40da"
  },
  {
   "a": "Eva Danieli",
   "b": "Brad Oldham",
   "team": "Jersey Pickleball Club",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -2.7,
   "avgActual": -4.5,
   "avgExpected": 0,
   "aId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae",
   "bId": "965b56ee-6fb4-4bd1-9708-8ced2c5dd9a2"
  },
  {
   "a": "Mike Giampapa",
   "b": "Kelly Hanson Word",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -3,
   "avgActual": -6,
   "avgExpected": 1.1,
   "aId": "61488bc4-71af-4dda-8031-5938382529e5",
   "bId": "ecfbb129-ba7d-4b52-92b9-869fa7487248"
  }
 ],
 "matches": [
  {
   "result": "home",
   "week": 1,
   "home": "Pickleball Kingdom Hamilton",
   "away": "APC Garden State",
   "time": "2026-03-01T12:00:00",
   "complete": true,
   "homePoints": 634,
   "awayPoints": 587,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 31,
     "as": 29,
     "h": [
      "Stacy Garretson",
      "Leon Li"
     ],
     "a": [
      "Laura Sweet",
      "Darin Morgan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jean Wang",
      "Frank Ding"
     ],
     "a": [
      "Lori Flickinger",
      "Howie Steiner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jamie Sandman",
      "Jack Brod"
     ],
     "a": [
      "Lara Webb",
      "Brian Caine"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lillian Gin-Lee",
      "Ted Lee"
     ],
     "a": [
      "Vita Mulholland",
      "Bennett Shanker"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Lily Liu",
      "Stacy Garretson"
     ],
     "a": [
      "Laura Sweet",
      "Vita Mulholland"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jean Wang",
      "Fabienne Yu"
     ],
     "a": [
      "Lara Webb",
      "Jiyun Yuh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Leon Li",
      "Wally Liu"
     ],
     "a": [
      "Bennett Shanker",
      "Yang Wang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Frank Ding",
      "Albert Pamudji"
     ],
     "a": [
      "Brian Caine",
      "Darin Morgan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Lillian Gin-Lee",
      "Ted Lee"
     ],
     "a": [
      "Lori Flickinger",
      "Lance Stopek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jamie Sandman",
      "Jack Brod"
     ],
     "a": [
      "Lara Webb",
      "Darin Morgan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Fabienne Yu",
      "Albert Pamudji"
     ],
     "a": [
      "Jiyun Yuh",
      "Yang Wang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Lily Liu",
      "Wally Liu"
     ],
     "a": [
      "Laura Sweet",
      "Howie Steiner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jamie Sandman",
      "Stacy Garretson"
     ],
     "a": [
      "Laura Sweet",
      "Vita Mulholland"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jean Wang",
      "Lily Liu"
     ],
     "a": [
      "Lori Flickinger",
      "Jiyun Yuh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Leon Li",
      "Jack Brod"
     ],
     "a": [
      "Bennett Shanker",
      "Lance Stopek"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Frank Ding",
      "Ted Lee"
     ],
     "a": [
      "Brian Caine",
      "Yang Wang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Fabienne Yu",
      "Albert Pamudji"
     ],
     "a": [
      "Jiyun Yuh",
      "Darin Morgan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jean Wang",
      "Frank Ding"
     ],
     "a": [
      "Lara Webb",
      "Lance Stopek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Stacy Garretson",
      "Leon Li"
     ],
     "a": [
      "Lori Flickinger",
      "Howie Steiner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Lillian Gin-Lee",
      "Wally Liu"
     ],
     "a": [
      "Laura Sweet",
      "Bennett Shanker"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lily Liu",
      "Fabienne Yu"
     ],
     "a": [
      "Vita Mulholland",
      "Lori Flickinger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lillian Gin-Lee",
      "Jamie Sandman"
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
     "as": 16,
     "h": [
      "Wally Liu",
      "Jack Brod"
     ],
     "a": [
      "Yang Wang",
      "Brian Caine"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Albert Pamudji",
      "Ted Lee"
     ],
     "a": [
      "Darin Morgan",
      "Lance Stopek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Lily Liu",
      "Frank Ding"
     ],
     "a": [
      "Laura Sweet",
      "Howie Steiner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Lillian Gin-Lee",
      "Jack Brod"
     ],
     "a": [
      "Lara Webb",
      "Brian Caine"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Stacy Garretson",
      "Ted Lee"
     ],
     "a": [
      "Vita Mulholland",
      "Bennett Shanker"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jamie Sandman",
      "Leon Li"
     ],
     "a": [
      "Jiyun Yuh",
      "Lance Stopek"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Stacy Garretson",
      "Lily Liu"
     ],
     "a": [
      "Lara Webb",
      "Vita Mulholland"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jean Wang",
      "Fabienne Yu"
     ],
     "a": [
      "Laura Sweet",
      "Lori Flickinger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Frank Ding",
      "Ted Lee"
     ],
     "a": [
      "Bennett Shanker",
      "Yang Wang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Albert Pamudji",
      "Leon Li"
     ],
     "a": [
      "Darin Morgan",
      "Howie Steiner"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 1,
   "home": "Bounce Malvern",
   "away": "Monroe",
   "time": "2026-03-01T13:00:00",
   "complete": true,
   "homePoints": 669,
   "awayPoints": 442,
   "homeGW": 28,
   "awayGW": 4,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Stephanie Woomer",
      "Keith Goldberg"
     ],
     "a": [
      "Andrea Mui",
      "Tim Ahn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Katherine Maruyama",
      "Michael Dieterle"
     ],
     "a": [
      "Hayley Yandoli",
      "Santhosh Pillai"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Harriet Levin",
      "Jim Darcangelo"
     ],
     "a": [
      "Paula Cushing",
      "Eliezer Mintz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jill Scully",
      "Michael Finkelstein"
     ],
     "a": [
      "Tara Lombardo",
      "Erik Lombardo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Harriet Levin",
      "Vicki Main"
     ],
     "a": [
      "Tara Lombardo",
      "Hayley Yandoli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Stephanie Woomer",
      "Jill Scully"
     ],
     "a": [
      "Sarah Flynn",
      "Paula Cushing"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Dana Luscombe",
      "Michael Dieterle"
     ],
     "a": [
      "Guy Ohn",
      "Yi Gu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jim Darcangelo",
      "Keith Goldberg"
     ],
     "a": [
      "Eliezer Mintz",
      "Tim Ahn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Katherine Maruyama",
      "Keith Goldberg"
     ],
     "a": [
      "Tara Lombardo",
      "Tim Ahn"
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
      "Hayley Yandoli",
      "Santhosh Pillai"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Vicki Main",
      "Dana Luscombe"
     ],
     "a": [
      "Sarah Flynn",
      "Yi Gu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Harriet Levin",
      "Jim Darcangelo"
     ],
     "a": [
      "Andrea Mui",
      "Eliezer Mintz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Harriet Levin",
      "Jill Scully"
     ],
     "a": [
      "Hayley Yandoli",
      "Sarah Flynn"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Katherine Maruyama",
      "Vicki Main"
     ],
     "a": [
      "Andrea Mui",
      "Paula Cushing"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Michael Finkelstein",
      "Michael Dieterle"
     ],
     "a": [
      "Santhosh Pillai",
      "Eliezer Mintz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jim Darcangelo",
      "Keith Goldberg"
     ],
     "a": [
      "Erik Lombardo",
      "Tim Ahn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 22,
     "h": [
      "Jill Scully",
      "Michael Dieterle"
     ],
     "a": [
      "Paula Cushing",
      "Yi Gu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Stephanie Woomer",
      "Dana Luscombe"
     ],
     "a": [
      "Tara Lombardo",
      "Guy Ohn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Katherine Maruyama",
      "Keith Goldberg"
     ],
     "a": [
      "Andrea Mui",
      "Tim Ahn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Vicki Main",
      "Jim Darcangelo"
     ],
     "a": [
      "Sarah Flynn",
      "Erik Lombardo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Harriet Levin",
      "Katherine Maruyama"
     ],
     "a": [
      "Hayley Yandoli",
      "Andrea Mui"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Jill Scully",
      "Stephanie Woomer"
     ],
     "a": [
      "Tara Lombardo",
      "Paula Cushing"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Dana Luscombe",
      "Michael Finkelstein"
     ],
     "a": [
      "Santhosh Pillai",
      "Yi Gu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jim Darcangelo",
      "Michael Dieterle"
     ],
     "a": [
      "Eliezer Mintz",
      "Tim Ahn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Harriet Levin",
      "Keith Goldberg"
     ],
     "a": [
      "Sarah Flynn",
      "Tim Ahn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Katherine Maruyama",
      "Michael Finkelstein"
     ],
     "a": [
      "Paula Cushing",
      "Guy Ohn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Jill Scully",
      "Michael Dieterle"
     ],
     "a": [
      "Tara Lombardo",
      "Erik Lombardo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Vicki Main",
      "Dana Luscombe"
     ],
     "a": [
      "Hayley Yandoli",
      "Yi Gu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Harriet Levin",
      "Katherine Maruyama"
     ],
     "a": [
      "Sarah Flynn",
      "Andrea Mui"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Stephanie Woomer",
      "Vicki Main"
     ],
     "a": [
      "Hayley Yandoli",
      "Tara Lombardo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Keith Goldberg",
      "Dana Luscombe"
     ],
     "a": [
      "Santhosh Pillai",
      "Yi Gu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Michael Finkelstein",
      "Jim Darcangelo"
     ],
     "a": [
      "Eliezer Mintz",
      "Erik Lombardo"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 1,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Pickleball Palace",
   "time": "2026-03-01T13:00:00",
   "complete": true,
   "homePoints": 578,
   "awayPoints": 626,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Dint Moore",
      "Abraham Telechanski"
     ],
     "a": [
      "Jennifer Burke",
      "John Burke"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Julia Hollman",
      "Glenn Markowitz"
     ],
     "a": [
      "Kelly Hanson Word",
      "Brian Gonzalez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Lucy Li",
      "Marc Padre"
     ],
     "a": [
      "Sinitra Siengsanaoh",
      "Bud Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Ayten Mayer",
      "Marvin Lavy"
     ],
     "a": [
      "Kate Curren",
      "Mike Giampapa"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Dint Moore",
      "Lucy Li"
     ],
     "a": [
      "Sinitra Siengsanaoh",
      "Carly Pfeffer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Ayten Mayer",
      "Julia Hollman"
     ],
     "a": [
      "Kelly Hanson Word",
      "Jennifer Burke"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Abraham Telechanski",
      "Marc Padre"
     ],
     "a": [
      "Bud Heller",
      "John Burke"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Marvin Lavy",
      "Richard Abate"
     ],
     "a": [
      "Chris Heimerle",
      "Mike Giampapa"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Lucy Li",
      "Marc Padre"
     ],
     "a": [
      "Andrea Dellechiaie",
      "Chris Heimerle"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Dint Moore",
      "Abraham Telechanski"
     ],
     "a": [
      "Jennifer Burke",
      "Mike Giampapa"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Ayten Mayer",
      "Glenn Markowitz"
     ],
     "a": [
      "Kate Curren",
      "Rick Vazquez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Julia Hollman",
      "Richard Abate"
     ],
     "a": [
      "Sinitra Siengsanaoh",
      "Brian Gonzalez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Ayten Mayer",
      "Julia Hollman"
     ],
     "a": [
      "Kate Curren",
      "Jennifer Burke"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Dint Moore",
      "Lucy Li"
     ],
     "a": [
      "Carly Pfeffer",
      "Sinitra Siengsanaoh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Marc Padre",
      "Marvin Lavy"
     ],
     "a": [
      "John Burke",
      "Mike Giampapa"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Abraham Telechanski",
      "Richard Abate"
     ],
     "a": [
      "Brian Gonzalez",
      "Rick Vazquez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ayten Mayer",
      "Glenn Markowitz"
     ],
     "a": [
      "Jennifer Burke",
      "John Burke"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lucy Li",
      "Abraham Telechanski"
     ],
     "a": [
      "Sinitra Siengsanaoh",
      "Bud Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Dint Moore",
      "Marc Padre"
     ],
     "a": [
      "Carly Pfeffer",
      "Chris Heimerle"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Julia Hollman",
      "Marvin Lavy"
     ],
     "a": [
      "Andrea Dellechiaie",
      "Rick Vazquez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lucy Li",
      "Ayten Mayer"
     ],
     "a": [
      "Andrea Dellechiaie",
      "Kate Curren"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Dint Moore",
      "Julia Hollman"
     ],
     "a": [
      "Carly Pfeffer",
      "Kelly Hanson Word"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Abraham Telechanski",
      "Marvin Lavy"
     ],
     "a": [
      "John Burke",
      "Mike Giampapa"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Glenn Markowitz",
      "Richard Abate"
     ],
     "a": [
      "Brian Gonzalez",
      "Bud Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Dint Moore",
      "Marc Padre"
     ],
     "a": [
      "Andrea Dellechiaie",
      "Chris Heimerle"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Ayten Mayer",
      "Richard Abate"
     ],
     "a": [
      "Carly Pfeffer",
      "Bud Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Lucy Li",
      "Abraham Telechanski"
     ],
     "a": [
      "Kate Curren",
      "Rick Vazquez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Julia Hollman",
      "Glenn Markowitz"
     ],
     "a": [
      "Kelly Hanson Word",
      "Brian Gonzalez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Dint Moore",
      "Julia Hollman"
     ],
     "a": [
      "Andrea Dellechiaie",
      "Carly Pfeffer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Lucy Li",
      "Ayten Mayer"
     ],
     "a": [
      "Kate Curren",
      "Kelly Hanson Word"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Richard Abate",
      "Marvin Lavy"
     ],
     "a": [
      "Brian Gonzalez",
      "Rick Vazquez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Abraham Telechanski",
      "Marc Padre"
     ],
     "a": [
      "Bud Heller",
      "Chris Heimerle"
     ]
    }
   ],
   "subs": [
    "Marvin Lavy",
    "Glenn Markowitz"
   ]
  },
  {
   "result": "away",
   "week": 1,
   "home": "Home Court",
   "away": "Jersey Pickleball Club",
   "time": "2026-03-01T13:00:00",
   "complete": true,
   "homePoints": 592,
   "awayPoints": 595,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Karan Pescatore",
      "Emil Pescatore"
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
      "Sarah Mcparland",
      "Clifford Luster"
     ],
     "a": [
      "Eva Danieli",
      "Brad Oldham"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Margaret Weidlich",
      "Robert Huntley"
     ],
     "a": [
      "Alice Napolitano",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Christine Chwe",
      "Sandeep Malhotra"
     ],
     "a": [
      "Meryl Nadler",
      "Darren Saks"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sarah Mcparland",
      "Karan Pescatore"
     ],
     "a": [
      "Alice Napolitano",
      "Natasha De Carvalho"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Christine Chwe",
      "Margaret Weidlich"
     ],
     "a": [
      "Eva Danieli",
      "Pam Friedman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Robert Huntley",
      "Sandeep Malhotra"
     ],
     "a": [
      "Brad Oldham",
      "Darren Saks"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Clifford Luster",
      "Emil Pescatore"
     ],
     "a": [
      "Lance Brown",
      "Michael Swell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sarah Mcparland",
      "Emil Pescatore"
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
      "Margaret Weidlich",
      "Sandeep Malhotra"
     ],
     "a": [
      "Meryl Nadler",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Karan Pescatore",
      "Clifford Luster"
     ],
     "a": [
      "Natasha De Carvalho",
      "Brad Oldham"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Christine Chwe",
      "Robert Huntley"
     ],
     "a": [
      "Pam Friedman",
      "Lance Brown"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Christine Chwe",
      "Sarah Mcparland"
     ],
     "a": [
      "Eva Danieli",
      "Meryl Nadler"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Margaret Weidlich",
      "Karan Pescatore"
     ],
     "a": [
      "Natasha De Carvalho",
      "Pam Friedman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Robert Huntley",
      "Emil Pescatore"
     ],
     "a": [
      "Brad Oldham",
      "Michael Swell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Clifford Luster",
      "Sandeep Malhotra"
     ],
     "a": [
      "Michael Dombrowiecki",
      "Darren Saks"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Karan Pescatore",
      "Clifford Luster"
     ],
     "a": [
      "Alice Napolitano",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Sarah Mcparland",
      "Emil Pescatore"
     ],
     "a": [
      "Eva Danieli",
      "Brad Oldham"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Margaret Weidlich",
      "Sandeep Malhotra"
     ],
     "a": [
      "Meryl Nadler",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Christine Chwe",
      "Robert Huntley"
     ],
     "a": [
      "Pam Friedman",
      "Darren Saks"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Christine Chwe",
      "Sarah Mcparland"
     ],
     "a": [
      "Eva Danieli",
      "Alice Napolitano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Margaret Weidlich",
      "Karan Pescatore"
     ],
     "a": [
      "Natasha De Carvalho",
      "Meryl Nadler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Emil Pescatore",
      "Sandeep Malhotra"
     ],
     "a": [
      "Michael Swell",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Robert Huntley",
      "Clifford Luster"
     ],
     "a": [
      "Lance Brown",
      "Darren Saks"
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
      "Eva Danieli",
      "Michael Swell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Sarah Mcparland",
      "Clifford Luster"
     ],
     "a": [
      "Natasha De Carvalho",
      "Brad Oldham"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Margaret Weidlich",
      "Robert Huntley"
     ],
     "a": [
      "Pam Friedman",
      "Darren Saks"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Christine Chwe",
      "Sandeep Malhotra"
     ],
     "a": [
      "Alice Napolitano",
      "Lance Brown"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Sarah Mcparland",
      "Karan Pescatore"
     ],
     "a": [
      "Pam Friedman",
      "Eva Danieli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Christine Chwe",
      "Margaret Weidlich"
     ],
     "a": [
      "Meryl Nadler",
      "Natasha De Carvalho"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Emil Pescatore",
      "Clifford Luster"
     ],
     "a": [
      "Brad Oldham",
      "Michael Swell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Robert Huntley",
      "Sandeep Malhotra"
     ],
     "a": [
      "Michael Dombrowiecki",
      "Lance Brown"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 1,
   "home": "Stelton Sports",
   "away": "Montville",
   "time": "2026-03-01T14:00:00",
   "complete": true,
   "homePoints": 644,
   "awayPoints": 627,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Mei Li",
      "Sam Zhou"
     ],
     "a": [
      "Kristen Silvestri",
      "Louis Vessichelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ann Betterton",
      "Dave Pellicane"
     ],
     "a": [
      "Evelyn Du",
      "Andre Yang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jennifer Qian",
      "Liangang Liu"
     ],
     "a": [
      "Surbhi Sabharwal",
      "Jeffrey Heil"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Rui Zhang",
      "Jim Peng"
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
     "as": 16,
     "h": [
      "Ann Betterton",
      "Rui Zhang"
     ],
     "a": [
      "Evelyn Du",
      "Kristen Silvestri"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Shaoyi Sun",
      "Jennifer Qian"
     ],
     "a": [
      "Liang Chao",
      "Surbhi Sabharwal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Mengchu Zhou",
      "Dave Pellicane"
     ],
     "a": [
      "Brandon Fulford",
      "David King"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sam Zhou",
      "Jim Peng"
     ],
     "a": [
      "Andre Yang",
      "Liangjie Zhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jennifer Qian",
      "Liangang Liu"
     ],
     "a": [
      "Surbhi Sabharwal",
      "Andre Yang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Mei Li",
      "Sam Zhou"
     ],
     "a": [
      "Liang Chao",
      "Jeffrey Heil"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 27,
     "as": 29,
     "h": [
      "Ann Betterton",
      "Dave Pellicane"
     ],
     "a": [
      "Evelyn Du",
      "Louis Vessichelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Rui Zhang",
      "Jim Peng"
     ],
     "a": [
      "Ronnie Yin",
      "Liangjie Zhu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 29,
     "as": 27,
     "h": [
      "Mei Li",
      "Ann Betterton"
     ],
     "a": [
      "Kristen Silvestri",
      "Surbhi Sabharwal"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Shaoyi Sun",
      "Jennifer Qian"
     ],
     "a": [
      "Liang Chao",
      "Ronnie Yin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sam Zhou",
      "Liangang Liu"
     ],
     "a": [
      "Jeffrey Heil",
      "David King"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Mengchu Zhou",
      "Dave Pellicane"
     ],
     "a": [
      "Brandon Fulford",
      "Louis Vessichelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Rui Zhang",
      "Dave Pellicane"
     ],
     "a": [
      "Ronnie Yin",
      "Andre Yang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Shaoyi Sun",
      "Sam Zhou"
     ],
     "a": [
      "Kristen Silvestri",
      "Brandon Fulford"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Ann Betterton",
      "Liangang Liu"
     ],
     "a": [
      "Evelyn Du",
      "Jeffrey Heil"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Mei Li",
      "Mengchu Zhou"
     ],
     "a": [
      "Liang Chao",
      "Louis Vessichelli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Rui Zhang",
      "Jennifer Qian"
     ],
     "a": [
      "Surbhi Sabharwal",
      "Ronnie Yin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Mei Li",
      "Ann Betterton"
     ],
     "a": [
      "Kristen Silvestri",
      "Liang Chao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Dave Pellicane",
      "Liangang Liu"
     ],
     "a": [
      "Andre Yang",
      "Jeffrey Heil"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jim Peng",
      "Mengchu Zhou"
     ],
     "a": [
      "Louis Vessichelli",
      "Liangjie Zhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jennifer Qian",
      "Dave Pellicane"
     ],
     "a": [
      "Kristen Silvestri",
      "Andre Yang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Mei Li",
      "Mengchu Zhou"
     ],
     "a": [
      "Liang Chao",
      "David King"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Shaoyi Sun",
      "Jim Peng"
     ],
     "a": [
      "Surbhi Sabharwal",
      "Louis Vessichelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Ann Betterton",
      "Liangang Liu"
     ],
     "a": [
      "Evelyn Du",
      "Liangjie Zhu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Shaoyi Sun",
      "Rui Zhang"
     ],
     "a": [
      "Kristen Silvestri",
      "Ronnie Yin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jennifer Qian",
      "Ann Betterton"
     ],
     "a": [
      "Evelyn Du",
      "Surbhi Sabharwal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Sam Zhou",
      "Liangang Liu"
     ],
     "a": [
      "Brandon Fulford",
      "David King"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jim Peng",
      "Mengchu Zhou"
     ],
     "a": [
      "Jeffrey Heil",
      "Liangjie Zhu"
     ]
    }
   ],
   "subs": [
    "Surbhi Sabharwal",
    "David King"
   ]
  },
  {
   "result": "home",
   "week": 1,
   "home": "ACE",
   "away": "Flemington",
   "time": "2026-03-01T14:00:00",
   "complete": true,
   "homePoints": 646,
   "awayPoints": 484,
   "homeGW": 27,
   "awayGW": 5,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kate Siedell",
      "Ed Hutchinson"
     ],
     "a": [
      "Aimee Castellano",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Stacey Frank",
      "Brian Rowan"
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
     "as": 14,
     "h": [
      "Elyse Diamond",
      "Marc Pellicane"
     ],
     "a": [
      "Tara Kramer",
      "Marc Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Pam Boyd",
      "Robert Finley"
     ],
     "a": [
      "Christine Papa",
      "Bob Castellano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Pam Boyd",
      "Kate Siedell"
     ],
     "a": [
      "Denise Richmond",
      "Barbara Hess"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Elyse Diamond",
      "Stacey Frank"
     ],
     "a": [
      "Tara Kramer",
      "Aimee Castellano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Marc Pellicane",
      "Brian Rowan"
     ],
     "a": [
      "Steven Gregov",
      "Eric Luque"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jeff Lorman",
      "James Shaw"
     ],
     "a": [
      "Todd Stein",
      "Marc Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Stacey Frank",
      "Ed Hutchinson"
     ],
     "a": [
      "Barbara Hess",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Pam Boyd",
      "Brian Rowan"
     ],
     "a": [
      "Christine Papa",
      "Todd Stein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Elyse Diamond",
      "Robert Finley"
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
     "as": 17,
     "h": [
      "Kate Siedell",
      "Jeff Lorman"
     ],
     "a": [
      "Tara Kramer",
      "Marc Friedman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kate Siedell",
      "Stacey Frank"
     ],
     "a": [
      "Denise Richmond",
      "Aimee Castellano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Pam Boyd",
      "Susan Perry"
     ],
     "a": [
      "Christine Papa",
      "Barbara Hess"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Brian Rowan",
      "Ed Hutchinson"
     ],
     "a": [
      "Eric Luque",
      "Todd Stein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "James Shaw",
      "Marc Pellicane"
     ],
     "a": [
      "Bob Castellano",
      "Steven Gregov"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Stacey Frank",
      "Marc Pellicane"
     ],
     "a": [
      "Aimee Castellano",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Susan Perry",
      "James Shaw"
     ],
     "a": [
      "Christine Papa",
      "Steven Gregov"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kate Siedell",
      "Ed Hutchinson"
     ],
     "a": [
      "Barbara Hess",
      "Bob Castellano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Elyse Diamond",
      "Jeff Lorman"
     ],
     "a": [
      "Denise Richmond",
      "Marc Friedman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Kate Siedell",
      "Elyse Diamond"
     ],
     "a": [
      "Aimee Castellano",
      "Barbara Hess"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Pam Boyd",
      "Stacey Frank"
     ],
     "a": [
      "Tara Kramer",
      "Denise Richmond"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "James Shaw",
      "Robert Finley"
     ],
     "a": [
      "Bob Castellano",
      "Todd Stein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Brian Rowan",
      "Marc Pellicane"
     ],
     "a": [
      "Eric Luque",
      "Marc Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kate Siedell",
      "Brian Rowan"
     ],
     "a": [
      "Aimee Castellano",
      "Marc Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Stacey Frank",
      "Ed Hutchinson"
     ],
     "a": [
      "Tara Kramer",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Elyse Diamond",
      "Jeff Lorman"
     ],
     "a": [
      "Christine Papa",
      "Todd Stein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Susan Perry",
      "Robert Finley"
     ],
     "a": [
      "Barbara Hess",
      "Steven Gregov"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Pam Boyd",
      "Susan Perry"
     ],
     "a": [
      "Christine Papa",
      "Denise Richmond"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kate Siedell",
      "Stacey Frank"
     ],
     "a": [
      "Aimee Castellano",
      "Barbara Hess"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Marc Pellicane",
      "James Shaw"
     ],
     "a": [
      "Bob Castellano",
      "Eric Luque"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Ed Hutchinson",
      "Robert Finley"
     ],
     "a": [
      "Todd Stein",
      "Steven Gregov"
     ]
    }
   ],
   "subs": [
    "Susan Perry"
   ]
  },
  {
   "result": "away",
   "week": 2,
   "home": "Pickleball Kingdom Hamilton",
   "away": "ACE",
   "time": "2026-03-08T12:00:00",
   "complete": true,
   "homePoints": 521,
   "awayPoints": 666,
   "homeGW": 7,
   "awayGW": 25,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Fabienne Yu",
      "Albert Pamudji"
     ],
     "a": [
      "Stacey Frank",
      "Brad Daddis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jean Wang",
      "Frank Ding"
     ],
     "a": [
      "Elyse Diamond",
      "Marc Pellicane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Lillian Gin-Lee",
      "Leon Li"
     ],
     "a": [
      "Pam Boyd",
      "Robert Finley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Stacy Garretson",
      "Zhe Ding"
     ],
     "a": [
      "Kate Siedell",
      "Marc Harden"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jean Wang",
      "Fabienne Yu"
     ],
     "a": [
      "Stacey Frank",
      "Kate Siedell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Stacy Garretson",
      "Jamie Sandman"
     ],
     "a": [
      "Sandy Alkins",
      "Pam Boyd"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Yaowen Li",
      "Frank Ding"
     ],
     "a": [
      "Robert Finley",
      "Roger Graterol"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Leon Li",
      "Jack Brod"
     ],
     "a": [
      "Marc Pellicane",
      "Marc Harden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Jean Wang",
      "Yaowen Li"
     ],
     "a": [
      "Stacey Frank",
      "Marc Harden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lillian Gin-Lee",
      "Zhe Ding"
     ],
     "a": [
      "Sandy Alkins",
      "Marc Pellicane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Fabienne Yu",
      "Albert Pamudji"
     ],
     "a": [
      "Elyse Diamond",
      "Brad Daddis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jamie Sandman",
      "Jack Brod"
     ],
     "a": [
      "Kate Siedell",
      "Jeff Lorman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Stacy Garretson",
      "Jamie Sandman"
     ],
     "a": [
      "Elyse Diamond",
      "Stacey Frank"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Lillian Gin-Lee",
      "Jean Wang"
     ],
     "a": [
      "Pam Boyd",
      "Kate Siedell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Frank Ding",
      "Zhe Ding"
     ],
     "a": [
      "Roger Graterol",
      "Jeff Lorman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Albert Pamudji",
      "Leon Li"
     ],
     "a": [
      "Robert Finley",
      "Marc Pellicane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Fabienne Yu",
      "Leon Li"
     ],
     "a": [
      "Sandy Alkins",
      "Robert Finley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Stacy Garretson",
      "Frank Ding"
     ],
     "a": [
      "Stacey Frank",
      "Marc Harden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Jamie Sandman",
      "Jack Brod"
     ],
     "a": [
      "Pam Boyd",
      "Roger Graterol"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Lillian Gin-Lee",
      "Yaowen Li"
     ],
     "a": [
      "Elyse Diamond",
      "Brad Daddis"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Fabienne Yu",
      "Stacy Garretson"
     ],
     "a": [
      "Stacey Frank",
      "Pam Boyd"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jean Wang",
      "Lillian Gin-Lee"
     ],
     "a": [
      "Kate Siedell",
      "Sandy Alkins"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Yaowen Li",
      "Zhe Ding"
     ],
     "a": [
      "Marc Pellicane",
      "Jeff Lorman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jack Brod",
      "Albert Pamudji"
     ],
     "a": [
      "Marc Harden",
      "Robert Finley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Lillian Gin-Lee",
      "Albert Pamudji"
     ],
     "a": [
      "Elyse Diamond",
      "Jeff Lorman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Stacy Garretson",
      "Frank Ding"
     ],
     "a": [
      "Kate Siedell",
      "Marc Harden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jamie Sandman",
      "Leon Li"
     ],
     "a": [
      "Sandy Alkins",
      "Brad Daddis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jean Wang",
      "Jack Brod"
     ],
     "a": [
      "Pam Boyd",
      "Roger Graterol"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Stacy Garretson",
      "Fabienne Yu"
     ],
     "a": [
      "Stacey Frank",
      "Kate Siedell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jean Wang",
      "Jamie Sandman"
     ],
     "a": [
      "Sandy Alkins",
      "Pam Boyd"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Leon Li",
      "Zhe Ding"
     ],
     "a": [
      "Roger Graterol",
      "Jeff Lorman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Frank Ding",
      "Yaowen Li"
     ],
     "a": [
      "Marc Pellicane",
      "Marc Harden"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 2,
   "home": "Monroe",
   "away": "Flemington",
   "time": "2026-03-08T12:00:00",
   "complete": true,
   "homePoints": 589,
   "awayPoints": 619,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Andrea Mui",
      "Eliezer Mintz"
     ],
     "a": [
      "Aimee Castellano",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Lucy Li",
      "Tim Ahn"
     ],
     "a": [
      "Susan Ackley",
      "Steven Gregov"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tracey Collins",
      "Santhosh Pillai"
     ],
     "a": [
      "Barbara Hess",
      "Bob Castellano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Helen Liu",
      "Guy Ohn"
     ],
     "a": [
      "Denise Richmond",
      "David Osborne"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Paula Cushing",
      "Andrea Mui"
     ],
     "a": [
      "Aimee Castellano",
      "Susan Ackley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Tracey Collins",
      "Lucy Li"
     ],
     "a": [
      "Amy Johnson",
      "Sue Johnson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Santhosh Pillai",
      "Guy Ohn"
     ],
     "a": [
      "Art Muth",
      "Eric Luque"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Eliezer Mintz",
      "Tim Ahn"
     ],
     "a": [
      "Steven Gregov",
      "Scott Rubin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Helen Liu",
      "Santhosh Pillai"
     ],
     "a": [
      "Aimee Castellano",
      "Bob Castellano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Andrea Mui",
      "Tim Ahn"
     ],
     "a": [
      "Amy Johnson",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Lucy Li",
      "Eliezer Mintz"
     ],
     "a": [
      "Susan Ackley",
      "Scott Rubin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Paula Cushing",
      "Guy Ohn"
     ],
     "a": [
      "Sue Johnson",
      "Art Muth"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Andrea Mui",
      "Lucy Li"
     ],
     "a": [
      "Denise Richmond",
      "Amy Johnson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Helen Liu",
      "Tracey Collins"
     ],
     "a": [
      "Barbara Hess",
      "Sue Johnson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Naresh Malhotra",
      "Santhosh Pillai"
     ],
     "a": [
      "David Osborne",
      "Eric Luque"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Eliezer Mintz",
      "Guy Ohn"
     ],
     "a": [
      "Art Muth",
      "Bob Castellano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Helen Liu",
      "Tim Ahn"
     ],
     "a": [
      "Amy Johnson",
      "Bob Castellano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Andrea Mui",
      "Guy Ohn"
     ],
     "a": [
      "Barbara Hess",
      "Scott Rubin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tracey Collins",
      "Eliezer Mintz"
     ],
     "a": [
      "Denise Richmond",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Lucy Li",
      "Naresh Malhotra"
     ],
     "a": [
      "Sue Johnson",
      "Art Muth"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Tracey Collins",
      "Paula Cushing"
     ],
     "a": [
      "Amy Johnson",
      "Susan Ackley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Helen Liu",
      "Lucy Li"
     ],
     "a": [
      "Aimee Castellano",
      "Barbara Hess"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Santhosh Pillai",
      "Naresh Malhotra"
     ],
     "a": [
      "Art Muth",
      "David Osborne"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Tim Ahn",
      "Guy Ohn"
     ],
     "a": [
      "Steven Gregov",
      "Bob Castellano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Paula Cushing",
      "Santhosh Pillai"
     ],
     "a": [
      "Susan Ackley",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Tracey Collins",
      "Eliezer Mintz"
     ],
     "a": [
      "Aimee Castellano",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lucy Li",
      "Tim Ahn"
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
     "as": 17,
     "h": [
      "Helen Liu",
      "Naresh Malhotra"
     ],
     "a": [
      "Sue Johnson",
      "Scott Rubin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Paula Cushing",
      "Tracey Collins"
     ],
     "a": [
      "Aimee Castellano",
      "Susan Ackley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Helen Liu",
      "Lucy Li"
     ],
     "a": [
      "Barbara Hess",
      "Denise Richmond"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Eliezer Mintz",
      "Santhosh Pillai"
     ],
     "a": [
      "Scott Rubin",
      "Steven Gregov"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Guy Ohn",
      "Naresh Malhotra"
     ],
     "a": [
      "Eric Luque",
      "David Osborne"
     ]
    }
   ],
   "subs": [
    "Helen Liu"
   ]
  },
  {
   "result": "away",
   "week": 2,
   "home": "Stelton Sports",
   "away": "Jersey Pickleball Club",
   "time": "2026-03-08T14:00:00",
   "complete": true,
   "homePoints": 567,
   "awayPoints": 650,
   "homeGW": 7,
   "awayGW": 25,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ann Betterton",
      "Liangang Liu"
     ],
     "a": [
      "Amy Chrebet",
      "Joe Palumbo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Shaoyi Sun",
      "Sam Zhou"
     ],
     "a": [
      "Natasha De Carvalho",
      "Michael Swell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jennifer Qian",
      "Jim Peng"
     ],
     "a": [
      "Rosalyn Goldsmith",
      "Darren Saks"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Rui Zhang",
      "Lei Dong"
     ],
     "a": [
      "Liz Cuozzo",
      "Andrew Hyman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jennifer Qian",
      "Rui Zhang"
     ],
     "a": [
      "Rosalyn Goldsmith",
      "Natasha De Carvalho"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ann Betterton",
      "Cathy Proctor"
     ],
     "a": [
      "Eva Danieli",
      "Liz Cuozzo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Liangang Liu",
      "Lei Dong"
     ],
     "a": [
      "Michael Swell",
      "Brad Oldham"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Sam Zhou",
      "Mengchu Zhou"
     ],
     "a": [
      "Andrew Hyman",
      "Joe Palumbo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Shaoyi Sun",
      "Mengchu Zhou"
     ],
     "a": [
      "Natasha De Carvalho",
      "Joe Palumbo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Cathy Proctor",
      "Wen Jin"
     ],
     "a": [
      "Liz Cuozzo",
      "Michael Swell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Jennifer Qian",
      "Jim Peng"
     ],
     "a": [
      "Amy Chrebet",
      "Brad Oldham"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Rui Zhang",
      "Sam Zhou"
     ],
     "a": [
      "Eva Danieli",
      "Darren Saks"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Rui Zhang",
      "Ann Betterton"
     ],
     "a": [
      "Natasha De Carvalho",
      "Rosalyn Goldsmith"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Shaoyi Sun",
      "Cathy Proctor"
     ],
     "a": [
      "Eva Danieli",
      "Amy Chrebet"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Liangang Liu",
      "Wen Jin"
     ],
     "a": [
      "Brad Oldham",
      "Joe Palumbo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Jim Peng",
      "Mengchu Zhou"
     ],
     "a": [
      "Darren Saks",
      "Andrew Hyman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jennifer Qian",
      "Sam Zhou"
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
     "as": 14,
     "h": [
      "Ann Betterton",
      "Liangang Liu"
     ],
     "a": [
      "Amy Chrebet",
      "Brad Oldham"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Cathy Proctor",
      "Wen Jin"
     ],
     "a": [
      "Liz Cuozzo",
      "Andrew Hyman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Shaoyi Sun",
      "Lei Dong"
     ],
     "a": [
      "Rosalyn Goldsmith",
      "Darren Saks"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Rui Zhang",
      "Jennifer Qian"
     ],
     "a": [
      "Natasha De Carvalho",
      "Liz Cuozzo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Cathy Proctor",
      "Shaoyi Sun"
     ],
     "a": [
      "Amy Chrebet",
      "Rosalyn Goldsmith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Liangang Liu",
      "Lei Dong"
     ],
     "a": [
      "Michael Swell",
      "Brad Oldham"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Jim Peng",
      "Mengchu Zhou"
     ],
     "a": [
      "Andrew Hyman",
      "Joe Palumbo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Shaoyi Sun",
      "Wen Jin"
     ],
     "a": [
      "Natasha De Carvalho",
      "Joe Palumbo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ann Betterton",
      "Mengchu Zhou"
     ],
     "a": [
      "Liz Cuozzo",
      "Michael Swell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jennifer Qian",
      "Sam Zhou"
     ],
     "a": [
      "Eva Danieli",
      "Darren Saks"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Rui Zhang",
      "Lei Dong"
     ],
     "a": [
      "Rosalyn Goldsmith",
      "Brad Oldham"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Rui Zhang",
      "Ann Betterton"
     ],
     "a": [
      "Natasha De Carvalho",
      "Liz Cuozzo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jennifer Qian",
      "Cathy Proctor"
     ],
     "a": [
      "Eva Danieli",
      "Amy Chrebet"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Liangang Liu",
      "Wen Jin"
     ],
     "a": [
      "Michael Swell",
      "Joe Palumbo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sam Zhou",
      "Jim Peng"
     ],
     "a": [
      "Darren Saks",
      "Andrew Hyman"
     ]
    }
   ],
   "subs": [
    "Cathy Proctor"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Pickleball Palace",
   "away": "Home Court",
   "time": "2026-03-08T14:00:00",
   "complete": true,
   "homePoints": 594,
   "awayPoints": 583,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Debbie Tovitz",
      "Alex Lee"
     ],
     "a": [
      "Karan Pescatore",
      "Emil Pescatore"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Laura Elleman",
      "David Coleman"
     ],
     "a": [
      "Andrea Smith",
      "Robert Huntley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jennifer Burke",
      "Charlie Johnston"
     ],
     "a": [
      "Margaret Weidlich",
      "Michael Vincent"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Amanda Quinn",
      "Bud Heller"
     ],
     "a": [
      "Sarah Mcparland",
      "George Mandl"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Laura Elleman",
      "Debbie Tovitz"
     ],
     "a": [
      "Karan Pescatore",
      "Sarah Mcparland"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Amanda Quinn",
      "Jennifer Burke"
     ],
     "a": [
      "Margaret Weidlich",
      "Kajal Sinkar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Bud Heller",
      "Chris Heimerle"
     ],
     "a": [
      "Emil Pescatore",
      "Robert Huntley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "David Coleman",
      "Alex Lee"
     ],
     "a": [
      "Mark Lim",
      "Michael Vincent"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Carly Pfeffer",
      "Bud Heller"
     ],
     "a": [
      "Sarah Mcparland",
      "Emil Pescatore"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kate Curren",
      "Chris Heimerle"
     ],
     "a": [
      "Karan Pescatore",
      "Robert Huntley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Debbie Tovitz",
      "Alex Lee"
     ],
     "a": [
      "Andrea Smith",
      "Michael Vincent"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jennifer Burke",
      "Charlie Johnston"
     ],
     "a": [
      "Margaret Weidlich",
      "Mark Lim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kate Curren",
      "Jennifer Burke"
     ],
     "a": [
      "Karan Pescatore",
      "Margaret Weidlich"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Carly Pfeffer",
      "Debbie Tovitz"
     ],
     "a": [
      "Andrea Smith",
      "Kajal Sinkar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "David Coleman",
      "Charlie Johnston"
     ],
     "a": [
      "Emil Pescatore",
      "George Mandl"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Chris Heimerle",
      "Johnson Chang"
     ],
     "a": [
      "Mark Lim",
      "Robert Huntley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kate Curren",
      "Charlie Johnston"
     ],
     "a": [
      "Sarah Mcparland",
      "Emil Pescatore"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Amanda Quinn",
      "David Coleman"
     ],
     "a": [
      "Karan Pescatore",
      "Robert Huntley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Carly Pfeffer",
      "Bud Heller"
     ],
     "a": [
      "Kajal Sinkar",
      "George Mandl"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Laura Elleman",
      "Chris Heimerle"
     ],
     "a": [
      "Andrea Smith",
      "Michael Vincent"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Carly Pfeffer",
      "Amanda Quinn"
     ],
     "a": [
      "Andrea Smith",
      "Kajal Sinkar"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kate Curren",
      "Laura Elleman"
     ],
     "a": [
      "Sarah Mcparland",
      "Margaret Weidlich"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Alex Lee",
      "Chris Heimerle"
     ],
     "a": [
      "Emil Pescatore",
      "George Mandl"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "David Coleman",
      "Johnson Chang"
     ],
     "a": [
      "Mark Lim",
      "Michael Vincent"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kate Curren",
      "Charlie Johnston"
     ],
     "a": [
      "Karan Pescatore",
      "Emil Pescatore"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Carly Pfeffer",
      "Alex Lee"
     ],
     "a": [
      "Sarah Mcparland",
      "Robert Huntley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Laura Elleman",
      "Bud Heller"
     ],
     "a": [
      "Andrea Smith",
      "Mark Lim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Amanda Quinn",
      "Johnson Chang"
     ],
     "a": [
      "Kajal Sinkar",
      "Michael Vincent"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kate Curren",
      "Carly Pfeffer"
     ],
     "a": [
      "Karan Pescatore",
      "Sarah Mcparland"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Laura Elleman",
      "Amanda Quinn"
     ],
     "a": [
      "Margaret Weidlich",
      "Kajal Sinkar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Alex Lee",
      "Bud Heller"
     ],
     "a": [
      "Emil Pescatore",
      "Robert Huntley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Johnson Chang",
      "Charlie Johnston"
     ],
     "a": [
      "Mark Lim",
      "George Mandl"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 2,
   "home": "Montville",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-03-08T14:00:00",
   "complete": true,
   "homePoints": 627,
   "awayPoints": 564,
   "homeGW": 21,
   "awayGW": 11,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Amanda Brouillard",
      "Louis Vessichelli"
     ],
     "a": [
      "Dint Moore",
      "Abraham Telechanski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kristen Silvestri",
      "Jinfa Chen"
     ],
     "a": [
      "Kerry Shannon",
      "Oraldo Estrada"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Oliveira Karen",
      "Andre Yang"
     ],
     "a": [
      "Claudia Van Loo",
      "Marvin Lavy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Ronnie Yin",
      "Liangjie Zhu"
     ],
     "a": [
      "Ayten Mayer",
      "Karan Bhagat"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Amanda Brouillard",
      "Oliveira Karen"
     ],
     "a": [
      "Dint Moore",
      "Kerry Shannon"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kristen Silvestri",
      "Cuc Dang"
     ],
     "a": [
      "Claudia Van Loo",
      "Renee Mitzner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Andre Yang",
      "Jinfa Chen"
     ],
     "a": [
      "Abraham Telechanski",
      "Oraldo Estrada"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Peter Chen",
      "Liangjie Zhu"
     ],
     "a": [
      "Richard Abate",
      "Marvin Lavy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Oliveira Karen",
      "Jinfa Chen"
     ],
     "a": [
      "Dint Moore",
      "Abraham Telechanski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kristen Silvestri",
      "Andre Yang"
     ],
     "a": [
      "Kerry Shannon",
      "Oraldo Estrada"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Amanda Brouillard",
      "Louis Vessichelli"
     ],
     "a": [
      "Ayten Mayer",
      "Richard Abate"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ronnie Yin",
      "Liangjie Zhu"
     ],
     "a": [
      "Renee Mitzner",
      "Karan Bhagat"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kristen Silvestri",
      "Ronnie Yin"
     ],
     "a": [
      "Claudia Van Loo",
      "Kerry Shannon"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Oliveira Karen",
      "Cuc Dang"
     ],
     "a": [
      "Renee Mitzner",
      "Ayten Mayer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Andre Yang",
      "Jinfa Chen"
     ],
     "a": [
      "Abraham Telechanski",
      "Richard Abate"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Peter Chen",
      "Michael Oppenheim"
     ],
     "a": [
      "Oraldo Estrada",
      "Marvin Lavy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Amanda Brouillard",
      "Andre Yang"
     ],
     "a": [
      "Kerry Shannon",
      "Abraham Telechanski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Oliveira Karen",
      "Liangjie Zhu"
     ],
     "a": [
      "Dint Moore",
      "Oraldo Estrada"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kristen Silvestri",
      "Louis Vessichelli"
     ],
     "a": [
      "Renee Mitzner",
      "Marvin Lavy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Cuc Dang",
      "Michael Oppenheim"
     ],
     "a": [
      "Claudia Van Loo",
      "Karan Bhagat"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kristen Silvestri",
      "Cuc Dang"
     ],
     "a": [
      "Dint Moore",
      "Ayten Mayer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Amanda Brouillard",
      "Ronnie Yin"
     ],
     "a": [
      "Kerry Shannon",
      "Claudia Van Loo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Louis Vessichelli",
      "Jinfa Chen"
     ],
     "a": [
      "Abraham Telechanski",
      "Marvin Lavy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Michael Oppenheim",
      "Peter Chen"
     ],
     "a": [
      "Richard Abate",
      "Karan Bhagat"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Oliveira Karen",
      "Jinfa Chen"
     ],
     "a": [
      "Kerry Shannon",
      "Abraham Telechanski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Amanda Brouillard",
      "Andre Yang"
     ],
     "a": [
      "Dint Moore",
      "Oraldo Estrada"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Kristen Silvestri",
      "Peter Chen"
     ],
     "a": [
      "Renee Mitzner",
      "Richard Abate"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Ronnie Yin",
      "Louis Vessichelli"
     ],
     "a": [
      "Claudia Van Loo",
      "Karan Bhagat"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Amanda Brouillard",
      "Oliveira Karen"
     ],
     "a": [
      "Claudia Van Loo",
      "Ayten Mayer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Kristen Silvestri",
      "Ronnie Yin"
     ],
     "a": [
      "Kerry Shannon",
      "Dint Moore"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Liangjie Zhu",
      "Jinfa Chen"
     ],
     "a": [
      "Abraham Telechanski",
      "Oraldo Estrada"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Andre Yang",
      "Michael Oppenheim"
     ],
     "a": [
      "Richard Abate",
      "Marvin Lavy"
     ]
    }
   ],
   "subs": [
    "Marvin Lavy",
    "Cuc Dang",
    "Jinfa Chen",
    "Oraldo Estrada"
   ]
  },
  {
   "result": "away",
   "week": 2,
   "home": "APC Garden State",
   "away": "Bounce Malvern",
   "time": "2026-03-08T14:00:00",
   "complete": true,
   "homePoints": 512,
   "awayPoints": 676,
   "homeGW": 5,
   "awayGW": 27,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Lori Flickinger",
      "Darin Morgan"
     ],
     "a": [
      "Stephanie Woomer",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jiyun Yuh",
      "Yang Wang"
     ],
     "a": [
      "Katherine Maruyama",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Lara Webb",
      "Rick Derose"
     ],
     "a": [
      "Tera Baccile",
      "Dana Luscombe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Vita Mulholland",
      "Brian Caine"
     ],
     "a": [
      "Vicki Main",
      "Derek Le"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Lori Flickinger",
      "Vita Mulholland"
     ],
     "a": [
      "Katherine Maruyama",
      "Stephanie Woomer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lara Webb",
      "Laura Sweet"
     ],
     "a": [
      "Harriet Levin",
      "Vicki Main"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Howie Steiner",
      "Darin Morgan"
     ],
     "a": [
      "Dana Luscombe",
      "Michael Dieterle"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Yang Wang",
      "Brian Caine"
     ],
     "a": [
      "Michael Finkelstein",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Vita Mulholland",
      "Darin Morgan"
     ],
     "a": [
      "Tera Baccile",
      "Dana Luscombe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Lara Webb",
      "Brian Caine"
     ],
     "a": [
      "Harriet Levin",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Laura Sweet",
      "Rick Derose"
     ],
     "a": [
      "Katherine Maruyama",
      "Michael Dieterle"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jiyun Yuh",
      "Yang Wang"
     ],
     "a": [
      "Stephanie Woomer",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Lara Webb",
      "Jiyun Yuh"
     ],
     "a": [
      "Vicki Main",
      "Tera Baccile"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lori Flickinger",
      "Laura Sweet"
     ],
     "a": [
      "Stephanie Woomer",
      "Harriet Levin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Darin Morgan",
      "Brian Caine"
     ],
     "a": [
      "Michael Finkelstein",
      "Keith Goldberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Howie Steiner",
      "Rick Derose"
     ],
     "a": [
      "Derek Le",
      "Michael Dieterle"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Laura Sweet",
      "Howie Steiner"
     ],
     "a": [
      "Katherine Maruyama",
      "Dana Luscombe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lori Flickinger",
      "Rick Derose"
     ],
     "a": [
      "Tera Baccile",
      "Michael Dieterle"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Vita Mulholland",
      "Yang Wang"
     ],
     "a": [
      "Vicki Main",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jiyun Yuh",
      "Darin Morgan"
     ],
     "a": [
      "Harriet Levin",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Lara Webb",
      "Jiyun Yuh"
     ],
     "a": [
      "Tera Baccile",
      "Katherine Maruyama"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Lori Flickinger",
      "Laura Sweet"
     ],
     "a": [
      "Vicki Main",
      "Stephanie Woomer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Brian Caine",
      "Rick Derose"
     ],
     "a": [
      "Keith Goldberg",
      "Derek Le"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Yang Wang",
      "Howie Steiner"
     ],
     "a": [
      "Michael Dieterle",
      "Dana Luscombe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jiyun Yuh",
      "Rick Derose"
     ],
     "a": [
      "Vicki Main",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Vita Mulholland",
      "Darin Morgan"
     ],
     "a": [
      "Stephanie Woomer",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Lara Webb",
      "Yang Wang"
     ],
     "a": [
      "Harriet Levin",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Laura Sweet",
      "Howie Steiner"
     ],
     "a": [
      "Katherine Maruyama",
      "Michael Dieterle"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Lara Webb",
      "Lori Flickinger"
     ],
     "a": [
      "Harriet Levin",
      "Katherine Maruyama"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Vita Mulholland",
      "Laura Sweet"
     ],
     "a": [
      "Tera Baccile",
      "Stephanie Woomer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Yang Wang",
      "Howie Steiner"
     ],
     "a": [
      "Michael Finkelstein",
      "Dana Luscombe"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Darin Morgan",
      "Brian Caine"
     ],
     "a": [
      "Keith Goldberg",
      "Michael Dieterle"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 3,
   "home": "Jersey Pickleball Club",
   "away": "Flemington",
   "time": "2026-03-14T09:00:00",
   "complete": true,
   "homePoints": 636,
   "awayPoints": 618,
   "homeGW": 19,
   "awayGW": 13,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Alice Napolitano",
      "Joe Palumbo"
     ],
     "a": [
      "Denise Richmond",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Rosalyn Goldsmith",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Sue Johnson",
      "Art Muth"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Pam Friedman",
      "Lance Brown"
     ],
     "a": [
      "Christine Papa",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Natasha De Carvalho",
      "Andrew Hyman"
     ],
     "a": [
      "Carol Mastroianni",
      "Marc Friedman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Alice Napolitano",
      "Natasha De Carvalho"
     ],
     "a": [
      "Carol Mastroianni",
      "Denise Richmond"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Pam Friedman",
      "Rosalyn Goldsmith"
     ],
     "a": [
      "Amy Johnson",
      "Sue Johnson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Michael Dombrowiecki",
      "Joe Palumbo"
     ],
     "a": [
      "David Osborne",
      "Eric Luque"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Andrew Hyman",
      "Lance Brown"
     ],
     "a": [
      "Art Muth",
      "Marc Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Natasha De Carvalho",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Amy Johnson",
      "Art Muth"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Rosalyn Goldsmith",
      "Joe Palumbo"
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
     "as": 15,
     "h": [
      "Alice Napolitano",
      "Lance Brown"
     ],
     "a": [
      "Sue Johnson",
      "Scott Rubin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Pam Friedman",
      "Andrew Hyman"
     ],
     "a": [
      "Denise Richmond",
      "David Osborne"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Rosalyn Goldsmith",
      "Alice Napolitano"
     ],
     "a": [
      "Carol Mastroianni",
      "Christine Papa"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Pam Friedman",
      "Natasha De Carvalho"
     ],
     "a": [
      "Amy Johnson",
      "Denise Richmond"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Joe Palumbo",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Art Muth",
      "Scott Rubin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Andrew Hyman",
      "Lance Brown"
     ],
     "a": [
      "Eric Luque",
      "Marc Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Pam Friedman",
      "Lance Brown"
     ],
     "a": [
      "Denise Richmond",
      "Scott Rubin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Alice Napolitano",
      "Joe Palumbo"
     ],
     "a": [
      "Amy Johnson",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Natasha De Carvalho",
      "Andrew Hyman"
     ],
     "a": [
      "Carol Mastroianni",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Rosalyn Goldsmith",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Sue Johnson",
      "Art Muth"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Natasha De Carvalho",
      "Pam Friedman"
     ],
     "a": [
      "Christine Papa",
      "Sue Johnson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Alice Napolitano",
      "Rosalyn Goldsmith"
     ],
     "a": [
      "Amy Johnson",
      "Carol Mastroianni"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Michael Dombrowiecki",
      "Lance Brown"
     ],
     "a": [
      "Art Muth",
      "Marc Friedman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Joe Palumbo",
      "Andrew Hyman"
     ],
     "a": [
      "David Osborne",
      "Scott Rubin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Alice Napolitano",
      "Lance Brown"
     ],
     "a": [
      "Christine Papa",
      "Scott Rubin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Rosalyn Goldsmith",
      "Joe Palumbo"
     ],
     "a": [
      "Carol Mastroianni",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 30,
     "as": 28,
     "h": [
      "Natasha De Carvalho",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Amy Johnson",
      "Marc Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Pam Friedman",
      "Andrew Hyman"
     ],
     "a": [
      "Denise Richmond",
      "Eric Luque"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Rosalyn Goldsmith",
      "Pam Friedman"
     ],
     "a": [
      "Christine Papa",
      "Sue Johnson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Alice Napolitano",
      "Natasha De Carvalho"
     ],
     "a": [
      "Carol Mastroianni",
      "Denise Richmond"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Michael Dombrowiecki",
      "Andrew Hyman"
     ],
     "a": [
      "David Osborne",
      "Eric Luque"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Joe Palumbo",
      "Lance Brown"
     ],
     "a": [
      "Marc Friedman",
      "Scott Rubin"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 3,
   "home": "Home Court",
   "away": "ACE",
   "time": "2026-03-14T12:00:00",
   "complete": true,
   "homePoints": 496,
   "awayPoints": 660,
   "homeGW": 5,
   "awayGW": 27,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Margaret Weidlich",
      "Ezra Chen"
     ],
     "a": [
      "Stacey Frank",
      "James Shaw"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Liby Saigal",
      "Emil Pescatore"
     ],
     "a": [
      "Elyse Diamond",
      "Jeff Lorman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Anita Bobba",
      "Mark Lim"
     ],
     "a": [
      "Kate Siedell",
      "Marc Harden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Laura Spilatro",
      "Michael Barninger"
     ],
     "a": [
      "Pam Boyd",
      "Brad Daddis"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Margaret Weidlich",
      "Andrea Smith"
     ],
     "a": [
      "Pam Boyd",
      "Kate Siedell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Liby Saigal",
      "Anita Bobba"
     ],
     "a": [
      "Elyse Diamond",
      "Stacey Frank"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Mark Lim",
      "Michael Barninger"
     ],
     "a": [
      "James Shaw",
      "Jeff Lorman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Ezra Chen",
      "Robert Huntley"
     ],
     "a": [
      "Marc Harden",
      "Jonathan Brand"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Liby Saigal",
      "Emil Pescatore"
     ],
     "a": [
      "Elyse Diamond",
      "Brad Daddis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Andrea Smith",
      "Robert Huntley"
     ],
     "a": [
      "Kate Siedell",
      "Marc Harden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Margaret Weidlich",
      "Ezra Chen"
     ],
     "a": [
      "Stacey Frank",
      "James Shaw"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Anita Bobba",
      "Michael Barninger"
     ],
     "a": [
      "Pam Boyd",
      "Jonathan Brand"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Margaret Weidlich",
      "Liby Saigal"
     ],
     "a": [
      "Elyse Diamond",
      "Kate Siedell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Laura Spilatro",
      "Andrea Smith"
     ],
     "a": [
      "Pam Boyd",
      "Stacey Frank"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Emil Pescatore",
      "Ezra Chen"
     ],
     "a": [
      "Brad Daddis",
      "Jonathan Brand"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Robert Huntley",
      "Michael Barninger"
     ],
     "a": [
      "Jeff Lorman",
      "James Shaw"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Margaret Weidlich",
      "Emil Pescatore"
     ],
     "a": [
      "Kate Siedell",
      "Jonathan Brand"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Andrea Smith",
      "Michael Barninger"
     ],
     "a": [
      "Pam Boyd",
      "Brad Daddis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Anita Bobba",
      "Ezra Chen"
     ],
     "a": [
      "Stacey Frank",
      "Marc Harden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Liby Saigal",
      "Mark Lim"
     ],
     "a": [
      "Elyse Diamond",
      "Jeff Lorman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Laura Spilatro",
      "Andrea Smith"
     ],
     "a": [
      "Stacey Frank",
      "Kate Siedell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Liby Saigal",
      "Anita Bobba"
     ],
     "a": [
      "Pam Boyd",
      "Elyse Diamond"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Emil Pescatore",
      "Mark Lim"
     ],
     "a": [
      "James Shaw",
      "Jonathan Brand"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Michael Barninger",
      "Robert Huntley"
     ],
     "a": [
      "Marc Harden",
      "Brad Daddis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Liby Saigal",
      "Mark Lim"
     ],
     "a": [
      "Elyse Diamond",
      "James Shaw"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Margaret Weidlich",
      "Robert Huntley"
     ],
     "a": [
      "Kate Siedell",
      "Jeff Lorman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Laura Spilatro",
      "Ezra Chen"
     ],
     "a": [
      "Stacey Frank",
      "Brad Daddis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Anita Bobba",
      "Emil Pescatore"
     ],
     "a": [
      "Pam Boyd",
      "Marc Harden"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Anita Bobba",
      "Andrea Smith"
     ],
     "a": [
      "Pam Boyd",
      "Kate Siedell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Liby Saigal",
      "Margaret Weidlich"
     ],
     "a": [
      "Stacey Frank",
      "Elyse Diamond"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Emil Pescatore",
      "Robert Huntley"
     ],
     "a": [
      "James Shaw",
      "Marc Harden"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ezra Chen",
      "Michael Barninger"
     ],
     "a": [
      "Jeff Lorman",
      "Jonathan Brand"
     ]
    }
   ],
   "subs": [
    "Jonathan Brand",
    "Liby Saigal",
    "Ezra Chen"
   ]
  },
  {
   "result": "away",
   "week": 3,
   "home": "Monroe",
   "away": "Pickleball Palace",
   "time": "2026-03-14T12:00:00",
   "complete": true,
   "homePoints": 563,
   "awayPoints": 621,
   "homeGW": 13,
   "awayGW": 19,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Quen Koon Ng",
      "Naresh Malhotra"
     ],
     "a": [
      "Kate Curren",
      "Charlie Johnston"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Paula Cushing",
      "Yi Gu"
     ],
     "a": [
      "Kelly Hanson Word",
      "Brian Gonzalez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Lucy Li",
      "Eliezer Mintz"
     ],
     "a": [
      "Jennifer Burke",
      "John Chalerm"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Tara Lombardo",
      "Guy Ohn"
     ],
     "a": [
      "Sinitra Siengsanaoh",
      "John Burke"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Lucy Li",
      "Paula Cushing"
     ],
     "a": [
      "Kate Curren",
      "Jennifer Burke"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Tara Lombardo",
      "Quen Koon Ng"
     ],
     "a": [
      "Kelly Hanson Word",
      "Andrea Dellechiaie"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Guy Ohn",
      "Yi Gu"
     ],
     "a": [
      "Brian Gonzalez",
      "Bud Heller"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Naresh Malhotra",
      "Eliezer Mintz"
     ],
     "a": [
      "John Burke",
      "Charlie Johnston"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Paula Cushing",
      "Guy Ohn"
     ],
     "a": [
      "Sinitra Siengsanaoh",
      "Brian Gonzalez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Tara Lombardo",
      "Naresh Malhotra"
     ],
     "a": [
      "Andrea Dellechiaie",
      "John Burke"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Lucy Li",
      "Yi Gu"
     ],
     "a": [
      "Kelly Hanson Word",
      "John Chalerm"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Quen Koon Ng",
      "Eliezer Mintz"
     ],
     "a": [
      "Jennifer Burke",
      "Charlie Johnston"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Paula Cushing",
      "Quen Koon Ng"
     ],
     "a": [
      "Kate Curren",
      "Jennifer Burke"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Lucy Li",
      "Tara Lombardo"
     ],
     "a": [
      "Kelly Hanson Word",
      "Sinitra Siengsanaoh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Eliezer Mintz",
      "Naresh Malhotra"
     ],
     "a": [
      "John Burke",
      "Bud Heller"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Guy Ohn",
      "Yi Gu"
     ],
     "a": [
      "John Chalerm",
      "Charlie Johnston"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Quen Koon Ng",
      "Yi Gu"
     ],
     "a": [
      "Kate Curren",
      "Brian Gonzalez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lucy Li",
      "Guy Ohn"
     ],
     "a": [
      "Andrea Dellechiaie",
      "Bud Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Tara Lombardo",
      "Eliezer Mintz"
     ],
     "a": [
      "Sinitra Siengsanaoh",
      "John Chalerm"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Paula Cushing",
      "Naresh Malhotra"
     ],
     "a": [
      "Jennifer Burke",
      "John Burke"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Paula Cushing",
      "Tara Lombardo"
     ],
     "a": [
      "Kate Curren",
      "Andrea Dellechiaie"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lucy Li",
      "Quen Koon Ng"
     ],
     "a": [
      "Kelly Hanson Word",
      "Jennifer Burke"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Guy Ohn",
      "Naresh Malhotra"
     ],
     "a": [
      "Bud Heller",
      "Brian Gonzalez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Eliezer Mintz",
      "Yi Gu"
     ],
     "a": [
      "Charlie Johnston",
      "John Burke"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Quen Koon Ng",
      "Eliezer Mintz"
     ],
     "a": [
      "Kate Curren",
      "Charlie Johnston"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Lucy Li",
      "Naresh Malhotra"
     ],
     "a": [
      "Sinitra Siengsanaoh",
      "John Chalerm"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Paula Cushing",
      "Yi Gu"
     ],
     "a": [
      "Kelly Hanson Word",
      "Brian Gonzalez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Tara Lombardo",
      "Guy Ohn"
     ],
     "a": [
      "Andrea Dellechiaie",
      "Bud Heller"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Paula Cushing",
      "Quen Koon Ng"
     ],
     "a": [
      "Kate Curren",
      "Andrea Dellechiaie"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Lucy Li",
      "Tara Lombardo"
     ],
     "a": [
      "Sinitra Siengsanaoh",
      "Kelly Hanson Word"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Naresh Malhotra",
      "Yi Gu"
     ],
     "a": [
      "Bud Heller",
      "Charlie Johnston"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Guy Ohn",
      "Eliezer Mintz"
     ],
     "a": [
      "Brian Gonzalez",
      "John Chalerm"
     ]
    }
   ],
   "subs": [
    "John Chalerm",
    "Quen Koon Ng"
   ]
  },
  {
   "result": "home",
   "week": 3,
   "home": "Montville",
   "away": "APC Garden State",
   "time": "2026-03-14T12:00:00",
   "complete": true,
   "homePoints": 628,
   "awayPoints": 621,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ronnie Yin",
      "Liangjie Zhu"
     ],
     "a": [
      "Cynthia Covie",
      "Daniel Mellul"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Oliveira Karen",
      "Andre Yang"
     ],
     "a": [
      "Vita Mulholland",
      "Rick Derose"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kristen Silvestri",
      "Brandon Fulford"
     ],
     "a": [
      "Lara Webb",
      "Lance Stopek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Evelyn Du",
      "Jeffrey Heil"
     ],
     "a": [
      "Laura Sweet",
      "Howie Steiner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Oliveira Karen",
      "Amanda Brouillard"
     ],
     "a": [
      "Lara Webb",
      "Laura Sweet"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ronnie Yin",
      "Evelyn Du"
     ],
     "a": [
      "Vita Mulholland",
      "Jiyun Yuh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Liangjie Zhu",
      "Andre Yang"
     ],
     "a": [
      "Lance Stopek",
      "Laurence Emerson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 28,
     "as": 30,
     "h": [
      "Brandon Fulford",
      "Jeffrey Heil"
     ],
     "a": [
      "Howie Steiner",
      "Daniel Mellul"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Evelyn Du",
      "Andre Yang"
     ],
     "a": [
      "Lara Webb",
      "Daniel Mellul"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Oliveira Karen",
      "Jeffrey Heil"
     ],
     "a": [
      "Jiyun Yuh",
      "Laurence Emerson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Ronnie Yin",
      "Liangjie Zhu"
     ],
     "a": [
      "Laura Sweet",
      "Lance Stopek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Kristen Silvestri",
      "Brandon Fulford"
     ],
     "a": [
      "Cynthia Covie",
      "Rick Derose"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Oliveira Karen",
      "Evelyn Du"
     ],
     "a": [
      "Cynthia Covie",
      "Vita Mulholland"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ronnie Yin",
      "Amanda Brouillard"
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
     "as": 17,
     "h": [
      "Liangjie Zhu",
      "Brandon Fulford"
     ],
     "a": [
      "Laurence Emerson",
      "Rick Derose"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jeffrey Heil",
      "Peter Chen"
     ],
     "a": [
      "Howie Steiner",
      "Lance Stopek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Oliveira Karen",
      "Andre Yang"
     ],
     "a": [
      "Vita Mulholland",
      "Rick Derose"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Evelyn Du",
      "Liangjie Zhu"
     ],
     "a": [
      "Cynthia Covie",
      "Lance Stopek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kristen Silvestri",
      "Peter Chen"
     ],
     "a": [
      "Jiyun Yuh",
      "Laurence Emerson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Amanda Brouillard",
      "Jeffrey Heil"
     ],
     "a": [
      "Lara Webb",
      "Howie Steiner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Amanda Brouillard",
      "Oliveira Karen"
     ],
     "a": [
      "Vita Mulholland",
      "Laura Sweet"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Ronnie Yin",
      "Kristen Silvestri"
     ],
     "a": [
      "Cynthia Covie",
      "Jiyun Yuh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Liangjie Zhu",
      "Peter Chen"
     ],
     "a": [
      "Howie Steiner",
      "Daniel Mellul"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Andre Yang",
      "Jeffrey Heil"
     ],
     "a": [
      "Lance Stopek",
      "Laurence Emerson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Evelyn Du",
      "Andre Yang"
     ],
     "a": [
      "Jiyun Yuh",
      "Lance Stopek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Oliveira Karen",
      "Liangjie Zhu"
     ],
     "a": [
      "Laura Sweet",
      "Howie Steiner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kristen Silvestri",
      "Jeffrey Heil"
     ],
     "a": [
      "Cynthia Covie",
      "Rick Derose"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Amanda Brouillard",
      "Brandon Fulford"
     ],
     "a": [
      "Lara Webb",
      "Daniel Mellul"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kristen Silvestri",
      "Amanda Brouillard"
     ],
     "a": [
      "Lara Webb",
      "Jiyun Yuh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Oliveira Karen",
      "Ronnie Yin"
     ],
     "a": [
      "Laura Sweet",
      "Vita Mulholland"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Andre Yang",
      "Jeffrey Heil"
     ],
     "a": [
      "Howie Steiner",
      "Rick Derose"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Peter Chen",
      "Brandon Fulford"
     ],
     "a": [
      "Laurence Emerson",
      "Daniel Mellul"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 3,
   "home": "Pickleball Kingdom Hamilton",
   "away": "Stelton Sports",
   "time": "2026-03-14T15:00:00",
   "complete": true,
   "homePoints": 618,
   "awayPoints": 591,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lily Liu",
      "Wally Liu"
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
     "as": 12,
     "h": [
      "Jean Wang",
      "Frank Ding"
     ],
     "a": [
      "Mei Li",
      "Sam Zhou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Fabienne Yu",
      "Albert Pamudji"
     ],
     "a": [
      "Shaoyi Sun",
      "Lei Dong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Stacy Garretson",
      "Yaowen Li"
     ],
     "a": [
      "Rui Zhang",
      "Dave Pellicane"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Lily Liu",
      "Nancy Lin"
     ],
     "a": [
      "Rui Zhang",
      "Jennifer Qian"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Stacy Garretson",
      "Jamie Sandman"
     ],
     "a": [
      "Mei Li",
      "Shaoyi Sun"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Frank Ding",
      "Yaowen Li"
     ],
     "a": [
      "Sam Zhou",
      "Jim Peng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Ted Lee",
      "Wally Liu"
     ],
     "a": [
      "Liangang Liu",
      "Dave Pellicane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Jean Wang",
      "Frank Ding"
     ],
     "a": [
      "Shaoyi Sun",
      "Sam Zhou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Fabienne Yu",
      "Albert Pamudji"
     ],
     "a": [
      "Mei Li",
      "Liangang Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Jamie Sandman",
      "Ted Lee"
     ],
     "a": [
      "Jennifer Qian",
      "Jim Peng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Nancy Lin",
      "Yaowen Li"
     ],
     "a": [
      "Rui Zhang",
      "Lei Dong"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Stacy Garretson",
      "Lily Liu"
     ],
     "a": [
      "Mei Li",
      "Rui Zhang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jean Wang",
      "Fabienne Yu"
     ],
     "a": [
      "Shaoyi Sun",
      "Jennifer Qian"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Frank Ding",
      "Wally Liu"
     ],
     "a": [
      "Liangang Liu",
      "Jim Peng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Albert Pamudji",
      "Yaowen Li"
     ],
     "a": [
      "Dave Pellicane",
      "Lei Dong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Stacy Garretson",
      "Ted Lee"
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
      "Jamie Sandman",
      "Frank Ding"
     ],
     "a": [
      "Shaoyi Sun",
      "Dave Pellicane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Lily Liu",
      "Wally Liu"
     ],
     "a": [
      "Rui Zhang",
      "Jim Peng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Nancy Lin",
      "Albert Pamudji"
     ],
     "a": [
      "Jennifer Qian",
      "Lei Dong"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jean Wang",
      "Fabienne Yu"
     ],
     "a": [
      "Rui Zhang",
      "Jennifer Qian"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jamie Sandman",
      "Nancy Lin"
     ],
     "a": [
      "Mei Li",
      "Shaoyi Sun"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Wally Liu",
      "Ted Lee"
     ],
     "a": [
      "Liangang Liu",
      "Dave Pellicane"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Frank Ding",
      "Yaowen Li"
     ],
     "a": [
      "Jim Peng",
      "Sam Zhou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jean Wang",
      "Ted Lee"
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
     "as": 14,
     "h": [
      "Lily Liu",
      "Albert Pamudji"
     ],
     "a": [
      "Mei Li",
      "Dave Pellicane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Fabienne Yu",
      "Yaowen Li"
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
      "Stacy Garretson",
      "Wally Liu"
     ],
     "a": [
      "Rui Zhang",
      "Lei Dong"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lily Liu",
      "Nancy Lin"
     ],
     "a": [
      "Rui Zhang",
      "Shaoyi Sun"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jamie Sandman",
      "Stacy Garretson"
     ],
     "a": [
      "Mei Li",
      "Jennifer Qian"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Frank Ding",
      "Ted Lee"
     ],
     "a": [
      "Liangang Liu",
      "Jim Peng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Albert Pamudji",
      "Yaowen Li"
     ],
     "a": [
      "Sam Zhou",
      "Lei Dong"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 3,
   "home": "Bounce Malvern",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-03-14T15:00:00",
   "complete": true,
   "homePoints": 392,
   "awayPoints": 289,
   "homeGW": 29,
   "awayGW": 3,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Harriet Levin",
      "Keith Goldberg"
     ],
     "a": [
      "Dint Moore",
      "Abraham Telechanski"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Jennifer Wang",
      "Jim Darcangelo"
     ],
     "a": [
      "Michelle Burke",
      "Marc Padre"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Stephanie Woomer",
      "Michael Finkelstein"
     ],
     "a": [
      "Ali Fordyce",
      "Richard Abate"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Vicki Main",
      "Derek Le"
     ],
     "a": [
      "Ayako Caravella",
      "Richard Demeuse"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jennifer Wang",
      "Stephanie Woomer"
     ],
     "a": [
      "Dint Moore",
      "Ali Fordyce"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Harriet Levin",
      "Vicki Main"
     ],
     "a": [
      "Michelle Burke",
      "Ayako Caravella"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Keith Goldberg",
      "Derek Le"
     ],
     "a": [
      "Abraham Telechanski",
      "Marc Padre"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jim Darcangelo",
      "Michael Finkelstein"
     ],
     "a": [
      "Bill Ly",
      "Richard Abate"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Stephanie Woomer",
      "Jim Darcangelo"
     ],
     "a": [
      "Dint Moore",
      "Abraham Telechanski"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Jennifer Wang",
      "Keith Goldberg"
     ],
     "a": [
      "Ayako Caravella",
      "Marc Padre"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Harriet Levin",
      "Derek Le"
     ],
     "a": [
      "Michelle Burke",
      "Bill Ly"
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
      "Ali Fordyce",
      "Richard Demeuse"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Harriet Levin",
      "Vicki Main"
     ],
     "a": [
      "Dint Moore",
      "Ali Fordyce"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Stephanie Woomer",
      "Jennifer Wang"
     ],
     "a": [
      "Michelle Burke",
      "Ayako Caravella"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Michael Finkelstein",
      "Jim Darcangelo"
     ],
     "a": [
      "Abraham Telechanski",
      "Bill Ly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Keith Goldberg",
      "Derek Le"
     ],
     "a": [
      "Marc Padre",
      "Richard Abate"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Jennifer Wang",
      "Keith Goldberg"
     ],
     "a": [
      "Ayako Caravella",
      "Abraham Telechanski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Harriet Levin",
      "Jim Darcangelo"
     ],
     "a": [
      "Ali Fordyce",
      "Marc Padre"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Stephanie Woomer",
      "Michael Finkelstein"
     ],
     "a": [
      "Michelle Burke",
      "Richard Abate"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Vicki Main",
      "Derek Le"
     ],
     "a": [
      "Dint Moore",
      "Richard Demeuse"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Stephanie Woomer",
      "Vicki Main"
     ],
     "a": [
      "Dint Moore",
      "Michelle Burke"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Harriet Levin",
      "Jennifer Wang"
     ],
     "a": [
      "Ayako Caravella",
      "Ali Fordyce"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Jim Darcangelo",
      "Derek Le"
     ],
     "a": [
      "Richard Abate",
      "Abraham Telechanski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Keith Goldberg",
      "Michael Finkelstein"
     ],
     "a": [
      "Bill Ly",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Harriet Levin",
      "Keith Goldberg"
     ],
     "a": [
      "Ali Fordyce",
      "Abraham Telechanski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jennifer Wang",
      "Jim Darcangelo"
     ],
     "a": [
      "Dint Moore",
      "Richard Abate"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Vicki Main",
      "Michael Finkelstein"
     ],
     "a": [
      "Michelle Burke",
      "Bill Ly"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Stephanie Woomer",
      "Derek Le"
     ],
     "a": [
      "Ayako Caravella",
      "Richard Demeuse"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Vicki Main",
      "Jennifer Wang"
     ],
     "a": [
      "Dint Moore",
      "Ayako Caravella"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Stephanie Woomer",
      "Harriet Levin"
     ],
     "a": [
      "Michelle Burke",
      "Ali Fordyce"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Keith Goldberg",
      "Jim Darcangelo"
     ],
     "a": [
      "Abraham Telechanski",
      "Richard Demeuse"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Michael Finkelstein",
      "Derek Le"
     ],
     "a": [
      "Bill Ly",
      "Richard Abate"
     ]
    }
   ],
   "subs": [
    "Jennifer Wang",
    "Ali Fordyce",
    "Bill Ly"
   ]
  },
  {
   "result": "home",
   "week": 3,
   "home": "Pickleball Kingdom Hamilton",
   "away": "Monroe",
   "time": "2026-03-15T12:00:00",
   "complete": true,
   "homePoints": 616,
   "awayPoints": 570,
   "homeGW": 19,
   "awayGW": 13,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jamie Sandman",
      "Yaowen Li"
     ],
     "a": [
      "Tracey Collins",
      "Guy Ohn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lily Liu",
      "Wally Liu"
     ],
     "a": [
      "Tara Lombardo",
      "Erik Lombardo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Yang Ruan",
      "Zhe Ding"
     ],
     "a": [
      "Andrea Mui",
      "Tim Ahn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Jean Wang",
      "Frank Ding"
     ],
     "a": [
      "Hayley Yandoli",
      "Santhosh Pillai"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Lily Liu",
      "Jean Wang"
     ],
     "a": [
      "Tracey Collins",
      "Hayley Yandoli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Stacy Garretson",
      "Jamie Sandman"
     ],
     "a": [
      "Andrea Mui",
      "Tara Lombardo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Frank Ding",
      "Ted Lee"
     ],
     "a": [
      "Tim Ahn",
      "Erik Lombardo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Yaowen Li",
      "Riguo Zheng"
     ],
     "a": [
      "Guy Ohn",
      "Yi Gu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Stacy Garretson",
      "Riguo Zheng"
     ],
     "a": [
      "Tara Lombardo",
      "Santhosh Pillai"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Lily Liu",
      "Wally Liu"
     ],
     "a": [
      "Tracey Collins",
      "Yi Gu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jamie Sandman",
      "Ted Lee"
     ],
     "a": [
      "Andrea Mui",
      "Guy Ohn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Fabienne Yu",
      "Yaowen Li"
     ],
     "a": [
      "Hayley Yandoli",
      "Tim Ahn"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Fabienne Yu",
      "Jean Wang"
     ],
     "a": [
      "Hayley Yandoli",
      "Tara Lombardo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jamie Sandman",
      "Stacy Garretson"
     ],
     "a": [
      "Tracey Collins",
      "Andrea Mui"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Zhe Ding",
      "Riguo Zheng"
     ],
     "a": [
      "Tim Ahn",
      "Yi Gu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Ted Lee",
      "Frank Ding"
     ],
     "a": [
      "Santhosh Pillai",
      "Erik Lombardo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 28,
     "h": [
      "Jean Wang",
      "Frank Ding"
     ],
     "a": [
      "Tara Lombardo",
      "Tim Ahn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Yang Ruan",
      "Zhe Ding"
     ],
     "a": [
      "Hayley Yandoli",
      "Guy Ohn"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "Lily Liu",
      "Wally Liu"
     ],
     "a": [
      "Andrea Mui",
      "Santhosh Pillai"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Fabienne Yu",
      "Yaowen Li"
     ],
     "a": [
      "Tracey Collins",
      "Erik Lombardo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Yang Ruan",
      "Jamie Sandman"
     ],
     "a": [
      "Hayley Yandoli",
      "Andrea Mui"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lily Liu",
      "Jean Wang"
     ],
     "a": [
      "Tracey Collins",
      "Tara Lombardo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Riguo Zheng",
      "Zhe Ding"
     ],
     "a": [
      "Yi Gu",
      "Erik Lombardo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Wally Liu",
      "Ted Lee"
     ],
     "a": [
      "Guy Ohn",
      "Santhosh Pillai"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jean Wang",
      "Wally Liu"
     ],
     "a": [
      "Tara Lombardo",
      "Erik Lombardo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jamie Sandman",
      "Riguo Zheng"
     ],
     "a": [
      "Andrea Mui",
      "Yi Gu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Fabienne Yu",
      "Ted Lee"
     ],
     "a": [
      "Tracey Collins",
      "Tim Ahn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Stacy Garretson",
      "Yaowen Li"
     ],
     "a": [
      "Hayley Yandoli",
      "Guy Ohn"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Lily Liu",
      "Fabienne Yu"
     ],
     "a": [
      "Hayley Yandoli",
      "Tracey Collins"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jean Wang",
      "Stacy Garretson"
     ],
     "a": [
      "Andrea Mui",
      "Tara Lombardo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Zhe Ding",
      "Yaowen Li"
     ],
     "a": [
      "Guy Ohn",
      "Santhosh Pillai"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Frank Ding",
      "Riguo Zheng"
     ],
     "a": [
      "Yi Gu",
      "Tim Ahn"
     ]
    }
   ],
   "subs": [
    "Riguo Zheng"
   ]
  },
  {
   "result": "away",
   "week": 3,
   "home": "Home Court",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-03-15T13:00:00",
   "complete": true,
   "homePoints": 602,
   "awayPoints": 625,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kajal Sinkar",
      "Robert Huntley"
     ],
     "a": [
      "Lucy Li",
      "Abraham Telechanski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Laura Spilatro",
      "Franklin Lupianez"
     ],
     "a": [
      "Claudia Van Loo",
      "Marc Padre"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Andrea Smith",
      "Sandeep Malhotra"
     ],
     "a": [
      "Renee Mitzner",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sarah Mcparland",
      "George Mandl"
     ],
     "a": [
      "Ivona Reszka",
      "Bill Ly"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Christine Chwe",
      "Andrea Smith"
     ],
     "a": [
      "Renee Mitzner",
      "Claudia Van Loo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Sarah Mcparland",
      "Laura Spilatro"
     ],
     "a": [
      "Lucy Li",
      "Ivona Reszka"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sandeep Malhotra",
      "Robert Huntley"
     ],
     "a": [
      "Abraham Telechanski",
      "Marc Padre"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 32,
     "as": 30,
     "h": [
      "George Mandl",
      "Franklin Lupianez"
     ],
     "a": [
      "Richard Demeuse",
      "Bill Ly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sarah Mcparland",
      "Michael Vincent"
     ],
     "a": [
      "Lucy Li",
      "Abraham Telechanski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Kajal Sinkar",
      "George Mandl"
     ],
     "a": [
      "Claudia Van Loo",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Christine Chwe",
      "Franklin Lupianez"
     ],
     "a": [
      "Ivona Reszka",
      "Marc Padre"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Andrea Smith",
      "Sandeep Malhotra"
     ],
     "a": [
      "Renee Mitzner",
      "Bill Ly"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Sarah Mcparland",
      "Christine Chwe"
     ],
     "a": [
      "Lucy Li",
      "Renee Mitzner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Laura Spilatro",
      "Kajal Sinkar"
     ],
     "a": [
      "Claudia Van Loo",
      "Ivona Reszka"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Robert Huntley",
      "Franklin Lupianez"
     ],
     "a": [
      "Abraham Telechanski",
      "Richard Demeuse"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sandeep Malhotra",
      "Michael Vincent"
     ],
     "a": [
      "Marc Padre",
      "Bill Ly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Christine Chwe",
      "Robert Huntley"
     ],
     "a": [
      "Lucy Li",
      "Marc Padre"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Andrea Smith",
      "Michael Vincent"
     ],
     "a": [
      "Renee Mitzner",
      "Abraham Telechanski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Laura Spilatro",
      "Sandeep Malhotra"
     ],
     "a": [
      "Ivona Reszka",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Kajal Sinkar",
      "George Mandl"
     ],
     "a": [
      "Claudia Van Loo",
      "Bill Ly"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Laura Spilatro",
      "Christine Chwe"
     ],
     "a": [
      "Lucy Li",
      "Renee Mitzner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sarah Mcparland",
      "Kajal Sinkar"
     ],
     "a": [
      "Ivona Reszka",
      "Claudia Van Loo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sandeep Malhotra",
      "Robert Huntley"
     ],
     "a": [
      "Abraham Telechanski",
      "Bill Ly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Franklin Lupianez",
      "Michael Vincent"
     ],
     "a": [
      "Marc Padre",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sarah Mcparland",
      "George Mandl"
     ],
     "a": [
      "Lucy Li",
      "Marc Padre"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Christine Chwe",
      "Robert Huntley"
     ],
     "a": [
      "Ivona Reszka",
      "Abraham Telechanski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Andrea Smith",
      "Michael Vincent"
     ],
     "a": [
      "Renee Mitzner",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Laura Spilatro",
      "Franklin Lupianez"
     ],
     "a": [
      "Claudia Van Loo",
      "Bill Ly"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Sarah Mcparland",
      "Andrea Smith"
     ],
     "a": [
      "Lucy Li",
      "Ivona Reszka"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Christine Chwe",
      "Kajal Sinkar"
     ],
     "a": [
      "Renee Mitzner",
      "Claudia Van Loo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Michael Vincent",
      "Sandeep Malhotra"
     ],
     "a": [
      "Abraham Telechanski",
      "Marc Padre"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Robert Huntley",
      "George Mandl"
     ],
     "a": [
      "Richard Demeuse",
      "Bill Ly"
     ]
    }
   ],
   "subs": [
    "Bill Ly"
   ]
  },
  {
   "result": "home",
   "week": 3,
   "home": "Pickleball Palace",
   "away": "Stelton Sports",
   "time": "2026-03-15T14:00:00",
   "complete": true,
   "homePoints": 656,
   "awayPoints": 481,
   "homeGW": 28,
   "awayGW": 4,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Laura Elleman",
      "Jeffrey Susskind"
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
      "Kate Curren",
      "Rick Vazquez"
     ],
     "a": [
      "Cristina Gil",
      "Dave Pellicane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Sinitra Siengsanaoh",
      "Brian Gonzalez"
     ],
     "a": [
      "Shaoyi Sun",
      "Anthony Wands"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Kelly Hanson Word",
      "Mike Giampapa"
     ],
     "a": [
      "Rui Zhang",
      "Lei Dong"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kate Curren",
      "Kelly Hanson Word"
     ],
     "a": [
      "Jennifer Qian",
      "Rui Zhang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Amanda Quinn",
      "Sinitra Siengsanaoh"
     ],
     "a": [
      "Shaoyi Sun",
      "Suzanne \"Zan\" Davies"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Rick Vazquez",
      "Jeffrey Susskind"
     ],
     "a": [
      "Anthony Wands",
      "Jim Peng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Mike Giampapa",
      "Brian Gonzalez"
     ],
     "a": [
      "Lei Dong",
      "Dave Pellicane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sinitra Siengsanaoh",
      "Alex Lee"
     ],
     "a": [
      "Suzanne \"Zan\" Davies",
      "Liangang Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Laura Elleman",
      "Jeffrey Susskind"
     ],
     "a": [
      "Cristina Gil",
      "Dave Pellicane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kate Curren",
      "Rick Vazquez"
     ],
     "a": [
      "Jennifer Qian",
      "Jim Peng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Amanda Quinn",
      "Mike Giampapa"
     ],
     "a": [
      "Rui Zhang",
      "Lei Dong"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kelly Hanson Word",
      "Sinitra Siengsanaoh"
     ],
     "a": [
      "Rui Zhang",
      "Shaoyi Sun"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Laura Elleman",
      "Amanda Quinn"
     ],
     "a": [
      "Suzanne \"Zan\" Davies",
      "Cristina Gil"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Brian Gonzalez",
      "Alex Lee"
     ],
     "a": [
      "Liangang Liu",
      "Jim Peng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Mike Giampapa",
      "Rick Vazquez"
     ],
     "a": [
      "Lei Dong",
      "Dave Pellicane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Amanda Quinn",
      "Jeffrey Susskind"
     ],
     "a": [
      "Suzanne \"Zan\" Davies",
      "Anthony Wands"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Sinitra Siengsanaoh",
      "Brian Gonzalez"
     ],
     "a": [
      "Shaoyi Sun",
      "Liangang Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Kate Curren",
      "Alex Lee"
     ],
     "a": [
      "Rui Zhang",
      "Jim Peng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kelly Hanson Word",
      "Mike Giampapa"
     ],
     "a": [
      "Jennifer Qian",
      "Lei Dong"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kate Curren",
      "Sinitra Siengsanaoh"
     ],
     "a": [
      "Shaoyi Sun",
      "Jennifer Qian"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kelly Hanson Word",
      "Laura Elleman"
     ],
     "a": [
      "Cristina Gil",
      "Suzanne \"Zan\" Davies"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Brian Gonzalez",
      "Alex Lee"
     ],
     "a": [
      "Jim Peng",
      "Anthony Wands"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Rick Vazquez",
      "Jeffrey Susskind"
     ],
     "a": [
      "Liangang Liu",
      "Dave Pellicane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Amanda Quinn",
      "Brian Gonzalez"
     ],
     "a": [
      "Shaoyi Sun",
      "Lei Dong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Laura Elleman",
      "Rick Vazquez"
     ],
     "a": [
      "Suzanne \"Zan\" Davies",
      "Anthony Wands"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Kelly Hanson Word",
      "Jeffrey Susskind"
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
     "as": 12,
     "h": [
      "Kate Curren",
      "Alex Lee"
     ],
     "a": [
      "Rui Zhang",
      "Dave Pellicane"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kate Curren",
      "Kelly Hanson Word"
     ],
     "a": [
      "Jennifer Qian",
      "Rui Zhang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Laura Elleman",
      "Amanda Quinn"
     ],
     "a": [
      "Shaoyi Sun",
      "Cristina Gil"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Alex Lee",
      "Jeffrey Susskind"
     ],
     "a": [
      "Liangang Liu",
      "Jim Peng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Rick Vazquez",
      "Brian Gonzalez"
     ],
     "a": [
      "Lei Dong",
      "Anthony Wands"
     ]
    }
   ],
   "subs": [
    "Anthony Wands",
    "Cristina Gil"
   ]
  },
  {
   "result": "home",
   "week": 3,
   "home": "Jersey Pickleball Club",
   "away": "Montville",
   "time": "2026-03-15T14:00:00",
   "complete": true,
   "homePoints": 633,
   "awayPoints": 608,
   "homeGW": 21,
   "awayGW": 11,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Alice Napolitano",
      "Joe Palumbo"
     ],
     "a": [
      "Evelyn Du",
      "Andre Yang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Meryl Nadler",
      "Andrew Hyman"
     ],
     "a": [
      "Ronnie Yin",
      "Liangjie Zhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Natasha De Carvalho",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Kristen Silvestri",
      "Louis Vessichelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Eva Danieli",
      "Scott Friedman"
     ],
     "a": [
      "Oliveira Karen",
      "Jeffrey Heil"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Alice Napolitano",
      "Meryl Nadler"
     ],
     "a": [
      "Evelyn Du",
      "Michele Dabal"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Natasha De Carvalho",
      "Amy Chrebet"
     ],
     "a": [
      "Ronnie Yin",
      "Kristen Silvestri"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Michael Dombrowiecki",
      "Lance Brown"
     ],
     "a": [
      "Liangjie Zhu",
      "Andre Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Joe Palumbo",
      "Scott Friedman"
     ],
     "a": [
      "Michael Oppenheim",
      "Brandon Fulford"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Amy Chrebet",
      "Lance Brown"
     ],
     "a": [
      "Ronnie Yin",
      "Liangjie Zhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Meryl Nadler",
      "Scott Friedman"
     ],
     "a": [
      "Michele Dabal",
      "Andre Yang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Eva Danieli",
      "Joe Palumbo"
     ],
     "a": [
      "Oliveira Karen",
      "Jeffrey Heil"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Natasha De Carvalho",
      "Andrew Hyman"
     ],
     "a": [
      "Kristen Silvestri",
      "Michael Oppenheim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Eva Danieli",
      "Meryl Nadler"
     ],
     "a": [
      "Oliveira Karen",
      "Michele Dabal"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Amy Chrebet",
      "Alice Napolitano"
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
      "Michael Dombrowiecki",
      "Joe Palumbo"
     ],
     "a": [
      "Jeffrey Heil",
      "Michael Oppenheim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Andrew Hyman",
      "Lance Brown"
     ],
     "a": [
      "Louis Vessichelli",
      "Andre Yang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Alice Napolitano",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Oliveira Karen",
      "Liangjie Zhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Natasha De Carvalho",
      "Scott Friedman"
     ],
     "a": [
      "Kristen Silvestri",
      "Brandon Fulford"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Eva Danieli",
      "Andrew Hyman"
     ],
     "a": [
      "Evelyn Du",
      "Louis Vessichelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Meryl Nadler",
      "Lance Brown"
     ],
     "a": [
      "Michele Dabal",
      "Jeffrey Heil"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Alice Napolitano",
      "Eva Danieli"
     ],
     "a": [
      "Oliveira Karen",
      "Evelyn Du"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Amy Chrebet",
      "Natasha De Carvalho"
     ],
     "a": [
      "Ronnie Yin",
      "Michele Dabal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Joe Palumbo",
      "Andrew Hyman"
     ],
     "a": [
      "Liangjie Zhu",
      "Andre Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lance Brown",
      "Scott Friedman"
     ],
     "a": [
      "Brandon Fulford",
      "Jeffrey Heil"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Amy Chrebet",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Oliveira Karen",
      "Andre Yang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Natasha De Carvalho",
      "Andrew Hyman"
     ],
     "a": [
      "Evelyn Du",
      "Michael Oppenheim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Alice Napolitano",
      "Scott Friedman"
     ],
     "a": [
      "Kristen Silvestri",
      "Brandon Fulford"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Eva Danieli",
      "Joe Palumbo"
     ],
     "a": [
      "Michele Dabal",
      "Louis Vessichelli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Meryl Nadler",
      "Alice Napolitano"
     ],
     "a": [
      "Kristen Silvestri",
      "Evelyn Du"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Amy Chrebet",
      "Eva Danieli"
     ],
     "a": [
      "Ronnie Yin",
      "Oliveira Karen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Joe Palumbo",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Jeffrey Heil",
      "Liangjie Zhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Lance Brown",
      "Andrew Hyman"
     ],
     "a": [
      "Michael Oppenheim",
      "Louis Vessichelli"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 3,
   "home": "APC Garden State",
   "away": "ACE",
   "time": "2026-03-15T14:00:00",
   "complete": true,
   "homePoints": 463,
   "awayPoints": 681,
   "homeGW": 0,
   "awayGW": 32,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Vita Mulholland",
      "Darin Morgan"
     ],
     "a": [
      "Katarzyna Clevenger",
      "Gog Boonswang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Laura Sweet",
      "Howie Steiner"
     ],
     "a": [
      "Kate Siedell",
      "Marc Harden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Lara Webb",
      "Lance Stopek"
     ],
     "a": [
      "Stacey Frank",
      "Sang Nguyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Lori Flickinger",
      "Laurence Emerson"
     ],
     "a": [
      "Pam Boyd",
      "Ed Hutchinson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lara Webb",
      "Laura Sweet"
     ],
     "a": [
      "Stacey Frank",
      "Katarzyna Clevenger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Golda Steier",
      "Lori Flickinger"
     ],
     "a": [
      "Sandy Alkins",
      "Kate Siedell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lance Stopek",
      "Howie Steiner"
     ],
     "a": [
      "Ed Hutchinson",
      "Sang Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Darin Morgan",
      "Rick Derose"
     ],
     "a": [
      "Marc Pellicane",
      "James Shaw"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Lori Flickinger",
      "Rick Derose"
     ],
     "a": [
      "Kate Siedell",
      "Marc Harden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Golda Steier",
      "Laurence Emerson"
     ],
     "a": [
      "Pam Boyd",
      "Sang Nguyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Laura Sweet",
      "Howie Steiner"
     ],
     "a": [
      "Sandy Alkins",
      "Ed Hutchinson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Vita Mulholland",
      "Lance Stopek"
     ],
     "a": [
      "Katarzyna Clevenger",
      "Gog Boonswang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Vita Mulholland",
      "Laura Sweet"
     ],
     "a": [
      "Pam Boyd",
      "Sandy Alkins"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Golda Steier",
      "Lara Webb"
     ],
     "a": [
      "Stacey Frank",
      "Katarzyna Clevenger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Darin Morgan",
      "Howie Steiner"
     ],
     "a": [
      "Ed Hutchinson",
      "Gog Boonswang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Lance Stopek",
      "Rick Derose"
     ],
     "a": [
      "Sang Nguyen",
      "Marc Pellicane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lori Flickinger",
      "Laurence Emerson"
     ],
     "a": [
      "Kate Siedell",
      "Sang Nguyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Vita Mulholland",
      "Darin Morgan"
     ],
     "a": [
      "Sandy Alkins",
      "Ed Hutchinson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Laura Sweet",
      "Rick Derose"
     ],
     "a": [
      "Stacey Frank",
      "Marc Pellicane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Lara Webb",
      "Howie Steiner"
     ],
     "a": [
      "Katarzyna Clevenger",
      "Marc Harden"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Laura Sweet",
      "Lori Flickinger"
     ],
     "a": [
      "Kate Siedell",
      "Sandy Alkins"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Vita Mulholland",
      "Golda Steier"
     ],
     "a": [
      "Stacey Frank",
      "Pam Boyd"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Lance Stopek",
      "Howie Steiner"
     ],
     "a": [
      "Sang Nguyen",
      "James Shaw"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Rick Derose",
      "Laurence Emerson"
     ],
     "a": [
      "Marc Pellicane",
      "Gog Boonswang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lara Webb",
      "Howie Steiner"
     ],
     "a": [
      "Pam Boyd",
      "Ed Hutchinson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Laura Sweet",
      "Darin Morgan"
     ],
     "a": [
      "Katarzyna Clevenger",
      "Marc Harden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Golda Steier",
      "Rick Derose"
     ],
     "a": [
      "Kate Siedell",
      "Sang Nguyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Lori Flickinger",
      "Lance Stopek"
     ],
     "a": [
      "Stacey Frank",
      "James Shaw"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Golda Steier",
      "Vita Mulholland"
     ],
     "a": [
      "Katarzyna Clevenger",
      "Sandy Alkins"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Laura Sweet",
      "Lara Webb"
     ],
     "a": [
      "Kate Siedell",
      "Pam Boyd"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Darin Morgan",
      "Howie Steiner"
     ],
     "a": [
      "Ed Hutchinson",
      "Gog Boonswang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Laurence Emerson",
      "Lance Stopek"
     ],
     "a": [
      "James Shaw",
      "Marc Pellicane"
     ]
    }
   ],
   "subs": [
    "Katarzyna Clevenger",
    "Gog Boonswang"
   ]
  },
  {
   "result": "home",
   "week": 3,
   "home": "Bounce Malvern",
   "away": "Flemington",
   "time": "2026-03-15T14:30:00",
   "complete": true,
   "homePoints": 626,
   "awayPoints": 524,
   "homeGW": 22,
   "awayGW": 10,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Vicki Main",
      "Jim Darcangelo"
     ],
     "a": [
      "Aimee Castellano",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Katherine Maruyama",
      "Derek Le"
     ],
     "a": [
      "Susan Ackley",
      "Art Muth"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Harriet Levin",
      "Michael Finkelstein"
     ],
     "a": [
      "Kristen Soucie",
      "Scott Rubin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kerry Schaffer",
      "Michael Dieterle"
     ],
     "a": [
      "Carol Mastroianni",
      "Bob Castellano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Vicki Main",
      "Stephanie Woomer"
     ],
     "a": [
      "Carol Mastroianni",
      "Susan Ackley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Harriet Levin",
      "Kerry Schaffer"
     ],
     "a": [
      "Kristen Soucie",
      "Tara Kramer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Keith Goldberg",
      "Michael Dieterle"
     ],
     "a": [
      "Eric Luque",
      "Marc Friedman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jim Darcangelo",
      "Derek Le"
     ],
     "a": [
      "Bob Castellano",
      "Scott Rubin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Harriet Levin",
      "Keith Goldberg"
     ],
     "a": [
      "Aimee Castellano",
      "Scott Rubin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Katherine Maruyama",
      "Michael Finkelstein"
     ],
     "a": [
      "Susan Ackley",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Stephanie Woomer",
      "Jim Darcangelo"
     ],
     "a": [
      "Tara Kramer",
      "Marc Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Vicki Main",
      "Michael Dieterle"
     ],
     "a": [
      "Kristen Soucie",
      "Art Muth"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Harriet Levin",
      "Katherine Maruyama"
     ],
     "a": [
      "Aimee Castellano",
      "Susan Ackley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Stephanie Woomer",
      "Kerry Schaffer"
     ],
     "a": [
      "Carol Mastroianni",
      "Tara Kramer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Derek Le",
      "Jim Darcangelo"
     ],
     "a": [
      "Art Muth",
      "Marc Friedman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Michael Dieterle",
      "Michael Finkelstein"
     ],
     "a": [
      "Eric Luque",
      "Bob Castellano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Stephanie Woomer",
      "Michael Dieterle"
     ],
     "a": [
      "Carol Mastroianni",
      "Marc Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Vicki Main",
      "Derek Le"
     ],
     "a": [
      "Kristen Soucie",
      "Bob Castellano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Katherine Maruyama",
      "Keith Goldberg"
     ],
     "a": [
      "Aimee Castellano",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kerry Schaffer",
      "Jim Darcangelo"
     ],
     "a": [
      "Tara Kramer",
      "Scott Rubin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Vicki Main",
      "Harriet Levin"
     ],
     "a": [
      "Aimee Castellano",
      "Kristen Soucie"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Katherine Maruyama",
      "Kerry Schaffer"
     ],
     "a": [
      "Susan Ackley",
      "Tara Kramer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Michael Finkelstein",
      "Derek Le"
     ],
     "a": [
      "Eric Luque",
      "Art Muth"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Keith Goldberg",
      "Jim Darcangelo"
     ],
     "a": [
      "Marc Friedman",
      "Scott Rubin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Katherine Maruyama",
      "Michael Dieterle"
     ],
     "a": [
      "Aimee Castellano",
      "Marc Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Harriet Levin",
      "Derek Le"
     ],
     "a": [
      "Tara Kramer",
      "Bob Castellano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kerry Schaffer",
      "Keith Goldberg"
     ],
     "a": [
      "Carol Mastroianni",
      "Art Muth"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Stephanie Woomer",
      "Michael Finkelstein"
     ],
     "a": [
      "Susan Ackley",
      "Eric Luque"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Stephanie Woomer",
      "Vicki Main"
     ],
     "a": [
      "Aimee Castellano",
      "Susan Ackley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Harriet Levin",
      "Katherine Maruyama"
     ],
     "a": [
      "Carol Mastroianni",
      "Kristen Soucie"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Keith Goldberg",
      "Michael Dieterle"
     ],
     "a": [
      "Art Muth",
      "Bob Castellano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Michael Finkelstein",
      "Jim Darcangelo"
     ],
     "a": [
      "Eric Luque",
      "Scott Rubin"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 4,
   "home": "Flemington",
   "away": "Bounce Malvern",
   "time": "2026-03-22T12:00:00",
   "complete": true,
   "homePoints": 540,
   "awayPoints": 681,
   "homeGW": 4,
   "awayGW": 28,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Sue Johnson",
      "Steven Gregov"
     ],
     "a": [
      "Tera Baccile",
      "Dana Luscombe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Denise Richmond",
      "Art Muth"
     ],
     "a": [
      "Stephanie Woomer",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Aimee Castellano",
      "Eric Luque"
     ],
     "a": [
      "Katherine Maruyama",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Barbara Hess",
      "David Osborne"
     ],
     "a": [
      "Harriet Levin",
      "Derek Le"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Carol Mastroianni",
      "Denise Richmond"
     ],
     "a": [
      "Tera Baccile",
      "Stephanie Woomer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Aimee Castellano",
      "Barbara Hess"
     ],
     "a": [
      "Harriet Levin",
      "Katherine Maruyama"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Art Muth",
      "Steven Gregov"
     ],
     "a": [
      "Dana Luscombe",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Bob Castellano",
      "Scott Rubin"
     ],
     "a": [
      "Jim Darcangelo",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sue Johnson",
      "Steven Gregov"
     ],
     "a": [
      "Tera Baccile",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Barbara Hess",
      "David Osborne"
     ],
     "a": [
      "Stephanie Woomer",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Christine Papa",
      "Eric Luque"
     ],
     "a": [
      "Katherine Maruyama",
      "Dana Luscombe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Aimee Castellano",
      "Bob Castellano"
     ],
     "a": [
      "Harriet Levin",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Carol Mastroianni",
      "Denise Richmond"
     ],
     "a": [
      "Stephanie Woomer",
      "Harriet Levin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Aimee Castellano",
      "Christine Papa"
     ],
     "a": [
      "Katherine Maruyama",
      "Tera Baccile"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "David Osborne",
      "Eric Luque"
     ],
     "a": [
      "Dana Luscombe",
      "Keith Goldberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Bob Castellano",
      "Steven Gregov"
     ],
     "a": [
      "Michael Finkelstein",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Barbara Hess",
      "Bob Castellano"
     ],
     "a": [
      "Tera Baccile",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sue Johnson",
      "Art Muth"
     ],
     "a": [
      "Stephanie Woomer",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Christine Papa",
      "David Osborne"
     ],
     "a": [
      "Katherine Maruyama",
      "Dana Luscombe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Carol Mastroianni",
      "Scott Rubin"
     ],
     "a": [
      "Harriet Levin",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Carol Mastroianni",
      "Christine Papa"
     ],
     "a": [
      "Harriet Levin",
      "Tera Baccile"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Barbara Hess",
      "Denise Richmond"
     ],
     "a": [
      "Stephanie Woomer",
      "Katherine Maruyama"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Bob Castellano",
      "Scott Rubin"
     ],
     "a": [
      "Dana Luscombe",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Art Muth",
      "Eric Luque"
     ],
     "a": [
      "Keith Goldberg",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Christine Papa",
      "Steven Gregov"
     ],
     "a": [
      "Tera Baccile",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Sue Johnson",
      "Scott Rubin"
     ],
     "a": [
      "Stephanie Woomer",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Denise Richmond",
      "David Osborne"
     ],
     "a": [
      "Katherine Maruyama",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Aimee Castellano",
      "Eric Luque"
     ],
     "a": [
      "Harriet Levin",
      "Keith Goldberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Carol Mastroianni",
      "Sue Johnson"
     ],
     "a": [
      "Stephanie Woomer",
      "Tera Baccile"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Aimee Castellano",
      "Barbara Hess"
     ],
     "a": [
      "Harriet Levin",
      "Katherine Maruyama"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "David Osborne",
      "Eric Luque"
     ],
     "a": [
      "Keith Goldberg",
      "Dana Luscombe"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Art Muth",
      "Scott Rubin"
     ],
     "a": [
      "Derek Le",
      "Jim Darcangelo"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 4,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Home Court",
   "time": "2026-03-22T13:00:00",
   "complete": true,
   "homePoints": 606,
   "awayPoints": 580,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Kerry Shannon",
      "Abraham Telechanski"
     ],
     "a": [
      "Anita Bobba",
      "Neil Shroff"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ayten Mayer",
      "Richard Abate"
     ],
     "a": [
      "Sarah Mcparland",
      "Clifford Luster"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Ivona Reszka",
      "Richard Demeuse"
     ],
     "a": [
      "Christine Chwe",
      "Michael Barninger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Dint Moore",
      "Marc Padre"
     ],
     "a": [
      "Kajal Sinkar",
      "Sandeep Malhotra"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Kerry Shannon",
      "Dint Moore"
     ],
     "a": [
      "Anita Bobba",
      "Kajal Sinkar"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Ayten Mayer",
      "Ivona Reszka"
     ],
     "a": [
      "Sarah Mcparland",
      "Christine Chwe"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Abraham Telechanski",
      "Marc Padre"
     ],
     "a": [
      "Clifford Luster",
      "Neil Shroff"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Richard Abate",
      "Richard Demeuse"
     ],
     "a": [
      "Sandeep Malhotra",
      "Michael Barninger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Kerry Shannon",
      "Abraham Telechanski"
     ],
     "a": [
      "Sarah Mcparland",
      "George Mandl"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ayten Mayer",
      "Richard Abate"
     ],
     "a": [
      "Kajal Sinkar",
      "Neil Shroff"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Ivona Reszka",
      "Richard Demeuse"
     ],
     "a": [
      "Anita Bobba",
      "Sandeep Malhotra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Dint Moore",
      "Marc Padre"
     ],
     "a": [
      "Christine Chwe",
      "Clifford Luster"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kerry Shannon",
      "Dint Moore"
     ],
     "a": [
      "Christine Chwe",
      "Kajal Sinkar"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Ivona Reszka",
      "Ayten Mayer"
     ],
     "a": [
      "Sarah Mcparland",
      "Anita Bobba"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Abraham Telechanski",
      "Richard Abate"
     ],
     "a": [
      "Clifford Luster",
      "Michael Barninger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Marc Padre",
      "Richard Demeuse"
     ],
     "a": [
      "Neil Shroff",
      "Sandeep Malhotra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Sushma Rayapudi",
      "Abraham Telechanski"
     ],
     "a": [
      "Sarah Mcparland",
      "Neil Shroff"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kerry Shannon",
      "Richard Abate"
     ],
     "a": [
      "Anita Bobba",
      "Clifford Luster"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ayten Mayer",
      "Richard Demeuse"
     ],
     "a": [
      "Christine Chwe",
      "Michael Barninger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Ivona Reszka",
      "Marc Padre"
     ],
     "a": [
      "Kajal Sinkar",
      "Sandeep Malhotra"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Kerry Shannon",
      "Ivona Reszka"
     ],
     "a": [
      "Christine Chwe",
      "Anita Bobba"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ayten Mayer",
      "Sushma Rayapudi"
     ],
     "a": [
      "Sarah Mcparland",
      "Kajal Sinkar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Abraham Telechanski",
      "Richard Demeuse"
     ],
     "a": [
      "Michael Barninger",
      "Neil Shroff"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Richard Abate",
      "Marc Padre"
     ],
     "a": [
      "Clifford Luster",
      "George Mandl"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Ivona Reszka",
      "Abraham Telechanski"
     ],
     "a": [
      "Anita Bobba",
      "Neil Shroff"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sushma Rayapudi",
      "Richard Abate"
     ],
     "a": [
      "Sarah Mcparland",
      "Clifford Luster"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kerry Shannon",
      "Richard Demeuse"
     ],
     "a": [
      "Christine Chwe",
      "George Mandl"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Ayten Mayer",
      "Marc Padre"
     ],
     "a": [
      "Kajal Sinkar",
      "Michael Barninger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Ivona Reszka",
      "Sushma Rayapudi"
     ],
     "a": [
      "Anita Bobba",
      "Sarah Mcparland"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ayten Mayer",
      "Kerry Shannon"
     ],
     "a": [
      "Christine Chwe",
      "Kajal Sinkar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Abraham Telechanski",
      "Richard Abate"
     ],
     "a": [
      "Neil Shroff",
      "Clifford Luster"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Richard Demeuse",
      "Marc Padre"
     ],
     "a": [
      "Michael Barninger",
      "George Mandl"
     ]
    }
   ],
   "subs": [
    "Sushma Rayapudi",
    "Neil Shroff"
   ]
  },
  {
   "result": "away",
   "week": 4,
   "home": "Monroe",
   "away": "Pickleball Kingdom Hamilton",
   "time": "2026-03-22T13:00:00",
   "complete": true,
   "homePoints": 589,
   "awayPoints": 657,
   "homeGW": 8,
   "awayGW": 24,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Susan St. Pierre",
      "Tim Ahn"
     ],
     "a": [
      "Stacy Garretson",
      "Tom Maley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Tracey Collins",
      "Naresh Malhotra"
     ],
     "a": [
      "Jean Wang",
      "Frank Ding"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Sarah Flynn",
      "Eliezer Mintz"
     ],
     "a": [
      "Jamie Sandman",
      "Jack Brod"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Andrea Mui",
      "Guy Ohn"
     ],
     "a": [
      "Yang Ruan",
      "Zhe Ding"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Susan St. Pierre",
      "Andrea Mui"
     ],
     "a": [
      "Stacy Garretson",
      "Jamie Sandman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Tracey Collins",
      "Sarah Flynn"
     ],
     "a": [
      "Jean Wang",
      "Lily Liu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Santhosh Pillai",
      "Guy Ohn"
     ],
     "a": [
      "Albert Pamudji",
      "Tom Maley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Naresh Malhotra",
      "Eliezer Mintz"
     ],
     "a": [
      "Jack Brod",
      "Ted Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Sarah Flynn",
      "Naresh Malhotra"
     ],
     "a": [
      "Stacy Garretson",
      "Ted Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Andrea Mui",
      "Santhosh Pillai"
     ],
     "a": [
      "Lily Liu",
      "Albert Pamudji"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Susan St. Pierre",
      "Guy Ohn"
     ],
     "a": [
      "Fabienne Yu",
      "Frank Ding"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Tracey Collins",
      "Tim Ahn"
     ],
     "a": [
      "Yang Ruan",
      "Zhe Ding"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Susan St. Pierre",
      "Tracey Collins"
     ],
     "a": [
      "Jamie Sandman",
      "Yang Ruan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Andrea Mui",
      "Sarah Flynn"
     ],
     "a": [
      "Fabienne Yu",
      "Jean Wang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Naresh Malhotra",
      "Santhosh Pillai"
     ],
     "a": [
      "Frank Ding",
      "Tom Maley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Eliezer Mintz",
      "Tim Ahn"
     ],
     "a": [
      "Jack Brod",
      "Zhe Ding"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Andrea Mui",
      "Tim Ahn"
     ],
     "a": [
      "Jamie Sandman",
      "Jack Brod"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sarah Flynn",
      "Santhosh Pillai"
     ],
     "a": [
      "Fabienne Yu",
      "Ted Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Tracey Collins",
      "Guy Ohn"
     ],
     "a": [
      "Lily Liu",
      "Albert Pamudji"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Susan St. Pierre",
      "Eliezer Mintz"
     ],
     "a": [
      "Stacy Garretson",
      "Tom Maley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Susan St. Pierre",
      "Tracey Collins"
     ],
     "a": [
      "Lily Liu",
      "Fabienne Yu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Andrea Mui",
      "Sarah Flynn"
     ],
     "a": [
      "Stacy Garretson",
      "Jean Wang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Guy Ohn",
      "Naresh Malhotra"
     ],
     "a": [
      "Frank Ding",
      "Ted Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Eliezer Mintz",
      "Santhosh Pillai"
     ],
     "a": [
      "Zhe Ding",
      "Albert Pamudji"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Andrea Mui",
      "Guy Ohn"
     ],
     "a": [
      "Lily Liu",
      "Jack Brod"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sarah Flynn",
      "Eliezer Mintz"
     ],
     "a": [
      "Jean Wang",
      "Frank Ding"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Tracey Collins",
      "Naresh Malhotra"
     ],
     "a": [
      "Jamie Sandman",
      "Tom Maley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Susan St. Pierre",
      "Tim Ahn"
     ],
     "a": [
      "Fabienne Yu",
      "Albert Pamudji"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Susan St. Pierre",
      "Andrea Mui"
     ],
     "a": [
      "Jean Wang",
      "Fabienne Yu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Tracey Collins",
      "Sarah Flynn"
     ],
     "a": [
      "Stacy Garretson",
      "Jamie Sandman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Guy Ohn",
      "Santhosh Pillai"
     ],
     "a": [
      "Frank Ding",
      "Tom Maley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Naresh Malhotra",
      "Tim Ahn"
     ],
     "a": [
      "Zhe Ding",
      "Ted Lee"
     ]
    }
   ],
   "subs": [
    "Tom Maley",
    "Susan St. Pierre"
   ]
  },
  {
   "result": "home",
   "week": 4,
   "home": "ACE",
   "away": "APC Garden State",
   "time": "2026-03-22T14:00:00",
   "complete": true,
   "homePoints": 661,
   "awayPoints": 514,
   "homeGW": 29,
   "awayGW": 3,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Pam Boyd",
      "Robert Finley"
     ],
     "a": [
      "Jiyun Yuh",
      "Laurence Emerson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Sandy Alkins",
      "James Shaw"
     ],
     "a": [
      "Laura Sweet",
      "Lance Stopek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Kelly Karrer",
      "Marc Pellicane"
     ],
     "a": [
      "Lara Webb",
      "Howie Steiner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kate Siedell",
      "Brian Rowan"
     ],
     "a": [
      "Lori Flickinger",
      "Daniel Mellul"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Donna Taylor",
      "Kelly Karrer"
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
     "as": 10,
     "h": [
      "Kate Siedell",
      "Sandy Alkins"
     ],
     "a": [
      "Lori Flickinger",
      "Golda Steier"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Robert Finley",
      "Marc Pellicane"
     ],
     "a": [
      "Rick Derose",
      "Howie Steiner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "James Shaw",
      "Roger Graterol"
     ],
     "a": [
      "Lance Stopek",
      "Laurence Emerson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Donna Taylor",
      "Robert Finley"
     ],
     "a": [
      "Jiyun Yuh",
      "Rick Derose"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Pam Boyd",
      "Brian Rowan"
     ],
     "a": [
      "Lara Webb",
      "Daniel Mellul"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kate Siedell",
      "Marc Pellicane"
     ],
     "a": [
      "Lori Flickinger",
      "Lance Stopek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Kelly Karrer",
      "James Shaw"
     ],
     "a": [
      "Laura Sweet",
      "Howie Steiner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Sandy Alkins",
      "Kelly Karrer"
     ],
     "a": [
      "Lara Webb",
      "Laura Sweet"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Pam Boyd",
      "Kate Siedell"
     ],
     "a": [
      "Golda Steier",
      "Lori Flickinger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Brian Rowan",
      "Marc Pellicane"
     ],
     "a": [
      "Howie Steiner",
      "Laurence Emerson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "James Shaw",
      "Roger Graterol"
     ],
     "a": [
      "Lance Stopek",
      "Daniel Mellul"
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
      "Jiyun Yuh",
      "Howie Steiner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kate Siedell",
      "Brian Rowan"
     ],
     "a": [
      "Lara Webb",
      "Rick Derose"
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
      "Lori Flickinger",
      "Laurence Emerson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Donna Taylor",
      "Roger Graterol"
     ],
     "a": [
      "Golda Steier",
      "Daniel Mellul"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kate Siedell",
      "Sandy Alkins"
     ],
     "a": [
      "Golda Steier",
      "Laura Sweet"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Pam Boyd",
      "Kelly Karrer"
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
      "Robert Finley",
      "Brian Rowan"
     ],
     "a": [
      "Laurence Emerson",
      "Rick Derose"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "James Shaw",
      "Marc Pellicane"
     ],
     "a": [
      "Lance Stopek",
      "Howie Steiner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Sandy Alkins",
      "Robert Finley"
     ],
     "a": [
      "Laura Sweet",
      "Howie Steiner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Donna Taylor",
      "Roger Graterol"
     ],
     "a": [
      "Jiyun Yuh",
      "Rick Derose"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kelly Karrer",
      "James Shaw"
     ],
     "a": [
      "Lara Webb",
      "Lance Stopek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Pam Boyd",
      "Brian Rowan"
     ],
     "a": [
      "Lori Flickinger",
      "Daniel Mellul"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kate Siedell",
      "Donna Taylor"
     ],
     "a": [
      "Jiyun Yuh",
      "Golda Steier"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Sandy Alkins",
      "Kelly Karrer"
     ],
     "a": [
      "Lara Webb",
      "Laura Sweet"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Marc Pellicane",
      "James Shaw"
     ],
     "a": [
      "Howie Steiner",
      "Lance Stopek"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Roger Graterol",
      "Brian Rowan"
     ],
     "a": [
      "Laurence Emerson",
      "Rick Derose"
     ]
    }
   ],
   "subs": [
    "Kelly Karrer"
   ]
  },
  {
   "result": "away",
   "week": 4,
   "home": "Montville",
   "away": "Jersey Pickleball Club",
   "time": "2026-03-22T14:00:00",
   "complete": true,
   "homePoints": 597,
   "awayPoints": 621,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Oliveira Karen",
      "Chris Taormina"
     ],
     "a": [
      "Eva Danieli",
      "Gary Sidhu"
     ]
    },
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
      "Meryl Nadler",
      "Joe Palumbo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Robin Varro",
      "Jinfa Chen"
     ],
     "a": [
      "Amy Chrebet",
      "Andrew Hyman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Liang Chao",
      "Louis Vessichelli"
     ],
     "a": [
      "Liz Cuozzo",
      "Brad Oldham"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kristen Silvestri",
      "Liang Chao"
     ],
     "a": [
      "Amy Chrebet",
      "Eva Danieli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Ronnie Yin",
      "Michele Dabal"
     ],
     "a": [
      "Liz Cuozzo",
      "Rosalyn Goldsmith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Chris Taormina",
      "Liangjie Zhu"
     ],
     "a": [
      "Joe Palumbo",
      "Brad Oldham"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Michael Oppenheim",
      "Brandon Fulford"
     ],
     "a": [
      "Gary Sidhu",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Oliveira Karen",
      "Jinfa Chen"
     ],
     "a": [
      "Rosalyn Goldsmith",
      "Andrew Hyman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Liang Chao",
      "Michael Oppenheim"
     ],
     "a": [
      "Eva Danieli",
      "Joe Palumbo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Michele Dabal",
      "Louis Vessichelli"
     ],
     "a": [
      "Meryl Nadler",
      "Gary Sidhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kristen Silvestri",
      "Brandon Fulford"
     ],
     "a": [
      "Amy Chrebet",
      "Lance Brown"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kristen Silvestri",
      "Liang Chao"
     ],
     "a": [
      "Liz Cuozzo",
      "Meryl Nadler"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Michele Dabal",
      "Oliveira Karen"
     ],
     "a": [
      "Amy Chrebet",
      "Rosalyn Goldsmith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Chris Taormina",
      "Jinfa Chen"
     ],
     "a": [
      "Brad Oldham",
      "Gary Sidhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Liangjie Zhu",
      "Brandon Fulford"
     ],
     "a": [
      "Andrew Hyman",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Oliveira Karen",
      "Chris Taormina"
     ],
     "a": [
      "Eva Danieli",
      "Andrew Hyman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Robin Varro",
      "Jinfa Chen"
     ],
     "a": [
      "Amy Chrebet",
      "Brad Oldham"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Liang Chao",
      "Louis Vessichelli"
     ],
     "a": [
      "Liz Cuozzo",
      "Joe Palumbo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Ronnie Yin",
      "Liangjie Zhu"
     ],
     "a": [
      "Rosalyn Goldsmith",
      "Lance Brown"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Oliveira Karen",
      "Robin Varro"
     ],
     "a": [
      "Meryl Nadler",
      "Eva Danieli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Michele Dabal",
      "Ronnie Yin"
     ],
     "a": [
      "Liz Cuozzo",
      "Rosalyn Goldsmith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Chris Taormina",
      "Jinfa Chen"
     ],
     "a": [
      "Joe Palumbo",
      "Gary Sidhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Michael Oppenheim",
      "Louis Vessichelli"
     ],
     "a": [
      "Brad Oldham",
      "Andrew Hyman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Michele Dabal",
      "Chris Taormina"
     ],
     "a": [
      "Liz Cuozzo",
      "Brad Oldham"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Oliveira Karen",
      "Liangjie Zhu"
     ],
     "a": [
      "Rosalyn Goldsmith",
      "Andrew Hyman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Robin Varro",
      "Louis Vessichelli"
     ],
     "a": [
      "Amy Chrebet",
      "Joe Palumbo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kristen Silvestri",
      "Brandon Fulford"
     ],
     "a": [
      "Meryl Nadler",
      "Lance Brown"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Michele Dabal",
      "Robin Varro"
     ],
     "a": [
      "Amy Chrebet",
      "Eva Danieli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ronnie Yin",
      "Kristen Silvestri"
     ],
     "a": [
      "Meryl Nadler",
      "Liz Cuozzo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Jinfa Chen",
      "Liangjie Zhu"
     ],
     "a": [
      "Joe Palumbo",
      "Andrew Hyman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Chris Taormina",
      "Michael Oppenheim"
     ],
     "a": [
      "Gary Sidhu",
      "Lance Brown"
     ]
    }
   ],
   "subs": [
    "Jinfa Chen",
    "Robin Varro"
   ]
  },
  {
   "result": "away",
   "week": 4,
   "home": "Stelton Sports",
   "away": "Pickleball Palace",
   "time": "2026-03-22T14:00:00",
   "complete": true,
   "homePoints": 557,
   "awayPoints": 646,
   "homeGW": 9,
   "awayGW": 23,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Ann Betterton",
      "Dave Pellicane"
     ],
     "a": [
      "Kate Curren",
      "Rick Vazquez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jennifer Qian",
      "Liangang Liu"
     ],
     "a": [
      "Laura Elleman",
      "Chris Heimerle"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Mei Li",
      "Zemin Zeng"
     ],
     "a": [
      "Rebecca Lederman",
      "David Coleman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Rui Zhang",
      "Lei Dong"
     ],
     "a": [
      "Kelly Hanson Word",
      "Johnson Chang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Suzanne \"Zan\" Davies",
      "Mei Li"
     ],
     "a": [
      "Kate Curren",
      "Laura Elleman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Ann Betterton",
      "Rui Zhang"
     ],
     "a": [
      "Rebecca Lederman",
      "Kelly Hanson Word"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Liangang Liu",
      "Dave Pellicane"
     ],
     "a": [
      "Johnson Chang",
      "David Coleman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jim Peng",
      "Zemin Zeng"
     ],
     "a": [
      "Rick Vazquez",
      "Charlie Johnston"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Rui Zhang",
      "Liangang Liu"
     ],
     "a": [
      "Rebecca Lederman",
      "Chris Heimerle"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jennifer Qian",
      "Jim Peng"
     ],
     "a": [
      "Laura Elleman",
      "Rick Vazquez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Mei Li",
      "Lei Dong"
     ],
     "a": [
      "Kelly Hanson Word",
      "David Coleman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Suzanne \"Zan\" Davies",
      "Dave Pellicane"
     ],
     "a": [
      "Andrea Dellechiaie",
      "Charlie Johnston"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Rui Zhang",
      "Ann Betterton"
     ],
     "a": [
      "Kate Curren",
      "Andrea Dellechiaie"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Suzanne \"Zan\" Davies",
      "Jennifer Qian"
     ],
     "a": [
      "Rebecca Lederman",
      "Laura Elleman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Zemin Zeng",
      "Lei Dong"
     ],
     "a": [
      "David Coleman",
      "Johnson Chang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Liangang Liu",
      "Jim Peng"
     ],
     "a": [
      "Charlie Johnston",
      "Chris Heimerle"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ann Betterton",
      "Liangang Liu"
     ],
     "a": [
      "Andrea Dellechiaie",
      "Rick Vazquez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jennifer Qian",
      "Dave Pellicane"
     ],
     "a": [
      "Kate Curren",
      "Charlie Johnston"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Mei Li",
      "Zemin Zeng"
     ],
     "a": [
      "Rebecca Lederman",
      "David Coleman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Rui Zhang",
      "Lei Dong"
     ],
     "a": [
      "Kelly Hanson Word",
      "Chris Heimerle"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Mei Li",
      "Ann Betterton"
     ],
     "a": [
      "Kate Curren",
      "Kelly Hanson Word"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Suzanne \"Zan\" Davies",
      "Jennifer Qian"
     ],
     "a": [
      "Rebecca Lederman",
      "Andrea Dellechiaie"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Zemin Zeng",
      "Jim Peng"
     ],
     "a": [
      "David Coleman",
      "Rick Vazquez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Lei Dong",
      "Dave Pellicane"
     ],
     "a": [
      "Johnson Chang",
      "Charlie Johnston"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Suzanne \"Zan\" Davies",
      "Jim Peng"
     ],
     "a": [
      "Kate Curren",
      "Rick Vazquez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Rui Zhang",
      "Zemin Zeng"
     ],
     "a": [
      "Kelly Hanson Word",
      "Johnson Chang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Jennifer Qian",
      "Liangang Liu"
     ],
     "a": [
      "Laura Elleman",
      "Chris Heimerle"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ann Betterton",
      "Dave Pellicane"
     ],
     "a": [
      "Andrea Dellechiaie",
      "Charlie Johnston"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Suzanne \"Zan\" Davies",
      "Mei Li"
     ],
     "a": [
      "Kate Curren",
      "Andrea Dellechiaie"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Rui Zhang",
      "Jennifer Qian"
     ],
     "a": [
      "Laura Elleman",
      "Kelly Hanson Word"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Zemin Zeng",
      "Lei Dong"
     ],
     "a": [
      "Charlie Johnston",
      "Chris Heimerle"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Liangang Liu",
      "Jim Peng"
     ],
     "a": [
      "Rick Vazquez",
      "Johnson Chang"
     ]
    }
   ],
   "subs": [
    "Zemin Zeng"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "Pickleball Palace",
   "away": "Pickleball Kingdom Hamilton",
   "time": "2026-03-28T09:00:00",
   "complete": true,
   "homePoints": 621,
   "awayPoints": 590,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kate Curren",
      "Chris Heimerle"
     ],
     "a": [
      "Jean Wang",
      "Frank Ding"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Carly Pfeffer",
      "John Burke"
     ],
     "a": [
      "Stacy Garretson",
      "Ted Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jill Lesnik",
      "Brian Gonzalez"
     ],
     "a": [
      "Jamie Sandman",
      "Jack Brod"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Jennifer Burke",
      "Charlie Johnston"
     ],
     "a": [
      "Lily Liu",
      "Wally Liu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kate Curren",
      "Carly Pfeffer"
     ],
     "a": [
      "Stacy Garretson",
      "Jamie Sandman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jennifer Burke",
      "Jill Lesnik"
     ],
     "a": [
      "Lily Liu",
      "Nancy Lin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Bud Heller",
      "Brian Gonzalez"
     ],
     "a": [
      "Frank Ding",
      "Yaowen Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Charlie Johnston",
      "John Burke"
     ],
     "a": [
      "Albert Pamudji",
      "Ted Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Carly Pfeffer",
      "Bud Heller"
     ],
     "a": [
      "Jean Wang",
      "Frank Ding"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Andrea Dellechiaie",
      "John Burke"
     ],
     "a": [
      "Stacy Garretson",
      "Yaowen Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jill Lesnik",
      "Chris Heimerle"
     ],
     "a": [
      "Jamie Sandman",
      "Jack Brod"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jennifer Burke",
      "Charlie Johnston"
     ],
     "a": [
      "Fabienne Yu",
      "Albert Pamudji"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kate Curren",
      "Jennifer Burke"
     ],
     "a": [
      "Jean Wang",
      "Nancy Lin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Carly Pfeffer",
      "Andrea Dellechiaie"
     ],
     "a": [
      "Lily Liu",
      "Fabienne Yu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Brian Gonzalez",
      "Chris Heimerle"
     ],
     "a": [
      "Frank Ding",
      "Ted Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "John Burke",
      "Bud Heller"
     ],
     "a": [
      "Jack Brod",
      "Wally Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Andrea Dellechiaie",
      "Charlie Johnston"
     ],
     "a": [
      "Jamie Sandman",
      "Yaowen Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Kate Curren",
      "Brian Gonzalez"
     ],
     "a": [
      "Stacy Garretson",
      "Jack Brod"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jennifer Burke",
      "John Burke"
     ],
     "a": [
      "Nancy Lin",
      "Wally Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jill Lesnik",
      "Chris Heimerle"
     ],
     "a": [
      "Fabienne Yu",
      "Albert Pamudji"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kate Curren",
      "Carly Pfeffer"
     ],
     "a": [
      "Stacy Garretson",
      "Jamie Sandman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Andrea Dellechiaie",
      "Jennifer Burke"
     ],
     "a": [
      "Jean Wang",
      "Fabienne Yu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Bud Heller",
      "Brian Gonzalez"
     ],
     "a": [
      "Frank Ding",
      "Yaowen Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Charlie Johnston",
      "John Burke"
     ],
     "a": [
      "Jack Brod",
      "Albert Pamudji"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Carly Pfeffer",
      "Chris Heimerle"
     ],
     "a": [
      "Jean Wang",
      "Ted Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Andrea Dellechiaie",
      "Brian Gonzalez"
     ],
     "a": [
      "Stacy Garretson",
      "Jack Brod"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Kate Curren",
      "Charlie Johnston"
     ],
     "a": [
      "Nancy Lin",
      "Frank Ding"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jill Lesnik",
      "Bud Heller"
     ],
     "a": [
      "Lily Liu",
      "Wally Liu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kate Curren",
      "Andrea Dellechiaie"
     ],
     "a": [
      "Lily Liu",
      "Jamie Sandman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Carly Pfeffer",
      "Jill Lesnik"
     ],
     "a": [
      "Jean Wang",
      "Fabienne Yu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Charlie Johnston",
      "Bud Heller"
     ],
     "a": [
      "Yaowen Li",
      "Albert Pamudji"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Chris Heimerle",
      "Brian Gonzalez"
     ],
     "a": [
      "Ted Lee",
      "Wally Liu"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 5,
   "home": "Stelton Sports",
   "away": "Bounce Malvern",
   "time": "2026-03-28T09:00:00",
   "complete": true,
   "homePoints": 407,
   "awayPoints": 673,
   "homeGW": 1,
   "awayGW": 31,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Trish Hicks",
      "Jim Peng"
     ],
     "a": [
      "Stephanie Woomer",
      "Dana Luscombe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Jennifer Qian",
      "Liangang Liu"
     ],
     "a": [
      "Harriet Levin",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Shaoyi Sun",
      "Gajendra Mehta"
     ],
     "a": [
      "Katherine Maruyama",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Rui Zhang",
      "Lei Dong"
     ],
     "a": [
      "Tera Baccile",
      "Michael Dieterle"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Shaoyi Sun",
      "Trish Hicks"
     ],
     "a": [
      "Stephanie Woomer",
      "Harriet Levin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Rui Zhang",
      "Jennifer Qian"
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
      "Ben Xie",
      "Gajendra Mehta"
     ],
     "a": [
      "Jim Darcangelo",
      "Michael Dieterle"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Lei Dong",
      "Liangang Liu"
     ],
     "a": [
      "Derek Le",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Shaoyi Sun",
      "Gajendra Mehta"
     ],
     "a": [
      "Katherine Maruyama",
      "Dana Luscombe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Rui Zhang",
      "Lei Dong"
     ],
     "a": [
      "Vicki Main",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Trish Hicks",
      "Jim Peng"
     ],
     "a": [
      "Harriet Levin",
      "Michael Dieterle"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jennifer Qian",
      "Liangang Liu"
     ],
     "a": [
      "Stephanie Woomer",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Shaoyi Sun",
      "Trish Hicks"
     ],
     "a": [
      "Stephanie Woomer",
      "Katherine Maruyama"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Rui Zhang",
      "Jennifer Qian"
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
      "Ben Xie",
      "Gajendra Mehta"
     ],
     "a": [
      "Jim Darcangelo",
      "Michael Dieterle"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jim Peng",
      "Liangang Liu"
     ],
     "a": [
      "Keith Goldberg",
      "Dana Luscombe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Shaoyi Sun",
      "Lei Dong"
     ],
     "a": [
      "Harriet Levin",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Rui Zhang",
      "Gajendra Mehta"
     ],
     "a": [
      "Vicki Main",
      "Michael Dieterle"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Trish Hicks",
      "Liangang Liu"
     ],
     "a": [
      "Katherine Maruyama",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Jennifer Qian",
      "Jim Peng"
     ],
     "a": [
      "Tera Baccile",
      "Keith Goldberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Jennifer Qian",
      "Shaoyi Sun"
     ],
     "a": [
      "Harriet Levin",
      "Stephanie Woomer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Rui Zhang",
      "Trish Hicks"
     ],
     "a": [
      "Tera Baccile",
      "Katherine Maruyama"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 4,
     "as": 21,
     "h": [
      "Lei Dong",
      "Ben Xie"
     ],
     "a": [
      "Derek Le",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Jim Peng",
      "Liangang Liu"
     ],
     "a": [
      "Dana Luscombe",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Trish Hicks",
      "Liangang Liu"
     ],
     "a": [
      "Stephanie Woomer",
      "Dana Luscombe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Rui Zhang",
      "Jim Peng"
     ],
     "a": [
      "Vicki Main",
      "Michael Dieterle"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Shaoyi Sun",
      "Lei Dong"
     ],
     "a": [
      "Katherine Maruyama",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jennifer Qian",
      "Ben Xie"
     ],
     "a": [
      "Tera Baccile",
      "Keith Goldberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Rui Zhang",
      "Shaoyi Sun"
     ],
     "a": [
      "Vicki Main",
      "Stephanie Woomer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Jennifer Qian",
      "Trish Hicks"
     ],
     "a": [
      "Katherine Maruyama",
      "Harriet Levin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Lei Dong",
      "Ben Xie"
     ],
     "a": [
      "Derek Le",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jim Peng",
      "Gajendra Mehta"
     ],
     "a": [
      "Michael Dieterle",
      "Dana Luscombe"
     ]
    }
   ],
   "subs": [
    "Gajendra Mehta",
    "Ben Xie",
    "Trish Hicks"
   ]
  },
  {
   "result": "away",
   "week": 5,
   "home": "Flemington",
   "away": "Jersey Pickleball Club",
   "time": "2026-03-28T09:00:00",
   "complete": true,
   "homePoints": 607,
   "awayPoints": 632,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Aimee Castellano",
      "Eric Luque"
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
     "as": 18,
     "h": [
      "Barbara Hess",
      "Art Muth"
     ],
     "a": [
      "Liz Cuozzo",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Amy Johnson",
      "Marc Friedman"
     ],
     "a": [
      "Eva Danieli",
      "Joe Palumbo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Denise Richmond",
      "David Osborne"
     ],
     "a": [
      "Pam Friedman",
      "Lance Brown"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Barbara Hess",
      "Denise Richmond"
     ],
     "a": [
      "Eva Danieli",
      "Natasha De Carvalho"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Amy Johnson",
      "Sue Johnson"
     ],
     "a": [
      "Amy Chrebet",
      "Pam Friedman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "David Osborne",
      "Eric Luque"
     ],
     "a": [
      "Michael Dombrowiecki",
      "Michael Swell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Marc Friedman",
      "Bob Castellano"
     ],
     "a": [
      "Joe Palumbo",
      "Scott Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Barbara Hess",
      "Eric Luque"
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
     "as": 16,
     "h": [
      "Amy Johnson",
      "David Osborne"
     ],
     "a": [
      "Natasha De Carvalho",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Aimee Castellano",
      "Bob Castellano"
     ],
     "a": [
      "Amy Chrebet",
      "Joe Palumbo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Sue Johnson",
      "Art Muth"
     ],
     "a": [
      "Liz Cuozzo",
      "Scott Friedman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Aimee Castellano",
      "Barbara Hess"
     ],
     "a": [
      "Natasha De Carvalho",
      "Amy Chrebet"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Amy Johnson",
      "Denise Richmond"
     ],
     "a": [
      "Liz Cuozzo",
      "Pam Friedman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Art Muth",
      "Marc Friedman"
     ],
     "a": [
      "Michael Swell",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Eric Luque",
      "Bob Castellano"
     ],
     "a": [
      "Lance Brown",
      "Scott Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Aimee Castellano",
      "Bob Castellano"
     ],
     "a": [
      "Liz Cuozzo",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Denise Richmond",
      "David Osborne"
     ],
     "a": [
      "Eva Danieli",
      "Joe Palumbo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Barbara Hess",
      "Marc Friedman"
     ],
     "a": [
      "Pam Friedman",
      "Scott Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Sue Johnson",
      "Art Muth"
     ],
     "a": [
      "Amy Chrebet",
      "Lance Brown"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Aimee Castellano",
      "Amy Johnson"
     ],
     "a": [
      "Amy Chrebet",
      "Eva Danieli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Denise Richmond",
      "Sue Johnson"
     ],
     "a": [
      "Natasha De Carvalho",
      "Liz Cuozzo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "David Osborne",
      "Bob Castellano"
     ],
     "a": [
      "Michael Swell",
      "Joe Palumbo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Art Muth",
      "Eric Luque"
     ],
     "a": [
      "Michael Dombrowiecki",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Aimee Castellano",
      "David Osborne"
     ],
     "a": [
      "Eva Danieli",
      "Michael Swell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Denise Richmond",
      "Bob Castellano"
     ],
     "a": [
      "Natasha De Carvalho",
      "Joe Palumbo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Barbara Hess",
      "Eric Luque"
     ],
     "a": [
      "Pam Friedman",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sue Johnson",
      "Marc Friedman"
     ],
     "a": [
      "Amy Chrebet",
      "Scott Friedman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Aimee Castellano",
      "Barbara Hess"
     ],
     "a": [
      "Amy Chrebet",
      "Liz Cuozzo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Amy Johnson",
      "Sue Johnson"
     ],
     "a": [
      "Natasha De Carvalho",
      "Pam Friedman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Art Muth",
      "David Osborne"
     ],
     "a": [
      "Michael Swell",
      "Joe Palumbo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Eric Luque",
      "Marc Friedman"
     ],
     "a": [
      "Michael Dombrowiecki",
      "Scott Friedman"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 5,
   "home": "APC Garden State",
   "away": "Home Court",
   "time": "2026-03-28T09:00:00",
   "complete": true,
   "homePoints": 611,
   "awayPoints": 616,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Laura Sweet",
      "Bennett Shanker"
     ],
     "a": [
      "Margaret Weidlich",
      "Robert Huntley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lara Webb",
      "Howie Steiner"
     ],
     "a": [
      "Anita Bobba",
      "Mark Lim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jiyun Yuh",
      "Laurence Emerson"
     ],
     "a": [
      "Laura Spilatro",
      "Sandeep Malhotra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Cynthia Covie",
      "Lance Stopek"
     ],
     "a": [
      "Sharon Streit",
      "Michael Vincent"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Laura Sweet",
      "Lara Webb"
     ],
     "a": [
      "Margaret Weidlich",
      "Susan M Fett"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Jiyun Yuh",
      "Kerry Gray-Style"
     ],
     "a": [
      "Anita Bobba",
      "Laura Spilatro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Bennett Shanker",
      "Howie Steiner"
     ],
     "a": [
      "Robert Huntley",
      "Mark Lim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Daniel Mellul",
      "Lance Stopek"
     ],
     "a": [
      "Michael Vincent",
      "Sandeep Malhotra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Laura Sweet",
      "Howie Steiner"
     ],
     "a": [
      "Margaret Weidlich",
      "Mark Lim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Lara Webb",
      "Daniel Mellul"
     ],
     "a": [
      "Anita Bobba",
      "Sandeep Malhotra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kerry Gray-Style",
      "Lance Stopek"
     ],
     "a": [
      "Sharon Streit",
      "Michael Vincent"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Cynthia Covie",
      "Laurence Emerson"
     ],
     "a": [
      "Susan M Fett",
      "Robert Huntley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lara Webb",
      "Kerry Gray-Style"
     ],
     "a": [
      "Anita Bobba",
      "Susan M Fett"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Laura Sweet",
      "Jiyun Yuh"
     ],
     "a": [
      "Sharon Streit",
      "Margaret Weidlich"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Lance Stopek",
      "Howie Steiner"
     ],
     "a": [
      "Robert Huntley",
      "Sandeep Malhotra"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Laurence Emerson",
      "Bennett Shanker"
     ],
     "a": [
      "Franklin Lupianez",
      "Mark Lim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Cynthia Covie",
      "Bennett Shanker"
     ],
     "a": [
      "Margaret Weidlich",
      "Mark Lim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Laura Sweet",
      "Lance Stopek"
     ],
     "a": [
      "Anita Bobba",
      "Sandeep Malhotra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lara Webb",
      "Howie Steiner"
     ],
     "a": [
      "Sharon Streit",
      "Robert Huntley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jiyun Yuh",
      "Daniel Mellul"
     ],
     "a": [
      "Susan M Fett",
      "Franklin Lupianez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kerry Gray-Style",
      "Lara Webb"
     ],
     "a": [
      "Anita Bobba",
      "Susan M Fett"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Cynthia Covie",
      "Jiyun Yuh"
     ],
     "a": [
      "Margaret Weidlich",
      "Laura Spilatro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Bennett Shanker",
      "Laurence Emerson"
     ],
     "a": [
      "Mark Lim",
      "Sandeep Malhotra"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lance Stopek",
      "Howie Steiner"
     ],
     "a": [
      "Franklin Lupianez",
      "Robert Huntley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kerry Gray-Style",
      "Laurence Emerson"
     ],
     "a": [
      "Margaret Weidlich",
      "Michael Vincent"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Cynthia Covie",
      "Daniel Mellul"
     ],
     "a": [
      "Anita Bobba",
      "Mark Lim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jiyun Yuh",
      "Bennett Shanker"
     ],
     "a": [
      "Sharon Streit",
      "Sandeep Malhotra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Laura Sweet",
      "Howie Steiner"
     ],
     "a": [
      "Susan M Fett",
      "Robert Huntley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Laura Sweet",
      "Lara Webb"
     ],
     "a": [
      "Anita Bobba",
      "Margaret Weidlich"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Cynthia Covie",
      "Kerry Gray-Style"
     ],
     "a": [
      "Sharon Streit",
      "Laura Spilatro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Bennett Shanker",
      "Howie Steiner"
     ],
     "a": [
      "Robert Huntley",
      "Mark Lim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Daniel Mellul",
      "Laurence Emerson"
     ],
     "a": [
      "Michael Vincent",
      "Sandeep Malhotra"
     ]
    }
   ],
   "subs": [
    "Susan M Fett",
    "Kerry Gray-Style"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Monroe",
   "time": "2026-03-28T12:00:00",
   "complete": true,
   "homePoints": 621,
   "awayPoints": 590,
   "homeGW": 19,
   "awayGW": 13,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ali Fordyce",
      "Marc Padre"
     ],
     "a": [
      "Tara Lombardo",
      "Erik Lombardo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Ayten Mayer",
      "Richard Demeuse"
     ],
     "a": [
      "Tracey Collins",
      "Guy Ohn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Ivona Reszka",
      "David Shapiro"
     ],
     "a": [
      "Hayley Yandoli",
      "Yi Gu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Renee Mitzner",
      "Brett Dellavolpe"
     ],
     "a": [
      "Andrea Mui",
      "Sal Frangipane"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ali Fordyce",
      "Ayten Mayer"
     ],
     "a": [
      "Tracey Collins",
      "Hayley Yandoli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Ivona Reszka",
      "Renee Mitzner"
     ],
     "a": [
      "Tara Lombardo",
      "Andrea Mui"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Marc Padre",
      "Richard Demeuse"
     ],
     "a": [
      "Guy Ohn",
      "Yi Gu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Brett Dellavolpe",
      "David Shapiro"
     ],
     "a": [
      "Erik Lombardo",
      "Sal Frangipane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Ali Fordyce",
      "Marc Padre"
     ],
     "a": [
      "Tara Lombardo",
      "Guy Ohn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Ayten Mayer",
      "Richard Demeuse"
     ],
     "a": [
      "Tracey Collins",
      "Sal Frangipane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Renee Mitzner",
      "David Shapiro"
     ],
     "a": [
      "Andrea Mui",
      "Yi Gu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ivona Reszka",
      "Brett Dellavolpe"
     ],
     "a": [
      "Hayley Yandoli",
      "Erik Lombardo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Ali Fordyce",
      "Ayten Mayer"
     ],
     "a": [
      "Tara Lombardo",
      "Hayley Yandoli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ivona Reszka",
      "Renee Mitzner"
     ],
     "a": [
      "Tracey Collins",
      "Andrea Mui"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Marc Padre",
      "David Shapiro"
     ],
     "a": [
      "Sal Frangipane",
      "Guy Ohn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Richard Demeuse",
      "Brett Dellavolpe"
     ],
     "a": [
      "Erik Lombardo",
      "Yi Gu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ayten Mayer",
      "Marc Padre"
     ],
     "a": [
      "Tara Lombardo",
      "Sal Frangipane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ali Fordyce",
      "Richard Demeuse"
     ],
     "a": [
      "Hayley Yandoli",
      "Erik Lombardo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Ivona Reszka",
      "David Shapiro"
     ],
     "a": [
      "Andrea Mui",
      "Guy Ohn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Renee Mitzner",
      "Brett Dellavolpe"
     ],
     "a": [
      "Tracey Collins",
      "Yi Gu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ali Fordyce",
      "Renee Mitzner"
     ],
     "a": [
      "Tara Lombardo",
      "Andrea Mui"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ivona Reszka",
      "Ayten Mayer"
     ],
     "a": [
      "Tracey Collins",
      "Hayley Yandoli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Marc Padre",
      "Brett Dellavolpe"
     ],
     "a": [
      "Guy Ohn",
      "Yi Gu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Richard Demeuse",
      "David Shapiro"
     ],
     "a": [
      "Erik Lombardo",
      "Sal Frangipane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Ivona Reszka",
      "Marc Padre"
     ],
     "a": [
      "Hayley Yandoli",
      "Sal Frangipane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ali Fordyce",
      "Richard Demeuse"
     ],
     "a": [
      "Tara Lombardo",
      "Erik Lombardo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Renee Mitzner",
      "David Shapiro"
     ],
     "a": [
      "Andrea Mui",
      "Guy Ohn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ayten Mayer",
      "Brett Dellavolpe"
     ],
     "a": [
      "Tracey Collins",
      "Yi Gu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Ali Fordyce",
      "Renee Mitzner"
     ],
     "a": [
      "Tara Lombardo",
      "Tracey Collins"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ivona Reszka",
      "Ayten Mayer"
     ],
     "a": [
      "Hayley Yandoli",
      "Andrea Mui"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Marc Padre",
      "Richard Demeuse"
     ],
     "a": [
      "Guy Ohn",
      "Sal Frangipane"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Brett Dellavolpe",
      "David Shapiro"
     ],
     "a": [
      "Erik Lombardo",
      "Yi Gu"
     ]
    }
   ],
   "subs": [
    "David Shapiro",
    "Ali Fordyce",
    "Sal Frangipane"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "ACE",
   "away": "Montville",
   "time": "2026-03-28T12:00:00",
   "complete": true,
   "homePoints": 670,
   "awayPoints": 430,
   "homeGW": 29,
   "awayGW": 3,
   "games": [
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
      "Oliveira Karen",
      "Andre Yang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Pam Boyd",
      "Robert Finley"
     ],
     "a": [
      "Michele Dabal",
      "Samir Fahmy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Stacey Frank",
      "Jeff Lorman"
     ],
     "a": [
      "Liang Chao",
      "Jitendra Arora"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Kate Siedell",
      "Marc Harden"
     ],
     "a": [
      "Savita Nandal",
      "David King"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kate Siedell",
      "Sandy Alkins"
     ],
     "a": [
      "Oliveira Karen",
      "Michele Dabal"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Pam Boyd",
      "Stacey Frank"
     ],
     "a": [
      "Liang Chao",
      "Savita Nandal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Robert Finley",
      "Marc Pellicane"
     ],
     "a": [
      "Andre Yang",
      "Samir Fahmy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Marc Harden",
      "James Shaw"
     ],
     "a": [
      "David King",
      "Jitendra Arora"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sandy Alkins",
      "Marc Harden"
     ],
     "a": [
      "Cindy Wang",
      "Andre Yang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kate Siedell",
      "Jeff Lorman"
     ],
     "a": [
      "Oliveira Karen",
      "Samir Fahmy"
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
      "Michele Dabal",
      "Jitendra Arora"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Pam Boyd",
      "Robert Finley"
     ],
     "a": [
      "Savita Nandal",
      "David King"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Sandy Alkins",
      "Pam Boyd"
     ],
     "a": [
      "Michele Dabal",
      "Liang Chao"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Kate Siedell",
      "Stacey Frank"
     ],
     "a": [
      "Oliveira Karen",
      "Savita Nandal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "James Shaw",
      "Jeff Lorman"
     ],
     "a": [
      "Andre Yang",
      "Jitendra Arora"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Marc Pellicane",
      "Robert Finley"
     ],
     "a": [
      "David King",
      "Samir Fahmy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Stacey Frank",
      "Jeff Lorman"
     ],
     "a": [
      "Cindy Wang",
      "Andre Yang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Pam Boyd",
      "Marc Pellicane"
     ],
     "a": [
      "Oliveira Karen",
      "Samir Fahmy"
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
      "Michele Dabal",
      "David King"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Sandy Alkins",
      "James Shaw"
     ],
     "a": [
      "Savita Nandal",
      "Jitendra Arora"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Sandy Alkins",
      "Stacey Frank"
     ],
     "a": [
      "Oliveira Karen",
      "Michele Dabal"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Kate Siedell",
      "Pam Boyd"
     ],
     "a": [
      "Liang Chao",
      "Savita Nandal"
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
      "Andre Yang",
      "David King"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Marc Pellicane",
      "Marc Harden"
     ],
     "a": [
      "Jitendra Arora",
      "Samir Fahmy"
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
      "Michele Dabal",
      "Andre Yang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sandy Alkins",
      "Jeff Lorman"
     ],
     "a": [
      "Oliveira Karen",
      "David King"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Pam Boyd",
      "Marc Harden"
     ],
     "a": [
      "Liang Chao",
      "Samir Fahmy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Kate Siedell",
      "Robert Finley"
     ],
     "a": [
      "Savita Nandal",
      "Jitendra Arora"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kate Siedell",
      "Sandy Alkins"
     ],
     "a": [
      "Oliveira Karen",
      "Liang Chao"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Pam Boyd",
      "Stacey Frank"
     ],
     "a": [
      "Michele Dabal",
      "Savita Nandal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "James Shaw",
      "Jeff Lorman"
     ],
     "a": [
      "Andre Yang",
      "Samir Fahmy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Marc Harden",
      "Marc Pellicane"
     ],
     "a": [
      "David King",
      "Jitendra Arora"
     ]
    }
   ],
   "subs": [
    "David King",
    "Jitendra Arora",
    "Samir Fahmy"
   ]
  },
  {
   "result": "away",
   "week": 5,
   "home": "Pickleball Kingdom Hamilton",
   "away": "Bounce Malvern",
   "time": "2026-03-29T12:00:00",
   "complete": true,
   "homePoints": 489,
   "awayPoints": 668,
   "homeGW": 6,
   "awayGW": 26,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Jamie Sandman",
      "Jack Brod"
     ],
     "a": [
      "Tera Baccile",
      "Michael Dieterle"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Lily Liu",
      "Wally Liu"
     ],
     "a": [
      "Vicki Main",
      "Dana Luscombe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Yang Ruan",
      "Zhe Ding"
     ],
     "a": [
      "Harriet Levin",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Stacy Garretson",
      "Yaowen Li"
     ],
     "a": [
      "Stephanie Woomer",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Lily Liu",
      "Nancy Lin"
     ],
     "a": [
      "Stephanie Woomer",
      "Tera Baccile"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Stacy Garretson",
      "Jamie Sandman"
     ],
     "a": [
      "Katherine Maruyama",
      "Vicki Main"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Ted Lee",
      "Jack Brod"
     ],
     "a": [
      "Dana Luscombe",
      "Derek Le"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Albert Pamudji",
      "Yaowen Li"
     ],
     "a": [
      "Michael Dieterle",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Yang Ruan",
      "Zhe Ding"
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
     "as": 19,
     "h": [
      "Fabienne Yu",
      "Albert Pamudji"
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
     "as": 19,
     "h": [
      "Stacy Garretson",
      "Yaowen Li"
     ],
     "a": [
      "Katherine Maruyama",
      "Dana Luscombe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Nancy Lin",
      "Ted Lee"
     ],
     "a": [
      "Harriet Levin",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lily Liu",
      "Fabienne Yu"
     ],
     "a": [
      "Tera Baccile",
      "Katherine Maruyama"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Yang Ruan",
      "Jamie Sandman"
     ],
     "a": [
      "Harriet Levin",
      "Stephanie Woomer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jack Brod",
      "Wally Liu"
     ],
     "a": [
      "Dana Luscombe",
      "Derek Le"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Ted Lee",
      "Zhe Ding"
     ],
     "a": [
      "Michael Finkelstein",
      "Michael Dieterle"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lily Liu",
      "Yaowen Li"
     ],
     "a": [
      "Vicki Main",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Fabienne Yu",
      "Albert Pamudji"
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
      "Nancy Lin",
      "Wally Liu"
     ],
     "a": [
      "Harriet Levin",
      "Dana Luscombe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Stacy Garretson",
      "Jack Brod"
     ],
     "a": [
      "Stephanie Woomer",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Yang Ruan",
      "Jamie Sandman"
     ],
     "a": [
      "Stephanie Woomer",
      "Tera Baccile"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Nancy Lin",
      "Stacy Garretson"
     ],
     "a": [
      "Harriet Levin",
      "Vicki Main"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ted Lee",
      "Wally Liu"
     ],
     "a": [
      "Michael Dieterle",
      "Derek Le"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Zhe Ding",
      "Yaowen Li"
     ],
     "a": [
      "Michael Finkelstein",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lily Liu",
      "Wally Liu"
     ],
     "a": [
      "Tera Baccile",
      "Michael Dieterle"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Nancy Lin",
      "Albert Pamudji"
     ],
     "a": [
      "Katherine Maruyama",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jamie Sandman",
      "Jack Brod"
     ],
     "a": [
      "Harriet Levin",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Fabienne Yu",
      "Ted Lee"
     ],
     "a": [
      "Stephanie Woomer",
      "Dana Luscombe"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lily Liu",
      "Fabienne Yu"
     ],
     "a": [
      "Tera Baccile",
      "Vicki Main"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Stacy Garretson",
      "Jamie Sandman"
     ],
     "a": [
      "Harriet Levin",
      "Katherine Maruyama"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Yaowen Li",
      "Albert Pamudji"
     ],
     "a": [
      "Michael Dieterle",
      "Derek Le"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Zhe Ding",
      "Ted Lee"
     ],
     "a": [
      "Jim Darcangelo",
      "Dana Luscombe"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 5,
   "home": "Home Court",
   "away": "Montville",
   "time": "2026-03-29T12:00:00",
   "complete": true,
   "homePoints": 640,
   "awayPoints": 631,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Margaret Weidlich",
      "Michael Barninger"
     ],
     "a": [
      "Robin Varro",
      "Andre Yang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sharon Streit",
      "George Mandl"
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
     "as": 11,
     "h": [
      "Karan Pescatore",
      "Robert Huntley"
     ],
     "a": [
      "Kristen Silvestri",
      "Louis Vessichelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sarah Mcparland",
      "Emil Pescatore"
     ],
     "a": [
      "Surbhi Sabharwal",
      "Michael Oppenheim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sharon Streit",
      "Sarah Mcparland"
     ],
     "a": [
      "Ronnie Yin",
      "Surbhi Sabharwal"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Margaret Weidlich",
      "Karan Pescatore"
     ],
     "a": [
      "Kristen Silvestri",
      "Robin Varro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Robert Huntley",
      "Michael Barninger"
     ],
     "a": [
      "Andre Yang",
      "Louis Vessichelli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Emil Pescatore",
      "George Mandl"
     ],
     "a": [
      "Liangjie Zhu",
      "Brandon Fulford"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Sarah Mcparland",
      "Emil Pescatore"
     ],
     "a": [
      "Robin Varro",
      "Michael Oppenheim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Karan Pescatore",
      "Michael Barninger"
     ],
     "a": [
      "Surbhi Sabharwal",
      "Jeffrey Heil"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Christine Chwe",
      "Robert Huntley"
     ],
     "a": [
      "Kristen Silvestri",
      "Louis Vessichelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Margaret Weidlich",
      "George Mandl"
     ],
     "a": [
      "Ronnie Yin",
      "Brandon Fulford"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sarah Mcparland",
      "Christine Chwe"
     ],
     "a": [
      "Robin Varro",
      "Kristen Silvestri"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Karan Pescatore",
      "Sharon Streit"
     ],
     "a": [
      "Ronnie Yin",
      "Surbhi Sabharwal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "George Mandl",
      "Michael Barninger"
     ],
     "a": [
      "Liangjie Zhu",
      "Louis Vessichelli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Emil Pescatore",
      "Robert Huntley"
     ],
     "a": [
      "Michael Oppenheim",
      "Jeffrey Heil"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Margaret Weidlich",
      "George Mandl"
     ],
     "a": [
      "Robin Varro",
      "Liangjie Zhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Karan Pescatore",
      "Michael Barninger"
     ],
     "a": [
      "Kristen Silvestri",
      "Andre Yang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sharon Streit",
      "Emil Pescatore"
     ],
     "a": [
      "Ronnie Yin",
      "Louis Vessichelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Sarah Mcparland",
      "Robert Huntley"
     ],
     "a": [
      "Surbhi Sabharwal",
      "Jeffrey Heil"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Christine Chwe",
      "Sarah Mcparland"
     ],
     "a": [
      "Robin Varro",
      "Surbhi Sabharwal"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Karan Pescatore",
      "Sharon Streit"
     ],
     "a": [
      "Kristen Silvestri",
      "Ronnie Yin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "George Mandl",
      "Emil Pescatore"
     ],
     "a": [
      "Andre Yang",
      "Brandon Fulford"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Robert Huntley",
      "Michael Barninger"
     ],
     "a": [
      "Michael Oppenheim",
      "Jeffrey Heil"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Karan Pescatore",
      "Emil Pescatore"
     ],
     "a": [
      "Robin Varro",
      "Andre Yang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Christine Chwe",
      "Robert Huntley"
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
     "as": 19,
     "h": [
      "Margaret Weidlich",
      "Michael Barninger"
     ],
     "a": [
      "Surbhi Sabharwal",
      "Michael Oppenheim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Sarah Mcparland",
      "George Mandl"
     ],
     "a": [
      "Kristen Silvestri",
      "Brandon Fulford"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Margaret Weidlich",
      "Christine Chwe"
     ],
     "a": [
      "Ronnie Yin",
      "Robin Varro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Karan Pescatore",
      "Sarah Mcparland"
     ],
     "a": [
      "Surbhi Sabharwal",
      "Kristen Silvestri"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Emil Pescatore",
      "Robert Huntley"
     ],
     "a": [
      "Andre Yang",
      "Michael Oppenheim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "George Mandl",
      "Michael Barninger"
     ],
     "a": [
      "Liangjie Zhu",
      "Jeffrey Heil"
     ]
    }
   ],
   "subs": [
    "Surbhi Sabharwal",
    "Robin Varro"
   ]
  },
  {
   "result": "away",
   "week": 5,
   "home": "Monroe",
   "away": "ACE",
   "time": "2026-03-29T13:00:00",
   "complete": true,
   "homePoints": 555,
   "awayPoints": 669,
   "homeGW": 8,
   "awayGW": 24,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Tara Lombardo",
      "Santhosh Pillai"
     ],
     "a": [
      "Susan Perry",
      "James Shaw"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Hayley Yandoli",
      "Guy Ohn"
     ],
     "a": [
      "Stacey Frank",
      "Brad Daddis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Andrea Mui",
      "Naresh Malhotra"
     ],
     "a": [
      "Pam Boyd",
      "Brian Rowan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Coby Resnick",
      "Tim Ahn"
     ],
     "a": [
      "Kate Siedell",
      "Jeff Lorman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Andrea Mui",
      "Tara Lombardo"
     ],
     "a": [
      "Kate Siedell",
      "Stacey Frank"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Hayley Yandoli",
      "Coby Resnick"
     ],
     "a": [
      "Pam Boyd",
      "Susan Perry"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tim Ahn",
      "Erik Lombardo"
     ],
     "a": [
      "James Shaw",
      "Roger Graterol"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Naresh Malhotra",
      "Yi Gu"
     ],
     "a": [
      "Brian Rowan",
      "Jeff Lorman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Tara Lombardo",
      "Santhosh Pillai"
     ],
     "a": [
      "Kate Siedell",
      "Brian Rowan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Coby Resnick",
      "Erik Lombardo"
     ],
     "a": [
      "Stacey Frank",
      "James Shaw"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Hayley Yandoli",
      "Naresh Malhotra"
     ],
     "a": [
      "Pam Boyd",
      "Roger Graterol"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Andrea Mui",
      "Tim Ahn"
     ],
     "a": [
      "Susan Perry",
      "Brad Daddis"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Hayley Yandoli",
      "Tara Lombardo"
     ],
     "a": [
      "Stacey Frank",
      "Pam Boyd"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Andrea Mui",
      "Coby Resnick"
     ],
     "a": [
      "Kate Siedell",
      "Susan Perry"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Naresh Malhotra",
      "Santhosh Pillai"
     ],
     "a": [
      "James Shaw",
      "Jeff Lorman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Guy Ohn",
      "Yi Gu"
     ],
     "a": [
      "Brian Rowan",
      "Brad Daddis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Coby Resnick",
      "Erik Lombardo"
     ],
     "a": [
      "Kate Siedell",
      "Jeff Lorman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Tara Lombardo",
      "Yi Gu"
     ],
     "a": [
      "Stacey Frank",
      "James Shaw"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Hayley Yandoli",
      "Tim Ahn"
     ],
     "a": [
      "Susan Perry",
      "Roger Graterol"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Andrea Mui",
      "Guy Ohn"
     ],
     "a": [
      "Pam Boyd",
      "Brad Daddis"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Tara Lombardo",
      "Andrea Mui"
     ],
     "a": [
      "Kate Siedell",
      "Pam Boyd"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Hayley Yandoli",
      "Coby Resnick"
     ],
     "a": [
      "Stacey Frank",
      "Susan Perry"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Tim Ahn",
      "Yi Gu"
     ],
     "a": [
      "James Shaw",
      "Roger Graterol"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Santhosh Pillai",
      "Erik Lombardo"
     ],
     "a": [
      "Brian Rowan",
      "Jeff Lorman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Coby Resnick",
      "Santhosh Pillai"
     ],
     "a": [
      "Kate Siedell",
      "Brian Rowan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Andrea Mui",
      "Guy Ohn"
     ],
     "a": [
      "Stacey Frank",
      "Brad Daddis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Tara Lombardo",
      "Erik Lombardo"
     ],
     "a": [
      "Pam Boyd",
      "Roger Graterol"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Hayley Yandoli",
      "Naresh Malhotra"
     ],
     "a": [
      "Susan Perry",
      "Jeff Lorman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Andrea Mui",
      "Coby Resnick"
     ],
     "a": [
      "Kate Siedell",
      "Stacey Frank"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Tara Lombardo",
      "Hayley Yandoli"
     ],
     "a": [
      "Pam Boyd",
      "Susan Perry"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Yi Gu",
      "Tim Ahn"
     ],
     "a": [
      "James Shaw",
      "Jeff Lorman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Santhosh Pillai",
      "Naresh Malhotra"
     ],
     "a": [
      "Brian Rowan",
      "Roger Graterol"
     ]
    }
   ],
   "subs": [
    "Susan Perry",
    "Coby Resnick"
   ]
  },
  {
   "result": "away",
   "week": 5,
   "home": "APC Garden State",
   "away": "Flemington",
   "time": "2026-03-29T14:00:00",
   "complete": true,
   "homePoints": 594,
   "awayPoints": 643,
   "homeGW": 11,
   "awayGW": 21,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Laura Sweet",
      "Laurence Emerson"
     ],
     "a": [
      "Christine Papa",
      "Marc Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lara Webb",
      "Lance Stopek"
     ],
     "a": [
      "Carol Mastroianni",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kelly Dalsey",
      "Bennett Shanker"
     ],
     "a": [
      "Barbara Hess",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Cynthia Covie",
      "Brian Caine"
     ],
     "a": [
      "Kristen Soucie",
      "Scott Rubin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Laura Sweet",
      "Lara Webb"
     ],
     "a": [
      "Barbara Hess",
      "Christine Papa"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Cynthia Covie",
      "Jiyun Yuh"
     ],
     "a": [
      "Kristen Soucie",
      "Tara Kramer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Laurence Emerson",
      "Rick Derose"
     ],
     "a": [
      "Scott Rubin",
      "Steven Gregov"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Howie Steiner",
      "Lance Stopek"
     ],
     "a": [
      "David Osborne",
      "Marc Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Laura Sweet",
      "Bennett Shanker"
     ],
     "a": [
      "Barbara Hess",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 4,
     "as": 21,
     "h": [
      "Lara Webb",
      "Rick Derose"
     ],
     "a": [
      "Kristen Soucie",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Kelly Dalsey",
      "Brian Caine"
     ],
     "a": [
      "Carol Mastroianni",
      "Marc Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jiyun Yuh",
      "Howie Steiner"
     ],
     "a": [
      "Tara Kramer",
      "Steven Gregov"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Cynthia Covie",
      "Kelly Dalsey"
     ],
     "a": [
      "Barbara Hess",
      "Tara Kramer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Laura Sweet",
      "Jiyun Yuh"
     ],
     "a": [
      "Carol Mastroianni",
      "Christine Papa"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Bennett Shanker",
      "Howie Steiner"
     ],
     "a": [
      "Eric Luque",
      "Steven Gregov"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Lance Stopek",
      "Laurence Emerson"
     ],
     "a": [
      "David Osborne",
      "Scott Rubin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Cynthia Covie",
      "Brian Caine"
     ],
     "a": [
      "Christine Papa",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Kelly Dalsey",
      "Bennett Shanker"
     ],
     "a": [
      "Barbara Hess",
      "Scott Rubin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lara Webb",
      "Lance Stopek"
     ],
     "a": [
      "Tara Kramer",
      "Marc Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Laura Sweet",
      "Rick Derose"
     ],
     "a": [
      "Kristen Soucie",
      "Eric Luque"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Cynthia Covie",
      "Jiyun Yuh"
     ],
     "a": [
      "Tara Kramer",
      "Christine Papa"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Laura Sweet",
      "Lara Webb"
     ],
     "a": [
      "Carol Mastroianni",
      "Kristen Soucie"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Brian Caine",
      "Laurence Emerson"
     ],
     "a": [
      "Scott Rubin",
      "Steven Gregov"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Howie Steiner",
      "Lance Stopek"
     ],
     "a": [
      "Eric Luque",
      "Marc Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kelly Dalsey",
      "Lance Stopek"
     ],
     "a": [
      "Christine Papa",
      "Scott Rubin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Lara Webb",
      "Howie Steiner"
     ],
     "a": [
      "Tara Kramer",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Cynthia Covie",
      "Bennett Shanker"
     ],
     "a": [
      "Barbara Hess",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Jiyun Yuh",
      "Rick Derose"
     ],
     "a": [
      "Carol Mastroianni",
      "Steven Gregov"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Laura Sweet",
      "Jiyun Yuh"
     ],
     "a": [
      "Carol Mastroianni",
      "Christine Papa"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lara Webb",
      "Kelly Dalsey"
     ],
     "a": [
      "Barbara Hess",
      "Kristen Soucie"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Howie Steiner",
      "Bennett Shanker"
     ],
     "a": [
      "David Osborne",
      "Eric Luque"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Laurence Emerson",
      "Rick Derose"
     ],
     "a": [
      "Marc Friedman",
      "Steven Gregov"
     ]
    }
   ],
   "subs": [
    "Kelly Dalsey"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "Pickleball Palace",
   "away": "Jersey Pickleball Club",
   "time": "2026-03-29T14:00:00",
   "complete": true,
   "homePoints": 622,
   "awayPoints": 571,
   "homeGW": 20,
   "awayGW": 12,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Rebecca Lederman",
      "Johnson Chang"
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
     "as": 15,
     "h": [
      "Kate Curren",
      "Jeffrey Susskind"
     ],
     "a": [
      "Amy Chrebet",
      "Brad Oldham"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kelly Hanson Word",
      "Alex Lee"
     ],
     "a": [
      "Eva Danieli",
      "Gary Sidhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sinitra Siengsanaoh",
      "Rick Vazquez"
     ],
     "a": [
      "Liz Cuozzo",
      "Joe Palumbo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sinitra Siengsanaoh",
      "Amanda Quinn"
     ],
     "a": [
      "Natasha De Carvalho",
      "Eva Danieli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Rebecca Lederman",
      "Kelly Hanson Word"
     ],
     "a": [
      "Amy Chrebet",
      "Meryl Nadler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Alex Lee",
      "Rick Vazquez"
     ],
     "a": [
      "Michael Swell",
      "Rich Gaborow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jeffrey Susskind",
      "Johnson Chang"
     ],
     "a": [
      "Brad Oldham",
      "Gary Sidhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Amanda Quinn",
      "Johnson Chang"
     ],
     "a": [
      "Liz Cuozzo",
      "Brad Oldham"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kelly Hanson Word",
      "Jeffrey Susskind"
     ],
     "a": [
      "Meryl Nadler",
      "Gary Sidhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Sinitra Siengsanaoh",
      "Brian Gonzalez"
     ],
     "a": [
      "Eva Danieli",
      "Joe Palumbo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Kate Curren",
      "Alex Lee"
     ],
     "a": [
      "Amy Chrebet",
      "Rich Gaborow"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kelly Hanson Word",
      "Rebecca Lederman"
     ],
     "a": [
      "Amy Chrebet",
      "Natasha De Carvalho"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kate Curren",
      "Sinitra Siengsanaoh"
     ],
     "a": [
      "Liz Cuozzo",
      "Meryl Nadler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Alex Lee",
      "Jeffrey Susskind"
     ],
     "a": [
      "Rich Gaborow",
      "Brad Oldham"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Brian Gonzalez",
      "Johnson Chang"
     ],
     "a": [
      "Joe Palumbo",
      "Michael Swell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kate Curren",
      "Rick Vazquez"
     ],
     "a": [
      "Eva Danieli",
      "Michael Swell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Amanda Quinn",
      "Alex Lee"
     ],
     "a": [
      "Liz Cuozzo",
      "Gary Sidhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Rebecca Lederman",
      "Johnson Chang"
     ],
     "a": [
      "Natasha De Carvalho",
      "Rich Gaborow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sinitra Siengsanaoh",
      "Brian Gonzalez"
     ],
     "a": [
      "Meryl Nadler",
      "Joe Palumbo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kate Curren",
      "Amanda Quinn"
     ],
     "a": [
      "Amy Chrebet",
      "Natasha De Carvalho"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kelly Hanson Word",
      "Sinitra Siengsanaoh"
     ],
     "a": [
      "Eva Danieli",
      "Meryl Nadler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jeffrey Susskind",
      "Rick Vazquez"
     ],
     "a": [
      "Michael Swell",
      "Rich Gaborow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Brian Gonzalez",
      "Johnson Chang"
     ],
     "a": [
      "Brad Oldham",
      "Gary Sidhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kate Curren",
      "Alex Lee"
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
     "as": 15,
     "h": [
      "Rebecca Lederman",
      "Jeffrey Susskind"
     ],
     "a": [
      "Amy Chrebet",
      "Brad Oldham"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kelly Hanson Word",
      "Brian Gonzalez"
     ],
     "a": [
      "Eva Danieli",
      "Joe Palumbo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Amanda Quinn",
      "Rick Vazquez"
     ],
     "a": [
      "Liz Cuozzo",
      "Gary Sidhu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Rebecca Lederman",
      "Amanda Quinn"
     ],
     "a": [
      "Eva Danieli",
      "Meryl Nadler"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kate Curren",
      "Kelly Hanson Word"
     ],
     "a": [
      "Amy Chrebet",
      "Liz Cuozzo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jeffrey Susskind",
      "Rick Vazquez"
     ],
     "a": [
      "Michael Swell",
      "Joe Palumbo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Alex Lee",
      "Brian Gonzalez"
     ],
     "a": [
      "Brad Oldham",
      "Rich Gaborow"
     ]
    }
   ],
   "subs": [
    "Rich Gaborow"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "Stelton Sports",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-03-29T14:00:00",
   "complete": true,
   "homePoints": 594,
   "awayPoints": 578,
   "homeGW": 19,
   "awayGW": 13,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Suzanne \"Zan\" Davies",
      "Jiangang Li"
     ],
     "a": [
      "Bobo Delaney",
      "Marc Padre"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Susan St. Pierre",
      "Sam Barett"
     ],
     "a": [
      "Nicole Nelson",
      "Richard Abate"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jennifer Qian",
      "Liangang Liu"
     ],
     "a": [
      "Ivona Reszka",
      "Sergey Konyukhov"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Rui Zhang",
      "Lei Dong"
     ],
     "a": [
      "Ayten Mayer",
      "Richard Demeuse"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jennifer Qian",
      "Suzanne \"Zan\" Davies"
     ],
     "a": [
      "Dint Moore",
      "Bobo Delaney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Rui Zhang",
      "Susan St. Pierre"
     ],
     "a": [
      "Ivona Reszka",
      "Ayten Mayer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jiangang Li",
      "Jim Peng"
     ],
     "a": [
      "Brett Dellavolpe",
      "Sergey Konyukhov"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Liangang Liu",
      "Dave Pellicane"
     ],
     "a": [
      "Richard Demeuse",
      "Richard Abate"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Susan St. Pierre",
      "Sam Barett"
     ],
     "a": [
      "Bobo Delaney",
      "Marc Padre"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Rui Zhang",
      "Lei Dong"
     ],
     "a": [
      "Dint Moore",
      "Brett Dellavolpe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jennifer Qian",
      "Liangang Liu"
     ],
     "a": [
      "Ayten Mayer",
      "Sergey Konyukhov"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Suzanne \"Zan\" Davies",
      "Dave Pellicane"
     ],
     "a": [
      "Nicole Nelson",
      "Richard Abate"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Rui Zhang",
      "Suzanne \"Zan\" Davies"
     ],
     "a": [
      "Dint Moore",
      "Ayten Mayer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jennifer Qian",
      "Susan St. Pierre"
     ],
     "a": [
      "Ivona Reszka",
      "Bobo Delaney"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Jiangang Li",
      "Dave Pellicane"
     ],
     "a": [
      "Marc Padre",
      "Richard Demeuse"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Lei Dong",
      "Jim Peng"
     ],
     "a": [
      "Richard Abate",
      "Sergey Konyukhov"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jennifer Qian",
      "Sam Barett"
     ],
     "a": [
      "Dint Moore",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Susan St. Pierre",
      "Lei Dong"
     ],
     "a": [
      "Ayten Mayer",
      "Richard Abate"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Suzanne \"Zan\" Davies",
      "Liangang Liu"
     ],
     "a": [
      "Bobo Delaney",
      "Sergey Konyukhov"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Rui Zhang",
      "Jim Peng"
     ],
     "a": [
      "Nicole Nelson",
      "Brett Dellavolpe"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Rui Zhang",
      "Jennifer Qian"
     ],
     "a": [
      "Dint Moore",
      "Nicole Nelson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Susan St. Pierre",
      "Suzanne \"Zan\" Davies"
     ],
     "a": [
      "Ivona Reszka",
      "Bobo Delaney"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Liangang Liu",
      "Dave Pellicane"
     ],
     "a": [
      "Marc Padre",
      "Sergey Konyukhov"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jiangang Li",
      "Jim Peng"
     ],
     "a": [
      "Richard Demeuse",
      "Brett Dellavolpe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Rui Zhang",
      "Sam Barett"
     ],
     "a": [
      "Bobo Delaney",
      "Richard Abate"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jennifer Qian",
      "Jim Peng"
     ],
     "a": [
      "Ayten Mayer",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Susan St. Pierre",
      "Lei Dong"
     ],
     "a": [
      "Nicole Nelson",
      "Brett Dellavolpe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Suzanne \"Zan\" Davies",
      "Liangang Liu"
     ],
     "a": [
      "Ivona Reszka",
      "Marc Padre"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jennifer Qian",
      "Susan St. Pierre"
     ],
     "a": [
      "Dint Moore",
      "Bobo Delaney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Rui Zhang",
      "Suzanne \"Zan\" Davies"
     ],
     "a": [
      "Ivona Reszka",
      "Nicole Nelson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Jiangang Li",
      "Dave Pellicane"
     ],
     "a": [
      "Marc Padre",
      "Richard Abate"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Lei Dong",
      "Sam Barett"
     ],
     "a": [
      "Richard Demeuse",
      "Brett Dellavolpe"
     ]
    }
   ],
   "subs": [
    "Susan St. Pierre",
    "Bobo Delaney",
    "Sergey Konyukhov",
    "Sam Barett",
    "Nicole Nelson",
    "Jiangang Li"
   ]
  },
  {
   "result": "home",
   "week": 6,
   "home": "ACE",
   "away": "Bounce Malvern",
   "time": "2026-04-04T12:30:00",
   "complete": true,
   "homePoints": 600,
   "awayPoints": 603,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Stacey Frank",
      "James Shaw"
     ],
     "a": [
      "Harriet Levin",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Pam Boyd",
      "Sang Nguyen"
     ],
     "a": [
      "Vicki Main",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Christine Cardinal",
      "Roger Graterol"
     ],
     "a": [
      "Katherine Maruyama",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Kate Siedell",
      "Marc Harden"
     ],
     "a": [
      "Tera Baccile",
      "Derek Le"
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
      "Vicki Main"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Pam Boyd",
      "Christine Cardinal"
     ],
     "a": [
      "Tera Baccile",
      "Katherine Maruyama"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sang Nguyen",
      "James Shaw"
     ],
     "a": [
      "Jim Darcangelo",
      "Keith Goldberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Robert Finley",
      "Marc Harden"
     ],
     "a": [
      "Derek Le",
      "Michael Dieterle"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Stacey Frank",
      "Roger Graterol"
     ],
     "a": [
      "Tera Baccile",
      "Michael Dieterle"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Pam Boyd",
      "Marc Harden"
     ],
     "a": [
      "Katherine Maruyama",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kate Siedell",
      "Sang Nguyen"
     ],
     "a": [
      "Vicki Main",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Christine Cardinal",
      "Robert Finley"
     ],
     "a": [
      "Harriet Levin",
      "Keith Goldberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Kate Siedell",
      "Christine Cardinal"
     ],
     "a": [
      "Tera Baccile",
      "Katherine Maruyama"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Stacey Frank",
      "Pam Boyd"
     ],
     "a": [
      "Harriet Levin",
      "Vicki Main"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Sang Nguyen",
      "Roger Graterol"
     ],
     "a": [
      "Michael Dieterle",
      "Derek Le"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "James Shaw",
      "Robert Finley"
     ],
     "a": [
      "Michael Finkelstein",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Pam Boyd",
      "Marc Harden"
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
      "Kate Siedell",
      "Sang Nguyen"
     ],
     "a": [
      "Katherine Maruyama",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Christine Cardinal",
      "Robert Finley"
     ],
     "a": [
      "Tera Baccile",
      "Michael Dieterle"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Stacey Frank",
      "James Shaw"
     ],
     "a": [
      "Harriet Levin",
      "Keith Goldberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Stacey Frank",
      "Christine Cardinal"
     ],
     "a": [
      "Katherine Maruyama",
      "Harriet Levin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kate Siedell",
      "Pam Boyd"
     ],
     "a": [
      "Tera Baccile",
      "Vicki Main"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Roger Graterol",
      "Robert Finley"
     ],
     "a": [
      "Keith Goldberg",
      "Michael Dieterle"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Marc Harden",
      "Sang Nguyen"
     ],
     "a": [
      "Michael Finkelstein",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Pam Boyd",
      "James Shaw"
     ],
     "a": [
      "Vicki Main",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Kate Siedell",
      "Marc Harden"
     ],
     "a": [
      "Harriet Levin",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Christine Cardinal",
      "Roger Graterol"
     ],
     "a": [
      "Tera Baccile",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Stacey Frank",
      "Sang Nguyen"
     ],
     "a": [
      "Katherine Maruyama",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kate Siedell",
      "Stacey Frank"
     ],
     "a": [
      "Vicki Main",
      "Tera Baccile"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Pam Boyd",
      "Christine Cardinal"
     ],
     "a": [
      "Harriet Levin",
      "Katherine Maruyama"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Robert Finley",
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
     "as": 13,
     "h": [
      "James Shaw",
      "Sang Nguyen"
     ],
     "a": [
      "Michael Dieterle",
      "Keith Goldberg"
     ]
    }
   ],
   "subs": [
    "Christine Cardinal"
   ]
  },
  {
   "result": "home",
   "week": 7,
   "home": "Flemington",
   "away": "APC Garden State",
   "time": "2026-04-11T12:00:00",
   "complete": true,
   "homePoints": 617,
   "awayPoints": 551,
   "homeGW": 21,
   "awayGW": 11,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Susan Ackley",
      "Art Muth"
     ],
     "a": [
      "Laura Sweet",
      "Laurence Emerson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Aimee Castellano",
      "Eric Luque"
     ],
     "a": [
      "Kelly Dalsey",
      "Bennett Shanker"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Sue Johnson",
      "Steven Gregov"
     ],
     "a": [
      "Vita Mulholland",
      "Rick Derose"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Carol Mastroianni",
      "Scott Rubin"
     ],
     "a": [
      "Cynthia Covie",
      "Yang Wang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kristen Soucie",
      "Denise Richmond"
     ],
     "a": [
      "Vita Mulholland",
      "Jiyun Yuh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Carol Mastroianni",
      "Aimee Castellano"
     ],
     "a": [
      "Kelly Dalsey",
      "Laura Sweet"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Scott Rubin",
      "Steven Gregov"
     ],
     "a": [
      "Laurence Emerson",
      "Yang Wang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Bob Castellano",
      "Eric Luque"
     ],
     "a": [
      "Bennett Shanker",
      "Howie Steiner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Denise Richmond",
      "Bob Castellano"
     ],
     "a": [
      "Cynthia Covie",
      "Rick Derose"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kristen Soucie",
      "Scott Rubin"
     ],
     "a": [
      "Jiyun Yuh",
      "Laurence Emerson"
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
      "Laura Sweet",
      "Yang Wang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Susan Ackley",
      "Eric Luque"
     ],
     "a": [
      "Kelly Dalsey",
      "Howie Steiner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Susan Ackley",
      "Aimee Castellano"
     ],
     "a": [
      "Kelly Dalsey",
      "Vita Mulholland"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kristen Soucie",
      "Carol Mastroianni"
     ],
     "a": [
      "Cynthia Covie",
      "Jiyun Yuh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Eric Luque",
      "Art Muth"
     ],
     "a": [
      "Howie Steiner",
      "Yang Wang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Bob Castellano",
      "Steven Gregov"
     ],
     "a": [
      "Bennett Shanker",
      "Rick Derose"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Susan Ackley",
      "Eric Luque"
     ],
     "a": [
      "Cynthia Covie",
      "Howie Steiner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Aimee Castellano",
      "Bob Castellano"
     ],
     "a": [
      "Vita Mulholland",
      "Bennett Shanker"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Sue Johnson",
      "Art Muth"
     ],
     "a": [
      "Laura Sweet",
      "Laurence Emerson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Denise Richmond",
      "Scott Rubin"
     ],
     "a": [
      "Jiyun Yuh",
      "Rick Derose"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Denise Richmond",
      "Sue Johnson"
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
     "as": 17,
     "h": [
      "Kristen Soucie",
      "Carol Mastroianni"
     ],
     "a": [
      "Cynthia Covie",
      "Vita Mulholland"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Bob Castellano",
      "Art Muth"
     ],
     "a": [
      "Bennett Shanker",
      "Laurence Emerson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Eric Luque",
      "Steven Gregov"
     ],
     "a": [
      "Howie Steiner",
      "Yang Wang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kristen Soucie",
      "Steven Gregov"
     ],
     "a": [
      "Jiyun Yuh",
      "Yang Wang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Susan Ackley",
      "Art Muth"
     ],
     "a": [
      "Laura Sweet",
      "Howie Steiner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Aimee Castellano",
      "Eric Luque"
     ],
     "a": [
      "Kelly Dalsey",
      "Rick Derose"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Carol Mastroianni",
      "Scott Rubin"
     ],
     "a": [
      "Cynthia Covie",
      "Bennett Shanker"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Carol Mastroianni",
      "Denise Richmond"
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
     "as": 9,
     "h": [
      "Aimee Castellano",
      "Susan Ackley"
     ],
     "a": [
      "Vita Mulholland",
      "Kelly Dalsey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Eric Luque",
      "Art Muth"
     ],
     "a": [
      "Bennett Shanker",
      "Howie Steiner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Steven Gregov",
      "Scott Rubin"
     ],
     "a": [
      "Rick Derose",
      "Laurence Emerson"
     ]
    }
   ],
   "subs": [
    "Kelly Dalsey"
   ]
  },
  {
   "result": "home",
   "week": 7,
   "home": "Pickleball Kingdom Hamilton",
   "away": "Flemington",
   "time": "2026-04-12T12:00:00",
   "complete": true,
   "homePoints": 654,
   "awayPoints": 583,
   "homeGW": 20,
   "awayGW": 12,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lily Liu",
      "Tom Maley"
     ],
     "a": [
      "Aimee Castellano",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Stacy Garretson",
      "Yaowen Li"
     ],
     "a": [
      "Carol Mastroianni",
      "Marc Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Fabienne Yu",
      "Albert Pamudji"
     ],
     "a": [
      "Tara Kramer",
      "Bob Castellano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Yang Ruan",
      "Zhe Ding"
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
     "as": 12,
     "h": [
      "Lily Liu",
      "Fabienne Yu"
     ],
     "a": [
      "Aimee Castellano",
      "Tara Kramer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Stacy Garretson",
      "Jennifer Wang"
     ],
     "a": [
      "Amy Johnson",
      "Carol Mastroianni"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Frank Ding",
      "Yaowen Li"
     ],
     "a": [
      "Marc Friedman",
      "Bob Castellano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Zhe Ding",
      "Leon Li"
     ],
     "a": [
      "Eric Luque",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Yang Ruan",
      "Leon Li"
     ],
     "a": [
      "Amy Johnson",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lily Liu",
      "Tom Maley"
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
      "Fabienne Yu",
      "Albert Pamudji"
     ],
     "a": [
      "Tara Kramer",
      "Steven Gregov"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jennifer Wang",
      "Frank Ding"
     ],
     "a": [
      "Christine Papa",
      "Eric Luque"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Stacy Garretson",
      "Lily Liu"
     ],
     "a": [
      "Christine Papa",
      "Tara Kramer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Yang Ruan",
      "Jennifer Wang"
     ],
     "a": [
      "Aimee Castellano",
      "Carol Mastroianni"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Albert Pamudji",
      "Zhe Ding"
     ],
     "a": [
      "David Osborne",
      "Marc Friedman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Yaowen Li",
      "Tom Maley"
     ],
     "a": [
      "Bob Castellano",
      "Steven Gregov"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Yang Ruan",
      "Zhe Ding"
     ],
     "a": [
      "Aimee Castellano",
      "Marc Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Fabienne Yu",
      "Frank Ding"
     ],
     "a": [
      "Tara Kramer",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jennifer Wang",
      "Leon Li"
     ],
     "a": [
      "Carol Mastroianni",
      "Bob Castellano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Stacy Garretson",
      "Yaowen Li"
     ],
     "a": [
      "Amy Johnson",
      "Steven Gregov"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Lily Liu",
      "Stacy Garretson"
     ],
     "a": [
      "Carol Mastroianni",
      "Christine Papa"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Fabienne Yu",
      "Jennifer Wang"
     ],
     "a": [
      "Amy Johnson",
      "Tara Kramer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Frank Ding",
      "Tom Maley"
     ],
     "a": [
      "Eric Luque",
      "Steven Gregov"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Albert Pamudji",
      "Leon Li"
     ],
     "a": [
      "David Osborne",
      "Bob Castellano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Fabienne Yu",
      "Yaowen Li"
     ],
     "a": [
      "Christine Papa",
      "Steven Gregov"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Stacy Garretson",
      "Tom Maley"
     ],
     "a": [
      "Amy Johnson",
      "Marc Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Yang Ruan",
      "Leon Li"
     ],
     "a": [
      "Aimee Castellano",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lily Liu",
      "Zhe Ding"
     ],
     "a": [
      "Carol Mastroianni",
      "David Osborne"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Fabienne Yu",
      "Lily Liu"
     ],
     "a": [
      "Amy Johnson",
      "Carol Mastroianni"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Stacy Garretson",
      "Jennifer Wang"
     ],
     "a": [
      "Aimee Castellano",
      "Christine Papa"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Yaowen Li",
      "Albert Pamudji"
     ],
     "a": [
      "Eric Luque",
      "Steven Gregov"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 32,
     "as": 30,
     "h": [
      "Frank Ding",
      "Tom Maley"
     ],
     "a": [
      "David Osborne",
      "Marc Friedman"
     ]
    }
   ],
   "subs": [
    "Tom Maley",
    "Jennifer Wang"
   ]
  },
  {
   "result": "home",
   "week": 7,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Jersey Pickleball Club",
   "time": "2026-04-12T13:00:00",
   "complete": true,
   "homePoints": 615,
   "awayPoints": 608,
   "homeGW": 19,
   "awayGW": 13,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kamala Gangavalli",
      "Abraham Telechanski"
     ],
     "a": [
      "Liz Cuozzo",
      "Joe Palumbo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kerry Shannon",
      "Marc Padre"
     ],
     "a": [
      "Meryl Nadler",
      "Scott Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Sara Wiggert",
      "Richard Abate"
     ],
     "a": [
      "Pam Friedman",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Nicole Nelson",
      "Richard Demeuse"
     ],
     "a": [
      "Amy Chrebet",
      "Darren Saks"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kerry Shannon",
      "Kamala Gangavalli"
     ],
     "a": [
      "Pam Friedman",
      "Meryl Nadler"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sara Wiggert",
      "Dint Moore"
     ],
     "a": [
      "Liz Cuozzo",
      "Amy Chrebet"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Abraham Telechanski",
      "Richard Abate"
     ],
     "a": [
      "Michael Dombrowiecki",
      "Joe Palumbo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Marc Padre",
      "Richard Demeuse"
     ],
     "a": [
      "Andrew Hyman",
      "Darren Saks"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kerry Shannon",
      "Abraham Telechanski"
     ],
     "a": [
      "Meryl Nadler",
      "Joe Palumbo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Sara Wiggert",
      "Marc Padre"
     ],
     "a": [
      "Liz Cuozzo",
      "Andrew Hyman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Dint Moore",
      "Richard Abate"
     ],
     "a": [
      "Pam Friedman",
      "Darren Saks"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kamala Gangavalli",
      "Richard Demeuse"
     ],
     "a": [
      "Amy Chrebet",
      "Scott Friedman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Dint Moore",
      "Nicole Nelson"
     ],
     "a": [
      "Liz Cuozzo",
      "Meryl Nadler"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kerry Shannon",
      "Sara Wiggert"
     ],
     "a": [
      "Amy Chrebet",
      "Pam Friedman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Abraham Telechanski",
      "Marc Padre"
     ],
     "a": [
      "Michael Dombrowiecki",
      "Andrew Hyman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Richard Demeuse",
      "Richard Abate"
     ],
     "a": [
      "Darren Saks",
      "Scott Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Sara Wiggert",
      "Abraham Telechanski"
     ],
     "a": [
      "Liz Cuozzo",
      "Joe Palumbo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kerry Shannon",
      "Marc Padre"
     ],
     "a": [
      "Pam Friedman",
      "Andrew Hyman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Nicole Nelson",
      "Richard Abate"
     ],
     "a": [
      "Amy Chrebet",
      "Scott Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kamala Gangavalli",
      "Richard Demeuse"
     ],
     "a": [
      "Meryl Nadler",
      "Darren Saks"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Dint Moore",
      "Kamala Gangavalli"
     ],
     "a": [
      "Amy Chrebet",
      "Liz Cuozzo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Nicole Nelson",
      "Sara Wiggert"
     ],
     "a": [
      "Pam Friedman",
      "Meryl Nadler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Abraham Telechanski",
      "Richard Abate"
     ],
     "a": [
      "Darren Saks",
      "Joe Palumbo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Marc Padre",
      "Richard Demeuse"
     ],
     "a": [
      "Andrew Hyman",
      "Scott Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Kamala Gangavalli",
      "Abraham Telechanski"
     ],
     "a": [
      "Amy Chrebet",
      "Joe Palumbo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Nicole Nelson",
      "Marc Padre"
     ],
     "a": [
      "Meryl Nadler",
      "Darren Saks"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Dint Moore",
      "Richard Abate"
     ],
     "a": [
      "Pam Friedman",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Kerry Shannon",
      "Richard Demeuse"
     ],
     "a": [
      "Liz Cuozzo",
      "Scott Friedman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sara Wiggert",
      "Kerry Shannon"
     ],
     "a": [
      "Amy Chrebet",
      "Meryl Nadler"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Dint Moore",
      "Nicole Nelson"
     ],
     "a": [
      "Pam Friedman",
      "Liz Cuozzo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Abraham Telechanski",
      "Richard Demeuse"
     ],
     "a": [
      "Joe Palumbo",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Marc Padre",
      "Richard Abate"
     ],
     "a": [
      "Darren Saks",
      "Andrew Hyman"
     ]
    }
   ],
   "subs": [
    "Nicole Nelson"
   ]
  },
  {
   "result": "home",
   "week": 7,
   "home": "Pickleball Palace",
   "away": "Montville",
   "time": "2026-04-12T14:00:00",
   "complete": true,
   "homePoints": 658,
   "awayPoints": 526,
   "homeGW": 27,
   "awayGW": 5,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Debbie Tovitz",
      "Jeffrey Susskind"
     ],
     "a": [
      "Cindy Wang",
      "Ryan Sherry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Rebecca Lederman",
      "Brian Gonzalez"
     ],
     "a": [
      "Amanda Brouillard",
      "Louis Vessichelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Laura Elleman",
      "Bud Heller"
     ],
     "a": [
      "Savita Nandal",
      "Neal Kirschner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kelly Hanson Word",
      "Toby Mcmahan"
     ],
     "a": [
      "Kristen Silvestri",
      "Brandon Fulford"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Rebecca Lederman",
      "Debbie Tovitz"
     ],
     "a": [
      "Kristen Silvestri",
      "Amanda Brouillard"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Laura Elleman",
      "Jill Lesnik"
     ],
     "a": [
      "Liang Chao",
      "Savita Nandal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Brian Gonzalez",
      "Jeffrey Susskind"
     ],
     "a": [
      "Ryan Sherry",
      "Neal Kirschner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Alex Lee",
      "Toby Mcmahan"
     ],
     "a": [
      "Brandon Fulford",
      "Peter Chen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Jill Lesnik",
      "Alex Lee"
     ],
     "a": [
      "Kristen Silvestri",
      "Ryan Sherry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kelly Hanson Word",
      "Brian Gonzalez"
     ],
     "a": [
      "Amanda Brouillard",
      "Louis Vessichelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Debbie Tovitz",
      "Bud Heller"
     ],
     "a": [
      "Liang Chao",
      "Gregg Valeri"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Laura Elleman",
      "Toby Mcmahan"
     ],
     "a": [
      "Savita Nandal",
      "Neal Kirschner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Laura Elleman",
      "Debbie Tovitz"
     ],
     "a": [
      "Cindy Wang",
      "Liang Chao"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kelly Hanson Word",
      "Rebecca Lederman"
     ],
     "a": [
      "Kristen Silvestri",
      "Savita Nandal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Alex Lee",
      "Brian Gonzalez"
     ],
     "a": [
      "Ryan Sherry",
      "Neal Kirschner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Toby Mcmahan",
      "Jeffrey Susskind"
     ],
     "a": [
      "Louis Vessichelli",
      "Gregg Valeri"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Kelly Hanson Word",
      "Jeffrey Susskind"
     ],
     "a": [
      "Amanda Brouillard",
      "Neal Kirschner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Rebecca Lederman",
      "Bud Heller"
     ],
     "a": [
      "Kristen Silvestri",
      "Brandon Fulford"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Debbie Tovitz",
      "Alex Lee"
     ],
     "a": [
      "Savita Nandal",
      "Gregg Valeri"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jill Lesnik",
      "Toby Mcmahan"
     ],
     "a": [
      "Cindy Wang",
      "Peter Chen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Kelly Hanson Word",
      "Rebecca Lederman"
     ],
     "a": [
      "Kristen Silvestri",
      "Amanda Brouillard"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Laura Elleman",
      "Jill Lesnik"
     ],
     "a": [
      "Liang Chao",
      "Cindy Wang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Alex Lee",
      "Jeffrey Susskind"
     ],
     "a": [
      "Ryan Sherry",
      "Louis Vessichelli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Brian Gonzalez",
      "Bud Heller"
     ],
     "a": [
      "Peter Chen",
      "Gregg Valeri"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Rebecca Lederman",
      "Jeffrey Susskind"
     ],
     "a": [
      "Liang Chao",
      "Ryan Sherry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kelly Hanson Word",
      "Brian Gonzalez"
     ],
     "a": [
      "Amanda Brouillard",
      "Neal Kirschner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jill Lesnik",
      "Alex Lee"
     ],
     "a": [
      "Savita Nandal",
      "Louis Vessichelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Laura Elleman",
      "Bud Heller"
     ],
     "a": [
      "Kristen Silvestri",
      "Peter Chen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Rebecca Lederman",
      "Jill Lesnik"
     ],
     "a": [
      "Amanda Brouillard",
      "Liang Chao"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Kelly Hanson Word",
      "Laura Elleman"
     ],
     "a": [
      "Kristen Silvestri",
      "Savita Nandal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jeffrey Susskind",
      "Alex Lee"
     ],
     "a": [
      "Ryan Sherry",
      "Louis Vessichelli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Brian Gonzalez",
      "Bud Heller"
     ],
     "a": [
      "Gregg Valeri",
      "Brandon Fulford"
     ]
    }
   ],
   "subs": [
    "Gregg Valeri",
    "Ryan Sherry",
    "Neal Kirschner"
   ]
  },
  {
   "result": "home",
   "week": 7,
   "home": "APC Garden State",
   "away": "Monroe",
   "time": "2026-04-12T14:00:00",
   "complete": true,
   "homePoints": 645,
   "awayPoints": 597,
   "homeGW": 21,
   "awayGW": 11,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Vita Mulholland",
      "Bennett Shanker"
     ],
     "a": [
      "Tracey Collins",
      "Guy Ohn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Laura Sweet",
      "Yang Wang"
     ],
     "a": [
      "Hayley Yandoli",
      "Tim Ahn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jiyun Yuh",
      "Darin Morgan"
     ],
     "a": [
      "Sarah Flynn",
      "Eliezer Mintz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Lori Flickinger",
      "Lance Stopek"
     ],
     "a": [
      "Andrea Mui",
      "Naresh Malhotra"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Laura Sweet",
      "Jiyun Yuh"
     ],
     "a": [
      "Andrea Mui",
      "Paula Cushing"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Cynthia Covie",
      "Lori Flickinger"
     ],
     "a": [
      "Tracey Collins",
      "Hayley Yandoli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Bennett Shanker",
      "Howie Steiner"
     ],
     "a": [
      "Guy Ohn",
      "Naresh Malhotra"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Darin Morgan",
      "Lance Stopek"
     ],
     "a": [
      "Eliezer Mintz",
      "Santhosh Pillai"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Laura Sweet",
      "Darin Morgan"
     ],
     "a": [
      "Sarah Flynn",
      "Tim Ahn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Vita Mulholland",
      "Bennett Shanker"
     ],
     "a": [
      "Hayley Yandoli",
      "Santhosh Pillai"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Cynthia Covie",
      "Brian Caine"
     ],
     "a": [
      "Tracey Collins",
      "Guy Ohn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jiyun Yuh",
      "Yang Wang"
     ],
     "a": [
      "Paula Cushing",
      "Naresh Malhotra"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Lori Flickinger",
      "Jiyun Yuh"
     ],
     "a": [
      "Paula Cushing",
      "Hayley Yandoli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Cynthia Covie",
      "Vita Mulholland"
     ],
     "a": [
      "Andrea Mui",
      "Sarah Flynn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lance Stopek",
      "Howie Steiner"
     ],
     "a": [
      "Naresh Malhotra",
      "Tim Ahn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Darin Morgan",
      "Brian Caine"
     ],
     "a": [
      "Eliezer Mintz",
      "Santhosh Pillai"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lori Flickinger",
      "Darin Morgan"
     ],
     "a": [
      "Andrea Mui",
      "Santhosh Pillai"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Cynthia Covie",
      "Bennett Shanker"
     ],
     "a": [
      "Tracey Collins",
      "Eliezer Mintz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Vita Mulholland",
      "Brian Caine"
     ],
     "a": [
      "Paula Cushing",
      "Tim Ahn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Laura Sweet",
      "Yang Wang"
     ],
     "a": [
      "Sarah Flynn",
      "Guy Ohn"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Cynthia Covie",
      "Lori Flickinger"
     ],
     "a": [
      "Paula Cushing",
      "Tracey Collins"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Laura Sweet",
      "Jiyun Yuh"
     ],
     "a": [
      "Hayley Yandoli",
      "Sarah Flynn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Yang Wang",
      "Brian Caine"
     ],
     "a": [
      "Tim Ahn",
      "Eliezer Mintz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Howie Steiner",
      "Lance Stopek"
     ],
     "a": [
      "Guy Ohn",
      "Naresh Malhotra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lori Flickinger",
      "Bennett Shanker"
     ],
     "a": [
      "Hayley Yandoli",
      "Guy Ohn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Laura Sweet",
      "Lance Stopek"
     ],
     "a": [
      "Tracey Collins",
      "Naresh Malhotra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Vita Mulholland",
      "Yang Wang"
     ],
     "a": [
      "Andrea Mui",
      "Eliezer Mintz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jiyun Yuh",
      "Darin Morgan"
     ],
     "a": [
      "Paula Cushing",
      "Santhosh Pillai"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Cynthia Covie",
      "Laura Sweet"
     ],
     "a": [
      "Hayley Yandoli",
      "Tracey Collins"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Vita Mulholland",
      "Jiyun Yuh"
     ],
     "a": [
      "Andrea Mui",
      "Sarah Flynn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Howie Steiner",
      "Yang Wang"
     ],
     "a": [
      "Guy Ohn",
      "Santhosh Pillai"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 31,
     "as": 29,
     "h": [
      "Bennett Shanker",
      "Brian Caine"
     ],
     "a": [
      "Naresh Malhotra",
      "Tim Ahn"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 7,
   "home": "Stelton Sports",
   "away": "Home Court",
   "time": "2026-04-12T14:00:00",
   "complete": true,
   "homePoints": 637,
   "awayPoints": 543,
   "homeGW": 19,
   "awayGW": 13,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Lucy Li",
      "Zemin Zeng"
     ],
     "a": [
      "Karan Pescatore",
      "Emil Pescatore"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Suzanne \"Zan\" Davies",
      "Dave Pellicane"
     ],
     "a": [
      "Margaret Weidlich",
      "Michael Barninger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Mei Li",
      "Lei Dong"
     ],
     "a": [
      "Sharon Streit",
      "Franklin Lupianez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ann Betterton",
      "Liangang Liu"
     ],
     "a": [
      "Andrea Smith",
      "Mark Lim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Mei Li",
      "Suzanne \"Zan\" Davies"
     ],
     "a": [
      "Karan Pescatore",
      "Margaret Weidlich"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Rui Zhang",
      "Ann Betterton"
     ],
     "a": [
      "Sharon Streit",
      "Andrea Smith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Liangang Liu",
      "Jim Peng"
     ],
     "a": [
      "Franklin Lupianez",
      "Sandeep Malhotra"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lei Dong",
      "Zemin Zeng"
     ],
     "a": [
      "Emil Pescatore",
      "Michael Barninger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Mei Li",
      "Lei Dong"
     ],
     "a": [
      "Laura Spilatro",
      "Sandeep Malhotra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lucy Li",
      "Liangang Liu"
     ],
     "a": [
      "Margaret Weidlich",
      "Emil Pescatore"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ann Betterton",
      "Zemin Zeng"
     ],
     "a": [
      "Karan Pescatore",
      "Mark Lim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Rui Zhang",
      "Mengchu Zhou"
     ],
     "a": [
      "Sharon Streit",
      "Michael Barninger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Lucy Li",
      "Ann Betterton"
     ],
     "a": [
      "Sharon Streit",
      "Karan Pescatore"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Rui Zhang",
      "Suzanne \"Zan\" Davies"
     ],
     "a": [
      "Andrea Smith",
      "Laura Spilatro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Liangang Liu",
      "Jim Peng"
     ],
     "a": [
      "Michael Barninger",
      "Franklin Lupianez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Mengchu Zhou",
      "Dave Pellicane"
     ],
     "a": [
      "Emil Pescatore",
      "Sandeep Malhotra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Ann Betterton",
      "Liangang Liu"
     ],
     "a": [
      "Karan Pescatore",
      "Emil Pescatore"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Lucy Li",
      "Mengchu Zhou"
     ],
     "a": [
      "Margaret Weidlich",
      "Michael Barninger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Mei Li",
      "Zemin Zeng"
     ],
     "a": [
      "Laura Spilatro",
      "Mark Lim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Rui Zhang",
      "Lei Dong"
     ],
     "a": [
      "Andrea Smith",
      "Sandeep Malhotra"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Suzanne \"Zan\" Davies",
      "Mei Li"
     ],
     "a": [
      "Karan Pescatore",
      "Laura Spilatro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Lucy Li",
      "Ann Betterton"
     ],
     "a": [
      "Margaret Weidlich",
      "Sharon Streit"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lei Dong",
      "Dave Pellicane"
     ],
     "a": [
      "Emil Pescatore",
      "Sandeep Malhotra"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jim Peng",
      "Mengchu Zhou"
     ],
     "a": [
      "Franklin Lupianez",
      "Michael Barninger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Suzanne \"Zan\" Davies",
      "Jim Peng"
     ],
     "a": [
      "Karan Pescatore",
      "Michael Barninger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Lucy Li",
      "Liangang Liu"
     ],
     "a": [
      "Margaret Weidlich",
      "Emil Pescatore"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Mei Li",
      "Zemin Zeng"
     ],
     "a": [
      "Sharon Streit",
      "Franklin Lupianez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Rui Zhang",
      "Lei Dong"
     ],
     "a": [
      "Andrea Smith",
      "Mark Lim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Rui Zhang",
      "Ann Betterton"
     ],
     "a": [
      "Sharon Streit",
      "Laura Spilatro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Mei Li",
      "Lucy Li"
     ],
     "a": [
      "Karan Pescatore",
      "Margaret Weidlich"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Zemin Zeng",
      "Dave Pellicane"
     ],
     "a": [
      "Emil Pescatore",
      "Michael Barninger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jim Peng",
      "Mengchu Zhou"
     ],
     "a": [
      "Sandeep Malhotra",
      "Franklin Lupianez"
     ]
    }
   ],
   "subs": [
    "Lucy Li",
    "Zemin Zeng"
   ]
  },
  {
   "result": "home",
   "week": 8,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Stelton Sports",
   "time": "2026-04-19T13:00:00",
   "complete": true,
   "homePoints": 621,
   "awayPoints": 610,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sara Wiggert",
      "Abraham Telechanski"
     ],
     "a": [
      "Suzanne \"Zan\" Davies",
      "Mengchu Zhou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kamala Gangavalli",
      "Derek Callihan"
     ],
     "a": [
      "Susan St. Pierre",
      "Lei Dong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Ivona Reszka",
      "Richard Demeuse"
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
     "as": 23,
     "h": [
      "Claudia Van Loo",
      "Marc Padre"
     ],
     "a": [
      "Jennifer Qian",
      "Liangang Liu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Kamala Gangavalli",
      "Stacy Fairley"
     ],
     "a": [
      "Jennifer Qian",
      "Susan St. Pierre"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ivona Reszka",
      "Sara Wiggert"
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
     "as": 18,
     "h": [
      "Abraham Telechanski",
      "Derek Callihan"
     ],
     "a": [
      "Jim Peng",
      "Dave Pellicane"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Richard Demeuse",
      "Marc Padre"
     ],
     "a": [
      "Liangang Liu",
      "Lei Dong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Claudia Van Loo",
      "Abraham Telechanski"
     ],
     "a": [
      "Suzanne \"Zan\" Davies",
      "Jim Peng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Sara Wiggert",
      "Derek Callihan"
     ],
     "a": [
      "Ann Betterton",
      "Liangang Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Stacy Fairley",
      "Richard Demeuse"
     ],
     "a": [
      "Mei Li",
      "Sam Zhou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ivona Reszka",
      "Marc Padre"
     ],
     "a": [
      "Rui Zhang",
      "Lei Dong"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Claudia Van Loo",
      "Stacy Fairley"
     ],
     "a": [
      "Jennifer Qian",
      "Mei Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Sara Wiggert",
      "Kamala Gangavalli"
     ],
     "a": [
      "Susan St. Pierre",
      "Rui Zhang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Abraham Telechanski",
      "Derek Callihan"
     ],
     "a": [
      "Mengchu Zhou",
      "Dave Pellicane"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Richard Demeuse",
      "Marc Padre"
     ],
     "a": [
      "Jim Peng",
      "Sam Zhou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Sara Wiggert",
      "Abraham Telechanski"
     ],
     "a": [
      "Suzanne \"Zan\" Davies",
      "Sam Zhou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Stacy Fairley",
      "Derek Callihan"
     ],
     "a": [
      "Mei Li",
      "Liangang Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kamala Gangavalli",
      "Richard Demeuse"
     ],
     "a": [
      "Susan St. Pierre",
      "Lei Dong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Claudia Van Loo",
      "Marc Padre"
     ],
     "a": [
      "Ann Betterton",
      "Mengchu Zhou"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kamala Gangavalli",
      "Sara Wiggert"
     ],
     "a": [
      "Jennifer Qian",
      "Susan St. Pierre"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Claudia Van Loo",
      "Stacy Fairley"
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
      "Abraham Telechanski",
      "Richard Demeuse"
     ],
     "a": [
      "Lei Dong",
      "Dave Pellicane"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Derek Callihan",
      "Marc Padre"
     ],
     "a": [
      "Jim Peng",
      "Liangang Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ivona Reszka",
      "Abraham Telechanski"
     ],
     "a": [
      "Suzanne \"Zan\" Davies",
      "Sam Zhou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Claudia Van Loo",
      "Derek Callihan"
     ],
     "a": [
      "Mei Li",
      "Mengchu Zhou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sara Wiggert",
      "Richard Demeuse"
     ],
     "a": [
      "Rui Zhang",
      "Lei Dong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Stacy Fairley",
      "Marc Padre"
     ],
     "a": [
      "Ann Betterton",
      "Liangang Liu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ivona Reszka",
      "Sara Wiggert"
     ],
     "a": [
      "Jennifer Qian",
      "Mei Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Kamala Gangavalli",
      "Claudia Van Loo"
     ],
     "a": [
      "Susan St. Pierre",
      "Rui Zhang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Abraham Telechanski",
      "Richard Demeuse"
     ],
     "a": [
      "Dave Pellicane",
      "Sam Zhou"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Derek Callihan",
      "Marc Padre"
     ],
     "a": [
      "Jim Peng",
      "Mengchu Zhou"
     ]
    }
   ],
   "subs": [
    "Derek Callihan",
    "Susan St. Pierre",
    "Stacy Fairley"
   ]
  },
  {
   "result": "home",
   "week": 8,
   "home": "Jersey Pickleball Club",
   "away": "Pickleball Palace",
   "time": "2026-04-19T14:00:00",
   "complete": true,
   "homePoints": 602,
   "awayPoints": 587,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Alice Napolitano",
      "Joe Palumbo"
     ],
     "a": [
      "Kate Curren",
      "Mike Giampapa"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Natasha De Carvalho",
      "Andrew Hyman"
     ],
     "a": [
      "Kelly Hanson Word",
      "Johnson Chang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Eva Danieli",
      "Brad Oldham"
     ],
     "a": [
      "Jill Lesnik",
      "Rick Vazquez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Amy Chrebet",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Jennifer Burke",
      "Brian Gonzalez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Natasha De Carvalho",
      "Amy Chrebet"
     ],
     "a": [
      "Kate Curren",
      "Kelly Hanson Word"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Alice Napolitano",
      "Eva Danieli"
     ],
     "a": [
      "Jennifer Burke",
      "Jill Lesnik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Joe Palumbo",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Marr Flores",
      "Johnson Chang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Michael Swell",
      "Brad Oldham"
     ],
     "a": [
      "Brian Gonzalez",
      "Mike Giampapa"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Amy Chrebet",
      "Michael Swell"
     ],
     "a": [
      "Kate Curren",
      "Rick Vazquez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Alice Napolitano",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Kelly Hanson Word",
      "Marr Flores"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 29,
     "as": 27,
     "h": [
      "Natasha De Carvalho",
      "Joe Palumbo"
     ],
     "a": [
      "Andrea Dellechiaie",
      "Brian Gonzalez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Eva Danieli",
      "Andrew Hyman"
     ],
     "a": [
      "Jennifer Burke",
      "Mike Giampapa"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Eva Danieli",
      "Amy Chrebet"
     ],
     "a": [
      "Jill Lesnik",
      "Andrea Dellechiaie"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Alice Napolitano",
      "Natasha De Carvalho"
     ],
     "a": [
      "Kate Curren",
      "Jennifer Burke"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Michael Swell",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Mike Giampapa",
      "Rick Vazquez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Andrew Hyman",
      "Brad Oldham"
     ],
     "a": [
      "Johnson Chang",
      "Marr Flores"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Eva Danieli",
      "Andrew Hyman"
     ],
     "a": [
      "Kelly Hanson Word",
      "Mike Giampapa"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Natasha De Carvalho",
      "Brad Oldham"
     ],
     "a": [
      "Jill Lesnik",
      "Rick Vazquez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Amy Chrebet",
      "Joe Palumbo"
     ],
     "a": [
      "Andrea Dellechiaie",
      "Johnson Chang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Alice Napolitano",
      "Michael Swell"
     ],
     "a": [
      "Jennifer Burke",
      "Brian Gonzalez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Amy Chrebet",
      "Natasha De Carvalho"
     ],
     "a": [
      "Kate Curren",
      "Kelly Hanson Word"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Alice Napolitano",
      "Eva Danieli"
     ],
     "a": [
      "Andrea Dellechiaie",
      "Jennifer Burke"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Michael Swell",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Marr Flores",
      "Rick Vazquez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Joe Palumbo",
      "Brad Oldham"
     ],
     "a": [
      "Brian Gonzalez",
      "Johnson Chang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Natasha De Carvalho",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Kate Curren",
      "Marr Flores"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Eva Danieli",
      "Brad Oldham"
     ],
     "a": [
      "Andrea Dellechiaie",
      "Rick Vazquez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Amy Chrebet",
      "Andrew Hyman"
     ],
     "a": [
      "Kelly Hanson Word",
      "Johnson Chang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Alice Napolitano",
      "Joe Palumbo"
     ],
     "a": [
      "Jill Lesnik",
      "Brian Gonzalez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Alice Napolitano",
      "Amy Chrebet"
     ],
     "a": [
      "Kate Curren",
      "Andrea Dellechiaie"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Eva Danieli",
      "Natasha De Carvalho"
     ],
     "a": [
      "Kelly Hanson Word",
      "Jill Lesnik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Joe Palumbo",
      "Brad Oldham"
     ],
     "a": [
      "Rick Vazquez",
      "Marr Flores"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Michael Swell",
      "Andrew Hyman"
     ],
     "a": [
      "Johnson Chang",
      "Brian Gonzalez"
     ]
    }
   ],
   "subs": [
    "Marr Flores"
   ]
  },
  {
   "result": "away",
   "week": 8,
   "home": "Montville",
   "away": "Home Court",
   "time": "2026-04-19T14:00:00",
   "complete": true,
   "homePoints": 474,
   "awayPoints": 659,
   "homeGW": 4,
   "awayGW": 28,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Evelyn Du",
      "Andre Yang"
     ],
     "a": [
      "Liby Saigal",
      "Daniel Chernin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ronnie Yin",
      "Brandon Fulford"
     ],
     "a": [
      "Karan Pescatore",
      "Emil Pescatore"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Liang Chao",
      "Michael Goldstein"
     ],
     "a": [
      "Kajal Sinkar",
      "Sandeep Malhotra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Savita Nandal",
      "Jeffrey Heil"
     ],
     "a": [
      "Sarah Mcparland",
      "Robert Huntley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Ronnie Yin",
      "Evelyn Du"
     ],
     "a": [
      "Liby Saigal",
      "Karan Pescatore"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Cuc Dang",
      "Savita Nandal"
     ],
     "a": [
      "Sarah Mcparland",
      "Margaret Weidlich"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Andre Yang",
      "Michael Goldstein"
     ],
     "a": [
      "Daniel Chernin",
      "Emil Pescatore"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Brandon Fulford",
      "Peter Chen"
     ],
     "a": [
      "Robert Huntley",
      "Sandeep Malhotra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Evelyn Du",
      "Andre Yang"
     ],
     "a": [
      "Liby Saigal",
      "Emil Pescatore"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Liang Chao",
      "Jeffrey Heil"
     ],
     "a": [
      "Karan Pescatore",
      "Daniel Chernin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Cuc Dang",
      "Peter Chen"
     ],
     "a": [
      "Margaret Weidlich",
      "Sandeep Malhotra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ronnie Yin",
      "Brandon Fulford"
     ],
     "a": [
      "Sarah Mcparland",
      "George Mandl"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ronnie Yin",
      "Evelyn Du"
     ],
     "a": [
      "Liby Saigal",
      "Kajal Sinkar"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Cuc Dang",
      "Savita Nandal"
     ],
     "a": [
      "Karan Pescatore",
      "Sarah Mcparland"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jeffrey Heil",
      "Andre Yang"
     ],
     "a": [
      "Daniel Chernin",
      "Robert Huntley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Brandon Fulford",
      "Peter Chen"
     ],
     "a": [
      "Emil Pescatore",
      "George Mandl"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Liang Chao",
      "Andre Yang"
     ],
     "a": [
      "Liby Saigal",
      "Emil Pescatore"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Savita Nandal",
      "Peter Chen"
     ],
     "a": [
      "Karan Pescatore",
      "Daniel Chernin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Evelyn Du",
      "Michael Goldstein"
     ],
     "a": [
      "Kajal Sinkar",
      "George Mandl"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Cuc Dang",
      "Jeffrey Heil"
     ],
     "a": [
      "Sarah Mcparland",
      "Robert Huntley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Cuc Dang",
      "Evelyn Du"
     ],
     "a": [
      "Liby Saigal",
      "Sarah Mcparland"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ronnie Yin",
      "Liang Chao"
     ],
     "a": [
      "Karan Pescatore",
      "Margaret Weidlich"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jeffrey Heil",
      "Andre Yang"
     ],
     "a": [
      "Daniel Chernin",
      "George Mandl"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Brandon Fulford",
      "Michael Goldstein"
     ],
     "a": [
      "Emil Pescatore",
      "Sandeep Malhotra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Liang Chao",
      "Andre Yang"
     ],
     "a": [
      "Liby Saigal",
      "Daniel Chernin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Ronnie Yin",
      "Jeffrey Heil"
     ],
     "a": [
      "Karan Pescatore",
      "Emil Pescatore"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Cuc Dang",
      "Peter Chen"
     ],
     "a": [
      "Margaret Weidlich",
      "George Mandl"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Savita Nandal",
      "Brandon Fulford"
     ],
     "a": [
      "Kajal Sinkar",
      "Robert Huntley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Liang Chao",
      "Evelyn Du"
     ],
     "a": [
      "Liby Saigal",
      "Karan Pescatore"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Ronnie Yin",
      "Savita Nandal"
     ],
     "a": [
      "Margaret Weidlich",
      "Kajal Sinkar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Andre Yang",
      "Michael Goldstein"
     ],
     "a": [
      "Daniel Chernin",
      "Emil Pescatore"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jeffrey Heil",
      "Brandon Fulford"
     ],
     "a": [
      "Robert Huntley",
      "Sandeep Malhotra"
     ]
    }
   ],
   "subs": [
    "Daniel Chernin",
    "Liby Saigal",
    "Cuc Dang",
    "Michael Goldstein"
   ]
  },
  {
   "result": "home",
   "week": 8,
   "home": "Bounce Malvern",
   "away": "Pickleball Kingdom Hamilton",
   "time": "2026-04-19T14:30:00",
   "complete": true,
   "homePoints": 666,
   "awayPoints": 508,
   "homeGW": 28,
   "awayGW": 4,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Kerry Schaffer",
      "Keith Goldberg"
     ],
     "a": [
      "Carolyn Dardani-Horensky",
      "Jack Brod"
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
      "Yue Fei",
      "Riguo Zheng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Tera Baccile",
      "Derek Le"
     ],
     "a": [
      "Yang Ruan",
      "Zhe Ding"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Katherine Maruyama",
      "Michael Dieterle"
     ],
     "a": [
      "Lucy Li",
      "Leon Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Stephanie Woomer",
      "Tera Baccile"
     ],
     "a": [
      "Stacy Garretson",
      "Lucy Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Vicki Main",
      "Kerry Schaffer"
     ],
     "a": [
      "Yue Fei",
      "Carolyn Dardani-Horensky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Jingwei Wu",
      "Michael Finkelstein"
     ],
     "a": [
      "Albert Pamudji",
      "Jack Brod"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Michael Dieterle",
      "Keith Goldberg"
     ],
     "a": [
      "Zhe Ding",
      "Leon Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Katherine Maruyama",
      "Jingwei Wu"
     ],
     "a": [
      "Yang Ruan",
      "Riguo Zheng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Vicki Main",
      "Michael Finkelstein"
     ],
     "a": [
      "Carolyn Dardani-Horensky",
      "Jack Brod"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Tera Baccile",
      "Keith Goldberg"
     ],
     "a": [
      "Yue Fei",
      "Albert Pamudji"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Stephanie Woomer",
      "Derek Le"
     ],
     "a": [
      "Stacy Garretson",
      "Leon Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Stephanie Woomer",
      "Vicki Main"
     ],
     "a": [
      "Stacy Garretson",
      "Lucy Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kerry Schaffer",
      "Katherine Maruyama"
     ],
     "a": [
      "Yue Fei",
      "Carolyn Dardani-Horensky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Michael Dieterle",
      "Keith Goldberg"
     ],
     "a": [
      "Riguo Zheng",
      "Albert Pamudji"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jingwei Wu",
      "Derek Le"
     ],
     "a": [
      "Leon Li",
      "Zhe Ding"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kerry Schaffer",
      "Michael Finkelstein"
     ],
     "a": [
      "Yang Ruan",
      "Zhe Ding"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Tera Baccile",
      "Derek Le"
     ],
     "a": [
      "Stacy Garretson",
      "Jack Brod"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Katherine Maruyama",
      "Keith Goldberg"
     ],
     "a": [
      "Yue Fei",
      "Riguo Zheng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Vicki Main",
      "Jingwei Wu"
     ],
     "a": [
      "Lucy Li",
      "Leon Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Katherine Maruyama",
      "Kerry Schaffer"
     ],
     "a": [
      "Stacy Garretson",
      "Carolyn Dardani-Horensky"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Tera Baccile",
      "Stephanie Woomer"
     ],
     "a": [
      "Lucy Li",
      "Yang Ruan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Keith Goldberg",
      "Jingwei Wu"
     ],
     "a": [
      "Jack Brod",
      "Leon Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Michael Dieterle",
      "Derek Le"
     ],
     "a": [
      "Albert Pamudji",
      "Riguo Zheng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Stephanie Woomer",
      "Jingwei Wu"
     ],
     "a": [
      "Carolyn Dardani-Horensky",
      "Riguo Zheng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Katherine Maruyama",
      "Michael Dieterle"
     ],
     "a": [
      "Stacy Garretson",
      "Jack Brod"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Vicki Main",
      "Michael Finkelstein"
     ],
     "a": [
      "Yue Fei",
      "Albert Pamudji"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kerry Schaffer",
      "Derek Le"
     ],
     "a": [
      "Lucy Li",
      "Zhe Ding"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Katherine Maruyama",
      "Stephanie Woomer"
     ],
     "a": [
      "Stacy Garretson",
      "Carolyn Dardani-Horensky"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Tera Baccile",
      "Vicki Main"
     ],
     "a": [
      "Lucy Li",
      "Yue Fei"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Keith Goldberg",
      "Jingwei Wu"
     ],
     "a": [
      "Zhe Ding",
      "Albert Pamudji"
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
      "Jack Brod",
      "Leon Li"
     ]
    }
   ],
   "subs": [
    "Jingwei Wu",
    "Riguo Zheng",
    "Yue Fei",
    "Lucy Li",
    "Carolyn Dardani-Horensky"
   ]
  },
  {
   "result": "home",
   "week": 9,
   "home": "Flemington",
   "away": "Monroe",
   "time": "2026-04-26T12:00:00",
   "complete": true,
   "homePoints": 638,
   "awayPoints": 571,
   "homeGW": 23,
   "awayGW": 9,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Susan Ackley",
      "David Osborne"
     ],
     "a": [
      "Tracey Collins",
      "Guy Ohn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Denise Richmond",
      "Scott Rubin"
     ],
     "a": [
      "Sarah Flynn",
      "Yi Gu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Aimee Castellano",
      "Steven Gregov"
     ],
     "a": [
      "Andrea Mui",
      "Tim Ahn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Barbara Hess",
      "Art Muth"
     ],
     "a": [
      "Tara Lombardo",
      "Santhosh Pillai"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Christine Papa",
      "Carol Mastroianni"
     ],
     "a": [
      "Tara Lombardo",
      "Sarah Flynn"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Aimee Castellano",
      "Susan Ackley"
     ],
     "a": [
      "Andrea Mui",
      "Tracey Collins"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Scott Rubin",
      "Steven Gregov"
     ],
     "a": [
      "Guy Ohn",
      "Tim Ahn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Todd Stein",
      "Marc Friedman"
     ],
     "a": [
      "Erik Lombardo",
      "Santhosh Pillai"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Barbara Hess",
      "Steven Gregov"
     ],
     "a": [
      "Tracey Collins",
      "Tim Ahn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Aimee Castellano",
      "David Osborne"
     ],
     "a": [
      "Andrea Mui",
      "Guy Ohn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Carol Mastroianni",
      "Art Muth"
     ],
     "a": [
      "Tara Lombardo",
      "Erik Lombardo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Denise Richmond",
      "Todd Stein"
     ],
     "a": [
      "Sarah Flynn",
      "Santhosh Pillai"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Denise Richmond",
      "Christine Papa"
     ],
     "a": [
      "Tara Lombardo",
      "Sarah Flynn"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Susan Ackley",
      "Barbara Hess"
     ],
     "a": [
      "Andrea Mui",
      "Tracey Collins"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Art Muth",
      "Marc Friedman"
     ],
     "a": [
      "Yi Gu",
      "Erik Lombardo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Todd Stein",
      "Scott Rubin"
     ],
     "a": [
      "Guy Ohn",
      "Tim Ahn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Carol Mastroianni",
      "Marc Friedman"
     ],
     "a": [
      "Sarah Flynn",
      "Yi Gu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Christine Papa",
      "Scott Rubin"
     ],
     "a": [
      "Tara Lombardo",
      "Erik Lombardo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Aimee Castellano",
      "Steven Gregov"
     ],
     "a": [
      "Andrea Mui",
      "Tim Ahn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Susan Ackley",
      "David Osborne"
     ],
     "a": [
      "Tracey Collins",
      "Santhosh Pillai"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Aimee Castellano",
      "Christine Papa"
     ],
     "a": [
      "Andrea Mui",
      "Sarah Flynn"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Barbara Hess",
      "Susan Ackley"
     ],
     "a": [
      "Tracey Collins",
      "Tara Lombardo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "David Osborne",
      "Todd Stein"
     ],
     "a": [
      "Guy Ohn",
      "Yi Gu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Art Muth",
      "Marc Friedman"
     ],
     "a": [
      "Santhosh Pillai",
      "Erik Lombardo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Denise Richmond",
      "David Osborne"
     ],
     "a": [
      "Tracey Collins",
      "Tim Ahn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Barbara Hess",
      "Scott Rubin"
     ],
     "a": [
      "Andrea Mui",
      "Santhosh Pillai"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Carol Mastroianni",
      "Steven Gregov"
     ],
     "a": [
      "Tara Lombardo",
      "Erik Lombardo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Christine Papa",
      "Marc Friedman"
     ],
     "a": [
      "Sarah Flynn",
      "Yi Gu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Aimee Castellano",
      "Carol Mastroianni"
     ],
     "a": [
      "Tracey Collins",
      "Tara Lombardo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Denise Richmond",
      "Susan Ackley"
     ],
     "a": [
      "Andrea Mui",
      "Sarah Flynn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "David Osborne",
      "Todd Stein"
     ],
     "a": [
      "Tim Ahn",
      "Yi Gu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Scott Rubin",
      "Art Muth"
     ],
     "a": [
      "Guy Ohn",
      "Santhosh Pillai"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 9,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Montville",
   "time": "2026-04-26T13:00:00",
   "complete": true,
   "homePoints": 630,
   "awayPoints": 545,
   "homeGW": 23,
   "awayGW": 9,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Raneeta Sawhney-Rigby",
      "Marc Padre"
     ],
     "a": [
      "Wendy Zukerberg",
      "Chris Taormina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kamala Gangavalli",
      "Abraham Telechanski"
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
      "Susan St. Pierre",
      "Richard Demeuse"
     ],
     "a": [
      "Amanda Brouillard",
      "Louis Vessichelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sara Wiggert",
      "Richard Abate"
     ],
     "a": [
      "Liang Chao",
      "Kevin Sheehan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kamala Gangavalli",
      "Raneeta Sawhney-Rigby"
     ],
     "a": [
      "Wendy Zukerberg",
      "Kimberly Schwartz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sara Wiggert",
      "Susan St. Pierre"
     ],
     "a": [
      "Amanda Brouillard",
      "Evelyn Du"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Abraham Telechanski",
      "Marc Padre"
     ],
     "a": [
      "Chris Taormina",
      "Liangjie Zhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Richard Demeuse",
      "Richard Abate"
     ],
     "a": [
      "Louis Vessichelli",
      "Brandon Fulford"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Raneeta Sawhney-Rigby",
      "Marc Padre"
     ],
     "a": [
      "Wendy Zukerberg",
      "Chris Taormina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kamala Gangavalli",
      "Abraham Telechanski"
     ],
     "a": [
      "Evelyn Du",
      "Kevin Sheehan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Sara Wiggert",
      "Richard Demeuse"
     ],
     "a": [
      "Amanda Brouillard",
      "Louis Vessichelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Susan St. Pierre",
      "Richard Abate"
     ],
     "a": [
      "Liang Chao",
      "Brandon Fulford"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Raneeta Sawhney-Rigby",
      "Susan St. Pierre"
     ],
     "a": [
      "Wendy Zukerberg",
      "Amanda Brouillard"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Sara Wiggert",
      "Sushma Rayapudi"
     ],
     "a": [
      "Kimberly Schwartz",
      "Evelyn Du"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Abraham Telechanski",
      "Marc Padre"
     ],
     "a": [
      "Louis Vessichelli",
      "Chris Taormina"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Richard Demeuse",
      "Richard Abate"
     ],
     "a": [
      "Liangjie Zhu",
      "Brandon Fulford"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Raneeta Sawhney-Rigby",
      "Abraham Telechanski"
     ],
     "a": [
      "Amanda Brouillard",
      "Liangjie Zhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Susan St. Pierre",
      "Marc Padre"
     ],
     "a": [
      "Wendy Zukerberg",
      "Louis Vessichelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Sara Wiggert",
      "Richard Abate"
     ],
     "a": [
      "Liang Chao",
      "Kevin Sheehan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Sushma Rayapudi",
      "Richard Demeuse"
     ],
     "a": [
      "Kimberly Schwartz",
      "Brandon Fulford"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Susan St. Pierre",
      "Kamala Gangavalli"
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
     "as": 7,
     "h": [
      "Sara Wiggert",
      "Raneeta Sawhney-Rigby"
     ],
     "a": [
      "Kimberly Schwartz",
      "Liang Chao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Abraham Telechanski",
      "Richard Abate"
     ],
     "a": [
      "Brandon Fulford",
      "Chris Taormina"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Marc Padre",
      "Richard Demeuse"
     ],
     "a": [
      "Kevin Sheehan",
      "Liangjie Zhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Raneeta Sawhney-Rigby",
      "Abraham Telechanski"
     ],
     "a": [
      "Wendy Zukerberg",
      "Liangjie Zhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Susan St. Pierre",
      "Marc Padre"
     ],
     "a": [
      "Amanda Brouillard",
      "Chris Taormina"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sara Wiggert",
      "Richard Demeuse"
     ],
     "a": [
      "Liang Chao",
      "Louis Vessichelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Kamala Gangavalli",
      "Richard Abate"
     ],
     "a": [
      "Kimberly Schwartz",
      "Kevin Sheehan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Sara Wiggert",
      "Kamala Gangavalli"
     ],
     "a": [
      "Wendy Zukerberg",
      "Kimberly Schwartz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Raneeta Sawhney-Rigby",
      "Susan St. Pierre"
     ],
     "a": [
      "Evelyn Du",
      "Amanda Brouillard"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Abraham Telechanski",
      "Richard Demeuse"
     ],
     "a": [
      "Liangjie Zhu",
      "Chris Taormina"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Marc Padre",
      "Richard Abate"
     ],
     "a": [
      "Louis Vessichelli",
      "Kevin Sheehan"
     ]
    }
   ],
   "subs": [
    "Raneeta Sawhney-Rigby",
    "Susan St. Pierre",
    "Sushma Rayapudi",
    "Kimberly Schwartz"
   ]
  },
  {
   "result": "away",
   "week": 9,
   "home": "Home Court",
   "away": "Pickleball Palace",
   "time": "2026-04-26T13:00:00",
   "complete": true,
   "homePoints": 538,
   "awayPoints": 663,
   "homeGW": 7,
   "awayGW": 25,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Kajal Sinkar",
      "Michael Vincent"
     ],
     "a": [
      "Carly Pfeffer",
      "Rick Vazquez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sarah Mcparland",
      "Sandeep Malhotra"
     ],
     "a": [
      "Kelly Hanson Word",
      "Brian Gonzalez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Cheryl Isbirian",
      "Emil Pescatore"
     ],
     "a": [
      "Kate Curren",
      "Alex Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sharon Streit",
      "Robert Huntley"
     ],
     "a": [
      "Andrea Dellechiaie",
      "Johnson Chang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kajal Sinkar",
      "Sharon Streit"
     ],
     "a": [
      "Andrea Dellechiaie",
      "Kate Curren"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sarah Mcparland",
      "Cheryl Isbirian"
     ],
     "a": [
      "Rebecca Lederman",
      "Carly Pfeffer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Sandeep Malhotra",
      "Michael Vincent"
     ],
     "a": [
      "Brian Gonzalez",
      "Johnson Chang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Emil Pescatore",
      "Robert Huntley"
     ],
     "a": [
      "Bud Heller",
      "Rick Vazquez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Sharon Streit",
      "Franklin Lupianez"
     ],
     "a": [
      "Andrea Dellechiaie",
      "Brian Gonzalez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Cheryl Isbirian",
      "Emil Pescatore"
     ],
     "a": [
      "Kate Curren",
      "Rick Vazquez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Sarah Mcparland",
      "Robert Huntley"
     ],
     "a": [
      "Rebecca Lederman",
      "Alex Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kajal Sinkar",
      "Sandeep Malhotra"
     ],
     "a": [
      "Kelly Hanson Word",
      "Johnson Chang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Kajal Sinkar",
      "Sharon Streit"
     ],
     "a": [
      "Andrea Dellechiaie",
      "Carly Pfeffer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Sarah Mcparland",
      "Cheryl Isbirian"
     ],
     "a": [
      "Kelly Hanson Word",
      "Rebecca Lederman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Michael Vincent",
      "Sandeep Malhotra"
     ],
     "a": [
      "Alex Lee",
      "Bud Heller"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Emil Pescatore",
      "Robert Huntley"
     ],
     "a": [
      "Brian Gonzalez",
      "Johnson Chang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Cheryl Isbirian",
      "Franklin Lupianez"
     ],
     "a": [
      "Andrea Dellechiaie",
      "Brian Gonzalez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Sharon Streit",
      "Sandeep Malhotra"
     ],
     "a": [
      "Kate Curren",
      "Rick Vazquez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Kajal Sinkar",
      "Michael Vincent"
     ],
     "a": [
      "Rebecca Lederman",
      "Bud Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sarah Mcparland",
      "Emil Pescatore"
     ],
     "a": [
      "Kelly Hanson Word",
      "Alex Lee"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Cheryl Isbirian",
      "Kajal Sinkar"
     ],
     "a": [
      "Andrea Dellechiaie",
      "Kate Curren"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sharon Streit",
      "Sarah Mcparland"
     ],
     "a": [
      "Kelly Hanson Word",
      "Carly Pfeffer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Michael Vincent",
      "Franklin Lupianez"
     ],
     "a": [
      "Bud Heller",
      "Brian Gonzalez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Sandeep Malhotra",
      "Emil Pescatore"
     ],
     "a": [
      "Johnson Chang",
      "Alex Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Cheryl Isbirian",
      "Michael Vincent"
     ],
     "a": [
      "Kate Curren",
      "Alex Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Sharon Streit",
      "Sandeep Malhotra"
     ],
     "a": [
      "Rebecca Lederman",
      "Johnson Chang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sarah Mcparland",
      "Emil Pescatore"
     ],
     "a": [
      "Carly Pfeffer",
      "Rick Vazquez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kajal Sinkar",
      "Franklin Lupianez"
     ],
     "a": [
      "Kelly Hanson Word",
      "Bud Heller"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Cheryl Isbirian",
      "Sharon Streit"
     ],
     "a": [
      "Rebecca Lederman",
      "Carly Pfeffer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Sarah Mcparland",
      "Kajal Sinkar"
     ],
     "a": [
      "Kate Curren",
      "Kelly Hanson Word"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Emil Pescatore",
      "Sandeep Malhotra"
     ],
     "a": [
      "Bud Heller",
      "Johnson Chang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Michael Vincent",
      "Franklin Lupianez"
     ],
     "a": [
      "Alex Lee",
      "Rick Vazquez"
     ]
    }
   ],
   "subs": [
    "Cheryl Isbirian"
   ]
  },
  {
   "result": "home",
   "week": 9,
   "home": "Jersey Pickleball Club",
   "away": "Stelton Sports",
   "time": "2026-04-26T14:00:00",
   "complete": true,
   "homePoints": 635,
   "awayPoints": 615,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Rosalyn Goldsmith",
      "Scott Friedman"
     ],
     "a": [
      "Jennifer Qian",
      "Liangang Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Amy Chrebet",
      "Gary Sidhu"
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
      "Alice Napolitano",
      "Joe Palumbo"
     ],
     "a": [
      "Ann Betterton",
      "Sam Zhou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Pam Friedman",
      "Andrew Hyman"
     ],
     "a": [
      "Rui Zhang",
      "Peter Shen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Rosalyn Goldsmith",
      "Meryl Nadler"
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
     "hs": 23,
     "as": 25,
     "h": [
      "Joe Palumbo",
      "Andrew Hyman"
     ],
     "a": [
      "Jim Peng",
      "Ben Xie"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Darren Saks",
      "Scott Friedman"
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
     "as": 14,
     "h": [
      "Alice Napolitano",
      "Gary Sidhu"
     ],
     "a": [
      "Ann Betterton",
      "Liangang Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Pam Friedman",
      "Darren Saks"
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
     "as": 19,
     "h": [
      "Rosalyn Goldsmith",
      "Scott Friedman"
     ],
     "a": [
      "Mei Li",
      "Ben Xie"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Meryl Nadler",
      "Joe Palumbo"
     ],
     "a": [
      "Shaoyi Sun",
      "Sam Zhou"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Pam Friedman",
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
     "hs": 21,
     "as": 16,
     "h": [
      "Alice Napolitano",
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
     "as": 18,
     "h": [
      "Gary Sidhu",
      "Scott Friedman"
     ],
     "a": [
      "Sam Zhou",
      "Jim Peng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Joe Palumbo",
      "Andrew Hyman"
     ],
     "a": [
      "Peter Shen",
      "Ben Xie"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Rosalyn Goldsmith",
      "Darren Saks"
     ],
     "a": [
      "Jennifer Qian",
      "Liangang Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Pam Friedman",
      "Andrew Hyman"
     ],
     "a": [
      "Rui Zhang",
      "Lei Dong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Alice Napolitano",
      "Joe Palumbo"
     ],
     "a": [
      "Ann Betterton",
      "Peter Shen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Amy Chrebet",
      "Gary Sidhu"
     ],
     "a": [
      "Mei Li",
      "Sam Zhou"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Rosalyn Goldsmith",
      "Meryl Nadler"
     ],
     "a": [
      "Jennifer Qian",
      "Shaoyi Sun"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Alice Napolitano",
      "Pam Friedman"
     ],
     "a": [
      "Rui Zhang",
      "Mei Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Darren Saks",
      "Gary Sidhu"
     ],
     "a": [
      "Jim Peng",
      "Liangang Liu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Andrew Hyman",
      "Scott Friedman"
     ],
     "a": [
      "Lei Dong",
      "Peter Shen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Alice Napolitano",
      "Gary Sidhu"
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
     "as": 24,
     "h": [
      "Amy Chrebet",
      "Andrew Hyman"
     ],
     "a": [
      "Rui Zhang",
      "Jim Peng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Rosalyn Goldsmith",
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
     "as": 18,
     "h": [
      "Meryl Nadler",
      "Joe Palumbo"
     ],
     "a": [
      "Shaoyi Sun",
      "Lei Dong"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Alice Napolitano",
      "Meryl Nadler"
     ],
     "a": [
      "Jennifer Qian",
      "Mei Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Amy Chrebet",
      "Pam Friedman"
     ],
     "a": [
      "Rui Zhang",
      "Shaoyi Sun"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Andrew Hyman",
      "Darren Saks"
     ],
     "a": [
      "Sam Zhou",
      "Jim Peng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Joe Palumbo",
      "Gary Sidhu"
     ],
     "a": [
      "Peter Shen",
      "Ben Xie"
     ]
    }
   ],
   "subs": [
    "Peter Shen",
    "Ben Xie"
   ]
  },
  {
   "result": "home",
   "week": 9,
   "home": "ACE",
   "away": "Pickleball Kingdom Hamilton",
   "time": "2026-04-26T14:00:00",
   "complete": true,
   "homePoints": 660,
   "awayPoints": 454,
   "homeGW": 29,
   "awayGW": 3,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kelly Karrer",
      "Ed Hutchinson"
     ],
     "a": [
      "Lucy Li",
      "Leon Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Pam Boyd",
      "Brian Rowan"
     ],
     "a": [
      "Jamie Sandman",
      "Jack Brod"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Donna Taylor",
      "Brad Daddis"
     ],
     "a": [
      "Yang Ruan",
      "Zhe Ding"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Kate Siedell",
      "Marc Harden"
     ],
     "a": [
      "Lily Liu",
      "Wally Liu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Donna Taylor",
      "Pam Boyd"
     ],
     "a": [
      "Nancy Lin",
      "Ping Yang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kate Siedell",
      "Kelly Karrer"
     ],
     "a": [
      "Lucy Li",
      "Lily Liu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Marc Pellicane",
      "Brian Rowan"
     ],
     "a": [
      "Leon Li",
      "Jack Brod"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Marc Harden",
      "Robert Finley"
     ],
     "a": [
      "Albert Pamudji",
      "Zhe Ding"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Pam Boyd",
      "Brad Daddis"
     ],
     "a": [
      "Nancy Lin",
      "Wally Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Donna Taylor",
      "Ed Hutchinson"
     ],
     "a": [
      "Jamie Sandman",
      "Leon Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Kate Siedell",
      "Marc Pellicane"
     ],
     "a": [
      "Lucy Li",
      "Jack Brod"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kelly Karrer",
      "Marc Harden"
     ],
     "a": [
      "Lily Liu",
      "Albert Pamudji"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Pam Boyd",
      "Kelly Karrer"
     ],
     "a": [
      "Ping Yang",
      "Lucy Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Kate Siedell",
      "Donna Taylor"
     ],
     "a": [
      "Jamie Sandman",
      "Yang Ruan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 4,
     "h": [
      "Brian Rowan",
      "Ed Hutchinson"
     ],
     "a": [
      "Albert Pamudji",
      "Wally Liu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Marc Pellicane",
      "Robert Finley"
     ],
     "a": [
      "Leon Li",
      "Zhe Ding"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Pam Boyd",
      "Robert Finley"
     ],
     "a": [
      "Jamie Sandman",
      "Leon Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kate Siedell",
      "Marc Pellicane"
     ],
     "a": [
      "Lucy Li",
      "Jack Brod"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Donna Taylor",
      "Brad Daddis"
     ],
     "a": [
      "Yang Ruan",
      "Zhe Ding"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Kelly Karrer",
      "Marc Harden"
     ],
     "a": [
      "Lily Liu",
      "Wally Liu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kelly Karrer",
      "Donna Taylor"
     ],
     "a": [
      "Nancy Lin",
      "Ping Yang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Kate Siedell",
      "Pam Boyd"
     ],
     "a": [
      "Lily Liu",
      "Yang Ruan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Marc Pellicane",
      "Ed Hutchinson"
     ],
     "a": [
      "Leon Li",
      "Zhe Ding"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Brian Rowan",
      "Robert Finley"
     ],
     "a": [
      "Albert Pamudji",
      "Jack Brod"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Kate Siedell",
      "Marc Harden"
     ],
     "a": [
      "Nancy Lin",
      "Wally Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Donna Taylor",
      "Brian Rowan"
     ],
     "a": [
      "Jamie Sandman",
      "Jack Brod"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kelly Karrer",
      "Ed Hutchinson"
     ],
     "a": [
      "Lucy Li",
      "Leon Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Pam Boyd",
      "Brad Daddis"
     ],
     "a": [
      "Lily Liu",
      "Albert Pamudji"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Pam Boyd",
      "Kelly Karrer"
     ],
     "a": [
      "Ping Yang",
      "Lucy Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kate Siedell",
      "Donna Taylor"
     ],
     "a": [
      "Jamie Sandman",
      "Yang Ruan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Ed Hutchinson",
      "Robert Finley"
     ],
     "a": [
      "Albert Pamudji",
      "Zhe Ding"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Marc Pellicane",
      "Brian Rowan"
     ],
     "a": [
      "Leon Li",
      "Jack Brod"
     ]
    }
   ],
   "subs": [
    "Kelly Karrer",
    "Lucy Li",
    "Ping Yang"
   ]
  },
  {
   "result": "home",
   "week": 9,
   "home": "Bounce Malvern",
   "away": "APC Garden State",
   "time": "2026-04-26T14:30:00",
   "complete": true,
   "homePoints": 650,
   "awayPoints": 454,
   "homeGW": 29,
   "awayGW": 3,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Tera Baccile",
      "Dana Luscombe"
     ],
     "a": [
      "Laura Sweet",
      "Yang Wang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Stephanie Woomer",
      "Michael Finkelstein"
     ],
     "a": [
      "Amy Maussner",
      "Laurence Emerson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Harriet Levin",
      "Jim Darcangelo"
     ],
     "a": [
      "Jiyun Yuh",
      "Darin Morgan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Vicki Main",
      "Michael Dieterle"
     ],
     "a": [
      "Vita Mulholland",
      "Bennett Shanker"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Tera Baccile",
      "Stephanie Woomer"
     ],
     "a": [
      "Vita Mulholland",
      "Amy Maussner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Katherine Maruyama",
      "Vicki Main"
     ],
     "a": [
      "Laura Sweet",
      "Jiyun Yuh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jim Darcangelo",
      "Michael Finkelstein"
     ],
     "a": [
      "Yang Wang",
      "Howie Steiner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Keith Goldberg",
      "Dana Luscombe"
     ],
     "a": [
      "Darin Morgan",
      "Brian Caine"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Harriet Levin",
      "Dana Luscombe"
     ],
     "a": [
      "Vita Mulholland",
      "Bennett Shanker"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Stephanie Woomer",
      "Keith Goldberg"
     ],
     "a": [
      "Jiyun Yuh",
      "Darin Morgan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Katherine Maruyama",
      "Michael Finkelstein"
     ],
     "a": [
      "Laura Sweet",
      "Laurence Emerson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Tera Baccile",
      "Michael Dieterle"
     ],
     "a": [
      "Amy Maussner",
      "Brian Caine"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Vicki Main",
      "Stephanie Woomer"
     ],
     "a": [
      "Amy Maussner",
      "Jiyun Yuh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Katherine Maruyama",
      "Harriet Levin"
     ],
     "a": [
      "Laura Sweet",
      "Vita Mulholland"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Michael Dieterle",
      "Michael Finkelstein"
     ],
     "a": [
      "Brian Caine",
      "Yang Wang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Dana Luscombe",
      "Jim Darcangelo"
     ],
     "a": [
      "Bennett Shanker",
      "Howie Steiner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 4,
     "h": [
      "Katherine Maruyama",
      "Michael Dieterle"
     ],
     "a": [
      "Vita Mulholland",
      "Laurence Emerson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Harriet Levin",
      "Keith Goldberg"
     ],
     "a": [
      "Amy Maussner",
      "Bennett Shanker"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Tera Baccile",
      "Dana Luscombe"
     ],
     "a": [
      "Laura Sweet",
      "Darin Morgan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Vicki Main",
      "Michael Finkelstein"
     ],
     "a": [
      "Jiyun Yuh",
      "Brian Caine"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Katherine Maruyama",
      "Harriet Levin"
     ],
     "a": [
      "Amy Maussner",
      "Vita Mulholland"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Stephanie Woomer",
      "Tera Baccile"
     ],
     "a": [
      "Laura Sweet",
      "Jiyun Yuh"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Keith Goldberg",
      "Jim Darcangelo"
     ],
     "a": [
      "Howie Steiner",
      "Darin Morgan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Michael Dieterle",
      "Dana Luscombe"
     ],
     "a": [
      "Bennett Shanker",
      "Yang Wang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Stephanie Woomer",
      "Michael Finkelstein"
     ],
     "a": [
      "Laura Sweet",
      "Brian Caine"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Katherine Maruyama",
      "Keith Goldberg"
     ],
     "a": [
      "Jiyun Yuh",
      "Yang Wang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Harriet Levin",
      "Jim Darcangelo"
     ],
     "a": [
      "Amy Maussner",
      "Howie Steiner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Vicki Main",
      "Michael Dieterle"
     ],
     "a": [
      "Vita Mulholland",
      "Laurence Emerson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Stephanie Woomer",
      "Harriet Levin"
     ],
     "a": [
      "Laura Sweet",
      "Vita Mulholland"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Tera Baccile",
      "Vicki Main"
     ],
     "a": [
      "Amy Maussner",
      "Jiyun Yuh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Keith Goldberg",
      "Dana Luscombe"
     ],
     "a": [
      "Bennett Shanker",
      "Laurence Emerson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Michael Finkelstein",
      "Jim Darcangelo"
     ],
     "a": [
      "Yang Wang",
      "Howie Steiner"
     ]
    }
   ],
   "subs": [
    "Amy Maussner"
   ]
  },
  {
   "result": "away",
   "week": 10,
   "home": "Flemington",
   "away": "ACE",
   "time": "2026-05-03T12:00:00",
   "complete": true,
   "homePoints": 572,
   "awayPoints": 633,
   "homeGW": 13,
   "awayGW": 19,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Christine Papa",
      "Scott Rubin"
     ],
     "a": [
      "Elyse Diamond",
      "Brad Daddis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Susan Ackley",
      "Eric Luque"
     ],
     "a": [
      "Stacey Frank",
      "Robert Finley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Barbara Hess",
      "Art Muth"
     ],
     "a": [
      "Pam Boyd",
      "Brian Rowan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Aimee Castellano",
      "David Osborne"
     ],
     "a": [
      "Kate Siedell",
      "Marc Pellicane"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Christine Papa",
      "Sue Johnson"
     ],
     "a": [
      "Elyse Diamond",
      "Kate Siedell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Susan Ackley",
      "Aimee Castellano"
     ],
     "a": [
      "Stacey Frank",
      "Pam Boyd"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Eric Luque",
      "David Osborne"
     ],
     "a": [
      "Marc Pellicane",
      "Brian Rowan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Steven Gregov",
      "Todd Stein"
     ],
     "a": [
      "Roger Graterol",
      "Robert Finley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Barbara Hess",
      "Scott Rubin"
     ],
     "a": [
      "Kate Siedell",
      "Brian Rowan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Aimee Castellano",
      "Eric Luque"
     ],
     "a": [
      "Elyse Diamond",
      "Marc Pellicane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Susan Ackley",
      "Todd Stein"
     ],
     "a": [
      "Stacey Frank",
      "Brad Daddis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Sue Johnson",
      "Art Muth"
     ],
     "a": [
      "Pam Boyd",
      "Roger Graterol"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Barbara Hess",
      "Susan Ackley"
     ],
     "a": [
      "Pam Boyd",
      "Kate Siedell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Christine Papa",
      "Sue Johnson"
     ],
     "a": [
      "Stacey Frank",
      "Elyse Diamond"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Scott Rubin",
      "Art Muth"
     ],
     "a": [
      "Robert Finley",
      "Marc Pellicane"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "David Osborne",
      "Steven Gregov"
     ],
     "a": [
      "Roger Graterol",
      "Brian Rowan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 29,
     "as": 31,
     "h": [
      "Aimee Castellano",
      "David Osborne"
     ],
     "a": [
      "Stacey Frank",
      "Roger Graterol"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Christine Papa",
      "Todd Stein"
     ],
     "a": [
      "Elyse Diamond",
      "Brad Daddis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Barbara Hess",
      "Eric Luque"
     ],
     "a": [
      "Kate Siedell",
      "Brian Rowan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Sue Johnson",
      "Art Muth"
     ],
     "a": [
      "Pam Boyd",
      "Robert Finley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Aimee Castellano",
      "Christine Papa"
     ],
     "a": [
      "Kate Siedell",
      "Stacey Frank"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Susan Ackley",
      "Sue Johnson"
     ],
     "a": [
      "Pam Boyd",
      "Elyse Diamond"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Art Muth",
      "Todd Stein"
     ],
     "a": [
      "Brad Daddis",
      "Robert Finley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Eric Luque",
      "Scott Rubin"
     ],
     "a": [
      "Brian Rowan",
      "Marc Pellicane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Susan Ackley",
      "Scott Rubin"
     ],
     "a": [
      "Stacey Frank",
      "Roger Graterol"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Christine Papa",
      "Eric Luque"
     ],
     "a": [
      "Elyse Diamond",
      "Brian Rowan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Aimee Castellano",
      "Art Muth"
     ],
     "a": [
      "Kate Siedell",
      "Marc Pellicane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Barbara Hess",
      "David Osborne"
     ],
     "a": [
      "Pam Boyd",
      "Brad Daddis"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Sue Johnson",
      "Aimee Castellano"
     ],
     "a": [
      "Stacey Frank",
      "Pam Boyd"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Barbara Hess",
      "Susan Ackley"
     ],
     "a": [
      "Kate Siedell",
      "Elyse Diamond"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Todd Stein",
      "David Osborne"
     ],
     "a": [
      "Marc Pellicane",
      "Roger Graterol"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Scott Rubin",
      "Eric Luque"
     ],
     "a": [
      "Brian Rowan",
      "Robert Finley"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 10,
   "home": "Monroe",
   "away": "Bounce Malvern",
   "time": "2026-05-03T13:00:00",
   "complete": true,
   "homePoints": 461,
   "awayPoints": 661,
   "homeGW": 4,
   "awayGW": 28,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Andrea Mui",
      "Tim Ahn"
     ],
     "a": [
      "Tera Baccile",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jen Carara",
      "Eliezer Mintz"
     ],
     "a": [
      "Harriet Levin",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Marianne Contessa",
      "Santhosh Pillai"
     ],
     "a": [
      "Katherine Maruyama",
      "Dana Luscombe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Paula Cushing",
      "Naresh Malhotra"
     ],
     "a": [
      "Kerry Schaffer",
      "Michael Dieterle"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Paula Cushing",
      "Jen Carara"
     ],
     "a": [
      "Kerry Schaffer",
      "Tera Baccile"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Marianne Contessa",
      "Andrea Mui"
     ],
     "a": [
      "Stephanie Woomer",
      "Harriet Levin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Tim Ahn",
      "Naresh Malhotra"
     ],
     "a": [
      "Dana Luscombe",
      "Derek Le"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Santhosh Pillai",
      "Eliezer Mintz"
     ],
     "a": [
      "Michael Finkelstein",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Paula Cushing",
      "Tim Ahn"
     ],
     "a": [
      "Katherine Maruyama",
      "Michael Dieterle"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jen Carara",
      "Santhosh Pillai"
     ],
     "a": [
      "Stephanie Woomer",
      "Dana Luscombe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Andrea Mui",
      "Naresh Malhotra"
     ],
     "a": [
      "Harriet Levin",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Marianne Contessa",
      "Eliezer Mintz"
     ],
     "a": [
      "Tera Baccile",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Andrea Mui",
      "Paula Cushing"
     ],
     "a": [
      "Stephanie Woomer",
      "Tera Baccile"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Marianne Contessa",
      "Jen Carara"
     ],
     "a": [
      "Kerry Schaffer",
      "Katherine Maruyama"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Tim Ahn",
      "Santhosh Pillai"
     ],
     "a": [
      "Michael Dieterle",
      "Derek Le"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Naresh Malhotra",
      "Eliezer Mintz"
     ],
     "a": [
      "Jim Darcangelo",
      "Dana Luscombe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Andrea Mui",
      "Tim Ahn"
     ],
     "a": [
      "Stephanie Woomer",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 4,
     "as": 21,
     "h": [
      "Paula Cushing",
      "Naresh Malhotra"
     ],
     "a": [
      "Katherine Maruyama",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Marianne Contessa",
      "Santhosh Pillai"
     ],
     "a": [
      "Kerry Schaffer",
      "Dana Luscombe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jen Carara",
      "Eliezer Mintz"
     ],
     "a": [
      "Harriet Levin",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Andrea Mui",
      "Marianne Contessa"
     ],
     "a": [
      "Harriet Levin",
      "Tera Baccile"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jen Carara",
      "Paula Cushing"
     ],
     "a": [
      "Katherine Maruyama",
      "Kerry Schaffer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Naresh Malhotra",
      "Santhosh Pillai"
     ],
     "a": [
      "Derek Le",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Eliezer Mintz",
      "Tim Ahn"
     ],
     "a": [
      "Michael Dieterle",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Jen Carara",
      "Naresh Malhotra"
     ],
     "a": [
      "Tera Baccile",
      "Dana Luscombe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Andrea Mui",
      "Tim Ahn"
     ],
     "a": [
      "Stephanie Woomer",
      "Michael Dieterle"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Paula Cushing",
      "Eliezer Mintz"
     ],
     "a": [
      "Katherine Maruyama",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Marianne Contessa",
      "Santhosh Pillai"
     ],
     "a": [
      "Kerry Schaffer",
      "Derek Le"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Jen Carara",
      "Marianne Contessa"
     ],
     "a": [
      "Katherine Maruyama",
      "Harriet Levin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Andrea Mui",
      "Paula Cushing"
     ],
     "a": [
      "Stephanie Woomer",
      "Tera Baccile"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Naresh Malhotra",
      "Tim Ahn"
     ],
     "a": [
      "Dana Luscombe",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Eliezer Mintz",
      "Santhosh Pillai"
     ],
     "a": [
      "Michael Dieterle",
      "Michael Finkelstein"
     ]
    }
   ],
   "subs": [
    "Jen Carara",
    "Marianne Contessa"
   ]
  },
  {
   "result": "away",
   "week": 10,
   "home": "APC Garden State",
   "away": "Pickleball Kingdom Hamilton",
   "time": "2026-05-03T14:00:00",
   "complete": true,
   "homePoints": 534,
   "awayPoints": 647,
   "homeGW": 8,
   "awayGW": 24,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jiyun Yuh",
      "Yang Wang"
     ],
     "a": [
      "Yang Ruan",
      "Zhe Ding"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Vita Mulholland",
      "Bennett Shanker"
     ],
     "a": [
      "Stacy Garretson",
      "Leon Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Laura Sweet",
      "Howie Steiner"
     ],
     "a": [
      "Jamie Sandman",
      "Jack Brod"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Lori Flickinger",
      "Laurence Emerson"
     ],
     "a": [
      "Lily Liu",
      "Wally Liu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Cynthia Covie",
      "Lori Flickinger"
     ],
     "a": [
      "Lily Liu",
      "Yang Ruan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Laura Sweet",
      "Jiyun Yuh"
     ],
     "a": [
      "Stacy Garretson",
      "Jamie Sandman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Yang Wang",
      "John Dechristopher"
     ],
     "a": [
      "Jack Brod",
      "Leon Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Bennett Shanker",
      "Howie Steiner"
     ],
     "a": [
      "Albert Pamudji",
      "Zhe Ding"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Laura Sweet",
      "Yang Wang"
     ],
     "a": [
      "Jean Wang",
      "Albert Pamudji"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jiyun Yuh",
      "Bennett Shanker"
     ],
     "a": [
      "Jamie Sandman",
      "Jack Brod"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Vita Mulholland",
      "Laurence Emerson"
     ],
     "a": [
      "Stacy Garretson",
      "Leon Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Cynthia Covie",
      "John Dechristopher"
     ],
     "a": [
      "Lily Liu",
      "Wally Liu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lori Flickinger",
      "Vita Mulholland"
     ],
     "a": [
      "Stacy Garretson",
      "Jamie Sandman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Laura Sweet",
      "Cynthia Covie"
     ],
     "a": [
      "Jean Wang",
      "Yang Ruan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Yang Wang",
      "Howie Steiner"
     ],
     "a": [
      "Albert Pamudji",
      "Wally Liu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Bennett Shanker",
      "Laurence Emerson"
     ],
     "a": [
      "Leon Li",
      "Zhe Ding"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jiyun Yuh",
      "John Dechristopher"
     ],
     "a": [
      "Yang Ruan",
      "Wally Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Lori Flickinger",
      "Howie Steiner"
     ],
     "a": [
      "Jean Wang",
      "Leon Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Laura Sweet",
      "Yang Wang"
     ],
     "a": [
      "Lily Liu",
      "Zhe Ding"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Vita Mulholland",
      "Laurence Emerson"
     ],
     "a": [
      "Stacy Garretson",
      "Jack Brod"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Cynthia Covie",
      "Jiyun Yuh"
     ],
     "a": [
      "Jamie Sandman",
      "Yang Ruan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lori Flickinger",
      "Vita Mulholland"
     ],
     "a": [
      "Stacy Garretson",
      "Lily Liu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Howie Steiner",
      "Yang Wang"
     ],
     "a": [
      "Albert Pamudji",
      "Leon Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Bennett Shanker",
      "John Dechristopher"
     ],
     "a": [
      "Wally Liu",
      "Jack Brod"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Lori Flickinger",
      "Howie Steiner"
     ],
     "a": [
      "Jamie Sandman",
      "Leon Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jiyun Yuh",
      "Laurence Emerson"
     ],
     "a": [
      "Yang Ruan",
      "Zhe Ding"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Laura Sweet",
      "Bennett Shanker"
     ],
     "a": [
      "Lily Liu",
      "Albert Pamudji"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Cynthia Covie",
      "John Dechristopher"
     ],
     "a": [
      "Stacy Garretson",
      "Wally Liu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Laura Sweet",
      "Jiyun Yuh"
     ],
     "a": [
      "Jean Wang",
      "Jamie Sandman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Cynthia Covie",
      "Vita Mulholland"
     ],
     "a": [
      "Stacy Garretson",
      "Lily Liu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Bennett Shanker",
      "Howie Steiner"
     ],
     "a": [
      "Albert Pamudji",
      "Wally Liu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Yang Wang",
      "Laurence Emerson"
     ],
     "a": [
      "Leon Li",
      "Zhe Ding"
     ]
    }
   ],
   "subs": [
    "John Dechristopher"
   ]
  },
  {
   "result": "home",
   "week": 10,
   "home": "Montville",
   "away": "Stelton Sports",
   "time": "2026-05-03T14:00:00",
   "complete": true,
   "homePoints": 641,
   "awayPoints": 587,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Amanda Brouillard",
      "Louis Vessichelli"
     ],
     "a": [
      "Shaoyi Sun",
      "Lei Dong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Wendy Zukerberg",
      "Neal Kirschner"
     ],
     "a": [
      "Mei Li",
      "Liangang Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Evelyn Du",
      "Brandon Fulford"
     ],
     "a": [
      "Rui Zhang",
      "Gajendra Mehta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Oliveira Karen",
      "Liangjie Zhu"
     ],
     "a": [
      "Ann Betterton",
      "Sam Zhou"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Amanda Brouillard",
      "Michele Dabal"
     ],
     "a": [
      "Shaoyi Sun",
      "Jinghua Shao"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Evelyn Du",
      "Wendy Zukerberg"
     ],
     "a": [
      "Mei Li",
      "Rui Zhang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Peter Chen",
      "Neal Kirschner"
     ],
     "a": [
      "Lei Dong",
      "Gajendra Mehta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Liangjie Zhu",
      "Brandon Fulford"
     ],
     "a": [
      "Liangang Liu",
      "Jim Peng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Evelyn Du",
      "Brandon Fulford"
     ],
     "a": [
      "Jinghua Shao",
      "Jim Peng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Amanda Brouillard",
      "Liangjie Zhu"
     ],
     "a": [
      "Mei Li",
      "Gajendra Mehta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Oliveira Karen",
      "Peter Chen"
     ],
     "a": [
      "Rui Zhang",
      "Lei Dong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Wendy Zukerberg",
      "Neal Kirschner"
     ],
     "a": [
      "Ann Betterton",
      "Liangang Liu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Michele Dabal",
      "Wendy Zukerberg"
     ],
     "a": [
      "Jinghua Shao",
      "Rui Zhang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Oliveira Karen",
      "Amanda Brouillard"
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
     "as": 16,
     "h": [
      "Liangjie Zhu",
      "Brandon Fulford"
     ],
     "a": [
      "Jim Peng",
      "Gajendra Mehta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Peter Chen",
      "Neal Kirschner"
     ],
     "a": [
      "Liangang Liu",
      "Sam Zhou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Michele Dabal",
      "Neal Kirschner"
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
     "as": 16,
     "h": [
      "Wendy Zukerberg",
      "Brandon Fulford"
     ],
     "a": [
      "Mei Li",
      "Lei Dong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Amanda Brouillard",
      "Liangjie Zhu"
     ],
     "a": [
      "Rui Zhang",
      "Gajendra Mehta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Evelyn Du",
      "Peter Chen"
     ],
     "a": [
      "Ann Betterton",
      "Jim Peng"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Evelyn Du",
      "Wendy Zukerberg"
     ],
     "a": [
      "Shaoyi Sun",
      "Jinghua Shao"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Oliveira Karen",
      "Amanda Brouillard"
     ],
     "a": [
      "Mei Li",
      "Ann Betterton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Liangjie Zhu",
      "Peter Chen"
     ],
     "a": [
      "Jim Peng",
      "Sam Zhou"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Brandon Fulford",
      "Neal Kirschner"
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
     "as": 4,
     "h": [
      "Oliveira Karen",
      "Liangjie Zhu"
     ],
     "a": [
      "Shaoyi Sun",
      "Sam Zhou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Amanda Brouillard",
      "Louis Vessichelli"
     ],
     "a": [
      "Mei Li",
      "Gajendra Mehta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Evelyn Du",
      "Neal Kirschner"
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
     "as": 18,
     "h": [
      "Wendy Zukerberg",
      "Brandon Fulford"
     ],
     "a": [
      "Ann Betterton",
      "Liangang Liu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Michele Dabal",
      "Amanda Brouillard"
     ],
     "a": [
      "Mei Li",
      "Jinghua Shao"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Wendy Zukerberg",
      "Oliveira Karen"
     ],
     "a": [
      "Rui Zhang",
      "Ann Betterton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Brandon Fulford",
      "Peter Chen"
     ],
     "a": [
      "Lei Dong",
      "Liangang Liu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Liangjie Zhu",
      "Louis Vessichelli"
     ],
     "a": [
      "Jim Peng",
      "Sam Zhou"
     ]
    }
   ],
   "subs": [
    "Gajendra Mehta",
    "Neal Kirschner",
    "Jinghua Shao"
   ]
  },
  {
   "result": "home",
   "week": 10,
   "home": "Pickleball Palace",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-05-03T14:00:00",
   "complete": true,
   "homePoints": 449,
   "awayPoints": 424,
   "homeGW": 21,
   "awayGW": 11,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Rebecca Lederman",
      "David Coleman"
     ],
     "a": [
      "Raneeta Sawhney-Rigby",
      "Daniel Chernin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kelly Hanson Word",
      "Johnson Chang"
     ],
     "a": [
      "Sara Wiggert",
      "Abraham Telechanski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Carly Pfeffer",
      "Alex Lee"
     ],
     "a": [
      "Stacy Fairley",
      "Marc Padre"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Debbie Tovitz",
      "Toby Mcmahan"
     ],
     "a": [
      "",
      "Richard Demeuse"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Kelly Hanson Word",
      "Laura Elleman"
     ],
     "a": [
      "Raneeta Sawhney-Rigby",
      "Sara Wiggert"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Carly Pfeffer",
      "Debbie Tovitz"
     ],
     "a": [
      "Stacy Fairley",
      ""
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Charlie Johnston",
      "Toby Mcmahan"
     ],
     "a": [
      "Marc Padre",
      "Daniel Chernin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Alex Lee",
      "Johnson Chang"
     ],
     "a": [
      "Abraham Telechanski",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Laura Elleman",
      "Toby Mcmahan"
     ],
     "a": [
      "Raneeta Sawhney-Rigby",
      "Daniel Chernin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Carly Pfeffer",
      "Charlie Johnston"
     ],
     "a": [
      "Sara Wiggert",
      "Abraham Telechanski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Rebecca Lederman",
      "Johnson Chang"
     ],
     "a": [
      "Stacy Fairley",
      "Marc Padre"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Debbie Tovitz",
      "David Coleman"
     ],
     "a": [
      "",
      "Richard Demeuse"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Kelly Hanson Word",
      "Rebecca Lederman"
     ],
     "a": [
      "Raneeta Sawhney-Rigby",
      "Sara Wiggert"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Debbie Tovitz",
      "Carly Pfeffer"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Johnson Chang",
      "Toby Mcmahan"
     ],
     "a": [
      "Marc Padre",
      "Daniel Chernin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Charlie Johnston",
      "Alex Lee"
     ],
     "a": [
      "Abraham Telechanski",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Laura Elleman",
      "Charlie Johnston"
     ],
     "a": [
      "Raneeta Sawhney-Rigby",
      "Abraham Telechanski"
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
      "Sara Wiggert",
      "Daniel Chernin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kelly Hanson Word",
      "David Coleman"
     ],
     "a": [
      "Stacy Fairley",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Debbie Tovitz",
      "Toby Mcmahan"
     ],
     "a": [
      "",
      "Marc Padre"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Rebecca Lederman",
      "Kelly Hanson Word"
     ],
     "a": [
      "Raneeta Sawhney-Rigby",
      "Stacy Fairley"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Carly Pfeffer",
      "Laura Elleman"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Charlie Johnston",
      "Alex Lee"
     ],
     "a": [
      "Abraham Telechanski",
      "Daniel Chernin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Johnson Chang",
      "David Coleman"
     ],
     "a": [
      "Marc Padre",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Carly Pfeffer",
      "Alex Lee"
     ],
     "a": [
      "Raneeta Sawhney-Rigby",
      "Marc Padre"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Rebecca Lederman",
      "Johnson Chang"
     ],
     "a": [
      "Sara Wiggert",
      "Daniel Chernin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kelly Hanson Word",
      "Charlie Johnston"
     ],
     "a": [
      "Stacy Fairley",
      "Abraham Telechanski"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Laura Elleman",
      "David Coleman"
     ],
     "a": [
      "",
      "Richard Demeuse"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kelly Hanson Word",
      "Laura Elleman"
     ],
     "a": [
      "Raneeta Sawhney-Rigby",
      "Stacy Fairley"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Rebecca Lederman",
      "Carly Pfeffer"
     ],
     "a": [
      "Sara Wiggert",
      ""
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Charlie Johnston",
      "David Coleman"
     ],
     "a": [
      "Abraham Telechanski",
      "Daniel Chernin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Alex Lee",
      "Johnson Chang"
     ],
     "a": [
      "Marc Padre",
      "Richard Demeuse"
     ]
    }
   ],
   "subs": [
    "Daniel Chernin",
    "Raneeta Sawhney-Rigby",
    "Stacy Fairley"
   ]
  },
  {
   "result": "home",
   "week": 10,
   "home": "Jersey Pickleball Club",
   "away": "Home Court",
   "time": "2026-05-03T14:00:00",
   "complete": true,
   "homePoints": 649,
   "awayPoints": 622,
   "homeGW": 22,
   "awayGW": 10,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Eva Danieli",
      "Michael Swell"
     ],
     "a": [
      "Karan Pescatore",
      "Emil Pescatore"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Amy Chrebet",
      "Brad Oldham"
     ],
     "a": [
      "Margaret Weidlich",
      "Sandeep Malhotra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Rosalyn Goldsmith",
      "Darren Saks"
     ],
     "a": [
      "Christine Chwe",
      "Michael Vincent"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Meryl Nadler",
      "Joe Palumbo"
     ],
     "a": [
      "Susan M Fett",
      "Robert Huntley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Eva Danieli",
      "Amy Chrebet"
     ],
     "a": [
      "Karan Pescatore",
      "Margaret Weidlich"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Natasha De Carvalho",
      "Meryl Nadler"
     ],
     "a": [
      "Susan M Fett",
      "Christine Chwe"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Michael Swell",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Emil Pescatore",
      "Robert Huntley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Joe Palumbo",
      "Brad Oldham"
     ],
     "a": [
      "Sandeep Malhotra",
      "Michael Vincent"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Natasha De Carvalho",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Karan Pescatore",
      "Robert Huntley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Meryl Nadler",
      "Darren Saks"
     ],
     "a": [
      "Margaret Weidlich",
      "Michael Vincent"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Amy Chrebet",
      "Michael Swell"
     ],
     "a": [
      "Susan M Fett",
      "Sandeep Malhotra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Rosalyn Goldsmith",
      "Brad Oldham"
     ],
     "a": [
      "Christine Chwe",
      "Emil Pescatore"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Natasha De Carvalho",
      "Rosalyn Goldsmith"
     ],
     "a": [
      "Karan Pescatore",
      "Christine Chwe"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Eva Danieli",
      "Meryl Nadler"
     ],
     "a": [
      "Margaret Weidlich",
      "Susan M Fett"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Joe Palumbo",
      "Brad Oldham"
     ],
     "a": [
      "Emil Pescatore",
      "Michael Vincent"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Darren Saks",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Robert Huntley",
      "Sandeep Malhotra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Natasha De Carvalho",
      "Joe Palumbo"
     ],
     "a": [
      "Karan Pescatore",
      "Robert Huntley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Rosalyn Goldsmith",
      "Darren Saks"
     ],
     "a": [
      "Margaret Weidlich",
      "Emil Pescatore"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Eva Danieli",
      "Michael Swell"
     ],
     "a": [
      "Christine Chwe",
      "Sandeep Malhotra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Amy Chrebet",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Susan M Fett",
      "Michael Vincent"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Eva Danieli",
      "Meryl Nadler"
     ],
     "a": [
      "Karan Pescatore",
      "Margaret Weidlich"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Rosalyn Goldsmith",
      "Amy Chrebet"
     ],
     "a": [
      "Christine Chwe",
      "Susan M Fett"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Michael Swell",
      "Brad Oldham"
     ],
     "a": [
      "Robert Huntley",
      "Emil Pescatore"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Michael Dombrowiecki",
      "Joe Palumbo"
     ],
     "a": [
      "Sandeep Malhotra",
      "Michael Vincent"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Eva Danieli",
      "Brad Oldham"
     ],
     "a": [
      "Karan Pescatore",
      "Emil Pescatore"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Rosalyn Goldsmith",
      "Michael Swell"
     ],
     "a": [
      "Margaret Weidlich",
      "Sandeep Malhotra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Natasha De Carvalho",
      "Darren Saks"
     ],
     "a": [
      "Christine Chwe",
      "Robert Huntley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Meryl Nadler",
      "Joe Palumbo"
     ],
     "a": [
      "Susan M Fett",
      "Michael Vincent"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Natasha De Carvalho",
      "Amy Chrebet"
     ],
     "a": [
      "Karan Pescatore",
      "Christine Chwe"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Eva Danieli",
      "Rosalyn Goldsmith"
     ],
     "a": [
      "Margaret Weidlich",
      "Susan M Fett"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Michael Swell",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Emil Pescatore",
      "Sandeep Malhotra"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Brad Oldham",
      "Darren Saks"
     ],
     "a": [
      "Robert Huntley",
      "Michael Vincent"
     ]
    }
   ],
   "subs": [
    "Susan M Fett"
   ]
  },
  {
   "result": "home",
   "week": 10,
   "home": "ACE",
   "away": "Monroe",
   "time": "2026-05-09T14:00:00",
   "complete": true,
   "homePoints": 32,
   "awayPoints": 0,
   "homeGW": 0,
   "awayGW": 0,
   "games": [],
   "subs": []
  },
  {
   "result": "home",
   "week": 11,
   "home": "Flemington",
   "away": "Pickleball Kingdom Hamilton",
   "time": "2026-05-17T12:00:00",
   "complete": true,
   "homePoints": 651,
   "awayPoints": 576,
   "homeGW": 21,
   "awayGW": 11,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Denise Richmond",
      "Scott Rubin"
     ],
     "a": [
      "Yue Fei",
      "Leon Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Susan Ackley",
      "Eric Luque"
     ],
     "a": [
      "Jean Wang",
      "Frank Ding"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Christine Papa",
      "David Osborne"
     ],
     "a": [
      "Fabienne Yu",
      "Albert Pamudji"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Tara Kramer",
      "Steven Gregov"
     ],
     "a": [
      "Lan Bin",
      "Feng Ling"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Carol Mastroianni",
      "Susan Ackley"
     ],
     "a": [
      "Fabienne Yu",
      "Jean Wang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Amy Johnson",
      "Denise Richmond"
     ],
     "a": [
      "Ping Yang",
      "Yue Fei"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Eric Luque",
      "Steven Gregov"
     ],
     "a": [
      "Sushil Rijhwani",
      "Albert Pamudji"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Marc Friedman",
      "Todd Stein"
     ],
     "a": [
      "Yaowen Li",
      "Frank Ding"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Amy Johnson",
      "Scott Rubin"
     ],
     "a": [
      "Lan Bin",
      "Feng Ling"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Tara Kramer",
      "Eric Luque"
     ],
     "a": [
      "Ping Yang",
      "Leon Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Carol Mastroianni",
      "David Osborne"
     ],
     "a": [
      "Jean Wang",
      "Sushil Rijhwani"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Christine Papa",
      "Todd Stein"
     ],
     "a": [
      "Fabienne Yu",
      "Yaowen Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Susan Ackley",
      "Tara Kramer"
     ],
     "a": [
      "Yue Fei",
      "Lan Bin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Denise Richmond",
      "Christine Papa"
     ],
     "a": [
      "Jean Wang",
      "Ping Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Steven Gregov",
      "Scott Rubin"
     ],
     "a": [
      "Feng Ling",
      "Leon Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "David Osborne",
      "Marc Friedman"
     ],
     "a": [
      "Yaowen Li",
      "Frank Ding"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Carol Mastroianni",
      "Marc Friedman"
     ],
     "a": [
      "Jean Wang",
      "Frank Ding"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Tara Kramer",
      "David Osborne"
     ],
     "a": [
      "Ping Yang",
      "Sushil Rijhwani"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Denise Richmond",
      "Todd Stein"
     ],
     "a": [
      "Yue Fei",
      "Leon Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Susan Ackley",
      "Eric Luque"
     ],
     "a": [
      "Fabienne Yu",
      "Albert Pamudji"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Amy Johnson",
      "Denise Richmond"
     ],
     "a": [
      "Fabienne Yu",
      "Yue Fei"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Carol Mastroianni",
      "Tara Kramer"
     ],
     "a": [
      "Ping Yang",
      "Lan Bin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "David Osborne",
      "Eric Luque"
     ],
     "a": [
      "Feng Ling",
      "Leon Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Scott Rubin",
      "Todd Stein"
     ],
     "a": [
      "Yaowen Li",
      "Sushil Rijhwani"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Denise Richmond",
      "Steven Gregov"
     ],
     "a": [
      "Jean Wang",
      "Albert Pamudji"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Amy Johnson",
      "Marc Friedman"
     ],
     "a": [
      "Ping Yang",
      "Leon Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Christine Papa",
      "Eric Luque"
     ],
     "a": [
      "Fabienne Yu",
      "Yaowen Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Susan Ackley",
      "Todd Stein"
     ],
     "a": [
      "Yue Fei",
      "Frank Ding"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Susan Ackley",
      "Amy Johnson"
     ],
     "a": [
      "Yue Fei",
      "Ping Yang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Christine Papa",
      "Carol Mastroianni"
     ],
     "a": [
      "Jean Wang",
      "Fabienne Yu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "David Osborne",
      "Steven Gregov"
     ],
     "a": [
      "Sushil Rijhwani",
      "Frank Ding"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Scott Rubin",
      "Marc Friedman"
     ],
     "a": [
      "Yaowen Li",
      "Albert Pamudji"
     ]
    }
   ],
   "subs": [
    "Feng Ling",
    "Yue Fei",
    "Lan Bin",
    "Ping Yang",
    "Sushil Rijhwani"
   ]
  },
  {
   "result": "home",
   "week": 11,
   "home": "Monroe",
   "away": "APC Garden State",
   "time": "2026-05-17T13:00:00",
   "complete": true,
   "homePoints": 643,
   "awayPoints": 606,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Tara Lombardo",
      "Erik Lombardo"
     ],
     "a": [
      "Vita Mulholland",
      "Rick Derose"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Hayley Yandoli",
      "Eliezer Mintz"
     ],
     "a": [
      "Lara Webb",
      "Bennett Shanker"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Jocelyn Carney",
      "Guy Ohn"
     ],
     "a": [
      "Laura Sweet",
      "Yang Wang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Sarah Flynn",
      "Raymond Yuen"
     ],
     "a": [
      "Jiyun Yuh",
      "Lance Stopek"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Sarah Flynn",
      "Hayley Yandoli"
     ],
     "a": [
      "Laura Sweet",
      "Lara Webb"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Tara Lombardo",
      "Jocelyn Carney"
     ],
     "a": [
      "Cynthia Covie",
      "Jiyun Yuh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Guy Ohn",
      "Raymond Yuen"
     ],
     "a": [
      "Rick Derose",
      "Yang Wang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Yi Gu",
      "Eliezer Mintz"
     ],
     "a": [
      "Howie Steiner",
      "Lance Stopek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Tara Lombardo",
      "Yi Gu"
     ],
     "a": [
      "Laura Sweet",
      "Lance Stopek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jocelyn Carney",
      "Guy Ohn"
     ],
     "a": [
      "Lara Webb",
      "Howie Steiner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Hayley Yandoli",
      "Erik Lombardo"
     ],
     "a": [
      "Vita Mulholland",
      "Bennett Shanker"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sarah Flynn",
      "Eliezer Mintz"
     ],
     "a": [
      "Jiyun Yuh",
      "Yang Wang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Tara Lombardo",
      "Sarah Flynn"
     ],
     "a": [
      "Cynthia Covie",
      "Lara Webb"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Hayley Yandoli",
      "Jocelyn Carney"
     ],
     "a": [
      "Laura Sweet",
      "Jiyun Yuh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Eliezer Mintz",
      "Raymond Yuen"
     ],
     "a": [
      "Yang Wang",
      "Howie Steiner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Yi Gu",
      "Erik Lombardo"
     ],
     "a": [
      "Rick Derose",
      "Lance Stopek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Tara Lombardo",
      "Guy Ohn"
     ],
     "a": [
      "Vita Mulholland",
      "Bennett Shanker"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Jocelyn Carney",
      "Raymond Yuen"
     ],
     "a": [
      "Jiyun Yuh",
      "Lance Stopek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sarah Flynn",
      "Erik Lombardo"
     ],
     "a": [
      "Cynthia Covie",
      "Rick Derose"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Hayley Yandoli",
      "Yi Gu"
     ],
     "a": [
      "Lara Webb",
      "Howie Steiner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sarah Flynn",
      "Hayley Yandoli"
     ],
     "a": [
      "Laura Sweet",
      "Jiyun Yuh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Tara Lombardo",
      "Jocelyn Carney"
     ],
     "a": [
      "Cynthia Covie",
      "Vita Mulholland"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Eliezer Mintz",
      "Yi Gu"
     ],
     "a": [
      "Howie Steiner",
      "Yang Wang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Erik Lombardo",
      "Raymond Yuen"
     ],
     "a": [
      "Bennett Shanker",
      "Rick Derose"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Tara Lombardo",
      "Raymond Yuen"
     ],
     "a": [
      "Cynthia Covie",
      "Rick Derose"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Hayley Yandoli",
      "Guy Ohn"
     ],
     "a": [
      "Vita Mulholland",
      "Yang Wang"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "Jocelyn Carney",
      "Eliezer Mintz"
     ],
     "a": [
      "Lara Webb",
      "Lance Stopek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Sarah Flynn",
      "Erik Lombardo"
     ],
     "a": [
      "Laura Sweet",
      "Bennett Shanker"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Hayley Yandoli",
      "Tara Lombardo"
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
     "as": 19,
     "h": [
      "Sarah Flynn",
      "Jocelyn Carney"
     ],
     "a": [
      "Cynthia Covie",
      "Vita Mulholland"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Eliezer Mintz",
      "Raymond Yuen"
     ],
     "a": [
      "Howie Steiner",
      "Lance Stopek"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Guy Ohn",
      "Yi Gu"
     ],
     "a": [
      "Bennett Shanker",
      "Yang Wang"
     ]
    }
   ],
   "subs": [
    "Raymond Yuen",
    "Jocelyn Carney"
   ]
  },
  {
   "result": "away",
   "week": 11,
   "home": "Home Court",
   "away": "Stelton Sports",
   "time": "2026-05-17T13:00:00",
   "complete": true,
   "homePoints": 584,
   "awayPoints": 624,
   "homeGW": 13,
   "awayGW": 19,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Sharon Streit",
      "George Mandl"
     ],
     "a": [
      "Mei Li",
      "Sam Zhou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Sarah Mcparland",
      "Robert Huntley"
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
     "as": 17,
     "h": [
      "Kajal Sinkar",
      "Michael Vincent"
     ],
     "a": [
      "Ann Betterton",
      "Mengchu Zhou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Laura Spilatro",
      "Franklin Lupianez"
     ],
     "a": [
      "Lucy Li",
      "Wen Jin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Laura Spilatro",
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
     "hs": 16,
     "as": 21,
     "h": [
      "Sharon Streit",
      "Sarah Mcparland"
     ],
     "a": [
      "Shaoyi Sun",
      "Suzanne \"Zan\" Davies"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Mark Lim",
      "Franklin Lupianez"
     ],
     "a": [
      "Wen Jin",
      "Liangang Liu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Michael Barninger",
      "George Mandl"
     ],
     "a": [
      "Peter Shen",
      "Jim Peng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Sarah Mcparland",
      "Robert Huntley"
     ],
     "a": [
      "Mei Li",
      "Mengchu Zhou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Laura Spilatro",
      "George Mandl"
     ],
     "a": [
      "Ann Betterton",
      "Liangang Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kajal Sinkar",
      "Franklin Lupianez"
     ],
     "a": [
      "Lucy Li",
      "Sam Zhou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Sharon Streit",
      "Michael Vincent"
     ],
     "a": [
      "Shaoyi Sun",
      "Peter Shen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kajal Sinkar",
      "Sarah Mcparland"
     ],
     "a": [
      "Ann Betterton",
      "Lucy Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Laura Spilatro",
      "Sharon Streit"
     ],
     "a": [
      "Jennifer Qian",
      "Suzanne \"Zan\" Davies"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Mark Lim",
      "Michael Barninger"
     ],
     "a": [
      "Mengchu Zhou",
      "Wen Jin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Franklin Lupianez",
      "Robert Huntley"
     ],
     "a": [
      "Sam Zhou",
      "Jim Peng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sarah Mcparland",
      "Michael Barninger"
     ],
     "a": [
      "Mei Li",
      "Peter Shen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Sharon Streit",
      "Robert Huntley"
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
     "as": 15,
     "h": [
      "Anita Bobba",
      "Michael Vincent"
     ],
     "a": [
      "Lucy Li",
      "Mengchu Zhou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Laura Spilatro",
      "George Mandl"
     ],
     "a": [
      "Shaoyi Sun",
      "Sam Zhou"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Sarah Mcparland",
      "Laura Spilatro"
     ],
     "a": [
      "Shaoyi Sun",
      "Jennifer Qian"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Sharon Streit",
      "Anita Bobba"
     ],
     "a": [
      "Suzanne \"Zan\" Davies",
      "Ann Betterton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Michael Vincent",
      "Mark Lim"
     ],
     "a": [
      "Mengchu Zhou",
      "Jim Peng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Robert Huntley",
      "Michael Barninger"
     ],
     "a": [
      "Wen Jin",
      "Peter Shen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Sharon Streit",
      "Franklin Lupianez"
     ],
     "a": [
      "Mei Li",
      "Sam Zhou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sarah Mcparland",
      "Michael Barninger"
     ],
     "a": [
      "Lucy Li",
      "Liangang Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Anita Bobba",
      "Mark Lim"
     ],
     "a": [
      "Suzanne \"Zan\" Davies",
      "Jim Peng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Laura Spilatro",
      "Michael Vincent"
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
     "as": 13,
     "h": [
      "Anita Bobba",
      "Sarah Mcparland"
     ],
     "a": [
      "Jennifer Qian",
      "Mei Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Sharon Streit",
      "Laura Spilatro"
     ],
     "a": [
      "Ann Betterton",
      "Lucy Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Robert Huntley",
      "Mark Lim"
     ],
     "a": [
      "Liangang Liu",
      "Wen Jin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Michael Barninger",
      "George Mandl"
     ],
     "a": [
      "Sam Zhou",
      "Peter Shen"
     ]
    }
   ],
   "subs": [
    "Lucy Li",
    "Peter Shen"
   ]
  },
  {
   "result": "home",
   "week": 11,
   "home": "Jersey Pickleball Club",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-05-17T14:00:00",
   "complete": true,
   "homePoints": 400,
   "awayPoints": 299,
   "homeGW": 27,
   "awayGW": 5,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Alice Napolitano",
      "Brad Oldham"
     ],
     "a": [
      "Susan St. Pierre",
      "Abraham Telechanski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Eva Danieli",
      "Michael Swell"
     ],
     "a": [
      "Sara Wiggert",
      "Marc Padre"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Rosalyn Goldsmith",
      "Darren Saks"
     ],
     "a": [
      "Liz Aronsohn",
      "David Shapiro"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Natasha De Carvalho",
      "Joe Palumbo"
     ],
     "a": [
      "Ayako Caravella",
      "Karan Bhagat"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Alice Napolitano",
      "Eva Danieli"
     ],
     "a": [
      "Sara Wiggert",
      "Susan St. Pierre"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Meryl Nadler",
      "Rosalyn Goldsmith"
     ],
     "a": [
      "Liz Aronsohn",
      "Ayako Caravella"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Michael Swell",
      "Brad Oldham"
     ],
     "a": [
      "Abraham Telechanski",
      "Marc Padre"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Joe Palumbo",
      "Darren Saks"
     ],
     "a": [
      "David Shapiro",
      "Karan Bhagat"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Eva Danieli",
      "Michael Swell"
     ],
     "a": [
      "Susan St. Pierre",
      "Abraham Telechanski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Alice Napolitano",
      "Brad Oldham"
     ],
     "a": [
      "Sara Wiggert",
      "Marc Padre"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Meryl Nadler",
      "Darren Saks"
     ],
     "a": [
      "Liz Aronsohn",
      "Karan Bhagat"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Natasha De Carvalho",
      "Joe Palumbo"
     ],
     "a": [
      "Ayako Caravella",
      "David Shapiro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Alice Napolitano",
      "Natasha De Carvalho"
     ],
     "a": [
      "Sara Wiggert",
      "Susan St. Pierre"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Rosalyn Goldsmith",
      "Meryl Nadler"
     ],
     "a": [
      "Liz Aronsohn",
      "Ayako Caravella"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Michael Swell",
      "Brad Oldham"
     ],
     "a": [
      "Abraham Telechanski",
      "Marc Padre"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Darren Saks",
      "Joe Palumbo"
     ],
     "a": [
      "David Shapiro",
      "Karan Bhagat"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Alice Napolitano",
      "Michael Swell"
     ],
     "a": [
      "Sara Wiggert",
      "Abraham Telechanski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Eva Danieli",
      "Brad Oldham"
     ],
     "a": [
      "Susan St. Pierre",
      "Marc Padre"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Natasha De Carvalho",
      "Darren Saks"
     ],
     "a": [
      "Ayako Caravella",
      "Karan Bhagat"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Meryl Nadler",
      "Joe Palumbo"
     ],
     "a": [
      "Liz Aronsohn",
      "David Shapiro"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Meryl Nadler",
      "Eva Danieli"
     ],
     "a": [
      "Susan St. Pierre",
      "Ayako Caravella"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Rosalyn Goldsmith",
      "Natasha De Carvalho"
     ],
     "a": [
      "Sara Wiggert",
      "Liz Aronsohn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Michael Swell",
      "Joe Palumbo"
     ],
     "a": [
      "Abraham Telechanski",
      "Karan Bhagat"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Darren Saks",
      "Brad Oldham"
     ],
     "a": [
      "Marc Padre",
      "David Shapiro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Alice Napolitano",
      "Michael Swell"
     ],
     "a": [
      "Sara Wiggert",
      "Abraham Telechanski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Rosalyn Goldsmith",
      "Brad Oldham"
     ],
     "a": [
      "Susan St. Pierre",
      "Marc Padre"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 0,
     "h": [
      "Eva Danieli",
      "Joe Palumbo"
     ],
     "a": [
      "Ayako Caravella",
      "David Shapiro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 1,
     "h": [
      "Meryl Nadler",
      "Darren Saks"
     ],
     "a": [
      "Liz Aronsohn",
      "Karan Bhagat"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Alice Napolitano",
      "Eva Danieli"
     ],
     "a": [
      "Susan St. Pierre",
      "Ayako Caravella"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Rosalyn Goldsmith",
      "Natasha De Carvalho"
     ],
     "a": [
      "Sara Wiggert",
      "Liz Aronsohn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Michael Swell",
      "Joe Palumbo"
     ],
     "a": [
      "Abraham Telechanski",
      "Karan Bhagat"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Darren Saks",
      "Brad Oldham"
     ],
     "a": [
      "David Shapiro",
      "Marc Padre"
     ]
    }
   ],
   "subs": [
    "Susan St. Pierre",
    "David Shapiro"
   ]
  },
  {
   "result": "away",
   "week": 11,
   "home": "Montville",
   "away": "Pickleball Palace",
   "time": "2026-05-17T14:00:00",
   "complete": true,
   "homePoints": 542,
   "awayPoints": 643,
   "homeGW": 9,
   "awayGW": 23,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Kristen Silvestri",
      "Brandon Fulford"
     ],
     "a": [
      "Kate Curren",
      "Brian Gonzalez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Amanda Brouillard",
      "Louis Vessichelli"
     ],
     "a": [
      "Jill Lesnik",
      "Bud Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Evelyn Du",
      "Liangjie Zhu"
     ],
     "a": [
      "Rebecca Lederman",
      "Alex Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Liang Chao",
      "Kevin Sheehan"
     ],
     "a": [
      "Amanda Quinn",
      "John Burke"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Michele Dabal",
      "Kristen Silvestri"
     ],
     "a": [
      "Kate Curren",
      "Rebecca Lederman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Evelyn Du",
      "Amanda Brouillard"
     ],
     "a": [
      "Amanda Quinn",
      "Jill Lesnik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Brandon Fulford",
      "Peter Chen"
     ],
     "a": [
      "Alex Lee",
      "Johnson Chang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Liangjie Zhu",
      "Kevin Sheehan"
     ],
     "a": [
      "John Burke",
      "Bud Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 4,
     "as": 21,
     "h": [
      "Kristen Silvestri",
      "Brandon Fulford"
     ],
     "a": [
      "Kate Curren",
      "Alex Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Evelyn Du",
      "Liangjie Zhu"
     ],
     "a": [
      "Rebecca Lederman",
      "Johnson Chang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Amanda Brouillard",
      "Louis Vessichelli"
     ],
     "a": [
      "Amanda Quinn",
      "John Burke"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Michele Dabal",
      "Kevin Sheehan"
     ],
     "a": [
      "Andrea Dellechiaie",
      "Brian Gonzalez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Amanda Brouillard",
      "Savita Nandal"
     ],
     "a": [
      "Andrea Dellechiaie",
      "Amanda Quinn"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Liang Chao",
      "Michele Dabal"
     ],
     "a": [
      "Jill Lesnik",
      "Rebecca Lederman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Liangjie Zhu",
      "Louis Vessichelli"
     ],
     "a": [
      "John Burke",
      "Bud Heller"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Brandon Fulford",
      "Peter Chen"
     ],
     "a": [
      "Johnson Chang",
      "Brian Gonzalez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Savita Nandal",
      "Brandon Fulford"
     ],
     "a": [
      "Kate Curren",
      "Brian Gonzalez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Michele Dabal",
      "Kevin Sheehan"
     ],
     "a": [
      "Andrea Dellechiaie",
      "John Burke"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kristen Silvestri",
      "Louis Vessichelli"
     ],
     "a": [
      "Jill Lesnik",
      "Alex Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Amanda Brouillard",
      "Liangjie Zhu"
     ],
     "a": [
      "Amanda Quinn",
      "Bud Heller"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Savita Nandal",
      "Evelyn Du"
     ],
     "a": [
      "Kate Curren",
      "Rebecca Lederman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kristen Silvestri",
      "Liang Chao"
     ],
     "a": [
      "Andrea Dellechiaie",
      "Amanda Quinn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Liangjie Zhu",
      "Louis Vessichelli"
     ],
     "a": [
      "Johnson Chang",
      "Alex Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Peter Chen",
      "Kevin Sheehan"
     ],
     "a": [
      "Brian Gonzalez",
      "John Burke"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Savita Nandal",
      "Peter Chen"
     ],
     "a": [
      "Kate Curren",
      "Alex Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Liang Chao",
      "Kevin Sheehan"
     ],
     "a": [
      "Andrea Dellechiaie",
      "Brian Gonzalez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Amanda Brouillard",
      "Liangjie Zhu"
     ],
     "a": [
      "Jill Lesnik",
      "Bud Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Evelyn Du",
      "Louis Vessichelli"
     ],
     "a": [
      "Rebecca Lederman",
      "Johnson Chang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Kristen Silvestri",
      "Michele Dabal"
     ],
     "a": [
      "Kate Curren",
      "Andrea Dellechiaie"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Amanda Brouillard",
      "Evelyn Du"
     ],
     "a": [
      "Rebecca Lederman",
      "Jill Lesnik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Brandon Fulford",
      "Louis Vessichelli"
     ],
     "a": [
      "Johnson Chang",
      "Bud Heller"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Liangjie Zhu",
      "Kevin Sheehan"
     ],
     "a": [
      "Alex Lee",
      "Brian Gonzalez"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 11,
   "home": "Bounce Malvern",
   "away": "ACE",
   "time": "2026-05-17T14:30:00",
   "complete": true,
   "homePoints": 579,
   "awayPoints": 618,
   "homeGW": 13,
   "awayGW": 19,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Harriet Levin",
      "Jim Darcangelo"
     ],
     "a": [
      "Stacey Frank",
      "Ed Hutchinson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Renee Hollander",
      "Keith Goldberg"
     ],
     "a": [
      "Elyse Diamond",
      "Jeff Lorman"
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
      "Pam Boyd",
      "Brian Rowan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Katherine Maruyama",
      "Derek Le"
     ],
     "a": [
      "Kate Siedell",
      "Sang Nguyen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Stephanie Woomer",
      "Renee Hollander"
     ],
     "a": [
      "Kate Siedell",
      "Stacey Frank"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Katherine Maruyama",
      "Kerry Schaffer"
     ],
     "a": [
      "Pam Boyd",
      "Donna Taylor"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Keith Goldberg",
      "Michael Dieterle"
     ],
     "a": [
      "Ed Hutchinson",
      "Brian Rowan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jim Darcangelo",
      "Derek Le"
     ],
     "a": [
      "Sang Nguyen",
      "Marc Pellicane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Katherine Maruyama",
      "Keith Goldberg"
     ],
     "a": [
      "Kate Siedell",
      "Brian Rowan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Kerry Schaffer",
      "Michael Dieterle"
     ],
     "a": [
      "Pam Boyd",
      "Sang Nguyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Harriet Levin",
      "Jim Darcangelo"
     ],
     "a": [
      "Elyse Diamond",
      "Jeff Lorman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Stephanie Woomer",
      "Michael Finkelstein"
     ],
     "a": [
      "Donna Taylor",
      "Ed Hutchinson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Harriet Levin",
      "Renee Hollander"
     ],
     "a": [
      "Pam Boyd",
      "Stacey Frank"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Katherine Maruyama",
      "Kerry Schaffer"
     ],
     "a": [
      "Kate Siedell",
      "Elyse Diamond"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Keith Goldberg",
      "Jim Darcangelo"
     ],
     "a": [
      "Brian Rowan",
      "Sang Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Michael Finkelstein",
      "Derek Le"
     ],
     "a": [
      "Ed Hutchinson",
      "Marc Pellicane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Stephanie Woomer",
      "Keith Goldberg"
     ],
     "a": [
      "Pam Boyd",
      "Brian Rowan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kerry Schaffer",
      "Michael Finkelstein"
     ],
     "a": [
      "Donna Taylor",
      "Ed Hutchinson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Renee Hollander",
      "Michael Dieterle"
     ],
     "a": [
      "Kate Siedell",
      "Sang Nguyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Harriet Levin",
      "Derek Le"
     ],
     "a": [
      "Stacey Frank",
      "Jeff Lorman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Stephanie Woomer",
      "Katherine Maruyama"
     ],
     "a": [
      "Donna Taylor",
      "Kate Siedell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Harriet Levin",
      "Renee Hollander"
     ],
     "a": [
      "Stacey Frank",
      "Elyse Diamond"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Jim Darcangelo",
      "Michael Dieterle"
     ],
     "a": [
      "Ed Hutchinson",
      "Marc Pellicane"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Keith Goldberg",
      "Derek Le"
     ],
     "a": [
      "Jeff Lorman",
      "Brian Rowan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Harriet Levin",
      "Keith Goldberg"
     ],
     "a": [
      "Kate Siedell",
      "Ed Hutchinson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Katherine Maruyama",
      "Michael Finkelstein"
     ],
     "a": [
      "Pam Boyd",
      "Sang Nguyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Renee Hollander",
      "Michael Dieterle"
     ],
     "a": [
      "Elyse Diamond",
      "Marc Pellicane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Kerry Schaffer",
      "Jim Darcangelo"
     ],
     "a": [
      "Stacey Frank",
      "Brian Rowan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Stephanie Woomer",
      "Kerry Schaffer"
     ],
     "a": [
      "Pam Boyd",
      "Donna Taylor"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Harriet Levin",
      "Katherine Maruyama"
     ],
     "a": [
      "Stacey Frank",
      "Kate Siedell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Michael Dieterle",
      "Derek Le"
     ],
     "a": [
      "Sang Nguyen",
      "Marc Pellicane"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jim Darcangelo",
      "Michael Finkelstein"
     ],
     "a": [
      "Ed Hutchinson",
      "Brian Rowan"
     ]
    }
   ],
   "subs": [
    "Renee Hollander"
   ]
  }
 ],
 "playoffs": [
  {
   "result": "home",
   "round": 1,
   "home": "Pickleball Palace",
   "away": "Montville",
   "time": "2026-05-31T14:00:00",
   "complete": true,
   "homeSeed": 1,
   "awaySeed": 4,
   "homePoints": 653,
   "awayPoints": 514,
   "homeGW": 24,
   "awayGW": 11,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Jill Lesnik",
      "Bud Heller"
     ],
     "a": [
      "Michele Dabal",
      "Louis Vessichelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Carly Pfeffer",
      "Johnson Chang"
     ],
     "a": [
      "Oliveira Karen",
      "Liangjie Zhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Kate Curren",
      "Brian Gonzalez"
     ],
     "a": [
      "Kristen Silvestri",
      "Andre Yang"
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
      "Ronnie Yin",
      "Kevin Sheehan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kate Curren",
      "Kelly Hanson Word"
     ],
     "a": [
      "Michele Dabal",
      "Oliveira Karen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jill Lesnik",
      "Rebecca Lederman"
     ],
     "a": [
      "Kristen Silvestri",
      "Ronnie Yin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Johnson Chang",
      "Bud Heller"
     ],
     "a": [
      "Andre Yang",
      "Liangjie Zhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Alex Lee",
      "Chris Heimerle"
     ],
     "a": [
      "Louis Vessichelli",
      "Kevin Sheehan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Carly Pfeffer",
      "Johnson Chang"
     ],
     "a": [
      "Kristen Silvestri",
      "Louis Vessichelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Kelly Hanson Word",
      "Brian Gonzalez"
     ],
     "a": [
      "Oliveira Karen",
      "Andre Yang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jill Lesnik",
      "Chris Heimerle"
     ],
     "a": [
      "Michele Dabal",
      "Kevin Sheehan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kate Curren",
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
     "as": 15,
     "h": [
      "Rebecca Lederman",
      "Carly Pfeffer"
     ],
     "a": [
      "Oliveira Karen",
      "Michele Dabal"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kelly Hanson Word",
      "Jill Lesnik"
     ],
     "a": [
      "Ronnie Yin",
      "Kristen Silvestri"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Bud Heller",
      "Chris Heimerle"
     ],
     "a": [
      "Kevin Sheehan",
      "Peter Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Brian Gonzalez",
      "Johnson Chang"
     ],
     "a": [
      "Liangjie Zhu",
      "Andre Yang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Rebecca Lederman",
      "Chris Heimerle"
     ],
     "a": [
      "Kristen Silvestri",
      "Peter Chen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jill Lesnik",
      "Bud Heller"
     ],
     "a": [
      "Oliveira Karen",
      "Kevin Sheehan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kate Curren",
      "Brian Gonzalez"
     ],
     "a": [
      "Michele Dabal",
      "Andre Yang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kelly Hanson Word",
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
     "as": 10,
     "h": [
      "Jill Lesnik",
      "Kelly Hanson Word"
     ],
     "a": [
      "Ronnie Yin",
      "Michele Dabal"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kate Curren",
      "Carly Pfeffer"
     ],
     "a": [
      "Oliveira Karen",
      "Kristen Silvestri"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Alex Lee",
      "Chris Heimerle"
     ],
     "a": [
      "Andre Yang",
      "Louis Vessichelli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Johnson Chang",
      "Brian Gonzalez"
     ],
     "a": [
      "Kevin Sheehan",
      "Liangjie Zhu"
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
      "Kristen Silvestri",
      "Peter Chen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Rebecca Lederman",
      "Johnson Chang"
     ],
     "a": [
      "Oliveira Karen",
      "Liangjie Zhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kate Curren",
      "Alex Lee"
     ],
     "a": [
      "Ronnie Yin",
      "Andre Yang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kelly Hanson Word",
      "Brian Gonzalez"
     ],
     "a": [
      "Michele Dabal",
      "Kevin Sheehan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Kate Curren",
      "Kelly Hanson Word"
     ],
     "a": [
      "Kristen Silvestri",
      "Michele Dabal"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Carly Pfeffer",
      "Rebecca Lederman"
     ],
     "a": [
      "Ronnie Yin",
      "Oliveira Karen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Alex Lee",
      "Johnson Chang"
     ],
     "a": [
      "Liangjie Zhu",
      "Louis Vessichelli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Bud Heller",
      "Brian Gonzalez"
     ],
     "a": [
      "Kevin Sheehan",
      "Andre Yang"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": null,
     "as": null,
     "h": [
      "Kelly Hanson Word",
      "Brian Gonzalez"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": null,
     "as": null,
     "h": [
      "Kate Curren",
      "Rebecca Lederman"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": null,
     "as": null,
     "h": [
      "Alex Lee",
      "Johnson Chang"
     ],
     "a": [
      "",
      ""
     ]
    }
   ]
  },
  {
   "result": "home",
   "round": 1,
   "home": "Jersey Pickleball Club",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-05-31T14:00:00",
   "complete": true,
   "homeSeed": 2,
   "awaySeed": 3,
   "homePoints": 512,
   "awayPoints": 425,
   "homeGW": 27,
   "awayGW": 5,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Eva Danieli",
      "Michael Swell"
     ],
     "a": [
      "Kamala Gangavalli",
      "Abraham Telechanski"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Alice Napolitano",
      "Gary Sidhu"
     ],
     "a": [
      "Michelle Burke",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Rosalyn Goldsmith",
      "Darren Saks"
     ],
     "a": [
      "Helen Wright",
      "Prashanth Koshy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Amy Chrebet",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Julia Hollman",
      "Ed Villaverde"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Alice Napolitano",
      "Eva Danieli"
     ],
     "a": [
      "Kamala Gangavalli",
      "Michelle Burke"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Rosalyn Goldsmith",
      "Meryl Nadler"
     ],
     "a": [
      "Julia Hollman",
      "Helen Wright"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Michael Swell",
      "Brad Oldham"
     ],
     "a": [
      "Abraham Telechanski",
      "Richard Demeuse"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Joe Palumbo",
      "Gary Sidhu"
     ],
     "a": [
      "Prashanth Koshy",
      "Ed Villaverde"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Alice Napolitano",
      "Gary Sidhu"
     ],
     "a": [
      "Kamala Gangavalli",
      "Abraham Telechanski"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Rosalyn Goldsmith",
      "Michael Swell"
     ],
     "a": [
      "Michelle Burke",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Meryl Nadler",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Helen Wright",
      "Prashanth Koshy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Amy Chrebet",
      "Darren Saks"
     ],
     "a": [
      "Julia Hollman",
      "Ed Villaverde"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Meryl Nadler",
      "Amy Chrebet"
     ],
     "a": [
      "Michelle Burke",
      "Julia Hollman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Alice Napolitano",
      "Eva Danieli"
     ],
     "a": [
      "Kamala Gangavalli",
      "Helen Wright"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Brad Oldham",
      "Gary Sidhu"
     ],
     "a": [
      "Abraham Telechanski",
      "Richard Demeuse"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Michael Dombrowiecki",
      "Joe Palumbo"
     ],
     "a": [
      "Prashanth Koshy",
      "Ed Villaverde"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Eva Danieli",
      "Michael Swell"
     ],
     "a": [
      "Kamala Gangavalli",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Rosalyn Goldsmith",
      "Brad Oldham"
     ],
     "a": [
      "Michelle Burke",
      "Abraham Telechanski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Meryl Nadler",
      "Darren Saks"
     ],
     "a": [
      "Julia Hollman",
      "Prashanth Koshy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Amy Chrebet",
      "Joe Palumbo"
     ],
     "a": [
      "Helen Wright",
      "Ed Villaverde"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Eva Danieli",
      "Rosalyn Goldsmith"
     ],
     "a": [
      "Michelle Burke",
      "Helen Wright"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Alice Napolitano",
      "Amy Chrebet"
     ],
     "a": [
      "Kamala Gangavalli",
      "Julia Hollman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Brad Oldham",
      "Michael Swell"
     ],
     "a": [
      "Abraham Telechanski",
      "Prashanth Koshy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Michael Dombrowiecki",
      "Gary Sidhu"
     ],
     "a": [
      "Richard Demeuse",
      "Ed Villaverde"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Alice Napolitano",
      "Brad Oldham"
     ],
     "a": [
      "Kamala Gangavalli",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Rosalyn Goldsmith",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Michelle Burke",
      "Abraham Telechanski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Meryl Nadler",
      "Darren Saks"
     ],
     "a": [
      "Julia Hollman",
      "Prashanth Koshy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Amy Chrebet",
      "Joe Palumbo"
     ],
     "a": [
      "Helen Wright",
      "Ed Villaverde"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Alice Napolitano",
      "Amy Chrebet"
     ],
     "a": [
      "Kamala Gangavalli",
      "Helen Wright"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Eva Danieli",
      "Meryl Nadler"
     ],
     "a": [
      "Michelle Burke",
      "Julia Hollman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Gary Sidhu",
      "Brad Oldham"
     ],
     "a": [
      "Abraham Telechanski",
      "Prashanth Koshy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Joe Palumbo",
      "Darren Saks"
     ],
     "a": [
      "Richard Demeuse",
      "Ed Villaverde"
     ]
    }
   ]
  },
  {
   "result": "home",
   "round": 1,
   "home": "ACE",
   "away": "Flemington",
   "time": "2026-05-31T14:30:00",
   "complete": true,
   "homeSeed": 1,
   "awaySeed": 4,
   "homePoints": 665,
   "awayPoints": 541,
   "homeGW": 24,
   "awayGW": 11,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kate Siedell",
      "Marc Harden"
     ],
     "a": [
      "Susan Ackley",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Pam Boyd",
      "Robert Finley"
     ],
     "a": [
      "Amy Johnson",
      "Scott Rubin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Stacey Frank",
      "Sang Nguyen"
     ],
     "a": [
      "Aimee Castellano",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Elyse Diamond",
      "Brian Rowan"
     ],
     "a": [
      "Christine Papa",
      "Steven Gregov"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Pam Boyd",
      "Sandy Alkins"
     ],
     "a": [
      "Amy Johnson",
      "Denise Richmond"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kate Siedell",
      "Stacey Frank"
     ],
     "a": [
      "Susan Ackley",
      "Aimee Castellano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Marc Harden",
      "Brian Rowan"
     ],
     "a": [
      "Scott Rubin",
      "Todd Stein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "James Shaw",
      "Robert Finley"
     ],
     "a": [
      "Marc Friedman",
      "Steven Gregov"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Stacey Frank",
      "Brian Rowan"
     ],
     "a": [
      "Susan Ackley",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kate Siedell",
      "Sang Nguyen"
     ],
     "a": [
      "Aimee Castellano",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Elyse Diamond",
      "Jeff Lorman"
     ],
     "a": [
      "Christine Papa",
      "Todd Stein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Sandy Alkins",
      "Marc Harden"
     ],
     "a": [
      "Carol Mastroianni",
      "Marc Friedman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Pam Boyd",
      "Stacey Frank"
     ],
     "a": [
      "Amy Johnson",
      "Denise Richmond"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kate Siedell",
      "Sandy Alkins"
     ],
     "a": [
      "Christine Papa",
      "Carol Mastroianni"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "James Shaw",
      "Jeff Lorman"
     ],
     "a": [
      "Marc Friedman",
      "Todd Stein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Robert Finley",
      "Sang Nguyen"
     ],
     "a": [
      "Steven Gregov",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sandy Alkins",
      "Sang Nguyen"
     ],
     "a": [
      "Aimee Castellano",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Pam Boyd",
      "Brian Rowan"
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
     "as": 16,
     "h": [
      "Elyse Diamond",
      "Jeff Lorman"
     ],
     "a": [
      "Amy Johnson",
      "Marc Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kate Siedell",
      "Marc Harden"
     ],
     "a": [
      "Susan Ackley",
      "Scott Rubin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Elyse Diamond",
      "Stacey Frank"
     ],
     "a": [
      "Christine Papa",
      "Amy Johnson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kate Siedell",
      "Sandy Alkins"
     ],
     "a": [
      "Denise Richmond",
      "Carol Mastroianni"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Brian Rowan",
      "Sang Nguyen"
     ],
     "a": [
      "David Osborne",
      "Eric Luque"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "James Shaw",
      "Jeff Lorman"
     ],
     "a": [
      "Marc Friedman",
      "Scott Rubin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Stacey Frank",
      "James Shaw"
     ],
     "a": [
      "Aimee Castellano",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Elyse Diamond",
      "Robert Finley"
     ],
     "a": [
      "Carol Mastroianni",
      "Todd Stein"
     ]
    },
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
      "Susan Ackley",
      "Eric Luque"
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
      "Denise Richmond",
      "Steven Gregov"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Kate Siedell",
      "Stacey Frank"
     ],
     "a": [
      "Susan Ackley",
      "Aimee Castellano"
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
      "Christine Papa",
      "Carol Mastroianni"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "James Shaw",
      "Sang Nguyen"
     ],
     "a": [
      "David Osborne",
      "Eric Luque"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Brian Rowan",
      "Robert Finley"
     ],
     "a": [
      "Todd Stein",
      "Scott Rubin"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": null,
     "as": null,
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
     "ff": 1,
     "hs": null,
     "as": null,
     "h": [
      "",
      ""
     ],
     "a": [
      "Susan Ackley",
      "Denise Richmond"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": null,
     "as": null,
     "h": [
      "",
      ""
     ],
     "a": [
      "David Osborne",
      "Steven Gregov"
     ]
    }
   ]
  },
  {
   "result": "home",
   "round": 1,
   "home": "Bounce Malvern",
   "away": "Pickleball Kingdom Hamilton",
   "time": "2026-05-31T13:30:00",
   "complete": true,
   "homeSeed": 2,
   "awaySeed": 3,
   "homePoints": 648,
   "awayPoints": 524,
   "homeGW": 25,
   "awayGW": 7,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Harriet Levin",
      "Dana Luscombe"
     ],
     "a": [
      "Jean Wang",
      "Frank Ding"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Vicki Main",
      "Michael Dieterle"
     ],
     "a": [
      "Lily Liu",
      "Wally Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Tera Baccile",
      "Keith Goldberg"
     ],
     "a": [
      "Fabienne Yu",
      "Albert Pamudji"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Katherine Maruyama",
      "Derek Le"
     ],
     "a": [
      "Yang Ruan",
      "Zhe Ding"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Tera Baccile",
      "Kerry Schaffer"
     ],
     "a": [
      "Stacy Garretson",
      "Jamie Sandman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Katherine Maruyama",
      "Vicki Main"
     ],
     "a": [
      "Jean Wang",
      "Fabienne Yu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Dana Luscombe",
      "Keith Goldberg"
     ],
     "a": [
      "Frank Ding",
      "Yaowen Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jim Darcangelo",
      "Derek Le"
     ],
     "a": [
      "Jack Brod",
      "Wally Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kerry Schaffer",
      "Keith Goldberg"
     ],
     "a": [
      "Jamie Sandman",
      "Jack Brod"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Tera Baccile",
      "Michael Dieterle"
     ],
     "a": [
      "Lily Liu",
      "Albert Pamudji"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Katherine Maruyama",
      "Jim Darcangelo"
     ],
     "a": [
      "Yang Ruan",
      "Zhe Ding"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Harriet Levin",
      "Dana Luscombe"
     ],
     "a": [
      "Stacy Garretson",
      "Yaowen Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Katherine Maruyama",
      "Harriet Levin"
     ],
     "a": [
      "Jean Wang",
      "Stacy Garretson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kerry Schaffer",
      "Vicki Main"
     ],
     "a": [
      "Lily Liu",
      "Fabienne Yu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jim Darcangelo",
      "Michael Dieterle"
     ],
     "a": [
      "Frank Ding",
      "Yaowen Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Dana Luscombe",
      "Derek Le"
     ],
     "a": [
      "Albert Pamudji",
      "Zhe Ding"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Harriet Levin",
      "Keith Goldberg"
     ],
     "a": [
      "Jean Wang",
      "Frank Ding"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Vicki Main",
      "Dana Luscombe"
     ],
     "a": [
      "Jamie Sandman",
      "Jack Brod"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Katherine Maruyama",
      "Michael Dieterle"
     ],
     "a": [
      "Fabienne Yu",
      "Albert Pamudji"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Tera Baccile",
      "Jim Darcangelo"
     ],
     "a": [
      "Lily Liu",
      "Wally Liu"
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
      "Stacy Garretson",
      "Jamie Sandman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Harriet Levin",
      "Kerry Schaffer"
     ],
     "a": [
      "Jean Wang",
      "Yang Ruan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Dana Luscombe",
      "Michael Dieterle"
     ],
     "a": [
      "Jack Brod",
      "Wally Liu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Keith Goldberg",
      "Derek Le"
     ],
     "a": [
      "Yaowen Li",
      "Zhe Ding"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Harriet Levin",
      "Derek Le"
     ],
     "a": [
      "Yang Ruan",
      "Frank Ding"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Katherine Maruyama",
      "Keith Goldberg"
     ],
     "a": [
      "Stacy Garretson",
      "Jack Brod"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Vicki Main",
      "Michael Dieterle"
     ],
     "a": [
      "Jamie Sandman",
      "Yaowen Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Tera Baccile",
      "Jim Darcangelo"
     ],
     "a": [
      "Lily Liu",
      "Albert Pamudji"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Harriet Levin",
      "Tera Baccile"
     ],
     "a": [
      "Stacy Garretson",
      "Jean Wang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Katherine Maruyama",
      "Kerry Schaffer"
     ],
     "a": [
      "Lily Liu",
      "Fabienne Yu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jim Darcangelo",
      "Michael Dieterle"
     ],
     "a": [
      "Yaowen Li",
      "Zhe Ding"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Keith Goldberg",
      "Dana Luscombe"
     ],
     "a": [
      "Frank Ding",
      "Jack Brod"
     ]
    }
   ]
  },
  {
   "result": "home",
   "round": 2,
   "home": "Pickleball Palace",
   "away": "Jersey Pickleball Club",
   "time": "2026-06-06T14:00:00",
   "complete": true,
   "homeSeed": 1,
   "awaySeed": 2,
   "homePoints": 561,
   "awayPoints": 496,
   "homeGW": 23,
   "awayGW": 9,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Carly Pfeffer",
      "Johnson Chang"
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
      "Kelly Hanson Word",
      "Alex Lee"
     ],
     "a": [
      "Eva Danieli",
      "Gary Sidhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kate Curren",
      "Rick Vazquez"
     ],
     "a": [
      "Meryl Nadler",
      "Darren Saks"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Laura Elleman",
      "Charlie Johnston"
     ],
     "a": [
      "Amy Chrebet",
      "Joe Palumbo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kate Curren",
      "Kelly Hanson Word"
     ],
     "a": [
      "Alice Napolitano",
      "Natasha De Carvalho"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Laura Elleman",
      "Rebecca Lederman"
     ],
     "a": [
      "Eva Danieli",
      "Meryl Nadler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Rick Vazquez",
      "Charlie Johnston"
     ],
     "a": [
      "Michael Swell",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Alex Lee",
      "Johnson Chang"
     ],
     "a": [
      "Brad Oldham",
      "Gary Sidhu"
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
      "Alice Napolitano",
      "Michael Swell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Carly Pfeffer",
      "Johnson Chang"
     ],
     "a": [
      "Natasha De Carvalho",
      "Joe Palumbo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Laura Elleman",
      "Rick Vazquez"
     ],
     "a": [
      "Eva Danieli",
      "Darren Saks"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kate Curren",
      "Charlie Johnston"
     ],
     "a": [
      "Meryl Nadler",
      "Gary Sidhu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Rebecca Lederman",
      "Carly Pfeffer"
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
     "as": 18,
     "h": [
      "Laura Elleman",
      "Kelly Hanson Word"
     ],
     "a": [
      "Amy Chrebet",
      "Meryl Nadler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Alex Lee",
      "Rick Vazquez"
     ],
     "a": [
      "Michael Swell",
      "Brad Oldham"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Johnson Chang",
      "Charlie Johnston"
     ],
     "a": [
      "Darren Saks",
      "Gary Sidhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kelly Hanson Word",
      "Rick Vazquez"
     ],
     "a": [
      "Natasha De Carvalho",
      "Gary Sidhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kate Curren",
      "Alex Lee"
     ],
     "a": [
      "Eva Danieli",
      "Brad Oldham"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Rebecca Lederman",
      "Johnson Chang"
     ],
     "a": [
      "Meryl Nadler",
      "Darren Saks"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Laura Elleman",
      "Charlie Johnston"
     ],
     "a": [
      "Amy Chrebet",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Laura Elleman",
      "Kelly Hanson Word"
     ],
     "a": [
      "Eva Danieli",
      "Amy Chrebet"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kate Curren",
      "Carly Pfeffer"
     ],
     "a": [
      "Alice Napolitano",
      "Natasha De Carvalho"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Alex Lee",
      "Rick Vazquez"
     ],
     "a": [
      "Brad Oldham",
      "Darren Saks"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Johnson Chang",
      "Charlie Johnston"
     ],
     "a": [
      "Gary Sidhu",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Kate Curren",
      "Alex Lee"
     ],
     "a": [
      "Alice Napolitano",
      "Gary Sidhu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Rebecca Lederman",
      "Johnson Chang"
     ],
     "a": [
      "Meryl Nadler",
      "Brad Oldham"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kelly Hanson Word",
      "Charlie Johnston"
     ],
     "a": [
      "Natasha De Carvalho",
      "Darren Saks"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Carly Pfeffer",
      "Rick Vazquez"
     ],
     "a": [
      "Amy Chrebet",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "Rebecca Lederman",
      "Carly Pfeffer"
     ],
     "a": [
      "Alice Napolitano",
      "Eva Danieli"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Kate Curren",
      "Kelly Hanson Word"
     ],
     "a": [
      "Natasha De Carvalho",
      "Amy Chrebet"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Alex Lee",
      "Johnson Chang"
     ],
     "a": [
      "Brad Oldham",
      "Darren Saks"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "Charlie Johnston",
      "Rick Vazquez"
     ],
     "a": [
      "Gary Sidhu",
      "Michael Dombrowiecki"
     ]
    }
   ]
  },
  {
   "result": "away",
   "round": 2,
   "home": "ACE",
   "away": "Bounce Malvern",
   "time": "2026-06-06T13:00:00",
   "complete": true,
   "homeSeed": 1,
   "awaySeed": 2,
   "homePoints": 614,
   "awayPoints": 626,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kate Siedell",
      "Marc Harden"
     ],
     "a": [
      "Harriet Levin",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Stacey Frank",
      "Sang Nguyen"
     ],
     "a": [
      "Tera Baccile",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Pam Boyd",
      "Brian Rowan"
     ],
     "a": [
      "Katherine Maruyama",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Elyse Diamond",
      "Robert Finley"
     ],
     "a": [
      "Vicki Main",
      "Michael Dieterle"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Stacey Frank",
      "Pam Boyd"
     ],
     "a": [
      "Harriet Levin",
      "Tera Baccile"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kate Siedell",
      "Donna Taylor"
     ],
     "a": [
      "Katherine Maruyama",
      "Vicki Main"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Brian Rowan",
      "Sang Nguyen"
     ],
     "a": [
      "Keith Goldberg",
      "Derek Le"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "James Shaw",
      "Robert Finley"
     ],
     "a": [
      "Jim Darcangelo",
      "Michael Dieterle"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kate Siedell",
      "Brian Rowan"
     ],
     "a": [
      "Katherine Maruyama",
      "Keith Goldberg"
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
      "Vicki Main",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Elyse Diamond",
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
     "as": 16,
     "h": [
      "Pam Boyd",
      "Sang Nguyen"
     ],
     "a": [
      "Harriet Levin",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Elyse Diamond",
      "Donna Taylor"
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
     "as": 16,
     "h": [
      "Stacey Frank",
      "Kate Siedell"
     ],
     "a": [
      "Vicki Main",
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
      "Michael Dieterle",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "James Shaw",
      "Robert Finley"
     ],
     "a": [
      "Derek Le",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Kate Siedell",
      "Sang Nguyen"
     ],
     "a": [
      "Harriet Levin",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Stacey Frank",
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
     "hs": 12,
     "as": 21,
     "h": [
      "Donna Taylor",
      "James Shaw"
     ],
     "a": [
      "Vicki Main",
      "Michael Dieterle"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Pam Boyd",
      "Marc Harden"
     ],
     "a": [
      "Katherine Maruyama",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Stacey Frank",
      "Pam Boyd"
     ],
     "a": [
      "Vicki Main",
      "Tera Baccile"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kate Siedell",
      "Elyse Diamond"
     ],
     "a": [
      "Harriet Levin",
      "Katherine Maruyama"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Robert Finley",
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
     "as": 18,
     "h": [
      "Sang Nguyen",
      "Brian Rowan"
     ],
     "a": [
      "Michael Dieterle",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Stacey Frank",
      "Sang Nguyen"
     ],
     "a": [
      "Tera Baccile",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Kate Siedell",
      "Marc Harden"
     ],
     "a": [
      "Katherine Maruyama",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Elyse Diamond",
      "Brian Rowan"
     ],
     "a": [
      "Vicki Main",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Pam Boyd",
      "James Shaw"
     ],
     "a": [
      "Harriet Levin",
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
      "Katherine Maruyama",
      "Harriet Levin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Pam Boyd",
      "Donna Taylor"
     ],
     "a": [
      "Vicki Main",
      "Tera Baccile"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Brian Rowan",
      "Robert Finley"
     ],
     "a": [
      "Michael Finkelstein",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "James Shaw",
      "Sang Nguyen"
     ],
     "a": [
      "Michael Dieterle",
      "Keith Goldberg"
     ]
    }
   ]
  },
  {
   "result": "away",
   "round": 3,
   "home": "Pickleball Palace",
   "away": "Bounce Malvern",
   "time": "2026-06-07T09:30:00",
   "complete": true,
   "homeSeed": 1,
   "awaySeed": 2,
   "homePoints": 601,
   "awayPoints": 615,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Andrea Dellechiaie",
      "Rick Vazquez"
     ],
     "a": [
      "Tera Baccile",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Rebecca Lederman",
      "Johnson Chang"
     ],
     "a": [
      "Vicki Main",
      "Dana Luscombe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Kate Curren",
      "Alex Lee"
     ],
     "a": [
      "Harriet Levin",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Carly Pfeffer",
      "Brian Gonzalez"
     ],
     "a": [
      "Katherine Maruyama",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Kate Curren",
      "Kelly Hanson Word"
     ],
     "a": [
      "Harriet Levin",
      "Katherine Maruyama"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Andrea Dellechiaie",
      "Carly Pfeffer"
     ],
     "a": [
      "Tera Baccile",
      "Vicki Main"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Alex Lee",
      "Brian Gonzalez"
     ],
     "a": [
      "Dana Luscombe",
      "Michael Dieterle"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Johnson Chang",
      "Jeffrey Susskind"
     ],
     "a": [
      "Derek Le",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kelly Hanson Word",
      "Johnson Chang"
     ],
     "a": [
      "Vicki Main",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Andrea Dellechiaie",
      "Brian Gonzalez"
     ],
     "a": [
      "Harriet Levin",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Carly Pfeffer",
      "Rick Vazquez"
     ],
     "a": [
      "Katherine Maruyama",
      "Dana Luscombe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Rebecca Lederman",
      "Jeffrey Susskind"
     ],
     "a": [
      "Tera Baccile",
      "Keith Goldberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Carly Pfeffer",
      "Rebecca Lederman"
     ],
     "a": [
      "Vicki Main",
      "Tera Baccile"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Andrea Dellechiaie",
      "Kate Curren"
     ],
     "a": [
      "Harriet Levin",
      "Katherine Maruyama"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Alex Lee",
      "Jeffrey Susskind"
     ],
     "a": [
      "Keith Goldberg",
      "Michael Dieterle"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Brian Gonzalez",
      "Rick Vazquez"
     ],
     "a": [
      "Michael Finkelstein",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Andrea Dellechiaie",
      "Johnson Chang"
     ],
     "a": [
      "Harriet Levin",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Carly Pfeffer",
      "Alex Lee"
     ],
     "a": [
      "Tera Baccile",
      "Dana Luscombe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kelly Hanson Word",
      "Brian Gonzalez"
     ],
     "a": [
      "Katherine Maruyama",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kate Curren",
      "Jeffrey Susskind"
     ],
     "a": [
      "Vicki Main",
      "Michael Dieterle"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Rebecca Lederman",
      "Kelly Hanson Word"
     ],
     "a": [
      "Harriet Levin",
      "Tera Baccile"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Kate Curren",
      "Andrea Dellechiaie"
     ],
     "a": [
      "Katherine Maruyama",
      "Vicki Main"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Jeffrey Susskind",
      "Rick Vazquez"
     ],
     "a": [
      "Derek Le",
      "Keith Goldberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Alex Lee",
      "Johnson Chang"
     ],
     "a": [
      "Dana Luscombe",
      "Michael Dieterle"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kelly Hanson Word",
      "Jeffrey Susskind"
     ],
     "a": [
      "Harriet Levin",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Carly Pfeffer",
      "Rick Vazquez"
     ],
     "a": [
      "Tera Baccile",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Rebecca Lederman",
      "Johnson Chang"
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
     "as": 13,
     "h": [
      "Kate Curren",
      "Alex Lee"
     ],
     "a": [
      "Katherine Maruyama",
      "Dana Luscombe"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Rebecca Lederman",
      "Carly Pfeffer"
     ],
     "a": [
      "Harriet Levin",
      "Tera Baccile"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kate Curren",
      "Kelly Hanson Word"
     ],
     "a": [
      "Katherine Maruyama",
      "Vicki Main"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jeffrey Susskind",
      "Rick Vazquez"
     ],
     "a": [
      "Michael Dieterle",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Alex Lee",
      "Johnson Chang"
     ],
     "a": [
      "Derek Le",
      "Keith Goldberg"
     ]
    }
   ]
  }
 ],
 "extraPlayerIds": {
  "Steven Kops": "18d9c536-09fd-44bd-89d3-c5423785e169",
  "Sandu Cheng": "1ec994f7-6354-4aab-82a5-63ed999fbc33",
  "Jingjing Hu": "2172d778-ce84-454c-bd86-f489f24bb87d",
  "Ayako Caravella": "2a302d21-a60a-4e90-b1e2-c2d1d9036eda",
  "Eric Smith": "3120fa05-d5d9-4b71-a339-4ed92f3e5b06",
  "Ana Bautista": "33692212-f6ed-47f3-bac2-e19da564c0c6",
  "Ed Villaverde": "3edc72f0-c23d-4ad5-9842-cde023cd7514",
  "Michelle Burke": "48ed972d-ae17-408b-860e-6f122d0e4e9b",
  "Kim Hamilton": "4d6a9dce-3c23-4d65-85f9-8b440c44a318",
  "Jason Combes": "5a3ef7a6-3b61-4ca7-bab2-3817194cda35",
  "Prashanth Koshy": "5b619b72-b78a-49ba-872d-c64db6084a67",
  "Elizabeth Cole": "5dfa8ff0-1cdf-494d-8ec9-dcf05872344e",
  "Craig Frame": "6043b3e3-217d-4ad3-bd5d-db9667b99bbc",
  "Guihua Zhang": "81abfb04-0994-4144-9d27-5c37354151cf",
  "Lori Torres": "893ce87e-e2cb-4d82-aa27-d795b1a3fc3f",
  "Patricia Boyle": "9fca325b-c7aa-493e-bd24-a4b782073699",
  "Steve Hong": "a861a127-253c-4cb2-a1d6-93a37558b93a",
  "Liz Aronsohn": "ac7903bb-e0cd-4cc8-ac43-302304114297",
  "Ellen Xu": "b8ecc741-4ae9-4e26-b199-497d34dac2b9",
  "June Lee": "c5098f72-b304-4552-b25b-8f4dec2709e0",
  "Marykristin Haskell": "ecb01f29-37c9-4caa-a023-dc5d2591f375",
  "Helen Wright": "ee62aa79-7513-4fc3-9487-60336bb244e7",
  "Katrina Mcintyre": "eeead4e9-eec9-4cfc-887d-44222225d436",
  "Danielle Harcourt": "f55bf08c-0677-40f3-b7ac-f82ff745c26c",
  "Don Godinez": "f706ae79-d09c-4ad4-ac19-837deb84d36d",
  "Andy Potash": "f78cbd58-f36d-4f67-901d-578ed279c2b8"
 },
 "meta": {
  "matchesPlayed": 72,
  "provisionalMatches": 0,
  "weeks": "1-11",
  "totalPlayers": 277,
  "ratingHistoryWeeks": [
   1,
   2,
   3,
   4,
   5,
   6,
   7,
   8,
   9,
   10,
   11
  ],
  "divisionSlug": "ea8587fb",
  "hasPlayoffs": true,
  "typicalDay": "Sundays",
  "detailFile": "detail-ea8587fb.js",
  "clubName": "",
  "divisionName": "4.0 (50+)",
  "leagueType": "travel",
  "seasonSlug": "2026-spring",
  "seasonLabel": "Spring 2026",
  "seasonStatus": "archived",
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
     "ACE",
     "APC Garden State",
     "Bounce Malvern",
     "Flemington",
     "Monroe",
     "Pickleball Kingdom Hamilton"
    ],
    "North": [
     "Home Court",
     "Jersey Pickleball Club",
     "Montville",
     "Pickleball Kingdom Hillsborough",
     "Pickleball Palace",
     "Stelton Sports"
    ]
   },
   "schedule": {
    "Pod 1": [
     "ACE",
     "APC Garden State",
     "Bounce Malvern",
     "Flemington",
     "Home Court",
     "Jersey Pickleball Club",
     "Monroe",
     "Montville",
     "Pickleball Kingdom Hamilton",
     "Pickleball Kingdom Hillsborough",
     "Pickleball Palace",
     "Stelton Sports"
    ]
   }
  }
 }
};
  DATA.meta.asOf = "2026-08-31T20:20:07.171Z";
  window.DATA = DATA;
  window.CPL_DATASETS = window.CPL_DATASETS || {};
  window.CPL_DATASETS["ea8587fb"] = DATA;
})();
