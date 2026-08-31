(function () {
  const DATA = {
 "players": [
  {
   "name": "Butch Beri",
   "gender": "Male",
   "team": "Ace Bandits",
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
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 46,
   "ppg": 21,
   "leagueRank": 22,
   "rating": 2.1,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": 2.8,
   "strengthOfOpponents": -0.7,
   "playerId": "9b2bf118-0649-4328-816a-efaf11eef00b"
  },
  {
   "name": "Amy Clayman",
   "gender": "Female",
   "team": "Ace & Eights",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 11,
   "losses": 1,
   "pointsWon": 249,
   "totalPointsAgainst": 162,
   "mixedWins": 5,
   "mixedLosses": 1,
   "genderWins": 6,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "b827322d-e01b-4ca5-b8ae-680982fa8cd1",
   "winPct": 91.7,
   "diff": 87,
   "ppg": 20.8,
   "leagueRank": 15,
   "rating": 2,
   "ratingGames": 12,
   "confidence": 71,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": -1.5
  },
  {
   "name": "Patrick Mirasol",
   "gender": "Male",
   "team": "Kitchen Commanders",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 123,
   "totalPointsAgainst": 107,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 16,
   "ppg": 20.5,
   "leagueRank": 57,
   "rating": -1.3,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -2.6,
   "playerId": "f9660bdf-0e09-4e47-9af4-7fd9255f64e2"
  },
  {
   "name": "Troy Sackawitch",
   "gender": "Male",
   "team": "Ace Bandits",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 48,
   "wins": 37,
   "losses": 11,
   "pointsWon": 958,
   "totalPointsAgainst": 787,
   "mixedWins": 16,
   "mixedLosses": 8,
   "genderWins": 21,
   "genderLosses": 3,
   "clutchWins": 13,
   "clutchLosses": 4,
   "winPct": 77.1,
   "diff": 171,
   "ppg": 20,
   "leagueRank": 2,
   "rating": 5.2,
   "ratingGames": 48,
   "confidence": 88,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 1.4,
   "playerId": "3b95d119-6f9a-4013-b07f-74e03823c1d1"
  },
  {
   "name": "Dennis Higman",
   "gender": "Male",
   "team": "Ace & Eights",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 20,
   "losses": 6,
   "pointsWon": 524,
   "totalPointsAgainst": 397,
   "mixedWins": 12,
   "mixedLosses": 1,
   "genderWins": 8,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 4,
   "playerId": "b8fabebb-fd0f-49a8-929a-defbac098e43",
   "winPct": 76.9,
   "diff": 127,
   "ppg": 20.2,
   "leagueRank": 1,
   "rating": 4.5,
   "ratingGames": 26,
   "confidence": 82,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.7
  },
  {
   "name": "Rebecca Mcginnis",
   "gender": "Female",
   "team": "Ace Bandits",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 50,
   "wins": 38,
   "losses": 12,
   "pointsWon": 989,
   "totalPointsAgainst": 835,
   "mixedWins": 21,
   "mixedLosses": 6,
   "genderWins": 17,
   "genderLosses": 6,
   "clutchWins": 12,
   "clutchLosses": 4,
   "winPct": 76,
   "diff": 154,
   "ppg": 19.8,
   "leagueRank": 4,
   "rating": 3.7,
   "ratingGames": 50,
   "confidence": 89,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 1.1,
   "playerId": "e292105e-2554-4a80-accc-6b28514a8ec1"
  },
  {
   "name": "Ginger Evans",
   "gender": "Female",
   "team": "Ace & Eights",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 28,
   "losses": 9,
   "pointsWon": 728,
   "totalPointsAgainst": 553,
   "mixedWins": 15,
   "mixedLosses": 4,
   "genderWins": 13,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 75.7,
   "diff": 175,
   "ppg": 19.7,
   "leagueRank": 3,
   "rating": 4.1,
   "ratingGames": 37,
   "confidence": 86,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.1,
   "playerId": "f9ea65b5-8f59-4c04-89b0-69ca9429c325"
  },
  {
   "name": "Andrea Schwab",
   "gender": "Female",
   "team": "ACE ACE Baby",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 31,
   "losses": 11,
   "pointsWon": 834,
   "totalPointsAgainst": 702,
   "mixedWins": 15,
   "mixedLosses": 9,
   "genderWins": 16,
   "genderLosses": 2,
   "clutchWins": 8,
   "clutchLosses": 3,
   "winPct": 73.8,
   "diff": 132,
   "ppg": 19.9,
   "leagueRank": 5,
   "rating": 3.6,
   "ratingGames": 42,
   "confidence": 87,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.9,
   "playerId": "605d7726-f903-4606-ad3d-14964b9e2e1b"
  },
  {
   "name": "Marc Witte",
   "gender": "Male",
   "team": "Ace & Eights",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 25,
   "losses": 10,
   "pointsWon": 686,
   "totalPointsAgainst": 605,
   "mixedWins": 9,
   "mixedLosses": 6,
   "genderWins": 16,
   "genderLosses": 4,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 71.4,
   "diff": 81,
   "ppg": 19.6,
   "leagueRank": 9,
   "rating": 2.3,
   "ratingGames": 35,
   "confidence": 85,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": 1,
   "playerId": "846b9f43-2055-4f81-a134-bb64b8d636d0"
  },
  {
   "name": "Andrea Galanti",
   "gender": "Female",
   "team": "ACE ACE Baby",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 51,
   "wins": 35,
   "losses": 16,
   "pointsWon": 1006,
   "totalPointsAgainst": 864,
   "mixedWins": 17,
   "mixedLosses": 8,
   "genderWins": 18,
   "genderLosses": 8,
   "clutchWins": 7,
   "clutchLosses": 3,
   "winPct": 68.6,
   "diff": 142,
   "ppg": 19.7,
   "leagueRank": 7,
   "rating": 2.5,
   "ratingGames": 51,
   "confidence": 89,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0,
   "playerId": "cd5e243a-d109-4637-8372-9330696a943d"
  },
  {
   "name": "Marvell Whitley",
   "gender": "Male",
   "team": "Ace Rebels",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 12,
   "losses": 6,
   "pointsWon": 340,
   "totalPointsAgainst": 312,
   "mixedWins": 6,
   "mixedLosses": 3,
   "genderWins": 6,
   "genderLosses": 3,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 28,
   "ppg": 18.9,
   "leagueRank": 23,
   "rating": -0.1,
   "ratingGames": 18,
   "confidence": 76,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -1.3,
   "playerId": "af790542-53d7-4390-a074-40c743a9be0c"
  },
  {
   "name": "Anthony Viola",
   "gender": "Male",
   "team": "Ace & Eights",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 106,
   "totalPointsAgainst": 81,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "2e35e9c0-513c-4f32-bd0d-d4f79dc29345",
   "winPct": 66.7,
   "diff": 25,
   "ppg": 17.7,
   "leagueRank": 72,
   "rating": 0.2,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": -1,
   "strengthOfOpponents": -2.4
  },
  {
   "name": "Leslie Phelps",
   "gender": "Female",
   "team": "Kitchen Commanders",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 114,
   "totalPointsAgainst": 110,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "3fb49be1-06b9-4911-a022-83c360f3416e",
   "winPct": 66.7,
   "diff": 4,
   "ppg": 19,
   "leagueRank": 68,
   "rating": 0.7,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": -0.4
  },
  {
   "name": "Kelley Batejan",
   "gender": "Female",
   "team": "Kitchen Commanders",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 23,
   "losses": 12,
   "pointsWon": 691,
   "totalPointsAgainst": 581,
   "mixedWins": 14,
   "mixedLosses": 6,
   "genderWins": 9,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 65.7,
   "diff": 110,
   "ppg": 19.7,
   "leagueRank": 6,
   "rating": 3.8,
   "ratingGames": 35,
   "confidence": 85,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.8,
   "playerId": "5d124581-6317-4648-8c11-2fa9235da2c3"
  },
  {
   "name": "Linda Goss",
   "gender": "Female",
   "team": "ACE ACE Baby",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 45,
   "wins": 29,
   "losses": 16,
   "pointsWon": 857,
   "totalPointsAgainst": 757,
   "mixedWins": 10,
   "mixedLosses": 11,
   "genderWins": 19,
   "genderLosses": 5,
   "clutchWins": 4,
   "clutchLosses": 6,
   "winPct": 64.4,
   "diff": 100,
   "ppg": 19,
   "leagueRank": 11,
   "rating": 2.3,
   "ratingGames": 45,
   "confidence": 88,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.1,
   "playerId": "14e5edae-ff22-415b-8267-d46a2117ed8d"
  },
  {
   "name": "Jason Fingerman",
   "gender": "Male",
   "team": "Kitchen Commanders",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 18,
   "losses": 10,
   "pointsWon": 552,
   "totalPointsAgainst": 481,
   "mixedWins": 7,
   "mixedLosses": 6,
   "genderWins": 11,
   "genderLosses": 4,
   "clutchWins": 5,
   "clutchLosses": 5,
   "playerId": "c0b3d7fb-5792-4ff4-a83e-47db88ea0592",
   "winPct": 64.3,
   "diff": 71,
   "ppg": 19.7,
   "leagueRank": 8,
   "rating": 4.3,
   "ratingGames": 28,
   "confidence": 83,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 1.8
  },
  {
   "name": "Grace Chung",
   "gender": "Female",
   "team": "ACE ACE Baby",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 9,
   "losses": 5,
   "pointsWon": 275,
   "totalPointsAgainst": 249,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 6,
   "genderLosses": 1,
   "clutchWins": 4,
   "clutchLosses": 2,
   "playerId": "6e476240-4e0c-46ca-94b1-f2ec4e214835",
   "winPct": 64.3,
   "diff": 26,
   "ppg": 19.6,
   "leagueRank": 37,
   "rating": 1.7,
   "ratingGames": 14,
   "confidence": 73,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.6
  },
  {
   "name": "Ira Krassan",
   "gender": "Male",
   "team": "Ace Bandits",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 16,
   "losses": 9,
   "pointsWon": 482,
   "totalPointsAgainst": 422,
   "mixedWins": 8,
   "mixedLosses": 4,
   "genderWins": 8,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 64,
   "diff": 60,
   "ppg": 19.3,
   "leagueRank": 12,
   "rating": 2.1,
   "ratingGames": 25,
   "confidence": 82,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.6,
   "playerId": "03de01b1-2236-46cf-a94d-6f98cb142ddd"
  },
  {
   "name": "Tinglan Zhao",
   "gender": "Female",
   "team": "Ace & Eights",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 49,
   "wins": 31,
   "losses": 18,
   "pointsWon": 959,
   "totalPointsAgainst": 852,
   "mixedWins": 17,
   "mixedLosses": 9,
   "genderWins": 14,
   "genderLosses": 9,
   "clutchWins": 9,
   "clutchLosses": 7,
   "winPct": 63.3,
   "diff": 107,
   "ppg": 19.6,
   "leagueRank": 13,
   "rating": 2.7,
   "ratingGames": 49,
   "confidence": 88,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 1.2,
   "playerId": "5f2e3f29-7b61-4d23-ba5a-23bfe5eac362"
  },
  {
   "name": "Anthony Strazzeri",
   "gender": "Male",
   "team": "Ace Bandits",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 54,
   "wins": 34,
   "losses": 20,
   "pointsWon": 1048,
   "totalPointsAgainst": 951,
   "mixedWins": 17,
   "mixedLosses": 11,
   "genderWins": 17,
   "genderLosses": 9,
   "clutchWins": 11,
   "clutchLosses": 8,
   "winPct": 63,
   "diff": 97,
   "ppg": 19.4,
   "leagueRank": 14,
   "rating": 2.4,
   "ratingGames": 54,
   "confidence": 89,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 1,
   "playerId": "2e9710c7-96c5-4bf8-a304-7d7b1968eb90"
  },
  {
   "name": "Joan Rudderow",
   "gender": "Female",
   "team": "Ace & Eights",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 29,
   "losses": 17,
   "pointsWon": 863,
   "totalPointsAgainst": 778,
   "mixedWins": 14,
   "mixedLosses": 8,
   "genderWins": 15,
   "genderLosses": 9,
   "clutchWins": 7,
   "clutchLosses": 4,
   "winPct": 63,
   "diff": 85,
   "ppg": 18.8,
   "leagueRank": 17,
   "rating": 0.7,
   "ratingGames": 46,
   "confidence": 88,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.1,
   "playerId": "dca2ce61-749b-421c-9205-0a16fc656a36"
  },
  {
   "name": "James Conroy",
   "gender": "Male",
   "team": "Ace Rebels",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 48,
   "wins": 30,
   "losses": 18,
   "pointsWon": 923,
   "totalPointsAgainst": 796,
   "mixedWins": 16,
   "mixedLosses": 8,
   "genderWins": 14,
   "genderLosses": 10,
   "clutchWins": 5,
   "clutchLosses": 7,
   "winPct": 62.5,
   "diff": 127,
   "ppg": 19.2,
   "leagueRank": 10,
   "rating": 2.5,
   "ratingGames": 48,
   "confidence": 89,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -0.4,
   "playerId": "e784764f-725c-4b08-a982-a35771b64254"
  },
  {
   "name": "Brad Feldman",
   "gender": "Male",
   "team": "Ace & Eights",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 24,
   "losses": 15,
   "pointsWon": 741,
   "totalPointsAgainst": 671,
   "mixedWins": 13,
   "mixedLosses": 8,
   "genderWins": 11,
   "genderLosses": 7,
   "clutchWins": 8,
   "clutchLosses": 6,
   "winPct": 61.5,
   "diff": 70,
   "ppg": 19,
   "leagueRank": 19,
   "rating": 1,
   "ratingGames": 39,
   "confidence": 87,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.3,
   "playerId": "e083314c-48dc-440e-8d42-ecf474296e38"
  },
  {
   "name": "Bill Mcgrory",
   "gender": "Male",
   "team": "Ace & Eights",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 25,
   "losses": 17,
   "pointsWon": 774,
   "totalPointsAgainst": 707,
   "mixedWins": 15,
   "mixedLosses": 6,
   "genderWins": 10,
   "genderLosses": 11,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 59.5,
   "diff": 67,
   "ppg": 18.4,
   "leagueRank": 21,
   "rating": -0.2,
   "ratingGames": 42,
   "confidence": 87,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.8,
   "playerId": "d1958142-fabc-4f26-8afc-2b9947c27f1b"
  },
  {
   "name": "Amy Neckes",
   "gender": "Female",
   "team": "Ace & Eights",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 54,
   "wins": 32,
   "losses": 22,
   "pointsWon": 1023,
   "totalPointsAgainst": 916,
   "mixedWins": 16,
   "mixedLosses": 10,
   "genderWins": 16,
   "genderLosses": 12,
   "clutchWins": 8,
   "clutchLosses": 10,
   "winPct": 59.3,
   "diff": 107,
   "ppg": 18.9,
   "leagueRank": 18,
   "rating": 1.7,
   "ratingGames": 54,
   "confidence": 89,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.2,
   "playerId": "5691a68e-0367-4af2-b318-4e927e00d4d6"
  },
  {
   "name": "Howard Cetel",
   "gender": "Male",
   "team": "Ace Rebels",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 20,
   "losses": 15,
   "pointsWon": 668,
   "totalPointsAgainst": 645,
   "mixedWins": 8,
   "mixedLosses": 8,
   "genderWins": 12,
   "genderLosses": 7,
   "clutchWins": 5,
   "clutchLosses": 6,
   "winPct": 57.1,
   "diff": 23,
   "ppg": 19.1,
   "leagueRank": 16,
   "rating": 3,
   "ratingGames": 35,
   "confidence": 85,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 1.4,
   "playerId": "bff308e5-13f7-4eec-9c98-9095255f062f"
  },
  {
   "name": "Lisa Pinder",
   "gender": "Female",
   "team": "Ace Bandits",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 22,
   "losses": 17,
   "pointsWon": 734,
   "totalPointsAgainst": 687,
   "mixedWins": 10,
   "mixedLosses": 10,
   "genderWins": 12,
   "genderLosses": 7,
   "clutchWins": 3,
   "clutchLosses": 7,
   "winPct": 56.4,
   "diff": 47,
   "ppg": 18.8,
   "leagueRank": 20,
   "rating": 1.4,
   "ratingGames": 39,
   "confidence": 87,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.4,
   "playerId": "7c49b9f3-7f46-4e68-8786-4fe39fdd8f2b"
  },
  {
   "name": "Greg Taylor",
   "gender": "Male",
   "team": "Ace & Eights",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 40,
   "wins": 22,
   "losses": 18,
   "pointsWon": 741,
   "totalPointsAgainst": 750,
   "mixedWins": 11,
   "mixedLosses": 10,
   "genderWins": 11,
   "genderLosses": 8,
   "clutchWins": 11,
   "clutchLosses": 5,
   "winPct": 55,
   "diff": -9,
   "ppg": 18.5,
   "leagueRank": 27,
   "rating": 0.2,
   "ratingGames": 40,
   "confidence": 87,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 1,
   "playerId": "701f7029-4353-4548-b8db-b7ac7ed3d847"
  },
  {
   "name": "Tim Haresign",
   "gender": "Male",
   "team": "Ace Rebels",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 23,
   "losses": 19,
   "pointsWon": 757,
   "totalPointsAgainst": 768,
   "mixedWins": 8,
   "mixedLosses": 13,
   "genderWins": 15,
   "genderLosses": 6,
   "clutchWins": 6,
   "clutchLosses": 4,
   "winPct": 54.8,
   "diff": -11,
   "ppg": 18,
   "leagueRank": 25,
   "rating": -0.2,
   "ratingGames": 42,
   "confidence": 87,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.3,
   "playerId": "ca80ecb3-183e-4c23-aa3d-1f680335268d"
  },
  {
   "name": "Dawn Kempton",
   "gender": "Female",
   "team": "Kitchen Commanders",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 7,
   "losses": 6,
   "pointsWon": 232,
   "totalPointsAgainst": 232,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 53.8,
   "diff": 0,
   "ppg": 17.8,
   "leagueRank": 48,
   "rating": 2,
   "ratingGames": 13,
   "confidence": 71,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.7,
   "playerId": "ab3e99ac-cdcb-4ade-821c-f8e422c09170"
  },
  {
   "name": "Lolita Hagen",
   "gender": "Female",
   "team": "Ace Bandits",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 8,
   "losses": 7,
   "pointsWon": 292,
   "totalPointsAgainst": 274,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 5,
   "winPct": 53.3,
   "diff": 18,
   "ppg": 19.5,
   "leagueRank": 43,
   "rating": 1.3,
   "ratingGames": 15,
   "confidence": 75,
   "strengthOfPartners": 2.1,
   "strengthOfOpponents": 1.3,
   "playerId": "c4ac93eb-8c41-45e6-9ff3-026934b618b5"
  },
  {
   "name": "Sam Tuzza",
   "gender": "Male",
   "team": "ACE ACE Baby",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 17,
   "losses": 15,
   "pointsWon": 598,
   "totalPointsAgainst": 583,
   "mixedWins": 10,
   "mixedLosses": 7,
   "genderWins": 7,
   "genderLosses": 8,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 53.1,
   "diff": 15,
   "ppg": 18.7,
   "leagueRank": 24,
   "rating": 0.9,
   "ratingGames": 32,
   "confidence": 85,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.3,
   "playerId": "e3a6df47-7687-4ab8-b001-7d63a8e5372a"
  },
  {
   "name": "Steven Heller",
   "gender": "Male",
   "team": "Kitchen Commanders",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 40,
   "wins": 21,
   "losses": 19,
   "pointsWon": 738,
   "totalPointsAgainst": 739,
   "mixedWins": 11,
   "mixedLosses": 11,
   "genderWins": 10,
   "genderLosses": 8,
   "clutchWins": 7,
   "clutchLosses": 8,
   "playerId": "344856f5-8559-411b-8fe7-2b5405bb9db6",
   "winPct": 52.5,
   "diff": -1,
   "ppg": 18.5,
   "leagueRank": 26,
   "rating": 0.7,
   "ratingGames": 40,
   "confidence": 87,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.9
  },
  {
   "name": "Dana Sheply",
   "gender": "Female",
   "team": "Ace Bandits",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 22,
   "losses": 20,
   "pointsWon": 764,
   "totalPointsAgainst": 755,
   "mixedWins": 10,
   "mixedLosses": 10,
   "genderWins": 12,
   "genderLosses": 10,
   "clutchWins": 7,
   "clutchLosses": 4,
   "winPct": 52.4,
   "diff": 9,
   "ppg": 18.2,
   "leagueRank": 29,
   "rating": 0.4,
   "ratingGames": 42,
   "confidence": 87,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.5,
   "playerId": "28f35cb8-46a7-4338-9bdc-68f7bd6ca009"
  },
  {
   "name": "Jamie West",
   "gender": "Male",
   "team": "ACE ACE Baby",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 54,
   "wins": 28,
   "losses": 26,
   "pointsWon": 962,
   "totalPointsAgainst": 968,
   "mixedWins": 22,
   "mixedLosses": 7,
   "genderWins": 6,
   "genderLosses": 19,
   "clutchWins": 6,
   "clutchLosses": 7,
   "winPct": 51.9,
   "diff": -6,
   "ppg": 17.8,
   "leagueRank": 31,
   "rating": 0.5,
   "ratingGames": 54,
   "confidence": 89,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.7,
   "playerId": "715c1386-54e9-4169-bacb-e206a518f4c5"
  },
  {
   "name": "Rick Weiser",
   "gender": "Male",
   "team": "Ace & Eights",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 19,
   "losses": 18,
   "pointsWon": 645,
   "totalPointsAgainst": 674,
   "mixedWins": 9,
   "mixedLosses": 10,
   "genderWins": 10,
   "genderLosses": 8,
   "clutchWins": 7,
   "clutchLosses": 1,
   "winPct": 51.4,
   "diff": -29,
   "ppg": 17.4,
   "leagueRank": 39,
   "rating": -1.2,
   "ratingGames": 37,
   "confidence": 86,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.2,
   "playerId": "0748d687-13e0-403d-95de-28c640adaf43"
  },
  {
   "name": "W Michael Kappeler",
   "gender": "Male",
   "team": "Ace Rebels",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 43,
   "wins": 22,
   "losses": 21,
   "pointsWon": 794,
   "totalPointsAgainst": 812,
   "mixedWins": 10,
   "mixedLosses": 12,
   "genderWins": 12,
   "genderLosses": 9,
   "clutchWins": 10,
   "clutchLosses": 8,
   "winPct": 51.2,
   "diff": -18,
   "ppg": 18.5,
   "leagueRank": 30,
   "rating": -1.3,
   "ratingGames": 43,
   "confidence": 87,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.7,
   "playerId": "67b7c17e-8fce-437a-9230-cb46f0f8a76f"
  },
  {
   "name": "Reg Blaber",
   "gender": "Male",
   "team": "Ace & Eights",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 112,
   "totalPointsAgainst": 114,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "03769e99-2521-4e52-bef4-cf55e57e9460",
   "winPct": 50,
   "diff": -2,
   "ppg": 18.7,
   "leagueRank": 74,
   "rating": -0.7,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.5
  },
  {
   "name": "Martyn Babitz",
   "gender": "Male",
   "team": "Kitchen Commanders",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 11,
   "losses": 12,
   "pointsWon": 430,
   "totalPointsAgainst": 424,
   "mixedWins": 5,
   "mixedLosses": 6,
   "genderWins": 6,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 47.8,
   "diff": 6,
   "ppg": 18.7,
   "leagueRank": 28,
   "rating": 0.5,
   "ratingGames": 24,
   "confidence": 81,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": -0.5,
   "playerId": "cf328b8f-9626-4bdf-8069-da6d0f8b17e9"
  },
  {
   "name": "Marjean Stokes",
   "gender": "Female",
   "team": "Ace & Eights",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 18,
   "losses": 20,
   "pointsWon": 667,
   "totalPointsAgainst": 698,
   "mixedWins": 8,
   "mixedLosses": 11,
   "genderWins": 10,
   "genderLosses": 9,
   "clutchWins": 4,
   "clutchLosses": 6,
   "winPct": 47.4,
   "diff": -31,
   "ppg": 17.6,
   "leagueRank": 45,
   "rating": -2.5,
   "ratingGames": 38,
   "confidence": 86,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.7,
   "playerId": "b25b5bf6-a97b-48b9-8b72-5979e2c854ba"
  },
  {
   "name": "Lawrence Padersky",
   "gender": "Male",
   "team": "ACE ACE Baby",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 49,
   "wins": 23,
   "losses": 26,
   "pointsWon": 897,
   "totalPointsAgainst": 899,
   "mixedWins": 13,
   "mixedLosses": 9,
   "genderWins": 10,
   "genderLosses": 17,
   "clutchWins": 6,
   "clutchLosses": 9,
   "winPct": 46.9,
   "diff": -2,
   "ppg": 18.3,
   "leagueRank": 35,
   "rating": 1,
   "ratingGames": 49,
   "confidence": 88,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 1.2,
   "playerId": "cff9ebd3-d67b-4a59-966f-a31b6208a155"
  },
  {
   "name": "Barb Mulckhuyse",
   "gender": "Female",
   "team": "ACE ACE Baby",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 15,
   "losses": 17,
   "pointsWon": 552,
   "totalPointsAgainst": 614,
   "mixedWins": 6,
   "mixedLosses": 9,
   "genderWins": 9,
   "genderLosses": 8,
   "clutchWins": 7,
   "clutchLosses": 4,
   "winPct": 46.9,
   "diff": -62,
   "ppg": 17.3,
   "leagueRank": 42,
   "rating": -1.1,
   "ratingGames": 32,
   "confidence": 85,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.4,
   "playerId": "b4b69268-6029-4071-84b1-45535a570f3a"
  },
  {
   "name": "Dan Matthews",
   "gender": "Male",
   "team": "Kitchen Commanders",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 45,
   "wins": 21,
   "losses": 24,
   "pointsWon": 830,
   "totalPointsAgainst": 863,
   "mixedWins": 12,
   "mixedLosses": 11,
   "genderWins": 9,
   "genderLosses": 13,
   "clutchWins": 11,
   "clutchLosses": 8,
   "winPct": 46.7,
   "diff": -33,
   "ppg": 18.4,
   "leagueRank": 33,
   "rating": 0.2,
   "ratingGames": 45,
   "confidence": 88,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.1,
   "playerId": "db35c570-ffa9-423e-9a3b-8e218fb3f2ec"
  },
  {
   "name": "Hanna Cutler",
   "gender": "Female",
   "team": "Ace Bandits",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 43,
   "wins": 20,
   "losses": 23,
   "pointsWon": 795,
   "totalPointsAgainst": 781,
   "mixedWins": 9,
   "mixedLosses": 12,
   "genderWins": 11,
   "genderLosses": 11,
   "clutchWins": 6,
   "clutchLosses": 8,
   "playerId": "af5e2e89-3606-4d7e-8c5a-b397ff786303",
   "winPct": 46.5,
   "diff": 14,
   "ppg": 18.5,
   "leagueRank": 34,
   "rating": 0,
   "ratingGames": 43,
   "confidence": 87,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.1
  },
  {
   "name": "Colleen Babore",
   "gender": "Female",
   "team": "Ace Rebels",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 53,
   "wins": 24,
   "losses": 29,
   "pointsWon": 939,
   "totalPointsAgainst": 976,
   "mixedWins": 14,
   "mixedLosses": 14,
   "genderWins": 10,
   "genderLosses": 15,
   "clutchWins": 4,
   "clutchLosses": 7,
   "winPct": 45.3,
   "diff": -37,
   "ppg": 17.7,
   "leagueRank": 36,
   "rating": 1.7,
   "ratingGames": 53,
   "confidence": 89,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 1.3,
   "playerId": "d98a87e6-75ed-4aa6-b535-23f3c73f2817"
  },
  {
   "name": "Steve Traum",
   "gender": "Male",
   "team": "ACE ACE Baby",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 11,
   "losses": 14,
   "pointsWon": 467,
   "totalPointsAgainst": 452,
   "mixedWins": 5,
   "mixedLosses": 7,
   "genderWins": 6,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 6,
   "winPct": 44,
   "diff": 15,
   "ppg": 18.7,
   "leagueRank": 32,
   "rating": 0.2,
   "ratingGames": 25,
   "confidence": 82,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.1,
   "playerId": "8880a77b-f445-45f7-9b21-c1e237f1079f"
  },
  {
   "name": "Eric Danver",
   "gender": "Male",
   "team": "Kitchen Commanders",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 6,
   "losses": 8,
   "pointsWon": 256,
   "totalPointsAgainst": 263,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 42.9,
   "diff": -7,
   "ppg": 18.3,
   "leagueRank": 62,
   "rating": -1.1,
   "ratingGames": 14,
   "confidence": 72,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.8,
   "playerId": "5b998c77-fc28-48ca-9044-1443679b288e"
  },
  {
   "name": "Aaron Chan",
   "gender": "Male",
   "team": "Kitchen Commanders",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 12,
   "losses": 16,
   "pointsWon": 493,
   "totalPointsAgainst": 513,
   "mixedWins": 6,
   "mixedLosses": 7,
   "genderWins": 6,
   "genderLosses": 9,
   "clutchWins": 3,
   "clutchLosses": 6,
   "winPct": 42.9,
   "diff": -20,
   "ppg": 17.6,
   "leagueRank": 41,
   "rating": 1.1,
   "ratingGames": 28,
   "confidence": 83,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 1.6,
   "playerId": "57666861-23d0-4809-9556-b646579f2fd6"
  },
  {
   "name": "Sheryl Axelrod",
   "gender": "Female",
   "team": "Kitchen Commanders",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 18,
   "losses": 24,
   "pointsWon": 740,
   "totalPointsAgainst": 803,
   "mixedWins": 15,
   "mixedLosses": 6,
   "genderWins": 3,
   "genderLosses": 18,
   "clutchWins": 5,
   "clutchLosses": 8,
   "winPct": 42.9,
   "diff": -63,
   "ppg": 17.6,
   "leagueRank": 46,
   "rating": -1.8,
   "ratingGames": 42,
   "confidence": 87,
   "strengthOfPartners": -1,
   "strengthOfOpponents": -0.7,
   "playerId": "6f9e0a16-373f-4c8e-8e9f-31a4696b1a96"
  },
  {
   "name": "Rob Byrnes",
   "gender": "Male",
   "team": "Ace Bandits",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 47,
   "wins": 20,
   "losses": 27,
   "pointsWon": 815,
   "totalPointsAgainst": 875,
   "mixedWins": 7,
   "mixedLosses": 16,
   "genderWins": 13,
   "genderLosses": 11,
   "clutchWins": 7,
   "clutchLosses": 5,
   "winPct": 42.6,
   "diff": -60,
   "ppg": 17.3,
   "leagueRank": 49,
   "rating": -1,
   "ratingGames": 47,
   "confidence": 88,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.7,
   "playerId": "65d3d6a5-c8ab-4841-bedd-321372bbb624"
  },
  {
   "name": "Danielle Simpson",
   "gender": "Female",
   "team": "Ace Bandits",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 40,
   "wins": 17,
   "losses": 23,
   "pointsWon": 706,
   "totalPointsAgainst": 770,
   "mixedWins": 7,
   "mixedLosses": 13,
   "genderWins": 10,
   "genderLosses": 10,
   "clutchWins": 8,
   "clutchLosses": 5,
   "winPct": 42.5,
   "diff": -64,
   "ppg": 17.7,
   "leagueRank": 52,
   "rating": -2.4,
   "ratingGames": 40,
   "confidence": 87,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.6,
   "playerId": "3373e556-3a34-411c-abb7-7f39c2f29e13"
  },
  {
   "name": "Brittany Jacobs",
   "gender": "Female",
   "team": "Kitchen Commanders",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 45,
   "wins": 19,
   "losses": 26,
   "pointsWon": 824,
   "totalPointsAgainst": 857,
   "mixedWins": 11,
   "mixedLosses": 11,
   "genderWins": 8,
   "genderLosses": 15,
   "clutchWins": 8,
   "clutchLosses": 9,
   "winPct": 42.2,
   "diff": -33,
   "ppg": 18.3,
   "leagueRank": 40,
   "rating": -0.1,
   "ratingGames": 45,
   "confidence": 88,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.4,
   "playerId": "15dcc305-70cf-4eb1-bde4-a50a30130f3a"
  },
  {
   "name": "Joseph Villani",
   "gender": "Male",
   "team": "Kitchen Commanders",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 16,
   "losses": 22,
   "pointsWon": 663,
   "totalPointsAgainst": 732,
   "mixedWins": 7,
   "mixedLosses": 12,
   "genderWins": 9,
   "genderLosses": 10,
   "clutchWins": 7,
   "clutchLosses": 6,
   "winPct": 42.1,
   "diff": -69,
   "ppg": 17.4,
   "leagueRank": 50,
   "rating": -2.5,
   "ratingGames": 38,
   "confidence": 86,
   "strengthOfPartners": -1,
   "strengthOfOpponents": -0.9,
   "playerId": "3d35be48-4648-4320-aec5-3eb571502945"
  },
  {
   "name": "Laura Whitaker",
   "gender": "Female",
   "team": "Ace Rebels",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 5,
   "losses": 7,
   "pointsWon": 211,
   "totalPointsAgainst": 235,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 1,
   "playerId": "4a4fc6f7-3250-4b0a-b50a-a8393a8ac2c7",
   "winPct": 41.7,
   "diff": -24,
   "ppg": 17.6,
   "leagueRank": 73,
   "rating": -1.1,
   "ratingGames": 12,
   "confidence": 71,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0
  },
  {
   "name": "Colette Mcgarrity",
   "gender": "Female",
   "team": "ACE ACE Baby",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 17,
   "losses": 24,
   "pointsWon": 696,
   "totalPointsAgainst": 749,
   "mixedWins": 7,
   "mixedLosses": 13,
   "genderWins": 10,
   "genderLosses": 11,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 41.5,
   "diff": -53,
   "ppg": 17,
   "leagueRank": 51,
   "rating": -2,
   "ratingGames": 42,
   "confidence": 87,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": -1,
   "playerId": "8778e4e6-6736-4f1c-add3-123b68513cc6"
  },
  {
   "name": "Dawn Gordon",
   "gender": "Female",
   "team": "Ace Rebels",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 56,
   "wins": 23,
   "losses": 33,
   "pointsWon": 1003,
   "totalPointsAgainst": 1065,
   "mixedWins": 12,
   "mixedLosses": 14,
   "genderWins": 11,
   "genderLosses": 19,
   "clutchWins": 7,
   "clutchLosses": 9,
   "winPct": 41.1,
   "diff": -62,
   "ppg": 17.9,
   "leagueRank": 38,
   "rating": 1.6,
   "ratingGames": 56,
   "confidence": 90,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 1.4,
   "playerId": "756e256e-ea2f-4e25-9c6a-e780860d048f"
  },
  {
   "name": "Patrick Caponegro",
   "gender": "Male",
   "team": "Ace & Eights",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 10,
   "losses": 15,
   "pointsWon": 432,
   "totalPointsAgainst": 477,
   "mixedWins": 5,
   "mixedLosses": 7,
   "genderWins": 5,
   "genderLosses": 8,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 40,
   "diff": -45,
   "ppg": 17.3,
   "leagueRank": 58,
   "rating": -2.2,
   "ratingGames": 25,
   "confidence": 82,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.4,
   "playerId": "eeb074a7-66de-4302-8ffb-e0ad267026d7"
  },
  {
   "name": "Auguste Turnier",
   "gender": "Male",
   "team": "Ace Bandits",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 15,
   "losses": 23,
   "pointsWon": 670,
   "totalPointsAgainst": 714,
   "mixedWins": 9,
   "mixedLosses": 10,
   "genderWins": 6,
   "genderLosses": 13,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 39.5,
   "diff": -44,
   "ppg": 17.6,
   "leagueRank": 53,
   "rating": -2.6,
   "ratingGames": 38,
   "confidence": 86,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": -1.2,
   "playerId": "65b75e72-ecf8-42ee-8071-c6b58ad2738f"
  },
  {
   "name": "Angeli Dungca",
   "gender": "Female",
   "team": "Kitchen Commanders",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 8,
   "losses": 13,
   "pointsWon": 385,
   "totalPointsAgainst": 412,
   "mixedWins": 5,
   "mixedLosses": 5,
   "genderWins": 3,
   "genderLosses": 8,
   "clutchWins": 3,
   "clutchLosses": 3,
   "playerId": "d2e70e9d-9791-40f9-bde4-2866dacc9ac0",
   "winPct": 38.1,
   "diff": -27,
   "ppg": 18.3,
   "leagueRank": 47,
   "rating": -0.1,
   "ratingGames": 21,
   "confidence": 80,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 1.2
  },
  {
   "name": "Jenn Allen",
   "gender": "Female",
   "team": "Ace Bandits",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 10,
   "losses": 17,
   "pointsWon": 483,
   "totalPointsAgainst": 525,
   "mixedWins": 4,
   "mixedLosses": 9,
   "genderWins": 6,
   "genderLosses": 8,
   "clutchWins": 5,
   "clutchLosses": 3,
   "winPct": 37,
   "diff": -42,
   "ppg": 17.9,
   "leagueRank": 55,
   "rating": -1.2,
   "ratingGames": 27,
   "confidence": 83,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0,
   "playerId": "1741b412-8d86-480b-a9f3-88447159088a"
  },
  {
   "name": "Salvatore Caminito",
   "gender": "Male",
   "team": "Kitchen Commanders",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 33,
   "wins": 12,
   "losses": 21,
   "pointsWon": 606,
   "totalPointsAgainst": 614,
   "mixedWins": 5,
   "mixedLosses": 11,
   "genderWins": 7,
   "genderLosses": 10,
   "clutchWins": 2,
   "clutchLosses": 9,
   "winPct": 36.4,
   "diff": -8,
   "ppg": 18.4,
   "leagueRank": 44,
   "rating": -1.2,
   "ratingGames": 33,
   "confidence": 85,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.8,
   "playerId": "b7af774b-4c46-4429-8177-2b5455d8744f"
  },
  {
   "name": "Liezel Thompson",
   "gender": "Female",
   "team": "Ace Rebels",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 13,
   "losses": 23,
   "pointsWon": 579,
   "totalPointsAgainst": 690,
   "mixedWins": 10,
   "mixedLosses": 8,
   "genderWins": 3,
   "genderLosses": 15,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 36.1,
   "diff": -111,
   "ppg": 16.1,
   "leagueRank": 64,
   "rating": -4.8,
   "ratingGames": 36,
   "confidence": 86,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -1.2,
   "playerId": "7cc58742-bc83-4108-8a47-dffffc5cfced"
  },
  {
   "name": "Hae Youn Reichenberg",
   "gender": "Female",
   "team": "Ace Rebels",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 15,
   "losses": 27,
   "pointsWon": 718,
   "totalPointsAgainst": 781,
   "mixedWins": 8,
   "mixedLosses": 13,
   "genderWins": 7,
   "genderLosses": 14,
   "clutchWins": 1,
   "clutchLosses": 7,
   "winPct": 35.7,
   "diff": -63,
   "ppg": 17.1,
   "leagueRank": 56,
   "rating": -1.3,
   "ratingGames": 42,
   "confidence": 87,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.3,
   "playerId": "73373b91-d52c-4630-9fc7-736410c0a4b3"
  },
  {
   "name": "Kathleen Rimdzius",
   "gender": "Female",
   "team": "Ace & Eights",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 7,
   "losses": 13,
   "pointsWon": 324,
   "totalPointsAgainst": 397,
   "mixedWins": 3,
   "mixedLosses": 7,
   "genderWins": 4,
   "genderLosses": 6,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 35,
   "diff": -73,
   "ppg": 16.2,
   "leagueRank": 66,
   "rating": -3.8,
   "ratingGames": 20,
   "confidence": 79,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.2,
   "playerId": "4a71824b-a493-4861-8036-3633883f6eab"
  },
  {
   "name": "Laura Masi",
   "gender": "Female",
   "team": "Ace Rebels",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 10,
   "losses": 20,
   "pointsWon": 509,
   "totalPointsAgainst": 563,
   "mixedWins": 5,
   "mixedLosses": 10,
   "genderWins": 5,
   "genderLosses": 10,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 33.3,
   "diff": -54,
   "ppg": 17,
   "leagueRank": 60,
   "rating": -2.4,
   "ratingGames": 30,
   "confidence": 84,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": -0.9,
   "playerId": "d65d24a6-1775-4233-bfe6-5ec7aa23f88f"
  },
  {
   "name": "Pete Dunn",
   "gender": "Male",
   "team": "Ace Rebels",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 14,
   "losses": 28,
   "pointsWon": 728,
   "totalPointsAgainst": 817,
   "mixedWins": 6,
   "mixedLosses": 16,
   "genderWins": 8,
   "genderLosses": 12,
   "clutchWins": 6,
   "clutchLosses": 6,
   "winPct": 33.3,
   "diff": -89,
   "ppg": 17.3,
   "leagueRank": 54,
   "rating": 0.2,
   "ratingGames": 42,
   "confidence": 87,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 1.7,
   "playerId": "8e45f538-d95a-4554-9ccf-443a06b5a89e"
  },
  {
   "name": "Lori Frank",
   "gender": "Female",
   "team": "Kitchen Commanders",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 12,
   "losses": 27,
   "pointsWon": 665,
   "totalPointsAgainst": 754,
   "mixedWins": 5,
   "mixedLosses": 13,
   "genderWins": 7,
   "genderLosses": 14,
   "clutchWins": 3,
   "clutchLosses": 9,
   "winPct": 30.8,
   "diff": -89,
   "ppg": 17.1,
   "leagueRank": 59,
   "rating": -1.4,
   "ratingGames": 39,
   "confidence": 87,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.4,
   "playerId": "8e51fde0-5ddd-4e6e-b2f6-49cf79cb8030"
  },
  {
   "name": "Richard Gold",
   "gender": "Male",
   "team": "Ace Bandits",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 9,
   "losses": 21,
   "pointsWon": 509,
   "totalPointsAgainst": 573,
   "mixedWins": 3,
   "mixedLosses": 12,
   "genderWins": 6,
   "genderLosses": 9,
   "clutchWins": 2,
   "clutchLosses": 5,
   "winPct": 30,
   "diff": -64,
   "ppg": 17,
   "leagueRank": 63,
   "rating": -3.7,
   "ratingGames": 30,
   "confidence": 84,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -1.3,
   "playerId": "27b2b26d-c3f5-49cb-9dcb-32f9a2cf79ad"
  },
  {
   "name": "Allison Taylor",
   "gender": "Female",
   "team": "ACE ACE Baby",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 9,
   "losses": 21,
   "pointsWon": 478,
   "totalPointsAgainst": 594,
   "mixedWins": 3,
   "mixedLosses": 12,
   "genderWins": 6,
   "genderLosses": 9,
   "clutchWins": 4,
   "clutchLosses": 1,
   "playerId": "12648cf6-0364-460c-a275-66131bd39657",
   "winPct": 30,
   "diff": -116,
   "ppg": 15.9,
   "leagueRank": 67,
   "rating": -3.8,
   "ratingGames": 30,
   "confidence": 84,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": -0.8
  },
  {
   "name": "Carissa Nicdao",
   "gender": "Female",
   "team": "Kitchen Commanders",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 127,
   "totalPointsAgainst": 143,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 3,
   "playerId": "4cbc053d-b239-4124-91e4-936e1f145907",
   "winPct": 28.6,
   "diff": -16,
   "ppg": 18.1,
   "leagueRank": 75,
   "rating": 0.7,
   "ratingGames": 7,
   "confidence": 59,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 1.9
  },
  {
   "name": "Mustafa Kodwavi",
   "gender": "Male",
   "team": "ACE ACE Baby",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 10,
   "losses": 26,
   "pointsWon": 608,
   "totalPointsAgainst": 694,
   "mixedWins": 5,
   "mixedLosses": 13,
   "genderWins": 5,
   "genderLosses": 13,
   "clutchWins": 2,
   "clutchLosses": 6,
   "winPct": 27.8,
   "diff": -86,
   "ppg": 16.9,
   "leagueRank": 61,
   "rating": -1.9,
   "ratingGames": 36,
   "confidence": 86,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.2,
   "playerId": "69c553be-566b-41f5-9398-2c0b4007b2b2"
  },
  {
   "name": "Gina Blahut",
   "gender": "Female",
   "team": "Kitchen Commanders",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 8,
   "losses": 21,
   "pointsWon": 438,
   "totalPointsAgainst": 575,
   "mixedWins": 3,
   "mixedLosses": 11,
   "genderWins": 5,
   "genderLosses": 10,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 27.6,
   "diff": -137,
   "ppg": 15.1,
   "leagueRank": 71,
   "rating": -3.3,
   "ratingGames": 30,
   "confidence": 84,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -0.1,
   "playerId": "8fb69116-2ad4-417c-ad3a-912a9b13782b"
  },
  {
   "name": "Luke Beri",
   "gender": "Male",
   "team": "Ace Bandits",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 139,
   "totalPointsAgainst": 157,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "b6ec7bf9-b6ca-4b6e-81cf-f6e11d49eaf6",
   "winPct": 25,
   "diff": -18,
   "ppg": 17.4,
   "leagueRank": 78,
   "rating": -3,
   "ratingGames": 8,
   "confidence": 62,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -1.6
  },
  {
   "name": "Amy Long",
   "gender": "Female",
   "team": "ACE ACE Baby",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 3,
   "losses": 9,
   "pointsWon": 179,
   "totalPointsAgainst": 223,
   "mixedWins": 1,
   "mixedLosses": 5,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "690d021b-c77d-4627-b2aa-e8e3ee8e86e8",
   "winPct": 25,
   "diff": -44,
   "ppg": 14.9,
   "leagueRank": 77,
   "rating": -1.9,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": -2,
   "strengthOfOpponents": -0.4
  },
  {
   "name": "Pete Certo",
   "gender": "Male",
   "team": "Ace Rebels",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 7,
   "losses": 21,
   "pointsWon": 465,
   "totalPointsAgainst": 556,
   "mixedWins": 2,
   "mixedLosses": 12,
   "genderWins": 5,
   "genderLosses": 9,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 25,
   "diff": -91,
   "ppg": 16.6,
   "leagueRank": 65,
   "rating": -0.8,
   "ratingGames": 28,
   "confidence": 83,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 1.7,
   "playerId": "3572118b-4e01-4e64-96a4-a7cc80869425"
  },
  {
   "name": "Matthew Tarshis",
   "gender": "Male",
   "team": "ACE ACE Baby",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 8,
   "losses": 27,
   "pointsWon": 570,
   "totalPointsAgainst": 711,
   "mixedWins": 4,
   "mixedLosses": 13,
   "genderWins": 4,
   "genderLosses": 14,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 22.9,
   "diff": -141,
   "ppg": 16.3,
   "leagueRank": 70,
   "rating": -4.2,
   "ratingGames": 36,
   "confidence": 85,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": -1.2,
   "playerId": "6ba8d9f3-5fd9-41f3-b64c-d9c141c005e0"
  },
  {
   "name": "Illyce Katz",
   "gender": "Female",
   "team": "Ace Rebels",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 6,
   "losses": 21,
   "pointsWon": 434,
   "totalPointsAgainst": 534,
   "mixedWins": 4,
   "mixedLosses": 10,
   "genderWins": 2,
   "genderLosses": 11,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 22.2,
   "diff": -100,
   "ppg": 16.1,
   "leagueRank": 69,
   "rating": -2.8,
   "ratingGames": 27,
   "confidence": 83,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.6,
   "playerId": "de04d961-7500-4b47-9e75-f882615afb19"
  },
  {
   "name": "Lynn Bresnahan",
   "gender": "Female",
   "team": "Kitchen Commanders",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 106,
   "totalPointsAgainst": 122,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "dfc7b259-63e3-4fbe-bb0f-0eab2f84f4a8",
   "winPct": 16.7,
   "diff": -16,
   "ppg": 17.7,
   "leagueRank": 80,
   "rating": -0.8,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 1.1
  },
  {
   "name": "Andrew Ravitz",
   "gender": "Male",
   "team": "ACE ACE Baby",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 1,
   "losses": 23,
   "pointsWon": 308,
   "totalPointsAgainst": 500,
   "mixedWins": 1,
   "mixedLosses": 11,
   "genderWins": 0,
   "genderLosses": 12,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 4.2,
   "diff": -192,
   "ppg": 12.8,
   "leagueRank": 76,
   "rating": -5.9,
   "ratingGames": 24,
   "confidence": 80,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": -0.4,
   "playerId": "496b210d-4480-41e9-993e-06fad50d6ebf"
  },
  {
   "name": "Mitchell Keingarsky",
   "gender": "Male",
   "team": "Ace Rebels",
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
   "leagueRank": 82,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "1e064b34-797f-4945-9a56-0b1a22e47450"
  }
 ],
 "teams": [
  {
   "name": "Ace Bandits",
   "w": 6,
   "l": 2,
   "pf": 4831,
   "pa": 4679,
   "gw": 138,
   "gl": 118,
   "diff": 152,
   "gameDiff": 20,
   "power": 0.6,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     65,
     63
    ],
    "male": [
     37,
     27
    ],
    "female": [
     36,
     28
    ]
   }
  },
  {
   "name": "Ace & Eights",
   "w": 5,
   "l": 3,
   "pf": 4884,
   "pa": 4693,
   "gw": 154,
   "gl": 102,
   "diff": 191,
   "gameDiff": 52,
   "power": 0.8,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     78,
     50
    ],
    "male": [
     37,
     27
    ],
    "female": [
     39,
     25
    ]
   }
  },
  {
   "name": "ACE ACE Baby",
   "w": 4,
   "l": 4,
   "pf": 4644,
   "pa": 4735,
   "gw": 122,
   "gl": 134,
   "diff": -91,
   "gameDiff": -12,
   "power": -0.2,
   "powerRank": 5,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     60,
     68
    ],
    "male": [
     19,
     45
    ],
    "female": [
     43,
     21
    ]
   }
  },
  {
   "name": "Kitchen Commanders",
   "w": 3,
   "l": 5,
   "pf": 4899,
   "pa": 4912,
   "gw": 114,
   "gl": 142,
   "diff": -13,
   "gameDiff": -28,
   "power": -0.1,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     61,
     67
    ],
    "male": [
     31,
     33
    ],
    "female": [
     22,
     42
    ]
   }
  },
  {
   "name": "Ace Rebels",
   "w": 2,
   "l": 6,
   "pf": 4612,
   "pa": 4851,
   "gw": 112,
   "gl": 144,
   "diff": -239,
   "gameDiff": -32,
   "power": -0.1,
   "powerRank": 4,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     56,
     72
    ],
    "male": [
     36,
     28
    ],
    "female": [
     20,
     44
    ]
   }
  }
 ],
 "duos": [
  {
   "a": "Ira Krassan",
   "b": "Anthony Strazzeri",
   "team": "Ace Bandits",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 2.5,
   "avgActual": 7,
   "avgExpected": 2,
   "aId": "03de01b1-2236-46cf-a94d-6f98cb142ddd",
   "bId": "2e9710c7-96c5-4bf8-a304-7d7b1968eb90"
  },
  {
   "a": "Hae Youn Reichenberg",
   "b": "Dawn Gordon",
   "team": "Ace Rebels",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 2.5,
   "avgActual": 5.3,
   "avgExpected": 0.4,
   "aId": "73373b91-d52c-4630-9fc7-736410c0a4b3",
   "bId": "756e256e-ea2f-4e25-9c6a-e780860d048f"
  },
  {
   "a": "Troy Sackawitch",
   "b": "Rob Byrnes",
   "team": "Ace Bandits",
   "n": 10,
   "w": 9,
   "l": 1,
   "synergy": 2.4,
   "avgActual": 5.2,
   "avgExpected": 1.8,
   "aId": "3b95d119-6f9a-4013-b07f-74e03823c1d1",
   "bId": "65d3d6a5-c8ab-4841-bedd-321372bbb624"
  },
  {
   "a": "Aaron Chan",
   "b": "Jason Fingerman",
   "team": "Kitchen Commanders",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 2.3,
   "avgActual": 5.5,
   "avgExpected": 1,
   "aId": "57666861-23d0-4809-9556-b646579f2fd6",
   "bId": "c0b3d7fb-5792-4ff4-a83e-47db88ea0592"
  },
  {
   "a": "Andrea Galanti",
   "b": "Lawrence Padersky",
   "team": "ACE ACE Baby",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 2.3,
   "avgActual": 5.5,
   "avgExpected": 1,
   "aId": "cd5e243a-d109-4637-8372-9330696a943d",
   "bId": "cff9ebd3-d67b-4a59-966f-a31b6208a155"
  },
  {
   "a": "Joseph Villani",
   "b": "Sheryl Axelrod",
   "team": "Kitchen Commanders",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 2.2,
   "avgActual": 2.8,
   "avgExpected": -0.9,
   "aId": "3d35be48-4648-4320-aec5-3eb571502945",
   "bId": "6f9e0a16-373f-4c8e-8e9f-31a4696b1a96"
  },
  {
   "a": "Tim Haresign",
   "b": "James Conroy",
   "team": "Ace Rebels",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.1,
   "avgActual": 10.3,
   "avgExpected": 5.4,
   "aId": "ca80ecb3-183e-4c23-aa3d-1f680335268d",
   "bId": "e784764f-725c-4b08-a982-a35771b64254"
  },
  {
   "a": "Tinglan Zhao",
   "b": "Dennis Higman",
   "team": "Ace & Eights",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 2.1,
   "avgActual": 8.5,
   "avgExpected": 4.2,
   "aId": "5f2e3f29-7b61-4d23-ba5a-23bfe5eac362",
   "bId": "b8fabebb-fd0f-49a8-929a-defbac098e43"
  },
  {
   "a": "Laura Masi",
   "b": "Illyce Katz",
   "team": "Ace Rebels",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 2,
   "avgActual": 1.7,
   "avgExpected": -3,
   "aId": "d65d24a6-1775-4233-bfe6-5ec7aa23f88f",
   "bId": "de04d961-7500-4b47-9e75-f882615afb19"
  },
  {
   "a": "Joan Rudderow",
   "b": "Ginger Evans",
   "team": "Ace & Eights",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2,
   "avgActual": 11.7,
   "avgExpected": 6.9,
   "aId": "dca2ce61-749b-421c-9205-0a16fc656a36",
   "bId": "f9ea65b5-8f59-4c04-89b0-69ca9429c325"
  },
  {
   "a": "Amy Neckes",
   "b": "Greg Taylor",
   "team": "Ace & Eights",
   "n": 9,
   "w": 7,
   "l": 2,
   "synergy": 1.9,
   "avgActual": 2.6,
   "avgExpected": -0.2,
   "aId": "5691a68e-0367-4af2-b318-4e927e00d4d6",
   "bId": "701f7029-4353-4548-b8db-b7ac7ed3d847"
  },
  {
   "a": "Linda Goss",
   "b": "Jamie West",
   "team": "ACE ACE Baby",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.9,
   "avgActual": 3.2,
   "avgExpected": -0.3,
   "aId": "14e5edae-ff22-415b-8267-d46a2117ed8d",
   "bId": "715c1386-54e9-4169-bacb-e206a518f4c5"
  },
  {
   "a": "Pete Certo",
   "b": "Howard Cetel",
   "team": "Ace Rebels",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.9,
   "avgActual": 4.3,
   "avgExpected": 0.6,
   "aId": "3572118b-4e01-4e64-96a4-a7cc80869425",
   "bId": "bff308e5-13f7-4eec-9c98-9095255f062f"
  },
  {
   "a": "Rick Weiser",
   "b": "Marc Witte",
   "team": "Ace & Eights",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.8,
   "avgActual": 3.7,
   "avgExpected": -0.6,
   "aId": "0748d687-13e0-403d-95de-28c640adaf43",
   "bId": "846b9f43-2055-4f81-a134-bb64b8d636d0"
  },
  {
   "a": "Andrea Schwab",
   "b": "Barb Mulckhuyse",
   "team": "ACE ACE Baby",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.8,
   "avgActual": 2.5,
   "avgExpected": -1,
   "aId": "605d7726-f903-4606-ad3d-14964b9e2e1b",
   "bId": "b4b69268-6029-4071-84b1-45535a570f3a"
  },
  {
   "a": "Pete Dunn",
   "b": "Howard Cetel",
   "team": "Ace Rebels",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 1.7,
   "avgActual": 2.5,
   "avgExpected": -0.3,
   "aId": "8e45f538-d95a-4554-9ccf-443a06b5a89e",
   "bId": "bff308e5-13f7-4eec-9c98-9095255f062f"
  },
  {
   "a": "Colleen Babore",
   "b": "James Conroy",
   "team": "Ace Rebels",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 1.6,
   "avgActual": 8,
   "avgExpected": 5.1,
   "aId": "d98a87e6-75ed-4aa6-b535-23f3c73f2817",
   "bId": "e784764f-725c-4b08-a982-a35771b64254"
  },
  {
   "a": "Kelley Batejan",
   "b": "Lori Frank",
   "team": "Kitchen Commanders",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.6,
   "avgActual": 5,
   "avgExpected": 1.9,
   "aId": "5d124581-6317-4648-8c11-2fa9235da2c3",
   "bId": "8e51fde0-5ddd-4e6e-b2f6-49cf79cb8030"
  },
  {
   "a": "Colette Mcgarrity",
   "b": "Andrea Galanti",
   "team": "ACE ACE Baby",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.6,
   "avgActual": 5,
   "avgExpected": 1.2,
   "aId": "8778e4e6-6736-4f1c-add3-123b68513cc6",
   "bId": "cd5e243a-d109-4637-8372-9330696a943d"
  },
  {
   "a": "Anthony Strazzeri",
   "b": "Hanna Cutler",
   "team": "Ace Bandits",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 4.3,
   "avgExpected": 1.8,
   "aId": "2e9710c7-96c5-4bf8-a304-7d7b1968eb90",
   "bId": "af5e2e89-3606-4d7e-8c5a-b397ff786303"
  },
  {
   "a": "Amy Neckes",
   "b": "Brad Feldman",
   "team": "Ace & Eights",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 3.7,
   "avgExpected": 0.5,
   "aId": "5691a68e-0367-4af2-b318-4e927e00d4d6",
   "bId": "e083314c-48dc-440e-8d42-ecf474296e38"
  },
  {
   "a": "Liezel Thompson",
   "b": "Marvell Whitley",
   "team": "Ace Rebels",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 1.8,
   "avgExpected": -1,
   "aId": "7cc58742-bc83-4108-8a47-dffffc5cfced",
   "bId": "af790542-53d7-4390-a074-40c743a9be0c"
  },
  {
   "a": "Sheryl Axelrod",
   "b": "Dan Matthews",
   "team": "Kitchen Commanders",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 3,
   "avgExpected": 0.5,
   "aId": "6f9e0a16-373f-4c8e-8e9f-31a4696b1a96",
   "bId": "db35c570-ffa9-423e-9a3b-8e218fb3f2ec"
  },
  {
   "a": "Dennis Higman",
   "b": "Bill Mcgrory",
   "team": "Ace & Eights",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 10,
   "avgExpected": 6.8,
   "aId": "b8fabebb-fd0f-49a8-929a-defbac098e43",
   "bId": "d1958142-fabc-4f26-8afc-2b9947c27f1b"
  },
  {
   "a": "Marjean Stokes",
   "b": "Patrick Caponegro",
   "team": "Ace & Eights",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.3,
   "avgActual": 0.5,
   "avgExpected": -2.1,
   "aId": "b25b5bf6-a97b-48b9-8b72-5979e2c854ba",
   "bId": "eeb074a7-66de-4302-8ffb-e0ad267026d7"
  },
  {
   "a": "Dana Sheply",
   "b": "Hanna Cutler",
   "team": "Ace Bandits",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.3,
   "avgActual": 2.8,
   "avgExpected": 0.1,
   "aId": "28f35cb8-46a7-4338-9bdc-68f7bd6ca009",
   "bId": "af5e2e89-3606-4d7e-8c5a-b397ff786303"
  },
  {
   "a": "Aaron Chan",
   "b": "Kelley Batejan",
   "team": "Kitchen Commanders",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.3,
   "avgActual": 6.3,
   "avgExpected": 3.7,
   "aId": "57666861-23d0-4809-9556-b646579f2fd6",
   "bId": "5d124581-6317-4648-8c11-2fa9235da2c3"
  },
  {
   "a": "Jason Fingerman",
   "b": "Angeli Dungca",
   "team": "Kitchen Commanders",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 2.5,
   "avgExpected": -0.1,
   "aId": "c0b3d7fb-5792-4ff4-a83e-47db88ea0592",
   "bId": "d2e70e9d-9791-40f9-bde4-2866dacc9ac0"
  },
  {
   "a": "W Michael Kappeler",
   "b": "Tim Haresign",
   "team": "Ace Rebels",
   "n": 8,
   "w": 7,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 2.5,
   "avgExpected": 0.7,
   "aId": "67b7c17e-8fce-437a-9230-cb46f0f8a76f",
   "bId": "ca80ecb3-183e-4c23-aa3d-1f680335268d"
  },
  {
   "a": "Jenn Allen",
   "b": "Lisa Pinder",
   "team": "Ace Bandits",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 3.3,
   "avgExpected": 0.9,
   "aId": "1741b412-8d86-480b-a9f3-88447159088a",
   "bId": "7c49b9f3-7f46-4e68-8786-4fe39fdd8f2b"
  },
  {
   "a": "Tinglan Zhao",
   "b": "Ginger Evans",
   "team": "Ace & Eights",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 5.6,
   "avgExpected": 3.4,
   "aId": "5f2e3f29-7b61-4d23-ba5a-23bfe5eac362",
   "bId": "f9ea65b5-8f59-4c04-89b0-69ca9429c325"
  },
  {
   "a": "Amy Neckes",
   "b": "Joan Rudderow",
   "team": "Ace & Eights",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 5.5,
   "avgExpected": 3.6,
   "aId": "5691a68e-0367-4af2-b318-4e927e00d4d6",
   "bId": "dca2ce61-749b-421c-9205-0a16fc656a36"
  },
  {
   "a": "Greg Taylor",
   "b": "Bill Mcgrory",
   "team": "Ace & Eights",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 1,
   "avgExpected": -1.7,
   "aId": "701f7029-4353-4548-b8db-b7ac7ed3d847",
   "bId": "d1958142-fabc-4f26-8afc-2b9947c27f1b"
  },
  {
   "a": "Grace Chung",
   "b": "Jamie West",
   "team": "ACE ACE Baby",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 2.7,
   "avgExpected": -0.2,
   "aId": "6e476240-4e0c-46ca-94b1-f2ec4e214835",
   "bId": "715c1386-54e9-4169-bacb-e206a518f4c5"
  },
  {
   "a": "Jamie West",
   "b": "Andrea Galanti",
   "team": "ACE ACE Baby",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 1.2,
   "avgActual": 3.9,
   "avgExpected": 2.1,
   "aId": "715c1386-54e9-4169-bacb-e206a518f4c5",
   "bId": "cd5e243a-d109-4637-8372-9330696a943d"
  },
  {
   "a": "Mustafa Kodwavi",
   "b": "Steve Traum",
   "team": "ACE ACE Baby",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 2,
   "avgExpected": -0.7,
   "aId": "69c553be-566b-41f5-9398-2c0b4007b2b2",
   "bId": "8880a77b-f445-45f7-9b21-c1e237f1079f"
  },
  {
   "a": "Brittany Jacobs",
   "b": "Steven Heller",
   "team": "Kitchen Commanders",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": 1.2,
   "avgActual": 0.1,
   "avgExpected": -1.7,
   "aId": "15dcc305-70cf-4eb1-bde4-a50a30130f3a",
   "bId": "344856f5-8559-411b-8fe7-2b5405bb9db6"
  },
  {
   "a": "Brittany Jacobs",
   "b": "Lori Frank",
   "team": "Kitchen Commanders",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.1,
   "avgActual": -1,
   "avgExpected": -3.5,
   "aId": "15dcc305-70cf-4eb1-bde4-a50a30130f3a",
   "bId": "8e51fde0-5ddd-4e6e-b2f6-49cf79cb8030"
  },
  {
   "a": "Tinglan Zhao",
   "b": "Brad Feldman",
   "team": "Ace & Eights",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.1,
   "avgActual": 4.5,
   "avgExpected": 2.3,
   "aId": "5f2e3f29-7b61-4d23-ba5a-23bfe5eac362",
   "bId": "e083314c-48dc-440e-8d42-ecf474296e38"
  },
  {
   "a": "Andrea Schwab",
   "b": "Lawrence Padersky",
   "team": "ACE ACE Baby",
   "n": 10,
   "w": 7,
   "l": 3,
   "synergy": 1.1,
   "avgActual": 3.6,
   "avgExpected": 2.1,
   "aId": "605d7726-f903-4606-ad3d-14964b9e2e1b",
   "bId": "cff9ebd3-d67b-4a59-966f-a31b6208a155"
  },
  {
   "a": "Anthony Strazzeri",
   "b": "Lisa Pinder",
   "team": "Ace Bandits",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 1,
   "avgActual": 3.6,
   "avgExpected": 1.8,
   "aId": "2e9710c7-96c5-4bf8-a304-7d7b1968eb90",
   "bId": "7c49b9f3-7f46-4e68-8786-4fe39fdd8f2b"
  },
  {
   "a": "Dana Sheply",
   "b": "Troy Sackawitch",
   "team": "Ace Bandits",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1,
   "avgActual": 4.6,
   "avgExpected": 2.8,
   "aId": "28f35cb8-46a7-4338-9bdc-68f7bd6ca009",
   "bId": "3b95d119-6f9a-4013-b07f-74e03823c1d1"
  },
  {
   "a": "Bill Mcgrory",
   "b": "Joan Rudderow",
   "team": "Ace & Eights",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1,
   "avgActual": 4.3,
   "avgExpected": 2.3,
   "aId": "d1958142-fabc-4f26-8afc-2b9947c27f1b",
   "bId": "dca2ce61-749b-421c-9205-0a16fc656a36"
  },
  {
   "a": "Lisa Pinder",
   "b": "Rebecca Mcginnis",
   "team": "Ace Bandits",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 2.4,
   "avgExpected": 1,
   "aId": "7c49b9f3-7f46-4e68-8786-4fe39fdd8f2b",
   "bId": "e292105e-2554-4a80-accc-6b28514a8ec1"
  },
  {
   "a": "Linda Goss",
   "b": "Andrea Schwab",
   "team": "ACE ACE Baby",
   "n": 6,
   "w": 6,
   "l": 0,
   "synergy": 0.8,
   "avgActual": 7,
   "avgExpected": 5.7,
   "aId": "14e5edae-ff22-415b-8267-d46a2117ed8d",
   "bId": "605d7726-f903-4606-ad3d-14964b9e2e1b"
  },
  {
   "a": "Hae Youn Reichenberg",
   "b": "Laura Masi",
   "team": "Ace Rebels",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 2.3,
   "avgExpected": 0.4,
   "aId": "73373b91-d52c-4630-9fc7-736410c0a4b3",
   "bId": "d65d24a6-1775-4233-bfe6-5ec7aa23f88f"
  },
  {
   "a": "Steven Heller",
   "b": "Joseph Villani",
   "team": "Kitchen Commanders",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 2.3,
   "avgExpected": 0.5,
   "aId": "344856f5-8559-411b-8fe7-2b5405bb9db6",
   "bId": "3d35be48-4648-4320-aec5-3eb571502945"
  },
  {
   "a": "Richard Gold",
   "b": "Danielle Simpson",
   "team": "Ace Bandits",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.7,
   "avgActual": -1.5,
   "avgExpected": -2.9,
   "aId": "27b2b26d-c3f5-49cb-9dcb-32f9a2cf79ad",
   "bId": "3373e556-3a34-411c-abb7-7f39c2f29e13"
  },
  {
   "a": "Brittany Jacobs",
   "b": "Salvatore Caminito",
   "team": "Kitchen Commanders",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.7,
   "avgActual": 1,
   "avgExpected": -0.7,
   "aId": "15dcc305-70cf-4eb1-bde4-a50a30130f3a",
   "bId": "b7af774b-4c46-4429-8177-2b5455d8744f"
  },
  {
   "a": "Dana Sheply",
   "b": "Auguste Turnier",
   "team": "Ace Bandits",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.7,
   "avgActual": 1,
   "avgExpected": -0.2,
   "aId": "28f35cb8-46a7-4338-9bdc-68f7bd6ca009",
   "bId": "65b75e72-ecf8-42ee-8071-c6b58ad2738f"
  },
  {
   "a": "Pete Certo",
   "b": "Pete Dunn",
   "team": "Ace Rebels",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 0.7,
   "avgActual": -3.2,
   "avgExpected": -4.7,
   "aId": "3572118b-4e01-4e64-96a4-a7cc80869425",
   "bId": "8e45f538-d95a-4554-9ccf-443a06b5a89e"
  },
  {
   "a": "Dana Sheply",
   "b": "Danielle Simpson",
   "team": "Ace Bandits",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.6,
   "avgActual": -0.2,
   "avgExpected": -1.5,
   "aId": "28f35cb8-46a7-4338-9bdc-68f7bd6ca009",
   "bId": "3373e556-3a34-411c-abb7-7f39c2f29e13"
  },
  {
   "a": "Dawn Kempton",
   "b": "Dan Matthews",
   "team": "Kitchen Commanders",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 2.5,
   "avgExpected": 1.3,
   "aId": "ab3e99ac-cdcb-4ade-821c-f8e422c09170",
   "bId": "db35c570-ffa9-423e-9a3b-8e218fb3f2ec"
  },
  {
   "a": "Troy Sackawitch",
   "b": "Lolita Hagen",
   "team": "Ace Bandits",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 3.8,
   "avgExpected": 2.6,
   "aId": "3b95d119-6f9a-4013-b07f-74e03823c1d1",
   "bId": "c4ac93eb-8c41-45e6-9ff3-026934b618b5"
  },
  {
   "a": "Ira Krassan",
   "b": "Rebecca Mcginnis",
   "team": "Ace Bandits",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.6,
   "avgActual": 7.7,
   "avgExpected": 6.2,
   "aId": "03de01b1-2236-46cf-a94d-6f98cb142ddd",
   "bId": "e292105e-2554-4a80-accc-6b28514a8ec1"
  },
  {
   "a": "Lisa Pinder",
   "b": "Hanna Cutler",
   "team": "Ace Bandits",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 4,
   "avgExpected": 2.6,
   "aId": "7c49b9f3-7f46-4e68-8786-4fe39fdd8f2b",
   "bId": "af5e2e89-3606-4d7e-8c5a-b397ff786303"
  },
  {
   "a": "Dennis Higman",
   "b": "Joan Rudderow",
   "team": "Ace & Eights",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 0.6,
   "avgActual": 6.8,
   "avgExpected": 5.7,
   "aId": "b8fabebb-fd0f-49a8-929a-defbac098e43",
   "bId": "dca2ce61-749b-421c-9205-0a16fc656a36"
  },
  {
   "a": "W Michael Kappeler",
   "b": "Liezel Thompson",
   "team": "Ace Rebels",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.5,
   "avgActual": -1.8,
   "avgExpected": -2.8,
   "aId": "67b7c17e-8fce-437a-9230-cb46f0f8a76f",
   "bId": "7cc58742-bc83-4108-8a47-dffffc5cfced"
  },
  {
   "a": "Steve Traum",
   "b": "Lawrence Padersky",
   "team": "ACE ACE Baby",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 2,
   "avgExpected": 1,
   "aId": "8880a77b-f445-45f7-9b21-c1e237f1079f",
   "bId": "cff9ebd3-d67b-4a59-966f-a31b6208a155"
  },
  {
   "a": "Danielle Simpson",
   "b": "Rob Byrnes",
   "team": "Ace Bandits",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.5,
   "avgActual": -3.3,
   "avgExpected": -4.6,
   "aId": "3373e556-3a34-411c-abb7-7f39c2f29e13",
   "bId": "65d3d6a5-c8ab-4841-bedd-321372bbb624"
  },
  {
   "a": "Andrew Ravitz",
   "b": "Matthew Tarshis",
   "team": "ACE ACE Baby",
   "n": 6,
   "w": 0,
   "l": 6,
   "synergy": 0.5,
   "avgActual": -7.3,
   "avgExpected": -8.1,
   "aId": "496b210d-4480-41e9-993e-06fad50d6ebf",
   "bId": "6ba8d9f3-5fd9-41f3-b64c-d9c141c005e0"
  },
  {
   "a": "Lawrence Padersky",
   "b": "Sam Tuzza",
   "team": "ACE ACE Baby",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": 0.5,
   "avgActual": 1.6,
   "avgExpected": 0.9,
   "aId": "cff9ebd3-d67b-4a59-966f-a31b6208a155",
   "bId": "e3a6df47-7687-4ab8-b001-7d63a8e5372a"
  },
  {
   "a": "Joseph Villani",
   "b": "Salvatore Caminito",
   "team": "Kitchen Commanders",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 1.5,
   "avgExpected": 0.4,
   "aId": "3d35be48-4648-4320-aec5-3eb571502945",
   "bId": "b7af774b-4c46-4429-8177-2b5455d8744f"
  },
  {
   "a": "Hae Youn Reichenberg",
   "b": "Colleen Babore",
   "team": "Ace Rebels",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.5,
   "avgActual": -0.2,
   "avgExpected": -1.2,
   "aId": "73373b91-d52c-4630-9fc7-736410c0a4b3",
   "bId": "d98a87e6-75ed-4aa6-b535-23f3c73f2817"
  },
  {
   "a": "Brittany Jacobs",
   "b": "Dan Matthews",
   "team": "Kitchen Commanders",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 1,
   "avgExpected": 0.3,
   "aId": "15dcc305-70cf-4eb1-bde4-a50a30130f3a",
   "bId": "db35c570-ffa9-423e-9a3b-8e218fb3f2ec"
  },
  {
   "a": "Greg Taylor",
   "b": "Marc Witte",
   "team": "Ace & Eights",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 1.6,
   "avgExpected": 0.8,
   "aId": "701f7029-4353-4548-b8db-b7ac7ed3d847",
   "bId": "846b9f43-2055-4f81-a134-bb64b8d636d0"
  },
  {
   "a": "Rick Weiser",
   "b": "Ginger Evans",
   "team": "Ace & Eights",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 5.6,
   "avgExpected": 4.9,
   "aId": "0748d687-13e0-403d-95de-28c640adaf43",
   "bId": "f9ea65b5-8f59-4c04-89b0-69ca9429c325"
  },
  {
   "a": "Sheryl Axelrod",
   "b": "Martyn Babitz",
   "team": "Kitchen Commanders",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 0.8,
   "avgExpected": 0,
   "aId": "6f9e0a16-373f-4c8e-8e9f-31a4696b1a96",
   "bId": "cf328b8f-9626-4bdf-8069-da6d0f8b17e9"
  },
  {
   "a": "W Michael Kappeler",
   "b": "Pete Dunn",
   "team": "Ace Rebels",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.4,
   "avgActual": -2.3,
   "avgExpected": -3.2,
   "aId": "67b7c17e-8fce-437a-9230-cb46f0f8a76f",
   "bId": "8e45f538-d95a-4554-9ccf-443a06b5a89e"
  },
  {
   "a": "Matthew Tarshis",
   "b": "Jamie West",
   "team": "ACE ACE Baby",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.4,
   "avgActual": -3,
   "avgExpected": -3.8,
   "aId": "6ba8d9f3-5fd9-41f3-b64c-d9c141c005e0",
   "bId": "715c1386-54e9-4169-bacb-e206a518f4c5"
  },
  {
   "a": "Pete Certo",
   "b": "James Conroy",
   "team": "Ace Rebels",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": 0.4,
   "avgActual": -1.4,
   "avgExpected": -2.1,
   "aId": "3572118b-4e01-4e64-96a4-a7cc80869425",
   "bId": "e784764f-725c-4b08-a982-a35771b64254"
  },
  {
   "a": "Dana Sheply",
   "b": "Rebecca Mcginnis",
   "team": "Ace Bandits",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 0.9,
   "avgExpected": 0.5,
   "aId": "28f35cb8-46a7-4338-9bdc-68f7bd6ca009",
   "bId": "e292105e-2554-4a80-accc-6b28514a8ec1"
  },
  {
   "a": "Brittany Jacobs",
   "b": "Kelley Batejan",
   "team": "Kitchen Commanders",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 3.3,
   "avgExpected": 2.9,
   "aId": "15dcc305-70cf-4eb1-bde4-a50a30130f3a",
   "bId": "5d124581-6317-4648-8c11-2fa9235da2c3"
  },
  {
   "a": "Anthony Strazzeri",
   "b": "Troy Sackawitch",
   "team": "Ace Bandits",
   "n": 9,
   "w": 9,
   "l": 0,
   "synergy": 0.3,
   "avgActual": 5.4,
   "avgExpected": 4.9,
   "aId": "2e9710c7-96c5-4bf8-a304-7d7b1968eb90",
   "bId": "3b95d119-6f9a-4013-b07f-74e03823c1d1"
  },
  {
   "a": "Jamie West",
   "b": "Steve Traum",
   "team": "ACE ACE Baby",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.3,
   "avgActual": -0.3,
   "avgExpected": -1,
   "aId": "715c1386-54e9-4169-bacb-e206a518f4c5",
   "bId": "8880a77b-f445-45f7-9b21-c1e237f1079f"
  },
  {
   "a": "Linda Goss",
   "b": "Colette Mcgarrity",
   "team": "ACE ACE Baby",
   "n": 9,
   "w": 6,
   "l": 3,
   "synergy": 0.3,
   "avgActual": 1.9,
   "avgExpected": 1.4,
   "aId": "14e5edae-ff22-415b-8267-d46a2117ed8d",
   "bId": "8778e4e6-6736-4f1c-add3-123b68513cc6"
  },
  {
   "a": "Hae Youn Reichenberg",
   "b": "James Conroy",
   "team": "Ace Rebels",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.3,
   "avgActual": 0,
   "avgExpected": -0.6,
   "aId": "73373b91-d52c-4630-9fc7-736410c0a4b3",
   "bId": "e784764f-725c-4b08-a982-a35771b64254"
  },
  {
   "a": "Kelley Batejan",
   "b": "Jason Fingerman",
   "team": "Kitchen Commanders",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 5.3,
   "avgExpected": 4.9,
   "aId": "5d124581-6317-4648-8c11-2fa9235da2c3",
   "bId": "c0b3d7fb-5792-4ff4-a83e-47db88ea0592"
  },
  {
   "a": "Ira Krassan",
   "b": "Dana Sheply",
   "team": "Ace Bandits",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 1.3,
   "avgExpected": 0.6,
   "aId": "03de01b1-2236-46cf-a94d-6f98cb142ddd",
   "bId": "28f35cb8-46a7-4338-9bdc-68f7bd6ca009"
  },
  {
   "a": "Joseph Villani",
   "b": "Martyn Babitz",
   "team": "Kitchen Commanders",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.3,
   "avgActual": 0,
   "avgExpected": -0.6,
   "aId": "3d35be48-4648-4320-aec5-3eb571502945",
   "bId": "cf328b8f-9626-4bdf-8069-da6d0f8b17e9"
  },
  {
   "a": "Amy Neckes",
   "b": "Bill Mcgrory",
   "team": "Ace & Eights",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 6,
   "avgExpected": 5.5,
   "aId": "5691a68e-0367-4af2-b318-4e927e00d4d6",
   "bId": "d1958142-fabc-4f26-8afc-2b9947c27f1b"
  },
  {
   "a": "Amy Neckes",
   "b": "Amy Clayman",
   "team": "Ace & Eights",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.3,
   "avgActual": 6.3,
   "avgExpected": 5.7,
   "aId": "5691a68e-0367-4af2-b318-4e927e00d4d6",
   "bId": "b827322d-e01b-4ca5-b8ae-680982fa8cd1"
  },
  {
   "a": "Gina Blahut",
   "b": "Dan Matthews",
   "team": "Kitchen Commanders",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": 0.2,
   "avgActual": -4,
   "avgExpected": -4.4,
   "aId": "8fb69116-2ad4-417c-ad3a-912a9b13782b",
   "bId": "db35c570-ffa9-423e-9a3b-8e218fb3f2ec"
  },
  {
   "a": "Mustafa Kodwavi",
   "b": "Barb Mulckhuyse",
   "team": "ACE ACE Baby",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.2,
   "avgActual": -4,
   "avgExpected": -4.4,
   "aId": "69c553be-566b-41f5-9398-2c0b4007b2b2",
   "bId": "b4b69268-6029-4071-84b1-45535a570f3a"
  },
  {
   "a": "Andrea Galanti",
   "b": "Sam Tuzza",
   "team": "ACE ACE Baby",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 3.5,
   "avgExpected": 3,
   "aId": "cd5e243a-d109-4637-8372-9330696a943d",
   "bId": "e3a6df47-7687-4ab8-b001-7d63a8e5372a"
  },
  {
   "a": "Anthony Strazzeri",
   "b": "Rebecca Mcginnis",
   "team": "Ace Bandits",
   "n": 9,
   "w": 7,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 2.3,
   "avgExpected": 2.1,
   "aId": "2e9710c7-96c5-4bf8-a304-7d7b1968eb90",
   "bId": "e292105e-2554-4a80-accc-6b28514a8ec1"
  },
  {
   "a": "Dawn Gordon",
   "b": "Pete Dunn",
   "team": "Ace Rebels",
   "n": 9,
   "w": 3,
   "l": 6,
   "synergy": 0.1,
   "avgActual": -2.3,
   "avgExpected": -2.5,
   "aId": "756e256e-ea2f-4e25-9c6a-e780860d048f",
   "bId": "8e45f538-d95a-4554-9ccf-443a06b5a89e"
  },
  {
   "a": "Bill Mcgrory",
   "b": "Ginger Evans",
   "team": "Ace & Eights",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.1,
   "avgActual": 5,
   "avgExpected": 4.8,
   "aId": "d1958142-fabc-4f26-8afc-2b9947c27f1b",
   "bId": "f9ea65b5-8f59-4c04-89b0-69ca9429c325"
  },
  {
   "a": "Liezel Thompson",
   "b": "James Conroy",
   "team": "Ace Rebels",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 3,
   "avgExpected": 2.8,
   "aId": "7cc58742-bc83-4108-8a47-dffffc5cfced",
   "bId": "e784764f-725c-4b08-a982-a35771b64254"
  },
  {
   "a": "Danielle Simpson",
   "b": "Hanna Cutler",
   "team": "Ace Bandits",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": 0.1,
   "avgActual": -2.1,
   "avgExpected": -2.2,
   "aId": "3373e556-3a34-411c-abb7-7f39c2f29e13",
   "bId": "af5e2e89-3606-4d7e-8c5a-b397ff786303"
  },
  {
   "a": "Auguste Turnier",
   "b": "Hanna Cutler",
   "team": "Ace Bandits",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 0.3,
   "avgExpected": 0.2,
   "aId": "65b75e72-ecf8-42ee-8071-c6b58ad2738f",
   "bId": "af5e2e89-3606-4d7e-8c5a-b397ff786303"
  },
  {
   "a": "Barb Mulckhuyse",
   "b": "Sam Tuzza",
   "team": "ACE ACE Baby",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.1,
   "avgActual": -1.7,
   "avgExpected": -1.8,
   "aId": "b4b69268-6029-4071-84b1-45535a570f3a",
   "bId": "e3a6df47-7687-4ab8-b001-7d63a8e5372a"
  },
  {
   "a": "Hae Youn Reichenberg",
   "b": "Marvell Whitley",
   "team": "Ace Rebels",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 0.3,
   "avgExpected": 0.2,
   "aId": "73373b91-d52c-4630-9fc7-736410c0a4b3",
   "bId": "af790542-53d7-4390-a074-40c743a9be0c"
  },
  {
   "a": "Mustafa Kodwavi",
   "b": "Lawrence Padersky",
   "team": "ACE ACE Baby",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 0.1,
   "avgActual": -6.5,
   "avgExpected": -6.8,
   "aId": "69c553be-566b-41f5-9398-2c0b4007b2b2",
   "bId": "cff9ebd3-d67b-4a59-966f-a31b6208a155"
  },
  {
   "a": "Jenn Allen",
   "b": "Rob Byrnes",
   "team": "Ace Bandits",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0,
   "avgActual": -3,
   "avgExpected": -3,
   "aId": "1741b412-8d86-480b-a9f3-88447159088a",
   "bId": "65d3d6a5-c8ab-4841-bedd-321372bbb624"
  },
  {
   "a": "Lori Frank",
   "b": "Dawn Kempton",
   "team": "Kitchen Commanders",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0,
   "avgActual": -2.3,
   "avgExpected": -2.2,
   "aId": "8e51fde0-5ddd-4e6e-b2f6-49cf79cb8030",
   "bId": "ab3e99ac-cdcb-4ade-821c-f8e422c09170"
  },
  {
   "a": "Matthew Tarshis",
   "b": "Colette Mcgarrity",
   "team": "ACE ACE Baby",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": 0,
   "avgActual": -3,
   "avgExpected": -3,
   "aId": "6ba8d9f3-5fd9-41f3-b64c-d9c141c005e0",
   "bId": "8778e4e6-6736-4f1c-add3-123b68513cc6"
  },
  {
   "a": "Barb Mulckhuyse",
   "b": "Andrea Galanti",
   "team": "ACE ACE Baby",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0,
   "avgActual": 2,
   "avgExpected": 1.9,
   "aId": "b4b69268-6029-4071-84b1-45535a570f3a",
   "bId": "cd5e243a-d109-4637-8372-9330696a943d"
  },
  {
   "a": "Steven Heller",
   "b": "Lori Frank",
   "team": "Kitchen Commanders",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0,
   "avgActual": -2.4,
   "avgExpected": -2.4,
   "aId": "344856f5-8559-411b-8fe7-2b5405bb9db6",
   "bId": "8e51fde0-5ddd-4e6e-b2f6-49cf79cb8030"
  },
  {
   "a": "Rob Byrnes",
   "b": "Lisa Pinder",
   "team": "Ace Bandits",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -0.1,
   "avgActual": -0.6,
   "avgExpected": -0.5,
   "aId": "65d3d6a5-c8ab-4841-bedd-321372bbb624",
   "bId": "7c49b9f3-7f46-4e68-8786-4fe39fdd8f2b"
  },
  {
   "a": "Dawn Gordon",
   "b": "Colleen Babore",
   "team": "Ace Rebels",
   "n": 13,
   "w": 5,
   "l": 8,
   "synergy": -0.1,
   "avgActual": -1.3,
   "avgExpected": -1.2,
   "aId": "756e256e-ea2f-4e25-9c6a-e780860d048f",
   "bId": "d98a87e6-75ed-4aa6-b535-23f3c73f2817"
  },
  {
   "a": "Rick Weiser",
   "b": "Bill Mcgrory",
   "team": "Ace & Eights",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.1,
   "avgActual": -1,
   "avgExpected": -0.8,
   "aId": "0748d687-13e0-403d-95de-28c640adaf43",
   "bId": "d1958142-fabc-4f26-8afc-2b9947c27f1b"
  },
  {
   "a": "Mustafa Kodwavi",
   "b": "Colette Mcgarrity",
   "team": "ACE ACE Baby",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.1,
   "avgActual": -1.8,
   "avgExpected": -1.6,
   "aId": "69c553be-566b-41f5-9398-2c0b4007b2b2",
   "bId": "8778e4e6-6736-4f1c-add3-123b68513cc6"
  },
  {
   "a": "Pete Dunn",
   "b": "Colleen Babore",
   "team": "Ace Rebels",
   "n": 9,
   "w": 3,
   "l": 6,
   "synergy": -0.1,
   "avgActual": -2.6,
   "avgExpected": -2.4,
   "aId": "8e45f538-d95a-4554-9ccf-443a06b5a89e",
   "bId": "d98a87e6-75ed-4aa6-b535-23f3c73f2817"
  },
  {
   "a": "Linda Goss",
   "b": "Steve Traum",
   "team": "ACE ACE Baby",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 1.8,
   "avgExpected": 2,
   "aId": "14e5edae-ff22-415b-8267-d46a2117ed8d",
   "bId": "8880a77b-f445-45f7-9b21-c1e237f1079f"
  },
  {
   "a": "Danielle Simpson",
   "b": "Lisa Pinder",
   "team": "Ace Bandits",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 1,
   "avgExpected": 1.3,
   "aId": "3373e556-3a34-411c-abb7-7f39c2f29e13",
   "bId": "7c49b9f3-7f46-4e68-8786-4fe39fdd8f2b"
  },
  {
   "a": "Marc Witte",
   "b": "Dennis Higman",
   "team": "Ace & Eights",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": -0.1,
   "avgActual": 6.3,
   "avgExpected": 6.4,
   "aId": "846b9f43-2055-4f81-a134-bb64b8d636d0",
   "bId": "b8fabebb-fd0f-49a8-929a-defbac098e43"
  },
  {
   "a": "Laura Masi",
   "b": "James Conroy",
   "team": "Ace Rebels",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.2,
   "avgActual": -1.7,
   "avgExpected": -1.3,
   "aId": "d65d24a6-1775-4233-bfe6-5ec7aa23f88f",
   "bId": "e784764f-725c-4b08-a982-a35771b64254"
  },
  {
   "a": "Amy Neckes",
   "b": "Marc Witte",
   "team": "Ace & Eights",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.2,
   "avgActual": 0,
   "avgExpected": 0.6,
   "aId": "5691a68e-0367-4af2-b318-4e927e00d4d6",
   "bId": "846b9f43-2055-4f81-a134-bb64b8d636d0"
  },
  {
   "a": "Hanna Cutler",
   "b": "Rebecca Mcginnis",
   "team": "Ace Bandits",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.2,
   "avgActual": 2.3,
   "avgExpected": 2.7,
   "aId": "af5e2e89-3606-4d7e-8c5a-b397ff786303",
   "bId": "e292105e-2554-4a80-accc-6b28514a8ec1"
  },
  {
   "a": "Greg Taylor",
   "b": "Brad Feldman",
   "team": "Ace & Eights",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.2,
   "avgActual": -2.7,
   "avgExpected": -2.1,
   "aId": "701f7029-4353-4548-b8db-b7ac7ed3d847",
   "bId": "e083314c-48dc-440e-8d42-ecf474296e38"
  },
  {
   "a": "Brad Feldman",
   "b": "Ginger Evans",
   "team": "Ace & Eights",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 4.2,
   "avgExpected": 4.6,
   "aId": "e083314c-48dc-440e-8d42-ecf474296e38",
   "bId": "f9ea65b5-8f59-4c04-89b0-69ca9429c325"
  },
  {
   "a": "Matthew Tarshis",
   "b": "Andrea Galanti",
   "team": "ACE ACE Baby",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.2,
   "avgActual": -0.7,
   "avgExpected": -0.2,
   "aId": "6ba8d9f3-5fd9-41f3-b64c-d9c141c005e0",
   "bId": "cd5e243a-d109-4637-8372-9330696a943d"
  },
  {
   "a": "Pete Certo",
   "b": "Colleen Babore",
   "team": "Ace Rebels",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.2,
   "avgActual": -3.4,
   "avgExpected": -3,
   "aId": "3572118b-4e01-4e64-96a4-a7cc80869425",
   "bId": "d98a87e6-75ed-4aa6-b535-23f3c73f2817"
  },
  {
   "a": "Ira Krassan",
   "b": "Lisa Pinder",
   "team": "Ace Bandits",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 3.8,
   "avgExpected": 4.2,
   "aId": "03de01b1-2236-46cf-a94d-6f98cb142ddd",
   "bId": "7c49b9f3-7f46-4e68-8786-4fe39fdd8f2b"
  },
  {
   "a": "Dawn Gordon",
   "b": "Howard Cetel",
   "team": "Ace Rebels",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": -0.3,
   "avgActual": 0.7,
   "avgExpected": 1.3,
   "aId": "756e256e-ea2f-4e25-9c6a-e780860d048f",
   "bId": "bff308e5-13f7-4eec-9c98-9095255f062f"
  },
  {
   "a": "Richard Gold",
   "b": "Auguste Turnier",
   "team": "Ace Bandits",
   "n": 8,
   "w": 2,
   "l": 6,
   "synergy": -0.3,
   "avgActual": -3.7,
   "avgExpected": -3.2,
   "aId": "27b2b26d-c3f5-49cb-9dcb-32f9a2cf79ad",
   "bId": "65b75e72-ecf8-42ee-8071-c6b58ad2738f"
  },
  {
   "a": "Jenn Allen",
   "b": "Danielle Simpson",
   "team": "Ace Bandits",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -3,
   "avgExpected": -2.5,
   "aId": "1741b412-8d86-480b-a9f3-88447159088a",
   "bId": "3373e556-3a34-411c-abb7-7f39c2f29e13"
  },
  {
   "a": "Mustafa Kodwavi",
   "b": "Matthew Tarshis",
   "team": "ACE ACE Baby",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.3,
   "avgActual": -2.8,
   "avgExpected": -2.3,
   "aId": "69c553be-566b-41f5-9398-2c0b4007b2b2",
   "bId": "6ba8d9f3-5fd9-41f3-b64c-d9c141c005e0"
  },
  {
   "a": "Marjean Stokes",
   "b": "Bill Mcgrory",
   "team": "Ace & Eights",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -0.5,
   "avgExpected": 0,
   "aId": "b25b5bf6-a97b-48b9-8b72-5979e2c854ba",
   "bId": "d1958142-fabc-4f26-8afc-2b9947c27f1b"
  },
  {
   "a": "Matthew Tarshis",
   "b": "Barb Mulckhuyse",
   "team": "ACE ACE Baby",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.3,
   "avgActual": -2.3,
   "avgExpected": -1.5,
   "aId": "6ba8d9f3-5fd9-41f3-b64c-d9c141c005e0",
   "bId": "b4b69268-6029-4071-84b1-45535a570f3a"
  },
  {
   "a": "Steven Heller",
   "b": "Jason Fingerman",
   "team": "Kitchen Commanders",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": -0.3,
   "avgActual": 2.6,
   "avgExpected": 3.1,
   "aId": "344856f5-8559-411b-8fe7-2b5405bb9db6",
   "bId": "c0b3d7fb-5792-4ff4-a83e-47db88ea0592"
  },
  {
   "a": "Kelley Batejan",
   "b": "Angeli Dungca",
   "team": "Kitchen Commanders",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.3,
   "avgActual": 0.3,
   "avgExpected": 0.8,
   "aId": "5d124581-6317-4648-8c11-2fa9235da2c3",
   "bId": "d2e70e9d-9791-40f9-bde4-2866dacc9ac0"
  },
  {
   "a": "Howard Cetel",
   "b": "Tim Haresign",
   "team": "Ace Rebels",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.3,
   "avgActual": -0.5,
   "avgExpected": 0.1,
   "aId": "bff308e5-13f7-4eec-9c98-9095255f062f",
   "bId": "ca80ecb3-183e-4c23-aa3d-1f680335268d"
  },
  {
   "a": "Howard Cetel",
   "b": "Illyce Katz",
   "team": "Ace Rebels",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -2.8,
   "avgExpected": -2,
   "aId": "bff308e5-13f7-4eec-9c98-9095255f062f",
   "bId": "de04d961-7500-4b47-9e75-f882615afb19"
  },
  {
   "a": "Rick Weiser",
   "b": "Marjean Stokes",
   "team": "Ace & Eights",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -4.2,
   "avgExpected": -3.5,
   "aId": "0748d687-13e0-403d-95de-28c640adaf43",
   "bId": "b25b5bf6-a97b-48b9-8b72-5979e2c854ba"
  },
  {
   "a": "W Michael Kappeler",
   "b": "James Conroy",
   "team": "Ace Rebels",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.4,
   "avgActual": 1.3,
   "avgExpected": 2.1,
   "aId": "67b7c17e-8fce-437a-9230-cb46f0f8a76f",
   "bId": "e784764f-725c-4b08-a982-a35771b64254"
  },
  {
   "a": "Marvell Whitley",
   "b": "Tim Haresign",
   "team": "Ace Rebels",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.4,
   "avgActual": -1.7,
   "avgExpected": -0.6,
   "aId": "af790542-53d7-4390-a074-40c743a9be0c",
   "bId": "ca80ecb3-183e-4c23-aa3d-1f680335268d"
  },
  {
   "a": "Richard Gold",
   "b": "Hanna Cutler",
   "team": "Ace Bandits",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.4,
   "avgActual": -3,
   "avgExpected": -2.3,
   "aId": "27b2b26d-c3f5-49cb-9dcb-32f9a2cf79ad",
   "bId": "af5e2e89-3606-4d7e-8c5a-b397ff786303"
  },
  {
   "a": "Pete Certo",
   "b": "Illyce Katz",
   "team": "Ace Rebels",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.4,
   "avgActual": -7.7,
   "avgExpected": -6.9,
   "aId": "3572118b-4e01-4e64-96a4-a7cc80869425",
   "bId": "de04d961-7500-4b47-9e75-f882615afb19"
  },
  {
   "a": "Danielle Simpson",
   "b": "Auguste Turnier",
   "team": "Ace Bandits",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.4,
   "avgActual": -2.5,
   "avgExpected": -1.8,
   "aId": "3373e556-3a34-411c-abb7-7f39c2f29e13",
   "bId": "65b75e72-ecf8-42ee-8071-c6b58ad2738f"
  },
  {
   "a": "W Michael Kappeler",
   "b": "Laura Masi",
   "team": "Ace Rebels",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -0.2,
   "avgExpected": 0.6,
   "aId": "67b7c17e-8fce-437a-9230-cb46f0f8a76f",
   "bId": "d65d24a6-1775-4233-bfe6-5ec7aa23f88f"
  },
  {
   "a": "Rick Weiser",
   "b": "Kathleen Rimdzius",
   "team": "Ace & Eights",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -10.7,
   "avgExpected": -9.6,
   "aId": "0748d687-13e0-403d-95de-28c640adaf43",
   "bId": "4a71824b-a493-4861-8036-3633883f6eab"
  },
  {
   "a": "Rick Weiser",
   "b": "Patrick Caponegro",
   "team": "Ace & Eights",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -2,
   "avgExpected": -1,
   "aId": "0748d687-13e0-403d-95de-28c640adaf43",
   "bId": "eeb074a7-66de-4302-8ffb-e0ad267026d7"
  },
  {
   "a": "Marc Witte",
   "b": "Brad Feldman",
   "team": "Ace & Eights",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": -0.5,
   "avgActual": 1.1,
   "avgExpected": 1.9,
   "aId": "846b9f43-2055-4f81-a134-bb64b8d636d0",
   "bId": "e083314c-48dc-440e-8d42-ecf474296e38"
  },
  {
   "a": "Andrea Schwab",
   "b": "Jamie West",
   "team": "ACE ACE Baby",
   "n": 9,
   "w": 7,
   "l": 2,
   "synergy": -0.5,
   "avgActual": 1.9,
   "avgExpected": 2.7,
   "aId": "605d7726-f903-4606-ad3d-14964b9e2e1b",
   "bId": "715c1386-54e9-4169-bacb-e206a518f4c5"
  },
  {
   "a": "Linda Goss",
   "b": "Andrea Galanti",
   "team": "ACE ACE Baby",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.5,
   "avgActual": 2,
   "avgExpected": 3,
   "aId": "14e5edae-ff22-415b-8267-d46a2117ed8d",
   "bId": "cd5e243a-d109-4637-8372-9330696a943d"
  },
  {
   "a": "Steven Heller",
   "b": "Kelley Batejan",
   "team": "Kitchen Commanders",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.5,
   "avgActual": 1,
   "avgExpected": 1.8,
   "aId": "344856f5-8559-411b-8fe7-2b5405bb9db6",
   "bId": "5d124581-6317-4648-8c11-2fa9235da2c3"
  },
  {
   "a": "Brittany Jacobs",
   "b": "Aaron Chan",
   "team": "Kitchen Commanders",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -1.7,
   "avgExpected": -0.5,
   "aId": "15dcc305-70cf-4eb1-bde4-a50a30130f3a",
   "bId": "57666861-23d0-4809-9556-b646579f2fd6"
  },
  {
   "a": "Greg Taylor",
   "b": "Dennis Higman",
   "team": "Ace & Eights",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -1,
   "avgExpected": 0,
   "aId": "701f7029-4353-4548-b8db-b7ac7ed3d847",
   "bId": "b8fabebb-fd0f-49a8-929a-defbac098e43"
  },
  {
   "a": "Allison Taylor",
   "b": "Joseph Villani",
   "team": "Kitchen Commanders",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -8.3,
   "avgExpected": -7.2,
   "aId": "12648cf6-0364-460c-a275-66131bd39657",
   "bId": "3d35be48-4648-4320-aec5-3eb571502945"
  },
  {
   "a": "Liezel Thompson",
   "b": "Tim Haresign",
   "team": "Ace Rebels",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -5,
   "avgExpected": -3.6,
   "aId": "7cc58742-bc83-4108-8a47-dffffc5cfced",
   "bId": "ca80ecb3-183e-4c23-aa3d-1f680335268d"
  },
  {
   "a": "Anthony Strazzeri",
   "b": "Auguste Turnier",
   "team": "Ace Bandits",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -2.2,
   "avgExpected": -1.2,
   "aId": "2e9710c7-96c5-4bf8-a304-7d7b1968eb90",
   "bId": "65b75e72-ecf8-42ee-8071-c6b58ad2738f"
  },
  {
   "a": "Jenn Allen",
   "b": "Auguste Turnier",
   "team": "Ace Bandits",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -2.7,
   "avgExpected": -1.3,
   "aId": "1741b412-8d86-480b-a9f3-88447159088a",
   "bId": "65b75e72-ecf8-42ee-8071-c6b58ad2738f"
  },
  {
   "a": "Joseph Villani",
   "b": "Dan Matthews",
   "team": "Kitchen Commanders",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -2,
   "avgExpected": -1,
   "aId": "3d35be48-4648-4320-aec5-3eb571502945",
   "bId": "db35c570-ffa9-423e-9a3b-8e218fb3f2ec"
  },
  {
   "a": "Brittany Jacobs",
   "b": "Gina Blahut",
   "team": "Kitchen Commanders",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.6,
   "avgActual": -4,
   "avgExpected": -2.9,
   "aId": "15dcc305-70cf-4eb1-bde4-a50a30130f3a",
   "bId": "8fb69116-2ad4-417c-ad3a-912a9b13782b"
  },
  {
   "a": "Rick Weiser",
   "b": "Amy Neckes",
   "team": "Ace & Eights",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -1.7,
   "avgExpected": -0.2,
   "aId": "0748d687-13e0-403d-95de-28c640adaf43",
   "bId": "5691a68e-0367-4af2-b318-4e927e00d4d6"
  },
  {
   "a": "Amy Neckes",
   "b": "Tinglan Zhao",
   "team": "Ace & Eights",
   "n": 9,
   "w": 3,
   "l": 6,
   "synergy": -0.7,
   "avgActual": 0.4,
   "avgExpected": 1.4,
   "aId": "5691a68e-0367-4af2-b318-4e927e00d4d6",
   "bId": "5f2e3f29-7b61-4d23-ba5a-23bfe5eac362"
  },
  {
   "a": "Lori Frank",
   "b": "Dan Matthews",
   "team": "Kitchen Commanders",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.7,
   "avgActual": -3.8,
   "avgExpected": -2.5,
   "aId": "8e51fde0-5ddd-4e6e-b2f6-49cf79cb8030",
   "bId": "db35c570-ffa9-423e-9a3b-8e218fb3f2ec"
  },
  {
   "a": "Sheryl Axelrod",
   "b": "Gina Blahut",
   "team": "Kitchen Commanders",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -4.7,
   "avgExpected": -3.1,
   "aId": "6f9e0a16-373f-4c8e-8e9f-31a4696b1a96",
   "bId": "8fb69116-2ad4-417c-ad3a-912a9b13782b"
  },
  {
   "a": "Marvell Whitley",
   "b": "James Conroy",
   "team": "Ace Rebels",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.7,
   "avgActual": 5.8,
   "avgExpected": 7.1,
   "aId": "af790542-53d7-4390-a074-40c743a9be0c",
   "bId": "e784764f-725c-4b08-a982-a35771b64254"
  },
  {
   "a": "Hae Youn Reichenberg",
   "b": "Tim Haresign",
   "team": "Ace Rebels",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": -0.7,
   "avgActual": -0.6,
   "avgExpected": 0.4,
   "aId": "73373b91-d52c-4630-9fc7-736410c0a4b3",
   "bId": "ca80ecb3-183e-4c23-aa3d-1f680335268d"
  },
  {
   "a": "Aaron Chan",
   "b": "Dan Matthews",
   "team": "Kitchen Commanders",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.7,
   "avgActual": -4.2,
   "avgExpected": -2.9,
   "aId": "57666861-23d0-4809-9556-b646579f2fd6",
   "bId": "db35c570-ffa9-423e-9a3b-8e218fb3f2ec"
  },
  {
   "a": "Howard Cetel",
   "b": "Colleen Babore",
   "team": "Ace Rebels",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -1,
   "avgExpected": 0.5,
   "aId": "bff308e5-13f7-4eec-9c98-9095255f062f",
   "bId": "d98a87e6-75ed-4aa6-b535-23f3c73f2817"
  },
  {
   "a": "Danielle Simpson",
   "b": "Troy Sackawitch",
   "team": "Ace Bandits",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.8,
   "avgActual": -0.7,
   "avgExpected": 1.3,
   "aId": "3373e556-3a34-411c-abb7-7f39c2f29e13",
   "bId": "3b95d119-6f9a-4013-b07f-74e03823c1d1"
  },
  {
   "a": "Salvatore Caminito",
   "b": "Dan Matthews",
   "team": "Kitchen Commanders",
   "n": 7,
   "w": 1,
   "l": 6,
   "synergy": -0.8,
   "avgActual": -1,
   "avgExpected": 0.3,
   "aId": "b7af774b-4c46-4429-8177-2b5455d8744f",
   "bId": "db35c570-ffa9-423e-9a3b-8e218fb3f2ec"
  },
  {
   "a": "Eric Danver",
   "b": "Salvatore Caminito",
   "team": "Kitchen Commanders",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -3.2,
   "avgExpected": -1.5,
   "aId": "5b998c77-fc28-48ca-9044-1443679b288e",
   "bId": "b7af774b-4c46-4429-8177-2b5455d8744f"
  },
  {
   "a": "Tinglan Zhao",
   "b": "Greg Taylor",
   "team": "Ace & Eights",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.8,
   "avgActual": -0.8,
   "avgExpected": 0.5,
   "aId": "5f2e3f29-7b61-4d23-ba5a-23bfe5eac362",
   "bId": "701f7029-4353-4548-b8db-b7ac7ed3d847"
  },
  {
   "a": "Marjean Stokes",
   "b": "Ginger Evans",
   "team": "Ace & Eights",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.8,
   "avgActual": 1.6,
   "avgExpected": 3,
   "aId": "b25b5bf6-a97b-48b9-8b72-5979e2c854ba",
   "bId": "f9ea65b5-8f59-4c04-89b0-69ca9429c325"
  },
  {
   "a": "Jenn Allen",
   "b": "Dana Sheply",
   "team": "Ace Bandits",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -5,
   "avgExpected": -3.2,
   "aId": "1741b412-8d86-480b-a9f3-88447159088a",
   "bId": "28f35cb8-46a7-4338-9bdc-68f7bd6ca009"
  },
  {
   "a": "Marjean Stokes",
   "b": "Joan Rudderow",
   "team": "Ace & Eights",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -0.9,
   "avgActual": -3.9,
   "avgExpected": -2.5,
   "aId": "b25b5bf6-a97b-48b9-8b72-5979e2c854ba",
   "bId": "dca2ce61-749b-421c-9205-0a16fc656a36"
  },
  {
   "a": "Tinglan Zhao",
   "b": "Marc Witte",
   "team": "Ace & Eights",
   "n": 9,
   "w": 5,
   "l": 4,
   "synergy": -0.9,
   "avgActual": 0.7,
   "avgExpected": 2,
   "aId": "5f2e3f29-7b61-4d23-ba5a-23bfe5eac362",
   "bId": "846b9f43-2055-4f81-a134-bb64b8d636d0"
  },
  {
   "a": "Tinglan Zhao",
   "b": "Joan Rudderow",
   "team": "Ace & Eights",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.9,
   "avgActual": 0.8,
   "avgExpected": 2.4,
   "aId": "5f2e3f29-7b61-4d23-ba5a-23bfe5eac362",
   "bId": "dca2ce61-749b-421c-9205-0a16fc656a36"
  },
  {
   "a": "W Michael Kappeler",
   "b": "Colleen Babore",
   "team": "Ace Rebels",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.9,
   "avgActual": -2.3,
   "avgExpected": -0.3,
   "aId": "67b7c17e-8fce-437a-9230-cb46f0f8a76f",
   "bId": "d98a87e6-75ed-4aa6-b535-23f3c73f2817"
  },
  {
   "a": "W Michael Kappeler",
   "b": "Hae Youn Reichenberg",
   "team": "Ace Rebels",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -3.7,
   "avgExpected": -1.9,
   "aId": "67b7c17e-8fce-437a-9230-cb46f0f8a76f",
   "bId": "73373b91-d52c-4630-9fc7-736410c0a4b3"
  },
  {
   "a": "Dawn Gordon",
   "b": "Laura Masi",
   "team": "Ace Rebels",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -1.5,
   "avgExpected": 0.4,
   "aId": "756e256e-ea2f-4e25-9c6a-e780860d048f",
   "bId": "d65d24a6-1775-4233-bfe6-5ec7aa23f88f"
  },
  {
   "a": "Sheryl Axelrod",
   "b": "Lori Frank",
   "team": "Kitchen Commanders",
   "n": 7,
   "w": 1,
   "l": 6,
   "synergy": -0.9,
   "avgActual": -4.4,
   "avgExpected": -3,
   "aId": "6f9e0a16-373f-4c8e-8e9f-31a4696b1a96",
   "bId": "8e51fde0-5ddd-4e6e-b2f6-49cf79cb8030"
  },
  {
   "a": "Linda Goss",
   "b": "Lawrence Padersky",
   "team": "ACE ACE Baby",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1,
   "avgActual": -0.7,
   "avgExpected": 1.6,
   "aId": "14e5edae-ff22-415b-8267-d46a2117ed8d",
   "bId": "cff9ebd3-d67b-4a59-966f-a31b6208a155"
  },
  {
   "a": "Richard Gold",
   "b": "Rob Byrnes",
   "team": "Ace Bandits",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1,
   "avgActual": -6,
   "avgExpected": -3.7,
   "aId": "27b2b26d-c3f5-49cb-9dcb-32f9a2cf79ad",
   "bId": "65d3d6a5-c8ab-4841-bedd-321372bbb624"
  },
  {
   "a": "Liezel Thompson",
   "b": "Colleen Babore",
   "team": "Ace Rebels",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.1,
   "avgActual": -3,
   "avgExpected": -0.7,
   "aId": "7cc58742-bc83-4108-8a47-dffffc5cfced",
   "bId": "d98a87e6-75ed-4aa6-b535-23f3c73f2817"
  },
  {
   "a": "Amy Neckes",
   "b": "Marjean Stokes",
   "team": "Ace & Eights",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -2,
   "avgExpected": 0.1,
   "aId": "5691a68e-0367-4af2-b318-4e927e00d4d6",
   "bId": "b25b5bf6-a97b-48b9-8b72-5979e2c854ba"
  },
  {
   "a": "Andrea Schwab",
   "b": "Andrea Galanti",
   "team": "ACE ACE Baby",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -1.1,
   "avgActual": 2.5,
   "avgExpected": 4.4,
   "aId": "605d7726-f903-4606-ad3d-14964b9e2e1b",
   "bId": "cd5e243a-d109-4637-8372-9330696a943d"
  },
  {
   "a": "Grace Chung",
   "b": "Lawrence Padersky",
   "team": "ACE ACE Baby",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.1,
   "avgActual": -2.7,
   "avgExpected": -0.2,
   "aId": "6e476240-4e0c-46ca-94b1-f2ec4e214835",
   "bId": "cff9ebd3-d67b-4a59-966f-a31b6208a155"
  },
  {
   "a": "Tim Haresign",
   "b": "Laura Masi",
   "team": "Ace Rebels",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -1.1,
   "avgActual": -3.8,
   "avgExpected": -2,
   "aId": "ca80ecb3-183e-4c23-aa3d-1f680335268d",
   "bId": "d65d24a6-1775-4233-bfe6-5ec7aa23f88f"
  },
  {
   "a": "Troy Sackawitch",
   "b": "Rebecca Mcginnis",
   "team": "Ace Bandits",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": -1.1,
   "avgActual": 3.5,
   "avgExpected": 5.1,
   "aId": "3b95d119-6f9a-4013-b07f-74e03823c1d1",
   "bId": "e292105e-2554-4a80-accc-6b28514a8ec1"
  },
  {
   "a": "Dawn Gordon",
   "b": "Illyce Katz",
   "team": "Ace Rebels",
   "n": 6,
   "w": 0,
   "l": 6,
   "synergy": -1.2,
   "avgActual": -6.5,
   "avgExpected": -4.5,
   "aId": "756e256e-ea2f-4e25-9c6a-e780860d048f",
   "bId": "de04d961-7500-4b47-9e75-f882615afb19"
  },
  {
   "a": "Kathleen Rimdzius",
   "b": "Amy Neckes",
   "team": "Ace & Eights",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.2,
   "avgActual": -1.5,
   "avgExpected": 0.9,
   "aId": "4a71824b-a493-4861-8036-3633883f6eab",
   "bId": "5691a68e-0367-4af2-b318-4e927e00d4d6"
  },
  {
   "a": "Liezel Thompson",
   "b": "Laura Masi",
   "team": "Ace Rebels",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.3,
   "avgActual": -10,
   "avgExpected": -7.3,
   "aId": "7cc58742-bc83-4108-8a47-dffffc5cfced",
   "bId": "d65d24a6-1775-4233-bfe6-5ec7aa23f88f"
  },
  {
   "a": "Joan Rudderow",
   "b": "Brad Feldman",
   "team": "Ace & Eights",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -1.3,
   "avgActual": -1,
   "avgExpected": 1.3,
   "aId": "dca2ce61-749b-421c-9205-0a16fc656a36",
   "bId": "e083314c-48dc-440e-8d42-ecf474296e38"
  },
  {
   "a": "Allison Taylor",
   "b": "Matthew Tarshis",
   "team": "ACE ACE Baby",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.3,
   "avgActual": -7.7,
   "avgExpected": -5.1,
   "aId": "12648cf6-0364-460c-a275-66131bd39657",
   "bId": "6ba8d9f3-5fd9-41f3-b64c-d9c141c005e0"
  },
  {
   "a": "Pete Certo",
   "b": "Dawn Gordon",
   "team": "Ace Rebels",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -1.3,
   "avgActual": -6,
   "avgExpected": -3.6,
   "aId": "3572118b-4e01-4e64-96a4-a7cc80869425",
   "bId": "756e256e-ea2f-4e25-9c6a-e780860d048f"
  },
  {
   "a": "Ira Krassan",
   "b": "Auguste Turnier",
   "team": "Ace Bandits",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.4,
   "avgActual": -3,
   "avgExpected": 0.4,
   "aId": "03de01b1-2236-46cf-a94d-6f98cb142ddd",
   "bId": "65b75e72-ecf8-42ee-8071-c6b58ad2738f"
  },
  {
   "a": "Allison Taylor",
   "b": "Andrea Galanti",
   "team": "ACE ACE Baby",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -1.5,
   "avgActual": 0.3,
   "avgExpected": 3.3,
   "aId": "12648cf6-0364-460c-a275-66131bd39657",
   "bId": "cd5e243a-d109-4637-8372-9330696a943d"
  },
  {
   "a": "Steven Heller",
   "b": "Aaron Chan",
   "team": "Kitchen Commanders",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -1.5,
   "avgActual": -4.6,
   "avgExpected": -1.9,
   "aId": "344856f5-8559-411b-8fe7-2b5405bb9db6",
   "bId": "57666861-23d0-4809-9556-b646579f2fd6"
  },
  {
   "a": "Andrew Ravitz",
   "b": "Jamie West",
   "team": "ACE ACE Baby",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.5,
   "avgActual": -10.3,
   "avgExpected": -6.8,
   "aId": "496b210d-4480-41e9-993e-06fad50d6ebf",
   "bId": "715c1386-54e9-4169-bacb-e206a518f4c5"
  },
  {
   "a": "Linda Goss",
   "b": "Mustafa Kodwavi",
   "team": "ACE ACE Baby",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.6,
   "avgActual": -2.5,
   "avgExpected": 0.7,
   "aId": "14e5edae-ff22-415b-8267-d46a2117ed8d",
   "bId": "69c553be-566b-41f5-9398-2c0b4007b2b2"
  },
  {
   "a": "Steve Traum",
   "b": "Andrea Galanti",
   "team": "ACE ACE Baby",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.7,
   "avgActual": 1.5,
   "avgExpected": 5,
   "aId": "8880a77b-f445-45f7-9b21-c1e237f1079f",
   "bId": "cd5e243a-d109-4637-8372-9330696a943d"
  },
  {
   "a": "W Michael Kappeler",
   "b": "Howard Cetel",
   "team": "Ace Rebels",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.8,
   "avgActual": -3.7,
   "avgExpected": 0.5,
   "aId": "67b7c17e-8fce-437a-9230-cb46f0f8a76f",
   "bId": "bff308e5-13f7-4eec-9c98-9095255f062f"
  },
  {
   "a": "Hae Youn Reichenberg",
   "b": "Liezel Thompson",
   "team": "Ace Rebels",
   "n": 6,
   "w": 0,
   "l": 6,
   "synergy": -1.8,
   "avgActual": -9,
   "avgExpected": -6.1,
   "aId": "73373b91-d52c-4630-9fc7-736410c0a4b3",
   "bId": "7cc58742-bc83-4108-8a47-dffffc5cfced"
  },
  {
   "a": "Anthony Strazzeri",
   "b": "Rob Byrnes",
   "team": "Ace Bandits",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -1.9,
   "avgActual": -3.2,
   "avgExpected": -0.1,
   "aId": "2e9710c7-96c5-4bf8-a304-7d7b1968eb90",
   "bId": "65d3d6a5-c8ab-4841-bedd-321372bbb624"
  },
  {
   "a": "Dana Sheply",
   "b": "Anthony Strazzeri",
   "team": "Ace Bandits",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.9,
   "avgActual": -6.7,
   "avgExpected": -2.3,
   "aId": "28f35cb8-46a7-4338-9bdc-68f7bd6ca009",
   "bId": "2e9710c7-96c5-4bf8-a304-7d7b1968eb90"
  },
  {
   "a": "Jamie West",
   "b": "Lawrence Padersky",
   "team": "ACE ACE Baby",
   "n": 11,
   "w": 3,
   "l": 8,
   "synergy": -2,
   "avgActual": -3.5,
   "avgExpected": -0.9,
   "aId": "715c1386-54e9-4169-bacb-e206a518f4c5",
   "bId": "cff9ebd3-d67b-4a59-966f-a31b6208a155"
  },
  {
   "a": "Andrew Ravitz",
   "b": "Amy Long",
   "team": "ACE ACE Baby",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -2,
   "avgActual": -12,
   "avgExpected": -7.9,
   "aId": "496b210d-4480-41e9-993e-06fad50d6ebf",
   "bId": "690d021b-c77d-4627-b2aa-e8e3ee8e86e8"
  },
  {
   "a": "Mustafa Kodwavi",
   "b": "Jamie West",
   "team": "ACE ACE Baby",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.2,
   "avgActual": -5,
   "avgExpected": 0.2,
   "aId": "69c553be-566b-41f5-9398-2c0b4007b2b2",
   "bId": "715c1386-54e9-4169-bacb-e206a518f4c5"
  },
  {
   "a": "Rob Byrnes",
   "b": "Hanna Cutler",
   "team": "Ace Bandits",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.2,
   "avgActual": -6.3,
   "avgExpected": -1.3,
   "aId": "65d3d6a5-c8ab-4841-bedd-321372bbb624",
   "bId": "af5e2e89-3606-4d7e-8c5a-b397ff786303"
  },
  {
   "a": "Andrew Ravitz",
   "b": "Colette Mcgarrity",
   "team": "ACE ACE Baby",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -2.3,
   "avgActual": -9.4,
   "avgExpected": -5.3,
   "aId": "496b210d-4480-41e9-993e-06fad50d6ebf",
   "bId": "8778e4e6-6736-4f1c-add3-123b68513cc6"
  },
  {
   "a": "Colette Mcgarrity",
   "b": "Barb Mulckhuyse",
   "team": "ACE ACE Baby",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -2.4,
   "avgActual": -7.6,
   "avgExpected": -3.3,
   "aId": "8778e4e6-6736-4f1c-add3-123b68513cc6",
   "bId": "b4b69268-6029-4071-84b1-45535a570f3a"
  },
  {
   "a": "Andrea Schwab",
   "b": "Sam Tuzza",
   "team": "ACE ACE Baby",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.4,
   "avgActual": -4.7,
   "avgExpected": 1,
   "aId": "605d7726-f903-4606-ad3d-14964b9e2e1b",
   "bId": "e3a6df47-7687-4ab8-b001-7d63a8e5372a"
  },
  {
   "a": "Pete Dunn",
   "b": "James Conroy",
   "team": "Ace Rebels",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -2.7,
   "avgActual": -3.7,
   "avgExpected": 1.6,
   "aId": "8e45f538-d95a-4554-9ccf-443a06b5a89e",
   "bId": "e784764f-725c-4b08-a982-a35771b64254"
  },
  {
   "a": "Bill Mcgrory",
   "b": "Patrick Caponegro",
   "team": "Ace & Eights",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.8,
   "avgActual": -9.3,
   "avgExpected": -2.8,
   "aId": "d1958142-fabc-4f26-8afc-2b9947c27f1b",
   "bId": "eeb074a7-66de-4302-8ffb-e0ad267026d7"
  },
  {
   "a": "Joseph Villani",
   "b": "Gina Blahut",
   "team": "Kitchen Commanders",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -2.9,
   "avgActual": -10.4,
   "avgExpected": -5.3,
   "aId": "3d35be48-4648-4320-aec5-3eb571502945",
   "bId": "8fb69116-2ad4-417c-ad3a-912a9b13782b"
  },
  {
   "a": "Brittany Jacobs",
   "b": "Sheryl Axelrod",
   "team": "Kitchen Commanders",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -3,
   "avgActual": -6.5,
   "avgExpected": -0.4,
   "aId": "15dcc305-70cf-4eb1-bde4-a50a30130f3a",
   "bId": "6f9e0a16-373f-4c8e-8e9f-31a4696b1a96"
  }
 ],
 "matches": [
  {
   "result": "home",
   "week": 1,
   "home": "Ace Bandits",
   "away": "Ace Rebels",
   "time": "2026-06-24T19:00:00",
   "complete": true,
   "homePoints": 579,
   "awayPoints": 558,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Lisa Pinder",
      "Rob Byrnes"
     ],
     "a": [
      "Dawn Gordon",
      "Howard Cetel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jenn Allen",
      "Anthony Strazzeri"
     ],
     "a": [
      "Illyce Katz",
      "Pete Dunn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Danielle Simpson",
      "Troy Sackawitch"
     ],
     "a": [
      "Laura Masi",
      "James Conroy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Rebecca Mcginnis",
      "Auguste Turnier"
     ],
     "a": [
      "Liezel Thompson",
      "W Michael Kappeler"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Lisa Pinder",
      "Dana Sheply"
     ],
     "a": [
      "Illyce Katz",
      "Laura Masi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jenn Allen",
      "Rebecca Mcginnis"
     ],
     "a": [
      "Dawn Gordon",
      "Colleen Babore"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Rob Byrnes",
      "Anthony Strazzeri"
     ],
     "a": [
      "Pete Dunn",
      "Howard Cetel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 3,
     "as": 21,
     "h": [
      "Auguste Turnier",
      "Richard Gold"
     ],
     "a": [
      "James Conroy",
      "Tim Haresign"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jenn Allen",
      "Rob Byrnes"
     ],
     "a": [
      "Illyce Katz",
      "Howard Cetel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Lisa Pinder",
      "Anthony Strazzeri"
     ],
     "a": [
      "Dawn Gordon",
      "Pete Dunn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Dana Sheply",
      "Troy Sackawitch"
     ],
     "a": [
      "Colleen Babore",
      "Tim Haresign"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Danielle Simpson",
      "Richard Gold"
     ],
     "a": [
      "Liezel Thompson",
      "W Michael Kappeler"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jenn Allen",
      "Danielle Simpson"
     ],
     "a": [
      "Laura Masi",
      "Liezel Thompson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Dana Sheply",
      "Rebecca Mcginnis"
     ],
     "a": [
      "Dawn Gordon",
      "Colleen Babore"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Rob Byrnes",
      "Troy Sackawitch"
     ],
     "a": [
      "Pete Dunn",
      "James Conroy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Auguste Turnier",
      "Richard Gold"
     ],
     "a": [
      "Tim Haresign",
      "W Michael Kappeler"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Dana Sheply",
      "Troy Sackawitch"
     ],
     "a": [
      "Colleen Babore",
      "James Conroy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lisa Pinder",
      "Anthony Strazzeri"
     ],
     "a": [
      "Illyce Katz",
      "Howard Cetel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Danielle Simpson",
      "Richard Gold"
     ],
     "a": [
      "Laura Masi",
      "W Michael Kappeler"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Rebecca Mcginnis",
      "Auguste Turnier"
     ],
     "a": [
      "Liezel Thompson",
      "Tim Haresign"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lisa Pinder",
      "Jenn Allen"
     ],
     "a": [
      "Illyce Katz",
      "Dawn Gordon"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Danielle Simpson",
      "Rebecca Mcginnis"
     ],
     "a": [
      "Laura Masi",
      "Liezel Thompson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Rob Byrnes",
      "Troy Sackawitch"
     ],
     "a": [
      "Pete Dunn",
      "James Conroy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Anthony Strazzeri",
      "Auguste Turnier"
     ],
     "a": [
      "Howard Cetel",
      "W Michael Kappeler"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Lisa Pinder",
      "Rob Byrnes"
     ],
     "a": [
      "Illyce Katz",
      "Pete Dunn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jenn Allen",
      "Auguste Turnier"
     ],
     "a": [
      "Laura Masi",
      "James Conroy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Dana Sheply",
      "Anthony Strazzeri"
     ],
     "a": [
      "Dawn Gordon",
      "Howard Cetel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Rebecca Mcginnis",
      "Richard Gold"
     ],
     "a": [
      "Colleen Babore",
      "Tim Haresign"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Lisa Pinder",
      "Jenn Allen"
     ],
     "a": [
      "Illyce Katz",
      "Dawn Gordon"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Dana Sheply",
      "Danielle Simpson"
     ],
     "a": [
      "Colleen Babore",
      "Liezel Thompson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Rob Byrnes",
      "Anthony Strazzeri"
     ],
     "a": [
      "Pete Dunn",
      "Howard Cetel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Troy Sackawitch",
      "Richard Gold"
     ],
     "a": [
      "Tim Haresign",
      "W Michael Kappeler"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 1,
   "home": "Kitchen Commanders",
   "away": "Ace & Eights",
   "time": "2026-06-24T19:00:00",
   "complete": true,
   "homePoints": 805,
   "awayPoints": 580,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Kelley Batejan",
      "Salvatore Caminito"
     ],
     "a": [
      "Marjean Stokes",
      "Greg Taylor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lori Frank",
      "Eric Danver"
     ],
     "a": [
      "Amy Neckes",
      "Patrick Caponegro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Brittany Jacobs",
      "Dan Matthews"
     ],
     "a": [
      "Kathleen Rimdzius",
      "Bill Mcgrory"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Gina Blahut",
      "Joseph Villani"
     ],
     "a": [
      "Joan Rudderow",
      "Brad Feldman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kelley Batejan",
      "Brittany Jacobs"
     ],
     "a": [
      "Marjean Stokes",
      "Joan Rudderow"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Lori Frank",
      "Dawn Kempton"
     ],
     "a": [
      "Amy Neckes",
      "Kathleen Rimdzius"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Salvatore Caminito",
      "Dan Matthews"
     ],
     "a": [
      "Greg Taylor",
      "Patrick Caponegro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Eric Danver",
      "Joseph Villani"
     ],
     "a": [
      "Rick Weiser",
      "Brad Feldman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kelley Batejan",
      "Salvatore Caminito"
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
     "as": 23,
     "h": [
      "Lori Frank",
      "Eric Danver"
     ],
     "a": [
      "Marjean Stokes",
      "Patrick Caponegro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Dawn Kempton",
      "Dan Matthews"
     ],
     "a": [
      "Kathleen Rimdzius",
      "Rick Weiser"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Gina Blahut",
      "Joseph Villani"
     ],
     "a": [
      "Joan Rudderow",
      "Bill Mcgrory"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lori Frank",
      "Brittany Jacobs"
     ],
     "a": [
      "Marjean Stokes",
      "Amy Neckes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Dawn Kempton",
      "Gina Blahut"
     ],
     "a": [
      "Joan Rudderow",
      "Kathleen Rimdzius"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Salvatore Caminito",
      "Eric Danver"
     ],
     "a": [
      "Patrick Caponegro",
      "Rick Weiser"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Dan Matthews",
      "Joseph Villani"
     ],
     "a": [
      "Bill Mcgrory",
      "Brad Feldman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kelley Batejan",
      "Eric Danver"
     ],
     "a": [
      "Marjean Stokes",
      "Rick Weiser"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Brittany Jacobs",
      "Salvatore Caminito"
     ],
     "a": [
      "Amy Neckes",
      "Greg Taylor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Dawn Kempton",
      "Joseph Villani"
     ],
     "a": [
      "Joan Rudderow",
      "Bill Mcgrory"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Gina Blahut",
      "Dan Matthews"
     ],
     "a": [
      "Kathleen Rimdzius",
      "Brad Feldman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kelley Batejan",
      "Lori Frank"
     ],
     "a": [
      "Marjean Stokes",
      "Joan Rudderow"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Brittany Jacobs",
      "Gina Blahut"
     ],
     "a": [
      "Amy Neckes",
      "Kathleen Rimdzius"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Salvatore Caminito",
      "Eric Danver"
     ],
     "a": [
      "Greg Taylor",
      "Patrick Caponegro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Dan Matthews",
      "Joseph Villani"
     ],
     "a": [
      "Bill Mcgrory",
      "Brad Feldman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kelley Batejan",
      "Eric Danver"
     ],
     "a": [
      "Amy Neckes",
      "Patrick Caponegro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lori Frank",
      "Joseph Villani"
     ],
     "a": [
      "Kathleen Rimdzius",
      "Greg Taylor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Brittany Jacobs",
      "Salvatore Caminito"
     ],
     "a": [
      "Marjean Stokes",
      "Rick Weiser"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Dawn Kempton",
      "Dan Matthews"
     ],
     "a": [
      "Joan Rudderow",
      "Brad Feldman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Kelley Batejan",
      "Lori Frank"
     ],
     "a": [
      "Marjean Stokes",
      "Amy Neckes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Dawn Kempton",
      "Gina Blahut"
     ],
     "a": [
      "Joan Rudderow",
      "Kathleen Rimdzius"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Salvatore Caminito",
      "Dan Matthews"
     ],
     "a": [
      "Patrick Caponegro",
      "Bill Mcgrory"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Eric Danver",
      "Joseph Villani"
     ],
     "a": [
      "Greg Taylor",
      "Rick Weiser"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 2,
   "home": "Ace & Eights",
   "away": "Ace Bandits",
   "time": "2026-07-01T19:00:00",
   "complete": true,
   "homePoints": 535,
   "awayPoints": 611,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Amy Neckes",
      "Brad Feldman"
     ],
     "a": [
      "Lisa Pinder",
      "Rob Byrnes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Tinglan Zhao",
      "Marc Witte"
     ],
     "a": [
      "Lolita Hagen",
      "Troy Sackawitch"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Ginger Evans",
      "Greg Taylor"
     ],
     "a": [
      "Hanna Cutler",
      "Anthony Strazzeri"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Kathleen Rimdzius",
      "Rick Weiser"
     ],
     "a": [
      "Rebecca Mcginnis",
      "Butch Beri"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Tinglan Zhao",
      "Ginger Evans"
     ],
     "a": [
      "Lisa Pinder",
      "Rebecca Mcginnis"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Amy Neckes",
      "Joan Rudderow"
     ],
     "a": [
      "Lolita Hagen",
      "Hanna Cutler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Brad Feldman",
      "Marc Witte"
     ],
     "a": [
      "Rob Byrnes",
      "Troy Sackawitch"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Greg Taylor",
      "Bill Mcgrory"
     ],
     "a": [
      "Butch Beri",
      "Ira Krassan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Tinglan Zhao",
      "Brad Feldman"
     ],
     "a": [
      "Lolita Hagen",
      "Rob Byrnes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Amy Neckes",
      "Marc Witte"
     ],
     "a": [
      "Lisa Pinder",
      "Troy Sackawitch"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Joan Rudderow",
      "Bill Mcgrory"
     ],
     "a": [
      "Hanna Cutler",
      "Anthony Strazzeri"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Kathleen Rimdzius",
      "Rick Weiser"
     ],
     "a": [
      "Rebecca Mcginnis",
      "Ira Krassan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Tinglan Zhao",
      "Joan Rudderow"
     ],
     "a": [
      "Lisa Pinder",
      "Lolita Hagen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ginger Evans",
      "Kathleen Rimdzius"
     ],
     "a": [
      "Rebecca Mcginnis",
      "Hanna Cutler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Marc Witte",
      "Greg Taylor"
     ],
     "a": [
      "Troy Sackawitch",
      "Anthony Strazzeri"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Rick Weiser",
      "Bill Mcgrory"
     ],
     "a": [
      "Butch Beri",
      "Ira Krassan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Amy Neckes",
      "Greg Taylor"
     ],
     "a": [
      "Lolita Hagen",
      "Rob Byrnes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Joan Rudderow",
      "Brad Feldman"
     ],
     "a": [
      "Lisa Pinder",
      "Anthony Strazzeri"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Ginger Evans",
      "Rick Weiser"
     ],
     "a": [
      "Rebecca Mcginnis",
      "Ira Krassan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Kathleen Rimdzius",
      "Bill Mcgrory"
     ],
     "a": [
      "Hanna Cutler",
      "Butch Beri"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Amy Neckes",
      "Tinglan Zhao"
     ],
     "a": [
      "Lisa Pinder",
      "Lolita Hagen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Ginger Evans",
      "Kathleen Rimdzius"
     ],
     "a": [
      "Rebecca Mcginnis",
      "Hanna Cutler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Marc Witte",
      "Rick Weiser"
     ],
     "a": [
      "Rob Byrnes",
      "Anthony Strazzeri"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Brad Feldman",
      "Greg Taylor"
     ],
     "a": [
      "Troy Sackawitch",
      "Butch Beri"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Tinglan Zhao",
      "Marc Witte"
     ],
     "a": [
      "Lisa Pinder",
      "Rob Byrnes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Amy Neckes",
      "Brad Feldman"
     ],
     "a": [
      "Lolita Hagen",
      "Troy Sackawitch"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Joan Rudderow",
      "Greg Taylor"
     ],
     "a": [
      "Rebecca Mcginnis",
      "Butch Beri"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Ginger Evans",
      "Bill Mcgrory"
     ],
     "a": [
      "Hanna Cutler",
      "Ira Krassan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Amy Neckes",
      "Joan Rudderow"
     ],
     "a": [
      "Lisa Pinder",
      "Rebecca Mcginnis"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tinglan Zhao",
      "Kathleen Rimdzius"
     ],
     "a": [
      "Lolita Hagen",
      "Hanna Cutler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Brad Feldman",
      "Marc Witte"
     ],
     "a": [
      "Rob Byrnes",
      "Troy Sackawitch"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Rick Weiser",
      "Bill Mcgrory"
     ],
     "a": [
      "Anthony Strazzeri",
      "Ira Krassan"
     ]
    }
   ],
   "subs": [
    "Hanna Cutler"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "ACE ACE Baby",
   "away": "Kitchen Commanders",
   "time": "2026-07-01T19:00:00",
   "complete": true,
   "homePoints": 636,
   "awayPoints": 573,
   "homeGW": 19,
   "awayGW": 13,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Andrea Schwab",
      "Lawrence Padersky"
     ],
     "a": [
      "Lori Frank",
      "Dan Matthews"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Grace Chung",
      "Jamie West"
     ],
     "a": [
      "Dawn Kempton",
      "Salvatore Caminito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Allison Taylor",
      "Steve Traum"
     ],
     "a": [
      "Brittany Jacobs",
      "Eric Danver"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Colette Mcgarrity",
      "Mustafa Kodwavi"
     ],
     "a": [
      "Sheryl Axelrod",
      "Patrick Mirasol"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Andrea Schwab",
      "Andrea Galanti"
     ],
     "a": [
      "Dawn Kempton",
      "Brittany Jacobs"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Grace Chung",
      "Colette Mcgarrity"
     ],
     "a": [
      "Lori Frank",
      "Gina Blahut"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Lawrence Padersky",
      "Jamie West"
     ],
     "a": [
      "Salvatore Caminito",
      "Dan Matthews"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Mustafa Kodwavi",
      "Matthew Tarshis"
     ],
     "a": [
      "Eric Danver",
      "Martyn Babitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Grace Chung",
      "Lawrence Padersky"
     ],
     "a": [
      "Dawn Kempton",
      "Dan Matthews"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Andrea Schwab",
      "Jamie West"
     ],
     "a": [
      "Lori Frank",
      "Salvatore Caminito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Andrea Galanti",
      "Steve Traum"
     ],
     "a": [
      "Gina Blahut",
      "Martyn Babitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Allison Taylor",
      "Matthew Tarshis"
     ],
     "a": [
      "Sheryl Axelrod",
      "Patrick Mirasol"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Grace Chung",
      "Allison Taylor"
     ],
     "a": [
      "Brittany Jacobs",
      "Sheryl Axelrod"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Andrea Galanti",
      "Colette Mcgarrity"
     ],
     "a": [
      "Lori Frank",
      "Gina Blahut"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Lawrence Padersky",
      "Steve Traum"
     ],
     "a": [
      "Salvatore Caminito",
      "Eric Danver"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Mustafa Kodwavi",
      "Matthew Tarshis"
     ],
     "a": [
      "Martyn Babitz",
      "Patrick Mirasol"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Andrea Galanti",
      "Steve Traum"
     ],
     "a": [
      "Gina Blahut",
      "Eric Danver"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Andrea Schwab",
      "Jamie West"
     ],
     "a": [
      "Dawn Kempton",
      "Dan Matthews"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Allison Taylor",
      "Matthew Tarshis"
     ],
     "a": [
      "Brittany Jacobs",
      "Patrick Mirasol"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Colette Mcgarrity",
      "Mustafa Kodwavi"
     ],
     "a": [
      "Sheryl Axelrod",
      "Martyn Babitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Andrea Schwab",
      "Grace Chung"
     ],
     "a": [
      "Dawn Kempton",
      "Lori Frank"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Allison Taylor",
      "Colette Mcgarrity"
     ],
     "a": [
      "Brittany Jacobs",
      "Sheryl Axelrod"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lawrence Padersky",
      "Steve Traum"
     ],
     "a": [
      "Salvatore Caminito",
      "Eric Danver"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Jamie West",
      "Mustafa Kodwavi"
     ],
     "a": [
      "Dan Matthews",
      "Patrick Mirasol"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Andrea Schwab",
      "Lawrence Padersky"
     ],
     "a": [
      "Dawn Kempton",
      "Salvatore Caminito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Grace Chung",
      "Mustafa Kodwavi"
     ],
     "a": [
      "Brittany Jacobs",
      "Eric Danver"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Andrea Galanti",
      "Jamie West"
     ],
     "a": [
      "Lori Frank",
      "Dan Matthews"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 20,
     "h": [
      "Colette Mcgarrity",
      "Matthew Tarshis"
     ],
     "a": [
      "Gina Blahut",
      "Martyn Babitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Andrea Schwab",
      "Grace Chung"
     ],
     "a": [
      "Dawn Kempton",
      "Lori Frank"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Andrea Galanti",
      "Allison Taylor"
     ],
     "a": [
      "Gina Blahut",
      "Sheryl Axelrod"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lawrence Padersky",
      "Jamie West"
     ],
     "a": [
      "Salvatore Caminito",
      "Dan Matthews"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Steve Traum",
      "Matthew Tarshis"
     ],
     "a": [
      "Martyn Babitz",
      "Patrick Mirasol"
     ]
    }
   ],
   "subs": [
    "Allison Taylor",
    "Grace Chung"
   ]
  },
  {
   "result": "away",
   "week": 3,
   "home": "Ace Rebels",
   "away": "Ace & Eights",
   "time": "2026-07-08T19:00:00",
   "complete": true,
   "homePoints": 563,
   "awayPoints": 622,
   "homeGW": 13,
   "awayGW": 19,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Dawn Gordon",
      "Pete Dunn"
     ],
     "a": [
      "Amy Neckes",
      "Greg Taylor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Colleen Babore",
      "W Michael Kappeler"
     ],
     "a": [
      "Tinglan Zhao",
      "Marc Witte"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Laura Whitaker",
      "Tim Haresign"
     ],
     "a": [
      "Ginger Evans",
      "Brad Feldman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Liezel Thompson",
      "James Conroy"
     ],
     "a": [
      "Marjean Stokes",
      "Bill Mcgrory"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Dawn Gordon",
      "Hae Youn Reichenberg"
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
     "as": 16,
     "h": [
      "Colleen Babore",
      "Liezel Thompson"
     ],
     "a": [
      "Amy Neckes",
      "Kathleen Rimdzius"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Pete Dunn",
      "W Michael Kappeler"
     ],
     "a": [
      "Marc Witte",
      "Greg Taylor"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "James Conroy",
      "Marvell Whitley"
     ],
     "a": [
      "Brad Feldman",
      "Patrick Caponegro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Colleen Babore",
      "Pete Dunn"
     ],
     "a": [
      "Tinglan Zhao",
      "Greg Taylor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Dawn Gordon",
      "W Michael Kappeler"
     ],
     "a": [
      "Amy Neckes",
      "Marc Witte"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Hae Youn Reichenberg",
      "Tim Haresign"
     ],
     "a": [
      "Kathleen Rimdzius",
      "Patrick Caponegro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Laura Whitaker",
      "Marvell Whitley"
     ],
     "a": [
      "Marjean Stokes",
      "Bill Mcgrory"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Colleen Babore",
      "Laura Whitaker"
     ],
     "a": [
      "Ginger Evans",
      "Marjean Stokes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Hae Youn Reichenberg",
      "Liezel Thompson"
     ],
     "a": [
      "Amy Neckes",
      "Kathleen Rimdzius"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Pete Dunn",
      "Tim Haresign"
     ],
     "a": [
      "Marc Witte",
      "Brad Feldman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "James Conroy",
      "Marvell Whitley"
     ],
     "a": [
      "Patrick Caponegro",
      "Bill Mcgrory"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Hae Youn Reichenberg",
      "Tim Haresign"
     ],
     "a": [
      "Kathleen Rimdzius",
      "Brad Feldman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Dawn Gordon",
      "W Michael Kappeler"
     ],
     "a": [
      "Tinglan Zhao",
      "Greg Taylor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Laura Whitaker",
      "Marvell Whitley"
     ],
     "a": [
      "Ginger Evans",
      "Bill Mcgrory"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Liezel Thompson",
      "James Conroy"
     ],
     "a": [
      "Marjean Stokes",
      "Patrick Caponegro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Dawn Gordon",
      "Colleen Babore"
     ],
     "a": [
      "Tinglan Zhao",
      "Amy Neckes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Laura Whitaker",
      "Liezel Thompson"
     ],
     "a": [
      "Ginger Evans",
      "Marjean Stokes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Pete Dunn",
      "Tim Haresign"
     ],
     "a": [
      "Marc Witte",
      "Brad Feldman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "W Michael Kappeler",
      "James Conroy"
     ],
     "a": [
      "Greg Taylor",
      "Bill Mcgrory"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Dawn Gordon",
      "Pete Dunn"
     ],
     "a": [
      "Tinglan Zhao",
      "Marc Witte"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Colleen Babore",
      "James Conroy"
     ],
     "a": [
      "Ginger Evans",
      "Brad Feldman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Hae Youn Reichenberg",
      "W Michael Kappeler"
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
     "as": 16,
     "h": [
      "Liezel Thompson",
      "Marvell Whitley"
     ],
     "a": [
      "Kathleen Rimdzius",
      "Patrick Caponegro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Dawn Gordon",
      "Colleen Babore"
     ],
     "a": [
      "Tinglan Zhao",
      "Amy Neckes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Hae Youn Reichenberg",
      "Laura Whitaker"
     ],
     "a": [
      "Kathleen Rimdzius",
      "Marjean Stokes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Pete Dunn",
      "W Michael Kappeler"
     ],
     "a": [
      "Marc Witte",
      "Greg Taylor"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Tim Haresign",
      "Marvell Whitley"
     ],
     "a": [
      "Patrick Caponegro",
      "Bill Mcgrory"
     ]
    }
   ],
   "subs": [
    "Laura Whitaker"
   ]
  },
  {
   "result": "home",
   "week": 3,
   "home": "Ace Bandits",
   "away": "ACE ACE Baby",
   "time": "2026-07-08T19:00:00",
   "complete": true,
   "homePoints": 590,
   "awayPoints": 554,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jenn Allen",
      "Troy Sackawitch"
     ],
     "a": [
      "Andrea Schwab",
      "Jamie West"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Danielle Simpson",
      "Rob Byrnes"
     ],
     "a": [
      "Linda Goss",
      "Steve Traum"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Hanna Cutler",
      "Anthony Strazzeri"
     ],
     "a": [
      "Barb Mulckhuyse",
      "Mustafa Kodwavi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Dana Sheply",
      "Auguste Turnier"
     ],
     "a": [
      "Colette Mcgarrity",
      "Andrew Ravitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jenn Allen",
      "Dana Sheply"
     ],
     "a": [
      "Linda Goss",
      "Barb Mulckhuyse"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Danielle Simpson",
      "Hanna Cutler"
     ],
     "a": [
      "Andrea Schwab",
      "Andrea Galanti"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Troy Sackawitch",
      "Rob Byrnes"
     ],
     "a": [
      "Jamie West",
      "Steve Traum"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Auguste Turnier",
      "Richard Gold"
     ],
     "a": [
      "Mustafa Kodwavi",
      "Matthew Tarshis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Danielle Simpson",
      "Troy Sackawitch"
     ],
     "a": [
      "Linda Goss",
      "Jamie West"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jenn Allen",
      "Rob Byrnes"
     ],
     "a": [
      "Andrea Schwab",
      "Steve Traum"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Hanna Cutler",
      "Anthony Strazzeri"
     ],
     "a": [
      "Andrea Galanti",
      "Matthew Tarshis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Dana Sheply",
      "Richard Gold"
     ],
     "a": [
      "Colette Mcgarrity",
      "Andrew Ravitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jenn Allen",
      "Danielle Simpson"
     ],
     "a": [
      "Linda Goss",
      "Andrea Galanti"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Dana Sheply",
      "Hanna Cutler"
     ],
     "a": [
      "Barb Mulckhuyse",
      "Colette Mcgarrity"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Rob Byrnes",
      "Anthony Strazzeri"
     ],
     "a": [
      "Steve Traum",
      "Mustafa Kodwavi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Auguste Turnier",
      "Richard Gold"
     ],
     "a": [
      "Andrew Ravitz",
      "Matthew Tarshis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Danielle Simpson",
      "Troy Sackawitch"
     ],
     "a": [
      "Andrea Schwab",
      "Mustafa Kodwavi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jenn Allen",
      "Anthony Strazzeri"
     ],
     "a": [
      "Andrea Galanti",
      "Jamie West"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Dana Sheply",
      "Richard Gold"
     ],
     "a": [
      "Barb Mulckhuyse",
      "Andrew Ravitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Hanna Cutler",
      "Auguste Turnier"
     ],
     "a": [
      "Colette Mcgarrity",
      "Matthew Tarshis"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jenn Allen",
      "Danielle Simpson"
     ],
     "a": [
      "Andrea Schwab",
      "Linda Goss"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Dana Sheply",
      "Hanna Cutler"
     ],
     "a": [
      "Barb Mulckhuyse",
      "Colette Mcgarrity"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Troy Sackawitch",
      "Anthony Strazzeri"
     ],
     "a": [
      "Steve Traum",
      "Andrew Ravitz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Rob Byrnes",
      "Auguste Turnier"
     ],
     "a": [
      "Jamie West",
      "Mustafa Kodwavi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jenn Allen",
      "Troy Sackawitch"
     ],
     "a": [
      "Linda Goss",
      "Steve Traum"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Danielle Simpson",
      "Rob Byrnes"
     ],
     "a": [
      "Andrea Schwab",
      "Jamie West"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Dana Sheply",
      "Auguste Turnier"
     ],
     "a": [
      "Andrea Galanti",
      "Mustafa Kodwavi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Hanna Cutler",
      "Richard Gold"
     ],
     "a": [
      "Barb Mulckhuyse",
      "Matthew Tarshis"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jenn Allen",
      "Dana Sheply"
     ],
     "a": [
      "Andrea Schwab",
      "Andrea Galanti"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Danielle Simpson",
      "Hanna Cutler"
     ],
     "a": [
      "Linda Goss",
      "Colette Mcgarrity"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Troy Sackawitch",
      "Rob Byrnes"
     ],
     "a": [
      "Jamie West",
      "Steve Traum"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Anthony Strazzeri",
      "Richard Gold"
     ],
     "a": [
      "Andrew Ravitz",
      "Matthew Tarshis"
     ]
    }
   ],
   "subs": [
    "Hanna Cutler"
   ]
  },
  {
   "result": "away",
   "week": 4,
   "home": "Ace & Eights",
   "away": "ACE ACE Baby",
   "time": "2026-07-15T19:00:00",
   "complete": true,
   "homePoints": 590,
   "awayPoints": 605,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Joan Rudderow",
      "Brad Feldman"
     ],
     "a": [
      "Barb Mulckhuyse",
      "Sam Tuzza"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Tinglan Zhao",
      "Marc Witte"
     ],
     "a": [
      "Andrea Schwab",
      "Lawrence Padersky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Ginger Evans",
      "Greg Taylor"
     ],
     "a": [
      "Linda Goss",
      "Jamie West"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Marjean Stokes",
      "Patrick Caponegro"
     ],
     "a": [
      "Colette Mcgarrity",
      "Mustafa Kodwavi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Tinglan Zhao",
      "Amy Neckes"
     ],
     "a": [
      "Andrea Schwab",
      "Linda Goss"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Joan Rudderow",
      "Marjean Stokes"
     ],
     "a": [
      "Barb Mulckhuyse",
      "Andrea Galanti"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Marc Witte",
      "Brad Feldman"
     ],
     "a": [
      "Lawrence Padersky",
      "Sam Tuzza"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Patrick Caponegro",
      "Rick Weiser"
     ],
     "a": [
      "Jamie West",
      "Steve Traum"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Joan Rudderow",
      "Marc Witte"
     ],
     "a": [
      "Andrea Schwab",
      "Sam Tuzza"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Tinglan Zhao",
      "Brad Feldman"
     ],
     "a": [
      "Barb Mulckhuyse",
      "Lawrence Padersky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Amy Neckes",
      "Greg Taylor"
     ],
     "a": [
      "Andrea Galanti",
      "Steve Traum"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Ginger Evans",
      "Rick Weiser"
     ],
     "a": [
      "Colette Mcgarrity",
      "Mustafa Kodwavi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Joan Rudderow",
      "Ginger Evans"
     ],
     "a": [
      "Linda Goss",
      "Colette Mcgarrity"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Amy Neckes",
      "Marjean Stokes"
     ],
     "a": [
      "Barb Mulckhuyse",
      "Andrea Galanti"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Marc Witte",
      "Greg Taylor"
     ],
     "a": [
      "Lawrence Padersky",
      "Jamie West"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Patrick Caponegro",
      "Rick Weiser"
     ],
     "a": [
      "Steve Traum",
      "Mustafa Kodwavi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Amy Neckes",
      "Greg Taylor"
     ],
     "a": [
      "Andrea Galanti",
      "Jamie West"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Tinglan Zhao",
      "Brad Feldman"
     ],
     "a": [
      "Andrea Schwab",
      "Sam Tuzza"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Ginger Evans",
      "Rick Weiser"
     ],
     "a": [
      "Linda Goss",
      "Mustafa Kodwavi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Marjean Stokes",
      "Patrick Caponegro"
     ],
     "a": [
      "Colette Mcgarrity",
      "Steve Traum"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Tinglan Zhao",
      "Joan Rudderow"
     ],
     "a": [
      "Andrea Schwab",
      "Barb Mulckhuyse"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Ginger Evans",
      "Marjean Stokes"
     ],
     "a": [
      "Linda Goss",
      "Colette Mcgarrity"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Marc Witte",
      "Greg Taylor"
     ],
     "a": [
      "Lawrence Padersky",
      "Jamie West"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Brad Feldman",
      "Patrick Caponegro"
     ],
     "a": [
      "Sam Tuzza",
      "Mustafa Kodwavi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Tinglan Zhao",
      "Marc Witte"
     ],
     "a": [
      "Andrea Schwab",
      "Lawrence Padersky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Joan Rudderow",
      "Patrick Caponegro"
     ],
     "a": [
      "Linda Goss",
      "Jamie West"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Amy Neckes",
      "Brad Feldman"
     ],
     "a": [
      "Barb Mulckhuyse",
      "Sam Tuzza"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Marjean Stokes",
      "Rick Weiser"
     ],
     "a": [
      "Andrea Galanti",
      "Steve Traum"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Tinglan Zhao",
      "Joan Rudderow"
     ],
     "a": [
      "Andrea Schwab",
      "Barb Mulckhuyse"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Amy Neckes",
      "Ginger Evans"
     ],
     "a": [
      "Andrea Galanti",
      "Colette Mcgarrity"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Marc Witte",
      "Brad Feldman"
     ],
     "a": [
      "Lawrence Padersky",
      "Sam Tuzza"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Greg Taylor",
      "Rick Weiser"
     ],
     "a": [
      "Steve Traum",
      "Mustafa Kodwavi"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 4,
   "home": "Ace Rebels",
   "away": "Kitchen Commanders",
   "time": "2026-07-15T19:00:00",
   "complete": true,
   "homePoints": 614,
   "awayPoints": 557,
   "homeGW": 19,
   "awayGW": 13,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Illyce Katz",
      "Howard Cetel"
     ],
     "a": [
      "Brittany Jacobs",
      "Steven Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Dawn Gordon",
      "Pete Certo"
     ],
     "a": [
      "Kelley Batejan",
      "Aaron Chan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Hae Youn Reichenberg",
      "James Conroy"
     ],
     "a": [
      "Lori Frank",
      "Dan Matthews"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Laura Masi",
      "Tim Haresign"
     ],
     "a": [
      "Sheryl Axelrod",
      "Joseph Villani"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Illyce Katz",
      "Colleen Babore"
     ],
     "a": [
      "Kelley Batejan",
      "Lori Frank"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Dawn Gordon",
      "Laura Masi"
     ],
     "a": [
      "Brittany Jacobs",
      "Gina Blahut"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Howard Cetel",
      "Pete Certo"
     ],
     "a": [
      "Aaron Chan",
      "Steven Heller"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tim Haresign",
      "W Michael Kappeler"
     ],
     "a": [
      "Dan Matthews",
      "Salvatore Caminito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Dawn Gordon",
      "Howard Cetel"
     ],
     "a": [
      "Kelley Batejan",
      "Steven Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Illyce Katz",
      "Pete Certo"
     ],
     "a": [
      "Brittany Jacobs",
      "Aaron Chan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Colleen Babore",
      "James Conroy"
     ],
     "a": [
      "Gina Blahut",
      "Salvatore Caminito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Hae Youn Reichenberg",
      "W Michael Kappeler"
     ],
     "a": [
      "Sheryl Axelrod",
      "Joseph Villani"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Dawn Gordon",
      "Hae Youn Reichenberg"
     ],
     "a": [
      "Lori Frank",
      "Sheryl Axelrod"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Colleen Babore",
      "Laura Masi"
     ],
     "a": [
      "Brittany Jacobs",
      "Gina Blahut"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Howard Cetel",
      "James Conroy"
     ],
     "a": [
      "Aaron Chan",
      "Dan Matthews"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Tim Haresign",
      "W Michael Kappeler"
     ],
     "a": [
      "Salvatore Caminito",
      "Joseph Villani"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Colleen Babore",
      "James Conroy"
     ],
     "a": [
      "Gina Blahut",
      "Dan Matthews"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Illyce Katz",
      "Pete Certo"
     ],
     "a": [
      "Kelley Batejan",
      "Steven Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 20,
     "h": [
      "Hae Youn Reichenberg",
      "W Michael Kappeler"
     ],
     "a": [
      "Lori Frank",
      "Joseph Villani"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Laura Masi",
      "Tim Haresign"
     ],
     "a": [
      "Sheryl Axelrod",
      "Salvatore Caminito"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Illyce Katz",
      "Dawn Gordon"
     ],
     "a": [
      "Kelley Batejan",
      "Brittany Jacobs"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Hae Youn Reichenberg",
      "Laura Masi"
     ],
     "a": [
      "Lori Frank",
      "Sheryl Axelrod"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Howard Cetel",
      "James Conroy"
     ],
     "a": [
      "Aaron Chan",
      "Dan Matthews"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Pete Certo",
      "Tim Haresign"
     ],
     "a": [
      "Steven Heller",
      "Joseph Villani"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Illyce Katz",
      "Howard Cetel"
     ],
     "a": [
      "Kelley Batejan",
      "Aaron Chan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Dawn Gordon",
      "Tim Haresign"
     ],
     "a": [
      "Lori Frank",
      "Dan Matthews"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Colleen Babore",
      "Pete Certo"
     ],
     "a": [
      "Brittany Jacobs",
      "Steven Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Laura Masi",
      "W Michael Kappeler"
     ],
     "a": [
      "Gina Blahut",
      "Salvatore Caminito"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Illyce Katz",
      "Dawn Gordon"
     ],
     "a": [
      "Kelley Batejan",
      "Brittany Jacobs"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Colleen Babore",
      "Hae Youn Reichenberg"
     ],
     "a": [
      "Gina Blahut",
      "Sheryl Axelrod"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Howard Cetel",
      "Pete Certo"
     ],
     "a": [
      "Aaron Chan",
      "Steven Heller"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "James Conroy",
      "W Michael Kappeler"
     ],
     "a": [
      "Salvatore Caminito",
      "Joseph Villani"
     ]
    }
   ],
   "subs": [
    "Steven Heller"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "ACE ACE Baby",
   "away": "Ace Rebels",
   "time": "2026-07-22T19:00:00",
   "complete": true,
   "homePoints": 571,
   "awayPoints": 559,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Andrea Schwab",
      "Lawrence Padersky"
     ],
     "a": [
      "Illyce Katz",
      "Pete Certo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Linda Goss",
      "Jamie West"
     ],
     "a": [
      "Dawn Gordon",
      "Howard Cetel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Amy Long",
      "Sam Tuzza"
     ],
     "a": [
      "Colleen Babore",
      "W Michael Kappeler"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Allison Taylor",
      "Matthew Tarshis"
     ],
     "a": [
      "Liezel Thompson",
      "James Conroy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Andrea Schwab",
      "Andrea Galanti"
     ],
     "a": [
      "Dawn Gordon",
      "Colleen Babore"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Linda Goss",
      "Allison Taylor"
     ],
     "a": [
      "Illyce Katz",
      "Hae Youn Reichenberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lawrence Padersky",
      "Jamie West"
     ],
     "a": [
      "Howard Cetel",
      "Pete Certo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Matthew Tarshis",
      "Andrew Ravitz"
     ],
     "a": [
      "W Michael Kappeler",
      "Marvell Whitley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Linda Goss",
      "Lawrence Padersky"
     ],
     "a": [
      "Dawn Gordon",
      "Pete Certo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Andrea Schwab",
      "Jamie West"
     ],
     "a": [
      "Illyce Katz",
      "Howard Cetel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Andrea Galanti",
      "Sam Tuzza"
     ],
     "a": [
      "Hae Youn Reichenberg",
      "Marvell Whitley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Amy Long",
      "Andrew Ravitz"
     ],
     "a": [
      "Liezel Thompson",
      "James Conroy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Linda Goss",
      "Amy Long"
     ],
     "a": [
      "Colleen Babore",
      "Liezel Thompson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Andrea Galanti",
      "Allison Taylor"
     ],
     "a": [
      "Illyce Katz",
      "Hae Youn Reichenberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Lawrence Padersky",
      "Sam Tuzza"
     ],
     "a": [
      "Howard Cetel",
      "W Michael Kappeler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Matthew Tarshis",
      "Andrew Ravitz"
     ],
     "a": [
      "Marvell Whitley",
      "James Conroy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Andrea Galanti",
      "Sam Tuzza"
     ],
     "a": [
      "Hae Youn Reichenberg",
      "W Michael Kappeler"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Andrea Schwab",
      "Jamie West"
     ],
     "a": [
      "Dawn Gordon",
      "Pete Certo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Amy Long",
      "Andrew Ravitz"
     ],
     "a": [
      "Colleen Babore",
      "James Conroy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Allison Taylor",
      "Matthew Tarshis"
     ],
     "a": [
      "Liezel Thompson",
      "Marvell Whitley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Andrea Schwab",
      "Linda Goss"
     ],
     "a": [
      "Dawn Gordon",
      "Illyce Katz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Amy Long",
      "Allison Taylor"
     ],
     "a": [
      "Colleen Babore",
      "Liezel Thompson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lawrence Padersky",
      "Sam Tuzza"
     ],
     "a": [
      "Howard Cetel",
      "W Michael Kappeler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jamie West",
      "Matthew Tarshis"
     ],
     "a": [
      "Pete Certo",
      "James Conroy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Andrea Schwab",
      "Lawrence Padersky"
     ],
     "a": [
      "Dawn Gordon",
      "Howard Cetel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Linda Goss",
      "Matthew Tarshis"
     ],
     "a": [
      "Colleen Babore",
      "W Michael Kappeler"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Andrea Galanti",
      "Jamie West"
     ],
     "a": [
      "Illyce Katz",
      "Pete Certo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Allison Taylor",
      "Andrew Ravitz"
     ],
     "a": [
      "Hae Youn Reichenberg",
      "Marvell Whitley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Andrea Schwab",
      "Linda Goss"
     ],
     "a": [
      "Dawn Gordon",
      "Illyce Katz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Andrea Galanti",
      "Amy Long"
     ],
     "a": [
      "Hae Youn Reichenberg",
      "Liezel Thompson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lawrence Padersky",
      "Jamie West"
     ],
     "a": [
      "Howard Cetel",
      "Pete Certo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Sam Tuzza",
      "Andrew Ravitz"
     ],
     "a": [
      "Marvell Whitley",
      "James Conroy"
     ]
    }
   ],
   "subs": [
    "Allison Taylor",
    "Amy Long"
   ]
  },
  {
   "result": "away",
   "week": 5,
   "home": "Kitchen Commanders",
   "away": "Ace Bandits",
   "time": "2026-07-22T19:00:00",
   "complete": true,
   "homePoints": 598,
   "awayPoints": 641,
   "homeGW": 13,
   "awayGW": 19,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kelley Batejan",
      "Jason Fingerman"
     ],
     "a": [
      "Lolita Hagen",
      "Troy Sackawitch"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Brittany Jacobs",
      "Steven Heller"
     ],
     "a": [
      "Rebecca Mcginnis",
      "Anthony Strazzeri"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Leslie Phelps",
      "Martyn Babitz"
     ],
     "a": [
      "Lisa Pinder",
      "Ira Krassan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sheryl Axelrod",
      "Dan Matthews"
     ],
     "a": [
      "Jenn Allen",
      "Richard Gold"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kelley Batejan",
      "Lynn Bresnahan"
     ],
     "a": [
      "Rebecca Mcginnis",
      "Lisa Pinder"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Brittany Jacobs",
      "Sheryl Axelrod"
     ],
     "a": [
      "Lolita Hagen",
      "Dana Sheply"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jason Fingerman",
      "Steven Heller"
     ],
     "a": [
      "Anthony Strazzeri",
      "Troy Sackawitch"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Dan Matthews",
      "Joseph Villani"
     ],
     "a": [
      "Ira Krassan",
      "Auguste Turnier"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Brittany Jacobs",
      "Jason Fingerman"
     ],
     "a": [
      "Rebecca Mcginnis",
      "Troy Sackawitch"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kelley Batejan",
      "Steven Heller"
     ],
     "a": [
      "Lolita Hagen",
      "Anthony Strazzeri"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lynn Bresnahan",
      "Martyn Babitz"
     ],
     "a": [
      "Dana Sheply",
      "Auguste Turnier"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Leslie Phelps",
      "Joseph Villani"
     ],
     "a": [
      "Jenn Allen",
      "Richard Gold"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Brittany Jacobs",
      "Leslie Phelps"
     ],
     "a": [
      "Lisa Pinder",
      "Jenn Allen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Lynn Bresnahan",
      "Sheryl Axelrod"
     ],
     "a": [
      "Lolita Hagen",
      "Dana Sheply"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jason Fingerman",
      "Martyn Babitz"
     ],
     "a": [
      "Anthony Strazzeri",
      "Ira Krassan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Dan Matthews",
      "Joseph Villani"
     ],
     "a": [
      "Auguste Turnier",
      "Richard Gold"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Lynn Bresnahan",
      "Martyn Babitz"
     ],
     "a": [
      "Dana Sheply",
      "Ira Krassan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kelley Batejan",
      "Steven Heller"
     ],
     "a": [
      "Rebecca Mcginnis",
      "Troy Sackawitch"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Leslie Phelps",
      "Joseph Villani"
     ],
     "a": [
      "Lisa Pinder",
      "Richard Gold"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Sheryl Axelrod",
      "Dan Matthews"
     ],
     "a": [
      "Jenn Allen",
      "Auguste Turnier"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kelley Batejan",
      "Brittany Jacobs"
     ],
     "a": [
      "Rebecca Mcginnis",
      "Lolita Hagen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Leslie Phelps",
      "Sheryl Axelrod"
     ],
     "a": [
      "Lisa Pinder",
      "Jenn Allen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jason Fingerman",
      "Martyn Babitz"
     ],
     "a": [
      "Anthony Strazzeri",
      "Ira Krassan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Steven Heller",
      "Dan Matthews"
     ],
     "a": [
      "Troy Sackawitch",
      "Richard Gold"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kelley Batejan",
      "Jason Fingerman"
     ],
     "a": [
      "Rebecca Mcginnis",
      "Anthony Strazzeri"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Brittany Jacobs",
      "Dan Matthews"
     ],
     "a": [
      "Lisa Pinder",
      "Ira Krassan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Lynn Bresnahan",
      "Steven Heller"
     ],
     "a": [
      "Lolita Hagen",
      "Troy Sackawitch"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sheryl Axelrod",
      "Joseph Villani"
     ],
     "a": [
      "Dana Sheply",
      "Auguste Turnier"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kelley Batejan",
      "Brittany Jacobs"
     ],
     "a": [
      "Rebecca Mcginnis",
      "Lolita Hagen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lynn Bresnahan",
      "Leslie Phelps"
     ],
     "a": [
      "Dana Sheply",
      "Jenn Allen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jason Fingerman",
      "Steven Heller"
     ],
     "a": [
      "Anthony Strazzeri",
      "Troy Sackawitch"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Martyn Babitz",
      "Joseph Villani"
     ],
     "a": [
      "Auguste Turnier",
      "Richard Gold"
     ]
    }
   ],
   "subs": [
    "Lynn Bresnahan",
    "Steven Heller",
    "Jason Fingerman",
    "Leslie Phelps"
   ]
  },
  {
   "result": "away",
   "week": 6,
   "home": "Ace Bandits",
   "away": "Ace & Eights",
   "time": "2026-07-29T19:00:00",
   "complete": true,
   "homePoints": 561,
   "awayPoints": 622,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Rebecca Mcginnis",
      "Troy Sackawitch"
     ],
     "a": [
      "Amy Neckes",
      "Greg Taylor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Dana Sheply",
      "Anthony Strazzeri"
     ],
     "a": [
      "Tinglan Zhao",
      "Dennis Higman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Hanna Cutler",
      "Rob Byrnes"
     ],
     "a": [
      "Ginger Evans",
      "Patrick Caponegro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Danielle Simpson",
      "Auguste Turnier"
     ],
     "a": [
      "Marjean Stokes",
      "Bill Mcgrory"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Rebecca Mcginnis",
      "Lisa Pinder"
     ],
     "a": [
      "Tinglan Zhao",
      "Ginger Evans"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Dana Sheply",
      "Danielle Simpson"
     ],
     "a": [
      "Amy Neckes",
      "Joan Rudderow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Troy Sackawitch",
      "Anthony Strazzeri"
     ],
     "a": [
      "Dennis Higman",
      "Greg Taylor"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Auguste Turnier",
      "Richard Gold"
     ],
     "a": [
      "Patrick Caponegro",
      "Rick Weiser"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Dana Sheply",
      "Troy Sackawitch"
     ],
     "a": [
      "Tinglan Zhao",
      "Greg Taylor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Rebecca Mcginnis",
      "Anthony Strazzeri"
     ],
     "a": [
      "Amy Neckes",
      "Dennis Higman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Lisa Pinder",
      "Rob Byrnes"
     ],
     "a": [
      "Joan Rudderow",
      "Rick Weiser"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Hanna Cutler",
      "Richard Gold"
     ],
     "a": [
      "Marjean Stokes",
      "Bill Mcgrory"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Dana Sheply",
      "Hanna Cutler"
     ],
     "a": [
      "Ginger Evans",
      "Marjean Stokes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Lisa Pinder",
      "Danielle Simpson"
     ],
     "a": [
      "Amy Neckes",
      "Joan Rudderow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Troy Sackawitch",
      "Rob Byrnes"
     ],
     "a": [
      "Dennis Higman",
      "Patrick Caponegro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Auguste Turnier",
      "Richard Gold"
     ],
     "a": [
      "Rick Weiser",
      "Bill Mcgrory"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Lisa Pinder",
      "Rob Byrnes"
     ],
     "a": [
      "Joan Rudderow",
      "Patrick Caponegro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Rebecca Mcginnis",
      "Anthony Strazzeri"
     ],
     "a": [
      "Tinglan Zhao",
      "Greg Taylor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Hanna Cutler",
      "Richard Gold"
     ],
     "a": [
      "Ginger Evans",
      "Bill Mcgrory"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Danielle Simpson",
      "Auguste Turnier"
     ],
     "a": [
      "Marjean Stokes",
      "Rick Weiser"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Rebecca Mcginnis",
      "Dana Sheply"
     ],
     "a": [
      "Tinglan Zhao",
      "Amy Neckes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Hanna Cutler",
      "Danielle Simpson"
     ],
     "a": [
      "Ginger Evans",
      "Marjean Stokes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Troy Sackawitch",
      "Rob Byrnes"
     ],
     "a": [
      "Dennis Higman",
      "Patrick Caponegro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Anthony Strazzeri",
      "Auguste Turnier"
     ],
     "a": [
      "Greg Taylor",
      "Bill Mcgrory"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Rebecca Mcginnis",
      "Troy Sackawitch"
     ],
     "a": [
      "Tinglan Zhao",
      "Dennis Higman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Dana Sheply",
      "Auguste Turnier"
     ],
     "a": [
      "Ginger Evans",
      "Patrick Caponegro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Lisa Pinder",
      "Anthony Strazzeri"
     ],
     "a": [
      "Amy Neckes",
      "Greg Taylor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Danielle Simpson",
      "Richard Gold"
     ],
     "a": [
      "Joan Rudderow",
      "Rick Weiser"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Rebecca Mcginnis",
      "Dana Sheply"
     ],
     "a": [
      "Tinglan Zhao",
      "Amy Neckes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Lisa Pinder",
      "Hanna Cutler"
     ],
     "a": [
      "Joan Rudderow",
      "Marjean Stokes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Troy Sackawitch",
      "Anthony Strazzeri"
     ],
     "a": [
      "Dennis Higman",
      "Greg Taylor"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Rob Byrnes",
      "Richard Gold"
     ],
     "a": [
      "Rick Weiser",
      "Bill Mcgrory"
     ]
    }
   ],
   "subs": [
    "Hanna Cutler",
    "Dennis Higman"
   ]
  },
  {
   "result": "home",
   "week": 6,
   "home": "Kitchen Commanders",
   "away": "ACE ACE Baby",
   "time": "2026-07-29T19:00:00",
   "complete": true,
   "homePoints": 613,
   "awayPoints": 548,
   "homeGW": 20,
   "awayGW": 12,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Kelley Batejan",
      "Jason Fingerman"
     ],
     "a": [
      "Barb Mulckhuyse",
      "Jamie West"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Angeli Dungca",
      "Aaron Chan"
     ],
     "a": [
      "Andrea Schwab",
      "Lawrence Padersky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Sheryl Axelrod",
      "Steven Heller"
     ],
     "a": [
      "Linda Goss",
      "Mustafa Kodwavi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Allison Taylor",
      "Salvatore Caminito"
     ],
     "a": [
      "Colette Mcgarrity",
      "Andrew Ravitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kelley Batejan",
      "Lori Frank"
     ],
     "a": [
      "Andrea Schwab",
      "Linda Goss"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Angeli Dungca",
      "Allison Taylor"
     ],
     "a": [
      "Barb Mulckhuyse",
      "Andrea Galanti"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jason Fingerman",
      "Aaron Chan"
     ],
     "a": [
      "Lawrence Padersky",
      "Jamie West"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Salvatore Caminito",
      "Joseph Villani"
     ],
     "a": [
      "Mustafa Kodwavi",
      "Matthew Tarshis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Angeli Dungca",
      "Jason Fingerman"
     ],
     "a": [
      "Andrea Schwab",
      "Jamie West"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kelley Batejan",
      "Aaron Chan"
     ],
     "a": [
      "Barb Mulckhuyse",
      "Lawrence Padersky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lori Frank",
      "Steven Heller"
     ],
     "a": [
      "Andrea Galanti",
      "Matthew Tarshis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Sheryl Axelrod",
      "Joseph Villani"
     ],
     "a": [
      "Colette Mcgarrity",
      "Andrew Ravitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Angeli Dungca",
      "Sheryl Axelrod"
     ],
     "a": [
      "Linda Goss",
      "Colette Mcgarrity"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lori Frank",
      "Allison Taylor"
     ],
     "a": [
      "Barb Mulckhuyse",
      "Andrea Galanti"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jason Fingerman",
      "Steven Heller"
     ],
     "a": [
      "Lawrence Padersky",
      "Mustafa Kodwavi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Salvatore Caminito",
      "Joseph Villani"
     ],
     "a": [
      "Matthew Tarshis",
      "Andrew Ravitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Lori Frank",
      "Steven Heller"
     ],
     "a": [
      "Andrea Galanti",
      "Mustafa Kodwavi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kelley Batejan",
      "Aaron Chan"
     ],
     "a": [
      "Andrea Schwab",
      "Jamie West"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Sheryl Axelrod",
      "Joseph Villani"
     ],
     "a": [
      "Linda Goss",
      "Andrew Ravitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Allison Taylor",
      "Salvatore Caminito"
     ],
     "a": [
      "Colette Mcgarrity",
      "Matthew Tarshis"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kelley Batejan",
      "Angeli Dungca"
     ],
     "a": [
      "Andrea Schwab",
      "Barb Mulckhuyse"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Sheryl Axelrod",
      "Allison Taylor"
     ],
     "a": [
      "Linda Goss",
      "Colette Mcgarrity"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jason Fingerman",
      "Steven Heller"
     ],
     "a": [
      "Lawrence Padersky",
      "Mustafa Kodwavi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Aaron Chan",
      "Salvatore Caminito"
     ],
     "a": [
      "Jamie West",
      "Andrew Ravitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kelley Batejan",
      "Jason Fingerman"
     ],
     "a": [
      "Andrea Schwab",
      "Lawrence Padersky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Angeli Dungca",
      "Salvatore Caminito"
     ],
     "a": [
      "Linda Goss",
      "Mustafa Kodwavi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Lori Frank",
      "Aaron Chan"
     ],
     "a": [
      "Barb Mulckhuyse",
      "Jamie West"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Allison Taylor",
      "Joseph Villani"
     ],
     "a": [
      "Andrea Galanti",
      "Matthew Tarshis"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kelley Batejan",
      "Angeli Dungca"
     ],
     "a": [
      "Andrea Schwab",
      "Barb Mulckhuyse"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lori Frank",
      "Sheryl Axelrod"
     ],
     "a": [
      "Andrea Galanti",
      "Colette Mcgarrity"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Jason Fingerman",
      "Aaron Chan"
     ],
     "a": [
      "Lawrence Padersky",
      "Jamie West"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Steven Heller",
      "Joseph Villani"
     ],
     "a": [
      "Matthew Tarshis",
      "Andrew Ravitz"
     ]
    }
   ],
   "subs": [
    "Angeli Dungca",
    "Steven Heller",
    "Jason Fingerman",
    "Allison Taylor"
   ]
  },
  {
   "result": "away",
   "week": 8,
   "home": "Ace Rebels",
   "away": "Ace Bandits",
   "time": "2026-08-03T19:00:00",
   "complete": true,
   "homePoints": 595,
   "awayPoints": 625,
   "homeGW": 13,
   "awayGW": 19,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Colleen Babore",
      "Howard Cetel"
     ],
     "a": [
      "Hanna Cutler",
      "Anthony Strazzeri"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Dawn Gordon",
      "Pete Dunn"
     ],
     "a": [
      "Rebecca Mcginnis",
      "Troy Sackawitch"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Liezel Thompson",
      "Tim Haresign"
     ],
     "a": [
      "Jenn Allen",
      "Rob Byrnes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Laura Whitaker",
      "James Conroy"
     ],
     "a": [
      "Danielle Simpson",
      "Auguste Turnier"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Colleen Babore",
      "Hae Youn Reichenberg"
     ],
     "a": [
      "Rebecca Mcginnis",
      "Jenn Allen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Dawn Gordon",
      "Laura Whitaker"
     ],
     "a": [
      "Hanna Cutler",
      "Lisa Pinder"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Howard Cetel",
      "Pete Dunn"
     ],
     "a": [
      "Troy Sackawitch",
      "Anthony Strazzeri"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "James Conroy",
      "W Michael Kappeler"
     ],
     "a": [
      "Rob Byrnes",
      "Ira Krassan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Dawn Gordon",
      "Howard Cetel"
     ],
     "a": [
      "Rebecca Mcginnis",
      "Anthony Strazzeri"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Colleen Babore",
      "Pete Dunn"
     ],
     "a": [
      "Hanna Cutler",
      "Troy Sackawitch"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Hae Youn Reichenberg",
      "Tim Haresign"
     ],
     "a": [
      "Lisa Pinder",
      "Ira Krassan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Liezel Thompson",
      "W Michael Kappeler"
     ],
     "a": [
      "Danielle Simpson",
      "Auguste Turnier"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Dawn Gordon",
      "Liezel Thompson"
     ],
     "a": [
      "Jenn Allen",
      "Danielle Simpson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Hae Youn Reichenberg",
      "Laura Whitaker"
     ],
     "a": [
      "Hanna Cutler",
      "Lisa Pinder"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Howard Cetel",
      "Tim Haresign"
     ],
     "a": [
      "Troy Sackawitch",
      "Rob Byrnes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "James Conroy",
      "W Michael Kappeler"
     ],
     "a": [
      "Ira Krassan",
      "Auguste Turnier"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Hae Youn Reichenberg",
      "Tim Haresign"
     ],
     "a": [
      "Lisa Pinder",
      "Rob Byrnes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Colleen Babore",
      "Pete Dunn"
     ],
     "a": [
      "Rebecca Mcginnis",
      "Anthony Strazzeri"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Liezel Thompson",
      "W Michael Kappeler"
     ],
     "a": [
      "Jenn Allen",
      "Auguste Turnier"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Laura Whitaker",
      "James Conroy"
     ],
     "a": [
      "Danielle Simpson",
      "Ira Krassan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Colleen Babore",
      "Dawn Gordon"
     ],
     "a": [
      "Rebecca Mcginnis",
      "Hanna Cutler"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Liezel Thompson",
      "Laura Whitaker"
     ],
     "a": [
      "Jenn Allen",
      "Danielle Simpson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Howard Cetel",
      "Tim Haresign"
     ],
     "a": [
      "Troy Sackawitch",
      "Rob Byrnes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Pete Dunn",
      "James Conroy"
     ],
     "a": [
      "Anthony Strazzeri",
      "Auguste Turnier"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Colleen Babore",
      "Howard Cetel"
     ],
     "a": [
      "Rebecca Mcginnis",
      "Troy Sackawitch"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Dawn Gordon",
      "James Conroy"
     ],
     "a": [
      "Jenn Allen",
      "Rob Byrnes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Hae Youn Reichenberg",
      "Pete Dunn"
     ],
     "a": [
      "Hanna Cutler",
      "Anthony Strazzeri"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Laura Whitaker",
      "W Michael Kappeler"
     ],
     "a": [
      "Lisa Pinder",
      "Ira Krassan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Colleen Babore",
      "Dawn Gordon"
     ],
     "a": [
      "Rebecca Mcginnis",
      "Hanna Cutler"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Hae Youn Reichenberg",
      "Liezel Thompson"
     ],
     "a": [
      "Lisa Pinder",
      "Danielle Simpson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Howard Cetel",
      "Pete Dunn"
     ],
     "a": [
      "Troy Sackawitch",
      "Anthony Strazzeri"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Tim Haresign",
      "W Michael Kappeler"
     ],
     "a": [
      "Ira Krassan",
      "Auguste Turnier"
     ]
    }
   ],
   "subs": [
    "Laura Whitaker",
    "Hanna Cutler"
   ]
  },
  {
   "result": "home",
   "week": 8,
   "home": "Ace & Eights",
   "away": "Kitchen Commanders",
   "time": "2026-08-03T19:00:00",
   "complete": true,
   "homePoints": 656,
   "awayPoints": 503,
   "homeGW": 26,
   "awayGW": 6,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Tinglan Zhao",
      "Greg Taylor"
     ],
     "a": [
      "Lori Frank",
      "Steven Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Joan Rudderow",
      "Dennis Higman"
     ],
     "a": [
      "Brittany Jacobs",
      "Aaron Chan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ginger Evans",
      "Brad Feldman"
     ],
     "a": [
      "Gina Blahut",
      "Dan Matthews"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Amy Neckes",
      "Bill Mcgrory"
     ],
     "a": [
      "Allison Taylor",
      "Joseph Villani"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Tinglan Zhao",
      "Amy Clayman"
     ],
     "a": [
      "Brittany Jacobs",
      "Gina Blahut"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Joan Rudderow",
      "Amy Neckes"
     ],
     "a": [
      "Lori Frank",
      "Sheryl Axelrod"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Greg Taylor",
      "Dennis Higman"
     ],
     "a": [
      "Aaron Chan",
      "Steven Heller"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Bill Mcgrory",
      "Rick Weiser"
     ],
     "a": [
      "Dan Matthews",
      "Martyn Babitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Joan Rudderow",
      "Greg Taylor"
     ],
     "a": [
      "Brittany Jacobs",
      "Steven Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Tinglan Zhao",
      "Dennis Higman"
     ],
     "a": [
      "Lori Frank",
      "Aaron Chan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Amy Clayman",
      "Brad Feldman"
     ],
     "a": [
      "Sheryl Axelrod",
      "Martyn Babitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Ginger Evans",
      "Rick Weiser"
     ],
     "a": [
      "Allison Taylor",
      "Joseph Villani"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Joan Rudderow",
      "Ginger Evans"
     ],
     "a": [
      "Gina Blahut",
      "Allison Taylor"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Amy Clayman",
      "Amy Neckes"
     ],
     "a": [
      "Lori Frank",
      "Sheryl Axelrod"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Greg Taylor",
      "Brad Feldman"
     ],
     "a": [
      "Aaron Chan",
      "Dan Matthews"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Bill Mcgrory",
      "Rick Weiser"
     ],
     "a": [
      "Martyn Babitz",
      "Joseph Villani"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Amy Clayman",
      "Brad Feldman"
     ],
     "a": [
      "Sheryl Axelrod",
      "Dan Matthews"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Tinglan Zhao",
      "Dennis Higman"
     ],
     "a": [
      "Brittany Jacobs",
      "Steven Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Ginger Evans",
      "Rick Weiser"
     ],
     "a": [
      "Gina Blahut",
      "Joseph Villani"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Amy Neckes",
      "Bill Mcgrory"
     ],
     "a": [
      "Allison Taylor",
      "Martyn Babitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Tinglan Zhao",
      "Joan Rudderow"
     ],
     "a": [
      "Brittany Jacobs",
      "Lori Frank"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Ginger Evans",
      "Amy Neckes"
     ],
     "a": [
      "Gina Blahut",
      "Allison Taylor"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Greg Taylor",
      "Brad Feldman"
     ],
     "a": [
      "Aaron Chan",
      "Dan Matthews"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Dennis Higman",
      "Bill Mcgrory"
     ],
     "a": [
      "Steven Heller",
      "Joseph Villani"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Tinglan Zhao",
      "Greg Taylor"
     ],
     "a": [
      "Brittany Jacobs",
      "Aaron Chan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Joan Rudderow",
      "Bill Mcgrory"
     ],
     "a": [
      "Gina Blahut",
      "Dan Matthews"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Amy Clayman",
      "Dennis Higman"
     ],
     "a": [
      "Lori Frank",
      "Steven Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Amy Neckes",
      "Rick Weiser"
     ],
     "a": [
      "Sheryl Axelrod",
      "Martyn Babitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tinglan Zhao",
      "Joan Rudderow"
     ],
     "a": [
      "Brittany Jacobs",
      "Lori Frank"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Amy Clayman",
      "Ginger Evans"
     ],
     "a": [
      "Sheryl Axelrod",
      "Allison Taylor"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Greg Taylor",
      "Dennis Higman"
     ],
     "a": [
      "Aaron Chan",
      "Steven Heller"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Brad Feldman",
      "Rick Weiser"
     ],
     "a": [
      "Martyn Babitz",
      "Joseph Villani"
     ]
    }
   ],
   "subs": [
    "Steven Heller",
    "Allison Taylor",
    "Amy Clayman",
    "Dennis Higman"
   ]
  },
  {
   "result": "home",
   "week": 8,
   "home": "Ace Rebels",
   "away": "ACE ACE Baby",
   "time": "2026-08-05T19:00:00",
   "complete": true,
   "homePoints": 609,
   "awayPoints": 595,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Colleen Babore",
      "Howard Cetel"
     ],
     "a": [
      "Andrea Galanti",
      "Jamie West"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Dawn Gordon",
      "Pete Dunn"
     ],
     "a": [
      "Grace Chung",
      "Lawrence Padersky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Laura Masi",
      "Tim Haresign"
     ],
     "a": [
      "Linda Goss",
      "Steve Traum"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Liezel Thompson",
      "James Conroy"
     ],
     "a": [
      "Colette Mcgarrity",
      "Matthew Tarshis"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Colleen Babore",
      "Hae Youn Reichenberg"
     ],
     "a": [
      "Grace Chung",
      "Linda Goss"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Dawn Gordon",
      "Liezel Thompson"
     ],
     "a": [
      "Andrea Galanti",
      "Allison Taylor"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Howard Cetel",
      "Pete Dunn"
     ],
     "a": [
      "Lawrence Padersky",
      "Jamie West"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "James Conroy",
      "W Michael Kappeler"
     ],
     "a": [
      "Steve Traum",
      "Sam Tuzza"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Dawn Gordon",
      "Howard Cetel"
     ],
     "a": [
      "Grace Chung",
      "Jamie West"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Colleen Babore",
      "Pete Dunn"
     ],
     "a": [
      "Andrea Galanti",
      "Lawrence Padersky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Hae Youn Reichenberg",
      "Tim Haresign"
     ],
     "a": [
      "Allison Taylor",
      "Sam Tuzza"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Laura Masi",
      "W Michael Kappeler"
     ],
     "a": [
      "Colette Mcgarrity",
      "Matthew Tarshis"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Dawn Gordon",
      "Laura Masi"
     ],
     "a": [
      "Linda Goss",
      "Colette Mcgarrity"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Hae Youn Reichenberg",
      "Liezel Thompson"
     ],
     "a": [
      "Andrea Galanti",
      "Allison Taylor"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Howard Cetel",
      "Tim Haresign"
     ],
     "a": [
      "Lawrence Padersky",
      "Steve Traum"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "James Conroy",
      "W Michael Kappeler"
     ],
     "a": [
      "Sam Tuzza",
      "Matthew Tarshis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Hae Youn Reichenberg",
      "Tim Haresign"
     ],
     "a": [
      "Allison Taylor",
      "Steve Traum"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Colleen Babore",
      "Pete Dunn"
     ],
     "a": [
      "Grace Chung",
      "Jamie West"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Laura Masi",
      "W Michael Kappeler"
     ],
     "a": [
      "Linda Goss",
      "Matthew Tarshis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Liezel Thompson",
      "James Conroy"
     ],
     "a": [
      "Colette Mcgarrity",
      "Sam Tuzza"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Colleen Babore",
      "Dawn Gordon"
     ],
     "a": [
      "Grace Chung",
      "Andrea Galanti"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Laura Masi",
      "Liezel Thompson"
     ],
     "a": [
      "Linda Goss",
      "Colette Mcgarrity"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Howard Cetel",
      "Tim Haresign"
     ],
     "a": [
      "Lawrence Padersky",
      "Steve Traum"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Pete Dunn",
      "James Conroy"
     ],
     "a": [
      "Jamie West",
      "Matthew Tarshis"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Colleen Babore",
      "Howard Cetel"
     ],
     "a": [
      "Grace Chung",
      "Lawrence Padersky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Dawn Gordon",
      "James Conroy"
     ],
     "a": [
      "Linda Goss",
      "Steve Traum"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Hae Youn Reichenberg",
      "Pete Dunn"
     ],
     "a": [
      "Andrea Galanti",
      "Jamie West"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Liezel Thompson",
      "W Michael Kappeler"
     ],
     "a": [
      "Allison Taylor",
      "Sam Tuzza"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Colleen Babore",
      "Dawn Gordon"
     ],
     "a": [
      "Grace Chung",
      "Andrea Galanti"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Hae Youn Reichenberg",
      "Laura Masi"
     ],
     "a": [
      "Allison Taylor",
      "Colette Mcgarrity"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Howard Cetel",
      "Pete Dunn"
     ],
     "a": [
      "Lawrence Padersky",
      "Jamie West"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Tim Haresign",
      "W Michael Kappeler"
     ],
     "a": [
      "Sam Tuzza",
      "Matthew Tarshis"
     ]
    }
   ],
   "subs": [
    "Allison Taylor",
    "Grace Chung"
   ]
  },
  {
   "result": "home",
   "week": 8,
   "home": "Ace Bandits",
   "away": "Kitchen Commanders",
   "time": "2026-08-05T19:00:00",
   "complete": true,
   "homePoints": 641,
   "awayPoints": 609,
   "homeGW": 20,
   "awayGW": 12,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Rebecca Mcginnis",
      "Troy Sackawitch"
     ],
     "a": [
      "Angeli Dungca",
      "Jason Fingerman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Dana Sheply",
      "Ira Krassan"
     ],
     "a": [
      "Carissa Nicdao",
      "Aaron Chan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Danielle Simpson",
      "Anthony Strazzeri"
     ],
     "a": [
      "Lori Frank",
      "Steven Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Hanna Cutler",
      "Rob Byrnes"
     ],
     "a": [
      "Sheryl Axelrod",
      "Dan Matthews"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Rebecca Mcginnis",
      "Hanna Cutler"
     ],
     "a": [
      "Carissa Nicdao",
      "Lori Frank"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Dana Sheply",
      "Danielle Simpson"
     ],
     "a": [
      "Angeli Dungca",
      "Brittany Jacobs"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Troy Sackawitch",
      "Ira Krassan"
     ],
     "a": [
      "Jason Fingerman",
      "Aaron Chan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Rob Byrnes",
      "Richard Gold"
     ],
     "a": [
      "Steven Heller",
      "Salvatore Caminito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Dana Sheply",
      "Troy Sackawitch"
     ],
     "a": [
      "Carissa Nicdao",
      "Jason Fingerman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Rebecca Mcginnis",
      "Ira Krassan"
     ],
     "a": [
      "Angeli Dungca",
      "Aaron Chan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Danielle Simpson",
      "Anthony Strazzeri"
     ],
     "a": [
      "Brittany Jacobs",
      "Salvatore Caminito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Hanna Cutler",
      "Richard Gold"
     ],
     "a": [
      "Sheryl Axelrod",
      "Dan Matthews"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Rebecca Mcginnis",
      "Dana Sheply"
     ],
     "a": [
      "Carissa Nicdao",
      "Brittany Jacobs"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Hanna Cutler",
      "Danielle Simpson"
     ],
     "a": [
      "Lori Frank",
      "Sheryl Axelrod"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Ira Krassan",
      "Anthony Strazzeri"
     ],
     "a": [
      "Aaron Chan",
      "Steven Heller"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Rob Byrnes",
      "Richard Gold"
     ],
     "a": [
      "Dan Matthews",
      "Salvatore Caminito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Dana Sheply",
      "Troy Sackawitch"
     ],
     "a": [
      "Angeli Dungca",
      "Steven Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Rebecca Mcginnis",
      "Anthony Strazzeri"
     ],
     "a": [
      "Brittany Jacobs",
      "Jason Fingerman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Hanna Cutler",
      "Richard Gold"
     ],
     "a": [
      "Lori Frank",
      "Dan Matthews"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Danielle Simpson",
      "Rob Byrnes"
     ],
     "a": [
      "Sheryl Axelrod",
      "Salvatore Caminito"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Rebecca Mcginnis",
      "Dana Sheply"
     ],
     "a": [
      "Angeli Dungca",
      "Carissa Nicdao"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Hanna Cutler",
      "Danielle Simpson"
     ],
     "a": [
      "Lori Frank",
      "Sheryl Axelrod"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Troy Sackawitch",
      "Anthony Strazzeri"
     ],
     "a": [
      "Aaron Chan",
      "Dan Matthews"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Ira Krassan",
      "Rob Byrnes"
     ],
     "a": [
      "Jason Fingerman",
      "Steven Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Rebecca Mcginnis",
      "Troy Sackawitch"
     ],
     "a": [
      "Carissa Nicdao",
      "Aaron Chan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Dana Sheply",
      "Ira Krassan"
     ],
     "a": [
      "Angeli Dungca",
      "Jason Fingerman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Hanna Cutler",
      "Rob Byrnes"
     ],
     "a": [
      "Brittany Jacobs",
      "Steven Heller"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Danielle Simpson",
      "Richard Gold"
     ],
     "a": [
      "Lori Frank",
      "Salvatore Caminito"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Rebecca Mcginnis",
      "Hanna Cutler"
     ],
     "a": [
      "Angeli Dungca",
      "Brittany Jacobs"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Dana Sheply",
      "Danielle Simpson"
     ],
     "a": [
      "Carissa Nicdao",
      "Sheryl Axelrod"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Troy Sackawitch",
      "Ira Krassan"
     ],
     "a": [
      "Jason Fingerman",
      "Aaron Chan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Anthony Strazzeri",
      "Richard Gold"
     ],
     "a": [
      "Dan Matthews",
      "Salvatore Caminito"
     ]
    }
   ],
   "subs": [
    "Angeli Dungca",
    "Steven Heller",
    "Jason Fingerman",
    "Carissa Nicdao",
    "Hanna Cutler"
   ]
  },
  {
   "result": "home",
   "week": 9,
   "home": "ACE ACE Baby",
   "away": "Ace Bandits",
   "time": "2026-08-12T19:00:00",
   "complete": true,
   "homePoints": 608,
   "awayPoints": 583,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Andrea Schwab",
      "Lawrence Padersky"
     ],
     "a": [
      "Rebecca Mcginnis",
      "Anthony Strazzeri"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Andrea Galanti",
      "Jamie West"
     ],
     "a": [
      "Dana Sheply",
      "Rob Byrnes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Linda Goss",
      "Mustafa Kodwavi"
     ],
     "a": [
      "Lisa Pinder",
      "Luke Beri"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Barb Mulckhuyse",
      "Matthew Tarshis"
     ],
     "a": [
      "Hanna Cutler",
      "Auguste Turnier"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Andrea Schwab",
      "Andrea Galanti"
     ],
     "a": [
      "Rebecca Mcginnis",
      "Dana Sheply"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Linda Goss",
      "Colette Mcgarrity"
     ],
     "a": [
      "Hanna Cutler",
      "Danielle Simpson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jamie West",
      "Mustafa Kodwavi"
     ],
     "a": [
      "Anthony Strazzeri",
      "Auguste Turnier"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Lawrence Padersky",
      "Sam Tuzza"
     ],
     "a": [
      "Rob Byrnes",
      "Luke Beri"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Andrea Schwab",
      "Jamie West"
     ],
     "a": [
      "Rebecca Mcginnis",
      "Rob Byrnes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Andrea Galanti",
      "Lawrence Padersky"
     ],
     "a": [
      "Dana Sheply",
      "Anthony Strazzeri"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Colette Mcgarrity",
      "Sam Tuzza"
     ],
     "a": [
      "Lisa Pinder",
      "Luke Beri"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Barb Mulckhuyse",
      "Matthew Tarshis"
     ],
     "a": [
      "Danielle Simpson",
      "Auguste Turnier"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Andrea Galanti",
      "Linda Goss"
     ],
     "a": [
      "Dana Sheply",
      "Lisa Pinder"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Barb Mulckhuyse",
      "Colette Mcgarrity"
     ],
     "a": [
      "Hanna Cutler",
      "Danielle Simpson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jamie West",
      "Sam Tuzza"
     ],
     "a": [
      "Anthony Strazzeri",
      "Rob Byrnes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Mustafa Kodwavi",
      "Matthew Tarshis"
     ],
     "a": [
      "Auguste Turnier",
      "Luke Beri"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Linda Goss",
      "Lawrence Padersky"
     ],
     "a": [
      "Rebecca Mcginnis",
      "Rob Byrnes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Andrea Schwab",
      "Sam Tuzza"
     ],
     "a": [
      "Lisa Pinder",
      "Anthony Strazzeri"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Barb Mulckhuyse",
      "Mustafa Kodwavi"
     ],
     "a": [
      "Danielle Simpson",
      "Auguste Turnier"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Colette Mcgarrity",
      "Matthew Tarshis"
     ],
     "a": [
      "Hanna Cutler",
      "Luke Beri"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Andrea Galanti",
      "Barb Mulckhuyse"
     ],
     "a": [
      "Rebecca Mcginnis",
      "Lisa Pinder"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Andrea Schwab",
      "Linda Goss"
     ],
     "a": [
      "Dana Sheply",
      "Hanna Cutler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lawrence Padersky",
      "Jamie West"
     ],
     "a": [
      "Anthony Strazzeri",
      "Rob Byrnes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Mustafa Kodwavi",
      "Matthew Tarshis"
     ],
     "a": [
      "Auguste Turnier",
      "Luke Beri"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Andrea Galanti",
      "Jamie West"
     ],
     "a": [
      "Rebecca Mcginnis",
      "Anthony Strazzeri"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Andrea Schwab",
      "Lawrence Padersky"
     ],
     "a": [
      "Dana Sheply",
      "Rob Byrnes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Linda Goss",
      "Sam Tuzza"
     ],
     "a": [
      "Hanna Cutler",
      "Auguste Turnier"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Colette Mcgarrity",
      "Mustafa Kodwavi"
     ],
     "a": [
      "Danielle Simpson",
      "Luke Beri"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Andrea Schwab",
      "Andrea Galanti"
     ],
     "a": [
      "Rebecca Mcginnis",
      "Dana Sheply"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Barb Mulckhuyse",
      "Colette Mcgarrity"
     ],
     "a": [
      "Lisa Pinder",
      "Danielle Simpson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lawrence Padersky",
      "Sam Tuzza"
     ],
     "a": [
      "Anthony Strazzeri",
      "Auguste Turnier"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jamie West",
      "Matthew Tarshis"
     ],
     "a": [
      "Rob Byrnes",
      "Luke Beri"
     ]
    }
   ],
   "subs": [
    "Hanna Cutler",
    "Luke Beri"
   ]
  },
  {
   "result": "home",
   "week": 9,
   "home": "Ace & Eights",
   "away": "Ace Rebels",
   "time": "2026-08-12T19:00:00",
   "complete": true,
   "homePoints": 661,
   "awayPoints": 518,
   "homeGW": 26,
   "awayGW": 6,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Ginger Evans",
      "Marc Witte"
     ],
     "a": [
      "Dawn Gordon",
      "Pete Dunn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Tinglan Zhao",
      "Brad Feldman"
     ],
     "a": [
      "Colleen Babore",
      "Pete Certo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Amy Neckes",
      "Dennis Higman"
     ],
     "a": [
      "Hae Youn Reichenberg",
      "James Conroy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Marjean Stokes",
      "Reg Blaber"
     ],
     "a": [
      "Liezel Thompson",
      "Marvell Whitley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Ginger Evans",
      "Joan Rudderow"
     ],
     "a": [
      "Colleen Babore",
      "Hae Youn Reichenberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Tinglan Zhao",
      "Marjean Stokes"
     ],
     "a": [
      "Dawn Gordon",
      "Laura Masi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Marc Witte",
      "Brad Feldman"
     ],
     "a": [
      "Pete Certo",
      "Pete Dunn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Reg Blaber",
      "Bill Mcgrory"
     ],
     "a": [
      "James Conroy",
      "Tim Haresign"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Tinglan Zhao",
      "Marc Witte"
     ],
     "a": [
      "Colleen Babore",
      "Pete Dunn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Ginger Evans",
      "Brad Feldman"
     ],
     "a": [
      "Dawn Gordon",
      "Pete Certo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Joan Rudderow",
      "Dennis Higman"
     ],
     "a": [
      "Laura Masi",
      "Tim Haresign"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Amy Neckes",
      "Bill Mcgrory"
     ],
     "a": [
      "Liezel Thompson",
      "Marvell Whitley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Tinglan Zhao",
      "Amy Neckes"
     ],
     "a": [
      "Hae Youn Reichenberg",
      "Liezel Thompson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Joan Rudderow",
      "Marjean Stokes"
     ],
     "a": [
      "Dawn Gordon",
      "Laura Masi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Marc Witte",
      "Dennis Higman"
     ],
     "a": [
      "Pete Certo",
      "James Conroy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Reg Blaber",
      "Bill Mcgrory"
     ],
     "a": [
      "Tim Haresign",
      "Marvell Whitley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Joan Rudderow",
      "Dennis Higman"
     ],
     "a": [
      "Laura Masi",
      "James Conroy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Ginger Evans",
      "Brad Feldman"
     ],
     "a": [
      "Colleen Babore",
      "Pete Dunn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Amy Neckes",
      "Bill Mcgrory"
     ],
     "a": [
      "Hae Youn Reichenberg",
      "Marvell Whitley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Marjean Stokes",
      "Reg Blaber"
     ],
     "a": [
      "Liezel Thompson",
      "Tim Haresign"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Ginger Evans",
      "Tinglan Zhao"
     ],
     "a": [
      "Colleen Babore",
      "Dawn Gordon"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Amy Neckes",
      "Marjean Stokes"
     ],
     "a": [
      "Hae Youn Reichenberg",
      "Liezel Thompson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Marc Witte",
      "Dennis Higman"
     ],
     "a": [
      "Pete Certo",
      "James Conroy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Brad Feldman",
      "Reg Blaber"
     ],
     "a": [
      "Pete Dunn",
      "Marvell Whitley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Ginger Evans",
      "Marc Witte"
     ],
     "a": [
      "Colleen Babore",
      "Pete Certo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Tinglan Zhao",
      "Reg Blaber"
     ],
     "a": [
      "Hae Youn Reichenberg",
      "James Conroy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Joan Rudderow",
      "Brad Feldman"
     ],
     "a": [
      "Dawn Gordon",
      "Pete Dunn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Marjean Stokes",
      "Bill Mcgrory"
     ],
     "a": [
      "Laura Masi",
      "Tim Haresign"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Ginger Evans",
      "Tinglan Zhao"
     ],
     "a": [
      "Colleen Babore",
      "Dawn Gordon"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 3,
     "h": [
      "Joan Rudderow",
      "Amy Neckes"
     ],
     "a": [
      "Laura Masi",
      "Liezel Thompson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Marc Witte",
      "Brad Feldman"
     ],
     "a": [
      "Pete Certo",
      "Pete Dunn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Dennis Higman",
      "Bill Mcgrory"
     ],
     "a": [
      "Tim Haresign",
      "Marvell Whitley"
     ]
    }
   ],
   "subs": [
    "Reg Blaber",
    "Dennis Higman"
   ]
  },
  {
   "result": "home",
   "week": 10,
   "home": "Kitchen Commanders",
   "away": "Ace Rebels",
   "time": "2026-08-19T19:00:00",
   "complete": true,
   "homePoints": 641,
   "awayPoints": 596,
   "homeGW": 20,
   "awayGW": 12,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kelley Batejan",
      "Jason Fingerman"
     ],
     "a": [
      "Dawn Gordon",
      "Pete Dunn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Angeli Dungca",
      "Steven Heller"
     ],
     "a": [
      "Colleen Babore",
      "Pete Certo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Gina Blahut",
      "Dan Matthews"
     ],
     "a": [
      "Illyce Katz",
      "James Conroy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Sheryl Axelrod",
      "Martyn Babitz"
     ],
     "a": [
      "Laura Masi",
      "W Michael Kappeler"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kelley Batejan",
      "Brittany Jacobs"
     ],
     "a": [
      "Colleen Babore",
      "Illyce Katz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Angeli Dungca",
      "Sheryl Axelrod"
     ],
     "a": [
      "Dawn Gordon",
      "Hae Youn Reichenberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jason Fingerman",
      "Steven Heller"
     ],
     "a": [
      "Pete Certo",
      "Pete Dunn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Martyn Babitz",
      "Joseph Villani"
     ],
     "a": [
      "James Conroy",
      "Tim Haresign"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Angeli Dungca",
      "Jason Fingerman"
     ],
     "a": [
      "Colleen Babore",
      "Pete Dunn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kelley Batejan",
      "Steven Heller"
     ],
     "a": [
      "Dawn Gordon",
      "Pete Certo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Brittany Jacobs",
      "Dan Matthews"
     ],
     "a": [
      "Hae Youn Reichenberg",
      "Tim Haresign"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Gina Blahut",
      "Joseph Villani"
     ],
     "a": [
      "Laura Masi",
      "W Michael Kappeler"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Angeli Dungca",
      "Gina Blahut"
     ],
     "a": [
      "Illyce Katz",
      "Laura Masi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Brittany Jacobs",
      "Sheryl Axelrod"
     ],
     "a": [
      "Dawn Gordon",
      "Hae Youn Reichenberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jason Fingerman",
      "Dan Matthews"
     ],
     "a": [
      "Pete Certo",
      "James Conroy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Martyn Babitz",
      "Joseph Villani"
     ],
     "a": [
      "Tim Haresign",
      "W Michael Kappeler"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Brittany Jacobs",
      "Dan Matthews"
     ],
     "a": [
      "Hae Youn Reichenberg",
      "James Conroy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kelley Batejan",
      "Steven Heller"
     ],
     "a": [
      "Colleen Babore",
      "Pete Dunn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Gina Blahut",
      "Joseph Villani"
     ],
     "a": [
      "Illyce Katz",
      "W Michael Kappeler"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sheryl Axelrod",
      "Martyn Babitz"
     ],
     "a": [
      "Laura Masi",
      "Tim Haresign"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Kelley Batejan",
      "Angeli Dungca"
     ],
     "a": [
      "Colleen Babore",
      "Dawn Gordon"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Gina Blahut",
      "Sheryl Axelrod"
     ],
     "a": [
      "Illyce Katz",
      "Laura Masi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jason Fingerman",
      "Dan Matthews"
     ],
     "a": [
      "Pete Certo",
      "James Conroy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Steven Heller",
      "Martyn Babitz"
     ],
     "a": [
      "Pete Dunn",
      "W Michael Kappeler"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Kelley Batejan",
      "Jason Fingerman"
     ],
     "a": [
      "Colleen Babore",
      "Pete Certo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Angeli Dungca",
      "Martyn Babitz"
     ],
     "a": [
      "Illyce Katz",
      "James Conroy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Brittany Jacobs",
      "Steven Heller"
     ],
     "a": [
      "Dawn Gordon",
      "Pete Dunn"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Sheryl Axelrod",
      "Joseph Villani"
     ],
     "a": [
      "Hae Youn Reichenberg",
      "Tim Haresign"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kelley Batejan",
      "Angeli Dungca"
     ],
     "a": [
      "Colleen Babore",
      "Dawn Gordon"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Brittany Jacobs",
      "Gina Blahut"
     ],
     "a": [
      "Hae Youn Reichenberg",
      "Laura Masi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jason Fingerman",
      "Steven Heller"
     ],
     "a": [
      "Pete Certo",
      "Pete Dunn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Dan Matthews",
      "Joseph Villani"
     ],
     "a": [
      "Tim Haresign",
      "W Michael Kappeler"
     ]
    }
   ],
   "subs": [
    "Angeli Dungca",
    "Steven Heller",
    "Jason Fingerman"
   ]
  },
  {
   "result": "away",
   "week": 10,
   "home": "ACE ACE Baby",
   "away": "Ace & Eights",
   "time": "2026-08-19T19:00:00",
   "complete": true,
   "homePoints": 527,
   "awayPoints": 618,
   "homeGW": 10,
   "awayGW": 22,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Andrea Galanti",
      "Lawrence Padersky"
     ],
     "a": [
      "Amy Neckes",
      "Rick Weiser"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Linda Goss",
      "Sam Tuzza"
     ],
     "a": [
      "Tinglan Zhao",
      "Marc Witte"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Amy Long",
      "Mustafa Kodwavi"
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
     "as": 11,
     "h": [
      "Colette Mcgarrity",
      "Jamie West"
     ],
     "a": [
      "Marjean Stokes",
      "Anthony Viola"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Andrea Galanti",
      "Barb Mulckhuyse"
     ],
     "a": [
      "Tinglan Zhao",
      "Joan Rudderow"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Linda Goss",
      "Colette Mcgarrity"
     ],
     "a": [
      "Amy Neckes",
      "Amy Clayman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lawrence Padersky",
      "Sam Tuzza"
     ],
     "a": [
      "Marc Witte",
      "Rick Weiser"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Jamie West",
      "Andrew Ravitz"
     ],
     "a": [
      "Dennis Higman",
      "Bill Mcgrory"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Linda Goss",
      "Lawrence Padersky"
     ],
     "a": [
      "Tinglan Zhao",
      "Rick Weiser"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Andrea Galanti",
      "Sam Tuzza"
     ],
     "a": [
      "Amy Neckes",
      "Marc Witte"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Barb Mulckhuyse",
      "Mustafa Kodwavi"
     ],
     "a": [
      "Amy Clayman",
      "Bill Mcgrory"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Amy Long",
      "Andrew Ravitz"
     ],
     "a": [
      "Marjean Stokes",
      "Anthony Viola"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Linda Goss",
      "Amy Long"
     ],
     "a": [
      "Joan Rudderow",
      "Marjean Stokes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Barb Mulckhuyse",
      "Colette Mcgarrity"
     ],
     "a": [
      "Amy Neckes",
      "Amy Clayman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Lawrence Padersky",
      "Mustafa Kodwavi"
     ],
     "a": [
      "Marc Witte",
      "Dennis Higman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Jamie West",
      "Andrew Ravitz"
     ],
     "a": [
      "Bill Mcgrory",
      "Anthony Viola"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Barb Mulckhuyse",
      "Mustafa Kodwavi"
     ],
     "a": [
      "Amy Clayman",
      "Dennis Higman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Andrea Galanti",
      "Sam Tuzza"
     ],
     "a": [
      "Tinglan Zhao",
      "Rick Weiser"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Amy Long",
      "Andrew Ravitz"
     ],
     "a": [
      "Joan Rudderow",
      "Anthony Viola"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Colette Mcgarrity",
      "Jamie West"
     ],
     "a": [
      "Marjean Stokes",
      "Bill Mcgrory"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Andrea Galanti",
      "Linda Goss"
     ],
     "a": [
      "Tinglan Zhao",
      "Amy Neckes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Amy Long",
      "Colette Mcgarrity"
     ],
     "a": [
      "Joan Rudderow",
      "Marjean Stokes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lawrence Padersky",
      "Mustafa Kodwavi"
     ],
     "a": [
      "Marc Witte",
      "Dennis Higman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Sam Tuzza",
      "Jamie West"
     ],
     "a": [
      "Rick Weiser",
      "Anthony Viola"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Andrea Galanti",
      "Lawrence Padersky"
     ],
     "a": [
      "Tinglan Zhao",
      "Marc Witte"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Linda Goss",
      "Jamie West"
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
      "Barb Mulckhuyse",
      "Sam Tuzza"
     ],
     "a": [
      "Amy Neckes",
      "Rick Weiser"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Colette Mcgarrity",
      "Andrew Ravitz"
     ],
     "a": [
      "Amy Clayman",
      "Bill Mcgrory"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Andrea Galanti",
      "Linda Goss"
     ],
     "a": [
      "Tinglan Zhao",
      "Amy Neckes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Barb Mulckhuyse",
      "Amy Long"
     ],
     "a": [
      "Amy Clayman",
      "Marjean Stokes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lawrence Padersky",
      "Sam Tuzza"
     ],
     "a": [
      "Marc Witte",
      "Rick Weiser"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Mustafa Kodwavi",
      "Andrew Ravitz"
     ],
     "a": [
      "Bill Mcgrory",
      "Anthony Viola"
     ]
    }
   ],
   "subs": [
    "Amy Clayman",
    "Anthony Viola",
    "Dennis Higman",
    "Amy Long"
   ]
  }
 ],
 "playoffs": [],
 "extraPlayerIds": {
  "Scott Auty": "53024744-72eb-4d56-b0c9-93a6201bdc33",
  "Amy Moore": "c037ad35-3550-447f-af7f-f62674d0c1ac"
 },
 "meta": {
  "matchesPlayed": 20,
  "provisionalMatches": 0,
  "weeks": "1-10",
  "totalPlayers": 80,
  "ratingHistoryWeeks": [
   1,
   2,
   3,
   4,
   5,
   6,
   8,
   9,
   10
  ],
  "divisionSlug": "c9a2c0fe",
  "hasPlayoffs": false,
  "typicalDay": "Wednesdays",
  "detailFile": "detail-c9a2c0fe.js",
  "clubName": "Ace - Moorestown / Voorhees",
  "divisionName": "3.75 & Under",
  "leagueType": "local",
  "seasonSlug": "2026-summer",
  "seasonLabel": "Summer 2026",
  "seasonStatus": "current",
  "podCount": 1,
  "podNames": null,
  "podSource": "schedule",
  "reportedPods": null
 }
};
  DATA.meta.asOf = "2026-08-28T16:17:44.216Z";
  window.DATA = DATA;
  window.CPL_DATASETS = window.CPL_DATASETS || {};
  window.CPL_DATASETS["c9a2c0fe"] = DATA;
})();
