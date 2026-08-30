(function () {
  const DATA = {
 "players": [
  {
   "name": "Martina Tejeda",
   "gender": "Female",
   "team": "Pickleball Bandits",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 12,
   "losses": 0,
   "pointsWon": 252,
   "totalPointsAgainst": 192,
   "mixedWins": 6,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 0,
   "clutchWins": 4,
   "clutchLosses": 0,
   "playerId": "8d954af5-f3d4-45c9-a172-0fe2cbdc4e14",
   "winPct": 100,
   "diff": 60,
   "ppg": 21,
   "leagueRank": 7,
   "rating": 1.9,
   "ratingGames": 12,
   "confidence": 70,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": -1.8
  },
  {
   "name": "Srilahari Kunchapu",
   "gender": "Female",
   "team": "Summer Heat",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 124,
   "totalPointsAgainst": 101,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "33e099cc-4164-43df-8b34-32fd7a5d9a46",
   "winPct": 83.3,
   "diff": 23,
   "ppg": 20.7,
   "leagueRank": 33,
   "rating": 2.8,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.2
  },
  {
   "name": "Evan Sinclair",
   "gender": "Male",
   "team": "Kitchen Nightmare",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 123,
   "totalPointsAgainst": 105,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 0,
   "playerId": "44de3ff2-3b41-4c10-908c-8057a94e1d75",
   "winPct": 83.3,
   "diff": 18,
   "ppg": 20.5,
   "leagueRank": 40,
   "rating": 0.4,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -1.2
  },
  {
   "name": "Xin Liu",
   "gender": "Male",
   "team": "Summer Smasher",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 23,
   "losses": 7,
   "pointsWon": 606,
   "totalPointsAgainst": 480,
   "mixedWins": 12,
   "mixedLosses": 3,
   "genderWins": 11,
   "genderLosses": 4,
   "clutchWins": 6,
   "clutchLosses": 2,
   "winPct": 76.7,
   "diff": 126,
   "ppg": 20.2,
   "leagueRank": 2,
   "rating": 2,
   "ratingGames": 30,
   "confidence": 84,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -1.1,
   "playerId": "463e1402-cc46-4152-9012-c4308a6dd9b4"
  },
  {
   "name": "Mary Shaila Mendoza",
   "gender": "Female",
   "team": "Summer Smasher",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 48,
   "wins": 36,
   "losses": 12,
   "pointsWon": 963,
   "totalPointsAgainst": 750,
   "mixedWins": 14,
   "mixedLosses": 9,
   "genderWins": 22,
   "genderLosses": 3,
   "clutchWins": 5,
   "clutchLosses": 7,
   "winPct": 75,
   "diff": 213,
   "ppg": 20.1,
   "leagueRank": 3,
   "rating": 3.7,
   "ratingGames": 48,
   "confidence": 88,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.1,
   "playerId": "f64b8044-4d67-413e-8d34-c1b9de570fcb"
  },
  {
   "name": "Benji Berry",
   "gender": "Male",
   "team": "Pickleball Bandits",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 31,
   "losses": 11,
   "pointsWon": 852,
   "totalPointsAgainst": 692,
   "mixedWins": 15,
   "mixedLosses": 6,
   "genderWins": 16,
   "genderLosses": 5,
   "clutchWins": 7,
   "clutchLosses": 6,
   "winPct": 73.8,
   "diff": 160,
   "ppg": 20.3,
   "leagueRank": 1,
   "rating": 3.9,
   "ratingGames": 42,
   "confidence": 87,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": -0.4,
   "playerId": "ba2074e2-3e52-477b-a44e-54ce33392484"
  },
  {
   "name": "Matthew Mintz",
   "gender": "Male",
   "team": "Summer Smasher",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 31,
   "losses": 11,
   "pointsWon": 823,
   "totalPointsAgainst": 721,
   "mixedWins": 16,
   "mixedLosses": 4,
   "genderWins": 15,
   "genderLosses": 7,
   "clutchWins": 11,
   "clutchLosses": 1,
   "winPct": 73.8,
   "diff": 102,
   "ppg": 19.6,
   "leagueRank": 5,
   "rating": 2.8,
   "ratingGames": 42,
   "confidence": 86,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.9,
   "playerId": "ad956d26-e552-40eb-97c4-38edfc1b0bc1"
  },
  {
   "name": "Michelle Quach",
   "gender": "Female",
   "team": "Summer Heat",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 139,
   "totalPointsAgainst": 108,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "5f0dcbe9-bb0e-496d-99d2-06f01ff2c77b",
   "winPct": 71.4,
   "diff": 31,
   "ppg": 19.9,
   "leagueRank": 50,
   "rating": 2.4,
   "ratingGames": 7,
   "confidence": 57,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.5
  },
  {
   "name": "Kate Siedell",
   "gender": "Female",
   "team": "Summer Smasher",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 49,
   "wins": 34,
   "losses": 15,
   "pointsWon": 982,
   "totalPointsAgainst": 870,
   "mixedWins": 19,
   "mixedLosses": 8,
   "genderWins": 15,
   "genderLosses": 7,
   "clutchWins": 8,
   "clutchLosses": 11,
   "winPct": 69.4,
   "diff": 112,
   "ppg": 20,
   "leagueRank": 8,
   "rating": 1.7,
   "ratingGames": 49,
   "confidence": 87,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 0.6,
   "playerId": "8decf039-f1e5-4182-b3cf-6756789ae87a"
  },
  {
   "name": "Kendra Johnson",
   "gender": "Female",
   "team": "Summer Smasher",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 11,
   "losses": 5,
   "pointsWon": 314,
   "totalPointsAgainst": 268,
   "mixedWins": 7,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 1,
   "playerId": "5e2e33ed-390f-4f0e-96de-c1b4c2e6b587",
   "winPct": 68.8,
   "diff": 46,
   "ppg": 19.6,
   "leagueRank": 23,
   "rating": 1.9,
   "ratingGames": 16,
   "confidence": 75,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.1
  },
  {
   "name": "Daniel Dechristopher",
   "gender": "Male",
   "team": "Summer Heat",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 24,
   "losses": 11,
   "pointsWon": 703,
   "totalPointsAgainst": 591,
   "mixedWins": 9,
   "mixedLosses": 6,
   "genderWins": 15,
   "genderLosses": 5,
   "clutchWins": 5,
   "clutchLosses": 9,
   "winPct": 68.6,
   "diff": 112,
   "ppg": 20.1,
   "leagueRank": 4,
   "rating": 2.9,
   "ratingGames": 35,
   "confidence": 84,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.4,
   "playerId": "899ba1d1-37e5-4ad6-8daa-f726376776e5"
  },
  {
   "name": "Laura Sweet",
   "gender": "Female",
   "team": "Summer Smasher",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 60,
   "wins": 41,
   "losses": 19,
   "pointsWon": 1174,
   "totalPointsAgainst": 1019,
   "mixedWins": 18,
   "mixedLosses": 11,
   "genderWins": 23,
   "genderLosses": 8,
   "clutchWins": 9,
   "clutchLosses": 7,
   "winPct": 68.3,
   "diff": 155,
   "ppg": 19.6,
   "leagueRank": 10,
   "rating": 1.7,
   "ratingGames": 60,
   "confidence": 90,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.2,
   "playerId": "7b7b29be-c4b7-4ca9-8fd9-77ec362e761b"
  },
  {
   "name": "Yongzhe Tian",
   "gender": "Male",
   "team": "Summer Heat",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 23,
   "losses": 11,
   "pointsWon": 646,
   "totalPointsAgainst": 555,
   "mixedWins": 12,
   "mixedLosses": 5,
   "genderWins": 11,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 67.6,
   "diff": 91,
   "ppg": 19,
   "leagueRank": 6,
   "rating": 2.6,
   "ratingGames": 34,
   "confidence": 85,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.3,
   "playerId": "e1a924b8-3b3a-4780-8348-08a730ba61f2"
  },
  {
   "name": "Victoria Rolon",
   "gender": "Female",
   "team": "Summer Smasher",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 119,
   "totalPointsAgainst": 114,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "dad8c60e-028f-4716-a64d-8fcbaffc4a1f",
   "winPct": 66.7,
   "diff": 5,
   "ppg": 19.8,
   "leagueRank": 66,
   "rating": -0.9,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -1.5
  },
  {
   "name": "Renee Celentano",
   "gender": "Female",
   "team": "Kitchen Nightmare",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 9,
   "losses": 5,
   "pointsWon": 260,
   "totalPointsAgainst": 246,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 6,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 64.3,
   "diff": 14,
   "ppg": 18.6,
   "leagueRank": 42,
   "rating": 2.2,
   "ratingGames": 14,
   "confidence": 71,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.9,
   "playerId": "435b8a19-2bd0-4a7b-a3d5-e1ff0c6222ad"
  },
  {
   "name": "Bianca Previdi",
   "gender": "Female",
   "team": "Kitchen Nightmare",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 26,
   "losses": 15,
   "pointsWon": 792,
   "totalPointsAgainst": 726,
   "mixedWins": 11,
   "mixedLosses": 8,
   "genderWins": 15,
   "genderLosses": 7,
   "clutchWins": 10,
   "clutchLosses": 7,
   "winPct": 63.4,
   "diff": 66,
   "ppg": 19.3,
   "leagueRank": 12,
   "rating": 1.2,
   "ratingGames": 41,
   "confidence": 87,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.1,
   "playerId": "815db0d4-3674-4cf2-bbf1-c3e7dcc938a2"
  },
  {
   "name": "Jim Kochanski",
   "gender": "Male",
   "team": "Kitchen Nightmare",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 17,
   "losses": 10,
   "pointsWon": 530,
   "totalPointsAgainst": 496,
   "mixedWins": 9,
   "mixedLosses": 5,
   "genderWins": 8,
   "genderLosses": 5,
   "clutchWins": 8,
   "clutchLosses": 4,
   "winPct": 63,
   "diff": 34,
   "ppg": 19.6,
   "leagueRank": 11,
   "rating": 1.7,
   "ratingGames": 27,
   "confidence": 83,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.6,
   "playerId": "7ac5141f-b982-457a-a893-6f18c0e8e375"
  },
  {
   "name": "Justin Green",
   "gender": "Male",
   "team": "Summer Heat",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 23,
   "losses": 14,
   "pointsWon": 719,
   "totalPointsAgainst": 640,
   "mixedWins": 9,
   "mixedLosses": 10,
   "genderWins": 14,
   "genderLosses": 4,
   "clutchWins": 5,
   "clutchLosses": 7,
   "winPct": 62.2,
   "diff": 79,
   "ppg": 19.4,
   "leagueRank": 9,
   "rating": 1.7,
   "ratingGames": 37,
   "confidence": 85,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.2,
   "playerId": "315ccc2c-86b9-429c-9d60-aae57ea0fff6"
  },
  {
   "name": "Bruce Nguyen",
   "gender": "Male",
   "team": "Summer Smasher",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 26,
   "losses": 16,
   "pointsWon": 837,
   "totalPointsAgainst": 765,
   "mixedWins": 13,
   "mixedLosses": 8,
   "genderWins": 13,
   "genderLosses": 8,
   "clutchWins": 8,
   "clutchLosses": 10,
   "winPct": 61.9,
   "diff": 72,
   "ppg": 19.9,
   "leagueRank": 15,
   "rating": 0.6,
   "ratingGames": 42,
   "confidence": 86,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.2,
   "playerId": "33233dc6-b78e-4deb-88d4-2742aacf5eb9"
  },
  {
   "name": "Olivia Schaller",
   "gender": "Female",
   "team": "Summer Smasher",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 8,
   "losses": 5,
   "pointsWon": 258,
   "totalPointsAgainst": 212,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 3,
   "playerId": "84c96e34-809c-4b34-9005-8ea76ca6a233",
   "winPct": 61.5,
   "diff": 46,
   "ppg": 19.8,
   "leagueRank": 38,
   "rating": 2.6,
   "ratingGames": 13,
   "confidence": 73,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.2
  },
  {
   "name": "Heather Conger",
   "gender": "Female",
   "team": "Summer Heat",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 8,
   "losses": 5,
   "pointsWon": 237,
   "totalPointsAgainst": 222,
   "mixedWins": 6,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 2,
   "playerId": "56cf07d5-e5fe-42b9-a6ab-c30b2d4fe2c5",
   "winPct": 61.5,
   "diff": 15,
   "ppg": 18.2,
   "leagueRank": 47,
   "rating": 1.4,
   "ratingGames": 13,
   "confidence": 70,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.4
  },
  {
   "name": "Daniel Hadley",
   "gender": "Male",
   "team": "Pickleball Bandits",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 31,
   "wins": 19,
   "losses": 12,
   "pointsWon": 593,
   "totalPointsAgainst": 548,
   "mixedWins": 12,
   "mixedLosses": 4,
   "genderWins": 7,
   "genderLosses": 8,
   "clutchWins": 5,
   "clutchLosses": 6,
   "winPct": 61.3,
   "diff": 45,
   "ppg": 19.1,
   "leagueRank": 14,
   "rating": 1.1,
   "ratingGames": 31,
   "confidence": 84,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -0.4,
   "playerId": "23adcd68-130d-4176-b367-d3cd31260d21"
  },
  {
   "name": "Danielle Kane",
   "gender": "Female",
   "team": "Pickleball Bandits",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 21,
   "losses": 14,
   "pointsWon": 677,
   "totalPointsAgainst": 651,
   "mixedWins": 10,
   "mixedLosses": 6,
   "genderWins": 11,
   "genderLosses": 8,
   "clutchWins": 10,
   "clutchLosses": 8,
   "winPct": 60,
   "diff": 26,
   "ppg": 19.3,
   "leagueRank": 13,
   "rating": 2.5,
   "ratingGames": 35,
   "confidence": 85,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 1,
   "playerId": "2e70afa6-2efb-4f99-aa57-388b45aa31cb"
  },
  {
   "name": "Patty Andrzejewski",
   "gender": "Female",
   "team": "Kitchen Nightmare",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 62,
   "wins": 37,
   "losses": 25,
   "pointsWon": 1160,
   "totalPointsAgainst": 1095,
   "mixedWins": 13,
   "mixedLosses": 18,
   "genderWins": 24,
   "genderLosses": 7,
   "clutchWins": 10,
   "clutchLosses": 9,
   "winPct": 59.7,
   "diff": 65,
   "ppg": 18.7,
   "leagueRank": 16,
   "rating": -0.4,
   "ratingGames": 62,
   "confidence": 89,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -1,
   "playerId": "1f25ceda-8df3-4d7c-87ab-efca36d548f2"
  },
  {
   "name": "Yuri Paritsky",
   "gender": "Male",
   "team": "Summer Smasher",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 21,
   "losses": 15,
   "pointsWon": 683,
   "totalPointsAgainst": 658,
   "mixedWins": 10,
   "mixedLosses": 8,
   "genderWins": 11,
   "genderLosses": 7,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 58.3,
   "diff": 25,
   "ppg": 19,
   "leagueRank": 21,
   "rating": -0.8,
   "ratingGames": 36,
   "confidence": 86,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.9,
   "playerId": "812b9580-5a00-44a9-a5ed-5d1046755718"
  },
  {
   "name": "Chris Machuzak",
   "gender": "Male",
   "team": "Pickleball Bandits",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 7,
   "losses": 5,
   "pointsWon": 222,
   "totalPointsAgainst": 219,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "dba4c9d8-6ffb-49ae-99d1-79c341a68de7",
   "winPct": 58.3,
   "diff": 3,
   "ppg": 18.5,
   "leagueRank": 54,
   "rating": 0.3,
   "ratingGames": 12,
   "confidence": 70,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -0.4
  },
  {
   "name": "Peter David",
   "gender": "Male",
   "team": "Summer Smasher",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 40,
   "wins": 23,
   "losses": 17,
   "pointsWon": 780,
   "totalPointsAgainst": 721,
   "mixedWins": 13,
   "mixedLosses": 8,
   "genderWins": 10,
   "genderLosses": 9,
   "clutchWins": 7,
   "clutchLosses": 7,
   "winPct": 57.5,
   "diff": 59,
   "ppg": 19.5,
   "leagueRank": 17,
   "rating": 0.5,
   "ratingGames": 40,
   "confidence": 87,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0,
   "playerId": "c5e40aa9-efbf-4937-b44d-1b8f06693ba4"
  },
  {
   "name": "Pam Boyd",
   "gender": "Female",
   "team": "Summer Heat",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 140,
   "totalPointsAgainst": 129,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 2,
   "playerId": "04aefa29-20e3-41b7-a680-19d13f9d4289",
   "winPct": 57.1,
   "diff": 11,
   "ppg": 20,
   "leagueRank": 61,
   "rating": 1.9,
   "ratingGames": 7,
   "confidence": 60,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.9
  },
  {
   "name": "Michelle Friedman",
   "gender": "Female",
   "team": "Kitchen Nightmare",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 126,
   "totalPointsAgainst": 121,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "95b1b428-2e56-4578-8cb3-574954ba8922",
   "winPct": 57.1,
   "diff": 5,
   "ppg": 18,
   "leagueRank": 68,
   "rating": 1.1,
   "ratingGames": 7,
   "confidence": 55,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.8
  },
  {
   "name": "Nada Abdelkarim",
   "gender": "Female",
   "team": "Pickleball Bandits",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 124,
   "totalPointsAgainst": 124,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "bf00658c-c290-41dd-96dd-e63f723fa6cc",
   "winPct": 57.1,
   "diff": 0,
   "ppg": 17.7,
   "leagueRank": 69,
   "rating": -0.4,
   "ratingGames": 7,
   "confidence": 58,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.1
  },
  {
   "name": "Adam Lowther",
   "gender": "Male",
   "team": "Summer Smasher",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 17,
   "losses": 13,
   "pointsWon": 555,
   "totalPointsAgainst": 549,
   "mixedWins": 6,
   "mixedLosses": 9,
   "genderWins": 11,
   "genderLosses": 4,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 56.7,
   "diff": 6,
   "ppg": 18.5,
   "leagueRank": 28,
   "rating": -1.3,
   "ratingGames": 30,
   "confidence": 84,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": -1.5,
   "playerId": "fc25c569-51b2-46a9-9dde-88cf56493e62"
  },
  {
   "name": "Pallavi Deshpande",
   "gender": "Female",
   "team": "Kitchen Nightmare",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 62,
   "wins": 35,
   "losses": 27,
   "pointsWon": 1163,
   "totalPointsAgainst": 1099,
   "mixedWins": 15,
   "mixedLosses": 16,
   "genderWins": 20,
   "genderLosses": 11,
   "clutchWins": 10,
   "clutchLosses": 11,
   "winPct": 56.5,
   "diff": 64,
   "ppg": 18.8,
   "leagueRank": 18,
   "rating": -0.9,
   "ratingGames": 62,
   "confidence": 90,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -1.2,
   "playerId": "92f3c12c-3291-4176-acd2-2bbd5b83136c"
  },
  {
   "name": "Jimmy Shapiro",
   "gender": "Male",
   "team": "Summer Smasher",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 18,
   "losses": 14,
   "pointsWon": 612,
   "totalPointsAgainst": 575,
   "mixedWins": 8,
   "mixedLosses": 8,
   "genderWins": 10,
   "genderLosses": 6,
   "clutchWins": 7,
   "clutchLosses": 4,
   "winPct": 56.3,
   "diff": 37,
   "ppg": 19.1,
   "leagueRank": 20,
   "rating": 0.3,
   "ratingGames": 32,
   "confidence": 85,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.2,
   "playerId": "7b57c36d-a6eb-470e-b132-26d1f2a47b74"
  },
  {
   "name": "Jacquie Verish",
   "gender": "Female",
   "team": "Pickleball Bandits",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 48,
   "wins": 26,
   "losses": 22,
   "pointsWon": 871,
   "totalPointsAgainst": 844,
   "mixedWins": 15,
   "mixedLosses": 9,
   "genderWins": 11,
   "genderLosses": 13,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 54.2,
   "diff": 27,
   "ppg": 18.1,
   "leagueRank": 27,
   "rating": -0.3,
   "ratingGames": 48,
   "confidence": 88,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.6,
   "playerId": "6f126e55-bb02-4c7d-a69d-db30473ad0b3"
  },
  {
   "name": "Joseph Jaworski",
   "gender": "Male",
   "team": "Kitchen Nightmare",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 20,
   "losses": 17,
   "pointsWon": 701,
   "totalPointsAgainst": 687,
   "mixedWins": 13,
   "mixedLosses": 5,
   "genderWins": 7,
   "genderLosses": 12,
   "clutchWins": 8,
   "clutchLosses": 7,
   "winPct": 54.1,
   "diff": 14,
   "ppg": 18.9,
   "leagueRank": 22,
   "rating": -0.3,
   "ratingGames": 37,
   "confidence": 86,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.5,
   "playerId": "0d249b57-f116-43a0-b03f-c7229bc65112"
  },
  {
   "name": "Allison Cavicchio",
   "gender": "Female",
   "team": "Kitchen Nightmare",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 52,
   "wins": 28,
   "losses": 24,
   "pointsWon": 974,
   "totalPointsAgainst": 964,
   "mixedWins": 14,
   "mixedLosses": 14,
   "genderWins": 14,
   "genderLosses": 10,
   "clutchWins": 13,
   "clutchLosses": 9,
   "winPct": 53.8,
   "diff": 10,
   "ppg": 18.7,
   "leagueRank": 24,
   "rating": 1.5,
   "ratingGames": 52,
   "confidence": 88,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 1,
   "playerId": "79f8f03e-72ee-4c5e-a4d4-cd1c381fb302"
  },
  {
   "name": "Daniel Borgia",
   "gender": "Male",
   "team": "Summer Heat",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 22,
   "losses": 19,
   "pointsWon": 788,
   "totalPointsAgainst": 778,
   "mixedWins": 10,
   "mixedLosses": 11,
   "genderWins": 12,
   "genderLosses": 8,
   "clutchWins": 9,
   "clutchLosses": 8,
   "winPct": 53.7,
   "diff": 10,
   "ppg": 19.2,
   "leagueRank": 19,
   "rating": 0.8,
   "ratingGames": 41,
   "confidence": 86,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.5,
   "playerId": "ae3cd925-c856-44dd-9cf5-3a2bd343adf2"
  },
  {
   "name": "Justine Inton",
   "gender": "Female",
   "team": "Summer Smasher",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 20,
   "losses": 18,
   "pointsWon": 699,
   "totalPointsAgainst": 666,
   "mixedWins": 7,
   "mixedLosses": 12,
   "genderWins": 13,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 52.6,
   "diff": 33,
   "ppg": 18.4,
   "leagueRank": 29,
   "rating": -0.8,
   "ratingGames": 38,
   "confidence": 86,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -1,
   "playerId": "fda50f9c-6e7b-42de-a8fd-f7140995bd49"
  },
  {
   "name": "Alexandria Mlkvy",
   "gender": "Female",
   "team": "Pickleball Bandits",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 20,
   "losses": 18,
   "pointsWon": 709,
   "totalPointsAgainst": 704,
   "mixedWins": 10,
   "mixedLosses": 10,
   "genderWins": 10,
   "genderLosses": 8,
   "clutchWins": 6,
   "clutchLosses": 5,
   "winPct": 52.6,
   "diff": 5,
   "ppg": 18.7,
   "leagueRank": 25,
   "rating": 0.8,
   "ratingGames": 38,
   "confidence": 87,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.3,
   "playerId": "3207fd7d-1bc1-44df-a915-8eb4019821db"
  },
  {
   "name": "Ying Tang",
   "gender": "Female",
   "team": "Pickleball Bandits",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 115,
   "totalPointsAgainst": 111,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "9e8b7712-857f-4f71-a3f3-ac3527f0b719",
   "winPct": 50,
   "diff": 4,
   "ppg": 19.2,
   "leagueRank": 67,
   "rating": 0,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": -1,
   "strengthOfOpponents": -0.8
  },
  {
   "name": "Steve Hong",
   "gender": "Male",
   "team": "Summer Smasher",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 18,
   "losses": 18,
   "pointsWon": 655,
   "totalPointsAgainst": 660,
   "mixedWins": 7,
   "mixedLosses": 11,
   "genderWins": 11,
   "genderLosses": 7,
   "clutchWins": 5,
   "clutchLosses": 5,
   "winPct": 50,
   "diff": -5,
   "ppg": 18.2,
   "leagueRank": 32,
   "rating": -1.2,
   "ratingGames": 36,
   "confidence": 85,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.4,
   "playerId": "a861a127-253c-4cb2-a1d6-93a37558b93a"
  },
  {
   "name": "Nancy Dippolito",
   "gender": "Female",
   "team": "Summer Smasher",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 10,
   "losses": 10,
   "pointsWon": 354,
   "totalPointsAgainst": 387,
   "mixedWins": 5,
   "mixedLosses": 5,
   "genderWins": 5,
   "genderLosses": 5,
   "clutchWins": 6,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": -33,
   "ppg": 17.7,
   "leagueRank": 53,
   "rating": -3.6,
   "ratingGames": 20,
   "confidence": 79,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -1.4,
   "playerId": "1b7bdbc4-f45a-4db7-8994-103ae87c13d3"
  },
  {
   "name": "Stacey Frank",
   "gender": "Female",
   "team": "Summer Heat",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 20,
   "losses": 22,
   "pointsWon": 796,
   "totalPointsAgainst": 801,
   "mixedWins": 15,
   "mixedLosses": 9,
   "genderWins": 5,
   "genderLosses": 13,
   "clutchWins": 8,
   "clutchLosses": 10,
   "winPct": 47.6,
   "diff": -5,
   "ppg": 19,
   "leagueRank": 26,
   "rating": 2.1,
   "ratingGames": 42,
   "confidence": 86,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 1.4,
   "playerId": "768c88bd-683d-4204-8124-a589c8028b6e"
  },
  {
   "name": "Jj Pospiech",
   "gender": "Male",
   "team": "Kitchen Nightmare",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 16,
   "losses": 18,
   "pointsWon": 625,
   "totalPointsAgainst": 620,
   "mixedWins": 7,
   "mixedLosses": 10,
   "genderWins": 9,
   "genderLosses": 8,
   "clutchWins": 5,
   "clutchLosses": 8,
   "winPct": 47.1,
   "diff": 5,
   "ppg": 18.4,
   "leagueRank": 30,
   "rating": 1.1,
   "ratingGames": 34,
   "confidence": 84,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.7,
   "playerId": "6658ab78-4eee-48fb-aa13-0b6f14398a76"
  },
  {
   "name": "Neale Smith",
   "gender": "Male",
   "team": "Kitchen Nightmare",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 47,
   "wins": 22,
   "losses": 25,
   "pointsWon": 855,
   "totalPointsAgainst": 896,
   "mixedWins": 11,
   "mixedLosses": 14,
   "genderWins": 11,
   "genderLosses": 11,
   "clutchWins": 12,
   "clutchLosses": 9,
   "winPct": 46.8,
   "diff": -41,
   "ppg": 18.2,
   "leagueRank": 34,
   "rating": -0.3,
   "ratingGames": 47,
   "confidence": 88,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.6,
   "playerId": "bd958367-8cce-4f24-ba5a-208bac9b42b0"
  },
  {
   "name": "Kaleigh Hadley",
   "gender": "Female",
   "team": "Pickleball Bandits",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 49,
   "wins": 22,
   "losses": 27,
   "pointsWon": 864,
   "totalPointsAgainst": 952,
   "mixedWins": 13,
   "mixedLosses": 14,
   "genderWins": 9,
   "genderLosses": 13,
   "clutchWins": 13,
   "clutchLosses": 6,
   "winPct": 44.9,
   "diff": -88,
   "ppg": 17.6,
   "leagueRank": 37,
   "rating": 0.5,
   "ratingGames": 49,
   "confidence": 87,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 1.3,
   "playerId": "ccc68505-7ec7-474a-a96f-891b618d657e"
  },
  {
   "name": "Fran Mccrory",
   "gender": "Female",
   "team": "Summer Smasher",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 17,
   "losses": 21,
   "pointsWon": 660,
   "totalPointsAgainst": 723,
   "mixedWins": 9,
   "mixedLosses": 10,
   "genderWins": 8,
   "genderLosses": 11,
   "clutchWins": 7,
   "clutchLosses": 4,
   "winPct": 44.7,
   "diff": -63,
   "ppg": 17.4,
   "leagueRank": 52,
   "rating": -4.1,
   "ratingGames": 38,
   "confidence": 86,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -1.3,
   "playerId": "709c44fc-b254-4998-b6be-bd7461aee908"
  },
  {
   "name": "Richard Renza",
   "gender": "Male",
   "team": "Summer Heat",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 16,
   "losses": 20,
   "pointsWon": 650,
   "totalPointsAgainst": 698,
   "mixedWins": 9,
   "mixedLosses": 9,
   "genderWins": 7,
   "genderLosses": 11,
   "clutchWins": 9,
   "clutchLosses": 4,
   "winPct": 44.4,
   "diff": -48,
   "ppg": 18.1,
   "leagueRank": 36,
   "rating": -0.7,
   "ratingGames": 36,
   "confidence": 85,
   "strengthOfPartners": -2,
   "strengthOfOpponents": -0.7,
   "playerId": "57c13577-73cb-43f9-b0ac-cc939e10a749"
  },
  {
   "name": "Arpita Vaidya",
   "gender": "Female",
   "team": "Kitchen Nightmare",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 50,
   "wins": 22,
   "losses": 28,
   "pointsWon": 935,
   "totalPointsAgainst": 941,
   "mixedWins": 9,
   "mixedLosses": 15,
   "genderWins": 13,
   "genderLosses": 13,
   "clutchWins": 9,
   "clutchLosses": 9,
   "playerId": "76e829fc-dfa9-4d0c-86ca-eaed7dc4a11a",
   "winPct": 44,
   "diff": -6,
   "ppg": 18.7,
   "leagueRank": 31,
   "rating": 0.6,
   "ratingGames": 50,
   "confidence": 89,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.3
  },
  {
   "name": "Christopher Yang",
   "gender": "Male",
   "team": "Pickleball Bandits",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 9,
   "losses": 12,
   "pointsWon": 387,
   "totalPointsAgainst": 397,
   "mixedWins": 6,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 8,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 42.9,
   "diff": -10,
   "ppg": 18.4,
   "leagueRank": 43,
   "rating": 1.2,
   "ratingGames": 21,
   "confidence": 79,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 1.3,
   "playerId": "efe3ef0c-82f8-4370-89cc-ec41bd6719cc"
  },
  {
   "name": "Donna Arsenault",
   "gender": "Female",
   "team": "Pickleball Bandits",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 117,
   "totalPointsAgainst": 138,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "085d76d3-6f7d-41d8-b7ee-1fbc4bb6b22a",
   "winPct": 42.9,
   "diff": -21,
   "ppg": 16.7,
   "leagueRank": 70,
   "rating": 0.3,
   "ratingGames": 7,
   "confidence": 60,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 1.1
  },
  {
   "name": "Jonathan Carter",
   "gender": "Male",
   "team": "Pickleball Bandits",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 15,
   "losses": 21,
   "pointsWon": 630,
   "totalPointsAgainst": 684,
   "mixedWins": 5,
   "mixedLosses": 13,
   "genderWins": 10,
   "genderLosses": 8,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 41.7,
   "diff": -54,
   "ppg": 17.5,
   "leagueRank": 45,
   "rating": -2.4,
   "ratingGames": 36,
   "confidence": 85,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": -1.2,
   "playerId": "33fe293d-5913-41af-8f89-4a431ed92ab7"
  },
  {
   "name": "Matthew Inzerillo",
   "gender": "Male",
   "team": "Kitchen Nightmare",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 12,
   "losses": 18,
   "pointsWon": 557,
   "totalPointsAgainst": 557,
   "mixedWins": 6,
   "mixedLosses": 9,
   "genderWins": 6,
   "genderLosses": 9,
   "clutchWins": 4,
   "clutchLosses": 7,
   "winPct": 40,
   "diff": 0,
   "ppg": 18.6,
   "leagueRank": 35,
   "rating": 0.3,
   "ratingGames": 30,
   "confidence": 84,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -0.1,
   "playerId": "51ceabf9-8258-4835-9835-c7d915220185"
  },
  {
   "name": "Shayne Clowar",
   "gender": "Male",
   "team": "Kitchen Nightmare",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 14,
   "losses": 21,
   "pointsWon": 623,
   "totalPointsAgainst": 668,
   "mixedWins": 6,
   "mixedLosses": 10,
   "genderWins": 8,
   "genderLosses": 11,
   "clutchWins": 5,
   "clutchLosses": 5,
   "winPct": 40,
   "diff": -45,
   "ppg": 17.8,
   "leagueRank": 41,
   "rating": 0.7,
   "ratingGames": 35,
   "confidence": 85,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 1.3,
   "playerId": "30b75fd5-95cf-4a1a-b296-10e7e381166e"
  },
  {
   "name": "Brittany Jacobs",
   "gender": "Female",
   "team": "Pickleball Bandits",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 14,
   "losses": 22,
   "pointsWon": 642,
   "totalPointsAgainst": 691,
   "mixedWins": 5,
   "mixedLosses": 13,
   "genderWins": 9,
   "genderLosses": 9,
   "clutchWins": 4,
   "clutchLosses": 6,
   "winPct": 38.9,
   "diff": -49,
   "ppg": 17.8,
   "leagueRank": 51,
   "rating": -3,
   "ratingGames": 36,
   "confidence": 85,
   "strengthOfPartners": -1,
   "strengthOfOpponents": -1.5,
   "playerId": "15dcc305-70cf-4eb1-bde4-a50a30130f3a"
  },
  {
   "name": "Steven Pinto",
   "gender": "Male",
   "team": "Pickleball Bandits",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 54,
   "wins": 21,
   "losses": 33,
   "pointsWon": 962,
   "totalPointsAgainst": 1074,
   "mixedWins": 11,
   "mixedLosses": 14,
   "genderWins": 10,
   "genderLosses": 19,
   "clutchWins": 14,
   "clutchLosses": 10,
   "winPct": 38.9,
   "diff": -112,
   "ppg": 17.8,
   "leagueRank": 44,
   "rating": -0.7,
   "ratingGames": 54,
   "confidence": 88,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.8,
   "playerId": "33cec39e-fe6c-4913-b41d-b2adc7916445"
  },
  {
   "name": "Aran Moultrop",
   "gender": "Male",
   "team": "Summer Heat",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 8,
   "losses": 13,
   "pointsWon": 390,
   "totalPointsAgainst": 408,
   "mixedWins": 4,
   "mixedLosses": 8,
   "genderWins": 4,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 5,
   "winPct": 38.1,
   "diff": -18,
   "ppg": 18.6,
   "leagueRank": 46,
   "rating": 1.4,
   "ratingGames": 21,
   "confidence": 78,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 1.5,
   "playerId": "510ab3e1-ed6c-4ea3-b0d3-5e8027854fed"
  },
  {
   "name": "Mario Contreras",
   "gender": "Male",
   "team": "Summer Heat",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 9,
   "losses": 15,
   "pointsWon": 432,
   "totalPointsAgainst": 468,
   "mixedWins": 2,
   "mixedLosses": 10,
   "genderWins": 7,
   "genderLosses": 5,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 37.5,
   "diff": -36,
   "ppg": 18,
   "leagueRank": 39,
   "rating": -0.2,
   "ratingGames": 24,
   "confidence": 81,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.4,
   "playerId": "323d96c3-4160-410b-96a5-87263e825f62"
  },
  {
   "name": "Alex Kustas",
   "gender": "Male",
   "team": "Pickleball Bandits",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 62,
   "wins": 23,
   "losses": 39,
   "pointsWon": 1087,
   "totalPointsAgainst": 1216,
   "mixedWins": 14,
   "mixedLosses": 19,
   "genderWins": 9,
   "genderLosses": 20,
   "clutchWins": 9,
   "clutchLosses": 9,
   "winPct": 37.1,
   "diff": -129,
   "ppg": 17.5,
   "leagueRank": 48,
   "rating": -0.7,
   "ratingGames": 62,
   "confidence": 89,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 1,
   "playerId": "08b7041c-a90b-47ba-802a-5f71e6b98999"
  },
  {
   "name": "Taylor Johns",
   "gender": "Female",
   "team": "Pickleball Bandits",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 5,
   "losses": 9,
   "pointsWon": 257,
   "totalPointsAgainst": 271,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 4,
   "playerId": "7e92032d-7d47-485c-8641-ae8a7af4e3ac",
   "winPct": 35.7,
   "diff": -14,
   "ppg": 18.4,
   "leagueRank": 64,
   "rating": 0.9,
   "ratingGames": 14,
   "confidence": 74,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 1
  },
  {
   "name": "Lizzie Brofft",
   "gender": "Female",
   "team": "Summer Heat",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 93,
   "totalPointsAgainst": 121,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "d566e39d-ad62-41aa-be9c-a535f141a8ee",
   "winPct": 33.3,
   "diff": -28,
   "ppg": 15.5,
   "leagueRank": 73,
   "rating": -2.3,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": -2.6,
   "strengthOfOpponents": -0.8
  },
  {
   "name": "Mike Fu",
   "gender": "Male",
   "team": "Pickleball Bandits",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 10,
   "losses": 20,
   "pointsWon": 488,
   "totalPointsAgainst": 586,
   "mixedWins": 7,
   "mixedLosses": 8,
   "genderWins": 3,
   "genderLosses": 12,
   "clutchWins": 2,
   "clutchLosses": 5,
   "winPct": 33.3,
   "diff": -98,
   "ppg": 16.3,
   "leagueRank": 58,
   "rating": -4.3,
   "ratingGames": 30,
   "confidence": 83,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": -1.3,
   "playerId": "6374c589-eb0b-40c1-bafc-bc812a4a0758"
  },
  {
   "name": "Amy Maussner",
   "gender": "Female",
   "team": "Summer Heat",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 49,
   "wins": 15,
   "losses": 34,
   "pointsWon": 875,
   "totalPointsAgainst": 953,
   "mixedWins": 10,
   "mixedLosses": 14,
   "genderWins": 5,
   "genderLosses": 20,
   "clutchWins": 5,
   "clutchLosses": 15,
   "winPct": 30.6,
   "diff": -78,
   "ppg": 17.9,
   "leagueRank": 49,
   "rating": -0.7,
   "ratingGames": 49,
   "confidence": 89,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.1,
   "playerId": "8b17c8d0-5ea7-44ee-9a80-7e3c246c92d3"
  },
  {
   "name": "Laura Bruno",
   "gender": "Female",
   "team": "Summer Heat",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 119,
   "totalPointsAgainst": 140,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "3e9413ca-f37d-43e0-8380-957933a70055",
   "winPct": 28.6,
   "diff": -21,
   "ppg": 17,
   "leagueRank": 71,
   "rating": -1.7,
   "ratingGames": 7,
   "confidence": 60,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.6
  },
  {
   "name": "Jacob Alpert",
   "gender": "Male",
   "team": "Kitchen Nightmare",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 10,
   "losses": 26,
   "pointsWon": 610,
   "totalPointsAgainst": 692,
   "mixedWins": 8,
   "mixedLosses": 10,
   "genderWins": 2,
   "genderLosses": 16,
   "clutchWins": 1,
   "clutchLosses": 6,
   "winPct": 27.8,
   "diff": -82,
   "ppg": 16.9,
   "leagueRank": 57,
   "rating": -2,
   "ratingGames": 36,
   "confidence": 85,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -0.2,
   "playerId": "1cd5949a-4196-4e3a-a611-7188d34f4708"
  },
  {
   "name": "Leslie Laganella",
   "gender": "Female",
   "team": "Summer Heat",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 54,
   "wins": 14,
   "losses": 40,
   "pointsWon": 920,
   "totalPointsAgainst": 1074,
   "mixedWins": 12,
   "mixedLosses": 15,
   "genderWins": 2,
   "genderLosses": 25,
   "clutchWins": 6,
   "clutchLosses": 12,
   "winPct": 25.9,
   "diff": -154,
   "ppg": 17,
   "leagueRank": 55,
   "rating": -2.5,
   "ratingGames": 54,
   "confidence": 89,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": -0.5,
   "playerId": "79b88b19-d7ab-49ab-881c-888ff437ae90"
  },
  {
   "name": "Franky Coriano",
   "gender": "Male",
   "team": "Kitchen Nightmare",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 9,
   "losses": 27,
   "pointsWon": 620,
   "totalPointsAgainst": 711,
   "mixedWins": 5,
   "mixedLosses": 13,
   "genderWins": 4,
   "genderLosses": 14,
   "clutchWins": 3,
   "clutchLosses": 11,
   "winPct": 25,
   "diff": -91,
   "ppg": 17.2,
   "leagueRank": 59,
   "rating": -3.8,
   "ratingGames": 36,
   "confidence": 85,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -1,
   "playerId": "d0a23b1a-e947-4f18-ae88-bcfd503495be"
  },
  {
   "name": "Jiyun Yuh",
   "gender": "Female",
   "team": "Summer Heat",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 48,
   "wins": 12,
   "losses": 36,
   "pointsWon": 831,
   "totalPointsAgainst": 949,
   "mixedWins": 5,
   "mixedLosses": 18,
   "genderWins": 7,
   "genderLosses": 18,
   "clutchWins": 5,
   "clutchLosses": 8,
   "winPct": 25,
   "diff": -118,
   "ppg": 17.3,
   "leagueRank": 56,
   "rating": -1.6,
   "ratingGames": 48,
   "confidence": 88,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.8,
   "playerId": "c94ae231-9f0c-4212-b769-7bd708d8fc38"
  },
  {
   "name": "Will Lockard",
   "gender": "Male",
   "team": "Summer Heat",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 9,
   "losses": 27,
   "pointsWon": 594,
   "totalPointsAgainst": 714,
   "mixedWins": 5,
   "mixedLosses": 13,
   "genderWins": 4,
   "genderLosses": 14,
   "clutchWins": 5,
   "clutchLosses": 5,
   "winPct": 25,
   "diff": -120,
   "ppg": 16.5,
   "leagueRank": 60,
   "rating": -4,
   "ratingGames": 36,
   "confidence": 85,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": -1.3,
   "playerId": "7fadc717-5f7a-4df1-b0c5-6d4efa84e8c0"
  },
  {
   "name": "Lisa Pinder",
   "gender": "Female",
   "team": "Pickleball Bandits",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 36,
   "wins": 9,
   "losses": 27,
   "pointsWon": 575,
   "totalPointsAgainst": 718,
   "mixedWins": 7,
   "mixedLosses": 11,
   "genderWins": 2,
   "genderLosses": 16,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 25,
   "diff": -143,
   "ppg": 16,
   "leagueRank": 62,
   "rating": -3.9,
   "ratingGames": 36,
   "confidence": 85,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.1,
   "playerId": "7c49b9f3-7f46-4e68-8786-4fe39fdd8f2b"
  },
  {
   "name": "Richard Ross",
   "gender": "Male",
   "team": "Summer Heat",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 5,
   "losses": 19,
   "pointsWon": 371,
   "totalPointsAgainst": 480,
   "mixedWins": 3,
   "mixedLosses": 9,
   "genderWins": 2,
   "genderLosses": 10,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 20.8,
   "diff": -109,
   "ppg": 15.5,
   "leagueRank": 65,
   "rating": -3.7,
   "ratingGames": 24,
   "confidence": 81,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": -0.5,
   "playerId": "9d1192c8-e17a-4251-a23b-59d122f4bada"
  },
  {
   "name": "Linda Zarrilli",
   "gender": "Female",
   "team": "Summer Heat",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 98,
   "totalPointsAgainst": 124,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "d2a43eb3-f288-4ef4-bae9-209ab6ec0f0c",
   "winPct": 16.7,
   "diff": -26,
   "ppg": 16.3,
   "leagueRank": 74,
   "rating": -1.7,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": -2.2,
   "strengthOfOpponents": -0.3
  },
  {
   "name": "Stacy Ip-Mo",
   "gender": "Female",
   "team": "Summer Heat",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 2,
   "losses": 10,
   "pointsWon": 174,
   "totalPointsAgainst": 243,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "d0562c60-5e2c-4647-805c-ac3740562432",
   "winPct": 16.7,
   "diff": -69,
   "ppg": 14.5,
   "leagueRank": 72,
   "rating": -3.4,
   "ratingGames": 12,
   "confidence": 71,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.1
  },
  {
   "name": "Lorelei Mcglade",
   "gender": "Female",
   "team": "Summer Heat",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 31,
   "wins": 5,
   "losses": 26,
   "pointsWon": 515,
   "totalPointsAgainst": 635,
   "mixedWins": 2,
   "mixedLosses": 13,
   "genderWins": 3,
   "genderLosses": 13,
   "clutchWins": 2,
   "clutchLosses": 6,
   "winPct": 16.1,
   "diff": -120,
   "ppg": 16.6,
   "leagueRank": 63,
   "rating": -3.5,
   "ratingGames": 31,
   "confidence": 84,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": -0.7,
   "playerId": "c76ff0cb-72a1-4e1f-978e-a7706ea5e406"
  },
  {
   "name": "Ashwin Suresh",
   "gender": "Male",
   "team": "Pickleball Bandits",
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
   "playerId": "18d28c3d-a2d1-41fb-ae59-099684d673db"
  }
 ],
 "teams": [
  {
   "name": "Summer Smasher",
   "w": 7,
   "l": 2,
   "pf": 5671,
   "pa": 5203,
   "gw": 179,
   "gl": 109,
   "diff": 468,
   "gameDiff": 70,
   "power": 0.5,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     85,
     59
    ],
    "male": [
     46,
     26
    ],
    "female": [
     48,
     24
    ]
   }
  },
  {
   "name": "Kitchen Nightmare",
   "w": 5,
   "l": 4,
   "pf": 5456,
   "pa": 5431,
   "gw": 143,
   "gl": 145,
   "diff": 25,
   "gameDiff": -2,
   "power": 0,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     67,
     77
    ],
    "male": [
     29,
     43
    ],
    "female": [
     47,
     25
    ]
   }
  },
  {
   "name": "Pickleball Bandits",
   "w": 4,
   "l": 5,
   "pf": 5337,
   "pa": 5531,
   "gw": 137,
   "gl": 151,
   "diff": -194,
   "gameDiff": -14,
   "power": -0.3,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     73,
     71
    ],
    "male": [
     31,
     41
    ],
    "female": [
     33,
     39
    ]
   }
  },
  {
   "name": "Summer Heat",
   "w": 2,
   "l": 7,
   "pf": 5309,
   "pa": 5608,
   "gw": 117,
   "gl": 171,
   "diff": -299,
   "gameDiff": -54,
   "power": -0.4,
   "powerRank": 4,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     63,
     81
    ],
    "male": [
     38,
     34
    ],
    "female": [
     16,
     56
    ]
   }
  }
 ],
 "duos": [
  {
   "a": "Amy Maussner",
   "b": "Yongzhe Tian",
   "team": "Summer Heat",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 3.2,
   "avgActual": 9.3,
   "avgExpected": 1.8,
   "aId": "8b17c8d0-5ea7-44ee-9a80-7e3c246c92d3",
   "bId": "e1a924b8-3b3a-4780-8348-08a730ba61f2"
  },
  {
   "a": "Bruce Nguyen",
   "b": "Mary Shaila Mendoza",
   "team": "Summer Smasher",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2,
   "avgActual": 9,
   "avgExpected": 4.3,
   "aId": "33233dc6-b78e-4deb-88d4-2742aacf5eb9",
   "bId": "f64b8044-4d67-413e-8d34-c1b9de570fcb"
  },
  {
   "a": "Fran Mccrory",
   "b": "Mary Shaila Mendoza",
   "team": "Summer Smasher",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.9,
   "avgActual": 6.8,
   "avgExpected": 3,
   "aId": "709c44fc-b254-4998-b6be-bd7461aee908",
   "bId": "f64b8044-4d67-413e-8d34-c1b9de570fcb"
  },
  {
   "a": "Jj Pospiech",
   "b": "Bianca Previdi",
   "team": "Kitchen Nightmare",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.8,
   "avgActual": 4,
   "avgExpected": -0.3,
   "aId": "6658ab78-4eee-48fb-aa13-0b6f14398a76",
   "bId": "815db0d4-3674-4cf2-bbf1-c3e7dcc938a2"
  },
  {
   "a": "Jiyun Yuh",
   "b": "Yongzhe Tian",
   "team": "Summer Heat",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.7,
   "avgActual": 4.3,
   "avgExpected": 0.3,
   "aId": "c94ae231-9f0c-4212-b769-7bd708d8fc38",
   "bId": "e1a924b8-3b3a-4780-8348-08a730ba61f2"
  },
  {
   "a": "Will Lockard",
   "b": "Amy Maussner",
   "team": "Summer Heat",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.6,
   "avgActual": 2.7,
   "avgExpected": -1,
   "aId": "7fadc717-5f7a-4df1-b0c5-6d4efa84e8c0",
   "bId": "8b17c8d0-5ea7-44ee-9a80-7e3c246c92d3"
  },
  {
   "a": "Allison Cavicchio",
   "b": "Jim Kochanski",
   "team": "Kitchen Nightmare",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 3.2,
   "avgExpected": 0.8,
   "aId": "79f8f03e-72ee-4c5e-a4d4-cd1c381fb302",
   "bId": "7ac5141f-b982-457a-a893-6f18c0e8e375"
  },
  {
   "a": "Xin Liu",
   "b": "Jimmy Shapiro",
   "team": "Summer Smasher",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 7,
   "avgExpected": 3.7,
   "aId": "463e1402-cc46-4152-9012-c4308a6dd9b4",
   "bId": "7b57c36d-a6eb-470e-b132-26d1f2a47b74"
  },
  {
   "a": "Bruce Nguyen",
   "b": "Steve Hong",
   "team": "Summer Smasher",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.3,
   "avgActual": 1,
   "avgExpected": -1.6,
   "aId": "33233dc6-b78e-4deb-88d4-2742aacf5eb9",
   "bId": "a861a127-253c-4cb2-a1d6-93a37558b93a"
  },
  {
   "a": "Alex Kustas",
   "b": "Jonathan Carter",
   "team": "Pickleball Bandits",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.3,
   "avgActual": 1.3,
   "avgExpected": -1.3,
   "aId": "08b7041c-a90b-47ba-802a-5f71e6b98999",
   "bId": "33fe293d-5913-41af-8f89-4a431ed92ab7"
  },
  {
   "a": "Alex Kustas",
   "b": "Steven Pinto",
   "team": "Pickleball Bandits",
   "n": 11,
   "w": 3,
   "l": 8,
   "synergy": 1.2,
   "avgActual": -2.2,
   "avgExpected": -3.8,
   "aId": "08b7041c-a90b-47ba-802a-5f71e6b98999",
   "bId": "33cec39e-fe6c-4913-b41d-b2adc7916445"
  },
  {
   "a": "Brittany Jacobs",
   "b": "Jacquie Verish",
   "team": "Pickleball Bandits",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 1.2,
   "avgActual": 0.7,
   "avgExpected": -1.3,
   "aId": "15dcc305-70cf-4eb1-bde4-a50a30130f3a",
   "bId": "6f126e55-bb02-4c7d-a69d-db30473ad0b3"
  },
  {
   "a": "Kaleigh Hadley",
   "b": "Christopher Yang",
   "team": "Pickleball Bandits",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 1.2,
   "avgActual": 0.7,
   "avgExpected": -1.3,
   "aId": "ccc68505-7ec7-474a-a96f-891b618d657e",
   "bId": "efe3ef0c-82f8-4370-89cc-ec41bd6719cc"
  },
  {
   "a": "Lisa Pinder",
   "b": "Benji Berry",
   "team": "Pickleball Bandits",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 1.2,
   "avgActual": 1.9,
   "avgExpected": 0,
   "aId": "7c49b9f3-7f46-4e68-8786-4fe39fdd8f2b",
   "bId": "ba2074e2-3e52-477b-a44e-54ce33392484"
  },
  {
   "a": "Alexandria Mlkvy",
   "b": "Steven Pinto",
   "team": "Pickleball Bandits",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 1.1,
   "avgActual": 0,
   "avgExpected": -1.8,
   "aId": "3207fd7d-1bc1-44df-a915-8eb4019821db",
   "bId": "33cec39e-fe6c-4913-b41d-b2adc7916445"
  },
  {
   "a": "Richard Renza",
   "b": "Leslie Laganella",
   "team": "Summer Heat",
   "n": 9,
   "w": 5,
   "l": 4,
   "synergy": 1.1,
   "avgActual": 0.9,
   "avgExpected": -0.7,
   "aId": "57c13577-73cb-43f9-b0ac-cc939e10a749",
   "bId": "79b88b19-d7ab-49ab-881c-888ff437ae90"
  },
  {
   "a": "Shayne Clowar",
   "b": "Neale Smith",
   "team": "Kitchen Nightmare",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 1.1,
   "avgActual": -1.2,
   "avgExpected": -3,
   "aId": "30b75fd5-95cf-4a1a-b296-10e7e381166e",
   "bId": "bd958367-8cce-4f24-ba5a-208bac9b42b0"
  },
  {
   "a": "Mike Fu",
   "b": "Jacquie Verish",
   "team": "Pickleball Bandits",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 2.3,
   "avgExpected": -0.3,
   "aId": "6374c589-eb0b-40c1-bafc-bc812a4a0758",
   "bId": "6f126e55-bb02-4c7d-a69d-db30473ad0b3"
  },
  {
   "a": "Leslie Laganella",
   "b": "Will Lockard",
   "team": "Summer Heat",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": 0.9,
   "avgActual": -2.6,
   "avgExpected": -4.1,
   "aId": "79b88b19-d7ab-49ab-881c-888ff437ae90",
   "bId": "7fadc717-5f7a-4df1-b0c5-6d4efa84e8c0"
  },
  {
   "a": "Matthew Inzerillo",
   "b": "Bianca Previdi",
   "team": "Kitchen Nightmare",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.9,
   "avgActual": 3.3,
   "avgExpected": 1.1,
   "aId": "51ceabf9-8258-4835-9835-c7d915220185",
   "bId": "815db0d4-3674-4cf2-bbf1-c3e7dcc938a2"
  },
  {
   "a": "Patty Andrzejewski",
   "b": "Pallavi Deshpande",
   "team": "Kitchen Nightmare",
   "n": 13,
   "w": 11,
   "l": 2,
   "synergy": 0.9,
   "avgActual": 3.9,
   "avgExpected": 2.8,
   "aId": "1f25ceda-8df3-4d7c-87ab-efca36d548f2",
   "bId": "92f3c12c-3291-4176-acd2-2bbd5b83136c"
  },
  {
   "a": "Matthew Inzerillo",
   "b": "Jj Pospiech",
   "team": "Kitchen Nightmare",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 1.7,
   "avgExpected": -0.5,
   "aId": "51ceabf9-8258-4835-9835-c7d915220185",
   "bId": "6658ab78-4eee-48fb-aa13-0b6f14398a76"
  },
  {
   "a": "Justin Green",
   "b": "Daniel Borgia",
   "team": "Summer Heat",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 2.2,
   "avgExpected": 0.7,
   "aId": "315ccc2c-86b9-429c-9d60-aae57ea0fff6",
   "bId": "ae3cd925-c856-44dd-9cf5-3a2bd343adf2"
  },
  {
   "a": "Justin Green",
   "b": "Yongzhe Tian",
   "team": "Summer Heat",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 8,
   "avgExpected": 5.9,
   "aId": "315ccc2c-86b9-429c-9d60-aae57ea0fff6",
   "bId": "e1a924b8-3b3a-4780-8348-08a730ba61f2"
  },
  {
   "a": "Jimmy Shapiro",
   "b": "Yuri Paritsky",
   "team": "Summer Smasher",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.9,
   "avgActual": -1.2,
   "avgExpected": -3.1,
   "aId": "7b57c36d-a6eb-470e-b132-26d1f2a47b74",
   "bId": "812b9580-5a00-44a9-a5ed-5d1046755718"
  },
  {
   "a": "Patty Andrzejewski",
   "b": "Allison Cavicchio",
   "team": "Kitchen Nightmare",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.9,
   "avgActual": -0.2,
   "avgExpected": -1.6,
   "aId": "1f25ceda-8df3-4d7c-87ab-efca36d548f2",
   "bId": "79f8f03e-72ee-4c5e-a4d4-cd1c381fb302"
  },
  {
   "a": "Jacob Alpert",
   "b": "Arpita Vaidya",
   "team": "Kitchen Nightmare",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 3.8,
   "avgExpected": 2,
   "aId": "1cd5949a-4196-4e3a-a611-7188d34f4708",
   "bId": "76e829fc-dfa9-4d0c-86ca-eaed7dc4a11a"
  },
  {
   "a": "Bianca Previdi",
   "b": "Neale Smith",
   "team": "Kitchen Nightmare",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.8,
   "avgActual": 0.8,
   "avgExpected": -0.5,
   "aId": "815db0d4-3674-4cf2-bbf1-c3e7dcc938a2",
   "bId": "bd958367-8cce-4f24-ba5a-208bac9b42b0"
  },
  {
   "a": "Kate Siedell",
   "b": "Matthew Mintz",
   "team": "Summer Smasher",
   "n": 8,
   "w": 8,
   "l": 0,
   "synergy": 0.8,
   "avgActual": 4,
   "avgExpected": 2.8,
   "aId": "8decf039-f1e5-4182-b3cf-6756789ae87a",
   "bId": "ad956d26-e552-40eb-97c4-38edfc1b0bc1"
  },
  {
   "a": "Laura Sweet",
   "b": "Mary Shaila Mendoza",
   "team": "Summer Smasher",
   "n": 6,
   "w": 6,
   "l": 0,
   "synergy": 0.8,
   "avgActual": 7.2,
   "avgExpected": 5.8,
   "aId": "7b7b29be-c4b7-4ca9-8fd9-77ec362e761b",
   "bId": "f64b8044-4d67-413e-8d34-c1b9de570fcb"
  },
  {
   "a": "Jj Pospiech",
   "b": "Allison Cavicchio",
   "team": "Kitchen Nightmare",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.8,
   "avgActual": 3,
   "avgExpected": 1.3,
   "aId": "6658ab78-4eee-48fb-aa13-0b6f14398a76",
   "bId": "79f8f03e-72ee-4c5e-a4d4-cd1c381fb302"
  },
  {
   "a": "Daniel Hadley",
   "b": "Steven Pinto",
   "team": "Pickleball Bandits",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.7,
   "avgActual": 1,
   "avgExpected": -0.3,
   "aId": "23adcd68-130d-4176-b367-d3cd31260d21",
   "bId": "33cec39e-fe6c-4913-b41d-b2adc7916445"
  },
  {
   "a": "Jacob Alpert",
   "b": "Pallavi Deshpande",
   "team": "Kitchen Nightmare",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 0.7,
   "avgActual": 1,
   "avgExpected": 0,
   "aId": "1cd5949a-4196-4e3a-a611-7188d34f4708",
   "bId": "92f3c12c-3291-4176-acd2-2bbd5b83136c"
  },
  {
   "a": "Yuri Paritsky",
   "b": "Adam Lowther",
   "team": "Summer Smasher",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 3.8,
   "avgExpected": 2.4,
   "aId": "812b9580-5a00-44a9-a5ed-5d1046755718",
   "bId": "fc25c569-51b2-46a9-9dde-88cf56493e62"
  },
  {
   "a": "Kate Siedell",
   "b": "Peter David",
   "team": "Summer Smasher",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 0.7,
   "avgActual": 2.9,
   "avgExpected": 1.8,
   "aId": "8decf039-f1e5-4182-b3cf-6756789ae87a",
   "bId": "c5e40aa9-efbf-4937-b44d-1b8f06693ba4"
  },
  {
   "a": "Alexandria Mlkvy",
   "b": "Benji Berry",
   "team": "Pickleball Bandits",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 7,
   "avgExpected": 5.7,
   "aId": "3207fd7d-1bc1-44df-a915-8eb4019821db",
   "bId": "ba2074e2-3e52-477b-a44e-54ce33392484"
  },
  {
   "a": "Alex Kustas",
   "b": "Taylor Johns",
   "team": "Pickleball Bandits",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.7,
   "avgActual": -0.7,
   "avgExpected": -2.4,
   "aId": "08b7041c-a90b-47ba-802a-5f71e6b98999",
   "bId": "7e92032d-7d47-485c-8641-ae8a7af4e3ac"
  },
  {
   "a": "Brittany Jacobs",
   "b": "Mike Fu",
   "team": "Pickleball Bandits",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.6,
   "avgActual": -2.2,
   "avgExpected": -3.3,
   "aId": "15dcc305-70cf-4eb1-bde4-a50a30130f3a",
   "bId": "6374c589-eb0b-40c1-bafc-bc812a4a0758"
  },
  {
   "a": "Leslie Laganella",
   "b": "Lorelei Mcglade",
   "team": "Summer Heat",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": 0.6,
   "avgActual": -4.6,
   "avgExpected": -5.7,
   "aId": "79b88b19-d7ab-49ab-881c-888ff437ae90",
   "bId": "c76ff0cb-72a1-4e1f-978e-a7706ea5e406"
  },
  {
   "a": "Bruce Nguyen",
   "b": "Matthew Mintz",
   "team": "Summer Smasher",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 3.4,
   "avgExpected": 2.4,
   "aId": "33233dc6-b78e-4deb-88d4-2742aacf5eb9",
   "bId": "ad956d26-e552-40eb-97c4-38edfc1b0bc1"
  },
  {
   "a": "Laura Sweet",
   "b": "Steve Hong",
   "team": "Summer Smasher",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": 0.6,
   "avgActual": 3.4,
   "avgExpected": 2.5,
   "aId": "7b7b29be-c4b7-4ca9-8fd9-77ec362e761b",
   "bId": "a861a127-253c-4cb2-a1d6-93a37558b93a"
  },
  {
   "a": "Jacob Alpert",
   "b": "Patty Andrzejewski",
   "team": "Kitchen Nightmare",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.6,
   "avgActual": -2,
   "avgExpected": -3.4,
   "aId": "1cd5949a-4196-4e3a-a611-7188d34f4708",
   "bId": "1f25ceda-8df3-4d7c-87ab-efca36d548f2"
  },
  {
   "a": "Stacey Frank",
   "b": "Jiyun Yuh",
   "team": "Summer Heat",
   "n": 9,
   "w": 3,
   "l": 6,
   "synergy": 0.6,
   "avgActual": -2.2,
   "avgExpected": -3.2,
   "aId": "768c88bd-683d-4204-8124-a589c8028b6e",
   "bId": "c94ae231-9f0c-4212-b769-7bd708d8fc38"
  },
  {
   "a": "Joseph Jaworski",
   "b": "Pallavi Deshpande",
   "team": "Kitchen Nightmare",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 2.4,
   "avgExpected": 1.4,
   "aId": "0d249b57-f116-43a0-b03f-c7229bc65112",
   "bId": "92f3c12c-3291-4176-acd2-2bbd5b83136c"
  },
  {
   "a": "Amy Maussner",
   "b": "Lorelei Mcglade",
   "team": "Summer Heat",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.6,
   "avgActual": -2.2,
   "avgExpected": -3.5,
   "aId": "8b17c8d0-5ea7-44ee-9a80-7e3c246c92d3",
   "bId": "c76ff0cb-72a1-4e1f-978e-a7706ea5e406"
  },
  {
   "a": "Danielle Kane",
   "b": "Kaleigh Hadley",
   "team": "Pickleball Bandits",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 0.6,
   "avgActual": 1,
   "avgExpected": 0,
   "aId": "2e70afa6-2efb-4f99-aa57-388b45aa31cb",
   "bId": "ccc68505-7ec7-474a-a96f-891b618d657e"
  },
  {
   "a": "Xin Liu",
   "b": "Mary Shaila Mendoza",
   "team": "Summer Smasher",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 4,
   "avgExpected": 2.7,
   "aId": "463e1402-cc46-4152-9012-c4308a6dd9b4",
   "bId": "f64b8044-4d67-413e-8d34-c1b9de570fcb"
  },
  {
   "a": "Joseph Jaworski",
   "b": "Franky Coriano",
   "team": "Kitchen Nightmare",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.6,
   "avgActual": -0.7,
   "avgExpected": -2.1,
   "aId": "0d249b57-f116-43a0-b03f-c7229bc65112",
   "bId": "d0a23b1a-e947-4f18-ae88-bcfd503495be"
  },
  {
   "a": "Matthew Inzerillo",
   "b": "Pallavi Deshpande",
   "team": "Kitchen Nightmare",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.5,
   "avgActual": 2.2,
   "avgExpected": 1.3,
   "aId": "51ceabf9-8258-4835-9835-c7d915220185",
   "bId": "92f3c12c-3291-4176-acd2-2bbd5b83136c"
  },
  {
   "a": "Steve Hong",
   "b": "Matthew Mintz",
   "team": "Summer Smasher",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 2,
   "avgExpected": 0.9,
   "aId": "a861a127-253c-4cb2-a1d6-93a37558b93a",
   "bId": "ad956d26-e552-40eb-97c4-38edfc1b0bc1"
  },
  {
   "a": "Aran Moultrop",
   "b": "Stacey Frank",
   "team": "Summer Heat",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 0.8,
   "avgExpected": -0.1,
   "aId": "510ab3e1-ed6c-4ea3-b0d3-5e8027854fed",
   "bId": "768c88bd-683d-4204-8124-a589c8028b6e"
  },
  {
   "a": "Matthew Mintz",
   "b": "Mary Shaila Mendoza",
   "team": "Summer Smasher",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 5.3,
   "avgExpected": 4.2,
   "aId": "ad956d26-e552-40eb-97c4-38edfc1b0bc1",
   "bId": "f64b8044-4d67-413e-8d34-c1b9de570fcb"
  },
  {
   "a": "Xin Liu",
   "b": "Laura Sweet",
   "team": "Summer Smasher",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 6.3,
   "avgExpected": 5.1,
   "aId": "463e1402-cc46-4152-9012-c4308a6dd9b4",
   "bId": "7b7b29be-c4b7-4ca9-8fd9-77ec362e761b"
  },
  {
   "a": "Danielle Kane",
   "b": "Jacquie Verish",
   "team": "Pickleball Bandits",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 2.8,
   "avgExpected": 2,
   "aId": "2e70afa6-2efb-4f99-aa57-388b45aa31cb",
   "bId": "6f126e55-bb02-4c7d-a69d-db30473ad0b3"
  },
  {
   "a": "Steve Hong",
   "b": "Adam Lowther",
   "team": "Summer Smasher",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 0,
   "avgExpected": -1.1,
   "aId": "a861a127-253c-4cb2-a1d6-93a37558b93a",
   "bId": "fc25c569-51b2-46a9-9dde-88cf56493e62"
  },
  {
   "a": "Laura Sweet",
   "b": "Justine Inton",
   "team": "Summer Smasher",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 4,
   "avgExpected": 3.2,
   "aId": "7b7b29be-c4b7-4ca9-8fd9-77ec362e761b",
   "bId": "fda50f9c-6e7b-42de-a8fd-f7140995bd49"
  },
  {
   "a": "Patty Andrzejewski",
   "b": "Renee Celentano",
   "team": "Kitchen Nightmare",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 4,
   "avgExpected": 3.1,
   "aId": "1f25ceda-8df3-4d7c-87ab-efca36d548f2",
   "bId": "435b8a19-2bd0-4a7b-a3d5-e1ff0c6222ad"
  },
  {
   "a": "Fran Mccrory",
   "b": "Laura Sweet",
   "team": "Summer Smasher",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 2.7,
   "avgExpected": 1.7,
   "aId": "709c44fc-b254-4998-b6be-bd7461aee908",
   "bId": "7b7b29be-c4b7-4ca9-8fd9-77ec362e761b"
  },
  {
   "a": "Stacey Frank",
   "b": "Daniel Dechristopher",
   "team": "Summer Heat",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 3.8,
   "avgExpected": 2.9,
   "aId": "768c88bd-683d-4204-8124-a589c8028b6e",
   "bId": "899ba1d1-37e5-4ad6-8daa-f726376776e5"
  },
  {
   "a": "Danielle Kane",
   "b": "Christopher Yang",
   "team": "Pickleball Bandits",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 2.3,
   "avgExpected": 1.4,
   "aId": "2e70afa6-2efb-4f99-aa57-388b45aa31cb",
   "bId": "efe3ef0c-82f8-4370-89cc-ec41bd6719cc"
  },
  {
   "a": "Jacquie Verish",
   "b": "Benji Berry",
   "team": "Pickleball Bandits",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 5.2,
   "avgExpected": 4.5,
   "aId": "6f126e55-bb02-4c7d-a69d-db30473ad0b3",
   "bId": "ba2074e2-3e52-477b-a44e-54ce33392484"
  },
  {
   "a": "Shayne Clowar",
   "b": "Allison Cavicchio",
   "team": "Kitchen Nightmare",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": 0.3,
   "avgActual": 0.8,
   "avgExpected": 0.3,
   "aId": "30b75fd5-95cf-4a1a-b296-10e7e381166e",
   "bId": "79f8f03e-72ee-4c5e-a4d4-cd1c381fb302"
  },
  {
   "a": "Patty Andrzejewski",
   "b": "Bianca Previdi",
   "team": "Kitchen Nightmare",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 5.4,
   "avgExpected": 4.9,
   "aId": "1f25ceda-8df3-4d7c-87ab-efca36d548f2",
   "bId": "815db0d4-3674-4cf2-bbf1-c3e7dcc938a2"
  },
  {
   "a": "Alex Kustas",
   "b": "Kaleigh Hadley",
   "team": "Pickleball Bandits",
   "n": 12,
   "w": 6,
   "l": 6,
   "synergy": 0.3,
   "avgActual": -2.8,
   "avgExpected": -3.3,
   "aId": "08b7041c-a90b-47ba-802a-5f71e6b98999",
   "bId": "ccc68505-7ec7-474a-a96f-891b618d657e"
  },
  {
   "a": "Kate Siedell",
   "b": "Mary Shaila Mendoza",
   "team": "Summer Smasher",
   "n": 9,
   "w": 7,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 4.7,
   "avgExpected": 4.3,
   "aId": "8decf039-f1e5-4182-b3cf-6756789ae87a",
   "bId": "f64b8044-4d67-413e-8d34-c1b9de570fcb"
  },
  {
   "a": "Justin Green",
   "b": "Leslie Laganella",
   "team": "Summer Heat",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 2.8,
   "avgExpected": 2.2,
   "aId": "315ccc2c-86b9-429c-9d60-aae57ea0fff6",
   "bId": "79b88b19-d7ab-49ab-881c-888ff437ae90"
  },
  {
   "a": "Arpita Vaidya",
   "b": "Allison Cavicchio",
   "team": "Kitchen Nightmare",
   "n": 11,
   "w": 5,
   "l": 6,
   "synergy": 0.3,
   "avgActual": -0.8,
   "avgExpected": -1.2,
   "aId": "76e829fc-dfa9-4d0c-86ca-eaed7dc4a11a",
   "bId": "79f8f03e-72ee-4c5e-a4d4-cd1c381fb302"
  },
  {
   "a": "Amy Maussner",
   "b": "Jiyun Yuh",
   "team": "Summer Heat",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.2,
   "avgActual": -1.5,
   "avgExpected": -2,
   "aId": "8b17c8d0-5ea7-44ee-9a80-7e3c246c92d3",
   "bId": "c94ae231-9f0c-4212-b769-7bd708d8fc38"
  },
  {
   "a": "Jacob Alpert",
   "b": "Franky Coriano",
   "team": "Kitchen Nightmare",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": 0.2,
   "avgActual": -3.3,
   "avgExpected": -3.6,
   "aId": "1cd5949a-4196-4e3a-a611-7188d34f4708",
   "bId": "d0a23b1a-e947-4f18-ae88-bcfd503495be"
  },
  {
   "a": "Jonathan Carter",
   "b": "Jacquie Verish",
   "team": "Pickleball Bandits",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 0.7,
   "avgExpected": 0.1,
   "aId": "33fe293d-5913-41af-8f89-4a431ed92ab7",
   "bId": "6f126e55-bb02-4c7d-a69d-db30473ad0b3"
  },
  {
   "a": "Daniel Hadley",
   "b": "Benji Berry",
   "team": "Pickleball Bandits",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.2,
   "avgActual": 6.3,
   "avgExpected": 6,
   "aId": "23adcd68-130d-4176-b367-d3cd31260d21",
   "bId": "ba2074e2-3e52-477b-a44e-54ce33392484"
  },
  {
   "a": "Yuri Paritsky",
   "b": "Steve Hong",
   "team": "Summer Smasher",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 2.3,
   "avgExpected": 2.1,
   "aId": "812b9580-5a00-44a9-a5ed-5d1046755718",
   "bId": "a861a127-253c-4cb2-a1d6-93a37558b93a"
  },
  {
   "a": "Nancy Dippolito",
   "b": "Laura Sweet",
   "team": "Summer Smasher",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.1,
   "avgActual": -0.2,
   "avgExpected": -0.5,
   "aId": "1b7bdbc4-f45a-4db7-8994-103ae87c13d3",
   "bId": "7b7b29be-c4b7-4ca9-8fd9-77ec362e761b"
  },
  {
   "a": "Arpita Vaidya",
   "b": "Neale Smith",
   "team": "Kitchen Nightmare",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.1,
   "avgActual": 0.6,
   "avgExpected": 0.4,
   "aId": "76e829fc-dfa9-4d0c-86ca-eaed7dc4a11a",
   "bId": "bd958367-8cce-4f24-ba5a-208bac9b42b0"
  },
  {
   "a": "Joseph Jaworski",
   "b": "Patty Andrzejewski",
   "team": "Kitchen Nightmare",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": 0,
   "avgActual": 2.4,
   "avgExpected": 2.4,
   "aId": "0d249b57-f116-43a0-b03f-c7229bc65112",
   "bId": "1f25ceda-8df3-4d7c-87ab-efca36d548f2"
  },
  {
   "a": "Nancy Dippolito",
   "b": "Adam Lowther",
   "team": "Summer Smasher",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0,
   "avgActual": 0.3,
   "avgExpected": 0.3,
   "aId": "1b7bdbc4-f45a-4db7-8994-103ae87c13d3",
   "bId": "fc25c569-51b2-46a9-9dde-88cf56493e62"
  },
  {
   "a": "Joseph Jaworski",
   "b": "Jj Pospiech",
   "team": "Kitchen Nightmare",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0,
   "avgActual": -2.2,
   "avgExpected": -2.2,
   "aId": "0d249b57-f116-43a0-b03f-c7229bc65112",
   "bId": "6658ab78-4eee-48fb-aa13-0b6f14398a76"
  },
  {
   "a": "Joseph Jaworski",
   "b": "Neale Smith",
   "team": "Kitchen Nightmare",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0,
   "avgActual": 0.7,
   "avgExpected": 0.6,
   "aId": "0d249b57-f116-43a0-b03f-c7229bc65112",
   "bId": "bd958367-8cce-4f24-ba5a-208bac9b42b0"
  },
  {
   "a": "Mike Fu",
   "b": "Lisa Pinder",
   "team": "Pickleball Bandits",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0,
   "avgActual": -7,
   "avgExpected": -6.9,
   "aId": "6374c589-eb0b-40c1-bafc-bc812a4a0758",
   "bId": "7c49b9f3-7f46-4e68-8786-4fe39fdd8f2b"
  },
  {
   "a": "Xin Liu",
   "b": "Fran Mccrory",
   "team": "Summer Smasher",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0,
   "avgActual": 3,
   "avgExpected": 3,
   "aId": "463e1402-cc46-4152-9012-c4308a6dd9b4",
   "bId": "709c44fc-b254-4998-b6be-bd7461aee908"
  },
  {
   "a": "Arpita Vaidya",
   "b": "Pallavi Deshpande",
   "team": "Kitchen Nightmare",
   "n": 10,
   "w": 4,
   "l": 6,
   "synergy": 0,
   "avgActual": 0.2,
   "avgExpected": 0.1,
   "aId": "76e829fc-dfa9-4d0c-86ca-eaed7dc4a11a",
   "bId": "92f3c12c-3291-4176-acd2-2bbd5b83136c"
  },
  {
   "a": "Alex Kustas",
   "b": "Danielle Kane",
   "team": "Pickleball Bandits",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0,
   "avgActual": -0.3,
   "avgExpected": -0.3,
   "aId": "08b7041c-a90b-47ba-802a-5f71e6b98999",
   "bId": "2e70afa6-2efb-4f99-aa57-388b45aa31cb"
  },
  {
   "a": "Stacey Frank",
   "b": "Daniel Borgia",
   "team": "Summer Heat",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": 0,
   "avgActual": 0.8,
   "avgExpected": 0.7,
   "aId": "768c88bd-683d-4204-8124-a589c8028b6e",
   "bId": "ae3cd925-c856-44dd-9cf5-3a2bd343adf2"
  },
  {
   "a": "Laura Sweet",
   "b": "Matthew Mintz",
   "team": "Summer Smasher",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 2.2,
   "avgExpected": 2.4,
   "aId": "7b7b29be-c4b7-4ca9-8fd9-77ec362e761b",
   "bId": "ad956d26-e552-40eb-97c4-38edfc1b0bc1"
  },
  {
   "a": "Jimmy Shapiro",
   "b": "Matthew Mintz",
   "team": "Summer Smasher",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 0.5,
   "avgExpected": 0.6,
   "aId": "7b57c36d-a6eb-470e-b132-26d1f2a47b74",
   "bId": "ad956d26-e552-40eb-97c4-38edfc1b0bc1"
  },
  {
   "a": "Steven Pinto",
   "b": "Christopher Yang",
   "team": "Pickleball Bandits",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.1,
   "avgActual": -3,
   "avgExpected": -2.8,
   "aId": "33cec39e-fe6c-4913-b41d-b2adc7916445",
   "bId": "efe3ef0c-82f8-4370-89cc-ec41bd6719cc"
  },
  {
   "a": "Daniel Dechristopher",
   "b": "Daniel Borgia",
   "team": "Summer Heat",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": -0.1,
   "avgActual": 4,
   "avgExpected": 4.2,
   "aId": "899ba1d1-37e5-4ad6-8daa-f726376776e5",
   "bId": "ae3cd925-c856-44dd-9cf5-3a2bd343adf2"
  },
  {
   "a": "Mario Contreras",
   "b": "Daniel Dechristopher",
   "team": "Summer Heat",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.2,
   "avgActual": 0.8,
   "avgExpected": 1.2,
   "aId": "323d96c3-4160-410b-96a5-87263e825f62",
   "bId": "899ba1d1-37e5-4ad6-8daa-f726376776e5"
  },
  {
   "a": "Leslie Laganella",
   "b": "Richard Ross",
   "team": "Summer Heat",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.2,
   "avgActual": -4,
   "avgExpected": -3.6,
   "aId": "79b88b19-d7ab-49ab-881c-888ff437ae90",
   "bId": "9d1192c8-e17a-4251-a23b-59d122f4bada"
  },
  {
   "a": "Laura Sweet",
   "b": "Kate Siedell",
   "team": "Summer Smasher",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": -0.2,
   "avgActual": 1.5,
   "avgExpected": 1.7,
   "aId": "7b7b29be-c4b7-4ca9-8fd9-77ec362e761b",
   "bId": "8decf039-f1e5-4182-b3cf-6756789ae87a"
  },
  {
   "a": "Yuri Paritsky",
   "b": "Justine Inton",
   "team": "Summer Smasher",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.2,
   "avgActual": 2.3,
   "avgExpected": 2.6,
   "aId": "812b9580-5a00-44a9-a5ed-5d1046755718",
   "bId": "fda50f9c-6e7b-42de-a8fd-f7140995bd49"
  },
  {
   "a": "Alexandria Mlkvy",
   "b": "Kaleigh Hadley",
   "team": "Pickleball Bandits",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.2,
   "avgActual": 0.3,
   "avgExpected": 0.6,
   "aId": "3207fd7d-1bc1-44df-a915-8eb4019821db",
   "bId": "ccc68505-7ec7-474a-a96f-891b618d657e"
  },
  {
   "a": "Jimmy Shapiro",
   "b": "Justine Inton",
   "team": "Summer Smasher",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.2,
   "avgActual": 2,
   "avgExpected": 2.4,
   "aId": "7b57c36d-a6eb-470e-b132-26d1f2a47b74",
   "bId": "fda50f9c-6e7b-42de-a8fd-f7140995bd49"
  },
  {
   "a": "Patty Andrzejewski",
   "b": "Arpita Vaidya",
   "team": "Kitchen Nightmare",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 4,
   "avgExpected": 4.3,
   "aId": "1f25ceda-8df3-4d7c-87ab-efca36d548f2",
   "bId": "76e829fc-dfa9-4d0c-86ca-eaed7dc4a11a"
  },
  {
   "a": "Fran Mccrory",
   "b": "Yuri Paritsky",
   "team": "Summer Smasher",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.2,
   "avgActual": -0.3,
   "avgExpected": 0.2,
   "aId": "709c44fc-b254-4998-b6be-bd7461aee908",
   "bId": "812b9580-5a00-44a9-a5ed-5d1046755718"
  },
  {
   "a": "Fran Mccrory",
   "b": "Steve Hong",
   "team": "Summer Smasher",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -5.7,
   "avgExpected": -5.1,
   "aId": "709c44fc-b254-4998-b6be-bd7461aee908",
   "bId": "a861a127-253c-4cb2-a1d6-93a37558b93a"
  },
  {
   "a": "Nancy Dippolito",
   "b": "Yuri Paritsky",
   "team": "Summer Smasher",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -3,
   "avgExpected": -2.4,
   "aId": "1b7bdbc4-f45a-4db7-8994-103ae87c13d3",
   "bId": "812b9580-5a00-44a9-a5ed-5d1046755718"
  },
  {
   "a": "Bruce Nguyen",
   "b": "Laura Sweet",
   "team": "Summer Smasher",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": -0.3,
   "avgActual": 1.4,
   "avgExpected": 2,
   "aId": "33233dc6-b78e-4deb-88d4-2742aacf5eb9",
   "bId": "7b7b29be-c4b7-4ca9-8fd9-77ec362e761b"
  },
  {
   "a": "Shayne Clowar",
   "b": "Jim Kochanski",
   "team": "Kitchen Nightmare",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.3,
   "avgActual": 0.4,
   "avgExpected": 0.9,
   "aId": "30b75fd5-95cf-4a1a-b296-10e7e381166e",
   "bId": "7ac5141f-b982-457a-a893-6f18c0e8e375"
  },
  {
   "a": "Bruce Nguyen",
   "b": "Kate Siedell",
   "team": "Summer Smasher",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": -0.3,
   "avgActual": 1.1,
   "avgExpected": 1.6,
   "aId": "33233dc6-b78e-4deb-88d4-2742aacf5eb9",
   "bId": "8decf039-f1e5-4182-b3cf-6756789ae87a"
  },
  {
   "a": "Justin Green",
   "b": "Richard Renza",
   "team": "Summer Heat",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.3,
   "avgActual": 0.8,
   "avgExpected": 1.3,
   "aId": "315ccc2c-86b9-429c-9d60-aae57ea0fff6",
   "bId": "57c13577-73cb-43f9-b0ac-cc939e10a749"
  },
  {
   "a": "Danielle Kane",
   "b": "Steven Pinto",
   "team": "Pickleball Bandits",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.3,
   "avgActual": -1,
   "avgExpected": -0.4,
   "aId": "2e70afa6-2efb-4f99-aa57-388b45aa31cb",
   "bId": "33cec39e-fe6c-4913-b41d-b2adc7916445"
  },
  {
   "a": "Daniel Borgia",
   "b": "Jiyun Yuh",
   "team": "Summer Heat",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -0.3,
   "avgActual": -2.8,
   "avgExpected": -2.3,
   "aId": "ae3cd925-c856-44dd-9cf5-3a2bd343adf2",
   "bId": "c94ae231-9f0c-4212-b769-7bd708d8fc38"
  },
  {
   "a": "Daniel Hadley",
   "b": "Jacquie Verish",
   "team": "Pickleball Bandits",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": -0.4,
   "avgActual": 3,
   "avgExpected": 3.6,
   "aId": "23adcd68-130d-4176-b367-d3cd31260d21",
   "bId": "6f126e55-bb02-4c7d-a69d-db30473ad0b3"
  },
  {
   "a": "Mario Contreras",
   "b": "Lorelei Mcglade",
   "team": "Summer Heat",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -5,
   "avgExpected": -4,
   "aId": "323d96c3-4160-410b-96a5-87263e825f62",
   "bId": "c76ff0cb-72a1-4e1f-978e-a7706ea5e406"
  },
  {
   "a": "Aran Moultrop",
   "b": "Jiyun Yuh",
   "team": "Summer Heat",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -0.4,
   "avgActual": -4.4,
   "avgExpected": -3.7,
   "aId": "510ab3e1-ed6c-4ea3-b0d3-5e8027854fed",
   "bId": "c94ae231-9f0c-4212-b769-7bd708d8fc38"
  },
  {
   "a": "Jacob Alpert",
   "b": "Shayne Clowar",
   "team": "Kitchen Nightmare",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -0.4,
   "avgActual": -5.8,
   "avgExpected": -5,
   "aId": "1cd5949a-4196-4e3a-a611-7188d34f4708",
   "bId": "30b75fd5-95cf-4a1a-b296-10e7e381166e"
  },
  {
   "a": "Lorelei Mcglade",
   "b": "Jiyun Yuh",
   "team": "Summer Heat",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.4,
   "avgActual": -3.3,
   "avgExpected": -2.4,
   "aId": "c76ff0cb-72a1-4e1f-978e-a7706ea5e406",
   "bId": "c94ae231-9f0c-4212-b769-7bd708d8fc38"
  },
  {
   "a": "Laura Sweet",
   "b": "Peter David",
   "team": "Summer Smasher",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.4,
   "avgActual": 0.4,
   "avgExpected": 1.2,
   "aId": "7b7b29be-c4b7-4ca9-8fd9-77ec362e761b",
   "bId": "c5e40aa9-efbf-4937-b44d-1b8f06693ba4"
  },
  {
   "a": "Arpita Vaidya",
   "b": "Jim Kochanski",
   "team": "Kitchen Nightmare",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.4,
   "avgActual": -1.3,
   "avgExpected": -0.4,
   "aId": "76e829fc-dfa9-4d0c-86ca-eaed7dc4a11a",
   "bId": "7ac5141f-b982-457a-a893-6f18c0e8e375"
  },
  {
   "a": "Daniel Dechristopher",
   "b": "Jiyun Yuh",
   "team": "Summer Heat",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.5,
   "avgActual": -0.2,
   "avgExpected": 0.6,
   "aId": "899ba1d1-37e5-4ad6-8daa-f726376776e5",
   "bId": "c94ae231-9f0c-4212-b769-7bd708d8fc38"
  },
  {
   "a": "Richard Renza",
   "b": "Lorelei Mcglade",
   "team": "Summer Heat",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -2.4,
   "avgExpected": -1.5,
   "aId": "57c13577-73cb-43f9-b0ac-cc939e10a749",
   "bId": "c76ff0cb-72a1-4e1f-978e-a7706ea5e406"
  },
  {
   "a": "Nancy Dippolito",
   "b": "Fran Mccrory",
   "team": "Summer Smasher",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -7,
   "avgExpected": -5.8,
   "aId": "1b7bdbc4-f45a-4db7-8994-103ae87c13d3",
   "bId": "709c44fc-b254-4998-b6be-bd7461aee908"
  },
  {
   "a": "Jonathan Carter",
   "b": "Mike Fu",
   "team": "Pickleball Bandits",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -0.5,
   "avgActual": -6.2,
   "avgExpected": -5.3,
   "aId": "33fe293d-5913-41af-8f89-4a431ed92ab7",
   "bId": "6374c589-eb0b-40c1-bafc-bc812a4a0758"
  },
  {
   "a": "Jonathan Carter",
   "b": "Benji Berry",
   "team": "Pickleball Bandits",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.5,
   "avgActual": 2.3,
   "avgExpected": 3.2,
   "aId": "33fe293d-5913-41af-8f89-4a431ed92ab7",
   "bId": "ba2074e2-3e52-477b-a44e-54ce33392484"
  },
  {
   "a": "Jj Pospiech",
   "b": "Neale Smith",
   "team": "Kitchen Nightmare",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -2.2,
   "avgExpected": -1.2,
   "aId": "6658ab78-4eee-48fb-aa13-0b6f14398a76",
   "bId": "bd958367-8cce-4f24-ba5a-208bac9b42b0"
  },
  {
   "a": "Mario Contreras",
   "b": "Amy Maussner",
   "team": "Summer Heat",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -0.6,
   "avgActual": -3.5,
   "avgExpected": -2.5,
   "aId": "323d96c3-4160-410b-96a5-87263e825f62",
   "bId": "8b17c8d0-5ea7-44ee-9a80-7e3c246c92d3"
  },
  {
   "a": "Steven Pinto",
   "b": "Kaleigh Hadley",
   "team": "Pickleball Bandits",
   "n": 8,
   "w": 3,
   "l": 5,
   "synergy": -0.6,
   "avgActual": -3.7,
   "avgExpected": -2.8,
   "aId": "33cec39e-fe6c-4913-b41d-b2adc7916445",
   "bId": "ccc68505-7ec7-474a-a96f-891b618d657e"
  },
  {
   "a": "Xin Liu",
   "b": "Yuri Paritsky",
   "team": "Summer Smasher",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.6,
   "avgActual": 1.3,
   "avgExpected": 2.5,
   "aId": "463e1402-cc46-4152-9012-c4308a6dd9b4",
   "bId": "812b9580-5a00-44a9-a5ed-5d1046755718"
  },
  {
   "a": "Jj Pospiech",
   "b": "Arpita Vaidya",
   "team": "Kitchen Nightmare",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -1.5,
   "avgExpected": -0.3,
   "aId": "6658ab78-4eee-48fb-aa13-0b6f14398a76",
   "bId": "76e829fc-dfa9-4d0c-86ca-eaed7dc4a11a"
  },
  {
   "a": "Steven Pinto",
   "b": "Benji Berry",
   "team": "Pickleball Bandits",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": -0.6,
   "avgActual": 2.3,
   "avgExpected": 3.5,
   "aId": "33cec39e-fe6c-4913-b41d-b2adc7916445",
   "bId": "ba2074e2-3e52-477b-a44e-54ce33392484"
  },
  {
   "a": "Steven Pinto",
   "b": "Chris Machuzak",
   "team": "Pickleball Bandits",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -4.7,
   "avgExpected": -3.3,
   "aId": "33cec39e-fe6c-4913-b41d-b2adc7916445",
   "bId": "dba4c9d8-6ffb-49ae-99d1-79c341a68de7"
  },
  {
   "a": "Matthew Inzerillo",
   "b": "Franky Coriano",
   "team": "Kitchen Nightmare",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -0.7,
   "avgActual": -4.6,
   "avgExpected": -3.4,
   "aId": "51ceabf9-8258-4835-9835-c7d915220185",
   "bId": "d0a23b1a-e947-4f18-ae88-bcfd503495be"
  },
  {
   "a": "Brittany Jacobs",
   "b": "Lisa Pinder",
   "team": "Pickleball Bandits",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -8,
   "avgExpected": -6.5,
   "aId": "15dcc305-70cf-4eb1-bde4-a50a30130f3a",
   "bId": "7c49b9f3-7f46-4e68-8786-4fe39fdd8f2b"
  },
  {
   "a": "Jacob Alpert",
   "b": "Neale Smith",
   "team": "Kitchen Nightmare",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -5,
   "avgExpected": -3.4,
   "aId": "1cd5949a-4196-4e3a-a611-7188d34f4708",
   "bId": "bd958367-8cce-4f24-ba5a-208bac9b42b0"
  },
  {
   "a": "Alex Kustas",
   "b": "Alexandria Mlkvy",
   "team": "Pickleball Bandits",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.8,
   "avgActual": -3.3,
   "avgExpected": -2,
   "aId": "08b7041c-a90b-47ba-802a-5f71e6b98999",
   "bId": "3207fd7d-1bc1-44df-a915-8eb4019821db"
  },
  {
   "a": "Peter David",
   "b": "Mary Shaila Mendoza",
   "team": "Summer Smasher",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.8,
   "avgActual": 1.8,
   "avgExpected": 3.4,
   "aId": "c5e40aa9-efbf-4937-b44d-1b8f06693ba4",
   "bId": "f64b8044-4d67-413e-8d34-c1b9de570fcb"
  },
  {
   "a": "Alex Kustas",
   "b": "Christopher Yang",
   "team": "Pickleball Bandits",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.8,
   "avgActual": -3.8,
   "avgExpected": -2.4,
   "aId": "08b7041c-a90b-47ba-802a-5f71e6b98999",
   "bId": "efe3ef0c-82f8-4370-89cc-ec41bd6719cc"
  },
  {
   "a": "Fran Mccrory",
   "b": "Justine Inton",
   "team": "Summer Smasher",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -4.7,
   "avgExpected": -3.1,
   "aId": "709c44fc-b254-4998-b6be-bd7461aee908",
   "bId": "fda50f9c-6e7b-42de-a8fd-f7140995bd49"
  },
  {
   "a": "Stacey Frank",
   "b": "Yongzhe Tian",
   "team": "Summer Heat",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.9,
   "avgActual": 0.8,
   "avgExpected": 2.6,
   "aId": "768c88bd-683d-4204-8124-a589c8028b6e",
   "bId": "e1a924b8-3b3a-4780-8348-08a730ba61f2"
  },
  {
   "a": "Stacey Frank",
   "b": "Amy Maussner",
   "team": "Summer Heat",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.9,
   "avgActual": -3.5,
   "avgExpected": -1.8,
   "aId": "768c88bd-683d-4204-8124-a589c8028b6e",
   "bId": "8b17c8d0-5ea7-44ee-9a80-7e3c246c92d3"
  },
  {
   "a": "Jimmy Shapiro",
   "b": "Mary Shaila Mendoza",
   "team": "Summer Smasher",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.9,
   "avgActual": 1.4,
   "avgExpected": 3.1,
   "aId": "7b57c36d-a6eb-470e-b132-26d1f2a47b74",
   "bId": "f64b8044-4d67-413e-8d34-c1b9de570fcb"
  },
  {
   "a": "Richard Ross",
   "b": "Yongzhe Tian",
   "team": "Summer Heat",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.9,
   "avgActual": -4.3,
   "avgExpected": -2.3,
   "aId": "9d1192c8-e17a-4251-a23b-59d122f4bada",
   "bId": "e1a924b8-3b3a-4780-8348-08a730ba61f2"
  },
  {
   "a": "Daniel Dechristopher",
   "b": "Yongzhe Tian",
   "team": "Summer Heat",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -1,
   "avgActual": 4.2,
   "avgExpected": 5.8,
   "aId": "899ba1d1-37e5-4ad6-8daa-f726376776e5",
   "bId": "e1a924b8-3b3a-4780-8348-08a730ba61f2"
  },
  {
   "a": "Richard Renza",
   "b": "Will Lockard",
   "team": "Summer Heat",
   "n": 8,
   "w": 1,
   "l": 7,
   "synergy": -1,
   "avgActual": -4.6,
   "avgExpected": -3.1,
   "aId": "57c13577-73cb-43f9-b0ac-cc939e10a749",
   "bId": "7fadc717-5f7a-4df1-b0c5-6d4efa84e8c0"
  },
  {
   "a": "Alex Kustas",
   "b": "Benji Berry",
   "team": "Pickleball Bandits",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -1,
   "avgActual": 1.2,
   "avgExpected": 2.9,
   "aId": "08b7041c-a90b-47ba-802a-5f71e6b98999",
   "bId": "ba2074e2-3e52-477b-a44e-54ce33392484"
  },
  {
   "a": "Patty Andrzejewski",
   "b": "Franky Coriano",
   "team": "Kitchen Nightmare",
   "n": 10,
   "w": 4,
   "l": 6,
   "synergy": -1,
   "avgActual": -2,
   "avgExpected": -0.6,
   "aId": "1f25ceda-8df3-4d7c-87ab-efca36d548f2",
   "bId": "d0a23b1a-e947-4f18-ae88-bcfd503495be"
  },
  {
   "a": "Allison Cavicchio",
   "b": "Neale Smith",
   "team": "Kitchen Nightmare",
   "n": 8,
   "w": 2,
   "l": 6,
   "synergy": -1,
   "avgActual": -2.2,
   "avgExpected": -0.7,
   "aId": "79f8f03e-72ee-4c5e-a4d4-cd1c381fb302",
   "bId": "bd958367-8cce-4f24-ba5a-208bac9b42b0"
  },
  {
   "a": "Adam Lowther",
   "b": "Justine Inton",
   "team": "Summer Smasher",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1,
   "avgActual": -1.3,
   "avgExpected": 1,
   "aId": "fc25c569-51b2-46a9-9dde-88cf56493e62",
   "bId": "fda50f9c-6e7b-42de-a8fd-f7140995bd49"
  },
  {
   "a": "Pallavi Deshpande",
   "b": "Franky Coriano",
   "team": "Kitchen Nightmare",
   "n": 6,
   "w": 0,
   "l": 6,
   "synergy": -1.1,
   "avgActual": -4.3,
   "avgExpected": -2.4,
   "aId": "92f3c12c-3291-4176-acd2-2bbd5b83136c",
   "bId": "d0a23b1a-e947-4f18-ae88-bcfd503495be"
  },
  {
   "a": "Shayne Clowar",
   "b": "Arpita Vaidya",
   "team": "Kitchen Nightmare",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -1.1,
   "avgActual": -4.4,
   "avgExpected": -2.4,
   "aId": "30b75fd5-95cf-4a1a-b296-10e7e381166e",
   "bId": "76e829fc-dfa9-4d0c-86ca-eaed7dc4a11a"
  },
  {
   "a": "Will Lockard",
   "b": "Lorelei Mcglade",
   "team": "Summer Heat",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.1,
   "avgActual": -7.2,
   "avgExpected": -5.1,
   "aId": "7fadc717-5f7a-4df1-b0c5-6d4efa84e8c0",
   "bId": "c76ff0cb-72a1-4e1f-978e-a7706ea5e406"
  },
  {
   "a": "Joseph Jaworski",
   "b": "Matthew Inzerillo",
   "team": "Kitchen Nightmare",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.2,
   "avgActual": -1,
   "avgExpected": 1.7,
   "aId": "0d249b57-f116-43a0-b03f-c7229bc65112",
   "bId": "51ceabf9-8258-4835-9835-c7d915220185"
  },
  {
   "a": "Bruce Nguyen",
   "b": "Peter David",
   "team": "Summer Smasher",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -1.2,
   "avgActual": 0.6,
   "avgExpected": 2.7,
   "aId": "33233dc6-b78e-4deb-88d4-2742aacf5eb9",
   "bId": "c5e40aa9-efbf-4937-b44d-1b8f06693ba4"
  },
  {
   "a": "Joseph Jaworski",
   "b": "Jacob Alpert",
   "team": "Kitchen Nightmare",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.3,
   "avgActual": -4.5,
   "avgExpected": -1.8,
   "aId": "0d249b57-f116-43a0-b03f-c7229bc65112",
   "bId": "1cd5949a-4196-4e3a-a611-7188d34f4708"
  },
  {
   "a": "Brittany Jacobs",
   "b": "Jonathan Carter",
   "team": "Pickleball Bandits",
   "n": 8,
   "w": 1,
   "l": 7,
   "synergy": -1.3,
   "avgActual": -3.4,
   "avgExpected": -1.4,
   "aId": "15dcc305-70cf-4eb1-bde4-a50a30130f3a",
   "bId": "33fe293d-5913-41af-8f89-4a431ed92ab7"
  },
  {
   "a": "Patty Andrzejewski",
   "b": "Matthew Inzerillo",
   "team": "Kitchen Nightmare",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.3,
   "avgActual": -3.7,
   "avgExpected": -1,
   "aId": "1f25ceda-8df3-4d7c-87ab-efca36d548f2",
   "bId": "51ceabf9-8258-4835-9835-c7d915220185"
  },
  {
   "a": "Leslie Laganella",
   "b": "Amy Maussner",
   "team": "Summer Heat",
   "n": 10,
   "w": 1,
   "l": 9,
   "synergy": -1.4,
   "avgActual": -5.6,
   "avgExpected": -3.7,
   "aId": "79b88b19-d7ab-49ab-881c-888ff437ae90",
   "bId": "8b17c8d0-5ea7-44ee-9a80-7e3c246c92d3"
  },
  {
   "a": "Bianca Previdi",
   "b": "Pallavi Deshpande",
   "team": "Kitchen Nightmare",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": -1.4,
   "avgActual": -0.9,
   "avgExpected": 1.4,
   "aId": "815db0d4-3674-4cf2-bbf1-c3e7dcc938a2",
   "bId": "92f3c12c-3291-4176-acd2-2bbd5b83136c"
  },
  {
   "a": "Jim Kochanski",
   "b": "Neale Smith",
   "team": "Kitchen Nightmare",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1.4,
   "avgActual": -1.7,
   "avgExpected": 1.6,
   "aId": "7ac5141f-b982-457a-a893-6f18c0e8e375",
   "bId": "bd958367-8cce-4f24-ba5a-208bac9b42b0"
  },
  {
   "a": "Will Lockard",
   "b": "Richard Ross",
   "team": "Summer Heat",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.4,
   "avgActual": -7,
   "avgExpected": -3.7,
   "aId": "7fadc717-5f7a-4df1-b0c5-6d4efa84e8c0",
   "bId": "9d1192c8-e17a-4251-a23b-59d122f4bada"
  },
  {
   "a": "Justin Green",
   "b": "Amy Maussner",
   "team": "Summer Heat",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -1.5,
   "avgActual": -1.3,
   "avgExpected": 1,
   "aId": "315ccc2c-86b9-429c-9d60-aae57ea0fff6",
   "bId": "8b17c8d0-5ea7-44ee-9a80-7e3c246c92d3"
  },
  {
   "a": "Jacquie Verish",
   "b": "Lisa Pinder",
   "team": "Pickleball Bandits",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -1.5,
   "avgActual": -7.6,
   "avgExpected": -4.8,
   "aId": "6f126e55-bb02-4c7d-a69d-db30473ad0b3",
   "bId": "7c49b9f3-7f46-4e68-8786-4fe39fdd8f2b"
  },
  {
   "a": "Steven Pinto",
   "b": "Jacquie Verish",
   "team": "Pickleball Bandits",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.6,
   "avgActual": -5.3,
   "avgExpected": -1.6,
   "aId": "33cec39e-fe6c-4913-b41d-b2adc7916445",
   "bId": "6f126e55-bb02-4c7d-a69d-db30473ad0b3"
  },
  {
   "a": "Jimmy Shapiro",
   "b": "Kate Siedell",
   "team": "Summer Smasher",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.7,
   "avgActual": -3.5,
   "avgExpected": -0.1,
   "aId": "7b57c36d-a6eb-470e-b132-26d1f2a47b74",
   "bId": "8decf039-f1e5-4182-b3cf-6756789ae87a"
  },
  {
   "a": "Jonathan Carter",
   "b": "Lisa Pinder",
   "team": "Pickleball Bandits",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.7,
   "avgActual": -8.7,
   "avgExpected": -4.6,
   "aId": "33fe293d-5913-41af-8f89-4a431ed92ab7",
   "bId": "7c49b9f3-7f46-4e68-8786-4fe39fdd8f2b"
  },
  {
   "a": "Alexandria Mlkvy",
   "b": "Lisa Pinder",
   "team": "Pickleball Bandits",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.7,
   "avgActual": -7,
   "avgExpected": -3,
   "aId": "3207fd7d-1bc1-44df-a915-8eb4019821db",
   "bId": "7c49b9f3-7f46-4e68-8786-4fe39fdd8f2b"
  },
  {
   "a": "Fran Mccrory",
   "b": "Adam Lowther",
   "team": "Summer Smasher",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -2,
   "avgActual": -6.3,
   "avgExpected": -3,
   "aId": "709c44fc-b254-4998-b6be-bd7461aee908",
   "bId": "fc25c569-51b2-46a9-9dde-88cf56493e62"
  },
  {
   "a": "Allison Cavicchio",
   "b": "Bianca Previdi",
   "team": "Kitchen Nightmare",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -2,
   "avgActual": 0.3,
   "avgExpected": 3.7,
   "aId": "79f8f03e-72ee-4c5e-a4d4-cd1c381fb302",
   "bId": "815db0d4-3674-4cf2-bbf1-c3e7dcc938a2"
  },
  {
   "a": "Matthew Mintz",
   "b": "Peter David",
   "team": "Summer Smasher",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -2,
   "avgActual": -3.2,
   "avgExpected": 0.7,
   "aId": "ad956d26-e552-40eb-97c4-38edfc1b0bc1",
   "bId": "c5e40aa9-efbf-4937-b44d-1b8f06693ba4"
  },
  {
   "a": "Yuri Paritsky",
   "b": "Mary Shaila Mendoza",
   "team": "Summer Smasher",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -2.2,
   "avgActual": -0.7,
   "avgExpected": 4.4,
   "aId": "812b9580-5a00-44a9-a5ed-5d1046755718",
   "bId": "f64b8044-4d67-413e-8d34-c1b9de570fcb"
  },
  {
   "a": "Daniel Hadley",
   "b": "Mike Fu",
   "team": "Pickleball Bandits",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2.4,
   "avgActual": -8.3,
   "avgExpected": -2.8,
   "aId": "23adcd68-130d-4176-b367-d3cd31260d21",
   "bId": "6374c589-eb0b-40c1-bafc-bc812a4a0758"
  },
  {
   "a": "Steve Hong",
   "b": "Justine Inton",
   "team": "Summer Smasher",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -2.6,
   "avgActual": -7.4,
   "avgExpected": -2.7,
   "aId": "a861a127-253c-4cb2-a1d6-93a37558b93a",
   "bId": "fda50f9c-6e7b-42de-a8fd-f7140995bd49"
  }
 ],
 "matches": [
  {
   "result": "home",
   "week": 1,
   "home": "Pickleball Bandits",
   "away": "Summer Heat",
   "time": "2026-06-25T19:00:00",
   "complete": true,
   "homePoints": 590,
   "awayPoints": 588,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Alexandria Mlkvy",
      "Steven Pinto"
     ],
     "a": [
      "Michelle Quach",
      "Yongzhe Tian"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Nada Abdelkarim",
      "Alex Kustas"
     ],
     "a": [
      "Jiyun Yuh",
      "Daniel Dechristopher"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Martina Tejeda",
      "Daniel Hadley"
     ],
     "a": [
      "Amy Maussner",
      "Mario Contreras"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Brittany Jacobs",
      "Benji Berry"
     ],
     "a": [
      "Leslie Laganella",
      "Will Lockard"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Alexandria Mlkvy",
      "Jacquie Verish"
     ],
     "a": [
      "Jiyun Yuh",
      "Amy Maussner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Nada Abdelkarim",
      "Brittany Jacobs"
     ],
     "a": [
      "Michelle Quach",
      "Lorelei Mcglade"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Steven Pinto",
      "Alex Kustas"
     ],
     "a": [
      "Daniel Dechristopher",
      "Yongzhe Tian"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Benji Berry",
      "Mike Fu"
     ],
     "a": [
      "Mario Contreras",
      "Richard Renza"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Nada Abdelkarim",
      "Steven Pinto"
     ],
     "a": [
      "Jiyun Yuh",
      "Yongzhe Tian"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Alexandria Mlkvy",
      "Alex Kustas"
     ],
     "a": [
      "Michelle Quach",
      "Daniel Dechristopher"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jacquie Verish",
      "Daniel Hadley"
     ],
     "a": [
      "Lorelei Mcglade",
      "Richard Renza"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Martina Tejeda",
      "Mike Fu"
     ],
     "a": [
      "Leslie Laganella",
      "Will Lockard"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Nada Abdelkarim",
      "Martina Tejeda"
     ],
     "a": [
      "Amy Maussner",
      "Leslie Laganella"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jacquie Verish",
      "Brittany Jacobs"
     ],
     "a": [
      "Michelle Quach",
      "Lorelei Mcglade"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Steven Pinto",
      "Daniel Hadley"
     ],
     "a": [
      "Daniel Dechristopher",
      "Mario Contreras"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Benji Berry",
      "Mike Fu"
     ],
     "a": [
      "Richard Renza",
      "Will Lockard"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jacquie Verish",
      "Daniel Hadley"
     ],
     "a": [
      "Lorelei Mcglade",
      "Mario Contreras"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Alexandria Mlkvy",
      "Alex Kustas"
     ],
     "a": [
      "Jiyun Yuh",
      "Yongzhe Tian"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Martina Tejeda",
      "Mike Fu"
     ],
     "a": [
      "Amy Maussner",
      "Will Lockard"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Brittany Jacobs",
      "Benji Berry"
     ],
     "a": [
      "Leslie Laganella",
      "Richard Renza"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Alexandria Mlkvy",
      "Nada Abdelkarim"
     ],
     "a": [
      "Jiyun Yuh",
      "Michelle Quach"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Martina Tejeda",
      "Brittany Jacobs"
     ],
     "a": [
      "Amy Maussner",
      "Leslie Laganella"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Steven Pinto",
      "Daniel Hadley"
     ],
     "a": [
      "Daniel Dechristopher",
      "Mario Contreras"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Alex Kustas",
      "Benji Berry"
     ],
     "a": [
      "Yongzhe Tian",
      "Will Lockard"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Alexandria Mlkvy",
      "Steven Pinto"
     ],
     "a": [
      "Jiyun Yuh",
      "Daniel Dechristopher"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Nada Abdelkarim",
      "Benji Berry"
     ],
     "a": [
      "Amy Maussner",
      "Mario Contreras"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Jacquie Verish",
      "Alex Kustas"
     ],
     "a": [
      "Michelle Quach",
      "Yongzhe Tian"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Brittany Jacobs",
      "Mike Fu"
     ],
     "a": [
      "Lorelei Mcglade",
      "Richard Renza"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Alexandria Mlkvy",
      "Nada Abdelkarim"
     ],
     "a": [
      "Jiyun Yuh",
      "Michelle Quach"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jacquie Verish",
      "Martina Tejeda"
     ],
     "a": [
      "Lorelei Mcglade",
      "Leslie Laganella"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Steven Pinto",
      "Alex Kustas"
     ],
     "a": [
      "Daniel Dechristopher",
      "Yongzhe Tian"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Daniel Hadley",
      "Mike Fu"
     ],
     "a": [
      "Richard Renza",
      "Will Lockard"
     ]
    }
   ],
   "subs": [
    "Martina Tejeda",
    "Nada Abdelkarim",
    "Michelle Quach"
   ]
  },
  {
   "result": "away",
   "week": 1,
   "home": "Summer Smasher",
   "away": "Kitchen Nightmare",
   "time": "2026-06-25T19:00:00",
   "complete": true,
   "homePoints": 553,
   "awayPoints": 623,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Laura Sweet",
      "Matthew Mintz"
     ],
     "a": [
      "Renee Celentano",
      "Jj Pospiech"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kendra Johnson",
      "Bruce Nguyen"
     ],
     "a": [
      "Patty Andrzejewski",
      "Joseph Jaworski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Fran Mccrory",
      "Steve Hong"
     ],
     "a": [
      "Bianca Previdi",
      "Matthew Inzerillo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Nancy Dippolito",
      "Adam Lowther"
     ],
     "a": [
      "Pallavi Deshpande",
      "Jacob Alpert"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Laura Sweet",
      "Kendra Johnson"
     ],
     "a": [
      "Renee Celentano",
      "Bianca Previdi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Nancy Dippolito",
      "Fran Mccrory"
     ],
     "a": [
      "Patty Andrzejewski",
      "Pallavi Deshpande"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Matthew Mintz",
      "Bruce Nguyen"
     ],
     "a": [
      "Jj Pospiech",
      "Joseph Jaworski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Steve Hong",
      "Yuri Paritsky"
     ],
     "a": [
      "Jacob Alpert",
      "Franky Coriano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Laura Sweet",
      "Matthew Mintz"
     ],
     "a": [
      "Bianca Previdi",
      "Jj Pospiech"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kendra Johnson",
      "Bruce Nguyen"
     ],
     "a": [
      "Renee Celentano",
      "Joseph Jaworski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Fran Mccrory",
      "Adam Lowther"
     ],
     "a": [
      "Patty Andrzejewski",
      "Franky Coriano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Nancy Dippolito",
      "Yuri Paritsky"
     ],
     "a": [
      "Pallavi Deshpande",
      "Matthew Inzerillo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Laura Sweet",
      "Nancy Dippolito"
     ],
     "a": [
      "Bianca Previdi",
      "Pallavi Deshpande"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kendra Johnson",
      "Fran Mccrory"
     ],
     "a": [
      "Renee Celentano",
      "Patty Andrzejewski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Bruce Nguyen",
      "Steve Hong"
     ],
     "a": [
      "Joseph Jaworski",
      "Matthew Inzerillo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Adam Lowther",
      "Yuri Paritsky"
     ],
     "a": [
      "Jacob Alpert",
      "Franky Coriano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Nancy Dippolito",
      "Matthew Mintz"
     ],
     "a": [
      "Bianca Previdi",
      "Jj Pospiech"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Laura Sweet",
      "Steve Hong"
     ],
     "a": [
      "Renee Celentano",
      "Matthew Inzerillo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kendra Johnson",
      "Yuri Paritsky"
     ],
     "a": [
      "Patty Andrzejewski",
      "Jacob Alpert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Fran Mccrory",
      "Adam Lowther"
     ],
     "a": [
      "Pallavi Deshpande",
      "Franky Coriano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Laura Sweet",
      "Kendra Johnson"
     ],
     "a": [
      "Renee Celentano",
      "Bianca Previdi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Nancy Dippolito",
      "Fran Mccrory"
     ],
     "a": [
      "Patty Andrzejewski",
      "Pallavi Deshpande"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Matthew Mintz",
      "Steve Hong"
     ],
     "a": [
      "Joseph Jaworski",
      "Jacob Alpert"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Bruce Nguyen",
      "Adam Lowther"
     ],
     "a": [
      "Jj Pospiech",
      "Matthew Inzerillo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kendra Johnson",
      "Matthew Mintz"
     ],
     "a": [
      "Renee Celentano",
      "Joseph Jaworski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Laura Sweet",
      "Bruce Nguyen"
     ],
     "a": [
      "Patty Andrzejewski",
      "Jj Pospiech"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Nancy Dippolito",
      "Yuri Paritsky"
     ],
     "a": [
      "Bianca Previdi",
      "Franky Coriano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Fran Mccrory",
      "Steve Hong"
     ],
     "a": [
      "Pallavi Deshpande",
      "Jacob Alpert"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Laura Sweet",
      "Nancy Dippolito"
     ],
     "a": [
      "Renee Celentano",
      "Patty Andrzejewski"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kendra Johnson",
      "Fran Mccrory"
     ],
     "a": [
      "Bianca Previdi",
      "Pallavi Deshpande"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Matthew Mintz",
      "Bruce Nguyen"
     ],
     "a": [
      "Jj Pospiech",
      "Joseph Jaworski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Adam Lowther",
      "Yuri Paritsky"
     ],
     "a": [
      "Matthew Inzerillo",
      "Franky Coriano"
     ]
    }
   ],
   "subs": [
    "Kendra Johnson"
   ]
  },
  {
   "result": "away",
   "week": 2,
   "home": "Kitchen Nightmare",
   "away": "Summer Heat",
   "time": "2026-07-02T19:00:00",
   "complete": true,
   "homePoints": 605,
   "awayPoints": 617,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Allison Cavicchio",
      "Shayne Clowar"
     ],
     "a": [
      "Jiyun Yuh",
      "Aran Moultrop"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Bianca Previdi",
      "Jim Kochanski"
     ],
     "a": [
      "Stacey Frank",
      "Yongzhe Tian"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Patty Andrzejewski",
      "Jacob Alpert"
     ],
     "a": [
      "Amy Maussner",
      "Justin Green"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Pallavi Deshpande",
      "Neale Smith"
     ],
     "a": [
      "Leslie Laganella",
      "Richard Ross"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Allison Cavicchio",
      "Renee Celentano"
     ],
     "a": [
      "Stacey Frank",
      "Amy Maussner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Bianca Previdi",
      "Pallavi Deshpande"
     ],
     "a": [
      "Jiyun Yuh",
      "Srilahari Kunchapu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Shayne Clowar",
      "Jim Kochanski"
     ],
     "a": [
      "Yongzhe Tian",
      "Aran Moultrop"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Neale Smith",
      "Joseph Jaworski"
     ],
     "a": [
      "Justin Green",
      "Daniel Borgia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Bianca Previdi",
      "Shayne Clowar"
     ],
     "a": [
      "Stacey Frank",
      "Aran Moultrop"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Allison Cavicchio",
      "Jim Kochanski"
     ],
     "a": [
      "Jiyun Yuh",
      "Yongzhe Tian"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Renee Celentano",
      "Jacob Alpert"
     ],
     "a": [
      "Srilahari Kunchapu",
      "Daniel Borgia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Patty Andrzejewski",
      "Joseph Jaworski"
     ],
     "a": [
      "Leslie Laganella",
      "Richard Ross"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Bianca Previdi",
      "Patty Andrzejewski"
     ],
     "a": [
      "Amy Maussner",
      "Leslie Laganella"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Renee Celentano",
      "Pallavi Deshpande"
     ],
     "a": [
      "Jiyun Yuh",
      "Srilahari Kunchapu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Shayne Clowar",
      "Jacob Alpert"
     ],
     "a": [
      "Yongzhe Tian",
      "Justin Green"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Neale Smith",
      "Joseph Jaworski"
     ],
     "a": [
      "Daniel Borgia",
      "Richard Ross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Renee Celentano",
      "Jacob Alpert"
     ],
     "a": [
      "Srilahari Kunchapu",
      "Justin Green"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Allison Cavicchio",
      "Jim Kochanski"
     ],
     "a": [
      "Stacey Frank",
      "Aran Moultrop"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Patty Andrzejewski",
      "Joseph Jaworski"
     ],
     "a": [
      "Amy Maussner",
      "Richard Ross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Pallavi Deshpande",
      "Neale Smith"
     ],
     "a": [
      "Leslie Laganella",
      "Daniel Borgia"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Allison Cavicchio",
      "Bianca Previdi"
     ],
     "a": [
      "Stacey Frank",
      "Jiyun Yuh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Patty Andrzejewski",
      "Pallavi Deshpande"
     ],
     "a": [
      "Amy Maussner",
      "Leslie Laganella"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Shayne Clowar",
      "Jacob Alpert"
     ],
     "a": [
      "Yongzhe Tian",
      "Justin Green"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jim Kochanski",
      "Neale Smith"
     ],
     "a": [
      "Aran Moultrop",
      "Richard Ross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Allison Cavicchio",
      "Shayne Clowar"
     ],
     "a": [
      "Stacey Frank",
      "Yongzhe Tian"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Bianca Previdi",
      "Neale Smith"
     ],
     "a": [
      "Amy Maussner",
      "Justin Green"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Renee Celentano",
      "Jim Kochanski"
     ],
     "a": [
      "Jiyun Yuh",
      "Aran Moultrop"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Pallavi Deshpande",
      "Joseph Jaworski"
     ],
     "a": [
      "Srilahari Kunchapu",
      "Daniel Borgia"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Allison Cavicchio",
      "Bianca Previdi"
     ],
     "a": [
      "Stacey Frank",
      "Jiyun Yuh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Renee Celentano",
      "Patty Andrzejewski"
     ],
     "a": [
      "Srilahari Kunchapu",
      "Leslie Laganella"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Shayne Clowar",
      "Jim Kochanski"
     ],
     "a": [
      "Yongzhe Tian",
      "Aran Moultrop"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jacob Alpert",
      "Joseph Jaworski"
     ],
     "a": [
      "Daniel Borgia",
      "Richard Ross"
     ]
    }
   ],
   "subs": [
    "Srilahari Kunchapu"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Summer Smasher",
   "away": "Pickleball Bandits",
   "time": "2026-07-02T19:00:00",
   "complete": true,
   "homePoints": 652,
   "awayPoints": 577,
   "homeGW": 20,
   "awayGW": 12,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kate Siedell",
      "Peter David"
     ],
     "a": [
      "Donna Arsenault",
      "Alex Kustas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Mary Shaila Mendoza",
      "Bruce Nguyen"
     ],
     "a": [
      "Kaleigh Hadley",
      "Steven Pinto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Fran Mccrory",
      "Steve Hong"
     ],
     "a": [
      "Ying Tang",
      "Daniel Hadley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Nancy Dippolito",
      "Adam Lowther"
     ],
     "a": [
      "Brittany Jacobs",
      "Jonathan Carter"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kate Siedell",
      "Laura Sweet"
     ],
     "a": [
      "Kaleigh Hadley",
      "Ying Tang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Mary Shaila Mendoza",
      "Nancy Dippolito"
     ],
     "a": [
      "Donna Arsenault",
      "Lisa Pinder"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Peter David",
      "Bruce Nguyen"
     ],
     "a": [
      "Steven Pinto",
      "Alex Kustas"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Adam Lowther",
      "Xin Liu"
     ],
     "a": [
      "Daniel Hadley",
      "Mike Fu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Mary Shaila Mendoza",
      "Peter David"
     ],
     "a": [
      "Kaleigh Hadley",
      "Alex Kustas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kate Siedell",
      "Bruce Nguyen"
     ],
     "a": [
      "Donna Arsenault",
      "Steven Pinto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Laura Sweet",
      "Steve Hong"
     ],
     "a": [
      "Lisa Pinder",
      "Mike Fu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Fran Mccrory",
      "Xin Liu"
     ],
     "a": [
      "Brittany Jacobs",
      "Jonathan Carter"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Mary Shaila Mendoza",
      "Fran Mccrory"
     ],
     "a": [
      "Ying Tang",
      "Brittany Jacobs"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Laura Sweet",
      "Nancy Dippolito"
     ],
     "a": [
      "Donna Arsenault",
      "Lisa Pinder"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Peter David",
      "Steve Hong"
     ],
     "a": [
      "Steven Pinto",
      "Daniel Hadley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Adam Lowther",
      "Xin Liu"
     ],
     "a": [
      "Mike Fu",
      "Jonathan Carter"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Laura Sweet",
      "Steve Hong"
     ],
     "a": [
      "Lisa Pinder",
      "Daniel Hadley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kate Siedell",
      "Bruce Nguyen"
     ],
     "a": [
      "Kaleigh Hadley",
      "Alex Kustas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Fran Mccrory",
      "Xin Liu"
     ],
     "a": [
      "Ying Tang",
      "Jonathan Carter"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Nancy Dippolito",
      "Adam Lowther"
     ],
     "a": [
      "Brittany Jacobs",
      "Mike Fu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Kate Siedell",
      "Mary Shaila Mendoza"
     ],
     "a": [
      "Kaleigh Hadley",
      "Donna Arsenault"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Fran Mccrory",
      "Nancy Dippolito"
     ],
     "a": [
      "Ying Tang",
      "Brittany Jacobs"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Peter David",
      "Steve Hong"
     ],
     "a": [
      "Steven Pinto",
      "Daniel Hadley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Bruce Nguyen",
      "Adam Lowther"
     ],
     "a": [
      "Alex Kustas",
      "Jonathan Carter"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kate Siedell",
      "Peter David"
     ],
     "a": [
      "Kaleigh Hadley",
      "Steven Pinto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Mary Shaila Mendoza",
      "Adam Lowther"
     ],
     "a": [
      "Ying Tang",
      "Daniel Hadley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Laura Sweet",
      "Bruce Nguyen"
     ],
     "a": [
      "Donna Arsenault",
      "Alex Kustas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Nancy Dippolito",
      "Xin Liu"
     ],
     "a": [
      "Lisa Pinder",
      "Mike Fu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Kate Siedell",
      "Mary Shaila Mendoza"
     ],
     "a": [
      "Kaleigh Hadley",
      "Donna Arsenault"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Laura Sweet",
      "Fran Mccrory"
     ],
     "a": [
      "Lisa Pinder",
      "Brittany Jacobs"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Peter David",
      "Bruce Nguyen"
     ],
     "a": [
      "Steven Pinto",
      "Alex Kustas"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Steve Hong",
      "Xin Liu"
     ],
     "a": [
      "Mike Fu",
      "Jonathan Carter"
     ]
    }
   ],
   "subs": [
    "Donna Arsenault",
    "Ying Tang"
   ]
  },
  {
   "result": "away",
   "week": 3,
   "home": "Summer Heat",
   "away": "Summer Smasher",
   "time": "2026-07-09T19:00:00",
   "complete": true,
   "homePoints": 590,
   "awayPoints": 644,
   "homeGW": 10,
   "awayGW": 22,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Stacey Frank",
      "Daniel Dechristopher"
     ],
     "a": [
      "Mary Shaila Mendoza",
      "Jimmy Shapiro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jiyun Yuh",
      "Aran Moultrop"
     ],
     "a": [
      "Kate Siedell",
      "Matthew Mintz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Lorelei Mcglade",
      "Mario Contreras"
     ],
     "a": [
      "Justine Inton",
      "Peter David"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Leslie Laganella",
      "Justin Green"
     ],
     "a": [
      "Nancy Dippolito",
      "Yuri Paritsky"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Stacey Frank",
      "Amy Maussner"
     ],
     "a": [
      "Kate Siedell",
      "Justine Inton"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jiyun Yuh",
      "Leslie Laganella"
     ],
     "a": [
      "Mary Shaila Mendoza",
      "Laura Sweet"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Daniel Dechristopher",
      "Aran Moultrop"
     ],
     "a": [
      "Matthew Mintz",
      "Jimmy Shapiro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Justin Green",
      "Richard Renza"
     ],
     "a": [
      "Peter David",
      "Xin Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jiyun Yuh",
      "Daniel Dechristopher"
     ],
     "a": [
      "Kate Siedell",
      "Jimmy Shapiro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Stacey Frank",
      "Aran Moultrop"
     ],
     "a": [
      "Mary Shaila Mendoza",
      "Matthew Mintz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Amy Maussner",
      "Mario Contreras"
     ],
     "a": [
      "Laura Sweet",
      "Xin Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Lorelei Mcglade",
      "Richard Renza"
     ],
     "a": [
      "Nancy Dippolito",
      "Yuri Paritsky"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jiyun Yuh",
      "Lorelei Mcglade"
     ],
     "a": [
      "Justine Inton",
      "Nancy Dippolito"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Amy Maussner",
      "Leslie Laganella"
     ],
     "a": [
      "Mary Shaila Mendoza",
      "Laura Sweet"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Daniel Dechristopher",
      "Mario Contreras"
     ],
     "a": [
      "Matthew Mintz",
      "Peter David"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Justin Green",
      "Richard Renza"
     ],
     "a": [
      "Xin Liu",
      "Yuri Paritsky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Amy Maussner",
      "Mario Contreras"
     ],
     "a": [
      "Laura Sweet",
      "Peter David"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Stacey Frank",
      "Aran Moultrop"
     ],
     "a": [
      "Kate Siedell",
      "Jimmy Shapiro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lorelei Mcglade",
      "Richard Renza"
     ],
     "a": [
      "Justine Inton",
      "Yuri Paritsky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Leslie Laganella",
      "Justin Green"
     ],
     "a": [
      "Nancy Dippolito",
      "Xin Liu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Stacey Frank",
      "Jiyun Yuh"
     ],
     "a": [
      "Kate Siedell",
      "Mary Shaila Mendoza"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lorelei Mcglade",
      "Leslie Laganella"
     ],
     "a": [
      "Justine Inton",
      "Nancy Dippolito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Daniel Dechristopher",
      "Mario Contreras"
     ],
     "a": [
      "Matthew Mintz",
      "Peter David"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Aran Moultrop",
      "Justin Green"
     ],
     "a": [
      "Jimmy Shapiro",
      "Yuri Paritsky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Stacey Frank",
      "Daniel Dechristopher"
     ],
     "a": [
      "Kate Siedell",
      "Matthew Mintz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jiyun Yuh",
      "Justin Green"
     ],
     "a": [
      "Justine Inton",
      "Peter David"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Amy Maussner",
      "Aran Moultrop"
     ],
     "a": [
      "Mary Shaila Mendoza",
      "Jimmy Shapiro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Leslie Laganella",
      "Richard Renza"
     ],
     "a": [
      "Laura Sweet",
      "Xin Liu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Stacey Frank",
      "Jiyun Yuh"
     ],
     "a": [
      "Kate Siedell",
      "Mary Shaila Mendoza"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Amy Maussner",
      "Lorelei Mcglade"
     ],
     "a": [
      "Laura Sweet",
      "Nancy Dippolito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Daniel Dechristopher",
      "Aran Moultrop"
     ],
     "a": [
      "Matthew Mintz",
      "Jimmy Shapiro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Mario Contreras",
      "Richard Renza"
     ],
     "a": [
      "Xin Liu",
      "Yuri Paritsky"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 3,
   "home": "Pickleball Bandits",
   "away": "Kitchen Nightmare",
   "time": "2026-07-09T19:00:00",
   "complete": true,
   "homePoints": 599,
   "awayPoints": 622,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kaleigh Hadley",
      "Christopher Yang"
     ],
     "a": [
      "Allison Cavicchio",
      "Jj Pospiech"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Danielle Kane",
      "Steven Pinto"
     ],
     "a": [
      "Arpita Vaidya",
      "Shayne Clowar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jacquie Verish",
      "Alex Kustas"
     ],
     "a": [
      "Pallavi Deshpande",
      "Jim Kochanski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Lisa Pinder",
      "Benji Berry"
     ],
     "a": [
      "Patty Andrzejewski",
      "Matthew Inzerillo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Danielle Kane",
      "Jacquie Verish"
     ],
     "a": [
      "Allison Cavicchio",
      "Patty Andrzejewski"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kaleigh Hadley",
      "Alexandria Mlkvy"
     ],
     "a": [
      "Arpita Vaidya",
      "Pallavi Deshpande"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Christopher Yang",
      "Steven Pinto"
     ],
     "a": [
      "Jj Pospiech",
      "Shayne Clowar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Alex Kustas",
      "Jonathan Carter"
     ],
     "a": [
      "Matthew Inzerillo",
      "Franky Coriano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Danielle Kane",
      "Christopher Yang"
     ],
     "a": [
      "Arpita Vaidya",
      "Jj Pospiech"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kaleigh Hadley",
      "Steven Pinto"
     ],
     "a": [
      "Allison Cavicchio",
      "Shayne Clowar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Alexandria Mlkvy",
      "Jonathan Carter"
     ],
     "a": [
      "Pallavi Deshpande",
      "Jim Kochanski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Lisa Pinder",
      "Benji Berry"
     ],
     "a": [
      "Patty Andrzejewski",
      "Franky Coriano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Danielle Kane",
      "Alexandria Mlkvy"
     ],
     "a": [
      "Allison Cavicchio",
      "Arpita Vaidya"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jacquie Verish",
      "Lisa Pinder"
     ],
     "a": [
      "Patty Andrzejewski",
      "Pallavi Deshpande"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Steven Pinto",
      "Alex Kustas"
     ],
     "a": [
      "Shayne Clowar",
      "Jim Kochanski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Benji Berry",
      "Jonathan Carter"
     ],
     "a": [
      "Matthew Inzerillo",
      "Franky Coriano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Kaleigh Hadley",
      "Alex Kustas"
     ],
     "a": [
      "Arpita Vaidya",
      "Jj Pospiech"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Alexandria Mlkvy",
      "Christopher Yang"
     ],
     "a": [
      "Allison Cavicchio",
      "Jim Kochanski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Jacquie Verish",
      "Benji Berry"
     ],
     "a": [
      "Patty Andrzejewski",
      "Franky Coriano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Lisa Pinder",
      "Jonathan Carter"
     ],
     "a": [
      "Pallavi Deshpande",
      "Matthew Inzerillo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kaleigh Hadley",
      "Danielle Kane"
     ],
     "a": [
      "Allison Cavicchio",
      "Arpita Vaidya"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jacquie Verish",
      "Lisa Pinder"
     ],
     "a": [
      "Patty Andrzejewski",
      "Pallavi Deshpande"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Steven Pinto",
      "Benji Berry"
     ],
     "a": [
      "Jj Pospiech",
      "Jim Kochanski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Christopher Yang",
      "Alex Kustas"
     ],
     "a": [
      "Shayne Clowar",
      "Matthew Inzerillo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Danielle Kane",
      "Steven Pinto"
     ],
     "a": [
      "Allison Cavicchio",
      "Jj Pospiech"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kaleigh Hadley",
      "Christopher Yang"
     ],
     "a": [
      "Arpita Vaidya",
      "Shayne Clowar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Alexandria Mlkvy",
      "Alex Kustas"
     ],
     "a": [
      "Patty Andrzejewski",
      "Matthew Inzerillo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jacquie Verish",
      "Jonathan Carter"
     ],
     "a": [
      "Pallavi Deshpande",
      "Franky Coriano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kaleigh Hadley",
      "Alexandria Mlkvy"
     ],
     "a": [
      "Allison Cavicchio",
      "Patty Andrzejewski"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Danielle Kane",
      "Lisa Pinder"
     ],
     "a": [
      "Arpita Vaidya",
      "Pallavi Deshpande"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Christopher Yang",
      "Steven Pinto"
     ],
     "a": [
      "Jj Pospiech",
      "Shayne Clowar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Benji Berry",
      "Jonathan Carter"
     ],
     "a": [
      "Jim Kochanski",
      "Franky Coriano"
     ]
    }
   ],
   "subs": [
    "Arpita Vaidya"
   ]
  },
  {
   "result": "away",
   "week": 4,
   "home": "Summer Heat",
   "away": "Pickleball Bandits",
   "time": "2026-07-16T19:00:00",
   "complete": true,
   "homePoints": 559,
   "awayPoints": 667,
   "homeGW": 9,
   "awayGW": 23,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Stacey Frank",
      "Yongzhe Tian"
     ],
     "a": [
      "Danielle Kane",
      "Alex Kustas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Pam Boyd",
      "Daniel Borgia"
     ],
     "a": [
      "Kaleigh Hadley",
      "Christopher Yang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Lizzie Brofft",
      "Richard Ross"
     ],
     "a": [
      "Alexandria Mlkvy",
      "Benji Berry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Leslie Laganella",
      "Richard Renza"
     ],
     "a": [
      "Brittany Jacobs",
      "Jonathan Carter"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Stacey Frank",
      "Stacy Ip-Mo"
     ],
     "a": [
      "Kaleigh Hadley",
      "Alexandria Mlkvy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Pam Boyd",
      "Leslie Laganella"
     ],
     "a": [
      "Danielle Kane",
      "Jacquie Verish"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Yongzhe Tian",
      "Daniel Borgia"
     ],
     "a": [
      "Christopher Yang",
      "Alex Kustas"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Richard Renza",
      "Will Lockard"
     ],
     "a": [
      "Benji Berry",
      "Daniel Hadley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Pam Boyd",
      "Yongzhe Tian"
     ],
     "a": [
      "Kaleigh Hadley",
      "Alex Kustas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Stacey Frank",
      "Daniel Borgia"
     ],
     "a": [
      "Danielle Kane",
      "Christopher Yang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Stacy Ip-Mo",
      "Richard Ross"
     ],
     "a": [
      "Jacquie Verish",
      "Daniel Hadley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Lizzie Brofft",
      "Will Lockard"
     ],
     "a": [
      "Brittany Jacobs",
      "Jonathan Carter"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Pam Boyd",
      "Lizzie Brofft"
     ],
     "a": [
      "Alexandria Mlkvy",
      "Brittany Jacobs"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Stacy Ip-Mo",
      "Leslie Laganella"
     ],
     "a": [
      "Danielle Kane",
      "Jacquie Verish"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Yongzhe Tian",
      "Richard Ross"
     ],
     "a": [
      "Christopher Yang",
      "Benji Berry"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Richard Renza",
      "Will Lockard"
     ],
     "a": [
      "Daniel Hadley",
      "Jonathan Carter"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Stacy Ip-Mo",
      "Richard Ross"
     ],
     "a": [
      "Jacquie Verish",
      "Benji Berry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Stacey Frank",
      "Daniel Borgia"
     ],
     "a": [
      "Kaleigh Hadley",
      "Alex Kustas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lizzie Brofft",
      "Will Lockard"
     ],
     "a": [
      "Alexandria Mlkvy",
      "Jonathan Carter"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Leslie Laganella",
      "Richard Renza"
     ],
     "a": [
      "Brittany Jacobs",
      "Daniel Hadley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Stacey Frank",
      "Pam Boyd"
     ],
     "a": [
      "Kaleigh Hadley",
      "Danielle Kane"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lizzie Brofft",
      "Leslie Laganella"
     ],
     "a": [
      "Alexandria Mlkvy",
      "Brittany Jacobs"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Yongzhe Tian",
      "Richard Ross"
     ],
     "a": [
      "Christopher Yang",
      "Benji Berry"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Daniel Borgia",
      "Richard Renza"
     ],
     "a": [
      "Alex Kustas",
      "Jonathan Carter"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Stacey Frank",
      "Yongzhe Tian"
     ],
     "a": [
      "Kaleigh Hadley",
      "Christopher Yang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 30,
     "as": 28,
     "h": [
      "Pam Boyd",
      "Richard Renza"
     ],
     "a": [
      "Alexandria Mlkvy",
      "Benji Berry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Stacy Ip-Mo",
      "Daniel Borgia"
     ],
     "a": [
      "Danielle Kane",
      "Alex Kustas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Leslie Laganella",
      "Will Lockard"
     ],
     "a": [
      "Jacquie Verish",
      "Daniel Hadley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Stacey Frank",
      "Pam Boyd"
     ],
     "a": [
      "Kaleigh Hadley",
      "Danielle Kane"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Stacy Ip-Mo",
      "Lizzie Brofft"
     ],
     "a": [
      "Jacquie Verish",
      "Brittany Jacobs"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Yongzhe Tian",
      "Daniel Borgia"
     ],
     "a": [
      "Christopher Yang",
      "Alex Kustas"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Richard Ross",
      "Will Lockard"
     ],
     "a": [
      "Daniel Hadley",
      "Jonathan Carter"
     ]
    }
   ],
   "subs": [
    "Pam Boyd",
    "Lizzie Brofft",
    "Stacy Ip-Mo"
   ]
  },
  {
   "result": "home",
   "week": 4,
   "home": "Kitchen Nightmare",
   "away": "Summer Smasher",
   "time": "2026-07-16T19:00:00",
   "complete": true,
   "homePoints": 641,
   "awayPoints": 581,
   "homeGW": 23,
   "awayGW": 9,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Allison Cavicchio",
      "Neale Smith"
     ],
     "a": [
      "Mary Shaila Mendoza",
      "Peter David"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Arpita Vaidya",
      "Jim Kochanski"
     ],
     "a": [
      "Kate Siedell",
      "Jimmy Shapiro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Pallavi Deshpande",
      "Matthew Inzerillo"
     ],
     "a": [
      "Justine Inton",
      "Yuri Paritsky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Patty Andrzejewski",
      "Evan Sinclair"
     ],
     "a": [
      "Fran Mccrory",
      "Adam Lowther"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Allison Cavicchio",
      "Patty Andrzejewski"
     ],
     "a": [
      "Kate Siedell",
      "Justine Inton"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Arpita Vaidya",
      "Pallavi Deshpande"
     ],
     "a": [
      "Mary Shaila Mendoza",
      "Laura Sweet"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Neale Smith",
      "Jim Kochanski"
     ],
     "a": [
      "Peter David",
      "Jimmy Shapiro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Evan Sinclair",
      "Joseph Jaworski"
     ],
     "a": [
      "Yuri Paritsky",
      "Steve Hong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Arpita Vaidya",
      "Neale Smith"
     ],
     "a": [
      "Kate Siedell",
      "Peter David"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Allison Cavicchio",
      "Jim Kochanski"
     ],
     "a": [
      "Mary Shaila Mendoza",
      "Jimmy Shapiro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Pallavi Deshpande",
      "Matthew Inzerillo"
     ],
     "a": [
      "Laura Sweet",
      "Steve Hong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Patty Andrzejewski",
      "Joseph Jaworski"
     ],
     "a": [
      "Fran Mccrory",
      "Adam Lowther"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Allison Cavicchio",
      "Arpita Vaidya"
     ],
     "a": [
      "Kate Siedell",
      "Laura Sweet"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Patty Andrzejewski",
      "Pallavi Deshpande"
     ],
     "a": [
      "Justine Inton",
      "Fran Mccrory"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jim Kochanski",
      "Matthew Inzerillo"
     ],
     "a": [
      "Jimmy Shapiro",
      "Yuri Paritsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Evan Sinclair",
      "Joseph Jaworski"
     ],
     "a": [
      "Adam Lowther",
      "Steve Hong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Arpita Vaidya",
      "Neale Smith"
     ],
     "a": [
      "Mary Shaila Mendoza",
      "Yuri Paritsky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Allison Cavicchio",
      "Matthew Inzerillo"
     ],
     "a": [
      "Laura Sweet",
      "Peter David"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Patty Andrzejewski",
      "Joseph Jaworski"
     ],
     "a": [
      "Justine Inton",
      "Adam Lowther"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Pallavi Deshpande",
      "Evan Sinclair"
     ],
     "a": [
      "Fran Mccrory",
      "Steve Hong"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Allison Cavicchio",
      "Arpita Vaidya"
     ],
     "a": [
      "Mary Shaila Mendoza",
      "Kate Siedell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Patty Andrzejewski",
      "Pallavi Deshpande"
     ],
     "a": [
      "Justine Inton",
      "Fran Mccrory"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Neale Smith",
      "Matthew Inzerillo"
     ],
     "a": [
      "Jimmy Shapiro",
      "Adam Lowther"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jim Kochanski",
      "Evan Sinclair"
     ],
     "a": [
      "Peter David",
      "Yuri Paritsky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Allison Cavicchio",
      "Neale Smith"
     ],
     "a": [
      "Kate Siedell",
      "Jimmy Shapiro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Arpita Vaidya",
      "Jim Kochanski"
     ],
     "a": [
      "Mary Shaila Mendoza",
      "Peter David"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Patty Andrzejewski",
      "Evan Sinclair"
     ],
     "a": [
      "Laura Sweet",
      "Yuri Paritsky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Pallavi Deshpande",
      "Joseph Jaworski"
     ],
     "a": [
      "Justine Inton",
      "Steve Hong"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Allison Cavicchio",
      "Patty Andrzejewski"
     ],
     "a": [
      "Mary Shaila Mendoza",
      "Laura Sweet"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Arpita Vaidya",
      "Pallavi Deshpande"
     ],
     "a": [
      "Kate Siedell",
      "Fran Mccrory"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Neale Smith",
      "Jim Kochanski"
     ],
     "a": [
      "Peter David",
      "Jimmy Shapiro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Matthew Inzerillo",
      "Joseph Jaworski"
     ],
     "a": [
      "Adam Lowther",
      "Steve Hong"
     ]
    }
   ],
   "subs": [
    "Evan Sinclair",
    "Arpita Vaidya"
   ]
  },
  {
   "result": "away",
   "week": 5,
   "home": "Pickleball Bandits",
   "away": "Summer Smasher",
   "time": "2026-07-23T19:00:00",
   "complete": true,
   "homePoints": 580,
   "awayPoints": 643,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kaleigh Hadley",
      "Christopher Yang"
     ],
     "a": [
      "Laura Sweet",
      "Bruce Nguyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Danielle Kane",
      "Alex Kustas"
     ],
     "a": [
      "Kate Siedell",
      "Matthew Mintz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Jacquie Verish",
      "Steven Pinto"
     ],
     "a": [
      "Mary Shaila Mendoza",
      "Xin Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lisa Pinder",
      "Benji Berry"
     ],
     "a": [
      "Olivia Schaller",
      "Yuri Paritsky"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kaleigh Hadley",
      "Alexandria Mlkvy"
     ],
     "a": [
      "Kate Siedell",
      "Mary Shaila Mendoza"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Danielle Kane",
      "Lisa Pinder"
     ],
     "a": [
      "Laura Sweet",
      "Justine Inton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Christopher Yang",
      "Alex Kustas"
     ],
     "a": [
      "Matthew Mintz",
      "Bruce Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Benji Berry",
      "Daniel Hadley"
     ],
     "a": [
      "Xin Liu",
      "Jimmy Shapiro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Danielle Kane",
      "Christopher Yang"
     ],
     "a": [
      "Kate Siedell",
      "Bruce Nguyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kaleigh Hadley",
      "Alex Kustas"
     ],
     "a": [
      "Laura Sweet",
      "Matthew Mintz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Alexandria Mlkvy",
      "Steven Pinto"
     ],
     "a": [
      "Justine Inton",
      "Jimmy Shapiro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jacquie Verish",
      "Daniel Hadley"
     ],
     "a": [
      "Olivia Schaller",
      "Yuri Paritsky"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Danielle Kane",
      "Jacquie Verish"
     ],
     "a": [
      "Mary Shaila Mendoza",
      "Olivia Schaller"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Alexandria Mlkvy",
      "Lisa Pinder"
     ],
     "a": [
      "Laura Sweet",
      "Justine Inton"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Christopher Yang",
      "Steven Pinto"
     ],
     "a": [
      "Matthew Mintz",
      "Xin Liu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Benji Berry",
      "Daniel Hadley"
     ],
     "a": [
      "Jimmy Shapiro",
      "Yuri Paritsky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Alexandria Mlkvy",
      "Steven Pinto"
     ],
     "a": [
      "Justine Inton",
      "Xin Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Kaleigh Hadley",
      "Alex Kustas"
     ],
     "a": [
      "Kate Siedell",
      "Bruce Nguyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jacquie Verish",
      "Daniel Hadley"
     ],
     "a": [
      "Mary Shaila Mendoza",
      "Yuri Paritsky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lisa Pinder",
      "Benji Berry"
     ],
     "a": [
      "Olivia Schaller",
      "Jimmy Shapiro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Kaleigh Hadley",
      "Danielle Kane"
     ],
     "a": [
      "Kate Siedell",
      "Laura Sweet"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jacquie Verish",
      "Lisa Pinder"
     ],
     "a": [
      "Mary Shaila Mendoza",
      "Olivia Schaller"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Christopher Yang",
      "Steven Pinto"
     ],
     "a": [
      "Matthew Mintz",
      "Xin Liu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Alex Kustas",
      "Benji Berry"
     ],
     "a": [
      "Bruce Nguyen",
      "Yuri Paritsky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kaleigh Hadley",
      "Christopher Yang"
     ],
     "a": [
      "Kate Siedell",
      "Matthew Mintz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Danielle Kane",
      "Benji Berry"
     ],
     "a": [
      "Mary Shaila Mendoza",
      "Xin Liu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Alexandria Mlkvy",
      "Alex Kustas"
     ],
     "a": [
      "Laura Sweet",
      "Bruce Nguyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lisa Pinder",
      "Daniel Hadley"
     ],
     "a": [
      "Justine Inton",
      "Jimmy Shapiro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kaleigh Hadley",
      "Danielle Kane"
     ],
     "a": [
      "Kate Siedell",
      "Laura Sweet"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Alexandria Mlkvy",
      "Jacquie Verish"
     ],
     "a": [
      "Justine Inton",
      "Olivia Schaller"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Christopher Yang",
      "Alex Kustas"
     ],
     "a": [
      "Matthew Mintz",
      "Bruce Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Steven Pinto",
      "Daniel Hadley"
     ],
     "a": [
      "Jimmy Shapiro",
      "Yuri Paritsky"
     ]
    }
   ],
   "subs": [
    "Olivia Schaller"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "Summer Heat",
   "away": "Kitchen Nightmare",
   "time": "2026-07-23T19:00:00",
   "complete": true,
   "homePoints": 612,
   "awayPoints": 571,
   "homeGW": 19,
   "awayGW": 13,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Heather Conger",
      "Daniel Dechristopher"
     ],
     "a": [
      "Bianca Previdi",
      "Neale Smith"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Amy Maussner",
      "Yongzhe Tian"
     ],
     "a": [
      "Michelle Friedman",
      "Jj Pospiech"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Lorelei Mcglade",
      "Mario Contreras"
     ],
     "a": [
      "Arpita Vaidya",
      "Joseph Jaworski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Leslie Laganella",
      "Justin Green"
     ],
     "a": [
      "Pallavi Deshpande",
      "Jacob Alpert"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Heather Conger",
      "Stacy Ip-Mo"
     ],
     "a": [
      "Michelle Friedman",
      "Arpita Vaidya"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Amy Maussner",
      "Leslie Laganella"
     ],
     "a": [
      "Bianca Previdi",
      "Patty Andrzejewski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Daniel Dechristopher",
      "Yongzhe Tian"
     ],
     "a": [
      "Jj Pospiech",
      "Neale Smith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Justin Green",
      "Will Lockard"
     ],
     "a": [
      "Joseph Jaworski",
      "Franky Coriano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Amy Maussner",
      "Daniel Dechristopher"
     ],
     "a": [
      "Michelle Friedman",
      "Neale Smith"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Heather Conger",
      "Yongzhe Tian"
     ],
     "a": [
      "Bianca Previdi",
      "Jj Pospiech"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Stacy Ip-Mo",
      "Mario Contreras"
     ],
     "a": [
      "Patty Andrzejewski",
      "Franky Coriano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Lorelei Mcglade",
      "Will Lockard"
     ],
     "a": [
      "Pallavi Deshpande",
      "Jacob Alpert"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Amy Maussner",
      "Lorelei Mcglade"
     ],
     "a": [
      "Arpita Vaidya",
      "Pallavi Deshpande"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Stacy Ip-Mo",
      "Leslie Laganella"
     ],
     "a": [
      "Bianca Previdi",
      "Patty Andrzejewski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Daniel Dechristopher",
      "Mario Contreras"
     ],
     "a": [
      "Jj Pospiech",
      "Joseph Jaworski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Justin Green",
      "Will Lockard"
     ],
     "a": [
      "Franky Coriano",
      "Jacob Alpert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Stacy Ip-Mo",
      "Mario Contreras"
     ],
     "a": [
      "Patty Andrzejewski",
      "Joseph Jaworski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Heather Conger",
      "Yongzhe Tian"
     ],
     "a": [
      "Michelle Friedman",
      "Neale Smith"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Lorelei Mcglade",
      "Will Lockard"
     ],
     "a": [
      "Arpita Vaidya",
      "Jacob Alpert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Leslie Laganella",
      "Justin Green"
     ],
     "a": [
      "Pallavi Deshpande",
      "Franky Coriano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Heather Conger",
      "Amy Maussner"
     ],
     "a": [
      "Michelle Friedman",
      "Bianca Previdi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lorelei Mcglade",
      "Leslie Laganella"
     ],
     "a": [
      "Arpita Vaidya",
      "Pallavi Deshpande"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Daniel Dechristopher",
      "Mario Contreras"
     ],
     "a": [
      "Jj Pospiech",
      "Joseph Jaworski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Yongzhe Tian",
      "Justin Green"
     ],
     "a": [
      "Neale Smith",
      "Jacob Alpert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Heather Conger",
      "Daniel Dechristopher"
     ],
     "a": [
      "Michelle Friedman",
      "Jj Pospiech"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Amy Maussner",
      "Justin Green"
     ],
     "a": [
      "Arpita Vaidya",
      "Joseph Jaworski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Stacy Ip-Mo",
      "Yongzhe Tian"
     ],
     "a": [
      "Bianca Previdi",
      "Neale Smith"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Leslie Laganella",
      "Will Lockard"
     ],
     "a": [
      "Patty Andrzejewski",
      "Franky Coriano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Heather Conger",
      "Amy Maussner"
     ],
     "a": [
      "Michelle Friedman",
      "Bianca Previdi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Stacy Ip-Mo",
      "Lorelei Mcglade"
     ],
     "a": [
      "Patty Andrzejewski",
      "Pallavi Deshpande"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Daniel Dechristopher",
      "Yongzhe Tian"
     ],
     "a": [
      "Jj Pospiech",
      "Neale Smith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Mario Contreras",
      "Will Lockard"
     ],
     "a": [
      "Franky Coriano",
      "Jacob Alpert"
     ]
    }
   ],
   "subs": [
    "Michelle Friedman",
    "Arpita Vaidya",
    "Stacy Ip-Mo",
    "Heather Conger"
   ]
  },
  {
   "result": "home",
   "week": 6,
   "home": "Summer Smasher",
   "away": "Summer Heat",
   "time": "2026-07-30T19:00:00",
   "complete": true,
   "homePoints": 643,
   "awayPoints": 571,
   "homeGW": 22,
   "awayGW": 10,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kate Siedell",
      "Matthew Mintz"
     ],
     "a": [
      "Jiyun Yuh",
      "Aran Moultrop"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 28,
     "h": [
      "Olivia Schaller",
      "Bruce Nguyen"
     ],
     "a": [
      "Stacey Frank",
      "Daniel Borgia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Justine Inton",
      "Steve Hong"
     ],
     "a": [
      "Heather Conger",
      "Justin Green"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Fran Mccrory",
      "Peter David"
     ],
     "a": [
      "Leslie Laganella",
      "Richard Ross"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kate Siedell",
      "Laura Sweet"
     ],
     "a": [
      "Stacey Frank",
      "Heather Conger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Olivia Schaller",
      "Fran Mccrory"
     ],
     "a": [
      "Jiyun Yuh",
      "Amy Maussner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Matthew Mintz",
      "Bruce Nguyen"
     ],
     "a": [
      "Daniel Borgia",
      "Aran Moultrop"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Peter David",
      "Adam Lowther"
     ],
     "a": [
      "Justin Green",
      "Richard Renza"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Olivia Schaller",
      "Matthew Mintz"
     ],
     "a": [
      "Stacey Frank",
      "Aran Moultrop"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kate Siedell",
      "Bruce Nguyen"
     ],
     "a": [
      "Jiyun Yuh",
      "Daniel Borgia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Laura Sweet",
      "Steve Hong"
     ],
     "a": [
      "Amy Maussner",
      "Richard Renza"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Justine Inton",
      "Adam Lowther"
     ],
     "a": [
      "Leslie Laganella",
      "Richard Ross"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Olivia Schaller",
      "Justine Inton"
     ],
     "a": [
      "Heather Conger",
      "Leslie Laganella"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Laura Sweet",
      "Fran Mccrory"
     ],
     "a": [
      "Jiyun Yuh",
      "Amy Maussner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Matthew Mintz",
      "Steve Hong"
     ],
     "a": [
      "Daniel Borgia",
      "Justin Green"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Peter David",
      "Adam Lowther"
     ],
     "a": [
      "Richard Renza",
      "Richard Ross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Laura Sweet",
      "Steve Hong"
     ],
     "a": [
      "Amy Maussner",
      "Justin Green"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kate Siedell",
      "Bruce Nguyen"
     ],
     "a": [
      "Stacey Frank",
      "Aran Moultrop"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Justine Inton",
      "Adam Lowther"
     ],
     "a": [
      "Heather Conger",
      "Richard Ross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Fran Mccrory",
      "Peter David"
     ],
     "a": [
      "Leslie Laganella",
      "Richard Renza"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kate Siedell",
      "Olivia Schaller"
     ],
     "a": [
      "Stacey Frank",
      "Jiyun Yuh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Justine Inton",
      "Fran Mccrory"
     ],
     "a": [
      "Heather Conger",
      "Leslie Laganella"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Matthew Mintz",
      "Steve Hong"
     ],
     "a": [
      "Daniel Borgia",
      "Justin Green"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Bruce Nguyen",
      "Peter David"
     ],
     "a": [
      "Aran Moultrop",
      "Richard Ross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Kate Siedell",
      "Matthew Mintz"
     ],
     "a": [
      "Stacey Frank",
      "Daniel Borgia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Olivia Schaller",
      "Peter David"
     ],
     "a": [
      "Heather Conger",
      "Justin Green"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Laura Sweet",
      "Bruce Nguyen"
     ],
     "a": [
      "Jiyun Yuh",
      "Aran Moultrop"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Fran Mccrory",
      "Adam Lowther"
     ],
     "a": [
      "Amy Maussner",
      "Richard Renza"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Kate Siedell",
      "Olivia Schaller"
     ],
     "a": [
      "Stacey Frank",
      "Jiyun Yuh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Laura Sweet",
      "Justine Inton"
     ],
     "a": [
      "Amy Maussner",
      "Leslie Laganella"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Matthew Mintz",
      "Bruce Nguyen"
     ],
     "a": [
      "Daniel Borgia",
      "Aran Moultrop"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Steve Hong",
      "Adam Lowther"
     ],
     "a": [
      "Richard Renza",
      "Richard Ross"
     ]
    }
   ],
   "subs": [
    "Olivia Schaller",
    "Heather Conger"
   ]
  },
  {
   "result": "home",
   "week": 6,
   "home": "Kitchen Nightmare",
   "away": "Pickleball Bandits",
   "time": "2026-07-30T19:00:00",
   "complete": true,
   "homePoints": 635,
   "awayPoints": 598,
   "homeGW": 20,
   "awayGW": 12,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Allison Cavicchio",
      "Shayne Clowar"
     ],
     "a": [
      "Taylor Johns",
      "Daniel Hadley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Arpita Vaidya",
      "Jim Kochanski"
     ],
     "a": [
      "Danielle Kane",
      "Alex Kustas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Patty Andrzejewski",
      "Neale Smith"
     ],
     "a": [
      "Alexandria Mlkvy",
      "Benji Berry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Pallavi Deshpande",
      "Jj Pospiech"
     ],
     "a": [
      "Lisa Pinder",
      "Mike Fu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Allison Cavicchio",
      "Bianca Previdi"
     ],
     "a": [
      "Danielle Kane",
      "Alexandria Mlkvy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Arpita Vaidya",
      "Pallavi Deshpande"
     ],
     "a": [
      "Taylor Johns",
      "Jacquie Verish"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Shayne Clowar",
      "Jim Kochanski"
     ],
     "a": [
      "Alex Kustas",
      "Daniel Hadley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jj Pospiech",
      "Franky Coriano"
     ],
     "a": [
      "Benji Berry",
      "Steven Pinto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Arpita Vaidya",
      "Shayne Clowar"
     ],
     "a": [
      "Danielle Kane",
      "Daniel Hadley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Allison Cavicchio",
      "Jim Kochanski"
     ],
     "a": [
      "Taylor Johns",
      "Alex Kustas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Bianca Previdi",
      "Neale Smith"
     ],
     "a": [
      "Jacquie Verish",
      "Steven Pinto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 27,
     "as": 29,
     "h": [
      "Patty Andrzejewski",
      "Franky Coriano"
     ],
     "a": [
      "Lisa Pinder",
      "Mike Fu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Arpita Vaidya",
      "Patty Andrzejewski"
     ],
     "a": [
      "Alexandria Mlkvy",
      "Lisa Pinder"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Bianca Previdi",
      "Pallavi Deshpande"
     ],
     "a": [
      "Taylor Johns",
      "Jacquie Verish"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Shayne Clowar",
      "Neale Smith"
     ],
     "a": [
      "Alex Kustas",
      "Benji Berry"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jj Pospiech",
      "Franky Coriano"
     ],
     "a": [
      "Steven Pinto",
      "Mike Fu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Bianca Previdi",
      "Neale Smith"
     ],
     "a": [
      "Jacquie Verish",
      "Benji Berry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Allison Cavicchio",
      "Jim Kochanski"
     ],
     "a": [
      "Danielle Kane",
      "Daniel Hadley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Patty Andrzejewski",
      "Franky Coriano"
     ],
     "a": [
      "Alexandria Mlkvy",
      "Mike Fu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Pallavi Deshpande",
      "Jj Pospiech"
     ],
     "a": [
      "Lisa Pinder",
      "Steven Pinto"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Allison Cavicchio",
      "Arpita Vaidya"
     ],
     "a": [
      "Danielle Kane",
      "Taylor Johns"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Patty Andrzejewski",
      "Pallavi Deshpande"
     ],
     "a": [
      "Alexandria Mlkvy",
      "Lisa Pinder"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Shayne Clowar",
      "Neale Smith"
     ],
     "a": [
      "Alex Kustas",
      "Benji Berry"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Jim Kochanski",
      "Jj Pospiech"
     ],
     "a": [
      "Daniel Hadley",
      "Mike Fu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Allison Cavicchio",
      "Shayne Clowar"
     ],
     "a": [
      "Danielle Kane",
      "Alex Kustas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Arpita Vaidya",
      "Jj Pospiech"
     ],
     "a": [
      "Alexandria Mlkvy",
      "Benji Berry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Bianca Previdi",
      "Jim Kochanski"
     ],
     "a": [
      "Taylor Johns",
      "Daniel Hadley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Pallavi Deshpande",
      "Franky Coriano"
     ],
     "a": [
      "Jacquie Verish",
      "Steven Pinto"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Allison Cavicchio",
      "Arpita Vaidya"
     ],
     "a": [
      "Danielle Kane",
      "Taylor Johns"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Bianca Previdi",
      "Patty Andrzejewski"
     ],
     "a": [
      "Jacquie Verish",
      "Lisa Pinder"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Shayne Clowar",
      "Jim Kochanski"
     ],
     "a": [
      "Alex Kustas",
      "Daniel Hadley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Neale Smith",
      "Franky Coriano"
     ],
     "a": [
      "Steven Pinto",
      "Mike Fu"
     ]
    }
   ],
   "subs": [
    "Taylor Johns",
    "Arpita Vaidya"
   ]
  },
  {
   "result": "home",
   "week": 7,
   "home": "Summer Smasher",
   "away": "Kitchen Nightmare",
   "time": "2026-08-06T19:00:00",
   "complete": true,
   "homePoints": 673,
   "awayPoints": 501,
   "homeGW": 28,
   "awayGW": 4,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Mary Shaila Mendoza",
      "Matthew Mintz"
     ],
     "a": [
      "Allison Cavicchio",
      "Shayne Clowar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Laura Sweet",
      "Bruce Nguyen"
     ],
     "a": [
      "Patty Andrzejewski",
      "Neale Smith"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Justine Inton",
      "Steve Hong"
     ],
     "a": [
      "Arpita Vaidya",
      "Jacob Alpert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kendra Johnson",
      "Jimmy Shapiro"
     ],
     "a": [
      "Pallavi Deshpande",
      "Matthew Inzerillo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Mary Shaila Mendoza",
      "Laura Sweet"
     ],
     "a": [
      "Allison Cavicchio",
      "Arpita Vaidya"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kendra Johnson",
      "Justine Inton"
     ],
     "a": [
      "Patty Andrzejewski",
      "Pallavi Deshpande"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Matthew Mintz",
      "Bruce Nguyen"
     ],
     "a": [
      "Shayne Clowar",
      "Neale Smith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Steve Hong",
      "Xin Liu"
     ],
     "a": [
      "Matthew Inzerillo",
      "Franky Coriano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Mary Shaila Mendoza",
      "Matthew Mintz"
     ],
     "a": [
      "Arpita Vaidya",
      "Shayne Clowar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Laura Sweet",
      "Bruce Nguyen"
     ],
     "a": [
      "Allison Cavicchio",
      "Neale Smith"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Justine Inton",
      "Jimmy Shapiro"
     ],
     "a": [
      "Patty Andrzejewski",
      "Franky Coriano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kendra Johnson",
      "Xin Liu"
     ],
     "a": [
      "Pallavi Deshpande",
      "Jacob Alpert"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Mary Shaila Mendoza",
      "Kendra Johnson"
     ],
     "a": [
      "Arpita Vaidya",
      "Pallavi Deshpande"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Laura Sweet",
      "Justine Inton"
     ],
     "a": [
      "Allison Cavicchio",
      "Patty Andrzejewski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Bruce Nguyen",
      "Steve Hong"
     ],
     "a": [
      "Neale Smith",
      "Jacob Alpert"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Jimmy Shapiro",
      "Xin Liu"
     ],
     "a": [
      "Matthew Inzerillo",
      "Franky Coriano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kendra Johnson",
      "Matthew Mintz"
     ],
     "a": [
      "Arpita Vaidya",
      "Shayne Clowar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Mary Shaila Mendoza",
      "Steve Hong"
     ],
     "a": [
      "Allison Cavicchio",
      "Jacob Alpert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Laura Sweet",
      "Xin Liu"
     ],
     "a": [
      "Patty Andrzejewski",
      "Matthew Inzerillo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Justine Inton",
      "Jimmy Shapiro"
     ],
     "a": [
      "Pallavi Deshpande",
      "Franky Coriano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Mary Shaila Mendoza",
      "Laura Sweet"
     ],
     "a": [
      "Allison Cavicchio",
      "Arpita Vaidya"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kendra Johnson",
      "Justine Inton"
     ],
     "a": [
      "Patty Andrzejewski",
      "Pallavi Deshpande"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Matthew Mintz",
      "Steve Hong"
     ],
     "a": [
      "Neale Smith",
      "Matthew Inzerillo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Bruce Nguyen",
      "Jimmy Shapiro"
     ],
     "a": [
      "Shayne Clowar",
      "Jacob Alpert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Laura Sweet",
      "Matthew Mintz"
     ],
     "a": [
      "Allison Cavicchio",
      "Neale Smith"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Mary Shaila Mendoza",
      "Bruce Nguyen"
     ],
     "a": [
      "Patty Andrzejewski",
      "Shayne Clowar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Kendra Johnson",
      "Xin Liu"
     ],
     "a": [
      "Arpita Vaidya",
      "Franky Coriano"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Justine Inton",
      "Steve Hong"
     ],
     "a": [
      "Pallavi Deshpande",
      "Matthew Inzerillo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Mary Shaila Mendoza",
      "Kendra Johnson"
     ],
     "a": [
      "Allison Cavicchio",
      "Patty Andrzejewski"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Laura Sweet",
      "Justine Inton"
     ],
     "a": [
      "Arpita Vaidya",
      "Pallavi Deshpande"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Matthew Mintz",
      "Bruce Nguyen"
     ],
     "a": [
      "Shayne Clowar",
      "Neale Smith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Jimmy Shapiro",
      "Xin Liu"
     ],
     "a": [
      "Jacob Alpert",
      "Franky Coriano"
     ]
    }
   ],
   "subs": [
    "Arpita Vaidya",
    "Kendra Johnson"
   ]
  },
  {
   "result": "home",
   "week": 7,
   "home": "Pickleball Bandits",
   "away": "Summer Heat",
   "time": "2026-08-06T19:00:00",
   "complete": true,
   "homePoints": 593,
   "awayPoints": 587,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Alexandria Mlkvy",
      "Steven Pinto"
     ],
     "a": [
      "Jiyun Yuh",
      "Daniel Borgia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Kaleigh Hadley",
      "Alex Kustas"
     ],
     "a": [
      "Stacey Frank",
      "Daniel Dechristopher"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jacquie Verish",
      "Chris Machuzak"
     ],
     "a": [
      "Amy Maussner",
      "Yongzhe Tian"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Brittany Jacobs",
      "Jonathan Carter"
     ],
     "a": [
      "Leslie Laganella",
      "Will Lockard"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Alexandria Mlkvy",
      "Martina Tejeda"
     ],
     "a": [
      "Stacey Frank",
      "Amy Maussner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kaleigh Hadley",
      "Brittany Jacobs"
     ],
     "a": [
      "Jiyun Yuh",
      "Lorelei Mcglade"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Steven Pinto",
      "Alex Kustas"
     ],
     "a": [
      "Daniel Dechristopher",
      "Daniel Borgia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jonathan Carter",
      "Mike Fu"
     ],
     "a": [
      "Yongzhe Tian",
      "Richard Ross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Kaleigh Hadley",
      "Steven Pinto"
     ],
     "a": [
      "Stacey Frank",
      "Daniel Borgia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Alexandria Mlkvy",
      "Alex Kustas"
     ],
     "a": [
      "Jiyun Yuh",
      "Daniel Dechristopher"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Martina Tejeda",
      "Chris Machuzak"
     ],
     "a": [
      "Lorelei Mcglade",
      "Richard Ross"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jacquie Verish",
      "Mike Fu"
     ],
     "a": [
      "Leslie Laganella",
      "Will Lockard"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Kaleigh Hadley",
      "Jacquie Verish"
     ],
     "a": [
      "Amy Maussner",
      "Leslie Laganella"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Martina Tejeda",
      "Brittany Jacobs"
     ],
     "a": [
      "Jiyun Yuh",
      "Lorelei Mcglade"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Steven Pinto",
      "Chris Machuzak"
     ],
     "a": [
      "Daniel Dechristopher",
      "Yongzhe Tian"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jonathan Carter",
      "Mike Fu"
     ],
     "a": [
      "Richard Ross",
      "Will Lockard"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Martina Tejeda",
      "Chris Machuzak"
     ],
     "a": [
      "Lorelei Mcglade",
      "Yongzhe Tian"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Alexandria Mlkvy",
      "Alex Kustas"
     ],
     "a": [
      "Stacey Frank",
      "Daniel Borgia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Jacquie Verish",
      "Mike Fu"
     ],
     "a": [
      "Amy Maussner",
      "Will Lockard"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Brittany Jacobs",
      "Jonathan Carter"
     ],
     "a": [
      "Leslie Laganella",
      "Richard Ross"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Alexandria Mlkvy",
      "Kaleigh Hadley"
     ],
     "a": [
      "Stacey Frank",
      "Lorelei Mcglade"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jacquie Verish",
      "Brittany Jacobs"
     ],
     "a": [
      "Amy Maussner",
      "Leslie Laganella"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Steven Pinto",
      "Chris Machuzak"
     ],
     "a": [
      "Daniel Dechristopher",
      "Yongzhe Tian"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Alex Kustas",
      "Jonathan Carter"
     ],
     "a": [
      "Daniel Borgia",
      "Will Lockard"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Alexandria Mlkvy",
      "Steven Pinto"
     ],
     "a": [
      "Stacey Frank",
      "Daniel Dechristopher"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Kaleigh Hadley",
      "Jonathan Carter"
     ],
     "a": [
      "Amy Maussner",
      "Yongzhe Tian"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Martina Tejeda",
      "Alex Kustas"
     ],
     "a": [
      "Jiyun Yuh",
      "Daniel Borgia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Brittany Jacobs",
      "Mike Fu"
     ],
     "a": [
      "Lorelei Mcglade",
      "Richard Ross"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Alexandria Mlkvy",
      "Kaleigh Hadley"
     ],
     "a": [
      "Stacey Frank",
      "Jiyun Yuh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Martina Tejeda",
      "Jacquie Verish"
     ],
     "a": [
      "Lorelei Mcglade",
      "Leslie Laganella"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Steven Pinto",
      "Alex Kustas"
     ],
     "a": [
      "Daniel Dechristopher",
      "Daniel Borgia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Chris Machuzak",
      "Mike Fu"
     ],
     "a": [
      "Richard Ross",
      "Will Lockard"
     ]
    }
   ],
   "subs": [
    "Martina Tejeda",
    "Chris Machuzak"
   ]
  },
  {
   "result": "home",
   "week": 8,
   "home": "Kitchen Nightmare",
   "away": "Summer Heat",
   "time": "2026-08-13T19:00:00",
   "complete": true,
   "homePoints": 642,
   "awayPoints": 594,
   "homeGW": 20,
   "awayGW": 12,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Allison Cavicchio",
      "Shayne Clowar"
     ],
     "a": [
      "Laura Bruno",
      "Daniel Borgia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Bianca Previdi",
      "Neale Smith"
     ],
     "a": [
      "Jiyun Yuh",
      "Daniel Dechristopher"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Patty Andrzejewski",
      "Jacob Alpert"
     ],
     "a": [
      "Amy Maussner",
      "Justin Green"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Pallavi Deshpande",
      "Joseph Jaworski"
     ],
     "a": [
      "Lorelei Mcglade",
      "Will Lockard"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Allison Cavicchio",
      "Arpita Vaidya"
     ],
     "a": [
      "Jiyun Yuh",
      "Amy Maussner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Bianca Previdi",
      "Pallavi Deshpande"
     ],
     "a": [
      "Laura Bruno",
      "Leslie Laganella"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Shayne Clowar",
      "Neale Smith"
     ],
     "a": [
      "Daniel Dechristopher",
      "Daniel Borgia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Joseph Jaworski",
      "Franky Coriano"
     ],
     "a": [
      "Justin Green",
      "Richard Renza"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Bianca Previdi",
      "Shayne Clowar"
     ],
     "a": [
      "Jiyun Yuh",
      "Daniel Borgia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Allison Cavicchio",
      "Neale Smith"
     ],
     "a": [
      "Laura Bruno",
      "Daniel Dechristopher"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Arpita Vaidya",
      "Jacob Alpert"
     ],
     "a": [
      "Leslie Laganella",
      "Richard Renza"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Patty Andrzejewski",
      "Franky Coriano"
     ],
     "a": [
      "Lorelei Mcglade",
      "Will Lockard"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Bianca Previdi",
      "Patty Andrzejewski"
     ],
     "a": [
      "Amy Maussner",
      "Lorelei Mcglade"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 27,
     "as": 15,
     "h": [
      "Arpita Vaidya",
      "Pallavi Deshpande"
     ],
     "a": [
      "Laura Bruno",
      "Leslie Laganella"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Shayne Clowar",
      "Jacob Alpert"
     ],
     "a": [
      "Daniel Dechristopher",
      "Justin Green"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Joseph Jaworski",
      "Franky Coriano"
     ],
     "a": [
      "Richard Renza",
      "Will Lockard"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Arpita Vaidya",
      "Jacob Alpert"
     ],
     "a": [
      "Leslie Laganella",
      "Justin Green"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Allison Cavicchio",
      "Neale Smith"
     ],
     "a": [
      "Jiyun Yuh",
      "Daniel Borgia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Patty Andrzejewski",
      "Franky Coriano"
     ],
     "a": [
      "Amy Maussner",
      "Will Lockard"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Pallavi Deshpande",
      "Joseph Jaworski"
     ],
     "a": [
      "Lorelei Mcglade",
      "Richard Renza"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Allison Cavicchio",
      "Bianca Previdi"
     ],
     "a": [
      "Jiyun Yuh",
      "Laura Bruno"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Patty Andrzejewski",
      "Pallavi Deshpande"
     ],
     "a": [
      "Amy Maussner",
      "Lorelei Mcglade"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Shayne Clowar",
      "Jacob Alpert"
     ],
     "a": [
      "Daniel Dechristopher",
      "Justin Green"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Neale Smith",
      "Joseph Jaworski"
     ],
     "a": [
      "Daniel Borgia",
      "Will Lockard"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Allison Cavicchio",
      "Shayne Clowar"
     ],
     "a": [
      "Jiyun Yuh",
      "Daniel Dechristopher"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Bianca Previdi",
      "Joseph Jaworski"
     ],
     "a": [
      "Amy Maussner",
      "Justin Green"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Arpita Vaidya",
      "Neale Smith"
     ],
     "a": [
      "Laura Bruno",
      "Daniel Borgia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Pallavi Deshpande",
      "Franky Coriano"
     ],
     "a": [
      "Leslie Laganella",
      "Richard Renza"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Allison Cavicchio",
      "Bianca Previdi"
     ],
     "a": [
      "Jiyun Yuh",
      "Laura Bruno"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Arpita Vaidya",
      "Patty Andrzejewski"
     ],
     "a": [
      "Leslie Laganella",
      "Lorelei Mcglade"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Shayne Clowar",
      "Neale Smith"
     ],
     "a": [
      "Daniel Dechristopher",
      "Daniel Borgia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jacob Alpert",
      "Franky Coriano"
     ],
     "a": [
      "Richard Renza",
      "Will Lockard"
     ]
    }
   ],
   "subs": [
    "Arpita Vaidya",
    "Laura Bruno"
   ]
  },
  {
   "result": "home",
   "week": 8,
   "home": "Summer Smasher",
   "away": "Pickleball Bandits",
   "time": "2026-08-13T19:00:00",
   "complete": true,
   "homePoints": 629,
   "awayPoints": 529,
   "homeGW": 21,
   "awayGW": 11,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kate Siedell",
      "Bruce Nguyen"
     ],
     "a": [
      "Taylor Johns",
      "Alex Kustas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Mary Shaila Mendoza",
      "Peter David"
     ],
     "a": [
      "Kaleigh Hadley",
      "Steven Pinto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Justine Inton",
      "Steve Hong"
     ],
     "a": [
      "Jacquie Verish",
      "Benji Berry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Fran Mccrory",
      "Xin Liu"
     ],
     "a": [
      "Brittany Jacobs",
      "Mike Fu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kate Siedell",
      "Laura Sweet"
     ],
     "a": [
      "Kaleigh Hadley",
      "Jacquie Verish"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Mary Shaila Mendoza",
      "Fran Mccrory"
     ],
     "a": [
      "Taylor Johns",
      "Lisa Pinder"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Bruce Nguyen",
      "Peter David"
     ],
     "a": [
      "Steven Pinto",
      "Alex Kustas"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Xin Liu",
      "Yuri Paritsky"
     ],
     "a": [
      "Benji Berry",
      "Jonathan Carter"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Mary Shaila Mendoza",
      "Bruce Nguyen"
     ],
     "a": [
      "Kaleigh Hadley",
      "Alex Kustas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kate Siedell",
      "Peter David"
     ],
     "a": [
      "Taylor Johns",
      "Steven Pinto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Laura Sweet",
      "Steve Hong"
     ],
     "a": [
      "Lisa Pinder",
      "Jonathan Carter"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Justine Inton",
      "Yuri Paritsky"
     ],
     "a": [
      "Brittany Jacobs",
      "Mike Fu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Mary Shaila Mendoza",
      "Justine Inton"
     ],
     "a": [
      "Jacquie Verish",
      "Brittany Jacobs"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Laura Sweet",
      "Fran Mccrory"
     ],
     "a": [
      "Taylor Johns",
      "Lisa Pinder"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Bruce Nguyen",
      "Steve Hong"
     ],
     "a": [
      "Steven Pinto",
      "Benji Berry"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Xin Liu",
      "Yuri Paritsky"
     ],
     "a": [
      "Jonathan Carter",
      "Mike Fu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Laura Sweet",
      "Steve Hong"
     ],
     "a": [
      "Lisa Pinder",
      "Benji Berry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kate Siedell",
      "Peter David"
     ],
     "a": [
      "Kaleigh Hadley",
      "Alex Kustas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Justine Inton",
      "Yuri Paritsky"
     ],
     "a": [
      "Jacquie Verish",
      "Mike Fu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Fran Mccrory",
      "Xin Liu"
     ],
     "a": [
      "Brittany Jacobs",
      "Jonathan Carter"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kate Siedell",
      "Mary Shaila Mendoza"
     ],
     "a": [
      "Kaleigh Hadley",
      "Taylor Johns"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Justine Inton",
      "Fran Mccrory"
     ],
     "a": [
      "Jacquie Verish",
      "Brittany Jacobs"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Bruce Nguyen",
      "Steve Hong"
     ],
     "a": [
      "Steven Pinto",
      "Benji Berry"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Peter David",
      "Xin Liu"
     ],
     "a": [
      "Alex Kustas",
      "Mike Fu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kate Siedell",
      "Bruce Nguyen"
     ],
     "a": [
      "Kaleigh Hadley",
      "Steven Pinto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Mary Shaila Mendoza",
      "Xin Liu"
     ],
     "a": [
      "Jacquie Verish",
      "Benji Berry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Laura Sweet",
      "Peter David"
     ],
     "a": [
      "Taylor Johns",
      "Alex Kustas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Fran Mccrory",
      "Yuri Paritsky"
     ],
     "a": [
      "Lisa Pinder",
      "Jonathan Carter"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kate Siedell",
      "Mary Shaila Mendoza"
     ],
     "a": [
      "Kaleigh Hadley",
      "Taylor Johns"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Laura Sweet",
      "Justine Inton"
     ],
     "a": [
      "Lisa Pinder",
      "Brittany Jacobs"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Bruce Nguyen",
      "Peter David"
     ],
     "a": [
      "Steven Pinto",
      "Alex Kustas"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Steve Hong",
      "Yuri Paritsky"
     ],
     "a": [
      "Jonathan Carter",
      "Mike Fu"
     ]
    }
   ],
   "subs": [
    "Taylor Johns"
   ]
  },
  {
   "result": "away",
   "week": 9,
   "home": "Pickleball Bandits",
   "away": "Kitchen Nightmare",
   "time": "2026-08-20T19:00:00",
   "complete": true,
   "homePoints": 604,
   "awayPoints": 616,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kaleigh Hadley",
      "Alex Kustas"
     ],
     "a": [
      "Arpita Vaidya",
      "Neale Smith"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Danielle Kane",
      "Steven Pinto"
     ],
     "a": [
      "Allison Cavicchio",
      "Jj Pospiech"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jacquie Verish",
      "Benji Berry"
     ],
     "a": [
      "Bianca Previdi",
      "Matthew Inzerillo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Brittany Jacobs",
      "Chris Machuzak"
     ],
     "a": [
      "Pallavi Deshpande",
      "Jacob Alpert"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Kaleigh Hadley",
      "Lisa Pinder"
     ],
     "a": [
      "Allison Cavicchio",
      "Bianca Previdi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Danielle Kane",
      "Brittany Jacobs"
     ],
     "a": [
      "Arpita Vaidya",
      "Patty Andrzejewski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Alex Kustas",
      "Steven Pinto"
     ],
     "a": [
      "Jj Pospiech",
      "Neale Smith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Chris Machuzak",
      "Jonathan Carter"
     ],
     "a": [
      "Matthew Inzerillo",
      "Joseph Jaworski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Danielle Kane",
      "Alex Kustas"
     ],
     "a": [
      "Allison Cavicchio",
      "Neale Smith"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Kaleigh Hadley",
      "Steven Pinto"
     ],
     "a": [
      "Arpita Vaidya",
      "Jj Pospiech"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Lisa Pinder",
      "Benji Berry"
     ],
     "a": [
      "Patty Andrzejewski",
      "Joseph Jaworski"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jacquie Verish",
      "Jonathan Carter"
     ],
     "a": [
      "Pallavi Deshpande",
      "Jacob Alpert"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Danielle Kane",
      "Jacquie Verish"
     ],
     "a": [
      "Bianca Previdi",
      "Pallavi Deshpande"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Lisa Pinder",
      "Brittany Jacobs"
     ],
     "a": [
      "Arpita Vaidya",
      "Patty Andrzejewski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Alex Kustas",
      "Benji Berry"
     ],
     "a": [
      "Jj Pospiech",
      "Matthew Inzerillo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Chris Machuzak",
      "Jonathan Carter"
     ],
     "a": [
      "Joseph Jaworski",
      "Jacob Alpert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lisa Pinder",
      "Benji Berry"
     ],
     "a": [
      "Patty Andrzejewski",
      "Matthew Inzerillo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kaleigh Hadley",
      "Steven Pinto"
     ],
     "a": [
      "Allison Cavicchio",
      "Neale Smith"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jacquie Verish",
      "Jonathan Carter"
     ],
     "a": [
      "Bianca Previdi",
      "Jacob Alpert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Brittany Jacobs",
      "Chris Machuzak"
     ],
     "a": [
      "Pallavi Deshpande",
      "Joseph Jaworski"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kaleigh Hadley",
      "Danielle Kane"
     ],
     "a": [
      "Allison Cavicchio",
      "Arpita Vaidya"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jacquie Verish",
      "Brittany Jacobs"
     ],
     "a": [
      "Bianca Previdi",
      "Pallavi Deshpande"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Alex Kustas",
      "Benji Berry"
     ],
     "a": [
      "Jj Pospiech",
      "Matthew Inzerillo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Steven Pinto",
      "Chris Machuzak"
     ],
     "a": [
      "Neale Smith",
      "Jacob Alpert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Kaleigh Hadley",
      "Alex Kustas"
     ],
     "a": [
      "Allison Cavicchio",
      "Jj Pospiech"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Danielle Kane",
      "Chris Machuzak"
     ],
     "a": [
      "Bianca Previdi",
      "Matthew Inzerillo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Lisa Pinder",
      "Steven Pinto"
     ],
     "a": [
      "Arpita Vaidya",
      "Neale Smith"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Brittany Jacobs",
      "Jonathan Carter"
     ],
     "a": [
      "Patty Andrzejewski",
      "Joseph Jaworski"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kaleigh Hadley",
      "Danielle Kane"
     ],
     "a": [
      "Allison Cavicchio",
      "Arpita Vaidya"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Lisa Pinder",
      "Jacquie Verish"
     ],
     "a": [
      "Patty Andrzejewski",
      "Pallavi Deshpande"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Alex Kustas",
      "Steven Pinto"
     ],
     "a": [
      "Jj Pospiech",
      "Neale Smith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Benji Berry",
      "Jonathan Carter"
     ],
     "a": [
      "Joseph Jaworski",
      "Jacob Alpert"
     ]
    }
   ],
   "subs": [
    "Chris Machuzak",
    "Arpita Vaidya"
   ]
  },
  {
   "result": "away",
   "week": 9,
   "home": "Summer Heat",
   "away": "Summer Smasher",
   "time": "2026-08-20T19:00:00",
   "complete": true,
   "homePoints": 591,
   "awayPoints": 653,
   "homeGW": 9,
   "awayGW": 23,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Stacey Frank",
      "Daniel Borgia"
     ],
     "a": [
      "Laura Sweet",
      "Peter David"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jiyun Yuh",
      "Justin Green"
     ],
     "a": [
      "Kate Siedell",
      "Matthew Mintz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Linda Zarrilli",
      "Mario Contreras"
     ],
     "a": [
      "Mary Shaila Mendoza",
      "Jimmy Shapiro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Leslie Laganella",
      "Richard Renza"
     ],
     "a": [
      "Fran Mccrory",
      "Yuri Paritsky"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Stacey Frank",
      "Amy Maussner"
     ],
     "a": [
      "Kate Siedell",
      "Mary Shaila Mendoza"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jiyun Yuh",
      "Leslie Laganella"
     ],
     "a": [
      "Laura Sweet",
      "Victoria Rolon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Daniel Borgia",
      "Justin Green"
     ],
     "a": [
      "Matthew Mintz",
      "Peter David"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Richard Renza",
      "Will Lockard"
     ],
     "a": [
      "Jimmy Shapiro",
      "Adam Lowther"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jiyun Yuh",
      "Daniel Borgia"
     ],
     "a": [
      "Kate Siedell",
      "Peter David"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Stacey Frank",
      "Justin Green"
     ],
     "a": [
      "Laura Sweet",
      "Matthew Mintz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 28,
     "h": [
      "Amy Maussner",
      "Mario Contreras"
     ],
     "a": [
      "Victoria Rolon",
      "Adam Lowther"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Linda Zarrilli",
      "Will Lockard"
     ],
     "a": [
      "Fran Mccrory",
      "Yuri Paritsky"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jiyun Yuh",
      "Linda Zarrilli"
     ],
     "a": [
      "Mary Shaila Mendoza",
      "Fran Mccrory"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Amy Maussner",
      "Leslie Laganella"
     ],
     "a": [
      "Laura Sweet",
      "Victoria Rolon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Daniel Borgia",
      "Mario Contreras"
     ],
     "a": [
      "Matthew Mintz",
      "Jimmy Shapiro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Richard Renza",
      "Will Lockard"
     ],
     "a": [
      "Adam Lowther",
      "Yuri Paritsky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Amy Maussner",
      "Mario Contreras"
     ],
     "a": [
      "Victoria Rolon",
      "Jimmy Shapiro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Stacey Frank",
      "Justin Green"
     ],
     "a": [
      "Kate Siedell",
      "Peter David"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Linda Zarrilli",
      "Will Lockard"
     ],
     "a": [
      "Mary Shaila Mendoza",
      "Yuri Paritsky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Leslie Laganella",
      "Richard Renza"
     ],
     "a": [
      "Fran Mccrory",
      "Adam Lowther"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 23,
     "h": [
      "Stacey Frank",
      "Jiyun Yuh"
     ],
     "a": [
      "Kate Siedell",
      "Laura Sweet"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Linda Zarrilli",
      "Leslie Laganella"
     ],
     "a": [
      "Mary Shaila Mendoza",
      "Fran Mccrory"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Daniel Borgia",
      "Mario Contreras"
     ],
     "a": [
      "Matthew Mintz",
      "Jimmy Shapiro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Justin Green",
      "Richard Renza"
     ],
     "a": [
      "Peter David",
      "Yuri Paritsky"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Stacey Frank",
      "Daniel Borgia"
     ],
     "a": [
      "Kate Siedell",
      "Matthew Mintz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jiyun Yuh",
      "Richard Renza"
     ],
     "a": [
      "Mary Shaila Mendoza",
      "Jimmy Shapiro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Amy Maussner",
      "Justin Green"
     ],
     "a": [
      "Laura Sweet",
      "Peter David"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Leslie Laganella",
      "Will Lockard"
     ],
     "a": [
      "Victoria Rolon",
      "Adam Lowther"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Stacey Frank",
      "Jiyun Yuh"
     ],
     "a": [
      "Kate Siedell",
      "Laura Sweet"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Amy Maussner",
      "Linda Zarrilli"
     ],
     "a": [
      "Victoria Rolon",
      "Fran Mccrory"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Daniel Borgia",
      "Justin Green"
     ],
     "a": [
      "Matthew Mintz",
      "Peter David"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Mario Contreras",
      "Will Lockard"
     ],
     "a": [
      "Adam Lowther",
      "Yuri Paritsky"
     ]
    }
   ],
   "subs": [
    "Victoria Rolon",
    "Linda Zarrilli"
   ]
  }
 ],
 "playoffs": [],
 "extraPlayerIds": {
  "Oanh Quach": "b4ac779e-91e0-46f1-a4c7-92e1068db57a"
 },
 "meta": {
  "matchesPlayed": 18,
  "weeks": "1-9",
  "totalPlayers": 75,
  "ratingHistoryWeeks": [
   1,
   2,
   3,
   4,
   5,
   6,
   7,
   8,
   9
  ],
  "divisionSlug": "d4ef2f74",
  "hasPlayoffs": false,
  "typicalDay": "Thursdays",
  "detailFile": "detail-d4ef2f74.js",
  "clubName": "Ace - Moorestown / Voorhees",
  "divisionName": "3.75 & Over",
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
  window.CPL_DATASETS["d4ef2f74"] = DATA;
})();
