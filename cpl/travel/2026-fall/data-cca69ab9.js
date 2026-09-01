(function () {
  const DATA = {
 "players": [
  {
   "name": "Jason Makarevic",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 14,
   "losses": 0,
   "pointsWon": 294,
   "totalPointsAgainst": 215,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 14,
   "genderLosses": 0,
   "clutchWins": 5,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 79,
   "ppg": 21,
   "leagueRank": 2,
   "rating": 3.5,
   "ratingGames": 14,
   "confidence": 70,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.3,
   "playerId": "f8835822-da21-4593-8b99-5665d2c2f3af"
  },
  {
   "name": "Lou Frignito",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 7,
   "losses": 0,
   "pointsWon": 147,
   "totalPointsAgainst": 91,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 56,
   "ppg": 21,
   "leagueRank": 1,
   "rating": 4.3,
   "ratingGames": 7,
   "confidence": 55,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.2,
   "playerId": "1afca308-dca6-4828-946a-0ca6ad1b0c44"
  },
  {
   "name": "Shreyas Pani",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 164,
   "totalPointsAgainst": 110,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "3cebd01c-ff32-4544-b6a6-2a68152b2ee5",
   "winPct": 87.5,
   "diff": 54,
   "ppg": 20.5,
   "leagueRank": 4,
   "rating": 1.9,
   "ratingGames": 8,
   "confidence": 56,
   "strengthOfPartners": 2.1,
   "strengthOfOpponents": -0.9
  },
  {
   "name": "Eugene Zaslavsky",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 163,
   "totalPointsAgainst": 138,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 87.5,
   "diff": 25,
   "ppg": 20.4,
   "leagueRank": 7,
   "rating": 1.4,
   "ratingGames": 8,
   "confidence": 55,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.4,
   "playerId": "9638b474-ad68-4eff-a5a5-6c40db6ed4bb"
  },
  {
   "name": "Neel Goyal",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 13,
   "losses": 2,
   "pointsWon": 307,
   "totalPointsAgainst": 230,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 13,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 0,
   "playerId": "8cfc8650-92ac-4ed4-9b57-2692526abd19",
   "winPct": 86.7,
   "diff": 77,
   "ppg": 20.5,
   "leagueRank": 5,
   "rating": 3.7,
   "ratingGames": 15,
   "confidence": 72,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.2
  },
  {
   "name": "Robbie Oddy",
   "gender": "Male",
   "team": "Flemington",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 14,
   "wins": 12,
   "losses": 2,
   "pointsWon": 277,
   "totalPointsAgainst": 202,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 85.7,
   "diff": 75,
   "ppg": 19.8,
   "leagueRank": 3,
   "rating": 4.8,
   "ratingGames": 14,
   "confidence": 69,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0,
   "playerId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6"
  },
  {
   "name": "Michael Li",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 12,
   "losses": 2,
   "pointsWon": 283,
   "totalPointsAgainst": 211,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 12,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 85.7,
   "diff": 72,
   "ppg": 20.2,
   "leagueRank": 6,
   "rating": 2.9,
   "ratingGames": 14,
   "confidence": 70,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.6,
   "playerId": "dc81629b-4ff7-45c4-b38e-b3b836bc0769"
  },
  {
   "name": "Yoon Choi",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 143,
   "totalPointsAgainst": 106,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 85.7,
   "diff": 37,
   "ppg": 20.4,
   "leagueRank": 8,
   "rating": 0.7,
   "ratingGames": 7,
   "confidence": 50,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -1.7,
   "playerId": "f3f6a49d-fd44-4f24-bb92-b3d04b50a3d9"
  },
  {
   "name": "Ali Husain",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 139,
   "totalPointsAgainst": 115,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 85.7,
   "diff": 24,
   "ppg": 19.9,
   "leagueRank": 10,
   "rating": 1.1,
   "ratingGames": 7,
   "confidence": 56,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.9,
   "playerId": "09d614ca-a9b2-44b6-a402-51046c6883af"
  },
  {
   "name": "Adam Weinstock",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 143,
   "totalPointsAgainst": 127,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 1,
   "clutchWins": 4,
   "clutchLosses": 0,
   "winPct": 85.7,
   "diff": 16,
   "ppg": 20.4,
   "leagueRank": 11,
   "rating": 0.4,
   "ratingGames": 7,
   "confidence": 54,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.6,
   "playerId": "8ced9183-490f-465f-8683-62071a6d706d"
  },
  {
   "name": "Mickey Cook",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 10,
   "losses": 2,
   "pointsWon": 238,
   "totalPointsAgainst": 188,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 50,
   "ppg": 19.8,
   "leagueRank": 9,
   "rating": 2.3,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.6,
   "playerId": "3babc519-f395-4ef7-8f6f-b38d25c139d0"
  },
  {
   "name": "Chenfei Gao",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 121,
   "totalPointsAgainst": 107,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 14,
   "ppg": 20.2,
   "leagueRank": 14,
   "rating": 0.3,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.6,
   "playerId": "3807d345-e2d6-4e75-9a59-9248ebf6e296"
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
   "leagueRank": 12,
   "rating": 2,
   "ratingGames": 13,
   "confidence": 69,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -1.1,
   "playerId": "ce590106-6f19-43b7-8a91-4dc31d28eb31"
  },
  {
   "name": "Brandyn Schuchart",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 10,
   "losses": 3,
   "pointsWon": 267,
   "totalPointsAgainst": 241,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 3,
   "clutchWins": 6,
   "clutchLosses": 3,
   "winPct": 76.9,
   "diff": 26,
   "ppg": 20.5,
   "leagueRank": 13,
   "rating": 2.2,
   "ratingGames": 13,
   "confidence": 69,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.5,
   "playerId": "9d821d34-4af3-4e4a-999d-25308b75ca0f"
  },
  {
   "name": "Adriene Khon",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 12,
   "wins": 9,
   "losses": 3,
   "pointsWon": 240,
   "totalPointsAgainst": 214,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 3,
   "clutchWins": 5,
   "clutchLosses": 1,
   "winPct": 75,
   "diff": 26,
   "ppg": 20,
   "leagueRank": 17,
   "rating": 1.6,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.2,
   "playerId": "02ac193a-6e5d-4859-80bf-c8c25a89c1c8"
  },
  {
   "name": "Fabricio Gaona",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 6,
   "losses": 2,
   "pointsWon": 161,
   "totalPointsAgainst": 136,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "ee88d140-1a78-4776-85e0-3f982891576d",
   "winPct": 75,
   "diff": 25,
   "ppg": 20.1,
   "leagueRank": 18,
   "rating": 0.7,
   "ratingGames": 8,
   "confidence": 59,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -0.4
  },
  {
   "name": "Gautham Bondugula",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 6,
   "losses": 2,
   "pointsWon": 163,
   "totalPointsAgainst": 144,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 75,
   "diff": 19,
   "ppg": 20.4,
   "leagueRank": 15,
   "rating": 1.4,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0,
   "playerId": "3da7de8e-f75c-4e90-b63e-f340cc8788a0"
  },
  {
   "name": "Joshua Octaviano",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 6,
   "losses": 2,
   "pointsWon": 161,
   "totalPointsAgainst": 146,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 75,
   "diff": 15,
   "ppg": 20.1,
   "leagueRank": 21,
   "rating": 0.4,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.2,
   "playerId": "37c7c06b-1600-450e-9f14-61d397872bc6"
  },
  {
   "name": "Chris Damato",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 14,
   "wins": 10,
   "losses": 4,
   "pointsWon": 264,
   "totalPointsAgainst": 228,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 71.4,
   "diff": 36,
   "ppg": 18.9,
   "leagueRank": 31,
   "rating": 0.3,
   "ratingGames": 14,
   "confidence": 72,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.8,
   "playerId": "445e89c8-a23c-440c-bd3c-7eab366bdd85"
  },
  {
   "name": "Nicholas Lagrua",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 139,
   "totalPointsAgainst": 117,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 71.4,
   "diff": 22,
   "ppg": 19.9,
   "leagueRank": 25,
   "rating": 0.5,
   "ratingGames": 7,
   "confidence": 55,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -1.1,
   "playerId": "6f1df3a0-bfc7-4d3b-a5f5-0ee9f40da488"
  },
  {
   "name": "Samuel Levinson",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 138,
   "totalPointsAgainst": 122,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 71.4,
   "diff": 16,
   "ppg": 19.7,
   "leagueRank": 27,
   "rating": 0.6,
   "ratingGames": 7,
   "confidence": 51,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.3,
   "playerId": "e3d7c7c2-6222-4f4d-b6b3-37931f24274b"
  },
  {
   "name": "Andre Cristobal",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 142,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 1,
   "playerId": "50d796da-0ac2-4f94-af29-212d7865f473",
   "winPct": 71.4,
   "diff": 16,
   "ppg": 20.3,
   "leagueRank": 19,
   "rating": 0.3,
   "ratingGames": 7,
   "confidence": 54,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -0.3
  },
  {
   "name": "Rahul Purwah",
   "gender": "Male",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 139,
   "totalPointsAgainst": 128,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 71.4,
   "diff": 11,
   "ppg": 19.9,
   "leagueRank": 28,
   "rating": 0,
   "ratingGames": 7,
   "confidence": 57,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": -1.2,
   "playerId": "b19effeb-3b70-4f48-b8d9-781026933e86"
  },
  {
   "name": "Tom Laiso",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 141,
   "totalPointsAgainst": 132,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 71.4,
   "diff": 9,
   "ppg": 20.1,
   "leagueRank": 29,
   "rating": 0.6,
   "ratingGames": 7,
   "confidence": 56,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.2,
   "playerId": "13918154-3673-4dae-946a-2c2d4ac8863f"
  },
  {
   "name": "Justin Bautista",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 10,
   "losses": 4,
   "pointsWon": 261,
   "totalPointsAgainst": 257,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 4,
   "clutchWins": 5,
   "clutchLosses": 0,
   "winPct": 71.4,
   "diff": 4,
   "ppg": 18.6,
   "leagueRank": 35,
   "rating": 0.8,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.6,
   "playerId": "27660961-6245-4b09-aafe-359ca3205797"
  },
  {
   "name": "Jacob Rosengarten",
   "gender": "Male",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 133,
   "totalPointsAgainst": 129,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 71.4,
   "diff": 4,
   "ppg": 19,
   "leagueRank": 34,
   "rating": 0,
   "ratingGames": 7,
   "confidence": 55,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -0.7,
   "playerId": "b2f8ea85-7734-47a2-8ce7-bd968b3a51bc"
  },
  {
   "name": "Joshua Mindlin",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 11,
   "losses": 5,
   "pointsWon": 322,
   "totalPointsAgainst": 282,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 11,
   "genderLosses": 5,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 68.8,
   "diff": 40,
   "ppg": 20.1,
   "leagueRank": 24,
   "rating": 1.4,
   "ratingGames": 16,
   "confidence": 74,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.4,
   "playerId": "439d9ebf-9409-4214-ad91-7c18a0153c71"
  },
  {
   "name": "Ken Velarde",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 11,
   "losses": 5,
   "pointsWon": 322,
   "totalPointsAgainst": 287,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 11,
   "genderLosses": 5,
   "clutchWins": 5,
   "clutchLosses": 3,
   "winPct": 68.8,
   "diff": 35,
   "ppg": 20.1,
   "leagueRank": 23,
   "rating": 1.5,
   "ratingGames": 16,
   "confidence": 72,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.2,
   "playerId": "25aa47d0-76b8-48be-a5be-b1d33b423e82"
  },
  {
   "name": "Boris Tserlin",
   "gender": "Male",
   "team": "Premiere",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 11,
   "losses": 5,
   "pointsWon": 318,
   "totalPointsAgainst": 288,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 11,
   "genderLosses": 5,
   "clutchWins": 5,
   "clutchLosses": 2,
   "playerId": "6c71dd2d-6f76-4630-96d4-27f58e99e557",
   "winPct": 68.8,
   "diff": 30,
   "ppg": 19.9,
   "leagueRank": 20,
   "rating": 1.9,
   "ratingGames": 16,
   "confidence": 73,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.1
  },
  {
   "name": "Zach Bowe",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 10,
   "losses": 5,
   "pointsWon": 300,
   "totalPointsAgainst": 258,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 3,
   "playerId": "eebadc3a-5763-4612-9232-d3a98ea188d6",
   "winPct": 66.7,
   "diff": 42,
   "ppg": 20,
   "leagueRank": 16,
   "rating": 2.9,
   "ratingGames": 15,
   "confidence": 74,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.6
  },
  {
   "name": "Dipen Bhatt",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 8,
   "losses": 4,
   "pointsWon": 229,
   "totalPointsAgainst": 213,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 16,
   "ppg": 19.1,
   "leagueRank": 46,
   "rating": -1.3,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -1.1,
   "playerId": "fe8af1d3-ff62-430d-90af-32794cc7b912"
  },
  {
   "name": "Elliott Albanese",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 10,
   "losses": 5,
   "pointsWon": 289,
   "totalPointsAgainst": 276,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 5,
   "clutchWins": 5,
   "clutchLosses": 0,
   "winPct": 66.7,
   "diff": 13,
   "ppg": 19.3,
   "leagueRank": 42,
   "rating": 0.3,
   "ratingGames": 15,
   "confidence": 71,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.3,
   "playerId": "6af88387-5e2b-4ea7-b732-22885e4931a8"
  },
  {
   "name": "Jeff Zamorski",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 122,
   "totalPointsAgainst": 115,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 66.7,
   "diff": 7,
   "ppg": 20.3,
   "leagueRank": 30,
   "rating": 0.4,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.3,
   "playerId": "f8687730-86a2-4769-a38b-7c0269ee88f5"
  },
  {
   "name": "Thomas Fenton",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 110,
   "totalPointsAgainst": 104,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 66.7,
   "diff": 6,
   "ppg": 18.3,
   "leagueRank": 37,
   "rating": 1.4,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.8,
   "playerId": "c55df548-ee89-4493-9268-850675b96066"
  },
  {
   "name": "Ryan Furman",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 9,
   "losses": 5,
   "pointsWon": 271,
   "totalPointsAgainst": 232,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 64.3,
   "diff": 39,
   "ppg": 19.4,
   "leagueRank": 22,
   "rating": 2.8,
   "ratingGames": 14,
   "confidence": 72,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.3,
   "playerId": "a89121dd-192b-486d-b39d-18ee8447d641"
  },
  {
   "name": "Stanley Bonczek",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 10,
   "losses": 6,
   "pointsWon": 324,
   "totalPointsAgainst": 283,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 6,
   "winPct": 62.5,
   "diff": 41,
   "ppg": 20.3,
   "leagueRank": 26,
   "rating": 2.5,
   "ratingGames": 16,
   "confidence": 73,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.3,
   "playerId": "f4cd45db-8d83-423a-8936-c7d7a3b0ffad"
  },
  {
   "name": "Aleksey Sergeev",
   "gender": "Male",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 153,
   "totalPointsAgainst": 139,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 62.5,
   "diff": 14,
   "ppg": 19.1,
   "leagueRank": 32,
   "rating": 1.8,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": -0.1,
   "playerId": "80467dc7-edfb-46e8-a30a-b6acd19ee222"
  },
  {
   "name": "Matt Schall",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 16,
   "wins": 10,
   "losses": 6,
   "pointsWon": 312,
   "totalPointsAgainst": 302,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 10,
   "genderLosses": 6,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 62.5,
   "diff": 10,
   "ppg": 19.5,
   "leagueRank": 33,
   "rating": 1.2,
   "ratingGames": 16,
   "confidence": 70,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.1,
   "playerId": "aa0d9944-a9d3-46d5-8650-54e894adfeb2"
  },
  {
   "name": "Camrin Cronheim",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 9,
   "losses": 6,
   "pointsWon": 286,
   "totalPointsAgainst": 261,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 2,
   "playerId": "8143def5-d564-4010-8258-ccb71cd481f1",
   "winPct": 60,
   "diff": 25,
   "ppg": 19.1,
   "leagueRank": 47,
   "rating": -0.3,
   "ratingGames": 15,
   "confidence": 72,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": -0.2
  },
  {
   "name": "Hans Tang",
   "gender": "Male",
   "team": "Flemington",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 9,
   "losses": 6,
   "pointsWon": 285,
   "totalPointsAgainst": 271,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 60,
   "diff": 14,
   "ppg": 19,
   "leagueRank": 41,
   "rating": 1.1,
   "ratingGames": 15,
   "confidence": 69,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0,
   "playerId": "b4694087-759d-4570-9394-3e7c99f19099"
  },
  {
   "name": "David Brandolph",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 92,
   "totalPointsAgainst": 81,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "be10853a-1f2c-4b56-8fd7-902ddc686401",
   "winPct": 60,
   "diff": 11,
   "ppg": 18.4,
   "leagueRank": 40,
   "rating": 1.9,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.6
  },
  {
   "name": "Justin Chin",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 6,
   "losses": 4,
   "pointsWon": 189,
   "totalPointsAgainst": 188,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 60,
   "diff": 1,
   "ppg": 18.9,
   "leagueRank": 52,
   "rating": 0,
   "ratingGames": 10,
   "confidence": 64,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.4,
   "playerId": "9fa77cf9-39da-4bfe-8ada-d01143ca498c"
  },
  {
   "name": "William Lee",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 15,
   "wins": 9,
   "losses": 6,
   "pointsWon": 280,
   "totalPointsAgainst": 280,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 6,
   "clutchWins": 5,
   "clutchLosses": 3,
   "winPct": 60,
   "diff": 0,
   "ppg": 18.7,
   "leagueRank": 58,
   "rating": 0.3,
   "ratingGames": 15,
   "confidence": 72,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.1,
   "playerId": "9e264c96-36cf-45a9-90ad-1e125a82c851"
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
   "playerId": "03a4e22a-6242-459c-8120-58d0650413a9",
   "winPct": 60,
   "diff": -4,
   "ppg": 18,
   "leagueRank": 66,
   "rating": 0.4,
   "ratingGames": 5,
   "confidence": 51,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 1.1
  },
  {
   "name": "Al Mancini",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 7,
   "losses": 5,
   "pointsWon": 224,
   "totalPointsAgainst": 205,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 58.3,
   "diff": 19,
   "ppg": 18.7,
   "leagueRank": 53,
   "rating": 1.1,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.3,
   "playerId": "51352d99-02ac-4299-abac-a688bfade22f"
  },
  {
   "name": "Josh Knupp",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 7,
   "losses": 5,
   "pointsWon": 230,
   "totalPointsAgainst": 231,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 5,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 58.3,
   "diff": -1,
   "ppg": 19.2,
   "leagueRank": 50,
   "rating": 0.9,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.6,
   "playerId": "292c729f-c522-4f41-8208-e1caf7f94498"
  },
  {
   "name": "Craig Frame",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 7,
   "losses": 5,
   "pointsWon": 212,
   "totalPointsAgainst": 229,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 58.3,
   "diff": -17,
   "ppg": 17.7,
   "leagueRank": 90,
   "rating": -2.9,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.7,
   "playerId": "6043b3e3-217d-4ad3-bd5d-db9667b99bbc"
  },
  {
   "name": "Ron Branca",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 8,
   "losses": 6,
   "pointsWon": 270,
   "totalPointsAgainst": 241,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 57.1,
   "diff": 29,
   "ppg": 19.3,
   "leagueRank": 45,
   "rating": 0.5,
   "ratingGames": 14,
   "confidence": 69,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.6,
   "playerId": "2caf34a7-c53c-410c-a7b4-47dd61398830"
  },
  {
   "name": "Dustin Rabinowitz",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 8,
   "losses": 6,
   "pointsWon": 268,
   "totalPointsAgainst": 240,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 57.1,
   "diff": 28,
   "ppg": 19.1,
   "leagueRank": 38,
   "rating": 1.3,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.2,
   "playerId": "d23839c0-334b-4423-9305-0c6281523d5d"
  },
  {
   "name": "Zach Hollmann",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 8,
   "losses": 6,
   "pointsWon": 264,
   "totalPointsAgainst": 239,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 57.1,
   "diff": 25,
   "ppg": 18.9,
   "leagueRank": 54,
   "rating": 0.5,
   "ratingGames": 14,
   "confidence": 73,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.2,
   "playerId": "8aef2d8a-0bd4-45df-b5d1-1a120a81ef0f"
  },
  {
   "name": "Shashank Kamdar",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 138,
   "totalPointsAgainst": 124,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 57.1,
   "diff": 14,
   "ppg": 19.7,
   "leagueRank": 36,
   "rating": 1.6,
   "ratingGames": 7,
   "confidence": 55,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.2,
   "playerId": "56db4b56-6166-437f-8ece-26576b7042e5"
  },
  {
   "name": "Andy Ead",
   "gender": "Male",
   "team": "Flemington",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 131,
   "totalPointsAgainst": 118,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 57.1,
   "diff": 13,
   "ppg": 18.7,
   "leagueRank": 43,
   "rating": 0,
   "ratingGames": 7,
   "confidence": 51,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": -0.2,
   "playerId": "6c4d1df7-7f8f-432b-a8a7-8751e9aa521d"
  },
  {
   "name": "Ryan Rosen",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 137,
   "totalPointsAgainst": 135,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 57.1,
   "diff": 2,
   "ppg": 19.6,
   "leagueRank": 48,
   "rating": 0,
   "ratingGames": 7,
   "confidence": 54,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.3,
   "playerId": "97f2b250-2030-4296-be61-63cffb17043b"
  },
  {
   "name": "Christian Lupica",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 8,
   "losses": 6,
   "pointsWon": 264,
   "totalPointsAgainst": 267,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 6,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 57.1,
   "diff": -3,
   "ppg": 18.9,
   "leagueRank": 64,
   "rating": -0.1,
   "ratingGames": 14,
   "confidence": 70,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.1,
   "playerId": "ac97d2bc-5ee7-4285-8eb3-e5650a0f6f6e"
  },
  {
   "name": "Ivan Rios",
   "gender": "Male",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 123,
   "totalPointsAgainst": 131,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 57.1,
   "diff": -8,
   "ppg": 17.6,
   "leagueRank": 76,
   "rating": -0.8,
   "ratingGames": 7,
   "confidence": 56,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": -0.5,
   "playerId": "5807a1c8-ca44-48d1-9dec-ee621a2817c2"
  },
  {
   "name": "Thomas Connolly",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 9,
   "losses": 7,
   "pointsWon": 297,
   "totalPointsAgainst": 282,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 56.3,
   "diff": 15,
   "ppg": 18.6,
   "leagueRank": 61,
   "rating": 0.7,
   "ratingGames": 16,
   "confidence": 74,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.5,
   "playerId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3"
  },
  {
   "name": "Zach Hizer",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 9,
   "losses": 7,
   "pointsWon": 303,
   "totalPointsAgainst": 311,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 9,
   "genderLosses": 7,
   "clutchWins": 5,
   "clutchLosses": 3,
   "winPct": 56.3,
   "diff": -8,
   "ppg": 18.9,
   "leagueRank": 57,
   "rating": 0,
   "ratingGames": 16,
   "confidence": 72,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.2,
   "playerId": "b5e576e1-d16d-4c9d-ab28-2e1b1e66487b"
  },
  {
   "name": "Zachary Lessner",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 7,
   "losses": 6,
   "pointsWon": 241,
   "totalPointsAgainst": 256,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 6,
   "clutchWins": 6,
   "clutchLosses": 3,
   "winPct": 53.8,
   "diff": -15,
   "ppg": 18.5,
   "leagueRank": 73,
   "rating": 0.1,
   "ratingGames": 13,
   "confidence": 68,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.7,
   "playerId": "2ce5ebef-8079-4871-8d2e-b34988abbaad"
  },
  {
   "name": "Tyler Arsenault",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 8,
   "losses": 7,
   "pointsWon": 292,
   "totalPointsAgainst": 261,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 4,
   "playerId": "e76d2d63-f7dc-40e7-aca2-d9b3aecf4d3e",
   "winPct": 53.3,
   "diff": 31,
   "ppg": 19.5,
   "leagueRank": 39,
   "rating": 1.5,
   "ratingGames": 15,
   "confidence": 71,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.5
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
   "playerId": "a131a707-f20e-4838-9dcf-7cecb40c2705",
   "winPct": 53.3,
   "diff": 20,
   "ppg": 18.5,
   "leagueRank": 62,
   "rating": 0.9,
   "ratingGames": 15,
   "confidence": 72,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.3
  },
  {
   "name": "Kevin Sun",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 156,
   "totalPointsAgainst": 142,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": 14,
   "ppg": 19.5,
   "leagueRank": 44,
   "rating": 1.7,
   "ratingGames": 8,
   "confidence": 57,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.5,
   "playerId": "88c57c1f-436b-4280-9bd7-75eafe496b70"
  },
  {
   "name": "Austin Gow",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 6,
   "losses": 6,
   "pointsWon": 232,
   "totalPointsAgainst": 222,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 50,
   "diff": 10,
   "ppg": 19.3,
   "leagueRank": 56,
   "rating": 1,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.3,
   "playerId": "0e577096-0b13-441d-b087-cc49cb55cfe2"
  },
  {
   "name": "Alex Pecora",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 8,
   "losses": 8,
   "pointsWon": 310,
   "totalPointsAgainst": 300,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 8,
   "clutchWins": 2,
   "clutchLosses": 5,
   "winPct": 50,
   "diff": 10,
   "ppg": 19.4,
   "leagueRank": 69,
   "rating": 0,
   "ratingGames": 16,
   "confidence": 74,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.3,
   "playerId": "3533f5a2-d7ed-4fd3-b969-5117c0474452"
  },
  {
   "name": "Zachary Lisojo",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 157,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "e2086778-379f-4d43-8ce7-6447129d8812",
   "winPct": 50,
   "diff": 10,
   "ppg": 19.6,
   "leagueRank": 65,
   "rating": -0.3,
   "ratingGames": 8,
   "confidence": 59,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.3
  },
  {
   "name": "Damien Stahl",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 149,
   "totalPointsAgainst": 139,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "45d2cd6f-4816-46b2-8e17-fab766cdb87e",
   "winPct": 50,
   "diff": 10,
   "ppg": 18.6,
   "leagueRank": 55,
   "rating": 1.5,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.7
  },
  {
   "name": "Shawn Ganow",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 6,
   "losses": 6,
   "pointsWon": 236,
   "totalPointsAgainst": 229,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 50,
   "diff": 7,
   "ppg": 19.7,
   "leagueRank": 60,
   "rating": 0.4,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.4,
   "playerId": "1e340ccb-0e0f-4b6b-b760-d1a723561d04"
  },
  {
   "name": "Daniel Gallegos",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 151,
   "totalPointsAgainst": 146,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": 5,
   "ppg": 18.9,
   "leagueRank": 51,
   "rating": 1.6,
   "ratingGames": 8,
   "confidence": 60,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 1.2,
   "playerId": "6f9cb35b-f24c-4480-a8b4-86e6ea32f3c2"
  },
  {
   "name": "Chris Frangipane",
   "gender": "Male",
   "team": "Premiere",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 8,
   "losses": 8,
   "pointsWon": 297,
   "totalPointsAgainst": 293,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 8,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 50,
   "diff": 4,
   "ppg": 18.6,
   "leagueRank": 68,
   "rating": 0.6,
   "ratingGames": 16,
   "confidence": 71,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.3,
   "playerId": "e8bb81fd-869a-459d-8108-b9ac6bc1b84d"
  },
  {
   "name": "Anthony Bradford Bisignano",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 116,
   "totalPointsAgainst": 115,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": 1,
   "ppg": 19.3,
   "leagueRank": 49,
   "rating": 1,
   "ratingGames": 6,
   "confidence": 47,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": -0.1,
   "playerId": "7ce7d3d1-b44b-431c-b3a5-20e153cc1777"
  },
  {
   "name": "Harrison Mui",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 115,
   "totalPointsAgainst": 116,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": -1,
   "ppg": 19.2,
   "leagueRank": 75,
   "rating": 0.1,
   "ratingGames": 6,
   "confidence": 47,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.1,
   "playerId": "fa1d3cb9-cd76-4f49-8024-c6224aa5b7c1"
  },
  {
   "name": "Sebastian Ferrer",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 151,
   "totalPointsAgainst": 152,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 2,
   "playerId": "5c354e5d-09ba-4d09-a8c4-76e0fb7eb78a",
   "winPct": 50,
   "diff": -1,
   "ppg": 18.9,
   "leagueRank": 70,
   "rating": 0.8,
   "ratingGames": 8,
   "confidence": 55,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.3
  },
  {
   "name": "Hiep Pham",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 6,
   "losses": 6,
   "pointsWon": 227,
   "totalPointsAgainst": 229,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": -2,
   "ppg": 18.9,
   "leagueRank": 72,
   "rating": 0,
   "ratingGames": 12,
   "confidence": 67,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.2,
   "playerId": "515009fd-ac6a-4124-a871-dff85a118781"
  },
  {
   "name": "Daniel Ehala",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 14,
   "wins": 7,
   "losses": 7,
   "pointsWon": 262,
   "totalPointsAgainst": 265,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 7,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": -3,
   "ppg": 18.7,
   "leagueRank": 59,
   "rating": 0.9,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.1,
   "playerId": "2ee28d63-2f38-468f-b824-9b17aa938413"
  },
  {
   "name": "Tarkan Akas",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 104,
   "totalPointsAgainst": 108,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 50,
   "diff": -4,
   "ppg": 17.3,
   "leagueRank": 94,
   "rating": -0.7,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.2,
   "playerId": "7fd926bd-8473-435e-9330-5984c0637b19"
  },
  {
   "name": "Gary Sidhu",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 146,
   "totalPointsAgainst": 153,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": -7,
   "ppg": 18.3,
   "leagueRank": 80,
   "rating": -0.7,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": -1,
   "strengthOfOpponents": -0.6,
   "playerId": "fa28fec9-9eff-4831-912d-4180f8760eeb"
  },
  {
   "name": "Jake Laifer",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 149,
   "totalPointsAgainst": 159,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": -10,
   "ppg": 18.6,
   "leagueRank": 83,
   "rating": -0.3,
   "ratingGames": 8,
   "confidence": 54,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 1.1,
   "playerId": "d99428a2-b91c-460f-b2d4-cf3ce96f0643"
  },
  {
   "name": "Kushal Thapa",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 7,
   "losses": 7,
   "pointsWon": 252,
   "totalPointsAgainst": 265,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 7,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": -13,
   "ppg": 18,
   "leagueRank": 74,
   "rating": -0.6,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.5,
   "playerId": "85b62c8d-b3e4-4f75-93ec-cf7b5097a2ac"
  },
  {
   "name": "Derek Callihan",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 8,
   "losses": 8,
   "pointsWon": 283,
   "totalPointsAgainst": 302,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 8,
   "genderLosses": 8,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": -19,
   "ppg": 17.7,
   "leagueRank": 89,
   "rating": -0.8,
   "ratingGames": 16,
   "confidence": 74,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0,
   "playerId": "5eccfff7-0902-4be1-a70e-361ff447bf6a"
  },
  {
   "name": "Shahar Gelber",
   "gender": "Male",
   "team": "Flemington",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 7,
   "losses": 7,
   "pointsWon": 245,
   "totalPointsAgainst": 271,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 7,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": -26,
   "ppg": 17.5,
   "leagueRank": 79,
   "rating": 0.4,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.7,
   "playerId": "7efd9bc6-6b2f-4e98-b785-136fea990664"
  },
  {
   "name": "Ian Chin",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 7,
   "losses": 8,
   "pointsWon": 293,
   "totalPointsAgainst": 281,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 8,
   "clutchWins": 2,
   "clutchLosses": 5,
   "winPct": 46.7,
   "diff": 12,
   "ppg": 19.5,
   "leagueRank": 71,
   "rating": 0.4,
   "ratingGames": 15,
   "confidence": 73,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.3,
   "playerId": "34d3737f-b8db-4d4c-bf25-6e8bb3524157"
  },
  {
   "name": "Timoty Cahalin",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 7,
   "losses": 8,
   "pointsWon": 269,
   "totalPointsAgainst": 286,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 8,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 46.7,
   "diff": -17,
   "ppg": 17.9,
   "leagueRank": 93,
   "rating": -0.9,
   "ratingGames": 15,
   "confidence": 73,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -0.3,
   "playerId": "7610b0d0-07a5-4408-ade6-d5ea5d80fe0a"
  },
  {
   "name": "Ashwin Korde",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 6,
   "losses": 7,
   "pointsWon": 228,
   "totalPointsAgainst": 259,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 7,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 46.2,
   "diff": -31,
   "ppg": 17.5,
   "leagueRank": 104,
   "rating": -1.8,
   "ratingGames": 13,
   "confidence": 68,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.4,
   "playerId": "f9f521ee-5f27-4f61-b4e0-4e0b9ad09aee"
  },
  {
   "name": "Stephen Conger",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 9,
   "wins": 4,
   "losses": 5,
   "pointsWon": 177,
   "totalPointsAgainst": 174,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 44.4,
   "diff": 3,
   "ppg": 19.7,
   "leagueRank": 67,
   "rating": -0.4,
   "ratingGames": 9,
   "confidence": 63,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.2,
   "playerId": "24e70ef7-b98e-459e-8a19-19a2b66a054e"
  },
  {
   "name": "Christopher Natividad",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 7,
   "losses": 9,
   "pointsWon": 297,
   "totalPointsAgainst": 295,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 9,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 43.8,
   "diff": 2,
   "ppg": 18.6,
   "leagueRank": 78,
   "rating": 0,
   "ratingGames": 16,
   "confidence": 74,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.3,
   "playerId": "d0db1fca-1182-4e0e-8d5c-980be84ac87f"
  },
  {
   "name": "Drew Youssef",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 7,
   "losses": 9,
   "pointsWon": 296,
   "totalPointsAgainst": 298,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 9,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 43.8,
   "diff": -2,
   "ppg": 18.5,
   "leagueRank": 84,
   "rating": -0.7,
   "ratingGames": 16,
   "confidence": 74,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0,
   "playerId": "d13d6c03-eea2-44f3-a497-965b1e95ea83"
  },
  {
   "name": "Gary White",
   "gender": "Male",
   "team": "Premiere",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 7,
   "losses": 9,
   "pointsWon": 284,
   "totalPointsAgainst": 288,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 9,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 43.8,
   "diff": -4,
   "ppg": 17.8,
   "leagueRank": 88,
   "rating": -0.8,
   "ratingGames": 16,
   "confidence": 69,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.4,
   "playerId": "9a26eab9-96be-45e1-b380-2845a0e8e668"
  },
  {
   "name": "Mark Kilimnik",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 6,
   "losses": 8,
   "pointsWon": 266,
   "totalPointsAgainst": 267,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 8,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 42.9,
   "diff": -1,
   "ppg": 19,
   "leagueRank": 77,
   "rating": -0.2,
   "ratingGames": 14,
   "confidence": 69,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.2,
   "playerId": "d6c15f91-4cc9-4612-8ec3-8f4ebd4e0cc1"
  },
  {
   "name": "Brian O'Neill",
   "gender": "Male",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 133,
   "totalPointsAgainst": 136,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 42.9,
   "diff": -3,
   "ppg": 19,
   "leagueRank": 86,
   "rating": -0.3,
   "ratingGames": 7,
   "confidence": 56,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": -0.5,
   "playerId": "a00f55b9-a52a-4982-8ffc-9dbe4e66469e"
  },
  {
   "name": "Vaughn Mcclelland",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 129,
   "totalPointsAgainst": 134,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 42.9,
   "diff": -5,
   "ppg": 18.4,
   "leagueRank": 81,
   "rating": 0.7,
   "ratingGames": 7,
   "confidence": 55,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.9,
   "playerId": "c33f3ff1-2c81-4630-8980-64fa03a7b102"
  },
  {
   "name": "Josh Sherlock",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 125,
   "totalPointsAgainst": 141,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 42.9,
   "diff": -16,
   "ppg": 17.9,
   "leagueRank": 97,
   "rating": -1.3,
   "ratingGames": 7,
   "confidence": 57,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": -0.5,
   "playerId": "fa2292a3-4d44-4c69-b4b8-b7c8f6d9085a"
  },
  {
   "name": "Keith Shedlock",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 116,
   "totalPointsAgainst": 137,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 42.9,
   "diff": -21,
   "ppg": 16.6,
   "leagueRank": 117,
   "rating": -1.9,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.2,
   "playerId": "f4b44cd7-fc9a-41a2-b569-cdaf08b0bf26"
  },
  {
   "name": "Vaughn Lawrence",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 5,
   "losses": 7,
   "pointsWon": 233,
   "totalPointsAgainst": 207,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 5,
   "winPct": 41.7,
   "diff": 26,
   "ppg": 19.4,
   "leagueRank": 63,
   "rating": 1.1,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0,
   "playerId": "d4c1185c-6147-4164-90e1-06ecfa162596"
  },
  {
   "name": "Matthew Eldridge",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 5,
   "losses": 7,
   "pointsWon": 217,
   "totalPointsAgainst": 221,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 7,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 41.7,
   "diff": -4,
   "ppg": 18.1,
   "leagueRank": 105,
   "rating": -2.4,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -0.7,
   "playerId": "19cb95ac-bec2-41bb-a6ce-767d51e00f24"
  },
  {
   "name": "Zachary Puccia",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 6,
   "losses": 9,
   "pointsWon": 286,
   "totalPointsAgainst": 298,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 9,
   "clutchWins": 4,
   "clutchLosses": 6,
   "winPct": 40,
   "diff": -12,
   "ppg": 19.1,
   "leagueRank": 82,
   "rating": 0,
   "ratingGames": 15,
   "confidence": 70,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0,
   "playerId": "dd6582a2-1596-40b8-8a4c-fec00aaeb379"
  },
  {
   "name": "Zyril Carilo",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 13,
   "wins": 5,
   "losses": 8,
   "pointsWon": 231,
   "totalPointsAgainst": 252,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 8,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 38.5,
   "diff": -21,
   "ppg": 17.8,
   "leagueRank": 106,
   "rating": -0.3,
   "ratingGames": 13,
   "confidence": 68,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 1,
   "playerId": "b4efc48a-f302-4d27-8c35-0dac1e68eec8"
  },
  {
   "name": "Rob Pandolfi",
   "gender": "Male",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 156,
   "totalPointsAgainst": 157,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 37.5,
   "diff": -1,
   "ppg": 19.5,
   "leagueRank": 85,
   "rating": -0.5,
   "ratingGames": 8,
   "confidence": 55,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0,
   "playerId": "081fc233-7f01-432d-85f9-c623b0524f49"
  },
  {
   "name": "Jacob Yandoli",
   "gender": "Male",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 151,
   "totalPointsAgainst": 156,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 37.5,
   "diff": -5,
   "ppg": 18.9,
   "leagueRank": 96,
   "rating": -0.5,
   "ratingGames": 8,
   "confidence": 56,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.1,
   "playerId": "be9bc229-2d57-4236-a951-11a2f91a09a3"
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
   "playerId": "cd7372fd-27db-46bd-8a46-dc0406393341",
   "winPct": 37.5,
   "diff": -5,
   "ppg": 18.6,
   "leagueRank": 107,
   "rating": -1.9,
   "ratingGames": 8,
   "confidence": 59,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -1
  },
  {
   "name": "Neil Ottrando",
   "gender": "Male",
   "team": "Premiere",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 6,
   "losses": 10,
   "pointsWon": 300,
   "totalPointsAgainst": 307,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 10,
   "clutchWins": 3,
   "clutchLosses": 6,
   "winPct": 37.5,
   "diff": -7,
   "ppg": 18.8,
   "leagueRank": 87,
   "rating": 0.1,
   "ratingGames": 16,
   "confidence": 72,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -0.2,
   "playerId": "4de9fd52-8910-4c2f-9aad-e2e55a0e33a1"
  },
  {
   "name": "Nicholas Como",
   "gender": "Male",
   "team": "Premiere",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 149,
   "totalPointsAgainst": 160,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "a286a593-65d0-4119-a211-3cd57bba652a",
   "winPct": 37.5,
   "diff": -11,
   "ppg": 18.6,
   "leagueRank": 95,
   "rating": -0.4,
   "ratingGames": 8,
   "confidence": 57,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.6
  },
  {
   "name": "Kevin Wysoczynski",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 6,
   "losses": 10,
   "pointsWon": 291,
   "totalPointsAgainst": 311,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 10,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 37.5,
   "diff": -20,
   "ppg": 18.2,
   "leagueRank": 98,
   "rating": -0.7,
   "ratingGames": 16,
   "confidence": 70,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0,
   "playerId": "f64f0cc2-6c82-4fe4-9992-747512700971"
  },
  {
   "name": "Bryan Nardone",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 5,
   "losses": 9,
   "pointsWon": 244,
   "totalPointsAgainst": 269,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 9,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 35.7,
   "diff": -25,
   "ppg": 17.4,
   "leagueRank": 101,
   "rating": -0.3,
   "ratingGames": 14,
   "confidence": 72,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.2,
   "playerId": "a479d794-d9d0-4620-b322-b7f249f2ae5f"
  },
  {
   "name": "Hany Ibrahim",
   "gender": "Male",
   "team": "Flemington",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 5,
   "losses": 9,
   "pointsWon": 233,
   "totalPointsAgainst": 269,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 9,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "5b439439-36f5-421f-afaa-5d8b1a547954",
   "winPct": 35.7,
   "diff": -36,
   "ppg": 16.6,
   "leagueRank": 115,
   "rating": -1.7,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.2
  },
  {
   "name": "Anushk Gupta",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 117,
   "totalPointsAgainst": 113,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 33.3,
   "diff": 4,
   "ppg": 19.5,
   "leagueRank": 92,
   "rating": -0.6,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.6,
   "playerId": "1a851b17-0445-4807-b476-575fd261f774"
  },
  {
   "name": "Jonah Karczmer",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 117,
   "totalPointsAgainst": 117,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 33.3,
   "diff": 0,
   "ppg": 19.5,
   "leagueRank": 91,
   "rating": -0.5,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0,
   "playerId": "c33e6ff8-38a1-45ca-9abb-d05a7ae27079"
  },
  {
   "name": "Yash Shah",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 114,
   "totalPointsAgainst": 121,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 33.3,
   "diff": -7,
   "ppg": 19,
   "leagueRank": 99,
   "rating": -0.3,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.3,
   "playerId": "fbf8a0f9-a289-4d98-a5e3-478c8dce672a"
  },
  {
   "name": "Jack Blumberg",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 108,
   "totalPointsAgainst": 118,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "f2929b28-a6ee-45e5-9846-da957b6d8734",
   "winPct": 33.3,
   "diff": -10,
   "ppg": 18,
   "leagueRank": 100,
   "rating": -0.2,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.4
  },
  {
   "name": "Alex Mihalca",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 108,
   "totalPointsAgainst": 122,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 33.3,
   "diff": -14,
   "ppg": 18,
   "leagueRank": 113,
   "rating": -0.8,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.4,
   "playerId": "47054f48-f7f3-4a11-8a3c-03160ea588b6"
  },
  {
   "name": "Brian Barenbaum",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 105,
   "totalPointsAgainst": 119,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 33.3,
   "diff": -14,
   "ppg": 17.5,
   "leagueRank": 108,
   "rating": -1,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": -0.2,
   "playerId": "b95f46c6-d374-4e13-a57b-abd171b1c847"
  },
  {
   "name": "Marc Harden",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 12,
   "wins": 4,
   "losses": 8,
   "pointsWon": 199,
   "totalPointsAgainst": 237,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 8,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 33.3,
   "diff": -38,
   "ppg": 16.6,
   "leagueRank": 116,
   "rating": -1.4,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.1,
   "playerId": "55194d2f-f537-4e19-b901-86c559f25ef2"
  },
  {
   "name": "Matthew Friedman",
   "gender": "Male",
   "team": "Premiere",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 5,
   "losses": 11,
   "pointsWon": 298,
   "totalPointsAgainst": 314,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 11,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 31.3,
   "diff": -16,
   "ppg": 18.6,
   "leagueRank": 103,
   "rating": 0,
   "ratingGames": 16,
   "confidence": 73,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.2,
   "playerId": "259fc7aa-7e69-4830-87d8-b9a758ec7fda"
  },
  {
   "name": "Braden Keith",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 4,
   "losses": 9,
   "pointsWon": 228,
   "totalPointsAgainst": 247,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 9,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 30.8,
   "diff": -19,
   "ppg": 17.5,
   "leagueRank": 111,
   "rating": -1.5,
   "ratingGames": 13,
   "confidence": 71,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.3,
   "playerId": "d23d47c0-4f40-4691-b81a-9ad6e36402b6"
  },
  {
   "name": "Daniel Phillips",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 4,
   "losses": 9,
   "pointsWon": 206,
   "totalPointsAgainst": 259,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 9,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 30.8,
   "diff": -53,
   "ppg": 15.8,
   "leagueRank": 127,
   "rating": -2.5,
   "ratingGames": 13,
   "confidence": 64,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0,
   "playerId": "1ddcd805-f965-4357-9567-35920e191f8c"
  },
  {
   "name": "Sean O'Connell",
   "gender": "Male",
   "team": "Flemington",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 124,
   "totalPointsAgainst": 128,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 28.6,
   "diff": -4,
   "ppg": 17.7,
   "leagueRank": 112,
   "rating": -0.6,
   "ratingGames": 7,
   "confidence": 49,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.2,
   "playerId": "6d9b173b-57b7-499c-9bde-9bdafd152968"
  },
  {
   "name": "Kevin Lin",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 130,
   "totalPointsAgainst": 138,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "44bbc794-d40d-4fbf-a59e-ddb785496f21",
   "winPct": 28.6,
   "diff": -8,
   "ppg": 18.6,
   "leagueRank": 102,
   "rating": 0,
   "ratingGames": 7,
   "confidence": 51,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.4
  },
  {
   "name": "Caesar Gene",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 131,
   "totalPointsAgainst": 141,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 28.6,
   "diff": -10,
   "ppg": 18.7,
   "leagueRank": 118,
   "rating": -1.7,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.3,
   "playerId": "a0aa8b27-3980-4abd-a62c-62d801cb0a82"
  },
  {
   "name": "Simon Perry",
   "gender": "Male",
   "team": "Flemington",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 126,
   "totalPointsAgainst": 137,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 28.6,
   "diff": -11,
   "ppg": 18,
   "leagueRank": 109,
   "rating": 0,
   "ratingGames": 7,
   "confidence": 58,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 1.2,
   "playerId": "03c7bdf6-926c-4d90-9416-117cd3478b50"
  },
  {
   "name": "Snehit Achanta",
   "gender": "Male",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 121,
   "totalPointsAgainst": 136,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 28.6,
   "diff": -15,
   "ppg": 17.3,
   "leagueRank": 124,
   "rating": -1,
   "ratingGames": 7,
   "confidence": 58,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -0.1,
   "playerId": "6e17bc1f-6adf-4354-8e03-e37860c1869b"
  },
  {
   "name": "Jonathan Ksiezopolski",
   "gender": "Male",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 115,
   "totalPointsAgainst": 141,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 28.6,
   "diff": -26,
   "ppg": 16.4,
   "leagueRank": 133,
   "rating": -2.4,
   "ratingGames": 7,
   "confidence": 58,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.2,
   "playerId": "20fe2f66-8825-4881-a325-b8fb78ee5ff6"
  },
  {
   "name": "Claudio Lampone",
   "gender": "Male",
   "team": "Monroe",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 115,
   "totalPointsAgainst": 143,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 2,
   "playerId": "55570d6a-eb15-4ba1-8a31-b4cee56f6740",
   "winPct": 28.6,
   "diff": -28,
   "ppg": 16.4,
   "leagueRank": 134,
   "rating": -3,
   "ratingGames": 7,
   "confidence": 57,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.5
  },
  {
   "name": "Frank Clark",
   "gender": "Male",
   "team": "Flemington",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 4,
   "losses": 10,
   "pointsWon": 245,
   "totalPointsAgainst": 283,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 10,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 28.6,
   "diff": -38,
   "ppg": 17.5,
   "leagueRank": 119,
   "rating": -1.9,
   "ratingGames": 14,
   "confidence": 69,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.2,
   "playerId": "fb42e711-528f-4028-80c6-e32013e3f807"
  },
  {
   "name": "Michael Ksiezopolski",
   "gender": "Male",
   "team": "Monroe",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 104,
   "totalPointsAgainst": 143,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 28.6,
   "diff": -39,
   "ppg": 14.9,
   "leagueRank": 135,
   "rating": -1.3,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 1.3,
   "playerId": "73090c04-48a1-48b2-b638-55b1e656f4ed"
  },
  {
   "name": "Vince Abate",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 4,
   "losses": 10,
   "pointsWon": 241,
   "totalPointsAgainst": 285,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 10,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 28.6,
   "diff": -44,
   "ppg": 17.2,
   "leagueRank": 121,
   "rating": -1.9,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.4,
   "playerId": "8257200c-7448-4527-92df-436d7bb18cac"
  },
  {
   "name": "Anthony Fallet",
   "gender": "Male",
   "team": "Flemington",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 4,
   "losses": 10,
   "pointsWon": 224,
   "totalPointsAgainst": 281,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 10,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 28.6,
   "diff": -57,
   "ppg": 16,
   "leagueRank": 129,
   "rating": -2.2,
   "ratingGames": 14,
   "confidence": 69,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0,
   "playerId": "1949e493-55f0-4373-8c61-6a266543ddbf"
  },
  {
   "name": "Andrew Bernard",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 4,
   "losses": 11,
   "pointsWon": 247,
   "totalPointsAgainst": 301,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 11,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 26.7,
   "diff": -54,
   "ppg": 16.5,
   "leagueRank": 130,
   "rating": -2.6,
   "ratingGames": 15,
   "confidence": 72,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.1,
   "playerId": "8079e74f-c537-4e42-9590-e8d60f10ba3d"
  },
  {
   "name": "Josiah Kim",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 151,
   "totalPointsAgainst": 156,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 4,
   "winPct": 25,
   "diff": -5,
   "ppg": 18.9,
   "leagueRank": 110,
   "rating": -0.7,
   "ratingGames": 8,
   "confidence": 56,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.2,
   "playerId": "de8e2a33-d691-4652-84ef-532b89f467bc"
  },
  {
   "name": "Scott Bohrer",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 3,
   "losses": 9,
   "pointsWon": 223,
   "totalPointsAgainst": 237,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 9,
   "clutchWins": 1,
   "clutchLosses": 7,
   "winPct": 25,
   "diff": -14,
   "ppg": 18.6,
   "leagueRank": 114,
   "rating": -0.9,
   "ratingGames": 12,
   "confidence": 69,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.3,
   "playerId": "7c8310a8-1a97-4c04-bbc0-519fe4132685"
  },
  {
   "name": "Joseph Lynskey",
   "gender": "Male",
   "team": "Premiere",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 138,
   "totalPointsAgainst": 162,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "0e8c08b7-0e58-434b-8830-f37779f821dc",
   "winPct": 25,
   "diff": -24,
   "ppg": 17.3,
   "leagueRank": 122,
   "rating": -0.8,
   "ratingGames": 8,
   "confidence": 54,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.8
  },
  {
   "name": "Jaco De Waal",
   "gender": "Male",
   "team": "Picklr Newtown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 131,
   "totalPointsAgainst": 164,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 25,
   "diff": -33,
   "ppg": 16.4,
   "leagueRank": 132,
   "rating": -1.9,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.5,
   "playerId": "19407a76-031d-4be3-8ed8-ba88cccdfdd3"
  },
  {
   "name": "Michael Rapaglia",
   "gender": "Male",
   "team": "Premiere",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 4,
   "losses": 12,
   "pointsWon": 279,
   "totalPointsAgainst": 325,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 12,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 25,
   "diff": -46,
   "ppg": 17.4,
   "leagueRank": 126,
   "rating": -2.3,
   "ratingGames": 16,
   "confidence": 72,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.2,
   "playerId": "0b84dcdf-2b96-4a9e-9eae-5523bf89c4f6"
  },
  {
   "name": "Robert Finley",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 3,
   "losses": 10,
   "pointsWon": 223,
   "totalPointsAgainst": 254,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 10,
   "clutchWins": 0,
   "clutchLosses": 4,
   "winPct": 23.1,
   "diff": -31,
   "ppg": 17.2,
   "leagueRank": 120,
   "rating": -0.5,
   "ratingGames": 13,
   "confidence": 70,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 0,
   "playerId": "0d70122a-9002-461f-8600-a9afed2e8c3f"
  },
  {
   "name": "Vineeth Mathew",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 3,
   "losses": 10,
   "pointsWon": 221,
   "totalPointsAgainst": 259,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 10,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 23.1,
   "diff": -38,
   "ppg": 17,
   "leagueRank": 125,
   "rating": -1.3,
   "ratingGames": 13,
   "confidence": 70,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0,
   "playerId": "329df703-2af3-46cd-a7ae-372a1956536e"
  },
  {
   "name": "Shayne Clowar",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 3,
   "losses": 11,
   "pointsWon": 219,
   "totalPointsAgainst": 272,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 11,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 21.4,
   "diff": -53,
   "ppg": 15.6,
   "leagueRank": 131,
   "rating": -1.5,
   "ratingGames": 14,
   "confidence": 69,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.5,
   "playerId": "30b75fd5-95cf-4a1a-b296-10e7e381166e"
  },
  {
   "name": "Nachiket Vaidya",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 3,
   "losses": 12,
   "pointsWon": 249,
   "totalPointsAgainst": 292,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 12,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 20,
   "diff": -43,
   "ppg": 16.6,
   "leagueRank": 128,
   "rating": -1.6,
   "ratingGames": 15,
   "confidence": 73,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": -0.3,
   "playerId": "0e35b16c-8027-4994-b04f-fd146d6d1709"
  },
  {
   "name": "Matthew Mintz",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 90,
   "totalPointsAgainst": 124,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 16.7,
   "diff": -34,
   "ppg": 15,
   "leagueRank": 138,
   "rating": -2.5,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.4,
   "playerId": "ad956d26-e552-40eb-97c4-38edfc1b0bc1"
  },
  {
   "name": "Riguo Zheng",
   "gender": "Male",
   "team": "ACE Moorestown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 2,
   "losses": 11,
   "pointsWon": 203,
   "totalPointsAgainst": 260,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 11,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 15.4,
   "diff": -57,
   "ppg": 15.6,
   "leagueRank": 136,
   "rating": -2,
   "ratingGames": 13,
   "confidence": 69,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 0.2,
   "playerId": "c5fa0e7c-eb97-45fa-8a86-850a918fff54"
  },
  {
   "name": "Daniel Schwab",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 100,
   "totalPointsAgainst": 136,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 14.3,
   "diff": -36,
   "ppg": 14.3,
   "leagueRank": 140,
   "rating": -2.7,
   "ratingGames": 7,
   "confidence": 56,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.3,
   "playerId": "3382b214-0a3e-4005-aba4-084588de0d98"
  },
  {
   "name": "Jay Alquiros",
   "gender": "Male",
   "team": "Flemington",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 2,
   "losses": 12,
   "pointsWon": 209,
   "totalPointsAgainst": 286,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 12,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 14.3,
   "diff": -77,
   "ppg": 14.9,
   "leagueRank": 139,
   "rating": -2.5,
   "ratingGames": 14,
   "confidence": 67,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.7,
   "playerId": "a3dbb909-29a5-4aa0-a40f-42bed311f9cd"
  },
  {
   "name": "Anthony Bonaventura",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 151,
   "totalPointsAgainst": 162,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 4,
   "winPct": 12.5,
   "diff": -11,
   "ppg": 18.9,
   "leagueRank": 123,
   "rating": -0.1,
   "ratingGames": 8,
   "confidence": 57,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 1.4,
   "playerId": "58836d9c-6a12-4ed7-853f-dcee1e00dadd"
  },
  {
   "name": "Tim Dowd",
   "gender": "Male",
   "team": "Flemington",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 123,
   "totalPointsAgainst": 158,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 12.5,
   "diff": -35,
   "ppg": 15.4,
   "leagueRank": 137,
   "rating": -1.5,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 1.5,
   "playerId": "b7555b30-f1b5-4d44-9eff-dffd3e1b1b28"
  },
  {
   "name": "Rich Marcovecchio",
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
   "leagueRank": 158,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "08197a69-d447-4483-b3ae-7b232fb0655d"
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
   "leagueRank": 153,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "0c1a11c0-7f89-48fa-af2f-3f9925039239"
  },
  {
   "name": "Jon Bliven",
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
   "leagueRank": 143,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "0d56afc7-1c10-4166-afa2-1352c4ef5725"
  },
  {
   "name": "Jordan Long",
   "gender": "Male",
   "team": "Bounce Malvern",
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
   "leagueRank": 157,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "0fbbdbbb-a550-49ae-b04a-111bfe4891f5"
  },
  {
   "name": "Marr Flores",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
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
   "leagueRank": 152,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "1009522f-1f54-4cf1-a0a0-e24ad64f4a66"
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
   "leagueRank": 168,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "18c27a5c-a694-4777-98fc-4feff755d047"
  },
  {
   "name": "Emil Pescatore",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
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
   "leagueRank": 163,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "1c9b7abf-dae6-4e0d-a31d-485e99a01fec"
  },
  {
   "name": "Simon Rosenwasser",
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
   "leagueRank": 165,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "369dca37-2d15-4559-96d1-26a78df236a1"
  },
  {
   "name": "Julius Degen",
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
   "leagueRank": 151,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "3a828946-f189-43be-905a-00c20a3b0b84"
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
   "leagueRank": 148,
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
   "leagueRank": 164,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "4aea9e80-552f-49b8-9118-c03af246e089"
  },
  {
   "name": "Gopi Narayanan",
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
   "leagueRank": 161,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "5d55a4c4-8271-4e7b-b018-3da88a97c5fe"
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
   "leagueRank": 150,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "63186871-d2ca-4525-b04a-2ba9c05349d3"
  },
  {
   "name": "Alex Boory",
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
   "leagueRank": 144,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "897f1edf-63f3-4eec-bcf5-d5a1bf0be859"
  },
  {
   "name": "Chi Fai Cho",
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
   "leagueRank": 147,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "a97ab81c-02ad-4c31-adf4-a442e903d1d3"
  },
  {
   "name": "Steve Susskind",
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
   "leagueRank": 167,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "a9df21e2-b62a-4af0-a793-80f0de708466"
  },
  {
   "name": "Sheel Motiwala",
   "gender": "Male",
   "team": "Jersey Devil",
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
   "leagueRank": 160,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "e3f3e90d-b026-49f2-8194-45e9252b61f8"
  },
  {
   "name": "Marcin Glowacki",
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
   "leagueRank": 154,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "e47d28f2-187f-4aa7-acb8-356787ff82e5"
  },
  {
   "name": "Zach Mcgowan",
   "gender": "Male",
   "team": "Picklr Newtown",
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
   "leagueRank": 159,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "e71a8785-5959-4607-9af3-e3ac9e3c6d86"
  },
  {
   "name": "Joseph Yi",
   "gender": "Male",
   "team": "Picklr Newtown",
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
   "leagueRank": 171,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "e882fe51-042a-4368-b34f-fbabad19d7c1"
  },
  {
   "name": "Wasib Malik",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 90,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 0,
   "diff": -36,
   "ppg": 15,
   "leagueRank": 141,
   "rating": -2.5,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.4,
   "playerId": "659c9638-b908-4ddd-88a9-2bc40c334a08"
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
   "playerId": "f8183a0c-23a1-4b0f-99aa-fc50e5f58744",
   "winPct": 0,
   "diff": -58,
   "ppg": 12.7,
   "leagueRank": 142,
   "rating": -3.7,
   "ratingGames": 7,
   "confidence": 55,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.7
  }
 ],
 "teams": [
  {
   "name": "Dill Dinkers Freehold",
   "w": 1,
   "l": 0,
   "pf": 638,
   "pa": 573,
   "gw": 23,
   "gl": 9,
   "diff": 65,
   "gameDiff": 14,
   "power": 0.3,
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
     23,
     9
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Pickle House",
   "w": 2,
   "l": 0,
   "pf": 1238,
   "pa": 1100,
   "gw": 43,
   "gl": 21,
   "diff": 138,
   "gameDiff": 22,
   "power": 0.3,
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
     43,
     21
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Pickleball Kingdom Hillsborough",
   "w": 2,
   "l": 0,
   "pf": 1254,
   "pa": 1122,
   "gw": 42,
   "gl": 22,
   "diff": 132,
   "gameDiff": 20,
   "power": 1.1,
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
     42,
     22
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Bounce Tempest",
   "w": 2,
   "l": 0,
   "pf": 1256,
   "pa": 1266,
   "gw": 37,
   "gl": 27,
   "diff": -10,
   "gameDiff": 10,
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
     37,
     27
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Pickleball Kingdom Watchung",
   "w": 1,
   "l": 1,
   "pf": 1283,
   "pa": 1209,
   "gw": 34,
   "gl": 30,
   "diff": 74,
   "gameDiff": 4,
   "power": 0.7,
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
     34,
     30
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Picklr Newtown",
   "w": 1,
   "l": 1,
   "pf": 1230,
   "pa": 1226,
   "gw": 34,
   "gl": 30,
   "diff": 4,
   "gameDiff": 4,
   "power": -0.1,
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
     34,
     30
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Bounce Malvern",
   "w": 1,
   "l": 1,
   "pf": 1291,
   "pa": 1217,
   "gw": 32,
   "gl": 32,
   "diff": 74,
   "gameDiff": 0,
   "power": 0.6,
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
     32,
     32
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
   "l": 1,
   "pf": 1122,
   "pa": 1213,
   "gw": 26,
   "gl": 38,
   "diff": -91,
   "gameDiff": -12,
   "power": -0.3,
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
     26,
     38
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Jersey Pickleball Club",
   "w": 1,
   "l": 1,
   "pf": 1179,
   "pa": 1274,
   "gw": 26,
   "gl": 38,
   "diff": -95,
   "gameDiff": -12,
   "power": -0.6,
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
     26,
     38
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
   "l": 1,
   "pf": 577,
   "pa": 622,
   "gw": 15,
   "gl": 17,
   "diff": -45,
   "gameDiff": -2,
   "power": -0.7,
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
     15,
     17
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Jersey Devil",
   "w": 0,
   "l": 2,
   "pf": 1218,
   "pa": 1226,
   "gw": 29,
   "gl": 35,
   "diff": -8,
   "gameDiff": -6,
   "power": 0.3,
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
     29,
     35
    ],
    "female": [
     0,
     0
    ]
   }
  },
  {
   "name": "Premiere",
   "w": 0,
   "l": 2,
   "pf": 1227,
   "pa": 1267,
   "gw": 26,
   "gl": 38,
   "diff": -40,
   "gameDiff": -12,
   "power": -0.2,
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
     26,
     38
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
   "l": 2,
   "pf": 1083,
   "pa": 1281,
   "gw": 17,
   "gl": 47,
   "diff": -198,
   "gameDiff": -30,
   "power": -1.2,
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
     17,
     47
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
   "synergy": 2.6,
   "avgActual": 10.3,
   "avgExpected": 4.4,
   "aId": "8cfc8650-92ac-4ed4-9b57-2692526abd19",
   "bId": "a131a707-f20e-4838-9dcf-7cecb40c2705"
  },
  {
   "a": "Robert Finley",
   "b": "Marc Harden",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 2.2,
   "avgActual": 3,
   "avgExpected": -2,
   "aId": "0d70122a-9002-461f-8600-a9afed2e8c3f",
   "bId": "55194d2f-f537-4e19-b901-86c559f25ef2"
  },
  {
   "a": "Christopher Natividad",
   "b": "Stanley Bonczek",
   "team": "Pickleball Kingdom Watchung",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.8,
   "avgActual": 6.3,
   "avgExpected": 2,
   "aId": "d0db1fca-1182-4e0e-8d5c-980be84ac87f",
   "bId": "f4cd45db-8d83-423a-8936-c7d7a3b0ffad"
  },
  {
   "a": "Matthew Eldridge",
   "b": "Al Mancini",
   "team": "Pickle House",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.6,
   "avgActual": 5,
   "avgExpected": 1.2,
   "aId": "19cb95ac-bec2-41bb-a6ce-767d51e00f24",
   "bId": "51352d99-02ac-4299-abac-a688bfade22f"
  },
  {
   "a": "Nachiket Vaidya",
   "b": "Riguo Zheng",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.3,
   "avgActual": 1,
   "avgExpected": -2,
   "aId": "0e35b16c-8027-4994-b04f-fd146d6d1709",
   "bId": "c5fa0e7c-eb97-45fa-8a86-850a918fff54"
  },
  {
   "a": "Boris Tserlin",
   "b": "Gary White",
   "team": "Premiere",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 4,
   "avgExpected": 1.4,
   "aId": "6c71dd2d-6f76-4630-96d4-27f58e99e557",
   "bId": "9a26eab9-96be-45e1-b380-2845a0e8e668"
  },
  {
   "a": "Scott Bohrer",
   "b": "Vaughn Lawrence",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.2,
   "avgActual": 2,
   "avgExpected": -0.7,
   "aId": "7c8310a8-1a97-4c04-bbc0-519fe4132685",
   "bId": "d4c1185c-6147-4164-90e1-06ecfa162596"
  },
  {
   "a": "Matthew Friedman",
   "b": "Chris Frangipane",
   "team": "Premiere",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.2,
   "avgActual": 2.5,
   "avgExpected": 0.1,
   "aId": "259fc7aa-7e69-4830-87d8-b9a758ec7fda",
   "bId": "e8bb81fd-869a-459d-8108-b9ac6bc1b84d"
  },
  {
   "a": "Chris Damato",
   "b": "Deepak Sunku",
   "team": "Pickle House",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.1,
   "avgActual": 7.3,
   "avgExpected": 4.7,
   "aId": "445e89c8-a23c-440c-bd3c-7eab366bdd85",
   "bId": "ce590106-6f19-43b7-8a91-4dc31d28eb31"
  },
  {
   "a": "Zach Hizer",
   "b": "Zachary Puccia",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 1.7,
   "avgExpected": -1,
   "aId": "b5e576e1-d16d-4c9d-ab28-2e1b1e66487b",
   "bId": "dd6582a2-1596-40b8-8a4c-fec00aaeb379"
  },
  {
   "a": "Ryan Furman",
   "b": "Tyler Arsenault",
   "team": "Jersey Devil",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1,
   "avgActual": 5.7,
   "avgExpected": 3.4,
   "aId": "a89121dd-192b-486d-b39d-18ee8447d641",
   "bId": "e76d2d63-f7dc-40e7-aca2-d9b3aecf4d3e"
  },
  {
   "a": "Timoty Cahalin",
   "b": "William Lee",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1,
   "avgActual": 2.3,
   "avgExpected": -0.1,
   "aId": "7610b0d0-07a5-4408-ade6-d5ea5d80fe0a",
   "bId": "9e264c96-36cf-45a9-90ad-1e125a82c851"
  },
  {
   "a": "Camrin Cronheim",
   "b": "Jason Makarevic",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 6.3,
   "avgExpected": 4.5,
   "aId": "8143def5-d564-4010-8258-ccb71cd481f1",
   "bId": "f8835822-da21-4593-8b99-5665d2c2f3af"
  },
  {
   "a": "Justin Bautista",
   "b": "Zyril Carilo",
   "team": "Bounce Tempest",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 0.7,
   "avgExpected": -1.3,
   "aId": "27660961-6245-4b09-aafe-359ca3205797",
   "bId": "b4efc48a-f302-4d27-8c35-0dac1e68eec8"
  },
  {
   "a": "Zachary Lessner",
   "b": "Brandyn Schuchart",
   "team": "Bounce Tempest",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.8,
   "avgActual": 2,
   "avgExpected": 0.5,
   "aId": "2ce5ebef-8079-4871-8d2e-b34988abbaad",
   "bId": "9d821d34-4af3-4e4a-999d-25308b75ca0f"
  },
  {
   "a": "Josh Knupp",
   "b": "Ashwin Korde",
   "team": "Bounce Tempest",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.8,
   "avgActual": -0.7,
   "avgExpected": -2.5,
   "aId": "292c729f-c522-4f41-8208-e1caf7f94498",
   "bId": "f9f521ee-5f27-4f61-b4e0-4e0b9ad09aee"
  },
  {
   "a": "Michael Rapaglia",
   "b": "Matthew Friedman",
   "team": "Premiere",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.8,
   "avgActual": -0.2,
   "avgExpected": -1.9,
   "aId": "0b84dcdf-2b96-4a9e-9eae-5523bf89c4f6",
   "bId": "259fc7aa-7e69-4830-87d8-b9a758ec7fda"
  },
  {
   "a": "Tyler Arsenault",
   "b": "Zach Bowe",
   "team": "Jersey Devil",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 4.3,
   "avgExpected": 2.8,
   "aId": "e76d2d63-f7dc-40e7-aca2-d9b3aecf4d3e",
   "bId": "eebadc3a-5763-4612-9232-d3a98ea188d6"
  },
  {
   "a": "Elliott Albanese",
   "b": "Jason Makarevic",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 4.3,
   "avgExpected": 2.6,
   "aId": "6af88387-5e2b-4ea7-b732-22885e4931a8",
   "bId": "f8835822-da21-4593-8b99-5665d2c2f3af"
  },
  {
   "a": "Daniel Phillips",
   "b": "Zachary Puccia",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.7,
   "avgActual": -0.3,
   "avgExpected": -2,
   "aId": "1ddcd805-f965-4357-9567-35920e191f8c",
   "bId": "dd6582a2-1596-40b8-8a4c-fec00aaeb379"
  },
  {
   "a": "Adriene Khon",
   "b": "Justin Chin",
   "team": "Bounce Tempest",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.6,
   "avgActual": 3,
   "avgExpected": 1.7,
   "aId": "02ac193a-6e5d-4859-80bf-c8c25a89c1c8",
   "bId": "9fa77cf9-39da-4bfe-8ada-d01143ca498c"
  },
  {
   "a": "Boris Tserlin",
   "b": "Chris Frangipane",
   "team": "Premiere",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.6,
   "avgActual": 4.3,
   "avgExpected": 3,
   "aId": "6c71dd2d-6f76-4630-96d4-27f58e99e557",
   "bId": "e8bb81fd-869a-459d-8108-b9ac6bc1b84d"
  },
  {
   "a": "Daniel Ehala",
   "b": "Bryan Nardone",
   "team": "ACE Moorestown",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 2.5,
   "avgExpected": 1.5,
   "aId": "2ee28d63-2f38-468f-b824-9b17aa938413",
   "bId": "a479d794-d9d0-4620-b322-b7f249f2ae5f"
  },
  {
   "a": "Al Mancini",
   "b": "Zach Hollmann",
   "team": "Pickle House",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 0.7,
   "avgExpected": -0.4,
   "aId": "51352d99-02ac-4299-abac-a688bfade22f",
   "bId": "8aef2d8a-0bd4-45df-b5d1-1a120a81ef0f"
  },
  {
   "a": "Ron Branca",
   "b": "Joshua Mindlin",
   "team": "Picklr Newtown",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 3.8,
   "avgExpected": 3,
   "aId": "2caf34a7-c53c-410c-a7b4-47dd61398830",
   "bId": "439d9ebf-9409-4214-ad91-7c18a0153c71"
  },
  {
   "a": "Jay Alquiros",
   "b": "Frank Clark",
   "team": "Flemington",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 0.2,
   "avgActual": -5.5,
   "avgExpected": -5.8,
   "aId": "a3dbb909-29a5-4aa0-a40f-42bed311f9cd",
   "bId": "fb42e711-528f-4028-80c6-e32013e3f807"
  },
  {
   "a": "Shayne Clowar",
   "b": "Vineeth Mathew",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.2,
   "avgActual": -2.3,
   "avgExpected": -2.8,
   "aId": "30b75fd5-95cf-4a1a-b296-10e7e381166e",
   "bId": "329df703-2af3-46cd-a7ae-372a1956536e"
  },
  {
   "a": "Alex Pecora",
   "b": "Joshua Mindlin",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 0.7,
   "avgExpected": 0.3,
   "aId": "3533f5a2-d7ed-4fd3-b969-5117c0474452",
   "bId": "439d9ebf-9409-4214-ad91-7c18a0153c71"
  },
  {
   "a": "Hans Tang",
   "b": "Frank Clark",
   "team": "Flemington",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 0.3,
   "avgExpected": 0.1,
   "aId": "b4694087-759d-4570-9394-3e7c99f19099",
   "bId": "fb42e711-528f-4028-80c6-e32013e3f807"
  },
  {
   "a": "Hany Ibrahim",
   "b": "Hans Tang",
   "team": "Flemington",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0,
   "avgActual": 0,
   "avgExpected": 0.1,
   "aId": "5b439439-36f5-421f-afaa-5d8b1a547954",
   "bId": "b4694087-759d-4570-9394-3e7c99f19099"
  },
  {
   "a": "Kushal Thapa",
   "b": "Zach Bowe",
   "team": "Jersey Devil",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0,
   "avgActual": 2,
   "avgExpected": 2,
   "aId": "85b62c8d-b3e4-4f75-93ec-cf7b5097a2ac",
   "bId": "eebadc3a-5763-4612-9232-d3a98ea188d6"
  },
  {
   "a": "Derek Callihan",
   "b": "Timoty Cahalin",
   "team": "Picklr Newtown",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0,
   "avgActual": -2.2,
   "avgExpected": -2.3,
   "aId": "5eccfff7-0902-4be1-a70e-361ff447bf6a",
   "bId": "7610b0d0-07a5-4408-ade6-d5ea5d80fe0a"
  },
  {
   "a": "Zach Hizer",
   "b": "Kevin Wysoczynski",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0,
   "avgActual": -2,
   "avgExpected": -2.1,
   "aId": "b5e576e1-d16d-4c9d-ab28-2e1b1e66487b",
   "bId": "f64f0cc2-6c82-4fe4-9992-747512700971"
  },
  {
   "a": "Hany Ibrahim",
   "b": "Jay Alquiros",
   "team": "Flemington",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.1,
   "avgActual": -7.3,
   "avgExpected": -7.2,
   "aId": "5b439439-36f5-421f-afaa-5d8b1a547954",
   "bId": "a3dbb909-29a5-4aa0-a40f-42bed311f9cd"
  },
  {
   "a": "Thomas Connolly",
   "b": "Neel Goyal",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 2,
   "avgExpected": 2.3,
   "aId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3",
   "bId": "8cfc8650-92ac-4ed4-9b57-2692526abd19"
  },
  {
   "a": "Justin Bautista",
   "b": "Zachary Lessner",
   "team": "Bounce Tempest",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.1,
   "avgActual": -1.3,
   "avgExpected": -1,
   "aId": "27660961-6245-4b09-aafe-359ca3205797",
   "bId": "2ce5ebef-8079-4871-8d2e-b34988abbaad"
  },
  {
   "a": "Daniel Ehala",
   "b": "Vineeth Mathew",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -2.3,
   "avgExpected": -2.2,
   "aId": "2ee28d63-2f38-468f-b824-9b17aa938413",
   "bId": "329df703-2af3-46cd-a7ae-372a1956536e"
  },
  {
   "a": "Ian Chin",
   "b": "Camrin Cronheim",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.2,
   "avgActual": 0.3,
   "avgExpected": 0.8,
   "aId": "34d3737f-b8db-4d4c-bf25-6e8bb3524157",
   "bId": "8143def5-d564-4010-8258-ccb71cd481f1"
  },
  {
   "a": "Hiep Pham",
   "b": "Zyril Carilo",
   "team": "Bounce Tempest",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.2,
   "avgActual": -2.2,
   "avgExpected": -1.9,
   "aId": "515009fd-ac6a-4124-a871-dff85a118781",
   "bId": "b4efc48a-f302-4d27-8c35-0dac1e68eec8"
  },
  {
   "a": "Hiep Pham",
   "b": "Justin Chin",
   "team": "Bounce Tempest",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.2,
   "avgActual": -1.7,
   "avgExpected": -1.3,
   "aId": "515009fd-ac6a-4124-a871-dff85a118781",
   "bId": "9fa77cf9-39da-4bfe-8ada-d01143ca498c"
  },
  {
   "a": "Joshua Mindlin",
   "b": "William Lee",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 2.3,
   "avgExpected": 2.7,
   "aId": "439d9ebf-9409-4214-ad91-7c18a0153c71",
   "bId": "9e264c96-36cf-45a9-90ad-1e125a82c851"
  },
  {
   "a": "Matt Schall",
   "b": "Zach Hizer",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 1.3,
   "avgExpected": 1.6,
   "aId": "aa0d9944-a9d3-46d5-8650-54e894adfeb2",
   "bId": "b5e576e1-d16d-4c9d-ab28-2e1b1e66487b"
  },
  {
   "a": "Ian Chin",
   "b": "Marc Padre",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.3,
   "avgActual": 0,
   "avgExpected": 0.7,
   "aId": "34d3737f-b8db-4d4c-bf25-6e8bb3524157",
   "bId": "a131a707-f20e-4838-9dcf-7cecb40c2705"
  },
  {
   "a": "Zachary Lessner",
   "b": "Ashwin Korde",
   "team": "Bounce Tempest",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -3.7,
   "avgExpected": -3.1,
   "aId": "2ce5ebef-8079-4871-8d2e-b34988abbaad",
   "bId": "f9f521ee-5f27-4f61-b4e0-4e0b9ad09aee"
  },
  {
   "a": "Ron Branca",
   "b": "Alex Pecora",
   "team": "Picklr Newtown",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.3,
   "avgActual": 0,
   "avgExpected": 0.7,
   "aId": "2caf34a7-c53c-410c-a7b4-47dd61398830",
   "bId": "3533f5a2-d7ed-4fd3-b969-5117c0474452"
  },
  {
   "a": "Matt Schall",
   "b": "Kevin Wysoczynski",
   "team": "Jersey Pickleball Club",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.3,
   "avgActual": -1.3,
   "avgExpected": -0.5,
   "aId": "aa0d9944-a9d3-46d5-8650-54e894adfeb2",
   "bId": "f64f0cc2-6c82-4fe4-9992-747512700971"
  },
  {
   "a": "Michael Rapaglia",
   "b": "Neil Ottrando",
   "team": "Premiere",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -3,
   "avgExpected": -2.4,
   "aId": "0b84dcdf-2b96-4a9e-9eae-5523bf89c4f6",
   "bId": "4de9fd52-8910-4c2f-9aad-e2e55a0e33a1"
  },
  {
   "a": "Shahar Gelber",
   "b": "Hans Tang",
   "team": "Flemington",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.4,
   "avgActual": -1,
   "avgExpected": -0.1,
   "aId": "7efd9bc6-6b2f-4e98-b785-136fea990664",
   "bId": "b4694087-759d-4570-9394-3e7c99f19099"
  },
  {
   "a": "Daniel Ehala",
   "b": "Shayne Clowar",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.4,
   "avgActual": -2,
   "avgExpected": -1,
   "aId": "2ee28d63-2f38-468f-b824-9b17aa938413",
   "bId": "30b75fd5-95cf-4a1a-b296-10e7e381166e"
  },
  {
   "a": "Ian Chin",
   "b": "Elliott Albanese",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -2.3,
   "avgExpected": -0.9,
   "aId": "34d3737f-b8db-4d4c-bf25-6e8bb3524157",
   "bId": "6af88387-5e2b-4ea7-b732-22885e4931a8"
  },
  {
   "a": "Justin Bautista",
   "b": "Hiep Pham",
   "team": "Bounce Tempest",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.6,
   "avgActual": 1,
   "avgExpected": 2.4,
   "aId": "27660961-6245-4b09-aafe-359ca3205797",
   "bId": "515009fd-ac6a-4124-a871-dff85a118781"
  },
  {
   "a": "Marc Harden",
   "b": "Riguo Zheng",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -4,
   "avgExpected": -2.6,
   "aId": "55194d2f-f537-4e19-b901-86c559f25ef2",
   "bId": "c5fa0e7c-eb97-45fa-8a86-850a918fff54"
  },
  {
   "a": "Stephen Conger",
   "b": "Tyler Arsenault",
   "team": "Jersey Devil",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -0.3,
   "avgExpected": 1.2,
   "aId": "24e70ef7-b98e-459e-8a19-19a2b66a054e",
   "bId": "e76d2d63-f7dc-40e7-aca2-d9b3aecf4d3e"
  },
  {
   "a": "Matthew Eldridge",
   "b": "Deepak Sunku",
   "team": "Pickle House",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.7,
   "avgActual": 0.3,
   "avgExpected": 1.9,
   "aId": "19cb95ac-bec2-41bb-a6ce-767d51e00f24",
   "bId": "ce590106-6f19-43b7-8a91-4dc31d28eb31"
  },
  {
   "a": "Anthony Fallet",
   "b": "Jay Alquiros",
   "team": "Flemington",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -7.7,
   "avgExpected": -5.8,
   "aId": "1949e493-55f0-4373-8c61-6a266543ddbf",
   "bId": "a3dbb909-29a5-4aa0-a40f-42bed311f9cd"
  },
  {
   "a": "William Lee",
   "b": "Christian Lupica",
   "team": "Picklr Newtown",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.8,
   "avgActual": -2.2,
   "avgExpected": -0.7,
   "aId": "9e264c96-36cf-45a9-90ad-1e125a82c851",
   "bId": "ac97d2bc-5ee7-4285-8eb3-e5650a0f6f6e"
  },
  {
   "a": "Andrew Bernard",
   "b": "Matt Schall",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -3.2,
   "avgExpected": -1.6,
   "aId": "8079e74f-c537-4e42-9590-e8d60f10ba3d",
   "bId": "aa0d9944-a9d3-46d5-8650-54e894adfeb2"
  },
  {
   "a": "Matthew Friedman",
   "b": "Neil Ottrando",
   "team": "Premiere",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -1.5,
   "avgExpected": 0.6,
   "aId": "259fc7aa-7e69-4830-87d8-b9a758ec7fda",
   "bId": "4de9fd52-8910-4c2f-9aad-e2e55a0e33a1"
  },
  {
   "a": "Anthony Fallet",
   "b": "Hany Ibrahim",
   "team": "Flemington",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.3,
   "avgActual": -7.3,
   "avgExpected": -4.2,
   "aId": "1949e493-55f0-4373-8c61-6a266543ddbf",
   "bId": "5b439439-36f5-421f-afaa-5d8b1a547954"
  },
  {
   "a": "Nachiket Vaidya",
   "b": "Vineeth Mathew",
   "team": "ACE Moorestown",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.3,
   "avgActual": -5.3,
   "avgExpected": -2.4,
   "aId": "0e35b16c-8027-4994-b04f-fd146d6d1709",
   "bId": "329df703-2af3-46cd-a7ae-372a1956536e"
  },
  {
   "a": "Zachary Puccia",
   "b": "Kevin Wysoczynski",
   "team": "Jersey Pickleball Club",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.3,
   "avgActual": -3,
   "avgExpected": -0.4,
   "aId": "dd6582a2-1596-40b8-8a4c-fec00aaeb379",
   "bId": "f64f0cc2-6c82-4fe4-9992-747512700971"
  },
  {
   "a": "Christopher Natividad",
   "b": "Drew Youssef",
   "team": "Pickleball Kingdom Watchung",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.6,
   "avgActual": -5.7,
   "avgExpected": -1.9,
   "aId": "d0db1fca-1182-4e0e-8d5c-980be84ac87f",
   "bId": "d13d6c03-eea2-44f3-a497-965b1e95ea83"
  },
  {
   "a": "Ryan Furman",
   "b": "Braden Keith",
   "team": "Jersey Devil",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.9,
   "avgActual": -3.3,
   "avgExpected": 1.1,
   "aId": "a89121dd-192b-486d-b39d-18ee8447d641",
   "bId": "d23d47c0-4f40-4691-b81a-9ad6e36402b6"
  },
  {
   "a": "Michael Rapaglia",
   "b": "Gary White",
   "team": "Premiere",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -2.3,
   "avgActual": -6,
   "avgExpected": -1.4,
   "aId": "0b84dcdf-2b96-4a9e-9eae-5523bf89c4f6",
   "bId": "9a26eab9-96be-45e1-b380-2845a0e8e668"
  },
  {
   "a": "Camrin Cronheim",
   "b": "Marc Padre",
   "team": "Pickleball Kingdom Hillsborough",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.4,
   "avgActual": -6,
   "avgExpected": -0.5,
   "aId": "8143def5-d564-4010-8258-ccb71cd481f1",
   "bId": "a131a707-f20e-4838-9dcf-7cecb40c2705"
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
    "Hany Ibrahim",
    "Claudio Lampone"
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
    "Zach Bowe",
    "Tyler Arsenault",
    "Jack Blumberg"
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
    "Neel Goyal",
    "Camrin Cronheim",
    "Marc Padre"
   ]
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
      "Timoty Cahalin"
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
      "Timoty Cahalin",
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
      "Timoty Cahalin"
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
      "Timoty Cahalin"
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
      "Timoty Cahalin"
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
      "Timoty Cahalin",
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
      "Timoty Cahalin"
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
      "Timoty Cahalin"
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
   "subs": [
    "Boris Tserlin",
    "Sebastian Ferrer"
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
    "Shreyas Pani",
    "Neel Goyal",
    "Camrin Cronheim",
    "Marc Padre",
    "Hany Ibrahim"
   ]
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
      "Timoty Cahalin",
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
      "Timoty Cahalin"
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
      "Timoty Cahalin",
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
      "Timoty Cahalin",
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
      "Timoty Cahalin",
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
      "Timoty Cahalin"
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
      "Timoty Cahalin",
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
    "Fabricio Gaona",
    "Boris Tserlin",
    "Zachary Lisojo",
    "Nicholas Como",
    "Joseph Lynskey"
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
    "Zach Bowe",
    "Tyler Arsenault",
    "David Brandolph",
    "Damien Stahl",
    "Vincent Tran"
   ]
  },
  {
   "result": null,
   "week": 4,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Dill Dinkers Freehold",
   "time": "2026-09-14T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Premiere",
   "away": "Monroe",
   "time": "2026-09-14T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Picklr Newtown",
   "away": "Jersey Devil",
   "time": "2026-09-14T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Jersey Pickleball Club",
   "away": "Pickleball Kingdom Watchung",
   "time": "2026-09-14T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Bounce Malvern",
   "away": "ACE Moorestown",
   "time": "2026-09-14T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Bounce Tempest",
   "away": "Pickle House",
   "time": "2026-09-14T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Dill Dinkers Freehold",
   "away": "Flemington",
   "time": "2026-09-21T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Jersey Pickleball Club",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-09-21T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Monroe",
   "away": "Pickleball Kingdom Watchung",
   "time": "2026-09-21T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Bounce Tempest",
   "away": "ACE Moorestown",
   "time": "2026-09-21T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Pickle House",
   "away": "Picklr Newtown",
   "time": "2026-09-21T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Jersey Devil",
   "away": "Bounce Malvern",
   "time": "2026-09-21T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Flemington",
   "away": "Premiere",
   "time": "2026-09-26T09:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Pickleball Kingdom Watchung",
   "away": "Dill Dinkers Freehold",
   "time": "2026-09-26T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Monroe",
   "away": "Jersey Pickleball Club",
   "time": "2026-09-26T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Bounce Tempest",
   "away": "Picklr Newtown",
   "time": "2026-09-26T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Jersey Devil",
   "away": "Pickle House",
   "time": "2026-09-26T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Flemington",
   "time": "2026-09-28T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Premiere",
   "away": "Pickleball Kingdom Watchung",
   "time": "2026-09-28T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Jersey Pickleball Club",
   "away": "Dill Dinkers Freehold",
   "time": "2026-09-28T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Pickle House",
   "away": "Bounce Malvern",
   "time": "2026-09-28T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "ACE Moorestown",
   "away": "Jersey Devil",
   "time": "2026-09-28T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Bounce Tempest",
   "away": "Picklr Newtown",
   "time": "2026-09-28T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Premiere",
   "away": "Jersey Pickleball Club",
   "time": "2026-10-05T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Jersey Devil",
   "away": "Picklr Newtown",
   "time": "2026-10-05T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Pickleball Kingdom Watchung",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-10-05T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Monroe",
   "away": "Flemington",
   "time": "2026-10-05T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Pickle House",
   "away": "Bounce Tempest",
   "time": "2026-10-05T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "ACE Moorestown",
   "away": "Bounce Malvern",
   "time": "2026-10-05T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Monroe",
   "time": "2026-10-12T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Flemington",
   "away": "Pickleball Kingdom Watchung",
   "time": "2026-10-12T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Premiere",
   "away": "Dill Dinkers Freehold",
   "time": "2026-10-12T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Picklr Newtown",
   "away": "Pickle House",
   "time": "2026-10-12T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Bounce Malvern",
   "away": "Jersey Devil",
   "time": "2026-10-12T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "ACE Moorestown",
   "away": "Bounce Tempest",
   "time": "2026-10-12T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Flemington",
   "away": "Dill Dinkers Freehold",
   "time": "2026-10-19T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Jersey Pickleball Club",
   "time": "2026-10-19T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Pickleball Kingdom Watchung",
   "away": "Monroe",
   "time": "2026-10-19T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Bounce Tempest",
   "away": "Jersey Devil",
   "time": "2026-10-19T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Pickle House",
   "away": "ACE Moorestown",
   "time": "2026-10-19T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Bounce Malvern",
   "away": "Picklr Newtown",
   "time": "2026-10-19T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Premiere",
   "away": "Flemington",
   "time": "2026-10-24T09:00:00",
   "complete": false
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
   "result": null,
   "week": 9,
   "home": "Picklr Newtown",
   "away": "Bounce Malvern",
   "time": "2026-10-24T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Dill Dinkers Freehold",
   "away": "Pickleball Kingdom Watchung",
   "time": "2026-10-24T15:00:00",
   "complete": false
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
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Picklr Newtown",
   "away": "ACE Moorestown",
   "time": "2026-10-26T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Jersey Pickleball Club",
   "away": "Flemington",
   "time": "2026-10-26T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Bounce Tempest",
   "away": "Bounce Malvern",
   "time": "2026-10-26T19:30:00",
   "complete": false
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
   "home": "Pickle House",
   "away": "Jersey Devil",
   "time": "2026-10-26T19:30:00",
   "complete": false
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
   "home": "Pickleball Kingdom Watchung",
   "away": "Jersey Pickleball Club",
   "time": "2026-11-02T19:30:00",
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
   "home": "Bounce Malvern",
   "away": "Pickle House",
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
   "home": "Pickleball Kingdom Watchung",
   "away": "Flemington",
   "time": "2026-11-09T19:30:00",
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
   "home": "Flemington",
   "away": "Jersey Pickleball Club",
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
  "Nicholas Howcumfu": "31ce4087-c3ba-4db5-878a-c4c19a52f2a3",
  "Meet Patel": "455edf3d-7568-49ab-b20b-4b66591ed544",
  "Nicholas Yandoli": "5ec3a192-8b1f-43ab-a348-739a0ba15429",
  "Royce Chan": "68274c39-0102-4554-978e-1aa50a0b3fba",
  "Matthew Chen": "68e9ac74-5119-4dbb-8503-72bcdbade183",
  "Doug Horton": "b0b23784-946d-4ba9-bfc9-e3a81d6ead7c",
  "Christopher Yang": "efe3ef0c-82f8-4370-89cc-ec41bd6719cc",
  "Salman Saad": "f7c4d103-d246-456d-8fd5-6418c6a0e002"
 },
 "meta": {
  "matchesPlayed": 12,
  "provisionalMatches": 0,
  "weeks": "1-2",
  "totalPlayers": 162,
  "ratingHistoryWeeks": [
   1,
   2
  ],
  "divisionSlug": "cca69ab9",
  "hasPlayoffs": false,
  "typicalDay": "Mondays",
  "detailFile": "detail-cca69ab9.js",
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
  DATA.meta.asOf = "2026-09-01T13:52:31.840Z";
  window.DATA = DATA;
  window.CPL_DATASETS = window.CPL_DATASETS || {};
  window.CPL_DATASETS["cca69ab9"] = DATA;
})();
