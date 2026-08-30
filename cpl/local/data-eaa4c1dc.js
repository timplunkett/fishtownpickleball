(function () {
  const DATA = {
 "players": [
  {
   "name": "Thomas Connolly",
   "gender": "Male",
   "team": "Draft Day Disasters",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 166,
   "totalPointsAgainst": 133,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3",
   "winPct": 87.5,
   "diff": 33,
   "ppg": 20.8,
   "leagueRank": 21,
   "rating": 3.6,
   "ratingGames": 8,
   "confidence": 62,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.6
  },
  {
   "name": "Ross Switkes",
   "gender": "Male",
   "team": "Color Coordinated Chaos",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 68,
   "wins": 55,
   "losses": 13,
   "pointsWon": 1370,
   "totalPointsAgainst": 1124,
   "mixedWins": 26,
   "mixedLosses": 8,
   "genderWins": 29,
   "genderLosses": 5,
   "clutchWins": 17,
   "clutchLosses": 5,
   "winPct": 80.9,
   "diff": 246,
   "ppg": 20.1,
   "leagueRank": 1,
   "rating": 4.9,
   "ratingGames": 68,
   "confidence": 88,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.8,
   "playerId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b"
  },
  {
   "name": "Barbara Hess",
   "gender": "Female",
   "team": "The Dill Inquents",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 12,
   "losses": 3,
   "pointsWon": 303,
   "totalPointsAgainst": 245,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 7,
   "genderLosses": 0,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 80,
   "diff": 58,
   "ppg": 20.2,
   "leagueRank": 2,
   "rating": 2.9,
   "ratingGames": 15,
   "confidence": 73,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.4,
   "playerId": "21baa2cb-e882-442e-a5e0-a6d88126c9c3"
  },
  {
   "name": "Patricia Kavanaugh",
   "gender": "Female",
   "team": "Color Coordinated Chaos",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 26,
   "losses": 11,
   "pointsWon": 726,
   "totalPointsAgainst": 647,
   "mixedWins": 14,
   "mixedLosses": 4,
   "genderWins": 12,
   "genderLosses": 7,
   "clutchWins": 7,
   "clutchLosses": 4,
   "winPct": 70.3,
   "diff": 79,
   "ppg": 19.6,
   "leagueRank": 4,
   "rating": 0.6,
   "ratingGames": 37,
   "confidence": 86,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.6,
   "playerId": "9e2b45ad-e99b-4786-915c-d89e1d1bfee2"
  },
  {
   "name": "Christine Papa",
   "gender": "Female",
   "team": "Ackley's Aces",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 29,
   "losses": 13,
   "pointsWon": 808,
   "totalPointsAgainst": 741,
   "mixedWins": 13,
   "mixedLosses": 8,
   "genderWins": 16,
   "genderLosses": 5,
   "clutchWins": 6,
   "clutchLosses": 2,
   "winPct": 69,
   "diff": 67,
   "ppg": 19.2,
   "leagueRank": 3,
   "rating": 0.5,
   "ratingGames": 42,
   "confidence": 86,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.3,
   "playerId": "d156a552-7fa9-488e-9bfa-745feb859950"
  },
  {
   "name": "Richard Demeuse",
   "gender": "Male",
   "team": "Color Coordinated Chaos",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 50,
   "wins": 34,
   "losses": 16,
   "pointsWon": 975,
   "totalPointsAgainst": 874,
   "mixedWins": 17,
   "mixedLosses": 8,
   "genderWins": 17,
   "genderLosses": 8,
   "clutchWins": 9,
   "clutchLosses": 6,
   "winPct": 68,
   "diff": 101,
   "ppg": 19.5,
   "leagueRank": 8,
   "rating": 0.2,
   "ratingGames": 50,
   "confidence": 88,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.9,
   "playerId": "d88f1d1e-be4e-449e-b9b2-c468753e1dd3"
  },
  {
   "name": "Robbie Oddy",
   "gender": "Male",
   "team": "Draft Day Disasters",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 12,
   "losses": 6,
   "pointsWon": 352,
   "totalPointsAgainst": 320,
   "mixedWins": 5,
   "mixedLosses": 4,
   "genderWins": 7,
   "genderLosses": 2,
   "clutchWins": 6,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 32,
   "ppg": 19.6,
   "leagueRank": 7,
   "rating": 3.2,
   "ratingGames": 18,
   "confidence": 77,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 1.2,
   "playerId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6"
  },
  {
   "name": "Jay Alquiros",
   "gender": "Male",
   "team": "Draft Day Disasters",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 119,
   "totalPointsAgainst": 116,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 1,
   "playerId": "a3dbb909-29a5-4aa0-a40f-42bed311f9cd",
   "winPct": 66.7,
   "diff": 3,
   "ppg": 19.8,
   "leagueRank": 53,
   "rating": 0.7,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.5
  },
  {
   "name": "Susan Ackley",
   "gender": "Female",
   "team": "Ackley's Aces",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 52,
   "wins": 33,
   "losses": 19,
   "pointsWon": 1021,
   "totalPointsAgainst": 915,
   "mixedWins": 14,
   "mixedLosses": 13,
   "genderWins": 19,
   "genderLosses": 6,
   "clutchWins": 8,
   "clutchLosses": 11,
   "winPct": 63.5,
   "diff": 106,
   "ppg": 19.6,
   "leagueRank": 5,
   "rating": 2.4,
   "ratingGames": 52,
   "confidence": 87,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.7,
   "playerId": "07a0e948-6308-4920-a6a8-1d5945552ecb"
  },
  {
   "name": "Tim Dowd",
   "gender": "Male",
   "team": "Color Coordinated Chaos",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 145,
   "totalPointsAgainst": 153,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "b7555b30-f1b5-4d44-9eff-dffd3e1b1b28",
   "winPct": 62.5,
   "diff": -8,
   "ppg": 18.1,
   "leagueRank": 57,
   "rating": -0.6,
   "ratingGames": 8,
   "confidence": 61,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.6
  },
  {
   "name": "Scott Rubin",
   "gender": "Male",
   "team": "Color Coordinated Chaos",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 11,
   "losses": 7,
   "pointsWon": 347,
   "totalPointsAgainst": 316,
   "mixedWins": 6,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 61.1,
   "diff": 31,
   "ppg": 19.3,
   "leagueRank": 28,
   "rating": -0.5,
   "ratingGames": 18,
   "confidence": 75,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": -1.5,
   "playerId": "c12175df-b959-4efe-95e7-e5298b783da8"
  },
  {
   "name": "Carol Mastroianni",
   "gender": "Female",
   "team": "Ackley's Aces",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 23,
   "losses": 15,
   "pointsWon": 733,
   "totalPointsAgainst": 649,
   "mixedWins": 11,
   "mixedLosses": 8,
   "genderWins": 12,
   "genderLosses": 7,
   "clutchWins": 7,
   "clutchLosses": 7,
   "winPct": 60.5,
   "diff": 84,
   "ppg": 19.3,
   "leagueRank": 6,
   "rating": 2.6,
   "ratingGames": 38,
   "confidence": 85,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.4,
   "playerId": "7f851011-9322-43f9-aff2-754565a615c7"
  },
  {
   "name": "John Lottier",
   "gender": "Male",
   "team": "Draft Day Disasters",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 15,
   "losses": 10,
   "pointsWon": 467,
   "totalPointsAgainst": 468,
   "mixedWins": 6,
   "mixedLosses": 6,
   "genderWins": 9,
   "genderLosses": 4,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 60,
   "diff": -1,
   "ppg": 18.7,
   "leagueRank": 11,
   "rating": -1.2,
   "ratingGames": 25,
   "confidence": 80,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.9,
   "playerId": "d1541ad0-e7fc-4783-949a-8f3f1ce9722d"
  },
  {
   "name": "Denise Richmond",
   "gender": "Female",
   "team": "Color Coordinated Chaos",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 44,
   "wins": 26,
   "losses": 18,
   "pointsWon": 832,
   "totalPointsAgainst": 784,
   "mixedWins": 13,
   "mixedLosses": 9,
   "genderWins": 13,
   "genderLosses": 9,
   "clutchWins": 7,
   "clutchLosses": 5,
   "winPct": 59.1,
   "diff": 48,
   "ppg": 18.9,
   "leagueRank": 16,
   "rating": -0.2,
   "ratingGames": 44,
   "confidence": 87,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.7,
   "playerId": "422cd941-43db-4123-a07e-3316583f51ee"
  },
  {
   "name": "Chanda Mccoy",
   "gender": "Female",
   "team": "Draft Day Disasters",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 23,
   "losses": 16,
   "pointsWon": 742,
   "totalPointsAgainst": 704,
   "mixedWins": 11,
   "mixedLosses": 9,
   "genderWins": 12,
   "genderLosses": 7,
   "clutchWins": 9,
   "clutchLosses": 5,
   "winPct": 59,
   "diff": 38,
   "ppg": 19,
   "leagueRank": 9,
   "rating": 1.4,
   "ratingGames": 39,
   "confidence": 86,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.5,
   "playerId": "30cb78cb-f962-40f9-bd02-78d336920431"
  },
  {
   "name": "Bill Brandt",
   "gender": "Male",
   "team": "Draft Day Disasters",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 21,
   "losses": 15,
   "pointsWon": 673,
   "totalPointsAgainst": 642,
   "mixedWins": 10,
   "mixedLosses": 8,
   "genderWins": 11,
   "genderLosses": 7,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 58.3,
   "diff": 31,
   "ppg": 18.7,
   "leagueRank": 12,
   "rating": 0,
   "ratingGames": 36,
   "confidence": 85,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.3,
   "playerId": "dc530014-0e3b-4485-b265-8555bafe6e19"
  },
  {
   "name": "Kristen Soucie",
   "gender": "Female",
   "team": "Color Coordinated Chaos",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 7,
   "losses": 5,
   "pointsWon": 222,
   "totalPointsAgainst": 213,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "8ebf2370-8a82-495e-97ea-5168dd2b14c4",
   "winPct": 58.3,
   "diff": 9,
   "ppg": 18.5,
   "leagueRank": 51,
   "rating": -0.4,
   "ratingGames": 12,
   "confidence": 71,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.9
  },
  {
   "name": "Jamison Rowles",
   "gender": "Male",
   "team": "Color Coordinated Chaos",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 134,
   "totalPointsAgainst": 125,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "cae7c2db-b4d5-4927-9c44-ff92176b5507",
   "winPct": 57.1,
   "diff": 9,
   "ppg": 19.1,
   "leagueRank": 56,
   "rating": 0.4,
   "ratingGames": 7,
   "confidence": 59,
   "strengthOfPartners": 2,
   "strengthOfOpponents": 0.6
  },
  {
   "name": "Johanna Kreilick",
   "gender": "Female",
   "team": "Draft Day Disasters",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 9,
   "losses": 7,
   "pointsWon": 298,
   "totalPointsAgainst": 286,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "ccd0807d-67ac-4dbc-a7c7-4b4df3dea598",
   "winPct": 56.3,
   "diff": 12,
   "ppg": 18.6,
   "leagueRank": 23,
   "rating": 0.4,
   "ratingGames": 16,
   "confidence": 76,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.2
  },
  {
   "name": "Bob Drinane",
   "gender": "Male",
   "team": "The Dill Inquents",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 16,
   "losses": 14,
   "pointsWon": 571,
   "totalPointsAgainst": 528,
   "mixedWins": 9,
   "mixedLosses": 6,
   "genderWins": 7,
   "genderLosses": 8,
   "clutchWins": 6,
   "clutchLosses": 5,
   "playerId": "1611fcd8-0e53-4b13-b061-d588d0bde0fd",
   "winPct": 53.3,
   "diff": 43,
   "ppg": 19,
   "leagueRank": 20,
   "rating": 0.6,
   "ratingGames": 30,
   "confidence": 84,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.2
  },
  {
   "name": "Christine Ferraez",
   "gender": "Female",
   "team": "Color Coordinated Chaos",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 47,
   "wins": 25,
   "losses": 22,
   "pointsWon": 894,
   "totalPointsAgainst": 833,
   "mixedWins": 15,
   "mixedLosses": 10,
   "genderWins": 10,
   "genderLosses": 12,
   "clutchWins": 8,
   "clutchLosses": 9,
   "winPct": 53.2,
   "diff": 61,
   "ppg": 19,
   "leagueRank": 15,
   "rating": 1.7,
   "ratingGames": 47,
   "confidence": 87,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.5,
   "playerId": "ffe0a04b-eb97-4dda-8bc0-0ebe0fd1089e"
  },
  {
   "name": "Eric Berlinger",
   "gender": "Male",
   "team": "Draft Day Disasters",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 55,
   "wins": 29,
   "losses": 26,
   "pointsWon": 1025,
   "totalPointsAgainst": 1011,
   "mixedWins": 16,
   "mixedLosses": 12,
   "genderWins": 13,
   "genderLosses": 14,
   "clutchWins": 9,
   "clutchLosses": 10,
   "winPct": 52.7,
   "diff": 14,
   "ppg": 18.6,
   "leagueRank": 19,
   "rating": -0.3,
   "ratingGames": 55,
   "confidence": 88,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -0.7,
   "playerId": "2fda2042-6613-42f8-ad93-c3cff9a58f3e"
  },
  {
   "name": "Kristy Detore",
   "gender": "Female",
   "team": "Color Coordinated Chaos",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 52,
   "wins": 27,
   "losses": 25,
   "pointsWon": 969,
   "totalPointsAgainst": 934,
   "mixedWins": 11,
   "mixedLosses": 15,
   "genderWins": 16,
   "genderLosses": 10,
   "clutchWins": 6,
   "clutchLosses": 10,
   "winPct": 51.9,
   "diff": 35,
   "ppg": 18.6,
   "leagueRank": 14,
   "rating": -0.5,
   "ratingGames": 52,
   "confidence": 88,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.8,
   "playerId": "74a2b723-b60c-4ffb-b60e-0913baf60b3c"
  },
  {
   "name": "Art Muth",
   "gender": "Male",
   "team": "Color Coordinated Chaos",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 58,
   "wins": 30,
   "losses": 28,
   "pointsWon": 1075,
   "totalPointsAgainst": 1063,
   "mixedWins": 14,
   "mixedLosses": 15,
   "genderWins": 16,
   "genderLosses": 13,
   "clutchWins": 9,
   "clutchLosses": 8,
   "winPct": 51.7,
   "diff": 12,
   "ppg": 18.5,
   "leagueRank": 31,
   "rating": -2,
   "ratingGames": 58,
   "confidence": 88,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -1,
   "playerId": "6bfc3a49-53cb-4c03-b8cb-94552158ccbe"
  },
  {
   "name": "Kelly Arvidson",
   "gender": "Female",
   "team": "Color Coordinated Chaos",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 58,
   "wins": 30,
   "losses": 28,
   "pointsWon": 1027,
   "totalPointsAgainst": 1052,
   "mixedWins": 17,
   "mixedLosses": 12,
   "genderWins": 13,
   "genderLosses": 16,
   "clutchWins": 8,
   "clutchLosses": 5,
   "winPct": 51.7,
   "diff": -25,
   "ppg": 17.7,
   "leagueRank": 18,
   "rating": 0.5,
   "ratingGames": 58,
   "confidence": 88,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 1.1,
   "playerId": "c053f5d6-16e1-4847-b27b-49fe41f367c6"
  },
  {
   "name": "Anthony Fallet",
   "gender": "Male",
   "team": "Ackley's Aces",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 76,
   "wins": 39,
   "losses": 37,
   "pointsWon": 1421,
   "totalPointsAgainst": 1363,
   "mixedWins": 21,
   "mixedLosses": 17,
   "genderWins": 18,
   "genderLosses": 20,
   "clutchWins": 5,
   "clutchLosses": 16,
   "winPct": 51.3,
   "diff": 58,
   "ppg": 18.7,
   "leagueRank": 17,
   "rating": 2,
   "ratingGames": 76,
   "confidence": 89,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.8,
   "playerId": "1949e493-55f0-4373-8c61-6a266543ddbf"
  },
  {
   "name": "Aimee Castellano",
   "gender": "Female",
   "team": "The Dill Inquents",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 45,
   "wins": 23,
   "losses": 22,
   "pointsWon": 842,
   "totalPointsAgainst": 831,
   "mixedWins": 10,
   "mixedLosses": 12,
   "genderWins": 13,
   "genderLosses": 10,
   "clutchWins": 8,
   "clutchLosses": 8,
   "winPct": 51.1,
   "diff": 11,
   "ppg": 18.7,
   "leagueRank": 10,
   "rating": 1.4,
   "ratingGames": 45,
   "confidence": 86,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.9,
   "playerId": "e76985fb-efd1-4180-a340-e4f36abbc8b4"
  },
  {
   "name": "Stanley Bonczek",
   "gender": "Male",
   "team": "The Dill Inquents",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 58,
   "wins": 28,
   "losses": 30,
   "pointsWon": 1079,
   "totalPointsAgainst": 1066,
   "mixedWins": 17,
   "mixedLosses": 13,
   "genderWins": 11,
   "genderLosses": 17,
   "clutchWins": 8,
   "clutchLosses": 11,
   "winPct": 48.3,
   "diff": 13,
   "ppg": 18.6,
   "leagueRank": 13,
   "rating": 2.2,
   "ratingGames": 58,
   "confidence": 88,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 1.2,
   "playerId": "f4cd45db-8d83-423a-8936-c7d7a3b0ffad"
  },
  {
   "name": "David Osborne",
   "gender": "Male",
   "team": "The Dill Inquents",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 48,
   "wins": 23,
   "losses": 25,
   "pointsWon": 872,
   "totalPointsAgainst": 893,
   "mixedWins": 10,
   "mixedLosses": 14,
   "genderWins": 13,
   "genderLosses": 11,
   "clutchWins": 7,
   "clutchLosses": 7,
   "winPct": 47.9,
   "diff": -21,
   "ppg": 18.2,
   "leagueRank": 22,
   "rating": 0.3,
   "ratingGames": 48,
   "confidence": 88,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.3,
   "playerId": "418e7ba5-3e06-40ec-9b83-19d3bf10c9cb"
  },
  {
   "name": "Cally Kerrigan",
   "gender": "Female",
   "team": "Color Coordinated Chaos",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 10,
   "losses": 11,
   "pointsWon": 360,
   "totalPointsAgainst": 396,
   "mixedWins": 5,
   "mixedLosses": 5,
   "genderWins": 5,
   "genderLosses": 6,
   "clutchWins": 4,
   "clutchLosses": 1,
   "playerId": "4c9897dc-1d71-46b0-bf05-e21d2f3efcb0",
   "winPct": 47.6,
   "diff": -36,
   "ppg": 17.1,
   "leagueRank": 49,
   "rating": -1.8,
   "ratingGames": 21,
   "confidence": 80,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.2
  },
  {
   "name": "Steven Gregov",
   "gender": "Male",
   "team": "Color Coordinated Chaos",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 53,
   "wins": 25,
   "losses": 28,
   "pointsWon": 945,
   "totalPointsAgainst": 991,
   "mixedWins": 10,
   "mixedLosses": 17,
   "genderWins": 15,
   "genderLosses": 11,
   "clutchWins": 10,
   "clutchLosses": 5,
   "winPct": 47.2,
   "diff": -46,
   "ppg": 17.8,
   "leagueRank": 39,
   "rating": -1.1,
   "ratingGames": 53,
   "confidence": 88,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.4,
   "playerId": "3efad314-83fb-4441-a7bf-510228cea1f8"
  },
  {
   "name": "Jamie Hahn",
   "gender": "Female",
   "team": "Draft Day Disasters",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 62,
   "wins": 29,
   "losses": 33,
   "pointsWon": 1144,
   "totalPointsAgainst": 1160,
   "mixedWins": 15,
   "mixedLosses": 16,
   "genderWins": 14,
   "genderLosses": 17,
   "clutchWins": 9,
   "clutchLosses": 14,
   "winPct": 46.8,
   "diff": -16,
   "ppg": 18.5,
   "leagueRank": 25,
   "rating": -0.9,
   "ratingGames": 62,
   "confidence": 89,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.5,
   "playerId": "17019012-f2ff-4e9a-958a-928369685b36"
  },
  {
   "name": "Melissa Dardani",
   "gender": "Female",
   "team": "Draft Day Disasters",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 7,
   "losses": 8,
   "pointsWon": 281,
   "totalPointsAgainst": 284,
   "mixedWins": 4,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 4,
   "playerId": "ef423f8a-5c2c-4a12-9f37-b41ff6d6c530",
   "winPct": 46.7,
   "diff": -3,
   "ppg": 18.7,
   "leagueRank": 48,
   "rating": 1,
   "ratingGames": 15,
   "confidence": 73,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.8
  },
  {
   "name": "Noelle Villa",
   "gender": "Female",
   "team": "Draft Day Disasters",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 10,
   "losses": 12,
   "pointsWon": 399,
   "totalPointsAgainst": 415,
   "mixedWins": 7,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 8,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 45.5,
   "diff": -16,
   "ppg": 18.1,
   "leagueRank": 29,
   "rating": -0.9,
   "ratingGames": 22,
   "confidence": 79,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.4,
   "playerId": "1898b8fb-ea1d-4bb8-bcc5-17b1fba29700"
  },
  {
   "name": "Chaoxia Cheng",
   "gender": "Female",
   "team": "Draft Day Disasters",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 62,
   "wins": 28,
   "losses": 34,
   "pointsWon": 1138,
   "totalPointsAgainst": 1152,
   "mixedWins": 15,
   "mixedLosses": 15,
   "genderWins": 13,
   "genderLosses": 19,
   "clutchWins": 10,
   "clutchLosses": 11,
   "winPct": 45.2,
   "diff": -14,
   "ppg": 18.4,
   "leagueRank": 27,
   "rating": 1,
   "ratingGames": 62,
   "confidence": 89,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.7,
   "playerId": "0b80a91d-626d-40b7-9cd9-e9ea96ec7e59"
  },
  {
   "name": "Marc Friedman",
   "gender": "Male",
   "team": "Ackley's Aces",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 62,
   "wins": 28,
   "losses": 34,
   "pointsWon": 1138,
   "totalPointsAgainst": 1163,
   "mixedWins": 13,
   "mixedLosses": 18,
   "genderWins": 15,
   "genderLosses": 16,
   "clutchWins": 10,
   "clutchLosses": 9,
   "winPct": 45.2,
   "diff": -25,
   "ppg": 18.4,
   "leagueRank": 26,
   "rating": -1,
   "ratingGames": 62,
   "confidence": 89,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.4,
   "playerId": "d7bdde76-1007-4b20-a804-4efcd08c3598"
  },
  {
   "name": "Simon Perry",
   "gender": "Male",
   "team": "Draft Day Disasters",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 52,
   "wins": 23,
   "losses": 29,
   "pointsWon": 926,
   "totalPointsAgainst": 1001,
   "mixedWins": 12,
   "mixedLosses": 15,
   "genderWins": 11,
   "genderLosses": 14,
   "clutchWins": 10,
   "clutchLosses": 7,
   "winPct": 44.2,
   "diff": -75,
   "ppg": 17.8,
   "leagueRank": 38,
   "rating": -0.4,
   "ratingGames": 52,
   "confidence": 88,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.9,
   "playerId": "03c7bdf6-926c-4d90-9416-117cd3478b50"
  },
  {
   "name": "Susan Goeckeler",
   "gender": "Female",
   "team": "Ackley's Aces",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 12,
   "losses": 16,
   "pointsWon": 501,
   "totalPointsAgainst": 528,
   "mixedWins": 5,
   "mixedLosses": 9,
   "genderWins": 7,
   "genderLosses": 7,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 42.9,
   "diff": -27,
   "ppg": 17.9,
   "leagueRank": 36,
   "rating": -1.6,
   "ratingGames": 28,
   "confidence": 82,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.7,
   "playerId": "201e264e-23da-435d-a4b5-0fea908d1098"
  },
  {
   "name": "Mary Brashier",
   "gender": "Female",
   "team": "Ackley's Aces",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 40,
   "wins": 17,
   "losses": 23,
   "pointsWon": 716,
   "totalPointsAgainst": 753,
   "mixedWins": 9,
   "mixedLosses": 11,
   "genderWins": 8,
   "genderLosses": 12,
   "clutchWins": 4,
   "clutchLosses": 7,
   "winPct": 42.5,
   "diff": -37,
   "ppg": 17.9,
   "leagueRank": 33,
   "rating": -1.5,
   "ratingGames": 40,
   "confidence": 86,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -0.6,
   "playerId": "8fb87112-3824-4d16-96d1-3f4abcb2ae45"
  },
  {
   "name": "John Pineda",
   "gender": "Male",
   "team": "Draft Day Disasters",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 11,
   "losses": 15,
   "pointsWon": 486,
   "totalPointsAgainst": 489,
   "mixedWins": 3,
   "mixedLosses": 10,
   "genderWins": 8,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 6,
   "winPct": 42.3,
   "diff": -3,
   "ppg": 18.7,
   "leagueRank": 32,
   "rating": -0.7,
   "ratingGames": 26,
   "confidence": 82,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.1,
   "playerId": "099e3831-88c1-4907-9869-f193db58b64b"
  },
  {
   "name": "Susan St. Pierre",
   "gender": "Female",
   "team": "The Dill Inquents",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 72,
   "wins": 29,
   "losses": 43,
   "pointsWon": 1286,
   "totalPointsAgainst": 1368,
   "mixedWins": 13,
   "mixedLosses": 23,
   "genderWins": 16,
   "genderLosses": 20,
   "clutchWins": 9,
   "clutchLosses": 12,
   "winPct": 40.3,
   "diff": -82,
   "ppg": 17.9,
   "leagueRank": 24,
   "rating": -0.6,
   "ratingGames": 72,
   "confidence": 90,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.1,
   "playerId": "001c2d38-829b-4fd0-b249-472f78337387"
  },
  {
   "name": "Amy Johnson",
   "gender": "Female",
   "team": "The Dill Inquents",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 48,
   "wins": 19,
   "losses": 29,
   "pointsWon": 866,
   "totalPointsAgainst": 914,
   "mixedWins": 7,
   "mixedLosses": 17,
   "genderWins": 12,
   "genderLosses": 12,
   "clutchWins": 8,
   "clutchLosses": 8,
   "winPct": 39.6,
   "diff": -48,
   "ppg": 18,
   "leagueRank": 37,
   "rating": -1.4,
   "ratingGames": 48,
   "confidence": 87,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -0.7,
   "playerId": "74e493de-dca7-4bf2-b9ac-630484282502"
  },
  {
   "name": "Eric Luque",
   "gender": "Male",
   "team": "Ackley's Aces",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 15,
   "losses": 23,
   "pointsWon": 668,
   "totalPointsAgainst": 715,
   "mixedWins": 9,
   "mixedLosses": 10,
   "genderWins": 6,
   "genderLosses": 13,
   "clutchWins": 4,
   "clutchLosses": 9,
   "winPct": 39.5,
   "diff": -47,
   "ppg": 17.6,
   "leagueRank": 41,
   "rating": -0.5,
   "ratingGames": 38,
   "confidence": 85,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.7,
   "playerId": "b3c28078-ab31-4002-9e09-5fa3f627d8c1"
  },
  {
   "name": "Tara Kramer",
   "gender": "Female",
   "team": "The Dill Inquents",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 57,
   "wins": 22,
   "losses": 35,
   "pointsWon": 1005,
   "totalPointsAgainst": 1117,
   "mixedWins": 12,
   "mixedLosses": 16,
   "genderWins": 10,
   "genderLosses": 19,
   "clutchWins": 12,
   "clutchLosses": 7,
   "winPct": 38.6,
   "diff": -112,
   "ppg": 17.6,
   "leagueRank": 34,
   "rating": -0.8,
   "ratingGames": 57,
   "confidence": 89,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.4,
   "playerId": "dae62b8e-5f8e-4721-8f41-3218518d1e30"
  },
  {
   "name": "Darren Ward",
   "gender": "Male",
   "team": "Ackley's Aces",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 17,
   "losses": 29,
   "pointsWon": 849,
   "totalPointsAgainst": 870,
   "mixedWins": 11,
   "mixedLosses": 12,
   "genderWins": 6,
   "genderLosses": 17,
   "clutchWins": 2,
   "clutchLosses": 15,
   "winPct": 37,
   "diff": -21,
   "ppg": 18.5,
   "leagueRank": 35,
   "rating": -1,
   "ratingGames": 46,
   "confidence": 87,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -0.6,
   "playerId": "4a102871-ed81-4b77-b2fc-5397317959bb"
  },
  {
   "name": "Jillian Hart",
   "gender": "Female",
   "team": "Draft Day Disasters",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 17,
   "losses": 29,
   "pointsWon": 825,
   "totalPointsAgainst": 886,
   "mixedWins": 12,
   "mixedLosses": 11,
   "genderWins": 5,
   "genderLosses": 18,
   "clutchWins": 5,
   "clutchLosses": 11,
   "winPct": 37,
   "diff": -61,
   "ppg": 17.9,
   "leagueRank": 45,
   "rating": -2.6,
   "ratingGames": 46,
   "confidence": 86,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.9,
   "playerId": "c085cda7-0089-48e8-be2a-29f839ae0a88"
  },
  {
   "name": "Layla Darian",
   "gender": "Female",
   "team": "Ackley's Aces",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 8,
   "losses": 14,
   "pointsWon": 385,
   "totalPointsAgainst": 424,
   "mixedWins": 3,
   "mixedLosses": 7,
   "genderWins": 5,
   "genderLosses": 7,
   "clutchWins": 2,
   "clutchLosses": 4,
   "playerId": "77234c18-83ca-4180-8a45-181f7d347542",
   "winPct": 36.4,
   "diff": -39,
   "ppg": 17.5,
   "leagueRank": 55,
   "rating": -0.5,
   "ratingGames": 22,
   "confidence": 79,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.7
  },
  {
   "name": "John Fallone",
   "gender": "Male",
   "team": "The Dill Inquents",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 13,
   "losses": 23,
   "pointsWon": 639,
   "totalPointsAgainst": 694,
   "mixedWins": 5,
   "mixedLosses": 13,
   "genderWins": 8,
   "genderLosses": 10,
   "clutchWins": 6,
   "clutchLosses": 5,
   "winPct": 36.1,
   "diff": -55,
   "ppg": 17.8,
   "leagueRank": 40,
   "rating": -1.5,
   "ratingGames": 36,
   "confidence": 84,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": -0.8,
   "playerId": "5127c0b9-aaf8-49c5-a94f-bf92e7ae60f8"
  },
  {
   "name": "Juliana Drinane",
   "gender": "Female",
   "team": "The Dill Inquents",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 11,
   "losses": 21,
   "pointsWon": 548,
   "totalPointsAgainst": 640,
   "mixedWins": 7,
   "mixedLosses": 9,
   "genderWins": 4,
   "genderLosses": 12,
   "clutchWins": 7,
   "clutchLosses": 3,
   "winPct": 34.4,
   "diff": -92,
   "ppg": 17.1,
   "leagueRank": 46,
   "rating": -2.6,
   "ratingGames": 32,
   "confidence": 84,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": -0.7,
   "playerId": "c11092d7-b6a2-4099-8e9c-e90d17ed543c"
  },
  {
   "name": "Josh Rito",
   "gender": "Male",
   "team": "The Dill Inquents",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 13,
   "losses": 25,
   "pointsWon": 668,
   "totalPointsAgainst": 751,
   "mixedWins": 6,
   "mixedLosses": 13,
   "genderWins": 7,
   "genderLosses": 12,
   "clutchWins": 6,
   "clutchLosses": 7,
   "winPct": 34.2,
   "diff": -83,
   "ppg": 17.6,
   "leagueRank": 44,
   "rating": -2.1,
   "ratingGames": 38,
   "confidence": 85,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": -0.4,
   "playerId": "a4c54a14-35b4-4b90-aabd-3d81ad719f4d"
  },
  {
   "name": "Rick Wickenheisser",
   "gender": "Male",
   "team": "Ackley's Aces",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 10,
   "losses": 20,
   "pointsWon": 509,
   "totalPointsAgainst": 598,
   "mixedWins": 6,
   "mixedLosses": 9,
   "genderWins": 4,
   "genderLosses": 11,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 33.3,
   "diff": -89,
   "ppg": 17,
   "leagueRank": 47,
   "rating": -2.3,
   "ratingGames": 30,
   "confidence": 83,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.2,
   "playerId": "741048e8-2c91-4466-bb1c-1a624d1dabd9"
  },
  {
   "name": "Sean O'Connell",
   "gender": "Male",
   "team": "The Dill Inquents",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 50,
   "wins": 16,
   "losses": 34,
   "pointsWon": 898,
   "totalPointsAgainst": 967,
   "mixedWins": 8,
   "mixedLosses": 16,
   "genderWins": 8,
   "genderLosses": 18,
   "clutchWins": 6,
   "clutchLosses": 11,
   "winPct": 32,
   "diff": -69,
   "ppg": 18,
   "leagueRank": 43,
   "rating": 0.3,
   "ratingGames": 50,
   "confidence": 87,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 1.2,
   "playerId": "6d9b173b-57b7-499c-9bde-9bdafd152968"
  },
  {
   "name": "Bob Castellano",
   "gender": "Male",
   "team": "The Dill Inquents",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 6,
   "losses": 14,
   "pointsWon": 318,
   "totalPointsAgainst": 401,
   "mixedWins": 5,
   "mixedLosses": 5,
   "genderWins": 1,
   "genderLosses": 9,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 30,
   "diff": -83,
   "ppg": 15.9,
   "leagueRank": 50,
   "rating": -3.2,
   "ratingGames": 20,
   "confidence": 78,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": -0.5,
   "playerId": "7bb24154-bd52-4081-a3e6-0b8afcde62d5"
  }
 ],
 "teams": [
  {
   "name": "Color Coordinated Chaos",
   "w": 8,
   "l": 0,
   "pf": 4948,
   "pa": 4649,
   "gw": 154,
   "gl": 102,
   "diff": 299,
   "gameDiff": 52,
   "power": 0.4,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     76,
     52
    ],
    "male": [
     41,
     23
    ],
    "female": [
     37,
     27
    ]
   }
  },
  {
   "name": "Draft Day Disasters",
   "w": 4,
   "l": 4,
   "pf": 4864,
   "pa": 4887,
   "gw": 128,
   "gl": 128,
   "diff": -23,
   "gameDiff": 0,
   "power": -0.1,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     67,
     61
    ],
    "male": [
     36,
     28
    ],
    "female": [
     25,
     39
    ]
   }
  },
  {
   "name": "Ackley's Aces",
   "w": 3,
   "l": 5,
   "pf": 4787,
   "pa": 4838,
   "gw": 120,
   "gl": 136,
   "diff": -51,
   "gameDiff": -16,
   "power": 0.2,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     59,
     69
    ],
    "male": [
     26,
     38
    ],
    "female": [
     35,
     29
    ]
   }
  },
  {
   "name": "The Dill Inquents",
   "w": 1,
   "l": 7,
   "pf": 4747,
   "pa": 4972,
   "gw": 110,
   "gl": 146,
   "diff": -225,
   "gameDiff": -36,
   "power": -0.3,
   "powerRank": 4,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     54,
     74
    ],
    "male": [
     25,
     39
    ],
    "female": [
     31,
     33
    ]
   }
  }
 ],
 "duos": [
  {
   "a": "Bob Drinane",
   "b": "Stanley Bonczek",
   "team": "The Dill Inquents",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 3.5,
   "avgActual": 12.3,
   "avgExpected": 4.2,
   "aId": "1611fcd8-0e53-4b13-b061-d588d0bde0fd",
   "bId": "f4cd45db-8d83-423a-8936-c7d7a3b0ffad"
  },
  {
   "a": "Susan St. Pierre",
   "b": "John Fallone",
   "team": "The Dill Inquents",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 3.2,
   "avgActual": 5.8,
   "avgExpected": 0,
   "aId": "001c2d38-829b-4fd0-b249-472f78337387",
   "bId": "5127c0b9-aaf8-49c5-a94f-bf92e7ae60f8"
  },
  {
   "a": "Chaoxia Cheng",
   "b": "Anthony Fallet",
   "team": "Draft Day Disasters",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 2.8,
   "avgActual": 5.6,
   "avgExpected": 0.6,
   "aId": "0b80a91d-626d-40b7-9cd9-e9ea96ec7e59",
   "bId": "1949e493-55f0-4373-8c61-6a266543ddbf"
  },
  {
   "a": "Denise Richmond",
   "b": "Kristy Detore",
   "team": "Color Coordinated Chaos",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 2.4,
   "avgActual": 4.3,
   "avgExpected": 0.7,
   "aId": "422cd941-43db-4123-a07e-3316583f51ee",
   "bId": "74a2b723-b60c-4ffb-b60e-0913baf60b3c"
  },
  {
   "a": "Darren Ward",
   "b": "Carol Mastroianni",
   "team": "Ackley's Aces",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.3,
   "avgActual": 7.3,
   "avgExpected": 2.1,
   "aId": "4a102871-ed81-4b77-b2fc-5397317959bb",
   "bId": "7f851011-9322-43f9-aff2-754565a615c7"
  },
  {
   "a": "Kelly Arvidson",
   "b": "Christine Ferraez",
   "team": "Color Coordinated Chaos",
   "n": 9,
   "w": 6,
   "l": 3,
   "synergy": 2,
   "avgActual": 3.6,
   "avgExpected": 0.7,
   "aId": "c053f5d6-16e1-4847-b27b-49fe41f367c6",
   "bId": "ffe0a04b-eb97-4dda-8bc0-0ebe0fd1089e"
  },
  {
   "a": "Amy Johnson",
   "b": "Tara Kramer",
   "team": "The Dill Inquents",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": 2,
   "avgActual": 0.9,
   "avgExpected": -2.3,
   "aId": "74e493de-dca7-4bf2-b9ac-630484282502",
   "bId": "dae62b8e-5f8e-4721-8f41-3218518d1e30"
  },
  {
   "a": "Bob Castellano",
   "b": "Juliana Drinane",
   "team": "The Dill Inquents",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 1.8,
   "avgActual": -1,
   "avgExpected": -4.2,
   "aId": "7bb24154-bd52-4081-a3e6-0b8afcde62d5",
   "bId": "c11092d7-b6a2-4099-8e9c-e90d17ed543c"
  },
  {
   "a": "Susan Goeckeler",
   "b": "Darren Ward",
   "team": "Ackley's Aces",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.8,
   "avgActual": 2.8,
   "avgExpected": -0.9,
   "aId": "201e264e-23da-435d-a4b5-0fea908d1098",
   "bId": "4a102871-ed81-4b77-b2fc-5397317959bb"
  },
  {
   "a": "Art Muth",
   "b": "Patricia Kavanaugh",
   "team": "Color Coordinated Chaos",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.7,
   "avgActual": 4,
   "avgExpected": 0.7,
   "aId": "6bfc3a49-53cb-4c03-b8cb-94552158ccbe",
   "bId": "9e2b45ad-e99b-4786-915c-d89e1d1bfee2"
  },
  {
   "a": "Kristy Detore",
   "b": "Kelly Arvidson",
   "team": "Color Coordinated Chaos",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.6,
   "avgActual": 1.7,
   "avgExpected": -2,
   "aId": "74a2b723-b60c-4ffb-b60e-0913baf60b3c",
   "bId": "c053f5d6-16e1-4847-b27b-49fe41f367c6"
  },
  {
   "a": "Simon Perry",
   "b": "Chanda Mccoy",
   "team": "Draft Day Disasters",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 1.6,
   "avgActual": 0.7,
   "avgExpected": -1.9,
   "aId": "03c7bdf6-926c-4d90-9416-117cd3478b50",
   "bId": "30cb78cb-f962-40f9-bd02-78d336920431"
  },
  {
   "a": "Steven Gregov",
   "b": "Christine Ferraez",
   "team": "Color Coordinated Chaos",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 1.6,
   "avgActual": 2.8,
   "avgExpected": 0.2,
   "aId": "3efad314-83fb-4441-a7bf-510228cea1f8",
   "bId": "ffe0a04b-eb97-4dda-8bc0-0ebe0fd1089e"
  },
  {
   "a": "Susan St. Pierre",
   "b": "Barbara Hess",
   "team": "The Dill Inquents",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.5,
   "avgActual": 5.7,
   "avgExpected": 2.1,
   "aId": "001c2d38-829b-4fd0-b249-472f78337387",
   "bId": "21baa2cb-e882-442e-a5e0-a6d88126c9c3"
  },
  {
   "a": "Jamie Hahn",
   "b": "John Lottier",
   "team": "Draft Day Disasters",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 2.3,
   "avgExpected": -0.7,
   "aId": "17019012-f2ff-4e9a-958a-928369685b36",
   "bId": "d1541ad0-e7fc-4783-949a-8f3f1ce9722d"
  },
  {
   "a": "Eric Luque",
   "b": "Marc Friedman",
   "team": "Ackley's Aces",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 1.7,
   "avgExpected": -1.7,
   "aId": "b3c28078-ab31-4002-9e09-5fa3f627d8c1",
   "bId": "d7bdde76-1007-4b20-a804-4efcd08c3598"
  },
  {
   "a": "Anthony Fallet",
   "b": "Eric Luque",
   "team": "Ackley's Aces",
   "n": 9,
   "w": 4,
   "l": 5,
   "synergy": 1.4,
   "avgActual": 1.3,
   "avgExpected": -0.7,
   "aId": "1949e493-55f0-4373-8c61-6a266543ddbf",
   "bId": "b3c28078-ab31-4002-9e09-5fa3f627d8c1"
  },
  {
   "a": "Tara Kramer",
   "b": "Stanley Bonczek",
   "team": "The Dill Inquents",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 1.4,
   "avgActual": 0.7,
   "avgExpected": -1.5,
   "aId": "dae62b8e-5f8e-4721-8f41-3218518d1e30",
   "bId": "f4cd45db-8d83-423a-8936-c7d7a3b0ffad"
  },
  {
   "a": "Amy Johnson",
   "b": "Josh Rito",
   "team": "The Dill Inquents",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 1.4,
   "avgActual": 1,
   "avgExpected": -1.4,
   "aId": "74e493de-dca7-4bf2-b9ac-630484282502",
   "bId": "a4c54a14-35b4-4b90-aabd-3d81ad719f4d"
  },
  {
   "a": "Art Muth",
   "b": "Kristen Soucie",
   "team": "Color Coordinated Chaos",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 3.5,
   "avgExpected": 0.8,
   "aId": "6bfc3a49-53cb-4c03-b8cb-94552158ccbe",
   "bId": "8ebf2370-8a82-495e-97ea-5168dd2b14c4"
  },
  {
   "a": "Kelly Arvidson",
   "b": "Ross Switkes",
   "team": "Color Coordinated Chaos",
   "n": 13,
   "w": 12,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 4,
   "avgExpected": 2.3,
   "aId": "c053f5d6-16e1-4847-b27b-49fe41f367c6",
   "bId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b"
  },
  {
   "a": "Sean O'Connell",
   "b": "Aimee Castellano",
   "team": "The Dill Inquents",
   "n": 8,
   "w": 3,
   "l": 5,
   "synergy": 1.3,
   "avgActual": 0.9,
   "avgExpected": -1.1,
   "aId": "6d9b173b-57b7-499c-9bde-9bdafd152968",
   "bId": "e76985fb-efd1-4180-a340-e4f36abbc8b4"
  },
  {
   "a": "Noelle Villa",
   "b": "Eric Berlinger",
   "team": "Draft Day Disasters",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 2.8,
   "avgExpected": 0.2,
   "aId": "1898b8fb-ea1d-4bb8-bcc5-17b1fba29700",
   "bId": "2fda2042-6613-42f8-ad93-c3cff9a58f3e"
  },
  {
   "a": "Simon Perry",
   "b": "John Pineda",
   "team": "Draft Day Disasters",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 2.7,
   "avgExpected": -0.4,
   "aId": "03c7bdf6-926c-4d90-9416-117cd3478b50",
   "bId": "099e3831-88c1-4907-9869-f193db58b64b"
  },
  {
   "a": "Steven Gregov",
   "b": "Ross Switkes",
   "team": "Color Coordinated Chaos",
   "n": 13,
   "w": 12,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 3.8,
   "avgExpected": 2.2,
   "aId": "3efad314-83fb-4441-a7bf-510228cea1f8",
   "bId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b"
  },
  {
   "a": "David Osborne",
   "b": "Sean O'Connell",
   "team": "The Dill Inquents",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.2,
   "avgActual": 2.3,
   "avgExpected": -0.2,
   "aId": "418e7ba5-3e06-40ec-9b83-19d3bf10c9cb",
   "bId": "6d9b173b-57b7-499c-9bde-9bdafd152968"
  },
  {
   "a": "David Osborne",
   "b": "Tara Kramer",
   "team": "The Dill Inquents",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 1.8,
   "avgExpected": -0.7,
   "aId": "418e7ba5-3e06-40ec-9b83-19d3bf10c9cb",
   "bId": "dae62b8e-5f8e-4721-8f41-3218518d1e30"
  },
  {
   "a": "John Fallone",
   "b": "Sean O'Connell",
   "team": "The Dill Inquents",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.2,
   "avgActual": 1,
   "avgExpected": -1.9,
   "aId": "5127c0b9-aaf8-49c5-a94f-bf92e7ae60f8",
   "bId": "6d9b173b-57b7-499c-9bde-9bdafd152968"
  },
  {
   "a": "Carol Mastroianni",
   "b": "Eric Luque",
   "team": "Ackley's Aces",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 1.1,
   "avgActual": 3.4,
   "avgExpected": 1.5,
   "aId": "7f851011-9322-43f9-aff2-754565a615c7",
   "bId": "b3c28078-ab31-4002-9e09-5fa3f627d8c1"
  },
  {
   "a": "Susan St. Pierre",
   "b": "Amy Johnson",
   "team": "The Dill Inquents",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 1.1,
   "avgActual": 2.5,
   "avgExpected": 0.7,
   "aId": "001c2d38-829b-4fd0-b249-472f78337387",
   "bId": "74e493de-dca7-4bf2-b9ac-630484282502"
  },
  {
   "a": "Amy Johnson",
   "b": "Aimee Castellano",
   "team": "The Dill Inquents",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 2.8,
   "avgExpected": 0.6,
   "aId": "74e493de-dca7-4bf2-b9ac-630484282502",
   "bId": "e76985fb-efd1-4180-a340-e4f36abbc8b4"
  },
  {
   "a": "Susan St. Pierre",
   "b": "Tara Kramer",
   "team": "The Dill Inquents",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 1,
   "avgActual": -1.2,
   "avgExpected": -2.8,
   "aId": "001c2d38-829b-4fd0-b249-472f78337387",
   "bId": "dae62b8e-5f8e-4721-8f41-3218518d1e30"
  },
  {
   "a": "Darren Ward",
   "b": "Mary Brashier",
   "team": "Ackley's Aces",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1,
   "avgActual": 1.8,
   "avgExpected": -0.2,
   "aId": "4a102871-ed81-4b77-b2fc-5397317959bb",
   "bId": "8fb87112-3824-4d16-96d1-3f4abcb2ae45"
  },
  {
   "a": "Rick Wickenheisser",
   "b": "Mary Brashier",
   "team": "Ackley's Aces",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.9,
   "avgActual": -0.6,
   "avgExpected": -2.3,
   "aId": "741048e8-2c91-4466-bb1c-1a624d1dabd9",
   "bId": "8fb87112-3824-4d16-96d1-3f4abcb2ae45"
  },
  {
   "a": "Kristy Detore",
   "b": "Richard Demeuse",
   "team": "Color Coordinated Chaos",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 0.9,
   "avgActual": 4.6,
   "avgExpected": 3.1,
   "aId": "74a2b723-b60c-4ffb-b60e-0913baf60b3c",
   "bId": "d88f1d1e-be4e-449e-b9b2-c468753e1dd3"
  },
  {
   "a": "Chaoxia Cheng",
   "b": "Chanda Mccoy",
   "team": "Draft Day Disasters",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": 0.9,
   "avgActual": 1.9,
   "avgExpected": 0.6,
   "aId": "0b80a91d-626d-40b7-9cd9-e9ea96ec7e59",
   "bId": "30cb78cb-f962-40f9-bd02-78d336920431"
  },
  {
   "a": "Simon Perry",
   "b": "Jamie Hahn",
   "team": "Draft Day Disasters",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.9,
   "avgActual": -0.3,
   "avgExpected": -1.9,
   "aId": "03c7bdf6-926c-4d90-9416-117cd3478b50",
   "bId": "17019012-f2ff-4e9a-958a-928369685b36"
  },
  {
   "a": "Kristen Soucie",
   "b": "Kelly Arvidson",
   "team": "Color Coordinated Chaos",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 3.7,
   "avgExpected": 1.5,
   "aId": "8ebf2370-8a82-495e-97ea-5168dd2b14c4",
   "bId": "c053f5d6-16e1-4847-b27b-49fe41f367c6"
  },
  {
   "a": "Kristy Detore",
   "b": "Patricia Kavanaugh",
   "team": "Color Coordinated Chaos",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 0.9,
   "avgActual": 3,
   "avgExpected": 1.7,
   "aId": "74a2b723-b60c-4ffb-b60e-0913baf60b3c",
   "bId": "9e2b45ad-e99b-4786-915c-d89e1d1bfee2"
  },
  {
   "a": "Susan Goeckeler",
   "b": "Carol Mastroianni",
   "team": "Ackley's Aces",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 3,
   "avgExpected": 1.3,
   "aId": "201e264e-23da-435d-a4b5-0fea908d1098",
   "bId": "7f851011-9322-43f9-aff2-754565a615c7"
  },
  {
   "a": "Denise Richmond",
   "b": "Richard Demeuse",
   "team": "Color Coordinated Chaos",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 3.4,
   "avgExpected": 1.9,
   "aId": "422cd941-43db-4123-a07e-3316583f51ee",
   "bId": "d88f1d1e-be4e-449e-b9b2-c468753e1dd3"
  },
  {
   "a": "Art Muth",
   "b": "Ross Switkes",
   "team": "Color Coordinated Chaos",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 6.2,
   "avgExpected": 4.9,
   "aId": "6bfc3a49-53cb-4c03-b8cb-94552158ccbe",
   "bId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b"
  },
  {
   "a": "Susan Ackley",
   "b": "Carol Mastroianni",
   "team": "Ackley's Aces",
   "n": 9,
   "w": 6,
   "l": 3,
   "synergy": 0.7,
   "avgActual": 4.4,
   "avgExpected": 3.4,
   "aId": "07a0e948-6308-4920-a6a8-1d5945552ecb",
   "bId": "7f851011-9322-43f9-aff2-754565a615c7"
  },
  {
   "a": "Steven Gregov",
   "b": "Denise Richmond",
   "team": "Color Coordinated Chaos",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.7,
   "avgActual": 0.5,
   "avgExpected": -1,
   "aId": "3efad314-83fb-4441-a7bf-510228cea1f8",
   "bId": "422cd941-43db-4123-a07e-3316583f51ee"
  },
  {
   "a": "Barbara Hess",
   "b": "Aimee Castellano",
   "team": "The Dill Inquents",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 6.3,
   "avgExpected": 4.9,
   "aId": "21baa2cb-e882-442e-a5e0-a6d88126c9c3",
   "bId": "e76985fb-efd1-4180-a340-e4f36abbc8b4"
  },
  {
   "a": "Eric Berlinger",
   "b": "John Lottier",
   "team": "Draft Day Disasters",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 0.7,
   "avgActual": 1.4,
   "avgExpected": 0.3,
   "aId": "2fda2042-6613-42f8-ad93-c3cff9a58f3e",
   "bId": "d1541ad0-e7fc-4783-949a-8f3f1ce9722d"
  },
  {
   "a": "Darren Ward",
   "b": "Christine Papa",
   "team": "Ackley's Aces",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 2.7,
   "avgExpected": 1,
   "aId": "4a102871-ed81-4b77-b2fc-5397317959bb",
   "bId": "d156a552-7fa9-488e-9bfa-745feb859950"
  },
  {
   "a": "John Fallone",
   "b": "Josh Rito",
   "team": "The Dill Inquents",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": 0.6,
   "avgActual": -1,
   "avgExpected": -1.8,
   "aId": "5127c0b9-aaf8-49c5-a94f-bf92e7ae60f8",
   "bId": "a4c54a14-35b4-4b90-aabd-3d81ad719f4d"
  },
  {
   "a": "Chanda Mccoy",
   "b": "Bill Brandt",
   "team": "Draft Day Disasters",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 2.7,
   "avgExpected": 1.2,
   "aId": "30cb78cb-f962-40f9-bd02-78d336920431",
   "bId": "dc530014-0e3b-4485-b265-8555bafe6e19"
  },
  {
   "a": "Art Muth",
   "b": "Christine Ferraez",
   "team": "Color Coordinated Chaos",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 0.5,
   "avgExpected": -0.5,
   "aId": "6bfc3a49-53cb-4c03-b8cb-94552158ccbe",
   "bId": "ffe0a04b-eb97-4dda-8bc0-0ebe0fd1089e"
  },
  {
   "a": "Steven Gregov",
   "b": "Richard Demeuse",
   "team": "Color Coordinated Chaos",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.5,
   "avgActual": -1,
   "avgExpected": -1.8,
   "aId": "3efad314-83fb-4441-a7bf-510228cea1f8",
   "bId": "d88f1d1e-be4e-449e-b9b2-c468753e1dd3"
  },
  {
   "a": "Susan Ackley",
   "b": "Christine Papa",
   "team": "Ackley's Aces",
   "n": 9,
   "w": 8,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 4.4,
   "avgExpected": 3.9,
   "aId": "07a0e948-6308-4920-a6a8-1d5945552ecb",
   "bId": "d156a552-7fa9-488e-9bfa-745feb859950"
  },
  {
   "a": "Carol Mastroianni",
   "b": "Mary Brashier",
   "team": "Ackley's Aces",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 1,
   "avgExpected": 0.3,
   "aId": "7f851011-9322-43f9-aff2-754565a615c7",
   "bId": "8fb87112-3824-4d16-96d1-3f4abcb2ae45"
  },
  {
   "a": "Patricia Kavanaugh",
   "b": "Richard Demeuse",
   "team": "Color Coordinated Chaos",
   "n": 6,
   "w": 6,
   "l": 0,
   "synergy": 0.4,
   "avgActual": 4.2,
   "avgExpected": 3.5,
   "aId": "9e2b45ad-e99b-4786-915c-d89e1d1bfee2",
   "bId": "d88f1d1e-be4e-449e-b9b2-c468753e1dd3"
  },
  {
   "a": "Chaoxia Cheng",
   "b": "Jamie Hahn",
   "team": "Draft Day Disasters",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 1.7,
   "avgExpected": 0.7,
   "aId": "0b80a91d-626d-40b7-9cd9-e9ea96ec7e59",
   "bId": "17019012-f2ff-4e9a-958a-928369685b36"
  },
  {
   "a": "David Osborne",
   "b": "Josh Rito",
   "team": "The Dill Inquents",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 0.7,
   "avgExpected": -0.3,
   "aId": "418e7ba5-3e06-40ec-9b83-19d3bf10c9cb",
   "bId": "a4c54a14-35b4-4b90-aabd-3d81ad719f4d"
  },
  {
   "a": "Susan Ackley",
   "b": "Anthony Fallet",
   "team": "Ackley's Aces",
   "n": 14,
   "w": 9,
   "l": 5,
   "synergy": 0.3,
   "avgActual": 1.9,
   "avgExpected": 1.5,
   "aId": "07a0e948-6308-4920-a6a8-1d5945552ecb",
   "bId": "1949e493-55f0-4373-8c61-6a266543ddbf"
  },
  {
   "a": "Anthony Fallet",
   "b": "Marc Friedman",
   "team": "Ackley's Aces",
   "n": 11,
   "w": 8,
   "l": 3,
   "synergy": 0.3,
   "avgActual": 1.6,
   "avgExpected": 1.2,
   "aId": "1949e493-55f0-4373-8c61-6a266543ddbf",
   "bId": "d7bdde76-1007-4b20-a804-4efcd08c3598"
  },
  {
   "a": "Eric Berlinger",
   "b": "Jillian Hart",
   "team": "Draft Day Disasters",
   "n": 10,
   "w": 6,
   "l": 4,
   "synergy": 0.3,
   "avgActual": 0.5,
   "avgExpected": 0.2,
   "aId": "2fda2042-6613-42f8-ad93-c3cff9a58f3e",
   "bId": "c085cda7-0089-48e8-be2a-29f839ae0a88"
  },
  {
   "a": "Chaoxia Cheng",
   "b": "Robbie Oddy",
   "team": "Draft Day Disasters",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 2,
   "avgExpected": 1.2,
   "aId": "0b80a91d-626d-40b7-9cd9-e9ea96ec7e59",
   "bId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6"
  },
  {
   "a": "Rick Wickenheisser",
   "b": "Marc Friedman",
   "team": "Ackley's Aces",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.2,
   "avgActual": -3.5,
   "avgExpected": -3.8,
   "aId": "741048e8-2c91-4466-bb1c-1a624d1dabd9",
   "bId": "d7bdde76-1007-4b20-a804-4efcd08c3598"
  },
  {
   "a": "Eric Luque",
   "b": "Christine Papa",
   "team": "Ackley's Aces",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 1,
   "avgExpected": 0.6,
   "aId": "b3c28078-ab31-4002-9e09-5fa3f627d8c1",
   "bId": "d156a552-7fa9-488e-9bfa-745feb859950"
  },
  {
   "a": "Jillian Hart",
   "b": "Bill Brandt",
   "team": "Draft Day Disasters",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 0.2,
   "avgExpected": -0.2,
   "aId": "c085cda7-0089-48e8-be2a-29f839ae0a88",
   "bId": "dc530014-0e3b-4485-b265-8555bafe6e19"
  },
  {
   "a": "Simon Perry",
   "b": "Robbie Oddy",
   "team": "Draft Day Disasters",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 0.4,
   "avgExpected": 0.1,
   "aId": "03c7bdf6-926c-4d90-9416-117cd3478b50",
   "bId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6"
  },
  {
   "a": "John Pineda",
   "b": "Eric Berlinger",
   "team": "Draft Day Disasters",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 1,
   "avgExpected": 0.4,
   "aId": "099e3831-88c1-4907-9869-f193db58b64b",
   "bId": "2fda2042-6613-42f8-ad93-c3cff9a58f3e"
  },
  {
   "a": "Darren Ward",
   "b": "Marc Friedman",
   "team": "Ackley's Aces",
   "n": 9,
   "w": 3,
   "l": 6,
   "synergy": 0.2,
   "avgActual": 0.2,
   "avgExpected": 0,
   "aId": "4a102871-ed81-4b77-b2fc-5397317959bb",
   "bId": "d7bdde76-1007-4b20-a804-4efcd08c3598"
  },
  {
   "a": "David Osborne",
   "b": "Stanley Bonczek",
   "team": "The Dill Inquents",
   "n": 9,
   "w": 5,
   "l": 4,
   "synergy": 0.2,
   "avgActual": 0.8,
   "avgExpected": 0.5,
   "aId": "418e7ba5-3e06-40ec-9b83-19d3bf10c9cb",
   "bId": "f4cd45db-8d83-423a-8936-c7d7a3b0ffad"
  },
  {
   "a": "John Pineda",
   "b": "Jillian Hart",
   "team": "Draft Day Disasters",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.2,
   "avgActual": -0.3,
   "avgExpected": -0.9,
   "aId": "099e3831-88c1-4907-9869-f193db58b64b",
   "bId": "c085cda7-0089-48e8-be2a-29f839ae0a88"
  },
  {
   "a": "Sean O'Connell",
   "b": "Josh Rito",
   "team": "The Dill Inquents",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.2,
   "avgActual": -3,
   "avgExpected": -3.4,
   "aId": "6d9b173b-57b7-499c-9bde-9bdafd152968",
   "bId": "a4c54a14-35b4-4b90-aabd-3d81ad719f4d"
  },
  {
   "a": "Patricia Kavanaugh",
   "b": "Ross Switkes",
   "team": "Color Coordinated Chaos",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 5,
   "avgExpected": 4.6,
   "aId": "9e2b45ad-e99b-4786-915c-d89e1d1bfee2",
   "bId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b"
  },
  {
   "a": "Susan Goeckeler",
   "b": "Mary Brashier",
   "team": "Ackley's Aces",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 0.1,
   "avgActual": -1.7,
   "avgExpected": -1.9,
   "aId": "201e264e-23da-435d-a4b5-0fea908d1098",
   "bId": "8fb87112-3824-4d16-96d1-3f4abcb2ae45"
  },
  {
   "a": "Jamie Hahn",
   "b": "Chanda Mccoy",
   "team": "Draft Day Disasters",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 1.8,
   "avgExpected": 1.7,
   "aId": "17019012-f2ff-4e9a-958a-928369685b36",
   "bId": "30cb78cb-f962-40f9-bd02-78d336920431"
  },
  {
   "a": "Barbara Hess",
   "b": "Sean O'Connell",
   "team": "The Dill Inquents",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 1.8,
   "avgExpected": 1.6,
   "aId": "21baa2cb-e882-442e-a5e0-a6d88126c9c3",
   "bId": "6d9b173b-57b7-499c-9bde-9bdafd152968"
  },
  {
   "a": "Susan St. Pierre",
   "b": "David Osborne",
   "team": "The Dill Inquents",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.1,
   "avgActual": -0.2,
   "avgExpected": -0.3,
   "aId": "001c2d38-829b-4fd0-b249-472f78337387",
   "bId": "418e7ba5-3e06-40ec-9b83-19d3bf10c9cb"
  },
  {
   "a": "Jillian Hart",
   "b": "John Lottier",
   "team": "Draft Day Disasters",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.1,
   "avgActual": -1.7,
   "avgExpected": -1.8,
   "aId": "c085cda7-0089-48e8-be2a-29f839ae0a88",
   "bId": "d1541ad0-e7fc-4783-949a-8f3f1ce9722d"
  },
  {
   "a": "Chaoxia Cheng",
   "b": "Bill Brandt",
   "team": "Draft Day Disasters",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 0,
   "avgActual": 0.9,
   "avgExpected": 0.9,
   "aId": "0b80a91d-626d-40b7-9cd9-e9ea96ec7e59",
   "bId": "dc530014-0e3b-4485-b265-8555bafe6e19"
  },
  {
   "a": "Simon Perry",
   "b": "Bill Brandt",
   "team": "Draft Day Disasters",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0,
   "avgActual": -1.6,
   "avgExpected": -1.6,
   "aId": "03c7bdf6-926c-4d90-9416-117cd3478b50",
   "bId": "dc530014-0e3b-4485-b265-8555bafe6e19"
  },
  {
   "a": "Denise Richmond",
   "b": "Scott Rubin",
   "team": "Color Coordinated Chaos",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0,
   "avgActual": 2.8,
   "avgExpected": 2.8,
   "aId": "422cd941-43db-4123-a07e-3316583f51ee",
   "bId": "c12175df-b959-4efe-95e7-e5298b783da8"
  },
  {
   "a": "Noelle Villa",
   "b": "John Lottier",
   "team": "Draft Day Disasters",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0,
   "avgActual": -0.7,
   "avgExpected": -0.6,
   "aId": "1898b8fb-ea1d-4bb8-bcc5-17b1fba29700",
   "bId": "d1541ad0-e7fc-4783-949a-8f3f1ce9722d"
  },
  {
   "a": "Amy Johnson",
   "b": "Juliana Drinane",
   "team": "The Dill Inquents",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -0.1,
   "avgActual": -2,
   "avgExpected": -1.9,
   "aId": "74e493de-dca7-4bf2-b9ac-630484282502",
   "bId": "c11092d7-b6a2-4099-8e9c-e90d17ed543c"
  },
  {
   "a": "Darren Ward",
   "b": "Rick Wickenheisser",
   "team": "Ackley's Aces",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.1,
   "avgActual": -1.7,
   "avgExpected": -1.4,
   "aId": "4a102871-ed81-4b77-b2fc-5397317959bb",
   "bId": "741048e8-2c91-4466-bb1c-1a624d1dabd9"
  },
  {
   "a": "Art Muth",
   "b": "Richard Demeuse",
   "team": "Color Coordinated Chaos",
   "n": 11,
   "w": 8,
   "l": 3,
   "synergy": -0.2,
   "avgActual": 0.9,
   "avgExpected": 1.2,
   "aId": "6bfc3a49-53cb-4c03-b8cb-94552158ccbe",
   "bId": "d88f1d1e-be4e-449e-b9b2-c468753e1dd3"
  },
  {
   "a": "Carol Mastroianni",
   "b": "Marc Friedman",
   "team": "Ackley's Aces",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.2,
   "avgActual": 1,
   "avgExpected": 1.3,
   "aId": "7f851011-9322-43f9-aff2-754565a615c7",
   "bId": "d7bdde76-1007-4b20-a804-4efcd08c3598"
  },
  {
   "a": "Simon Perry",
   "b": "Chaoxia Cheng",
   "team": "Draft Day Disasters",
   "n": 8,
   "w": 3,
   "l": 5,
   "synergy": -0.2,
   "avgActual": -1.9,
   "avgExpected": -1.6,
   "aId": "03c7bdf6-926c-4d90-9416-117cd3478b50",
   "bId": "0b80a91d-626d-40b7-9cd9-e9ea96ec7e59"
  },
  {
   "a": "Chaoxia Cheng",
   "b": "Jillian Hart",
   "team": "Draft Day Disasters",
   "n": 8,
   "w": 1,
   "l": 7,
   "synergy": -0.2,
   "avgActual": -3.1,
   "avgExpected": -2.7,
   "aId": "0b80a91d-626d-40b7-9cd9-e9ea96ec7e59",
   "bId": "c085cda7-0089-48e8-be2a-29f839ae0a88"
  },
  {
   "a": "Eric Berlinger",
   "b": "Bill Brandt",
   "team": "Draft Day Disasters",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": -0.2,
   "avgActual": 1,
   "avgExpected": 1.3,
   "aId": "2fda2042-6613-42f8-ad93-c3cff9a58f3e",
   "bId": "dc530014-0e3b-4485-b265-8555bafe6e19"
  },
  {
   "a": "Susan St. Pierre",
   "b": "Stanley Bonczek",
   "team": "The Dill Inquents",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.2,
   "avgActual": -1.2,
   "avgExpected": -0.8,
   "aId": "001c2d38-829b-4fd0-b249-472f78337387",
   "bId": "f4cd45db-8d83-423a-8936-c7d7a3b0ffad"
  },
  {
   "a": "Christine Papa",
   "b": "Marc Friedman",
   "team": "Ackley's Aces",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 0.8,
   "avgExpected": 1.1,
   "aId": "d156a552-7fa9-488e-9bfa-745feb859950",
   "bId": "d7bdde76-1007-4b20-a804-4efcd08c3598"
  },
  {
   "a": "Art Muth",
   "b": "Kristy Detore",
   "team": "Color Coordinated Chaos",
   "n": 8,
   "w": 3,
   "l": 5,
   "synergy": -0.3,
   "avgActual": -0.2,
   "avgExpected": 0.2,
   "aId": "6bfc3a49-53cb-4c03-b8cb-94552158ccbe",
   "bId": "74a2b723-b60c-4ffb-b60e-0913baf60b3c"
  },
  {
   "a": "Aimee Castellano",
   "b": "Stanley Bonczek",
   "team": "The Dill Inquents",
   "n": 10,
   "w": 5,
   "l": 5,
   "synergy": -0.3,
   "avgActual": 0.5,
   "avgExpected": 0.9,
   "aId": "e76985fb-efd1-4180-a340-e4f36abbc8b4",
   "bId": "f4cd45db-8d83-423a-8936-c7d7a3b0ffad"
  },
  {
   "a": "Jamie Hahn",
   "b": "Eric Berlinger",
   "team": "Draft Day Disasters",
   "n": 9,
   "w": 3,
   "l": 6,
   "synergy": -0.4,
   "avgActual": 0.2,
   "avgExpected": 0.8,
   "aId": "17019012-f2ff-4e9a-958a-928369685b36",
   "bId": "2fda2042-6613-42f8-ad93-c3cff9a58f3e"
  },
  {
   "a": "Sean O'Connell",
   "b": "Tara Kramer",
   "team": "The Dill Inquents",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -0.4,
   "avgActual": -3.6,
   "avgExpected": -2.9,
   "aId": "6d9b173b-57b7-499c-9bde-9bdafd152968",
   "bId": "dae62b8e-5f8e-4721-8f41-3218518d1e30"
  },
  {
   "a": "Simon Perry",
   "b": "Anthony Fallet",
   "team": "Draft Day Disasters",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -3.3,
   "avgExpected": -2.4,
   "aId": "03c7bdf6-926c-4d90-9416-117cd3478b50",
   "bId": "1949e493-55f0-4373-8c61-6a266543ddbf"
  },
  {
   "a": "Ross Switkes",
   "b": "Christine Ferraez",
   "team": "Color Coordinated Chaos",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": -0.5,
   "avgActual": 3,
   "avgExpected": 3.7,
   "aId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b",
   "bId": "ffe0a04b-eb97-4dda-8bc0-0ebe0fd1089e"
  },
  {
   "a": "Barbara Hess",
   "b": "Stanley Bonczek",
   "team": "The Dill Inquents",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.5,
   "avgActual": 2.3,
   "avgExpected": 3.2,
   "aId": "21baa2cb-e882-442e-a5e0-a6d88126c9c3",
   "bId": "f4cd45db-8d83-423a-8936-c7d7a3b0ffad"
  },
  {
   "a": "Juliana Drinane",
   "b": "Tara Kramer",
   "team": "The Dill Inquents",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -3.5,
   "avgExpected": -2.4,
   "aId": "c11092d7-b6a2-4099-8e9c-e90d17ed543c",
   "bId": "dae62b8e-5f8e-4721-8f41-3218518d1e30"
  },
  {
   "a": "Steven Gregov",
   "b": "Art Muth",
   "team": "Color Coordinated Chaos",
   "n": 6,
   "w": 0,
   "l": 6,
   "synergy": -0.5,
   "avgActual": -4,
   "avgExpected": -3.2,
   "aId": "3efad314-83fb-4441-a7bf-510228cea1f8",
   "bId": "6bfc3a49-53cb-4c03-b8cb-94552158ccbe"
  },
  {
   "a": "Susan Goeckeler",
   "b": "Marc Friedman",
   "team": "Ackley's Aces",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.7,
   "avgActual": -1.2,
   "avgExpected": 0,
   "aId": "201e264e-23da-435d-a4b5-0fea908d1098",
   "bId": "d7bdde76-1007-4b20-a804-4efcd08c3598"
  },
  {
   "a": "Mary Brashier",
   "b": "Marc Friedman",
   "team": "Ackley's Aces",
   "n": 9,
   "w": 3,
   "l": 6,
   "synergy": -0.8,
   "avgActual": -2.3,
   "avgExpected": -1.2,
   "aId": "8fb87112-3824-4d16-96d1-3f4abcb2ae45",
   "bId": "d7bdde76-1007-4b20-a804-4efcd08c3598"
  },
  {
   "a": "Jamie Hahn",
   "b": "Jillian Hart",
   "team": "Draft Day Disasters",
   "n": 12,
   "w": 3,
   "l": 9,
   "synergy": -0.8,
   "avgActual": -2.7,
   "avgExpected": -1.6,
   "aId": "17019012-f2ff-4e9a-958a-928369685b36",
   "bId": "c085cda7-0089-48e8-be2a-29f839ae0a88"
  },
  {
   "a": "Susan St. Pierre",
   "b": "Josh Rito",
   "team": "The Dill Inquents",
   "n": 9,
   "w": 2,
   "l": 7,
   "synergy": -0.8,
   "avgActual": -2.6,
   "avgExpected": -1.4,
   "aId": "001c2d38-829b-4fd0-b249-472f78337387",
   "bId": "a4c54a14-35b4-4b90-aabd-3d81ad719f4d"
  },
  {
   "a": "Art Muth",
   "b": "Scott Rubin",
   "team": "Color Coordinated Chaos",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.8,
   "avgActual": -1.2,
   "avgExpected": 0.3,
   "aId": "6bfc3a49-53cb-4c03-b8cb-94552158ccbe",
   "bId": "c12175df-b959-4efe-95e7-e5298b783da8"
  },
  {
   "a": "Anthony Fallet",
   "b": "Christine Papa",
   "team": "Ackley's Aces",
   "n": 9,
   "w": 5,
   "l": 4,
   "synergy": -0.9,
   "avgActual": -0.2,
   "avgExpected": 1.1,
   "aId": "1949e493-55f0-4373-8c61-6a266543ddbf",
   "bId": "d156a552-7fa9-488e-9bfa-745feb859950"
  },
  {
   "a": "Susan St. Pierre",
   "b": "Aimee Castellano",
   "team": "The Dill Inquents",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": -0.9,
   "avgActual": -1.6,
   "avgExpected": -0.2,
   "aId": "001c2d38-829b-4fd0-b249-472f78337387",
   "bId": "e76985fb-efd1-4180-a340-e4f36abbc8b4"
  },
  {
   "a": "Susan St. Pierre",
   "b": "Sean O'Connell",
   "team": "The Dill Inquents",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1,
   "avgActual": -7,
   "avgExpected": -4.6,
   "aId": "001c2d38-829b-4fd0-b249-472f78337387",
   "bId": "6d9b173b-57b7-499c-9bde-9bdafd152968"
  },
  {
   "a": "Richard Demeuse",
   "b": "Ross Switkes",
   "team": "Color Coordinated Chaos",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": -1,
   "avgActual": 3.1,
   "avgExpected": 4.7,
   "aId": "d88f1d1e-be4e-449e-b9b2-c468753e1dd3",
   "bId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b"
  },
  {
   "a": "Steven Gregov",
   "b": "Patricia Kavanaugh",
   "team": "Color Coordinated Chaos",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1,
   "avgActual": -1,
   "avgExpected": 1,
   "aId": "3efad314-83fb-4441-a7bf-510228cea1f8",
   "bId": "9e2b45ad-e99b-4786-915c-d89e1d1bfee2"
  },
  {
   "a": "Sean O'Connell",
   "b": "Stanley Bonczek",
   "team": "The Dill Inquents",
   "n": 13,
   "w": 3,
   "l": 10,
   "synergy": -1.1,
   "avgActual": -2.6,
   "avgExpected": -1.2,
   "aId": "6d9b173b-57b7-499c-9bde-9bdafd152968",
   "bId": "f4cd45db-8d83-423a-8936-c7d7a3b0ffad"
  },
  {
   "a": "Susan St. Pierre",
   "b": "Juliana Drinane",
   "team": "The Dill Inquents",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -1.1,
   "avgActual": -5.2,
   "avgExpected": -3.2,
   "aId": "001c2d38-829b-4fd0-b249-472f78337387",
   "bId": "c11092d7-b6a2-4099-8e9c-e90d17ed543c"
  },
  {
   "a": "John Fallone",
   "b": "Bob Castellano",
   "team": "The Dill Inquents",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.1,
   "avgActual": -5.2,
   "avgExpected": -3.1,
   "aId": "5127c0b9-aaf8-49c5-a94f-bf92e7ae60f8",
   "bId": "7bb24154-bd52-4081-a3e6-0b8afcde62d5"
  },
  {
   "a": "Tara Kramer",
   "b": "Aimee Castellano",
   "team": "The Dill Inquents",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -1.2,
   "avgActual": -3.4,
   "avgExpected": -1.6,
   "aId": "dae62b8e-5f8e-4721-8f41-3218518d1e30",
   "bId": "e76985fb-efd1-4180-a340-e4f36abbc8b4"
  },
  {
   "a": "Anthony Fallet",
   "b": "John Lottier",
   "team": "Ackley's Aces",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1.2,
   "avgActual": 1,
   "avgExpected": 3.7,
   "aId": "1949e493-55f0-4373-8c61-6a266543ddbf",
   "bId": "d1541ad0-e7fc-4783-949a-8f3f1ce9722d"
  },
  {
   "a": "Susan Goeckeler",
   "b": "Rick Wickenheisser",
   "team": "Ackley's Aces",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.3,
   "avgActual": -6.5,
   "avgExpected": -3.9,
   "aId": "201e264e-23da-435d-a4b5-0fea908d1098",
   "bId": "741048e8-2c91-4466-bb1c-1a624d1dabd9"
  },
  {
   "a": "Patricia Kavanaugh",
   "b": "Kelly Arvidson",
   "team": "Color Coordinated Chaos",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -1.3,
   "avgActual": -1.7,
   "avgExpected": 0.6,
   "aId": "9e2b45ad-e99b-4786-915c-d89e1d1bfee2",
   "bId": "c053f5d6-16e1-4847-b27b-49fe41f367c6"
  },
  {
   "a": "Darren Ward",
   "b": "Eric Luque",
   "team": "Ackley's Aces",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.3,
   "avgActual": -7,
   "avgExpected": -4.4,
   "aId": "4a102871-ed81-4b77-b2fc-5397317959bb",
   "bId": "b3c28078-ab31-4002-9e09-5fa3f627d8c1"
  },
  {
   "a": "Denise Richmond",
   "b": "Christine Ferraez",
   "team": "Color Coordinated Chaos",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -1.4,
   "avgActual": -1,
   "avgExpected": 1.2,
   "aId": "422cd941-43db-4123-a07e-3316583f51ee",
   "bId": "ffe0a04b-eb97-4dda-8bc0-0ebe0fd1089e"
  },
  {
   "a": "Steven Gregov",
   "b": "Kristy Detore",
   "team": "Color Coordinated Chaos",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -1.5,
   "avgActual": -5,
   "avgExpected": -2.2,
   "aId": "3efad314-83fb-4441-a7bf-510228cea1f8",
   "bId": "74a2b723-b60c-4ffb-b60e-0913baf60b3c"
  },
  {
   "a": "John Fallone",
   "b": "Juliana Drinane",
   "team": "The Dill Inquents",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -1.5,
   "avgActual": -5.2,
   "avgExpected": -2.6,
   "aId": "5127c0b9-aaf8-49c5-a94f-bf92e7ae60f8",
   "bId": "c11092d7-b6a2-4099-8e9c-e90d17ed543c"
  },
  {
   "a": "Anthony Fallet",
   "b": "Darren Ward",
   "team": "Ackley's Aces",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.5,
   "avgActual": -2.2,
   "avgExpected": 0.9,
   "aId": "1949e493-55f0-4373-8c61-6a266543ddbf",
   "bId": "4a102871-ed81-4b77-b2fc-5397317959bb"
  },
  {
   "a": "Susan Ackley",
   "b": "Eric Luque",
   "team": "Ackley's Aces",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -1.5,
   "avgActual": -1.8,
   "avgExpected": 1,
   "aId": "07a0e948-6308-4920-a6a8-1d5945552ecb",
   "bId": "b3c28078-ab31-4002-9e09-5fa3f627d8c1"
  },
  {
   "a": "Susan Goeckeler",
   "b": "Christine Papa",
   "team": "Ackley's Aces",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.7,
   "avgActual": -1.7,
   "avgExpected": 1.7,
   "aId": "201e264e-23da-435d-a4b5-0fea908d1098",
   "bId": "d156a552-7fa9-488e-9bfa-745feb859950"
  },
  {
   "a": "Simon Perry",
   "b": "Eric Berlinger",
   "team": "Draft Day Disasters",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -1.7,
   "avgActual": -5.8,
   "avgExpected": -2.7,
   "aId": "03c7bdf6-926c-4d90-9416-117cd3478b50",
   "bId": "2fda2042-6613-42f8-ad93-c3cff9a58f3e"
  },
  {
   "a": "Josh Rito",
   "b": "Stanley Bonczek",
   "team": "The Dill Inquents",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.7,
   "avgActual": -7,
   "avgExpected": -3,
   "aId": "a4c54a14-35b4-4b90-aabd-3d81ad719f4d",
   "bId": "f4cd45db-8d83-423a-8936-c7d7a3b0ffad"
  },
  {
   "a": "Rick Wickenheisser",
   "b": "Eric Luque",
   "team": "Ackley's Aces",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.3,
   "avgActual": -11,
   "avgExpected": -5.7,
   "aId": "741048e8-2c91-4466-bb1c-1a624d1dabd9",
   "bId": "b3c28078-ab31-4002-9e09-5fa3f627d8c1"
  },
  {
   "a": "Anthony Fallet",
   "b": "Carol Mastroianni",
   "team": "Ackley's Aces",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -2.3,
   "avgActual": -3,
   "avgExpected": 1.6,
   "aId": "1949e493-55f0-4373-8c61-6a266543ddbf",
   "bId": "7f851011-9322-43f9-aff2-754565a615c7"
  },
  {
   "a": "Steven Gregov",
   "b": "Kelly Arvidson",
   "team": "Color Coordinated Chaos",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -2.4,
   "avgActual": -6.8,
   "avgExpected": -2.9,
   "aId": "3efad314-83fb-4441-a7bf-510228cea1f8",
   "bId": "c053f5d6-16e1-4847-b27b-49fe41f367c6"
  },
  {
   "a": "John Fallone",
   "b": "Amy Johnson",
   "team": "The Dill Inquents",
   "n": 6,
   "w": 0,
   "l": 6,
   "synergy": -2.4,
   "avgActual": -4.7,
   "avgExpected": -0.6,
   "aId": "5127c0b9-aaf8-49c5-a94f-bf92e7ae60f8",
   "bId": "74e493de-dca7-4bf2-b9ac-630484282502"
  },
  {
   "a": "Susan St. Pierre",
   "b": "Layla Darian",
   "team": "The Dill Inquents",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.4,
   "avgActual": -8.7,
   "avgExpected": -3,
   "aId": "001c2d38-829b-4fd0-b249-472f78337387",
   "bId": "77234c18-83ca-4180-8a45-181f7d347542"
  },
  {
   "a": "Denise Richmond",
   "b": "Art Muth",
   "team": "Color Coordinated Chaos",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -2.6,
   "avgActual": -3.7,
   "avgExpected": 0.4,
   "aId": "422cd941-43db-4123-a07e-3316583f51ee",
   "bId": "6bfc3a49-53cb-4c03-b8cb-94552158ccbe"
  },
  {
   "a": "David Osborne",
   "b": "Amy Johnson",
   "team": "The Dill Inquents",
   "n": 6,
   "w": 0,
   "l": 6,
   "synergy": -3.6,
   "avgActual": -6.3,
   "avgExpected": -0.4,
   "aId": "418e7ba5-3e06-40ec-9b83-19d3bf10c9cb",
   "bId": "74e493de-dca7-4bf2-b9ac-630484282502"
  }
 ],
 "matches": [
  {
   "result": "away",
   "week": 1,
   "home": "Ackley's Aces",
   "away": "Color Coordinated Chaos",
   "time": "2026-06-17T19:30:00",
   "complete": true,
   "homePoints": 584,
   "awayPoints": 624,
   "homeGW": 13,
   "awayGW": 19,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Susan Ackley",
      "Anthony Fallet"
     ],
     "a": [
      "Christine Ferraez",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Carol Mastroianni",
      "Eric Luque"
     ],
     "a": [
      "Kelly Arvidson",
      "Steven Gregov"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Susan Goeckeler",
      "Marc Friedman"
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
     "as": 15,
     "h": [
      "Mary Brashier",
      "Rick Wickenheisser"
     ],
     "a": [
      "Kristy Detore",
      "Art Muth"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Susan Ackley",
      "Carol Mastroianni"
     ],
     "a": [
      "Christine Ferraez",
      "Denise Richmond"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Christine Papa",
      "Susan Goeckeler"
     ],
     "a": [
      "Kelly Arvidson",
      "Kristy Detore"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Anthony Fallet",
      "Eric Luque"
     ],
     "a": [
      "Ross Switkes",
      "Steven Gregov"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Marc Friedman",
      "Rick Wickenheisser"
     ],
     "a": [
      "Art Muth",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Carol Mastroianni",
      "Eric Luque"
     ],
     "a": [
      "Christine Ferraez",
      "Art Muth"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Susan Ackley",
      "Marc Friedman"
     ],
     "a": [
      "Kelly Arvidson",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Christine Papa",
      "Anthony Fallet"
     ],
     "a": [
      "Denise Richmond",
      "Steven Gregov"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Mary Brashier",
      "Rick Wickenheisser"
     ],
     "a": [
      "Kristy Detore",
      "Richard Demeuse"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Susan Ackley",
      "Christine Papa"
     ],
     "a": [
      "Christine Ferraez",
      "Kelly Arvidson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Mary Brashier",
      "Susan Goeckeler"
     ],
     "a": [
      "Denise Richmond",
      "Kristy Detore"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Eric Luque",
      "Rick Wickenheisser"
     ],
     "a": [
      "Ross Switkes",
      "Art Muth"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Anthony Fallet",
      "Marc Friedman"
     ],
     "a": [
      "Steven Gregov",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Carol Mastroianni",
      "Anthony Fallet"
     ],
     "a": [
      "Kelly Arvidson",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Christine Papa",
      "Eric Luque"
     ],
     "a": [
      "Christine Ferraez",
      "Art Muth"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Mary Brashier",
      "Marc Friedman"
     ],
     "a": [
      "Denise Richmond",
      "Steven Gregov"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Susan Goeckeler",
      "Rick Wickenheisser"
     ],
     "a": [
      "Kristy Detore",
      "Richard Demeuse"
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
      "Christine Ferraez",
      "Kelly Arvidson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 27,
     "as": 29,
     "h": [
      "Mary Brashier",
      "Susan Goeckeler"
     ],
     "a": [
      "Denise Richmond",
      "Kristy Detore"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Anthony Fallet",
      "Eric Luque"
     ],
     "a": [
      "Ross Switkes",
      "Steven Gregov"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Marc Friedman",
      "Rick Wickenheisser"
     ],
     "a": [
      "Art Muth",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Susan Ackley",
      "Anthony Fallet"
     ],
     "a": [
      "Christine Ferraez",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Carol Mastroianni",
      "Marc Friedman"
     ],
     "a": [
      "Kelly Arvidson",
      "Art Muth"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Christine Papa",
      "Eric Luque"
     ],
     "a": [
      "Kristy Detore",
      "Steven Gregov"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Susan Goeckeler",
      "Rick Wickenheisser"
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
     "as": 16,
     "h": [
      "Carol Mastroianni",
      "Mary Brashier"
     ],
     "a": [
      "Christine Ferraez",
      "Denise Richmond"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Susan Ackley",
      "Christine Papa"
     ],
     "a": [
      "Kelly Arvidson",
      "Kristy Detore"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Eric Luque",
      "Rick Wickenheisser"
     ],
     "a": [
      "Ross Switkes",
      "Art Muth"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Anthony Fallet",
      "Marc Friedman"
     ],
     "a": [
      "Steven Gregov",
      "Richard Demeuse"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 1,
   "home": "Draft Day Disasters",
   "away": "The Dill Inquents",
   "time": "2026-06-18T19:30:00",
   "complete": true,
   "homePoints": 641,
   "awayPoints": 588,
   "homeGW": 20,
   "awayGW": 12,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Chanda Mccoy",
      "Thomas Connolly"
     ],
     "a": [
      "Aimee Castellano",
      "Sean O'Connell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Chaoxia Cheng",
      "Simon Perry"
     ],
     "a": [
      "Tara Kramer",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Jillian Hart",
      "Bill Brandt"
     ],
     "a": [
      "Susan St. Pierre",
      "John Fallone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Jamie Hahn",
      "Eric Berlinger"
     ],
     "a": [
      "Amy Johnson",
      "Josh Rito"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Chanda Mccoy",
      "Chaoxia Cheng"
     ],
     "a": [
      "Aimee Castellano",
      "Tara Kramer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Jamie Hahn",
      "Jillian Hart"
     ],
     "a": [
      "Susan St. Pierre",
      "Amy Johnson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Thomas Connolly",
      "Bill Brandt"
     ],
     "a": [
      "Sean O'Connell",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Simon Perry",
      "Eric Berlinger"
     ],
     "a": [
      "David Osborne",
      "John Fallone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jamie Hahn",
      "Thomas Connolly"
     ],
     "a": [
      "Tara Kramer",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Chanda Mccoy",
      "Simon Perry"
     ],
     "a": [
      "Susan St. Pierre",
      "Sean O'Connell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Chaoxia Cheng",
      "Bill Brandt"
     ],
     "a": [
      "Aimee Castellano",
      "David Osborne"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jillian Hart",
      "Eric Berlinger"
     ],
     "a": [
      "Amy Johnson",
      "Josh Rito"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Chanda Mccoy",
      "Jamie Hahn"
     ],
     "a": [
      "Tara Kramer",
      "Amy Johnson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Chaoxia Cheng",
      "Jillian Hart"
     ],
     "a": [
      "Aimee Castellano",
      "Susan St. Pierre"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Thomas Connolly",
      "Simon Perry"
     ],
     "a": [
      "Sean O'Connell",
      "David Osborne"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Bill Brandt",
      "Eric Berlinger"
     ],
     "a": [
      "Josh Rito",
      "John Fallone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Chanda Mccoy",
      "Simon Perry"
     ],
     "a": [
      "Aimee Castellano",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jamie Hahn",
      "Thomas Connolly"
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
     "as": 11,
     "h": [
      "Chaoxia Cheng",
      "Bill Brandt"
     ],
     "a": [
      "Susan St. Pierre",
      "Josh Rito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jillian Hart",
      "Eric Berlinger"
     ],
     "a": [
      "Amy Johnson",
      "John Fallone"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Chanda Mccoy",
      "Chaoxia Cheng"
     ],
     "a": [
      "Aimee Castellano",
      "Tara Kramer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jamie Hahn",
      "Jillian Hart"
     ],
     "a": [
      "Susan St. Pierre",
      "Amy Johnson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Thomas Connolly",
      "Simon Perry"
     ],
     "a": [
      "Sean O'Connell",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Bill Brandt",
      "Eric Berlinger"
     ],
     "a": [
      "Josh Rito",
      "John Fallone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Chanda Mccoy",
      "Thomas Connolly"
     ],
     "a": [
      "Aimee Castellano",
      "Sean O'Connell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jamie Hahn",
      "Simon Perry"
     ],
     "a": [
      "Susan St. Pierre",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Chaoxia Cheng",
      "Eric Berlinger"
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
     "as": 16,
     "h": [
      "Jillian Hart",
      "Bill Brandt"
     ],
     "a": [
      "Amy Johnson",
      "John Fallone"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Chanda Mccoy",
      "Jamie Hahn"
     ],
     "a": [
      "Tara Kramer",
      "Amy Johnson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Chaoxia Cheng",
      "Jillian Hart"
     ],
     "a": [
      "Aimee Castellano",
      "Susan St. Pierre"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Thomas Connolly",
      "Bill Brandt"
     ],
     "a": [
      "Stanley Bonczek",
      "Josh Rito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Simon Perry",
      "Eric Berlinger"
     ],
     "a": [
      "Sean O'Connell",
      "David Osborne"
     ]
    }
   ],
   "subs": [
    "Thomas Connolly"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Color Coordinated Chaos",
   "away": "The Dill Inquents",
   "time": "2026-06-24T19:30:00",
   "complete": true,
   "homePoints": 614,
   "awayPoints": 559,
   "homeGW": 21,
   "awayGW": 11,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kelly Arvidson",
      "Ross Switkes"
     ],
     "a": [
      "Aimee Castellano",
      "Sean O'Connell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Cally Kerrigan",
      "Steven Gregov"
     ],
     "a": [
      "Barbara Hess",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Patricia Kavanaugh",
      "Art Muth"
     ],
     "a": [
      "Susan St. Pierre",
      "Josh Rito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kristy Detore",
      "Scott Rubin"
     ],
     "a": [
      "Juliana Drinane",
      "John Fallone"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kelly Arvidson",
      "Kristen Soucie"
     ],
     "a": [
      "Barbara Hess",
      "Susan St. Pierre"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Cally Kerrigan",
      "Kristy Detore"
     ],
     "a": [
      "Aimee Castellano",
      "Amy Johnson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Ross Switkes",
      "Steven Gregov"
     ],
     "a": [
      "Stanley Bonczek",
      "Sean O'Connell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Scott Rubin",
      "Richard Demeuse"
     ],
     "a": [
      "Josh Rito",
      "Bob Castellano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Cally Kerrigan",
      "Ross Switkes"
     ],
     "a": [
      "Barbara Hess",
      "Sean O'Connell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Kelly Arvidson",
      "Steven Gregov"
     ],
     "a": [
      "Aimee Castellano",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Kristen Soucie",
      "Art Muth"
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
     "as": 12,
     "h": [
      "Patricia Kavanaugh",
      "Richard Demeuse"
     ],
     "a": [
      "Juliana Drinane",
      "John Fallone"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Cally Kerrigan",
      "Patricia Kavanaugh"
     ],
     "a": [
      "Susan St. Pierre",
      "Juliana Drinane"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Kristen Soucie",
      "Kristy Detore"
     ],
     "a": [
      "Aimee Castellano",
      "Amy Johnson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Ross Switkes",
      "Art Muth"
     ],
     "a": [
      "Stanley Bonczek",
      "Josh Rito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Scott Rubin",
      "Richard Demeuse"
     ],
     "a": [
      "Bob Castellano",
      "John Fallone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kristen Soucie",
      "Art Muth"
     ],
     "a": [
      "Amy Johnson",
      "Josh Rito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kelly Arvidson",
      "Steven Gregov"
     ],
     "a": [
      "Barbara Hess",
      "Sean O'Connell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Patricia Kavanaugh",
      "Richard Demeuse"
     ],
     "a": [
      "Susan St. Pierre",
      "John Fallone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Kristy Detore",
      "Scott Rubin"
     ],
     "a": [
      "Juliana Drinane",
      "Bob Castellano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Kelly Arvidson",
      "Cally Kerrigan"
     ],
     "a": [
      "Barbara Hess",
      "Aimee Castellano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Patricia Kavanaugh",
      "Kristy Detore"
     ],
     "a": [
      "Susan St. Pierre",
      "Juliana Drinane"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Ross Switkes",
      "Art Muth"
     ],
     "a": [
      "Stanley Bonczek",
      "Josh Rito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Steven Gregov",
      "Scott Rubin"
     ],
     "a": [
      "Sean O'Connell",
      "John Fallone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kelly Arvidson",
      "Ross Switkes"
     ],
     "a": [
      "Barbara Hess",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Cally Kerrigan",
      "Scott Rubin"
     ],
     "a": [
      "Susan St. Pierre",
      "Josh Rito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Kristen Soucie",
      "Steven Gregov"
     ],
     "a": [
      "Aimee Castellano",
      "Sean O'Connell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kristy Detore",
      "Richard Demeuse"
     ],
     "a": [
      "Amy Johnson",
      "Bob Castellano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Kelly Arvidson",
      "Cally Kerrigan"
     ],
     "a": [
      "Barbara Hess",
      "Aimee Castellano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kristen Soucie",
      "Patricia Kavanaugh"
     ],
     "a": [
      "Amy Johnson",
      "Juliana Drinane"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Ross Switkes",
      "Steven Gregov"
     ],
     "a": [
      "Stanley Bonczek",
      "Sean O'Connell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Art Muth",
      "Richard Demeuse"
     ],
     "a": [
      "Bob Castellano",
      "John Fallone"
     ]
    }
   ],
   "subs": [
    "Kristen Soucie",
    "Cally Kerrigan"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Ackley's Aces",
   "away": "Draft Day Disasters",
   "time": "2026-06-25T19:30:00",
   "complete": true,
   "homePoints": 633,
   "awayPoints": 573,
   "homeGW": 19,
   "awayGW": 13,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Susan Ackley",
      "Anthony Fallet"
     ],
     "a": [
      "Kelly Arvidson",
      "Robbie Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Carol Mastroianni",
      "David Osborne"
     ],
     "a": [
      "Chaoxia Cheng",
      "Simon Perry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Susan Goeckeler",
      "Darren Ward"
     ],
     "a": [
      "Jamie Hahn",
      "Eric Berlinger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Christine Papa",
      "Marc Friedman"
     ],
     "a": [
      "Jillian Hart",
      "Bill Brandt"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Susan Ackley",
      "Carol Mastroianni"
     ],
     "a": [
      "Kelly Arvidson",
      "Chaoxia Cheng"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Christine Papa",
      "Susan Goeckeler"
     ],
     "a": [
      "Jamie Hahn",
      "Jillian Hart"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Anthony Fallet",
      "Darren Ward"
     ],
     "a": [
      "Robbie Oddy",
      "Simon Perry"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "David Osborne",
      "Marc Friedman"
     ],
     "a": [
      "John Pineda",
      "Eric Berlinger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Christine Papa",
      "Anthony Fallet"
     ],
     "a": [
      "Chaoxia Cheng",
      "Simon Perry"
     ]
    },
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
      "Jamie Hahn",
      "Robbie Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Carol Mastroianni",
      "Darren Ward"
     ],
     "a": [
      "Kelly Arvidson",
      "John Pineda"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Susan Goeckeler",
      "Marc Friedman"
     ],
     "a": [
      "Jillian Hart",
      "Bill Brandt"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Susan Ackley",
      "Christine Papa"
     ],
     "a": [
      "Chaoxia Cheng",
      "Jillian Hart"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Carol Mastroianni",
      "Susan Goeckeler"
     ],
     "a": [
      "Kelly Arvidson",
      "Jamie Hahn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Anthony Fallet",
      "David Osborne"
     ],
     "a": [
      "Robbie Oddy",
      "John Pineda"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Darren Ward",
      "Marc Friedman"
     ],
     "a": [
      "Bill Brandt",
      "Eric Berlinger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Susan Ackley",
      "David Osborne"
     ],
     "a": [
      "Kelly Arvidson",
      "Simon Perry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Christine Papa",
      "Anthony Fallet"
     ],
     "a": [
      "Chaoxia Cheng",
      "John Pineda"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Carol Mastroianni",
      "Darren Ward"
     ],
     "a": [
      "Jamie Hahn",
      "Bill Brandt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Susan Goeckeler",
      "Marc Friedman"
     ],
     "a": [
      "Jillian Hart",
      "Eric Berlinger"
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
      "Kelly Arvidson",
      "Chaoxia Cheng"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Christine Papa",
      "Susan Goeckeler"
     ],
     "a": [
      "Jamie Hahn",
      "Jillian Hart"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Anthony Fallet",
      "David Osborne"
     ],
     "a": [
      "Robbie Oddy",
      "Simon Perry"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Darren Ward",
      "Marc Friedman"
     ],
     "a": [
      "Bill Brandt",
      "Eric Berlinger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Susan Ackley",
      "Anthony Fallet"
     ],
     "a": [
      "Kelly Arvidson",
      "Robbie Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Christine Papa",
      "David Osborne"
     ],
     "a": [
      "Jamie Hahn",
      "Simon Perry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Carol Mastroianni",
      "Marc Friedman"
     ],
     "a": [
      "Chaoxia Cheng",
      "John Pineda"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Susan Goeckeler",
      "Darren Ward"
     ],
     "a": [
      "Jillian Hart",
      "Eric Berlinger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Susan Ackley",
      "Christine Papa"
     ],
     "a": [
      "Chaoxia Cheng",
      "Jillian Hart"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Carol Mastroianni",
      "Susan Goeckeler"
     ],
     "a": [
      "Kelly Arvidson",
      "Jamie Hahn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Anthony Fallet",
      "Darren Ward"
     ],
     "a": [
      "Simon Perry",
      "Bill Brandt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "David Osborne",
      "Marc Friedman"
     ],
     "a": [
      "Robbie Oddy",
      "John Pineda"
     ]
    }
   ],
   "subs": [
    "David Osborne",
    "Kelly Arvidson"
   ]
  },
  {
   "result": "home",
   "week": 3,
   "home": "Color Coordinated Chaos",
   "away": "Ackley's Aces",
   "time": "2026-07-01T19:30:00",
   "complete": true,
   "homePoints": 636,
   "awayPoints": 566,
   "homeGW": 20,
   "awayGW": 12,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kelly Arvidson",
      "Ross Switkes"
     ],
     "a": [
      "Susan Ackley",
      "Anthony Fallet"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Christine Ferraez",
      "Steven Gregov"
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
     "as": 23,
     "h": [
      "Kristy Detore",
      "Art Muth"
     ],
     "a": [
      "Mary Brashier",
      "Rick Wickenheisser"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Patricia Kavanaugh",
      "Richard Demeuse"
     ],
     "a": [
      "Susan Goeckeler",
      "Darren Ward"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Kelly Arvidson",
      "Christine Ferraez"
     ],
     "a": [
      "Susan Ackley",
      "Mary Brashier"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Denise Richmond",
      "Kristy Detore"
     ],
     "a": [
      "Carol Mastroianni",
      "Susan Goeckeler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Ross Switkes",
      "Steven Gregov"
     ],
     "a": [
      "Anthony Fallet",
      "Marc Friedman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Art Muth",
      "Richard Demeuse"
     ],
     "a": [
      "Darren Ward",
      "Rick Wickenheisser"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Christine Ferraez",
      "Steven Gregov"
     ],
     "a": [
      "Susan Ackley",
      "Darren Ward"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Kelly Arvidson",
      "Art Muth"
     ],
     "a": [
      "Carol Mastroianni",
      "Anthony Fallet"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Denise Richmond",
      "Ross Switkes"
     ],
     "a": [
      "Mary Brashier",
      "Marc Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Patricia Kavanaugh",
      "Richard Demeuse"
     ],
     "a": [
      "Susan Goeckeler",
      "Rick Wickenheisser"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Kelly Arvidson",
      "Denise Richmond"
     ],
     "a": [
      "Susan Ackley",
      "Carol Mastroianni"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Patricia Kavanaugh",
      "Kristy Detore"
     ],
     "a": [
      "Mary Brashier",
      "Susan Goeckeler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Steven Gregov",
      "Richard Demeuse"
     ],
     "a": [
      "Anthony Fallet",
      "Darren Ward"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Ross Switkes",
      "Art Muth"
     ],
     "a": [
      "Marc Friedman",
      "Rick Wickenheisser"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Christine Ferraez",
      "Ross Switkes"
     ],
     "a": [
      "Carol Mastroianni",
      "Anthony Fallet"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Denise Richmond",
      "Steven Gregov"
     ],
     "a": [
      "Susan Ackley",
      "Darren Ward"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Patricia Kavanaugh",
      "Art Muth"
     ],
     "a": [
      "Mary Brashier",
      "Marc Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kristy Detore",
      "Richard Demeuse"
     ],
     "a": [
      "Susan Goeckeler",
      "Rick Wickenheisser"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kelly Arvidson",
      "Christine Ferraez"
     ],
     "a": [
      "Susan Ackley",
      "Carol Mastroianni"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Patricia Kavanaugh",
      "Kristy Detore"
     ],
     "a": [
      "Mary Brashier",
      "Susan Goeckeler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Ross Switkes",
      "Steven Gregov"
     ],
     "a": [
      "Anthony Fallet",
      "Marc Friedman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Art Muth",
      "Richard Demeuse"
     ],
     "a": [
      "Darren Ward",
      "Rick Wickenheisser"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kelly Arvidson",
      "Ross Switkes"
     ],
     "a": [
      "Susan Ackley",
      "Anthony Fallet"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Christine Ferraez",
      "Art Muth"
     ],
     "a": [
      "Carol Mastroianni",
      "Darren Ward"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Denise Richmond",
      "Steven Gregov"
     ],
     "a": [
      "Susan Goeckeler",
      "Marc Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kristy Detore",
      "Richard Demeuse"
     ],
     "a": [
      "Mary Brashier",
      "Rick Wickenheisser"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Christine Ferraez",
      "Patricia Kavanaugh"
     ],
     "a": [
      "Susan Ackley",
      "Mary Brashier"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kelly Arvidson",
      "Denise Richmond"
     ],
     "a": [
      "Carol Mastroianni",
      "Susan Goeckeler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Steven Gregov",
      "Richard Demeuse"
     ],
     "a": [
      "Anthony Fallet",
      "Darren Ward"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Ross Switkes",
      "Art Muth"
     ],
     "a": [
      "Marc Friedman",
      "Rick Wickenheisser"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 3,
   "home": "The Dill Inquents",
   "away": "Draft Day Disasters",
   "time": "2026-07-02T19:30:00",
   "complete": true,
   "homePoints": 594,
   "awayPoints": 630,
   "homeGW": 13,
   "awayGW": 19,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Aimee Castellano",
      "Stanley Bonczek"
     ],
     "a": [
      "Chanda Mccoy",
      "Robbie Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Susan St. Pierre",
      "David Osborne"
     ],
     "a": [
      "Chaoxia Cheng",
      "Simon Perry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 30,
     "as": 28,
     "h": [
      "Juliana Drinane",
      "Bob Drinane"
     ],
     "a": [
      "Jamie Hahn",
      "Eric Berlinger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Tara Kramer",
      "Bob Castellano"
     ],
     "a": [
      "Jillian Hart",
      "Bill Brandt"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Aimee Castellano",
      "Susan St. Pierre"
     ],
     "a": [
      "Chanda Mccoy",
      "Jamie Hahn"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Amy Johnson",
      "Juliana Drinane"
     ],
     "a": [
      "Chaoxia Cheng",
      "Jillian Hart"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Stanley Bonczek",
      "David Osborne"
     ],
     "a": [
      "Robbie Oddy",
      "Simon Perry"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Bob Drinane",
      "Bob Castellano"
     ],
     "a": [
      "Bill Brandt",
      "Eric Berlinger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Susan St. Pierre",
      "David Osborne"
     ],
     "a": [
      "Chanda Mccoy",
      "Bill Brandt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Aimee Castellano",
      "Bob Drinane"
     ],
     "a": [
      "Chaoxia Cheng",
      "Robbie Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Amy Johnson",
      "Stanley Bonczek"
     ],
     "a": [
      "Jamie Hahn",
      "Simon Perry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Tara Kramer",
      "Bob Castellano"
     ],
     "a": [
      "Jillian Hart",
      "Eric Berlinger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Aimee Castellano",
      "Amy Johnson"
     ],
     "a": [
      "Chanda Mccoy",
      "Chaoxia Cheng"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Tara Kramer",
      "Juliana Drinane"
     ],
     "a": [
      "Jamie Hahn",
      "Jillian Hart"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "David Osborne",
      "Bob Castellano"
     ],
     "a": [
      "Robbie Oddy",
      "Bill Brandt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Stanley Bonczek",
      "Bob Drinane"
     ],
     "a": [
      "Simon Perry",
      "Eric Berlinger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Susan St. Pierre",
      "Stanley Bonczek"
     ],
     "a": [
      "Chaoxia Cheng",
      "Robbie Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Amy Johnson",
      "David Osborne"
     ],
     "a": [
      "Chanda Mccoy",
      "Bill Brandt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Tara Kramer",
      "Bob Drinane"
     ],
     "a": [
      "Jamie Hahn",
      "Simon Perry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Juliana Drinane",
      "Bob Castellano"
     ],
     "a": [
      "Jillian Hart",
      "Eric Berlinger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Aimee Castellano",
      "Susan St. Pierre"
     ],
     "a": [
      "Chanda Mccoy",
      "Chaoxia Cheng"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Tara Kramer",
      "Juliana Drinane"
     ],
     "a": [
      "Jamie Hahn",
      "Jillian Hart"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Stanley Bonczek",
      "David Osborne"
     ],
     "a": [
      "Robbie Oddy",
      "Simon Perry"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Bob Drinane",
      "Bob Castellano"
     ],
     "a": [
      "Bill Brandt",
      "Eric Berlinger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Aimee Castellano",
      "Stanley Bonczek"
     ],
     "a": [
      "Chanda Mccoy",
      "Robbie Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Susan St. Pierre",
      "Bob Drinane"
     ],
     "a": [
      "Chaoxia Cheng",
      "Bill Brandt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Amy Johnson",
      "David Osborne"
     ],
     "a": [
      "Jillian Hart",
      "Simon Perry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Juliana Drinane",
      "Bob Castellano"
     ],
     "a": [
      "Jamie Hahn",
      "Eric Berlinger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Susan St. Pierre",
      "Tara Kramer"
     ],
     "a": [
      "Chanda Mccoy",
      "Jamie Hahn"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Aimee Castellano",
      "Amy Johnson"
     ],
     "a": [
      "Chaoxia Cheng",
      "Jillian Hart"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "David Osborne",
      "Bob Castellano"
     ],
     "a": [
      "Robbie Oddy",
      "Bill Brandt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Stanley Bonczek",
      "Bob Drinane"
     ],
     "a": [
      "Simon Perry",
      "Eric Berlinger"
     ]
    }
   ],
   "subs": [
    "Bob Drinane"
   ]
  },
  {
   "result": "away",
   "week": 4,
   "home": "The Dill Inquents",
   "away": "Color Coordinated Chaos",
   "time": "2026-07-08T19:30:00",
   "complete": true,
   "homePoints": 595,
   "awayPoints": 639,
   "homeGW": 13,
   "awayGW": 19,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Aimee Castellano",
      "Stanley Bonczek"
     ],
     "a": [
      "Kelly Arvidson",
      "Jamison Rowles"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Susan St. Pierre",
      "Sean O'Connell"
     ],
     "a": [
      "Christine Ferraez",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Amy Johnson",
      "David Osborne"
     ],
     "a": [
      "Cally Kerrigan",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Juliana Drinane",
      "Bob Castellano"
     ],
     "a": [
      "Denise Richmond",
      "Scott Rubin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Aimee Castellano",
      "Tara Kramer"
     ],
     "a": [
      "Christine Ferraez",
      "Cally Kerrigan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Susan St. Pierre",
      "Juliana Drinane"
     ],
     "a": [
      "Kelly Arvidson",
      "Kristen Soucie"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Stanley Bonczek",
      "Sean O'Connell"
     ],
     "a": [
      "Ross Switkes",
      "Jamison Rowles"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Bob Castellano",
      "John Fallone"
     ],
     "a": [
      "Richard Demeuse",
      "Art Muth"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Susan St. Pierre",
      "Stanley Bonczek"
     ],
     "a": [
      "Christine Ferraez",
      "Jamison Rowles"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Aimee Castellano",
      "Sean O'Connell"
     ],
     "a": [
      "Kelly Arvidson",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Tara Kramer",
      "David Osborne"
     ],
     "a": [
      "Kristen Soucie",
      "Art Muth"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Amy Johnson",
      "John Fallone"
     ],
     "a": [
      "Denise Richmond",
      "Scott Rubin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Susan St. Pierre",
      "Amy Johnson"
     ],
     "a": [
      "Cally Kerrigan",
      "Denise Richmond"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Tara Kramer",
      "Juliana Drinane"
     ],
     "a": [
      "Kelly Arvidson",
      "Kristen Soucie"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Stanley Bonczek",
      "David Osborne"
     ],
     "a": [
      "Ross Switkes",
      "Richard Demeuse"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Bob Castellano",
      "John Fallone"
     ],
     "a": [
      "Art Muth",
      "Scott Rubin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Tara Kramer",
      "David Osborne"
     ],
     "a": [
      "Kristen Soucie",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Aimee Castellano",
      "Sean O'Connell"
     ],
     "a": [
      "Christine Ferraez",
      "Jamison Rowles"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Amy Johnson",
      "John Fallone"
     ],
     "a": [
      "Cally Kerrigan",
      "Scott Rubin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Juliana Drinane",
      "Bob Castellano"
     ],
     "a": [
      "Denise Richmond",
      "Art Muth"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Aimee Castellano",
      "Susan St. Pierre"
     ],
     "a": [
      "Christine Ferraez",
      "Kelly Arvidson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Amy Johnson",
      "Juliana Drinane"
     ],
     "a": [
      "Cally Kerrigan",
      "Denise Richmond"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Stanley Bonczek",
      "David Osborne"
     ],
     "a": [
      "Ross Switkes",
      "Richard Demeuse"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Sean O'Connell",
      "Bob Castellano"
     ],
     "a": [
      "Jamison Rowles",
      "Scott Rubin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Aimee Castellano",
      "Stanley Bonczek"
     ],
     "a": [
      "Christine Ferraez",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Susan St. Pierre",
      "Bob Castellano"
     ],
     "a": [
      "Cally Kerrigan",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Tara Kramer",
      "Sean O'Connell"
     ],
     "a": [
      "Kelly Arvidson",
      "Jamison Rowles"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Juliana Drinane",
      "John Fallone"
     ],
     "a": [
      "Kristen Soucie",
      "Art Muth"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Aimee Castellano",
      "Susan St. Pierre"
     ],
     "a": [
      "Christine Ferraez",
      "Kelly Arvidson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Tara Kramer",
      "Amy Johnson"
     ],
     "a": [
      "Kristen Soucie",
      "Denise Richmond"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Stanley Bonczek",
      "Sean O'Connell"
     ],
     "a": [
      "Ross Switkes",
      "Jamison Rowles"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "David Osborne",
      "John Fallone"
     ],
     "a": [
      "Art Muth",
      "Scott Rubin"
     ]
    }
   ],
   "subs": [
    "Kristen Soucie",
    "Cally Kerrigan",
    "Jamison Rowles"
   ]
  },
  {
   "result": "home",
   "week": 4,
   "home": "Draft Day Disasters",
   "away": "Ackley's Aces",
   "time": "2026-07-09T19:30:00",
   "complete": true,
   "homePoints": 628,
   "awayPoints": 608,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Melissa Dardani",
      "Simon Perry"
     ],
     "a": [
      "Susan Ackley",
      "Anthony Fallet"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Chaoxia Cheng",
      "Bill Brandt"
     ],
     "a": [
      "Layla Darian",
      "Rick Wickenheisser"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jamie Hahn",
      "Eric Berlinger"
     ],
     "a": [
      "Susan St. Pierre",
      "Marc Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Noelle Villa",
      "John Lottier"
     ],
     "a": [
      "Mary Brashier",
      "Darren Ward"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Melissa Dardani",
      "Noelle Villa"
     ],
     "a": [
      "Susan Ackley",
      "Susan St. Pierre"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Chaoxia Cheng",
      "Jamie Hahn"
     ],
     "a": [
      "Layla Darian",
      "Tara Kramer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Simon Perry",
      "Bill Brandt"
     ],
     "a": [
      "Anthony Fallet",
      "Marc Friedman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "John Pineda",
      "John Lottier"
     ],
     "a": [
      "Rick Wickenheisser",
      "Darren Ward"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Chaoxia Cheng",
      "Simon Perry"
     ],
     "a": [
      "Susan Ackley",
      "Anthony Fallet"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Melissa Dardani",
      "Bill Brandt"
     ],
     "a": [
      "Layla Darian",
      "Rick Wickenheisser"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jamie Hahn",
      "John Pineda"
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
     "as": 19,
     "h": [
      "Noelle Villa",
      "Eric Berlinger"
     ],
     "a": [
      "Mary Brashier",
      "Darren Ward"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Melissa Dardani",
      "Chaoxia Cheng"
     ],
     "a": [
      "Layla Darian",
      "Susan St. Pierre"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Noelle Villa",
      "Jamie Hahn"
     ],
     "a": [
      "Tara Kramer",
      "Mary Brashier"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Bill Brandt",
      "John Pineda"
     ],
     "a": [
      "Anthony Fallet",
      "Rick Wickenheisser"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Eric Berlinger",
      "John Lottier"
     ],
     "a": [
      "Marc Friedman",
      "Darren Ward"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Melissa Dardani",
      "John Pineda"
     ],
     "a": [
      "Susan Ackley",
      "Rick Wickenheisser"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 29,
     "as": 27,
     "h": [
      "Chaoxia Cheng",
      "Simon Perry"
     ],
     "a": [
      "Susan St. Pierre",
      "Anthony Fallet"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Noelle Villa",
      "Eric Berlinger"
     ],
     "a": [
      "Tara Kramer",
      "Darren Ward"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jamie Hahn",
      "John Lottier"
     ],
     "a": [
      "Mary Brashier",
      "Marc Friedman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Melissa Dardani",
      "Noelle Villa"
     ],
     "a": [
      "Susan Ackley",
      "Layla Darian"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Chaoxia Cheng",
      "Jamie Hahn"
     ],
     "a": [
      "Susan St. Pierre",
      "Mary Brashier"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Simon Perry",
      "Bill Brandt"
     ],
     "a": [
      "Anthony Fallet",
      "Rick Wickenheisser"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Eric Berlinger",
      "John Lottier"
     ],
     "a": [
      "Marc Friedman",
      "Darren Ward"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Chaoxia Cheng",
      "Bill Brandt"
     ],
     "a": [
      "Susan Ackley",
      "Rick Wickenheisser"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jamie Hahn",
      "Simon Perry"
     ],
     "a": [
      "Layla Darian",
      "Darren Ward"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Melissa Dardani",
      "John Pineda"
     ],
     "a": [
      "Susan St. Pierre",
      "Anthony Fallet"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Noelle Villa",
      "John Lottier"
     ],
     "a": [
      "Tara Kramer",
      "Marc Friedman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Melissa Dardani",
      "Chaoxia Cheng"
     ],
     "a": [
      "Susan Ackley",
      "Layla Darian"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Noelle Villa",
      "Jamie Hahn"
     ],
     "a": [
      "Tara Kramer",
      "Mary Brashier"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Bill Brandt",
      "Eric Berlinger"
     ],
     "a": [
      "Anthony Fallet",
      "Marc Friedman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Simon Perry",
      "John Pineda"
     ],
     "a": [
      "Rick Wickenheisser",
      "Darren Ward"
     ]
    }
   ],
   "subs": [
    "Layla Darian",
    "Tara Kramer",
    "Susan St. Pierre",
    "Melissa Dardani"
   ]
  },
  {
   "result": "away",
   "week": 5,
   "home": "Draft Day Disasters",
   "away": "Color Coordinated Chaos",
   "time": "2026-07-15T19:30:00",
   "complete": true,
   "homePoints": 599,
   "awayPoints": 612,
   "homeGW": 13,
   "awayGW": 19,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Chanda Mccoy",
      "Simon Perry"
     ],
     "a": [
      "Christine Ferraez",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Chaoxia Cheng",
      "Anthony Fallet"
     ],
     "a": [
      "Layla Darian",
      "Tim Dowd"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Noelle Villa",
      "Eric Berlinger"
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
     "as": 15,
     "h": [
      "Jamie Hahn",
      "John Lottier"
     ],
     "a": [
      "Kristy Detore",
      "Steven Gregov"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Chanda Mccoy",
      "Chaoxia Cheng"
     ],
     "a": [
      "Christine Ferraez",
      "Layla Darian"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Noelle Villa",
      "Jillian Hart"
     ],
     "a": [
      "Kristy Detore",
      "Patricia Kavanaugh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Anthony Fallet",
      "Eric Berlinger"
     ],
     "a": [
      "Ross Switkes",
      "Steven Gregov"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Simon Perry",
      "John Pineda"
     ],
     "a": [
      "Tim Dowd",
      "Art Muth"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Chanda Mccoy",
      "Anthony Fallet"
     ],
     "a": [
      "Christine Ferraez",
      "Tim Dowd"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Chaoxia Cheng",
      "Simon Perry"
     ],
     "a": [
      "Layla Darian",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jillian Hart",
      "John Pineda"
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
     "as": 16,
     "h": [
      "Jamie Hahn",
      "John Lottier"
     ],
     "a": [
      "Patricia Kavanaugh",
      "Steven Gregov"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 27,
     "as": 29,
     "h": [
      "Chaoxia Cheng",
      "Noelle Villa"
     ],
     "a": [
      "Layla Darian",
      "Denise Richmond"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jamie Hahn",
      "Jillian Hart"
     ],
     "a": [
      "Kristy Detore",
      "Patricia Kavanaugh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Anthony Fallet",
      "John Pineda"
     ],
     "a": [
      "Ross Switkes",
      "Tim Dowd"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Eric Berlinger",
      "John Lottier"
     ],
     "a": [
      "Steven Gregov",
      "Art Muth"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Noelle Villa",
      "Simon Perry"
     ],
     "a": [
      "Christine Ferraez",
      "Tim Dowd"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Chanda Mccoy",
      "John Pineda"
     ],
     "a": [
      "Denise Richmond",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jamie Hahn",
      "Eric Berlinger"
     ],
     "a": [
      "Patricia Kavanaugh",
      "Steven Gregov"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jillian Hart",
      "John Lottier"
     ],
     "a": [
      "Kristy Detore",
      "Art Muth"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Chaoxia Cheng",
      "Jamie Hahn"
     ],
     "a": [
      "Christine Ferraez",
      "Denise Richmond"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Chanda Mccoy",
      "Noelle Villa"
     ],
     "a": [
      "Layla Darian",
      "Kristy Detore"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Simon Perry",
      "Anthony Fallet"
     ],
     "a": [
      "Ross Switkes",
      "Tim Dowd"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Eric Berlinger",
      "John Lottier"
     ],
     "a": [
      "Steven Gregov",
      "Art Muth"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Chaoxia Cheng",
      "Anthony Fallet"
     ],
     "a": [
      "Christine Ferraez",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Chanda Mccoy",
      "Simon Perry"
     ],
     "a": [
      "Layla Darian",
      "Tim Dowd"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Noelle Villa",
      "John Pineda"
     ],
     "a": [
      "Kristy Detore",
      "Steven Gregov"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Jillian Hart",
      "Eric Berlinger"
     ],
     "a": [
      "Patricia Kavanaugh",
      "Art Muth"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Chanda Mccoy",
      "Chaoxia Cheng"
     ],
     "a": [
      "Christine Ferraez",
      "Layla Darian"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jamie Hahn",
      "Jillian Hart"
     ],
     "a": [
      "Denise Richmond",
      "Patricia Kavanaugh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Simon Perry",
      "John Pineda"
     ],
     "a": [
      "Ross Switkes",
      "Steven Gregov"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Anthony Fallet",
      "John Lottier"
     ],
     "a": [
      "Tim Dowd",
      "Art Muth"
     ]
    }
   ],
   "subs": [
    "Layla Darian",
    "Tim Dowd"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "The Dill Inquents",
   "away": "Ackley's Aces",
   "time": "2026-07-16T19:30:00",
   "complete": true,
   "homePoints": 629,
   "awayPoints": 575,
   "homeGW": 21,
   "awayGW": 11,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Aimee Castellano",
      "Stanley Bonczek"
     ],
     "a": [
      "Susan Ackley",
      "Anthony Fallet"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Tara Kramer",
      "Sean O'Connell"
     ],
     "a": [
      "Carol Mastroianni",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Amy Johnson",
      "Bob Drinane"
     ],
     "a": [
      "Mary Brashier",
      "Marc Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Susan St. Pierre",
      "Josh Rito"
     ],
     "a": [
      "Kristy Detore",
      "Rick Wickenheisser"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Aimee Castellano",
      "Susan St. Pierre"
     ],
     "a": [
      "Carol Mastroianni",
      "Mary Brashier"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Tara Kramer",
      "Amy Johnson"
     ],
     "a": [
      "Susan Ackley",
      "Christine Papa"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Stanley Bonczek",
      "Sean O'Connell"
     ],
     "a": [
      "Anthony Fallet",
      "Eric Luque"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Josh Rito",
      "John Fallone"
     ],
     "a": [
      "Marc Friedman",
      "Darren Ward"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Tara Kramer",
      "Stanley Bonczek"
     ],
     "a": [
      "Carol Mastroianni",
      "Anthony Fallet"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Aimee Castellano",
      "Sean O'Connell"
     ],
     "a": [
      "Susan Ackley",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Amy Johnson",
      "Bob Drinane"
     ],
     "a": [
      "Christine Papa",
      "Darren Ward"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Susan St. Pierre",
      "John Fallone"
     ],
     "a": [
      "Kristy Detore",
      "Rick Wickenheisser"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Aimee Castellano",
      "Tara Kramer"
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
     "as": 11,
     "h": [
      "Susan St. Pierre",
      "Amy Johnson"
     ],
     "a": [
      "Mary Brashier",
      "Kristy Detore"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Sean O'Connell",
      "Bob Drinane"
     ],
     "a": [
      "Eric Luque",
      "Marc Friedman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Josh Rito",
      "John Fallone"
     ],
     "a": [
      "Rick Wickenheisser",
      "Darren Ward"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Tara Kramer",
      "Stanley Bonczek"
     ],
     "a": [
      "Susan Ackley",
      "Marc Friedman"
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
      "Christine Papa",
      "Anthony Fallet"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Susan St. Pierre",
      "John Fallone"
     ],
     "a": [
      "Mary Brashier",
      "Rick Wickenheisser"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Amy Johnson",
      "Josh Rito"
     ],
     "a": [
      "Kristy Detore",
      "Darren Ward"
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
      "Susan Ackley",
      "Carol Mastroianni"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Susan St. Pierre",
      "Amy Johnson"
     ],
     "a": [
      "Mary Brashier",
      "Kristy Detore"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Stanley Bonczek",
      "Bob Drinane"
     ],
     "a": [
      "Eric Luque",
      "Rick Wickenheisser"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sean O'Connell",
      "Josh Rito"
     ],
     "a": [
      "Anthony Fallet",
      "Marc Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Aimee Castellano",
      "Stanley Bonczek"
     ],
     "a": [
      "Carol Mastroianni",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Tara Kramer",
      "Sean O'Connell"
     ],
     "a": [
      "Susan Ackley",
      "Anthony Fallet"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Susan St. Pierre",
      "Josh Rito"
     ],
     "a": [
      "Christine Papa",
      "Marc Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Amy Johnson",
      "John Fallone"
     ],
     "a": [
      "Mary Brashier",
      "Darren Ward"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Aimee Castellano",
      "Susan St. Pierre"
     ],
     "a": [
      "Susan Ackley",
      "Christine Papa"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Tara Kramer",
      "Amy Johnson"
     ],
     "a": [
      "Carol Mastroianni",
      "Kristy Detore"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Stanley Bonczek",
      "Sean O'Connell"
     ],
     "a": [
      "Anthony Fallet",
      "Eric Luque"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Bob Drinane",
      "John Fallone"
     ],
     "a": [
      "Rick Wickenheisser",
      "Darren Ward"
     ]
    }
   ],
   "subs": [
    "Kristy Detore",
    "Bob Drinane"
   ]
  },
  {
   "result": "away",
   "week": 6,
   "home": "Ackley's Aces",
   "away": "Color Coordinated Chaos",
   "time": "2026-07-22T19:30:00",
   "complete": true,
   "homePoints": 553,
   "awayPoints": 585,
   "homeGW": 13,
   "awayGW": 19,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Layla Darian",
      "Anthony Fallet"
     ],
     "a": [
      "Kelly Arvidson",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Christine Papa",
      "Eric Luque"
     ],
     "a": [
      "Christine Ferraez",
      "Steven Gregov"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Susan St. Pierre",
      "Darren Ward"
     ],
     "a": [
      "Kristy Detore",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jamie Hahn",
      "Marc Friedman"
     ],
     "a": [
      "Denise Richmond",
      "Art Muth"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Layla Darian",
      "Susan St. Pierre"
     ],
     "a": [
      "Kelly Arvidson",
      "Christine Ferraez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Christine Papa",
      "Jamie Hahn"
     ],
     "a": [
      "Patricia Kavanaugh",
      "Kristy Detore"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Anthony Fallet",
      "Eric Luque"
     ],
     "a": [
      "Ross Switkes",
      "Steven Gregov"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Marc Friedman",
      "Darren Ward"
     ],
     "a": [
      "Richard Demeuse",
      "Art Muth"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Layla Darian",
      "Marc Friedman"
     ],
     "a": [
      "Christine Ferraez",
      "Steven Gregov"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Christine Papa",
      "Anthony Fallet"
     ],
     "a": [
      "Kelly Arvidson",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Susan St. Pierre",
      "Eric Luque"
     ],
     "a": [
      "Patricia Kavanaugh",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jamie Hahn",
      "Darren Ward"
     ],
     "a": [
      "Denise Richmond",
      "Art Muth"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Layla Darian",
      "Christine Papa"
     ],
     "a": [
      "Kelly Arvidson",
      "Patricia Kavanaugh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Susan St. Pierre",
      "Jamie Hahn"
     ],
     "a": [
      "Denise Richmond",
      "Kristy Detore"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Anthony Fallet",
      "Marc Friedman"
     ],
     "a": [
      "Steven Gregov",
      "Art Muth"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Eric Luque",
      "Darren Ward"
     ],
     "a": [
      "Ross Switkes",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Christine Papa",
      "Anthony Fallet"
     ],
     "a": [
      "Christine Ferraez",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Layla Darian",
      "Marc Friedman"
     ],
     "a": [
      "Patricia Kavanaugh",
      "Steven Gregov"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Susan St. Pierre",
      "Eric Luque"
     ],
     "a": [
      "Denise Richmond",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jamie Hahn",
      "Darren Ward"
     ],
     "a": [
      "Kristy Detore",
      "Art Muth"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Layla Darian",
      "Christine Papa"
     ],
     "a": [
      "Kelly Arvidson",
      "Christine Ferraez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Susan St. Pierre",
      "Jamie Hahn"
     ],
     "a": [
      "Denise Richmond",
      "Kristy Detore"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Anthony Fallet",
      "Eric Luque"
     ],
     "a": [
      "Ross Switkes",
      "Steven Gregov"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Marc Friedman",
      "Darren Ward"
     ],
     "a": [
      "Richard Demeuse",
      "Art Muth"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Layla Darian",
      "Anthony Fallet"
     ],
     "a": [
      "Kelly Arvidson",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Christine Papa",
      "Marc Friedman"
     ],
     "a": [
      "Christine Ferraez",
      "Richard Demeuse"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 28,
     "h": [
      "Jamie Hahn",
      "Eric Luque"
     ],
     "a": [
      "Patricia Kavanaugh",
      "Steven Gregov"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Susan St. Pierre",
      "Darren Ward"
     ],
     "a": [
      "Kristy Detore",
      "Art Muth"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Layla Darian",
      "Susan St. Pierre"
     ],
     "a": [
      "Christine Ferraez",
      "Denise Richmond"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Christine Papa",
      "Jamie Hahn"
     ],
     "a": [
      "Kelly Arvidson",
      "Patricia Kavanaugh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Anthony Fallet",
      "Marc Friedman"
     ],
     "a": [
      "Steven Gregov",
      "Art Muth"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Eric Luque",
      "Darren Ward"
     ],
     "a": [
      "Ross Switkes",
      "Richard Demeuse"
     ]
    }
   ],
   "subs": [
    "Layla Darian",
    "Susan St. Pierre"
   ]
  },
  {
   "result": "home",
   "week": 6,
   "home": "Draft Day Disasters",
   "away": "The Dill Inquents",
   "time": "2026-07-23T19:30:00",
   "complete": true,
   "homePoints": 639,
   "awayPoints": 580,
   "homeGW": 19,
   "awayGW": 13,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Johanna Kreilick",
      "Ross Switkes"
     ],
     "a": [
      "Susan St. Pierre",
      "Sean O'Connell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Chanda Mccoy",
      "Bob Drinane"
     ],
     "a": [
      "Tara Kramer",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jamie Hahn",
      "John Pineda"
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
      "Jillian Hart",
      "Eric Berlinger"
     ],
     "a": [
      "Juliana Drinane",
      "Josh Rito"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Chanda Mccoy",
      "Johanna Kreilick"
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
     "as": 13,
     "h": [
      "Jamie Hahn",
      "Jillian Hart"
     ],
     "a": [
      "Amy Johnson",
      "Juliana Drinane"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Ross Switkes",
      "Bob Drinane"
     ],
     "a": [
      "Stanley Bonczek",
      "Sean O'Connell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "John Pineda",
      "Eric Berlinger"
     ],
     "a": [
      "David Osborne",
      "Josh Rito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Johanna Kreilick",
      "Ross Switkes"
     ],
     "a": [
      "Susan St. Pierre",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Chanda Mccoy",
      "John Pineda"
     ],
     "a": [
      "Tara Kramer",
      "Sean O'Connell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jillian Hart",
      "Bob Drinane"
     ],
     "a": [
      "Amy Johnson",
      "Josh Rito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jamie Hahn",
      "Eric Berlinger"
     ],
     "a": [
      "Juliana Drinane",
      "David Osborne"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Chanda Mccoy",
      "Jamie Hahn"
     ],
     "a": [
      "Susan St. Pierre",
      "Juliana Drinane"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Johanna Kreilick",
      "Jillian Hart"
     ],
     "a": [
      "Tara Kramer",
      "Amy Johnson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Ross Switkes",
      "John Pineda"
     ],
     "a": [
      "Stanley Bonczek",
      "David Osborne"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Bob Drinane",
      "Eric Berlinger"
     ],
     "a": [
      "Sean O'Connell",
      "Josh Rito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jamie Hahn",
      "Ross Switkes"
     ],
     "a": [
      "Tara Kramer",
      "Sean O'Connell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Chanda Mccoy",
      "Bob Drinane"
     ],
     "a": [
      "Amy Johnson",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jillian Hart",
      "John Pineda"
     ],
     "a": [
      "Susan St. Pierre",
      "Josh Rito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Johanna Kreilick",
      "Eric Berlinger"
     ],
     "a": [
      "Juliana Drinane",
      "David Osborne"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Chanda Mccoy",
      "Johanna Kreilick"
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
     "as": 23,
     "h": [
      "Jamie Hahn",
      "Jillian Hart"
     ],
     "a": [
      "Amy Johnson",
      "Juliana Drinane"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ross Switkes",
      "Bob Drinane"
     ],
     "a": [
      "Stanley Bonczek",
      "Sean O'Connell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "John Pineda",
      "Eric Berlinger"
     ],
     "a": [
      "David Osborne",
      "Josh Rito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Chanda Mccoy",
      "Ross Switkes"
     ],
     "a": [
      "Tara Kramer",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Johanna Kreilick",
      "Bob Drinane"
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
     "as": 16,
     "h": [
      "Jamie Hahn",
      "Eric Berlinger"
     ],
     "a": [
      "Susan St. Pierre",
      "Josh Rito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jillian Hart",
      "John Pineda"
     ],
     "a": [
      "Juliana Drinane",
      "Sean O'Connell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Chanda Mccoy",
      "Jamie Hahn"
     ],
     "a": [
      "Susan St. Pierre",
      "Juliana Drinane"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Johanna Kreilick",
      "Jillian Hart"
     ],
     "a": [
      "Tara Kramer",
      "Amy Johnson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Ross Switkes",
      "John Pineda"
     ],
     "a": [
      "Sean O'Connell",
      "Josh Rito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Bob Drinane",
      "Eric Berlinger"
     ],
     "a": [
      "Stanley Bonczek",
      "David Osborne"
     ]
    }
   ],
   "subs": [
    "Ross Switkes",
    "Johanna Kreilick",
    "Bob Drinane"
   ]
  },
  {
   "result": "home",
   "week": 7,
   "home": "Color Coordinated Chaos",
   "away": "Draft Day Disasters",
   "time": "2026-07-29T19:30:00",
   "complete": true,
   "homePoints": 625,
   "awayPoints": 570,
   "homeGW": 20,
   "awayGW": 12,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 30,
     "as": 28,
     "h": [
      "Kelly Arvidson",
      "Ross Switkes"
     ],
     "a": [
      "Chaoxia Cheng",
      "Robbie Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Christine Ferraez",
      "Steven Gregov"
     ],
     "a": [
      "Johanna Kreilick",
      "Simon Perry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Patricia Kavanaugh",
      "Richard Demeuse"
     ],
     "a": [
      "Noelle Villa",
      "Eric Berlinger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kristy Detore",
      "Art Muth"
     ],
     "a": [
      "Cally Kerrigan",
      "John Lottier"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kelly Arvidson",
      "Patricia Kavanaugh"
     ],
     "a": [
      "Chaoxia Cheng",
      "Cally Kerrigan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Christine Ferraez",
      "Denise Richmond"
     ],
     "a": [
      "Johanna Kreilick",
      "Noelle Villa"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ross Switkes",
      "Richard Demeuse"
     ],
     "a": [
      "Robbie Oddy",
      "Simon Perry"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Steven Gregov",
      "Art Muth"
     ],
     "a": [
      "Anthony Fallet",
      "John Lottier"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kelly Arvidson",
      "Ross Switkes"
     ],
     "a": [
      "Johanna Kreilick",
      "Robbie Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Christine Ferraez",
      "Steven Gregov"
     ],
     "a": [
      "Chaoxia Cheng",
      "Simon Perry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Denise Richmond",
      "Richard Demeuse"
     ],
     "a": [
      "Noelle Villa",
      "Anthony Fallet"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Kristy Detore",
      "Art Muth"
     ],
     "a": [
      "Cally Kerrigan",
      "Eric Berlinger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Christine Ferraez",
      "Patricia Kavanaugh"
     ],
     "a": [
      "Chaoxia Cheng",
      "Johanna Kreilick"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Denise Richmond",
      "Kristy Detore"
     ],
     "a": [
      "Cally Kerrigan",
      "Noelle Villa"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Ross Switkes",
      "Steven Gregov"
     ],
     "a": [
      "Simon Perry",
      "Anthony Fallet"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Richard Demeuse",
      "Art Muth"
     ],
     "a": [
      "Eric Berlinger",
      "John Lottier"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 2,
     "as": 21,
     "h": [
      "Kelly Arvidson",
      "Steven Gregov"
     ],
     "a": [
      "Chaoxia Cheng",
      "Anthony Fallet"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Patricia Kavanaugh",
      "Ross Switkes"
     ],
     "a": [
      "Johanna Kreilick",
      "Simon Perry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Denise Richmond",
      "Art Muth"
     ],
     "a": [
      "Cally Kerrigan",
      "Eric Berlinger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kristy Detore",
      "Richard Demeuse"
     ],
     "a": [
      "Noelle Villa",
      "John Lottier"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kelly Arvidson",
      "Christine Ferraez"
     ],
     "a": [
      "Chaoxia Cheng",
      "Cally Kerrigan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Patricia Kavanaugh",
      "Kristy Detore"
     ],
     "a": [
      "Johanna Kreilick",
      "Noelle Villa"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ross Switkes",
      "Steven Gregov"
     ],
     "a": [
      "Anthony Fallet",
      "Simon Perry"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Richard Demeuse",
      "Art Muth"
     ],
     "a": [
      "Eric Berlinger",
      "John Lottier"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kelly Arvidson",
      "Steven Gregov"
     ],
     "a": [
      "Johanna Kreilick",
      "Eric Berlinger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kristy Detore",
      "Art Muth"
     ],
     "a": [
      "Noelle Villa",
      "Simon Perry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Patricia Kavanaugh",
      "Ross Switkes"
     ],
     "a": [
      "Chaoxia Cheng",
      "Anthony Fallet"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Denise Richmond",
      "Richard Demeuse"
     ],
     "a": [
      "Cally Kerrigan",
      "John Lottier"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kelly Arvidson",
      "Patricia Kavanaugh"
     ],
     "a": [
      "Chaoxia Cheng",
      "Johanna Kreilick"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Denise Richmond",
      "Kristy Detore"
     ],
     "a": [
      "Cally Kerrigan",
      "Noelle Villa"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ross Switkes",
      "Richard Demeuse"
     ],
     "a": [
      "Simon Perry",
      "Eric Berlinger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Steven Gregov",
      "Art Muth"
     ],
     "a": [
      "John Lottier",
      "Anthony Fallet"
     ]
    }
   ],
   "subs": [
    "Johanna Kreilick",
    "Cally Kerrigan"
   ]
  },
  {
   "result": "away",
   "week": 7,
   "home": "The Dill Inquents",
   "away": "Ackley's Aces",
   "time": "2026-07-30T19:30:00",
   "complete": true,
   "homePoints": 579,
   "awayPoints": 621,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Melissa Dardani",
      "Stanley Bonczek"
     ],
     "a": [
      "Susan Ackley",
      "Anthony Fallet"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Tara Kramer",
      "Sean O'Connell"
     ],
     "a": [
      "Chaoxia Cheng",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Susan St. Pierre",
      "Josh Rito"
     ],
     "a": [
      "Christine Papa",
      "Darren Ward"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Juliana Drinane",
      "John Fallone"
     ],
     "a": [
      "Mary Brashier",
      "Marc Friedman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Melissa Dardani",
      "Tara Kramer"
     ],
     "a": [
      "Susan Ackley",
      "Chaoxia Cheng"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Susan St. Pierre",
      "Amy Johnson"
     ],
     "a": [
      "Mary Brashier",
      "Susan Goeckeler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sean O'Connell",
      "Josh Rito"
     ],
     "a": [
      "Anthony Fallet",
      "Marc Friedman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Stanley Bonczek",
      "David Osborne"
     ],
     "a": [
      "Eric Luque",
      "Darren Ward"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Melissa Dardani",
      "Sean O'Connell"
     ],
     "a": [
      "Susan Ackley",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Tara Kramer",
      "Stanley Bonczek"
     ],
     "a": [
      "Chaoxia Cheng",
      "Anthony Fallet"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Amy Johnson",
      "David Osborne"
     ],
     "a": [
      "Christine Papa",
      "Darren Ward"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Juliana Drinane",
      "John Fallone"
     ],
     "a": [
      "Susan Goeckeler",
      "Marc Friedman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Tara Kramer",
      "Susan St. Pierre"
     ],
     "a": [
      "Chaoxia Cheng",
      "Christine Papa"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Juliana Drinane",
      "Amy Johnson"
     ],
     "a": [
      "Mary Brashier",
      "Susan Goeckeler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Sean O'Connell",
      "David Osborne"
     ],
     "a": [
      "Anthony Fallet",
      "Eric Luque"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Josh Rito",
      "John Fallone"
     ],
     "a": [
      "Marc Friedman",
      "Darren Ward"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Susan St. Pierre",
      "Stanley Bonczek"
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
     "as": 16,
     "h": [
      "Melissa Dardani",
      "David Osborne"
     ],
     "a": [
      "Christine Papa",
      "Anthony Fallet"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Juliana Drinane",
      "Josh Rito"
     ],
     "a": [
      "Susan Goeckeler",
      "Marc Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Amy Johnson",
      "John Fallone"
     ],
     "a": [
      "Mary Brashier",
      "Darren Ward"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Tara Kramer",
      "Juliana Drinane"
     ],
     "a": [
      "Susan Ackley",
      "Christine Papa"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Melissa Dardani",
      "Susan St. Pierre"
     ],
     "a": [
      "Chaoxia Cheng",
      "Mary Brashier"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Stanley Bonczek",
      "Sean O'Connell"
     ],
     "a": [
      "Anthony Fallet",
      "Eric Luque"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Josh Rito",
      "John Fallone"
     ],
     "a": [
      "Marc Friedman",
      "Darren Ward"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Tara Kramer",
      "Sean O'Connell"
     ],
     "a": [
      "Susan Ackley",
      "Anthony Fallet"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Melissa Dardani",
      "Stanley Bonczek"
     ],
     "a": [
      "Chaoxia Cheng",
      "Eric Luque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Susan St. Pierre",
      "David Osborne"
     ],
     "a": [
      "Mary Brashier",
      "Marc Friedman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Amy Johnson",
      "Josh Rito"
     ],
     "a": [
      "Susan Goeckeler",
      "Darren Ward"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Melissa Dardani",
      "Tara Kramer"
     ],
     "a": [
      "Susan Ackley",
      "Chaoxia Cheng"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Juliana Drinane",
      "Amy Johnson"
     ],
     "a": [
      "Christine Papa",
      "Susan Goeckeler"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Stanley Bonczek",
      "David Osborne"
     ],
     "a": [
      "Anthony Fallet",
      "Marc Friedman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Sean O'Connell",
      "John Fallone"
     ],
     "a": [
      "Eric Luque",
      "Darren Ward"
     ]
    }
   ],
   "subs": [
    "Chaoxia Cheng",
    "Melissa Dardani"
   ]
  },
  {
   "result": "home",
   "week": 8,
   "home": "Color Coordinated Chaos",
   "away": "The Dill Inquents",
   "time": "2026-08-05T19:30:00",
   "complete": true,
   "homePoints": 613,
   "awayPoints": 623,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Kelly Arvidson",
      "Ross Switkes"
     ],
     "a": [
      "Aimee Castellano",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Kristy Detore",
      "Steven Gregov"
     ],
     "a": [
      "Barbara Hess",
      "Sean O'Connell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Christine Ferraez",
      "Richard Demeuse"
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
     "as": 15,
     "h": [
      "Denise Richmond",
      "Scott Rubin"
     ],
     "a": [
      "Tara Kramer",
      "John Fallone"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kristy Detore",
      "Christine Ferraez"
     ],
     "a": [
      "Aimee Castellano",
      "Tara Kramer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Kelly Arvidson",
      "Patricia Kavanaugh"
     ],
     "a": [
      "Barbara Hess",
      "Susan St. Pierre"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Ross Switkes",
      "Steven Gregov"
     ],
     "a": [
      "Stanley Bonczek",
      "Sean O'Connell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Richard Demeuse",
      "Art Muth"
     ],
     "a": [
      "John Fallone",
      "Josh Rito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Kristy Detore",
      "Ross Switkes"
     ],
     "a": [
      "Barbara Hess",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kelly Arvidson",
      "Steven Gregov"
     ],
     "a": [
      "Aimee Castellano",
      "Sean O'Connell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Patricia Kavanaugh",
      "Art Muth"
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
     "as": 17,
     "h": [
      "Denise Richmond",
      "Scott Rubin"
     ],
     "a": [
      "Tara Kramer",
      "Josh Rito"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kristy Detore",
      "Patricia Kavanaugh"
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
     "as": 13,
     "h": [
      "Christine Ferraez",
      "Denise Richmond"
     ],
     "a": [
      "Tara Kramer",
      "Susan St. Pierre"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Steven Gregov",
      "Richard Demeuse"
     ],
     "a": [
      "Sean O'Connell",
      "David Osborne"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Scott Rubin",
      "Art Muth"
     ],
     "a": [
      "John Fallone",
      "Josh Rito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kelly Arvidson",
      "Richard Demeuse"
     ],
     "a": [
      "Barbara Hess",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Patricia Kavanaugh",
      "Ross Switkes"
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
     "as": 11,
     "h": [
      "Christine Ferraez",
      "Scott Rubin"
     ],
     "a": [
      "Tara Kramer",
      "Josh Rito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Denise Richmond",
      "Art Muth"
     ],
     "a": [
      "Susan St. Pierre",
      "John Fallone"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Kelly Arvidson",
      "Kristy Detore"
     ],
     "a": [
      "Aimee Castellano",
      "Barbara Hess"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Christine Ferraez",
      "Denise Richmond"
     ],
     "a": [
      "Tara Kramer",
      "Susan St. Pierre"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Steven Gregov",
      "Scott Rubin"
     ],
     "a": [
      "Stanley Bonczek",
      "David Osborne"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Ross Switkes",
      "Richard Demeuse"
     ],
     "a": [
      "Sean O'Connell",
      "John Fallone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kristy Detore",
      "Steven Gregov"
     ],
     "a": [
      "Aimee Castellano",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Kelly Arvidson",
      "Ross Switkes"
     ],
     "a": [
      "Barbara Hess",
      "Sean O'Connell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Patricia Kavanaugh",
      "Richard Demeuse"
     ],
     "a": [
      "Tara Kramer",
      "John Fallone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Christine Ferraez",
      "Art Muth"
     ],
     "a": [
      "Susan St. Pierre",
      "Josh Rito"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kelly Arvidson",
      "Patricia Kavanaugh"
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
      "Kristy Detore",
      "Denise Richmond"
     ],
     "a": [
      "Barbara Hess",
      "Susan St. Pierre"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Ross Switkes",
      "Steven Gregov"
     ],
     "a": [
      "Stanley Bonczek",
      "Sean O'Connell"
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
      "David Osborne",
      "Josh Rito"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 8,
   "home": "Ackley's Aces",
   "away": "Draft Day Disasters",
   "time": "2026-08-06T19:30:00",
   "complete": true,
   "homePoints": 647,
   "awayPoints": 584,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Susan Ackley",
      "Anthony Fallet"
     ],
     "a": [
      "Chanda Mccoy",
      "Simon Perry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Carol Mastroianni",
      "Eric Luque"
     ],
     "a": [
      "Chaoxia Cheng",
      "Bill Brandt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Mary Brashier",
      "Bob Drinane"
     ],
     "a": [
      "Jamie Hahn",
      "John Lottier"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Christine Papa",
      "Marc Friedman"
     ],
     "a": [
      "Jillian Hart",
      "Eric Berlinger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Susan Ackley",
      "Carol Mastroianni"
     ],
     "a": [
      "Chanda Mccoy",
      "Chaoxia Cheng"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Christine Papa",
      "Mary Brashier"
     ],
     "a": [
      "Jamie Hahn",
      "Jillian Hart"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Anthony Fallet",
      "Bob Drinane"
     ],
     "a": [
      "Simon Perry",
      "Bill Brandt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Eric Luque",
      "Marc Friedman"
     ],
     "a": [
      "Jay Alquiros",
      "John Lottier"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Christine Papa",
      "Anthony Fallet"
     ],
     "a": [
      "Chaoxia Cheng",
      "Bill Brandt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Susan Ackley",
      "Eric Luque"
     ],
     "a": [
      "Jamie Hahn",
      "Simon Perry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Carol Mastroianni",
      "Bob Drinane"
     ],
     "a": [
      "Chanda Mccoy",
      "Jay Alquiros"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Mary Brashier",
      "Marc Friedman"
     ],
     "a": [
      "Jillian Hart",
      "Eric Berlinger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Susan Ackley",
      "Christine Papa"
     ],
     "a": [
      "Chaoxia Cheng",
      "Jillian Hart"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Carol Mastroianni",
      "Mary Brashier"
     ],
     "a": [
      "Chanda Mccoy",
      "Jamie Hahn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Anthony Fallet",
      "Eric Luque"
     ],
     "a": [
      "Simon Perry",
      "Jay Alquiros"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Bob Drinane",
      "Marc Friedman"
     ],
     "a": [
      "Eric Berlinger",
      "John Lottier"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Susan Ackley",
      "Eric Luque"
     ],
     "a": [
      "Chanda Mccoy",
      "Bill Brandt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Christine Papa",
      "Anthony Fallet"
     ],
     "a": [
      "Chaoxia Cheng",
      "Jay Alquiros"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Carol Mastroianni",
      "Bob Drinane"
     ],
     "a": [
      "Jamie Hahn",
      "Eric Berlinger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Mary Brashier",
      "Marc Friedman"
     ],
     "a": [
      "Jillian Hart",
      "John Lottier"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Susan Ackley",
      "Carol Mastroianni"
     ],
     "a": [
      "Chanda Mccoy",
      "Chaoxia Cheng"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Christine Papa",
      "Mary Brashier"
     ],
     "a": [
      "Jamie Hahn",
      "Jillian Hart"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Anthony Fallet",
      "Eric Luque"
     ],
     "a": [
      "Simon Perry",
      "Bill Brandt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Bob Drinane",
      "Marc Friedman"
     ],
     "a": [
      "Eric Berlinger",
      "John Lottier"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Susan Ackley",
      "Anthony Fallet"
     ],
     "a": [
      "Chanda Mccoy",
      "Simon Perry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Christine Papa",
      "Eric Luque"
     ],
     "a": [
      "Jamie Hahn",
      "Bill Brandt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Carol Mastroianni",
      "Marc Friedman"
     ],
     "a": [
      "Chaoxia Cheng",
      "Jay Alquiros"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Mary Brashier",
      "Bob Drinane"
     ],
     "a": [
      "Jillian Hart",
      "John Lottier"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Susan Ackley",
      "Christine Papa"
     ],
     "a": [
      "Chaoxia Cheng",
      "Jillian Hart"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Carol Mastroianni",
      "Mary Brashier"
     ],
     "a": [
      "Chanda Mccoy",
      "Jamie Hahn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Anthony Fallet",
      "Bob Drinane"
     ],
     "a": [
      "Bill Brandt",
      "Eric Berlinger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Eric Luque",
      "Marc Friedman"
     ],
     "a": [
      "Simon Perry",
      "Jay Alquiros"
     ]
    }
   ],
   "subs": [
    "Bob Drinane",
    "Jay Alquiros"
   ]
  }
 ],
 "playoffs": [],
 "extraPlayerIds": {
  "Patrick Ryan": "8344fbda-35c2-4ce0-94ad-158090d2d5ba"
 },
 "meta": {
  "matchesPlayed": 16,
  "weeks": "1-8",
  "totalPlayers": 53,
  "ratingHistoryWeeks": [
   1,
   2,
   3,
   4,
   5,
   6,
   7,
   8
  ],
  "divisionSlug": "eaa4c1dc",
  "hasPlayoffs": false,
  "typicalDay": "Wednesdays",
  "detailFile": "detail-eaa4c1dc.js",
  "clubName": "Flemington",
  "divisionName": "4.0 & Over",
  "leagueType": "local",
  "podCount": 1,
  "podNames": null,
  "podSource": "schedule",
  "reportedPods": null
 }
};
  DATA.meta.asOf = "2026-08-30";
  window.DATA = DATA;
  window.CPL_DATASETS = window.CPL_DATASETS || {};
  window.CPL_DATASETS["eaa4c1dc"] = DATA;
})();
