(function () {
  const DATA = {
 "players": [
  {
   "name": "Ben Mead",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 11,
   "losses": 0,
   "pointsWon": 231,
   "totalPointsAgainst": 171,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 0,
   "clutchWins": 4,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 60,
   "ppg": 21,
   "leagueRank": 5,
   "rating": 2.5,
   "ratingGames": 11,
   "confidence": 67,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.9,
   "playerId": "7858dda8-168b-4a84-8d5d-7a6571e9313a"
  },
  {
   "name": "Joshua Ahn",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 93,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 33,
   "ppg": 21,
   "leagueRank": 23,
   "rating": 3,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.1,
   "playerId": "fff3fe71-d4a6-4103-9290-0ef57035471c"
  },
  {
   "name": "Shelah Wallace",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 98,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 28,
   "ppg": 21,
   "leagueRank": 30,
   "rating": 2.4,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.3,
   "playerId": "fa519fb1-87ca-4a7b-9265-4aba9807929f"
  },
  {
   "name": "Marina Cozac",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro The Factory",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 13,
   "losses": 1,
   "pointsWon": 292,
   "totalPointsAgainst": 182,
   "mixedWins": 8,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 92.9,
   "diff": 110,
   "ppg": 20.9,
   "leagueRank": 1,
   "rating": 4.2,
   "ratingGames": 14,
   "confidence": 73,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -0.6,
   "playerId": "13c8aeab-aa52-4bc2-bf23-96a2cabe4181"
  },
  {
   "name": "Paula Ro",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 18,
   "losses": 2,
   "pointsWon": 407,
   "totalPointsAgainst": 320,
   "mixedWins": 7,
   "mixedLosses": 1,
   "genderWins": 11,
   "genderLosses": 1,
   "clutchWins": 7,
   "clutchLosses": 1,
   "winPct": 90,
   "diff": 87,
   "ppg": 20.4,
   "leagueRank": 4,
   "rating": 2.4,
   "ratingGames": 20,
   "confidence": 77,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.1,
   "playerId": "3cf3093b-1667-4242-9ad5-1d72fc5d24f8"
  },
  {
   "name": "Kaylyn Swankoski",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro The Factory",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 26,
   "losses": 3,
   "pointsWon": 598,
   "totalPointsAgainst": 458,
   "mixedWins": 12,
   "mixedLosses": 1,
   "genderWins": 14,
   "genderLosses": 2,
   "clutchWins": 6,
   "clutchLosses": 2,
   "winPct": 89.7,
   "diff": 140,
   "ppg": 20.6,
   "leagueRank": 2,
   "rating": 2.6,
   "ratingGames": 29,
   "confidence": 83,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.6,
   "playerId": "72949bef-7cab-4942-ab45-e5203024a8d5"
  },
  {
   "name": "Elliott Albanese",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 163,
   "totalPointsAgainst": 137,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 87.5,
   "diff": 26,
   "ppg": 20.4,
   "leagueRank": 44,
   "rating": 0.4,
   "ratingGames": 8,
   "confidence": 59,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -1,
   "playerId": "6af88387-5e2b-4ea7-b732-22885e4931a8"
  },
  {
   "name": "Yuki Kim",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 35,
   "wins": 30,
   "losses": 5,
   "pointsWon": 714,
   "totalPointsAgainst": 554,
   "mixedWins": 16,
   "mixedLosses": 4,
   "genderWins": 14,
   "genderLosses": 1,
   "clutchWins": 8,
   "clutchLosses": 2,
   "winPct": 85.7,
   "diff": 160,
   "ppg": 20.4,
   "leagueRank": 3,
   "rating": 3.4,
   "ratingGames": 35,
   "confidence": 85,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.2,
   "playerId": "afec0287-b62d-4aaf-977f-afb96aed0e17"
  },
  {
   "name": "Chad Durkin",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 12,
   "losses": 2,
   "pointsWon": 282,
   "totalPointsAgainst": 217,
   "mixedWins": 6,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 85.7,
   "diff": 65,
   "ppg": 20.1,
   "leagueRank": 7,
   "rating": 2.7,
   "ratingGames": 14,
   "confidence": 72,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.2,
   "playerId": "54ed1c79-aaa0-486d-851b-d5a4db375b94"
  },
  {
   "name": "Yoyo Shen",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 33,
   "wins": 28,
   "losses": 5,
   "pointsWon": 675,
   "totalPointsAgainst": 545,
   "mixedWins": 17,
   "mixedLosses": 2,
   "genderWins": 11,
   "genderLosses": 3,
   "clutchWins": 11,
   "clutchLosses": 2,
   "winPct": 84.8,
   "diff": 130,
   "ppg": 20.5,
   "leagueRank": 6,
   "rating": 2.5,
   "ratingGames": 33,
   "confidence": 85,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.1,
   "playerId": "9d47a1aa-c44c-4ddd-8953-dc40f79b1016"
  },
  {
   "name": "Conor Landrigan",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro The Factory",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 11,
   "losses": 2,
   "pointsWon": 266,
   "totalPointsAgainst": 213,
   "mixedWins": 6,
   "mixedLosses": 1,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 84.6,
   "diff": 53,
   "ppg": 20.5,
   "leagueRank": 8,
   "rating": 2.3,
   "ratingGames": 13,
   "confidence": 69,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.4,
   "playerId": "931df78f-b759-497d-ba8d-be7d3f41f668"
  },
  {
   "name": "Jase Volz",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 123,
   "totalPointsAgainst": 96,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 27,
   "ppg": 20.5,
   "leagueRank": 64,
   "rating": 1.1,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.9,
   "playerId": "66f782cc-bcee-4ebf-849a-649a37bf8a8d"
  },
  {
   "name": "Meghan Mediratta",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 12,
   "losses": 3,
   "pointsWon": 304,
   "totalPointsAgainst": 257,
   "mixedWins": 6,
   "mixedLosses": 1,
   "genderWins": 6,
   "genderLosses": 2,
   "clutchWins": 6,
   "clutchLosses": 2,
   "winPct": 80,
   "diff": 47,
   "ppg": 20.3,
   "leagueRank": 14,
   "rating": 1.2,
   "ratingGames": 15,
   "confidence": 73,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": -0.1,
   "playerId": "abc80b43-6769-4254-ae9a-b4b63b06de1d"
  },
  {
   "name": "Cristi Landrigan",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro The Factory",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 15,
   "losses": 4,
   "pointsWon": 380,
   "totalPointsAgainst": 321,
   "mixedWins": 10,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 4,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 78.9,
   "diff": 59,
   "ppg": 20,
   "leagueRank": 26,
   "rating": -0.2,
   "ratingGames": 19,
   "confidence": 77,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -1.3,
   "playerId": "1be028eb-1b92-4961-b508-fa0879c78017"
  },
  {
   "name": "Anita Buggins",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 19,
   "wins": 15,
   "losses": 4,
   "pointsWon": 382,
   "totalPointsAgainst": 338,
   "mixedWins": 7,
   "mixedLosses": 3,
   "genderWins": 8,
   "genderLosses": 1,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 78.9,
   "diff": 44,
   "ppg": 20.1,
   "leagueRank": 13,
   "rating": 2.6,
   "ratingGames": 19,
   "confidence": 77,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.3,
   "playerId": "2ea90a18-1ef3-4ade-a855-2a3fd178abd7"
  },
  {
   "name": "Teresa Wang",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 22,
   "losses": 6,
   "pointsWon": 571,
   "totalPointsAgainst": 472,
   "mixedWins": 12,
   "mixedLosses": 4,
   "genderWins": 10,
   "genderLosses": 2,
   "clutchWins": 8,
   "clutchLosses": 2,
   "winPct": 78.6,
   "diff": 99,
   "ppg": 20.4,
   "leagueRank": 9,
   "rating": 1.5,
   "ratingGames": 28,
   "confidence": 83,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": -0.1,
   "playerId": "741de6b9-5fe7-49aa-9c55-5ff4050bb7a1"
  },
  {
   "name": "Dylan Ashbach",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro The Factory",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 11,
   "losses": 3,
   "pointsWon": 282,
   "totalPointsAgainst": 218,
   "mixedWins": 7,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 78.6,
   "diff": 64,
   "ppg": 20.1,
   "leagueRank": 11,
   "rating": 1.1,
   "ratingGames": 14,
   "confidence": 72,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": -0.7,
   "playerId": "9c41a810-1be6-4e08-8a29-51558c29cb86"
  },
  {
   "name": "Hruday Vemparala",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 11,
   "losses": 3,
   "pointsWon": 278,
   "totalPointsAgainst": 232,
   "mixedWins": 7,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 78.6,
   "diff": 46,
   "ppg": 19.9,
   "leagueRank": 20,
   "rating": 1.4,
   "ratingGames": 14,
   "confidence": 72,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.2,
   "playerId": "bc3db6dc-48f5-46f3-aec3-638d15ca7285"
  },
  {
   "name": "Varun Prakash",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro The Factory",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 20,
   "losses": 6,
   "pointsWon": 527,
   "totalPointsAgainst": 439,
   "mixedWins": 10,
   "mixedLosses": 1,
   "genderWins": 10,
   "genderLosses": 5,
   "clutchWins": 7,
   "clutchLosses": 4,
   "winPct": 76.9,
   "diff": 88,
   "ppg": 20.3,
   "leagueRank": 16,
   "rating": 2.4,
   "ratingGames": 26,
   "confidence": 81,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.2,
   "playerId": "67dbfc4f-20f7-4299-bc2f-6cc70cf747ab"
  },
  {
   "name": "Kenoa Tio",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro The Factory",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 20,
   "losses": 6,
   "pointsWon": 529,
   "totalPointsAgainst": 460,
   "mixedWins": 9,
   "mixedLosses": 3,
   "genderWins": 11,
   "genderLosses": 3,
   "clutchWins": 10,
   "clutchLosses": 4,
   "winPct": 76.9,
   "diff": 69,
   "ppg": 20.3,
   "leagueRank": 21,
   "rating": 1.4,
   "ratingGames": 26,
   "confidence": 82,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.1,
   "playerId": "10e9980e-34bf-43ea-b246-3280bca79efb"
  },
  {
   "name": "Michaela Pierznik",
   "gender": "Female",
   "team": "Jersey Devil",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 10,
   "losses": 3,
   "pointsWon": 261,
   "totalPointsAgainst": 233,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 0,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 76.9,
   "diff": 28,
   "ppg": 20.1,
   "leagueRank": 17,
   "rating": 1.4,
   "ratingGames": 13,
   "confidence": 70,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": -0.7,
   "playerId": "c885c4ae-2685-4fc8-9b35-40cf9f465915"
  },
  {
   "name": "Kerrin Maurer",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 22,
   "losses": 7,
   "pointsWon": 588,
   "totalPointsAgainst": 472,
   "mixedWins": 9,
   "mixedLosses": 5,
   "genderWins": 13,
   "genderLosses": 2,
   "clutchWins": 5,
   "clutchLosses": 3,
   "winPct": 75.9,
   "diff": 116,
   "ppg": 20.3,
   "leagueRank": 10,
   "rating": 3.2,
   "ratingGames": 29,
   "confidence": 83,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.2,
   "playerId": "1d63ce3d-20c2-40ae-94ca-e8e6e458004e"
  },
  {
   "name": "Emily Babinsky",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 24,
   "losses": 8,
   "pointsWon": 631,
   "totalPointsAgainst": 570,
   "mixedWins": 10,
   "mixedLosses": 6,
   "genderWins": 14,
   "genderLosses": 2,
   "clutchWins": 11,
   "clutchLosses": 2,
   "winPct": 75,
   "diff": 61,
   "ppg": 19.7,
   "leagueRank": 29,
   "rating": 0.4,
   "ratingGames": 32,
   "confidence": 85,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.3,
   "playerId": "d0e2c1ea-529d-4364-b521-cb205ecdded3"
  },
  {
   "name": "Gift Horn",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 6,
   "losses": 2,
   "pointsWon": 164,
   "totalPointsAgainst": 130,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 75,
   "diff": 34,
   "ppg": 20.5,
   "leagueRank": 60,
   "rating": 0.8,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -0.8,
   "playerId": "9eba6702-22e5-4b53-b6f0-acc44ac2034d"
  },
  {
   "name": "Tim Dowd",
   "gender": "Male",
   "team": "Flemington",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 6,
   "losses": 2,
   "pointsWon": 155,
   "totalPointsAgainst": 136,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 75,
   "diff": 19,
   "ppg": 19.4,
   "leagueRank": 66,
   "rating": 1,
   "ratingGames": 8,
   "confidence": 53,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.8,
   "playerId": "b7555b30-f1b5-4d44-9eff-dffd3e1b1b28"
  },
  {
   "name": "Nick Meale",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 29,
   "losses": 10,
   "pointsWon": 782,
   "totalPointsAgainst": 620,
   "mixedWins": 14,
   "mixedLosses": 5,
   "genderWins": 15,
   "genderLosses": 5,
   "clutchWins": 6,
   "clutchLosses": 6,
   "winPct": 74.4,
   "diff": 162,
   "ppg": 20.1,
   "leagueRank": 12,
   "rating": 2.7,
   "ratingGames": 39,
   "confidence": 86,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.1,
   "playerId": "ec0bad09-8256-49b3-ae86-3add22dd995f"
  },
  {
   "name": "Annemarie Mccartney",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 14,
   "losses": 5,
   "pointsWon": 385,
   "totalPointsAgainst": 298,
   "mixedWins": 7,
   "mixedLosses": 2,
   "genderWins": 7,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 73.7,
   "diff": 87,
   "ppg": 20.3,
   "leagueRank": 15,
   "rating": 2.1,
   "ratingGames": 19,
   "confidence": 75,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.8,
   "playerId": "d08d78db-7d20-4dc2-a37b-41841c4624fd"
  },
  {
   "name": "Jordan Denish",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 8,
   "losses": 3,
   "pointsWon": 220,
   "totalPointsAgainst": 207,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 6,
   "genderLosses": 2,
   "clutchWins": 6,
   "clutchLosses": 1,
   "winPct": 72.7,
   "diff": 13,
   "ppg": 20,
   "leagueRank": 47,
   "rating": 1.9,
   "ratingGames": 11,
   "confidence": 66,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 1.2,
   "playerId": "8ae25144-966d-4de1-9cb3-513f7f217170"
  },
  {
   "name": "Lou Frignito",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 32,
   "wins": 23,
   "losses": 9,
   "pointsWon": 647,
   "totalPointsAgainst": 520,
   "mixedWins": 13,
   "mixedLosses": 3,
   "genderWins": 10,
   "genderLosses": 6,
   "clutchWins": 5,
   "clutchLosses": 6,
   "winPct": 71.9,
   "diff": 127,
   "ppg": 20.2,
   "leagueRank": 18,
   "rating": 1.9,
   "ratingGames": 32,
   "confidence": 84,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.3,
   "playerId": "1afca308-dca6-4828-946a-0ca6ad1b0c44"
  },
  {
   "name": "Alyssa Boyle",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 14,
   "wins": 10,
   "losses": 4,
   "pointsWon": 279,
   "totalPointsAgainst": 238,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 6,
   "genderLosses": 2,
   "clutchWins": 5,
   "clutchLosses": 1,
   "winPct": 71.4,
   "diff": 41,
   "ppg": 19.9,
   "leagueRank": 25,
   "rating": 1.8,
   "ratingGames": 14,
   "confidence": 72,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.5,
   "playerId": "22123177-1eb2-4285-bc92-f75799e175dd"
  },
  {
   "name": "Jack Blumberg",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 15,
   "losses": 6,
   "pointsWon": 418,
   "totalPointsAgainst": 382,
   "mixedWins": 9,
   "mixedLosses": 2,
   "genderWins": 6,
   "genderLosses": 4,
   "clutchWins": 7,
   "clutchLosses": 3,
   "winPct": 71.4,
   "diff": 36,
   "ppg": 19.9,
   "leagueRank": 35,
   "rating": 0.3,
   "ratingGames": 21,
   "confidence": 78,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.4,
   "playerId": "f2929b28-a6ee-45e5-9846-da957b6d8734"
  },
  {
   "name": "Chris Long",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 15,
   "losses": 6,
   "pointsWon": 422,
   "totalPointsAgainst": 396,
   "mixedWins": 7,
   "mixedLosses": 4,
   "genderWins": 8,
   "genderLosses": 2,
   "clutchWins": 9,
   "clutchLosses": 4,
   "winPct": 71.4,
   "diff": 26,
   "ppg": 20.1,
   "leagueRank": 31,
   "rating": 1.6,
   "ratingGames": 21,
   "confidence": 78,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 1.1,
   "playerId": "f7f6ce2d-1cbb-45f9-ad8f-e42b89b99554"
  },
  {
   "name": "Gissel Escalante",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 16,
   "losses": 7,
   "pointsWon": 460,
   "totalPointsAgainst": 387,
   "mixedWins": 7,
   "mixedLosses": 4,
   "genderWins": 9,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 69.6,
   "diff": 73,
   "ppg": 20,
   "leagueRank": 27,
   "rating": 3.2,
   "ratingGames": 23,
   "confidence": 80,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.8,
   "playerId": "63221cc8-e303-4675-8dde-4fc77e871627"
  },
  {
   "name": "Maanav Shah",
   "gender": "Male",
   "team": "Monroe",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 25,
   "losses": 11,
   "pointsWon": 723,
   "totalPointsAgainst": 627,
   "mixedWins": 14,
   "mixedLosses": 4,
   "genderWins": 11,
   "genderLosses": 7,
   "clutchWins": 10,
   "clutchLosses": 6,
   "winPct": 69.4,
   "diff": 96,
   "ppg": 20.1,
   "leagueRank": 22,
   "rating": 3.3,
   "ratingGames": 36,
   "confidence": 84,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.5,
   "playerId": "0a1270b0-26f6-4328-85bc-bf3f329a746e"
  },
  {
   "name": "William Hayes",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 9,
   "losses": 4,
   "pointsWon": 259,
   "totalPointsAgainst": 216,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 69.2,
   "diff": 43,
   "ppg": 19.9,
   "leagueRank": 28,
   "rating": 1.3,
   "ratingGames": 13,
   "confidence": 70,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.5,
   "playerId": "4dfed1a1-5375-446c-98bc-69402e70e1d5"
  },
  {
   "name": "Robert Khalev",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 9,
   "losses": 4,
   "pointsWon": 250,
   "totalPointsAgainst": 251,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 1,
   "clutchWins": 6,
   "clutchLosses": 0,
   "winPct": 69.2,
   "diff": -1,
   "ppg": 19.2,
   "leagueRank": 46,
   "rating": 0.7,
   "ratingGames": 13,
   "confidence": 71,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": -0.1,
   "playerId": "094c3b61-96e3-48c6-8172-10b7eaf528f4"
  },
  {
   "name": "Taylor Hartman",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 29,
   "wins": 20,
   "losses": 9,
   "pointsWon": 572,
   "totalPointsAgainst": 520,
   "mixedWins": 9,
   "mixedLosses": 4,
   "genderWins": 11,
   "genderLosses": 5,
   "clutchWins": 9,
   "clutchLosses": 3,
   "winPct": 69,
   "diff": 52,
   "ppg": 19.7,
   "leagueRank": 38,
   "rating": 1.1,
   "ratingGames": 29,
   "confidence": 84,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.4,
   "playerId": "3bf2f55b-b253-4d2a-b1b9-d5953ef1b8ec"
  },
  {
   "name": "Andrew Wakefield",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro The Factory",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 25,
   "wins": 17,
   "losses": 8,
   "pointsWon": 491,
   "totalPointsAgainst": 454,
   "mixedWins": 10,
   "mixedLosses": 4,
   "genderWins": 7,
   "genderLosses": 4,
   "clutchWins": 7,
   "clutchLosses": 4,
   "winPct": 68,
   "diff": 37,
   "ppg": 19.6,
   "leagueRank": 32,
   "rating": 0.9,
   "ratingGames": 25,
   "confidence": 81,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.2,
   "playerId": "5f429a7f-18c6-49e3-a804-6aa2a930f09c"
  },
  {
   "name": "Hannah Nussbaum",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro The Factory",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 17,
   "losses": 8,
   "pointsWon": 487,
   "totalPointsAgainst": 461,
   "mixedWins": 7,
   "mixedLosses": 4,
   "genderWins": 10,
   "genderLosses": 4,
   "clutchWins": 9,
   "clutchLosses": 2,
   "winPct": 68,
   "diff": 26,
   "ppg": 19.5,
   "leagueRank": 42,
   "rating": 0.6,
   "ratingGames": 25,
   "confidence": 80,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.1,
   "playerId": "84b7c449-501c-438d-a3eb-ee67cc92fa0e"
  },
  {
   "name": "Zach Hollmann",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 24,
   "losses": 12,
   "pointsWon": 718,
   "totalPointsAgainst": 643,
   "mixedWins": 16,
   "mixedLosses": 1,
   "genderWins": 8,
   "genderLosses": 11,
   "clutchWins": 11,
   "clutchLosses": 8,
   "winPct": 66.7,
   "diff": 75,
   "ppg": 19.9,
   "leagueRank": 33,
   "rating": 1.6,
   "ratingGames": 36,
   "confidence": 86,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.3,
   "playerId": "8aef2d8a-0bd4-45df-b5d1-1a120a81ef0f"
  },
  {
   "name": "Jenna Irwin",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 10,
   "losses": 5,
   "pointsWon": 305,
   "totalPointsAgainst": 231,
   "mixedWins": 4,
   "mixedLosses": 4,
   "genderWins": 6,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 5,
   "winPct": 66.7,
   "diff": 74,
   "ppg": 20.3,
   "leagueRank": 24,
   "rating": 3.5,
   "ratingGames": 15,
   "confidence": 73,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.1,
   "playerId": "85e52e3b-5238-4583-8d1a-cc57f8218ef6"
  },
  {
   "name": "Arianna Haresign",
   "gender": "Female",
   "team": "Jersey Devil",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 14,
   "losses": 7,
   "pointsWon": 422,
   "totalPointsAgainst": 353,
   "mixedWins": 9,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 4,
   "clutchWins": 5,
   "clutchLosses": 5,
   "winPct": 66.7,
   "diff": 69,
   "ppg": 20.1,
   "leagueRank": 19,
   "rating": 3.3,
   "ratingGames": 21,
   "confidence": 78,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.4,
   "playerId": "556f84fc-4f7c-4199-a104-6e906d71605c"
  },
  {
   "name": "Rayna Baizman",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro The Factory",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 14,
   "losses": 7,
   "pointsWon": 406,
   "totalPointsAgainst": 364,
   "mixedWins": 5,
   "mixedLosses": 5,
   "genderWins": 9,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 66.7,
   "diff": 42,
   "ppg": 19.3,
   "leagueRank": 50,
   "rating": -0.7,
   "ratingGames": 21,
   "confidence": 78,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": -0.7,
   "playerId": "108620c9-1cbb-4ea0-846c-bc781f1decea"
  },
  {
   "name": "Charlotte Healey",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 12,
   "losses": 6,
   "pointsWon": 352,
   "totalPointsAgainst": 310,
   "mixedWins": 8,
   "mixedLosses": 4,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 66.7,
   "diff": 42,
   "ppg": 19.6,
   "leagueRank": 36,
   "rating": 0.5,
   "ratingGames": 18,
   "confidence": 76,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.4,
   "playerId": "bbaf3def-a87b-4537-8701-4f5ae0108b1f"
  },
  {
   "name": "Alexander Tong",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 12,
   "losses": 6,
   "pointsWon": 351,
   "totalPointsAgainst": 322,
   "mixedWins": 6,
   "mixedLosses": 3,
   "genderWins": 6,
   "genderLosses": 3,
   "clutchWins": 5,
   "clutchLosses": 3,
   "winPct": 66.7,
   "diff": 29,
   "ppg": 19.5,
   "leagueRank": 34,
   "rating": 2.3,
   "ratingGames": 18,
   "confidence": 77,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.6,
   "playerId": "d8d64dde-4ffb-4c49-aaa6-537b09c9c8d5"
  },
  {
   "name": "Eric Lin",
   "gender": "Male",
   "team": "Monroe",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 12,
   "wins": 8,
   "losses": 4,
   "pointsWon": 240,
   "totalPointsAgainst": 223,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 66.7,
   "diff": 17,
   "ppg": 20,
   "leagueRank": 39,
   "rating": 0.5,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.2,
   "playerId": "4ce1c715-b187-47c5-b6dc-d079f802499d"
  },
  {
   "name": "Steven Fernandez",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro The Factory",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 119,
   "totalPointsAgainst": 113,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 6,
   "ppg": 19.8,
   "leagueRank": 129,
   "rating": -0.6,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.8,
   "playerId": "7a9bc90f-45eb-410a-a56b-a1b7c9a8145c"
  },
  {
   "name": "Deepak Sunku",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 118,
   "totalPointsAgainst": 115,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 3,
   "ppg": 19.7,
   "leagueRank": 120,
   "rating": 0.3,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.1,
   "playerId": "ce590106-6f19-43b7-8a91-4dc31d28eb31"
  },
  {
   "name": "Lissa Eagles",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 21,
   "losses": 11,
   "pointsWon": 619,
   "totalPointsAgainst": 563,
   "mixedWins": 8,
   "mixedLosses": 7,
   "genderWins": 13,
   "genderLosses": 4,
   "clutchWins": 7,
   "clutchLosses": 3,
   "winPct": 65.6,
   "diff": 56,
   "ppg": 19.3,
   "leagueRank": 45,
   "rating": 0.6,
   "ratingGames": 32,
   "confidence": 84,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.2,
   "playerId": "9ec39678-a120-45de-b8a5-897b8cf900cd"
  },
  {
   "name": "Michael Li",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 19,
   "losses": 10,
   "pointsWon": 564,
   "totalPointsAgainst": 503,
   "mixedWins": 11,
   "mixedLosses": 3,
   "genderWins": 8,
   "genderLosses": 7,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 65.5,
   "diff": 61,
   "ppg": 19.4,
   "leagueRank": 37,
   "rating": 2.5,
   "ratingGames": 29,
   "confidence": 83,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.9,
   "playerId": "dc81629b-4ff7-45c4-b38e-b3b836bc0769"
  },
  {
   "name": "Manny Lai",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 23,
   "wins": 15,
   "losses": 8,
   "pointsWon": 442,
   "totalPointsAgainst": 407,
   "mixedWins": 7,
   "mixedLosses": 4,
   "genderWins": 8,
   "genderLosses": 4,
   "clutchWins": 5,
   "clutchLosses": 1,
   "winPct": 65.2,
   "diff": 35,
   "ppg": 19.2,
   "leagueRank": 53,
   "rating": 0.6,
   "ratingGames": 23,
   "confidence": 79,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.2,
   "playerId": "f2a53ee2-a602-4e58-8326-6d0624af34af"
  },
  {
   "name": "Patrick Ryan",
   "gender": "Male",
   "team": "Flemington",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 40,
   "wins": 26,
   "losses": 14,
   "pointsWon": 775,
   "totalPointsAgainst": 720,
   "mixedWins": 11,
   "mixedLosses": 9,
   "genderWins": 15,
   "genderLosses": 5,
   "clutchWins": 7,
   "clutchLosses": 7,
   "winPct": 65,
   "diff": 55,
   "ppg": 19.4,
   "leagueRank": 43,
   "rating": 2.1,
   "ratingGames": 40,
   "confidence": 87,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.2,
   "playerId": "8344fbda-35c2-4ce0-94ad-158090d2d5ba"
  },
  {
   "name": "Chris Tabeling",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 31,
   "wins": 20,
   "losses": 11,
   "pointsWon": 593,
   "totalPointsAgainst": 551,
   "mixedWins": 10,
   "mixedLosses": 5,
   "genderWins": 10,
   "genderLosses": 6,
   "clutchWins": 8,
   "clutchLosses": 5,
   "winPct": 64.5,
   "diff": 42,
   "ppg": 19.1,
   "leagueRank": 48,
   "rating": 1,
   "ratingGames": 31,
   "confidence": 83,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.4,
   "playerId": "0ee404b2-e9e6-49b4-b9eb-bc2120473f76"
  },
  {
   "name": "Jonah Fliegelman",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro The Factory",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 9,
   "losses": 5,
   "pointsWon": 274,
   "totalPointsAgainst": 236,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 64.3,
   "diff": 38,
   "ppg": 19.6,
   "leagueRank": 41,
   "rating": 1.5,
   "ratingGames": 14,
   "confidence": 73,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.1,
   "playerId": "1070bcd5-fdff-4adc-8d03-460a208fe4e8"
  },
  {
   "name": "Ally Yan",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 7,
   "losses": 4,
   "pointsWon": 212,
   "totalPointsAgainst": 195,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 4,
   "clutchLosses": 0,
   "winPct": 63.6,
   "diff": 17,
   "ppg": 19.3,
   "leagueRank": 65,
   "rating": 0.2,
   "ratingGames": 11,
   "confidence": 67,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.2,
   "playerId": "c4eafe22-4dce-47af-978a-5e4bd5afa11a"
  },
  {
   "name": "Ruhi Shah",
   "gender": "Female",
   "team": "Monroe",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 40,
   "wins": 25,
   "losses": 15,
   "pointsWon": 779,
   "totalPointsAgainst": 716,
   "mixedWins": 15,
   "mixedLosses": 5,
   "genderWins": 10,
   "genderLosses": 10,
   "clutchWins": 8,
   "clutchLosses": 9,
   "winPct": 62.5,
   "diff": 63,
   "ppg": 19.5,
   "leagueRank": 40,
   "rating": 2.7,
   "ratingGames": 40,
   "confidence": 86,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.7,
   "playerId": "a2d56e71-3895-4316-9e9e-17565fb62295"
  },
  {
   "name": "Johanna Wagner",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 154,
   "totalPointsAgainst": 127,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 62.5,
   "diff": 27,
   "ppg": 19.3,
   "leagueRank": 83,
   "rating": 1.6,
   "ratingGames": 8,
   "confidence": 60,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.2,
   "playerId": "e447eb0f-dc19-4616-a7f4-b53de776db3b"
  },
  {
   "name": "Ross Switkes",
   "gender": "Male",
   "team": "Flemington",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 40,
   "wins": 25,
   "losses": 15,
   "pointsWon": 759,
   "totalPointsAgainst": 734,
   "mixedWins": 11,
   "mixedLosses": 9,
   "genderWins": 14,
   "genderLosses": 6,
   "clutchWins": 8,
   "clutchLosses": 3,
   "winPct": 62.5,
   "diff": 25,
   "ppg": 19,
   "leagueRank": 59,
   "rating": 1,
   "ratingGames": 40,
   "confidence": 87,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.4,
   "playerId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b"
  },
  {
   "name": "Jonah Karczmer",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 157,
   "totalPointsAgainst": 141,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 62.5,
   "diff": 16,
   "ppg": 19.6,
   "leagueRank": 87,
   "rating": 0.3,
   "ratingGames": 8,
   "confidence": 59,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.4,
   "playerId": "c33e6ff8-38a1-45ca-9abb-d05a7ae27079"
  },
  {
   "name": "Noelle Ramirez",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 153,
   "totalPointsAgainst": 140,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 62.5,
   "diff": 13,
   "ppg": 19.1,
   "leagueRank": 94,
   "rating": 0.3,
   "ratingGames": 8,
   "confidence": 38,
   "strengthOfPartners": -1,
   "strengthOfOpponents": -1.1,
   "playerId": "f30428dd-bc5a-4535-94b3-b8779e958ada"
  },
  {
   "name": "Tin Wai Kwan",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 10,
   "losses": 6,
   "pointsWon": 307,
   "totalPointsAgainst": 299,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 5,
   "clutchLosses": 3,
   "winPct": 62.5,
   "diff": 8,
   "ppg": 19.2,
   "leagueRank": 51,
   "rating": 1.4,
   "ratingGames": 16,
   "confidence": 74,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.4,
   "playerId": "22fe1980-7ef9-4026-8c76-a39534431c6b"
  },
  {
   "name": "Zoe Ousouljoglou",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 13,
   "losses": 8,
   "pointsWon": 406,
   "totalPointsAgainst": 389,
   "mixedWins": 6,
   "mixedLosses": 5,
   "genderWins": 7,
   "genderLosses": 3,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 61.9,
   "diff": 17,
   "ppg": 19.3,
   "leagueRank": 58,
   "rating": 1,
   "ratingGames": 21,
   "confidence": 78,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.6,
   "playerId": "269fe355-d2eb-41b8-9e92-a1438aec65e3"
  },
  {
   "name": "Sidd Pathare",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 17,
   "losses": 11,
   "pointsWon": 542,
   "totalPointsAgainst": 495,
   "mixedWins": 8,
   "mixedLosses": 5,
   "genderWins": 9,
   "genderLosses": 6,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 60.7,
   "diff": 47,
   "ppg": 19.4,
   "leagueRank": 57,
   "rating": 0,
   "ratingGames": 28,
   "confidence": 82,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -0.2,
   "playerId": "a73f249d-c1c9-4516-bc79-e9732581f098"
  },
  {
   "name": "Joel Phillips",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro The Factory",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 97,
   "totalPointsAgainst": 84,
   "mixedWins": 0,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 60,
   "diff": 13,
   "ppg": 19.4,
   "leagueRank": 132,
   "rating": -0.7,
   "ratingGames": 5,
   "confidence": 50,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -1.6,
   "playerId": "8f292eb8-a014-4618-9c0e-114c26463233"
  },
  {
   "name": "Hector Irizarry",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 97,
   "totalPointsAgainst": 89,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 60,
   "diff": 8,
   "ppg": 19.4,
   "leagueRank": 148,
   "rating": 1.2,
   "ratingGames": 5,
   "confidence": 49,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 1,
   "playerId": "a50a69d0-0a8c-4241-b768-846b1591d180"
  },
  {
   "name": "Lauren Mammano",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 95,
   "totalPointsAgainst": 97,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 60,
   "diff": -2,
   "ppg": 19,
   "leagueRank": 157,
   "rating": 0.6,
   "ratingGames": 5,
   "confidence": 50,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.9,
   "playerId": "8d896637-2c2a-4541-9155-257bf5a37055"
  },
  {
   "name": "Suzi Battison",
   "gender": "Female",
   "team": "Flemington",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 13,
   "losses": 9,
   "pointsWon": 421,
   "totalPointsAgainst": 401,
   "mixedWins": 8,
   "mixedLosses": 4,
   "genderWins": 5,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 59.1,
   "diff": 20,
   "ppg": 19.1,
   "leagueRank": 56,
   "rating": 2.5,
   "ratingGames": 22,
   "confidence": 80,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.8,
   "playerId": "40579892-d9bf-4d1d-9417-5830d5d45093"
  },
  {
   "name": "Nathan Malhotra",
   "gender": "Male",
   "team": "Home Court",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 7,
   "losses": 5,
   "pointsWon": 233,
   "totalPointsAgainst": 220,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 58.3,
   "diff": 13,
   "ppg": 19.4,
   "leagueRank": 49,
   "rating": 1.8,
   "ratingGames": 12,
   "confidence": 71,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.8,
   "playerId": "98bd685a-3161-45fc-941f-3a8c9f4849cf"
  },
  {
   "name": "Ali Husain",
   "gender": "Male",
   "team": "Monroe",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 7,
   "losses": 5,
   "pointsWon": 237,
   "totalPointsAgainst": 225,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 58.3,
   "diff": 12,
   "ppg": 19.8,
   "leagueRank": 54,
   "rating": 0.8,
   "ratingGames": 12,
   "confidence": 70,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.4,
   "playerId": "09d614ca-a9b2-44b6-a402-51046c6883af"
  },
  {
   "name": "Ashley Barros",
   "gender": "Female",
   "team": "Home Court",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 7,
   "losses": 5,
   "pointsWon": 230,
   "totalPointsAgainst": 222,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 58.3,
   "diff": 8,
   "ppg": 19.2,
   "leagueRank": 55,
   "rating": 1.3,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.6,
   "playerId": "6656b9a3-3c47-4711-8609-e35c07c64771"
  },
  {
   "name": "Thomas Connolly",
   "gender": "Male",
   "team": "Flemington",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 40,
   "wins": 23,
   "losses": 17,
   "pointsWon": 733,
   "totalPointsAgainst": 741,
   "mixedWins": 12,
   "mixedLosses": 8,
   "genderWins": 11,
   "genderLosses": 9,
   "clutchWins": 10,
   "clutchLosses": 5,
   "winPct": 57.5,
   "diff": -8,
   "ppg": 18.3,
   "leagueRank": 70,
   "rating": -0.6,
   "ratingGames": 40,
   "confidence": 87,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.1,
   "playerId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3"
  },
  {
   "name": "Anisha Malhotra",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 16,
   "losses": 12,
   "pointsWon": 556,
   "totalPointsAgainst": 494,
   "mixedWins": 7,
   "mixedLosses": 7,
   "genderWins": 9,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 8,
   "winPct": 57.1,
   "diff": 62,
   "ppg": 19.9,
   "leagueRank": 52,
   "rating": 1.5,
   "ratingGames": 28,
   "confidence": 83,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.3,
   "playerId": "2aa8b268-8c06-4453-9706-048009bf6af3"
  },
  {
   "name": "Stacy Walkowitz",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 12,
   "losses": 9,
   "pointsWon": 396,
   "totalPointsAgainst": 378,
   "mixedWins": 5,
   "mixedLosses": 6,
   "genderWins": 7,
   "genderLosses": 3,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 57.1,
   "diff": 18,
   "ppg": 18.9,
   "leagueRank": 63,
   "rating": 0.5,
   "ratingGames": 21,
   "confidence": 80,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.1,
   "playerId": "a19b179a-6a16-43a7-b2af-8d6e8d1a1205"
  },
  {
   "name": "Shreyas Pani",
   "gender": "Male",
   "team": "Monroe",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 20,
   "losses": 15,
   "pointsWon": 656,
   "totalPointsAgainst": 639,
   "mixedWins": 10,
   "mixedLosses": 7,
   "genderWins": 10,
   "genderLosses": 8,
   "clutchWins": 6,
   "clutchLosses": 6,
   "winPct": 57.1,
   "diff": 17,
   "ppg": 18.7,
   "leagueRank": 62,
   "rating": 1.5,
   "ratingGames": 35,
   "confidence": 85,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.6,
   "playerId": "3cebd01c-ff32-4544-b6a6-2a68152b2ee5"
  },
  {
   "name": "Nathan Law",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 17,
   "losses": 13,
   "pointsWon": 553,
   "totalPointsAgainst": 555,
   "mixedWins": 7,
   "mixedLosses": 9,
   "genderWins": 10,
   "genderLosses": 4,
   "clutchWins": 6,
   "clutchLosses": 4,
   "winPct": 56.7,
   "diff": -2,
   "ppg": 18.4,
   "leagueRank": 73,
   "rating": -1.5,
   "ratingGames": 30,
   "confidence": 82,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.3,
   "playerId": "3c81d27f-9e68-439b-a476-f5ac1a54f45a"
  },
  {
   "name": "Alex Abad",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 14,
   "losses": 12,
   "pointsWon": 464,
   "totalPointsAgainst": 457,
   "mixedWins": 4,
   "mixedLosses": 6,
   "genderWins": 10,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 53.8,
   "diff": 7,
   "ppg": 17.8,
   "leagueRank": 69,
   "rating": 0.7,
   "ratingGames": 26,
   "confidence": 81,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.4,
   "playerId": "bc881ebc-7a42-43be-b1b2-9c29c59a4132"
  },
  {
   "name": "Krysti Maronski-Neufeldt",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 10,
   "losses": 9,
   "pointsWon": 365,
   "totalPointsAgainst": 342,
   "mixedWins": 4,
   "mixedLosses": 5,
   "genderWins": 6,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 6,
   "winPct": 52.6,
   "diff": 23,
   "ppg": 19.2,
   "leagueRank": 67,
   "rating": -0.4,
   "ratingGames": 19,
   "confidence": 78,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.5,
   "playerId": "29a7f562-a596-421f-a62d-33409169805d"
  },
  {
   "name": "Jennifer Sanchez",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 19,
   "wins": 10,
   "losses": 9,
   "pointsWon": 354,
   "totalPointsAgainst": 342,
   "mixedWins": 4,
   "mixedLosses": 4,
   "genderWins": 6,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 52.6,
   "diff": 12,
   "ppg": 18.6,
   "leagueRank": 72,
   "rating": -0.2,
   "ratingGames": 19,
   "confidence": 78,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.1,
   "playerId": "061121d0-5d0a-4c01-9d8e-dced99d6d82d"
  },
  {
   "name": "Tyler Arsenault",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 11,
   "losses": 10,
   "pointsWon": 399,
   "totalPointsAgainst": 381,
   "mixedWins": 4,
   "mixedLosses": 5,
   "genderWins": 7,
   "genderLosses": 5,
   "clutchWins": 4,
   "clutchLosses": 6,
   "winPct": 52.4,
   "diff": 18,
   "ppg": 19,
   "leagueRank": 61,
   "rating": 1.5,
   "ratingGames": 21,
   "confidence": 77,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.7,
   "playerId": "e76d2d63-f7dc-40e7-aca2-d9b3aecf4d3e"
  },
  {
   "name": "Brittany Hall",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 13,
   "losses": 12,
   "pointsWon": 455,
   "totalPointsAgainst": 456,
   "mixedWins": 8,
   "mixedLosses": 6,
   "genderWins": 5,
   "genderLosses": 6,
   "clutchWins": 7,
   "clutchLosses": 6,
   "winPct": 52,
   "diff": -1,
   "ppg": 18.2,
   "leagueRank": 78,
   "rating": 0.5,
   "ratingGames": 25,
   "confidence": 81,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.4,
   "playerId": "17cc768d-f6c8-484c-814e-063d17cec72f"
  },
  {
   "name": "Chris Damato",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 14,
   "losses": 13,
   "pointsWon": 504,
   "totalPointsAgainst": 504,
   "mixedWins": 8,
   "mixedLosses": 4,
   "genderWins": 6,
   "genderLosses": 9,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 51.9,
   "diff": 0,
   "ppg": 18.7,
   "leagueRank": 76,
   "rating": -0.6,
   "ratingGames": 27,
   "confidence": 82,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.2,
   "playerId": "445e89c8-a23c-440c-bd3c-7eab366bdd85"
  },
  {
   "name": "Melissa Dardani",
   "gender": "Female",
   "team": "Flemington",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 20,
   "losses": 19,
   "pointsWon": 703,
   "totalPointsAgainst": 727,
   "mixedWins": 12,
   "mixedLosses": 8,
   "genderWins": 8,
   "genderLosses": 11,
   "clutchWins": 4,
   "clutchLosses": 6,
   "winPct": 51.3,
   "diff": -24,
   "ppg": 18,
   "leagueRank": 85,
   "rating": -0.6,
   "ratingGames": 39,
   "confidence": 87,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0,
   "playerId": "ef423f8a-5c2c-4a12-9f37-b41ff6d6c530"
  },
  {
   "name": "Tess Fisher",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 117,
   "totalPointsAgainst": 102,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": 15,
   "ppg": 19.5,
   "leagueRank": 128,
   "rating": 2.2,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.3,
   "playerId": "661f7bd0-74d3-432b-acc7-da0e3b3e36ea"
  },
  {
   "name": "Jason Makarevic",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 14,
   "losses": 14,
   "pointsWon": 530,
   "totalPointsAgainst": 520,
   "mixedWins": 6,
   "mixedLosses": 9,
   "genderWins": 8,
   "genderLosses": 5,
   "clutchWins": 7,
   "clutchLosses": 8,
   "winPct": 50,
   "diff": 10,
   "ppg": 18.9,
   "leagueRank": 74,
   "rating": -0.4,
   "ratingGames": 28,
   "confidence": 83,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.3,
   "playerId": "f8835822-da21-4593-8b99-5665d2c2f3af"
  },
  {
   "name": "Amalia Ditrapani",
   "gender": "Female",
   "team": "Monroe",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 9,
   "losses": 9,
   "pointsWon": 339,
   "totalPointsAgainst": 330,
   "mixedWins": 4,
   "mixedLosses": 4,
   "genderWins": 5,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 50,
   "diff": 9,
   "ppg": 18.8,
   "leagueRank": 71,
   "rating": -0.1,
   "ratingGames": 18,
   "confidence": 77,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.1,
   "playerId": "32ac3308-4ddd-496b-8942-ca2422322c06"
  },
  {
   "name": "Bruno Casino",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 5,
   "losses": 5,
   "pointsWon": 199,
   "totalPointsAgainst": 191,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 50,
   "diff": 8,
   "ppg": 19.9,
   "leagueRank": 77,
   "rating": 2.2,
   "ratingGames": 10,
   "confidence": 65,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 1,
   "playerId": "d195dff9-7f38-402c-8164-44640f89c3fa"
  },
  {
   "name": "Ryan Furman",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 6,
   "losses": 6,
   "pointsWon": 224,
   "totalPointsAgainst": 221,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": 3,
   "ppg": 18.7,
   "leagueRank": 79,
   "rating": -1,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.5,
   "playerId": "a89121dd-192b-486d-b39d-18ee8447d641"
  },
  {
   "name": "Elisangela Harrington",
   "gender": "Female",
   "team": "Flemington",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 8,
   "losses": 8,
   "pointsWon": 300,
   "totalPointsAgainst": 298,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 6,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 50,
   "diff": 2,
   "ppg": 18.8,
   "leagueRank": 80,
   "rating": -0.2,
   "ratingGames": 16,
   "confidence": 75,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": -0.5,
   "playerId": "55bbe71c-1181-4875-b16d-f121f3a133e0"
  },
  {
   "name": "Alex Boory",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 5,
   "losses": 5,
   "pointsWon": 187,
   "totalPointsAgainst": 187,
   "mixedWins": 4,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": 0,
   "ppg": 18.7,
   "leagueRank": 104,
   "rating": -0.3,
   "ratingGames": 10,
   "confidence": 66,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.1,
   "playerId": "897f1edf-63f3-4eec-bcf5-d5a1bf0be859"
  },
  {
   "name": "Nahla Bernhardt",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro The Factory",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 6,
   "losses": 6,
   "pointsWon": 228,
   "totalPointsAgainst": 229,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 50,
   "diff": -1,
   "ppg": 19,
   "leagueRank": 93,
   "rating": -2.2,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.9,
   "playerId": "9dae8c17-6878-473a-83e9-a43b434f876b"
  },
  {
   "name": "Eugene Zaslavsky",
   "gender": "Male",
   "team": "Monroe",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 116,
   "totalPointsAgainst": 118,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": -2,
   "ppg": 19.3,
   "leagueRank": 145,
   "rating": 0,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -0.1,
   "playerId": "9638b474-ad68-4eff-a5a5-6c40db6ed4bb"
  },
  {
   "name": "Harriet Levin",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 15,
   "losses": 15,
   "pointsWon": 559,
   "totalPointsAgainst": 565,
   "mixedWins": 9,
   "mixedLosses": 5,
   "genderWins": 6,
   "genderLosses": 10,
   "clutchWins": 8,
   "clutchLosses": 7,
   "winPct": 50,
   "diff": -6,
   "ppg": 18.6,
   "leagueRank": 75,
   "rating": -0.1,
   "ratingGames": 30,
   "confidence": 84,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.4,
   "playerId": "aeff8297-a479-4b3b-9a49-72c410ac8e26"
  },
  {
   "name": "Damien Stahl",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 8,
   "losses": 8,
   "pointsWon": 291,
   "totalPointsAgainst": 301,
   "mixedWins": 4,
   "mixedLosses": 4,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 50,
   "diff": -10,
   "ppg": 18.2,
   "leagueRank": 82,
   "rating": 0.5,
   "ratingGames": 16,
   "confidence": 73,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.5,
   "playerId": "45d2cd6f-4816-46b2-8e17-fab766cdb87e"
  },
  {
   "name": "Matt Schall",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 37,
   "wins": 18,
   "losses": 19,
   "pointsWon": 649,
   "totalPointsAgainst": 691,
   "mixedWins": 7,
   "mixedLosses": 10,
   "genderWins": 11,
   "genderLosses": 9,
   "clutchWins": 6,
   "clutchLosses": 5,
   "winPct": 48.6,
   "diff": -42,
   "ppg": 17.5,
   "leagueRank": 88,
   "rating": -0.5,
   "ratingGames": 37,
   "confidence": 86,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.1,
   "playerId": "aa0d9944-a9d3-46d5-8650-54e894adfeb2"
  },
  {
   "name": "Camrin Cronheim",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 29,
   "wins": 14,
   "losses": 15,
   "pointsWon": 560,
   "totalPointsAgainst": 531,
   "mixedWins": 9,
   "mixedLosses": 7,
   "genderWins": 5,
   "genderLosses": 8,
   "clutchWins": 4,
   "clutchLosses": 9,
   "winPct": 48.3,
   "diff": 29,
   "ppg": 19.3,
   "leagueRank": 68,
   "rating": 0.5,
   "ratingGames": 29,
   "confidence": 83,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0,
   "playerId": "8143def5-d564-4010-8258-ccb71cd481f1"
  },
  {
   "name": "Rachel Berger",
   "gender": "Female",
   "team": "Jersey Devil",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 12,
   "losses": 13,
   "pointsWon": 447,
   "totalPointsAgainst": 476,
   "mixedWins": 4,
   "mixedLosses": 9,
   "genderWins": 8,
   "genderLosses": 4,
   "clutchWins": 6,
   "clutchLosses": 1,
   "winPct": 48,
   "diff": -29,
   "ppg": 17.9,
   "leagueRank": 91,
   "rating": -0.3,
   "ratingGames": 25,
   "confidence": 82,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.2,
   "playerId": "9b7488c5-bc66-41e4-8fa5-873e70c190e3"
  },
  {
   "name": "Johny Mario",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 6,
   "losses": 7,
   "pointsWon": 230,
   "totalPointsAgainst": 239,
   "mixedWins": 3,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 46.2,
   "diff": -9,
   "ppg": 17.7,
   "leagueRank": 96,
   "rating": -0.2,
   "ratingGames": 13,
   "confidence": 70,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": -0.1,
   "playerId": "831c9fae-38c6-4961-8664-634087f5f2f9"
  },
  {
   "name": "Zachary Lessner",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 11,
   "losses": 13,
   "pointsWon": 437,
   "totalPointsAgainst": 455,
   "mixedWins": 4,
   "mixedLosses": 8,
   "genderWins": 7,
   "genderLosses": 5,
   "clutchWins": 7,
   "clutchLosses": 4,
   "winPct": 45.8,
   "diff": -18,
   "ppg": 18.2,
   "leagueRank": 89,
   "rating": 0,
   "ratingGames": 24,
   "confidence": 81,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.5,
   "playerId": "2ce5ebef-8079-4871-8d2e-b34988abbaad"
  },
  {
   "name": "Susan Ackley",
   "gender": "Female",
   "team": "Flemington",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 10,
   "losses": 12,
   "pointsWon": 393,
   "totalPointsAgainst": 430,
   "mixedWins": 7,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 9,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 45.5,
   "diff": -37,
   "ppg": 17.9,
   "leagueRank": 112,
   "rating": -1.2,
   "ratingGames": 22,
   "confidence": 80,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.1,
   "playerId": "07a0e948-6308-4920-a6a8-1d5945552ecb"
  },
  {
   "name": "Zach Bowe",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 20,
   "wins": 9,
   "losses": 11,
   "pointsWon": 373,
   "totalPointsAgainst": 380,
   "mixedWins": 7,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 7,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 45,
   "diff": -7,
   "ppg": 18.7,
   "leagueRank": 81,
   "rating": 0,
   "ratingGames": 20,
   "confidence": 78,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.4,
   "playerId": "eebadc3a-5763-4612-9232-d3a98ea188d6"
  },
  {
   "name": "Amanda Ksiezopolski",
   "gender": "Female",
   "team": "Monroe",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 8,
   "losses": 10,
   "pointsWon": 320,
   "totalPointsAgainst": 341,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 7,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 44.4,
   "diff": -21,
   "ppg": 17.8,
   "leagueRank": 108,
   "rating": -0.9,
   "ratingGames": 18,
   "confidence": 74,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.2,
   "playerId": "2138af89-34bc-4ee2-9955-ff16f0997031"
  },
  {
   "name": "Caleb Perry-Abner",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 11,
   "losses": 14,
   "pointsWon": 455,
   "totalPointsAgainst": 489,
   "mixedWins": 6,
   "mixedLosses": 8,
   "genderWins": 5,
   "genderLosses": 6,
   "clutchWins": 6,
   "clutchLosses": 6,
   "winPct": 44,
   "diff": -34,
   "ppg": 18.2,
   "leagueRank": 99,
   "rating": -0.1,
   "ratingGames": 25,
   "confidence": 81,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.5,
   "playerId": "c25e04ae-a9bf-4943-858d-5b7a94261e43"
  },
  {
   "name": "Robbie Oddy",
   "gender": "Male",
   "team": "Flemington",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 32,
   "wins": 14,
   "losses": 18,
   "pointsWon": 599,
   "totalPointsAgainst": 595,
   "mixedWins": 7,
   "mixedLosses": 9,
   "genderWins": 7,
   "genderLosses": 9,
   "clutchWins": 4,
   "clutchLosses": 7,
   "winPct": 43.8,
   "diff": 4,
   "ppg": 18.7,
   "leagueRank": 86,
   "rating": 0.6,
   "ratingGames": 32,
   "confidence": 85,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.3,
   "playerId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6"
  },
  {
   "name": "Mickey Cook",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 13,
   "losses": 17,
   "pointsWon": 557,
   "totalPointsAgainst": 564,
   "mixedWins": 10,
   "mixedLosses": 7,
   "genderWins": 3,
   "genderLosses": 10,
   "clutchWins": 3,
   "clutchLosses": 6,
   "winPct": 43.3,
   "diff": -7,
   "ppg": 18.6,
   "leagueRank": 97,
   "rating": -0.9,
   "ratingGames": 30,
   "confidence": 84,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0,
   "playerId": "3babc519-f395-4ef7-8f6f-b38d25c139d0"
  },
  {
   "name": "Anthony Ursino",
   "gender": "Male",
   "team": "Monroe",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 13,
   "losses": 17,
   "pointsWon": 548,
   "totalPointsAgainst": 577,
   "mixedWins": 7,
   "mixedLosses": 12,
   "genderWins": 6,
   "genderLosses": 5,
   "clutchWins": 5,
   "clutchLosses": 7,
   "winPct": 43.3,
   "diff": -29,
   "ppg": 18.3,
   "leagueRank": 98,
   "rating": -0.2,
   "ratingGames": 30,
   "confidence": 84,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.3,
   "playerId": "1406ff1f-3597-4128-a629-7dfd1dfe1323"
  },
  {
   "name": "Rachel Alfano",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 9,
   "losses": 12,
   "pointsWon": 396,
   "totalPointsAgainst": 391,
   "mixedWins": 5,
   "mixedLosses": 5,
   "genderWins": 4,
   "genderLosses": 7,
   "clutchWins": 2,
   "clutchLosses": 6,
   "winPct": 42.9,
   "diff": 5,
   "ppg": 18.9,
   "leagueRank": 84,
   "rating": 0.1,
   "ratingGames": 21,
   "confidence": 78,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.1,
   "playerId": "ce7aca89-06ac-4cd9-8944-a482216ffd58"
  },
  {
   "name": "Nick Dehmer",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 131,
   "totalPointsAgainst": 141,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 42.9,
   "diff": -10,
   "ppg": 18.7,
   "leagueRank": 163,
   "rating": 0.3,
   "ratingGames": 7,
   "confidence": 57,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 1.7,
   "playerId": "3cd8477e-8352-44a7-916f-ac2e3c3005f2"
  },
  {
   "name": "Allison Tarnoff",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro The Factory",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 6,
   "losses": 8,
   "pointsWon": 259,
   "totalPointsAgainst": 271,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 42.9,
   "diff": -12,
   "ppg": 18.5,
   "leagueRank": 117,
   "rating": -1.9,
   "ratingGames": 14,
   "confidence": 73,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.5,
   "playerId": "001bf0ea-f8b1-402f-ab07-88ed85b2b510"
  },
  {
   "name": "Michelle Quach",
   "gender": "Female",
   "team": "Jersey Devil",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 9,
   "losses": 12,
   "pointsWon": 390,
   "totalPointsAgainst": 409,
   "mixedWins": 4,
   "mixedLosses": 6,
   "genderWins": 5,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 42.9,
   "diff": -19,
   "ppg": 18.6,
   "leagueRank": 92,
   "rating": 0,
   "ratingGames": 21,
   "confidence": 77,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.5,
   "playerId": "5f0dcbe9-bb0e-496d-99d2-06f01ff2c77b"
  },
  {
   "name": "Katalina Wang",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 6,
   "losses": 8,
   "pointsWon": 245,
   "totalPointsAgainst": 280,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 42.9,
   "diff": -35,
   "ppg": 17.5,
   "leagueRank": 113,
   "rating": -0.4,
   "ratingGames": 14,
   "confidence": 72,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.4,
   "playerId": "2d602f38-7eda-4a7b-a3a2-98b40e443b79"
  },
  {
   "name": "Keith Shedlock",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 5,
   "losses": 7,
   "pointsWon": 227,
   "totalPointsAgainst": 232,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 41.7,
   "diff": -5,
   "ppg": 18.9,
   "leagueRank": 111,
   "rating": -2.2,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": -0.4,
   "playerId": "f4b44cd7-fc9a-41a2-b569-cdaf08b0bf26"
  },
  {
   "name": "Sara Synn",
   "gender": "Female",
   "team": "Monroe",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 5,
   "losses": 7,
   "pointsWon": 208,
   "totalPointsAgainst": 224,
   "mixedWins": 3,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 41.7,
   "diff": -16,
   "ppg": 17.3,
   "leagueRank": 122,
   "rating": -2.3,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.3,
   "playerId": "37acfc18-a8d1-4ea0-8c21-0d830c9f4f90"
  },
  {
   "name": "Danielle Bernero",
   "gender": "Female",
   "team": "Jersey Devil",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 10,
   "losses": 14,
   "pointsWon": 426,
   "totalPointsAgainst": 476,
   "mixedWins": 4,
   "mixedLosses": 5,
   "genderWins": 6,
   "genderLosses": 9,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 41.7,
   "diff": -50,
   "ppg": 17.8,
   "leagueRank": 114,
   "rating": -0.5,
   "ratingGames": 24,
   "confidence": 81,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.6,
   "playerId": "317f260e-551b-4f91-ab92-71440e5f05be"
  },
  {
   "name": "Dilan Shah",
   "gender": "Male",
   "team": "Monroe",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 29,
   "wins": 12,
   "losses": 17,
   "pointsWon": 529,
   "totalPointsAgainst": 556,
   "mixedWins": 2,
   "mixedLosses": 8,
   "genderWins": 10,
   "genderLosses": 9,
   "clutchWins": 6,
   "clutchLosses": 7,
   "winPct": 41.4,
   "diff": -27,
   "ppg": 18.2,
   "leagueRank": 107,
   "rating": -1.6,
   "ratingGames": 29,
   "confidence": 83,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0.3,
   "playerId": "91d23f87-e0fc-4448-890e-c3abd96c70b4"
  },
  {
   "name": "Elysia Price",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 11,
   "losses": 16,
   "pointsWon": 490,
   "totalPointsAgainst": 517,
   "mixedWins": 5,
   "mixedLosses": 8,
   "genderWins": 6,
   "genderLosses": 8,
   "clutchWins": 5,
   "clutchLosses": 6,
   "winPct": 40.7,
   "diff": -27,
   "ppg": 18.1,
   "leagueRank": 105,
   "rating": -0.6,
   "ratingGames": 27,
   "confidence": 81,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.4,
   "playerId": "a0ca4338-b610-4630-9f41-8dfd380e1af7"
  },
  {
   "name": "Christine Ferraez",
   "gender": "Female",
   "team": "Flemington",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 92,
   "totalPointsAgainst": 89,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 40,
   "diff": 3,
   "ppg": 18.4,
   "leagueRank": 173,
   "rating": 0,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": -0.7,
   "playerId": "ffe0a04b-eb97-4dda-8bc0-0ebe0fd1089e"
  },
  {
   "name": "Lynda Tomaru",
   "gender": "Female",
   "team": "Home Court",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 6,
   "losses": 9,
   "pointsWon": 275,
   "totalPointsAgainst": 285,
   "mixedWins": 0,
   "mixedLosses": 7,
   "genderWins": 6,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 40,
   "diff": -10,
   "ppg": 18.3,
   "leagueRank": 103,
   "rating": -1.2,
   "ratingGames": 15,
   "confidence": 73,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.8,
   "playerId": "2b001a36-d13c-42fa-ae50-c9cc2f1aeb4e"
  },
  {
   "name": "Richa Shah",
   "gender": "Female",
   "team": "Monroe",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 12,
   "losses": 18,
   "pointsWon": 553,
   "totalPointsAgainst": 581,
   "mixedWins": 8,
   "mixedLosses": 12,
   "genderWins": 4,
   "genderLosses": 6,
   "clutchWins": 4,
   "clutchLosses": 8,
   "winPct": 40,
   "diff": -28,
   "ppg": 18.4,
   "leagueRank": 102,
   "rating": -0.6,
   "ratingGames": 30,
   "confidence": 84,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.5,
   "playerId": "6b80047c-ca16-4506-a2a4-ed894dc0c37f"
  },
  {
   "name": "Joey Angelson",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 15,
   "losses": 23,
   "pointsWon": 661,
   "totalPointsAgainst": 748,
   "mixedWins": 7,
   "mixedLosses": 12,
   "genderWins": 8,
   "genderLosses": 11,
   "clutchWins": 9,
   "clutchLosses": 5,
   "winPct": 39.5,
   "diff": -87,
   "ppg": 17.4,
   "leagueRank": 119,
   "rating": -0.3,
   "ratingGames": 38,
   "confidence": 86,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.8,
   "playerId": "6035850e-af27-40db-bb81-f5787f344871"
  },
  {
   "name": "Zach Hizer",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 23,
   "wins": 9,
   "losses": 14,
   "pointsWon": 404,
   "totalPointsAgainst": 443,
   "mixedWins": 6,
   "mixedLosses": 5,
   "genderWins": 3,
   "genderLosses": 9,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 39.1,
   "diff": -39,
   "ppg": 17.6,
   "leagueRank": 118,
   "rating": -1.1,
   "ratingGames": 23,
   "confidence": 80,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.1,
   "playerId": "b5e576e1-d16d-4c9d-ab28-2e1b1e66487b"
  },
  {
   "name": "Austin Williams",
   "gender": "Male",
   "team": "Home Court",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 31,
   "wins": 12,
   "losses": 19,
   "pointsWon": 572,
   "totalPointsAgainst": 590,
   "mixedWins": 4,
   "mixedLosses": 11,
   "genderWins": 8,
   "genderLosses": 8,
   "clutchWins": 3,
   "clutchLosses": 7,
   "winPct": 38.7,
   "diff": -18,
   "ppg": 18.5,
   "leagueRank": 95,
   "rating": 0.8,
   "ratingGames": 31,
   "confidence": 83,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.7,
   "playerId": "bb0bdc33-be20-4a45-9de9-0a52a88d7af9"
  },
  {
   "name": "Aurora Lewis",
   "gender": "Female",
   "team": "Home Court",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 10,
   "losses": 16,
   "pointsWon": 476,
   "totalPointsAgainst": 490,
   "mixedWins": 1,
   "mixedLosses": 10,
   "genderWins": 9,
   "genderLosses": 6,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 38.5,
   "diff": -14,
   "ppg": 18.3,
   "leagueRank": 100,
   "rating": -0.1,
   "ratingGames": 26,
   "confidence": 82,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.1,
   "playerId": "3fe06711-5561-47b8-ad95-382cd0bcff9a"
  },
  {
   "name": "Ariana Rizvani",
   "gender": "Female",
   "team": "Home Court",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 10,
   "losses": 16,
   "pointsWon": 470,
   "totalPointsAgainst": 502,
   "mixedWins": 5,
   "mixedLosses": 7,
   "genderWins": 5,
   "genderLosses": 9,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 38.5,
   "diff": -32,
   "ppg": 18.1,
   "leagueRank": 110,
   "rating": 0.2,
   "ratingGames": 26,
   "confidence": 81,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.3,
   "playerId": "1c7e9745-06f1-4486-9b14-5f4205128867"
  },
  {
   "name": "Christine Sandella",
   "gender": "Female",
   "team": "Home Court",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 146,
   "totalPointsAgainst": 152,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 37.5,
   "diff": -6,
   "ppg": 18.3,
   "leagueRank": 155,
   "rating": 0.6,
   "ratingGames": 8,
   "confidence": 61,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.4,
   "playerId": "bd30e236-1c20-4fa1-b9ad-f56c8613d22b"
  },
  {
   "name": "Catherine Stewart",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 9,
   "losses": 15,
   "pointsWon": 450,
   "totalPointsAgainst": 460,
   "mixedWins": 5,
   "mixedLosses": 7,
   "genderWins": 4,
   "genderLosses": 8,
   "clutchWins": 6,
   "clutchLosses": 6,
   "winPct": 37.5,
   "diff": -10,
   "ppg": 18.8,
   "leagueRank": 90,
   "rating": 1.6,
   "ratingGames": 24,
   "confidence": 80,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.8,
   "playerId": "112622af-3d12-4dba-ad36-7601c8e6021c"
  },
  {
   "name": "Taylor Peracchio",
   "gender": "Female",
   "team": "Home Court",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 140,
   "totalPointsAgainst": 153,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 37.5,
   "diff": -13,
   "ppg": 17.5,
   "leagueRank": 158,
   "rating": -0.3,
   "ratingGames": 8,
   "confidence": 38,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": -0.4,
   "playerId": "4df44e08-a35c-4c4c-a311-861ef4d0897a"
  },
  {
   "name": "Chanda Mccoy",
   "gender": "Female",
   "team": "Flemington",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 147,
   "totalPointsAgainst": 161,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 37.5,
   "diff": -14,
   "ppg": 18.4,
   "leagueRank": 160,
   "rating": -0.8,
   "ratingGames": 8,
   "confidence": 60,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.1,
   "playerId": "30cb78cb-f962-40f9-bd02-78d336920431"
  },
  {
   "name": "Aidan Jackson",
   "gender": "Male",
   "team": "Home Court",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 9,
   "losses": 15,
   "pointsWon": 440,
   "totalPointsAgainst": 465,
   "mixedWins": 5,
   "mixedLosses": 6,
   "genderWins": 4,
   "genderLosses": 9,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 37.5,
   "diff": -25,
   "ppg": 18.3,
   "leagueRank": 106,
   "rating": 0.2,
   "ratingGames": 24,
   "confidence": 81,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.4,
   "playerId": "c821be96-b764-46ad-85a2-8927711684c5"
  },
  {
   "name": "Shashank Kamdar",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 11,
   "losses": 19,
   "pointsWon": 560,
   "totalPointsAgainst": 560,
   "mixedWins": 4,
   "mixedLosses": 12,
   "genderWins": 7,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 9,
   "winPct": 36.7,
   "diff": 0,
   "ppg": 18.7,
   "leagueRank": 101,
   "rating": 0.1,
   "ratingGames": 30,
   "confidence": 83,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.3,
   "playerId": "56db4b56-6166-437f-8ece-26576b7042e5"
  },
  {
   "name": "Ryan Rosen",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro Aces",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 11,
   "losses": 19,
   "pointsWon": 529,
   "totalPointsAgainst": 586,
   "mixedWins": 5,
   "mixedLosses": 9,
   "genderWins": 6,
   "genderLosses": 10,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 36.7,
   "diff": -57,
   "ppg": 17.6,
   "leagueRank": 115,
   "rating": 0.2,
   "ratingGames": 30,
   "confidence": 83,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 0.4,
   "playerId": "97f2b250-2030-4296-be61-63cffb17043b"
  },
  {
   "name": "Amy Yan",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 4,
   "losses": 7,
   "pointsWon": 204,
   "totalPointsAgainst": 207,
   "mixedWins": 2,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 36.4,
   "diff": -3,
   "ppg": 18.5,
   "leagueRank": 141,
   "rating": -1.2,
   "ratingGames": 11,
   "confidence": 67,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0,
   "playerId": "e121745d-7833-45f1-965b-67653bd4751e"
  },
  {
   "name": "Julia Sternberg",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 4,
   "losses": 7,
   "pointsWon": 206,
   "totalPointsAgainst": 222,
   "mixedWins": 3,
   "mixedLosses": 5,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 36.4,
   "diff": -16,
   "ppg": 18.7,
   "leagueRank": 138,
   "rating": 0,
   "ratingGames": 11,
   "confidence": 66,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 1,
   "playerId": "ccd8a76f-df3a-4ab9-97b6-bae0f860a431"
  },
  {
   "name": "Kelly Arvidson",
   "gender": "Female",
   "team": "Flemington",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 13,
   "losses": 23,
   "pointsWon": 630,
   "totalPointsAgainst": 703,
   "mixedWins": 9,
   "mixedLosses": 9,
   "genderWins": 4,
   "genderLosses": 14,
   "clutchWins": 5,
   "clutchLosses": 7,
   "winPct": 36.1,
   "diff": -73,
   "ppg": 17.5,
   "leagueRank": 136,
   "rating": -2.4,
   "ratingGames": 36,
   "confidence": 86,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.1,
   "playerId": "c053f5d6-16e1-4847-b27b-49fe41f367c6"
  },
  {
   "name": "Mark Kilimnik",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 6,
   "losses": 12,
   "pointsWon": 338,
   "totalPointsAgainst": 345,
   "mixedWins": 2,
   "mixedLosses": 7,
   "genderWins": 4,
   "genderLosses": 5,
   "clutchWins": 4,
   "clutchLosses": 6,
   "winPct": 33.3,
   "diff": -7,
   "ppg": 18.8,
   "leagueRank": 109,
   "rating": 0.6,
   "ratingGames": 18,
   "confidence": 76,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.6,
   "playerId": "d6c15f91-4cc9-4612-8ec3-8f4ebd4e0cc1"
  },
  {
   "name": "Stephen Conger",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 107,
   "totalPointsAgainst": 115,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 33.3,
   "diff": -8,
   "ppg": 17.8,
   "leagueRank": 181,
   "rating": -1.7,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": -1.4,
   "playerId": "24e70ef7-b98e-459e-8a19-19a2b66a054e"
  },
  {
   "name": "Justin Bautista",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 113,
   "totalPointsAgainst": 121,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 33.3,
   "diff": -8,
   "ppg": 18.8,
   "leagueRank": 169,
   "rating": 0,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.5,
   "playerId": "27660961-6245-4b09-aafe-359ca3205797"
  },
  {
   "name": "Elliot Stevens",
   "gender": "Male",
   "team": "Home Court",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 109,
   "totalPointsAgainst": 121,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 33.3,
   "diff": -12,
   "ppg": 18.2,
   "leagueRank": 178,
   "rating": -0.8,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": -0.6,
   "playerId": "3c27afe7-2382-44c1-a50d-cf7326aa325a"
  },
  {
   "name": "Jen Vorel",
   "gender": "Female",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 4,
   "losses": 8,
   "pointsWon": 215,
   "totalPointsAgainst": 228,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 33.3,
   "diff": -13,
   "ppg": 17.9,
   "leagueRank": 123,
   "rating": -1.4,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.3,
   "playerId": "f9c1683f-9cc2-4b5d-aa29-f90e5102e687"
  },
  {
   "name": "Simon Rosenwasser",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 100,
   "totalPointsAgainst": 119,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 33.3,
   "diff": -19,
   "ppg": 16.7,
   "leagueRank": 182,
   "rating": -1.1,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.1,
   "playerId": "369dca37-2d15-4559-96d1-26a78df236a1"
  },
  {
   "name": "Ken Velarde",
   "gender": "Male",
   "team": "Home Court",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 12,
   "losses": 24,
   "pointsWon": 657,
   "totalPointsAgainst": 679,
   "mixedWins": 2,
   "mixedLosses": 14,
   "genderWins": 10,
   "genderLosses": 10,
   "clutchWins": 3,
   "clutchLosses": 8,
   "winPct": 33.3,
   "diff": -22,
   "ppg": 18.3,
   "leagueRank": 116,
   "rating": 0.2,
   "ratingGames": 36,
   "confidence": 85,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.2,
   "playerId": "25aa47d0-76b8-48be-a5be-b1d33b423e82"
  },
  {
   "name": "Maeve Mcgowan",
   "gender": "Female",
   "team": "Jersey Devil",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 4,
   "losses": 8,
   "pointsWon": 217,
   "totalPointsAgainst": 244,
   "mixedWins": 2,
   "mixedLosses": 6,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 33.3,
   "diff": -27,
   "ppg": 18.1,
   "leagueRank": 121,
   "rating": 0,
   "ratingGames": 12,
   "confidence": 70,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.8,
   "playerId": "24325b7a-50bd-42dc-84c2-e3ac54360f9c"
  },
  {
   "name": "Darren Johnson",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 4,
   "losses": 8,
   "pointsWon": 210,
   "totalPointsAgainst": 243,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 33.3,
   "diff": -33,
   "ppg": 17.5,
   "leagueRank": 170,
   "rating": -0.1,
   "ratingGames": 12,
   "confidence": 70,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 1.4,
   "playerId": "00092e4b-b019-43ae-bfef-503e1fc6f657"
  },
  {
   "name": "Angela Luo",
   "gender": "Female",
   "team": "Monroe",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 4,
   "losses": 8,
   "pointsWon": 209,
   "totalPointsAgainst": 243,
   "mixedWins": 3,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 33.3,
   "diff": -34,
   "ppg": 17.4,
   "leagueRank": 133,
   "rating": -0.5,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.8,
   "playerId": "0cb538a5-0d5d-47a7-b854-38394ac9652f"
  },
  {
   "name": "Marcos Claros",
   "gender": "Male",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 4,
   "losses": 8,
   "pointsWon": 197,
   "totalPointsAgainst": 235,
   "mixedWins": 3,
   "mixedLosses": 5,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 33.3,
   "diff": -38,
   "ppg": 16.4,
   "leagueRank": 146,
   "rating": -2.3,
   "ratingGames": 12,
   "confidence": 70,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.1,
   "playerId": "839ee2ac-03d5-4fee-bc87-08709afae5f2"
  },
  {
   "name": "Megan Harvey",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 8,
   "losses": 16,
   "pointsWon": 417,
   "totalPointsAgainst": 470,
   "mixedWins": 3,
   "mixedLosses": 7,
   "genderWins": 5,
   "genderLosses": 9,
   "clutchWins": 3,
   "clutchLosses": 7,
   "winPct": 33.3,
   "diff": -53,
   "ppg": 17.4,
   "leagueRank": 137,
   "rating": -1.3,
   "ratingGames": 24,
   "confidence": 81,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.5,
   "playerId": "4d576bb5-e9e5-4ad1-a18f-022508c6a161"
  },
  {
   "name": "Anushk Gupta",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro Aces",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 7,
   "losses": 15,
   "pointsWon": 382,
   "totalPointsAgainst": 436,
   "mixedWins": 2,
   "mixedLosses": 8,
   "genderWins": 5,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 6,
   "winPct": 31.8,
   "diff": -54,
   "ppg": 17.4,
   "leagueRank": 130,
   "rating": -0.7,
   "ratingGames": 22,
   "confidence": 79,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.3,
   "playerId": "1a851b17-0445-4807-b476-575fd261f774"
  },
  {
   "name": "Nam Barsh",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 6,
   "losses": 13,
   "pointsWon": 340,
   "totalPointsAgainst": 360,
   "mixedWins": 3,
   "mixedLosses": 6,
   "genderWins": 3,
   "genderLosses": 7,
   "clutchWins": 2,
   "clutchLosses": 6,
   "winPct": 31.6,
   "diff": -20,
   "ppg": 17.9,
   "leagueRank": 124,
   "rating": -0.3,
   "ratingGames": 19,
   "confidence": 78,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.4,
   "playerId": "fa43af77-3cd1-4e61-a8dc-bd714b65d517"
  },
  {
   "name": "Dipen Bhatt",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 6,
   "losses": 13,
   "pointsWon": 338,
   "totalPointsAgainst": 369,
   "mixedWins": 4,
   "mixedLosses": 6,
   "genderWins": 2,
   "genderLosses": 7,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 31.6,
   "diff": -31,
   "ppg": 17.8,
   "leagueRank": 140,
   "rating": -2.2,
   "ratingGames": 19,
   "confidence": 77,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0,
   "playerId": "fe8af1d3-ff62-430d-90af-32794cc7b912"
  },
  {
   "name": "Kara Infante",
   "gender": "Female",
   "team": "Home Court",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 9,
   "losses": 20,
   "pointsWon": 522,
   "totalPointsAgainst": 557,
   "mixedWins": 3,
   "mixedLosses": 11,
   "genderWins": 6,
   "genderLosses": 9,
   "clutchWins": 3,
   "clutchLosses": 9,
   "winPct": 31,
   "diff": -35,
   "ppg": 18,
   "leagueRank": 125,
   "rating": -0.6,
   "ratingGames": 29,
   "confidence": 83,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.3,
   "playerId": "06edda3d-3a1f-4010-86fa-8ac767cd7079"
  },
  {
   "name": "Eva Danieli",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 9,
   "losses": 20,
   "pointsWon": 503,
   "totalPointsAgainst": 575,
   "mixedWins": 4,
   "mixedLosses": 11,
   "genderWins": 5,
   "genderLosses": 9,
   "clutchWins": 4,
   "clutchLosses": 8,
   "winPct": 31,
   "diff": -72,
   "ppg": 17.3,
   "leagueRank": 142,
   "rating": -2.2,
   "ratingGames": 29,
   "confidence": 83,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.1,
   "playerId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae"
  },
  {
   "name": "Sheila Siu",
   "gender": "Female",
   "team": "Home Court",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 4,
   "losses": 9,
   "pointsWon": 227,
   "totalPointsAgainst": 254,
   "mixedWins": 2,
   "mixedLosses": 8,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 30.8,
   "diff": -27,
   "ppg": 17.5,
   "leagueRank": 139,
   "rating": -1.7,
   "ratingGames": 13,
   "confidence": 72,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.2,
   "playerId": "25879a0b-5df5-4c12-9066-4aaaf4e6cbc0"
  },
  {
   "name": "Kevin Wysoczynski",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 8,
   "losses": 18,
   "pointsWon": 453,
   "totalPointsAgainst": 497,
   "mixedWins": 2,
   "mixedLosses": 8,
   "genderWins": 6,
   "genderLosses": 10,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 30.8,
   "diff": -44,
   "ppg": 17.4,
   "leagueRank": 134,
   "rating": -1.1,
   "ratingGames": 26,
   "confidence": 81,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0,
   "playerId": "f64f0cc2-6c82-4fe4-9992-747512700971"
  },
  {
   "name": "Will Delaney",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro Aces",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 3,
   "losses": 7,
   "pointsWon": 179,
   "totalPointsAgainst": 202,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 30,
   "diff": -23,
   "ppg": 17.9,
   "leagueRank": 156,
   "rating": -1.5,
   "ratingGames": 10,
   "confidence": 63,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -0.4,
   "playerId": "a242cd39-8574-444a-99dc-95967faad87b"
  },
  {
   "name": "Tom Laiso",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 6,
   "losses": 14,
   "pointsWon": 346,
   "totalPointsAgainst": 392,
   "mixedWins": 2,
   "mixedLosses": 9,
   "genderWins": 4,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 5,
   "winPct": 30,
   "diff": -46,
   "ppg": 17.3,
   "leagueRank": 135,
   "rating": -0.5,
   "ratingGames": 20,
   "confidence": 79,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.5,
   "playerId": "13918154-3673-4dae-946a-2c2d4ac8863f"
  },
  {
   "name": "Sarah Ross",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro Aces",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 32,
   "wins": 9,
   "losses": 23,
   "pointsWon": 566,
   "totalPointsAgainst": 627,
   "mixedWins": 7,
   "mixedLosses": 8,
   "genderWins": 2,
   "genderLosses": 15,
   "clutchWins": 2,
   "clutchLosses": 8,
   "winPct": 28.1,
   "diff": -61,
   "ppg": 17.7,
   "leagueRank": 131,
   "rating": -0.7,
   "ratingGames": 32,
   "confidence": 84,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0,
   "playerId": "261d14c5-288e-4349-a3ed-50bad4b620c1"
  },
  {
   "name": "Sophia Kaufmann",
   "gender": "Female",
   "team": "Monroe",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 5,
   "losses": 13,
   "pointsWon": 308,
   "totalPointsAgainst": 358,
   "mixedWins": 4,
   "mixedLosses": 6,
   "genderWins": 1,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 27.8,
   "diff": -50,
   "ppg": 17.1,
   "leagueRank": 144,
   "rating": -1.4,
   "ratingGames": 18,
   "confidence": 76,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 1,
   "playerId": "44f258b0-52df-4c16-8d1e-a9f2d65b439e"
  },
  {
   "name": "Sarah Kline",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 5,
   "losses": 13,
   "pointsWon": 304,
   "totalPointsAgainst": 357,
   "mixedWins": 1,
   "mixedLosses": 7,
   "genderWins": 4,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 27.8,
   "diff": -53,
   "ppg": 16.9,
   "leagueRank": 147,
   "rating": -1.5,
   "ratingGames": 18,
   "confidence": 77,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.9,
   "playerId": "b122f262-f81d-4fb2-9f11-c473d18a4260"
  },
  {
   "name": "Daniel Gallegos",
   "gender": "Male",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 3,
   "losses": 8,
   "pointsWon": 181,
   "totalPointsAgainst": 212,
   "mixedWins": 1,
   "mixedLosses": 5,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 27.3,
   "diff": -31,
   "ppg": 16.5,
   "leagueRank": 162,
   "rating": -2.3,
   "ratingGames": 11,
   "confidence": 65,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.4,
   "playerId": "6f9cb35b-f24c-4480-a8b4-86e6ea32f3c2"
  },
  {
   "name": "Raneeta Sawhney-Rigby",
   "gender": "Female",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 3,
   "losses": 8,
   "pointsWon": 172,
   "totalPointsAgainst": 216,
   "mixedWins": 1,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 27.3,
   "diff": -44,
   "ppg": 15.6,
   "leagueRank": 168,
   "rating": -1.8,
   "ratingGames": 11,
   "confidence": 66,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.5,
   "playerId": "8ee2191e-34c1-4f6b-b366-5a1bbc5bcb36"
  },
  {
   "name": "Sebastian Ferrer",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 4,
   "losses": 11,
   "pointsWon": 268,
   "totalPointsAgainst": 291,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 2,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 6,
   "winPct": 26.7,
   "diff": -23,
   "ppg": 17.9,
   "leagueRank": 127,
   "rating": 1,
   "ratingGames": 15,
   "confidence": 73,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 1.1,
   "playerId": "5c354e5d-09ba-4d09-a8c4-76e0fb7eb78a"
  },
  {
   "name": "Adam Beck",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro Aces",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 5,
   "losses": 14,
   "pointsWon": 309,
   "totalPointsAgainst": 385,
   "mixedWins": 3,
   "mixedLosses": 9,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 26.3,
   "diff": -76,
   "ppg": 16.3,
   "leagueRank": 151,
   "rating": -0.7,
   "ratingGames": 19,
   "confidence": 77,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": 0.6,
   "playerId": "7d836ecc-e553-4966-9c12-2dc698a545d0"
  },
  {
   "name": "Hany Ibrahim",
   "gender": "Male",
   "team": "Home Court",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 1,
   "losses": 3,
   "pointsWon": 63,
   "totalPointsAgainst": 80,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 25,
   "diff": -17,
   "ppg": 15.8,
   "leagueRank": 190,
   "rating": -1.2,
   "ratingGames": 4,
   "confidence": 46,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.5,
   "playerId": "5b439439-36f5-421f-afaa-5d8b1a547954"
  },
  {
   "name": "Kevin Riordan",
   "gender": "Male",
   "team": "Home Court",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 144,
   "totalPointsAgainst": 162,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 25,
   "diff": -18,
   "ppg": 18,
   "leagueRank": 171,
   "rating": -1.7,
   "ratingGames": 8,
   "confidence": 56,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0,
   "playerId": "7c3dc06e-3448-4274-aab2-521cb3f13b75"
  },
  {
   "name": "Stephanie Moniz",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 130,
   "totalPointsAgainst": 161,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 25,
   "diff": -31,
   "ppg": 16.3,
   "leagueRank": 179,
   "rating": 0.2,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 1.5,
   "playerId": "5fd7e152-10cf-4669-bcf2-09a067870bf0"
  },
  {
   "name": "Lauren Mercado",
   "gender": "Female",
   "team": "Jersey Devil",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 3,
   "losses": 9,
   "pointsWon": 189,
   "totalPointsAgainst": 243,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 25,
   "diff": -54,
   "ppg": 15.8,
   "leagueRank": 165,
   "rating": -3.2,
   "ratingGames": 12,
   "confidence": 70,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0,
   "playerId": "0aa554f3-0eca-4f2d-b3d9-b277406a7435"
  },
  {
   "name": "Robert Schimony",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro Aces",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 5,
   "losses": 15,
   "pointsWon": 291,
   "totalPointsAgainst": 400,
   "mixedWins": 0,
   "mixedLosses": 8,
   "genderWins": 5,
   "genderLosses": 7,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 25,
   "diff": -109,
   "ppg": 14.6,
   "leagueRank": 166,
   "rating": -3.4,
   "ratingGames": 20,
   "confidence": 77,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.1,
   "playerId": "b85c2074-a149-4382-8563-e1ff5b5d70bc"
  },
  {
   "name": "William Lee",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro Aces",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 33,
   "wins": 8,
   "losses": 25,
   "pointsWon": 550,
   "totalPointsAgainst": 661,
   "mixedWins": 6,
   "mixedLosses": 13,
   "genderWins": 2,
   "genderLosses": 12,
   "clutchWins": 3,
   "clutchLosses": 7,
   "winPct": 24.2,
   "diff": -111,
   "ppg": 16.7,
   "leagueRank": 152,
   "rating": -0.8,
   "ratingGames": 33,
   "confidence": 85,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": 0.3,
   "playerId": "9e264c96-36cf-45a9-90ad-1e125a82c851"
  },
  {
   "name": "Ethan Henigan",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro Aces",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 3,
   "losses": 10,
   "pointsWon": 237,
   "totalPointsAgainst": 264,
   "mixedWins": 1,
   "mixedLosses": 7,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 6,
   "winPct": 23.1,
   "diff": -27,
   "ppg": 18.2,
   "leagueRank": 149,
   "rating": 0.1,
   "ratingGames": 13,
   "confidence": 72,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.9,
   "playerId": "4a1d4e3a-07b2-4575-b80d-6d160b0c7a23"
  },
  {
   "name": "Matthew Matro",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 3,
   "losses": 10,
   "pointsWon": 226,
   "totalPointsAgainst": 264,
   "mixedWins": 3,
   "mixedLosses": 5,
   "genderWins": 0,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 23.1,
   "diff": -38,
   "ppg": 17.4,
   "leagueRank": 150,
   "rating": -2,
   "ratingGames": 13,
   "confidence": 71,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.3,
   "playerId": "7b2e1bed-f387-48de-a028-bdde357bb3af"
  },
  {
   "name": "Lilie Sen",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro Aces",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 3,
   "losses": 11,
   "pointsWon": 243,
   "totalPointsAgainst": 285,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 21.4,
   "diff": -42,
   "ppg": 17.4,
   "leagueRank": 153,
   "rating": -1.6,
   "ratingGames": 14,
   "confidence": 72,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": -0.3,
   "playerId": "3aa34138-1989-4d89-b656-3e0c44b23b6f"
  },
  {
   "name": "Andrew Bernard",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 4,
   "losses": 16,
   "pointsWon": 321,
   "totalPointsAgainst": 398,
   "mixedWins": 3,
   "mixedLosses": 9,
   "genderWins": 1,
   "genderLosses": 7,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 20,
   "diff": -77,
   "ppg": 16.1,
   "leagueRank": 161,
   "rating": -2.5,
   "ratingGames": 20,
   "confidence": 78,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.2,
   "playerId": "8079e74f-c537-4e42-9590-e8d60f10ba3d"
  },
  {
   "name": "Kathleen Dougherty",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 2,
   "losses": 9,
   "pointsWon": 180,
   "totalPointsAgainst": 225,
   "mixedWins": 1,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 18.2,
   "diff": -45,
   "ppg": 16.4,
   "leagueRank": 174,
   "rating": -1.8,
   "ratingGames": 11,
   "confidence": 68,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 1.1,
   "playerId": "c929f42d-6fd4-4034-888e-ad456cda3063"
  },
  {
   "name": "Claudya Elefante",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro Aces",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 33,
   "wins": 6,
   "losses": 27,
   "pointsWon": 578,
   "totalPointsAgainst": 672,
   "mixedWins": 4,
   "mixedLosses": 12,
   "genderWins": 2,
   "genderLosses": 15,
   "clutchWins": 3,
   "clutchLosses": 9,
   "winPct": 18.2,
   "diff": -94,
   "ppg": 17.5,
   "leagueRank": 154,
   "rating": -0.9,
   "ratingGames": 33,
   "confidence": 84,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.4,
   "playerId": "c6a7f237-8e09-45e4-b34e-d179e46b61b1"
  },
  {
   "name": "Vince Abate",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 104,
   "totalPointsAgainst": 121,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 16.7,
   "diff": -17,
   "ppg": 17.3,
   "leagueRank": 186,
   "rating": -2.6,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": -1.4,
   "playerId": "8257200c-7448-4527-92df-436d7bb18cac"
  },
  {
   "name": "Gage Cvijic",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 100,
   "totalPointsAgainst": 124,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 16.7,
   "diff": -24,
   "ppg": 16.7,
   "leagueRank": 187,
   "rating": -1.7,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 1,
   "playerId": "4572bf15-1066-42b7-ae74-94d6175b1b96"
  },
  {
   "name": "Morgan Fishman",
   "gender": "Female",
   "team": "Monroe",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 2,
   "losses": 10,
   "pointsWon": 199,
   "totalPointsAgainst": 244,
   "mixedWins": 1,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 16.7,
   "diff": -45,
   "ppg": 16.6,
   "leagueRank": 159,
   "rating": -1.7,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 1.1,
   "playerId": "5ccee070-0af8-4363-9ddb-6ce8ebce098f"
  },
  {
   "name": "Ashwin Korde",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 2,
   "losses": 10,
   "pointsWon": 185,
   "totalPointsAgainst": 243,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 16.7,
   "diff": -58,
   "ppg": 15.4,
   "leagueRank": 175,
   "rating": -3.5,
   "ratingGames": 12,
   "confidence": 70,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.5,
   "playerId": "f9f521ee-5f27-4f61-b4e0-4e0b9ad09aee"
  },
  {
   "name": "Julia Plein",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro Aces",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 3,
   "losses": 15,
   "pointsWon": 247,
   "totalPointsAgainst": 361,
   "mixedWins": 2,
   "mixedLosses": 9,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 16.7,
   "diff": -114,
   "ppg": 13.7,
   "leagueRank": 176,
   "rating": -3.1,
   "ratingGames": 18,
   "confidence": 77,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": 0.4,
   "playerId": "f3d99274-413c-4720-9c8d-1a71f9b2e717"
  },
  {
   "name": "Erika Richards",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro Aces",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 4,
   "losses": 21,
   "pointsWon": 399,
   "totalPointsAgainst": 513,
   "mixedWins": 3,
   "mixedLosses": 9,
   "genderWins": 1,
   "genderLosses": 12,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 16,
   "diff": -114,
   "ppg": 16,
   "leagueRank": 164,
   "rating": -2.3,
   "ratingGames": 25,
   "confidence": 81,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 0.3,
   "playerId": "065e606f-3722-4434-8848-28e4d10ccabd"
  },
  {
   "name": "Marc Harden",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 111,
   "totalPointsAgainst": 163,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 12.5,
   "diff": -52,
   "ppg": 13.9,
   "leagueRank": 188,
   "rating": -1.6,
   "ratingGames": 8,
   "confidence": 60,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 1.6,
   "playerId": "55194d2f-f537-4e19-b901-86c559f25ef2"
  },
  {
   "name": "Vaughn Mcclelland",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 111,
   "totalPointsAgainst": 166,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 12.5,
   "diff": -55,
   "ppg": 13.9,
   "leagueRank": 189,
   "rating": -2.5,
   "ratingGames": 8,
   "confidence": 61,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 1.6,
   "playerId": "c33f3ff1-2c81-4630-8980-64fa03a7b102"
  },
  {
   "name": "Noah Goding",
   "gender": "Male",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 1,
   "losses": 11,
   "pointsWon": 202,
   "totalPointsAgainst": 243,
   "mixedWins": 0,
   "mixedLosses": 6,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 4,
   "winPct": 8.3,
   "diff": -41,
   "ppg": 16.8,
   "leagueRank": 167,
   "rating": -1,
   "ratingGames": 12,
   "confidence": 67,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.8,
   "playerId": "80138d68-a74a-4f8c-aea1-7d31e682efa8"
  },
  {
   "name": "Aimee Castellano",
   "gender": "Female",
   "team": "Flemington",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 1,
   "losses": 11,
   "pointsWon": 193,
   "totalPointsAgainst": 249,
   "mixedWins": 1,
   "mixedLosses": 5,
   "genderWins": 0,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 8.3,
   "diff": -56,
   "ppg": 16.1,
   "leagueRank": 177,
   "rating": -2.8,
   "ratingGames": 12,
   "confidence": 70,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.7,
   "playerId": "e76985fb-efd1-4180-a340-e4f36abbc8b4"
  },
  {
   "name": "Matthew Chen",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 1,
   "losses": 11,
   "pointsWon": 178,
   "totalPointsAgainst": 250,
   "mixedWins": 1,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 8.3,
   "diff": -72,
   "ppg": 14.8,
   "leagueRank": 180,
   "rating": -2.6,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 1.2,
   "playerId": "68e9ac74-5119-4dbb-8503-72bcdbade183"
  },
  {
   "name": "Zyril Carilo",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 1,
   "losses": 13,
   "pointsWon": 237,
   "totalPointsAgainst": 292,
   "mixedWins": 0,
   "mixedLosses": 6,
   "genderWins": 1,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 6,
   "winPct": 7.1,
   "diff": -55,
   "ppg": 16.9,
   "leagueRank": 172,
   "rating": -2.1,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 1,
   "playerId": "b4efc48a-f302-4d27-8c35-0dac1e68eec8"
  },
  {
   "name": "Alyssa Tartaglia",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro Aces",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 1,
   "losses": 24,
   "pointsWon": 368,
   "totalPointsAgainst": 520,
   "mixedWins": 0,
   "mixedLosses": 14,
   "genderWins": 1,
   "genderLosses": 10,
   "clutchWins": 0,
   "clutchLosses": 4,
   "winPct": 4,
   "diff": -152,
   "ppg": 14.7,
   "leagueRank": 183,
   "rating": -2.8,
   "ratingGames": 25,
   "confidence": 82,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 1,
   "playerId": "881ed39f-f9fc-4e9d-8ed3-d13d9ebc7b13"
  },
  {
   "name": "Clayton Schmucker",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro The Factory",
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
   "leagueRank": 207,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "0be72348-4a00-413e-bf40-df6824c3cca3"
  },
  {
   "name": "Samantha Adler",
   "gender": "Female",
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
   "leagueRank": 199,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "49ef6026-5d4e-4686-801a-4a47fde8b597"
  },
  {
   "name": "Kishan Shah",
   "gender": "Male",
   "team": "Pickle House",
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
   "leagueRank": 209,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "8ca1f741-6a67-4332-9ca7-082671211098"
  },
  {
   "name": "Margaret Robb",
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
   "leagueRank": 205,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "9bd69558-b2d9-4f5a-9cc1-177713707ab7"
  },
  {
   "name": "Matthew Russell",
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
   "leagueRank": 206,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "a667ec5e-c910-4115-b4d2-93d2dcfacbe8"
  },
  {
   "name": "Jacob Yandoli",
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
   "leagueRank": 212,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "be9bc229-2d57-4236-a951-11a2f91a09a3"
  },
  {
   "name": "Dustin Rabinowitz",
   "gender": "Male",
   "team": "Bounce Philly",
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
   "playerId": "d23839c0-334b-4423-9305-0c6281523d5d"
  },
  {
   "name": "Michael Velez",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro Aces",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 108,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 4,
   "winPct": 0,
   "diff": -18,
   "ppg": 18,
   "leagueRank": 185,
   "rating": 0.4,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 1.1,
   "playerId": "772b8bd9-ee55-463b-8e7d-f5e571a2f047"
  },
  {
   "name": "Zachery Corey",
   "gender": "Male",
   "team": "Home Court",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 0,
   "losses": 4,
   "pointsWon": 61,
   "totalPointsAgainst": 84,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -23,
   "ppg": 15.3,
   "leagueRank": 198,
   "rating": -3.2,
   "ratingGames": 4,
   "confidence": 42,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.6,
   "playerId": "4cc3e75e-499c-4c58-9146-d0d46fa15f71"
  },
  {
   "name": "Natasha De Carvalho",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 76,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -29,
   "ppg": 15.2,
   "leagueRank": 194,
   "rating": -2.1,
   "ratingGames": 5,
   "confidence": 51,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.6,
   "playerId": "462f3a15-22ed-4fa3-b698-78678a5d6966"
  },
  {
   "name": "Alice Napolitano",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 74,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -31,
   "ppg": 14.8,
   "leagueRank": 195,
   "rating": -1.9,
   "ratingGames": 5,
   "confidence": 51,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 1.1,
   "playerId": "d56483b8-a5b8-4c1f-8437-39fcf90a5030"
  },
  {
   "name": "Sarah Nazario",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 0,
   "outsideSub": true,
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
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -35,
   "ppg": 14,
   "leagueRank": 197,
   "rating": -2.1,
   "ratingGames": 5,
   "confidence": 51,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 1,
   "playerId": "d457bcf7-383d-4b25-a7a9-a456e5803087"
  },
  {
   "name": "Gavin Malave",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro Aces",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 89,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 0,
   "diff": -37,
   "ppg": 14.8,
   "leagueRank": 193,
   "rating": -2,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 1,
   "playerId": "0eb33201-72fc-4c64-897a-85c3d9d64373"
  },
  {
   "name": "Adrienne Butrymowicz",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 1,
   "outsideSub": false,
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
   "clutchLosses": 2,
   "winPct": 0,
   "diff": -52,
   "ppg": 14.5,
   "leagueRank": 191,
   "rating": -1.8,
   "ratingGames": 8,
   "confidence": 59,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 2.1,
   "playerId": "279df046-e022-4adf-a5ea-4072a29d9622"
  },
  {
   "name": "Helen Liu",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro Aces",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 0,
   "losses": 7,
   "pointsWon": 82,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -65,
   "ppg": 11.7,
   "leagueRank": 196,
   "rating": -3.9,
   "ratingGames": 7,
   "confidence": 54,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": 0.7,
   "playerId": "53cc1790-d8b9-4b64-a8b3-6e10b2eeb131"
  }
 ],
 "teams": [
  {
   "name": "Pickleball Kingdom Hillsborough",
   "w": 5,
   "l": 0,
   "pf": 3252,
   "pa": 2896,
   "gw": 104,
   "gl": 56,
   "diff": 356,
   "gameDiff": 48,
   "power": 1.1,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     51,
     29
    ],
    "male": [
     25,
     15
    ],
    "female": [
     28,
     12
    ]
   }
  },
  {
   "name": "Pickle House",
   "w": 4,
   "l": 1,
   "pf": 3194,
   "pa": 2954,
   "gw": 101,
   "gl": 59,
   "diff": 240,
   "gameDiff": 42,
   "power": 0.9,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     54,
     26
    ],
    "male": [
     15,
     25
    ],
    "female": [
     32,
     8
    ]
   }
  },
  {
   "name": "Bounce Malvern",
   "w": 4,
   "l": 1,
   "pf": 3168,
   "pa": 2957,
   "gw": 90,
   "gl": 70,
   "diff": 211,
   "gameDiff": 20,
   "power": 0.9,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     45,
     35
    ],
    "male": [
     23,
     17
    ],
    "female": [
     22,
     18
    ]
   }
  },
  {
   "name": "Dill Dinkers Hatboro The Factory",
   "w": 3,
   "l": 1,
   "pf": 2612,
   "pa": 2254,
   "gw": 92,
   "gl": 36,
   "diff": 358,
   "gameDiff": 56,
   "power": 1,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     47,
     17
    ],
    "male": [
     22,
     10
    ],
    "female": [
     23,
     9
    ]
   }
  },
  {
   "name": "ACE Moorestown",
   "w": 3,
   "l": 1,
   "pf": 2481,
   "pa": 2352,
   "gw": 78,
   "gl": 50,
   "diff": 129,
   "gameDiff": 28,
   "power": 0.4,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     38,
     26
    ],
    "male": [
     19,
     13
    ],
    "female": [
     21,
     11
    ]
   }
  },
  {
   "name": "Bounce Philly",
   "w": 2,
   "l": 2,
   "pf": 2458,
   "pa": 2464,
   "gw": 62,
   "gl": 66,
   "diff": -6,
   "gameDiff": -4,
   "power": 0.3,
   "powerRank": 4,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     30,
     34
    ],
    "male": [
     16,
     16
    ],
    "female": [
     16,
     16
    ]
   }
  },
  {
   "name": "Flemington",
   "w": 2,
   "l": 3,
   "pf": 2384,
   "pa": 2490,
   "gw": 82,
   "gl": 78,
   "diff": -106,
   "gameDiff": 4,
   "power": 0,
   "powerRank": 4,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     44,
     36
    ],
    "male": [
     25,
     15
    ],
    "female": [
     13,
     27
    ]
   }
  },
  {
   "name": "Monroe",
   "w": 2,
   "l": 3,
   "pf": 3076,
   "pa": 3095,
   "gw": 79,
   "gl": 81,
   "diff": -19,
   "gameDiff": -2,
   "power": 0.4,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     42,
     38
    ],
    "male": [
     23,
     17
    ],
    "female": [
     14,
     26
    ]
   }
  },
  {
   "name": "Jersey Devil",
   "w": 1,
   "l": 3,
   "pf": 2416,
   "pa": 2539,
   "gw": 56,
   "gl": 72,
   "diff": -123,
   "gameDiff": -16,
   "power": -0.2,
   "powerRank": 5,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     28,
     36
    ],
    "male": [
     11,
     21
    ],
    "female": [
     17,
     15
    ]
   }
  },
  {
   "name": "Jersey Pickleball Club",
   "w": 1,
   "l": 4,
   "pf": 2876,
   "pa": 3202,
   "gw": 58,
   "gl": 102,
   "diff": -326,
   "gameDiff": -44,
   "power": -0.5,
   "powerRank": 6,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     28,
     52
    ],
    "male": [
     16,
     24
    ],
    "female": [
     14,
     26
    ]
   }
  },
  {
   "name": "Home Court",
   "w": 1,
   "l": 4,
   "pf": 2372,
   "pa": 2517,
   "gw": 56,
   "gl": 104,
   "diff": -145,
   "gameDiff": -48,
   "power": -0.4,
   "powerRank": 5,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     21,
     59
    ],
    "male": [
     16,
     24
    ],
    "female": [
     19,
     21
    ]
   }
  },
  {
   "name": "Dill Dinkers Hatboro Aces",
   "w": 0,
   "l": 5,
   "pf": 2715,
   "pa": 3284,
   "gw": 38,
   "gl": 122,
   "diff": -569,
   "gameDiff": -84,
   "power": -1.4,
   "powerRank": 6,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     20,
     60
    ],
    "male": [
     13,
     27
    ],
    "female": [
     5,
     35
    ]
   }
  }
 ],
 "duos": [
  {
   "a": "Yuki Kim",
   "b": "Sarah Kline",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 2.4,
   "avgActual": 4.8,
   "avgExpected": -0.2,
   "aId": "afec0287-b62d-4aaf-977f-afb96aed0e17",
   "bId": "b122f262-f81d-4fb2-9f11-c473d18a4260"
  },
  {
   "a": "Nathan Malhotra",
   "b": "Austin Williams",
   "team": "Home Court",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 2.4,
   "avgActual": 4.3,
   "avgExpected": -0.5,
   "aId": "98bd685a-3161-45fc-941f-3a8c9f4849cf",
   "bId": "bb0bdc33-be20-4a45-9de9-0a52a88d7af9"
  },
  {
   "a": "Aurora Lewis",
   "b": "Ashley Barros",
   "team": "Home Court",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.3,
   "avgActual": 6.7,
   "avgExpected": 1.4,
   "aId": "3fe06711-5561-47b8-ad95-382cd0bcff9a",
   "bId": "6656b9a3-3c47-4711-8609-e35c07c64771"
  },
  {
   "a": "Tin Wai Kwan",
   "b": "Zach Hizer",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.1,
   "avgActual": 5.3,
   "avgExpected": 0.5,
   "aId": "22fe1980-7ef9-4026-8c76-a39534431c6b",
   "bId": "b5e576e1-d16d-4c9d-ab28-2e1b1e66487b"
  },
  {
   "a": "Chris Long",
   "b": "Jason Makarevic",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.9,
   "avgActual": 2.7,
   "avgExpected": -1.7,
   "aId": "f7f6ce2d-1cbb-45f9-ad8f-e42b89b99554",
   "bId": "f8835822-da21-4593-8b99-5665d2c2f3af"
  },
  {
   "a": "Kerrin Maurer",
   "b": "Zach Hollmann",
   "team": "Pickle House",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.9,
   "avgActual": 8,
   "avgExpected": 4.3,
   "aId": "1d63ce3d-20c2-40ae-94ca-e8e6e458004e",
   "bId": "8aef2d8a-0bd4-45df-b5d1-1a120a81ef0f"
  },
  {
   "a": "Shashank Kamdar",
   "b": "Teresa Wang",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.9,
   "avgActual": 6.3,
   "avgExpected": 1.9,
   "aId": "56db4b56-6166-437f-8ece-26576b7042e5",
   "bId": "741de6b9-5fe7-49aa-9c55-5ff4050bb7a1"
  },
  {
   "a": "Anita Buggins",
   "b": "Nathan Law",
   "team": "ACE Moorestown",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.8,
   "avgActual": 3.4,
   "avgExpected": 0.2,
   "aId": "2ea90a18-1ef3-4ade-a855-2a3fd178abd7",
   "bId": "3c81d27f-9e68-439b-a476-f5ac1a54f45a"
  },
  {
   "a": "Sebastian Ferrer",
   "b": "Matt Schall",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.8,
   "avgActual": 2.7,
   "avgExpected": -1.6,
   "aId": "5c354e5d-09ba-4d09-a8c4-76e0fb7eb78a",
   "bId": "aa0d9944-a9d3-46d5-8650-54e894adfeb2"
  },
  {
   "a": "Ken Velarde",
   "b": "Daniel Gallegos",
   "team": "Home Court",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.7,
   "avgActual": 4,
   "avgExpected": 0,
   "aId": "25aa47d0-76b8-48be-a5be-b1d33b423e82",
   "bId": "6f9cb35b-f24c-4480-a8b4-86e6ea32f3c2"
  },
  {
   "a": "Kara Infante",
   "b": "Aurora Lewis",
   "team": "Home Court",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.7,
   "avgActual": 2.6,
   "avgExpected": -0.5,
   "aId": "06edda3d-3a1f-4010-86fa-8ac767cd7079",
   "bId": "3fe06711-5561-47b8-ad95-382cd0bcff9a"
  },
  {
   "a": "Catherine Stewart",
   "b": "Matt Schall",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.7,
   "avgActual": 2.8,
   "avgExpected": -0.5,
   "aId": "112622af-3d12-4dba-ad36-7601c8e6021c",
   "bId": "aa0d9944-a9d3-46d5-8650-54e894adfeb2"
  },
  {
   "a": "Kelly Arvidson",
   "b": "Ross Switkes",
   "team": "Flemington",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.7,
   "avgActual": 2,
   "avgExpected": -1.4,
   "aId": "c053f5d6-16e1-4847-b27b-49fe41f367c6",
   "bId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b"
  },
  {
   "a": "Ariana Rizvani",
   "b": "Aidan Jackson",
   "team": "Home Court",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.6,
   "avgActual": 3,
   "avgExpected": 0.1,
   "aId": "1c7e9745-06f1-4486-9b14-5f4205128867",
   "bId": "c821be96-b764-46ad-85a2-8927711684c5"
  },
  {
   "a": "Adam Beck",
   "b": "Robert Schimony",
   "team": "Dill Dinkers Hatboro Aces",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.6,
   "avgActual": -0.7,
   "avgExpected": -4.5,
   "aId": "7d836ecc-e553-4966-9c12-2dc698a545d0",
   "bId": "b85c2074-a149-4382-8563-e1ff5b5d70bc"
  },
  {
   "a": "William Lee",
   "b": "Julia Plein",
   "team": "Dill Dinkers Hatboro Aces",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.6,
   "avgActual": -0.3,
   "avgExpected": -4.2,
   "aId": "9e264c96-36cf-45a9-90ad-1e125a82c851",
   "bId": "f3d99274-413c-4720-9c8d-1a71f9b2e717"
  },
  {
   "a": "Caleb Perry-Abner",
   "b": "Tyler Arsenault",
   "team": "Jersey Devil",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.6,
   "avgActual": 3.3,
   "avgExpected": 0.1,
   "aId": "c25e04ae-a9bf-4943-858d-5b7a94261e43",
   "bId": "e76d2d63-f7dc-40e7-aca2-d9b3aecf4d3e"
  },
  {
   "a": "Tom Laiso",
   "b": "Kevin Wysoczynski",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 3,
   "avgExpected": -0.5,
   "aId": "13918154-3673-4dae-946a-2c2d4ac8863f",
   "bId": "f64f0cc2-6c82-4fe4-9992-747512700971"
  },
  {
   "a": "Arianna Haresign",
   "b": "Zach Bowe",
   "team": "Jersey Devil",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 1.5,
   "avgActual": 5.6,
   "avgExpected": 3,
   "aId": "556f84fc-4f7c-4199-a104-6e906d71605c",
   "bId": "eebadc3a-5763-4612-9232-d3a98ea188d6"
  },
  {
   "a": "Patrick Ryan",
   "b": "Ross Switkes",
   "team": "Flemington",
   "n": 10,
   "w": 10,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 4.3,
   "avgExpected": 2.4,
   "aId": "8344fbda-35c2-4ce0-94ad-158090d2d5ba",
   "bId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b"
  },
  {
   "a": "Zach Hollmann",
   "b": "Michael Li",
   "team": "Pickle House",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 4.5,
   "avgExpected": 1.7,
   "aId": "8aef2d8a-0bd4-45df-b5d1-1a120a81ef0f",
   "bId": "dc81629b-4ff7-45c4-b38e-b3b836bc0769"
  },
  {
   "a": "Thomas Connolly",
   "b": "Robbie Oddy",
   "team": "Flemington",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": 1.3,
   "avgActual": 1.6,
   "avgExpected": -0.3,
   "aId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3",
   "bId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6"
  },
  {
   "a": "Chris Tabeling",
   "b": "Nick Meale",
   "team": "Bounce Malvern",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 1.3,
   "avgActual": 5.6,
   "avgExpected": 3.7,
   "aId": "0ee404b2-e9e6-49b4-b9eb-bc2120473f76",
   "bId": "ec0bad09-8256-49b3-ae86-3add22dd995f"
  },
  {
   "a": "Taylor Hartman",
   "b": "Chris Damato",
   "team": "Pickle House",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 2,
   "avgExpected": -0.5,
   "aId": "3bf2f55b-b253-4d2a-b1b9-d5953ef1b8ec",
   "bId": "445e89c8-a23c-440c-bd3c-7eab366bdd85"
  },
  {
   "a": "Jenna Irwin",
   "b": "Meghan Mediratta",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.3,
   "avgActual": 9,
   "avgExpected": 6.1,
   "aId": "85e52e3b-5238-4583-8d1a-cc57f8218ef6",
   "bId": "abc80b43-6769-4254-ae9a-b4b63b06de1d"
  },
  {
   "a": "Brittany Hall",
   "b": "Annemarie Mccartney",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 4.7,
   "avgExpected": 1.7,
   "aId": "17cc768d-f6c8-484c-814e-063d17cec72f",
   "bId": "d08d78db-7d20-4dc2-a37b-41841c4624fd"
  },
  {
   "a": "Camrin Cronheim",
   "b": "Ally Yan",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 4.3,
   "avgExpected": 1.6,
   "aId": "8143def5-d564-4010-8258-ccb71cd481f1",
   "bId": "c4eafe22-4dce-47af-978a-5e4bd5afa11a"
  },
  {
   "a": "Eva Danieli",
   "b": "Zach Hizer",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.2,
   "avgActual": -1.3,
   "avgExpected": -4.1,
   "aId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae",
   "bId": "b5e576e1-d16d-4c9d-ab28-2e1b1e66487b"
  },
  {
   "a": "Amanda Ksiezopolski",
   "b": "Ruhi Shah",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 3.3,
   "avgExpected": 0.4,
   "aId": "2138af89-34bc-4ee2-9955-ff16f0997031",
   "bId": "a2d56e71-3895-4316-9e9e-17565fb62295"
  },
  {
   "a": "Sarah Ross",
   "b": "Ryan Rosen",
   "team": "Dill Dinkers Hatboro Aces",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 2.5,
   "avgExpected": 0.3,
   "aId": "261d14c5-288e-4349-a3ed-50bad4b620c1",
   "bId": "97f2b250-2030-4296-be61-63cffb17043b"
  },
  {
   "a": "Lou Frignito",
   "b": "Harriet Levin",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.1,
   "avgActual": 5.3,
   "avgExpected": 3.1,
   "aId": "1afca308-dca6-4828-946a-0ca6ad1b0c44",
   "bId": "aeff8297-a479-4b3b-9a49-72c410ac8e26"
  },
  {
   "a": "Alex Boory",
   "b": "Charlotte Healey",
   "team": "Bounce Philly",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 3,
   "avgExpected": 0.5,
   "aId": "897f1edf-63f3-4eec-bcf5-d5a1bf0be859",
   "bId": "bbaf3def-a87b-4537-8701-4f5ae0108b1f"
  },
  {
   "a": "Maanav Shah",
   "b": "Dilan Shah",
   "team": "Monroe",
   "n": 10,
   "w": 7,
   "l": 3,
   "synergy": 1,
   "avgActual": 2.5,
   "avgExpected": 1.1,
   "aId": "0a1270b0-26f6-4328-85bc-bf3f329a746e",
   "bId": "91d23f87-e0fc-4448-890e-c3abd96c70b4"
  },
  {
   "a": "Zach Hollmann",
   "b": "Emily Babinsky",
   "team": "Pickle House",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1,
   "avgActual": 6,
   "avgExpected": 3.7,
   "aId": "8aef2d8a-0bd4-45df-b5d1-1a120a81ef0f",
   "bId": "d0e2c1ea-529d-4364-b521-cb205ecdded3"
  },
  {
   "a": "Mickey Cook",
   "b": "Emily Babinsky",
   "team": "Pickle House",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 1,
   "avgActual": 2.2,
   "avgExpected": 0.4,
   "aId": "3babc519-f395-4ef7-8f6f-b38d25c139d0",
   "bId": "d0e2c1ea-529d-4364-b521-cb205ecdded3"
  },
  {
   "a": "Zachary Lessner",
   "b": "Mark Kilimnik",
   "team": "Bounce Philly",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1,
   "avgActual": 3.7,
   "avgExpected": 1.2,
   "aId": "2ce5ebef-8079-4871-8d2e-b34988abbaad",
   "bId": "d6c15f91-4cc9-4612-8ec3-8f4ebd4e0cc1"
  },
  {
   "a": "Shreyas Pani",
   "b": "Ruhi Shah",
   "team": "Monroe",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1,
   "avgActual": 5.8,
   "avgExpected": 3.7,
   "aId": "3cebd01c-ff32-4544-b6a6-2a68152b2ee5",
   "bId": "a2d56e71-3895-4316-9e9e-17565fb62295"
  },
  {
   "a": "Paula Ro",
   "b": "Sidd Pathare",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 6.5,
   "avgExpected": 4.8,
   "aId": "3cf3093b-1667-4242-9ad5-1d72fc5d24f8",
   "bId": "a73f249d-c1c9-4516-bc79-e9732581f098"
  },
  {
   "a": "Yoyo Shen",
   "b": "Lissa Eagles",
   "team": "Pickle House",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 8.7,
   "avgExpected": 6.7,
   "aId": "9d47a1aa-c44c-4ddd-8953-dc40f79b1016",
   "bId": "9ec39678-a120-45de-b8a5-897b8cf900cd"
  },
  {
   "a": "Marina Cozac",
   "b": "Dylan Ashbach",
   "team": "Dill Dinkers Hatboro The Factory",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 8.7,
   "avgExpected": 6.6,
   "aId": "13c8aeab-aa52-4bc2-bf23-96a2cabe4181",
   "bId": "9c41a810-1be6-4e08-8a29-51558c29cb86"
  },
  {
   "a": "Lou Frignito",
   "b": "Nick Meale",
   "team": "Bounce Malvern",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 6.7,
   "avgExpected": 5.2,
   "aId": "1afca308-dca6-4828-946a-0ca6ad1b0c44",
   "bId": "ec0bad09-8256-49b3-ae86-3add22dd995f"
  },
  {
   "a": "Anthony Ursino",
   "b": "Amanda Ksiezopolski",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 1,
   "avgExpected": -1.2,
   "aId": "1406ff1f-3597-4128-a629-7dfd1dfe1323",
   "bId": "2138af89-34bc-4ee2-9955-ff16f0997031"
  },
  {
   "a": "Nathan Law",
   "b": "Manny Lai",
   "team": "ACE Moorestown",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 2.3,
   "avgExpected": 0.5,
   "aId": "3c81d27f-9e68-439b-a476-f5ac1a54f45a",
   "bId": "f2a53ee2-a602-4e58-8326-6d0624af34af"
  },
  {
   "a": "Tyler Arsenault",
   "b": "Zach Bowe",
   "team": "Jersey Devil",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 1.7,
   "avgExpected": -0.4,
   "aId": "e76d2d63-f7dc-40e7-aca2-d9b3aecf4d3e",
   "bId": "eebadc3a-5763-4612-9232-d3a98ea188d6"
  },
  {
   "a": "Anisha Malhotra",
   "b": "Sidd Pathare",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 3,
   "avgExpected": 1.1,
   "aId": "2aa8b268-8c06-4453-9706-048009bf6af3",
   "bId": "a73f249d-c1c9-4516-bc79-e9732581f098"
  },
  {
   "a": "Rachel Berger",
   "b": "Michaela Pierznik",
   "team": "Jersey Devil",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.8,
   "avgActual": 2.7,
   "avgExpected": 0.9,
   "aId": "9b7488c5-bc66-41e4-8fa5-873e70c190e3",
   "bId": "c885c4ae-2685-4fc8-9b35-40cf9f465915"
  },
  {
   "a": "Harriet Levin",
   "b": "Nick Meale",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 3.7,
   "avgExpected": 1.9,
   "aId": "aeff8297-a479-4b3b-9a49-72c410ac8e26",
   "bId": "ec0bad09-8256-49b3-ae86-3add22dd995f"
  },
  {
   "a": "Alyssa Boyle",
   "b": "Alex Abad",
   "team": "Bounce Philly",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.8,
   "avgActual": 7.7,
   "avgExpected": 5.7,
   "aId": "22123177-1eb2-4285-bc92-f75799e175dd",
   "bId": "bc881ebc-7a42-43be-b1b2-9c29c59a4132"
  },
  {
   "a": "Sara Synn",
   "b": "Ruhi Shah",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 1.7,
   "avgExpected": -0.2,
   "aId": "37acfc18-a8d1-4ea0-8c21-0d830c9f4f90",
   "bId": "a2d56e71-3895-4316-9e9e-17565fb62295"
  },
  {
   "a": "Rayna Baizman",
   "b": "Varun Prakash",
   "team": "Dill Dinkers Hatboro The Factory",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.8,
   "avgActual": 4.5,
   "avgExpected": 2.9,
   "aId": "108620c9-1cbb-4ea0-846c-bc781f1decea",
   "bId": "67dbfc4f-20f7-4299-bc2f-6cc70cf747ab"
  },
  {
   "a": "Rayna Baizman",
   "b": "Kaylyn Swankoski",
   "team": "Dill Dinkers Hatboro The Factory",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 0.8,
   "avgActual": 6,
   "avgExpected": 4.5,
   "aId": "108620c9-1cbb-4ea0-846c-bc781f1decea",
   "bId": "72949bef-7cab-4942-ab45-e5203024a8d5"
  },
  {
   "a": "Kerrin Maurer",
   "b": "Emily Babinsky",
   "team": "Pickle House",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 5,
   "avgExpected": 3.7,
   "aId": "1d63ce3d-20c2-40ae-94ca-e8e6e458004e",
   "bId": "d0e2c1ea-529d-4364-b521-cb205ecdded3"
  },
  {
   "a": "Tin Wai Kwan",
   "b": "Joey Angelson",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 2.3,
   "avgExpected": 0.6,
   "aId": "22fe1980-7ef9-4026-8c76-a39534431c6b",
   "bId": "6035850e-af27-40db-bb81-f5787f344871"
  },
  {
   "a": "Megan Harvey",
   "b": "Nam Barsh",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 1,
   "avgExpected": -0.7,
   "aId": "4d576bb5-e9e5-4ad1-a18f-022508c6a161",
   "bId": "fa43af77-3cd1-4e61-a8dc-bd714b65d517"
  },
  {
   "a": "Mickey Cook",
   "b": "Lissa Eagles",
   "team": "Pickle House",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.7,
   "avgActual": 1,
   "avgExpected": -0.3,
   "aId": "3babc519-f395-4ef7-8f6f-b38d25c139d0",
   "bId": "9ec39678-a120-45de-b8a5-897b8cf900cd"
  },
  {
   "a": "Teresa Wang",
   "b": "Yuki Kim",
   "team": "Bounce Malvern",
   "n": 7,
   "w": 7,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 6.1,
   "avgExpected": 5.1,
   "aId": "741de6b9-5fe7-49aa-9c55-5ff4050bb7a1",
   "bId": "afec0287-b62d-4aaf-977f-afb96aed0e17"
  },
  {
   "a": "Elisangela Harrington",
   "b": "Robbie Oddy",
   "team": "Flemington",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 3.7,
   "avgExpected": 2.1,
   "aId": "55bbe71c-1181-4875-b16d-f121f3a133e0",
   "bId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6"
  },
  {
   "a": "Andrew Bernard",
   "b": "Kevin Wysoczynski",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.7,
   "avgActual": -2.7,
   "avgExpected": -4.4,
   "aId": "8079e74f-c537-4e42-9590-e8d60f10ba3d",
   "bId": "f64f0cc2-6c82-4fe4-9992-747512700971"
  },
  {
   "a": "Julia Sternberg",
   "b": "Mark Kilimnik",
   "team": "Bounce Philly",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.7,
   "avgActual": -0.7,
   "avgExpected": -2.3,
   "aId": "ccd8a76f-df3a-4ab9-97b6-bae0f860a431",
   "bId": "d6c15f91-4cc9-4612-8ec3-8f4ebd4e0cc1"
  },
  {
   "a": "Arianna Haresign",
   "b": "Tyler Arsenault",
   "team": "Jersey Devil",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.7,
   "avgActual": 4.7,
   "avgExpected": 3.5,
   "aId": "556f84fc-4f7c-4199-a104-6e906d71605c",
   "bId": "e76d2d63-f7dc-40e7-aca2-d9b3aecf4d3e"
  },
  {
   "a": "Gissel Escalante",
   "b": "Jason Makarevic",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 3.6,
   "avgExpected": 2.4,
   "aId": "63221cc8-e303-4675-8dde-4fc77e871627",
   "bId": "f8835822-da21-4593-8b99-5665d2c2f3af"
  },
  {
   "a": "Shreyas Pani",
   "b": "Richa Shah",
   "team": "Monroe",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": 0.6,
   "avgActual": -0.4,
   "avgExpected": -1.4,
   "aId": "3cebd01c-ff32-4544-b6a6-2a68152b2ee5",
   "bId": "6b80047c-ca16-4506-a2a4-ed894dc0c37f"
  },
  {
   "a": "Eric Lin",
   "b": "Ruhi Shah",
   "team": "Monroe",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.6,
   "avgActual": 3.7,
   "avgExpected": 2.3,
   "aId": "4ce1c715-b187-47c5-b6dc-d079f802499d",
   "bId": "a2d56e71-3895-4316-9e9e-17565fb62295"
  },
  {
   "a": "Suzi Battison",
   "b": "Melissa Dardani",
   "team": "Flemington",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 1.7,
   "avgExpected": 0.6,
   "aId": "40579892-d9bf-4d1d-9417-5830d5d45093",
   "bId": "ef423f8a-5c2c-4a12-9f37-b41ff6d6c530"
  },
  {
   "a": "Robbie Oddy",
   "b": "Melissa Dardani",
   "team": "Flemington",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.6,
   "avgActual": 0.5,
   "avgExpected": -0.5,
   "aId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6",
   "bId": "ef423f8a-5c2c-4a12-9f37-b41ff6d6c530"
  },
  {
   "a": "Kara Infante",
   "b": "Ariana Rizvani",
   "team": "Home Court",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.6,
   "avgActual": -0.2,
   "avgExpected": -1.2,
   "aId": "06edda3d-3a1f-4010-86fa-8ac767cd7079",
   "bId": "1c7e9745-06f1-4486-9b14-5f4205128867"
  },
  {
   "a": "Megan Harvey",
   "b": "Shashank Kamdar",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.6,
   "avgActual": -1.2,
   "avgExpected": -2.5,
   "aId": "4d576bb5-e9e5-4ad1-a18f-022508c6a161",
   "bId": "56db4b56-6166-437f-8ece-26576b7042e5"
  },
  {
   "a": "Yoyo Shen",
   "b": "Dipen Bhatt",
   "team": "Pickle House",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 2,
   "avgExpected": 0.6,
   "aId": "9d47a1aa-c44c-4ddd-8953-dc40f79b1016",
   "bId": "fe8af1d3-ff62-430d-90af-32794cc7b912"
  },
  {
   "a": "Charlotte Healey",
   "b": "Alex Abad",
   "team": "Bounce Philly",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 3.4,
   "avgExpected": 2.3,
   "aId": "bbaf3def-a87b-4537-8701-4f5ae0108b1f",
   "bId": "bc881ebc-7a42-43be-b1b2-9c29c59a4132"
  },
  {
   "a": "Zachary Lessner",
   "b": "Elysia Price",
   "team": "Bounce Philly",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.6,
   "avgActual": -1.4,
   "avgExpected": -2.5,
   "aId": "2ce5ebef-8079-4871-8d2e-b34988abbaad",
   "bId": "a0ca4338-b610-4630-9f41-8dfd380e1af7"
  },
  {
   "a": "Alyssa Boyle",
   "b": "Elysia Price",
   "team": "Bounce Philly",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 2.8,
   "avgExpected": 1.6,
   "aId": "22123177-1eb2-4285-bc92-f75799e175dd",
   "bId": "a0ca4338-b610-4630-9f41-8dfd380e1af7"
  },
  {
   "a": "Alex Abad",
   "b": "Rachel Alfano",
   "team": "Bounce Philly",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 1.6,
   "avgExpected": 0.6,
   "aId": "bc881ebc-7a42-43be-b1b2-9c29c59a4132",
   "bId": "ce7aca89-06ac-4cd9-8944-a482216ffd58"
  },
  {
   "a": "Elysia Price",
   "b": "Rachel Alfano",
   "team": "Bounce Philly",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.6,
   "avgActual": -1.2,
   "avgExpected": -2.4,
   "aId": "a0ca4338-b610-4630-9f41-8dfd380e1af7",
   "bId": "ce7aca89-06ac-4cd9-8944-a482216ffd58"
  },
  {
   "a": "Ken Velarde",
   "b": "Austin Williams",
   "team": "Home Court",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": 0.6,
   "avgActual": 0.4,
   "avgExpected": -0.5,
   "aId": "25aa47d0-76b8-48be-a5be-b1d33b423e82",
   "bId": "bb0bdc33-be20-4a45-9de9-0a52a88d7af9"
  },
  {
   "a": "Jordan Denish",
   "b": "Alexander Tong",
   "team": "Bounce Philly",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.6,
   "avgActual": 2,
   "avgExpected": 0.6,
   "aId": "8ae25144-966d-4de1-9cb3-513f7f217170",
   "bId": "d8d64dde-4ffb-4c49-aaa6-537b09c9c8d5"
  },
  {
   "a": "Brittany Hall",
   "b": "Manny Lai",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 0,
   "avgExpected": -1.3,
   "aId": "17cc768d-f6c8-484c-814e-063d17cec72f",
   "bId": "f2a53ee2-a602-4e58-8326-6d0624af34af"
  },
  {
   "a": "Yoyo Shen",
   "b": "Michael Li",
   "team": "Pickle House",
   "n": 6,
   "w": 6,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 5.8,
   "avgExpected": 5,
   "aId": "9d47a1aa-c44c-4ddd-8953-dc40f79b1016",
   "bId": "dc81629b-4ff7-45c4-b38e-b3b836bc0769"
  },
  {
   "a": "Chris Damato",
   "b": "Lissa Eagles",
   "team": "Pickle House",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 1.3,
   "avgExpected": 0.4,
   "aId": "445e89c8-a23c-440c-bd3c-7eab366bdd85",
   "bId": "9ec39678-a120-45de-b8a5-897b8cf900cd"
  },
  {
   "a": "Suzi Battison",
   "b": "Thomas Connolly",
   "team": "Flemington",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 1.4,
   "avgExpected": 0.5,
   "aId": "40579892-d9bf-4d1d-9417-5830d5d45093",
   "bId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3"
  },
  {
   "a": "Erika Richards",
   "b": "William Lee",
   "team": "Dill Dinkers Hatboro Aces",
   "n": 8,
   "w": 2,
   "l": 6,
   "synergy": 0.5,
   "avgActual": -3.6,
   "avgExpected": -4.3,
   "aId": "065e606f-3722-4434-8848-28e4d10ccabd",
   "bId": "9e264c96-36cf-45a9-90ad-1e125a82c851"
  },
  {
   "a": "Danielle Bernero",
   "b": "Rachel Berger",
   "team": "Jersey Devil",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.5,
   "avgActual": -1.2,
   "avgExpected": -2,
   "aId": "317f260e-551b-4f91-ab92-71440e5f05be",
   "bId": "9b7488c5-bc66-41e4-8fa5-873e70c190e3"
  },
  {
   "a": "Cristi Landrigan",
   "b": "Conor Landrigan",
   "team": "Dill Dinkers Hatboro The Factory",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 4.8,
   "avgExpected": 3.8,
   "aId": "1be028eb-1b92-4961-b508-fa0879c78017",
   "bId": "931df78f-b759-497d-ba8d-be7d3f41f668"
  },
  {
   "a": "Brittany Hall",
   "b": "Stacy Walkowitz",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 1,
   "avgExpected": -0.1,
   "aId": "17cc768d-f6c8-484c-814e-063d17cec72f",
   "bId": "a19b179a-6a16-43a7-b2af-8d6e8d1a1205"
  },
  {
   "a": "Nathan Law",
   "b": "Damien Stahl",
   "team": "ACE Moorestown",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 0.3,
   "avgExpected": -0.8,
   "aId": "3c81d27f-9e68-439b-a476-f5ac1a54f45a",
   "bId": "45d2cd6f-4816-46b2-8e17-fab766cdb87e"
  },
  {
   "a": "Teresa Wang",
   "b": "Nam Barsh",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 2.3,
   "avgExpected": 1.2,
   "aId": "741de6b9-5fe7-49aa-9c55-5ff4050bb7a1",
   "bId": "fa43af77-3cd1-4e61-a8dc-bd714b65d517"
  },
  {
   "a": "Catherine Stewart",
   "b": "Eva Danieli",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 0,
   "avgExpected": -0.9,
   "aId": "112622af-3d12-4dba-ad36-7601c8e6021c",
   "bId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae"
  },
  {
   "a": "Anisha Malhotra",
   "b": "Chris Long",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 0,
   "avgExpected": -1,
   "aId": "2aa8b268-8c06-4453-9706-048009bf6af3",
   "bId": "f7f6ce2d-1cbb-45f9-ad8f-e42b89b99554"
  },
  {
   "a": "Camrin Cronheim",
   "b": "Sidd Pathare",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.4,
   "avgActual": 1.5,
   "avgExpected": 0.8,
   "aId": "8143def5-d564-4010-8258-ccb71cd481f1",
   "bId": "a73f249d-c1c9-4516-bc79-e9732581f098"
  },
  {
   "a": "Suzi Battison",
   "b": "Ross Switkes",
   "team": "Flemington",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 1.8,
   "avgExpected": 0.9,
   "aId": "40579892-d9bf-4d1d-9417-5830d5d45093",
   "bId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b"
  },
  {
   "a": "Thomas Connolly",
   "b": "Ross Switkes",
   "team": "Flemington",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 0.4,
   "avgExpected": -0.4,
   "aId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3",
   "bId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b"
  },
  {
   "a": "Danielle Bernero",
   "b": "Caleb Perry-Abner",
   "team": "Jersey Devil",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 0,
   "avgExpected": -0.8,
   "aId": "317f260e-551b-4f91-ab92-71440e5f05be",
   "bId": "c25e04ae-a9bf-4943-858d-5b7a94261e43"
  },
  {
   "a": "Danielle Bernero",
   "b": "Michelle Quach",
   "team": "Jersey Devil",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.4,
   "avgActual": -0.7,
   "avgExpected": -1.6,
   "aId": "317f260e-551b-4f91-ab92-71440e5f05be",
   "bId": "5f0dcbe9-bb0e-496d-99d2-06f01ff2c77b"
  },
  {
   "a": "Robert Khalev",
   "b": "Joey Angelson",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.4,
   "avgActual": -0.2,
   "avgExpected": -1.1,
   "aId": "094c3b61-96e3-48c6-8172-10b7eaf528f4",
   "bId": "6035850e-af27-40db-bb81-f5787f344871"
  },
  {
   "a": "Ken Velarde",
   "b": "Aidan Jackson",
   "team": "Home Court",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.4,
   "avgActual": 1.3,
   "avgExpected": 0.7,
   "aId": "25aa47d0-76b8-48be-a5be-b1d33b423e82",
   "bId": "c821be96-b764-46ad-85a2-8927711684c5"
  },
  {
   "a": "Elisangela Harrington",
   "b": "Kelly Arvidson",
   "team": "Flemington",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.4,
   "avgActual": 0,
   "avgExpected": -0.8,
   "aId": "55bbe71c-1181-4875-b16d-f121f3a133e0",
   "bId": "c053f5d6-16e1-4847-b27b-49fe41f367c6"
  },
  {
   "a": "Ariana Rizvani",
   "b": "Raneeta Sawhney-Rigby",
   "team": "Home Court",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.4,
   "avgActual": -3,
   "avgExpected": -4,
   "aId": "1c7e9745-06f1-4486-9b14-5f4205128867",
   "bId": "8ee2191e-34c1-4f6b-b366-5a1bbc5bcb36"
  },
  {
   "a": "Arianna Haresign",
   "b": "Michelle Quach",
   "team": "Jersey Devil",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 1.5,
   "avgExpected": 0.7,
   "aId": "556f84fc-4f7c-4199-a104-6e906d71605c",
   "bId": "5f0dcbe9-bb0e-496d-99d2-06f01ff2c77b"
  },
  {
   "a": "Maeve Mcgowan",
   "b": "Matthew Chen",
   "team": "Jersey Devil",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.4,
   "avgActual": -3.7,
   "avgExpected": -4.6,
   "aId": "24325b7a-50bd-42dc-84c2-e3ac54360f9c",
   "bId": "68e9ac74-5119-4dbb-8503-72bcdbade183"
  },
  {
   "a": "Richa Shah",
   "b": "Dilan Shah",
   "team": "Monroe",
   "n": 7,
   "w": 1,
   "l": 6,
   "synergy": 0.3,
   "avgActual": -2.6,
   "avgExpected": -3,
   "aId": "6b80047c-ca16-4506-a2a4-ed894dc0c37f",
   "bId": "91d23f87-e0fc-4448-890e-c3abd96c70b4"
  },
  {
   "a": "Paula Ro",
   "b": "Gissel Escalante",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 4.8,
   "avgExpected": 4.2,
   "aId": "3cf3093b-1667-4242-9ad5-1d72fc5d24f8",
   "bId": "63221cc8-e303-4675-8dde-4fc77e871627"
  },
  {
   "a": "Shreyas Pani",
   "b": "Eric Lin",
   "team": "Monroe",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 2,
   "avgExpected": 1.4,
   "aId": "3cebd01c-ff32-4544-b6a6-2a68152b2ee5",
   "bId": "4ce1c715-b187-47c5-b6dc-d079f802499d"
  },
  {
   "a": "Maanav Shah",
   "b": "Richa Shah",
   "team": "Monroe",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 2.5,
   "avgExpected": 1.9,
   "aId": "0a1270b0-26f6-4328-85bc-bf3f329a746e",
   "bId": "6b80047c-ca16-4506-a2a4-ed894dc0c37f"
  },
  {
   "a": "Kerrin Maurer",
   "b": "Michael Li",
   "team": "Pickle House",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 4.3,
   "avgExpected": 3.7,
   "aId": "1d63ce3d-20c2-40ae-94ca-e8e6e458004e",
   "bId": "dc81629b-4ff7-45c4-b38e-b3b836bc0769"
  },
  {
   "a": "Kenoa Tio",
   "b": "Conor Landrigan",
   "team": "Dill Dinkers Hatboro The Factory",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.3,
   "avgActual": 5,
   "avgExpected": 4.4,
   "aId": "10e9980e-34bf-43ea-b246-3280bca79efb",
   "bId": "931df78f-b759-497d-ba8d-be7d3f41f668"
  },
  {
   "a": "Maanav Shah",
   "b": "Shreyas Pani",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 3.3,
   "avgExpected": 2.6,
   "aId": "0a1270b0-26f6-4328-85bc-bf3f329a746e",
   "bId": "3cebd01c-ff32-4544-b6a6-2a68152b2ee5"
  },
  {
   "a": "Anthony Ursino",
   "b": "Amalia Ditrapani",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 0.3,
   "avgExpected": -0.5,
   "aId": "1406ff1f-3597-4128-a629-7dfd1dfe1323",
   "bId": "32ac3308-4ddd-496b-8942-ca2422322c06"
  },
  {
   "a": "Chad Durkin",
   "b": "Hruday Vemparala",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 3,
   "avgExpected": 2.4,
   "aId": "54ed1c79-aaa0-486d-851b-d5a4db375b94",
   "bId": "bc3db6dc-48f5-46f3-aec3-638d15ca7285"
  },
  {
   "a": "Taylor Hartman",
   "b": "Zach Hollmann",
   "team": "Pickle House",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.3,
   "avgActual": 2,
   "avgExpected": 1.3,
   "aId": "3bf2f55b-b253-4d2a-b1b9-d5953ef1b8ec",
   "bId": "8aef2d8a-0bd4-45df-b5d1-1a120a81ef0f"
  },
  {
   "a": "Cristi Landrigan",
   "b": "Varun Prakash",
   "team": "Dill Dinkers Hatboro The Factory",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.3,
   "avgActual": 6,
   "avgExpected": 5.4,
   "aId": "1be028eb-1b92-4961-b508-fa0879c78017",
   "bId": "67dbfc4f-20f7-4299-bc2f-6cc70cf747ab"
  },
  {
   "a": "Susan Ackley",
   "b": "Kelly Arvidson",
   "team": "Flemington",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.2,
   "avgActual": -4.2,
   "avgExpected": -4.6,
   "aId": "07a0e948-6308-4920-a6a8-1d5945552ecb",
   "bId": "c053f5d6-16e1-4847-b27b-49fe41f367c6"
  },
  {
   "a": "Kerrin Maurer",
   "b": "Lissa Eagles",
   "team": "Pickle House",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 4.4,
   "avgExpected": 4.2,
   "aId": "1d63ce3d-20c2-40ae-94ca-e8e6e458004e",
   "bId": "9ec39678-a120-45de-b8a5-897b8cf900cd"
  },
  {
   "a": "Taylor Hartman",
   "b": "Emily Babinsky",
   "team": "Pickle House",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.2,
   "avgActual": 3.8,
   "avgExpected": 3.4,
   "aId": "3bf2f55b-b253-4d2a-b1b9-d5953ef1b8ec",
   "bId": "d0e2c1ea-529d-4364-b521-cb205ecdded3"
  },
  {
   "a": "Shashank Kamdar",
   "b": "Nick Meale",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.2,
   "avgActual": 4.7,
   "avgExpected": 4.2,
   "aId": "56db4b56-6166-437f-8ece-26576b7042e5",
   "bId": "ec0bad09-8256-49b3-ae86-3add22dd995f"
  },
  {
   "a": "Brittany Hall",
   "b": "Damien Stahl",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 0.7,
   "avgExpected": 0.3,
   "aId": "17cc768d-f6c8-484c-814e-063d17cec72f",
   "bId": "45d2cd6f-4816-46b2-8e17-fab766cdb87e"
  },
  {
   "a": "William Hayes",
   "b": "Charlotte Healey",
   "team": "Bounce Philly",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.2,
   "avgActual": 5.3,
   "avgExpected": 5,
   "aId": "4dfed1a1-5375-446c-98bc-69402e70e1d5",
   "bId": "bbaf3def-a87b-4537-8701-4f5ae0108b1f"
  },
  {
   "a": "Anthony Ursino",
   "b": "Dilan Shah",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.2,
   "avgActual": -1.3,
   "avgExpected": -1.8,
   "aId": "1406ff1f-3597-4128-a629-7dfd1dfe1323",
   "bId": "91d23f87-e0fc-4448-890e-c3abd96c70b4"
  },
  {
   "a": "Anisha Malhotra",
   "b": "Gissel Escalante",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 3.2,
   "avgExpected": 3,
   "aId": "2aa8b268-8c06-4453-9706-048009bf6af3",
   "bId": "63221cc8-e303-4675-8dde-4fc77e871627"
  },
  {
   "a": "Thomas Connolly",
   "b": "Melissa Dardani",
   "team": "Flemington",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": 0.1,
   "avgActual": -0.7,
   "avgExpected": -0.8,
   "aId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3",
   "bId": "ef423f8a-5c2c-4a12-9f37-b41ff6d6c530"
  },
  {
   "a": "Chris Damato",
   "b": "Michael Li",
   "team": "Pickle House",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 1.2,
   "avgExpected": 1,
   "aId": "445e89c8-a23c-440c-bd3c-7eab366bdd85",
   "bId": "dc81629b-4ff7-45c4-b38e-b3b836bc0769"
  },
  {
   "a": "Patrick Ryan",
   "b": "Aimee Castellano",
   "team": "Flemington",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.1,
   "avgActual": -1,
   "avgExpected": -1.2,
   "aId": "8344fbda-35c2-4ce0-94ad-158090d2d5ba",
   "bId": "e76985fb-efd1-4180-a340-e4f36abbc8b4"
  },
  {
   "a": "Erika Richards",
   "b": "Claudya Elefante",
   "team": "Dill Dinkers Hatboro Aces",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 0.1,
   "avgActual": -3,
   "avgExpected": -3.2,
   "aId": "065e606f-3722-4434-8848-28e4d10ccabd",
   "bId": "c6a7f237-8e09-45e4-b34e-d179e46b61b1"
  },
  {
   "a": "Kaylyn Swankoski",
   "b": "Hannah Nussbaum",
   "team": "Dill Dinkers Hatboro The Factory",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.1,
   "avgActual": 3.3,
   "avgExpected": 3,
   "aId": "72949bef-7cab-4942-ab45-e5203024a8d5",
   "bId": "84b7c449-501c-438d-a3eb-ee67cc92fa0e"
  },
  {
   "a": "Taylor Hartman",
   "b": "Lissa Eagles",
   "team": "Pickle House",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 2,
   "avgExpected": 1.7,
   "aId": "3bf2f55b-b253-4d2a-b1b9-d5953ef1b8ec",
   "bId": "9ec39678-a120-45de-b8a5-897b8cf900cd"
  },
  {
   "a": "Anushk Gupta",
   "b": "Sarah Ross",
   "team": "Dill Dinkers Hatboro Aces",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 0.1,
   "avgActual": -1,
   "avgExpected": -1.2,
   "aId": "1a851b17-0445-4807-b476-575fd261f774",
   "bId": "261d14c5-288e-4349-a3ed-50bad4b620c1"
  },
  {
   "a": "Catherine Stewart",
   "b": "Kevin Wysoczynski",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 0.7,
   "avgExpected": 0.5,
   "aId": "112622af-3d12-4dba-ad36-7601c8e6021c",
   "bId": "f64f0cc2-6c82-4fe4-9992-747512700971"
  },
  {
   "a": "Katalina Wang",
   "b": "Joey Angelson",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.1,
   "avgActual": -1,
   "avgExpected": -1.2,
   "aId": "2d602f38-7eda-4a7b-a3a2-98b40e443b79",
   "bId": "6035850e-af27-40db-bb81-f5787f344871"
  },
  {
   "a": "Sophia Kaufmann",
   "b": "Ruhi Shah",
   "team": "Monroe",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0,
   "avgActual": -2.7,
   "avgExpected": -2.7,
   "aId": "44f258b0-52df-4c16-8d1e-a9f2d65b439e",
   "bId": "a2d56e71-3895-4316-9e9e-17565fb62295"
  },
  {
   "a": "Ryan Rosen",
   "b": "Claudya Elefante",
   "team": "Dill Dinkers Hatboro Aces",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0,
   "avgActual": -1.4,
   "avgExpected": -1.3,
   "aId": "97f2b250-2030-4296-be61-63cffb17043b",
   "bId": "c6a7f237-8e09-45e4-b34e-d179e46b61b1"
  },
  {
   "a": "Kenoa Tio",
   "b": "Marina Cozac",
   "team": "Dill Dinkers Hatboro The Factory",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0,
   "avgActual": 5.3,
   "avgExpected": 5.3,
   "aId": "10e9980e-34bf-43ea-b246-3280bca79efb",
   "bId": "13c8aeab-aa52-4bc2-bf23-96a2cabe4181"
  },
  {
   "a": "Tom Laiso",
   "b": "Joey Angelson",
   "team": "Jersey Pickleball Club",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0,
   "avgActual": -2.2,
   "avgExpected": -2.3,
   "aId": "13918154-3673-4dae-946a-2c2d4ac8863f",
   "bId": "6035850e-af27-40db-bb81-f5787f344871"
  },
  {
   "a": "Mickey Cook",
   "b": "Dipen Bhatt",
   "team": "Pickle House",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0,
   "avgActual": -2,
   "avgExpected": -1.9,
   "aId": "3babc519-f395-4ef7-8f6f-b38d25c139d0",
   "bId": "fe8af1d3-ff62-430d-90af-32794cc7b912"
  },
  {
   "a": "Annemarie Mccartney",
   "b": "Manny Lai",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0,
   "avgActual": 5,
   "avgExpected": 5,
   "aId": "d08d78db-7d20-4dc2-a37b-41841c4624fd",
   "bId": "f2a53ee2-a602-4e58-8326-6d0624af34af"
  },
  {
   "a": "Jack Blumberg",
   "b": "Manny Lai",
   "team": "ACE Moorestown",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0,
   "avgActual": 0.4,
   "avgExpected": 0.4,
   "aId": "f2929b28-a6ee-45e5-9846-da957b6d8734",
   "bId": "f2a53ee2-a602-4e58-8326-6d0624af34af"
  },
  {
   "a": "Camrin Cronheim",
   "b": "Jason Makarevic",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.1,
   "avgActual": -0.3,
   "avgExpected": -0.1,
   "aId": "8143def5-d564-4010-8258-ccb71cd481f1",
   "bId": "f8835822-da21-4593-8b99-5665d2c2f3af"
  },
  {
   "a": "Kerrin Maurer",
   "b": "Mickey Cook",
   "team": "Pickle House",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 1.7,
   "avgExpected": 1.9,
   "aId": "1d63ce3d-20c2-40ae-94ca-e8e6e458004e",
   "bId": "3babc519-f395-4ef7-8f6f-b38d25c139d0"
  },
  {
   "a": "Tin Wai Kwan",
   "b": "Matt Schall",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 0,
   "avgExpected": 0.2,
   "aId": "22fe1980-7ef9-4026-8c76-a39534431c6b",
   "bId": "aa0d9944-a9d3-46d5-8650-54e894adfeb2"
  },
  {
   "a": "Marina Cozac",
   "b": "Kaylyn Swankoski",
   "team": "Dill Dinkers Hatboro The Factory",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 8.3,
   "avgExpected": 8.5,
   "aId": "13c8aeab-aa52-4bc2-bf23-96a2cabe4181",
   "bId": "72949bef-7cab-4942-ab45-e5203024a8d5"
  },
  {
   "a": "Shashank Kamdar",
   "b": "Nam Barsh",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.1,
   "avgActual": -2.2,
   "avgExpected": -2,
   "aId": "56db4b56-6166-437f-8ece-26576b7042e5",
   "bId": "fa43af77-3cd1-4e61-a8dc-bd714b65d517"
  },
  {
   "a": "Taylor Hartman",
   "b": "Yoyo Shen",
   "team": "Pickle House",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 2,
   "avgExpected": 2.3,
   "aId": "3bf2f55b-b253-4d2a-b1b9-d5953ef1b8ec",
   "bId": "9d47a1aa-c44c-4ddd-8953-dc40f79b1016"
  },
  {
   "a": "Anita Buggins",
   "b": "Stacy Walkowitz",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.1,
   "avgActual": 3,
   "avgExpected": 3.2,
   "aId": "2ea90a18-1ef3-4ade-a855-2a3fd178abd7",
   "bId": "a19b179a-6a16-43a7-b2af-8d6e8d1a1205"
  },
  {
   "a": "Ross Switkes",
   "b": "Melissa Dardani",
   "team": "Flemington",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 1,
   "avgExpected": 1.1,
   "aId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b",
   "bId": "ef423f8a-5c2c-4a12-9f37-b41ff6d6c530"
  },
  {
   "a": "Catherine Stewart",
   "b": "Joey Angelson",
   "team": "Jersey Pickleball Club",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.1,
   "avgActual": -1,
   "avgExpected": -0.9,
   "aId": "112622af-3d12-4dba-ad36-7601c8e6021c",
   "bId": "6035850e-af27-40db-bb81-f5787f344871"
  },
  {
   "a": "Dilan Shah",
   "b": "Ruhi Shah",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 0,
   "avgExpected": 0.3,
   "aId": "91d23f87-e0fc-4448-890e-c3abd96c70b4",
   "bId": "a2d56e71-3895-4316-9e9e-17565fb62295"
  },
  {
   "a": "Ali Husain",
   "b": "Maanav Shah",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 3,
   "avgExpected": 3.2,
   "aId": "09d614ca-a9b2-44b6-a402-51046c6883af",
   "bId": "0a1270b0-26f6-4328-85bc-bf3f329a746e"
  },
  {
   "a": "Maeve Mcgowan",
   "b": "Zach Bowe",
   "team": "Jersey Devil",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -1.7,
   "avgExpected": -1.4,
   "aId": "24325b7a-50bd-42dc-84c2-e3ac54360f9c",
   "bId": "eebadc3a-5763-4612-9232-d3a98ea188d6"
  },
  {
   "a": "Patrick Ryan",
   "b": "Kelly Arvidson",
   "team": "Flemington",
   "n": 10,
   "w": 5,
   "l": 5,
   "synergy": -0.2,
   "avgActual": -0.8,
   "avgExpected": -0.6,
   "aId": "8344fbda-35c2-4ce0-94ad-158090d2d5ba",
   "bId": "c053f5d6-16e1-4847-b27b-49fe41f367c6"
  },
  {
   "a": "Sarah Ross",
   "b": "Claudya Elefante",
   "team": "Dill Dinkers Hatboro Aces",
   "n": 8,
   "w": 1,
   "l": 7,
   "synergy": -0.2,
   "avgActual": -2.7,
   "avgExpected": -2.4,
   "aId": "261d14c5-288e-4349-a3ed-50bad4b620c1",
   "bId": "c6a7f237-8e09-45e4-b34e-d179e46b61b1"
  },
  {
   "a": "Harriet Levin",
   "b": "Yuki Kim",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 3.3,
   "avgExpected": 3.6,
   "aId": "aeff8297-a479-4b3b-9a49-72c410ac8e26",
   "bId": "afec0287-b62d-4aaf-977f-afb96aed0e17"
  },
  {
   "a": "Varun Prakash",
   "b": "Dylan Ashbach",
   "team": "Dill Dinkers Hatboro The Factory",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.2,
   "avgActual": 2.7,
   "avgExpected": 3.2,
   "aId": "67dbfc4f-20f7-4299-bc2f-6cc70cf747ab",
   "bId": "9c41a810-1be6-4e08-8a29-51558c29cb86"
  },
  {
   "a": "Varun Prakash",
   "b": "Kaylyn Swankoski",
   "team": "Dill Dinkers Hatboro The Factory",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 0.7,
   "avgExpected": 1.2,
   "aId": "67dbfc4f-20f7-4299-bc2f-6cc70cf747ab",
   "bId": "72949bef-7cab-4942-ab45-e5203024a8d5"
  },
  {
   "a": "Anushk Gupta",
   "b": "William Lee",
   "team": "Dill Dinkers Hatboro Aces",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.2,
   "avgActual": -2.7,
   "avgExpected": -2.1,
   "aId": "1a851b17-0445-4807-b476-575fd261f774",
   "bId": "9e264c96-36cf-45a9-90ad-1e125a82c851"
  },
  {
   "a": "Kara Infante",
   "b": "Austin Williams",
   "team": "Home Court",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.2,
   "avgActual": -0.7,
   "avgExpected": -0.4,
   "aId": "06edda3d-3a1f-4010-86fa-8ac767cd7079",
   "bId": "bb0bdc33-be20-4a45-9de9-0a52a88d7af9"
  },
  {
   "a": "Nathan Law",
   "b": "Ben Mead",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.2,
   "avgActual": 3,
   "avgExpected": 3.4,
   "aId": "3c81d27f-9e68-439b-a476-f5ac1a54f45a",
   "bId": "7858dda8-168b-4a84-8d5d-7a6571e9313a"
  },
  {
   "a": "Anthony Ursino",
   "b": "Sophia Kaufmann",
   "team": "Monroe",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.3,
   "avgActual": -4.2,
   "avgExpected": -3.7,
   "aId": "1406ff1f-3597-4128-a629-7dfd1dfe1323",
   "bId": "44f258b0-52df-4c16-8d1e-a9f2d65b439e"
  },
  {
   "a": "Matt Schall",
   "b": "Kevin Wysoczynski",
   "team": "Jersey Pickleball Club",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -1,
   "avgExpected": -0.4,
   "aId": "aa0d9944-a9d3-46d5-8650-54e894adfeb2",
   "bId": "f64f0cc2-6c82-4fe4-9992-747512700971"
  },
  {
   "a": "Chris Tabeling",
   "b": "Shashank Kamdar",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.3,
   "avgActual": 0.3,
   "avgExpected": 1.1,
   "aId": "0ee404b2-e9e6-49b4-b9eb-bc2120473f76",
   "bId": "56db4b56-6166-437f-8ece-26576b7042e5"
  },
  {
   "a": "Anisha Malhotra",
   "b": "Camrin Cronheim",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.3,
   "avgActual": 1,
   "avgExpected": 1.6,
   "aId": "2aa8b268-8c06-4453-9706-048009bf6af3",
   "bId": "8143def5-d564-4010-8258-ccb71cd481f1"
  },
  {
   "a": "Emily Babinsky",
   "b": "Dipen Bhatt",
   "team": "Pickle House",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.3,
   "avgActual": -1.3,
   "avgExpected": -0.6,
   "aId": "d0e2c1ea-529d-4364-b521-cb205ecdded3",
   "bId": "fe8af1d3-ff62-430d-90af-32794cc7b912"
  },
  {
   "a": "Alyssa Tartaglia",
   "b": "Ryan Rosen",
   "team": "Dill Dinkers Hatboro Aces",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -5.3,
   "avgExpected": -4.7,
   "aId": "881ed39f-f9fc-4e9d-8ed3-d13d9ebc7b13",
   "bId": "97f2b250-2030-4296-be61-63cffb17043b"
  },
  {
   "a": "Chris Tabeling",
   "b": "Teresa Wang",
   "team": "Bounce Malvern",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 1.8,
   "avgExpected": 2.3,
   "aId": "0ee404b2-e9e6-49b4-b9eb-bc2120473f76",
   "bId": "741de6b9-5fe7-49aa-9c55-5ff4050bb7a1"
  },
  {
   "a": "Elysia Price",
   "b": "Kathleen Dougherty",
   "team": "Bounce Philly",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.3,
   "avgActual": -3.3,
   "avgExpected": -2.5,
   "aId": "a0ca4338-b610-4630-9f41-8dfd380e1af7",
   "bId": "c929f42d-6fd4-4034-888e-ad456cda3063"
  },
  {
   "a": "Nathan Law",
   "b": "Annemarie Mccartney",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 2.3,
   "avgExpected": 3,
   "aId": "3c81d27f-9e68-439b-a476-f5ac1a54f45a",
   "bId": "d08d78db-7d20-4dc2-a37b-41841c4624fd"
  },
  {
   "a": "Ashley Barros",
   "b": "Austin Williams",
   "team": "Home Court",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.3,
   "avgActual": -1,
   "avgExpected": -0.3,
   "aId": "6656b9a3-3c47-4711-8609-e35c07c64771",
   "bId": "bb0bdc33-be20-4a45-9de9-0a52a88d7af9"
  },
  {
   "a": "Matthew Chen",
   "b": "Zach Bowe",
   "team": "Jersey Devil",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -5.7,
   "avgExpected": -4.9,
   "aId": "68e9ac74-5119-4dbb-8503-72bcdbade183",
   "bId": "eebadc3a-5763-4612-9232-d3a98ea188d6"
  },
  {
   "a": "Richa Shah",
   "b": "Ruhi Shah",
   "team": "Monroe",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.4,
   "avgActual": -0.4,
   "avgExpected": 0.2,
   "aId": "6b80047c-ca16-4506-a2a4-ed894dc0c37f",
   "bId": "a2d56e71-3895-4316-9e9e-17565fb62295"
  },
  {
   "a": "Sidd Pathare",
   "b": "Chris Long",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.4,
   "avgActual": -0.7,
   "avgExpected": 0.3,
   "aId": "a73f249d-c1c9-4516-bc79-e9732581f098",
   "bId": "f7f6ce2d-1cbb-45f9-ad8f-e42b89b99554"
  },
  {
   "a": "Ryan Furman",
   "b": "Michaela Pierznik",
   "team": "Jersey Devil",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.4,
   "avgActual": 1,
   "avgExpected": 1.7,
   "aId": "a89121dd-192b-486d-b39d-18ee8447d641",
   "bId": "c885c4ae-2685-4fc8-9b35-40cf9f465915"
  },
  {
   "a": "Ryan Rosen",
   "b": "Will Delaney",
   "team": "Dill Dinkers Hatboro Aces",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.4,
   "avgActual": -1,
   "avgExpected": -0.1,
   "aId": "97f2b250-2030-4296-be61-63cffb17043b",
   "bId": "a242cd39-8574-444a-99dc-95967faad87b"
  },
  {
   "a": "Sheila Siu",
   "b": "Ken Velarde",
   "team": "Home Court",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -1.2,
   "avgExpected": -0.4,
   "aId": "25879a0b-5df5-4c12-9066-4aaaf4e6cbc0",
   "bId": "25aa47d0-76b8-48be-a5be-b1d33b423e82"
  },
  {
   "a": "Kara Infante",
   "b": "Marcos Claros",
   "team": "Home Court",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -4.5,
   "avgExpected": -3.7,
   "aId": "06edda3d-3a1f-4010-86fa-8ac767cd7079",
   "bId": "839ee2ac-03d5-4fee-bc87-08709afae5f2"
  },
  {
   "a": "Lou Frignito",
   "b": "Shashank Kamdar",
   "team": "Bounce Malvern",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.4,
   "avgActual": 0.6,
   "avgExpected": 1.4,
   "aId": "1afca308-dca6-4828-946a-0ca6ad1b0c44",
   "bId": "56db4b56-6166-437f-8ece-26576b7042e5"
  },
  {
   "a": "Sheila Siu",
   "b": "Noah Goding",
   "team": "Home Court",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -6.3,
   "avgExpected": -5.3,
   "aId": "25879a0b-5df5-4c12-9066-4aaaf4e6cbc0",
   "bId": "80138d68-a74a-4f8c-aea1-7d31e682efa8"
  },
  {
   "a": "Anushk Gupta",
   "b": "Ryan Rosen",
   "team": "Dill Dinkers Hatboro Aces",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -3.2,
   "avgExpected": -2.5,
   "aId": "1a851b17-0445-4807-b476-575fd261f774",
   "bId": "97f2b250-2030-4296-be61-63cffb17043b"
  },
  {
   "a": "Yoyo Shen",
   "b": "Emily Babinsky",
   "team": "Pickle House",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -0.5,
   "avgActual": 2.4,
   "avgExpected": 3.4,
   "aId": "9d47a1aa-c44c-4ddd-8953-dc40f79b1016",
   "bId": "d0e2c1ea-529d-4364-b521-cb205ecdded3"
  },
  {
   "a": "Mickey Cook",
   "b": "Zach Hollmann",
   "team": "Pickle House",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -0.4,
   "avgExpected": 0.5,
   "aId": "3babc519-f395-4ef7-8f6f-b38d25c139d0",
   "bId": "8aef2d8a-0bd4-45df-b5d1-1a120a81ef0f"
  },
  {
   "a": "Zach Hollmann",
   "b": "Yoyo Shen",
   "team": "Pickle House",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": -0.5,
   "avgActual": 3.1,
   "avgExpected": 4,
   "aId": "8aef2d8a-0bd4-45df-b5d1-1a120a81ef0f",
   "bId": "9d47a1aa-c44c-4ddd-8953-dc40f79b1016"
  },
  {
   "a": "Megan Harvey",
   "b": "Harriet Levin",
   "team": "Bounce Malvern",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -0.5,
   "avgActual": -3.7,
   "avgExpected": -2.9,
   "aId": "4d576bb5-e9e5-4ad1-a18f-022508c6a161",
   "bId": "aeff8297-a479-4b3b-9a49-72c410ac8e26"
  },
  {
   "a": "Jennifer Sanchez",
   "b": "Brittany Hall",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -2.3,
   "avgExpected": -1.1,
   "aId": "061121d0-5d0a-4c01-9d8e-dced99d6d82d",
   "bId": "17cc768d-f6c8-484c-814e-063d17cec72f"
  },
  {
   "a": "Andrew Wakefield",
   "b": "Hannah Nussbaum",
   "team": "Dill Dinkers Hatboro The Factory",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.5,
   "avgActual": 0.6,
   "avgExpected": 1.5,
   "aId": "5f429a7f-18c6-49e3-a804-6aa2a930f09c",
   "bId": "84b7c449-501c-438d-a3eb-ee67cc92fa0e"
  },
  {
   "a": "Jonah Fliegelman",
   "b": "Varun Prakash",
   "team": "Dill Dinkers Hatboro The Factory",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.5,
   "avgActual": 0.3,
   "avgExpected": 1.6,
   "aId": "1070bcd5-fdff-4adc-8d03-460a208fe4e8",
   "bId": "67dbfc4f-20f7-4299-bc2f-6cc70cf747ab"
  },
  {
   "a": "Anthony Ursino",
   "b": "Morgan Fishman",
   "team": "Monroe",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.6,
   "avgActual": -5,
   "avgExpected": -3.7,
   "aId": "1406ff1f-3597-4128-a629-7dfd1dfe1323",
   "bId": "5ccee070-0af8-4363-9ddb-6ce8ebce098f"
  },
  {
   "a": "Michelle Quach",
   "b": "Caleb Perry-Abner",
   "team": "Jersey Devil",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.6,
   "avgActual": -2,
   "avgExpected": -1,
   "aId": "5f0dcbe9-bb0e-496d-99d2-06f01ff2c77b",
   "bId": "c25e04ae-a9bf-4943-858d-5b7a94261e43"
  },
  {
   "a": "Andrew Wakefield",
   "b": "Kaylyn Swankoski",
   "team": "Dill Dinkers Hatboro The Factory",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": -0.6,
   "avgActual": 4,
   "avgExpected": 5.2,
   "aId": "5f429a7f-18c6-49e3-a804-6aa2a930f09c",
   "bId": "72949bef-7cab-4942-ab45-e5203024a8d5"
  },
  {
   "a": "Andrew Wakefield",
   "b": "Varun Prakash",
   "team": "Dill Dinkers Hatboro The Factory",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.6,
   "avgActual": 0.4,
   "avgExpected": 1.6,
   "aId": "5f429a7f-18c6-49e3-a804-6aa2a930f09c",
   "bId": "67dbfc4f-20f7-4299-bc2f-6cc70cf747ab"
  },
  {
   "a": "Lou Frignito",
   "b": "Yuki Kim",
   "team": "Bounce Malvern",
   "n": 7,
   "w": 7,
   "l": 0,
   "synergy": -0.6,
   "avgActual": 6.1,
   "avgExpected": 7.1,
   "aId": "1afca308-dca6-4828-946a-0ca6ad1b0c44",
   "bId": "afec0287-b62d-4aaf-977f-afb96aed0e17"
  },
  {
   "a": "Adam Beck",
   "b": "Claudya Elefante",
   "team": "Dill Dinkers Hatboro Aces",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -0.6,
   "avgActual": -4.5,
   "avgExpected": -3.5,
   "aId": "7d836ecc-e553-4966-9c12-2dc698a545d0",
   "bId": "c6a7f237-8e09-45e4-b34e-d179e46b61b1"
  },
  {
   "a": "Susan Ackley",
   "b": "Ross Switkes",
   "team": "Flemington",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -1.7,
   "avgExpected": -0.5,
   "aId": "07a0e948-6308-4920-a6a8-1d5945552ecb",
   "bId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b"
  },
  {
   "a": "Patrick Ryan",
   "b": "Robbie Oddy",
   "team": "Flemington",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.7,
   "avgActual": 0,
   "avgExpected": 1.5,
   "aId": "8344fbda-35c2-4ce0-94ad-158090d2d5ba",
   "bId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6"
  },
  {
   "a": "Yuki Kim",
   "b": "Nick Meale",
   "team": "Bounce Malvern",
   "n": 9,
   "w": 6,
   "l": 3,
   "synergy": -0.7,
   "avgActual": 3.9,
   "avgExpected": 4.9,
   "aId": "afec0287-b62d-4aaf-977f-afb96aed0e17",
   "bId": "ec0bad09-8256-49b3-ae86-3add22dd995f"
  },
  {
   "a": "Shashank Kamdar",
   "b": "Sarah Kline",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.7,
   "avgActual": -4.2,
   "avgExpected": -2.8,
   "aId": "56db4b56-6166-437f-8ece-26576b7042e5",
   "bId": "b122f262-f81d-4fb2-9f11-c473d18a4260"
  },
  {
   "a": "Kerrin Maurer",
   "b": "Taylor Hartman",
   "team": "Pickle House",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.7,
   "avgActual": 2.8,
   "avgExpected": 4.1,
   "aId": "1d63ce3d-20c2-40ae-94ca-e8e6e458004e",
   "bId": "3bf2f55b-b253-4d2a-b1b9-d5953ef1b8ec"
  },
  {
   "a": "Sarah Ross",
   "b": "Alyssa Tartaglia",
   "team": "Dill Dinkers Hatboro Aces",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -7,
   "avgExpected": -5.4,
   "aId": "261d14c5-288e-4349-a3ed-50bad4b620c1",
   "bId": "881ed39f-f9fc-4e9d-8ed3-d13d9ebc7b13"
  },
  {
   "a": "Amanda Ksiezopolski",
   "b": "Amalia Ditrapani",
   "team": "Monroe",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -2.4,
   "avgExpected": -1.1,
   "aId": "2138af89-34bc-4ee2-9955-ff16f0997031",
   "bId": "32ac3308-4ddd-496b-8942-ca2422322c06"
  },
  {
   "a": "Anthony Ursino",
   "b": "Ruhi Shah",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.7,
   "avgActual": 2,
   "avgExpected": 3.5,
   "aId": "1406ff1f-3597-4128-a629-7dfd1dfe1323",
   "bId": "a2d56e71-3895-4316-9e9e-17565fb62295"
  },
  {
   "a": "Kara Infante",
   "b": "Nathan Malhotra",
   "team": "Home Court",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.7,
   "avgActual": 0.7,
   "avgExpected": 2.4,
   "aId": "06edda3d-3a1f-4010-86fa-8ac767cd7079",
   "bId": "98bd685a-3161-45fc-941f-3a8c9f4849cf"
  },
  {
   "a": "Susan Ackley",
   "b": "Melissa Dardani",
   "team": "Flemington",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -2.3,
   "avgExpected": -0.7,
   "aId": "07a0e948-6308-4920-a6a8-1d5945552ecb",
   "bId": "ef423f8a-5c2c-4a12-9f37-b41ff6d6c530"
  },
  {
   "a": "Angela Luo",
   "b": "Sophia Kaufmann",
   "team": "Monroe",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -5.2,
   "avgExpected": -3.6,
   "aId": "0cb538a5-0d5d-47a7-b854-38394ac9652f",
   "bId": "44f258b0-52df-4c16-8d1e-a9f2d65b439e"
  },
  {
   "a": "Erika Richards",
   "b": "Lilie Sen",
   "team": "Dill Dinkers Hatboro Aces",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -3.2,
   "avgExpected": -1.5,
   "aId": "065e606f-3722-4434-8848-28e4d10ccabd",
   "bId": "3aa34138-1989-4d89-b656-3e0c44b23b6f"
  },
  {
   "a": "Jennifer Sanchez",
   "b": "Anita Buggins",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.8,
   "avgActual": 0,
   "avgExpected": 2,
   "aId": "061121d0-5d0a-4c01-9d8e-dced99d6d82d",
   "bId": "2ea90a18-1ef3-4ade-a855-2a3fd178abd7"
  },
  {
   "a": "Zachary Lessner",
   "b": "Rachel Alfano",
   "team": "Bounce Philly",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.8,
   "avgActual": -0.2,
   "avgExpected": 1.3,
   "aId": "2ce5ebef-8079-4871-8d2e-b34988abbaad",
   "bId": "ce7aca89-06ac-4cd9-8944-a482216ffd58"
  },
  {
   "a": "Chris Tabeling",
   "b": "Harriet Levin",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.8,
   "avgActual": -2.7,
   "avgExpected": -0.9,
   "aId": "0ee404b2-e9e6-49b4-b9eb-bc2120473f76",
   "bId": "aeff8297-a479-4b3b-9a49-72c410ac8e26"
  },
  {
   "a": "Robert Khalev",
   "b": "Eva Danieli",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.9,
   "avgActual": -1.7,
   "avgExpected": 0.1,
   "aId": "094c3b61-96e3-48c6-8172-10b7eaf528f4",
   "bId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae"
  },
  {
   "a": "Taylor Hartman",
   "b": "Michael Li",
   "team": "Pickle House",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.9,
   "avgActual": -0.7,
   "avgExpected": 1,
   "aId": "3bf2f55b-b253-4d2a-b1b9-d5953ef1b8ec",
   "bId": "dc81629b-4ff7-45c4-b38e-b3b836bc0769"
  },
  {
   "a": "Catherine Stewart",
   "b": "Zach Hizer",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -2.5,
   "avgExpected": -0.7,
   "aId": "112622af-3d12-4dba-ad36-7601c8e6021c",
   "bId": "b5e576e1-d16d-4c9d-ab28-2e1b1e66487b"
  },
  {
   "a": "Maanav Shah",
   "b": "Ruhi Shah",
   "team": "Monroe",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": -1,
   "avgActual": 2.8,
   "avgExpected": 4.5,
   "aId": "0a1270b0-26f6-4328-85bc-bf3f329a746e",
   "bId": "a2d56e71-3895-4316-9e9e-17565fb62295"
  },
  {
   "a": "Morgan Fishman",
   "b": "Ruhi Shah",
   "team": "Monroe",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1,
   "avgActual": -4.7,
   "avgExpected": -2.7,
   "aId": "5ccee070-0af8-4363-9ddb-6ce8ebce098f",
   "bId": "a2d56e71-3895-4316-9e9e-17565fb62295"
  },
  {
   "a": "Anthony Ursino",
   "b": "Shreyas Pani",
   "team": "Monroe",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1,
   "avgActual": -0.7,
   "avgExpected": 1.2,
   "aId": "1406ff1f-3597-4128-a629-7dfd1dfe1323",
   "bId": "3cebd01c-ff32-4544-b6a6-2a68152b2ee5"
  },
  {
   "a": "Charlotte Healey",
   "b": "Alexander Tong",
   "team": "Bounce Philly",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1,
   "avgActual": 0.5,
   "avgExpected": 2.4,
   "aId": "bbaf3def-a87b-4537-8701-4f5ae0108b1f",
   "bId": "d8d64dde-4ffb-4c49-aaa6-537b09c9c8d5"
  },
  {
   "a": "Joey Angelson",
   "b": "Andrew Bernard",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1,
   "avgActual": -6.7,
   "avgExpected": -4.4,
   "aId": "6035850e-af27-40db-bb81-f5787f344871",
   "bId": "8079e74f-c537-4e42-9590-e8d60f10ba3d"
  },
  {
   "a": "Elisangela Harrington",
   "b": "Thomas Connolly",
   "team": "Flemington",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1,
   "avgActual": -4,
   "avgExpected": -1.7,
   "aId": "55bbe71c-1181-4875-b16d-f121f3a133e0",
   "bId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3"
  },
  {
   "a": "Joey Angelson",
   "b": "Kevin Wysoczynski",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -4,
   "avgExpected": -1.8,
   "aId": "6035850e-af27-40db-bb81-f5787f344871",
   "bId": "f64f0cc2-6c82-4fe4-9992-747512700971"
  },
  {
   "a": "Andrew Bernard",
   "b": "Matt Schall",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.1,
   "avgActual": -5,
   "avgExpected": -2.5,
   "aId": "8079e74f-c537-4e42-9590-e8d60f10ba3d",
   "bId": "aa0d9944-a9d3-46d5-8650-54e894adfeb2"
  },
  {
   "a": "Austin Williams",
   "b": "Jen Vorel",
   "team": "Home Court",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -2,
   "avgExpected": 0.1,
   "aId": "bb0bdc33-be20-4a45-9de9-0a52a88d7af9",
   "bId": "f9c1683f-9cc2-4b5d-aa29-f90e5102e687"
  },
  {
   "a": "Ken Velarde",
   "b": "Aurora Lewis",
   "team": "Home Court",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.1,
   "avgActual": -4,
   "avgExpected": -1.9,
   "aId": "25aa47d0-76b8-48be-a5be-b1d33b423e82",
   "bId": "3fe06711-5561-47b8-ad95-382cd0bcff9a"
  },
  {
   "a": "William Lee",
   "b": "Robert Schimony",
   "team": "Dill Dinkers Hatboro Aces",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.2,
   "avgActual": -6,
   "avgExpected": -3.3,
   "aId": "9e264c96-36cf-45a9-90ad-1e125a82c851",
   "bId": "b85c2074-a149-4382-8563-e1ff5b5d70bc"
  },
  {
   "a": "Eva Danieli",
   "b": "Matt Schall",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.2,
   "avgActual": -5,
   "avgExpected": -2.6,
   "aId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae",
   "bId": "aa0d9944-a9d3-46d5-8650-54e894adfeb2"
  },
  {
   "a": "Chris Damato",
   "b": "Zach Hollmann",
   "team": "Pickle House",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.2,
   "avgActual": -1.2,
   "avgExpected": 1.2,
   "aId": "445e89c8-a23c-440c-bd3c-7eab366bdd85",
   "bId": "8aef2d8a-0bd4-45df-b5d1-1a120a81ef0f"
  },
  {
   "a": "Brittany Hall",
   "b": "Nathan Law",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.3,
   "avgActual": -2.3,
   "avgExpected": 0.6,
   "aId": "17cc768d-f6c8-484c-814e-063d17cec72f",
   "bId": "3c81d27f-9e68-439b-a476-f5ac1a54f45a"
  },
  {
   "a": "Chad Durkin",
   "b": "Keith Shedlock",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1.3,
   "avgActual": -0.7,
   "avgExpected": 2.4,
   "aId": "54ed1c79-aaa0-486d-851b-d5a4db375b94",
   "bId": "f4b44cd7-fc9a-41a2-b569-cdaf08b0bf26"
  },
  {
   "a": "Matt Schall",
   "b": "Zach Hizer",
   "team": "Jersey Pickleball Club",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -1.4,
   "avgActual": -3.2,
   "avgExpected": -0.7,
   "aId": "aa0d9944-a9d3-46d5-8650-54e894adfeb2",
   "bId": "b5e576e1-d16d-4c9d-ab28-2e1b1e66487b"
  },
  {
   "a": "Elysia Price",
   "b": "Mark Kilimnik",
   "team": "Bounce Philly",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.4,
   "avgActual": -5.3,
   "avgExpected": -2.1,
   "aId": "a0ca4338-b610-4630-9f41-8dfd380e1af7",
   "bId": "d6c15f91-4cc9-4612-8ec3-8f4ebd4e0cc1"
  },
  {
   "a": "Gissel Escalante",
   "b": "Chris Long",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.5,
   "avgActual": -1.7,
   "avgExpected": 1.3,
   "aId": "63221cc8-e303-4675-8dde-4fc77e871627",
   "bId": "f7f6ce2d-1cbb-45f9-ad8f-e42b89b99554"
  },
  {
   "a": "Ryan Furman",
   "b": "Caleb Perry-Abner",
   "team": "Jersey Devil",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.5,
   "avgActual": -3.2,
   "avgExpected": -0.2,
   "aId": "a89121dd-192b-486d-b39d-18ee8447d641",
   "bId": "c25e04ae-a9bf-4943-858d-5b7a94261e43"
  },
  {
   "a": "Robert Schimony",
   "b": "Julia Plein",
   "team": "Dill Dinkers Hatboro Aces",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.5,
   "avgActual": -12,
   "avgExpected": -8.6,
   "aId": "b85c2074-a149-4382-8563-e1ff5b5d70bc",
   "bId": "f3d99274-413c-4720-9c8d-1a71f9b2e717"
  },
  {
   "a": "Stacy Walkowitz",
   "b": "Jack Blumberg",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1.5,
   "avgActual": 0,
   "avgExpected": 3.6,
   "aId": "a19b179a-6a16-43a7-b2af-8d6e8d1a1205",
   "bId": "f2929b28-a6ee-45e5-9846-da957b6d8734"
  },
  {
   "a": "Robbie Oddy",
   "b": "Ross Switkes",
   "team": "Flemington",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.6,
   "avgActual": -2.7,
   "avgExpected": 0.4,
   "aId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6",
   "bId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b"
  },
  {
   "a": "Thomas Connolly",
   "b": "Patrick Ryan",
   "team": "Flemington",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -1.6,
   "avgActual": -1.4,
   "avgExpected": 1.4,
   "aId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3",
   "bId": "8344fbda-35c2-4ce0-94ad-158090d2d5ba"
  },
  {
   "a": "Lissa Eagles",
   "b": "Emily Babinsky",
   "team": "Pickle House",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1.6,
   "avgActual": -2,
   "avgExpected": 1.8,
   "aId": "9ec39678-a120-45de-b8a5-897b8cf900cd",
   "bId": "d0e2c1ea-529d-4364-b521-cb205ecdded3"
  },
  {
   "a": "Kelly Arvidson",
   "b": "Melissa Dardani",
   "team": "Flemington",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -1.9,
   "avgActual": -5.5,
   "avgExpected": -2.4,
   "aId": "c053f5d6-16e1-4847-b27b-49fe41f367c6",
   "bId": "ef423f8a-5c2c-4a12-9f37-b41ff6d6c530"
  },
  {
   "a": "Adam Beck",
   "b": "William Lee",
   "team": "Dill Dinkers Hatboro Aces",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.9,
   "avgActual": -5.3,
   "avgExpected": -1,
   "aId": "7d836ecc-e553-4966-9c12-2dc698a545d0",
   "bId": "9e264c96-36cf-45a9-90ad-1e125a82c851"
  },
  {
   "a": "Teresa Wang",
   "b": "Nick Meale",
   "team": "Bounce Malvern",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -2,
   "avgActual": 1.4,
   "avgExpected": 5,
   "aId": "741de6b9-5fe7-49aa-9c55-5ff4050bb7a1",
   "bId": "ec0bad09-8256-49b3-ae86-3add22dd995f"
  },
  {
   "a": "Shreyas Pani",
   "b": "Dilan Shah",
   "team": "Monroe",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -2.2,
   "avgActual": -5.6,
   "avgExpected": -1.6,
   "aId": "3cebd01c-ff32-4544-b6a6-2a68152b2ee5",
   "bId": "91d23f87-e0fc-4448-890e-c3abd96c70b4"
  },
  {
   "a": "Nathan Law",
   "b": "Stacy Walkowitz",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.2,
   "avgActual": -6.7,
   "avgExpected": -1.6,
   "aId": "3c81d27f-9e68-439b-a476-f5ac1a54f45a",
   "bId": "a19b179a-6a16-43a7-b2af-8d6e8d1a1205"
  },
  {
   "a": "Amanda Ksiezopolski",
   "b": "Sara Synn",
   "team": "Monroe",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.2,
   "avgActual": -7,
   "avgExpected": -2,
   "aId": "2138af89-34bc-4ee2-9955-ff16f0997031",
   "bId": "37acfc18-a8d1-4ea0-8c21-0d830c9f4f90"
  },
  {
   "a": "Cristi Landrigan",
   "b": "Nahla Bernhardt",
   "team": "Dill Dinkers Hatboro The Factory",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.4,
   "avgActual": -5.7,
   "avgExpected": -0.1,
   "aId": "1be028eb-1b92-4961-b508-fa0879c78017",
   "bId": "9dae8c17-6878-473a-83e9-a43b434f876b"
  }
 ],
 "matches": [
  {
   "result": "away",
   "week": 1,
   "home": "Monroe",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-08-26T19:00:00",
   "complete": true,
   "homePoints": 604,
   "awayPoints": 639,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Ruhi Shah",
      "Maanav Shah"
     ],
     "a": [
      "Anisha Malhotra",
      "Chris Long"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Sophia Kaufmann",
      "Shreyas Pani"
     ],
     "a": [
      "Paula Ro",
      "Sidd Pathare"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Morgan Fishman",
      "Anthony Ursino"
     ],
     "a": [
      "Gissel Escalante",
      "Jason Makarevic"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Richa Shah",
      "Dilan Shah"
     ],
     "a": [
      "Ally Yan",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Richa Shah",
      "Ruhi Shah"
     ],
     "a": [
      "Gissel Escalante",
      "Paula Ro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sophia Kaufmann",
      "Angela Luo"
     ],
     "a": [
      "Anisha Malhotra",
      "Amy Yan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Dilan Shah",
      "Maanav Shah"
     ],
     "a": [
      "Chris Long",
      "Sidd Pathare"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Eric Lin",
      "Shreyas Pani"
     ],
     "a": [
      "Camrin Cronheim",
      "Jason Makarevic"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Richa Shah",
      "Dilan Shah"
     ],
     "a": [
      "Paula Ro",
      "Sidd Pathare"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Ruhi Shah",
      "Maanav Shah"
     ],
     "a": [
      "Anisha Malhotra",
      "Chris Long"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Morgan Fishman",
      "Anthony Ursino"
     ],
     "a": [
      "Amy Yan",
      "Jason Makarevic"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Angela Luo",
      "Eric Lin"
     ],
     "a": [
      "Ally Yan",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ruhi Shah",
      "Morgan Fishman"
     ],
     "a": [
      "Gissel Escalante",
      "Paula Ro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Sophia Kaufmann",
      "Angela Luo"
     ],
     "a": [
      "Anisha Malhotra",
      "Ally Yan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Dilan Shah",
      "Maanav Shah"
     ],
     "a": [
      "Chris Long",
      "Sidd Pathare"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Shreyas Pani",
      "Anthony Ursino"
     ],
     "a": [
      "Camrin Cronheim",
      "Jason Makarevic"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Richa Shah",
      "Shreyas Pani"
     ],
     "a": [
      "Gissel Escalante",
      "Chris Long"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sophia Kaufmann",
      "Maanav Shah"
     ],
     "a": [
      "Ally Yan",
      "Sidd Pathare"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Ruhi Shah",
      "Eric Lin"
     ],
     "a": [
      "Anisha Malhotra",
      "Jason Makarevic"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Angela Luo",
      "Anthony Ursino"
     ],
     "a": [
      "Amy Yan",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Ruhi Shah",
      "Morgan Fishman"
     ],
     "a": [
      "Gissel Escalante",
      "Amy Yan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Richa Shah",
      "Angela Luo"
     ],
     "a": [
      "Paula Ro",
      "Ally Yan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Maanav Shah",
      "Eric Lin"
     ],
     "a": [
      "Chris Long",
      "Jason Makarevic"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Shreyas Pani",
      "Dilan Shah"
     ],
     "a": [
      "Camrin Cronheim",
      "Sidd Pathare"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Richa Shah",
      "Maanav Shah"
     ],
     "a": [
      "Gissel Escalante",
      "Chris Long"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ruhi Shah",
      "Eric Lin"
     ],
     "a": [
      "Anisha Malhotra",
      "Sidd Pathare"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Sophia Kaufmann",
      "Anthony Ursino"
     ],
     "a": [
      "Ally Yan",
      "Jason Makarevic"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Morgan Fishman",
      "Shreyas Pani"
     ],
     "a": [
      "Amy Yan",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ruhi Shah",
      "Sophia Kaufmann"
     ],
     "a": [
      "Gissel Escalante",
      "Anisha Malhotra"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Morgan Fishman",
      "Angela Luo"
     ],
     "a": [
      "Paula Ro",
      "Amy Yan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Maanav Shah",
      "Anthony Ursino"
     ],
     "a": [
      "Chris Long",
      "Jason Makarevic"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Eric Lin",
      "Shreyas Pani"
     ],
     "a": [
      "Camrin Cronheim",
      "Sidd Pathare"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 1,
   "home": "Flemington",
   "away": "Pickle House",
   "time": "2026-08-26T19:00:00",
   "complete": true,
   "homePoints": 553,
   "awayPoints": 644,
   "homeGW": 9,
   "awayGW": 23,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Suzi Battison",
      "Robbie Oddy"
     ],
     "a": [
      "Kerrin Maurer",
      "Mickey Cook"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Aimee Castellano",
      "Ross Switkes"
     ],
     "a": [
      "Yoyo Shen",
      "Michael Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Melissa Dardani",
      "Thomas Connolly"
     ],
     "a": [
      "Emily Babinsky",
      "Zach Hollmann"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kelly Arvidson",
      "Patrick Ryan"
     ],
     "a": [
      "Lissa Eagles",
      "Chris Damato"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Susan Ackley",
      "Kelly Arvidson"
     ],
     "a": [
      "Kerrin Maurer",
      "Lissa Eagles"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Suzi Battison",
      "Melissa Dardani"
     ],
     "a": [
      "Emily Babinsky",
      "Yoyo Shen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Robbie Oddy",
      "Thomas Connolly"
     ],
     "a": [
      "Zach Hollmann",
      "Deepak Sunku"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Patrick Ryan",
      "Ross Switkes"
     ],
     "a": [
      "Mickey Cook",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Kelly Arvidson",
      "Patrick Ryan"
     ],
     "a": [
      "Kerrin Maurer",
      "Mickey Cook"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Aimee Castellano",
      "Robbie Oddy"
     ],
     "a": [
      "Emily Babinsky",
      "Deepak Sunku"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Melissa Dardani",
      "Thomas Connolly"
     ],
     "a": [
      "Lissa Eagles",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Suzi Battison",
      "Ross Switkes"
     ],
     "a": [
      "Yoyo Shen",
      "Michael Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Suzi Battison",
      "Melissa Dardani"
     ],
     "a": [
      "Kerrin Maurer",
      "Lissa Eagles"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Susan Ackley",
      "Kelly Arvidson"
     ],
     "a": [
      "Emily Babinsky",
      "Yoyo Shen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Robbie Oddy",
      "Thomas Connolly"
     ],
     "a": [
      "Mickey Cook",
      "Zach Hollmann"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Patrick Ryan",
      "Ross Switkes"
     ],
     "a": [
      "Michael Li",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Melissa Dardani",
      "Robbie Oddy"
     ],
     "a": [
      "Emily Babinsky",
      "Mickey Cook"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Susan Ackley",
      "Ross Switkes"
     ],
     "a": [
      "Kerrin Maurer",
      "Michael Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Aimee Castellano",
      "Patrick Ryan"
     ],
     "a": [
      "Yoyo Shen",
      "Zach Hollmann"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Suzi Battison",
      "Thomas Connolly"
     ],
     "a": [
      "Lissa Eagles",
      "Deepak Sunku"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Kelly Arvidson",
      "Aimee Castellano"
     ],
     "a": [
      "Yoyo Shen",
      "Lissa Eagles"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Suzi Battison",
      "Susan Ackley"
     ],
     "a": [
      "Kerrin Maurer",
      "Emily Babinsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Robbie Oddy",
      "Patrick Ryan"
     ],
     "a": [
      "Michael Li",
      "Zach Hollmann"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Thomas Connolly",
      "Ross Switkes"
     ],
     "a": [
      "Deepak Sunku",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Susan Ackley",
      "Ross Switkes"
     ],
     "a": [
      "Yoyo Shen",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Aimee Castellano",
      "Patrick Ryan"
     ],
     "a": [
      "Emily Babinsky",
      "Mickey Cook"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Melissa Dardani",
      "Robbie Oddy"
     ],
     "a": [
      "Lissa Eagles",
      "Deepak Sunku"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Suzi Battison",
      "Thomas Connolly"
     ],
     "a": [
      "Kerrin Maurer",
      "Michael Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Melissa Dardani",
      "Kelly Arvidson"
     ],
     "a": [
      "Lissa Eagles",
      "Yoyo Shen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Susan Ackley",
      "Aimee Castellano"
     ],
     "a": [
      "Kerrin Maurer",
      "Emily Babinsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Robbie Oddy",
      "Ross Switkes"
     ],
     "a": [
      "Deepak Sunku",
      "Chris Damato"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Thomas Connolly",
      "Patrick Ryan"
     ],
     "a": [
      "Zach Hollmann",
      "Michael Li"
     ]
    }
   ],
   "subs": [
    "Deepak Sunku"
   ]
  },
  {
   "result": "away",
   "week": 1,
   "home": "Dill Dinkers Hatboro Aces",
   "away": "Jersey Devil",
   "time": "2026-08-26T19:30:00",
   "complete": true,
   "homePoints": 605,
   "awayPoints": 648,
   "homeGW": 11,
   "awayGW": 21,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sarah Ross",
      "Will Delaney"
     ],
     "a": [
      "Michelle Quach",
      "Johny Mario"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Erika Richards",
      "William Lee"
     ],
     "a": [
      "Rachel Berger",
      "Stephen Conger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Lilie Sen",
      "Robert Schimony"
     ],
     "a": [
      "Danielle Bernero",
      "Caleb Perry-Abner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Claudya Elefante",
      "Ryan Rosen"
     ],
     "a": [
      "Michaela Pierznik",
      "Ryan Furman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Claudya Elefante",
      "Sarah Ross"
     ],
     "a": [
      "Danielle Bernero",
      "Rachel Berger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Erika Richards",
      "Lilie Sen"
     ],
     "a": [
      "Michelle Quach",
      "Lauren Mercado"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Robert Schimony",
      "William Lee"
     ],
     "a": [
      "Vince Abate",
      "Johny Mario"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Ryan Rosen",
      "Will Delaney"
     ],
     "a": [
      "Ryan Furman",
      "Caleb Perry-Abner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sarah Ross",
      "Will Delaney"
     ],
     "a": [
      "Rachel Berger",
      "Stephen Conger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Claudya Elefante",
      "Ryan Rosen"
     ],
     "a": [
      "Michelle Quach",
      "Caleb Perry-Abner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lilie Sen",
      "William Lee"
     ],
     "a": [
      "Lauren Mercado",
      "Vince Abate"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Erika Richards",
      "Robert Schimony"
     ],
     "a": [
      "Michaela Pierznik",
      "Ryan Furman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Claudya Elefante",
      "Lilie Sen"
     ],
     "a": [
      "Michelle Quach",
      "Danielle Bernero"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Erika Richards",
      "Sarah Ross"
     ],
     "a": [
      "Lauren Mercado",
      "Michaela Pierznik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Ryan Rosen",
      "Robert Schimony"
     ],
     "a": [
      "Johny Mario",
      "Vince Abate"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Will Delaney",
      "William Lee"
     ],
     "a": [
      "Caleb Perry-Abner",
      "Ryan Furman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Erika Richards",
      "William Lee"
     ],
     "a": [
      "Michelle Quach",
      "Caleb Perry-Abner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sarah Ross",
      "Ryan Rosen"
     ],
     "a": [
      "Danielle Bernero",
      "Vince Abate"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lilie Sen",
      "Will Delaney"
     ],
     "a": [
      "Michaela Pierznik",
      "Stephen Conger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Claudya Elefante",
      "Robert Schimony"
     ],
     "a": [
      "Rachel Berger",
      "Johny Mario"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Claudya Elefante",
      "Sarah Ross"
     ],
     "a": [
      "Rachel Berger",
      "Michaela Pierznik"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Erika Richards",
      "Lilie Sen"
     ],
     "a": [
      "Lauren Mercado",
      "Michelle Quach"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ryan Rosen",
      "Will Delaney"
     ],
     "a": [
      "Vince Abate",
      "Stephen Conger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "William Lee",
      "Robert Schimony"
     ],
     "a": [
      "Johny Mario",
      "Ryan Furman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Claudya Elefante",
      "Robert Schimony"
     ],
     "a": [
      "Danielle Bernero",
      "Caleb Perry-Abner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Sarah Ross",
      "William Lee"
     ],
     "a": [
      "Lauren Mercado",
      "Stephen Conger"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Erika Richards",
      "Ryan Rosen"
     ],
     "a": [
      "Rachel Berger",
      "Ryan Furman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Lilie Sen",
      "Will Delaney"
     ],
     "a": [
      "Michaela Pierznik",
      "Johny Mario"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sarah Ross",
      "Lilie Sen"
     ],
     "a": [
      "Danielle Bernero",
      "Michelle Quach"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Claudya Elefante",
      "Erika Richards"
     ],
     "a": [
      "Michaela Pierznik",
      "Lauren Mercado"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 28,
     "h": [
      "Ryan Rosen",
      "William Lee"
     ],
     "a": [
      "Johny Mario",
      "Caleb Perry-Abner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Robert Schimony",
      "Will Delaney"
     ],
     "a": [
      "Vince Abate",
      "Stephen Conger"
     ]
    }
   ],
   "subs": [
    "Lilie Sen",
    "Vince Abate",
    "Ryan Furman"
   ]
  },
  {
   "result": null,
   "week": 1,
   "home": "ACE Moorestown",
   "away": "Bounce Philly",
   "time": "2026-08-26T19:30:00",
   "complete": false
  },
  {
   "result": "away",
   "week": 1,
   "home": "Home Court",
   "away": "Jersey Pickleball Club",
   "time": "2026-08-26T19:30:00",
   "complete": true,
   "homePoints": 604,
   "awayPoints": 630,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lynda Tomaru",
      "Elliot Stevens"
     ],
     "a": [
      "Joey Angelson",
      "Robert Khalev"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Sheila Siu",
      "Ken Velarde"
     ],
     "a": [
      "Eva Danieli",
      "Matt Schall"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Taylor Peracchio",
      "Daniel Gallegos"
     ],
     "a": [
      "Noelle Ramirez",
      "Andrew Bernard"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kara Infante",
      "Marcos Claros"
     ],
     "a": [
      "Tin Wai Kwan",
      "Zach Hizer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kara Infante",
      "Ariana Rizvani"
     ],
     "a": [
      "Tin Wai Kwan",
      "Joey Angelson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Taylor Peracchio",
      "Lynda Tomaru"
     ],
     "a": [
      "Eva Danieli",
      "Noelle Ramirez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ken Velarde",
      "Aidan Jackson"
     ],
     "a": [
      "Zach Hizer",
      "Andrew Bernard"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Zachery Corey",
      "Elliot Stevens"
     ],
     "a": [
      "Kevin Wysoczynski",
      "Matt Schall"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sheila Siu",
      "Aidan Jackson"
     ],
     "a": [
      "Eva Danieli",
      "Robert Khalev"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Taylor Peracchio",
      "Daniel Gallegos"
     ],
     "a": [
      "Noelle Ramirez",
      "Andrew Bernard"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Ariana Rizvani",
      "Marcos Claros"
     ],
     "a": [
      "Tin Wai Kwan",
      "Matt Schall"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Lynda Tomaru",
      "Elliot Stevens"
     ],
     "a": [
      "Joey Angelson",
      "Kevin Wysoczynski"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kara Infante",
      "Ariana Rizvani"
     ],
     "a": [
      "Joey Angelson",
      "Tin Wai Kwan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Taylor Peracchio",
      "Lynda Tomaru"
     ],
     "a": [
      "Eva Danieli",
      "Noelle Ramirez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Daniel Gallegos",
      "Ken Velarde"
     ],
     "a": [
      "Zach Hizer",
      "Matt Schall"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Aidan Jackson",
      "Elliot Stevens"
     ],
     "a": [
      "Kevin Wysoczynski",
      "Robert Khalev"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Ariana Rizvani",
      "Aidan Jackson"
     ],
     "a": [
      "Joey Angelson",
      "Robert Khalev"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kara Infante",
      "Marcos Claros"
     ],
     "a": [
      "Tin Wai Kwan",
      "Andrew Bernard"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Taylor Peracchio",
      "Zachery Corey"
     ],
     "a": [
      "Noelle Ramirez",
      "Matt Schall"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lynda Tomaru",
      "Ken Velarde"
     ],
     "a": [
      "Eva Danieli",
      "Zach Hizer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Ariana Rizvani",
      "Sheila Siu"
     ],
     "a": [
      "Joey Angelson",
      "Eva Danieli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Taylor Peracchio",
      "Kara Infante"
     ],
     "a": [
      "Tin Wai Kwan",
      "Noelle Ramirez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Daniel Gallegos",
      "Ken Velarde"
     ],
     "a": [
      "Andrew Bernard",
      "Matt Schall"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Elliot Stevens",
      "Zachery Corey"
     ],
     "a": [
      "Zach Hizer",
      "Kevin Wysoczynski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Lynda Tomaru",
      "Daniel Gallegos"
     ],
     "a": [
      "Eva Danieli",
      "Robert Khalev"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kara Infante",
      "Aidan Jackson"
     ],
     "a": [
      "Tin Wai Kwan",
      "Andrew Bernard"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Taylor Peracchio",
      "Zachery Corey"
     ],
     "a": [
      "Noelle Ramirez",
      "Zach Hizer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Ariana Rizvani",
      "Marcos Claros"
     ],
     "a": [
      "Joey Angelson",
      "Kevin Wysoczynski"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Ariana Rizvani",
      "Sheila Siu"
     ],
     "a": [
      "Joey Angelson",
      "Eva Danieli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Taylor Peracchio",
      "Kara Infante"
     ],
     "a": [
      "Tin Wai Kwan",
      "Noelle Ramirez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Marcos Claros",
      "Elliot Stevens"
     ],
     "a": [
      "Matt Schall",
      "Zach Hizer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ken Velarde",
      "Aidan Jackson"
     ],
     "a": [
      "Robert Khalev",
      "Kevin Wysoczynski"
     ]
    }
   ],
   "subs": [
    "Tin Wai Kwan",
    "Noelle Ramirez"
   ]
  },
  {
   "result": "away",
   "week": 1,
   "home": "Bounce Malvern",
   "away": "Dill Dinkers Hatboro The Factory",
   "time": "2026-08-26T19:30:00",
   "complete": true,
   "homePoints": 574,
   "awayPoints": 676,
   "homeGW": 8,
   "awayGW": 24,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Yuki Kim",
      "Darren Johnson"
     ],
     "a": [
      "Marina Cozac",
      "Varun Prakash"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Nam Barsh",
      "Chris Tabeling"
     ],
     "a": [
      "Hannah Nussbaum",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Harriet Levin",
      "Nick Meale"
     ],
     "a": [
      "Nahla Bernhardt",
      "Kenoa Tio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Megan Harvey",
      "Shashank Kamdar"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Andrew Wakefield"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Yuki Kim",
      "Harriet Levin"
     ],
     "a": [
      "Hannah Nussbaum",
      "Cristi Landrigan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Sarah Kline",
      "Nam Barsh"
     ],
     "a": [
      "Marina Cozac",
      "Kaylyn Swankoski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Zyril Carilo",
      "Nick Meale"
     ],
     "a": [
      "Conor Landrigan",
      "Kenoa Tio"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Chris Tabeling",
      "Darren Johnson"
     ],
     "a": [
      "Dylan Ashbach",
      "Varun Prakash"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Nam Barsh",
      "Darren Johnson"
     ],
     "a": [
      "Cristi Landrigan",
      "Conor Landrigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Sarah Kline",
      "Zyril Carilo"
     ],
     "a": [
      "Hannah Nussbaum",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Megan Harvey",
      "Shashank Kamdar"
     ],
     "a": [
      "Nahla Bernhardt",
      "Andrew Wakefield"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Yuki Kim",
      "Nick Meale"
     ],
     "a": [
      "Marina Cozac",
      "Kenoa Tio"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Harriet Levin",
      "Megan Harvey"
     ],
     "a": [
      "Hannah Nussbaum",
      "Marina Cozac"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Nam Barsh",
      "Sarah Kline"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Nahla Bernhardt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Shashank Kamdar",
      "Zyril Carilo"
     ],
     "a": [
      "Varun Prakash",
      "Kenoa Tio"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Nick Meale",
      "Chris Tabeling"
     ],
     "a": [
      "Dylan Ashbach",
      "Conor Landrigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Megan Harvey",
      "Chris Tabeling"
     ],
     "a": [
      "Marina Cozac",
      "Andrew Wakefield"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sarah Kline",
      "Shashank Kamdar"
     ],
     "a": [
      "Cristi Landrigan",
      "Conor Landrigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Yuki Kim",
      "Nick Meale"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Varun Prakash"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Harriet Levin",
      "Darren Johnson"
     ],
     "a": [
      "Nahla Bernhardt",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Nam Barsh",
      "Harriet Levin"
     ],
     "a": [
      "Cristi Landrigan",
      "Hannah Nussbaum"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Yuki Kim",
      "Sarah Kline"
     ],
     "a": [
      "Marina Cozac",
      "Kaylyn Swankoski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Zyril Carilo",
      "Darren Johnson"
     ],
     "a": [
      "Conor Landrigan",
      "Kenoa Tio"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Nick Meale",
      "Chris Tabeling"
     ],
     "a": [
      "Andrew Wakefield",
      "Varun Prakash"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Megan Harvey",
      "Chris Tabeling"
     ],
     "a": [
      "Marina Cozac",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sarah Kline",
      "Zyril Carilo"
     ],
     "a": [
      "Cristi Landrigan",
      "Andrew Wakefield"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Nam Barsh",
      "Shashank Kamdar"
     ],
     "a": [
      "Nahla Bernhardt",
      "Conor Landrigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Yuki Kim",
      "Darren Johnson"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Varun Prakash"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Nam Barsh",
      "Megan Harvey"
     ],
     "a": [
      "Cristi Landrigan",
      "Nahla Bernhardt"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Yuki Kim",
      "Harriet Levin"
     ],
     "a": [
      "Hannah Nussbaum",
      "Kaylyn Swankoski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Zyril Carilo",
      "Nick Meale"
     ],
     "a": [
      "Dylan Ashbach",
      "Varun Prakash"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Shashank Kamdar",
      "Chris Tabeling"
     ],
     "a": [
      "Kenoa Tio",
      "Andrew Wakefield"
     ]
    }
   ],
   "subs": [
    "Darren Johnson"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Pickle House",
   "time": "2026-09-02T19:00:00",
   "complete": true,
   "homePoints": 627,
   "awayPoints": 621,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Gissel Escalante",
      "Jason Makarevic"
     ],
     "a": [
      "Taylor Hartman",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Zoe Ousouljoglou",
      "Camrin Cronheim"
     ],
     "a": [
      "Kerrin Maurer",
      "Michael Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ally Yan",
      "Sidd Pathare"
     ],
     "a": [
      "Emily Babinsky",
      "Mickey Cook"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Anisha Malhotra",
      "Chris Long"
     ],
     "a": [
      "Yoyo Shen",
      "Dipen Bhatt"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Gissel Escalante",
      "Anisha Malhotra"
     ],
     "a": [
      "Taylor Hartman",
      "Yoyo Shen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Amy Yan",
      "Zoe Ousouljoglou"
     ],
     "a": [
      "Kerrin Maurer",
      "Lissa Eagles"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Camrin Cronheim",
      "Sidd Pathare"
     ],
     "a": [
      "Zach Hollmann",
      "Chris Damato"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Chris Long",
      "Joshua Ahn"
     ],
     "a": [
      "Michael Li",
      "Dipen Bhatt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Zoe Ousouljoglou",
      "Chris Long"
     ],
     "a": [
      "Taylor Hartman",
      "Michael Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Gissel Escalante",
      "Jason Makarevic"
     ],
     "a": [
      "Yoyo Shen",
      "Zach Hollmann"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Amy Yan",
      "Joshua Ahn"
     ],
     "a": [
      "Lissa Eagles",
      "Dipen Bhatt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ally Yan",
      "Camrin Cronheim"
     ],
     "a": [
      "Emily Babinsky",
      "Mickey Cook"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Ally Yan",
      "Anisha Malhotra"
     ],
     "a": [
      "Taylor Hartman",
      "Emily Babinsky"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Gissel Escalante",
      "Zoe Ousouljoglou"
     ],
     "a": [
      "Kerrin Maurer",
      "Lissa Eagles"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Camrin Cronheim",
      "Jason Makarevic"
     ],
     "a": [
      "Zach Hollmann",
      "Chris Damato"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Joshua Ahn",
      "Sidd Pathare"
     ],
     "a": [
      "Mickey Cook",
      "Michael Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Anisha Malhotra",
      "Camrin Cronheim"
     ],
     "a": [
      "Yoyo Shen",
      "Zach Hollmann"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Gissel Escalante",
      "Chris Long"
     ],
     "a": [
      "Kerrin Maurer",
      "Michael Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Amy Yan",
      "Jason Makarevic"
     ],
     "a": [
      "Emily Babinsky",
      "Dipen Bhatt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Ally Yan",
      "Joshua Ahn"
     ],
     "a": [
      "Lissa Eagles",
      "Mickey Cook"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Zoe Ousouljoglou",
      "Amy Yan"
     ],
     "a": [
      "Taylor Hartman",
      "Lissa Eagles"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Gissel Escalante",
      "Anisha Malhotra"
     ],
     "a": [
      "Kerrin Maurer",
      "Emily Babinsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Camrin Cronheim",
      "Sidd Pathare"
     ],
     "a": [
      "Chris Damato",
      "Michael Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Chris Long",
      "Joshua Ahn"
     ],
     "a": [
      "Zach Hollmann",
      "Dipen Bhatt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Anisha Malhotra",
      "Camrin Cronheim"
     ],
     "a": [
      "Taylor Hartman",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Gissel Escalante",
      "Chris Long"
     ],
     "a": [
      "Kerrin Maurer",
      "Zach Hollmann"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Zoe Ousouljoglou",
      "Sidd Pathare"
     ],
     "a": [
      "Yoyo Shen",
      "Michael Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Ally Yan",
      "Jason Makarevic"
     ],
     "a": [
      "Lissa Eagles",
      "Mickey Cook"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Anisha Malhotra",
      "Amy Yan"
     ],
     "a": [
      "Yoyo Shen",
      "Emily Babinsky"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Gissel Escalante",
      "Zoe Ousouljoglou"
     ],
     "a": [
      "Kerrin Maurer",
      "Taylor Hartman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Chris Long",
      "Jason Makarevic"
     ],
     "a": [
      "Chris Damato",
      "Michael Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Joshua Ahn",
      "Sidd Pathare"
     ],
     "a": [
      "Zach Hollmann",
      "Dipen Bhatt"
     ]
    }
   ],
   "subs": [
    "Joshua Ahn"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Bounce Malvern",
   "away": "ACE Moorestown",
   "time": "2026-09-02T19:30:00",
   "complete": true,
   "homePoints": 648,
   "awayPoints": 537,
   "homeGW": 21,
   "awayGW": 11,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Nam Barsh",
      "Shashank Kamdar"
     ],
     "a": [
      "Stacy Walkowitz",
      "Nathan Law"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Harriet Levin",
      "Jonah Karczmer"
     ],
     "a": [
      "Anita Buggins",
      "Damien Stahl"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Yuki Kim",
      "Lou Frignito"
     ],
     "a": [
      "Jennifer Sanchez",
      "Marc Harden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Teresa Wang",
      "Nick Meale"
     ],
     "a": [
      "Brittany Hall",
      "Vaughn Mcclelland"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Harriet Levin",
      "Sarah Kline"
     ],
     "a": [
      "Anita Buggins",
      "Jennifer Sanchez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Yuki Kim",
      "Teresa Wang"
     ],
     "a": [
      "Brittany Hall",
      "Stacy Walkowitz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Shashank Kamdar",
      "Jonah Karczmer"
     ],
     "a": [
      "Nathan Law",
      "Damien Stahl"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Lou Frignito",
      "Nick Meale"
     ],
     "a": [
      "Marc Harden",
      "Vaughn Mcclelland"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Teresa Wang",
      "Nick Meale"
     ],
     "a": [
      "Brittany Hall",
      "Marc Harden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Nam Barsh",
      "Jonah Karczmer"
     ],
     "a": [
      "Jennifer Sanchez",
      "Damien Stahl"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Harriet Levin",
      "Shashank Kamdar"
     ],
     "a": [
      "Anita Buggins",
      "Nathan Law"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Yuki Kim",
      "Lou Frignito"
     ],
     "a": [
      "Stacy Walkowitz",
      "Vaughn Mcclelland"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Teresa Wang",
      "Nam Barsh"
     ],
     "a": [
      "Jennifer Sanchez",
      "Brittany Hall"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sarah Kline",
      "Harriet Levin"
     ],
     "a": [
      "Anita Buggins",
      "Stacy Walkowitz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Lou Frignito",
      "Nick Meale"
     ],
     "a": [
      "Damien Stahl",
      "Vaughn Mcclelland"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Shashank Kamdar",
      "Jonah Karczmer"
     ],
     "a": [
      "Nathan Law",
      "Marc Harden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Nam Barsh",
      "Jonah Karczmer"
     ],
     "a": [
      "Anita Buggins",
      "Vaughn Mcclelland"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 4,
     "h": [
      "Teresa Wang",
      "Shashank Kamdar"
     ],
     "a": [
      "Brittany Hall",
      "Nathan Law"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sarah Kline",
      "Lou Frignito"
     ],
     "a": [
      "Stacy Walkowitz",
      "Marc Harden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Yuki Kim",
      "Nick Meale"
     ],
     "a": [
      "Jennifer Sanchez",
      "Damien Stahl"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Yuki Kim",
      "Sarah Kline"
     ],
     "a": [
      "Stacy Walkowitz",
      "Brittany Hall"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Nam Barsh",
      "Harriet Levin"
     ],
     "a": [
      "Anita Buggins",
      "Jennifer Sanchez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Lou Frignito",
      "Jonah Karczmer"
     ],
     "a": [
      "Nathan Law",
      "Marc Harden"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Nick Meale",
      "Shashank Kamdar"
     ],
     "a": [
      "Damien Stahl",
      "Vaughn Mcclelland"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Harriet Levin",
      "Lou Frignito"
     ],
     "a": [
      "Jennifer Sanchez",
      "Vaughn Mcclelland"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sarah Kline",
      "Shashank Kamdar"
     ],
     "a": [
      "Anita Buggins",
      "Nathan Law"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Teresa Wang",
      "Jonah Karczmer"
     ],
     "a": [
      "Brittany Hall",
      "Damien Stahl"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Yuki Kim",
      "Nick Meale"
     ],
     "a": [
      "Stacy Walkowitz",
      "Marc Harden"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Teresa Wang",
      "Nam Barsh"
     ],
     "a": [
      "Anita Buggins",
      "Stacy Walkowitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Yuki Kim",
      "Sarah Kline"
     ],
     "a": [
      "Brittany Hall",
      "Jennifer Sanchez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Lou Frignito",
      "Shashank Kamdar"
     ],
     "a": [
      "Nathan Law",
      "Damien Stahl"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Nick Meale",
      "Jonah Karczmer"
     ],
     "a": [
      "Marc Harden",
      "Vaughn Mcclelland"
     ]
    }
   ],
   "subs": [
    "Marc Harden",
    "Vaughn Mcclelland"
   ]
  },
  {
   "result": "away",
   "week": 2,
   "home": "Dill Dinkers Hatboro Aces",
   "away": "Bounce Philly",
   "time": "2026-09-02T19:30:00",
   "complete": true,
   "homePoints": 557,
   "awayPoints": 651,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Hannah Nussbaum",
      "Andrew Wakefield"
     ],
     "a": [
      "Rachel Alfano",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Julia Plein",
      "Anushk Gupta"
     ],
     "a": [
      "Charlotte Healey",
      "William Hayes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Claudya Elefante",
      "Adam Beck"
     ],
     "a": [
      "Alyssa Boyle",
      "Ashwin Korde"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Erika Richards",
      "William Lee"
     ],
     "a": [
      "Elysia Price",
      "Alexander Tong"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Claudya Elefante",
      "Erika Richards"
     ],
     "a": [
      "Alex Abad",
      "Charlotte Healey"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Alyssa Tartaglia",
      "Hannah Nussbaum"
     ],
     "a": [
      "Alyssa Boyle",
      "Rachel Alfano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Andrew Wakefield",
      "Anushk Gupta"
     ],
     "a": [
      "Ashwin Korde",
      "Alexander Tong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Robert Schimony",
      "William Lee"
     ],
     "a": [
      "Zachary Lessner",
      "William Hayes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Julia Plein",
      "Robert Schimony"
     ],
     "a": [
      "Rachel Alfano",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Alyssa Tartaglia",
      "Andrew Wakefield"
     ],
     "a": [
      "Alyssa Boyle",
      "William Hayes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Sarah Ross",
      "Anushk Gupta"
     ],
     "a": [
      "Elysia Price",
      "Zachary Lessner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Claudya Elefante",
      "Adam Beck"
     ],
     "a": [
      "Charlotte Healey",
      "Alexander Tong"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Alyssa Tartaglia",
      "Hannah Nussbaum"
     ],
     "a": [
      "Alex Abad",
      "Charlotte Healey"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sarah Ross",
      "Claudya Elefante"
     ],
     "a": [
      "Alyssa Boyle",
      "Elysia Price"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Anushk Gupta",
      "Robert Schimony"
     ],
     "a": [
      "Mark Kilimnik",
      "Zachary Lessner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Adam Beck",
      "William Lee"
     ],
     "a": [
      "Ashwin Korde",
      "Alexander Tong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Erika Richards",
      "William Lee"
     ],
     "a": [
      "Rachel Alfano",
      "Zachary Lessner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Hannah Nussbaum",
      "Andrew Wakefield"
     ],
     "a": [
      "Alex Abad",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Julia Plein",
      "Robert Schimony"
     ],
     "a": [
      "Charlotte Healey",
      "William Hayes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Alyssa Tartaglia",
      "Adam Beck"
     ],
     "a": [
      "Elysia Price",
      "Alexander Tong"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Hannah Nussbaum",
      "Claudya Elefante"
     ],
     "a": [
      "Alex Abad",
      "Rachel Alfano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Alyssa Tartaglia",
      "Sarah Ross"
     ],
     "a": [
      "Alyssa Boyle",
      "Elysia Price"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Anushk Gupta",
      "Andrew Wakefield"
     ],
     "a": [
      "Mark Kilimnik",
      "Zachary Lessner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Robert Schimony",
      "Adam Beck"
     ],
     "a": [
      "Ashwin Korde",
      "William Hayes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Julia Plein",
      "William Lee"
     ],
     "a": [
      "Rachel Alfano",
      "Zachary Lessner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Erika Richards",
      "Adam Beck"
     ],
     "a": [
      "Alyssa Boyle",
      "William Hayes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Alyssa Tartaglia",
      "Andrew Wakefield"
     ],
     "a": [
      "Charlotte Healey",
      "Alexander Tong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sarah Ross",
      "Anushk Gupta"
     ],
     "a": [
      "Alex Abad",
      "Ashwin Korde"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sarah Ross",
      "Hannah Nussbaum"
     ],
     "a": [
      "Elysia Price",
      "Rachel Alfano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Erika Richards",
      "Julia Plein"
     ],
     "a": [
      "Alyssa Boyle",
      "Alex Abad"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Andrew Wakefield",
      "Robert Schimony"
     ],
     "a": [
      "Alexander Tong",
      "William Hayes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Anushk Gupta",
      "William Lee"
     ],
     "a": [
      "Ashwin Korde",
      "Mark Kilimnik"
     ]
    }
   ],
   "subs": [
    "Andrew Wakefield",
    "Hannah Nussbaum"
   ]
  },
  {
   "result": "away",
   "week": 2,
   "home": "Home Court",
   "away": "Monroe",
   "time": "2026-09-02T19:30:00",
   "complete": true,
   "homePoints": 573,
   "awayPoints": 622,
   "homeGW": 10,
   "awayGW": 22,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Christine Sandella",
      "Marcos Claros"
     ],
     "a": [
      "Richa Shah",
      "Dilan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sheila Siu",
      "Noah Goding"
     ],
     "a": [
      "Ruhi Shah",
      "Maanav Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jen Vorel",
      "Ken Velarde"
     ],
     "a": [
      "Sara Synn",
      "Shreyas Pani"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kara Infante",
      "Austin Williams"
     ],
     "a": [
      "Amanda Ksiezopolski",
      "Anthony Ursino"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Christine Sandella",
      "Aurora Lewis"
     ],
     "a": [
      "Amalia Ditrapani",
      "Amanda Ksiezopolski"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kara Infante",
      "Jen Vorel"
     ],
     "a": [
      "Ruhi Shah",
      "Sara Synn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Aidan Jackson",
      "Noah Goding"
     ],
     "a": [
      "Maanav Shah",
      "Dilan Shah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Ken Velarde",
      "Austin Williams"
     ],
     "a": [
      "Shreyas Pani",
      "Eric Lin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Sheila Siu",
      "Noah Goding"
     ],
     "a": [
      "Amalia Ditrapani",
      "Maanav Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kara Infante",
      "Ken Velarde"
     ],
     "a": [
      "Richa Shah",
      "Shreyas Pani"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jen Vorel",
      "Austin Williams"
     ],
     "a": [
      "Sara Synn",
      "Eric Lin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Christine Sandella",
      "Marcos Claros"
     ],
     "a": [
      "Ruhi Shah",
      "Anthony Ursino"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Christine Sandella",
      "Jen Vorel"
     ],
     "a": [
      "Ruhi Shah",
      "Richa Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kara Infante",
      "Aurora Lewis"
     ],
     "a": [
      "Amanda Ksiezopolski",
      "Amalia Ditrapani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Marcos Claros",
      "Ken Velarde"
     ],
     "a": [
      "Dilan Shah",
      "Anthony Ursino"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Austin Williams",
      "Noah Goding"
     ],
     "a": [
      "Shreyas Pani",
      "Maanav Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Aurora Lewis",
      "Aidan Jackson"
     ],
     "a": [
      "Ruhi Shah",
      "Eric Lin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sheila Siu",
      "Ken Velarde"
     ],
     "a": [
      "Richa Shah",
      "Dilan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Christine Sandella",
      "Austin Williams"
     ],
     "a": [
      "Sara Synn",
      "Maanav Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Kara Infante",
      "Marcos Claros"
     ],
     "a": [
      "Amalia Ditrapani",
      "Anthony Ursino"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Christine Sandella",
      "Jen Vorel"
     ],
     "a": [
      "Ruhi Shah",
      "Amalia Ditrapani"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kara Infante",
      "Aurora Lewis"
     ],
     "a": [
      "Sara Synn",
      "Amanda Ksiezopolski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Ken Velarde",
      "Aidan Jackson"
     ],
     "a": [
      "Dilan Shah",
      "Shreyas Pani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Marcos Claros",
      "Austin Williams"
     ],
     "a": [
      "Anthony Ursino",
      "Eric Lin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Kara Infante",
      "Marcos Claros"
     ],
     "a": [
      "Ruhi Shah",
      "Shreyas Pani"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sheila Siu",
      "Aidan Jackson"
     ],
     "a": [
      "Richa Shah",
      "Maanav Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jen Vorel",
      "Austin Williams"
     ],
     "a": [
      "Amalia Ditrapani",
      "Eric Lin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Christine Sandella",
      "Ken Velarde"
     ],
     "a": [
      "Amanda Ksiezopolski",
      "Anthony Ursino"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jen Vorel",
      "Aurora Lewis"
     ],
     "a": [
      "Richa Shah",
      "Sara Synn"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Christine Sandella",
      "Kara Infante"
     ],
     "a": [
      "Ruhi Shah",
      "Amanda Ksiezopolski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Aidan Jackson",
      "Marcos Claros"
     ],
     "a": [
      "Dilan Shah",
      "Maanav Shah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Austin Williams",
      "Ken Velarde"
     ],
     "a": [
      "Eric Lin",
      "Shreyas Pani"
     ]
    }
   ],
   "subs": [
    "Christine Sandella"
   ]
  },
  {
   "result": "away",
   "week": 2,
   "home": "Jersey Pickleball Club",
   "away": "Flemington",
   "time": "2026-09-02T19:30:00",
   "complete": true,
   "homePoints": 610,
   "awayPoints": 626,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Joey Angelson",
      "Tom Laiso"
     ],
     "a": [
      "Melissa Dardani",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Catherine Stewart",
      "Kevin Wysoczynski"
     ],
     "a": [
      "Chanda Mccoy",
      "Thomas Connolly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Eva Danieli",
      "Matt Schall"
     ],
     "a": [
      "Elisangela Harrington",
      "Robbie Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Katalina Wang",
      "Andrew Bernard"
     ],
     "a": [
      "Kelly Arvidson",
      "Patrick Ryan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Eva Danieli",
      "Katalina Wang"
     ],
     "a": [
      "Melissa Dardani",
      "Kelly Arvidson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Joey Angelson",
      "Catherine Stewart"
     ],
     "a": [
      "Elisangela Harrington",
      "Chanda Mccoy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Matt Schall",
      "Andrew Bernard"
     ],
     "a": [
      "Robbie Oddy",
      "Thomas Connolly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sebastian Ferrer",
      "Kevin Wysoczynski"
     ],
     "a": [
      "Patrick Ryan",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Katalina Wang",
      "Tom Laiso"
     ],
     "a": [
      "Melissa Dardani",
      "Robbie Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Eva Danieli",
      "Sebastian Ferrer"
     ],
     "a": [
      "Chanda Mccoy",
      "Thomas Connolly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Joey Angelson",
      "Andrew Bernard"
     ],
     "a": [
      "Elisangela Harrington",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Catherine Stewart",
      "Matt Schall"
     ],
     "a": [
      "Kelly Arvidson",
      "Patrick Ryan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Eva Danieli",
      "Catherine Stewart"
     ],
     "a": [
      "Melissa Dardani",
      "Kelly Arvidson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Joey Angelson",
      "Katalina Wang"
     ],
     "a": [
      "Elisangela Harrington",
      "Chanda Mccoy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Matt Schall",
      "Kevin Wysoczynski"
     ],
     "a": [
      "Robbie Oddy",
      "Thomas Connolly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Tom Laiso",
      "Sebastian Ferrer"
     ],
     "a": [
      "Patrick Ryan",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Joey Angelson",
      "Tom Laiso"
     ],
     "a": [
      "Melissa Dardani",
      "Thomas Connolly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Katalina Wang",
      "Sebastian Ferrer"
     ],
     "a": [
      "Chanda Mccoy",
      "Robbie Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Eva Danieli",
      "Andrew Bernard"
     ],
     "a": [
      "Elisangela Harrington",
      "Patrick Ryan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Catherine Stewart",
      "Kevin Wysoczynski"
     ],
     "a": [
      "Kelly Arvidson",
      "Ross Switkes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Joey Angelson",
      "Katalina Wang"
     ],
     "a": [
      "Melissa Dardani",
      "Chanda Mccoy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Eva Danieli",
      "Catherine Stewart"
     ],
     "a": [
      "Kelly Arvidson",
      "Elisangela Harrington"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Matt Schall",
      "Sebastian Ferrer"
     ],
     "a": [
      "Robbie Oddy",
      "Ross Switkes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kevin Wysoczynski",
      "Andrew Bernard"
     ],
     "a": [
      "Thomas Connolly",
      "Patrick Ryan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Katalina Wang",
      "Andrew Bernard"
     ],
     "a": [
      "Melissa Dardani",
      "Patrick Ryan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Catherine Stewart",
      "Matt Schall"
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
     "as": 9,
     "h": [
      "Joey Angelson",
      "Sebastian Ferrer"
     ],
     "a": [
      "Elisangela Harrington",
      "Thomas Connolly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Eva Danieli",
      "Tom Laiso"
     ],
     "a": [
      "Kelly Arvidson",
      "Ross Switkes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Joey Angelson",
      "Catherine Stewart"
     ],
     "a": [
      "Melissa Dardani",
      "Chanda Mccoy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Eva Danieli",
      "Katalina Wang"
     ],
     "a": [
      "Kelly Arvidson",
      "Elisangela Harrington"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Sebastian Ferrer",
      "Matt Schall"
     ],
     "a": [
      "Thomas Connolly",
      "Ross Switkes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kevin Wysoczynski",
      "Tom Laiso"
     ],
     "a": [
      "Robbie Oddy",
      "Patrick Ryan"
     ]
    }
   ],
   "subs": [
    "Katalina Wang",
    "Chanda Mccoy"
   ]
  },
  {
   "result": "home",
   "week": 3,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Jersey Pickleball Club",
   "time": "2026-09-09T19:00:00",
   "complete": true,
   "homePoints": 663,
   "awayPoints": 562,
   "homeGW": 25,
   "awayGW": 7,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Paula Ro",
      "Hruday Vemparala"
     ],
     "a": [
      "Joey Angelson",
      "Matt Schall"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Meghan Mediratta",
      "Chad Durkin"
     ],
     "a": [
      "Adrienne Butrymowicz",
      "Tom Laiso"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jenna Irwin",
      "Keith Shedlock"
     ],
     "a": [
      "Tin Wai Kwan",
      "Zach Hizer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Zoe Ousouljoglou",
      "Chris Long"
     ],
     "a": [
      "Catherine Stewart",
      "Sebastian Ferrer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Zoe Ousouljoglou",
      "Meghan Mediratta"
     ],
     "a": [
      "Tin Wai Kwan",
      "Joey Angelson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Paula Ro",
      "Anisha Malhotra"
     ],
     "a": [
      "Catherine Stewart",
      "Adrienne Butrymowicz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Chris Long",
      "Chad Durkin"
     ],
     "a": [
      "Sebastian Ferrer",
      "Matt Schall"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Hruday Vemparala",
      "Sidd Pathare"
     ],
     "a": [
      "Zach Hizer",
      "Tom Laiso"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Jenna Irwin",
      "Chad Durkin"
     ],
     "a": [
      "Joey Angelson",
      "Tom Laiso"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Meghan Mediratta",
      "Hruday Vemparala"
     ],
     "a": [
      "Adrienne Butrymowicz",
      "Sebastian Ferrer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Anisha Malhotra",
      "Sidd Pathare"
     ],
     "a": [
      "Tin Wai Kwan",
      "Matt Schall"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Zoe Ousouljoglou",
      "Keith Shedlock"
     ],
     "a": [
      "Catherine Stewart",
      "Zach Hizer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Paula Ro",
      "Jenna Irwin"
     ],
     "a": [
      "Tin Wai Kwan",
      "Adrienne Butrymowicz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Meghan Mediratta",
      "Zoe Ousouljoglou"
     ],
     "a": [
      "Catherine Stewart",
      "Joey Angelson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Chris Long",
      "Chad Durkin"
     ],
     "a": [
      "Sebastian Ferrer",
      "Zach Hizer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Hruday Vemparala",
      "Keith Shedlock"
     ],
     "a": [
      "Matt Schall",
      "Tom Laiso"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Zoe Ousouljoglou",
      "Sidd Pathare"
     ],
     "a": [
      "Tin Wai Kwan",
      "Zach Hizer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Anisha Malhotra",
      "Keith Shedlock"
     ],
     "a": [
      "Joey Angelson",
      "Tom Laiso"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jenna Irwin",
      "Chris Long"
     ],
     "a": [
      "Catherine Stewart",
      "Matt Schall"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Paula Ro",
      "Hruday Vemparala"
     ],
     "a": [
      "Adrienne Butrymowicz",
      "Sebastian Ferrer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Paula Ro",
      "Meghan Mediratta"
     ],
     "a": [
      "Tin Wai Kwan",
      "Catherine Stewart"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Anisha Malhotra",
      "Jenna Irwin"
     ],
     "a": [
      "Joey Angelson",
      "Adrienne Butrymowicz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Chad Durkin",
      "Keith Shedlock"
     ],
     "a": [
      "Matt Schall",
      "Zach Hizer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Chris Long",
      "Sidd Pathare"
     ],
     "a": [
      "Sebastian Ferrer",
      "Tom Laiso"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Anisha Malhotra",
      "Chad Durkin"
     ],
     "a": [
      "Adrienne Butrymowicz",
      "Tom Laiso"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Zoe Ousouljoglou",
      "Hruday Vemparala"
     ],
     "a": [
      "Joey Angelson",
      "Sebastian Ferrer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jenna Irwin",
      "Sidd Pathare"
     ],
     "a": [
      "Catherine Stewart",
      "Zach Hizer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Meghan Mediratta",
      "Chris Long"
     ],
     "a": [
      "Tin Wai Kwan",
      "Matt Schall"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Paula Ro",
      "Anisha Malhotra"
     ],
     "a": [
      "Tin Wai Kwan",
      "Catherine Stewart"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Meghan Mediratta",
      "Jenna Irwin"
     ],
     "a": [
      "Joey Angelson",
      "Adrienne Butrymowicz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Chad Durkin",
      "Hruday Vemparala"
     ],
     "a": [
      "Zach Hizer",
      "Sebastian Ferrer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Keith Shedlock",
      "Sidd Pathare"
     ],
     "a": [
      "Matt Schall",
      "Tom Laiso"
     ]
    }
   ],
   "subs": [
    "Tin Wai Kwan"
   ]
  },
  {
   "result": "away",
   "week": 3,
   "home": "Monroe",
   "away": "Pickle House",
   "time": "2026-09-09T19:00:00",
   "complete": true,
   "homePoints": 616,
   "awayPoints": 668,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Angela Luo",
      "Maanav Shah"
     ],
     "a": [
      "Kerrin Maurer",
      "Nick Dehmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Richa Shah",
      "Eugene Zaslavsky"
     ],
     "a": [
      "Emily Babinsky",
      "Dipen Bhatt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Sophia Kaufmann",
      "Anthony Ursino"
     ],
     "a": [
      "Yoyo Shen",
      "Michael Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Ruhi Shah",
      "Shreyas Pani"
     ],
     "a": [
      "Taylor Hartman",
      "Zach Hollmann"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ruhi Shah",
      "Richa Shah"
     ],
     "a": [
      "Taylor Hartman",
      "Lissa Eagles"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Angela Luo",
      "Morgan Fishman"
     ],
     "a": [
      "Kerrin Maurer",
      "Emily Babinsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Shreyas Pani",
      "Maanav Shah"
     ],
     "a": [
      "Nick Dehmer",
      "Michael Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Dilan Shah",
      "Anthony Ursino"
     ],
     "a": [
      "Mickey Cook",
      "Zach Hollmann"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Ruhi Shah",
      "Maanav Shah"
     ],
     "a": [
      "Taylor Hartman",
      "Nick Dehmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sophia Kaufmann",
      "Eugene Zaslavsky"
     ],
     "a": [
      "Lissa Eagles",
      "Mickey Cook"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Morgan Fishman",
      "Anthony Ursino"
     ],
     "a": [
      "Yoyo Shen",
      "Michael Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Richa Shah",
      "Dilan Shah"
     ],
     "a": [
      "Kerrin Maurer",
      "Zach Hollmann"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Ruhi Shah",
      "Morgan Fishman"
     ],
     "a": [
      "Taylor Hartman",
      "Yoyo Shen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Sophia Kaufmann",
      "Angela Luo"
     ],
     "a": [
      "Kerrin Maurer",
      "Lissa Eagles"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Maanav Shah",
      "Dilan Shah"
     ],
     "a": [
      "Nick Dehmer",
      "Zach Hollmann"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Shreyas Pani",
      "Eugene Zaslavsky"
     ],
     "a": [
      "Michael Li",
      "Mickey Cook"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Angela Luo",
      "Eugene Zaslavsky"
     ],
     "a": [
      "Lissa Eagles",
      "Dipen Bhatt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Sophia Kaufmann",
      "Anthony Ursino"
     ],
     "a": [
      "Kerrin Maurer",
      "Mickey Cook"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Richa Shah",
      "Shreyas Pani"
     ],
     "a": [
      "Yoyo Shen",
      "Zach Hollmann"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ruhi Shah",
      "Dilan Shah"
     ],
     "a": [
      "Emily Babinsky",
      "Nick Dehmer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Ruhi Shah",
      "Sophia Kaufmann"
     ],
     "a": [
      "Kerrin Maurer",
      "Taylor Hartman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Richa Shah",
      "Morgan Fishman"
     ],
     "a": [
      "Emily Babinsky",
      "Lissa Eagles"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Dilan Shah",
      "Eugene Zaslavsky"
     ],
     "a": [
      "Dipen Bhatt",
      "Mickey Cook"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Maanav Shah",
      "Shreyas Pani"
     ],
     "a": [
      "Michael Li",
      "Zach Hollmann"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Richa Shah",
      "Shreyas Pani"
     ],
     "a": [
      "Taylor Hartman",
      "Michael Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Angela Luo",
      "Eugene Zaslavsky"
     ],
     "a": [
      "Yoyo Shen",
      "Zach Hollmann"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Morgan Fishman",
      "Anthony Ursino"
     ],
     "a": [
      "Kerrin Maurer",
      "Dipen Bhatt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ruhi Shah",
      "Maanav Shah"
     ],
     "a": [
      "Emily Babinsky",
      "Nick Dehmer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Ruhi Shah",
      "Morgan Fishman"
     ],
     "a": [
      "Taylor Hartman",
      "Yoyo Shen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Sophia Kaufmann",
      "Angela Luo"
     ],
     "a": [
      "Emily Babinsky",
      "Lissa Eagles"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Dilan Shah",
      "Maanav Shah"
     ],
     "a": [
      "Nick Dehmer",
      "Zach Hollmann"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Shreyas Pani",
      "Anthony Ursino"
     ],
     "a": [
      "Michael Li",
      "Dipen Bhatt"
     ]
    }
   ],
   "subs": [
    "Eugene Zaslavsky"
   ]
  },
  {
   "result": "away",
   "week": 3,
   "home": "Dill Dinkers Hatboro Aces",
   "away": "Dill Dinkers Hatboro The Factory",
   "time": "2026-09-09T19:30:00",
   "complete": true,
   "homePoints": 486,
   "awayPoints": 653,
   "homeGW": 5,
   "awayGW": 27,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Claudya Elefante",
      "Adam Beck"
     ],
     "a": [
      "Marina Cozac",
      "Kenoa Tio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Erika Richards",
      "William Lee"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Sarah Ross",
      "Anushk Gupta"
     ],
     "a": [
      "Cristi Landrigan",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Alyssa Tartaglia",
      "Ryan Rosen"
     ],
     "a": [
      "Rayna Baizman",
      "Varun Prakash"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Alyssa Tartaglia",
      "Julia Plein"
     ],
     "a": [
      "Marina Cozac",
      "Cristi Landrigan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Sarah Ross",
      "Claudya Elefante"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Rayna Baizman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Robert Schimony",
      "Adam Beck"
     ],
     "a": [
      "Dylan Ashbach",
      "Joel Phillips"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Anushk Gupta",
      "Ryan Rosen"
     ],
     "a": [
      "Varun Prakash",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Alyssa Tartaglia",
      "William Lee"
     ],
     "a": [
      "Marina Cozac",
      "Kenoa Tio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Julia Plein",
      "Robert Schimony"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sarah Ross",
      "Anushk Gupta"
     ],
     "a": [
      "Rayna Baizman",
      "Varun Prakash"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Claudya Elefante",
      "Adam Beck"
     ],
     "a": [
      "Nahla Bernhardt",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Erika Richards",
      "Alyssa Tartaglia"
     ],
     "a": [
      "Marina Cozac",
      "Kaylyn Swankoski"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sarah Ross",
      "Claudya Elefante"
     ],
     "a": [
      "Cristi Landrigan",
      "Nahla Bernhardt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ryan Rosen",
      "Robert Schimony"
     ],
     "a": [
      "Dylan Ashbach",
      "Joel Phillips"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Anushk Gupta",
      "William Lee"
     ],
     "a": [
      "Kenoa Tio",
      "Varun Prakash"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Claudya Elefante",
      "Ryan Rosen"
     ],
     "a": [
      "Marina Cozac",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Alyssa Tartaglia",
      "Robert Schimony"
     ],
     "a": [
      "Cristi Landrigan",
      "Kenoa Tio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Julia Plein",
      "Adam Beck"
     ],
     "a": [
      "Nahla Bernhardt",
      "Joel Phillips"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Erika Richards",
      "William Lee"
     ],
     "a": [
      "Rayna Baizman",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Sarah Ross",
      "Alyssa Tartaglia"
     ],
     "a": [
      "Marina Cozac",
      "Rayna Baizman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Erika Richards",
      "Julia Plein"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Nahla Bernhardt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Adam Beck",
      "Robert Schimony"
     ],
     "a": [
      "Kenoa Tio",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Anushk Gupta",
      "Ryan Rosen"
     ],
     "a": [
      "Varun Prakash",
      "Joel Phillips"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Erika Richards",
      "Adam Beck"
     ],
     "a": [
      "Marina Cozac",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Alyssa Tartaglia",
      "Ryan Rosen"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Claudya Elefante",
      "William Lee"
     ],
     "a": [
      "Cristi Landrigan",
      "Varun Prakash"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Julia Plein",
      "Anushk Gupta"
     ],
     "a": [
      "Nahla Bernhardt",
      "Kenoa Tio"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Claudya Elefante",
      "Erika Richards"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Rayna Baizman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Sarah Ross",
      "Julia Plein"
     ],
     "a": [
      "Cristi Landrigan",
      "Nahla Bernhardt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ryan Rosen",
      "William Lee"
     ],
     "a": [
      "Dylan Ashbach",
      "Varun Prakash"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Anushk Gupta",
      "Robert Schimony"
     ],
     "a": [
      "Jonah Fliegelman",
      "Joel Phillips"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 3,
   "home": "Bounce Philly",
   "away": "Bounce Malvern",
   "time": "2026-09-09T19:30:00",
   "complete": true,
   "homePoints": 605,
   "awayPoints": 647,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Julia Sternberg",
      "Bruno Casino"
     ],
     "a": [
      "Yuki Kim",
      "Nick Meale"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Charlotte Healey",
      "Alex Boory"
     ],
     "a": [
      "Harriet Levin",
      "Lou Frignito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Elysia Price",
      "Zachary Lessner"
     ],
     "a": [
      "Teresa Wang",
      "Chris Tabeling"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Alex Abad",
      "Jordan Denish"
     ],
     "a": [
      "Tess Fisher",
      "Zyril Carilo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Alex Abad",
      "Charlotte Healey"
     ],
     "a": [
      "Yuki Kim",
      "Teresa Wang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kathleen Dougherty",
      "Elysia Price"
     ],
     "a": [
      "Harriet Levin",
      "Megan Harvey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Mark Kilimnik",
      "Jordan Denish"
     ],
     "a": [
      "Lou Frignito",
      "Zyril Carilo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Bruno Casino",
      "Zachary Lessner"
     ],
     "a": [
      "Nick Meale",
      "Chris Tabeling"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Alex Abad",
      "Alexander Tong"
     ],
     "a": [
      "Yuki Kim",
      "Nick Meale"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Julia Sternberg",
      "Bruno Casino"
     ],
     "a": [
      "Teresa Wang",
      "Chris Tabeling"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Elysia Price",
      "Mark Kilimnik"
     ],
     "a": [
      "Tess Fisher",
      "Lou Frignito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Charlotte Healey",
      "Alex Boory"
     ],
     "a": [
      "Harriet Levin",
      "Zyril Carilo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Alex Abad",
      "Elysia Price"
     ],
     "a": [
      "Teresa Wang",
      "Tess Fisher"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kathleen Dougherty",
      "Charlotte Healey"
     ],
     "a": [
      "Harriet Levin",
      "Megan Harvey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Alex Boory",
      "Bruno Casino"
     ],
     "a": [
      "Lou Frignito",
      "Zyril Carilo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Alexander Tong",
      "Jordan Denish"
     ],
     "a": [
      "Nick Meale",
      "Chris Tabeling"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kathleen Dougherty",
      "Alexander Tong"
     ],
     "a": [
      "Teresa Wang",
      "Lou Frignito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Charlotte Healey",
      "Zachary Lessner"
     ],
     "a": [
      "Megan Harvey",
      "Nick Meale"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Alex Abad",
      "Alex Boory"
     ],
     "a": [
      "Yuki Kim",
      "Chris Tabeling"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Julia Sternberg",
      "Jordan Denish"
     ],
     "a": [
      "Tess Fisher",
      "Zyril Carilo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Alex Abad",
      "Kathleen Dougherty"
     ],
     "a": [
      "Yuki Kim",
      "Teresa Wang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Elysia Price",
      "Julia Sternberg"
     ],
     "a": [
      "Tess Fisher",
      "Megan Harvey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Alexander Tong",
      "Mark Kilimnik"
     ],
     "a": [
      "Lou Frignito",
      "Nick Meale"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 29,
     "as": 27,
     "h": [
      "Jordan Denish",
      "Zachary Lessner"
     ],
     "a": [
      "Chris Tabeling",
      "Zyril Carilo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Kathleen Dougherty",
      "Zachary Lessner"
     ],
     "a": [
      "Yuki Kim",
      "Lou Frignito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Charlotte Healey",
      "Alexander Tong"
     ],
     "a": [
      "Teresa Wang",
      "Nick Meale"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Julia Sternberg",
      "Mark Kilimnik"
     ],
     "a": [
      "Harriet Levin",
      "Chris Tabeling"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Elysia Price",
      "Alex Boory"
     ],
     "a": [
      "Megan Harvey",
      "Zyril Carilo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Alex Abad",
      "Kathleen Dougherty"
     ],
     "a": [
      "Yuki Kim",
      "Harriet Levin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Elysia Price",
      "Julia Sternberg"
     ],
     "a": [
      "Megan Harvey",
      "Tess Fisher"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Mark Kilimnik",
      "Jordan Denish"
     ],
     "a": [
      "Lou Frignito",
      "Nick Meale"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Zachary Lessner",
      "Alexander Tong"
     ],
     "a": [
      "Chris Tabeling",
      "Zyril Carilo"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 3,
   "home": "Home Court",
   "away": "Flemington",
   "time": "2026-09-09T19:30:00",
   "complete": true,
   "homePoints": 618,
   "awayPoints": 608,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kara Infante",
      "Nathan Malhotra"
     ],
     "a": [
      "Melissa Dardani",
      "Thomas Connolly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Raneeta Sawhney-Rigby",
      "Aidan Jackson"
     ],
     "a": [
      "Susan Ackley",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Aurora Lewis",
      "Ken Velarde"
     ],
     "a": [
      "Elisangela Harrington",
      "Robbie Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jen Vorel",
      "Austin Williams"
     ],
     "a": [
      "Kelly Arvidson",
      "Patrick Ryan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Kara Infante",
      "Aurora Lewis"
     ],
     "a": [
      "Melissa Dardani",
      "Susan Ackley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lynda Tomaru",
      "Jen Vorel"
     ],
     "a": [
      "Kelly Arvidson",
      "Elisangela Harrington"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Austin Williams",
      "Ken Velarde"
     ],
     "a": [
      "Robbie Oddy",
      "Thomas Connolly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Aidan Jackson",
      "Nathan Malhotra"
     ],
     "a": [
      "Ross Switkes",
      "Patrick Ryan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Ariana Rizvani",
      "Aidan Jackson"
     ],
     "a": [
      "Melissa Dardani",
      "Robbie Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kara Infante",
      "Austin Williams"
     ],
     "a": [
      "Elisangela Harrington",
      "Thomas Connolly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Raneeta Sawhney-Rigby",
      "Hany Ibrahim"
     ],
     "a": [
      "Susan Ackley",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jen Vorel",
      "Ken Velarde"
     ],
     "a": [
      "Kelly Arvidson",
      "Patrick Ryan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Ariana Rizvani",
      "Raneeta Sawhney-Rigby"
     ],
     "a": [
      "Melissa Dardani",
      "Susan Ackley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Aurora Lewis",
      "Jen Vorel"
     ],
     "a": [
      "Elisangela Harrington",
      "Kelly Arvidson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Austin Williams",
      "Ken Velarde"
     ],
     "a": [
      "Robbie Oddy",
      "Thomas Connolly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Aidan Jackson",
      "Hany Ibrahim"
     ],
     "a": [
      "Patrick Ryan",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Lynda Tomaru",
      "Hany Ibrahim"
     ],
     "a": [
      "Melissa Dardani",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Aurora Lewis",
      "Nathan Malhotra"
     ],
     "a": [
      "Elisangela Harrington",
      "Thomas Connolly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Kara Infante",
      "Austin Williams"
     ],
     "a": [
      "Susan Ackley",
      "Patrick Ryan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ariana Rizvani",
      "Aidan Jackson"
     ],
     "a": [
      "Kelly Arvidson",
      "Robbie Oddy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Ariana Rizvani",
      "Kara Infante"
     ],
     "a": [
      "Elisangela Harrington",
      "Susan Ackley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Lynda Tomaru",
      "Raneeta Sawhney-Rigby"
     ],
     "a": [
      "Melissa Dardani",
      "Kelly Arvidson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Austin Williams",
      "Nathan Malhotra"
     ],
     "a": [
      "Robbie Oddy",
      "Patrick Ryan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Ken Velarde",
      "Aidan Jackson"
     ],
     "a": [
      "Ross Switkes",
      "Thomas Connolly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jen Vorel",
      "Austin Williams"
     ],
     "a": [
      "Melissa Dardani",
      "Thomas Connolly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Lynda Tomaru",
      "Hany Ibrahim"
     ],
     "a": [
      "Elisangela Harrington",
      "Robbie Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kara Infante",
      "Nathan Malhotra"
     ],
     "a": [
      "Kelly Arvidson",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Aurora Lewis",
      "Ken Velarde"
     ],
     "a": [
      "Susan Ackley",
      "Patrick Ryan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Aurora Lewis",
      "Raneeta Sawhney-Rigby"
     ],
     "a": [
      "Melissa Dardani",
      "Kelly Arvidson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Ariana Rizvani",
      "Kara Infante"
     ],
     "a": [
      "Elisangela Harrington",
      "Susan Ackley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Aidan Jackson",
      "Ken Velarde"
     ],
     "a": [
      "Ross Switkes",
      "Robbie Oddy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Austin Williams",
      "Nathan Malhotra"
     ],
     "a": [
      "Patrick Ryan",
      "Thomas Connolly"
     ]
    }
   ],
   "subs": [
    "Hany Ibrahim",
    "Nathan Malhotra"
   ]
  },
  {
   "result": "away",
   "week": 3,
   "home": "Jersey Devil",
   "away": "ACE Moorestown",
   "time": "2026-09-09T19:30:00",
   "complete": true,
   "homePoints": 630,
   "awayPoints": 656,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Arianna Haresign",
      "Tyler Arsenault"
     ],
     "a": [
      "Brittany Hall",
      "Manny Lai"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Michelle Quach",
      "Caleb Perry-Abner"
     ],
     "a": [
      "Anita Buggins",
      "Damien Stahl"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Danielle Bernero",
      "Zach Bowe"
     ],
     "a": [
      "Jennifer Sanchez",
      "Jack Blumberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Michaela Pierznik",
      "Matthew Matro"
     ],
     "a": [
      "Krysti Maronski-Neufeldt",
      "Nathan Law"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Rachel Berger",
      "Danielle Bernero"
     ],
     "a": [
      "Krysti Maronski-Neufeldt",
      "Annemarie Mccartney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Arianna Haresign",
      "Michelle Quach"
     ],
     "a": [
      "Anita Buggins",
      "Jennifer Sanchez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Matthew Matro",
      "Zach Bowe"
     ],
     "a": [
      "Manny Lai",
      "Nathan Law"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ryan Furman",
      "Tyler Arsenault"
     ],
     "a": [
      "Jack Blumberg",
      "Damien Stahl"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Michaela Pierznik",
      "Ryan Furman"
     ],
     "a": [
      "Brittany Hall",
      "Damien Stahl"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Michelle Quach",
      "Matthew Matro"
     ],
     "a": [
      "Annemarie Mccartney",
      "Manny Lai"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Arianna Haresign",
      "Tyler Arsenault"
     ],
     "a": [
      "Anita Buggins",
      "Nathan Law"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Rachel Berger",
      "Caleb Perry-Abner"
     ],
     "a": [
      "Krysti Maronski-Neufeldt",
      "Jack Blumberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Michelle Quach",
      "Arianna Haresign"
     ],
     "a": [
      "Annemarie Mccartney",
      "Brittany Hall"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Rachel Berger",
      "Danielle Bernero"
     ],
     "a": [
      "Jennifer Sanchez",
      "Krysti Maronski-Neufeldt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Zach Bowe",
      "Matthew Matro"
     ],
     "a": [
      "Damien Stahl",
      "Nathan Law"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Caleb Perry-Abner",
      "Tyler Arsenault"
     ],
     "a": [
      "Manny Lai",
      "Jack Blumberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Michaela Pierznik",
      "Ryan Furman"
     ],
     "a": [
      "Krysti Maronski-Neufeldt",
      "Damien Stahl"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Danielle Bernero",
      "Matthew Matro"
     ],
     "a": [
      "Annemarie Mccartney",
      "Nathan Law"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Arianna Haresign",
      "Zach Bowe"
     ],
     "a": [
      "Anita Buggins",
      "Manny Lai"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Michelle Quach",
      "Tyler Arsenault"
     ],
     "a": [
      "Brittany Hall",
      "Jack Blumberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Michaela Pierznik",
      "Rachel Berger"
     ],
     "a": [
      "Jennifer Sanchez",
      "Brittany Hall"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Danielle Bernero",
      "Michelle Quach"
     ],
     "a": [
      "Anita Buggins",
      "Annemarie Mccartney"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Zach Bowe",
      "Tyler Arsenault"
     ],
     "a": [
      "Manny Lai",
      "Jack Blumberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ryan Furman",
      "Caleb Perry-Abner"
     ],
     "a": [
      "Nathan Law",
      "Damien Stahl"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Rachel Berger",
      "Ryan Furman"
     ],
     "a": [
      "Annemarie Mccartney",
      "Jack Blumberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Arianna Haresign",
      "Matthew Matro"
     ],
     "a": [
      "Anita Buggins",
      "Nathan Law"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Michelle Quach",
      "Caleb Perry-Abner"
     ],
     "a": [
      "Brittany Hall",
      "Damien Stahl"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Michaela Pierznik",
      "Zach Bowe"
     ],
     "a": [
      "Krysti Maronski-Neufeldt",
      "Manny Lai"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Michaela Pierznik",
      "Rachel Berger"
     ],
     "a": [
      "Jennifer Sanchez",
      "Annemarie Mccartney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Danielle Bernero",
      "Arianna Haresign"
     ],
     "a": [
      "Anita Buggins",
      "Krysti Maronski-Neufeldt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Tyler Arsenault",
      "Matthew Matro"
     ],
     "a": [
      "Manny Lai",
      "Nathan Law"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Caleb Perry-Abner",
      "Ryan Furman"
     ],
     "a": [
      "Damien Stahl",
      "Jack Blumberg"
     ]
    }
   ],
   "subs": [
    "Ryan Furman"
   ]
  },
  {
   "result": "home",
   "week": 4,
   "home": "Monroe",
   "away": "Flemington",
   "time": "2026-09-16T19:00:00",
   "complete": true,
   "homePoints": 618,
   "awayPoints": 597,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ruhi Shah",
      "Ali Husain"
     ],
     "a": [
      "Suzi Battison",
      "Robbie Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Richa Shah",
      "Dilan Shah"
     ],
     "a": [
      "Melissa Dardani",
      "Thomas Connolly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Amanda Ksiezopolski",
      "Shreyas Pani"
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
     "as": 19,
     "h": [
      "Amalia Ditrapani",
      "Maanav Shah"
     ],
     "a": [
      "Kelly Arvidson",
      "Patrick Ryan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ruhi Shah",
      "Sara Synn"
     ],
     "a": [
      "Melissa Dardani",
      "Suzi Battison"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Amalia Ditrapani",
      "Richa Shah"
     ],
     "a": [
      "Kelly Arvidson",
      "Aimee Castellano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Shreyas Pani",
      "Anthony Ursino"
     ],
     "a": [
      "Robbie Oddy",
      "Thomas Connolly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Maanav Shah",
      "Dilan Shah"
     ],
     "a": [
      "Ross Switkes",
      "Patrick Ryan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Richa Shah",
      "Shreyas Pani"
     ],
     "a": [
      "Suzi Battison",
      "Thomas Connolly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Sara Synn",
      "Maanav Shah"
     ],
     "a": [
      "Melissa Dardani",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Ruhi Shah",
      "Anthony Ursino"
     ],
     "a": [
      "Kelly Arvidson",
      "Patrick Ryan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Amanda Ksiezopolski",
      "Ali Husain"
     ],
     "a": [
      "Christine Ferraez",
      "Robbie Oddy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ruhi Shah",
      "Sara Synn"
     ],
     "a": [
      "Suzi Battison",
      "Melissa Dardani"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Amalia Ditrapani",
      "Amanda Ksiezopolski"
     ],
     "a": [
      "Christine Ferraez",
      "Aimee Castellano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ali Husain",
      "Maanav Shah"
     ],
     "a": [
      "Ross Switkes",
      "Robbie Oddy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Dilan Shah",
      "Anthony Ursino"
     ],
     "a": [
      "Patrick Ryan",
      "Thomas Connolly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ruhi Shah",
      "Dilan Shah"
     ],
     "a": [
      "Suzi Battison",
      "Thomas Connolly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Amalia Ditrapani",
      "Ali Husain"
     ],
     "a": [
      "Melissa Dardani",
      "Robbie Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Richa Shah",
      "Shreyas Pani"
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
     "as": 18,
     "h": [
      "Amanda Ksiezopolski",
      "Anthony Ursino"
     ],
     "a": [
      "Aimee Castellano",
      "Patrick Ryan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Ruhi Shah",
      "Richa Shah"
     ],
     "a": [
      "Suzi Battison",
      "Aimee Castellano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Amanda Ksiezopolski",
      "Sara Synn"
     ],
     "a": [
      "Melissa Dardani",
      "Christine Ferraez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Dilan Shah",
      "Shreyas Pani"
     ],
     "a": [
      "Patrick Ryan",
      "Robbie Oddy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Maanav Shah",
      "Ali Husain"
     ],
     "a": [
      "Ross Switkes",
      "Thomas Connolly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Ruhi Shah",
      "Shreyas Pani"
     ],
     "a": [
      "Suzi Battison",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Richa Shah",
      "Maanav Shah"
     ],
     "a": [
      "Melissa Dardani",
      "Robbie Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sara Synn",
      "Ali Husain"
     ],
     "a": [
      "Kelly Arvidson",
      "Thomas Connolly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Amalia Ditrapani",
      "Anthony Ursino"
     ],
     "a": [
      "Aimee Castellano",
      "Patrick Ryan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Ruhi Shah",
      "Amalia Ditrapani"
     ],
     "a": [
      "Melissa Dardani",
      "Aimee Castellano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Amanda Ksiezopolski",
      "Sara Synn"
     ],
     "a": [
      "Christine Ferraez",
      "Kelly Arvidson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Shreyas Pani",
      "Anthony Ursino"
     ],
     "a": [
      "Robbie Oddy",
      "Thomas Connolly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Maanav Shah",
      "Dilan Shah"
     ],
     "a": [
      "Ross Switkes",
      "Patrick Ryan"
     ]
    }
   ],
   "subs": [
    "Christine Ferraez"
   ]
  },
  {
   "result": "home",
   "week": 4,
   "home": "Bounce Philly",
   "away": "Dill Dinkers Hatboro The Factory",
   "time": "2026-09-16T19:30:00",
   "complete": true,
   "homePoints": 626,
   "awayPoints": 614,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Rachel Alfano",
      "Jordan Denish"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Varun Prakash"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Alex Abad",
      "Bruno Casino"
     ],
     "a": [
      "Hannah Nussbaum",
      "Ethan Henigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Charlotte Healey",
      "Alexander Tong"
     ],
     "a": [
      "Rayna Baizman",
      "Kenoa Tio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Elysia Price",
      "Alex Boory"
     ],
     "a": [
      "Allison Tarnoff",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Elysia Price",
      "Rachel Alfano"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Hannah Nussbaum"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Alex Abad",
      "Charlotte Healey"
     ],
     "a": [
      "Rayna Baizman",
      "Allison Tarnoff"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jordan Denish",
      "William Hayes"
     ],
     "a": [
      "Kenoa Tio",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Zachary Lessner",
      "Alexander Tong"
     ],
     "a": [
      "Varun Prakash",
      "Andrew Wakefield"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Alex Abad",
      "Alexander Tong"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kathleen Dougherty",
      "Bruno Casino"
     ],
     "a": [
      "Hannah Nussbaum",
      "Andrew Wakefield"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Charlotte Healey",
      "Alex Boory"
     ],
     "a": [
      "Rayna Baizman",
      "Ethan Henigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Rachel Alfano",
      "William Hayes"
     ],
     "a": [
      "Allison Tarnoff",
      "Kenoa Tio"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Elysia Price",
      "Rachel Alfano"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Hannah Nussbaum"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Alex Abad",
      "Charlotte Healey"
     ],
     "a": [
      "Allison Tarnoff",
      "Rayna Baizman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Alexander Tong",
      "Jordan Denish"
     ],
     "a": [
      "Varun Prakash",
      "Andrew Wakefield"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Bruno Casino",
      "Zachary Lessner"
     ],
     "a": [
      "Kenoa Tio",
      "Ethan Henigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kathleen Dougherty",
      "Zachary Lessner"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Andrew Wakefield"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Elysia Price",
      "Bruno Casino"
     ],
     "a": [
      "Hannah Nussbaum",
      "Kenoa Tio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Charlotte Healey",
      "William Hayes"
     ],
     "a": [
      "Rayna Baizman",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Rachel Alfano",
      "Alex Boory"
     ],
     "a": [
      "Allison Tarnoff",
      "Ethan Henigan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Elysia Price",
      "Kathleen Dougherty"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Rayna Baizman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Rachel Alfano",
      "Alex Abad"
     ],
     "a": [
      "Hannah Nussbaum",
      "Allison Tarnoff"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jordan Denish",
      "Alexander Tong"
     ],
     "a": [
      "Varun Prakash",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "William Hayes",
      "Zachary Lessner"
     ],
     "a": [
      "Kenoa Tio",
      "Ethan Henigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kathleen Dougherty",
      "William Hayes"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Andrew Wakefield"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Charlotte Healey",
      "Bruno Casino"
     ],
     "a": [
      "Hannah Nussbaum",
      "Ethan Henigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Alex Abad",
      "Alex Boory"
     ],
     "a": [
      "Rayna Baizman",
      "Varun Prakash"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Elysia Price",
      "Zachary Lessner"
     ],
     "a": [
      "Allison Tarnoff",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Rachel Alfano",
      "Alex Abad"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Allison Tarnoff"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kathleen Dougherty",
      "Elysia Price"
     ],
     "a": [
      "Hannah Nussbaum",
      "Rayna Baizman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "William Hayes",
      "Jordan Denish"
     ],
     "a": [
      "Varun Prakash",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Bruno Casino",
      "Alex Boory"
     ],
     "a": [
      "Kenoa Tio",
      "Andrew Wakefield"
     ]
    }
   ],
   "subs": [
    "Ethan Henigan"
   ]
  },
  {
   "result": "away",
   "week": 4,
   "home": "Home Court",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-09-16T19:30:00",
   "complete": true,
   "homePoints": 577,
   "awayPoints": 657,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Raneeta Sawhney-Rigby",
      "Daniel Gallegos"
     ],
     "a": [
      "Gift Horn",
      "Hruday Vemparala"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kara Infante",
      "Nathan Malhotra"
     ],
     "a": [
      "Meghan Mediratta",
      "Keith Shedlock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Ashley Barros",
      "Austin Williams"
     ],
     "a": [
      "Johanna Wagner",
      "Chad Durkin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Aurora Lewis",
      "Ken Velarde"
     ],
     "a": [
      "Jenna Irwin",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Aurora Lewis",
      "Kara Infante"
     ],
     "a": [
      "Johanna Wagner",
      "Gift Horn"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Ariana Rizvani",
      "Raneeta Sawhney-Rigby"
     ],
     "a": [
      "Jenna Irwin",
      "Meghan Mediratta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Nathan Malhotra",
      "Austin Williams"
     ],
     "a": [
      "Hruday Vemparala",
      "Chad Durkin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ken Velarde",
      "Aidan Jackson"
     ],
     "a": [
      "Jason Makarevic",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Raneeta Sawhney-Rigby",
      "Daniel Gallegos"
     ],
     "a": [
      "Gift Horn",
      "Hruday Vemparala"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Ashley Barros",
      "Austin Williams"
     ],
     "a": [
      "Jenna Irwin",
      "Keith Shedlock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Aurora Lewis",
      "Nathan Malhotra"
     ],
     "a": [
      "Johanna Wagner",
      "Jason Makarevic"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Ariana Rizvani",
      "Aidan Jackson"
     ],
     "a": [
      "Meghan Mediratta",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Aurora Lewis",
      "Ashley Barros"
     ],
     "a": [
      "Johanna Wagner",
      "Gift Horn"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Kara Infante",
      "Ariana Rizvani"
     ],
     "a": [
      "Jenna Irwin",
      "Meghan Mediratta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Austin Williams",
      "Nathan Malhotra"
     ],
     "a": [
      "Chad Durkin",
      "Hruday Vemparala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Ken Velarde",
      "Daniel Gallegos"
     ],
     "a": [
      "Camrin Cronheim",
      "Keith Shedlock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 3,
     "as": 21,
     "h": [
      "Raneeta Sawhney-Rigby",
      "Aidan Jackson"
     ],
     "a": [
      "Johanna Wagner",
      "Chad Durkin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Ariana Rizvani",
      "Daniel Gallegos"
     ],
     "a": [
      "Gift Horn",
      "Keith Shedlock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Ashley Barros",
      "Nathan Malhotra"
     ],
     "a": [
      "Jenna Irwin",
      "Jason Makarevic"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Kara Infante",
      "Ken Velarde"
     ],
     "a": [
      "Meghan Mediratta",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Kara Infante",
      "Ashley Barros"
     ],
     "a": [
      "Jenna Irwin",
      "Johanna Wagner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Aurora Lewis",
      "Raneeta Sawhney-Rigby"
     ],
     "a": [
      "Meghan Mediratta",
      "Gift Horn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Aidan Jackson",
      "Daniel Gallegos"
     ],
     "a": [
      "Keith Shedlock",
      "Chad Durkin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Austin Williams",
      "Ken Velarde"
     ],
     "a": [
      "Hruday Vemparala",
      "Jason Makarevic"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Ariana Rizvani",
      "Aidan Jackson"
     ],
     "a": [
      "Johanna Wagner",
      "Jason Makarevic"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Kara Infante",
      "Austin Williams"
     ],
     "a": [
      "Gift Horn",
      "Chad Durkin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Aurora Lewis",
      "Ken Velarde"
     ],
     "a": [
      "Meghan Mediratta",
      "Hruday Vemparala"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ashley Barros",
      "Nathan Malhotra"
     ],
     "a": [
      "Jenna Irwin",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Ariana Rizvani",
      "Raneeta Sawhney-Rigby"
     ],
     "a": [
      "Jenna Irwin",
      "Gift Horn"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Aurora Lewis",
      "Kara Infante"
     ],
     "a": [
      "Johanna Wagner",
      "Meghan Mediratta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Aidan Jackson",
      "Daniel Gallegos"
     ],
     "a": [
      "Chad Durkin",
      "Keith Shedlock"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Austin Williams",
      "Ken Velarde"
     ],
     "a": [
      "Hruday Vemparala",
      "Jason Makarevic"
     ]
    }
   ],
   "subs": [
    "Ashley Barros",
    "Nathan Malhotra",
    "Gift Horn",
    "Johanna Wagner"
   ]
  },
  {
   "result": "home",
   "week": 4,
   "home": "Bounce Malvern",
   "away": "Jersey Devil",
   "time": "2026-09-16T19:30:00",
   "complete": true,
   "homePoints": 653,
   "awayPoints": 563,
   "homeGW": 22,
   "awayGW": 10,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Nam Barsh",
      "Shashank Kamdar"
     ],
     "a": [
      "Arianna Haresign",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 33,
     "as": 31,
     "h": [
      "Teresa Wang",
      "Chris Tabeling"
     ],
     "a": [
      "Maeve Mcgowan",
      "Zach Bowe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Harriet Levin",
      "Lou Frignito"
     ],
     "a": [
      "Rachel Berger",
      "Matthew Chen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Yuki Kim",
      "Nick Meale"
     ],
     "a": [
      "Danielle Bernero",
      "Caleb Perry-Abner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Harriet Levin",
      "Megan Harvey"
     ],
     "a": [
      "Arianna Haresign",
      "Rachel Berger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Teresa Wang",
      "Yuki Kim"
     ],
     "a": [
      "Danielle Bernero",
      "Lauren Mercado"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Lou Frignito",
      "Shashank Kamdar"
     ],
     "a": [
      "Zach Bowe",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Nick Meale",
      "Chris Tabeling"
     ],
     "a": [
      "Matthew Chen",
      "Johny Mario"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Nam Barsh",
      "Shashank Kamdar"
     ],
     "a": [
      "Arianna Haresign",
      "Zach Bowe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Harriet Levin",
      "Nick Meale"
     ],
     "a": [
      "Rachel Berger",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Yuki Kim",
      "Lou Frignito"
     ],
     "a": [
      "Lauren Mercado",
      "Caleb Perry-Abner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Teresa Wang",
      "Chris Tabeling"
     ],
     "a": [
      "Maeve Mcgowan",
      "Johny Mario"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Teresa Wang",
      "Yuki Kim"
     ],
     "a": [
      "Maeve Mcgowan",
      "Danielle Bernero"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Nam Barsh",
      "Megan Harvey"
     ],
     "a": [
      "Rachel Berger",
      "Lauren Mercado"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Lou Frignito",
      "Shashank Kamdar"
     ],
     "a": [
      "Tyler Arsenault",
      "Caleb Perry-Abner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Nick Meale",
      "Chris Tabeling"
     ],
     "a": [
      "Johny Mario",
      "Matthew Chen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Megan Harvey",
      "Shashank Kamdar"
     ],
     "a": [
      "Rachel Berger",
      "Zach Bowe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Harriet Levin",
      "Chris Tabeling"
     ],
     "a": [
      "Arianna Haresign",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Yuki Kim",
      "Lou Frignito"
     ],
     "a": [
      "Maeve Mcgowan",
      "Matthew Chen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Teresa Wang",
      "Nick Meale"
     ],
     "a": [
      "Danielle Bernero",
      "Caleb Perry-Abner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Yuki Kim",
      "Harriet Levin"
     ],
     "a": [
      "Lauren Mercado",
      "Danielle Bernero"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Nam Barsh",
      "Megan Harvey"
     ],
     "a": [
      "Arianna Haresign",
      "Maeve Mcgowan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Nick Meale",
      "Shashank Kamdar"
     ],
     "a": [
      "Tyler Arsenault",
      "Zach Bowe"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Lou Frignito",
      "Chris Tabeling"
     ],
     "a": [
      "Johny Mario",
      "Caleb Perry-Abner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Megan Harvey",
      "Shashank Kamdar"
     ],
     "a": [
      "Arianna Haresign",
      "Zach Bowe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Teresa Wang",
      "Nick Meale"
     ],
     "a": [
      "Lauren Mercado",
      "Caleb Perry-Abner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Yuki Kim",
      "Chris Tabeling"
     ],
     "a": [
      "Rachel Berger",
      "Johny Mario"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Nam Barsh",
      "Lou Frignito"
     ],
     "a": [
      "Maeve Mcgowan",
      "Matthew Chen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Harriet Levin",
      "Megan Harvey"
     ],
     "a": [
      "Danielle Bernero",
      "Arianna Haresign"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Teresa Wang",
      "Nam Barsh"
     ],
     "a": [
      "Rachel Berger",
      "Lauren Mercado"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lou Frignito",
      "Nick Meale"
     ],
     "a": [
      "Zach Bowe",
      "Matthew Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Chris Tabeling",
      "Shashank Kamdar"
     ],
     "a": [
      "Johny Mario",
      "Tyler Arsenault"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 4,
   "home": "Pickle House",
   "away": "Jersey Pickleball Club",
   "time": "2026-09-16T19:30:00",
   "complete": true,
   "homePoints": 643,
   "awayPoints": 542,
   "homeGW": 22,
   "awayGW": 10,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Yoyo Shen",
      "Dipen Bhatt"
     ],
     "a": [
      "Eva Danieli",
      "Robert Khalev"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Emily Babinsky",
      "Mickey Cook"
     ],
     "a": [
      "Sarah Nazario",
      "Matt Schall"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Taylor Hartman",
      "Zach Hollmann"
     ],
     "a": [
      "Joey Angelson",
      "Tom Laiso"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lissa Eagles",
      "Chris Damato"
     ],
     "a": [
      "Natasha De Carvalho",
      "Simon Rosenwasser"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Emily Babinsky",
      "Yoyo Shen"
     ],
     "a": [
      "Alice Napolitano",
      "Katalina Wang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Taylor Hartman",
      "Kerrin Maurer"
     ],
     "a": [
      "Natasha De Carvalho",
      "Joey Angelson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Zach Hollmann",
      "Chris Damato"
     ],
     "a": [
      "Matt Schall",
      "Kevin Wysoczynski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Mickey Cook",
      "Dipen Bhatt"
     ],
     "a": [
      "Robert Khalev",
      "Simon Rosenwasser"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Yoyo Shen",
      "Mickey Cook"
     ],
     "a": [
      "Natasha De Carvalho",
      "Kevin Wysoczynski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Kerrin Maurer",
      "Zach Hollmann"
     ],
     "a": [
      "Katalina Wang",
      "Tom Laiso"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Lissa Eagles",
      "Chris Damato"
     ],
     "a": [
      "Alice Napolitano",
      "Simon Rosenwasser"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Emily Babinsky",
      "Dipen Bhatt"
     ],
     "a": [
      "Eva Danieli",
      "Robert Khalev"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Yoyo Shen",
      "Lissa Eagles"
     ],
     "a": [
      "Sarah Nazario",
      "Katalina Wang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Taylor Hartman",
      "Kerrin Maurer"
     ],
     "a": [
      "Alice Napolitano",
      "Joey Angelson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Zach Hollmann",
      "Chris Damato"
     ],
     "a": [
      "Robert Khalev",
      "Matt Schall"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Dipen Bhatt",
      "Mickey Cook"
     ],
     "a": [
      "Tom Laiso",
      "Kevin Wysoczynski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Yoyo Shen",
      "Zach Hollmann"
     ],
     "a": [
      "Sarah Nazario",
      "Simon Rosenwasser"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Taylor Hartman",
      "Dipen Bhatt"
     ],
     "a": [
      "Eva Danieli",
      "Matt Schall"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Emily Babinsky",
      "Mickey Cook"
     ],
     "a": [
      "Natasha De Carvalho",
      "Kevin Wysoczynski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kerrin Maurer",
      "Chris Damato"
     ],
     "a": [
      "Joey Angelson",
      "Robert Khalev"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Taylor Hartman",
      "Emily Babinsky"
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
     "as": 16,
     "h": [
      "Kerrin Maurer",
      "Lissa Eagles"
     ],
     "a": [
      "Alice Napolitano",
      "Katalina Wang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Chris Damato",
      "Dipen Bhatt"
     ],
     "a": [
      "Matt Schall",
      "Kevin Wysoczynski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Zach Hollmann",
      "Mickey Cook"
     ],
     "a": [
      "Tom Laiso",
      "Simon Rosenwasser"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kerrin Maurer",
      "Zach Hollmann"
     ],
     "a": [
      "Joey Angelson",
      "Robert Khalev"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lissa Eagles",
      "Mickey Cook"
     ],
     "a": [
      "Katalina Wang",
      "Simon Rosenwasser"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Taylor Hartman",
      "Chris Damato"
     ],
     "a": [
      "Natasha De Carvalho",
      "Matt Schall"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Yoyo Shen",
      "Dipen Bhatt"
     ],
     "a": [
      "Alice Napolitano",
      "Tom Laiso"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lissa Eagles",
      "Kerrin Maurer"
     ],
     "a": [
      "Katalina Wang",
      "Joey Angelson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Taylor Hartman",
      "Emily Babinsky"
     ],
     "a": [
      "Sarah Nazario",
      "Eva Danieli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Zach Hollmann",
      "Mickey Cook"
     ],
     "a": [
      "Matt Schall",
      "Robert Khalev"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Chris Damato",
      "Dipen Bhatt"
     ],
     "a": [
      "Kevin Wysoczynski",
      "Tom Laiso"
     ]
    }
   ],
   "subs": [
    "Katalina Wang",
    "Natasha De Carvalho",
    "Sarah Nazario",
    "Alice Napolitano"
   ]
  },
  {
   "result": "home",
   "week": 4,
   "home": "ACE Moorestown",
   "away": "Dill Dinkers Hatboro Aces",
   "time": "2026-09-16T19:30:00",
   "complete": true,
   "homePoints": 663,
   "awayPoints": 499,
   "homeGW": 28,
   "awayGW": 4,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Krysti Maronski-Neufeldt",
      "Ben Mead"
     ],
     "a": [
      "Claudya Elefante",
      "Adam Beck"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Annemarie Mccartney",
      "Nathan Law"
     ],
     "a": [
      "Helen Liu",
      "William Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jennifer Sanchez",
      "Jack Blumberg"
     ],
     "a": [
      "Sarah Ross",
      "Anushk Gupta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Stacy Walkowitz",
      "Jase Volz"
     ],
     "a": [
      "Julia Plein",
      "Ryan Rosen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Jennifer Sanchez",
      "Stacy Walkowitz"
     ],
     "a": [
      "Julia Plein",
      "Helen Liu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Brittany Hall",
      "Krysti Maronski-Neufeldt"
     ],
     "a": [
      "Claudya Elefante",
      "Alyssa Tartaglia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ben Mead",
      "Jack Blumberg"
     ],
     "a": [
      "Adam Beck",
      "Will Delaney"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Nathan Law",
      "Manny Lai"
     ],
     "a": [
      "Anushk Gupta",
      "Ryan Rosen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Annemarie Mccartney",
      "Manny Lai"
     ],
     "a": [
      "Helen Liu",
      "William Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jennifer Sanchez",
      "Jase Volz"
     ],
     "a": [
      "Sarah Ross",
      "Ryan Rosen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Stacy Walkowitz",
      "Jack Blumberg"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Anushk Gupta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Brittany Hall",
      "Nathan Law"
     ],
     "a": [
      "Julia Plein",
      "Adam Beck"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Jennifer Sanchez",
      "Annemarie Mccartney"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Helen Liu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Krysti Maronski-Neufeldt",
      "Stacy Walkowitz"
     ],
     "a": [
      "Claudya Elefante",
      "Sarah Ross"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Ben Mead",
      "Nathan Law"
     ],
     "a": [
      "Anushk Gupta",
      "William Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Manny Lai",
      "Jase Volz"
     ],
     "a": [
      "Ryan Rosen",
      "Will Delaney"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Stacy Walkowitz",
      "Nathan Law"
     ],
     "a": [
      "Sarah Ross",
      "Anushk Gupta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jennifer Sanchez",
      "Manny Lai"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Ryan Rosen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Brittany Hall",
      "Ben Mead"
     ],
     "a": [
      "Claudya Elefante",
      "Adam Beck"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Krysti Maronski-Neufeldt",
      "Jack Blumberg"
     ],
     "a": [
      "Julia Plein",
      "William Lee"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Stacy Walkowitz",
      "Brittany Hall"
     ],
     "a": [
      "Sarah Ross",
      "Alyssa Tartaglia"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Krysti Maronski-Neufeldt",
      "Annemarie Mccartney"
     ],
     "a": [
      "Julia Plein",
      "Helen Liu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Manny Lai",
      "Jack Blumberg"
     ],
     "a": [
      "Adam Beck",
      "William Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ben Mead",
      "Jase Volz"
     ],
     "a": [
      "Ryan Rosen",
      "Anushk Gupta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Stacy Walkowitz",
      "Manny Lai"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Anushk Gupta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Krysti Maronski-Neufeldt",
      "Nathan Law"
     ],
     "a": [
      "Claudya Elefante",
      "Ryan Rosen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Brittany Hall",
      "Jack Blumberg"
     ],
     "a": [
      "Julia Plein",
      "William Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Annemarie Mccartney",
      "Jase Volz"
     ],
     "a": [
      "Helen Liu",
      "Adam Beck"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jennifer Sanchez",
      "Krysti Maronski-Neufeldt"
     ],
     "a": [
      "Claudya Elefante",
      "Helen Liu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Annemarie Mccartney",
      "Brittany Hall"
     ],
     "a": [
      "Sarah Ross",
      "Julia Plein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jack Blumberg",
      "Nathan Law"
     ],
     "a": [
      "Adam Beck",
      "William Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Manny Lai",
      "Jase Volz"
     ],
     "a": [
      "Anushk Gupta",
      "Ryan Rosen"
     ]
    }
   ],
   "subs": [
    "Jase Volz"
   ]
  },
  {
   "result": "draw",
   "week": 5,
   "home": "Flemington",
   "away": "Home Court",
   "time": "2026-09-23T19:00:00",
   "complete": true,
   "homePoints": 0,
   "awayPoints": 0,
   "homeGW": 25,
   "awayGW": 7,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kelly Arvidson",
      "Tim Dowd"
     ],
     "a": [
      "Ashley Barros",
      "Kevin Riordan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Susan Ackley",
      "Ross Switkes"
     ],
     "a": [
      "Sheila Siu",
      "Austin Williams"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Suzi Battison",
      "Patrick Ryan"
     ],
     "a": [
      "Ariana Rizvani",
      "Ken Velarde"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Melissa Dardani",
      "Thomas Connolly"
     ],
     "a": [
      "Aurora Lewis",
      "Noah Goding"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Melissa Dardani",
      "Kelly Arvidson"
     ],
     "a": [
      "Aurora Lewis",
      "Ashley Barros"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Suzi Battison",
      "Susan Ackley"
     ],
     "a": [
      "Ariana Rizvani",
      "Lynda Tomaru"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Patrick Ryan",
      "Ross Switkes"
     ],
     "a": [
      "Austin Williams",
      "Ken Velarde"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Thomas Connolly",
      "Tim Dowd"
     ],
     "a": [
      "Kevin Riordan",
      "Noah Goding"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Suzi Battison",
      "Ross Switkes"
     ],
     "a": [
      "Aurora Lewis",
      "Austin Williams"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kelly Arvidson",
      "Patrick Ryan"
     ],
     "a": [
      "Ariana Rizvani",
      "Noah Goding"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Susan Ackley",
      "Tim Dowd"
     ],
     "a": [
      "Ashley Barros",
      "Kevin Riordan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Melissa Dardani",
      "Thomas Connolly"
     ],
     "a": [
      "Sheila Siu",
      "Ken Velarde"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Suzi Battison",
      "Kelly Arvidson"
     ],
     "a": [
      "Aurora Lewis",
      "Ashley Barros"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Melissa Dardani",
      "Susan Ackley"
     ],
     "a": [
      "Ariana Rizvani",
      "Lynda Tomaru"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Ross Switkes",
      "Thomas Connolly"
     ],
     "a": [
      "Austin Williams",
      "Kevin Riordan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Patrick Ryan",
      "Tim Dowd"
     ],
     "a": [
      "Ken Velarde",
      "Noah Goding"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Suzi Battison",
      "Ross Switkes"
     ],
     "a": [
      "Ariana Rizvani",
      "Ken Velarde"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Susan Ackley",
      "Thomas Connolly"
     ],
     "a": [
      "Aurora Lewis",
      "Kevin Riordan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kelly Arvidson",
      "Tim Dowd"
     ],
     "a": [
      "Sheila Siu",
      "Noah Goding"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Melissa Dardani",
      "Patrick Ryan"
     ],
     "a": [
      "Ashley Barros",
      "Austin Williams"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Susan Ackley",
      "Kelly Arvidson"
     ],
     "a": [
      "Lynda Tomaru",
      "Ashley Barros"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Suzi Battison",
      "Melissa Dardani"
     ],
     "a": [
      "Ariana Rizvani",
      "Aurora Lewis"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Patrick Ryan",
      "Thomas Connolly"
     ],
     "a": [
      "Austin Williams",
      "Kevin Riordan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Ross Switkes",
      "Tim Dowd"
     ],
     "a": [
      "Ken Velarde",
      "Noah Goding"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kelly Arvidson",
      "Patrick Ryan"
     ],
     "a": [
      "Ariana Rizvani",
      "Noah Goding"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Suzi Battison",
      "Thomas Connolly"
     ],
     "a": [
      "Sheila Siu",
      "Ken Velarde"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Susan Ackley",
      "Ross Switkes"
     ],
     "a": [
      "Lynda Tomaru",
      "Austin Williams"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Melissa Dardani",
      "Tim Dowd"
     ],
     "a": [
      "Aurora Lewis",
      "Kevin Riordan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Melissa Dardani",
      "Suzi Battison"
     ],
     "a": [
      "Ariana Rizvani",
      "Aurora Lewis"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Kelly Arvidson",
      "Susan Ackley"
     ],
     "a": [
      "Lynda Tomaru",
      "Sheila Siu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Patrick Ryan",
      "Ross Switkes"
     ],
     "a": [
      "Austin Williams",
      "Ken Velarde"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Thomas Connolly",
      "Tim Dowd"
     ],
     "a": [
      "Noah Goding",
      "Kevin Riordan"
     ]
    }
   ],
   "subs": [
    "Ashley Barros",
    "Kevin Riordan"
   ]
  },
  {
   "result": "away",
   "week": 5,
   "home": "Jersey Pickleball Club",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-09-23T19:30:00",
   "complete": true,
   "provisional": true,
   "homePoints": 532,
   "awayPoints": 666,
   "homeGW": 6,
   "awayGW": 26,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Stephanie Moniz",
      "Matt Schall"
     ],
     "a": [
      "Zoe Ousouljoglou",
      "Elliott Albanese"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Joey Angelson",
      "Kevin Wysoczynski"
     ],
     "a": [
      "Gissel Escalante",
      "Jason Makarevic"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Catherine Stewart",
      "Zach Hizer"
     ],
     "a": [
      "Anisha Malhotra",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Eva Danieli",
      "Andrew Bernard"
     ],
     "a": [
      "Paula Ro",
      "Sidd Pathare"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Joey Angelson",
      "Catherine Stewart"
     ],
     "a": [
      "Gissel Escalante",
      "Paula Ro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Eva Danieli",
      "Stephanie Moniz"
     ],
     "a": [
      "Zoe Ousouljoglou",
      "Anisha Malhotra"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Matt Schall",
      "Zach Hizer"
     ],
     "a": [
      "Camrin Cronheim",
      "Jason Makarevic"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kevin Wysoczynski",
      "Andrew Bernard"
     ],
     "a": [
      "Elliott Albanese",
      "Sidd Pathare"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Stephanie Moniz",
      "Matt Schall"
     ],
     "a": [
      "Zoe Ousouljoglou",
      "Elliott Albanese"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Catherine Stewart",
      "Kevin Wysoczynski"
     ],
     "a": [
      "Gissel Escalante",
      "Jason Makarevic"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Joey Angelson",
      "Andrew Bernard"
     ],
     "a": [
      "Paula Ro",
      "Sidd Pathare"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Eva Danieli",
      "Zach Hizer"
     ],
     "a": [
      "Anisha Malhotra",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Catherine Stewart",
      "Joey Angelson"
     ],
     "a": [
      "Gissel Escalante",
      "Paula Ro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Eva Danieli",
      "Stephanie Moniz"
     ],
     "a": [
      "Zoe Ousouljoglou",
      "Anisha Malhotra"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Zach Hizer",
      "Matt Schall"
     ],
     "a": [
      "Camrin Cronheim",
      "Jason Makarevic"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kevin Wysoczynski",
      "Andrew Bernard"
     ],
     "a": [
      "Elliott Albanese",
      "Sidd Pathare"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Stephanie Moniz",
      "Kevin Wysoczynski"
     ],
     "a": [
      "Gissel Escalante",
      "Elliott Albanese"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Catherine Stewart",
      "Matt Schall"
     ],
     "a": [
      "Paula Ro",
      "Jason Makarevic"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Joey Angelson",
      "Andrew Bernard"
     ],
     "a": [
      "Anisha Malhotra",
      "Sidd Pathare"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Eva Danieli",
      "Zach Hizer"
     ],
     "a": [
      "Zoe Ousouljoglou",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Joey Angelson",
      "Stephanie Moniz"
     ],
     "a": [
      "Gissel Escalante",
      "Anisha Malhotra"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Catherine Stewart",
      "Eva Danieli"
     ],
     "a": [
      "Zoe Ousouljoglou",
      "Paula Ro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Zach Hizer",
      "Andrew Bernard"
     ],
     "a": [
      "Camrin Cronheim",
      "Sidd Pathare"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Matt Schall",
      "Kevin Wysoczynski"
     ],
     "a": [
      "Elliott Albanese",
      "Jason Makarevic"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Stephanie Moniz",
      "Andrew Bernard"
     ],
     "a": [
      "Gissel Escalante",
      "Sidd Pathare"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Eva Danieli",
      "Matt Schall"
     ],
     "a": [
      "Anisha Malhotra",
      "Elliott Albanese"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Catherine Stewart",
      "Zach Hizer"
     ],
     "a": [
      "Zoe Ousouljoglou",
      "Jason Makarevic"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Joey Angelson",
      "Kevin Wysoczynski"
     ],
     "a": [
      "Paula Ro",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Joey Angelson",
      "Stephanie Moniz"
     ],
     "a": [
      "Anisha Malhotra",
      "Gissel Escalante"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Catherine Stewart",
      "Eva Danieli"
     ],
     "a": [
      "Zoe Ousouljoglou",
      "Paula Ro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Zach Hizer",
      "Kevin Wysoczynski"
     ],
     "a": [
      "Jason Makarevic",
      "Elliott Albanese"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Matt Schall",
      "Andrew Bernard"
     ],
     "a": [
      "Camrin Cronheim",
      "Sidd Pathare"
     ]
    }
   ],
   "subs": [
    "Stephanie Moniz",
    "Elliott Albanese"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "Dill Dinkers Hatboro The Factory",
   "away": "Dill Dinkers Hatboro Aces",
   "time": "2026-09-23T19:30:00",
   "complete": true,
   "homePoints": 669,
   "awayPoints": 568,
   "homeGW": 26,
   "awayGW": 6,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Allison Tarnoff",
      "Kenoa Tio"
     ],
     "a": [
      "Claudya Elefante",
      "Ryan Rosen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Hannah Nussbaum",
      "Andrew Wakefield"
     ],
     "a": [
      "Sarah Ross",
      "William Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Cristi Landrigan",
      "Conor Landrigan"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Ethan Henigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Rayna Baizman",
      "Varun Prakash"
     ],
     "a": [
      "Lilie Sen",
      "Michael Velez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Cristi Landrigan",
      "Rayna Baizman"
     ],
     "a": [
      "Lilie Sen",
      "Erika Richards"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Hannah Nussbaum",
      "Kaylyn Swankoski"
     ],
     "a": [
      "Claudya Elefante",
      "Sarah Ross"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Steven Fernandez",
      "Kenoa Tio"
     ],
     "a": [
      "Ryan Rosen",
      "Ethan Henigan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Varun Prakash",
      "Conor Landrigan"
     ],
     "a": [
      "William Lee",
      "Gavin Malave"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Allison Tarnoff",
      "Steven Fernandez"
     ],
     "a": [
      "Sarah Ross",
      "Ryan Rosen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Cristi Landrigan",
      "Conor Landrigan"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Michael Velez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kaylyn Swankoski",
      "Andrew Wakefield"
     ],
     "a": [
      "Erika Richards",
      "William Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Hannah Nussbaum",
      "Kenoa Tio"
     ],
     "a": [
      "Claudya Elefante",
      "Ethan Henigan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Hannah Nussbaum",
      "Allison Tarnoff"
     ],
     "a": [
      "Claudya Elefante",
      "Erika Richards"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kaylyn Swankoski",
      "Rayna Baizman"
     ],
     "a": [
      "Lilie Sen",
      "Alyssa Tartaglia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Varun Prakash",
      "Andrew Wakefield"
     ],
     "a": [
      "Ryan Rosen",
      "Gavin Malave"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kenoa Tio",
      "Steven Fernandez"
     ],
     "a": [
      "William Lee",
      "Michael Velez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Hannah Nussbaum",
      "Andrew Wakefield"
     ],
     "a": [
      "Claudya Elefante",
      "Ethan Henigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Cristi Landrigan",
      "Varun Prakash"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Gavin Malave"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Rayna Baizman",
      "Conor Landrigan"
     ],
     "a": [
      "Sarah Ross",
      "Ryan Rosen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kaylyn Swankoski",
      "Steven Fernandez"
     ],
     "a": [
      "Lilie Sen",
      "William Lee"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Rayna Baizman",
      "Cristi Landrigan"
     ],
     "a": [
      "Sarah Ross",
      "Erika Richards"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Allison Tarnoff",
      "Kaylyn Swankoski"
     ],
     "a": [
      "Claudya Elefante",
      "Alyssa Tartaglia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Andrew Wakefield",
      "Varun Prakash"
     ],
     "a": [
      "Ethan Henigan",
      "Ryan Rosen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kenoa Tio",
      "Conor Landrigan"
     ],
     "a": [
      "Michael Velez",
      "Gavin Malave"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Cristi Landrigan",
      "Varun Prakash"
     ],
     "a": [
      "Erika Richards",
      "William Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Kaylyn Swankoski",
      "Kenoa Tio"
     ],
     "a": [
      "Sarah Ross",
      "Ethan Henigan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Allison Tarnoff",
      "Steven Fernandez"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Gavin Malave"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Rayna Baizman",
      "Conor Landrigan"
     ],
     "a": [
      "Lilie Sen",
      "Michael Velez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kaylyn Swankoski",
      "Rayna Baizman"
     ],
     "a": [
      "Sarah Ross",
      "Claudya Elefante"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Cristi Landrigan",
      "Allison Tarnoff"
     ],
     "a": [
      "Erika Richards",
      "Lilie Sen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kenoa Tio",
      "Conor Landrigan"
     ],
     "a": [
      "Ryan Rosen",
      "Michael Velez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Steven Fernandez",
      "Andrew Wakefield"
     ],
     "a": [
      "Ethan Henigan",
      "Gavin Malave"
     ]
    }
   ],
   "subs": [
    "Gavin Malave",
    "Lilie Sen",
    "Ethan Henigan",
    "Michael Velez"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "Bounce Malvern",
   "away": "Bounce Philly",
   "time": "2026-09-23T19:30:00",
   "complete": true,
   "homePoints": 646,
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
      "Harriet Levin",
      "Lou Frignito"
     ],
     "a": [
      "Rachel Alfano",
      "Justin Bautista"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Yuki Kim",
      "Nick Meale"
     ],
     "a": [
      "Elysia Price",
      "Zachary Lessner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sarah Kline",
      "Shashank Kamdar"
     ],
     "a": [
      "Alyssa Boyle",
      "Darren Johnson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Teresa Wang",
      "Chris Tabeling"
     ],
     "a": [
      "Julia Sternberg",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Teresa Wang",
      "Yuki Kim"
     ],
     "a": [
      "Rachel Alfano",
      "Alex Abad"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Megan Harvey",
      "Harriet Levin"
     ],
     "a": [
      "Alyssa Boyle",
      "Elysia Price"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lou Frignito",
      "Shashank Kamdar"
     ],
     "a": [
      "Mark Kilimnik",
      "Zachary Lessner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Nick Meale",
      "Chris Tabeling"
     ],
     "a": [
      "Ashwin Korde",
      "Darren Johnson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Sarah Kline",
      "Shashank Kamdar"
     ],
     "a": [
      "Alex Abad",
      "Justin Bautista"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Harriet Levin",
      "Nick Meale"
     ],
     "a": [
      "Alyssa Boyle",
      "Darren Johnson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Yuki Kim",
      "Lou Frignito"
     ],
     "a": [
      "Julia Sternberg",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Teresa Wang",
      "Chris Tabeling"
     ],
     "a": [
      "Elysia Price",
      "Zachary Lessner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Sarah Kline",
      "Megan Harvey"
     ],
     "a": [
      "Rachel Alfano",
      "Alex Abad"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Teresa Wang",
      "Yuki Kim"
     ],
     "a": [
      "Alyssa Boyle",
      "Elysia Price"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Nick Meale",
      "Chris Tabeling"
     ],
     "a": [
      "Zachary Lessner",
      "Ashwin Korde"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lou Frignito",
      "Shashank Kamdar"
     ],
     "a": [
      "Darren Johnson",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Yuki Kim",
      "Nick Meale"
     ],
     "a": [
      "Alex Abad",
      "Ashwin Korde"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Teresa Wang",
      "Shashank Kamdar"
     ],
     "a": [
      "Julia Sternberg",
      "Justin Bautista"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Harriet Levin",
      "Chris Tabeling"
     ],
     "a": [
      "Elysia Price",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Megan Harvey",
      "Lou Frignito"
     ],
     "a": [
      "Rachel Alfano",
      "Zachary Lessner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Harriet Levin",
      "Megan Harvey"
     ],
     "a": [
      "Alyssa Boyle",
      "Alex Abad"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Yuki Kim",
      "Sarah Kline"
     ],
     "a": [
      "Rachel Alfano",
      "Julia Sternberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lou Frignito",
      "Chris Tabeling"
     ],
     "a": [
      "Mark Kilimnik",
      "Justin Bautista"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Shashank Kamdar",
      "Nick Meale"
     ],
     "a": [
      "Ashwin Korde",
      "Darren Johnson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Yuki Kim",
      "Lou Frignito"
     ],
     "a": [
      "Alyssa Boyle",
      "Ashwin Korde"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Teresa Wang",
      "Shashank Kamdar"
     ],
     "a": [
      "Rachel Alfano",
      "Zachary Lessner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Megan Harvey",
      "Nick Meale"
     ],
     "a": [
      "Elysia Price",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Sarah Kline",
      "Chris Tabeling"
     ],
     "a": [
      "Julia Sternberg",
      "Justin Bautista"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Megan Harvey",
      "Sarah Kline"
     ],
     "a": [
      "Alyssa Boyle",
      "Alex Abad"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Teresa Wang",
      "Harriet Levin"
     ],
     "a": [
      "Rachel Alfano",
      "Elysia Price"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Chris Tabeling",
      "Shashank Kamdar"
     ],
     "a": [
      "Ashwin Korde",
      "Justin Bautista"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Lou Frignito",
      "Nick Meale"
     ],
     "a": [
      "Darren Johnson",
      "Zachary Lessner"
     ]
    }
   ],
   "subs": [
    "Darren Johnson",
    "Justin Bautista"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "Pickle House",
   "away": "Monroe",
   "time": "2026-09-23T19:30:00",
   "complete": true,
   "provisional": true,
   "homePoints": 618,
   "awayPoints": 616,
   "homeGW": 20,
   "awayGW": 12,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lissa Eagles",
      "Gage Cvijic"
     ],
     "a": [
      "Ruhi Shah",
      "Anthony Ursino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Taylor Hartman",
      "Chris Damato"
     ],
     "a": [
      "Sophia Kaufmann",
      "Maanav Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Emily Babinsky",
      "Zach Hollmann"
     ],
     "a": [
      "Richa Shah",
      "Dilan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Yoyo Shen",
      "Michael Li"
     ],
     "a": [
      "Amanda Ksiezopolski",
      "Shreyas Pani"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Taylor Hartman",
      "Lissa Eagles"
     ],
     "a": [
      "Amalia Ditrapani",
      "Amanda Ksiezopolski"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Yoyo Shen",
      "Lauren Mammano"
     ],
     "a": [
      "Ruhi Shah",
      "Richa Shah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Michael Li",
      "Gage Cvijic"
     ],
     "a": [
      "Shreyas Pani",
      "Ali Husain"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Chris Damato",
      "Mickey Cook"
     ],
     "a": [
      "Maanav Shah",
      "Dilan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Taylor Hartman",
      "Zach Hollmann"
     ],
     "a": [
      "Amalia Ditrapani",
      "Ali Husain"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lauren Mammano",
      "Gage Cvijic"
     ],
     "a": [
      "Ruhi Shah",
      "Shreyas Pani"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Yoyo Shen",
      "Mickey Cook"
     ],
     "a": [
      "Sophia Kaufmann",
      "Anthony Ursino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lissa Eagles",
      "Chris Damato"
     ],
     "a": [
      "Richa Shah",
      "Maanav Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Taylor Hartman",
      "Lissa Eagles"
     ],
     "a": [
      "Amalia Ditrapani",
      "Amanda Ksiezopolski"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Yoyo Shen",
      "Emily Babinsky"
     ],
     "a": [
      "Ruhi Shah",
      "Sophia Kaufmann"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Michael Li",
      "Zach Hollmann"
     ],
     "a": [
      "Anthony Ursino",
      "Ali Husain"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Gage Cvijic",
      "Mickey Cook"
     ],
     "a": [
      "Maanav Shah",
      "Dilan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Emily Babinsky",
      "Zach Hollmann"
     ],
     "a": [
      "Sophia Kaufmann",
      "Anthony Ursino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Taylor Hartman",
      "Michael Li"
     ],
     "a": [
      "Richa Shah",
      "Shreyas Pani"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lissa Eagles",
      "Chris Damato"
     ],
     "a": [
      "Amanda Ksiezopolski",
      "Maanav Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lauren Mammano",
      "Mickey Cook"
     ],
     "a": [
      "Ruhi Shah",
      "Dilan Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Taylor Hartman",
      "Emily Babinsky"
     ],
     "a": [
      "Amalia Ditrapani",
      "Richa Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Yoyo Shen",
      "Lauren Mammano"
     ],
     "a": [
      "Ruhi Shah",
      "Amanda Ksiezopolski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Gage Cvijic",
      "Zach Hollmann"
     ],
     "a": [
      "Anthony Ursino",
      "Ali Husain"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Michael Li",
      "Chris Damato"
     ],
     "a": [
      "Shreyas Pani",
      "Dilan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Emily Babinsky",
      "Gage Cvijic"
     ],
     "a": [
      "Sophia Kaufmann",
      "Shreyas Pani"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lauren Mammano",
      "Mickey Cook"
     ],
     "a": [
      "Richa Shah",
      "Ali Husain"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Yoyo Shen",
      "Zach Hollmann"
     ],
     "a": [
      "Amalia Ditrapani",
      "Anthony Ursino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Taylor Hartman",
      "Michael Li"
     ],
     "a": [
      "Ruhi Shah",
      "Maanav Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Taylor Hartman",
      "Yoyo Shen"
     ],
     "a": [
      "Amalia Ditrapani",
      "Sophia Kaufmann"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Lissa Eagles",
      "Emily Babinsky"
     ],
     "a": [
      "Ruhi Shah",
      "Amanda Ksiezopolski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Mickey Cook",
      "Zach Hollmann"
     ],
     "a": [
      "Maanav Shah",
      "Ali Husain"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Michael Li",
      "Chris Damato"
     ],
     "a": [
      "Dilan Shah",
      "Shreyas Pani"
     ]
    }
   ],
   "subs": [
    "Gage Cvijic",
    "Lauren Mammano"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "ACE Moorestown",
   "away": "Jersey Devil",
   "time": "2026-09-23T19:30:00",
   "complete": true,
   "provisional": true,
   "homePoints": 625,
   "awayPoints": 575,
   "homeGW": 22,
   "awayGW": 10,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Shelah Wallace",
      "Ben Mead"
     ],
     "a": [
      "Michelle Quach",
      "Matthew Chen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Krysti Maronski-Neufeldt",
      "Manny Lai"
     ],
     "a": [
      "Maeve Mcgowan",
      "Matthew Matro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Anita Buggins",
      "Hector Irizarry"
     ],
     "a": [
      "Danielle Bernero",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Stacy Walkowitz",
      "Nathan Law"
     ],
     "a": [
      "Arianna Haresign",
      "Zach Bowe"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Stacy Walkowitz",
      "Shelah Wallace"
     ],
     "a": [
      "Michelle Quach",
      "Arianna Haresign"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Annemarie Mccartney",
      "Anita Buggins"
     ],
     "a": [
      "Rachel Berger",
      "Danielle Bernero"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Manny Lai",
      "Ben Mead"
     ],
     "a": [
      "Zach Bowe",
      "Matthew Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Hector Irizarry",
      "Jack Blumberg"
     ],
     "a": [
      "Caleb Perry-Abner",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Annemarie Mccartney",
      "Manny Lai"
     ],
     "a": [
      "Michelle Quach",
      "Caleb Perry-Abner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Stacy Walkowitz",
      "Jack Blumberg"
     ],
     "a": [
      "Rachel Berger",
      "Matthew Matro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Brittany Hall",
      "Nathan Law"
     ],
     "a": [
      "Maeve Mcgowan",
      "Matthew Chen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Krysti Maronski-Neufeldt",
      "Hector Irizarry"
     ],
     "a": [
      "Arianna Haresign",
      "Zach Bowe"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Annemarie Mccartney",
      "Brittany Hall"
     ],
     "a": [
      "Michelle Quach",
      "Arianna Haresign"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Stacy Walkowitz",
      "Krysti Maronski-Neufeldt"
     ],
     "a": [
      "Danielle Bernero",
      "Maeve Mcgowan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Nathan Law",
      "Manny Lai"
     ],
     "a": [
      "Zach Bowe",
      "Matthew Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Hector Irizarry",
      "Ben Mead"
     ],
     "a": [
      "Tyler Arsenault",
      "Matthew Matro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Brittany Hall",
      "Manny Lai"
     ],
     "a": [
      "Rachel Berger",
      "Matthew Matro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Annemarie Mccartney",
      "Jack Blumberg"
     ],
     "a": [
      "Michelle Quach",
      "Caleb Perry-Abner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Anita Buggins",
      "Nathan Law"
     ],
     "a": [
      "Maeve Mcgowan",
      "Zach Bowe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Shelah Wallace",
      "Hector Irizarry"
     ],
     "a": [
      "Arianna Haresign",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Anita Buggins",
      "Stacy Walkowitz"
     ],
     "a": [
      "Michelle Quach",
      "Maeve Mcgowan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Krysti Maronski-Neufeldt",
      "Shelah Wallace"
     ],
     "a": [
      "Rachel Berger",
      "Danielle Bernero"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Manny Lai",
      "Jack Blumberg"
     ],
     "a": [
      "Tyler Arsenault",
      "Caleb Perry-Abner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Nathan Law",
      "Ben Mead"
     ],
     "a": [
      "Matthew Matro",
      "Matthew Chen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Stacy Walkowitz",
      "Jack Blumberg"
     ],
     "a": [
      "Danielle Bernero",
      "Matthew Matro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Shelah Wallace",
      "Ben Mead"
     ],
     "a": [
      "Rachel Berger",
      "Caleb Perry-Abner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Annemarie Mccartney",
      "Nathan Law"
     ],
     "a": [
      "Maeve Mcgowan",
      "Zach Bowe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Brittany Hall",
      "Manny Lai"
     ],
     "a": [
      "Arianna Haresign",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Brittany Hall",
      "Krysti Maronski-Neufeldt"
     ],
     "a": [
      "Rachel Berger",
      "Arianna Haresign"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Annemarie Mccartney",
      "Shelah Wallace"
     ],
     "a": [
      "Danielle Bernero",
      "Michelle Quach"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jack Blumberg",
      "Manny Lai"
     ],
     "a": [
      "Caleb Perry-Abner",
      "Zach Bowe"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Ben Mead",
      "Nathan Law"
     ],
     "a": [
      "Tyler Arsenault",
      "Matthew Chen"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": null,
   "week": 5,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "ACE Moorestown",
   "time": "2026-09-27T09:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Pickle House",
   "away": "Dill Dinkers Hatboro The Factory",
   "time": "2026-09-27T09:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Jersey Pickleball Club",
   "away": "Dill Dinkers Hatboro Aces",
   "time": "2026-09-27T09:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Flemington",
   "away": "Bounce Malvern",
   "time": "2026-09-27T09:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Monroe",
   "away": "Jersey Devil",
   "time": "2026-09-27T18:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Home Court",
   "away": "Bounce Philly",
   "time": "2026-09-27T18:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Monroe",
   "away": "ACE Moorestown",
   "time": "2026-09-30T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Bounce Malvern",
   "away": "Home Court",
   "time": "2026-09-30T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Pickle House",
   "away": "Bounce Philly",
   "time": "2026-09-30T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Dill Dinkers Hatboro The Factory",
   "away": "Flemington",
   "time": "2026-09-30T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Jersey Pickleball Club",
   "away": "Jersey Devil",
   "time": "2026-09-30T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Monroe",
   "time": "2026-10-07T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Dill Dinkers Hatboro The Factory",
   "away": "Bounce Malvern",
   "time": "2026-10-07T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Jersey Devil",
   "away": "Dill Dinkers Hatboro Aces",
   "time": "2026-10-07T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Bounce Philly",
   "away": "ACE Moorestown",
   "time": "2026-10-07T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Pickle House",
   "away": "Flemington",
   "time": "2026-10-07T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Monroe",
   "away": "Home Court",
   "time": "2026-10-14T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Flemington",
   "away": "Jersey Pickleball Club",
   "time": "2026-10-14T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "ACE Moorestown",
   "away": "Bounce Malvern",
   "time": "2026-10-14T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Bounce Philly",
   "away": "Dill Dinkers Hatboro Aces",
   "time": "2026-10-14T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Dill Dinkers Hatboro The Factory",
   "away": "Jersey Devil",
   "time": "2026-10-14T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Pickle House",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-10-14T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Monroe",
   "away": "Jersey Pickleball Club",
   "time": "2026-10-21T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Flemington",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-10-21T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Dill Dinkers Hatboro Aces",
   "away": "Bounce Malvern",
   "time": "2026-10-21T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Dill Dinkers Hatboro The Factory",
   "away": "ACE Moorestown",
   "time": "2026-10-21T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Pickle House",
   "away": "Home Court",
   "time": "2026-10-21T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Jersey Devil",
   "away": "Bounce Philly",
   "time": "2026-10-21T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Dill Dinkers Hatboro Aces",
   "away": "Flemington",
   "time": "2026-10-25T09:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Jersey Devil",
   "away": "Home Court",
   "time": "2026-10-25T09:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Dill Dinkers Hatboro The Factory",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-10-25T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Bounce Philly",
   "away": "Monroe",
   "time": "2026-10-25T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "ACE Moorestown",
   "away": "Pickle House",
   "time": "2026-10-25T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Bounce Malvern",
   "away": "Jersey Pickleball Club",
   "time": "2026-10-25T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Flemington",
   "away": "Monroe",
   "time": "2026-10-28T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Home Court",
   "time": "2026-10-28T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Dill Dinkers Hatboro The Factory",
   "away": "Bounce Philly",
   "time": "2026-10-28T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Dill Dinkers Hatboro Aces",
   "away": "ACE Moorestown",
   "time": "2026-10-28T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Jersey Pickleball Club",
   "away": "Pickle House",
   "time": "2026-10-28T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Jersey Devil",
   "away": "Dill Dinkers Hatboro The Factory",
   "time": "2026-10-29T19:30:00",
   "complete": false,
   "games": [
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Hannah Nussbaum",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Kaylyn Swankoski",
      "Andrew Wakefield"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Rayna Baizman",
      "Varun Prakash"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Nahla Bernhardt",
      "Joel Phillips"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Hannah Nussbaum",
      "Kaylyn Swankoski"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Rayna Baizman",
      "Nahla Bernhardt"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Andrew Wakefield",
      "Joel Phillips"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Jonah Fliegelman",
      "Varun Prakash"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Hannah Nussbaum",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Kaylyn Swankoski",
      "Andrew Wakefield"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Rayna Baizman",
      "Varun Prakash"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Nahla Bernhardt",
      "Joel Phillips"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Hannah Nussbaum",
      "Nahla Bernhardt"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Rayna Baizman",
      "Kaylyn Swankoski"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Andrew Wakefield",
      "Varun Prakash"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Jonah Fliegelman",
      "Joel Phillips"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Hannah Nussbaum",
      ""
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Kaylyn Swankoski",
      ""
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Rayna Baizman",
      ""
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Nahla Bernhardt",
      ""
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Hannah Nussbaum",
      "Kaylyn Swankoski"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Rayna Baizman",
      "Nahla Bernhardt"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Andrew Wakefield",
      "Joel Phillips"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Varun Prakash",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Hannah Nussbaum",
      ""
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Kaylyn Swankoski",
      ""
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Rayna Baizman",
      ""
     ]
    },
    {
     "t": "mixed",
     "h": [
      "",
      ""
     ],
     "a": [
      "Nahla Bernhardt",
      ""
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Hannah Nussbaum",
      "Nahla Bernhardt"
     ]
    },
    {
     "t": "female",
     "h": [
      "",
      ""
     ],
     "a": [
      "Kaylyn Swankoski",
      "Rayna Baizman"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Andrew Wakefield",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Varun Prakash",
      "Joel Phillips"
     ]
    }
   ]
  },
  {
   "result": null,
   "week": 11,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Flemington",
   "time": "2026-11-04T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Home Court",
   "away": "Pickle House",
   "time": "2026-11-04T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Bounce Malvern",
   "away": "Dill Dinkers Hatboro Aces",
   "time": "2026-11-04T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Jersey Pickleball Club",
   "away": "Monroe",
   "time": "2026-11-04T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Bounce Philly",
   "away": "Jersey Devil",
   "time": "2026-11-04T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Dill Dinkers Hatboro Aces",
   "time": "2026-11-11T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Jersey Devil",
   "away": "Bounce Malvern",
   "time": "2026-11-11T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "ACE Moorestown",
   "away": "Dill Dinkers Hatboro The Factory",
   "time": "2026-11-11T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Jersey Pickleball Club",
   "away": "Home Court",
   "time": "2026-11-11T19:30:00",
   "complete": false
  }
 ],
 "playoffs": [],
 "extraPlayerIds": {
  "Andrew Cooley": "4bc5dc80-f744-41e1-ab6e-a02c600abed8",
  "Michael Swell": "5436acd1-542a-4ca5-a652-c0addcf23ea2",
  "Stefanie Sohosky": "65aabbc7-a06a-4074-a5df-5b0938ede28a",
  "Brandyn Schuchart": "9d821d34-4af3-4e4a-999d-25308b75ca0f",
  "Marc Padre": "a131a707-f20e-4838-9dcf-7cecb40c2705",
  "Vivek Kumar": "a472cebf-6bf1-42d1-9a41-fc8940cbb021"
 },
 "meta": {
  "matchesPlayed": 28,
  "provisionalMatches": 3,
  "weeks": "1-5",
  "totalPlayers": 201,
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
  "divisionSlug": "6619816f",
  "hasPlayoffs": false,
  "typicalDay": "Wednesdays",
  "detailFile": "compiled/detail-6619816f.js",
  "clubName": "",
  "divisionName": "4.5",
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
   "crossPodMatchups": 18,
   "totalMatchups": 78,
   "reported": {
    "North": [
     "Flemington",
     "Home Court",
     "Jersey Pickleball Club",
     "Monroe",
     "Pickle House",
     "Pickleball Kingdom Hillsborough"
    ],
    "South": [
     "ACE Moorestown",
     "Bounce Malvern",
     "Bounce Philly",
     "Dill Dinkers Hatboro Aces",
     "Dill Dinkers Hatboro The Factory",
     "Jersey Devil"
    ]
   },
   "schedule": {
    "Pod 1": [
     "ACE Moorestown",
     "Bounce Malvern",
     "Bounce Philly",
     "Dill Dinkers Hatboro Aces",
     "Dill Dinkers Hatboro The Factory",
     "Flemington",
     "Home Court",
     "Jersey Devil",
     "Jersey Pickleball Club",
     "Monroe",
     "Pickle House",
     "Pickleball Kingdom Hillsborough"
    ]
   }
  }
 }
};
  DATA.meta.asOf = "2026-09-24T04:42:11.154Z";
  window.DATA = DATA;
  window.CPL_DATASETS = window.CPL_DATASETS || {};
  window.CPL_DATASETS["6619816f"] = DATA;
})();
