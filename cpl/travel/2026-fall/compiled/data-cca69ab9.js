(function () {
  const DATA = {
 "players": [
  {
   "name": "Shang Li",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 95,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 31,
   "ppg": 21,
   "leagueRank": 79,
   "rating": 1.4,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -1.2,
   "playerId": "b478e004-cc16-4de5-a138-8df70602f115"
  },
  {
   "name": "Shreyas Pani",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 19,
   "losses": 2,
   "pointsWon": 432,
   "totalPointsAgainst": 309,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 19,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 90.5,
   "diff": 123,
   "ppg": 20.6,
   "leagueRank": 1,
   "rating": 3.1,
   "ratingGames": 21,
   "confidence": 80,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": -0.2,
   "playerId": "3cebd01c-ff32-4544-b6a6-2a68152b2ee5"
  },
  {
   "name": "Jason Makarevic",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 51,
   "wins": 46,
   "losses": 5,
   "pointsWon": 1049,
   "totalPointsAgainst": 828,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 46,
   "genderLosses": 5,
   "clutchWins": 16,
   "clutchLosses": 2,
   "winPct": 90.2,
   "diff": 221,
   "ppg": 20.6,
   "leagueRank": 2,
   "rating": 3,
   "ratingGames": 51,
   "confidence": 90,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.1,
   "playerId": "f8835822-da21-4593-8b99-5665d2c2f3af"
  },
  {
   "name": "Sidd Pathare",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 14,
   "losses": 2,
   "pointsWon": 332,
   "totalPointsAgainst": 262,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 14,
   "genderLosses": 2,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 87.5,
   "diff": 70,
   "ppg": 20.8,
   "leagueRank": 9,
   "rating": 2.5,
   "ratingGames": 16,
   "confidence": 77,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0,
   "playerId": "a73f249d-c1c9-4516-bc79-e9732581f098"
  },
  {
   "name": "Joseph Albanese",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 166,
   "totalPointsAgainst": 130,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 87.5,
   "diff": 36,
   "ppg": 20.8,
   "leagueRank": 87,
   "rating": 0.6,
   "ratingGames": 8,
   "confidence": 60,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -1.6,
   "playerId": "ef0d1425-3573-439e-a197-69a837d1b27d"
  },
  {
   "name": "Jeff Zamorski",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 20,
   "losses": 5,
   "pointsWon": 515,
   "totalPointsAgainst": 444,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 20,
   "genderLosses": 5,
   "clutchWins": 9,
   "clutchLosses": 5,
   "winPct": 80,
   "diff": 71,
   "ppg": 20.6,
   "leagueRank": 7,
   "rating": 0.7,
   "ratingGames": 25,
   "confidence": 83,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.6,
   "playerId": "f8687730-86a2-4769-a38b-7c0269ee88f5"
  },
  {
   "name": "Caleb Perry-Abner",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 12,
   "losses": 3,
   "pointsWon": 305,
   "totalPointsAgainst": 257,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 80,
   "diff": 48,
   "ppg": 20.3,
   "leagueRank": 38,
   "rating": 2.6,
   "ratingGames": 15,
   "confidence": 76,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.7,
   "playerId": "c25e04ae-a9bf-4943-858d-5b7a94261e43"
  },
  {
   "name": "Lou Frignito",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 53,
   "wins": 42,
   "losses": 11,
   "pointsWon": 1057,
   "totalPointsAgainst": 805,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 42,
   "genderLosses": 11,
   "clutchWins": 5,
   "clutchLosses": 6,
   "winPct": 79.2,
   "diff": 252,
   "ppg": 19.9,
   "leagueRank": 4,
   "rating": 3.2,
   "ratingGames": 53,
   "confidence": 90,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0.1,
   "playerId": "1afca308-dca6-4828-946a-0ca6ad1b0c44"
  },
  {
   "name": "Shashank Kamdar",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 28,
   "losses": 8,
   "pointsWon": 724,
   "totalPointsAgainst": 547,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 28,
   "genderLosses": 8,
   "clutchWins": 5,
   "clutchLosses": 5,
   "winPct": 77.8,
   "diff": 177,
   "ppg": 20.1,
   "leagueRank": 3,
   "rating": 3.5,
   "ratingGames": 36,
   "confidence": 87,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.1,
   "playerId": "56db4b56-6166-437f-8ece-26576b7042e5"
  },
  {
   "name": "Deepak Sunku",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 10,
   "losses": 3,
   "pointsWon": 266,
   "totalPointsAgainst": 207,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 76.9,
   "diff": 59,
   "ppg": 20.5,
   "leagueRank": 78,
   "rating": 1.6,
   "ratingGames": 13,
   "confidence": 72,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.7,
   "playerId": "ce590106-6f19-43b7-8a91-4dc31d28eb31"
  },
  {
   "name": "Justin Bautista",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 43,
   "wins": 33,
   "losses": 10,
   "pointsWon": 850,
   "totalPointsAgainst": 733,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 33,
   "genderLosses": 10,
   "clutchWins": 8,
   "clutchLosses": 3,
   "winPct": 76.7,
   "diff": 117,
   "ppg": 19.8,
   "leagueRank": 12,
   "rating": 1.9,
   "ratingGames": 43,
   "confidence": 89,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.2,
   "playerId": "27660961-6245-4b09-aafe-359ca3205797"
  },
  {
   "name": "Eugene Zaslavsky",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 35,
   "losses": 11,
   "pointsWon": 888,
   "totalPointsAgainst": 773,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 35,
   "genderLosses": 11,
   "clutchWins": 12,
   "clutchLosses": 2,
   "winPct": 76.1,
   "diff": 115,
   "ppg": 19.3,
   "leagueRank": 17,
   "rating": 1.7,
   "ratingGames": 46,
   "confidence": 89,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.2,
   "playerId": "9638b474-ad68-4eff-a5a5-6c40db6ed4bb"
  },
  {
   "name": "Dustin Rabinowitz",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 58,
   "wins": 44,
   "losses": 14,
   "pointsWon": 1169,
   "totalPointsAgainst": 946,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 44,
   "genderLosses": 14,
   "clutchWins": 9,
   "clutchLosses": 7,
   "winPct": 75.9,
   "diff": 223,
   "ppg": 20.2,
   "leagueRank": 8,
   "rating": 2.4,
   "ratingGames": 58,
   "confidence": 91,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.1,
   "playerId": "d23839c0-334b-4423-9305-0c6281523d5d"
  },
  {
   "name": "Joshua Octaviano",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 22,
   "losses": 7,
   "pointsWon": 584,
   "totalPointsAgainst": 485,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 22,
   "genderLosses": 7,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 75.9,
   "diff": 99,
   "ppg": 20.1,
   "leagueRank": 6,
   "rating": 2.4,
   "ratingGames": 29,
   "confidence": 85,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.1,
   "playerId": "37c7c06b-1600-450e-9f14-61d397872bc6"
  },
  {
   "name": "Thomas Connolly",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 61,
   "wins": 46,
   "losses": 15,
   "pointsWon": 1206,
   "totalPointsAgainst": 1027,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 46,
   "genderLosses": 15,
   "clutchWins": 11,
   "clutchLosses": 6,
   "winPct": 75.4,
   "diff": 179,
   "ppg": 19.8,
   "leagueRank": 16,
   "rating": 1.8,
   "ratingGames": 61,
   "confidence": 92,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0,
   "playerId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3"
  },
  {
   "name": "Austin Williams",
   "gender": "Male",
   "team": "Flemington",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 40,
   "wins": 30,
   "losses": 10,
   "pointsWon": 808,
   "totalPointsAgainst": 679,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 30,
   "genderLosses": 10,
   "clutchWins": 11,
   "clutchLosses": 7,
   "winPct": 75,
   "diff": 129,
   "ppg": 20.2,
   "leagueRank": 18,
   "rating": 3.2,
   "ratingGames": 40,
   "confidence": 88,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.4,
   "playerId": "bb0bdc33-be20-4a45-9de9-0a52a88d7af9"
  },
  {
   "name": "Anthony Leung",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 6,
   "losses": 2,
   "pointsWon": 159,
   "totalPointsAgainst": 143,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 75,
   "diff": 16,
   "ppg": 19.9,
   "leagueRank": 113,
   "rating": 1.8,
   "ratingGames": 8,
   "confidence": 62,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 1,
   "playerId": "48457f37-29a2-47e7-8b2e-62316ad44feb"
  },
  {
   "name": "Zach Bowe",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 28,
   "losses": 10,
   "pointsWon": 770,
   "totalPointsAgainst": 649,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 28,
   "genderLosses": 10,
   "clutchWins": 10,
   "clutchLosses": 7,
   "winPct": 73.7,
   "diff": 121,
   "ppg": 20.3,
   "leagueRank": 5,
   "rating": 3.2,
   "ratingGames": 38,
   "confidence": 88,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.5,
   "playerId": "eebadc3a-5763-4612-9232-d3a98ea188d6"
  },
  {
   "name": "Neel Goyal",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 52,
   "wins": 38,
   "losses": 14,
   "pointsWon": 1047,
   "totalPointsAgainst": 857,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 38,
   "genderLosses": 14,
   "clutchWins": 9,
   "clutchLosses": 6,
   "winPct": 73.1,
   "diff": 190,
   "ppg": 20.1,
   "leagueRank": 14,
   "rating": 2.3,
   "ratingGames": 52,
   "confidence": 91,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0,
   "playerId": "8cfc8650-92ac-4ed4-9b57-2692526abd19"
  },
  {
   "name": "Samuel Levinson",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 16,
   "losses": 6,
   "pointsWon": 431,
   "totalPointsAgainst": 368,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 16,
   "genderLosses": 6,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 72.7,
   "diff": 63,
   "ppg": 19.6,
   "leagueRank": 21,
   "rating": 1.8,
   "ratingGames": 22,
   "confidence": 81,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.1,
   "playerId": "e3d7c7c2-6222-4f4d-b6b3-37931f24274b"
  },
  {
   "name": "Ryan Rosen",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 21,
   "losses": 8,
   "pointsWon": 579,
   "totalPointsAgainst": 504,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 21,
   "genderLosses": 8,
   "clutchWins": 8,
   "clutchLosses": 4,
   "winPct": 72.4,
   "diff": 75,
   "ppg": 20,
   "leagueRank": 20,
   "rating": 1.3,
   "ratingGames": 29,
   "confidence": 85,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.1,
   "playerId": "97f2b250-2030-4296-be61-63cffb17043b"
  },
  {
   "name": "Vaughn Lawrence",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 47,
   "wins": 34,
   "losses": 13,
   "pointsWon": 933,
   "totalPointsAgainst": 771,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 34,
   "genderLosses": 13,
   "clutchWins": 8,
   "clutchLosses": 6,
   "winPct": 72.3,
   "diff": 162,
   "ppg": 19.9,
   "leagueRank": 19,
   "rating": 1.4,
   "ratingGames": 47,
   "confidence": 89,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.3,
   "playerId": "d4c1185c-6147-4164-90e1-06ecfa162596"
  },
  {
   "name": "Tom Laiso",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 54,
   "wins": 39,
   "losses": 15,
   "pointsWon": 1081,
   "totalPointsAgainst": 933,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 39,
   "genderLosses": 15,
   "clutchWins": 14,
   "clutchLosses": 7,
   "winPct": 72.2,
   "diff": 148,
   "ppg": 20,
   "leagueRank": 15,
   "rating": 2.5,
   "ratingGames": 54,
   "confidence": 91,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.3,
   "playerId": "13918154-3673-4dae-946a-2c2d4ac8863f"
  },
  {
   "name": "Brandyn Schuchart",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 56,
   "wins": 40,
   "losses": 16,
   "pointsWon": 1121,
   "totalPointsAgainst": 963,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 40,
   "genderLosses": 16,
   "clutchWins": 13,
   "clutchLosses": 9,
   "winPct": 71.4,
   "diff": 158,
   "ppg": 20,
   "leagueRank": 13,
   "rating": 3.8,
   "ratingGames": 56,
   "confidence": 91,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.8,
   "playerId": "9d821d34-4af3-4e4a-999d-25308b75ca0f"
  },
  {
   "name": "Eric Nguyen",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 15,
   "losses": 6,
   "pointsWon": 415,
   "totalPointsAgainst": 377,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 15,
   "genderLosses": 6,
   "clutchWins": 7,
   "clutchLosses": 2,
   "winPct": 71.4,
   "diff": 38,
   "ppg": 19.8,
   "leagueRank": 54,
   "rating": 0.2,
   "ratingGames": 21,
   "confidence": 81,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.4,
   "playerId": "87d526c6-72b6-4b17-bf77-9016fd049541"
  },
  {
   "name": "Geoff Watson",
   "gender": "Male",
   "team": "Flemington",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 135,
   "totalPointsAgainst": 98,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 71.4,
   "diff": 37,
   "ppg": 19.3,
   "leagueRank": 129,
   "rating": 3.1,
   "ratingGames": 7,
   "confidence": 59,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0,
   "playerId": "41191982-ca10-4665-8eb2-6d5231b4a0c4"
  },
  {
   "name": "Darren Johnson",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 140,
   "totalPointsAgainst": 129,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 71.4,
   "diff": 11,
   "ppg": 20,
   "leagueRank": 151,
   "rating": 1.3,
   "ratingGames": 7,
   "confidence": 61,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 1,
   "playerId": "00092e4b-b019-43ae-bfef-503e1fc6f657"
  },
  {
   "name": "Chris Damato",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 63,
   "wins": 44,
   "losses": 19,
   "pointsWon": 1217,
   "totalPointsAgainst": 1070,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 44,
   "genderLosses": 19,
   "clutchWins": 13,
   "clutchLosses": 7,
   "winPct": 69.8,
   "diff": 147,
   "ppg": 19.3,
   "leagueRank": 27,
   "rating": 1.7,
   "ratingGames": 63,
   "confidence": 92,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.2,
   "playerId": "445e89c8-a23c-440c-bd3c-7eab366bdd85"
  },
  {
   "name": "Ali Husain",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 53,
   "wins": 37,
   "losses": 16,
   "pointsWon": 1040,
   "totalPointsAgainst": 930,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 37,
   "genderLosses": 16,
   "clutchWins": 8,
   "clutchLosses": 7,
   "winPct": 69.8,
   "diff": 110,
   "ppg": 19.6,
   "leagueRank": 31,
   "rating": 1.4,
   "ratingGames": 53,
   "confidence": 91,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.1,
   "playerId": "09d614ca-a9b2-44b6-a402-51046c6883af"
  },
  {
   "name": "Tyler Arsenault",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 59,
   "wins": 41,
   "losses": 18,
   "pointsWon": 1183,
   "totalPointsAgainst": 992,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 41,
   "genderLosses": 18,
   "clutchWins": 7,
   "clutchLosses": 9,
   "winPct": 69.5,
   "diff": 191,
   "ppg": 20.1,
   "leagueRank": 11,
   "rating": 4.1,
   "ratingGames": 59,
   "confidence": 91,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.8,
   "playerId": "e76d2d63-f7dc-40e7-aca2-d9b3aecf4d3e"
  },
  {
   "name": "Zach Hollmann",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 68,
   "wins": 47,
   "losses": 21,
   "pointsWon": 1319,
   "totalPointsAgainst": 1126,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 47,
   "genderLosses": 21,
   "clutchWins": 8,
   "clutchLosses": 6,
   "winPct": 69.1,
   "diff": 193,
   "ppg": 19.4,
   "leagueRank": 22,
   "rating": 3.2,
   "ratingGames": 68,
   "confidence": 93,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.5,
   "playerId": "8aef2d8a-0bd4-45df-b5d1-1a120a81ef0f"
  },
  {
   "name": "Boris Tserlin",
   "gender": "Male",
   "team": "Premiere",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 55,
   "wins": 38,
   "losses": 17,
   "pointsWon": 1083,
   "totalPointsAgainst": 982,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 38,
   "genderLosses": 17,
   "clutchWins": 16,
   "clutchLosses": 7,
   "winPct": 69.1,
   "diff": 101,
   "ppg": 19.7,
   "leagueRank": 24,
   "rating": 2.6,
   "ratingGames": 55,
   "confidence": 91,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.7,
   "playerId": "6c71dd2d-6f76-4630-96d4-27f58e99e557"
  },
  {
   "name": "Zachary Lisojo",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 13,
   "losses": 6,
   "pointsWon": 384,
   "totalPointsAgainst": 334,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 13,
   "genderLosses": 6,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 68.4,
   "diff": 50,
   "ppg": 20.2,
   "leagueRank": 71,
   "rating": 1.9,
   "ratingGames": 19,
   "confidence": 80,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.1,
   "playerId": "e2086778-379f-4d43-8ce7-6447129d8812"
  },
  {
   "name": "Craig Frame",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 23,
   "losses": 11,
   "pointsWon": 645,
   "totalPointsAgainst": 621,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 23,
   "genderLosses": 11,
   "clutchWins": 8,
   "clutchLosses": 3,
   "winPct": 67.6,
   "diff": 24,
   "ppg": 19,
   "leagueRank": 55,
   "rating": -1.6,
   "ratingGames": 34,
   "confidence": 87,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.8,
   "playerId": "6043b3e3-217d-4ad3-bd5d-db9667b99bbc"
  },
  {
   "name": "Austin Gow",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 52,
   "wins": 35,
   "losses": 17,
   "pointsWon": 1025,
   "totalPointsAgainst": 877,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 35,
   "genderLosses": 17,
   "clutchWins": 9,
   "clutchLosses": 9,
   "winPct": 67.3,
   "diff": 148,
   "ppg": 19.7,
   "leagueRank": 30,
   "rating": 1.6,
   "ratingGames": 52,
   "confidence": 91,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0,
   "playerId": "0e577096-0b13-441d-b087-cc49cb55cfe2"
  },
  {
   "name": "Anthony Bonaventura",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 70,
   "wins": 47,
   "losses": 23,
   "pointsWon": 1401,
   "totalPointsAgainst": 1239,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 47,
   "genderLosses": 23,
   "clutchWins": 17,
   "clutchLosses": 14,
   "winPct": 67.1,
   "diff": 162,
   "ppg": 20,
   "leagueRank": 28,
   "rating": 0.6,
   "ratingGames": 70,
   "confidence": 92,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.3,
   "playerId": "58836d9c-6a12-4ed7-853f-dcee1e00dadd"
  },
  {
   "name": "Michael Li",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 45,
   "wins": 30,
   "losses": 15,
   "pointsWon": 890,
   "totalPointsAgainst": 752,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 30,
   "genderLosses": 15,
   "clutchWins": 4,
   "clutchLosses": 8,
   "winPct": 66.7,
   "diff": 138,
   "ppg": 19.8,
   "leagueRank": 23,
   "rating": 3.1,
   "ratingGames": 45,
   "confidence": 90,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.5,
   "playerId": "dc81629b-4ff7-45c4-b38e-b3b836bc0769"
  },
  {
   "name": "Rob Pandolfi",
   "gender": "Male",
   "team": "Premiere",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 45,
   "wins": 30,
   "losses": 15,
   "pointsWon": 870,
   "totalPointsAgainst": 806,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 30,
   "genderLosses": 15,
   "clutchWins": 13,
   "clutchLosses": 5,
   "winPct": 66.7,
   "diff": 64,
   "ppg": 19.3,
   "leagueRank": 39,
   "rating": 0.2,
   "ratingGames": 45,
   "confidence": 89,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.1,
   "playerId": "081fc233-7f01-432d-85f9-c623b0524f49"
  },
  {
   "name": "Fabricio Gaona",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 8,
   "losses": 4,
   "pointsWon": 230,
   "totalPointsAgainst": 206,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 24,
   "ppg": 19.2,
   "leagueRank": 107,
   "rating": 1.7,
   "ratingGames": 12,
   "confidence": 72,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0.9,
   "playerId": "ee88d140-1a78-4776-85e0-3f982891576d"
  },
  {
   "name": "Thomas Fenton",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 17,
   "losses": 9,
   "pointsWon": 498,
   "totalPointsAgainst": 452,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 17,
   "genderLosses": 9,
   "clutchWins": 5,
   "clutchLosses": 1,
   "winPct": 65.4,
   "diff": 46,
   "ppg": 19.2,
   "leagueRank": 25,
   "rating": 3.2,
   "ratingGames": 26,
   "confidence": 84,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 1,
   "playerId": "c55df548-ee89-4493-9268-850675b96066"
  },
  {
   "name": "Chris Frangipane",
   "gender": "Male",
   "team": "Premiere",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 30,
   "losses": 16,
   "pointsWon": 906,
   "totalPointsAgainst": 821,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 30,
   "genderLosses": 16,
   "clutchWins": 11,
   "clutchLosses": 9,
   "winPct": 65.2,
   "diff": 85,
   "ppg": 19.7,
   "leagueRank": 36,
   "rating": 1.5,
   "ratingGames": 46,
   "confidence": 90,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.3,
   "playerId": "e8bb81fd-869a-459d-8108-b9ac6bc1b84d"
  },
  {
   "name": "Ryan Furman",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 43,
   "wins": 28,
   "losses": 15,
   "pointsWon": 837,
   "totalPointsAgainst": 756,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 28,
   "genderLosses": 15,
   "clutchWins": 9,
   "clutchLosses": 7,
   "winPct": 65.1,
   "diff": 81,
   "ppg": 19.5,
   "leagueRank": 33,
   "rating": 1.8,
   "ratingGames": 43,
   "confidence": 89,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.4,
   "playerId": "a89121dd-192b-486d-b39d-18ee8447d641"
  },
  {
   "name": "Eric Jiang",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 24,
   "losses": 13,
   "pointsWon": 729,
   "totalPointsAgainst": 647,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 24,
   "genderLosses": 13,
   "clutchWins": 5,
   "clutchLosses": 6,
   "winPct": 64.9,
   "diff": 82,
   "ppg": 19.7,
   "leagueRank": 26,
   "rating": 2.4,
   "ratingGames": 37,
   "confidence": 88,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.5,
   "playerId": "5a604f85-b8f8-4084-8636-d403530fd480"
  },
  {
   "name": "Yoon Choi",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 54,
   "wins": 35,
   "losses": 19,
   "pointsWon": 1053,
   "totalPointsAgainst": 939,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 35,
   "genderLosses": 19,
   "clutchWins": 10,
   "clutchLosses": 10,
   "winPct": 64.8,
   "diff": 114,
   "ppg": 19.5,
   "leagueRank": 35,
   "rating": 1.8,
   "ratingGames": 54,
   "confidence": 91,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.4,
   "playerId": "f3f6a49d-fd44-4f24-bb92-b3d04b50a3d9"
  },
  {
   "name": "Zach Mcgowan",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 54,
   "wins": 35,
   "losses": 19,
   "pointsWon": 1043,
   "totalPointsAgainst": 960,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 35,
   "genderLosses": 19,
   "clutchWins": 15,
   "clutchLosses": 7,
   "winPct": 64.8,
   "diff": 83,
   "ppg": 19.3,
   "leagueRank": 29,
   "rating": 3.9,
   "ratingGames": 54,
   "confidence": 90,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 1.3,
   "playerId": "e71a8785-5959-4607-9af3-e3ac9e3c6d86"
  },
  {
   "name": "Mickey Cook",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 56,
   "wins": 36,
   "losses": 20,
   "pointsWon": 1077,
   "totalPointsAgainst": 991,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 36,
   "genderLosses": 20,
   "clutchWins": 9,
   "clutchLosses": 7,
   "winPct": 64.3,
   "diff": 86,
   "ppg": 19.2,
   "leagueRank": 45,
   "rating": 0.9,
   "ratingGames": 56,
   "confidence": 91,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.1,
   "playerId": "3babc519-f395-4ef7-8f6f-b38d25c139d0"
  },
  {
   "name": "Omar Husain",
   "gender": "Male",
   "team": "Flemington",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 9,
   "losses": 5,
   "pointsWon": 261,
   "totalPointsAgainst": 236,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 64.3,
   "diff": 25,
   "ppg": 18.6,
   "leagueRank": 118,
   "rating": 1.2,
   "ratingGames": 14,
   "confidence": 74,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -0.6,
   "playerId": "bb95a47a-aa38-4194-9ccc-68107deed1e5"
  },
  {
   "name": "Josh Knupp",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 53,
   "wins": 34,
   "losses": 19,
   "pointsWon": 1037,
   "totalPointsAgainst": 969,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 34,
   "genderLosses": 19,
   "clutchWins": 13,
   "clutchLosses": 7,
   "winPct": 64.2,
   "diff": 68,
   "ppg": 19.6,
   "leagueRank": 42,
   "rating": 0.9,
   "ratingGames": 53,
   "confidence": 91,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0,
   "playerId": "292c729f-c522-4f41-8208-e1caf7f94498"
  },
  {
   "name": "Shawn Ganow",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 25,
   "losses": 14,
   "pointsWon": 765,
   "totalPointsAgainst": 696,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 25,
   "genderLosses": 14,
   "clutchWins": 8,
   "clutchLosses": 8,
   "winPct": 64.1,
   "diff": 69,
   "ppg": 19.6,
   "leagueRank": 40,
   "rating": 0.9,
   "ratingGames": 39,
   "confidence": 88,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.2,
   "playerId": "1e340ccb-0e0f-4b6b-b760-d1a723561d04"
  },
  {
   "name": "Ken Velarde",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 52,
   "wins": 33,
   "losses": 19,
   "pointsWon": 1026,
   "totalPointsAgainst": 952,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 33,
   "genderLosses": 19,
   "clutchWins": 15,
   "clutchLosses": 10,
   "winPct": 63.5,
   "diff": 74,
   "ppg": 19.7,
   "leagueRank": 43,
   "rating": 0.6,
   "ratingGames": 52,
   "confidence": 91,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0,
   "playerId": "25aa47d0-76b8-48be-a5be-b1d33b423e82"
  },
  {
   "name": "Nicholas Como",
   "gender": "Male",
   "team": "Premiere",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 24,
   "losses": 14,
   "pointsWon": 752,
   "totalPointsAgainst": 661,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 24,
   "genderLosses": 14,
   "clutchWins": 4,
   "clutchLosses": 7,
   "winPct": 63.2,
   "diff": 91,
   "ppg": 19.8,
   "leagueRank": 34,
   "rating": 2,
   "ratingGames": 38,
   "confidence": 88,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.4,
   "playerId": "a286a593-65d0-4119-a211-3cd57bba652a"
  },
  {
   "name": "Adam Weinstock",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 29,
   "losses": 17,
   "pointsWon": 876,
   "totalPointsAgainst": 804,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 29,
   "genderLosses": 17,
   "clutchWins": 8,
   "clutchLosses": 8,
   "winPct": 63,
   "diff": 72,
   "ppg": 19,
   "leagueRank": 47,
   "rating": 0.7,
   "ratingGames": 46,
   "confidence": 90,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0,
   "playerId": "8ced9183-490f-465f-8683-62071a6d706d"
  },
  {
   "name": "Nathaniel Flores",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 153,
   "totalPointsAgainst": 131,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 62.5,
   "diff": 22,
   "ppg": 19.1,
   "leagueRank": 144,
   "rating": 1,
   "ratingGames": 8,
   "confidence": 60,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.4,
   "playerId": "31194d9a-69bf-4949-92b6-d5376144b8c5"
  },
  {
   "name": "John Gargana",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 158,
   "totalPointsAgainst": 137,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 62.5,
   "diff": 21,
   "ppg": 19.8,
   "leagueRank": 142,
   "rating": 0.9,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.4,
   "playerId": "e7ead4ec-3ab0-469f-9122-0a822f068415"
  },
  {
   "name": "Clayton Schmucker",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 162,
   "totalPointsAgainst": 144,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 62.5,
   "diff": 18,
   "ppg": 20.3,
   "leagueRank": 133,
   "rating": 1.7,
   "ratingGames": 8,
   "confidence": 62,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.5,
   "playerId": "0be72348-4a00-413e-bf40-df6824c3cca3"
  },
  {
   "name": "Aadhar Rohila",
   "gender": "Male",
   "team": "Flemington",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 160,
   "totalPointsAgainst": 145,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 62.5,
   "diff": 15,
   "ppg": 20,
   "leagueRank": 134,
   "rating": 1.9,
   "ratingGames": 8,
   "confidence": 64,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.6,
   "playerId": "05dac392-82dc-4f06-bfea-39887b921722"
  },
  {
   "name": "Harvey Mitchell",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 152,
   "totalPointsAgainst": 140,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 62.5,
   "diff": 12,
   "ppg": 19,
   "leagueRank": 160,
   "rating": -1.1,
   "ratingGames": 8,
   "confidence": 61,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -1.1,
   "playerId": "c5fa38d0-add2-462c-b3de-5b62dd4d1386"
  },
  {
   "name": "Raaj Singh",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 146,
   "totalPointsAgainst": 154,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 62.5,
   "diff": -8,
   "ppg": 18.3,
   "leagueRank": 155,
   "rating": 1.5,
   "ratingGames": 8,
   "confidence": 62,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 1.2,
   "playerId": "accc50ff-13a1-4349-9c6f-b725f2486931"
  },
  {
   "name": "Matthew Marletta",
   "gender": "Male",
   "team": "Flemington",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 143,
   "totalPointsAgainst": 154,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 62.5,
   "diff": -11,
   "ppg": 17.9,
   "leagueRank": 173,
   "rating": -0.2,
   "ratingGames": 8,
   "confidence": 59,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.4,
   "playerId": "c3c6b787-5356-467d-8268-08e5f3cbc450"
  },
  {
   "name": "Anushk Gupta",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 16,
   "losses": 10,
   "pointsWon": 516,
   "totalPointsAgainst": 470,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 16,
   "genderLosses": 10,
   "clutchWins": 7,
   "clutchLosses": 7,
   "winPct": 61.5,
   "diff": 46,
   "ppg": 19.8,
   "leagueRank": 49,
   "rating": -0.3,
   "ratingGames": 26,
   "confidence": 84,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.5,
   "playerId": "1a851b17-0445-4807-b476-575fd261f774"
  },
  {
   "name": "Jordan Long",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 8,
   "losses": 5,
   "pointsWon": 253,
   "totalPointsAgainst": 217,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 61.5,
   "diff": 36,
   "ppg": 19.5,
   "leagueRank": 98,
   "rating": 0.4,
   "ratingGames": 13,
   "confidence": 69,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.6,
   "playerId": "0fbbdbbb-a550-49ae-b04a-111bfe4891f5"
  },
  {
   "name": "Ian Chin",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 57,
   "wins": 35,
   "losses": 22,
   "pointsWon": 1113,
   "totalPointsAgainst": 1013,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 35,
   "genderLosses": 22,
   "clutchWins": 10,
   "clutchLosses": 12,
   "winPct": 61.4,
   "diff": 100,
   "ppg": 19.5,
   "leagueRank": 52,
   "rating": 0.3,
   "ratingGames": 57,
   "confidence": 91,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.2,
   "playerId": "34d3737f-b8db-4d4c-bf25-6e8bb3524157"
  },
  {
   "name": "Harrison Mui",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 44,
   "wins": 27,
   "losses": 17,
   "pointsWon": 854,
   "totalPointsAgainst": 778,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 27,
   "genderLosses": 17,
   "clutchWins": 6,
   "clutchLosses": 4,
   "winPct": 61.4,
   "diff": 76,
   "ppg": 19.4,
   "leagueRank": 44,
   "rating": 1.3,
   "ratingGames": 44,
   "confidence": 89,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.3,
   "playerId": "fa1d3cb9-cd76-4f49-8024-c6224aa5b7c1"
  },
  {
   "name": "Robbie Oddy",
   "gender": "Male",
   "team": "Flemington",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 62,
   "wins": 38,
   "losses": 24,
   "pointsWon": 1209,
   "totalPointsAgainst": 1088,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 38,
   "genderLosses": 24,
   "clutchWins": 11,
   "clutchLosses": 12,
   "winPct": 61.3,
   "diff": 121,
   "ppg": 19.5,
   "leagueRank": 32,
   "rating": 3.4,
   "ratingGames": 62,
   "confidence": 92,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.4,
   "playerId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6"
  },
  {
   "name": "Stanley Bonczek",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 28,
   "losses": 18,
   "pointsWon": 912,
   "totalPointsAgainst": 833,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 28,
   "genderLosses": 18,
   "clutchWins": 9,
   "clutchLosses": 12,
   "winPct": 60.9,
   "diff": 79,
   "ppg": 19.8,
   "leagueRank": 37,
   "rating": 2,
   "ratingGames": 46,
   "confidence": 90,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.6,
   "playerId": "f4cd45db-8d83-423a-8936-c7d7a3b0ffad"
  },
  {
   "name": "Matt Schall",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 46,
   "wins": 28,
   "losses": 18,
   "pointsWon": 882,
   "totalPointsAgainst": 837,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 28,
   "genderLosses": 18,
   "clutchWins": 12,
   "clutchLosses": 3,
   "winPct": 60.9,
   "diff": 45,
   "ppg": 19.2,
   "leagueRank": 41,
   "rating": 1.9,
   "ratingGames": 46,
   "confidence": 89,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.7,
   "playerId": "aa0d9944-a9d3-46d5-8650-54e894adfeb2"
  },
  {
   "name": "Adriene Khon",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 58,
   "wins": 35,
   "losses": 23,
   "pointsWon": 1132,
   "totalPointsAgainst": 1051,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 35,
   "genderLosses": 23,
   "clutchWins": 16,
   "clutchLosses": 9,
   "winPct": 60.3,
   "diff": 81,
   "ppg": 19.5,
   "leagueRank": 46,
   "rating": 1,
   "ratingGames": 58,
   "confidence": 91,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.1,
   "playerId": "02ac193a-6e5d-4859-80bf-c8c25a89c1c8"
  },
  {
   "name": "Vincent Tran",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 90,
   "totalPointsAgainst": 94,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 60,
   "diff": -4,
   "ppg": 18,
   "leagueRank": 186,
   "rating": 0.3,
   "ratingGames": 5,
   "confidence": 54,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 1.3,
   "playerId": "03a4e22a-6242-459c-8120-58d0650413a9"
  },
  {
   "name": "Camrin Cronheim",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 62,
   "wins": 37,
   "losses": 25,
   "pointsWon": 1209,
   "totalPointsAgainst": 1099,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 37,
   "genderLosses": 25,
   "clutchWins": 10,
   "clutchLosses": 12,
   "winPct": 59.7,
   "diff": 110,
   "ppg": 19.5,
   "leagueRank": 53,
   "rating": 0.7,
   "ratingGames": 62,
   "confidence": 92,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.1,
   "playerId": "8143def5-d564-4010-8258-ccb71cd481f1"
  },
  {
   "name": "Dipen Bhatt",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 49,
   "wins": 29,
   "losses": 20,
   "pointsWon": 910,
   "totalPointsAgainst": 878,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 29,
   "genderLosses": 20,
   "clutchWins": 11,
   "clutchLosses": 4,
   "winPct": 59.2,
   "diff": 32,
   "ppg": 18.6,
   "leagueRank": 68,
   "rating": -0.9,
   "ratingGames": 49,
   "confidence": 90,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.6,
   "playerId": "fe8af1d3-ff62-430d-90af-32794cc7b912"
  },
  {
   "name": "Chenfei Gao",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 44,
   "wins": 26,
   "losses": 18,
   "pointsWon": 823,
   "totalPointsAgainst": 805,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 26,
   "genderLosses": 18,
   "clutchWins": 8,
   "clutchLosses": 2,
   "winPct": 59.1,
   "diff": 18,
   "ppg": 18.7,
   "leagueRank": 64,
   "rating": -0.8,
   "ratingGames": 44,
   "confidence": 89,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.2,
   "playerId": "3807d345-e2d6-4e75-9a59-9248ebf6e296"
  },
  {
   "name": "Christopher Natividad",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 20,
   "losses": 14,
   "pointsWon": 656,
   "totalPointsAgainst": 585,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 20,
   "genderLosses": 14,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 58.8,
   "diff": 71,
   "ppg": 19.3,
   "leagueRank": 48,
   "rating": 1.2,
   "ratingGames": 34,
   "confidence": 87,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.1,
   "playerId": "d0db1fca-1182-4e0e-8d5c-980be84ac87f"
  },
  {
   "name": "Gautham Bondugula",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 17,
   "losses": 12,
   "pointsWon": 571,
   "totalPointsAgainst": 538,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 17,
   "genderLosses": 12,
   "clutchWins": 6,
   "clutchLosses": 5,
   "winPct": 58.6,
   "diff": 33,
   "ppg": 19.7,
   "leagueRank": 51,
   "rating": 1.6,
   "ratingGames": 29,
   "confidence": 85,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.8,
   "playerId": "3da7de8e-f75c-4e90-b63e-f340cc8788a0"
  },
  {
   "name": "Nicholas Lagrua",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 53,
   "wins": 31,
   "losses": 22,
   "pointsWon": 1031,
   "totalPointsAgainst": 939,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 31,
   "genderLosses": 22,
   "clutchWins": 7,
   "clutchLosses": 8,
   "winPct": 58.5,
   "diff": 92,
   "ppg": 19.5,
   "leagueRank": 50,
   "rating": 1.2,
   "ratingGames": 53,
   "confidence": 91,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.2,
   "playerId": "6f1df3a0-bfc7-4d3b-a5f5-0ee9f40da488"
  },
  {
   "name": "Justin Chin",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 20,
   "losses": 15,
   "pointsWon": 675,
   "totalPointsAgainst": 647,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 20,
   "genderLosses": 15,
   "clutchWins": 8,
   "clutchLosses": 4,
   "winPct": 57.1,
   "diff": 28,
   "ppg": 19.3,
   "leagueRank": 59,
   "rating": 0.1,
   "ratingGames": 35,
   "confidence": 87,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.3,
   "playerId": "9fa77cf9-39da-4bfe-8ada-d01143ca498c"
  },
  {
   "name": "Andrew Nguyen",
   "gender": "Male",
   "team": "Flemington",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 126,
   "totalPointsAgainst": 120,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 57.1,
   "diff": 6,
   "ppg": 18,
   "leagueRank": 180,
   "rating": 1.5,
   "ratingGames": 7,
   "confidence": 59,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 0,
   "playerId": "97048a47-d6b3-4c25-84c4-2b8d85e78b7d"
  },
  {
   "name": "Johny Mario",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 122,
   "totalPointsAgainst": 125,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 57.1,
   "diff": -3,
   "ppg": 17.4,
   "leagueRank": 190,
   "rating": 0.1,
   "ratingGames": 7,
   "confidence": 60,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 1,
   "playerId": "831c9fae-38c6-4961-8664-634087f5f2f9"
  },
  {
   "name": "Jon Bliven",
   "gender": "Male",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 128,
   "totalPointsAgainst": 139,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 4,
   "clutchLosses": 0,
   "winPct": 57.1,
   "diff": -11,
   "ppg": 18.3,
   "leagueRank": 179,
   "rating": -0.1,
   "ratingGames": 7,
   "confidence": 59,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.2,
   "playerId": "0d56afc7-1c10-4166-afa2-1352c4ef5725"
  },
  {
   "name": "Elliott Albanese",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 58,
   "wins": 33,
   "losses": 25,
   "pointsWon": 1117,
   "totalPointsAgainst": 1073,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 33,
   "genderLosses": 25,
   "clutchWins": 9,
   "clutchLosses": 10,
   "winPct": 56.9,
   "diff": 44,
   "ppg": 19.3,
   "leagueRank": 67,
   "rating": -0.6,
   "ratingGames": 58,
   "confidence": 92,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -0.1,
   "playerId": "6af88387-5e2b-4ea7-b732-22885e4931a8"
  },
  {
   "name": "Gary White",
   "gender": "Male",
   "team": "Premiere",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 62,
   "wins": 35,
   "losses": 27,
   "pointsWon": 1172,
   "totalPointsAgainst": 1133,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 35,
   "genderLosses": 27,
   "clutchWins": 14,
   "clutchLosses": 12,
   "winPct": 56.5,
   "diff": 39,
   "ppg": 18.9,
   "leagueRank": 65,
   "rating": -0.2,
   "ratingGames": 62,
   "confidence": 91,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0,
   "playerId": "9a26eab9-96be-45e1-b380-2845a0e8e668"
  },
  {
   "name": "Gopi Narayanan",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 18,
   "losses": 14,
   "pointsWon": 613,
   "totalPointsAgainst": 571,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 18,
   "genderLosses": 14,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 56.3,
   "diff": 42,
   "ppg": 19.2,
   "leagueRank": 56,
   "rating": 0.4,
   "ratingGames": 32,
   "confidence": 86,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0,
   "playerId": "5d55a4c4-8271-4e7b-b018-3da88a97c5fe"
  },
  {
   "name": "Neil Ottrando",
   "gender": "Male",
   "team": "Premiere",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 61,
   "wins": 34,
   "losses": 27,
   "pointsWon": 1162,
   "totalPointsAgainst": 1094,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 34,
   "genderLosses": 27,
   "clutchWins": 11,
   "clutchLosses": 11,
   "winPct": 55.7,
   "diff": 68,
   "ppg": 19,
   "leagueRank": 60,
   "rating": 0.6,
   "ratingGames": 61,
   "confidence": 91,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0,
   "playerId": "4de9fd52-8910-4c2f-9aad-e2e55a0e33a1"
  },
  {
   "name": "Ron Branca",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 15,
   "losses": 12,
   "pointsWon": 504,
   "totalPointsAgainst": 475,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 15,
   "genderLosses": 12,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 55.6,
   "diff": 29,
   "ppg": 18.7,
   "leagueRank": 58,
   "rating": 0.6,
   "ratingGames": 27,
   "confidence": 84,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.1,
   "playerId": "2caf34a7-c53c-410c-a7b4-47dd61398830"
  },
  {
   "name": "Josiah Kim",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 21,
   "losses": 17,
   "pointsWon": 740,
   "totalPointsAgainst": 685,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 21,
   "genderLosses": 17,
   "clutchWins": 4,
   "clutchLosses": 11,
   "winPct": 55.3,
   "diff": 55,
   "ppg": 19.5,
   "leagueRank": 57,
   "rating": -0.2,
   "ratingGames": 38,
   "confidence": 88,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.5,
   "playerId": "de8e2a33-d691-4652-84ef-532b89f467bc"
  },
  {
   "name": "Matthew Friedman",
   "gender": "Male",
   "team": "Premiere",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 53,
   "wins": 29,
   "losses": 24,
   "pointsWon": 1009,
   "totalPointsAgainst": 951,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 29,
   "genderLosses": 24,
   "clutchWins": 10,
   "clutchLosses": 9,
   "winPct": 54.7,
   "diff": 58,
   "ppg": 19,
   "leagueRank": 61,
   "rating": 0.8,
   "ratingGames": 53,
   "confidence": 91,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.2,
   "playerId": "259fc7aa-7e69-4830-87d8-b9a758ec7fda"
  },
  {
   "name": "Vaughn Mcclelland",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 44,
   "wins": 24,
   "losses": 20,
   "pointsWon": 836,
   "totalPointsAgainst": 822,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 24,
   "genderLosses": 20,
   "clutchWins": 9,
   "clutchLosses": 8,
   "winPct": 54.5,
   "diff": 14,
   "ppg": 19,
   "leagueRank": 62,
   "rating": 1.1,
   "ratingGames": 44,
   "confidence": 89,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.3,
   "playerId": "c33f3ff1-2c81-4630-8980-64fa03a7b102"
  },
  {
   "name": "Jake Laifer",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 25,
   "losses": 21,
   "pointsWon": 874,
   "totalPointsAgainst": 841,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 25,
   "genderLosses": 21,
   "clutchWins": 9,
   "clutchLosses": 10,
   "winPct": 54.3,
   "diff": 33,
   "ppg": 19,
   "leagueRank": 72,
   "rating": -0.2,
   "ratingGames": 46,
   "confidence": 90,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.1,
   "playerId": "d99428a2-b91c-460f-b2d4-cf3ce96f0643"
  },
  {
   "name": "Kevin Sun",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 52,
   "wins": 28,
   "losses": 24,
   "pointsWon": 982,
   "totalPointsAgainst": 925,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 28,
   "genderLosses": 24,
   "clutchWins": 5,
   "clutchLosses": 10,
   "winPct": 53.8,
   "diff": 57,
   "ppg": 18.9,
   "leagueRank": 66,
   "rating": 0.6,
   "ratingGames": 52,
   "confidence": 91,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.1,
   "playerId": "88c57c1f-436b-4280-9bd7-75eafe496b70"
  },
  {
   "name": "Marr Flores",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 14,
   "losses": 12,
   "pointsWon": 490,
   "totalPointsAgainst": 469,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 14,
   "genderLosses": 12,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 53.8,
   "diff": 21,
   "ppg": 18.8,
   "leagueRank": 74,
   "rating": -0.6,
   "ratingGames": 26,
   "confidence": 84,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.3,
   "playerId": "1009522f-1f54-4cf1-a0a0-e24ad64f4a66"
  },
  {
   "name": "Claudio Lampone",
   "gender": "Male",
   "team": "Monroe",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 7,
   "losses": 6,
   "pointsWon": 238,
   "totalPointsAgainst": 251,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 6,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 53.8,
   "diff": -13,
   "ppg": 18.3,
   "leagueRank": 138,
   "rating": -1.2,
   "ratingGames": 13,
   "confidence": 74,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": -0.9,
   "playerId": "55570d6a-eb15-4ba1-8a31-b4cee56f6740"
  },
  {
   "name": "Daniel Gallegos",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 67,
   "wins": 36,
   "losses": 31,
   "pointsWon": 1276,
   "totalPointsAgainst": 1205,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 36,
   "genderLosses": 31,
   "clutchWins": 7,
   "clutchLosses": 16,
   "winPct": 53.7,
   "diff": 71,
   "ppg": 19,
   "leagueRank": 63,
   "rating": 0.4,
   "ratingGames": 67,
   "confidence": 92,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.2,
   "playerId": "6f9cb35b-f24c-4480-a8b4-86e6ea32f3c2"
  },
  {
   "name": "Zachary Lessner",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 22,
   "losses": 19,
   "pointsWon": 764,
   "totalPointsAgainst": 757,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 22,
   "genderLosses": 19,
   "clutchWins": 12,
   "clutchLosses": 8,
   "winPct": 53.7,
   "diff": 7,
   "ppg": 18.6,
   "leagueRank": 75,
   "rating": 1.1,
   "ratingGames": 41,
   "confidence": 88,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.9,
   "playerId": "2ce5ebef-8079-4871-8d2e-b34988abbaad"
  },
  {
   "name": "Marc Padre",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 8,
   "losses": 7,
   "pointsWon": 277,
   "totalPointsAgainst": 257,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 53.3,
   "diff": 20,
   "ppg": 18.5,
   "leagueRank": 125,
   "rating": 0.8,
   "ratingGames": 15,
   "confidence": 76,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.2,
   "playerId": "a131a707-f20e-4838-9dcf-7cecb40c2705"
  },
  {
   "name": "Marcin Glowacki",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 16,
   "losses": 14,
   "pointsWon": 568,
   "totalPointsAgainst": 569,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 16,
   "genderLosses": 14,
   "clutchWins": 7,
   "clutchLosses": 4,
   "winPct": 53.3,
   "diff": -1,
   "ppg": 18.9,
   "leagueRank": 70,
   "rating": 1,
   "ratingGames": 30,
   "confidence": 86,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.8,
   "playerId": "e47d28f2-187f-4aa7-acb8-356787ff82e5"
  },
  {
   "name": "Michael Rapaglia",
   "gender": "Male",
   "team": "Premiere",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 53,
   "wins": 28,
   "losses": 25,
   "pointsWon": 981,
   "totalPointsAgainst": 948,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 28,
   "genderLosses": 25,
   "clutchWins": 9,
   "clutchLosses": 8,
   "winPct": 52.8,
   "diff": 33,
   "ppg": 18.5,
   "leagueRank": 76,
   "rating": 1,
   "ratingGames": 53,
   "confidence": 90,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.2,
   "playerId": "0b84dcdf-2b96-4a9e-9eae-5523bf89c4f6"
  },
  {
   "name": "Scott Bohrer",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 44,
   "wins": 23,
   "losses": 21,
   "pointsWon": 837,
   "totalPointsAgainst": 804,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 23,
   "genderLosses": 21,
   "clutchWins": 5,
   "clutchLosses": 11,
   "winPct": 52.3,
   "diff": 33,
   "ppg": 19,
   "leagueRank": 81,
   "rating": -0.7,
   "ratingGames": 44,
   "confidence": 89,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.2,
   "playerId": "7c8310a8-1a97-4c04-bbc0-519fe4132685"
  },
  {
   "name": "Matthew Chen",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 31,
   "wins": 16,
   "losses": 15,
   "pointsWon": 596,
   "totalPointsAgainst": 598,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 16,
   "genderLosses": 15,
   "clutchWins": 8,
   "clutchLosses": 8,
   "winPct": 51.6,
   "diff": -2,
   "ppg": 19.2,
   "leagueRank": 77,
   "rating": -0.4,
   "ratingGames": 31,
   "confidence": 86,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": 0.7,
   "playerId": "68e9ac74-5119-4dbb-8503-72bcdbade183"
  },
  {
   "name": "Nicholas Yandoli",
   "gender": "Male",
   "team": "Premiere",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 19,
   "losses": 18,
   "pointsWon": 680,
   "totalPointsAgainst": 679,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 19,
   "genderLosses": 18,
   "clutchWins": 6,
   "clutchLosses": 7,
   "winPct": 51.4,
   "diff": 1,
   "ppg": 18.4,
   "leagueRank": 83,
   "rating": -0.3,
   "ratingGames": 37,
   "confidence": 87,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.3,
   "playerId": "5ec3a192-8b1f-43ab-a348-739a0ba15429"
  },
  {
   "name": "Mark Kilimnik",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 10,
   "losses": 10,
   "pointsWon": 387,
   "totalPointsAgainst": 367,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 10,
   "clutchWins": 2,
   "clutchLosses": 5,
   "winPct": 50,
   "diff": 20,
   "ppg": 19.4,
   "leagueRank": 69,
   "rating": 0.7,
   "ratingGames": 20,
   "confidence": 80,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.4,
   "playerId": "d6c15f91-4cc9-4612-8ec3-8f4ebd4e0cc1"
  },
  {
   "name": "Al Mancini",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 54,
   "wins": 27,
   "losses": 27,
   "pointsWon": 1017,
   "totalPointsAgainst": 1000,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 27,
   "genderLosses": 27,
   "clutchWins": 10,
   "clutchLosses": 10,
   "winPct": 50,
   "diff": 17,
   "ppg": 18.8,
   "leagueRank": 85,
   "rating": -0.8,
   "ratingGames": 54,
   "confidence": 91,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.2,
   "playerId": "51352d99-02ac-4299-abac-a688bfade22f"
  },
  {
   "name": "Michael Velez",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 7,
   "losses": 7,
   "pointsWon": 268,
   "totalPointsAgainst": 257,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 50,
   "diff": 11,
   "ppg": 19.1,
   "leagueRank": 141,
   "rating": 1.9,
   "ratingGames": 14,
   "confidence": 75,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.5,
   "playerId": "772b8bd9-ee55-463b-8e7d-f5e571a2f047"
  },
  {
   "name": "Ethan Henigan",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 157,
   "totalPointsAgainst": 155,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 50,
   "diff": 2,
   "ppg": 19.6,
   "leagueRank": 165,
   "rating": 1.3,
   "ratingGames": 8,
   "confidence": 61,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.4,
   "playerId": "4a1d4e3a-07b2-4575-b80d-6d160b0c7a23"
  },
  {
   "name": "Tarkan Akas",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 18,
   "losses": 18,
   "pointsWon": 664,
   "totalPointsAgainst": 663,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 18,
   "genderLosses": 18,
   "clutchWins": 3,
   "clutchLosses": 6,
   "winPct": 50,
   "diff": 1,
   "ppg": 18.4,
   "leagueRank": 89,
   "rating": -1.3,
   "ratingGames": 36,
   "confidence": 87,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.3,
   "playerId": "7fd926bd-8473-435e-9330-5984c0637b19"
  },
  {
   "name": "Chi Fai Cho",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 148,
   "totalPointsAgainst": 148,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 50,
   "diff": 0,
   "ppg": 18.5,
   "leagueRank": 177,
   "rating": 0.1,
   "ratingGames": 8,
   "confidence": 64,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.6,
   "playerId": "a97ab81c-02ad-4c31-adf4-a442e903d1d3"
  },
  {
   "name": "Obege Janvier",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 8,
   "losses": 8,
   "pointsWon": 304,
   "totalPointsAgainst": 305,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 8,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 50,
   "diff": -1,
   "ppg": 19,
   "leagueRank": 110,
   "rating": 3.3,
   "ratingGames": 16,
   "confidence": 76,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 1.5,
   "playerId": "50fccc8f-a4a9-490b-a7d5-eebbda35bb22"
  },
  {
   "name": "Matthew Korsak",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 155,
   "totalPointsAgainst": 156,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": -1,
   "ppg": 19.4,
   "leagueRank": 176,
   "rating": 0,
   "ratingGames": 8,
   "confidence": 60,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.6,
   "playerId": "bc07a8b9-9b24-4afb-8c30-852eac7888ee"
  },
  {
   "name": "Pranav Tailor",
   "gender": "Male",
   "team": "Flemington",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 145,
   "totalPointsAgainst": 152,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 50,
   "diff": -7,
   "ppg": 18.1,
   "leagueRank": 183,
   "rating": -0.2,
   "ratingGames": 8,
   "confidence": 62,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.4,
   "playerId": "ca17b2c0-9b3b-47e2-b370-c53ec37675e7"
  },
  {
   "name": "Michael Swell",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 141,
   "totalPointsAgainst": 154,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 50,
   "diff": -13,
   "ppg": 17.6,
   "leagueRank": 185,
   "rating": -0.8,
   "ratingGames": 8,
   "confidence": 64,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.7,
   "playerId": "5436acd1-542a-4ca5-a652-c0addcf23ea2"
  },
  {
   "name": "Zach Hizer",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 19,
   "losses": 20,
   "pointsWon": 738,
   "totalPointsAgainst": 733,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 19,
   "genderLosses": 20,
   "clutchWins": 8,
   "clutchLosses": 8,
   "winPct": 48.7,
   "diff": 5,
   "ppg": 18.9,
   "leagueRank": 73,
   "rating": 1,
   "ratingGames": 39,
   "confidence": 88,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.8,
   "playerId": "b5e576e1-d16d-4c9d-ab28-2e1b1e66487b"
  },
  {
   "name": "Hiep Pham",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 31,
   "wins": 15,
   "losses": 16,
   "pointsWon": 580,
   "totalPointsAgainst": 575,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 15,
   "genderLosses": 16,
   "clutchWins": 5,
   "clutchLosses": 5,
   "winPct": 48.4,
   "diff": 5,
   "ppg": 18.7,
   "leagueRank": 84,
   "rating": 0,
   "ratingGames": 31,
   "confidence": 86,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0,
   "playerId": "515009fd-ac6a-4124-a871-dff85a118781"
  },
  {
   "name": "Vivek Kumar",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 13,
   "losses": 14,
   "pointsWon": 514,
   "totalPointsAgainst": 486,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 13,
   "genderLosses": 14,
   "clutchWins": 3,
   "clutchLosses": 7,
   "winPct": 48.1,
   "diff": 28,
   "ppg": 19,
   "leagueRank": 80,
   "rating": 1,
   "ratingGames": 27,
   "confidence": 84,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.4,
   "playerId": "a472cebf-6bf1-42d1-9a41-fc8940cbb021"
  },
  {
   "name": "Christopher Venuto",
   "gender": "Male",
   "team": "Monroe",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 11,
   "losses": 12,
   "pointsWon": 413,
   "totalPointsAgainst": 433,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 11,
   "genderLosses": 12,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 47.8,
   "diff": -20,
   "ppg": 18,
   "leagueRank": 88,
   "rating": 0.5,
   "ratingGames": 23,
   "confidence": 82,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 0,
   "playerId": "19d10737-b8cb-4106-9b6d-1c9aced87b19"
  },
  {
   "name": "Jacob Yandoli",
   "gender": "Male",
   "team": "Premiere",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 38,
   "wins": 18,
   "losses": 20,
   "pointsWon": 706,
   "totalPointsAgainst": 720,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 18,
   "genderLosses": 20,
   "clutchWins": 9,
   "clutchLosses": 9,
   "winPct": 47.4,
   "diff": -14,
   "ppg": 18.6,
   "leagueRank": 95,
   "rating": -0.9,
   "ratingGames": 38,
   "confidence": 88,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.1,
   "playerId": "be9bc229-2d57-4236-a951-11a2f91a09a3"
  },
  {
   "name": "William Lee",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 74,
   "wins": 35,
   "losses": 39,
   "pointsWon": 1372,
   "totalPointsAgainst": 1385,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 35,
   "genderLosses": 39,
   "clutchWins": 14,
   "clutchLosses": 17,
   "winPct": 47.3,
   "diff": -13,
   "ppg": 18.5,
   "leagueRank": 82,
   "rating": 0.8,
   "ratingGames": 74,
   "confidence": 93,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.4,
   "playerId": "9e264c96-36cf-45a9-90ad-1e125a82c851"
  },
  {
   "name": "Matthew Eldridge",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 17,
   "losses": 19,
   "pointsWon": 678,
   "totalPointsAgainst": 663,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 17,
   "genderLosses": 19,
   "clutchWins": 3,
   "clutchLosses": 7,
   "winPct": 47.2,
   "diff": 15,
   "ppg": 18.8,
   "leagueRank": 86,
   "rating": -0.5,
   "ratingGames": 36,
   "confidence": 88,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.2,
   "playerId": "19cb95ac-bec2-41bb-a6ce-767d51e00f24"
  },
  {
   "name": "Emil Pescatore",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 7,
   "losses": 8,
   "pointsWon": 287,
   "totalPointsAgainst": 293,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 8,
   "clutchWins": 2,
   "clutchLosses": 5,
   "winPct": 46.7,
   "diff": -6,
   "ppg": 19.1,
   "leagueRank": 174,
   "rating": -2,
   "ratingGames": 15,
   "confidence": 75,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -1,
   "playerId": "1c9b7abf-dae6-4e0d-a31d-485e99a01fec"
  },
  {
   "name": "Patrick Ryan",
   "gender": "Male",
   "team": "Flemington",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 7,
   "losses": 8,
   "pointsWon": 284,
   "totalPointsAgainst": 292,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 8,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 46.7,
   "diff": -8,
   "ppg": 18.9,
   "leagueRank": 166,
   "rating": -0.3,
   "ratingGames": 15,
   "confidence": 76,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0,
   "playerId": "8344fbda-35c2-4ce0-94ad-158090d2d5ba"
  },
  {
   "name": "Ashwin Korde",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 58,
   "wins": 27,
   "losses": 31,
   "pointsWon": 1061,
   "totalPointsAgainst": 1111,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 27,
   "genderLosses": 31,
   "clutchWins": 12,
   "clutchLosses": 8,
   "winPct": 46.6,
   "diff": -50,
   "ppg": 18.3,
   "leagueRank": 100,
   "rating": -1.8,
   "ratingGames": 58,
   "confidence": 91,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.2,
   "playerId": "f9f521ee-5f27-4f61-b4e0-4e0b9ad09aee"
  },
  {
   "name": "Kushal Thapa",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 13,
   "losses": 15,
   "pointsWon": 517,
   "totalPointsAgainst": 537,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 13,
   "genderLosses": 15,
   "clutchWins": 7,
   "clutchLosses": 7,
   "winPct": 46.4,
   "diff": -20,
   "ppg": 18.5,
   "leagueRank": 92,
   "rating": -0.7,
   "ratingGames": 28,
   "confidence": 85,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0,
   "playerId": "85b62c8d-b3e4-4f75-93ec-cf7b5097a2ac"
  },
  {
   "name": "Alex Boory",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 18,
   "losses": 21,
   "pointsWon": 706,
   "totalPointsAgainst": 756,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 18,
   "genderLosses": 21,
   "clutchWins": 8,
   "clutchLosses": 5,
   "winPct": 46.2,
   "diff": -50,
   "ppg": 18.1,
   "leagueRank": 105,
   "rating": -0.3,
   "ratingGames": 39,
   "confidence": 88,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.4,
   "playerId": "897f1edf-63f3-4eec-bcf5-d5a1bf0be859"
  },
  {
   "name": "Drew Youssef",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 50,
   "wins": 23,
   "losses": 27,
   "pointsWon": 935,
   "totalPointsAgainst": 949,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 23,
   "genderLosses": 27,
   "clutchWins": 11,
   "clutchLosses": 10,
   "winPct": 46,
   "diff": -14,
   "ppg": 18.7,
   "leagueRank": 90,
   "rating": -0.3,
   "ratingGames": 50,
   "confidence": 90,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.3,
   "playerId": "d13d6c03-eea2-44f3-a497-965b1e95ea83"
  },
  {
   "name": "Rich Marcovecchio",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 11,
   "losses": 13,
   "pointsWon": 441,
   "totalPointsAgainst": 445,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 11,
   "genderLosses": 13,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 45.8,
   "diff": -4,
   "ppg": 18.4,
   "leagueRank": 94,
   "rating": -0.8,
   "ratingGames": 24,
   "confidence": 83,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.2,
   "playerId": "08197a69-d447-4483-b3ae-7b232fb0655d"
  },
  {
   "name": "Alex Mihalca",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 31,
   "wins": 14,
   "losses": 17,
   "pointsWon": 566,
   "totalPointsAgainst": 590,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 14,
   "genderLosses": 17,
   "clutchWins": 6,
   "clutchLosses": 5,
   "winPct": 45.2,
   "diff": -24,
   "ppg": 18.3,
   "leagueRank": 104,
   "rating": -0.8,
   "ratingGames": 31,
   "confidence": 86,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.2,
   "playerId": "47054f48-f7f3-4a11-8a3c-03160ea588b6"
  },
  {
   "name": "Zyril Carilo",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 40,
   "wins": 18,
   "losses": 22,
   "pointsWon": 739,
   "totalPointsAgainst": 749,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 18,
   "genderLosses": 22,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 45,
   "diff": -10,
   "ppg": 18.5,
   "leagueRank": 93,
   "rating": -0.2,
   "ratingGames": 40,
   "confidence": 88,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.6,
   "playerId": "b4efc48a-f302-4d27-8c35-0dac1e68eec8"
  },
  {
   "name": "Shahar Gelber",
   "gender": "Male",
   "team": "Flemington",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 17,
   "losses": 21,
   "pointsWon": 673,
   "totalPointsAgainst": 716,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 17,
   "genderLosses": 21,
   "clutchWins": 5,
   "clutchLosses": 3,
   "winPct": 44.7,
   "diff": -43,
   "ppg": 17.7,
   "leagueRank": 103,
   "rating": 0,
   "ratingGames": 38,
   "confidence": 88,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.1,
   "playerId": "7efd9bc6-6b2f-4e98-b785-136fea990664"
  },
  {
   "name": "Anthony Fallet",
   "gender": "Male",
   "team": "Flemington",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 17,
   "losses": 21,
   "pointsWon": 665,
   "totalPointsAgainst": 735,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 17,
   "genderLosses": 21,
   "clutchWins": 7,
   "clutchLosses": 3,
   "winPct": 44.7,
   "diff": -70,
   "ppg": 17.5,
   "leagueRank": 111,
   "rating": -0.4,
   "ratingGames": 38,
   "confidence": 88,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": -0.1,
   "playerId": "1949e493-55f0-4373-8c61-6a266543ddbf"
  },
  {
   "name": "Gary Sidhu",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 54,
   "wins": 24,
   "losses": 30,
   "pointsWon": 959,
   "totalPointsAgainst": 1033,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 24,
   "genderLosses": 30,
   "clutchWins": 11,
   "clutchLosses": 9,
   "winPct": 44.4,
   "diff": -74,
   "ppg": 17.8,
   "leagueRank": 99,
   "rating": 0.2,
   "ratingGames": 54,
   "confidence": 91,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.8,
   "playerId": "fa28fec9-9eff-4831-912d-4180f8760eeb"
  },
  {
   "name": "Christian Lupica",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 64,
   "wins": 28,
   "losses": 36,
   "pointsWon": 1184,
   "totalPointsAgainst": 1222,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 28,
   "genderLosses": 36,
   "clutchWins": 12,
   "clutchLosses": 13,
   "winPct": 43.8,
   "diff": -38,
   "ppg": 18.5,
   "leagueRank": 91,
   "rating": -0.5,
   "ratingGames": 64,
   "confidence": 92,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.2,
   "playerId": "ac97d2bc-5ee7-4285-8eb3-e5650a0f6f6e"
  },
  {
   "name": "Alain Hwang",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 130,
   "totalPointsAgainst": 131,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 42.9,
   "diff": -1,
   "ppg": 18.6,
   "leagueRank": 194,
   "rating": -0.2,
   "ratingGames": 7,
   "confidence": 60,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.1,
   "playerId": "74202229-7c29-44eb-9574-de687495a1a6"
  },
  {
   "name": "Sheel Motiwala",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 15,
   "losses": 20,
   "pointsWon": 629,
   "totalPointsAgainst": 663,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 15,
   "genderLosses": 20,
   "clutchWins": 6,
   "clutchLosses": 5,
   "winPct": 42.9,
   "diff": -34,
   "ppg": 18,
   "leagueRank": 106,
   "rating": -0.6,
   "ratingGames": 35,
   "confidence": 87,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.1,
   "playerId": "e3f3e90d-b026-49f2-8194-45e9252b61f8"
  },
  {
   "name": "Andre Cristobal",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 9,
   "losses": 12,
   "pointsWon": 370,
   "totalPointsAgainst": 404,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 12,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 42.9,
   "diff": -34,
   "ppg": 17.6,
   "leagueRank": 145,
   "rating": -1.1,
   "ratingGames": 21,
   "confidence": 82,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.3,
   "playerId": "50d796da-0ac2-4f94-af29-212d7865f473"
  },
  {
   "name": "Jaco De Waal",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 56,
   "wins": 24,
   "losses": 32,
   "pointsWon": 1003,
   "totalPointsAgainst": 1062,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 24,
   "genderLosses": 32,
   "clutchWins": 9,
   "clutchLosses": 11,
   "winPct": 42.9,
   "diff": -59,
   "ppg": 17.9,
   "leagueRank": 102,
   "rating": -0.3,
   "ratingGames": 56,
   "confidence": 91,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.6,
   "playerId": "19407a76-031d-4be3-8ed8-ba88cccdfdd3"
  },
  {
   "name": "Daniel Ehala",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 56,
   "wins": 24,
   "losses": 32,
   "pointsWon": 1004,
   "totalPointsAgainst": 1084,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 24,
   "genderLosses": 32,
   "clutchWins": 11,
   "clutchLosses": 7,
   "winPct": 42.9,
   "diff": -80,
   "ppg": 17.9,
   "leagueRank": 97,
   "rating": 0.6,
   "ratingGames": 56,
   "confidence": 91,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.6,
   "playerId": "2ee28d63-2f38-468f-b824-9b17aa938413"
  },
  {
   "name": "Andrew Bernard",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 31,
   "wins": 13,
   "losses": 18,
   "pointsWon": 552,
   "totalPointsAgainst": 593,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 13,
   "genderLosses": 18,
   "clutchWins": 6,
   "clutchLosses": 3,
   "winPct": 41.9,
   "diff": -41,
   "ppg": 17.8,
   "leagueRank": 108,
   "rating": -0.6,
   "ratingGames": 31,
   "confidence": 86,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.5,
   "playerId": "8079e74f-c537-4e42-9590-e8d60f10ba3d"
  },
  {
   "name": "Sean O'Connell",
   "gender": "Male",
   "team": "Flemington",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 31,
   "wins": 13,
   "losses": 18,
   "pointsWon": 540,
   "totalPointsAgainst": 585,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 13,
   "genderLosses": 18,
   "clutchWins": 5,
   "clutchLosses": 3,
   "winPct": 41.9,
   "diff": -45,
   "ppg": 17.4,
   "leagueRank": 120,
   "rating": -1.8,
   "ratingGames": 31,
   "confidence": 85,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.1,
   "playerId": "6d9b173b-57b7-499c-9bde-9bdafd152968"
  },
  {
   "name": "Aleksey Sergeev",
   "gender": "Male",
   "team": "Monroe",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 16,
   "losses": 23,
   "pointsWon": 714,
   "totalPointsAgainst": 752,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 16,
   "genderLosses": 23,
   "clutchWins": 4,
   "clutchLosses": 8,
   "winPct": 41,
   "diff": -38,
   "ppg": 18.3,
   "leagueRank": 96,
   "rating": 1.1,
   "ratingGames": 39,
   "confidence": 88,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 0.4,
   "playerId": "80467dc7-edfb-46e8-a30a-b6acd19ee222"
  },
  {
   "name": "Kevin Wysoczynski",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 61,
   "wins": 25,
   "losses": 36,
   "pointsWon": 1089,
   "totalPointsAgainst": 1143,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 25,
   "genderLosses": 36,
   "clutchWins": 9,
   "clutchLosses": 10,
   "winPct": 41,
   "diff": -54,
   "ppg": 17.9,
   "leagueRank": 101,
   "rating": 0.5,
   "ratingGames": 61,
   "confidence": 92,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.7,
   "playerId": "f64f0cc2-6c82-4fe4-9992-747512700971"
  },
  {
   "name": "Joshua Mindlin",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 74,
   "wins": 30,
   "losses": 44,
   "pointsWon": 1325,
   "totalPointsAgainst": 1418,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 30,
   "genderLosses": 44,
   "clutchWins": 12,
   "clutchLosses": 16,
   "winPct": 40.5,
   "diff": -93,
   "ppg": 17.9,
   "leagueRank": 109,
   "rating": -0.2,
   "ratingGames": 74,
   "confidence": 93,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.7,
   "playerId": "439d9ebf-9409-4214-ad91-7c18a0153c71"
  },
  {
   "name": "Kevin Lin",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 6,
   "losses": 9,
   "pointsWon": 288,
   "totalPointsAgainst": 285,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 9,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 40,
   "diff": 3,
   "ppg": 19.2,
   "leagueRank": 147,
   "rating": 0,
   "ratingGames": 15,
   "confidence": 76,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.2,
   "playerId": "44bbc794-d40d-4fbf-a59e-ddb785496f21"
  },
  {
   "name": "Brock Hanak",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 91,
   "totalPointsAgainst": 94,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 40,
   "diff": -3,
   "ppg": 18.2,
   "leagueRank": 199,
   "rating": 0.1,
   "ratingGames": 5,
   "confidence": 51,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.6,
   "playerId": "9a5cd6d0-9be5-4d6f-a815-b1eb5844042b"
  },
  {
   "name": "Ivan Rios",
   "gender": "Male",
   "team": "Monroe",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 12,
   "losses": 18,
   "pointsWon": 536,
   "totalPointsAgainst": 590,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 18,
   "clutchWins": 6,
   "clutchLosses": 7,
   "winPct": 40,
   "diff": -54,
   "ppg": 17.9,
   "leagueRank": 115,
   "rating": -0.5,
   "ratingGames": 30,
   "confidence": 86,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.3,
   "playerId": "5807a1c8-ca44-48d1-9dec-ee621a2817c2"
  },
  {
   "name": "Andy Ead",
   "gender": "Male",
   "team": "Flemington",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 51,
   "wins": 20,
   "losses": 31,
   "pointsWon": 904,
   "totalPointsAgainst": 971,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 20,
   "genderLosses": 31,
   "clutchWins": 7,
   "clutchLosses": 8,
   "winPct": 39.2,
   "diff": -67,
   "ppg": 17.7,
   "leagueRank": 117,
   "rating": -1.9,
   "ratingGames": 51,
   "confidence": 90,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.3,
   "playerId": "6c4d1df7-7f8f-432b-a8a7-8751e9aa521d"
  },
  {
   "name": "Derek Callihan",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 9,
   "losses": 14,
   "pointsWon": 388,
   "totalPointsAgainst": 447,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 14,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 39.1,
   "diff": -59,
   "ppg": 16.9,
   "leagueRank": 156,
   "rating": -0.7,
   "ratingGames": 23,
   "confidence": 82,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.6,
   "playerId": "5eccfff7-0902-4be1-a70e-361ff447bf6a"
  },
  {
   "name": "Vince Abate",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 49,
   "wins": 19,
   "losses": 30,
   "pointsWon": 862,
   "totalPointsAgainst": 953,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 19,
   "genderLosses": 30,
   "clutchWins": 10,
   "clutchLosses": 8,
   "winPct": 38.8,
   "diff": -91,
   "ppg": 17.6,
   "leagueRank": 128,
   "rating": -1.1,
   "ratingGames": 49,
   "confidence": 90,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.6,
   "playerId": "8257200c-7448-4527-92df-436d7bb18cac"
  },
  {
   "name": "Hans Tang",
   "gender": "Male",
   "team": "Flemington",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 31,
   "wins": 12,
   "losses": 19,
   "pointsWon": 547,
   "totalPointsAgainst": 595,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 19,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 38.7,
   "diff": -48,
   "ppg": 17.6,
   "leagueRank": 112,
   "rating": 0.5,
   "ratingGames": 31,
   "confidence": 86,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.5,
   "playerId": "b4694087-759d-4570-9394-3e7c99f19099"
  },
  {
   "name": "Jonah Karczmer",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 5,
   "losses": 8,
   "pointsWon": 247,
   "totalPointsAgainst": 255,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 8,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 38.5,
   "diff": -8,
   "ppg": 19,
   "leagueRank": 158,
   "rating": -0.3,
   "ratingGames": 13,
   "confidence": 73,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.4,
   "playerId": "c33e6ff8-38a1-45ca-9abb-d05a7ae27079"
  },
  {
   "name": "Jack Blumberg",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 8,
   "losses": 13,
   "pointsWon": 386,
   "totalPointsAgainst": 412,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 13,
   "clutchWins": 4,
   "clutchLosses": 6,
   "winPct": 38.1,
   "diff": -26,
   "ppg": 18.4,
   "leagueRank": 148,
   "rating": 1.2,
   "ratingGames": 21,
   "confidence": 81,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.9,
   "playerId": "f2929b28-a6ee-45e5-9846-da957b6d8734"
  },
  {
   "name": "Caesar Gene",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 45,
   "wins": 17,
   "losses": 28,
   "pointsWon": 806,
   "totalPointsAgainst": 879,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 17,
   "genderLosses": 28,
   "clutchWins": 10,
   "clutchLosses": 8,
   "winPct": 37.8,
   "diff": -73,
   "ppg": 17.9,
   "leagueRank": 131,
   "rating": -1.5,
   "ratingGames": 45,
   "confidence": 89,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.4,
   "playerId": "a0aa8b27-3980-4abd-a62c-62d801cb0a82"
  },
  {
   "name": "Greg Mitchell",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 149,
   "totalPointsAgainst": 154,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 37.5,
   "diff": -5,
   "ppg": 18.6,
   "leagueRank": 196,
   "rating": -2.3,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -1.6,
   "playerId": "cd7372fd-27db-46bd-8a46-dc0406393341"
  },
  {
   "name": "Yash Shah",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 9,
   "losses": 15,
   "pointsWon": 446,
   "totalPointsAgainst": 465,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 15,
   "clutchWins": 3,
   "clutchLosses": 6,
   "winPct": 37.5,
   "diff": -19,
   "ppg": 18.6,
   "leagueRank": 121,
   "rating": -1.6,
   "ratingGames": 24,
   "confidence": 83,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0,
   "playerId": "fbf8a0f9-a289-4d98-a5e3-478c8dce672a"
  },
  {
   "name": "Joseph Lynskey",
   "gender": "Male",
   "team": "Premiere",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 9,
   "losses": 15,
   "pointsWon": 411,
   "totalPointsAgainst": 433,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 15,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 37.5,
   "diff": -22,
   "ppg": 17.1,
   "leagueRank": 130,
   "rating": -0.5,
   "ratingGames": 24,
   "confidence": 81,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.6,
   "playerId": "0e8c08b7-0e58-434b-8830-f37779f821dc"
  },
  {
   "name": "Eric Lin",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 6,
   "losses": 10,
   "pointsWon": 296,
   "totalPointsAgainst": 323,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 10,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 37.5,
   "diff": -27,
   "ppg": 18.5,
   "leagueRank": 139,
   "rating": -0.2,
   "ratingGames": 16,
   "confidence": 77,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.9,
   "playerId": "4ce1c715-b187-47c5-b6dc-d079f802499d"
  },
  {
   "name": "Joseph Yi",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 40,
   "wins": 15,
   "losses": 25,
   "pointsWon": 701,
   "totalPointsAgainst": 775,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 15,
   "genderLosses": 25,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 37.5,
   "diff": -74,
   "ppg": 17.5,
   "leagueRank": 124,
   "rating": -0.7,
   "ratingGames": 40,
   "confidence": 89,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.5,
   "playerId": "e882fe51-042a-4368-b34f-fbabad19d7c1"
  },
  {
   "name": "Rahul Purwah",
   "gender": "Male",
   "team": "Monroe",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 51,
   "wins": 19,
   "losses": 32,
   "pointsWon": 909,
   "totalPointsAgainst": 1005,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 19,
   "genderLosses": 32,
   "clutchWins": 9,
   "clutchLosses": 7,
   "winPct": 37.3,
   "diff": -96,
   "ppg": 17.8,
   "leagueRank": 116,
   "rating": 0.1,
   "ratingGames": 51,
   "confidence": 91,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 0.3,
   "playerId": "b19effeb-3b70-4f48-b8d9-781026933e86"
  },
  {
   "name": "Daniel Schwab",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 43,
   "wins": 16,
   "losses": 27,
   "pointsWon": 750,
   "totalPointsAgainst": 839,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 16,
   "genderLosses": 27,
   "clutchWins": 6,
   "clutchLosses": 10,
   "winPct": 37.2,
   "diff": -89,
   "ppg": 17.4,
   "leagueRank": 132,
   "rating": -1,
   "ratingGames": 43,
   "confidence": 89,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.6,
   "playerId": "3382b214-0a3e-4005-aba4-084588de0d98"
  },
  {
   "name": "Simon Rosenwasser",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 14,
   "losses": 24,
   "pointsWon": 682,
   "totalPointsAgainst": 735,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 14,
   "genderLosses": 24,
   "clutchWins": 5,
   "clutchLosses": 10,
   "winPct": 36.8,
   "diff": -53,
   "ppg": 17.9,
   "leagueRank": 114,
   "rating": 0,
   "ratingGames": 38,
   "confidence": 88,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.5,
   "playerId": "369dca37-2d15-4559-96d1-26a78df236a1"
  },
  {
   "name": "Simon Perry",
   "gender": "Male",
   "team": "Flemington",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 5,
   "losses": 9,
   "pointsWon": 255,
   "totalPointsAgainst": 277,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 9,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 35.7,
   "diff": -22,
   "ppg": 18.2,
   "leagueRank": 182,
   "rating": -0.4,
   "ratingGames": 14,
   "confidence": 75,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.5,
   "playerId": "03c7bdf6-926c-4d90-9416-117cd3478b50"
  },
  {
   "name": "Anthony Bradford Bisignano",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 43,
   "wins": 15,
   "losses": 28,
   "pointsWon": 755,
   "totalPointsAgainst": 835,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 15,
   "genderLosses": 28,
   "clutchWins": 6,
   "clutchLosses": 8,
   "winPct": 34.9,
   "diff": -80,
   "ppg": 17.6,
   "leagueRank": 122,
   "rating": 0.3,
   "ratingGames": 43,
   "confidence": 89,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.8,
   "playerId": "7ce7d3d1-b44b-431c-b3a5-20e153cc1777"
  },
  {
   "name": "Alex Pecora",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 66,
   "wins": 23,
   "losses": 43,
   "pointsWon": 1181,
   "totalPointsAgainst": 1287,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 23,
   "genderLosses": 43,
   "clutchWins": 7,
   "clutchLosses": 13,
   "winPct": 34.8,
   "diff": -106,
   "ppg": 17.9,
   "leagueRank": 126,
   "rating": -0.7,
   "ratingGames": 66,
   "confidence": 92,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.4,
   "playerId": "3533f5a2-d7ed-4fd3-b969-5117c0474452"
  },
  {
   "name": "Matthew Mintz",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 14,
   "losses": 27,
   "pointsWon": 724,
   "totalPointsAgainst": 814,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 14,
   "genderLosses": 27,
   "clutchWins": 8,
   "clutchLosses": 7,
   "winPct": 34.1,
   "diff": -90,
   "ppg": 17.7,
   "leagueRank": 127,
   "rating": 0,
   "ratingGames": 41,
   "confidence": 88,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.6,
   "playerId": "ad956d26-e552-40eb-97c4-38edfc1b0bc1"
  },
  {
   "name": "Braden Keith",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 50,
   "wins": 17,
   "losses": 33,
   "pointsWon": 894,
   "totalPointsAgainst": 976,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 17,
   "genderLosses": 33,
   "clutchWins": 5,
   "clutchLosses": 11,
   "winPct": 34,
   "diff": -82,
   "ppg": 17.9,
   "leagueRank": 136,
   "rating": -2,
   "ratingGames": 50,
   "confidence": 91,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.2,
   "playerId": "d23d47c0-4f40-4691-b81a-9ad6e36402b6"
  },
  {
   "name": "Grant Hanak",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 105,
   "totalPointsAgainst": 113,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 33.3,
   "diff": -8,
   "ppg": 17.5,
   "leagueRank": 204,
   "rating": -0.9,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.4,
   "playerId": "44a0a4da-e7cb-4037-9018-97544dfce248"
  },
  {
   "name": "Sebastian Ferrer",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 8,
   "losses": 16,
   "pointsWon": 432,
   "totalPointsAgainst": 470,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 16,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 33.3,
   "diff": -38,
   "ppg": 18,
   "leagueRank": 119,
   "rating": 0.4,
   "ratingGames": 24,
   "confidence": 83,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 1.4,
   "playerId": "5c354e5d-09ba-4d09-a8c4-76e0fb7eb78a"
  },
  {
   "name": "Patrick Cadieu",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 8,
   "losses": 16,
   "pointsWon": 431,
   "totalPointsAgainst": 469,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 16,
   "clutchWins": 5,
   "clutchLosses": 5,
   "winPct": 33.3,
   "diff": -38,
   "ppg": 18,
   "leagueRank": 172,
   "rating": 0.7,
   "ratingGames": 24,
   "confidence": 83,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 1,
   "playerId": "6bf475b8-0f4c-4e4b-a1ba-279f5f8aa008"
  },
  {
   "name": "Damien Stahl",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 5,
   "losses": 10,
   "pointsWon": 245,
   "totalPointsAgainst": 284,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 10,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 33.3,
   "diff": -39,
   "ppg": 16.3,
   "leagueRank": 221,
   "rating": -0.2,
   "ratingGames": 15,
   "confidence": 76,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 1.1,
   "playerId": "45d2cd6f-4816-46b2-8e17-fab766cdb87e"
  },
  {
   "name": "Tim Dowd",
   "gender": "Male",
   "team": "Flemington",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 13,
   "losses": 26,
   "pointsWon": 697,
   "totalPointsAgainst": 771,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 13,
   "genderLosses": 26,
   "clutchWins": 6,
   "clutchLosses": 9,
   "winPct": 33.3,
   "diff": -74,
   "ppg": 17.9,
   "leagueRank": 123,
   "rating": 0.4,
   "ratingGames": 39,
   "confidence": 88,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 1,
   "playerId": "b7555b30-f1b5-4d44-9eff-dffd3e1b1b28"
  },
  {
   "name": "Stephen Conger",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 16,
   "wins": 5,
   "losses": 11,
   "pointsWon": 299,
   "totalPointsAgainst": 319,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 11,
   "clutchWins": 2,
   "clutchLosses": 6,
   "winPct": 31.3,
   "diff": -20,
   "ppg": 18.7,
   "leagueRank": 167,
   "rating": -1.2,
   "ratingGames": 16,
   "confidence": 77,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.4,
   "playerId": "24e70ef7-b98e-459e-8a19-19a2b66a054e"
  },
  {
   "name": "Bryan Nardone",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 58,
   "wins": 18,
   "losses": 40,
   "pointsWon": 979,
   "totalPointsAgainst": 1147,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 18,
   "genderLosses": 40,
   "clutchWins": 10,
   "clutchLosses": 7,
   "winPct": 31,
   "diff": -168,
   "ppg": 16.9,
   "leagueRank": 140,
   "rating": -0.6,
   "ratingGames": 58,
   "confidence": 91,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.7,
   "playerId": "a479d794-d9d0-4620-b322-b7f249f2ae5f"
  },
  {
   "name": "Zachary Puccia",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 51,
   "wins": 15,
   "losses": 36,
   "pointsWon": 880,
   "totalPointsAgainst": 1014,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 15,
   "genderLosses": 36,
   "clutchWins": 8,
   "clutchLosses": 12,
   "winPct": 29.4,
   "diff": -134,
   "ppg": 17.3,
   "leagueRank": 137,
   "rating": -0.1,
   "ratingGames": 51,
   "confidence": 90,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 1.2,
   "playerId": "dd6582a2-1596-40b8-8a4c-fec00aaeb379"
  },
  {
   "name": "David Brandolph",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 7,
   "losses": 17,
   "pointsWon": 424,
   "totalPointsAgainst": 461,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 17,
   "clutchWins": 2,
   "clutchLosses": 6,
   "winPct": 29.2,
   "diff": -37,
   "ppg": 17.7,
   "leagueRank": 143,
   "rating": -1.2,
   "ratingGames": 24,
   "confidence": 83,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -0.2,
   "playerId": "be10853a-1f2c-4b56-8fd7-902ddc686401"
  },
  {
   "name": "Dean Tridente",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 107,
   "totalPointsAgainst": 135,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 28.6,
   "diff": -28,
   "ppg": 15.3,
   "leagueRank": 210,
   "rating": -1.3,
   "ratingGames": 7,
   "confidence": 59,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.8,
   "playerId": "0c14b44f-7a46-464e-a577-f8f9d6d24e6d"
  },
  {
   "name": "Noah Goding",
   "gender": "Male",
   "team": "Flemington",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 111,
   "totalPointsAgainst": 143,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 28.6,
   "diff": -32,
   "ppg": 15.9,
   "leagueRank": 213,
   "rating": -2.1,
   "ratingGames": 7,
   "confidence": 60,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.9,
   "playerId": "80138d68-a74a-4f8c-aea1-7d31e682efa8"
  },
  {
   "name": "Christopher Yang",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 4,
   "losses": 10,
   "pointsWon": 236,
   "totalPointsAgainst": 280,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 10,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 28.6,
   "diff": -44,
   "ppg": 16.9,
   "leagueRank": 193,
   "rating": -1.2,
   "ratingGames": 14,
   "confidence": 75,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.2,
   "playerId": "efe3ef0c-82f8-4370-89cc-ec41bd6719cc"
  },
  {
   "name": "Jacob Rosengarten",
   "gender": "Male",
   "team": "Monroe",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 6,
   "losses": 16,
   "pointsWon": 380,
   "totalPointsAgainst": 442,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 16,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 27.3,
   "diff": -62,
   "ppg": 17.3,
   "leagueRank": 150,
   "rating": -1,
   "ratingGames": 22,
   "confidence": 82,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.2,
   "playerId": "b2f8ea85-7734-47a2-8ce7-bd968b3a51bc"
  },
  {
   "name": "Tim Cahalin",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 70,
   "wins": 19,
   "losses": 51,
   "pointsWon": 1198,
   "totalPointsAgainst": 1391,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 19,
   "genderLosses": 51,
   "clutchWins": 8,
   "clutchLosses": 13,
   "winPct": 27.1,
   "diff": -193,
   "ppg": 17.1,
   "leagueRank": 152,
   "rating": -2.4,
   "ratingGames": 70,
   "confidence": 92,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.2,
   "playerId": "7610b0d0-07a5-4408-ade6-d5ea5d80fe0a"
  },
  {
   "name": "Brian Barenbaum",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 7,
   "losses": 19,
   "pointsWon": 457,
   "totalPointsAgainst": 515,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 19,
   "clutchWins": 2,
   "clutchLosses": 9,
   "winPct": 26.9,
   "diff": -58,
   "ppg": 17.6,
   "leagueRank": 146,
   "rating": -1.2,
   "ratingGames": 26,
   "confidence": 84,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.2,
   "playerId": "b95f46c6-d374-4e13-a57b-abd171b1c847"
  },
  {
   "name": "Nachiket Vaidya",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 56,
   "wins": 15,
   "losses": 41,
   "pointsWon": 951,
   "totalPointsAgainst": 1117,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 15,
   "genderLosses": 41,
   "clutchWins": 8,
   "clutchLosses": 8,
   "winPct": 26.8,
   "diff": -166,
   "ppg": 17,
   "leagueRank": 149,
   "rating": -1.2,
   "ratingGames": 56,
   "confidence": 91,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.4,
   "playerId": "0e35b16c-8027-4994-b04f-fd146d6d1709"
  },
  {
   "name": "Hany Ibrahim",
   "gender": "Male",
   "team": "Flemington",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 45,
   "wins": 12,
   "losses": 33,
   "pointsWon": 735,
   "totalPointsAgainst": 873,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 33,
   "clutchWins": 4,
   "clutchLosses": 7,
   "winPct": 26.7,
   "diff": -138,
   "ppg": 16.3,
   "leagueRank": 159,
   "rating": -1.9,
   "ratingGames": 45,
   "confidence": 90,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.5,
   "playerId": "5b439439-36f5-421f-afaa-5d8b1a547954"
  },
  {
   "name": "Frank Clark",
   "gender": "Male",
   "team": "Flemington",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 58,
   "wins": 15,
   "losses": 43,
   "pointsWon": 956,
   "totalPointsAgainst": 1168,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 15,
   "genderLosses": 43,
   "clutchWins": 8,
   "clutchLosses": 11,
   "winPct": 25.9,
   "diff": -212,
   "ppg": 16.5,
   "leagueRank": 161,
   "rating": -2.4,
   "ratingGames": 58,
   "confidence": 91,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.2,
   "playerId": "fb42e711-528f-4028-80c6-e32013e3f807"
  },
  {
   "name": "Marc Harden",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 35,
   "wins": 9,
   "losses": 26,
   "pointsWon": 535,
   "totalPointsAgainst": 692,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 26,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 25.7,
   "diff": -157,
   "ppg": 15.3,
   "leagueRank": 168,
   "rating": -1.7,
   "ratingGames": 35,
   "confidence": 87,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.8,
   "playerId": "55194d2f-f537-4e19-b901-86c559f25ef2"
  },
  {
   "name": "Andrew Cooley",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 150,
   "totalPointsAgainst": 163,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 5,
   "winPct": 25,
   "diff": -13,
   "ppg": 18.8,
   "leagueRank": 202,
   "rating": -0.7,
   "ratingGames": 8,
   "confidence": 62,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.1,
   "playerId": "4bc5dc80-f744-41e1-ab6e-a02c600abed8"
  },
  {
   "name": "Keith Shedlock",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 5,
   "losses": 15,
   "pointsWon": 336,
   "totalPointsAgainst": 405,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 15,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 25,
   "diff": -69,
   "ppg": 16.8,
   "leagueRank": 162,
   "rating": -1.9,
   "ratingGames": 20,
   "confidence": 80,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.8,
   "playerId": "f4b44cd7-fc9a-41a2-b569-cdaf08b0bf26"
  },
  {
   "name": "Josh Sherlock",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 6,
   "losses": 18,
   "pointsWon": 373,
   "totalPointsAgainst": 489,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 18,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 25,
   "diff": -116,
   "ppg": 15.5,
   "leagueRank": 171,
   "rating": -2.3,
   "ratingGames": 24,
   "confidence": 83,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.8,
   "playerId": "fa2292a3-4d44-4c69-b4b8-b7c8f6d9085a"
  },
  {
   "name": "Julius Degen",
   "gender": "Male",
   "team": "Monroe",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 45,
   "wins": 11,
   "losses": 34,
   "pointsWon": 755,
   "totalPointsAgainst": 897,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 11,
   "genderLosses": 34,
   "clutchWins": 3,
   "clutchLosses": 9,
   "winPct": 24.4,
   "diff": -142,
   "ppg": 16.8,
   "leagueRank": 157,
   "rating": -1.1,
   "ratingGames": 45,
   "confidence": 90,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0.2,
   "playerId": "3a828946-f189-43be-905a-00c20a3b0b84"
  },
  {
   "name": "Vineeth Mathew",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 6,
   "losses": 19,
   "pointsWon": 424,
   "totalPointsAgainst": 503,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 19,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 24,
   "diff": -79,
   "ppg": 17,
   "leagueRank": 154,
   "rating": -1.1,
   "ratingGames": 25,
   "confidence": 84,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.4,
   "playerId": "329df703-2af3-46cd-a7ae-372a1956536e"
  },
  {
   "name": "Daniel Phillips",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 8,
   "losses": 26,
   "pointsWon": 557,
   "totalPointsAgainst": 690,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 26,
   "clutchWins": 4,
   "clutchLosses": 8,
   "winPct": 23.5,
   "diff": -133,
   "ppg": 16.4,
   "leagueRank": 163,
   "rating": -2.2,
   "ratingGames": 34,
   "confidence": 87,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.6,
   "playerId": "1ddcd805-f965-4357-9567-35920e191f8c"
  },
  {
   "name": "Jonathan Ksiezopolski",
   "gender": "Male",
   "team": "Monroe",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 34,
   "wins": 8,
   "losses": 26,
   "pointsWon": 554,
   "totalPointsAgainst": 692,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 26,
   "clutchWins": 5,
   "clutchLosses": 9,
   "winPct": 23.5,
   "diff": -138,
   "ppg": 16.3,
   "leagueRank": 170,
   "rating": -2.8,
   "ratingGames": 34,
   "confidence": 87,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.1,
   "playerId": "20fe2f66-8825-4881-a325-b8fb78ee5ff6"
  },
  {
   "name": "Tyler Marlin",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 44,
   "wins": 9,
   "losses": 35,
   "pointsWon": 768,
   "totalPointsAgainst": 898,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 35,
   "clutchWins": 4,
   "clutchLosses": 12,
   "winPct": 20.5,
   "diff": -130,
   "ppg": 17.5,
   "leagueRank": 153,
   "rating": -1.1,
   "ratingGames": 44,
   "confidence": 89,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.4,
   "playerId": "bf530f1a-96e0-484c-b377-f1243f05571b"
  },
  {
   "name": "Abhishekh Mehra",
   "gender": "Male",
   "team": "Monroe",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 5,
   "losses": 20,
   "pointsWon": 402,
   "totalPointsAgainst": 507,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 20,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 20,
   "diff": -105,
   "ppg": 16.1,
   "leagueRank": 175,
   "rating": -2.2,
   "ratingGames": 25,
   "confidence": 84,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.2,
   "playerId": "6e92db16-8465-411e-bc3f-935badc74f47"
  },
  {
   "name": "Snehit Achanta",
   "gender": "Male",
   "team": "Monroe",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 4,
   "losses": 17,
   "pointsWon": 324,
   "totalPointsAgainst": 426,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 17,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 19,
   "diff": -102,
   "ppg": 15.4,
   "leagueRank": 181,
   "rating": -2.6,
   "ratingGames": 21,
   "confidence": 81,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 0.2,
   "playerId": "6e17bc1f-6adf-4354-8e03-e37860c1869b"
  },
  {
   "name": "Steven Gregov",
   "gender": "Male",
   "team": "Flemington",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 3,
   "losses": 13,
   "pointsWon": 241,
   "totalPointsAgainst": 323,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 13,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 18.8,
   "diff": -82,
   "ppg": 15.1,
   "leagueRank": 203,
   "rating": -4,
   "ratingGames": 16,
   "confidence": 77,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0,
   "playerId": "3efad314-83fb-4441-a7bf-510228cea1f8"
  },
  {
   "name": "Shayne Clowar",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 40,
   "wins": 7,
   "losses": 33,
   "pointsWon": 623,
   "totalPointsAgainst": 802,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 33,
   "clutchWins": 1,
   "clutchLosses": 5,
   "winPct": 17.5,
   "diff": -179,
   "ppg": 15.6,
   "leagueRank": 178,
   "rating": -1.5,
   "ratingGames": 40,
   "confidence": 89,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 0.7,
   "playerId": "30b75fd5-95cf-4a1a-b296-10e7e381166e"
  },
  {
   "name": "Brian O'Neill",
   "gender": "Male",
   "team": "Monroe",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 5,
   "losses": 24,
   "pointsWon": 490,
   "totalPointsAgainst": 586,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 24,
   "clutchWins": 2,
   "clutchLosses": 8,
   "winPct": 17.2,
   "diff": -96,
   "ppg": 16.9,
   "leagueRank": 169,
   "rating": -1.6,
   "ratingGames": 29,
   "confidence": 85,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 0,
   "playerId": "a00f55b9-a52a-4982-8ffc-9dbe4e66469e"
  },
  {
   "name": "Darren Saks",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 92,
   "totalPointsAgainst": 124,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 16.7,
   "diff": -32,
   "ppg": 15.3,
   "leagueRank": 218,
   "rating": -1.6,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.9,
   "playerId": "9bf7b8ab-4dfa-442b-be12-77580a5ea1dc"
  },
  {
   "name": "Jordan Clever",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 120,
   "totalPointsAgainst": 141,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 14.3,
   "diff": -21,
   "ppg": 17.1,
   "leagueRank": 214,
   "rating": -1.5,
   "ratingGames": 7,
   "confidence": 61,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.5,
   "playerId": "d64db065-87c9-4e7f-989b-6f0ec53240c9"
  },
  {
   "name": "Jeremy Buckley",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 119,
   "totalPointsAgainst": 145,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 14.3,
   "diff": -26,
   "ppg": 17,
   "leagueRank": 211,
   "rating": 0.1,
   "ratingGames": 7,
   "confidence": 60,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 1.2,
   "playerId": "eb8acf3f-de43-4af8-80b0-fd9d5887d80d"
  },
  {
   "name": "Michael Taylor",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 111,
   "totalPointsAgainst": 141,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 14.3,
   "diff": -30,
   "ppg": 15.9,
   "leagueRank": 216,
   "rating": -2,
   "ratingGames": 7,
   "confidence": 57,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0,
   "playerId": "23871699-a12b-4eb6-89cb-62fec790e3fb"
  },
  {
   "name": "Samuel Darla",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 107,
   "totalPointsAgainst": 139,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 14.3,
   "diff": -32,
   "ppg": 15.3,
   "leagueRank": 217,
   "rating": -2.1,
   "ratingGames": 7,
   "confidence": 56,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.6,
   "playerId": "2e946057-0cf8-4375-b401-9c4e475a894f"
  },
  {
   "name": "Jerry Li",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 104,
   "totalPointsAgainst": 145,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 14.3,
   "diff": -41,
   "ppg": 14.9,
   "leagueRank": 219,
   "rating": -1.7,
   "ratingGames": 7,
   "confidence": 56,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 1.4,
   "playerId": "7827b964-4715-4aec-aec4-e75085199fc1"
  },
  {
   "name": "Michael Ksiezopolski",
   "gender": "Male",
   "team": "Monroe",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 4,
   "losses": 24,
   "pointsWon": 422,
   "totalPointsAgainst": 578,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 24,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 14.3,
   "diff": -156,
   "ppg": 15.1,
   "leagueRank": 188,
   "rating": -3.9,
   "ratingGames": 28,
   "confidence": 85,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0,
   "playerId": "73090c04-48a1-48b2-b638-55b1e656f4ed"
  },
  {
   "name": "Turney Hall",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 135,
   "totalPointsAgainst": 166,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 12.5,
   "diff": -31,
   "ppg": 16.9,
   "leagueRank": 209,
   "rating": -2,
   "ratingGames": 8,
   "confidence": 62,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.5,
   "playerId": "9271aef6-af3d-4717-af33-91fb40f6ffaa"
  },
  {
   "name": "Jim Pagano",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 128,
   "totalPointsAgainst": 162,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 12.5,
   "diff": -34,
   "ppg": 16,
   "leagueRank": 212,
   "rating": -1.8,
   "ratingGames": 8,
   "confidence": 59,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.8,
   "playerId": "f1012c67-b6ba-4270-8d7a-53a9aa34b7df"
  },
  {
   "name": "David Osborne",
   "gender": "Male",
   "team": "Flemington",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 129,
   "totalPointsAgainst": 166,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 12.5,
   "diff": -37,
   "ppg": 16.1,
   "leagueRank": 207,
   "rating": -1.1,
   "ratingGames": 8,
   "confidence": 62,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 1.7,
   "playerId": "418e7ba5-3e06-40ec-9b83-19d3bf10c9cb"
  },
  {
   "name": "Alexandre Inamasu",
   "gender": "Male",
   "team": "Flemington",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 118,
   "totalPointsAgainst": 165,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 12.5,
   "diff": -47,
   "ppg": 14.8,
   "leagueRank": 215,
   "rating": -2,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": 0.5,
   "playerId": "699549b6-bbc0-49a5-9040-22cfbf13c422"
  },
  {
   "name": "Salman Saad",
   "gender": "Male",
   "team": "Monroe",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 2,
   "losses": 14,
   "pointsWon": 256,
   "totalPointsAgainst": 329,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 14,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 12.5,
   "diff": -73,
   "ppg": 16,
   "leagueRank": 191,
   "rating": -1.2,
   "ratingGames": 16,
   "confidence": 77,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 0.9,
   "playerId": "f7c4d103-d246-456d-8fd5-6418c6a0e002"
  },
  {
   "name": "Robert Finley",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 5,
   "losses": 36,
   "pointsWon": 623,
   "totalPointsAgainst": 838,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 36,
   "clutchWins": 2,
   "clutchLosses": 7,
   "winPct": 12.2,
   "diff": -215,
   "ppg": 15.2,
   "leagueRank": 184,
   "rating": -2.6,
   "ratingGames": 41,
   "confidence": 89,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.6,
   "playerId": "0d70122a-9002-461f-8600-a9afed2e8c3f"
  },
  {
   "name": "Riguo Zheng",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 5,
   "losses": 36,
   "pointsWon": 615,
   "totalPointsAgainst": 840,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 36,
   "clutchWins": 3,
   "clutchLosses": 6,
   "winPct": 12.2,
   "diff": -225,
   "ppg": 15,
   "leagueRank": 187,
   "rating": -2.9,
   "ratingGames": 41,
   "confidence": 89,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.5,
   "playerId": "c5fa0e7c-eb97-45fa-8a86-850a918fff54"
  },
  {
   "name": "Jay Alquiros",
   "gender": "Male",
   "team": "Flemington",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 3,
   "losses": 26,
   "pointsWon": 421,
   "totalPointsAgainst": 599,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 26,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 10.3,
   "diff": -178,
   "ppg": 14.5,
   "leagueRank": 192,
   "rating": -4,
   "ratingGames": 29,
   "confidence": 85,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.5,
   "playerId": "a3dbb909-29a5-4aa0-a40f-42bed311f9cd"
  },
  {
   "name": "Wasib Malik",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 2,
   "losses": 18,
   "pointsWon": 313,
   "totalPointsAgainst": 414,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 18,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 10,
   "diff": -101,
   "ppg": 15.7,
   "leagueRank": 195,
   "rating": -3,
   "ratingGames": 20,
   "confidence": 80,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.6,
   "playerId": "659c9638-b908-4ddd-88a9-2bc40c334a08"
  },
  {
   "name": "Steve Susskind",
   "gender": "Male",
   "team": "Monroe",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 1,
   "losses": 10,
   "pointsWon": 176,
   "totalPointsAgainst": 221,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 10,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 9.1,
   "diff": -45,
   "ppg": 16,
   "leagueRank": 206,
   "rating": -2,
   "ratingGames": 11,
   "confidence": 69,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.2,
   "playerId": "a9df21e2-b62a-4af0-a793-80f0de708466"
  },
  {
   "name": "Nicholas Vanderveer",
   "gender": "Male",
   "team": "Monroe",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 1,
   "losses": 14,
   "pointsWon": 253,
   "totalPointsAgainst": 313,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 14,
   "clutchWins": 1,
   "clutchLosses": 5,
   "winPct": 6.7,
   "diff": -60,
   "ppg": 16.9,
   "leagueRank": 198,
   "rating": -0.8,
   "ratingGames": 15,
   "confidence": 75,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": 0.6,
   "playerId": "4d33c53f-a066-4543-b2cf-313c11165227"
  },
  {
   "name": "Eric Gibbs",
   "gender": "Male",
   "team": "Bounce Tempest",
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
   "playerId": "0c1a11c0-7f89-48fa-af2f-3f9925039239"
  },
  {
   "name": "Michael Vargetto",
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
   "leagueRank": 244,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "18c27a5c-a694-4777-98fc-4feff755d047"
  },
  {
   "name": "Gage Cvijic",
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
   "leagueRank": 232,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "4572bf15-1066-42b7-ae74-94d6175b1b96"
  },
  {
   "name": "Aaron Pine",
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
   "leagueRank": 239,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "4aea9e80-552f-49b8-9118-c03af246e089"
  },
  {
   "name": "Francisco De Leon",
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
   "leagueRank": 234,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "63186871-d2ca-4525-b04a-2ba9c05349d3"
  },
  {
   "name": "Chase Thomas",
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
   "leagueRank": 242,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "76874590-6501-40f8-ab24-7df0fb631c71"
  },
  {
   "name": "Doug Horton",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 88,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 0,
   "diff": -38,
   "ppg": 14.7,
   "leagueRank": 226,
   "rating": -3.6,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0,
   "playerId": "b0b23784-946d-4ba9-bfc9-e3a81d6ead7c"
  },
  {
   "name": "Nicholas Howcumfu",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 0,
   "losses": 7,
   "pointsWon": 107,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -40,
   "ppg": 15.3,
   "leagueRank": 223,
   "rating": -2.2,
   "ratingGames": 7,
   "confidence": 60,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.8,
   "playerId": "31ce4087-c3ba-4db5-878a-c4c19a52f2a3"
  },
  {
   "name": "Christopher Ullo",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 0,
   "losses": 8,
   "pointsWon": 127,
   "totalPointsAgainst": 168,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 8,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 0,
   "diff": -41,
   "ppg": 15.9,
   "leagueRank": 220,
   "rating": -2.8,
   "ratingGames": 8,
   "confidence": 65,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.7,
   "playerId": "40abb6aa-9678-431b-8b5c-6f140f00c5bc"
  },
  {
   "name": "Dan Lougheed",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 0,
   "losses": 7,
   "pointsWon": 105,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 0,
   "diff": -42,
   "ppg": 15,
   "leagueRank": 222,
   "rating": -1.2,
   "ratingGames": 7,
   "confidence": 60,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 1.5,
   "playerId": "538f12a5-bf62-46a7-9ada-583a86b84ec0"
  },
  {
   "name": "Nirav Solanki",
   "gender": "Male",
   "team": "Monroe",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 82,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -44,
   "ppg": 13.7,
   "leagueRank": 224,
   "rating": -3,
   "ratingGames": 6,
   "confidence": 57,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.6,
   "playerId": "938658e5-f3f0-4597-8d1b-8d65a9378673"
  },
  {
   "name": "Craig Brown",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 71,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -55,
   "ppg": 11.8,
   "leagueRank": 227,
   "rating": -3.7,
   "ratingGames": 6,
   "confidence": 57,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 1.5,
   "playerId": "38d82d4c-1321-4c6b-8b93-bfbd8439fcac"
  },
  {
   "name": "Jeffrey Lena",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 0,
   "losses": 7,
   "pointsWon": 89,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -58,
   "ppg": 12.7,
   "leagueRank": 225,
   "rating": -2.9,
   "ratingGames": 7,
   "confidence": 59,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": 1,
   "playerId": "f8183a0c-23a1-4b0f-99aa-fc50e5f58744"
  },
  {
   "name": "Peter Nagy",
   "gender": "Male",
   "team": "Flemington",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 0,
   "losses": 7,
   "pointsWon": 87,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -60,
   "ppg": 12.4,
   "leagueRank": 228,
   "rating": -4.8,
   "ratingGames": 7,
   "confidence": 60,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0,
   "playerId": "db98d397-2496-4147-943c-febe48812018"
  },
  {
   "name": "Rohan Sabharwal",
   "gender": "Male",
   "team": "Monroe",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 0,
   "losses": 15,
   "pointsWon": 222,
   "totalPointsAgainst": 315,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 15,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 0,
   "diff": -93,
   "ppg": 14.8,
   "leagueRank": 205,
   "rating": -2.8,
   "ratingGames": 15,
   "confidence": 76,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.9,
   "playerId": "a7de14f0-a8da-402c-9340-c57389b6736a"
  }
 ],
 "teams": [
  {
   "name": "Pickleball Kingdom Hillsborough",
   "w": 7,
   "l": 1,
   "pf": 5107,
   "pa": 4531,
   "gw": 170,
   "gl": 86,
   "diff": 576,
   "gameDiff": 84,
   "power": 1,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     170,
     86
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Pickleball Kingdom Watchung",
   "w": 8,
   "l": 2,
   "pf": 6106,
   "pa": 5657,
   "gw": 195,
   "gl": 125,
   "diff": 449,
   "gameDiff": 70,
   "power": 0.8,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     195,
     125
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Pickle House",
   "w": 7,
   "l": 2,
   "pf": 5663,
   "pa": 5221,
   "gw": 178,
   "gl": 110,
   "diff": 442,
   "gameDiff": 68,
   "power": 0.7,
   "powerRank": 1,
   "pod": 2,
   "reportedPod": "Southeast",
   "podName": "Southeast / Southwest",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     178,
     110
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
   "l": 2,
   "pf": 5189,
   "pa": 4549,
   "gw": 168,
   "gl": 88,
   "diff": 640,
   "gameDiff": 80,
   "power": 1.1,
   "powerRank": 1,
   "pod": 2,
   "reportedPod": "Southwest",
   "podName": "Southeast / Southwest",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     168,
     88
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Bounce Tempest",
   "w": 6,
   "l": 3,
   "pf": 5614,
   "pa": 5509,
   "gw": 156,
   "gl": 132,
   "diff": 105,
   "gameDiff": 24,
   "power": 0.4,
   "powerRank": 2,
   "pod": 2,
   "reportedPod": "Southwest",
   "podName": "Southeast / Southwest",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     156,
     132
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Dill Dinkers Freehold",
   "w": 5,
   "l": 3,
   "pf": 4981,
   "pa": 4737,
   "gw": 149,
   "gl": 107,
   "diff": 244,
   "gameDiff": 42,
   "power": 0.8,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     149,
     107
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Premiere",
   "w": 5,
   "l": 3,
   "pf": 5020,
   "pa": 4768,
   "gw": 147,
   "gl": 109,
   "diff": 252,
   "gameDiff": 38,
   "power": 0.7,
   "powerRank": 4,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     147,
     109
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Jersey Devil",
   "w": 4,
   "l": 4,
   "pf": 4946,
   "pa": 4939,
   "gw": 127,
   "gl": 129,
   "diff": 7,
   "gameDiff": -2,
   "power": 0.4,
   "powerRank": 2,
   "pod": 2,
   "reportedPod": "Southeast",
   "podName": "Southeast / Southwest",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     127,
     129
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
   "l": 7,
   "pf": 5955,
   "pa": 6251,
   "gw": 136,
   "gl": 184,
   "diff": -296,
   "gameDiff": -48,
   "power": 0.1,
   "powerRank": 3,
   "pod": 2,
   "reportedPod": "Southwest",
   "podName": "Southeast / Southwest",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     136,
     184
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Jersey Pickleball Club",
   "w": 2,
   "l": 6,
   "pf": 4521,
   "pa": 4899,
   "gw": 95,
   "gl": 161,
   "diff": -378,
   "gameDiff": -66,
   "power": 0,
   "powerRank": 5,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     95,
     161
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Flemington",
   "w": 2,
   "l": 7,
   "pf": 5114,
   "pa": 5576,
   "gw": 113,
   "gl": 175,
   "diff": -462,
   "gameDiff": -62,
   "power": -0.4,
   "powerRank": 6,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     113,
     175
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
   "l": 7,
   "pf": 3732,
   "pa": 4413,
   "gw": 59,
   "gl": 165,
   "diff": -681,
   "gameDiff": -106,
   "power": -1.2,
   "powerRank": 7,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     59,
     165
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "ACE Moorestown",
   "w": 0,
   "l": 8,
   "pf": 4337,
   "pa": 5235,
   "gw": 67,
   "gl": 189,
   "diff": -898,
   "gameDiff": -122,
   "power": -1,
   "powerRank": 3,
   "pod": 2,
   "reportedPod": "Southeast",
   "podName": "Southeast / Southwest",
   "fmt": {
    "mixed": [
     0,
     0
    ],
    "male": [
     67,
     189
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
   "a": "Neel Goyal",
   "b": "Marc Padre",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 3.4,
   "avgActual": 10.3,
   "avgExpected": 2.5,
   "aId": "8cfc8650-92ac-4ed4-9b57-2692526abd19",
   "bId": "a131a707-f20e-4838-9dcf-7cecb40c2705"
  },
  {
   "a": "Austin Gow",
   "b": "Mark Kilimnik",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 2.8,
   "avgActual": 7.3,
   "avgExpected": 1.7,
   "aId": "0e577096-0b13-441d-b087-cc49cb55cfe2",
   "bId": "d6c15f91-4cc9-4612-8ec3-8f4ebd4e0cc1"
  },
  {
   "a": "Rob Pandolfi",
   "b": "Nicholas Como",
   "team": "Premiere",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.8,
   "avgActual": 8.3,
   "avgExpected": 1.8,
   "aId": "081fc233-7f01-432d-85f9-c623b0524f49",
   "bId": "a286a593-65d0-4119-a211-3cd57bba652a"
  },
  {
   "a": "Robert Finley",
   "b": "Marc Harden",
   "team": "ACE Moorestown",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 2.6,
   "avgActual": -0.6,
   "avgExpected": -5.2,
   "aId": "0d70122a-9002-461f-8600-a9afed2e8c3f",
   "bId": "55194d2f-f537-4e19-b901-86c559f25ef2"
  },
  {
   "a": "Shayne Clowar",
   "b": "Bryan Nardone",
   "team": "ACE Moorestown",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 2.4,
   "avgActual": 0.3,
   "avgExpected": -3.7,
   "aId": "30b75fd5-95cf-4a1a-b296-10e7e381166e",
   "bId": "a479d794-d9d0-4620-b322-b7f249f2ae5f"
  },
  {
   "a": "Nachiket Vaidya",
   "b": "Riguo Zheng",
   "team": "ACE Moorestown",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": 2.3,
   "avgActual": -1,
   "avgExpected": -5.2,
   "aId": "0e35b16c-8027-4994-b04f-fd146d6d1709",
   "bId": "c5fa0e7c-eb97-45fa-8a86-850a918fff54"
  },
  {
   "a": "Daniel Schwab",
   "b": "Ryan Furman",
   "team": "Jersey Devil",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 2.2,
   "avgActual": 5.5,
   "avgExpected": 1.1,
   "aId": "3382b214-0a3e-4005-aba4-084588de0d98",
   "bId": "a89121dd-192b-486d-b39d-18ee8447d641"
  },
  {
   "a": "Vince Abate",
   "b": "Tyler Arsenault",
   "team": "Jersey Devil",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 2,
   "avgActual": 4.7,
   "avgExpected": 1.4,
   "aId": "8257200c-7448-4527-92df-436d7bb18cac",
   "bId": "e76d2d63-f7dc-40e7-aca2-d9b3aecf4d3e"
  },
  {
   "a": "Hany Ibrahim",
   "b": "Robbie Oddy",
   "team": "Flemington",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 1.9,
   "avgActual": 3.5,
   "avgExpected": 0.4,
   "aId": "5b439439-36f5-421f-afaa-5d8b1a547954",
   "bId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6"
  },
  {
   "a": "Al Mancini",
   "b": "Michael Li",
   "team": "Pickle House",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.9,
   "avgActual": 7,
   "avgExpected": 2.5,
   "aId": "51352d99-02ac-4299-abac-a688bfade22f",
   "bId": "dc81629b-4ff7-45c4-b38e-b3b836bc0769"
  },
  {
   "a": "Yoon Choi",
   "b": "Harrison Mui",
   "team": "Dill Dinkers Freehold",
   "n": 6,
   "w": 6,
   "l": 0,
   "synergy": 1.9,
   "avgActual": 4,
   "avgExpected": 0.8,
   "aId": "f3f6a49d-fd44-4f24-bb92-b3d04b50a3d9",
   "bId": "fa1d3cb9-cd76-4f49-8024-c6224aa5b7c1"
  },
  {
   "a": "Scott Bohrer",
   "b": "Ryan Rosen",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.9,
   "avgActual": 6,
   "avgExpected": 2.3,
   "aId": "7c8310a8-1a97-4c04-bbc0-519fe4132685",
   "bId": "97f2b250-2030-4296-be61-63cffb17043b"
  },
  {
   "a": "Mickey Cook",
   "b": "Michael Li",
   "team": "Pickle House",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.8,
   "avgActual": 9.5,
   "avgExpected": 6,
   "aId": "3babc519-f395-4ef7-8f6f-b38d25c139d0",
   "bId": "dc81629b-4ff7-45c4-b38e-b3b836bc0769"
  },
  {
   "a": "Ron Branca",
   "b": "William Lee",
   "team": "Picklr Newtown",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.8,
   "avgActual": 4.3,
   "avgExpected": 0.7,
   "aId": "2caf34a7-c53c-410c-a7b4-47dd61398830",
   "bId": "9e264c96-36cf-45a9-90ad-1e125a82c851"
  },
  {
   "a": "Scott Bohrer",
   "b": "Vaughn Lawrence",
   "team": "Bounce Malvern",
   "n": 9,
   "w": 6,
   "l": 3,
   "synergy": 1.8,
   "avgActual": 3.7,
   "avgExpected": 1.1,
   "aId": "7c8310a8-1a97-4c04-bbc0-519fe4132685",
   "bId": "d4c1185c-6147-4164-90e1-06ecfa162596"
  },
  {
   "a": "Marr Flores",
   "b": "Kevin Sun",
   "team": "Pickleball Kingdom Watchung",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 1.8,
   "avgActual": 3.4,
   "avgExpected": 0.1,
   "aId": "1009522f-1f54-4cf1-a0a0-e24ad64f4a66",
   "bId": "88c57c1f-436b-4280-9bd7-75eafe496b70"
  },
  {
   "a": "Shahar Gelber",
   "b": "Robbie Oddy",
   "team": "Flemington",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.8,
   "avgActual": 8.7,
   "avgExpected": 4.5,
   "aId": "7efd9bc6-6b2f-4e98-b785-136fea990664",
   "bId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6"
  },
  {
   "a": "Sean O'Connell",
   "b": "Robbie Oddy",
   "team": "Flemington",
   "n": 9,
   "w": 7,
   "l": 2,
   "synergy": 1.7,
   "avgActual": 3.9,
   "avgExpected": 1.4,
   "aId": "6d9b173b-57b7-499c-9bde-9bdafd152968",
   "bId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6"
  },
  {
   "a": "Anthony Fallet",
   "b": "Frank Clark",
   "team": "Flemington",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 1.7,
   "avgActual": 2,
   "avgExpected": -0.8,
   "aId": "1949e493-55f0-4373-8c61-6a266543ddbf",
   "bId": "fb42e711-528f-4028-80c6-e32013e3f807"
  },
  {
   "a": "Christopher Natividad",
   "b": "Stanley Bonczek",
   "team": "Pickleball Kingdom Watchung",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.7,
   "avgActual": 4.3,
   "avgExpected": 0.8,
   "aId": "d0db1fca-1182-4e0e-8d5c-980be84ac87f",
   "bId": "f4cd45db-8d83-423a-8936-c7d7a3b0ffad"
  },
  {
   "a": "Daniel Ehala",
   "b": "Matthew Mintz",
   "team": "ACE Moorestown",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 1.6,
   "avgActual": 1.4,
   "avgExpected": -1.2,
   "aId": "2ee28d63-2f38-468f-b824-9b17aa938413",
   "bId": "ad956d26-e552-40eb-97c4-38edfc1b0bc1"
  },
  {
   "a": "Michael Rapaglia",
   "b": "Matthew Friedman",
   "team": "Premiere",
   "n": 9,
   "w": 7,
   "l": 2,
   "synergy": 1.6,
   "avgActual": 4.9,
   "avgExpected": 2.6,
   "aId": "0b84dcdf-2b96-4a9e-9eae-5523bf89c4f6",
   "bId": "259fc7aa-7e69-4830-87d8-b9a758ec7fda"
  },
  {
   "a": "Zachary Lessner",
   "b": "Brandyn Schuchart",
   "team": "Bounce Tempest",
   "n": 10,
   "w": 9,
   "l": 1,
   "synergy": 1.6,
   "avgActual": 3.6,
   "avgExpected": 1.3,
   "aId": "2ce5ebef-8079-4871-8d2e-b34988abbaad",
   "bId": "9d821d34-4af3-4e4a-999d-25308b75ca0f"
  },
  {
   "a": "Vaughn Mcclelland",
   "b": "Braden Keith",
   "team": "Jersey Devil",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 1.6,
   "avgActual": 2.1,
   "avgExpected": -0.4,
   "aId": "c33f3ff1-2c81-4630-8980-64fa03a7b102",
   "bId": "d23d47c0-4f40-4691-b81a-9ad6e36402b6"
  },
  {
   "a": "Chris Damato",
   "b": "Deepak Sunku",
   "team": "Pickle House",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.5,
   "avgActual": 7.3,
   "avgExpected": 3.9,
   "aId": "445e89c8-a23c-440c-bd3c-7eab366bdd85",
   "bId": "ce590106-6f19-43b7-8a91-4dc31d28eb31"
  },
  {
   "a": "Andrew Bernard",
   "b": "Gary Sidhu",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.5,
   "avgActual": 1.3,
   "avgExpected": -1.6,
   "aId": "8079e74f-c537-4e42-9590-e8d60f10ba3d",
   "bId": "fa28fec9-9eff-4831-912d-4180f8760eeb"
  },
  {
   "a": "Josh Knupp",
   "b": "Alex Mihalca",
   "team": "Bounce Tempest",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 1.7,
   "avgExpected": -1.7,
   "aId": "292c729f-c522-4f41-8208-e1caf7f94498",
   "bId": "47054f48-f7f3-4a11-8a3c-03160ea588b6"
  },
  {
   "a": "Josh Knupp",
   "b": "Hiep Pham",
   "team": "Bounce Tempest",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 6.3,
   "avgExpected": 2.9,
   "aId": "292c729f-c522-4f41-8208-e1caf7f94498",
   "bId": "515009fd-ac6a-4124-a871-dff85a118781"
  },
  {
   "a": "Chenfei Gao",
   "b": "Adam Weinstock",
   "team": "Dill Dinkers Freehold",
   "n": 8,
   "w": 7,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 2.8,
   "avgExpected": 0.6,
   "aId": "3807d345-e2d6-4e75-9a59-9248ebf6e296",
   "bId": "8ced9183-490f-465f-8683-62071a6d706d"
  },
  {
   "a": "Eugene Zaslavsky",
   "b": "Samuel Levinson",
   "team": "Dill Dinkers Freehold",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 1.5,
   "avgActual": 6,
   "avgExpected": 3.3,
   "aId": "9638b474-ad68-4eff-a5a5-6c40db6ed4bb",
   "bId": "e3d7c7c2-6222-4f4d-b6b3-37931f24274b"
  },
  {
   "a": "Anthony Bradford Bisignano",
   "b": "Matt Schall",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 4.3,
   "avgExpected": 0.9,
   "aId": "7ce7d3d1-b44b-431c-b3a5-20e153cc1777",
   "bId": "aa0d9944-a9d3-46d5-8650-54e894adfeb2"
  },
  {
   "a": "Andy Ead",
   "b": "Austin Williams",
   "team": "Flemington",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 1.5,
   "avgActual": 2,
   "avgExpected": -0.4,
   "aId": "6c4d1df7-7f8f-432b-a8a7-8751e9aa521d",
   "bId": "bb0bdc33-be20-4a45-9de9-0a52a88d7af9"
  },
  {
   "a": "Daniel Gallegos",
   "b": "Kevin Sun",
   "team": "Pickleball Kingdom Watchung",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 1.4,
   "avgActual": 1.6,
   "avgExpected": -0.6,
   "aId": "6f9cb35b-f24c-4480-a8b4-86e6ea32f3c2",
   "bId": "88c57c1f-436b-4280-9bd7-75eafe496b70"
  },
  {
   "a": "Matthew Friedman",
   "b": "Chris Frangipane",
   "team": "Premiere",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.4,
   "avgActual": 2.5,
   "avgExpected": -0.4,
   "aId": "259fc7aa-7e69-4830-87d8-b9a758ec7fda",
   "bId": "e8bb81fd-869a-459d-8108-b9ac6bc1b84d"
  },
  {
   "a": "Lou Frignito",
   "b": "Shawn Ganow",
   "team": "Bounce Malvern",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 1.4,
   "avgActual": 4.3,
   "avgExpected": 2.2,
   "aId": "1afca308-dca6-4828-946a-0ca6ad1b0c44",
   "bId": "1e340ccb-0e0f-4b6b-b760-d1a723561d04"
  },
  {
   "a": "Shreyas Pani",
   "b": "Thomas Connolly",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 6,
   "w": 6,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 7,
   "avgExpected": 4.6,
   "aId": "3cebd01c-ff32-4544-b6a6-2a68152b2ee5",
   "bId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3"
  },
  {
   "a": "Nachiket Vaidya",
   "b": "Tyler Marlin",
   "team": "ACE Moorestown",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": 1.4,
   "avgActual": -0.7,
   "avgExpected": -2.9,
   "aId": "0e35b16c-8027-4994-b04f-fd146d6d1709",
   "bId": "bf530f1a-96e0-484c-b377-f1243f05571b"
  },
  {
   "a": "Tim Dowd",
   "b": "Frank Clark",
   "team": "Flemington",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": 1.4,
   "avgActual": -1.8,
   "avgExpected": -4.2,
   "aId": "b7555b30-f1b5-4d44-9eff-dffd3e1b1b28",
   "bId": "fb42e711-528f-4028-80c6-e32013e3f807"
  },
  {
   "a": "Camrin Cronheim",
   "b": "Sidd Pathare",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 6.7,
   "avgExpected": 3.4,
   "aId": "8143def5-d564-4010-8258-ccb71cd481f1",
   "bId": "a73f249d-c1c9-4516-bc79-e9732581f098"
  },
  {
   "a": "Ethan Henigan",
   "b": "Tim Cahalin",
   "team": "Picklr Newtown",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 1.5,
   "avgExpected": -1.4,
   "aId": "4a1d4e3a-07b2-4575-b80d-6d160b0c7a23",
   "bId": "7610b0d0-07a5-4408-ade6-d5ea5d80fe0a"
  },
  {
   "a": "Sheel Motiwala",
   "b": "Tyler Arsenault",
   "team": "Jersey Devil",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 6.7,
   "avgExpected": 3.4,
   "aId": "e3f3e90d-b026-49f2-8194-45e9252b61f8",
   "bId": "e76d2d63-f7dc-40e7-aca2-d9b3aecf4d3e"
  },
  {
   "a": "Ian Chin",
   "b": "Neel Goyal",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 1.3,
   "avgActual": 4,
   "avgExpected": 2,
   "aId": "34d3737f-b8db-4d4c-bf25-6e8bb3524157",
   "bId": "8cfc8650-92ac-4ed4-9b57-2692526abd19"
  },
  {
   "a": "Matthew Eldridge",
   "b": "Al Mancini",
   "team": "Pickle House",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 1.3,
   "avgActual": 1.2,
   "avgExpected": -0.9,
   "aId": "19cb95ac-bec2-41bb-a6ce-767d51e00f24",
   "bId": "51352d99-02ac-4299-abac-a688bfade22f"
  },
  {
   "a": "Joshua Mindlin",
   "b": "Derek Callihan",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 1.7,
   "avgExpected": -1.4,
   "aId": "439d9ebf-9409-4214-ad91-7c18a0153c71",
   "bId": "5eccfff7-0902-4be1-a70e-361ff447bf6a"
  },
  {
   "a": "Adriene Khon",
   "b": "Justin Chin",
   "team": "Bounce Tempest",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 1.3,
   "avgActual": 3.3,
   "avgExpected": 1.3,
   "aId": "02ac193a-6e5d-4859-80bf-c8c25a89c1c8",
   "bId": "9fa77cf9-39da-4bfe-8ada-d01143ca498c"
  },
  {
   "a": "Shashank Kamdar",
   "b": "Dustin Rabinowitz",
   "team": "Bounce Malvern",
   "n": 6,
   "w": 6,
   "l": 0,
   "synergy": 1.3,
   "avgActual": 8.3,
   "avgExpected": 6.1,
   "aId": "56db4b56-6166-437f-8ece-26576b7042e5",
   "bId": "d23839c0-334b-4423-9305-0c6281523d5d"
  },
  {
   "a": "Austin Gow",
   "b": "Anushk Gupta",
   "team": "Bounce Malvern",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 4.1,
   "avgExpected": 2.1,
   "aId": "0e577096-0b13-441d-b087-cc49cb55cfe2",
   "bId": "1a851b17-0445-4807-b476-575fd261f774"
  },
  {
   "a": "Tarkan Akas",
   "b": "Dipen Bhatt",
   "team": "Pickle House",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 1.3,
   "avgActual": 0.8,
   "avgExpected": -1.6,
   "aId": "7fd926bd-8473-435e-9330-5984c0637b19",
   "bId": "fe8af1d3-ff62-430d-90af-32794cc7b912"
  },
  {
   "a": "Aleksey Sergeev",
   "b": "Jacob Rosengarten",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 2.3,
   "avgExpected": -0.6,
   "aId": "80467dc7-edfb-46e8-a30a-b6acd19ee222",
   "bId": "b2f8ea85-7734-47a2-8ce7-bd968b3a51bc"
  },
  {
   "a": "Josiah Kim",
   "b": "Stanley Bonczek",
   "team": "Pickleball Kingdom Watchung",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 1.2,
   "avgActual": 1.3,
   "avgExpected": -1.2,
   "aId": "de8e2a33-d691-4652-84ef-532b89f467bc",
   "bId": "f4cd45db-8d83-423a-8936-c7d7a3b0ffad"
  },
  {
   "a": "Elliott Albanese",
   "b": "Thomas Connolly",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 1.2,
   "avgActual": 3.1,
   "avgExpected": 1.2,
   "aId": "6af88387-5e2b-4ea7-b732-22885e4931a8",
   "bId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3"
  },
  {
   "a": "Camrin Cronheim",
   "b": "Keith Shedlock",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.2,
   "avgActual": 0.3,
   "avgExpected": -2.5,
   "aId": "8143def5-d564-4010-8258-ccb71cd481f1",
   "bId": "f4b44cd7-fc9a-41a2-b569-cdaf08b0bf26"
  },
  {
   "a": "Elliott Albanese",
   "b": "Jason Makarevic",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 9,
   "w": 8,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 3.2,
   "avgExpected": 1.5,
   "aId": "6af88387-5e2b-4ea7-b732-22885e4931a8",
   "bId": "f8835822-da21-4593-8b99-5665d2c2f3af"
  },
  {
   "a": "Boris Tserlin",
   "b": "Gary White",
   "team": "Premiere",
   "n": 13,
   "w": 10,
   "l": 3,
   "synergy": 1.2,
   "avgActual": 2.9,
   "avgExpected": 1.4,
   "aId": "6c71dd2d-6f76-4630-96d4-27f58e99e557",
   "bId": "9a26eab9-96be-45e1-b380-2845a0e8e668"
  },
  {
   "a": "Sebastian Ferrer",
   "b": "Zach Hizer",
   "team": "Jersey Pickleball Club",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 1.2,
   "avgActual": 0.2,
   "avgExpected": -1.8,
   "aId": "5c354e5d-09ba-4d09-a8c4-76e0fb7eb78a",
   "bId": "b5e576e1-d16d-4c9d-ab28-2e1b1e66487b"
  },
  {
   "a": "Lou Frignito",
   "b": "Vaughn Lawrence",
   "team": "Bounce Malvern",
   "n": 12,
   "w": 12,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 6.7,
   "avgExpected": 5,
   "aId": "1afca308-dca6-4828-946a-0ca6ad1b0c44",
   "bId": "d4c1185c-6147-4164-90e1-06ecfa162596"
  },
  {
   "a": "Zach Hollmann",
   "b": "Michael Li",
   "team": "Pickle House",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 1.2,
   "avgActual": 4.3,
   "avgExpected": 2.4,
   "aId": "8aef2d8a-0bd4-45df-b5d1-1a120a81ef0f",
   "bId": "dc81629b-4ff7-45c4-b38e-b3b836bc0769"
  },
  {
   "a": "Bryan Nardone",
   "b": "Jack Blumberg",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 0.3,
   "avgExpected": -2.6,
   "aId": "a479d794-d9d0-4620-b322-b7f249f2ae5f",
   "bId": "f2929b28-a6ee-45e5-9846-da957b6d8734"
  },
  {
   "a": "Eric Nguyen",
   "b": "Alex Boory",
   "team": "Bounce Tempest",
   "n": 6,
   "w": 6,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 2.7,
   "avgExpected": 0.7,
   "aId": "87d526c6-72b6-4b17-bf77-9016fd049541",
   "bId": "897f1edf-63f3-4eec-bcf5-d5a1bf0be859"
  },
  {
   "a": "Julius Degen",
   "b": "Rohan Sabharwal",
   "team": "Monroe",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 1.2,
   "avgActual": -3.7,
   "avgExpected": -6.4,
   "aId": "3a828946-f189-43be-905a-00c20a3b0b84",
   "bId": "a7de14f0-a8da-402c-9340-c57389b6736a"
  },
  {
   "a": "Snehit Achanta",
   "b": "Rahul Purwah",
   "team": "Monroe",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 1.1,
   "avgActual": -1,
   "avgExpected": -2.9,
   "aId": "6e17bc1f-6adf-4354-8e03-e37860c1869b",
   "bId": "b19effeb-3b70-4f48-b8d9-781026933e86"
  },
  {
   "a": "Ken Velarde",
   "b": "Stanley Bonczek",
   "team": "Pickleball Kingdom Watchung",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.1,
   "avgActual": 3,
   "avgExpected": 0.5,
   "aId": "25aa47d0-76b8-48be-a5be-b1d33b423e82",
   "bId": "f4cd45db-8d83-423a-8936-c7d7a3b0ffad"
  },
  {
   "a": "Ian Chin",
   "b": "Jason Makarevic",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 6,
   "w": 6,
   "l": 0,
   "synergy": 1.1,
   "avgActual": 6.7,
   "avgExpected": 4.8,
   "aId": "34d3737f-b8db-4d4c-bf25-6e8bb3524157",
   "bId": "f8835822-da21-4593-8b99-5665d2c2f3af"
  },
  {
   "a": "Shayne Clowar",
   "b": "Vineeth Mathew",
   "team": "ACE Moorestown",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 1.1,
   "avgActual": -2.2,
   "avgExpected": -4.4,
   "aId": "30b75fd5-95cf-4a1a-b296-10e7e381166e",
   "bId": "329df703-2af3-46cd-a7ae-372a1956536e"
  },
  {
   "a": "Hiep Pham",
   "b": "Justin Chin",
   "team": "Bounce Tempest",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 1.1,
   "avgActual": 1.2,
   "avgExpected": -0.6,
   "aId": "515009fd-ac6a-4124-a871-dff85a118781",
   "bId": "9fa77cf9-39da-4bfe-8ada-d01143ca498c"
  },
  {
   "a": "Jaco De Waal",
   "b": "Christian Lupica",
   "team": "Picklr Newtown",
   "n": 8,
   "w": 3,
   "l": 5,
   "synergy": 1.1,
   "avgActual": 0.5,
   "avgExpected": -1.1,
   "aId": "19407a76-031d-4be3-8ed8-ba88cccdfdd3",
   "bId": "ac97d2bc-5ee7-4285-8eb3-e5650a0f6f6e"
  },
  {
   "a": "Anushk Gupta",
   "b": "Jeff Zamorski",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 5,
   "avgExpected": 2.5,
   "aId": "1a851b17-0445-4807-b476-575fd261f774",
   "bId": "f8687730-86a2-4769-a38b-7c0269ee88f5"
  },
  {
   "a": "Tom Laiso",
   "b": "Adam Weinstock",
   "team": "Dill Dinkers Freehold",
   "n": 7,
   "w": 7,
   "l": 0,
   "synergy": 1.1,
   "avgActual": 6,
   "avgExpected": 4.3,
   "aId": "13918154-3673-4dae-946a-2c2d4ac8863f",
   "bId": "8ced9183-490f-465f-8683-62071a6d706d"
  },
  {
   "a": "William Lee",
   "b": "Thomas Fenton",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 6,
   "avgExpected": 3.4,
   "aId": "9e264c96-36cf-45a9-90ad-1e125a82c851",
   "bId": "c55df548-ee89-4493-9268-850675b96066"
  },
  {
   "a": "Joshua Octaviano",
   "b": "Anthony Bonaventura",
   "team": "Pickleball Kingdom Watchung",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.1,
   "avgActual": 7.5,
   "avgExpected": 5.2,
   "aId": "37c7c06b-1600-450e-9f14-61d397872bc6",
   "bId": "58836d9c-6a12-4ed7-853f-dcee1e00dadd"
  },
  {
   "a": "Anthony Bradford Bisignano",
   "b": "Zachary Puccia",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 0,
   "avgExpected": -2.6,
   "aId": "7ce7d3d1-b44b-431c-b3a5-20e153cc1777",
   "bId": "dd6582a2-1596-40b8-8a4c-fec00aaeb379"
  },
  {
   "a": "Michael Ksiezopolski",
   "b": "Rahul Purwah",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.1,
   "avgActual": -1.3,
   "avgExpected": -4,
   "aId": "73090c04-48a1-48b2-b638-55b1e656f4ed",
   "bId": "b19effeb-3b70-4f48-b8d9-781026933e86"
  },
  {
   "a": "Anthony Bonaventura",
   "b": "Eric Jiang",
   "team": "Pickleball Kingdom Watchung",
   "n": 10,
   "w": 9,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 4.5,
   "avgExpected": 3,
   "aId": "58836d9c-6a12-4ed7-853f-dcee1e00dadd",
   "bId": "5a604f85-b8f8-4084-8636-d403530fd480"
  },
  {
   "a": "Abhishekh Mehra",
   "b": "Rahul Purwah",
   "team": "Monroe",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 1.1,
   "avgActual": -1.5,
   "avgExpected": -3.3,
   "aId": "6e92db16-8465-411e-bc3f-935badc74f47",
   "bId": "b19effeb-3b70-4f48-b8d9-781026933e86"
  },
  {
   "a": "Christopher Venuto",
   "b": "Rahul Purwah",
   "team": "Monroe",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 3,
   "avgExpected": 0.8,
   "aId": "19d10737-b8cb-4106-9b6d-1c9aced87b19",
   "bId": "b19effeb-3b70-4f48-b8d9-781026933e86"
  },
  {
   "a": "Anthony Bonaventura",
   "b": "Zachary Lisojo",
   "team": "Pickleball Kingdom Watchung",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.1,
   "avgActual": 4.3,
   "avgExpected": 2.1,
   "aId": "58836d9c-6a12-4ed7-853f-dcee1e00dadd",
   "bId": "e2086778-379f-4d43-8ce7-6447129d8812"
  },
  {
   "a": "Jonathan Ksiezopolski",
   "b": "Brian O'Neill",
   "team": "Monroe",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": 1,
   "avgActual": -2.6,
   "avgExpected": -4.4,
   "aId": "20fe2f66-8825-4881-a325-b8fb78ee5ff6",
   "bId": "a00f55b9-a52a-4982-8ffc-9dbe4e66469e"
  },
  {
   "a": "Kevin Sun",
   "b": "Drew Youssef",
   "team": "Pickleball Kingdom Watchung",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 1,
   "avgActual": 1.8,
   "avgExpected": 0.2,
   "aId": "88c57c1f-436b-4280-9bd7-75eafe496b70",
   "bId": "d13d6c03-eea2-44f3-a497-965b1e95ea83"
  },
  {
   "a": "Brian Barenbaum",
   "b": "Braden Keith",
   "team": "Jersey Devil",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": 1,
   "avgActual": -0.8,
   "avgExpected": -2.6,
   "aId": "b95f46c6-d374-4e13-a57b-abd171b1c847",
   "bId": "d23d47c0-4f40-4691-b81a-9ad6e36402b6"
  },
  {
   "a": "Robert Finley",
   "b": "Matthew Mintz",
   "team": "ACE Moorestown",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 1,
   "avgActual": -1.5,
   "avgExpected": -3.1,
   "aId": "0d70122a-9002-461f-8600-a9afed2e8c3f",
   "bId": "ad956d26-e552-40eb-97c4-38edfc1b0bc1"
  },
  {
   "a": "Adriene Khon",
   "b": "Justin Bautista",
   "team": "Bounce Tempest",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1,
   "avgActual": 4.7,
   "avgExpected": 2.3,
   "aId": "02ac193a-6e5d-4859-80bf-c8c25a89c1c8",
   "bId": "27660961-6245-4b09-aafe-359ca3205797"
  },
  {
   "a": "Shreyas Pani",
   "b": "Neel Goyal",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1,
   "avgActual": 9.8,
   "avgExpected": 7.8,
   "aId": "3cebd01c-ff32-4544-b6a6-2a68152b2ee5",
   "bId": "8cfc8650-92ac-4ed4-9b57-2692526abd19"
  },
  {
   "a": "Joshua Octaviano",
   "b": "Fabricio Gaona",
   "team": "Pickleball Kingdom Watchung",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1,
   "avgActual": 5.7,
   "avgExpected": 3.4,
   "aId": "37c7c06b-1600-450e-9f14-61d397872bc6",
   "bId": "ee88d140-1a78-4776-85e0-3f982891576d"
  },
  {
   "a": "Eugene Zaslavsky",
   "b": "Yoon Choi",
   "team": "Dill Dinkers Freehold",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 1,
   "avgActual": 4.8,
   "avgExpected": 3.2,
   "aId": "9638b474-ad68-4eff-a5a5-6c40db6ed4bb",
   "bId": "f3f6a49d-fd44-4f24-bb92-b3d04b50a3d9"
  },
  {
   "a": "Rich Marcovecchio",
   "b": "Ali Husain",
   "team": "Pickle House",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1,
   "avgActual": 2.3,
   "avgExpected": 0,
   "aId": "08197a69-d447-4483-b3ae-7b232fb0655d",
   "bId": "09d614ca-a9b2-44b6-a402-51046c6883af"
  },
  {
   "a": "Christopher Venuto",
   "b": "Jonathan Ksiezopolski",
   "team": "Monroe",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1,
   "avgActual": -0.2,
   "avgExpected": -2.3,
   "aId": "19d10737-b8cb-4106-9b6d-1c9aced87b19",
   "bId": "20fe2f66-8825-4881-a325-b8fb78ee5ff6"
  },
  {
   "a": "Ivan Rios",
   "b": "Aleksey Sergeev",
   "team": "Monroe",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 0.9,
   "avgActual": 1,
   "avgExpected": -0.4,
   "aId": "5807a1c8-ca44-48d1-9dec-ee621a2817c2",
   "bId": "80467dc7-edfb-46e8-a30a-b6acd19ee222"
  },
  {
   "a": "Zach Hizer",
   "b": "Zachary Puccia",
   "team": "Jersey Pickleball Club",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.9,
   "avgActual": 0.3,
   "avgExpected": -1.2,
   "aId": "b5e576e1-d16d-4c9d-ab28-2e1b1e66487b",
   "bId": "dd6582a2-1596-40b8-8a4c-fec00aaeb379"
  },
  {
   "a": "Neil Ottrando",
   "b": "Gary White",
   "team": "Premiere",
   "n": 14,
   "w": 9,
   "l": 5,
   "synergy": 0.9,
   "avgActual": 2.6,
   "avgExpected": 1.5,
   "aId": "4de9fd52-8910-4c2f-9aad-e2e55a0e33a1",
   "bId": "9a26eab9-96be-45e1-b380-2845a0e8e668"
  },
  {
   "a": "Hiep Pham",
   "b": "Zyril Carilo",
   "team": "Bounce Tempest",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.9,
   "avgActual": -0.4,
   "avgExpected": -2.1,
   "aId": "515009fd-ac6a-4124-a871-dff85a118781",
   "bId": "b4efc48a-f302-4d27-8c35-0dac1e68eec8"
  },
  {
   "a": "Shawn Ganow",
   "b": "Dustin Rabinowitz",
   "team": "Bounce Malvern",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 3.7,
   "avgExpected": 2.1,
   "aId": "1e340ccb-0e0f-4b6b-b760-d1a723561d04",
   "bId": "d23839c0-334b-4423-9305-0c6281523d5d"
  },
  {
   "a": "Ryan Rosen",
   "b": "Vaughn Lawrence",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 4.5,
   "avgExpected": 2.8,
   "aId": "97f2b250-2030-4296-be61-63cffb17043b",
   "bId": "d4c1185c-6147-4164-90e1-06ecfa162596"
  },
  {
   "a": "Daniel Ehala",
   "b": "Marc Harden",
   "team": "ACE Moorestown",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.9,
   "avgActual": -2.5,
   "avgExpected": -4.2,
   "aId": "2ee28d63-2f38-468f-b824-9b17aa938413",
   "bId": "55194d2f-f537-4e19-b901-86c559f25ef2"
  },
  {
   "a": "Justin Chin",
   "b": "David Brandolph",
   "team": "Bounce Tempest",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 2.8,
   "avgExpected": 1,
   "aId": "9fa77cf9-39da-4bfe-8ada-d01143ca498c",
   "bId": "be10853a-1f2c-4b56-8fd7-902ddc686401"
  },
  {
   "a": "Adriene Khon",
   "b": "Ashwin Korde",
   "team": "Bounce Tempest",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 3.7,
   "avgExpected": 1.7,
   "aId": "02ac193a-6e5d-4859-80bf-c8c25a89c1c8",
   "bId": "f9f521ee-5f27-4f61-b4e0-4e0b9ad09aee"
  },
  {
   "a": "Christian Lupica",
   "b": "Zach Mcgowan",
   "team": "Picklr Newtown",
   "n": 11,
   "w": 7,
   "l": 4,
   "synergy": 0.9,
   "avgActual": 1.8,
   "avgExpected": 0.6,
   "aId": "ac97d2bc-5ee7-4285-8eb3-e5650a0f6f6e",
   "bId": "e71a8785-5959-4607-9af3-e3ac9e3c6d86"
  },
  {
   "a": "Rich Marcovecchio",
   "b": "Zach Hollmann",
   "team": "Pickle House",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 3.8,
   "avgExpected": 2,
   "aId": "08197a69-d447-4483-b3ae-7b232fb0655d",
   "bId": "8aef2d8a-0bd4-45df-b5d1-1a120a81ef0f"
  },
  {
   "a": "Ian Chin",
   "b": "Vivek Kumar",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 4.8,
   "avgExpected": 2.9,
   "aId": "34d3737f-b8db-4d4c-bf25-6e8bb3524157",
   "bId": "a472cebf-6bf1-42d1-9a41-fc8940cbb021"
  },
  {
   "a": "Thomas Connolly",
   "b": "Sidd Pathare",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 6.3,
   "avgExpected": 4.5,
   "aId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3",
   "bId": "a73f249d-c1c9-4516-bc79-e9732581f098"
  },
  {
   "a": "Julius Degen",
   "b": "Abhishekh Mehra",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.9,
   "avgActual": 0,
   "avgExpected": -2,
   "aId": "3a828946-f189-43be-905a-00c20a3b0b84",
   "bId": "6e92db16-8465-411e-bc3f-935badc74f47"
  },
  {
   "a": "Mickey Cook",
   "b": "Craig Frame",
   "team": "Pickle House",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 0.8,
   "avgActual": 2,
   "avgExpected": 0.8,
   "aId": "3babc519-f395-4ef7-8f6f-b38d25c139d0",
   "bId": "6043b3e3-217d-4ad3-bd5d-db9667b99bbc"
  },
  {
   "a": "Stephen Conger",
   "b": "Daniel Schwab",
   "team": "Jersey Devil",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.8,
   "avgActual": -1,
   "avgExpected": -2.8,
   "aId": "24e70ef7-b98e-459e-8a19-19a2b66a054e",
   "bId": "3382b214-0a3e-4005-aba4-084588de0d98"
  },
  {
   "a": "Alex Pecora",
   "b": "Tim Cahalin",
   "team": "Picklr Newtown",
   "n": 12,
   "w": 3,
   "l": 9,
   "synergy": 0.8,
   "avgActual": -2.1,
   "avgExpected": -3.2,
   "aId": "3533f5a2-d7ed-4fd3-b969-5117c0474452",
   "bId": "7610b0d0-07a5-4408-ade6-d5ea5d80fe0a"
  },
  {
   "a": "Tim Cahalin",
   "b": "William Lee",
   "team": "Picklr Newtown",
   "n": 17,
   "w": 7,
   "l": 10,
   "synergy": 0.8,
   "avgActual": -0.9,
   "avgExpected": -1.9,
   "aId": "7610b0d0-07a5-4408-ade6-d5ea5d80fe0a",
   "bId": "9e264c96-36cf-45a9-90ad-1e125a82c851"
  },
  {
   "a": "Zach Hizer",
   "b": "Kevin Wysoczynski",
   "team": "Jersey Pickleball Club",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.8,
   "avgActual": 1,
   "avgExpected": -0.5,
   "aId": "b5e576e1-d16d-4c9d-ab28-2e1b1e66487b",
   "bId": "f64f0cc2-6c82-4fe4-9992-747512700971"
  },
  {
   "a": "Matt Schall",
   "b": "Kevin Wysoczynski",
   "team": "Jersey Pickleball Club",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": 0.8,
   "avgActual": 1.5,
   "avgExpected": 0.3,
   "aId": "aa0d9944-a9d3-46d5-8650-54e894adfeb2",
   "bId": "f64f0cc2-6c82-4fe4-9992-747512700971"
  },
  {
   "a": "Matt Schall",
   "b": "Zach Hizer",
   "team": "Jersey Pickleball Club",
   "n": 10,
   "w": 8,
   "l": 2,
   "synergy": 0.8,
   "avgActual": 2.6,
   "avgExpected": 1.5,
   "aId": "aa0d9944-a9d3-46d5-8650-54e894adfeb2",
   "bId": "b5e576e1-d16d-4c9d-ab28-2e1b1e66487b"
  },
  {
   "a": "Mark Kilimnik",
   "b": "Jeff Zamorski",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.8,
   "avgActual": 4.3,
   "avgExpected": 2.7,
   "aId": "d6c15f91-4cc9-4612-8ec3-8f4ebd4e0cc1",
   "bId": "f8687730-86a2-4769-a38b-7c0269ee88f5"
  },
  {
   "a": "Nicholas Lagrua",
   "b": "Yoon Choi",
   "team": "Dill Dinkers Freehold",
   "n": 12,
   "w": 8,
   "l": 4,
   "synergy": 0.8,
   "avgActual": 3.6,
   "avgExpected": 2.5,
   "aId": "6f1df3a0-bfc7-4d3b-a5f5-0ee9f40da488",
   "bId": "f3f6a49d-fd44-4f24-bb92-b3d04b50a3d9"
  },
  {
   "a": "Anthony Bradford Bisignano",
   "b": "Andrew Bernard",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 1,
   "avgExpected": -1,
   "aId": "7ce7d3d1-b44b-431c-b3a5-20e153cc1777",
   "bId": "8079e74f-c537-4e42-9590-e8d60f10ba3d"
  },
  {
   "a": "Samuel Levinson",
   "b": "Yoon Choi",
   "team": "Dill Dinkers Freehold",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 4.3,
   "avgExpected": 3,
   "aId": "e3d7c7c2-6222-4f4d-b6b3-37931f24274b",
   "bId": "f3f6a49d-fd44-4f24-bb92-b3d04b50a3d9"
  },
  {
   "a": "Daniel Schwab",
   "b": "Tyler Arsenault",
   "team": "Jersey Devil",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 2,
   "avgExpected": 0,
   "aId": "3382b214-0a3e-4005-aba4-084588de0d98",
   "bId": "e76d2d63-f7dc-40e7-aca2-d9b3aecf4d3e"
  },
  {
   "a": "Matthew Chen",
   "b": "Braden Keith",
   "team": "Jersey Devil",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.8,
   "avgActual": -1,
   "avgExpected": -2.8,
   "aId": "68e9ac74-5119-4dbb-8503-72bcdbade183",
   "bId": "d23d47c0-4f40-4691-b81a-9ad6e36402b6"
  },
  {
   "a": "Chris Damato",
   "b": "Gopi Narayanan",
   "team": "Pickle House",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 3.8,
   "avgExpected": 2.4,
   "aId": "445e89c8-a23c-440c-bd3c-7eab366bdd85",
   "bId": "5d55a4c4-8271-4e7b-b018-3da88a97c5fe"
  },
  {
   "a": "Rich Marcovecchio",
   "b": "Mickey Cook",
   "team": "Pickle House",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.8,
   "avgActual": 1.7,
   "avgExpected": -0.1,
   "aId": "08197a69-d447-4483-b3ae-7b232fb0655d",
   "bId": "3babc519-f395-4ef7-8f6f-b38d25c139d0"
  },
  {
   "a": "Caesar Gene",
   "b": "Marcin Glowacki",
   "team": "Dill Dinkers Freehold",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.8,
   "avgActual": -0.3,
   "avgExpected": -2.2,
   "aId": "a0aa8b27-3980-4abd-a62c-62d801cb0a82",
   "bId": "e47d28f2-187f-4aa7-acb8-356787ff82e5"
  },
  {
   "a": "Daniel Schwab",
   "b": "Braden Keith",
   "team": "Jersey Devil",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.8,
   "avgActual": -1.4,
   "avgExpected": -2.8,
   "aId": "3382b214-0a3e-4005-aba4-084588de0d98",
   "bId": "d23d47c0-4f40-4691-b81a-9ad6e36402b6"
  },
  {
   "a": "David Osborne",
   "b": "Tim Dowd",
   "team": "Flemington",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.8,
   "avgActual": -2.7,
   "avgExpected": -4.5,
   "aId": "418e7ba5-3e06-40ec-9b83-19d3bf10c9cb",
   "bId": "b7555b30-f1b5-4d44-9eff-dffd3e1b1b28"
  },
  {
   "a": "Hany Ibrahim",
   "b": "Hans Tang",
   "team": "Flemington",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.7,
   "avgActual": -0.5,
   "avgExpected": -1.9,
   "aId": "5b439439-36f5-421f-afaa-5d8b1a547954",
   "bId": "b4694087-759d-4570-9394-3e7c99f19099"
  },
  {
   "a": "Hany Ibrahim",
   "b": "Jay Alquiros",
   "team": "Flemington",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.7,
   "avgActual": -7.3,
   "avgExpected": -8.9,
   "aId": "5b439439-36f5-421f-afaa-5d8b1a547954",
   "bId": "a3dbb909-29a5-4aa0-a40f-42bed311f9cd"
  },
  {
   "a": "Ken Velarde",
   "b": "Drew Youssef",
   "team": "Pickleball Kingdom Watchung",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.7,
   "avgActual": 2,
   "avgExpected": 0.7,
   "aId": "25aa47d0-76b8-48be-a5be-b1d33b423e82",
   "bId": "d13d6c03-eea2-44f3-a497-965b1e95ea83"
  },
  {
   "a": "Mickey Cook",
   "b": "Tarkan Akas",
   "team": "Pickle House",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": 0.7,
   "avgActual": 1.5,
   "avgExpected": 0.4,
   "aId": "3babc519-f395-4ef7-8f6f-b38d25c139d0",
   "bId": "7fd926bd-8473-435e-9330-5984c0637b19"
  },
  {
   "a": "Al Mancini",
   "b": "Dipen Bhatt",
   "team": "Pickle House",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 1.8,
   "avgExpected": 0.7,
   "aId": "51352d99-02ac-4299-abac-a688bfade22f",
   "bId": "fe8af1d3-ff62-430d-90af-32794cc7b912"
  },
  {
   "a": "Boris Tserlin",
   "b": "Chris Frangipane",
   "team": "Premiere",
   "n": 9,
   "w": 8,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 3.9,
   "avgExpected": 2.8,
   "aId": "6c71dd2d-6f76-4630-96d4-27f58e99e557",
   "bId": "e8bb81fd-869a-459d-8108-b9ac6bc1b84d"
  },
  {
   "a": "Kevin Wysoczynski",
   "b": "Gary Sidhu",
   "team": "Jersey Pickleball Club",
   "n": 12,
   "w": 8,
   "l": 4,
   "synergy": 0.7,
   "avgActual": 0.4,
   "avgExpected": -0.5,
   "aId": "f64f0cc2-6c82-4fe4-9992-747512700971",
   "bId": "fa28fec9-9eff-4831-912d-4180f8760eeb"
  },
  {
   "a": "Ali Husain",
   "b": "Dipen Bhatt",
   "team": "Pickle House",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 3.4,
   "avgExpected": 2.2,
   "aId": "09d614ca-a9b2-44b6-a402-51046c6883af",
   "bId": "fe8af1d3-ff62-430d-90af-32794cc7b912"
  },
  {
   "a": "Ali Husain",
   "b": "Matthew Eldridge",
   "team": "Pickle House",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 3,
   "avgExpected": 1.4,
   "aId": "09d614ca-a9b2-44b6-a402-51046c6883af",
   "bId": "19cb95ac-bec2-41bb-a6ce-767d51e00f24"
  },
  {
   "a": "Joseph Lynskey",
   "b": "Neil Ottrando",
   "team": "Premiere",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 0.7,
   "avgActual": 1.3,
   "avgExpected": 0.2,
   "aId": "0e8c08b7-0e58-434b-8830-f37779f821dc",
   "bId": "4de9fd52-8910-4c2f-9aad-e2e55a0e33a1"
  },
  {
   "a": "Joshua Mindlin",
   "b": "Zach Mcgowan",
   "team": "Picklr Newtown",
   "n": 9,
   "w": 6,
   "l": 3,
   "synergy": 0.7,
   "avgActual": 0.8,
   "avgExpected": -0.2,
   "aId": "439d9ebf-9409-4214-ad91-7c18a0153c71",
   "bId": "e71a8785-5959-4607-9af3-e3ac9e3c6d86"
  },
  {
   "a": "Michael Rapaglia",
   "b": "Nicholas Yandoli",
   "team": "Premiere",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": 0.7,
   "avgActual": 0.9,
   "avgExpected": -0.2,
   "aId": "0b84dcdf-2b96-4a9e-9eae-5523bf89c4f6",
   "bId": "5ec3a192-8b1f-43ab-a348-739a0ba15429"
  },
  {
   "a": "Clayton Schmucker",
   "b": "William Lee",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 4.3,
   "avgExpected": 2.8,
   "aId": "0be72348-4a00-413e-bf40-df6824c3cca3",
   "bId": "9e264c96-36cf-45a9-90ad-1e125a82c851"
  },
  {
   "a": "Julius Degen",
   "b": "Nicholas Vanderveer",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.7,
   "avgActual": -0.7,
   "avgExpected": -2.3,
   "aId": "3a828946-f189-43be-905a-00c20a3b0b84",
   "bId": "4d33c53f-a066-4543-b2cf-313c11165227"
  },
  {
   "a": "Michael Ksiezopolski",
   "b": "Jacob Rosengarten",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.6,
   "avgActual": -3,
   "avgExpected": -4.5,
   "aId": "73090c04-48a1-48b2-b638-55b1e656f4ed",
   "bId": "b2f8ea85-7734-47a2-8ce7-bd968b3a51bc"
  },
  {
   "a": "Tarkan Akas",
   "b": "Michael Li",
   "team": "Pickle House",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.6,
   "avgActual": 4,
   "avgExpected": 2.5,
   "aId": "7fd926bd-8473-435e-9330-5984c0637b19",
   "bId": "dc81629b-4ff7-45c4-b38e-b3b836bc0769"
  },
  {
   "a": "Matthew Eldridge",
   "b": "Zach Hollmann",
   "team": "Pickle House",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 2.3,
   "avgExpected": 1.1,
   "aId": "19cb95ac-bec2-41bb-a6ce-767d51e00f24",
   "bId": "8aef2d8a-0bd4-45df-b5d1-1a120a81ef0f"
  },
  {
   "a": "Kushal Thapa",
   "b": "Ryan Furman",
   "team": "Jersey Devil",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 1.3,
   "avgExpected": 0,
   "aId": "85b62c8d-b3e4-4f75-93ec-cf7b5097a2ac",
   "bId": "a89121dd-192b-486d-b39d-18ee8447d641"
  },
  {
   "a": "Craig Frame",
   "b": "Tarkan Akas",
   "team": "Pickle House",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 0,
   "avgExpected": -1.4,
   "aId": "6043b3e3-217d-4ad3-bd5d-db9667b99bbc",
   "bId": "7fd926bd-8473-435e-9330-5984c0637b19"
  },
  {
   "a": "Ryan Rosen",
   "b": "Yash Shah",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 0.3,
   "avgExpected": -1.2,
   "aId": "97f2b250-2030-4296-be61-63cffb17043b",
   "bId": "fbf8a0f9-a289-4d98-a5e3-478c8dce672a"
  },
  {
   "a": "Justin Bautista",
   "b": "Zyril Carilo",
   "team": "Bounce Tempest",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 2.3,
   "avgExpected": 1.3,
   "aId": "27660961-6245-4b09-aafe-359ca3205797",
   "bId": "b4efc48a-f302-4d27-8c35-0dac1e68eec8"
  },
  {
   "a": "Alex Mihalca",
   "b": "Ashwin Korde",
   "team": "Bounce Tempest",
   "n": 10,
   "w": 5,
   "l": 5,
   "synergy": 0.6,
   "avgActual": -1.3,
   "avgExpected": -2.2,
   "aId": "47054f48-f7f3-4a11-8a3c-03160ea588b6",
   "bId": "f9f521ee-5f27-4f61-b4e0-4e0b9ad09aee"
  },
  {
   "a": "Justin Bautista",
   "b": "Josh Knupp",
   "team": "Bounce Tempest",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 0.6,
   "avgActual": 4.2,
   "avgExpected": 3.2,
   "aId": "27660961-6245-4b09-aafe-359ca3205797",
   "bId": "292c729f-c522-4f41-8208-e1caf7f94498"
  },
  {
   "a": "Joshua Mindlin",
   "b": "Thomas Fenton",
   "team": "Picklr Newtown",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 2.8,
   "avgExpected": 1.5,
   "aId": "439d9ebf-9409-4214-ad91-7c18a0153c71",
   "bId": "c55df548-ee89-4493-9268-850675b96066"
  },
  {
   "a": "Joshua Octaviano",
   "b": "Christopher Natividad",
   "team": "Pickleball Kingdom Watchung",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 3.5,
   "avgExpected": 2.3,
   "aId": "37c7c06b-1600-450e-9f14-61d397872bc6",
   "bId": "d0db1fca-1182-4e0e-8d5c-980be84ac87f"
  },
  {
   "a": "Vince Abate",
   "b": "Zach Bowe",
   "team": "Jersey Devil",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 2,
   "avgExpected": 0.5,
   "aId": "8257200c-7448-4527-92df-436d7bb18cac",
   "bId": "eebadc3a-5763-4612-9232-d3a98ea188d6"
  },
  {
   "a": "Julius Degen",
   "b": "Ivan Rios",
   "team": "Monroe",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.6,
   "avgActual": -1.2,
   "avgExpected": -2.4,
   "aId": "3a828946-f189-43be-905a-00c20a3b0b84",
   "bId": "5807a1c8-ca44-48d1-9dec-ee621a2817c2"
  },
  {
   "a": "Jaco De Waal",
   "b": "Zach Mcgowan",
   "team": "Picklr Newtown",
   "n": 12,
   "w": 8,
   "l": 4,
   "synergy": 0.6,
   "avgActual": 2.1,
   "avgExpected": 1.3,
   "aId": "19407a76-031d-4be3-8ed8-ba88cccdfdd3",
   "bId": "e71a8785-5959-4607-9af3-e3ac9e3c6d86"
  },
  {
   "a": "Matthew Eldridge",
   "b": "Gopi Narayanan",
   "team": "Pickle House",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 1.9,
   "avgExpected": 0.9,
   "aId": "19cb95ac-bec2-41bb-a6ce-767d51e00f24",
   "bId": "5d55a4c4-8271-4e7b-b018-3da88a97c5fe"
  },
  {
   "a": "Tim Cahalin",
   "b": "Thomas Fenton",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.6,
   "avgActual": -2,
   "avgExpected": -3.4,
   "aId": "7610b0d0-07a5-4408-ade6-d5ea5d80fe0a",
   "bId": "c55df548-ee89-4493-9268-850675b96066"
  },
  {
   "a": "Matthew Chen",
   "b": "Zach Bowe",
   "team": "Jersey Devil",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 2,
   "avgExpected": 0.7,
   "aId": "68e9ac74-5119-4dbb-8503-72bcdbade183",
   "bId": "eebadc3a-5763-4612-9232-d3a98ea188d6"
  },
  {
   "a": "Camrin Cronheim",
   "b": "Jason Makarevic",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 10,
   "w": 9,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 4.6,
   "avgExpected": 3.9,
   "aId": "8143def5-d564-4010-8258-ccb71cd481f1",
   "bId": "f8835822-da21-4593-8b99-5665d2c2f3af"
  },
  {
   "a": "Daniel Gallegos",
   "b": "Christopher Natividad",
   "team": "Pickleball Kingdom Watchung",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 3,
   "avgExpected": 2.1,
   "aId": "6f9cb35b-f24c-4480-a8b4-86e6ea32f3c2",
   "bId": "d0db1fca-1182-4e0e-8d5c-980be84ac87f"
  },
  {
   "a": "Chris Damato",
   "b": "Michael Li",
   "team": "Pickle House",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 0.5,
   "avgActual": 2.3,
   "avgExpected": 1.5,
   "aId": "445e89c8-a23c-440c-bd3c-7eab366bdd85",
   "bId": "dc81629b-4ff7-45c4-b38e-b3b836bc0769"
  },
  {
   "a": "Mickey Cook",
   "b": "Zach Hollmann",
   "team": "Pickle House",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 3.3,
   "avgExpected": 2.6,
   "aId": "3babc519-f395-4ef7-8f6f-b38d25c139d0",
   "bId": "8aef2d8a-0bd4-45df-b5d1-1a120a81ef0f"
  },
  {
   "a": "Alex Pecora",
   "b": "Joshua Mindlin",
   "team": "Picklr Newtown",
   "n": 8,
   "w": 2,
   "l": 6,
   "synergy": 0.5,
   "avgActual": -2.1,
   "avgExpected": -2.8,
   "aId": "3533f5a2-d7ed-4fd3-b969-5117c0474452",
   "bId": "439d9ebf-9409-4214-ad91-7c18a0153c71"
  },
  {
   "a": "Ron Branca",
   "b": "Thomas Fenton",
   "team": "Picklr Newtown",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 3.3,
   "avgExpected": 2.5,
   "aId": "2caf34a7-c53c-410c-a7b4-47dd61398830",
   "bId": "c55df548-ee89-4493-9268-850675b96066"
  },
  {
   "a": "Chris Damato",
   "b": "Al Mancini",
   "team": "Pickle House",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 2,
   "avgExpected": 1.3,
   "aId": "445e89c8-a23c-440c-bd3c-7eab366bdd85",
   "bId": "51352d99-02ac-4299-abac-a688bfade22f"
  },
  {
   "a": "Ali Husain",
   "b": "Mickey Cook",
   "team": "Pickle House",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 2.8,
   "avgExpected": 2,
   "aId": "09d614ca-a9b2-44b6-a402-51046c6883af",
   "bId": "3babc519-f395-4ef7-8f6f-b38d25c139d0"
  },
  {
   "a": "Ali Husain",
   "b": "Chris Damato",
   "team": "Pickle House",
   "n": 9,
   "w": 8,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 3.6,
   "avgExpected": 2.9,
   "aId": "09d614ca-a9b2-44b6-a402-51046c6883af",
   "bId": "445e89c8-a23c-440c-bd3c-7eab366bdd85"
  },
  {
   "a": "Nicholas Como",
   "b": "Chris Frangipane",
   "team": "Premiere",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 3.8,
   "avgExpected": 3,
   "aId": "a286a593-65d0-4119-a211-3cd57bba652a",
   "bId": "e8bb81fd-869a-459d-8108-b9ac6bc1b84d"
  },
  {
   "a": "Justin Bautista",
   "b": "Brandyn Schuchart",
   "team": "Bounce Tempest",
   "n": 7,
   "w": 7,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 6.9,
   "avgExpected": 6,
   "aId": "27660961-6245-4b09-aafe-359ca3205797",
   "bId": "9d821d34-4af3-4e4a-999d-25308b75ca0f"
  },
  {
   "a": "Tom Laiso",
   "b": "Nicholas Lagrua",
   "team": "Dill Dinkers Freehold",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 3,
   "avgExpected": 2.2,
   "aId": "13918154-3673-4dae-946a-2c2d4ac8863f",
   "bId": "6f1df3a0-bfc7-4d3b-a5f5-0ee9f40da488"
  },
  {
   "a": "Nicholas Lagrua",
   "b": "Eugene Zaslavsky",
   "team": "Dill Dinkers Freehold",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 4.4,
   "avgExpected": 3.6,
   "aId": "6f1df3a0-bfc7-4d3b-a5f5-0ee9f40da488",
   "bId": "9638b474-ad68-4eff-a5a5-6c40db6ed4bb"
  },
  {
   "a": "Nicholas Lagrua",
   "b": "Harrison Mui",
   "team": "Dill Dinkers Freehold",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 4.8,
   "avgExpected": 3.9,
   "aId": "6f1df3a0-bfc7-4d3b-a5f5-0ee9f40da488",
   "bId": "fa1d3cb9-cd76-4f49-8024-c6224aa5b7c1"
  },
  {
   "a": "Tyler Marlin",
   "b": "Riguo Zheng",
   "team": "ACE Moorestown",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 0.5,
   "avgActual": -3.5,
   "avgExpected": -4.4,
   "aId": "bf530f1a-96e0-484c-b377-f1243f05571b",
   "bId": "c5fa0e7c-eb97-45fa-8a86-850a918fff54"
  },
  {
   "a": "Hany Ibrahim",
   "b": "Austin Williams",
   "team": "Flemington",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 1.3,
   "avgExpected": 0.2,
   "aId": "5b439439-36f5-421f-afaa-5d8b1a547954",
   "bId": "bb0bdc33-be20-4a45-9de9-0a52a88d7af9"
  },
  {
   "a": "Anthony Bonaventura",
   "b": "Daniel Gallegos",
   "team": "Pickleball Kingdom Watchung",
   "n": 13,
   "w": 9,
   "l": 4,
   "synergy": 0.4,
   "avgActual": 2.6,
   "avgExpected": 2.1,
   "aId": "58836d9c-6a12-4ed7-853f-dcee1e00dadd",
   "bId": "6f9cb35b-f24c-4480-a8b4-86e6ea32f3c2"
  },
  {
   "a": "Ian Chin",
   "b": "Camrin Cronheim",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.4,
   "avgActual": 3,
   "avgExpected": 2.4,
   "aId": "34d3737f-b8db-4d4c-bf25-6e8bb3524157",
   "bId": "8143def5-d564-4010-8258-ccb71cd481f1"
  },
  {
   "a": "Vineeth Mathew",
   "b": "Riguo Zheng",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.4,
   "avgActual": -2.7,
   "avgExpected": -3.7,
   "aId": "329df703-2af3-46cd-a7ae-372a1956536e",
   "bId": "c5fa0e7c-eb97-45fa-8a86-850a918fff54"
  },
  {
   "a": "Derek Callihan",
   "b": "Tim Cahalin",
   "team": "Picklr Newtown",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 0.4,
   "avgActual": -4.2,
   "avgExpected": -4.8,
   "aId": "5eccfff7-0902-4be1-a70e-361ff447bf6a",
   "bId": "7610b0d0-07a5-4408-ade6-d5ea5d80fe0a"
  },
  {
   "a": "Simon Perry",
   "b": "Shahar Gelber",
   "team": "Flemington",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.4,
   "avgActual": -0.3,
   "avgExpected": -1.3,
   "aId": "03c7bdf6-926c-4d90-9416-117cd3478b50",
   "bId": "7efd9bc6-6b2f-4e98-b785-136fea990664"
  },
  {
   "a": "Simon Rosenwasser",
   "b": "Wasib Malik",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.4,
   "avgActual": -3.2,
   "avgExpected": -4,
   "aId": "369dca37-2d15-4559-96d1-26a78df236a1",
   "bId": "659c9638-b908-4ddd-88a9-2bc40c334a08"
  },
  {
   "a": "Austin Gow",
   "b": "Jordan Long",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 4.7,
   "avgExpected": 3.7,
   "aId": "0e577096-0b13-441d-b087-cc49cb55cfe2",
   "bId": "0fbbdbbb-a550-49ae-b04a-111bfe4891f5"
  },
  {
   "a": "Adam Weinstock",
   "b": "Eugene Zaslavsky",
   "team": "Dill Dinkers Freehold",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 3.8,
   "avgExpected": 3.1,
   "aId": "8ced9183-490f-465f-8683-62071a6d706d",
   "bId": "9638b474-ad68-4eff-a5a5-6c40db6ed4bb"
  },
  {
   "a": "Julius Degen",
   "b": "Aleksey Sergeev",
   "team": "Monroe",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.4,
   "avgActual": -1.2,
   "avgExpected": -1.9,
   "aId": "3a828946-f189-43be-905a-00c20a3b0b84",
   "bId": "80467dc7-edfb-46e8-a30a-b6acd19ee222"
  },
  {
   "a": "Marc Harden",
   "b": "Jack Blumberg",
   "team": "ACE Moorestown",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.4,
   "avgActual": -0.2,
   "avgExpected": -1,
   "aId": "55194d2f-f537-4e19-b901-86c559f25ef2",
   "bId": "f2929b28-a6ee-45e5-9846-da957b6d8734"
  },
  {
   "a": "Ryan Rosen",
   "b": "Dustin Rabinowitz",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 4.7,
   "avgExpected": 3.7,
   "aId": "97f2b250-2030-4296-be61-63cffb17043b",
   "bId": "d23839c0-334b-4423-9305-0c6281523d5d"
  },
  {
   "a": "Nicholas Yandoli",
   "b": "Nicholas Como",
   "team": "Premiere",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 2.5,
   "avgExpected": 1.7,
   "aId": "5ec3a192-8b1f-43ab-a348-739a0ba15429",
   "bId": "a286a593-65d0-4119-a211-3cd57bba652a"
  },
  {
   "a": "Jake Laifer",
   "b": "Jason Makarevic",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 9,
   "w": 7,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 3,
   "avgExpected": 2.5,
   "aId": "d99428a2-b91c-460f-b2d4-cf3ce96f0643",
   "bId": "f8835822-da21-4593-8b99-5665d2c2f3af"
  },
  {
   "a": "Drew Youssef",
   "b": "Josiah Kim",
   "team": "Pickleball Kingdom Watchung",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.3,
   "avgActual": 0,
   "avgExpected": -0.4,
   "aId": "d13d6c03-eea2-44f3-a497-965b1e95ea83",
   "bId": "de8e2a33-d691-4652-84ef-532b89f467bc"
  },
  {
   "a": "Drew Youssef",
   "b": "Stanley Bonczek",
   "team": "Pickleball Kingdom Watchung",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.3,
   "avgActual": 1.2,
   "avgExpected": 0.7,
   "aId": "d13d6c03-eea2-44f3-a497-965b1e95ea83",
   "bId": "f4cd45db-8d83-423a-8936-c7d7a3b0ffad"
  },
  {
   "a": "Kushal Thapa",
   "b": "Brian Barenbaum",
   "team": "Jersey Devil",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.3,
   "avgActual": -1.7,
   "avgExpected": -2.3,
   "aId": "85b62c8d-b3e4-4f75-93ec-cf7b5097a2ac",
   "bId": "b95f46c6-d374-4e13-a57b-abd171b1c847"
  },
  {
   "a": "Chris Damato",
   "b": "Tarkan Akas",
   "team": "Pickle House",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 1,
   "avgExpected": 0.4,
   "aId": "445e89c8-a23c-440c-bd3c-7eab366bdd85",
   "bId": "7fd926bd-8473-435e-9330-5984c0637b19"
  },
  {
   "a": "Rob Pandolfi",
   "b": "Neil Ottrando",
   "team": "Premiere",
   "n": 11,
   "w": 7,
   "l": 4,
   "synergy": 0.3,
   "avgActual": 2.3,
   "avgExpected": 1.9,
   "aId": "081fc233-7f01-432d-85f9-c623b0524f49",
   "bId": "4de9fd52-8910-4c2f-9aad-e2e55a0e33a1"
  },
  {
   "a": "Shashank Kamdar",
   "b": "Ryan Rosen",
   "team": "Bounce Malvern",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 3.7,
   "avgExpected": 3.2,
   "aId": "56db4b56-6166-437f-8ece-26576b7042e5",
   "bId": "97f2b250-2030-4296-be61-63cffb17043b"
  },
  {
   "a": "Josh Knupp",
   "b": "Ashwin Korde",
   "team": "Bounce Tempest",
   "n": 10,
   "w": 6,
   "l": 4,
   "synergy": 0.3,
   "avgActual": 0.3,
   "avgExpected": -0.1,
   "aId": "292c729f-c522-4f41-8208-e1caf7f94498",
   "bId": "f9f521ee-5f27-4f61-b4e0-4e0b9ad09aee"
  },
  {
   "a": "Tom Laiso",
   "b": "Harrison Mui",
   "team": "Dill Dinkers Freehold",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 2.8,
   "avgExpected": 2.3,
   "aId": "13918154-3673-4dae-946a-2c2d4ac8863f",
   "bId": "fa1d3cb9-cd76-4f49-8024-c6224aa5b7c1"
  },
  {
   "a": "Gopi Narayanan",
   "b": "Dipen Bhatt",
   "team": "Pickle House",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 0.7,
   "avgExpected": -0.1,
   "aId": "5d55a4c4-8271-4e7b-b018-3da88a97c5fe",
   "bId": "fe8af1d3-ff62-430d-90af-32794cc7b912"
  },
  {
   "a": "Kevin Sun",
   "b": "Stanley Bonczek",
   "team": "Pickleball Kingdom Watchung",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 1.8,
   "avgExpected": 1.3,
   "aId": "88c57c1f-436b-4280-9bd7-75eafe496b70",
   "bId": "f4cd45db-8d83-423a-8936-c7d7a3b0ffad"
  },
  {
   "a": "Shayne Clowar",
   "b": "Tyler Marlin",
   "team": "ACE Moorestown",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": 0.3,
   "avgActual": -3.3,
   "avgExpected": -3.8,
   "aId": "30b75fd5-95cf-4a1a-b296-10e7e381166e",
   "bId": "bf530f1a-96e0-484c-b377-f1243f05571b"
  },
  {
   "a": "Joshua Mindlin",
   "b": "Joseph Yi",
   "team": "Picklr Newtown",
   "n": 8,
   "w": 3,
   "l": 5,
   "synergy": 0.3,
   "avgActual": -1.4,
   "avgExpected": -1.7,
   "aId": "439d9ebf-9409-4214-ad91-7c18a0153c71",
   "bId": "e882fe51-042a-4368-b34f-fbabad19d7c1"
  },
  {
   "a": "Rich Marcovecchio",
   "b": "Michael Li",
   "team": "Pickle House",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 2.3,
   "avgExpected": 1.7,
   "aId": "08197a69-d447-4483-b3ae-7b232fb0655d",
   "bId": "dc81629b-4ff7-45c4-b38e-b3b836bc0769"
  },
  {
   "a": "Tim Cahalin",
   "b": "Joseph Yi",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.3,
   "avgActual": -3.3,
   "avgExpected": -3.9,
   "aId": "7610b0d0-07a5-4408-ade6-d5ea5d80fe0a",
   "bId": "e882fe51-042a-4368-b34f-fbabad19d7c1"
  },
  {
   "a": "Thomas Connolly",
   "b": "Austin Williams",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.3,
   "avgActual": 5.5,
   "avgExpected": 4.9,
   "aId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3",
   "bId": "bb0bdc33-be20-4a45-9de9-0a52a88d7af9"
  },
  {
   "a": "Eric Jiang",
   "b": "Josiah Kim",
   "team": "Pickleball Kingdom Watchung",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 3.3,
   "avgExpected": 2.7,
   "aId": "5a604f85-b8f8-4084-8636-d403530fd480",
   "bId": "de8e2a33-d691-4652-84ef-532b89f467bc"
  },
  {
   "a": "Patrick Cadieu",
   "b": "Zachary Puccia",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.3,
   "avgActual": -1.3,
   "avgExpected": -2.1,
   "aId": "6bf475b8-0f4c-4e4b-a1ba-279f5f8aa008",
   "bId": "dd6582a2-1596-40b8-8a4c-fec00aaeb379"
  },
  {
   "a": "Nicholas Vanderveer",
   "b": "Rohan Sabharwal",
   "team": "Monroe",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.3,
   "avgActual": -5,
   "avgExpected": -5.8,
   "aId": "4d33c53f-a066-4543-b2cf-313c11165227",
   "bId": "a7de14f0-a8da-402c-9340-c57389b6736a"
  },
  {
   "a": "Elliott Albanese",
   "b": "Jake Laifer",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 0.8,
   "avgExpected": 0.5,
   "aId": "6af88387-5e2b-4ea7-b732-22885e4931a8",
   "bId": "d99428a2-b91c-460f-b2d4-cf3ce96f0643"
  },
  {
   "a": "Kushal Thapa",
   "b": "Zach Bowe",
   "team": "Jersey Devil",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 2,
   "avgExpected": 1.4,
   "aId": "85b62c8d-b3e4-4f75-93ec-cf7b5097a2ac",
   "bId": "eebadc3a-5763-4612-9232-d3a98ea188d6"
  },
  {
   "a": "Daniel Ehala",
   "b": "Bryan Nardone",
   "team": "ACE Moorestown",
   "n": 15,
   "w": 7,
   "l": 8,
   "synergy": 0.2,
   "avgActual": -0.7,
   "avgExpected": -1,
   "aId": "2ee28d63-2f38-468f-b824-9b17aa938413",
   "bId": "a479d794-d9d0-4620-b322-b7f249f2ae5f"
  },
  {
   "a": "Alex Pecora",
   "b": "Christian Lupica",
   "team": "Picklr Newtown",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": 0.2,
   "avgActual": -0.9,
   "avgExpected": -1.2,
   "aId": "3533f5a2-d7ed-4fd3-b969-5117c0474452",
   "bId": "ac97d2bc-5ee7-4285-8eb3-e5650a0f6f6e"
  },
  {
   "a": "Lou Frignito",
   "b": "Dustin Rabinowitz",
   "team": "Bounce Malvern",
   "n": 9,
   "w": 8,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 7.1,
   "avgExpected": 6.8,
   "aId": "1afca308-dca6-4828-946a-0ca6ad1b0c44",
   "bId": "d23839c0-334b-4423-9305-0c6281523d5d"
  },
  {
   "a": "Jaco De Waal",
   "b": "Joshua Mindlin",
   "team": "Picklr Newtown",
   "n": 9,
   "w": 4,
   "l": 5,
   "synergy": 0.2,
   "avgActual": -0.2,
   "avgExpected": -0.6,
   "aId": "19407a76-031d-4be3-8ed8-ba88cccdfdd3",
   "bId": "439d9ebf-9409-4214-ad91-7c18a0153c71"
  },
  {
   "a": "Shahar Gelber",
   "b": "Tim Dowd",
   "team": "Flemington",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.2,
   "avgActual": -2,
   "avgExpected": -2.6,
   "aId": "7efd9bc6-6b2f-4e98-b785-136fea990664",
   "bId": "b7555b30-f1b5-4d44-9eff-dffd3e1b1b28"
  },
  {
   "a": "Ali Husain",
   "b": "Michael Li",
   "team": "Pickle House",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 2.8,
   "avgExpected": 2.5,
   "aId": "09d614ca-a9b2-44b6-a402-51046c6883af",
   "bId": "dc81629b-4ff7-45c4-b38e-b3b836bc0769"
  },
  {
   "a": "Nachiket Vaidya",
   "b": "Daniel Ehala",
   "team": "ACE Moorestown",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.2,
   "avgActual": -0.3,
   "avgExpected": -0.6,
   "aId": "0e35b16c-8027-4994-b04f-fd146d6d1709",
   "bId": "2ee28d63-2f38-468f-b824-9b17aa938413"
  },
  {
   "a": "Vince Abate",
   "b": "Vaughn Mcclelland",
   "team": "Jersey Devil",
   "n": 12,
   "w": 6,
   "l": 6,
   "synergy": 0.2,
   "avgActual": -1.2,
   "avgExpected": -1.4,
   "aId": "8257200c-7448-4527-92df-436d7bb18cac",
   "bId": "c33f3ff1-2c81-4630-8980-64fa03a7b102"
  },
  {
   "a": "Daniel Phillips",
   "b": "Anthony Bradford Bisignano",
   "team": "Jersey Pickleball Club",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": 0.2,
   "avgActual": -2.8,
   "avgExpected": -3.1,
   "aId": "1ddcd805-f965-4357-9567-35920e191f8c",
   "bId": "7ce7d3d1-b44b-431c-b3a5-20e153cc1777"
  },
  {
   "a": "Zach Hollmann",
   "b": "Dipen Bhatt",
   "team": "Pickle House",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 3.8,
   "avgExpected": 3.4,
   "aId": "8aef2d8a-0bd4-45df-b5d1-1a120a81ef0f",
   "bId": "fe8af1d3-ff62-430d-90af-32794cc7b912"
  },
  {
   "a": "Chenfei Gao",
   "b": "Caesar Gene",
   "team": "Dill Dinkers Freehold",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.2,
   "avgActual": -1,
   "avgExpected": -1.4,
   "aId": "3807d345-e2d6-4e75-9a59-9248ebf6e296",
   "bId": "a0aa8b27-3980-4abd-a62c-62d801cb0a82"
  },
  {
   "a": "Simon Rosenwasser",
   "b": "Gary Sidhu",
   "team": "Jersey Pickleball Club",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": 0.2,
   "avgActual": -0.4,
   "avgExpected": -0.8,
   "aId": "369dca37-2d15-4559-96d1-26a78df236a1",
   "bId": "fa28fec9-9eff-4831-912d-4180f8760eeb"
  },
  {
   "a": "Nicholas Yandoli",
   "b": "Chris Frangipane",
   "team": "Premiere",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 2.3,
   "avgExpected": 1.8,
   "aId": "5ec3a192-8b1f-43ab-a348-739a0ba15429",
   "bId": "e8bb81fd-869a-459d-8108-b9ac6bc1b84d"
  },
  {
   "a": "Jonathan Ksiezopolski",
   "b": "Aleksey Sergeev",
   "team": "Monroe",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.1,
   "avgActual": -2.8,
   "avgExpected": -2.9,
   "aId": "20fe2f66-8825-4881-a325-b8fb78ee5ff6",
   "bId": "80467dc7-edfb-46e8-a30a-b6acd19ee222"
  },
  {
   "a": "Jay Alquiros",
   "b": "Frank Clark",
   "team": "Flemington",
   "n": 7,
   "w": 0,
   "l": 7,
   "synergy": 0.1,
   "avgActual": -7.1,
   "avgExpected": -7.3,
   "aId": "a3dbb909-29a5-4aa0-a40f-42bed311f9cd",
   "bId": "fb42e711-528f-4028-80c6-e32013e3f807"
  },
  {
   "a": "Jake Laifer",
   "b": "Keith Shedlock",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": 0.1,
   "avgActual": -4,
   "avgExpected": -4.3,
   "aId": "d99428a2-b91c-460f-b2d4-cf3ce96f0643",
   "bId": "f4b44cd7-fc9a-41a2-b569-cdaf08b0bf26"
  },
  {
   "a": "Thomas Connolly",
   "b": "Neel Goyal",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 8,
   "w": 7,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 3.6,
   "avgExpected": 3.5,
   "aId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3",
   "bId": "8cfc8650-92ac-4ed4-9b57-2692526abd19"
  },
  {
   "a": "Camrin Cronheim",
   "b": "Neel Goyal",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": 0.1,
   "avgActual": 2.8,
   "avgExpected": 2.6,
   "aId": "8143def5-d564-4010-8258-ccb71cd481f1",
   "bId": "8cfc8650-92ac-4ed4-9b57-2692526abd19"
  },
  {
   "a": "Tyler Arsenault",
   "b": "Zach Bowe",
   "team": "Jersey Devil",
   "n": 10,
   "w": 9,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 6.3,
   "avgExpected": 6.2,
   "aId": "e76d2d63-f7dc-40e7-aca2-d9b3aecf4d3e",
   "bId": "eebadc3a-5763-4612-9232-d3a98ea188d6"
  },
  {
   "a": "Chris Damato",
   "b": "Zach Hollmann",
   "team": "Pickle House",
   "n": 10,
   "w": 8,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 4.4,
   "avgExpected": 4.3,
   "aId": "445e89c8-a23c-440c-bd3c-7eab366bdd85",
   "bId": "8aef2d8a-0bd4-45df-b5d1-1a120a81ef0f"
  },
  {
   "a": "Ryan Furman",
   "b": "Tyler Arsenault",
   "team": "Jersey Devil",
   "n": 8,
   "w": 7,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 5.1,
   "avgExpected": 5,
   "aId": "a89121dd-192b-486d-b39d-18ee8447d641",
   "bId": "e76d2d63-f7dc-40e7-aca2-d9b3aecf4d3e"
  },
  {
   "a": "Ron Branca",
   "b": "Joshua Mindlin",
   "team": "Picklr Newtown",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.1,
   "avgActual": -0.3,
   "avgExpected": -0.5,
   "aId": "2caf34a7-c53c-410c-a7b4-47dd61398830",
   "bId": "439d9ebf-9409-4214-ad91-7c18a0153c71"
  },
  {
   "a": "Ali Husain",
   "b": "Zach Hollmann",
   "team": "Pickle House",
   "n": 9,
   "w": 7,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 2.7,
   "avgExpected": 2.5,
   "aId": "09d614ca-a9b2-44b6-a402-51046c6883af",
   "bId": "8aef2d8a-0bd4-45df-b5d1-1a120a81ef0f"
  },
  {
   "a": "Caesar Gene",
   "b": "Harrison Mui",
   "team": "Dill Dinkers Freehold",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": 0.1,
   "avgActual": 0.3,
   "avgExpected": 0.1,
   "aId": "a0aa8b27-3980-4abd-a62c-62d801cb0a82",
   "bId": "fa1d3cb9-cd76-4f49-8024-c6224aa5b7c1"
  },
  {
   "a": "Adam Weinstock",
   "b": "Harrison Mui",
   "team": "Dill Dinkers Freehold",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 0.1,
   "avgActual": 1.1,
   "avgExpected": 1,
   "aId": "8ced9183-490f-465f-8683-62071a6d706d",
   "bId": "fa1d3cb9-cd76-4f49-8024-c6224aa5b7c1"
  },
  {
   "a": "Tom Laiso",
   "b": "Chenfei Gao",
   "team": "Dill Dinkers Freehold",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 0.1,
   "avgActual": 2.6,
   "avgExpected": 2.5,
   "aId": "13918154-3673-4dae-946a-2c2d4ac8863f",
   "bId": "3807d345-e2d6-4e75-9a59-9248ebf6e296"
  },
  {
   "a": "Matthew Friedman",
   "b": "Jacob Yandoli",
   "team": "Premiere",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 0.1,
   "avgActual": 0.4,
   "avgExpected": 0.2,
   "aId": "259fc7aa-7e69-4830-87d8-b9a758ec7fda",
   "bId": "be9bc229-2d57-4236-a951-11a2f91a09a3"
  },
  {
   "a": "Vince Abate",
   "b": "Sheel Motiwala",
   "team": "Jersey Devil",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": 0.1,
   "avgActual": -1.9,
   "avgExpected": -2,
   "aId": "8257200c-7448-4527-92df-436d7bb18cac",
   "bId": "e3f3e90d-b026-49f2-8194-45e9252b61f8"
  },
  {
   "a": "Gopi Narayanan",
   "b": "Zach Hollmann",
   "team": "Pickle House",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 1,
   "avgExpected": 0.9,
   "aId": "5d55a4c4-8271-4e7b-b018-3da88a97c5fe",
   "bId": "8aef2d8a-0bd4-45df-b5d1-1a120a81ef0f"
  },
  {
   "a": "Joshua Octaviano",
   "b": "Daniel Gallegos",
   "team": "Pickleball Kingdom Watchung",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 2.4,
   "avgExpected": 2.2,
   "aId": "37c7c06b-1600-450e-9f14-61d397872bc6",
   "bId": "6f9cb35b-f24c-4480-a8b4-86e6ea32f3c2"
  },
  {
   "a": "Matthew Mintz",
   "b": "Jack Blumberg",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.1,
   "avgActual": -0.3,
   "avgExpected": -0.5,
   "aId": "ad956d26-e552-40eb-97c4-38edfc1b0bc1",
   "bId": "f2929b28-a6ee-45e5-9846-da957b6d8734"
  },
  {
   "a": "Alex Pecora",
   "b": "William Lee",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.1,
   "avgActual": -0.3,
   "avgExpected": -0.5,
   "aId": "3533f5a2-d7ed-4fd3-b969-5117c0474452",
   "bId": "9e264c96-36cf-45a9-90ad-1e125a82c851"
  },
  {
   "a": "Joseph Lynskey",
   "b": "Nicholas Yandoli",
   "team": "Premiere",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.1,
   "avgActual": -1.7,
   "avgExpected": -1.9,
   "aId": "0e8c08b7-0e58-434b-8830-f37779f821dc",
   "bId": "5ec3a192-8b1f-43ab-a348-739a0ba15429"
  },
  {
   "a": "Rob Pandolfi",
   "b": "Michael Rapaglia",
   "team": "Premiere",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 1.5,
   "avgExpected": 1.4,
   "aId": "081fc233-7f01-432d-85f9-c623b0524f49",
   "bId": "0b84dcdf-2b96-4a9e-9eae-5523bf89c4f6"
  },
  {
   "a": "Andy Ead",
   "b": "Robbie Oddy",
   "team": "Flemington",
   "n": 13,
   "w": 7,
   "l": 6,
   "synergy": 0,
   "avgActual": 1.4,
   "avgExpected": 1.3,
   "aId": "6c4d1df7-7f8f-432b-a8a7-8751e9aa521d",
   "bId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6"
  },
  {
   "a": "Rahul Purwah",
   "b": "Jacob Rosengarten",
   "team": "Monroe",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": 0,
   "avgActual": -2.4,
   "avgExpected": -2.4,
   "aId": "b19effeb-3b70-4f48-b8d9-781026933e86",
   "bId": "b2f8ea85-7734-47a2-8ce7-bd968b3a51bc"
  },
  {
   "a": "Shahar Gelber",
   "b": "Hans Tang",
   "team": "Flemington",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0,
   "avgActual": -1,
   "avgExpected": -1,
   "aId": "7efd9bc6-6b2f-4e98-b785-136fea990664",
   "bId": "b4694087-759d-4570-9394-3e7c99f19099"
  },
  {
   "a": "Thomas Connolly",
   "b": "Jake Laifer",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": 0,
   "avgActual": 0.9,
   "avgExpected": 0.9,
   "aId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3",
   "bId": "d99428a2-b91c-460f-b2d4-cf3ce96f0643"
  },
  {
   "a": "Robert Finley",
   "b": "Josh Sherlock",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0,
   "avgActual": -9,
   "avgExpected": -9,
   "aId": "0d70122a-9002-461f-8600-a9afed2e8c3f",
   "bId": "fa2292a3-4d44-4c69-b4b8-b7c8f6d9085a"
  },
  {
   "a": "Robert Finley",
   "b": "Nachiket Vaidya",
   "team": "ACE Moorestown",
   "n": 7,
   "w": 1,
   "l": 6,
   "synergy": 0,
   "avgActual": -5.1,
   "avgExpected": -5.1,
   "aId": "0d70122a-9002-461f-8600-a9afed2e8c3f",
   "bId": "0e35b16c-8027-4994-b04f-fd146d6d1709"
  },
  {
   "a": "Sebastian Ferrer",
   "b": "Gary Sidhu",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0,
   "avgActual": -0.7,
   "avgExpected": -0.8,
   "aId": "5c354e5d-09ba-4d09-a8c4-76e0fb7eb78a",
   "bId": "fa28fec9-9eff-4831-912d-4180f8760eeb"
  },
  {
   "a": "Michael Rapaglia",
   "b": "Jacob Yandoli",
   "team": "Premiere",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 0,
   "avgActual": -1.2,
   "avgExpected": -1.1,
   "aId": "0b84dcdf-2b96-4a9e-9eae-5523bf89c4f6",
   "bId": "be9bc229-2d57-4236-a951-11a2f91a09a3"
  },
  {
   "a": "Boris Tserlin",
   "b": "Jacob Yandoli",
   "team": "Premiere",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0,
   "avgActual": -0.2,
   "avgExpected": -0.3,
   "aId": "6c71dd2d-6f76-4630-96d4-27f58e99e557",
   "bId": "be9bc229-2d57-4236-a951-11a2f91a09a3"
  },
  {
   "a": "Zachary Puccia",
   "b": "Kevin Wysoczynski",
   "team": "Jersey Pickleball Club",
   "n": 12,
   "w": 2,
   "l": 10,
   "synergy": 0,
   "avgActual": -2.4,
   "avgExpected": -2.4,
   "aId": "dd6582a2-1596-40b8-8a4c-fec00aaeb379",
   "bId": "f64f0cc2-6c82-4fe4-9992-747512700971"
  },
  {
   "a": "Austin Gow",
   "b": "Dustin Rabinowitz",
   "team": "Bounce Malvern",
   "n": 8,
   "w": 7,
   "l": 1,
   "synergy": 0,
   "avgActual": 3.6,
   "avgExpected": 3.6,
   "aId": "0e577096-0b13-441d-b087-cc49cb55cfe2",
   "bId": "d23839c0-334b-4423-9305-0c6281523d5d"
  },
  {
   "a": "Justin Bautista",
   "b": "Hiep Pham",
   "team": "Bounce Tempest",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0,
   "avgActual": 2.8,
   "avgExpected": 2.9,
   "aId": "27660961-6245-4b09-aafe-359ca3205797",
   "bId": "515009fd-ac6a-4124-a871-dff85a118781"
  },
  {
   "a": "Zachary Lessner",
   "b": "Ashwin Korde",
   "team": "Bounce Tempest",
   "n": 10,
   "w": 4,
   "l": 6,
   "synergy": 0,
   "avgActual": -1.5,
   "avgExpected": -1.5,
   "aId": "2ce5ebef-8079-4871-8d2e-b34988abbaad",
   "bId": "f9f521ee-5f27-4f61-b4e0-4e0b9ad09aee"
  },
  {
   "a": "Adriene Khon",
   "b": "Brandyn Schuchart",
   "team": "Bounce Tempest",
   "n": 9,
   "w": 6,
   "l": 3,
   "synergy": 0,
   "avgActual": 3.8,
   "avgExpected": 3.8,
   "aId": "02ac193a-6e5d-4859-80bf-c8c25a89c1c8",
   "bId": "9d821d34-4af3-4e4a-999d-25308b75ca0f"
  },
  {
   "a": "Craig Frame",
   "b": "Zach Hollmann",
   "team": "Pickle House",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0,
   "avgActual": 5.7,
   "avgExpected": 5.7,
   "aId": "6043b3e3-217d-4ad3-bd5d-db9667b99bbc",
   "bId": "8aef2d8a-0bd4-45df-b5d1-1a120a81ef0f"
  },
  {
   "a": "Drew Youssef",
   "b": "Zachary Lisojo",
   "team": "Pickleball Kingdom Watchung",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0,
   "avgActual": 0,
   "avgExpected": 0.1,
   "aId": "d13d6c03-eea2-44f3-a497-965b1e95ea83",
   "bId": "e2086778-379f-4d43-8ce7-6447129d8812"
  },
  {
   "a": "Nicholas Lagrua",
   "b": "Caesar Gene",
   "team": "Dill Dinkers Freehold",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": 0,
   "avgActual": -1,
   "avgExpected": -0.9,
   "aId": "6f1df3a0-bfc7-4d3b-a5f5-0ee9f40da488",
   "bId": "a0aa8b27-3980-4abd-a62c-62d801cb0a82"
  },
  {
   "a": "Tom Laiso",
   "b": "Marcin Glowacki",
   "team": "Dill Dinkers Freehold",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0,
   "avgActual": 2.5,
   "avgExpected": 2.4,
   "aId": "13918154-3673-4dae-946a-2c2d4ac8863f",
   "bId": "e47d28f2-187f-4aa7-acb8-356787ff82e5"
  },
  {
   "a": "Josh Knupp",
   "b": "Brandyn Schuchart",
   "team": "Bounce Tempest",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 0,
   "avgActual": 3.2,
   "avgExpected": 3.1,
   "aId": "292c729f-c522-4f41-8208-e1caf7f94498",
   "bId": "9d821d34-4af3-4e4a-999d-25308b75ca0f"
  },
  {
   "a": "Elliott Albanese",
   "b": "Vivek Kumar",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0,
   "avgActual": -0.4,
   "avgExpected": -0.4,
   "aId": "6af88387-5e2b-4ea7-b732-22885e4931a8",
   "bId": "a472cebf-6bf1-42d1-9a41-fc8940cbb021"
  },
  {
   "a": "Nicholas Yandoli",
   "b": "Boris Tserlin",
   "team": "Premiere",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0,
   "avgActual": 0.8,
   "avgExpected": 0.7,
   "aId": "5ec3a192-8b1f-43ab-a348-739a0ba15429",
   "bId": "6c71dd2d-6f76-4630-96d4-27f58e99e557"
  },
  {
   "a": "Justin Bautista",
   "b": "Eric Nguyen",
   "team": "Bounce Tempest",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0,
   "avgActual": 4.5,
   "avgExpected": 4.4,
   "aId": "27660961-6245-4b09-aafe-359ca3205797",
   "bId": "87d526c6-72b6-4b17-bf77-9016fd049541"
  },
  {
   "a": "Jaco De Waal",
   "b": "Alex Pecora",
   "team": "Picklr Newtown",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 0,
   "avgActual": -1.8,
   "avgExpected": -1.9,
   "aId": "19407a76-031d-4be3-8ed8-ba88cccdfdd3",
   "bId": "3533f5a2-d7ed-4fd3-b969-5117c0474452"
  },
  {
   "a": "Daniel Schwab",
   "b": "Zach Bowe",
   "team": "Jersey Devil",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0,
   "avgActual": 0,
   "avgExpected": 0,
   "aId": "3382b214-0a3e-4005-aba4-084588de0d98",
   "bId": "eebadc3a-5763-4612-9232-d3a98ea188d6"
  },
  {
   "a": "Jaco De Waal",
   "b": "Michael Velez",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0,
   "avgActual": 0,
   "avgExpected": 0,
   "aId": "19407a76-031d-4be3-8ed8-ba88cccdfdd3",
   "bId": "772b8bd9-ee55-463b-8e7d-f5e571a2f047"
  },
  {
   "a": "Julius Degen",
   "b": "Michael Ksiezopolski",
   "team": "Monroe",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0,
   "avgActual": -5.2,
   "avgExpected": -5.2,
   "aId": "3a828946-f189-43be-905a-00c20a3b0b84",
   "bId": "73090c04-48a1-48b2-b638-55b1e656f4ed"
  },
  {
   "a": "Aleksey Sergeev",
   "b": "Brian O'Neill",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -0.7,
   "avgExpected": -0.4,
   "aId": "80467dc7-edfb-46e8-a30a-b6acd19ee222",
   "bId": "a00f55b9-a52a-4982-8ffc-9dbe4e66469e"
  },
  {
   "a": "Hans Tang",
   "b": "Frank Clark",
   "team": "Flemington",
   "n": 8,
   "w": 3,
   "l": 5,
   "synergy": -0.1,
   "avgActual": -2,
   "avgExpected": -1.9,
   "aId": "b4694087-759d-4570-9394-3e7c99f19099",
   "bId": "fb42e711-528f-4028-80c6-e32013e3f807"
  },
  {
   "a": "Craig Frame",
   "b": "Dipen Bhatt",
   "team": "Pickle House",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.1,
   "avgActual": -1,
   "avgExpected": -0.8,
   "aId": "6043b3e3-217d-4ad3-bd5d-db9667b99bbc",
   "bId": "fe8af1d3-ff62-430d-90af-32794cc7b912"
  },
  {
   "a": "Nachiket Vaidya",
   "b": "Matthew Mintz",
   "team": "ACE Moorestown",
   "n": 8,
   "w": 3,
   "l": 5,
   "synergy": -0.1,
   "avgActual": -2.6,
   "avgExpected": -2.5,
   "aId": "0e35b16c-8027-4994-b04f-fd146d6d1709",
   "bId": "ad956d26-e552-40eb-97c4-38edfc1b0bc1"
  },
  {
   "a": "William Lee",
   "b": "Christian Lupica",
   "team": "Picklr Newtown",
   "n": 13,
   "w": 6,
   "l": 7,
   "synergy": -0.1,
   "avgActual": -0.5,
   "avgExpected": -0.3,
   "aId": "9e264c96-36cf-45a9-90ad-1e125a82c851",
   "bId": "ac97d2bc-5ee7-4285-8eb3-e5650a0f6f6e"
  },
  {
   "a": "Gary White",
   "b": "Jacob Yandoli",
   "team": "Premiere",
   "n": 10,
   "w": 5,
   "l": 5,
   "synergy": -0.1,
   "avgActual": -1.1,
   "avgExpected": -1,
   "aId": "9a26eab9-96be-45e1-b380-2845a0e8e668",
   "bId": "be9bc229-2d57-4236-a951-11a2f91a09a3"
  },
  {
   "a": "Rob Pandolfi",
   "b": "Matthew Friedman",
   "team": "Premiere",
   "n": 9,
   "w": 4,
   "l": 5,
   "synergy": -0.1,
   "avgActual": -0.2,
   "avgExpected": -0.1,
   "aId": "081fc233-7f01-432d-85f9-c623b0524f49",
   "bId": "259fc7aa-7e69-4830-87d8-b9a758ec7fda"
  },
  {
   "a": "Dustin Rabinowitz",
   "b": "Vaughn Lawrence",
   "team": "Bounce Malvern",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 3.7,
   "avgExpected": 3.9,
   "aId": "d23839c0-334b-4423-9305-0c6281523d5d",
   "bId": "d4c1185c-6147-4164-90e1-06ecfa162596"
  },
  {
   "a": "Adriene Khon",
   "b": "Josh Knupp",
   "team": "Bounce Tempest",
   "n": 12,
   "w": 9,
   "l": 3,
   "synergy": -0.1,
   "avgActual": 1.6,
   "avgExpected": 1.7,
   "aId": "02ac193a-6e5d-4859-80bf-c8c25a89c1c8",
   "bId": "292c729f-c522-4f41-8208-e1caf7f94498"
  },
  {
   "a": "Austin Gow",
   "b": "Vaughn Lawrence",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 5.5,
   "avgExpected": 5.7,
   "aId": "0e577096-0b13-441d-b087-cc49cb55cfe2",
   "bId": "d4c1185c-6147-4164-90e1-06ecfa162596"
  },
  {
   "a": "Elliott Albanese",
   "b": "Camrin Cronheim",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 9,
   "w": 5,
   "l": 4,
   "synergy": -0.1,
   "avgActual": -0.1,
   "avgExpected": 0.1,
   "aId": "6af88387-5e2b-4ea7-b732-22885e4931a8",
   "bId": "8143def5-d564-4010-8258-ccb71cd481f1"
  },
  {
   "a": "Adriene Khon",
   "b": "David Brandolph",
   "team": "Bounce Tempest",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.1,
   "avgActual": -0.4,
   "avgExpected": -0.3,
   "aId": "02ac193a-6e5d-4859-80bf-c8c25a89c1c8",
   "bId": "be10853a-1f2c-4b56-8fd7-902ddc686401"
  },
  {
   "a": "Daniel Phillips",
   "b": "Wasib Malik",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.1,
   "avgActual": -7,
   "avgExpected": -6.8,
   "aId": "1ddcd805-f965-4357-9567-35920e191f8c",
   "bId": "659c9638-b908-4ddd-88a9-2bc40c334a08"
  },
  {
   "a": "Tom Laiso",
   "b": "Eugene Zaslavsky",
   "team": "Dill Dinkers Freehold",
   "n": 9,
   "w": 8,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 3.4,
   "avgExpected": 3.6,
   "aId": "13918154-3673-4dae-946a-2c2d4ac8863f",
   "bId": "9638b474-ad68-4eff-a5a5-6c40db6ed4bb"
  },
  {
   "a": "Camrin Cronheim",
   "b": "Vivek Kumar",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -0.1,
   "avgActual": 0,
   "avgExpected": 0.1,
   "aId": "8143def5-d564-4010-8258-ccb71cd481f1",
   "bId": "a472cebf-6bf1-42d1-9a41-fc8940cbb021"
  },
  {
   "a": "Alex Pecora",
   "b": "Joseph Yi",
   "team": "Picklr Newtown",
   "n": 8,
   "w": 3,
   "l": 5,
   "synergy": -0.1,
   "avgActual": -1.7,
   "avgExpected": -1.6,
   "aId": "3533f5a2-d7ed-4fd3-b969-5117c0474452",
   "bId": "e882fe51-042a-4368-b34f-fbabad19d7c1"
  },
  {
   "a": "Jaco De Waal",
   "b": "Joseph Yi",
   "team": "Picklr Newtown",
   "n": 10,
   "w": 3,
   "l": 7,
   "synergy": -0.1,
   "avgActual": -3.6,
   "avgExpected": -3.5,
   "aId": "19407a76-031d-4be3-8ed8-ba88cccdfdd3",
   "bId": "e882fe51-042a-4368-b34f-fbabad19d7c1"
  },
  {
   "a": "Steven Gregov",
   "b": "Frank Clark",
   "team": "Flemington",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.1,
   "avgActual": -7.2,
   "avgExpected": -7.1,
   "aId": "3efad314-83fb-4441-a7bf-510228cea1f8",
   "bId": "fb42e711-528f-4028-80c6-e32013e3f807"
  },
  {
   "a": "Camrin Cronheim",
   "b": "Austin Williams",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": -0.1,
   "avgActual": 2.8,
   "avgExpected": 2.9,
   "aId": "8143def5-d564-4010-8258-ccb71cd481f1",
   "bId": "bb0bdc33-be20-4a45-9de9-0a52a88d7af9"
  },
  {
   "a": "Sean O'Connell",
   "b": "Shahar Gelber",
   "team": "Flemington",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -0.7,
   "avgExpected": -0.4,
   "aId": "6d9b173b-57b7-499c-9bde-9bdafd152968",
   "bId": "7efd9bc6-6b2f-4e98-b785-136fea990664"
  },
  {
   "a": "Alex Boory",
   "b": "Zyril Carilo",
   "team": "Bounce Tempest",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -3.3,
   "avgExpected": -3.2,
   "aId": "897f1edf-63f3-4eec-bcf5-d5a1bf0be859",
   "bId": "b4efc48a-f302-4d27-8c35-0dac1e68eec8"
  },
  {
   "a": "Sean O'Connell",
   "b": "Frank Clark",
   "team": "Flemington",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.2,
   "avgActual": -6,
   "avgExpected": -5.5,
   "aId": "6d9b173b-57b7-499c-9bde-9bdafd152968",
   "bId": "fb42e711-528f-4028-80c6-e32013e3f807"
  },
  {
   "a": "Brian O'Neill",
   "b": "Jacob Rosengarten",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.2,
   "avgActual": -2.7,
   "avgExpected": -2.2,
   "aId": "a00f55b9-a52a-4982-8ffc-9dbe4e66469e",
   "bId": "b2f8ea85-7734-47a2-8ce7-bd968b3a51bc"
  },
  {
   "a": "Anthony Bonaventura",
   "b": "Christopher Natividad",
   "team": "Pickleball Kingdom Watchung",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 3.7,
   "avgExpected": 4.1,
   "aId": "58836d9c-6a12-4ed7-853f-dcee1e00dadd",
   "bId": "d0db1fca-1182-4e0e-8d5c-980be84ac87f"
  },
  {
   "a": "Matthew Mintz",
   "b": "Josh Sherlock",
   "team": "ACE Moorestown",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -0.2,
   "avgActual": -4.3,
   "avgExpected": -4,
   "aId": "ad956d26-e552-40eb-97c4-38edfc1b0bc1",
   "bId": "fa2292a3-4d44-4c69-b4b8-b7c8f6d9085a"
  },
  {
   "a": "Sebastian Ferrer",
   "b": "Matt Schall",
   "team": "Jersey Pickleball Club",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.2,
   "avgActual": 0.5,
   "avgExpected": 0.8,
   "aId": "5c354e5d-09ba-4d09-a8c4-76e0fb7eb78a",
   "bId": "aa0d9944-a9d3-46d5-8650-54e894adfeb2"
  },
  {
   "a": "Daniel Phillips",
   "b": "Zachary Puccia",
   "team": "Jersey Pickleball Club",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -0.2,
   "avgActual": -3.3,
   "avgExpected": -3,
   "aId": "1ddcd805-f965-4357-9567-35920e191f8c",
   "bId": "dd6582a2-1596-40b8-8a4c-fec00aaeb379"
  },
  {
   "a": "Chenfei Gao",
   "b": "Samuel Levinson",
   "team": "Dill Dinkers Freehold",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 1.5,
   "avgExpected": 1.9,
   "aId": "3807d345-e2d6-4e75-9a59-9248ebf6e296",
   "bId": "e3d7c7c2-6222-4f4d-b6b3-37931f24274b"
  },
  {
   "a": "Matthew Friedman",
   "b": "Boris Tserlin",
   "team": "Premiere",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.2,
   "avgActual": 2.7,
   "avgExpected": 3,
   "aId": "259fc7aa-7e69-4830-87d8-b9a758ec7fda",
   "bId": "6c71dd2d-6f76-4630-96d4-27f58e99e557"
  },
  {
   "a": "Braden Keith",
   "b": "Sheel Motiwala",
   "team": "Jersey Devil",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.2,
   "avgActual": -2.8,
   "avgExpected": -2.5,
   "aId": "d23d47c0-4f40-4691-b81a-9ad6e36402b6",
   "bId": "e3f3e90d-b026-49f2-8194-45e9252b61f8"
  },
  {
   "a": "Gautham Bondugula",
   "b": "Daniel Gallegos",
   "team": "Pickleball Kingdom Watchung",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.2,
   "avgActual": 1.7,
   "avgExpected": 2.1,
   "aId": "3da7de8e-f75c-4e90-b63e-f340cc8788a0",
   "bId": "6f9cb35b-f24c-4480-a8b4-86e6ea32f3c2"
  },
  {
   "a": "Bryan Nardone",
   "b": "Tyler Marlin",
   "team": "ACE Moorestown",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -0.2,
   "avgActual": -1.8,
   "avgExpected": -1.5,
   "aId": "a479d794-d9d0-4620-b322-b7f249f2ae5f",
   "bId": "bf530f1a-96e0-484c-b377-f1243f05571b"
  },
  {
   "a": "Camrin Cronheim",
   "b": "Jake Laifer",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.2,
   "avgActual": -1.3,
   "avgExpected": -0.9,
   "aId": "8143def5-d564-4010-8258-ccb71cd481f1",
   "bId": "d99428a2-b91c-460f-b2d4-cf3ce96f0643"
  },
  {
   "a": "Tyler Marlin",
   "b": "Christopher Yang",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.2,
   "avgActual": -2.7,
   "avgExpected": -2.1,
   "aId": "bf530f1a-96e0-484c-b377-f1243f05571b",
   "bId": "efe3ef0c-82f8-4370-89cc-ec41bd6719cc"
  },
  {
   "a": "Aleksey Sergeev",
   "b": "Rahul Purwah",
   "team": "Monroe",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.3,
   "avgActual": 0.5,
   "avgExpected": 0.9,
   "aId": "80467dc7-edfb-46e8-a30a-b6acd19ee222",
   "bId": "b19effeb-3b70-4f48-b8d9-781026933e86"
  },
  {
   "a": "Snehit Achanta",
   "b": "Michael Ksiezopolski",
   "team": "Monroe",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -7.7,
   "avgExpected": -6.9,
   "aId": "6e17bc1f-6adf-4354-8e03-e37860c1869b",
   "bId": "73090c04-48a1-48b2-b638-55b1e656f4ed"
  },
  {
   "a": "Al Mancini",
   "b": "Zach Hollmann",
   "team": "Pickle House",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": -0.3,
   "avgActual": 1,
   "avgExpected": 1.4,
   "aId": "51352d99-02ac-4299-abac-a688bfade22f",
   "bId": "8aef2d8a-0bd4-45df-b5d1-1a120a81ef0f"
  },
  {
   "a": "Chris Damato",
   "b": "Dipen Bhatt",
   "team": "Pickle House",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.3,
   "avgActual": 0.3,
   "avgExpected": 0.9,
   "aId": "445e89c8-a23c-440c-bd3c-7eab366bdd85",
   "bId": "fe8af1d3-ff62-430d-90af-32794cc7b912"
  },
  {
   "a": "Joshua Mindlin",
   "b": "Christian Lupica",
   "team": "Picklr Newtown",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": -0.3,
   "avgActual": -0.2,
   "avgExpected": 0.2,
   "aId": "439d9ebf-9409-4214-ad91-7c18a0153c71",
   "bId": "ac97d2bc-5ee7-4285-8eb3-e5650a0f6f6e"
  },
  {
   "a": "Justin Bautista",
   "b": "Zachary Lessner",
   "team": "Bounce Tempest",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -0.3,
   "avgActual": -0.1,
   "avgExpected": 0.3,
   "aId": "27660961-6245-4b09-aafe-359ca3205797",
   "bId": "2ce5ebef-8079-4871-8d2e-b34988abbaad"
  },
  {
   "a": "Anthony Fallet",
   "b": "Tim Dowd",
   "team": "Flemington",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.3,
   "avgActual": -2.2,
   "avgExpected": -1.6,
   "aId": "1949e493-55f0-4373-8c61-6a266543ddbf",
   "bId": "b7555b30-f1b5-4d44-9eff-dffd3e1b1b28"
  },
  {
   "a": "Shayne Clowar",
   "b": "Riguo Zheng",
   "team": "ACE Moorestown",
   "n": 6,
   "w": 0,
   "l": 6,
   "synergy": -0.3,
   "avgActual": -7.7,
   "avgExpected": -7.2,
   "aId": "30b75fd5-95cf-4a1a-b296-10e7e381166e",
   "bId": "c5fa0e7c-eb97-45fa-8a86-850a918fff54"
  },
  {
   "a": "William Lee",
   "b": "Joseph Yi",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 0,
   "avgExpected": 0.8,
   "aId": "9e264c96-36cf-45a9-90ad-1e125a82c851",
   "bId": "e882fe51-042a-4368-b34f-fbabad19d7c1"
  },
  {
   "a": "Alex Boory",
   "b": "Ashwin Korde",
   "team": "Bounce Tempest",
   "n": 9,
   "w": 3,
   "l": 6,
   "synergy": -0.3,
   "avgActual": -2.6,
   "avgExpected": -2.1,
   "aId": "897f1edf-63f3-4eec-bcf5-d5a1bf0be859",
   "bId": "f9f521ee-5f27-4f61-b4e0-4e0b9ad09aee"
  },
  {
   "a": "Simon Rosenwasser",
   "b": "Matt Schall",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.3,
   "avgActual": -0.7,
   "avgExpected": -0.1,
   "aId": "369dca37-2d15-4559-96d1-26a78df236a1",
   "bId": "aa0d9944-a9d3-46d5-8650-54e894adfeb2"
  },
  {
   "a": "Marr Flores",
   "b": "Christopher Natividad",
   "team": "Pickleball Kingdom Watchung",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 2,
   "avgExpected": 2.8,
   "aId": "1009522f-1f54-4cf1-a0a0-e24ad64f4a66",
   "bId": "d0db1fca-1182-4e0e-8d5c-980be84ac87f"
  },
  {
   "a": "Al Mancini",
   "b": "Gopi Narayanan",
   "team": "Pickle House",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -0.5,
   "avgExpected": 0.2,
   "aId": "51352d99-02ac-4299-abac-a688bfade22f",
   "bId": "5d55a4c4-8271-4e7b-b018-3da88a97c5fe"
  },
  {
   "a": "Austin Williams",
   "b": "Robbie Oddy",
   "team": "Flemington",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 4,
   "avgExpected": 4.6,
   "aId": "bb0bdc33-be20-4a45-9de9-0a52a88d7af9",
   "bId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6"
  },
  {
   "a": "Gautham Bondugula",
   "b": "Eric Jiang",
   "team": "Pickleball Kingdom Watchung",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.3,
   "avgActual": 0,
   "avgExpected": 0.8,
   "aId": "3da7de8e-f75c-4e90-b63e-f340cc8788a0",
   "bId": "5a604f85-b8f8-4084-8636-d403530fd480"
  },
  {
   "a": "Simon Rosenwasser",
   "b": "Zachary Puccia",
   "team": "Jersey Pickleball Club",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.3,
   "avgActual": -3.4,
   "avgExpected": -2.9,
   "aId": "369dca37-2d15-4559-96d1-26a78df236a1",
   "bId": "dd6582a2-1596-40b8-8a4c-fec00aaeb379"
  },
  {
   "a": "Anushk Gupta",
   "b": "Shashank Kamdar",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.3,
   "avgActual": 3.7,
   "avgExpected": 4.4,
   "aId": "1a851b17-0445-4807-b476-575fd261f774",
   "bId": "56db4b56-6166-437f-8ece-26576b7042e5"
  },
  {
   "a": "Eric Nguyen",
   "b": "Zyril Carilo",
   "team": "Bounce Tempest",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.3,
   "avgActual": 0.3,
   "avgExpected": 1.1,
   "aId": "87d526c6-72b6-4b17-bf77-9016fd049541",
   "bId": "b4efc48a-f302-4d27-8c35-0dac1e68eec8"
  },
  {
   "a": "Hans Tang",
   "b": "Robbie Oddy",
   "team": "Flemington",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.4,
   "avgActual": 1.8,
   "avgExpected": 2.5,
   "aId": "b4694087-759d-4570-9394-3e7c99f19099",
   "bId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6"
  },
  {
   "a": "Andy Ead",
   "b": "Shahar Gelber",
   "team": "Flemington",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.4,
   "avgActual": -2.7,
   "avgExpected": -1.9,
   "aId": "6c4d1df7-7f8f-432b-a8a7-8751e9aa521d",
   "bId": "7efd9bc6-6b2f-4e98-b785-136fea990664"
  },
  {
   "a": "Andy Ead",
   "b": "Hans Tang",
   "team": "Flemington",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.4,
   "avgActual": -2.3,
   "avgExpected": -1.5,
   "aId": "6c4d1df7-7f8f-432b-a8a7-8751e9aa521d",
   "bId": "b4694087-759d-4570-9394-3e7c99f19099"
  },
  {
   "a": "Daniel Gallegos",
   "b": "Drew Youssef",
   "team": "Pickleball Kingdom Watchung",
   "n": 8,
   "w": 3,
   "l": 5,
   "synergy": -0.4,
   "avgActual": -2,
   "avgExpected": -1.4,
   "aId": "6f9cb35b-f24c-4480-a8b4-86e6ea32f3c2",
   "bId": "d13d6c03-eea2-44f3-a497-965b1e95ea83"
  },
  {
   "a": "Ian Chin",
   "b": "Thomas Connolly",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 12,
   "w": 9,
   "l": 3,
   "synergy": -0.4,
   "avgActual": 2.7,
   "avgExpected": 3.1,
   "aId": "34d3737f-b8db-4d4c-bf25-6e8bb3524157",
   "bId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3"
  },
  {
   "a": "Matthew Friedman",
   "b": "Neil Ottrando",
   "team": "Premiere",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -0.4,
   "avgActual": -0.1,
   "avgExpected": 0.4,
   "aId": "259fc7aa-7e69-4830-87d8-b9a758ec7fda",
   "bId": "4de9fd52-8910-4c2f-9aad-e2e55a0e33a1"
  },
  {
   "a": "Daniel Phillips",
   "b": "Gary Sidhu",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.4,
   "avgActual": -3,
   "avgExpected": -2.2,
   "aId": "1ddcd805-f965-4357-9567-35920e191f8c",
   "bId": "fa28fec9-9eff-4831-912d-4180f8760eeb"
  },
  {
   "a": "Mickey Cook",
   "b": "Al Mancini",
   "team": "Pickle House",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -0.4,
   "avgExpected": 0.2,
   "aId": "3babc519-f395-4ef7-8f6f-b38d25c139d0",
   "bId": "51352d99-02ac-4299-abac-a688bfade22f"
  },
  {
   "a": "Joshua Octaviano",
   "b": "Stanley Bonczek",
   "team": "Pickleball Kingdom Watchung",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.4,
   "avgActual": 2.3,
   "avgExpected": 3,
   "aId": "37c7c06b-1600-450e-9f14-61d397872bc6",
   "bId": "f4cd45db-8d83-423a-8936-c7d7a3b0ffad"
  },
  {
   "a": "Wasib Malik",
   "b": "Anthony Bradford Bisignano",
   "team": "Jersey Pickleball Club",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -0.4,
   "avgActual": -3.8,
   "avgExpected": -3.2,
   "aId": "659c9638-b908-4ddd-88a9-2bc40c334a08",
   "bId": "7ce7d3d1-b44b-431c-b3a5-20e153cc1777"
  },
  {
   "a": "Ian Chin",
   "b": "Keith Shedlock",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -5,
   "avgExpected": -4.2,
   "aId": "34d3737f-b8db-4d4c-bf25-6e8bb3524157",
   "bId": "f4b44cd7-fc9a-41a2-b569-cdaf08b0bf26"
  },
  {
   "a": "Tom Laiso",
   "b": "Yoon Choi",
   "team": "Dill Dinkers Freehold",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.4,
   "avgActual": 2.5,
   "avgExpected": 3.2,
   "aId": "13918154-3673-4dae-946a-2c2d4ac8863f",
   "bId": "f3f6a49d-fd44-4f24-bb92-b3d04b50a3d9"
  },
  {
   "a": "Ryan Rosen",
   "b": "Jeff Zamorski",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.4,
   "avgActual": 2.3,
   "avgExpected": 3.3,
   "aId": "97f2b250-2030-4296-be61-63cffb17043b",
   "bId": "f8687730-86a2-4769-a38b-7c0269ee88f5"
  },
  {
   "a": "Matthew Mintz",
   "b": "Tyler Marlin",
   "team": "ACE Moorestown",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -2.5,
   "avgExpected": -1.7,
   "aId": "ad956d26-e552-40eb-97c4-38edfc1b0bc1",
   "bId": "bf530f1a-96e0-484c-b377-f1243f05571b"
  },
  {
   "a": "Josh Knupp",
   "b": "Eric Nguyen",
   "team": "Bounce Tempest",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -0.7,
   "avgExpected": 0.1,
   "aId": "292c729f-c522-4f41-8208-e1caf7f94498",
   "bId": "87d526c6-72b6-4b17-bf77-9016fd049541"
  },
  {
   "a": "Alex Mihalca",
   "b": "Justin Chin",
   "team": "Bounce Tempest",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.4,
   "avgActual": 0.3,
   "avgExpected": 1.2,
   "aId": "47054f48-f7f3-4a11-8a3c-03160ea588b6",
   "bId": "9fa77cf9-39da-4bfe-8ada-d01143ca498c"
  },
  {
   "a": "Hany Ibrahim",
   "b": "Alexandre Inamasu",
   "team": "Flemington",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -6.7,
   "avgExpected": -5.7,
   "aId": "5b439439-36f5-421f-afaa-5d8b1a547954",
   "bId": "699549b6-bbc0-49a5-9040-22cfbf13c422"
  },
  {
   "a": "Michael Ksiezopolski",
   "b": "Brian O'Neill",
   "team": "Monroe",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -6.7,
   "avgExpected": -5.6,
   "aId": "73090c04-48a1-48b2-b638-55b1e656f4ed",
   "bId": "a00f55b9-a52a-4982-8ffc-9dbe4e66469e"
  },
  {
   "a": "Jonathan Ksiezopolski",
   "b": "Jacob Rosengarten",
   "team": "Monroe",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -4.7,
   "avgExpected": -3.5,
   "aId": "20fe2f66-8825-4881-a325-b8fb78ee5ff6",
   "bId": "b2f8ea85-7734-47a2-8ce7-bd968b3a51bc"
  },
  {
   "a": "Anthony Fallet",
   "b": "Jay Alquiros",
   "team": "Flemington",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -7.7,
   "avgExpected": -6.5,
   "aId": "1949e493-55f0-4373-8c61-6a266543ddbf",
   "bId": "a3dbb909-29a5-4aa0-a40f-42bed311f9cd"
  },
  {
   "a": "Ryan Furman",
   "b": "Zach Bowe",
   "team": "Jersey Devil",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": -0.5,
   "avgActual": 3.3,
   "avgExpected": 4.2,
   "aId": "a89121dd-192b-486d-b39d-18ee8447d641",
   "bId": "eebadc3a-5763-4612-9232-d3a98ea188d6"
  },
  {
   "a": "Daniel Ehala",
   "b": "Shayne Clowar",
   "team": "ACE Moorestown",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -1.8,
   "avgExpected": -1,
   "aId": "2ee28d63-2f38-468f-b824-9b17aa938413",
   "bId": "30b75fd5-95cf-4a1a-b296-10e7e381166e"
  },
  {
   "a": "Nachiket Vaidya",
   "b": "Josh Sherlock",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -5,
   "avgExpected": -3.8,
   "aId": "0e35b16c-8027-4994-b04f-fd146d6d1709",
   "bId": "fa2292a3-4d44-4c69-b4b8-b7c8f6d9085a"
  },
  {
   "a": "Rob Pandolfi",
   "b": "Chris Frangipane",
   "team": "Premiere",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": -0.5,
   "avgActual": 1.1,
   "avgExpected": 1.9,
   "aId": "081fc233-7f01-432d-85f9-c623b0524f49",
   "bId": "e8bb81fd-869a-459d-8108-b9ac6bc1b84d"
  },
  {
   "a": "Marr Flores",
   "b": "Anthony Bonaventura",
   "team": "Pickleball Kingdom Watchung",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -1,
   "avgExpected": 0.1,
   "aId": "1009522f-1f54-4cf1-a0a0-e24ad64f4a66",
   "bId": "58836d9c-6a12-4ed7-853f-dcee1e00dadd"
  },
  {
   "a": "Steven Gregov",
   "b": "Robbie Oddy",
   "team": "Flemington",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -1,
   "avgExpected": 0.2,
   "aId": "3efad314-83fb-4441-a7bf-510228cea1f8",
   "bId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6"
  },
  {
   "a": "Mickey Cook",
   "b": "Chris Damato",
   "team": "Pickle House",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.5,
   "avgActual": 1.7,
   "avgExpected": 2.8,
   "aId": "3babc519-f395-4ef7-8f6f-b38d25c139d0",
   "bId": "445e89c8-a23c-440c-bd3c-7eab366bdd85"
  },
  {
   "a": "Neil Ottrando",
   "b": "Nicholas Yandoli",
   "team": "Premiere",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -2.5,
   "avgExpected": -1.6,
   "aId": "4de9fd52-8910-4c2f-9aad-e2e55a0e33a1",
   "bId": "5ec3a192-8b1f-43ab-a348-739a0ba15429"
  },
  {
   "a": "Daniel Schwab",
   "b": "Brian Barenbaum",
   "team": "Jersey Devil",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -0.5,
   "avgActual": -3.8,
   "avgExpected": -3,
   "aId": "3382b214-0a3e-4005-aba4-084588de0d98",
   "bId": "b95f46c6-d374-4e13-a57b-abd171b1c847"
  },
  {
   "a": "Shahar Gelber",
   "b": "Frank Clark",
   "team": "Flemington",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.5,
   "avgActual": -3,
   "avgExpected": -2.1,
   "aId": "7efd9bc6-6b2f-4e98-b785-136fea990664",
   "bId": "fb42e711-528f-4028-80c6-e32013e3f807"
  },
  {
   "a": "Hany Ibrahim",
   "b": "Shahar Gelber",
   "team": "Flemington",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.6,
   "avgActual": -3.4,
   "avgExpected": -2.4,
   "aId": "5b439439-36f5-421f-afaa-5d8b1a547954",
   "bId": "7efd9bc6-6b2f-4e98-b785-136fea990664"
  },
  {
   "a": "Ken Velarde",
   "b": "Anthony Bonaventura",
   "team": "Pickleball Kingdom Watchung",
   "n": 12,
   "w": 8,
   "l": 4,
   "synergy": -0.6,
   "avgActual": 1.3,
   "avgExpected": 2.1,
   "aId": "25aa47d0-76b8-48be-a5be-b1d33b423e82",
   "bId": "58836d9c-6a12-4ed7-853f-dcee1e00dadd"
  },
  {
   "a": "Ian Chin",
   "b": "Marc Padre",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.6,
   "avgActual": 0,
   "avgExpected": 1.5,
   "aId": "34d3737f-b8db-4d4c-bf25-6e8bb3524157",
   "bId": "a131a707-f20e-4838-9dcf-7cecb40c2705"
  },
  {
   "a": "Joshua Mindlin",
   "b": "William Lee",
   "team": "Picklr Newtown",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -0.6,
   "avgActual": -2.1,
   "avgExpected": -1.3,
   "aId": "439d9ebf-9409-4214-ad91-7c18a0153c71",
   "bId": "9e264c96-36cf-45a9-90ad-1e125a82c851"
  },
  {
   "a": "Ron Branca",
   "b": "Alex Pecora",
   "team": "Picklr Newtown",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -2,
   "avgExpected": -0.8,
   "aId": "2caf34a7-c53c-410c-a7b4-47dd61398830",
   "bId": "3533f5a2-d7ed-4fd3-b969-5117c0474452"
  },
  {
   "a": "Shawn Ganow",
   "b": "Scott Bohrer",
   "team": "Bounce Malvern",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -1.5,
   "avgExpected": -0.5,
   "aId": "1e340ccb-0e0f-4b6b-b760-d1a723561d04",
   "bId": "7c8310a8-1a97-4c04-bbc0-519fe4132685"
  },
  {
   "a": "Nicholas Lagrua",
   "b": "Marcin Glowacki",
   "team": "Dill Dinkers Freehold",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -2.7,
   "avgExpected": -1.4,
   "aId": "6f1df3a0-bfc7-4d3b-a5f5-0ee9f40da488",
   "bId": "e47d28f2-187f-4aa7-acb8-356787ff82e5"
  },
  {
   "a": "Vaughn Mcclelland",
   "b": "Sheel Motiwala",
   "team": "Jersey Devil",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -0.1,
   "avgExpected": 0.8,
   "aId": "c33f3ff1-2c81-4630-8980-64fa03a7b102",
   "bId": "e3f3e90d-b026-49f2-8194-45e9252b61f8"
  },
  {
   "a": "Lou Frignito",
   "b": "Shashank Kamdar",
   "team": "Bounce Malvern",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": -0.6,
   "avgActual": 5,
   "avgExpected": 6,
   "aId": "1afca308-dca6-4828-946a-0ca6ad1b0c44",
   "bId": "56db4b56-6166-437f-8ece-26576b7042e5"
  },
  {
   "a": "Nicholas Yandoli",
   "b": "Jacob Yandoli",
   "team": "Premiere",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -2.5,
   "avgExpected": -1.3,
   "aId": "5ec3a192-8b1f-43ab-a348-739a0ba15429",
   "bId": "be9bc229-2d57-4236-a951-11a2f91a09a3"
  },
  {
   "a": "Eric Jiang",
   "b": "Daniel Gallegos",
   "team": "Pickleball Kingdom Watchung",
   "n": 8,
   "w": 3,
   "l": 5,
   "synergy": -0.6,
   "avgActual": 0.4,
   "avgExpected": 1.3,
   "aId": "5a604f85-b8f8-4084-8636-d403530fd480",
   "bId": "6f9cb35b-f24c-4480-a8b4-86e6ea32f3c2"
  },
  {
   "a": "Caleb Perry-Abner",
   "b": "Tyler Arsenault",
   "team": "Jersey Devil",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -0.6,
   "avgActual": 3.4,
   "avgExpected": 4.5,
   "aId": "c25e04ae-a9bf-4943-858d-5b7a94261e43",
   "bId": "e76d2d63-f7dc-40e7-aca2-d9b3aecf4d3e"
  },
  {
   "a": "Anthony Fallet",
   "b": "Sean O'Connell",
   "team": "Flemington",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -0.7,
   "avgActual": -2.6,
   "avgExpected": -1.5,
   "aId": "1949e493-55f0-4373-8c61-6a266543ddbf",
   "bId": "6d9b173b-57b7-499c-9bde-9bdafd152968"
  },
  {
   "a": "Christopher Natividad",
   "b": "Josiah Kim",
   "team": "Pickleball Kingdom Watchung",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.7,
   "avgActual": 2.5,
   "avgExpected": 3.9,
   "aId": "d0db1fca-1182-4e0e-8d5c-980be84ac87f",
   "bId": "de8e2a33-d691-4652-84ef-532b89f467bc"
  },
  {
   "a": "Neel Goyal",
   "b": "Jake Laifer",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.7,
   "avgActual": 1,
   "avgExpected": 2.2,
   "aId": "8cfc8650-92ac-4ed4-9b57-2692526abd19",
   "bId": "d99428a2-b91c-460f-b2d4-cf3ce96f0643"
  },
  {
   "a": "Ian Chin",
   "b": "Jake Laifer",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -1.4,
   "avgExpected": -0.1,
   "aId": "34d3737f-b8db-4d4c-bf25-6e8bb3524157",
   "bId": "d99428a2-b91c-460f-b2d4-cf3ce96f0643"
  },
  {
   "a": "Matthew Eldridge",
   "b": "Tarkan Akas",
   "team": "Pickle House",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -4.7,
   "avgExpected": -3.1,
   "aId": "19cb95ac-bec2-41bb-a6ce-767d51e00f24",
   "bId": "7fd926bd-8473-435e-9330-5984c0637b19"
  },
  {
   "a": "Daniel Ehala",
   "b": "Vineeth Mathew",
   "team": "ACE Moorestown",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.7,
   "avgActual": -2.8,
   "avgExpected": -1.7,
   "aId": "2ee28d63-2f38-468f-b824-9b17aa938413",
   "bId": "329df703-2af3-46cd-a7ae-372a1956536e"
  },
  {
   "a": "Michael Rapaglia",
   "b": "Neil Ottrando",
   "team": "Premiere",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.7,
   "avgActual": -0.8,
   "avgExpected": 0.3,
   "aId": "0b84dcdf-2b96-4a9e-9eae-5523bf89c4f6",
   "bId": "4de9fd52-8910-4c2f-9aad-e2e55a0e33a1"
  },
  {
   "a": "Zachary Lessner",
   "b": "Alex Mihalca",
   "team": "Bounce Tempest",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -2,
   "avgExpected": -0.3,
   "aId": "2ce5ebef-8079-4871-8d2e-b34988abbaad",
   "bId": "47054f48-f7f3-4a11-8a3c-03160ea588b6"
  },
  {
   "a": "Scott Bohrer",
   "b": "Dustin Rabinowitz",
   "team": "Bounce Malvern",
   "n": 9,
   "w": 5,
   "l": 4,
   "synergy": -0.7,
   "avgActual": 1.2,
   "avgExpected": 2.2,
   "aId": "7c8310a8-1a97-4c04-bbc0-519fe4132685",
   "bId": "d23839c0-334b-4423-9305-0c6281523d5d"
  },
  {
   "a": "Alex Pecora",
   "b": "Thomas Fenton",
   "team": "Picklr Newtown",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -0.3,
   "avgExpected": 0.8,
   "aId": "3533f5a2-d7ed-4fd3-b969-5117c0474452",
   "bId": "c55df548-ee89-4493-9268-850675b96066"
  },
  {
   "a": "Scott Bohrer",
   "b": "Jeff Zamorski",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.7,
   "avgActual": 0.3,
   "avgExpected": 1.7,
   "aId": "7c8310a8-1a97-4c04-bbc0-519fe4132685",
   "bId": "f8687730-86a2-4769-a38b-7c0269ee88f5"
  },
  {
   "a": "Kevin Lin",
   "b": "Andrew Bernard",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -3,
   "avgExpected": -1.3,
   "aId": "44bbc794-d40d-4fbf-a59e-ddb785496f21",
   "bId": "8079e74f-c537-4e42-9590-e8d60f10ba3d"
  },
  {
   "a": "Gopi Narayanan",
   "b": "Michael Li",
   "team": "Pickle House",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.7,
   "avgActual": 0.7,
   "avgExpected": 2.4,
   "aId": "5d55a4c4-8271-4e7b-b018-3da88a97c5fe",
   "bId": "dc81629b-4ff7-45c4-b38e-b3b836bc0769"
  },
  {
   "a": "Matthew Friedman",
   "b": "Nicholas Yandoli",
   "team": "Premiere",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.7,
   "avgActual": 1.3,
   "avgExpected": 3,
   "aId": "259fc7aa-7e69-4830-87d8-b9a758ec7fda",
   "bId": "5ec3a192-8b1f-43ab-a348-739a0ba15429"
  },
  {
   "a": "Snehit Achanta",
   "b": "Salman Saad",
   "team": "Monroe",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -8.7,
   "avgExpected": -7.1,
   "aId": "6e17bc1f-6adf-4354-8e03-e37860c1869b",
   "bId": "f7c4d103-d246-456d-8fd5-6418c6a0e002"
  },
  {
   "a": "Christopher Natividad",
   "b": "Drew Youssef",
   "team": "Pickleball Kingdom Watchung",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -1.8,
   "avgExpected": -0.4,
   "aId": "d0db1fca-1182-4e0e-8d5c-980be84ac87f",
   "bId": "d13d6c03-eea2-44f3-a497-965b1e95ea83"
  },
  {
   "a": "Matthew Eldridge",
   "b": "Deepak Sunku",
   "team": "Pickle House",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.8,
   "avgActual": 0.3,
   "avgExpected": 2.2,
   "aId": "19cb95ac-bec2-41bb-a6ce-767d51e00f24",
   "bId": "ce590106-6f19-43b7-8a91-4dc31d28eb31"
  },
  {
   "a": "Brandyn Schuchart",
   "b": "Ashwin Korde",
   "team": "Bounce Tempest",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -0.8,
   "avgActual": 1.1,
   "avgExpected": 2.5,
   "aId": "9d821d34-4af3-4e4a-999d-25308b75ca0f",
   "bId": "f9f521ee-5f27-4f61-b4e0-4e0b9ad09aee"
  },
  {
   "a": "Ali Husain",
   "b": "Craig Frame",
   "team": "Pickle House",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.8,
   "avgActual": -1,
   "avgExpected": 0.9,
   "aId": "09d614ca-a9b2-44b6-a402-51046c6883af",
   "bId": "6043b3e3-217d-4ad3-bd5d-db9667b99bbc"
  },
  {
   "a": "Zachary Lisojo",
   "b": "Stanley Bonczek",
   "team": "Pickleball Kingdom Watchung",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.8,
   "avgActual": 2,
   "avgExpected": 4,
   "aId": "e2086778-379f-4d43-8ce7-6447129d8812",
   "bId": "f4cd45db-8d83-423a-8936-c7d7a3b0ffad"
  },
  {
   "a": "Thomas Connolly",
   "b": "Vivek Kumar",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.8,
   "avgActual": -1.3,
   "avgExpected": 0.4,
   "aId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3",
   "bId": "a472cebf-6bf1-42d1-9a41-fc8940cbb021"
  },
  {
   "a": "Chenfei Gao",
   "b": "Harrison Mui",
   "team": "Dill Dinkers Freehold",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.8,
   "avgActual": 0.3,
   "avgExpected": 2.3,
   "aId": "3807d345-e2d6-4e75-9a59-9248ebf6e296",
   "bId": "fa1d3cb9-cd76-4f49-8024-c6224aa5b7c1"
  },
  {
   "a": "Matthew Chen",
   "b": "Tyler Arsenault",
   "team": "Jersey Devil",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": -0.8,
   "avgActual": 0.4,
   "avgExpected": 1.6,
   "aId": "68e9ac74-5119-4dbb-8503-72bcdbade183",
   "bId": "e76d2d63-f7dc-40e7-aca2-d9b3aecf4d3e"
  },
  {
   "a": "Andy Ead",
   "b": "Tim Dowd",
   "team": "Flemington",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -0.8,
   "avgActual": -4.3,
   "avgExpected": -3,
   "aId": "6c4d1df7-7f8f-432b-a8a7-8751e9aa521d",
   "bId": "b7555b30-f1b5-4d44-9eff-dffd3e1b1b28"
  },
  {
   "a": "Abhishekh Mehra",
   "b": "Brian O'Neill",
   "team": "Monroe",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -6.7,
   "avgExpected": -4.8,
   "aId": "6e92db16-8465-411e-bc3f-935badc74f47",
   "bId": "a00f55b9-a52a-4982-8ffc-9dbe4e66469e"
  },
  {
   "a": "Lou Frignito",
   "b": "Jeff Zamorski",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.8,
   "avgActual": 1.7,
   "avgExpected": 3.6,
   "aId": "1afca308-dca6-4828-946a-0ca6ad1b0c44",
   "bId": "f8687730-86a2-4769-a38b-7c0269ee88f5"
  },
  {
   "a": "Brian Barenbaum",
   "b": "Sheel Motiwala",
   "team": "Jersey Devil",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.8,
   "avgActual": -3.7,
   "avgExpected": -1.8,
   "aId": "b95f46c6-d374-4e13-a57b-abd171b1c847",
   "bId": "e3f3e90d-b026-49f2-8194-45e9252b61f8"
  },
  {
   "a": "Robert Finley",
   "b": "Riguo Zheng",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -9.3,
   "avgExpected": -7.4,
   "aId": "0d70122a-9002-461f-8600-a9afed2e8c3f",
   "bId": "c5fa0e7c-eb97-45fa-8a86-850a918fff54"
  },
  {
   "a": "Craig Frame",
   "b": "Michael Li",
   "team": "Pickle House",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.9,
   "avgActual": 0,
   "avgExpected": 1.6,
   "aId": "6043b3e3-217d-4ad3-bd5d-db9667b99bbc",
   "bId": "dc81629b-4ff7-45c4-b38e-b3b836bc0769"
  },
  {
   "a": "Matthew Eldridge",
   "b": "Chris Damato",
   "team": "Pickle House",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.9,
   "avgActual": 0.7,
   "avgExpected": 2.7,
   "aId": "19cb95ac-bec2-41bb-a6ce-767d51e00f24",
   "bId": "445e89c8-a23c-440c-bd3c-7eab366bdd85"
  },
  {
   "a": "Marc Harden",
   "b": "Riguo Zheng",
   "team": "ACE Moorestown",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -0.9,
   "avgActual": -6.5,
   "avgExpected": -5,
   "aId": "55194d2f-f537-4e19-b901-86c559f25ef2",
   "bId": "c5fa0e7c-eb97-45fa-8a86-850a918fff54"
  },
  {
   "a": "Zachary Puccia",
   "b": "Gary Sidhu",
   "team": "Jersey Pickleball Club",
   "n": 9,
   "w": 2,
   "l": 7,
   "synergy": -0.9,
   "avgActual": -4.1,
   "avgExpected": -2.8,
   "aId": "dd6582a2-1596-40b8-8a4c-fec00aaeb379",
   "bId": "fa28fec9-9eff-4831-912d-4180f8760eeb"
  },
  {
   "a": "Michael Rapaglia",
   "b": "Gary White",
   "team": "Premiere",
   "n": 14,
   "w": 6,
   "l": 8,
   "synergy": -0.9,
   "avgActual": -0.7,
   "avgExpected": 0.5,
   "aId": "0b84dcdf-2b96-4a9e-9eae-5523bf89c4f6",
   "bId": "9a26eab9-96be-45e1-b380-2845a0e8e668"
  },
  {
   "a": "Brandyn Schuchart",
   "b": "Zyril Carilo",
   "team": "Bounce Tempest",
   "n": 8,
   "w": 3,
   "l": 5,
   "synergy": -0.9,
   "avgActual": -0.6,
   "avgExpected": 0.7,
   "aId": "9d821d34-4af3-4e4a-999d-25308b75ca0f",
   "bId": "b4efc48a-f302-4d27-8c35-0dac1e68eec8"
  },
  {
   "a": "Matthew Chen",
   "b": "Ryan Furman",
   "team": "Jersey Devil",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -0.9,
   "avgActual": -0.6,
   "avgExpected": 0.8,
   "aId": "68e9ac74-5119-4dbb-8503-72bcdbade183",
   "bId": "a89121dd-192b-486d-b39d-18ee8447d641"
  },
  {
   "a": "Patrick Cadieu",
   "b": "Anthony Bradford Bisignano",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.9,
   "avgActual": -3.7,
   "avgExpected": -1.5,
   "aId": "6bf475b8-0f4c-4e4b-a1ba-279f5f8aa008",
   "bId": "7ce7d3d1-b44b-431c-b3a5-20e153cc1777"
  },
  {
   "a": "Emil Pescatore",
   "b": "Drew Youssef",
   "team": "Pickleball Kingdom Watchung",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.9,
   "avgActual": -2.2,
   "avgExpected": -0.5,
   "aId": "1c9b7abf-dae6-4e0d-a31d-485e99a01fec",
   "bId": "d13d6c03-eea2-44f3-a497-965b1e95ea83"
  },
  {
   "a": "Jonathan Ksiezopolski",
   "b": "Rahul Purwah",
   "team": "Monroe",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1,
   "avgActual": -4.7,
   "avgExpected": -2.3,
   "aId": "20fe2f66-8825-4881-a325-b8fb78ee5ff6",
   "bId": "b19effeb-3b70-4f48-b8d9-781026933e86"
  },
  {
   "a": "Kevin Sun",
   "b": "Josiah Kim",
   "team": "Pickleball Kingdom Watchung",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": -1,
   "avgActual": 0.5,
   "avgExpected": 1.9,
   "aId": "88c57c1f-436b-4280-9bd7-75eafe496b70",
   "bId": "de8e2a33-d691-4652-84ef-532b89f467bc"
  },
  {
   "a": "Nachiket Vaidya",
   "b": "Marc Harden",
   "team": "ACE Moorestown",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1,
   "avgActual": -5,
   "avgExpected": -3,
   "aId": "0e35b16c-8027-4994-b04f-fd146d6d1709",
   "bId": "55194d2f-f537-4e19-b901-86c559f25ef2"
  },
  {
   "a": "Tim Cahalin",
   "b": "Christian Lupica",
   "team": "Picklr Newtown",
   "n": 8,
   "w": 2,
   "l": 6,
   "synergy": -1,
   "avgActual": -4,
   "avgExpected": -2.5,
   "aId": "7610b0d0-07a5-4408-ade6-d5ea5d80fe0a",
   "bId": "ac97d2bc-5ee7-4285-8eb3-e5650a0f6f6e"
  },
  {
   "a": "Josh Knupp",
   "b": "Justin Chin",
   "team": "Bounce Tempest",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1,
   "avgActual": -1.3,
   "avgExpected": 1,
   "aId": "292c729f-c522-4f41-8208-e1caf7f94498",
   "bId": "9fa77cf9-39da-4bfe-8ada-d01143ca498c"
  },
  {
   "a": "Joseph Lynskey",
   "b": "Matthew Friedman",
   "team": "Premiere",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1,
   "avgActual": -4,
   "avgExpected": -1.9,
   "aId": "0e8c08b7-0e58-434b-8830-f37779f821dc",
   "bId": "259fc7aa-7e69-4830-87d8-b9a758ec7fda"
  },
  {
   "a": "Chenfei Gao",
   "b": "Nicholas Lagrua",
   "team": "Dill Dinkers Freehold",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -1,
   "avgActual": 0,
   "avgExpected": 1.6,
   "aId": "3807d345-e2d6-4e75-9a59-9248ebf6e296",
   "bId": "6f1df3a0-bfc7-4d3b-a5f5-0ee9f40da488"
  },
  {
   "a": "Zachary Lessner",
   "b": "Alex Boory",
   "team": "Bounce Tempest",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1,
   "avgActual": -4.2,
   "avgExpected": -2.3,
   "aId": "2ce5ebef-8079-4871-8d2e-b34988abbaad",
   "bId": "897f1edf-63f3-4eec-bcf5-d5a1bf0be859"
  },
  {
   "a": "Marr Flores",
   "b": "Josiah Kim",
   "team": "Pickleball Kingdom Watchung",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1,
   "avgActual": 0.3,
   "avgExpected": 2.3,
   "aId": "1009522f-1f54-4cf1-a0a0-e24ad64f4a66",
   "bId": "de8e2a33-d691-4652-84ef-532b89f467bc"
  },
  {
   "a": "Nachiket Vaidya",
   "b": "Bryan Nardone",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1,
   "avgActual": -4.7,
   "avgExpected": -2.4,
   "aId": "0e35b16c-8027-4994-b04f-fd146d6d1709",
   "bId": "a479d794-d9d0-4620-b322-b7f249f2ae5f"
  },
  {
   "a": "Austin Gow",
   "b": "Lou Frignito",
   "team": "Bounce Malvern",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": -1,
   "avgActual": 3.7,
   "avgExpected": 5.2,
   "aId": "0e577096-0b13-441d-b087-cc49cb55cfe2",
   "bId": "1afca308-dca6-4828-946a-0ca6ad1b0c44"
  },
  {
   "a": "Tim Cahalin",
   "b": "Michael Velez",
   "team": "Picklr Newtown",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1,
   "avgActual": -2.2,
   "avgExpected": -0.2,
   "aId": "7610b0d0-07a5-4408-ade6-d5ea5d80fe0a",
   "bId": "772b8bd9-ee55-463b-8e7d-f5e571a2f047"
  },
  {
   "a": "Brian O'Neill",
   "b": "Rahul Purwah",
   "team": "Monroe",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -5.3,
   "avgExpected": -2.8,
   "aId": "a00f55b9-a52a-4982-8ffc-9dbe4e66469e",
   "bId": "b19effeb-3b70-4f48-b8d9-781026933e86"
  },
  {
   "a": "Ryan Furman",
   "b": "Braden Keith",
   "team": "Jersey Devil",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.1,
   "avgActual": -2,
   "avgExpected": 0.1,
   "aId": "a89121dd-192b-486d-b39d-18ee8447d641",
   "bId": "d23d47c0-4f40-4691-b81a-9ad6e36402b6"
  },
  {
   "a": "Daniel Phillips",
   "b": "Kevin Wysoczynski",
   "team": "Jersey Pickleball Club",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -1.1,
   "avgActual": -4.8,
   "avgExpected": -2.8,
   "aId": "1ddcd805-f965-4357-9567-35920e191f8c",
   "bId": "f64f0cc2-6c82-4fe4-9992-747512700971"
  },
  {
   "a": "Austin Gow",
   "b": "Scott Bohrer",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -3.3,
   "avgExpected": -0.9,
   "aId": "0e577096-0b13-441d-b087-cc49cb55cfe2",
   "bId": "7c8310a8-1a97-4c04-bbc0-519fe4132685"
  },
  {
   "a": "Vince Abate",
   "b": "Braden Keith",
   "team": "Jersey Devil",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.1,
   "avgActual": -5,
   "avgExpected": -2.7,
   "aId": "8257200c-7448-4527-92df-436d7bb18cac",
   "bId": "d23d47c0-4f40-4691-b81a-9ad6e36402b6"
  },
  {
   "a": "Kushal Thapa",
   "b": "Braden Keith",
   "team": "Jersey Devil",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -1.1,
   "avgActual": -2,
   "avgExpected": -0.2,
   "aId": "85b62c8d-b3e4-4f75-93ec-cf7b5097a2ac",
   "bId": "d23d47c0-4f40-4691-b81a-9ad6e36402b6"
  },
  {
   "a": "Andrew Bernard",
   "b": "Kevin Wysoczynski",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1.1,
   "avgActual": -2.7,
   "avgExpected": -0.1,
   "aId": "8079e74f-c537-4e42-9590-e8d60f10ba3d",
   "bId": "f64f0cc2-6c82-4fe4-9992-747512700971"
  },
  {
   "a": "Caesar Gene",
   "b": "Yoon Choi",
   "team": "Dill Dinkers Freehold",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.1,
   "avgActual": -3.7,
   "avgExpected": -1.1,
   "aId": "a0aa8b27-3980-4abd-a62c-62d801cb0a82",
   "bId": "f3f6a49d-fd44-4f24-bb92-b3d04b50a3d9"
  },
  {
   "a": "Daniel Phillips",
   "b": "Patrick Cadieu",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -5.3,
   "avgExpected": -2.8,
   "aId": "1ddcd805-f965-4357-9567-35920e191f8c",
   "bId": "6bf475b8-0f4c-4e4b-a1ba-279f5f8aa008"
  },
  {
   "a": "Anthony Bonaventura",
   "b": "Stanley Bonczek",
   "team": "Pickleball Kingdom Watchung",
   "n": 10,
   "w": 5,
   "l": 5,
   "synergy": -1.2,
   "avgActual": 0.1,
   "avgExpected": 1.8,
   "aId": "58836d9c-6a12-4ed7-853f-dcee1e00dadd",
   "bId": "f4cd45db-8d83-423a-8936-c7d7a3b0ffad"
  },
  {
   "a": "Elliott Albanese",
   "b": "Neel Goyal",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.2,
   "avgActual": -0.7,
   "avgExpected": 1.7,
   "aId": "6af88387-5e2b-4ea7-b732-22885e4931a8",
   "bId": "8cfc8650-92ac-4ed4-9b57-2692526abd19"
  },
  {
   "a": "Shreyas Pani",
   "b": "Jason Makarevic",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 6,
   "w": 6,
   "l": 0,
   "synergy": -1.2,
   "avgActual": 5.5,
   "avgExpected": 7.4,
   "aId": "3cebd01c-ff32-4544-b6a6-2a68152b2ee5",
   "bId": "f8835822-da21-4593-8b99-5665d2c2f3af"
  },
  {
   "a": "Boris Tserlin",
   "b": "Nicholas Como",
   "team": "Premiere",
   "n": 8,
   "w": 3,
   "l": 5,
   "synergy": -1.2,
   "avgActual": -0.2,
   "avgExpected": 1.5,
   "aId": "6c71dd2d-6f76-4630-96d4-27f58e99e557",
   "bId": "a286a593-65d0-4119-a211-3cd57bba652a"
  },
  {
   "a": "Neil Ottrando",
   "b": "Nicholas Como",
   "team": "Premiere",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": -1.2,
   "avgActual": 0.6,
   "avgExpected": 2.5,
   "aId": "4de9fd52-8910-4c2f-9aad-e2e55a0e33a1",
   "bId": "a286a593-65d0-4119-a211-3cd57bba652a"
  },
  {
   "a": "Justin Chin",
   "b": "Zyril Carilo",
   "team": "Bounce Tempest",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.2,
   "avgActual": -1,
   "avgExpected": 1.3,
   "aId": "9fa77cf9-39da-4bfe-8ada-d01143ca498c",
   "bId": "b4efc48a-f302-4d27-8c35-0dac1e68eec8"
  },
  {
   "a": "Anthony Bradford Bisignano",
   "b": "Zach Hizer",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.2,
   "avgActual": -1.7,
   "avgExpected": 1,
   "aId": "7ce7d3d1-b44b-431c-b3a5-20e153cc1777",
   "bId": "b5e576e1-d16d-4c9d-ab28-2e1b1e66487b"
  },
  {
   "a": "Adriene Khon",
   "b": "Hiep Pham",
   "team": "Bounce Tempest",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.2,
   "avgActual": -2.7,
   "avgExpected": -0.4,
   "aId": "02ac193a-6e5d-4859-80bf-c8c25a89c1c8",
   "bId": "515009fd-ac6a-4124-a871-dff85a118781"
  },
  {
   "a": "Gautham Bondugula",
   "b": "Anthony Bonaventura",
   "team": "Pickleball Kingdom Watchung",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.2,
   "avgActual": -2.7,
   "avgExpected": 0.1,
   "aId": "3da7de8e-f75c-4e90-b63e-f340cc8788a0",
   "bId": "58836d9c-6a12-4ed7-853f-dcee1e00dadd"
  },
  {
   "a": "Alex Pecora",
   "b": "Zach Mcgowan",
   "team": "Picklr Newtown",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -1.2,
   "avgActual": -0.8,
   "avgExpected": 1.4,
   "aId": "3533f5a2-d7ed-4fd3-b969-5117c0474452",
   "bId": "e71a8785-5959-4607-9af3-e3ac9e3c6d86"
  },
  {
   "a": "Ian Chin",
   "b": "Elliott Albanese",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 9,
   "w": 3,
   "l": 6,
   "synergy": -1.3,
   "avgActual": -1.6,
   "avgExpected": 0.4,
   "aId": "34d3737f-b8db-4d4c-bf25-6e8bb3524157",
   "bId": "6af88387-5e2b-4ea7-b732-22885e4931a8"
  },
  {
   "a": "Ken Velarde",
   "b": "Kevin Sun",
   "team": "Pickleball Kingdom Watchung",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -1.3,
   "avgActual": -1,
   "avgExpected": 1.1,
   "aId": "25aa47d0-76b8-48be-a5be-b1d33b423e82",
   "bId": "88c57c1f-436b-4280-9bd7-75eafe496b70"
  },
  {
   "a": "Stephen Conger",
   "b": "Tyler Arsenault",
   "team": "Jersey Devil",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -1.3,
   "avgActual": -1.2,
   "avgExpected": 1.1,
   "aId": "24e70ef7-b98e-459e-8a19-19a2b66a054e",
   "bId": "e76d2d63-f7dc-40e7-aca2-d9b3aecf4d3e"
  },
  {
   "a": "Anushk Gupta",
   "b": "Shawn Ganow",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.3,
   "avgActual": 0,
   "avgExpected": 2.6,
   "aId": "1a851b17-0445-4807-b476-575fd261f774",
   "bId": "1e340ccb-0e0f-4b6b-b760-d1a723561d04"
  },
  {
   "a": "Ken Velarde",
   "b": "Joshua Octaviano",
   "team": "Pickleball Kingdom Watchung",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.3,
   "avgActual": 0,
   "avgExpected": 3.1,
   "aId": "25aa47d0-76b8-48be-a5be-b1d33b423e82",
   "bId": "37c7c06b-1600-450e-9f14-61d397872bc6"
  },
  {
   "a": "Justin Chin",
   "b": "Ashwin Korde",
   "team": "Bounce Tempest",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.3,
   "avgActual": -3,
   "avgExpected": 0.1,
   "aId": "9fa77cf9-39da-4bfe-8ada-d01143ca498c",
   "bId": "f9f521ee-5f27-4f61-b4e0-4e0b9ad09aee"
  },
  {
   "a": "Robert Finley",
   "b": "Tyler Marlin",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.3,
   "avgActual": -6.7,
   "avgExpected": -3.6,
   "aId": "0d70122a-9002-461f-8600-a9afed2e8c3f",
   "bId": "bf530f1a-96e0-484c-b377-f1243f05571b"
  },
  {
   "a": "Anthony Fallet",
   "b": "Hany Ibrahim",
   "team": "Flemington",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -1.4,
   "avgActual": -6.6,
   "avgExpected": -4,
   "aId": "1949e493-55f0-4373-8c61-6a266543ddbf",
   "bId": "5b439439-36f5-421f-afaa-5d8b1a547954"
  },
  {
   "a": "Jacob Yandoli",
   "b": "Chris Frangipane",
   "team": "Premiere",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -1.4,
   "avgActual": -1.4,
   "avgExpected": 1.1,
   "aId": "be9bc229-2d57-4236-a951-11a2f91a09a3",
   "bId": "e8bb81fd-869a-459d-8108-b9ac6bc1b84d"
  },
  {
   "a": "Dustin Rabinowitz",
   "b": "Yash Shah",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.4,
   "avgActual": -1.3,
   "avgExpected": 2,
   "aId": "d23839c0-334b-4423-9305-0c6281523d5d",
   "bId": "fbf8a0f9-a289-4d98-a5e3-478c8dce672a"
  },
  {
   "a": "Neel Goyal",
   "b": "Jason Makarevic",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 8,
   "w": 7,
   "l": 1,
   "synergy": -1.4,
   "avgActual": 4.3,
   "avgExpected": 6.4,
   "aId": "8cfc8650-92ac-4ed4-9b57-2692526abd19",
   "bId": "f8835822-da21-4593-8b99-5665d2c2f3af"
  },
  {
   "a": "Marc Harden",
   "b": "Bryan Nardone",
   "team": "ACE Moorestown",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -1.4,
   "avgActual": -9.4,
   "avgExpected": -7,
   "aId": "55194d2f-f537-4e19-b901-86c559f25ef2",
   "bId": "a479d794-d9d0-4620-b322-b7f249f2ae5f"
  },
  {
   "a": "Gary White",
   "b": "Chris Frangipane",
   "team": "Premiere",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -1.4,
   "avgActual": -4.2,
   "avgExpected": -1.6,
   "aId": "9a26eab9-96be-45e1-b380-2845a0e8e668",
   "bId": "e8bb81fd-869a-459d-8108-b9ac6bc1b84d"
  },
  {
   "a": "Kushal Thapa",
   "b": "Vaughn Mcclelland",
   "team": "Jersey Devil",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.4,
   "avgActual": -4,
   "avgExpected": -1.1,
   "aId": "85b62c8d-b3e4-4f75-93ec-cf7b5097a2ac",
   "bId": "c33f3ff1-2c81-4630-8980-64fa03a7b102"
  },
  {
   "a": "Julius Degen",
   "b": "Salman Saad",
   "team": "Monroe",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.4,
   "avgActual": -8,
   "avgExpected": -4.8,
   "aId": "3a828946-f189-43be-905a-00c20a3b0b84",
   "bId": "f7c4d103-d246-456d-8fd5-6418c6a0e002"
  },
  {
   "a": "Rich Marcovecchio",
   "b": "Al Mancini",
   "team": "Pickle House",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.4,
   "avgActual": -4.2,
   "avgExpected": -1.5,
   "aId": "08197a69-d447-4483-b3ae-7b232fb0655d",
   "bId": "51352d99-02ac-4299-abac-a688bfade22f"
  },
  {
   "a": "Alex Mihalca",
   "b": "Alex Boory",
   "team": "Bounce Tempest",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -1.4,
   "avgActual": -2.6,
   "avgExpected": -0.1,
   "aId": "47054f48-f7f3-4a11-8a3c-03160ea588b6",
   "bId": "897f1edf-63f3-4eec-bcf5-d5a1bf0be859"
  },
  {
   "a": "Daniel Ehala",
   "b": "Tyler Marlin",
   "team": "ACE Moorestown",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -1.4,
   "avgActual": -2.8,
   "avgExpected": -0.6,
   "aId": "2ee28d63-2f38-468f-b824-9b17aa938413",
   "bId": "bf530f1a-96e0-484c-b377-f1243f05571b"
  },
  {
   "a": "Anthony Bradford Bisignano",
   "b": "Gary Sidhu",
   "team": "Jersey Pickleball Club",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -1.4,
   "avgActual": -4,
   "avgExpected": -1.9,
   "aId": "7ce7d3d1-b44b-431c-b3a5-20e153cc1777",
   "bId": "fa28fec9-9eff-4831-912d-4180f8760eeb"
  },
  {
   "a": "Matt Schall",
   "b": "Gary Sidhu",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.4,
   "avgActual": -1,
   "avgExpected": 1.9,
   "aId": "aa0d9944-a9d3-46d5-8650-54e894adfeb2",
   "bId": "fa28fec9-9eff-4831-912d-4180f8760eeb"
  },
  {
   "a": "Ivan Rios",
   "b": "Rahul Purwah",
   "team": "Monroe",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.5,
   "avgActual": -4.5,
   "avgExpected": -1.4,
   "aId": "5807a1c8-ca44-48d1-9dec-ee621a2817c2",
   "bId": "b19effeb-3b70-4f48-b8d9-781026933e86"
  },
  {
   "a": "Anthony Bonaventura",
   "b": "Kevin Sun",
   "team": "Pickleball Kingdom Watchung",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.5,
   "avgActual": -0.7,
   "avgExpected": 2.8,
   "aId": "58836d9c-6a12-4ed7-853f-dcee1e00dadd",
   "bId": "88c57c1f-436b-4280-9bd7-75eafe496b70"
  },
  {
   "a": "Derek Callihan",
   "b": "William Lee",
   "team": "Picklr Newtown",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.5,
   "avgActual": -6.2,
   "avgExpected": -3.3,
   "aId": "5eccfff7-0902-4be1-a70e-361ff447bf6a",
   "bId": "9e264c96-36cf-45a9-90ad-1e125a82c851"
  },
  {
   "a": "Michael Rapaglia",
   "b": "Joseph Lynskey",
   "team": "Premiere",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.5,
   "avgActual": -4,
   "avgExpected": -1,
   "aId": "0b84dcdf-2b96-4a9e-9eae-5523bf89c4f6",
   "bId": "0e8c08b7-0e58-434b-8830-f37779f821dc"
  },
  {
   "a": "Samuel Levinson",
   "b": "Harrison Mui",
   "team": "Dill Dinkers Freehold",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -1.5,
   "avgActual": -0.4,
   "avgExpected": 2.4,
   "aId": "e3d7c7c2-6222-4f4d-b6b3-37931f24274b",
   "bId": "fa1d3cb9-cd76-4f49-8024-c6224aa5b7c1"
  },
  {
   "a": "Christian Lupica",
   "b": "Joseph Yi",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.5,
   "avgActual": -4.3,
   "avgExpected": -0.9,
   "aId": "ac97d2bc-5ee7-4285-8eb3-e5650a0f6f6e",
   "bId": "e882fe51-042a-4368-b34f-fbabad19d7c1"
  },
  {
   "a": "Anthony Fallet",
   "b": "Andy Ead",
   "team": "Flemington",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.5,
   "avgActual": -4.5,
   "avgExpected": -1.5,
   "aId": "1949e493-55f0-4373-8c61-6a266543ddbf",
   "bId": "6c4d1df7-7f8f-432b-a8a7-8751e9aa521d"
  },
  {
   "a": "Michael Ksiezopolski",
   "b": "Aleksey Sergeev",
   "team": "Monroe",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.6,
   "avgActual": -7.3,
   "avgExpected": -3.7,
   "aId": "73090c04-48a1-48b2-b638-55b1e656f4ed",
   "bId": "80467dc7-edfb-46e8-a30a-b6acd19ee222"
  },
  {
   "a": "Braden Keith",
   "b": "Tyler Arsenault",
   "team": "Jersey Devil",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.6,
   "avgActual": -4.7,
   "avgExpected": -0.9,
   "aId": "d23d47c0-4f40-4691-b81a-9ad6e36402b6",
   "bId": "e76d2d63-f7dc-40e7-aca2-d9b3aecf4d3e"
  },
  {
   "a": "Tim Dowd",
   "b": "Robbie Oddy",
   "team": "Flemington",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -1.6,
   "avgActual": -0.5,
   "avgExpected": 2.2,
   "aId": "b7555b30-f1b5-4d44-9eff-dffd3e1b1b28",
   "bId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6"
  },
  {
   "a": "Ali Husain",
   "b": "Al Mancini",
   "team": "Pickle House",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.6,
   "avgActual": -3.5,
   "avgExpected": -0.4,
   "aId": "09d614ca-a9b2-44b6-a402-51046c6883af",
   "bId": "51352d99-02ac-4299-abac-a688bfade22f"
  },
  {
   "a": "Alexandre Inamasu",
   "b": "Frank Clark",
   "team": "Flemington",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.6,
   "avgActual": -8.7,
   "avgExpected": -5,
   "aId": "699549b6-bbc0-49a5-9040-22cfbf13c422",
   "bId": "fb42e711-528f-4028-80c6-e32013e3f807"
  },
  {
   "a": "Hany Ibrahim",
   "b": "Sean O'Connell",
   "team": "Flemington",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.7,
   "avgActual": -7.2,
   "avgExpected": -3.7,
   "aId": "5b439439-36f5-421f-afaa-5d8b1a547954",
   "bId": "6d9b173b-57b7-499c-9bde-9bdafd152968"
  },
  {
   "a": "Nachiket Vaidya",
   "b": "Vineeth Mathew",
   "team": "ACE Moorestown",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -1.7,
   "avgActual": -5.6,
   "avgExpected": -2.5,
   "aId": "0e35b16c-8027-4994-b04f-fd146d6d1709",
   "bId": "329df703-2af3-46cd-a7ae-372a1956536e"
  },
  {
   "a": "Robert Finley",
   "b": "Shayne Clowar",
   "team": "ACE Moorestown",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -1.7,
   "avgActual": -7.4,
   "avgExpected": -4.4,
   "aId": "0d70122a-9002-461f-8600-a9afed2e8c3f",
   "bId": "30b75fd5-95cf-4a1a-b296-10e7e381166e"
  },
  {
   "a": "Bryan Nardone",
   "b": "Riguo Zheng",
   "team": "ACE Moorestown",
   "n": 7,
   "w": 0,
   "l": 7,
   "synergy": -1.7,
   "avgActual": -8,
   "avgExpected": -5.4,
   "aId": "a479d794-d9d0-4620-b322-b7f249f2ae5f",
   "bId": "c5fa0e7c-eb97-45fa-8a86-850a918fff54"
  },
  {
   "a": "Rob Pandolfi",
   "b": "Boris Tserlin",
   "team": "Premiere",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": -1.7,
   "avgActual": -0.3,
   "avgExpected": 2.5,
   "aId": "081fc233-7f01-432d-85f9-c623b0524f49",
   "bId": "6c71dd2d-6f76-4630-96d4-27f58e99e557"
  },
  {
   "a": "Andrew Bernard",
   "b": "Matt Schall",
   "team": "Jersey Pickleball Club",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -1.7,
   "avgActual": -2.6,
   "avgExpected": 0.1,
   "aId": "8079e74f-c537-4e42-9590-e8d60f10ba3d",
   "bId": "aa0d9944-a9d3-46d5-8650-54e894adfeb2"
  },
  {
   "a": "Kevin Lin",
   "b": "Zach Hizer",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.7,
   "avgActual": -3.3,
   "avgExpected": 0.7,
   "aId": "44bbc794-d40d-4fbf-a59e-ddb785496f21",
   "bId": "b5e576e1-d16d-4c9d-ab28-2e1b1e66487b"
  },
  {
   "a": "Jonathan Ksiezopolski",
   "b": "Julius Degen",
   "team": "Monroe",
   "n": 6,
   "w": 0,
   "l": 6,
   "synergy": -1.7,
   "avgActual": -7.7,
   "avgExpected": -4.9,
   "aId": "20fe2f66-8825-4881-a325-b8fb78ee5ff6",
   "bId": "3a828946-f189-43be-905a-00c20a3b0b84"
  },
  {
   "a": "William Lee",
   "b": "Zach Mcgowan",
   "team": "Picklr Newtown",
   "n": 9,
   "w": 4,
   "l": 5,
   "synergy": -1.7,
   "avgActual": -0.4,
   "avgExpected": 2.1,
   "aId": "9e264c96-36cf-45a9-90ad-1e125a82c851",
   "bId": "e71a8785-5959-4607-9af3-e3ac9e3c6d86"
  },
  {
   "a": "Simon Rosenwasser",
   "b": "Kevin Wysoczynski",
   "team": "Jersey Pickleball Club",
   "n": 9,
   "w": 3,
   "l": 6,
   "synergy": -1.7,
   "avgActual": -2.4,
   "avgExpected": 0,
   "aId": "369dca37-2d15-4559-96d1-26a78df236a1",
   "bId": "f64f0cc2-6c82-4fe4-9992-747512700971"
  },
  {
   "a": "Marr Flores",
   "b": "Daniel Gallegos",
   "team": "Pickleball Kingdom Watchung",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.7,
   "avgActual": -4.7,
   "avgExpected": -1.4,
   "aId": "1009522f-1f54-4cf1-a0a0-e24ad64f4a66",
   "bId": "6f9cb35b-f24c-4480-a8b4-86e6ea32f3c2"
  },
  {
   "a": "Shashank Kamdar",
   "b": "Mark Kilimnik",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.8,
   "avgActual": -3,
   "avgExpected": 1.2,
   "aId": "56db4b56-6166-437f-8ece-26576b7042e5",
   "bId": "d6c15f91-4cc9-4612-8ec3-8f4ebd4e0cc1"
  },
  {
   "a": "Robbie Oddy",
   "b": "Frank Clark",
   "team": "Flemington",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.8,
   "avgActual": -4.2,
   "avgExpected": -0.7,
   "aId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6",
   "bId": "fb42e711-528f-4028-80c6-e32013e3f807"
  },
  {
   "a": "Joshua Mindlin",
   "b": "Tim Cahalin",
   "team": "Picklr Newtown",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.8,
   "avgActual": -7,
   "avgExpected": -3.4,
   "aId": "439d9ebf-9409-4214-ad91-7c18a0153c71",
   "bId": "7610b0d0-07a5-4408-ade6-d5ea5d80fe0a"
  },
  {
   "a": "Adam Weinstock",
   "b": "Marcin Glowacki",
   "team": "Dill Dinkers Freehold",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -2,
   "avgActual": -4,
   "avgExpected": -0.4,
   "aId": "8ced9183-490f-465f-8683-62071a6d706d",
   "bId": "e47d28f2-187f-4aa7-acb8-356787ff82e5"
  },
  {
   "a": "Tom Laiso",
   "b": "Caesar Gene",
   "team": "Dill Dinkers Freehold",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -2.2,
   "avgActual": -4.5,
   "avgExpected": -0.1,
   "aId": "13918154-3673-4dae-946a-2c2d4ac8863f",
   "bId": "a0aa8b27-3980-4abd-a62c-62d801cb0a82"
  },
  {
   "a": "Mickey Cook",
   "b": "Dipen Bhatt",
   "team": "Pickle House",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -2.4,
   "avgActual": -3.5,
   "avgExpected": 0.5,
   "aId": "3babc519-f395-4ef7-8f6f-b38d25c139d0",
   "bId": "fe8af1d3-ff62-430d-90af-32794cc7b912"
  },
  {
   "a": "Tarkan Akas",
   "b": "Zach Hollmann",
   "team": "Pickle House",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -2.4,
   "avgActual": -3,
   "avgExpected": 2.6,
   "aId": "7fd926bd-8473-435e-9330-5984c0637b19",
   "bId": "8aef2d8a-0bd4-45df-b5d1-1a120a81ef0f"
  },
  {
   "a": "Austin Gow",
   "b": "Ryan Rosen",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -2.5,
   "avgActual": -3.7,
   "avgExpected": 2.2,
   "aId": "0e577096-0b13-441d-b087-cc49cb55cfe2",
   "bId": "97f2b250-2030-4296-be61-63cffb17043b"
  },
  {
   "a": "Jaco De Waal",
   "b": "Tim Cahalin",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.5,
   "avgActual": -9.3,
   "avgExpected": -3.4,
   "aId": "19407a76-031d-4be3-8ed8-ba88cccdfdd3",
   "bId": "7610b0d0-07a5-4408-ade6-d5ea5d80fe0a"
  },
  {
   "a": "Adam Weinstock",
   "b": "Yoon Choi",
   "team": "Dill Dinkers Freehold",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -2.5,
   "avgActual": 0.8,
   "avgExpected": 5.3,
   "aId": "8ced9183-490f-465f-8683-62071a6d706d",
   "bId": "f3f6a49d-fd44-4f24-bb92-b3d04b50a3d9"
  },
  {
   "a": "Camrin Cronheim",
   "b": "Marc Padre",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.8,
   "avgActual": -6,
   "avgExpected": 0.6,
   "aId": "8143def5-d564-4010-8258-ccb71cd481f1",
   "bId": "a131a707-f20e-4838-9dcf-7cecb40c2705"
  },
  {
   "a": "Daniel Schwab",
   "b": "Vince Abate",
   "team": "Jersey Devil",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -3.1,
   "avgActual": -10.6,
   "avgExpected": -4.9,
   "aId": "3382b214-0a3e-4005-aba4-084588de0d98",
   "bId": "8257200c-7448-4527-92df-436d7bb18cac"
  }
 ],
 "matches": [
  {
   "result": "home",
   "week": 1,
   "home": "Flemington",
   "away": "Monroe",
   "time": "2026-08-24T19:00:00",
   "complete": true,
   "homePoints": 622,
   "awayPoints": 577,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Robbie Oddy",
      "Andy Ead"
     ],
     "a": [
      "Michael Ksiezopolski",
      "Brian O'Neill"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sean O'Connell",
      "Frank Clark"
     ],
     "a": [
      "Rahul Purwah",
      "Snehit Achanta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Hany Ibrahim",
      "Hans Tang"
     ],
     "a": [
      "Aleksey Sergeev",
      "Claudio Lampone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Shahar Gelber",
      "Jay Alquiros"
     ],
     "a": [
      "Jonathan Ksiezopolski",
      "Jacob Rosengarten"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Robbie Oddy",
      "Andy Ead"
     ],
     "a": [
      "Jacob Rosengarten",
      "Ivan Rios"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sean O'Connell",
      "Frank Clark"
     ],
     "a": [
      "Aleksey Sergeev",
      "Rahul Purwah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Hany Ibrahim",
      "Hans Tang"
     ],
     "a": [
      "Snehit Achanta",
      "Jonathan Ksiezopolski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Anthony Fallet",
      "Shahar Gelber"
     ],
     "a": [
      "Claudio Lampone",
      "Brian O'Neill"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Robbie Oddy",
      "Hans Tang"
     ],
     "a": [
      "Claudio Lampone",
      "Michael Ksiezopolski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Shahar Gelber",
      "Andy Ead"
     ],
     "a": [
      "Rahul Purwah",
      "Brian O'Neill"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Anthony Fallet",
      "Sean O'Connell"
     ],
     "a": [
      "Aleksey Sergeev",
      "Jonathan Ksiezopolski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jay Alquiros",
      "Hany Ibrahim"
     ],
     "a": [
      "Ivan Rios",
      "Snehit Achanta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Robbie Oddy",
      "Hany Ibrahim"
     ],
     "a": [
      "Claudio Lampone",
      "Snehit Achanta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jay Alquiros",
      "Andy Ead"
     ],
     "a": [
      "Jacob Rosengarten",
      "Rahul Purwah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Anthony Fallet",
      "Sean O'Connell"
     ],
     "a": [
      "Aleksey Sergeev",
      "Brian O'Neill"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Frank Clark",
      "Hans Tang"
     ],
     "a": [
      "Michael Ksiezopolski",
      "Ivan Rios"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Robbie Oddy",
      "Sean O'Connell"
     ],
     "a": [
      "Jonathan Ksiezopolski",
      "Michael Ksiezopolski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Anthony Fallet",
      "Hany Ibrahim"
     ],
     "a": [
      "Ivan Rios",
      "Rahul Purwah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Frank Clark",
      "Jay Alquiros"
     ],
     "a": [
      "Jacob Rosengarten",
      "Brian O'Neill"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Hans Tang",
      "Shahar Gelber"
     ],
     "a": [
      "Aleksey Sergeev",
      "Snehit Achanta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Robbie Oddy",
      "Sean O'Connell"
     ],
     "a": [
      "Aleksey Sergeev",
      "Michael Ksiezopolski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Anthony Fallet",
      "Shahar Gelber"
     ],
     "a": [
      "Brian O'Neill",
      "Snehit Achanta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Frank Clark",
      "Jay Alquiros"
     ],
     "a": [
      "Jacob Rosengarten",
      "Claudio Lampone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Hans Tang",
      "Andy Ead"
     ],
     "a": [
      "Jonathan Ksiezopolski",
      "Ivan Rios"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Robbie Oddy",
      "Jay Alquiros"
     ],
     "a": [
      "Snehit Achanta",
      "Michael Ksiezopolski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Hans Tang",
      "Andy Ead"
     ],
     "a": [
      "Aleksey Sergeev",
      "Jacob Rosengarten"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Frank Clark",
      "Anthony Fallet"
     ],
     "a": [
      "Claudio Lampone",
      "Ivan Rios"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Shahar Gelber",
      "Hany Ibrahim"
     ],
     "a": [
      "Jonathan Ksiezopolski",
      "Rahul Purwah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Hany Ibrahim",
      "Sean O'Connell"
     ],
     "a": [
      "Jacob Rosengarten",
      "Michael Ksiezopolski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Andy Ead",
      "Shahar Gelber"
     ],
     "a": [
      "Aleksey Sergeev",
      "Ivan Rios"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Frank Clark",
      "Hans Tang"
     ],
     "a": [
      "Brian O'Neill",
      "Jonathan Ksiezopolski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jay Alquiros",
      "Anthony Fallet"
     ],
     "a": [
      "Rahul Purwah",
      "Claudio Lampone"
     ]
    }
   ],
   "subs": [
    "Claudio Lampone"
   ]
  },
  {
   "result": "home",
   "week": 1,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Pickleball Kingdom Watchung",
   "time": "2026-08-24T19:00:00",
   "complete": true,
   "homePoints": 618,
   "awayPoints": 622,
   "homeGW": 19,
   "awayGW": 13,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Camrin Cronheim",
      "Jason Makarevic"
     ],
     "a": [
      "Anthony Bonaventura",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Jake Laifer",
      "Keith Shedlock"
     ],
     "a": [
      "Ken Velarde",
      "Drew Youssef"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Neel Goyal",
      "Thomas Connolly"
     ],
     "a": [
      "Daniel Gallegos",
      "Christopher Natividad"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Elliott Albanese",
      "Marc Padre"
     ],
     "a": [
      "Kevin Sun",
      "Josiah Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jake Laifer",
      "Thomas Connolly"
     ],
     "a": [
      "Anthony Bonaventura",
      "Ken Velarde"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Camrin Cronheim",
      "Jason Makarevic"
     ],
     "a": [
      "Stanley Bonczek",
      "Josiah Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ian Chin",
      "Elliott Albanese"
     ],
     "a": [
      "Daniel Gallegos",
      "Kevin Sun"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Marc Padre",
      "Neel Goyal"
     ],
     "a": [
      "Drew Youssef",
      "Christopher Natividad"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Neel Goyal",
      "Elliott Albanese"
     ],
     "a": [
      "Anthony Bonaventura",
      "Kevin Sun"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Thomas Connolly",
      "Jake Laifer"
     ],
     "a": [
      "Stanley Bonczek",
      "Ken Velarde"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Ian Chin",
      "Jason Makarevic"
     ],
     "a": [
      "Daniel Gallegos",
      "Drew Youssef"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Marc Padre",
      "Keith Shedlock"
     ],
     "a": [
      "Christopher Natividad",
      "Josiah Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jake Laifer",
      "Jason Makarevic"
     ],
     "a": [
      "Anthony Bonaventura",
      "Daniel Gallegos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Camrin Cronheim",
      "Ian Chin"
     ],
     "a": [
      "Stanley Bonczek",
      "Christopher Natividad"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Thomas Connolly",
      "Neel Goyal"
     ],
     "a": [
      "Ken Velarde",
      "Kevin Sun"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Keith Shedlock",
      "Elliott Albanese"
     ],
     "a": [
      "Drew Youssef",
      "Josiah Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Thomas Connolly",
      "Elliott Albanese"
     ],
     "a": [
      "Anthony Bonaventura",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Neel Goyal",
      "Jake Laifer"
     ],
     "a": [
      "Ken Velarde",
      "Daniel Gallegos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Marc Padre",
      "Ian Chin"
     ],
     "a": [
      "Drew Youssef",
      "Kevin Sun"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Camrin Cronheim",
      "Keith Shedlock"
     ],
     "a": [
      "Christopher Natividad",
      "Josiah Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jake Laifer",
      "Jason Makarevic"
     ],
     "a": [
      "Anthony Bonaventura",
      "Ken Velarde"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Neel Goyal",
      "Ian Chin"
     ],
     "a": [
      "Stanley Bonczek",
      "Josiah Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Camrin Cronheim",
      "Marc Padre"
     ],
     "a": [
      "Daniel Gallegos",
      "Christopher Natividad"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Keith Shedlock",
      "Thomas Connolly"
     ],
     "a": [
      "Drew Youssef",
      "Kevin Sun"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ian Chin",
      "Jake Laifer"
     ],
     "a": [
      "Stanley Bonczek",
      "Ken Velarde"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Elliott Albanese",
      "Jason Makarevic"
     ],
     "a": [
      "Anthony Bonaventura",
      "Christopher Natividad"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Thomas Connolly",
      "Keith Shedlock"
     ],
     "a": [
      "Kevin Sun",
      "Daniel Gallegos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Camrin Cronheim",
      "Marc Padre"
     ],
     "a": [
      "Josiah Kim",
      "Drew Youssef"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Camrin Cronheim",
      "Neel Goyal"
     ],
     "a": [
      "Anthony Bonaventura",
      "Daniel Gallegos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Thomas Connolly",
      "Ian Chin"
     ],
     "a": [
      "Christopher Natividad",
      "Ken Velarde"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Elliott Albanese",
      "Jake Laifer"
     ],
     "a": [
      "Drew Youssef",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Keith Shedlock",
      "Marc Padre"
     ],
     "a": [
      "Kevin Sun",
      "Josiah Kim"
     ]
    }
   ],
   "subs": [
    "Marc Padre"
   ]
  },
  {
   "result": "away",
   "week": 1,
   "home": "Jersey Devil",
   "away": "Pickle House",
   "time": "2026-08-24T19:00:00",
   "complete": true,
   "homePoints": 595,
   "awayPoints": 612,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Tyler Arsenault",
      "Zach Bowe"
     ],
     "a": [
      "Chris Damato",
      "Michael Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Vince Abate",
      "Ryan Furman"
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
     "as": 16,
     "h": [
      "Brian Barenbaum",
      "Braden Keith"
     ],
     "a": [
      "Dipen Bhatt",
      "Mickey Cook"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Daniel Schwab",
      "Kushal Thapa"
     ],
     "a": [
      "Matthew Eldridge",
      "Al Mancini"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Tyler Arsenault",
      "Braden Keith"
     ],
     "a": [
      "Al Mancini",
      "Michael Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Zach Bowe",
      "Jack Blumberg"
     ],
     "a": [
      "Chris Damato",
      "Deepak Sunku"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Vince Abate",
      "Brian Barenbaum"
     ],
     "a": [
      "Mickey Cook",
      "Craig Frame"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Ryan Furman",
      "Daniel Schwab"
     ],
     "a": [
      "Zach Hollmann",
      "Tarkan Akas"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Brian Barenbaum",
      "Kushal Thapa"
     ],
     "a": [
      "Dipen Bhatt",
      "Craig Frame"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Zach Bowe",
      "Braden Keith"
     ],
     "a": [
      "Tarkan Akas",
      "Michael Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Daniel Schwab",
      "Jack Blumberg"
     ],
     "a": [
      "Chris Damato",
      "Zach Hollmann"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Tyler Arsenault",
      "Stephen Conger"
     ],
     "a": [
      "Deepak Sunku",
      "Matthew Eldridge"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Vince Abate",
      "Daniel Schwab"
     ],
     "a": [
      "Mickey Cook",
      "Tarkan Akas"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Tyler Arsenault",
      "Stephen Conger"
     ],
     "a": [
      "Craig Frame",
      "Michael Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Braden Keith",
      "Ryan Furman"
     ],
     "a": [
      "Chris Damato",
      "Matthew Eldridge"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kushal Thapa",
      "Jack Blumberg"
     ],
     "a": [
      "Dipen Bhatt",
      "Al Mancini"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Vince Abate",
      "Stephen Conger"
     ],
     "a": [
      "Tarkan Akas",
      "Matthew Eldridge"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Zach Bowe",
      "Ryan Furman"
     ],
     "a": [
      "Zach Hollmann",
      "Al Mancini"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Kushal Thapa",
      "Brian Barenbaum"
     ],
     "a": [
      "Mickey Cook",
      "Michael Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Braden Keith",
      "Jack Blumberg"
     ],
     "a": [
      "Dipen Bhatt",
      "Deepak Sunku"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Tyler Arsenault",
      "Ryan Furman"
     ],
     "a": [
      "Chris Damato",
      "Tarkan Akas"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Zach Bowe",
      "Kushal Thapa"
     ],
     "a": [
      "Zach Hollmann",
      "Mickey Cook"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Vince Abate",
      "Brian Barenbaum"
     ],
     "a": [
      "Craig Frame",
      "Deepak Sunku"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Stephen Conger",
      "Daniel Schwab"
     ],
     "a": [
      "Dipen Bhatt",
      "Michael Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Stephen Conger",
      "Daniel Schwab"
     ],
     "a": [
      "Chris Damato",
      "Dipen Bhatt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Zach Bowe",
      "Braden Keith"
     ],
     "a": [
      "Craig Frame",
      "Al Mancini"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Tyler Arsenault",
      "Vince Abate"
     ],
     "a": [
      "Matthew Eldridge",
      "Zach Hollmann"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Kushal Thapa",
      "Jack Blumberg"
     ],
     "a": [
      "Deepak Sunku",
      "Michael Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Tyler Arsenault",
      "Zach Bowe"
     ],
     "a": [
      "Zach Hollmann",
      "Al Mancini"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Vince Abate",
      "Daniel Schwab"
     ],
     "a": [
      "Chris Damato",
      "Deepak Sunku"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kushal Thapa",
      "Ryan Furman"
     ],
     "a": [
      "Mickey Cook",
      "Matthew Eldridge"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Brian Barenbaum",
      "Jack Blumberg"
     ],
     "a": [
      "Craig Frame",
      "Tarkan Akas"
     ]
    }
   ],
   "subs": [
    "Jack Blumberg"
   ]
  },
  {
   "result": "away",
   "week": 1,
   "home": "ACE Moorestown",
   "away": "Picklr Newtown",
   "time": "2026-08-24T19:30:00",
   "complete": true,
   "homePoints": 578,
   "awayPoints": 655,
   "homeGW": 11,
   "awayGW": 21,
   "games": [
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
      "Ron Branca",
      "Greg Mitchell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Daniel Ehala",
      "Bryan Nardone"
     ],
     "a": [
      "Joshua Mindlin",
      "William Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Josh Sherlock",
      "Riguo Zheng"
     ],
     "a": [
      "Derek Callihan",
      "Christian Lupica"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Nachiket Vaidya",
      "Vineeth Mathew"
     ],
     "a": [
      "Alex Pecora",
      "Tim Cahalin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Matthew Mintz",
      "Bryan Nardone"
     ],
     "a": [
      "Ron Branca",
      "William Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Josh Sherlock",
      "Marc Harden"
     ],
     "a": [
      "Alex Pecora",
      "Greg Mitchell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Vineeth Mathew",
      "Riguo Zheng"
     ],
     "a": [
      "Joshua Mindlin",
      "Christian Lupica"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Daniel Ehala",
      "Shayne Clowar"
     ],
     "a": [
      "Tim Cahalin",
      "Derek Callihan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Marc Harden",
      "Matthew Mintz"
     ],
     "a": [
      "Ron Branca",
      "Joshua Mindlin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Josh Sherlock",
      "Robert Finley"
     ],
     "a": [
      "William Lee",
      "Tim Cahalin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Nachiket Vaidya",
      "Shayne Clowar"
     ],
     "a": [
      "Alex Pecora",
      "Greg Mitchell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Vineeth Mathew",
      "Daniel Ehala"
     ],
     "a": [
      "Derek Callihan",
      "Christian Lupica"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 30,
     "as": 28,
     "h": [
      "Josh Sherlock",
      "Bryan Nardone"
     ],
     "a": [
      "Ron Branca",
      "Tim Cahalin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Shayne Clowar",
      "Robert Finley"
     ],
     "a": [
      "William Lee",
      "Greg Mitchell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Nachiket Vaidya",
      "Matthew Mintz"
     ],
     "a": [
      "Joshua Mindlin",
      "Derek Callihan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Marc Harden",
      "Riguo Zheng"
     ],
     "a": [
      "Alex Pecora",
      "Christian Lupica"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Daniel Ehala",
      "Bryan Nardone"
     ],
     "a": [
      "Joshua Mindlin",
      "Greg Mitchell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Robert Finley",
      "Matthew Mintz"
     ],
     "a": [
      "Ron Branca",
      "Alex Pecora"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Riguo Zheng",
      "Nachiket Vaidya"
     ],
     "a": [
      "William Lee",
      "Christian Lupica"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Vineeth Mathew",
      "Shayne Clowar"
     ],
     "a": [
      "Derek Callihan",
      "Tim Cahalin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Bryan Nardone",
      "Riguo Zheng"
     ],
     "a": [
      "Christian Lupica",
      "Ron Branca"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Daniel Ehala",
      "Matthew Mintz"
     ],
     "a": [
      "Derek Callihan",
      "William Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Nachiket Vaidya",
      "Marc Harden"
     ],
     "a": [
      "Joshua Mindlin",
      "Alex Pecora"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Josh Sherlock",
      "Vineeth Mathew"
     ],
     "a": [
      "Tim Cahalin",
      "Greg Mitchell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Marc Harden",
      "Riguo Zheng"
     ],
     "a": [
      "Alex Pecora",
      "Tim Cahalin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Shayne Clowar",
      "Bryan Nardone"
     ],
     "a": [
      "Ron Branca",
      "Joshua Mindlin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Daniel Ehala",
      "Robert Finley"
     ],
     "a": [
      "William Lee",
      "Christian Lupica"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Nachiket Vaidya",
      "Josh Sherlock"
     ],
     "a": [
      "Derek Callihan",
      "Greg Mitchell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Nachiket Vaidya",
      "Robert Finley"
     ],
     "a": [
      "Ron Branca",
      "Greg Mitchell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Matthew Mintz",
      "Josh Sherlock"
     ],
     "a": [
      "Joshua Mindlin",
      "William Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Bryan Nardone",
      "Vineeth Mathew"
     ],
     "a": [
      "Alex Pecora",
      "Derek Callihan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Daniel Ehala",
      "Shayne Clowar"
     ],
     "a": [
      "Christian Lupica",
      "Tim Cahalin"
     ]
    }
   ],
   "subs": [
    "Greg Mitchell"
   ]
  },
  {
   "result": "home",
   "week": 1,
   "home": "Jersey Pickleball Club",
   "away": "Premiere",
   "time": "2026-08-24T19:30:00",
   "complete": true,
   "homePoints": 606,
   "awayPoints": 636,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Matt Schall",
      "Sebastian Ferrer"
     ],
     "a": [
      "Chris Frangipane",
      "Jacob Yandoli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Gary Sidhu",
      "Zachary Puccia"
     ],
     "a": [
      "Boris Tserlin",
      "Rob Pandolfi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Andrew Bernard",
      "Daniel Phillips"
     ],
     "a": [
      "Gary White",
      "Michael Rapaglia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Zach Hizer",
      "Kevin Wysoczynski"
     ],
     "a": [
      "Matthew Friedman",
      "Neil Ottrando"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Zach Hizer",
      "Zachary Puccia"
     ],
     "a": [
      "Rob Pandolfi",
      "Boris Tserlin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Sebastian Ferrer",
      "Matt Schall"
     ],
     "a": [
      "Chris Frangipane",
      "Jacob Yandoli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Andrew Bernard",
      "Gary Sidhu"
     ],
     "a": [
      "Matthew Friedman",
      "Neil Ottrando"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Daniel Phillips",
      "Kevin Wysoczynski"
     ],
     "a": [
      "Gary White",
      "Michael Rapaglia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Daniel Phillips",
      "Kevin Wysoczynski"
     ],
     "a": [
      "Boris Tserlin",
      "Gary White"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Matt Schall",
      "Zachary Puccia"
     ],
     "a": [
      "Neil Ottrando",
      "Rob Pandolfi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sebastian Ferrer",
      "Gary Sidhu"
     ],
     "a": [
      "Jacob Yandoli",
      "Michael Rapaglia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Zach Hizer",
      "Andrew Bernard"
     ],
     "a": [
      "Chris Frangipane",
      "Matthew Friedman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sebastian Ferrer",
      "Daniel Phillips"
     ],
     "a": [
      "Boris Tserlin",
      "Gary White"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Zach Hizer",
      "Andrew Bernard"
     ],
     "a": [
      "Neil Ottrando",
      "Rob Pandolfi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Zachary Puccia",
      "Gary Sidhu"
     ],
     "a": [
      "Jacob Yandoli",
      "Michael Rapaglia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Matt Schall",
      "Kevin Wysoczynski"
     ],
     "a": [
      "Chris Frangipane",
      "Matthew Friedman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Andrew Bernard",
      "Matt Schall"
     ],
     "a": [
      "Boris Tserlin",
      "Jacob Yandoli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Daniel Phillips",
      "Gary Sidhu"
     ],
     "a": [
      "Neil Ottrando",
      "Gary White"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sebastian Ferrer",
      "Zach Hizer"
     ],
     "a": [
      "Rob Pandolfi",
      "Chris Frangipane"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Zachary Puccia",
      "Kevin Wysoczynski"
     ],
     "a": [
      "Matthew Friedman",
      "Michael Rapaglia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Zach Hizer",
      "Sebastian Ferrer"
     ],
     "a": [
      "Boris Tserlin",
      "Jacob Yandoli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Daniel Phillips",
      "Gary Sidhu"
     ],
     "a": [
      "Neil Ottrando",
      "Gary White"
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
      "Rob Pandolfi",
      "Chris Frangipane"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kevin Wysoczynski",
      "Zachary Puccia"
     ],
     "a": [
      "Matthew Friedman",
      "Michael Rapaglia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Daniel Phillips",
      "Zachary Puccia"
     ],
     "a": [
      "Gary White",
      "Jacob Yandoli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Andrew Bernard",
      "Sebastian Ferrer"
     ],
     "a": [
      "Boris Tserlin",
      "Chris Frangipane"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Gary Sidhu",
      "Kevin Wysoczynski"
     ],
     "a": [
      "Michael Rapaglia",
      "Neil Ottrando"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Matt Schall",
      "Zach Hizer"
     ],
     "a": [
      "Matthew Friedman",
      "Rob Pandolfi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Daniel Phillips",
      "Zachary Puccia"
     ],
     "a": [
      "Gary White",
      "Jacob Yandoli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Sebastian Ferrer",
      "Andrew Bernard"
     ],
     "a": [
      "Chris Frangipane",
      "Boris Tserlin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Gary Sidhu",
      "Kevin Wysoczynski"
     ],
     "a": [
      "Neil Ottrando",
      "Michael Rapaglia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Matt Schall",
      "Zach Hizer"
     ],
     "a": [
      "Matthew Friedman",
      "Rob Pandolfi"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 1,
   "home": "Bounce Malvern",
   "away": "Bounce Tempest",
   "time": "2026-08-24T19:30:00",
   "complete": true,
   "homePoints": 643,
   "awayPoints": 642,
   "homeGW": 13,
   "awayGW": 19,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Ryan Rosen",
      "Shawn Ganow"
     ],
     "a": [
      "Zachary Lessner",
      "Alex Mihalca"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Jonah Karczmer",
      "Shashank Kamdar"
     ],
     "a": [
      "Zyril Carilo",
      "Hiep Pham"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Austin Gow",
      "Dustin Rabinowitz"
     ],
     "a": [
      "Adriene Khon",
      "Justin Bautista"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Mark Kilimnik",
      "Yash Shah"
     ],
     "a": [
      "Brandyn Schuchart",
      "Ashwin Korde"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Ryan Rosen",
      "Yash Shah"
     ],
     "a": [
      "Hiep Pham",
      "Justin Chin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Mark Kilimnik",
      "Vaughn Lawrence"
     ],
     "a": [
      "Zyril Carilo",
      "Justin Bautista"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Jonah Karczmer",
      "Austin Gow"
     ],
     "a": [
      "Zachary Lessner",
      "Brandyn Schuchart"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Scott Bohrer",
      "Dustin Rabinowitz"
     ],
     "a": [
      "Alex Mihalca",
      "Ashwin Korde"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jonah Karczmer",
      "Yash Shah"
     ],
     "a": [
      "Brandyn Schuchart",
      "Ashwin Korde"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Shashank Kamdar",
      "Ryan Rosen"
     ],
     "a": [
      "Zyril Carilo",
      "Adriene Khon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Shawn Ganow",
      "Dustin Rabinowitz"
     ],
     "a": [
      "Hiep Pham",
      "Justin Chin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Scott Bohrer",
      "Vaughn Lawrence"
     ],
     "a": [
      "Josh Knupp",
      "Justin Bautista"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Dustin Rabinowitz",
      "Yash Shah"
     ],
     "a": [
      "Josh Knupp",
      "Alex Mihalca"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Ryan Rosen",
      "Vaughn Lawrence"
     ],
     "a": [
      "Zyril Carilo",
      "Brandyn Schuchart"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Scott Bohrer",
      "Austin Gow"
     ],
     "a": [
      "Adriene Khon",
      "Justin Chin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Mark Kilimnik",
      "Shashank Kamdar"
     ],
     "a": [
      "Zachary Lessner",
      "Justin Bautista"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 27,
     "as": 29,
     "h": [
      "Ryan Rosen",
      "Shashank Kamdar"
     ],
     "a": [
      "Zachary Lessner",
      "Brandyn Schuchart"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Vaughn Lawrence",
      "Dustin Rabinowitz"
     ],
     "a": [
      "Ashwin Korde",
      "Alex Mihalca"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Austin Gow",
      "Mark Kilimnik"
     ],
     "a": [
      "Josh Knupp",
      "Justin Chin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Shawn Ganow",
      "Jonah Karczmer"
     ],
     "a": [
      "Hiep Pham",
      "Justin Bautista"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Mark Kilimnik",
      "Yash Shah"
     ],
     "a": [
      "Adriene Khon",
      "Justin Chin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jonah Karczmer",
      "Shashank Kamdar"
     ],
     "a": [
      "Ashwin Korde",
      "Josh Knupp"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Austin Gow",
      "Ryan Rosen"
     ],
     "a": [
      "Zyril Carilo",
      "Hiep Pham"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Shawn Ganow",
      "Scott Bohrer"
     ],
     "a": [
      "Alex Mihalca",
      "Zachary Lessner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Mark Kilimnik",
      "Shashank Kamdar"
     ],
     "a": [
      "Zyril Carilo",
      "Brandyn Schuchart"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jonah Karczmer",
      "Vaughn Lawrence"
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
      "Scott Bohrer",
      "Yash Shah"
     ],
     "a": [
      "Justin Bautista",
      "Hiep Pham"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Shawn Ganow",
      "Dustin Rabinowitz"
     ],
     "a": [
      "Adriene Khon",
      "Josh Knupp"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Dustin Rabinowitz",
      "Shashank Kamdar"
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
     "as": 19,
     "h": [
      "Austin Gow",
      "Ryan Rosen"
     ],
     "a": [
      "Alex Mihalca",
      "Josh Knupp"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Shawn Ganow",
      "Mark Kilimnik"
     ],
     "a": [
      "Zyril Carilo",
      "Justin Bautista"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Scott Bohrer",
      "Vaughn Lawrence"
     ],
     "a": [
      "Adriene Khon",
      "Brandyn Schuchart"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 2,
   "home": "Picklr Newtown",
   "away": "Bounce Malvern",
   "time": "2026-08-31T19:00:00",
   "complete": true,
   "homePoints": 575,
   "awayPoints": 648,
   "homeGW": 13,
   "awayGW": 19,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "William Lee",
      "Christian Lupica"
     ],
     "a": [
      "Shawn Ganow",
      "Austin Gow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Tim Cahalin",
      "Derek Callihan"
     ],
     "a": [
      "Dustin Rabinowitz",
      "Lou Frignito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Joshua Mindlin",
      "Jaco De Waal"
     ],
     "a": [
      "Scott Bohrer",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Alex Pecora",
      "Ron Branca"
     ],
     "a": [
      "Andre Cristobal",
      "Jeff Zamorski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Christian Lupica",
      "Tim Cahalin"
     ],
     "a": [
      "Austin Gow",
      "Vaughn Lawrence"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Joshua Mindlin",
      "Ron Branca"
     ],
     "a": [
      "Dustin Rabinowitz",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "William Lee",
      "Jaco De Waal"
     ],
     "a": [
      "Andre Cristobal",
      "Lou Frignito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Alex Pecora",
      "Derek Callihan"
     ],
     "a": [
      "Shawn Ganow",
      "Anushk Gupta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Tim Cahalin",
      "Jaco De Waal"
     ],
     "a": [
      "Andre Cristobal",
      "Anushk Gupta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Thomas Fenton",
      "Alex Pecora"
     ],
     "a": [
      "Dustin Rabinowitz",
      "Austin Gow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Derek Callihan",
      "Joshua Mindlin"
     ],
     "a": [
      "Scott Bohrer",
      "Jeff Zamorski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "William Lee",
      "Christian Lupica"
     ],
     "a": [
      "Vaughn Lawrence",
      "Lou Frignito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Tim Cahalin",
      "William Lee"
     ],
     "a": [
      "Andre Cristobal",
      "Anushk Gupta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Ron Branca",
      "Thomas Fenton"
     ],
     "a": [
      "Dustin Rabinowitz",
      "Scott Bohrer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jaco De Waal",
      "Derek Callihan"
     ],
     "a": [
      "Mark Kilimnik",
      "Jeff Zamorski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Joshua Mindlin",
      "Alex Pecora"
     ],
     "a": [
      "Shawn Ganow",
      "Lou Frignito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "William Lee",
      "Joshua Mindlin"
     ],
     "a": [
      "Scott Bohrer",
      "Austin Gow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Jaco De Waal",
      "Christian Lupica"
     ],
     "a": [
      "Lou Frignito",
      "Andre Cristobal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Tim Cahalin",
      "Derek Callihan"
     ],
     "a": [
      "Mark Kilimnik",
      "Jeff Zamorski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Alex Pecora",
      "Thomas Fenton"
     ],
     "a": [
      "Dustin Rabinowitz",
      "Vaughn Lawrence"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "William Lee",
      "Tim Cahalin"
     ],
     "a": [
      "Vaughn Lawrence",
      "Anushk Gupta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Derek Callihan",
      "Jaco De Waal"
     ],
     "a": [
      "Mark Kilimnik",
      "Austin Gow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Joshua Mindlin",
      "Alex Pecora"
     ],
     "a": [
      "Dustin Rabinowitz",
      "Jeff Zamorski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Thomas Fenton",
      "Ron Branca"
     ],
     "a": [
      "Shawn Ganow",
      "Scott Bohrer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Christian Lupica",
      "Jaco De Waal"
     ],
     "a": [
      "Jeff Zamorski",
      "Anushk Gupta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Joshua Mindlin",
      "Thomas Fenton"
     ],
     "a": [
      "Shawn Ganow",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "William Lee",
      "Derek Callihan"
     ],
     "a": [
      "Vaughn Lawrence",
      "Lou Frignito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Alex Pecora",
      "Ron Branca"
     ],
     "a": [
      "Andre Cristobal",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Tim Cahalin",
      "Jaco De Waal"
     ],
     "a": [
      "Vaughn Lawrence",
      "Scott Bohrer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Derek Callihan",
      "Thomas Fenton"
     ],
     "a": [
      "Shawn Ganow",
      "Lou Frignito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Christian Lupica",
      "Alex Pecora"
     ],
     "a": [
      "Austin Gow",
      "Anushk Gupta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ron Branca",
      "Joshua Mindlin"
     ],
     "a": [
      "Andre Cristobal",
      "Mark Kilimnik"
     ]
    }
   ],
   "subs": [
    "Andre Cristobal"
   ]
  },
  {
   "result": "away",
   "week": 2,
   "home": "Flemington",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-08-31T19:00:00",
   "complete": true,
   "homePoints": 500,
   "awayPoints": 636,
   "homeGW": 9,
   "awayGW": 23,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Robbie Oddy",
      "Frank Clark"
     ],
     "a": [
      "Ian Chin",
      "Elliott Albanese"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Anthony Fallet",
      "Jay Alquiros"
     ],
     "a": [
      "Jason Makarevic",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Hany Ibrahim",
      "Hans Tang"
     ],
     "a": [
      "Thomas Connolly",
      "Shreyas Pani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Tim Dowd",
      "Simon Perry"
     ],
     "a": [
      "Neel Goyal",
      "Marc Padre"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Anthony Fallet",
      "Jay Alquiros"
     ],
     "a": [
      "Jason Makarevic",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Tim Dowd",
      "Simon Perry"
     ],
     "a": [
      "Elliott Albanese",
      "Ian Chin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Robbie Oddy",
      "Frank Clark"
     ],
     "a": [
      "Neel Goyal",
      "Marc Padre"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Shahar Gelber",
      "Hans Tang"
     ],
     "a": [
      "Thomas Connolly",
      "Shreyas Pani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Robbie Oddy",
      "Simon Perry"
     ],
     "a": [
      "Thomas Connolly",
      "Neel Goyal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Shahar Gelber",
      "Hans Tang"
     ],
     "a": [
      "Marc Padre",
      "Ian Chin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Hany Ibrahim",
      "Jay Alquiros"
     ],
     "a": [
      "Jason Makarevic",
      "Shreyas Pani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Tim Dowd",
      "Anthony Fallet"
     ],
     "a": [
      "Elliott Albanese",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Frank Clark",
      "Hans Tang"
     ],
     "a": [
      "Ian Chin",
      "Marc Padre"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Shahar Gelber",
      "Tim Dowd"
     ],
     "a": [
      "Thomas Connolly",
      "Neel Goyal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Robbie Oddy",
      "Simon Perry"
     ],
     "a": [
      "Camrin Cronheim",
      "Elliott Albanese"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jay Alquiros",
      "Hany Ibrahim"
     ],
     "a": [
      "Jason Makarevic",
      "Shreyas Pani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Robbie Oddy",
      "Tim Dowd"
     ],
     "a": [
      "Elliott Albanese",
      "Jason Makarevic"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Hans Tang",
      "Frank Clark"
     ],
     "a": [
      "Camrin Cronheim",
      "Ian Chin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Hany Ibrahim",
      "Anthony Fallet"
     ],
     "a": [
      "Marc Padre",
      "Thomas Connolly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Jay Alquiros",
      "Shahar Gelber"
     ],
     "a": [
      "Neel Goyal",
      "Shreyas Pani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jay Alquiros",
      "Frank Clark"
     ],
     "a": [
      "Shreyas Pani",
      "Neel Goyal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Robbie Oddy",
      "Tim Dowd"
     ],
     "a": [
      "Marc Padre",
      "Thomas Connolly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Simon Perry",
      "Shahar Gelber"
     ],
     "a": [
      "Elliott Albanese",
      "Jason Makarevic"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Anthony Fallet",
      "Hany Ibrahim"
     ],
     "a": [
      "Ian Chin",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Hans Tang",
      "Anthony Fallet"
     ],
     "a": [
      "Elliott Albanese",
      "Shreyas Pani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Frank Clark",
      "Simon Perry"
     ],
     "a": [
      "Ian Chin",
      "Thomas Connolly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Robbie Oddy",
      "Hany Ibrahim"
     ],
     "a": [
      "Marc Padre",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Shahar Gelber",
      "Tim Dowd"
     ],
     "a": [
      "Neel Goyal",
      "Jason Makarevic"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Tim Dowd",
      "Anthony Fallet"
     ],
     "a": [
      "Elliott Albanese",
      "Thomas Connolly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Shahar Gelber",
      "Hany Ibrahim"
     ],
     "a": [
      "Ian Chin",
      "Jason Makarevic"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Hans Tang",
      "Simon Perry"
     ],
     "a": [
      "Marc Padre",
      "Shreyas Pani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jay Alquiros",
      "Frank Clark"
     ],
     "a": [
      "Neel Goyal",
      "Camrin Cronheim"
     ]
    }
   ],
   "subs": [
    "Marc Padre"
   ]
  },
  {
   "result": "away",
   "week": 2,
   "home": "ACE Moorestown",
   "away": "Pickle House",
   "time": "2026-08-31T19:30:00",
   "complete": true,
   "homePoints": 505,
   "awayPoints": 626,
   "homeGW": 6,
   "awayGW": 26,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Shayne Clowar",
      "Jeffrey Lena"
     ],
     "a": [
      "Michael Li",
      "Deepak Sunku"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Robert Finley",
      "Marc Harden"
     ],
     "a": [
      "Chris Damato",
      "Zach Hollmann"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Bryan Nardone",
      "Daniel Ehala"
     ],
     "a": [
      "Mickey Cook",
      "Craig Frame"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Vineeth Mathew",
      "Nachiket Vaidya"
     ],
     "a": [
      "Dipen Bhatt",
      "Ali Husain"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Bryan Nardone",
      "Robert Finley"
     ],
     "a": [
      "Al Mancini",
      "Dipen Bhatt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Vineeth Mathew",
      "Nachiket Vaidya"
     ],
     "a": [
      "Deepak Sunku",
      "Matthew Eldridge"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Daniel Ehala",
      "Marc Harden"
     ],
     "a": [
      "Ali Husain",
      "Zach Hollmann"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Shayne Clowar",
      "Riguo Zheng"
     ],
     "a": [
      "Michael Li",
      "Chris Damato"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Robert Finley",
      "Shayne Clowar"
     ],
     "a": [
      "Craig Frame",
      "Michael Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Daniel Ehala",
      "Vineeth Mathew"
     ],
     "a": [
      "Mickey Cook",
      "Zach Hollmann"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Riguo Zheng",
      "Marc Harden"
     ],
     "a": [
      "Al Mancini",
      "Matthew Eldridge"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jeffrey Lena",
      "Nachiket Vaidya"
     ],
     "a": [
      "Chris Damato",
      "Deepak Sunku"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jeffrey Lena",
      "Bryan Nardone"
     ],
     "a": [
      "Chris Damato",
      "Al Mancini"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Robert Finley",
      "Marc Harden"
     ],
     "a": [
      "Mickey Cook",
      "Dipen Bhatt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Daniel Ehala",
      "Shayne Clowar"
     ],
     "a": [
      "Ali Husain",
      "Michael Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Nachiket Vaidya",
      "Riguo Zheng"
     ],
     "a": [
      "Zach Hollmann",
      "Craig Frame"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Jeffrey Lena",
      "Robert Finley"
     ],
     "a": [
      "Dipen Bhatt",
      "Deepak Sunku"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Marc Harden",
      "Nachiket Vaidya"
     ],
     "a": [
      "Ali Husain",
      "Matthew Eldridge"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Bryan Nardone",
      "Riguo Zheng"
     ],
     "a": [
      "Al Mancini",
      "Mickey Cook"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Shayne Clowar",
      "Vineeth Mathew"
     ],
     "a": [
      "Zach Hollmann",
      "Michael Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Shayne Clowar",
      "Vineeth Mathew"
     ],
     "a": [
      "Craig Frame",
      "Ali Husain"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jeffrey Lena",
      "Riguo Zheng"
     ],
     "a": [
      "Dipen Bhatt",
      "Chris Damato"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Daniel Ehala",
      "Nachiket Vaidya"
     ],
     "a": [
      "Al Mancini",
      "Matthew Eldridge"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Marc Harden",
      "Bryan Nardone"
     ],
     "a": [
      "Deepak Sunku",
      "Zach Hollmann"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Shayne Clowar",
      "Bryan Nardone"
     ],
     "a": [
      "Matthew Eldridge",
      "Michael Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Nachiket Vaidya",
      "Riguo Zheng"
     ],
     "a": [
      "Chris Damato",
      "Craig Frame"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jeffrey Lena",
      "Robert Finley"
     ],
     "a": [
      "Al Mancini",
      "Zach Hollmann"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Vineeth Mathew",
      "Daniel Ehala"
     ],
     "a": [
      "Mickey Cook",
      "Ali Husain"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Bryan Nardone",
      "Daniel Ehala"
     ],
     "a": [
      "Craig Frame",
      "Dipen Bhatt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Nachiket Vaidya",
      "Robert Finley"
     ],
     "a": [
      "Chris Damato",
      "Ali Husain"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jeffrey Lena",
      "Vineeth Mathew"
     ],
     "a": [
      "Deepak Sunku",
      "Matthew Eldridge"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Shayne Clowar",
      "Riguo Zheng"
     ],
     "a": [
      "Michael Li",
      "Mickey Cook"
     ]
    }
   ],
   "subs": [
    "Jeffrey Lena"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Pickleball Kingdom Watchung",
   "away": "Premiere",
   "time": "2026-08-31T19:30:00",
   "complete": true,
   "homePoints": 661,
   "awayPoints": 591,
   "homeGW": 21,
   "awayGW": 11,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Fabricio Gaona",
      "Gautham Bondugula"
     ],
     "a": [
      "Boris Tserlin",
      "Nicholas Como"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Stanley Bonczek",
      "Christopher Natividad"
     ],
     "a": [
      "Chris Frangipane",
      "Gary White"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ken Velarde",
      "Drew Youssef"
     ],
     "a": [
      "Michael Rapaglia",
      "Matthew Friedman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Zachary Lisojo",
      "Joshua Octaviano"
     ],
     "a": [
      "Neil Ottrando",
      "Joseph Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Stanley Bonczek",
      "Christopher Natividad"
     ],
     "a": [
      "Boris Tserlin",
      "Nicholas Como"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Gautham Bondugula",
      "Fabricio Gaona"
     ],
     "a": [
      "Chris Frangipane",
      "Gary White"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Zachary Lisojo",
      "Drew Youssef"
     ],
     "a": [
      "Matthew Friedman",
      "Michael Rapaglia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Ken Velarde",
      "Joshua Octaviano"
     ],
     "a": [
      "Joseph Lynskey",
      "Neil Ottrando"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Ken Velarde",
      "Gautham Bondugula"
     ],
     "a": [
      "Boris Tserlin",
      "Gary White"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Drew Youssef",
      "Christopher Natividad"
     ],
     "a": [
      "Chris Frangipane",
      "Nicholas Como"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Stanley Bonczek",
      "Zachary Lisojo"
     ],
     "a": [
      "Neil Ottrando",
      "Matthew Friedman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Fabricio Gaona",
      "Joshua Octaviano"
     ],
     "a": [
      "Michael Rapaglia",
      "Joseph Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Fabricio Gaona",
      "Christopher Natividad"
     ],
     "a": [
      "Boris Tserlin",
      "Gary White"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Ken Velarde",
      "Gautham Bondugula"
     ],
     "a": [
      "Chris Frangipane",
      "Nicholas Como"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Drew Youssef",
      "Joshua Octaviano"
     ],
     "a": [
      "Matthew Friedman",
      "Neil Ottrando"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Stanley Bonczek",
      "Zachary Lisojo"
     ],
     "a": [
      "Michael Rapaglia",
      "Joseph Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Stanley Bonczek",
      "Joshua Octaviano"
     ],
     "a": [
      "Boris Tserlin",
      "Joseph Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Gautham Bondugula",
      "Zachary Lisojo"
     ],
     "a": [
      "Chris Frangipane",
      "Matthew Friedman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Drew Youssef",
      "Christopher Natividad"
     ],
     "a": [
      "Gary White",
      "Nicholas Como"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ken Velarde",
      "Fabricio Gaona"
     ],
     "a": [
      "Neil Ottrando",
      "Michael Rapaglia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Drew Youssef",
      "Zachary Lisojo"
     ],
     "a": [
      "Boris Tserlin",
      "Joseph Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Stanley Bonczek",
      "Joshua Octaviano"
     ],
     "a": [
      "Chris Frangipane",
      "Matthew Friedman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Ken Velarde",
      "Fabricio Gaona"
     ],
     "a": [
      "Gary White",
      "Nicholas Como"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Christopher Natividad",
      "Gautham Bondugula"
     ],
     "a": [
      "Neil Ottrando",
      "Michael Rapaglia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Ken Velarde",
      "Zachary Lisojo"
     ],
     "a": [
      "Gary White",
      "Michael Rapaglia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Joshua Octaviano",
      "Christopher Natividad"
     ],
     "a": [
      "Boris Tserlin",
      "Chris Frangipane"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Fabricio Gaona",
      "Stanley Bonczek"
     ],
     "a": [
      "Matthew Friedman",
      "Joseph Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 28,
     "as": 30,
     "h": [
      "Drew Youssef",
      "Gautham Bondugula"
     ],
     "a": [
      "Neil Ottrando",
      "Nicholas Como"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Joshua Octaviano",
      "Christopher Natividad"
     ],
     "a": [
      "Gary White",
      "Michael Rapaglia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ken Velarde",
      "Zachary Lisojo"
     ],
     "a": [
      "Boris Tserlin",
      "Chris Frangipane"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Stanley Bonczek",
      "Fabricio Gaona"
     ],
     "a": [
      "Matthew Friedman",
      "Joseph Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Drew Youssef",
      "Gautham Bondugula"
     ],
     "a": [
      "Neil Ottrando",
      "Nicholas Como"
     ]
    }
   ],
   "subs": [
    "Fabricio Gaona"
   ]
  },
  {
   "result": "away",
   "week": 2,
   "home": "Jersey Devil",
   "away": "Bounce Tempest",
   "time": "2026-08-31T19:30:00",
   "complete": true,
   "homePoints": 623,
   "awayPoints": 614,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Braden Keith",
      "Damien Stahl"
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
     "as": 15,
     "h": [
      "Tyler Arsenault",
      "Zach Bowe"
     ],
     "a": [
      "Justin Bautista",
      "Zyril Carilo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kushal Thapa",
      "Vaughn Mcclelland"
     ],
     "a": [
      "Adriene Khon",
      "Josh Knupp"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Ryan Furman",
      "Vince Abate"
     ],
     "a": [
      "Hiep Pham",
      "Vincent Tran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Zach Bowe",
      "Kushal Thapa"
     ],
     "a": [
      "Zyril Carilo",
      "Hiep Pham"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Ryan Furman",
      "Braden Keith"
     ],
     "a": [
      "Ashwin Korde",
      "Josh Knupp"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Damien Stahl",
      "Tyler Arsenault"
     ],
     "a": [
      "Justin Bautista",
      "Brandyn Schuchart"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Vince Abate",
      "Vaughn Mcclelland"
     ],
     "a": [
      "Justin Chin",
      "David Brandolph"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Zach Bowe",
      "Stephen Conger"
     ],
     "a": [
      "Hiep Pham",
      "Justin Chin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Tyler Arsenault",
      "Ryan Furman"
     ],
     "a": [
      "Zachary Lessner",
      "Justin Bautista"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Vaughn Mcclelland",
      "Damien Stahl"
     ],
     "a": [
      "Brandyn Schuchart",
      "Vincent Tran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Braden Keith",
      "Vince Abate"
     ],
     "a": [
      "Adriene Khon",
      "Ashwin Korde"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Zach Bowe",
      "Vaughn Mcclelland"
     ],
     "a": [
      "Zyril Carilo",
      "Adriene Khon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Stephen Conger",
      "Damien Stahl"
     ],
     "a": [
      "Ashwin Korde",
      "David Brandolph"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Ryan Furman",
      "Kushal Thapa"
     ],
     "a": [
      "Josh Knupp",
      "Vincent Tran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Tyler Arsenault",
      "Braden Keith"
     ],
     "a": [
      "Justin Bautista",
      "Zachary Lessner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Tyler Arsenault",
      "Vaughn Mcclelland"
     ],
     "a": [
      "Hiep Pham",
      "Zyril Carilo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kushal Thapa",
      "Damien Stahl"
     ],
     "a": [
      "Justin Chin",
      "David Brandolph"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Zach Bowe",
      "Vince Abate"
     ],
     "a": [
      "Zachary Lessner",
      "Brandyn Schuchart"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Ryan Furman",
      "Stephen Conger"
     ],
     "a": [
      "Ashwin Korde",
      "Josh Knupp"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Zach Bowe",
      "Kushal Thapa"
     ],
     "a": [
      "Zachary Lessner",
      "Ashwin Korde"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Tyler Arsenault",
      "Stephen Conger"
     ],
     "a": [
      "Zyril Carilo",
      "Vincent Tran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Ryan Furman",
      "Braden Keith"
     ],
     "a": [
      "Adriene Khon",
      "David Brandolph"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Vince Abate",
      "Damien Stahl"
     ],
     "a": [
      "Brandyn Schuchart",
      "Justin Bautista"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Tyler Arsenault",
      "Ryan Furman"
     ],
     "a": [
      "Zachary Lessner",
      "Brandyn Schuchart"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Zach Bowe",
      "Damien Stahl"
     ],
     "a": [
      "David Brandolph",
      "Josh Knupp"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kushal Thapa",
      "Vaughn Mcclelland"
     ],
     "a": [
      "Adriene Khon",
      "Justin Chin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Braden Keith",
      "Vince Abate"
     ],
     "a": [
      "Hiep Pham",
      "Justin Bautista"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Vince Abate",
      "Vaughn Mcclelland"
     ],
     "a": [
      "Adriene Khon",
      "Brandyn Schuchart"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Damien Stahl",
      "Ryan Furman"
     ],
     "a": [
      "Zyril Carilo",
      "Justin Chin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Tyler Arsenault",
      "Zach Bowe"
     ],
     "a": [
      "Justin Bautista",
      "Vincent Tran"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Braden Keith",
      "Kushal Thapa"
     ],
     "a": [
      "Hiep Pham",
      "Josh Knupp"
     ]
    }
   ],
   "subs": [
    "Vincent Tran",
    "Damien Stahl"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Dill Dinkers Freehold",
   "away": "Jersey Pickleball Club",
   "time": "2026-08-31T19:30:00",
   "complete": true,
   "homePoints": 638,
   "awayPoints": 573,
   "homeGW": 23,
   "awayGW": 9,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Caesar Gene",
      "Harrison Mui"
     ],
     "a": [
      "Anthony Bradford Bisignano",
      "Wasib Malik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Chenfei Gao",
      "Adam Weinstock"
     ],
     "a": [
      "Matt Schall",
      "Andrew Bernard"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Eugene Zaslavsky",
      "Samuel Levinson"
     ],
     "a": [
      "Zach Hizer",
      "Kevin Wysoczynski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Tom Laiso",
      "Nicholas Lagrua"
     ],
     "a": [
      "Kevin Lin",
      "Zachary Puccia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Yoon Choi",
      "Adam Weinstock"
     ],
     "a": [
      "Wasib Malik",
      "Daniel Phillips"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Caesar Gene",
      "Nicholas Lagrua"
     ],
     "a": [
      "Andrew Bernard",
      "Matt Schall"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Eugene Zaslavsky",
      "Tom Laiso"
     ],
     "a": [
      "Zach Hizer",
      "Kevin Wysoczynski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Samuel Levinson",
      "Chenfei Gao"
     ],
     "a": [
      "Kevin Lin",
      "Zachary Puccia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Nicholas Lagrua",
      "Yoon Choi"
     ],
     "a": [
      "Wasib Malik",
      "Daniel Phillips"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Adam Weinstock",
      "Harrison Mui"
     ],
     "a": [
      "Kevin Wysoczynski",
      "Matt Schall"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Eugene Zaslavsky",
      "Samuel Levinson"
     ],
     "a": [
      "Kevin Lin",
      "Zach Hizer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Tom Laiso",
      "Caesar Gene"
     ],
     "a": [
      "Anthony Bradford Bisignano",
      "Andrew Bernard"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Yoon Choi",
      "Samuel Levinson"
     ],
     "a": [
      "Andrew Bernard",
      "Daniel Phillips"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Eugene Zaslavsky",
      "Tom Laiso"
     ],
     "a": [
      "Kevin Wysoczynski",
      "Matt Schall"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Nicholas Lagrua",
      "Chenfei Gao"
     ],
     "a": [
      "Zachary Puccia",
      "Zach Hizer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Harrison Mui",
      "Adam Weinstock"
     ],
     "a": [
      "Anthony Bradford Bisignano",
      "Wasib Malik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Yoon Choi",
      "Nicholas Lagrua"
     ],
     "a": [
      "Wasib Malik",
      "Andrew Bernard"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Samuel Levinson",
      "Harrison Mui"
     ],
     "a": [
      "Kevin Lin",
      "Matt Schall"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Chenfei Gao",
      "Adam Weinstock"
     ],
     "a": [
      "Zach Hizer",
      "Zachary Puccia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Caesar Gene",
      "Eugene Zaslavsky"
     ],
     "a": [
      "Anthony Bradford Bisignano",
      "Kevin Wysoczynski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Yoon Choi",
      "Adam Weinstock"
     ],
     "a": [
      "Zachary Puccia",
      "Daniel Phillips"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Samuel Levinson",
      "Harrison Mui"
     ],
     "a": [
      "Matt Schall",
      "Kevin Lin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Tom Laiso",
      "Caesar Gene"
     ],
     "a": [
      "Anthony Bradford Bisignano",
      "Zach Hizer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Chenfei Gao",
      "Eugene Zaslavsky"
     ],
     "a": [
      "Kevin Wysoczynski",
      "Wasib Malik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Yoon Choi",
      "Samuel Levinson"
     ],
     "a": [
      "Kevin Wysoczynski",
      "Zachary Puccia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Caesar Gene",
      "Harrison Mui"
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
     "as": 18,
     "h": [
      "Chenfei Gao",
      "Tom Laiso"
     ],
     "a": [
      "Kevin Lin",
      "Andrew Bernard"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Nicholas Lagrua",
      "Eugene Zaslavsky"
     ],
     "a": [
      "Anthony Bradford Bisignano",
      "Daniel Phillips"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Yoon Choi",
      "Eugene Zaslavsky"
     ],
     "a": [
      "Zachary Puccia",
      "Kevin Wysoczynski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Tom Laiso",
      "Adam Weinstock"
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
     "as": 17,
     "h": [
      "Caesar Gene",
      "Nicholas Lagrua"
     ],
     "a": [
      "Andrew Bernard",
      "Kevin Lin"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Chenfei Gao",
      "Harrison Mui"
     ],
     "a": [
      "Anthony Bradford Bisignano",
      "Daniel Phillips"
     ]
    }
   ],
   "subs": [
    "Kevin Lin"
   ]
  },
  {
   "result": "away",
   "week": 4,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Dill Dinkers Freehold",
   "time": "2026-09-14T19:00:00",
   "complete": true,
   "homePoints": 614,
   "awayPoints": 644,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Elliott Albanese",
      "Neel Goyal"
     ],
     "a": [
      "Yoon Choi",
      "Marcin Glowacki"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Camrin Cronheim",
      "Jason Makarevic"
     ],
     "a": [
      "Chenfei Gao",
      "Eric Lin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ian Chin",
      "Keith Shedlock"
     ],
     "a": [
      "Nicholas Lagrua",
      "Harrison Mui"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Thomas Connolly",
      "Jake Laifer"
     ],
     "a": [
      "Tom Laiso",
      "Chi Fai Cho"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Thomas Connolly",
      "Jake Laifer"
     ],
     "a": [
      "Yoon Choi",
      "Eric Lin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Elliott Albanese",
      "Ian Chin"
     ],
     "a": [
      "Tom Laiso",
      "Marcin Glowacki"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Keith Shedlock",
      "Vivek Kumar"
     ],
     "a": [
      "Harrison Mui",
      "Chi Fai Cho"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jason Makarevic",
      "Camrin Cronheim"
     ],
     "a": [
      "Chenfei Gao",
      "Nicholas Lagrua"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Vivek Kumar",
      "Neel Goyal"
     ],
     "a": [
      "Yoon Choi",
      "Nicholas Lagrua"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jason Makarevic",
      "Jake Laifer"
     ],
     "a": [
      "Tom Laiso",
      "Harrison Mui"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Thomas Connolly",
      "Ian Chin"
     ],
     "a": [
      "Chi Fai Cho",
      "Chenfei Gao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Elliott Albanese",
      "Camrin Cronheim"
     ],
     "a": [
      "Marcin Glowacki",
      "Eric Lin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jason Makarevic",
      "Jake Laifer"
     ],
     "a": [
      "Yoon Choi",
      "Nicholas Lagrua"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Vivek Kumar",
      "Neel Goyal"
     ],
     "a": [
      "Eric Lin",
      "Tom Laiso"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Elliott Albanese",
      "Camrin Cronheim"
     ],
     "a": [
      "Marcin Glowacki",
      "Chenfei Gao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Keith Shedlock",
      "Ian Chin"
     ],
     "a": [
      "Harrison Mui",
      "Chi Fai Cho"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Neel Goyal",
      "Camrin Cronheim"
     ],
     "a": [
      "Yoon Choi",
      "Chi Fai Cho"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Thomas Connolly",
      "Vivek Kumar"
     ],
     "a": [
      "Tom Laiso",
      "Nicholas Lagrua"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jason Makarevic",
      "Elliott Albanese"
     ],
     "a": [
      "Chenfei Gao",
      "Harrison Mui"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jake Laifer",
      "Keith Shedlock"
     ],
     "a": [
      "Marcin Glowacki",
      "Eric Lin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Neel Goyal",
      "Ian Chin"
     ],
     "a": [
      "Yoon Choi",
      "Tom Laiso"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Camrin Cronheim",
      "Keith Shedlock"
     ],
     "a": [
      "Chenfei Gao",
      "Eric Lin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Vivek Kumar",
      "Jake Laifer"
     ],
     "a": [
      "Chi Fai Cho",
      "Marcin Glowacki"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Thomas Connolly",
      "Elliott Albanese"
     ],
     "a": [
      "Harrison Mui",
      "Nicholas Lagrua"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Camrin Cronheim",
      "Vivek Kumar"
     ],
     "a": [
      "Yoon Choi",
      "Harrison Mui"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Thomas Connolly",
      "Elliott Albanese"
     ],
     "a": [
      "Chi Fai Cho",
      "Eric Lin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jake Laifer",
      "Keith Shedlock"
     ],
     "a": [
      "Tom Laiso",
      "Chenfei Gao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Neel Goyal",
      "Jason Makarevic"
     ],
     "a": [
      "Nicholas Lagrua",
      "Marcin Glowacki"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jason Makarevic",
      "Ian Chin"
     ],
     "a": [
      "Yoon Choi",
      "Chi Fai Cho"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Thomas Connolly",
      "Vivek Kumar"
     ],
     "a": [
      "Chenfei Gao",
      "Marcin Glowacki"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Neel Goyal",
      "Jake Laifer"
     ],
     "a": [
      "Nicholas Lagrua",
      "Eric Lin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Keith Shedlock",
      "Camrin Cronheim"
     ],
     "a": [
      "Tom Laiso",
      "Harrison Mui"
     ]
    }
   ],
   "subs": [
    "Eric Lin"
   ]
  },
  {
   "result": "home",
   "week": 4,
   "home": "Premiere",
   "away": "Monroe",
   "time": "2026-09-14T19:00:00",
   "complete": true,
   "homePoints": 673,
   "awayPoints": 583,
   "homeGW": 25,
   "awayGW": 7,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Rob Pandolfi",
      "Matthew Friedman"
     ],
     "a": [
      "Aleksey Sergeev",
      "Brian O'Neill"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Boris Tserlin",
      "Nicholas Como"
     ],
     "a": [
      "Rahul Purwah",
      "Jacob Rosengarten"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jacob Yandoli",
      "Chris Frangipane"
     ],
     "a": [
      "Jonathan Ksiezopolski",
      "Julius Degen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Neil Ottrando",
      "Gary White"
     ],
     "a": [
      "Ivan Rios",
      "Salman Saad"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Gary White",
      "Neil Ottrando"
     ],
     "a": [
      "Ivan Rios",
      "Salman Saad"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Rob Pandolfi",
      "Matthew Friedman"
     ],
     "a": [
      "Aleksey Sergeev",
      "Brian O'Neill"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Boris Tserlin",
      "Nicholas Como"
     ],
     "a": [
      "Rahul Purwah",
      "Jacob Rosengarten"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Chris Frangipane",
      "Jacob Yandoli"
     ],
     "a": [
      "Jonathan Ksiezopolski",
      "Julius Degen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Boris Tserlin",
      "Gary White"
     ],
     "a": [
      "Julius Degen",
      "Jacob Rosengarten"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jacob Yandoli",
      "Matthew Friedman"
     ],
     "a": [
      "Jonathan Ksiezopolski",
      "Salman Saad"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Rob Pandolfi",
      "Neil Ottrando"
     ],
     "a": [
      "Aleksey Sergeev",
      "Ivan Rios"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Chris Frangipane",
      "Nicholas Como"
     ],
     "a": [
      "Rahul Purwah",
      "Brian O'Neill"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Gary White",
      "Boris Tserlin"
     ],
     "a": [
      "Rahul Purwah",
      "Brian O'Neill"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Chris Frangipane",
      "Nicholas Como"
     ],
     "a": [
      "Julius Degen",
      "Jacob Rosengarten"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Rob Pandolfi",
      "Neil Ottrando"
     ],
     "a": [
      "Jonathan Ksiezopolski",
      "Salman Saad"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jacob Yandoli",
      "Matthew Friedman"
     ],
     "a": [
      "Aleksey Sergeev",
      "Ivan Rios"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Boris Tserlin",
      "Matthew Friedman"
     ],
     "a": [
      "Rahul Purwah",
      "Salman Saad"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Gary White",
      "Jacob Yandoli"
     ],
     "a": [
      "Julius Degen",
      "Ivan Rios"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Neil Ottrando",
      "Nicholas Como"
     ],
     "a": [
      "Brian O'Neill",
      "Jacob Rosengarten"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Chris Frangipane",
      "Rob Pandolfi"
     ],
     "a": [
      "Aleksey Sergeev",
      "Jonathan Ksiezopolski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Jacob Yandoli",
      "Gary White"
     ],
     "a": [
      "Aleksey Sergeev",
      "Salman Saad"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Boris Tserlin",
      "Matthew Friedman"
     ],
     "a": [
      "Rahul Purwah",
      "Jonathan Ksiezopolski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Rob Pandolfi",
      "Chris Frangipane"
     ],
     "a": [
      "Julius Degen",
      "Ivan Rios"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Neil Ottrando",
      "Nicholas Como"
     ],
     "a": [
      "Jacob Rosengarten",
      "Brian O'Neill"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Boris Tserlin",
      "Rob Pandolfi"
     ],
     "a": [
      "Rahul Purwah",
      "Ivan Rios"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Chris Frangipane",
      "Neil Ottrando"
     ],
     "a": [
      "Jonathan Ksiezopolski",
      "Brian O'Neill"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Gary White",
      "Matthew Friedman"
     ],
     "a": [
      "Aleksey Sergeev",
      "Jacob Rosengarten"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Nicholas Como",
      "Jacob Yandoli"
     ],
     "a": [
      "Julius Degen",
      "Salman Saad"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Nicholas Como",
      "Jacob Yandoli"
     ],
     "a": [
      "Julius Degen",
      "Salman Saad"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Rob Pandolfi",
      "Boris Tserlin"
     ],
     "a": [
      "Aleksey Sergeev",
      "Jacob Rosengarten"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Neil Ottrando",
      "Chris Frangipane"
     ],
     "a": [
      "Rahul Purwah",
      "Ivan Rios"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Gary White",
      "Matthew Friedman"
     ],
     "a": [
      "Jonathan Ksiezopolski",
      "Brian O'Neill"
     ]
    }
   ],
   "subs": [
    "Salman Saad"
   ]
  },
  {
   "result": "away",
   "week": 4,
   "home": "Picklr Newtown",
   "away": "Jersey Devil",
   "time": "2026-09-14T19:00:00",
   "complete": true,
   "homePoints": 609,
   "awayPoints": 607,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "William Lee",
      "Zach Mcgowan"
     ],
     "a": [
      "Vince Abate",
      "Daniel Schwab"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Christian Lupica",
      "Joseph Yi"
     ],
     "a": [
      "Sheel Motiwala",
      "Braden Keith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Ron Branca",
      "Joshua Mindlin"
     ],
     "a": [
      "Johny Mario",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Alex Pecora",
      "Tim Cahalin"
     ],
     "a": [
      "Ryan Furman",
      "Matthew Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Ron Branca",
      "Thomas Fenton"
     ],
     "a": [
      "Vince Abate",
      "Vaughn Mcclelland"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Zach Mcgowan",
      "Jaco De Waal"
     ],
     "a": [
      "Braden Keith",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Christian Lupica",
      "Joseph Yi"
     ],
     "a": [
      "Daniel Schwab",
      "Ryan Furman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "William Lee",
      "Joshua Mindlin"
     ],
     "a": [
      "Johny Mario",
      "Matthew Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jaco De Waal",
      "Joshua Mindlin"
     ],
     "a": [
      "Vaughn Mcclelland",
      "Sheel Motiwala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Zach Mcgowan",
      "Christian Lupica"
     ],
     "a": [
      "Vince Abate",
      "Daniel Schwab"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Thomas Fenton",
      "William Lee"
     ],
     "a": [
      "Matthew Chen",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Alex Pecora",
      "Joseph Yi"
     ],
     "a": [
      "Braden Keith",
      "Ryan Furman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Thomas Fenton",
      "Alex Pecora"
     ],
     "a": [
      "Vince Abate",
      "Johny Mario"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jaco De Waal",
      "Tim Cahalin"
     ],
     "a": [
      "Ryan Furman",
      "Vaughn Mcclelland"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Christian Lupica",
      "Joshua Mindlin"
     ],
     "a": [
      "Braden Keith",
      "Sheel Motiwala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Ron Branca",
      "William Lee"
     ],
     "a": [
      "Tyler Arsenault",
      "Matthew Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Thomas Fenton",
      "Alex Pecora"
     ],
     "a": [
      "Vince Abate",
      "Sheel Motiwala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Joseph Yi",
      "Jaco De Waal"
     ],
     "a": [
      "Vaughn Mcclelland",
      "Braden Keith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "William Lee",
      "Tim Cahalin"
     ],
     "a": [
      "Daniel Schwab",
      "Matthew Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Ron Branca",
      "Zach Mcgowan"
     ],
     "a": [
      "Ryan Furman",
      "Johny Mario"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Joshua Mindlin",
      "Thomas Fenton"
     ],
     "a": [
      "Vince Abate",
      "Vaughn Mcclelland"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Joseph Yi",
      "William Lee"
     ],
     "a": [
      "Daniel Schwab",
      "Sheel Motiwala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Alex Pecora",
      "Christian Lupica"
     ],
     "a": [
      "Ryan Furman",
      "Matthew Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Zach Mcgowan",
      "Jaco De Waal"
     ],
     "a": [
      "Johny Mario",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Alex Pecora",
      "Joseph Yi"
     ],
     "a": [
      "Sheel Motiwala",
      "Vince Abate"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Joshua Mindlin",
      "Jaco De Waal"
     ],
     "a": [
      "Vaughn Mcclelland",
      "Braden Keith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Christian Lupica",
      "Zach Mcgowan"
     ],
     "a": [
      "Daniel Schwab",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Ron Branca",
      "Tim Cahalin"
     ],
     "a": [
      "Matthew Chen",
      "Johny Mario"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Joshua Mindlin",
      "Christian Lupica"
     ],
     "a": [
      "Vaughn Mcclelland",
      "Sheel Motiwala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Alex Pecora",
      "Tim Cahalin"
     ],
     "a": [
      "Braden Keith",
      "Matthew Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Zach Mcgowan",
      "William Lee"
     ],
     "a": [
      "Daniel Schwab",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ron Branca",
      "Thomas Fenton"
     ],
     "a": [
      "Johny Mario",
      "Ryan Furman"
     ]
    }
   ],
   "subs": [
    "Johny Mario"
   ]
  },
  {
   "result": "home",
   "week": 4,
   "home": "Bounce Tempest",
   "away": "Pickle House",
   "time": "2026-09-14T19:30:00",
   "complete": true,
   "homePoints": 605,
   "awayPoints": 606,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Hiep Pham",
      "Adriene Khon"
     ],
     "a": [
      "Zach Hollmann",
      "Matthew Eldridge"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 27,
     "as": 29,
     "h": [
      "Zachary Lessner",
      "Justin Bautista"
     ],
     "a": [
      "Ali Husain",
      "Chris Damato"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Ashwin Korde",
      "Alex Boory"
     ],
     "a": [
      "Rich Marcovecchio",
      "Gopi Narayanan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Brandyn Schuchart",
      "Josh Knupp"
     ],
     "a": [
      "Mickey Cook",
      "Al Mancini"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Zachary Lessner",
      "Brandyn Schuchart"
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
      "Josh Knupp",
      "Alex Mihalca"
     ],
     "a": [
      "Ali Husain",
      "Gopi Narayanan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Justin Bautista",
      "Hiep Pham"
     ],
     "a": [
      "Dipen Bhatt",
      "Mickey Cook"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Alex Boory",
      "Justin Chin"
     ],
     "a": [
      "Rich Marcovecchio",
      "Al Mancini"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Adriene Khon",
      "Josh Knupp"
     ],
     "a": [
      "Matthew Eldridge",
      "Ali Husain"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Zachary Lessner",
      "Ashwin Korde"
     ],
     "a": [
      "Zach Hollmann",
      "Al Mancini"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Hiep Pham",
      "Alex Mihalca"
     ],
     "a": [
      "Tarkan Akas",
      "Dipen Bhatt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Brandyn Schuchart",
      "Justin Bautista"
     ],
     "a": [
      "Chris Damato",
      "Rich Marcovecchio"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Brandyn Schuchart",
      "Justin Bautista"
     ],
     "a": [
      "Dipen Bhatt",
      "Chris Damato"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Hiep Pham",
      "Adriene Khon"
     ],
     "a": [
      "Zach Hollmann",
      "Gopi Narayanan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ashwin Korde",
      "Alex Mihalca"
     ],
     "a": [
      "Tarkan Akas",
      "Mickey Cook"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Alex Boory",
      "Justin Chin"
     ],
     "a": [
      "Matthew Eldridge",
      "Al Mancini"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Josh Knupp",
      "Zachary Lessner"
     ],
     "a": [
      "Ali Husain",
      "Mickey Cook"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Justin Chin",
      "Hiep Pham"
     ],
     "a": [
      "Tarkan Akas",
      "Zach Hollmann"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Alex Mihalca",
      "Ashwin Korde"
     ],
     "a": [
      "Gopi Narayanan",
      "Matthew Eldridge"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Adriene Khon",
      "Justin Bautista"
     ],
     "a": [
      "Rich Marcovecchio",
      "Dipen Bhatt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Justin Chin",
      "Hiep Pham"
     ],
     "a": [
      "Ali Husain",
      "Dipen Bhatt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Alex Boory",
      "Alex Mihalca"
     ],
     "a": [
      "Zach Hollmann",
      "Rich Marcovecchio"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Brandyn Schuchart",
      "Zachary Lessner"
     ],
     "a": [
      "Chris Damato",
      "Al Mancini"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Ashwin Korde",
      "Josh Knupp"
     ],
     "a": [
      "Matthew Eldridge",
      "Gopi Narayanan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Zachary Lessner",
      "Alex Boory"
     ],
     "a": [
      "Chris Damato",
      "Al Mancini"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Josh Knupp",
      "Adriene Khon"
     ],
     "a": [
      "Tarkan Akas",
      "Mickey Cook"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Justin Bautista",
      "Justin Chin"
     ],
     "a": [
      "Ali Husain",
      "Rich Marcovecchio"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Brandyn Schuchart",
      "Alex Mihalca"
     ],
     "a": [
      "Zach Hollmann",
      "Gopi Narayanan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Josh Knupp",
      "Alex Boory"
     ],
     "a": [
      "Matthew Eldridge",
      "Tarkan Akas"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Adriene Khon",
      "Brandyn Schuchart"
     ],
     "a": [
      "Zach Hollmann",
      "Mickey Cook"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Ashwin Korde",
      "Justin Chin"
     ],
     "a": [
      "Gopi Narayanan",
      "Dipen Bhatt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Zachary Lessner",
      "Justin Bautista"
     ],
     "a": [
      "Ali Husain",
      "Chris Damato"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 4,
   "home": "Jersey Pickleball Club",
   "away": "Pickleball Kingdom Watchung",
   "time": "2026-09-14T19:30:00",
   "complete": true,
   "homePoints": 455,
   "awayPoints": 482,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Matt Schall",
      "Simon Rosenwasser"
     ],
     "a": [
      "Ken Velarde",
      "Joshua Octaviano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kevin Wysoczynski",
      "Gary Sidhu"
     ],
     "a": [
      "Daniel Gallegos",
      "Gautham Bondugula"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Anthony Bradford Bisignano",
      "Wasib Malik"
     ],
     "a": [
      "Anthony Bonaventura",
      "Marr Flores"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Daniel Phillips",
      "Zachary Puccia"
     ],
     "a": [
      "Kevin Sun",
      "Josiah Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kevin Wysoczynski",
      "Gary Sidhu"
     ],
     "a": [
      "Gautham Bondugula",
      "Daniel Gallegos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Daniel Phillips",
      "Zachary Puccia"
     ],
     "a": [
      "Joshua Octaviano",
      "Ken Velarde"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Matt Schall",
      "Simon Rosenwasser"
     ],
     "a": [
      "Anthony Bonaventura",
      "Marr Flores"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Anthony Bradford Bisignano",
      "Wasib Malik"
     ],
     "a": [
      "Kevin Sun",
      "Josiah Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Matt Schall",
      "Kevin Wysoczynski"
     ],
     "a": [
      "Ken Velarde",
      "Anthony Bonaventura"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Simon Rosenwasser",
      "Wasib Malik"
     ],
     "a": [
      "Gautham Bondugula",
      "Kevin Sun"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Daniel Phillips",
      "Anthony Bradford Bisignano"
     ],
     "a": [
      "Marr Flores",
      "Josiah Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Zachary Puccia",
      "Gary Sidhu"
     ],
     "a": [
      "Daniel Gallegos",
      "Joshua Octaviano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Gary Sidhu",
      "Zachary Puccia"
     ],
     "a": [
      "Daniel Gallegos",
      "Joshua Octaviano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Anthony Bradford Bisignano",
      "Daniel Phillips"
     ],
     "a": [
      "Ken Velarde",
      "Anthony Bonaventura"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Wasib Malik",
      "Simon Rosenwasser"
     ],
     "a": [
      "Marr Flores",
      "Josiah Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Matt Schall",
      "Kevin Wysoczynski"
     ],
     "a": [
      "Gautham Bondugula",
      "Kevin Sun"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Zachary Puccia",
      "Wasib Malik"
     ],
     "a": [
      "Josiah Kim",
      "Joshua Octaviano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Matt Schall",
      "Anthony Bradford Bisignano"
     ],
     "a": [
      "Ken Velarde",
      "Kevin Sun"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kevin Wysoczynski",
      "Simon Rosenwasser"
     ],
     "a": [
      "Anthony Bonaventura",
      "Gautham Bondugula"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Gary Sidhu",
      "Daniel Phillips"
     ],
     "a": [
      "Marr Flores",
      "Daniel Gallegos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Gary Sidhu",
      "Daniel Phillips"
     ],
     "a": [
      "Ken Velarde",
      "Josiah Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Kevin Wysoczynski",
      "Simon Rosenwasser"
     ],
     "a": [
      "Gautham Bondugula",
      "Marr Flores"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Matt Schall",
      "Anthony Bradford Bisignano"
     ],
     "a": [
      "Kevin Sun",
      "Daniel Gallegos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Zachary Puccia",
      "Wasib Malik"
     ],
     "a": [
      "Anthony Bonaventura",
      "Joshua Octaviano"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 0,
     "as": 0,
     "h": [
      "Wasib Malik",
      "Daniel Phillips"
     ],
     "a": [
      "Ken Velarde",
      "Marr Flores"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 0,
     "as": 0,
     "h": [
      "Matt Schall",
      "Zachary Puccia"
     ],
     "a": [
      "Daniel Gallegos",
      "Anthony Bonaventura"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 0,
     "as": 0,
     "h": [
      "Gary Sidhu",
      "Simon Rosenwasser"
     ],
     "a": [
      "Gautham Bondugula",
      "Josiah Kim"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 0,
     "as": 0,
     "h": [
      "Kevin Wysoczynski",
      "Anthony Bradford Bisignano"
     ],
     "a": [
      "Joshua Octaviano",
      "Kevin Sun"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 0,
     "as": 0,
     "h": [
      "Kevin Wysoczynski",
      "Anthony Bradford Bisignano"
     ],
     "a": [
      "Daniel Gallegos",
      "Anthony Bonaventura"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 0,
     "as": 0,
     "h": [
      "Wasib Malik",
      "Daniel Phillips"
     ],
     "a": [
      "Kevin Sun",
      "Ken Velarde"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 0,
     "as": 0,
     "h": [
      "Gary Sidhu",
      "Simon Rosenwasser"
     ],
     "a": [
      "Joshua Octaviano",
      "Josiah Kim"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 0,
     "as": 0,
     "h": [
      "Matt Schall",
      "Zachary Puccia"
     ],
     "a": [
      "Gautham Bondugula",
      "Marr Flores"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 4,
   "home": "Bounce Malvern",
   "away": "ACE Moorestown",
   "time": "2026-09-14T19:30:00",
   "complete": true,
   "homePoints": 656,
   "awayPoints": 529,
   "homeGW": 24,
   "awayGW": 8,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Dustin Rabinowitz",
      "Shashank Kamdar"
     ],
     "a": [
      "Daniel Ehala",
      "Bryan Nardone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Ryan Rosen",
      "Scott Bohrer"
     ],
     "a": [
      "Marc Harden",
      "Riguo Zheng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Austin Gow",
      "Jeff Zamorski"
     ],
     "a": [
      "Tyler Marlin",
      "Nachiket Vaidya"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Lou Frignito",
      "Yash Shah"
     ],
     "a": [
      "Matthew Mintz",
      "Raaj Singh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jordan Long",
      "Yash Shah"
     ],
     "a": [
      "Daniel Ehala",
      "Tyler Marlin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Dustin Rabinowitz",
      "Scott Bohrer"
     ],
     "a": [
      "Matthew Mintz",
      "Raaj Singh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Lou Frignito",
      "Shashank Kamdar"
     ],
     "a": [
      "Marc Harden",
      "Riguo Zheng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Ryan Rosen",
      "Vaughn Lawrence"
     ],
     "a": [
      "Bryan Nardone",
      "Nachiket Vaidya"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Dustin Rabinowitz",
      "Lou Frignito"
     ],
     "a": [
      "Daniel Ehala",
      "Marc Harden"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Scott Bohrer",
      "Vaughn Lawrence"
     ],
     "a": [
      "Nachiket Vaidya",
      "Matthew Mintz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Austin Gow",
      "Yash Shah"
     ],
     "a": [
      "Bryan Nardone",
      "Raaj Singh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Ryan Rosen",
      "Jeff Zamorski"
     ],
     "a": [
      "Tyler Marlin",
      "Riguo Zheng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Lou Frignito",
      "Austin Gow"
     ],
     "a": [
      "Marc Harden",
      "Bryan Nardone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Scott Bohrer",
      "Jeff Zamorski"
     ],
     "a": [
      "Tyler Marlin",
      "Riguo Zheng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Ryan Rosen",
      "Vaughn Lawrence"
     ],
     "a": [
      "Matthew Mintz",
      "Nachiket Vaidya"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Shashank Kamdar",
      "Jordan Long"
     ],
     "a": [
      "Daniel Ehala",
      "Raaj Singh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jordan Long",
      "Scott Bohrer"
     ],
     "a": [
      "Matthew Mintz",
      "Daniel Ehala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Dustin Rabinowitz",
      "Yash Shah"
     ],
     "a": [
      "Riguo Zheng",
      "Raaj Singh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Ryan Rosen",
      "Jeff Zamorski"
     ],
     "a": [
      "Tyler Marlin",
      "Nachiket Vaidya"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Lou Frignito",
      "Shashank Kamdar"
     ],
     "a": [
      "Marc Harden",
      "Bryan Nardone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Lou Frignito",
      "Vaughn Lawrence"
     ],
     "a": [
      "Nachiket Vaidya",
      "Raaj Singh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Dustin Rabinowitz",
      "Austin Gow"
     ],
     "a": [
      "Marc Harden",
      "Daniel Ehala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Shashank Kamdar",
      "Ryan Rosen"
     ],
     "a": [
      "Riguo Zheng",
      "Bryan Nardone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jeff Zamorski",
      "Yash Shah"
     ],
     "a": [
      "Matthew Mintz",
      "Tyler Marlin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Austin Gow",
      "Jeff Zamorski"
     ],
     "a": [
      "Bryan Nardone",
      "Tyler Marlin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Shashank Kamdar",
      "Jordan Long"
     ],
     "a": [
      "Marc Harden",
      "Raaj Singh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Scott Bohrer",
      "Yash Shah"
     ],
     "a": [
      "Matthew Mintz",
      "Riguo Zheng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Dustin Rabinowitz",
      "Vaughn Lawrence"
     ],
     "a": [
      "Daniel Ehala",
      "Nachiket Vaidya"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Austin Gow",
      "Jordan Long"
     ],
     "a": [
      "Marc Harden",
      "Raaj Singh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Shashank Kamdar",
      "Dustin Rabinowitz"
     ],
     "a": [
      "Daniel Ehala",
      "Bryan Nardone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Lou Frignito",
      "Vaughn Lawrence"
     ],
     "a": [
      "Nachiket Vaidya",
      "Riguo Zheng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Ryan Rosen",
      "Scott Bohrer"
     ],
     "a": [
      "Matthew Mintz",
      "Tyler Marlin"
     ]
    }
   ],
   "subs": [
    "Raaj Singh"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "Dill Dinkers Freehold",
   "away": "Flemington",
   "time": "2026-09-21T19:00:00",
   "complete": true,
   "homePoints": 657,
   "awayPoints": 518,
   "homeGW": 26,
   "awayGW": 6,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Eugene Zaslavsky",
      "Tom Laiso"
     ],
     "a": [
      "Robbie Oddy",
      "Andy Ead"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Yoon Choi",
      "Nicholas Lagrua"
     ],
     "a": [
      "Tim Dowd",
      "Obege Janvier"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Adam Weinstock",
      "Chenfei Gao"
     ],
     "a": [
      "Steven Gregov",
      "Jay Alquiros"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Harrison Mui",
      "Samuel Levinson"
     ],
     "a": [
      "Hans Tang",
      "Frank Clark"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Adam Weinstock",
      "Harrison Mui"
     ],
     "a": [
      "Robbie Oddy",
      "Andy Ead"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Yoon Choi",
      "Samuel Levinson"
     ],
     "a": [
      "Tim Dowd",
      "Obege Janvier"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Eugene Zaslavsky",
      "Nicholas Lagrua"
     ],
     "a": [
      "Jay Alquiros",
      "Steven Gregov"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Tom Laiso",
      "Chenfei Gao"
     ],
     "a": [
      "Hans Tang",
      "Frank Clark"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Nicholas Lagrua",
      "Harrison Mui"
     ],
     "a": [
      "Robbie Oddy",
      "Hans Tang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Eugene Zaslavsky",
      "Yoon Choi"
     ],
     "a": [
      "Tim Dowd",
      "Andy Ead"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Tom Laiso",
      "Adam Weinstock"
     ],
     "a": [
      "Steven Gregov",
      "Frank Clark"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Samuel Levinson",
      "Chenfei Gao"
     ],
     "a": [
      "Jay Alquiros",
      "Obege Janvier"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Yoon Choi",
      "Harrison Mui"
     ],
     "a": [
      "Robbie Oddy",
      "Hans Tang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Adam Weinstock",
      "Tom Laiso"
     ],
     "a": [
      "Tim Dowd",
      "Andy Ead"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Nicholas Lagrua",
      "Chenfei Gao"
     ],
     "a": [
      "Jay Alquiros",
      "Frank Clark"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Eugene Zaslavsky",
      "Samuel Levinson"
     ],
     "a": [
      "Steven Gregov",
      "Obege Janvier"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Eugene Zaslavsky",
      "Nicholas Lagrua"
     ],
     "a": [
      "Robbie Oddy",
      "Andy Ead"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Yoon Choi",
      "Adam Weinstock"
     ],
     "a": [
      "Tim Dowd",
      "Jay Alquiros"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Tom Laiso",
      "Harrison Mui"
     ],
     "a": [
      "Obege Janvier",
      "Frank Clark"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Chenfei Gao",
      "Samuel Levinson"
     ],
     "a": [
      "Hans Tang",
      "Steven Gregov"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Yoon Choi",
      "Nicholas Lagrua"
     ],
     "a": [
      "Robbie Oddy",
      "Frank Clark"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Eugene Zaslavsky",
      "Adam Weinstock"
     ],
     "a": [
      "Tim Dowd",
      "Steven Gregov"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Harrison Mui",
      "Samuel Levinson"
     ],
     "a": [
      "Obege Janvier",
      "Andy Ead"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Tom Laiso",
      "Chenfei Gao"
     ],
     "a": [
      "Hans Tang",
      "Jay Alquiros"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Adam Weinstock",
      "Harrison Mui"
     ],
     "a": [
      "Robbie Oddy",
      "Steven Gregov"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Yoon Choi",
      "Samuel Levinson"
     ],
     "a": [
      "Andy Ead",
      "Obege Janvier"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Eugene Zaslavsky",
      "Tom Laiso"
     ],
     "a": [
      "Tim Dowd",
      "Frank Clark"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Nicholas Lagrua",
      "Chenfei Gao"
     ],
     "a": [
      "Hans Tang",
      "Jay Alquiros"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Chenfei Gao",
      "Adam Weinstock"
     ],
     "a": [
      "Robbie Oddy",
      "Tim Dowd"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Tom Laiso",
      "Yoon Choi"
     ],
     "a": [
      "Obege Janvier",
      "Jay Alquiros"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Eugene Zaslavsky",
      "Samuel Levinson"
     ],
     "a": [
      "Hans Tang",
      "Andy Ead"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Harrison Mui",
      "Nicholas Lagrua"
     ],
     "a": [
      "Frank Clark",
      "Steven Gregov"
     ]
    }
   ],
   "subs": [
    "Steven Gregov",
    "Obege Janvier"
   ]
  },
  {
   "result": "away",
   "week": 5,
   "home": "Jersey Pickleball Club",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-09-21T19:30:00",
   "complete": true,
   "homePoints": 555,
   "awayPoints": 636,
   "homeGW": 10,
   "awayGW": 22,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sebastian Ferrer",
      "Zach Hizer"
     ],
     "a": [
      "Thomas Connolly",
      "Shreyas Pani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Gary Sidhu",
      "Zachary Puccia"
     ],
     "a": [
      "Jason Makarevic",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Matt Schall",
      "Kevin Wysoczynski"
     ],
     "a": [
      "Neel Goyal",
      "Sidd Pathare"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Anthony Bradford Bisignano",
      "Andrew Bernard"
     ],
     "a": [
      "Elliott Albanese",
      "Ian Chin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Gary Sidhu",
      "Zachary Puccia"
     ],
     "a": [
      "Neel Goyal",
      "Sidd Pathare"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sebastian Ferrer",
      "Zach Hizer"
     ],
     "a": [
      "Shreyas Pani",
      "Thomas Connolly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Anthony Bradford Bisignano",
      "Andrew Bernard"
     ],
     "a": [
      "Ian Chin",
      "Vivek Kumar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Matt Schall",
      "Kevin Wysoczynski"
     ],
     "a": [
      "Jason Makarevic",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Anthony Bradford Bisignano",
      "Zachary Puccia"
     ],
     "a": [
      "Camrin Cronheim",
      "Neel Goyal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Matt Schall",
      "Andrew Bernard"
     ],
     "a": [
      "Elliott Albanese",
      "Sidd Pathare"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Gary Sidhu",
      "Sebastian Ferrer"
     ],
     "a": [
      "Jason Makarevic",
      "Shreyas Pani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Zach Hizer",
      "Kevin Wysoczynski"
     ],
     "a": [
      "Ian Chin",
      "Vivek Kumar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Zachary Puccia",
      "Sebastian Ferrer"
     ],
     "a": [
      "Jason Makarevic",
      "Shreyas Pani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Gary Sidhu",
      "Kevin Wysoczynski"
     ],
     "a": [
      "Neel Goyal",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Matt Schall",
      "Andrew Bernard"
     ],
     "a": [
      "Elliott Albanese",
      "Sidd Pathare"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Zach Hizer",
      "Anthony Bradford Bisignano"
     ],
     "a": [
      "Thomas Connolly",
      "Ian Chin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Zachary Puccia",
      "Kevin Wysoczynski"
     ],
     "a": [
      "Neel Goyal",
      "Shreyas Pani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Andrew Bernard",
      "Gary Sidhu"
     ],
     "a": [
      "Jason Makarevic",
      "Elliott Albanese"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Zach Hizer",
      "Matt Schall"
     ],
     "a": [
      "Camrin Cronheim",
      "Vivek Kumar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Anthony Bradford Bisignano",
      "Sebastian Ferrer"
     ],
     "a": [
      "Thomas Connolly",
      "Sidd Pathare"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sebastian Ferrer",
      "Anthony Bradford Bisignano"
     ],
     "a": [
      "Thomas Connolly",
      "Sidd Pathare"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Zachary Puccia",
      "Kevin Wysoczynski"
     ],
     "a": [
      "Neel Goyal",
      "Shreyas Pani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Gary Sidhu",
      "Andrew Bernard"
     ],
     "a": [
      "Jason Makarevic",
      "Ian Chin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Matt Schall",
      "Zach Hizer"
     ],
     "a": [
      "Camrin Cronheim",
      "Vivek Kumar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Zach Hizer",
      "Zachary Puccia"
     ],
     "a": [
      "Jason Makarevic",
      "Neel Goyal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Matt Schall",
      "Sebastian Ferrer"
     ],
     "a": [
      "Camrin Cronheim",
      "Sidd Pathare"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Anthony Bradford Bisignano",
      "Gary Sidhu"
     ],
     "a": [
      "Elliott Albanese",
      "Vivek Kumar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kevin Wysoczynski",
      "Andrew Bernard"
     ],
     "a": [
      "Thomas Connolly",
      "Ian Chin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Kevin Wysoczynski",
      "Andrew Bernard"
     ],
     "a": [
      "Thomas Connolly",
      "Elliott Albanese"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Matt Schall",
      "Sebastian Ferrer"
     ],
     "a": [
      "Camrin Cronheim",
      "Ian Chin"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Zach Hizer",
      "Zachary Puccia"
     ],
     "a": [
      "Neel Goyal",
      "Jason Makarevic"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Anthony Bradford Bisignano",
      "Gary Sidhu"
     ],
     "a": [
      "Vivek Kumar",
      "Sidd Pathare"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 5,
   "home": "Monroe",
   "away": "Pickleball Kingdom Watchung",
   "time": "2026-09-21T19:30:00",
   "complete": true,
   "homePoints": 523,
   "awayPoints": 684,
   "homeGW": 3,
   "awayGW": 29,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Aleksey Sergeev",
      "Jonathan Ksiezopolski"
     ],
     "a": [
      "Joshua Octaviano",
      "Daniel Gallegos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Rahul Purwah",
      "Jacob Rosengarten"
     ],
     "a": [
      "Stanley Bonczek",
      "Anthony Bonaventura"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Brian O'Neill",
      "Abhishekh Mehra"
     ],
     "a": [
      "Christopher Natividad",
      "Marr Flores"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Snehit Achanta",
      "Michael Ksiezopolski"
     ],
     "a": [
      "Josiah Kim",
      "Kevin Sun"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Ivan Rios",
      "Julius Degen"
     ],
     "a": [
      "Anthony Bonaventura",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Aleksey Sergeev",
      "Jonathan Ksiezopolski"
     ],
     "a": [
      "Joshua Octaviano",
      "Daniel Gallegos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Rahul Purwah",
      "Snehit Achanta"
     ],
     "a": [
      "Kevin Sun",
      "Josiah Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jacob Rosengarten",
      "Michael Ksiezopolski"
     ],
     "a": [
      "Christopher Natividad",
      "Marr Flores"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Ivan Rios",
      "Abhishekh Mehra"
     ],
     "a": [
      "Joshua Octaviano",
      "Anthony Bonaventura"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Jonathan Ksiezopolski",
      "Jacob Rosengarten"
     ],
     "a": [
      "Daniel Gallegos",
      "Christopher Natividad"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Aleksey Sergeev",
      "Rahul Purwah"
     ],
     "a": [
      "Stanley Bonczek",
      "Kevin Sun"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Julius Degen",
      "Brian O'Neill"
     ],
     "a": [
      "Marr Flores",
      "Josiah Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Rahul Purwah",
      "Michael Ksiezopolski"
     ],
     "a": [
      "Daniel Gallegos",
      "Christopher Natividad"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Ivan Rios",
      "Jacob Rosengarten"
     ],
     "a": [
      "Joshua Octaviano",
      "Anthony Bonaventura"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Snehit Achanta",
      "Abhishekh Mehra"
     ],
     "a": [
      "Marr Flores",
      "Josiah Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Aleksey Sergeev",
      "Julius Degen"
     ],
     "a": [
      "Stanley Bonczek",
      "Kevin Sun"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Aleksey Sergeev",
      "Ivan Rios"
     ],
     "a": [
      "Joshua Octaviano",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jacob Rosengarten",
      "Michael Ksiezopolski"
     ],
     "a": [
      "Anthony Bonaventura",
      "Christopher Natividad"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Jonathan Ksiezopolski",
      "Julius Degen"
     ],
     "a": [
      "Marr Flores",
      "Kevin Sun"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Brian O'Neill",
      "Snehit Achanta"
     ],
     "a": [
      "Daniel Gallegos",
      "Josiah Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jonathan Ksiezopolski",
      "Brian O'Neill"
     ],
     "a": [
      "Anthony Bonaventura",
      "Christopher Natividad"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Aleksey Sergeev",
      "Ivan Rios"
     ],
     "a": [
      "Joshua Octaviano",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Julius Degen",
      "Rahul Purwah"
     ],
     "a": [
      "Daniel Gallegos",
      "Josiah Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Snehit Achanta",
      "Abhishekh Mehra"
     ],
     "a": [
      "Marr Flores",
      "Kevin Sun"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Brian O'Neill",
      "Abhishekh Mehra"
     ],
     "a": [
      "Christopher Natividad",
      "Josiah Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Rahul Purwah",
      "Jacob Rosengarten"
     ],
     "a": [
      "Stanley Bonczek",
      "Marr Flores"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ivan Rios",
      "Michael Ksiezopolski"
     ],
     "a": [
      "Daniel Gallegos",
      "Anthony Bonaventura"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Aleksey Sergeev",
      "Julius Degen"
     ],
     "a": [
      "Joshua Octaviano",
      "Kevin Sun"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Julius Degen",
      "Snehit Achanta"
     ],
     "a": [
      "Daniel Gallegos",
      "Anthony Bonaventura"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Brian O'Neill",
      "Michael Ksiezopolski"
     ],
     "a": [
      "Christopher Natividad",
      "Josiah Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Ivan Rios",
      "Abhishekh Mehra"
     ],
     "a": [
      "Kevin Sun",
      "Joshua Octaviano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jacob Rosengarten",
      "Jonathan Ksiezopolski"
     ],
     "a": [
      "Stanley Bonczek",
      "Marr Flores"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 5,
   "home": "Bounce Tempest",
   "away": "ACE Moorestown",
   "time": "2026-09-21T19:30:00",
   "complete": true,
   "homePoints": 643,
   "awayPoints": 573,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Zachary Lessner",
      "Justin Bautista"
     ],
     "a": [
      "Jack Blumberg",
      "Bryan Nardone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Adriene Khon",
      "Josh Knupp"
     ],
     "a": [
      "Marc Harden",
      "Tyler Marlin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Hiep Pham",
      "Justin Chin"
     ],
     "a": [
      "Matthew Mintz",
      "Riguo Zheng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Alex Mihalca",
      "David Brandolph"
     ],
     "a": [
      "Vineeth Mathew",
      "Nachiket Vaidya"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "David Brandolph",
      "Justin Chin"
     ],
     "a": [
      "Riguo Zheng",
      "Nachiket Vaidya"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Justin Bautista",
      "Josh Knupp"
     ],
     "a": [
      "Jack Blumberg",
      "Marc Harden"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Hiep Pham",
      "Alex Mihalca"
     ],
     "a": [
      "Matthew Mintz",
      "Josh Sherlock"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Zachary Lessner",
      "Ashwin Korde"
     ],
     "a": [
      "Bryan Nardone",
      "Daniel Ehala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Zachary Lessner",
      "Alex Mihalca"
     ],
     "a": [
      "Marc Harden",
      "Jack Blumberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Josh Knupp",
      "Ashwin Korde"
     ],
     "a": [
      "Tyler Marlin",
      "Shayne Clowar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Zyril Carilo",
      "Justin Bautista"
     ],
     "a": [
      "Vineeth Mathew",
      "Josh Sherlock"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Adriene Khon",
      "David Brandolph"
     ],
     "a": [
      "Matthew Mintz",
      "Nachiket Vaidya"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Adriene Khon",
      "Justin Chin"
     ],
     "a": [
      "Jack Blumberg",
      "Josh Sherlock"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Alex Mihalca",
      "Ashwin Korde"
     ],
     "a": [
      "Bryan Nardone",
      "Tyler Marlin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "David Brandolph",
      "Hiep Pham"
     ],
     "a": [
      "Riguo Zheng",
      "Vineeth Mathew"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Justin Bautista",
      "Zyril Carilo"
     ],
     "a": [
      "Matthew Mintz",
      "Daniel Ehala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Zachary Lessner",
      "Zyril Carilo"
     ],
     "a": [
      "Shayne Clowar",
      "Marc Harden"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "David Brandolph",
      "Justin Chin"
     ],
     "a": [
      "Nachiket Vaidya",
      "Josh Sherlock"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Hiep Pham",
      "Josh Knupp"
     ],
     "a": [
      "Riguo Zheng",
      "Bryan Nardone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Adriene Khon",
      "Alex Mihalca"
     ],
     "a": [
      "Tyler Marlin",
      "Daniel Ehala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ashwin Korde",
      "Alex Mihalca"
     ],
     "a": [
      "Nachiket Vaidya",
      "Daniel Ehala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Adriene Khon",
      "Hiep Pham"
     ],
     "a": [
      "Matthew Mintz",
      "Vineeth Mathew"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Zachary Lessner",
      "Justin Bautista"
     ],
     "a": [
      "Jack Blumberg",
      "Tyler Marlin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Zyril Carilo",
      "Josh Knupp"
     ],
     "a": [
      "Shayne Clowar",
      "Bryan Nardone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "David Brandolph",
      "Adriene Khon"
     ],
     "a": [
      "Vineeth Mathew",
      "Daniel Ehala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Zyril Carilo",
      "Hiep Pham"
     ],
     "a": [
      "Shayne Clowar",
      "Riguo Zheng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Zachary Lessner",
      "Ashwin Korde"
     ],
     "a": [
      "Josh Sherlock",
      "Bryan Nardone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Justin Bautista",
      "Justin Chin"
     ],
     "a": [
      "Jack Blumberg",
      "Matthew Mintz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Zachary Lessner",
      "Zyril Carilo"
     ],
     "a": [
      "Riguo Zheng",
      "Vineeth Mathew"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Justin Bautista",
      "Hiep Pham"
     ],
     "a": [
      "Jack Blumberg",
      "Nachiket Vaidya"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Josh Knupp",
      "Ashwin Korde"
     ],
     "a": [
      "Shayne Clowar",
      "Tyler Marlin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Adriene Khon",
      "Justin Chin"
     ],
     "a": [
      "Daniel Ehala",
      "Bryan Nardone"
     ]
    }
   ],
   "subs": [
    "Jack Blumberg"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "Pickle House",
   "away": "Picklr Newtown",
   "time": "2026-09-21T19:30:00",
   "complete": true,
   "homePoints": 628,
   "awayPoints": 612,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Ali Husain",
      "Zach Hollmann"
     ],
     "a": [
      "Zach Mcgowan",
      "William Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Michael Li",
      "Al Mancini"
     ],
     "a": [
      "Ron Branca",
      "Joshua Mindlin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Mickey Cook",
      "Chris Damato"
     ],
     "a": [
      "Jaco De Waal",
      "Christian Lupica"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Matthew Eldridge",
      "Gopi Narayanan"
     ],
     "a": [
      "Tim Cahalin",
      "Alex Pecora"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Michael Li",
      "Gopi Narayanan"
     ],
     "a": [
      "Christian Lupica",
      "Zach Mcgowan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Mickey Cook",
      "Craig Frame"
     ],
     "a": [
      "Ron Branca",
      "William Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Rich Marcovecchio",
      "Zach Hollmann"
     ],
     "a": [
      "Joshua Mindlin",
      "Joseph Yi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Chris Damato",
      "Ali Husain"
     ],
     "a": [
      "Thomas Fenton",
      "Alex Pecora"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Chris Damato",
      "Matthew Eldridge"
     ],
     "a": [
      "William Lee",
      "Tim Cahalin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Rich Marcovecchio",
      "Al Mancini"
     ],
     "a": [
      "Joshua Mindlin",
      "Jaco De Waal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Michael Li",
      "Ali Husain"
     ],
     "a": [
      "Zach Mcgowan",
      "Alex Pecora"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Zach Hollmann",
      "Gopi Narayanan"
     ],
     "a": [
      "Ron Branca",
      "Thomas Fenton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Michael Li",
      "Rich Marcovecchio"
     ],
     "a": [
      "Joseph Yi",
      "Tim Cahalin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Zach Hollmann",
      "Mickey Cook"
     ],
     "a": [
      "Zach Mcgowan",
      "Thomas Fenton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Al Mancini",
      "Matthew Eldridge"
     ],
     "a": [
      "William Lee",
      "Alex Pecora"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Craig Frame",
      "Ali Husain"
     ],
     "a": [
      "Joshua Mindlin",
      "Christian Lupica"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Matthew Eldridge",
      "Mickey Cook"
     ],
     "a": [
      "Ron Branca",
      "Zach Mcgowan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Ali Husain",
      "Al Mancini"
     ],
     "a": [
      "Thomas Fenton",
      "William Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Chris Damato",
      "Gopi Narayanan"
     ],
     "a": [
      "Joshua Mindlin",
      "Alex Pecora"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Craig Frame",
      "Michael Li"
     ],
     "a": [
      "Jaco De Waal",
      "Christian Lupica"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Zach Hollmann",
      "Chris Damato"
     ],
     "a": [
      "Christian Lupica",
      "Alex Pecora"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Matthew Eldridge",
      "Craig Frame"
     ],
     "a": [
      "Tim Cahalin",
      "William Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Gopi Narayanan",
      "Al Mancini"
     ],
     "a": [
      "Jaco De Waal",
      "Joseph Yi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Ali Husain",
      "Rich Marcovecchio"
     ],
     "a": [
      "Ron Branca",
      "Thomas Fenton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Craig Frame",
      "Mickey Cook"
     ],
     "a": [
      "Joshua Mindlin",
      "Tim Cahalin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Chris Damato",
      "Rich Marcovecchio"
     ],
     "a": [
      "Christian Lupica",
      "Joseph Yi"
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
      "Zach Mcgowan",
      "Thomas Fenton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Ali Husain",
      "Al Mancini"
     ],
     "a": [
      "Ron Branca",
      "William Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Zach Hollmann",
      "Ali Husain"
     ],
     "a": [
      "Alex Pecora",
      "Ron Branca"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Mickey Cook",
      "Rich Marcovecchio"
     ],
     "a": [
      "Thomas Fenton",
      "Tim Cahalin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Michael Li",
      "Chris Damato"
     ],
     "a": [
      "Zach Mcgowan",
      "Joshua Mindlin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Gopi Narayanan",
      "Matthew Eldridge"
     ],
     "a": [
      "Joseph Yi",
      "Jaco De Waal"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 5,
   "home": "Flemington",
   "away": "Premiere",
   "time": "2026-09-26T09:00:00",
   "complete": true,
   "homePoints": 553,
   "awayPoints": 573,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Robbie Oddy",
      "Andy Ead"
     ],
     "a": [
      "Gary White",
      "Jacob Yandoli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Frank Clark",
      "Jay Alquiros"
     ],
     "a": [
      "Rob Pandolfi",
      "Neil Ottrando"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Peter Nagy",
      "Andrew Nguyen"
     ],
     "a": [
      "Matthew Friedman",
      "Michael Rapaglia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Geoff Watson",
      "Austin Williams"
     ],
     "a": [
      "Nicholas Yandoli",
      "Joseph Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Omar Husain",
      "Austin Williams"
     ],
     "a": [
      "Gary White",
      "Jacob Yandoli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Robbie Oddy",
      "Andy Ead"
     ],
     "a": [
      "Rob Pandolfi",
      "Neil Ottrando"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Frank Clark",
      "Jay Alquiros"
     ],
     "a": [
      "Matthew Friedman",
      "Michael Rapaglia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Peter Nagy",
      "Andrew Nguyen"
     ],
     "a": [
      "Joseph Lynskey",
      "Nicholas Yandoli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Geoff Watson",
      "Andrew Nguyen"
     ],
     "a": [
      "Jacob Yandoli",
      "Nicholas Yandoli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Robbie Oddy",
      "Omar Husain"
     ],
     "a": [
      "Rob Pandolfi",
      "Matthew Friedman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Austin Williams",
      "Andy Ead"
     ],
     "a": [
      "Gary White",
      "Michael Rapaglia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 4,
     "as": 21,
     "h": [
      "Frank Clark",
      "Peter Nagy"
     ],
     "a": [
      "Neil Ottrando",
      "Joseph Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Frank Clark",
      "Peter Nagy"
     ],
     "a": [
      "Jacob Yandoli",
      "Nicholas Yandoli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Omar Husain",
      "Geoff Watson"
     ],
     "a": [
      "Rob Pandolfi",
      "Matthew Friedman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Robbie Oddy",
      "Jay Alquiros"
     ],
     "a": [
      "Gary White",
      "Michael Rapaglia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Austin Williams",
      "Andy Ead"
     ],
     "a": [
      "Neil Ottrando",
      "Joseph Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Andrew Nguyen",
      "Omar Husain"
     ],
     "a": [
      "Jacob Yandoli",
      "Matthew Friedman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Robbie Oddy",
      "Austin Williams"
     ],
     "a": [
      "Rob Pandolfi",
      "Joseph Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Andy Ead",
      "Peter Nagy"
     ],
     "a": [
      "Gary White",
      "Neil Ottrando"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jay Alquiros",
      "Geoff Watson"
     ],
     "a": [
      "Michael Rapaglia",
      "Nicholas Yandoli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jay Alquiros",
      "Geoff Watson"
     ],
     "a": [
      "Rob Pandolfi",
      "Joseph Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Peter Nagy",
      "Omar Husain"
     ],
     "a": [
      "Gary White",
      "Neil Ottrando"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Robbie Oddy",
      "Austin Williams"
     ],
     "a": [
      "Michael Rapaglia",
      "Nicholas Yandoli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Frank Clark",
      "Andrew Nguyen"
     ],
     "a": [
      "Jacob Yandoli",
      "Matthew Friedman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Andrew Nguyen",
      "Andy Ead"
     ],
     "a": [
      "Gary White",
      "Rob Pandolfi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Robbie Oddy",
      "Geoff Watson"
     ],
     "a": [
      "Jacob Yandoli",
      "Michael Rapaglia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Frank Clark",
      "Austin Williams"
     ],
     "a": [
      "Nicholas Yandoli",
      "Neil Ottrando"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jay Alquiros",
      "Omar Husain"
     ],
     "a": [
      "Matthew Friedman",
      "Joseph Lynskey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jay Alquiros",
      "Peter Nagy"
     ],
     "a": [
      "Gary White",
      "Rob Pandolfi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Andy Ead",
      "Andrew Nguyen"
     ],
     "a": [
      "Jacob Yandoli",
      "Michael Rapaglia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Omar Husain",
      "Geoff Watson"
     ],
     "a": [
      "Joseph Lynskey",
      "Matthew Friedman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Robbie Oddy",
      "Austin Williams"
     ],
     "a": [
      "Neil Ottrando",
      "Nicholas Yandoli"
     ]
    }
   ],
   "subs": [
    "Geoff Watson",
    "Andrew Nguyen",
    "Omar Husain",
    "Peter Nagy"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "Pickleball Kingdom Watchung",
   "away": "Dill Dinkers Freehold",
   "time": "2026-09-26T12:00:00",
   "complete": true,
   "homePoints": 638,
   "awayPoints": 618,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Eric Jiang",
      "Daniel Gallegos"
     ],
     "a": [
      "Adam Weinstock",
      "Obege Janvier"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Anthony Bonaventura",
      "Stanley Bonczek"
     ],
     "a": [
      "Caesar Gene",
      "Nicholas Lagrua"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kevin Sun",
      "Ken Velarde"
     ],
     "a": [
      "Michael Swell",
      "Eugene Zaslavsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Gautham Bondugula",
      "Matthew Korsak"
     ],
     "a": [
      "Marcin Glowacki",
      "Turney Hall"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Eric Jiang",
      "Daniel Gallegos"
     ],
     "a": [
      "Nicholas Lagrua",
      "Eugene Zaslavsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Stanley Bonczek",
      "Anthony Bonaventura"
     ],
     "a": [
      "Caesar Gene",
      "Marcin Glowacki"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Gautham Bondugula",
      "Matthew Korsak"
     ],
     "a": [
      "Adam Weinstock",
      "Turney Hall"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kevin Sun",
      "Ken Velarde"
     ],
     "a": [
      "Michael Swell",
      "Obege Janvier"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Drew Youssef",
      "Matthew Korsak"
     ],
     "a": [
      "Eugene Zaslavsky",
      "Turney Hall"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Daniel Gallegos",
      "Gautham Bondugula"
     ],
     "a": [
      "Adam Weinstock",
      "Marcin Glowacki"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Stanley Bonczek",
      "Ken Velarde"
     ],
     "a": [
      "Obege Janvier",
      "Nicholas Lagrua"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Anthony Bonaventura",
      "Eric Jiang"
     ],
     "a": [
      "Michael Swell",
      "Caesar Gene"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Stanley Bonczek",
      "Kevin Sun"
     ],
     "a": [
      "Caesar Gene",
      "Obege Janvier"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Daniel Gallegos",
      "Gautham Bondugula"
     ],
     "a": [
      "Michael Swell",
      "Turney Hall"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Anthony Bonaventura",
      "Eric Jiang"
     ],
     "a": [
      "Nicholas Lagrua",
      "Marcin Glowacki"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Matthew Korsak",
      "Drew Youssef"
     ],
     "a": [
      "Eugene Zaslavsky",
      "Adam Weinstock"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Matthew Korsak",
      "Eric Jiang"
     ],
     "a": [
      "Marcin Glowacki",
      "Eugene Zaslavsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Anthony Bonaventura",
      "Ken Velarde"
     ],
     "a": [
      "Adam Weinstock",
      "Caesar Gene"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Daniel Gallegos",
      "Kevin Sun"
     ],
     "a": [
      "Nicholas Lagrua",
      "Turney Hall"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Stanley Bonczek",
      "Drew Youssef"
     ],
     "a": [
      "Obege Janvier",
      "Michael Swell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Stanley Bonczek",
      "Gautham Bondugula"
     ],
     "a": [
      "Obege Janvier",
      "Adam Weinstock"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Daniel Gallegos",
      "Drew Youssef"
     ],
     "a": [
      "Eugene Zaslavsky",
      "Michael Swell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Anthony Bonaventura",
      "Ken Velarde"
     ],
     "a": [
      "Caesar Gene",
      "Turney Hall"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Eric Jiang",
      "Matthew Korsak"
     ],
     "a": [
      "Nicholas Lagrua",
      "Marcin Glowacki"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Stanley Bonczek",
      "Gautham Bondugula"
     ],
     "a": [
      "Caesar Gene",
      "Obege Janvier"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kevin Sun",
      "Drew Youssef"
     ],
     "a": [
      "Adam Weinstock",
      "Turney Hall"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Anthony Bonaventura",
      "Daniel Gallegos"
     ],
     "a": [
      "Michael Swell",
      "Marcin Glowacki"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ken Velarde",
      "Matthew Korsak"
     ],
     "a": [
      "Eugene Zaslavsky",
      "Nicholas Lagrua"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Stanley Bonczek",
      "Drew Youssef"
     ],
     "a": [
      "Michael Swell",
      "Marcin Glowacki"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Gautham Bondugula",
      "Eric Jiang"
     ],
     "a": [
      "Obege Janvier",
      "Nicholas Lagrua"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Daniel Gallegos",
      "Anthony Bonaventura"
     ],
     "a": [
      "Turney Hall",
      "Caesar Gene"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Matthew Korsak",
      "Ken Velarde"
     ],
     "a": [
      "Eugene Zaslavsky",
      "Adam Weinstock"
     ]
    }
   ],
   "subs": [
    "Obege Janvier",
    "Michael Swell",
    "Turney Hall",
    "Matthew Korsak"
   ]
  },
  {
   "result": "away",
   "week": 5,
   "home": "Bounce Tempest",
   "away": "Picklr Newtown",
   "time": "2026-09-26T15:00:00",
   "complete": true,
   "homePoints": 565,
   "awayPoints": 651,
   "homeGW": 10,
   "awayGW": 22,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "David Brandolph",
      "Doug Horton"
     ],
     "a": [
      "Joshua Mindlin",
      "Christian Lupica"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Adriene Khon",
      "Alain Hwang"
     ],
     "a": [
      "Clayton Schmucker",
      "Ethan Henigan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Zachary Lessner",
      "Ashwin Korde"
     ],
     "a": [
      "Zach Mcgowan",
      "Jaco De Waal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Brandyn Schuchart",
      "Josh Knupp"
     ],
     "a": [
      "William Lee",
      "Tim Cahalin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Brandyn Schuchart",
      "Ashwin Korde"
     ],
     "a": [
      "Joshua Mindlin",
      "Zach Mcgowan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Zachary Lessner",
      "Alex Boory"
     ],
     "a": [
      "William Lee",
      "Clayton Schmucker"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Josh Knupp",
      "Alain Hwang"
     ],
     "a": [
      "Tim Cahalin",
      "Ethan Henigan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Hiep Pham",
      "David Brandolph"
     ],
     "a": [
      "Christian Lupica",
      "Jaco De Waal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Brandyn Schuchart",
      "Hiep Pham"
     ],
     "a": [
      "Joshua Mindlin",
      "Ethan Henigan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Zachary Lessner",
      "Alex Boory"
     ],
     "a": [
      "Zach Mcgowan",
      "Clayton Schmucker"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Adriene Khon",
      "Doug Horton"
     ],
     "a": [
      "Christian Lupica",
      "Jaco De Waal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "David Brandolph",
      "Alain Hwang"
     ],
     "a": [
      "William Lee",
      "Tim Cahalin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Brandyn Schuchart",
      "Alain Hwang"
     ],
     "a": [
      "Christian Lupica",
      "Zach Mcgowan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Josh Knupp",
      "Adriene Khon"
     ],
     "a": [
      "Clayton Schmucker",
      "William Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "David Brandolph",
      "Doug Horton"
     ],
     "a": [
      "Jaco De Waal",
      "Joshua Mindlin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Zachary Lessner",
      "Ashwin Korde"
     ],
     "a": [
      "Ethan Henigan",
      "Tim Cahalin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Josh Knupp",
      "Hiep Pham"
     ],
     "a": [
      "Christian Lupica",
      "William Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Zachary Lessner",
      "Adriene Khon"
     ],
     "a": [
      "Tim Cahalin",
      "Clayton Schmucker"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Alex Boory",
      "Ashwin Korde"
     ],
     "a": [
      "Joshua Mindlin",
      "Zach Mcgowan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Doug Horton",
      "Alain Hwang"
     ],
     "a": [
      "Jaco De Waal",
      "Ethan Henigan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Brandyn Schuchart",
      "Zachary Lessner"
     ],
     "a": [
      "William Lee",
      "Zach Mcgowan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Josh Knupp",
      "Alex Boory"
     ],
     "a": [
      "Clayton Schmucker",
      "Christian Lupica"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Hiep Pham",
      "Doug Horton"
     ],
     "a": [
      "Ethan Henigan",
      "Tim Cahalin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "David Brandolph",
      "Ashwin Korde"
     ],
     "a": [
      "Jaco De Waal",
      "Joshua Mindlin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Adriene Khon",
      "Alain Hwang"
     ],
     "a": [
      "Joshua Mindlin",
      "Christian Lupica"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Brandyn Schuchart",
      "Josh Knupp"
     ],
     "a": [
      "Tim Cahalin",
      "Ethan Henigan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Doug Horton",
      "Hiep Pham"
     ],
     "a": [
      "Clayton Schmucker",
      "William Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "David Brandolph",
      "Alex Boory"
     ],
     "a": [
      "Jaco De Waal",
      "Zach Mcgowan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Alex Boory",
      "Ashwin Korde"
     ],
     "a": [
      "Zach Mcgowan",
      "Christian Lupica"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Zachary Lessner",
      "Brandyn Schuchart"
     ],
     "a": [
      "Clayton Schmucker",
      "Ethan Henigan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Adriene Khon",
      "Hiep Pham"
     ],
     "a": [
      "William Lee",
      "Jaco De Waal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Josh Knupp",
      "Alain Hwang"
     ],
     "a": [
      "Joshua Mindlin",
      "Tim Cahalin"
     ]
    }
   ],
   "subs": [
    "Clayton Schmucker",
    "Ethan Henigan",
    "Alain Hwang",
    "Doug Horton"
   ]
  },
  {
   "result": "away",
   "week": 5,
   "home": "Jersey Devil",
   "away": "Pickle House",
   "time": "2026-09-26T15:00:00",
   "complete": true,
   "homePoints": 561,
   "awayPoints": 642,
   "homeGW": 9,
   "awayGW": 23,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Vince Abate",
      "Vaughn Mcclelland"
     ],
     "a": [
      "Chris Damato",
      "Ali Husain"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Dean Tridente",
      "Stephen Conger"
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
     "as": 19,
     "h": [
      "Braden Keith",
      "Daniel Schwab"
     ],
     "a": [
      "Al Mancini",
      "Patrick Ryan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Tyler Arsenault",
      "Sheel Motiwala"
     ],
     "a": [
      "Dipen Bhatt",
      "Tarkan Akas"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Vince Abate",
      "Vaughn Mcclelland"
     ],
     "a": [
      "Zach Hollmann",
      "Ali Husain"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Stephen Conger",
      "Dean Tridente"
     ],
     "a": [
      "Mickey Cook",
      "Shang Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Tyler Arsenault",
      "Sheel Motiwala"
     ],
     "a": [
      "Chris Damato",
      "Patrick Ryan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Braden Keith",
      "Michael Taylor"
     ],
     "a": [
      "Al Mancini",
      "Dipen Bhatt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Braden Keith",
      "Michael Taylor"
     ],
     "a": [
      "Tarkan Akas",
      "Dipen Bhatt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Tyler Arsenault",
      "Vince Abate"
     ],
     "a": [
      "Zach Hollmann",
      "Patrick Ryan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Vaughn Mcclelland",
      "Stephen Conger"
     ],
     "a": [
      "Chris Damato",
      "Al Mancini"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Daniel Schwab",
      "Dean Tridente"
     ],
     "a": [
      "Shang Li",
      "Ali Husain"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Dean Tridente",
      "Vince Abate"
     ],
     "a": [
      "Ali Husain",
      "Patrick Ryan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Sheel Motiwala",
      "Vaughn Mcclelland"
     ],
     "a": [
      "Dipen Bhatt",
      "Zach Hollmann"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Daniel Schwab",
      "Michael Taylor"
     ],
     "a": [
      "Tarkan Akas",
      "Shang Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Braden Keith",
      "Stephen Conger"
     ],
     "a": [
      "Mickey Cook",
      "Al Mancini"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Tyler Arsenault",
      "Dean Tridente"
     ],
     "a": [
      "Ali Husain",
      "Al Mancini"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Vince Abate",
      "Michael Taylor"
     ],
     "a": [
      "Shang Li",
      "Chris Damato"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Daniel Schwab",
      "Braden Keith"
     ],
     "a": [
      "Zach Hollmann",
      "Tarkan Akas"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Vaughn Mcclelland",
      "Sheel Motiwala"
     ],
     "a": [
      "Mickey Cook",
      "Dipen Bhatt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Vaughn Mcclelland",
      "Daniel Schwab"
     ],
     "a": [
      "Mickey Cook",
      "Ali Husain"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Dean Tridente",
      "Vince Abate"
     ],
     "a": [
      "Tarkan Akas",
      "Patrick Ryan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Tyler Arsenault",
      "Stephen Conger"
     ],
     "a": [
      "Chris Damato",
      "Zach Hollmann"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Michael Taylor",
      "Sheel Motiwala"
     ],
     "a": [
      "Al Mancini",
      "Shang Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Tyler Arsenault",
      "Vince Abate"
     ],
     "a": [
      "Ali Husain",
      "Zach Hollmann"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Michael Taylor",
      "Sheel Motiwala"
     ],
     "a": [
      "Chris Damato",
      "Tarkan Akas"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Braden Keith",
      "Vaughn Mcclelland"
     ],
     "a": [
      "Mickey Cook",
      "Shang Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Daniel Schwab",
      "Stephen Conger"
     ],
     "a": [
      "Dipen Bhatt",
      "Patrick Ryan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Tyler Arsenault",
      "Stephen Conger"
     ],
     "a": [
      "Patrick Ryan",
      "Chris Damato"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Dean Tridente",
      "Sheel Motiwala"
     ],
     "a": [
      "Al Mancini",
      "Zach Hollmann"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Vaughn Mcclelland",
      "Braden Keith"
     ],
     "a": [
      "Ali Husain",
      "Dipen Bhatt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Michael Taylor",
      "Daniel Schwab"
     ],
     "a": [
      "Mickey Cook",
      "Tarkan Akas"
     ]
    }
   ],
   "subs": [
    "Dean Tridente",
    "Michael Taylor",
    "Patrick Ryan",
    "Shang Li"
   ]
  },
  {
   "result": "home",
   "week": 6,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Flemington",
   "time": "2026-09-28T19:00:00",
   "complete": true,
   "homePoints": 641,
   "awayPoints": 573,
   "homeGW": 21,
   "awayGW": 11,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Camrin Cronheim",
      "Jason Makarevic"
     ],
     "a": [
      "Robbie Oddy",
      "Hany Ibrahim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Thomas Connolly",
      "Austin Williams"
     ],
     "a": [
      "Tim Dowd",
      "David Osborne"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Neel Goyal",
      "Jake Laifer"
     ],
     "a": [
      "Sean O'Connell",
      "Hans Tang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Elliott Albanese",
      "Ian Chin"
     ],
     "a": [
      "Anthony Fallet",
      "Frank Clark"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Thomas Connolly",
      "Austin Williams"
     ],
     "a": [
      "Robbie Oddy",
      "Hans Tang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Camrin Cronheim",
      "Jason Makarevic"
     ],
     "a": [
      "Tim Dowd",
      "David Osborne"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Neel Goyal",
      "Jake Laifer"
     ],
     "a": [
      "Sean O'Connell",
      "Hany Ibrahim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Ian Chin",
      "Elliott Albanese"
     ],
     "a": [
      "Anthony Fallet",
      "Frank Clark"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Camrin Cronheim",
      "Neel Goyal"
     ],
     "a": [
      "Robbie Oddy",
      "Sean O'Connell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Thomas Connolly",
      "Ian Chin"
     ],
     "a": [
      "Frank Clark",
      "Tim Dowd"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jason Makarevic",
      "Jake Laifer"
     ],
     "a": [
      "Hans Tang",
      "Hany Ibrahim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Austin Williams",
      "Elliott Albanese"
     ],
     "a": [
      "Anthony Fallet",
      "David Osborne"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Camrin Cronheim",
      "Neel Goyal"
     ],
     "a": [
      "Robbie Oddy",
      "Sean O'Connell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Elliott Albanese",
      "Austin Williams"
     ],
     "a": [
      "David Osborne",
      "Tim Dowd"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jason Makarevic",
      "Jake Laifer"
     ],
     "a": [
      "Hans Tang",
      "Frank Clark"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Thomas Connolly",
      "Ian Chin"
     ],
     "a": [
      "Anthony Fallet",
      "Hany Ibrahim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jason Makarevic",
      "Austin Williams"
     ],
     "a": [
      "Robbie Oddy",
      "David Osborne"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Camrin Cronheim",
      "Thomas Connolly"
     ],
     "a": [
      "Tim Dowd",
      "Anthony Fallet"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Neel Goyal",
      "Ian Chin"
     ],
     "a": [
      "Sean O'Connell",
      "Hany Ibrahim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Elliott Albanese",
      "Jake Laifer"
     ],
     "a": [
      "Frank Clark",
      "Hans Tang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jason Makarevic",
      "Austin Williams"
     ],
     "a": [
      "Robbie Oddy",
      "Sean O'Connell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Neel Goyal",
      "Ian Chin"
     ],
     "a": [
      "Tim Dowd",
      "Anthony Fallet"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Camrin Cronheim",
      "Thomas Connolly"
     ],
     "a": [
      "David Osborne",
      "Hans Tang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Elliott Albanese",
      "Jake Laifer"
     ],
     "a": [
      "Hany Ibrahim",
      "Frank Clark"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Austin Williams",
      "Camrin Cronheim"
     ],
     "a": [
      "Robbie Oddy",
      "Tim Dowd"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Ian Chin",
      "Jake Laifer"
     ],
     "a": [
      "Anthony Fallet",
      "Hans Tang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Thomas Connolly",
      "Elliott Albanese"
     ],
     "a": [
      "Hany Ibrahim",
      "David Osborne"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jason Makarevic",
      "Neel Goyal"
     ],
     "a": [
      "Sean O'Connell",
      "Frank Clark"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Jason Makarevic",
      "Neel Goyal"
     ],
     "a": [
      "Tim Dowd",
      "Frank Clark"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Elliott Albanese",
      "Thomas Connolly"
     ],
     "a": [
      "Anthony Fallet",
      "Sean O'Connell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Ian Chin",
      "Jake Laifer"
     ],
     "a": [
      "Hany Ibrahim",
      "Robbie Oddy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Austin Williams",
      "Camrin Cronheim"
     ],
     "a": [
      "David Osborne",
      "Hans Tang"
     ]
    }
   ],
   "subs": [
    "David Osborne",
    "Austin Williams"
   ]
  },
  {
   "result": "away",
   "week": 6,
   "home": "Premiere",
   "away": "Pickleball Kingdom Watchung",
   "time": "2026-09-28T19:00:00",
   "complete": true,
   "homePoints": 617,
   "awayPoints": 639,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Boris Tserlin",
      "Gary White"
     ],
     "a": [
      "Stanley Bonczek",
      "Drew Youssef"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jacob Yandoli",
      "Nicholas Yandoli"
     ],
     "a": [
      "Eric Jiang",
      "Daniel Gallegos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Rob Pandolfi",
      "Neil Ottrando"
     ],
     "a": [
      "Kevin Sun",
      "Josiah Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Matthew Friedman",
      "Michael Rapaglia"
     ],
     "a": [
      "Anthony Bonaventura",
      "Marr Flores"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Boris Tserlin",
      "Gary White"
     ],
     "a": [
      "Daniel Gallegos",
      "Eric Jiang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Neil Ottrando",
      "Rob Pandolfi"
     ],
     "a": [
      "Stanley Bonczek",
      "Drew Youssef"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Nicholas Yandoli",
      "Jacob Yandoli"
     ],
     "a": [
      "Anthony Bonaventura",
      "Marr Flores"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Matthew Friedman",
      "Michael Rapaglia"
     ],
     "a": [
      "Kevin Sun",
      "Josiah Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Boris Tserlin",
      "Nicholas Yandoli"
     ],
     "a": [
      "Stanley Bonczek",
      "Anthony Bonaventura"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Gary White",
      "Jacob Yandoli"
     ],
     "a": [
      "Daniel Gallegos",
      "Drew Youssef"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Rob Pandolfi",
      "Michael Rapaglia"
     ],
     "a": [
      "Eric Jiang",
      "Josiah Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Neil Ottrando",
      "Matthew Friedman"
     ],
     "a": [
      "Kevin Sun",
      "Marr Flores"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jacob Yandoli",
      "Gary White"
     ],
     "a": [
      "Daniel Gallegos",
      "Drew Youssef"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Nicholas Yandoli",
      "Boris Tserlin"
     ],
     "a": [
      "Anthony Bonaventura",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Neil Ottrando",
      "Matthew Friedman"
     ],
     "a": [
      "Kevin Sun",
      "Marr Flores"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Rob Pandolfi",
      "Michael Rapaglia"
     ],
     "a": [
      "Josiah Kim",
      "Eric Jiang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Rob Pandolfi",
      "Matthew Friedman"
     ],
     "a": [
      "Daniel Gallegos",
      "Marr Flores"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Nicholas Yandoli",
      "Neil Ottrando"
     ],
     "a": [
      "Eric Jiang",
      "Anthony Bonaventura"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Gary White",
      "Michael Rapaglia"
     ],
     "a": [
      "Drew Youssef",
      "Josiah Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jacob Yandoli",
      "Boris Tserlin"
     ],
     "a": [
      "Kevin Sun",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Neil Ottrando",
      "Nicholas Yandoli"
     ],
     "a": [
      "Eric Jiang",
      "Anthony Bonaventura"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Gary White",
      "Michael Rapaglia"
     ],
     "a": [
      "Drew Youssef",
      "Josiah Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Rob Pandolfi",
      "Matthew Friedman"
     ],
     "a": [
      "Daniel Gallegos",
      "Marr Flores"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Boris Tserlin",
      "Jacob Yandoli"
     ],
     "a": [
      "Stanley Bonczek",
      "Kevin Sun"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Rob Pandolfi",
      "Boris Tserlin"
     ],
     "a": [
      "Josiah Kim",
      "Stanley Bonczek"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jacob Yandoli",
      "Matthew Friedman"
     ],
     "a": [
      "Daniel Gallegos",
      "Anthony Bonaventura"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 28,
     "h": [
      "Gary White",
      "Neil Ottrando"
     ],
     "a": [
      "Drew Youssef",
      "Kevin Sun"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Michael Rapaglia",
      "Nicholas Yandoli"
     ],
     "a": [
      "Marr Flores",
      "Eric Jiang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Neil Ottrando",
      "Gary White"
     ],
     "a": [
      "Marr Flores",
      "Eric Jiang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Nicholas Yandoli",
      "Michael Rapaglia"
     ],
     "a": [
      "Kevin Sun",
      "Drew Youssef"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 29,
     "as": 27,
     "h": [
      "Jacob Yandoli",
      "Matthew Friedman"
     ],
     "a": [
      "Daniel Gallegos",
      "Anthony Bonaventura"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Rob Pandolfi",
      "Boris Tserlin"
     ],
     "a": [
      "Josiah Kim",
      "Stanley Bonczek"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 6,
   "home": "Jersey Pickleball Club",
   "away": "Dill Dinkers Freehold",
   "time": "2026-09-28T19:30:00",
   "complete": true,
   "homePoints": 578,
   "awayPoints": 599,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kevin Wysoczynski",
      "Sebastian Ferrer"
     ],
     "a": [
      "Yoon Choi",
      "Harrison Mui"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Zach Hizer",
      "Zachary Puccia"
     ],
     "a": [
      "Chenfei Gao",
      "Samuel Levinson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Gary Sidhu",
      "Anthony Bradford Bisignano"
     ],
     "a": [
      "Tom Laiso",
      "Adam Weinstock"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Matt Schall",
      "Simon Rosenwasser"
     ],
     "a": [
      "Eugene Zaslavsky",
      "Nicholas Lagrua"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Zach Hizer",
      "Zachary Puccia"
     ],
     "a": [
      "Yoon Choi",
      "Nicholas Lagrua"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Kevin Wysoczynski",
      "Gary Sidhu"
     ],
     "a": [
      "Caesar Gene",
      "Harrison Mui"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Anthony Bradford Bisignano",
      "Matt Schall"
     ],
     "a": [
      "Adam Weinstock",
      "Marcin Glowacki"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Simon Rosenwasser",
      "Sebastian Ferrer"
     ],
     "a": [
      "Eugene Zaslavsky",
      "Samuel Levinson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Zachary Puccia",
      "Anthony Bradford Bisignano"
     ],
     "a": [
      "Yoon Choi",
      "Samuel Levinson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sebastian Ferrer",
      "Gary Sidhu"
     ],
     "a": [
      "Chenfei Gao",
      "Adam Weinstock"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Zach Hizer",
      "Matt Schall"
     ],
     "a": [
      "Tom Laiso",
      "Nicholas Lagrua"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kevin Wysoczynski",
      "Simon Rosenwasser"
     ],
     "a": [
      "Marcin Glowacki",
      "Caesar Gene"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Matt Schall",
      "Zach Hizer"
     ],
     "a": [
      "Eugene Zaslavsky",
      "Harrison Mui"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Simon Rosenwasser",
      "Kevin Wysoczynski"
     ],
     "a": [
      "Marcin Glowacki",
      "Samuel Levinson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Gary Sidhu",
      "Sebastian Ferrer"
     ],
     "a": [
      "Nicholas Lagrua",
      "Caesar Gene"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Anthony Bradford Bisignano",
      "Zachary Puccia"
     ],
     "a": [
      "Tom Laiso",
      "Chenfei Gao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Anthony Bradford Bisignano",
      "Simon Rosenwasser"
     ],
     "a": [
      "Yoon Choi",
      "Caesar Gene"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Zachary Puccia",
      "Kevin Wysoczynski"
     ],
     "a": [
      "Harrison Mui",
      "Adam Weinstock"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Gary Sidhu",
      "Matt Schall"
     ],
     "a": [
      "Tom Laiso",
      "Chenfei Gao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sebastian Ferrer",
      "Zach Hizer"
     ],
     "a": [
      "Eugene Zaslavsky",
      "Marcin Glowacki"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Zach Hizer",
      "Sebastian Ferrer"
     ],
     "a": [
      "Yoon Choi",
      "Eugene Zaslavsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Anthony Bradford Bisignano",
      "Simon Rosenwasser"
     ],
     "a": [
      "Harrison Mui",
      "Samuel Levinson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Gary Sidhu",
      "Matt Schall"
     ],
     "a": [
      "Nicholas Lagrua",
      "Tom Laiso"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Kevin Wysoczynski",
      "Zachary Puccia"
     ],
     "a": [
      "Adam Weinstock",
      "Chenfei Gao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Zach Hizer",
      "Gary Sidhu"
     ],
     "a": [
      "Yoon Choi",
      "Nicholas Lagrua"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Matt Schall",
      "Sebastian Ferrer"
     ],
     "a": [
      "Marcin Glowacki",
      "Adam Weinstock"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Anthony Bradford Bisignano",
      "Kevin Wysoczynski"
     ],
     "a": [
      "Caesar Gene",
      "Samuel Levinson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Simon Rosenwasser",
      "Zachary Puccia"
     ],
     "a": [
      "Tom Laiso",
      "Eugene Zaslavsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Gary Sidhu",
      "Kevin Wysoczynski"
     ],
     "a": [
      "Yoon Choi",
      "Samuel Levinson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Matt Schall",
      "Sebastian Ferrer"
     ],
     "a": [
      "Harrison Mui",
      "Adam Weinstock"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Simon Rosenwasser",
      "Zachary Puccia"
     ],
     "a": [
      "Tom Laiso",
      "Marcin Glowacki"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 28,
     "h": [
      "Zach Hizer",
      "Anthony Bradford Bisignano"
     ],
     "a": [
      "Chenfei Gao",
      "Caesar Gene"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 6,
   "home": "Pickle House",
   "away": "Bounce Malvern",
   "time": "2026-09-28T19:30:00",
   "complete": true,
   "homePoints": 600,
   "awayPoints": 634,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Rich Marcovecchio",
      "Matthew Eldridge"
     ],
     "a": [
      "Austin Gow",
      "Anushk Gupta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Al Mancini",
      "Gopi Narayanan"
     ],
     "a": [
      "Dustin Rabinowitz",
      "Jeff Zamorski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Michael Li",
      "Zach Hollmann"
     ],
     "a": [
      "Lou Frignito",
      "Shashank Kamdar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Dipen Bhatt",
      "Chris Damato"
     ],
     "a": [
      "Mark Kilimnik",
      "Scott Bohrer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Chris Damato",
      "Zach Hollmann"
     ],
     "a": [
      "Lou Frignito",
      "Austin Gow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Gopi Narayanan",
      "Michael Li"
     ],
     "a": [
      "Dustin Rabinowitz",
      "Shawn Ganow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Matthew Eldridge",
      "Al Mancini"
     ],
     "a": [
      "Shashank Kamdar",
      "Ryan Rosen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Tarkan Akas",
      "Mickey Cook"
     ],
     "a": [
      "Scott Bohrer",
      "Anushk Gupta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Chris Damato",
      "Tarkan Akas"
     ],
     "a": [
      "Austin Gow",
      "Anushk Gupta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Dipen Bhatt",
      "Gopi Narayanan"
     ],
     "a": [
      "Jeff Zamorski",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Michael Li",
      "Zach Hollmann"
     ],
     "a": [
      "Shashank Kamdar",
      "Lou Frignito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Rich Marcovecchio",
      "Mickey Cook"
     ],
     "a": [
      "Ryan Rosen",
      "Shawn Ganow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Michael Li",
      "Rich Marcovecchio"
     ],
     "a": [
      "Ryan Rosen",
      "Austin Gow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Matthew Eldridge",
      "Gopi Narayanan"
     ],
     "a": [
      "Dustin Rabinowitz",
      "Scott Bohrer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Zach Hollmann",
      "Al Mancini"
     ],
     "a": [
      "Shashank Kamdar",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Mickey Cook",
      "Dipen Bhatt"
     ],
     "a": [
      "Lou Frignito",
      "Shawn Ganow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Mickey Cook",
      "Al Mancini"
     ],
     "a": [
      "Mark Kilimnik",
      "Austin Gow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Michael Li",
      "Chris Damato"
     ],
     "a": [
      "Jeff Zamorski",
      "Lou Frignito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Matthew Eldridge",
      "Zach Hollmann"
     ],
     "a": [
      "Shashank Kamdar",
      "Ryan Rosen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 31,
     "as": 29,
     "h": [
      "Tarkan Akas",
      "Dipen Bhatt"
     ],
     "a": [
      "Shawn Ganow",
      "Anushk Gupta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Chris Damato",
      "Dipen Bhatt"
     ],
     "a": [
      "Shashank Kamdar",
      "Anushk Gupta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Gopi Narayanan",
      "Zach Hollmann"
     ],
     "a": [
      "Austin Gow",
      "Scott Bohrer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Matthew Eldridge",
      "Tarkan Akas"
     ],
     "a": [
      "Lou Frignito",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Michael Li",
      "Rich Marcovecchio"
     ],
     "a": [
      "Jeff Zamorski",
      "Ryan Rosen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Al Mancini",
      "Rich Marcovecchio"
     ],
     "a": [
      "Jeff Zamorski",
      "Anushk Gupta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Gopi Narayanan",
      "Chris Damato"
     ],
     "a": [
      "Austin Gow",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Zach Hollmann",
      "Mickey Cook"
     ],
     "a": [
      "Dustin Rabinowitz",
      "Ryan Rosen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Michael Li",
      "Dipen Bhatt"
     ],
     "a": [
      "Shawn Ganow",
      "Scott Bohrer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Rich Marcovecchio",
      "Zach Hollmann"
     ],
     "a": [
      "Shashank Kamdar",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Tarkan Akas",
      "Mickey Cook"
     ],
     "a": [
      "Mark Kilimnik",
      "Jeff Zamorski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Gopi Narayanan",
      "Matthew Eldridge"
     ],
     "a": [
      "Ryan Rosen",
      "Scott Bohrer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Michael Li",
      "Chris Damato"
     ],
     "a": [
      "Shawn Ganow",
      "Lou Frignito"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 6,
   "home": "Bounce Tempest",
   "away": "Picklr Newtown",
   "time": "2026-09-28T19:30:00",
   "complete": true,
   "homePoints": 662,
   "awayPoints": 542,
   "homeGW": 28,
   "awayGW": 4,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Adriene Khon",
      "Josh Knupp"
     ],
     "a": [
      "Joseph Yi",
      "Jaco De Waal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Justin Bautista",
      "Eric Nguyen"
     ],
     "a": [
      "William Lee",
      "Tim Cahalin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Darren Johnson",
      "Brandyn Schuchart"
     ],
     "a": [
      "Zach Mcgowan",
      "Joshua Mindlin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Zachary Lessner",
      "Ashwin Korde"
     ],
     "a": [
      "Christian Lupica",
      "Alex Pecora"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Justin Bautista",
      "Brandyn Schuchart"
     ],
     "a": [
      "Joshua Mindlin",
      "William Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Darren Johnson",
      "Ashwin Korde"
     ],
     "a": [
      "Alex Pecora",
      "Jaco De Waal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Josh Knupp",
      "Eric Nguyen"
     ],
     "a": [
      "Tim Cahalin",
      "Joseph Yi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Zachary Lessner",
      "Alex Boory"
     ],
     "a": [
      "Christian Lupica",
      "Zach Mcgowan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Darren Johnson",
      "Zachary Lessner"
     ],
     "a": [
      "Zach Mcgowan",
      "Alex Pecora"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Josh Knupp",
      "Justin Bautista"
     ],
     "a": [
      "Joseph Yi",
      "William Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Adriene Khon",
      "Brandyn Schuchart"
     ],
     "a": [
      "Joshua Mindlin",
      "Jaco De Waal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Alex Boory",
      "Ashwin Korde"
     ],
     "a": [
      "Christian Lupica",
      "Tim Cahalin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Josh Knupp",
      "Ashwin Korde"
     ],
     "a": [
      "William Lee",
      "Tim Cahalin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Darren Johnson",
      "Brandyn Schuchart"
     ],
     "a": [
      "Zach Mcgowan",
      "Jaco De Waal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Adriene Khon",
      "Eric Nguyen"
     ],
     "a": [
      "Joshua Mindlin",
      "Christian Lupica"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Alex Boory",
      "Justin Bautista"
     ],
     "a": [
      "Alex Pecora",
      "Joseph Yi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Josh Knupp",
      "Ashwin Korde"
     ],
     "a": [
      "Joseph Yi",
      "Tim Cahalin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Alex Boory",
      "Eric Nguyen"
     ],
     "a": [
      "William Lee",
      "Alex Pecora"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Zachary Lessner",
      "Brandyn Schuchart"
     ],
     "a": [
      "Christian Lupica",
      "Zach Mcgowan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Justin Bautista",
      "Adriene Khon"
     ],
     "a": [
      "Joshua Mindlin",
      "Jaco De Waal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Darren Johnson",
      "Zachary Lessner"
     ],
     "a": [
      "Zach Mcgowan",
      "Joseph Yi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Adriene Khon",
      "Eric Nguyen"
     ],
     "a": [
      "Tim Cahalin",
      "Joshua Mindlin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Alex Boory",
      "Ashwin Korde"
     ],
     "a": [
      "William Lee",
      "Christian Lupica"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Justin Bautista",
      "Josh Knupp"
     ],
     "a": [
      "Jaco De Waal",
      "Alex Pecora"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Alex Boory",
      "Eric Nguyen"
     ],
     "a": [
      "William Lee",
      "Christian Lupica"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Brandyn Schuchart",
      "Ashwin Korde"
     ],
     "a": [
      "Alex Pecora",
      "Tim Cahalin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Adriene Khon",
      "Zachary Lessner"
     ],
     "a": [
      "Joshua Mindlin",
      "Joseph Yi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Darren Johnson",
      "Justin Bautista"
     ],
     "a": [
      "Zach Mcgowan",
      "Jaco De Waal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Zachary Lessner",
      "Brandyn Schuchart"
     ],
     "a": [
      "Zach Mcgowan",
      "William Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Justin Bautista",
      "Eric Nguyen"
     ],
     "a": [
      "Joseph Yi",
      "Jaco De Waal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Adriene Khon",
      "Josh Knupp"
     ],
     "a": [
      "Joshua Mindlin",
      "Christian Lupica"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Darren Johnson",
      "Alex Boory"
     ],
     "a": [
      "Alex Pecora",
      "Tim Cahalin"
     ]
    }
   ],
   "subs": [
    "Darren Johnson"
   ]
  },
  {
   "result": "away",
   "week": 6,
   "home": "ACE Moorestown",
   "away": "Jersey Devil",
   "time": "2026-09-28T19:30:00",
   "complete": true,
   "homePoints": 575,
   "awayPoints": 659,
   "homeGW": 9,
   "awayGW": 23,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Daniel Ehala",
      "Bryan Nardone"
     ],
     "a": [
      "Vince Abate",
      "Vaughn Mcclelland"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Matthew Mintz",
      "Jack Blumberg"
     ],
     "a": [
      "Ryan Furman",
      "Zach Bowe"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Tyler Marlin",
      "Nachiket Vaidya"
     ],
     "a": [
      "Tyler Arsenault",
      "Matthew Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Marc Harden",
      "Robert Finley"
     ],
     "a": [
      "Braden Keith",
      "Kushal Thapa"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Daniel Ehala",
      "Robert Finley"
     ],
     "a": [
      "Zach Bowe",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jack Blumberg",
      "Marc Harden"
     ],
     "a": [
      "Ryan Furman",
      "Matthew Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Tyler Marlin",
      "Bryan Nardone"
     ],
     "a": [
      "Vince Abate",
      "Kushal Thapa"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Josh Sherlock",
      "Matthew Mintz"
     ],
     "a": [
      "Vaughn Mcclelland",
      "Braden Keith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jack Blumberg",
      "Bryan Nardone"
     ],
     "a": [
      "Zach Bowe",
      "Matthew Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Josh Sherlock",
      "Tyler Marlin"
     ],
     "a": [
      "Tyler Arsenault",
      "Ryan Furman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Daniel Ehala",
      "Matthew Mintz"
     ],
     "a": [
      "Vaughn Mcclelland",
      "Vince Abate"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Nachiket Vaidya",
      "Marc Harden"
     ],
     "a": [
      "Kushal Thapa",
      "Braden Keith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Marc Harden",
      "Jack Blumberg"
     ],
     "a": [
      "Matthew Chen",
      "Braden Keith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Daniel Ehala",
      "Matthew Mintz"
     ],
     "a": [
      "Tyler Arsenault",
      "Ryan Furman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Robert Finley",
      "Nachiket Vaidya"
     ],
     "a": [
      "Vince Abate",
      "Zach Bowe"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Tyler Marlin",
      "Bryan Nardone"
     ],
     "a": [
      "Vaughn Mcclelland",
      "Kushal Thapa"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Marc Harden",
      "Bryan Nardone"
     ],
     "a": [
      "Zach Bowe",
      "Vaughn Mcclelland"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Jack Blumberg",
      "Nachiket Vaidya"
     ],
     "a": [
      "Ryan Furman",
      "Matthew Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Matthew Mintz",
      "Josh Sherlock"
     ],
     "a": [
      "Tyler Arsenault",
      "Vince Abate"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Tyler Marlin",
      "Robert Finley"
     ],
     "a": [
      "Kushal Thapa",
      "Braden Keith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Robert Finley",
      "Josh Sherlock"
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
     "as": 19,
     "h": [
      "Daniel Ehala",
      "Tyler Marlin"
     ],
     "a": [
      "Ryan Furman",
      "Matthew Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Matthew Mintz",
      "Jack Blumberg"
     ],
     "a": [
      "Kushal Thapa",
      "Vince Abate"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Bryan Nardone",
      "Nachiket Vaidya"
     ],
     "a": [
      "Braden Keith",
      "Vaughn Mcclelland"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Daniel Ehala",
      "Bryan Nardone"
     ],
     "a": [
      "Tyler Arsenault",
      "Ryan Furman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Nachiket Vaidya",
      "Tyler Marlin"
     ],
     "a": [
      "Vaughn Mcclelland",
      "Vince Abate"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jack Blumberg",
      "Josh Sherlock"
     ],
     "a": [
      "Matthew Chen",
      "Zach Bowe"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Robert Finley",
      "Matthew Mintz"
     ],
     "a": [
      "Braden Keith",
      "Kushal Thapa"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Daniel Ehala",
      "Tyler Marlin"
     ],
     "a": [
      "Vince Abate",
      "Vaughn Mcclelland"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Matthew Mintz",
      "Robert Finley"
     ],
     "a": [
      "Kushal Thapa",
      "Braden Keith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 23,
     "h": [
      "Josh Sherlock",
      "Nachiket Vaidya"
     ],
     "a": [
      "Ryan Furman",
      "Zach Bowe"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jack Blumberg",
      "Bryan Nardone"
     ],
     "a": [
      "Tyler Arsenault",
      "Matthew Chen"
     ]
    }
   ],
   "subs": [
    "Jack Blumberg"
   ]
  },
  {
   "result": "away",
   "week": 6,
   "home": "Monroe",
   "away": "Jersey Pickleball Club",
   "time": "2026-09-30T19:30:00",
   "complete": true,
   "homePoints": 561,
   "awayPoints": 664,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Aleksey Sergeev",
      "Christopher Venuto"
     ],
     "a": [
      "Matt Schall",
      "Andrew Bernard"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Rahul Purwah",
      "Ivan Rios"
     ],
     "a": [
      "Zach Hizer",
      "Kevin Wysoczynski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Abhishekh Mehra",
      "Steve Susskind"
     ],
     "a": [
      "John Gargana",
      "Kevin Lin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jon Bliven",
      "Jonathan Ksiezopolski"
     ],
     "a": [
      "Simon Rosenwasser",
      "Gary Sidhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ivan Rios",
      "Christopher Venuto"
     ],
     "a": [
      "Zach Hizer",
      "Simon Rosenwasser"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Rahul Purwah",
      "Aleksey Sergeev"
     ],
     "a": [
      "Kevin Lin",
      "John Gargana"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Jonathan Ksiezopolski",
      "Julius Degen"
     ],
     "a": [
      "Matt Schall",
      "Kevin Wysoczynski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Jon Bliven",
      "Steve Susskind"
     ],
     "a": [
      "Gary Sidhu",
      "Andrew Bernard"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jon Bliven",
      "Ivan Rios"
     ],
     "a": [
      "Andrew Bernard",
      "Simon Rosenwasser"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Julius Degen",
      "Aleksey Sergeev"
     ],
     "a": [
      "Zach Hizer",
      "John Gargana"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Rahul Purwah",
      "Abhishekh Mehra"
     ],
     "a": [
      "Gary Sidhu",
      "Matt Schall"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Jonathan Ksiezopolski",
      "Christopher Venuto"
     ],
     "a": [
      "Kevin Lin",
      "Kevin Wysoczynski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jon Bliven",
      "Rahul Purwah"
     ],
     "a": [
      "John Gargana",
      "Zach Hizer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Ivan Rios",
      "Aleksey Sergeev"
     ],
     "a": [
      "Andrew Bernard",
      "Kevin Lin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jonathan Ksiezopolski",
      "Christopher Venuto"
     ],
     "a": [
      "Gary Sidhu",
      "Matt Schall"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Julius Degen",
      "Steve Susskind"
     ],
     "a": [
      "Simon Rosenwasser",
      "Kevin Wysoczynski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Jon Bliven",
      "Ivan Rios"
     ],
     "a": [
      "Zach Hizer",
      "Kevin Lin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Steve Susskind",
      "Christopher Venuto"
     ],
     "a": [
      "Matt Schall",
      "John Gargana"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Julius Degen",
      "Abhishekh Mehra"
     ],
     "a": [
      "Andrew Bernard",
      "Kevin Wysoczynski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Rahul Purwah",
      "Aleksey Sergeev"
     ],
     "a": [
      "Gary Sidhu",
      "Simon Rosenwasser"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jonathan Ksiezopolski",
      "Aleksey Sergeev"
     ],
     "a": [
      "Andrew Bernard",
      "Simon Rosenwasser"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Rahul Purwah",
      "Abhishekh Mehra"
     ],
     "a": [
      "Kevin Lin",
      "Zach Hizer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ivan Rios",
      "Christopher Venuto"
     ],
     "a": [
      "Matt Schall",
      "John Gargana"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Julius Degen",
      "Steve Susskind"
     ],
     "a": [
      "Kevin Wysoczynski",
      "Gary Sidhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Rahul Purwah",
      "Christopher Venuto"
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
     "as": 23,
     "h": [
      "Ivan Rios",
      "Aleksey Sergeev"
     ],
     "a": [
      "John Gargana",
      "Andrew Bernard"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jonathan Ksiezopolski",
      "Julius Degen"
     ],
     "a": [
      "Gary Sidhu",
      "Kevin Wysoczynski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jon Bliven",
      "Steve Susskind"
     ],
     "a": [
      "Simon Rosenwasser",
      "Kevin Lin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Abhishekh Mehra",
      "Christopher Venuto"
     ],
     "a": [
      "Andrew Bernard",
      "John Gargana"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jonathan Ksiezopolski",
      "Aleksey Sergeev"
     ],
     "a": [
      "Matt Schall",
      "Zach Hizer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jon Bliven",
      "Rahul Purwah"
     ],
     "a": [
      "Simon Rosenwasser",
      "Kevin Wysoczynski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Ivan Rios",
      "Julius Degen"
     ],
     "a": [
      "Gary Sidhu",
      "Kevin Lin"
     ]
    }
   ],
   "subs": [
    "Kevin Lin",
    "John Gargana"
   ]
  },
  {
   "result": "home",
   "week": 7,
   "home": "Premiere",
   "away": "Jersey Pickleball Club",
   "time": "2026-10-05T19:00:00",
   "complete": true,
   "homePoints": 681,
   "awayPoints": 552,
   "homeGW": 26,
   "awayGW": 6,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Boris Tserlin",
      "Rob Pandolfi"
     ],
     "a": [
      "Anthony Bradford Bisignano",
      "Daniel Phillips"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Gary White",
      "Neil Ottrando"
     ],
     "a": [
      "Patrick Cadieu",
      "Wasib Malik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Chris Frangipane",
      "Nicholas Como"
     ],
     "a": [
      "Gary Sidhu",
      "Zachary Puccia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Jacob Yandoli",
      "Michael Rapaglia"
     ],
     "a": [
      "Simon Rosenwasser",
      "Kevin Wysoczynski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Rob Pandolfi",
      "Neil Ottrando"
     ],
     "a": [
      "Anthony Bradford Bisignano",
      "Wasib Malik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Nicholas Como",
      "Matthew Friedman"
     ],
     "a": [
      "Daniel Phillips",
      "Patrick Cadieu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Chris Frangipane",
      "Nicholas Yandoli"
     ],
     "a": [
      "Kevin Wysoczynski",
      "Zachary Puccia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Boris Tserlin",
      "Gary White"
     ],
     "a": [
      "Simon Rosenwasser",
      "Gary Sidhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Neil Ottrando",
      "Michael Rapaglia"
     ],
     "a": [
      "Anthony Bradford Bisignano",
      "Daniel Phillips"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Chris Frangipane",
      "Nicholas Yandoli"
     ],
     "a": [
      "Patrick Cadieu",
      "Wasib Malik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Boris Tserlin",
      "Matthew Friedman"
     ],
     "a": [
      "Gary Sidhu",
      "Zachary Puccia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jacob Yandoli",
      "Gary White"
     ],
     "a": [
      "Simon Rosenwasser",
      "Kevin Wysoczynski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Matthew Friedman",
      "Jacob Yandoli"
     ],
     "a": [
      "Anthony Bradford Bisignano",
      "Wasib Malik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Michael Rapaglia",
      "Nicholas Yandoli"
     ],
     "a": [
      "Daniel Phillips",
      "Patrick Cadieu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Rob Pandolfi",
      "Nicholas Como"
     ],
     "a": [
      "Zachary Puccia",
      "Kevin Wysoczynski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Boris Tserlin",
      "Chris Frangipane"
     ],
     "a": [
      "Simon Rosenwasser",
      "Gary Sidhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 29,
     "as": 31,
     "h": [
      "Matthew Friedman",
      "Nicholas Como"
     ],
     "a": [
      "Anthony Bradford Bisignano",
      "Patrick Cadieu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Gary White",
      "Neil Ottrando"
     ],
     "a": [
      "Wasib Malik",
      "Daniel Phillips"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jacob Yandoli",
      "Michael Rapaglia"
     ],
     "a": [
      "Simon Rosenwasser",
      "Zachary Puccia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Boris Tserlin",
      "Nicholas Yandoli"
     ],
     "a": [
      "Kevin Wysoczynski",
      "Gary Sidhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Nicholas Como",
      "Neil Ottrando"
     ],
     "a": [
      "Anthony Bradford Bisignano",
      "Gary Sidhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jacob Yandoli",
      "Gary White"
     ],
     "a": [
      "Kevin Wysoczynski",
      "Daniel Phillips"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Chris Frangipane",
      "Rob Pandolfi"
     ],
     "a": [
      "Simon Rosenwasser",
      "Wasib Malik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Boris Tserlin",
      "Nicholas Yandoli"
     ],
     "a": [
      "Zachary Puccia",
      "Patrick Cadieu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Gary White",
      "Michael Rapaglia"
     ],
     "a": [
      "Anthony Bradford Bisignano",
      "Patrick Cadieu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Nicholas Yandoli",
      "Matthew Friedman"
     ],
     "a": [
      "Daniel Phillips",
      "Wasib Malik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Nicholas Como",
      "Rob Pandolfi"
     ],
     "a": [
      "Simon Rosenwasser",
      "Zachary Puccia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jacob Yandoli",
      "Chris Frangipane"
     ],
     "a": [
      "Kevin Wysoczynski",
      "Gary Sidhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Boris Tserlin",
      "Matthew Friedman"
     ],
     "a": [
      "Anthony Bradford Bisignano",
      "Gary Sidhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Chris Frangipane",
      "Nicholas Como"
     ],
     "a": [
      "Daniel Phillips",
      "Kevin Wysoczynski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Rob Pandolfi",
      "Neil Ottrando"
     ],
     "a": [
      "Simon Rosenwasser",
      "Wasib Malik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Gary White",
      "Michael Rapaglia"
     ],
     "a": [
      "Zachary Puccia",
      "Patrick Cadieu"
     ]
    }
   ],
   "subs": [
    "Patrick Cadieu"
   ]
  },
  {
   "result": "away",
   "week": 7,
   "home": "Jersey Devil",
   "away": "Picklr Newtown",
   "time": "2026-10-05T19:00:00",
   "complete": true,
   "homePoints": 618,
   "awayPoints": 640,
   "homeGW": 13,
   "awayGW": 19,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Tyler Arsenault",
      "Ryan Furman"
     ],
     "a": [
      "Michael Velez",
      "Alex Pecora"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Zach Bowe",
      "Sheel Motiwala"
     ],
     "a": [
      "Jaco De Waal",
      "Joshua Mindlin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Braden Keith",
      "Vince Abate"
     ],
     "a": [
      "William Lee",
      "Tim Cahalin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Daniel Schwab",
      "Brian Barenbaum"
     ],
     "a": [
      "Joseph Yi",
      "Zach Mcgowan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Tyler Arsenault",
      "Ryan Furman"
     ],
     "a": [
      "Tim Cahalin",
      "Thomas Fenton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Caleb Perry-Abner",
      "Daniel Schwab"
     ],
     "a": [
      "Joshua Mindlin",
      "Michael Velez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Braden Keith",
      "Brian Barenbaum"
     ],
     "a": [
      "William Lee",
      "Joseph Yi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Zach Bowe",
      "Vince Abate"
     ],
     "a": [
      "Jaco De Waal",
      "Zach Mcgowan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Zach Bowe",
      "Tyler Arsenault"
     ],
     "a": [
      "Zach Mcgowan",
      "Joshua Mindlin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ryan Furman",
      "Caleb Perry-Abner"
     ],
     "a": [
      "William Lee",
      "Tim Cahalin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Braden Keith",
      "Vince Abate"
     ],
     "a": [
      "Alex Pecora",
      "Jaco De Waal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Daniel Schwab",
      "Sheel Motiwala"
     ],
     "a": [
      "Thomas Fenton",
      "Michael Velez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Zach Bowe",
      "Daniel Schwab"
     ],
     "a": [
      "Zach Mcgowan",
      "Jaco De Waal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Tyler Arsenault",
      "Caleb Perry-Abner"
     ],
     "a": [
      "Joshua Mindlin",
      "Thomas Fenton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Braden Keith",
      "Brian Barenbaum"
     ],
     "a": [
      "Joseph Yi",
      "Alex Pecora"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sheel Motiwala",
      "Vince Abate"
     ],
     "a": [
      "Tim Cahalin",
      "Michael Velez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Zach Bowe",
      "Daniel Schwab"
     ],
     "a": [
      "Alex Pecora",
      "Thomas Fenton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Ryan Furman",
      "Brian Barenbaum"
     ],
     "a": [
      "Zach Mcgowan",
      "William Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Braden Keith",
      "Caleb Perry-Abner"
     ],
     "a": [
      "Jaco De Waal",
      "Michael Velez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Vince Abate",
      "Sheel Motiwala"
     ],
     "a": [
      "Joseph Yi",
      "Joshua Mindlin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Zach Bowe",
      "Tyler Arsenault"
     ],
     "a": [
      "Jaco De Waal",
      "Joseph Yi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Ryan Furman",
      "Caleb Perry-Abner"
     ],
     "a": [
      "Tim Cahalin",
      "Michael Velez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Braden Keith",
      "Sheel Motiwala"
     ],
     "a": [
      "William Lee",
      "Thomas Fenton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Daniel Schwab",
      "Vince Abate"
     ],
     "a": [
      "Alex Pecora",
      "Zach Mcgowan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Zach Bowe",
      "Ryan Furman"
     ],
     "a": [
      "Zach Mcgowan",
      "Alex Pecora"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Tyler Arsenault",
      "Caleb Perry-Abner"
     ],
     "a": [
      "Thomas Fenton",
      "Tim Cahalin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Braden Keith",
      "Daniel Schwab"
     ],
     "a": [
      "Joseph Yi",
      "Joshua Mindlin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sheel Motiwala",
      "Brian Barenbaum"
     ],
     "a": [
      "Michael Velez",
      "William Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Zach Bowe",
      "Ryan Furman"
     ],
     "a": [
      "Alex Pecora",
      "Tim Cahalin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Tyler Arsenault",
      "Caleb Perry-Abner"
     ],
     "a": [
      "Joseph Yi",
      "Jaco De Waal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 27,
     "as": 29,
     "h": [
      "Vince Abate",
      "Sheel Motiwala"
     ],
     "a": [
      "Zach Mcgowan",
      "William Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Daniel Schwab",
      "Brian Barenbaum"
     ],
     "a": [
      "Joshua Mindlin",
      "Thomas Fenton"
     ]
    }
   ],
   "subs": [
    "Michael Velez",
    "Caleb Perry-Abner"
   ]
  },
  {
   "result": "away",
   "week": 7,
   "home": "Monroe",
   "away": "Flemington",
   "time": "2026-10-05T19:30:00",
   "complete": true,
   "homePoints": 578,
   "awayPoints": 599,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Abhishekh Mehra",
      "Brian O'Neill"
     ],
     "a": [
      "Robbie Oddy",
      "Andy Ead"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jonathan Ksiezopolski",
      "Rahul Purwah"
     ],
     "a": [
      "Anthony Fallet",
      "Frank Clark"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Christopher Venuto",
      "Michael Ksiezopolski"
     ],
     "a": [
      "Shahar Gelber",
      "Sean O'Connell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Claudio Lampone",
      "Julius Degen"
     ],
     "a": [
      "Omar Husain",
      "Steven Gregov"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Abhishekh Mehra",
      "Claudio Lampone"
     ],
     "a": [
      "Robbie Oddy",
      "Andy Ead"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jonathan Ksiezopolski",
      "Brian O'Neill"
     ],
     "a": [
      "Anthony Fallet",
      "Frank Clark"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Michael Ksiezopolski",
      "Julius Degen"
     ],
     "a": [
      "Shahar Gelber",
      "Sean O'Connell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Christopher Venuto",
      "Rahul Purwah"
     ],
     "a": [
      "Omar Husain",
      "Steven Gregov"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Jonathan Ksiezopolski",
      "Julius Degen"
     ],
     "a": [
      "Robbie Oddy",
      "Sean O'Connell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Rahul Purwah",
      "Christopher Venuto"
     ],
     "a": [
      "Shahar Gelber",
      "Andy Ead"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Brian O'Neill",
      "Claudio Lampone"
     ],
     "a": [
      "Frank Clark",
      "Omar Husain"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Abhishekh Mehra",
      "Michael Ksiezopolski"
     ],
     "a": [
      "Anthony Fallet",
      "Steven Gregov"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Abhishekh Mehra",
      "Steve Susskind"
     ],
     "a": [
      "Robbie Oddy",
      "Sean O'Connell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jonathan Ksiezopolski",
      "Christopher Venuto"
     ],
     "a": [
      "Shahar Gelber",
      "Andy Ead"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Rahul Purwah",
      "Michael Ksiezopolski"
     ],
     "a": [
      "Frank Clark",
      "Omar Husain"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Julius Degen",
      "Brian O'Neill"
     ],
     "a": [
      "Anthony Fallet",
      "Steven Gregov"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Brian O'Neill",
      "Steve Susskind"
     ],
     "a": [
      "Robbie Oddy",
      "Shahar Gelber"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Rahul Purwah",
      "Claudio Lampone"
     ],
     "a": [
      "Andy Ead",
      "Anthony Fallet"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jonathan Ksiezopolski",
      "Michael Ksiezopolski"
     ],
     "a": [
      "Sean O'Connell",
      "Omar Husain"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Julius Degen",
      "Christopher Venuto"
     ],
     "a": [
      "Steven Gregov",
      "Frank Clark"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Rahul Purwah",
      "Abhishekh Mehra"
     ],
     "a": [
      "Robbie Oddy",
      "Shahar Gelber"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Michael Ksiezopolski",
      "Brian O'Neill"
     ],
     "a": [
      "Andy Ead",
      "Anthony Fallet"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Steve Susskind",
      "Christopher Venuto"
     ],
     "a": [
      "Sean O'Connell",
      "Omar Husain"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Julius Degen",
      "Claudio Lampone"
     ],
     "a": [
      "Frank Clark",
      "Steven Gregov"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Rahul Purwah",
      "Abhishekh Mehra"
     ],
     "a": [
      "Robbie Oddy",
      "Steven Gregov"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Christopher Venuto",
      "Brian O'Neill"
     ],
     "a": [
      "Andy Ead",
      "Omar Husain"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Michael Ksiezopolski",
      "Julius Degen"
     ],
     "a": [
      "Shahar Gelber",
      "Frank Clark"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Claudio Lampone",
      "Steve Susskind"
     ],
     "a": [
      "Anthony Fallet",
      "Sean O'Connell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Jonathan Ksiezopolski",
      "Christopher Venuto"
     ],
     "a": [
      "Robbie Oddy",
      "Steven Gregov"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Rahul Purwah",
      "Claudio Lampone"
     ],
     "a": [
      "Andy Ead",
      "Omar Husain"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Julius Degen",
      "Abhishekh Mehra"
     ],
     "a": [
      "Shahar Gelber",
      "Frank Clark"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Brian O'Neill",
      "Steve Susskind"
     ],
     "a": [
      "Anthony Fallet",
      "Sean O'Connell"
     ]
    }
   ],
   "subs": [
    "Steven Gregov",
    "Claudio Lampone",
    "Omar Husain"
   ]
  },
  {
   "result": "away",
   "week": 7,
   "home": "Pickleball Kingdom Watchung",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-10-05T19:30:00",
   "complete": true,
   "homePoints": 586,
   "awayPoints": 623,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Eric Jiang",
      "Stanley Bonczek"
     ],
     "a": [
      "Elliott Albanese",
      "Jason Makarevic"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Zachary Lisojo",
      "Anthony Bonaventura"
     ],
     "a": [
      "Neel Goyal",
      "Jake Laifer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Daniel Gallegos",
      "Marr Flores"
     ],
     "a": [
      "Shreyas Pani",
      "Thomas Connolly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Christopher Natividad",
      "Joshua Octaviano"
     ],
     "a": [
      "Camrin Cronheim",
      "Vivek Kumar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Drew Youssef",
      "Daniel Gallegos"
     ],
     "a": [
      "Shreyas Pani",
      "Thomas Connolly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Joshua Octaviano",
      "Christopher Natividad"
     ],
     "a": [
      "Keith Shedlock",
      "Ian Chin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Zachary Lisojo",
      "Anthony Bonaventura"
     ],
     "a": [
      "Neel Goyal",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Stanley Bonczek",
      "Eric Jiang"
     ],
     "a": [
      "Jason Makarevic",
      "Elliott Albanese"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Stanley Bonczek",
      "Zachary Lisojo"
     ],
     "a": [
      "Jake Laifer",
      "Keith Shedlock"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Anthony Bonaventura",
      "Eric Jiang"
     ],
     "a": [
      "Elliott Albanese",
      "Vivek Kumar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Kevin Sun",
      "Christopher Natividad"
     ],
     "a": [
      "Neel Goyal",
      "Thomas Connolly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Drew Youssef",
      "Daniel Gallegos"
     ],
     "a": [
      "Shreyas Pani",
      "Jason Makarevic"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Christopher Natividad",
      "Marr Flores"
     ],
     "a": [
      "Ian Chin",
      "Thomas Connolly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Daniel Gallegos",
      "Joshua Octaviano"
     ],
     "a": [
      "Shreyas Pani",
      "Jason Makarevic"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Eric Jiang",
      "Anthony Bonaventura"
     ],
     "a": [
      "Camrin Cronheim",
      "Jake Laifer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Zachary Lisojo",
      "Drew Youssef"
     ],
     "a": [
      "Elliott Albanese",
      "Vivek Kumar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Fabricio Gaona",
      "Daniel Gallegos"
     ],
     "a": [
      "Shreyas Pani",
      "Jake Laifer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Anthony Bonaventura",
      "Joshua Octaviano"
     ],
     "a": [
      "Ian Chin",
      "Keith Shedlock"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Drew Youssef",
      "Zachary Lisojo"
     ],
     "a": [
      "Camrin Cronheim",
      "Vivek Kumar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Marr Flores",
      "Kevin Sun"
     ],
     "a": [
      "Neel Goyal",
      "Jason Makarevic"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Fabricio Gaona",
      "Joshua Octaviano"
     ],
     "a": [
      "Keith Shedlock",
      "Jake Laifer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Christopher Natividad",
      "Stanley Bonczek"
     ],
     "a": [
      "Vivek Kumar",
      "Thomas Connolly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Anthony Bonaventura",
      "Daniel Gallegos"
     ],
     "a": [
      "Camrin Cronheim",
      "Elliott Albanese"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Eric Jiang",
      "Drew Youssef"
     ],
     "a": [
      "Neel Goyal",
      "Ian Chin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Joshua Octaviano",
      "Marr Flores"
     ],
     "a": [
      "Jason Makarevic",
      "Jake Laifer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kevin Sun",
      "Eric Jiang"
     ],
     "a": [
      "Neel Goyal",
      "Thomas Connolly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Anthony Bonaventura",
      "Stanley Bonczek"
     ],
     "a": [
      "Vivek Kumar",
      "Keith Shedlock"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Fabricio Gaona",
      "Daniel Gallegos"
     ],
     "a": [
      "Camrin Cronheim",
      "Shreyas Pani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Stanley Bonczek",
      "Anthony Bonaventura"
     ],
     "a": [
      "Neel Goyal",
      "Ian Chin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Daniel Gallegos",
      "Kevin Sun"
     ],
     "a": [
      "Jason Makarevic",
      "Thomas Connolly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Joshua Octaviano",
      "Fabricio Gaona"
     ],
     "a": [
      "Camrin Cronheim",
      "Shreyas Pani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Christopher Natividad",
      "Drew Youssef"
     ],
     "a": [
      "Keith Shedlock",
      "Elliott Albanese"
     ]
    }
   ],
   "subs": [
    "Fabricio Gaona"
   ]
  },
  {
   "result": "home",
   "week": 7,
   "home": "Pickle House",
   "away": "Bounce Tempest",
   "time": "2026-10-05T19:30:00",
   "complete": true,
   "homePoints": 671,
   "awayPoints": 581,
   "homeGW": 25,
   "awayGW": 7,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Ali Husain",
      "Mickey Cook"
     ],
     "a": [
      "Brandyn Schuchart",
      "Ashwin Korde"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Gopi Narayanan",
      "Craig Frame"
     ],
     "a": [
      "Adriene Khon",
      "Nicholas Howcumfu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Tarkan Akas",
      "Michael Li"
     ],
     "a": [
      "Zyril Carilo",
      "Jordan Clever"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Chris Damato",
      "Zach Hollmann"
     ],
     "a": [
      "Alex Boory",
      "Andre Cristobal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Michael Li",
      "Zach Hollmann"
     ],
     "a": [
      "Brandyn Schuchart",
      "Jordan Clever"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Ali Husain",
      "Chris Damato"
     ],
     "a": [
      "Zyril Carilo",
      "Nicholas Howcumfu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Gopi Narayanan",
      "Al Mancini"
     ],
     "a": [
      "Ashwin Korde",
      "Alex Boory"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Dipen Bhatt",
      "Tarkan Akas"
     ],
     "a": [
      "David Brandolph",
      "Andre Cristobal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ali Husain",
      "Zach Hollmann"
     ],
     "a": [
      "Brandyn Schuchart",
      "Zyril Carilo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Mickey Cook",
      "Michael Li"
     ],
     "a": [
      "Nicholas Howcumfu",
      "Andre Cristobal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Craig Frame",
      "Dipen Bhatt"
     ],
     "a": [
      "Ashwin Korde",
      "Alex Boory"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Chris Damato",
      "Gopi Narayanan"
     ],
     "a": [
      "Adriene Khon",
      "David Brandolph"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Chris Damato",
      "Michael Li"
     ],
     "a": [
      "Brandyn Schuchart",
      "Adriene Khon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Zach Hollmann",
      "Al Mancini"
     ],
     "a": [
      "Zyril Carilo",
      "Jordan Clever"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Ali Husain",
      "Tarkan Akas"
     ],
     "a": [
      "Andre Cristobal",
      "Ashwin Korde"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Mickey Cook",
      "Craig Frame"
     ],
     "a": [
      "David Brandolph",
      "Nicholas Howcumfu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 30,
     "as": 28,
     "h": [
      "Ali Husain",
      "Zach Hollmann"
     ],
     "a": [
      "Brandyn Schuchart",
      "Alex Boory"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Mickey Cook",
      "Al Mancini"
     ],
     "a": [
      "Adriene Khon",
      "David Brandolph"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Craig Frame",
      "Tarkan Akas"
     ],
     "a": [
      "Jordan Clever",
      "Ashwin Korde"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Gopi Narayanan",
      "Michael Li"
     ],
     "a": [
      "Andre Cristobal",
      "Nicholas Howcumfu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Gopi Narayanan",
      "Zach Hollmann"
     ],
     "a": [
      "Brandyn Schuchart",
      "Adriene Khon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Ali Husain",
      "Michael Li"
     ],
     "a": [
      "Zyril Carilo",
      "Alex Boory"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Dipen Bhatt",
      "Al Mancini"
     ],
     "a": [
      "Ashwin Korde",
      "Jordan Clever"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Chris Damato",
      "Tarkan Akas"
     ],
     "a": [
      "David Brandolph",
      "Nicholas Howcumfu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Michael Li",
      "Craig Frame"
     ],
     "a": [
      "Brandyn Schuchart",
      "Jordan Clever"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Chris Damato",
      "Al Mancini"
     ],
     "a": [
      "Adriene Khon",
      "Andre Cristobal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Dipen Bhatt",
      "Zach Hollmann"
     ],
     "a": [
      "Zyril Carilo",
      "David Brandolph"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Ali Husain",
      "Mickey Cook"
     ],
     "a": [
      "Nicholas Howcumfu",
      "Alex Boory"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Michael Li",
      "Ali Husain"
     ],
     "a": [
      "Brandyn Schuchart",
      "Zyril Carilo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Tarkan Akas",
      "Mickey Cook"
     ],
     "a": [
      "Jordan Clever",
      "Andre Cristobal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Gopi Narayanan",
      "Dipen Bhatt"
     ],
     "a": [
      "Adriene Khon",
      "Ashwin Korde"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Chris Damato",
      "Zach Hollmann"
     ],
     "a": [
      "Alex Boory",
      "David Brandolph"
     ]
    }
   ],
   "subs": [
    "Nicholas Howcumfu",
    "Andre Cristobal",
    "Jordan Clever"
   ]
  },
  {
   "result": "away",
   "week": 7,
   "home": "ACE Moorestown",
   "away": "Bounce Malvern",
   "time": "2026-10-05T19:30:00",
   "complete": true,
   "homePoints": 510,
   "awayPoints": 666,
   "homeGW": 6,
   "awayGW": 26,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Robert Finley",
      "Damien Stahl"
     ],
     "a": [
      "Anushk Gupta",
      "Austin Gow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Josh Sherlock",
      "Matthew Mintz"
     ],
     "a": [
      "Shashank Kamdar",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Daniel Ehala",
      "Bryan Nardone"
     ],
     "a": [
      "Scott Bohrer",
      "Jeff Zamorski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Vineeth Mathew",
      "Nachiket Vaidya"
     ],
     "a": [
      "Lou Frignito",
      "Vaughn Lawrence"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Shayne Clowar",
      "Tyler Marlin"
     ],
     "a": [
      "Lou Frignito",
      "Jeff Zamorski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Bryan Nardone",
      "Vineeth Mathew"
     ],
     "a": [
      "Shashank Kamdar",
      "Anushk Gupta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Daniel Ehala",
      "Damien Stahl"
     ],
     "a": [
      "Dustin Rabinowitz",
      "Scott Bohrer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Matthew Mintz",
      "Josh Sherlock"
     ],
     "a": [
      "Vaughn Lawrence",
      "Shawn Ganow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Robert Finley",
      "Tyler Marlin"
     ],
     "a": [
      "Lou Frignito",
      "Vaughn Lawrence"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Shayne Clowar",
      "Vineeth Mathew"
     ],
     "a": [
      "Shawn Ganow",
      "Shashank Kamdar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Bryan Nardone",
      "Damien Stahl"
     ],
     "a": [
      "Dustin Rabinowitz",
      "Scott Bohrer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Daniel Ehala",
      "Nachiket Vaidya"
     ],
     "a": [
      "Austin Gow",
      "Anushk Gupta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Bryan Nardone",
      "Tyler Marlin"
     ],
     "a": [
      "Anushk Gupta",
      "Shawn Ganow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Robert Finley",
      "Nachiket Vaidya"
     ],
     "a": [
      "Lou Frignito",
      "Austin Gow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Daniel Ehala",
      "Matthew Mintz"
     ],
     "a": [
      "Dustin Rabinowitz",
      "Vaughn Lawrence"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Josh Sherlock",
      "Damien Stahl"
     ],
     "a": [
      "Shashank Kamdar",
      "Jeff Zamorski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Vineeth Mathew",
      "Daniel Ehala"
     ],
     "a": [
      "Jeff Zamorski",
      "Shawn Ganow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Nachiket Vaidya",
      "Matthew Mintz"
     ],
     "a": [
      "Vaughn Lawrence",
      "Scott Bohrer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Robert Finley",
      "Josh Sherlock"
     ],
     "a": [
      "Lou Frignito",
      "Shashank Kamdar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Shayne Clowar",
      "Tyler Marlin"
     ],
     "a": [
      "Dustin Rabinowitz",
      "Austin Gow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Damien Stahl",
      "Robert Finley"
     ],
     "a": [
      "Shashank Kamdar",
      "Anushk Gupta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Vineeth Mathew",
      "Tyler Marlin"
     ],
     "a": [
      "Dustin Rabinowitz",
      "Vaughn Lawrence"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Nachiket Vaidya",
      "Matthew Mintz"
     ],
     "a": [
      "Lou Frignito",
      "Jeff Zamorski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Shayne Clowar",
      "Bryan Nardone"
     ],
     "a": [
      "Scott Bohrer",
      "Shawn Ganow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Daniel Ehala",
      "Damien Stahl"
     ],
     "a": [
      "Shashank Kamdar",
      "Austin Gow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Shayne Clowar",
      "Josh Sherlock"
     ],
     "a": [
      "Dustin Rabinowitz",
      "Lou Frignito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Matthew Mintz",
      "Robert Finley"
     ],
     "a": [
      "Shawn Ganow",
      "Anushk Gupta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Bryan Nardone",
      "Tyler Marlin"
     ],
     "a": [
      "Jeff Zamorski",
      "Scott Bohrer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Shayne Clowar",
      "Josh Sherlock"
     ],
     "a": [
      "Lou Frignito",
      "Austin Gow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Vineeth Mathew",
      "Daniel Ehala"
     ],
     "a": [
      "Vaughn Lawrence",
      "Scott Bohrer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Robert Finley",
      "Nachiket Vaidya"
     ],
     "a": [
      "Jeff Zamorski",
      "Anushk Gupta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Bryan Nardone",
      "Damien Stahl"
     ],
     "a": [
      "Shashank Kamdar",
      "Dustin Rabinowitz"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 8,
   "home": "Premiere",
   "away": "Dill Dinkers Freehold",
   "time": "2026-10-12T19:00:00",
   "complete": true,
   "homePoints": 623,
   "awayPoints": 565,
   "homeGW": 20,
   "awayGW": 12,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Chris Frangipane",
      "Rob Pandolfi"
     ],
     "a": [
      "Yoon Choi",
      "Christopher Ullo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Michael Rapaglia",
      "Matthew Friedman"
     ],
     "a": [
      "Nicholas Lagrua",
      "Caesar Gene"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Nicholas Como",
      "Boris Tserlin"
     ],
     "a": [
      "Patrick Cadieu",
      "Eugene Zaslavsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Gary White",
      "Neil Ottrando"
     ],
     "a": [
      "Tom Laiso",
      "Chenfei Gao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Chris Frangipane",
      "Rob Pandolfi"
     ],
     "a": [
      "Yoon Choi",
      "Nicholas Lagrua"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Nicholas Yandoli",
      "Matthew Friedman"
     ],
     "a": [
      "Chenfei Gao",
      "Caesar Gene"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Gary White",
      "Neil Ottrando"
     ],
     "a": [
      "Christopher Ullo",
      "Patrick Cadieu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Boris Tserlin",
      "Nicholas Como"
     ],
     "a": [
      "Tom Laiso",
      "Eugene Zaslavsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Boris Tserlin",
      "Gary White"
     ],
     "a": [
      "Yoon Choi",
      "Eugene Zaslavsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Neil Ottrando",
      "Nicholas Yandoli"
     ],
     "a": [
      "Chenfei Gao",
      "Christopher Ullo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Chris Frangipane",
      "Nicholas Como"
     ],
     "a": [
      "Tom Laiso",
      "Nicholas Lagrua"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Michael Rapaglia",
      "Rob Pandolfi"
     ],
     "a": [
      "Caesar Gene",
      "Patrick Cadieu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Nicholas Como",
      "Chris Frangipane"
     ],
     "a": [
      "Yoon Choi",
      "Patrick Cadieu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Matthew Friedman",
      "Neil Ottrando"
     ],
     "a": [
      "Christopher Ullo",
      "Tom Laiso"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Nicholas Yandoli",
      "Michael Rapaglia"
     ],
     "a": [
      "Caesar Gene",
      "Nicholas Lagrua"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Boris Tserlin",
      "Gary White"
     ],
     "a": [
      "Eugene Zaslavsky",
      "Chenfei Gao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Gary White",
      "Chris Frangipane"
     ],
     "a": [
      "Yoon Choi",
      "Tom Laiso"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Rob Pandolfi",
      "Michael Rapaglia"
     ],
     "a": [
      "Christopher Ullo",
      "Caesar Gene"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Nicholas Como",
      "Nicholas Yandoli"
     ],
     "a": [
      "Nicholas Lagrua",
      "Chenfei Gao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Matthew Friedman",
      "Boris Tserlin"
     ],
     "a": [
      "Patrick Cadieu",
      "Eugene Zaslavsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Michael Rapaglia",
      "Neil Ottrando"
     ],
     "a": [
      "Yoon Choi",
      "Nicholas Lagrua"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Rob Pandolfi",
      "Nicholas Como"
     ],
     "a": [
      "Tom Laiso",
      "Caesar Gene"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Boris Tserlin",
      "Chris Frangipane"
     ],
     "a": [
      "Eugene Zaslavsky",
      "Christopher Ullo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Matthew Friedman",
      "Nicholas Yandoli"
     ],
     "a": [
      "Patrick Cadieu",
      "Chenfei Gao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Matthew Friedman",
      "Boris Tserlin"
     ],
     "a": [
      "Yoon Choi",
      "Eugene Zaslavsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Michael Rapaglia",
      "Gary White"
     ],
     "a": [
      "Patrick Cadieu",
      "Tom Laiso"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Nicholas Como",
      "Nicholas Yandoli"
     ],
     "a": [
      "Nicholas Lagrua",
      "Christopher Ullo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Rob Pandolfi",
      "Neil Ottrando"
     ],
     "a": [
      "Chenfei Gao",
      "Caesar Gene"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Gary White",
      "Michael Rapaglia"
     ],
     "a": [
      "Yoon Choi",
      "Caesar Gene"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Nicholas Yandoli",
      "Neil Ottrando"
     ],
     "a": [
      "Patrick Cadieu",
      "Nicholas Lagrua"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Boris Tserlin",
      "Chris Frangipane"
     ],
     "a": [
      "Tom Laiso",
      "Eugene Zaslavsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Matthew Friedman",
      "Rob Pandolfi"
     ],
     "a": [
      "Chenfei Gao",
      "Christopher Ullo"
     ]
    }
   ],
   "subs": [
    "Christopher Ullo",
    "Patrick Cadieu"
   ]
  },
  {
   "result": "away",
   "week": 8,
   "home": "Picklr Newtown",
   "away": "Pickle House",
   "time": "2026-10-12T19:00:00",
   "complete": true,
   "homePoints": 623,
   "awayPoints": 625,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "William Lee",
      "Tim Cahalin"
     ],
     "a": [
      "Michael Li",
      "Tarkan Akas"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Joseph Yi",
      "Michael Velez"
     ],
     "a": [
      "Zach Hollmann",
      "Al Mancini"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Christian Lupica",
      "Jaco De Waal"
     ],
     "a": [
      "Dipen Bhatt",
      "Craig Frame"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Zach Mcgowan",
      "Joshua Mindlin"
     ],
     "a": [
      "Chris Damato",
      "Ali Husain"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Tim Cahalin",
      "Michael Velez"
     ],
     "a": [
      "Al Mancini",
      "Dipen Bhatt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Joshua Mindlin",
      "William Lee"
     ],
     "a": [
      "Mickey Cook",
      "Ali Husain"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Christian Lupica",
      "Zach Mcgowan"
     ],
     "a": [
      "Michael Li",
      "Zach Hollmann"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Alex Pecora",
      "Joseph Yi"
     ],
     "a": [
      "Chris Damato",
      "Tarkan Akas"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Zach Mcgowan",
      "Jaco De Waal"
     ],
     "a": [
      "Ali Husain",
      "Zach Hollmann"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Joshua Mindlin",
      "Michael Velez"
     ],
     "a": [
      "Mickey Cook",
      "Michael Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "William Lee",
      "Tim Cahalin"
     ],
     "a": [
      "Chris Damato",
      "Dipen Bhatt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Christian Lupica",
      "Alex Pecora"
     ],
     "a": [
      "Craig Frame",
      "Tarkan Akas"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Christian Lupica",
      "Tim Cahalin"
     ],
     "a": [
      "Tarkan Akas",
      "Al Mancini"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jaco De Waal",
      "Joseph Yi"
     ],
     "a": [
      "Zach Hollmann",
      "Dipen Bhatt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Joshua Mindlin",
      "Alex Pecora"
     ],
     "a": [
      "Mickey Cook",
      "Craig Frame"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Zach Mcgowan",
      "William Lee"
     ],
     "a": [
      "Michael Li",
      "Ali Husain"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "William Lee",
      "Zach Mcgowan"
     ],
     "a": [
      "Chris Damato",
      "Zach Hollmann"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Alex Pecora",
      "Jaco De Waal"
     ],
     "a": [
      "Michael Li",
      "Craig Frame"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Joseph Yi",
      "Joshua Mindlin"
     ],
     "a": [
      "Ali Husain",
      "Dipen Bhatt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Tim Cahalin",
      "Michael Velez"
     ],
     "a": [
      "Tarkan Akas",
      "Al Mancini"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Michael Velez",
      "Jaco De Waal"
     ],
     "a": [
      "Ali Husain",
      "Zach Hollmann"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Zach Mcgowan",
      "Joshua Mindlin"
     ],
     "a": [
      "Chris Damato",
      "Michael Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "William Lee",
      "Christian Lupica"
     ],
     "a": [
      "Mickey Cook",
      "Al Mancini"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Alex Pecora",
      "Joseph Yi"
     ],
     "a": [
      "Craig Frame",
      "Dipen Bhatt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Alex Pecora",
      "Tim Cahalin"
     ],
     "a": [
      "Michael Li",
      "Al Mancini"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "William Lee",
      "Christian Lupica"
     ],
     "a": [
      "Zach Hollmann",
      "Dipen Bhatt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Zach Mcgowan",
      "Jaco De Waal"
     ],
     "a": [
      "Chris Damato",
      "Mickey Cook"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Joseph Yi",
      "Michael Velez"
     ],
     "a": [
      "Ali Husain",
      "Tarkan Akas"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Christian Lupica",
      "Zach Mcgowan"
     ],
     "a": [
      "Zach Hollmann",
      "Michael Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Alex Pecora",
      "Tim Cahalin"
     ],
     "a": [
      "Craig Frame",
      "Al Mancini"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jaco De Waal",
      "Michael Velez"
     ],
     "a": [
      "Mickey Cook",
      "Tarkan Akas"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Joseph Yi",
      "Joshua Mindlin"
     ],
     "a": [
      "Chris Damato",
      "Ali Husain"
     ]
    }
   ],
   "subs": [
    "Michael Velez"
   ]
  },
  {
   "result": "home",
   "week": 8,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Monroe",
   "time": "2026-10-12T19:00:00",
   "complete": true,
   "homePoints": 673,
   "awayPoints": 513,
   "homeGW": 29,
   "awayGW": 3,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Camrin Cronheim",
      "Elliott Albanese"
     ],
     "a": [
      "Michael Ksiezopolski",
      "Aleksey Sergeev"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jake Laifer",
      "Joseph Albanese"
     ],
     "a": [
      "Rahul Purwah",
      "Snehit Achanta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Neel Goyal",
      "Jason Makarevic"
     ],
     "a": [
      "Salman Saad",
      "Julius Degen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Thomas Connolly",
      "Ian Chin"
     ],
     "a": [
      "Nicholas Vanderveer",
      "Rohan Sabharwal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Thomas Connolly",
      "Ian Chin"
     ],
     "a": [
      "Nicholas Vanderveer",
      "Rohan Sabharwal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jake Laifer",
      "Joseph Albanese"
     ],
     "a": [
      "Aleksey Sergeev",
      "Julius Degen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Camrin Cronheim",
      "Elliott Albanese"
     ],
     "a": [
      "Rahul Purwah",
      "Michael Ksiezopolski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Neel Goyal",
      "Jason Makarevic"
     ],
     "a": [
      "Salman Saad",
      "Snehit Achanta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jason Makarevic",
      "Elliott Albanese"
     ],
     "a": [
      "Salman Saad",
      "Rohan Sabharwal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Camrin Cronheim",
      "Joseph Albanese"
     ],
     "a": [
      "Snehit Achanta",
      "Michael Ksiezopolski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Thomas Connolly",
      "Jake Laifer"
     ],
     "a": [
      "Aleksey Sergeev",
      "Rahul Purwah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Neel Goyal",
      "Ian Chin"
     ],
     "a": [
      "Julius Degen",
      "Nicholas Vanderveer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Thomas Connolly",
      "Jake Laifer"
     ],
     "a": [
      "Julius Degen",
      "Michael Ksiezopolski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Neel Goyal",
      "Ian Chin"
     ],
     "a": [
      "Rahul Purwah",
      "Nicholas Vanderveer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Camrin Cronheim",
      "Joseph Albanese"
     ],
     "a": [
      "Snehit Achanta",
      "Salman Saad"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jason Makarevic",
      "Elliott Albanese"
     ],
     "a": [
      "Aleksey Sergeev",
      "Rohan Sabharwal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jason Makarevic",
      "Jake Laifer"
     ],
     "a": [
      "Rahul Purwah",
      "Snehit Achanta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Thomas Connolly",
      "Joseph Albanese"
     ],
     "a": [
      "Salman Saad",
      "Nicholas Vanderveer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Camrin Cronheim",
      "Ian Chin"
     ],
     "a": [
      "Michael Ksiezopolski",
      "Rohan Sabharwal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Elliott Albanese",
      "Neel Goyal"
     ],
     "a": [
      "Aleksey Sergeev",
      "Julius Degen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Neel Goyal",
      "Elliott Albanese"
     ],
     "a": [
      "Julius Degen",
      "Rohan Sabharwal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Camrin Cronheim",
      "Ian Chin"
     ],
     "a": [
      "Aleksey Sergeev",
      "Michael Ksiezopolski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Thomas Connolly",
      "Joseph Albanese"
     ],
     "a": [
      "Salman Saad",
      "Nicholas Vanderveer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jason Makarevic",
      "Jake Laifer"
     ],
     "a": [
      "Rahul Purwah",
      "Snehit Achanta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Joseph Albanese",
      "Elliott Albanese"
     ],
     "a": [
      "Snehit Achanta",
      "Nicholas Vanderveer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jason Makarevic",
      "Ian Chin"
     ],
     "a": [
      "Julius Degen",
      "Michael Ksiezopolski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Jake Laifer",
      "Camrin Cronheim"
     ],
     "a": [
      "Aleksey Sergeev",
      "Salman Saad"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Thomas Connolly",
      "Neel Goyal"
     ],
     "a": [
      "Rahul Purwah",
      "Rohan Sabharwal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Camrin Cronheim",
      "Jake Laifer"
     ],
     "a": [
      "Aleksey Sergeev",
      "Rahul Purwah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Elliott Albanese",
      "Joseph Albanese"
     ],
     "a": [
      "Nicholas Vanderveer",
      "Michael Ksiezopolski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Neel Goyal",
      "Thomas Connolly"
     ],
     "a": [
      "Julius Degen",
      "Rohan Sabharwal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jason Makarevic",
      "Ian Chin"
     ],
     "a": [
      "Snehit Achanta",
      "Salman Saad"
     ]
    }
   ],
   "subs": [
    "Nicholas Vanderveer",
    "Rohan Sabharwal",
    "Joseph Albanese",
    "Salman Saad"
   ]
  },
  {
   "result": "away",
   "week": 8,
   "home": "Flemington",
   "away": "Pickleball Kingdom Watchung",
   "time": "2026-10-12T19:00:00",
   "complete": true,
   "homePoints": 609,
   "awayPoints": 634,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Patrick Ryan",
      "Andy Ead"
     ],
     "a": [
      "Eric Jiang",
      "Josiah Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Austin Williams",
      "Noah Goding"
     ],
     "a": [
      "Drew Youssef",
      "Daniel Gallegos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Tim Dowd",
      "Frank Clark"
     ],
     "a": [
      "Anthony Bonaventura",
      "Emil Pescatore"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Shahar Gelber",
      "Simon Perry"
     ],
     "a": [
      "Andrew Cooley",
      "Ken Velarde"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Shahar Gelber",
      "Frank Clark"
     ],
     "a": [
      "Daniel Gallegos",
      "Drew Youssef"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Hany Ibrahim",
      "Patrick Ryan"
     ],
     "a": [
      "Eric Jiang",
      "Josiah Kim"
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
      "Ken Velarde",
      "Andrew Cooley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Simon Perry",
      "Andy Ead"
     ],
     "a": [
      "Anthony Bonaventura",
      "Emil Pescatore"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Austin Williams",
      "Hany Ibrahim"
     ],
     "a": [
      "Daniel Gallegos",
      "Andrew Cooley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Shahar Gelber",
      "Simon Perry"
     ],
     "a": [
      "Drew Youssef",
      "Ken Velarde"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Noah Goding",
      "Tim Dowd"
     ],
     "a": [
      "Anthony Bonaventura",
      "Eric Jiang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Patrick Ryan",
      "Frank Clark"
     ],
     "a": [
      "Emil Pescatore",
      "Josiah Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Austin Williams",
      "Hany Ibrahim"
     ],
     "a": [
      "Drew Youssef",
      "Ken Velarde"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Noah Goding",
      "Simon Perry"
     ],
     "a": [
      "Anthony Bonaventura",
      "Eric Jiang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Tim Dowd",
      "Andy Ead"
     ],
     "a": [
      "Josiah Kim",
      "Emil Pescatore"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Shahar Gelber",
      "Patrick Ryan"
     ],
     "a": [
      "Daniel Gallegos",
      "Andrew Cooley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Austin Williams",
      "Andy Ead"
     ],
     "a": [
      "Daniel Gallegos",
      "Eric Jiang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Noah Goding",
      "Simon Perry"
     ],
     "a": [
      "Ken Velarde",
      "Anthony Bonaventura"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Patrick Ryan",
      "Hany Ibrahim"
     ],
     "a": [
      "Andrew Cooley",
      "Emil Pescatore"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Shahar Gelber",
      "Tim Dowd"
     ],
     "a": [
      "Josiah Kim",
      "Drew Youssef"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Shahar Gelber",
      "Noah Goding"
     ],
     "a": [
      "Daniel Gallegos",
      "Eric Jiang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Frank Clark",
      "Patrick Ryan"
     ],
     "a": [
      "Ken Velarde",
      "Anthony Bonaventura"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Austin Williams",
      "Andy Ead"
     ],
     "a": [
      "Emil Pescatore",
      "Andrew Cooley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Hany Ibrahim",
      "Tim Dowd"
     ],
     "a": [
      "Drew Youssef",
      "Josiah Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Hany Ibrahim",
      "Noah Goding"
     ],
     "a": [
      "Eric Jiang",
      "Ken Velarde"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Tim Dowd",
      "Frank Clark"
     ],
     "a": [
      "Daniel Gallegos",
      "Anthony Bonaventura"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Simon Perry",
      "Austin Williams"
     ],
     "a": [
      "Andrew Cooley",
      "Josiah Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Patrick Ryan",
      "Shahar Gelber"
     ],
     "a": [
      "Emil Pescatore",
      "Drew Youssef"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Austin Williams",
      "Patrick Ryan"
     ],
     "a": [
      "Eric Jiang",
      "Ken Velarde"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Shahar Gelber",
      "Hany Ibrahim"
     ],
     "a": [
      "Josiah Kim",
      "Andrew Cooley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Tim Dowd",
      "Andy Ead"
     ],
     "a": [
      "Anthony Bonaventura",
      "Daniel Gallegos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Frank Clark",
      "Simon Perry"
     ],
     "a": [
      "Drew Youssef",
      "Emil Pescatore"
     ]
    }
   ],
   "subs": [
    "Andrew Cooley",
    "Noah Goding",
    "Patrick Ryan"
   ]
  },
  {
   "result": "away",
   "week": 8,
   "home": "Bounce Malvern",
   "away": "Jersey Devil",
   "time": "2026-10-12T19:30:00",
   "complete": true,
   "homePoints": 622,
   "awayPoints": 645,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Austin Gow",
      "Yash Shah"
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
     "as": 17,
     "h": [
      "Dustin Rabinowitz",
      "Lou Frignito"
     ],
     "a": [
      "Ryan Furman",
      "Matthew Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Shawn Ganow",
      "Andre Cristobal"
     ],
     "a": [
      "Vince Abate",
      "Vaughn Mcclelland"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Anushk Gupta",
      "Vaughn Lawrence"
     ],
     "a": [
      "Kushal Thapa",
      "Sheel Motiwala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Dustin Rabinowitz",
      "Jonah Karczmer"
     ],
     "a": [
      "Zach Bowe",
      "Daniel Schwab"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Austin Gow",
      "Anushk Gupta"
     ],
     "a": [
      "Vaughn Mcclelland",
      "Brian Barenbaum"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Vaughn Lawrence",
      "Lou Frignito"
     ],
     "a": [
      "Tyler Arsenault",
      "Matthew Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Yash Shah",
      "Shawn Ganow"
     ],
     "a": [
      "Vince Abate",
      "Sheel Motiwala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Andre Cristobal",
      "Austin Gow"
     ],
     "a": [
      "Zach Bowe",
      "Daniel Schwab"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lou Frignito",
      "Anushk Gupta"
     ],
     "a": [
      "Tyler Arsenault",
      "Brian Barenbaum"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Shawn Ganow",
      "Dustin Rabinowitz"
     ],
     "a": [
      "Ryan Furman",
      "Kushal Thapa"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Yash Shah",
      "Jonah Karczmer"
     ],
     "a": [
      "Vaughn Mcclelland",
      "Sheel Motiwala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Andre Cristobal",
      "Jonah Karczmer"
     ],
     "a": [
      "Daniel Schwab",
      "Ryan Furman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Vaughn Lawrence",
      "Shawn Ganow"
     ],
     "a": [
      "Matthew Chen",
      "Brian Barenbaum"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Lou Frignito",
      "Austin Gow"
     ],
     "a": [
      "Kushal Thapa",
      "Vaughn Mcclelland"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Yash Shah",
      "Anushk Gupta"
     ],
     "a": [
      "Vince Abate",
      "Sheel Motiwala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Anushk Gupta",
      "Jonah Karczmer"
     ],
     "a": [
      "Ryan Furman",
      "Kushal Thapa"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Yash Shah",
      "Dustin Rabinowitz"
     ],
     "a": [
      "Brian Barenbaum",
      "Daniel Schwab"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Shawn Ganow",
      "Lou Frignito"
     ],
     "a": [
      "Zach Bowe",
      "Matthew Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Vaughn Lawrence",
      "Andre Cristobal"
     ],
     "a": [
      "Tyler Arsenault",
      "Vince Abate"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Lou Frignito",
      "Vaughn Lawrence"
     ],
     "a": [
      "Zach Bowe",
      "Ryan Furman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Shawn Ganow",
      "Jonah Karczmer"
     ],
     "a": [
      "Vaughn Mcclelland",
      "Sheel Motiwala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Yash Shah",
      "Andre Cristobal"
     ],
     "a": [
      "Brian Barenbaum",
      "Daniel Schwab"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Austin Gow",
      "Dustin Rabinowitz"
     ],
     "a": [
      "Tyler Arsenault",
      "Matthew Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Andre Cristobal",
      "Dustin Rabinowitz"
     ],
     "a": [
      "Tyler Arsenault",
      "Vince Abate"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Austin Gow",
      "Lou Frignito"
     ],
     "a": [
      "Matthew Chen",
      "Zach Bowe"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Anushk Gupta",
      "Jonah Karczmer"
     ],
     "a": [
      "Ryan Furman",
      "Daniel Schwab"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Vaughn Lawrence",
      "Yash Shah"
     ],
     "a": [
      "Kushal Thapa",
      "Brian Barenbaum"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Dustin Rabinowitz",
      "Vaughn Lawrence"
     ],
     "a": [
      "Ryan Furman",
      "Matthew Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Lou Frignito",
      "Shawn Ganow"
     ],
     "a": [
      "Tyler Arsenault",
      "Zach Bowe"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Andre Cristobal",
      "Jonah Karczmer"
     ],
     "a": [
      "Kushal Thapa",
      "Sheel Motiwala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Anushk Gupta",
      "Austin Gow"
     ],
     "a": [
      "Vaughn Mcclelland",
      "Vince Abate"
     ]
    }
   ],
   "subs": [
    "Andre Cristobal"
   ]
  },
  {
   "result": "away",
   "week": 8,
   "home": "ACE Moorestown",
   "away": "Bounce Tempest",
   "time": "2026-10-12T19:30:00",
   "complete": true,
   "homePoints": 562,
   "awayPoints": 677,
   "homeGW": 7,
   "awayGW": 25,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Robert Finley",
      "Matthew Mintz"
     ],
     "a": [
      "Brandyn Schuchart",
      "Justin Bautista"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Daniel Ehala",
      "Bryan Nardone"
     ],
     "a": [
      "Eric Nguyen",
      "Alex Boory"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Christopher Yang",
      "Shayne Clowar"
     ],
     "a": [
      "Adriene Khon",
      "Justin Chin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Tyler Marlin",
      "Nachiket Vaidya"
     ],
     "a": [
      "Alex Mihalca",
      "Ashwin Korde"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Daniel Ehala",
      "Shayne Clowar"
     ],
     "a": [
      "Zyril Carilo",
      "Justin Bautista"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Tyler Marlin",
      "Matthew Mintz"
     ],
     "a": [
      "Justin Chin",
      "Josh Knupp"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Nachiket Vaidya",
      "Christopher Yang"
     ],
     "a": [
      "Alex Boory",
      "Alex Mihalca"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Robert Finley",
      "Riguo Zheng"
     ],
     "a": [
      "Brandyn Schuchart",
      "Eric Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Bryan Nardone",
      "Riguo Zheng"
     ],
     "a": [
      "Zyril Carilo",
      "Justin Chin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Nachiket Vaidya",
      "Daniel Ehala"
     ],
     "a": [
      "Ashwin Korde",
      "Alex Boory"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Tyler Marlin",
      "Christopher Yang"
     ],
     "a": [
      "Adriene Khon",
      "Josh Knupp"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Robert Finley",
      "Matthew Mintz"
     ],
     "a": [
      "Eric Nguyen",
      "Justin Bautista"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Christopher Yang",
      "Bryan Nardone"
     ],
     "a": [
      "Brandyn Schuchart",
      "Ashwin Korde"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Matthew Mintz",
      "Daniel Ehala"
     ],
     "a": [
      "Josh Knupp",
      "Eric Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Riguo Zheng",
      "Shayne Clowar"
     ],
     "a": [
      "Justin Bautista",
      "Zyril Carilo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Tyler Marlin",
      "Nachiket Vaidya"
     ],
     "a": [
      "Alex Boory",
      "Alex Mihalca"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Bryan Nardone",
      "Riguo Zheng"
     ],
     "a": [
      "Brandyn Schuchart",
      "Adriene Khon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Robert Finley",
      "Shayne Clowar"
     ],
     "a": [
      "Zyril Carilo",
      "Eric Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Nachiket Vaidya",
      "Matthew Mintz"
     ],
     "a": [
      "Josh Knupp",
      "Justin Chin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Christopher Yang",
      "Tyler Marlin"
     ],
     "a": [
      "Alex Mihalca",
      "Ashwin Korde"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Riguo Zheng",
      "Shayne Clowar"
     ],
     "a": [
      "Justin Bautista",
      "Brandyn Schuchart"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Bryan Nardone",
      "Robert Finley"
     ],
     "a": [
      "Alex Boory",
      "Eric Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Matthew Mintz",
      "Tyler Marlin"
     ],
     "a": [
      "Josh Knupp",
      "Adriene Khon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Daniel Ehala",
      "Christopher Yang"
     ],
     "a": [
      "Zyril Carilo",
      "Justin Chin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Matthew Mintz",
      "Nachiket Vaidya"
     ],
     "a": [
      "Justin Bautista",
      "Josh Knupp"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Daniel Ehala",
      "Tyler Marlin"
     ],
     "a": [
      "Alex Boory",
      "Ashwin Korde"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Riguo Zheng",
      "Robert Finley"
     ],
     "a": [
      "Alex Mihalca",
      "Adriene Khon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Shayne Clowar",
      "Bryan Nardone"
     ],
     "a": [
      "Brandyn Schuchart",
      "Zyril Carilo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Tyler Marlin",
      "Riguo Zheng"
     ],
     "a": [
      "Justin Bautista",
      "Eric Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Robert Finley",
      "Christopher Yang"
     ],
     "a": [
      "Ashwin Korde",
      "Adriene Khon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Daniel Ehala",
      "Bryan Nardone"
     ],
     "a": [
      "Zyril Carilo",
      "Brandyn Schuchart"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Shayne Clowar",
      "Nachiket Vaidya"
     ],
     "a": [
      "Alex Mihalca",
      "Justin Chin"
     ]
    }
   ],
   "subs": [
    "Christopher Yang"
   ]
  },
  {
   "result": "home",
   "week": 9,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Jersey Pickleball Club",
   "time": "2026-10-19T19:00:00",
   "complete": true,
   "homePoints": 666,
   "awayPoints": 538,
   "homeGW": 26,
   "awayGW": 6,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Camrin Cronheim",
      "Vivek Kumar"
     ],
     "a": [
      "Anthony Bradford Bisignano",
      "Darren Saks"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Thomas Connolly",
      "Jake Laifer"
     ],
     "a": [
      "Patrick Cadieu",
      "Gary Sidhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Elliott Albanese",
      "Ian Chin"
     ],
     "a": [
      "Craig Brown",
      "Simon Rosenwasser"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Austin Williams",
      "Sidd Pathare"
     ],
     "a": [
      "Zachary Puccia",
      "Kevin Wysoczynski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Thomas Connolly",
      "Jake Laifer"
     ],
     "a": [
      "Kevin Wysoczynski",
      "Zachary Puccia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Austin Williams",
      "Sidd Pathare"
     ],
     "a": [
      "Patrick Cadieu",
      "Gary Sidhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Camrin Cronheim",
      "Vivek Kumar"
     ],
     "a": [
      "Darren Saks",
      "Simon Rosenwasser"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Elliott Albanese",
      "Ian Chin"
     ],
     "a": [
      "Anthony Bradford Bisignano",
      "Daniel Phillips"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Camrin Cronheim",
      "Elliott Albanese"
     ],
     "a": [
      "Patrick Cadieu",
      "Kevin Wysoczynski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Sidd Pathare",
      "Jake Laifer"
     ],
     "a": [
      "Simon Rosenwasser",
      "Daniel Phillips"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Vivek Kumar",
      "Austin Williams"
     ],
     "a": [
      "Craig Brown",
      "Darren Saks"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Thomas Connolly",
      "Ian Chin"
     ],
     "a": [
      "Gary Sidhu",
      "Zachary Puccia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Austin Williams",
      "Vivek Kumar"
     ],
     "a": [
      "Anthony Bradford Bisignano",
      "Gary Sidhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Thomas Connolly",
      "Ian Chin"
     ],
     "a": [
      "Darren Saks",
      "Kevin Wysoczynski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Elliott Albanese",
      "Camrin Cronheim"
     ],
     "a": [
      "Simon Rosenwasser",
      "Patrick Cadieu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Sidd Pathare",
      "Jake Laifer"
     ],
     "a": [
      "Zachary Puccia",
      "Daniel Phillips"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Elliott Albanese",
      "Jake Laifer"
     ],
     "a": [
      "Zachary Puccia",
      "Daniel Phillips"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Vivek Kumar",
      "Ian Chin"
     ],
     "a": [
      "Craig Brown",
      "Simon Rosenwasser"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Camrin Cronheim",
      "Austin Williams"
     ],
     "a": [
      "Patrick Cadieu",
      "Anthony Bradford Bisignano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Thomas Connolly",
      "Sidd Pathare"
     ],
     "a": [
      "Kevin Wysoczynski",
      "Gary Sidhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Thomas Connolly",
      "Sidd Pathare"
     ],
     "a": [
      "Patrick Cadieu",
      "Craig Brown"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Elliott Albanese",
      "Jake Laifer"
     ],
     "a": [
      "Gary Sidhu",
      "Anthony Bradford Bisignano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Austin Williams",
      "Camrin Cronheim"
     ],
     "a": [
      "Simon Rosenwasser",
      "Zachary Puccia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Ian Chin",
      "Vivek Kumar"
     ],
     "a": [
      "Daniel Phillips",
      "Darren Saks"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Camrin Cronheim",
      "Sidd Pathare"
     ],
     "a": [
      "Kevin Wysoczynski",
      "Simon Rosenwasser"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Thomas Connolly",
      "Austin Williams"
     ],
     "a": [
      "Gary Sidhu",
      "Craig Brown"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Elliott Albanese",
      "Vivek Kumar"
     ],
     "a": [
      "Patrick Cadieu",
      "Daniel Phillips"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jake Laifer",
      "Ian Chin"
     ],
     "a": [
      "Darren Saks",
      "Anthony Bradford Bisignano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Elliott Albanese",
      "Vivek Kumar"
     ],
     "a": [
      "Simon Rosenwasser",
      "Gary Sidhu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Camrin Cronheim",
      "Sidd Pathare"
     ],
     "a": [
      "Anthony Bradford Bisignano",
      "Craig Brown"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Thomas Connolly",
      "Austin Williams"
     ],
     "a": [
      "Zachary Puccia",
      "Patrick Cadieu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jake Laifer",
      "Ian Chin"
     ],
     "a": [
      "Daniel Phillips",
      "Kevin Wysoczynski"
     ]
    }
   ],
   "subs": [
    "Craig Brown",
    "Patrick Cadieu",
    "Darren Saks",
    "Austin Williams"
   ]
  },
  {
   "result": "away",
   "week": 9,
   "home": "Flemington",
   "away": "Dill Dinkers Freehold",
   "time": "2026-10-19T19:00:00",
   "complete": true,
   "homePoints": 531,
   "awayPoints": 654,
   "homeGW": 8,
   "awayGW": 24,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Robbie Oddy",
      "Andy Ead"
     ],
     "a": [
      "Yoon Choi",
      "Nicholas Lagrua"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Anthony Fallet",
      "Sean O'Connell"
     ],
     "a": [
      "Harrison Mui",
      "Caesar Gene"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Hany Ibrahim",
      "Shahar Gelber"
     ],
     "a": [
      "Adam Weinstock",
      "Chenfei Gao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Alexandre Inamasu",
      "Frank Clark"
     ],
     "a": [
      "Tom Laiso",
      "Eugene Zaslavsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Robbie Oddy",
      "Andy Ead"
     ],
     "a": [
      "Yoon Choi",
      "Harrison Mui"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Anthony Fallet",
      "Sean O'Connell"
     ],
     "a": [
      "Tom Laiso",
      "Adam Weinstock"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Hany Ibrahim",
      "Shahar Gelber"
     ],
     "a": [
      "Eugene Zaslavsky",
      "Nicholas Lagrua"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Alexandre Inamasu",
      "Frank Clark"
     ],
     "a": [
      "Chenfei Gao",
      "Caesar Gene"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Hany Ibrahim",
      "Frank Clark"
     ],
     "a": [
      "Yoon Choi",
      "Eugene Zaslavsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Robbie Oddy",
      "Sean O'Connell"
     ],
     "a": [
      "Tom Laiso",
      "Harrison Mui"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Shahar Gelber",
      "Andy Ead"
     ],
     "a": [
      "Nicholas Lagrua",
      "Caesar Gene"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Anthony Fallet",
      "Alexandre Inamasu"
     ],
     "a": [
      "Adam Weinstock",
      "Chenfei Gao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Hany Ibrahim",
      "Alexandre Inamasu"
     ],
     "a": [
      "Yoon Choi",
      "Adam Weinstock"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Robbie Oddy",
      "Sean O'Connell"
     ],
     "a": [
      "Tom Laiso",
      "Nicholas Lagrua"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Shahar Gelber",
      "Andy Ead"
     ],
     "a": [
      "Eugene Zaslavsky",
      "Harrison Mui"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Anthony Fallet",
      "Frank Clark"
     ],
     "a": [
      "Chenfei Gao",
      "Caesar Gene"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Andy Ead",
      "Anthony Fallet"
     ],
     "a": [
      "Yoon Choi",
      "Tom Laiso"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Alexandre Inamasu",
      "Frank Clark"
     ],
     "a": [
      "Harrison Mui",
      "Caesar Gene"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Robbie Oddy",
      "Shahar Gelber"
     ],
     "a": [
      "Eugene Zaslavsky",
      "Adam Weinstock"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sean O'Connell",
      "Hany Ibrahim"
     ],
     "a": [
      "Nicholas Lagrua",
      "Chenfei Gao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Shahar Gelber",
      "Frank Clark"
     ],
     "a": [
      "Yoon Choi",
      "Nicholas Lagrua"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Anthony Fallet",
      "Hany Ibrahim"
     ],
     "a": [
      "Adam Weinstock",
      "Tom Laiso"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Robbie Oddy",
      "Andy Ead"
     ],
     "a": [
      "Eugene Zaslavsky",
      "Caesar Gene"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sean O'Connell",
      "Alexandre Inamasu"
     ],
     "a": [
      "Harrison Mui",
      "Chenfei Gao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Robbie Oddy",
      "Anthony Fallet"
     ],
     "a": [
      "Yoon Choi",
      "Caesar Gene"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Sean O'Connell",
      "Andy Ead"
     ],
     "a": [
      "Eugene Zaslavsky",
      "Adam Weinstock"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Shahar Gelber",
      "Frank Clark"
     ],
     "a": [
      "Tom Laiso",
      "Nicholas Lagrua"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Alexandre Inamasu",
      "Hany Ibrahim"
     ],
     "a": [
      "Harrison Mui",
      "Chenfei Gao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Robbie Oddy",
      "Frank Clark"
     ],
     "a": [
      "Yoon Choi",
      "Chenfei Gao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Anthony Fallet",
      "Andy Ead"
     ],
     "a": [
      "Adam Weinstock",
      "Caesar Gene"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Hany Ibrahim",
      "Alexandre Inamasu"
     ],
     "a": [
      "Harrison Mui",
      "Nicholas Lagrua"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Shahar Gelber",
      "Sean O'Connell"
     ],
     "a": [
      "Tom Laiso",
      "Eugene Zaslavsky"
     ]
    }
   ],
   "subs": [
    "Alexandre Inamasu"
   ]
  },
  {
   "result": "home",
   "week": 9,
   "home": "Bounce Malvern",
   "away": "Picklr Newtown",
   "time": "2026-10-19T19:30:00",
   "complete": true,
   "homePoints": 660,
   "awayPoints": 530,
   "homeGW": 24,
   "awayGW": 8,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Grant Hanak",
      "Austin Gow"
     ],
     "a": [
      "Jaco De Waal",
      "Alex Pecora"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Shashank Kamdar",
      "Yash Shah"
     ],
     "a": [
      "William Lee",
      "Tim Cahalin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Lou Frignito",
      "Brock Hanak"
     ],
     "a": [
      "Zach Mcgowan",
      "Derek Callihan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Dustin Rabinowitz",
      "Ryan Rosen"
     ],
     "a": [
      "Joseph Yi",
      "Joshua Mindlin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Grant Hanak",
      "Dustin Rabinowitz"
     ],
     "a": [
      "Joshua Mindlin",
      "Alex Pecora"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Lou Frignito",
      "Vaughn Lawrence"
     ],
     "a": [
      "Derek Callihan",
      "William Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Shashank Kamdar",
      "Ryan Rosen"
     ],
     "a": [
      "Zach Mcgowan",
      "Jaco De Waal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Scott Bohrer",
      "Brock Hanak"
     ],
     "a": [
      "Christian Lupica",
      "Tim Cahalin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Lou Frignito",
      "Shashank Kamdar"
     ],
     "a": [
      "Zach Mcgowan",
      "Christian Lupica"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Austin Gow",
      "Dustin Rabinowitz"
     ],
     "a": [
      "Jaco De Waal",
      "Alex Pecora"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Ryan Rosen",
      "Yash Shah"
     ],
     "a": [
      "Joshua Mindlin",
      "Joseph Yi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Vaughn Lawrence",
      "Scott Bohrer"
     ],
     "a": [
      "William Lee",
      "Tim Cahalin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Shashank Kamdar",
      "Yash Shah"
     ],
     "a": [
      "Christian Lupica",
      "Tim Cahalin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Ryan Rosen",
      "Vaughn Lawrence"
     ],
     "a": [
      "Derek Callihan",
      "Joshua Mindlin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Brock Hanak",
      "Grant Hanak"
     ],
     "a": [
      "Zach Mcgowan",
      "Jaco De Waal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lou Frignito",
      "Dustin Rabinowitz"
     ],
     "a": [
      "Alex Pecora",
      "Joseph Yi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Vaughn Lawrence",
      "Austin Gow"
     ],
     "a": [
      "Derek Callihan",
      "Joseph Yi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Scott Bohrer",
      "Dustin Rabinowitz"
     ],
     "a": [
      "Alex Pecora",
      "Tim Cahalin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Ryan Rosen",
      "Yash Shah"
     ],
     "a": [
      "Zach Mcgowan",
      "Christian Lupica"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Lou Frignito",
      "Shashank Kamdar"
     ],
     "a": [
      "William Lee",
      "Joshua Mindlin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Shashank Kamdar",
      "Austin Gow"
     ],
     "a": [
      "Jaco De Waal",
      "Joseph Yi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Dustin Rabinowitz",
      "Ryan Rosen"
     ],
     "a": [
      "Tim Cahalin",
      "Derek Callihan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Brock Hanak",
      "Grant Hanak"
     ],
     "a": [
      "Zach Mcgowan",
      "Alex Pecora"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Lou Frignito",
      "Vaughn Lawrence"
     ],
     "a": [
      "William Lee",
      "Christian Lupica"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Austin Gow",
      "Vaughn Lawrence"
     ],
     "a": [
      "Derek Callihan",
      "Tim Cahalin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Scott Bohrer",
      "Ryan Rosen"
     ],
     "a": [
      "Joseph Yi",
      "Jaco De Waal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Lou Frignito",
      "Dustin Rabinowitz"
     ],
     "a": [
      "Zach Mcgowan",
      "Joshua Mindlin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Yash Shah",
      "Grant Hanak"
     ],
     "a": [
      "William Lee",
      "Christian Lupica"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Lou Frignito",
      "Grant Hanak"
     ],
     "a": [
      "Christian Lupica",
      "Jaco De Waal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Dustin Rabinowitz",
      "Vaughn Lawrence"
     ],
     "a": [
      "Derek Callihan",
      "William Lee"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Shashank Kamdar",
      "Ryan Rosen"
     ],
     "a": [
      "Zach Mcgowan",
      "Joshua Mindlin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Brock Hanak",
      "Austin Gow"
     ],
     "a": [
      "Joseph Yi",
      "Alex Pecora"
     ]
    }
   ],
   "subs": [
    "Grant Hanak",
    "Brock Hanak"
   ]
  },
  {
   "result": "away",
   "week": 9,
   "home": "Bounce Tempest",
   "away": "Jersey Devil",
   "time": "2026-10-19T19:30:00",
   "complete": true,
   "homePoints": 625,
   "awayPoints": 638,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Brandyn Schuchart",
      "Josh Knupp"
     ],
     "a": [
      "Caleb Perry-Abner",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Alex Boory",
      "Eric Nguyen"
     ],
     "a": [
      "Matthew Chen",
      "Vaughn Mcclelland"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ashwin Korde",
      "Alex Mihalca"
     ],
     "a": [
      "Sheel Motiwala",
      "Braden Keith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Adriene Khon",
      "Justin Chin"
     ],
     "a": [
      "Brian Barenbaum",
      "Daniel Schwab"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Zyril Carilo",
      "Justin Chin"
     ],
     "a": [
      "Braden Keith",
      "Brian Barenbaum"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Brandyn Schuchart",
      "Adriene Khon"
     ],
     "a": [
      "Caleb Perry-Abner",
      "Matthew Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ashwin Korde",
      "Alex Mihalca"
     ],
     "a": [
      "Vaughn Mcclelland",
      "Daniel Schwab"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Eric Nguyen",
      "Josh Knupp"
     ],
     "a": [
      "Tyler Arsenault",
      "Sheel Motiwala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Alex Mihalca",
      "Alex Boory"
     ],
     "a": [
      "Vaughn Mcclelland",
      "Sheel Motiwala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Ashwin Korde",
      "Justin Chin"
     ],
     "a": [
      "Braden Keith",
      "Brian Barenbaum"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Adriene Khon",
      "Josh Knupp"
     ],
     "a": [
      "Matthew Chen",
      "Daniel Schwab"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 31,
     "as": 33,
     "h": [
      "Brandyn Schuchart",
      "Zyril Carilo"
     ],
     "a": [
      "Caleb Perry-Abner",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Zyril Carilo",
      "Alex Boory"
     ],
     "a": [
      "Caleb Perry-Abner",
      "Daniel Schwab"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Alex Mihalca",
      "Eric Nguyen"
     ],
     "a": [
      "Tyler Arsenault",
      "Brian Barenbaum"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Brandyn Schuchart",
      "Adriene Khon"
     ],
     "a": [
      "Matthew Chen",
      "Braden Keith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ashwin Korde",
      "Josh Knupp"
     ],
     "a": [
      "Vaughn Mcclelland",
      "Sheel Motiwala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Josh Knupp",
      "Eric Nguyen"
     ],
     "a": [
      "Tyler Arsenault",
      "Daniel Schwab"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Brandyn Schuchart",
      "Ashwin Korde"
     ],
     "a": [
      "Matthew Chen",
      "Brian Barenbaum"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Justin Chin",
      "Alex Mihalca"
     ],
     "a": [
      "Vaughn Mcclelland",
      "Braden Keith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Zyril Carilo",
      "Alex Boory"
     ],
     "a": [
      "Caleb Perry-Abner",
      "Sheel Motiwala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Alex Boory",
      "Alex Mihalca"
     ],
     "a": [
      "Braden Keith",
      "Daniel Schwab"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Adriene Khon",
      "Justin Chin"
     ],
     "a": [
      "Caleb Perry-Abner",
      "Vaughn Mcclelland"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Ashwin Korde",
      "Josh Knupp"
     ],
     "a": [
      "Sheel Motiwala",
      "Brian Barenbaum"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Zyril Carilo",
      "Eric Nguyen"
     ],
     "a": [
      "Tyler Arsenault",
      "Matthew Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Adriene Khon",
      "Alex Boory"
     ],
     "a": [
      "Caleb Perry-Abner",
      "Vaughn Mcclelland"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Brandyn Schuchart",
      "Josh Knupp"
     ],
     "a": [
      "Tyler Arsenault",
      "Matthew Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Justin Chin",
      "Ashwin Korde"
     ],
     "a": [
      "Sheel Motiwala",
      "Brian Barenbaum"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Zyril Carilo",
      "Eric Nguyen"
     ],
     "a": [
      "Braden Keith",
      "Daniel Schwab"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Zyril Carilo",
      "Brandyn Schuchart"
     ],
     "a": [
      "Caleb Perry-Abner",
      "Matthew Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Adriene Khon",
      "Josh Knupp"
     ],
     "a": [
      "Tyler Arsenault",
      "Vaughn Mcclelland"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Alex Boory",
      "Eric Nguyen"
     ],
     "a": [
      "Sheel Motiwala",
      "Braden Keith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Justin Chin",
      "Alex Mihalca"
     ],
     "a": [
      "Brian Barenbaum",
      "Daniel Schwab"
     ]
    }
   ],
   "subs": [
    "Caleb Perry-Abner"
   ]
  },
  {
   "result": "home",
   "week": 9,
   "home": "Pickleball Kingdom Watchung",
   "away": "Monroe",
   "time": "2026-10-19T19:30:00",
   "complete": true,
   "homePoints": 498,
   "awayPoints": 397,
   "homeGW": 27,
   "awayGW": 5,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Daniel Gallegos",
      "Ken Velarde"
     ],
     "a": [
      "Nicholas Vanderveer",
      "Julius Degen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Anthony Bonaventura",
      "Kevin Sun"
     ],
     "a": [
      "Rohan Sabharwal",
      "Nirav Solanki"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Christopher Natividad",
      "Drew Youssef"
     ],
     "a": [
      "Ivan Rios",
      "Christopher Venuto"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Emil Pescatore",
      "Zachary Lisojo"
     ],
     "a": [
      "Abhishekh Mehra",
      "Rahul Purwah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Kevin Sun",
      "Anthony Bonaventura"
     ],
     "a": [
      "Julius Degen",
      "Christopher Venuto"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Drew Youssef",
      "Ken Velarde"
     ],
     "a": [
      "Rohan Sabharwal",
      "Rahul Purwah"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Christopher Natividad",
      "Daniel Gallegos"
     ],
     "a": [
      "Ivan Rios",
      "Abhishekh Mehra"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Zachary Lisojo",
      "Emil Pescatore"
     ],
     "a": [
      "Nicholas Vanderveer",
      "Nirav Solanki"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Anthony Bonaventura",
      "Zachary Lisojo"
     ],
     "a": [
      "Nirav Solanki",
      "Rahul Purwah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Emil Pescatore",
      "Ken Velarde"
     ],
     "a": [
      "Julius Degen",
      "Abhishekh Mehra"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "",
      "Daniel Gallegos"
     ],
     "a": [
      "Rohan Sabharwal",
      "Ivan Rios"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kevin Sun",
      "Drew Youssef"
     ],
     "a": [
      "Nicholas Vanderveer",
      "Christopher Venuto"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Christopher Natividad",
      "Ken Velarde"
     ],
     "a": [
      "Julius Degen",
      "Rohan Sabharwal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Zachary Lisojo",
      "Anthony Bonaventura"
     ],
     "a": [
      "Nicholas Vanderveer",
      "Rahul Purwah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Emil Pescatore",
      "Drew Youssef"
     ],
     "a": [
      "Christopher Venuto",
      "Abhishekh Mehra"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Daniel Gallegos",
      "Kevin Sun"
     ],
     "a": [
      "Nirav Solanki",
      "Ivan Rios"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Daniel Gallegos",
      "Anthony Bonaventura"
     ],
     "a": [
      "Nicholas Vanderveer",
      "Abhishekh Mehra"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Zachary Lisojo",
      "Ken Velarde"
     ],
     "a": [
      "Rahul Purwah",
      "Ivan Rios"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Emil Pescatore",
      "Drew Youssef"
     ],
     "a": [
      "Christopher Venuto",
      "Rohan Sabharwal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kevin Sun",
      "Christopher Natividad"
     ],
     "a": [
      "Julius Degen",
      "Nirav Solanki"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ken Velarde",
      "Kevin Sun"
     ],
     "a": [
      "Abhishekh Mehra",
      "Rohan Sabharwal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Christopher Natividad",
      "Emil Pescatore"
     ],
     "a": [
      "Rahul Purwah",
      "Julius Degen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Anthony Bonaventura",
      "Daniel Gallegos"
     ],
     "a": [
      "Christopher Venuto",
      "Nirav Solanki"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Drew Youssef",
      "Zachary Lisojo"
     ],
     "a": [
      "Nicholas Vanderveer",
      "Ivan Rios"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Emil Pescatore",
      ""
     ],
     "a": [
      "Ivan Rios",
      "Julius Degen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Anthony Bonaventura",
      "Ken Velarde"
     ],
     "a": [
      "Abhishekh Mehra",
      "Nirav Solanki"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Zachary Lisojo",
      "Daniel Gallegos"
     ],
     "a": [
      "Nicholas Vanderveer",
      "Rohan Sabharwal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Christopher Natividad",
      "Drew Youssef"
     ],
     "a": [
      "Rahul Purwah",
      "Christopher Venuto"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ken Velarde",
      "Anthony Bonaventura"
     ],
     "a": [
      "Rahul Purwah",
      "Abhishekh Mehra"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Daniel Gallegos",
      "Zachary Lisojo"
     ],
     "a": [
      "Rohan Sabharwal",
      "Christopher Venuto"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Drew Youssef",
      "Emil Pescatore"
     ],
     "a": [
      "Nicholas Vanderveer",
      "Julius Degen"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Christopher Natividad",
      ""
     ],
     "a": [
      "Ivan Rios",
      "Nirav Solanki"
     ]
    }
   ],
   "subs": [
    "Nicholas Vanderveer",
    "Nirav Solanki",
    "Rohan Sabharwal"
   ]
  },
  {
   "result": "home",
   "week": 9,
   "home": "Pickle House",
   "away": "ACE Moorestown",
   "time": "2026-10-19T19:30:00",
   "complete": true,
   "homePoints": 653,
   "awayPoints": 505,
   "homeGW": 26,
   "awayGW": 6,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Ali Husain",
      "Craig Frame"
     ],
     "a": [
      "Daniel Ehala",
      "Bryan Nardone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Mickey Cook",
      "Zach Hollmann"
     ],
     "a": [
      "Marc Harden",
      "Robert Finley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Chris Damato",
      "Matthew Eldridge"
     ],
     "a": [
      "Shayne Clowar",
      "Christopher Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Gopi Narayanan",
      "Al Mancini"
     ],
     "a": [
      "Tyler Marlin",
      "Nachiket Vaidya"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Chris Damato",
      "Mickey Cook"
     ],
     "a": [
      "Riguo Zheng",
      "Bryan Nardone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Ali Husain",
      "Gopi Narayanan"
     ],
     "a": [
      "Robert Finley",
      "Nachiket Vaidya"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Rich Marcovecchio",
      "Dipen Bhatt"
     ],
     "a": [
      "Daniel Ehala",
      "Marc Harden"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Craig Frame",
      "Zach Hollmann"
     ],
     "a": [
      "Shayne Clowar",
      "Tyler Marlin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Ali Husain",
      "Al Mancini"
     ],
     "a": [
      "Riguo Zheng",
      "Shayne Clowar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Dipen Bhatt",
      "Mickey Cook"
     ],
     "a": [
      "Christopher Yang",
      "Bryan Nardone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Chris Damato",
      "Gopi Narayanan"
     ],
     "a": [
      "Tyler Marlin",
      "Daniel Ehala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Rich Marcovecchio",
      "Matthew Eldridge"
     ],
     "a": [
      "Robert Finley",
      "Nachiket Vaidya"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Al Mancini",
      "Mickey Cook"
     ],
     "a": [
      "Daniel Ehala",
      "Shayne Clowar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Craig Frame",
      "Matthew Eldridge"
     ],
     "a": [
      "Robert Finley",
      "Tyler Marlin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Ali Husain",
      "Dipen Bhatt"
     ],
     "a": [
      "Riguo Zheng",
      "Marc Harden"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Zach Hollmann",
      "Rich Marcovecchio"
     ],
     "a": [
      "Nachiket Vaidya",
      "Christopher Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Chris Damato",
      "Zach Hollmann"
     ],
     "a": [
      "Marc Harden",
      "Tyler Marlin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Ali Husain",
      "Rich Marcovecchio"
     ],
     "a": [
      "Robert Finley",
      "Shayne Clowar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Matthew Eldridge",
      "Gopi Narayanan"
     ],
     "a": [
      "Nachiket Vaidya",
      "Bryan Nardone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Al Mancini",
      "Dipen Bhatt"
     ],
     "a": [
      "Christopher Yang",
      "Riguo Zheng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Dipen Bhatt",
      "Zach Hollmann"
     ],
     "a": [
      "Christopher Yang",
      "Riguo Zheng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Al Mancini",
      "Rich Marcovecchio"
     ],
     "a": [
      "Daniel Ehala",
      "Bryan Nardone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Mickey Cook",
      "Craig Frame"
     ],
     "a": [
      "Tyler Marlin",
      "Shayne Clowar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Chris Damato",
      "Ali Husain"
     ],
     "a": [
      "Nachiket Vaidya",
      "Marc Harden"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Chris Damato",
      "Al Mancini"
     ],
     "a": [
      "Robert Finley",
      "Shayne Clowar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Mickey Cook",
      "Gopi Narayanan"
     ],
     "a": [
      "Christopher Yang",
      "Daniel Ehala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Matthew Eldridge",
      "Zach Hollmann"
     ],
     "a": [
      "Marc Harden",
      "Bryan Nardone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Dipen Bhatt",
      "Craig Frame"
     ],
     "a": [
      "Riguo Zheng",
      "Tyler Marlin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Zach Hollmann",
      "Craig Frame"
     ],
     "a": [
      "Riguo Zheng",
      "Robert Finley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Mickey Cook",
      "Rich Marcovecchio"
     ],
     "a": [
      "Tyler Marlin",
      "Christopher Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Matthew Eldridge",
      "Ali Husain"
     ],
     "a": [
      "Nachiket Vaidya",
      "Daniel Ehala"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Chris Damato",
      "Gopi Narayanan"
     ],
     "a": [
      "Shayne Clowar",
      "Bryan Nardone"
     ]
    }
   ],
   "subs": [
    "Christopher Yang"
   ]
  },
  {
   "result": "home",
   "week": 9,
   "home": "Premiere",
   "away": "Flemington",
   "time": "2026-10-24T09:00:00",
   "complete": true,
   "homePoints": 626,
   "awayPoints": 609,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Gary White",
      "Neil Ottrando"
     ],
     "a": [
      "Robbie Oddy",
      "Tim Dowd"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Boris Tserlin",
      "Chris Frangipane"
     ],
     "a": [
      "Austin Williams",
      "Andy Ead"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Michael Rapaglia",
      "Joseph Lynskey"
     ],
     "a": [
      "Hany Ibrahim",
      "Pranav Tailor"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Nicholas Yandoli",
      "Nicholas Como"
     ],
     "a": [
      "Matthew Marletta",
      "Aadhar Rohila"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Neil Ottrando",
      "Gary White"
     ],
     "a": [
      "Robbie Oddy",
      "Tim Dowd"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Michael Rapaglia",
      "Joseph Lynskey"
     ],
     "a": [
      "Hany Ibrahim",
      "Aadhar Rohila"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Boris Tserlin",
      "Chris Frangipane"
     ],
     "a": [
      "Austin Williams",
      "Andy Ead"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Nicholas Como",
      "Nicholas Yandoli"
     ],
     "a": [
      "Matthew Marletta",
      "Pranav Tailor"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Boris Tserlin",
      "Nicholas Como"
     ],
     "a": [
      "Robbie Oddy",
      "Austin Williams"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Chris Frangipane",
      "Nicholas Yandoli"
     ],
     "a": [
      "Matthew Marletta",
      "Andy Ead"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Michael Rapaglia",
      "Gary White"
     ],
     "a": [
      "Aadhar Rohila",
      "Hany Ibrahim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Neil Ottrando",
      "Joseph Lynskey"
     ],
     "a": [
      "Tim Dowd",
      "Pranav Tailor"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Boris Tserlin",
      "Nicholas Como"
     ],
     "a": [
      "Robbie Oddy",
      "Austin Williams"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Gary White",
      "Michael Rapaglia"
     ],
     "a": [
      "Tim Dowd",
      "Andy Ead"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Chris Frangipane",
      "Nicholas Yandoli"
     ],
     "a": [
      "Aadhar Rohila",
      "Pranav Tailor"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Neil Ottrando",
      "Joseph Lynskey"
     ],
     "a": [
      "Matthew Marletta",
      "Hany Ibrahim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Nicholas Como",
      "Neil Ottrando"
     ],
     "a": [
      "Robbie Oddy",
      "Hany Ibrahim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Chris Frangipane",
      "Michael Rapaglia"
     ],
     "a": [
      "Tim Dowd",
      "Andy Ead"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Boris Tserlin",
      "Gary White"
     ],
     "a": [
      "Austin Williams",
      "Aadhar Rohila"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Nicholas Yandoli",
      "Joseph Lynskey"
     ],
     "a": [
      "Pranav Tailor",
      "Matthew Marletta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Nicholas Como",
      "Neil Ottrando"
     ],
     "a": [
      "Robbie Oddy",
      "Hany Ibrahim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Boris Tserlin",
      "Gary White"
     ],
     "a": [
      "Austin Williams",
      "Andy Ead"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Joseph Lynskey",
      "Nicholas Yandoli"
     ],
     "a": [
      "Matthew Marletta",
      "Aadhar Rohila"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Chris Frangipane",
      "Michael Rapaglia"
     ],
     "a": [
      "Tim Dowd",
      "Pranav Tailor"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Chris Frangipane",
      "Gary White"
     ],
     "a": [
      "Robbie Oddy",
      "Andy Ead"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Michael Rapaglia",
      "Nicholas Yandoli"
     ],
     "a": [
      "Hany Ibrahim",
      "Pranav Tailor"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Boris Tserlin",
      "Neil Ottrando"
     ],
     "a": [
      "Austin Williams",
      "Aadhar Rohila"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Nicholas Como",
      "Joseph Lynskey"
     ],
     "a": [
      "Tim Dowd",
      "Matthew Marletta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Nicholas Como",
      "Joseph Lynskey"
     ],
     "a": [
      "Matthew Marletta",
      "Andy Ead"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Boris Tserlin",
      "Neil Ottrando"
     ],
     "a": [
      "Austin Williams",
      "Hany Ibrahim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Chris Frangipane",
      "Gary White"
     ],
     "a": [
      "Tim Dowd",
      "Aadhar Rohila"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Nicholas Yandoli",
      "Michael Rapaglia"
     ],
     "a": [
      "Robbie Oddy",
      "Pranav Tailor"
     ]
    }
   ],
   "subs": [
    "Aadhar Rohila",
    "Matthew Marletta",
    "Pranav Tailor"
   ]
  },
  {
   "result": null,
   "week": 9,
   "home": "Jersey Pickleball Club",
   "away": "Monroe",
   "time": "2026-10-24T09:00:00",
   "complete": false
  },
  {
   "result": "away",
   "week": 9,
   "home": "Picklr Newtown",
   "away": "Bounce Malvern",
   "time": "2026-10-24T12:00:00",
   "complete": true,
   "homePoints": 518,
   "awayPoints": 660,
   "homeGW": 5,
   "awayGW": 27,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Dan Lougheed",
      "Samuel Darla"
     ],
     "a": [
      "Lou Frignito",
      "Vaughn Lawrence"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Christian Lupica",
      "Tim Cahalin"
     ],
     "a": [
      "Scott Bohrer",
      "Harvey Mitchell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jerry Li",
      "William Lee"
     ],
     "a": [
      "Shawn Ganow",
      "Jordan Long"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Joshua Mindlin",
      "Jeremy Buckley"
     ],
     "a": [
      "Dustin Rabinowitz",
      "Austin Gow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "William Lee",
      "Christian Lupica"
     ],
     "a": [
      "Dustin Rabinowitz",
      "Shawn Ganow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Alex Pecora",
      "Jerry Li"
     ],
     "a": [
      "Austin Gow",
      "Jordan Long"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Tim Cahalin",
      "Dan Lougheed"
     ],
     "a": [
      "Harvey Mitchell",
      "Lou Frignito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jeremy Buckley",
      "Samuel Darla"
     ],
     "a": [
      "Vaughn Lawrence",
      "Scott Bohrer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Dan Lougheed",
      "Samuel Darla"
     ],
     "a": [
      "Vaughn Lawrence",
      "Austin Gow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Alex Pecora",
      "Tim Cahalin"
     ],
     "a": [
      "Harvey Mitchell",
      "Jordan Long"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "William Lee",
      "Christian Lupica"
     ],
     "a": [
      "Shawn Ganow",
      "Scott Bohrer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Joshua Mindlin",
      "Jerry Li"
     ],
     "a": [
      "Lou Frignito",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Joshua Mindlin",
      "Jeremy Buckley"
     ],
     "a": [
      "Lou Frignito",
      "Shawn Ganow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Christian Lupica",
      "Alex Pecora"
     ],
     "a": [
      "Austin Gow",
      "Harvey Mitchell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Dan Lougheed",
      "Jerry Li"
     ],
     "a": [
      "Vaughn Lawrence",
      "Jordan Long"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "William Lee",
      "Tim Cahalin"
     ],
     "a": [
      "Dustin Rabinowitz",
      "Scott Bohrer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Samuel Darla",
      "Jeremy Buckley"
     ],
     "a": [
      "Harvey Mitchell",
      "Vaughn Lawrence"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Joshua Mindlin",
      "Tim Cahalin"
     ],
     "a": [
      "Austin Gow",
      "Jordan Long"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Alex Pecora",
      "Jerry Li"
     ],
     "a": [
      "Lou Frignito",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "William Lee",
      "Dan Lougheed"
     ],
     "a": [
      "Shawn Ganow",
      "Scott Bohrer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Christian Lupica",
      "Tim Cahalin"
     ],
     "a": [
      "Harvey Mitchell",
      "Jordan Long"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Joshua Mindlin",
      "Samuel Darla"
     ],
     "a": [
      "Scott Bohrer",
      "Vaughn Lawrence"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "William Lee",
      "Alex Pecora"
     ],
     "a": [
      "Dustin Rabinowitz",
      "Shawn Ganow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Dan Lougheed",
      "Jeremy Buckley"
     ],
     "a": [
      "Austin Gow",
      "Lou Frignito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "William Lee",
      "Samuel Darla"
     ],
     "a": [
      "Harvey Mitchell",
      "Austin Gow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Christian Lupica",
      "Jerry Li"
     ],
     "a": [
      "Vaughn Lawrence",
      "Jordan Long"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Joshua Mindlin",
      "Alex Pecora"
     ],
     "a": [
      "Shawn Ganow",
      "Lou Frignito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Tim Cahalin",
      "Jeremy Buckley"
     ],
     "a": [
      "Dustin Rabinowitz",
      "Scott Bohrer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "William Lee",
      "Samuel Darla"
     ],
     "a": [
      "Harvey Mitchell",
      "Scott Bohrer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Christian Lupica",
      "Dan Lougheed"
     ],
     "a": [
      "Lou Frignito",
      "Vaughn Lawrence"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jerry Li",
      "Jeremy Buckley"
     ],
     "a": [
      "Shawn Ganow",
      "Jordan Long"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Joshua Mindlin",
      "Alex Pecora"
     ],
     "a": [
      "Dustin Rabinowitz",
      "Austin Gow"
     ]
    }
   ],
   "subs": [
    "Samuel Darla",
    "Dan Lougheed",
    "Jerry Li",
    "Harvey Mitchell",
    "Jeremy Buckley"
   ]
  },
  {
   "result": "away",
   "week": 9,
   "home": "Dill Dinkers Freehold",
   "away": "Pickleball Kingdom Watchung",
   "time": "2026-10-24T15:00:00",
   "complete": true,
   "homePoints": 606,
   "awayPoints": 662,
   "homeGW": 11,
   "awayGW": 21,
   "games": [
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Yoon Choi",
      "Harrison Mui"
     ],
     "a": [
      "Kevin Sun",
      "Nathaniel Flores"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Tom Laiso",
      "Eric Lin"
     ],
     "a": [
      "Anthony Bonaventura",
      "Eric Jiang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Caesar Gene",
      "Marcin Glowacki"
     ],
     "a": [
      "Daniel Gallegos",
      "Gautham Bondugula"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Adam Weinstock",
      "Jim Pagano"
     ],
     "a": [
      "Ken Velarde",
      "Anthony Leung"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Yoon Choi",
      "Tom Laiso"
     ],
     "a": [
      "Anthony Leung",
      "Ken Velarde"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Caesar Gene",
      "Harrison Mui"
     ],
     "a": [
      "Gautham Bondugula",
      "Daniel Gallegos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Eric Lin",
      "Adam Weinstock"
     ],
     "a": [
      "Anthony Bonaventura",
      "Eric Jiang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Marcin Glowacki",
      "Jim Pagano"
     ],
     "a": [
      "Kevin Sun",
      "Nathaniel Flores"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Yoon Choi",
      "Eric Lin"
     ],
     "a": [
      "Eric Jiang",
      "Anthony Leung"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Tom Laiso",
      "Adam Weinstock"
     ],
     "a": [
      "Kevin Sun",
      "Daniel Gallegos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jim Pagano",
      "Caesar Gene"
     ],
     "a": [
      "Ken Velarde",
      "Nathaniel Flores"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Harrison Mui",
      "Marcin Glowacki"
     ],
     "a": [
      "Anthony Bonaventura",
      "Gautham Bondugula"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Yoon Choi",
      "Adam Weinstock"
     ],
     "a": [
      "Kevin Sun",
      "Daniel Gallegos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Eric Lin",
      "Harrison Mui"
     ],
     "a": [
      "Eric Jiang",
      "Anthony Leung"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Tom Laiso",
      "Marcin Glowacki"
     ],
     "a": [
      "Anthony Bonaventura",
      "Gautham Bondugula"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Caesar Gene",
      "Jim Pagano"
     ],
     "a": [
      "Nathaniel Flores",
      "Ken Velarde"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Yoon Choi",
      "Marcin Glowacki"
     ],
     "a": [
      "Daniel Gallegos",
      "Eric Jiang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Tom Laiso",
      "Harrison Mui"
     ],
     "a": [
      "Gautham Bondugula",
      "Anthony Leung"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Caesar Gene",
      "Eric Lin"
     ],
     "a": [
      "Kevin Sun",
      "Ken Velarde"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Adam Weinstock",
      "Jim Pagano"
     ],
     "a": [
      "Anthony Bonaventura",
      "Nathaniel Flores"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Marcin Glowacki",
      "Adam Weinstock"
     ],
     "a": [
      "Eric Jiang",
      "Daniel Gallegos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Eric Lin",
      "Jim Pagano"
     ],
     "a": [
      "Kevin Sun",
      "Ken Velarde"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Tom Laiso",
      "Yoon Choi"
     ],
     "a": [
      "Anthony Leung",
      "Gautham Bondugula"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Caesar Gene",
      "Harrison Mui"
     ],
     "a": [
      "Anthony Bonaventura",
      "Nathaniel Flores"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Yoon Choi",
      "Harrison Mui"
     ],
     "a": [
      "Eric Jiang",
      "Gautham Bondugula"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Eric Lin",
      "Jim Pagano"
     ],
     "a": [
      "Anthony Leung",
      "Kevin Sun"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Tom Laiso",
      "Caesar Gene"
     ],
     "a": [
      "Anthony Bonaventura",
      "Ken Velarde"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Adam Weinstock",
      "Marcin Glowacki"
     ],
     "a": [
      "Nathaniel Flores",
      "Daniel Gallegos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Adam Weinstock",
      "Harrison Mui"
     ],
     "a": [
      "Eric Jiang",
      "Gautham Bondugula"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jim Pagano",
      "Yoon Choi"
     ],
     "a": [
      "Anthony Bonaventura",
      "Ken Velarde"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Tom Laiso",
      "Marcin Glowacki"
     ],
     "a": [
      "Kevin Sun",
      "Anthony Leung"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Caesar Gene",
      "Eric Lin"
     ],
     "a": [
      "Daniel Gallegos",
      "Nathaniel Flores"
     ]
    }
   ],
   "subs": [
    "Nathaniel Flores",
    "Anthony Leung",
    "Eric Lin",
    "Jim Pagano"
   ]
  },
  {
   "result": null,
   "week": 9,
   "home": "ACE Moorestown",
   "away": "Jersey Devil",
   "time": "2026-10-24T18:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Premiere",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-10-26T19:00:00",
   "complete": false,
   "games": [
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Neel Goyal",
      "Ian Chin"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Jason Makarevic",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Thomas Connolly",
      "Jake Laifer"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Vivek Kumar",
      "Elliott Albanese"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Thomas Connolly",
      "Jake Laifer"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Elliott Albanese",
      "Vivek Kumar"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Ian Chin",
      "Neel Goyal"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Camrin Cronheim",
      "Jason Makarevic"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Camrin Cronheim",
      "Elliott Albanese"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Neel Goyal",
      "Jason Makarevic"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Thomas Connolly",
      "Ian Chin"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Jake Laifer",
      "Vivek Kumar"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Thomas Connolly",
      "Ian Chin"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Jake Laifer",
      "Vivek Kumar"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Camrin Cronheim",
      "Elliott Albanese"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Jason Makarevic",
      "Neel Goyal"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Thomas Connolly",
      "Vivek Kumar"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Ian Chin",
      "Elliott Albanese"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Jason Makarevic",
      "Jake Laifer"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Camrin Cronheim",
      "Neel Goyal"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Jason Makarevic",
      "Jake Laifer"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Neel Goyal",
      "Camrin Cronheim"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Ian Chin",
      "Elliott Albanese"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Thomas Connolly",
      "Vivek Kumar"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Camrin Cronheim",
      "Vivek Kumar"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Jason Makarevic",
      "Ian Chin"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Thomas Connolly",
      "Neel Goyal"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Elliott Albanese",
      "Jake Laifer"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Thomas Connolly",
      "Neel Goyal"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Elliott Albanese",
      "Jake Laifer"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Camrin Cronheim",
      "Vivek Kumar"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Jason Makarevic",
      "Ian Chin"
     ]
    }
   ]
  },
  {
   "result": null,
   "week": 10,
   "home": "Pickle House",
   "away": "Jersey Devil",
   "time": "2026-10-26T19:30:00",
   "complete": false,
   "games": [
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Vince Abate",
      "Vaughn Mcclelland"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Tyler Arsenault",
      "Ryan Furman"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Sheel Motiwala",
      "Stephen Conger"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Braden Keith",
      "Brian Barenbaum"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Vince Abate",
      "Vaughn Mcclelland"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Tyler Arsenault",
      "Ryan Furman"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Sheel Motiwala",
      "Stephen Conger"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Braden Keith",
      "Brian Barenbaum"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Tyler Arsenault",
      "Vince Abate"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Stephen Conger",
      "Brian Barenbaum"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Ryan Furman",
      "Braden Keith"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Vaughn Mcclelland",
      "Sheel Motiwala"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Tyler Arsenault",
      "Vince Abate"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Ryan Furman",
      "Braden Keith"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Brian Barenbaum",
      "Stephen Conger"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Sheel Motiwala",
      "Vaughn Mcclelland"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Sheel Motiwala",
      "Brian Barenbaum"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Vaughn Mcclelland",
      "Ryan Furman"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Vince Abate",
      "Braden Keith"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Tyler Arsenault",
      "Stephen Conger"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Ryan Furman",
      "Vaughn Mcclelland"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Vince Abate",
      "Braden Keith"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Sheel Motiwala",
      "Brian Barenbaum"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Tyler Arsenault",
      "Stephen Conger"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Tyler Arsenault",
      "Vaughn Mcclelland"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Ryan Furman",
      "Brian Barenbaum"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Sheel Motiwala",
      "Braden Keith"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Vince Abate",
      "Stephen Conger"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Vince Abate",
      "Stephen Conger"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Sheel Motiwala",
      "Braden Keith"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Brian Barenbaum",
      "Ryan Furman"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Tyler Arsenault",
      "Vaughn Mcclelland"
     ]
    }
   ]
  },
  {
   "result": null,
   "week": 10,
   "home": "Monroe",
   "away": "Dill Dinkers Freehold",
   "time": "2026-10-26T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Jersey Pickleball Club",
   "away": "Flemington",
   "time": "2026-10-26T19:30:00",
   "complete": false,
   "games": [
    {
     "t": "male",
     "h": [
      "Christopher Ullo",
      "Kevin Wysoczynski"
     ],
     "a": [
      "Robbie Oddy",
      "Sean O'Connell"
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "male",
     "h": [
      "Anthony Bradford Bisignano",
      "Wasib Malik"
     ],
     "a": [
      "Tim Dowd",
      "Andy Ead"
     ]
    },
    {
     "t": "male",
     "h": [
      "Matt Schall",
      "Gary Sidhu"
     ],
     "a": [
      "Shahar Gelber",
      "Hany Ibrahim"
     ]
    },
    {
     "t": "male",
     "h": [
      "Daniel Phillips",
      "Simon Rosenwasser"
     ],
     "a": [
      "Frank Clark",
      "Jay Alquiros"
     ]
    },
    {
     "t": "male",
     "h": [
      "Wasib Malik",
      "Gary Sidhu"
     ],
     "a": [
      "Robbie Oddy",
      "Sean O'Connell"
     ]
    },
    {
     "t": "male",
     "h": [
      "Anthony Bradford Bisignano",
      "Matt Schall"
     ],
     "a": [
      "Andy Ead",
      "Tim Dowd"
     ]
    },
    {
     "t": "male",
     "h": [
      "Christopher Ullo",
      "Kevin Wysoczynski"
     ],
     "a": [
      "Shahar Gelber",
      "Hany Ibrahim"
     ],
     "hSub": [
      1,
      0
     ]
    },
    {
     "t": "male",
     "h": [
      "Daniel Phillips",
      "Simon Rosenwasser"
     ],
     "a": [
      "Jay Alquiros",
      "Frank Clark"
     ]
    },
    {
     "t": "male",
     "h": [
      "Matt Schall",
      "Simon Rosenwasser"
     ],
     "a": [
      "Robbie Oddy",
      "Tim Dowd"
     ]
    },
    {
     "t": "male",
     "h": [
      "Gary Sidhu",
      "Kevin Wysoczynski"
     ],
     "a": [
      "Shahar Gelber",
      "Andy Ead"
     ]
    },
    {
     "t": "male",
     "h": [
      "Anthony Bradford Bisignano",
      "Christopher Ullo"
     ],
     "a": [
      "Sean O'Connell",
      "Jay Alquiros"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Daniel Phillips",
      "Wasib Malik"
     ],
     "a": [
      "Frank Clark",
      "Hany Ibrahim"
     ]
    },
    {
     "t": "male",
     "h": [
      "Matt Schall",
      "Simon Rosenwasser"
     ],
     "a": [
      "Robbie Oddy",
      "Tim Dowd"
     ]
    },
    {
     "t": "male",
     "h": [
      "Kevin Wysoczynski",
      "Gary Sidhu"
     ],
     "a": [
      "Shahar Gelber",
      "Andy Ead"
     ]
    },
    {
     "t": "male",
     "h": [
      "Daniel Phillips",
      "Wasib Malik"
     ],
     "a": [
      "Sean O'Connell",
      "Jay Alquiros"
     ]
    },
    {
     "t": "male",
     "h": [
      "Anthony Bradford Bisignano",
      "Christopher Ullo"
     ],
     "a": [
      "Hany Ibrahim",
      "Frank Clark"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Gary Sidhu",
      "Simon Rosenwasser"
     ],
     "a": [
      "Robbie Oddy",
      "Hany Ibrahim"
     ]
    },
    {
     "t": "male",
     "h": [
      "Kevin Wysoczynski",
      "Wasib Malik"
     ],
     "a": [
      "Andy Ead",
      "Jay Alquiros"
     ]
    },
    {
     "t": "male",
     "h": [
      "Matt Schall",
      "Christopher Ullo"
     ],
     "a": [
      "Shahar Gelber",
      "Sean O'Connell"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Daniel Phillips",
      "Anthony Bradford Bisignano"
     ],
     "a": [
      "Frank Clark",
      "Tim Dowd"
     ]
    },
    {
     "t": "male",
     "h": [
      "Gary Sidhu",
      "Simon Rosenwasser"
     ],
     "a": [
      "Robbie Oddy",
      "Hany Ibrahim"
     ]
    },
    {
     "t": "male",
     "h": [
      "Matt Schall",
      "Christopher Ullo"
     ],
     "a": [
      "Shahar Gelber",
      "Sean O'Connell"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Anthony Bradford Bisignano",
      "Wasib Malik"
     ],
     "a": [
      "Tim Dowd",
      "Frank Clark"
     ]
    },
    {
     "t": "male",
     "h": [
      "Daniel Phillips",
      "Kevin Wysoczynski"
     ],
     "a": [
      "Andy Ead",
      "Jay Alquiros"
     ]
    },
    {
     "t": "male",
     "h": [
      "Wasib Malik",
      "Christopher Ullo"
     ],
     "a": [
      "Robbie Oddy",
      "Andy Ead"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Matt Schall",
      "Kevin Wysoczynski"
     ],
     "a": [
      "Shahar Gelber",
      "Tim Dowd"
     ]
    },
    {
     "t": "male",
     "h": [
      "Gary Sidhu",
      "Daniel Phillips"
     ],
     "a": [
      "Sean O'Connell",
      "Frank Clark"
     ]
    },
    {
     "t": "male",
     "h": [
      "Simon Rosenwasser",
      "Anthony Bradford Bisignano"
     ],
     "a": [
      "Hany Ibrahim",
      "Jay Alquiros"
     ]
    },
    {
     "t": "male",
     "h": [
      "Gary Sidhu",
      "Christopher Ullo"
     ],
     "a": [
      "Robbie Oddy",
      "Andy Ead"
     ],
     "hSub": [
      0,
      1
     ]
    },
    {
     "t": "male",
     "h": [
      "Matt Schall",
      "Kevin Wysoczynski"
     ],
     "a": [
      "Shahar Gelber",
      "Tim Dowd"
     ]
    },
    {
     "t": "male",
     "h": [
      "Simon Rosenwasser",
      "Wasib Malik"
     ],
     "a": [
      "Sean O'Connell",
      "Frank Clark"
     ]
    },
    {
     "t": "male",
     "h": [
      "Anthony Bradford Bisignano",
      "Daniel Phillips"
     ],
     "a": [
      "Hany Ibrahim",
      "Jay Alquiros"
     ]
    }
   ]
  },
  {
   "result": null,
   "week": 10,
   "home": "Bounce Tempest",
   "away": "Bounce Malvern",
   "time": "2026-10-26T19:30:00",
   "complete": false,
   "games": [
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Shashank Kamdar",
      "Austin Gow"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Dustin Rabinowitz",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Jeff Zamorski",
      "Shawn Ganow"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Lou Frignito",
      "Vaughn Lawrence"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Jeff Zamorski",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Shashank Kamdar",
      "Lou Frignito"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Austin Gow",
      "Shawn Ganow"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Vaughn Lawrence",
      "Ryan Rosen"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Lou Frignito",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Jeff Zamorski",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Ryan Rosen",
      "Shawn Ganow"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Shashank Kamdar",
      "Austin Gow"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Vaughn Lawrence",
      "Austin Gow"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Ryan Rosen",
      "Jeff Zamorski"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Mark Kilimnik",
      "Lou Frignito"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Shashank Kamdar",
      "Shawn Ganow"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Dustin Rabinowitz",
      "Vaughn Lawrence"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Shashank Kamdar",
      "Lou Frignito"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Ryan Rosen",
      "Shawn Ganow"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Mark Kilimnik",
      "Austin Gow"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Shawn Ganow",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Shashank Kamdar",
      "Jeff Zamorski"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Lou Frignito",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Vaughn Lawrence",
      "Ryan Rosen"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Jeff Zamorski",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Lou Frignito",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Austin Gow",
      "Shawn Ganow"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Shashank Kamdar",
      "Ryan Rosen"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Mark Kilimnik",
      "Austin Gow"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Shashank Kamdar",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Jeff Zamorski",
      "Ryan Rosen"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Vaughn Lawrence",
      "Lou Frignito"
     ]
    }
   ]
  },
  {
   "result": null,
   "week": 10,
   "home": "Picklr Newtown",
   "away": "ACE Moorestown",
   "time": "2026-10-26T19:30:00",
   "complete": false,
   "games": [
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Daniel Ehala",
      "Bryan Nardone"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Matthew Mintz",
      "Raaj Singh"
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
      "Chase Thomas",
      "Riguo Zheng"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Nachiket Vaidya",
      "Tyler Marlin"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Shayne Clowar",
      "Riguo Zheng"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Chase Thomas",
      "Bryan Nardone"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Tyler Marlin",
      "Nachiket Vaidya"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Daniel Ehala",
      "Matthew Mintz"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Daniel Ehala",
      "Shayne Clowar"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Matthew Mintz",
      "Tyler Marlin"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Nachiket Vaidya",
      "Raaj Singh"
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
      "Bryan Nardone",
      "Riguo Zheng"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Tyler Marlin",
      "Matthew Mintz"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Raaj Singh",
      "Chase Thomas"
     ],
     "aSub": [
      1,
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
      "Nachiket Vaidya",
      "Daniel Ehala"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Shayne Clowar",
      "Bryan Nardone"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Matthew Mintz",
      "Nachiket Vaidya"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Shayne Clowar",
      "Tyler Marlin"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Chase Thomas",
      "Raaj Singh"
     ],
     "aSub": [
      1,
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
      "Riguo Zheng",
      "Bryan Nardone"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Chase Thomas",
      "Daniel Ehala"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Matthew Mintz",
      "Nachiket Vaidya"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Tyler Marlin",
      "Shayne Clowar"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Raaj Singh",
      "Riguo Zheng"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Matthew Mintz",
      "Raaj Singh"
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
      "Riguo Zheng",
      "Shayne Clowar"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Chase Thomas",
      "Bryan Nardone"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Tyler Marlin",
      "Daniel Ehala"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Riguo Zheng",
      "Tyler Marlin"
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Chase Thomas",
      "Shayne Clowar"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Raaj Singh",
      "Nachiket Vaidya"
     ],
     "aSub": [
      1,
      0
     ]
    },
    {
     "t": "male",
     "h": [
      "",
      ""
     ],
     "a": [
      "Daniel Ehala",
      "Bryan Nardone"
     ]
    }
   ]
  },
  {
   "result": null,
   "week": 11,
   "home": "Picklr Newtown",
   "away": "Bounce Tempest",
   "time": "2026-11-02T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Dill Dinkers Freehold",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-11-02T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Monroe",
   "away": "Premiere",
   "time": "2026-11-02T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Jersey Devil",
   "away": "ACE Moorestown",
   "time": "2026-11-02T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Bounce Malvern",
   "away": "Pickle House",
   "time": "2026-11-02T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Pickleball Kingdom Watchung",
   "away": "Jersey Pickleball Club",
   "time": "2026-11-02T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Dill Dinkers Freehold",
   "away": "Premiere",
   "time": "2026-11-09T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Monroe",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-11-09T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Jersey Devil",
   "away": "Bounce Malvern",
   "time": "2026-11-09T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Pickleball Kingdom Watchung",
   "away": "Flemington",
   "time": "2026-11-09T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 13,
   "home": "Flemington",
   "away": "Jersey Pickleball Club",
   "time": "2026-11-16T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 13,
   "home": "Dill Dinkers Freehold",
   "away": "Monroe",
   "time": "2026-11-16T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 13,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Premiere",
   "time": "2026-11-16T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 13,
   "home": "Pickle House",
   "away": "ACE Moorestown",
   "time": "2026-11-16T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 13,
   "home": "Bounce Malvern",
   "away": "Bounce Tempest",
   "time": "2026-11-16T19:30:00",
   "complete": false
  }
 ],
 "playoffs": [],
 "extraPlayerIds": {
  "Jim Darcangelo": "0530512b-466d-4ff7-9e89-7961b4a63110",
  "Jonah Fliegelman": "1070bcd5-fdff-4adc-8d03-460a208fe4e8",
  "Meet Patel": "455edf3d-7568-49ab-b20b-4b66591ed544",
  "Royce Chan": "68274c39-0102-4554-978e-1aa50a0b3fba",
  "Santhosh Pillai": "7d25c9f9-c478-402a-9139-cc8781686a8e",
  "Adam Beck": "7d836ecc-e553-4966-9c12-2dc698a545d0",
  "Jordan Brochin": "a4176c65-8252-4eee-b2cb-28b8b7f1f036",
  "Matthew Schwartz": "a432d3e0-17c2-4741-a4b2-7f72b7a81a5f",
  "Ethan Rosen": "dae9f061-a8d1-4c21-97b1-cf7cd9e60322"
 },
 "availableSubs": [
  {
   "name": "Darren Johnson",
   "playerId": "00092e4b-b019-43ae-bfef-503e1fc6f657",
   "gender": "Male",
   "team": "Bounce Tempest",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Vincent Tran",
   "playerId": "03a4e22a-6242-459c-8120-58d0650413a9",
   "gender": "Male",
   "team": "Bounce Tempest",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Jim Darcangelo",
   "playerId": "0530512b-466d-4ff7-9e89-7961b4a63110",
   "gender": "Male",
   "team": "Bounce Malvern",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Aadhar Rohila",
   "playerId": "05dac392-82dc-4f06-bfea-39887b921722",
   "gender": "Male",
   "team": "Flemington",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Clayton Schmucker",
   "playerId": "0be72348-4a00-413e-bf40-df6824c3cca3",
   "gender": "Male",
   "team": "Picklr Newtown",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Dean Tridente",
   "playerId": "0c14b44f-7a46-464e-a577-f8f9d6d24e6d",
   "gender": "Male",
   "team": "Jersey Devil",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Jonah Fliegelman",
   "playerId": "1070bcd5-fdff-4adc-8d03-460a208fe4e8",
   "gender": "Male",
   "team": "Picklr Newtown",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Michael Taylor",
   "playerId": "23871699-a12b-4eb6-89cb-62fec790e3fb",
   "gender": "Male",
   "team": "Jersey Devil",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Samuel Darla",
   "playerId": "2e946057-0cf8-4375-b401-9c4e475a894f",
   "gender": "Male",
   "team": "Picklr Newtown",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Nathaniel Flores",
   "playerId": "31194d9a-69bf-4949-92b6-d5376144b8c5",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Nicholas Howcumfu",
   "playerId": "31ce4087-c3ba-4db5-878a-c4c19a52f2a3",
   "gender": "Male",
   "team": "Bounce Tempest",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Craig Brown",
   "playerId": "38d82d4c-1321-4c6b-8b93-bfbd8439fcac",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Steven Gregov",
   "playerId": "3efad314-83fb-4441-a7bf-510228cea1f8",
   "gender": "Male",
   "team": "Flemington",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Christopher Ullo",
   "playerId": "40abb6aa-9678-431b-8b5c-6f140f00c5bc",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Geoff Watson",
   "playerId": "41191982-ca10-4665-8eb2-6d5231b4a0c4",
   "gender": "Male",
   "team": "Flemington",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "David Osborne",
   "playerId": "418e7ba5-3e06-40ec-9b83-19d3bf10c9cb",
   "gender": "Male",
   "team": "Flemington",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Grant Hanak",
   "playerId": "44a0a4da-e7cb-4037-9018-97544dfce248",
   "gender": "Male",
   "team": "Bounce Malvern",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Kevin Lin",
   "playerId": "44bbc794-d40d-4fbf-a59e-ddb785496f21",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Meet Patel",
   "playerId": "455edf3d-7568-49ab-b20b-4b66591ed544",
   "gender": "Male",
   "team": "Monroe",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Damien Stahl",
   "playerId": "45d2cd6f-4816-46b2-8e17-fab766cdb87e",
   "gender": "Male",
   "team": "Jersey Devil",
   "isCaptain": false,
   "outsideSub": false
  },
  {
   "name": "Anthony Leung",
   "playerId": "48457f37-29a2-47e7-8b2e-62316ad44feb",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Ethan Henigan",
   "playerId": "4a1d4e3a-07b2-4575-b80d-6d160b0c7a23",
   "gender": "Male",
   "team": "Picklr Newtown",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Andrew Cooley",
   "playerId": "4bc5dc80-f744-41e1-ab6e-a02c600abed8",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Eric Lin",
   "playerId": "4ce1c715-b187-47c5-b6dc-d079f802499d",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Nicholas Vanderveer",
   "playerId": "4d33c53f-a066-4543-b2cf-313c11165227",
   "gender": "Male",
   "team": "Monroe",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Andre Cristobal",
   "playerId": "50d796da-0ac2-4f94-af29-212d7865f473",
   "gender": "Male",
   "team": "Bounce Malvern",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Obege Janvier",
   "playerId": "50fccc8f-a4a9-490b-a7d5-eebbda35bb22",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Dan Lougheed",
   "playerId": "538f12a5-bf62-46a7-9ada-583a86b84ec0",
   "gender": "Male",
   "team": "Picklr Newtown",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Michael Swell",
   "playerId": "5436acd1-542a-4ca5-a652-c0addcf23ea2",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Claudio Lampone",
   "playerId": "55570d6a-eb15-4ba1-8a31-b4cee56f6740",
   "gender": "Male",
   "team": "Monroe",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Royce Chan",
   "playerId": "68274c39-0102-4554-978e-1aa50a0b3fba",
   "gender": "Male",
   "team": "Bounce Tempest",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Alexandre Inamasu",
   "playerId": "699549b6-bbc0-49a5-9040-22cfbf13c422",
   "gender": "Male",
   "team": "Flemington",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Patrick Cadieu",
   "playerId": "6bf475b8-0f4c-4e4b-a1ba-279f5f8aa008",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Alain Hwang",
   "playerId": "74202229-7c29-44eb-9574-de687495a1a6",
   "gender": "Male",
   "team": "Bounce Tempest",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Chase Thomas",
   "playerId": "76874590-6501-40f8-ab24-7df0fb631c71",
   "gender": "Male",
   "team": "ACE Moorestown",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Michael Velez",
   "playerId": "772b8bd9-ee55-463b-8e7d-f5e571a2f047",
   "gender": "Male",
   "team": "Picklr Newtown",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Jerry Li",
   "playerId": "7827b964-4715-4aec-aec4-e75085199fc1",
   "gender": "Male",
   "team": "Picklr Newtown",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Santhosh Pillai",
   "playerId": "7d25c9f9-c478-402a-9139-cc8781686a8e",
   "gender": "Male",
   "team": "Flemington",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Adam Beck",
   "playerId": "7d836ecc-e553-4966-9c12-2dc698a545d0",
   "gender": "Male",
   "team": "Picklr Newtown",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Noah Goding",
   "playerId": "80138d68-a74a-4f8c-aea1-7d31e682efa8",
   "gender": "Male",
   "team": "Flemington",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Johny Mario",
   "playerId": "831c9fae-38c6-4961-8664-634087f5f2f9",
   "gender": "Male",
   "team": "Jersey Devil",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Patrick Ryan",
   "playerId": "8344fbda-35c2-4ce0-94ad-158090d2d5ba",
   "gender": "Male",
   "team": "Flemington",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Turney Hall",
   "playerId": "9271aef6-af3d-4717-af33-91fb40f6ffaa",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Nirav Solanki",
   "playerId": "938658e5-f3f0-4597-8d1b-8d65a9378673",
   "gender": "Male",
   "team": "Monroe",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Andrew Nguyen",
   "playerId": "97048a47-d6b3-4c25-84c4-2b8d85e78b7d",
   "gender": "Male",
   "team": "Flemington",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Brock Hanak",
   "playerId": "9a5cd6d0-9be5-4d6f-a815-b1eb5844042b",
   "gender": "Male",
   "team": "Bounce Malvern",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Darren Saks",
   "playerId": "9bf7b8ab-4dfa-442b-be12-77580a5ea1dc",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
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
   "name": "Jordan Brochin",
   "playerId": "a4176c65-8252-4eee-b2cb-28b8b7f1f036",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Matthew Schwartz",
   "playerId": "a432d3e0-17c2-4741-a4b2-7f72b7a81a5f",
   "gender": "Male",
   "team": "Premiere",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Rohan Sabharwal",
   "playerId": "a7de14f0-a8da-402c-9340-c57389b6736a",
   "gender": "Male",
   "team": "Monroe",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Raaj Singh",
   "playerId": "accc50ff-13a1-4349-9c6f-b725f2486931",
   "gender": "Male",
   "team": "ACE Moorestown",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Doug Horton",
   "playerId": "b0b23784-946d-4ba9-bfc9-e3a81d6ead7c",
   "gender": "Male",
   "team": "Bounce Tempest",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Shang Li",
   "playerId": "b478e004-cc16-4de5-a138-8df70602f115",
   "gender": "Male",
   "team": "Pickle House",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Austin Williams",
   "playerId": "bb0bdc33-be20-4a45-9de9-0a52a88d7af9",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "isCaptain": false,
   "outsideSub": false
  },
  {
   "name": "Omar Husain",
   "playerId": "bb95a47a-aa38-4194-9ccc-68107deed1e5",
   "gender": "Male",
   "team": "Flemington",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Matthew Korsak",
   "playerId": "bc07a8b9-9b24-4afb-8c30-852eac7888ee",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Caleb Perry-Abner",
   "playerId": "c25e04ae-a9bf-4943-858d-5b7a94261e43",
   "gender": "Male",
   "team": "Jersey Devil",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Matthew Marletta",
   "playerId": "c3c6b787-5356-467d-8268-08e5f3cbc450",
   "gender": "Male",
   "team": "Flemington",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Harvey Mitchell",
   "playerId": "c5fa38d0-add2-462c-b3de-5b62dd4d1386",
   "gender": "Male",
   "team": "Bounce Malvern",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Pranav Tailor",
   "playerId": "ca17b2c0-9b3b-47e2-b370-c53ec37675e7",
   "gender": "Male",
   "team": "Flemington",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Greg Mitchell",
   "playerId": "cd7372fd-27db-46bd-8a46-dc0406393341",
   "gender": "Male",
   "team": "Picklr Newtown",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Jordan Clever",
   "playerId": "d64db065-87c9-4e7f-989b-6f0ec53240c9",
   "gender": "Male",
   "team": "Bounce Tempest",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Ethan Rosen",
   "playerId": "dae9f061-a8d1-4c21-97b1-cf7cd9e60322",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Peter Nagy",
   "playerId": "db98d397-2496-4147-943c-febe48812018",
   "gender": "Male",
   "team": "Flemington",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "John Gargana",
   "playerId": "e7ead4ec-3ab0-469f-9122-0a822f068415",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Jeremy Buckley",
   "playerId": "eb8acf3f-de43-4af8-80b0-fd9d5887d80d",
   "gender": "Male",
   "team": "Picklr Newtown",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Fabricio Gaona",
   "playerId": "ee88d140-1a78-4776-85e0-3f982891576d",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Joseph Albanese",
   "playerId": "ef0d1425-3573-439e-a197-69a837d1b27d",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Christopher Yang",
   "playerId": "efe3ef0c-82f8-4370-89cc-ec41bd6719cc",
   "gender": "Male",
   "team": "ACE Moorestown",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Jim Pagano",
   "playerId": "f1012c67-b6ba-4270-8d7a-53a9aa34b7df",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Jack Blumberg",
   "playerId": "f2929b28-a6ee-45e5-9846-da957b6d8734",
   "gender": "Male",
   "team": "ACE Moorestown",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Salman Saad",
   "playerId": "f7c4d103-d246-456d-8fd5-6418c6a0e002",
   "gender": "Male",
   "team": "Monroe",
   "isCaptain": false,
   "outsideSub": true
  },
  {
   "name": "Jeffrey Lena",
   "playerId": "f8183a0c-23a1-4b0f-99aa-fc50e5f58744",
   "gender": "Male",
   "team": "ACE Moorestown",
   "isCaptain": false,
   "outsideSub": true
  }
 ],
 "meta": {
  "matchesPlayed": 55,
  "provisionalMatches": 0,
  "weeks": "1-9",
  "totalPlayers": 226,
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
    "week": 4,
    "label": "4",
    "seq": 2
   },
   {
    "week": 5,
    "label": "5a",
    "seq": 3
   },
   {
    "week": 5,
    "label": "5b",
    "seq": 4
   },
   {
    "week": 6,
    "label": "6a",
    "seq": 5
   },
   {
    "week": 6,
    "label": "6b",
    "seq": 6
   },
   {
    "week": 7,
    "label": "7",
    "seq": 7
   },
   {
    "week": 8,
    "label": "8",
    "seq": 8
   },
   {
    "week": 9,
    "label": "9a",
    "seq": 9
   },
   {
    "week": 9,
    "label": "9b",
    "seq": 10
   }
  ],
  "divisionSlug": "cca69ab9",
  "hasPlayoffs": false,
  "typicalDay": "Mondays",
  "detailFile": "compiled/detail-cca69ab9.js",
  "clubName": "",
  "divisionName": "4.5 Mens",
  "leagueType": "travel",
  "seasonSlug": "2026-fall",
  "seasonLabel": "Fall 2026",
  "seasonStatus": "current",
  "singleGender": "Male",
  "podCount": 2,
  "podNames": [
   "North",
   "Southeast / Southwest"
  ],
  "podSource": "api",
  "reportedPods": [
   "North",
   "Southeast",
   "Southwest"
  ],
  "podMismatch": {
   "crossPodMatchups": 18,
   "totalMatchups": 78,
   "reported": {
    "North": [
     "Dill Dinkers Freehold",
     "Flemington",
     "Jersey Pickleball Club",
     "Monroe",
     "Pickleball Kingdom Hillsborough",
     "Pickleball Kingdom Watchung",
     "Premiere"
    ],
    "Southeast": [
     "ACE Moorestown",
     "Jersey Devil",
     "Pickle House"
    ],
    "Southwest": [
     "Bounce Malvern",
     "Bounce Tempest",
     "Picklr Newtown"
    ]
   },
   "schedule": {
    "Pod 1": [
     "Dill Dinkers Freehold",
     "Flemington",
     "Jersey Pickleball Club",
     "Monroe",
     "Pickleball Kingdom Hillsborough",
     "Pickleball Kingdom Watchung",
     "Premiere"
    ],
    "Pod 2": [
     "ACE Moorestown",
     "Bounce Malvern",
     "Bounce Tempest",
     "Jersey Devil",
     "Pickle House",
     "Picklr Newtown"
    ]
   }
  }
 }
};
  DATA.meta.asOf = "2026-10-25T15:21:17.113Z";
  window.DATA = DATA;
  window.CPL_DATASETS = window.CPL_DATASETS || {};
  window.CPL_DATASETS["cca69ab9"] = DATA;
})();
