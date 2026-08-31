(function () {
  const DATA = {
 "players": [
  {
   "name": "",
   "team": "Smash-holes!",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 91,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 0,
   "playerId": "5b496dbc-7f42-44ca-9dd2-67347090b6c5",
   "winPct": 100,
   "diff": 35,
   "ppg": 21,
   "leagueRank": null,
   "rating": 1.3,
   "ratingGames": 6,
   "confidence": 57,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": -1
  },
  {
   "name": "Lizz Dunn",
   "gender": "Female",
   "team": "The Three-Fives",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 141,
   "totalPointsAgainst": 113,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "26d1dea5-a222-41e0-b8eb-152de6a397fc",
   "winPct": 85.7,
   "diff": 28,
   "ppg": 20.1,
   "leagueRank": 19,
   "rating": 4.3,
   "ratingGames": 7,
   "confidence": 58,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 1.3
  },
  {
   "name": "Coleen Walter",
   "gender": "Female",
   "team": "Hot Ballers!",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 120,
   "totalPointsAgainst": 103,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "7b31e2bc-0cd4-494a-adbb-efe082cfbec1",
   "winPct": 83.3,
   "diff": 17,
   "ppg": 20,
   "leagueRank": 40,
   "rating": 1.5,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.2
  },
  {
   "name": "Alan Liang",
   "gender": "Male",
   "team": "The Three-Fives",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 26,
   "losses": 6,
   "pointsWon": 643,
   "totalPointsAgainst": 489,
   "mixedWins": 13,
   "mixedLosses": 3,
   "genderWins": 13,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 81.3,
   "diff": 154,
   "ppg": 20.1,
   "leagueRank": 1,
   "rating": 3.9,
   "ratingGames": 32,
   "confidence": 85,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.5,
   "playerId": "16fc789d-f84a-487b-98f0-ed9db5478bb7"
  },
  {
   "name": "Christina Rothman-Iliff",
   "gender": "Female",
   "team": "The Three-Fives",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 53,
   "wins": 42,
   "losses": 11,
   "pointsWon": 1061,
   "totalPointsAgainst": 880,
   "mixedWins": 22,
   "mixedLosses": 6,
   "genderWins": 20,
   "genderLosses": 5,
   "clutchWins": 9,
   "clutchLosses": 4,
   "winPct": 79.2,
   "diff": 181,
   "ppg": 20,
   "leagueRank": 2,
   "rating": 4.3,
   "ratingGames": 53,
   "confidence": 89,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 1.2,
   "playerId": "52221bc6-418a-45b2-9e92-5600b5a3040d"
  },
  {
   "name": "Robert Gemellaro",
   "gender": "Male",
   "team": "Hot Ballers!",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 6,
   "losses": 2,
   "pointsWon": 154,
   "totalPointsAgainst": 132,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "68381165-d24c-4955-aed2-b9cf38a402d6",
   "winPct": 75,
   "diff": 22,
   "ppg": 19.3,
   "leagueRank": 39,
   "rating": 1.9,
   "ratingGames": 8,
   "confidence": 61,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.8
  },
  {
   "name": "Sarika Nadig",
   "gender": "Female",
   "team": "Smash-holes!",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 54,
   "wins": 40,
   "losses": 14,
   "pointsWon": 1076,
   "totalPointsAgainst": 805,
   "mixedWins": 20,
   "mixedLosses": 7,
   "genderWins": 20,
   "genderLosses": 7,
   "clutchWins": 3,
   "clutchLosses": 7,
   "winPct": 74.1,
   "diff": 271,
   "ppg": 19.9,
   "leagueRank": 3,
   "rating": 2.8,
   "ratingGames": 54,
   "confidence": 89,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.7,
   "playerId": "f237825e-81d3-4c1a-a13a-e235413b1215"
  },
  {
   "name": "Brandon Calmo",
   "gender": "Male",
   "team": "The Three-Fives",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 56,
   "wins": 40,
   "losses": 16,
   "pointsWon": 1098,
   "totalPointsAgainst": 977,
   "mixedWins": 20,
   "mixedLosses": 9,
   "genderWins": 20,
   "genderLosses": 7,
   "clutchWins": 12,
   "clutchLosses": 7,
   "winPct": 71.4,
   "diff": 121,
   "ppg": 19.6,
   "leagueRank": 5,
   "rating": 3,
   "ratingGames": 56,
   "confidence": 89,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 1.3,
   "playerId": "79a3d198-0295-4bed-b0d7-bcda477d6b3a"
  },
  {
   "name": "Christine Cardinal",
   "gender": "Female",
   "team": "Smash-holes!",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 55,
   "wins": 38,
   "losses": 17,
   "pointsWon": 1100,
   "totalPointsAgainst": 894,
   "mixedWins": 18,
   "mixedLosses": 10,
   "genderWins": 20,
   "genderLosses": 7,
   "clutchWins": 8,
   "clutchLosses": 9,
   "winPct": 69.1,
   "diff": 206,
   "ppg": 20,
   "leagueRank": 4,
   "rating": 3.5,
   "ratingGames": 55,
   "confidence": 89,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.7,
   "playerId": "025d7701-550f-4828-9e24-d9718f998f22"
  },
  {
   "name": "William Covino",
   "gender": "Male",
   "team": "Smash-holes!",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 29,
   "losses": 13,
   "pointsWon": 815,
   "totalPointsAgainst": 679,
   "mixedWins": 13,
   "mixedLosses": 6,
   "genderWins": 16,
   "genderLosses": 7,
   "clutchWins": 8,
   "clutchLosses": 5,
   "winPct": 69,
   "diff": 136,
   "ppg": 19.4,
   "leagueRank": 7,
   "rating": 2.1,
   "ratingGames": 42,
   "confidence": 87,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0,
   "playerId": "efc60243-f47d-44bd-aaeb-9c80d2186762"
  },
  {
   "name": "Edwin Garcia",
   "gender": "Male",
   "team": "Smash-holes!",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 23,
   "losses": 11,
   "pointsWon": 669,
   "totalPointsAgainst": 571,
   "mixedWins": 13,
   "mixedLosses": 5,
   "genderWins": 10,
   "genderLosses": 6,
   "clutchWins": 6,
   "clutchLosses": 5,
   "winPct": 67.6,
   "diff": 98,
   "ppg": 19.7,
   "leagueRank": 9,
   "rating": 2,
   "ratingGames": 34,
   "confidence": 85,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.3,
   "playerId": "a4310f70-ee30-4e55-b189-2efd837b7189"
  },
  {
   "name": "Taryn Seidner",
   "gender": "Female",
   "team": "Smash-holes!",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 31,
   "losses": 15,
   "pointsWon": 901,
   "totalPointsAgainst": 793,
   "mixedWins": 17,
   "mixedLosses": 6,
   "genderWins": 14,
   "genderLosses": 9,
   "clutchWins": 12,
   "clutchLosses": 4,
   "winPct": 67.4,
   "diff": 108,
   "ppg": 19.6,
   "leagueRank": 12,
   "rating": 0.5,
   "ratingGames": 46,
   "confidence": 88,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.6,
   "playerId": "2dd97210-f5b8-4645-b400-a2611539cca8"
  },
  {
   "name": "John Sarinick",
   "gender": "Male",
   "team": "Hot Ballers!",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 26,
   "losses": 13,
   "pointsWon": 769,
   "totalPointsAgainst": 664,
   "mixedWins": 13,
   "mixedLosses": 6,
   "genderWins": 13,
   "genderLosses": 7,
   "clutchWins": 9,
   "clutchLosses": 5,
   "winPct": 66.7,
   "diff": 105,
   "ppg": 19.7,
   "leagueRank": 10,
   "rating": 1.6,
   "ratingGames": 39,
   "confidence": 86,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.3,
   "playerId": "ed26c838-1086-4f82-93a0-07e49ca65df9"
  },
  {
   "name": "Kevin Lew",
   "gender": "Male",
   "team": "The Three-Fives",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 121,
   "totalPointsAgainst": 101,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "03886b04-b474-4dda-b7f3-eb4f4954399c",
   "winPct": 66.7,
   "diff": 20,
   "ppg": 20.2,
   "leagueRank": 45,
   "rating": 1.4,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": -1.2
  },
  {
   "name": "Simon George",
   "gender": "Male",
   "team": "Hot Ballers!",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 116,
   "totalPointsAgainst": 110,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "4e05bfa3-9b1b-4507-af90-9085649a6028",
   "winPct": 66.7,
   "diff": 6,
   "ppg": 19.3,
   "leagueRank": 55,
   "rating": -0.7,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -1.3
  },
  {
   "name": "Rakesh Roy",
   "gender": "Male",
   "team": "Hot Ballers!",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 55,
   "wins": 36,
   "losses": 19,
   "pointsWon": 1057,
   "totalPointsAgainst": 863,
   "mixedWins": 17,
   "mixedLosses": 12,
   "genderWins": 19,
   "genderLosses": 7,
   "clutchWins": 6,
   "clutchLosses": 7,
   "winPct": 65.5,
   "diff": 194,
   "ppg": 19.2,
   "leagueRank": 8,
   "rating": 2,
   "ratingGames": 55,
   "confidence": 89,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.5,
   "playerId": "f54de088-2ac8-4b88-9b01-571fe28da246"
  },
  {
   "name": "Terri Pflueger",
   "gender": "Female",
   "team": "Smash-holes!",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 47,
   "wins": 30,
   "losses": 17,
   "pointsWon": 919,
   "totalPointsAgainst": 825,
   "mixedWins": 14,
   "mixedLosses": 9,
   "genderWins": 16,
   "genderLosses": 8,
   "clutchWins": 11,
   "clutchLosses": 7,
   "winPct": 63.8,
   "diff": 94,
   "ppg": 19.6,
   "leagueRank": 13,
   "rating": 1.4,
   "ratingGames": 47,
   "confidence": 88,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0.5,
   "playerId": "25ba9d21-49c3-4449-a120-1ba4a9621fb7"
  },
  {
   "name": "Ben Cortes",
   "gender": "Male",
   "team": "The Three-Fives",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 48,
   "wins": 30,
   "losses": 18,
   "pointsWon": 912,
   "totalPointsAgainst": 866,
   "mixedWins": 14,
   "mixedLosses": 9,
   "genderWins": 16,
   "genderLosses": 9,
   "clutchWins": 11,
   "clutchLosses": 7,
   "winPct": 62.5,
   "diff": 46,
   "ppg": 19,
   "leagueRank": 15,
   "rating": 2.2,
   "ratingGames": 48,
   "confidence": 88,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 1.2,
   "playerId": "4d89659f-a86c-4416-93f2-5c868fe0e984"
  },
  {
   "name": "Eric Goldman",
   "gender": "Male",
   "team": "Nets Gambit",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 162,
   "totalPointsAgainst": 136,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 3,
   "playerId": "072dd3e0-43bd-4c1a-ba08-3dec77ae24a2",
   "winPct": 62.5,
   "diff": 26,
   "ppg": 20.3,
   "leagueRank": 35,
   "rating": 2.1,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -0.5
  },
  {
   "name": "Veronica Rosas",
   "gender": "Female",
   "team": "Nets Gambit",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 23,
   "losses": 14,
   "pointsWon": 734,
   "totalPointsAgainst": 665,
   "mixedWins": 9,
   "mixedLosses": 9,
   "genderWins": 14,
   "genderLosses": 5,
   "clutchWins": 7,
   "clutchLosses": 9,
   "winPct": 62.2,
   "diff": 69,
   "ppg": 19.8,
   "leagueRank": 6,
   "rating": 4.1,
   "ratingGames": 37,
   "confidence": 85,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 1.4,
   "playerId": "abab39fe-af60-4956-9f97-460189ab90dc"
  },
  {
   "name": "Ola Cauble",
   "gender": "Female",
   "team": "The Three-Fives",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 13,
   "losses": 8,
   "pointsWon": 401,
   "totalPointsAgainst": 389,
   "mixedWins": 6,
   "mixedLosses": 4,
   "genderWins": 7,
   "genderLosses": 4,
   "clutchWins": 7,
   "clutchLosses": 0,
   "playerId": "5e34ba87-6778-4079-8ca1-c4ee044314cc",
   "winPct": 61.9,
   "diff": 12,
   "ppg": 19.1,
   "leagueRank": 16,
   "rating": 0.6,
   "ratingGames": 21,
   "confidence": 79,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.2
  },
  {
   "name": "Brianna Zenna",
   "gender": "Female",
   "team": "The Three-Fives",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 52,
   "wins": 31,
   "losses": 21,
   "pointsWon": 973,
   "totalPointsAgainst": 901,
   "mixedWins": 15,
   "mixedLosses": 10,
   "genderWins": 16,
   "genderLosses": 11,
   "clutchWins": 7,
   "clutchLosses": 3,
   "winPct": 59.6,
   "diff": 72,
   "ppg": 18.7,
   "leagueRank": 17,
   "rating": 1.4,
   "ratingGames": 52,
   "confidence": 88,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": 1,
   "playerId": "9d4be34a-de39-4590-991b-65f92f947482"
  },
  {
   "name": "Kyle Woerner",
   "gender": "Male",
   "team": "Hot Ballers!",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 33,
   "wins": 19,
   "losses": 14,
   "pointsWon": 618,
   "totalPointsAgainst": 555,
   "mixedWins": 8,
   "mixedLosses": 9,
   "genderWins": 11,
   "genderLosses": 5,
   "clutchWins": 6,
   "clutchLosses": 4,
   "winPct": 57.6,
   "diff": 63,
   "ppg": 18.7,
   "leagueRank": 18,
   "rating": 0.7,
   "ratingGames": 33,
   "confidence": 85,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.6,
   "playerId": "49766802-f2c8-46aa-8ca1-e917160a60f0"
  },
  {
   "name": "Belicia Hughes",
   "gender": "Female",
   "team": "Smash-holes!",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 9,
   "losses": 7,
   "pointsWon": 308,
   "totalPointsAgainst": 274,
   "mixedWins": 3,
   "mixedLosses": 5,
   "genderWins": 6,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 3,
   "playerId": "0eda2ee3-2997-4519-ac1a-50c0da39145e",
   "winPct": 56.3,
   "diff": 34,
   "ppg": 19.3,
   "leagueRank": 26,
   "rating": 0.9,
   "ratingGames": 16,
   "confidence": 76,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 0.3
  },
  {
   "name": "Danny Ruiz",
   "gender": "Male",
   "team": "Hot Ballers!",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 50,
   "wins": 28,
   "losses": 22,
   "pointsWon": 935,
   "totalPointsAgainst": 908,
   "mixedWins": 12,
   "mixedLosses": 12,
   "genderWins": 16,
   "genderLosses": 10,
   "clutchWins": 12,
   "clutchLosses": 5,
   "winPct": 56,
   "diff": 27,
   "ppg": 18.7,
   "leagueRank": 21,
   "rating": 1.6,
   "ratingGames": 50,
   "confidence": 88,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.9,
   "playerId": "cf86f914-08ca-4df6-9cdb-74a23afc2478"
  },
  {
   "name": "Brooke Mcbride",
   "gender": "Female",
   "team": "Smash-holes!",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 12,
   "losses": 10,
   "pointsWon": 409,
   "totalPointsAgainst": 394,
   "mixedWins": 5,
   "mixedLosses": 7,
   "genderWins": 7,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 3,
   "playerId": "60adfa52-c615-4ad3-b165-26941f955a56",
   "winPct": 54.5,
   "diff": 15,
   "ppg": 18.6,
   "leagueRank": 44,
   "rating": 0.3,
   "ratingGames": 22,
   "confidence": 81,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.1
  },
  {
   "name": "Anthony Solares",
   "gender": "Male",
   "team": "Nets Gambit",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 50,
   "wins": 27,
   "losses": 23,
   "pointsWon": 966,
   "totalPointsAgainst": 912,
   "mixedWins": 16,
   "mixedLosses": 11,
   "genderWins": 11,
   "genderLosses": 12,
   "clutchWins": 10,
   "clutchLosses": 10,
   "winPct": 54,
   "diff": 54,
   "ppg": 19.3,
   "leagueRank": 14,
   "rating": 3.8,
   "ratingGames": 50,
   "confidence": 88,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 1.3,
   "playerId": "0adc78f0-0318-418d-bae1-f92d3ca5443d"
  },
  {
   "name": "Luis Guzman",
   "gender": "Male",
   "team": "Hot Ballers!",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 22,
   "losses": 19,
   "pointsWon": 774,
   "totalPointsAgainst": 775,
   "mixedWins": 11,
   "mixedLosses": 9,
   "genderWins": 11,
   "genderLosses": 10,
   "clutchWins": 12,
   "clutchLosses": 7,
   "winPct": 53.7,
   "diff": -1,
   "ppg": 18.9,
   "leagueRank": 25,
   "rating": 0.2,
   "ratingGames": 41,
   "confidence": 86,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.3,
   "playerId": "10eba8b1-6e12-4d4b-994c-8bc62f617909"
  },
  {
   "name": "Padma Gopi",
   "gender": "Female",
   "team": "Hot Ballers!",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 8,
   "losses": 7,
   "pointsWon": 263,
   "totalPointsAgainst": 240,
   "mixedWins": 4,
   "mixedLosses": 4,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "b6d7b5a0-f05d-4ed5-ad11-a24c4a7e1ac4",
   "winPct": 53.3,
   "diff": 23,
   "ppg": 17.5,
   "leagueRank": 42,
   "rating": 0.2,
   "ratingGames": 15,
   "confidence": 73,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.6
  },
  {
   "name": "Neil Dedhia",
   "gender": "Male",
   "team": "Smash-holes!",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 51,
   "wins": 27,
   "losses": 24,
   "pointsWon": 995,
   "totalPointsAgainst": 927,
   "mixedWins": 16,
   "mixedLosses": 11,
   "genderWins": 11,
   "genderLosses": 13,
   "clutchWins": 9,
   "clutchLosses": 13,
   "winPct": 52.9,
   "diff": 68,
   "ppg": 19.5,
   "leagueRank": 20,
   "rating": 1.9,
   "ratingGames": 51,
   "confidence": 88,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 1.1,
   "playerId": "20f3e907-41d8-40bb-8cef-cb6fed84a2aa"
  },
  {
   "name": "Ross Bienstock",
   "gender": "Male",
   "team": "Smash-holes!",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 44,
   "wins": 23,
   "losses": 21,
   "pointsWon": 797,
   "totalPointsAgainst": 800,
   "mixedWins": 14,
   "mixedLosses": 8,
   "genderWins": 9,
   "genderLosses": 13,
   "clutchWins": 6,
   "clutchLosses": 5,
   "winPct": 52.3,
   "diff": -3,
   "ppg": 18.1,
   "leagueRank": 30,
   "rating": -1.6,
   "ratingGames": 44,
   "confidence": 86,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.8,
   "playerId": "4464f477-6545-4e8f-8893-af53a8eeefb5"
  },
  {
   "name": "Danielle Kuti",
   "gender": "Female",
   "team": "The Three-Fives",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 20,
   "losses": 19,
   "pointsWon": 727,
   "totalPointsAgainst": 697,
   "mixedWins": 7,
   "mixedLosses": 12,
   "genderWins": 13,
   "genderLosses": 7,
   "clutchWins": 6,
   "clutchLosses": 5,
   "winPct": 51.3,
   "diff": 30,
   "ppg": 18.6,
   "leagueRank": 24,
   "rating": 0.7,
   "ratingGames": 39,
   "confidence": 86,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.1,
   "playerId": "c3902bc0-35a6-490d-9909-6f19b1224b99"
  },
  {
   "name": "David Armento",
   "gender": "Male",
   "team": "Hot Ballers!",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 12,
   "losses": 12,
   "pointsWon": 446,
   "totalPointsAgainst": 415,
   "mixedWins": 4,
   "mixedLosses": 8,
   "genderWins": 8,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 5,
   "winPct": 50,
   "diff": 31,
   "ppg": 18.6,
   "leagueRank": 23,
   "rating": 0.3,
   "ratingGames": 24,
   "confidence": 80,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.6,
   "playerId": "4c4e430e-8a0f-462b-a5da-daa1b89ca96f"
  },
  {
   "name": "Katie Ursino",
   "gender": "Female",
   "team": "The Three-Fives",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 118,
   "totalPointsAgainst": 109,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "0ab36799-35fe-4fca-9e5f-9d3f679b0b6e",
   "winPct": 50,
   "diff": 9,
   "ppg": 19.7,
   "leagueRank": 61,
   "rating": -0.2,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -1
  },
  {
   "name": "Matthew Mcbride",
   "gender": "Male",
   "team": "Smash-holes!",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 157,
   "totalPointsAgainst": 150,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 3,
   "playerId": "229789a1-39a0-4693-9fd5-f9b1ad8f3f58",
   "winPct": 50,
   "diff": 7,
   "ppg": 19.6,
   "leagueRank": 53,
   "rating": 0.6,
   "ratingGames": 8,
   "confidence": 62,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.3
  },
  {
   "name": "Angelina Mogielnicki",
   "gender": "Female",
   "team": "Hot Ballers!",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 44,
   "wins": 22,
   "losses": 22,
   "pointsWon": 773,
   "totalPointsAgainst": 807,
   "mixedWins": 14,
   "mixedLosses": 8,
   "genderWins": 8,
   "genderLosses": 14,
   "clutchWins": 10,
   "clutchLosses": 4,
   "winPct": 50,
   "diff": -34,
   "ppg": 17.6,
   "leagueRank": 32,
   "rating": -1.6,
   "ratingGames": 44,
   "confidence": 87,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.3,
   "playerId": "7ea83077-4e5c-4394-a1e1-d28c0607b925"
  },
  {
   "name": "Katie O'Mara",
   "gender": "Female",
   "team": "Hot Ballers!",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 50,
   "wins": 25,
   "losses": 25,
   "pointsWon": 883,
   "totalPointsAgainst": 940,
   "mixedWins": 16,
   "mixedLosses": 9,
   "genderWins": 9,
   "genderLosses": 16,
   "clutchWins": 9,
   "clutchLosses": 5,
   "winPct": 50,
   "diff": -57,
   "ppg": 17.7,
   "leagueRank": 33,
   "rating": -1.7,
   "ratingGames": 50,
   "confidence": 88,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.3,
   "playerId": "99913860-615f-4516-8868-f83a2c029221"
  },
  {
   "name": "Robert Stoffers",
   "gender": "Male",
   "team": "Smash-holes!",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 53,
   "wins": 26,
   "losses": 27,
   "pointsWon": 1006,
   "totalPointsAgainst": 971,
   "mixedWins": 16,
   "mixedLosses": 10,
   "genderWins": 10,
   "genderLosses": 17,
   "clutchWins": 6,
   "clutchLosses": 9,
   "winPct": 49.1,
   "diff": 35,
   "ppg": 19,
   "leagueRank": 28,
   "rating": -1,
   "ratingGames": 53,
   "confidence": 89,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.4,
   "playerId": "1934918c-d931-408e-a1e0-3ed291371f1b"
  },
  {
   "name": "Sue Caputo",
   "gender": "Female",
   "team": "Nets Gambit",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 10,
   "losses": 11,
   "pointsWon": 400,
   "totalPointsAgainst": 398,
   "mixedWins": 4,
   "mixedLosses": 6,
   "genderWins": 6,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 47.6,
   "diff": 2,
   "ppg": 19,
   "leagueRank": 22,
   "rating": 2.2,
   "ratingGames": 21,
   "confidence": 80,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 1.3,
   "playerId": "39c42fdb-bb35-458b-9460-b60d8fa5fcdb"
  },
  {
   "name": "Supriya Kothakonda",
   "gender": "Female",
   "team": "Nets Gambit",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 20,
   "losses": 22,
   "pointsWon": 766,
   "totalPointsAgainst": 786,
   "mixedWins": 9,
   "mixedLosses": 12,
   "genderWins": 11,
   "genderLosses": 10,
   "clutchWins": 5,
   "clutchLosses": 12,
   "winPct": 47.6,
   "diff": -20,
   "ppg": 18.2,
   "leagueRank": 29,
   "rating": 0.3,
   "ratingGames": 42,
   "confidence": 86,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": -0.2,
   "playerId": "cec94ca2-1b4a-4787-803a-b08ccdae1d18"
  },
  {
   "name": "Clarisse Espiritu",
   "gender": "Female",
   "team": "Nets Gambit",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 7,
   "losses": 8,
   "pointsWon": 275,
   "totalPointsAgainst": 285,
   "mixedWins": 4,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 46.7,
   "diff": -10,
   "ppg": 18.3,
   "leagueRank": 41,
   "rating": 2.2,
   "ratingGames": 15,
   "confidence": 75,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 2.4,
   "playerId": "dc1107ce-7076-4251-9bf3-b4a1ee5ac9a9"
  },
  {
   "name": "Susan Bluni",
   "gender": "Female",
   "team": "The Three-Fives",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 13,
   "losses": 15,
   "pointsWon": 474,
   "totalPointsAgainst": 534,
   "mixedWins": 7,
   "mixedLosses": 7,
   "genderWins": 6,
   "genderLosses": 8,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 46.4,
   "diff": -60,
   "ppg": 16.9,
   "leagueRank": 36,
   "rating": -0.9,
   "ratingGames": 28,
   "confidence": 84,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.6,
   "playerId": "0a1213eb-97d7-475b-a8d3-bc1828c31027"
  },
  {
   "name": "Kevin Emig",
   "gender": "Male",
   "team": "The Three-Fives",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 17,
   "losses": 20,
   "pointsWon": 663,
   "totalPointsAgainst": 717,
   "mixedWins": 8,
   "mixedLosses": 11,
   "genderWins": 9,
   "genderLosses": 9,
   "clutchWins": 10,
   "clutchLosses": 6,
   "winPct": 45.9,
   "diff": -54,
   "ppg": 17.9,
   "leagueRank": 34,
   "rating": -2.3,
   "ratingGames": 37,
   "confidence": 86,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.2,
   "playerId": "dec0f121-8df3-42f4-ac65-2e8d2b676a0e"
  },
  {
   "name": "Gavin Jordan",
   "gender": "Male",
   "team": "The Three-Fives",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 31,
   "wins": 14,
   "losses": 17,
   "pointsWon": 563,
   "totalPointsAgainst": 586,
   "mixedWins": 7,
   "mixedLosses": 8,
   "genderWins": 7,
   "genderLosses": 9,
   "clutchWins": 2,
   "clutchLosses": 6,
   "winPct": 45.2,
   "diff": -23,
   "ppg": 18.2,
   "leagueRank": 31,
   "rating": -1.3,
   "ratingGames": 31,
   "confidence": 84,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.1,
   "playerId": "04f601ae-9ac0-4f6a-8665-aa54e2a34fe9"
  },
  {
   "name": "Shekhar Bansal",
   "gender": "Male",
   "team": "The Three-Fives",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 8,
   "losses": 10,
   "pointsWon": 303,
   "totalPointsAgainst": 345,
   "mixedWins": 4,
   "mixedLosses": 5,
   "genderWins": 4,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 44.4,
   "diff": -42,
   "ppg": 16.8,
   "leagueRank": 46,
   "rating": -0.8,
   "ratingGames": 18,
   "confidence": 77,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": -0.1,
   "playerId": "f44c50e6-af45-41d5-9439-1e1cbf9b67f1"
  },
  {
   "name": "Michelle Gemellaro",
   "gender": "Female",
   "team": "Hot Ballers!",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 132,
   "totalPointsAgainst": 128,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "c88d4242-d33b-43dc-9b08-cbbe8664129b",
   "winPct": 42.9,
   "diff": 4,
   "ppg": 18.9,
   "leagueRank": 63,
   "rating": 0.1,
   "ratingGames": 7,
   "confidence": 59,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.3
  },
  {
   "name": "Rebecca Ramos",
   "gender": "Female",
   "team": "Nets Gambit",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 6,
   "losses": 8,
   "pointsWon": 246,
   "totalPointsAgainst": 263,
   "mixedWins": 1,
   "mixedLosses": 6,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 3,
   "playerId": "91fa0505-9e84-4deb-b11a-a42e6c55696c",
   "winPct": 42.9,
   "diff": -17,
   "ppg": 17.6,
   "leagueRank": 51,
   "rating": -1.4,
   "ratingGames": 14,
   "confidence": 73,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.4
  },
  {
   "name": "Jodie Bennett",
   "gender": "Female",
   "team": "The Three-Fives",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 6,
   "losses": 8,
   "pointsWon": 254,
   "totalPointsAgainst": 275,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 4,
   "playerId": "44a54409-964b-44ae-a670-c69f7edf9600",
   "winPct": 42.9,
   "diff": -21,
   "ppg": 18.1,
   "leagueRank": 48,
   "rating": -0.3,
   "ratingGames": 14,
   "confidence": 73,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.9
  },
  {
   "name": "Iqra Hasan-Calmo",
   "gender": "Female",
   "team": "Hot Ballers!",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 59,
   "wins": 25,
   "losses": 34,
   "pointsWon": 1015,
   "totalPointsAgainst": 1081,
   "mixedWins": 14,
   "mixedLosses": 15,
   "genderWins": 11,
   "genderLosses": 19,
   "clutchWins": 9,
   "clutchLosses": 5,
   "winPct": 42.4,
   "diff": -66,
   "ppg": 17.2,
   "leagueRank": 37,
   "rating": -0.2,
   "ratingGames": 59,
   "confidence": 89,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.6,
   "playerId": "29c4170e-eb9f-400b-bc22-92f83e056e22"
  },
  {
   "name": "Elsie Garcia",
   "gender": "Female",
   "team": "Smash-holes!",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 9,
   "losses": 13,
   "pointsWon": 373,
   "totalPointsAgainst": 409,
   "mixedWins": 4,
   "mixedLosses": 7,
   "genderWins": 5,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 40.9,
   "diff": -36,
   "ppg": 17,
   "leagueRank": 43,
   "rating": -3,
   "ratingGames": 22,
   "confidence": 78,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.9,
   "playerId": "5e086f9d-8026-4ba1-8a9a-f67aa0ce78dd"
  },
  {
   "name": "Eleanor Dunlevy",
   "gender": "Female",
   "team": "Smash-holes!",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 133,
   "totalPointsAgainst": 147,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 37.5,
   "diff": -14,
   "ppg": 16.6,
   "leagueRank": 67,
   "rating": 0.7,
   "ratingGames": 8,
   "confidence": 62,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 1,
   "playerId": "38e448dc-5f79-4607-a176-66fe32dd5fb7"
  },
  {
   "name": "Matthew Buffolino",
   "gender": "Male",
   "team": "Nets Gambit",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 133,
   "totalPointsAgainst": 152,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "89d7275a-1425-4d35-b75a-d2d5f93f99a6",
   "winPct": 37.5,
   "diff": -19,
   "ppg": 16.6,
   "leagueRank": 66,
   "rating": 0.2,
   "ratingGames": 8,
   "confidence": 62,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 1.9
  },
  {
   "name": "Ellen Venezia",
   "gender": "Female",
   "team": "Hot Ballers!",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 60,
   "wins": 22,
   "losses": 38,
   "pointsWon": 1058,
   "totalPointsAgainst": 1143,
   "mixedWins": 14,
   "mixedLosses": 16,
   "genderWins": 8,
   "genderLosses": 22,
   "clutchWins": 8,
   "clutchLosses": 11,
   "winPct": 36.7,
   "diff": -85,
   "ppg": 17.6,
   "leagueRank": 38,
   "rating": 0.6,
   "ratingGames": 60,
   "confidence": 89,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 1.2,
   "playerId": "88f8dead-91f2-4d4e-b49f-8faed88b346b"
  },
  {
   "name": "Aiden Murphy",
   "gender": "Male",
   "team": "Nets Gambit",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 11,
   "losses": 26,
   "pointsWon": 602,
   "totalPointsAgainst": 728,
   "mixedWins": 5,
   "mixedLosses": 13,
   "genderWins": 6,
   "genderLosses": 13,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 29.7,
   "diff": -126,
   "ppg": 16.3,
   "leagueRank": 47,
   "rating": -2.9,
   "ratingGames": 37,
   "confidence": 86,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": -0.6,
   "playerId": "4d1c7d39-8ef1-47b7-b13a-5464c509380e"
  },
  {
   "name": "Mason Jordan",
   "gender": "Male",
   "team": "Nets Gambit",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 5,
   "losses": 13,
   "pointsWon": 291,
   "totalPointsAgainst": 361,
   "mixedWins": 1,
   "mixedLosses": 8,
   "genderWins": 4,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 27.8,
   "diff": -70,
   "ppg": 16.2,
   "leagueRank": 60,
   "rating": -2.2,
   "ratingGames": 18,
   "confidence": 77,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": -0.1,
   "playerId": "0aaad47b-2fee-4602-9689-1a866cb31119"
  },
  {
   "name": "Nina Donnelly",
   "gender": "Female",
   "team": "Nets Gambit",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 11,
   "losses": 31,
   "pointsWon": 691,
   "totalPointsAgainst": 821,
   "mixedWins": 4,
   "mixedLosses": 17,
   "genderWins": 7,
   "genderLosses": 14,
   "clutchWins": 3,
   "clutchLosses": 9,
   "winPct": 26.2,
   "diff": -130,
   "ppg": 16.5,
   "leagueRank": 49,
   "rating": -2.3,
   "ratingGames": 42,
   "confidence": 87,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.1,
   "playerId": "fd9de335-6ef4-48c0-82ac-c1e618f5f062"
  },
  {
   "name": "Zoe Zapf",
   "gender": "Female",
   "team": "Nets Gambit",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 4,
   "losses": 12,
   "pointsWon": 278,
   "totalPointsAgainst": 317,
   "mixedWins": 2,
   "mixedLosses": 6,
   "genderWins": 2,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 25,
   "diff": -39,
   "ppg": 17.4,
   "leagueRank": 52,
   "rating": -0.7,
   "ratingGames": 16,
   "confidence": 75,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0,
   "playerId": "d0f30788-f690-40db-8709-f1e485efc940"
  },
  {
   "name": "Nicole Demaise",
   "gender": "Female",
   "team": "Hot Ballers!",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 114,
   "totalPointsAgainst": 162,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 25,
   "diff": -48,
   "ppg": 14.3,
   "leagueRank": 69,
   "rating": -2.4,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 1.4,
   "playerId": "e2b97306-b8dc-4eb0-b89d-ae227d1e86e4"
  },
  {
   "name": "Ethan Macedo",
   "gender": "Male",
   "team": "The Three-Fives",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 7,
   "losses": 21,
   "pointsWon": 447,
   "totalPointsAgainst": 563,
   "mixedWins": 2,
   "mixedLosses": 12,
   "genderWins": 5,
   "genderLosses": 9,
   "clutchWins": 5,
   "clutchLosses": 5,
   "winPct": 25,
   "diff": -116,
   "ppg": 16,
   "leagueRank": 57,
   "rating": -4.2,
   "ratingGames": 28,
   "confidence": 83,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.3,
   "playerId": "b111ee21-3b4d-45f3-ab01-cff1cb57b5a5"
  },
  {
   "name": "Joshua Weinstein",
   "gender": "Male",
   "team": "Nets Gambit",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 7,
   "losses": 23,
   "pointsWon": 467,
   "totalPointsAgainst": 589,
   "mixedWins": 4,
   "mixedLosses": 11,
   "genderWins": 3,
   "genderLosses": 12,
   "clutchWins": 2,
   "clutchLosses": 7,
   "winPct": 23.3,
   "diff": -122,
   "ppg": 15.6,
   "leagueRank": 54,
   "rating": -1.8,
   "ratingGames": 30,
   "confidence": 84,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": 0,
   "playerId": "d70e2b4f-1076-4491-b0f2-5b96a328303b"
  },
  {
   "name": "Anna Arcaro",
   "gender": "Female",
   "team": "The Three-Fives",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 8,
   "losses": 28,
   "pointsWon": 567,
   "totalPointsAgainst": 720,
   "mixedWins": 4,
   "mixedLosses": 14,
   "genderWins": 4,
   "genderLosses": 14,
   "clutchWins": 3,
   "clutchLosses": 7,
   "winPct": 22.2,
   "diff": -153,
   "ppg": 15.8,
   "leagueRank": 59,
   "rating": -3.3,
   "ratingGames": 36,
   "confidence": 86,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.2,
   "playerId": "c0c21535-f157-4c5c-9c5d-d3a66ed4b10b"
  },
  {
   "name": "Aj Donnelly",
   "gender": "Male",
   "team": "Nets Gambit",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 6,
   "losses": 26,
   "pointsWon": 513,
   "totalPointsAgainst": 657,
   "mixedWins": 2,
   "mixedLosses": 13,
   "genderWins": 4,
   "genderLosses": 13,
   "clutchWins": 5,
   "clutchLosses": 9,
   "winPct": 18.8,
   "diff": -144,
   "ppg": 16,
   "leagueRank": 56,
   "rating": -1.3,
   "ratingGames": 32,
   "confidence": 84,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 1.2,
   "playerId": "f7291419-bff5-4195-9c1e-78bad893b11d"
  },
  {
   "name": "Morgan Valencia King",
   "gender": "Male",
   "team": "Nets Gambit",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 5,
   "losses": 30,
   "pointsWon": 576,
   "totalPointsAgainst": 710,
   "mixedWins": 2,
   "mixedLosses": 15,
   "genderWins": 3,
   "genderLosses": 15,
   "clutchWins": 1,
   "clutchLosses": 12,
   "winPct": 14.3,
   "diff": -134,
   "ppg": 16.5,
   "leagueRank": 58,
   "rating": -1.4,
   "ratingGames": 35,
   "confidence": 85,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 1.6,
   "playerId": "ac049c23-359d-4508-8bc1-274a7276239c"
  },
  {
   "name": "Juan Uribe",
   "gender": "Male",
   "team": "Nets Gambit",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 5,
   "losses": 33,
   "pointsWon": 526,
   "totalPointsAgainst": 784,
   "mixedWins": 3,
   "mixedLosses": 16,
   "genderWins": 2,
   "genderLosses": 17,
   "clutchWins": 4,
   "clutchLosses": 6,
   "winPct": 13.2,
   "diff": -258,
   "ppg": 13.8,
   "leagueRank": 65,
   "rating": -5.3,
   "ratingGames": 38,
   "confidence": 85,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": -0.1,
   "playerId": "7cf43262-2d33-4f82-afba-bf0294000c56"
  },
  {
   "name": "Emily Sowa",
   "gender": "Female",
   "team": "Nets Gambit",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 102,
   "totalPointsAgainst": 165,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "42d01dab-4aca-4c74-aa73-47be4fbff788",
   "winPct": 12.5,
   "diff": -63,
   "ppg": 12.8,
   "leagueRank": 70,
   "rating": -3.9,
   "ratingGames": 8,
   "confidence": 61,
   "strengthOfPartners": -2,
   "strengthOfOpponents": 0
  },
  {
   "name": "Natalia Maciejewicz",
   "gender": "Female",
   "team": "Nets Gambit",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 4,
   "losses": 34,
   "pointsWon": 600,
   "totalPointsAgainst": 777,
   "mixedWins": 2,
   "mixedLosses": 17,
   "genderWins": 2,
   "genderLosses": 17,
   "clutchWins": 2,
   "clutchLosses": 10,
   "winPct": 10.5,
   "diff": -177,
   "ppg": 15.8,
   "leagueRank": 62,
   "rating": -1.9,
   "ratingGames": 38,
   "confidence": 86,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.7,
   "playerId": "ffd29340-40ba-4a85-a922-f93075d9b0df"
  },
  {
   "name": "Derek Halili",
   "gender": "Male",
   "team": "Smash-holes!",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 1,
   "losses": 17,
   "pointsWon": 240,
   "totalPointsAgainst": 376,
   "mixedWins": 1,
   "mixedLosses": 8,
   "genderWins": 0,
   "genderLosses": 9,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 5.6,
   "diff": -136,
   "ppg": 13.3,
   "leagueRank": 68,
   "rating": -6,
   "ratingGames": 18,
   "confidence": 77,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -0.1,
   "playerId": "41124e68-c4a1-4aa5-b76f-f14acd23999d"
  },
  {
   "name": "Tim Jordan",
   "gender": "Male",
   "team": "Smash-holes!",
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
   "leagueRank": 76,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "51bdcef1-a7ae-49f0-a18a-be681d55cd52"
  },
  {
   "name": "Ruth Rao",
   "gender": "Female",
   "team": "Nets Gambit",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 0,
   "losses": 8,
   "pointsWon": 105,
   "totalPointsAgainst": 168,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "b54eb3c6-a8b7-4a05-9f14-83d697a50dcc",
   "winPct": 0,
   "diff": -63,
   "ppg": 13.1,
   "leagueRank": 71,
   "rating": -3,
   "ratingGames": 8,
   "confidence": 60,
   "strengthOfPartners": -3.5,
   "strengthOfOpponents": 0
  },
  {
   "name": "Lauren Lowther",
   "gender": "Female",
   "team": "Nets Gambit",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 0,
   "losses": 8,
   "pointsWon": 86,
   "totalPointsAgainst": 168,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -82,
   "ppg": 10.8,
   "leagueRank": 72,
   "rating": -6,
   "ratingGames": 8,
   "confidence": 60,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.1,
   "playerId": "80a5f205-ca4b-4335-86d4-41c897a2fda5"
  }
 ],
 "teams": [
  {
   "name": "Smash-holes!",
   "w": 6,
   "l": 2,
   "pf": 4995,
   "pa": 4537,
   "gw": 152,
   "gl": 104,
   "diff": 458,
   "gameDiff": 48,
   "power": 0.8,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     79,
     49
    ],
    "male": [
     30,
     34
    ],
    "female": [
     43,
     21
    ]
   }
  },
  {
   "name": "The Three-Fives",
   "w": 6,
   "l": 2,
   "pf": 4840,
   "pa": 4738,
   "gw": 144,
   "gl": 112,
   "diff": 102,
   "gameDiff": 32,
   "power": 0.7,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     70,
     58
    ],
    "male": [
     38,
     26
    ],
    "female": [
     36,
     28
    ]
   }
  },
  {
   "name": "Hot Ballers!",
   "w": 3,
   "l": 5,
   "pf": 4787,
   "pa": 4694,
   "gw": 134,
   "gl": 122,
   "diff": 93,
   "gameDiff": 12,
   "power": 0.3,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     71,
     57
    ],
    "male": [
     41,
     23
    ],
    "female": [
     22,
     42
    ]
   }
  },
  {
   "name": "Nets Gambit",
   "w": 1,
   "l": 7,
   "pf": 4474,
   "pa": 5127,
   "gw": 82,
   "gl": 174,
   "diff": -653,
   "gameDiff": -92,
   "power": -0.7,
   "powerRank": 4,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     36,
     92
    ],
    "male": [
     19,
     45
    ],
    "female": [
     27,
     37
    ]
   }
  }
 ],
 "duos": [
  {
   "a": "Susan Bluni",
   "b": "Ben Cortes",
   "team": "The Three-Fives",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 2.4,
   "avgActual": 2.7,
   "avgExpected": -3,
   "aId": "0a1213eb-97d7-475b-a8d3-bc1828c31027",
   "bId": "4d89659f-a86c-4416-93f2-5c868fe0e984"
  },
  {
   "a": "Brianna Zenna",
   "b": "Danielle Kuti",
   "team": "The Three-Fives",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 1.9,
   "avgActual": 3.9,
   "avgExpected": 0.9,
   "aId": "9d4be34a-de39-4590-991b-65f92f947482",
   "bId": "c3902bc0-35a6-490d-9909-6f19b1224b99"
  },
  {
   "a": "Alan Liang",
   "b": "Brandon Calmo",
   "team": "The Three-Fives",
   "n": 7,
   "w": 7,
   "l": 0,
   "synergy": 1.9,
   "avgActual": 6.7,
   "avgExpected": 3.7,
   "aId": "16fc789d-f84a-487b-98f0-ed9db5478bb7",
   "bId": "79a3d198-0295-4bed-b0d7-bcda477d6b3a"
  },
  {
   "a": "Edwin Garcia",
   "b": "William Covino",
   "team": "Smash-holes!",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.9,
   "avgActual": 7,
   "avgExpected": 2.6,
   "aId": "a4310f70-ee30-4e55-b189-2efd837b7189",
   "bId": "efc60243-f47d-44bd-aaeb-9c80d2186762"
  },
  {
   "a": "Supriya Kothakonda",
   "b": "Nina Donnelly",
   "team": "Nets Gambit",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 1.7,
   "avgActual": 2.7,
   "avgExpected": -0.2,
   "aId": "cec94ca2-1b4a-4787-803a-b08ccdae1d18",
   "bId": "fd9de335-6ef4-48c0-82ac-c1e618f5f062"
  },
  {
   "a": "Christina Rothman-Iliff",
   "b": "Brianna Zenna",
   "team": "The Three-Fives",
   "n": 9,
   "w": 8,
   "l": 1,
   "synergy": 1.6,
   "avgActual": 6.1,
   "avgExpected": 3.8,
   "aId": "52221bc6-418a-45b2-9e92-5600b5a3040d",
   "bId": "9d4be34a-de39-4590-991b-65f92f947482"
  },
  {
   "a": "Luis Guzman",
   "b": "Iqra Hasan-Calmo",
   "team": "Hot Ballers!",
   "n": 9,
   "w": 5,
   "l": 4,
   "synergy": 1.6,
   "avgActual": 0.3,
   "avgExpected": -2,
   "aId": "10eba8b1-6e12-4d4b-994c-8bc62f617909",
   "bId": "29c4170e-eb9f-400b-bc22-92f83e056e22"
  },
  {
   "a": "David Armento",
   "b": "Rakesh Roy",
   "team": "Hot Ballers!",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.6,
   "avgActual": 8.8,
   "avgExpected": 5.5,
   "aId": "4c4e430e-8a0f-462b-a5da-daa1b89ca96f",
   "bId": "f54de088-2ac8-4b88-9b01-571fe28da246"
  },
  {
   "a": "Gavin Jordan",
   "b": "Kevin Emig",
   "team": "The Three-Fives",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 1.6,
   "avgActual": -0.4,
   "avgExpected": -3.3,
   "aId": "04f601ae-9ac0-4f6a-8665-aa54e2a34fe9",
   "bId": "dec0f121-8df3-42f4-ac65-2e8d2b676a0e"
  },
  {
   "a": "Neil Dedhia",
   "b": "Taryn Seidner",
   "team": "Smash-holes!",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.5,
   "avgActual": 5.7,
   "avgExpected": 2.2,
   "aId": "20f3e907-41d8-40bb-8cef-cb6fed84a2aa",
   "bId": "2dd97210-f5b8-4645-b400-a2611539cca8"
  },
  {
   "a": "Belicia Hughes",
   "b": "Sarika Nadig",
   "team": "Smash-holes!",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 8.8,
   "avgExpected": 5.7,
   "aId": "0eda2ee3-2997-4519-ac1a-50c0da39145e",
   "bId": "f237825e-81d3-4c1a-a13a-e235413b1215"
  },
  {
   "a": "Zoe Zapf",
   "b": "Natalia Maciejewicz",
   "team": "Nets Gambit",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 1.5,
   "avgActual": 0.3,
   "avgExpected": -2.8,
   "aId": "d0f30788-f690-40db-8709-f1e485efc940",
   "bId": "ffd29340-40ba-4a85-a922-f93075d9b0df"
  },
  {
   "a": "Angelina Mogielnicki",
   "b": "Rakesh Roy",
   "team": "Hot Ballers!",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 6.8,
   "avgExpected": 4,
   "aId": "7ea83077-4e5c-4394-a1e1-d28c0607b925",
   "bId": "f54de088-2ac8-4b88-9b01-571fe28da246"
  },
  {
   "a": "Anthony Solares",
   "b": "Veronica Rosas",
   "team": "Nets Gambit",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 1.3,
   "avgActual": 7.2,
   "avgExpected": 4.8,
   "aId": "0adc78f0-0318-418d-bae1-f92d3ca5443d",
   "bId": "abab39fe-af60-4956-9f97-460189ab90dc"
  },
  {
   "a": "Gavin Jordan",
   "b": "Brandon Calmo",
   "team": "The Three-Fives",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 3.3,
   "avgExpected": 0.5,
   "aId": "04f601ae-9ac0-4f6a-8665-aa54e2a34fe9",
   "bId": "79a3d198-0295-4bed-b0d7-bcda477d6b3a"
  },
  {
   "a": "Danny Ruiz",
   "b": "John Sarinick",
   "team": "Hot Ballers!",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 1.2,
   "avgActual": 3.3,
   "avgExpected": 1.4,
   "aId": "cf86f914-08ca-4df6-9cdb-74a23afc2478",
   "bId": "ed26c838-1086-4f82-93a0-07e49ca65df9"
  },
  {
   "a": "Anthony Solares",
   "b": "Clarisse Espiritu",
   "team": "Nets Gambit",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 3.5,
   "avgExpected": 1,
   "aId": "0adc78f0-0318-418d-bae1-f92d3ca5443d",
   "bId": "dc1107ce-7076-4251-9bf3-b4a1ee5ac9a9"
  },
  {
   "a": "Christine Cardinal",
   "b": "Terri Pflueger",
   "team": "Smash-holes!",
   "n": 11,
   "w": 9,
   "l": 2,
   "synergy": 1.1,
   "avgActual": 5.9,
   "avgExpected": 4.4,
   "aId": "025d7701-550f-4828-9e24-d9718f998f22",
   "bId": "25ba9d21-49c3-4449-a120-1ba4a9621fb7"
  },
  {
   "a": "Aiden Murphy",
   "b": "Supriya Kothakonda",
   "team": "Nets Gambit",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 1.1,
   "avgActual": 0.3,
   "avgExpected": -1.5,
   "aId": "4d1c7d39-8ef1-47b7-b13a-5464c509380e",
   "bId": "cec94ca2-1b4a-4787-803a-b08ccdae1d18"
  },
  {
   "a": "Iqra Hasan-Calmo",
   "b": "Kyle Woerner",
   "team": "Hot Ballers!",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 6.7,
   "avgExpected": 4,
   "aId": "29c4170e-eb9f-400b-bc22-92f83e056e22",
   "bId": "49766802-f2c8-46aa-8ca1-e917160a60f0"
  },
  {
   "a": "Ellen Venezia",
   "b": "Danny Ruiz",
   "team": "Hot Ballers!",
   "n": 11,
   "w": 7,
   "l": 4,
   "synergy": 1.1,
   "avgActual": 1.2,
   "avgExpected": -0.3,
   "aId": "88f8dead-91f2-4d4e-b49f-8faed88b346b",
   "bId": "cf86f914-08ca-4df6-9cdb-74a23afc2478"
  },
  {
   "a": "Christine Cardinal",
   "b": "Robert Stoffers",
   "team": "Smash-holes!",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1,
   "avgActual": 4.6,
   "avgExpected": 2.9,
   "aId": "025d7701-550f-4828-9e24-d9718f998f22",
   "bId": "1934918c-d931-408e-a1e0-3ed291371f1b"
  },
  {
   "a": "Angelina Mogielnicki",
   "b": "Padma Gopi",
   "team": "Hot Ballers!",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1,
   "avgActual": 2.8,
   "avgExpected": 0.8,
   "aId": "7ea83077-4e5c-4394-a1e1-d28c0607b925",
   "bId": "b6d7b5a0-f05d-4ed5-ad11-a24c4a7e1ac4"
  },
  {
   "a": "Taryn Seidner",
   "b": "Ross Bienstock",
   "team": "Smash-holes!",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 1,
   "avgActual": 2.2,
   "avgExpected": 0.5,
   "aId": "2dd97210-f5b8-4645-b400-a2611539cca8",
   "bId": "4464f477-6545-4e8f-8893-af53a8eeefb5"
  },
  {
   "a": "Morgan Valencia King",
   "b": "Joshua Weinstein",
   "team": "Nets Gambit",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 1,
   "avgActual": -2,
   "avgExpected": -4.4,
   "aId": "ac049c23-359d-4508-8bc1-274a7276239c",
   "bId": "d70e2b4f-1076-4491-b0f2-5b96a328303b"
  },
  {
   "a": "Ben Cortes",
   "b": "Christina Rothman-Iliff",
   "team": "The Three-Fives",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 5.2,
   "avgExpected": 3.7,
   "aId": "4d89659f-a86c-4416-93f2-5c868fe0e984",
   "bId": "52221bc6-418a-45b2-9e92-5600b5a3040d"
  },
  {
   "a": "Aiden Murphy",
   "b": "Joshua Weinstein",
   "team": "Nets Gambit",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": 0.9,
   "avgActual": -1.8,
   "avgExpected": -3.4,
   "aId": "4d1c7d39-8ef1-47b7-b13a-5464c509380e",
   "bId": "d70e2b4f-1076-4491-b0f2-5b96a328303b"
  },
  {
   "a": "Ellen Venezia",
   "b": "Rakesh Roy",
   "team": "Hot Ballers!",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 0.9,
   "avgActual": 0.7,
   "avgExpected": -0.9,
   "aId": "88f8dead-91f2-4d4e-b49f-8faed88b346b",
   "bId": "f54de088-2ac8-4b88-9b01-571fe28da246"
  },
  {
   "a": "Alan Liang",
   "b": "Ben Cortes",
   "team": "The Three-Fives",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 5.3,
   "avgExpected": 3.3,
   "aId": "16fc789d-f84a-487b-98f0-ed9db5478bb7",
   "bId": "4d89659f-a86c-4416-93f2-5c868fe0e984"
  },
  {
   "a": "Ola Cauble",
   "b": "Brianna Zenna",
   "team": "The Three-Fives",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 2,
   "avgExpected": -0.1,
   "aId": "5e34ba87-6778-4079-8ca1-c4ee044314cc",
   "bId": "9d4be34a-de39-4590-991b-65f92f947482"
  },
  {
   "a": "Iqra Hasan-Calmo",
   "b": "Padma Gopi",
   "team": "Hot Ballers!",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 3.3,
   "avgExpected": 1.4,
   "aId": "29c4170e-eb9f-400b-bc22-92f83e056e22",
   "bId": "b6d7b5a0-f05d-4ed5-ad11-a24c4a7e1ac4"
  },
  {
   "a": "Kyle Woerner",
   "b": "Rakesh Roy",
   "team": "Hot Ballers!",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.8,
   "avgActual": 9.5,
   "avgExpected": 8,
   "aId": "49766802-f2c8-46aa-8ca1-e917160a60f0",
   "bId": "f54de088-2ac8-4b88-9b01-571fe28da246"
  },
  {
   "a": "Taryn Seidner",
   "b": "William Covino",
   "team": "Smash-holes!",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.8,
   "avgActual": 8.3,
   "avgExpected": 6.5,
   "aId": "2dd97210-f5b8-4645-b400-a2611539cca8",
   "bId": "efc60243-f47d-44bd-aaeb-9c80d2186762"
  },
  {
   "a": "Anthony Solares",
   "b": "Sue Caputo",
   "team": "Nets Gambit",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 3.7,
   "avgExpected": 1.7,
   "aId": "0adc78f0-0318-418d-bae1-f92d3ca5443d",
   "bId": "39c42fdb-bb35-458b-9460-b60d8fa5fcdb"
  },
  {
   "a": "Juan Uribe",
   "b": "Aj Donnelly",
   "team": "Nets Gambit",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.7,
   "avgActual": -8.7,
   "avgExpected": -10.2,
   "aId": "7cf43262-2d33-4f82-afba-bf0294000c56",
   "bId": "f7291419-bff5-4195-9c1e-78bad893b11d"
  },
  {
   "a": "Ethan Macedo",
   "b": "Anna Arcaro",
   "team": "The Three-Fives",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.7,
   "avgActual": -3.2,
   "avgExpected": -4.7,
   "aId": "b111ee21-3b4d-45f3-ab01-cff1cb57b5a5",
   "bId": "c0c21535-f157-4c5c-9c5d-d3a66ed4b10b"
  },
  {
   "a": "Christine Cardinal",
   "b": "Edwin Garcia",
   "team": "Smash-holes!",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 4.5,
   "avgExpected": 3.6,
   "aId": "025d7701-550f-4828-9e24-d9718f998f22",
   "bId": "a4310f70-ee30-4e55-b189-2efd837b7189"
  },
  {
   "a": "Luis Guzman",
   "b": "Ellen Venezia",
   "team": "Hot Ballers!",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.6,
   "avgActual": -0.8,
   "avgExpected": -1.8,
   "aId": "10eba8b1-6e12-4d4b-994c-8bc62f617909",
   "bId": "88f8dead-91f2-4d4e-b49f-8faed88b346b"
  },
  {
   "a": "Ross Bienstock",
   "b": "Sarika Nadig",
   "team": "Smash-holes!",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 3.6,
   "avgExpected": 2.9,
   "aId": "4464f477-6545-4e8f-8893-af53a8eeefb5",
   "bId": "f237825e-81d3-4c1a-a13a-e235413b1215"
  },
  {
   "a": "Rebecca Ramos",
   "b": "Supriya Kothakonda",
   "team": "Nets Gambit",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 2.3,
   "avgExpected": 1.3,
   "aId": "91fa0505-9e84-4deb-b11a-a42e6c55696c",
   "bId": "cec94ca2-1b4a-4787-803a-b08ccdae1d18"
  },
  {
   "a": "Susan Bluni",
   "b": "Kevin Emig",
   "team": "The Three-Fives",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 1.3,
   "avgExpected": 0.4,
   "aId": "0a1213eb-97d7-475b-a8d3-bc1828c31027",
   "bId": "dec0f121-8df3-42f4-ac65-2e8d2b676a0e"
  },
  {
   "a": "Robert Stoffers",
   "b": "Neil Dedhia",
   "team": "Smash-holes!",
   "n": 8,
   "w": 3,
   "l": 5,
   "synergy": 0.4,
   "avgActual": 0.1,
   "avgExpected": -0.5,
   "aId": "1934918c-d931-408e-a1e0-3ed291371f1b",
   "bId": "20f3e907-41d8-40bb-8cef-cb6fed84a2aa"
  },
  {
   "a": "Angelina Mogielnicki",
   "b": "Danny Ruiz",
   "team": "Hot Ballers!",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 0.3,
   "avgExpected": -0.6,
   "aId": "7ea83077-4e5c-4394-a1e1-d28c0607b925",
   "bId": "cf86f914-08ca-4df6-9cdb-74a23afc2478"
  },
  {
   "a": "Belicia Hughes",
   "b": "Neil Dedhia",
   "team": "Smash-holes!",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.4,
   "avgActual": -1,
   "avgExpected": -1.9,
   "aId": "0eda2ee3-2997-4519-ac1a-50c0da39145e",
   "bId": "20f3e907-41d8-40bb-8cef-cb6fed84a2aa"
  },
  {
   "a": "Edwin Garcia",
   "b": "Sarika Nadig",
   "team": "Smash-holes!",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 6,
   "avgExpected": 5.2,
   "aId": "a4310f70-ee30-4e55-b189-2efd837b7189",
   "bId": "f237825e-81d3-4c1a-a13a-e235413b1215"
  },
  {
   "a": "Mason Jordan",
   "b": "Aiden Murphy",
   "team": "Nets Gambit",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 0.3,
   "avgExpected": -0.5,
   "aId": "0aaad47b-2fee-4602-9689-1a866cb31119",
   "bId": "4d1c7d39-8ef1-47b7-b13a-5464c509380e"
  },
  {
   "a": "Terri Pflueger",
   "b": "Taryn Seidner",
   "team": "Smash-holes!",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 1.2,
   "avgExpected": 0.4,
   "aId": "25ba9d21-49c3-4449-a120-1ba4a9621fb7",
   "bId": "2dd97210-f5b8-4645-b400-a2611539cca8"
  },
  {
   "a": "John Sarinick",
   "b": "Rakesh Roy",
   "team": "Hot Ballers!",
   "n": 8,
   "w": 7,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 7,
   "avgExpected": 6.5,
   "aId": "ed26c838-1086-4f82-93a0-07e49ca65df9",
   "bId": "f54de088-2ac8-4b88-9b01-571fe28da246"
  },
  {
   "a": "Juan Uribe",
   "b": "Natalia Maciejewicz",
   "team": "Nets Gambit",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 0.3,
   "avgActual": -7.7,
   "avgExpected": -8.3,
   "aId": "7cf43262-2d33-4f82-afba-bf0294000c56",
   "bId": "ffd29340-40ba-4a85-a922-f93075d9b0df"
  },
  {
   "a": "Terri Pflueger",
   "b": "William Covino",
   "team": "Smash-holes!",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 2.8,
   "avgExpected": 2.2,
   "aId": "25ba9d21-49c3-4449-a120-1ba4a9621fb7",
   "bId": "efc60243-f47d-44bd-aaeb-9c80d2186762"
  },
  {
   "a": "Neil Dedhia",
   "b": "William Covino",
   "team": "Smash-holes!",
   "n": 9,
   "w": 6,
   "l": 3,
   "synergy": 0.2,
   "avgActual": 3.3,
   "avgExpected": 3,
   "aId": "20f3e907-41d8-40bb-8cef-cb6fed84a2aa",
   "bId": "efc60243-f47d-44bd-aaeb-9c80d2186762"
  },
  {
   "a": "Neil Dedhia",
   "b": "Sarika Nadig",
   "team": "Smash-holes!",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 4.4,
   "avgExpected": 4,
   "aId": "20f3e907-41d8-40bb-8cef-cb6fed84a2aa",
   "bId": "f237825e-81d3-4c1a-a13a-e235413b1215"
  },
  {
   "a": "David Armento",
   "b": "Katie O'Mara",
   "team": "Hot Ballers!",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": 0.2,
   "avgActual": -0.6,
   "avgExpected": -0.8,
   "aId": "4c4e430e-8a0f-462b-a5da-daa1b89ca96f",
   "bId": "99913860-615f-4516-8868-f83a2c029221"
  },
  {
   "a": "Christine Cardinal",
   "b": "William Covino",
   "team": "Smash-holes!",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.2,
   "avgActual": 2.4,
   "avgExpected": 2.1,
   "aId": "025d7701-550f-4828-9e24-d9718f998f22",
   "bId": "efc60243-f47d-44bd-aaeb-9c80d2186762"
  },
  {
   "a": "Robert Stoffers",
   "b": "Taryn Seidner",
   "team": "Smash-holes!",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 0.2,
   "avgActual": 4.2,
   "avgExpected": 3.8,
   "aId": "1934918c-d931-408e-a1e0-3ed291371f1b",
   "bId": "2dd97210-f5b8-4645-b400-a2611539cca8"
  },
  {
   "a": "Robert Stoffers",
   "b": "Ross Bienstock",
   "team": "Smash-holes!",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 0.1,
   "avgActual": -1.2,
   "avgExpected": -1.3,
   "aId": "1934918c-d931-408e-a1e0-3ed291371f1b",
   "bId": "4464f477-6545-4e8f-8893-af53a8eeefb5"
  },
  {
   "a": "Anthony Solares",
   "b": "Aiden Murphy",
   "team": "Nets Gambit",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.1,
   "avgActual": -0.3,
   "avgExpected": -0.6,
   "aId": "0adc78f0-0318-418d-bae1-f92d3ca5443d",
   "bId": "4d1c7d39-8ef1-47b7-b13a-5464c509380e"
  },
  {
   "a": "Katie O'Mara",
   "b": "Rakesh Roy",
   "team": "Hot Ballers!",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 3,
   "avgExpected": 2.9,
   "aId": "99913860-615f-4516-8868-f83a2c029221",
   "bId": "f54de088-2ac8-4b88-9b01-571fe28da246"
  },
  {
   "a": "Veronica Rosas",
   "b": "Morgan Valencia King",
   "team": "Nets Gambit",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": 0.1,
   "avgActual": -0.6,
   "avgExpected": -0.7,
   "aId": "abab39fe-af60-4956-9f97-460189ab90dc",
   "bId": "ac049c23-359d-4508-8bc1-274a7276239c"
  },
  {
   "a": "Anna Arcaro",
   "b": "Shekhar Bansal",
   "team": "The Three-Fives",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.1,
   "avgActual": -1.7,
   "avgExpected": -1.9,
   "aId": "c0c21535-f157-4c5c-9c5d-d3a66ed4b10b",
   "bId": "f44c50e6-af45-41d5-9439-1e1cbf9b67f1"
  },
  {
   "a": "Christina Rothman-Iliff",
   "b": "Danielle Kuti",
   "team": "The Three-Fives",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 0.1,
   "avgActual": 3.4,
   "avgExpected": 3.2,
   "aId": "52221bc6-418a-45b2-9e92-5600b5a3040d",
   "bId": "c3902bc0-35a6-490d-9909-6f19b1224b99"
  },
  {
   "a": "Kyle Woerner",
   "b": "Katie O'Mara",
   "team": "Hot Ballers!",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 1,
   "avgExpected": 0.8,
   "aId": "49766802-f2c8-46aa-8ca1-e917160a60f0",
   "bId": "99913860-615f-4516-8868-f83a2c029221"
  },
  {
   "a": "Christina Rothman-Iliff",
   "b": "Brandon Calmo",
   "team": "The Three-Fives",
   "n": 12,
   "w": 11,
   "l": 1,
   "synergy": 0,
   "avgActual": 3.9,
   "avgExpected": 3.9,
   "aId": "52221bc6-418a-45b2-9e92-5600b5a3040d",
   "bId": "79a3d198-0295-4bed-b0d7-bcda477d6b3a"
  },
  {
   "a": "Alan Liang",
   "b": "Brianna Zenna",
   "team": "The Three-Fives",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0,
   "avgActual": 5,
   "avgExpected": 5.1,
   "aId": "16fc789d-f84a-487b-98f0-ed9db5478bb7",
   "bId": "9d4be34a-de39-4590-991b-65f92f947482"
  },
  {
   "a": "Robert Stoffers",
   "b": "Edwin Garcia",
   "team": "Smash-holes!",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0,
   "avgActual": -2.2,
   "avgExpected": -2.1,
   "aId": "1934918c-d931-408e-a1e0-3ed291371f1b",
   "bId": "a4310f70-ee30-4e55-b189-2efd837b7189"
  },
  {
   "a": "Aiden Murphy",
   "b": "Nina Donnelly",
   "team": "Nets Gambit",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0,
   "avgActual": -4.2,
   "avgExpected": -4.2,
   "aId": "4d1c7d39-8ef1-47b7-b13a-5464c509380e",
   "bId": "fd9de335-6ef4-48c0-82ac-c1e618f5f062"
  },
  {
   "a": "Robert Stoffers",
   "b": "Sarika Nadig",
   "team": "Smash-holes!",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 0,
   "avgActual": 4.1,
   "avgExpected": 4.2,
   "aId": "1934918c-d931-408e-a1e0-3ed291371f1b",
   "bId": "f237825e-81d3-4c1a-a13a-e235413b1215"
  },
  {
   "a": "Katie O'Mara",
   "b": "John Sarinick",
   "team": "Hot Ballers!",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0,
   "avgActual": 3.6,
   "avgExpected": 3.6,
   "aId": "99913860-615f-4516-8868-f83a2c029221",
   "bId": "ed26c838-1086-4f82-93a0-07e49ca65df9"
  },
  {
   "a": "Ellen Venezia",
   "b": "Katie O'Mara",
   "team": "Hot Ballers!",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0,
   "avgActual": -1,
   "avgExpected": -1.1,
   "aId": "88f8dead-91f2-4d4e-b49f-8faed88b346b",
   "bId": "99913860-615f-4516-8868-f83a2c029221"
  },
  {
   "a": "Anthony Solares",
   "b": "Morgan Valencia King",
   "team": "Nets Gambit",
   "n": 8,
   "w": 2,
   "l": 6,
   "synergy": 0,
   "avgActual": -1.5,
   "avgExpected": -1.5,
   "aId": "0adc78f0-0318-418d-bae1-f92d3ca5443d",
   "bId": "ac049c23-359d-4508-8bc1-274a7276239c"
  },
  {
   "a": "Zoe Zapf",
   "b": "Aj Donnelly",
   "team": "Nets Gambit",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0,
   "avgActual": -3.7,
   "avgExpected": -3.6,
   "aId": "d0f30788-f690-40db-8709-f1e485efc940",
   "bId": "f7291419-bff5-4195-9c1e-78bad893b11d"
  },
  {
   "a": "Veronica Rosas",
   "b": "Aj Donnelly",
   "team": "Nets Gambit",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0,
   "avgActual": -1,
   "avgExpected": -0.9,
   "aId": "abab39fe-af60-4956-9f97-460189ab90dc",
   "bId": "f7291419-bff5-4195-9c1e-78bad893b11d"
  },
  {
   "a": "Angelina Mogielnicki",
   "b": "Ellen Venezia",
   "team": "Hot Ballers!",
   "n": 9,
   "w": 3,
   "l": 6,
   "synergy": -0.1,
   "avgActual": -1.4,
   "avgExpected": -1.3,
   "aId": "7ea83077-4e5c-4394-a1e1-d28c0607b925",
   "bId": "88f8dead-91f2-4d4e-b49f-8faed88b346b"
  },
  {
   "a": "Gavin Jordan",
   "b": "Brianna Zenna",
   "team": "The Three-Fives",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 2.3,
   "avgExpected": 2.8,
   "aId": "04f601ae-9ac0-4f6a-8665-aa54e2a34fe9",
   "bId": "9d4be34a-de39-4590-991b-65f92f947482"
  },
  {
   "a": "Anthony Solares",
   "b": "Aj Donnelly",
   "team": "Nets Gambit",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.2,
   "avgActual": 0.2,
   "avgExpected": 0.6,
   "aId": "0adc78f0-0318-418d-bae1-f92d3ca5443d",
   "bId": "f7291419-bff5-4195-9c1e-78bad893b11d"
  },
  {
   "a": "Ross Bienstock",
   "b": "Edwin Garcia",
   "team": "Smash-holes!",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": -0.2,
   "avgActual": 4.8,
   "avgExpected": 5.1,
   "aId": "4464f477-6545-4e8f-8893-af53a8eeefb5",
   "bId": "a4310f70-ee30-4e55-b189-2efd837b7189"
  },
  {
   "a": "Belicia Hughes",
   "b": "Robert Stoffers",
   "team": "Smash-holes!",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.2,
   "avgActual": -1.7,
   "avgExpected": -1.2,
   "aId": "0eda2ee3-2997-4519-ac1a-50c0da39145e",
   "bId": "1934918c-d931-408e-a1e0-3ed291371f1b"
  },
  {
   "a": "Iqra Hasan-Calmo",
   "b": "Katie O'Mara",
   "team": "Hot Ballers!",
   "n": 12,
   "w": 4,
   "l": 8,
   "synergy": -0.2,
   "avgActual": -3.9,
   "avgExpected": -3.7,
   "aId": "29c4170e-eb9f-400b-bc22-92f83e056e22",
   "bId": "99913860-615f-4516-8868-f83a2c029221"
  },
  {
   "a": "Sue Caputo",
   "b": "Veronica Rosas",
   "team": "Nets Gambit",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": -0.2,
   "avgActual": 2.5,
   "avgExpected": 3,
   "aId": "39c42fdb-bb35-458b-9460-b60d8fa5fcdb",
   "bId": "abab39fe-af60-4956-9f97-460189ab90dc"
  },
  {
   "a": "Ben Cortes",
   "b": "Kevin Emig",
   "team": "The Three-Fives",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.3,
   "avgActual": -0.5,
   "avgExpected": 0.2,
   "aId": "4d89659f-a86c-4416-93f2-5c868fe0e984",
   "bId": "dec0f121-8df3-42f4-ac65-2e8d2b676a0e"
  },
  {
   "a": "Iqra Hasan-Calmo",
   "b": "Ellen Venezia",
   "team": "Hot Ballers!",
   "n": 11,
   "w": 3,
   "l": 8,
   "synergy": -0.3,
   "avgActual": -3.1,
   "avgExpected": -2.7,
   "aId": "29c4170e-eb9f-400b-bc22-92f83e056e22",
   "bId": "88f8dead-91f2-4d4e-b49f-8faed88b346b"
  },
  {
   "a": "Luis Guzman",
   "b": "Danny Ruiz",
   "team": "Hot Ballers!",
   "n": 9,
   "w": 5,
   "l": 4,
   "synergy": -0.3,
   "avgActual": -0.1,
   "avgExpected": 0.4,
   "aId": "10eba8b1-6e12-4d4b-994c-8bc62f617909",
   "bId": "cf86f914-08ca-4df6-9cdb-74a23afc2478"
  },
  {
   "a": "Kyle Woerner",
   "b": "Padma Gopi",
   "team": "Hot Ballers!",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.3,
   "avgActual": -1,
   "avgExpected": -0.3,
   "aId": "49766802-f2c8-46aa-8ca1-e917160a60f0",
   "bId": "b6d7b5a0-f05d-4ed5-ad11-a24c4a7e1ac4"
  },
  {
   "a": "Susan Bluni",
   "b": "Christina Rothman-Iliff",
   "team": "The Three-Fives",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.3,
   "avgActual": 0.5,
   "avgExpected": 1.2,
   "aId": "0a1213eb-97d7-475b-a8d3-bc1828c31027",
   "bId": "52221bc6-418a-45b2-9e92-5600b5a3040d"
  },
  {
   "a": "Ben Cortes",
   "b": "Brandon Calmo",
   "team": "The Three-Fives",
   "n": 11,
   "w": 7,
   "l": 4,
   "synergy": -0.4,
   "avgActual": 1.6,
   "avgExpected": 2.2,
   "aId": "4d89659f-a86c-4416-93f2-5c868fe0e984",
   "bId": "79a3d198-0295-4bed-b0d7-bcda477d6b3a"
  },
  {
   "a": "Juan Uribe",
   "b": "Joshua Weinstein",
   "team": "Nets Gambit",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.4,
   "avgActual": -9.7,
   "avgExpected": -8.9,
   "aId": "7cf43262-2d33-4f82-afba-bf0294000c56",
   "bId": "d70e2b4f-1076-4491-b0f2-5b96a328303b"
  },
  {
   "a": "Veronica Rosas",
   "b": "Supriya Kothakonda",
   "team": "Nets Gambit",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.4,
   "avgActual": 0.8,
   "avgExpected": 1.5,
   "aId": "abab39fe-af60-4956-9f97-460189ab90dc",
   "bId": "cec94ca2-1b4a-4787-803a-b08ccdae1d18"
  },
  {
   "a": "Christine Cardinal",
   "b": "Sarika Nadig",
   "team": "Smash-holes!",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": -0.4,
   "avgActual": 7.5,
   "avgExpected": 8.1,
   "aId": "025d7701-550f-4828-9e24-d9718f998f22",
   "bId": "f237825e-81d3-4c1a-a13a-e235413b1215"
  },
  {
   "a": "Susan Bluni",
   "b": "Brianna Zenna",
   "team": "The Three-Fives",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -3.7,
   "avgExpected": -2.5,
   "aId": "0a1213eb-97d7-475b-a8d3-bc1828c31027",
   "bId": "9d4be34a-de39-4590-991b-65f92f947482"
  },
  {
   "a": "Terri Pflueger",
   "b": "Edwin Garcia",
   "team": "Smash-holes!",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.5,
   "avgActual": 1,
   "avgExpected": 2.2,
   "aId": "25ba9d21-49c3-4449-a120-1ba4a9621fb7",
   "bId": "a4310f70-ee30-4e55-b189-2efd837b7189"
  },
  {
   "a": "Luis Guzman",
   "b": "Kyle Woerner",
   "team": "Hot Ballers!",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": -0.5,
   "avgActual": 0.6,
   "avgExpected": 1.4,
   "aId": "10eba8b1-6e12-4d4b-994c-8bc62f617909",
   "bId": "49766802-f2c8-46aa-8ca1-e917160a60f0"
  },
  {
   "a": "Ellen Venezia",
   "b": "John Sarinick",
   "team": "Hot Ballers!",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -2,
   "avgExpected": -0.7,
   "aId": "88f8dead-91f2-4d4e-b49f-8faed88b346b",
   "bId": "ed26c838-1086-4f82-93a0-07e49ca65df9"
  },
  {
   "a": "Mason Jordan",
   "b": "Natalia Maciejewicz",
   "team": "Nets Gambit",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -6,
   "avgExpected": -4.9,
   "aId": "0aaad47b-2fee-4602-9689-1a866cb31119",
   "bId": "ffd29340-40ba-4a85-a922-f93075d9b0df"
  },
  {
   "a": "Iqra Hasan-Calmo",
   "b": "John Sarinick",
   "team": "Hot Ballers!",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.5,
   "avgActual": 0.2,
   "avgExpected": 1.2,
   "aId": "29c4170e-eb9f-400b-bc22-92f83e056e22",
   "bId": "ed26c838-1086-4f82-93a0-07e49ca65df9"
  },
  {
   "a": "Ola Cauble",
   "b": "Anna Arcaro",
   "team": "The Three-Fives",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -2.5,
   "avgExpected": -1.4,
   "aId": "5e34ba87-6778-4079-8ca1-c4ee044314cc",
   "bId": "c0c21535-f157-4c5c-9c5d-d3a66ed4b10b"
  },
  {
   "a": "Neil Dedhia",
   "b": "Edwin Garcia",
   "team": "Smash-holes!",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -3,
   "avgExpected": -1.7,
   "aId": "20f3e907-41d8-40bb-8cef-cb6fed84a2aa",
   "bId": "a4310f70-ee30-4e55-b189-2efd837b7189"
  },
  {
   "a": "Terri Pflueger",
   "b": "Elsie Garcia",
   "team": "Smash-holes!",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -2.7,
   "avgExpected": -1.2,
   "aId": "25ba9d21-49c3-4449-a120-1ba4a9621fb7",
   "bId": "5e086f9d-8026-4ba1-8a9a-f67aa0ce78dd"
  },
  {
   "a": "Christine Cardinal",
   "b": "Neil Dedhia",
   "team": "Smash-holes!",
   "n": 11,
   "w": 6,
   "l": 5,
   "synergy": -0.6,
   "avgActual": 1.3,
   "avgExpected": 2.1,
   "aId": "025d7701-550f-4828-9e24-d9718f998f22",
   "bId": "20f3e907-41d8-40bb-8cef-cb6fed84a2aa"
  },
  {
   "a": "Anthony Solares",
   "b": "Natalia Maciejewicz",
   "team": "Nets Gambit",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -1.2,
   "avgExpected": -0.1,
   "aId": "0adc78f0-0318-418d-bae1-f92d3ca5443d",
   "bId": "ffd29340-40ba-4a85-a922-f93075d9b0df"
  },
  {
   "a": "Luis Guzman",
   "b": "Angelina Mogielnicki",
   "team": "Hot Ballers!",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.6,
   "avgActual": 0,
   "avgExpected": 1.4,
   "aId": "10eba8b1-6e12-4d4b-994c-8bc62f617909",
   "bId": "7ea83077-4e5c-4394-a1e1-d28c0607b925"
  },
  {
   "a": "Taryn Seidner",
   "b": "Elsie Garcia",
   "team": "Smash-holes!",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -0.7,
   "avgExpected": 0.5,
   "aId": "2dd97210-f5b8-4645-b400-a2611539cca8",
   "bId": "5e086f9d-8026-4ba1-8a9a-f67aa0ce78dd"
  },
  {
   "a": "Supriya Kothakonda",
   "b": "Joshua Weinstein",
   "team": "Nets Gambit",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -1,
   "avgExpected": 0.1,
   "aId": "cec94ca2-1b4a-4787-803a-b08ccdae1d18",
   "bId": "d70e2b4f-1076-4491-b0f2-5b96a328303b"
  },
  {
   "a": "Aiden Murphy",
   "b": "Aj Donnelly",
   "team": "Nets Gambit",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -6,
   "avgExpected": -4.6,
   "aId": "4d1c7d39-8ef1-47b7-b13a-5464c509380e",
   "bId": "f7291419-bff5-4195-9c1e-78bad893b11d"
  },
  {
   "a": "Taryn Seidner",
   "b": "Sarika Nadig",
   "team": "Smash-holes!",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": -0.7,
   "avgActual": 2.9,
   "avgExpected": 4,
   "aId": "2dd97210-f5b8-4645-b400-a2611539cca8",
   "bId": "f237825e-81d3-4c1a-a13a-e235413b1215"
  },
  {
   "a": "Christine Cardinal",
   "b": "Taryn Seidner",
   "team": "Smash-holes!",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.7,
   "avgActual": 0.8,
   "avgExpected": 2.3,
   "aId": "025d7701-550f-4828-9e24-d9718f998f22",
   "bId": "2dd97210-f5b8-4645-b400-a2611539cca8"
  },
  {
   "a": "Ethan Macedo",
   "b": "Shekhar Bansal",
   "team": "The Three-Fives",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -3.7,
   "avgExpected": -2.3,
   "aId": "b111ee21-3b4d-45f3-ab01-cff1cb57b5a5",
   "bId": "f44c50e6-af45-41d5-9439-1e1cbf9b67f1"
  },
  {
   "a": "Ethan Macedo",
   "b": "Danielle Kuti",
   "team": "The Three-Fives",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.7,
   "avgActual": -4.2,
   "avgExpected": -2.9,
   "aId": "b111ee21-3b4d-45f3-ab01-cff1cb57b5a5",
   "bId": "c3902bc0-35a6-490d-9909-6f19b1224b99"
  },
  {
   "a": "Brandon Calmo",
   "b": "Kevin Emig",
   "team": "The Three-Fives",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -0.2,
   "avgExpected": 1.2,
   "aId": "79a3d198-0295-4bed-b0d7-bcda477d6b3a",
   "bId": "dec0f121-8df3-42f4-ac65-2e8d2b676a0e"
  },
  {
   "a": "Anna Arcaro",
   "b": "Kevin Emig",
   "team": "The Three-Fives",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -7,
   "avgExpected": -5.2,
   "aId": "c0c21535-f157-4c5c-9c5d-d3a66ed4b10b",
   "bId": "dec0f121-8df3-42f4-ac65-2e8d2b676a0e"
  },
  {
   "a": "Nina Donnelly",
   "b": "Natalia Maciejewicz",
   "team": "Nets Gambit",
   "n": 6,
   "w": 0,
   "l": 6,
   "synergy": -0.8,
   "avgActual": -6.8,
   "avgExpected": -5.5,
   "aId": "fd9de335-6ef4-48c0-82ac-c1e618f5f062",
   "bId": "ffd29340-40ba-4a85-a922-f93075d9b0df"
  },
  {
   "a": "Robert Stoffers",
   "b": "William Covino",
   "team": "Smash-holes!",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": -0.8,
   "avgActual": 1.9,
   "avgExpected": 3.1,
   "aId": "1934918c-d931-408e-a1e0-3ed291371f1b",
   "bId": "efc60243-f47d-44bd-aaeb-9c80d2186762"
  },
  {
   "a": "Morgan Valencia King",
   "b": "Aj Donnelly",
   "team": "Nets Gambit",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.8,
   "avgActual": -8,
   "avgExpected": -6.4,
   "aId": "ac049c23-359d-4508-8bc1-274a7276239c",
   "bId": "f7291419-bff5-4195-9c1e-78bad893b11d"
  },
  {
   "a": "Juan Uribe",
   "b": "Nina Donnelly",
   "team": "Nets Gambit",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -7.3,
   "avgExpected": -5.4,
   "aId": "7cf43262-2d33-4f82-afba-bf0294000c56",
   "bId": "fd9de335-6ef4-48c0-82ac-c1e618f5f062"
  },
  {
   "a": "Robert Stoffers",
   "b": "Elsie Garcia",
   "team": "Smash-holes!",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.9,
   "avgActual": -4,
   "avgExpected": -2.2,
   "aId": "1934918c-d931-408e-a1e0-3ed291371f1b",
   "bId": "5e086f9d-8026-4ba1-8a9a-f67aa0ce78dd"
  },
  {
   "a": "Susan Bluni",
   "b": "Anna Arcaro",
   "team": "The Three-Fives",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.9,
   "avgActual": -8.8,
   "avgExpected": -7.1,
   "aId": "0a1213eb-97d7-475b-a8d3-bc1828c31027",
   "bId": "c0c21535-f157-4c5c-9c5d-d3a66ed4b10b"
  },
  {
   "a": "Anthony Solares",
   "b": "Nina Donnelly",
   "team": "Nets Gambit",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.9,
   "avgActual": -2,
   "avgExpected": -0.5,
   "aId": "0adc78f0-0318-418d-bae1-f92d3ca5443d",
   "bId": "fd9de335-6ef4-48c0-82ac-c1e618f5f062"
  },
  {
   "a": "Neil Dedhia",
   "b": "Terri Pflueger",
   "team": "Smash-holes!",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -1,
   "avgActual": -0.6,
   "avgExpected": 1.1,
   "aId": "20f3e907-41d8-40bb-8cef-cb6fed84a2aa",
   "bId": "25ba9d21-49c3-4449-a120-1ba4a9621fb7"
  },
  {
   "a": "Derek Halili",
   "b": "Ross Bienstock",
   "team": "Smash-holes!",
   "n": 6,
   "w": 0,
   "l": 6,
   "synergy": -1,
   "avgActual": -9.2,
   "avgExpected": -7.5,
   "aId": "41124e68-c4a1-4aa5-b76f-f14acd23999d",
   "bId": "4464f477-6545-4e8f-8893-af53a8eeefb5"
  },
  {
   "a": "Alan Liang",
   "b": "Christina Rothman-Iliff",
   "team": "The Three-Fives",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -1.1,
   "avgActual": 5.2,
   "avgExpected": 7.3,
   "aId": "16fc789d-f84a-487b-98f0-ed9db5478bb7",
   "bId": "52221bc6-418a-45b2-9e92-5600b5a3040d"
  },
  {
   "a": "Iqra Hasan-Calmo",
   "b": "Rakesh Roy",
   "team": "Hot Ballers!",
   "n": 9,
   "w": 3,
   "l": 6,
   "synergy": -1.1,
   "avgActual": 0.1,
   "avgExpected": 1.8,
   "aId": "29c4170e-eb9f-400b-bc22-92f83e056e22",
   "bId": "f54de088-2ac8-4b88-9b01-571fe28da246"
  },
  {
   "a": "Gavin Jordan",
   "b": "Ben Cortes",
   "team": "The Three-Fives",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.1,
   "avgActual": -3,
   "avgExpected": -0.3,
   "aId": "04f601ae-9ac0-4f6a-8665-aa54e2a34fe9",
   "bId": "4d89659f-a86c-4416-93f2-5c868fe0e984"
  },
  {
   "a": "Terri Pflueger",
   "b": "Sarika Nadig",
   "team": "Smash-holes!",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -1.1,
   "avgActual": 2,
   "avgExpected": 3.9,
   "aId": "25ba9d21-49c3-4449-a120-1ba4a9621fb7",
   "bId": "f237825e-81d3-4c1a-a13a-e235413b1215"
  },
  {
   "a": "Angelina Mogielnicki",
   "b": "Katie O'Mara",
   "team": "Hot Ballers!",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -1.1,
   "avgActual": -5.3,
   "avgExpected": -3.5,
   "aId": "7ea83077-4e5c-4394-a1e1-d28c0607b925",
   "bId": "99913860-615f-4516-8868-f83a2c029221"
  },
  {
   "a": "Ross Bienstock",
   "b": "William Covino",
   "team": "Smash-holes!",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1.2,
   "avgActual": 0,
   "avgExpected": 2.9,
   "aId": "4464f477-6545-4e8f-8893-af53a8eeefb5",
   "bId": "efc60243-f47d-44bd-aaeb-9c80d2186762"
  },
  {
   "a": "Brandon Calmo",
   "b": "Brianna Zenna",
   "team": "The Three-Fives",
   "n": 9,
   "w": 5,
   "l": 4,
   "synergy": -1.2,
   "avgActual": -1,
   "avgExpected": 0.8,
   "aId": "79a3d198-0295-4bed-b0d7-bcda477d6b3a",
   "bId": "9d4be34a-de39-4590-991b-65f92f947482"
  },
  {
   "a": "Danielle Kuti",
   "b": "Kevin Emig",
   "team": "The Three-Fives",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -1.2,
   "avgActual": -3.4,
   "avgExpected": -1.3,
   "aId": "c3902bc0-35a6-490d-9909-6f19b1224b99",
   "bId": "dec0f121-8df3-42f4-ac65-2e8d2b676a0e"
  },
  {
   "a": "Aiden Murphy",
   "b": "Juan Uribe",
   "team": "Nets Gambit",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.2,
   "avgActual": -9,
   "avgExpected": -6.7,
   "aId": "4d1c7d39-8ef1-47b7-b13a-5464c509380e",
   "bId": "7cf43262-2d33-4f82-afba-bf0294000c56"
  },
  {
   "a": "Ben Cortes",
   "b": "Brianna Zenna",
   "team": "The Three-Fives",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": -1.3,
   "avgActual": -1.4,
   "avgExpected": 0.6,
   "aId": "4d89659f-a86c-4416-93f2-5c868fe0e984",
   "bId": "9d4be34a-de39-4590-991b-65f92f947482"
  },
  {
   "a": "Danny Ruiz",
   "b": "Rakesh Roy",
   "team": "Hot Ballers!",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": -1.3,
   "avgActual": 0.1,
   "avgExpected": 2.2,
   "aId": "cf86f914-08ca-4df6-9cdb-74a23afc2478",
   "bId": "f54de088-2ac8-4b88-9b01-571fe28da246"
  },
  {
   "a": "Kyle Woerner",
   "b": "Angelina Mogielnicki",
   "team": "Hot Ballers!",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -1.3,
   "avgActual": -3.3,
   "avgExpected": -1.1,
   "aId": "49766802-f2c8-46aa-8ca1-e917160a60f0",
   "bId": "7ea83077-4e5c-4394-a1e1-d28c0607b925"
  },
  {
   "a": "Anna Arcaro",
   "b": "Danielle Kuti",
   "team": "The Three-Fives",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.3,
   "avgActual": -4.3,
   "avgExpected": -1.2,
   "aId": "c0c21535-f157-4c5c-9c5d-d3a66ed4b10b",
   "bId": "c3902bc0-35a6-490d-9909-6f19b1224b99"
  },
  {
   "a": "Juan Uribe",
   "b": "Supriya Kothakonda",
   "team": "Nets Gambit",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.8,
   "avgActual": -6,
   "avgExpected": -2.4,
   "aId": "7cf43262-2d33-4f82-afba-bf0294000c56",
   "bId": "cec94ca2-1b4a-4787-803a-b08ccdae1d18"
  }
 ],
 "matches": [
  {
   "result": "away",
   "week": 1,
   "home": "Smash-holes!",
   "away": "The Three-Fives",
   "time": "2026-07-01T19:30:00",
   "complete": true,
   "homePoints": 559,
   "awayPoints": 599,
   "homeGW": 13,
   "awayGW": 19,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Christine Cardinal",
      "Edwin Garcia"
     ],
     "a": [
      "Anna Arcaro",
      "Ben Cortes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Terri Pflueger",
      "Neil Dedhia"
     ],
     "a": [
      "Christina Rothman-Iliff",
      "Brandon Calmo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Elsie Garcia",
      "Robert Stoffers"
     ],
     "a": [
      "Susan Bluni",
      "Kevin Emig"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Eleanor Dunlevy",
      "Derek Halili"
     ],
     "a": [
      "Brianna Zenna",
      "Gavin Jordan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 3,
     "h": [
      "Christine Cardinal",
      "Terri Pflueger"
     ],
     "a": [
      "Anna Arcaro",
      "Susan Bluni"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Eleanor Dunlevy",
      "Elsie Garcia"
     ],
     "a": [
      "Christina Rothman-Iliff",
      "Brianna Zenna"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Edwin Garcia",
      "Neil Dedhia"
     ],
     "a": [
      "Ben Cortes",
      "Brandon Calmo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Robert Stoffers",
      "Ross Bienstock"
     ],
     "a": [
      "Gavin Jordan",
      "Alan Liang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Christine Cardinal",
      "Edwin Garcia"
     ],
     "a": [
      "Susan Bluni",
      "Ben Cortes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Terri Pflueger",
      "Neil Dedhia"
     ],
     "a": [
      "Anna Arcaro",
      "Brandon Calmo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Elsie Garcia",
      "Derek Halili"
     ],
     "a": [
      "Christina Rothman-Iliff",
      "Alan Liang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Eleanor Dunlevy",
      "Ross Bienstock"
     ],
     "a": [
      "Brianna Zenna",
      "Kevin Emig"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Christine Cardinal",
      "Eleanor Dunlevy"
     ],
     "a": [
      "Susan Bluni",
      "Brianna Zenna"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Terri Pflueger",
      "Elsie Garcia"
     ],
     "a": [
      "Anna Arcaro",
      "Christina Rothman-Iliff"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Neil Dedhia",
      "Robert Stoffers"
     ],
     "a": [
      "Brandon Calmo",
      "Kevin Emig"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Derek Halili",
      "Ross Bienstock"
     ],
     "a": [
      "Gavin Jordan",
      "Alan Liang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Eleanor Dunlevy",
      "Edwin Garcia"
     ],
     "a": [
      "Susan Bluni",
      "Ben Cortes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Christine Cardinal",
      "Robert Stoffers"
     ],
     "a": [
      "Anna Arcaro",
      "Kevin Emig"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Terri Pflueger",
      "Ross Bienstock"
     ],
     "a": [
      "Christina Rothman-Iliff",
      "Gavin Jordan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Elsie Garcia",
      "Derek Halili"
     ],
     "a": [
      "Brianna Zenna",
      "Alan Liang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Christine Cardinal",
      "Terri Pflueger"
     ],
     "a": [
      "Anna Arcaro",
      "Susan Bluni"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Eleanor Dunlevy",
      "Elsie Garcia"
     ],
     "a": [
      "Christina Rothman-Iliff",
      "Brianna Zenna"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Edwin Garcia",
      "Robert Stoffers"
     ],
     "a": [
      "Brandon Calmo",
      "Gavin Jordan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Neil Dedhia",
      "Derek Halili"
     ],
     "a": [
      "Ben Cortes",
      "Kevin Emig"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Terri Pflueger",
      "Edwin Garcia"
     ],
     "a": [
      "Anna Arcaro",
      "Brandon Calmo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Christine Cardinal",
      "Neil Dedhia"
     ],
     "a": [
      "Christina Rothman-Iliff",
      "Ben Cortes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Eleanor Dunlevy",
      "Ross Bienstock"
     ],
     "a": [
      "Susan Bluni",
      "Alan Liang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Elsie Garcia",
      "Robert Stoffers"
     ],
     "a": [
      "Brianna Zenna",
      "Gavin Jordan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Christine Cardinal",
      "Eleanor Dunlevy"
     ],
     "a": [
      "Anna Arcaro",
      "Christina Rothman-Iliff"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Terri Pflueger",
      "Elsie Garcia"
     ],
     "a": [
      "Susan Bluni",
      "Brianna Zenna"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Edwin Garcia",
      "Neil Dedhia"
     ],
     "a": [
      "Ben Cortes",
      "Brandon Calmo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Derek Halili",
      "Ross Bienstock"
     ],
     "a": [
      "Kevin Emig",
      "Alan Liang"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 1,
   "home": "Nets Gambit",
   "away": "Hot Ballers!",
   "time": "2026-07-01T19:30:00",
   "complete": true,
   "homePoints": 481,
   "awayPoints": 675,
   "homeGW": 5,
   "awayGW": 27,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 31,
     "as": 29,
     "h": [
      "Nina Donnelly",
      "Anthony Solares"
     ],
     "a": [
      "Ellen Venezia",
      "Luis Guzman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Supriya Kothakonda",
      "Aiden Murphy"
     ],
     "a": [
      "Angelina Mogielnicki",
      "Danny Ruiz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Lauren Lowther",
      "Aj Donnelly"
     ],
     "a": [
      "Iqra Hasan-Calmo",
      "Kyle Woerner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Natalia Maciejewicz",
      "Joshua Weinstein"
     ],
     "a": [
      "Padma Gopi",
      "John Sarinick"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Nina Donnelly",
      "Supriya Kothakonda"
     ],
     "a": [
      "Ellen Venezia",
      "Iqra Hasan-Calmo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Natalia Maciejewicz",
      "Lauren Lowther"
     ],
     "a": [
      "Angelina Mogielnicki",
      "Padma Gopi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Anthony Solares",
      "Aiden Murphy"
     ],
     "a": [
      "Luis Guzman",
      "Danny Ruiz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Aj Donnelly",
      "Juan Uribe"
     ],
     "a": [
      "John Sarinick",
      "Rakesh Roy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Nina Donnelly",
      "Anthony Solares"
     ],
     "a": [
      "Iqra Hasan-Calmo",
      "Luis Guzman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Supriya Kothakonda",
      "Aiden Murphy"
     ],
     "a": [
      "Ellen Venezia",
      "Danny Ruiz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Lauren Lowther",
      "Joshua Weinstein"
     ],
     "a": [
      "Angelina Mogielnicki",
      "Rakesh Roy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Natalia Maciejewicz",
      "Juan Uribe"
     ],
     "a": [
      "Padma Gopi",
      "Kyle Woerner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Nina Donnelly",
      "Natalia Maciejewicz"
     ],
     "a": [
      "Iqra Hasan-Calmo",
      "Padma Gopi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Supriya Kothakonda",
      "Lauren Lowther"
     ],
     "a": [
      "Ellen Venezia",
      "Angelina Mogielnicki"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Aiden Murphy",
      "Aj Donnelly"
     ],
     "a": [
      "Danny Ruiz",
      "Kyle Woerner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Joshua Weinstein",
      "Juan Uribe"
     ],
     "a": [
      "John Sarinick",
      "Rakesh Roy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Natalia Maciejewicz",
      "Anthony Solares"
     ],
     "a": [
      "Iqra Hasan-Calmo",
      "Luis Guzman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Nina Donnelly",
      "Aj Donnelly"
     ],
     "a": [
      "Ellen Venezia",
      "Kyle Woerner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Supriya Kothakonda",
      "Juan Uribe"
     ],
     "a": [
      "Angelina Mogielnicki",
      "John Sarinick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Lauren Lowther",
      "Joshua Weinstein"
     ],
     "a": [
      "Padma Gopi",
      "Rakesh Roy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Nina Donnelly",
      "Supriya Kothakonda"
     ],
     "a": [
      "Ellen Venezia",
      "Iqra Hasan-Calmo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Natalia Maciejewicz",
      "Lauren Lowther"
     ],
     "a": [
      "Angelina Mogielnicki",
      "Padma Gopi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Anthony Solares",
      "Aj Donnelly"
     ],
     "a": [
      "Danny Ruiz",
      "John Sarinick"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Aiden Murphy",
      "Joshua Weinstein"
     ],
     "a": [
      "Luis Guzman",
      "Kyle Woerner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Supriya Kothakonda",
      "Anthony Solares"
     ],
     "a": [
      "Ellen Venezia",
      "Danny Ruiz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Nina Donnelly",
      "Aiden Murphy"
     ],
     "a": [
      "Angelina Mogielnicki",
      "Luis Guzman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Natalia Maciejewicz",
      "Juan Uribe"
     ],
     "a": [
      "Iqra Hasan-Calmo",
      "Rakesh Roy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lauren Lowther",
      "Aj Donnelly"
     ],
     "a": [
      "Padma Gopi",
      "John Sarinick"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Nina Donnelly",
      "Natalia Maciejewicz"
     ],
     "a": [
      "Ellen Venezia",
      "Angelina Mogielnicki"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Supriya Kothakonda",
      "Lauren Lowther"
     ],
     "a": [
      "Iqra Hasan-Calmo",
      "Padma Gopi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Anthony Solares",
      "Aiden Murphy"
     ],
     "a": [
      "Luis Guzman",
      "Danny Ruiz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Joshua Weinstein",
      "Juan Uribe"
     ],
     "a": [
      "Kyle Woerner",
      "Rakesh Roy"
     ]
    }
   ],
   "subs": [
    "Padma Gopi"
   ]
  },
  {
   "result": "away",
   "week": 2,
   "home": "Nets Gambit",
   "away": "Smash-holes!",
   "time": "2026-07-07T19:30:00",
   "complete": true,
   "homePoints": 480,
   "awayPoints": 668,
   "homeGW": 5,
   "awayGW": 27,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Nina Donnelly",
      "Anthony Solares"
     ],
     "a": [
      "Belicia Hughes",
      "Neil Dedhia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Natalia Maciejewicz",
      "Aj Donnelly"
     ],
     "a": [
      "Sarika Nadig",
      "Robert Stoffers"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Ruth Rao",
      "Aiden Murphy"
     ],
     "a": [
      "Taryn Seidner",
      "William Covino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Emily Sowa",
      "Juan Uribe"
     ],
     "a": [
      "Elsie Garcia",
      "Edwin Garcia"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Nina Donnelly",
      "Natalia Maciejewicz"
     ],
     "a": [
      "Belicia Hughes",
      "Taryn Seidner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Emily Sowa",
      "Ruth Rao"
     ],
     "a": [
      "Sarika Nadig",
      "Elsie Garcia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Anthony Solares",
      "Aj Donnelly"
     ],
     "a": [
      "Neil Dedhia",
      "Robert Stoffers"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Aiden Murphy",
      "Joshua Weinstein"
     ],
     "a": [
      "Edwin Garcia",
      "Ross Bienstock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Nina Donnelly",
      "Anthony Solares"
     ],
     "a": [
      "Taryn Seidner",
      "Neil Dedhia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Natalia Maciejewicz",
      "Aj Donnelly"
     ],
     "a": [
      "Belicia Hughes",
      "Robert Stoffers"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Ruth Rao",
      "Juan Uribe"
     ],
     "a": [
      "Sarika Nadig",
      "Ross Bienstock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Emily Sowa",
      "Joshua Weinstein"
     ],
     "a": [
      "Elsie Garcia",
      "William Covino"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Nina Donnelly",
      "Emily Sowa"
     ],
     "a": [
      "Taryn Seidner",
      "Elsie Garcia"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Natalia Maciejewicz",
      "Ruth Rao"
     ],
     "a": [
      "Belicia Hughes",
      "Sarika Nadig"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Aj Donnelly",
      "Aiden Murphy"
     ],
     "a": [
      "Robert Stoffers",
      "William Covino"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Juan Uribe",
      "Joshua Weinstein"
     ],
     "a": [
      "Edwin Garcia",
      "Ross Bienstock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Emily Sowa",
      "Anthony Solares"
     ],
     "a": [
      "Taryn Seidner",
      "Neil Dedhia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Nina Donnelly",
      "Aiden Murphy"
     ],
     "a": [
      "Belicia Hughes",
      "William Covino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Natalia Maciejewicz",
      "Joshua Weinstein"
     ],
     "a": [
      "Sarika Nadig",
      "Edwin Garcia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ruth Rao",
      "Juan Uribe"
     ],
     "a": [
      "Elsie Garcia",
      "Ross Bienstock"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Nina Donnelly",
      "Natalia Maciejewicz"
     ],
     "a": [
      "Belicia Hughes",
      "Taryn Seidner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Emily Sowa",
      "Ruth Rao"
     ],
     "a": [
      "Sarika Nadig",
      "Elsie Garcia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Anthony Solares",
      "Aiden Murphy"
     ],
     "a": [
      "Robert Stoffers",
      "Edwin Garcia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Aj Donnelly",
      "Juan Uribe"
     ],
     "a": [
      "Neil Dedhia",
      "William Covino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Natalia Maciejewicz",
      "Anthony Solares"
     ],
     "a": [
      "Belicia Hughes",
      "Robert Stoffers"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Nina Donnelly",
      "Aj Donnelly"
     ],
     "a": [
      "Sarika Nadig",
      "Neil Dedhia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Emily Sowa",
      "Joshua Weinstein"
     ],
     "a": [
      "Taryn Seidner",
      "Ross Bienstock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Ruth Rao",
      "Aiden Murphy"
     ],
     "a": [
      "Elsie Garcia",
      "Edwin Garcia"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Nina Donnelly",
      "Emily Sowa"
     ],
     "a": [
      "Belicia Hughes",
      "Sarika Nadig"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Natalia Maciejewicz",
      "Ruth Rao"
     ],
     "a": [
      "Taryn Seidner",
      "Elsie Garcia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Anthony Solares",
      "Aj Donnelly"
     ],
     "a": [
      "Neil Dedhia",
      "Robert Stoffers"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Juan Uribe",
      "Joshua Weinstein"
     ],
     "a": [
      "William Covino",
      "Ross Bienstock"
     ]
    }
   ],
   "subs": [
    "Belicia Hughes",
    "Emily Sowa",
    "Ruth Rao"
   ]
  },
  {
   "result": "away",
   "week": 2,
   "home": "Hot Ballers!",
   "away": "The Three-Fives",
   "time": "2026-07-07T19:30:00",
   "complete": true,
   "homePoints": 586,
   "awayPoints": 630,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Padma Gopi",
      "Kyle Woerner"
     ],
     "a": [
      "Christina Rothman-Iliff",
      "Brandon Calmo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Iqra Hasan-Calmo",
      "Luis Guzman"
     ],
     "a": [
      "Brianna Zenna",
      "Ben Cortes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Ellen Venezia",
      "Danny Ruiz"
     ],
     "a": [
      "Danielle Kuti",
      "Gavin Jordan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Katie O'Mara",
      "John Sarinick"
     ],
     "a": [
      "Ola Cauble",
      "Kevin Emig"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Iqra Hasan-Calmo",
      "Ellen Venezia"
     ],
     "a": [
      "Christina Rothman-Iliff",
      "Ola Cauble"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Padma Gopi",
      "Angelina Mogielnicki"
     ],
     "a": [
      "Brianna Zenna",
      "Danielle Kuti"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kyle Woerner",
      "Luis Guzman"
     ],
     "a": [
      "Brandon Calmo",
      "Ben Cortes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Danny Ruiz",
      "Rakesh Roy"
     ],
     "a": [
      "Kevin Emig",
      "Shekhar Bansal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Iqra Hasan-Calmo",
      "Kyle Woerner"
     ],
     "a": [
      "Brianna Zenna",
      "Brandon Calmo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Padma Gopi",
      "Luis Guzman"
     ],
     "a": [
      "Christina Rothman-Iliff",
      "Ben Cortes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Angelina Mogielnicki",
      "Rakesh Roy"
     ],
     "a": [
      "Danielle Kuti",
      "Gavin Jordan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Katie O'Mara",
      "John Sarinick"
     ],
     "a": [
      "Ola Cauble",
      "Shekhar Bansal"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Iqra Hasan-Calmo",
      "Angelina Mogielnicki"
     ],
     "a": [
      "Christina Rothman-Iliff",
      "Brianna Zenna"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Ellen Venezia",
      "Katie O'Mara"
     ],
     "a": [
      "Ola Cauble",
      "Danielle Kuti"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Luis Guzman",
      "Danny Ruiz"
     ],
     "a": [
      "Ben Cortes",
      "Gavin Jordan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "John Sarinick",
      "Rakesh Roy"
     ],
     "a": [
      "Kevin Emig",
      "Shekhar Bansal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Padma Gopi",
      "Danny Ruiz"
     ],
     "a": [
      "Brianna Zenna",
      "Brandon Calmo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Angelina Mogielnicki",
      "Kyle Woerner"
     ],
     "a": [
      "Christina Rothman-Iliff",
      "Gavin Jordan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ellen Venezia",
      "John Sarinick"
     ],
     "a": [
      "Ola Cauble",
      "Shekhar Bansal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Katie O'Mara",
      "Rakesh Roy"
     ],
     "a": [
      "Danielle Kuti",
      "Kevin Emig"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Padma Gopi",
      "Iqra Hasan-Calmo"
     ],
     "a": [
      "Christina Rothman-Iliff",
      "Brianna Zenna"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Ellen Venezia",
      "Katie O'Mara"
     ],
     "a": [
      "Ola Cauble",
      "Danielle Kuti"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Luis Guzman",
      "John Sarinick"
     ],
     "a": [
      "Brandon Calmo",
      "Gavin Jordan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kyle Woerner",
      "Danny Ruiz"
     ],
     "a": [
      "Ben Cortes",
      "Kevin Emig"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Iqra Hasan-Calmo",
      "Luis Guzman"
     ],
     "a": [
      "Christina Rothman-Iliff",
      "Brandon Calmo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Padma Gopi",
      "Kyle Woerner"
     ],
     "a": [
      "Brianna Zenna",
      "Ben Cortes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Angelina Mogielnicki",
      "Danny Ruiz"
     ],
     "a": [
      "Ola Cauble",
      "Kevin Emig"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Ellen Venezia",
      "Rakesh Roy"
     ],
     "a": [
      "Danielle Kuti",
      "Shekhar Bansal"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Padma Gopi",
      "Angelina Mogielnicki"
     ],
     "a": [
      "Christina Rothman-Iliff",
      "Ola Cauble"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Iqra Hasan-Calmo",
      "Katie O'Mara"
     ],
     "a": [
      "Brianna Zenna",
      "Danielle Kuti"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kyle Woerner",
      "Luis Guzman"
     ],
     "a": [
      "Brandon Calmo",
      "Ben Cortes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "John Sarinick",
      "Rakesh Roy"
     ],
     "a": [
      "Gavin Jordan",
      "Shekhar Bansal"
     ]
    }
   ],
   "subs": [
    "Ola Cauble",
    "Padma Gopi"
   ]
  },
  {
   "result": "home",
   "week": 3,
   "home": "Smash-holes!",
   "away": "Hot Ballers!",
   "time": "2026-07-15T19:30:00",
   "complete": true,
   "homePoints": 581,
   "awayPoints": 547,
   "homeGW": 19,
   "awayGW": 13,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Christine Cardinal",
      "Neil Dedhia"
     ],
     "a": [
      "Ellen Venezia",
      "Danny Ruiz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Terri Pflueger",
      "William Covino"
     ],
     "a": [
      "Iqra Hasan-Calmo",
      "Luis Guzman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sarika Nadig",
      "Robert Stoffers"
     ],
     "a": [
      "Nicole Demaise",
      "John Sarinick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Taryn Seidner",
      "Ross Bienstock"
     ],
     "a": [
      "Katie O'Mara",
      "Rakesh Roy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Christine Cardinal",
      "Terri Pflueger"
     ],
     "a": [
      "Ellen Venezia",
      "Nicole Demaise"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Taryn Seidner",
      "Sarika Nadig"
     ],
     "a": [
      "Iqra Hasan-Calmo",
      "Katie O'Mara"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Neil Dedhia",
      "William Covino"
     ],
     "a": [
      "Danny Ruiz",
      "Luis Guzman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Robert Stoffers",
      "Derek Halili"
     ],
     "a": [
      "Rakesh Roy",
      "David Armento"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Christine Cardinal",
      "Neil Dedhia"
     ],
     "a": [
      "Nicole Demaise",
      "Danny Ruiz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Terri Pflueger",
      "William Covino"
     ],
     "a": [
      "Ellen Venezia",
      "Luis Guzman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Sarika Nadig",
      "Ross Bienstock"
     ],
     "a": [
      "Iqra Hasan-Calmo",
      "David Armento"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Taryn Seidner",
      "Derek Halili"
     ],
     "a": [
      "Katie O'Mara",
      "John Sarinick"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Christine Cardinal",
      "Taryn Seidner"
     ],
     "a": [
      "Nicole Demaise",
      "Katie O'Mara"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Terri Pflueger",
      "Sarika Nadig"
     ],
     "a": [
      "Ellen Venezia",
      "Iqra Hasan-Calmo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "William Covino",
      "Robert Stoffers"
     ],
     "a": [
      "Luis Guzman",
      "John Sarinick"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Ross Bienstock",
      "Derek Halili"
     ],
     "a": [
      "Rakesh Roy",
      "David Armento"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Taryn Seidner",
      "Neil Dedhia"
     ],
     "a": [
      "Nicole Demaise",
      "Danny Ruiz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Christine Cardinal",
      "Robert Stoffers"
     ],
     "a": [
      "Ellen Venezia",
      "John Sarinick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Terri Pflueger",
      "Derek Halili"
     ],
     "a": [
      "Iqra Hasan-Calmo",
      "Rakesh Roy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sarika Nadig",
      "Ross Bienstock"
     ],
     "a": [
      "Katie O'Mara",
      "David Armento"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Christine Cardinal",
      "Terri Pflueger"
     ],
     "a": [
      "Ellen Venezia",
      "Nicole Demaise"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Taryn Seidner",
      "Sarika Nadig"
     ],
     "a": [
      "Iqra Hasan-Calmo",
      "Katie O'Mara"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Neil Dedhia",
      "Robert Stoffers"
     ],
     "a": [
      "Luis Guzman",
      "Rakesh Roy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "William Covino",
      "Ross Bienstock"
     ],
     "a": [
      "Danny Ruiz",
      "John Sarinick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Terri Pflueger",
      "Neil Dedhia"
     ],
     "a": [
      "Ellen Venezia",
      "Luis Guzman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Christine Cardinal",
      "William Covino"
     ],
     "a": [
      "Iqra Hasan-Calmo",
      "Danny Ruiz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Taryn Seidner",
      "Derek Halili"
     ],
     "a": [
      "Nicole Demaise",
      "David Armento"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Sarika Nadig",
      "Robert Stoffers"
     ],
     "a": [
      "Katie O'Mara",
      "Rakesh Roy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Christine Cardinal",
      "Taryn Seidner"
     ],
     "a": [
      "Ellen Venezia",
      "Iqra Hasan-Calmo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Terri Pflueger",
      "Sarika Nadig"
     ],
     "a": [
      "Nicole Demaise",
      "Katie O'Mara"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Neil Dedhia",
      "William Covino"
     ],
     "a": [
      "Danny Ruiz",
      "Luis Guzman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Ross Bienstock",
      "Derek Halili"
     ],
     "a": [
      "John Sarinick",
      "David Armento"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 3,
   "home": "The Three-Fives",
   "away": "Nets Gambit",
   "time": "2026-07-15T19:30:00",
   "complete": true,
   "homePoints": 611,
   "awayPoints": 612,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Christina Rothman-Iliff",
      "Brandon Calmo"
     ],
     "a": [
      "Sue Caputo",
      "Anthony Solares"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Brianna Zenna",
      "Ben Cortes"
     ],
     "a": [
      "Veronica Rosas",
      "Morgan Valencia King"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Danielle Kuti",
      "Kevin Emig"
     ],
     "a": [
      "Supriya Kothakonda",
      "Joshua Weinstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Anna Arcaro",
      "Shekhar Bansal"
     ],
     "a": [
      "Rebecca Ramos",
      "Juan Uribe"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Brianna Zenna",
      "Danielle Kuti"
     ],
     "a": [
      "Sue Caputo",
      "Rebecca Ramos"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Christina Rothman-Iliff",
      "Susan Bluni"
     ],
     "a": [
      "Veronica Rosas",
      "Supriya Kothakonda"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Brandon Calmo",
      "Ben Cortes"
     ],
     "a": [
      "Anthony Solares",
      "Morgan Valencia King"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kevin Emig",
      "Ethan Macedo"
     ],
     "a": [
      "Juan Uribe",
      "Aiden Murphy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Brianna Zenna",
      "Brandon Calmo"
     ],
     "a": [
      "Veronica Rosas",
      "Anthony Solares"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Christina Rothman-Iliff",
      "Ben Cortes"
     ],
     "a": [
      "Sue Caputo",
      "Morgan Valencia King"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Susan Bluni",
      "Ethan Macedo"
     ],
     "a": [
      "Supriya Kothakonda",
      "Joshua Weinstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Anna Arcaro",
      "Shekhar Bansal"
     ],
     "a": [
      "Rebecca Ramos",
      "Aiden Murphy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Brianna Zenna",
      "Susan Bluni"
     ],
     "a": [
      "Sue Caputo",
      "Veronica Rosas"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Danielle Kuti",
      "Anna Arcaro"
     ],
     "a": [
      "Rebecca Ramos",
      "Supriya Kothakonda"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Ben Cortes",
      "Kevin Emig"
     ],
     "a": [
      "Morgan Valencia King",
      "Joshua Weinstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Shekhar Bansal",
      "Ethan Macedo"
     ],
     "a": [
      "Juan Uribe",
      "Aiden Murphy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Christina Rothman-Iliff",
      "Kevin Emig"
     ],
     "a": [
      "Veronica Rosas",
      "Anthony Solares"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Susan Bluni",
      "Brandon Calmo"
     ],
     "a": [
      "Sue Caputo",
      "Joshua Weinstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Danielle Kuti",
      "Shekhar Bansal"
     ],
     "a": [
      "Rebecca Ramos",
      "Aiden Murphy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Anna Arcaro",
      "Ethan Macedo"
     ],
     "a": [
      "Supriya Kothakonda",
      "Juan Uribe"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Christina Rothman-Iliff",
      "Brianna Zenna"
     ],
     "a": [
      "Sue Caputo",
      "Veronica Rosas"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Danielle Kuti",
      "Anna Arcaro"
     ],
     "a": [
      "Rebecca Ramos",
      "Supriya Kothakonda"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Ben Cortes",
      "Shekhar Bansal"
     ],
     "a": [
      "Anthony Solares",
      "Joshua Weinstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Brandon Calmo",
      "Kevin Emig"
     ],
     "a": [
      "Morgan Valencia King",
      "Juan Uribe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Brianna Zenna",
      "Ben Cortes"
     ],
     "a": [
      "Sue Caputo",
      "Anthony Solares"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Christina Rothman-Iliff",
      "Brandon Calmo"
     ],
     "a": [
      "Veronica Rosas",
      "Morgan Valencia King"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Susan Bluni",
      "Kevin Emig"
     ],
     "a": [
      "Rebecca Ramos",
      "Juan Uribe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Danielle Kuti",
      "Ethan Macedo"
     ],
     "a": [
      "Supriya Kothakonda",
      "Aiden Murphy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Christina Rothman-Iliff",
      "Susan Bluni"
     ],
     "a": [
      "Sue Caputo",
      "Rebecca Ramos"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Brianna Zenna",
      "Anna Arcaro"
     ],
     "a": [
      "Veronica Rosas",
      "Supriya Kothakonda"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Brandon Calmo",
      "Ben Cortes"
     ],
     "a": [
      "Anthony Solares",
      "Morgan Valencia King"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Shekhar Bansal",
      "Ethan Macedo"
     ],
     "a": [
      "Joshua Weinstein",
      "Aiden Murphy"
     ]
    }
   ],
   "subs": [
    "Rebecca Ramos"
   ]
  },
  {
   "result": "home",
   "week": 4,
   "home": "The Three-Fives",
   "away": "Smash-holes!",
   "time": "2026-07-22T19:30:00",
   "complete": true,
   "homePoints": 602,
   "awayPoints": 577,
   "homeGW": 20,
   "awayGW": 12,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Christina Rothman-Iliff",
      "Alan Liang"
     ],
     "a": [
      "Belicia Hughes",
      "Neil Dedhia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Brianna Zenna",
      "Brandon Calmo"
     ],
     "a": [
      "Christine Cardinal",
      "William Covino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Anna Arcaro",
      "Kevin Emig"
     ],
     "a": [
      "Taryn Seidner",
      "Robert Stoffers"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lizz Dunn",
      "Gavin Jordan"
     ],
     "a": [
      "Sarika Nadig",
      "Edwin Garcia"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Brianna Zenna",
      "Anna Arcaro"
     ],
     "a": [
      "Belicia Hughes",
      "Sarika Nadig"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Christina Rothman-Iliff",
      "Danielle Kuti"
     ],
     "a": [
      "Christine Cardinal",
      "Taryn Seidner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Alan Liang",
      "Brandon Calmo"
     ],
     "a": [
      "Neil Dedhia",
      "William Covino"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Gavin Jordan",
      "Kevin Emig"
     ],
     "a": [
      "Edwin Garcia",
      "Ross Bienstock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Brianna Zenna",
      "Alan Liang"
     ],
     "a": [
      "Christine Cardinal",
      "Neil Dedhia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Christina Rothman-Iliff",
      "Brandon Calmo"
     ],
     "a": [
      "Belicia Hughes",
      "William Covino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Danielle Kuti",
      "Kevin Emig"
     ],
     "a": [
      "Taryn Seidner",
      "Robert Stoffers"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lizz Dunn",
      "Gavin Jordan"
     ],
     "a": [
      "Sarika Nadig",
      "Ross Bienstock"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Brianna Zenna",
      "Danielle Kuti"
     ],
     "a": [
      "Belicia Hughes",
      "Christine Cardinal"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Christina Rothman-Iliff",
      "Lizz Dunn"
     ],
     "a": [
      "Sarika Nadig",
      "Taryn Seidner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Brandon Calmo",
      "Ethan Macedo"
     ],
     "a": [
      "William Covino",
      "Robert Stoffers"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Gavin Jordan",
      "Kevin Emig"
     ],
     "a": [
      "Edwin Garcia",
      "Ross Bienstock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Christina Rothman-Iliff",
      "Ethan Macedo"
     ],
     "a": [
      "Christine Cardinal",
      "Neil Dedhia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Danielle Kuti",
      "Alan Liang"
     ],
     "a": [
      "Belicia Hughes",
      "Robert Stoffers"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Brianna Zenna",
      "Gavin Jordan"
     ],
     "a": [
      "Sarika Nadig",
      "Ross Bienstock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Lizz Dunn",
      "Kevin Emig"
     ],
     "a": [
      "Taryn Seidner",
      "Edwin Garcia"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Christina Rothman-Iliff",
      "Brianna Zenna"
     ],
     "a": [
      "Belicia Hughes",
      "Christine Cardinal"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Danielle Kuti",
      "Lizz Dunn"
     ],
     "a": [
      "Sarika Nadig",
      "Taryn Seidner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Brandon Calmo",
      "Gavin Jordan"
     ],
     "a": [
      "Neil Dedhia",
      "Robert Stoffers"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Alan Liang",
      "Ethan Macedo"
     ],
     "a": [
      "William Covino",
      "Edwin Garcia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Brianna Zenna",
      "Brandon Calmo"
     ],
     "a": [
      "Belicia Hughes",
      "Neil Dedhia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Christina Rothman-Iliff",
      "Alan Liang"
     ],
     "a": [
      "Christine Cardinal",
      "William Covino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Danielle Kuti",
      "Ethan Macedo"
     ],
     "a": [
      "Sarika Nadig",
      "Edwin Garcia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lizz Dunn",
      "Kevin Emig"
     ],
     "a": [
      "Taryn Seidner",
      "Ross Bienstock"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Christina Rothman-Iliff",
      "Danielle Kuti"
     ],
     "a": [
      "Belicia Hughes",
      "Sarika Nadig"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Brianna Zenna",
      "Lizz Dunn"
     ],
     "a": [
      "Christine Cardinal",
      "Taryn Seidner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Alan Liang",
      "Brandon Calmo"
     ],
     "a": [
      "Neil Dedhia",
      "William Covino"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Gavin Jordan",
      "Kevin Emig"
     ],
     "a": [
      "Robert Stoffers",
      "Ross Bienstock"
     ]
    }
   ],
   "subs": [
    "Belicia Hughes",
    "Lizz Dunn"
   ]
  },
  {
   "result": "home",
   "week": 4,
   "home": "Hot Ballers!",
   "away": "Nets Gambit",
   "time": "2026-07-22T19:30:00",
   "complete": true,
   "homePoints": 645,
   "awayPoints": 544,
   "homeGW": 24,
   "awayGW": 8,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Ellen Venezia",
      "Robert Gemellaro"
     ],
     "a": [
      "Veronica Rosas",
      "Anthony Solares"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Michelle Gemellaro",
      "Danny Ruiz"
     ],
     "a": [
      "Nina Donnelly",
      "Morgan Valencia King"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Coleen Walter",
      "Rakesh Roy"
     ],
     "a": [
      "Zoe Zapf",
      "Mason Jordan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Katie O'Mara",
      "John Sarinick"
     ],
     "a": [
      "Natalia Maciejewicz",
      "Juan Uribe"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ellen Venezia",
      "Coleen Walter"
     ],
     "a": [
      "Veronica Rosas",
      "Natalia Maciejewicz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Michelle Gemellaro",
      "Iqra Hasan-Calmo"
     ],
     "a": [
      "Nina Donnelly",
      "Zoe Zapf"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Robert Gemellaro",
      "Rakesh Roy"
     ],
     "a": [
      "Anthony Solares",
      "Morgan Valencia King"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Danny Ruiz",
      "John Sarinick"
     ],
     "a": [
      "Aj Donnelly",
      "Juan Uribe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Ellen Venezia",
      "Robert Gemellaro"
     ],
     "a": [
      "Nina Donnelly",
      "Anthony Solares"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Michelle Gemellaro",
      "Danny Ruiz"
     ],
     "a": [
      "Veronica Rosas",
      "Morgan Valencia King"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Iqra Hasan-Calmo",
      "Rakesh Roy"
     ],
     "a": [
      "Zoe Zapf",
      "Aj Donnelly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Katie O'Mara",
      "John Sarinick"
     ],
     "a": [
      "Natalia Maciejewicz",
      "Mason Jordan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Michelle Gemellaro",
      "Coleen Walter"
     ],
     "a": [
      "Veronica Rosas",
      "Nina Donnelly"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Iqra Hasan-Calmo",
      "Katie O'Mara"
     ],
     "a": [
      "Natalia Maciejewicz",
      "Zoe Zapf"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Robert Gemellaro",
      "Danny Ruiz"
     ],
     "a": [
      "Morgan Valencia King",
      "Aj Donnelly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Rakesh Roy",
      "John Sarinick"
     ],
     "a": [
      "Mason Jordan",
      "Juan Uribe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ellen Venezia",
      "Danny Ruiz"
     ],
     "a": [
      "Veronica Rosas",
      "Aj Donnelly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Coleen Walter",
      "Robert Gemellaro"
     ],
     "a": [
      "Nina Donnelly",
      "Anthony Solares"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Iqra Hasan-Calmo",
      "John Sarinick"
     ],
     "a": [
      "Natalia Maciejewicz",
      "Mason Jordan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Katie O'Mara",
      "Rakesh Roy"
     ],
     "a": [
      "Zoe Zapf",
      "Juan Uribe"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Ellen Venezia",
      "Michelle Gemellaro"
     ],
     "a": [
      "Veronica Rosas",
      "Natalia Maciejewicz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Coleen Walter",
      "Katie O'Mara"
     ],
     "a": [
      "Nina Donnelly",
      "Zoe Zapf"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Robert Gemellaro",
      "Danny Ruiz"
     ],
     "a": [
      "Anthony Solares",
      "Morgan Valencia King"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Rakesh Roy",
      "John Sarinick"
     ],
     "a": [
      "Mason Jordan",
      "Juan Uribe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ellen Venezia",
      "Danny Ruiz"
     ],
     "a": [
      "Nina Donnelly",
      "Morgan Valencia King"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Michelle Gemellaro",
      "John Sarinick"
     ],
     "a": [
      "Zoe Zapf",
      "Anthony Solares"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Coleen Walter",
      "Robert Gemellaro"
     ],
     "a": [
      "Veronica Rosas",
      "Aj Donnelly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Iqra Hasan-Calmo",
      "Rakesh Roy"
     ],
     "a": [
      "Natalia Maciejewicz",
      "Juan Uribe"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ellen Venezia",
      "Michelle Gemellaro"
     ],
     "a": [
      "Veronica Rosas",
      "Nina Donnelly"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Iqra Hasan-Calmo",
      "Katie O'Mara"
     ],
     "a": [
      "Natalia Maciejewicz",
      "Zoe Zapf"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Robert Gemellaro",
      "Rakesh Roy"
     ],
     "a": [
      "Morgan Valencia King",
      "Mason Jordan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Danny Ruiz",
      "John Sarinick"
     ],
     "a": [
      "Anthony Solares",
      "Aj Donnelly"
     ]
    }
   ],
   "subs": [
    "Robert Gemellaro",
    "Michelle Gemellaro",
    "Coleen Walter"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "The Three-Fives",
   "away": "Hot Ballers!",
   "time": "2026-07-29T19:30:00",
   "complete": true,
   "homePoints": 615,
   "awayPoints": 558,
   "homeGW": 19,
   "awayGW": 13,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Christina Rothman-Iliff",
      "Brandon Calmo"
     ],
     "a": [
      "Ellen Venezia",
      "Rakesh Roy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Brianna Zenna",
      "Ben Cortes"
     ],
     "a": [
      "Iqra Hasan-Calmo",
      "John Sarinick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Katie Ursino",
      "Alan Liang"
     ],
     "a": [
      "Katie O'Mara",
      "David Armento"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jodie Bennett",
      "Gavin Jordan"
     ],
     "a": [
      "Angelina Mogielnicki",
      "Kyle Woerner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Brianna Zenna",
      "Katie Ursino"
     ],
     "a": [
      "Ellen Venezia",
      "Angelina Mogielnicki"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Christina Rothman-Iliff",
      "Danielle Kuti"
     ],
     "a": [
      "Iqra Hasan-Calmo",
      "Katie O'Mara"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Brandon Calmo",
      "Ben Cortes"
     ],
     "a": [
      "Rakesh Roy",
      "John Sarinick"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Alan Liang",
      "Ethan Macedo"
     ],
     "a": [
      "Kyle Woerner",
      "Luis Guzman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Brianna Zenna",
      "Brandon Calmo"
     ],
     "a": [
      "Iqra Hasan-Calmo",
      "Rakesh Roy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Christina Rothman-Iliff",
      "Ben Cortes"
     ],
     "a": [
      "Ellen Venezia",
      "John Sarinick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Danielle Kuti",
      "Ethan Macedo"
     ],
     "a": [
      "Katie O'Mara",
      "David Armento"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jodie Bennett",
      "Gavin Jordan"
     ],
     "a": [
      "Angelina Mogielnicki",
      "Luis Guzman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Brianna Zenna",
      "Danielle Kuti"
     ],
     "a": [
      "Ellen Venezia",
      "Iqra Hasan-Calmo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Katie Ursino",
      "Jodie Bennett"
     ],
     "a": [
      "Angelina Mogielnicki",
      "Katie O'Mara"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ben Cortes",
      "Alan Liang"
     ],
     "a": [
      "John Sarinick",
      "David Armento"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Gavin Jordan",
      "Ethan Macedo"
     ],
     "a": [
      "Kyle Woerner",
      "Luis Guzman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Christina Rothman-Iliff",
      "Alan Liang"
     ],
     "a": [
      "Iqra Hasan-Calmo",
      "Rakesh Roy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Danielle Kuti",
      "Brandon Calmo"
     ],
     "a": [
      "Ellen Venezia",
      "David Armento"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Katie Ursino",
      "Gavin Jordan"
     ],
     "a": [
      "Angelina Mogielnicki",
      "Luis Guzman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jodie Bennett",
      "Ethan Macedo"
     ],
     "a": [
      "Katie O'Mara",
      "Kyle Woerner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Christina Rothman-Iliff",
      "Brianna Zenna"
     ],
     "a": [
      "Ellen Venezia",
      "Iqra Hasan-Calmo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Katie Ursino",
      "Jodie Bennett"
     ],
     "a": [
      "Angelina Mogielnicki",
      "Katie O'Mara"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Ben Cortes",
      "Gavin Jordan"
     ],
     "a": [
      "Rakesh Roy",
      "David Armento"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Brandon Calmo",
      "Alan Liang"
     ],
     "a": [
      "John Sarinick",
      "Kyle Woerner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Brianna Zenna",
      "Ben Cortes"
     ],
     "a": [
      "Ellen Venezia",
      "Rakesh Roy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Christina Rothman-Iliff",
      "Brandon Calmo"
     ],
     "a": [
      "Iqra Hasan-Calmo",
      "John Sarinick"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 0,
     "h": [
      "Danielle Kuti",
      "Alan Liang"
     ],
     "a": [
      "Angelina Mogielnicki",
      "Kyle Woerner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Katie Ursino",
      "Ethan Macedo"
     ],
     "a": [
      "Katie O'Mara",
      "Luis Guzman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Christina Rothman-Iliff",
      "Danielle Kuti"
     ],
     "a": [
      "Ellen Venezia",
      "Angelina Mogielnicki"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Brianna Zenna",
      "Jodie Bennett"
     ],
     "a": [
      "Iqra Hasan-Calmo",
      "Katie O'Mara"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Brandon Calmo",
      "Ben Cortes"
     ],
     "a": [
      "Rakesh Roy",
      "John Sarinick"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Gavin Jordan",
      "Ethan Macedo"
     ],
     "a": [
      "David Armento",
      "Luis Guzman"
     ]
    }
   ],
   "subs": [
    "Katie Ursino",
    "Jodie Bennett"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "Smash-holes!",
   "away": "Nets Gambit",
   "time": "2026-07-29T19:30:00",
   "complete": true,
   "homePoints": 640,
   "awayPoints": 567,
   "homeGW": 20,
   "awayGW": 12,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Christine Cardinal",
      "Neil Dedhia"
     ],
     "a": [
      "Veronica Rosas",
      "Morgan Valencia King"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Terri Pflueger",
      "William Covino"
     ],
     "a": [
      "Sue Caputo",
      "Aj Donnelly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Sarika Nadig",
      "Robert Stoffers"
     ],
     "a": [
      "Nina Donnelly",
      "Joshua Weinstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Brooke Mcbride",
      "Ross Bienstock"
     ],
     "a": [
      "Natalia Maciejewicz",
      "Aiden Murphy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Christine Cardinal",
      "Brooke Mcbride"
     ],
     "a": [
      "Sue Caputo",
      "Nina Donnelly"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Terri Pflueger",
      "Sarika Nadig"
     ],
     "a": [
      "Veronica Rosas",
      "Supriya Kothakonda"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Neil Dedhia",
      "William Covino"
     ],
     "a": [
      "Morgan Valencia King",
      "Aj Donnelly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Ross Bienstock",
      "Derek Halili"
     ],
     "a": [
      "Joshua Weinstein",
      "Mason Jordan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Terri Pflueger",
      "Neil Dedhia"
     ],
     "a": [
      "Sue Caputo",
      "Morgan Valencia King"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Christine Cardinal",
      "William Covino"
     ],
     "a": [
      "Veronica Rosas",
      "Aj Donnelly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sarika Nadig",
      "Robert Stoffers"
     ],
     "a": [
      "Supriya Kothakonda",
      "Mason Jordan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Brooke Mcbride",
      "Derek Halili"
     ],
     "a": [
      "Natalia Maciejewicz",
      "Aiden Murphy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Christine Cardinal",
      "Terri Pflueger"
     ],
     "a": [
      "Sue Caputo",
      "Supriya Kothakonda"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Brooke Mcbride",
      "Sarika Nadig"
     ],
     "a": [
      "Nina Donnelly",
      "Natalia Maciejewicz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "William Covino",
      "Robert Stoffers"
     ],
     "a": [
      "Aj Donnelly",
      "Joshua Weinstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ross Bienstock",
      "Derek Halili"
     ],
     "a": [
      "Aiden Murphy",
      "Mason Jordan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Terri Pflueger",
      "Neil Dedhia"
     ],
     "a": [
      "Veronica Rosas",
      "Joshua Weinstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Christine Cardinal",
      "Robert Stoffers"
     ],
     "a": [
      "Supriya Kothakonda",
      "Morgan Valencia King"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Brooke Mcbride",
      "Derek Halili"
     ],
     "a": [
      "Nina Donnelly",
      "Aiden Murphy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Sarika Nadig",
      "Ross Bienstock"
     ],
     "a": [
      "Natalia Maciejewicz",
      "Mason Jordan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Christine Cardinal",
      "Terri Pflueger"
     ],
     "a": [
      "Veronica Rosas",
      "Sue Caputo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Brooke Mcbride",
      "Sarika Nadig"
     ],
     "a": [
      "Nina Donnelly",
      "Natalia Maciejewicz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Neil Dedhia",
      "Robert Stoffers"
     ],
     "a": [
      "Aj Donnelly",
      "Aiden Murphy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "William Covino",
      "Ross Bienstock"
     ],
     "a": [
      "Morgan Valencia King",
      "Joshua Weinstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Christine Cardinal",
      "Neil Dedhia"
     ],
     "a": [
      "Sue Caputo",
      "Aj Donnelly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Terri Pflueger",
      "William Covino"
     ],
     "a": [
      "Veronica Rosas",
      "Morgan Valencia King"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Brooke Mcbride",
      "Ross Bienstock"
     ],
     "a": [
      "Supriya Kothakonda",
      "Joshua Weinstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Sarika Nadig",
      "Derek Halili"
     ],
     "a": [
      "Nina Donnelly",
      "Mason Jordan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Christine Cardinal",
      "Brooke Mcbride"
     ],
     "a": [
      "Veronica Rosas",
      "Supriya Kothakonda"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Terri Pflueger",
      "Sarika Nadig"
     ],
     "a": [
      "Sue Caputo",
      "Natalia Maciejewicz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Neil Dedhia",
      "William Covino"
     ],
     "a": [
      "Morgan Valencia King",
      "Aj Donnelly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Robert Stoffers",
      "Derek Halili"
     ],
     "a": [
      "Aiden Murphy",
      "Mason Jordan"
     ]
    }
   ],
   "subs": [
    "Brooke Mcbride"
   ]
  },
  {
   "result": "away",
   "week": 6,
   "home": "Hot Ballers!",
   "away": "Smash-holes!",
   "time": "2026-08-05T19:30:00",
   "complete": true,
   "homePoints": 584,
   "awayPoints": 656,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Ellen Venezia",
      "Danny Ruiz"
     ],
     "a": [
      "Christine Cardinal",
      "Neil Dedhia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Iqra Hasan-Calmo",
      "Rakesh Roy"
     ],
     "a": [
      "Terri Pflueger",
      "Robert Stoffers"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Angelina Mogielnicki",
      "David Armento"
     ],
     "a": [
      "Taryn Seidner",
      "Matthew Mcbride"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Katie O'Mara",
      "Kyle Woerner"
     ],
     "a": [
      "Sarika Nadig",
      "Ross Bienstock"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Ellen Venezia",
      "Iqra Hasan-Calmo"
     ],
     "a": [
      "Christine Cardinal",
      "Terri Pflueger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Angelina Mogielnicki",
      "Katie O'Mara"
     ],
     "a": [
      "Sarika Nadig",
      "Taryn Seidner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Danny Ruiz",
      "Rakesh Roy"
     ],
     "a": [
      "Neil Dedhia",
      "Matthew Mcbride"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Luis Guzman",
      "David Armento"
     ],
     "a": [
      "Robert Stoffers",
      "Ross Bienstock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Iqra Hasan-Calmo",
      "Rakesh Roy"
     ],
     "a": [
      "Sarika Nadig",
      "Neil Dedhia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Angelina Mogielnicki",
      "Danny Ruiz"
     ],
     "a": [
      "Christine Cardinal",
      "Robert Stoffers"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ellen Venezia",
      "Luis Guzman"
     ],
     "a": [
      "Terri Pflueger",
      "Matthew Mcbride"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Katie O'Mara",
      "Kyle Woerner"
     ],
     "a": [
      "Taryn Seidner",
      "Ross Bienstock"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Iqra Hasan-Calmo",
      "Katie O'Mara"
     ],
     "a": [
      "Christine Cardinal",
      "Sarika Nadig"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ellen Venezia",
      "Angelina Mogielnicki"
     ],
     "a": [
      "Terri Pflueger",
      "Taryn Seidner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Danny Ruiz",
      "Luis Guzman"
     ],
     "a": [
      "Neil Dedhia",
      "Robert Stoffers"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kyle Woerner",
      "David Armento"
     ],
     "a": [
      "Matthew Mcbride",
      "Ross Bienstock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ellen Venezia",
      "Rakesh Roy"
     ],
     "a": [
      "Christine Cardinal",
      "Robert Stoffers"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Iqra Hasan-Calmo",
      "Luis Guzman"
     ],
     "a": [
      "Sarika Nadig",
      "Neil Dedhia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Angelina Mogielnicki",
      "Kyle Woerner"
     ],
     "a": [
      "Terri Pflueger",
      "Matthew Mcbride"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Katie O'Mara",
      "David Armento"
     ],
     "a": [
      "Taryn Seidner",
      "Ross Bienstock"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Ellen Venezia",
      "Iqra Hasan-Calmo"
     ],
     "a": [
      "Christine Cardinal",
      "Terri Pflueger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Angelina Mogielnicki",
      "Katie O'Mara"
     ],
     "a": [
      "Sarika Nadig",
      "Taryn Seidner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Danny Ruiz",
      "Rakesh Roy"
     ],
     "a": [
      "Neil Dedhia",
      "Robert Stoffers"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kyle Woerner",
      "David Armento"
     ],
     "a": [
      "Matthew Mcbride",
      "Ross Bienstock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ellen Venezia",
      "Danny Ruiz"
     ],
     "a": [
      "Christine Cardinal",
      "Neil Dedhia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Angelina Mogielnicki",
      "Rakesh Roy"
     ],
     "a": [
      "Sarika Nadig",
      "Robert Stoffers"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Iqra Hasan-Calmo",
      "Luis Guzman"
     ],
     "a": [
      "Terri Pflueger",
      "Ross Bienstock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Katie O'Mara",
      "David Armento"
     ],
     "a": [
      "Taryn Seidner",
      "Matthew Mcbride"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Iqra Hasan-Calmo",
      "Katie O'Mara"
     ],
     "a": [
      "Christine Cardinal",
      "Sarika Nadig"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Ellen Venezia",
      "Angelina Mogielnicki"
     ],
     "a": [
      "Terri Pflueger",
      "Taryn Seidner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Rakesh Roy",
      "Kyle Woerner"
     ],
     "a": [
      "Neil Dedhia",
      "Matthew Mcbride"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Danny Ruiz",
      "Luis Guzman"
     ],
     "a": [
      "Robert Stoffers",
      "Ross Bienstock"
     ]
    }
   ],
   "subs": [
    "Matthew Mcbride"
   ]
  },
  {
   "result": "home",
   "week": 6,
   "home": "Nets Gambit",
   "away": "The Three-Fives",
   "time": "2026-08-05T19:30:00",
   "complete": true,
   "homePoints": 632,
   "awayPoints": 596,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Clarisse Espiritu",
      "Anthony Solares"
     ],
     "a": [
      "Christina Rothman-Iliff",
      "Brandon Calmo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Veronica Rosas",
      "Matthew Buffolino"
     ],
     "a": [
      "Brianna Zenna",
      "Ben Cortes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Sue Caputo",
      "Juan Uribe"
     ],
     "a": [
      "Danielle Kuti",
      "Ethan Macedo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Supriya Kothakonda",
      "Eric Goldman"
     ],
     "a": [
      "Ola Cauble",
      "Kevin Lew"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Clarisse Espiritu",
      "Veronica Rosas"
     ],
     "a": [
      "Christina Rothman-Iliff",
      "Brianna Zenna"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Supriya Kothakonda",
      "Nina Donnelly"
     ],
     "a": [
      "Danielle Kuti",
      "Anna Arcaro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Anthony Solares",
      "Eric Goldman"
     ],
     "a": [
      "Ben Cortes",
      "Ethan Macedo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Matthew Buffolino",
      "Juan Uribe"
     ],
     "a": [
      "Brandon Calmo",
      "Kevin Emig"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Clarisse Espiritu",
      "Matthew Buffolino"
     ],
     "a": [
      "Christina Rothman-Iliff",
      "Ben Cortes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Veronica Rosas",
      "Anthony Solares"
     ],
     "a": [
      "Brianna Zenna",
      "Brandon Calmo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Sue Caputo",
      "Juan Uribe"
     ],
     "a": [
      "Anna Arcaro",
      "Kevin Emig"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Nina Donnelly",
      "Eric Goldman"
     ],
     "a": [
      "Ola Cauble",
      "Kevin Lew"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Veronica Rosas",
      "Sue Caputo"
     ],
     "a": [
      "Brianna Zenna",
      "Danielle Kuti"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Supriya Kothakonda",
      "Nina Donnelly"
     ],
     "a": [
      "Ola Cauble",
      "Anna Arcaro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Anthony Solares",
      "Matthew Buffolino"
     ],
     "a": [
      "Ben Cortes",
      "Kevin Emig"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Eric Goldman",
      "Juan Uribe"
     ],
     "a": [
      "Ethan Macedo",
      "Kevin Lew"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Clarisse Espiritu",
      "Matthew Buffolino"
     ],
     "a": [
      "Danielle Kuti",
      "Brandon Calmo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Sue Caputo",
      "Anthony Solares"
     ],
     "a": [
      "Christina Rothman-Iliff",
      "Kevin Emig"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Nina Donnelly",
      "Eric Goldman"
     ],
     "a": [
      "Ola Cauble",
      "Ethan Macedo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Supriya Kothakonda",
      "Juan Uribe"
     ],
     "a": [
      "Anna Arcaro",
      "Kevin Lew"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Clarisse Espiritu",
      "Sue Caputo"
     ],
     "a": [
      "Brianna Zenna",
      "Ola Cauble"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Veronica Rosas",
      "Supriya Kothakonda"
     ],
     "a": [
      "Christina Rothman-Iliff",
      "Danielle Kuti"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Anthony Solares",
      "Matthew Buffolino"
     ],
     "a": [
      "Brandon Calmo",
      "Ben Cortes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Eric Goldman",
      "Juan Uribe"
     ],
     "a": [
      "Ethan Macedo",
      "Kevin Lew"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Clarisse Espiritu",
      "Anthony Solares"
     ],
     "a": [
      "Brianna Zenna",
      "Ben Cortes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Veronica Rosas",
      "Matthew Buffolino"
     ],
     "a": [
      "Christina Rothman-Iliff",
      "Brandon Calmo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Supriya Kothakonda",
      "Eric Goldman"
     ],
     "a": [
      "Danielle Kuti",
      "Kevin Emig"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Nina Donnelly",
      "Juan Uribe"
     ],
     "a": [
      "Anna Arcaro",
      "Ethan Macedo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Clarisse Espiritu",
      "Veronica Rosas"
     ],
     "a": [
      "Christina Rothman-Iliff",
      "Brianna Zenna"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Sue Caputo",
      "Nina Donnelly"
     ],
     "a": [
      "Ola Cauble",
      "Anna Arcaro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Anthony Solares",
      "Eric Goldman"
     ],
     "a": [
      "Brandon Calmo",
      "Kevin Emig"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Matthew Buffolino",
      "Juan Uribe"
     ],
     "a": [
      "Ben Cortes",
      "Kevin Lew"
     ]
    }
   ],
   "subs": [
    "Ola Cauble",
    "Kevin Lew",
    "Eric Goldman",
    "Matthew Buffolino"
   ]
  },
  {
   "result": "away",
   "week": 7,
   "home": "The Three-Fives",
   "away": "Smash-holes!",
   "time": "2026-08-12T19:30:00",
   "complete": true,
   "homePoints": 563,
   "awayPoints": 641,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Christina Rothman-Iliff",
      "Brandon Calmo"
     ],
     "a": [
      "Christine Cardinal",
      "Neil Dedhia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jodie Bennett",
      "Ben Cortes"
     ],
     "a": [
      "Terri Pflueger",
      "Edwin Garcia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Susan Bluni",
      "Shekhar Bansal"
     ],
     "a": [
      "Taryn Seidner",
      "William Covino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Anna Arcaro",
      "Ethan Macedo"
     ],
     "a": [
      "Sarika Nadig",
      "Robert Stoffers"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Christina Rothman-Iliff",
      "Jodie Bennett"
     ],
     "a": [
      "Christine Cardinal",
      "Terri Pflueger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Susan Bluni",
      "Anna Arcaro"
     ],
     "a": [
      "Sarika Nadig",
      "Taryn Seidner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Brandon Calmo",
      "Ben Cortes"
     ],
     "a": [
      "Neil Dedhia",
      "William Covino"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Alan Liang",
      "Shekhar Bansal"
     ],
     "a": [
      "Edwin Garcia",
      "Robert Stoffers"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jodie Bennett",
      "Ben Cortes"
     ],
     "a": [
      "Sarika Nadig",
      "Neil Dedhia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Susan Bluni",
      "Brandon Calmo"
     ],
     "a": [
      "Christine Cardinal",
      "Edwin Garcia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Christina Rothman-Iliff",
      "Alan Liang"
     ],
     "a": [
      "Terri Pflueger",
      "William Covino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Anna Arcaro",
      "Ethan Macedo"
     ],
     "a": [
      "Taryn Seidner",
      "Robert Stoffers"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jodie Bennett",
      "Anna Arcaro"
     ],
     "a": [
      "Christine Cardinal",
      "Sarika Nadig"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Christina Rothman-Iliff",
      "Susan Bluni"
     ],
     "a": [
      "Terri Pflueger",
      "Taryn Seidner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Brandon Calmo",
      "Alan Liang"
     ],
     "a": [
      "Neil Dedhia",
      "Edwin Garcia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Ethan Macedo",
      "Shekhar Bansal"
     ],
     "a": [
      "William Covino",
      "Robert Stoffers"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Christina Rothman-Iliff",
      "Ben Cortes"
     ],
     "a": [
      "Christine Cardinal",
      "Edwin Garcia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jodie Bennett",
      "Alan Liang"
     ],
     "a": [
      "Sarika Nadig",
      "Neil Dedhia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Susan Bluni",
      "Ethan Macedo"
     ],
     "a": [
      "Terri Pflueger",
      "William Covino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Anna Arcaro",
      "Shekhar Bansal"
     ],
     "a": [
      "Taryn Seidner",
      "Robert Stoffers"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Christina Rothman-Iliff",
      "Jodie Bennett"
     ],
     "a": [
      "Christine Cardinal",
      "Terri Pflueger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Susan Bluni",
      "Anna Arcaro"
     ],
     "a": [
      "Sarika Nadig",
      "Taryn Seidner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Brandon Calmo",
      "Ben Cortes"
     ],
     "a": [
      "Neil Dedhia",
      "Edwin Garcia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Ethan Macedo",
      "Shekhar Bansal"
     ],
     "a": [
      "William Covino",
      "Robert Stoffers"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Christina Rothman-Iliff",
      "Brandon Calmo"
     ],
     "a": [
      "Christine Cardinal",
      "Neil Dedhia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Susan Bluni",
      "Ben Cortes"
     ],
     "a": [
      "Sarika Nadig",
      "Edwin Garcia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jodie Bennett",
      "Alan Liang"
     ],
     "a": [
      "Terri Pflueger",
      "Robert Stoffers"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Anna Arcaro",
      "Shekhar Bansal"
     ],
     "a": [
      "Taryn Seidner",
      "William Covino"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Jodie Bennett",
      "Anna Arcaro"
     ],
     "a": [
      "Christine Cardinal",
      "Sarika Nadig"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 27,
     "as": 29,
     "h": [
      "Christina Rothman-Iliff",
      "Susan Bluni"
     ],
     "a": [
      "Terri Pflueger",
      "Taryn Seidner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Ben Cortes",
      "Ethan Macedo"
     ],
     "a": [
      "Neil Dedhia",
      "William Covino"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Brandon Calmo",
      "Alan Liang"
     ],
     "a": [
      "Edwin Garcia",
      "Robert Stoffers"
     ]
    }
   ],
   "subs": [
    "Jodie Bennett"
   ]
  },
  {
   "result": "away",
   "week": 7,
   "home": "Nets Gambit",
   "away": "Hot Ballers!",
   "time": "2026-08-12T19:30:00",
   "complete": true,
   "homePoints": 563,
   "awayPoints": 619,
   "homeGW": 11,
   "awayGW": 21,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Veronica Rosas",
      "Anthony Solares"
     ],
     "a": [
      "Ellen Venezia",
      "Danny Ruiz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Brooke Mcbride",
      "Morgan Valencia King"
     ],
     "a": [
      "Iqra Hasan-Calmo",
      "Luis Guzman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Supriya Kothakonda",
      "Aiden Murphy"
     ],
     "a": [
      "Katie O'Mara",
      "Kyle Woerner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Nina Donnelly",
      "Juan Uribe"
     ],
     "a": [
      "Angelina Mogielnicki",
      "Rakesh Roy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Veronica Rosas",
      "Brooke Mcbride"
     ],
     "a": [
      "Ellen Venezia",
      "Angelina Mogielnicki"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Rebecca Ramos",
      "Supriya Kothakonda"
     ],
     "a": [
      "Iqra Hasan-Calmo",
      "Katie O'Mara"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 28,
     "h": [
      "Anthony Solares",
      "Morgan Valencia King"
     ],
     "a": [
      "Danny Ruiz",
      "Rakesh Roy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Mason Jordan",
      "Aiden Murphy"
     ],
     "a": [
      "Luis Guzman",
      "Kyle Woerner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Veronica Rosas",
      "Morgan Valencia King"
     ],
     "a": [
      "Ellen Venezia",
      "Luis Guzman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Brooke Mcbride",
      "Anthony Solares"
     ],
     "a": [
      "Angelina Mogielnicki",
      "Danny Ruiz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Nina Donnelly",
      "Juan Uribe"
     ],
     "a": [
      "Iqra Hasan-Calmo",
      "Kyle Woerner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Rebecca Ramos",
      "Mason Jordan"
     ],
     "a": [
      "Katie O'Mara",
      "Rakesh Roy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Veronica Rosas",
      "Rebecca Ramos"
     ],
     "a": [
      "Ellen Venezia",
      "Iqra Hasan-Calmo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 0,
     "h": [
      "Nina Donnelly",
      "Supriya Kothakonda"
     ],
     "a": [
      "Angelina Mogielnicki",
      "Katie O'Mara"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Anthony Solares",
      "Mason Jordan"
     ],
     "a": [
      "Danny Ruiz",
      "Luis Guzman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Juan Uribe",
      "Aiden Murphy"
     ],
     "a": [
      "Rakesh Roy",
      "Kyle Woerner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Brooke Mcbride",
      "Morgan Valencia King"
     ],
     "a": [
      "Ellen Venezia",
      "Danny Ruiz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Rebecca Ramos",
      "Mason Jordan"
     ],
     "a": [
      "Iqra Hasan-Calmo",
      "Luis Guzman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Nina Donnelly",
      "Aiden Murphy"
     ],
     "a": [
      "Katie O'Mara",
      "Rakesh Roy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Supriya Kothakonda",
      "Juan Uribe"
     ],
     "a": [
      "Angelina Mogielnicki",
      "Kyle Woerner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Veronica Rosas",
      "Brooke Mcbride"
     ],
     "a": [
      "Ellen Venezia",
      "Iqra Hasan-Calmo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Nina Donnelly",
      "Supriya Kothakonda"
     ],
     "a": [
      "Angelina Mogielnicki",
      "Katie O'Mara"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Anthony Solares",
      "Morgan Valencia King"
     ],
     "a": [
      "Danny Ruiz",
      "Luis Guzman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Juan Uribe",
      "Aiden Murphy"
     ],
     "a": [
      "Rakesh Roy",
      "Kyle Woerner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Rebecca Ramos",
      "Anthony Solares"
     ],
     "a": [
      "Ellen Venezia",
      "Rakesh Roy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Veronica Rosas",
      "Morgan Valencia King"
     ],
     "a": [
      "Iqra Hasan-Calmo",
      "Danny Ruiz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Brooke Mcbride",
      "Aiden Murphy"
     ],
     "a": [
      "Katie O'Mara",
      "Luis Guzman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Supriya Kothakonda",
      "Mason Jordan"
     ],
     "a": [
      "Angelina Mogielnicki",
      "Kyle Woerner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Brooke Mcbride",
      "Nina Donnelly"
     ],
     "a": [
      "Ellen Venezia",
      "Angelina Mogielnicki"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Veronica Rosas",
      "Rebecca Ramos"
     ],
     "a": [
      "Iqra Hasan-Calmo",
      "Katie O'Mara"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Morgan Valencia King",
      "Juan Uribe"
     ],
     "a": [
      "Danny Ruiz",
      "Rakesh Roy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Anthony Solares",
      "Mason Jordan"
     ],
     "a": [
      "Luis Guzman",
      "Kyle Woerner"
     ]
    }
   ],
   "subs": [
    "Brooke Mcbride",
    "Rebecca Ramos"
   ]
  },
  {
   "result": "away",
   "week": 8,
   "home": "Hot Ballers!",
   "away": "The Three-Fives",
   "time": "2026-08-19T19:30:00",
   "complete": true,
   "homePoints": 573,
   "awayPoints": 624,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Brooke Mcbride",
      "Danny Ruiz"
     ],
     "a": [
      "Ola Cauble",
      "Brandon Calmo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Ellen Venezia",
      "Rakesh Roy"
     ],
     "a": [
      "Brianna Zenna",
      "Alan Liang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Angelina Mogielnicki",
      "John Sarinick"
     ],
     "a": [
      "Danielle Kuti",
      "Ben Cortes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Katie O'Mara",
      "David Armento"
     ],
     "a": [
      "Susan Bluni",
      "Kevin Emig"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Brooke Mcbride",
      "Iqra Hasan-Calmo"
     ],
     "a": [
      "Brianna Zenna",
      "Danielle Kuti"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Ellen Venezia",
      "Katie O'Mara"
     ],
     "a": [
      "Ola Cauble",
      "Anna Arcaro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Danny Ruiz",
      "Rakesh Roy"
     ],
     "a": [
      "Alan Liang",
      "Brandon Calmo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "David Armento",
      "Simon George"
     ],
     "a": [
      "Ben Cortes",
      "Gavin Jordan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Ellen Venezia",
      "Danny Ruiz"
     ],
     "a": [
      "Brianna Zenna",
      "Brandon Calmo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Brooke Mcbride",
      "Rakesh Roy"
     ],
     "a": [
      "Ola Cauble",
      "Alan Liang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Iqra Hasan-Calmo",
      "John Sarinick"
     ],
     "a": [
      "Anna Arcaro",
      "Gavin Jordan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Angelina Mogielnicki",
      "Simon George"
     ],
     "a": [
      "Susan Bluni",
      "Kevin Emig"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ellen Venezia",
      "Angelina Mogielnicki"
     ],
     "a": [
      "Danielle Kuti",
      "Susan Bluni"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Iqra Hasan-Calmo",
      "Katie O'Mara"
     ],
     "a": [
      "Ola Cauble",
      "Anna Arcaro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Danny Ruiz",
      "John Sarinick"
     ],
     "a": [
      "Alan Liang",
      "Ben Cortes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "David Armento",
      "Simon George"
     ],
     "a": [
      "Gavin Jordan",
      "Kevin Emig"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Iqra Hasan-Calmo",
      "John Sarinick"
     ],
     "a": [
      "Anna Arcaro",
      "Ben Cortes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Brooke Mcbride",
      "Rakesh Roy"
     ],
     "a": [
      "Brianna Zenna",
      "Brandon Calmo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Angelina Mogielnicki",
      "Simon George"
     ],
     "a": [
      "Danielle Kuti",
      "Kevin Emig"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Katie O'Mara",
      "David Armento"
     ],
     "a": [
      "Susan Bluni",
      "Gavin Jordan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Brooke Mcbride",
      "Ellen Venezia"
     ],
     "a": [
      "Brianna Zenna",
      "Ola Cauble"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Angelina Mogielnicki",
      "Katie O'Mara"
     ],
     "a": [
      "Danielle Kuti",
      "Susan Bluni"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Danny Ruiz",
      "John Sarinick"
     ],
     "a": [
      "Alan Liang",
      "Ben Cortes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Rakesh Roy",
      "David Armento"
     ],
     "a": [
      "Brandon Calmo",
      "Kevin Emig"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Brooke Mcbride",
      "Danny Ruiz"
     ],
     "a": [
      "Brianna Zenna",
      "Alan Liang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Ellen Venezia",
      "David Armento"
     ],
     "a": [
      "Danielle Kuti",
      "Ben Cortes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Iqra Hasan-Calmo",
      "Rakesh Roy"
     ],
     "a": [
      "Ola Cauble",
      "Brandon Calmo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Katie O'Mara",
      "Simon George"
     ],
     "a": [
      "Anna Arcaro",
      "Gavin Jordan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Brooke Mcbride",
      "Ellen Venezia"
     ],
     "a": [
      "Brianna Zenna",
      "Ola Cauble"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Iqra Hasan-Calmo",
      "Angelina Mogielnicki"
     ],
     "a": [
      "Anna Arcaro",
      "Susan Bluni"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Danny Ruiz",
      "Rakesh Roy"
     ],
     "a": [
      "Alan Liang",
      "Brandon Calmo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "John Sarinick",
      "Simon George"
     ],
     "a": [
      "Gavin Jordan",
      "Kevin Emig"
     ]
    }
   ],
   "subs": [
    "Ola Cauble",
    "Brooke Mcbride",
    "Simon George"
   ]
  },
  {
   "result": "home",
   "week": 8,
   "home": "Smash-holes!",
   "away": "Nets Gambit",
   "time": "2026-08-19T19:30:00",
   "complete": true,
   "homePoints": 673,
   "awayPoints": 595,
   "homeGW": 23,
   "awayGW": 9,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Christine Cardinal",
      "Edwin Garcia"
     ],
     "a": [
      "Clarisse Espiritu",
      "Anthony Solares"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Terri Pflueger",
      "William Covino"
     ],
     "a": [
      "Natalia Maciejewicz",
      "Morgan Valencia King"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Taryn Seidner",
      ""
     ],
     "a": [
      "Zoe Zapf",
      "Aj Donnelly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Elsie Garcia",
      "Robert Stoffers"
     ],
     "a": [
      "Supriya Kothakonda",
      "Joshua Weinstein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Terri Pflueger",
      "Taryn Seidner"
     ],
     "a": [
      "Clarisse Espiritu",
      "Supriya Kothakonda"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Christine Cardinal",
      "Sarika Nadig"
     ],
     "a": [
      "Natalia Maciejewicz",
      "Zoe Zapf"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Edwin Garcia",
      "William Covino"
     ],
     "a": [
      "Anthony Solares",
      "Morgan Valencia King"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "",
      "Ross Bienstock"
     ],
     "a": [
      "Joshua Weinstein",
      "Aiden Murphy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Terri Pflueger",
      "Edwin Garcia"
     ],
     "a": [
      "Natalia Maciejewicz",
      "Anthony Solares"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Christine Cardinal",
      "William Covino"
     ],
     "a": [
      "Clarisse Espiritu",
      "Morgan Valencia King"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Sarika Nadig",
      "Ross Bienstock"
     ],
     "a": [
      "Zoe Zapf",
      "Aj Donnelly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Elsie Garcia",
      "Robert Stoffers"
     ],
     "a": [
      "Supriya Kothakonda",
      "Aiden Murphy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Terri Pflueger",
      "Sarika Nadig"
     ],
     "a": [
      "Clarisse Espiritu",
      "Natalia Maciejewicz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Taryn Seidner",
      "Elsie Garcia"
     ],
     "a": [
      "Supriya Kothakonda",
      "Zoe Zapf"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "William Covino",
      ""
     ],
     "a": [
      "Morgan Valencia King",
      "Aj Donnelly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Robert Stoffers",
      "Ross Bienstock"
     ],
     "a": [
      "Joshua Weinstein",
      "Aiden Murphy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Christine Cardinal",
      ""
     ],
     "a": [
      "Natalia Maciejewicz",
      "Anthony Solares"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Sarika Nadig",
      "Edwin Garcia"
     ],
     "a": [
      "Clarisse Espiritu",
      "Aj Donnelly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Taryn Seidner",
      "Robert Stoffers"
     ],
     "a": [
      "Supriya Kothakonda",
      "Aiden Murphy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Elsie Garcia",
      "Ross Bienstock"
     ],
     "a": [
      "Zoe Zapf",
      "Joshua Weinstein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 29,
     "as": 27,
     "h": [
      "Christine Cardinal",
      "Terri Pflueger"
     ],
     "a": [
      "Clarisse Espiritu",
      "Natalia Maciejewicz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Taryn Seidner",
      "Elsie Garcia"
     ],
     "a": [
      "Supriya Kothakonda",
      "Zoe Zapf"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "William Covino",
      "Robert Stoffers"
     ],
     "a": [
      "Anthony Solares",
      "Aj Donnelly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Edwin Garcia",
      ""
     ],
     "a": [
      "Morgan Valencia King",
      "Joshua Weinstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Terri Pflueger",
      "William Covino"
     ],
     "a": [
      "Clarisse Espiritu",
      "Anthony Solares"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Christine Cardinal",
      "Edwin Garcia"
     ],
     "a": [
      "Natalia Maciejewicz",
      "Morgan Valencia King"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Sarika Nadig",
      ""
     ],
     "a": [
      "Supriya Kothakonda",
      "Joshua Weinstein"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Taryn Seidner",
      "Ross Bienstock"
     ],
     "a": [
      "Zoe Zapf",
      "Aiden Murphy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Christine Cardinal",
      "Sarika Nadig"
     ],
     "a": [
      "Clarisse Espiritu",
      "Supriya Kothakonda"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Terri Pflueger",
      "Elsie Garcia"
     ],
     "a": [
      "Natalia Maciejewicz",
      "Zoe Zapf"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Edwin Garcia",
      "William Covino"
     ],
     "a": [
      "Anthony Solares",
      "Morgan Valencia King"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Robert Stoffers",
      "Ross Bienstock"
     ],
     "a": [
      "Aj Donnelly",
      "Aiden Murphy"
     ]
    }
   ],
   "subs": [
    "5b496dbc-7f42-44ca-9dd2-67347090b6c5"
   ]
  }
 ],
 "playoffs": [
  {
   "result": null,
   "round": 1,
   "home": "Hot Ballers!",
   "away": "Nets Gambit",
   "time": "2026-08-21T19:30:00",
   "complete": false,
   "homeSeed": 3,
   "awaySeed": 4,
   "games": [
    {
     "t": "mixed",
     "h": [
      "Krystal Johnson",
      "Michael Johnson"
     ],
     "a": [
      "Clarisse Espiritu",
      "Eric Goldman"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Ellen Venezia",
      "John Sarinick"
     ],
     "a": [
      "Natalia Maciejewicz",
      "Matthew Buffolino"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Iqra Hasan-Calmo",
      "Danny Ruiz"
     ],
     "a": [
      "Supriya Kothakonda",
      "Aiden Murphy"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Angelina Mogielnicki",
      "Rakesh Roy"
     ],
     "a": [
      "Brooke Mcbride",
      "Juan Uribe"
     ]
    },
    {
     "t": "female",
     "h": [
      "Krystal Johnson",
      "Iqra Hasan-Calmo"
     ],
     "a": [
      "Clarisse Espiritu",
      "Brooke Mcbride"
     ]
    },
    {
     "t": "female",
     "h": [
      "Ellen Venezia",
      "Katie O'Mara"
     ],
     "a": [
      "Natalia Maciejewicz",
      "Supriya Kothakonda"
     ]
    },
    {
     "t": "male",
     "h": [
      "Michael Johnson",
      "Danny Ruiz"
     ],
     "a": [
      "Eric Goldman",
      "Matthew Buffolino"
     ]
    },
    {
     "t": "male",
     "h": [
      "John Sarinick",
      "Rakesh Roy"
     ],
     "a": [
      "Aj Donnelly",
      "Juan Uribe"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Krystal Johnson",
      "Michael Johnson"
     ],
     "a": [
      "Natalia Maciejewicz",
      "Eric Goldman"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Ellen Venezia",
      "John Sarinick"
     ],
     "a": [
      "Clarisse Espiritu",
      "Matthew Buffolino"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Katie O'Mara",
      "Danny Ruiz"
     ],
     "a": [
      "Supriya Kothakonda",
      "Aj Donnelly"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Angelina Mogielnicki",
      "Rakesh Roy"
     ],
     "a": [
      "Brooke Mcbride",
      "Aiden Murphy"
     ]
    },
    {
     "t": "female",
     "h": [
      "Ellen Venezia",
      "Iqra Hasan-Calmo"
     ],
     "a": [
      "Clarisse Espiritu",
      "Natalia Maciejewicz"
     ]
    },
    {
     "t": "female",
     "h": [
      "Katie O'Mara",
      "Angelina Mogielnicki"
     ],
     "a": [
      "Brooke Mcbride",
      "Supriya Kothakonda"
     ]
    },
    {
     "t": "male",
     "h": [
      "Michael Johnson",
      "John Sarinick"
     ],
     "a": [
      "Matthew Buffolino",
      "Aj Donnelly"
     ]
    },
    {
     "t": "male",
     "h": [
      "Danny Ruiz",
      "Rakesh Roy"
     ],
     "a": [
      "Aiden Murphy",
      "Juan Uribe"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Krystal Johnson",
      "John Sarinick"
     ],
     "a": [
      "Clarisse Espiritu",
      "Aj Donnelly"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Iqra Hasan-Calmo",
      "Michael Johnson"
     ],
     "a": [
      "Natalia Maciejewicz",
      "Eric Goldman"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Katie O'Mara",
      "Rakesh Roy"
     ],
     "a": [
      "Brooke Mcbride",
      "Aiden Murphy"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Angelina Mogielnicki",
      "Danny Ruiz"
     ],
     "a": [
      "Supriya Kothakonda",
      "Juan Uribe"
     ]
    },
    {
     "t": "female",
     "h": [
      "Krystal Johnson",
      "Ellen Venezia"
     ],
     "a": [
      "Clarisse Espiritu",
      "Brooke Mcbride"
     ]
    },
    {
     "t": "female",
     "h": [
      "Iqra Hasan-Calmo",
      "Angelina Mogielnicki"
     ],
     "a": [
      "Natalia Maciejewicz",
      "Supriya Kothakonda"
     ]
    },
    {
     "t": "male",
     "h": [
      "Michael Johnson",
      "John Sarinick"
     ],
     "a": [
      "Eric Goldman",
      "Matthew Buffolino"
     ]
    },
    {
     "t": "male",
     "h": [
      "Danny Ruiz",
      "Rakesh Roy"
     ],
     "a": [
      "Aiden Murphy",
      "Juan Uribe"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Krystal Johnson",
      "John Sarinick"
     ],
     "a": [
      "Natalia Maciejewicz",
      "Matthew Buffolino"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Ellen Venezia",
      "Rakesh Roy"
     ],
     "a": [
      "Supriya Kothakonda",
      "Eric Goldman"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Iqra Hasan-Calmo",
      "Michael Johnson"
     ],
     "a": [
      "Clarisse Espiritu",
      "Aj Donnelly"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Katie O'Mara",
      "Danny Ruiz"
     ],
     "a": [
      "Brooke Mcbride",
      "Juan Uribe"
     ]
    },
    {
     "t": "female",
     "h": [
      "Krystal Johnson",
      "Ellen Venezia"
     ],
     "a": [
      "Clarisse Espiritu",
      "Natalia Maciejewicz"
     ]
    },
    {
     "t": "female",
     "h": [
      "Katie O'Mara",
      "Angelina Mogielnicki"
     ],
     "a": [
      "Brooke Mcbride",
      "Supriya Kothakonda"
     ]
    },
    {
     "t": "male",
     "h": [
      "Michael Johnson",
      "Danny Ruiz"
     ],
     "a": [
      "Matthew Buffolino",
      "Aiden Murphy"
     ]
    },
    {
     "t": "male",
     "h": [
      "John Sarinick",
      "Rakesh Roy"
     ],
     "a": [
      "Eric Goldman",
      "Aj Donnelly"
     ]
    }
   ]
  },
  {
   "result": null,
   "round": 1,
   "home": "Smash-holes!",
   "away": "The Three-Fives",
   "time": "2026-08-21T19:30:00",
   "complete": false,
   "homeSeed": 1,
   "awaySeed": 2,
   "games": [
    {
     "t": "mixed",
     "h": [
      "Christine Cardinal",
      "Edwin Garcia"
     ],
     "a": [
      "Brianna Zenna",
      "Alan Liang"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Terri Pflueger",
      ""
     ],
     "a": [
      "Danielle Kuti",
      "Ben Cortes"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Taryn Seidner",
      "Ross Bienstock"
     ],
     "a": [
      "Deborah Brown",
      "Kevin Emig"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Sarika Nadig",
      "Robert Stoffers"
     ],
     "a": [
      "Susan Bluni",
      "Gavin Jordan"
     ]
    },
    {
     "t": "female",
     "h": [
      "Christine Cardinal",
      "Sarika Nadig"
     ],
     "a": [
      "Brianna Zenna",
      "Danielle Kuti"
     ]
    },
    {
     "t": "female",
     "h": [
      "Terri Pflueger",
      "Taryn Seidner"
     ],
     "a": [
      "Jen Ogorzat",
      "Deborah Brown"
     ]
    },
    {
     "t": "male",
     "h": [
      "Edwin Garcia",
      "Robert Stoffers"
     ],
     "a": [
      "Alan Liang",
      "Ben Cortes"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      "Ross Bienstock"
     ],
     "a": [
      "Kevin Lew",
      "Kevin Emig"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Christine Cardinal",
      ""
     ],
     "a": [
      "Brianna Zenna",
      "Ben Cortes"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Sarika Nadig",
      "Edwin Garcia"
     ],
     "a": [
      "Danielle Kuti",
      "Alan Liang"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Terri Pflueger",
      "Ross Bienstock"
     ],
     "a": [
      "Susan Bluni",
      "Gavin Jordan"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Taryn Seidner",
      "Robert Stoffers"
     ],
     "a": [
      "Jen Ogorzat",
      "Kevin Lew"
     ]
    },
    {
     "t": "female",
     "h": [
      "Christine Cardinal",
      "Terri Pflueger"
     ],
     "a": [
      "Brianna Zenna",
      "Jen Ogorzat"
     ]
    },
    {
     "t": "female",
     "h": [
      "Sarika Nadig",
      "Taryn Seidner"
     ],
     "a": [
      "Susan Bluni",
      "Deborah Brown"
     ]
    },
    {
     "t": "male",
     "h": [
      "Edwin Garcia",
      ""
     ],
     "a": [
      "Alan Liang",
      "Kevin Lew"
     ]
    },
    {
     "t": "male",
     "h": [
      "Robert Stoffers",
      "Ross Bienstock"
     ],
     "a": [
      "Gavin Jordan",
      "Kevin Emig"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Christine Cardinal",
      "Edwin Garcia"
     ],
     "a": [
      "Danielle Kuti",
      "Ben Cortes"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Terri Pflueger",
      ""
     ],
     "a": [
      "Jen Ogorzat",
      "Kevin Lew"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Taryn Seidner",
      "Robert Stoffers"
     ],
     "a": [
      "Susan Bluni",
      "Kevin Emig"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Sarika Nadig",
      "Ross Bienstock"
     ],
     "a": [
      "Deborah Brown",
      "Gavin Jordan"
     ]
    },
    {
     "t": "female",
     "h": [
      "Christine Cardinal",
      "Terri Pflueger"
     ],
     "a": [
      "Brianna Zenna",
      "Danielle Kuti"
     ]
    },
    {
     "t": "female",
     "h": [
      "Sarika Nadig",
      "Taryn Seidner"
     ],
     "a": [
      "Susan Bluni",
      "Deborah Brown"
     ]
    },
    {
     "t": "male",
     "h": [
      "Edwin Garcia",
      ""
     ],
     "a": [
      "Alan Liang",
      "Ben Cortes"
     ]
    },
    {
     "t": "male",
     "h": [
      "Robert Stoffers",
      "Ross Bienstock"
     ],
     "a": [
      "Gavin Jordan",
      "Kevin Emig"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Christine Cardinal",
      "Robert Stoffers"
     ],
     "a": [
      "Jen Ogorzat",
      "Alan Liang"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Terri Pflueger",
      "Edwin Garcia"
     ],
     "a": [
      "Brianna Zenna",
      "Ben Cortes"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Taryn Seidner",
      ""
     ],
     "a": [
      "Danielle Kuti",
      "Kevin Emig"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Sarika Nadig",
      "Ross Bienstock"
     ],
     "a": [
      "Deborah Brown",
      "Kevin Lew"
     ]
    },
    {
     "t": "female",
     "h": [
      "Christine Cardinal",
      "Sarika Nadig"
     ],
     "a": [
      "Danielle Kuti",
      "Susan Bluni"
     ]
    },
    {
     "t": "female",
     "h": [
      "Terri Pflueger",
      "Taryn Seidner"
     ],
     "a": [
      "Brianna Zenna",
      "Jen Ogorzat"
     ]
    },
    {
     "t": "male",
     "h": [
      "Edwin Garcia",
      "Robert Stoffers"
     ],
     "a": [
      "Ben Cortes",
      "Gavin Jordan"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      "Ross Bienstock"
     ],
     "a": [
      "Alan Liang",
      "Kevin Lew"
     ]
    }
   ]
  }
 ],
 "extraPlayerIds": {
  "Michael Johnson": "4f98756a-9726-48fe-a241-2579f96eee16",
  "Amanda Herrera": "65ceb6a3-c5b6-4264-a138-d4ef761e47c6",
  "Deborah Brown": "9a7a589a-396f-426f-b146-9b71ccc8492e",
  "Kathryn Mcgill-Armento": "9b1a8682-541b-40fa-9353-882b07a6b405",
  "Krystal Johnson": "a4fb87af-daed-4bc9-9027-2a4b215c060c",
  "Jen Ogorzat": "f0f8c802-b218-4a89-a9a8-cc127214c1d5"
 },
 "meta": {
  "matchesPlayed": 16,
  "provisionalMatches": 0,
  "weeks": "1-8",
  "totalPlayers": 70,
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
  "divisionSlug": "c1b3f9c1",
  "hasPlayoffs": true,
  "typicalDay": "Wednesdays",
  "detailFile": "detail-c1b3f9c1.js",
  "clubName": "Robbinsville Pickle House",
  "divisionName": "3.25 - 3.99",
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
  DATA.meta.asOf = "2026-08-28T16:18:32.705Z";
  window.DATA = DATA;
  window.CPL_DATASETS = window.CPL_DATASETS || {};
  window.CPL_DATASETS["c1b3f9c1"] = DATA;
})();
