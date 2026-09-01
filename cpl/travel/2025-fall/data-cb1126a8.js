(function () {
  const DATA = {
 "players": [
  {
   "name": "Kristina Rhodes",
   "gender": "Female",
   "team": "Bounce Malvern Black",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 4,
   "losses": 0,
   "pointsWon": 84,
   "totalPointsAgainst": 52,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "77ecd1c3-b1df-469a-83ba-d12bd56f2c6a",
   "winPct": 100,
   "diff": 32,
   "ppg": 21,
   "leagueRank": 33,
   "rating": -0.5,
   "ratingGames": 4,
   "confidence": 47,
   "strengthOfPartners": 2.6,
   "strengthOfOpponents": -3.2
  },
  {
   "name": "Catherine Spirko",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 2,
   "wins": 2,
   "losses": 0,
   "pointsWon": 42,
   "totalPointsAgainst": 28,
   "mixedWins": 1,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "d97af8f4-53dd-4010-b599-7f6db730bdb3",
   "winPct": 100,
   "diff": 14,
   "ppg": 21,
   "leagueRank": 52,
   "rating": 2.4,
   "ratingGames": 2,
   "confidence": 32,
   "strengthOfPartners": 2.1,
   "strengthOfOpponents": 1.2
  },
  {
   "name": "Annemarie Mccartney",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 26,
   "losses": 2,
   "pointsWon": 584,
   "totalPointsAgainst": 387,
   "mixedWins": 13,
   "mixedLosses": 1,
   "genderWins": 13,
   "genderLosses": 1,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 92.9,
   "diff": 197,
   "ppg": 20.9,
   "leagueRank": 4,
   "rating": 4.9,
   "ratingGames": 28,
   "confidence": 85,
   "strengthOfPartners": 2,
   "strengthOfOpponents": 0.3,
   "playerId": "d08d78db-7d20-4dc2-a37b-41841c4624fd"
  },
  {
   "name": "Keith Goldberg",
   "gender": "Male",
   "team": "Bounce Malvern Black",
   "matches": 12,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 83,
   "wins": 75,
   "losses": 8,
   "pointsWon": 1710,
   "totalPointsAgainst": 1170,
   "mixedWins": 38,
   "mixedLosses": 4,
   "genderWins": 37,
   "genderLosses": 4,
   "clutchWins": 12,
   "clutchLosses": 3,
   "winPct": 90.4,
   "diff": 540,
   "ppg": 20.6,
   "leagueRank": 2,
   "rating": 4.5,
   "ratingGames": 83,
   "confidence": 94,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": 0,
   "playerId": "37a0fa2c-df0b-4d92-900b-a9f20f441ad8"
  },
  {
   "name": "Marc Harden",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 59,
   "wins": 52,
   "losses": 7,
   "pointsWon": 1219,
   "totalPointsAgainst": 888,
   "mixedWins": 33,
   "mixedLosses": 4,
   "genderWins": 19,
   "genderLosses": 3,
   "clutchWins": 10,
   "clutchLosses": 4,
   "winPct": 88.1,
   "diff": 331,
   "ppg": 20.7,
   "leagueRank": 3,
   "rating": 3.6,
   "ratingGames": 59,
   "confidence": 92,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": 0.1,
   "playerId": "55194d2f-f537-4e19-b901-86c559f25ef2"
  },
  {
   "name": "Judy Qiu",
   "gender": "Female",
   "team": "Bounce Malvern Black",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 28,
   "losses": 4,
   "pointsWon": 657,
   "totalPointsAgainst": 437,
   "mixedWins": 14,
   "mixedLosses": 1,
   "genderWins": 14,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 87.5,
   "diff": 220,
   "ppg": 20.5,
   "leagueRank": 1,
   "rating": 2.3,
   "ratingGames": 32,
   "confidence": 87,
   "strengthOfPartners": 2.2,
   "strengthOfOpponents": -1,
   "playerId": "524b4051-2245-4d13-a9ec-2c2aac3ec980"
  },
  {
   "name": "Barrie Arnold",
   "gender": "Male",
   "team": "Flemington",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 166,
   "totalPointsAgainst": 120,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 1,
   "playerId": "fbdb1a8e-6457-42e4-9b4c-3c6dab2e89a7",
   "winPct": 87.5,
   "diff": 46,
   "ppg": 20.8,
   "leagueRank": 68,
   "rating": 2.2,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -1.4
  },
  {
   "name": "Maria Condella",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 166,
   "totalPointsAgainst": 138,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 1,
   "playerId": "20d9b6f9-cf2a-44cd-bcba-552dd2e62b6d",
   "winPct": 87.5,
   "diff": 28,
   "ppg": 20.8,
   "leagueRank": 83,
   "rating": 1.7,
   "ratingGames": 8,
   "confidence": 64,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": 0.3
  },
  {
   "name": "Joe Antico",
   "gender": "Male",
   "team": "Flemington",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 124,
   "totalPointsAgainst": 96,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "f863dc2d-5729-4371-869b-cee2c4287dfd",
   "winPct": 83.3,
   "diff": 28,
   "ppg": 20.7,
   "leagueRank": 82,
   "rating": 2.8,
   "ratingGames": 6,
   "confidence": 57,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.6
  },
  {
   "name": "Frank Clark",
   "gender": "Male",
   "team": "Flemington",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 124,
   "totalPointsAgainst": 99,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "fb42e711-528f-4028-80c6-e32013e3f807",
   "winPct": 83.3,
   "diff": 25,
   "ppg": 20.7,
   "leagueRank": 88,
   "rating": 2.8,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.7
  },
  {
   "name": "Katherine Maruyama",
   "gender": "Female",
   "team": "Bounce Malvern Black",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 71,
   "wins": 59,
   "losses": 12,
   "pointsWon": 1441,
   "totalPointsAgainst": 1071,
   "mixedWins": 34,
   "mixedLosses": 3,
   "genderWins": 25,
   "genderLosses": 9,
   "clutchWins": 12,
   "clutchLosses": 5,
   "winPct": 83.1,
   "diff": 370,
   "ppg": 20.3,
   "leagueRank": 6,
   "rating": 3.6,
   "ratingGames": 71,
   "confidence": 93,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": 0.2,
   "playerId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a"
  },
  {
   "name": "Brian Aguilar",
   "gender": "Male",
   "team": "Bounce Malvern Black",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 45,
   "wins": 37,
   "losses": 8,
   "pointsWon": 912,
   "totalPointsAgainst": 676,
   "mixedWins": 19,
   "mixedLosses": 3,
   "genderWins": 18,
   "genderLosses": 5,
   "clutchWins": 7,
   "clutchLosses": 1,
   "winPct": 82.2,
   "diff": 236,
   "ppg": 20.3,
   "leagueRank": 5,
   "rating": 2,
   "ratingGames": 45,
   "confidence": 90,
   "strengthOfPartners": 2.1,
   "strengthOfOpponents": -0.4,
   "playerId": "e2678d1f-eb49-4c8c-9e0a-36dc9dca5d47"
  },
  {
   "name": "Harriet Levin",
   "gender": "Female",
   "team": "Pickle Place",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 65,
   "wins": 52,
   "losses": 13,
   "pointsWon": 1307,
   "totalPointsAgainst": 1079,
   "mixedWins": 29,
   "mixedLosses": 4,
   "genderWins": 23,
   "genderLosses": 9,
   "clutchWins": 16,
   "clutchLosses": 6,
   "winPct": 80,
   "diff": 228,
   "ppg": 20.1,
   "leagueRank": 8,
   "rating": 3.8,
   "ratingGames": 65,
   "confidence": 92,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.7,
   "playerId": "aeff8297-a479-4b3b-9a49-72c410ac8e26"
  },
  {
   "name": "Brian Rowan",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 16,
   "losses": 4,
   "pointsWon": 406,
   "totalPointsAgainst": 337,
   "mixedWins": 7,
   "mixedLosses": 1,
   "genderWins": 9,
   "genderLosses": 3,
   "clutchWins": 6,
   "clutchLosses": 1,
   "winPct": 80,
   "diff": 69,
   "ppg": 20.3,
   "leagueRank": 53,
   "rating": 2.2,
   "ratingGames": 20,
   "confidence": 81,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": 0.5,
   "playerId": "136b6979-e0f4-4af2-9f5e-949b8d4bf423"
  },
  {
   "name": "James Shaw",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 16,
   "losses": 4,
   "pointsWon": 402,
   "totalPointsAgainst": 345,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 11,
   "genderLosses": 1,
   "clutchWins": 6,
   "clutchLosses": 1,
   "winPct": 80,
   "diff": 57,
   "ppg": 20.1,
   "leagueRank": 61,
   "rating": 1.6,
   "ratingGames": 20,
   "confidence": 81,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.2,
   "playerId": "439e30a7-6097-4e20-8a7b-25c57dd5b5d0"
  },
  {
   "name": "Steve Berman",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 99,
   "totalPointsAgainst": 82,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "7d186c8f-35ce-4094-87a9-664d8bc4d440",
   "winPct": 80,
   "diff": 17,
   "ppg": 19.8,
   "leagueRank": 97,
   "rating": 0,
   "ratingGames": 5,
   "confidence": 49,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": -2.1
  },
  {
   "name": "Susan Debbs",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 23,
   "losses": 6,
   "pointsWon": 578,
   "totalPointsAgainst": 451,
   "mixedWins": 12,
   "mixedLosses": 4,
   "genderWins": 11,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 79.3,
   "diff": 127,
   "ppg": 19.9,
   "leagueRank": 25,
   "rating": 3,
   "ratingGames": 29,
   "confidence": 85,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0.3,
   "playerId": "753dcbff-f1a6-4fb1-97bf-2f76e08df8b9"
  },
  {
   "name": "Yi Gu",
   "gender": "Male",
   "team": "Monroe",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 28,
   "losses": 8,
   "pointsWon": 712,
   "totalPointsAgainst": 578,
   "mixedWins": 9,
   "mixedLosses": 5,
   "genderWins": 19,
   "genderLosses": 3,
   "clutchWins": 6,
   "clutchLosses": 3,
   "winPct": 77.8,
   "diff": 134,
   "ppg": 19.8,
   "leagueRank": 7,
   "rating": 1.8,
   "ratingGames": 36,
   "confidence": 87,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.6,
   "playerId": "0640ecce-0b14-4eac-9cbd-be86592d6102"
  },
  {
   "name": "Kate Curren",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 65,
   "wins": 50,
   "losses": 15,
   "pointsWon": 1290,
   "totalPointsAgainst": 1068,
   "mixedWins": 24,
   "mixedLosses": 7,
   "genderWins": 26,
   "genderLosses": 8,
   "clutchWins": 12,
   "clutchLosses": 7,
   "winPct": 76.9,
   "diff": 222,
   "ppg": 19.8,
   "leagueRank": 17,
   "rating": 3.5,
   "ratingGames": 65,
   "confidence": 92,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.3,
   "playerId": "20e006d9-72f9-4f9e-bad5-750694224782"
  },
  {
   "name": "Jill Scully",
   "gender": "Female",
   "team": "Bounce Malvern Black",
   "matches": 12,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 79,
   "wins": 60,
   "losses": 19,
   "pointsWon": 1546,
   "totalPointsAgainst": 1236,
   "mixedWins": 27,
   "mixedLosses": 10,
   "genderWins": 33,
   "genderLosses": 9,
   "clutchWins": 10,
   "clutchLosses": 3,
   "winPct": 75.9,
   "diff": 310,
   "ppg": 19.6,
   "leagueRank": 9,
   "rating": 1.3,
   "ratingGames": 79,
   "confidence": 94,
   "strengthOfPartners": 2.1,
   "strengthOfOpponents": -0.2,
   "playerId": "754a47b8-0711-4929-928f-9bafe8f9dbc0"
  },
  {
   "name": "Jim Darcangelo",
   "gender": "Male",
   "team": "Bounce Malvern Black",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 72,
   "wins": 54,
   "losses": 18,
   "pointsWon": 1429,
   "totalPointsAgainst": 1182,
   "mixedWins": 27,
   "mixedLosses": 9,
   "genderWins": 27,
   "genderLosses": 9,
   "clutchWins": 15,
   "clutchLosses": 7,
   "winPct": 75,
   "diff": 247,
   "ppg": 19.8,
   "leagueRank": 13,
   "rating": 0.9,
   "ratingGames": 72,
   "confidence": 93,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": -0.3,
   "playerId": "0530512b-466d-4ff7-9e89-7961b4a63110"
  },
  {
   "name": "Jonathan Brand",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 52,
   "wins": 39,
   "losses": 13,
   "pointsWon": 1031,
   "totalPointsAgainst": 833,
   "mixedWins": 15,
   "mixedLosses": 5,
   "genderWins": 24,
   "genderLosses": 8,
   "clutchWins": 7,
   "clutchLosses": 6,
   "winPct": 75,
   "diff": 198,
   "ppg": 19.8,
   "leagueRank": 10,
   "rating": 1.5,
   "ratingGames": 52,
   "confidence": 91,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -0.4,
   "playerId": "3d1b28fd-25f4-4145-bccd-6b25ab627ffe"
  },
  {
   "name": "Jennifer Wang",
   "gender": "Female",
   "team": "Bounce Malvern Black",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 48,
   "wins": 36,
   "losses": 12,
   "pointsWon": 943,
   "totalPointsAgainst": 756,
   "mixedWins": 19,
   "mixedLosses": 6,
   "genderWins": 17,
   "genderLosses": 6,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 75,
   "diff": 187,
   "ppg": 19.6,
   "leagueRank": 14,
   "rating": 2.2,
   "ratingGames": 48,
   "confidence": 91,
   "strengthOfPartners": 2,
   "strengthOfOpponents": 0.2,
   "playerId": "59d2f8a4-3875-4cd2-8245-123b01ea9e22"
  },
  {
   "name": "Kim Hamilton",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 44,
   "wins": 33,
   "losses": 11,
   "pointsWon": 870,
   "totalPointsAgainst": 699,
   "mixedWins": 14,
   "mixedLosses": 6,
   "genderWins": 19,
   "genderLosses": 5,
   "clutchWins": 7,
   "clutchLosses": 2,
   "winPct": 75,
   "diff": 171,
   "ppg": 19.8,
   "leagueRank": 11,
   "rating": 1.3,
   "ratingGames": 44,
   "confidence": 90,
   "strengthOfPartners": 2.1,
   "strengthOfOpponents": -0.2,
   "playerId": "4d6a9dce-3c23-4d65-85f9-8b440c44a318"
  },
  {
   "name": "Karan Pescatore",
   "gender": "Female",
   "team": "Home Court",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 6,
   "losses": 2,
   "pointsWon": 164,
   "totalPointsAgainst": 131,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 2,
   "playerId": "2cb4b2dd-d14b-4bab-a8be-ef4b14845711",
   "winPct": 75,
   "diff": 33,
   "ppg": 20.5,
   "leagueRank": 113,
   "rating": 3.9,
   "ratingGames": 8,
   "confidence": 64,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.7
  },
  {
   "name": "Lynda Tomaru",
   "gender": "Female",
   "team": "Flemington",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 6,
   "losses": 2,
   "pointsWon": 156,
   "totalPointsAgainst": 130,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "2b001a36-d13c-42fa-ae50-c9cc2f1aeb4e",
   "winPct": 75,
   "diff": 26,
   "ppg": 19.5,
   "leagueRank": 123,
   "rating": 4,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 1.6
  },
  {
   "name": "Bennett Shanker",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 55,
   "wins": 41,
   "losses": 14,
   "pointsWon": 1083,
   "totalPointsAgainst": 914,
   "mixedWins": 22,
   "mixedLosses": 7,
   "genderWins": 19,
   "genderLosses": 7,
   "clutchWins": 10,
   "clutchLosses": 6,
   "winPct": 74.5,
   "diff": 169,
   "ppg": 19.7,
   "leagueRank": 18,
   "rating": 0.9,
   "ratingGames": 55,
   "confidence": 91,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": -0.3,
   "playerId": "a86dc96c-b346-460c-a94c-df0551d5027a"
  },
  {
   "name": "Vicki Main",
   "gender": "Female",
   "team": "Bounce Malvern Black",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 31,
   "wins": 23,
   "losses": 8,
   "pointsWon": 624,
   "totalPointsAgainst": 505,
   "mixedWins": 11,
   "mixedLosses": 5,
   "genderWins": 12,
   "genderLosses": 3,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 74.2,
   "diff": 119,
   "ppg": 20.1,
   "leagueRank": 31,
   "rating": 1.4,
   "ratingGames": 31,
   "confidence": 86,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": -0.3,
   "playerId": "89bdcff6-2fba-4bde-b831-872bf9ce7843"
  },
  {
   "name": "Pam Boyd",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 58,
   "wins": 43,
   "losses": 15,
   "pointsWon": 1143,
   "totalPointsAgainst": 920,
   "mixedWins": 18,
   "mixedLosses": 6,
   "genderWins": 25,
   "genderLosses": 9,
   "clutchWins": 6,
   "clutchLosses": 4,
   "winPct": 74.1,
   "diff": 223,
   "ppg": 19.7,
   "leagueRank": 15,
   "rating": 2.2,
   "ratingGames": 58,
   "confidence": 91,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": 0.1,
   "playerId": "04aefa29-20e3-41b7-a680-19d13f9d4289"
  },
  {
   "name": "Thomas Schillow",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 14,
   "losses": 5,
   "pointsWon": 374,
   "totalPointsAgainst": 333,
   "mixedWins": 9,
   "mixedLosses": 1,
   "genderWins": 5,
   "genderLosses": 4,
   "clutchWins": 6,
   "clutchLosses": 3,
   "winPct": 73.7,
   "diff": 41,
   "ppg": 19.7,
   "leagueRank": 79,
   "rating": 2.1,
   "ratingGames": 19,
   "confidence": 80,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 1,
   "playerId": "4ab0fd39-c108-419c-80f8-0dbe37dd75be"
  },
  {
   "name": "Stephanie Woomer",
   "gender": "Female",
   "team": "Bounce Malvern Black",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 64,
   "wins": 47,
   "losses": 17,
   "pointsWon": 1270,
   "totalPointsAgainst": 1028,
   "mixedWins": 22,
   "mixedLosses": 9,
   "genderWins": 25,
   "genderLosses": 8,
   "clutchWins": 11,
   "clutchLosses": 5,
   "winPct": 73.4,
   "diff": 242,
   "ppg": 19.8,
   "leagueRank": 16,
   "rating": 2.2,
   "ratingGames": 64,
   "confidence": 92,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": 0.3,
   "playerId": "e05f57f5-c898-404e-b86f-c2460cc23b06"
  },
  {
   "name": "Vita Mulholland",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 11,
   "losses": 4,
   "pointsWon": 299,
   "totalPointsAgainst": 253,
   "mixedWins": 7,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 2,
   "playerId": "fe0555e5-2ec9-4dc2-a44b-4017d5afbb41",
   "winPct": 73.3,
   "diff": 46,
   "ppg": 19.9,
   "leagueRank": 87,
   "rating": -0.4,
   "ratingGames": 15,
   "confidence": 76,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": -1
  },
  {
   "name": "Brad Daddis",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 63,
   "wins": 46,
   "losses": 17,
   "pointsWon": 1258,
   "totalPointsAgainst": 1009,
   "mixedWins": 31,
   "mixedLosses": 10,
   "genderWins": 15,
   "genderLosses": 7,
   "clutchWins": 13,
   "clutchLosses": 7,
   "winPct": 73,
   "diff": 249,
   "ppg": 20,
   "leagueRank": 12,
   "rating": 1.4,
   "ratingGames": 63,
   "confidence": 92,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": -0.4,
   "playerId": "3b22e073-2c4b-4245-a142-29441ec509a3"
  },
  {
   "name": "Eric Luque",
   "gender": "Male",
   "team": "Flemington",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 59,
   "wins": 43,
   "losses": 16,
   "pointsWon": 1180,
   "totalPointsAgainst": 995,
   "mixedWins": 21,
   "mixedLosses": 8,
   "genderWins": 22,
   "genderLosses": 8,
   "clutchWins": 9,
   "clutchLosses": 8,
   "winPct": 72.9,
   "diff": 185,
   "ppg": 20,
   "leagueRank": 26,
   "rating": 3.4,
   "ratingGames": 59,
   "confidence": 92,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.7,
   "playerId": "b3c28078-ab31-4002-9e09-5fa3f627d8c1"
  },
  {
   "name": "Derek Le",
   "gender": "Male",
   "team": "Bounce Malvern Black",
   "matches": 12,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 77,
   "wins": 56,
   "losses": 21,
   "pointsWon": 1525,
   "totalPointsAgainst": 1271,
   "mixedWins": 27,
   "mixedLosses": 10,
   "genderWins": 29,
   "genderLosses": 11,
   "clutchWins": 14,
   "clutchLosses": 7,
   "winPct": 72.7,
   "diff": 254,
   "ppg": 19.8,
   "leagueRank": 19,
   "rating": 1.2,
   "ratingGames": 77,
   "confidence": 93,
   "strengthOfPartners": 2,
   "strengthOfOpponents": 0,
   "playerId": "8cf7b40c-ed2c-4c8b-83bd-b9f2d486c690"
  },
  {
   "name": "Guy Ohn",
   "gender": "Male",
   "team": "Monroe",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 66,
   "wins": 48,
   "losses": 18,
   "pointsWon": 1328,
   "totalPointsAgainst": 1122,
   "mixedWins": 26,
   "mixedLosses": 9,
   "genderWins": 22,
   "genderLosses": 9,
   "clutchWins": 18,
   "clutchLosses": 9,
   "winPct": 72.7,
   "diff": 206,
   "ppg": 20.1,
   "leagueRank": 21,
   "rating": 2.8,
   "ratingGames": 66,
   "confidence": 92,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0,
   "playerId": "f394b637-236e-4fee-b26f-374c90c3dd1e"
  },
  {
   "name": "Rick Vazquez",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 8,
   "losses": 3,
   "pointsWon": 209,
   "totalPointsAgainst": 196,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "e532dafb-ff0f-43fc-82be-687d34ab8c14",
   "winPct": 72.7,
   "diff": 13,
   "ppg": 19,
   "leagueRank": 124,
   "rating": 1.5,
   "ratingGames": 11,
   "confidence": 69,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.6
  },
  {
   "name": "Elyse Diamond",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 68,
   "wins": 49,
   "losses": 19,
   "pointsWon": 1346,
   "totalPointsAgainst": 1131,
   "mixedWins": 28,
   "mixedLosses": 8,
   "genderWins": 21,
   "genderLosses": 11,
   "clutchWins": 12,
   "clutchLosses": 10,
   "winPct": 72.1,
   "diff": 215,
   "ppg": 19.8,
   "leagueRank": 23,
   "rating": 1.6,
   "ratingGames": 68,
   "confidence": 93,
   "strengthOfPartners": 2.2,
   "strengthOfOpponents": 0.4,
   "playerId": "a0c9637b-5b23-4797-a46a-d2df7bb0fae9"
  },
  {
   "name": "Jingwei Wu",
   "gender": "Male",
   "team": "Bounce Malvern Black",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 56,
   "wins": 40,
   "losses": 16,
   "pointsWon": 1098,
   "totalPointsAgainst": 894,
   "mixedWins": 18,
   "mixedLosses": 9,
   "genderWins": 22,
   "genderLosses": 7,
   "clutchWins": 8,
   "clutchLosses": 5,
   "winPct": 71.4,
   "diff": 204,
   "ppg": 19.6,
   "leagueRank": 22,
   "rating": 2.4,
   "ratingGames": 56,
   "confidence": 91,
   "strengthOfPartners": 2.3,
   "strengthOfOpponents": 0.6,
   "playerId": "58e052c4-6ab5-46a7-8e6c-6c7a465262e5"
  },
  {
   "name": "Sang Nguyen",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 137,
   "totalPointsAgainst": 119,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "1f55ceb7-f7b1-4cfe-ab53-ab6c831c604e",
   "winPct": 71.4,
   "diff": 18,
   "ppg": 19.6,
   "leagueRank": 132,
   "rating": 3.1,
   "ratingGames": 7,
   "confidence": 61,
   "strengthOfPartners": 2.3,
   "strengthOfOpponents": 2.3
  },
  {
   "name": "Melissa Bordman",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 137,
   "totalPointsAgainst": 123,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "edf270e3-c264-4bde-9730-d91d8853c9e0",
   "winPct": 71.4,
   "diff": 14,
   "ppg": 19.6,
   "leagueRank": 128,
   "rating": -0.5,
   "ratingGames": 7,
   "confidence": 61,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -1.5
  },
  {
   "name": "Stacey Frank",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 52,
   "wins": 37,
   "losses": 15,
   "pointsWon": 1041,
   "totalPointsAgainst": 883,
   "mixedWins": 17,
   "mixedLosses": 8,
   "genderWins": 20,
   "genderLosses": 7,
   "clutchWins": 9,
   "clutchLosses": 10,
   "winPct": 71.2,
   "diff": 158,
   "ppg": 20,
   "leagueRank": 24,
   "rating": 1,
   "ratingGames": 52,
   "confidence": 91,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": -0.2,
   "playerId": "768c88bd-683d-4204-8124-a589c8028b6e"
  },
  {
   "name": "Kate Siedell",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 13,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 90,
   "wins": 64,
   "losses": 26,
   "pointsWon": 1795,
   "totalPointsAgainst": 1481,
   "mixedWins": 33,
   "mixedLosses": 16,
   "genderWins": 31,
   "genderLosses": 10,
   "clutchWins": 10,
   "clutchLosses": 12,
   "winPct": 71.1,
   "diff": 314,
   "ppg": 19.9,
   "leagueRank": 20,
   "rating": 2.2,
   "ratingGames": 90,
   "confidence": 94,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.1,
   "playerId": "8decf039-f1e5-4182-b3cf-6756789ae87a"
  },
  {
   "name": "Michael Finkelstein",
   "gender": "Male",
   "team": "Bounce Malvern Black",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 51,
   "wins": 36,
   "losses": 15,
   "pointsWon": 1003,
   "totalPointsAgainst": 855,
   "mixedWins": 21,
   "mixedLosses": 7,
   "genderWins": 15,
   "genderLosses": 8,
   "clutchWins": 9,
   "clutchLosses": 4,
   "winPct": 70.6,
   "diff": 148,
   "ppg": 19.7,
   "leagueRank": 27,
   "rating": 0.6,
   "ratingGames": 51,
   "confidence": 91,
   "strengthOfPartners": 2.1,
   "strengthOfOpponents": -0.1,
   "playerId": "861c3f68-2c96-4a96-a75e-645020f73a5c"
  },
  {
   "name": "Roger Graterol",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 51,
   "wins": 36,
   "losses": 15,
   "pointsWon": 1004,
   "totalPointsAgainst": 858,
   "mixedWins": 16,
   "mixedLosses": 8,
   "genderWins": 20,
   "genderLosses": 7,
   "clutchWins": 8,
   "clutchLosses": 8,
   "winPct": 70.6,
   "diff": 146,
   "ppg": 19.7,
   "leagueRank": 28,
   "rating": 2,
   "ratingGames": 51,
   "confidence": 91,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": 0.5,
   "playerId": "23262a95-4498-4ca1-87a9-713c02337168"
  },
  {
   "name": "Cynthia Eisen",
   "gender": "Female",
   "team": "Pickle Place",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 19,
   "losses": 8,
   "pointsWon": 516,
   "totalPointsAgainst": 464,
   "mixedWins": 6,
   "mixedLosses": 5,
   "genderWins": 13,
   "genderLosses": 3,
   "clutchWins": 9,
   "clutchLosses": 1,
   "winPct": 70.4,
   "diff": 52,
   "ppg": 19.1,
   "leagueRank": 47,
   "rating": 1.4,
   "ratingGames": 27,
   "confidence": 84,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.3,
   "playerId": "4c762958-33e1-4b41-8077-424cb639af7e"
  },
  {
   "name": "Alex Lee",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 14,
   "losses": 6,
   "pointsWon": 396,
   "totalPointsAgainst": 346,
   "mixedWins": 8,
   "mixedLosses": 3,
   "genderWins": 6,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 70,
   "diff": 50,
   "ppg": 19.8,
   "leagueRank": 80,
   "rating": 1.7,
   "ratingGames": 20,
   "confidence": 81,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0.5,
   "playerId": "22e2201d-16d7-4474-847b-5f4f0cef44e6"
  },
  {
   "name": "Chanda Mccoy",
   "gender": "Female",
   "team": "Flemington",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 16,
   "losses": 7,
   "pointsWon": 451,
   "totalPointsAgainst": 389,
   "mixedWins": 9,
   "mixedLosses": 3,
   "genderWins": 7,
   "genderLosses": 4,
   "clutchWins": 5,
   "clutchLosses": 3,
   "winPct": 69.6,
   "diff": 62,
   "ppg": 19.6,
   "leagueRank": 64,
   "rating": 2.6,
   "ratingGames": 23,
   "confidence": 83,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.2,
   "playerId": "30cb78cb-f962-40f9-bd02-78d336920431"
  },
  {
   "name": "Tom Zentmeyer",
   "gender": "Male",
   "team": "Pickle Place",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 72,
   "wins": 49,
   "losses": 23,
   "pointsWon": 1420,
   "totalPointsAgainst": 1199,
   "mixedWins": 25,
   "mixedLosses": 11,
   "genderWins": 24,
   "genderLosses": 12,
   "clutchWins": 10,
   "clutchLosses": 13,
   "winPct": 68.1,
   "diff": 221,
   "ppg": 19.7,
   "leagueRank": 32,
   "rating": 2.4,
   "ratingGames": 72,
   "confidence": 92,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.3,
   "playerId": "c16d16f0-3cc1-4c9d-8bfb-98615ffeaacd"
  },
  {
   "name": "Brian Gonzalez",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 19,
   "losses": 9,
   "pointsWon": 528,
   "totalPointsAgainst": 499,
   "mixedWins": 7,
   "mixedLosses": 6,
   "genderWins": 12,
   "genderLosses": 3,
   "clutchWins": 6,
   "clutchLosses": 3,
   "winPct": 67.9,
   "diff": 29,
   "ppg": 18.9,
   "leagueRank": 58,
   "rating": 1,
   "ratingGames": 28,
   "confidence": 85,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.3,
   "playerId": "ecc02ab8-5e9c-4950-89b7-be3f397683c3"
  },
  {
   "name": "Jill Lesnik",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 25,
   "losses": 12,
   "pointsWon": 723,
   "totalPointsAgainst": 601,
   "mixedWins": 7,
   "mixedLosses": 7,
   "genderWins": 18,
   "genderLosses": 5,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 67.6,
   "diff": 122,
   "ppg": 19.5,
   "leagueRank": 29,
   "rating": 1.6,
   "ratingGames": 37,
   "confidence": 88,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.5,
   "playerId": "340fe4f1-f3ed-4fb1-9ba3-74752ee1d864"
  },
  {
   "name": "Laura Kang",
   "gender": "Female",
   "team": "Pickle Place",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 23,
   "losses": 11,
   "pointsWon": 666,
   "totalPointsAgainst": 610,
   "mixedWins": 11,
   "mixedLosses": 6,
   "genderWins": 12,
   "genderLosses": 5,
   "clutchWins": 10,
   "clutchLosses": 4,
   "winPct": 67.6,
   "diff": 56,
   "ppg": 19.6,
   "leagueRank": 35,
   "rating": 0.9,
   "ratingGames": 34,
   "confidence": 88,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.3,
   "playerId": "5aaea21a-7e11-4168-8192-89c4c134e1d4"
  },
  {
   "name": "Marr Flores",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 31,
   "losses": 15,
   "pointsWon": 880,
   "totalPointsAgainst": 820,
   "mixedWins": 12,
   "mixedLosses": 11,
   "genderWins": 19,
   "genderLosses": 4,
   "clutchWins": 10,
   "clutchLosses": 3,
   "winPct": 67.4,
   "diff": 60,
   "ppg": 19.1,
   "leagueRank": 39,
   "rating": 1.1,
   "ratingGames": 46,
   "confidence": 89,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.2,
   "playerId": "1009522f-1f54-4cf1-a0a0-e24ad64f4a66"
  },
  {
   "name": "Karen Moliver",
   "gender": "Female",
   "team": "Bounce Malvern Black",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 55,
   "wins": 37,
   "losses": 18,
   "pointsWon": 1068,
   "totalPointsAgainst": 901,
   "mixedWins": 19,
   "mixedLosses": 8,
   "genderWins": 18,
   "genderLosses": 10,
   "clutchWins": 8,
   "clutchLosses": 8,
   "winPct": 67.3,
   "diff": 167,
   "ppg": 19.4,
   "leagueRank": 30,
   "rating": 0.7,
   "ratingGames": 55,
   "confidence": 91,
   "strengthOfPartners": 2.3,
   "strengthOfOpponents": 0,
   "playerId": "6412a5fc-5f1f-4dcf-a1b9-c1838eeabec9"
  },
  {
   "name": "Andrea Dellechiaie",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 18,
   "losses": 9,
   "pointsWon": 528,
   "totalPointsAgainst": 456,
   "mixedWins": 8,
   "mixedLosses": 3,
   "genderWins": 10,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 66.7,
   "diff": 72,
   "ppg": 19.6,
   "leagueRank": 46,
   "rating": 1.8,
   "ratingGames": 27,
   "confidence": 84,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.5,
   "playerId": "84e4d40d-3b98-4822-b073-e9dc71c0d4d7"
  },
  {
   "name": "Darren Saks",
   "gender": "Male",
   "team": "The Atlantic Club",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 26,
   "losses": 13,
   "pointsWon": 768,
   "totalPointsAgainst": 713,
   "mixedWins": 13,
   "mixedLosses": 7,
   "genderWins": 13,
   "genderLosses": 6,
   "clutchWins": 11,
   "clutchLosses": 7,
   "winPct": 66.7,
   "diff": 55,
   "ppg": 19.7,
   "leagueRank": 37,
   "rating": 0.7,
   "ratingGames": 39,
   "confidence": 89,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.4,
   "playerId": "9bf7b8ab-4dfa-442b-be12-77580a5ea1dc"
  },
  {
   "name": "Wolfgang Chincarini",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 33,
   "wins": 22,
   "losses": 11,
   "pointsWon": 636,
   "totalPointsAgainst": 602,
   "mixedWins": 11,
   "mixedLosses": 6,
   "genderWins": 11,
   "genderLosses": 5,
   "clutchWins": 8,
   "clutchLosses": 3,
   "winPct": 66.7,
   "diff": 34,
   "ppg": 19.3,
   "leagueRank": 42,
   "rating": 1.4,
   "ratingGames": 33,
   "confidence": 87,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": -0.4,
   "playerId": "e31476db-1f0b-44e3-b3da-a5bc2c8dbc62"
  },
  {
   "name": "Jean Wang",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 10,
   "losses": 5,
   "pointsWon": 296,
   "totalPointsAgainst": 265,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 4,
   "clutchLosses": 2,
   "playerId": "1188fc00-7ef5-4671-9ef9-2c7d162a2604",
   "winPct": 66.7,
   "diff": 31,
   "ppg": 19.7,
   "leagueRank": 127,
   "rating": 3.6,
   "ratingGames": 15,
   "confidence": 74,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 1.2
  },
  {
   "name": "Liz Cuozzo",
   "gender": "Female",
   "team": "The Atlantic Club",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 21,
   "losses": 11,
   "pointsWon": 636,
   "totalPointsAgainst": 590,
   "mixedWins": 10,
   "mixedLosses": 6,
   "genderWins": 11,
   "genderLosses": 5,
   "clutchWins": 7,
   "clutchLosses": 6,
   "winPct": 65.6,
   "diff": 46,
   "ppg": 19.9,
   "leagueRank": 36,
   "rating": 0.1,
   "ratingGames": 32,
   "confidence": 86,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.4,
   "playerId": "2b2d474d-281c-42d7-854b-6bfe32f20563"
  },
  {
   "name": "Jeff Lorman",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 12,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 75,
   "wins": 49,
   "losses": 26,
   "pointsWon": 1462,
   "totalPointsAgainst": 1313,
   "mixedWins": 22,
   "mixedLosses": 10,
   "genderWins": 27,
   "genderLosses": 16,
   "clutchWins": 13,
   "clutchLosses": 9,
   "winPct": 65.3,
   "diff": 149,
   "ppg": 19.5,
   "leagueRank": 34,
   "rating": 0.1,
   "ratingGames": 75,
   "confidence": 93,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": 0,
   "playerId": "75789bbc-0dde-460e-b905-7bd1189c6a90"
  },
  {
   "name": "Janine Forrest",
   "gender": "Female",
   "team": "Pickle Place",
   "matches": 12,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 69,
   "wins": 45,
   "losses": 24,
   "pointsWon": 1327,
   "totalPointsAgainst": 1234,
   "mixedWins": 16,
   "mixedLosses": 10,
   "genderWins": 29,
   "genderLosses": 14,
   "clutchWins": 14,
   "clutchLosses": 8,
   "winPct": 65.2,
   "diff": 93,
   "ppg": 19.2,
   "leagueRank": 40,
   "rating": 0.8,
   "ratingGames": 69,
   "confidence": 92,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.1,
   "playerId": "dd30bbd2-24c2-431a-8b21-2de326c75ab3"
  },
  {
   "name": "Charlie Johnston",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 45,
   "wins": 29,
   "losses": 16,
   "pointsWon": 870,
   "totalPointsAgainst": 802,
   "mixedWins": 14,
   "mixedLosses": 6,
   "genderWins": 15,
   "genderLosses": 10,
   "clutchWins": 8,
   "clutchLosses": 6,
   "winPct": 64.4,
   "diff": 68,
   "ppg": 19.3,
   "leagueRank": 38,
   "rating": 0.4,
   "ratingGames": 45,
   "confidence": 89,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.5,
   "playerId": "1bad49ab-f2b8-439b-9e4b-3ff3cb8ca325"
  },
  {
   "name": "Craig Frame",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 9,
   "losses": 5,
   "pointsWon": 263,
   "totalPointsAgainst": 227,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 7,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "6043b3e3-217d-4ad3-bd5d-db9667b99bbc",
   "winPct": 64.3,
   "diff": 36,
   "ppg": 18.8,
   "leagueRank": 119,
   "rating": 0.9,
   "ratingGames": 14,
   "confidence": 75,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0
  },
  {
   "name": "Nissim Fadida",
   "gender": "Male",
   "team": "Monroe",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 9,
   "losses": 5,
   "pointsWon": 277,
   "totalPointsAgainst": 260,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 3,
   "playerId": "bc812947-abde-46ce-9f6a-ab6475fbbf99",
   "winPct": 64.3,
   "diff": 17,
   "ppg": 19.8,
   "leagueRank": 122,
   "rating": 0.1,
   "ratingGames": 14,
   "confidence": 74,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.6
  },
  {
   "name": "Nina Hallard",
   "gender": "Female",
   "team": "Monroe",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 148,
   "totalPointsAgainst": 140,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "d30f13b3-861e-47fc-9045-7c351fd3918b",
   "winPct": 62.5,
   "diff": 8,
   "ppg": 18.5,
   "leagueRank": 154,
   "rating": 1.1,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.1
  },
  {
   "name": "Sue Johnson",
   "gender": "Female",
   "team": "Flemington",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 15,
   "losses": 9,
   "pointsWon": 447,
   "totalPointsAgainst": 446,
   "mixedWins": 9,
   "mixedLosses": 5,
   "genderWins": 6,
   "genderLosses": 4,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 62.5,
   "diff": 1,
   "ppg": 18.6,
   "leagueRank": 104,
   "rating": 0.1,
   "ratingGames": 24,
   "confidence": 83,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.3,
   "playerId": "c6046610-1dba-4bad-bc89-57e5baa0983f"
  },
  {
   "name": "Barbara Hess",
   "gender": "Female",
   "team": "Monroe",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 61,
   "wins": 38,
   "losses": 23,
   "pointsWon": 1176,
   "totalPointsAgainst": 1060,
   "mixedWins": 20,
   "mixedLosses": 11,
   "genderWins": 18,
   "genderLosses": 12,
   "clutchWins": 13,
   "clutchLosses": 7,
   "winPct": 62.3,
   "diff": 116,
   "ppg": 19.3,
   "leagueRank": 41,
   "rating": 2.1,
   "ratingGames": 61,
   "confidence": 92,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.2,
   "playerId": "21baa2cb-e882-442e-a5e0-a6d88126c9c3"
  },
  {
   "name": "Marykristin Haskell",
   "gender": "Female",
   "team": "Pickle Place",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 26,
   "losses": 16,
   "pointsWon": 798,
   "totalPointsAgainst": 731,
   "mixedWins": 15,
   "mixedLosses": 8,
   "genderWins": 11,
   "genderLosses": 8,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 61.9,
   "diff": 67,
   "ppg": 19,
   "leagueRank": 43,
   "rating": 1,
   "ratingGames": 42,
   "confidence": 89,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.1,
   "playerId": "ecb01f29-37c9-4caa-a023-dc5d2591f375"
  },
  {
   "name": "Carly Pfeffer",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 21,
   "losses": 13,
   "pointsWon": 636,
   "totalPointsAgainst": 594,
   "mixedWins": 10,
   "mixedLosses": 7,
   "genderWins": 11,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 61.8,
   "diff": 42,
   "ppg": 18.7,
   "leagueRank": 48,
   "rating": 1.2,
   "ratingGames": 34,
   "confidence": 87,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.8,
   "playerId": "387e74d4-66ee-4a52-a4ac-aae3dbe1d21b"
  },
  {
   "name": "Alice Napolitano",
   "gender": "Female",
   "team": "The Atlantic Club",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 62,
   "wins": 38,
   "losses": 24,
   "pointsWon": 1211,
   "totalPointsAgainst": 1135,
   "mixedWins": 16,
   "mixedLosses": 15,
   "genderWins": 22,
   "genderLosses": 9,
   "clutchWins": 18,
   "clutchLosses": 9,
   "winPct": 61.3,
   "diff": 76,
   "ppg": 19.5,
   "leagueRank": 45,
   "rating": 1.6,
   "ratingGames": 62,
   "confidence": 92,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.3,
   "playerId": "d56483b8-a5b8-4c1f-8437-39fcf90a5030"
  },
  {
   "name": "Robert Grath",
   "gender": "Male",
   "team": "Flemington",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 12,
   "losses": 8,
   "pointsWon": 393,
   "totalPointsAgainst": 355,
   "mixedWins": 5,
   "mixedLosses": 4,
   "genderWins": 7,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 7,
   "winPct": 60,
   "diff": 38,
   "ppg": 19.7,
   "leagueRank": 107,
   "rating": 1.3,
   "ratingGames": 20,
   "confidence": 80,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.2,
   "playerId": "84a2c937-4d39-4cdb-ac30-cc34bf67eae8"
  },
  {
   "name": "David Coleman",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 15,
   "losses": 10,
   "pointsWon": 472,
   "totalPointsAgainst": 438,
   "mixedWins": 8,
   "mixedLosses": 6,
   "genderWins": 7,
   "genderLosses": 4,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 60,
   "diff": 34,
   "ppg": 18.9,
   "leagueRank": 91,
   "rating": 0.8,
   "ratingGames": 25,
   "confidence": 84,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.1,
   "playerId": "ec3ddbcf-c126-4225-901a-c3c3a9ac479b"
  },
  {
   "name": "Amy Chrebet",
   "gender": "Female",
   "team": "Monroe",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 12,
   "losses": 8,
   "pointsWon": 375,
   "totalPointsAgainst": 356,
   "mixedWins": 7,
   "mixedLosses": 4,
   "genderWins": 5,
   "genderLosses": 4,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 60,
   "diff": 19,
   "ppg": 18.8,
   "leagueRank": 120,
   "rating": -0.2,
   "ratingGames": 20,
   "confidence": 81,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.3,
   "playerId": "6f511e98-567a-4b33-8831-ed123f01f952"
  },
  {
   "name": "Mike Giampapa",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 13,
   "losses": 9,
   "pointsWon": 399,
   "totalPointsAgainst": 395,
   "mixedWins": 5,
   "mixedLosses": 6,
   "genderWins": 8,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 59.1,
   "diff": 4,
   "ppg": 18.1,
   "leagueRank": 108,
   "rating": -1,
   "ratingGames": 22,
   "confidence": 82,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.8,
   "playerId": "61488bc4-71af-4dda-8031-5938382529e5"
  },
  {
   "name": "Eric Markowitz",
   "gender": "Male",
   "team": "Pickle Place",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 23,
   "losses": 16,
   "pointsWon": 741,
   "totalPointsAgainst": 681,
   "mixedWins": 11,
   "mixedLosses": 9,
   "genderWins": 12,
   "genderLosses": 7,
   "clutchWins": 3,
   "clutchLosses": 8,
   "winPct": 59,
   "diff": 60,
   "ppg": 19,
   "leagueRank": 44,
   "rating": -0.3,
   "ratingGames": 39,
   "confidence": 89,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.5,
   "playerId": "5a16df6a-43c6-40a7-bfe7-52e5e2ad1948"
  },
  {
   "name": "Aimee Castellano",
   "gender": "Female",
   "team": "Flemington",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 63,
   "wins": 37,
   "losses": 26,
   "pointsWon": 1211,
   "totalPointsAgainst": 1117,
   "mixedWins": 20,
   "mixedLosses": 11,
   "genderWins": 17,
   "genderLosses": 15,
   "clutchWins": 10,
   "clutchLosses": 13,
   "winPct": 58.7,
   "diff": 94,
   "ppg": 19.2,
   "leagueRank": 50,
   "rating": 2.3,
   "ratingGames": 63,
   "confidence": 92,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.8,
   "playerId": "e76985fb-efd1-4180-a340-e4f36abbc8b4"
  },
  {
   "name": "Janet Garrity",
   "gender": "Female",
   "team": "Pickle Place",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 48,
   "wins": 28,
   "losses": 20,
   "pointsWon": 921,
   "totalPointsAgainst": 867,
   "mixedWins": 11,
   "mixedLosses": 14,
   "genderWins": 17,
   "genderLosses": 6,
   "clutchWins": 10,
   "clutchLosses": 9,
   "winPct": 58.3,
   "diff": 54,
   "ppg": 19.2,
   "leagueRank": 49,
   "rating": -0.1,
   "ratingGames": 48,
   "confidence": 90,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.3,
   "playerId": "e687e44a-22a6-4f8e-a3ac-b328fae537c3"
  },
  {
   "name": "Louis Vessichelli",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 31,
   "wins": 18,
   "losses": 13,
   "pointsWon": 560,
   "totalPointsAgainst": 587,
   "mixedWins": 8,
   "mixedLosses": 5,
   "genderWins": 10,
   "genderLosses": 8,
   "clutchWins": 9,
   "clutchLosses": 4,
   "winPct": 58.1,
   "diff": -27,
   "ppg": 18.1,
   "leagueRank": 100,
   "rating": -0.1,
   "ratingGames": 31,
   "confidence": 86,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.8,
   "playerId": "cb8c8404-c482-4fe5-bd01-35b348fccfd4"
  },
  {
   "name": "John Burke",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 22,
   "losses": 16,
   "pointsWon": 717,
   "totalPointsAgainst": 716,
   "mixedWins": 8,
   "mixedLosses": 9,
   "genderWins": 14,
   "genderLosses": 7,
   "clutchWins": 12,
   "clutchLosses": 6,
   "winPct": 57.9,
   "diff": 1,
   "ppg": 18.9,
   "leagueRank": 63,
   "rating": 0.4,
   "ratingGames": 38,
   "confidence": 88,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.3,
   "playerId": "31e2f010-7d86-4706-a172-d0936f4421f0"
  },
  {
   "name": "Bud Heller",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 47,
   "wins": 27,
   "losses": 20,
   "pointsWon": 887,
   "totalPointsAgainst": 862,
   "mixedWins": 13,
   "mixedLosses": 12,
   "genderWins": 14,
   "genderLosses": 8,
   "clutchWins": 11,
   "clutchLosses": 10,
   "winPct": 57.4,
   "diff": 25,
   "ppg": 18.9,
   "leagueRank": 60,
   "rating": 1.1,
   "ratingGames": 47,
   "confidence": 90,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.5,
   "playerId": "9282b1b2-6551-481c-b9b8-2a246a49a621"
  },
  {
   "name": "Todd Mitchell",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 127,
   "totalPointsAgainst": 133,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "164bf044-d118-4bee-8bd6-d0bad38b79ea",
   "winPct": 57.1,
   "diff": -6,
   "ppg": 18.1,
   "leagueRank": 179,
   "rating": 1,
   "ratingGames": 7,
   "confidence": 61,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 1.4
  },
  {
   "name": "Eva Danieli",
   "gender": "Female",
   "team": "The Atlantic Club",
   "matches": 13,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 100,
   "wins": 57,
   "losses": 43,
   "pointsWon": 1880,
   "totalPointsAgainst": 1805,
   "mixedWins": 26,
   "mixedLosses": 25,
   "genderWins": 31,
   "genderLosses": 18,
   "clutchWins": 21,
   "clutchLosses": 12,
   "winPct": 57,
   "diff": 75,
   "ppg": 18.8,
   "leagueRank": 59,
   "rating": 1.1,
   "ratingGames": 100,
   "confidence": 94,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.2,
   "playerId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae"
  },
  {
   "name": "Janet Bellaran",
   "gender": "Female",
   "team": "The Atlantic Club",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 58,
   "wins": 33,
   "losses": 25,
   "pointsWon": 1087,
   "totalPointsAgainst": 1046,
   "mixedWins": 15,
   "mixedLosses": 13,
   "genderWins": 18,
   "genderLosses": 12,
   "clutchWins": 10,
   "clutchLosses": 9,
   "winPct": 56.9,
   "diff": 41,
   "ppg": 18.7,
   "leagueRank": 57,
   "rating": 0.2,
   "ratingGames": 58,
   "confidence": 91,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.2,
   "playerId": "78d7b1d3-6b6c-4dde-a94f-5d4056b33ee7"
  },
  {
   "name": "Z Zhang",
   "gender": "Male",
   "team": "Pickle Place",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 53,
   "wins": 30,
   "losses": 23,
   "pointsWon": 1022,
   "totalPointsAgainst": 984,
   "mixedWins": 14,
   "mixedLosses": 9,
   "genderWins": 16,
   "genderLosses": 14,
   "clutchWins": 10,
   "clutchLosses": 13,
   "winPct": 56.6,
   "diff": 38,
   "ppg": 19.3,
   "leagueRank": 54,
   "rating": 0.2,
   "ratingGames": 53,
   "confidence": 91,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.2,
   "playerId": "95982984-9054-491c-a5a5-b5592c5f02a4"
  },
  {
   "name": "Jonathan Goldner",
   "gender": "Male",
   "team": "Pickle Place",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 64,
   "wins": 36,
   "losses": 28,
   "pointsWon": 1220,
   "totalPointsAgainst": 1120,
   "mixedWins": 14,
   "mixedLosses": 13,
   "genderWins": 22,
   "genderLosses": 15,
   "clutchWins": 6,
   "clutchLosses": 10,
   "winPct": 56.3,
   "diff": 100,
   "ppg": 19.1,
   "leagueRank": 51,
   "rating": 0.9,
   "ratingGames": 64,
   "confidence": 92,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0,
   "playerId": "5142be9e-adb4-4f40-8632-1f6daa6d824b"
  },
  {
   "name": "Kristen Soucie",
   "gender": "Female",
   "team": "Flemington",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 48,
   "wins": 27,
   "losses": 21,
   "pointsWon": 920,
   "totalPointsAgainst": 886,
   "mixedWins": 15,
   "mixedLosses": 10,
   "genderWins": 12,
   "genderLosses": 11,
   "clutchWins": 7,
   "clutchLosses": 11,
   "winPct": 56.3,
   "diff": 34,
   "ppg": 19.2,
   "leagueRank": 55,
   "rating": 0,
   "ratingGames": 48,
   "confidence": 90,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0,
   "playerId": "4745eae2-7562-424a-92de-efcb84034406"
  },
  {
   "name": "Susan St. Pierre",
   "gender": "Female",
   "team": "Flemington",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 19,
   "losses": 15,
   "pointsWon": 640,
   "totalPointsAgainst": 588,
   "mixedWins": 12,
   "mixedLosses": 5,
   "genderWins": 7,
   "genderLosses": 10,
   "clutchWins": 4,
   "clutchLosses": 9,
   "winPct": 55.9,
   "diff": 52,
   "ppg": 18.8,
   "leagueRank": 118,
   "rating": 0.7,
   "ratingGames": 34,
   "confidence": 88,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.1,
   "playerId": "001c2d38-829b-4fd0-b249-472f78337387"
  },
  {
   "name": "Christine Papa",
   "gender": "Female",
   "team": "Flemington",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 51,
   "wins": 28,
   "losses": 23,
   "pointsWon": 966,
   "totalPointsAgainst": 937,
   "mixedWins": 11,
   "mixedLosses": 13,
   "genderWins": 17,
   "genderLosses": 10,
   "clutchWins": 7,
   "clutchLosses": 8,
   "winPct": 54.9,
   "diff": 29,
   "ppg": 18.9,
   "leagueRank": 66,
   "rating": 0.2,
   "ratingGames": 51,
   "confidence": 91,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.1,
   "playerId": "d156a552-7fa9-488e-9bfa-745feb859950"
  },
  {
   "name": "Sergey Sprikut",
   "gender": "Male",
   "team": "Monroe",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 53,
   "wins": 29,
   "losses": 24,
   "pointsWon": 1000,
   "totalPointsAgainst": 935,
   "mixedWins": 16,
   "mixedLosses": 14,
   "genderWins": 13,
   "genderLosses": 10,
   "clutchWins": 7,
   "clutchLosses": 7,
   "winPct": 54.7,
   "diff": 65,
   "ppg": 18.9,
   "leagueRank": 56,
   "rating": 1.3,
   "ratingGames": 53,
   "confidence": 91,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.1,
   "playerId": "28b4b9e6-0b25-473c-8386-2876bf60efab"
  },
  {
   "name": "Natasha De Carvalho",
   "gender": "Female",
   "team": "The Atlantic Club",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 53,
   "wins": 29,
   "losses": 24,
   "pointsWon": 1007,
   "totalPointsAgainst": 973,
   "mixedWins": 12,
   "mixedLosses": 13,
   "genderWins": 17,
   "genderLosses": 11,
   "clutchWins": 8,
   "clutchLosses": 8,
   "winPct": 54.7,
   "diff": 34,
   "ppg": 19,
   "leagueRank": 65,
   "rating": 0.2,
   "ratingGames": 53,
   "confidence": 91,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.1,
   "playerId": "462f3a15-22ed-4fa3-b698-78678a5d6966"
  },
  {
   "name": "David Osborne",
   "gender": "Male",
   "team": "Flemington",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 77,
   "wins": 42,
   "losses": 35,
   "pointsWon": 1458,
   "totalPointsAgainst": 1384,
   "mixedWins": 23,
   "mixedLosses": 16,
   "genderWins": 19,
   "genderLosses": 19,
   "clutchWins": 8,
   "clutchLosses": 13,
   "winPct": 54.5,
   "diff": 74,
   "ppg": 18.9,
   "leagueRank": 62,
   "rating": 1,
   "ratingGames": 77,
   "confidence": 93,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.3,
   "playerId": "418e7ba5-3e06-40ec-9b83-19d3bf10c9cb"
  },
  {
   "name": "Chris Heimerle",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 13,
   "losses": 11,
   "pointsWon": 460,
   "totalPointsAgainst": 448,
   "mixedWins": 6,
   "mixedLosses": 5,
   "genderWins": 7,
   "genderLosses": 6,
   "clutchWins": 5,
   "clutchLosses": 5,
   "winPct": 54.2,
   "diff": 12,
   "ppg": 19.2,
   "leagueRank": 110,
   "rating": 0.1,
   "ratingGames": 24,
   "confidence": 83,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.2,
   "playerId": "fc870151-9569-4e09-883d-c81e9cfaf6d8"
  },
  {
   "name": "Valerie Interrante",
   "gender": "Female",
   "team": "Pickle Place",
   "matches": 12,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 65,
   "wins": 35,
   "losses": 30,
   "pointsWon": 1210,
   "totalPointsAgainst": 1168,
   "mixedWins": 13,
   "mixedLosses": 22,
   "genderWins": 22,
   "genderLosses": 8,
   "clutchWins": 5,
   "clutchLosses": 10,
   "winPct": 53.8,
   "diff": 42,
   "ppg": 18.6,
   "leagueRank": 67,
   "rating": -0.3,
   "ratingGames": 65,
   "confidence": 93,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.2,
   "playerId": "d2076d9d-aa9e-4904-b971-8da1be95013f"
  },
  {
   "name": "Eliezer Mintz",
   "gender": "Male",
   "team": "Monroe",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 51,
   "wins": 27,
   "losses": 24,
   "pointsWon": 976,
   "totalPointsAgainst": 958,
   "mixedWins": 11,
   "mixedLosses": 14,
   "genderWins": 16,
   "genderLosses": 10,
   "clutchWins": 10,
   "clutchLosses": 10,
   "winPct": 52.9,
   "diff": 18,
   "ppg": 19.1,
   "leagueRank": 69,
   "rating": 0.4,
   "ratingGames": 51,
   "confidence": 91,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.2,
   "playerId": "832fb271-fb5e-43aa-b442-95c03fb78342"
  },
  {
   "name": "Don Godinez",
   "gender": "Male",
   "team": "Monroe",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 59,
   "wins": 31,
   "losses": 28,
   "pointsWon": 1114,
   "totalPointsAgainst": 1105,
   "mixedWins": 18,
   "mixedLosses": 14,
   "genderWins": 13,
   "genderLosses": 14,
   "clutchWins": 15,
   "clutchLosses": 10,
   "winPct": 52.5,
   "diff": 9,
   "ppg": 18.9,
   "leagueRank": 71,
   "rating": 0.2,
   "ratingGames": 59,
   "confidence": 92,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.1,
   "playerId": "f706ae79-d09c-4ad4-ac19-837deb84d36d"
  },
  {
   "name": "Tanya Kenney",
   "gender": "Female",
   "team": "The Atlantic Club",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 65,
   "wins": 34,
   "losses": 31,
   "pointsWon": 1206,
   "totalPointsAgainst": 1218,
   "mixedWins": 17,
   "mixedLosses": 16,
   "genderWins": 17,
   "genderLosses": 15,
   "clutchWins": 16,
   "clutchLosses": 9,
   "winPct": 52.3,
   "diff": -12,
   "ppg": 18.6,
   "leagueRank": 73,
   "rating": -0.7,
   "ratingGames": 65,
   "confidence": 92,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0,
   "playerId": "9136414d-016a-41e3-be48-735a5ef794da"
  },
  {
   "name": "Amanda Quinn",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 48,
   "wins": 25,
   "losses": 23,
   "pointsWon": 885,
   "totalPointsAgainst": 857,
   "mixedWins": 12,
   "mixedLosses": 13,
   "genderWins": 13,
   "genderLosses": 10,
   "clutchWins": 5,
   "clutchLosses": 5,
   "winPct": 52.1,
   "diff": 28,
   "ppg": 18.4,
   "leagueRank": 70,
   "rating": 0.1,
   "ratingGames": 48,
   "confidence": 90,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0,
   "playerId": "f1248cc3-96c3-4671-9b08-533d22eb710f"
  },
  {
   "name": "Jennifer Burke",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 15,
   "losses": 14,
   "pointsWon": 539,
   "totalPointsAgainst": 528,
   "mixedWins": 10,
   "mixedLosses": 6,
   "genderWins": 5,
   "genderLosses": 8,
   "clutchWins": 6,
   "clutchLosses": 6,
   "winPct": 51.7,
   "diff": 11,
   "ppg": 18.6,
   "leagueRank": 90,
   "rating": -1.3,
   "ratingGames": 29,
   "confidence": 85,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.7,
   "playerId": "18bcc459-8067-4650-ad73-3183fae3ea1f"
  },
  {
   "name": "David Eisen",
   "gender": "Male",
   "team": "Pickle Place",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 20,
   "losses": 19,
   "pointsWon": 686,
   "totalPointsAgainst": 735,
   "mixedWins": 13,
   "mixedLosses": 10,
   "genderWins": 7,
   "genderLosses": 9,
   "clutchWins": 9,
   "clutchLosses": 2,
   "winPct": 51.3,
   "diff": -49,
   "ppg": 17.6,
   "leagueRank": 93,
   "rating": -2,
   "ratingGames": 39,
   "confidence": 88,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.2,
   "playerId": "d4b4ed3c-0c4b-4f8b-9b98-a5d448bfb361"
  },
  {
   "name": "Sarah Mcparland",
   "gender": "Female",
   "team": "Home Court",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 43,
   "wins": 22,
   "losses": 21,
   "pointsWon": 771,
   "totalPointsAgainst": 748,
   "mixedWins": 11,
   "mixedLosses": 9,
   "genderWins": 11,
   "genderLosses": 12,
   "clutchWins": 4,
   "clutchLosses": 6,
   "winPct": 51.2,
   "diff": 23,
   "ppg": 17.9,
   "leagueRank": 77,
   "rating": 1.8,
   "ratingGames": 43,
   "confidence": 89,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.6,
   "playerId": "958e8cb9-1c97-4932-b495-29c28578a123"
  },
  {
   "name": "Sinitra Siengsanaoh",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 40,
   "wins": 20,
   "losses": 20,
   "pointsWon": 752,
   "totalPointsAgainst": 728,
   "mixedWins": 11,
   "mixedLosses": 10,
   "genderWins": 9,
   "genderLosses": 10,
   "clutchWins": 7,
   "clutchLosses": 10,
   "winPct": 50,
   "diff": 24,
   "ppg": 18.8,
   "leagueRank": 72,
   "rating": 0.6,
   "ratingGames": 40,
   "confidence": 89,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.3,
   "playerId": "bd5e1a4c-a9d5-4683-a74e-90c0df2d84cd"
  },
  {
   "name": "Nancy Wu",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 116,
   "totalPointsAgainst": 109,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "c187c25d-5d0a-4e66-9ac5-b1a05b0c151f",
   "winPct": 50,
   "diff": 7,
   "ppg": 19.3,
   "leagueRank": 159,
   "rating": 0.1,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": -2.7,
   "strengthOfOpponents": -1.9
  },
  {
   "name": "Jack Feinstein",
   "gender": "Male",
   "team": "The Atlantic Club",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 157,
   "totalPointsAgainst": 150,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 2,
   "playerId": "f0ffbdf3-45d6-4f9a-8173-5f5054eadcfd",
   "winPct": 50,
   "diff": 7,
   "ppg": 19.6,
   "leagueRank": 158,
   "rating": -0.7,
   "ratingGames": 8,
   "confidence": 61,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -1.3
  },
  {
   "name": "Bruce Mattthew",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 6,
   "losses": 6,
   "pointsWon": 227,
   "totalPointsAgainst": 221,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "a01b1376-6cf7-4a18-8c5f-72fcb3b340dd",
   "winPct": 50,
   "diff": 6,
   "ppg": 18.9,
   "leagueRank": 152,
   "rating": 0.7,
   "ratingGames": 12,
   "confidence": 71,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": -0.6
  },
  {
   "name": "Emil Pescatore",
   "gender": "Male",
   "team": "Home Court",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 152,
   "totalPointsAgainst": 147,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "1c9b7abf-dae6-4e0d-a31d-485e99a01fec",
   "winPct": 50,
   "diff": 5,
   "ppg": 19,
   "leagueRank": 169,
   "rating": -0.2,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.2
  },
  {
   "name": "Sherlyn Harrison",
   "gender": "Female",
   "team": "Pickle Place",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 112,
   "totalPointsAgainst": 108,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "cec28a78-6f35-4c24-888d-9993ced64bf6",
   "winPct": 50,
   "diff": 4,
   "ppg": 18.7,
   "leagueRank": 162,
   "rating": -0.7,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.8
  },
  {
   "name": "John Chalerm",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 6,
   "losses": 6,
   "pointsWon": 231,
   "totalPointsAgainst": 229,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "c94b7f57-f476-43db-8fc3-e23331d97b63",
   "winPct": 50,
   "diff": 2,
   "ppg": 19.3,
   "leagueRank": 151,
   "rating": 0,
   "ratingGames": 12,
   "confidence": 72,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.2
  },
  {
   "name": "Simon Perry",
   "gender": "Male",
   "team": "Flemington",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 13,
   "losses": 13,
   "pointsWon": 483,
   "totalPointsAgainst": 486,
   "mixedWins": 5,
   "mixedLosses": 8,
   "genderWins": 8,
   "genderLosses": 5,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 50,
   "diff": -3,
   "ppg": 18.6,
   "leagueRank": 112,
   "rating": 1.8,
   "ratingGames": 26,
   "confidence": 84,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 1.2,
   "playerId": "03c7bdf6-926c-4d90-9416-117cd3478b50"
  },
  {
   "name": "Susan Kapit",
   "gender": "Female",
   "team": "Monroe",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 18,
   "losses": 18,
   "pointsWon": 662,
   "totalPointsAgainst": 667,
   "mixedWins": 11,
   "mixedLosses": 6,
   "genderWins": 7,
   "genderLosses": 12,
   "clutchWins": 7,
   "clutchLosses": 5,
   "winPct": 50,
   "diff": -5,
   "ppg": 18.4,
   "leagueRank": 75,
   "rating": -0.4,
   "ratingGames": 36,
   "confidence": 88,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.1,
   "playerId": "19a34ff6-50a2-4e30-972e-2cec78d4aec3"
  },
  {
   "name": "Doug Schoenberger",
   "gender": "Male",
   "team": "Flemington",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 110,
   "totalPointsAgainst": 117,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "a39e7329-b470-4cbd-803a-a27e8f6fea86",
   "winPct": 50,
   "diff": -7,
   "ppg": 18.3,
   "leagueRank": 183,
   "rating": -1.6,
   "ratingGames": 6,
   "confidence": 58,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.3
  },
  {
   "name": "Clifford Luster",
   "gender": "Male",
   "team": "Home Court",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 44,
   "wins": 22,
   "losses": 22,
   "pointsWon": 797,
   "totalPointsAgainst": 805,
   "mixedWins": 13,
   "mixedLosses": 8,
   "genderWins": 9,
   "genderLosses": 14,
   "clutchWins": 7,
   "clutchLosses": 5,
   "winPct": 50,
   "diff": -8,
   "ppg": 18.1,
   "leagueRank": 85,
   "rating": 0.7,
   "ratingGames": 44,
   "confidence": 90,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.3,
   "playerId": "3f47746a-2105-493a-941a-b15c4b02a520"
  },
  {
   "name": "Jaco De Waal",
   "gender": "Male",
   "team": "Flemington",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 112,
   "totalPointsAgainst": 120,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 1,
   "playerId": "19407a76-031d-4be3-8ed8-ba88cccdfdd3",
   "winPct": 50,
   "diff": -8,
   "ppg": 18.7,
   "leagueRank": 186,
   "rating": -0.5,
   "ratingGames": 6,
   "confidence": 57,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.6
  },
  {
   "name": "Allison Tittle",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 105,
   "totalPointsAgainst": 117,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "61ba22bf-40ac-4f07-85df-110f445f06d4",
   "winPct": 50,
   "diff": -12,
   "ppg": 17.5,
   "leagueRank": 187,
   "rating": -2.3,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": -1.8
  },
  {
   "name": "Amy Johnson",
   "gender": "Female",
   "team": "Flemington",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 15,
   "losses": 15,
   "pointsWon": 549,
   "totalPointsAgainst": 569,
   "mixedWins": 6,
   "mixedLosses": 8,
   "genderWins": 9,
   "genderLosses": 7,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 50,
   "diff": -20,
   "ppg": 18.3,
   "leagueRank": 111,
   "rating": -0.6,
   "ratingGames": 30,
   "confidence": 86,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.2,
   "playerId": "74e493de-dca7-4bf2-b9ac-630484282502"
  },
  {
   "name": "Meryl Nadler",
   "gender": "Female",
   "team": "Monroe",
   "matches": 12,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 89,
   "wins": 44,
   "losses": 45,
   "pointsWon": 1631,
   "totalPointsAgainst": 1675,
   "mixedWins": 26,
   "mixedLosses": 19,
   "genderWins": 18,
   "genderLosses": 26,
   "clutchWins": 18,
   "clutchLosses": 14,
   "winPct": 49.4,
   "diff": -44,
   "ppg": 18.3,
   "leagueRank": 84,
   "rating": -0.5,
   "ratingGames": 89,
   "confidence": 94,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.1,
   "playerId": "90987b97-d181-4c15-9c7c-e0bebff4e9b0"
  },
  {
   "name": "Lance Brown",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 53,
   "wins": 26,
   "losses": 27,
   "pointsWon": 952,
   "totalPointsAgainst": 1003,
   "mixedWins": 14,
   "mixedLosses": 12,
   "genderWins": 12,
   "genderLosses": 15,
   "clutchWins": 12,
   "clutchLosses": 5,
   "winPct": 49.1,
   "diff": -51,
   "ppg": 18,
   "leagueRank": 98,
   "rating": 0.6,
   "ratingGames": 53,
   "confidence": 91,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.2,
   "playerId": "5d13288d-69fe-4d0b-bf69-51c1d24e3409"
  },
  {
   "name": "Surbhi Sabharwal",
   "gender": "Female",
   "team": "Home Court",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 51,
   "wins": 25,
   "losses": 26,
   "pointsWon": 960,
   "totalPointsAgainst": 947,
   "mixedWins": 10,
   "mixedLosses": 14,
   "genderWins": 15,
   "genderLosses": 12,
   "clutchWins": 11,
   "clutchLosses": 11,
   "winPct": 49,
   "diff": 13,
   "ppg": 18.8,
   "leagueRank": 74,
   "rating": 0.6,
   "ratingGames": 51,
   "confidence": 91,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.1,
   "playerId": "6ff2d1f1-1ffd-4140-820d-b2333c370dcd"
  },
  {
   "name": "Robert Toledo",
   "gender": "Male",
   "team": "The Atlantic Club",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 31,
   "wins": 15,
   "losses": 16,
   "pointsWon": 599,
   "totalPointsAgainst": 571,
   "mixedWins": 9,
   "mixedLosses": 7,
   "genderWins": 6,
   "genderLosses": 9,
   "clutchWins": 2,
   "clutchLosses": 8,
   "winPct": 48.4,
   "diff": 28,
   "ppg": 19.3,
   "leagueRank": 92,
   "rating": 1.4,
   "ratingGames": 31,
   "confidence": 86,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.5,
   "playerId": "a1e0d6a6-b8d4-47b7-bdfc-6cb8670a421d"
  },
  {
   "name": "Denise Richmond",
   "gender": "Female",
   "team": "Flemington",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 67,
   "wins": 32,
   "losses": 35,
   "pointsWon": 1203,
   "totalPointsAgainst": 1274,
   "mixedWins": 19,
   "mixedLosses": 13,
   "genderWins": 13,
   "genderLosses": 22,
   "clutchWins": 12,
   "clutchLosses": 11,
   "winPct": 47.8,
   "diff": -71,
   "ppg": 18,
   "leagueRank": 96,
   "rating": -0.7,
   "ratingGames": 67,
   "confidence": 93,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.3,
   "playerId": "422cd941-43db-4123-a07e-3316583f51ee"
  },
  {
   "name": "Jane Meng",
   "gender": "Female",
   "team": "Pickle Place",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 53,
   "wins": 25,
   "losses": 28,
   "pointsWon": 978,
   "totalPointsAgainst": 981,
   "mixedWins": 13,
   "mixedLosses": 18,
   "genderWins": 12,
   "genderLosses": 10,
   "clutchWins": 10,
   "clutchLosses": 11,
   "winPct": 47.2,
   "diff": -3,
   "ppg": 18.5,
   "leagueRank": 81,
   "rating": 0.4,
   "ratingGames": 53,
   "confidence": 91,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.1,
   "playerId": "c365e1dd-21cf-4f38-a802-1aaaf6d0914b"
  },
  {
   "name": "Lucy Li",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 73,
   "wins": 34,
   "losses": 39,
   "pointsWon": 1312,
   "totalPointsAgainst": 1391,
   "mixedWins": 21,
   "mixedLosses": 17,
   "genderWins": 13,
   "genderLosses": 22,
   "clutchWins": 12,
   "clutchLosses": 9,
   "winPct": 46.6,
   "diff": -79,
   "ppg": 18,
   "leagueRank": 105,
   "rating": 0.7,
   "ratingGames": 73,
   "confidence": 93,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.4,
   "playerId": "d22f8b69-76a6-41e0-8b04-c5dae68d9f69"
  },
  {
   "name": "Bob Drinane",
   "gender": "Male",
   "team": "Flemington",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 17,
   "losses": 20,
   "pointsWon": 696,
   "totalPointsAgainst": 704,
   "mixedWins": 11,
   "mixedLosses": 8,
   "genderWins": 6,
   "genderLosses": 12,
   "clutchWins": 6,
   "clutchLosses": 9,
   "winPct": 45.9,
   "diff": -8,
   "ppg": 18.8,
   "leagueRank": 86,
   "rating": 0.6,
   "ratingGames": 37,
   "confidence": 88,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.9,
   "playerId": "1611fcd8-0e53-4b13-b061-d588d0bde0fd"
  },
  {
   "name": "Brad Oldham",
   "gender": "Male",
   "team": "The Atlantic Club",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 11,
   "losses": 13,
   "pointsWon": 448,
   "totalPointsAgainst": 468,
   "mixedWins": 3,
   "mixedLosses": 9,
   "genderWins": 8,
   "genderLosses": 4,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 45.8,
   "diff": -20,
   "ppg": 18.7,
   "leagueRank": 135,
   "rating": 0.8,
   "ratingGames": 24,
   "confidence": 81,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 1.2,
   "playerId": "965b56ee-6fb4-4bd1-9708-8ced2c5dd9a2"
  },
  {
   "name": "Joe Palumbo",
   "gender": "Male",
   "team": "The Atlantic Club",
   "matches": 12,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 94,
   "wins": 43,
   "losses": 51,
   "pointsWon": 1696,
   "totalPointsAgainst": 1785,
   "mixedWins": 26,
   "mixedLosses": 21,
   "genderWins": 17,
   "genderLosses": 30,
   "clutchWins": 17,
   "clutchLosses": 15,
   "winPct": 45.7,
   "diff": -89,
   "ppg": 18,
   "leagueRank": 99,
   "rating": -1,
   "ratingGames": 94,
   "confidence": 94,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.2,
   "playerId": "b39664c3-1a6e-4493-968f-6e7f7939f694"
  },
  {
   "name": "Andrew Hyman",
   "gender": "Male",
   "team": "The Atlantic Club",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 55,
   "wins": 25,
   "losses": 30,
   "pointsWon": 1036,
   "totalPointsAgainst": 1004,
   "mixedWins": 13,
   "mixedLosses": 14,
   "genderWins": 12,
   "genderLosses": 16,
   "clutchWins": 4,
   "clutchLosses": 15,
   "winPct": 45.5,
   "diff": 32,
   "ppg": 18.8,
   "leagueRank": 78,
   "rating": 1.4,
   "ratingGames": 55,
   "confidence": 91,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.5,
   "playerId": "dbda3e07-6332-4467-bdf0-be18b2686573"
  },
  {
   "name": "Debbie Tovitz",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 5,
   "losses": 6,
   "pointsWon": 200,
   "totalPointsAgainst": 215,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 45.5,
   "diff": -15,
   "ppg": 18.2,
   "leagueRank": 175,
   "rating": -2.1,
   "ratingGames": 11,
   "confidence": 71,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.4,
   "playerId": "1260ba09-fd19-4cad-95d4-325744e32327"
  },
  {
   "name": "Bruce Aronow",
   "gender": "Male",
   "team": "Pickle Place",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 19,
   "losses": 23,
   "pointsWon": 740,
   "totalPointsAgainst": 787,
   "mixedWins": 11,
   "mixedLosses": 9,
   "genderWins": 8,
   "genderLosses": 14,
   "clutchWins": 5,
   "clutchLosses": 6,
   "winPct": 45.2,
   "diff": -47,
   "ppg": 17.6,
   "leagueRank": 102,
   "rating": -1.3,
   "ratingGames": 42,
   "confidence": 89,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.1,
   "playerId": "c9457ed9-79fb-40ef-b26a-566d206714d4"
  },
  {
   "name": "Art Muth",
   "gender": "Male",
   "team": "Flemington",
   "matches": 12,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 82,
   "wins": 37,
   "losses": 45,
   "pointsWon": 1578,
   "totalPointsAgainst": 1555,
   "mixedWins": 19,
   "mixedLosses": 21,
   "genderWins": 18,
   "genderLosses": 24,
   "clutchWins": 15,
   "clutchLosses": 24,
   "winPct": 45.1,
   "diff": 23,
   "ppg": 19.2,
   "leagueRank": 76,
   "rating": 0.9,
   "ratingGames": 82,
   "confidence": 94,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.5,
   "playerId": "6bfc3a49-53cb-4c03-b8cb-94552158ccbe"
  },
  {
   "name": "Scott Friedman",
   "gender": "Male",
   "team": "Monroe",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 51,
   "wins": 23,
   "losses": 28,
   "pointsWon": 952,
   "totalPointsAgainst": 972,
   "mixedWins": 10,
   "mixedLosses": 14,
   "genderWins": 13,
   "genderLosses": 14,
   "clutchWins": 13,
   "clutchLosses": 9,
   "winPct": 45.1,
   "diff": -20,
   "ppg": 18.7,
   "leagueRank": 89,
   "rating": -0.5,
   "ratingGames": 51,
   "confidence": 91,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.1,
   "playerId": "d40fde69-77a2-4998-a631-fba159129d2f"
  },
  {
   "name": "Glenn Hillman",
   "gender": "Male",
   "team": "Monroe",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 13,
   "losses": 16,
   "pointsWon": 534,
   "totalPointsAgainst": 510,
   "mixedWins": 5,
   "mixedLosses": 8,
   "genderWins": 8,
   "genderLosses": 8,
   "clutchWins": 1,
   "clutchLosses": 7,
   "winPct": 44.8,
   "diff": 24,
   "ppg": 18.4,
   "leagueRank": 109,
   "rating": 1.4,
   "ratingGames": 29,
   "confidence": 86,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.5,
   "playerId": "316cd007-2c93-473d-a8d8-61a5fbbfa002"
  },
  {
   "name": "Ali Fordyce",
   "gender": "Female",
   "team": "The Atlantic Club",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 12,
   "losses": 15,
   "pointsWon": 493,
   "totalPointsAgainst": 502,
   "mixedWins": 5,
   "mixedLosses": 9,
   "genderWins": 7,
   "genderLosses": 6,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 44.4,
   "diff": -9,
   "ppg": 18.3,
   "leagueRank": 117,
   "rating": -0.3,
   "ratingGames": 27,
   "confidence": 84,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.3,
   "playerId": "9e2cc278-7356-491f-b853-945e33a988d2"
  },
  {
   "name": "Anita Bobba",
   "gender": "Female",
   "team": "Home Court",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 12,
   "losses": 15,
   "pointsWon": 488,
   "totalPointsAgainst": 510,
   "mixedWins": 3,
   "mixedLosses": 9,
   "genderWins": 9,
   "genderLosses": 6,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 44.4,
   "diff": -22,
   "ppg": 18.1,
   "leagueRank": 126,
   "rating": 0.1,
   "ratingGames": 27,
   "confidence": 84,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.5,
   "playerId": "abc68487-3415-49a2-bdfb-dd56eb5af20d"
  },
  {
   "name": "Michael Swell",
   "gender": "Male",
   "team": "The Atlantic Club",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 7,
   "losses": 9,
   "pointsWon": 279,
   "totalPointsAgainst": 296,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 3,
   "playerId": "5436acd1-542a-4ca5-a652-c0addcf23ea2",
   "winPct": 43.8,
   "diff": -17,
   "ppg": 17.4,
   "leagueRank": 164,
   "rating": 1.8,
   "ratingGames": 16,
   "confidence": 77,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 1.5
  },
  {
   "name": "Maureen Conery",
   "gender": "Female",
   "team": "Monroe",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 7,
   "losses": 9,
   "pointsWon": 294,
   "totalPointsAgainst": 312,
   "mixedWins": 4,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 5,
   "clutchLosses": 3,
   "playerId": "89dd8b9e-14f8-40ac-8127-3bfac0ac7888",
   "winPct": 43.8,
   "diff": -18,
   "ppg": 18.4,
   "leagueRank": 153,
   "rating": -2.9,
   "ratingGames": 16,
   "confidence": 77,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -1.1
  },
  {
   "name": "Tracey Collins",
   "gender": "Female",
   "team": "Monroe",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 7,
   "losses": 9,
   "pointsWon": 270,
   "totalPointsAgainst": 296,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 2,
   "playerId": "f01a9ccb-b72e-4980-bdc0-73ed5a72f92c",
   "winPct": 43.8,
   "diff": -26,
   "ppg": 16.9,
   "leagueRank": 166,
   "rating": -1.1,
   "ratingGames": 16,
   "confidence": 77,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.4
  },
  {
   "name": "Kajal Sinkar",
   "gender": "Female",
   "team": "Home Court",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 53,
   "wins": 23,
   "losses": 30,
   "pointsWon": 982,
   "totalPointsAgainst": 1035,
   "mixedWins": 11,
   "mixedLosses": 14,
   "genderWins": 12,
   "genderLosses": 16,
   "clutchWins": 9,
   "clutchLosses": 10,
   "winPct": 43.4,
   "diff": -53,
   "ppg": 18.5,
   "leagueRank": 101,
   "rating": -0.5,
   "ratingGames": 53,
   "confidence": 91,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": -0.1,
   "playerId": "9d7f6585-d5f4-44fa-a4f9-24737a072f72"
  },
  {
   "name": "Todd Stein",
   "gender": "Male",
   "team": "Flemington",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 13,
   "losses": 17,
   "pointsWon": 566,
   "totalPointsAgainst": 563,
   "mixedWins": 6,
   "mixedLosses": 9,
   "genderWins": 7,
   "genderLosses": 8,
   "clutchWins": 3,
   "clutchLosses": 9,
   "winPct": 43.3,
   "diff": 3,
   "ppg": 18.9,
   "leagueRank": 114,
   "rating": -0.1,
   "ratingGames": 30,
   "confidence": 86,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0,
   "playerId": "63fb8f7d-8f83-4bdf-89c7-fc3ca7139df5"
  },
  {
   "name": "Edwin Saxman",
   "gender": "Male",
   "team": "Pickle Place",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 6,
   "losses": 8,
   "pointsWon": 262,
   "totalPointsAgainst": 270,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 4,
   "playerId": "32244c70-6859-44af-a408-8294d65b592d",
   "winPct": 42.9,
   "diff": -8,
   "ppg": 18.7,
   "leagueRank": 172,
   "rating": 0.5,
   "ratingGames": 14,
   "confidence": 74,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.6
  },
  {
   "name": "Matt Detiger",
   "gender": "Male",
   "team": "Bounce Malvern Blue",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 6,
   "losses": 8,
   "pointsWon": 249,
   "totalPointsAgainst": 262,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 2,
   "playerId": "f6b40aae-329f-4d43-8705-9d9dcb4ef82d",
   "winPct": 42.9,
   "diff": -13,
   "ppg": 17.8,
   "leagueRank": 185,
   "rating": 2.1,
   "ratingGames": 14,
   "confidence": 75,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 1.4
  },
  {
   "name": "Lisa Shea",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 119,
   "totalPointsAgainst": 137,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 42.9,
   "diff": -18,
   "ppg": 17,
   "leagueRank": 201,
   "rating": 0.3,
   "ratingGames": 7,
   "confidence": 61,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 1.1,
   "playerId": "426f0253-a5ea-4adc-b06a-5a54a20e65cf"
  },
  {
   "name": "Oliveira Karen",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 31,
   "wins": 13,
   "losses": 18,
   "pointsWon": 566,
   "totalPointsAgainst": 606,
   "mixedWins": 6,
   "mixedLosses": 11,
   "genderWins": 7,
   "genderLosses": 7,
   "clutchWins": 8,
   "clutchLosses": 8,
   "winPct": 41.9,
   "diff": -40,
   "ppg": 18.3,
   "leagueRank": 130,
   "rating": -1,
   "ratingGames": 31,
   "confidence": 86,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.1,
   "playerId": "80b535f7-a6f6-4905-90ae-69c8695f99be"
  },
  {
   "name": "Stephen Hanak",
   "gender": "Male",
   "team": "Pickle Place",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 48,
   "wins": 20,
   "losses": 28,
   "pointsWon": 884,
   "totalPointsAgainst": 908,
   "mixedWins": 10,
   "mixedLosses": 13,
   "genderWins": 10,
   "genderLosses": 15,
   "clutchWins": 4,
   "clutchLosses": 9,
   "winPct": 41.7,
   "diff": -24,
   "ppg": 18.4,
   "leagueRank": 95,
   "rating": -0.7,
   "ratingGames": 48,
   "confidence": 90,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0,
   "playerId": "8f20e88a-a2cf-4e7e-b024-62f23423cf70"
  },
  {
   "name": "Michael Dombrowiecki",
   "gender": "Male",
   "team": "The Atlantic Club",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 17,
   "losses": 24,
   "pointsWon": 751,
   "totalPointsAgainst": 778,
   "mixedWins": 12,
   "mixedLosses": 9,
   "genderWins": 5,
   "genderLosses": 15,
   "clutchWins": 6,
   "clutchLosses": 10,
   "winPct": 41.5,
   "diff": -27,
   "ppg": 18.3,
   "leagueRank": 103,
   "rating": 0.5,
   "ratingGames": 41,
   "confidence": 89,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.4,
   "playerId": "3ac34ef1-17a5-4ab6-8d17-be4bd5a0a040"
  },
  {
   "name": "Robert Block",
   "gender": "Male",
   "team": "Pickle Place",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 39,
   "wins": 16,
   "losses": 23,
   "pointsWon": 724,
   "totalPointsAgainst": 724,
   "mixedWins": 13,
   "mixedLosses": 13,
   "genderWins": 3,
   "genderLosses": 10,
   "clutchWins": 6,
   "clutchLosses": 10,
   "winPct": 41,
   "diff": 0,
   "ppg": 18.6,
   "leagueRank": 94,
   "rating": -0.5,
   "ratingGames": 39,
   "confidence": 89,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.1,
   "playerId": "23d1d322-f31d-46b3-bf95-d86faab58b06"
  },
  {
   "name": "Brenden Dorley",
   "gender": "Male",
   "team": "Bounce Malvern Blue",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 9,
   "losses": 13,
   "pointsWon": 407,
   "totalPointsAgainst": 406,
   "mixedWins": 3,
   "mixedLosses": 9,
   "genderWins": 6,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 40.9,
   "diff": 1,
   "ppg": 18.5,
   "leagueRank": 138,
   "rating": 1.9,
   "ratingGames": 22,
   "confidence": 83,
   "strengthOfPartners": -2,
   "strengthOfOpponents": 0.1,
   "playerId": "99c7c387-dea4-4b5b-a3b6-639ae2f806d2"
  },
  {
   "name": "Rosalyn Goldsmith",
   "gender": "Female",
   "team": "Monroe",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 52,
   "wins": 21,
   "losses": 31,
   "pointsWon": 921,
   "totalPointsAgainst": 986,
   "mixedWins": 10,
   "mixedLosses": 15,
   "genderWins": 11,
   "genderLosses": 16,
   "clutchWins": 6,
   "clutchLosses": 6,
   "winPct": 40.4,
   "diff": -65,
   "ppg": 17.7,
   "leagueRank": 115,
   "rating": -0.7,
   "ratingGames": 52,
   "confidence": 91,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.3,
   "playerId": "545c12c3-3098-47ca-b35e-429f37f481f5"
  },
  {
   "name": "Robert Huntley",
   "gender": "Male",
   "team": "Home Court",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 72,
   "wins": 29,
   "losses": 43,
   "pointsWon": 1303,
   "totalPointsAgainst": 1412,
   "mixedWins": 12,
   "mixedLosses": 24,
   "genderWins": 17,
   "genderLosses": 19,
   "clutchWins": 15,
   "clutchLosses": 14,
   "winPct": 40.3,
   "diff": -109,
   "ppg": 18.1,
   "leagueRank": 116,
   "rating": -0.5,
   "ratingGames": 72,
   "confidence": 93,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.2,
   "playerId": "b5dec967-9e3a-49b4-b136-597711d099cc"
  },
  {
   "name": "Albert Pamudji",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 4,
   "losses": 6,
   "pointsWon": 187,
   "totalPointsAgainst": 200,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 1,
   "playerId": "f8c55797-409c-4cf0-a2d5-241ec95f60b2",
   "winPct": 40,
   "diff": -13,
   "ppg": 18.7,
   "leagueRank": 193,
   "rating": 0.5,
   "ratingGames": 10,
   "confidence": 66,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.7
  },
  {
   "name": "Laura Elleman",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 10,
   "losses": 15,
   "pointsWon": 452,
   "totalPointsAgainst": 474,
   "mixedWins": 5,
   "mixedLosses": 7,
   "genderWins": 5,
   "genderLosses": 8,
   "clutchWins": 2,
   "clutchLosses": 5,
   "winPct": 40,
   "diff": -22,
   "ppg": 18.1,
   "leagueRank": 141,
   "rating": -0.5,
   "ratingGames": 25,
   "confidence": 84,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": -0.2,
   "playerId": "3e6056c2-7c5b-4123-b457-ffcf82d3b422"
  },
  {
   "name": "Scott Rubin",
   "gender": "Male",
   "team": "Flemington",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 18,
   "losses": 28,
   "pointsWon": 846,
   "totalPointsAgainst": 884,
   "mixedWins": 10,
   "mixedLosses": 14,
   "genderWins": 8,
   "genderLosses": 14,
   "clutchWins": 8,
   "clutchLosses": 10,
   "winPct": 39.1,
   "diff": -38,
   "ppg": 18.4,
   "leagueRank": 106,
   "rating": -1.7,
   "ratingGames": 46,
   "confidence": 90,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.3,
   "playerId": "c12175df-b959-4efe-95e7-e5298b783da8"
  },
  {
   "name": "Sandro Stefanelli",
   "gender": "Male",
   "team": "Bounce Malvern Blue",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 31,
   "wins": 12,
   "losses": 19,
   "pointsWon": 528,
   "totalPointsAgainst": 592,
   "mixedWins": 5,
   "mixedLosses": 12,
   "genderWins": 7,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 4,
   "winPct": 38.7,
   "diff": -64,
   "ppg": 17,
   "leagueRank": 148,
   "rating": 0.9,
   "ratingGames": 31,
   "confidence": 87,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 0.9,
   "playerId": "1872d8d8-f958-4747-af3a-443d5f88a1c3"
  },
  {
   "name": "Laurie Guagenty",
   "gender": "Female",
   "team": "The Atlantic Club",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 5,
   "losses": 8,
   "pointsWon": 235,
   "totalPointsAgainst": 237,
   "mixedWins": 1,
   "mixedLosses": 5,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "013faf14-ed91-4d3f-baff-dfaf90310790",
   "winPct": 38.5,
   "diff": -2,
   "ppg": 18.1,
   "leagueRank": 181,
   "rating": 1,
   "ratingGames": 13,
   "confidence": 73,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.7
  },
  {
   "name": "Hayley Yandoli",
   "gender": "Female",
   "team": "Monroe",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 14,
   "losses": 23,
   "pointsWon": 648,
   "totalPointsAgainst": 731,
   "mixedWins": 9,
   "mixedLosses": 10,
   "genderWins": 5,
   "genderLosses": 13,
   "clutchWins": 8,
   "clutchLosses": 4,
   "winPct": 37.8,
   "diff": -83,
   "ppg": 17.5,
   "leagueRank": 125,
   "rating": -2.4,
   "ratingGames": 37,
   "confidence": 88,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.1,
   "playerId": "1fc2dd51-135b-46d6-91ef-9291b573e78a"
  },
  {
   "name": "Mark Fappiano",
   "gender": "Male",
   "team": "Home Court",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 7,
   "losses": 12,
   "pointsWon": 332,
   "totalPointsAgainst": 359,
   "mixedWins": 4,
   "mixedLosses": 6,
   "genderWins": 3,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 36.8,
   "diff": -27,
   "ppg": 17.5,
   "leagueRank": 180,
   "rating": 0.5,
   "ratingGames": 19,
   "confidence": 80,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.8,
   "playerId": "14289b5c-46c9-4728-b43d-9f01eeb74b8d"
  },
  {
   "name": "Pam Friedman",
   "gender": "Female",
   "team": "Monroe",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 28,
   "wins": 10,
   "losses": 18,
   "pointsWon": 487,
   "totalPointsAgainst": 551,
   "mixedWins": 4,
   "mixedLosses": 9,
   "genderWins": 6,
   "genderLosses": 9,
   "clutchWins": 6,
   "clutchLosses": 6,
   "winPct": 35.7,
   "diff": -64,
   "ppg": 17.4,
   "leagueRank": 147,
   "rating": -0.4,
   "ratingGames": 28,
   "confidence": 85,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 1.1,
   "playerId": "94d51b2d-359c-450c-b1c8-728944462b01"
  },
  {
   "name": "Tara Kramer",
   "gender": "Female",
   "team": "Flemington",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 74,
   "wins": 26,
   "losses": 48,
   "pointsWon": 1271,
   "totalPointsAgainst": 1428,
   "mixedWins": 14,
   "mixedLosses": 24,
   "genderWins": 12,
   "genderLosses": 24,
   "clutchWins": 6,
   "clutchLosses": 15,
   "winPct": 35.1,
   "diff": -157,
   "ppg": 17.2,
   "leagueRank": 131,
   "rating": -2.2,
   "ratingGames": 74,
   "confidence": 93,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.4,
   "playerId": "dae62b8e-5f8e-4721-8f41-3218518d1e30"
  },
  {
   "name": "Jhon Cifuentes",
   "gender": "Male",
   "team": "Home Court",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 60,
   "wins": 21,
   "losses": 39,
   "pointsWon": 1032,
   "totalPointsAgainst": 1169,
   "mixedWins": 9,
   "mixedLosses": 22,
   "genderWins": 12,
   "genderLosses": 17,
   "clutchWins": 8,
   "clutchLosses": 7,
   "winPct": 35,
   "diff": -137,
   "ppg": 17.2,
   "leagueRank": 134,
   "rating": -0.3,
   "ratingGames": 60,
   "confidence": 92,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.5,
   "playerId": "91f844b2-dd13-45a0-b66d-9b7ea751037a"
  },
  {
   "name": "Bruce Bilow",
   "gender": "Male",
   "team": "The Atlantic Club",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 49,
   "wins": 17,
   "losses": 32,
   "pointsWon": 861,
   "totalPointsAgainst": 950,
   "mixedWins": 11,
   "mixedLosses": 13,
   "genderWins": 6,
   "genderLosses": 19,
   "clutchWins": 6,
   "clutchLosses": 9,
   "winPct": 34.7,
   "diff": -89,
   "ppg": 17.6,
   "leagueRank": 129,
   "rating": -2.4,
   "ratingGames": 49,
   "confidence": 90,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.4,
   "playerId": "1607c79a-6ca1-4214-a557-5ae0617ac8a1"
  },
  {
   "name": "Jeremy Workman",
   "gender": "Male",
   "team": "Bounce Malvern Blue",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 9,
   "losses": 17,
   "pointsWon": 459,
   "totalPointsAgainst": 508,
   "mixedWins": 2,
   "mixedLosses": 9,
   "genderWins": 7,
   "genderLosses": 8,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 34.6,
   "diff": -49,
   "ppg": 17.7,
   "leagueRank": 145,
   "rating": 0.2,
   "ratingGames": 26,
   "confidence": 84,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": 0.2,
   "playerId": "5a15e437-7769-4d60-bd0c-b6c48176289c"
  },
  {
   "name": "Sacha Doyle",
   "gender": "Female",
   "team": "The Atlantic Club",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 108,
   "totalPointsAgainst": 116,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "98c394e7-28f4-47af-bcc2-d542b3d968c8",
   "winPct": 33.3,
   "diff": -8,
   "ppg": 18,
   "leagueRank": 198,
   "rating": -0.8,
   "ratingGames": 6,
   "confidence": 57,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.2
  },
  {
   "name": "Frank Ding",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 4,
   "losses": 8,
   "pointsWon": 226,
   "totalPointsAgainst": 237,
   "mixedWins": 3,
   "mixedLosses": 5,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 3,
   "playerId": "f83efefa-b8dd-49c2-90a1-9baa1e03315b",
   "winPct": 33.3,
   "diff": -11,
   "ppg": 18.8,
   "leagueRank": 188,
   "rating": -0.3,
   "ratingGames": 12,
   "confidence": 70,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.7
  },
  {
   "name": "Derek Ritchie",
   "gender": "Male",
   "team": "Bounce Malvern Blue",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 107,
   "totalPointsAgainst": 119,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "cb59f49f-77fb-4034-b432-6af484e696a3",
   "winPct": 33.3,
   "diff": -12,
   "ppg": 17.8,
   "leagueRank": 200,
   "rating": -1.6,
   "ratingGames": 6,
   "confidence": 57,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": -1
  },
  {
   "name": "Sharon Streit",
   "gender": "Female",
   "team": "Home Court",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 51,
   "wins": 17,
   "losses": 34,
   "pointsWon": 895,
   "totalPointsAgainst": 1007,
   "mixedWins": 6,
   "mixedLosses": 20,
   "genderWins": 11,
   "genderLosses": 14,
   "clutchWins": 9,
   "clutchLosses": 12,
   "winPct": 33.3,
   "diff": -112,
   "ppg": 17.5,
   "leagueRank": 133,
   "rating": -1.3,
   "ratingGames": 51,
   "confidence": 91,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0,
   "playerId": "9f9e5b25-d385-4c12-adb3-233c612619c4"
  },
  {
   "name": "Aaron Pine",
   "gender": "Male",
   "team": "Monroe",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 8,
   "losses": 17,
   "pointsWon": 440,
   "totalPointsAgainst": 489,
   "mixedWins": 5,
   "mixedLosses": 7,
   "genderWins": 3,
   "genderLosses": 10,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 32,
   "diff": -49,
   "ppg": 17.6,
   "leagueRank": 163,
   "rating": -0.5,
   "ratingGames": 25,
   "confidence": 84,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.7,
   "playerId": "4aea9e80-552f-49b8-9118-c03af246e089"
  },
  {
   "name": "Ping Peng",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 69,
   "wins": 22,
   "losses": 47,
   "pointsWon": 1194,
   "totalPointsAgainst": 1375,
   "mixedWins": 12,
   "mixedLosses": 25,
   "genderWins": 10,
   "genderLosses": 22,
   "clutchWins": 10,
   "clutchLosses": 12,
   "winPct": 31.9,
   "diff": -181,
   "ppg": 17.3,
   "leagueRank": 137,
   "rating": -1.3,
   "ratingGames": 69,
   "confidence": 92,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.2,
   "playerId": "7af65ce9-d7e3-4d00-b19b-653e6d2dc8d9"
  },
  {
   "name": "Carlo Caronan",
   "gender": "Male",
   "team": "Home Court",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 11,
   "losses": 24,
   "pointsWon": 577,
   "totalPointsAgainst": 687,
   "mixedWins": 6,
   "mixedLosses": 13,
   "genderWins": 5,
   "genderLosses": 11,
   "clutchWins": 3,
   "clutchLosses": 6,
   "winPct": 31.4,
   "diff": -110,
   "ppg": 16.5,
   "leagueRank": 146,
   "rating": -1.5,
   "ratingGames": 35,
   "confidence": 88,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.2,
   "playerId": "8269fb55-3379-47d6-8fe5-f087ac82fe0c"
  },
  {
   "name": "Dennis Yap",
   "gender": "Male",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 4,
   "losses": 9,
   "pointsWon": 234,
   "totalPointsAgainst": 258,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 30.8,
   "diff": -24,
   "ppg": 18,
   "leagueRank": 194,
   "rating": -0.2,
   "ratingGames": 13,
   "confidence": 73,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.3,
   "playerId": "45ea05c6-ef48-4b0a-9f71-a640be038d08"
  },
  {
   "name": "Yue Fei",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 4,
   "losses": 9,
   "pointsWon": 230,
   "totalPointsAgainst": 255,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 3,
   "playerId": "adf031d4-82e4-4f54-8b1c-e27c219669f1",
   "winPct": 30.8,
   "diff": -25,
   "ppg": 17.7,
   "leagueRank": 195,
   "rating": -0.6,
   "ratingGames": 13,
   "confidence": 73,
   "strengthOfPartners": -2,
   "strengthOfOpponents": -0.5
  },
  {
   "name": "Jitendra Arora",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 8,
   "losses": 18,
   "pointsWon": 432,
   "totalPointsAgainst": 513,
   "mixedWins": 5,
   "mixedLosses": 8,
   "genderWins": 3,
   "genderLosses": 10,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 30.8,
   "diff": -81,
   "ppg": 16.6,
   "leagueRank": 168,
   "rating": 0.2,
   "ratingGames": 26,
   "confidence": 84,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 1,
   "playerId": "a117b66b-f319-4fc0-8ee2-feb3f17767d0"
  },
  {
   "name": "Hal Golden",
   "gender": "Male",
   "team": "Bounce Malvern Blue",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 52,
   "wins": 16,
   "losses": 36,
   "pointsWon": 846,
   "totalPointsAgainst": 1027,
   "mixedWins": 8,
   "mixedLosses": 20,
   "genderWins": 8,
   "genderLosses": 16,
   "clutchWins": 6,
   "clutchLosses": 8,
   "winPct": 30.8,
   "diff": -181,
   "ppg": 16.3,
   "leagueRank": 150,
   "rating": -1.8,
   "ratingGames": 52,
   "confidence": 91,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.2,
   "playerId": "476c99a2-15e5-4e99-8471-7c2b6394faa3"
  },
  {
   "name": "Lydia Fiore",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 36,
   "wins": 11,
   "losses": 25,
   "pointsWon": 609,
   "totalPointsAgainst": 716,
   "mixedWins": 6,
   "mixedLosses": 14,
   "genderWins": 5,
   "genderLosses": 11,
   "clutchWins": 6,
   "clutchLosses": 4,
   "winPct": 30.6,
   "diff": -107,
   "ppg": 16.9,
   "leagueRank": 139,
   "rating": -2.8,
   "ratingGames": 36,
   "confidence": 88,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.1,
   "playerId": "602fc2fd-c2f6-4909-9951-c829b5831548"
  },
  {
   "name": "Cindi Goldstein",
   "gender": "Female",
   "team": "Home Court",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 9,
   "losses": 21,
   "pointsWon": 496,
   "totalPointsAgainst": 602,
   "mixedWins": 4,
   "mixedLosses": 10,
   "genderWins": 5,
   "genderLosses": 11,
   "clutchWins": 4,
   "clutchLosses": 6,
   "winPct": 30,
   "diff": -106,
   "ppg": 16.5,
   "leagueRank": 165,
   "rating": -1.6,
   "ratingGames": 30,
   "confidence": 86,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 0.2,
   "playerId": "900813f8-0026-4040-b11e-7222b87545db"
  },
  {
   "name": "Andrea Smith",
   "gender": "Female",
   "team": "Home Court",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 50,
   "wins": 15,
   "losses": 35,
   "pointsWon": 875,
   "totalPointsAgainst": 982,
   "mixedWins": 7,
   "mixedLosses": 17,
   "genderWins": 8,
   "genderLosses": 18,
   "clutchWins": 5,
   "clutchLosses": 8,
   "winPct": 30,
   "diff": -107,
   "ppg": 17.5,
   "leagueRank": 136,
   "rating": -0.5,
   "ratingGames": 50,
   "confidence": 91,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.4,
   "playerId": "1318bc01-f23f-47da-94cb-ac71b8f3e694"
  },
  {
   "name": "Matt Hancock",
   "gender": "Male",
   "team": "Bounce Malvern Blue",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 124,
   "totalPointsAgainst": 142,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "ce58f563-e12a-466e-b741-cafc1bbbd0ad",
   "winPct": 28.6,
   "diff": -18,
   "ppg": 17.7,
   "leagueRank": 203,
   "rating": -1.3,
   "ratingGames": 7,
   "confidence": 59,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": -0.5
  },
  {
   "name": "Helen Liu",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 4,
   "losses": 10,
   "pointsWon": 241,
   "totalPointsAgainst": 271,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "53cc1790-d8b9-4b64-a8b3-6e10b2eeb131",
   "winPct": 28.6,
   "diff": -30,
   "ppg": 17.2,
   "leagueRank": 197,
   "rating": -0.4,
   "ratingGames": 14,
   "confidence": 75,
   "strengthOfPartners": 2,
   "strengthOfOpponents": 1.8
  },
  {
   "name": "Fabienne Yu",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 4,
   "losses": 10,
   "pointsWon": 235,
   "totalPointsAgainst": 278,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 2,
   "playerId": "943ac52a-070f-4bdc-baf8-efe14d0f40ea",
   "winPct": 28.6,
   "diff": -43,
   "ppg": 16.8,
   "leagueRank": 202,
   "rating": -1.1,
   "ratingGames": 14,
   "confidence": 72,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 1
  },
  {
   "name": "Manju Shah",
   "gender": "Female",
   "team": "Monroe",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 6,
   "losses": 15,
   "pointsWon": 349,
   "totalPointsAgainst": 393,
   "mixedWins": 6,
   "mixedLosses": 5,
   "genderWins": 0,
   "genderLosses": 10,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 28.6,
   "diff": -44,
   "ppg": 16.6,
   "leagueRank": 174,
   "rating": -2.4,
   "ratingGames": 21,
   "confidence": 81,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.3,
   "playerId": "08c43a4f-c2ab-4935-b453-fe213b85b002"
  },
  {
   "name": "Tanya Patterson",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 43,
   "wins": 12,
   "losses": 31,
   "pointsWon": 731,
   "totalPointsAgainst": 848,
   "mixedWins": 9,
   "mixedLosses": 12,
   "genderWins": 3,
   "genderLosses": 19,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 27.9,
   "diff": -117,
   "ppg": 17,
   "leagueRank": 142,
   "rating": -1.4,
   "ratingGames": 43,
   "confidence": 90,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": -0.1,
   "playerId": "011a3e6a-c2a3-4dcf-b1f4-9e32a4440789"
  },
  {
   "name": "Ana Bautista",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 6,
   "losses": 16,
   "pointsWon": 397,
   "totalPointsAgainst": 440,
   "mixedWins": 4,
   "mixedLosses": 8,
   "genderWins": 2,
   "genderLosses": 8,
   "clutchWins": 3,
   "clutchLosses": 9,
   "winPct": 27.3,
   "diff": -43,
   "ppg": 18,
   "leagueRank": 171,
   "rating": -0.4,
   "ratingGames": 22,
   "confidence": 82,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.6,
   "playerId": "33692212-f6ed-47f3-bac2-e19da564c0c6"
  },
  {
   "name": "Jamila Sefiane",
   "gender": "Female",
   "team": "Bounce Malvern Blue",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 44,
   "wins": 12,
   "losses": 32,
   "pointsWon": 782,
   "totalPointsAgainst": 881,
   "mixedWins": 7,
   "mixedLosses": 17,
   "genderWins": 5,
   "genderLosses": 15,
   "clutchWins": 6,
   "clutchLosses": 15,
   "winPct": 27.3,
   "diff": -99,
   "ppg": 17.8,
   "leagueRank": 140,
   "rating": -0.1,
   "ratingGames": 44,
   "confidence": 90,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 0.3,
   "playerId": "c0851114-0611-4b02-9589-fd249179eabc"
  },
  {
   "name": "Hal Greenspan",
   "gender": "Male",
   "team": "The Atlantic Club",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 48,
   "wins": 13,
   "losses": 35,
   "pointsWon": 789,
   "totalPointsAgainst": 938,
   "mixedWins": 9,
   "mixedLosses": 15,
   "genderWins": 4,
   "genderLosses": 20,
   "clutchWins": 3,
   "clutchLosses": 8,
   "winPct": 27.1,
   "diff": -149,
   "ppg": 16.4,
   "leagueRank": 149,
   "rating": -2,
   "ratingGames": 48,
   "confidence": 90,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.3,
   "playerId": "36b33227-285b-4959-a3b8-21012748391e"
  },
  {
   "name": "Michael Vincent",
   "gender": "Male",
   "team": "Home Court",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 49,
   "wins": 13,
   "losses": 36,
   "pointsWon": 846,
   "totalPointsAgainst": 973,
   "mixedWins": 6,
   "mixedLosses": 17,
   "genderWins": 7,
   "genderLosses": 19,
   "clutchWins": 5,
   "clutchLosses": 13,
   "winPct": 26.5,
   "diff": -127,
   "ppg": 17.3,
   "leagueRank": 144,
   "rating": -1,
   "ratingGames": 49,
   "confidence": 90,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.4,
   "playerId": "7f44421c-476c-4857-99ed-3376b32289ca"
  },
  {
   "name": "Randy Samuels",
   "gender": "Male",
   "team": "Home Court",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 49,
   "wins": 13,
   "losses": 36,
   "pointsWon": 848,
   "totalPointsAgainst": 981,
   "mixedWins": 5,
   "mixedLosses": 21,
   "genderWins": 8,
   "genderLosses": 15,
   "clutchWins": 8,
   "clutchLosses": 11,
   "winPct": 26.5,
   "diff": -133,
   "ppg": 17.3,
   "leagueRank": 143,
   "rating": -1.2,
   "ratingGames": 49,
   "confidence": 91,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.3,
   "playerId": "294cb11e-477b-435c-a293-b2527bfb4fc3"
  },
  {
   "name": "David Marchese",
   "gender": "Male",
   "team": "Bounce Malvern Blue",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 47,
   "wins": 12,
   "losses": 35,
   "pointsWon": 771,
   "totalPointsAgainst": 942,
   "mixedWins": 7,
   "mixedLosses": 19,
   "genderWins": 5,
   "genderLosses": 16,
   "clutchWins": 4,
   "clutchLosses": 7,
   "winPct": 25.5,
   "diff": -171,
   "ppg": 16.4,
   "leagueRank": 157,
   "rating": -0.3,
   "ratingGames": 47,
   "confidence": 90,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": 0.7,
   "playerId": "aa802904-9a39-4b0e-ad2b-d1a1ea2fcc5b"
  },
  {
   "name": "William Petrie",
   "gender": "Male",
   "team": "Home Court",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 124,
   "totalPointsAgainst": 161,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "3476236c-7373-4436-a062-ca5547f5d834",
   "winPct": 25,
   "diff": -37,
   "ppg": 15.5,
   "leagueRank": 214,
   "rating": -1.9,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.8
  },
  {
   "name": "Lan Bin",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 3,
   "losses": 9,
   "pointsWon": 193,
   "totalPointsAgainst": 246,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 7,
   "clutchWins": 3,
   "clutchLosses": 0,
   "playerId": "97ed17e1-9a68-45fe-adf5-f20d33ea7239",
   "winPct": 25,
   "diff": -53,
   "ppg": 16.1,
   "leagueRank": 206,
   "rating": -2,
   "ratingGames": 12,
   "confidence": 70,
   "strengthOfPartners": -2,
   "strengthOfOpponents": -0.1
  },
  {
   "name": "George Mandl",
   "gender": "Male",
   "team": "Home Court",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 41,
   "wins": 10,
   "losses": 31,
   "pointsWon": 679,
   "totalPointsAgainst": 811,
   "mixedWins": 5,
   "mixedLosses": 15,
   "genderWins": 5,
   "genderLosses": 16,
   "clutchWins": 3,
   "clutchLosses": 6,
   "winPct": 24.4,
   "diff": -132,
   "ppg": 16.6,
   "leagueRank": 155,
   "rating": -1.8,
   "ratingGames": 41,
   "confidence": 89,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.4,
   "playerId": "a0019103-8887-4a15-bbe0-d1c35cdd7b0d"
  },
  {
   "name": "Christine Dugan",
   "gender": "Female",
   "team": "Bounce Malvern Blue",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 71,
   "wins": 17,
   "losses": 54,
   "pointsWon": 1156,
   "totalPointsAgainst": 1413,
   "mixedWins": 11,
   "mixedLosses": 23,
   "genderWins": 6,
   "genderLosses": 31,
   "clutchWins": 7,
   "clutchLosses": 10,
   "winPct": 23.9,
   "diff": -257,
   "ppg": 16.3,
   "leagueRank": 160,
   "rating": -1.1,
   "ratingGames": 71,
   "confidence": 93,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": 0.3,
   "playerId": "213bd4a2-a13d-4540-b93e-69e1e9116ff8"
  },
  {
   "name": "Kathy BernéT",
   "gender": "Female",
   "team": "Bounce Malvern Blue",
   "matches": 12,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 85,
   "wins": 19,
   "losses": 66,
   "pointsWon": 1343,
   "totalPointsAgainst": 1686,
   "mixedWins": 10,
   "mixedLosses": 35,
   "genderWins": 9,
   "genderLosses": 31,
   "clutchWins": 5,
   "clutchLosses": 14,
   "winPct": 22.4,
   "diff": -343,
   "ppg": 15.8,
   "leagueRank": 167,
   "rating": -1.8,
   "ratingGames": 85,
   "confidence": 94,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.5,
   "playerId": "220a5a2a-322c-4799-85a9-1f21b37b6cd4"
  },
  {
   "name": "Nancy Blank",
   "gender": "Female",
   "team": "Bounce Malvern Blue",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 59,
   "wins": 13,
   "losses": 46,
   "pointsWon": 968,
   "totalPointsAgainst": 1179,
   "mixedWins": 7,
   "mixedLosses": 20,
   "genderWins": 6,
   "genderLosses": 26,
   "clutchWins": 3,
   "clutchLosses": 13,
   "winPct": 22,
   "diff": -211,
   "ppg": 16.4,
   "leagueRank": 161,
   "rating": -0.6,
   "ratingGames": 59,
   "confidence": 92,
   "strengthOfPartners": -2.2,
   "strengthOfOpponents": 0.4,
   "playerId": "03fc28a7-e11b-49f8-84e3-0b2a7fd0a9a7"
  },
  {
   "name": "Margaret Weidlich",
   "gender": "Female",
   "team": "Home Court",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 53,
   "wins": 11,
   "losses": 42,
   "pointsWon": 891,
   "totalPointsAgainst": 1071,
   "mixedWins": 7,
   "mixedLosses": 22,
   "genderWins": 4,
   "genderLosses": 20,
   "clutchWins": 3,
   "clutchLosses": 12,
   "winPct": 20.8,
   "diff": -180,
   "ppg": 16.8,
   "leagueRank": 156,
   "rating": -2.2,
   "ratingGames": 53,
   "confidence": 91,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.2,
   "playerId": "7021e97f-1e5e-4adb-ac80-1a9c919caba6"
  },
  {
   "name": "Jeff Laible",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 0,
   "outsideSub": true,
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
   "playerId": "7c1378ee-d449-4c7f-be20-3926ed5d2ff8",
   "winPct": 20,
   "diff": -29,
   "ppg": 14.8,
   "leagueRank": 216,
   "rating": -3.9,
   "ratingGames": 5,
   "confidence": 52,
   "strengthOfPartners": -2.8,
   "strengthOfOpponents": -2.1
  },
  {
   "name": "Ed Gieske",
   "gender": "Male",
   "team": "Bounce Malvern Blue",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 65,
   "wins": 13,
   "losses": 52,
   "pointsWon": 1032,
   "totalPointsAgainst": 1295,
   "mixedWins": 9,
   "mixedLosses": 23,
   "genderWins": 4,
   "genderLosses": 29,
   "clutchWins": 6,
   "clutchLosses": 9,
   "winPct": 20,
   "diff": -263,
   "ppg": 15.9,
   "leagueRank": 173,
   "rating": -1.5,
   "ratingGames": 65,
   "confidence": 92,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 0.4,
   "playerId": "314486b1-6723-4b33-9dba-fa5756065707"
  },
  {
   "name": "Tim Phelan",
   "gender": "Male",
   "team": "Bounce Malvern Blue",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 61,
   "wins": 12,
   "losses": 49,
   "pointsWon": 853,
   "totalPointsAgainst": 1232,
   "mixedWins": 6,
   "mixedLosses": 22,
   "genderWins": 6,
   "genderLosses": 27,
   "clutchWins": 6,
   "clutchLosses": 3,
   "winPct": 19.7,
   "diff": -379,
   "ppg": 14,
   "leagueRank": 190,
   "rating": -4.7,
   "ratingGames": 61,
   "confidence": 92,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.1,
   "playerId": "f5e62236-e4e5-4b34-865e-c92bf027d21c"
  },
  {
   "name": "Kimberly Schwartz",
   "gender": "Female",
   "team": "Home Court",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 9,
   "losses": 37,
   "pointsWon": 713,
   "totalPointsAgainst": 920,
   "mixedWins": 5,
   "mixedLosses": 21,
   "genderWins": 4,
   "genderLosses": 16,
   "clutchWins": 4,
   "clutchLosses": 6,
   "winPct": 19.6,
   "diff": -207,
   "ppg": 15.5,
   "leagueRank": 177,
   "rating": -2.8,
   "ratingGames": 46,
   "confidence": 90,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.4,
   "playerId": "bb235d73-c023-4543-82b0-37abbf747f7d"
  },
  {
   "name": "Susan Zhang",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 51,
   "wins": 10,
   "losses": 41,
   "pointsWon": 802,
   "totalPointsAgainst": 1016,
   "mixedWins": 4,
   "mixedLosses": 19,
   "genderWins": 6,
   "genderLosses": 22,
   "clutchWins": 3,
   "clutchLosses": 7,
   "winPct": 19.6,
   "diff": -214,
   "ppg": 15.7,
   "leagueRank": 176,
   "rating": -1.3,
   "ratingGames": 51,
   "confidence": 91,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": 0.4,
   "playerId": "f3be5948-f902-49ef-886c-190ad0cca61f"
  },
  {
   "name": "Lucy Chow",
   "gender": "Female",
   "team": "Bounce Malvern Blue",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 56,
   "wins": 11,
   "losses": 45,
   "pointsWon": 906,
   "totalPointsAgainst": 1130,
   "mixedWins": 6,
   "mixedLosses": 22,
   "genderWins": 5,
   "genderLosses": 23,
   "clutchWins": 5,
   "clutchLosses": 15,
   "winPct": 19.6,
   "diff": -224,
   "ppg": 16.2,
   "leagueRank": 170,
   "rating": -2.6,
   "ratingGames": 56,
   "confidence": 92,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": -0.1,
   "playerId": "84f2d830-3dbf-4dfd-bd4b-f9eb3fb04091"
  },
  {
   "name": "Michael Vollmer",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 59,
   "wins": 11,
   "losses": 48,
   "pointsWon": 925,
   "totalPointsAgainst": 1192,
   "mixedWins": 2,
   "mixedLosses": 29,
   "genderWins": 9,
   "genderLosses": 19,
   "clutchWins": 3,
   "clutchLosses": 7,
   "winPct": 18.6,
   "diff": -267,
   "ppg": 15.7,
   "leagueRank": 178,
   "rating": -3.4,
   "ratingGames": 59,
   "confidence": 92,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": -0.3,
   "playerId": "148387a8-f20a-44df-981d-0d9d2e7bf443"
  },
  {
   "name": "Ricardo Lisojo",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 2,
   "losses": 9,
   "pointsWon": 176,
   "totalPointsAgainst": 220,
   "mixedWins": 1,
   "mixedLosses": 5,
   "genderWins": 1,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "dc6e9a73-87dd-478f-bcd2-a0bd39b91c86",
   "winPct": 18.2,
   "diff": -44,
   "ppg": 16,
   "leagueRank": 208,
   "rating": -2.1,
   "ratingGames": 11,
   "confidence": 70,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.2
  },
  {
   "name": "Jiang Jin",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 106,
   "totalPointsAgainst": 118,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "579cead3-d960-4c14-8905-8c17c70ca003",
   "winPct": 16.7,
   "diff": -12,
   "ppg": 17.7,
   "leagueRank": 205,
   "rating": -2.2,
   "ratingGames": 6,
   "confidence": 57,
   "strengthOfPartners": -2.1,
   "strengthOfOpponents": -1.9
  },
  {
   "name": "Mike Lasko",
   "gender": "Male",
   "team": "The Atlantic Club",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 101,
   "totalPointsAgainst": 122,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 16.7,
   "diff": -21,
   "ppg": 16.8,
   "leagueRank": 211,
   "rating": -2.3,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.1,
   "playerId": "67a7b684-fd3e-4299-b67b-8ba9e8b1c235"
  },
  {
   "name": "Ezra Chen",
   "gender": "Male",
   "team": "Home Court",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 95,
   "totalPointsAgainst": 124,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 16.7,
   "diff": -29,
   "ppg": 15.8,
   "leagueRank": 218,
   "rating": -1.3,
   "ratingGames": 6,
   "confidence": 57,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.8,
   "playerId": "d53e0fad-a64c-40cb-b79d-0b03bd5a3051"
  },
  {
   "name": "Mary Wu",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 91,
   "totalPointsAgainst": 124,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "90223335-e0fd-43ac-b08f-089499e91e87",
   "winPct": 16.7,
   "diff": -33,
   "ppg": 15.2,
   "leagueRank": 215,
   "rating": -5,
   "ratingGames": 6,
   "confidence": 57,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": -1.9
  },
  {
   "name": "Cary Chen",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 86,
   "totalPointsAgainst": 124,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "54c6a858-4c52-443c-a1b7-8e2f8589dab3",
   "winPct": 16.7,
   "diff": -38,
   "ppg": 14.3,
   "leagueRank": 222,
   "rating": -3.5,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.3
  },
  {
   "name": "Michael Frost",
   "gender": "Male",
   "team": "Bounce Malvern Blue",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 2,
   "losses": 10,
   "pointsWon": 182,
   "totalPointsAgainst": 248,
   "mixedWins": 1,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 16.7,
   "diff": -66,
   "ppg": 15.2,
   "leagueRank": 213,
   "rating": -2.9,
   "ratingGames": 12,
   "confidence": 71,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 0,
   "playerId": "f646f813-82a8-495b-8a4f-fe0f2b0bc19a"
  },
  {
   "name": "Jodi Evans",
   "gender": "Female",
   "team": "Bounce Malvern Blue",
   "matches": 12,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 82,
   "wins": 13,
   "losses": 69,
   "pointsWon": 1287,
   "totalPointsAgainst": 1666,
   "mixedWins": 4,
   "mixedLosses": 36,
   "genderWins": 9,
   "genderLosses": 33,
   "clutchWins": 6,
   "clutchLosses": 15,
   "winPct": 15.9,
   "diff": -379,
   "ppg": 15.7,
   "leagueRank": 182,
   "rating": -2.2,
   "ratingGames": 82,
   "confidence": 94,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.6,
   "playerId": "0470dc02-2e17-4eeb-b282-4767b17e733e"
  },
  {
   "name": "Wendy Frost",
   "gender": "Female",
   "team": "Bounce Malvern Blue",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 3,
   "losses": 16,
   "pointsWon": 275,
   "totalPointsAgainst": 386,
   "mixedWins": 1,
   "mixedLosses": 9,
   "genderWins": 2,
   "genderLosses": 7,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 15.8,
   "diff": -111,
   "ppg": 14.5,
   "leagueRank": 210,
   "rating": -2.5,
   "ratingGames": 19,
   "confidence": 80,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0.7,
   "playerId": "8e271df2-5f90-4f40-b94a-b4eb4ec9fffc"
  },
  {
   "name": "Seth Yablonovitz",
   "gender": "Male",
   "team": "Bounce Malvern Blue",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 2,
   "losses": 11,
   "pointsWon": 181,
   "totalPointsAgainst": 269,
   "mixedWins": 0,
   "mixedLosses": 6,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 15.4,
   "diff": -88,
   "ppg": 13.9,
   "leagueRank": 220,
   "rating": -1.9,
   "ratingGames": 13,
   "confidence": 74,
   "strengthOfPartners": -2,
   "strengthOfOpponents": 1.2,
   "playerId": "9a3091de-08b0-4ade-be7f-a11057e21af4"
  },
  {
   "name": "Linda Schuda",
   "gender": "Female",
   "team": "Pickle Place",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 117,
   "totalPointsAgainst": 139,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 3,
   "playerId": "1151a2c0-1562-43cb-afe3-c9c500358b78",
   "winPct": 14.3,
   "diff": -22,
   "ppg": 16.7,
   "leagueRank": 212,
   "rating": -0.6,
   "ratingGames": 7,
   "confidence": 60,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 1.4
  },
  {
   "name": "Marc Friedman",
   "gender": "Male",
   "team": "Flemington",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 102,
   "totalPointsAgainst": 145,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "d7bdde76-1007-4b20-a804-4efcd08c3598",
   "winPct": 14.3,
   "diff": -43,
   "ppg": 14.6,
   "leagueRank": 223,
   "rating": -3.7,
   "ratingGames": 7,
   "confidence": 61,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0
  },
  {
   "name": "Toby Mcmahan",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 4,
   "losses": 26,
   "pointsWon": 501,
   "totalPointsAgainst": 606,
   "mixedWins": 3,
   "mixedLosses": 14,
   "genderWins": 1,
   "genderLosses": 12,
   "clutchWins": 0,
   "clutchLosses": 6,
   "winPct": 13.3,
   "diff": -105,
   "ppg": 16.7,
   "leagueRank": 184,
   "rating": -3.1,
   "ratingGames": 30,
   "confidence": 86,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.2,
   "playerId": "795d3c75-0080-4a6c-9e78-fcafcd86f1d2"
  },
  {
   "name": "Patrik Grubb",
   "gender": "Male",
   "team": "Bounce Malvern Blue",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 48,
   "wins": 6,
   "losses": 42,
   "pointsWon": 739,
   "totalPointsAgainst": 978,
   "mixedWins": 2,
   "mixedLosses": 20,
   "genderWins": 4,
   "genderLosses": 22,
   "clutchWins": 1,
   "clutchLosses": 8,
   "winPct": 12.5,
   "diff": -239,
   "ppg": 15.4,
   "leagueRank": 189,
   "rating": -1.4,
   "ratingGames": 48,
   "confidence": 91,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": 0.8,
   "playerId": "6bc51379-c588-4388-88a5-f9fc4d5beee1"
  },
  {
   "name": "Wei Zhu",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 47,
   "wins": 5,
   "losses": 42,
   "pointsWon": 706,
   "totalPointsAgainst": 962,
   "mixedWins": 1,
   "mixedLosses": 22,
   "genderWins": 4,
   "genderLosses": 20,
   "clutchWins": 3,
   "clutchLosses": 10,
   "winPct": 10.6,
   "diff": -256,
   "ppg": 15,
   "leagueRank": 191,
   "rating": -2.2,
   "ratingGames": 47,
   "confidence": 89,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": 0.6,
   "playerId": "937eb27e-1168-4697-ad5c-dd5a6cf3872d"
  },
  {
   "name": "Nanjun Qian",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 45,
   "wins": 4,
   "losses": 41,
   "pointsWon": 665,
   "totalPointsAgainst": 933,
   "mixedWins": 1,
   "mixedLosses": 19,
   "genderWins": 3,
   "genderLosses": 22,
   "clutchWins": 2,
   "clutchLosses": 8,
   "winPct": 8.9,
   "diff": -268,
   "ppg": 14.8,
   "leagueRank": 192,
   "rating": -2.1,
   "ratingGames": 45,
   "confidence": 89,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": 1,
   "playerId": "4d2224a0-7b03-4044-bf22-84010f802e07"
  },
  {
   "name": "Carolyn Dardani-Horensky",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 13,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 80,
   "wins": 5,
   "losses": 75,
   "pointsWon": 1092,
   "totalPointsAgainst": 1659,
   "mixedWins": 2,
   "mixedLosses": 36,
   "genderWins": 3,
   "genderLosses": 39,
   "clutchWins": 3,
   "clutchLosses": 9,
   "winPct": 6.3,
   "diff": -567,
   "ppg": 13.7,
   "leagueRank": 199,
   "rating": -4,
   "ratingGames": 80,
   "confidence": 93,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0.7,
   "playerId": "6acb77b2-e82c-4de7-b333-89fbe85c9997"
  },
  {
   "name": "Peilin Zhang",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 1,
   "losses": 17,
   "pointsWon": 253,
   "totalPointsAgainst": 376,
   "mixedWins": 1,
   "mixedLosses": 7,
   "genderWins": 0,
   "genderLosses": 10,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 5.6,
   "diff": -123,
   "ppg": 14.1,
   "leagueRank": 217,
   "rating": -1.7,
   "ratingGames": 18,
   "confidence": 79,
   "strengthOfPartners": -2.7,
   "strengthOfOpponents": 1,
   "playerId": "af7b661e-bc26-4b53-8e7c-e5657bdba32a"
  },
  {
   "name": "William Brown",
   "gender": "Male",
   "team": "Bounce Malvern Blue",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 1,
   "losses": 17,
   "pointsWon": 232,
   "totalPointsAgainst": 376,
   "mixedWins": 1,
   "mixedLosses": 9,
   "genderWins": 0,
   "genderLosses": 8,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 5.6,
   "diff": -144,
   "ppg": 12.9,
   "leagueRank": 221,
   "rating": -4.9,
   "ratingGames": 18,
   "confidence": 80,
   "strengthOfPartners": -2,
   "strengthOfOpponents": 0,
   "playerId": "629db24f-bcf7-4466-80be-53b29218cd69"
  },
  {
   "name": "Yang Xiang",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 1,
   "losses": 19,
   "pointsWon": 273,
   "totalPointsAgainst": 418,
   "mixedWins": 1,
   "mixedLosses": 8,
   "genderWins": 0,
   "genderLosses": 11,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 5,
   "diff": -145,
   "ppg": 13.7,
   "leagueRank": 219,
   "rating": -2.1,
   "ratingGames": 20,
   "confidence": 81,
   "strengthOfPartners": -2.4,
   "strengthOfOpponents": 1.2,
   "playerId": "e827e6b8-85c6-496c-bf19-1427b356f318"
  },
  {
   "name": "Henry Wang",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 1,
   "losses": 25,
   "pointsWon": 349,
   "totalPointsAgainst": 544,
   "mixedWins": 1,
   "mixedLosses": 12,
   "genderWins": 0,
   "genderLosses": 13,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 3.8,
   "diff": -195,
   "ppg": 13.4,
   "leagueRank": 207,
   "rating": -3.3,
   "ratingGames": 26,
   "confidence": 84,
   "strengthOfPartners": -2.2,
   "strengthOfOpponents": 0.8,
   "playerId": "d9e47350-1ce4-41d5-81d7-d9fbb78efd98"
  },
  {
   "name": "Judy Liu",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 1,
   "losses": 25,
   "pointsWon": 324,
   "totalPointsAgainst": 544,
   "mixedWins": 1,
   "mixedLosses": 14,
   "genderWins": 0,
   "genderLosses": 11,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 3.8,
   "diff": -220,
   "ppg": 12.5,
   "leagueRank": 209,
   "rating": -4.1,
   "ratingGames": 26,
   "confidence": 84,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": 1,
   "playerId": "499cf876-38a5-4db1-84b6-50fd76f1c502"
  },
  {
   "name": "Tracey Carney",
   "gender": "Female",
   "team": "Bounce Malvern Black",
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
   "leagueRank": 230,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "2b02f2fe-f8f7-42a7-bb36-d3f2322cec7c"
  },
  {
   "name": "Michael Dieterle",
   "gender": "Male",
   "team": "Bounce Malvern Black",
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
   "leagueRank": 238,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "4259501c-f1e3-4859-acd0-c25f342a1b92"
  },
  {
   "name": "Elizabeth Cole",
   "gender": "Female",
   "team": "The Atlantic Club",
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
   "leagueRank": 235,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "5dfa8ff0-1cdf-494d-8ec9-dcf05872344e"
  },
  {
   "name": "Avi Yehuda",
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
   "leagueRank": 249,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "63108541-caa6-4e85-874e-e7ad1b7e18b6"
  },
  {
   "name": "Jackie Aiello",
   "gender": "Female",
   "team": "The Atlantic Club",
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
   "leagueRank": 228,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "a853a49d-6ffb-4e22-8627-0471c0edd3de"
  },
  {
   "name": "Mary Plaza",
   "gender": "Female",
   "team": "The Atlantic Club",
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
   "playerId": "ddab2416-6594-4444-b311-80b9eff0a5c6"
  },
  {
   "name": "James Lewandowski",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 85,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "94f58c52-e6d3-4ebf-9dfe-8fd1a399324d",
   "winPct": 0,
   "diff": -20,
   "ppg": 17,
   "leagueRank": 224,
   "rating": -0.8,
   "ratingGames": 5,
   "confidence": 53,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 1.2
  },
  {
   "name": "Glenn Stylides",
   "gender": "Male",
   "team": "The Atlantic Club",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 70,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -35,
   "ppg": 14,
   "leagueRank": 226,
   "rating": -3.8,
   "ratingGames": 5,
   "confidence": 52,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.2,
   "playerId": "ec4fc71f-0607-43b6-ac41-25c9082c9a35"
  },
  {
   "name": "Bin Song",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 59,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "1a3fe8ae-2bb6-472b-b379-62f714bf58a9",
   "winPct": 0,
   "diff": -46,
   "ppg": 11.8,
   "leagueRank": 227,
   "rating": -3.9,
   "ratingGames": 5,
   "confidence": 52,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 1.8
  },
  {
   "name": "Sue Lyle",
   "gender": "Female",
   "team": "Flemington",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 0,
   "losses": 8,
   "pointsWon": 119,
   "totalPointsAgainst": 168,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "5b600631-57fc-476c-9bbb-6951d5ffd294",
   "winPct": 0,
   "diff": -49,
   "ppg": 14.9,
   "leagueRank": 225,
   "rating": -0.9,
   "ratingGames": 8,
   "confidence": 64,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 2.4
  }
 ],
 "teams": [
  {
   "name": "Bounce Malvern Black",
   "w": 12,
   "l": 1,
   "pf": 7836,
   "pa": 6166,
   "gw": 328,
   "gl": 88,
   "diff": 1670,
   "gameDiff": 240,
   "power": 2,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     166,
     42
    ],
    "male": [
     82,
     22
    ],
    "female": [
     80,
     24
    ]
   }
  },
  {
   "name": "Players Courtyard",
   "w": 12,
   "l": 1,
   "pf": 8436,
   "pa": 6980,
   "gw": 307,
   "gl": 109,
   "diff": 1456,
   "gameDiff": 198,
   "power": 1.7,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     155,
     53
    ],
    "male": [
     77,
     27
    ],
    "female": [
     75,
     29
    ]
   }
  },
  {
   "name": "Pickleball Palace",
   "w": 8,
   "l": 5,
   "pf": 7981,
   "pa": 7782,
   "gw": 230,
   "gl": 186,
   "diff": 199,
   "gameDiff": 44,
   "power": 0.4,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     109,
     99
    ],
    "male": [
     65,
     39
    ],
    "female": [
     56,
     48
    ]
   }
  },
  {
   "name": "Flemington",
   "w": 8,
   "l": 5,
   "pf": 8063,
   "pa": 7914,
   "gw": 216,
   "gl": 200,
   "diff": 149,
   "gameDiff": 16,
   "power": 0.5,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     113,
     95
    ],
    "male": [
     53,
     51
    ],
    "female": [
     50,
     54
    ]
   }
  },
  {
   "name": "Pickle Place",
   "w": 7,
   "l": 6,
   "pf": 8103,
   "pa": 7680,
   "gw": 239,
   "gl": 177,
   "diff": 423,
   "gameDiff": 62,
   "power": 0.5,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     115,
     93
    ],
    "male": [
     53,
     51
    ],
    "female": [
     71,
     33
    ]
   }
  },
  {
   "name": "The Atlantic Club",
   "w": 7,
   "l": 6,
   "pf": 7978,
   "pa": 8020,
   "gw": 205,
   "gl": 211,
   "diff": -42,
   "gameDiff": -6,
   "power": 0.1,
   "powerRank": 4,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     103,
     105
    ],
    "male": [
     38,
     66
    ],
    "female": [
     64,
     40
    ]
   }
  },
  {
   "name": "Monroe",
   "w": 6,
   "l": 7,
   "pf": 7350,
   "pa": 7283,
   "gw": 199,
   "gl": 217,
   "diff": 67,
   "gameDiff": -18,
   "power": 0.2,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     104,
     104
    ],
    "male": [
     56,
     48
    ],
    "female": [
     39,
     65
    ]
   }
  },
  {
   "name": "Home Court",
   "w": 3,
   "l": 10,
   "pf": 7371,
   "pa": 8157,
   "gw": 151,
   "gl": 265,
   "diff": -786,
   "gameDiff": -114,
   "power": -0.7,
   "powerRank": 5,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     71,
     137
    ],
    "male": [
     39,
     65
    ],
    "female": [
     41,
     63
    ]
   }
  },
  {
   "name": "Pickle House",
   "w": 1,
   "l": 12,
   "pf": 6796,
   "pa": 8285,
   "gw": 110,
   "gl": 306,
   "diff": -1489,
   "gameDiff": -196,
   "power": -1.4,
   "powerRank": 4,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     58,
     150
    ],
    "male": [
     29,
     75
    ],
    "female": [
     23,
     81
    ]
   }
  },
  {
   "name": "Bounce Malvern Blue",
   "w": 1,
   "l": 12,
   "pf": 6835,
   "pa": 8482,
   "gw": 95,
   "gl": 321,
   "diff": -1647,
   "gameDiff": -226,
   "power": -1.5,
   "powerRank": 5,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     46,
     162
    ],
    "male": [
     28,
     76
    ],
    "female": [
     21,
     83
    ]
   }
  }
 ],
 "duos": [
  {
   "a": "Michael Swell",
   "b": "Tanya Kenney",
   "team": "The Atlantic Club",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.7,
   "avgActual": 5.7,
   "avgExpected": -0.6,
   "aId": "5436acd1-542a-4ca5-a652-c0addcf23ea2",
   "bId": "9136414d-016a-41e3-be48-735a5ef794da"
  },
  {
   "a": "Jane Meng",
   "b": "Janet Garrity",
   "team": "Pickle Place",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 2.5,
   "avgActual": 5.3,
   "avgExpected": 0.3,
   "aId": "c365e1dd-21cf-4f38-a802-1aaaf6d0914b",
   "bId": "e687e44a-22a6-4f8e-a3ac-b328fae537c3"
  },
  {
   "a": "Katherine Maruyama",
   "b": "Brian Aguilar",
   "team": "Bounce Malvern Black",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 2.3,
   "avgActual": 10.3,
   "avgExpected": 5.6,
   "aId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a",
   "bId": "e2678d1f-eb49-4c8c-9e0a-36dc9dca5d47"
  },
  {
   "a": "Aaron Pine",
   "b": "Don Godinez",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 2.3,
   "avgActual": 4,
   "avgExpected": -1.5,
   "aId": "4aea9e80-552f-49b8-9118-c03af246e089",
   "bId": "f706ae79-d09c-4ad4-ac19-837deb84d36d"
  },
  {
   "a": "Kate Curren",
   "b": "Sinitra Siengsanaoh",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.3,
   "avgActual": 9.3,
   "avgExpected": 4.1,
   "aId": "20e006d9-72f9-4f9e-bad5-750694224782",
   "bId": "bd5e1a4c-a9d5-4683-a74e-90c0df2d84cd"
  },
  {
   "a": "Bob Drinane",
   "b": "Aimee Castellano",
   "team": "Flemington",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 2.1,
   "avgActual": 5.6,
   "avgExpected": 1.7,
   "aId": "1611fcd8-0e53-4b13-b061-d588d0bde0fd",
   "bId": "e76985fb-efd1-4180-a340-e4f36abbc8b4"
  },
  {
   "a": "Keith Goldberg",
   "b": "Michael Finkelstein",
   "team": "Bounce Malvern Black",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.1,
   "avgActual": 9.3,
   "avgExpected": 4.5,
   "aId": "37a0fa2c-df0b-4d92-900b-a9f20f441ad8",
   "bId": "861c3f68-2c96-4a96-a75e-645020f73a5c"
  },
  {
   "a": "Rick Vazquez",
   "b": "Brian Gonzalez",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 2.1,
   "avgActual": 5.3,
   "avgExpected": 1.2,
   "aId": "e532dafb-ff0f-43fc-82be-687d34ab8c14",
   "bId": "ecc02ab8-5e9c-4950-89b7-be3f397683c3"
  },
  {
   "a": "Vicki Main",
   "b": "Brian Aguilar",
   "team": "Bounce Malvern Black",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 2,
   "avgActual": 9.2,
   "avgExpected": 5.6,
   "aId": "89bdcff6-2fba-4bde-b831-872bf9ce7843",
   "bId": "e2678d1f-eb49-4c8c-9e0a-36dc9dca5d47"
  },
  {
   "a": "Nancy Blank",
   "b": "Jodi Evans",
   "team": "Bounce Malvern Blue",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": 2,
   "avgActual": -1.6,
   "avgExpected": -4.7,
   "aId": "03fc28a7-e11b-49f8-84e3-0b2a7fd0a9a7",
   "bId": "0470dc02-2e17-4eeb-b282-4767b17e733e"
  },
  {
   "a": "Rosalyn Goldsmith",
   "b": "Pam Friedman",
   "team": "Monroe",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 2,
   "avgActual": 1.8,
   "avgExpected": -1.8,
   "aId": "545c12c3-3098-47ca-b35e-429f37f481f5",
   "bId": "94d51b2d-359c-450c-b1c8-728944462b01"
  },
  {
   "a": "Andrea Smith",
   "b": "Jhon Cifuentes",
   "team": "Home Court",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 2,
   "avgActual": 2,
   "avgExpected": -1.5,
   "aId": "1318bc01-f23f-47da-94cb-ac71b8f3e694",
   "bId": "91f844b2-dd13-45a0-b66d-9b7ea751037a"
  },
  {
   "a": "Kim Hamilton",
   "b": "Stacey Frank",
   "team": "Players Courtyard",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2,
   "avgActual": 8.3,
   "avgExpected": 3.6,
   "aId": "4d6a9dce-3c23-4d65-85f9-8b440c44a318",
   "bId": "768c88bd-683d-4204-8124-a589c8028b6e"
  },
  {
   "a": "Marr Flores",
   "b": "Kate Curren",
   "team": "Pickleball Palace",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 2,
   "avgActual": 6.4,
   "avgExpected": 2.8,
   "aId": "1009522f-1f54-4cf1-a0a0-e24ad64f4a66",
   "bId": "20e006d9-72f9-4f9e-bad5-750694224782"
  },
  {
   "a": "Amy Johnson",
   "b": "Aimee Castellano",
   "team": "Flemington",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.9,
   "avgActual": 5.3,
   "avgExpected": 1,
   "aId": "74e493de-dca7-4bf2-b9ac-630484282502",
   "bId": "e76985fb-efd1-4180-a340-e4f36abbc8b4"
  },
  {
   "a": "Jennifer Burke",
   "b": "Laura Elleman",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.9,
   "avgActual": 4.7,
   "avgExpected": 0.2,
   "aId": "18bcc459-8067-4650-ad73-3183fae3ea1f",
   "bId": "3e6056c2-7c5b-4123-b457-ffcf82d3b422"
  },
  {
   "a": "Barbara Hess",
   "b": "Meryl Nadler",
   "team": "Monroe",
   "n": 12,
   "w": 10,
   "l": 2,
   "synergy": 1.9,
   "avgActual": 3.9,
   "avgExpected": 1.3,
   "aId": "21baa2cb-e882-442e-a5e0-a6d88126c9c3",
   "bId": "90987b97-d181-4c15-9c7c-e0bebff4e9b0"
  },
  {
   "a": "Jingwei Wu",
   "b": "Derek Le",
   "team": "Bounce Malvern Black",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": 1.9,
   "avgActual": 3.9,
   "avgExpected": 1,
   "aId": "58e052c4-6ab5-46a7-8e6c-6c7a465262e5",
   "bId": "8cf7b40c-ed2c-4c8b-83bd-b9f2d486c690"
  },
  {
   "a": "Judy Qiu",
   "b": "Jill Scully",
   "team": "Bounce Malvern Black",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.9,
   "avgActual": 11.5,
   "avgExpected": 7.7,
   "aId": "524b4051-2245-4d13-a9ec-2c2aac3ec980",
   "bId": "754a47b8-0711-4929-928f-9bafe8f9dbc0"
  },
  {
   "a": "Simon Perry",
   "b": "Eric Luque",
   "team": "Flemington",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.9,
   "avgActual": 7.3,
   "avgExpected": 3.4,
   "aId": "03c7bdf6-926c-4d90-9416-117cd3478b50",
   "bId": "b3c28078-ab31-4002-9e09-5fa3f627d8c1"
  },
  {
   "a": "Michael Vincent",
   "b": "Sarah Mcparland",
   "team": "Home Court",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.8,
   "avgActual": 5.3,
   "avgExpected": 1.1,
   "aId": "7f44421c-476c-4857-99ed-3376b32289ca",
   "bId": "958e8cb9-1c97-4932-b495-29c28578a123"
  },
  {
   "a": "Natasha De Carvalho",
   "b": "Joe Palumbo",
   "team": "The Atlantic Club",
   "n": 9,
   "w": 6,
   "l": 3,
   "synergy": 1.7,
   "avgActual": 1.2,
   "avgExpected": -1.3,
   "aId": "462f3a15-22ed-4fa3-b698-78678a5d6966",
   "bId": "b39664c3-1a6e-4493-968f-6e7f7939f694"
  },
  {
   "a": "Denise Richmond",
   "b": "Art Muth",
   "team": "Flemington",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.7,
   "avgActual": 1.6,
   "avgExpected": -1.4,
   "aId": "422cd941-43db-4123-a07e-3316583f51ee",
   "bId": "6bfc3a49-53cb-4c03-b8cb-94552158ccbe"
  },
  {
   "a": "Hayley Yandoli",
   "b": "Rosalyn Goldsmith",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.7,
   "avgActual": 2.7,
   "avgExpected": -1.4,
   "aId": "1fc2dd51-135b-46d6-91ef-9291b573e78a",
   "bId": "545c12c3-3098-47ca-b35e-429f37f481f5"
  },
  {
   "a": "Janet Bellaran",
   "b": "Alice Napolitano",
   "team": "The Atlantic Club",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.7,
   "avgActual": 5,
   "avgExpected": 1,
   "aId": "78d7b1d3-6b6c-4dde-a94f-5d4056b33ee7",
   "bId": "d56483b8-a5b8-4c1f-8437-39fcf90a5030"
  },
  {
   "a": "Judy Qiu",
   "b": "Karen Moliver",
   "team": "Bounce Malvern Black",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.7,
   "avgActual": 11.3,
   "avgExpected": 7.4,
   "aId": "524b4051-2245-4d13-a9ec-2c2aac3ec980",
   "bId": "6412a5fc-5f1f-4dcf-a1b9-c1838eeabec9"
  },
  {
   "a": "Tom Zentmeyer",
   "b": "Marykristin Haskell",
   "team": "Pickle Place",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.7,
   "avgActual": 4.8,
   "avgExpected": 1.4,
   "aId": "c16d16f0-3cc1-4c9d-8bfb-98615ffeaacd",
   "bId": "ecb01f29-37c9-4caa-a023-dc5d2591f375"
  },
  {
   "a": "Jeremy Workman",
   "b": "Tim Phelan",
   "team": "Bounce Malvern Blue",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 1.7,
   "avgActual": -2.2,
   "avgExpected": -5.3,
   "aId": "5a15e437-7769-4d60-bd0c-b6c48176289c",
   "bId": "f5e62236-e4e5-4b34-865e-c92bf027d21c"
  },
  {
   "a": "Kim Hamilton",
   "b": "Susan Debbs",
   "team": "Players Courtyard",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 1.6,
   "avgActual": 6.6,
   "avgExpected": 3.8,
   "aId": "4d6a9dce-3c23-4d65-85f9-8b440c44a318",
   "bId": "753dcbff-f1a6-4fb1-97bf-2f76e08df8b9"
  },
  {
   "a": "Randy Samuels",
   "b": "Robert Huntley",
   "team": "Home Court",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": 1.6,
   "avgActual": 1,
   "avgExpected": -1.3,
   "aId": "294cb11e-477b-435c-a293-b2527bfb4fc3",
   "bId": "b5dec967-9e3a-49b4-b136-597711d099cc"
  },
  {
   "a": "James Shaw",
   "b": "Jeff Lorman",
   "team": "Players Courtyard",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.6,
   "avgActual": 5.3,
   "avgExpected": 2,
   "aId": "439e30a7-6097-4e20-8a7b-25c57dd5b5d0",
   "bId": "75789bbc-0dde-460e-b905-7bd1189c6a90"
  },
  {
   "a": "Michael Vincent",
   "b": "Jhon Cifuentes",
   "team": "Home Court",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": 1.5,
   "avgActual": -0.1,
   "avgExpected": -2.5,
   "aId": "7f44421c-476c-4857-99ed-3376b32289ca",
   "bId": "91f844b2-dd13-45a0-b66d-9b7ea751037a"
  },
  {
   "a": "Clifford Luster",
   "b": "Sarah Mcparland",
   "team": "Home Court",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": 1.5,
   "avgActual": 3,
   "avgExpected": 0.8,
   "aId": "3f47746a-2105-493a-941a-b15c4b02a520",
   "bId": "958e8cb9-1c97-4932-b495-29c28578a123"
  },
  {
   "a": "Brad Daddis",
   "b": "Jonathan Brand",
   "team": "Players Courtyard",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 6.6,
   "avgExpected": 4,
   "aId": "3b22e073-2c4b-4245-a142-29441ec509a3",
   "bId": "3d1b28fd-25f4-4145-bccd-6b25ab627ffe"
  },
  {
   "a": "Michael Dombrowiecki",
   "b": "Eva Danieli",
   "team": "The Atlantic Club",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 4,
   "avgExpected": 0.4,
   "aId": "3ac34ef1-17a5-4ab6-8d17-be4bd5a0a040",
   "bId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae"
  },
  {
   "a": "Jonathan Goldner",
   "b": "Tom Zentmeyer",
   "team": "Pickle Place",
   "n": 14,
   "w": 11,
   "l": 3,
   "synergy": 1.5,
   "avgActual": 5.8,
   "avgExpected": 3.8,
   "aId": "5142be9e-adb4-4f40-8632-1f6daa6d824b",
   "bId": "c16d16f0-3cc1-4c9d-8bfb-98615ffeaacd"
  },
  {
   "a": "Jennifer Burke",
   "b": "Bud Heller",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 5,
   "avgExpected": 1.6,
   "aId": "18bcc459-8067-4650-ad73-3183fae3ea1f",
   "bId": "9282b1b2-6551-481c-b9b8-2a246a49a621"
  },
  {
   "a": "Yi Gu",
   "b": "Guy Ohn",
   "team": "Monroe",
   "n": 10,
   "w": 10,
   "l": 0,
   "synergy": 1.5,
   "avgActual": 7.7,
   "avgExpected": 5.6,
   "aId": "0640ecce-0b14-4eac-9cbd-be86592d6102",
   "bId": "f394b637-236e-4fee-b26f-374c90c3dd1e"
  },
  {
   "a": "Glenn Hillman",
   "b": "Eliezer Mintz",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 3.3,
   "avgExpected": -0.1,
   "aId": "316cd007-2c93-473d-a8d8-61a5fbbfa002",
   "bId": "832fb271-fb5e-43aa-b442-95c03fb78342"
  },
  {
   "a": "Keith Goldberg",
   "b": "Jill Scully",
   "team": "Bounce Malvern Black",
   "n": 10,
   "w": 9,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 7.8,
   "avgExpected": 5.9,
   "aId": "37a0fa2c-df0b-4d92-900b-a9f20f441ad8",
   "bId": "754a47b8-0711-4929-928f-9bafe8f9dbc0"
  },
  {
   "a": "Brad Daddis",
   "b": "Kim Hamilton",
   "team": "Players Courtyard",
   "n": 9,
   "w": 7,
   "l": 2,
   "synergy": 1.4,
   "avgActual": 6.6,
   "avgExpected": 4.5,
   "aId": "3b22e073-2c4b-4245-a142-29441ec509a3",
   "bId": "4d6a9dce-3c23-4d65-85f9-8b440c44a318"
  },
  {
   "a": "Joe Palumbo",
   "b": "Andrew Hyman",
   "team": "The Atlantic Club",
   "n": 10,
   "w": 5,
   "l": 5,
   "synergy": 1.4,
   "avgActual": 1.1,
   "avgExpected": -0.9,
   "aId": "b39664c3-1a6e-4493-968f-6e7f7939f694",
   "bId": "dbda3e07-6332-4467-bdf0-be18b2686573"
  },
  {
   "a": "Yi Gu",
   "b": "Barbara Hess",
   "team": "Monroe",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 8.3,
   "avgExpected": 5.1,
   "aId": "0640ecce-0b14-4eac-9cbd-be86592d6102",
   "bId": "21baa2cb-e882-442e-a5e0-a6d88126c9c3"
  },
  {
   "a": "Brad Oldham",
   "b": "Darren Saks",
   "team": "The Atlantic Club",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 3.3,
   "avgExpected": 0.1,
   "aId": "965b56ee-6fb4-4bd1-9708-8ced2c5dd9a2",
   "bId": "9bf7b8ab-4dfa-442b-be12-77580a5ea1dc"
  },
  {
   "a": "Tanya Kenney",
   "b": "Robert Toledo",
   "team": "The Atlantic Club",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 4.7,
   "avgExpected": 1.4,
   "aId": "9136414d-016a-41e3-be48-735a5ef794da",
   "bId": "a1e0d6a6-b8d4-47b7-bdfc-6cb8670a421d"
  },
  {
   "a": "Jhon Cifuentes",
   "b": "Kajal Sinkar",
   "team": "Home Court",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 0.7,
   "avgExpected": -2.7,
   "aId": "91f844b2-dd13-45a0-b66d-9b7ea751037a",
   "bId": "9d7f6585-d5f4-44fa-a4f9-24737a072f72"
  },
  {
   "a": "Jim Darcangelo",
   "b": "Jennifer Wang",
   "team": "Bounce Malvern Black",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 6.3,
   "avgExpected": 3.4,
   "aId": "0530512b-466d-4ff7-9e89-7961b4a63110",
   "bId": "59d2f8a4-3875-4cd2-8245-123b01ea9e22"
  },
  {
   "a": "Sandro Stefanelli",
   "b": "David Marchese",
   "team": "Bounce Malvern Blue",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.4,
   "avgActual": 0,
   "avgExpected": -3.3,
   "aId": "1872d8d8-f958-4747-af3a-443d5f88a1c3",
   "bId": "aa802904-9a39-4b0e-ad2b-d1a1ea2fcc5b"
  },
  {
   "a": "Margaret Weidlich",
   "b": "Robert Huntley",
   "team": "Home Court",
   "n": 10,
   "w": 4,
   "l": 6,
   "synergy": 1.3,
   "avgActual": -0.6,
   "avgExpected": -2.3,
   "aId": "7021e97f-1e5e-4adb-ac80-1a9c919caba6",
   "bId": "b5dec967-9e3a-49b4-b136-597711d099cc"
  },
  {
   "a": "Derek Le",
   "b": "Katherine Maruyama",
   "team": "Bounce Malvern Black",
   "n": 9,
   "w": 9,
   "l": 0,
   "synergy": 1.3,
   "avgActual": 6.4,
   "avgExpected": 4.6,
   "aId": "8cf7b40c-ed2c-4c8b-83bd-b9f2d486c690",
   "bId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a"
  },
  {
   "a": "Keith Goldberg",
   "b": "Stephanie Woomer",
   "team": "Bounce Malvern Black",
   "n": 8,
   "w": 7,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 8.4,
   "avgExpected": 6.4,
   "aId": "37a0fa2c-df0b-4d92-900b-a9f20f441ad8",
   "bId": "e05f57f5-c898-404e-b86f-c2460cc23b06"
  },
  {
   "a": "Marc Harden",
   "b": "Elyse Diamond",
   "team": "Players Courtyard",
   "n": 9,
   "w": 9,
   "l": 0,
   "synergy": 1.3,
   "avgActual": 7.7,
   "avgExpected": 5.8,
   "aId": "55194d2f-f537-4e19-b901-86c559f25ef2",
   "bId": "a0c9637b-5b23-4797-a46a-d2df7bb0fae9"
  },
  {
   "a": "Nancy Blank",
   "b": "Kathy BernéT",
   "team": "Bounce Malvern Blue",
   "n": 9,
   "w": 3,
   "l": 6,
   "synergy": 1.3,
   "avgActual": -1.6,
   "avgExpected": -3.4,
   "aId": "03fc28a7-e11b-49f8-84e3-0b2a7fd0a9a7",
   "bId": "220a5a2a-322c-4799-85a9-1f21b37b6cd4"
  },
  {
   "a": "Eric Markowitz",
   "b": "Tom Zentmeyer",
   "team": "Pickle Place",
   "n": 9,
   "w": 6,
   "l": 3,
   "synergy": 1.3,
   "avgActual": 3,
   "avgExpected": 1.1,
   "aId": "5a16df6a-43c6-40a7-bfe7-52e5e2ad1948",
   "bId": "c16d16f0-3cc1-4c9d-8bfb-98615ffeaacd"
  },
  {
   "a": "Laura Kang",
   "b": "Stephen Hanak",
   "team": "Pickle Place",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 3.5,
   "avgExpected": 1,
   "aId": "5aaea21a-7e11-4168-8192-89c4c134e1d4",
   "bId": "8f20e88a-a2cf-4e7e-b024-62f23423cf70"
  },
  {
   "a": "Jane Meng",
   "b": "Bruce Aronow",
   "team": "Pickle Place",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 1.3,
   "avgActual": -0.3,
   "avgExpected": -2.5,
   "aId": "c365e1dd-21cf-4f38-a802-1aaaf6d0914b",
   "bId": "c9457ed9-79fb-40ef-b26a-566d206714d4"
  },
  {
   "a": "David Osborne",
   "b": "Todd Stein",
   "team": "Flemington",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.3,
   "avgActual": 1.5,
   "avgExpected": -1.1,
   "aId": "418e7ba5-3e06-40ec-9b83-19d3bf10c9cb",
   "bId": "63fb8f7d-8f83-4bdf-89c7-fc3ca7139df5"
  },
  {
   "a": "Jeff Lorman",
   "b": "Elyse Diamond",
   "team": "Players Courtyard",
   "n": 9,
   "w": 7,
   "l": 2,
   "synergy": 1.3,
   "avgActual": 2.8,
   "avgExpected": 0.9,
   "aId": "75789bbc-0dde-460e-b905-7bd1189c6a90",
   "bId": "a0c9637b-5b23-4797-a46a-d2df7bb0fae9"
  },
  {
   "a": "Christine Dugan",
   "b": "Jamila Sefiane",
   "team": "Bounce Malvern Blue",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 0,
   "avgExpected": -3,
   "aId": "213bd4a2-a13d-4540-b93e-69e1e9116ff8",
   "bId": "c0851114-0611-4b02-9589-fd249179eabc"
  },
  {
   "a": "Marr Flores",
   "b": "Bud Heller",
   "team": "Pickleball Palace",
   "n": 7,
   "w": 7,
   "l": 0,
   "synergy": 1.3,
   "avgActual": 5,
   "avgExpected": 2.9,
   "aId": "1009522f-1f54-4cf1-a0a0-e24ad64f4a66",
   "bId": "9282b1b2-6551-481c-b9b8-2a246a49a621"
  },
  {
   "a": "Hal Greenspan",
   "b": "Alice Napolitano",
   "team": "The Atlantic Club",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 1.3,
   "avgActual": 1,
   "avgExpected": -1.3,
   "aId": "36b33227-285b-4959-a3b8-21012748391e",
   "bId": "d56483b8-a5b8-4c1f-8437-39fcf90a5030"
  },
  {
   "a": "Christine Dugan",
   "b": "Hal Golden",
   "team": "Bounce Malvern Blue",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 1.3,
   "avgActual": 0,
   "avgExpected": -2.2,
   "aId": "213bd4a2-a13d-4540-b93e-69e1e9116ff8",
   "bId": "476c99a2-15e5-4e99-8471-7c2b6394faa3"
  },
  {
   "a": "Charlie Johnston",
   "b": "Kate Curren",
   "team": "Pickleball Palace",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 1.3,
   "avgActual": 7.8,
   "avgExpected": 5.5,
   "aId": "1bad49ab-f2b8-439b-9e4b-3ff3cb8ca325",
   "bId": "20e006d9-72f9-4f9e-bad5-750694224782"
  },
  {
   "a": "Jingwei Wu",
   "b": "Jennifer Wang",
   "team": "Bounce Malvern Black",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 1.3,
   "avgActual": 4.4,
   "avgExpected": 2.4,
   "aId": "58e052c4-6ab5-46a7-8e6c-6c7a465262e5",
   "bId": "59d2f8a4-3875-4cd2-8245-123b01ea9e22"
  },
  {
   "a": "Susan St. Pierre",
   "b": "Scott Rubin",
   "team": "Flemington",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 3.3,
   "avgExpected": 0.3,
   "aId": "001c2d38-829b-4fd0-b249-472f78337387",
   "bId": "c12175df-b959-4efe-95e7-e5298b783da8"
  },
  {
   "a": "Kate Siedell",
   "b": "Elyse Diamond",
   "team": "Players Courtyard",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 1.3,
   "avgActual": 3,
   "avgExpected": 0.6,
   "aId": "8decf039-f1e5-4182-b3cf-6756789ae87a",
   "bId": "a0c9637b-5b23-4797-a46a-d2df7bb0fae9"
  },
  {
   "a": "Amy Johnson",
   "b": "Christine Papa",
   "team": "Flemington",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 2.8,
   "avgExpected": 0.3,
   "aId": "74e493de-dca7-4bf2-b9ac-630484282502",
   "bId": "d156a552-7fa9-488e-9bfa-745feb859950"
  },
  {
   "a": "Nanjun Qian",
   "b": "Jitendra Arora",
   "team": "Pickle House",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 1.2,
   "avgActual": -2.7,
   "avgExpected": -5.2,
   "aId": "4d2224a0-7b03-4044-bf22-84010f802e07",
   "bId": "a117b66b-f319-4fc0-8ee2-feb3f17767d0"
  },
  {
   "a": "Susan Kapit",
   "b": "Barbara Hess",
   "team": "Monroe",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 4,
   "avgExpected": 1.6,
   "aId": "19a34ff6-50a2-4e30-972e-2cec78d4aec3",
   "bId": "21baa2cb-e882-442e-a5e0-a6d88126c9c3"
  },
  {
   "a": "Valerie Interrante",
   "b": "Janine Forrest",
   "team": "Pickle Place",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 1.2,
   "avgActual": 2.4,
   "avgExpected": 0.6,
   "aId": "d2076d9d-aa9e-4904-b971-8da1be95013f",
   "bId": "dd30bbd2-24c2-431a-8b21-2de326c75ab3"
  },
  {
   "a": "Brad Oldham",
   "b": "Joe Palumbo",
   "team": "The Atlantic Club",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 0.3,
   "avgExpected": -2.4,
   "aId": "965b56ee-6fb4-4bd1-9708-8ced2c5dd9a2",
   "bId": "b39664c3-1a6e-4493-968f-6e7f7939f694"
  },
  {
   "a": "Roger Graterol",
   "b": "Helen Liu",
   "team": "Players Courtyard",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 1.3,
   "avgExpected": -1.4,
   "aId": "23262a95-4498-4ca1-87a9-713c02337168",
   "bId": "53cc1790-d8b9-4b64-a8b3-6e10b2eeb131"
  },
  {
   "a": "Jill Scully",
   "b": "Stephanie Woomer",
   "team": "Bounce Malvern Black",
   "n": 11,
   "w": 9,
   "l": 2,
   "synergy": 1.2,
   "avgActual": 4,
   "avgExpected": 2.4,
   "aId": "754a47b8-0711-4929-928f-9bafe8f9dbc0",
   "bId": "e05f57f5-c898-404e-b86f-c2460cc23b06"
  },
  {
   "a": "Bob Drinane",
   "b": "Tara Kramer",
   "team": "Flemington",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.2,
   "avgActual": -0.7,
   "avgExpected": -3.4,
   "aId": "1611fcd8-0e53-4b13-b061-d588d0bde0fd",
   "bId": "dae62b8e-5f8e-4721-8f41-3218518d1e30"
  },
  {
   "a": "Bruce Aronow",
   "b": "Valerie Interrante",
   "team": "Pickle Place",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 2.3,
   "avgExpected": -0.5,
   "aId": "c9457ed9-79fb-40ef-b26a-566d206714d4",
   "bId": "d2076d9d-aa9e-4904-b971-8da1be95013f"
  },
  {
   "a": "Oliveira Karen",
   "b": "Amanda Quinn",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 2.3,
   "avgExpected": -0.4,
   "aId": "80b535f7-a6f6-4905-90ae-69c8695f99be",
   "bId": "f1248cc3-96c3-4671-9b08-533d22eb710f"
  },
  {
   "a": "Brian Rowan",
   "b": "Elyse Diamond",
   "team": "Players Courtyard",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 4,
   "avgExpected": 1.7,
   "aId": "136b6979-e0f4-4af2-9f5e-949b8d4bf423",
   "bId": "a0c9637b-5b23-4797-a46a-d2df7bb0fae9"
  },
  {
   "a": "Jennifer Wang",
   "b": "Karen Moliver",
   "team": "Bounce Malvern Black",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 3.8,
   "avgExpected": 1.3,
   "aId": "59d2f8a4-3875-4cd2-8245-123b01ea9e22",
   "bId": "6412a5fc-5f1f-4dcf-a1b9-c1838eeabec9"
  },
  {
   "a": "Z Zhang",
   "b": "David Eisen",
   "team": "Pickle Place",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 1.2,
   "avgActual": 0.8,
   "avgExpected": -1.2,
   "aId": "95982984-9054-491c-a5a5-b5592c5f02a4",
   "bId": "d4b4ed3c-0c4b-4f8b-9b98-a5d448bfb361"
  },
  {
   "a": "Kathy BernéT",
   "b": "Ed Gieske",
   "team": "Bounce Malvern Blue",
   "n": 9,
   "w": 3,
   "l": 6,
   "synergy": 1.1,
   "avgActual": -2.7,
   "avgExpected": -4.3,
   "aId": "220a5a2a-322c-4799-85a9-1f21b37b6cd4",
   "bId": "314486b1-6723-4b33-9dba-fa5756065707"
  },
  {
   "a": "Robert Block",
   "b": "Harriet Levin",
   "team": "Pickle Place",
   "n": 8,
   "w": 8,
   "l": 0,
   "synergy": 1.1,
   "avgActual": 4,
   "avgExpected": 2.3,
   "aId": "23d1d322-f31d-46b3-bf95-d86faab58b06",
   "bId": "aeff8297-a479-4b3b-9a49-72c410ac8e26"
  },
  {
   "a": "Lucy Li",
   "b": "Susan Zhang",
   "team": "Pickle House",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 1.1,
   "avgActual": 1,
   "avgExpected": -0.9,
   "aId": "d22f8b69-76a6-41e0-8b04-c5dae68d9f69",
   "bId": "f3be5948-f902-49ef-886c-190ad0cca61f"
  },
  {
   "a": "Carolyn Dardani-Horensky",
   "b": "Susan Zhang",
   "team": "Pickle House",
   "n": 9,
   "w": 1,
   "l": 8,
   "synergy": 1.1,
   "avgActual": -5.6,
   "avgExpected": -7.1,
   "aId": "6acb77b2-e82c-4de7-b333-89fbe85c9997",
   "bId": "f3be5948-f902-49ef-886c-190ad0cca61f"
  },
  {
   "a": "Susan Kapit",
   "b": "Don Godinez",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 3.3,
   "avgExpected": 0.9,
   "aId": "19a34ff6-50a2-4e30-972e-2cec78d4aec3",
   "bId": "f706ae79-d09c-4ad4-ac19-837deb84d36d"
  },
  {
   "a": "Meryl Nadler",
   "b": "Guy Ohn",
   "team": "Monroe",
   "n": 7,
   "w": 7,
   "l": 0,
   "synergy": 1.1,
   "avgActual": 4.9,
   "avgExpected": 3.2,
   "aId": "90987b97-d181-4c15-9c7c-e0bebff4e9b0",
   "bId": "f394b637-236e-4fee-b26f-374c90c3dd1e"
  },
  {
   "a": "David Osborne",
   "b": "Amy Johnson",
   "team": "Flemington",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.1,
   "avgActual": 2.7,
   "avgExpected": 0.2,
   "aId": "418e7ba5-3e06-40ec-9b83-19d3bf10c9cb",
   "bId": "74e493de-dca7-4bf2-b9ac-630484282502"
  },
  {
   "a": "Sarah Mcparland",
   "b": "Sharon Streit",
   "team": "Home Court",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.1,
   "avgActual": 2,
   "avgExpected": -0.2,
   "aId": "958e8cb9-1c97-4932-b495-29c28578a123",
   "bId": "9f9e5b25-d385-4c12-adb3-233c612619c4"
  },
  {
   "a": "Kajal Sinkar",
   "b": "Anita Bobba",
   "team": "Home Court",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.1,
   "avgActual": 3.3,
   "avgExpected": 0.8,
   "aId": "9d7f6585-d5f4-44fa-a4f9-24737a072f72",
   "bId": "abc68487-3415-49a2-bdfb-dd56eb5af20d"
  },
  {
   "a": "Lucy Chow",
   "b": "Tim Phelan",
   "team": "Bounce Malvern Blue",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.1,
   "avgActual": -2,
   "avgExpected": -4.6,
   "aId": "84f2d830-3dbf-4dfd-bd4b-f9eb3fb04091",
   "bId": "f5e62236-e4e5-4b34-865e-c92bf027d21c"
  },
  {
   "a": "Jhon Cifuentes",
   "b": "Robert Huntley",
   "team": "Home Court",
   "n": 10,
   "w": 6,
   "l": 4,
   "synergy": 1,
   "avgActual": 0.1,
   "avgExpected": -1.3,
   "aId": "91f844b2-dd13-45a0-b66d-9b7ea751037a",
   "bId": "b5dec967-9e3a-49b4-b136-597711d099cc"
  },
  {
   "a": "Karen Moliver",
   "b": "Brian Aguilar",
   "team": "Bounce Malvern Black",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 1,
   "avgActual": 5.3,
   "avgExpected": 3.7,
   "aId": "6412a5fc-5f1f-4dcf-a1b9-c1838eeabec9",
   "bId": "e2678d1f-eb49-4c8c-9e0a-36dc9dca5d47"
  },
  {
   "a": "Nancy Blank",
   "b": "Tim Phelan",
   "team": "Bounce Malvern Blue",
   "n": 11,
   "w": 3,
   "l": 8,
   "synergy": 1,
   "avgActual": -4.1,
   "avgExpected": -5.4,
   "aId": "03fc28a7-e11b-49f8-84e3-0b2a7fd0a9a7",
   "bId": "f5e62236-e4e5-4b34-865e-c92bf027d21c"
  },
  {
   "a": "Pam Boyd",
   "b": "Kate Siedell",
   "team": "Players Courtyard",
   "n": 16,
   "w": 14,
   "l": 2,
   "synergy": 1,
   "avgActual": 5.5,
   "avgExpected": 4.3,
   "aId": "04aefa29-20e3-41b7-a680-19d13f9d4289",
   "bId": "8decf039-f1e5-4182-b3cf-6756789ae87a"
  },
  {
   "a": "Bruce Bilow",
   "b": "Eva Danieli",
   "team": "The Atlantic Club",
   "n": 12,
   "w": 7,
   "l": 5,
   "synergy": 1,
   "avgActual": 1.3,
   "avgExpected": 0,
   "aId": "1607c79a-6ca1-4214-a557-5ae0617ac8a1",
   "bId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae"
  },
  {
   "a": "Harriet Levin",
   "b": "Tom Zentmeyer",
   "team": "Pickle Place",
   "n": 16,
   "w": 15,
   "l": 1,
   "synergy": 1,
   "avgActual": 5.8,
   "avgExpected": 4.5,
   "aId": "aeff8297-a479-4b3b-9a49-72c410ac8e26",
   "bId": "c16d16f0-3cc1-4c9d-8bfb-98615ffeaacd"
  },
  {
   "a": "Meryl Nadler",
   "b": "Scott Friedman",
   "team": "Monroe",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 1,
   "avgActual": 0,
   "avgExpected": -1.7,
   "aId": "90987b97-d181-4c15-9c7c-e0bebff4e9b0",
   "bId": "d40fde69-77a2-4998-a631-fba159129d2f"
  },
  {
   "a": "Michael Vollmer",
   "b": "Nanjun Qian",
   "team": "Pickle House",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 1,
   "avgActual": -3.2,
   "avgExpected": -4.9,
   "aId": "148387a8-f20a-44df-981d-0d9d2e7bf443",
   "bId": "4d2224a0-7b03-4044-bf22-84010f802e07"
  },
  {
   "a": "Nanjun Qian",
   "b": "Carolyn Dardani-Horensky",
   "team": "Pickle House",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 1,
   "avgActual": -4.3,
   "avgExpected": -6.7,
   "aId": "4d2224a0-7b03-4044-bf22-84010f802e07",
   "bId": "6acb77b2-e82c-4de7-b333-89fbe85c9997"
  },
  {
   "a": "Robert Block",
   "b": "Bruce Aronow",
   "team": "Pickle Place",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1,
   "avgActual": -0.3,
   "avgExpected": -2.8,
   "aId": "23d1d322-f31d-46b3-bf95-d86faab58b06",
   "bId": "c9457ed9-79fb-40ef-b26a-566d206714d4"
  },
  {
   "a": "Jill Lesnik",
   "b": "Carly Pfeffer",
   "team": "Pickleball Palace",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 1,
   "avgActual": 4.2,
   "avgExpected": 2.5,
   "aId": "340fe4f1-f3ed-4fb1-9ba3-74752ee1d864",
   "bId": "387e74d4-66ee-4a52-a4ac-aae3dbe1d21b"
  },
  {
   "a": "Kristen Soucie",
   "b": "Eric Luque",
   "team": "Flemington",
   "n": 6,
   "w": 6,
   "l": 0,
   "synergy": 1,
   "avgActual": 4,
   "avgExpected": 2.4,
   "aId": "4745eae2-7562-424a-92de-efcb84034406",
   "bId": "b3c28078-ab31-4002-9e09-5fa3f627d8c1"
  },
  {
   "a": "Eliezer Mintz",
   "b": "Nissim Fadida",
   "team": "Monroe",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1,
   "avgActual": 3.8,
   "avgExpected": 1.7,
   "aId": "832fb271-fb5e-43aa-b442-95c03fb78342",
   "bId": "bc812947-abde-46ce-9f6a-ab6475fbbf99"
  },
  {
   "a": "Susan St. Pierre",
   "b": "Denise Richmond",
   "team": "Flemington",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1,
   "avgActual": 5,
   "avgExpected": 2.7,
   "aId": "001c2d38-829b-4fd0-b249-472f78337387",
   "bId": "422cd941-43db-4123-a07e-3316583f51ee"
  },
  {
   "a": "Susan St. Pierre",
   "b": "Art Muth",
   "team": "Flemington",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1,
   "avgActual": 3.3,
   "avgExpected": 1.1,
   "aId": "001c2d38-829b-4fd0-b249-472f78337387",
   "bId": "6bfc3a49-53cb-4c03-b8cb-94552158ccbe"
  },
  {
   "a": "Janet Bellaran",
   "b": "Ali Fordyce",
   "team": "The Atlantic Club",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1,
   "avgActual": 4.3,
   "avgExpected": 1.9,
   "aId": "78d7b1d3-6b6c-4dde-a94f-5d4056b33ee7",
   "bId": "9e2cc278-7356-491f-b853-945e33a988d2"
  },
  {
   "a": "Surbhi Sabharwal",
   "b": "Jhon Cifuentes",
   "team": "Home Court",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 2.7,
   "avgExpected": 0.7,
   "aId": "6ff2d1f1-1ffd-4140-820d-b2333c370dcd",
   "bId": "91f844b2-dd13-45a0-b66d-9b7ea751037a"
  },
  {
   "a": "Ping Peng",
   "b": "Lucy Li",
   "team": "Pickle House",
   "n": 13,
   "w": 7,
   "l": 6,
   "synergy": 0.9,
   "avgActual": 0.3,
   "avgExpected": -0.9,
   "aId": "7af65ce9-d7e3-4d00-b19b-653e6d2dc8d9",
   "bId": "d22f8b69-76a6-41e0-8b04-c5dae68d9f69"
  },
  {
   "a": "Jim Darcangelo",
   "b": "Brian Aguilar",
   "team": "Bounce Malvern Black",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 6,
   "avgExpected": 4.3,
   "aId": "0530512b-466d-4ff7-9e89-7961b4a63110",
   "bId": "e2678d1f-eb49-4c8c-9e0a-36dc9dca5d47"
  },
  {
   "a": "Jodi Evans",
   "b": "Kathy BernéT",
   "team": "Bounce Malvern Blue",
   "n": 10,
   "w": 2,
   "l": 8,
   "synergy": 0.9,
   "avgActual": -4.1,
   "avgExpected": -5.4,
   "aId": "0470dc02-2e17-4eeb-b282-4767b17e733e",
   "bId": "220a5a2a-322c-4799-85a9-1f21b37b6cd4"
  },
  {
   "a": "Sergey Sprikut",
   "b": "Scott Friedman",
   "team": "Monroe",
   "n": 9,
   "w": 6,
   "l": 3,
   "synergy": 0.9,
   "avgActual": 2.4,
   "avgExpected": 1.1,
   "aId": "28b4b9e6-0b25-473c-8386-2876bf60efab",
   "bId": "d40fde69-77a2-4998-a631-fba159129d2f"
  },
  {
   "a": "Rosalyn Goldsmith",
   "b": "Don Godinez",
   "team": "Monroe",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 0.9,
   "avgActual": 0,
   "avgExpected": -1.4,
   "aId": "545c12c3-3098-47ca-b35e-429f37f481f5",
   "bId": "f706ae79-d09c-4ad4-ac19-837deb84d36d"
  },
  {
   "a": "Stephen Hanak",
   "b": "David Eisen",
   "team": "Pickle Place",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 0.3,
   "avgExpected": -1.7,
   "aId": "8f20e88a-a2cf-4e7e-b024-62f23423cf70",
   "bId": "d4b4ed3c-0c4b-4f8b-9b98-a5d448bfb361"
  },
  {
   "a": "Maureen Conery",
   "b": "Meryl Nadler",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 0.7,
   "avgExpected": -1.3,
   "aId": "89dd8b9e-14f8-40ac-8127-3bfac0ac7888",
   "bId": "90987b97-d181-4c15-9c7c-e0bebff4e9b0"
  },
  {
   "a": "Laurie Guagenty",
   "b": "Janet Bellaran",
   "team": "The Atlantic Club",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 2,
   "avgExpected": -0.2,
   "aId": "013faf14-ed91-4d3f-baff-dfaf90310790",
   "bId": "78d7b1d3-6b6c-4dde-a94f-5d4056b33ee7"
  },
  {
   "a": "Simon Perry",
   "b": "Tara Kramer",
   "team": "Flemington",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.9,
   "avgActual": -0.8,
   "avgExpected": -2.3,
   "aId": "03c7bdf6-926c-4d90-9416-117cd3478b50",
   "bId": "dae62b8e-5f8e-4721-8f41-3218518d1e30"
  },
  {
   "a": "Liz Cuozzo",
   "b": "Eva Danieli",
   "team": "The Atlantic Club",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 3.5,
   "avgExpected": 2.1,
   "aId": "2b2d474d-281c-42d7-854b-6bfe32f20563",
   "bId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae"
  },
  {
   "a": "Kate Curren",
   "b": "Andrea Dellechiaie",
   "team": "Pickleball Palace",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 6.9,
   "avgExpected": 5.4,
   "aId": "20e006d9-72f9-4f9e-bad5-750694224782",
   "bId": "84e4d40d-3b98-4822-b073-e9dc71c0d4d7"
  },
  {
   "a": "Elyse Diamond",
   "b": "Annemarie Mccartney",
   "team": "Players Courtyard",
   "n": 8,
   "w": 8,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 6.3,
   "avgExpected": 4.8,
   "aId": "a0c9637b-5b23-4797-a46a-d2df7bb0fae9",
   "bId": "d08d78db-7d20-4dc2-a37b-41841c4624fd"
  },
  {
   "a": "Lance Brown",
   "b": "Wolfgang Chincarini",
   "team": "Pickle House",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 4.3,
   "avgExpected": 2.4,
   "aId": "5d13288d-69fe-4d0b-bf69-51c1d24e3409",
   "bId": "e31476db-1f0b-44e3-b3da-a5bc2c8dbc62"
  },
  {
   "a": "Fabienne Yu",
   "b": "Frank Ding",
   "team": "Pickle House",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.9,
   "avgActual": -1,
   "avgExpected": -3.1,
   "aId": "943ac52a-070f-4bdc-baf8-efe14d0f40ea",
   "bId": "f83efefa-b8dd-49c2-90a1-9baa1e03315b"
  },
  {
   "a": "Jill Scully",
   "b": "Vicki Main",
   "team": "Bounce Malvern Black",
   "n": 8,
   "w": 7,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 4.5,
   "avgExpected": 3.3,
   "aId": "754a47b8-0711-4929-928f-9bafe8f9dbc0",
   "bId": "89bdcff6-2fba-4bde-b831-872bf9ce7843"
  },
  {
   "a": "Nanjun Qian",
   "b": "Ping Peng",
   "team": "Pickle House",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": 0.8,
   "avgActual": -5,
   "avgExpected": -6.5,
   "aId": "4d2224a0-7b03-4044-bf22-84010f802e07",
   "bId": "7af65ce9-d7e3-4d00-b19b-653e6d2dc8d9"
  },
  {
   "a": "Robert Block",
   "b": "Laura Kang",
   "team": "Pickle Place",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.8,
   "avgActual": 0.5,
   "avgExpected": -1.1,
   "aId": "23d1d322-f31d-46b3-bf95-d86faab58b06",
   "bId": "5aaea21a-7e11-4168-8192-89c4c134e1d4"
  },
  {
   "a": "Harriet Levin",
   "b": "Valerie Interrante",
   "team": "Pickle Place",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 4.1,
   "avgExpected": 2.9,
   "aId": "aeff8297-a479-4b3b-9a49-72c410ac8e26",
   "bId": "d2076d9d-aa9e-4904-b971-8da1be95013f"
  },
  {
   "a": "Ana Bautista",
   "b": "Chris Heimerle",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 2.3,
   "avgExpected": 0.5,
   "aId": "33692212-f6ed-47f3-bac2-e19da564c0c6",
   "bId": "fc870151-9569-4e09-883d-c81e9cfaf6d8"
  },
  {
   "a": "Eliezer Mintz",
   "b": "Guy Ohn",
   "team": "Monroe",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 4,
   "avgExpected": 2.8,
   "aId": "832fb271-fb5e-43aa-b442-95c03fb78342",
   "bId": "f394b637-236e-4fee-b26f-374c90c3dd1e"
  },
  {
   "a": "Bud Heller",
   "b": "Sinitra Siengsanaoh",
   "team": "Pickleball Palace",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.8,
   "avgActual": 2,
   "avgExpected": 0.5,
   "aId": "9282b1b2-6551-481c-b9b8-2a246a49a621",
   "bId": "bd5e1a4c-a9d5-4683-a74e-90c0df2d84cd"
  },
  {
   "a": "Hayley Yandoli",
   "b": "Eliezer Mintz",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 1,
   "avgExpected": -0.8,
   "aId": "1fc2dd51-135b-46d6-91ef-9291b573e78a",
   "bId": "832fb271-fb5e-43aa-b442-95c03fb78342"
  },
  {
   "a": "Janet Bellaran",
   "b": "Andrew Hyman",
   "team": "The Atlantic Club",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.8,
   "avgActual": 2.8,
   "avgExpected": 1.3,
   "aId": "78d7b1d3-6b6c-4dde-a94f-5d4056b33ee7",
   "bId": "dbda3e07-6332-4467-bdf0-be18b2686573"
  },
  {
   "a": "Lance Brown",
   "b": "Ping Peng",
   "team": "Pickle House",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": 0.8,
   "avgActual": -0.1,
   "avgExpected": -1.4,
   "aId": "5d13288d-69fe-4d0b-bf69-51c1d24e3409",
   "bId": "7af65ce9-d7e3-4d00-b19b-653e6d2dc8d9"
  },
  {
   "a": "Tanya Patterson",
   "b": "Lance Brown",
   "team": "Pickle House",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.8,
   "avgActual": 0.8,
   "avgExpected": -0.4,
   "aId": "011a3e6a-c2a3-4dcf-b1f4-9e32a4440789",
   "bId": "5d13288d-69fe-4d0b-bf69-51c1d24e3409"
  },
  {
   "a": "Jill Lesnik",
   "b": "David Coleman",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.8,
   "avgActual": 6.7,
   "avgExpected": 4.9,
   "aId": "340fe4f1-f3ed-4fb1-9ba3-74752ee1d864",
   "bId": "ec3ddbcf-c126-4225-901a-c3c3a9ac479b"
  },
  {
   "a": "Kristen Soucie",
   "b": "Scott Rubin",
   "team": "Flemington",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 4,
   "avgExpected": 2.3,
   "aId": "4745eae2-7562-424a-92de-efcb84034406",
   "bId": "c12175df-b959-4efe-95e7-e5298b783da8"
  },
  {
   "a": "Michael Vollmer",
   "b": "Wolfgang Chincarini",
   "team": "Pickle House",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 0.7,
   "avgActual": 2,
   "avgExpected": 0.9,
   "aId": "148387a8-f20a-44df-981d-0d9d2e7bf443",
   "bId": "e31476db-1f0b-44e3-b3da-a5bc2c8dbc62"
  },
  {
   "a": "Michael Dombrowiecki",
   "b": "Tanya Kenney",
   "team": "The Atlantic Club",
   "n": 9,
   "w": 5,
   "l": 4,
   "synergy": 0.7,
   "avgActual": -0.6,
   "avgExpected": -1.5,
   "aId": "3ac34ef1-17a5-4ab6-8d17-be4bd5a0a040",
   "bId": "9136414d-016a-41e3-be48-735a5ef794da"
  },
  {
   "a": "Bruce Bilow",
   "b": "Michael Dombrowiecki",
   "team": "The Atlantic Club",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.7,
   "avgActual": -0.2,
   "avgExpected": -1.4,
   "aId": "1607c79a-6ca1-4214-a557-5ae0617ac8a1",
   "bId": "3ac34ef1-17a5-4ab6-8d17-be4bd5a0a040"
  },
  {
   "a": "Jane Meng",
   "b": "Valerie Interrante",
   "team": "Pickle Place",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": 0.7,
   "avgActual": 1.1,
   "avgExpected": 0,
   "aId": "c365e1dd-21cf-4f38-a802-1aaaf6d0914b",
   "bId": "d2076d9d-aa9e-4904-b971-8da1be95013f"
  },
  {
   "a": "Cynthia Eisen",
   "b": "Janine Forrest",
   "team": "Pickle Place",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 2.8,
   "avgExpected": 1.6,
   "aId": "4c762958-33e1-4b41-8077-424cb639af7e",
   "bId": "dd30bbd2-24c2-431a-8b21-2de326c75ab3"
  },
  {
   "a": "Tracey Collins",
   "b": "Guy Ohn",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 1.3,
   "avgExpected": -0.3,
   "aId": "f01a9ccb-b72e-4980-bdc0-73ed5a72f92c",
   "bId": "f394b637-236e-4fee-b26f-374c90c3dd1e"
  },
  {
   "a": "Jingwei Wu",
   "b": "Katherine Maruyama",
   "team": "Bounce Malvern Black",
   "n": 7,
   "w": 7,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 5.7,
   "avgExpected": 4.6,
   "aId": "58e052c4-6ab5-46a7-8e6c-6c7a465262e5",
   "bId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a"
  },
  {
   "a": "Christine Dugan",
   "b": "David Marchese",
   "team": "Bounce Malvern Blue",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.7,
   "avgActual": -1,
   "avgExpected": -2.7,
   "aId": "213bd4a2-a13d-4540-b93e-69e1e9116ff8",
   "bId": "aa802904-9a39-4b0e-ad2b-d1a1ea2fcc5b"
  },
  {
   "a": "Denise Richmond",
   "b": "Todd Stein",
   "team": "Flemington",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.7,
   "avgActual": 0.5,
   "avgExpected": -0.9,
   "aId": "422cd941-43db-4123-a07e-3316583f51ee",
   "bId": "63fb8f7d-8f83-4bdf-89c7-fc3ca7139df5"
  },
  {
   "a": "Jill Lesnik",
   "b": "Amanda Quinn",
   "team": "Pickleball Palace",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 5.1,
   "avgExpected": 4,
   "aId": "340fe4f1-f3ed-4fb1-9ba3-74752ee1d864",
   "bId": "f1248cc3-96c3-4671-9b08-533d22eb710f"
  },
  {
   "a": "Jennifer Wang",
   "b": "Stephanie Woomer",
   "team": "Bounce Malvern Black",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 8,
   "avgExpected": 6.7,
   "aId": "59d2f8a4-3875-4cd2-8245-123b01ea9e22",
   "bId": "e05f57f5-c898-404e-b86f-c2460cc23b06"
  },
  {
   "a": "Chanda Mccoy",
   "b": "Scott Rubin",
   "team": "Flemington",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 3,
   "avgExpected": 1.4,
   "aId": "30cb78cb-f962-40f9-bd02-78d336920431",
   "bId": "c12175df-b959-4efe-95e7-e5298b783da8"
  },
  {
   "a": "Edwin Saxman",
   "b": "Janine Forrest",
   "team": "Pickle Place",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 1.3,
   "avgExpected": -0.4,
   "aId": "32244c70-6859-44af-a408-8294d65b592d",
   "bId": "dd30bbd2-24c2-431a-8b21-2de326c75ab3"
  },
  {
   "a": "Jean Wang",
   "b": "Lucy Li",
   "team": "Pickle House",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 2.8,
   "avgExpected": 1.4,
   "aId": "1188fc00-7ef5-4671-9ef9-2c7d162a2604",
   "bId": "d22f8b69-76a6-41e0-8b04-c5dae68d9f69"
  },
  {
   "a": "Kathy BernéT",
   "b": "Brenden Dorley",
   "team": "Bounce Malvern Blue",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.7,
   "avgActual": 0.2,
   "avgExpected": -1.1,
   "aId": "220a5a2a-322c-4799-85a9-1f21b37b6cd4",
   "bId": "99c7c387-dea4-4b5b-a3b6-639ae2f806d2"
  },
  {
   "a": "Clifford Luster",
   "b": "Margaret Weidlich",
   "team": "Home Court",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.7,
   "avgActual": -0.3,
   "avgExpected": -2.1,
   "aId": "3f47746a-2105-493a-941a-b15c4b02a520",
   "bId": "7021e97f-1e5e-4adb-ac80-1a9c919caba6"
  },
  {
   "a": "Kate Curren",
   "b": "Alex Lee",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 5.8,
   "avgExpected": 4.3,
   "aId": "20e006d9-72f9-4f9e-bad5-750694224782",
   "bId": "22e2201d-16d7-4474-847b-5f4f0cef44e6"
  },
  {
   "a": "Alex Lee",
   "b": "Carly Pfeffer",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 5,
   "avgExpected": 3.4,
   "aId": "22e2201d-16d7-4474-847b-5f4f0cef44e6",
   "bId": "387e74d4-66ee-4a52-a4ac-aae3dbe1d21b"
  },
  {
   "a": "Kristen Soucie",
   "b": "Aimee Castellano",
   "team": "Flemington",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 2,
   "avgExpected": 0.7,
   "aId": "4745eae2-7562-424a-92de-efcb84034406",
   "bId": "e76985fb-efd1-4180-a340-e4f36abbc8b4"
  },
  {
   "a": "Art Muth",
   "b": "Sue Johnson",
   "team": "Flemington",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": 0.6,
   "avgActual": 0.6,
   "avgExpected": -0.2,
   "aId": "6bfc3a49-53cb-4c03-b8cb-94552158ccbe",
   "bId": "c6046610-1dba-4bad-bc89-57e5baa0983f"
  },
  {
   "a": "David Osborne",
   "b": "Scott Rubin",
   "team": "Flemington",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 2,
   "avgExpected": 0.9,
   "aId": "418e7ba5-3e06-40ec-9b83-19d3bf10c9cb",
   "bId": "c12175df-b959-4efe-95e7-e5298b783da8"
  },
  {
   "a": "Keith Goldberg",
   "b": "Karen Moliver",
   "team": "Bounce Malvern Black",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 6.2,
   "avgExpected": 5.1,
   "aId": "37a0fa2c-df0b-4d92-900b-a9f20f441ad8",
   "bId": "6412a5fc-5f1f-4dcf-a1b9-c1838eeabec9"
  },
  {
   "a": "Michael Vollmer",
   "b": "Carolyn Dardani-Horensky",
   "team": "Pickle House",
   "n": 7,
   "w": 0,
   "l": 7,
   "synergy": 0.6,
   "avgActual": -8.6,
   "avgExpected": -9.5,
   "aId": "148387a8-f20a-44df-981d-0d9d2e7bf443",
   "bId": "6acb77b2-e82c-4de7-b333-89fbe85c9997"
  },
  {
   "a": "Jodi Evans",
   "b": "Lucy Chow",
   "team": "Bounce Malvern Blue",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.6,
   "avgActual": -4.4,
   "avgExpected": -5.5,
   "aId": "0470dc02-2e17-4eeb-b282-4767b17e733e",
   "bId": "84f2d830-3dbf-4dfd-bd4b-f9eb3fb04091"
  },
  {
   "a": "Natasha De Carvalho",
   "b": "Tanya Kenney",
   "team": "The Atlantic Club",
   "n": 11,
   "w": 7,
   "l": 4,
   "synergy": 0.6,
   "avgActual": 0.6,
   "avgExpected": -0.2,
   "aId": "462f3a15-22ed-4fa3-b698-78678a5d6966",
   "bId": "9136414d-016a-41e3-be48-735a5ef794da"
  },
  {
   "a": "Bob Drinane",
   "b": "Denise Richmond",
   "team": "Flemington",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 0,
   "avgExpected": -1.4,
   "aId": "1611fcd8-0e53-4b13-b061-d588d0bde0fd",
   "bId": "422cd941-43db-4123-a07e-3316583f51ee"
  },
  {
   "a": "Todd Stein",
   "b": "Eric Luque",
   "team": "Flemington",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 4,
   "avgExpected": 2.6,
   "aId": "63fb8f7d-8f83-4bdf-89c7-fc3ca7139df5",
   "bId": "b3c28078-ab31-4002-9e09-5fa3f627d8c1"
  },
  {
   "a": "Susan Kapit",
   "b": "Maureen Conery",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.6,
   "avgActual": -0.3,
   "avgExpected": -1.7,
   "aId": "19a34ff6-50a2-4e30-972e-2cec78d4aec3",
   "bId": "89dd8b9e-14f8-40ac-8127-3bfac0ac7888"
  },
  {
   "a": "Randy Samuels",
   "b": "Kimberly Schwartz",
   "team": "Home Court",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.6,
   "avgActual": -2,
   "avgExpected": -3.4,
   "aId": "294cb11e-477b-435c-a293-b2527bfb4fc3",
   "bId": "bb235d73-c023-4543-82b0-37abbf747f7d"
  },
  {
   "a": "Kathy BernéT",
   "b": "Patrik Grubb",
   "team": "Bounce Malvern Blue",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.6,
   "avgActual": -3.3,
   "avgExpected": -4.7,
   "aId": "220a5a2a-322c-4799-85a9-1f21b37b6cd4",
   "bId": "6bc51379-c588-4388-88a5-f9fc4d5beee1"
  },
  {
   "a": "Lydia Fiore",
   "b": "Toby Mcmahan",
   "team": "Pickleball Palace",
   "n": 6,
   "w": 0,
   "l": 6,
   "synergy": 0.6,
   "avgActual": -3.7,
   "avgExpected": -4.7,
   "aId": "602fc2fd-c2f6-4909-9951-c829b5831548",
   "bId": "795d3c75-0080-4a6c-9e78-fcafcd86f1d2"
  },
  {
   "a": "Eric Markowitz",
   "b": "Marykristin Haskell",
   "team": "Pickle Place",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 3.6,
   "avgExpected": 2.6,
   "aId": "5a16df6a-43c6-40a7-bfe7-52e5e2ad1948",
   "bId": "ecb01f29-37c9-4caa-a023-dc5d2591f375"
  },
  {
   "a": "Darren Saks",
   "b": "Andrew Hyman",
   "team": "The Atlantic Club",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 3.5,
   "avgExpected": 2.2,
   "aId": "9bf7b8ab-4dfa-442b-be12-77580a5ea1dc",
   "bId": "dbda3e07-6332-4467-bdf0-be18b2686573"
  },
  {
   "a": "Carolyn Dardani-Horensky",
   "b": "Henry Wang",
   "team": "Pickle House",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": 0.6,
   "avgActual": -9.4,
   "avgExpected": -10.4,
   "aId": "6acb77b2-e82c-4de7-b333-89fbe85c9997",
   "bId": "d9e47350-1ce4-41d5-81d7-d9fbb78efd98"
  },
  {
   "a": "Kate Curren",
   "b": "Amanda Quinn",
   "team": "Pickleball Palace",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 2.7,
   "avgExpected": 1.8,
   "aId": "20e006d9-72f9-4f9e-bad5-750694224782",
   "bId": "f1248cc3-96c3-4671-9b08-533d22eb710f"
  },
  {
   "a": "Jonathan Goldner",
   "b": "Harriet Levin",
   "team": "Pickle Place",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 4,
   "avgExpected": 2.6,
   "aId": "5142be9e-adb4-4f40-8632-1f6daa6d824b",
   "bId": "aeff8297-a479-4b3b-9a49-72c410ac8e26"
  },
  {
   "a": "Brad Oldham",
   "b": "Andrew Hyman",
   "team": "The Atlantic Club",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 0,
   "avgExpected": -1.3,
   "aId": "965b56ee-6fb4-4bd1-9708-8ced2c5dd9a2",
   "bId": "dbda3e07-6332-4467-bdf0-be18b2686573"
  },
  {
   "a": "Carolyn Dardani-Horensky",
   "b": "Lan Bin",
   "team": "Pickle House",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 0.6,
   "avgActual": -5.2,
   "avgExpected": -6.4,
   "aId": "6acb77b2-e82c-4de7-b333-89fbe85c9997",
   "bId": "97ed17e1-9a68-45fe-adf5-f20d33ea7239"
  },
  {
   "a": "Brenden Dorley",
   "b": "Tim Phelan",
   "team": "Bounce Malvern Blue",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.6,
   "avgActual": -2.2,
   "avgExpected": -3.4,
   "aId": "99c7c387-dea4-4b5b-a3b6-639ae2f806d2",
   "bId": "f5e62236-e4e5-4b34-865e-c92bf027d21c"
  },
  {
   "a": "Hal Greenspan",
   "b": "Ali Fordyce",
   "team": "The Atlantic Club",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 0.5,
   "avgExpected": -0.7,
   "aId": "36b33227-285b-4959-a3b8-21012748391e",
   "bId": "9e2cc278-7356-491f-b853-945e33a988d2"
  },
  {
   "a": "Surbhi Sabharwal",
   "b": "Anita Bobba",
   "team": "Home Court",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": 0.5,
   "avgActual": 0.1,
   "avgExpected": -0.6,
   "aId": "6ff2d1f1-1ffd-4140-820d-b2333c370dcd",
   "bId": "abc68487-3415-49a2-bdfb-dd56eb5af20d"
  },
  {
   "a": "Art Muth",
   "b": "Scott Rubin",
   "team": "Flemington",
   "n": 8,
   "w": 2,
   "l": 6,
   "synergy": 0.5,
   "avgActual": -1,
   "avgExpected": -1.8,
   "aId": "6bfc3a49-53cb-4c03-b8cb-94552158ccbe",
   "bId": "c12175df-b959-4efe-95e7-e5298b783da8"
  },
  {
   "a": "Sarah Mcparland",
   "b": "Anita Bobba",
   "team": "Home Court",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 3.8,
   "avgExpected": 2.9,
   "aId": "958e8cb9-1c97-4932-b495-29c28578a123",
   "bId": "abc68487-3415-49a2-bdfb-dd56eb5af20d"
  },
  {
   "a": "Tanya Patterson",
   "b": "Carolyn Dardani-Horensky",
   "team": "Pickle House",
   "n": 8,
   "w": 0,
   "l": 8,
   "synergy": 0.5,
   "avgActual": -6,
   "avgExpected": -6.7,
   "aId": "011a3e6a-c2a3-4dcf-b1f4-9e32a4440789",
   "bId": "6acb77b2-e82c-4de7-b333-89fbe85c9997"
  },
  {
   "a": "Susan Debbs",
   "b": "Elyse Diamond",
   "team": "Players Courtyard",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 6.5,
   "avgExpected": 5.5,
   "aId": "753dcbff-f1a6-4fb1-97bf-2f76e08df8b9",
   "bId": "a0c9637b-5b23-4797-a46a-d2df7bb0fae9"
  },
  {
   "a": "Eva Danieli",
   "b": "Alice Napolitano",
   "team": "The Atlantic Club",
   "n": 16,
   "w": 12,
   "l": 4,
   "synergy": 0.5,
   "avgActual": 2.6,
   "avgExpected": 1.9,
   "aId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae",
   "bId": "d56483b8-a5b8-4c1f-8437-39fcf90a5030"
  },
  {
   "a": "Marr Flores",
   "b": "Louis Vessichelli",
   "team": "Pickleball Palace",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 0.5,
   "avgExpected": -0.4,
   "aId": "1009522f-1f54-4cf1-a0a0-e24ad64f4a66",
   "bId": "cb8c8404-c482-4fe5-bd01-35b348fccfd4"
  },
  {
   "a": "Stephen Hanak",
   "b": "Z Zhang",
   "team": "Pickle Place",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.5,
   "avgActual": -1,
   "avgExpected": -2,
   "aId": "8f20e88a-a2cf-4e7e-b024-62f23423cf70",
   "bId": "95982984-9054-491c-a5a5-b5592c5f02a4"
  },
  {
   "a": "David Osborne",
   "b": "Tara Kramer",
   "team": "Flemington",
   "n": 9,
   "w": 4,
   "l": 5,
   "synergy": 0.5,
   "avgActual": -1.2,
   "avgExpected": -2,
   "aId": "418e7ba5-3e06-40ec-9b83-19d3bf10c9cb",
   "bId": "dae62b8e-5f8e-4721-8f41-3218518d1e30"
  },
  {
   "a": "Denise Richmond",
   "b": "Kristen Soucie",
   "team": "Flemington",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.5,
   "avgActual": -0.4,
   "avgExpected": -1.3,
   "aId": "422cd941-43db-4123-a07e-3316583f51ee",
   "bId": "4745eae2-7562-424a-92de-efcb84034406"
  },
  {
   "a": "Andrea Smith",
   "b": "Kimberly Schwartz",
   "team": "Home Court",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": 0.5,
   "avgActual": -4.8,
   "avgExpected": -5.6,
   "aId": "1318bc01-f23f-47da-94cb-ac71b8f3e694",
   "bId": "bb235d73-c023-4543-82b0-37abbf747f7d"
  },
  {
   "a": "Laura Kang",
   "b": "Valerie Interrante",
   "team": "Pickle Place",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 4.2,
   "avgExpected": 3.3,
   "aId": "5aaea21a-7e11-4168-8192-89c4c134e1d4",
   "bId": "d2076d9d-aa9e-4904-b971-8da1be95013f"
  },
  {
   "a": "Jill Lesnik",
   "b": "Sinitra Siengsanaoh",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 5,
   "avgExpected": 3.9,
   "aId": "340fe4f1-f3ed-4fb1-9ba3-74752ee1d864",
   "bId": "bd5e1a4c-a9d5-4683-a74e-90c0df2d84cd"
  },
  {
   "a": "Eliezer Mintz",
   "b": "Scott Friedman",
   "team": "Monroe",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.5,
   "avgActual": -1,
   "avgExpected": -2,
   "aId": "832fb271-fb5e-43aa-b442-95c03fb78342",
   "bId": "d40fde69-77a2-4998-a631-fba159129d2f"
  },
  {
   "a": "Kate Curren",
   "b": "Louis Vessichelli",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 3.3,
   "avgExpected": 2.3,
   "aId": "20e006d9-72f9-4f9e-bad5-750694224782",
   "bId": "cb8c8404-c482-4fe5-bd01-35b348fccfd4"
  },
  {
   "a": "Nanjun Qian",
   "b": "Lucy Li",
   "team": "Pickle House",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.5,
   "avgActual": -2.3,
   "avgExpected": -3.5,
   "aId": "4d2224a0-7b03-4044-bf22-84010f802e07",
   "bId": "d22f8b69-76a6-41e0-8b04-c5dae68d9f69"
  },
  {
   "a": "Susan St. Pierre",
   "b": "Tara Kramer",
   "team": "Flemington",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 1,
   "avgExpected": -0.1,
   "aId": "001c2d38-829b-4fd0-b249-472f78337387",
   "bId": "dae62b8e-5f8e-4721-8f41-3218518d1e30"
  },
  {
   "a": "Denise Richmond",
   "b": "Eric Luque",
   "team": "Flemington",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 3,
   "avgExpected": 1.9,
   "aId": "422cd941-43db-4123-a07e-3316583f51ee",
   "bId": "b3c28078-ab31-4002-9e09-5fa3f627d8c1"
  },
  {
   "a": "Lucy Li",
   "b": "Wolfgang Chincarini",
   "team": "Pickle House",
   "n": 6,
   "w": 6,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 3.7,
   "avgExpected": 2.8,
   "aId": "d22f8b69-76a6-41e0-8b04-c5dae68d9f69",
   "bId": "e31476db-1f0b-44e3-b3da-a5bc2c8dbc62"
  },
  {
   "a": "Jean Wang",
   "b": "Fabienne Yu",
   "team": "Pickle House",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 1.3,
   "avgExpected": 0.3,
   "aId": "1188fc00-7ef5-4671-9ef9-2c7d162a2604",
   "bId": "943ac52a-070f-4bdc-baf8-efe14d0f40ea"
  },
  {
   "a": "Christine Papa",
   "b": "Aimee Castellano",
   "team": "Flemington",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 2.6,
   "avgExpected": 1.9,
   "aId": "d156a552-7fa9-488e-9bfa-745feb859950",
   "bId": "e76985fb-efd1-4180-a340-e4f36abbc8b4"
  },
  {
   "a": "Wei Zhu",
   "b": "Susan Zhang",
   "team": "Pickle House",
   "n": 11,
   "w": 2,
   "l": 9,
   "synergy": 0.4,
   "avgActual": -4.3,
   "avgExpected": -4.8,
   "aId": "937eb27e-1168-4697-ad5c-dd5a6cf3872d",
   "bId": "f3be5948-f902-49ef-886c-190ad0cca61f"
  },
  {
   "a": "Jim Darcangelo",
   "b": "Keith Goldberg",
   "team": "Bounce Malvern Black",
   "n": 9,
   "w": 8,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 6.6,
   "avgExpected": 6,
   "aId": "0530512b-466d-4ff7-9e89-7961b4a63110",
   "bId": "37a0fa2c-df0b-4d92-900b-a9f20f441ad8"
  },
  {
   "a": "Katherine Maruyama",
   "b": "Stephanie Woomer",
   "team": "Bounce Malvern Black",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 5.6,
   "avgExpected": 4.9,
   "aId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a",
   "bId": "e05f57f5-c898-404e-b86f-c2460cc23b06"
  },
  {
   "a": "Vicki Main",
   "b": "Stephanie Woomer",
   "team": "Bounce Malvern Black",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.4,
   "avgActual": 4.8,
   "avgExpected": 3.9,
   "aId": "89bdcff6-2fba-4bde-b831-872bf9ce7843",
   "bId": "e05f57f5-c898-404e-b86f-c2460cc23b06"
  },
  {
   "a": "Susan Debbs",
   "b": "Jeff Lorman",
   "team": "Players Courtyard",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 3.8,
   "avgExpected": 3,
   "aId": "753dcbff-f1a6-4fb1-97bf-2f76e08df8b9",
   "bId": "75789bbc-0dde-460e-b905-7bd1189c6a90"
  },
  {
   "a": "Hal Golden",
   "b": "Lucy Chow",
   "team": "Bounce Malvern Blue",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 0.4,
   "avgActual": -4.2,
   "avgExpected": -5,
   "aId": "476c99a2-15e5-4e99-8471-7c2b6394faa3",
   "bId": "84f2d830-3dbf-4dfd-bd4b-f9eb3fb04091"
  },
  {
   "a": "Roger Graterol",
   "b": "Elyse Diamond",
   "team": "Players Courtyard",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 5.7,
   "avgExpected": 4.7,
   "aId": "23262a95-4498-4ca1-87a9-713c02337168",
   "bId": "a0c9637b-5b23-4797-a46a-d2df7bb0fae9"
  },
  {
   "a": "Christine Dugan",
   "b": "Patrik Grubb",
   "team": "Bounce Malvern Blue",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 0.4,
   "avgActual": -4.2,
   "avgExpected": -5.1,
   "aId": "213bd4a2-a13d-4540-b93e-69e1e9116ff8",
   "bId": "6bc51379-c588-4388-88a5-f9fc4d5beee1"
  },
  {
   "a": "Valerie Interrante",
   "b": "David Eisen",
   "team": "Pickle Place",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 0.3,
   "avgExpected": -0.5,
   "aId": "d2076d9d-aa9e-4904-b971-8da1be95013f",
   "bId": "d4b4ed3c-0c4b-4f8b-9b98-a5d448bfb361"
  },
  {
   "a": "David Osborne",
   "b": "Kristen Soucie",
   "team": "Flemington",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 0.3,
   "avgExpected": -0.5,
   "aId": "418e7ba5-3e06-40ec-9b83-19d3bf10c9cb",
   "bId": "4745eae2-7562-424a-92de-efcb84034406"
  },
  {
   "a": "Margaret Weidlich",
   "b": "Sharon Streit",
   "team": "Home Court",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": 0.4,
   "avgActual": -3.9,
   "avgExpected": -4.5,
   "aId": "7021e97f-1e5e-4adb-ac80-1a9c919caba6",
   "bId": "9f9e5b25-d385-4c12-adb3-233c612619c4"
  },
  {
   "a": "Andrea Smith",
   "b": "Kajal Sinkar",
   "team": "Home Court",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.4,
   "avgActual": -1.2,
   "avgExpected": -2.1,
   "aId": "1318bc01-f23f-47da-94cb-ac71b8f3e694",
   "bId": "9d7f6585-d5f4-44fa-a4f9-24737a072f72"
  },
  {
   "a": "Hal Golden",
   "b": "Jamila Sefiane",
   "team": "Bounce Malvern Blue",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.4,
   "avgActual": -2,
   "avgExpected": -2.7,
   "aId": "476c99a2-15e5-4e99-8471-7c2b6394faa3",
   "bId": "c0851114-0611-4b02-9589-fd249179eabc"
  },
  {
   "a": "Rosalyn Goldsmith",
   "b": "Amy Chrebet",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.4,
   "avgActual": -0.7,
   "avgExpected": -1.5,
   "aId": "545c12c3-3098-47ca-b35e-429f37f481f5",
   "bId": "6f511e98-567a-4b33-8831-ed123f01f952"
  },
  {
   "a": "Lucy Chow",
   "b": "David Marchese",
   "team": "Bounce Malvern Blue",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.4,
   "avgActual": -1.8,
   "avgExpected": -2.6,
   "aId": "84f2d830-3dbf-4dfd-bd4b-f9eb3fb04091",
   "bId": "aa802904-9a39-4b0e-ad2b-d1a1ea2fcc5b"
  },
  {
   "a": "Z Zhang",
   "b": "Jane Meng",
   "team": "Pickle Place",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 0.3,
   "avgExpected": -0.5,
   "aId": "95982984-9054-491c-a5a5-b5592c5f02a4",
   "bId": "c365e1dd-21cf-4f38-a802-1aaaf6d0914b"
  },
  {
   "a": "David Osborne",
   "b": "Christine Papa",
   "team": "Flemington",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 1,
   "avgExpected": 0.2,
   "aId": "418e7ba5-3e06-40ec-9b83-19d3bf10c9cb",
   "bId": "d156a552-7fa9-488e-9bfa-745feb859950"
  },
  {
   "a": "Liz Cuozzo",
   "b": "Joe Palumbo",
   "team": "The Atlantic Club",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.4,
   "avgActual": -0.3,
   "avgExpected": -1.2,
   "aId": "2b2d474d-281c-42d7-854b-6bfe32f20563",
   "bId": "b39664c3-1a6e-4493-968f-6e7f7939f694"
  },
  {
   "a": "Janet Bellaran",
   "b": "Robert Toledo",
   "team": "The Atlantic Club",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.4,
   "avgActual": 2,
   "avgExpected": 1.4,
   "aId": "78d7b1d3-6b6c-4dde-a94f-5d4056b33ee7",
   "bId": "a1e0d6a6-b8d4-47b7-bdfc-6cb8670a421d"
  },
  {
   "a": "Lance Brown",
   "b": "Susan Zhang",
   "team": "Pickle House",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.4,
   "avgActual": -3,
   "avgExpected": -3.8,
   "aId": "5d13288d-69fe-4d0b-bf69-51c1d24e3409",
   "bId": "f3be5948-f902-49ef-886c-190ad0cca61f"
  },
  {
   "a": "Jim Darcangelo",
   "b": "Michael Finkelstein",
   "team": "Bounce Malvern Black",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 2.5,
   "avgExpected": 1.8,
   "aId": "0530512b-466d-4ff7-9e89-7961b4a63110",
   "bId": "861c3f68-2c96-4a96-a75e-645020f73a5c"
  },
  {
   "a": "Sharon Streit",
   "b": "George Mandl",
   "team": "Home Court",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": 0.4,
   "avgActual": -3.2,
   "avgExpected": -3.9,
   "aId": "9f9e5b25-d385-4c12-adb3-233c612619c4",
   "bId": "a0019103-8887-4a15-bbe0-d1c35cdd7b0d"
  },
  {
   "a": "Carlo Caronan",
   "b": "George Mandl",
   "team": "Home Court",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.4,
   "avgActual": -4,
   "avgExpected": -5,
   "aId": "8269fb55-3379-47d6-8fe5-f087ac82fe0c",
   "bId": "a0019103-8887-4a15-bbe0-d1c35cdd7b0d"
  },
  {
   "a": "Liz Cuozzo",
   "b": "Janet Bellaran",
   "team": "The Atlantic Club",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 2.3,
   "avgExpected": 1.4,
   "aId": "2b2d474d-281c-42d7-854b-6bfe32f20563",
   "bId": "78d7b1d3-6b6c-4dde-a94f-5d4056b33ee7"
  },
  {
   "a": "Pam Boyd",
   "b": "Annemarie Mccartney",
   "team": "Players Courtyard",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 6,
   "avgExpected": 5.1,
   "aId": "04aefa29-20e3-41b7-a680-19d13f9d4289",
   "bId": "d08d78db-7d20-4dc2-a37b-41841c4624fd"
  },
  {
   "a": "Kristen Soucie",
   "b": "Christine Papa",
   "team": "Flemington",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.4,
   "avgActual": 2.7,
   "avgExpected": 1.8,
   "aId": "4745eae2-7562-424a-92de-efcb84034406",
   "bId": "d156a552-7fa9-488e-9bfa-745feb859950"
  },
  {
   "a": "Carolyn Dardani-Horensky",
   "b": "Ping Peng",
   "team": "Pickle House",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 0.3,
   "avgActual": -7.7,
   "avgExpected": -8.4,
   "aId": "6acb77b2-e82c-4de7-b333-89fbe85c9997",
   "bId": "7af65ce9-d7e3-4d00-b19b-653e6d2dc8d9"
  },
  {
   "a": "Patrik Grubb",
   "b": "Lucy Chow",
   "team": "Bounce Malvern Blue",
   "n": 7,
   "w": 1,
   "l": 6,
   "synergy": 0.3,
   "avgActual": -5.3,
   "avgExpected": -5.7,
   "aId": "6bc51379-c588-4388-88a5-f9fc4d5beee1",
   "bId": "84f2d830-3dbf-4dfd-bd4b-f9eb3fb04091"
  },
  {
   "a": "Roger Graterol",
   "b": "Marc Harden",
   "team": "Players Courtyard",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 5.6,
   "avgExpected": 5.1,
   "aId": "23262a95-4498-4ca1-87a9-713c02337168",
   "bId": "55194d2f-f537-4e19-b901-86c559f25ef2"
  },
  {
   "a": "Ed Gieske",
   "b": "Hal Golden",
   "team": "Bounce Malvern Blue",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.3,
   "avgActual": -7.7,
   "avgExpected": -8.4,
   "aId": "314486b1-6723-4b33-9dba-fa5756065707",
   "bId": "476c99a2-15e5-4e99-8471-7c2b6394faa3"
  },
  {
   "a": "Marc Harden",
   "b": "Kate Siedell",
   "team": "Players Courtyard",
   "n": 7,
   "w": 7,
   "l": 0,
   "synergy": 0.3,
   "avgActual": 6.1,
   "avgExpected": 5.7,
   "aId": "55194d2f-f537-4e19-b901-86c559f25ef2",
   "bId": "8decf039-f1e5-4182-b3cf-6756789ae87a"
  },
  {
   "a": "Susan Kapit",
   "b": "Sergey Sprikut",
   "team": "Monroe",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 1.3,
   "avgExpected": 0.6,
   "aId": "19a34ff6-50a2-4e30-972e-2cec78d4aec3",
   "bId": "28b4b9e6-0b25-473c-8386-2876bf60efab"
  },
  {
   "a": "Z Zhang",
   "b": "Tom Zentmeyer",
   "team": "Pickle Place",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": 0.3,
   "avgActual": 1,
   "avgExpected": 0.5,
   "aId": "95982984-9054-491c-a5a5-b5592c5f02a4",
   "bId": "c16d16f0-3cc1-4c9d-8bfb-98615ffeaacd"
  },
  {
   "a": "Judy Liu",
   "b": "Peilin Zhang",
   "team": "Pickle House",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.3,
   "avgActual": -7.5,
   "avgExpected": -8.1,
   "aId": "499cf876-38a5-4db1-84b6-50fd76f1c502",
   "bId": "af7b661e-bc26-4b53-8e7c-e5657bdba32a"
  },
  {
   "a": "Kristen Soucie",
   "b": "Art Muth",
   "team": "Flemington",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.3,
   "avgActual": 1,
   "avgExpected": 0.5,
   "aId": "4745eae2-7562-424a-92de-efcb84034406",
   "bId": "6bfc3a49-53cb-4c03-b8cb-94552158ccbe"
  },
  {
   "a": "Pam Boyd",
   "b": "Stacey Frank",
   "team": "Players Courtyard",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 4.4,
   "avgExpected": 3.8,
   "aId": "04aefa29-20e3-41b7-a680-19d13f9d4289",
   "bId": "768c88bd-683d-4204-8124-a589c8028b6e"
  },
  {
   "a": "Brad Daddis",
   "b": "Bennett Shanker",
   "team": "Players Courtyard",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 3.1,
   "avgExpected": 2.6,
   "aId": "3b22e073-2c4b-4245-a142-29441ec509a3",
   "bId": "a86dc96c-b346-460c-a94c-df0551d5027a"
  },
  {
   "a": "Pam Boyd",
   "b": "Bennett Shanker",
   "team": "Players Courtyard",
   "n": 9,
   "w": 7,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 3.6,
   "avgExpected": 3.1,
   "aId": "04aefa29-20e3-41b7-a680-19d13f9d4289",
   "bId": "a86dc96c-b346-460c-a94c-df0551d5027a"
  },
  {
   "a": "Kathy BernéT",
   "b": "David Marchese",
   "team": "Bounce Malvern Blue",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.3,
   "avgActual": -2.8,
   "avgExpected": -3.4,
   "aId": "220a5a2a-322c-4799-85a9-1f21b37b6cd4",
   "bId": "aa802904-9a39-4b0e-ad2b-d1a1ea2fcc5b"
  },
  {
   "a": "Ed Gieske",
   "b": "Jamila Sefiane",
   "team": "Bounce Malvern Blue",
   "n": 11,
   "w": 4,
   "l": 7,
   "synergy": 0.3,
   "avgActual": -0.7,
   "avgExpected": -1.2,
   "aId": "314486b1-6723-4b33-9dba-fa5756065707",
   "bId": "c0851114-0611-4b02-9589-fd249179eabc"
  },
  {
   "a": "Judy Qiu",
   "b": "Jingwei Wu",
   "team": "Bounce Malvern Black",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 0.3,
   "avgActual": 6,
   "avgExpected": 5.5,
   "aId": "524b4051-2245-4d13-a9ec-2c2aac3ec980",
   "bId": "58e052c4-6ab5-46a7-8e6c-6c7a465262e5"
  },
  {
   "a": "Oliveira Karen",
   "b": "Bud Heller",
   "team": "Pickleball Palace",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 0.8,
   "avgExpected": 0.3,
   "aId": "80b535f7-a6f6-4905-90ae-69c8695f99be",
   "bId": "9282b1b2-6551-481c-b9b8-2a246a49a621"
  },
  {
   "a": "Stacey Frank",
   "b": "Kate Siedell",
   "team": "Players Courtyard",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 3.9,
   "avgExpected": 3.4,
   "aId": "768c88bd-683d-4204-8124-a589c8028b6e",
   "bId": "8decf039-f1e5-4182-b3cf-6756789ae87a"
  },
  {
   "a": "Yi Gu",
   "b": "Eliezer Mintz",
   "team": "Monroe",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.3,
   "avgActual": 5.3,
   "avgExpected": 4.6,
   "aId": "0640ecce-0b14-4eac-9cbd-be86592d6102",
   "bId": "832fb271-fb5e-43aa-b442-95c03fb78342"
  },
  {
   "a": "Lucy Chow",
   "b": "Jamila Sefiane",
   "team": "Bounce Malvern Blue",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.3,
   "avgActual": -1,
   "avgExpected": -1.7,
   "aId": "84f2d830-3dbf-4dfd-bd4b-f9eb3fb04091",
   "bId": "c0851114-0611-4b02-9589-fd249179eabc"
  },
  {
   "a": "Harriet Levin",
   "b": "David Eisen",
   "team": "Pickle Place",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.3,
   "avgActual": 2.7,
   "avgExpected": 1.9,
   "aId": "aeff8297-a479-4b3b-9a49-72c410ac8e26",
   "bId": "d4b4ed3c-0c4b-4f8b-9b98-a5d448bfb361"
  },
  {
   "a": "Randy Samuels",
   "b": "Clifford Luster",
   "team": "Home Court",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.3,
   "avgActual": -0.8,
   "avgExpected": -1.3,
   "aId": "294cb11e-477b-435c-a293-b2527bfb4fc3",
   "bId": "3f47746a-2105-493a-941a-b15c4b02a520"
  },
  {
   "a": "Toby Mcmahan",
   "b": "Amanda Quinn",
   "team": "Pickleball Palace",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.3,
   "avgActual": -2,
   "avgExpected": -2.6,
   "aId": "795d3c75-0080-4a6c-9e78-fcafcd86f1d2",
   "bId": "f1248cc3-96c3-4671-9b08-533d22eb710f"
  },
  {
   "a": "Meryl Nadler",
   "b": "Pam Friedman",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.3,
   "avgActual": -1.3,
   "avgExpected": -2.1,
   "aId": "90987b97-d181-4c15-9c7c-e0bebff4e9b0",
   "bId": "94d51b2d-359c-450c-b1c8-728944462b01"
  },
  {
   "a": "Carlo Caronan",
   "b": "Kajal Sinkar",
   "team": "Home Court",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.3,
   "avgActual": -0.5,
   "avgExpected": -1.1,
   "aId": "8269fb55-3379-47d6-8fe5-f087ac82fe0c",
   "bId": "9d7f6585-d5f4-44fa-a4f9-24737a072f72"
  },
  {
   "a": "Brian Gonzalez",
   "b": "Amanda Quinn",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 3,
   "avgExpected": 2.4,
   "aId": "ecc02ab8-5e9c-4950-89b7-be3f397683c3",
   "bId": "f1248cc3-96c3-4671-9b08-533d22eb710f"
  },
  {
   "a": "Tanya Patterson",
   "b": "Lucy Li",
   "team": "Pickle House",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 0.2,
   "avgActual": -0.2,
   "avgExpected": -0.5,
   "aId": "011a3e6a-c2a3-4dcf-b1f4-9e32a4440789",
   "bId": "d22f8b69-76a6-41e0-8b04-c5dae68d9f69"
  },
  {
   "a": "Derek Le",
   "b": "Stephanie Woomer",
   "team": "Bounce Malvern Black",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 3,
   "avgExpected": 2.7,
   "aId": "8cf7b40c-ed2c-4c8b-83bd-b9f2d486c690",
   "bId": "e05f57f5-c898-404e-b86f-c2460cc23b06"
  },
  {
   "a": "Judy Liu",
   "b": "Wei Zhu",
   "team": "Pickle House",
   "n": 6,
   "w": 0,
   "l": 6,
   "synergy": 0.2,
   "avgActual": -8.3,
   "avgExpected": -8.7,
   "aId": "499cf876-38a5-4db1-84b6-50fd76f1c502",
   "bId": "937eb27e-1168-4697-ad5c-dd5a6cf3872d"
  },
  {
   "a": "Eric Markowitz",
   "b": "Janine Forrest",
   "team": "Pickle Place",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 0.2,
   "avgActual": 2,
   "avgExpected": 1.6,
   "aId": "5a16df6a-43c6-40a7-bfe7-52e5e2ad1948",
   "bId": "dd30bbd2-24c2-431a-8b21-2de326c75ab3"
  },
  {
   "a": "Glenn Hillman",
   "b": "Scott Friedman",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 1.3,
   "avgExpected": 0.8,
   "aId": "316cd007-2c93-473d-a8d8-61a5fbbfa002",
   "bId": "d40fde69-77a2-4998-a631-fba159129d2f"
  },
  {
   "a": "Barbara Hess",
   "b": "Sergey Sprikut",
   "team": "Monroe",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 2.5,
   "avgExpected": 2.2,
   "aId": "21baa2cb-e882-442e-a5e0-a6d88126c9c3",
   "bId": "28b4b9e6-0b25-473c-8386-2876bf60efab"
  },
  {
   "a": "Laura Kang",
   "b": "Janet Garrity",
   "team": "Pickle Place",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 2.3,
   "avgExpected": 1.8,
   "aId": "5aaea21a-7e11-4168-8192-89c4c134e1d4",
   "bId": "e687e44a-22a6-4f8e-a3ac-b328fae537c3"
  },
  {
   "a": "Aaron Pine",
   "b": "Scott Friedman",
   "team": "Monroe",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.2,
   "avgActual": -1,
   "avgExpected": -1.5,
   "aId": "4aea9e80-552f-49b8-9118-c03af246e089",
   "bId": "d40fde69-77a2-4998-a631-fba159129d2f"
  },
  {
   "a": "Sergey Sprikut",
   "b": "Meryl Nadler",
   "team": "Monroe",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 1.6,
   "avgExpected": 1.2,
   "aId": "28b4b9e6-0b25-473c-8386-2876bf60efab",
   "bId": "90987b97-d181-4c15-9c7c-e0bebff4e9b0"
  },
  {
   "a": "Robert Block",
   "b": "Jane Meng",
   "team": "Pickle Place",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.2,
   "avgActual": 1,
   "avgExpected": 0.6,
   "aId": "23d1d322-f31d-46b3-bf95-d86faab58b06",
   "bId": "c365e1dd-21cf-4f38-a802-1aaaf6d0914b"
  },
  {
   "a": "Randy Samuels",
   "b": "Margaret Weidlich",
   "team": "Home Court",
   "n": 7,
   "w": 0,
   "l": 7,
   "synergy": 0.2,
   "avgActual": -4.9,
   "avgExpected": -5.2,
   "aId": "294cb11e-477b-435c-a293-b2527bfb4fc3",
   "bId": "7021e97f-1e5e-4adb-ac80-1a9c919caba6"
  },
  {
   "a": "Kate Siedell",
   "b": "Bennett Shanker",
   "team": "Players Courtyard",
   "n": 18,
   "w": 13,
   "l": 5,
   "synergy": 0.2,
   "avgActual": 3.3,
   "avgExpected": 3.1,
   "aId": "8decf039-f1e5-4182-b3cf-6756789ae87a",
   "bId": "a86dc96c-b346-460c-a94c-df0551d5027a"
  },
  {
   "a": "Jeff Lorman",
   "b": "Stacey Frank",
   "team": "Players Courtyard",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 2.4,
   "avgExpected": 2.1,
   "aId": "75789bbc-0dde-460e-b905-7bd1189c6a90",
   "bId": "768c88bd-683d-4204-8124-a589c8028b6e"
  },
  {
   "a": "Keith Goldberg",
   "b": "Katherine Maruyama",
   "team": "Bounce Malvern Black",
   "n": 8,
   "w": 7,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 6.1,
   "avgExpected": 5.9,
   "aId": "37a0fa2c-df0b-4d92-900b-a9f20f441ad8",
   "bId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a"
  },
  {
   "a": "Jodi Evans",
   "b": "David Marchese",
   "team": "Bounce Malvern Blue",
   "n": 7,
   "w": 1,
   "l": 6,
   "synergy": 0.2,
   "avgActual": -5,
   "avgExpected": -5.3,
   "aId": "0470dc02-2e17-4eeb-b282-4767b17e733e",
   "bId": "aa802904-9a39-4b0e-ad2b-d1a1ea2fcc5b"
  },
  {
   "a": "Todd Stein",
   "b": "Christine Papa",
   "team": "Flemington",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 1.8,
   "avgExpected": 1.4,
   "aId": "63fb8f7d-8f83-4bdf-89c7-fc3ca7139df5",
   "bId": "d156a552-7fa9-488e-9bfa-745feb859950"
  },
  {
   "a": "Sandro Stefanelli",
   "b": "Ed Gieske",
   "team": "Bounce Malvern Blue",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": 0.2,
   "avgActual": -3.4,
   "avgExpected": -3.8,
   "aId": "1872d8d8-f958-4747-af3a-443d5f88a1c3",
   "bId": "314486b1-6723-4b33-9dba-fa5756065707"
  },
  {
   "a": "Ping Peng",
   "b": "Yue Fei",
   "team": "Pickle House",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.2,
   "avgActual": -0.7,
   "avgExpected": -1.2,
   "aId": "7af65ce9-d7e3-4d00-b19b-653e6d2dc8d9",
   "bId": "adf031d4-82e4-4f54-8b1c-e27c219669f1"
  },
  {
   "a": "Z Zhang",
   "b": "Valerie Interrante",
   "team": "Pickle Place",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": 0.2,
   "avgActual": -0.4,
   "avgExpected": -0.7,
   "aId": "95982984-9054-491c-a5a5-b5592c5f02a4",
   "bId": "d2076d9d-aa9e-4904-b971-8da1be95013f"
  },
  {
   "a": "Eric Markowitz",
   "b": "Z Zhang",
   "team": "Pickle Place",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.2,
   "avgActual": 4,
   "avgExpected": 3.6,
   "aId": "5a16df6a-43c6-40a7-bfe7-52e5e2ad1948",
   "bId": "95982984-9054-491c-a5a5-b5592c5f02a4"
  },
  {
   "a": "Michael Vollmer",
   "b": "Lance Brown",
   "team": "Pickle House",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.2,
   "avgActual": -1.3,
   "avgExpected": -1.8,
   "aId": "148387a8-f20a-44df-981d-0d9d2e7bf443",
   "bId": "5d13288d-69fe-4d0b-bf69-51c1d24e3409"
  },
  {
   "a": "Andrea Smith",
   "b": "Carlo Caronan",
   "team": "Home Court",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": 0.2,
   "avgActual": -1.1,
   "avgExpected": -1.5,
   "aId": "1318bc01-f23f-47da-94cb-ac71b8f3e694",
   "bId": "8269fb55-3379-47d6-8fe5-f087ac82fe0c"
  },
  {
   "a": "Wei Zhu",
   "b": "Lucy Li",
   "team": "Pickle House",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.2,
   "avgActual": -2.7,
   "avgExpected": -3.1,
   "aId": "937eb27e-1168-4697-ad5c-dd5a6cf3872d",
   "bId": "d22f8b69-76a6-41e0-8b04-c5dae68d9f69"
  },
  {
   "a": "Toby Mcmahan",
   "b": "Ricardo Lisojo",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.2,
   "avgActual": -7.3,
   "avgExpected": -7.8,
   "aId": "795d3c75-0080-4a6c-9e78-fcafcd86f1d2",
   "bId": "dc6e9a73-87dd-478f-bcd2-a0bd39b91c86"
  },
  {
   "a": "Simon Perry",
   "b": "Art Muth",
   "team": "Flemington",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 1,
   "avgExpected": 0.5,
   "aId": "03c7bdf6-926c-4d90-9416-117cd3478b50",
   "bId": "6bfc3a49-53cb-4c03-b8cb-94552158ccbe"
  },
  {
   "a": "Jill Scully",
   "b": "Michael Finkelstein",
   "team": "Bounce Malvern Black",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 0.3,
   "avgExpected": -0.1,
   "aId": "754a47b8-0711-4929-928f-9bafe8f9dbc0",
   "bId": "861c3f68-2c96-4a96-a75e-645020f73a5c"
  },
  {
   "a": "Edwin Saxman",
   "b": "Stephen Hanak",
   "team": "Pickle Place",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.2,
   "avgActual": -1.3,
   "avgExpected": -1.9,
   "aId": "32244c70-6859-44af-a408-8294d65b592d",
   "bId": "8f20e88a-a2cf-4e7e-b024-62f23423cf70"
  },
  {
   "a": "Lance Brown",
   "b": "Lucy Li",
   "team": "Pickle House",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 1.7,
   "avgExpected": 1.4,
   "aId": "5d13288d-69fe-4d0b-bf69-51c1d24e3409",
   "bId": "d22f8b69-76a6-41e0-8b04-c5dae68d9f69"
  },
  {
   "a": "Alex Lee",
   "b": "Bud Heller",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 2,
   "avgExpected": 1.6,
   "aId": "22e2201d-16d7-4474-847b-5f4f0cef44e6",
   "bId": "9282b1b2-6551-481c-b9b8-2a246a49a621"
  },
  {
   "a": "Andrea Smith",
   "b": "Sarah Mcparland",
   "team": "Home Court",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 0.5,
   "avgExpected": 0.4,
   "aId": "1318bc01-f23f-47da-94cb-ac71b8f3e694",
   "bId": "958e8cb9-1c97-4932-b495-29c28578a123"
  },
  {
   "a": "Jim Darcangelo",
   "b": "Karen Moliver",
   "team": "Bounce Malvern Black",
   "n": 9,
   "w": 7,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 2.7,
   "avgExpected": 2.5,
   "aId": "0530512b-466d-4ff7-9e89-7961b4a63110",
   "bId": "6412a5fc-5f1f-4dcf-a1b9-c1838eeabec9"
  },
  {
   "a": "Jodi Evans",
   "b": "Ed Gieske",
   "team": "Bounce Malvern Blue",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 0.1,
   "avgActual": -6.5,
   "avgExpected": -6.8,
   "aId": "0470dc02-2e17-4eeb-b282-4767b17e733e",
   "bId": "314486b1-6723-4b33-9dba-fa5756065707"
  },
  {
   "a": "Natasha De Carvalho",
   "b": "Eva Danieli",
   "team": "The Atlantic Club",
   "n": 9,
   "w": 6,
   "l": 3,
   "synergy": 0.1,
   "avgActual": 2,
   "avgExpected": 1.9,
   "aId": "462f3a15-22ed-4fa3-b698-78678a5d6966",
   "bId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae"
  },
  {
   "a": "Art Muth",
   "b": "Tara Kramer",
   "team": "Flemington",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 0.1,
   "avgActual": -2,
   "avgExpected": -2.2,
   "aId": "6bfc3a49-53cb-4c03-b8cb-94552158ccbe",
   "bId": "dae62b8e-5f8e-4721-8f41-3218518d1e30"
  },
  {
   "a": "Surbhi Sabharwal",
   "b": "Sharon Streit",
   "team": "Home Court",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.1,
   "avgActual": 2.7,
   "avgExpected": 2.5,
   "aId": "6ff2d1f1-1ffd-4140-820d-b2333c370dcd",
   "bId": "9f9e5b25-d385-4c12-adb3-233c612619c4"
  },
  {
   "a": "Patrik Grubb",
   "b": "David Marchese",
   "team": "Bounce Malvern Blue",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.1,
   "avgActual": -4.7,
   "avgExpected": -5,
   "aId": "6bc51379-c588-4388-88a5-f9fc4d5beee1",
   "bId": "aa802904-9a39-4b0e-ad2b-d1a1ea2fcc5b"
  },
  {
   "a": "Glenn Hillman",
   "b": "Meryl Nadler",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 1,
   "avgExpected": 0.7,
   "aId": "316cd007-2c93-473d-a8d8-61a5fbbfa002",
   "bId": "90987b97-d181-4c15-9c7c-e0bebff4e9b0"
  },
  {
   "a": "Harriet Levin",
   "b": "Marykristin Haskell",
   "team": "Pickle Place",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 1,
   "avgExpected": 0.8,
   "aId": "aeff8297-a479-4b3b-9a49-72c410ac8e26",
   "bId": "ecb01f29-37c9-4caa-a023-dc5d2591f375"
  },
  {
   "a": "Jonathan Goldner",
   "b": "Janine Forrest",
   "team": "Pickle Place",
   "n": 12,
   "w": 8,
   "l": 4,
   "synergy": 0.1,
   "avgActual": 0.7,
   "avgExpected": 0.6,
   "aId": "5142be9e-adb4-4f40-8632-1f6daa6d824b",
   "bId": "dd30bbd2-24c2-431a-8b21-2de326c75ab3"
  },
  {
   "a": "Tanya Kenney",
   "b": "Andrew Hyman",
   "team": "The Atlantic Club",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 3.6,
   "avgExpected": 3.5,
   "aId": "9136414d-016a-41e3-be48-735a5ef794da",
   "bId": "dbda3e07-6332-4467-bdf0-be18b2686573"
  },
  {
   "a": "Wei Zhu",
   "b": "Henry Wang",
   "team": "Pickle House",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.1,
   "avgActual": -4.7,
   "avgExpected": -4.9,
   "aId": "937eb27e-1168-4697-ad5c-dd5a6cf3872d",
   "bId": "d9e47350-1ce4-41d5-81d7-d9fbb78efd98"
  },
  {
   "a": "Randy Samuels",
   "b": "Kajal Sinkar",
   "team": "Home Court",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 0.1,
   "avgActual": -1.2,
   "avgExpected": -1.4,
   "aId": "294cb11e-477b-435c-a293-b2527bfb4fc3",
   "bId": "9d7f6585-d5f4-44fa-a4f9-24737a072f72"
  },
  {
   "a": "Barbara Hess",
   "b": "Eliezer Mintz",
   "team": "Monroe",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 0.8,
   "avgExpected": 0.5,
   "aId": "21baa2cb-e882-442e-a5e0-a6d88126c9c3",
   "bId": "832fb271-fb5e-43aa-b442-95c03fb78342"
  },
  {
   "a": "Kajal Sinkar",
   "b": "George Mandl",
   "team": "Home Court",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.1,
   "avgActual": -2.2,
   "avgExpected": -2.5,
   "aId": "9d7f6585-d5f4-44fa-a4f9-24737a072f72",
   "bId": "a0019103-8887-4a15-bbe0-d1c35cdd7b0d"
  },
  {
   "a": "Jingwei Wu",
   "b": "Michael Finkelstein",
   "team": "Bounce Malvern Black",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 0.1,
   "avgActual": 2,
   "avgExpected": 1.8,
   "aId": "58e052c4-6ab5-46a7-8e6c-6c7a465262e5",
   "bId": "861c3f68-2c96-4a96-a75e-645020f73a5c"
  },
  {
   "a": "Keith Goldberg",
   "b": "Jennifer Wang",
   "team": "Bounce Malvern Black",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.1,
   "avgActual": 6.8,
   "avgExpected": 6.6,
   "aId": "37a0fa2c-df0b-4d92-900b-a9f20f441ad8",
   "bId": "59d2f8a4-3875-4cd2-8245-123b01ea9e22"
  },
  {
   "a": "Judy Qiu",
   "b": "Jennifer Wang",
   "team": "Bounce Malvern Black",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 4.5,
   "avgExpected": 4.3,
   "aId": "524b4051-2245-4d13-a9ec-2c2aac3ec980",
   "bId": "59d2f8a4-3875-4cd2-8245-123b01ea9e22"
  },
  {
   "a": "Hal Greenspan",
   "b": "Tanya Kenney",
   "team": "The Atlantic Club",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": 0.1,
   "avgActual": -3,
   "avgExpected": -3.3,
   "aId": "36b33227-285b-4959-a3b8-21012748391e",
   "bId": "9136414d-016a-41e3-be48-735a5ef794da"
  },
  {
   "a": "Marc Harden",
   "b": "Annemarie Mccartney",
   "team": "Players Courtyard",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 0.1,
   "avgActual": 6.4,
   "avgExpected": 6.3,
   "aId": "55194d2f-f537-4e19-b901-86c559f25ef2",
   "bId": "d08d78db-7d20-4dc2-a37b-41841c4624fd"
  },
  {
   "a": "Tanya Patterson",
   "b": "Wolfgang Chincarini",
   "team": "Pickle House",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0,
   "avgActual": -2.7,
   "avgExpected": -2.8,
   "aId": "011a3e6a-c2a3-4dcf-b1f4-9e32a4440789",
   "bId": "e31476db-1f0b-44e3-b3da-a5bc2c8dbc62"
  },
  {
   "a": "Jonathan Brand",
   "b": "Jeff Lorman",
   "team": "Players Courtyard",
   "n": 13,
   "w": 8,
   "l": 5,
   "synergy": 0,
   "avgActual": 1.6,
   "avgExpected": 1.6,
   "aId": "3d1b28fd-25f4-4145-bccd-6b25ab627ffe",
   "bId": "75789bbc-0dde-460e-b905-7bd1189c6a90"
  },
  {
   "a": "Nancy Blank",
   "b": "Lucy Chow",
   "team": "Bounce Malvern Blue",
   "n": 7,
   "w": 1,
   "l": 6,
   "synergy": 0,
   "avgActual": -2.6,
   "avgExpected": -2.5,
   "aId": "03fc28a7-e11b-49f8-84e3-0b2a7fd0a9a7",
   "bId": "84f2d830-3dbf-4dfd-bd4b-f9eb3fb04091"
  },
  {
   "a": "Ed Gieske",
   "b": "Patrik Grubb",
   "team": "Bounce Malvern Blue",
   "n": 8,
   "w": 0,
   "l": 8,
   "synergy": 0,
   "avgActual": -5.4,
   "avgExpected": -5.4,
   "aId": "314486b1-6723-4b33-9dba-fa5756065707",
   "bId": "6bc51379-c588-4388-88a5-f9fc4d5beee1"
  },
  {
   "a": "Tanya Kenney",
   "b": "Darren Saks",
   "team": "The Atlantic Club",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0,
   "avgActual": 1.6,
   "avgExpected": 1.7,
   "aId": "9136414d-016a-41e3-be48-735a5ef794da",
   "bId": "9bf7b8ab-4dfa-442b-be12-77580a5ea1dc"
  },
  {
   "a": "Z Zhang",
   "b": "Janet Garrity",
   "team": "Pickle Place",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0,
   "avgActual": 2,
   "avgExpected": 2,
   "aId": "95982984-9054-491c-a5a5-b5592c5f02a4",
   "bId": "e687e44a-22a6-4f8e-a3ac-b328fae537c3"
  },
  {
   "a": "Harriet Levin",
   "b": "Janine Forrest",
   "team": "Pickle Place",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 0,
   "avgActual": 3.9,
   "avgExpected": 3.9,
   "aId": "aeff8297-a479-4b3b-9a49-72c410ac8e26",
   "bId": "dd30bbd2-24c2-431a-8b21-2de326c75ab3"
  },
  {
   "a": "Jonathan Goldner",
   "b": "Stephen Hanak",
   "team": "Pickle Place",
   "n": 11,
   "w": 5,
   "l": 6,
   "synergy": 0,
   "avgActual": 0.5,
   "avgExpected": 0.5,
   "aId": "5142be9e-adb4-4f40-8632-1f6daa6d824b",
   "bId": "8f20e88a-a2cf-4e7e-b024-62f23423cf70"
  },
  {
   "a": "Kristen Soucie",
   "b": "Tara Kramer",
   "team": "Flemington",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0,
   "avgActual": -2,
   "avgExpected": -1.9,
   "aId": "4745eae2-7562-424a-92de-efcb84034406",
   "bId": "dae62b8e-5f8e-4721-8f41-3218518d1e30"
  },
  {
   "a": "Keith Goldberg",
   "b": "Judy Qiu",
   "team": "Bounce Malvern Black",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 0,
   "avgActual": 8.2,
   "avgExpected": 8.2,
   "aId": "37a0fa2c-df0b-4d92-900b-a9f20f441ad8",
   "bId": "524b4051-2245-4d13-a9ec-2c2aac3ec980"
  },
  {
   "a": "Karen Moliver",
   "b": "Derek Le",
   "team": "Bounce Malvern Black",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0,
   "avgActual": 1,
   "avgExpected": 1,
   "aId": "6412a5fc-5f1f-4dcf-a1b9-c1838eeabec9",
   "bId": "8cf7b40c-ed2c-4c8b-83bd-b9f2d486c690"
  },
  {
   "a": "Jim Darcangelo",
   "b": "Katherine Maruyama",
   "team": "Bounce Malvern Black",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0,
   "avgActual": 6.7,
   "avgExpected": 6.6,
   "aId": "0530512b-466d-4ff7-9e89-7961b4a63110",
   "bId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a"
  },
  {
   "a": "Keith Goldberg",
   "b": "Jingwei Wu",
   "team": "Bounce Malvern Black",
   "n": 11,
   "w": 11,
   "l": 0,
   "synergy": 0,
   "avgActual": 6.9,
   "avgExpected": 7,
   "aId": "37a0fa2c-df0b-4d92-900b-a9f20f441ad8",
   "bId": "58e052c4-6ab5-46a7-8e6c-6c7a465262e5"
  },
  {
   "a": "Oliveira Karen",
   "b": "Sinitra Siengsanaoh",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0,
   "avgActual": -2,
   "avgExpected": -2,
   "aId": "80b535f7-a6f6-4905-90ae-69c8695f99be",
   "bId": "bd5e1a4c-a9d5-4683-a74e-90c0df2d84cd"
  },
  {
   "a": "Sandro Stefanelli",
   "b": "Christine Dugan",
   "team": "Bounce Malvern Blue",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0,
   "avgActual": -2,
   "avgExpected": -2.1,
   "aId": "1872d8d8-f958-4747-af3a-443d5f88a1c3",
   "bId": "213bd4a2-a13d-4540-b93e-69e1e9116ff8"
  },
  {
   "a": "Sergey Sprikut",
   "b": "Guy Ohn",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0,
   "avgActual": 4.3,
   "avgExpected": 4.3,
   "aId": "28b4b9e6-0b25-473c-8386-2876bf60efab",
   "bId": "f394b637-236e-4fee-b26f-374c90c3dd1e"
  },
  {
   "a": "Liz Cuozzo",
   "b": "Andrew Hyman",
   "team": "The Atlantic Club",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0,
   "avgActual": 1.6,
   "avgExpected": 1.6,
   "aId": "2b2d474d-281c-42d7-854b-6bfe32f20563",
   "bId": "dbda3e07-6332-4467-bdf0-be18b2686573"
  },
  {
   "a": "Eva Danieli",
   "b": "Brad Oldham",
   "team": "The Atlantic Club",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 0,
   "avgActual": -0.5,
   "avgExpected": -0.5,
   "aId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae",
   "bId": "965b56ee-6fb4-4bd1-9708-8ced2c5dd9a2"
  },
  {
   "a": "Jonathan Brand",
   "b": "Bennett Shanker",
   "team": "Players Courtyard",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0,
   "avgActual": 2.3,
   "avgExpected": 2.3,
   "aId": "3d1b28fd-25f4-4145-bccd-6b25ab627ffe",
   "bId": "a86dc96c-b346-460c-a94c-df0551d5027a"
  },
  {
   "a": "Robert Toledo",
   "b": "Andrew Hyman",
   "team": "The Atlantic Club",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": 0,
   "avgActual": 0.3,
   "avgExpected": 0.2,
   "aId": "a1e0d6a6-b8d4-47b7-bdfc-6cb8670a421d",
   "bId": "dbda3e07-6332-4467-bdf0-be18b2686573"
  },
  {
   "a": "Eva Danieli",
   "b": "Robert Toledo",
   "team": "The Atlantic Club",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0,
   "avgActual": 2.3,
   "avgExpected": 2.3,
   "aId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae",
   "bId": "a1e0d6a6-b8d4-47b7-bdfc-6cb8670a421d"
  },
  {
   "a": "Kate Curren",
   "b": "Lydia Fiore",
   "team": "Pickleball Palace",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0,
   "avgActual": 0.3,
   "avgExpected": 0.3,
   "aId": "20e006d9-72f9-4f9e-bad5-750694224782",
   "bId": "602fc2fd-c2f6-4909-9951-c829b5831548"
  },
  {
   "a": "Michael Finkelstein",
   "b": "Stephanie Woomer",
   "team": "Bounce Malvern Black",
   "n": 8,
   "w": 7,
   "l": 1,
   "synergy": 0,
   "avgActual": 3.1,
   "avgExpected": 3.1,
   "aId": "861c3f68-2c96-4a96-a75e-645020f73a5c",
   "bId": "e05f57f5-c898-404e-b86f-c2460cc23b06"
  },
  {
   "a": "Jonathan Brand",
   "b": "Elyse Diamond",
   "team": "Players Courtyard",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0,
   "avgActual": 1.7,
   "avgExpected": 1.8,
   "aId": "3d1b28fd-25f4-4145-bccd-6b25ab627ffe",
   "bId": "a0c9637b-5b23-4797-a46a-d2df7bb0fae9"
  },
  {
   "a": "Michael Vincent",
   "b": "Cindi Goldstein",
   "team": "Home Court",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0,
   "avgActual": -4,
   "avgExpected": -3.9,
   "aId": "7f44421c-476c-4857-99ed-3376b32289ca",
   "bId": "900813f8-0026-4040-b11e-7222b87545db"
  },
  {
   "a": "Brad Daddis",
   "b": "Annemarie Mccartney",
   "team": "Players Courtyard",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0,
   "avgActual": 9.7,
   "avgExpected": 9.8,
   "aId": "3b22e073-2c4b-4245-a142-29441ec509a3",
   "bId": "d08d78db-7d20-4dc2-a37b-41841c4624fd"
  },
  {
   "a": "Kate Curren",
   "b": "Carly Pfeffer",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0,
   "avgActual": 3.5,
   "avgExpected": 3.5,
   "aId": "20e006d9-72f9-4f9e-bad5-750694224782",
   "bId": "387e74d4-66ee-4a52-a4ac-aae3dbe1d21b"
  },
  {
   "a": "Clifford Luster",
   "b": "Robert Huntley",
   "team": "Home Court",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -0.3,
   "avgExpected": -0.2,
   "aId": "3f47746a-2105-493a-941a-b15c4b02a520",
   "bId": "b5dec967-9e3a-49b4-b136-597711d099cc"
  },
  {
   "a": "Andrea Smith",
   "b": "Michael Vincent",
   "team": "Home Court",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -0.7,
   "avgExpected": -0.4,
   "aId": "1318bc01-f23f-47da-94cb-ac71b8f3e694",
   "bId": "7f44421c-476c-4857-99ed-3376b32289ca"
  },
  {
   "a": "Karen Moliver",
   "b": "Katherine Maruyama",
   "team": "Bounce Malvern Black",
   "n": 11,
   "w": 8,
   "l": 3,
   "synergy": -0.1,
   "avgActual": 4.8,
   "avgExpected": 5,
   "aId": "6412a5fc-5f1f-4dcf-a1b9-c1838eeabec9",
   "bId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a"
  },
  {
   "a": "Jodi Evans",
   "b": "Hal Golden",
   "team": "Bounce Malvern Blue",
   "n": 7,
   "w": 1,
   "l": 6,
   "synergy": -0.1,
   "avgActual": -5,
   "avgExpected": -4.8,
   "aId": "0470dc02-2e17-4eeb-b282-4767b17e733e",
   "bId": "476c99a2-15e5-4e99-8471-7c2b6394faa3"
  },
  {
   "a": "Charlie Johnston",
   "b": "John Burke",
   "team": "Pickleball Palace",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 2.3,
   "avgExpected": 2.5,
   "aId": "1bad49ab-f2b8-439b-9e4b-3ff3cb8ca325",
   "bId": "31e2f010-7d86-4706-a172-d0936f4421f0"
  },
  {
   "a": "Janine Forrest",
   "b": "Janet Garrity",
   "team": "Pickle Place",
   "n": 11,
   "w": 7,
   "l": 4,
   "synergy": -0.1,
   "avgActual": 0.9,
   "avgExpected": 1.1,
   "aId": "dd30bbd2-24c2-431a-8b21-2de326c75ab3",
   "bId": "e687e44a-22a6-4f8e-a3ac-b328fae537c3"
  },
  {
   "a": "Glenn Hillman",
   "b": "Don Godinez",
   "team": "Monroe",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -0.7,
   "avgExpected": -0.5,
   "aId": "316cd007-2c93-473d-a8d8-61a5fbbfa002",
   "bId": "f706ae79-d09c-4ad4-ac19-837deb84d36d"
  },
  {
   "a": "Cynthia Eisen",
   "b": "David Eisen",
   "team": "Pickle Place",
   "n": 10,
   "w": 5,
   "l": 5,
   "synergy": -0.1,
   "avgActual": -0.9,
   "avgExpected": -0.7,
   "aId": "4c762958-33e1-4b41-8077-424cb639af7e",
   "bId": "d4b4ed3c-0c4b-4f8b-9b98-a5d448bfb361"
  },
  {
   "a": "David Osborne",
   "b": "Denise Richmond",
   "team": "Flemington",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 0.7,
   "avgExpected": 0.9,
   "aId": "418e7ba5-3e06-40ec-9b83-19d3bf10c9cb",
   "bId": "422cd941-43db-4123-a07e-3316583f51ee"
  },
  {
   "a": "Art Muth",
   "b": "Eric Luque",
   "team": "Flemington",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 2.2,
   "avgExpected": 2.3,
   "aId": "6bfc3a49-53cb-4c03-b8cb-94552158ccbe",
   "bId": "b3c28078-ab31-4002-9e09-5fa3f627d8c1"
  },
  {
   "a": "Susan Kapit",
   "b": "Guy Ohn",
   "team": "Monroe",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.1,
   "avgActual": 3.3,
   "avgExpected": 3.5,
   "aId": "19a34ff6-50a2-4e30-972e-2cec78d4aec3",
   "bId": "f394b637-236e-4fee-b26f-374c90c3dd1e"
  },
  {
   "a": "Rosalyn Goldsmith",
   "b": "Eliezer Mintz",
   "team": "Monroe",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.1,
   "avgActual": -1.7,
   "avgExpected": -1.4,
   "aId": "545c12c3-3098-47ca-b35e-429f37f481f5",
   "bId": "832fb271-fb5e-43aa-b442-95c03fb78342"
  },
  {
   "a": "Ping Peng",
   "b": "Bruce Mattthew",
   "team": "Pickle House",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -0.7,
   "avgExpected": -0.6,
   "aId": "7af65ce9-d7e3-4d00-b19b-653e6d2dc8d9",
   "bId": "a01b1376-6cf7-4a18-8c5f-72fcb3b340dd"
  },
  {
   "a": "Pam Friedman",
   "b": "Guy Ohn",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 0.3,
   "avgExpected": 0.6,
   "aId": "94d51b2d-359c-450c-b1c8-728944462b01",
   "bId": "f394b637-236e-4fee-b26f-374c90c3dd1e"
  },
  {
   "a": "Michael Vincent",
   "b": "Carlo Caronan",
   "team": "Home Court",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.1,
   "avgActual": -2.7,
   "avgExpected": -2.6,
   "aId": "7f44421c-476c-4857-99ed-3376b32289ca",
   "bId": "8269fb55-3379-47d6-8fe5-f087ac82fe0c"
  },
  {
   "a": "Mike Giampapa",
   "b": "Louis Vessichelli",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.1,
   "avgActual": -2.7,
   "avgExpected": -2.4,
   "aId": "61488bc4-71af-4dda-8031-5938382529e5",
   "bId": "cb8c8404-c482-4fe5-bd01-35b348fccfd4"
  },
  {
   "a": "Janet Bellaran",
   "b": "Darren Saks",
   "team": "The Atlantic Club",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 2.5,
   "avgExpected": 2.7,
   "aId": "78d7b1d3-6b6c-4dde-a94f-5d4056b33ee7",
   "bId": "9bf7b8ab-4dfa-442b-be12-77580a5ea1dc"
  },
  {
   "a": "Hal Golden",
   "b": "Jeremy Workman",
   "team": "Bounce Malvern Blue",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.1,
   "avgActual": -1,
   "avgExpected": -0.9,
   "aId": "476c99a2-15e5-4e99-8471-7c2b6394faa3",
   "bId": "5a15e437-7769-4d60-bd0c-b6c48176289c"
  },
  {
   "a": "Chanda Mccoy",
   "b": "Art Muth",
   "team": "Flemington",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -0.5,
   "avgExpected": -0.3,
   "aId": "30cb78cb-f962-40f9-bd02-78d336920431",
   "bId": "6bfc3a49-53cb-4c03-b8cb-94552158ccbe"
  },
  {
   "a": "Jeremy Workman",
   "b": "Brenden Dorley",
   "team": "Bounce Malvern Blue",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 3.3,
   "avgExpected": 3.6,
   "aId": "5a15e437-7769-4d60-bd0c-b6c48176289c",
   "bId": "99c7c387-dea4-4b5b-a3b6-639ae2f806d2"
  },
  {
   "a": "Jonathan Brand",
   "b": "James Shaw",
   "team": "Players Courtyard",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.1,
   "avgActual": 6.3,
   "avgExpected": 6.5,
   "aId": "3d1b28fd-25f4-4145-bccd-6b25ab627ffe",
   "bId": "439e30a7-6097-4e20-8a7b-25c57dd5b5d0"
  },
  {
   "a": "Surbhi Sabharwal",
   "b": "Robert Huntley",
   "team": "Home Court",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": -0.2,
   "avgActual": -0.7,
   "avgExpected": -0.5,
   "aId": "6ff2d1f1-1ffd-4140-820d-b2333c370dcd",
   "bId": "b5dec967-9e3a-49b4-b136-597711d099cc"
  },
  {
   "a": "Derek Le",
   "b": "Brian Aguilar",
   "team": "Bounce Malvern Black",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 5,
   "avgExpected": 5.4,
   "aId": "8cf7b40c-ed2c-4c8b-83bd-b9f2d486c690",
   "bId": "e2678d1f-eb49-4c8c-9e0a-36dc9dca5d47"
  },
  {
   "a": "Jodi Evans",
   "b": "Christine Dugan",
   "team": "Bounce Malvern Blue",
   "n": 10,
   "w": 2,
   "l": 8,
   "synergy": -0.2,
   "avgActual": -4.5,
   "avgExpected": -4.3,
   "aId": "0470dc02-2e17-4eeb-b282-4767b17e733e",
   "bId": "213bd4a2-a13d-4540-b93e-69e1e9116ff8"
  },
  {
   "a": "Jeff Lorman",
   "b": "Kate Siedell",
   "team": "Players Courtyard",
   "n": 13,
   "w": 8,
   "l": 5,
   "synergy": -0.2,
   "avgActual": 1.6,
   "avgExpected": 1.8,
   "aId": "75789bbc-0dde-460e-b905-7bd1189c6a90",
   "bId": "8decf039-f1e5-4182-b3cf-6756789ae87a"
  },
  {
   "a": "Ana Bautista",
   "b": "Laura Elleman",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.2,
   "avgActual": -2.2,
   "avgExpected": -1.9,
   "aId": "33692212-f6ed-47f3-bac2-e19da564c0c6",
   "bId": "3e6056c2-7c5b-4123-b457-ffcf82d3b422"
  },
  {
   "a": "Cynthia Eisen",
   "b": "Harriet Levin",
   "team": "Pickle Place",
   "n": 10,
   "w": 8,
   "l": 2,
   "synergy": -0.2,
   "avgActual": 2.7,
   "avgExpected": 3,
   "aId": "4c762958-33e1-4b41-8077-424cb639af7e",
   "bId": "aeff8297-a479-4b3b-9a49-72c410ac8e26"
  },
  {
   "a": "Michael Vollmer",
   "b": "Susan Zhang",
   "team": "Pickle House",
   "n": 9,
   "w": 1,
   "l": 8,
   "synergy": -0.2,
   "avgActual": -4,
   "avgExpected": -3.7,
   "aId": "148387a8-f20a-44df-981d-0d9d2e7bf443",
   "bId": "f3be5948-f902-49ef-886c-190ad0cca61f"
  },
  {
   "a": "Eric Luque",
   "b": "Tara Kramer",
   "team": "Flemington",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.2,
   "avgActual": -0.2,
   "avgExpected": 0.1,
   "aId": "b3c28078-ab31-4002-9e09-5fa3f627d8c1",
   "bId": "dae62b8e-5f8e-4721-8f41-3218518d1e30"
  },
  {
   "a": "Hal Greenspan",
   "b": "Janet Bellaran",
   "team": "The Atlantic Club",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.2,
   "avgActual": -3.6,
   "avgExpected": -3.3,
   "aId": "36b33227-285b-4959-a3b8-21012748391e",
   "bId": "78d7b1d3-6b6c-4dde-a94f-5d4056b33ee7"
  },
  {
   "a": "Michael Vincent",
   "b": "Kimberly Schwartz",
   "team": "Home Court",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.2,
   "avgActual": -5,
   "avgExpected": -4.6,
   "aId": "7f44421c-476c-4857-99ed-3376b32289ca",
   "bId": "bb235d73-c023-4543-82b0-37abbf747f7d"
  },
  {
   "a": "Bruce Aronow",
   "b": "Marykristin Haskell",
   "team": "Pickle Place",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.2,
   "avgActual": 2.3,
   "avgExpected": 2.6,
   "aId": "c9457ed9-79fb-40ef-b26a-566d206714d4",
   "bId": "ecb01f29-37c9-4caa-a023-dc5d2591f375"
  },
  {
   "a": "Nancy Blank",
   "b": "Wendy Frost",
   "team": "Bounce Malvern Blue",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.2,
   "avgActual": -6,
   "avgExpected": -5.7,
   "aId": "03fc28a7-e11b-49f8-84e3-0b2a7fd0a9a7",
   "bId": "8e271df2-5f90-4f40-b94a-b4eb4ec9fffc"
  },
  {
   "a": "Jhon Cifuentes",
   "b": "George Mandl",
   "team": "Home Court",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -0.2,
   "avgActual": -4,
   "avgExpected": -3.7,
   "aId": "91f844b2-dd13-45a0-b66d-9b7ea751037a",
   "bId": "a0019103-8887-4a15-bbe0-d1c35cdd7b0d"
  },
  {
   "a": "Louis Vessichelli",
   "b": "Brian Gonzalez",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.2,
   "avgActual": -1.5,
   "avgExpected": -1.1,
   "aId": "cb8c8404-c482-4fe5-bd01-35b348fccfd4",
   "bId": "ecc02ab8-5e9c-4950-89b7-be3f397683c3"
  },
  {
   "a": "Laura Kang",
   "b": "Z Zhang",
   "team": "Pickle Place",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.2,
   "avgActual": 4,
   "avgExpected": 4.4,
   "aId": "5aaea21a-7e11-4168-8192-89c4c134e1d4",
   "bId": "95982984-9054-491c-a5a5-b5592c5f02a4"
  },
  {
   "a": "Denise Richmond",
   "b": "Christine Papa",
   "team": "Flemington",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.2,
   "avgActual": -0.5,
   "avgExpected": -0.1,
   "aId": "422cd941-43db-4123-a07e-3316583f51ee",
   "bId": "d156a552-7fa9-488e-9bfa-745feb859950"
  },
  {
   "a": "Fabienne Yu",
   "b": "Albert Pamudji",
   "team": "Pickle House",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.2,
   "avgActual": -2.2,
   "avgExpected": -1.9,
   "aId": "943ac52a-070f-4bdc-baf8-efe14d0f40ea",
   "bId": "f8c55797-409c-4cf0-a2d5-241ec95f60b2"
  },
  {
   "a": "Bruce Bilow",
   "b": "Ali Fordyce",
   "team": "The Atlantic Club",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.2,
   "avgActual": -2.3,
   "avgExpected": -1.9,
   "aId": "1607c79a-6ca1-4214-a557-5ae0617ac8a1",
   "bId": "9e2cc278-7356-491f-b853-945e33a988d2"
  },
  {
   "a": "Andrea Smith",
   "b": "Margaret Weidlich",
   "team": "Home Court",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.3,
   "avgActual": -3,
   "avgExpected": -2.5,
   "aId": "1318bc01-f23f-47da-94cb-ac71b8f3e694",
   "bId": "7021e97f-1e5e-4adb-ac80-1a9c919caba6"
  },
  {
   "a": "Jim Darcangelo",
   "b": "Stephanie Woomer",
   "team": "Bounce Malvern Black",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.3,
   "avgActual": 2,
   "avgExpected": 2.5,
   "aId": "0530512b-466d-4ff7-9e89-7961b4a63110",
   "bId": "e05f57f5-c898-404e-b86f-c2460cc23b06"
  },
  {
   "a": "Jim Darcangelo",
   "b": "Jill Scully",
   "team": "Bounce Malvern Black",
   "n": 9,
   "w": 8,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 4.2,
   "avgExpected": 4.7,
   "aId": "0530512b-466d-4ff7-9e89-7961b4a63110",
   "bId": "754a47b8-0711-4929-928f-9bafe8f9dbc0"
  },
  {
   "a": "Jill Scully",
   "b": "Katherine Maruyama",
   "team": "Bounce Malvern Black",
   "n": 8,
   "w": 7,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 5.5,
   "avgExpected": 5.9,
   "aId": "754a47b8-0711-4929-928f-9bafe8f9dbc0",
   "bId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a"
  },
  {
   "a": "Laura Elleman",
   "b": "Lydia Fiore",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -3.7,
   "avgExpected": -3.2,
   "aId": "3e6056c2-7c5b-4123-b457-ffcf82d3b422",
   "bId": "602fc2fd-c2f6-4909-9951-c829b5831548"
  },
  {
   "a": "Michael Dombrowiecki",
   "b": "Joe Palumbo",
   "team": "The Atlantic Club",
   "n": 9,
   "w": 3,
   "l": 6,
   "synergy": -0.3,
   "avgActual": -1.6,
   "avgExpected": -1.1,
   "aId": "3ac34ef1-17a5-4ab6-8d17-be4bd5a0a040",
   "bId": "b39664c3-1a6e-4493-968f-6e7f7939f694"
  },
  {
   "a": "Meryl Nadler",
   "b": "Don Godinez",
   "team": "Monroe",
   "n": 10,
   "w": 5,
   "l": 5,
   "synergy": -0.3,
   "avgActual": -1.1,
   "avgExpected": -0.7,
   "aId": "90987b97-d181-4c15-9c7c-e0bebff4e9b0",
   "bId": "f706ae79-d09c-4ad4-ac19-837deb84d36d"
  },
  {
   "a": "Susan Kapit",
   "b": "Scott Friedman",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.3,
   "avgActual": -1.3,
   "avgExpected": -0.7,
   "aId": "19a34ff6-50a2-4e30-972e-2cec78d4aec3",
   "bId": "d40fde69-77a2-4998-a631-fba159129d2f"
  },
  {
   "a": "Jonathan Goldner",
   "b": "Bruce Aronow",
   "team": "Pickle Place",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.3,
   "avgActual": 0.5,
   "avgExpected": 1,
   "aId": "5142be9e-adb4-4f40-8632-1f6daa6d824b",
   "bId": "c9457ed9-79fb-40ef-b26a-566d206714d4"
  },
  {
   "a": "Tara Kramer",
   "b": "Aimee Castellano",
   "team": "Flemington",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": -0.3,
   "avgActual": -2.1,
   "avgExpected": -1.7,
   "aId": "dae62b8e-5f8e-4721-8f41-3218518d1e30",
   "bId": "e76985fb-efd1-4180-a340-e4f36abbc8b4"
  },
  {
   "a": "Ed Gieske",
   "b": "Lucy Chow",
   "team": "Bounce Malvern Blue",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.3,
   "avgActual": -3,
   "avgExpected": -2.4,
   "aId": "314486b1-6723-4b33-9dba-fa5756065707",
   "bId": "84f2d830-3dbf-4dfd-bd4b-f9eb3fb04091"
  },
  {
   "a": "Yi Gu",
   "b": "Meryl Nadler",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 2,
   "avgExpected": 2.7,
   "aId": "0640ecce-0b14-4eac-9cbd-be86592d6102",
   "bId": "90987b97-d181-4c15-9c7c-e0bebff4e9b0"
  },
  {
   "a": "Hayley Yandoli",
   "b": "Guy Ohn",
   "team": "Monroe",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.3,
   "avgActual": 0,
   "avgExpected": 0.6,
   "aId": "1fc2dd51-135b-46d6-91ef-9291b573e78a",
   "bId": "f394b637-236e-4fee-b26f-374c90c3dd1e"
  },
  {
   "a": "Carolyn Dardani-Horensky",
   "b": "Yang Xiang",
   "team": "Pickle House",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -0.3,
   "avgActual": -8,
   "avgExpected": -7.4,
   "aId": "6acb77b2-e82c-4de7-b333-89fbe85c9997",
   "bId": "e827e6b8-85c6-496c-bf19-1427b356f318"
  },
  {
   "a": "Denise Richmond",
   "b": "Scott Rubin",
   "team": "Flemington",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.3,
   "avgActual": -3.7,
   "avgExpected": -2.9,
   "aId": "422cd941-43db-4123-a07e-3316583f51ee",
   "bId": "c12175df-b959-4efe-95e7-e5298b783da8"
  },
  {
   "a": "Kim Hamilton",
   "b": "Marc Harden",
   "team": "Players Courtyard",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.3,
   "avgActual": 2.6,
   "avgExpected": 3.2,
   "aId": "4d6a9dce-3c23-4d65-85f9-8b440c44a318",
   "bId": "55194d2f-f537-4e19-b901-86c559f25ef2"
  },
  {
   "a": "Manju Shah",
   "b": "Hayley Yandoli",
   "team": "Monroe",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.3,
   "avgActual": -7.2,
   "avgExpected": -6.6,
   "aId": "08c43a4f-c2ab-4935-b453-fe213b85b002",
   "bId": "1fc2dd51-135b-46d6-91ef-9291b573e78a"
  },
  {
   "a": "Barbara Hess",
   "b": "Scott Friedman",
   "team": "Monroe",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.3,
   "avgActual": 0.8,
   "avgExpected": 1.4,
   "aId": "21baa2cb-e882-442e-a5e0-a6d88126c9c3",
   "bId": "d40fde69-77a2-4998-a631-fba159129d2f"
  },
  {
   "a": "Michael Vincent",
   "b": "Sharon Streit",
   "team": "Home Court",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -3.2,
   "avgExpected": -2.6,
   "aId": "7f44421c-476c-4857-99ed-3376b32289ca",
   "bId": "9f9e5b25-d385-4c12-adb3-233c612619c4"
  },
  {
   "a": "Carlo Caronan",
   "b": "Robert Huntley",
   "team": "Home Court",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.3,
   "avgActual": -2,
   "avgExpected": -1.4,
   "aId": "8269fb55-3379-47d6-8fe5-f087ac82fe0c",
   "bId": "b5dec967-9e3a-49b4-b136-597711d099cc"
  },
  {
   "a": "Jonathan Brand",
   "b": "Annemarie Mccartney",
   "team": "Players Courtyard",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": -0.3,
   "avgActual": 8.8,
   "avgExpected": 9.3,
   "aId": "3d1b28fd-25f4-4145-bccd-6b25ab627ffe",
   "bId": "d08d78db-7d20-4dc2-a37b-41841c4624fd"
  },
  {
   "a": "Andrea Dellechiaie",
   "b": "Sinitra Siengsanaoh",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 0.3,
   "avgExpected": 1.1,
   "aId": "84e4d40d-3b98-4822-b073-e9dc71c0d4d7",
   "bId": "bd5e1a4c-a9d5-4683-a74e-90c0df2d84cd"
  },
  {
   "a": "James Shaw",
   "b": "Elyse Diamond",
   "team": "Players Courtyard",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 1.3,
   "avgExpected": 1.9,
   "aId": "439e30a7-6097-4e20-8a7b-25c57dd5b5d0",
   "bId": "a0c9637b-5b23-4797-a46a-d2df7bb0fae9"
  },
  {
   "a": "Bruce Bilow",
   "b": "Darren Saks",
   "team": "The Atlantic Club",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 0.7,
   "avgExpected": 1.5,
   "aId": "1607c79a-6ca1-4214-a557-5ae0617ac8a1",
   "bId": "9bf7b8ab-4dfa-442b-be12-77580a5ea1dc"
  },
  {
   "a": "Chanda Mccoy",
   "b": "Tara Kramer",
   "team": "Flemington",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 1,
   "avgExpected": 1.6,
   "aId": "30cb78cb-f962-40f9-bd02-78d336920431",
   "bId": "dae62b8e-5f8e-4721-8f41-3218518d1e30"
  },
  {
   "a": "Frank Ding",
   "b": "Albert Pamudji",
   "team": "Pickle House",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.3,
   "avgActual": -1.3,
   "avgExpected": -0.6,
   "aId": "f83efefa-b8dd-49c2-90a1-9baa1e03315b",
   "bId": "f8c55797-409c-4cf0-a2d5-241ec95f60b2"
  },
  {
   "a": "Clifford Luster",
   "b": "Anita Bobba",
   "team": "Home Court",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.3,
   "avgActual": -1.3,
   "avgExpected": -0.5,
   "aId": "3f47746a-2105-493a-941a-b15c4b02a520",
   "bId": "abc68487-3415-49a2-bdfb-dd56eb5af20d"
  },
  {
   "a": "Tanya Kenney",
   "b": "Ali Fordyce",
   "team": "The Atlantic Club",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -1.7,
   "avgExpected": -1.2,
   "aId": "9136414d-016a-41e3-be48-735a5ef794da",
   "bId": "9e2cc278-7356-491f-b853-945e33a988d2"
  },
  {
   "a": "Tanya Patterson",
   "b": "Michael Vollmer",
   "team": "Pickle House",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.4,
   "avgActual": -4.2,
   "avgExpected": -3.6,
   "aId": "011a3e6a-c2a3-4dcf-b1f4-9e32a4440789",
   "bId": "148387a8-f20a-44df-981d-0d9d2e7bf443"
  },
  {
   "a": "Jim Darcangelo",
   "b": "Derek Le",
   "team": "Bounce Malvern Black",
   "n": 15,
   "w": 10,
   "l": 5,
   "synergy": -0.4,
   "avgActual": 2,
   "avgExpected": 2.5,
   "aId": "0530512b-466d-4ff7-9e89-7961b4a63110",
   "bId": "8cf7b40c-ed2c-4c8b-83bd-b9f2d486c690"
  },
  {
   "a": "Ping Peng",
   "b": "Jitendra Arora",
   "team": "Pickle House",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.4,
   "avgActual": -2.6,
   "avgExpected": -1.9,
   "aId": "7af65ce9-d7e3-4d00-b19b-653e6d2dc8d9",
   "bId": "a117b66b-f319-4fc0-8ee2-feb3f17767d0"
  },
  {
   "a": "Pam Boyd",
   "b": "Kim Hamilton",
   "team": "Players Courtyard",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.4,
   "avgActual": 4.4,
   "avgExpected": 5.2,
   "aId": "04aefa29-20e3-41b7-a680-19d13f9d4289",
   "bId": "4d6a9dce-3c23-4d65-85f9-8b440c44a318"
  },
  {
   "a": "Joe Palumbo",
   "b": "Alice Napolitano",
   "team": "The Atlantic Club",
   "n": 13,
   "w": 7,
   "l": 6,
   "synergy": -0.4,
   "avgActual": 0.5,
   "avgExpected": 1,
   "aId": "b39664c3-1a6e-4493-968f-6e7f7939f694",
   "bId": "d56483b8-a5b8-4c1f-8437-39fcf90a5030"
  },
  {
   "a": "Laura Kang",
   "b": "Jane Meng",
   "team": "Pickle Place",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.4,
   "avgActual": 0,
   "avgExpected": 0.8,
   "aId": "5aaea21a-7e11-4168-8192-89c4c134e1d4",
   "bId": "c365e1dd-21cf-4f38-a802-1aaaf6d0914b"
  },
  {
   "a": "Carly Pfeffer",
   "b": "Bud Heller",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.4,
   "avgActual": -1.3,
   "avgExpected": -0.4,
   "aId": "387e74d4-66ee-4a52-a4ac-aae3dbe1d21b",
   "bId": "9282b1b2-6551-481c-b9b8-2a246a49a621"
  },
  {
   "a": "Yi Gu",
   "b": "Don Godinez",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.4,
   "avgActual": 1,
   "avgExpected": 1.9,
   "aId": "0640ecce-0b14-4eac-9cbd-be86592d6102",
   "bId": "f706ae79-d09c-4ad4-ac19-837deb84d36d"
  },
  {
   "a": "Amy Chrebet",
   "b": "Guy Ohn",
   "team": "Monroe",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.4,
   "avgActual": 3,
   "avgExpected": 4,
   "aId": "6f511e98-567a-4b33-8831-ed123f01f952",
   "bId": "f394b637-236e-4fee-b26f-374c90c3dd1e"
  },
  {
   "a": "Jennifer Wang",
   "b": "Jill Scully",
   "team": "Bounce Malvern Black",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.4,
   "avgActual": 3.3,
   "avgExpected": 4,
   "aId": "59d2f8a4-3875-4cd2-8245-123b01ea9e22",
   "bId": "754a47b8-0711-4929-928f-9bafe8f9dbc0"
  },
  {
   "a": "Todd Stein",
   "b": "Art Muth",
   "team": "Flemington",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.4,
   "avgActual": -0.3,
   "avgExpected": 0.7,
   "aId": "63fb8f7d-8f83-4bdf-89c7-fc3ca7139df5",
   "bId": "6bfc3a49-53cb-4c03-b8cb-94552158ccbe"
  },
  {
   "a": "Art Muth",
   "b": "Christine Papa",
   "team": "Flemington",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.4,
   "avgActual": 0.5,
   "avgExpected": 1.3,
   "aId": "6bfc3a49-53cb-4c03-b8cb-94552158ccbe",
   "bId": "d156a552-7fa9-488e-9bfa-745feb859950"
  },
  {
   "a": "Kate Curren",
   "b": "Thomas Schillow",
   "team": "Pickleball Palace",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -0.4,
   "avgActual": 3.2,
   "avgExpected": 3.9,
   "aId": "20e006d9-72f9-4f9e-bad5-750694224782",
   "bId": "4ab0fd39-c108-419c-80f8-0dbe37dd75be"
  },
  {
   "a": "Carly Pfeffer",
   "b": "Rick Vazquez",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.4,
   "avgActual": 1.3,
   "avgExpected": 2.2,
   "aId": "387e74d4-66ee-4a52-a4ac-aae3dbe1d21b",
   "bId": "e532dafb-ff0f-43fc-82be-687d34ab8c14"
  },
  {
   "a": "Darren Saks",
   "b": "Joe Palumbo",
   "team": "The Atlantic Club",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -1,
   "avgExpected": -0.1,
   "aId": "9bf7b8ab-4dfa-442b-be12-77580a5ea1dc",
   "bId": "b39664c3-1a6e-4493-968f-6e7f7939f694"
  },
  {
   "a": "Ping Peng",
   "b": "Susan Zhang",
   "team": "Pickle House",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -6,
   "avgExpected": -4.8,
   "aId": "7af65ce9-d7e3-4d00-b19b-653e6d2dc8d9",
   "bId": "f3be5948-f902-49ef-886c-190ad0cca61f"
  },
  {
   "a": "Judy Liu",
   "b": "Carolyn Dardani-Horensky",
   "team": "Pickle House",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -12.3,
   "avgExpected": -11.2,
   "aId": "499cf876-38a5-4db1-84b6-50fd76f1c502",
   "bId": "6acb77b2-e82c-4de7-b333-89fbe85c9997"
  },
  {
   "a": "Michael Vollmer",
   "b": "Peilin Zhang",
   "team": "Pickle House",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.5,
   "avgActual": -7,
   "avgExpected": -6,
   "aId": "148387a8-f20a-44df-981d-0d9d2e7bf443",
   "bId": "af7b661e-bc26-4b53-8e7c-e5657bdba32a"
  },
  {
   "a": "David Osborne",
   "b": "Art Muth",
   "team": "Flemington",
   "n": 10,
   "w": 4,
   "l": 6,
   "synergy": -0.5,
   "avgActual": 0.5,
   "avgExpected": 1.2,
   "aId": "418e7ba5-3e06-40ec-9b83-19d3bf10c9cb",
   "bId": "6bfc3a49-53cb-4c03-b8cb-94552158ccbe"
  },
  {
   "a": "David Osborne",
   "b": "Eric Luque",
   "team": "Flemington",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": -0.5,
   "avgActual": 4,
   "avgExpected": 4.7,
   "aId": "418e7ba5-3e06-40ec-9b83-19d3bf10c9cb",
   "bId": "b3c28078-ab31-4002-9e09-5fa3f627d8c1"
  },
  {
   "a": "Denise Richmond",
   "b": "Tara Kramer",
   "team": "Flemington",
   "n": 8,
   "w": 2,
   "l": 6,
   "synergy": -0.5,
   "avgActual": -3.5,
   "avgExpected": -2.8,
   "aId": "422cd941-43db-4123-a07e-3316583f51ee",
   "bId": "dae62b8e-5f8e-4721-8f41-3218518d1e30"
  },
  {
   "a": "Carlo Caronan",
   "b": "Cindi Goldstein",
   "team": "Home Court",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.5,
   "avgActual": -5.6,
   "avgExpected": -4.7,
   "aId": "8269fb55-3379-47d6-8fe5-f087ac82fe0c",
   "bId": "900813f8-0026-4040-b11e-7222b87545db"
  },
  {
   "a": "Ed Gieske",
   "b": "Seth Yablonovitz",
   "team": "Bounce Malvern Blue",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -4,
   "avgExpected": -2.9,
   "aId": "314486b1-6723-4b33-9dba-fa5756065707",
   "bId": "9a3091de-08b0-4ade-be7f-a11057e21af4"
  },
  {
   "a": "Kathy BernéT",
   "b": "Lucy Chow",
   "team": "Bounce Malvern Blue",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -5,
   "avgExpected": -3.9,
   "aId": "220a5a2a-322c-4799-85a9-1f21b37b6cd4",
   "bId": "84f2d830-3dbf-4dfd-bd4b-f9eb3fb04091"
  },
  {
   "a": "Sergey Sprikut",
   "b": "Rosalyn Goldsmith",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.5,
   "avgActual": 0.3,
   "avgExpected": 1.5,
   "aId": "28b4b9e6-0b25-473c-8386-2876bf60efab",
   "bId": "545c12c3-3098-47ca-b35e-429f37f481f5"
  },
  {
   "a": "Christine Papa",
   "b": "Tara Kramer",
   "team": "Flemington",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.5,
   "avgActual": -3.4,
   "avgExpected": -2.5,
   "aId": "d156a552-7fa9-488e-9bfa-745feb859950",
   "bId": "dae62b8e-5f8e-4721-8f41-3218518d1e30"
  },
  {
   "a": "Simon Perry",
   "b": "Denise Richmond",
   "team": "Flemington",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -3,
   "avgExpected": -2,
   "aId": "03c7bdf6-926c-4d90-9416-117cd3478b50",
   "bId": "422cd941-43db-4123-a07e-3316583f51ee"
  },
  {
   "a": "Janet Bellaran",
   "b": "Tanya Kenney",
   "team": "The Atlantic Club",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.5,
   "avgActual": -1.7,
   "avgExpected": -0.5,
   "aId": "78d7b1d3-6b6c-4dde-a94f-5d4056b33ee7",
   "bId": "9136414d-016a-41e3-be48-735a5ef794da"
  },
  {
   "a": "Michael Finkelstein",
   "b": "Derek Le",
   "team": "Bounce Malvern Black",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.5,
   "avgActual": 2.8,
   "avgExpected": 3.8,
   "aId": "861c3f68-2c96-4a96-a75e-645020f73a5c",
   "bId": "8cf7b40c-ed2c-4c8b-83bd-b9f2d486c690"
  },
  {
   "a": "Carolyn Dardani-Horensky",
   "b": "Jitendra Arora",
   "team": "Pickle House",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -10,
   "avgExpected": -8.9,
   "aId": "6acb77b2-e82c-4de7-b333-89fbe85c9997",
   "bId": "a117b66b-f319-4fc0-8ee2-feb3f17767d0"
  },
  {
   "a": "Patrik Grubb",
   "b": "Tim Phelan",
   "team": "Bounce Malvern Blue",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -0.5,
   "avgActual": -8,
   "avgExpected": -7,
   "aId": "6bc51379-c588-4388-88a5-f9fc4d5beee1",
   "bId": "f5e62236-e4e5-4b34-865e-c92bf027d21c"
  },
  {
   "a": "Jennifer Wang",
   "b": "Michael Finkelstein",
   "team": "Bounce Malvern Black",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": -0.5,
   "avgActual": 1,
   "avgExpected": 1.8,
   "aId": "59d2f8a4-3875-4cd2-8245-123b01ea9e22",
   "bId": "861c3f68-2c96-4a96-a75e-645020f73a5c"
  },
  {
   "a": "Jhon Cifuentes",
   "b": "Sharon Streit",
   "team": "Home Court",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -3.3,
   "avgExpected": -2.1,
   "aId": "91f844b2-dd13-45a0-b66d-9b7ea751037a",
   "bId": "9f9e5b25-d385-4c12-adb3-233c612619c4"
  },
  {
   "a": "Christine Dugan",
   "b": "Tim Phelan",
   "team": "Bounce Malvern Blue",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -0.5,
   "avgActual": -6.5,
   "avgExpected": -5.6,
   "aId": "213bd4a2-a13d-4540-b93e-69e1e9116ff8",
   "bId": "f5e62236-e4e5-4b34-865e-c92bf027d21c"
  },
  {
   "a": "Jean Wang",
   "b": "Frank Ding",
   "team": "Pickle House",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.5,
   "avgActual": 0.3,
   "avgExpected": 1.3,
   "aId": "1188fc00-7ef5-4671-9ef9-2c7d162a2604",
   "bId": "f83efefa-b8dd-49c2-90a1-9baa1e03315b"
  },
  {
   "a": "Eva Danieli",
   "b": "Ali Fordyce",
   "team": "The Atlantic Club",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -0.6,
   "avgExpected": 0.3,
   "aId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae",
   "bId": "9e2cc278-7356-491f-b853-945e33a988d2"
  },
  {
   "a": "Ed Gieske",
   "b": "Tim Phelan",
   "team": "Bounce Malvern Blue",
   "n": 7,
   "w": 1,
   "l": 6,
   "synergy": -0.6,
   "avgActual": -6.9,
   "avgExpected": -5.9,
   "aId": "314486b1-6723-4b33-9dba-fa5756065707",
   "bId": "f5e62236-e4e5-4b34-865e-c92bf027d21c"
  },
  {
   "a": "Roger Graterol",
   "b": "Susan Debbs",
   "team": "Players Courtyard",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.6,
   "avgActual": 2.5,
   "avgExpected": 3.5,
   "aId": "23262a95-4498-4ca1-87a9-713c02337168",
   "bId": "753dcbff-f1a6-4fb1-97bf-2f76e08df8b9"
  },
  {
   "a": "Christine Dugan",
   "b": "Ed Gieske",
   "team": "Bounce Malvern Blue",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -3.3,
   "avgExpected": -2,
   "aId": "213bd4a2-a13d-4540-b93e-69e1e9116ff8",
   "bId": "314486b1-6723-4b33-9dba-fa5756065707"
  },
  {
   "a": "Eric Luque",
   "b": "Aimee Castellano",
   "team": "Flemington",
   "n": 10,
   "w": 5,
   "l": 5,
   "synergy": -0.6,
   "avgActual": 2.7,
   "avgExpected": 3.5,
   "aId": "b3c28078-ab31-4002-9e09-5fa3f627d8c1",
   "bId": "e76985fb-efd1-4180-a340-e4f36abbc8b4"
  },
  {
   "a": "Cindi Goldstein",
   "b": "Sharon Streit",
   "team": "Home Court",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -4.2,
   "avgExpected": -2.9,
   "aId": "900813f8-0026-4040-b11e-7222b87545db",
   "bId": "9f9e5b25-d385-4c12-adb3-233c612619c4"
  },
  {
   "a": "Sharon Streit",
   "b": "Robert Huntley",
   "team": "Home Court",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -0.6,
   "avgActual": -2.6,
   "avgExpected": -1.7,
   "aId": "9f9e5b25-d385-4c12-adb3-233c612619c4",
   "bId": "b5dec967-9e3a-49b4-b136-597711d099cc"
  },
  {
   "a": "Cindi Goldstein",
   "b": "Kimberly Schwartz",
   "team": "Home Court",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.6,
   "avgActual": -6,
   "avgExpected": -4.9,
   "aId": "900813f8-0026-4040-b11e-7222b87545db",
   "bId": "bb235d73-c023-4543-82b0-37abbf747f7d"
  },
  {
   "a": "Bruce Bilow",
   "b": "Janet Bellaran",
   "team": "The Atlantic Club",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -2.2,
   "avgExpected": -1.1,
   "aId": "1607c79a-6ca1-4214-a557-5ae0617ac8a1",
   "bId": "78d7b1d3-6b6c-4dde-a94f-5d4056b33ee7"
  },
  {
   "a": "Brad Daddis",
   "b": "Stacey Frank",
   "team": "Players Courtyard",
   "n": 10,
   "w": 8,
   "l": 2,
   "synergy": -0.6,
   "avgActual": 3.3,
   "avgExpected": 4.1,
   "aId": "3b22e073-2c4b-4245-a142-29441ec509a3",
   "bId": "768c88bd-683d-4204-8124-a589c8028b6e"
  },
  {
   "a": "Jill Scully",
   "b": "Derek Le",
   "team": "Bounce Malvern Black",
   "n": 9,
   "w": 7,
   "l": 2,
   "synergy": -0.6,
   "avgActual": 3,
   "avgExpected": 3.8,
   "aId": "754a47b8-0711-4929-928f-9bafe8f9dbc0",
   "bId": "8cf7b40c-ed2c-4c8b-83bd-b9f2d486c690"
  },
  {
   "a": "Jill Scully",
   "b": "Brian Aguilar",
   "team": "Bounce Malvern Black",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.6,
   "avgActual": 2,
   "avgExpected": 3.3,
   "aId": "754a47b8-0711-4929-928f-9bafe8f9dbc0",
   "bId": "e2678d1f-eb49-4c8c-9e0a-36dc9dca5d47"
  },
  {
   "a": "Eric Markowitz",
   "b": "Valerie Interrante",
   "team": "Pickle Place",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -1,
   "avgExpected": 0,
   "aId": "5a16df6a-43c6-40a7-bfe7-52e5e2ad1948",
   "bId": "d2076d9d-aa9e-4904-b971-8da1be95013f"
  },
  {
   "a": "Stephen Hanak",
   "b": "Valerie Interrante",
   "team": "Pickle Place",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -1.3,
   "avgExpected": 0,
   "aId": "8f20e88a-a2cf-4e7e-b024-62f23423cf70",
   "bId": "d2076d9d-aa9e-4904-b971-8da1be95013f"
  },
  {
   "a": "Valerie Interrante",
   "b": "Janet Garrity",
   "team": "Pickle Place",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.6,
   "avgActual": -1.7,
   "avgExpected": -0.2,
   "aId": "d2076d9d-aa9e-4904-b971-8da1be95013f",
   "bId": "e687e44a-22a6-4f8e-a3ac-b328fae537c3"
  },
  {
   "a": "Chanda Mccoy",
   "b": "Kristen Soucie",
   "team": "Flemington",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.6,
   "avgActual": 2.3,
   "avgExpected": 3.8,
   "aId": "30cb78cb-f962-40f9-bd02-78d336920431",
   "bId": "4745eae2-7562-424a-92de-efcb84034406"
  },
  {
   "a": "Carly Pfeffer",
   "b": "Andrea Dellechiaie",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -0.3,
   "avgExpected": 1.2,
   "aId": "387e74d4-66ee-4a52-a4ac-aae3dbe1d21b",
   "bId": "84e4d40d-3b98-4822-b073-e9dc71c0d4d7"
  },
  {
   "a": "Andrea Smith",
   "b": "Surbhi Sabharwal",
   "team": "Home Court",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -1.3,
   "avgExpected": 0,
   "aId": "1318bc01-f23f-47da-94cb-ac71b8f3e694",
   "bId": "6ff2d1f1-1ffd-4140-820d-b2333c370dcd"
  },
  {
   "a": "David Osborne",
   "b": "Aimee Castellano",
   "team": "Flemington",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": -0.7,
   "avgActual": 0.9,
   "avgExpected": 2,
   "aId": "418e7ba5-3e06-40ec-9b83-19d3bf10c9cb",
   "bId": "e76985fb-efd1-4180-a340-e4f36abbc8b4"
  },
  {
   "a": "Art Muth",
   "b": "Robert Grath",
   "team": "Flemington",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.7,
   "avgActual": 0.6,
   "avgExpected": 1.8,
   "aId": "6bfc3a49-53cb-4c03-b8cb-94552158ccbe",
   "bId": "84a2c937-4d39-4cdb-ac30-cc34bf67eae8"
  },
  {
   "a": "Jim Darcangelo",
   "b": "Vicki Main",
   "team": "Bounce Malvern Black",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.7,
   "avgActual": 1.3,
   "avgExpected": 2.7,
   "aId": "0530512b-466d-4ff7-9e89-7961b4a63110",
   "bId": "89bdcff6-2fba-4bde-b831-872bf9ce7843"
  },
  {
   "a": "Marc Harden",
   "b": "Susan Debbs",
   "team": "Players Courtyard",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.7,
   "avgActual": 5.3,
   "avgExpected": 6.7,
   "aId": "55194d2f-f537-4e19-b901-86c559f25ef2",
   "bId": "753dcbff-f1a6-4fb1-97bf-2f76e08df8b9"
  },
  {
   "a": "Brad Daddis",
   "b": "Kate Siedell",
   "team": "Players Courtyard",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.7,
   "avgActual": 1.8,
   "avgExpected": 3,
   "aId": "3b22e073-2c4b-4245-a142-29441ec509a3",
   "bId": "8decf039-f1e5-4182-b3cf-6756789ae87a"
  },
  {
   "a": "Roger Graterol",
   "b": "Jeff Lorman",
   "team": "Players Courtyard",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.7,
   "avgActual": 2,
   "avgExpected": 3.2,
   "aId": "23262a95-4498-4ca1-87a9-713c02337168",
   "bId": "75789bbc-0dde-460e-b905-7bd1189c6a90"
  },
  {
   "a": "Christine Dugan",
   "b": "Kathy BernéT",
   "team": "Bounce Malvern Blue",
   "n": 13,
   "w": 1,
   "l": 12,
   "synergy": -0.7,
   "avgActual": -4.8,
   "avgExpected": -3.9,
   "aId": "213bd4a2-a13d-4540-b93e-69e1e9116ff8",
   "bId": "220a5a2a-322c-4799-85a9-1f21b37b6cd4"
  },
  {
   "a": "Tanya Kenney",
   "b": "Alice Napolitano",
   "team": "The Atlantic Club",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": -0.7,
   "avgActual": 0.9,
   "avgExpected": 2,
   "aId": "9136414d-016a-41e3-be48-735a5ef794da",
   "bId": "d56483b8-a5b8-4c1f-8437-39fcf90a5030"
  },
  {
   "a": "Michael Vollmer",
   "b": "Judy Liu",
   "team": "Pickle House",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -9,
   "avgExpected": -7.4,
   "aId": "148387a8-f20a-44df-981d-0d9d2e7bf443",
   "bId": "499cf876-38a5-4db1-84b6-50fd76f1c502"
  },
  {
   "a": "Jhon Cifuentes",
   "b": "Kimberly Schwartz",
   "team": "Home Court",
   "n": 9,
   "w": 1,
   "l": 8,
   "synergy": -0.7,
   "avgActual": -5.8,
   "avgExpected": -4.8,
   "aId": "91f844b2-dd13-45a0-b66d-9b7ea751037a",
   "bId": "bb235d73-c023-4543-82b0-37abbf747f7d"
  },
  {
   "a": "Marr Flores",
   "b": "Charlie Johnston",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.7,
   "avgActual": -0.5,
   "avgExpected": 1,
   "aId": "1009522f-1f54-4cf1-a0a0-e24ad64f4a66",
   "bId": "1bad49ab-f2b8-439b-9e4b-3ff3cb8ca325"
  },
  {
   "a": "Jonathan Goldner",
   "b": "Janet Garrity",
   "team": "Pickle Place",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -0.7,
   "avgActual": 0.3,
   "avgExpected": 1.5,
   "aId": "5142be9e-adb4-4f40-8632-1f6daa6d824b",
   "bId": "e687e44a-22a6-4f8e-a3ac-b328fae537c3"
  },
  {
   "a": "Surbhi Sabharwal",
   "b": "Kajal Sinkar",
   "team": "Home Court",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -0.7,
   "avgActual": 0.1,
   "avgExpected": 1.2,
   "aId": "6ff2d1f1-1ffd-4140-820d-b2333c370dcd",
   "bId": "9d7f6585-d5f4-44fa-a4f9-24737a072f72"
  },
  {
   "a": "Michael Finkelstein",
   "b": "Brian Aguilar",
   "team": "Bounce Malvern Black",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.7,
   "avgActual": 1.3,
   "avgExpected": 2.9,
   "aId": "861c3f68-2c96-4a96-a75e-645020f73a5c",
   "bId": "e2678d1f-eb49-4c8c-9e0a-36dc9dca5d47"
  },
  {
   "a": "Z Zhang",
   "b": "Bruce Aronow",
   "team": "Pickle Place",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -0.2,
   "avgExpected": 1.2,
   "aId": "95982984-9054-491c-a5a5-b5592c5f02a4",
   "bId": "c9457ed9-79fb-40ef-b26a-566d206714d4"
  },
  {
   "a": "Art Muth",
   "b": "Amy Johnson",
   "team": "Flemington",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.8,
   "avgActual": -2,
   "avgExpected": -0.6,
   "aId": "6bfc3a49-53cb-4c03-b8cb-94552158ccbe",
   "bId": "74e493de-dca7-4bf2-b9ac-630484282502"
  },
  {
   "a": "Scott Rubin",
   "b": "Christine Papa",
   "team": "Flemington",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.8,
   "avgActual": -1.4,
   "avgExpected": 0,
   "aId": "c12175df-b959-4efe-95e7-e5298b783da8",
   "bId": "d156a552-7fa9-488e-9bfa-745feb859950"
  },
  {
   "a": "Keith Goldberg",
   "b": "Derek Le",
   "team": "Bounce Malvern Black",
   "n": 8,
   "w": 7,
   "l": 1,
   "synergy": -0.8,
   "avgActual": 4.3,
   "avgExpected": 5.5,
   "aId": "37a0fa2c-df0b-4d92-900b-a9f20f441ad8",
   "bId": "8cf7b40c-ed2c-4c8b-83bd-b9f2d486c690"
  },
  {
   "a": "Jennifer Burke",
   "b": "Amanda Quinn",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -2.7,
   "avgExpected": -0.7,
   "aId": "18bcc459-8067-4650-ad73-3183fae3ea1f",
   "bId": "f1248cc3-96c3-4671-9b08-533d22eb710f"
  },
  {
   "a": "Eva Danieli",
   "b": "Joe Palumbo",
   "team": "The Atlantic Club",
   "n": 19,
   "w": 9,
   "l": 10,
   "synergy": -0.8,
   "avgActual": -1.1,
   "avgExpected": -0.1,
   "aId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae",
   "bId": "b39664c3-1a6e-4493-968f-6e7f7939f694"
  },
  {
   "a": "Guy Ohn",
   "b": "Don Godinez",
   "team": "Monroe",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.8,
   "avgActual": 1.4,
   "avgExpected": 2.9,
   "aId": "f394b637-236e-4fee-b26f-374c90c3dd1e",
   "bId": "f706ae79-d09c-4ad4-ac19-837deb84d36d"
  },
  {
   "a": "Bruce Bilow",
   "b": "Hal Greenspan",
   "team": "The Atlantic Club",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -0.8,
   "avgActual": -5.2,
   "avgExpected": -3.8,
   "aId": "1607c79a-6ca1-4214-a557-5ae0617ac8a1",
   "bId": "36b33227-285b-4959-a3b8-21012748391e"
  },
  {
   "a": "Hal Greenspan",
   "b": "Joe Palumbo",
   "team": "The Atlantic Club",
   "n": 12,
   "w": 2,
   "l": 10,
   "synergy": -0.8,
   "avgActual": -4.3,
   "avgExpected": -3.3,
   "aId": "36b33227-285b-4959-a3b8-21012748391e",
   "bId": "b39664c3-1a6e-4493-968f-6e7f7939f694"
  },
  {
   "a": "Jodi Evans",
   "b": "Patrik Grubb",
   "team": "Bounce Malvern Blue",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -8,
   "avgExpected": -6.2,
   "aId": "0470dc02-2e17-4eeb-b282-4767b17e733e",
   "bId": "6bc51379-c588-4388-88a5-f9fc4d5beee1"
  },
  {
   "a": "Charlie Johnston",
   "b": "Toby Mcmahan",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.8,
   "avgActual": -4.2,
   "avgExpected": -2.6,
   "aId": "1bad49ab-f2b8-439b-9e4b-3ff3cb8ca325",
   "bId": "795d3c75-0080-4a6c-9e78-fcafcd86f1d2"
  },
  {
   "a": "Brian Rowan",
   "b": "Jeff Lorman",
   "team": "Players Courtyard",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.8,
   "avgActual": -0.7,
   "avgExpected": 0.8,
   "aId": "136b6979-e0f4-4af2-9f5e-949b8d4bf423",
   "bId": "75789bbc-0dde-460e-b905-7bd1189c6a90"
  },
  {
   "a": "Liz Cuozzo",
   "b": "Darren Saks",
   "team": "The Atlantic Club",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -0.2,
   "avgExpected": 1.3,
   "aId": "2b2d474d-281c-42d7-854b-6bfe32f20563",
   "bId": "9bf7b8ab-4dfa-442b-be12-77580a5ea1dc"
  },
  {
   "a": "Scott Friedman",
   "b": "Don Godinez",
   "team": "Monroe",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.8,
   "avgActual": -0.2,
   "avgExpected": 1.4,
   "aId": "d40fde69-77a2-4998-a631-fba159129d2f",
   "bId": "f706ae79-d09c-4ad4-ac19-837deb84d36d"
  },
  {
   "a": "Roger Graterol",
   "b": "James Shaw",
   "team": "Players Courtyard",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.8,
   "avgActual": 0,
   "avgExpected": 1.8,
   "aId": "23262a95-4498-4ca1-87a9-713c02337168",
   "bId": "439e30a7-6097-4e20-8a7b-25c57dd5b5d0"
  },
  {
   "a": "Nanjun Qian",
   "b": "Wei Zhu",
   "team": "Pickle House",
   "n": 12,
   "w": 0,
   "l": 12,
   "synergy": -0.9,
   "avgActual": -7.4,
   "avgExpected": -6.3,
   "aId": "4d2224a0-7b03-4044-bf22-84010f802e07",
   "bId": "937eb27e-1168-4697-ad5c-dd5a6cf3872d"
  },
  {
   "a": "Carolyn Dardani-Horensky",
   "b": "Lucy Li",
   "team": "Pickle House",
   "n": 8,
   "w": 0,
   "l": 8,
   "synergy": -0.9,
   "avgActual": -7.2,
   "avgExpected": -5.9,
   "aId": "6acb77b2-e82c-4de7-b333-89fbe85c9997",
   "bId": "d22f8b69-76a6-41e0-8b04-c5dae68d9f69"
  },
  {
   "a": "Roger Graterol",
   "b": "Brad Daddis",
   "team": "Players Courtyard",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.9,
   "avgActual": 1.5,
   "avgExpected": 3.3,
   "aId": "23262a95-4498-4ca1-87a9-713c02337168",
   "bId": "3b22e073-2c4b-4245-a142-29441ec509a3"
  },
  {
   "a": "Eva Danieli",
   "b": "Tanya Kenney",
   "team": "The Atlantic Club",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -2,
   "avgExpected": -0.4,
   "aId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae",
   "bId": "9136414d-016a-41e3-be48-735a5ef794da"
  },
  {
   "a": "Jennifer Burke",
   "b": "Charlie Johnston",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.9,
   "avgActual": 0.5,
   "avgExpected": 2.3,
   "aId": "18bcc459-8067-4650-ad73-3183fae3ea1f",
   "bId": "1bad49ab-f2b8-439b-9e4b-3ff3cb8ca325"
  },
  {
   "a": "Aaron Pine",
   "b": "Meryl Nadler",
   "team": "Monroe",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -6.3,
   "avgExpected": -4.3,
   "aId": "4aea9e80-552f-49b8-9118-c03af246e089",
   "bId": "90987b97-d181-4c15-9c7c-e0bebff4e9b0"
  },
  {
   "a": "Stephen Hanak",
   "b": "Jane Meng",
   "team": "Pickle Place",
   "n": 12,
   "w": 5,
   "l": 7,
   "synergy": -0.9,
   "avgActual": -1.3,
   "avgExpected": -0.1,
   "aId": "8f20e88a-a2cf-4e7e-b024-62f23423cf70",
   "bId": "c365e1dd-21cf-4f38-a802-1aaaf6d0914b"
  },
  {
   "a": "Yi Gu",
   "b": "Maureen Conery",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.9,
   "avgActual": -1,
   "avgExpected": 1.2,
   "aId": "0640ecce-0b14-4eac-9cbd-be86592d6102",
   "bId": "89dd8b9e-14f8-40ac-8127-3bfac0ac7888"
  },
  {
   "a": "Jeff Lorman",
   "b": "Bennett Shanker",
   "team": "Players Courtyard",
   "n": 9,
   "w": 6,
   "l": 3,
   "synergy": -0.9,
   "avgActual": 0.8,
   "avgExpected": 2.1,
   "aId": "75789bbc-0dde-460e-b905-7bd1189c6a90",
   "bId": "a86dc96c-b346-460c-a94c-df0551d5027a"
  },
  {
   "a": "Stacey Frank",
   "b": "Elyse Diamond",
   "team": "Players Courtyard",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.9,
   "avgActual": 1,
   "avgExpected": 2.8,
   "aId": "768c88bd-683d-4204-8124-a589c8028b6e",
   "bId": "a0c9637b-5b23-4797-a46a-d2df7bb0fae9"
  },
  {
   "a": "Marc Harden",
   "b": "Jeff Lorman",
   "team": "Players Courtyard",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.9,
   "avgActual": 1.3,
   "avgExpected": 3.2,
   "aId": "55194d2f-f537-4e19-b901-86c559f25ef2",
   "bId": "75789bbc-0dde-460e-b905-7bd1189c6a90"
  },
  {
   "a": "Jodi Evans",
   "b": "Jamila Sefiane",
   "team": "Bounce Malvern Blue",
   "n": 8,
   "w": 1,
   "l": 7,
   "synergy": -0.9,
   "avgActual": -4.4,
   "avgExpected": -3,
   "aId": "0470dc02-2e17-4eeb-b282-4767b17e733e",
   "bId": "c0851114-0611-4b02-9589-fd249179eabc"
  },
  {
   "a": "Nancy Blank",
   "b": "Jamila Sefiane",
   "team": "Bounce Malvern Blue",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -3.7,
   "avgExpected": -1.6,
   "aId": "03fc28a7-e11b-49f8-84e3-0b2a7fd0a9a7",
   "bId": "c0851114-0611-4b02-9589-fd249179eabc"
  },
  {
   "a": "Barbara Hess",
   "b": "Rosalyn Goldsmith",
   "team": "Monroe",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.9,
   "avgActual": 0,
   "avgExpected": 1.6,
   "aId": "21baa2cb-e882-442e-a5e0-a6d88126c9c3",
   "bId": "545c12c3-3098-47ca-b35e-429f37f481f5"
  },
  {
   "a": "Sergey Sprikut",
   "b": "Don Godinez",
   "team": "Monroe",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -0.8,
   "avgExpected": 0.7,
   "aId": "28b4b9e6-0b25-473c-8386-2876bf60efab",
   "bId": "f706ae79-d09c-4ad4-ac19-837deb84d36d"
  },
  {
   "a": "Michael Finkelstein",
   "b": "Katherine Maruyama",
   "team": "Bounce Malvern Black",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.9,
   "avgActual": 1.5,
   "avgExpected": 3,
   "aId": "861c3f68-2c96-4a96-a75e-645020f73a5c",
   "bId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a"
  },
  {
   "a": "Lance Brown",
   "b": "Carolyn Dardani-Horensky",
   "team": "Pickle House",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.9,
   "avgActual": -5.8,
   "avgExpected": -4.2,
   "aId": "5d13288d-69fe-4d0b-bf69-51c1d24e3409",
   "bId": "6acb77b2-e82c-4de7-b333-89fbe85c9997"
  },
  {
   "a": "Andrea Smith",
   "b": "George Mandl",
   "team": "Home Court",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -4.7,
   "avgExpected": -2.6,
   "aId": "1318bc01-f23f-47da-94cb-ac71b8f3e694",
   "bId": "a0019103-8887-4a15-bbe0-d1c35cdd7b0d"
  },
  {
   "a": "Jodi Evans",
   "b": "Jeremy Workman",
   "team": "Bounce Malvern Blue",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.9,
   "avgActual": -4.2,
   "avgExpected": -2.6,
   "aId": "0470dc02-2e17-4eeb-b282-4767b17e733e",
   "bId": "5a15e437-7769-4d60-bd0c-b6c48176289c"
  },
  {
   "a": "Oliveira Karen",
   "b": "Ricardo Lisojo",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -4.5,
   "avgExpected": -2.7,
   "aId": "80b535f7-a6f6-4905-90ae-69c8695f99be",
   "bId": "dc6e9a73-87dd-478f-bcd2-a0bd39b91c86"
  },
  {
   "a": "Randy Samuels",
   "b": "Michael Vincent",
   "team": "Home Court",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -6.2,
   "avgExpected": -4.4,
   "aId": "294cb11e-477b-435c-a293-b2527bfb4fc3",
   "bId": "7f44421c-476c-4857-99ed-3376b32289ca"
  },
  {
   "a": "Margaret Weidlich",
   "b": "Kajal Sinkar",
   "team": "Home Court",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.9,
   "avgActual": -4.2,
   "avgExpected": -2.4,
   "aId": "7021e97f-1e5e-4adb-ac80-1a9c919caba6",
   "bId": "9d7f6585-d5f4-44fa-a4f9-24737a072f72"
  },
  {
   "a": "Vicki Main",
   "b": "Derek Le",
   "team": "Bounce Malvern Black",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1,
   "avgActual": -1,
   "avgExpected": 1.3,
   "aId": "89bdcff6-2fba-4bde-b831-872bf9ce7843",
   "bId": "8cf7b40c-ed2c-4c8b-83bd-b9f2d486c690"
  },
  {
   "a": "Michael Dombrowiecki",
   "b": "Natasha De Carvalho",
   "team": "The Atlantic Club",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -1,
   "avgActual": -0.4,
   "avgExpected": 1.2,
   "aId": "3ac34ef1-17a5-4ab6-8d17-be4bd5a0a040",
   "bId": "462f3a15-22ed-4fa3-b698-78678a5d6966"
  },
  {
   "a": "Lydia Fiore",
   "b": "Amanda Quinn",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1,
   "avgActual": -6.3,
   "avgExpected": -4,
   "aId": "602fc2fd-c2f6-4909-9951-c829b5831548",
   "bId": "f1248cc3-96c3-4671-9b08-533d22eb710f"
  },
  {
   "a": "Jingwei Wu",
   "b": "Vicki Main",
   "team": "Bounce Malvern Black",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1,
   "avgActual": 1.7,
   "avgExpected": 3.9,
   "aId": "58e052c4-6ab5-46a7-8e6c-6c7a465262e5",
   "bId": "89bdcff6-2fba-4bde-b831-872bf9ce7843"
  },
  {
   "a": "Hayley Yandoli",
   "b": "Meryl Nadler",
   "team": "Monroe",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -1,
   "avgActual": -4.5,
   "avgExpected": -2.8,
   "aId": "1fc2dd51-135b-46d6-91ef-9291b573e78a",
   "bId": "90987b97-d181-4c15-9c7c-e0bebff4e9b0"
  },
  {
   "a": "David Marchese",
   "b": "Michael Frost",
   "team": "Bounce Malvern Blue",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1,
   "avgActual": -5.3,
   "avgExpected": -3,
   "aId": "aa802904-9a39-4b0e-ad2b-d1a1ea2fcc5b",
   "bId": "f646f813-82a8-495b-8a4f-fe0f2b0bc19a"
  },
  {
   "a": "Nancy Blank",
   "b": "Patrik Grubb",
   "team": "Bounce Malvern Blue",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1,
   "avgActual": -6.3,
   "avgExpected": -3.9,
   "aId": "03fc28a7-e11b-49f8-84e3-0b2a7fd0a9a7",
   "bId": "6bc51379-c588-4388-88a5-f9fc4d5beee1"
  },
  {
   "a": "Jonathan Brand",
   "b": "Stacey Frank",
   "team": "Players Courtyard",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1,
   "avgActual": 0.5,
   "avgExpected": 2.4,
   "aId": "3d1b28fd-25f4-4145-bccd-6b25ab627ffe",
   "bId": "768c88bd-683d-4204-8124-a589c8028b6e"
  },
  {
   "a": "Jitendra Arora",
   "b": "Susan Zhang",
   "team": "Pickle House",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -1.1,
   "avgActual": -4.6,
   "avgExpected": -2.6,
   "aId": "a117b66b-f319-4fc0-8ee2-feb3f17767d0",
   "bId": "f3be5948-f902-49ef-886c-190ad0cca61f"
  },
  {
   "a": "Sergey Sprikut",
   "b": "Pam Friedman",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.1,
   "avgActual": -3.3,
   "avgExpected": -0.7,
   "aId": "28b4b9e6-0b25-473c-8386-2876bf60efab",
   "bId": "94d51b2d-359c-450c-b1c8-728944462b01"
  },
  {
   "a": "Barbara Hess",
   "b": "Glenn Hillman",
   "team": "Monroe",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -1.2,
   "avgExpected": 1,
   "aId": "21baa2cb-e882-442e-a5e0-a6d88126c9c3",
   "bId": "316cd007-2c93-473d-a8d8-61a5fbbfa002"
  },
  {
   "a": "Robert Block",
   "b": "Valerie Interrante",
   "team": "Pickle Place",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.1,
   "avgActual": -0.3,
   "avgExpected": 2.3,
   "aId": "23d1d322-f31d-46b3-bf95-d86faab58b06",
   "bId": "d2076d9d-aa9e-4904-b971-8da1be95013f"
  },
  {
   "a": "Denise Richmond",
   "b": "Aimee Castellano",
   "team": "Flemington",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -1.1,
   "avgActual": -2.2,
   "avgExpected": -0.3,
   "aId": "422cd941-43db-4123-a07e-3316583f51ee",
   "bId": "e76985fb-efd1-4180-a340-e4f36abbc8b4"
  },
  {
   "a": "Mark Fappiano",
   "b": "Dennis Yap",
   "team": "Home Court",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.1,
   "avgActual": -4.7,
   "avgExpected": -2,
   "aId": "14289b5c-46c9-4728-b43d-9f01eeb74b8d",
   "bId": "45ea05c6-ef48-4b0a-9f71-a640be038d08"
  },
  {
   "a": "Alice Napolitano",
   "b": "Andrew Hyman",
   "team": "The Atlantic Club",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -0.6,
   "avgExpected": 1.4,
   "aId": "d56483b8-a5b8-4c1f-8437-39fcf90a5030",
   "bId": "dbda3e07-6332-4467-bdf0-be18b2686573"
  },
  {
   "a": "Janet Bellaran",
   "b": "Eva Danieli",
   "team": "The Atlantic Club",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -1.1,
   "avgActual": -2.1,
   "avgExpected": -0.3,
   "aId": "78d7b1d3-6b6c-4dde-a94f-5d4056b33ee7",
   "bId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae"
  },
  {
   "a": "Bruce Bilow",
   "b": "Andrew Hyman",
   "team": "The Atlantic Club",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -5,
   "avgExpected": -2.3,
   "aId": "1607c79a-6ca1-4214-a557-5ae0617ac8a1",
   "bId": "dbda3e07-6332-4467-bdf0-be18b2686573"
  },
  {
   "a": "Kajal Sinkar",
   "b": "Robert Huntley",
   "team": "Home Court",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.1,
   "avgActual": -3.3,
   "avgExpected": -0.8,
   "aId": "9d7f6585-d5f4-44fa-a4f9-24737a072f72",
   "bId": "b5dec967-9e3a-49b4-b136-597711d099cc"
  },
  {
   "a": "Brian Rowan",
   "b": "Marc Harden",
   "team": "Players Courtyard",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": -1.1,
   "avgActual": 6,
   "avgExpected": 8.2,
   "aId": "136b6979-e0f4-4af2-9f5e-949b8d4bf423",
   "bId": "55194d2f-f537-4e19-b901-86c559f25ef2"
  },
  {
   "a": "Clifford Luster",
   "b": "George Mandl",
   "team": "Home Court",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -1.1,
   "avgActual": -3.6,
   "avgExpected": -1.6,
   "aId": "3f47746a-2105-493a-941a-b15c4b02a520",
   "bId": "a0019103-8887-4a15-bbe0-d1c35cdd7b0d"
  },
  {
   "a": "Bruce Aronow",
   "b": "David Eisen",
   "team": "Pickle Place",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -9.3,
   "avgExpected": -6.8,
   "aId": "c9457ed9-79fb-40ef-b26a-566d206714d4",
   "bId": "d4b4ed3c-0c4b-4f8b-9b98-a5d448bfb361"
  },
  {
   "a": "Nanjun Qian",
   "b": "Henry Wang",
   "team": "Pickle House",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -10,
   "avgExpected": -7.3,
   "aId": "4d2224a0-7b03-4044-bf22-84010f802e07",
   "bId": "d9e47350-1ce4-41d5-81d7-d9fbb78efd98"
  },
  {
   "a": "Kristen Soucie",
   "b": "Sue Johnson",
   "team": "Flemington",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1.2,
   "avgActual": -1.3,
   "avgExpected": 1.5,
   "aId": "4745eae2-7562-424a-92de-efcb84034406",
   "bId": "c6046610-1dba-4bad-bc89-57e5baa0983f"
  },
  {
   "a": "Jonathan Brand",
   "b": "Kate Siedell",
   "team": "Players Courtyard",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1.2,
   "avgActual": 4.3,
   "avgExpected": 7.1,
   "aId": "3d1b28fd-25f4-4145-bccd-6b25ab627ffe",
   "bId": "8decf039-f1e5-4182-b3cf-6756789ae87a"
  },
  {
   "a": "Eliezer Mintz",
   "b": "Meryl Nadler",
   "team": "Monroe",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -1.2,
   "avgActual": -2,
   "avgExpected": 0.1,
   "aId": "832fb271-fb5e-43aa-b442-95c03fb78342",
   "bId": "90987b97-d181-4c15-9c7c-e0bebff4e9b0"
  },
  {
   "a": "Sharon Streit",
   "b": "Kimberly Schwartz",
   "team": "Home Court",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.2,
   "avgActual": -5,
   "avgExpected": -2.3,
   "aId": "9f9e5b25-d385-4c12-adb3-233c612619c4",
   "bId": "bb235d73-c023-4543-82b0-37abbf747f7d"
  },
  {
   "a": "Robert Huntley",
   "b": "Kimberly Schwartz",
   "team": "Home Court",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.2,
   "avgActual": -7.3,
   "avgExpected": -4.5,
   "aId": "b5dec967-9e3a-49b4-b136-597711d099cc",
   "bId": "bb235d73-c023-4543-82b0-37abbf747f7d"
  },
  {
   "a": "Natasha De Carvalho",
   "b": "Andrew Hyman",
   "team": "The Atlantic Club",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.2,
   "avgActual": -2,
   "avgExpected": 0.9,
   "aId": "462f3a15-22ed-4fa3-b698-78678a5d6966",
   "bId": "dbda3e07-6332-4467-bdf0-be18b2686573"
  },
  {
   "a": "Hal Golden",
   "b": "Patrik Grubb",
   "team": "Bounce Malvern Blue",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -1.3,
   "avgActual": -6.3,
   "avgExpected": -4.1,
   "aId": "476c99a2-15e5-4e99-8471-7c2b6394faa3",
   "bId": "6bc51379-c588-4388-88a5-f9fc4d5beee1"
  },
  {
   "a": "Kathy BernéT",
   "b": "Tim Phelan",
   "team": "Bounce Malvern Blue",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.3,
   "avgActual": -10.5,
   "avgExpected": -7.8,
   "aId": "220a5a2a-322c-4799-85a9-1f21b37b6cd4",
   "bId": "f5e62236-e4e5-4b34-865e-c92bf027d21c"
  },
  {
   "a": "Bob Drinane",
   "b": "Art Muth",
   "team": "Flemington",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.3,
   "avgActual": -2.3,
   "avgExpected": 0.6,
   "aId": "1611fcd8-0e53-4b13-b061-d588d0bde0fd",
   "bId": "6bfc3a49-53cb-4c03-b8cb-94552158ccbe"
  },
  {
   "a": "Michael Swell",
   "b": "Joe Palumbo",
   "team": "The Atlantic Club",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.3,
   "avgActual": -4.3,
   "avgExpected": -1.3,
   "aId": "5436acd1-542a-4ca5-a652-c0addcf23ea2",
   "bId": "b39664c3-1a6e-4493-968f-6e7f7939f694"
  },
  {
   "a": "Natasha De Carvalho",
   "b": "Janet Bellaran",
   "team": "The Atlantic Club",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -1.3,
   "avgActual": 0.8,
   "avgExpected": 3.2,
   "aId": "462f3a15-22ed-4fa3-b698-78678a5d6966",
   "bId": "78d7b1d3-6b6c-4dde-a94f-5d4056b33ee7"
  },
  {
   "a": "Sandro Stefanelli",
   "b": "Kathy BernéT",
   "team": "Bounce Malvern Blue",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -1.3,
   "avgActual": -4.8,
   "avgExpected": -2.5,
   "aId": "1872d8d8-f958-4747-af3a-443d5f88a1c3",
   "bId": "220a5a2a-322c-4799-85a9-1f21b37b6cd4"
  },
  {
   "a": "Barbara Hess",
   "b": "Guy Ohn",
   "team": "Monroe",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": -1.3,
   "avgActual": 2.6,
   "avgExpected": 4.7,
   "aId": "21baa2cb-e882-442e-a5e0-a6d88126c9c3",
   "bId": "f394b637-236e-4fee-b26f-374c90c3dd1e"
  },
  {
   "a": "Ed Gieske",
   "b": "David Marchese",
   "team": "Bounce Malvern Blue",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.3,
   "avgActual": -3,
   "avgExpected": 0,
   "aId": "314486b1-6723-4b33-9dba-fa5756065707",
   "bId": "aa802904-9a39-4b0e-ad2b-d1a1ea2fcc5b"
  },
  {
   "a": "Denise Richmond",
   "b": "Amy Johnson",
   "team": "Flemington",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.3,
   "avgActual": -5.2,
   "avgExpected": -2.5,
   "aId": "422cd941-43db-4123-a07e-3316583f51ee",
   "bId": "74e493de-dca7-4bf2-b9ac-630484282502"
  },
  {
   "a": "Scott Rubin",
   "b": "Tara Kramer",
   "team": "Flemington",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.3,
   "avgActual": -6.2,
   "avgExpected": -3.6,
   "aId": "c12175df-b959-4efe-95e7-e5298b783da8",
   "bId": "dae62b8e-5f8e-4721-8f41-3218518d1e30"
  },
  {
   "a": "Pam Boyd",
   "b": "James Shaw",
   "team": "Players Courtyard",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.3,
   "avgActual": -2.3,
   "avgExpected": 0.6,
   "aId": "04aefa29-20e3-41b7-a680-19d13f9d4289",
   "bId": "439e30a7-6097-4e20-8a7b-25c57dd5b5d0"
  },
  {
   "a": "Charlie Johnston",
   "b": "David Coleman",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.3,
   "avgActual": -2,
   "avgExpected": 1,
   "aId": "1bad49ab-f2b8-439b-9e4b-3ff3cb8ca325",
   "bId": "ec3ddbcf-c126-4225-901a-c3c3a9ac479b"
  },
  {
   "a": "Mark Fappiano",
   "b": "Michael Vincent",
   "team": "Home Court",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.4,
   "avgActual": -5.3,
   "avgExpected": -2.1,
   "aId": "14289b5c-46c9-4728-b43d-9f01eeb74b8d",
   "bId": "7f44421c-476c-4857-99ed-3376b32289ca"
  },
  {
   "a": "Marr Flores",
   "b": "Amanda Quinn",
   "team": "Pickleball Palace",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -1.4,
   "avgActual": -1,
   "avgExpected": 1.2,
   "aId": "1009522f-1f54-4cf1-a0a0-e24ad64f4a66",
   "bId": "f1248cc3-96c3-4671-9b08-533d22eb710f"
  },
  {
   "a": "Tom Zentmeyer",
   "b": "Bruce Aronow",
   "team": "Pickle Place",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.4,
   "avgActual": -3,
   "avgExpected": 0.2,
   "aId": "c16d16f0-3cc1-4c9d-8bfb-98615ffeaacd",
   "bId": "c9457ed9-79fb-40ef-b26a-566d206714d4"
  },
  {
   "a": "Jhon Cifuentes",
   "b": "Sarah Mcparland",
   "team": "Home Court",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.4,
   "avgActual": -4,
   "avgExpected": -0.7,
   "aId": "91f844b2-dd13-45a0-b66d-9b7ea751037a",
   "bId": "958e8cb9-1c97-4932-b495-29c28578a123"
  },
  {
   "a": "Jodi Evans",
   "b": "Brenden Dorley",
   "team": "Bounce Malvern Blue",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.4,
   "avgActual": -3,
   "avgExpected": -0.3,
   "aId": "0470dc02-2e17-4eeb-b282-4767b17e733e",
   "bId": "99c7c387-dea4-4b5b-a3b6-639ae2f806d2"
  },
  {
   "a": "Christine Dugan",
   "b": "Lucy Chow",
   "team": "Bounce Malvern Blue",
   "n": 8,
   "w": 0,
   "l": 8,
   "synergy": -1.5,
   "avgActual": -6.2,
   "avgExpected": -4,
   "aId": "213bd4a2-a13d-4540-b93e-69e1e9116ff8",
   "bId": "84f2d830-3dbf-4dfd-bd4b-f9eb3fb04091"
  },
  {
   "a": "Pam Boyd",
   "b": "Elyse Diamond",
   "team": "Players Courtyard",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.5,
   "avgActual": -1,
   "avgExpected": 2.5,
   "aId": "04aefa29-20e3-41b7-a680-19d13f9d4289",
   "bId": "a0c9637b-5b23-4797-a46a-d2df7bb0fae9"
  },
  {
   "a": "Rosalyn Goldsmith",
   "b": "Meryl Nadler",
   "team": "Monroe",
   "n": 9,
   "w": 1,
   "l": 8,
   "synergy": -1.5,
   "avgActual": -4.2,
   "avgExpected": -2.1,
   "aId": "545c12c3-3098-47ca-b35e-429f37f481f5",
   "bId": "90987b97-d181-4c15-9c7c-e0bebff4e9b0"
  },
  {
   "a": "Bob Drinane",
   "b": "Eric Luque",
   "team": "Flemington",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -1.5,
   "avgActual": -1,
   "avgExpected": 1.4,
   "aId": "1611fcd8-0e53-4b13-b061-d588d0bde0fd",
   "bId": "b3c28078-ab31-4002-9e09-5fa3f627d8c1"
  },
  {
   "a": "Todd Stein",
   "b": "Tara Kramer",
   "team": "Flemington",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.5,
   "avgActual": -5,
   "avgExpected": -1.4,
   "aId": "63fb8f7d-8f83-4bdf-89c7-fc3ca7139df5",
   "bId": "dae62b8e-5f8e-4721-8f41-3218518d1e30"
  },
  {
   "a": "Tom Zentmeyer",
   "b": "Janet Garrity",
   "team": "Pickle Place",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": -1.5,
   "avgActual": 1.9,
   "avgExpected": 4.3,
   "aId": "c16d16f0-3cc1-4c9d-8bfb-98615ffeaacd",
   "bId": "e687e44a-22a6-4f8e-a3ac-b328fae537c3"
  },
  {
   "a": "Janine Forrest",
   "b": "Marykristin Haskell",
   "team": "Pickle Place",
   "n": 9,
   "w": 5,
   "l": 4,
   "synergy": -1.5,
   "avgActual": -0.3,
   "avgExpected": 1.8,
   "aId": "dd30bbd2-24c2-431a-8b21-2de326c75ab3",
   "bId": "ecb01f29-37c9-4caa-a023-dc5d2591f375"
  },
  {
   "a": "Kim Hamilton",
   "b": "Kate Siedell",
   "team": "Players Courtyard",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -1.6,
   "avgActual": 2,
   "avgExpected": 5.2,
   "aId": "4d6a9dce-3c23-4d65-85f9-8b440c44a318",
   "bId": "8decf039-f1e5-4182-b3cf-6756789ae87a"
  },
  {
   "a": "Jane Meng",
   "b": "David Eisen",
   "team": "Pickle Place",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.6,
   "avgActual": -6.3,
   "avgExpected": -2.6,
   "aId": "c365e1dd-21cf-4f38-a802-1aaaf6d0914b",
   "bId": "d4b4ed3c-0c4b-4f8b-9b98-a5d448bfb361"
  },
  {
   "a": "Sinitra Siengsanaoh",
   "b": "John Chalerm",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.6,
   "avgActual": -1.7,
   "avgExpected": 1.4,
   "aId": "bd5e1a4c-a9d5-4683-a74e-90c0df2d84cd",
   "bId": "c94b7f57-f476-43db-8fc3-e23331d97b63"
  },
  {
   "a": "Karen Moliver",
   "b": "Stephanie Woomer",
   "team": "Bounce Malvern Black",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -1.7,
   "avgActual": -2,
   "avgExpected": 1.1,
   "aId": "6412a5fc-5f1f-4dcf-a1b9-c1838eeabec9",
   "bId": "e05f57f5-c898-404e-b86f-c2460cc23b06"
  },
  {
   "a": "Pam Boyd",
   "b": "Brad Daddis",
   "team": "Players Courtyard",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": -1.7,
   "avgActual": 1.1,
   "avgExpected": 3.7,
   "aId": "04aefa29-20e3-41b7-a680-19d13f9d4289",
   "bId": "3b22e073-2c4b-4245-a142-29441ec509a3"
  },
  {
   "a": "David Marchese",
   "b": "Tim Phelan",
   "team": "Bounce Malvern Blue",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.7,
   "avgActual": -9.7,
   "avgExpected": -5.8,
   "aId": "aa802904-9a39-4b0e-ad2b-d1a1ea2fcc5b",
   "bId": "f5e62236-e4e5-4b34-865e-c92bf027d21c"
  },
  {
   "a": "Jonathan Goldner",
   "b": "Z Zhang",
   "team": "Pickle Place",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.7,
   "avgActual": -2.7,
   "avgExpected": 1.2,
   "aId": "5142be9e-adb4-4f40-8632-1f6daa6d824b",
   "bId": "95982984-9054-491c-a5a5-b5592c5f02a4"
  },
  {
   "a": "George Mandl",
   "b": "Anita Bobba",
   "team": "Home Court",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.7,
   "avgActual": -9.7,
   "avgExpected": -5.7,
   "aId": "a0019103-8887-4a15-bbe0-d1c35cdd7b0d",
   "bId": "abc68487-3415-49a2-bdfb-dd56eb5af20d"
  },
  {
   "a": "John Burke",
   "b": "Louis Vessichelli",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.8,
   "avgActual": -5,
   "avgExpected": -0.9,
   "aId": "31e2f010-7d86-4706-a172-d0936f4421f0",
   "bId": "cb8c8404-c482-4fe5-bd01-35b348fccfd4"
  },
  {
   "a": "Bud Heller",
   "b": "Chris Heimerle",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.8,
   "avgActual": -3,
   "avgExpected": 1.3,
   "aId": "9282b1b2-6551-481c-b9b8-2a246a49a621",
   "bId": "fc870151-9569-4e09-883d-c81e9cfaf6d8"
  },
  {
   "a": "Eliezer Mintz",
   "b": "Don Godinez",
   "team": "Monroe",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.8,
   "avgActual": -4.3,
   "avgExpected": -0.2,
   "aId": "832fb271-fb5e-43aa-b442-95c03fb78342",
   "bId": "f706ae79-d09c-4ad4-ac19-837deb84d36d"
  },
  {
   "a": "Sarah Mcparland",
   "b": "Kajal Sinkar",
   "team": "Home Court",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.8,
   "avgActual": -2,
   "avgExpected": 1.7,
   "aId": "958e8cb9-1c97-4932-b495-29c28578a123",
   "bId": "9d7f6585-d5f4-44fa-a4f9-24737a072f72"
  },
  {
   "a": "Hayley Yandoli",
   "b": "Sergey Sprikut",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.8,
   "avgActual": -5,
   "avgExpected": -0.8,
   "aId": "1fc2dd51-135b-46d6-91ef-9291b573e78a",
   "bId": "28b4b9e6-0b25-473c-8386-2876bf60efab"
  },
  {
   "a": "Keith Goldberg",
   "b": "Brian Aguilar",
   "team": "Bounce Malvern Black",
   "n": 10,
   "w": 8,
   "l": 2,
   "synergy": -1.9,
   "avgActual": 3.6,
   "avgExpected": 6.2,
   "aId": "37a0fa2c-df0b-4d92-900b-a9f20f441ad8",
   "bId": "e2678d1f-eb49-4c8c-9e0a-36dc9dca5d47"
  },
  {
   "a": "Jill Lesnik",
   "b": "Chris Heimerle",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.9,
   "avgActual": -3.7,
   "avgExpected": 0.9,
   "aId": "340fe4f1-f3ed-4fb1-9ba3-74752ee1d864",
   "bId": "fc870151-9569-4e09-883d-c81e9cfaf6d8"
  },
  {
   "a": "Jennifer Wang",
   "b": "Katherine Maruyama",
   "team": "Bounce Malvern Black",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -1.9,
   "avgActual": 1.6,
   "avgExpected": 5.1,
   "aId": "59d2f8a4-3875-4cd2-8245-123b01ea9e22",
   "bId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a"
  },
  {
   "a": "Kristen Soucie",
   "b": "Robert Grath",
   "team": "Flemington",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -2,
   "avgActual": -3,
   "avgExpected": 1.1,
   "aId": "4745eae2-7562-424a-92de-efcb84034406",
   "bId": "84a2c937-4d39-4cdb-ac30-cc34bf67eae8"
  },
  {
   "a": "Susan Kapit",
   "b": "Meryl Nadler",
   "team": "Monroe",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -2,
   "avgActual": -5,
   "avgExpected": -1.3,
   "aId": "19a34ff6-50a2-4e30-972e-2cec78d4aec3",
   "bId": "90987b97-d181-4c15-9c7c-e0bebff4e9b0"
  },
  {
   "a": "Randy Samuels",
   "b": "Surbhi Sabharwal",
   "team": "Home Court",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -2,
   "avgActual": -5,
   "avgExpected": -1.5,
   "aId": "294cb11e-477b-435c-a293-b2527bfb4fc3",
   "bId": "6ff2d1f1-1ffd-4140-820d-b2333c370dcd"
  },
  {
   "a": "Kate Siedell",
   "b": "Vita Mulholland",
   "team": "Players Courtyard",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -2.1,
   "avgActual": -0.5,
   "avgExpected": 3.7,
   "aId": "8decf039-f1e5-4182-b3cf-6756789ae87a",
   "bId": "fe0555e5-2ec9-4dc2-a44b-4017d5afbb41"
  },
  {
   "a": "Nanjun Qian",
   "b": "Lance Brown",
   "team": "Pickle House",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -2.1,
   "avgActual": -7.5,
   "avgExpected": -3.2,
   "aId": "4d2224a0-7b03-4044-bf22-84010f802e07",
   "bId": "5d13288d-69fe-4d0b-bf69-51c1d24e3409"
  },
  {
   "a": "Karen Moliver",
   "b": "Jill Scully",
   "team": "Bounce Malvern Black",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -2.2,
   "avgActual": -3.2,
   "avgExpected": 0.7,
   "aId": "6412a5fc-5f1f-4dcf-a1b9-c1838eeabec9",
   "bId": "754a47b8-0711-4929-928f-9bafe8f9dbc0"
  },
  {
   "a": "Rosalyn Goldsmith",
   "b": "Scott Friedman",
   "team": "Monroe",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -2.2,
   "avgActual": -5.7,
   "avgExpected": -1.3,
   "aId": "545c12c3-3098-47ca-b35e-429f37f481f5",
   "bId": "d40fde69-77a2-4998-a631-fba159129d2f"
  },
  {
   "a": "Kathy BernéT",
   "b": "Hal Golden",
   "team": "Bounce Malvern Blue",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -2.2,
   "avgActual": -7.2,
   "avgExpected": -3.3,
   "aId": "220a5a2a-322c-4799-85a9-1f21b37b6cd4",
   "bId": "476c99a2-15e5-4e99-8471-7c2b6394faa3"
  },
  {
   "a": "Kim Hamilton",
   "b": "Elyse Diamond",
   "team": "Players Courtyard",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -2.4,
   "avgActual": -2.5,
   "avgExpected": 2.2,
   "aId": "4d6a9dce-3c23-4d65-85f9-8b440c44a318",
   "bId": "a0c9637b-5b23-4797-a46a-d2df7bb0fae9"
  },
  {
   "a": "Hal Golden",
   "b": "Tim Phelan",
   "team": "Bounce Malvern Blue",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.4,
   "avgActual": -9.7,
   "avgExpected": -4.2,
   "aId": "476c99a2-15e5-4e99-8471-7c2b6394faa3",
   "bId": "f5e62236-e4e5-4b34-865e-c92bf027d21c"
  },
  {
   "a": "Margaret Weidlich",
   "b": "Jhon Cifuentes",
   "team": "Home Court",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.7,
   "avgActual": -7.3,
   "avgExpected": -1,
   "aId": "7021e97f-1e5e-4adb-ac80-1a9c919caba6",
   "bId": "91f844b2-dd13-45a0-b66d-9b7ea751037a"
  },
  {
   "a": "Tom Zentmeyer",
   "b": "Valerie Interrante",
   "team": "Pickle Place",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -2.8,
   "avgActual": -2.4,
   "avgExpected": 2.6,
   "aId": "c16d16f0-3cc1-4c9d-8bfb-98615ffeaacd",
   "bId": "d2076d9d-aa9e-4904-b971-8da1be95013f"
  },
  {
   "a": "Kate Curren",
   "b": "Bud Heller",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.9,
   "avgActual": -5.7,
   "avgExpected": 1.1,
   "aId": "20e006d9-72f9-4f9e-bad5-750694224782",
   "bId": "9282b1b2-6551-481c-b9b8-2a246a49a621"
  }
 ],
 "matches": [
  {
   "result": "away",
   "week": 1,
   "home": "Home Court",
   "away": "Flemington",
   "time": "2025-08-23T13:00:00",
   "complete": true,
   "homePoints": 600,
   "awayPoints": 609,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Andrea Smith",
      "Robert Huntley"
     ],
     "a": [
      "Aimee Castellano",
      "Doug Schoenberger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Surbhi Sabharwal",
      "Mark Fappiano"
     ],
     "a": [
      "Christine Papa",
      "Robert Grath"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Margaret Weidlich",
      "Jhon Cifuentes"
     ],
     "a": [
      "Sue Johnson",
      "Scott Rubin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Anita Bobba",
      "Michael Vincent"
     ],
     "a": [
      "Amy Johnson",
      "Art Muth"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Surbhi Sabharwal",
      "Anita Bobba"
     ],
     "a": [
      "Aimee Castellano",
      "Kristen Soucie"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Margaret Weidlich",
      "Sarah Mcparland"
     ],
     "a": [
      "Christine Papa",
      "Amy Johnson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jhon Cifuentes",
      "Michael Vincent"
     ],
     "a": [
      "Doug Schoenberger",
      "David Osborne"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Robert Huntley",
      "Clifford Luster"
     ],
     "a": [
      "Scott Rubin",
      "Art Muth"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Surbhi Sabharwal",
      "Robert Huntley"
     ],
     "a": [
      "Aimee Castellano",
      "David Osborne"
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
      "Kristen Soucie",
      "Robert Grath"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Anita Bobba",
      "Mark Fappiano"
     ],
     "a": [
      "Sue Johnson",
      "Art Muth"
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
      "Amy Johnson",
      "Doug Schoenberger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Sarah Mcparland",
      "Anita Bobba"
     ],
     "a": [
      "Aimee Castellano",
      "Christine Papa"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Margaret Weidlich",
      "Andrea Smith"
     ],
     "a": [
      "Kristen Soucie",
      "Sue Johnson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Michael Vincent",
      "Clifford Luster"
     ],
     "a": [
      "Robert Grath",
      "Scott Rubin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Robert Huntley",
      "Jhon Cifuentes"
     ],
     "a": [
      "Doug Schoenberger",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Andrea Smith",
      "Clifford Luster"
     ],
     "a": [
      "Aimee Castellano",
      "Robert Grath"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Surbhi Sabharwal",
      "Robert Huntley"
     ],
     "a": [
      "Christine Papa",
      "Doug Schoenberger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sarah Mcparland",
      "Mark Fappiano"
     ],
     "a": [
      "Amy Johnson",
      "Art Muth"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Margaret Weidlich",
      "Michael Vincent"
     ],
     "a": [
      "Kristen Soucie",
      "Scott Rubin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Andrea Smith",
      "Sarah Mcparland"
     ],
     "a": [
      "Aimee Castellano",
      "Amy Johnson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Surbhi Sabharwal",
      "Anita Bobba"
     ],
     "a": [
      "Kristen Soucie",
      "Sue Johnson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Michael Vincent",
      "Mark Fappiano"
     ],
     "a": [
      "David Osborne",
      "Robert Grath"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Clifford Luster",
      "Jhon Cifuentes"
     ],
     "a": [
      "Art Muth",
      "Doug Schoenberger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Surbhi Sabharwal",
      "Jhon Cifuentes"
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
     "as": 18,
     "h": [
      "Margaret Weidlich",
      "Robert Huntley"
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
      "Sarah Mcparland",
      "Clifford Luster"
     ],
     "a": [
      "Kristen Soucie",
      "Robert Grath"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Andrea Smith",
      "Mark Fappiano"
     ],
     "a": [
      "Sue Johnson",
      "Art Muth"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Margaret Weidlich",
      "Andrea Smith"
     ],
     "a": [
      "Aimee Castellano",
      "Christine Papa"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Sarah Mcparland",
      "Anita Bobba"
     ],
     "a": [
      "Amy Johnson",
      "Sue Johnson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Clifford Luster",
      "Jhon Cifuentes"
     ],
     "a": [
      "Art Muth",
      "Robert Grath"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Michael Vincent",
      "Mark Fappiano"
     ],
     "a": [
      "Scott Rubin",
      "David Osborne"
     ]
    }
   ],
   "subs": [
    "Doug Schoenberger"
   ]
  },
  {
   "result": "away",
   "week": 1,
   "home": "Pickle House",
   "away": "Bounce Malvern Black",
   "time": "2025-08-23T14:00:00",
   "complete": true,
   "homePoints": 436,
   "awayPoints": 670,
   "homeGW": 2,
   "awayGW": 30,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Wei Zhu",
      "Nanjun Qian"
     ],
     "a": [
      "Karen Moliver",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Tanya Patterson",
      "Michael Vollmer"
     ],
     "a": [
      "Stephanie Woomer",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Judy Liu",
      "Wolfgang Chincarini"
     ],
     "a": [
      "Vicki Main",
      "Brian Aguilar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lucy Li",
      "Ping Peng"
     ],
     "a": [
      "Katherine Maruyama",
      "Derek Le"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Lucy Li",
      "Carolyn Dardani-Horensky"
     ],
     "a": [
      "Vicki Main",
      "Jill Scully"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Susan Zhang",
      "Wei Zhu"
     ],
     "a": [
      "Karen Moliver",
      "Katherine Maruyama"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Ping Peng",
      "Nanjun Qian"
     ],
     "a": [
      "Keith Goldberg",
      "Brian Aguilar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Michael Vollmer",
      "Wolfgang Chincarini"
     ],
     "a": [
      "Jim Darcangelo",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Tanya Patterson",
      "Wolfgang Chincarini"
     ],
     "a": [
      "Katherine Maruyama",
      "Brian Aguilar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Susan Zhang",
      "Jitendra Arora"
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
      "Carolyn Dardani-Horensky",
      "Ping Peng"
     ],
     "a": [
      "Jill Scully",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Judy Liu",
      "Yang Xiang"
     ],
     "a": [
      "Stephanie Woomer",
      "Keith Goldberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Susan Zhang",
      "Wei Zhu"
     ],
     "a": [
      "Stephanie Woomer",
      "Karen Moliver"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Lucy Li",
      "Tanya Patterson"
     ],
     "a": [
      "Jill Scully",
      "Katherine Maruyama"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Michael Vollmer",
      "Yang Xiang"
     ],
     "a": [
      "Brian Aguilar",
      "Derek Le"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Nanjun Qian",
      "Jitendra Arora"
     ],
     "a": [
      "Keith Goldberg",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Carolyn Dardani-Horensky",
      "Michael Vollmer"
     ],
     "a": [
      "Karen Moliver",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Susan Zhang",
      "Jitendra Arora"
     ],
     "a": [
      "Stephanie Woomer",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Judy Liu",
      "Wolfgang Chincarini"
     ],
     "a": [
      "Vicki Main",
      "Brian Aguilar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Lucy Li",
      "Ping Peng"
     ],
     "a": [
      "Jill Scully",
      "Keith Goldberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Wei Zhu",
      "Judy Liu"
     ],
     "a": [
      "Stephanie Woomer",
      "Katherine Maruyama"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Susan Zhang",
      "Tanya Patterson"
     ],
     "a": [
      "Jill Scully",
      "Vicki Main"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Yang Xiang",
      "Nanjun Qian"
     ],
     "a": [
      "Brian Aguilar",
      "Keith Goldberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Ping Peng",
      "Jitendra Arora"
     ],
     "a": [
      "Jim Darcangelo",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Lucy Li",
      "Michael Vollmer"
     ],
     "a": [
      "Katherine Maruyama",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Wei Zhu",
      "Yang Xiang"
     ],
     "a": [
      "Vicki Main",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Tanya Patterson",
      "Wolfgang Chincarini"
     ],
     "a": [
      "Karen Moliver",
      "Brian Aguilar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Carolyn Dardani-Horensky",
      "Ping Peng"
     ],
     "a": [
      "Jill Scully",
      "Keith Goldberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Lucy Li",
      "Judy Liu"
     ],
     "a": [
      "Vicki Main",
      "Stephanie Woomer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Tanya Patterson",
      "Carolyn Dardani-Horensky"
     ],
     "a": [
      "Katherine Maruyama",
      "Karen Moliver"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Yang Xiang",
      "Wolfgang Chincarini"
     ],
     "a": [
      "Keith Goldberg",
      "Derek Le"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Nanjun Qian",
      "Jitendra Arora"
     ],
     "a": [
      "Brian Aguilar",
      "Jim Darcangelo"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 1,
   "home": "Bounce Malvern Blue",
   "away": "Players Courtyard",
   "time": "2025-08-23T14:00:00",
   "complete": true,
   "homePoints": 405,
   "awayPoints": 683,
   "homeGW": 0,
   "awayGW": 32,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Jodi Evans",
      "Hal Golden"
     ],
     "a": [
      "Susan Debbs",
      "Jeff Lorman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Kathy BernéT",
      "Ed Gieske"
     ],
     "a": [
      "Elyse Diamond",
      "Marc Harden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Lucy Chow",
      "Patrik Grubb"
     ],
     "a": [
      "Pam Boyd",
      "Brad Daddis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Nancy Blank",
      "Tim Phelan"
     ],
     "a": [
      "Kate Siedell",
      "Jonathan Brand"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jodi Evans",
      "Kathy BernéT"
     ],
     "a": [
      "Susan Debbs",
      "Elyse Diamond"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Lucy Chow",
      "Christine Dugan"
     ],
     "a": [
      "Kim Hamilton",
      "Pam Boyd"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Patrik Grubb",
      "Hal Golden"
     ],
     "a": [
      "Jeff Lorman",
      "Jonathan Brand"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Ed Gieske",
      "Tim Phelan"
     ],
     "a": [
      "Roger Graterol",
      "Marc Harden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Jodi Evans",
      "Ed Gieske"
     ],
     "a": [
      "Susan Debbs",
      "Marc Harden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Lucy Chow",
      "Hal Golden"
     ],
     "a": [
      "Kim Hamilton",
      "Jonathan Brand"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Christine Dugan",
      "William Brown"
     ],
     "a": [
      "Kate Siedell",
      "Brad Daddis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 4,
     "as": 21,
     "h": [
      "Kathy BernéT",
      "Tim Phelan"
     ],
     "a": [
      "Elyse Diamond",
      "Roger Graterol"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jodi Evans",
      "Christine Dugan"
     ],
     "a": [
      "Pam Boyd",
      "Kate Siedell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Lucy Chow",
      "Nancy Blank"
     ],
     "a": [
      "Susan Debbs",
      "Kim Hamilton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "William Brown",
      "Ed Gieske"
     ],
     "a": [
      "Jeff Lorman",
      "Roger Graterol"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Patrik Grubb",
      "Hal Golden"
     ],
     "a": [
      "Jonathan Brand",
      "Brad Daddis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Kathy BernéT",
      "William Brown"
     ],
     "a": [
      "Elyse Diamond",
      "Brad Daddis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Nancy Blank",
      "Tim Phelan"
     ],
     "a": [
      "Kate Siedell",
      "Jeff Lorman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jodi Evans",
      "Hal Golden"
     ],
     "a": [
      "Susan Debbs",
      "Roger Graterol"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Christine Dugan",
      "Patrik Grubb"
     ],
     "a": [
      "Pam Boyd",
      "Marc Harden"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jodi Evans",
      "Nancy Blank"
     ],
     "a": [
      "Kim Hamilton",
      "Kate Siedell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kathy BernéT",
      "Christine Dugan"
     ],
     "a": [
      "Elyse Diamond",
      "Pam Boyd"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Ed Gieske",
      "Hal Golden"
     ],
     "a": [
      "Jonathan Brand",
      "Marc Harden"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Tim Phelan",
      "William Brown"
     ],
     "a": [
      "Jeff Lorman",
      "Roger Graterol"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Lucy Chow",
      "Patrik Grubb"
     ],
     "a": [
      "Kate Siedell",
      "Marc Harden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Kathy BernéT",
      "Tim Phelan"
     ],
     "a": [
      "Susan Debbs",
      "Roger Graterol"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Christine Dugan",
      "Ed Gieske"
     ],
     "a": [
      "Kim Hamilton",
      "Brad Daddis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Nancy Blank",
      "William Brown"
     ],
     "a": [
      "Pam Boyd",
      "Jonathan Brand"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Lucy Chow",
      "Jodi Evans"
     ],
     "a": [
      "Elyse Diamond",
      "Susan Debbs"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Kathy BernéT",
      "Nancy Blank"
     ],
     "a": [
      "Kate Siedell",
      "Kim Hamilton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Patrik Grubb",
      "Ed Gieske"
     ],
     "a": [
      "Brad Daddis",
      "Roger Graterol"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Tim Phelan",
      "William Brown"
     ],
     "a": [
      "Jonathan Brand",
      "Jeff Lorman"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 1,
   "home": "Pickleball Palace",
   "away": "The Atlantic Club",
   "time": "2025-08-23T14:00:00",
   "complete": true,
   "homePoints": 613,
   "awayPoints": 601,
   "homeGW": 19,
   "awayGW": 13,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Lydia Fiore",
      "John Burke"
     ],
     "a": [
      "Alice Napolitano",
      "Joe Palumbo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Ana Bautista",
      "Charlie Johnston"
     ],
     "a": [
      "Natasha De Carvalho",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jennifer Burke",
      "Mike Giampapa"
     ],
     "a": [
      "Eva Danieli",
      "Bruce Bilow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Amanda Quinn",
      "Marr Flores"
     ],
     "a": [
      "Tanya Kenney",
      "Darren Saks"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Laura Elleman",
      "Lydia Fiore"
     ],
     "a": [
      "Alice Napolitano",
      "Eva Danieli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Amanda Quinn",
      "Jennifer Burke"
     ],
     "a": [
      "Tanya Kenney",
      "Natasha De Carvalho"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Louis Vessichelli",
      "Marr Flores"
     ],
     "a": [
      "Joe Palumbo",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Charlie Johnston",
      "John Burke"
     ],
     "a": [
      "Glenn Stylides",
      "Darren Saks"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Laura Elleman",
      "Louis Vessichelli"
     ],
     "a": [
      "Natasha De Carvalho",
      "Joe Palumbo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Lydia Fiore",
      "Marr Flores"
     ],
     "a": [
      "Tanya Kenney",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Amanda Quinn",
      "Mike Giampapa"
     ],
     "a": [
      "Eva Danieli",
      "Bruce Bilow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Ana Bautista",
      "David Coleman"
     ],
     "a": [
      "Alice Napolitano",
      "Darren Saks"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Amanda Quinn",
      "Lydia Fiore"
     ],
     "a": [
      "Alice Napolitano",
      "Eva Danieli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Laura Elleman",
      "Ana Bautista"
     ],
     "a": [
      "Tanya Kenney",
      "Natasha De Carvalho"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Louis Vessichelli",
      "John Burke"
     ],
     "a": [
      "Joe Palumbo",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Mike Giampapa",
      "David Coleman"
     ],
     "a": [
      "Glenn Stylides",
      "Bruce Bilow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Laura Elleman",
      "David Coleman"
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
     "as": 17,
     "h": [
      "Lydia Fiore",
      "Marr Flores"
     ],
     "a": [
      "Natasha De Carvalho",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ana Bautista",
      "Mike Giampapa"
     ],
     "a": [
      "Alice Napolitano",
      "Glenn Stylides"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jennifer Burke",
      "Louis Vessichelli"
     ],
     "a": [
      "Tanya Kenney",
      "Darren Saks"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Amanda Quinn",
      "Lydia Fiore"
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
     "as": 14,
     "h": [
      "Laura Elleman",
      "Jennifer Burke"
     ],
     "a": [
      "Tanya Kenney",
      "Eva Danieli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "David Coleman",
      "John Burke"
     ],
     "a": [
      "Joe Palumbo",
      "Darren Saks"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Charlie Johnston",
      "Mike Giampapa"
     ],
     "a": [
      "Glenn Stylides",
      "Bruce Bilow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Amanda Quinn",
      "Marr Flores"
     ],
     "a": [
      "Natasha De Carvalho",
      "Joe Palumbo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Laura Elleman",
      "Louis Vessichelli"
     ],
     "a": [
      "Eva Danieli",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 28,
     "h": [
      "Lydia Fiore",
      "David Coleman"
     ],
     "a": [
      "Alice Napolitano",
      "Darren Saks"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jennifer Burke",
      "Charlie Johnston"
     ],
     "a": [
      "Tanya Kenney",
      "Glenn Stylides"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Laura Elleman",
      "Ana Bautista"
     ],
     "a": [
      "Eva Danieli",
      "Natasha De Carvalho"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jennifer Burke",
      "Amanda Quinn"
     ],
     "a": [
      "Alice Napolitano",
      "Tanya Kenney"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Marr Flores",
      "Louis Vessichelli"
     ],
     "a": [
      "Joe Palumbo",
      "Darren Saks"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Charlie Johnston",
      "John Burke"
     ],
     "a": [
      "Michael Dombrowiecki",
      "Bruce Bilow"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 1,
   "home": "Monroe",
   "away": "Pickle Place",
   "time": "2025-08-23T14:00:00",
   "complete": true,
   "homePoints": 621,
   "awayPoints": 611,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Pam Friedman",
      "Glenn Hillman"
     ],
     "a": [
      "Harriet Levin",
      "Tom Zentmeyer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Susan Kapit",
      "Sergey Sprikut"
     ],
     "a": [
      "Jane Meng",
      "Eric Markowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Meryl Nadler",
      "Scott Friedman"
     ],
     "a": [
      "Janet Garrity",
      "Z Zhang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Barbara Hess",
      "Don Godinez"
     ],
     "a": [
      "Laura Kang",
      "Robert Block"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Pam Friedman",
      "Susan Kapit"
     ],
     "a": [
      "Harriet Levin",
      "Janine Forrest"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Rosalyn Goldsmith",
      "Meryl Nadler"
     ],
     "a": [
      "Laura Kang",
      "Jane Meng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Glenn Hillman",
      "Aaron Pine"
     ],
     "a": [
      "Tom Zentmeyer",
      "Z Zhang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Scott Friedman",
      "Sergey Sprikut"
     ],
     "a": [
      "Robert Block",
      "Stephen Hanak"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Rosalyn Goldsmith",
      "Glenn Hillman"
     ],
     "a": [
      "Janine Forrest",
      "Eric Markowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Meryl Nadler",
      "Don Godinez"
     ],
     "a": [
      "Harriet Levin",
      "Z Zhang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Barbara Hess",
      "Aaron Pine"
     ],
     "a": [
      "Janet Garrity",
      "Stephen Hanak"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Pam Friedman",
      "Sergey Sprikut"
     ],
     "a": [
      "Laura Kang",
      "Tom Zentmeyer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Pam Friedman",
      "Rosalyn Goldsmith"
     ],
     "a": [
      "Janine Forrest",
      "Janet Garrity"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Barbara Hess",
      "Susan Kapit"
     ],
     "a": [
      "Laura Kang",
      "Jane Meng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Glenn Hillman",
      "Scott Friedman"
     ],
     "a": [
      "Tom Zentmeyer",
      "Eric Markowitz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Aaron Pine",
      "Don Godinez"
     ],
     "a": [
      "Z Zhang",
      "Stephen Hanak"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Barbara Hess",
      "Sergey Sprikut"
     ],
     "a": [
      "Janine Forrest",
      "Tom Zentmeyer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Susan Kapit",
      "Scott Friedman"
     ],
     "a": [
      "Janet Garrity",
      "Z Zhang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Meryl Nadler",
      "Aaron Pine"
     ],
     "a": [
      "Harriet Levin",
      "Robert Block"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Rosalyn Goldsmith",
      "Don Godinez"
     ],
     "a": [
      "Jane Meng",
      "Stephen Hanak"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Barbara Hess",
      "Pam Friedman"
     ],
     "a": [
      "Janine Forrest",
      "Harriet Levin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Meryl Nadler",
      "Susan Kapit"
     ],
     "a": [
      "Laura Kang",
      "Janet Garrity"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Aaron Pine",
      "Scott Friedman"
     ],
     "a": [
      "Tom Zentmeyer",
      "Z Zhang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Glenn Hillman",
      "Don Godinez"
     ],
     "a": [
      "Robert Block",
      "Eric Markowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Barbara Hess",
      "Glenn Hillman"
     ],
     "a": [
      "Harriet Levin",
      "Tom Zentmeyer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Pam Friedman",
      "Aaron Pine"
     ],
     "a": [
      "Janine Forrest",
      "Eric Markowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Meryl Nadler",
      "Sergey Sprikut"
     ],
     "a": [
      "Laura Kang",
      "Stephen Hanak"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Rosalyn Goldsmith",
      "Don Godinez"
     ],
     "a": [
      "Jane Meng",
      "Robert Block"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Barbara Hess",
      "Susan Kapit"
     ],
     "a": [
      "Janine Forrest",
      "Janet Garrity"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Pam Friedman",
      "Rosalyn Goldsmith"
     ],
     "a": [
      "Harriet Levin",
      "Jane Meng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Glenn Hillman",
      "Aaron Pine"
     ],
     "a": [
      "Tom Zentmeyer",
      "Eric Markowitz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Scott Friedman",
      "Sergey Sprikut"
     ],
     "a": [
      "Z Zhang",
      "Stephen Hanak"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 3,
   "home": "Pickle Place",
   "away": "Pickle House",
   "time": "2025-09-06T12:00:00",
   "complete": true,
   "homePoints": 672,
   "awayPoints": 501,
   "homeGW": 28,
   "awayGW": 4,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Janine Forrest",
      "Robert Block"
     ],
     "a": [
      "Wei Zhu",
      "Nanjun Qian"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Harriet Levin",
      "Tom Zentmeyer"
     ],
     "a": [
      "Susan Zhang",
      "Ping Peng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Cynthia Eisen",
      "David Eisen"
     ],
     "a": [
      "Lucy Li",
      "Michael Vollmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jane Meng",
      "Stephen Hanak"
     ],
     "a": [
      "Judy Liu",
      "Peilin Zhang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Janine Forrest",
      "Valerie Interrante"
     ],
     "a": [
      "Susan Zhang",
      "Wei Zhu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Harriet Levin",
      "Cynthia Eisen"
     ],
     "a": [
      "Lucy Li",
      "Carolyn Dardani-Horensky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Tom Zentmeyer",
      "David Eisen"
     ],
     "a": [
      "Nanjun Qian",
      "Michael Vollmer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jonathan Goldner",
      "Bruce Aronow"
     ],
     "a": [
      "Ping Peng",
      "Peilin Zhang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jane Meng",
      "Bruce Aronow"
     ],
     "a": [
      "Wei Zhu",
      "Nanjun Qian"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Valerie Interrante",
      "Jonathan Goldner"
     ],
     "a": [
      "Lucy Li",
      "Ping Peng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Cynthia Eisen",
      "David Eisen"
     ],
     "a": [
      "Susan Zhang",
      "Michael Vollmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Harriet Levin",
      "Robert Block"
     ],
     "a": [
      "Judy Liu",
      "Peilin Zhang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Valerie Interrante",
      "Jane Meng"
     ],
     "a": [
      "Carolyn Dardani-Horensky",
      "Judy Liu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Harriet Levin",
      "Janine Forrest"
     ],
     "a": [
      "Lucy Li",
      "Susan Zhang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jonathan Goldner",
      "Stephen Hanak"
     ],
     "a": [
      "Nanjun Qian",
      "Michael Vollmer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Tom Zentmeyer",
      "Bruce Aronow"
     ],
     "a": [
      "Peilin Zhang",
      "Ping Peng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Valerie Interrante",
      "Robert Block"
     ],
     "a": [
      "Judy Liu",
      "Michael Vollmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Cynthia Eisen",
      "Tom Zentmeyer"
     ],
     "a": [
      "Susan Zhang",
      "Nanjun Qian"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jane Meng",
      "Stephen Hanak"
     ],
     "a": [
      "Carolyn Dardani-Horensky",
      "Peilin Zhang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Janine Forrest",
      "Bruce Aronow"
     ],
     "a": [
      "Lucy Li",
      "Ping Peng"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Harriet Levin",
      "Janine Forrest"
     ],
     "a": [
      "Susan Zhang",
      "Lucy Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Cynthia Eisen",
      "Jane Meng"
     ],
     "a": [
      "Carolyn Dardani-Horensky",
      "Wei Zhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Tom Zentmeyer",
      "Jonathan Goldner"
     ],
     "a": [
      "Nanjun Qian",
      "Ping Peng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "David Eisen",
      "Stephen Hanak"
     ],
     "a": [
      "Peilin Zhang",
      "Michael Vollmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Valerie Interrante",
      "David Eisen"
     ],
     "a": [
      "Judy Liu",
      "Michael Vollmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Janine Forrest",
      "Bruce Aronow"
     ],
     "a": [
      "Wei Zhu",
      "Ping Peng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Jane Meng",
      "Robert Block"
     ],
     "a": [
      "Carolyn Dardani-Horensky",
      "Nanjun Qian"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Harriet Levin",
      "Tom Zentmeyer"
     ],
     "a": [
      "Lucy Li",
      "Peilin Zhang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Janine Forrest",
      "Cynthia Eisen"
     ],
     "a": [
      "Susan Zhang",
      "Carolyn Dardani-Horensky"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Harriet Levin",
      "Valerie Interrante"
     ],
     "a": [
      "Judy Liu",
      "Wei Zhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jonathan Goldner",
      "Stephen Hanak"
     ],
     "a": [
      "Michael Vollmer",
      "Peilin Zhang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Bruce Aronow",
      "Robert Block"
     ],
     "a": [
      "Ping Peng",
      "Nanjun Qian"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 3,
   "home": "Flemington",
   "away": "Pickleball Palace",
   "time": "2025-09-06T12:00:00",
   "complete": true,
   "homePoints": 642,
   "awayPoints": 615,
   "homeGW": 19,
   "awayGW": 13,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Kristen Soucie",
      "Art Muth"
     ],
     "a": [
      "Jill Lesnik",
      "Chris Heimerle"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Tara Kramer",
      "David Osborne"
     ],
     "a": [
      "Jennifer Burke",
      "Bud Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Aimee Castellano",
      "Eric Luque"
     ],
     "a": [
      "Carly Pfeffer",
      "Todd Mitchell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Denise Richmond",
      "Bob Drinane"
     ],
     "a": [
      "Ana Bautista",
      "John Burke"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Aimee Castellano",
      "Tara Kramer"
     ],
     "a": [
      "Jill Lesnik",
      "Jennifer Burke"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 27,
     "as": 29,
     "h": [
      "Kristen Soucie",
      "Denise Richmond"
     ],
     "a": [
      "Carly Pfeffer",
      "Debbie Tovitz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Art Muth",
      "David Osborne"
     ],
     "a": [
      "Chris Heimerle",
      "Bud Heller"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Eric Luque",
      "Bob Drinane"
     ],
     "a": [
      "Todd Mitchell",
      "John Burke"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Denise Richmond",
      "Art Muth"
     ],
     "a": [
      "Carly Pfeffer",
      "Bud Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Aimee Castellano",
      "Bob Drinane"
     ],
     "a": [
      "Jennifer Burke",
      "Todd Mitchell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Tara Kramer",
      "Eric Luque"
     ],
     "a": [
      "Ana Bautista",
      "Chris Heimerle"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kristen Soucie",
      "David Osborne"
     ],
     "a": [
      "Debbie Tovitz",
      "David Coleman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Aimee Castellano",
      "Denise Richmond"
     ],
     "a": [
      "Jill Lesnik",
      "Debbie Tovitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kristen Soucie",
      "Tara Kramer"
     ],
     "a": [
      "Ana Bautista",
      "Jennifer Burke"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Art Muth",
      "Bob Drinane"
     ],
     "a": [
      "Todd Mitchell",
      "Bud Heller"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Eric Luque",
      "David Osborne"
     ],
     "a": [
      "Chris Heimerle",
      "John Burke"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Tara Kramer",
      "Art Muth"
     ],
     "a": [
      "Jill Lesnik",
      "Bud Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kristen Soucie",
      "Todd Stein"
     ],
     "a": [
      "Jennifer Burke",
      "Todd Mitchell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Aimee Castellano",
      "Eric Luque"
     ],
     "a": [
      "Carly Pfeffer",
      "John Burke"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Denise Richmond",
      "David Osborne"
     ],
     "a": [
      "Debbie Tovitz",
      "David Coleman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Aimee Castellano",
      "Tara Kramer"
     ],
     "a": [
      "Jill Lesnik",
      "Carly Pfeffer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kristen Soucie",
      "Denise Richmond"
     ],
     "a": [
      "Ana Bautista",
      "Debbie Tovitz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "David Osborne",
      "Todd Stein"
     ],
     "a": [
      "Chris Heimerle",
      "Bud Heller"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Eric Luque",
      "Art Muth"
     ],
     "a": [
      "John Burke",
      "David Coleman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Kristen Soucie",
      "Eric Luque"
     ],
     "a": [
      "Jill Lesnik",
      "John Burke"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Aimee Castellano",
      "David Osborne"
     ],
     "a": [
      "Carly Pfeffer",
      "Todd Mitchell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Denise Richmond",
      "Art Muth"
     ],
     "a": [
      "Ana Bautista",
      "David Coleman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Tara Kramer",
      "Todd Stein"
     ],
     "a": [
      "Debbie Tovitz",
      "Chris Heimerle"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Aimee Castellano",
      "Kristen Soucie"
     ],
     "a": [
      "Jill Lesnik",
      "Carly Pfeffer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Tara Kramer",
      "Denise Richmond"
     ],
     "a": [
      "Ana Bautista",
      "Jennifer Burke"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Eric Luque",
      "Todd Stein"
     ],
     "a": [
      "Bud Heller",
      "David Coleman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Art Muth",
      "David Osborne"
     ],
     "a": [
      "Todd Mitchell",
      "John Burke"
     ]
    }
   ],
   "subs": [
    "Todd Mitchell"
   ]
  },
  {
   "result": "away",
   "week": 3,
   "home": "Home Court",
   "away": "Monroe",
   "time": "2025-09-06T13:00:00",
   "complete": true,
   "homePoints": 567,
   "awayPoints": 626,
   "homeGW": 9,
   "awayGW": 23,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Surbhi Sabharwal",
      "Robert Huntley"
     ],
     "a": [
      "Susan Kapit",
      "Nissim Fadida"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Cindi Goldstein",
      "Carlo Caronan"
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
      "Margaret Weidlich",
      "Dennis Yap"
     ],
     "a": [
      "Meryl Nadler",
      "Don Godinez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kimberly Schwartz",
      "Mark Fappiano"
     ],
     "a": [
      "Maureen Conery",
      "Yi Gu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Margaret Weidlich",
      "Surbhi Sabharwal"
     ],
     "a": [
      "Meryl Nadler",
      "Tracey Collins"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sharon Streit",
      "Cindi Goldstein"
     ],
     "a": [
      "Susan Kapit",
      "Maureen Conery"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Robert Huntley",
      "Randy Samuels"
     ],
     "a": [
      "Don Godinez",
      "Eliezer Mintz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Mark Fappiano",
      "Dennis Yap"
     ],
     "a": [
      "Yi Gu",
      "Guy Ohn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Cindi Goldstein",
      "Randy Samuels"
     ],
     "a": [
      "Susan Kapit",
      "Don Godinez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sharon Streit",
      "Robert Huntley"
     ],
     "a": [
      "Tracey Collins",
      "Nissim Fadida"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Kimberly Schwartz",
      "Carlo Caronan"
     ],
     "a": [
      "Meryl Nadler",
      "Guy Ohn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Margaret Weidlich",
      "Dennis Yap"
     ],
     "a": [
      "Maureen Conery",
      "Eliezer Mintz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Margaret Weidlich",
      "Cindi Goldstein"
     ],
     "a": [
      "Susan Kapit",
      "Tracey Collins"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Surbhi Sabharwal",
      "Sharon Streit"
     ],
     "a": [
      "Meryl Nadler",
      "Maureen Conery"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Randy Samuels",
      "Carlo Caronan"
     ],
     "a": [
      "Eliezer Mintz",
      "Guy Ohn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Dennis Yap",
      "Mark Fappiano"
     ],
     "a": [
      "Nissim Fadida",
      "Yi Gu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Margaret Weidlich",
      "Robert Huntley"
     ],
     "a": [
      "Tracey Collins",
      "Don Godinez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Kimberly Schwartz",
      "Randy Samuels"
     ],
     "a": [
      "Susan Kapit",
      "Guy Ohn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Sharon Streit",
      "Mark Fappiano"
     ],
     "a": [
      "Meryl Nadler",
      "Eliezer Mintz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Cindi Goldstein",
      "Carlo Caronan"
     ],
     "a": [
      "Maureen Conery",
      "Yi Gu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sharon Streit",
      "Surbhi Sabharwal"
     ],
     "a": [
      "Meryl Nadler",
      "Susan Kapit"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Cindi Goldstein",
      "Kimberly Schwartz"
     ],
     "a": [
      "Maureen Conery",
      "Tracey Collins"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Carlo Caronan",
      "Mark Fappiano"
     ],
     "a": [
      "Don Godinez",
      "Yi Gu"
     ]
    },
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
      "Nissim Fadida",
      "Eliezer Mintz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Margaret Weidlich",
      "Randy Samuels"
     ],
     "a": [
      "Meryl Nadler",
      "Guy Ohn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Surbhi Sabharwal",
      "Mark Fappiano"
     ],
     "a": [
      "Tracey Collins",
      "Yi Gu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kimberly Schwartz",
      "Dennis Yap"
     ],
     "a": [
      "Maureen Conery",
      "Don Godinez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Sharon Streit",
      "Robert Huntley"
     ],
     "a": [
      "Susan Kapit",
      "Nissim Fadida"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Cindi Goldstein",
      "Kimberly Schwartz"
     ],
     "a": [
      "Susan Kapit",
      "Tracey Collins"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Margaret Weidlich",
      "Sharon Streit"
     ],
     "a": [
      "Meryl Nadler",
      "Maureen Conery"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Mark Fappiano",
      "Randy Samuels"
     ],
     "a": [
      "Don Godinez",
      "Guy Ohn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Robert Huntley",
      "Dennis Yap"
     ],
     "a": [
      "Nissim Fadida",
      "Eliezer Mintz"
     ]
    }
   ],
   "subs": [
    "Nissim Fadida",
    "Maureen Conery",
    "Tracey Collins"
   ]
  },
  {
   "result": "home",
   "week": 3,
   "home": "Players Courtyard",
   "away": "The Atlantic Club",
   "time": "2025-09-06T14:00:00",
   "complete": true,
   "homePoints": 648,
   "awayPoints": 519,
   "homeGW": 27,
   "awayGW": 5,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Elyse Diamond",
      "Jeff Lorman"
     ],
     "a": [
      "Alice Napolitano",
      "Joe Palumbo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Susan Debbs",
      "Roger Graterol"
     ],
     "a": [
      "Eva Danieli",
      "Andrew Hyman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kate Siedell",
      "Bennett Shanker"
     ],
     "a": [
      "Laurie Guagenty",
      "Hal Greenspan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Pam Boyd",
      "Brad Daddis"
     ],
     "a": [
      "Janet Bellaran",
      "Bruce Bilow"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Elyse Diamond",
      "Susan Debbs"
     ],
     "a": [
      "Alice Napolitano",
      "Eva Danieli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Pam Boyd",
      "Stacey Frank"
     ],
     "a": [
      "Laurie Guagenty",
      "Janet Bellaran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jeff Lorman",
      "Roger Graterol"
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
     "as": 13,
     "h": [
      "Brad Daddis",
      "Bennett Shanker"
     ],
     "a": [
      "Bruce Bilow",
      "Hal Greenspan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Susan Debbs",
      "Jeff Lorman"
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
     "as": 15,
     "h": [
      "Elyse Diamond",
      "Roger Graterol"
     ],
     "a": [
      "Alice Napolitano",
      "Andrew Hyman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kate Siedell",
      "Brad Daddis"
     ],
     "a": [
      "Janet Bellaran",
      "Hal Greenspan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Pam Boyd",
      "Bennett Shanker"
     ],
     "a": [
      "Laurie Guagenty",
      "Bruce Bilow"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Susan Debbs",
      "Stacey Frank"
     ],
     "a": [
      "Alice Napolitano",
      "Laurie Guagenty"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kate Siedell",
      "Pam Boyd"
     ],
     "a": [
      "Eva Danieli",
      "Janet Bellaran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jeff Lorman",
      "Bennett Shanker"
     ],
     "a": [
      "Joe Palumbo",
      "Hal Greenspan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Roger Graterol",
      "Brad Daddis"
     ],
     "a": [
      "Bruce Bilow",
      "Andrew Hyman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kate Siedell",
      "Bennett Shanker"
     ],
     "a": [
      "Alice Napolitano",
      "Joe Palumbo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Susan Debbs",
      "Roger Graterol"
     ],
     "a": [
      "Laurie Guagenty",
      "Andrew Hyman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Elyse Diamond",
      "Marc Harden"
     ],
     "a": [
      "Janet Bellaran",
      "Hal Greenspan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Stacey Frank",
      "Jeff Lorman"
     ],
     "a": [
      "Eva Danieli",
      "Bruce Bilow"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Elyse Diamond",
      "Stacey Frank"
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
     "as": 12,
     "h": [
      "Kate Siedell",
      "Pam Boyd"
     ],
     "a": [
      "Laurie Guagenty",
      "Janet Bellaran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Marc Harden",
      "Roger Graterol"
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
     "as": 10,
     "h": [
      "Jeff Lorman",
      "Bennett Shanker"
     ],
     "a": [
      "Bruce Bilow",
      "Hal Greenspan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Elyse Diamond",
      "Roger Graterol"
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
     "as": 20,
     "h": [
      "Stacey Frank",
      "Brad Daddis"
     ],
     "a": [
      "Alice Napolitano",
      "Andrew Hyman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Susan Debbs",
      "Marc Harden"
     ],
     "a": [
      "Laurie Guagenty",
      "Hal Greenspan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kate Siedell",
      "Jeff Lorman"
     ],
     "a": [
      "Janet Bellaran",
      "Bruce Bilow"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Susan Debbs",
      "Elyse Diamond"
     ],
     "a": [
      "Alice Napolitano",
      "Laurie Guagenty"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Pam Boyd",
      "Stacey Frank"
     ],
     "a": [
      "Eva Danieli",
      "Janet Bellaran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Marc Harden",
      "Jeff Lorman"
     ],
     "a": [
      "Joe Palumbo",
      "Hal Greenspan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Brad Daddis",
      "Bennett Shanker"
     ],
     "a": [
      "Bruce Bilow",
      "Andrew Hyman"
     ]
    }
   ],
   "subs": [
    "Laurie Guagenty"
   ]
  },
  {
   "result": "home",
   "week": 3,
   "home": "Bounce Malvern Black",
   "away": "Bounce Malvern Blue",
   "time": "2025-09-06T14:30:00",
   "complete": true,
   "homePoints": 675,
   "awayPoints": 450,
   "homeGW": 29,
   "awayGW": 3,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Katherine Maruyama",
      "Brian Aguilar"
     ],
     "a": [
      "Jodi Evans",
      "Seth Yablonovitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Judy Qiu",
      "Keith Goldberg"
     ],
     "a": [
      "Kathy BernéT",
      "David Marchese"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jill Scully",
      "Derek Le"
     ],
     "a": [
      "Christine Dugan",
      "Patrik Grubb"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Vicki Main",
      "Jingwei Wu"
     ],
     "a": [
      "Jamila Sefiane",
      "Ed Gieske"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Judy Qiu",
      "Vicki Main"
     ],
     "a": [
      "Jodi Evans",
      "Christine Dugan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Karen Moliver",
      "Jill Scully"
     ],
     "a": [
      "Kathy BernéT",
      "Nancy Blank"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Brian Aguilar",
      "Jingwei Wu"
     ],
     "a": [
      "David Marchese",
      "Seth Yablonovitz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Keith Goldberg",
      "Jim Darcangelo"
     ],
     "a": [
      "Patrik Grubb",
      "Ed Gieske"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Vicki Main",
      "Jingwei Wu"
     ],
     "a": [
      "Jamila Sefiane",
      "David Marchese"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Katherine Maruyama",
      "Keith Goldberg"
     ],
     "a": [
      "Christine Dugan",
      "Seth Yablonovitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jill Scully",
      "Jim Darcangelo"
     ],
     "a": [
      "Kathy BernéT",
      "Patrik Grubb"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Karen Moliver",
      "Derek Le"
     ],
     "a": [
      "Nancy Blank",
      "Tim Phelan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jill Scully",
      "Katherine Maruyama"
     ],
     "a": [
      "Jodi Evans",
      "Nancy Blank"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Judy Qiu",
      "Vicki Main"
     ],
     "a": [
      "Jamila Sefiane",
      "Christine Dugan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 2,
     "h": [
      "Brian Aguilar",
      "Derek Le"
     ],
     "a": [
      "Seth Yablonovitz",
      "Tim Phelan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Keith Goldberg",
      "Jim Darcangelo"
     ],
     "a": [
      "David Marchese",
      "Patrik Grubb"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Karen Moliver",
      "Derek Le"
     ],
     "a": [
      "Kathy BernéT",
      "Seth Yablonovitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Katherine Maruyama",
      "Jim Darcangelo"
     ],
     "a": [
      "Jodi Evans",
      "David Marchese"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Vicki Main",
      "Brian Aguilar"
     ],
     "a": [
      "Jamila Sefiane",
      "Tim Phelan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Judy Qiu",
      "Jingwei Wu"
     ],
     "a": [
      "Nancy Blank",
      "Ed Gieske"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Vicki Main",
      "Jill Scully"
     ],
     "a": [
      "Jodi Evans",
      "Jamila Sefiane"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Katherine Maruyama",
      "Karen Moliver"
     ],
     "a": [
      "Kathy BernéT",
      "Christine Dugan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jim Darcangelo",
      "Derek Le"
     ],
     "a": [
      "Seth Yablonovitz",
      "Ed Gieske"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Jingwei Wu",
      "Keith Goldberg"
     ],
     "a": [
      "David Marchese",
      "Tim Phelan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Jill Scully",
      "Jim Darcangelo"
     ],
     "a": [
      "Jodi Evans",
      "Patrik Grubb"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Judy Qiu",
      "Keith Goldberg"
     ],
     "a": [
      "Kathy BernéT",
      "Ed Gieske"
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
      "Christine Dugan",
      "David Marchese"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Karen Moliver",
      "Brian Aguilar"
     ],
     "a": [
      "Nancy Blank",
      "Tim Phelan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Katherine Maruyama",
      "Judy Qiu"
     ],
     "a": [
      "Jodi Evans",
      "Kathy BernéT"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jill Scully",
      "Karen Moliver"
     ],
     "a": [
      "Nancy Blank",
      "Jamila Sefiane"
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
      "Seth Yablonovitz",
      "Tim Phelan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Brian Aguilar",
      "Derek Le"
     ],
     "a": [
      "Ed Gieske",
      "Patrik Grubb"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 4,
   "home": "Flemington",
   "away": "Home Court",
   "time": "2025-09-13T12:00:00",
   "complete": true,
   "homePoints": 649,
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
      "Christine Papa",
      "Todd Stein"
     ],
     "a": [
      "Kimberly Schwartz",
      "Jhon Cifuentes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Sue Johnson",
      "Bob Drinane"
     ],
     "a": [
      "Andrea Smith",
      "Dennis Yap"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Aimee Castellano",
      "Eric Luque"
     ],
     "a": [
      "Kajal Sinkar",
      "Robert Huntley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kristen Soucie",
      "Art Muth"
     ],
     "a": [
      "Cindi Goldstein",
      "Mark Fappiano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Denise Richmond",
      "Sue Johnson"
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
     "as": 12,
     "h": [
      "Aimee Castellano",
      "Christine Papa"
     ],
     "a": [
      "Kimberly Schwartz",
      "Sarah Mcparland"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Eric Luque",
      "Bob Drinane"
     ],
     "a": [
      "Michael Vincent",
      "Jhon Cifuentes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Robert Grath",
      "Art Muth"
     ],
     "a": [
      "Robert Huntley",
      "Mark Fappiano"
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
      "Andrea Smith",
      "Jhon Cifuentes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kristen Soucie",
      "Robert Grath"
     ],
     "a": [
      "Kimberly Schwartz",
      "Michael Vincent"
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
      "Sarah Mcparland",
      "Mark Fappiano"
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
      "Cindi Goldstein",
      "Dennis Yap"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kristen Soucie",
      "Denise Richmond"
     ],
     "a": [
      "Cindi Goldstein",
      "Andrea Smith"
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
      "Kimberly Schwartz",
      "Sarah Mcparland"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Eric Luque",
      "Robert Grath"
     ],
     "a": [
      "Michael Vincent",
      "Robert Huntley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Todd Stein",
      "Bob Drinane"
     ],
     "a": [
      "Mark Fappiano",
      "Dennis Yap"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sue Johnson",
      "Art Muth"
     ],
     "a": [
      "Kajal Sinkar",
      "Mark Fappiano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Denise Richmond",
      "Bob Drinane"
     ],
     "a": [
      "Cindi Goldstein",
      "Jhon Cifuentes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Christine Papa",
      "Eric Luque"
     ],
     "a": [
      "Kimberly Schwartz",
      "Dennis Yap"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Aimee Castellano",
      "Robert Grath"
     ],
     "a": [
      "Sarah Mcparland",
      "Robert Huntley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sue Johnson",
      "Kristen Soucie"
     ],
     "a": [
      "Kajal Sinkar",
      "Cindi Goldstein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Aimee Castellano",
      "Denise Richmond"
     ],
     "a": [
      "Andrea Smith",
      "Sarah Mcparland"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Robert Grath",
      "Todd Stein"
     ],
     "a": [
      "Michael Vincent",
      "Dennis Yap"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Art Muth",
      "Bob Drinane"
     ],
     "a": [
      "Jhon Cifuentes",
      "Robert Huntley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Christine Papa",
      "Robert Grath"
     ],
     "a": [
      "Sarah Mcparland",
      "Michael Vincent"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Aimee Castellano",
      "Bob Drinane"
     ],
     "a": [
      "Kimberly Schwartz",
      "Jhon Cifuentes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Denise Richmond",
      "Todd Stein"
     ],
     "a": [
      "Kajal Sinkar",
      "Dennis Yap"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kristen Soucie",
      "Eric Luque"
     ],
     "a": [
      "Andrea Smith",
      "Robert Huntley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Aimee Castellano",
      "Kristen Soucie"
     ],
     "a": [
      "Sarah Mcparland",
      "Kajal Sinkar"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sue Johnson",
      "Christine Papa"
     ],
     "a": [
      "Kimberly Schwartz",
      "Andrea Smith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Eric Luque",
      "Todd Stein"
     ],
     "a": [
      "Michael Vincent",
      "Mark Fappiano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Robert Grath",
      "Art Muth"
     ],
     "a": [
      "Jhon Cifuentes",
      "Robert Huntley"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 4,
   "home": "The Atlantic Club",
   "away": "Pickleball Palace",
   "time": "2025-09-13T12:00:00",
   "complete": true,
   "homePoints": 641,
   "awayPoints": 607,
   "homeGW": 20,
   "awayGW": 12,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Alice Napolitano",
      "Joe Palumbo"
     ],
     "a": [
      "Oliveira Karen",
      "Bud Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Eva Danieli",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Ana Bautista",
      "Charlie Johnston"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Natasha De Carvalho",
      "Michael Swell"
     ],
     "a": [
      "Laura Elleman",
      "Marr Flores"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Janet Bellaran",
      "Hal Greenspan"
     ],
     "a": [
      "Lydia Fiore",
      "Chris Heimerle"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Natasha De Carvalho",
      "Tanya Kenney"
     ],
     "a": [
      "Sinitra Siengsanaoh",
      "Lydia Fiore"
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
      "Laura Elleman",
      "Ana Bautista"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Michael Dombrowiecki",
      "Hal Greenspan"
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
      "Michael Swell",
      "Joe Palumbo"
     ],
     "a": [
      "Marr Flores",
      "Bud Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Tanya Kenney",
      "Michael Swell"
     ],
     "a": [
      "Oliveira Karen",
      "Marr Flores"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Eva Danieli",
      "Joe Palumbo"
     ],
     "a": [
      "Lydia Fiore",
      "Toby Mcmahan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Janet Bellaran",
      "Hal Greenspan"
     ],
     "a": [
      "Ana Bautista",
      "Chris Heimerle"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Alice Napolitano",
      "Mike Lasko"
     ],
     "a": [
      "Sinitra Siengsanaoh",
      "Charlie Johnston"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Natasha De Carvalho",
      "Tanya Kenney"
     ],
     "a": [
      "Oliveira Karen",
      "Laura Elleman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Eva Danieli",
      "Janet Bellaran"
     ],
     "a": [
      "Sinitra Siengsanaoh",
      "Ana Bautista"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Joe Palumbo",
      "Hal Greenspan"
     ],
     "a": [
      "Toby Mcmahan",
      "Bud Heller"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Michael Swell",
      "Mike Lasko"
     ],
     "a": [
      "Charlie Johnston",
      "Marr Flores"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Eva Danieli",
      "Michael Swell"
     ],
     "a": [
      "Oliveira Karen",
      "Marr Flores"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Alice Napolitano",
      "Joe Palumbo"
     ],
     "a": [
      "Lydia Fiore",
      "Toby Mcmahan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Tanya Kenney",
      "Mike Lasko"
     ],
     "a": [
      "Sinitra Siengsanaoh",
      "Bud Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Natasha De Carvalho",
      "Hal Greenspan"
     ],
     "a": [
      "Ana Bautista",
      "Chris Heimerle"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Alice Napolitano",
      "Tanya Kenney"
     ],
     "a": [
      "Oliveira Karen",
      "Sinitra Siengsanaoh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Janet Bellaran",
      "Natasha De Carvalho"
     ],
     "a": [
      "Ana Bautista",
      "Laura Elleman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Hal Greenspan",
      "Joe Palumbo"
     ],
     "a": [
      "Chris Heimerle",
      "Bud Heller"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Mike Lasko",
      "Michael Swell"
     ],
     "a": [
      "Charlie Johnston",
      "Toby Mcmahan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Eva Danieli",
      "Joe Palumbo"
     ],
     "a": [
      "Oliveira Karen",
      "Bud Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Janet Bellaran",
      "Mike Lasko"
     ],
     "a": [
      "Lydia Fiore",
      "Charlie Johnston"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Alice Napolitano",
      "Hal Greenspan"
     ],
     "a": [
      "Laura Elleman",
      "Toby Mcmahan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Tanya Kenney",
      "Michael Swell"
     ],
     "a": [
      "Sinitra Siengsanaoh",
      "Marr Flores"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Alice Napolitano",
      "Eva Danieli"
     ],
     "a": [
      "Oliveira Karen",
      "Sinitra Siengsanaoh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Janet Bellaran",
      "Natasha De Carvalho"
     ],
     "a": [
      "Laura Elleman",
      "Lydia Fiore"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Joe Palumbo",
      "Michael Swell"
     ],
     "a": [
      "Charlie Johnston",
      "Toby Mcmahan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Mike Lasko",
      "Hal Greenspan"
     ],
     "a": [
      "Marr Flores",
      "Bud Heller"
     ]
    }
   ],
   "subs": [
    "Michael Swell"
   ]
  },
  {
   "result": "home",
   "week": 4,
   "home": "Players Courtyard",
   "away": "Bounce Malvern Blue",
   "time": "2025-09-13T14:00:00",
   "complete": true,
   "homePoints": 650,
   "awayPoints": 492,
   "homeGW": 27,
   "awayGW": 5,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Kim Hamilton",
      "Brad Daddis"
     ],
     "a": [
      "Jamila Sefiane",
      "Ed Gieske"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Susan Debbs",
      "Jeff Lorman"
     ],
     "a": [
      "Kathy BernéT",
      "Sandro Stefanelli"
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
      "Jodi Evans",
      "Hal Golden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Pam Boyd",
      "Bennett Shanker"
     ],
     "a": [
      "Christine Dugan",
      "Matt Detiger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Susan Debbs",
      "Kim Hamilton"
     ],
     "a": [
      "Jamila Sefiane",
      "Christine Dugan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Pam Boyd",
      "Stacey Frank"
     ],
     "a": [
      "Lucy Chow",
      "Kathy BernéT"
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
      "Ed Gieske",
      "Hal Golden"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Bennett Shanker",
      "Jeff Lorman"
     ],
     "a": [
      "Matt Detiger",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Stacey Frank",
      "Brad Daddis"
     ],
     "a": [
      "Lucy Chow",
      "Hal Golden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kim Hamilton",
      "Brian Rowan"
     ],
     "a": [
      "Kathy BernéT",
      "Matt Detiger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kate Siedell",
      "Bennett Shanker"
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
     "as": 14,
     "h": [
      "Susan Debbs",
      "Marc Harden"
     ],
     "a": [
      "Jodi Evans",
      "Ed Gieske"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kate Siedell",
      "Pam Boyd"
     ],
     "a": [
      "Lucy Chow",
      "Jodi Evans"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Stacey Frank",
      "Kim Hamilton"
     ],
     "a": [
      "Kathy BernéT",
      "Jamila Sefiane"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jeff Lorman",
      "Brian Rowan"
     ],
     "a": [
      "Ed Gieske",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Brad Daddis",
      "Bennett Shanker"
     ],
     "a": [
      "Hal Golden",
      "Matt Detiger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Pam Boyd",
      "Brad Daddis"
     ],
     "a": [
      "Lucy Chow",
      "Matt Detiger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Stacey Frank",
      "Marc Harden"
     ],
     "a": [
      "Christine Dugan",
      "Hal Golden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kate Siedell",
      "Bennett Shanker"
     ],
     "a": [
      "Kathy BernéT",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Susan Debbs",
      "Jeff Lorman"
     ],
     "a": [
      "Jamila Sefiane",
      "Ed Gieske"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Susan Debbs",
      "Stacey Frank"
     ],
     "a": [
      "Jodi Evans",
      "Christine Dugan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Kim Hamilton",
      "Pam Boyd"
     ],
     "a": [
      "Kathy BernéT",
      "Lucy Chow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Marc Harden",
      "Bennett Shanker"
     ],
     "a": [
      "Ed Gieske",
      "Hal Golden"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jeff Lorman",
      "Brian Rowan"
     ],
     "a": [
      "Matt Detiger",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kate Siedell",
      "Jeff Lorman"
     ],
     "a": [
      "Jodi Evans",
      "Matt Detiger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Pam Boyd",
      "Bennett Shanker"
     ],
     "a": [
      "Jamila Sefiane",
      "Hal Golden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Susan Debbs",
      "Brian Rowan"
     ],
     "a": [
      "Christine Dugan",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Kim Hamilton",
      "Brad Daddis"
     ],
     "a": [
      "Lucy Chow",
      "Ed Gieske"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Susan Debbs",
      "Kim Hamilton"
     ],
     "a": [
      "Jamila Sefiane",
      "Jodi Evans"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kate Siedell",
      "Stacey Frank"
     ],
     "a": [
      "Kathy BernéT",
      "Christine Dugan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Brian Rowan",
      "Brad Daddis"
     ],
     "a": [
      "Ed Gieske",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Jeff Lorman",
      "Marc Harden"
     ],
     "a": [
      "Hal Golden",
      "Matt Detiger"
     ]
    }
   ],
   "subs": [
    "Matt Detiger"
   ]
  },
  {
   "result": "away",
   "week": 4,
   "home": "Pickle House",
   "away": "Monroe",
   "time": "2025-09-13T14:00:00",
   "complete": true,
   "homePoints": 500,
   "awayPoints": 676,
   "homeGW": 3,
   "awayGW": 29,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Wei Zhu",
      "Nanjun Qian"
     ],
     "a": [
      "Hayley Yandoli",
      "Sergey Sprikut"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Yue Fei",
      "Ping Peng"
     ],
     "a": [
      "Amy Chrebet",
      "Yi Gu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Judy Liu",
      "Bruce Mattthew"
     ],
     "a": [
      "Rosalyn Goldsmith",
      "Eliezer Mintz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Carolyn Dardani-Horensky",
      "Michael Vollmer"
     ],
     "a": [
      "Barbara Hess",
      "Guy Ohn"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Tanya Patterson",
      "Carolyn Dardani-Horensky"
     ],
     "a": [
      "Amy Chrebet",
      "Barbara Hess"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Wei Zhu",
      "Yue Fei"
     ],
     "a": [
      "Meryl Nadler",
      "Rosalyn Goldsmith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Peilin Zhang",
      "Nanjun Qian"
     ],
     "a": [
      "Guy Ohn",
      "Yi Gu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Bruce Mattthew",
      "Ping Peng"
     ],
     "a": [
      "Glenn Hillman",
      "Eliezer Mintz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Tanya Patterson",
      "Peilin Zhang"
     ],
     "a": [
      "Amy Chrebet",
      "Guy Ohn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Judy Liu",
      "Ping Peng"
     ],
     "a": [
      "Hayley Yandoli",
      "Glenn Hillman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Yue Fei",
      "Michael Vollmer"
     ],
     "a": [
      "Meryl Nadler",
      "Yi Gu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Wei Zhu",
      "Nanjun Qian"
     ],
     "a": [
      "Barbara Hess",
      "Sergey Sprikut"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Judy Liu",
      "Wei Zhu"
     ],
     "a": [
      "Hayley Yandoli",
      "Rosalyn Goldsmith"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Tanya Patterson",
      "Carolyn Dardani-Horensky"
     ],
     "a": [
      "Meryl Nadler",
      "Barbara Hess"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Nanjun Qian",
      "Yang Xiang"
     ],
     "a": [
      "Yi Gu",
      "Eliezer Mintz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Peilin Zhang",
      "Michael Vollmer"
     ],
     "a": [
      "Guy Ohn",
      "Glenn Hillman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Tanya Patterson",
      "Michael Vollmer"
     ],
     "a": [
      "Rosalyn Goldsmith",
      "Sergey Sprikut"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Yue Fei",
      "Ping Peng"
     ],
     "a": [
      "Hayley Yandoli",
      "Guy Ohn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Carolyn Dardani-Horensky",
      "Yang Xiang"
     ],
     "a": [
      "Barbara Hess",
      "Glenn Hillman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Judy Liu",
      "Bruce Mattthew"
     ],
     "a": [
      "Amy Chrebet",
      "Eliezer Mintz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Judy Liu",
      "Tanya Patterson"
     ],
     "a": [
      "Meryl Nadler",
      "Hayley Yandoli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Yue Fei",
      "Carolyn Dardani-Horensky"
     ],
     "a": [
      "Amy Chrebet",
      "Rosalyn Goldsmith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Peilin Zhang",
      "Yang Xiang"
     ],
     "a": [
      "Sergey Sprikut",
      "Guy Ohn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Bruce Mattthew",
      "Ping Peng"
     ],
     "a": [
      "Yi Gu",
      "Glenn Hillman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Wei Zhu",
      "Yang Xiang"
     ],
     "a": [
      "Meryl Nadler",
      "Glenn Hillman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Judy Liu",
      "Peilin Zhang"
     ],
     "a": [
      "Barbara Hess",
      "Yi Gu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Tanya Patterson",
      "Nanjun Qian"
     ],
     "a": [
      "Hayley Yandoli",
      "Eliezer Mintz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Yue Fei",
      "Bruce Mattthew"
     ],
     "a": [
      "Amy Chrebet",
      "Sergey Sprikut"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Tanya Patterson",
      "Yue Fei"
     ],
     "a": [
      "Meryl Nadler",
      "Amy Chrebet"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Judy Liu",
      "Wei Zhu"
     ],
     "a": [
      "Rosalyn Goldsmith",
      "Barbara Hess"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Yang Xiang",
      "Ping Peng"
     ],
     "a": [
      "Glenn Hillman",
      "Sergey Sprikut"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Bruce Mattthew",
      "Michael Vollmer"
     ],
     "a": [
      "Eliezer Mintz",
      "Guy Ohn"
     ]
    }
   ],
   "subs": [
    "Bruce Mattthew",
    "Yue Fei"
   ]
  },
  {
   "result": "home",
   "week": 4,
   "home": "Bounce Malvern Black",
   "away": "Pickle Place",
   "time": "2025-09-13T14:30:00",
   "complete": true,
   "homePoints": 662,
   "awayPoints": 560,
   "homeGW": 22,
   "awayGW": 10,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Stephanie Woomer",
      "Jingwei Wu"
     ],
     "a": [
      "Harriet Levin",
      "Tom Zentmeyer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jill Scully",
      "Brian Aguilar"
     ],
     "a": [
      "Valerie Interrante",
      "Eric Markowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Katherine Maruyama",
      "Derek Le"
     ],
     "a": [
      "Marykristin Haskell",
      "Jonathan Goldner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Karen Moliver",
      "Jim Darcangelo"
     ],
     "a": [
      "Laura Kang",
      "Robert Block"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Katherine Maruyama",
      "Stephanie Woomer"
     ],
     "a": [
      "Janine Forrest",
      "Harriet Levin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jill Scully",
      "Vicki Main"
     ],
     "a": [
      "Valerie Interrante",
      "Jane Meng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Derek Le",
      "Jim Darcangelo"
     ],
     "a": [
      "Tom Zentmeyer",
      "Eric Markowitz"
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
      "Bruce Aronow",
      "Jonathan Goldner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Stephanie Woomer",
      "Derek Le"
     ],
     "a": [
      "Marykristin Haskell",
      "Bruce Aronow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Katherine Maruyama",
      "Keith Goldberg"
     ],
     "a": [
      "Laura Kang",
      "Tom Zentmeyer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Vicki Main",
      "Brian Aguilar"
     ],
     "a": [
      "Valerie Interrante",
      "Eric Markowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Karen Moliver",
      "Jim Darcangelo"
     ],
     "a": [
      "Harriet Levin",
      "Robert Block"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Stephanie Woomer",
      "Karen Moliver"
     ],
     "a": [
      "Janine Forrest",
      "Harriet Levin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Vicki Main",
      "Jill Scully"
     ],
     "a": [
      "Laura Kang",
      "Jane Meng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Brian Aguilar",
      "Keith Goldberg"
     ],
     "a": [
      "Tom Zentmeyer",
      "Eric Markowitz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jingwei Wu",
      "Derek Le"
     ],
     "a": [
      "Jonathan Goldner",
      "Z Zhang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Karen Moliver",
      "Jingwei Wu"
     ],
     "a": [
      "Harriet Levin",
      "Tom Zentmeyer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Jill Scully",
      "Keith Goldberg"
     ],
     "a": [
      "Marykristin Haskell",
      "Eric Markowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Vicki Main",
      "Brian Aguilar"
     ],
     "a": [
      "Valerie Interrante",
      "Z Zhang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Katherine Maruyama",
      "Jim Darcangelo"
     ],
     "a": [
      "Laura Kang",
      "Robert Block"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Karen Moliver",
      "Katherine Maruyama"
     ],
     "a": [
      "Harriet Levin",
      "Marykristin Haskell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Vicki Main",
      "Stephanie Woomer"
     ],
     "a": [
      "Janine Forrest",
      "Jane Meng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Derek Le",
      "Jim Darcangelo"
     ],
     "a": [
      "Bruce Aronow",
      "Jonathan Goldner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Keith Goldberg",
      "Brian Aguilar"
     ],
     "a": [
      "Tom Zentmeyer",
      "Z Zhang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Katherine Maruyama",
      "Derek Le"
     ],
     "a": [
      "Janine Forrest",
      "Jonathan Goldner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Vicki Main",
      "Jim Darcangelo"
     ],
     "a": [
      "Jane Meng",
      "Bruce Aronow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Stephanie Woomer",
      "Jingwei Wu"
     ],
     "a": [
      "Marykristin Haskell",
      "Z Zhang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jill Scully",
      "Keith Goldberg"
     ],
     "a": [
      "Harriet Levin",
      "Robert Block"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jill Scully",
      "Karen Moliver"
     ],
     "a": [
      "Janine Forrest",
      "Valerie Interrante"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Katherine Maruyama",
      "Stephanie Woomer"
     ],
     "a": [
      "Harriet Levin",
      "Marykristin Haskell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jingwei Wu",
      "Jim Darcangelo"
     ],
     "a": [
      "Tom Zentmeyer",
      "Jonathan Goldner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Brian Aguilar",
      "Derek Le"
     ],
     "a": [
      "Bruce Aronow",
      "Robert Block"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 5,
   "home": "Pickle Place",
   "away": "Bounce Malvern Blue",
   "time": "2025-09-20T12:00:00",
   "complete": true,
   "homePoints": 679,
   "awayPoints": 517,
   "homeGW": 28,
   "awayGW": 4,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Valerie Interrante",
      "David Eisen"
     ],
     "a": [
      "Lucy Chow",
      "Hal Golden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Janine Forrest",
      "Jonathan Goldner"
     ],
     "a": [
      "Jodi Evans",
      "David Marchese"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jane Meng",
      "Stephen Hanak"
     ],
     "a": [
      "Nancy Blank",
      "Seth Yablonovitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Janet Garrity",
      "Z Zhang"
     ],
     "a": [
      "Jamila Sefiane",
      "Ed Gieske"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Janet Garrity",
      "Jane Meng"
     ],
     "a": [
      "Lucy Chow",
      "Jodi Evans"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Janine Forrest",
      "Valerie Interrante"
     ],
     "a": [
      "Wendy Frost",
      "Nancy Blank"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jonathan Goldner",
      "Z Zhang"
     ],
     "a": [
      "Hal Golden",
      "David Marchese"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "David Eisen",
      "Eric Markowitz"
     ],
     "a": [
      "Seth Yablonovitz",
      "Michael Frost"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Laura Kang",
      "David Eisen"
     ],
     "a": [
      "Jamila Sefiane",
      "Hal Golden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Janet Garrity",
      "Z Zhang"
     ],
     "a": [
      "Lucy Chow",
      "Ed Gieske"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Valerie Interrante",
      "Robert Block"
     ],
     "a": [
      "Jodi Evans",
      "Michael Frost"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Harriet Levin",
      "Eric Markowitz"
     ],
     "a": [
      "Wendy Frost",
      "Seth Yablonovitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Harriet Levin",
      "Janine Forrest"
     ],
     "a": [
      "Jodi Evans",
      "Nancy Blank"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Janet Garrity",
      "Laura Kang"
     ],
     "a": [
      "Jamila Sefiane",
      "Lucy Chow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Robert Block",
      "Z Zhang"
     ],
     "a": [
      "David Marchese",
      "Michael Frost"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Eric Markowitz",
      "Stephen Hanak"
     ],
     "a": [
      "Ed Gieske",
      "Seth Yablonovitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Janet Garrity",
      "Jonathan Goldner"
     ],
     "a": [
      "Wendy Frost",
      "Ed Gieske"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Harriet Levin",
      "Robert Block"
     ],
     "a": [
      "Lucy Chow",
      "David Marchese"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jane Meng",
      "David Eisen"
     ],
     "a": [
      "Jodi Evans",
      "Hal Golden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Laura Kang",
      "Stephen Hanak"
     ],
     "a": [
      "Jamila Sefiane",
      "Michael Frost"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Janine Forrest",
      "Janet Garrity"
     ],
     "a": [
      "Jodi Evans",
      "Wendy Frost"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Laura Kang",
      "Valerie Interrante"
     ],
     "a": [
      "Jamila Sefiane",
      "Nancy Blank"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "David Eisen",
      "Stephen Hanak"
     ],
     "a": [
      "Seth Yablonovitz",
      "Ed Gieske"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jonathan Goldner",
      "Robert Block"
     ],
     "a": [
      "David Marchese",
      "Michael Frost"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Harriet Levin",
      "David Eisen"
     ],
     "a": [
      "Wendy Frost",
      "David Marchese"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jane Meng",
      "Z Zhang"
     ],
     "a": [
      "Jamila Sefiane",
      "Ed Gieske"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Laura Kang",
      "Robert Block"
     ],
     "a": [
      "Nancy Blank",
      "Seth Yablonovitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Valerie Interrante",
      "Eric Markowitz"
     ],
     "a": [
      "Lucy Chow",
      "Hal Golden"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Jane Meng",
      "Laura Kang"
     ],
     "a": [
      "Jamila Sefiane",
      "Jodi Evans"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Harriet Levin",
      "Valerie Interrante"
     ],
     "a": [
      "Wendy Frost",
      "Nancy Blank"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Jonathan Goldner",
      "Stephen Hanak"
     ],
     "a": [
      "Hal Golden",
      "Michael Frost"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Eric Markowitz",
      "Z Zhang"
     ],
     "a": [
      "Ed Gieske",
      "David Marchese"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 5,
   "home": "Flemington",
   "away": "The Atlantic Club",
   "time": "2025-09-20T12:00:00",
   "complete": true,
   "homePoints": 609,
   "awayPoints": 645,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Denise Richmond",
      "Scott Rubin"
     ],
     "a": [
      "Alice Napolitano",
      "Joe Palumbo"
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
      "Liz Cuozzo",
      "Andrew Hyman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Aimee Castellano",
      "Bob Drinane"
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
      "Tara Kramer",
      "Simon Perry"
     ],
     "a": [
      "Tanya Kenney",
      "Darren Saks"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Christine Papa",
      "Tara Kramer"
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
     "as": 18,
     "h": [
      "Aimee Castellano",
      "Amy Johnson"
     ],
     "a": [
      "Tanya Kenney",
      "Liz Cuozzo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 27,
     "as": 29,
     "h": [
      "David Osborne",
      "Jaco De Waal"
     ],
     "a": [
      "Joe Palumbo",
      "Brad Oldham"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Bob Drinane",
      "Scott Rubin"
     ],
     "a": [
      "Darren Saks",
      "Andrew Hyman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Tara Kramer",
      "Simon Perry"
     ],
     "a": [
      "Eva Danieli",
      "Joe Palumbo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Amy Johnson",
      "Bob Drinane"
     ],
     "a": [
      "Alice Napolitano",
      "Andrew Hyman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Denise Richmond",
      "Jaco De Waal"
     ],
     "a": [
      "Liz Cuozzo",
      "Darren Saks"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Aimee Castellano",
      "David Osborne"
     ],
     "a": [
      "Tanya Kenney",
      "Brad Oldham"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Denise Richmond",
      "Tara Kramer"
     ],
     "a": [
      "Alice Napolitano",
      "Tanya Kenney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Aimee Castellano",
      "Christine Papa"
     ],
     "a": [
      "Eva Danieli",
      "Liz Cuozzo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Scott Rubin",
      "Jaco De Waal"
     ],
     "a": [
      "Joe Palumbo",
      "Andrew Hyman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "David Osborne",
      "Simon Perry"
     ],
     "a": [
      "Brad Oldham",
      "Darren Saks"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Christine Papa",
      "Bob Drinane"
     ],
     "a": [
      "Liz Cuozzo",
      "Joe Palumbo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Aimee Castellano",
      "Jaco De Waal"
     ],
     "a": [
      "Alice Napolitano",
      "Brad Oldham"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Denise Richmond",
      "Simon Perry"
     ],
     "a": [
      "Eva Danieli",
      "Darren Saks"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Amy Johnson",
      "Scott Rubin"
     ],
     "a": [
      "Tanya Kenney",
      "Andrew Hyman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Amy Johnson",
      "Denise Richmond"
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
     "as": 17,
     "h": [
      "Aimee Castellano",
      "Tara Kramer"
     ],
     "a": [
      "Tanya Kenney",
      "Liz Cuozzo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Bob Drinane",
      "Simon Perry"
     ],
     "a": [
      "Joe Palumbo",
      "Brad Oldham"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "David Osborne",
      "Jaco De Waal"
     ],
     "a": [
      "Darren Saks",
      "Andrew Hyman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Amy Johnson",
      "David Osborne"
     ],
     "a": [
      "Alice Napolitano",
      "Joe Palumbo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Aimee Castellano",
      "Jaco De Waal"
     ],
     "a": [
      "Eva Danieli",
      "Brad Oldham"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Christine Papa",
      "Bob Drinane"
     ],
     "a": [
      "Liz Cuozzo",
      "Andrew Hyman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Tara Kramer",
      "Scott Rubin"
     ],
     "a": [
      "Tanya Kenney",
      "Darren Saks"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Amy Johnson",
      "Christine Papa"
     ],
     "a": [
      "Alice Napolitano",
      "Liz Cuozzo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Aimee Castellano",
      "Denise Richmond"
     ],
     "a": [
      "Eva Danieli",
      "Tanya Kenney"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Scott Rubin",
      "Simon Perry"
     ],
     "a": [
      "Joe Palumbo",
      "Andrew Hyman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Bob Drinane",
      "David Osborne"
     ],
     "a": [
      "Darren Saks",
      "Brad Oldham"
     ]
    }
   ],
   "subs": [
    "Jaco De Waal"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "Home Court",
   "away": "Pickle House",
   "time": "2025-09-20T13:00:00",
   "complete": true,
   "homePoints": 515,
   "awayPoints": 425,
   "homeGW": 28,
   "awayGW": 4,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Surbhi Sabharwal",
      "Robert Huntley"
     ],
     "a": [
      "Carolyn Dardani-Horensky",
      "Ping Peng"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Cindi Goldstein",
      "Carlo Caronan"
     ],
     "a": [
      "Yue Fei",
      "Jeff Laible"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Kimberly Schwartz",
      "Randy Samuels"
     ],
     "a": [
      "Susan Zhang",
      "Michael Vollmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sharon Streit",
      "Clifford Luster"
     ],
     "a": [
      "Tanya Patterson",
      "Henry Wang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Cindi Goldstein",
      "Sharon Streit"
     ],
     "a": [
      "Yue Fei",
      "Susan Zhang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Surbhi Sabharwal",
      "Kajal Sinkar"
     ],
     "a": [
      "Carolyn Dardani-Horensky",
      "Tanya Patterson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jhon Cifuentes",
      "Robert Huntley"
     ],
     "a": [
      "Ping Peng",
      "Michael Vollmer"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Clifford Luster",
      "Carlo Caronan"
     ],
     "a": [
      "Henry Wang",
      "Jeff Laible"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Surbhi Sabharwal",
      "Clifford Luster"
     ],
     "a": [
      "Susan Zhang",
      "Michael Vollmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kimberly Schwartz",
      "Jhon Cifuentes"
     ],
     "a": [
      "Yue Fei",
      "Ping Peng"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Kajal Sinkar",
      "Carlo Caronan"
     ],
     "a": [
      "Tanya Patterson",
      "Jeff Laible"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Cindi Goldstein",
      "Randy Samuels"
     ],
     "a": [
      "Wei Zhu",
      "Henry Wang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Sharon Streit",
      "Kimberly Schwartz"
     ],
     "a": [
      "Susan Zhang",
      "Wei Zhu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Surbhi Sabharwal",
      "Kajal Sinkar"
     ],
     "a": [
      "Carolyn Dardani-Horensky",
      "Tanya Patterson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Robert Huntley",
      "Randy Samuels"
     ],
     "a": [
      "Ping Peng",
      "Michael Vollmer"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Jhon Cifuentes",
      "Carlo Caronan"
     ],
     "a": [
      "Henry Wang",
      "Jeff Laible"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kajal Sinkar",
      "Randy Samuels"
     ],
     "a": [
      "Yue Fei",
      "Ping Peng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Sharon Streit",
      "Robert Huntley"
     ],
     "a": [
      "Tanya Patterson",
      "Michael Vollmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Cindi Goldstein",
      "Jhon Cifuentes"
     ],
     "a": [
      "Wei Zhu",
      "Jeff Laible"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kimberly Schwartz",
      "Clifford Luster"
     ],
     "a": [
      "Carolyn Dardani-Horensky",
      "Henry Wang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Surbhi Sabharwal",
      "Cindi Goldstein"
     ],
     "a": [
      "Wei Zhu",
      "Susan Zhang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Sharon Streit",
      "Kimberly Schwartz"
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
     "as": 14,
     "h": [
      "Clifford Luster",
      "Randy Samuels"
     ],
     "a": [
      "Ping Peng",
      "Henry Wang"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Carlo Caronan",
      "Robert Huntley"
     ],
     "a": [
      "Michael Vollmer",
      "Jeff Laible"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sharon Streit",
      "Clifford Luster"
     ],
     "a": [
      "Tanya Patterson",
      "Ping Peng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Surbhi Sabharwal",
      "Jhon Cifuentes"
     ],
     "a": [
      "Yue Fei",
      "Michael Vollmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Kimberly Schwartz",
      "Carlo Caronan"
     ],
     "a": [
      "Wei Zhu",
      "Jeff Laible"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kajal Sinkar",
      "Robert Huntley"
     ],
     "a": [
      "Susan Zhang",
      "Henry Wang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Sharon Streit",
      "Surbhi Sabharwal"
     ],
     "a": [
      "Susan Zhang",
      "Carolyn Dardani-Horensky"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kajal Sinkar",
      "Cindi Goldstein"
     ],
     "a": [
      "Yue Fei",
      "Wei Zhu"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Clifford Luster",
      "Jhon Cifuentes"
     ],
     "a": [
      "Ping Peng",
      "Jeff Laible"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Robert Huntley",
      "Randy Samuels"
     ],
     "a": [
      "Michael Vollmer",
      "Henry Wang"
     ]
    }
   ],
   "subs": [
    "Yue Fei"
   ]
  },
  {
   "result": "away",
   "week": 5,
   "home": "Players Courtyard",
   "away": "Bounce Malvern Black",
   "time": "2025-09-20T14:00:00",
   "complete": true,
   "homePoints": 584,
   "awayPoints": 615,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Susan Debbs",
      "Jeff Lorman"
     ],
     "a": [
      "Stephanie Woomer",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kate Siedell",
      "Bennett Shanker"
     ],
     "a": [
      "Katherine Maruyama",
      "Brian Aguilar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Kim Hamilton",
      "Roger Graterol"
     ],
     "a": [
      "Vicki Main",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Helen Liu",
      "Marc Harden"
     ],
     "a": [
      "Jill Scully",
      "Jingwei Wu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Helen Liu",
      "Susan Debbs"
     ],
     "a": [
      "Katherine Maruyama",
      "Karen Moliver"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kim Hamilton",
      "Pam Boyd"
     ],
     "a": [
      "Vicki Main",
      "Jill Scully"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Marc Harden",
      "Roger Graterol"
     ],
     "a": [
      "Derek Le",
      "Brian Aguilar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jonathan Brand",
      "Jeff Lorman"
     ],
     "a": [
      "Keith Goldberg",
      "Jingwei Wu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kim Hamilton",
      "Marc Harden"
     ],
     "a": [
      "Karen Moliver",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Susan Debbs",
      "Roger Graterol"
     ],
     "a": [
      "Stephanie Woomer",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Helen Liu",
      "Jonathan Brand"
     ],
     "a": [
      "Katherine Maruyama",
      "Brian Aguilar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Kate Siedell",
      "Bennett Shanker"
     ],
     "a": [
      "Jill Scully",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Pam Boyd",
      "Kate Siedell"
     ],
     "a": [
      "Karen Moliver",
      "Jill Scully"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Helen Liu",
      "Susan Debbs"
     ],
     "a": [
      "Stephanie Woomer",
      "Vicki Main"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Bennett Shanker",
      "Jonathan Brand"
     ],
     "a": [
      "Derek Le",
      "Jingwei Wu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jeff Lorman",
      "Roger Graterol"
     ],
     "a": [
      "Jim Darcangelo",
      "Brian Aguilar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Pam Boyd",
      "Bennett Shanker"
     ],
     "a": [
      "Karen Moliver",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Kate Siedell",
      "Jeff Lorman"
     ],
     "a": [
      "Stephanie Woomer",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Susan Debbs",
      "Marc Harden"
     ],
     "a": [
      "Katherine Maruyama",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Helen Liu",
      "Roger Graterol"
     ],
     "a": [
      "Vicki Main",
      "Jingwei Wu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Susan Debbs",
      "Kim Hamilton"
     ],
     "a": [
      "Karen Moliver",
      "Katherine Maruyama"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Pam Boyd",
      "Helen Liu"
     ],
     "a": [
      "Jill Scully",
      "Stephanie Woomer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Marc Harden",
      "Roger Graterol"
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
      "Jeff Lorman",
      "Jonathan Brand"
     ],
     "a": [
      "Keith Goldberg",
      "Brian Aguilar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Kim Hamilton",
      "Marc Harden"
     ],
     "a": [
      "Karen Moliver",
      "Brian Aguilar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Susan Debbs",
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
     "hs": 19,
     "as": 21,
     "h": [
      "Kate Siedell",
      "Jonathan Brand"
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
     "as": 12,
     "h": [
      "Pam Boyd",
      "Bennett Shanker"
     ],
     "a": [
      "Jill Scully",
      "Jingwei Wu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Pam Boyd",
      "Kate Siedell"
     ],
     "a": [
      "Stephanie Woomer",
      "Jill Scully"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kim Hamilton",
      "Susan Debbs"
     ],
     "a": [
      "Katherine Maruyama",
      "Vicki Main"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jonathan Brand",
      "Bennett Shanker"
     ],
     "a": [
      "Jim Darcangelo",
      "Jingwei Wu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Roger Graterol",
      "Jeff Lorman"
     ],
     "a": [
      "Keith Goldberg",
      "Brian Aguilar"
     ]
    }
   ],
   "subs": [
    "Helen Liu"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "Pickleball Palace",
   "away": "Monroe",
   "time": "2025-09-20T14:00:00",
   "complete": true,
   "homePoints": 625,
   "awayPoints": 544,
   "homeGW": 22,
   "awayGW": 10,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Sinitra Siengsanaoh",
      "Charlie Johnston"
     ],
     "a": [
      "Pam Friedman",
      "Don Godinez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Andrea Dellechiaie",
      "Marr Flores"
     ],
     "a": [
      "Susan Kapit",
      "Scott Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kate Curren",
      "Toby Mcmahan"
     ],
     "a": [
      "Manju Shah",
      "Guy Ohn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Amanda Quinn",
      "John Burke"
     ],
     "a": [
      "Meryl Nadler",
      "Glenn Hillman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kate Curren",
      "Andrea Dellechiaie"
     ],
     "a": [
      "Pam Friedman",
      "Hayley Yandoli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Jill Lesnik",
      "Sinitra Siengsanaoh"
     ],
     "a": [
      "Susan Kapit",
      "Manju Shah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Charlie Johnston",
      "Marr Flores"
     ],
     "a": [
      "Don Godinez",
      "Glenn Hillman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "John Burke",
      "Toby Mcmahan"
     ],
     "a": [
      "Aaron Pine",
      "Scott Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Andrea Dellechiaie",
      "Marr Flores"
     ],
     "a": [
      "Meryl Nadler",
      "Don Godinez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jill Lesnik",
      "Charlie Johnston"
     ],
     "a": [
      "Susan Kapit",
      "Guy Ohn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Sinitra Siengsanaoh",
      "John Burke"
     ],
     "a": [
      "Manju Shah",
      "Aaron Pine"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Amanda Quinn",
      "Toby Mcmahan"
     ],
     "a": [
      "Hayley Yandoli",
      "Scott Friedman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Amanda Quinn",
      "Kate Curren"
     ],
     "a": [
      "Hayley Yandoli",
      "Manju Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jill Lesnik",
      "Andrea Dellechiaie"
     ],
     "a": [
      "Meryl Nadler",
      "Pam Friedman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Toby Mcmahan",
      "Charlie Johnston"
     ],
     "a": [
      "Glenn Hillman",
      "Scott Friedman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Louis Vessichelli",
      "Marr Flores"
     ],
     "a": [
      "Guy Ohn",
      "Aaron Pine"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kate Curren",
      "Toby Mcmahan"
     ],
     "a": [
      "Susan Kapit",
      "Aaron Pine"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Andrea Dellechiaie",
      "Louis Vessichelli"
     ],
     "a": [
      "Meryl Nadler",
      "Scott Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Sinitra Siengsanaoh",
      "John Burke"
     ],
     "a": [
      "Pam Friedman",
      "Glenn Hillman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Amanda Quinn",
      "Marr Flores"
     ],
     "a": [
      "Hayley Yandoli",
      "Don Godinez"
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
      "Susan Kapit",
      "Meryl Nadler"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jill Lesnik",
      "Amanda Quinn"
     ],
     "a": [
      "Manju Shah",
      "Hayley Yandoli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "John Burke",
      "Louis Vessichelli"
     ],
     "a": [
      "Aaron Pine",
      "Don Godinez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Charlie Johnston",
      "Marr Flores"
     ],
     "a": [
      "Glenn Hillman",
      "Guy Ohn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kate Curren",
      "Charlie Johnston"
     ],
     "a": [
      "Susan Kapit",
      "Glenn Hillman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Amanda Quinn",
      "John Burke"
     ],
     "a": [
      "Meryl Nadler",
      "Guy Ohn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sinitra Siengsanaoh",
      "Toby Mcmahan"
     ],
     "a": [
      "Manju Shah",
      "Aaron Pine"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jill Lesnik",
      "Louis Vessichelli"
     ],
     "a": [
      "Hayley Yandoli",
      "Scott Friedman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Amanda Quinn",
      "Jill Lesnik"
     ],
     "a": [
      "Meryl Nadler",
      "Hayley Yandoli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Kate Curren",
      "Sinitra Siengsanaoh"
     ],
     "a": [
      "Pam Friedman",
      "Susan Kapit"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Louis Vessichelli",
      "Marr Flores"
     ],
     "a": [
      "Glenn Hillman",
      "Scott Friedman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "John Burke",
      "Charlie Johnston"
     ],
     "a": [
      "Don Godinez",
      "Guy Ohn"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 6,
   "home": "Flemington",
   "away": "Monroe",
   "time": "2025-09-27T12:00:00",
   "complete": true,
   "homePoints": 629,
   "awayPoints": 597,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kristen Soucie",
      "Eric Luque"
     ],
     "a": [
      "Pam Friedman",
      "Don Godinez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Aimee Castellano",
      "Bob Drinane"
     ],
     "a": [
      "Barbara Hess",
      "Guy Ohn"
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
      "Rosalyn Goldsmith",
      "Scott Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Sue Johnson",
      "Art Muth"
     ],
     "a": [
      "Meryl Nadler",
      "Sergey Sprikut"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Aimee Castellano",
      "Tara Kramer"
     ],
     "a": [
      "Barbara Hess",
      "Meryl Nadler"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Amy Johnson",
      "Kristen Soucie"
     ],
     "a": [
      "Rosalyn Goldsmith",
      "Pam Friedman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Robert Grath",
      "Art Muth"
     ],
     "a": [
      "Sergey Sprikut",
      "Scott Friedman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "David Osborne",
      "Eric Luque"
     ],
     "a": [
      "Guy Ohn",
      "Eliezer Mintz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Amy Johnson",
      "David Osborne"
     ],
     "a": [
      "Rosalyn Goldsmith",
      "Sergey Sprikut"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Aimee Castellano",
      "Bob Drinane"
     ],
     "a": [
      "Pam Friedman",
      "Guy Ohn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kristen Soucie",
      "Robert Grath"
     ],
     "a": [
      "Meryl Nadler",
      "Don Godinez"
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
      "Barbara Hess",
      "Eliezer Mintz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Aimee Castellano",
      "Tara Kramer"
     ],
     "a": [
      "Pam Friedman",
      "Barbara Hess"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Sue Johnson",
      "Amy Johnson"
     ],
     "a": [
      "Rosalyn Goldsmith",
      "Meryl Nadler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Robert Grath",
      "Bob Drinane"
     ],
     "a": [
      "Don Godinez",
      "Sergey Sprikut"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Eric Luque",
      "David Osborne"
     ],
     "a": [
      "Eliezer Mintz",
      "Scott Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Tara Kramer",
      "Bob Drinane"
     ],
     "a": [
      "Meryl Nadler",
      "Eliezer Mintz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Aimee Castellano",
      "Eric Luque"
     ],
     "a": [
      "Rosalyn Goldsmith",
      "Guy Ohn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Sue Johnson",
      "David Osborne"
     ],
     "a": [
      "Barbara Hess",
      "Scott Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kristen Soucie",
      "Art Muth"
     ],
     "a": [
      "Pam Friedman",
      "Sergey Sprikut"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Aimee Castellano",
      "Amy Johnson"
     ],
     "a": [
      "Rosalyn Goldsmith",
      "Barbara Hess"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Kristen Soucie",
      "Tara Kramer"
     ],
     "a": [
      "Meryl Nadler",
      "Pam Friedman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Art Muth",
      "Eric Luque"
     ],
     "a": [
      "Guy Ohn",
      "Scott Friedman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Robert Grath",
      "Bob Drinane"
     ],
     "a": [
      "Eliezer Mintz",
      "Don Godinez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kristen Soucie",
      "Bob Drinane"
     ],
     "a": [
      "Pam Friedman",
      "Sergey Sprikut"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Aimee Castellano",
      "David Osborne"
     ],
     "a": [
      "Rosalyn Goldsmith",
      "Don Godinez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sue Johnson",
      "Robert Grath"
     ],
     "a": [
      "Barbara Hess",
      "Scott Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Amy Johnson",
      "Eric Luque"
     ],
     "a": [
      "Meryl Nadler",
      "Guy Ohn"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Aimee Castellano",
      "Sue Johnson"
     ],
     "a": [
      "Barbara Hess",
      "Meryl Nadler"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Amy Johnson",
      "Tara Kramer"
     ],
     "a": [
      "Rosalyn Goldsmith",
      "Pam Friedman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Eric Luque",
      "Bob Drinane"
     ],
     "a": [
      "Guy Ohn",
      "Scott Friedman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Robert Grath",
      "Art Muth"
     ],
     "a": [
      "Eliezer Mintz",
      "Sergey Sprikut"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 6,
   "home": "Home Court",
   "away": "The Atlantic Club",
   "time": "2025-09-27T13:00:00",
   "complete": true,
   "homePoints": 609,
   "awayPoints": 616,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sarah Mcparland",
      "Clifford Luster"
     ],
     "a": [
      "Alice Napolitano",
      "Joe Palumbo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Surbhi Sabharwal",
      "Emil Pescatore"
     ],
     "a": [
      "Eva Danieli",
      "Hal Greenspan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kimberly Schwartz",
      "Jhon Cifuentes"
     ],
     "a": [
      "Tanya Kenney",
      "Andrew Hyman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Karan Pescatore",
      "Robert Huntley"
     ],
     "a": [
      "Janet Bellaran",
      "Robert Toledo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Karan Pescatore",
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
     "hs": 20,
     "as": 22,
     "h": [
      "Surbhi Sabharwal",
      "Kajal Sinkar"
     ],
     "a": [
      "Tanya Kenney",
      "Janet Bellaran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "George Mandl",
      "Clifford Luster"
     ],
     "a": [
      "Joe Palumbo",
      "Hal Greenspan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Emil Pescatore",
      "Robert Huntley"
     ],
     "a": [
      "Andrew Hyman",
      "Robert Toledo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Sarah Mcparland",
      "Clifford Luster"
     ],
     "a": [
      "Eva Danieli",
      "Joe Palumbo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Surbhi Sabharwal",
      "Jhon Cifuentes"
     ],
     "a": [
      "Alice Napolitano",
      "Hal Greenspan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Kimberly Schwartz",
      "George Mandl"
     ],
     "a": [
      "Tanya Kenney",
      "Robert Toledo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Karan Pescatore",
      "Emil Pescatore"
     ],
     "a": [
      "Janet Bellaran",
      "Andrew Hyman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Karan Pescatore",
      "Surbhi Sabharwal"
     ],
     "a": [
      "Eva Danieli",
      "Janet Bellaran"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kimberly Schwartz",
      "Kajal Sinkar"
     ],
     "a": [
      "Alice Napolitano",
      "Tanya Kenney"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jhon Cifuentes",
      "Robert Huntley"
     ],
     "a": [
      "Joe Palumbo",
      "Robert Toledo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Emil Pescatore",
      "Clifford Luster"
     ],
     "a": [
      "Andrew Hyman",
      "Hal Greenspan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Karan Pescatore",
      "Robert Huntley"
     ],
     "a": [
      "Alice Napolitano",
      "Joe Palumbo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Sarah Mcparland",
      "Emil Pescatore"
     ],
     "a": [
      "Janet Bellaran",
      "Hal Greenspan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kajal Sinkar",
      "George Mandl"
     ],
     "a": [
      "Eva Danieli",
      "Robert Toledo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kimberly Schwartz",
      "Jhon Cifuentes"
     ],
     "a": [
      "Tanya Kenney",
      "Andrew Hyman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Kimberly Schwartz",
      "Karan Pescatore"
     ],
     "a": [
      "Eva Danieli",
      "Tanya Kenney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Surbhi Sabharwal",
      "Sarah Mcparland"
     ],
     "a": [
      "Janet Bellaran",
      "Alice Napolitano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Emil Pescatore",
      "George Mandl"
     ],
     "a": [
      "Joe Palumbo",
      "Hal Greenspan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Clifford Luster",
      "Robert Huntley"
     ],
     "a": [
      "Andrew Hyman",
      "Robert Toledo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Karan Pescatore",
      "George Mandl"
     ],
     "a": [
      "Eva Danieli",
      "Joe Palumbo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Surbhi Sabharwal",
      "Emil Pescatore"
     ],
     "a": [
      "Alice Napolitano",
      "Hal Greenspan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Kajal Sinkar",
      "Jhon Cifuentes"
     ],
     "a": [
      "Janet Bellaran",
      "Andrew Hyman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Kimberly Schwartz",
      "Robert Huntley"
     ],
     "a": [
      "Tanya Kenney",
      "Robert Toledo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Karan Pescatore",
      "Surbhi Sabharwal"
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
     "as": 23,
     "h": [
      "Sarah Mcparland",
      "Kajal Sinkar"
     ],
     "a": [
      "Tanya Kenney",
      "Janet Bellaran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "George Mandl",
      "Clifford Luster"
     ],
     "a": [
      "Joe Palumbo",
      "Andrew Hyman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Emil Pescatore",
      "Jhon Cifuentes"
     ],
     "a": [
      "Hal Greenspan",
      "Robert Toledo"
     ]
    }
   ],
   "subs": [
    "Karan Pescatore",
    "Emil Pescatore"
   ]
  },
  {
   "result": "home",
   "week": 6,
   "home": "Players Courtyard",
   "away": "Pickle Place",
   "time": "2025-09-27T14:00:00",
   "complete": true,
   "homePoints": 621,
   "awayPoints": 569,
   "homeGW": 19,
   "awayGW": 13,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Helen Liu",
      "Marc Harden"
     ],
     "a": [
      "Harriet Levin",
      "Bruce Aronow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kate Siedell",
      "Bennett Shanker"
     ],
     "a": [
      "Janet Garrity",
      "Tom Zentmeyer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Stacey Frank",
      "Roger Graterol"
     ],
     "a": [
      "Valerie Interrante",
      "David Eisen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Vita Mulholland",
      "Brad Daddis"
     ],
     "a": [
      "Jane Meng",
      "Stephen Hanak"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Helen Liu",
      "Stacey Frank"
     ],
     "a": [
      "Harriet Levin",
      "Laura Kang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Vita Mulholland",
      "Kate Siedell"
     ],
     "a": [
      "Jane Meng",
      "Valerie Interrante"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Craig Frame",
      "Brad Daddis"
     ],
     "a": [
      "Tom Zentmeyer",
      "Jonathan Goldner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Roger Graterol",
      "Marc Harden"
     ],
     "a": [
      "David Eisen",
      "Stephen Hanak"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Helen Liu",
      "Roger Graterol"
     ],
     "a": [
      "Harriet Levin",
      "Tom Zentmeyer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Stacey Frank",
      "Craig Frame"
     ],
     "a": [
      "Janet Garrity",
      "Jonathan Goldner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kate Siedell",
      "Bennett Shanker"
     ],
     "a": [
      "Laura Kang",
      "David Eisen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Vita Mulholland",
      "Marc Harden"
     ],
     "a": [
      "Jane Meng",
      "Bruce Aronow"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kate Siedell",
      "Helen Liu"
     ],
     "a": [
      "Harriet Levin",
      "Valerie Interrante"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Stacey Frank",
      "Vita Mulholland"
     ],
     "a": [
      "Janet Garrity",
      "Laura Kang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Roger Graterol",
      "Craig Frame"
     ],
     "a": [
      "Tom Zentmeyer",
      "Bruce Aronow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Bennett Shanker",
      "Brad Daddis"
     ],
     "a": [
      "Jonathan Goldner",
      "Stephen Hanak"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Stacey Frank",
      "Craig Frame"
     ],
     "a": [
      "Harriet Levin",
      "Jonathan Goldner"
     ]
    },
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
      "Janet Garrity",
      "Tom Zentmeyer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Vita Mulholland",
      "Brad Daddis"
     ],
     "a": [
      "Jane Meng",
      "David Eisen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Helen Liu",
      "Roger Graterol"
     ],
     "a": [
      "Valerie Interrante",
      "Stephen Hanak"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Helen Liu",
      "Stacey Frank"
     ],
     "a": [
      "Harriet Levin",
      "Valerie Interrante"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Vita Mulholland",
      "Kate Siedell"
     ],
     "a": [
      "Jane Meng",
      "Laura Kang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Roger Graterol",
      "Bennett Shanker"
     ],
     "a": [
      "Tom Zentmeyer",
      "Jonathan Goldner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Marc Harden",
      "Craig Frame"
     ],
     "a": [
      "Bruce Aronow",
      "David Eisen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Helen Liu",
      "Craig Frame"
     ],
     "a": [
      "Harriet Levin",
      "Tom Zentmeyer"
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
      "Janet Garrity",
      "Bruce Aronow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Vita Mulholland",
      "Roger Graterol"
     ],
     "a": [
      "Valerie Interrante",
      "David Eisen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Stacey Frank",
      "Brad Daddis"
     ],
     "a": [
      "Laura Kang",
      "Stephen Hanak"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Stacey Frank",
      "Kate Siedell"
     ],
     "a": [
      "Harriet Levin",
      "Laura Kang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Helen Liu",
      "Vita Mulholland"
     ],
     "a": [
      "Janet Garrity",
      "Jane Meng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Craig Frame",
      "Roger Graterol"
     ],
     "a": [
      "Tom Zentmeyer",
      "Bruce Aronow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Brad Daddis",
      "Bennett Shanker"
     ],
     "a": [
      "Jonathan Goldner",
      "Stephen Hanak"
     ]
    }
   ],
   "subs": [
    "Vita Mulholland",
    "Craig Frame",
    "Helen Liu"
   ]
  },
  {
   "result": "home",
   "week": 6,
   "home": "Bounce Malvern Black",
   "away": "Pickle House",
   "time": "2025-09-27T14:30:00",
   "complete": true,
   "homePoints": 676,
   "awayPoints": 404,
   "homeGW": 32,
   "awayGW": 0,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Katherine Maruyama",
      "Jim Darcangelo"
     ],
     "a": [
      "Wei Zhu",
      "Nanjun Qian"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Judy Qiu",
      "Keith Goldberg"
     ],
     "a": [
      "Susan Zhang",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jill Scully",
      "Derek Le"
     ],
     "a": [
      "Judy Liu",
      "Peilin Zhang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kristina Rhodes",
      "Michael Finkelstein"
     ],
     "a": [
      "Carolyn Dardani-Horensky",
      "Michael Vollmer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Katherine Maruyama",
      "Karen Moliver"
     ],
     "a": [
      "Susan Zhang",
      "Carolyn Dardani-Horensky"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jill Scully",
      "Judy Qiu"
     ],
     "a": [
      "Wei Zhu",
      "Judy Liu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Keith Goldberg",
      "Derek Le"
     ],
     "a": [
      "Ping Peng",
      "Lance Brown"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Brian Aguilar",
      "Michael Finkelstein"
     ],
     "a": [
      "Nanjun Qian",
      "Peilin Zhang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Judy Qiu",
      "Brian Aguilar"
     ],
     "a": [
      "Carolyn Dardani-Horensky",
      "Ping Peng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jill Scully",
      "Derek Le"
     ],
     "a": [
      "Susan Zhang",
      "Michael Vollmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Karen Moliver",
      "Jim Darcangelo"
     ],
     "a": [
      "Wei Zhu",
      "Peilin Zhang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kristina Rhodes",
      "Michael Finkelstein"
     ],
     "a": [
      "Judy Liu",
      "Henry Wang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Karen Moliver",
      "Judy Qiu"
     ],
     "a": [
      "Susan Zhang",
      "Wei Zhu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Katherine Maruyama",
      "Jill Scully"
     ],
     "a": [
      "Carolyn Dardani-Horensky",
      "Judy Liu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Keith Goldberg",
      "Brian Aguilar"
     ],
     "a": [
      "Lance Brown",
      "Ping Peng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Derek Le",
      "Jim Darcangelo"
     ],
     "a": [
      "Michael Vollmer",
      "Peilin Zhang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Jill Scully",
      "Brian Aguilar"
     ],
     "a": [
      "Wei Zhu",
      "Nanjun Qian"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Karen Moliver",
      "Jim Darcangelo"
     ],
     "a": [
      "Susan Zhang",
      "Ping Peng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Katherine Maruyama",
      "Michael Finkelstein"
     ],
     "a": [
      "Carolyn Dardani-Horensky",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Kristina Rhodes",
      "Keith Goldberg"
     ],
     "a": [
      "Judy Liu",
      "Henry Wang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Jill Scully",
      "Judy Qiu"
     ],
     "a": [
      "Susan Zhang",
      "Wei Zhu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Katherine Maruyama",
      "Karen Moliver"
     ],
     "a": [
      "Carolyn Dardani-Horensky",
      "Judy Liu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Michael Finkelstein",
      "Derek Le"
     ],
     "a": [
      "Nanjun Qian",
      "Henry Wang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Brian Aguilar",
      "Jim Darcangelo"
     ],
     "a": [
      "Michael Vollmer",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Katherine Maruyama",
      "Derek Le"
     ],
     "a": [
      "Susan Zhang",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kristina Rhodes",
      "Keith Goldberg"
     ],
     "a": [
      "Wei Zhu",
      "Ping Peng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Karen Moliver",
      "Brian Aguilar"
     ],
     "a": [
      "Carolyn Dardani-Horensky",
      "Henry Wang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Judy Qiu",
      "Michael Finkelstein"
     ],
     "a": [
      "Judy Liu",
      "Michael Vollmer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Katherine Maruyama",
      "Jill Scully"
     ],
     "a": [
      "Susan Zhang",
      "Carolyn Dardani-Horensky"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Judy Qiu",
      "Karen Moliver"
     ],
     "a": [
      "Wei Zhu",
      "Judy Liu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Keith Goldberg",
      "Derek Le"
     ],
     "a": [
      "Ping Peng",
      "Nanjun Qian"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Michael Finkelstein",
      "Jim Darcangelo"
     ],
     "a": [
      "Peilin Zhang",
      "Henry Wang"
     ]
    }
   ],
   "subs": [
    "Kristina Rhodes"
   ]
  },
  {
   "result": "home",
   "week": 7,
   "home": "Home Court",
   "away": "Pickleball Palace",
   "time": "2025-10-04T13:00:00",
   "complete": true,
   "homePoints": 657,
   "awayPoints": 623,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Sharon Streit",
      "George Mandl"
     ],
     "a": [
      "Debbie Tovitz",
      "Brian Gonzalez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Andrea Smith",
      "Michael Vincent"
     ],
     "a": [
      "Jennifer Burke",
      "John Burke"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kajal Sinkar",
      "Carlo Caronan"
     ],
     "a": [
      "Lydia Fiore",
      "John Chalerm"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 29,
     "as": 27,
     "h": [
      "Sarah Mcparland",
      "Jhon Cifuentes"
     ],
     "a": [
      "Oliveira Karen",
      "Mike Giampapa"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Sarah Mcparland",
      "Sharon Streit"
     ],
     "a": [
      "Debbie Tovitz",
      "Lydia Fiore"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Andrea Smith",
      "Kajal Sinkar"
     ],
     "a": [
      "Sinitra Siengsanaoh",
      "Jennifer Burke"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Michael Vincent",
      "Carlo Caronan"
     ],
     "a": [
      "Charlie Johnston",
      "John Burke"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jhon Cifuentes",
      "George Mandl"
     ],
     "a": [
      "Mike Giampapa",
      "John Chalerm"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sharon Streit",
      "George Mandl"
     ],
     "a": [
      "Debbie Tovitz",
      "Charlie Johnston"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Andrea Smith",
      "Carlo Caronan"
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
     "as": 9,
     "h": [
      "Sarah Mcparland",
      "Michael Vincent"
     ],
     "a": [
      "Oliveira Karen",
      "Brian Gonzalez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kajal Sinkar",
      "Jhon Cifuentes"
     ],
     "a": [
      "Sinitra Siengsanaoh",
      "John Chalerm"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kajal Sinkar",
      "Andrea Smith"
     ],
     "a": [
      "Debbie Tovitz",
      "Kate Curren"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Sarah Mcparland",
      "Sharon Streit"
     ],
     "a": [
      "Sinitra Siengsanaoh",
      "Jennifer Burke"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jhon Cifuentes",
      "Michael Vincent"
     ],
     "a": [
      "Charlie Johnston",
      "John Chalerm"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "George Mandl",
      "Carlo Caronan"
     ],
     "a": [
      "Mike Giampapa",
      "Louis Vessichelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kajal Sinkar",
      "Jhon Cifuentes"
     ],
     "a": [
      "Kate Curren",
      "Louis Vessichelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sharon Streit",
      "Michael Vincent"
     ],
     "a": [
      "Debbie Tovitz",
      "Charlie Johnston"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Sarah Mcparland",
      "George Mandl"
     ],
     "a": [
      "Lydia Fiore",
      "Brian Gonzalez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Andrea Smith",
      "Carlo Caronan"
     ],
     "a": [
      "Jennifer Burke",
      "Mike Giampapa"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Sarah Mcparland",
      "Andrea Smith"
     ],
     "a": [
      "Kate Curren",
      "Lydia Fiore"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sharon Streit",
      "Kajal Sinkar"
     ],
     "a": [
      "Oliveira Karen",
      "Jennifer Burke"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jhon Cifuentes",
      "George Mandl"
     ],
     "a": [
      "Brian Gonzalez",
      "Louis Vessichelli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Michael Vincent",
      "Carlo Caronan"
     ],
     "a": [
      "Mike Giampapa",
      "John Burke"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Sarah Mcparland",
      "Jhon Cifuentes"
     ],
     "a": [
      "Kate Curren",
      "Louis Vessichelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Sharon Streit",
      "Michael Vincent"
     ],
     "a": [
      "Oliveira Karen",
      "John Burke"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Andrea Smith",
      "George Mandl"
     ],
     "a": [
      "Lydia Fiore",
      "Charlie Johnston"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kajal Sinkar",
      "Carlo Caronan"
     ],
     "a": [
      "Sinitra Siengsanaoh",
      "John Chalerm"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Sharon Streit",
      "Kajal Sinkar"
     ],
     "a": [
      "Kate Curren",
      "Lydia Fiore"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Andrea Smith",
      "Sarah Mcparland"
     ],
     "a": [
      "Oliveira Karen",
      "Sinitra Siengsanaoh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jhon Cifuentes",
      "Michael Vincent"
     ],
     "a": [
      "Brian Gonzalez",
      "Louis Vessichelli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "George Mandl",
      "Carlo Caronan"
     ],
     "a": [
      "Charlie Johnston",
      "John Burke"
     ]
    }
   ],
   "subs": [
    "John Chalerm"
   ]
  },
  {
   "result": "away",
   "week": 7,
   "home": "Flemington",
   "away": "Bounce Malvern Black",
   "time": "2025-10-04T14:00:00",
   "complete": true,
   "homePoints": 547,
   "awayPoints": 653,
   "homeGW": 7,
   "awayGW": 25,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sue Lyle",
      "Todd Stein"
     ],
     "a": [
      "Jill Scully",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Denise Richmond",
      "Art Muth"
     ],
     "a": [
      "Vicki Main",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 28,
     "h": [
      "Tara Kramer",
      "Bob Drinane"
     ],
     "a": [
      "Katherine Maruyama",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kristen Soucie",
      "Eric Luque"
     ],
     "a": [
      "Stephanie Woomer",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Denise Richmond",
      "Tara Kramer"
     ],
     "a": [
      "Katherine Maruyama",
      "Jennifer Wang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kristen Soucie",
      "Sue Lyle"
     ],
     "a": [
      "Jill Scully",
      "Vicki Main"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Bob Drinane",
      "Eric Luque"
     ],
     "a": [
      "Jingwei Wu",
      "Derek Le"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "David Osborne",
      "Todd Stein"
     ],
     "a": [
      "Jim Darcangelo",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Sue Lyle",
      "Eric Luque"
     ],
     "a": [
      "Stephanie Woomer",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Tara Kramer",
      "David Osborne"
     ],
     "a": [
      "Jennifer Wang",
      "Jingwei Wu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kristen Soucie",
      "Art Muth"
     ],
     "a": [
      "Katherine Maruyama",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Denise Richmond",
      "Bob Drinane"
     ],
     "a": [
      "Jill Scully",
      "Keith Goldberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kristen Soucie",
      "Denise Richmond"
     ],
     "a": [
      "Vicki Main",
      "Jill Scully"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Tara Kramer",
      "Sue Lyle"
     ],
     "a": [
      "Jennifer Wang",
      "Stephanie Woomer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "David Osborne",
      "Art Muth"
     ],
     "a": [
      "Jim Darcangelo",
      "Derek Le"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Bob Drinane",
      "Todd Stein"
     ],
     "a": [
      "Michael Finkelstein",
      "Jingwei Wu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sue Lyle",
      "Art Muth"
     ],
     "a": [
      "Jennifer Wang",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Denise Richmond",
      "Todd Stein"
     ],
     "a": [
      "Stephanie Woomer",
      "Michael Finkelstein"
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
      "Kristen Soucie",
      "David Osborne"
     ],
     "a": [
      "Katherine Maruyama",
      "Jingwei Wu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Denise Richmond",
      "Kristen Soucie"
     ],
     "a": [
      "Katherine Maruyama",
      "Stephanie Woomer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Tara Kramer",
      "Sue Lyle"
     ],
     "a": [
      "Jill Scully",
      "Jennifer Wang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Eric Luque",
      "Bob Drinane"
     ],
     "a": [
      "Keith Goldberg",
      "Jingwei Wu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Art Muth",
      "Todd Stein"
     ],
     "a": [
      "Jim Darcangelo",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kristen Soucie",
      "Eric Luque"
     ],
     "a": [
      "Jill Scully",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Tara Kramer",
      "Todd Stein"
     ],
     "a": [
      "Vicki Main",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Sue Lyle",
      "Bob Drinane"
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
      "Denise Richmond",
      "David Osborne"
     ],
     "a": [
      "Jennifer Wang",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Denise Richmond",
      "Sue Lyle"
     ],
     "a": [
      "Vicki Main",
      "Stephanie Woomer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kristen Soucie",
      "Tara Kramer"
     ],
     "a": [
      "Jill Scully",
      "Katherine Maruyama"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "David Osborne",
      "Bob Drinane"
     ],
     "a": [
      "Keith Goldberg",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Eric Luque",
      "Art Muth"
     ],
     "a": [
      "Jingwei Wu",
      "Derek Le"
     ]
    }
   ],
   "subs": [
    "Sue Lyle"
   ]
  },
  {
   "result": "away",
   "week": 7,
   "home": "Monroe",
   "away": "The Atlantic Club",
   "time": "2025-10-04T14:00:00",
   "complete": true,
   "homePoints": 614,
   "awayPoints": 669,
   "homeGW": 11,
   "awayGW": 21,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 35,
     "as": 33,
     "h": [
      "Barbara Hess",
      "Guy Ohn"
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
      "Rosalyn Goldsmith",
      "Don Godinez"
     ],
     "a": [
      "Eva Danieli",
      "Robert Toledo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Meryl Nadler",
      "Aaron Pine"
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
     "as": 23,
     "h": [
      "Hayley Yandoli",
      "Eliezer Mintz"
     ],
     "a": [
      "Janet Bellaran",
      "Darren Saks"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Rosalyn Goldsmith",
      "Hayley Yandoli"
     ],
     "a": [
      "Natasha De Carvalho",
      "Liz Cuozzo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Meryl Nadler",
      "Barbara Hess"
     ],
     "a": [
      "Eva Danieli",
      "Janet Bellaran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Guy Ohn",
      "Sergey Sprikut"
     ],
     "a": [
      "Andrew Hyman",
      "Brad Oldham"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Don Godinez",
      "Eliezer Mintz"
     ],
     "a": [
      "Robert Toledo",
      "Darren Saks"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Hayley Yandoli",
      "Guy Ohn"
     ],
     "a": [
      "Natasha De Carvalho",
      "Andrew Hyman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Meryl Nadler",
      "Sergey Sprikut"
     ],
     "a": [
      "Liz Cuozzo",
      "Darren Saks"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Barbara Hess",
      "Eliezer Mintz"
     ],
     "a": [
      "Eva Danieli",
      "Brad Oldham"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Rosalyn Goldsmith",
      "Aaron Pine"
     ],
     "a": [
      "Janet Bellaran",
      "Robert Toledo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Meryl Nadler",
      "Hayley Yandoli"
     ],
     "a": [
      "Natasha De Carvalho",
      "Janet Bellaran"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Barbara Hess",
      "Rosalyn Goldsmith"
     ],
     "a": [
      "Liz Cuozzo",
      "Eva Danieli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Guy Ohn",
      "Aaron Pine"
     ],
     "a": [
      "Andrew Hyman",
      "Darren Saks"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Don Godinez",
      "Sergey Sprikut"
     ],
     "a": [
      "Robert Toledo",
      "Brad Oldham"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Hayley Yandoli",
      "Aaron Pine"
     ],
     "a": [
      "Liz Cuozzo",
      "Andrew Hyman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Meryl Nadler",
      "Eliezer Mintz"
     ],
     "a": [
      "Natasha De Carvalho",
      "Brad Oldham"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Barbara Hess",
      "Sergey Sprikut"
     ],
     "a": [
      "Eva Danieli",
      "Robert Toledo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Rosalyn Goldsmith",
      "Don Godinez"
     ],
     "a": [
      "Janet Bellaran",
      "Darren Saks"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Meryl Nadler",
      "Rosalyn Goldsmith"
     ],
     "a": [
      "Eva Danieli",
      "Natasha De Carvalho"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Barbara Hess",
      "Hayley Yandoli"
     ],
     "a": [
      "Janet Bellaran",
      "Liz Cuozzo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Aaron Pine",
      "Sergey Sprikut"
     ],
     "a": [
      "Brad Oldham",
      "Andrew Hyman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Guy Ohn",
      "Eliezer Mintz"
     ],
     "a": [
      "Robert Toledo",
      "Darren Saks"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Barbara Hess",
      "Guy Ohn"
     ],
     "a": [
      "Natasha De Carvalho",
      "Andrew Hyman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Hayley Yandoli",
      "Sergey Sprikut"
     ],
     "a": [
      "Eva Danieli",
      "Brad Oldham"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Rosalyn Goldsmith",
      "Eliezer Mintz"
     ],
     "a": [
      "Janet Bellaran",
      "Robert Toledo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Meryl Nadler",
      "Don Godinez"
     ],
     "a": [
      "Liz Cuozzo",
      "Darren Saks"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Meryl Nadler",
      "Hayley Yandoli"
     ],
     "a": [
      "Eva Danieli",
      "Natasha De Carvalho"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Barbara Hess",
      "Rosalyn Goldsmith"
     ],
     "a": [
      "Janet Bellaran",
      "Liz Cuozzo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Guy Ohn",
      "Don Godinez"
     ],
     "a": [
      "Andrew Hyman",
      "Robert Toledo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Eliezer Mintz",
      "Aaron Pine"
     ],
     "a": [
      "Darren Saks",
      "Brad Oldham"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 7,
   "home": "Players Courtyard",
   "away": "Pickle House",
   "time": "2025-10-04T14:00:00",
   "complete": true,
   "homePoints": 657,
   "awayPoints": 524,
   "homeGW": 23,
   "awayGW": 9,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Vita Mulholland",
      "Jonathan Brand"
     ],
     "a": [
      "Wei Zhu",
      "Nanjun Qian"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Stacey Frank",
      "Jeff Lorman"
     ],
     "a": [
      "Susan Zhang",
      "Michael Vollmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kate Siedell",
      "Bennett Shanker"
     ],
     "a": [
      "Lucy Li",
      "Ping Peng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Kim Hamilton",
      "Brad Daddis"
     ],
     "a": [
      "Lisa Shea",
      "Jitendra Arora"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kim Hamilton",
      "Elyse Diamond"
     ],
     "a": [
      "Lucy Li",
      "Lisa Shea"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kate Siedell",
      "Vita Mulholland"
     ],
     "a": [
      "Susan Zhang",
      "Carolyn Dardani-Horensky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Brad Daddis",
      "Craig Frame"
     ],
     "a": [
      "Jitendra Arora",
      "Ping Peng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jeff Lorman",
      "Jonathan Brand"
     ],
     "a": [
      "Nanjun Qian",
      "Henry Wang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Vita Mulholland",
      "Bennett Shanker"
     ],
     "a": [
      "Wei Zhu",
      "Henry Wang"
     ]
    },
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
      "Carolyn Dardani-Horensky",
      "Michael Vollmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Kim Hamilton",
      "Craig Frame"
     ],
     "a": [
      "Lucy Li",
      "Ping Peng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Stacey Frank",
      "Brad Daddis"
     ],
     "a": [
      "Lisa Shea",
      "Jitendra Arora"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kim Hamilton",
      "Vita Mulholland"
     ],
     "a": [
      "Lucy Li",
      "Lisa Shea"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Elyse Diamond",
      "Stacey Frank"
     ],
     "a": [
      "Susan Zhang",
      "Wei Zhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Craig Frame",
      "Jeff Lorman"
     ],
     "a": [
      "Jitendra Arora",
      "Ping Peng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Jonathan Brand",
      "Bennett Shanker"
     ],
     "a": [
      "Nanjun Qian",
      "Henry Wang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kate Siedell",
      "Jeff Lorman"
     ],
     "a": [
      "Carolyn Dardani-Horensky",
      "Michael Vollmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Vita Mulholland",
      "Bennett Shanker"
     ],
     "a": [
      "Wei Zhu",
      "Henry Wang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Stacey Frank",
      "Brad Daddis"
     ],
     "a": [
      "Lisa Shea",
      "Ping Peng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Elyse Diamond",
      "Craig Frame"
     ],
     "a": [
      "Susan Zhang",
      "Jitendra Arora"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Elyse Diamond",
      "Kim Hamilton"
     ],
     "a": [
      "Wei Zhu",
      "Lucy Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kate Siedell",
      "Stacey Frank"
     ],
     "a": [
      "Carolyn Dardani-Horensky",
      "Susan Zhang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jeff Lorman",
      "Brad Daddis"
     ],
     "a": [
      "Michael Vollmer",
      "Nanjun Qian"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Craig Frame",
      "Jonathan Brand"
     ],
     "a": [
      "Henry Wang",
      "Jitendra Arora"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Elyse Diamond",
      "Craig Frame"
     ],
     "a": [
      "Lucy Li",
      "Nanjun Qian"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Vita Mulholland",
      "Jonathan Brand"
     ],
     "a": [
      "Susan Zhang",
      "Michael Vollmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kate Siedell",
      "Bennett Shanker"
     ],
     "a": [
      "Lisa Shea",
      "Ping Peng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Kim Hamilton",
      "Brad Daddis"
     ],
     "a": [
      "Carolyn Dardani-Horensky",
      "Jitendra Arora"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Stacey Frank",
      "Kim Hamilton"
     ],
     "a": [
      "Lucy Li",
      "Wei Zhu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kate Siedell",
      "Vita Mulholland"
     ],
     "a": [
      "Lisa Shea",
      "Carolyn Dardani-Horensky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jonathan Brand",
      "Jeff Lorman"
     ],
     "a": [
      "Ping Peng",
      "Nanjun Qian"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Craig Frame",
      "Bennett Shanker"
     ],
     "a": [
      "Michael Vollmer",
      "Henry Wang"
     ]
    }
   ],
   "subs": [
    "Vita Mulholland",
    "Craig Frame"
   ]
  },
  {
   "result": "away",
   "week": 7,
   "home": "Bounce Malvern Blue",
   "away": "Pickle Place",
   "time": "2025-10-04T14:30:00",
   "complete": true,
   "homePoints": 526,
   "awayPoints": 687,
   "homeGW": 3,
   "awayGW": 29,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kathy BernéT",
      "Ed Gieske"
     ],
     "a": [
      "Janet Garrity",
      "Tom Zentmeyer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Lucy Chow",
      "William Brown"
     ],
     "a": [
      "Valerie Interrante",
      "Bruce Aronow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Christine Dugan",
      "David Marchese"
     ],
     "a": [
      "Janine Forrest",
      "Jonathan Goldner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Nancy Blank",
      "Tim Phelan"
     ],
     "a": [
      "Marykristin Haskell",
      "Eric Markowitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 29,
     "as": 31,
     "h": [
      "Lucy Chow",
      "Christine Dugan"
     ],
     "a": [
      "Janine Forrest",
      "Janet Garrity"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Nancy Blank",
      "Kathy BernéT"
     ],
     "a": [
      "Marykristin Haskell",
      "Laura Kang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Tim Phelan",
      "Patrik Grubb"
     ],
     "a": [
      "Jonathan Goldner",
      "Tom Zentmeyer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "David Marchese",
      "William Brown"
     ],
     "a": [
      "Eric Markowitz",
      "Z Zhang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kathy BernéT",
      "Ed Gieske"
     ],
     "a": [
      "Janet Garrity",
      "Jonathan Goldner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Christine Dugan",
      "William Brown"
     ],
     "a": [
      "Marykristin Haskell",
      "Bruce Aronow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Nancy Blank",
      "David Marchese"
     ],
     "a": [
      "Valerie Interrante",
      "Eric Markowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Lucy Chow",
      "Patrik Grubb"
     ],
     "a": [
      "Laura Kang",
      "Z Zhang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kathy BernéT",
      "Christine Dugan"
     ],
     "a": [
      "Janine Forrest",
      "Marykristin Haskell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Lucy Chow",
      "Nancy Blank"
     ],
     "a": [
      "Janet Garrity",
      "Valerie Interrante"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Ed Gieske",
      "Patrik Grubb"
     ],
     "a": [
      "Jonathan Goldner",
      "Tom Zentmeyer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "David Marchese",
      "Tim Phelan"
     ],
     "a": [
      "Bruce Aronow",
      "Z Zhang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Christine Dugan",
      "Ed Gieske"
     ],
     "a": [
      "Marykristin Haskell",
      "Tom Zentmeyer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Lucy Chow",
      "David Marchese"
     ],
     "a": [
      "Laura Kang",
      "Bruce Aronow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Nancy Blank",
      "Patrik Grubb"
     ],
     "a": [
      "Janine Forrest",
      "Eric Markowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Kathy BernéT",
      "William Brown"
     ],
     "a": [
      "Valerie Interrante",
      "Z Zhang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Nancy Blank",
      "Kathy BernéT"
     ],
     "a": [
      "Janine Forrest",
      "Janet Garrity"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lucy Chow",
      "Christine Dugan"
     ],
     "a": [
      "Laura Kang",
      "Valerie Interrante"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Tim Phelan",
      "Patrik Grubb"
     ],
     "a": [
      "Jonathan Goldner",
      "Bruce Aronow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Ed Gieske",
      "David Marchese"
     ],
     "a": [
      "Tom Zentmeyer",
      "Eric Markowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Nancy Blank",
      "Tim Phelan"
     ],
     "a": [
      "Janet Garrity",
      "Tom Zentmeyer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Lucy Chow",
      "William Brown"
     ],
     "a": [
      "Marykristin Haskell",
      "Bruce Aronow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kathy BernéT",
      "David Marchese"
     ],
     "a": [
      "Janine Forrest",
      "Jonathan Goldner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Christine Dugan",
      "Patrik Grubb"
     ],
     "a": [
      "Laura Kang",
      "Z Zhang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Nancy Blank",
      "Lucy Chow"
     ],
     "a": [
      "Janine Forrest",
      "Marykristin Haskell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kathy BernéT",
      "Christine Dugan"
     ],
     "a": [
      "Laura Kang",
      "Valerie Interrante"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ed Gieske",
      "Tim Phelan"
     ],
     "a": [
      "Jonathan Goldner",
      "Bruce Aronow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "William Brown",
      "Patrik Grubb"
     ],
     "a": [
      "Eric Markowitz",
      "Z Zhang"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 7,
   "home": "Pickleball Palace",
   "away": "Bounce Malvern Blue",
   "time": "2025-10-05T15:00:00",
   "complete": true,
   "homePoints": 653,
   "awayPoints": 579,
   "homeGW": 22,
   "awayGW": 10,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Laura Elleman",
      "John Burke"
     ],
     "a": [
      "Jodi Evans",
      "Jeremy Workman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Jennifer Burke",
      "Charlie Johnston"
     ],
     "a": [
      "Kathy BernéT",
      "Hal Golden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Lydia Fiore",
      "Toby Mcmahan"
     ],
     "a": [
      "Jamila Sefiane",
      "Ed Gieske"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Amanda Quinn",
      "Ricardo Lisojo"
     ],
     "a": [
      "Christine Dugan",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Laura Elleman",
      "Jennifer Burke"
     ],
     "a": [
      "Lucy Chow",
      "Christine Dugan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Amanda Quinn",
      "Oliveira Karen"
     ],
     "a": [
      "Jodi Evans",
      "Jamila Sefiane"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "John Burke",
      "Marr Flores"
     ],
     "a": [
      "Patrik Grubb",
      "Jeremy Workman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Toby Mcmahan",
      "Ricardo Lisojo"
     ],
     "a": [
      "Tim Phelan",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Jennifer Burke",
      "Bud Heller"
     ],
     "a": [
      "Kathy BernéT",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Laura Elleman",
      "John Burke"
     ],
     "a": [
      "Jodi Evans",
      "Ed Gieske"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Oliveira Karen",
      "Ricardo Lisojo"
     ],
     "a": [
      "Christine Dugan",
      "Hal Golden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lydia Fiore",
      "Toby Mcmahan"
     ],
     "a": [
      "Lucy Chow",
      "Patrik Grubb"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Laura Elleman",
      "Lydia Fiore"
     ],
     "a": [
      "Jamila Sefiane",
      "Lucy Chow"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kate Curren",
      "Jennifer Burke"
     ],
     "a": [
      "Kathy BernéT",
      "Christine Dugan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Charlie Johnston",
      "Toby Mcmahan"
     ],
     "a": [
      "Jeremy Workman",
      "Hal Golden"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Marr Flores",
      "Ricardo Lisojo"
     ],
     "a": [
      "Tim Phelan",
      "Ed Gieske"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Amanda Quinn",
      "Toby Mcmahan"
     ],
     "a": [
      "Jodi Evans",
      "Hal Golden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Oliveira Karen",
      "Ricardo Lisojo"
     ],
     "a": [
      "Jamila Sefiane",
      "Tim Phelan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Laura Elleman",
      "Charlie Johnston"
     ],
     "a": [
      "Lucy Chow",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jennifer Burke",
      "Bud Heller"
     ],
     "a": [
      "Kathy BernéT",
      "Patrik Grubb"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kate Curren",
      "Amanda Quinn"
     ],
     "a": [
      "Christine Dugan",
      "Jodi Evans"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Laura Elleman",
      "Jennifer Burke"
     ],
     "a": [
      "Jamila Sefiane",
      "Lucy Chow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Bud Heller",
      "Marr Flores"
     ],
     "a": [
      "Jeremy Workman",
      "Tim Phelan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Charlie Johnston",
      "John Burke"
     ],
     "a": [
      "Patrik Grubb",
      "Ed Gieske"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lydia Fiore",
      "John Burke"
     ],
     "a": [
      "Lucy Chow",
      "Sandro Stefanelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Amanda Quinn",
      "Marr Flores"
     ],
     "a": [
      "Jamila Sefiane",
      "Hal Golden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Oliveira Karen",
      "Bud Heller"
     ],
     "a": [
      "Kathy BernéT",
      "Ed Gieske"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kate Curren",
      "Charlie Johnston"
     ],
     "a": [
      "Christine Dugan",
      "Jeremy Workman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kate Curren",
      "Lydia Fiore"
     ],
     "a": [
      "Kathy BernéT",
      "Jodi Evans"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Amanda Quinn",
      "Oliveira Karen"
     ],
     "a": [
      "Lucy Chow",
      "Christine Dugan"
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
      "Jeremy Workman",
      "Ed Gieske"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Marr Flores",
      "Bud Heller"
     ],
     "a": [
      "Patrik Grubb",
      "Hal Golden"
     ]
    }
   ],
   "subs": [
    "Ricardo Lisojo"
   ]
  },
  {
   "result": "away",
   "week": 7,
   "home": "Flemington",
   "away": "Players Courtyard",
   "time": "2025-10-05T15:00:00",
   "complete": true,
   "homePoints": 600,
   "awayPoints": 671,
   "homeGW": 10,
   "awayGW": 22,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Aimee Castellano",
      "Eric Luque"
     ],
     "a": [
      "Kate Siedell",
      "Jeff Lorman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Tara Kramer",
      "Simon Perry"
     ],
     "a": [
      "Pam Boyd",
      "Brad Daddis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sue Johnson",
      "Art Muth"
     ],
     "a": [
      "Elyse Diamond",
      "Marc Harden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Christine Papa",
      "David Osborne"
     ],
     "a": [
      "Kim Hamilton",
      "Brian Rowan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Denise Richmond",
      "Christine Papa"
     ],
     "a": [
      "Stacey Frank",
      "Kim Hamilton"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Aimee Castellano",
      "Tara Kramer"
     ],
     "a": [
      "Pam Boyd",
      "Kate Siedell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Simon Perry",
      "David Osborne"
     ],
     "a": [
      "Jeff Lorman",
      "Jonathan Brand"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Eric Luque",
      "Art Muth"
     ],
     "a": [
      "Brian Rowan",
      "Marc Harden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Aimee Castellano",
      "Eric Luque"
     ],
     "a": [
      "Kate Siedell",
      "Marc Harden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Tara Kramer",
      "Simon Perry"
     ],
     "a": [
      "Kim Hamilton",
      "Brad Daddis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Denise Richmond",
      "David Osborne"
     ],
     "a": [
      "Elyse Diamond",
      "Brian Rowan"
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
      "Stacey Frank",
      "Jonathan Brand"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Sue Johnson",
      "Christine Papa"
     ],
     "a": [
      "Pam Boyd",
      "Stacey Frank"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Aimee Castellano",
      "Denise Richmond"
     ],
     "a": [
      "Elyse Diamond",
      "Kim Hamilton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Simon Perry",
      "Art Muth"
     ],
     "a": [
      "Jeff Lorman",
      "Brian Rowan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "David Osborne",
      "Eric Luque"
     ],
     "a": [
      "Brad Daddis",
      "Jonathan Brand"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Tara Kramer",
      "Eric Luque"
     ],
     "a": [
      "Kate Siedell",
      "Brad Daddis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Aimee Castellano",
      "David Osborne"
     ],
     "a": [
      "Elyse Diamond",
      "Jonathan Brand"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Sue Johnson",
      "Simon Perry"
     ],
     "a": [
      "Stacey Frank",
      "Jeff Lorman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Christine Papa",
      "Art Muth"
     ],
     "a": [
      "Kim Hamilton",
      "Marc Harden"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Tara Kramer",
      "Christine Papa"
     ],
     "a": [
      "Stacey Frank",
      "Elyse Diamond"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Aimee Castellano",
      "Denise Richmond"
     ],
     "a": [
      "Kate Siedell",
      "Pam Boyd"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "David Osborne",
      "Art Muth"
     ],
     "a": [
      "Jonathan Brand",
      "Brian Rowan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Eric Luque",
      "Simon Perry"
     ],
     "a": [
      "Jeff Lorman",
      "Marc Harden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Aimee Castellano",
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
     "hs": 22,
     "as": 24,
     "h": [
      "Tara Kramer",
      "Art Muth"
     ],
     "a": [
      "Kate Siedell",
      "Marc Harden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Denise Richmond",
      "Simon Perry"
     ],
     "a": [
      "Stacey Frank",
      "Jeff Lorman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Sue Johnson",
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
      "Denise Richmond"
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
     "as": 13,
     "h": [
      "Aimee Castellano",
      "Christine Papa"
     ],
     "a": [
      "Elyse Diamond",
      "Pam Boyd"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Simon Perry",
      "Eric Luque"
     ],
     "a": [
      "Brad Daddis",
      "Brian Rowan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Art Muth",
      "David Osborne"
     ],
     "a": [
      "Jonathan Brand",
      "Jeff Lorman"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 7,
   "home": "Home Court",
   "away": "Bounce Malvern Black",
   "time": "2025-10-05T15:00:00",
   "complete": true,
   "homePoints": 433,
   "awayPoints": 675,
   "homeGW": 1,
   "awayGW": 31,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Margaret Weidlich",
      "Randy Samuels"
     ],
     "a": [
      "Jill Scully",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sharon Streit",
      "George Mandl"
     ],
     "a": [
      "Judy Qiu",
      "Jingwei Wu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Cindi Goldstein",
      "Michael Vincent"
     ],
     "a": [
      "Jennifer Wang",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Kimberly Schwartz",
      "Jhon Cifuentes"
     ],
     "a": [
      "Stephanie Woomer",
      "Keith Goldberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Margaret Weidlich",
      "Sharon Streit"
     ],
     "a": [
      "Jill Scully",
      "Jennifer Wang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kimberly Schwartz",
      "Andrea Smith"
     ],
     "a": [
      "Stephanie Woomer",
      "Judy Qiu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Michael Vincent",
      "Jhon Cifuentes"
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
      "Randy Samuels",
      "Robert Huntley"
     ],
     "a": [
      "Derek Le",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kimberly Schwartz",
      "Michael Vincent"
     ],
     "a": [
      "Jennifer Wang",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sharon Streit",
      "Robert Huntley"
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
     "as": 23,
     "h": [
      "Andrea Smith",
      "Carlo Caronan"
     ],
     "a": [
      "Jill Scully",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Cindi Goldstein",
      "Jhon Cifuentes"
     ],
     "a": [
      "Judy Qiu",
      "Jingwei Wu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Sharon Streit",
      "Cindi Goldstein"
     ],
     "a": [
      "Judy Qiu",
      "Jill Scully"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Andrea Smith",
      "Kimberly Schwartz"
     ],
     "a": [
      "Stephanie Woomer",
      "Jennifer Wang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "George Mandl",
      "Carlo Caronan"
     ],
     "a": [
      "Keith Goldberg",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Michael Vincent",
      "Randy Samuels"
     ],
     "a": [
      "Derek Le",
      "Jingwei Wu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Margaret Weidlich",
      "George Mandl"
     ],
     "a": [
      "Jennifer Wang",
      "Jingwei Wu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kimberly Schwartz",
      "Robert Huntley"
     ],
     "a": [
      "Jill Scully",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Cindi Goldstein",
      "Carlo Caronan"
     ],
     "a": [
      "Judy Qiu",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sharon Streit",
      "Michael Vincent"
     ],
     "a": [
      "Stephanie Woomer",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Margaret Weidlich",
      "Kimberly Schwartz"
     ],
     "a": [
      "Stephanie Woomer",
      "Jill Scully"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Andrea Smith",
      "Cindi Goldstein"
     ],
     "a": [
      "Judy Qiu",
      "Jennifer Wang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Robert Huntley",
      "Carlo Caronan"
     ],
     "a": [
      "Jingwei Wu",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Michael Vincent",
      "Jhon Cifuentes"
     ],
     "a": [
      "Derek Le",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Margaret Weidlich",
      "Randy Samuels"
     ],
     "a": [
      "Stephanie Woomer",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Kimberly Schwartz",
      "Jhon Cifuentes"
     ],
     "a": [
      "Judy Qiu",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sharon Streit",
      "Robert Huntley"
     ],
     "a": [
      "Jennifer Wang",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Andrea Smith",
      "George Mandl"
     ],
     "a": [
      "Jill Scully",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Margaret Weidlich",
      "Sharon Streit"
     ],
     "a": [
      "Jill Scully",
      "Judy Qiu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Kimberly Schwartz",
      "Cindi Goldstein"
     ],
     "a": [
      "Jennifer Wang",
      "Stephanie Woomer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Robert Huntley",
      "Randy Samuels"
     ],
     "a": [
      "Michael Finkelstein",
      "Derek Le"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jhon Cifuentes",
      "George Mandl"
     ],
     "a": [
      "Jingwei Wu",
      "Keith Goldberg"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 7,
   "home": "Bounce Malvern Black",
   "away": "The Atlantic Club",
   "time": "2025-10-05T18:00:00",
   "complete": true,
   "homePoints": 677,
   "awayPoints": 511,
   "homeGW": 27,
   "awayGW": 5,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Judy Qiu",
      "Keith Goldberg"
     ],
     "a": [
      "Natasha De Carvalho",
      "Michael Swell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Stephanie Woomer",
      "Jim Darcangelo"
     ],
     "a": [
      "Tanya Kenney",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Jill Scully",
      "Derek Le"
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
     "as": 18,
     "h": [
      "Jennifer Wang",
      "Michael Finkelstein"
     ],
     "a": [
      "Alice Napolitano",
      "Hal Greenspan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Katherine Maruyama",
      "Stephanie Woomer"
     ],
     "a": [
      "Alice Napolitano",
      "Eva Danieli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Judy Qiu",
      "Jennifer Wang"
     ],
     "a": [
      "Natasha De Carvalho",
      "Tanya Kenney"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Keith Goldberg",
      "Jim Darcangelo"
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
     "as": 8,
     "h": [
      "Michael Finkelstein",
      "Jingwei Wu"
     ],
     "a": [
      "Joe Palumbo",
      "Hal Greenspan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Katherine Maruyama",
      "Jingwei Wu"
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
     "as": 13,
     "h": [
      "Jennifer Wang",
      "Keith Goldberg"
     ],
     "a": [
      "Natasha De Carvalho",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Stephanie Woomer",
      "Jim Darcangelo"
     ],
     "a": [
      "Alice Napolitano",
      "Joe Palumbo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jill Scully",
      "Derek Le"
     ],
     "a": [
      "Tanya Kenney",
      "Hal Greenspan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Stephanie Woomer",
      "Jill Scully"
     ],
     "a": [
      "Alice Napolitano",
      "Natasha De Carvalho"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Katherine Maruyama",
      "Judy Qiu"
     ],
     "a": [
      "Tanya Kenney",
      "Eva Danieli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Keith Goldberg",
      "Jingwei Wu"
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
     "as": 14,
     "h": [
      "Derek Le",
      "Michael Finkelstein"
     ],
     "a": [
      "Hal Greenspan",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Judy Qiu",
      "Jim Darcangelo"
     ],
     "a": [
      "Tanya Kenney",
      "Michael Swell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Katherine Maruyama",
      "Michael Finkelstein"
     ],
     "a": [
      "Eva Danieli",
      "Michael Dombrowiecki"
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
      "Natasha De Carvalho",
      "Joe Palumbo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jennifer Wang",
      "Jingwei Wu"
     ],
     "a": [
      "Alice Napolitano",
      "Hal Greenspan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jill Scully",
      "Stephanie Woomer"
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
     "as": 14,
     "h": [
      "Katherine Maruyama",
      "Jennifer Wang"
     ],
     "a": [
      "Natasha De Carvalho",
      "Tanya Kenney"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jingwei Wu",
      "Keith Goldberg"
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
     "as": 9,
     "h": [
      "Jim Darcangelo",
      "Derek Le"
     ],
     "a": [
      "Joe Palumbo",
      "Hal Greenspan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Katherine Maruyama",
      "Jingwei Wu"
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
     "as": 15,
     "h": [
      "Jennifer Wang",
      "Keith Goldberg"
     ],
     "a": [
      "Tanya Kenney",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jill Scully",
      "Jim Darcangelo"
     ],
     "a": [
      "Natasha De Carvalho",
      "Joe Palumbo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Stephanie Woomer",
      "Michael Finkelstein"
     ],
     "a": [
      "Eva Danieli",
      "Hal Greenspan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Katherine Maruyama",
      "Jill Scully"
     ],
     "a": [
      "Eva Danieli",
      "Natasha De Carvalho"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Judy Qiu",
      "Jennifer Wang"
     ],
     "a": [
      "Tanya Kenney",
      "Alice Napolitano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Keith Goldberg",
      "Derek Le"
     ],
     "a": [
      "Michael Swell",
      "Hal Greenspan"
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
      "Joe Palumbo",
      "Michael Dombrowiecki"
     ]
    }
   ],
   "subs": [
    "Michael Swell"
   ]
  },
  {
   "result": "home",
   "week": 7,
   "home": "Players Courtyard",
   "away": "Pickleball Palace",
   "time": "2025-10-05T18:00:00",
   "complete": true,
   "homePoints": 656,
   "awayPoints": 526,
   "homeGW": 26,
   "awayGW": 6,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Annemarie Mccartney",
      "Marc Harden"
     ],
     "a": [
      "Ana Bautista",
      "Bud Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Stacey Frank",
      "Brad Daddis"
     ],
     "a": [
      "Lydia Fiore",
      "Toby Mcmahan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Kate Siedell",
      "Bennett Shanker"
     ],
     "a": [
      "Oliveira Karen",
      "Ricardo Lisojo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Elyse Diamond",
      "Brian Rowan"
     ],
     "a": [
      "Amanda Quinn",
      "Marr Flores"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Annemarie Mccartney",
      "Elyse Diamond"
     ],
     "a": [
      "Kate Curren",
      "Amanda Quinn"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Pam Boyd",
      "Stacey Frank"
     ],
     "a": [
      "Ana Bautista",
      "Oliveira Karen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jonathan Brand",
      "Jeff Lorman"
     ],
     "a": [
      "Bud Heller",
      "Marr Flores"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Marc Harden",
      "Brian Rowan"
     ],
     "a": [
      "Toby Mcmahan",
      "Ricardo Lisojo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Annemarie Mccartney",
      "Brad Daddis"
     ],
     "a": [
      "Ana Bautista",
      "Marr Flores"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Stacey Frank",
      "Jonathan Brand"
     ],
     "a": [
      "Kate Curren",
      "Ricardo Lisojo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kate Siedell",
      "Bennett Shanker"
     ],
     "a": [
      "Oliveira Karen",
      "Bud Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Elyse Diamond",
      "Marc Harden"
     ],
     "a": [
      "Amanda Quinn",
      "Toby Mcmahan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Annemarie Mccartney",
      "Elyse Diamond"
     ],
     "a": [
      "Kate Curren",
      "Lydia Fiore"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Pam Boyd",
      "Kate Siedell"
     ],
     "a": [
      "Ana Bautista",
      "Oliveira Karen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jonathan Brand",
      "Brian Rowan"
     ],
     "a": [
      "Louis Vessichelli",
      "Marr Flores"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jeff Lorman",
      "Bennett Shanker"
     ],
     "a": [
      "Bud Heller",
      "Toby Mcmahan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Annemarie Mccartney",
      "Marc Harden"
     ],
     "a": [
      "Kate Curren",
      "Bud Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Pam Boyd",
      "Bennett Shanker"
     ],
     "a": [
      "Lydia Fiore",
      "Louis Vessichelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Stacey Frank",
      "Brad Daddis"
     ],
     "a": [
      "Ana Bautista",
      "Toby Mcmahan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Elyse Diamond",
      "Brian Rowan"
     ],
     "a": [
      "Amanda Quinn",
      "Marr Flores"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Annemarie Mccartney",
      "Pam Boyd"
     ],
     "a": [
      "Kate Curren",
      "Amanda Quinn"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kate Siedell",
      "Stacey Frank"
     ],
     "a": [
      "Lydia Fiore",
      "Oliveira Karen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jeff Lorman",
      "Jonathan Brand"
     ],
     "a": [
      "Bud Heller",
      "Louis Vessichelli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Marc Harden",
      "Brian Rowan"
     ],
     "a": [
      "Toby Mcmahan",
      "Ricardo Lisojo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kate Siedell",
      "Brian Rowan"
     ],
     "a": [
      "Kate Curren",
      "Marr Flores"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Elyse Diamond",
      "Marc Harden"
     ],
     "a": [
      "Lydia Fiore",
      "Louis Vessichelli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Pam Boyd",
      "Bennett Shanker"
     ],
     "a": [
      "Oliveira Karen",
      "Ricardo Lisojo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Annemarie Mccartney",
      "Jonathan Brand"
     ],
     "a": [
      "Amanda Quinn",
      "Bud Heller"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Annemarie Mccartney",
      "Stacey Frank"
     ],
     "a": [
      "Kate Curren",
      "Lydia Fiore"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Pam Boyd",
      "Kate Siedell"
     ],
     "a": [
      "Amanda Quinn",
      "Oliveira Karen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Brian Rowan",
      "Jeff Lorman"
     ],
     "a": [
      "Louis Vessichelli",
      "Marr Flores"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jonathan Brand",
      "Bennett Shanker"
     ],
     "a": [
      "Bud Heller",
      "Ricardo Lisojo"
     ]
    }
   ],
   "subs": [
    "Ricardo Lisojo"
   ]
  },
  {
   "result": "home",
   "week": 7,
   "home": "Pickle Place",
   "away": "Home Court",
   "time": "2025-10-05T18:00:00",
   "complete": true,
   "homePoints": 679,
   "awayPoints": 552,
   "homeGW": 28,
   "awayGW": 4,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Laura Kang",
      "Stephen Hanak"
     ],
     "a": [
      "Margaret Weidlich",
      "Randy Samuels"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Janine Forrest",
      "Jonathan Goldner"
     ],
     "a": [
      "Kimberly Schwartz",
      "Jhon Cifuentes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Valerie Interrante",
      "Bruce Aronow"
     ],
     "a": [
      "Kajal Sinkar",
      "Robert Huntley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Marykristin Haskell",
      "Eric Markowitz"
     ],
     "a": [
      "Sharon Streit",
      "Michael Vincent"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Janet Garrity",
      "Valerie Interrante"
     ],
     "a": [
      "Margaret Weidlich",
      "Kajal Sinkar"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Marykristin Haskell",
      "Janine Forrest"
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
     "as": 17,
     "h": [
      "Jonathan Goldner",
      "Stephen Hanak"
     ],
     "a": [
      "Robert Huntley",
      "George Mandl"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Eric Markowitz",
      "Z Zhang"
     ],
     "a": [
      "Jhon Cifuentes",
      "Michael Vincent"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Marykristin Haskell",
      "Stephen Hanak"
     ],
     "a": [
      "Andrea Smith",
      "Randy Samuels"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Janet Garrity",
      "Jonathan Goldner"
     ],
     "a": [
      "Kimberly Schwartz",
      "Robert Huntley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Laura Kang",
      "Bruce Aronow"
     ],
     "a": [
      "Sharon Streit",
      "Jhon Cifuentes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Janine Forrest",
      "Eric Markowitz"
     ],
     "a": [
      "Kajal Sinkar",
      "Michael Vincent"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Janet Garrity",
      "Janine Forrest"
     ],
     "a": [
      "Margaret Weidlich",
      "Sharon Streit"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Laura Kang",
      "Valerie Interrante"
     ],
     "a": [
      "Kimberly Schwartz",
      "Andrea Smith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Bruce Aronow",
      "Z Zhang"
     ],
     "a": [
      "Randy Samuels",
      "George Mandl"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jonathan Goldner",
      "Eric Markowitz"
     ],
     "a": [
      "Robert Huntley",
      "Jhon Cifuentes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Janine Forrest",
      "Jonathan Goldner"
     ],
     "a": [
      "Margaret Weidlich",
      "Robert Huntley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Marykristin Haskell",
      "Eric Markowitz"
     ],
     "a": [
      "Kimberly Schwartz",
      "Jhon Cifuentes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Valerie Interrante",
      "Stephen Hanak"
     ],
     "a": [
      "Sharon Streit",
      "George Mandl"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Janet Garrity",
      "Z Zhang"
     ],
     "a": [
      "Kajal Sinkar",
      "Randy Samuels"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Laura Kang",
      "Valerie Interrante"
     ],
     "a": [
      "Margaret Weidlich",
      "Kajal Sinkar"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Marykristin Haskell",
      "Janine Forrest"
     ],
     "a": [
      "Kimberly Schwartz",
      "Andrea Smith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Bruce Aronow",
      "Z Zhang"
     ],
     "a": [
      "Michael Vincent",
      "George Mandl"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jonathan Goldner",
      "Stephen Hanak"
     ],
     "a": [
      "Robert Huntley",
      "Randy Samuels"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Laura Kang",
      "Z Zhang"
     ],
     "a": [
      "Margaret Weidlich",
      "Randy Samuels"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Valerie Interrante",
      "Stephen Hanak"
     ],
     "a": [
      "Sharon Streit",
      "Jhon Cifuentes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Marykristin Haskell",
      "Bruce Aronow"
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
     "as": 16,
     "h": [
      "Janet Garrity",
      "Jonathan Goldner"
     ],
     "a": [
      "Kajal Sinkar",
      "George Mandl"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Laura Kang",
      "Marykristin Haskell"
     ],
     "a": [
      "Margaret Weidlich",
      "Sharon Streit"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Janet Garrity",
      "Janine Forrest"
     ],
     "a": [
      "Kimberly Schwartz",
      "Kajal Sinkar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jonathan Goldner",
      "Bruce Aronow"
     ],
     "a": [
      "Jhon Cifuentes",
      "George Mandl"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Stephen Hanak",
      "Z Zhang"
     ],
     "a": [
      "Michael Vincent",
      "Robert Huntley"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 7,
   "home": "Bounce Malvern Blue",
   "away": "Monroe",
   "time": "2025-10-05T18:00:00",
   "complete": true,
   "homePoints": 516,
   "awayPoints": 664,
   "homeGW": 8,
   "awayGW": 24,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jodi Evans",
      "Jeremy Workman"
     ],
     "a": [
      "Amy Chrebet",
      "Guy Ohn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jamila Sefiane",
      "Ed Gieske"
     ],
     "a": [
      "Manju Shah",
      "Don Godinez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Kathy BernéT",
      "Hal Golden"
     ],
     "a": [
      "Barbara Hess",
      "Scott Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Christine Dugan",
      "Sandro Stefanelli"
     ],
     "a": [
      "Susan Kapit",
      "Sergey Sprikut"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jodi Evans",
      "Jamila Sefiane"
     ],
     "a": [
      "Meryl Nadler",
      "Barbara Hess"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Kathy BernéT",
      "Christine Dugan"
     ],
     "a": [
      "Susan Kapit",
      "Amy Chrebet"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Tim Phelan",
      "Jeremy Workman"
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
     "as": 18,
     "h": [
      "Hal Golden",
      "Sandro Stefanelli"
     ],
     "a": [
      "Sergey Sprikut",
      "Scott Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Jodi Evans",
      "Sandro Stefanelli"
     ],
     "a": [
      "Susan Kapit",
      "Don Godinez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jamila Sefiane",
      "Jeremy Workman"
     ],
     "a": [
      "Barbara Hess",
      "Guy Ohn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Kathy BernéT",
      "Ed Gieske"
     ],
     "a": [
      "Manju Shah",
      "Yi Gu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Christine Dugan",
      "Tim Phelan"
     ],
     "a": [
      "Meryl Nadler",
      "Sergey Sprikut"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jodi Evans",
      "Kathy BernéT"
     ],
     "a": [
      "Barbara Hess",
      "Susan Kapit"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Christine Dugan",
      "Jamila Sefiane"
     ],
     "a": [
      "Amy Chrebet",
      "Manju Shah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Hal Golden",
      "Jeremy Workman"
     ],
     "a": [
      "Sergey Sprikut",
      "Yi Gu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Tim Phelan",
      "Ed Gieske"
     ],
     "a": [
      "Scott Friedman",
      "Don Godinez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jodi Evans",
      "Ed Gieske"
     ],
     "a": [
      "Susan Kapit",
      "Scott Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jamila Sefiane",
      "Sandro Stefanelli"
     ],
     "a": [
      "Amy Chrebet",
      "Guy Ohn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Kathy BernéT",
      "Tim Phelan"
     ],
     "a": [
      "Manju Shah",
      "Sergey Sprikut"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Christine Dugan",
      "Hal Golden"
     ],
     "a": [
      "Meryl Nadler",
      "Don Godinez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jodi Evans",
      "Christine Dugan"
     ],
     "a": [
      "Barbara Hess",
      "Meryl Nadler"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kathy BernéT",
      "Jamila Sefiane"
     ],
     "a": [
      "Manju Shah",
      "Susan Kapit"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Ed Gieske",
      "Sandro Stefanelli"
     ],
     "a": [
      "Yi Gu",
      "Guy Ohn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jeremy Workman",
      "Hal Golden"
     ],
     "a": [
      "Sergey Sprikut",
      "Scott Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Jodi Evans",
      "Jeremy Workman"
     ],
     "a": [
      "Meryl Nadler",
      "Guy Ohn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jamila Sefiane",
      "Ed Gieske"
     ],
     "a": [
      "Barbara Hess",
      "Scott Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Kathy BernéT",
      "Hal Golden"
     ],
     "a": [
      "Manju Shah",
      "Sergey Sprikut"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Christine Dugan",
      "Tim Phelan"
     ],
     "a": [
      "Amy Chrebet",
      "Don Godinez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jodi Evans",
      "Jamila Sefiane"
     ],
     "a": [
      "Meryl Nadler",
      "Susan Kapit"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Kathy BernéT",
      "Christine Dugan"
     ],
     "a": [
      "Manju Shah",
      "Barbara Hess"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Tim Phelan",
      "Jeremy Workman"
     ],
     "a": [
      "Guy Ohn",
      "Don Godinez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Ed Gieske",
      "Sandro Stefanelli"
     ],
     "a": [
      "Yi Gu",
      "Scott Friedman"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 8,
   "home": "The Atlantic Club",
   "away": "Flemington",
   "time": "2025-10-11T12:00:00",
   "complete": true,
   "homePoints": 623,
   "awayPoints": 657,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 35,
     "as": 33,
     "h": [
      "Alice Napolitano",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Aimee Castellano",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Eva Danieli",
      "Brad Oldham"
     ],
     "a": [
      "Susan St. Pierre",
      "Frank Clark"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Sacha Doyle",
      "Andrew Hyman"
     ],
     "a": [
      "Denise Richmond",
      "Art Muth"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Janet Bellaran",
      "Robert Toledo"
     ],
     "a": [
      "Tara Kramer",
      "Scott Rubin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Janet Bellaran",
      "Tanya Kenney"
     ],
     "a": [
      "Tara Kramer",
      "Susan St. Pierre"
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
      "Aimee Castellano",
      "Denise Richmond"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Joe Palumbo",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Eric Luque",
      "Art Muth"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Andrew Hyman",
      "Brad Oldham"
     ],
     "a": [
      "Joe Antico",
      "Frank Clark"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Eva Danieli",
      "Robert Toledo"
     ],
     "a": [
      "Denise Richmond",
      "Art Muth"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Sacha Doyle",
      "Brad Oldham"
     ],
     "a": [
      "Aimee Castellano",
      "Frank Clark"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Tanya Kenney",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Tara Kramer",
      "Joe Antico"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Alice Napolitano",
      "Joe Palumbo"
     ],
     "a": [
      "Susan St. Pierre",
      "Scott Rubin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Alice Napolitano",
      "Tanya Kenney"
     ],
     "a": [
      "Denise Richmond",
      "Susan St. Pierre"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sacha Doyle",
      "Janet Bellaran"
     ],
     "a": [
      "Aimee Castellano",
      "Tara Kramer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Robert Toledo",
      "Andrew Hyman"
     ],
     "a": [
      "Eric Luque",
      "Joe Antico"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Michael Dombrowiecki",
      "Brad Oldham"
     ],
     "a": [
      "Art Muth",
      "Frank Clark"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Eva Danieli",
      "Brad Oldham"
     ],
     "a": [
      "Aimee Castellano",
      "Joe Antico"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Alice Napolitano",
      "Andrew Hyman"
     ],
     "a": [
      "Tara Kramer",
      "Frank Clark"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Sacha Doyle",
      "Joe Palumbo"
     ],
     "a": [
      "Susan St. Pierre",
      "Scott Rubin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Janet Bellaran",
      "Robert Toledo"
     ],
     "a": [
      "Denise Richmond",
      "Eric Luque"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Alice Napolitano",
      "Janet Bellaran"
     ],
     "a": [
      "Aimee Castellano",
      "Susan St. Pierre"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Eva Danieli",
      "Tanya Kenney"
     ],
     "a": [
      "Tara Kramer",
      "Denise Richmond"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Joe Palumbo",
      "Brad Oldham"
     ],
     "a": [
      "Art Muth",
      "Frank Clark"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Andrew Hyman",
      "Robert Toledo"
     ],
     "a": [
      "Eric Luque",
      "Scott Rubin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sacha Doyle",
      "Brad Oldham"
     ],
     "a": [
      "Tara Kramer",
      "Joe Antico"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Eva Danieli",
      "Joe Palumbo"
     ],
     "a": [
      "Denise Richmond",
      "Scott Rubin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Tanya Kenney",
      "Robert Toledo"
     ],
     "a": [
      "Aimee Castellano",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Alice Napolitano",
      "Andrew Hyman"
     ],
     "a": [
      "Susan St. Pierre",
      "Art Muth"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Eva Danieli",
      "Alice Napolitano"
     ],
     "a": [
      "Aimee Castellano",
      "Susan St. Pierre"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Sacha Doyle",
      "Janet Bellaran"
     ],
     "a": [
      "Tara Kramer",
      "Denise Richmond"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Joe Palumbo",
      "Andrew Hyman"
     ],
     "a": [
      "Eric Luque",
      "Joe Antico"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Brad Oldham",
      "Robert Toledo"
     ],
     "a": [
      "Art Muth",
      "Scott Rubin"
     ]
    }
   ],
   "subs": [
    "Joe Antico",
    "Frank Clark",
    "Sacha Doyle"
   ]
  },
  {
   "result": "home",
   "week": 8,
   "home": "Pickle House",
   "away": "Bounce Malvern Blue",
   "time": "2025-10-11T14:00:00",
   "complete": true,
   "homePoints": 624,
   "awayPoints": 569,
   "homeGW": 22,
   "awayGW": 10,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Melissa Bordman",
      "Ping Peng"
     ],
     "a": [
      "Jodi Evans",
      "David Marchese"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lucy Li",
      "Bruce Mattthew"
     ],
     "a": [
      "Kathy BernéT",
      "Michael Frost"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Allison Tittle",
      "Steve Berman"
     ],
     "a": [
      "Jamila Sefiane",
      "Ed Gieske"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Tanya Patterson",
      "Lance Brown"
     ],
     "a": [
      "Wendy Frost",
      "Patrik Grubb"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Allison Tittle",
      "Tanya Patterson"
     ],
     "a": [
      "Jodi Evans",
      "Kathy BernéT"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lucy Li",
      "Melissa Bordman"
     ],
     "a": [
      "Christine Dugan",
      "Lucy Chow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Wolfgang Chincarini",
      "Michael Vollmer"
     ],
     "a": [
      "William Brown",
      "Ed Gieske"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Bruce Mattthew",
      "Ping Peng"
     ],
     "a": [
      "David Marchese",
      "Patrik Grubb"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Melissa Bordman",
      "Bruce Mattthew"
     ],
     "a": [
      "Jodi Evans",
      "Michael Frost"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lucy Li",
      "Ping Peng"
     ],
     "a": [
      "Lucy Chow",
      "David Marchese"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Allison Tittle",
      "Steve Berman"
     ],
     "a": [
      "Jamila Sefiane",
      "Patrik Grubb"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Carolyn Dardani-Horensky",
      "Lance Brown"
     ],
     "a": [
      "Wendy Frost",
      "William Brown"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lucy Li",
      "Melissa Bordman"
     ],
     "a": [
      "Lucy Chow",
      "Jamila Sefiane"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Tanya Patterson",
      "Carolyn Dardani-Horensky"
     ],
     "a": [
      "Christine Dugan",
      "Wendy Frost"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Wolfgang Chincarini",
      "Lance Brown"
     ],
     "a": [
      "Ed Gieske",
      "Patrik Grubb"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Ping Peng",
      "Bruce Mattthew"
     ],
     "a": [
      "David Marchese",
      "Michael Frost"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lucy Li",
      "Ping Peng"
     ],
     "a": [
      "Kathy BernéT",
      "Ed Gieske"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Carolyn Dardani-Horensky",
      "Bruce Mattthew"
     ],
     "a": [
      "Jodi Evans",
      "William Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Melissa Bordman",
      "Michael Vollmer"
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
      "Tanya Patterson",
      "Steve Berman"
     ],
     "a": [
      "Lucy Chow",
      "Michael Frost"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Lucy Li",
      "Tanya Patterson"
     ],
     "a": [
      "Jodi Evans",
      "Christine Dugan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Allison Tittle",
      "Carolyn Dardani-Horensky"
     ],
     "a": [
      "Kathy BernéT",
      "Wendy Frost"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Wolfgang Chincarini",
      "Steve Berman"
     ],
     "a": [
      "Michael Frost",
      "William Brown"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Michael Vollmer",
      "Lance Brown"
     ],
     "a": [
      "Patrik Grubb",
      "Ed Gieske"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Carolyn Dardani-Horensky",
      "Michael Vollmer"
     ],
     "a": [
      "Jamila Sefiane",
      "Ed Gieske"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lucy Li",
      "Bruce Mattthew"
     ],
     "a": [
      "Kathy BernéT",
      "David Marchese"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Melissa Bordman",
      "Wolfgang Chincarini"
     ],
     "a": [
      "Lucy Chow",
      "Patrik Grubb"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Allison Tittle",
      "Ping Peng"
     ],
     "a": [
      "Wendy Frost",
      "William Brown"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Allison Tittle",
      "Carolyn Dardani-Horensky"
     ],
     "a": [
      "Kathy BernéT",
      "Christine Dugan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Melissa Bordman",
      "Tanya Patterson"
     ],
     "a": [
      "Jodi Evans",
      "Jamila Sefiane"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Steve Berman",
      "Lance Brown"
     ],
     "a": [
      "Michael Frost",
      "Ed Gieske"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Wolfgang Chincarini",
      "Michael Vollmer"
     ],
     "a": [
      "David Marchese",
      "William Brown"
     ]
    }
   ],
   "subs": [
    "Steve Berman",
    "Melissa Bordman",
    "Bruce Mattthew",
    "Allison Tittle"
   ]
  },
  {
   "result": "away",
   "week": 8,
   "home": "Monroe",
   "away": "Pickleball Palace",
   "time": "2025-10-11T14:00:00",
   "complete": true,
   "homePoints": 589,
   "awayPoints": 638,
   "homeGW": 10,
   "awayGW": 22,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Tracey Collins",
      "Sergey Sprikut"
     ],
     "a": [
      "Kate Curren",
      "Bud Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Meryl Nadler",
      "Don Godinez"
     ],
     "a": [
      "Oliveira Karen",
      "John Chalerm"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Rosalyn Goldsmith",
      "Eliezer Mintz"
     ],
     "a": [
      "Andrea Dellechiaie",
      "David Coleman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Pam Friedman",
      "Guy Ohn"
     ],
     "a": [
      "Sinitra Siengsanaoh",
      "Chris Heimerle"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Pam Friedman",
      "Meryl Nadler"
     ],
     "a": [
      "Andrea Dellechiaie",
      "Sinitra Siengsanaoh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Rosalyn Goldsmith",
      "Tracey Collins"
     ],
     "a": [
      "Oliveira Karen",
      "Jill Lesnik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Guy Ohn",
      "Eliezer Mintz"
     ],
     "a": [
      "Bud Heller",
      "David Coleman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Sergey Sprikut",
      "Scott Friedman"
     ],
     "a": [
      "Marr Flores",
      "Chris Heimerle"
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
      "Kate Curren",
      "Marr Flores"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Meryl Nadler",
      "Don Godinez"
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
      "Pam Friedman",
      "Scott Friedman"
     ],
     "a": [
      "Andrea Dellechiaie",
      "David Coleman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Rosalyn Goldsmith",
      "Eliezer Mintz"
     ],
     "a": [
      "Oliveira Karen",
      "Bud Heller"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Tracey Collins",
      "Meryl Nadler"
     ],
     "a": [
      "Kate Curren",
      "Oliveira Karen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Rosalyn Goldsmith",
      "Pam Friedman"
     ],
     "a": [
      "Jill Lesnik",
      "Sinitra Siengsanaoh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sergey Sprikut",
      "Guy Ohn"
     ],
     "a": [
      "Marr Flores",
      "John Chalerm"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Don Godinez",
      "Scott Friedman"
     ],
     "a": [
      "Chris Heimerle",
      "David Coleman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tracey Collins",
      "Guy Ohn"
     ],
     "a": [
      "Kate Curren",
      "Bud Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Meryl Nadler",
      "Sergey Sprikut"
     ],
     "a": [
      "Sinitra Siengsanaoh",
      "Marr Flores"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Rosalyn Goldsmith",
      "Don Godinez"
     ],
     "a": [
      "Jill Lesnik",
      "David Coleman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Pam Friedman",
      "Eliezer Mintz"
     ],
     "a": [
      "Oliveira Karen",
      "John Chalerm"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Tracey Collins",
      "Pam Friedman"
     ],
     "a": [
      "Kate Curren",
      "Andrea Dellechiaie"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Rosalyn Goldsmith",
      "Meryl Nadler"
     ],
     "a": [
      "Sinitra Siengsanaoh",
      "Jill Lesnik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sergey Sprikut",
      "Don Godinez"
     ],
     "a": [
      "Marr Flores",
      "Bud Heller"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Eliezer Mintz",
      "Scott Friedman"
     ],
     "a": [
      "Chris Heimerle",
      "John Chalerm"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Tracey Collins",
      "Sergey Sprikut"
     ],
     "a": [
      "Kate Curren",
      "Marr Flores"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Meryl Nadler",
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
     "as": 16,
     "h": [
      "Pam Friedman",
      "Guy Ohn"
     ],
     "a": [
      "Jill Lesnik",
      "Chris Heimerle"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Rosalyn Goldsmith",
      "Scott Friedman"
     ],
     "a": [
      "Oliveira Karen",
      "Bud Heller"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Tracey Collins",
      "Pam Friedman"
     ],
     "a": [
      "Kate Curren",
      "Andrea Dellechiaie"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Rosalyn Goldsmith",
      "Meryl Nadler"
     ],
     "a": [
      "Oliveira Karen",
      "Jill Lesnik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Guy Ohn",
      "Don Godinez"
     ],
     "a": [
      "Marr Flores",
      "Bud Heller"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sergey Sprikut",
      "Scott Friedman"
     ],
     "a": [
      "Chris Heimerle",
      "John Chalerm"
     ]
    }
   ],
   "subs": [
    "John Chalerm",
    "Tracey Collins"
   ]
  },
  {
   "result": "away",
   "week": 8,
   "home": "Bounce Malvern Black",
   "away": "Players Courtyard",
   "time": "2025-10-11T14:30:00",
   "complete": true,
   "homePoints": 551,
   "awayPoints": 648,
   "homeGW": 9,
   "awayGW": 23,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Katherine Maruyama",
      "Keith Goldberg"
     ],
     "a": [
      "Annemarie Mccartney",
      "Roger Graterol"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Jill Scully",
      "Derek Le"
     ],
     "a": [
      "Kate Siedell",
      "Sang Nguyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jennifer Wang",
      "Jingwei Wu"
     ],
     "a": [
      "Pam Boyd",
      "Marc Harden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 31,
     "as": 29,
     "h": [
      "Karen Moliver",
      "Jim Darcangelo"
     ],
     "a": [
      "Elyse Diamond",
      "James Shaw"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Stephanie Woomer",
      "Jill Scully"
     ],
     "a": [
      "Pam Boyd",
      "Kate Siedell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Karen Moliver",
      "Katherine Maruyama"
     ],
     "a": [
      "Elyse Diamond",
      "Annemarie Mccartney"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Derek Le",
      "Jim Darcangelo"
     ],
     "a": [
      "Roger Graterol",
      "James Shaw"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Michael Finkelstein",
      "Jingwei Wu"
     ],
     "a": [
      "Sang Nguyen",
      "Jeff Lorman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Stephanie Woomer",
      "Derek Le"
     ],
     "a": [
      "Pam Boyd",
      "James Shaw"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jennifer Wang",
      "Jingwei Wu"
     ],
     "a": [
      "Annemarie Mccartney",
      "Sang Nguyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jill Scully",
      "Keith Goldberg"
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
      "Katherine Maruyama",
      "Michael Finkelstein"
     ],
     "a": [
      "Elyse Diamond",
      "Marc Harden"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Stephanie Woomer",
      "Karen Moliver"
     ],
     "a": [
      "Annemarie Mccartney",
      "Elyse Diamond"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jennifer Wang",
      "Jill Scully"
     ],
     "a": [
      "Kate Siedell",
      "Pam Boyd"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Derek Le",
      "Jingwei Wu"
     ],
     "a": [
      "James Shaw",
      "Sang Nguyen"
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
      "Roger Graterol",
      "Marc Harden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Karen Moliver",
      "Jim Darcangelo"
     ],
     "a": [
      "Pam Boyd",
      "Roger Graterol"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jennifer Wang",
      "Michael Finkelstein"
     ],
     "a": [
      "Kate Siedell",
      "Jeff Lorman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Katherine Maruyama",
      "Jingwei Wu"
     ],
     "a": [
      "Elyse Diamond",
      "Sang Nguyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Stephanie Woomer",
      "Keith Goldberg"
     ],
     "a": [
      "Annemarie Mccartney",
      "Marc Harden"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jill Scully",
      "Stephanie Woomer"
     ],
     "a": [
      "Elyse Diamond",
      "Kate Siedell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Katherine Maruyama",
      "Jennifer Wang"
     ],
     "a": [
      "Annemarie Mccartney",
      "Pam Boyd"
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
      "Sang Nguyen",
      "Marc Harden"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jingwei Wu",
      "Michael Finkelstein"
     ],
     "a": [
      "James Shaw",
      "Roger Graterol"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Karen Moliver",
      "Derek Le"
     ],
     "a": [
      "Catherine Spirko",
      "Roger Graterol"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Katherine Maruyama",
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
      "Jennifer Wang",
      "Jim Darcangelo"
     ],
     "a": [
      "Kate Siedell",
      "Marc Harden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jill Scully",
      "Michael Finkelstein"
     ],
     "a": [
      "Pam Boyd",
      "James Shaw"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Karen Moliver",
      "Stephanie Woomer"
     ],
     "a": [
      "Catherine Spirko",
      "Pam Boyd"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jennifer Wang",
      "Katherine Maruyama"
     ],
     "a": [
      "Elyse Diamond",
      "Kate Siedell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Michael Finkelstein",
      "Jim Darcangelo"
     ],
     "a": [
      "Jeff Lorman",
      "James Shaw"
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
      "Roger Graterol",
      "Sang Nguyen"
     ]
    }
   ],
   "subs": [
    "Catherine Spirko",
    "Sang Nguyen"
   ]
  },
  {
   "result": "home",
   "week": 9,
   "home": "The Atlantic Club",
   "away": "Home Court",
   "time": "2025-10-18T12:00:00",
   "complete": true,
   "homePoints": 676,
   "awayPoints": 586,
   "homeGW": 23,
   "awayGW": 9,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Janet Bellaran",
      "Andrew Hyman"
     ],
     "a": [
      "Margaret Weidlich",
      "Robert Huntley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Alice Napolitano",
      "Joe Palumbo"
     ],
     "a": [
      "Kimberly Schwartz",
      "Randy Samuels"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Natasha De Carvalho",
      "Darren Saks"
     ],
     "a": [
      "Sharon Streit",
      "Carlo Caronan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tanya Kenney",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Cindi Goldstein",
      "Michael Vincent"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Tanya Kenney",
      "Natasha De Carvalho"
     ],
     "a": [
      "Margaret Weidlich",
      "Cindi Goldstein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Eva Danieli",
      "Alice Napolitano"
     ],
     "a": [
      "Sharon Streit",
      "Kimberly Schwartz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Darren Saks",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Robert Huntley",
      "Randy Samuels"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Andrew Hyman",
      "Joe Palumbo"
     ],
     "a": [
      "Carlo Caronan",
      "Michael Vincent"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Janet Bellaran",
      "Darren Saks"
     ],
     "a": [
      "Sharon Streit",
      "Robert Huntley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Eva Danieli",
      "Joe Palumbo"
     ],
     "a": [
      "Margaret Weidlich",
      "Randy Samuels"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Alice Napolitano",
      "Michael Dombrowiecki"
     ],
     "a": [
      "Kimberly Schwartz",
      "Carlo Caronan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Tanya Kenney",
      "Andrew Hyman"
     ],
     "a": [
      "Cindi Goldstein",
      "Michael Vincent"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Natasha De Carvalho",
      "Eva Danieli"
     ],
     "a": [
      "Margaret Weidlich",
      "Kimberly Schwartz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Alice Napolitano",
      "Janet Bellaran"
     ],
     "a": [
      "Sharon Streit",
      "Cindi Goldstein"
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
      "Robert Huntley",
      "Carlo Caronan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Darren Saks",
      "Andrew Hyman"
     ],
     "a": [
      "Randy Samuels",
      "Michael Vincent"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Tanya Kenney",
      "Andrew Hyman"
     ],
     "a": [
      "Margaret Weidlich",
      "Robert Huntley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Eva Danieli",
      "Bruce Bilow"
     ],
     "a": [
      "Kimberly Schwartz",
      "Michael Vincent"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Janet Bellaran",
      "Darren Saks"
     ],
     "a": [
      "Sharon Streit",
      "Randy Samuels"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Natasha De Carvalho",
      "Joe Palumbo"
     ],
     "a": [
      "Cindi Goldstein",
      "Carlo Caronan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Natasha De Carvalho",
      "Janet Bellaran"
     ],
     "a": [
      "Margaret Weidlich",
      "Sharon Streit"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Alice Napolitano",
      "Tanya Kenney"
     ],
     "a": [
      "Cindi Goldstein",
      "Kimberly Schwartz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Andrew Hyman",
      "Bruce Bilow"
     ],
     "a": [
      "Robert Huntley",
      "Randy Samuels"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Joe Palumbo",
      "Darren Saks"
     ],
     "a": [
      "Michael Vincent",
      "Carlo Caronan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Eva Danieli",
      "Bruce Bilow"
     ],
     "a": [
      "Sharon Streit",
      "Robert Huntley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Alice Napolitano",
      "Joe Palumbo"
     ],
     "a": [
      "Margaret Weidlich",
      "Randy Samuels"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Tanya Kenney",
      "Darren Saks"
     ],
     "a": [
      "Kimberly Schwartz",
      "Michael Vincent"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Natasha De Carvalho",
      "Andrew Hyman"
     ],
     "a": [
      "Cindi Goldstein",
      "Carlo Caronan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Natasha De Carvalho",
      "Janet Bellaran"
     ],
     "a": [
      "Sharon Streit",
      "Margaret Weidlich"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Eva Danieli",
      "Alice Napolitano"
     ],
     "a": [
      "Cindi Goldstein",
      "Kimberly Schwartz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Bruce Bilow",
      "Darren Saks"
     ],
     "a": [
      "Robert Huntley",
      "Carlo Caronan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Andrew Hyman",
      "Joe Palumbo"
     ],
     "a": [
      "Randy Samuels",
      "Michael Vincent"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 9,
   "home": "Monroe",
   "away": "Flemington",
   "time": "2025-10-18T14:00:00",
   "complete": true,
   "homePoints": 607,
   "awayPoints": 642,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Susan Kapit",
      "Sergey Sprikut"
     ],
     "a": [
      "Christine Papa",
      "Art Muth"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Maureen Conery",
      "Don Godinez"
     ],
     "a": [
      "Tara Kramer",
      "Todd Stein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Meryl Nadler",
      "Eliezer Mintz"
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
      "Barbara Hess",
      "Scott Friedman"
     ],
     "a": [
      "Chanda Mccoy",
      "Scott Rubin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Meryl Nadler",
      "Barbara Hess"
     ],
     "a": [
      "Chanda Mccoy",
      "Christine Papa"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Susan Kapit",
      "Maureen Conery"
     ],
     "a": [
      "Kristen Soucie",
      "Tara Kramer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Yi Gu",
      "Guy Ohn"
     ],
     "a": [
      "Art Muth",
      "Scott Rubin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Eliezer Mintz",
      "Scott Friedman"
     ],
     "a": [
      "David Osborne",
      "Todd Stein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Barbara Hess",
      "Eliezer Mintz"
     ],
     "a": [
      "Chanda Mccoy",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Susan Kapit",
      "Don Godinez"
     ],
     "a": [
      "Kristen Soucie",
      "Art Muth"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Meryl Nadler",
      "Scott Friedman"
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
      "Maureen Conery",
      "Sergey Sprikut"
     ],
     "a": [
      "Tara Kramer",
      "Scott Rubin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Meryl Nadler",
      "Maureen Conery"
     ],
     "a": [
      "Christine Papa",
      "Tara Kramer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Barbara Hess",
      "Susan Kapit"
     ],
     "a": [
      "Kristen Soucie",
      "Chanda Mccoy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Sergey Sprikut",
      "Don Godinez"
     ],
     "a": [
      "David Osborne",
      "Todd Stein"
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
      "Art Muth",
      "Scott Rubin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Susan Kapit",
      "Sergey Sprikut"
     ],
     "a": [
      "Christine Papa",
      "Todd Stein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Barbara Hess",
      "Guy Ohn"
     ],
     "a": [
      "Chanda Mccoy",
      "Art Muth"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Maureen Conery",
      "Scott Friedman"
     ],
     "a": [
      "Kristen Soucie",
      "Scott Rubin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Meryl Nadler",
      "Eliezer Mintz"
     ],
     "a": [
      "Tara Kramer",
      "David Osborne"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Maureen Conery",
      "Barbara Hess"
     ],
     "a": [
      "Tara Kramer",
      "Chanda Mccoy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Susan Kapit",
      "Meryl Nadler"
     ],
     "a": [
      "Kristen Soucie",
      "Christine Papa"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Don Godinez",
      "Scott Friedman"
     ],
     "a": [
      "David Osborne",
      "Art Muth"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Yi Gu",
      "Eliezer Mintz"
     ],
     "a": [
      "Todd Stein",
      "Scott Rubin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Barbara Hess",
      "Sergey Sprikut"
     ],
     "a": [
      "Chanda Mccoy",
      "Art Muth"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Maureen Conery",
      "Yi Gu"
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
     "as": 19,
     "h": [
      "Susan Kapit",
      "Guy Ohn"
     ],
     "a": [
      "Tara Kramer",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Meryl Nadler",
      "Scott Friedman"
     ],
     "a": [
      "Kristen Soucie",
      "Todd Stein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Susan Kapit",
      "Maureen Conery"
     ],
     "a": [
      "Kristen Soucie",
      "Christine Papa"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Barbara Hess",
      "Meryl Nadler"
     ],
     "a": [
      "Chanda Mccoy",
      "Tara Kramer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Sergey Sprikut",
      "Eliezer Mintz"
     ],
     "a": [
      "David Osborne",
      "Scott Rubin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Don Godinez",
      "Yi Gu"
     ],
     "a": [
      "Art Muth",
      "Todd Stein"
     ]
    }
   ],
   "subs": [
    "Maureen Conery"
   ]
  },
  {
   "result": "away",
   "week": 9,
   "home": "Pickle House",
   "away": "Pickle Place",
   "time": "2025-10-18T14:00:00",
   "complete": true,
   "homePoints": 610,
   "awayPoints": 649,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jean Wang",
      "Frank Ding"
     ],
     "a": [
      "Janet Garrity",
      "Jonathan Goldner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lucy Li",
      "Wolfgang Chincarini"
     ],
     "a": [
      "Janine Forrest",
      "Edwin Saxman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Carolyn Dardani-Horensky",
      "Lance Brown"
     ],
     "a": [
      "Valerie Interrante",
      "Tom Zentmeyer"
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
      "Jane Meng",
      "Stephen Hanak"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Carolyn Dardani-Horensky",
      "Lan Bin"
     ],
     "a": [
      "Janine Forrest",
      "Valerie Interrante"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Fabienne Yu",
      "Jean Wang"
     ],
     "a": [
      "Jane Meng",
      "Sherlyn Harrison"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Yang Xiang",
      "Henry Wang"
     ],
     "a": [
      "Jonathan Goldner",
      "Tom Zentmeyer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Frank Ding",
      "Albert Pamudji"
     ],
     "a": [
      "Edwin Saxman",
      "Stephen Hanak"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Lucy Li",
      "Lance Brown"
     ],
     "a": [
      "Janine Forrest",
      "Edwin Saxman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Carolyn Dardani-Horensky",
      "Yang Xiang"
     ],
     "a": [
      "Janet Garrity",
      "Tom Zentmeyer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jean Wang",
      "Frank Ding"
     ],
     "a": [
      "Valerie Interrante",
      "Jonathan Goldner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Lan Bin",
      "Wolfgang Chincarini"
     ],
     "a": [
      "Sherlyn Harrison",
      "Stephen Hanak"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jean Wang",
      "Fabienne Yu"
     ],
     "a": [
      "Janet Garrity",
      "Janine Forrest"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lucy Li",
      "Lan Bin"
     ],
     "a": [
      "Jane Meng",
      "Valerie Interrante"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Yang Xiang",
      "Lance Brown"
     ],
     "a": [
      "Edwin Saxman",
      "Tom Zentmeyer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Frank Ding",
      "Albert Pamudji"
     ],
     "a": [
      "Jonathan Goldner",
      "Stephen Hanak"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Carolyn Dardani-Horensky",
      "Henry Wang"
     ],
     "a": [
      "Janet Garrity",
      "Tom Zentmeyer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Fabienne Yu",
      "Albert Pamudji"
     ],
     "a": [
      "Sherlyn Harrison",
      "Jonathan Goldner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 29,
     "as": 27,
     "h": [
      "Lucy Li",
      "Wolfgang Chincarini"
     ],
     "a": [
      "Valerie Interrante",
      "Edwin Saxman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lan Bin",
      "Frank Ding"
     ],
     "a": [
      "Jane Meng",
      "Stephen Hanak"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Lucy Li",
      "Jean Wang"
     ],
     "a": [
      "Janet Garrity",
      "Janine Forrest"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Carolyn Dardani-Horensky",
      "Lan Bin"
     ],
     "a": [
      "Jane Meng",
      "Sherlyn Harrison"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lance Brown",
      "Henry Wang"
     ],
     "a": [
      "Tom Zentmeyer",
      "Edwin Saxman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Albert Pamudji",
      "Wolfgang Chincarini"
     ],
     "a": [
      "Jonathan Goldner",
      "Stephen Hanak"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Jean Wang",
      "Wolfgang Chincarini"
     ],
     "a": [
      "Janine Forrest",
      "Jonathan Goldner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Carolyn Dardani-Horensky",
      "Yang Xiang"
     ],
     "a": [
      "Valerie Interrante",
      "Tom Zentmeyer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Lucy Li",
      "Henry Wang"
     ],
     "a": [
      "Sherlyn Harrison",
      "Edwin Saxman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Fabienne Yu",
      "Frank Ding"
     ],
     "a": [
      "Jane Meng",
      "Stephen Hanak"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Lucy Li",
      "Jean Wang"
     ],
     "a": [
      "Janine Forrest",
      "Valerie Interrante"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Fabienne Yu",
      "Lan Bin"
     ],
     "a": [
      "Janet Garrity",
      "Sherlyn Harrison"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Yang Xiang",
      "Henry Wang"
     ],
     "a": [
      "Jonathan Goldner",
      "Tom Zentmeyer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Wolfgang Chincarini",
      "Lance Brown"
     ],
     "a": [
      "Stephen Hanak",
      "Edwin Saxman"
     ]
    }
   ],
   "subs": [
    "Jean Wang",
    "Sherlyn Harrison",
    "Edwin Saxman",
    "Frank Ding",
    "Albert Pamudji",
    "Fabienne Yu",
    "Lan Bin"
   ]
  },
  {
   "result": "away",
   "week": 9,
   "home": "Bounce Malvern Blue",
   "away": "Bounce Malvern Black",
   "time": "2025-10-18T14:30:00",
   "complete": true,
   "homePoints": 443,
   "awayPoints": 662,
   "homeGW": 3,
   "awayGW": 29,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jodi Evans",
      "David Marchese"
     ],
     "a": [
      "Katherine Maruyama",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Kathy BernéT",
      "Sandro Stefanelli"
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
      "Nancy Blank",
      "Tim Phelan"
     ],
     "a": [
      "Karen Moliver",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Wendy Frost",
      "Brenden Dorley"
     ],
     "a": [
      "Jennifer Wang",
      "Brian Aguilar"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jodi Evans",
      "Kathy BernéT"
     ],
     "a": [
      "Katherine Maruyama",
      "Karen Moliver"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Wendy Frost",
      "Nancy Blank"
     ],
     "a": [
      "Jill Scully",
      "Jennifer Wang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "David Marchese",
      "Sandro Stefanelli"
     ],
     "a": [
      "Michael Finkelstein",
      "Derek Le"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Patrik Grubb",
      "Tim Phelan"
     ],
     "a": [
      "Keith Goldberg",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Wendy Frost",
      "Sandro Stefanelli"
     ],
     "a": [
      "Jill Scully",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Nancy Blank",
      "David Marchese"
     ],
     "a": [
      "Stephanie Woomer",
      "Brian Aguilar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Kathy BernéT",
      "Brenden Dorley"
     ],
     "a": [
      "Katherine Maruyama",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jodi Evans",
      "Patrik Grubb"
     ],
     "a": [
      "Jennifer Wang",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jodi Evans",
      "Wendy Frost"
     ],
     "a": [
      "Jill Scully",
      "Stephanie Woomer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Nancy Blank",
      "Kathy BernéT"
     ],
     "a": [
      "Karen Moliver",
      "Jennifer Wang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Patrik Grubb",
      "Brenden Dorley"
     ],
     "a": [
      "Brian Aguilar",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Sandro Stefanelli",
      "Tim Phelan"
     ],
     "a": [
      "Derek Le",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kathy BernéT",
      "Patrik Grubb"
     ],
     "a": [
      "Jill Scully",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jodi Evans",
      "Brenden Dorley"
     ],
     "a": [
      "Katherine Maruyama",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 4,
     "as": 21,
     "h": [
      "Wendy Frost",
      "David Marchese"
     ],
     "a": [
      "Stephanie Woomer",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Nancy Blank",
      "Sandro Stefanelli"
     ],
     "a": [
      "Karen Moliver",
      "Brian Aguilar"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jodi Evans",
      "Nancy Blank"
     ],
     "a": [
      "Jill Scully",
      "Jennifer Wang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Kathy BernéT",
      "Wendy Frost"
     ],
     "a": [
      "Stephanie Woomer",
      "Katherine Maruyama"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Brenden Dorley",
      "Tim Phelan"
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
      "Sandro Stefanelli",
      "David Marchese"
     ],
     "a": [
      "Brian Aguilar",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Wendy Frost",
      "Tim Phelan"
     ],
     "a": [
      "Jill Scully",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jodi Evans",
      "David Marchese"
     ],
     "a": [
      "Katherine Maruyama",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kathy BernéT",
      "Brenden Dorley"
     ],
     "a": [
      "Jennifer Wang",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Nancy Blank",
      "Patrik Grubb"
     ],
     "a": [
      "Karen Moliver",
      "Keith Goldberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jodi Evans",
      "Kathy BernéT"
     ],
     "a": [
      "Katherine Maruyama",
      "Jennifer Wang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Wendy Frost",
      "Nancy Blank"
     ],
     "a": [
      "Stephanie Woomer",
      "Karen Moliver"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "David Marchese",
      "Patrik Grubb"
     ],
     "a": [
      "Keith Goldberg",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Brenden Dorley",
      "Tim Phelan"
     ],
     "a": [
      "Brian Aguilar",
      "Jim Darcangelo"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 9,
   "home": "Pickleball Palace",
   "away": "Pickle House",
   "time": "2025-10-19T14:00:00",
   "complete": true,
   "homePoints": 602,
   "awayPoints": 535,
   "homeGW": 19,
   "awayGW": 13,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jill Lesnik",
      "David Coleman"
     ],
     "a": [
      "Wei Zhu",
      "Nanjun Qian"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lydia Fiore",
      "Mike Giampapa"
     ],
     "a": [
      "Susan Zhang",
      "Michael Vollmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Amanda Quinn",
      "Toby Mcmahan"
     ],
     "a": [
      "Lucy Li",
      "Wolfgang Chincarini"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Laura Elleman",
      "Charlie Johnston"
     ],
     "a": [
      "Tanya Patterson",
      "Lance Brown"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Jill Lesnik",
      "Amanda Quinn"
     ],
     "a": [
      "Susan Zhang",
      "Wei Zhu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kate Curren",
      "Laura Elleman"
     ],
     "a": [
      "Lucy Li",
      "Tanya Patterson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Toby Mcmahan",
      "Chris Heimerle"
     ],
     "a": [
      "Wolfgang Chincarini",
      "Michael Vollmer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Charlie Johnston",
      "Mike Giampapa"
     ],
     "a": [
      "Lance Brown",
      "Nanjun Qian"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kate Curren",
      "Charlie Johnston"
     ],
     "a": [
      "Carolyn Dardani-Horensky",
      "Michael Vollmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Amanda Quinn",
      "David Coleman"
     ],
     "a": [
      "Wei Zhu",
      "Nanjun Qian"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Laura Elleman",
      "Toby Mcmahan"
     ],
     "a": [
      "Lucy Li",
      "Wolfgang Chincarini"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jill Lesnik",
      "Chris Heimerle"
     ],
     "a": [
      "Tanya Patterson",
      "Lance Brown"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kate Curren",
      "Jill Lesnik"
     ],
     "a": [
      "Carolyn Dardani-Horensky",
      "Susan Zhang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lydia Fiore",
      "Laura Elleman"
     ],
     "a": [
      "Lucy Li",
      "Tanya Patterson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Toby Mcmahan",
      "Chris Heimerle"
     ],
     "a": [
      "Wolfgang Chincarini",
      "Michael Vollmer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Charlie Johnston",
      "David Coleman"
     ],
     "a": [
      "Lance Brown",
      "Nanjun Qian"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Lydia Fiore",
      "Mike Giampapa"
     ],
     "a": [
      "Susan Zhang",
      "Michael Vollmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Amanda Quinn",
      "Toby Mcmahan"
     ],
     "a": [
      "Carolyn Dardani-Horensky",
      "Wolfgang Chincarini"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kate Curren",
      "Chris Heimerle"
     ],
     "a": [
      "Lucy Li",
      "Nanjun Qian"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Laura Elleman",
      "David Coleman"
     ],
     "a": [
      "Wei Zhu",
      "Lance Brown"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kate Curren",
      "Jill Lesnik"
     ],
     "a": [
      "Carolyn Dardani-Horensky",
      "Tanya Patterson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lydia Fiore",
      "Amanda Quinn"
     ],
     "a": [
      "Lucy Li",
      "Susan Zhang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Mike Giampapa",
      "Chris Heimerle"
     ],
     "a": [
      "Michael Vollmer",
      "Nanjun Qian"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Charlie Johnston",
      "David Coleman"
     ],
     "a": [
      "Wolfgang Chincarini",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Kate Curren",
      "Charlie Johnston"
     ],
     "a": [
      "Carolyn Dardani-Horensky",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Lydia Fiore",
      "Toby Mcmahan"
     ],
     "a": [
      "Tanya Patterson",
      "Michael Vollmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Amanda Quinn",
      "Chris Heimerle"
     ],
     "a": [
      "Lucy Li",
      "Nanjun Qian"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Laura Elleman",
      "Mike Giampapa"
     ],
     "a": [
      "Wei Zhu",
      "Wolfgang Chincarini"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Kate Curren",
      "Lydia Fiore"
     ],
     "a": [
      "Tanya Patterson",
      "Carolyn Dardani-Horensky"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Jill Lesnik",
      "Amanda Quinn"
     ],
     "a": [
      "Susan Zhang",
      "Wei Zhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Mike Giampapa",
      "Toby Mcmahan"
     ],
     "a": [
      "Michael Vollmer",
      "Nanjun Qian"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Charlie Johnston",
      "Chris Heimerle"
     ],
     "a": [
      "Lance Brown",
      "Wolfgang Chincarini"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 10,
   "home": "Pickle Place",
   "away": "Flemington",
   "time": "2025-10-25T12:00:00",
   "complete": true,
   "homePoints": 637,
   "awayPoints": 576,
   "homeGW": 19,
   "awayGW": 13,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Janine Forrest",
      "Eric Markowitz"
     ],
     "a": [
      "Christine Papa",
      "Marc Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Jane Meng",
      "Robert Block"
     ],
     "a": [
      "Tara Kramer",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Cynthia Eisen",
      "David Eisen"
     ],
     "a": [
      "Chanda Mccoy",
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
      "Tom Zentmeyer"
     ],
     "a": [
      "Denise Richmond",
      "Simon Perry"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Cynthia Eisen",
      "Harriet Levin"
     ],
     "a": [
      "Aimee Castellano",
      "Chanda Mccoy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Janine Forrest",
      "Marykristin Haskell"
     ],
     "a": [
      "Tara Kramer",
      "Denise Richmond"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Robert Block",
      "Z Zhang"
     ],
     "a": [
      "Scott Rubin",
      "Marc Friedman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Eric Markowitz",
      "Tom Zentmeyer"
     ],
     "a": [
      "Art Muth",
      "Simon Perry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jane Meng",
      "Robert Block"
     ],
     "a": [
      "Christine Papa",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Marykristin Haskell",
      "David Eisen"
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
     "as": 17,
     "h": [
      "Valerie Interrante",
      "Z Zhang"
     ],
     "a": [
      "Aimee Castellano",
      "Scott Rubin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Harriet Levin",
      "Tom Zentmeyer"
     ],
     "a": [
      "Chanda Mccoy",
      "Simon Perry"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Cynthia Eisen",
      "Harriet Levin"
     ],
     "a": [
      "Denise Richmond",
      "Chanda Mccoy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Janine Forrest",
      "Marykristin Haskell"
     ],
     "a": [
      "Aimee Castellano",
      "Christine Papa"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "David Eisen",
      "Z Zhang"
     ],
     "a": [
      "David Osborne",
      "Marc Friedman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Eric Markowitz",
      "Robert Block"
     ],
     "a": [
      "Art Muth",
      "Scott Rubin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Marykristin Haskell",
      "Tom Zentmeyer"
     ],
     "a": [
      "Chanda Mccoy",
      "Art Muth"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Harriet Levin",
      "Robert Block"
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
     "as": 16,
     "h": [
      "Valerie Interrante",
      "Eric Markowitz"
     ],
     "a": [
      "Denise Richmond",
      "Marc Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Cynthia Eisen",
      "David Eisen"
     ],
     "a": [
      "Tara Kramer",
      "Simon Perry"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Janine Forrest",
      "Valerie Interrante"
     ],
     "a": [
      "Aimee Castellano",
      "Chanda Mccoy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jane Meng",
      "Marykristin Haskell"
     ],
     "a": [
      "Christine Papa",
      "Tara Kramer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "David Eisen",
      "Z Zhang"
     ],
     "a": [
      "David Osborne",
      "Scott Rubin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Eric Markowitz",
      "Tom Zentmeyer"
     ],
     "a": [
      "Art Muth",
      "Simon Perry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Valerie Interrante",
      "Tom Zentmeyer"
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
     "as": 18,
     "h": [
      "Jane Meng",
      "Z Zhang"
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
     "as": 17,
     "h": [
      "Harriet Levin",
      "Robert Block"
     ],
     "a": [
      "Chanda Mccoy",
      "Art Muth"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Marykristin Haskell",
      "Eric Markowitz"
     ],
     "a": [
      "Denise Richmond",
      "Marc Friedman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jane Meng",
      "Valerie Interrante"
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
      "Harriet Levin",
      "Janine Forrest"
     ],
     "a": [
      "Aimee Castellano",
      "Tara Kramer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "David Eisen",
      "Robert Block"
     ],
     "a": [
      "David Osborne",
      "Art Muth"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Tom Zentmeyer",
      "Z Zhang"
     ],
     "a": [
      "Marc Friedman",
      "Simon Perry"
     ]
    }
   ],
   "subs": [
    "Marc Friedman"
   ]
  },
  {
   "result": "away",
   "week": 10,
   "home": "Monroe",
   "away": "Players Courtyard",
   "time": "2025-10-25T14:00:00",
   "complete": true,
   "homePoints": 545,
   "awayPoints": 639,
   "homeGW": 8,
   "awayGW": 24,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Amy Chrebet",
      "Aaron Pine"
     ],
     "a": [
      "Kim Hamilton",
      "Brad Daddis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Meryl Nadler",
      "Don Godinez"
     ],
     "a": [
      "Kate Siedell",
      "Jeff Lorman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Barbara Hess",
      "Glenn Hillman"
     ],
     "a": [
      "Elyse Diamond",
      "Marc Harden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Rosalyn Goldsmith",
      "Eliezer Mintz"
     ],
     "a": [
      "Susan St. Pierre",
      "Roger Graterol"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Amy Chrebet",
      "Rosalyn Goldsmith"
     ],
     "a": [
      "Kim Hamilton",
      "Kate Siedell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Barbara Hess",
      "Meryl Nadler"
     ],
     "a": [
      "Elyse Diamond",
      "Susan St. Pierre"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Don Godinez",
      "Glenn Hillman"
     ],
     "a": [
      "Marc Harden",
      "Roger Graterol"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Scott Friedman",
      "Aaron Pine"
     ],
     "a": [
      "Jeff Lorman",
      "Bennett Shanker"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Barbara Hess",
      "Scott Friedman"
     ],
     "a": [
      "Kim Hamilton",
      "Roger Graterol"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Meryl Nadler",
      "Aaron Pine"
     ],
     "a": [
      "Elyse Diamond",
      "Marc Harden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Rosalyn Goldsmith",
      "Eliezer Mintz"
     ],
     "a": [
      "Kate Siedell",
      "Bennett Shanker"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Amy Chrebet",
      "Glenn Hillman"
     ],
     "a": [
      "Susan St. Pierre",
      "Brad Daddis"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Meryl Nadler",
      "Rosalyn Goldsmith"
     ],
     "a": [
      "Elyse Diamond",
      "Kate Siedell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Barbara Hess",
      "Amy Chrebet"
     ],
     "a": [
      "Susan St. Pierre",
      "Kim Hamilton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Eliezer Mintz",
      "Scott Friedman"
     ],
     "a": [
      "Roger Graterol",
      "Jeff Lorman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Don Godinez",
      "Glenn Hillman"
     ],
     "a": [
      "Brad Daddis",
      "Bennett Shanker"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Rosalyn Goldsmith",
      "Aaron Pine"
     ],
     "a": [
      "Kate Siedell",
      "Bennett Shanker"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Barbara Hess",
      "Glenn Hillman"
     ],
     "a": [
      "Kim Hamilton",
      "Marc Harden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Amy Chrebet",
      "Don Godinez"
     ],
     "a": [
      "Elyse Diamond",
      "Jeff Lorman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Meryl Nadler",
      "Scott Friedman"
     ],
     "a": [
      "Susan St. Pierre",
      "Brad Daddis"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Meryl Nadler",
      "Amy Chrebet"
     ],
     "a": [
      "Kate Siedell",
      "Kim Hamilton"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Barbara Hess",
      "Rosalyn Goldsmith"
     ],
     "a": [
      "Elyse Diamond",
      "Susan St. Pierre"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Eliezer Mintz",
      "Glenn Hillman"
     ],
     "a": [
      "Roger Graterol",
      "Bennett Shanker"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Aaron Pine",
      "Don Godinez"
     ],
     "a": [
      "Jeff Lorman",
      "Marc Harden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Meryl Nadler",
      "Glenn Hillman"
     ],
     "a": [
      "Susan St. Pierre",
      "Marc Harden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Barbara Hess",
      "Don Godinez"
     ],
     "a": [
      "Kate Siedell",
      "Roger Graterol"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Rosalyn Goldsmith",
      "Scott Friedman"
     ],
     "a": [
      "Kim Hamilton",
      "Brad Daddis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Amy Chrebet",
      "Eliezer Mintz"
     ],
     "a": [
      "Elyse Diamond",
      "Jeff Lorman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Barbara Hess",
      "Meryl Nadler"
     ],
     "a": [
      "Kim Hamilton",
      "Elyse Diamond"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Amy Chrebet",
      "Rosalyn Goldsmith"
     ],
     "a": [
      "Kate Siedell",
      "Susan St. Pierre"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Aaron Pine",
      "Scott Friedman"
     ],
     "a": [
      "Bennett Shanker",
      "Jeff Lorman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Eliezer Mintz",
      "Glenn Hillman"
     ],
     "a": [
      "Roger Graterol",
      "Brad Daddis"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 10,
   "home": "Players Courtyard",
   "away": "Home Court",
   "time": "2025-10-26T12:00:00",
   "complete": true,
   "homePoints": 647,
   "awayPoints": 514,
   "homeGW": 26,
   "awayGW": 6,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kate Siedell",
      "Bennett Shanker"
     ],
     "a": [
      "Surbhi Sabharwal",
      "Randy Samuels"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Annemarie Mccartney",
      "Marc Harden"
     ],
     "a": [
      "Anita Bobba",
      "George Mandl"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Stacey Frank",
      "Jeff Lorman"
     ],
     "a": [
      "Andrea Smith",
      "Carlo Caronan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kim Hamilton",
      "Brad Daddis"
     ],
     "a": [
      "Margaret Weidlich",
      "Robert Huntley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kim Hamilton",
      "Pam Boyd"
     ],
     "a": [
      "Margaret Weidlich",
      "Kajal Sinkar"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Annemarie Mccartney",
      "Elyse Diamond"
     ],
     "a": [
      "Surbhi Sabharwal",
      "Anita Bobba"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jonathan Brand",
      "Jeff Lorman"
     ],
     "a": [
      "Robert Huntley",
      "Jhon Cifuentes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Marc Harden",
      "Brad Daddis"
     ],
     "a": [
      "Clifford Luster",
      "Randy Samuels"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kate Siedell",
      "Bennett Shanker"
     ],
     "a": [
      "Surbhi Sabharwal",
      "Robert Huntley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Pam Boyd",
      "Brad Daddis"
     ],
     "a": [
      "Andrea Smith",
      "Carlo Caronan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Elyse Diamond",
      "Marc Harden"
     ],
     "a": [
      "Kajal Sinkar",
      "Randy Samuels"
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
      "Margaret Weidlich",
      "Clifford Luster"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Pam Boyd",
      "Kate Siedell"
     ],
     "a": [
      "Andrea Smith",
      "Anita Bobba"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Elyse Diamond",
      "Annemarie Mccartney"
     ],
     "a": [
      "Kajal Sinkar",
      "Surbhi Sabharwal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jonathan Brand",
      "Brad Daddis"
     ],
     "a": [
      "Carlo Caronan",
      "Randy Samuels"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Bennett Shanker",
      "Jeff Lorman"
     ],
     "a": [
      "Robert Huntley",
      "Clifford Luster"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Annemarie Mccartney",
      "Jonathan Brand"
     ],
     "a": [
      "Anita Bobba",
      "George Mandl"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kim Hamilton",
      "Marc Harden"
     ],
     "a": [
      "Andrea Smith",
      "Jhon Cifuentes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Stacey Frank",
      "Brad Daddis"
     ],
     "a": [
      "Margaret Weidlich",
      "Robert Huntley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Elyse Diamond",
      "Jeff Lorman"
     ],
     "a": [
      "Kajal Sinkar",
      "Carlo Caronan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Annemarie Mccartney",
      "Kim Hamilton"
     ],
     "a": [
      "Surbhi Sabharwal",
      "Anita Bobba"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Pam Boyd",
      "Kate Siedell"
     ],
     "a": [
      "Kajal Sinkar",
      "Andrea Smith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Bennett Shanker",
      "Jeff Lorman"
     ],
     "a": [
      "George Mandl",
      "Clifford Luster"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jonathan Brand",
      "Marc Harden"
     ],
     "a": [
      "Jhon Cifuentes",
      "Carlo Caronan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Pam Boyd",
      "Bennett Shanker"
     ],
     "a": [
      "Surbhi Sabharwal",
      "Randy Samuels"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Elyse Diamond",
      "Jeff Lorman"
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
     "as": 13,
     "h": [
      "Annemarie Mccartney",
      "Marc Harden"
     ],
     "a": [
      "Anita Bobba",
      "Clifford Luster"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Stacey Frank",
      "Brad Daddis"
     ],
     "a": [
      "Margaret Weidlich",
      "Jhon Cifuentes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kate Siedell",
      "Stacey Frank"
     ],
     "a": [
      "Margaret Weidlich",
      "Andrea Smith"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kim Hamilton",
      "Pam Boyd"
     ],
     "a": [
      "Anita Bobba",
      "Kajal Sinkar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Bennett Shanker",
      "Marc Harden"
     ],
     "a": [
      "George Mandl",
      "Jhon Cifuentes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jonathan Brand",
      "Jeff Lorman"
     ],
     "a": [
      "Robert Huntley",
      "Clifford Luster"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 10,
   "home": "Pickle Place",
   "away": "The Atlantic Club",
   "time": "2025-10-26T15:00:00",
   "complete": true,
   "homePoints": 653,
   "awayPoints": 548,
   "homeGW": 24,
   "awayGW": 8,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Cynthia Eisen",
      "David Eisen"
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
     "as": 11,
     "h": [
      "Harriet Levin",
      "Tom Zentmeyer"
     ],
     "a": [
      "Ali Fordyce",
      "Hal Greenspan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Valerie Interrante",
      "Z Zhang"
     ],
     "a": [
      "Eva Danieli",
      "Bruce Bilow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Janine Forrest",
      "Jonathan Goldner"
     ],
     "a": [
      "Tanya Kenney",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Cynthia Eisen",
      "Harriet Levin"
     ],
     "a": [
      "Eva Danieli",
      "Ali Fordyce"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Janine Forrest",
      "Valerie Interrante"
     ],
     "a": [
      "Tanya Kenney",
      "Natasha De Carvalho"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Eric Markowitz",
      "Tom Zentmeyer"
     ],
     "a": [
      "Michael Dombrowiecki",
      "Bruce Bilow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "David Eisen",
      "Z Zhang"
     ],
     "a": [
      "Joe Palumbo",
      "Hal Greenspan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Harriet Levin",
      "Tom Zentmeyer"
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
     "as": 13,
     "h": [
      "Cynthia Eisen",
      "David Eisen"
     ],
     "a": [
      "Ali Fordyce",
      "Bruce Bilow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Janine Forrest",
      "Eric Markowitz"
     ],
     "a": [
      "Natasha De Carvalho",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Marykristin Haskell",
      "Jonathan Goldner"
     ],
     "a": [
      "Tanya Kenney",
      "Hal Greenspan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Janine Forrest",
      "Valerie Interrante"
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
     "as": 18,
     "h": [
      "Cynthia Eisen",
      "Harriet Levin"
     ],
     "a": [
      "Tanya Kenney",
      "Ali Fordyce"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Jonathan Goldner",
      "Tom Zentmeyer"
     ],
     "a": [
      "Joe Palumbo",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "David Eisen",
      "Z Zhang"
     ],
     "a": [
      "Hal Greenspan",
      "Bruce Bilow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Janet Garrity",
      "Tom Zentmeyer"
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
     "as": 17,
     "h": [
      "Valerie Interrante",
      "Z Zhang"
     ],
     "a": [
      "Ali Fordyce",
      "Hal Greenspan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Janine Forrest",
      "Eric Markowitz"
     ],
     "a": [
      "Eva Danieli",
      "Bruce Bilow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Harriet Levin",
      "Jonathan Goldner"
     ],
     "a": [
      "Tanya Kenney",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Harriet Levin",
      "Marykristin Haskell"
     ],
     "a": [
      "Eva Danieli",
      "Ali Fordyce"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Cynthia Eisen",
      "Janine Forrest"
     ],
     "a": [
      "Tanya Kenney",
      "Natasha De Carvalho"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jonathan Goldner",
      "Z Zhang"
     ],
     "a": [
      "Michael Dombrowiecki",
      "Bruce Bilow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Eric Markowitz",
      "Tom Zentmeyer"
     ],
     "a": [
      "Joe Palumbo",
      "Hal Greenspan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 28,
     "h": [
      "Valerie Interrante",
      "Tom Zentmeyer"
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
     "as": 20,
     "h": [
      "Marykristin Haskell",
      "Z Zhang"
     ],
     "a": [
      "Ali Fordyce",
      "Bruce Bilow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Harriet Levin",
      "David Eisen"
     ],
     "a": [
      "Natasha De Carvalho",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Janet Garrity",
      "Eric Markowitz"
     ],
     "a": [
      "Tanya Kenney",
      "Hal Greenspan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Harriet Levin",
      "Cynthia Eisen"
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
     "as": 18,
     "h": [
      "Janet Garrity",
      "Marykristin Haskell"
     ],
     "a": [
      "Tanya Kenney",
      "Ali Fordyce"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "David Eisen",
      "Eric Markowitz"
     ],
     "a": [
      "Joe Palumbo",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Jonathan Goldner",
      "Tom Zentmeyer"
     ],
     "a": [
      "Hal Greenspan",
      "Bruce Bilow"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 10,
   "home": "Pickleball Palace",
   "away": "Bounce Malvern Black",
   "time": "2025-10-26T15:00:00",
   "complete": true,
   "homePoints": 582,
   "awayPoints": 647,
   "homeGW": 13,
   "awayGW": 19,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kate Curren",
      "Thomas Schillow"
     ],
     "a": [
      "Judy Qiu",
      "Jingwei Wu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Bin Song",
      "Brian Gonzalez"
     ],
     "a": [
      "Jennifer Wang",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Sinitra Siengsanaoh",
      "Bud Heller"
     ],
     "a": [
      "Stephanie Woomer",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Carly Pfeffer",
      "Rick Vazquez"
     ],
     "a": [
      "Jill Scully",
      "Brian Aguilar"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kate Curren",
      "Carly Pfeffer"
     ],
     "a": [
      "Jennifer Wang",
      "Karen Moliver"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Andrea Dellechiaie",
      "Bin Song"
     ],
     "a": [
      "Stephanie Woomer",
      "Jill Scully"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Alex Lee",
      "Thomas Schillow"
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
     "as": 18,
     "h": [
      "Rick Vazquez",
      "Brian Gonzalez"
     ],
     "a": [
      "Brian Aguilar",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kate Curren",
      "Thomas Schillow"
     ],
     "a": [
      "Jill Scully",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Carly Pfeffer",
      "Bud Heller"
     ],
     "a": [
      "Jennifer Wang",
      "Jingwei Wu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Bin Song",
      "Rick Vazquez"
     ],
     "a": [
      "Judy Qiu",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 27,
     "as": 29,
     "h": [
      "Sinitra Siengsanaoh",
      "Alex Lee"
     ],
     "a": [
      "Karen Moliver",
      "Keith Goldberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Carly Pfeffer",
      "Andrea Dellechiaie"
     ],
     "a": [
      "Stephanie Woomer",
      "Jill Scully"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Sinitra Siengsanaoh",
      "Bin Song"
     ],
     "a": [
      "Judy Qiu",
      "Karen Moliver"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Rick Vazquez",
      "Brian Gonzalez"
     ],
     "a": [
      "Derek Le",
      "Jingwei Wu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Louis Vessichelli",
      "Bud Heller"
     ],
     "a": [
      "Keith Goldberg",
      "Brian Aguilar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kate Curren",
      "Alex Lee"
     ],
     "a": [
      "Jennifer Wang",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Andrea Dellechiaie",
      "Louis Vessichelli"
     ],
     "a": [
      "Stephanie Woomer",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Bin Song",
      "Rick Vazquez"
     ],
     "a": [
      "Judy Qiu",
      "Jingwei Wu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sinitra Siengsanaoh",
      "Bud Heller"
     ],
     "a": [
      "Karen Moliver",
      "Brian Aguilar"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Andrea Dellechiaie",
      "Sinitra Siengsanaoh"
     ],
     "a": [
      "Judy Qiu",
      "Jennifer Wang"
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
      "Jill Scully",
      "Karen Moliver"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Louis Vessichelli",
      "Brian Gonzalez"
     ],
     "a": [
      "Michael Finkelstein",
      "Keith Goldberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Alex Lee",
      "Thomas Schillow"
     ],
     "a": [
      "Derek Le",
      "Jingwei Wu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Sinitra Siengsanaoh",
      "Thomas Schillow"
     ],
     "a": [
      "Karen Moliver",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kate Curren",
      "Louis Vessichelli"
     ],
     "a": [
      "Jennifer Wang",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Andrea Dellechiaie",
      "Alex Lee"
     ],
     "a": [
      "Stephanie Woomer",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Carly Pfeffer",
      "Bud Heller"
     ],
     "a": [
      "Jill Scully",
      "Brian Aguilar"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Carly Pfeffer",
      "Sinitra Siengsanaoh"
     ],
     "a": [
      "Stephanie Woomer",
      "Judy Qiu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Kate Curren",
      "Andrea Dellechiaie"
     ],
     "a": [
      "Jennifer Wang",
      "Jill Scully"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Bud Heller",
      "Alex Lee"
     ],
     "a": [
      "Jingwei Wu",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Louis Vessichelli",
      "Brian Gonzalez"
     ],
     "a": [
      "Brian Aguilar",
      "Keith Goldberg"
     ]
    }
   ],
   "subs": [
    "Rick Vazquez",
    "Bin Song"
   ]
  },
  {
   "result": "home",
   "week": 10,
   "home": "Home Court",
   "away": "Bounce Malvern Blue",
   "time": "2025-10-26T15:00:00",
   "complete": true,
   "homePoints": 621,
   "awayPoints": 645,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Andrea Smith",
      "Carlo Caronan"
     ],
     "a": [
      "Jodi Evans",
      "Brenden Dorley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Margaret Weidlich",
      "Robert Huntley"
     ],
     "a": [
      "Nancy Blank",
      "Tim Phelan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Surbhi Sabharwal",
      "Randy Samuels"
     ],
     "a": [
      "Kathy BernéT",
      "Jeremy Workman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Anita Bobba",
      "George Mandl"
     ],
     "a": [
      "Christine Dugan",
      "Hal Golden"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Margaret Weidlich",
      "Kajal Sinkar"
     ],
     "a": [
      "Lucy Chow",
      "Jodi Evans"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Surbhi Sabharwal",
      "Anita Bobba"
     ],
     "a": [
      "Kathy BernéT",
      "Christine Dugan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Robert Huntley",
      "Jhon Cifuentes"
     ],
     "a": [
      "Patrik Grubb",
      "Brenden Dorley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Clifford Luster",
      "Randy Samuels"
     ],
     "a": [
      "Hal Golden",
      "Jeremy Workman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Surbhi Sabharwal",
      "Robert Huntley"
     ],
     "a": [
      "Nancy Blank",
      "Patrik Grubb"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kajal Sinkar",
      "Randy Samuels"
     ],
     "a": [
      "Kathy BernéT",
      "Hal Golden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Andrea Smith",
      "Carlo Caronan"
     ],
     "a": [
      "Lucy Chow",
      "Tim Phelan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Margaret Weidlich",
      "Clifford Luster"
     ],
     "a": [
      "Jodi Evans",
      "Brenden Dorley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Margaret Weidlich",
      "Andrea Smith"
     ],
     "a": [
      "Christine Dugan",
      "Lucy Chow"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kajal Sinkar",
      "Surbhi Sabharwal"
     ],
     "a": [
      "Nancy Blank",
      "Kathy BernéT"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Randy Samuels",
      "George Mandl"
     ],
     "a": [
      "Tim Phelan",
      "Jeremy Workman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Robert Huntley",
      "Carlo Caronan"
     ],
     "a": [
      "Hal Golden",
      "Patrik Grubb"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Anita Bobba",
      "Clifford Luster"
     ],
     "a": [
      "Jodi Evans",
      "Jeremy Workman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kajal Sinkar",
      "Carlo Caronan"
     ],
     "a": [
      "Christine Dugan",
      "Hal Golden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Andrea Smith",
      "Jhon Cifuentes"
     ],
     "a": [
      "Kathy BernéT",
      "Brenden Dorley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Margaret Weidlich",
      "Robert Huntley"
     ],
     "a": [
      "Lucy Chow",
      "Tim Phelan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kajal Sinkar",
      "Anita Bobba"
     ],
     "a": [
      "Kathy BernéT",
      "Jodi Evans"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Surbhi Sabharwal",
      "Andrea Smith"
     ],
     "a": [
      "Lucy Chow",
      "Nancy Blank"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Carlo Caronan",
      "Jhon Cifuentes"
     ],
     "a": [
      "Tim Phelan",
      "Patrik Grubb"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "George Mandl",
      "Clifford Luster"
     ],
     "a": [
      "Brenden Dorley",
      "Jeremy Workman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kajal Sinkar",
      "George Mandl"
     ],
     "a": [
      "Jodi Evans",
      "Hal Golden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Margaret Weidlich",
      "Jhon Cifuentes"
     ],
     "a": [
      "Nancy Blank",
      "Tim Phelan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Anita Bobba",
      "Clifford Luster"
     ],
     "a": [
      "Christine Dugan",
      "Patrik Grubb"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Surbhi Sabharwal",
      "Randy Samuels"
     ],
     "a": [
      "Kathy BernéT",
      "Brenden Dorley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Margaret Weidlich",
      "Andrea Smith"
     ],
     "a": [
      "Christine Dugan",
      "Jodi Evans"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 32,
     "as": 30,
     "h": [
      "Anita Bobba",
      "Kajal Sinkar"
     ],
     "a": [
      "Lucy Chow",
      "Nancy Blank"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Robert Huntley",
      "Clifford Luster"
     ],
     "a": [
      "Hal Golden",
      "Patrik Grubb"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "George Mandl",
      "Jhon Cifuentes"
     ],
     "a": [
      "Tim Phelan",
      "Brenden Dorley"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 10,
   "home": "Pickle House",
   "away": "Flemington",
   "time": "2025-10-26T15:00:00",
   "complete": true,
   "homePoints": 572,
   "awayPoints": 662,
   "homeGW": 10,
   "awayGW": 22,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Lucy Li",
      "Jitendra Arora"
     ],
     "a": [
      "Denise Richmond",
      "Scott Rubin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Wei Zhu",
      "Nanjun Qian"
     ],
     "a": [
      "Susan St. Pierre",
      "Barrie Arnold"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Tanya Patterson",
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
     "hs": 21,
     "as": 19,
     "h": [
      "Susan Zhang",
      "Ping Peng"
     ],
     "a": [
      "Tara Kramer",
      "Art Muth"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lucy Li",
      "Tanya Patterson"
     ],
     "a": [
      "Tara Kramer",
      "Christine Papa"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Susan Zhang",
      "Wei Zhu"
     ],
     "a": [
      "Denise Richmond",
      "Amy Johnson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Lance Brown",
      "Nanjun Qian"
     ],
     "a": [
      "David Osborne",
      "Barrie Arnold"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jitendra Arora",
      "Ping Peng"
     ],
     "a": [
      "Art Muth",
      "Scott Rubin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Lucy Li",
      "Lance Brown"
     ],
     "a": [
      "Amy Johnson",
      "Art Muth"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Tanya Patterson",
      "Ping Peng"
     ],
     "a": [
      "Susan St. Pierre",
      "Scott Rubin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Carolyn Dardani-Horensky",
      "Nanjun Qian"
     ],
     "a": [
      "Denise Richmond",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Susan Zhang",
      "Jitendra Arora"
     ],
     "a": [
      "Tara Kramer",
      "Barrie Arnold"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Tanya Patterson",
      "Susan Zhang"
     ],
     "a": [
      "Denise Richmond",
      "Susan St. Pierre"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Lucy Li",
      "Carolyn Dardani-Horensky"
     ],
     "a": [
      "Christine Papa",
      "Amy Johnson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lance Brown",
      "Ping Peng"
     ],
     "a": [
      "Scott Rubin",
      "Barrie Arnold"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Nanjun Qian",
      "Jitendra Arora"
     ],
     "a": [
      "David Osborne",
      "Art Muth"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 27,
     "as": 29,
     "h": [
      "Wei Zhu",
      "Nanjun Qian"
     ],
     "a": [
      "Denise Richmond",
      "Barrie Arnold"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lucy Li",
      "Ping Peng"
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
     "as": 13,
     "h": [
      "Tanya Patterson",
      "Jitendra Arora"
     ],
     "a": [
      "Tara Kramer",
      "Scott Rubin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Carolyn Dardani-Horensky",
      "Lance Brown"
     ],
     "a": [
      "Christine Papa",
      "Art Muth"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Susan Zhang",
      "Carolyn Dardani-Horensky"
     ],
     "a": [
      "Susan St. Pierre",
      "Tara Kramer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Lucy Li",
      "Wei Zhu"
     ],
     "a": [
      "Christine Papa",
      "Denise Richmond"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Ping Peng",
      "Jitendra Arora"
     ],
     "a": [
      "Scott Rubin",
      "Art Muth"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Lance Brown",
      "Nanjun Qian"
     ],
     "a": [
      "David Osborne",
      "Barrie Arnold"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Lucy Li",
      "Ping Peng"
     ],
     "a": [
      "Susan St. Pierre",
      "Art Muth"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Carolyn Dardani-Horensky",
      "Nanjun Qian"
     ],
     "a": [
      "Amy Johnson",
      "Barrie Arnold"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Wei Zhu",
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
     "hs": 17,
     "as": 21,
     "h": [
      "Susan Zhang",
      "Jitendra Arora"
     ],
     "a": [
      "Tara Kramer",
      "David Osborne"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Carolyn Dardani-Horensky",
      "Wei Zhu"
     ],
     "a": [
      "Denise Richmond",
      "Susan St. Pierre"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lucy Li",
      "Tanya Patterson"
     ],
     "a": [
      "Christine Papa",
      "Amy Johnson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Nanjun Qian",
      "Jitendra Arora"
     ],
     "a": [
      "Art Muth",
      "Barrie Arnold"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lance Brown",
      "Ping Peng"
     ],
     "a": [
      "David Osborne",
      "Scott Rubin"
     ]
    }
   ],
   "subs": [
    "Barrie Arnold"
   ]
  },
  {
   "result": "away",
   "week": 10,
   "home": "Bounce Malvern Blue",
   "away": "The Atlantic Club",
   "time": "2025-10-26T18:00:00",
   "complete": true,
   "homePoints": 563,
   "awayPoints": 653,
   "homeGW": 9,
   "awayGW": 23,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jodi Evans",
      "Brenden Dorley"
     ],
     "a": [
      "Natasha De Carvalho",
      "Joe Palumbo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Kathy BernéT",
      "Tim Phelan"
     ],
     "a": [
      "Ali Fordyce",
      "Hal Greenspan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Nancy Blank",
      "Hal Golden"
     ],
     "a": [
      "Eva Danieli",
      "Bruce Bilow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Christine Dugan",
      "Jeremy Workman"
     ],
     "a": [
      "Tanya Kenney",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jodi Evans",
      "Nancy Blank"
     ],
     "a": [
      "Eva Danieli",
      "Ali Fordyce"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Kathy BernéT",
      "Christine Dugan"
     ],
     "a": [
      "Tanya Kenney",
      "Natasha De Carvalho"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Brenden Dorley",
      "Jeremy Workman"
     ],
     "a": [
      "Joe Palumbo",
      "Hal Greenspan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Tim Phelan",
      "Hal Golden"
     ],
     "a": [
      "Michael Dombrowiecki",
      "Bruce Bilow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jodi Evans",
      "Tim Phelan"
     ],
     "a": [
      "Natasha De Carvalho",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Kathy BernéT",
      "Jeremy Workman"
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
     "as": 15,
     "h": [
      "Nancy Blank",
      "Hal Golden"
     ],
     "a": [
      "Ali Fordyce",
      "Bruce Bilow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Christine Dugan",
      "Brenden Dorley"
     ],
     "a": [
      "Tanya Kenney",
      "Hal Greenspan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jodi Evans",
      "Christine Dugan"
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
     "as": 18,
     "h": [
      "Kathy BernéT",
      "Nancy Blank"
     ],
     "a": [
      "Tanya Kenney",
      "Ali Fordyce"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Tim Phelan",
      "Brenden Dorley"
     ],
     "a": [
      "Michael Dombrowiecki",
      "Joe Palumbo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Jeremy Workman",
      "Hal Golden"
     ],
     "a": [
      "Hal Greenspan",
      "Bruce Bilow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jodi Evans",
      "Hal Golden"
     ],
     "a": [
      "Eva Danieli",
      "Bruce Bilow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Kathy BernéT",
      "Brenden Dorley"
     ],
     "a": [
      "Tanya Kenney",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Nancy Blank",
      "Jeremy Workman"
     ],
     "a": [
      "Natasha De Carvalho",
      "Joe Palumbo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Christine Dugan",
      "Tim Phelan"
     ],
     "a": [
      "Ali Fordyce",
      "Hal Greenspan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Christine Dugan",
      "Nancy Blank"
     ],
     "a": [
      "Ali Fordyce",
      "Eva Danieli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Jodi Evans",
      "Kathy BernéT"
     ],
     "a": [
      "Tanya Kenney",
      "Natasha De Carvalho"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Hal Golden",
      "Brenden Dorley"
     ],
     "a": [
      "Bruce Bilow",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Tim Phelan",
      "Jeremy Workman"
     ],
     "a": [
      "Joe Palumbo",
      "Hal Greenspan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Christine Dugan",
      "Tim Phelan"
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
      "Nancy Blank",
      "Brenden Dorley"
     ],
     "a": [
      "Ali Fordyce",
      "Bruce Bilow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jodi Evans",
      "Jeremy Workman"
     ],
     "a": [
      "Tanya Kenney",
      "Hal Greenspan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Kathy BernéT",
      "Hal Golden"
     ],
     "a": [
      "Natasha De Carvalho",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kathy BernéT",
      "Christine Dugan"
     ],
     "a": [
      "Natasha De Carvalho",
      "Eva Danieli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Nancy Blank",
      "Jodi Evans"
     ],
     "a": [
      "Tanya Kenney",
      "Ali Fordyce"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jeremy Workman",
      "Brenden Dorley"
     ],
     "a": [
      "Joe Palumbo",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Hal Golden",
      "Tim Phelan"
     ],
     "a": [
      "Hal Greenspan",
      "Bruce Bilow"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 10,
   "home": "Bounce Malvern Black",
   "away": "Monroe",
   "time": "2025-10-26T18:00:00",
   "complete": true,
   "homePoints": 32,
   "awayPoints": 0,
   "homeGW": 32,
   "awayGW": 0,
   "games": [
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Karen Moliver",
      "Brian Aguilar"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Judy Qiu",
      "Jingwei Wu"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Jill Scully",
      "Derek Le"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Stephanie Woomer",
      "Keith Goldberg"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Judy Qiu",
      "Jennifer Wang"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Jill Scully",
      "Stephanie Woomer"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Brian Aguilar",
      "Keith Goldberg"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Michael Finkelstein",
      "Jingwei Wu"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Jennifer Wang",
      "Jingwei Wu"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Karen Moliver",
      "Brian Aguilar"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Judy Qiu",
      "Derek Le"
     ],
     "a": [
      "",
      ""
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
      "",
      ""
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Jennifer Wang",
      "Stephanie Woomer"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Karen Moliver",
      "Jill Scully"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Keith Goldberg",
      "Michael Finkelstein"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Jingwei Wu",
      "Derek Le"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Jennifer Wang",
      "Michael Finkelstein"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Karen Moliver",
      "Keith Goldberg"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Judy Qiu",
      "Derek Le"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Jill Scully",
      "Brian Aguilar"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Jennifer Wang",
      "Karen Moliver"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Judy Qiu",
      "Stephanie Woomer"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Brian Aguilar",
      "Michael Finkelstein"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Derek Le",
      "Jingwei Wu"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Jennifer Wang",
      "Jingwei Wu"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Judy Qiu",
      "Keith Goldberg"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Jill Scully",
      "Brian Aguilar"
     ],
     "a": [
      "",
      ""
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
      "",
      ""
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Karen Moliver",
      "Judy Qiu"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Jill Scully",
      "Stephanie Woomer"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Brian Aguilar",
      "Derek Le"
     ],
     "a": [
      "",
      ""
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Keith Goldberg",
      "Jingwei Wu"
     ],
     "a": [
      "",
      ""
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 10,
   "home": "Pickle Place",
   "away": "Pickleball Palace",
   "time": "2025-10-26T18:00:00",
   "complete": true,
   "homePoints": 556,
   "awayPoints": 647,
   "homeGW": 8,
   "awayGW": 24,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Marykristin Haskell",
      "Matt Detiger"
     ],
     "a": [
      "Carly Pfeffer",
      "Alex Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Linda Schuda",
      "Robert Block"
     ],
     "a": [
      "Susan St. Pierre",
      "Bud Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Janine Forrest",
      "Edwin Saxman"
     ],
     "a": [
      "Sinitra Siengsanaoh",
      "Brian Gonzalez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Jane Meng",
      "Stephen Hanak"
     ],
     "a": [
      "Kate Curren",
      "Thomas Schillow"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Janet Garrity",
      "Valerie Interrante"
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
     "as": 13,
     "h": [
      "Janine Forrest",
      "Linda Schuda"
     ],
     "a": [
      "Susan St. Pierre",
      "Carly Pfeffer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Bruce Aronow",
      "Robert Block"
     ],
     "a": [
      "Brian Gonzalez",
      "Thomas Schillow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Edwin Saxman",
      "Stephen Hanak"
     ],
     "a": [
      "Alex Lee",
      "Bud Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Marykristin Haskell",
      "Matt Detiger"
     ],
     "a": [
      "Andrea Dellechiaie",
      "Bud Heller"
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
      "Sinitra Siengsanaoh",
      "Rick Vazquez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Linda Schuda",
      "Edwin Saxman"
     ],
     "a": [
      "Carly Pfeffer",
      "Brian Gonzalez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Jane Meng",
      "Bruce Aronow"
     ],
     "a": [
      "Susan St. Pierre",
      "Alex Lee"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Janet Garrity",
      "Jane Meng"
     ],
     "a": [
      "Andrea Dellechiaie",
      "Susan St. Pierre"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Janine Forrest",
      "Marykristin Haskell"
     ],
     "a": [
      "Kate Curren",
      "Sinitra Siengsanaoh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Matt Detiger",
      "Robert Block"
     ],
     "a": [
      "Brian Gonzalez",
      "Alex Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Bruce Aronow",
      "Stephen Hanak"
     ],
     "a": [
      "Rick Vazquez",
      "Thomas Schillow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Valerie Interrante",
      "Edwin Saxman"
     ],
     "a": [
      "Kate Curren",
      "Alex Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Marykristin Haskell",
      "Stephen Hanak"
     ],
     "a": [
      "Susan St. Pierre",
      "Thomas Schillow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Linda Schuda",
      "Robert Block"
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
     "as": 16,
     "h": [
      "Janet Garrity",
      "Bruce Aronow"
     ],
     "a": [
      "Carly Pfeffer",
      "Rick Vazquez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Linda Schuda",
      "Marykristin Haskell"
     ],
     "a": [
      "Andrea Dellechiaie",
      "Sinitra Siengsanaoh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jane Meng",
      "Valerie Interrante"
     ],
     "a": [
      "Kate Curren",
      "Susan St. Pierre"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Bruce Aronow",
      "Edwin Saxman"
     ],
     "a": [
      "Brian Gonzalez",
      "Rick Vazquez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Matt Detiger",
      "Stephen Hanak"
     ],
     "a": [
      "Bud Heller",
      "Thomas Schillow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Valerie Interrante",
      "Bruce Aronow"
     ],
     "a": [
      "Kate Curren",
      "Alex Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jane Meng",
      "Stephen Hanak"
     ],
     "a": [
      "Carly Pfeffer",
      "Rick Vazquez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Marykristin Haskell",
      "Robert Block"
     ],
     "a": [
      "Sinitra Siengsanaoh",
      "Bud Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Linda Schuda",
      "Matt Detiger"
     ],
     "a": [
      "Andrea Dellechiaie",
      "Thomas Schillow"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Linda Schuda",
      "Marykristin Haskell"
     ],
     "a": [
      "Andrea Dellechiaie",
      "Kate Curren"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jane Meng",
      "Valerie Interrante"
     ],
     "a": [
      "Sinitra Siengsanaoh",
      "Carly Pfeffer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Edwin Saxman",
      "Robert Block"
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
     "as": 19,
     "h": [
      "Bruce Aronow",
      "Matt Detiger"
     ],
     "a": [
      "Bud Heller",
      "Alex Lee"
     ]
    }
   ],
   "subs": [
    "Rick Vazquez",
    "Edwin Saxman",
    "Matt Detiger",
    "Linda Schuda"
   ]
  },
  {
   "result": "away",
   "week": 11,
   "home": "Pickle Place",
   "away": "Players Courtyard",
   "time": "2025-11-01T12:00:00",
   "complete": true,
   "homePoints": 583,
   "awayPoints": 658,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Cynthia Eisen",
      "David Eisen"
     ],
     "a": [
      "Stacey Frank",
      "Roger Graterol"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jane Meng",
      "Robert Block"
     ],
     "a": [
      "Maria Condella",
      "Jonathan Brand"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Harriet Levin",
      "Tom Zentmeyer"
     ],
     "a": [
      "Kate Siedell",
      "Brad Daddis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Janine Forrest",
      "Jonathan Goldner"
     ],
     "a": [
      "Elyse Diamond",
      "Jeff Lorman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Janet Garrity",
      "Janine Forrest"
     ],
     "a": [
      "Maria Condella",
      "Elyse Diamond"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Harriet Levin",
      "Cynthia Eisen"
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
      "David Eisen",
      "Z Zhang"
     ],
     "a": [
      "James Shaw",
      "Jeff Lorman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Tom Zentmeyer",
      "Jonathan Goldner"
     ],
     "a": [
      "Jonathan Brand",
      "Roger Graterol"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Valerie Interrante",
      "Z Zhang"
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
      "Janet Garrity",
      "Robert Block"
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
      "Janine Forrest",
      "Jonathan Goldner"
     ],
     "a": [
      "Elyse Diamond",
      "Brad Daddis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 27,
     "as": 29,
     "h": [
      "Jane Meng",
      "Bruce Aronow"
     ],
     "a": [
      "Maria Condella",
      "Roger Graterol"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Harriet Levin",
      "Valerie Interrante"
     ],
     "a": [
      "Maria Condella",
      "Kate Siedell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Janine Forrest",
      "Cynthia Eisen"
     ],
     "a": [
      "Elyse Diamond",
      "Stacey Frank"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Bruce Aronow",
      "David Eisen"
     ],
     "a": [
      "James Shaw",
      "Jonathan Brand"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Tom Zentmeyer",
      "Z Zhang"
     ],
     "a": [
      "Roger Graterol",
      "Brad Daddis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Harriet Levin",
      "Robert Block"
     ],
     "a": [
      "Kate Siedell",
      "Brad Daddis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Valerie Interrante",
      "Tom Zentmeyer"
     ],
     "a": [
      "Maria Condella",
      "Roger Graterol"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Cynthia Eisen",
      "David Eisen"
     ],
     "a": [
      "Stacey Frank",
      "Jonathan Brand"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Jane Meng",
      "Z Zhang"
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
      "Harriet Levin",
      "Cynthia Eisen"
     ],
     "a": [
      "Kate Siedell",
      "Elyse Diamond"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Janine Forrest",
      "Janet Garrity"
     ],
     "a": [
      "Stacey Frank",
      "Maria Condella"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jonathan Goldner",
      "Robert Block"
     ],
     "a": [
      "James Shaw",
      "Roger Graterol"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Bruce Aronow",
      "David Eisen"
     ],
     "a": [
      "Jonathan Brand",
      "Brad Daddis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Valerie Interrante",
      "Robert Block"
     ],
     "a": [
      "Maria Condella",
      "James Shaw"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jane Meng",
      "Bruce Aronow"
     ],
     "a": [
      "Stacey Frank",
      "Brad Daddis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Harriet Levin",
      "Tom Zentmeyer"
     ],
     "a": [
      "Kate Siedell",
      "Jeff Lorman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Janet Garrity",
      "Jonathan Goldner"
     ],
     "a": [
      "Elyse Diamond",
      "Jonathan Brand"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Harriet Levin",
      "Valerie Interrante"
     ],
     "a": [
      "Kate Siedell",
      "Stacey Frank"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Janet Garrity",
      "Jane Meng"
     ],
     "a": [
      "Elyse Diamond",
      "Maria Condella"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Tom Zentmeyer",
      "Jonathan Goldner"
     ],
     "a": [
      "Jonathan Brand",
      "Roger Graterol"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Bruce Aronow",
      "Z Zhang"
     ],
     "a": [
      "Jeff Lorman",
      "James Shaw"
     ]
    }
   ],
   "subs": [
    "Maria Condella"
   ]
  },
  {
   "result": "home",
   "week": 11,
   "home": "Monroe",
   "away": "Home Court",
   "time": "2025-11-01T14:00:00",
   "complete": true,
   "homePoints": 628,
   "awayPoints": 600,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Barbara Hess",
      "Yi Gu"
     ],
     "a": [
      "Sarah Mcparland",
      "Clifford Luster"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Manju Shah",
      "Eliezer Mintz"
     ],
     "a": [
      "Kajal Sinkar",
      "Randy Samuels"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Meryl Nadler",
      "Nissim Fadida"
     ],
     "a": [
      "Surbhi Sabharwal",
      "Michael Vincent"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Hayley Yandoli",
      "Guy Ohn"
     ],
     "a": [
      "Anita Bobba",
      "William Petrie"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Manju Shah",
      "Hayley Yandoli"
     ],
     "a": [
      "Sarah Mcparland",
      "Kajal Sinkar"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Barbara Hess",
      "Meryl Nadler"
     ],
     "a": [
      "Surbhi Sabharwal",
      "Anita Bobba"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 4,
     "h": [
      "Guy Ohn",
      "Yi Gu"
     ],
     "a": [
      "William Petrie",
      "Michael Vincent"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Eliezer Mintz",
      "Nissim Fadida"
     ],
     "a": [
      "Randy Samuels",
      "Clifford Luster"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Meryl Nadler",
      "Nissim Fadida"
     ],
     "a": [
      "Surbhi Sabharwal",
      "Randy Samuels"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Barbara Hess",
      "Guy Ohn"
     ],
     "a": [
      "Sarah Mcparland",
      "William Petrie"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Manju Shah",
      "Yi Gu"
     ],
     "a": [
      "Kajal Sinkar",
      "Clifford Luster"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Hayley Yandoli",
      "Eliezer Mintz"
     ],
     "a": [
      "Anita Bobba",
      "Michael Vincent"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Meryl Nadler",
      "Hayley Yandoli"
     ],
     "a": [
      "Anita Bobba",
      "Sarah Mcparland"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Barbara Hess",
      "Manju Shah"
     ],
     "a": [
      "Kajal Sinkar",
      "Surbhi Sabharwal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Guy Ohn",
      "Nissim Fadida"
     ],
     "a": [
      "Michael Vincent",
      "Randy Samuels"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Eliezer Mintz",
      "Yi Gu"
     ],
     "a": [
      "Clifford Luster",
      "William Petrie"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Barbara Hess",
      "Eliezer Mintz"
     ],
     "a": [
      "Surbhi Sabharwal",
      "Clifford Luster"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Manju Shah",
      "Guy Ohn"
     ],
     "a": [
      "Kajal Sinkar",
      "Randy Samuels"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Hayley Yandoli",
      "Nissim Fadida"
     ],
     "a": [
      "Sarah Mcparland",
      "Michael Vincent"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Meryl Nadler",
      "Yi Gu"
     ],
     "a": [
      "Anita Bobba",
      "William Petrie"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Meryl Nadler",
      "Manju Shah"
     ],
     "a": [
      "Sarah Mcparland",
      "Anita Bobba"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Barbara Hess",
      "Hayley Yandoli"
     ],
     "a": [
      "Kajal Sinkar",
      "Surbhi Sabharwal"
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
      "Clifford Luster",
      "Randy Samuels"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Nissim Fadida",
      "Eliezer Mintz"
     ],
     "a": [
      "Michael Vincent",
      "William Petrie"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Meryl Nadler",
      "Guy Ohn"
     ],
     "a": [
      "Anita Bobba",
      "Randy Samuels"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Hayley Yandoli",
      "Nissim Fadida"
     ],
     "a": [
      "Kajal Sinkar",
      "William Petrie"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Manju Shah",
      "Eliezer Mintz"
     ],
     "a": [
      "Sarah Mcparland",
      "Clifford Luster"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Barbara Hess",
      "Yi Gu"
     ],
     "a": [
      "Surbhi Sabharwal",
      "Michael Vincent"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Barbara Hess",
      "Meryl Nadler"
     ],
     "a": [
      "Sarah Mcparland",
      "Kajal Sinkar"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Manju Shah",
      "Hayley Yandoli"
     ],
     "a": [
      "Surbhi Sabharwal",
      "Anita Bobba"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Guy Ohn",
      "Eliezer Mintz"
     ],
     "a": [
      "Clifford Luster",
      "Michael Vincent"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Nissim Fadida",
      "Yi Gu"
     ],
     "a": [
      "Randy Samuels",
      "William Petrie"
     ]
    }
   ],
   "subs": [
    "Nissim Fadida",
    "William Petrie"
   ]
  },
  {
   "result": "home",
   "week": 11,
   "home": "Pickleball Palace",
   "away": "Flemington",
   "time": "2025-11-01T14:00:00",
   "complete": true,
   "homePoints": 591,
   "awayPoints": 593,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Amanda Quinn",
      "Brian Gonzalez"
     ],
     "a": [
      "Denise Richmond",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jill Lesnik",
      "Mike Giampapa"
     ],
     "a": [
      "Tara Kramer",
      "Bob Drinane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Carly Pfeffer",
      "John Burke"
     ],
     "a": [
      "Lynda Tomaru",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Kate Curren",
      "Thomas Schillow"
     ],
     "a": [
      "Susan St. Pierre",
      "Simon Perry"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Jill Lesnik",
      "Carly Pfeffer"
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
     "as": 18,
     "h": [
      "Kate Curren",
      "Amanda Quinn"
     ],
     "a": [
      "Tara Kramer",
      "Lynda Tomaru"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Mike Giampapa",
      "Louis Vessichelli"
     ],
     "a": [
      "Eric Luque",
      "Simon Perry"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "John Burke",
      "Thomas Schillow"
     ],
     "a": [
      "Art Muth",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Andrea Dellechiaie",
      "Thomas Schillow"
     ],
     "a": [
      "Amy Johnson",
      "Bob Drinane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Amanda Quinn",
      "Mike Giampapa"
     ],
     "a": [
      "Susan St. Pierre",
      "Art Muth"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jill Lesnik",
      "Brian Gonzalez"
     ],
     "a": [
      "Tara Kramer",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Kate Curren",
      "John Burke"
     ],
     "a": [
      "Lynda Tomaru",
      "Eric Luque"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Andrea Dellechiaie",
      "Carly Pfeffer"
     ],
     "a": [
      "Lynda Tomaru",
      "Denise Richmond"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jill Lesnik",
      "Amanda Quinn"
     ],
     "a": [
      "Susan St. Pierre",
      "Tara Kramer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Brian Gonzalez",
      "John Burke"
     ],
     "a": [
      "Art Muth",
      "Bob Drinane"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Mike Giampapa",
      "Thomas Schillow"
     ],
     "a": [
      "Eric Luque",
      "Simon Perry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Carly Pfeffer",
      "Brian Gonzalez"
     ],
     "a": [
      "Lynda Tomaru",
      "Bob Drinane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Amanda Quinn",
      "Thomas Schillow"
     ],
     "a": [
      "Susan St. Pierre",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kate Curren",
      "Louis Vessichelli"
     ],
     "a": [
      "Denise Richmond",
      "Simon Perry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jill Lesnik",
      "Mike Giampapa"
     ],
     "a": [
      "Amy Johnson",
      "Art Muth"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kate Curren",
      "Andrea Dellechiaie"
     ],
     "a": [
      "Lynda Tomaru",
      "Tara Kramer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jill Lesnik",
      "Carly Pfeffer"
     ],
     "a": [
      "Amy Johnson",
      "Susan St. Pierre"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Mike Giampapa",
      "Louis Vessichelli"
     ],
     "a": [
      "Art Muth",
      "David Osborne"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "John Burke",
      "Thomas Schillow"
     ],
     "a": [
      "Eric Luque",
      "Bob Drinane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Amanda Quinn",
      "Brian Gonzalez"
     ],
     "a": [
      "Amy Johnson",
      "Art Muth"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kate Curren",
      "Thomas Schillow"
     ],
     "a": [
      "Tara Kramer",
      "Simon Perry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Carly Pfeffer",
      "Louis Vessichelli"
     ],
     "a": [
      "Denise Richmond",
      "Eric Luque"
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
      "Lynda Tomaru",
      "David Osborne"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kate Curren",
      "Amanda Quinn"
     ],
     "a": [
      "Susan St. Pierre",
      "Lynda Tomaru"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Andrea Dellechiaie",
      "Carly Pfeffer"
     ],
     "a": [
      "Amy Johnson",
      "Denise Richmond"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "John Burke",
      "Louis Vessichelli"
     ],
     "a": [
      "Eric Luque",
      "David Osborne"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Brian Gonzalez",
      "Thomas Schillow"
     ],
     "a": [
      "Bob Drinane",
      "Simon Perry"
     ]
    }
   ],
   "subs": [
    "Lynda Tomaru"
   ]
  },
  {
   "result": "home",
   "week": 11,
   "home": "Bounce Malvern Blue",
   "away": "Pickle House",
   "time": "2025-11-01T14:30:00",
   "complete": true,
   "homePoints": 602,
   "awayPoints": 583,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jodi Evans",
      "Matt Hancock"
     ],
     "a": [
      "Lucy Li",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kathy BernéT",
      "Derek Ritchie"
     ],
     "a": [
      "Nancy Wu",
      "Ping Peng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lucy Chow",
      "David Marchese"
     ],
     "a": [
      "Susan Zhang",
      "Michael Vollmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Nancy Blank",
      "Tim Phelan"
     ],
     "a": [
      "Mary Wu",
      "Jiang Jin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jodi Evans",
      "Christine Dugan"
     ],
     "a": [
      "Lucy Li",
      "Susan Zhang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lucy Chow",
      "Nancy Blank"
     ],
     "a": [
      "Nancy Wu",
      "Mary Wu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Derek Ritchie",
      "Matt Hancock"
     ],
     "a": [
      "Lance Brown",
      "Ping Peng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Ed Gieske",
      "David Marchese"
     ],
     "a": [
      "Jeff Laible",
      "Michael Vollmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jodi Evans",
      "Derek Ritchie"
     ],
     "a": [
      "Lucy Li",
      "Ping Peng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Kathy BernéT",
      "Matt Hancock"
     ],
     "a": [
      "Nancy Wu",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Christine Dugan",
      "Tim Phelan"
     ],
     "a": [
      "Susan Zhang",
      "Jiang Jin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Lucy Chow",
      "Ed Gieske"
     ],
     "a": [
      "Carolyn Dardani-Horensky",
      "Jeff Laible"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Nancy Blank",
      "Christine Dugan"
     ],
     "a": [
      "Lucy Li",
      "Susan Zhang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kathy BernéT",
      "Lucy Chow"
     ],
     "a": [
      "Mary Wu",
      "Carolyn Dardani-Horensky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "David Marchese",
      "Matt Hancock"
     ],
     "a": [
      "Lance Brown",
      "Ping Peng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Ed Gieske",
      "Tim Phelan"
     ],
     "a": [
      "Michael Vollmer",
      "Jeff Laible"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jodi Evans",
      "David Marchese"
     ],
     "a": [
      "Lucy Li",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kathy BernéT",
      "Ed Gieske"
     ],
     "a": [
      "Mary Wu",
      "Ping Peng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lucy Chow",
      "Tim Phelan"
     ],
     "a": [
      "Nancy Wu",
      "Michael Vollmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Christine Dugan",
      "Derek Ritchie"
     ],
     "a": [
      "Carolyn Dardani-Horensky",
      "Jiang Jin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jodi Evans",
      "Christine Dugan"
     ],
     "a": [
      "Nancy Wu",
      "Mary Wu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kathy BernéT",
      "Nancy Blank"
     ],
     "a": [
      "Lucy Li",
      "Carolyn Dardani-Horensky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Matt Hancock",
      "Derek Ritchie"
     ],
     "a": [
      "Lance Brown",
      "Michael Vollmer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "David Marchese",
      "Tim Phelan"
     ],
     "a": [
      "Ping Peng",
      "Jiang Jin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jodi Evans",
      "Matt Hancock"
     ],
     "a": [
      "Lucy Li",
      "Ping Peng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kathy BernéT",
      "David Marchese"
     ],
     "a": [
      "Nancy Wu",
      "Jiang Jin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Nancy Blank",
      "Derek Ritchie"
     ],
     "a": [
      "Susan Zhang",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Christine Dugan",
      "Ed Gieske"
     ],
     "a": [
      "Carolyn Dardani-Horensky",
      "Jeff Laible"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Jodi Evans",
      "Kathy BernéT"
     ],
     "a": [
      "Lucy Li",
      "Mary Wu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Lucy Chow",
      "Nancy Blank"
     ],
     "a": [
      "Carolyn Dardani-Horensky",
      "Susan Zhang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "David Marchese",
      "Matt Hancock"
     ],
     "a": [
      "Ping Peng",
      "Jiang Jin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ed Gieske",
      "Tim Phelan"
     ],
     "a": [
      "Lance Brown",
      "Jeff Laible"
     ]
    }
   ],
   "subs": [
    "Nancy Wu",
    "Derek Ritchie",
    "Matt Hancock",
    "Jiang Jin",
    "Mary Wu",
    "Jeff Laible"
   ]
  },
  {
   "result": "home",
   "week": 11,
   "home": "The Atlantic Club",
   "away": "Pickle House",
   "time": "2025-11-02T12:00:00",
   "complete": true,
   "homePoints": 661,
   "awayPoints": 545,
   "homeGW": 24,
   "awayGW": 8,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Janet Bellaran",
      "Darren Saks"
     ],
     "a": [
      "Lucy Li",
      "Wolfgang Chincarini"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Eva Danieli",
      "Joe Palumbo"
     ],
     "a": [
      "Tanya Patterson",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Liz Cuozzo",
      "Jack Feinstein"
     ],
     "a": [
      "Cary Chen",
      "Ping Peng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ali Fordyce",
      "Bruce Bilow"
     ],
     "a": [
      "Lan Bin",
      "Michael Vollmer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Eva Danieli",
      "Liz Cuozzo"
     ],
     "a": [
      "Lucy Li",
      "Carolyn Dardani-Horensky"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Janet Bellaran",
      "Ali Fordyce"
     ],
     "a": [
      "Lan Bin",
      "Tanya Patterson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Joe Palumbo",
      "Jack Feinstein"
     ],
     "a": [
      "Wolfgang Chincarini",
      "Ping Peng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Bruce Bilow",
      "Darren Saks"
     ],
     "a": [
      "Yang Xiang",
      "Michael Vollmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Liz Cuozzo",
      "Joe Palumbo"
     ],
     "a": [
      "Lucy Li",
      "Ping Peng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ali Fordyce",
      "Jack Feinstein"
     ],
     "a": [
      "Cary Chen",
      "Wolfgang Chincarini"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Eva Danieli",
      "Bruce Bilow"
     ],
     "a": [
      "Tanya Patterson",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Janet Bellaran",
      "Darren Saks"
     ],
     "a": [
      "Carolyn Dardani-Horensky",
      "Yang Xiang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Eva Danieli",
      "Liz Cuozzo"
     ],
     "a": [
      "Lucy Li",
      "Carolyn Dardani-Horensky"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Janet Bellaran",
      "Laurie Guagenty"
     ],
     "a": [
      "Tanya Patterson",
      "Lan Bin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Darren Saks",
      "Joe Palumbo"
     ],
     "a": [
      "Lance Brown",
      "Ping Peng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Bruce Bilow",
      "Jack Feinstein"
     ],
     "a": [
      "Wolfgang Chincarini",
      "Michael Vollmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Liz Cuozzo",
      "Darren Saks"
     ],
     "a": [
      "Lucy Li",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Eva Danieli",
      "Jack Feinstein"
     ],
     "a": [
      "Cary Chen",
      "Ping Peng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Laurie Guagenty",
      "Joe Palumbo"
     ],
     "a": [
      "Tanya Patterson",
      "Wolfgang Chincarini"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Janet Bellaran",
      "Bruce Bilow"
     ],
     "a": [
      "Carolyn Dardani-Horensky",
      "Yang Xiang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Eva Danieli",
      "Laurie Guagenty"
     ],
     "a": [
      "Lucy Li",
      "Cary Chen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Liz Cuozzo",
      "Janet Bellaran"
     ],
     "a": [
      "Lan Bin",
      "Carolyn Dardani-Horensky"
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
      "Wolfgang Chincarini",
      "Ping Peng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Bruce Bilow",
      "Jack Feinstein"
     ],
     "a": [
      "Lance Brown",
      "Yang Xiang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Liz Cuozzo",
      "Darren Saks"
     ],
     "a": [
      "Cary Chen",
      "Lance Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Eva Danieli",
      "Joe Palumbo"
     ],
     "a": [
      "Lucy Li",
      "Wolfgang Chincarini"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Janet Bellaran",
      "Bruce Bilow"
     ],
     "a": [
      "Tanya Patterson",
      "Michael Vollmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Laurie Guagenty",
      "Jack Feinstein"
     ],
     "a": [
      "Lan Bin",
      "Yang Xiang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Eva Danieli",
      "Janet Bellaran"
     ],
     "a": [
      "Lucy Li",
      "Cary Chen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Liz Cuozzo",
      "Laurie Guagenty"
     ],
     "a": [
      "Carolyn Dardani-Horensky",
      "Lan Bin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Joe Palumbo",
      "Jack Feinstein"
     ],
     "a": [
      "Lance Brown",
      "Ping Peng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Darren Saks",
      "Bruce Bilow"
     ],
     "a": [
      "Wolfgang Chincarini",
      "Michael Vollmer"
     ]
    }
   ],
   "subs": [
    "Jack Feinstein",
    "Laurie Guagenty",
    "Lan Bin",
    "Cary Chen"
   ]
  },
  {
   "result": "away",
   "week": 12,
   "home": "The Atlantic Club",
   "away": "Monroe",
   "time": "2025-11-08T12:00:00",
   "complete": true,
   "homePoints": 615,
   "awayPoints": 639,
   "homeGW": 13,
   "awayGW": 19,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Liz Cuozzo",
      "Andrew Hyman"
     ],
     "a": [
      "Meryl Nadler",
      "Yi Gu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Ali Fordyce",
      "Bruce Bilow"
     ],
     "a": [
      "Nina Hallard",
      "Don Godinez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Janet Bellaran",
      "Robert Toledo"
     ],
     "a": [
      "Rosalyn Goldsmith",
      "Sergey Sprikut"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Eva Danieli",
      "Joe Palumbo"
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
     "as": 19,
     "h": [
      "Liz Cuozzo",
      "Ali Fordyce"
     ],
     "a": [
      "Meryl Nadler",
      "Hayley Yandoli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Janet Bellaran",
      "Eva Danieli"
     ],
     "a": [
      "Rosalyn Goldsmith",
      "Nina Hallard"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Andrew Hyman",
      "Joe Palumbo"
     ],
     "a": [
      "Yi Gu",
      "Guy Ohn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Robert Toledo",
      "Bruce Bilow"
     ],
     "a": [
      "Sergey Sprikut",
      "Scott Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Liz Cuozzo",
      "Joe Palumbo"
     ],
     "a": [
      "Nina Hallard",
      "Scott Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Eva Danieli",
      "Bruce Bilow"
     ],
     "a": [
      "Meryl Nadler",
      "Don Godinez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Janet Bellaran",
      "Andrew Hyman"
     ],
     "a": [
      "Hayley Yandoli",
      "Sergey Sprikut"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ali Fordyce",
      "Robert Toledo"
     ],
     "a": [
      "Rosalyn Goldsmith",
      "Guy Ohn"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Janet Bellaran",
      "Ali Fordyce"
     ],
     "a": [
      "Nina Hallard",
      "Hayley Yandoli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Liz Cuozzo",
      "Eva Danieli"
     ],
     "a": [
      "Meryl Nadler",
      "Rosalyn Goldsmith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Andrew Hyman",
      "Robert Toledo"
     ],
     "a": [
      "Sergey Sprikut",
      "Yi Gu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Joe Palumbo",
      "Bruce Bilow"
     ],
     "a": [
      "Scott Friedman",
      "Don Godinez"
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
      "Meryl Nadler",
      "Scott Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Janet Bellaran",
      "Bruce Bilow"
     ],
     "a": [
      "Rosalyn Goldsmith",
      "Don Godinez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Liz Cuozzo",
      "Robert Toledo"
     ],
     "a": [
      "Nina Hallard",
      "Sergey Sprikut"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ali Fordyce",
      "Andrew Hyman"
     ],
     "a": [
      "Hayley Yandoli",
      "Guy Ohn"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Liz Cuozzo",
      "Janet Bellaran"
     ],
     "a": [
      "Meryl Nadler",
      "Nina Hallard"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Eva Danieli",
      "Ali Fordyce"
     ],
     "a": [
      "Hayley Yandoli",
      "Rosalyn Goldsmith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Robert Toledo",
      "Bruce Bilow"
     ],
     "a": [
      "Scott Friedman",
      "Sergey Sprikut"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Joe Palumbo",
      "Andrew Hyman"
     ],
     "a": [
      "Yi Gu",
      "Don Godinez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Liz Cuozzo",
      "Robert Toledo"
     ],
     "a": [
      "Meryl Nadler",
      "Guy Ohn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Eva Danieli",
      "Bruce Bilow"
     ],
     "a": [
      "Rosalyn Goldsmith",
      "Scott Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Janet Bellaran",
      "Andrew Hyman"
     ],
     "a": [
      "Nina Hallard",
      "Sergey Sprikut"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Ali Fordyce",
      "Joe Palumbo"
     ],
     "a": [
      "Hayley Yandoli",
      "Yi Gu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Ali Fordyce",
      "Janet Bellaran"
     ],
     "a": [
      "Nina Hallard",
      "Hayley Yandoli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Liz Cuozzo",
      "Eva Danieli"
     ],
     "a": [
      "Meryl Nadler",
      "Rosalyn Goldsmith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Andrew Hyman",
      "Robert Toledo"
     ],
     "a": [
      "Guy Ohn",
      "Yi Gu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Joe Palumbo",
      "Bruce Bilow"
     ],
     "a": [
      "Don Godinez",
      "Sergey Sprikut"
     ]
    }
   ],
   "subs": [
    "Nina Hallard"
   ]
  },
  {
   "result": "away",
   "week": 12,
   "home": "Pickle Place",
   "away": "Bounce Malvern Black",
   "time": "2025-11-08T12:00:00",
   "complete": true,
   "homePoints": 568,
   "awayPoints": 641,
   "homeGW": 9,
   "awayGW": 23,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jane Meng",
      "David Eisen"
     ],
     "a": [
      "Katherine Maruyama",
      "Jingwei Wu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Harriet Levin",
      "Tom Zentmeyer"
     ],
     "a": [
      "Jennifer Wang",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Valerie Interrante",
      "Z Zhang"
     ],
     "a": [
      "Jill Scully",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Janine Forrest",
      "Jonathan Goldner"
     ],
     "a": [
      "Karen Moliver",
      "Keith Goldberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Harriet Levin",
      "Valerie Interrante"
     ],
     "a": [
      "Karen Moliver",
      "Katherine Maruyama"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Janine Forrest",
      "Cynthia Eisen"
     ],
     "a": [
      "Stephanie Woomer",
      "Jill Scully"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Stephen Hanak",
      "Z Zhang"
     ],
     "a": [
      "Keith Goldberg",
      "Jingwei Wu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Tom Zentmeyer",
      "Jonathan Goldner"
     ],
     "a": [
      "Derek Le",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jane Meng",
      "Stephen Hanak"
     ],
     "a": [
      "Karen Moliver",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Cynthia Eisen",
      "David Eisen"
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
      "Valerie Interrante",
      "Z Zhang"
     ],
     "a": [
      "Jennifer Wang",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Harriet Levin",
      "Tom Zentmeyer"
     ],
     "a": [
      "Katherine Maruyama",
      "Derek Le"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Janine Forrest",
      "Marykristin Haskell"
     ],
     "a": [
      "Stephanie Woomer",
      "Jennifer Wang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Harriet Levin",
      "Cynthia Eisen"
     ],
     "a": [
      "Katherine Maruyama",
      "Jill Scully"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "David Eisen",
      "Z Zhang"
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
     "as": 11,
     "h": [
      "Tom Zentmeyer",
      "Jonathan Goldner"
     ],
     "a": [
      "Michael Finkelstein",
      "Jingwei Wu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Harriet Levin",
      "David Eisen"
     ],
     "a": [
      "Karen Moliver",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Janine Forrest",
      "Jonathan Goldner"
     ],
     "a": [
      "Jill Scully",
      "Keith Goldberg"
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
      "Stephanie Woomer",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jane Meng",
      "Z Zhang"
     ],
     "a": [
      "Katherine Maruyama",
      "Jingwei Wu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Cynthia Eisen",
      "Janine Forrest"
     ],
     "a": [
      "Jennifer Wang",
      "Karen Moliver"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Harriet Levin",
      "Marykristin Haskell"
     ],
     "a": [
      "Jill Scully",
      "Katherine Maruyama"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Tom Zentmeyer",
      "Z Zhang"
     ],
     "a": [
      "Michael Finkelstein",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jonathan Goldner",
      "Stephen Hanak"
     ],
     "a": [
      "Jingwei Wu",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Marykristin Haskell",
      "Tom Zentmeyer"
     ],
     "a": [
      "Katherine Maruyama",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Cynthia Eisen",
      "David Eisen"
     ],
     "a": [
      "Stephanie Woomer",
      "Derek Le"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Harriet Levin",
      "Jonathan Goldner"
     ],
     "a": [
      "Jennifer Wang",
      "Jingwei Wu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jane Meng",
      "Stephen Hanak"
     ],
     "a": [
      "Jill Scully",
      "Keith Goldberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Marykristin Haskell",
      "Janine Forrest"
     ],
     "a": [
      "Jennifer Wang",
      "Karen Moliver"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Harriet Levin",
      "Cynthia Eisen"
     ],
     "a": [
      "Katherine Maruyama",
      "Stephanie Woomer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jonathan Goldner",
      "Stephen Hanak"
     ],
     "a": [
      "Jim Darcangelo",
      "Derek Le"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Tom Zentmeyer",
      "Z Zhang"
     ],
     "a": [
      "Keith Goldberg",
      "Michael Finkelstein"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 12,
   "home": "Pickle House",
   "away": "Players Courtyard",
   "time": "2025-11-08T14:00:00",
   "complete": true,
   "homePoints": 537,
   "awayPoints": 674,
   "homeGW": 6,
   "awayGW": 26,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Carolyn Dardani-Horensky",
      "Henry Wang"
     ],
     "a": [
      "Annemarie Mccartney",
      "Jonathan Brand"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Lucy Li",
      "Jitendra Arora"
     ],
     "a": [
      "Elyse Diamond",
      "James Shaw"
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
      "Kate Siedell",
      "Bennett Shanker"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jean Wang",
      "Frank Ding"
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
      "Jean Wang",
      "Lucy Li"
     ],
     "a": [
      "Annemarie Mccartney",
      "Elyse Diamond"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Fabienne Yu",
      "Carolyn Dardani-Horensky"
     ],
     "a": [
      "Kate Siedell",
      "Pam Boyd"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 27,
     "as": 29,
     "h": [
      "Frank Ding",
      "Lance Brown"
     ],
     "a": [
      "Jeff Lorman",
      "James Shaw"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jitendra Arora",
      "James Lewandowski"
     ],
     "a": [
      "Jonathan Brand",
      "Brad Daddis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Fabienne Yu",
      "Albert Pamudji"
     ],
     "a": [
      "Kate Siedell",
      "Jeff Lorman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jean Wang",
      "Frank Ding"
     ],
     "a": [
      "Pam Boyd",
      "Bennett Shanker"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Carolyn Dardani-Horensky",
      "Jitendra Arora"
     ],
     "a": [
      "Annemarie Mccartney",
      "Brad Daddis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lucy Li",
      "Lance Brown"
     ],
     "a": [
      "Elyse Diamond",
      "James Shaw"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Fabienne Yu",
      "Carolyn Dardani-Horensky"
     ],
     "a": [
      "Kate Siedell",
      "Annemarie Mccartney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jean Wang",
      "Lucy Li"
     ],
     "a": [
      "Pam Boyd",
      "Elyse Diamond"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "James Lewandowski",
      "Henry Wang"
     ],
     "a": [
      "Jonathan Brand",
      "James Shaw"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Jitendra Arora",
      "Albert Pamudji"
     ],
     "a": [
      "Brad Daddis",
      "Bennett Shanker"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lucy Li",
      "James Lewandowski"
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
      "Carolyn Dardani-Horensky",
      "Jitendra Arora"
     ],
     "a": [
      "Annemarie Mccartney",
      "Jonathan Brand"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jean Wang",
      "Lance Brown"
     ],
     "a": [
      "Pam Boyd",
      "Brad Daddis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Fabienne Yu",
      "Frank Ding"
     ],
     "a": [
      "Kate Siedell",
      "Bennett Shanker"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jean Wang",
      "Fabienne Yu"
     ],
     "a": [
      "Kate Siedell",
      "Pam Boyd"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lucy Li",
      "Carolyn Dardani-Horensky"
     ],
     "a": [
      "Annemarie Mccartney",
      "Elyse Diamond"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jitendra Arora",
      "Lance Brown"
     ],
     "a": [
      "Jonathan Brand",
      "Jeff Lorman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Frank Ding",
      "Albert Pamudji"
     ],
     "a": [
      "Bennett Shanker",
      "James Shaw"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Carolyn Dardani-Horensky",
      "Henry Wang"
     ],
     "a": [
      "Annemarie Mccartney",
      "Brad Daddis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jean Wang",
      "Lance Brown"
     ],
     "a": [
      "Pam Boyd",
      "James Shaw"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Lucy Li",
      "James Lewandowski"
     ],
     "a": [
      "Elyse Diamond",
      "Jonathan Brand"
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
      "Kate Siedell",
      "Jeff Lorman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Fabienne Yu",
      "Jean Wang"
     ],
     "a": [
      "Kate Siedell",
      "Elyse Diamond"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Lucy Li",
      "Carolyn Dardani-Horensky"
     ],
     "a": [
      "Annemarie Mccartney",
      "Pam Boyd"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Albert Pamudji",
      "Henry Wang"
     ],
     "a": [
      "Jonathan Brand",
      "James Shaw"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "James Lewandowski",
      "Lance Brown"
     ],
     "a": [
      "Jeff Lorman",
      "Bennett Shanker"
     ]
    }
   ],
   "subs": [
    "Jean Wang",
    "Frank Ding",
    "Albert Pamudji",
    "Fabienne Yu",
    "James Lewandowski"
   ]
  },
  {
   "result": "home",
   "week": 12,
   "home": "Pickleball Palace",
   "away": "Home Court",
   "time": "2025-11-08T14:00:00",
   "complete": true,
   "homePoints": 659,
   "awayPoints": 542,
   "homeGW": 25,
   "awayGW": 7,
   "games": [
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
      "Sarah Mcparland",
      "Jhon Cifuentes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Carly Pfeffer",
      "Marr Flores"
     ],
     "a": [
      "Sharon Streit",
      "Ezra Chen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jill Lesnik",
      "Brian Gonzalez"
     ],
     "a": [
      "Surbhi Sabharwal",
      "Robert Huntley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jennifer Burke",
      "Charlie Johnston"
     ],
     "a": [
      "Margaret Weidlich",
      "George Mandl"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 30,
     "as": 28,
     "h": [
      "Kate Curren",
      "Carly Pfeffer"
     ],
     "a": [
      "Sarah Mcparland",
      "Sharon Streit"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jill Lesnik",
      "Amanda Quinn"
     ],
     "a": [
      "Surbhi Sabharwal",
      "Andrea Smith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Marr Flores",
      "Charlie Johnston"
     ],
     "a": [
      "George Mandl",
      "Ezra Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "David Coleman",
      "Brian Gonzalez"
     ],
     "a": [
      "Robert Huntley",
      "Jhon Cifuentes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kate Curren",
      "Marr Flores"
     ],
     "a": [
      "Surbhi Sabharwal",
      "Robert Huntley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Amanda Quinn",
      "Brian Gonzalez"
     ],
     "a": [
      "Andrea Smith",
      "George Mandl"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Carly Pfeffer",
      "Alex Lee"
     ],
     "a": [
      "Sharon Streit",
      "Jhon Cifuentes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jennifer Burke",
      "David Coleman"
     ],
     "a": [
      "Margaret Weidlich",
      "Clifford Luster"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jill Lesnik",
      "Carly Pfeffer"
     ],
     "a": [
      "Surbhi Sabharwal",
      "Sarah Mcparland"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jennifer Burke",
      "Amanda Quinn"
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
      "Marr Flores",
      "Brian Gonzalez"
     ],
     "a": [
      "Robert Huntley",
      "Ezra Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Charlie Johnston",
      "Alex Lee"
     ],
     "a": [
      "Clifford Luster",
      "George Mandl"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Amanda Quinn",
      "Marr Flores"
     ],
     "a": [
      "Sharon Streit",
      "Ezra Chen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jennifer Burke",
      "Alex Lee"
     ],
     "a": [
      "Andrea Smith",
      "Jhon Cifuentes"
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
      "Clifford Luster"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jill Lesnik",
      "David Coleman"
     ],
     "a": [
      "Margaret Weidlich",
      "Robert Huntley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kate Curren",
      "Carly Pfeffer"
     ],
     "a": [
      "Sarah Mcparland",
      "Margaret Weidlich"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jill Lesnik",
      "Amanda Quinn"
     ],
     "a": [
      "Andrea Smith",
      "Surbhi Sabharwal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Marr Flores",
      "Alex Lee"
     ],
     "a": [
      "George Mandl",
      "Jhon Cifuentes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 22,
     "h": [
      "David Coleman",
      "Charlie Johnston"
     ],
     "a": [
      "Robert Huntley",
      "Clifford Luster"
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
      "Margaret Weidlich",
      "Ezra Chen"
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
      "Sharon Streit",
      "George Mandl"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kate Curren",
      "Marr Flores"
     ],
     "a": [
      "Sarah Mcparland",
      "Clifford Luster"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jennifer Burke",
      "Charlie Johnston"
     ],
     "a": [
      "Andrea Smith",
      "Jhon Cifuentes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kate Curren",
      "Amanda Quinn"
     ],
     "a": [
      "Sarah Mcparland",
      "Sharon Streit"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jill Lesnik",
      "Carly Pfeffer"
     ],
     "a": [
      "Surbhi Sabharwal",
      "Margaret Weidlich"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Alex Lee",
      "Charlie Johnston"
     ],
     "a": [
      "Clifford Luster",
      "Ezra Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "David Coleman",
      "Brian Gonzalez"
     ],
     "a": [
      "Robert Huntley",
      "Jhon Cifuentes"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 12,
   "home": "Bounce Malvern Blue",
   "away": "Flemington",
   "time": "2025-11-08T14:30:00",
   "complete": true,
   "homePoints": 528,
   "awayPoints": 648,
   "homeGW": 7,
   "awayGW": 25,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kathy BernéT",
      "Ed Gieske"
     ],
     "a": [
      "Christine Papa",
      "Art Muth"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lucy Chow",
      "Patrik Grubb"
     ],
     "a": [
      "Denise Richmond",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Christine Dugan",
      "Sandro Stefanelli"
     ],
     "a": [
      "Kristen Soucie",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jodi Evans",
      "David Marchese"
     ],
     "a": [
      "Chanda Mccoy",
      "Scott Rubin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Christine Dugan",
      "Lucy Chow"
     ],
     "a": [
      "Christine Papa",
      "Chanda Mccoy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jodi Evans",
      "Nancy Blank"
     ],
     "a": [
      "Denise Richmond",
      "Tara Kramer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "David Marchese",
      "Sandro Stefanelli"
     ],
     "a": [
      "Eric Luque",
      "Todd Stein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Hal Golden",
      "Tim Phelan"
     ],
     "a": [
      "David Osborne",
      "Scott Rubin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jamila Sefiane",
      "Ed Gieske"
     ],
     "a": [
      "Tara Kramer",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kathy BernéT",
      "Sandro Stefanelli"
     ],
     "a": [
      "Denise Richmond",
      "Todd Stein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Lucy Chow",
      "David Marchese"
     ],
     "a": [
      "Kristen Soucie",
      "Art Muth"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Christine Dugan",
      "Tim Phelan"
     ],
     "a": [
      "Chanda Mccoy",
      "David Osborne"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jamila Sefiane",
      "Nancy Blank"
     ],
     "a": [
      "Christine Papa",
      "Kristen Soucie"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Lucy Chow",
      "Kathy BernéT"
     ],
     "a": [
      "Chanda Mccoy",
      "Tara Kramer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Patrik Grubb",
      "Tim Phelan"
     ],
     "a": [
      "Todd Stein",
      "Scott Rubin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ed Gieske",
      "Sandro Stefanelli"
     ],
     "a": [
      "Eric Luque",
      "Art Muth"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jamila Sefiane",
      "David Marchese"
     ],
     "a": [
      "Denise Richmond",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jodi Evans",
      "Patrik Grubb"
     ],
     "a": [
      "Chanda Mccoy",
      "Todd Stein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Christine Dugan",
      "Hal Golden"
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
     "as": 17,
     "h": [
      "Nancy Blank",
      "Sandro Stefanelli"
     ],
     "a": [
      "Tara Kramer",
      "David Osborne"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Nancy Blank",
      "Kathy BernéT"
     ],
     "a": [
      "Kristen Soucie",
      "Chanda Mccoy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lucy Chow",
      "Jodi Evans"
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
     "as": 18,
     "h": [
      "Hal Golden",
      "Sandro Stefanelli"
     ],
     "a": [
      "Art Muth",
      "Scott Rubin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Patrik Grubb",
      "Ed Gieske"
     ],
     "a": [
      "Eric Luque",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jamila Sefiane",
      "Hal Golden"
     ],
     "a": [
      "Christine Papa",
      "Todd Stein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Nancy Blank",
      "Tim Phelan"
     ],
     "a": [
      "Kristen Soucie",
      "Scott Rubin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Lucy Chow",
      "Patrik Grubb"
     ],
     "a": [
      "Chanda Mccoy",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kathy BernéT",
      "David Marchese"
     ],
     "a": [
      "Tara Kramer",
      "Art Muth"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jamila Sefiane",
      "Jodi Evans"
     ],
     "a": [
      "Christine Papa",
      "Denise Richmond"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kathy BernéT",
      "Christine Dugan"
     ],
     "a": [
      "Chanda Mccoy",
      "Kristen Soucie"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Ed Gieske",
      "Tim Phelan"
     ],
     "a": [
      "Eric Luque",
      "David Osborne"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Patrik Grubb",
      "Hal Golden"
     ],
     "a": [
      "Art Muth",
      "Todd Stein"
     ]
    }
   ],
   "subs": []
  }
 ],
 "playoffs": [
  {
   "result": null,
   "round": 1,
   "home": "Pickleball Palace",
   "away": "Bye",
   "time": "2025-11-15T12:00:00",
   "complete": false,
   "homeSeed": 2,
   "awaySeed": null
  },
  {
   "result": "away",
   "round": 1,
   "home": "Flemington",
   "away": "The Atlantic Club",
   "time": "2025-11-15T10:30:00",
   "complete": true,
   "homeSeed": 1,
   "awaySeed": 3,
   "homePoints": 611,
   "awayPoints": 648,
   "homeGW": 13,
   "awayGW": 19,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Aimee Castellano",
      "David Osborne"
     ],
     "a": [
      "Alice Napolitano",
      "Andrew Hyman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kristen Soucie",
      "Bob Drinane"
     ],
     "a": [
      "Liz Cuozzo",
      "Brad Oldham"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Denise Richmond",
      "Art Muth"
     ],
     "a": [
      "Natasha De Carvalho",
      "Darren Saks"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Chanda Mccoy",
      "Scott Rubin"
     ],
     "a": [
      "Eva Danieli",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Aimee Castellano",
      "Chanda Mccoy"
     ],
     "a": [
      "Alice Napolitano",
      "Eva Danieli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Amy Johnson",
      "Denise Richmond"
     ],
     "a": [
      "Liz Cuozzo",
      "Natasha De Carvalho"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "David Osborne",
      "Art Muth"
     ],
     "a": [
      "Darren Saks",
      "Brad Oldham"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Bob Drinane",
      "Todd Stein"
     ],
     "a": [
      "Joe Palumbo",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Kristen Soucie",
      "Scott Rubin"
     ],
     "a": [
      "Alice Napolitano",
      "Joe Palumbo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Denise Richmond",
      "David Osborne"
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
     "as": 15,
     "h": [
      "Chanda Mccoy",
      "Todd Stein"
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
      "Aimee Castellano",
      "Art Muth"
     ],
     "a": [
      "Eva Danieli",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Chanda Mccoy",
      "Kristen Soucie"
     ],
     "a": [
      "Alice Napolitano",
      "Liz Cuozzo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Amy Johnson",
      "Aimee Castellano"
     ],
     "a": [
      "Eva Danieli",
      "Natasha De Carvalho"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Bob Drinane",
      "Scott Rubin"
     ],
     "a": [
      "Michael Dombrowiecki",
      "Brad Oldham"
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
      "Andrew Hyman",
      "Darren Saks"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Aimee Castellano",
      "Art Muth"
     ],
     "a": [
      "Alice Napolitano",
      "Brad Oldham"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Denise Richmond",
      "Bob Drinane"
     ],
     "a": [
      "Liz Cuozzo",
      "Joe Palumbo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Amy Johnson",
      "Scott Rubin"
     ],
     "a": [
      "Natasha De Carvalho",
      "Darren Saks"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Chanda Mccoy",
      "David Osborne"
     ],
     "a": [
      "Eva Danieli",
      "Andrew Hyman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Aimee Castellano",
      "Chanda Mccoy"
     ],
     "a": [
      "Alice Napolitano",
      "Eva Danieli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kristen Soucie",
      "Amy Johnson"
     ],
     "a": [
      "Liz Cuozzo",
      "Natasha De Carvalho"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Scott Rubin",
      "Art Muth"
     ],
     "a": [
      "Michael Dombrowiecki",
      "Joe Palumbo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Todd Stein",
      "Bob Drinane"
     ],
     "a": [
      "Darren Saks",
      "Brad Oldham"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Aimee Castellano",
      "David Osborne"
     ],
     "a": [
      "Alice Napolitano",
      "Darren Saks"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Chanda Mccoy",
      "Art Muth"
     ],
     "a": [
      "Liz Cuozzo",
      "Andrew Hyman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kristen Soucie",
      "Todd Stein"
     ],
     "a": [
      "Natasha De Carvalho",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Amy Johnson",
      "Scott Rubin"
     ],
     "a": [
      "Eva Danieli",
      "Joe Palumbo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Aimee Castellano",
      "Amy Johnson"
     ],
     "a": [
      "Liz Cuozzo",
      "Alice Napolitano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Denise Richmond",
      "Chanda Mccoy"
     ],
     "a": [
      "Eva Danieli",
      "Natasha De Carvalho"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Art Muth",
      "Bob Drinane"
     ],
     "a": [
      "Brad Oldham",
      "Andrew Hyman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "David Osborne",
      "Todd Stein"
     ],
     "a": [
      "Michael Dombrowiecki",
      "Darren Saks"
     ]
    }
   ]
  },
  {
   "result": null,
   "round": 1,
   "home": "Bounce Malvern Black",
   "away": "Bye",
   "time": "2025-11-15T12:00:00",
   "complete": false,
   "homeSeed": 1,
   "awaySeed": null
  },
  {
   "result": "away",
   "round": 1,
   "home": "Players Courtyard",
   "away": "Pickle Place",
   "time": "2025-11-15T14:00:00",
   "complete": true,
   "homeSeed": 2,
   "awaySeed": 3,
   "homePoints": 552,
   "awayPoints": 570,
   "homeGW": 15,
   "awayGW": 20,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Maria Condella",
      "James Shaw"
     ],
     "a": [
      "Harriet Levin",
      "Tom Zentmeyer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kate Siedell",
      "Bennett Shanker"
     ],
     "a": [
      "Janine Forrest",
      "Eric Markowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Annemarie Mccartney",
      "Marc Harden"
     ],
     "a": [
      "Cynthia Eisen",
      "David Eisen"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "Bin Song",
      "Brad Daddis"
     ],
     "a": [
      "Jane Meng",
      "Z Zhang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Maria Condella",
      "Annemarie Mccartney"
     ],
     "a": [
      "Harriet Levin",
      "Cynthia Eisen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kate Siedell",
      "Bin Song"
     ],
     "a": [
      "Janine Forrest",
      "Marykristin Haskell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Brian Rowan",
      "James Shaw"
     ],
     "a": [
      "Tom Zentmeyer",
      "Eric Markowitz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Roger Graterol",
      "Marc Harden"
     ],
     "a": [
      "David Eisen",
      "Z Zhang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Annemarie Mccartney",
      "Brian Rowan"
     ],
     "a": [
      "Harriet Levin",
      "Tom Zentmeyer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Maria Condella",
      "Marc Harden"
     ],
     "a": [
      "Janine Forrest",
      "Eric Markowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Bin Song",
      "Brad Daddis"
     ],
     "a": [
      "Jane Meng",
      "David Eisen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kate Siedell",
      "Bennett Shanker"
     ],
     "a": [
      "Janet Garrity",
      "Stephen Hanak"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kate Siedell",
      "Annemarie Mccartney"
     ],
     "a": [
      "Marykristin Haskell",
      "Harriet Levin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Bin Song",
      "Maria Condella"
     ],
     "a": [
      "Janine Forrest",
      "Cynthia Eisen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Roger Graterol",
      "James Shaw"
     ],
     "a": [
      "Tom Zentmeyer",
      "Eric Markowitz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Brad Daddis",
      "Brian Rowan"
     ],
     "a": [
      "David Eisen",
      "Z Zhang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Maria Condella",
      "James Shaw"
     ],
     "a": [
      "Harriet Levin",
      "Eric Markowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kate Siedell",
      "Roger Graterol"
     ],
     "a": [
      "Marykristin Haskell",
      "Tom Zentmeyer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Annemarie Mccartney",
      "Marc Harden"
     ],
     "a": [
      "Janet Garrity",
      "Z Zhang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Bin Song",
      "Bennett Shanker"
     ],
     "a": [
      "Jane Meng",
      "Stephen Hanak"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Kate Siedell",
      "Annemarie Mccartney"
     ],
     "a": [
      "Harriet Levin",
      "Marykristin Haskell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Maria Condella",
      "Bin Song"
     ],
     "a": [
      "Janine Forrest",
      "Cynthia Eisen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Brian Rowan",
      "James Shaw"
     ],
     "a": [
      "Tom Zentmeyer",
      "Z Zhang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Bennett Shanker",
      "Roger Graterol"
     ],
     "a": [
      "Eric Markowitz",
      "Stephen Hanak"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Kate Siedell",
      "Brad Daddis"
     ],
     "a": [
      "Marykristin Haskell",
      "Tom Zentmeyer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Maria Condella",
      "Marc Harden"
     ],
     "a": [
      "Cynthia Eisen",
      "David Eisen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Bin Song",
      "Brian Rowan"
     ],
     "a": [
      "Janet Garrity",
      "Stephen Hanak"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Annemarie Mccartney",
      "Roger Graterol"
     ],
     "a": [
      "Harriet Levin",
      "Eric Markowitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Maria Condella",
      "Annemarie Mccartney"
     ],
     "a": [
      "Harriet Levin",
      "Cynthia Eisen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kate Siedell",
      "Bin Song"
     ],
     "a": [
      "Janine Forrest",
      "Marykristin Haskell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "James Shaw",
      "Roger Graterol"
     ],
     "a": [
      "Tom Zentmeyer",
      "Z Zhang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Brian Rowan",
      "Marc Harden"
     ],
     "a": [
      "David Eisen",
      "Stephen Hanak"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": null,
     "as": null,
     "h": [
      "Annemarie Mccartney",
      "Marc Harden"
     ],
     "a": [
      "Janine Forrest",
      "Eric Markowitz"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": null,
     "as": null,
     "h": [
      "Maria Condella",
      "Kate Siedell"
     ],
     "a": [
      "Harriet Levin",
      "Cynthia Eisen"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": null,
     "as": null,
     "h": [
      "James Shaw",
      "Brian Rowan"
     ],
     "a": [
      "Tom Zentmeyer",
      "Z Zhang"
     ]
    }
   ]
  },
  {
   "result": "home",
   "round": 2,
   "home": "Pickleball Palace",
   "away": "The Atlantic Club",
   "time": "2025-11-22T10:30:00",
   "complete": true,
   "homeSeed": 2,
   "awaySeed": 3,
   "homePoints": 645,
   "awayPoints": 608,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Laura Elleman",
      "Charlie Johnston"
     ],
     "a": [
      "Eva Danieli",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Carly Pfeffer",
      "Alex Lee"
     ],
     "a": [
      "Alice Napolitano",
      "Joe Palumbo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kate Curren",
      "Marr Flores"
     ],
     "a": [
      "Liz Cuozzo",
      "Andrew Hyman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jill Lesnik",
      "Bud Heller"
     ],
     "a": [
      "Natasha De Carvalho",
      "Robert Toledo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Carly Pfeffer",
      "Andrea Dellechiaie"
     ],
     "a": [
      "Alice Napolitano",
      "Janet Bellaran"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Laura Elleman",
      "Jill Lesnik"
     ],
     "a": [
      "Eva Danieli",
      "Natasha De Carvalho"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Thomas Schillow",
      "Bud Heller"
     ],
     "a": [
      "Joe Palumbo",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Alex Lee",
      "Charlie Johnston"
     ],
     "a": [
      "Darren Saks",
      "Andrew Hyman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Laura Elleman",
      "Thomas Schillow"
     ],
     "a": [
      "Eva Danieli",
      "Joe Palumbo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Jill Lesnik",
      "Alex Lee"
     ],
     "a": [
      "Alice Napolitano",
      "Robert Toledo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Carly Pfeffer",
      "Bud Heller"
     ],
     "a": [
      "Liz Cuozzo",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kate Curren",
      "Marr Flores"
     ],
     "a": [
      "Janet Bellaran",
      "Darren Saks"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Carly Pfeffer",
      "Andrea Dellechiaie"
     ],
     "a": [
      "Alice Napolitano",
      "Liz Cuozzo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kate Curren",
      "Laura Elleman"
     ],
     "a": [
      "Janet Bellaran",
      "Natasha De Carvalho"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Charlie Johnston",
      "Thomas Schillow"
     ],
     "a": [
      "Andrew Hyman",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Marr Flores",
      "Alex Lee"
     ],
     "a": [
      "Darren Saks",
      "Robert Toledo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jill Lesnik",
      "Bud Heller"
     ],
     "a": [
      "Eva Danieli",
      "Joe Palumbo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Andrea Dellechiaie",
      "Marr Flores"
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
     "as": 16,
     "h": [
      "Laura Elleman",
      "Charlie Johnston"
     ],
     "a": [
      "Janet Bellaran",
      "Robert Toledo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kate Curren",
      "Thomas Schillow"
     ],
     "a": [
      "Natasha De Carvalho",
      "Darren Saks"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Carly Pfeffer",
      "Jill Lesnik"
     ],
     "a": [
      "Eva Danieli",
      "Alice Napolitano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kate Curren",
      "Andrea Dellechiaie"
     ],
     "a": [
      "Natasha De Carvalho",
      "Liz Cuozzo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Marr Flores",
      "Alex Lee"
     ],
     "a": [
      "Darren Saks",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Charlie Johnston",
      "Thomas Schillow"
     ],
     "a": [
      "Joe Palumbo",
      "Andrew Hyman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Laura Elleman",
      "Marr Flores"
     ],
     "a": [
      "Eva Danieli",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Carly Pfeffer",
      "Bud Heller"
     ],
     "a": [
      "Alice Napolitano",
      "Robert Toledo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kate Curren",
      "Thomas Schillow"
     ],
     "a": [
      "Janet Bellaran",
      "Andrew Hyman"
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
      "Natasha De Carvalho",
      "Joe Palumbo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Carly Pfeffer",
      "Jill Lesnik"
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
      "Kate Curren",
      "Andrea Dellechiaie"
     ],
     "a": [
      "Liz Cuozzo",
      "Natasha De Carvalho"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Marr Flores",
      "Bud Heller"
     ],
     "a": [
      "Joe Palumbo",
      "Michael Dombrowiecki"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Alex Lee",
      "Thomas Schillow"
     ],
     "a": [
      "Darren Saks",
      "Andrew Hyman"
     ]
    }
   ]
  },
  {
   "result": "home",
   "round": 2,
   "home": "Bounce Malvern Black",
   "away": "Pickle Place",
   "time": "2025-11-22T14:00:00",
   "complete": true,
   "homeSeed": 1,
   "awaySeed": 3,
   "homePoints": 653,
   "awayPoints": 569,
   "homeGW": 24,
   "awayGW": 8,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Karen Moliver",
      "Jim Darcangelo"
     ],
     "a": [
      "Harriet Levin",
      "Tom Zentmeyer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Katherine Maruyama",
      "Derek Le"
     ],
     "a": [
      "Cynthia Eisen",
      "Jonathan Goldner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jennifer Wang",
      "Keith Goldberg"
     ],
     "a": [
      "Marykristin Haskell",
      "Eric Markowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Stephanie Woomer",
      "Michael Finkelstein"
     ],
     "a": [
      "Jane Meng",
      "David Eisen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Katherine Maruyama",
      "Karen Moliver"
     ],
     "a": [
      "Cynthia Eisen",
      "Harriet Levin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jill Scully",
      "Vicki Main"
     ],
     "a": [
      "Janet Garrity",
      "Marykristin Haskell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Brian Aguilar",
      "Jim Darcangelo"
     ],
     "a": [
      "Eric Markowitz",
      "Tom Zentmeyer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Derek Le",
      "Jingwei Wu"
     ],
     "a": [
      "Jonathan Goldner",
      "Robert Block"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Stephanie Woomer",
      "Keith Goldberg"
     ],
     "a": [
      "Harriet Levin",
      "Tom Zentmeyer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jennifer Wang",
      "Jingwei Wu"
     ],
     "a": [
      "Cynthia Eisen",
      "David Eisen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Vicki Main",
      "Brian Aguilar"
     ],
     "a": [
      "Marykristin Haskell",
      "Eric Markowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jill Scully",
      "Michael Finkelstein"
     ],
     "a": [
      "Jane Meng",
      "Z Zhang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Katherine Maruyama",
      "Stephanie Woomer"
     ],
     "a": [
      "Cynthia Eisen",
      "Harriet Levin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jennifer Wang",
      "Karen Moliver"
     ],
     "a": [
      "Janet Garrity",
      "Marykristin Haskell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Brian Aguilar",
      "Michael Finkelstein"
     ],
     "a": [
      "Eric Markowitz",
      "Tom Zentmeyer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Keith Goldberg",
      "Derek Le"
     ],
     "a": [
      "Jonathan Goldner",
      "Robert Block"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Katherine Maruyama",
      "Keith Goldberg"
     ],
     "a": [
      "Marykristin Haskell",
      "Tom Zentmeyer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jennifer Wang",
      "Jingwei Wu"
     ],
     "a": [
      "Janine Forrest",
      "Jonathan Goldner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Karen Moliver",
      "Brian Aguilar"
     ],
     "a": [
      "Harriet Levin",
      "Robert Block"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jill Scully",
      "Jim Darcangelo"
     ],
     "a": [
      "Cynthia Eisen",
      "David Eisen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Vicki Main",
      "Stephanie Woomer"
     ],
     "a": [
      "Harriet Levin",
      "Marykristin Haskell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Katherine Maruyama",
      "Jill Scully"
     ],
     "a": [
      "Cynthia Eisen",
      "Janine Forrest"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Keith Goldberg",
      "Jim Darcangelo"
     ],
     "a": [
      "Jonathan Goldner",
      "Tom Zentmeyer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Derek Le",
      "Jingwei Wu"
     ],
     "a": [
      "Eric Markowitz",
      "Z Zhang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Katherine Maruyama",
      "Derek Le"
     ],
     "a": [
      "Marykristin Haskell",
      "Tom Zentmeyer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jennifer Wang",
      "Brian Aguilar"
     ],
     "a": [
      "Janine Forrest",
      "Jonathan Goldner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Karen Moliver",
      "Keith Goldberg"
     ],
     "a": [
      "Harriet Levin",
      "Robert Block"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Vicki Main",
      "Michael Finkelstein"
     ],
     "a": [
      "Jane Meng",
      "David Eisen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Katherine Maruyama",
      "Jennifer Wang"
     ],
     "a": [
      "Harriet Levin",
      "Marykristin Haskell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jill Scully",
      "Stephanie Woomer"
     ],
     "a": [
      "Cynthia Eisen",
      "Janine Forrest"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Keith Goldberg",
      "Jingwei Wu"
     ],
     "a": [
      "Jonathan Goldner",
      "Tom Zentmeyer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jim Darcangelo",
      "Michael Finkelstein"
     ],
     "a": [
      "Eric Markowitz",
      "Z Zhang"
     ]
    }
   ]
  },
  {
   "result": "away",
   "round": 3,
   "home": "Pickleball Palace",
   "away": "Bounce Malvern Black",
   "time": "2025-12-07T09:00:00",
   "complete": true,
   "homeSeed": 2,
   "awaySeed": 1,
   "homePoints": 580,
   "awayPoints": 644,
   "homeGW": 10,
   "awayGW": 22,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kate Curren",
      "Charlie Johnston"
     ],
     "a": [
      "Stephanie Woomer",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Carly Pfeffer",
      "Bud Heller"
     ],
     "a": [
      "Jill Scully",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jill Lesnik",
      "Marr Flores"
     ],
     "a": [
      "Vicki Main",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Amanda Quinn",
      "Thomas Schillow"
     ],
     "a": [
      "Katherine Maruyama",
      "Jingwei Wu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Amanda Quinn",
      "Jill Lesnik"
     ],
     "a": [
      "Katherine Maruyama",
      "Karen Moliver"
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
      "Jill Scully",
      "Jennifer Wang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Charlie Johnston",
      "Thomas Schillow"
     ],
     "a": [
      "Brian Aguilar",
      "Keith Goldberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Marr Flores",
      "Brian Gonzalez"
     ],
     "a": [
      "Jingwei Wu",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jill Lesnik",
      "Brian Gonzalez"
     ],
     "a": [
      "Stephanie Woomer",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Amanda Quinn",
      "Marr Flores"
     ],
     "a": [
      "Karen Moliver",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Carly Pfeffer",
      "Bud Heller"
     ],
     "a": [
      "Vicki Main",
      "Brian Aguilar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kate Curren",
      "Thomas Schillow"
     ],
     "a": [
      "Katherine Maruyama",
      "Keith Goldberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jill Lesnik",
      "Andrea Dellechiaie"
     ],
     "a": [
      "Stephanie Woomer",
      "Jill Scully"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kate Curren",
      "Carly Pfeffer"
     ],
     "a": [
      "Katherine Maruyama",
      "Jennifer Wang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Bud Heller",
      "Thomas Schillow"
     ],
     "a": [
      "Jingwei Wu",
      "Brian Aguilar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Charlie Johnston",
      "Brian Gonzalez"
     ],
     "a": [
      "Jim Darcangelo",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kate Curren",
      "Charlie Johnston"
     ],
     "a": [
      "Jennifer Wang",
      "Keith Goldberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Andrea Dellechiaie",
      "Thomas Schillow"
     ],
     "a": [
      "Karen Moliver",
      "Brian Aguilar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Carly Pfeffer",
      "Marr Flores"
     ],
     "a": [
      "Katherine Maruyama",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Amanda Quinn",
      "Brian Gonzalez"
     ],
     "a": [
      "Vicki Main",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kate Curren",
      "Andrea Dellechiaie"
     ],
     "a": [
      "Vicki Main",
      "Karen Moliver"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jill Lesnik",
      "Amanda Quinn"
     ],
     "a": [
      "Jill Scully",
      "Stephanie Woomer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Bud Heller",
      "Charlie Johnston"
     ],
     "a": [
      "Jim Darcangelo",
      "Brian Aguilar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Marr Flores",
      "Thomas Schillow"
     ],
     "a": [
      "Jingwei Wu",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kate Curren",
      "Thomas Schillow"
     ],
     "a": [
      "Katherine Maruyama",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Andrea Dellechiaie",
      "Bud Heller"
     ],
     "a": [
      "Karen Moliver",
      "Brian Aguilar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Carly Pfeffer",
      "Marr Flores"
     ],
     "a": [
      "Jennifer Wang",
      "Jingwei Wu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Amanda Quinn",
      "Brian Gonzalez"
     ],
     "a": [
      "Jill Scully",
      "Michael Finkelstein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Amanda Quinn",
      "Kate Curren"
     ],
     "a": [
      "Jennifer Wang",
      "Stephanie Woomer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Andrea Dellechiaie",
      "Carly Pfeffer"
     ],
     "a": [
      "Katherine Maruyama",
      "Vicki Main"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Bud Heller",
      "Marr Flores"
     ],
     "a": [
      "Michael Finkelstein",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Thomas Schillow",
      "Brian Gonzalez"
     ],
     "a": [
      "Jingwei Wu",
      "Brian Aguilar"
     ]
    }
   ]
  }
 ],
 "extraPlayerIds": {
  "Michael Stein": "034b6d42-ef50-4ac3-9068-4ca0da89151e",
  "Michael Claps": "1d6ae8b9-7bf1-44e6-b8e9-ad349feb1cb2",
  "Al Gonzalez": "2c73cead-4f65-4f37-abd2-920bcb876a79",
  "Picky Vorabouth": "38336cb3-6ff4-4187-abe5-3f0a819d0a0d",
  "Zhi Chen": "7b8eb5f5-16c4-4b02-961e-a86eafa25ec4",
  "Mitchell Ciolino": "85bfa09e-1bea-42e9-8059-4c0ef5642a25",
  "Christopher Palermo": "92ab40c4-2317-466b-abdf-84ad751afcab",
  "Debbie Gray": "97133057-a52b-4407-94c6-eb11e116e83e",
  "Carolyn Coonan": "a6669cc7-9c23-4088-8e49-e529dc9b46a8",
  "Cynthia Covie": "b146d15b-2ed7-4087-a6a0-90d4538aea72",
  "Skip Laspina": "cd075c79-d2f2-4d7b-9fbe-707829a916a1",
  "Bridget Bruno": "d295da57-60d1-4706-8464-8b1e7b593df0",
  "Talen Singer": "d4cdb8c8-9220-4aa7-b48a-41f9f30dff51",
  "Yoon Choi": "f3f6a49d-fd44-4f24-bb92-b3d04b50a3d9"
 },
 "meta": {
  "matchesPlayed": 65,
  "provisionalMatches": 0,
  "weeks": "1-12",
  "totalPlayers": 230,
  "ratingHistoryWeeks": [
   1,
   3,
   4,
   5,
   6,
   7,
   8,
   9,
   10,
   11,
   12
  ],
  "divisionSlug": "cb1126a8",
  "hasPlayoffs": true,
  "typicalDay": "Saturdays",
  "detailFile": "detail-cb1126a8.js",
  "clubName": "",
  "divisionName": "4.0 (50+)",
  "leagueType": "travel",
  "seasonSlug": "2025-fall",
  "seasonLabel": "Fall 2025",
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
   "crossPodMatchups": 25,
   "totalMatchups": 65,
   "reported": {
    "South": [
     "Bounce Malvern Black",
     "Bounce Malvern Blue",
     "Pickle House",
     "Pickle Place",
     "Players Courtyard"
    ],
    "North": [
     "Flemington",
     "Home Court",
     "Monroe",
     "Pickleball Palace",
     "The Atlantic Club"
    ]
   },
   "schedule": {
    "Pod 1": [
     "Bounce Malvern Black",
     "Bounce Malvern Blue",
     "Flemington",
     "Home Court",
     "Monroe",
     "Pickle House",
     "Pickle Place",
     "Pickleball Palace",
     "Players Courtyard",
     "The Atlantic Club"
    ]
   }
  }
 }
};
  DATA.meta.asOf = "2026-09-01T00:52:13.632Z";
  window.DATA = DATA;
  window.CPL_DATASETS = window.CPL_DATASETS || {};
  window.CPL_DATASETS["cb1126a8"] = DATA;
})();
