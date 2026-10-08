(function () {
  const DATA = {
 "players": [
  {
   "name": "Austin Gow",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 8,
   "losses": 0,
   "pointsWon": 168,
   "totalPointsAgainst": 118,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 50,
   "ppg": 21,
   "leagueRank": 51,
   "rating": 1.5,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -1.5,
   "playerId": "0e577096-0b13-441d-b087-cc49cb55cfe2"
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
   "leagueRank": 35,
   "rating": 3.1,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.1,
   "playerId": "fff3fe71-d4a6-4103-9290-0ef57035471c"
  },
  {
   "name": "Marina Cozac",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro The Factory",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 20,
   "losses": 1,
   "pointsWon": 439,
   "totalPointsAgainst": 270,
   "mixedWins": 12,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 95.2,
   "diff": 169,
   "ppg": 20.9,
   "leagueRank": 1,
   "rating": 6.1,
   "ratingGames": 21,
   "confidence": 81,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": 0.5,
   "playerId": "13c8aeab-aa52-4bc2-bf23-96a2cabe4181"
  },
  {
   "name": "Kaylyn Swankoski",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro The Factory",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 44,
   "wins": 40,
   "losses": 4,
   "pointsWon": 911,
   "totalPointsAgainst": 669,
   "mixedWins": 18,
   "mixedLosses": 2,
   "genderWins": 22,
   "genderLosses": 2,
   "clutchWins": 10,
   "clutchLosses": 3,
   "winPct": 90.9,
   "diff": 242,
   "ppg": 20.7,
   "leagueRank": 2,
   "rating": 3.9,
   "ratingGames": 44,
   "confidence": 88,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.1,
   "playerId": "72949bef-7cab-4942-ab45-e5203024a8d5"
  },
  {
   "name": "Emily Ocasio",
   "gender": "Female",
   "team": "Bounce Malvern",
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
   "leagueRank": 81,
   "rating": -0.2,
   "ratingGames": 8,
   "confidence": 57,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -1.8,
   "playerId": "12584e84-045d-4de1-8edc-7ccbcb1ee27a"
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
   "leagueRank": 79,
   "rating": 0.2,
   "ratingGames": 8,
   "confidence": 59,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -1.1,
   "playerId": "6af88387-5e2b-4ea7-b732-22885e4931a8"
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
   "leagueRank": 19,
   "rating": 2.6,
   "ratingGames": 14,
   "confidence": 73,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.3,
   "playerId": "54ed1c79-aaa0-486d-851b-d5a4db375b94"
  },
  {
   "name": "Dylan Unkert",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 145,
   "totalPointsAgainst": 134,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 5,
   "clutchLosses": 1,
   "winPct": 85.7,
   "diff": 11,
   "ppg": 20.7,
   "leagueRank": 85,
   "rating": 1.2,
   "ratingGames": 7,
   "confidence": 58,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.5,
   "playerId": "35415e5c-19db-4389-9839-b63d7e09851f"
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
   "leagueRank": 84,
   "rating": 1.1,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.8,
   "playerId": "66f782cc-bcee-4ebf-849a-649a37bf8a8d"
  },
  {
   "name": "Yuki Kim",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 59,
   "wins": 47,
   "losses": 12,
   "pointsWon": 1179,
   "totalPointsAgainst": 909,
   "mixedWins": 25,
   "mixedLosses": 7,
   "genderWins": 22,
   "genderLosses": 5,
   "clutchWins": 9,
   "clutchLosses": 5,
   "winPct": 79.7,
   "diff": 270,
   "ppg": 20,
   "leagueRank": 3,
   "rating": 3.6,
   "ratingGames": 59,
   "confidence": 90,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 0.4,
   "playerId": "afec0287-b62d-4aaf-977f-afb96aed0e17"
  },
  {
   "name": "Yoyo Shen",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 49,
   "wins": 39,
   "losses": 10,
   "pointsWon": 980,
   "totalPointsAgainst": 818,
   "mixedWins": 23,
   "mixedLosses": 4,
   "genderWins": 16,
   "genderLosses": 6,
   "clutchWins": 13,
   "clutchLosses": 3,
   "winPct": 79.6,
   "diff": 162,
   "ppg": 20,
   "leagueRank": 9,
   "rating": 2.3,
   "ratingGames": 49,
   "confidence": 90,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0,
   "playerId": "9d47a1aa-c44c-4ddd-8953-dc40f79b1016"
  },
  {
   "name": "Conor Landrigan",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro The Factory",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 15,
   "losses": 4,
   "pointsWon": 387,
   "totalPointsAgainst": 327,
   "mixedWins": 7,
   "mixedLosses": 3,
   "genderWins": 8,
   "genderLosses": 1,
   "clutchWins": 7,
   "clutchLosses": 2,
   "winPct": 78.9,
   "diff": 60,
   "ppg": 20.4,
   "leagueRank": 14,
   "rating": 1.7,
   "ratingGames": 19,
   "confidence": 78,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.1,
   "playerId": "931df78f-b759-497d-ba8d-be7d3f41f668"
  },
  {
   "name": "Cristi Landrigan",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro The Factory",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 33,
   "wins": 26,
   "losses": 7,
   "pointsWon": 664,
   "totalPointsAgainst": 547,
   "mixedWins": 15,
   "mixedLosses": 2,
   "genderWins": 11,
   "genderLosses": 5,
   "clutchWins": 5,
   "clutchLosses": 3,
   "winPct": 78.8,
   "diff": 117,
   "ppg": 20.1,
   "leagueRank": 12,
   "rating": 1.1,
   "ratingGames": 33,
   "confidence": 86,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.6,
   "playerId": "1be028eb-1b92-4961-b508-fa0879c78017"
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
   "leagueRank": 4,
   "rating": 1.8,
   "ratingGames": 28,
   "confidence": 84,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": 0.2,
   "playerId": "741de6b9-5fe7-49aa-9c55-5ff4050bb7a1"
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
   "leagueRank": 34,
   "rating": 1.4,
   "ratingGames": 14,
   "confidence": 73,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.2,
   "playerId": "bc3db6dc-48f5-46f3-aec3-638d15ca7285"
  },
  {
   "name": "Anita Buggins",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 37,
   "wins": 29,
   "losses": 8,
   "pointsWon": 735,
   "totalPointsAgainst": 624,
   "mixedWins": 15,
   "mixedLosses": 4,
   "genderWins": 14,
   "genderLosses": 4,
   "clutchWins": 8,
   "clutchLosses": 2,
   "winPct": 78.4,
   "diff": 111,
   "ppg": 19.9,
   "leagueRank": 5,
   "rating": 4,
   "ratingGames": 37,
   "confidence": 87,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.9,
   "playerId": "2ea90a18-1ef3-4ade-a855-2a3fd178abd7"
  },
  {
   "name": "Meghan Mediratta",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 18,
   "losses": 5,
   "pointsWon": 465,
   "totalPointsAgainst": 369,
   "mixedWins": 8,
   "mixedLosses": 3,
   "genderWins": 10,
   "genderLosses": 2,
   "clutchWins": 6,
   "clutchLosses": 3,
   "winPct": 78.3,
   "diff": 96,
   "ppg": 20.2,
   "leagueRank": 8,
   "rating": 1.9,
   "ratingGames": 23,
   "confidence": 81,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -0.4,
   "playerId": "abc80b43-6769-4254-ae9a-b4b63b06de1d"
  },
  {
   "name": "Paula Ro",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 20,
   "losses": 6,
   "pointsWon": 515,
   "totalPointsAgainst": 439,
   "mixedWins": 9,
   "mixedLosses": 1,
   "genderWins": 11,
   "genderLosses": 5,
   "clutchWins": 8,
   "clutchLosses": 2,
   "winPct": 76.9,
   "diff": 76,
   "ppg": 19.8,
   "leagueRank": 20,
   "rating": 1.8,
   "ratingGames": 26,
   "confidence": 82,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.3,
   "playerId": "3cf3093b-1667-4242-9ad5-1d72fc5d24f8"
  },
  {
   "name": "Nick Meale",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 63,
   "wins": 48,
   "losses": 15,
   "pointsWon": 1263,
   "totalPointsAgainst": 991,
   "mixedWins": 22,
   "mixedLosses": 9,
   "genderWins": 26,
   "genderLosses": 6,
   "clutchWins": 9,
   "clutchLosses": 8,
   "winPct": 76.2,
   "diff": 272,
   "ppg": 20,
   "leagueRank": 7,
   "rating": 3,
   "ratingGames": 63,
   "confidence": 91,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 0.3,
   "playerId": "ec0bad09-8256-49b3-ae86-3add22dd995f"
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
   "leagueRank": 6,
   "rating": 3.4,
   "ratingGames": 29,
   "confidence": 84,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.3,
   "playerId": "1d63ce3d-20c2-40ae-94ca-e8e6e458004e"
  },
  {
   "name": "Dylan Ashbach",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro The Factory",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 22,
   "losses": 7,
   "pointsWon": 577,
   "totalPointsAgainst": 475,
   "mixedWins": 13,
   "mixedLosses": 3,
   "genderWins": 9,
   "genderLosses": 4,
   "clutchWins": 6,
   "clutchLosses": 2,
   "winPct": 75.9,
   "diff": 102,
   "ppg": 19.9,
   "leagueRank": 16,
   "rating": 2.2,
   "ratingGames": 29,
   "confidence": 85,
   "strengthOfPartners": 2,
   "strengthOfOpponents": 0.5,
   "playerId": "9c41a810-1be6-4e08-8a29-51558c29cb86"
  },
  {
   "name": "Lou Frignito",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 56,
   "wins": 42,
   "losses": 14,
   "pointsWon": 1117,
   "totalPointsAgainst": 887,
   "mixedWins": 22,
   "mixedLosses": 6,
   "genderWins": 20,
   "genderLosses": 8,
   "clutchWins": 8,
   "clutchLosses": 6,
   "winPct": 75,
   "diff": 230,
   "ppg": 19.9,
   "leagueRank": 10,
   "rating": 3,
   "ratingGames": 56,
   "confidence": 91,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.3,
   "playerId": "1afca308-dca6-4828-946a-0ca6ad1b0c44"
  },
  {
   "name": "Dustin Rabinowitz",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 15,
   "losses": 5,
   "pointsWon": 399,
   "totalPointsAgainst": 331,
   "mixedWins": 9,
   "mixedLosses": 1,
   "genderWins": 6,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 75,
   "diff": 68,
   "ppg": 20,
   "leagueRank": 15,
   "rating": 1.7,
   "ratingGames": 20,
   "confidence": 79,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.6,
   "playerId": "d23839c0-334b-4423-9305-0c6281523d5d"
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
   "leagueRank": 107,
   "rating": 0.9,
   "ratingGames": 8,
   "confidence": 60,
   "strengthOfPartners": 1.3,
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
   "leagueRank": 120,
   "rating": 0.6,
   "ratingGames": 8,
   "confidence": 54,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -1.2,
   "playerId": "b7555b30-f1b5-4d44-9eff-dffd3e1b1b28"
  },
  {
   "name": "Michaela Pierznik",
   "gender": "Female",
   "team": "Jersey Devil",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 20,
   "losses": 7,
   "pointsWon": 528,
   "totalPointsAgainst": 468,
   "mixedWins": 11,
   "mixedLosses": 5,
   "genderWins": 9,
   "genderLosses": 2,
   "clutchWins": 8,
   "clutchLosses": 3,
   "winPct": 74.1,
   "diff": 60,
   "ppg": 19.6,
   "leagueRank": 26,
   "rating": 1.5,
   "ratingGames": 27,
   "confidence": 84,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.4,
   "playerId": "c885c4ae-2685-4fc8-9b35-40cf9f465915"
  },
  {
   "name": "Ben Mead",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 17,
   "losses": 6,
   "pointsWon": 467,
   "totalPointsAgainst": 399,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 11,
   "genderLosses": 4,
   "clutchWins": 7,
   "clutchLosses": 5,
   "winPct": 73.9,
   "diff": 68,
   "ppg": 20.3,
   "leagueRank": 17,
   "rating": 2.3,
   "ratingGames": 23,
   "confidence": 81,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.3,
   "playerId": "7858dda8-168b-4a84-8d5d-7a6571e9313a"
  },
  {
   "name": "Gissel Escalante",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 28,
   "losses": 10,
   "pointsWon": 760,
   "totalPointsAgainst": 627,
   "mixedWins": 14,
   "mixedLosses": 5,
   "genderWins": 14,
   "genderLosses": 5,
   "clutchWins": 5,
   "clutchLosses": 5,
   "winPct": 73.7,
   "diff": 133,
   "ppg": 20,
   "leagueRank": 11,
   "rating": 4,
   "ratingGames": 38,
   "confidence": 86,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 1,
   "playerId": "63221cc8-e303-4675-8dde-4fc77e871627"
  },
  {
   "name": "Varun Prakash",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro The Factory",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 30,
   "losses": 11,
   "pointsWon": 816,
   "totalPointsAgainst": 700,
   "mixedWins": 16,
   "mixedLosses": 3,
   "genderWins": 14,
   "genderLosses": 8,
   "clutchWins": 9,
   "clutchLosses": 6,
   "winPct": 73.2,
   "diff": 116,
   "ppg": 19.9,
   "leagueRank": 24,
   "rating": 2.3,
   "ratingGames": 41,
   "confidence": 88,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 0.6,
   "playerId": "67dbfc4f-20f7-4299-bc2f-6cc70cf747ab"
  },
  {
   "name": "Emily Babinsky",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 48,
   "wins": 35,
   "losses": 13,
   "pointsWon": 943,
   "totalPointsAgainst": 867,
   "mixedWins": 14,
   "mixedLosses": 10,
   "genderWins": 21,
   "genderLosses": 3,
   "clutchWins": 17,
   "clutchLosses": 3,
   "winPct": 72.9,
   "diff": 76,
   "ppg": 19.6,
   "leagueRank": 30,
   "rating": 0.6,
   "ratingGames": 48,
   "confidence": 90,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.3,
   "playerId": "d0e2c1ea-529d-4364-b521-cb205ecdded3"
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
   "leagueRank": 89,
   "rating": 1.8,
   "ratingGames": 11,
   "confidence": 67,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 1.3,
   "playerId": "8ae25144-966d-4de1-9cb3-513f7f217170"
  },
  {
   "name": "Arianna Haresign",
   "gender": "Female",
   "team": "Jersey Devil",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 26,
   "losses": 10,
   "pointsWon": 729,
   "totalPointsAgainst": 609,
   "mixedWins": 16,
   "mixedLosses": 4,
   "genderWins": 10,
   "genderLosses": 6,
   "clutchWins": 9,
   "clutchLosses": 7,
   "winPct": 72.2,
   "diff": 120,
   "ppg": 20.3,
   "leagueRank": 13,
   "rating": 3,
   "ratingGames": 36,
   "confidence": 87,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.3,
   "playerId": "556f84fc-4f7c-4199-a104-6e906d71605c"
  },
  {
   "name": "Brandyn Schuchart",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 127,
   "totalPointsAgainst": 118,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 71.4,
   "diff": 9,
   "ppg": 18.1,
   "leagueRank": 150,
   "rating": -0.9,
   "ratingGames": 7,
   "confidence": 58,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.9,
   "playerId": "9d821d34-4af3-4e4a-999d-25308b75ca0f"
  },
  {
   "name": "Hannah Nussbaum",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro The Factory",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 31,
   "wins": 22,
   "losses": 9,
   "pointsWon": 609,
   "totalPointsAgainst": 566,
   "mixedWins": 8,
   "mixedLosses": 5,
   "genderWins": 14,
   "genderLosses": 4,
   "clutchWins": 11,
   "clutchLosses": 2,
   "winPct": 71,
   "diff": 43,
   "ppg": 19.6,
   "leagueRank": 29,
   "rating": 1.4,
   "ratingGames": 31,
   "confidence": 85,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": 1,
   "playerId": "84b7c449-501c-438d-a3eb-ee67cc92fa0e"
  },
  {
   "name": "Kenoa Tio",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro The Factory",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 24,
   "losses": 10,
   "pointsWon": 688,
   "totalPointsAgainst": 606,
   "mixedWins": 11,
   "mixedLosses": 5,
   "genderWins": 13,
   "genderLosses": 5,
   "clutchWins": 12,
   "clutchLosses": 7,
   "winPct": 70.6,
   "diff": 82,
   "ppg": 20.2,
   "leagueRank": 27,
   "rating": 1.4,
   "ratingGames": 34,
   "confidence": 86,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0.3,
   "playerId": "10e9980e-34bf-43ea-b246-3280bca79efb"
  },
  {
   "name": "Bruno Casino",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 12,
   "losses": 5,
   "pointsWon": 346,
   "totalPointsAgainst": 309,
   "mixedWins": 5,
   "mixedLosses": 4,
   "genderWins": 7,
   "genderLosses": 1,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 70.6,
   "diff": 37,
   "ppg": 20.4,
   "leagueRank": 21,
   "rating": 3.6,
   "ratingGames": 17,
   "confidence": 77,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 1.1,
   "playerId": "d195dff9-7f38-402c-8164-44640f89c3fa"
  },
  {
   "name": "Andrew Wakefield",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro The Factory",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 33,
   "wins": 23,
   "losses": 10,
   "pointsWon": 648,
   "totalPointsAgainst": 599,
   "mixedWins": 14,
   "mixedLosses": 4,
   "genderWins": 9,
   "genderLosses": 6,
   "clutchWins": 9,
   "clutchLosses": 5,
   "winPct": 69.7,
   "diff": 49,
   "ppg": 19.6,
   "leagueRank": 28,
   "rating": 1.3,
   "ratingGames": 33,
   "confidence": 86,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.7,
   "playerId": "5f429a7f-18c6-49e3-a804-6aa2a930f09c"
  },
  {
   "name": "Jenna Irwin",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 16,
   "losses": 7,
   "pointsWon": 466,
   "totalPointsAgainst": 351,
   "mixedWins": 6,
   "mixedLosses": 6,
   "genderWins": 10,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 6,
   "winPct": 69.6,
   "diff": 115,
   "ppg": 20.3,
   "leagueRank": 18,
   "rating": 3.2,
   "ratingGames": 23,
   "confidence": 81,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.1,
   "playerId": "85e52e3b-5238-4583-8d1a-cc57f8218ef6"
  },
  {
   "name": "Alyssa Boyle",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 36,
   "wins": 25,
   "losses": 11,
   "pointsWon": 717,
   "totalPointsAgainst": 603,
   "mixedWins": 11,
   "mixedLosses": 5,
   "genderWins": 14,
   "genderLosses": 6,
   "clutchWins": 6,
   "clutchLosses": 5,
   "winPct": 69.4,
   "diff": 114,
   "ppg": 19.9,
   "leagueRank": 22,
   "rating": 3.2,
   "ratingGames": 36,
   "confidence": 87,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.3,
   "playerId": "22123177-1eb2-4285-bc92-f75799e175dd"
  },
  {
   "name": "Michael Li",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 25,
   "losses": 11,
   "pointsWon": 709,
   "totalPointsAgainst": 610,
   "mixedWins": 14,
   "mixedLosses": 3,
   "genderWins": 11,
   "genderLosses": 8,
   "clutchWins": 8,
   "clutchLosses": 5,
   "winPct": 69.4,
   "diff": 99,
   "ppg": 19.7,
   "leagueRank": 25,
   "rating": 2.9,
   "ratingGames": 36,
   "confidence": 87,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.7,
   "playerId": "dc81629b-4ff7-45c4-b38e-b3b836bc0769"
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
   "leagueRank": 62,
   "rating": 0.3,
   "ratingGames": 13,
   "confidence": 72,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": -0.3,
   "playerId": "094c3b61-96e3-48c6-8172-10b7eaf528f4"
  },
  {
   "name": "Rayna Baizman",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro The Factory",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 29,
   "wins": 20,
   "losses": 9,
   "pointsWon": 560,
   "totalPointsAgainst": 507,
   "mixedWins": 8,
   "mixedLosses": 6,
   "genderWins": 12,
   "genderLosses": 3,
   "clutchWins": 5,
   "clutchLosses": 3,
   "winPct": 69,
   "diff": 53,
   "ppg": 19.3,
   "leagueRank": 41,
   "rating": -1.3,
   "ratingGames": 29,
   "confidence": 84,
   "strengthOfPartners": 2.2,
   "strengthOfOpponents": -0.5,
   "playerId": "108620c9-1cbb-4ea0-846c-bc781f1decea"
  },
  {
   "name": "Maanav Shah",
   "gender": "Male",
   "team": "Monroe",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 60,
   "wins": 41,
   "losses": 19,
   "pointsWon": 1203,
   "totalPointsAgainst": 1066,
   "mixedWins": 23,
   "mixedLosses": 7,
   "genderWins": 18,
   "genderLosses": 12,
   "clutchWins": 15,
   "clutchLosses": 12,
   "winPct": 68.3,
   "diff": 137,
   "ppg": 20.1,
   "leagueRank": 23,
   "rating": 3.6,
   "ratingGames": 60,
   "confidence": 91,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.5,
   "playerId": "0a1270b0-26f6-4328-85bc-bf3f329a746e"
  },
  {
   "name": "Shelah Wallace",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 15,
   "losses": 7,
   "pointsWon": 439,
   "totalPointsAgainst": 405,
   "mixedWins": 6,
   "mixedLosses": 5,
   "genderWins": 9,
   "genderLosses": 2,
   "clutchWins": 8,
   "clutchLosses": 2,
   "winPct": 68.2,
   "diff": 34,
   "ppg": 20,
   "leagueRank": 31,
   "rating": 1.7,
   "ratingGames": 22,
   "confidence": 81,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.9,
   "playerId": "fa519fb1-87ca-4a7b-9265-4aba9807929f"
  },
  {
   "name": "Annemarie Mccartney",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 20,
   "losses": 10,
   "pointsWon": 584,
   "totalPointsAgainst": 509,
   "mixedWins": 8,
   "mixedLosses": 6,
   "genderWins": 12,
   "genderLosses": 4,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 66.7,
   "diff": 75,
   "ppg": 19.5,
   "leagueRank": 33,
   "rating": 1.3,
   "ratingGames": 30,
   "confidence": 85,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.1,
   "playerId": "d08d78db-7d20-4dc2-a37b-41841c4624fd"
  },
  {
   "name": "Taylor Hartman",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 45,
   "wins": 30,
   "losses": 15,
   "pointsWon": 875,
   "totalPointsAgainst": 822,
   "mixedWins": 16,
   "mixedLosses": 5,
   "genderWins": 14,
   "genderLosses": 10,
   "clutchWins": 16,
   "clutchLosses": 4,
   "winPct": 66.7,
   "diff": 53,
   "ppg": 19.4,
   "leagueRank": 37,
   "rating": 1,
   "ratingGames": 45,
   "confidence": 89,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.5,
   "playerId": "3bf2f55b-b253-4d2a-b1b9-d5953ef1b8ec"
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
   "leagueRank": 32,
   "rating": 2.9,
   "ratingGames": 18,
   "confidence": 78,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.9,
   "playerId": "d8d64dde-4ffb-4c49-aaa6-537b09c9c8d5"
  },
  {
   "name": "Steven Fernandez",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro The Factory",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 8,
   "losses": 4,
   "pointsWon": 235,
   "totalPointsAgainst": 215,
   "mixedWins": 5,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 66.7,
   "diff": 20,
   "ppg": 19.6,
   "leagueRank": 93,
   "rating": 0,
   "ratingGames": 12,
   "confidence": 70,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.3,
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
   "leagueRank": 159,
   "rating": 0.6,
   "ratingGames": 6,
   "confidence": 57,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.3,
   "playerId": "ce590106-6f19-43b7-8a91-4dc31d28eb31"
  },
  {
   "name": "Chris Tabeling",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 47,
   "wins": 31,
   "losses": 16,
   "pointsWon": 901,
   "totalPointsAgainst": 846,
   "mixedWins": 15,
   "mixedLosses": 8,
   "genderWins": 16,
   "genderLosses": 8,
   "clutchWins": 14,
   "clutchLosses": 7,
   "winPct": 66,
   "diff": 55,
   "ppg": 19.2,
   "leagueRank": 38,
   "rating": 1.1,
   "ratingGames": 47,
   "confidence": 89,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.7,
   "playerId": "0ee404b2-e9e6-49b4-b9eb-bc2120473f76"
  },
  {
   "name": "Justin Bautista",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 9,
   "losses": 5,
   "pointsWon": 274,
   "totalPointsAgainst": 227,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 64.3,
   "diff": 47,
   "ppg": 19.6,
   "leagueRank": 69,
   "rating": 1.9,
   "ratingGames": 14,
   "confidence": 74,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.1,
   "playerId": "27660961-6245-4b09-aafe-359ca3205797"
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
   "leagueRank": 58,
   "rating": 1.5,
   "ratingGames": 14,
   "confidence": 74,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0,
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
   "leagueRank": 118,
   "rating": 0.5,
   "ratingGames": 11,
   "confidence": 69,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.2,
   "playerId": "c4eafe22-4dce-47af-978a-5e4bd5afa11a"
  },
  {
   "name": "Eric Lin",
   "gender": "Male",
   "team": "Monroe",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 22,
   "wins": 14,
   "losses": 8,
   "pointsWon": 417,
   "totalPointsAgainst": 409,
   "mixedWins": 8,
   "mixedLosses": 4,
   "genderWins": 6,
   "genderLosses": 4,
   "clutchWins": 7,
   "clutchLosses": 4,
   "winPct": 63.6,
   "diff": 8,
   "ppg": 19,
   "leagueRank": 48,
   "rating": 0,
   "ratingGames": 22,
   "confidence": 82,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0,
   "playerId": "4ce1c715-b187-47c5-b6dc-d079f802499d"
  },
  {
   "name": "Zach Hollmann",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 52,
   "wins": 33,
   "losses": 19,
   "pointsWon": 1024,
   "totalPointsAgainst": 938,
   "mixedWins": 21,
   "mixedLosses": 4,
   "genderWins": 12,
   "genderLosses": 15,
   "clutchWins": 16,
   "clutchLosses": 11,
   "winPct": 63.5,
   "diff": 86,
   "ppg": 19.7,
   "leagueRank": 36,
   "rating": 1.3,
   "ratingGames": 52,
   "confidence": 90,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.3,
   "playerId": "8aef2d8a-0bd4-45df-b5d1-1a120a81ef0f"
  },
  {
   "name": "Zoe Ousouljoglou",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 17,
   "losses": 10,
   "pointsWon": 528,
   "totalPointsAgainst": 486,
   "mixedWins": 8,
   "mixedLosses": 6,
   "genderWins": 9,
   "genderLosses": 4,
   "clutchWins": 4,
   "clutchLosses": 6,
   "winPct": 63,
   "diff": 42,
   "ppg": 19.6,
   "leagueRank": 40,
   "rating": 1.8,
   "ratingGames": 27,
   "confidence": 83,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.6,
   "playerId": "269fe355-d2eb-41b8-9e92-a1438aec65e3"
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
   "leagueRank": 135,
   "rating": 1.3,
   "ratingGames": 8,
   "confidence": 61,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0,
   "playerId": "e447eb0f-dc19-4616-a7f4-b53de776db3b"
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
   "leagueRank": 142,
   "rating": 1,
   "ratingGames": 8,
   "confidence": 60,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.3,
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
   "leagueRank": 125,
   "rating": 0.4,
   "ratingGames": 8,
   "confidence": 38,
   "strengthOfPartners": -1.3,
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
   "leagueRank": 46,
   "rating": 1.3,
   "ratingGames": 16,
   "confidence": 74,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.2,
   "playerId": "22fe1980-7ef9-4026-8c76-a39534431c6b"
  },
  {
   "name": "Manny Lai",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 37,
   "wins": 23,
   "losses": 14,
   "pointsWon": 721,
   "totalPointsAgainst": 675,
   "mixedWins": 11,
   "mixedLosses": 7,
   "genderWins": 12,
   "genderLosses": 7,
   "clutchWins": 10,
   "clutchLosses": 4,
   "winPct": 62.2,
   "diff": 46,
   "ppg": 19.5,
   "leagueRank": 43,
   "rating": 1.5,
   "ratingGames": 37,
   "confidence": 87,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.5,
   "playerId": "f2a53ee2-a602-4e58-8326-6d0624af34af"
  },
  {
   "name": "Chris Long",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 18,
   "losses": 11,
   "pointsWon": 574,
   "totalPointsAgainst": 549,
   "mixedWins": 10,
   "mixedLosses": 5,
   "genderWins": 8,
   "genderLosses": 6,
   "clutchWins": 10,
   "clutchLosses": 6,
   "winPct": 62.1,
   "diff": 25,
   "ppg": 19.8,
   "leagueRank": 45,
   "rating": 1.1,
   "ratingGames": 29,
   "confidence": 84,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": 1,
   "playerId": "f7f6ce2d-1cbb-45f9-ad8f-e42b89b99554"
  },
  {
   "name": "Hector Irizarry",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 13,
   "losses": 8,
   "pointsWon": 397,
   "totalPointsAgainst": 350,
   "mixedWins": 9,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 61.9,
   "diff": 47,
   "ppg": 18.9,
   "leagueRank": 39,
   "rating": 1.3,
   "ratingGames": 21,
   "confidence": 80,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": 0.5,
   "playerId": "a50a69d0-0a8c-4241-b768-846b1591d180"
  },
  {
   "name": "Allison Tarnoff",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro The Factory",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 17,
   "losses": 11,
   "pointsWon": 546,
   "totalPointsAgainst": 511,
   "mixedWins": 8,
   "mixedLosses": 7,
   "genderWins": 9,
   "genderLosses": 4,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 60.7,
   "diff": 35,
   "ppg": 19.5,
   "leagueRank": 54,
   "rating": -0.4,
   "ratingGames": 28,
   "confidence": 84,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -0.2,
   "playerId": "001bf0ea-f8b1-402f-ab07-88ed85b2b510"
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
   "leagueRank": 173,
   "rating": 0.5,
   "ratingGames": 5,
   "confidence": 52,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.7,
   "playerId": "8d896637-2c2a-4541-9155-257bf5a37055"
  },
  {
   "name": "Ross Switkes",
   "gender": "Male",
   "team": "Flemington",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 56,
   "wins": 33,
   "losses": 23,
   "pointsWon": 1066,
   "totalPointsAgainst": 1027,
   "mixedWins": 14,
   "mixedLosses": 14,
   "genderWins": 19,
   "genderLosses": 9,
   "clutchWins": 11,
   "clutchLosses": 8,
   "winPct": 58.9,
   "diff": 39,
   "ppg": 19,
   "leagueRank": 52,
   "rating": 1.3,
   "ratingGames": 56,
   "confidence": 90,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.3,
   "playerId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b"
  },
  {
   "name": "Tyler Arsenault",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 17,
   "losses": 12,
   "pointsWon": 559,
   "totalPointsAgainst": 526,
   "mixedWins": 8,
   "mixedLosses": 5,
   "genderWins": 9,
   "genderLosses": 7,
   "clutchWins": 7,
   "clutchLosses": 6,
   "winPct": 58.6,
   "diff": 33,
   "ppg": 19.3,
   "leagueRank": 47,
   "rating": 2.2,
   "ratingGames": 29,
   "confidence": 84,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 1.1,
   "playerId": "e76d2d63-f7dc-40e7-aca2-d9b3aecf4d3e"
  },
  {
   "name": "Stacy Walkowitz",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 24,
   "losses": 17,
   "pointsWon": 776,
   "totalPointsAgainst": 740,
   "mixedWins": 9,
   "mixedLosses": 11,
   "genderWins": 15,
   "genderLosses": 6,
   "clutchWins": 8,
   "clutchLosses": 6,
   "winPct": 58.5,
   "diff": 36,
   "ppg": 18.9,
   "leagueRank": 56,
   "rating": 0.7,
   "ratingGames": 41,
   "confidence": 88,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.3,
   "playerId": "a19b179a-6a16-43a7-b2af-8d6e8d1a1205"
  },
  {
   "name": "Rachel Alfano",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 21,
   "losses": 15,
   "pointsWon": 692,
   "totalPointsAgainst": 637,
   "mixedWins": 11,
   "mixedLosses": 6,
   "genderWins": 10,
   "genderLosses": 9,
   "clutchWins": 4,
   "clutchLosses": 6,
   "winPct": 58.3,
   "diff": 55,
   "ppg": 19.2,
   "leagueRank": 44,
   "rating": 2,
   "ratingGames": 36,
   "confidence": 87,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.7,
   "playerId": "ce7aca89-06ac-4cd9-8944-a482216ffd58"
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
   "leagueRank": 104,
   "rating": 1.1,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.4,
   "playerId": "6656b9a3-3c47-4711-8609-e35c07c64771"
  },
  {
   "name": "Anisha Malhotra",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 43,
   "wins": 25,
   "losses": 18,
   "pointsWon": 843,
   "totalPointsAgainst": 744,
   "mixedWins": 9,
   "mixedLosses": 13,
   "genderWins": 16,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 12,
   "winPct": 58.1,
   "diff": 99,
   "ppg": 19.6,
   "leagueRank": 42,
   "rating": 1.8,
   "ratingGames": 43,
   "confidence": 88,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.4,
   "playerId": "2aa8b268-8c06-4453-9706-048009bf6af3"
  },
  {
   "name": "Krysti Maronski-Neufeldt",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 31,
   "wins": 18,
   "losses": 13,
   "pointsWon": 606,
   "totalPointsAgainst": 553,
   "mixedWins": 8,
   "mixedLosses": 8,
   "genderWins": 10,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 8,
   "winPct": 58.1,
   "diff": 53,
   "ppg": 19.5,
   "leagueRank": 49,
   "rating": 0.9,
   "ratingGames": 31,
   "confidence": 86,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0,
   "playerId": "29a7f562-a596-421f-a62d-33409169805d"
  },
  {
   "name": "Ali Husain",
   "gender": "Male",
   "team": "Monroe",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 15,
   "losses": 11,
   "pointsWon": 505,
   "totalPointsAgainst": 479,
   "mixedWins": 5,
   "mixedLosses": 8,
   "genderWins": 10,
   "genderLosses": 3,
   "clutchWins": 6,
   "clutchLosses": 3,
   "winPct": 57.7,
   "diff": 26,
   "ppg": 19.4,
   "leagueRank": 50,
   "rating": 0.9,
   "ratingGames": 26,
   "confidence": 84,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.4,
   "playerId": "09d614ca-a9b2-44b6-a402-51046c6883af"
  },
  {
   "name": "Zach Bowe",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 35,
   "wins": 20,
   "losses": 15,
   "pointsWon": 675,
   "totalPointsAgainst": 638,
   "mixedWins": 13,
   "mixedLosses": 6,
   "genderWins": 7,
   "genderLosses": 9,
   "clutchWins": 8,
   "clutchLosses": 4,
   "winPct": 57.1,
   "diff": 37,
   "ppg": 19.3,
   "leagueRank": 55,
   "rating": 0.9,
   "ratingGames": 35,
   "confidence": 86,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.4,
   "playerId": "eebadc3a-5763-4612-9232-d3a98ea188d6"
  },
  {
   "name": "Lissa Eagles",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 48,
   "wins": 27,
   "losses": 21,
   "pointsWon": 896,
   "totalPointsAgainst": 879,
   "mixedWins": 11,
   "mixedLosses": 12,
   "genderWins": 16,
   "genderLosses": 9,
   "clutchWins": 12,
   "clutchLosses": 5,
   "winPct": 56.3,
   "diff": 17,
   "ppg": 18.7,
   "leagueRank": 64,
   "rating": 0.2,
   "ratingGames": 48,
   "confidence": 89,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.2,
   "playerId": "9ec39678-a120-45de-b8a5-897b8cf900cd"
  },
  {
   "name": "Jack Blumberg",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 18,
   "losses": 14,
   "pointsWon": 611,
   "totalPointsAgainst": 602,
   "mixedWins": 10,
   "mixedLosses": 9,
   "genderWins": 8,
   "genderLosses": 5,
   "clutchWins": 9,
   "clutchLosses": 7,
   "winPct": 56.3,
   "diff": 9,
   "ppg": 19.1,
   "leagueRank": 61,
   "rating": -0.1,
   "ratingGames": 32,
   "confidence": 85,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.2,
   "playerId": "f2929b28-a6ee-45e5-9846-da957b6d8734"
  },
  {
   "name": "Damien Stahl",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 11,
   "losses": 9,
   "pointsWon": 373,
   "totalPointsAgainst": 361,
   "mixedWins": 6,
   "mixedLosses": 4,
   "genderWins": 5,
   "genderLosses": 5,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 55,
   "diff": 12,
   "ppg": 18.7,
   "leagueRank": 59,
   "rating": 1.7,
   "ratingGames": 20,
   "confidence": 79,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.8,
   "playerId": "45d2cd6f-4816-46b2-8e17-fab766cdb87e"
  },
  {
   "name": "William Hayes",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 14,
   "losses": 12,
   "pointsWon": 506,
   "totalPointsAgainst": 465,
   "mixedWins": 7,
   "mixedLosses": 7,
   "genderWins": 7,
   "genderLosses": 5,
   "clutchWins": 4,
   "clutchLosses": 7,
   "winPct": 53.8,
   "diff": 41,
   "ppg": 19.5,
   "leagueRank": 53,
   "rating": 1,
   "ratingGames": 26,
   "confidence": 82,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.3,
   "playerId": "4dfed1a1-5375-446c-98bc-69402e70e1d5"
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
   "leagueRank": 68,
   "rating": 1,
   "ratingGames": 26,
   "confidence": 83,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.9,
   "playerId": "bc881ebc-7a42-43be-b1b2-9c29c59a4132"
  },
  {
   "name": "Patrick Ryan",
   "gender": "Male",
   "team": "Flemington",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 56,
   "wins": 30,
   "losses": 26,
   "pointsWon": 1049,
   "totalPointsAgainst": 1048,
   "mixedWins": 13,
   "mixedLosses": 15,
   "genderWins": 17,
   "genderLosses": 11,
   "clutchWins": 11,
   "clutchLosses": 13,
   "winPct": 53.6,
   "diff": 1,
   "ppg": 18.7,
   "leagueRank": 65,
   "rating": 0.9,
   "ratingGames": 56,
   "confidence": 91,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.3,
   "playerId": "8344fbda-35c2-4ce0-94ad-158090d2d5ba"
  },
  {
   "name": "Suzi Battison",
   "gender": "Female",
   "team": "Flemington",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 16,
   "losses": 14,
   "pointsWon": 571,
   "totalPointsAgainst": 554,
   "mixedWins": 8,
   "mixedLosses": 8,
   "genderWins": 8,
   "genderLosses": 6,
   "clutchWins": 4,
   "clutchLosses": 8,
   "winPct": 53.3,
   "diff": 17,
   "ppg": 19,
   "leagueRank": 60,
   "rating": 2.1,
   "ratingGames": 30,
   "confidence": 85,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.7,
   "playerId": "40579892-d9bf-4d1d-9417-5830d5d45093"
  },
  {
   "name": "Mark Kilimnik",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 17,
   "losses": 15,
   "pointsWon": 619,
   "totalPointsAgainst": 588,
   "mixedWins": 5,
   "mixedLosses": 10,
   "genderWins": 12,
   "genderLosses": 5,
   "clutchWins": 6,
   "clutchLosses": 6,
   "winPct": 53.1,
   "diff": 31,
   "ppg": 19.3,
   "leagueRank": 57,
   "rating": 1.5,
   "ratingGames": 32,
   "confidence": 86,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.6,
   "playerId": "d6c15f91-4cc9-4612-8ec3-8f4ebd4e0cc1"
  },
  {
   "name": "Chris Damato",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 18,
   "losses": 16,
   "pointsWon": 629,
   "totalPointsAgainst": 639,
   "mixedWins": 11,
   "mixedLosses": 5,
   "genderWins": 7,
   "genderLosses": 11,
   "clutchWins": 7,
   "clutchLosses": 2,
   "winPct": 52.9,
   "diff": -10,
   "ppg": 18.5,
   "leagueRank": 77,
   "rating": -0.9,
   "ratingGames": 34,
   "confidence": 86,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.1,
   "playerId": "445e89c8-a23c-440c-bd3c-7eab366bdd85"
  },
  {
   "name": "Sidd Pathare",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 44,
   "wins": 23,
   "losses": 21,
   "pointsWon": 839,
   "totalPointsAgainst": 807,
   "mixedWins": 13,
   "mixedLosses": 8,
   "genderWins": 10,
   "genderLosses": 13,
   "clutchWins": 6,
   "clutchLosses": 10,
   "winPct": 52.3,
   "diff": 32,
   "ppg": 19.1,
   "leagueRank": 67,
   "rating": -0.7,
   "ratingGames": 44,
   "confidence": 88,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.2,
   "playerId": "a73f249d-c1c9-4516-bc79-e9732581f098"
  },
  {
   "name": "Harriet Levin",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 44,
   "wins": 23,
   "losses": 21,
   "pointsWon": 806,
   "totalPointsAgainst": 815,
   "mixedWins": 13,
   "mixedLosses": 9,
   "genderWins": 10,
   "genderLosses": 12,
   "clutchWins": 9,
   "clutchLosses": 7,
   "winPct": 52.3,
   "diff": -9,
   "ppg": 18.3,
   "leagueRank": 76,
   "rating": -0.2,
   "ratingGames": 44,
   "confidence": 89,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.6,
   "playerId": "aeff8297-a479-4b3b-9a49-72c410ac8e26"
  },
  {
   "name": "Nathan Law",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 50,
   "wins": 26,
   "losses": 24,
   "pointsWon": 925,
   "totalPointsAgainst": 939,
   "mixedWins": 10,
   "mixedLosses": 14,
   "genderWins": 16,
   "genderLosses": 10,
   "clutchWins": 11,
   "clutchLosses": 6,
   "winPct": 52,
   "diff": -14,
   "ppg": 18.5,
   "leagueRank": 75,
   "rating": -0.9,
   "ratingGames": 51,
   "confidence": 90,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.4,
   "playerId": "3c81d27f-9e68-439b-a476-f5ac1a54f45a"
  },
  {
   "name": "Ruhi Shah",
   "gender": "Female",
   "team": "Monroe",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 64,
   "wins": 33,
   "losses": 31,
   "pointsWon": 1204,
   "totalPointsAgainst": 1193,
   "mixedWins": 20,
   "mixedLosses": 12,
   "genderWins": 13,
   "genderLosses": 19,
   "clutchWins": 12,
   "clutchLosses": 14,
   "winPct": 51.6,
   "diff": 11,
   "ppg": 18.8,
   "leagueRank": 63,
   "rating": 2.5,
   "ratingGames": 64,
   "confidence": 91,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 1.1,
   "playerId": "a2d56e71-3895-4316-9e9e-17565fb62295"
  },
  {
   "name": "Charlotte Healey",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 20,
   "losses": 19,
   "pointsWon": 740,
   "totalPointsAgainst": 712,
   "mixedWins": 11,
   "mixedLosses": 12,
   "genderWins": 9,
   "genderLosses": 7,
   "clutchWins": 5,
   "clutchLosses": 6,
   "winPct": 51.3,
   "diff": 28,
   "ppg": 19,
   "leagueRank": 66,
   "rating": -0.1,
   "ratingGames": 39,
   "confidence": 87,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0,
   "playerId": "bbaf3def-a87b-4537-8701-4f5ae0108b1f"
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
   "leagueRank": 163,
   "rating": 1.8,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.2,
   "playerId": "661f7bd0-74d3-432b-acc7-da0e3b3e36ea"
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
   "leagueRank": 106,
   "rating": 0.2,
   "ratingGames": 18,
   "confidence": 78,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.1,
   "playerId": "32ac3308-4ddd-496b-8942-ca2422322c06"
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
   "leagueRank": 111,
   "rating": -0.4,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.2,
   "playerId": "a89121dd-192b-486d-b39d-18ee8447d641"
  },
  {
   "name": "Maeve Mcgowan",
   "gender": "Female",
   "team": "Jersey Devil",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 9,
   "losses": 9,
   "pointsWon": 339,
   "totalPointsAgainst": 338,
   "mixedWins": 5,
   "mixedLosses": 7,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": 1,
   "ppg": 18.8,
   "leagueRank": 72,
   "rating": 0.9,
   "ratingGames": 18,
   "confidence": 79,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.5,
   "playerId": "24325b7a-50bd-42dc-84c2-e3ac54360f9c"
  },
  {
   "name": "Clayton Schmucker",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro The Factory",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 114,
   "totalPointsAgainst": 114,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": 0,
   "ppg": 19,
   "leagueRank": 170,
   "rating": 0,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.4,
   "playerId": "0be72348-4a00-413e-bf40-df6824c3cca3"
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
   "leagueRank": 144,
   "rating": -2,
   "ratingGames": 12,
   "confidence": 71,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": -0.5,
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
   "leagueRank": 175,
   "rating": -0.1,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -0.1,
   "playerId": "9638b474-ad68-4eff-a5a5-6c40db6ed4bb"
  },
  {
   "name": "Tessa Arendt",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 115,
   "totalPointsAgainst": 119,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 50,
   "diff": -4,
   "ppg": 19.2,
   "leagueRank": 172,
   "rating": -1.4,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.5,
   "playerId": "78d27fdd-25fb-4fe7-8f3e-9ff1f67fb2bc"
  },
  {
   "name": "Michelle Quach",
   "gender": "Female",
   "team": "Jersey Devil",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 14,
   "losses": 14,
   "pointsWon": 530,
   "totalPointsAgainst": 536,
   "mixedWins": 6,
   "mixedLosses": 8,
   "genderWins": 8,
   "genderLosses": 6,
   "clutchWins": 5,
   "clutchLosses": 5,
   "winPct": 50,
   "diff": -6,
   "ppg": 18.9,
   "leagueRank": 74,
   "rating": 0.5,
   "ratingGames": 28,
   "confidence": 83,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.5,
   "playerId": "5f0dcbe9-bb0e-496d-99d2-06f01ff2c77b"
  },
  {
   "name": "Joseph Zee",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 144,
   "totalPointsAgainst": 151,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": -7,
   "ppg": 18,
   "leagueRank": 171,
   "rating": 0.4,
   "ratingGames": 8,
   "confidence": 62,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 1.3,
   "playerId": "2026ccb7-bd78-4bb5-96de-9d0127fdd954"
  },
  {
   "name": "Katie Lazaar",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 105,
   "totalPointsAgainst": 113,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 50,
   "diff": -8,
   "ppg": 17.5,
   "leagueRank": 174,
   "rating": 0.1,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 1,
   "playerId": "0bed64f0-b72a-4d63-8d44-347635f58bae"
  },
  {
   "name": "Megan Harvey",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 45,
   "wins": 22,
   "losses": 23,
   "pointsWon": 816,
   "totalPointsAgainst": 815,
   "mixedWins": 10,
   "mixedLosses": 10,
   "genderWins": 12,
   "genderLosses": 13,
   "clutchWins": 6,
   "clutchLosses": 9,
   "winPct": 48.9,
   "diff": 1,
   "ppg": 18.1,
   "leagueRank": 87,
   "rating": -0.7,
   "ratingGames": 45,
   "confidence": 89,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0,
   "playerId": "4d576bb5-e9e5-4ad1-a18f-022508c6a161"
  },
  {
   "name": "Zachary Lessner",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 18,
   "losses": 19,
   "pointsWon": 673,
   "totalPointsAgainst": 698,
   "mixedWins": 7,
   "mixedLosses": 11,
   "genderWins": 11,
   "genderLosses": 8,
   "clutchWins": 9,
   "clutchLosses": 6,
   "winPct": 48.6,
   "diff": -25,
   "ppg": 18.2,
   "leagueRank": 91,
   "rating": -0.4,
   "ratingGames": 37,
   "confidence": 87,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.6,
   "playerId": "2ce5ebef-8079-4871-8d2e-b34988abbaad"
  },
  {
   "name": "Rachel Berger",
   "gender": "Female",
   "team": "Jersey Devil",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 18,
   "losses": 19,
   "pointsWon": 677,
   "totalPointsAgainst": 706,
   "mixedWins": 5,
   "mixedLosses": 12,
   "genderWins": 13,
   "genderLosses": 7,
   "clutchWins": 9,
   "clutchLosses": 5,
   "winPct": 48.6,
   "diff": -29,
   "ppg": 18.3,
   "leagueRank": 94,
   "rating": -0.6,
   "ratingGames": 37,
   "confidence": 87,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.1,
   "playerId": "9b7488c5-bc66-41e4-8fa5-873e70c190e3"
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
   "leagueRank": 98,
   "rating": -0.7,
   "ratingGames": 37,
   "confidence": 87,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.1,
   "playerId": "aa0d9944-a9d3-46d5-8650-54e894adfeb2"
  },
  {
   "name": "Elysia Price",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 33,
   "wins": 16,
   "losses": 17,
   "pointsWon": 607,
   "totalPointsAgainst": 624,
   "mixedWins": 7,
   "mixedLosses": 9,
   "genderWins": 9,
   "genderLosses": 8,
   "clutchWins": 6,
   "clutchLosses": 6,
   "winPct": 48.5,
   "diff": -17,
   "ppg": 18.4,
   "leagueRank": 86,
   "rating": -0.4,
   "ratingGames": 33,
   "confidence": 86,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.5,
   "playerId": "a0ca4338-b610-4630-9f41-8dfd380e1af7"
  },
  {
   "name": "Nathan Malhotra",
   "gender": "Male",
   "team": "Home Court",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 13,
   "losses": 14,
   "pointsWon": 495,
   "totalPointsAgainst": 488,
   "mixedWins": 7,
   "mixedLosses": 8,
   "genderWins": 6,
   "genderLosses": 6,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 48.1,
   "diff": 7,
   "ppg": 18.3,
   "leagueRank": 70,
   "rating": 1.7,
   "ratingGames": 27,
   "confidence": 84,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.8,
   "playerId": "98bd685a-3161-45fc-941f-3a8c9f4849cf"
  },
  {
   "name": "Alex Boory",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 13,
   "losses": 14,
   "pointsWon": 499,
   "totalPointsAgainst": 522,
   "mixedWins": 8,
   "mixedLosses": 11,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 6,
   "clutchLosses": 4,
   "winPct": 48.1,
   "diff": -23,
   "ppg": 18.5,
   "leagueRank": 90,
   "rating": -0.5,
   "ratingGames": 28,
   "confidence": 84,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.2,
   "playerId": "897f1edf-63f3-4eec-bcf5-d5a1bf0be859"
  },
  {
   "name": "Jason Makarevic",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 44,
   "wins": 21,
   "losses": 23,
   "pointsWon": 829,
   "totalPointsAgainst": 831,
   "mixedWins": 10,
   "mixedLosses": 13,
   "genderWins": 11,
   "genderLosses": 10,
   "clutchWins": 11,
   "clutchLosses": 11,
   "winPct": 47.7,
   "diff": -2,
   "ppg": 18.8,
   "leagueRank": 82,
   "rating": -0.6,
   "ratingGames": 44,
   "confidence": 88,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.4,
   "playerId": "f8835822-da21-4593-8b99-5665d2c2f3af"
  },
  {
   "name": "Austin Williams",
   "gender": "Male",
   "team": "Home Court",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 38,
   "wins": 18,
   "losses": 20,
   "pointsWon": 715,
   "totalPointsAgainst": 703,
   "mixedWins": 7,
   "mixedLosses": 12,
   "genderWins": 11,
   "genderLosses": 8,
   "clutchWins": 5,
   "clutchLosses": 7,
   "winPct": 47.4,
   "diff": 12,
   "ppg": 18.8,
   "leagueRank": 71,
   "rating": 0.7,
   "ratingGames": 38,
   "confidence": 87,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.2,
   "playerId": "bb0bdc33-be20-4a45-9de9-0a52a88d7af9"
  },
  {
   "name": "Shreyas Pani",
   "gender": "Male",
   "team": "Monroe",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 57,
   "wins": 27,
   "losses": 30,
   "pointsWon": 1049,
   "totalPointsAgainst": 1076,
   "mixedWins": 12,
   "mixedLosses": 17,
   "genderWins": 15,
   "genderLosses": 13,
   "clutchWins": 11,
   "clutchLosses": 12,
   "winPct": 47.4,
   "diff": -27,
   "ppg": 18.4,
   "leagueRank": 83,
   "rating": 0.9,
   "ratingGames": 57,
   "confidence": 91,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.8,
   "playerId": "3cebd01c-ff32-4544-b6a6-2a68152b2ee5"
  },
  {
   "name": "Sarah Kline",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 15,
   "losses": 17,
   "pointsWon": 578,
   "totalPointsAgainst": 576,
   "mixedWins": 7,
   "mixedLosses": 8,
   "genderWins": 8,
   "genderLosses": 9,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 46.9,
   "diff": 2,
   "ppg": 18.1,
   "leagueRank": 88,
   "rating": 0.1,
   "ratingGames": 32,
   "confidence": 86,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.7,
   "playerId": "b122f262-f81d-4fb2-9f11-c473d18a4260"
  },
  {
   "name": "Melissa Dardani",
   "gender": "Female",
   "team": "Flemington",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 47,
   "wins": 22,
   "losses": 25,
   "pointsWon": 850,
   "totalPointsAgainst": 880,
   "mixedWins": 13,
   "mixedLosses": 11,
   "genderWins": 9,
   "genderLosses": 14,
   "clutchWins": 4,
   "clutchLosses": 11,
   "winPct": 46.8,
   "diff": -30,
   "ppg": 18.1,
   "leagueRank": 97,
   "rating": -0.5,
   "ratingGames": 47,
   "confidence": 89,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0,
   "playerId": "ef423f8a-5c2c-4a12-9f37-b41ff6d6c530"
  },
  {
   "name": "Johny Mario",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 13,
   "losses": 15,
   "pointsWon": 505,
   "totalPointsAgainst": 520,
   "mixedWins": 7,
   "mixedLosses": 6,
   "genderWins": 6,
   "genderLosses": 9,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 46.4,
   "diff": -15,
   "ppg": 18,
   "leagueRank": 101,
   "rating": -0.7,
   "ratingGames": 28,
   "confidence": 84,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.3,
   "playerId": "831c9fae-38c6-4961-8664-634087f5f2f9"
  },
  {
   "name": "Mickey Cook",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 19,
   "losses": 22,
   "pointsWon": 762,
   "totalPointsAgainst": 770,
   "mixedWins": 14,
   "mixedLosses": 9,
   "genderWins": 5,
   "genderLosses": 13,
   "clutchWins": 7,
   "clutchLosses": 8,
   "winPct": 46.3,
   "diff": -8,
   "ppg": 18.6,
   "leagueRank": 92,
   "rating": -0.7,
   "ratingGames": 41,
   "confidence": 88,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0,
   "playerId": "3babc519-f395-4ef7-8f6f-b38d25c139d0"
  },
  {
   "name": "Jennifer Sanchez",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 26,
   "wins": 12,
   "losses": 14,
   "pointsWon": 471,
   "totalPointsAgainst": 478,
   "mixedWins": 5,
   "mixedLosses": 6,
   "genderWins": 7,
   "genderLosses": 8,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 46.2,
   "diff": -7,
   "ppg": 18.1,
   "leagueRank": 95,
   "rating": -0.3,
   "ratingGames": 26,
   "confidence": 84,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.6,
   "playerId": "061121d0-5d0a-4c01-9d8e-dced99d6d82d"
  },
  {
   "name": "Angela Luo",
   "gender": "Female",
   "team": "Monroe",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 11,
   "losses": 13,
   "pointsWon": 443,
   "totalPointsAgainst": 452,
   "mixedWins": 6,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 10,
   "clutchWins": 5,
   "clutchLosses": 6,
   "winPct": 45.8,
   "diff": -9,
   "ppg": 18.5,
   "leagueRank": 80,
   "rating": 0.5,
   "ratingGames": 24,
   "confidence": 82,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.5,
   "playerId": "0cb538a5-0d5d-47a7-b854-38394ac9652f"
  },
  {
   "name": "Shashank Kamdar",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 21,
   "losses": 25,
   "pointsWon": 875,
   "totalPointsAgainst": 834,
   "mixedWins": 9,
   "mixedLosses": 15,
   "genderWins": 12,
   "genderLosses": 10,
   "clutchWins": 5,
   "clutchLosses": 11,
   "winPct": 45.7,
   "diff": 41,
   "ppg": 19,
   "leagueRank": 73,
   "rating": 0.6,
   "ratingGames": 46,
   "confidence": 89,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.4,
   "playerId": "56db4b56-6166-437f-8ece-26576b7042e5"
  },
  {
   "name": "Caleb Perry-Abner",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 31,
   "wins": 14,
   "losses": 17,
   "pointsWon": 569,
   "totalPointsAgainst": 597,
   "mixedWins": 7,
   "mixedLosses": 9,
   "genderWins": 7,
   "genderLosses": 8,
   "clutchWins": 6,
   "clutchLosses": 7,
   "winPct": 45.2,
   "diff": -28,
   "ppg": 18.4,
   "leagueRank": 100,
   "rating": -0.1,
   "ratingGames": 31,
   "confidence": 85,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.4,
   "playerId": "c25e04ae-a9bf-4943-858d-5b7a94261e43"
  },
  {
   "name": "Thomas Connolly",
   "gender": "Male",
   "team": "Flemington",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 56,
   "wins": 25,
   "losses": 31,
   "pointsWon": 980,
   "totalPointsAgainst": 1065,
   "mixedWins": 12,
   "mixedLosses": 16,
   "genderWins": 13,
   "genderLosses": 15,
   "clutchWins": 11,
   "clutchLosses": 9,
   "winPct": 44.6,
   "diff": -85,
   "ppg": 17.5,
   "leagueRank": 112,
   "rating": -1.4,
   "ratingGames": 56,
   "confidence": 91,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.2,
   "playerId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3"
  },
  {
   "name": "Camrin Cronheim",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 45,
   "wins": 20,
   "losses": 25,
   "pointsWon": 858,
   "totalPointsAgainst": 835,
   "mixedWins": 13,
   "mixedLosses": 11,
   "genderWins": 7,
   "genderLosses": 14,
   "clutchWins": 5,
   "clutchLosses": 15,
   "winPct": 44.4,
   "diff": 23,
   "ppg": 19.1,
   "leagueRank": 78,
   "rating": 0.1,
   "ratingGames": 45,
   "confidence": 89,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.1,
   "playerId": "8143def5-d564-4010-8258-ccb71cd481f1"
  },
  {
   "name": "Brittany Hall",
   "gender": "Female",
   "team": "ACE Moorestown",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 16,
   "losses": 20,
   "pointsWon": 642,
   "totalPointsAgainst": 678,
   "mixedWins": 9,
   "mixedLosses": 11,
   "genderWins": 7,
   "genderLosses": 9,
   "clutchWins": 9,
   "clutchLosses": 7,
   "winPct": 44.4,
   "diff": -36,
   "ppg": 17.8,
   "leagueRank": 109,
   "rating": 0.1,
   "ratingGames": 37,
   "confidence": 88,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.8,
   "playerId": "17cc768d-f6c8-484c-814e-063d17cec72f"
  },
  {
   "name": "Anthony Ursino",
   "gender": "Male",
   "team": "Monroe",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 16,
   "losses": 20,
   "pointsWon": 656,
   "totalPointsAgainst": 695,
   "mixedWins": 9,
   "mixedLosses": 13,
   "genderWins": 7,
   "genderLosses": 7,
   "clutchWins": 6,
   "clutchLosses": 8,
   "winPct": 44.4,
   "diff": -39,
   "ppg": 18.2,
   "leagueRank": 103,
   "rating": -0.3,
   "ratingGames": 36,
   "confidence": 87,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.2,
   "playerId": "1406ff1f-3597-4128-a629-7dfd1dfe1323"
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
   "leagueRank": 180,
   "rating": 0.3,
   "ratingGames": 7,
   "confidence": 59,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 1.7,
   "playerId": "3cd8477e-8352-44a7-916f-ac2e3c3005f2"
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
   "leagueRank": 139,
   "rating": -0.4,
   "ratingGames": 14,
   "confidence": 73,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 0.3,
   "playerId": "2d602f38-7eda-4a7b-a3a2-98b40e443b79"
  },
  {
   "name": "Matthew Matro",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 8,
   "losses": 11,
   "pointsWon": 346,
   "totalPointsAgainst": 348,
   "mixedWins": 6,
   "mixedLosses": 6,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 42.1,
   "diff": -2,
   "ppg": 18.2,
   "leagueRank": 105,
   "rating": -0.6,
   "ratingGames": 19,
   "confidence": 79,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0,
   "playerId": "7b2e1bed-f387-48de-a028-bdde357bb3af"
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
   "leagueRank": 154,
   "rating": -2.5,
   "ratingGames": 12,
   "confidence": 70,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": -0.6,
   "playerId": "f4b44cd7-fc9a-41a2-b569-cdaf08b0bf26"
  },
  {
   "name": "Elisangela Harrington",
   "gender": "Female",
   "team": "Flemington",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 10,
   "losses": 14,
   "pointsWon": 439,
   "totalPointsAgainst": 461,
   "mixedWins": 7,
   "mixedLosses": 5,
   "genderWins": 3,
   "genderLosses": 9,
   "clutchWins": 5,
   "clutchLosses": 7,
   "winPct": 41.7,
   "diff": -22,
   "ppg": 18.3,
   "leagueRank": 108,
   "rating": -0.5,
   "ratingGames": 24,
   "confidence": 82,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": -0.1,
   "playerId": "55bbe71c-1181-4875-b16d-f121f3a133e0"
  },
  {
   "name": "Amanda Ksiezopolski",
   "gender": "Female",
   "team": "Monroe",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 10,
   "losses": 14,
   "pointsWon": 423,
   "totalPointsAgainst": 463,
   "mixedWins": 5,
   "mixedLosses": 5,
   "genderWins": 5,
   "genderLosses": 9,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 41.7,
   "diff": -40,
   "ppg": 17.6,
   "leagueRank": 116,
   "rating": -1.4,
   "ratingGames": 24,
   "confidence": 81,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.3,
   "playerId": "2138af89-34bc-4ee2-9955-ff16f0997031"
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
   "leagueRank": 115,
   "rating": -0.2,
   "ratingGames": 24,
   "confidence": 82,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.9,
   "playerId": "317f260e-551b-4f91-ab92-71440e5f05be"
  },
  {
   "name": "Nam Barsh",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 14,
   "losses": 20,
   "pointsWon": 604,
   "totalPointsAgainst": 616,
   "mixedWins": 7,
   "mixedLosses": 9,
   "genderWins": 7,
   "genderLosses": 11,
   "clutchWins": 4,
   "clutchLosses": 7,
   "winPct": 41.2,
   "diff": -12,
   "ppg": 17.8,
   "leagueRank": 110,
   "rating": -0.1,
   "ratingGames": 34,
   "confidence": 86,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.6,
   "playerId": "fa43af77-3cd1-4e61-a8dc-bd714b65d517"
  },
  {
   "name": "Lauren Mercado",
   "gender": "Female",
   "team": "Jersey Devil",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 9,
   "losses": 13,
   "pointsWon": 367,
   "totalPointsAgainst": 428,
   "mixedWins": 1,
   "mixedLosses": 7,
   "genderWins": 8,
   "genderLosses": 6,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 40.9,
   "diff": -61,
   "ppg": 16.7,
   "leagueRank": 140,
   "rating": -3.1,
   "ratingGames": 22,
   "confidence": 81,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.5,
   "playerId": "0aa554f3-0eca-4f2d-b3d9-b277406a7435"
  },
  {
   "name": "Dilan Shah",
   "gender": "Male",
   "team": "Monroe",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 49,
   "wins": 20,
   "losses": 29,
   "pointsWon": 888,
   "totalPointsAgainst": 947,
   "mixedWins": 5,
   "mixedLosses": 13,
   "genderWins": 15,
   "genderLosses": 16,
   "clutchWins": 9,
   "clutchLosses": 11,
   "winPct": 40.8,
   "diff": -59,
   "ppg": 18.1,
   "leagueRank": 113,
   "rating": -2.2,
   "ratingGames": 49,
   "confidence": 90,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0.2,
   "playerId": "91d23f87-e0fc-4448-890e-c3abd96c70b4"
  },
  {
   "name": "Jen Vorel",
   "gender": "Female",
   "team": "Home Court",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 8,
   "losses": 12,
   "pointsWon": 372,
   "totalPointsAgainst": 367,
   "mixedWins": 5,
   "mixedLosses": 5,
   "genderWins": 3,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 40,
   "diff": 5,
   "ppg": 18.6,
   "leagueRank": 96,
   "rating": -0.3,
   "ratingGames": 20,
   "confidence": 79,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.3,
   "playerId": "f9c1683f-9cc2-4b5d-aa29-f90e5102e687"
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
   "leagueRank": 186,
   "rating": -0.5,
   "ratingGames": 5,
   "confidence": 49,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.9,
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
   "leagueRank": 130,
   "rating": -1.2,
   "ratingGames": 15,
   "confidence": 74,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": -0.8,
   "playerId": "2b001a36-d13c-42fa-ae50-c9cc2f1aeb4e"
  },
  {
   "name": "Julia Sternberg",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 12,
   "losses": 18,
   "pointsWon": 535,
   "totalPointsAgainst": 582,
   "mixedWins": 9,
   "mixedLosses": 10,
   "genderWins": 3,
   "genderLosses": 8,
   "clutchWins": 5,
   "clutchLosses": 7,
   "winPct": 40,
   "diff": -47,
   "ppg": 17.8,
   "leagueRank": 117,
   "rating": -1.1,
   "ratingGames": 30,
   "confidence": 85,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.7,
   "playerId": "ccd8a76f-df3a-4ab9-97b6-bae0f860a431"
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
   "leagueRank": 122,
   "rating": -0.3,
   "ratingGames": 38,
   "confidence": 87,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.8,
   "playerId": "6035850e-af27-40db-bb81-f5787f344871"
  },
  {
   "name": "Robbie Oddy",
   "gender": "Male",
   "team": "Flemington",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 56,
   "wins": 22,
   "losses": 34,
   "pointsWon": 1026,
   "totalPointsAgainst": 1059,
   "mixedWins": 11,
   "mixedLosses": 17,
   "genderWins": 11,
   "genderLosses": 17,
   "clutchWins": 7,
   "clutchLosses": 14,
   "winPct": 39.3,
   "diff": -33,
   "ppg": 18.3,
   "leagueRank": 102,
   "rating": 1.1,
   "ratingGames": 56,
   "confidence": 91,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.6,
   "playerId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6"
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
   "leagueRank": 121,
   "rating": -1.3,
   "ratingGames": 23,
   "confidence": 81,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.1,
   "playerId": "b5e576e1-d16d-4c9d-ab28-2e1b1e66487b"
  },
  {
   "name": "Richa Shah",
   "gender": "Female",
   "team": "Monroe",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 50,
   "wins": 19,
   "losses": 31,
   "pointsWon": 893,
   "totalPointsAgainst": 971,
   "mixedWins": 13,
   "mixedLosses": 18,
   "genderWins": 6,
   "genderLosses": 13,
   "clutchWins": 7,
   "clutchLosses": 11,
   "winPct": 38,
   "diff": -78,
   "ppg": 17.9,
   "leagueRank": 119,
   "rating": -0.6,
   "ratingGames": 50,
   "confidence": 90,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.8,
   "playerId": "6b80047c-ca16-4506-a2a4-ed894dc0c37f"
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
   "leagueRank": 182,
   "rating": 0.3,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.2,
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
   "leagueRank": 99,
   "rating": 1.7,
   "ratingGames": 24,
   "confidence": 81,
   "strengthOfPartners": -0.9,
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
   "leagueRank": 185,
   "rating": -0.4,
   "ratingGames": 8,
   "confidence": 38,
   "strengthOfPartners": -1.9,
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
   "leagueRank": 187,
   "rating": -0.8,
   "ratingGames": 8,
   "confidence": 60,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.1,
   "playerId": "30cb78cb-f962-40f9-bd02-78d336920431"
  },
  {
   "name": "Raneeta Sawhney-Rigby",
   "gender": "Female",
   "team": "Home Court",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 7,
   "losses": 12,
   "pointsWon": 328,
   "totalPointsAgainst": 362,
   "mixedWins": 4,
   "mixedLosses": 5,
   "genderWins": 3,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 36.8,
   "diff": -34,
   "ppg": 17.3,
   "leagueRank": 124,
   "rating": -0.8,
   "ratingGames": 19,
   "confidence": 77,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.2,
   "playerId": "8ee2191e-34c1-4f6b-b366-5a1bbc5bcb36"
  },
  {
   "name": "Susan Ackley",
   "gender": "Female",
   "team": "Flemington",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 14,
   "losses": 24,
   "pointsWon": 664,
   "totalPointsAgainst": 743,
   "mixedWins": 10,
   "mixedLosses": 8,
   "genderWins": 4,
   "genderLosses": 16,
   "clutchWins": 6,
   "clutchLosses": 7,
   "winPct": 36.8,
   "diff": -79,
   "ppg": 17.5,
   "leagueRank": 127,
   "rating": -1.3,
   "ratingGames": 38,
   "confidence": 87,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.4,
   "playerId": "07a0e948-6308-4920-a6a8-1d5945552ecb"
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
   "leagueRank": 169,
   "rating": -1.2,
   "ratingGames": 11,
   "confidence": 69,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0,
   "playerId": "e121745d-7833-45f1-965b-67653bd4751e"
  },
  {
   "name": "Garv Singhal",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 5,
   "losses": 9,
   "pointsWon": 250,
   "totalPointsAgainst": 258,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 35.7,
   "diff": -8,
   "ppg": 17.9,
   "leagueRank": 138,
   "rating": 0.6,
   "ratingGames": 14,
   "confidence": 74,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 1.1,
   "playerId": "c89e87b8-33ef-49fe-81fb-59fa5b49e93a"
  },
  {
   "name": "Ryan Rosen",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro Aces",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 13,
   "losses": 24,
   "pointsWon": 648,
   "totalPointsAgainst": 725,
   "mixedWins": 6,
   "mixedLosses": 11,
   "genderWins": 7,
   "genderLosses": 13,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 35.1,
   "diff": -77,
   "ppg": 17.5,
   "leagueRank": 123,
   "rating": 0,
   "ratingGames": 37,
   "confidence": 87,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.5,
   "playerId": "97f2b250-2030-4296-be61-63cffb17043b"
  },
  {
   "name": "Matthew Chen",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 9,
   "losses": 17,
   "pointsWon": 431,
   "totalPointsAgainst": 499,
   "mixedWins": 3,
   "mixedLosses": 8,
   "genderWins": 6,
   "genderLosses": 9,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 34.6,
   "diff": -68,
   "ppg": 16.6,
   "leagueRank": 146,
   "rating": -1.8,
   "ratingGames": 26,
   "confidence": 84,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.5,
   "playerId": "68e9ac74-5119-4dbb-8503-72bcdbade183"
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
   "leagueRank": 191,
   "rating": -1.4,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": -1.2,
   "playerId": "24e70ef7-b98e-459e-8a19-19a2b66a054e"
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
   "leagueRank": 192,
   "rating": -1.3,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": -0.1,
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
   "leagueRank": 114,
   "rating": -0.1,
   "ratingGames": 36,
   "confidence": 87,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": -0.1,
   "playerId": "25aa47d0-76b8-48be-a5be-b1d33b423e82"
  },
  {
   "name": "Joel Phillips",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro The Factory",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 4,
   "losses": 8,
   "pointsWon": 198,
   "totalPointsAgainst": 225,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 33.3,
   "diff": -27,
   "ppg": 16.5,
   "leagueRank": 164,
   "rating": -2.4,
   "ratingGames": 12,
   "confidence": 71,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.5,
   "playerId": "8f292eb8-a014-4618-9c0e-114c26463233"
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
   "leagueRank": 193,
   "rating": 0.4,
   "ratingGames": 12,
   "confidence": 71,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 1.9,
   "playerId": "00092e4b-b019-43ae-bfef-503e1fc6f657"
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
   "leagueRank": 176,
   "rating": -2.3,
   "ratingGames": 12,
   "confidence": 71,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.1,
   "playerId": "839ee2ac-03d5-4fee-bc87-08709afae5f2"
  },
  {
   "name": "Adam Beck",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro Aces",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 8,
   "losses": 17,
   "pointsWon": 424,
   "totalPointsAgainst": 489,
   "mixedWins": 5,
   "mixedLosses": 11,
   "genderWins": 3,
   "genderLosses": 6,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 32,
   "diff": -65,
   "ppg": 17,
   "leagueRank": 132,
   "rating": -0.1,
   "ratingGames": 25,
   "confidence": 82,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 0.4,
   "playerId": "7d836ecc-e553-4966-9c12-2dc698a545d0"
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
   "leagueRank": 131,
   "rating": -0.8,
   "ratingGames": 22,
   "confidence": 81,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.4,
   "playerId": "1a851b17-0445-4807-b476-575fd261f774"
  },
  {
   "name": "Kelly Arvidson",
   "gender": "Female",
   "team": "Flemington",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 44,
   "wins": 14,
   "losses": 30,
   "pointsWon": 746,
   "totalPointsAgainst": 869,
   "mixedWins": 9,
   "mixedLosses": 13,
   "genderWins": 5,
   "genderLosses": 17,
   "clutchWins": 6,
   "clutchLosses": 8,
   "winPct": 31.8,
   "diff": -123,
   "ppg": 17,
   "leagueRank": 148,
   "rating": -2.4,
   "ratingGames": 44,
   "confidence": 89,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0,
   "playerId": "c053f5d6-16e1-4847-b27b-49fe41f367c6"
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
   "leagueRank": 126,
   "rating": -0.6,
   "ratingGames": 29,
   "confidence": 83,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.2,
   "playerId": "06edda3d-3a1f-4010-86fa-8ac767cd7079"
  },
  {
   "name": "Dipen Bhatt",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 9,
   "losses": 20,
   "pointsWon": 519,
   "totalPointsAgainst": 572,
   "mixedWins": 6,
   "mixedLosses": 8,
   "genderWins": 3,
   "genderLosses": 12,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 31,
   "diff": -53,
   "ppg": 17.9,
   "leagueRank": 136,
   "rating": -2.2,
   "ratingGames": 29,
   "confidence": 84,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0,
   "playerId": "fe8af1d3-ff62-430d-90af-32794cc7b912"
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
   "leagueRank": 143,
   "rating": -2.2,
   "ratingGames": 29,
   "confidence": 84,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.1,
   "playerId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae"
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
   "leagueRank": 133,
   "rating": -1.4,
   "ratingGames": 26,
   "confidence": 82,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.3,
   "playerId": "f64f0cc2-6c82-4fe4-9992-747512700971"
  },
  {
   "name": "Sara Synn",
   "gender": "Female",
   "team": "Monroe",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 8,
   "losses": 18,
   "pointsWon": 431,
   "totalPointsAgainst": 510,
   "mixedWins": 6,
   "mixedLosses": 7,
   "genderWins": 2,
   "genderLosses": 11,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 30.8,
   "diff": -79,
   "ppg": 16.6,
   "leagueRank": 151,
   "rating": -2.1,
   "ratingGames": 26,
   "confidence": 84,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.9,
   "playerId": "37acfc18-a8d1-4ea0-8c21-0d830c9f4f90"
  },
  {
   "name": "Robert Schimony",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro Aces",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 8,
   "losses": 18,
   "pointsWon": 398,
   "totalPointsAgainst": 512,
   "mixedWins": 1,
   "mixedLosses": 9,
   "genderWins": 7,
   "genderLosses": 9,
   "clutchWins": 4,
   "clutchLosses": 0,
   "winPct": 30.8,
   "diff": -114,
   "ppg": 15.3,
   "leagueRank": 157,
   "rating": -3,
   "ratingGames": 26,
   "confidence": 83,
   "strengthOfPartners": -1,
   "strengthOfOpponents": -0.1,
   "playerId": "b85c2074-a149-4382-8563-e1ff5b5d70bc"
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
   "leagueRank": 181,
   "rating": -1.5,
   "ratingGames": 10,
   "confidence": 64,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": -0.3,
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
   "leagueRank": 134,
   "rating": -0.6,
   "ratingGames": 20,
   "confidence": 80,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.4,
   "playerId": "13918154-3673-4dae-946a-2c2d4ac8863f"
  },
  {
   "name": "Aurora Lewis",
   "gender": "Female",
   "team": "Home Court",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 10,
   "losses": 24,
   "pointsWon": 610,
   "totalPointsAgainst": 658,
   "mixedWins": 1,
   "mixedLosses": 14,
   "genderWins": 9,
   "genderLosses": 10,
   "clutchWins": 4,
   "clutchLosses": 7,
   "winPct": 29.4,
   "diff": -48,
   "ppg": 17.9,
   "leagueRank": 128,
   "rating": -0.4,
   "ratingGames": 34,
   "confidence": 86,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.3,
   "playerId": "3fe06711-5561-47b8-ad95-382cd0bcff9a"
  },
  {
   "name": "Ariana Rizvani",
   "gender": "Female",
   "team": "Home Court",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 10,
   "losses": 24,
   "pointsWon": 585,
   "totalPointsAgainst": 670,
   "mixedWins": 5,
   "mixedLosses": 11,
   "genderWins": 5,
   "genderLosses": 13,
   "clutchWins": 5,
   "clutchLosses": 6,
   "winPct": 29.4,
   "diff": -85,
   "ppg": 17.2,
   "leagueRank": 141,
   "rating": -0.5,
   "ratingGames": 34,
   "confidence": 86,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.5,
   "playerId": "1c7e9745-06f1-4486-9b14-5f4205128867"
  },
  {
   "name": "Aidan Jackson",
   "gender": "Male",
   "team": "Home Court",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 11,
   "losses": 28,
   "pointsWon": 662,
   "totalPointsAgainst": 768,
   "mixedWins": 6,
   "mixedLosses": 12,
   "genderWins": 5,
   "genderLosses": 16,
   "clutchWins": 3,
   "clutchLosses": 8,
   "winPct": 28.2,
   "diff": -106,
   "ppg": 17,
   "leagueRank": 145,
   "rating": -0.8,
   "ratingGames": 39,
   "confidence": 88,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.5,
   "playerId": "c821be96-b764-46ad-85a2-8927711684c5"
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
   "leagueRank": 188,
   "rating": -2.5,
   "ratingGames": 11,
   "confidence": 66,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -0.6,
   "playerId": "6f9cb35b-f24c-4480-a8b4-86e6ea32f3c2"
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
   "leagueRank": 129,
   "rating": 0.9,
   "ratingGames": 15,
   "confidence": 74,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.9,
   "playerId": "5c354e5d-09ba-4d09-a8c4-76e0fb7eb78a"
  },
  {
   "name": "Sheila Siu",
   "gender": "Female",
   "team": "Home Court",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 5,
   "losses": 14,
   "pointsWon": 332,
   "totalPointsAgainst": 376,
   "mixedWins": 2,
   "mixedLosses": 12,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 6,
   "winPct": 26.3,
   "diff": -44,
   "ppg": 17.5,
   "leagueRank": 147,
   "rating": -1.4,
   "ratingGames": 19,
   "confidence": 79,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": -0.1,
   "playerId": "25879a0b-5df5-4c12-9066-4aaaf4e6cbc0"
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
   "leagueRank": 204,
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
   "leagueRank": 196,
   "rating": -2,
   "ratingGames": 8,
   "confidence": 56,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.5,
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
   "leagueRank": 189,
   "rating": 0.9,
   "ratingGames": 8,
   "confidence": 60,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 1.9,
   "playerId": "5fd7e152-10cf-4669-bcf2-09a067870bf0"
  },
  {
   "name": "Jenny Chen",
   "gender": "Female",
   "team": "Home Court",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 3,
   "losses": 9,
   "pointsWon": 201,
   "totalPointsAgainst": 239,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 25,
   "diff": -38,
   "ppg": 16.8,
   "leagueRank": 177,
   "rating": -0.2,
   "ratingGames": 12,
   "confidence": 70,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 0.8,
   "playerId": "54c51642-8048-4dd1-9221-a4306301ff72"
  },
  {
   "name": "Emily Reckenbeil",
   "gender": "Female",
   "team": "Flemington",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 108,
   "totalPointsAgainst": 164,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 25,
   "diff": -56,
   "ppg": 13.5,
   "leagueRank": 202,
   "rating": -1.8,
   "ratingGames": 8,
   "confidence": 60,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 1.9,
   "playerId": "47191c01-c627-48e1-aeae-9745695957d9"
  },
  {
   "name": "Morgan Fishman",
   "gender": "Female",
   "team": "Monroe",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 6,
   "losses": 18,
   "pointsWon": 416,
   "totalPointsAgainst": 486,
   "mixedWins": 5,
   "mixedLosses": 6,
   "genderWins": 1,
   "genderLosses": 12,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 25,
   "diff": -70,
   "ppg": 17.3,
   "leagueRank": 152,
   "rating": -1.6,
   "ratingGames": 24,
   "confidence": 82,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.9,
   "playerId": "5ccee070-0af8-4363-9ddb-6ce8ebce098f"
  },
  {
   "name": "Sarah Ross",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro Aces",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 40,
   "wins": 10,
   "losses": 30,
   "pointsWon": 706,
   "totalPointsAgainst": 791,
   "mixedWins": 8,
   "mixedLosses": 11,
   "genderWins": 2,
   "genderLosses": 19,
   "clutchWins": 2,
   "clutchLosses": 11,
   "winPct": 25,
   "diff": -85,
   "ppg": 17.7,
   "leagueRank": 137,
   "rating": -0.4,
   "ratingGames": 40,
   "confidence": 88,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.3,
   "playerId": "261d14c5-288e-4349-a3ed-50bad4b620c1"
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
   "leagueRank": 167,
   "rating": 0.4,
   "ratingGames": 13,
   "confidence": 73,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 1.3,
   "playerId": "4a1d4e3a-07b2-4575-b80d-6d160b0c7a23"
  },
  {
   "name": "Sophia Kaufmann",
   "gender": "Female",
   "team": "Monroe",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 6,
   "losses": 20,
   "pointsWon": 415,
   "totalPointsAgainst": 521,
   "mixedWins": 5,
   "mixedLosses": 9,
   "genderWins": 1,
   "genderLosses": 11,
   "clutchWins": 1,
   "clutchLosses": 5,
   "winPct": 23.1,
   "diff": -106,
   "ppg": 16,
   "leagueRank": 161,
   "rating": -2,
   "ratingGames": 26,
   "confidence": 83,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 1.2,
   "playerId": "44f258b0-52df-4c16-8d1e-a9f2d65b439e"
  },
  {
   "name": "William Lee",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro Aces",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 9,
   "losses": 30,
   "pointsWon": 644,
   "totalPointsAgainst": 783,
   "mixedWins": 6,
   "mixedLosses": 17,
   "genderWins": 3,
   "genderLosses": 13,
   "clutchWins": 3,
   "clutchLosses": 9,
   "winPct": 23.1,
   "diff": -139,
   "ppg": 16.5,
   "leagueRank": 155,
   "rating": -0.7,
   "ratingGames": 39,
   "confidence": 88,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0.6,
   "playerId": "9e264c96-36cf-45a9-90ad-1e125a82c851"
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
   "leagueRank": 165,
   "rating": -1.5,
   "ratingGames": 14,
   "confidence": 73,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0,
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
   "leagueRank": 168,
   "rating": -3.2,
   "ratingGames": 20,
   "confidence": 79,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -0.2,
   "playerId": "8079e74f-c537-4e42-9590-e8d60f10ba3d"
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
   "leagueRank": 153,
   "rating": -0.4,
   "ratingGames": 33,
   "confidence": 86,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.9,
   "playerId": "c6a7f237-8e09-45e4-b34e-d179e46b61b1"
  },
  {
   "name": "Erika Richards",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro Aces",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 33,
   "wins": 6,
   "losses": 27,
   "pointsWon": 538,
   "totalPointsAgainst": 661,
   "mixedWins": 5,
   "mixedLosses": 11,
   "genderWins": 1,
   "genderLosses": 16,
   "clutchWins": 2,
   "clutchLosses": 6,
   "winPct": 18.2,
   "diff": -123,
   "ppg": 16.3,
   "leagueRank": 160,
   "rating": -1.3,
   "ratingGames": 33,
   "confidence": 86,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.6,
   "playerId": "065e606f-3722-4434-8848-28e4d10ccabd"
  },
  {
   "name": "Aimee Castellano",
   "gender": "Female",
   "team": "Flemington",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 5,
   "losses": 23,
   "pointsWon": 488,
   "totalPointsAgainst": 568,
   "mixedWins": 4,
   "mixedLosses": 10,
   "genderWins": 1,
   "genderLosses": 13,
   "clutchWins": 3,
   "clutchLosses": 9,
   "winPct": 17.9,
   "diff": -80,
   "ppg": 17.4,
   "leagueRank": 156,
   "rating": -1.2,
   "ratingGames": 28,
   "confidence": 84,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.8,
   "playerId": "e76985fb-efd1-4180-a340-e4f36abbc8b4"
  },
  {
   "name": "Kathleen Dougherty",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 3,
   "losses": 14,
   "pointsWon": 280,
   "totalPointsAgainst": 341,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 1,
   "genderLosses": 9,
   "clutchWins": 0,
   "clutchLosses": 4,
   "winPct": 17.6,
   "diff": -61,
   "ppg": 16.5,
   "leagueRank": 162,
   "rating": -1.4,
   "ratingGames": 18,
   "confidence": 79,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 1.2,
   "playerId": "c929f42d-6fd4-4034-888e-ad456cda3063"
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
   "leagueRank": 201,
   "rating": -2.5,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": -1.3,
   "playerId": "8257200c-7448-4527-92df-436d7bb18cac"
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
   "leagueRank": 179,
   "rating": -2.8,
   "ratingGames": 18,
   "confidence": 78,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 0.7,
   "playerId": "f3d99274-413c-4720-9c8d-1a71f9b2e717"
  },
  {
   "name": "Elliot Stevens",
   "gender": "Male",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 2,
   "losses": 12,
   "pointsWon": 234,
   "totalPointsAgainst": 289,
   "mixedWins": 0,
   "mixedLosses": 6,
   "genderWins": 2,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 5,
   "winPct": 14.3,
   "diff": -55,
   "ppg": 16.7,
   "leagueRank": 178,
   "rating": -1.3,
   "ratingGames": 14,
   "confidence": 72,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.5,
   "playerId": "3c27afe7-2382-44c1-a50d-cf7326aa325a"
  },
  {
   "name": "Andre Cristobal",
   "gender": "Male",
   "team": "Flemington",
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
   "clutchLosses": 2,
   "winPct": 12.5,
   "diff": -41,
   "ppg": 15.6,
   "leagueRank": 203,
   "rating": -1.2,
   "ratingGames": 8,
   "confidence": 61,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 1.6,
   "playerId": "50d796da-0ac2-4f94-af29-212d7865f473"
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
   "leagueRank": 209,
   "rating": -0.9,
   "ratingGames": 8,
   "confidence": 61,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 2.3,
   "playerId": "55194d2f-f537-4e19-b901-86c559f25ef2"
  },
  {
   "name": "Cally Kerrigan",
   "gender": "Female",
   "team": "Flemington",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 112,
   "totalPointsAgainst": 166,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 12.5,
   "diff": -54,
   "ppg": 14,
   "leagueRank": 207,
   "rating": -1.7,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": -2.1,
   "strengthOfOpponents": 1.1,
   "playerId": "4c9897dc-1d71-46b0-bf05-e21d2f3efcb0"
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
   "leagueRank": 210,
   "rating": -2.2,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 2.2,
   "playerId": "c33f3ff1-2c81-4630-8980-64fa03a7b102"
  },
  {
   "name": "Ashwin Korde",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 2,
   "losses": 14,
   "pointsWon": 247,
   "totalPointsAgainst": 327,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 11,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 12.5,
   "diff": -80,
   "ppg": 15.4,
   "leagueRank": 190,
   "rating": -3.7,
   "ratingGames": 16,
   "confidence": 76,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.8,
   "playerId": "f9f521ee-5f27-4f61-b4e0-4e0b9ad09aee"
  },
  {
   "name": "Noah Goding",
   "gender": "Male",
   "team": "Home Court",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 2,
   "losses": 16,
   "pointsWon": 308,
   "totalPointsAgainst": 367,
   "mixedWins": 0,
   "mixedLosses": 8,
   "genderWins": 2,
   "genderLosses": 8,
   "clutchWins": 1,
   "clutchLosses": 7,
   "winPct": 11.1,
   "diff": -59,
   "ppg": 17.1,
   "leagueRank": 166,
   "rating": -1.8,
   "ratingGames": 18,
   "confidence": 76,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.1,
   "playerId": "80138d68-a74a-4f8c-aea1-7d31e682efa8"
  },
  {
   "name": "Gage Cvijic",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 1,
   "losses": 11,
   "pointsWon": 198,
   "totalPointsAgainst": 250,
   "mixedWins": 1,
   "mixedLosses": 6,
   "genderWins": 0,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 8.3,
   "diff": -52,
   "ppg": 16.5,
   "leagueRank": 200,
   "rating": -2.6,
   "ratingGames": 12,
   "confidence": 72,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.8,
   "playerId": "4572bf15-1066-42b7-ae74-94d6175b1b96"
  },
  {
   "name": "Andrew Cooley",
   "gender": "Male",
   "team": "Home Court",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 1,
   "losses": 12,
   "pointsWon": 194,
   "totalPointsAgainst": 270,
   "mixedWins": 1,
   "mixedLosses": 6,
   "genderWins": 0,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 7.7,
   "diff": -76,
   "ppg": 14.9,
   "leagueRank": 198,
   "rating": -1.2,
   "ratingGames": 13,
   "confidence": 71,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": 1.1,
   "playerId": "4bc5dc80-f744-41e1-ab6e-a02c600abed8"
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
   "leagueRank": 195,
   "rating": -2.3,
   "ratingGames": 14,
   "confidence": 73,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 1.2,
   "playerId": "b4efc48a-f302-4d27-8c35-0dac1e68eec8"
  },
  {
   "name": "Helen Liu",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro Aces",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 1,
   "losses": 14,
   "pointsWon": 207,
   "totalPointsAgainst": 309,
   "mixedWins": 1,
   "mixedLosses": 6,
   "genderWins": 0,
   "genderLosses": 8,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 6.7,
   "diff": -102,
   "ppg": 13.8,
   "leagueRank": 197,
   "rating": -3.4,
   "ratingGames": 15,
   "confidence": 74,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 0.6,
   "playerId": "53cc1790-d8b9-4b64-a8b3-6e10b2eeb131"
  },
  {
   "name": "Alyssa Tartaglia",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro Aces",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 33,
   "wins": 1,
   "losses": 32,
   "pointsWon": 496,
   "totalPointsAgainst": 688,
   "mixedWins": 0,
   "mixedLosses": 18,
   "genderWins": 1,
   "genderLosses": 14,
   "clutchWins": 0,
   "clutchLosses": 6,
   "winPct": 3,
   "diff": -192,
   "ppg": 15,
   "leagueRank": 184,
   "rating": -2.4,
   "ratingGames": 33,
   "confidence": 87,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 1.2,
   "playerId": "881ed39f-f9fc-4e9d-8ed3-d13d9ebc7b13"
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
   "leagueRank": 223,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "49ef6026-5d4e-4686-801a-4a47fde8b597"
  },
  {
   "name": "Sean O'Connell",
   "gender": "Male",
   "team": "Flemington",
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
   "leagueRank": 229,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "6d9b173b-57b7-499c-9bde-9bdafd152968"
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
   "leagueRank": 233,
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
   "leagueRank": 231,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "9bd69558-b2d9-4f5a-9cc1-177713707ab7"
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
   "leagueRank": 236,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "be9bc229-2d57-4236-a951-11a2f91a09a3"
  },
  {
   "name": "Alex Mihalca",
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
   "leagueRank": 228,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "47054f48-f7f3-4a11-8a3c-03160ea588b6"
  },
  {
   "name": "Kristen Clemmer",
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
   "leagueRank": 224,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "7f2ca847-7635-4bda-9073-7625e6812f32"
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
   "leagueRank": 199,
   "rating": 0.2,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 1,
   "playerId": "772b8bd9-ee55-463b-8e7d-f5e571a2f047"
  },
  {
   "name": "Matthew Russell",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 0,
   "losses": 4,
   "pointsWon": 64,
   "totalPointsAgainst": 84,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -20,
   "ppg": 16,
   "leagueRank": 219,
   "rating": -2.3,
   "ratingGames": 4,
   "confidence": 47,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.5,
   "playerId": "a667ec5e-c910-4115-b4d2-93d2dcfacbe8"
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
   "leagueRank": 221,
   "rating": -3.2,
   "ratingGames": 4,
   "confidence": 43,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -0.7,
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
   "leagueRank": 212,
   "rating": -2.1,
   "ratingGames": 5,
   "confidence": 52,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.5,
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
   "leagueRank": 213,
   "rating": -2,
   "ratingGames": 5,
   "confidence": 52,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 1,
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
   "leagueRank": 214,
   "rating": -2.1,
   "ratingGames": 5,
   "confidence": 52,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 0.9,
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
   "leagueRank": 211,
   "rating": -1.7,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 1.3,
   "playerId": "0eb33201-72fc-4c64-897a-85c3d9d64373"
  },
  {
   "name": "Kathy Behrmann",
   "gender": "Female",
   "team": "Home Court",
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
   "leagueRank": 218,
   "rating": -3.7,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.7,
   "playerId": "c6c3c899-b824-4074-b683-ad755850747a"
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
   "leagueRank": 205,
   "rating": -1.8,
   "ratingGames": 8,
   "confidence": 61,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 2.1,
   "playerId": "279df046-e022-4adf-a5ea-4072a29d9622"
  },
  {
   "name": "Jaco De Waal",
   "gender": "Male",
   "team": "Flemington",
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
   "clutchLosses": 2,
   "winPct": 0,
   "diff": -64,
   "ppg": 13,
   "leagueRank": 215,
   "rating": -1.6,
   "ratingGames": 8,
   "confidence": 61,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 2.1,
   "playerId": "19407a76-031d-4be3-8ed8-ba88cccdfdd3"
  },
  {
   "name": "Obege Janvier",
   "gender": "Male",
   "team": "Flemington",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 0,
   "losses": 8,
   "pointsWon": 99,
   "totalPointsAgainst": 168,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -69,
   "ppg": 12.4,
   "leagueRank": 216,
   "rating": -2.3,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": -2.4,
   "strengthOfOpponents": 1.4,
   "playerId": "50fccc8f-a4a9-490b-a7d5-eebbda35bb22"
  },
  {
   "name": "Amanda Kiszonak",
   "gender": "Female",
   "team": "Home Court",
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
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -70,
   "ppg": 12.3,
   "leagueRank": 220,
   "rating": -4.4,
   "ratingGames": 8,
   "confidence": 61,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.7,
   "playerId": "47928aef-9cba-45da-b6cf-5c7ea9378efc"
  },
  {
   "name": "Tara Kramer",
   "gender": "Female",
   "team": "Flemington",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 0,
   "losses": 8,
   "pointsWon": 96,
   "totalPointsAgainst": 168,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -72,
   "ppg": 12,
   "leagueRank": 217,
   "rating": -3,
   "ratingGames": 8,
   "confidence": 60,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 1.4,
   "playerId": "dae62b8e-5f8e-4721-8f41-3218518d1e30"
  },
  {
   "name": "Jamie Hahn",
   "gender": "Female",
   "team": "Flemington",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 0,
   "losses": 8,
   "pointsWon": 87,
   "totalPointsAgainst": 168,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -81,
   "ppg": 10.9,
   "leagueRank": 222,
   "rating": -4,
   "ratingGames": 8,
   "confidence": 61,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 1.2,
   "playerId": "17019012-f2ff-4e9a-958a-928369685b36"
  }
 ],
 "teams": [
  {
   "name": "Pickleball Kingdom Hillsborough",
   "w": 6,
   "l": 1,
   "pf": 4503,
   "pa": 4071,
   "gw": 138,
   "gl": 86,
   "diff": 432,
   "gameDiff": 52,
   "power": 1.1,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     69,
     43
    ],
    "male": [
     29,
     27
    ],
    "female": [
     40,
     16
    ]
   }
  },
  {
   "name": "Dill Dinkers Hatboro The Factory",
   "w": 5,
   "l": 1,
   "pf": 3945,
   "pa": 3384,
   "gw": 140,
   "gl": 52,
   "diff": 561,
   "gameDiff": 88,
   "power": 1.5,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     71,
     25
    ],
    "male": [
     31,
     17
    ],
    "female": [
     38,
     10
    ]
   }
  },
  {
   "name": "Bounce Malvern",
   "w": 6,
   "l": 2,
   "pf": 5050,
   "pa": 4523,
   "gw": 159,
   "gl": 97,
   "diff": 527,
   "gameDiff": 62,
   "power": 1.3,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     79,
     49
    ],
    "male": [
     43,
     21
    ],
    "female": [
     37,
     27
    ]
   }
  },
  {
   "name": "Pickle House",
   "w": 5,
   "l": 2,
   "pf": 4439,
   "pa": 4195,
   "gw": 137,
   "gl": 87,
   "diff": 244,
   "gameDiff": 50,
   "power": 0.7,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     74,
     38
    ],
    "male": [
     22,
     34
    ],
    "female": [
     41,
     15
    ]
   }
  },
  {
   "name": "ACE Moorestown",
   "w": 5,
   "l": 2,
   "pf": 4306,
   "pa": 4146,
   "gw": 127,
   "gl": 97,
   "diff": 160,
   "gameDiff": 30,
   "power": 0.8,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     60,
     52
    ],
    "male": [
     30,
     26
    ],
    "female": [
     37,
     19
    ]
   }
  },
  {
   "name": "Bounce Philly",
   "w": 5,
   "l": 2,
   "pf": 4308,
   "pa": 4232,
   "gw": 118,
   "gl": 106,
   "diff": 76,
   "gameDiff": 12,
   "power": 0.6,
   "powerRank": 4,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     57,
     55
    ],
    "male": [
     32,
     24
    ],
    "female": [
     29,
     27
    ]
   }
  },
  {
   "name": "Jersey Devil",
   "w": 3,
   "l": 3,
   "pf": 3686,
   "pa": 3701,
   "gw": 98,
   "gl": 94,
   "diff": -15,
   "gameDiff": 4,
   "power": 0.2,
   "powerRank": 5,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     48,
     48
    ],
    "male": [
     21,
     27
    ],
    "female": [
     29,
     19
    ]
   }
  },
  {
   "name": "Flemington",
   "w": 3,
   "l": 5,
   "pf": 4645,
   "pa": 5057,
   "gw": 103,
   "gl": 153,
   "diff": -412,
   "gameDiff": -50,
   "power": -0.4,
   "powerRank": 4,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     53,
     75
    ],
    "male": [
     32,
     32
    ],
    "female": [
     18,
     46
    ]
   }
  },
  {
   "name": "Monroe",
   "w": 2,
   "l": 6,
   "pf": 4845,
   "pa": 5004,
   "gw": 119,
   "gl": 137,
   "diff": -159,
   "gameDiff": -18,
   "power": 0.3,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     64,
     64
    ],
    "male": [
     36,
     28
    ],
    "female": [
     19,
     45
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
   "power": -0.7,
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
   "w": 0,
   "l": 7,
   "pf": 4013,
   "pa": 4436,
   "gw": 70,
   "gl": 154,
   "diff": -423,
   "gameDiff": -84,
   "power": -0.6,
   "powerRank": 5,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     29,
     83
    ],
    "male": [
     20,
     36
    ],
    "female": [
     21,
     35
    ]
   }
  },
  {
   "name": "Dill Dinkers Hatboro Aces",
   "w": 0,
   "l": 6,
   "pf": 3257,
   "pa": 3922,
   "gw": 45,
   "gl": 147,
   "diff": -665,
   "gameDiff": -102,
   "power": -1.1,
   "powerRank": 6,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     24,
     72
    ],
    "male": [
     16,
     32
    ],
    "female": [
     5,
     43
    ]
   }
  }
 ],
 "duos": [
  {
   "a": "Erika Richards",
   "b": "Adam Beck",
   "team": "Dill Dinkers Hatboro Aces",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 3,
   "avgActual": 2.6,
   "avgExpected": -2.7,
   "aId": "065e606f-3722-4434-8848-28e4d10ccabd",
   "bId": "7d836ecc-e553-4966-9c12-2dc698a545d0"
  },
  {
   "a": "Marina Cozac",
   "b": "Varun Prakash",
   "team": "Dill Dinkers Hatboro The Factory",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.9,
   "avgActual": 9.3,
   "avgExpected": 2.7,
   "aId": "13c8aeab-aa52-4bc2-bf23-96a2cabe4181",
   "bId": "67dbfc4f-20f7-4299-bc2f-6cc70cf747ab"
  },
  {
   "a": "Anita Buggins",
   "b": "Hector Irizarry",
   "team": "ACE Moorestown",
   "n": 7,
   "w": 7,
   "l": 0,
   "synergy": 2.5,
   "avgActual": 9.1,
   "avgExpected": 5.2,
   "aId": "2ea90a18-1ef3-4ade-a855-2a3fd178abd7",
   "bId": "a50a69d0-0a8c-4241-b768-846b1591d180"
  },
  {
   "a": "Aurora Lewis",
   "b": "Ashley Barros",
   "team": "Home Court",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.4,
   "avgActual": 6.7,
   "avgExpected": 1,
   "aId": "3fe06711-5561-47b8-ad95-382cd0bcff9a",
   "bId": "6656b9a3-3c47-4711-8609-e35c07c64771"
  },
  {
   "a": "Taylor Hartman",
   "b": "Chris Damato",
   "team": "Pickle House",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 2.3,
   "avgActual": 2.7,
   "avgExpected": -1.1,
   "aId": "3bf2f55b-b253-4d2a-b1b9-d5953ef1b8ec",
   "bId": "445e89c8-a23c-440c-bd3c-7eab366bdd85"
  },
  {
   "a": "Maanav Shah",
   "b": "Sophia Kaufmann",
   "team": "Monroe",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.1,
   "avgActual": 5,
   "avgExpected": 0.2,
   "aId": "0a1270b0-26f6-4328-85bc-bf3f329a746e",
   "bId": "44f258b0-52df-4c16-8d1e-a9f2d65b439e"
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
   "avgExpected": 0.4,
   "aId": "22fe1980-7ef9-4026-8c76-a39534431c6b",
   "bId": "b5e576e1-d16d-4c9d-ab28-2e1b1e66487b"
  },
  {
   "a": "Nathan Malhotra",
   "b": "Austin Williams",
   "team": "Home Court",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 2.1,
   "avgActual": 5.3,
   "avgExpected": 1.8,
   "aId": "98bd685a-3161-45fc-941f-3a8c9f4849cf",
   "bId": "bb0bdc33-be20-4a45-9de9-0a52a88d7af9"
  },
  {
   "a": "Brittany Hall",
   "b": "Annemarie Mccartney",
   "team": "ACE Moorestown",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 2,
   "avgActual": 4,
   "avgExpected": 0,
   "aId": "17cc768d-f6c8-484c-814e-063d17cec72f",
   "bId": "d08d78db-7d20-4dc2-a37b-41841c4624fd"
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
   "a": "Kara Infante",
   "b": "Aurora Lewis",
   "team": "Home Court",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.9,
   "avgActual": 2.6,
   "avgExpected": -0.8,
   "aId": "06edda3d-3a1f-4010-86fa-8ac767cd7079",
   "bId": "3fe06711-5561-47b8-ad95-382cd0bcff9a"
  },
  {
   "a": "Sebastian Ferrer",
   "b": "Matt Schall",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.9,
   "avgActual": 2.7,
   "avgExpected": -1.8,
   "aId": "5c354e5d-09ba-4d09-a8c4-76e0fb7eb78a",
   "bId": "aa0d9944-a9d3-46d5-8650-54e894adfeb2"
  },
  {
   "a": "Michael Li",
   "b": "Dipen Bhatt",
   "team": "Pickle House",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.8,
   "avgActual": 2.7,
   "avgExpected": -1.6,
   "aId": "dc81629b-4ff7-45c4-b38e-b3b836bc0769",
   "bId": "fe8af1d3-ff62-430d-90af-32794cc7b912"
  },
  {
   "a": "Kerrin Maurer",
   "b": "Zach Hollmann",
   "team": "Pickle House",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.8,
   "avgActual": 8,
   "avgExpected": 4.4,
   "aId": "1d63ce3d-20c2-40ae-94ca-e8e6e458004e",
   "bId": "8aef2d8a-0bd4-45df-b5d1-1a120a81ef0f"
  },
  {
   "a": "Anita Buggins",
   "b": "Nathan Law",
   "team": "ACE Moorestown",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 1.8,
   "avgActual": 3.1,
   "avgExpected": 0.3,
   "aId": "2ea90a18-1ef3-4ade-a855-2a3fd178abd7",
   "bId": "3c81d27f-9e68-439b-a476-f5ac1a54f45a"
  },
  {
   "a": "Rachel Alfano",
   "b": "Dustin Rabinowitz",
   "team": "Bounce Philly",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.8,
   "avgActual": 8.7,
   "avgExpected": 4.5,
   "aId": "ce7aca89-06ac-4cd9-8944-a482216ffd58",
   "bId": "d23839c0-334b-4423-9305-0c6281523d5d"
  },
  {
   "a": "William Lee",
   "b": "Julia Plein",
   "team": "Dill Dinkers Hatboro Aces",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.7,
   "avgActual": -0.3,
   "avgExpected": -4.3,
   "aId": "9e264c96-36cf-45a9-90ad-1e125a82c851",
   "bId": "f3d99274-413c-4720-9c8d-1a71f9b2e717"
  },
  {
   "a": "Jenna Irwin",
   "b": "Meghan Mediratta",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 1.7,
   "avgActual": 10.4,
   "avgExpected": 7.3,
   "aId": "85e52e3b-5238-4583-8d1a-cc57f8218ef6",
   "bId": "abc80b43-6769-4254-ae9a-b4b63b06de1d"
  },
  {
   "a": "Zach Hollmann",
   "b": "Emily Babinsky",
   "team": "Pickle House",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.6,
   "avgActual": 7.3,
   "avgExpected": 4.1,
   "aId": "8aef2d8a-0bd4-45df-b5d1-1a120a81ef0f",
   "bId": "d0e2c1ea-529d-4364-b521-cb205ecdded3"
  },
  {
   "a": "Susan Ackley",
   "b": "Suzi Battison",
   "team": "Flemington",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.6,
   "avgActual": 3,
   "avgExpected": -0.8,
   "aId": "07a0e948-6308-4920-a6a8-1d5945552ecb",
   "bId": "40579892-d9bf-4d1d-9417-5830d5d45093"
  },
  {
   "a": "Ken Velarde",
   "b": "Daniel Gallegos",
   "team": "Home Court",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.6,
   "avgActual": 4,
   "avgExpected": 0.2,
   "aId": "25aa47d0-76b8-48be-a5be-b1d33b423e82",
   "bId": "6f9cb35b-f24c-4480-a8b4-86e6ea32f3c2"
  },
  {
   "a": "Zoe Ousouljoglou",
   "b": "Camrin Cronheim",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.6,
   "avgActual": 4.3,
   "avgExpected": 1,
   "aId": "269fe355-d2eb-41b8-9e92-a1438aec65e3",
   "bId": "8143def5-d564-4010-8258-ccb71cd481f1"
  },
  {
   "a": "Tom Laiso",
   "b": "Kevin Wysoczynski",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.6,
   "avgActual": 3,
   "avgExpected": -0.7,
   "aId": "13918154-3673-4dae-946a-2c2d4ac8863f",
   "bId": "f64f0cc2-6c82-4fe4-9992-747512700971"
  },
  {
   "a": "Lou Frignito",
   "b": "Megan Harvey",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.6,
   "avgActual": 7,
   "avgExpected": 3.3,
   "aId": "1afca308-dca6-4828-946a-0ca6ad1b0c44",
   "bId": "4d576bb5-e9e5-4ad1-a18f-022508c6a161"
  },
  {
   "a": "Chris Long",
   "b": "Jason Makarevic",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 1.5,
   "avgActual": 0.2,
   "avgExpected": -2.5,
   "aId": "f7f6ce2d-1cbb-45f9-ad8f-e42b89b99554",
   "bId": "f8835822-da21-4593-8b99-5665d2c2f3af"
  },
  {
   "a": "Yoyo Shen",
   "b": "Michael Li",
   "team": "Pickle House",
   "n": 8,
   "w": 8,
   "l": 0,
   "synergy": 1.5,
   "avgActual": 7,
   "avgExpected": 4.8,
   "aId": "9d47a1aa-c44c-4ddd-8953-dc40f79b1016",
   "bId": "dc81629b-4ff7-45c4-b38e-b3b836bc0769"
  },
  {
   "a": "Zachary Lessner",
   "b": "William Hayes",
   "team": "Bounce Philly",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 4,
   "avgExpected": 0.4,
   "aId": "2ce5ebef-8079-4871-8d2e-b34988abbaad",
   "bId": "4dfed1a1-5375-446c-98bc-69402e70e1d5"
  },
  {
   "a": "Maanav Shah",
   "b": "Sara Synn",
   "team": "Monroe",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 3,
   "avgExpected": -0.1,
   "aId": "0a1270b0-26f6-4328-85bc-bf3f329a746e",
   "bId": "37acfc18-a8d1-4ea0-8c21-0d830c9f4f90"
  },
  {
   "a": "Dilan Shah",
   "b": "Ruhi Shah",
   "team": "Monroe",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 1.5,
   "avgActual": 1.1,
   "avgExpected": -1.2,
   "aId": "91d23f87-e0fc-4448-890e-c3abd96c70b4",
   "bId": "a2d56e71-3895-4316-9e9e-17565fb62295"
  },
  {
   "a": "Caleb Perry-Abner",
   "b": "Tyler Arsenault",
   "team": "Jersey Devil",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 3.3,
   "avgExpected": 0.2,
   "aId": "c25e04ae-a9bf-4943-858d-5b7a94261e43",
   "bId": "e76d2d63-f7dc-40e7-aca2-d9b3aecf4d3e"
  },
  {
   "a": "Paula Ro",
   "b": "Sidd Pathare",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 6,
   "w": 6,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 5.5,
   "avgExpected": 3.1,
   "aId": "3cf3093b-1667-4242-9ad5-1d72fc5d24f8",
   "bId": "a73f249d-c1c9-4516-bc79-e9732581f098"
  },
  {
   "a": "Amanda Ksiezopolski",
   "b": "Ruhi Shah",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 3.3,
   "avgExpected": 0,
   "aId": "2138af89-34bc-4ee2-9955-ff16f0997031",
   "bId": "a2d56e71-3895-4316-9e9e-17565fb62295"
  },
  {
   "a": "Catherine Stewart",
   "b": "Matt Schall",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 2.8,
   "avgExpected": -0.1,
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
   "synergy": 1.4,
   "avgActual": 2,
   "avgExpected": -0.8,
   "aId": "c053f5d6-16e1-4847-b27b-49fe41f367c6",
   "bId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b"
  },
  {
   "a": "Matthew Chen",
   "b": "Johny Mario",
   "team": "Jersey Devil",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 1.4,
   "avgActual": -0.8,
   "avgExpected": -3.4,
   "aId": "68e9ac74-5119-4dbb-8503-72bcdbade183",
   "bId": "831c9fae-38c6-4961-8664-634087f5f2f9"
  },
  {
   "a": "Allison Tarnoff",
   "b": "Cristi Landrigan",
   "team": "Dill Dinkers Hatboro The Factory",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 5.3,
   "avgExpected": 2.5,
   "aId": "001bf0ea-f8b1-402f-ab07-88ed85b2b510",
   "bId": "1be028eb-1b92-4961-b508-fa0879c78017"
  },
  {
   "a": "Gage Cvijic",
   "b": "Lissa Eagles",
   "team": "Pickle House",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.4,
   "avgActual": -1.3,
   "avgExpected": -4.6,
   "aId": "4572bf15-1066-42b7-ae74-94d6175b1b96",
   "bId": "9ec39678-a120-45de-b8a5-897b8cf900cd"
  },
  {
   "a": "Camrin Cronheim",
   "b": "Ally Yan",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.3,
   "avgActual": 4.3,
   "avgExpected": 1.4,
   "aId": "8143def5-d564-4010-8258-ccb71cd481f1",
   "bId": "c4eafe22-4dce-47af-978a-5e4bd5afa11a"
  },
  {
   "a": "Ariana Rizvani",
   "b": "Aidan Jackson",
   "team": "Home Court",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 1.3,
   "avgActual": 0.1,
   "avgExpected": -2,
   "aId": "1c7e9745-06f1-4486-9b14-5f4205128867",
   "bId": "c821be96-b764-46ad-85a2-8927711684c5"
  },
  {
   "a": "Eva Danieli",
   "b": "Zach Hizer",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.3,
   "avgActual": -1.3,
   "avgExpected": -4.3,
   "aId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae",
   "bId": "b5e576e1-d16d-4c9d-ab28-2e1b1e66487b"
  },
  {
   "a": "Yuki Kim",
   "b": "Sarah Kline",
   "team": "Bounce Malvern",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 1.3,
   "avgActual": 4.4,
   "avgExpected": 2.4,
   "aId": "afec0287-b62d-4aaf-977f-afb96aed0e17",
   "bId": "b122f262-f81d-4fb2-9f11-c473d18a4260"
  },
  {
   "a": "Charlotte Healey",
   "b": "Alex Abad",
   "team": "Bounce Philly",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 3.4,
   "avgExpected": 1,
   "aId": "bbaf3def-a87b-4537-8701-4f5ae0108b1f",
   "bId": "bc881ebc-7a42-43be-b1b2-9c29c59a4132"
  },
  {
   "a": "Zachary Lessner",
   "b": "Mark Kilimnik",
   "team": "Bounce Philly",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 3.8,
   "avgExpected": 1.5,
   "aId": "2ce5ebef-8079-4871-8d2e-b34988abbaad",
   "bId": "d6c15f91-4cc9-4612-8ec3-8f4ebd4e0cc1"
  },
  {
   "a": "Sara Synn",
   "b": "Ruhi Shah",
   "team": "Monroe",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": 1.3,
   "avgActual": -1.1,
   "avgExpected": -3.2,
   "aId": "37acfc18-a8d1-4ea0-8c21-0d830c9f4f90",
   "bId": "a2d56e71-3895-4316-9e9e-17565fb62295"
  },
  {
   "a": "Tyler Arsenault",
   "b": "Zach Bowe",
   "team": "Jersey Devil",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 2.4,
   "avgExpected": 0.1,
   "aId": "e76d2d63-f7dc-40e7-aca2-d9b3aecf4d3e",
   "bId": "eebadc3a-5763-4612-9232-d3a98ea188d6"
  },
  {
   "a": "Julia Sternberg",
   "b": "Dustin Rabinowitz",
   "team": "Bounce Philly",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.3,
   "avgActual": 7.7,
   "avgExpected": 4.5,
   "aId": "ccd8a76f-df3a-4ab9-97b6-bae0f860a431",
   "bId": "d23839c0-334b-4423-9305-0c6281523d5d"
  },
  {
   "a": "Zach Hollmann",
   "b": "Michael Li",
   "team": "Pickle House",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 4.8,
   "avgExpected": 2.9,
   "aId": "8aef2d8a-0bd4-45df-b5d1-1a120a81ef0f",
   "bId": "dc81629b-4ff7-45c4-b38e-b3b836bc0769"
  },
  {
   "a": "Thomas Connolly",
   "b": "Ross Switkes",
   "team": "Flemington",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 1.2,
   "avgActual": 2,
   "avgExpected": 0.1,
   "aId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3",
   "bId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b"
  },
  {
   "a": "Johny Mario",
   "b": "Michaela Pierznik",
   "team": "Jersey Devil",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 7,
   "avgExpected": 4.2,
   "aId": "831c9fae-38c6-4961-8664-634087f5f2f9",
   "bId": "c885c4ae-2685-4fc8-9b35-40cf9f465915"
  },
  {
   "a": "Anthony Ursino",
   "b": "Amanda Ksiezopolski",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 1,
   "avgExpected": -1.7,
   "aId": "1406ff1f-3597-4128-a629-7dfd1dfe1323",
   "bId": "2138af89-34bc-4ee2-9955-ff16f0997031"
  },
  {
   "a": "Ben Mead",
   "b": "Manny Lai",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 5,
   "avgExpected": 2.1,
   "aId": "7858dda8-168b-4a84-8d5d-7a6571e9313a",
   "bId": "f2a53ee2-a602-4e58-8326-6d0624af34af"
  },
  {
   "a": "Thomas Connolly",
   "b": "Robbie Oddy",
   "team": "Flemington",
   "n": 12,
   "w": 5,
   "l": 7,
   "synergy": 1.1,
   "avgActual": 0.3,
   "avgExpected": -1.2,
   "aId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3",
   "bId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6"
  },
  {
   "a": "Lauren Mercado",
   "b": "Michaela Pierznik",
   "team": "Jersey Devil",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.1,
   "avgActual": 3.7,
   "avgExpected": 1.1,
   "aId": "0aa554f3-0eca-4f2d-b3d9-b277406a7435",
   "bId": "c885c4ae-2685-4fc8-9b35-40cf9f465915"
  },
  {
   "a": "Sarah Ross",
   "b": "Ryan Rosen",
   "team": "Dill Dinkers Hatboro Aces",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 1.1,
   "avgActual": 1.5,
   "avgExpected": -0.3,
   "aId": "261d14c5-288e-4349-a3ed-50bad4b620c1",
   "bId": "97f2b250-2030-4296-be61-63cffb17043b"
  },
  {
   "a": "Lou Frignito",
   "b": "Nick Meale",
   "team": "Bounce Malvern",
   "n": 10,
   "w": 9,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 6.4,
   "avgExpected": 4.8,
   "aId": "1afca308-dca6-4828-946a-0ca6ad1b0c44",
   "bId": "ec0bad09-8256-49b3-ae86-3add22dd995f"
  },
  {
   "a": "Kaylyn Swankoski",
   "b": "Dylan Ashbach",
   "team": "Dill Dinkers Hatboro The Factory",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 8.3,
   "avgExpected": 6.5,
   "aId": "72949bef-7cab-4942-ab45-e5203024a8d5",
   "bId": "9c41a810-1be6-4e08-8a29-51558c29cb86"
  },
  {
   "a": "Rayna Baizman",
   "b": "Kaylyn Swankoski",
   "team": "Dill Dinkers Hatboro The Factory",
   "n": 7,
   "w": 7,
   "l": 0,
   "synergy": 1.1,
   "avgActual": 6.6,
   "avgExpected": 4.8,
   "aId": "108620c9-1cbb-4ea0-846c-bc781f1decea",
   "bId": "72949bef-7cab-4942-ab45-e5203024a8d5"
  },
  {
   "a": "Chris Damato",
   "b": "Lissa Eagles",
   "team": "Pickle House",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 1,
   "avgActual": 1.4,
   "avgExpected": -0.1,
   "aId": "445e89c8-a23c-440c-bd3c-7eab366bdd85",
   "bId": "9ec39678-a120-45de-b8a5-897b8cf900cd"
  },
  {
   "a": "Patrick Ryan",
   "b": "Ross Switkes",
   "team": "Flemington",
   "n": 14,
   "w": 11,
   "l": 3,
   "synergy": 1,
   "avgActual": 2.6,
   "avgExpected": 1.3,
   "aId": "8344fbda-35c2-4ce0-94ad-158090d2d5ba",
   "bId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b"
  },
  {
   "a": "Lauren Mercado",
   "b": "Michelle Quach",
   "team": "Jersey Devil",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1,
   "avgActual": 2.3,
   "avgExpected": 0,
   "aId": "0aa554f3-0eca-4f2d-b3d9-b277406a7435",
   "bId": "5f0dcbe9-bb0e-496d-99d2-06f01ff2c77b"
  },
  {
   "a": "Hannah Nussbaum",
   "b": "Dylan Ashbach",
   "team": "Dill Dinkers Hatboro The Factory",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1,
   "avgActual": 3.5,
   "avgExpected": 1.5,
   "aId": "84b7c449-501c-438d-a3eb-ee67cc92fa0e",
   "bId": "9c41a810-1be6-4e08-8a29-51558c29cb86"
  },
  {
   "a": "Marina Cozac",
   "b": "Hannah Nussbaum",
   "team": "Dill Dinkers Hatboro The Factory",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1,
   "avgActual": 7.7,
   "avgExpected": 5.4,
   "aId": "13c8aeab-aa52-4bc2-bf23-96a2cabe4181",
   "bId": "84b7c449-501c-438d-a3eb-ee67cc92fa0e"
  },
  {
   "a": "Adam Beck",
   "b": "Robert Schimony",
   "team": "Dill Dinkers Hatboro Aces",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 1,
   "avgActual": -0.8,
   "avgExpected": -2.6,
   "aId": "7d836ecc-e553-4966-9c12-2dc698a545d0",
   "bId": "b85c2074-a149-4382-8563-e1ff5b5d70bc"
  },
  {
   "a": "Jennifer Sanchez",
   "b": "Jack Blumberg",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1,
   "avgActual": 1.3,
   "avgExpected": -1,
   "aId": "061121d0-5d0a-4c01-9d8e-dced99d6d82d",
   "bId": "f2929b28-a6ee-45e5-9846-da957b6d8734"
  },
  {
   "a": "Arianna Haresign",
   "b": "Rachel Berger",
   "team": "Jersey Devil",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 1,
   "avgActual": 4.8,
   "avgExpected": 3.1,
   "aId": "556f84fc-4f7c-4199-a104-6e906d71605c",
   "bId": "9b7488c5-bc66-41e4-8fa5-873e70c190e3"
  },
  {
   "a": "Mickey Cook",
   "b": "Yoyo Shen",
   "team": "Pickle House",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1,
   "avgActual": 5.7,
   "avgExpected": 3.4,
   "aId": "3babc519-f395-4ef7-8f6f-b38d25c139d0",
   "bId": "9d47a1aa-c44c-4ddd-8953-dc40f79b1016"
  },
  {
   "a": "Angela Luo",
   "b": "Richa Shah",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.9,
   "avgActual": -0.3,
   "avgExpected": -2.5,
   "aId": "0cb538a5-0d5d-47a7-b854-38394ac9652f",
   "bId": "6b80047c-ca16-4506-a2a4-ed894dc0c37f"
  },
  {
   "a": "Robbie Oddy",
   "b": "Melissa Dardani",
   "team": "Flemington",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": 0.9,
   "avgActual": 1.1,
   "avgExpected": -0.2,
   "aId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6",
   "bId": "ef423f8a-5c2c-4a12-9f37-b41ff6d6c530"
  },
  {
   "a": "Kerrin Maurer",
   "b": "Emily Babinsky",
   "team": "Pickle House",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 5,
   "avgExpected": 3.3,
   "aId": "1d63ce3d-20c2-40ae-94ca-e8e6e458004e",
   "bId": "d0e2c1ea-529d-4364-b521-cb205ecdded3"
  },
  {
   "a": "Danielle Bernero",
   "b": "Rachel Berger",
   "team": "Jersey Devil",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.9,
   "avgActual": -1.2,
   "avgExpected": -2.8,
   "aId": "317f260e-551b-4f91-ab92-71440e5f05be",
   "bId": "9b7488c5-bc66-41e4-8fa5-873e70c190e3"
  },
  {
   "a": "Kara Infante",
   "b": "Ariana Rizvani",
   "team": "Home Court",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.9,
   "avgActual": -0.2,
   "avgExpected": -1.8,
   "aId": "06edda3d-3a1f-4010-86fa-8ac767cd7079",
   "bId": "1c7e9745-06f1-4486-9b14-5f4205128867"
  },
  {
   "a": "Megan Harvey",
   "b": "Shashank Kamdar",
   "team": "Bounce Malvern",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 0.9,
   "avgActual": 0.8,
   "avgExpected": -0.7,
   "aId": "4d576bb5-e9e5-4ad1-a18f-022508c6a161",
   "bId": "56db4b56-6166-437f-8ece-26576b7042e5"
  },
  {
   "a": "Teresa Wang",
   "b": "Yuki Kim",
   "team": "Bounce Malvern",
   "n": 7,
   "w": 7,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 6.1,
   "avgExpected": 4.8,
   "aId": "741de6b9-5fe7-49aa-9c55-5ff4050bb7a1",
   "bId": "afec0287-b62d-4aaf-977f-afb96aed0e17"
  },
  {
   "a": "Jennifer Sanchez",
   "b": "Brittany Hall",
   "team": "ACE Moorestown",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.9,
   "avgActual": -0.5,
   "avgExpected": -2.2,
   "aId": "061121d0-5d0a-4c01-9d8e-dced99d6d82d",
   "bId": "17cc768d-f6c8-484c-814e-063d17cec72f"
  },
  {
   "a": "Alyssa Boyle",
   "b": "Rachel Alfano",
   "team": "Bounce Philly",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 4.8,
   "avgExpected": 3.1,
   "aId": "22123177-1eb2-4285-bc92-f75799e175dd",
   "bId": "ce7aca89-06ac-4cd9-8944-a482216ffd58"
  },
  {
   "a": "Chris Tabeling",
   "b": "Yuki Kim",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 6.7,
   "avgExpected": 4.6,
   "aId": "0ee404b2-e9e6-49b4-b9eb-bc2120473f76",
   "bId": "afec0287-b62d-4aaf-977f-afb96aed0e17"
  },
  {
   "a": "Arianna Haresign",
   "b": "Tyler Arsenault",
   "team": "Jersey Devil",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 0.9,
   "avgActual": 4.4,
   "avgExpected": 3,
   "aId": "556f84fc-4f7c-4199-a104-6e906d71605c",
   "bId": "e76d2d63-f7dc-40e7-aca2-d9b3aecf4d3e"
  },
  {
   "a": "Lou Frignito",
   "b": "Nam Barsh",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 4.7,
   "avgExpected": 2.5,
   "aId": "1afca308-dca6-4828-946a-0ca6ad1b0c44",
   "bId": "fa43af77-3cd1-4e61-a8dc-bd714b65d517"
  },
  {
   "a": "Alyssa Boyle",
   "b": "Charlotte Healey",
   "team": "Bounce Philly",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 6,
   "avgExpected": 3.9,
   "aId": "22123177-1eb2-4285-bc92-f75799e175dd",
   "bId": "bbaf3def-a87b-4537-8701-4f5ae0108b1f"
  },
  {
   "a": "Shreyas Pani",
   "b": "Richa Shah",
   "team": "Monroe",
   "n": 10,
   "w": 4,
   "l": 6,
   "synergy": 0.8,
   "avgActual": -0.8,
   "avgExpected": -1.9,
   "aId": "3cebd01c-ff32-4544-b6a6-2a68152b2ee5",
   "bId": "6b80047c-ca16-4506-a2a4-ed894dc0c37f"
  },
  {
   "a": "Suzi Battison",
   "b": "Melissa Dardani",
   "team": "Flemington",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": 0.8,
   "avgActual": 1.9,
   "avgExpected": 0.6,
   "aId": "40579892-d9bf-4d1d-9417-5830d5d45093",
   "bId": "ef423f8a-5c2c-4a12-9f37-b41ff6d6c530"
  },
  {
   "a": "Tin Wai Kwan",
   "b": "Joey Angelson",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.8,
   "avgActual": 2.3,
   "avgExpected": 0.5,
   "aId": "22fe1980-7ef9-4026-8c76-a39534431c6b",
   "bId": "6035850e-af27-40db-bb81-f5787f344871"
  },
  {
   "a": "Ken Velarde",
   "b": "Aidan Jackson",
   "team": "Home Court",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.8,
   "avgActual": 1.3,
   "avgExpected": -0.1,
   "aId": "25aa47d0-76b8-48be-a5be-b1d33b423e82",
   "bId": "c821be96-b764-46ad-85a2-8927711684c5"
  },
  {
   "a": "Chris Tabeling",
   "b": "Nick Meale",
   "team": "Bounce Malvern",
   "n": 12,
   "w": 9,
   "l": 3,
   "synergy": 0.8,
   "avgActual": 4.5,
   "avgExpected": 3.5,
   "aId": "0ee404b2-e9e6-49b4-b9eb-bc2120473f76",
   "bId": "ec0bad09-8256-49b3-ae86-3add22dd995f"
  },
  {
   "a": "Elisangela Harrington",
   "b": "Robbie Oddy",
   "team": "Flemington",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 2.4,
   "avgExpected": 1,
   "aId": "55bbe71c-1181-4875-b16d-f121f3a133e0",
   "bId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6"
  },
  {
   "a": "Elisangela Harrington",
   "b": "Kelly Arvidson",
   "team": "Flemington",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.8,
   "avgActual": 0,
   "avgExpected": -1.6,
   "aId": "55bbe71c-1181-4875-b16d-f121f3a133e0",
   "bId": "c053f5d6-16e1-4847-b27b-49fe41f367c6"
  },
  {
   "a": "Rachel Berger",
   "b": "Caleb Perry-Abner",
   "team": "Jersey Devil",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 0,
   "avgExpected": -1.8,
   "aId": "9b7488c5-bc66-41e4-8fa5-873e70c190e3",
   "bId": "c25e04ae-a9bf-4943-858d-5b7a94261e43"
  },
  {
   "a": "Nathan Law",
   "b": "Garv Singhal",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.8,
   "avgActual": -1,
   "avgExpected": -2.9,
   "aId": "3c81d27f-9e68-439b-a476-f5ac1a54f45a",
   "bId": "c89e87b8-33ef-49fe-81fb-59fa5b49e93a"
  },
  {
   "a": "Aimee Castellano",
   "b": "Ross Switkes",
   "team": "Flemington",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.7,
   "avgActual": -1.7,
   "avgExpected": -3.4,
   "aId": "e76985fb-efd1-4180-a340-e4f36abbc8b4",
   "bId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b"
  },
  {
   "a": "Mickey Cook",
   "b": "Emily Babinsky",
   "team": "Pickle House",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": 0.7,
   "avgActual": 1.6,
   "avgExpected": 0.6,
   "aId": "3babc519-f395-4ef7-8f6f-b38d25c139d0",
   "bId": "d0e2c1ea-529d-4364-b521-cb205ecdded3"
  },
  {
   "a": "Mickey Cook",
   "b": "Lissa Eagles",
   "team": "Pickle House",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 0.7,
   "avgActual": 0.4,
   "avgExpected": -0.7,
   "aId": "3babc519-f395-4ef7-8f6f-b38d25c139d0",
   "bId": "9ec39678-a120-45de-b8a5-897b8cf900cd"
  },
  {
   "a": "Lou Frignito",
   "b": "Harriet Levin",
   "team": "Bounce Malvern",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 4.8,
   "avgExpected": 3.5,
   "aId": "1afca308-dca6-4828-946a-0ca6ad1b0c44",
   "bId": "aeff8297-a479-4b3b-9a49-72c410ac8e26"
  },
  {
   "a": "Alyssa Boyle",
   "b": "Alex Abad",
   "team": "Bounce Philly",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 7.7,
   "avgExpected": 6.1,
   "aId": "22123177-1eb2-4285-bc92-f75799e175dd",
   "bId": "bc881ebc-7a42-43be-b1b2-9c29c59a4132"
  },
  {
   "a": "Maanav Shah",
   "b": "Angela Luo",
   "team": "Monroe",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 4.5,
   "avgExpected": 3,
   "aId": "0a1270b0-26f6-4328-85bc-bf3f329a746e",
   "bId": "0cb538a5-0d5d-47a7-b854-38394ac9652f"
  },
  {
   "a": "Anisha Malhotra",
   "b": "Sidd Pathare",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 2.8,
   "avgExpected": 1.7,
   "aId": "2aa8b268-8c06-4453-9706-048009bf6af3",
   "bId": "a73f249d-c1c9-4516-bc79-e9732581f098"
  },
  {
   "a": "Patrick Ryan",
   "b": "Kelly Arvidson",
   "team": "Flemington",
   "n": 10,
   "w": 5,
   "l": 5,
   "synergy": 0.6,
   "avgActual": -0.8,
   "avgExpected": -1.6,
   "aId": "8344fbda-35c2-4ce0-94ad-158090d2d5ba",
   "bId": "c053f5d6-16e1-4847-b27b-49fe41f367c6"
  },
  {
   "a": "Erika Richards",
   "b": "William Lee",
   "team": "Dill Dinkers Hatboro Aces",
   "n": 9,
   "w": 2,
   "l": 7,
   "synergy": 0.6,
   "avgActual": -3.4,
   "avgExpected": -4.4,
   "aId": "065e606f-3722-4434-8848-28e4d10ccabd",
   "bId": "9e264c96-36cf-45a9-90ad-1e125a82c851"
  },
  {
   "a": "Danielle Bernero",
   "b": "Caleb Perry-Abner",
   "team": "Jersey Devil",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 0,
   "avgExpected": -1.2,
   "aId": "317f260e-551b-4f91-ab92-71440e5f05be",
   "bId": "c25e04ae-a9bf-4943-858d-5b7a94261e43"
  },
  {
   "a": "Ryan Rosen",
   "b": "Claudya Elefante",
   "team": "Dill Dinkers Hatboro Aces",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.6,
   "avgActual": -1.4,
   "avgExpected": -2.6,
   "aId": "97f2b250-2030-4296-be61-63cffb17043b",
   "bId": "c6a7f237-8e09-45e4-b34e-d179e46b61b1"
  },
  {
   "a": "Ryan Rosen",
   "b": "Robert Schimony",
   "team": "Dill Dinkers Hatboro Aces",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 0.3,
   "avgExpected": -1,
   "aId": "97f2b250-2030-4296-be61-63cffb17043b",
   "bId": "b85c2074-a149-4382-8563-e1ff5b5d70bc"
  },
  {
   "a": "Harriet Levin",
   "b": "Yuki Kim",
   "team": "Bounce Malvern",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 4.7,
   "avgExpected": 3.6,
   "aId": "aeff8297-a479-4b3b-9a49-72c410ac8e26",
   "bId": "afec0287-b62d-4aaf-977f-afb96aed0e17"
  },
  {
   "a": "Kenoa Tio",
   "b": "Conor Landrigan",
   "team": "Dill Dinkers Hatboro The Factory",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.6,
   "avgActual": 5,
   "avgExpected": 3.7,
   "aId": "10e9980e-34bf-43ea-b246-3280bca79efb",
   "bId": "931df78f-b759-497d-ba8d-be7d3f41f668"
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
   "a": "Zachary Lessner",
   "b": "Elysia Price",
   "team": "Bounce Philly",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": 0.6,
   "avgActual": -1.7,
   "avgExpected": -2.7,
   "aId": "2ce5ebef-8079-4871-8d2e-b34988abbaad",
   "bId": "a0ca4338-b610-4630-9f41-8dfd380e1af7"
  },
  {
   "a": "Andrew Bernard",
   "b": "Kevin Wysoczynski",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.6,
   "avgActual": -2.7,
   "avgExpected": -4.1,
   "aId": "8079e74f-c537-4e42-9590-e8d60f10ba3d",
   "bId": "f64f0cc2-6c82-4fe4-9992-747512700971"
  },
  {
   "a": "Arianna Haresign",
   "b": "Zach Bowe",
   "team": "Jersey Devil",
   "n": 9,
   "w": 8,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 4.2,
   "avgExpected": 3.4,
   "aId": "556f84fc-4f7c-4199-a104-6e906d71605c",
   "bId": "eebadc3a-5763-4612-9232-d3a98ea188d6"
  },
  {
   "a": "Ali Husain",
   "b": "Shreyas Pani",
   "team": "Monroe",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 2.3,
   "avgExpected": 1,
   "aId": "09d614ca-a9b2-44b6-a402-51046c6883af",
   "bId": "3cebd01c-ff32-4544-b6a6-2a68152b2ee5"
  },
  {
   "a": "Maeve Mcgowan",
   "b": "Matthew Matro",
   "team": "Jersey Devil",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 2,
   "avgExpected": 0.6,
   "aId": "24325b7a-50bd-42dc-84c2-e3ac54360f9c",
   "bId": "7b2e1bed-f387-48de-a028-bdde357bb3af"
  },
  {
   "a": "Anisha Malhotra",
   "b": "Chris Long",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 0,
   "avgExpected": -1.2,
   "aId": "2aa8b268-8c06-4453-9706-048009bf6af3",
   "bId": "f7f6ce2d-1cbb-45f9-ad8f-e42b89b99554"
  },
  {
   "a": "Gissel Escalante",
   "b": "Jason Makarevic",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 9,
   "w": 6,
   "l": 3,
   "synergy": 0.5,
   "avgActual": 3.4,
   "avgExpected": 2.7,
   "aId": "63221cc8-e303-4675-8dde-4fc77e871627",
   "bId": "f8835822-da21-4593-8b99-5665d2c2f3af"
  },
  {
   "a": "Sophia Kaufmann",
   "b": "Ruhi Shah",
   "team": "Monroe",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.5,
   "avgActual": -2.7,
   "avgExpected": -3.9,
   "aId": "44f258b0-52df-4c16-8d1e-a9f2d65b439e",
   "bId": "a2d56e71-3895-4316-9e9e-17565fb62295"
  },
  {
   "a": "Anisha Malhotra",
   "b": "Gissel Escalante",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 4.6,
   "avgExpected": 3.9,
   "aId": "2aa8b268-8c06-4453-9706-048009bf6af3",
   "bId": "63221cc8-e303-4675-8dde-4fc77e871627"
  },
  {
   "a": "Kerrin Maurer",
   "b": "Lissa Eagles",
   "team": "Pickle House",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 4.4,
   "avgExpected": 3.6,
   "aId": "1d63ce3d-20c2-40ae-94ca-e8e6e458004e",
   "bId": "9ec39678-a120-45de-b8a5-897b8cf900cd"
  },
  {
   "a": "Kenoa Tio",
   "b": "Andrew Wakefield",
   "team": "Dill Dinkers Hatboro The Factory",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 1,
   "avgExpected": 0.1,
   "aId": "10e9980e-34bf-43ea-b246-3280bca79efb",
   "bId": "5f429a7f-18c6-49e3-a804-6aa2a930f09c"
  },
  {
   "a": "Nathan Law",
   "b": "Damien Stahl",
   "team": "ACE Moorestown",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 0.6,
   "avgExpected": -0.4,
   "aId": "3c81d27f-9e68-439b-a476-f5ac1a54f45a",
   "bId": "45d2cd6f-4816-46b2-8e17-fab766cdb87e"
  },
  {
   "a": "Ken Velarde",
   "b": "Austin Williams",
   "team": "Home Court",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": 0.5,
   "avgActual": 0.4,
   "avgExpected": -0.3,
   "aId": "25aa47d0-76b8-48be-a5be-b1d33b423e82",
   "bId": "bb0bdc33-be20-4a45-9de9-0a52a88d7af9"
  },
  {
   "a": "Alex Boory",
   "b": "Charlotte Healey",
   "team": "Bounce Philly",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": 0.5,
   "avgActual": -0.2,
   "avgExpected": -1,
   "aId": "897f1edf-63f3-4eec-bcf5-d5a1bf0be859",
   "bId": "bbaf3def-a87b-4537-8701-4f5ae0108b1f"
  },
  {
   "a": "Jordan Denish",
   "b": "Alexander Tong",
   "team": "Bounce Philly",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 2,
   "avgExpected": 0.9,
   "aId": "8ae25144-966d-4de1-9cb3-513f7f217170",
   "bId": "d8d64dde-4ffb-4c49-aaa6-537b09c9c8d5"
  },
  {
   "a": "Julia Sternberg",
   "b": "Mark Kilimnik",
   "team": "Bounce Philly",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.5,
   "avgActual": -0.5,
   "avgExpected": -1.4,
   "aId": "ccd8a76f-df3a-4ab9-97b6-bae0f860a431",
   "bId": "d6c15f91-4cc9-4612-8ec3-8f4ebd4e0cc1"
  },
  {
   "a": "Nathan Law",
   "b": "Manny Lai",
   "team": "ACE Moorestown",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 1.3,
   "avgExpected": 0.5,
   "aId": "3c81d27f-9e68-439b-a476-f5ac1a54f45a",
   "bId": "f2a53ee2-a602-4e58-8326-6d0624af34af"
  },
  {
   "a": "Annemarie Mccartney",
   "b": "Manny Lai",
   "team": "ACE Moorestown",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 4.8,
   "avgExpected": 3.7,
   "aId": "d08d78db-7d20-4dc2-a37b-41841c4624fd",
   "bId": "f2a53ee2-a602-4e58-8326-6d0624af34af"
  },
  {
   "a": "Jack Blumberg",
   "b": "Manny Lai",
   "team": "ACE Moorestown",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 0.5,
   "avgActual": 0.3,
   "avgExpected": -0.5,
   "aId": "f2929b28-a6ee-45e5-9846-da957b6d8734",
   "bId": "f2a53ee2-a602-4e58-8326-6d0624af34af"
  },
  {
   "a": "Amanda Ksiezopolski",
   "b": "Shreyas Pani",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.5,
   "avgActual": -2.7,
   "avgExpected": -3.7,
   "aId": "2138af89-34bc-4ee2-9955-ff16f0997031",
   "bId": "3cebd01c-ff32-4544-b6a6-2a68152b2ee5"
  },
  {
   "a": "Alex Boory",
   "b": "Rachel Alfano",
   "team": "Bounce Philly",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 2.7,
   "avgExpected": 1.5,
   "aId": "897f1edf-63f3-4eec-bcf5-d5a1bf0be859",
   "bId": "ce7aca89-06ac-4cd9-8944-a482216ffd58"
  },
  {
   "a": "Stacy Walkowitz",
   "b": "Shelah Wallace",
   "team": "ACE Moorestown",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 2.3,
   "avgExpected": 1.3,
   "aId": "a19b179a-6a16-43a7-b2af-8d6e8d1a1205",
   "bId": "fa519fb1-87ca-4a7b-9265-4aba9807929f"
  },
  {
   "a": "Susan Ackley",
   "b": "Aimee Castellano",
   "team": "Flemington",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": 0.4,
   "avgActual": -4.4,
   "avgExpected": -5.1,
   "aId": "07a0e948-6308-4920-a6a8-1d5945552ecb",
   "bId": "e76985fb-efd1-4180-a340-e4f36abbc8b4"
  },
  {
   "a": "Ryan Rosen",
   "b": "William Lee",
   "team": "Dill Dinkers Hatboro Aces",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.4,
   "avgActual": -0.7,
   "avgExpected": -1.6,
   "aId": "97f2b250-2030-4296-be61-63cffb17043b",
   "bId": "9e264c96-36cf-45a9-90ad-1e125a82c851"
  },
  {
   "a": "Teresa Wang",
   "b": "Nam Barsh",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 2.3,
   "avgExpected": 1.4,
   "aId": "741de6b9-5fe7-49aa-9c55-5ff4050bb7a1",
   "bId": "fa43af77-3cd1-4e61-a8dc-bd714b65d517"
  },
  {
   "a": "Lou Frignito",
   "b": "Sarah Kline",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 3.7,
   "avgExpected": 2.7,
   "aId": "1afca308-dca6-4828-946a-0ca6ad1b0c44",
   "bId": "b122f262-f81d-4fb2-9f11-c473d18a4260"
  },
  {
   "a": "Alex Abad",
   "b": "Rachel Alfano",
   "team": "Bounce Philly",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 1.6,
   "avgExpected": 0.9,
   "aId": "bc881ebc-7a42-43be-b1b2-9c29c59a4132",
   "bId": "ce7aca89-06ac-4cd9-8944-a482216ffd58"
  },
  {
   "a": "Sara Synn",
   "b": "Shreyas Pani",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.4,
   "avgActual": -3,
   "avgExpected": -3.9,
   "aId": "37acfc18-a8d1-4ea0-8c21-0d830c9f4f90",
   "bId": "3cebd01c-ff32-4544-b6a6-2a68152b2ee5"
  },
  {
   "a": "Catherine Stewart",
   "b": "Eva Danieli",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 0,
   "avgExpected": -0.9,
   "aId": "112622af-3d12-4dba-ad36-7601c8e6021c",
   "bId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae"
  },
  {
   "a": "Taylor Hartman",
   "b": "Zach Hollmann",
   "team": "Pickle House",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 1,
   "avgExpected": 0.3,
   "aId": "3bf2f55b-b253-4d2a-b1b9-d5953ef1b8ec",
   "bId": "8aef2d8a-0bd4-45df-b5d1-1a120a81ef0f"
  },
  {
   "a": "Julia Sternberg",
   "b": "Bruno Casino",
   "team": "Bounce Philly",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.4,
   "avgActual": -0.3,
   "avgExpected": -1.3,
   "aId": "ccd8a76f-df3a-4ab9-97b6-bae0f860a431",
   "bId": "d195dff9-7f38-402c-8164-44640f89c3fa"
  },
  {
   "a": "Rayna Baizman",
   "b": "Cristi Landrigan",
   "team": "Dill Dinkers Hatboro The Factory",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 3,
   "avgExpected": 2.1,
   "aId": "108620c9-1cbb-4ea0-846c-bc781f1decea",
   "bId": "1be028eb-1b92-4961-b508-fa0879c78017"
  },
  {
   "a": "Maanav Shah",
   "b": "Dilan Shah",
   "team": "Monroe",
   "n": 16,
   "w": 10,
   "l": 6,
   "synergy": 0.3,
   "avgActual": 1.6,
   "avgExpected": 1.1,
   "aId": "0a1270b0-26f6-4328-85bc-bf3f329a746e",
   "bId": "91d23f87-e0fc-4448-890e-c3abd96c70b4"
  },
  {
   "a": "Shreyas Pani",
   "b": "Eric Lin",
   "team": "Monroe",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 1.2,
   "avgExpected": 0.7,
   "aId": "3cebd01c-ff32-4544-b6a6-2a68152b2ee5",
   "bId": "4ce1c715-b187-47c5-b6dc-d079f802499d"
  },
  {
   "a": "Maanav Shah",
   "b": "Richa Shah",
   "team": "Monroe",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 1.9,
   "avgExpected": 1.4,
   "aId": "0a1270b0-26f6-4328-85bc-bf3f329a746e",
   "bId": "6b80047c-ca16-4506-a2a4-ed894dc0c37f"
  },
  {
   "a": "Suzi Battison",
   "b": "Thomas Connolly",
   "team": "Flemington",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 0.3,
   "avgActual": 0.4,
   "avgExpected": -0.1,
   "aId": "40579892-d9bf-4d1d-9417-5830d5d45093",
   "bId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3"
  },
  {
   "a": "Robert Khalev",
   "b": "Joey Angelson",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.3,
   "avgActual": -0.2,
   "avgExpected": -0.8,
   "aId": "094c3b61-96e3-48c6-8172-10b7eaf528f4",
   "bId": "6035850e-af27-40db-bb81-f5787f344871"
  },
  {
   "a": "Ariana Rizvani",
   "b": "Raneeta Sawhney-Rigby",
   "team": "Home Court",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.3,
   "avgActual": -3,
   "avgExpected": -3.8,
   "aId": "1c7e9745-06f1-4486-9b14-5f4205128867",
   "bId": "8ee2191e-34c1-4f6b-b366-5a1bbc5bcb36"
  },
  {
   "a": "Krysti Maronski-Neufeldt",
   "b": "Jack Blumberg",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 2.7,
   "avgExpected": 1.9,
   "aId": "29a7f562-a596-421f-a62d-33409169805d",
   "bId": "f2929b28-a6ee-45e5-9846-da957b6d8734"
  },
  {
   "a": "Krysti Maronski-Neufeldt",
   "b": "Manny Lai",
   "team": "ACE Moorestown",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 0.5,
   "avgExpected": -0.2,
   "aId": "29a7f562-a596-421f-a62d-33409169805d",
   "bId": "f2a53ee2-a602-4e58-8326-6d0624af34af"
  },
  {
   "a": "Zoe Ousouljoglou",
   "b": "Anisha Malhotra",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.3,
   "avgActual": 5,
   "avgExpected": 4.2,
   "aId": "269fe355-d2eb-41b8-9e92-a1438aec65e3",
   "bId": "2aa8b268-8c06-4453-9706-048009bf6af3"
  },
  {
   "a": "Ben Mead",
   "b": "Shelah Wallace",
   "team": "ACE Moorestown",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 3,
   "avgExpected": 2.4,
   "aId": "7858dda8-168b-4a84-8d5d-7a6571e9313a",
   "bId": "fa519fb1-87ca-4a7b-9265-4aba9807929f"
  },
  {
   "a": "Shreyas Pani",
   "b": "Sophia Kaufmann",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.2,
   "avgActual": -1.7,
   "avgExpected": -2.2,
   "aId": "3cebd01c-ff32-4544-b6a6-2a68152b2ee5",
   "bId": "44f258b0-52df-4c16-8d1e-a9f2d65b439e"
  },
  {
   "a": "Anthony Ursino",
   "b": "Sophia Kaufmann",
   "team": "Monroe",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": 0.2,
   "avgActual": -4.2,
   "avgExpected": -4.6,
   "aId": "1406ff1f-3597-4128-a629-7dfd1dfe1323",
   "bId": "44f258b0-52df-4c16-8d1e-a9f2d65b439e"
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
   "a": "Yoyo Shen",
   "b": "Lissa Eagles",
   "team": "Pickle House",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 5,
   "avgExpected": 4.6,
   "aId": "9d47a1aa-c44c-4ddd-8953-dc40f79b1016",
   "bId": "9ec39678-a120-45de-b8a5-897b8cf900cd"
  },
  {
   "a": "Harriet Levin",
   "b": "Nam Barsh",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.2,
   "avgActual": -0.3,
   "avgExpected": -0.8,
   "aId": "aeff8297-a479-4b3b-9a49-72c410ac8e26",
   "bId": "fa43af77-3cd1-4e61-a8dc-bd714b65d517"
  },
  {
   "a": "Emily Babinsky",
   "b": "Dipen Bhatt",
   "team": "Pickle House",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.2,
   "avgActual": -0.3,
   "avgExpected": -0.7,
   "aId": "d0e2c1ea-529d-4364-b521-cb205ecdded3",
   "bId": "fe8af1d3-ff62-430d-90af-32794cc7b912"
  },
  {
   "a": "Elysia Price",
   "b": "Rachel Alfano",
   "team": "Bounce Philly",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.2,
   "avgActual": -1.2,
   "avgExpected": -1.7,
   "aId": "a0ca4338-b610-4630-9f41-8dfd380e1af7",
   "bId": "ce7aca89-06ac-4cd9-8944-a482216ffd58"
  },
  {
   "a": "Anthony Ursino",
   "b": "Amalia Ditrapani",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 0.3,
   "avgExpected": -0.2,
   "aId": "1406ff1f-3597-4128-a629-7dfd1dfe1323",
   "bId": "32ac3308-4ddd-496b-8942-ca2422322c06"
  },
  {
   "a": "Catherine Stewart",
   "b": "Kevin Wysoczynski",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 0.7,
   "avgExpected": 0.3,
   "aId": "112622af-3d12-4dba-ad36-7601c8e6021c",
   "bId": "f64f0cc2-6c82-4fe4-9992-747512700971"
  },
  {
   "a": "Chad Durkin",
   "b": "Hruday Vemparala",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 3,
   "avgExpected": 2.5,
   "aId": "54ed1c79-aaa0-486d-851b-d5a4db375b94",
   "bId": "bc3db6dc-48f5-46f3-aec3-638d15ca7285"
  },
  {
   "a": "Susan Ackley",
   "b": "Patrick Ryan",
   "team": "Flemington",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.2,
   "avgActual": -0.4,
   "avgExpected": -0.7,
   "aId": "07a0e948-6308-4920-a6a8-1d5945552ecb",
   "bId": "8344fbda-35c2-4ce0-94ad-158090d2d5ba"
  },
  {
   "a": "Brittany Hall",
   "b": "Manny Lai",
   "team": "ACE Moorestown",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.2,
   "avgActual": -0.7,
   "avgExpected": -1.1,
   "aId": "17cc768d-f6c8-484c-814e-063d17cec72f",
   "bId": "f2a53ee2-a602-4e58-8326-6d0624af34af"
  },
  {
   "a": "Krysti Maronski-Neufeldt",
   "b": "Annemarie Mccartney",
   "team": "ACE Moorestown",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 4.8,
   "avgExpected": 4.4,
   "aId": "29a7f562-a596-421f-a62d-33409169805d",
   "bId": "d08d78db-7d20-4dc2-a37b-41841c4624fd"
  },
  {
   "a": "Matthew Matro",
   "b": "Zach Bowe",
   "team": "Jersey Devil",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 1,
   "avgExpected": 0.6,
   "aId": "7b2e1bed-f387-48de-a028-bdde357bb3af",
   "bId": "eebadc3a-5763-4612-9232-d3a98ea188d6"
  },
  {
   "a": "Matthew Chen",
   "b": "Zach Bowe",
   "team": "Jersey Devil",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": 0.2,
   "avgActual": -1.6,
   "avgExpected": -1.9,
   "aId": "68e9ac74-5119-4dbb-8503-72bcdbade183",
   "bId": "eebadc3a-5763-4612-9232-d3a98ea188d6"
  },
  {
   "a": "Nathan Law",
   "b": "Ben Mead",
   "team": "ACE Moorestown",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.2,
   "avgActual": 2.8,
   "avgExpected": 2.3,
   "aId": "3c81d27f-9e68-439b-a476-f5ac1a54f45a",
   "bId": "7858dda8-168b-4a84-8d5d-7a6571e9313a"
  },
  {
   "a": "Dustin Rabinowitz",
   "b": "Mark Kilimnik",
   "team": "Bounce Philly",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.2,
   "avgActual": 4.7,
   "avgExpected": 4.1,
   "aId": "d23839c0-334b-4423-9305-0c6281523d5d",
   "bId": "d6c15f91-4cc9-4612-8ec3-8f4ebd4e0cc1"
  },
  {
   "a": "Rachel Berger",
   "b": "Michaela Pierznik",
   "team": "Jersey Devil",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 0.8,
   "avgExpected": 0.6,
   "aId": "9b7488c5-bc66-41e4-8fa5-873e70c190e3",
   "bId": "c885c4ae-2685-4fc8-9b35-40cf9f465915"
  },
  {
   "a": "Cristi Landrigan",
   "b": "Conor Landrigan",
   "team": "Dill Dinkers Hatboro The Factory",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 3.7,
   "avgExpected": 3.5,
   "aId": "1be028eb-1b92-4961-b508-fa0879c78017",
   "bId": "931df78f-b759-497d-ba8d-be7d3f41f668"
  },
  {
   "a": "Chris Tabeling",
   "b": "Shashank Kamdar",
   "team": "Bounce Malvern",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.1,
   "avgActual": 0.2,
   "avgExpected": -0.1,
   "aId": "0ee404b2-e9e6-49b4-b9eb-bc2120473f76",
   "bId": "56db4b56-6166-437f-8ece-26576b7042e5"
  },
  {
   "a": "Taylor Hartman",
   "b": "Emily Babinsky",
   "team": "Pickle House",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 0.1,
   "avgActual": 3.4,
   "avgExpected": 3.3,
   "aId": "3bf2f55b-b253-4d2a-b1b9-d5953ef1b8ec",
   "bId": "d0e2c1ea-529d-4364-b521-cb205ecdded3"
  },
  {
   "a": "Zach Hollmann",
   "b": "Dipen Bhatt",
   "team": "Pickle House",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.1,
   "avgActual": -3.3,
   "avgExpected": -3.5,
   "aId": "8aef2d8a-0bd4-45df-b5d1-1a120a81ef0f",
   "bId": "fe8af1d3-ff62-430d-90af-32794cc7b912"
  },
  {
   "a": "Brittany Hall",
   "b": "Damien Stahl",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 0.7,
   "avgExpected": 0.4,
   "aId": "17cc768d-f6c8-484c-814e-063d17cec72f",
   "bId": "45d2cd6f-4816-46b2-8e17-fab766cdb87e"
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
   "avgExpected": -1.1,
   "aId": "1a851b17-0445-4807-b476-575fd261f774",
   "bId": "261d14c5-288e-4349-a3ed-50bad4b620c1"
  },
  {
   "a": "Catherine Stewart",
   "b": "Joey Angelson",
   "team": "Jersey Pickleball Club",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.1,
   "avgActual": -1,
   "avgExpected": -1.1,
   "aId": "112622af-3d12-4dba-ad36-7601c8e6021c",
   "bId": "6035850e-af27-40db-bb81-f5787f344871"
  },
  {
   "a": "Camrin Cronheim",
   "b": "Jenna Irwin",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 3.3,
   "avgExpected": 3.1,
   "aId": "8143def5-d564-4010-8258-ccb71cd481f1",
   "bId": "85e52e3b-5238-4583-8d1a-cc57f8218ef6"
  },
  {
   "a": "Maeve Mcgowan",
   "b": "Matthew Chen",
   "team": "Jersey Devil",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.1,
   "avgActual": -3.7,
   "avgExpected": -3.8,
   "aId": "24325b7a-50bd-42dc-84c2-e3ac54360f9c",
   "bId": "68e9ac74-5119-4dbb-8503-72bcdbade183"
  },
  {
   "a": "Chris Tabeling",
   "b": "Lou Frignito",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.1,
   "avgActual": 4.3,
   "avgExpected": 4.1,
   "aId": "0ee404b2-e9e6-49b4-b9eb-bc2120473f76",
   "bId": "1afca308-dca6-4828-946a-0ca6ad1b0c44"
  },
  {
   "a": "Zoe Ousouljoglou",
   "b": "Paula Ro",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 2.7,
   "avgExpected": 2.4,
   "aId": "269fe355-d2eb-41b8-9e92-a1438aec65e3",
   "bId": "3cf3093b-1667-4242-9ad5-1d72fc5d24f8"
  },
  {
   "a": "Allison Tarnoff",
   "b": "Steven Fernandez",
   "team": "Dill Dinkers Hatboro The Factory",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 1,
   "avgExpected": 0.9,
   "aId": "001bf0ea-f8b1-402f-ab07-88ed85b2b510",
   "bId": "7a9bc90f-45eb-410a-a56b-a1b7c9a8145c"
  },
  {
   "a": "Charlotte Healey",
   "b": "Julia Sternberg",
   "team": "Bounce Philly",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.1,
   "avgActual": -1.7,
   "avgExpected": -2,
   "aId": "bbaf3def-a87b-4537-8701-4f5ae0108b1f",
   "bId": "ccd8a76f-df3a-4ab9-97b6-bae0f860a431"
  },
  {
   "a": "Richa Shah",
   "b": "Dilan Shah",
   "team": "Monroe",
   "n": 10,
   "w": 1,
   "l": 9,
   "synergy": 0,
   "avgActual": -3.2,
   "avgExpected": -3.2,
   "aId": "6b80047c-ca16-4506-a2a4-ed894dc0c37f",
   "bId": "91d23f87-e0fc-4448-890e-c3abd96c70b4"
  },
  {
   "a": "Camrin Cronheim",
   "b": "Jason Makarevic",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 10,
   "w": 3,
   "l": 7,
   "synergy": 0,
   "avgActual": -1.2,
   "avgExpected": -1.2,
   "aId": "8143def5-d564-4010-8258-ccb71cd481f1",
   "bId": "f8835822-da21-4593-8b99-5665d2c2f3af"
  },
  {
   "a": "Ryan Rosen",
   "b": "Will Delaney",
   "team": "Dill Dinkers Hatboro Aces",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0,
   "avgActual": -1,
   "avgExpected": -0.9,
   "aId": "97f2b250-2030-4296-be61-63cffb17043b",
   "bId": "a242cd39-8574-444a-99dc-95967faad87b"
  },
  {
   "a": "Danielle Bernero",
   "b": "Michelle Quach",
   "team": "Jersey Devil",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0,
   "avgActual": -0.7,
   "avgExpected": -0.8,
   "aId": "317f260e-551b-4f91-ab92-71440e5f05be",
   "bId": "5f0dcbe9-bb0e-496d-99d2-06f01ff2c77b"
  },
  {
   "a": "Sheila Siu",
   "b": "Aidan Jackson",
   "team": "Home Court",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0,
   "avgActual": -3.3,
   "avgExpected": -3.3,
   "aId": "25879a0b-5df5-4c12-9066-4aaaf4e6cbc0",
   "bId": "c821be96-b764-46ad-85a2-8927711684c5"
  },
  {
   "a": "Marina Cozac",
   "b": "Dylan Ashbach",
   "team": "Dill Dinkers Hatboro The Factory",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0,
   "avgActual": 8.7,
   "avgExpected": 8.8,
   "aId": "13c8aeab-aa52-4bc2-bf23-96a2cabe4181",
   "bId": "9c41a810-1be6-4e08-8a29-51558c29cb86"
  },
  {
   "a": "Harriet Levin",
   "b": "Sarah Kline",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0,
   "avgActual": -4.7,
   "avgExpected": -4.6,
   "aId": "aeff8297-a479-4b3b-9a49-72c410ac8e26",
   "bId": "b122f262-f81d-4fb2-9f11-c473d18a4260"
  },
  {
   "a": "Alyssa Boyle",
   "b": "Elysia Price",
   "team": "Bounce Philly",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0,
   "avgActual": 3,
   "avgExpected": 3,
   "aId": "22123177-1eb2-4285-bc92-f75799e175dd",
   "bId": "a0ca4338-b610-4630-9f41-8dfd380e1af7"
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
   "avgExpected": -2.2,
   "aId": "13918154-3673-4dae-946a-2c2d4ac8863f",
   "bId": "6035850e-af27-40db-bb81-f5787f344871"
  },
  {
   "a": "Katalina Wang",
   "b": "Joey Angelson",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0,
   "avgActual": -1,
   "avgExpected": -1,
   "aId": "2d602f38-7eda-4a7b-a3a2-98b40e443b79",
   "bId": "6035850e-af27-40db-bb81-f5787f344871"
  },
  {
   "a": "Megan Harvey",
   "b": "Nick Meale",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0,
   "avgActual": 2.7,
   "avgExpected": 2.6,
   "aId": "4d576bb5-e9e5-4ad1-a18f-022508c6a161",
   "bId": "ec0bad09-8256-49b3-ae86-3add22dd995f"
  },
  {
   "a": "Arianna Haresign",
   "b": "Michelle Quach",
   "team": "Jersey Devil",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0,
   "avgActual": 2.4,
   "avgExpected": 2.3,
   "aId": "556f84fc-4f7c-4199-a104-6e906d71605c",
   "bId": "5f0dcbe9-bb0e-496d-99d2-06f01ff2c77b"
  },
  {
   "a": "Thomas Connolly",
   "b": "Kelly Arvidson",
   "team": "Flemington",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0,
   "avgActual": -4,
   "avgExpected": -4.1,
   "aId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3",
   "bId": "c053f5d6-16e1-4847-b27b-49fe41f367c6"
  },
  {
   "a": "Sarah Kline",
   "b": "Nick Meale",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0,
   "avgActual": 4,
   "avgExpected": 4,
   "aId": "b122f262-f81d-4fb2-9f11-c473d18a4260",
   "bId": "ec0bad09-8256-49b3-ae86-3add22dd995f"
  },
  {
   "a": "Andrew Cooley",
   "b": "Aidan Jackson",
   "team": "Home Court",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0,
   "avgActual": -5.3,
   "avgExpected": -5.4,
   "aId": "4bc5dc80-f744-41e1-ab6e-a02c600abed8",
   "bId": "c821be96-b764-46ad-85a2-8927711684c5"
  },
  {
   "a": "Susan Ackley",
   "b": "Ross Switkes",
   "team": "Flemington",
   "n": 10,
   "w": 5,
   "l": 5,
   "synergy": -0.1,
   "avgActual": -0.9,
   "avgExpected": -0.8,
   "aId": "07a0e948-6308-4920-a6a8-1d5945552ecb",
   "bId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b"
  },
  {
   "a": "Kerrin Maurer",
   "b": "Michael Li",
   "team": "Pickle House",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 4.3,
   "avgExpected": 4.4,
   "aId": "1d63ce3d-20c2-40ae-94ca-e8e6e458004e",
   "bId": "dc81629b-4ff7-45c4-b38e-b3b836bc0769"
  },
  {
   "a": "Patrick Ryan",
   "b": "Robbie Oddy",
   "team": "Flemington",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.1,
   "avgActual": 0,
   "avgExpected": 0.1,
   "aId": "8344fbda-35c2-4ce0-94ad-158090d2d5ba",
   "bId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6"
  },
  {
   "a": "Ryan Furman",
   "b": "Michaela Pierznik",
   "team": "Jersey Devil",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 1,
   "avgExpected": 1.2,
   "aId": "a89121dd-192b-486d-b39d-18ee8447d641",
   "bId": "c885c4ae-2685-4fc8-9b35-40cf9f465915"
  },
  {
   "a": "Sarah Ross",
   "b": "Claudya Elefante",
   "team": "Dill Dinkers Hatboro Aces",
   "n": 8,
   "w": 1,
   "l": 7,
   "synergy": -0.1,
   "avgActual": -2.7,
   "avgExpected": -2.6,
   "aId": "261d14c5-288e-4349-a3ed-50bad4b620c1",
   "bId": "c6a7f237-8e09-45e4-b34e-d179e46b61b1"
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
   "a": "Kenoa Tio",
   "b": "Marina Cozac",
   "team": "Dill Dinkers Hatboro The Factory",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": -0.1,
   "avgActual": 6.3,
   "avgExpected": 6.5,
   "aId": "10e9980e-34bf-43ea-b246-3280bca79efb",
   "bId": "13c8aeab-aa52-4bc2-bf23-96a2cabe4181"
  },
  {
   "a": "Kenoa Tio",
   "b": "Varun Prakash",
   "team": "Dill Dinkers Hatboro The Factory",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 2.8,
   "avgExpected": 3,
   "aId": "10e9980e-34bf-43ea-b246-3280bca79efb",
   "bId": "67dbfc4f-20f7-4299-bc2f-6cc70cf747ab"
  },
  {
   "a": "Taylor Hartman",
   "b": "Yoyo Shen",
   "team": "Pickle House",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -0.1,
   "avgActual": 1.9,
   "avgExpected": 2.1,
   "aId": "3bf2f55b-b253-4d2a-b1b9-d5953ef1b8ec",
   "bId": "9d47a1aa-c44c-4ddd-8953-dc40f79b1016"
  },
  {
   "a": "Anushk Gupta",
   "b": "William Lee",
   "team": "Dill Dinkers Hatboro Aces",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -2.7,
   "avgExpected": -2.5,
   "aId": "1a851b17-0445-4807-b476-575fd261f774",
   "bId": "9e264c96-36cf-45a9-90ad-1e125a82c851"
  },
  {
   "a": "Austin Williams",
   "b": "Jen Vorel",
   "team": "Home Court",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.1,
   "avgActual": 1,
   "avgExpected": 1.2,
   "aId": "bb0bdc33-be20-4a45-9de9-0a52a88d7af9",
   "bId": "f9c1683f-9cc2-4b5d-aa29-f90e5102e687"
  },
  {
   "a": "Anthony Ursino",
   "b": "Dilan Shah",
   "team": "Monroe",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.1,
   "avgActual": -2.4,
   "avgExpected": -2.2,
   "aId": "1406ff1f-3597-4128-a629-7dfd1dfe1323",
   "bId": "91d23f87-e0fc-4448-890e-c3abd96c70b4"
  },
  {
   "a": "Mickey Cook",
   "b": "Dipen Bhatt",
   "team": "Pickle House",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.1,
   "avgActual": -2.5,
   "avgExpected": -2.4,
   "aId": "3babc519-f395-4ef7-8f6f-b38d25c139d0",
   "bId": "fe8af1d3-ff62-430d-90af-32794cc7b912"
  },
  {
   "a": "Rayna Baizman",
   "b": "Varun Prakash",
   "team": "Dill Dinkers Hatboro The Factory",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 1.5,
   "avgExpected": 1.7,
   "aId": "108620c9-1cbb-4ea0-846c-bc781f1decea",
   "bId": "67dbfc4f-20f7-4299-bc2f-6cc70cf747ab"
  },
  {
   "a": "Johny Mario",
   "b": "Tyler Arsenault",
   "team": "Jersey Devil",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -1.3,
   "avgExpected": -1,
   "aId": "831c9fae-38c6-4961-8664-634087f5f2f9",
   "bId": "e76d2d63-f7dc-40e7-aca2-d9b3aecf4d3e"
  },
  {
   "a": "Krysti Maronski-Neufeldt",
   "b": "Stacy Walkowitz",
   "team": "ACE Moorestown",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 2.3,
   "avgExpected": 2.5,
   "aId": "29a7f562-a596-421f-a62d-33409169805d",
   "bId": "a19b179a-6a16-43a7-b2af-8d6e8d1a1205"
  },
  {
   "a": "Yuki Kim",
   "b": "Nam Barsh",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -0.7,
   "avgExpected": -0.5,
   "aId": "afec0287-b62d-4aaf-977f-afb96aed0e17",
   "bId": "fa43af77-3cd1-4e61-a8dc-bd714b65d517"
  },
  {
   "a": "Chris Damato",
   "b": "Michael Li",
   "team": "Pickle House",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.2,
   "avgActual": 1.3,
   "avgExpected": 1.7,
   "aId": "445e89c8-a23c-440c-bd3c-7eab366bdd85",
   "bId": "dc81629b-4ff7-45c4-b38e-b3b836bc0769"
  },
  {
   "a": "Harriet Levin",
   "b": "Nick Meale",
   "team": "Bounce Malvern",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.2,
   "avgActual": 0.6,
   "avgExpected": 1,
   "aId": "aeff8297-a479-4b3b-9a49-72c410ac8e26",
   "bId": "ec0bad09-8256-49b3-ae86-3add22dd995f"
  },
  {
   "a": "Yuki Kim",
   "b": "Nick Meale",
   "team": "Bounce Malvern",
   "n": 14,
   "w": 10,
   "l": 4,
   "synergy": -0.2,
   "avgActual": 4.9,
   "avgExpected": 5.3,
   "aId": "afec0287-b62d-4aaf-977f-afb96aed0e17",
   "bId": "ec0bad09-8256-49b3-ae86-3add22dd995f"
  },
  {
   "a": "Chris Tabeling",
   "b": "Megan Harvey",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.2,
   "avgActual": -3.7,
   "avgExpected": -3.4,
   "aId": "0ee404b2-e9e6-49b4-b9eb-bc2120473f76",
   "bId": "4d576bb5-e9e5-4ad1-a18f-022508c6a161"
  },
  {
   "a": "Kaylyn Swankoski",
   "b": "Hannah Nussbaum",
   "team": "Dill Dinkers Hatboro The Factory",
   "n": 6,
   "w": 6,
   "l": 0,
   "synergy": -0.2,
   "avgActual": 2.8,
   "avgExpected": 3.1,
   "aId": "72949bef-7cab-4942-ab45-e5203024a8d5",
   "bId": "84b7c449-501c-438d-a3eb-ee67cc92fa0e"
  },
  {
   "a": "Rachel Alfano",
   "b": "Mark Kilimnik",
   "team": "Bounce Philly",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.2,
   "avgActual": 2.8,
   "avgExpected": 3.1,
   "aId": "ce7aca89-06ac-4cd9-8944-a482216ffd58",
   "bId": "d6c15f91-4cc9-4612-8ec3-8f4ebd4e0cc1"
  },
  {
   "a": "Sheila Siu",
   "b": "Noah Goding",
   "team": "Home Court",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -0.2,
   "avgActual": -4.6,
   "avgExpected": -4.2,
   "aId": "25879a0b-5df5-4c12-9066-4aaaf4e6cbc0",
   "bId": "80138d68-a74a-4f8c-aea1-7d31e682efa8"
  },
  {
   "a": "Maanav Shah",
   "b": "Shreyas Pani",
   "team": "Monroe",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.2,
   "avgActual": 1.3,
   "avgExpected": 1.6,
   "aId": "0a1270b0-26f6-4328-85bc-bf3f329a746e",
   "bId": "3cebd01c-ff32-4544-b6a6-2a68152b2ee5"
  },
  {
   "a": "Ross Switkes",
   "b": "Melissa Dardani",
   "team": "Flemington",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 1,
   "avgExpected": 1.4,
   "aId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b",
   "bId": "ef423f8a-5c2c-4a12-9f37-b41ff6d6c530"
  },
  {
   "a": "Alyssa Tartaglia",
   "b": "Ryan Rosen",
   "team": "Dill Dinkers Hatboro Aces",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.2,
   "avgActual": -5,
   "avgExpected": -4.6,
   "aId": "881ed39f-f9fc-4e9d-8ed3-d13d9ebc7b13",
   "bId": "97f2b250-2030-4296-be61-63cffb17043b"
  },
  {
   "a": "Anushk Gupta",
   "b": "Ryan Rosen",
   "team": "Dill Dinkers Hatboro Aces",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.2,
   "avgActual": -3.2,
   "avgExpected": -2.9,
   "aId": "1a851b17-0445-4807-b476-575fd261f774",
   "bId": "97f2b250-2030-4296-be61-63cffb17043b"
  },
  {
   "a": "Alex Boory",
   "b": "Bruno Casino",
   "team": "Bounce Philly",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 1.3,
   "avgExpected": 1.8,
   "aId": "897f1edf-63f3-4eec-bcf5-d5a1bf0be859",
   "bId": "d195dff9-7f38-402c-8164-44640f89c3fa"
  },
  {
   "a": "Krysti Maronski-Neufeldt",
   "b": "Nathan Law",
   "team": "ACE Moorestown",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.2,
   "avgActual": -1,
   "avgExpected": -0.6,
   "aId": "29a7f562-a596-421f-a62d-33409169805d",
   "bId": "3c81d27f-9e68-439b-a476-f5ac1a54f45a"
  },
  {
   "a": "Ali Husain",
   "b": "Maanav Shah",
   "team": "Monroe",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 3.5,
   "avgExpected": 3.8,
   "aId": "09d614ca-a9b2-44b6-a402-51046c6883af",
   "bId": "0a1270b0-26f6-4328-85bc-bf3f329a746e"
  },
  {
   "a": "Alyssa Boyle",
   "b": "Zachary Lessner",
   "team": "Bounce Philly",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 3.3,
   "avgExpected": 3.8,
   "aId": "22123177-1eb2-4285-bc92-f75799e175dd",
   "bId": "2ce5ebef-8079-4871-8d2e-b34988abbaad"
  },
  {
   "a": "Anthony Ursino",
   "b": "Morgan Fishman",
   "team": "Monroe",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -0.3,
   "avgActual": -4.5,
   "avgExpected": -4,
   "aId": "1406ff1f-3597-4128-a629-7dfd1dfe1323",
   "bId": "5ccee070-0af8-4363-9ddb-6ce8ebce098f"
  },
  {
   "a": "Gissel Escalante",
   "b": "Chris Long",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.3,
   "avgActual": 1,
   "avgExpected": 1.6,
   "aId": "63221cc8-e303-4675-8dde-4fc77e871627",
   "bId": "f7f6ce2d-1cbb-45f9-ad8f-e42b89b99554"
  },
  {
   "a": "Camrin Cronheim",
   "b": "Sidd Pathare",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 10,
   "w": 4,
   "l": 6,
   "synergy": -0.3,
   "avgActual": -0.5,
   "avgExpected": 0,
   "aId": "8143def5-d564-4010-8258-ccb71cd481f1",
   "bId": "a73f249d-c1c9-4516-bc79-e9732581f098"
  },
  {
   "a": "Thomas Connolly",
   "b": "Melissa Dardani",
   "team": "Flemington",
   "n": 10,
   "w": 5,
   "l": 5,
   "synergy": -0.3,
   "avgActual": -1.9,
   "avgExpected": -1.5,
   "aId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3",
   "bId": "ef423f8a-5c2c-4a12-9f37-b41ff6d6c530"
  },
  {
   "a": "Erika Richards",
   "b": "Claudya Elefante",
   "team": "Dill Dinkers Hatboro Aces",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.3,
   "avgActual": -3,
   "avgExpected": -2.4,
   "aId": "065e606f-3722-4434-8848-28e4d10ccabd",
   "bId": "c6a7f237-8e09-45e4-b34e-d179e46b61b1"
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
   "avgExpected": -0.5,
   "aId": "aa0d9944-a9d3-46d5-8650-54e894adfeb2",
   "bId": "f64f0cc2-6c82-4fe4-9992-747512700971"
  },
  {
   "a": "Varun Prakash",
   "b": "Dylan Ashbach",
   "team": "Dill Dinkers Hatboro The Factory",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 1.8,
   "avgExpected": 2.3,
   "aId": "67dbfc4f-20f7-4299-bc2f-6cc70cf747ab",
   "bId": "9c41a810-1be6-4e08-8a29-51558c29cb86"
  },
  {
   "a": "Megan Harvey",
   "b": "Nam Barsh",
   "team": "Bounce Malvern",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -1.9,
   "avgExpected": -1.4,
   "aId": "4d576bb5-e9e5-4ad1-a18f-022508c6a161",
   "bId": "fa43af77-3cd1-4e61-a8dc-bd714b65d517"
  },
  {
   "a": "Anita Buggins",
   "b": "Stacy Walkowitz",
   "team": "ACE Moorestown",
   "n": 6,
   "w": 6,
   "l": 0,
   "synergy": -0.3,
   "avgActual": 2.7,
   "avgExpected": 3.2,
   "aId": "2ea90a18-1ef3-4ade-a855-2a3fd178abd7",
   "bId": "a19b179a-6a16-43a7-b2af-8d6e8d1a1205"
  },
  {
   "a": "Alyssa Boyle",
   "b": "William Hayes",
   "team": "Bounce Philly",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.3,
   "avgActual": 3,
   "avgExpected": 3.5,
   "aId": "22123177-1eb2-4285-bc92-f75799e175dd",
   "bId": "4dfed1a1-5375-446c-98bc-69402e70e1d5"
  },
  {
   "a": "Noah Goding",
   "b": "Aidan Jackson",
   "team": "Home Court",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -3.7,
   "avgExpected": -2.9,
   "aId": "80138d68-a74a-4f8c-aea1-7d31e682efa8",
   "bId": "c821be96-b764-46ad-85a2-8927711684c5"
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
   "avgExpected": 2.4,
   "aId": "0ee404b2-e9e6-49b4-b9eb-bc2120473f76",
   "bId": "741de6b9-5fe7-49aa-9c55-5ff4050bb7a1"
  },
  {
   "a": "Maeve Mcgowan",
   "b": "Zach Bowe",
   "team": "Jersey Devil",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.3,
   "avgActual": 0.3,
   "avgExpected": 0.9,
   "aId": "24325b7a-50bd-42dc-84c2-e3ac54360f9c",
   "bId": "eebadc3a-5763-4612-9232-d3a98ea188d6"
  },
  {
   "a": "Megan Harvey",
   "b": "Sarah Kline",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.3,
   "avgActual": -1.7,
   "avgExpected": -0.9,
   "aId": "4d576bb5-e9e5-4ad1-a18f-022508c6a161",
   "bId": "b122f262-f81d-4fb2-9f11-c473d18a4260"
  },
  {
   "a": "Angela Luo",
   "b": "Morgan Fishman",
   "team": "Monroe",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.4,
   "avgActual": -4,
   "avgExpected": -3.2,
   "aId": "0cb538a5-0d5d-47a7-b854-38394ac9652f",
   "bId": "5ccee070-0af8-4363-9ddb-6ce8ebce098f"
  },
  {
   "a": "Suzi Battison",
   "b": "Ross Switkes",
   "team": "Flemington",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.4,
   "avgActual": 1,
   "avgExpected": 1.7,
   "aId": "40579892-d9bf-4d1d-9417-5830d5d45093",
   "bId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b"
  },
  {
   "a": "Varun Prakash",
   "b": "Kaylyn Swankoski",
   "team": "Dill Dinkers Hatboro The Factory",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -0.4,
   "avgActual": 3,
   "avgExpected": 3.7,
   "aId": "67dbfc4f-20f7-4299-bc2f-6cc70cf747ab",
   "bId": "72949bef-7cab-4942-ab45-e5203024a8d5"
  },
  {
   "a": "Shashank Kamdar",
   "b": "Nick Meale",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": -0.4,
   "avgActual": 4,
   "avgExpected": 4.8,
   "aId": "56db4b56-6166-437f-8ece-26576b7042e5",
   "bId": "ec0bad09-8256-49b3-ae86-3add22dd995f"
  },
  {
   "a": "Andrew Wakefield",
   "b": "Hannah Nussbaum",
   "team": "Dill Dinkers Hatboro The Factory",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.4,
   "avgActual": 0.6,
   "avgExpected": 1.3,
   "aId": "5f429a7f-18c6-49e3-a804-6aa2a930f09c",
   "bId": "84b7c449-501c-438d-a3eb-ee67cc92fa0e"
  },
  {
   "a": "Sarah Ross",
   "b": "Alyssa Tartaglia",
   "team": "Dill Dinkers Hatboro Aces",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -0.4,
   "avgActual": -5,
   "avgExpected": -4.2,
   "aId": "261d14c5-288e-4349-a3ed-50bad4b620c1",
   "bId": "881ed39f-f9fc-4e9d-8ed3-d13d9ebc7b13"
  },
  {
   "a": "Elysia Price",
   "b": "Kathleen Dougherty",
   "team": "Bounce Philly",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.4,
   "avgActual": -3.3,
   "avgExpected": -2.4,
   "aId": "a0ca4338-b610-4630-9f41-8dfd380e1af7",
   "bId": "c929f42d-6fd4-4034-888e-ad456cda3063"
  },
  {
   "a": "Brittany Hall",
   "b": "Jack Blumberg",
   "team": "ACE Moorestown",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -2,
   "avgExpected": -1.3,
   "aId": "17cc768d-f6c8-484c-814e-063d17cec72f",
   "bId": "f2929b28-a6ee-45e5-9846-da957b6d8734"
  },
  {
   "a": "Ali Husain",
   "b": "Sara Synn",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.4,
   "avgActual": -2.3,
   "avgExpected": -1.5,
   "aId": "09d614ca-a9b2-44b6-a402-51046c6883af",
   "bId": "37acfc18-a8d1-4ea0-8c21-0d830c9f4f90"
  },
  {
   "a": "Allison Tarnoff",
   "b": "Kaylyn Swankoski",
   "team": "Dill Dinkers Hatboro The Factory",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -0.4,
   "avgActual": 3.8,
   "avgExpected": 4.6,
   "aId": "001bf0ea-f8b1-402f-ab07-88ed85b2b510",
   "bId": "72949bef-7cab-4942-ab45-e5203024a8d5"
  },
  {
   "a": "Helen Liu",
   "b": "William Lee",
   "team": "Dill Dinkers Hatboro Aces",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -0.4,
   "avgActual": -7,
   "avgExpected": -6.2,
   "aId": "53cc1790-d8b9-4b64-a8b3-6e10b2eeb131",
   "bId": "9e264c96-36cf-45a9-90ad-1e125a82c851"
  },
  {
   "a": "Richa Shah",
   "b": "Ruhi Shah",
   "team": "Monroe",
   "n": 9,
   "w": 4,
   "l": 5,
   "synergy": -0.5,
   "avgActual": -2.3,
   "avgExpected": -1.6,
   "aId": "6b80047c-ca16-4506-a2a4-ed894dc0c37f",
   "bId": "a2d56e71-3895-4316-9e9e-17565fb62295"
  },
  {
   "a": "Sidd Pathare",
   "b": "Chris Long",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.5,
   "avgActual": -1.2,
   "avgExpected": -0.3,
   "aId": "a73f249d-c1c9-4516-bc79-e9732581f098",
   "bId": "f7f6ce2d-1cbb-45f9-ad8f-e42b89b99554"
  },
  {
   "a": "Eric Lin",
   "b": "Ruhi Shah",
   "team": "Monroe",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.5,
   "avgActual": 0.3,
   "avgExpected": 1.3,
   "aId": "4ce1c715-b187-47c5-b6dc-d079f802499d",
   "bId": "a2d56e71-3895-4316-9e9e-17565fb62295"
  },
  {
   "a": "Kerrin Maurer",
   "b": "Mickey Cook",
   "team": "Pickle House",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.5,
   "avgActual": 1.7,
   "avgExpected": 2.9,
   "aId": "1d63ce3d-20c2-40ae-94ca-e8e6e458004e",
   "bId": "3babc519-f395-4ef7-8f6f-b38d25c139d0"
  },
  {
   "a": "Michelle Quach",
   "b": "Caleb Perry-Abner",
   "team": "Jersey Devil",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.5,
   "avgActual": -2,
   "avgExpected": -1.1,
   "aId": "5f0dcbe9-bb0e-496d-99d2-06f01ff2c77b",
   "bId": "c25e04ae-a9bf-4943-858d-5b7a94261e43"
  },
  {
   "a": "Megan Harvey",
   "b": "Harriet Levin",
   "team": "Bounce Malvern",
   "n": 9,
   "w": 3,
   "l": 6,
   "synergy": -0.5,
   "avgActual": -3,
   "avgExpected": -2.3,
   "aId": "4d576bb5-e9e5-4ad1-a18f-022508c6a161",
   "bId": "aeff8297-a479-4b3b-9a49-72c410ac8e26"
  },
  {
   "a": "Anisha Malhotra",
   "b": "Camrin Cronheim",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 8,
   "w": 3,
   "l": 5,
   "synergy": -0.5,
   "avgActual": 0.3,
   "avgExpected": 1.1,
   "aId": "2aa8b268-8c06-4453-9706-048009bf6af3",
   "bId": "8143def5-d564-4010-8258-ccb71cd481f1"
  },
  {
   "a": "Brittany Hall",
   "b": "Stacy Walkowitz",
   "team": "ACE Moorestown",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.5,
   "avgActual": -2.4,
   "avgExpected": -1.6,
   "aId": "17cc768d-f6c8-484c-814e-063d17cec72f",
   "bId": "a19b179a-6a16-43a7-b2af-8d6e8d1a1205"
  },
  {
   "a": "Kara Infante",
   "b": "Austin Williams",
   "team": "Home Court",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -0.7,
   "avgExpected": 0.2,
   "aId": "06edda3d-3a1f-4010-86fa-8ac767cd7079",
   "bId": "bb0bdc33-be20-4a45-9de9-0a52a88d7af9"
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
   "a": "Ashley Barros",
   "b": "Austin Williams",
   "team": "Home Court",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -1,
   "avgExpected": 0.1,
   "aId": "6656b9a3-3c47-4711-8609-e35c07c64771",
   "bId": "bb0bdc33-be20-4a45-9de9-0a52a88d7af9"
  },
  {
   "a": "Lauren Mercado",
   "b": "Rachel Berger",
   "team": "Jersey Devil",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -4,
   "avgExpected": -3,
   "aId": "0aa554f3-0eca-4f2d-b3d9-b277406a7435",
   "bId": "9b7488c5-bc66-41e4-8fa5-873e70c190e3"
  },
  {
   "a": "Stacy Walkowitz",
   "b": "Manny Lai",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.5,
   "avgActual": 2.3,
   "avgExpected": 3.4,
   "aId": "a19b179a-6a16-43a7-b2af-8d6e8d1a1205",
   "bId": "f2a53ee2-a602-4e58-8326-6d0624af34af"
  },
  {
   "a": "Nathan Law",
   "b": "Hector Irizarry",
   "team": "ACE Moorestown",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -0.5,
   "avgExpected": 0.4,
   "aId": "3c81d27f-9e68-439b-a476-f5ac1a54f45a",
   "bId": "a50a69d0-0a8c-4241-b768-846b1591d180"
  },
  {
   "a": "Kara Infante",
   "b": "Marcos Claros",
   "team": "Home Court",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -4.5,
   "avgExpected": -3.2,
   "aId": "06edda3d-3a1f-4010-86fa-8ac767cd7079",
   "bId": "839ee2ac-03d5-4fee-bc87-08709afae5f2"
  },
  {
   "a": "Shashank Kamdar",
   "b": "Nam Barsh",
   "team": "Bounce Malvern",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.6,
   "avgActual": -2.8,
   "avgExpected": -1.7,
   "aId": "56db4b56-6166-437f-8ece-26576b7042e5",
   "bId": "fa43af77-3cd1-4e61-a8dc-bd714b65d517"
  },
  {
   "a": "Kerrin Maurer",
   "b": "Taylor Hartman",
   "team": "Pickle House",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.6,
   "avgActual": 2.8,
   "avgExpected": 4,
   "aId": "1d63ce3d-20c2-40ae-94ca-e8e6e458004e",
   "bId": "3bf2f55b-b253-4d2a-b1b9-d5953ef1b8ec"
  },
  {
   "a": "Shreyas Pani",
   "b": "Ruhi Shah",
   "team": "Monroe",
   "n": 9,
   "w": 4,
   "l": 5,
   "synergy": -0.6,
   "avgActual": 0.6,
   "avgExpected": 1.5,
   "aId": "3cebd01c-ff32-4544-b6a6-2a68152b2ee5",
   "bId": "a2d56e71-3895-4316-9e9e-17565fb62295"
  },
  {
   "a": "Elisangela Harrington",
   "b": "Thomas Connolly",
   "team": "Flemington",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -4,
   "avgExpected": -2.6,
   "aId": "55bbe71c-1181-4875-b16d-f121f3a133e0",
   "bId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3"
  },
  {
   "a": "Cristi Landrigan",
   "b": "Varun Prakash",
   "team": "Dill Dinkers Hatboro The Factory",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -0.6,
   "avgActual": 3.6,
   "avgExpected": 4.7,
   "aId": "1be028eb-1b92-4961-b508-fa0879c78017",
   "bId": "67dbfc4f-20f7-4299-bc2f-6cc70cf747ab"
  },
  {
   "a": "Susan Ackley",
   "b": "Melissa Dardani",
   "team": "Flemington",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -2.2,
   "avgExpected": -1,
   "aId": "07a0e948-6308-4920-a6a8-1d5945552ecb",
   "bId": "ef423f8a-5c2c-4a12-9f37-b41ff6d6c530"
  },
  {
   "a": "Julia Sternberg",
   "b": "Rachel Alfano",
   "team": "Bounce Philly",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -4,
   "avgExpected": -2.5,
   "aId": "ccd8a76f-df3a-4ab9-97b6-bae0f860a431",
   "bId": "ce7aca89-06ac-4cd9-8944-a482216ffd58"
  },
  {
   "a": "Anthony Ursino",
   "b": "Shreyas Pani",
   "team": "Monroe",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -0.7,
   "avgExpected": 0.7,
   "aId": "1406ff1f-3597-4128-a629-7dfd1dfe1323",
   "bId": "3cebd01c-ff32-4544-b6a6-2a68152b2ee5"
  },
  {
   "a": "Mickey Cook",
   "b": "Zach Hollmann",
   "team": "Pickle House",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -0.7,
   "avgActual": -0.3,
   "avgExpected": 0.8,
   "aId": "3babc519-f395-4ef7-8f6f-b38d25c139d0",
   "bId": "8aef2d8a-0bd4-45df-b5d1-1a120a81ef0f"
  },
  {
   "a": "Patrick Ryan",
   "b": "Aimee Castellano",
   "team": "Flemington",
   "n": 8,
   "w": 2,
   "l": 6,
   "synergy": -0.7,
   "avgActual": -1.5,
   "avgExpected": -0.4,
   "aId": "8344fbda-35c2-4ce0-94ad-158090d2d5ba",
   "bId": "e76985fb-efd1-4180-a340-e4f36abbc8b4"
  },
  {
   "a": "Zach Hollmann",
   "b": "Yoyo Shen",
   "team": "Pickle House",
   "n": 10,
   "w": 8,
   "l": 2,
   "synergy": -0.7,
   "avgActual": 1.7,
   "avgExpected": 2.7,
   "aId": "8aef2d8a-0bd4-45df-b5d1-1a120a81ef0f",
   "bId": "9d47a1aa-c44c-4ddd-8953-dc40f79b1016"
  },
  {
   "a": "Johny Mario",
   "b": "Rachel Berger",
   "team": "Jersey Devil",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.7,
   "avgActual": -2.2,
   "avgExpected": -0.9,
   "aId": "831c9fae-38c6-4961-8664-634087f5f2f9",
   "bId": "9b7488c5-bc66-41e4-8fa5-873e70c190e3"
  },
  {
   "a": "Sheila Siu",
   "b": "Ken Velarde",
   "team": "Home Court",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -1.2,
   "avgExpected": 0.2,
   "aId": "25879a0b-5df5-4c12-9066-4aaaf4e6cbc0",
   "bId": "25aa47d0-76b8-48be-a5be-b1d33b423e82"
  },
  {
   "a": "Marina Cozac",
   "b": "Kaylyn Swankoski",
   "team": "Dill Dinkers Hatboro The Factory",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.7,
   "avgActual": 8.3,
   "avgExpected": 10,
   "aId": "13c8aeab-aa52-4bc2-bf23-96a2cabe4181",
   "bId": "72949bef-7cab-4942-ab45-e5203024a8d5"
  },
  {
   "a": "Shashank Kamdar",
   "b": "Sarah Kline",
   "team": "Bounce Malvern",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.7,
   "avgActual": -2,
   "avgExpected": -0.9,
   "aId": "56db4b56-6166-437f-8ece-26576b7042e5",
   "bId": "b122f262-f81d-4fb2-9f11-c473d18a4260"
  },
  {
   "a": "Andrew Wakefield",
   "b": "Varun Prakash",
   "team": "Dill Dinkers Hatboro The Factory",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.7,
   "avgActual": 0.4,
   "avgExpected": 1.6,
   "aId": "5f429a7f-18c6-49e3-a804-6aa2a930f09c",
   "bId": "67dbfc4f-20f7-4299-bc2f-6cc70cf747ab"
  },
  {
   "a": "Taylor Hartman",
   "b": "Lissa Eagles",
   "team": "Pickle House",
   "n": 8,
   "w": 3,
   "l": 5,
   "synergy": -0.7,
   "avgActual": -1.5,
   "avgExpected": -0.5,
   "aId": "3bf2f55b-b253-4d2a-b1b9-d5953ef1b8ec",
   "bId": "9ec39678-a120-45de-b8a5-897b8cf900cd"
  },
  {
   "a": "Brittany Hall",
   "b": "Nathan Law",
   "team": "ACE Moorestown",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -1.6,
   "avgExpected": -0.4,
   "aId": "17cc768d-f6c8-484c-814e-063d17cec72f",
   "bId": "3c81d27f-9e68-439b-a476-f5ac1a54f45a"
  },
  {
   "a": "Charlotte Healey",
   "b": "Alexander Tong",
   "team": "Bounce Philly",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.7,
   "avgActual": 0.5,
   "avgExpected": 2,
   "aId": "bbaf3def-a87b-4537-8701-4f5ae0108b1f",
   "bId": "d8d64dde-4ffb-4c49-aaa6-537b09c9c8d5"
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
   "a": "Kara Infante",
   "b": "Nathan Malhotra",
   "team": "Home Court",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.7,
   "avgActual": 0.7,
   "avgExpected": 2.3,
   "aId": "06edda3d-3a1f-4010-86fa-8ac767cd7079",
   "bId": "98bd685a-3161-45fc-941f-3a8c9f4849cf"
  },
  {
   "a": "Allison Tarnoff",
   "b": "Kenoa Tio",
   "team": "Dill Dinkers Hatboro The Factory",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -1.2,
   "avgExpected": 0.1,
   "aId": "001bf0ea-f8b1-402f-ab07-88ed85b2b510",
   "bId": "10e9980e-34bf-43ea-b246-3280bca79efb"
  },
  {
   "a": "Yoyo Shen",
   "b": "Emily Babinsky",
   "team": "Pickle House",
   "n": 9,
   "w": 8,
   "l": 1,
   "synergy": -0.8,
   "avgActual": 3,
   "avgExpected": 4.1,
   "aId": "9d47a1aa-c44c-4ddd-8953-dc40f79b1016",
   "bId": "d0e2c1ea-529d-4364-b521-cb205ecdded3"
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
   "avgExpected": -1.6,
   "aId": "065e606f-3722-4434-8848-28e4d10ccabd",
   "bId": "3aa34138-1989-4d89-b656-3e0c44b23b6f"
  },
  {
   "a": "Erika Richards",
   "b": "Sarah Ross",
   "team": "Dill Dinkers Hatboro Aces",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -3.3,
   "avgExpected": -1.4,
   "aId": "065e606f-3722-4434-8848-28e4d10ccabd",
   "bId": "261d14c5-288e-4349-a3ed-50bad4b620c1"
  },
  {
   "a": "Robert Khalev",
   "b": "Eva Danieli",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.8,
   "avgActual": -1.7,
   "avgExpected": 0,
   "aId": "094c3b61-96e3-48c6-8172-10b7eaf528f4",
   "bId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae"
  },
  {
   "a": "Lou Frignito",
   "b": "Shashank Kamdar",
   "team": "Bounce Malvern",
   "n": 9,
   "w": 4,
   "l": 5,
   "synergy": -0.8,
   "avgActual": 1,
   "avgExpected": 2.2,
   "aId": "1afca308-dca6-4828-946a-0ca6ad1b0c44",
   "bId": "56db4b56-6166-437f-8ece-26576b7042e5"
  },
  {
   "a": "Sara Synn",
   "b": "Eric Lin",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.8,
   "avgActual": -4.7,
   "avgExpected": -2.7,
   "aId": "37acfc18-a8d1-4ea0-8c21-0d830c9f4f90",
   "bId": "4ce1c715-b187-47c5-b6dc-d079f802499d"
  },
  {
   "a": "Anthony Ursino",
   "b": "Ruhi Shah",
   "team": "Monroe",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.8,
   "avgActual": 2.3,
   "avgExpected": 3.8,
   "aId": "1406ff1f-3597-4128-a629-7dfd1dfe1323",
   "bId": "a2d56e71-3895-4316-9e9e-17565fb62295"
  },
  {
   "a": "Catherine Stewart",
   "b": "Zach Hizer",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -2.5,
   "avgExpected": -0.8,
   "aId": "112622af-3d12-4dba-ad36-7601c8e6021c",
   "bId": "b5e576e1-d16d-4c9d-ab28-2e1b1e66487b"
  },
  {
   "a": "Chris Tabeling",
   "b": "Harriet Levin",
   "team": "Bounce Malvern",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -3.5,
   "avgExpected": -2.2,
   "aId": "0ee404b2-e9e6-49b4-b9eb-bc2120473f76",
   "bId": "aeff8297-a479-4b3b-9a49-72c410ac8e26"
  },
  {
   "a": "Suzi Battison",
   "b": "Robbie Oddy",
   "team": "Flemington",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.9,
   "avgActual": -2.7,
   "avgExpected": -0.6,
   "aId": "40579892-d9bf-4d1d-9417-5830d5d45093",
   "bId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6"
  },
  {
   "a": "William Hayes",
   "b": "Charlotte Healey",
   "team": "Bounce Philly",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -0.9,
   "avgActual": -0.3,
   "avgExpected": 1.1,
   "aId": "4dfed1a1-5375-446c-98bc-69402e70e1d5",
   "bId": "bbaf3def-a87b-4537-8701-4f5ae0108b1f"
  },
  {
   "a": "Adam Beck",
   "b": "Claudya Elefante",
   "team": "Dill Dinkers Hatboro Aces",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -0.9,
   "avgActual": -4.5,
   "avgExpected": -3,
   "aId": "7d836ecc-e553-4966-9c12-2dc698a545d0",
   "bId": "c6a7f237-8e09-45e4-b34e-d179e46b61b1"
  },
  {
   "a": "Joey Angelson",
   "b": "Andrew Bernard",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -6.7,
   "avgExpected": -4.5,
   "aId": "6035850e-af27-40db-bb81-f5787f344871",
   "bId": "8079e74f-c537-4e42-9590-e8d60f10ba3d"
  },
  {
   "a": "Ken Velarde",
   "b": "Aurora Lewis",
   "team": "Home Court",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.9,
   "avgActual": -4,
   "avgExpected": -2.2,
   "aId": "25aa47d0-76b8-48be-a5be-b1d33b423e82",
   "bId": "3fe06711-5561-47b8-ad95-382cd0bcff9a"
  },
  {
   "a": "Aurora Lewis",
   "b": "Nathan Malhotra",
   "team": "Home Court",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -3.5,
   "avgExpected": -1.7,
   "aId": "3fe06711-5561-47b8-ad95-382cd0bcff9a",
   "bId": "98bd685a-3161-45fc-941f-3a8c9f4849cf"
  },
  {
   "a": "Angela Luo",
   "b": "Sophia Kaufmann",
   "team": "Monroe",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1,
   "avgActual": -5.2,
   "avgExpected": -3.3,
   "aId": "0cb538a5-0d5d-47a7-b854-38394ac9652f",
   "bId": "44f258b0-52df-4c16-8d1e-a9f2d65b439e"
  },
  {
   "a": "Andrew Bernard",
   "b": "Matt Schall",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1,
   "avgActual": -5,
   "avgExpected": -2.7,
   "aId": "8079e74f-c537-4e42-9590-e8d60f10ba3d",
   "bId": "aa0d9944-a9d3-46d5-8650-54e894adfeb2"
  },
  {
   "a": "Zachary Lessner",
   "b": "Rachel Alfano",
   "team": "Bounce Philly",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1,
   "avgActual": -0.2,
   "avgExpected": 1.8,
   "aId": "2ce5ebef-8079-4871-8d2e-b34988abbaad",
   "bId": "ce7aca89-06ac-4cd9-8944-a482216ffd58"
  },
  {
   "a": "Nathan Law",
   "b": "Annemarie Mccartney",
   "team": "ACE Moorestown",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -1,
   "avgActual": -1.6,
   "avgExpected": 0.2,
   "aId": "3c81d27f-9e68-439b-a476-f5ac1a54f45a",
   "bId": "d08d78db-7d20-4dc2-a37b-41841c4624fd"
  },
  {
   "a": "Ben Mead",
   "b": "Hector Irizarry",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1,
   "avgActual": 0.3,
   "avgExpected": 2.7,
   "aId": "7858dda8-168b-4a84-8d5d-7a6571e9313a",
   "bId": "a50a69d0-0a8c-4241-b768-846b1591d180"
  },
  {
   "a": "Maanav Shah",
   "b": "Ruhi Shah",
   "team": "Monroe",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": -1.1,
   "avgActual": 2.8,
   "avgExpected": 4.6,
   "aId": "0a1270b0-26f6-4328-85bc-bf3f329a746e",
   "bId": "a2d56e71-3895-4316-9e9e-17565fb62295"
  },
  {
   "a": "Morgan Fishman",
   "b": "Ruhi Shah",
   "team": "Monroe",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -1.1,
   "avgActual": -4.2,
   "avgExpected": -2.3,
   "aId": "5ccee070-0af8-4363-9ddb-6ce8ebce098f",
   "bId": "a2d56e71-3895-4316-9e9e-17565fb62295"
  },
  {
   "a": "Eva Danieli",
   "b": "Matt Schall",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -5,
   "avgExpected": -2.9,
   "aId": "7f80a6cd-0daa-4c81-b9ff-7c0b863a24ae",
   "bId": "aa0d9944-a9d3-46d5-8650-54e894adfeb2"
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
   "avgExpected": -1.7,
   "aId": "6035850e-af27-40db-bb81-f5787f344871",
   "bId": "f64f0cc2-6c82-4fe4-9992-747512700971"
  },
  {
   "a": "Andrew Wakefield",
   "b": "Kaylyn Swankoski",
   "team": "Dill Dinkers Hatboro The Factory",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": -1.1,
   "avgActual": 4,
   "avgExpected": 6.3,
   "aId": "5f429a7f-18c6-49e3-a804-6aa2a930f09c",
   "bId": "72949bef-7cab-4942-ab45-e5203024a8d5"
  },
  {
   "a": "Lissa Eagles",
   "b": "Dipen Bhatt",
   "team": "Pickle House",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -5.3,
   "avgExpected": -2.8,
   "aId": "9ec39678-a120-45de-b8a5-897b8cf900cd",
   "bId": "fe8af1d3-ff62-430d-90af-32794cc7b912"
  },
  {
   "a": "Paula Ro",
   "b": "Gissel Escalante",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -1.2,
   "avgActual": 1,
   "avgExpected": 3,
   "aId": "3cf3093b-1667-4242-9ad5-1d72fc5d24f8",
   "bId": "63221cc8-e303-4675-8dde-4fc77e871627"
  },
  {
   "a": "Taylor Hartman",
   "b": "Michael Li",
   "team": "Pickle House",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -1.2,
   "avgActual": -0.2,
   "avgExpected": 2,
   "aId": "3bf2f55b-b253-4d2a-b1b9-d5953ef1b8ec",
   "bId": "dc81629b-4ff7-45c4-b38e-b3b836bc0769"
  },
  {
   "a": "Robert Schimony",
   "b": "Julia Plein",
   "team": "Dill Dinkers Hatboro Aces",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.2,
   "avgActual": -12,
   "avgExpected": -9.3,
   "aId": "b85c2074-a149-4382-8563-e1ff5b5d70bc",
   "bId": "f3d99274-413c-4720-9c8d-1a71f9b2e717"
  },
  {
   "a": "Lissa Eagles",
   "b": "Emily Babinsky",
   "team": "Pickle House",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -1.2,
   "avgActual": -1.5,
   "avgExpected": 0.5,
   "aId": "9ec39678-a120-45de-b8a5-897b8cf900cd",
   "bId": "d0e2c1ea-529d-4364-b521-cb205ecdded3"
  },
  {
   "a": "Nathan Malhotra",
   "b": "Aidan Jackson",
   "team": "Home Court",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.2,
   "avgActual": -3.7,
   "avgExpected": -1.3,
   "aId": "98bd685a-3161-45fc-941f-3a8c9f4849cf",
   "bId": "c821be96-b764-46ad-85a2-8927711684c5"
  },
  {
   "a": "Shreyas Pani",
   "b": "Dilan Shah",
   "team": "Monroe",
   "n": 8,
   "w": 3,
   "l": 5,
   "synergy": -1.3,
   "avgActual": -3.7,
   "avgExpected": -1.7,
   "aId": "3cebd01c-ff32-4544-b6a6-2a68152b2ee5",
   "bId": "91d23f87-e0fc-4448-890e-c3abd96c70b4"
  },
  {
   "a": "Robbie Oddy",
   "b": "Ross Switkes",
   "team": "Flemington",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -1.3,
   "avgActual": 0.2,
   "avgExpected": 2.3,
   "aId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6",
   "bId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b"
  },
  {
   "a": "Chris Damato",
   "b": "Zach Hollmann",
   "team": "Pickle House",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.3,
   "avgActual": -1.2,
   "avgExpected": 1.3,
   "aId": "445e89c8-a23c-440c-bd3c-7eab366bdd85",
   "bId": "8aef2d8a-0bd4-45df-b5d1-1a120a81ef0f"
  },
  {
   "a": "Gage Cvijic",
   "b": "Emily Babinsky",
   "team": "Pickle House",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.3,
   "avgActual": -5.7,
   "avgExpected": -2.7,
   "aId": "4572bf15-1066-42b7-ae74-94d6175b1b96",
   "bId": "d0e2c1ea-529d-4364-b521-cb205ecdded3"
  },
  {
   "a": "Anita Buggins",
   "b": "Annemarie Mccartney",
   "team": "ACE Moorestown",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -1.4,
   "avgActual": 1.3,
   "avgExpected": 4,
   "aId": "2ea90a18-1ef3-4ade-a855-2a3fd178abd7",
   "bId": "d08d78db-7d20-4dc2-a37b-41841c4624fd"
  },
  {
   "a": "Thomas Connolly",
   "b": "Patrick Ryan",
   "team": "Flemington",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -1.5,
   "avgActual": -3.3,
   "avgExpected": -0.9,
   "aId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3",
   "bId": "8344fbda-35c2-4ce0-94ad-158090d2d5ba"
  },
  {
   "a": "William Lee",
   "b": "Robert Schimony",
   "team": "Dill Dinkers Hatboro Aces",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.5,
   "avgActual": -6,
   "avgExpected": -2.5,
   "aId": "9e264c96-36cf-45a9-90ad-1e125a82c851",
   "bId": "b85c2074-a149-4382-8563-e1ff5b5d70bc"
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
   "a": "Matt Schall",
   "b": "Zach Hizer",
   "team": "Jersey Pickleball Club",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -1.5,
   "avgActual": -3.2,
   "avgExpected": -0.6,
   "aId": "aa0d9944-a9d3-46d5-8650-54e894adfeb2",
   "bId": "b5e576e1-d16d-4c9d-ab28-2e1b1e66487b"
  },
  {
   "a": "Jenna Irwin",
   "b": "Chris Long",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1.5,
   "avgActual": 0.3,
   "avgExpected": 3.8,
   "aId": "85e52e3b-5238-4583-8d1a-cc57f8218ef6",
   "bId": "f7f6ce2d-1cbb-45f9-ad8f-e42b89b99554"
  },
  {
   "a": "Johny Mario",
   "b": "Caleb Perry-Abner",
   "team": "Jersey Devil",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.6,
   "avgActual": -2.7,
   "avgExpected": 0.5,
   "aId": "831c9fae-38c6-4961-8664-634087f5f2f9",
   "bId": "c25e04ae-a9bf-4943-858d-5b7a94261e43"
  },
  {
   "a": "Chris Tabeling",
   "b": "Nam Barsh",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.6,
   "avgActual": -4.3,
   "avgExpected": -0.6,
   "aId": "0ee404b2-e9e6-49b4-b9eb-bc2120473f76",
   "bId": "fa43af77-3cd1-4e61-a8dc-bd714b65d517"
  },
  {
   "a": "Chad Durkin",
   "b": "Keith Shedlock",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1.6,
   "avgActual": -0.7,
   "avgExpected": 3,
   "aId": "54ed1c79-aaa0-486d-851b-d5a4db375b94",
   "bId": "f4b44cd7-fc9a-41a2-b569-cdaf08b0bf26"
  },
  {
   "a": "Elysia Price",
   "b": "Mark Kilimnik",
   "team": "Bounce Philly",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.6,
   "avgActual": -5.3,
   "avgExpected": -1.6,
   "aId": "a0ca4338-b610-4630-9f41-8dfd380e1af7",
   "bId": "d6c15f91-4cc9-4612-8ec3-8f4ebd4e0cc1"
  },
  {
   "a": "Jennifer Sanchez",
   "b": "Anita Buggins",
   "team": "ACE Moorestown",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -1.7,
   "avgActual": -2.2,
   "avgExpected": 0.9,
   "aId": "061121d0-5d0a-4c01-9d8e-dced99d6d82d",
   "bId": "2ea90a18-1ef3-4ade-a855-2a3fd178abd7"
  },
  {
   "a": "Stacy Walkowitz",
   "b": "Jack Blumberg",
   "team": "ACE Moorestown",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -1.7,
   "avgActual": -1.5,
   "avgExpected": 1.3,
   "aId": "a19b179a-6a16-43a7-b2af-8d6e8d1a1205",
   "bId": "f2929b28-a6ee-45e5-9846-da957b6d8734"
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
   "a": "Lou Frignito",
   "b": "Yuki Kim",
   "team": "Bounce Malvern",
   "n": 11,
   "w": 9,
   "l": 2,
   "synergy": -1.9,
   "avgActual": 3.5,
   "avgExpected": 6.2,
   "aId": "1afca308-dca6-4828-946a-0ca6ad1b0c44",
   "bId": "afec0287-b62d-4aaf-977f-afb96aed0e17"
  },
  {
   "a": "Adam Beck",
   "b": "William Lee",
   "team": "Dill Dinkers Hatboro Aces",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2,
   "avgActual": -5.3,
   "avgExpected": -0.7,
   "aId": "7d836ecc-e553-4966-9c12-2dc698a545d0",
   "bId": "9e264c96-36cf-45a9-90ad-1e125a82c851"
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
   "avgExpected": -1.9,
   "aId": "2138af89-34bc-4ee2-9955-ff16f0997031",
   "bId": "37acfc18-a8d1-4ea0-8c21-0d830c9f4f90"
  },
  {
   "a": "Nathan Law",
   "b": "Stacy Walkowitz",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.3,
   "avgActual": -6.7,
   "avgExpected": -1.3,
   "aId": "3c81d27f-9e68-439b-a476-f5ac1a54f45a",
   "bId": "a19b179a-6a16-43a7-b2af-8d6e8d1a1205"
  },
  {
   "a": "Teresa Wang",
   "b": "Nick Meale",
   "team": "Bounce Malvern",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -2.3,
   "avgActual": 1.4,
   "avgExpected": 5.5,
   "aId": "741de6b9-5fe7-49aa-9c55-5ff4050bb7a1",
   "bId": "ec0bad09-8256-49b3-ae86-3add22dd995f"
  },
  {
   "a": "Chris Damato",
   "b": "Dipen Bhatt",
   "team": "Pickle House",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -2.3,
   "avgActual": -7.2,
   "avgExpected": -2.7,
   "aId": "445e89c8-a23c-440c-bd3c-7eab366bdd85",
   "bId": "fe8af1d3-ff62-430d-90af-32794cc7b912"
  },
  {
   "a": "Cristi Landrigan",
   "b": "Nahla Bernhardt",
   "team": "Dill Dinkers Hatboro The Factory",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.7,
   "avgActual": -5.7,
   "avgExpected": 0.7,
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
    "Hany Ibrahim"
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
   "result": "home",
   "week": 5,
   "home": "Flemington",
   "away": "Home Court",
   "time": "2026-09-23T19:00:00",
   "complete": true,
   "homePoints": 639,
   "awayPoints": 575,
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
   "result": "away",
   "week": 5,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "ACE Moorestown",
   "time": "2026-09-27T09:00:00",
   "complete": true,
   "homePoints": 609,
   "awayPoints": 611,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Paula Ro",
      "Sidd Pathare"
     ],
     "a": [
      "Brittany Hall",
      "Jack Blumberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Gissel Escalante",
      "Jason Makarevic"
     ],
     "a": [
      "Jennifer Sanchez",
      "Garv Singhal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Anisha Malhotra",
      "Joseph Zee"
     ],
     "a": [
      "Anita Buggins",
      "Hector Irizarry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Zoe Ousouljoglou",
      "Camrin Cronheim"
     ],
     "a": [
      "Shelah Wallace",
      "Nathan Law"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Paula Ro",
      "Katie Lazaar"
     ],
     "a": [
      "Stacy Walkowitz",
      "Shelah Wallace"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Gissel Escalante",
      "Anisha Malhotra"
     ],
     "a": [
      "Anita Buggins",
      "Jennifer Sanchez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Camrin Cronheim",
      "Jason Makarevic"
     ],
     "a": [
      "Ben Mead",
      "Garv Singhal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Joseph Zee",
      "Sidd Pathare"
     ],
     "a": [
      "Hector Irizarry",
      "Nathan Law"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Zoe Ousouljoglou",
      "Camrin Cronheim"
     ],
     "a": [
      "Brittany Hall",
      "Jack Blumberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Anisha Malhotra",
      "Joseph Zee"
     ],
     "a": [
      "Anita Buggins",
      "Nathan Law"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Katie Lazaar",
      "Sidd Pathare"
     ],
     "a": [
      "Stacy Walkowitz",
      "Garv Singhal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Gissel Escalante",
      "Jason Makarevic"
     ],
     "a": [
      "Shelah Wallace",
      "Ben Mead"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Paula Ro",
      "Gissel Escalante"
     ],
     "a": [
      "Anita Buggins",
      "Shelah Wallace"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Zoe Ousouljoglou",
      "Katie Lazaar"
     ],
     "a": [
      "Stacy Walkowitz",
      "Brittany Hall"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Joseph Zee",
      "Sidd Pathare"
     ],
     "a": [
      "Nathan Law",
      "Ben Mead"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Camrin Cronheim",
      "Jason Makarevic"
     ],
     "a": [
      "Hector Irizarry",
      "Jack Blumberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Anisha Malhotra",
      "Camrin Cronheim"
     ],
     "a": [
      "Shelah Wallace",
      "Ben Mead"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Gissel Escalante",
      "Joseph Zee"
     ],
     "a": [
      "Brittany Hall",
      "Garv Singhal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Katie Lazaar",
      "Jason Makarevic"
     ],
     "a": [
      "Anita Buggins",
      "Hector Irizarry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Paula Ro",
      "Sidd Pathare"
     ],
     "a": [
      "Stacy Walkowitz",
      "Jack Blumberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Anisha Malhotra",
      "Katie Lazaar"
     ],
     "a": [
      "Shelah Wallace",
      "Brittany Hall"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Zoe Ousouljoglou",
      "Paula Ro"
     ],
     "a": [
      "Anita Buggins",
      "Stacy Walkowitz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Joseph Zee",
      "Jason Makarevic"
     ],
     "a": [
      "Ben Mead",
      "Garv Singhal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Camrin Cronheim",
      "Sidd Pathare"
     ],
     "a": [
      "Hector Irizarry",
      "Nathan Law"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Katie Lazaar",
      "Sidd Pathare"
     ],
     "a": [
      "Stacy Walkowitz",
      "Jack Blumberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Anisha Malhotra",
      "Camrin Cronheim"
     ],
     "a": [
      "Anita Buggins",
      "Garv Singhal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Zoe Ousouljoglou",
      "Jason Makarevic"
     ],
     "a": [
      "Brittany Hall",
      "Nathan Law"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Gissel Escalante",
      "Joseph Zee"
     ],
     "a": [
      "Shelah Wallace",
      "Hector Irizarry"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Anisha Malhotra",
      "Zoe Ousouljoglou"
     ],
     "a": [
      "Stacy Walkowitz",
      "Brittany Hall"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Paula Ro",
      "Gissel Escalante"
     ],
     "a": [
      "Anita Buggins",
      "Shelah Wallace"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Camrin Cronheim",
      "Sidd Pathare"
     ],
     "a": [
      "Garv Singhal",
      "Nathan Law"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Joseph Zee",
      "Jason Makarevic"
     ],
     "a": [
      "Ben Mead",
      "Hector Irizarry"
     ]
    }
   ],
   "subs": [
    "Katie Lazaar",
    "Joseph Zee",
    "Garv Singhal"
   ]
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
   "result": "away",
   "week": 5,
   "home": "Flemington",
   "away": "Bounce Malvern",
   "time": "2026-09-27T09:00:00",
   "complete": true,
   "homePoints": 429,
   "awayPoints": 674,
   "homeGW": 1,
   "awayGW": 31,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Jamie Hahn",
      "Obege Janvier"
     ],
     "a": [
      "Yuki Kim",
      "Nick Meale"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Cally Kerrigan",
      "Jaco De Waal"
     ],
     "a": [
      "Megan Harvey",
      "Lou Frignito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kelly Arvidson",
      "Thomas Connolly"
     ],
     "a": [
      "Sarah Kline",
      "Shashank Kamdar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Tara Kramer",
      "Robbie Oddy"
     ],
     "a": [
      "Emily Ocasio",
      "Austin Gow"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Tara Kramer",
      "Jamie Hahn"
     ],
     "a": [
      "Yuki Kim",
      "Sarah Kline"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kelly Arvidson",
      "Cally Kerrigan"
     ],
     "a": [
      "Megan Harvey",
      "Emily Ocasio"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Thomas Connolly",
      "Obege Janvier"
     ],
     "a": [
      "Lou Frignito",
      "Shashank Kamdar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Robbie Oddy",
      "Jaco De Waal"
     ],
     "a": [
      "Nick Meale",
      "Austin Gow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Cally Kerrigan",
      "Jaco De Waal"
     ],
     "a": [
      "Yuki Kim",
      "Nick Meale"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Tara Kramer",
      "Robbie Oddy"
     ],
     "a": [
      "Sarah Kline",
      "Lou Frignito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Kelly Arvidson",
      "Thomas Connolly"
     ],
     "a": [
      "Emily Ocasio",
      "Austin Gow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Jamie Hahn",
      "Obege Janvier"
     ],
     "a": [
      "Megan Harvey",
      "Shashank Kamdar"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Tara Kramer",
      "Jamie Hahn"
     ],
     "a": [
      "Yuki Kim",
      "Sarah Kline"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kelly Arvidson",
      "Cally Kerrigan"
     ],
     "a": [
      "Megan Harvey",
      "Emily Ocasio"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Robbie Oddy",
      "Jaco De Waal"
     ],
     "a": [
      "Lou Frignito",
      "Shashank Kamdar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Thomas Connolly",
      "Obege Janvier"
     ],
     "a": [
      "Nick Meale",
      "Austin Gow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Tara Kramer",
      "Jaco De Waal"
     ],
     "a": [
      "Yuki Kim",
      "Lou Frignito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Cally Kerrigan",
      "Thomas Connolly"
     ],
     "a": [
      "Sarah Kline",
      "Nick Meale"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kelly Arvidson",
      "Obege Janvier"
     ],
     "a": [
      "Megan Harvey",
      "Austin Gow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Jamie Hahn",
      "Robbie Oddy"
     ],
     "a": [
      "Emily Ocasio",
      "Shashank Kamdar"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Kelly Arvidson",
      "Jamie Hahn"
     ],
     "a": [
      "Yuki Kim",
      "Megan Harvey"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Cally Kerrigan",
      "Tara Kramer"
     ],
     "a": [
      "Sarah Kline",
      "Emily Ocasio"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Thomas Connolly",
      "Robbie Oddy"
     ],
     "a": [
      "Nick Meale",
      "Lou Frignito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jaco De Waal",
      "Obege Janvier"
     ],
     "a": [
      "Shashank Kamdar",
      "Austin Gow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Kelly Arvidson",
      "Jaco De Waal"
     ],
     "a": [
      "Yuki Kim",
      "Shashank Kamdar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Tara Kramer",
      "Obege Janvier"
     ],
     "a": [
      "Megan Harvey",
      "Austin Gow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Cally Kerrigan",
      "Thomas Connolly"
     ],
     "a": [
      "Sarah Kline",
      "Nick Meale"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jamie Hahn",
      "Robbie Oddy"
     ],
     "a": [
      "Emily Ocasio",
      "Lou Frignito"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Cally Kerrigan",
      "Tara Kramer"
     ],
     "a": [
      "Yuki Kim",
      "Emily Ocasio"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Kelly Arvidson",
      "Jamie Hahn"
     ],
     "a": [
      "Megan Harvey",
      "Sarah Kline"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jaco De Waal",
      "Obege Janvier"
     ],
     "a": [
      "Nick Meale",
      "Shashank Kamdar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Thomas Connolly",
      "Robbie Oddy"
     ],
     "a": [
      "Lou Frignito",
      "Austin Gow"
     ]
    }
   ],
   "subs": [
    "Austin Gow",
    "Emily Ocasio",
    "Jamie Hahn",
    "Jaco De Waal",
    "Cally Kerrigan",
    "Obege Janvier",
    "Tara Kramer"
   ]
  },
  {
   "result": "away",
   "week": 5,
   "home": "Monroe",
   "away": "Jersey Devil",
   "time": "2026-09-27T18:00:00",
   "complete": true,
   "homePoints": 620,
   "awayPoints": 632,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Ruhi Shah",
      "Dilan Shah"
     ],
     "a": [
      "Arianna Haresign",
      "Zach Bowe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Amanda Ksiezopolski",
      "Shreyas Pani"
     ],
     "a": [
      "Michaela Pierznik",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Richa Shah",
      "Maanav Shah"
     ],
     "a": [
      "Michelle Quach",
      "Matthew Chen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Morgan Fishman",
      "Eric Lin"
     ],
     "a": [
      "Rachel Berger",
      "Johny Mario"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Ruhi Shah",
      "Angela Luo"
     ],
     "a": [
      "Arianna Haresign",
      "Rachel Berger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Morgan Fishman",
      "Richa Shah"
     ],
     "a": [
      "Michelle Quach",
      "Lauren Mercado"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Dilan Shah",
      "Shreyas Pani"
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
     "as": 16,
     "h": [
      "Ali Husain",
      "Maanav Shah"
     ],
     "a": [
      "Tyler Arsenault",
      "Johny Mario"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Ruhi Shah",
      "Eric Lin"
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
     "as": 23,
     "h": [
      "Amanda Ksiezopolski",
      "Maanav Shah"
     ],
     "a": [
      "Michaela Pierznik",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Angela Luo",
      "Ali Husain"
     ],
     "a": [
      "Lauren Mercado",
      "Matthew Chen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Richa Shah",
      "Shreyas Pani"
     ],
     "a": [
      "Michelle Quach",
      "Johny Mario"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Amanda Ksiezopolski",
      "Morgan Fishman"
     ],
     "a": [
      "Arianna Haresign",
      "Michelle Quach"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ruhi Shah",
      "Angela Luo"
     ],
     "a": [
      "Michaela Pierznik",
      "Rachel Berger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Eric Lin",
      "Ali Husain"
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
     "as": 18,
     "h": [
      "Maanav Shah",
      "Dilan Shah"
     ],
     "a": [
      "Tyler Arsenault",
      "Johny Mario"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Morgan Fishman",
      "Ali Husain"
     ],
     "a": [
      "Michelle Quach",
      "Zach Bowe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ruhi Shah",
      "Shreyas Pani"
     ],
     "a": [
      "Arianna Haresign",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Angela Luo",
      "Maanav Shah"
     ],
     "a": [
      "Michaela Pierznik",
      "Matthew Chen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Richa Shah",
      "Dilan Shah"
     ],
     "a": [
      "Lauren Mercado",
      "Johny Mario"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 30,
     "as": 28,
     "h": [
      "Ruhi Shah",
      "Richa Shah"
     ],
     "a": [
      "Arianna Haresign",
      "Michaela Pierznik"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Angela Luo",
      "Amanda Ksiezopolski"
     ],
     "a": [
      "Rachel Berger",
      "Lauren Mercado"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Maanav Shah",
      "Shreyas Pani"
     ],
     "a": [
      "Tyler Arsenault",
      "Zach Bowe"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Dilan Shah",
      "Eric Lin"
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
     "as": 23,
     "h": [
      "Ruhi Shah",
      "Shreyas Pani"
     ],
     "a": [
      "Arianna Haresign",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Richa Shah",
      "Eric Lin"
     ],
     "a": [
      "Michaela Pierznik",
      "Matthew Chen"
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
      "Rachel Berger",
      "Johny Mario"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Morgan Fishman",
      "Maanav Shah"
     ],
     "a": [
      "Michelle Quach",
      "Zach Bowe"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Amanda Ksiezopolski",
      "Angela Luo"
     ],
     "a": [
      "Rachel Berger",
      "Arianna Haresign"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ruhi Shah",
      "Morgan Fishman"
     ],
     "a": [
      "Michaela Pierznik",
      "Michelle Quach"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ali Husain",
      "Shreyas Pani"
     ],
     "a": [
      "Tyler Arsenault",
      "Zach Bowe"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Dilan Shah",
      "Maanav Shah"
     ],
     "a": [
      "Johny Mario",
      "Matthew Chen"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 5,
   "home": "Home Court",
   "away": "Bounce Philly",
   "time": "2026-09-27T18:00:00",
   "complete": true,
   "homePoints": 583,
   "awayPoints": 613,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
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
      "Charlotte Healey",
      "Alex Boory"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jen Vorel",
      "Austin Williams"
     ],
     "a": [
      "Alyssa Boyle",
      "Brandyn Schuchart"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Kathy Behrmann",
      "Aidan Jackson"
     ],
     "a": [
      "Julia Sternberg",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Raneeta Sawhney-Rigby",
      "Nathan Malhotra"
     ],
     "a": [
      "Elysia Price",
      "Zachary Lessner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jenny Chen",
      "Kathy Behrmann"
     ],
     "a": [
      "Charlotte Healey",
      "Elysia Price"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jen Vorel",
      "Raneeta Sawhney-Rigby"
     ],
     "a": [
      "Alyssa Boyle",
      "Tessa Arendt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Noah Goding",
      "Andrew Cooley"
     ],
     "a": [
      "Brandyn Schuchart",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Nathan Malhotra",
      "Aidan Jackson"
     ],
     "a": [
      "Alex Boory",
      "Ashwin Korde"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jen Vorel",
      "Nathan Malhotra"
     ],
     "a": [
      "Charlotte Healey",
      "Alex Boory"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kathy Behrmann",
      "Andrew Cooley"
     ],
     "a": [
      "Julia Sternberg",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Raneeta Sawhney-Rigby",
      "Austin Williams"
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
     "as": 25,
     "h": [
      "Sheila Siu",
      "Noah Goding"
     ],
     "a": [
      "Tessa Arendt",
      "Brandyn Schuchart"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jen Vorel",
      "Sheila Siu"
     ],
     "a": [
      "Charlotte Healey",
      "Julia Sternberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Raneeta Sawhney-Rigby",
      "Jenny Chen"
     ],
     "a": [
      "Alyssa Boyle",
      "Tessa Arendt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Aidan Jackson",
      "Noah Goding"
     ],
     "a": [
      "Dustin Rabinowitz",
      "Brandyn Schuchart"
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
      "Zachary Lessner",
      "Ashwin Korde"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Sheila Siu",
      "Aidan Jackson"
     ],
     "a": [
      "Alyssa Boyle",
      "Brandyn Schuchart"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Raneeta Sawhney-Rigby",
      "Nathan Malhotra"
     ],
     "a": [
      "Julia Sternberg",
      "Zachary Lessner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kathy Behrmann",
      "Andrew Cooley"
     ],
     "a": [
      "Charlotte Healey",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jen Vorel",
      "Austin Williams"
     ],
     "a": [
      "Tessa Arendt",
      "Alex Boory"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jen Vorel",
      "Sheila Siu"
     ],
     "a": [
      "Alyssa Boyle",
      "Elysia Price"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Raneeta Sawhney-Rigby",
      "Jenny Chen"
     ],
     "a": [
      "Charlotte Healey",
      "Julia Sternberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Aidan Jackson",
      "Andrew Cooley"
     ],
     "a": [
      "Zachary Lessner",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Austin Williams",
      "Noah Goding"
     ],
     "a": [
      "Alex Boory",
      "Ashwin Korde"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Kathy Behrmann",
      "Aidan Jackson"
     ],
     "a": [
      "Alyssa Boyle",
      "Zachary Lessner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Raneeta Sawhney-Rigby",
      "Austin Williams"
     ],
     "a": [
      "Tessa Arendt",
      "Alex Boory"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Sheila Siu",
      "Andrew Cooley"
     ],
     "a": [
      "Elysia Price",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Jen Vorel",
      "Nathan Malhotra"
     ],
     "a": [
      "Julia Sternberg",
      "Brandyn Schuchart"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Jenny Chen",
      "Kathy Behrmann"
     ],
     "a": [
      "Alyssa Boyle",
      "Charlotte Healey"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jen Vorel",
      "Raneeta Sawhney-Rigby"
     ],
     "a": [
      "Tessa Arendt",
      "Elysia Price"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Aidan Jackson",
      "Noah Goding"
     ],
     "a": [
      "Zachary Lessner",
      "Brandyn Schuchart"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Austin Williams",
      "Nathan Malhotra"
     ],
     "a": [
      "Dustin Rabinowitz",
      "Ashwin Korde"
     ]
    }
   ],
   "subs": [
    "Andrew Cooley",
    "Jenny Chen",
    "Tessa Arendt",
    "Brandyn Schuchart",
    "Kathy Behrmann"
   ]
  },
  {
   "result": "away",
   "week": 6,
   "home": "Monroe",
   "away": "ACE Moorestown",
   "time": "2026-09-30T19:00:00",
   "complete": true,
   "homePoints": 585,
   "awayPoints": 635,
   "homeGW": 11,
   "awayGW": 21,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ruhi Shah",
      "Dilan Shah"
     ],
     "a": [
      "Annemarie Mccartney",
      "Manny Lai"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Richa Shah",
      "Maanav Shah"
     ],
     "a": [
      "Shelah Wallace",
      "Ben Mead"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Sara Synn",
      "Shreyas Pani"
     ],
     "a": [
      "Anita Buggins",
      "Hector Irizarry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Morgan Fishman",
      "Eric Lin"
     ],
     "a": [
      "Krysti Maronski-Neufeldt",
      "Nathan Law"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ruhi Shah",
      "Sara Synn"
     ],
     "a": [
      "Anita Buggins",
      "Annemarie Mccartney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Angela Luo",
      "Morgan Fishman"
     ],
     "a": [
      "Shelah Wallace",
      "Stacy Walkowitz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Maanav Shah",
      "Shreyas Pani"
     ],
     "a": [
      "Manny Lai",
      "Ben Mead"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Anthony Ursino",
      "Dilan Shah"
     ],
     "a": [
      "Hector Irizarry",
      "Nathan Law"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Angela Luo",
      "Maanav Shah"
     ],
     "a": [
      "Krysti Maronski-Neufeldt",
      "Manny Lai"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Richa Shah",
      "Shreyas Pani"
     ],
     "a": [
      "Anita Buggins",
      "Hector Irizarry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Ruhi Shah",
      "Anthony Ursino"
     ],
     "a": [
      "Shelah Wallace",
      "Matthew Russell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Sara Synn",
      "Eric Lin"
     ],
     "a": [
      "Stacy Walkowitz",
      "Damien Stahl"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Angela Luo",
      "Morgan Fishman"
     ],
     "a": [
      "Stacy Walkowitz",
      "Krysti Maronski-Neufeldt"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ruhi Shah",
      "Richa Shah"
     ],
     "a": [
      "Annemarie Mccartney",
      "Shelah Wallace"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Eric Lin",
      "Anthony Ursino"
     ],
     "a": [
      "Nathan Law",
      "Matthew Russell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Maanav Shah",
      "Dilan Shah"
     ],
     "a": [
      "Hector Irizarry",
      "Ben Mead"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ruhi Shah",
      "Dilan Shah"
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
     "as": 10,
     "h": [
      "Angela Luo",
      "Maanav Shah"
     ],
     "a": [
      "Stacy Walkowitz",
      "Matthew Russell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sara Synn",
      "Shreyas Pani"
     ],
     "a": [
      "Shelah Wallace",
      "Manny Lai"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Morgan Fishman",
      "Anthony Ursino"
     ],
     "a": [
      "Krysti Maronski-Neufeldt",
      "Damien Stahl"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Ruhi Shah",
      "Sara Synn"
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
     "as": 18,
     "h": [
      "Angela Luo",
      "Richa Shah"
     ],
     "a": [
      "Shelah Wallace",
      "Krysti Maronski-Neufeldt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Eric Lin",
      "Shreyas Pani"
     ],
     "a": [
      "Damien Stahl",
      "Nathan Law"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Maanav Shah",
      "Dilan Shah"
     ],
     "a": [
      "Manny Lai",
      "Ben Mead"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Morgan Fishman",
      "Anthony Ursino"
     ],
     "a": [
      "Stacy Walkowitz",
      "Manny Lai"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sara Synn",
      "Eric Lin"
     ],
     "a": [
      "Annemarie Mccartney",
      "Matthew Russell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ruhi Shah",
      "Shreyas Pani"
     ],
     "a": [
      "Krysti Maronski-Neufeldt",
      "Nathan Law"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Richa Shah",
      "Maanav Shah"
     ],
     "a": [
      "Shelah Wallace",
      "Ben Mead"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ruhi Shah",
      "Morgan Fishman"
     ],
     "a": [
      "Annemarie Mccartney",
      "Krysti Maronski-Neufeldt"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Angela Luo",
      "Richa Shah"
     ],
     "a": [
      "Stacy Walkowitz",
      "Shelah Wallace"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Maanav Shah",
      "Shreyas Pani"
     ],
     "a": [
      "Ben Mead",
      "Damien Stahl"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Anthony Ursino",
      "Dilan Shah"
     ],
     "a": [
      "Manny Lai",
      "Nathan Law"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 6,
   "home": "Bounce Malvern",
   "away": "Home Court",
   "time": "2026-09-30T19:30:00",
   "complete": true,
   "homePoints": 667,
   "awayPoints": 483,
   "homeGW": 30,
   "awayGW": 2,
   "games": [
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
      "Aurora Lewis",
      "Nathan Malhotra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Harriet Levin",
      "Justin Bautista"
     ],
     "a": [
      "Amanda Kiszonak",
      "Elliot Stevens"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Megan Harvey",
      "Lou Frignito"
     ],
     "a": [
      "Ariana Rizvani",
      "Aidan Jackson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Nam Barsh",
      "Chris Tabeling"
     ],
     "a": [
      "Jenny Chen",
      "Andrew Cooley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Yuki Kim",
      "Harriet Levin"
     ],
     "a": [
      "Ariana Rizvani",
      "Amanda Kiszonak"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Megan Harvey",
      "Nam Barsh"
     ],
     "a": [
      "Aurora Lewis",
      "Jenny Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Nick Meale",
      "Chris Tabeling"
     ],
     "a": [
      "Nathan Malhotra",
      "Elliot Stevens"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Lou Frignito",
      "Justin Bautista"
     ],
     "a": [
      "Aidan Jackson",
      "Andrew Cooley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Yuki Kim",
      "Lou Frignito"
     ],
     "a": [
      "Aurora Lewis",
      "Nathan Malhotra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Harriet Levin",
      "Nick Meale"
     ],
     "a": [
      "Jenny Chen",
      "Elliot Stevens"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Megan Harvey",
      "Chris Tabeling"
     ],
     "a": [
      "Ariana Rizvani",
      "Aidan Jackson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Nam Barsh",
      "Justin Bautista"
     ],
     "a": [
      "Amanda Kiszonak",
      "Andrew Cooley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Nam Barsh",
      "Megan Harvey"
     ],
     "a": [
      "Ariana Rizvani",
      "Amanda Kiszonak"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Yuki Kim",
      "Harriet Levin"
     ],
     "a": [
      "Aurora Lewis",
      "Jenny Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Lou Frignito",
      "Justin Bautista"
     ],
     "a": [
      "Nathan Malhotra",
      "Elliot Stevens"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Nick Meale",
      "Chris Tabeling"
     ],
     "a": [
      "Aidan Jackson",
      "Andrew Cooley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Yuki Kim",
      "Chris Tabeling"
     ],
     "a": [
      "Ariana Rizvani",
      "Nathan Malhotra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Harriet Levin",
      "Lou Frignito"
     ],
     "a": [
      "Aurora Lewis",
      "Elliot Stevens"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Megan Harvey",
      "Justin Bautista"
     ],
     "a": [
      "Jenny Chen",
      "Aidan Jackson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Nam Barsh",
      "Nick Meale"
     ],
     "a": [
      "Amanda Kiszonak",
      "Andrew Cooley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Yuki Kim",
      "Megan Harvey"
     ],
     "a": [
      "Ariana Rizvani",
      "Jenny Chen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Harriet Levin",
      "Nam Barsh"
     ],
     "a": [
      "Aurora Lewis",
      "Amanda Kiszonak"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Nick Meale",
      "Lou Frignito"
     ],
     "a": [
      "Nathan Malhotra",
      "Aidan Jackson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Chris Tabeling",
      "Justin Bautista"
     ],
     "a": [
      "Elliot Stevens",
      "Andrew Cooley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Yuki Kim",
      "Justin Bautista"
     ],
     "a": [
      "Ariana Rizvani",
      "Nathan Malhotra"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Harriet Levin",
      "Chris Tabeling"
     ],
     "a": [
      "Aurora Lewis",
      "Elliot Stevens"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Nam Barsh",
      "Lou Frignito"
     ],
     "a": [
      "Amanda Kiszonak",
      "Aidan Jackson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Megan Harvey",
      "Nick Meale"
     ],
     "a": [
      "Jenny Chen",
      "Andrew Cooley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Yuki Kim",
      "Nam Barsh"
     ],
     "a": [
      "Ariana Rizvani",
      "Jenny Chen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Harriet Levin",
      "Megan Harvey"
     ],
     "a": [
      "Aurora Lewis",
      "Amanda Kiszonak"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Nick Meale",
      "Justin Bautista"
     ],
     "a": [
      "Nathan Malhotra",
      "Aidan Jackson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Lou Frignito",
      "Chris Tabeling"
     ],
     "a": [
      "Elliot Stevens",
      "Andrew Cooley"
     ]
    }
   ],
   "subs": [
    "Justin Bautista",
    "Amanda Kiszonak",
    "Andrew Cooley",
    "Jenny Chen"
   ]
  },
  {
   "result": "away",
   "week": 6,
   "home": "Pickle House",
   "away": "Bounce Philly",
   "time": "2026-09-30T19:30:00",
   "complete": true,
   "homePoints": 606,
   "awayPoints": 637,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Emily Babinsky",
      "Dipen Bhatt"
     ],
     "a": [
      "Charlotte Healey",
      "Alex Boory"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lissa Eagles",
      "Gage Cvijic"
     ],
     "a": [
      "Rachel Alfano",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Taylor Hartman",
      "Zach Hollmann"
     ],
     "a": [
      "Alyssa Boyle",
      "William Hayes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Yoyo Shen",
      "Mickey Cook"
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
     "as": 10,
     "h": [
      "Taylor Hartman",
      "Yoyo Shen"
     ],
     "a": [
      "Rachel Alfano",
      "Julia Sternberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Emily Babinsky",
      "Lissa Eagles"
     ],
     "a": [
      "Alyssa Boyle",
      "Charlotte Healey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Zach Hollmann",
      "Dipen Bhatt"
     ],
     "a": [
      "Mark Kilimnik",
      "Zachary Lessner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Dylan Unkert",
      "Mickey Cook"
     ],
     "a": [
      "William Hayes",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Lissa Eagles",
      "Mickey Cook"
     ],
     "a": [
      "Julia Sternberg",
      "Alex Boory"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Emily Babinsky",
      "Gage Cvijic"
     ],
     "a": [
      "Alyssa Boyle",
      "Zachary Lessner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Taylor Hartman",
      "Zach Hollmann"
     ],
     "a": [
      "Rachel Alfano",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Yoyo Shen",
      "Dylan Unkert"
     ],
     "a": [
      "Charlotte Healey",
      "William Hayes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Taylor Hartman",
      "Yoyo Shen"
     ],
     "a": [
      "Rachel Alfano",
      "Julia Sternberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Emily Babinsky",
      "Lissa Eagles"
     ],
     "a": [
      "Alyssa Boyle",
      "Charlotte Healey"
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
      "Mark Kilimnik",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Dylan Unkert",
      "Zach Hollmann"
     ],
     "a": [
      "William Hayes",
      "Zachary Lessner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Taylor Hartman",
      "Dylan Unkert"
     ],
     "a": [
      "Charlotte Healey",
      "Alex Boory"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Lissa Eagles",
      "Mickey Cook"
     ],
     "a": [
      "Rachel Alfano",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Yoyo Shen",
      "Zach Hollmann"
     ],
     "a": [
      "Alyssa Boyle",
      "William Hayes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Emily Babinsky",
      "Gage Cvijic"
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
     "as": 17,
     "h": [
      "Yoyo Shen",
      "Emily Babinsky"
     ],
     "a": [
      "Charlotte Healey",
      "Julia Sternberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Taylor Hartman",
      "Lissa Eagles"
     ],
     "a": [
      "Alyssa Boyle",
      "Rachel Alfano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Dipen Bhatt",
      "Dylan Unkert"
     ],
     "a": [
      "William Hayes",
      "Alex Boory"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Zach Hollmann",
      "Gage Cvijic"
     ],
     "a": [
      "Mark Kilimnik",
      "Zachary Lessner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Taylor Hartman",
      "Dylan Unkert"
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
      "Lissa Eagles",
      "Gage Cvijic"
     ],
     "a": [
      "Julia Sternberg",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Yoyo Shen",
      "Zach Hollmann"
     ],
     "a": [
      "Alyssa Boyle",
      "Zachary Lessner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Emily Babinsky",
      "Dipen Bhatt"
     ],
     "a": [
      "Rachel Alfano",
      "Alex Boory"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Taylor Hartman",
      "Lissa Eagles"
     ],
     "a": [
      "Alyssa Boyle",
      "Rachel Alfano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Yoyo Shen",
      "Emily Babinsky"
     ],
     "a": [
      "Charlotte Healey",
      "Julia Sternberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Gage Cvijic",
      "Mickey Cook"
     ],
     "a": [
      "Mark Kilimnik",
      "Alex Boory"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Zach Hollmann",
      "Dylan Unkert"
     ],
     "a": [
      "Dustin Rabinowitz",
      "Zachary Lessner"
     ]
    }
   ],
   "subs": [
    "Dylan Unkert",
    "Gage Cvijic"
   ]
  },
  {
   "result": "home",
   "week": 6,
   "home": "Dill Dinkers Hatboro The Factory",
   "away": "Flemington",
   "time": "2026-09-30T19:30:00",
   "complete": true,
   "homePoints": 679,
   "awayPoints": 589,
   "homeGW": 24,
   "awayGW": 8,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Kaylyn Swankoski",
      "Dylan Ashbach"
     ],
     "a": [
      "Emily Reckenbeil",
      "Robbie Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Cristi Landrigan",
      "Conor Landrigan"
     ],
     "a": [
      "Elisangela Harrington",
      "Andre Cristobal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Rayna Baizman",
      "Varun Prakash"
     ],
     "a": [
      "Susan Ackley",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Allison Tarnoff",
      "Steven Fernandez"
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
     "as": 14,
     "h": [
      "Kaylyn Swankoski",
      "Rayna Baizman"
     ],
     "a": [
      "Emily Reckenbeil",
      "Susan Ackley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Allison Tarnoff",
      "Cristi Landrigan"
     ],
     "a": [
      "Elisangela Harrington",
      "Aimee Castellano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Varun Prakash",
      "Clayton Schmucker"
     ],
     "a": [
      "Patrick Ryan",
      "Ross Switkes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Steven Fernandez",
      "Dylan Ashbach"
     ],
     "a": [
      "Robbie Oddy",
      "Andre Cristobal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Kaylyn Swankoski",
      "Dylan Ashbach"
     ],
     "a": [
      "Emily Reckenbeil",
      "Andre Cristobal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Cristi Landrigan",
      "Conor Landrigan"
     ],
     "a": [
      "Elisangela Harrington",
      "Robbie Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Rayna Baizman",
      "Varun Prakash"
     ],
     "a": [
      "Susan Ackley",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 29,
     "as": 27,
     "h": [
      "Allison Tarnoff",
      "Steven Fernandez"
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
     "as": 12,
     "h": [
      "Kaylyn Swankoski",
      "Rayna Baizman"
     ],
     "a": [
      "Emily Reckenbeil",
      "Susan Ackley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Cristi Landrigan",
      "Allison Tarnoff"
     ],
     "a": [
      "Elisangela Harrington",
      "Aimee Castellano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Steven Fernandez",
      "Clayton Schmucker"
     ],
     "a": [
      "Robbie Oddy",
      "Ross Switkes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Dylan Ashbach",
      "Conor Landrigan"
     ],
     "a": [
      "Patrick Ryan",
      "Andre Cristobal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kaylyn Swankoski",
      "Varun Prakash"
     ],
     "a": [
      "Emily Reckenbeil",
      "Andre Cristobal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Rayna Baizman",
      "Dylan Ashbach"
     ],
     "a": [
      "Elisangela Harrington",
      "Robbie Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Cristi Landrigan",
      "Clayton Schmucker"
     ],
     "a": [
      "Susan Ackley",
      "Patrick Ryan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Allison Tarnoff",
      "Conor Landrigan"
     ],
     "a": [
      "Aimee Castellano",
      "Ross Switkes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kaylyn Swankoski",
      "Allison Tarnoff"
     ],
     "a": [
      "Emily Reckenbeil",
      "Elisangela Harrington"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Rayna Baizman",
      "Cristi Landrigan"
     ],
     "a": [
      "Susan Ackley",
      "Aimee Castellano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Conor Landrigan",
      "Varun Prakash"
     ],
     "a": [
      "Patrick Ryan",
      "Robbie Oddy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Steven Fernandez",
      "Clayton Schmucker"
     ],
     "a": [
      "Ross Switkes",
      "Andre Cristobal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Kaylyn Swankoski",
      "Steven Fernandez"
     ],
     "a": [
      "Emily Reckenbeil",
      "Patrick Ryan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Rayna Baizman",
      "Dylan Ashbach"
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
     "as": 14,
     "h": [
      "Allison Tarnoff",
      "Clayton Schmucker"
     ],
     "a": [
      "Susan Ackley",
      "Robbie Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Cristi Landrigan",
      "Varun Prakash"
     ],
     "a": [
      "Aimee Castellano",
      "Andre Cristobal"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Kaylyn Swankoski",
      "Allison Tarnoff"
     ],
     "a": [
      "Susan Ackley",
      "Aimee Castellano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Rayna Baizman",
      "Cristi Landrigan"
     ],
     "a": [
      "Emily Reckenbeil",
      "Elisangela Harrington"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Dylan Ashbach",
      "Varun Prakash"
     ],
     "a": [
      "Patrick Ryan",
      "Ross Switkes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Conor Landrigan",
      "Clayton Schmucker"
     ],
     "a": [
      "Andre Cristobal",
      "Robbie Oddy"
     ]
    }
   ],
   "subs": [
    "Emily Reckenbeil",
    "Andre Cristobal"
   ]
  },
  {
   "result": "home",
   "week": 7,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Monroe",
   "time": "2026-10-07T19:00:00",
   "complete": true,
   "provisional": true,
   "homePoints": 642,
   "awayPoints": 564,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Anisha Malhotra",
      "Camrin Cronheim"
     ],
     "a": [
      "Ruhi Shah",
      "Dilan Shah"
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
      "Richa Shah",
      "Maanav Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Meghan Mediratta",
      "Sidd Pathare"
     ],
     "a": [
      "Sara Synn",
      "Ali Husain"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jenna Irwin",
      "Chris Long"
     ],
     "a": [
      "Sophia Kaufmann",
      "Shreyas Pani"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Gissel Escalante",
      "Jenna Irwin"
     ],
     "a": [
      "Ruhi Shah",
      "Sara Synn"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Meghan Mediratta",
      "Anisha Malhotra"
     ],
     "a": [
      "Richa Shah",
      "Sophia Kaufmann"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Camrin Cronheim",
      "Jason Makarevic"
     ],
     "a": [
      "Maanav Shah",
      "Dilan Shah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Chris Long",
      "Sidd Pathare"
     ],
     "a": [
      "Shreyas Pani",
      "Ali Husain"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Anisha Malhotra",
      "Camrin Cronheim"
     ],
     "a": [
      "Richa Shah",
      "Dilan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Meghan Mediratta",
      "Sidd Pathare"
     ],
     "a": [
      "Ruhi Shah",
      "Shreyas Pani"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jenna Irwin",
      "Chris Long"
     ],
     "a": [
      "Sophia Kaufmann",
      "Maanav Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Gissel Escalante",
      "Jason Makarevic"
     ],
     "a": [
      "Sara Synn",
      "Ali Husain"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Gissel Escalante",
      "Jenna Irwin"
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
     "as": 12,
     "h": [
      "Anisha Malhotra",
      "Meghan Mediratta"
     ],
     "a": [
      "Sophia Kaufmann",
      "Sara Synn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 27,
     "as": 29,
     "h": [
      "Sidd Pathare",
      "Camrin Cronheim"
     ],
     "a": [
      "Dilan Shah",
      "Shreyas Pani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jason Makarevic",
      "Chris Long"
     ],
     "a": [
      "Maanav Shah",
      "Ali Husain"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jenna Irwin",
      "Camrin Cronheim"
     ],
     "a": [
      "Sara Synn",
      "Maanav Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Gissel Escalante",
      "Chris Long"
     ],
     "a": [
      "Ruhi Shah",
      "Ali Husain"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Meghan Mediratta",
      "Jason Makarevic"
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
     "as": 14,
     "h": [
      "Anisha Malhotra",
      "Sidd Pathare"
     ],
     "a": [
      "Sophia Kaufmann",
      "Dilan Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Gissel Escalante",
      "Anisha Malhotra"
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
     "as": 7,
     "h": [
      "Jenna Irwin",
      "Meghan Mediratta"
     ],
     "a": [
      "Sara Synn",
      "Sophia Kaufmann"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jason Makarevic",
      "Camrin Cronheim"
     ],
     "a": [
      "Ali Husain",
      "Maanav Shah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Chris Long",
      "Sidd Pathare"
     ],
     "a": [
      "Dilan Shah",
      "Shreyas Pani"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jenna Irwin",
      "Camrin Cronheim"
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
      "Gissel Escalante",
      "Chris Long"
     ],
     "a": [
      "Ruhi Shah",
      "Shreyas Pani"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Anisha Malhotra",
      "Sidd Pathare"
     ],
     "a": [
      "Sara Synn",
      "Maanav Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Meghan Mediratta",
      "Jason Makarevic"
     ],
     "a": [
      "Sophia Kaufmann",
      "Ali Husain"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Gissel Escalante",
      "Anisha Malhotra"
     ],
     "a": [
      "Sara Synn",
      "Ruhi Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Jenna Irwin",
      "Meghan Mediratta"
     ],
     "a": [
      "Sophia Kaufmann",
      "Richa Shah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jason Makarevic",
      "Chris Long"
     ],
     "a": [
      "Maanav Shah",
      "Dilan Shah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Camrin Cronheim",
      "Sidd Pathare"
     ],
     "a": [
      "Ali Husain",
      "Shreyas Pani"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 7,
   "home": "Dill Dinkers Hatboro The Factory",
   "away": "Bounce Malvern",
   "time": "2026-10-07T19:30:00",
   "complete": true,
   "homePoints": 654,
   "awayPoints": 541,
   "homeGW": 24,
   "awayGW": 8,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Marina Cozac",
      "Andrew Wakefield"
     ],
     "a": [
      "Nam Barsh",
      "Lou Frignito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Allison Tarnoff",
      "Kenoa Tio"
     ],
     "a": [
      "Sarah Kline",
      "Shashank Kamdar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Hannah Nussbaum",
      "Dylan Ashbach"
     ],
     "a": [
      "Yuki Kim",
      "Nick Meale"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kaylyn Swankoski",
      "Varun Prakash"
     ],
     "a": [
      "Harriet Levin",
      "Chris Tabeling"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Hannah Nussbaum",
      "Marina Cozac"
     ],
     "a": [
      "Yuki Kim",
      "Nam Barsh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Cristi Landrigan",
      "Kaylyn Swankoski"
     ],
     "a": [
      "Harriet Levin",
      "Sarah Kline"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Dylan Ashbach",
      "Andrew Wakefield"
     ],
     "a": [
      "Lou Frignito",
      "Shashank Kamdar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kenoa Tio",
      "Varun Prakash"
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
     "as": 12,
     "h": [
      "Marina Cozac",
      "Kenoa Tio"
     ],
     "a": [
      "Harriet Levin",
      "Chris Tabeling"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Cristi Landrigan",
      "Varun Prakash"
     ],
     "a": [
      "Sarah Kline",
      "Lou Frignito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kaylyn Swankoski",
      "Dylan Ashbach"
     ],
     "a": [
      "Yuki Kim",
      "Nick Meale"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Allison Tarnoff",
      "Andrew Wakefield"
     ],
     "a": [
      "Megan Harvey",
      "Shashank Kamdar"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kaylyn Swankoski",
      "Allison Tarnoff"
     ],
     "a": [
      "Nam Barsh",
      "Megan Harvey"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Hannah Nussbaum",
      "Marina Cozac"
     ],
     "a": [
      "Sarah Kline",
      "Yuki Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kenoa Tio",
      "Andrew Wakefield"
     ],
     "a": [
      "Nick Meale",
      "Chris Tabeling"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Dylan Ashbach",
      "Varun Prakash"
     ],
     "a": [
      "Lou Frignito",
      "Shashank Kamdar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Allison Tarnoff",
      "Andrew Wakefield"
     ],
     "a": [
      "Harriet Levin",
      "Shashank Kamdar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Marina Cozac",
      "Varun Prakash"
     ],
     "a": [
      "Yuki Kim",
      "Lou Frignito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Hannah Nussbaum",
      "Dylan Ashbach"
     ],
     "a": [
      "Sarah Kline",
      "Nick Meale"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Cristi Landrigan",
      "Kenoa Tio"
     ],
     "a": [
      "Nam Barsh",
      "Chris Tabeling"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Hannah Nussbaum",
      "Kaylyn Swankoski"
     ],
     "a": [
      "Sarah Kline",
      "Yuki Kim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Marina Cozac",
      "Cristi Landrigan"
     ],
     "a": [
      "Nam Barsh",
      "Megan Harvey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Varun Prakash",
      "Dylan Ashbach"
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
      "Kenoa Tio",
      "Andrew Wakefield"
     ],
     "a": [
      "Shashank Kamdar",
      "Chris Tabeling"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Allison Tarnoff",
      "Kenoa Tio"
     ],
     "a": [
      "Megan Harvey",
      "Chris Tabeling"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Kaylyn Swankoski",
      "Dylan Ashbach"
     ],
     "a": [
      "Harriet Levin",
      "Nick Meale"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Marina Cozac",
      "Varun Prakash"
     ],
     "a": [
      "Yuki Kim",
      "Lou Frignito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Cristi Landrigan",
      "Andrew Wakefield"
     ],
     "a": [
      "Nam Barsh",
      "Shashank Kamdar"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kaylyn Swankoski",
      "Hannah Nussbaum"
     ],
     "a": [
      "Nam Barsh",
      "Yuki Kim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Allison Tarnoff",
      "Cristi Landrigan"
     ],
     "a": [
      "Megan Harvey",
      "Harriet Levin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kenoa Tio",
      "Varun Prakash"
     ],
     "a": [
      "Shashank Kamdar",
      "Chris Tabeling"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Dylan Ashbach",
      "Andrew Wakefield"
     ],
     "a": [
      "Lou Frignito",
      "Nick Meale"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 7,
   "home": "Jersey Devil",
   "away": "Dill Dinkers Hatboro Aces",
   "time": "2026-10-07T19:30:00",
   "complete": true,
   "homePoints": 638,
   "awayPoints": 542,
   "homeGW": 25,
   "awayGW": 7,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Michaela Pierznik",
      "Zach Bowe"
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
     "as": 15,
     "h": [
      "Maeve Mcgowan",
      "Matthew Matro"
     ],
     "a": [
      "Sarah Ross",
      "Joel Phillips"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Rachel Berger",
      "Johny Mario"
     ],
     "a": [
      "Erika Richards",
      "Adam Beck"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Arianna Haresign",
      "Matthew Chen"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Ryan Rosen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Arianna Haresign",
      "Rachel Berger"
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
     "as": 14,
     "h": [
      "Michaela Pierznik",
      "Lauren Mercado"
     ],
     "a": [
      "Helen Liu",
      "Erika Richards"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Johny Mario",
      "Caleb Perry-Abner"
     ],
     "a": [
      "Robert Schimony",
      "Adam Beck"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Zach Bowe",
      "Matthew Chen"
     ],
     "a": [
      "Ryan Rosen",
      "Joel Phillips"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lauren Mercado",
      "Matthew Matro"
     ],
     "a": [
      "Helen Liu",
      "Robert Schimony"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Arianna Haresign",
      "Zach Bowe"
     ],
     "a": [
      "Erika Richards",
      "William Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Maeve Mcgowan",
      "Caleb Perry-Abner"
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
      "Michaela Pierznik",
      "Johny Mario"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Adam Beck"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Rachel Berger",
      "Lauren Mercado"
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
     "as": 12,
     "h": [
      "Maeve Mcgowan",
      "Michaela Pierznik"
     ],
     "a": [
      "Erika Richards",
      "Helen Liu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Matthew Chen",
      "Johny Mario"
     ],
     "a": [
      "Ryan Rosen",
      "Robert Schimony"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Matthew Matro",
      "Caleb Perry-Abner"
     ],
     "a": [
      "Joel Phillips",
      "William Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Arianna Haresign",
      "Matthew Chen"
     ],
     "a": [
      "Helen Liu",
      "William Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Lauren Mercado",
      "Johny Mario"
     ],
     "a": [
      "Erika Richards",
      "Adam Beck"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Maeve Mcgowan",
      "Zach Bowe"
     ],
     "a": [
      "Sarah Ross",
      "Joel Phillips"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Michaela Pierznik",
      "Matthew Matro"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Robert Schimony"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Maeve Mcgowan",
      "Lauren Mercado"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Erika Richards"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Arianna Haresign",
      "Rachel Berger"
     ],
     "a": [
      "Sarah Ross",
      "Helen Liu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Caleb Perry-Abner",
      "Johny Mario"
     ],
     "a": [
      "Robert Schimony",
      "Joel Phillips"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Zach Bowe",
      "Matthew Chen"
     ],
     "a": [
      "Ryan Rosen",
      "William Lee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Maeve Mcgowan",
      "Matthew Matro"
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
     "as": 18,
     "h": [
      "Rachel Berger",
      "Caleb Perry-Abner"
     ],
     "a": [
      "Erika Richards",
      "Adam Beck"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Arianna Haresign",
      "Zach Bowe"
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
     "as": 13,
     "h": [
      "Michaela Pierznik",
      "Johny Mario"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Joel Phillips"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Michaela Pierznik",
      "Rachel Berger"
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
     "as": 18,
     "h": [
      "Arianna Haresign",
      "Lauren Mercado"
     ],
     "a": [
      "Helen Liu",
      "Alyssa Tartaglia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Matthew Chen",
      "Caleb Perry-Abner"
     ],
     "a": [
      "Robert Schimony",
      "Adam Beck"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Zach Bowe",
      "Matthew Matro"
     ],
     "a": [
      "Joel Phillips",
      "Ryan Rosen"
     ]
    }
   ],
   "subs": [
    "Joel Phillips"
   ]
  },
  {
   "result": "home",
   "week": 7,
   "home": "Bounce Philly",
   "away": "ACE Moorestown",
   "time": "2026-10-07T19:30:00",
   "complete": true,
   "homePoints": 600,
   "awayPoints": 579,
   "homeGW": 20,
   "awayGW": 12,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Rachel Alfano",
      "Dustin Rabinowitz"
     ],
     "a": [
      "Annemarie Mccartney",
      "Nathan Law"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Julia Sternberg",
      "Alex Boory"
     ],
     "a": [
      "Anita Buggins",
      "Hector Irizarry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kathleen Dougherty",
      "Bruno Casino"
     ],
     "a": [
      "Jennifer Sanchez",
      "Jack Blumberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Charlotte Healey",
      "Mark Kilimnik"
     ],
     "a": [
      "Stacy Walkowitz",
      "Manny Lai"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Alyssa Boyle",
      "Rachel Alfano"
     ],
     "a": [
      "Anita Buggins",
      "Jennifer Sanchez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Julia Sternberg",
      "Kathleen Dougherty"
     ],
     "a": [
      "Annemarie Mccartney",
      "Krysti Maronski-Neufeldt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Bruno Casino",
      "William Hayes"
     ],
     "a": [
      "Manny Lai",
      "Garv Singhal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Dustin Rabinowitz",
      "Mark Kilimnik"
     ],
     "a": [
      "Hector Irizarry",
      "Nathan Law"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Alyssa Boyle",
      "William Hayes"
     ],
     "a": [
      "Brittany Hall",
      "Jack Blumberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Charlotte Healey",
      "Alex Boory"
     ],
     "a": [
      "Anita Buggins",
      "Hector Irizarry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Rachel Alfano",
      "Mark Kilimnik"
     ],
     "a": [
      "Krysti Maronski-Neufeldt",
      "Manny Lai"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Julia Sternberg",
      "Bruno Casino"
     ],
     "a": [
      "Annemarie Mccartney",
      "Garv Singhal"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Charlotte Healey",
      "Rachel Alfano"
     ],
     "a": [
      "Jennifer Sanchez",
      "Stacy Walkowitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Alyssa Boyle",
      "Kathleen Dougherty"
     ],
     "a": [
      "Annemarie Mccartney",
      "Brittany Hall"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "William Hayes",
      "Mark Kilimnik"
     ],
     "a": [
      "Garv Singhal",
      "Hector Irizarry"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Alex Boory",
      "Bruno Casino"
     ],
     "a": [
      "Manny Lai",
      "Nathan Law"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Julia Sternberg",
      "Mark Kilimnik"
     ],
     "a": [
      "Stacy Walkowitz",
      "Jack Blumberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 16,
     "h": [
      "Kathleen Dougherty",
      "Alex Boory"
     ],
     "a": [
      "Brittany Hall",
      "Nathan Law"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Charlotte Healey",
      "William Hayes"
     ],
     "a": [
      "Jennifer Sanchez",
      "Hector Irizarry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Alyssa Boyle",
      "Dustin Rabinowitz"
     ],
     "a": [
      "Krysti Maronski-Neufeldt",
      "Garv Singhal"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Julia Sternberg",
      "Kathleen Dougherty"
     ],
     "a": [
      "Stacy Walkowitz",
      "Krysti Maronski-Neufeldt"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Alyssa Boyle",
      "Rachel Alfano"
     ],
     "a": [
      "Anita Buggins",
      "Annemarie Mccartney"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Bruno Casino",
      "Alex Boory"
     ],
     "a": [
      "Manny Lai",
      "Jack Blumberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Mark Kilimnik",
      "Dustin Rabinowitz"
     ],
     "a": [
      "Garv Singhal",
      "Nathan Law"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Alyssa Boyle",
      "Bruno Casino"
     ],
     "a": [
      "Anita Buggins",
      "Nathan Law"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Kathleen Dougherty",
      "Dustin Rabinowitz"
     ],
     "a": [
      "Stacy Walkowitz",
      "Garv Singhal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Charlotte Healey",
      "William Hayes"
     ],
     "a": [
      "Krysti Maronski-Neufeldt",
      "Jack Blumberg"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Rachel Alfano",
      "Alex Boory"
     ],
     "a": [
      "Brittany Hall",
      "Manny Lai"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Alyssa Boyle",
      "Kathleen Dougherty"
     ],
     "a": [
      "Anita Buggins",
      "Stacy Walkowitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Rachel Alfano",
      "Charlotte Healey"
     ],
     "a": [
      "Jennifer Sanchez",
      "Brittany Hall"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Dustin Rabinowitz",
      "William Hayes"
     ],
     "a": [
      "Manny Lai",
      "Jack Blumberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Mark Kilimnik",
      "Bruno Casino"
     ],
     "a": [
      "Nathan Law",
      "Garv Singhal"
     ]
    }
   ],
   "subs": [
    "Garv Singhal"
   ]
  },
  {
   "result": "home",
   "week": 7,
   "home": "Pickle House",
   "away": "Flemington",
   "time": "2026-10-07T19:30:00",
   "complete": true,
   "provisional": true,
   "homePoints": 639,
   "awayPoints": 604,
   "homeGW": 20,
   "awayGW": 12,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Yoyo Shen",
      "Michael Li"
     ],
     "a": [
      "Suzi Battison",
      "Robbie Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Emily Babinsky",
      "Zach Hollmann"
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
      "Lissa Eagles",
      "Dipen Bhatt"
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
     "as": 15,
     "h": [
      "Taylor Hartman",
      "Chris Damato"
     ],
     "a": [
      "Aimee Castellano",
      "Patrick Ryan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Taylor Hartman",
      "Lissa Eagles"
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
     "as": 18,
     "h": [
      "Yoyo Shen",
      "Emily Babinsky"
     ],
     "a": [
      "Susan Ackley",
      "Aimee Castellano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Dipen Bhatt",
      "Michael Li"
     ],
     "a": [
      "Ross Switkes",
      "Patrick Ryan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Mickey Cook",
      "Zach Hollmann"
     ],
     "a": [
      "Thomas Connolly",
      "Robbie Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lissa Eagles",
      "Chris Damato"
     ],
     "a": [
      "Suzi Battison",
      "Thomas Connolly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Taylor Hartman",
      "Zach Hollmann"
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
     "as": 10,
     "h": [
      "Yoyo Shen",
      "Michael Li"
     ],
     "a": [
      "Susan Ackley",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Emily Babinsky",
      "Mickey Cook"
     ],
     "a": [
      "Aimee Castellano",
      "Patrick Ryan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Taylor Hartman",
      "Lissa Eagles"
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
     "as": 15,
     "h": [
      "Yoyo Shen",
      "Emily Babinsky"
     ],
     "a": [
      "Susan Ackley",
      "Aimee Castellano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Dipen Bhatt",
      "Chris Damato"
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
      "Michael Li",
      "Zach Hollmann"
     ],
     "a": [
      "Patrick Ryan",
      "Thomas Connolly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Taylor Hartman",
      "Chris Damato"
     ],
     "a": [
      "Suzi Battison",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Emily Babinsky",
      "Dipen Bhatt"
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
     "as": 11,
     "h": [
      "Lissa Eagles",
      "Mickey Cook"
     ],
     "a": [
      "Susan Ackley",
      "Patrick Ryan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Yoyo Shen",
      "Zach Hollmann"
     ],
     "a": [
      "Aimee Castellano",
      "Robbie Oddy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Yoyo Shen",
      "Lissa Eagles"
     ],
     "a": [
      "Suzi Battison",
      "Susan Ackley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Taylor Hartman",
      "Emily Babinsky"
     ],
     "a": [
      "Melissa Dardani",
      "Aimee Castellano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Dipen Bhatt",
      "Chris Damato"
     ],
     "a": [
      "Ross Switkes",
      "Thomas Connolly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Michael Li",
      "Zach Hollmann"
     ],
     "a": [
      "Patrick Ryan",
      "Robbie Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Emily Babinsky",
      "Mickey Cook"
     ],
     "a": [
      "Suzi Battison",
      "Thomas Connolly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Yoyo Shen",
      "Chris Damato"
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
      "Lissa Eagles",
      "Zach Hollmann"
     ],
     "a": [
      "Susan Ackley",
      "Patrick Ryan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Taylor Hartman",
      "Michael Li"
     ],
     "a": [
      "Aimee Castellano",
      "Ross Switkes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Taylor Hartman",
      "Yoyo Shen"
     ],
     "a": [
      "Suzi Battison",
      "Aimee Castellano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Emily Babinsky",
      "Lissa Eagles"
     ],
     "a": [
      "Susan Ackley",
      "Melissa Dardani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Michael Li",
      "Chris Damato"
     ],
     "a": [
      "Ross Switkes",
      "Patrick Ryan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Zach Hollmann",
      "Mickey Cook"
     ],
     "a": [
      "Thomas Connolly",
      "Robbie Oddy"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": null,
   "week": 7,
   "home": "ACE Moorestown",
   "away": "Bounce Philly",
   "time": "2026-10-08T19:30:00",
   "complete": false,
   "games": [
    {
     "t": "mixed",
     "h": [
      "Annemarie Mccartney",
      "Manny Lai"
     ],
     "a": [
      "Alex Abad",
      "Alex Mihalca"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Kristen Clemmer",
      "Hector Irizarry"
     ],
     "a": [
      "Alyssa Boyle",
      "William Hayes"
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Shelah Wallace",
      "Jase Volz"
     ],
     "a": [
      "Rachel Alfano",
      "Brandyn Schuchart"
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
      "Krysti Maronski-Neufeldt",
      "Damien Stahl"
     ],
     "a": [
      "Elysia Price",
      "Alexander Tong"
     ]
    },
    {
     "t": "female",
     "h": [
      "Shelah Wallace",
      "Kristen Clemmer"
     ],
     "a": [
      "Alyssa Boyle",
      "Alex Abad"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Jennifer Sanchez",
      "Krysti Maronski-Neufeldt"
     ],
     "a": [
      "Rachel Alfano",
      "Elysia Price"
     ]
    },
    {
     "t": "male",
     "h": [
      "Manny Lai",
      "Damien Stahl"
     ],
     "a": [
      "Brandyn Schuchart",
      "Alex Mihalca"
     ],
     "aSub": [
      1,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Hector Irizarry",
      "Jase Volz"
     ],
     "a": [
      "Alexander Tong",
      "William Hayes"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Krysti Maronski-Neufeldt",
      "Hector Irizarry"
     ],
     "a": [
      "Elysia Price",
      "William Hayes"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Annemarie Mccartney",
      "Jase Volz"
     ],
     "a": [
      "Rachel Alfano",
      "Alex Mihalca"
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
      "Jennifer Sanchez",
      "Damien Stahl"
     ],
     "a": [
      "Alyssa Boyle",
      "Brandyn Schuchart"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Kristen Clemmer",
      "Manny Lai"
     ],
     "a": [
      "Alex Abad",
      "Alexander Tong"
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "female",
     "h": [
      "Kristen Clemmer",
      "Shelah Wallace"
     ],
     "a": [
      "Alyssa Boyle",
      "Alex Abad"
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "female",
     "h": [
      "Krysti Maronski-Neufeldt",
      "Annemarie Mccartney"
     ],
     "a": [
      "Rachel Alfano",
      "Elysia Price"
     ]
    },
    {
     "t": "male",
     "h": [
      "Hector Irizarry",
      "Damien Stahl"
     ],
     "a": [
      "Brandyn Schuchart",
      "Alex Mihalca"
     ],
     "aSub": [
      1,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Manny Lai",
      "Ben Mead"
     ],
     "a": [
      "Alexander Tong",
      "William Hayes"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Shelah Wallace",
      "Ben Mead"
     ],
     "a": [
      "Alyssa Boyle",
      "William Hayes"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Jennifer Sanchez",
      "Hector Irizarry"
     ],
     "a": [
      "Alex Abad",
      "Alex Mihalca"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Kristen Clemmer",
      "Jase Volz"
     ],
     "a": [
      "Elysia Price",
      "Alexander Tong"
     ],
     "hSub": [
      1,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Annemarie Mccartney",
      "Damien Stahl"
     ],
     "a": [
      "Rachel Alfano",
      "Brandyn Schuchart"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "female",
     "h": [
      "Shelah Wallace",
      "Jennifer Sanchez"
     ],
     "a": [
      "Alex Abad",
      "Elysia Price"
     ]
    },
    {
     "t": "female",
     "h": [
      "Kristen Clemmer",
      "Krysti Maronski-Neufeldt"
     ],
     "a": [
      "Alyssa Boyle",
      "Rachel Alfano"
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "male",
     "h": [
      "Ben Mead",
      "Jase Volz"
     ],
     "a": [
      "Alex Mihalca",
      "Alexander Tong"
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
      "Manny Lai",
      "Hector Irizarry"
     ],
     "a": [
      "William Hayes",
      "Brandyn Schuchart"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Kristen Clemmer",
      "Ben Mead"
     ],
     "a": [
      "Alex Abad",
      "Alexander Tong"
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Jennifer Sanchez",
      "Damien Stahl"
     ],
     "a": [
      "Alyssa Boyle",
      "Brandyn Schuchart"
     ],
     "aSub": [
      0,
      1
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Shelah Wallace",
      "Manny Lai"
     ],
     "a": [
      "Elysia Price",
      "William Hayes"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Krysti Maronski-Neufeldt",
      "Jase Volz"
     ],
     "a": [
      "Rachel Alfano",
      "Alex Mihalca"
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
      "Kristen Clemmer",
      "Krysti Maronski-Neufeldt"
     ],
     "a": [
      "Alex Abad",
      "Elysia Price"
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "female",
     "h": [
      "Shelah Wallace",
      "Annemarie Mccartney"
     ],
     "a": [
      "Alyssa Boyle",
      "Rachel Alfano"
     ]
    },
    {
     "t": "male",
     "h": [
      "Manny Lai",
      "Damien Stahl"
     ],
     "a": [
      "Alex Mihalca",
      "Alexander Tong"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "male",
     "h": [
      "Ben Mead",
      "Jase Volz"
     ],
     "a": [
      "Brandyn Schuchart",
      "William Hayes"
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
   "week": 11,
   "home": "Jersey Pickleball Club",
   "away": "Jersey Devil",
   "time": "2026-11-08T12:00:00",
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
  "Shawn Ganow": "1e340ccb-0e0f-4b6b-b760-d1a723561d04",
  "Michael Swell": "5436acd1-542a-4ca5-a652-c0addcf23ea2",
  "Stefanie Sohosky": "65aabbc7-a06a-4074-a5df-5b0938ede28a",
  "Marc Padre": "a131a707-f20e-4838-9dcf-7cecb40c2705",
  "Vivek Kumar": "a472cebf-6bf1-42d1-9a41-fc8940cbb021",
  "Johanna Kreilick": "ccd0807d-67ac-4dbc-a7c7-4b4df3dea598"
 },
 "availableSubs": [
  {
   "name": "Darren Johnson",
   "playerId": "00092e4b-b019-43ae-bfef-503e1fc6f657",
   "gender": "Male",
   "team": "Bounce Malvern",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Katie Lazaar",
   "playerId": "0bed64f0-b72a-4d63-8d44-347635f58bae",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Austin Gow",
   "playerId": "0e577096-0b13-441d-b087-cc49cb55cfe2",
   "gender": "Male",
   "team": "Bounce Malvern",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Gavin Malave",
   "playerId": "0eb33201-72fc-4c64-897a-85c3d9d64373",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro Aces",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Emily Ocasio",
   "playerId": "12584e84-045d-4de1-8edc-7ccbcb1ee27a",
   "gender": "Female",
   "team": "Bounce Malvern",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Jamie Hahn",
   "playerId": "17019012-f2ff-4e9a-958a-928369685b36",
   "gender": "Female",
   "team": "Flemington",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Jaco De Waal",
   "playerId": "19407a76-031d-4be3-8ed8-ba88cccdfdd3",
   "gender": "Male",
   "team": "Flemington",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Shawn Ganow",
   "playerId": "1e340ccb-0e0f-4b6b-b760-d1a723561d04",
   "gender": "Male",
   "team": "Bounce Malvern",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Joseph Zee",
   "playerId": "2026ccb7-bd78-4bb5-96de-9d0127fdd954",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Tin Wai Kwan",
   "playerId": "22fe1980-7ef9-4026-8c76-a39534431c6b",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Justin Bautista",
   "playerId": "27660961-6245-4b09-aafe-359ca3205797",
   "gender": "Male",
   "team": "Bounce Malvern",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Katalina Wang",
   "playerId": "2d602f38-7eda-4a7b-a3a2-98b40e443b79",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Chanda Mccoy",
   "playerId": "30cb78cb-f962-40f9-bd02-78d336920431",
   "gender": "Female",
   "team": "Flemington",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Dylan Unkert",
   "playerId": "35415e5c-19db-4389-9839-b63d7e09851f",
   "gender": "Male",
   "team": "Pickle House",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Lilie Sen",
   "playerId": "3aa34138-1989-4d89-b656-3e0c44b23b6f",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro Aces",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Gage Cvijic",
   "playerId": "4572bf15-1066-42b7-ae74-94d6175b1b96",
   "gender": "Male",
   "team": "Pickle House",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Natasha De Carvalho",
   "playerId": "462f3a15-22ed-4fa3-b698-78678a5d6966",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Alex Mihalca",
   "playerId": "47054f48-f7f3-4a11-8a3c-03160ea588b6",
   "gender": "Male",
   "team": "Bounce Philly",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Emily Reckenbeil",
   "playerId": "47191c01-c627-48e1-aeae-9745695957d9",
   "gender": "Female",
   "team": "Flemington",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Amanda Kiszonak",
   "playerId": "47928aef-9cba-45da-b6cf-5c7ea9378efc",
   "gender": "Female",
   "team": "Home Court",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Ethan Henigan",
   "playerId": "4a1d4e3a-07b2-4575-b80d-6d160b0c7a23",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro Aces",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Andrew Cooley",
   "playerId": "4bc5dc80-f744-41e1-ab6e-a02c600abed8",
   "gender": "Male",
   "team": "Home Court",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Cally Kerrigan",
   "playerId": "4c9897dc-1d71-46b0-bf05-e21d2f3efcb0",
   "gender": "Female",
   "team": "Flemington",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Andre Cristobal",
   "playerId": "50d796da-0ac2-4f94-af29-212d7865f473",
   "gender": "Male",
   "team": "Flemington",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Obege Janvier",
   "playerId": "50fccc8f-a4a9-490b-a7d5-eebbda35bb22",
   "gender": "Male",
   "team": "Flemington",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Michael Swell",
   "playerId": "5436acd1-542a-4ca5-a652-c0addcf23ea2",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Jenny Chen",
   "playerId": "54c51642-8048-4dd1-9221-a4306301ff72",
   "gender": "Female",
   "team": "Home Court",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Marc Harden",
   "playerId": "55194d2f-f537-4e19-b901-86c559f25ef2",
   "gender": "Male",
   "team": "ACE Moorestown",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Hany Ibrahim",
   "playerId": "5b439439-36f5-421f-afaa-5d8b1a547954",
   "gender": "Male",
   "team": "Home Court",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Andrew Wakefield",
   "playerId": "5f429a7f-18c6-49e3-a804-6aa2a930f09c",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro Aces",
   "isCaptain": false,
   "outsideSub": false
  },
  {
   "name": "Stephanie Moniz",
   "playerId": "5fd7e152-10cf-4669-bcf2-09a067870bf0",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Stefanie Sohosky",
   "playerId": "65aabbc7-a06a-4074-a5df-5b0938ede28a",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Ashley Barros",
   "playerId": "6656b9a3-3c47-4711-8609-e35c07c64771",
   "gender": "Female",
   "team": "Home Court",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Jase Volz",
   "playerId": "66f782cc-bcee-4ebf-849a-649a37bf8a8d",
   "gender": "Male",
   "team": "ACE Moorestown",
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
   "name": "Michael Velez",
   "playerId": "772b8bd9-ee55-463b-8e7d-f5e571a2f047",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro Aces",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Tessa Arendt",
   "playerId": "78d27fdd-25fb-4fe7-8f3e-9ff1f67fb2bc",
   "gender": "Female",
   "team": "Bounce Philly",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Kevin Riordan",
   "playerId": "7c3dc06e-3448-4274-aab2-521cb3f13b75",
   "gender": "Male",
   "team": "Home Court",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Kristen Clemmer",
   "playerId": "7f2ca847-7635-4bda-9073-7625e6812f32",
   "gender": "Female",
   "team": "ACE Moorestown",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Vince Abate",
   "playerId": "8257200c-7448-4527-92df-436d7bb18cac",
   "gender": "Male",
   "team": "Jersey Devil",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Hannah Nussbaum",
   "playerId": "84b7c449-501c-438d-a3eb-ee67cc92fa0e",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro Aces",
   "isCaptain": false,
   "outsideSub": false
  },
  {
   "name": "Lauren Mammano",
   "playerId": "8d896637-2c2a-4541-9155-257bf5a37055",
   "gender": "Female",
   "team": "Pickle House",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Joel Phillips",
   "playerId": "8f292eb8-a014-4618-9c0e-114c26463233",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro Aces",
   "isCaptain": false,
   "outsideSub": false
  },
  {
   "name": "Eugene Zaslavsky",
   "playerId": "9638b474-ad68-4eff-a5a5-6c40db6ed4bb",
   "gender": "Male",
   "team": "Monroe",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Brandyn Schuchart",
   "playerId": "9d821d34-4af3-4e4a-999d-25308b75ca0f",
   "gender": "Male",
   "team": "Bounce Philly",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Gift Horn",
   "playerId": "9eba6702-22e5-4b53-b6f0-acc44ac2034d",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
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
   "name": "Vivek Kumar",
   "playerId": "a472cebf-6bf1-42d1-9a41-fc8940cbb021",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Ryan Furman",
   "playerId": "a89121dd-192b-486d-b39d-18ee8447d641",
   "gender": "Male",
   "team": "Jersey Devil",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Christine Sandella",
   "playerId": "bd30e236-1c20-4fa1-b9ad-f56c8613d22b",
   "gender": "Female",
   "team": "Home Court",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Vaughn Mcclelland",
   "playerId": "c33f3ff1-2c81-4630-8980-64fa03a7b102",
   "gender": "Male",
   "team": "ACE Moorestown",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Kathy Behrmann",
   "playerId": "c6c3c899-b824-4074-b683-ad755850747a",
   "gender": "Female",
   "team": "Home Court",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Garv Singhal",
   "playerId": "c89e87b8-33ef-49fe-81fb-59fa5b49e93a",
   "gender": "Male",
   "team": "ACE Moorestown",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Johanna Kreilick",
   "playerId": "ccd0807d-67ac-4dbc-a7c7-4b4df3dea598",
   "gender": "Female",
   "team": "Flemington",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Deepak Sunku",
   "playerId": "ce590106-6f19-43b7-8a91-4dc31d28eb31",
   "gender": "Male",
   "team": "Pickle House",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Sarah Nazario",
   "playerId": "d457bcf7-383d-4b25-a7a9-a456e5803087",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Alice Napolitano",
   "playerId": "d56483b8-a5b8-4c1f-8437-39fcf90a5030",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Tara Kramer",
   "playerId": "dae62b8e-5f8e-4721-8f41-3218518d1e30",
   "gender": "Female",
   "team": "Flemington",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Johanna Wagner",
   "playerId": "e447eb0f-dc19-4616-a7f4-b53de776db3b",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Noelle Ramirez",
   "playerId": "f30428dd-bc5a-4535-94b3-b8779e958ada",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Christine Ferraez",
   "playerId": "ffe0a04b-eb97-4dda-8bc0-0ebe0fd1089e",
   "gender": "Female",
   "team": "Flemington",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Joshua Ahn",
   "playerId": "fff3fe71-d4a6-4103-9290-0ef57035471c",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "isCaptain": false,
   "outsideSub": true
  }
 ],
 "meta": {
  "matchesPlayed": 41,
  "provisionalMatches": 2,
  "weeks": "1-7",
  "totalPlayers": 223,
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
   },
   {
    "week": 7,
    "label": "7",
    "seq": 7
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
  DATA.meta.asOf = "2026-10-08T22:42:11.321Z";
  window.DATA = DATA;
  window.CPL_DATASETS = window.CPL_DATASETS || {};
  window.CPL_DATASETS["6619816f"] = DATA;
})();
