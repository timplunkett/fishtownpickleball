(function () {
  const DATA = {
 "players": [
  {
   "name": "Bharti Smith",
   "gender": "Female",
   "team": "The Big Dill",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 14,
   "losses": 0,
   "pointsWon": 294,
   "totalPointsAgainst": 171,
   "mixedWins": 7,
   "mixedLosses": 0,
   "genderWins": 7,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 0,
   "playerId": "effe3904-742b-4ebe-a8d6-8f7339e0cbf0",
   "winPct": 100,
   "diff": 123,
   "ppg": 21,
   "leagueRank": 1,
   "rating": 4.3,
   "ratingGames": 14,
   "confidence": 72,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": -0.9
  },
  {
   "name": "Jacqueline Tirona",
   "gender": "Female",
   "team": "The Big Dill",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 69,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "043e2d6d-92af-4a9a-aac7-3f68ab990b5f",
   "winPct": 100,
   "diff": 57,
   "ppg": 21,
   "leagueRank": 7,
   "rating": 3.5,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": 2.3,
   "strengthOfOpponents": -0.7
  },
  {
   "name": "Mark Thompson",
   "gender": "Male",
   "team": "Deadly Dinks",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 8,
   "losses": 0,
   "pointsWon": 168,
   "totalPointsAgainst": 116,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "cc3ce699-e807-42f7-8a10-12a2a7d54df8",
   "winPct": 100,
   "diff": 52,
   "ppg": 21,
   "leagueRank": 6,
   "rating": 1.5,
   "ratingGames": 8,
   "confidence": 61,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -2.1
  },
  {
   "name": "Joe Carpenter",
   "gender": "Male",
   "team": "The Big Dill",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 166,
   "totalPointsAgainst": 106,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "ee0550ad-ecfd-49d3-b412-923a74cc37ab",
   "winPct": 87.5,
   "diff": 60,
   "ppg": 20.8,
   "leagueRank": 13,
   "rating": 1.9,
   "ratingGames": 8,
   "confidence": 60,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -2.2
  },
  {
   "name": "Leslie Bartnik",
   "gender": "Female",
   "team": "The Big Dill",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 165,
   "totalPointsAgainst": 121,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "1a00c024-28f7-4600-8210-fb9947adddb5",
   "winPct": 87.5,
   "diff": 44,
   "ppg": 20.6,
   "leagueRank": 15,
   "rating": 1.9,
   "ratingGames": 8,
   "confidence": 61,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -1.2
  },
  {
   "name": "Mary Carlson",
   "gender": "Female",
   "team": "The Big Dill",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 161,
   "totalPointsAgainst": 128,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 0,
   "playerId": "4f6a0f00-ee87-4977-897c-f97c30251b80",
   "winPct": 87.5,
   "diff": 33,
   "ppg": 20.1,
   "leagueRank": 17,
   "rating": 1.6,
   "ratingGames": 8,
   "confidence": 61,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -1
  },
  {
   "name": "Mica Gray",
   "gender": "Female",
   "team": "The Big Dill",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 162,
   "totalPointsAgainst": 132,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 87.5,
   "diff": 30,
   "ppg": 20.3,
   "leagueRank": 20,
   "rating": 0.3,
   "ratingGames": 8,
   "confidence": 60,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": -2.5,
   "playerId": "e11c8ee0-41d6-4ea6-8b34-562d319856c2"
  },
  {
   "name": "Colette Johnson",
   "gender": "Female",
   "team": "The Big Dill",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 124,
   "totalPointsAgainst": 83,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "26e08c48-5ce9-413f-a09e-11ecab47d2ab",
   "winPct": 83.3,
   "diff": 41,
   "ppg": 20.7,
   "leagueRank": 19,
   "rating": 2.9,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": -0.2
  },
  {
   "name": "Bryan Askins",
   "gender": "Male",
   "team": "Bash and Crash",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 45,
   "wins": 36,
   "losses": 9,
   "pointsWon": 907,
   "totalPointsAgainst": 768,
   "mixedWins": 17,
   "mixedLosses": 5,
   "genderWins": 19,
   "genderLosses": 4,
   "clutchWins": 14,
   "clutchLosses": 4,
   "winPct": 80,
   "diff": 139,
   "ppg": 20.2,
   "leagueRank": 2,
   "rating": 4.3,
   "ratingGames": 45,
   "confidence": 86,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.7,
   "playerId": "462b6d53-75d1-4ff9-a438-58d6eaa4b17a"
  },
  {
   "name": "Joey Penvari",
   "gender": "Male",
   "team": "The Big Dill",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 12,
   "losses": 3,
   "pointsWon": 306,
   "totalPointsAgainst": 238,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 6,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 80,
   "diff": 68,
   "ppg": 20.4,
   "leagueRank": 3,
   "rating": 3.4,
   "ratingGames": 15,
   "confidence": 73,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.3,
   "playerId": "4f61d748-5c1b-4dc0-96ec-afa84133deba"
  },
  {
   "name": "Denise Vance Noelle",
   "gender": "Female",
   "team": "The Big Dill",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 6,
   "losses": 2,
   "pointsWon": 153,
   "totalPointsAgainst": 124,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "09668b95-28f0-4f07-9630-24049f4e83cd",
   "winPct": 75,
   "diff": 29,
   "ppg": 19.1,
   "leagueRank": 35,
   "rating": -0.5,
   "ratingGames": 8,
   "confidence": 60,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": -1.5
  },
  {
   "name": "Joanne Gryski",
   "gender": "Female",
   "team": "The Big Dill",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 6,
   "losses": 2,
   "pointsWon": 160,
   "totalPointsAgainst": 145,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "6aef5673-a7b7-48ae-96d4-7f8b3522a0c2",
   "winPct": 75,
   "diff": 15,
   "ppg": 20,
   "leagueRank": 30,
   "rating": 1.1,
   "ratingGames": 8,
   "confidence": 62,
   "strengthOfPartners": -1,
   "strengthOfOpponents": -0.6
  },
  {
   "name": "Min Cho",
   "gender": "Female",
   "team": "The Big Dill",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 6,
   "losses": 2,
   "pointsWon": 152,
   "totalPointsAgainst": 139,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "ee49b339-395a-48ef-8f30-64082513578f",
   "winPct": 75,
   "diff": 13,
   "ppg": 19,
   "leagueRank": 36,
   "rating": 1.4,
   "ratingGames": 8,
   "confidence": 62,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": -0.1
  },
  {
   "name": "Gregory Scheyer",
   "gender": "Male",
   "team": "The Big Dill",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 6,
   "losses": 2,
   "pointsWon": 148,
   "totalPointsAgainst": 135,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "8bd4a2ac-711a-412f-a8a7-89543cfadd79",
   "winPct": 75,
   "diff": 13,
   "ppg": 18.5,
   "leagueRank": 41,
   "rating": -0.7,
   "ratingGames": 8,
   "confidence": 60,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -1
  },
  {
   "name": "Hossam Hablas",
   "gender": "Male",
   "team": "Deadly Dinks",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 16,
   "losses": 6,
   "pointsWon": 427,
   "totalPointsAgainst": 369,
   "mixedWins": 8,
   "mixedLosses": 3,
   "genderWins": 8,
   "genderLosses": 3,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 72.7,
   "diff": 58,
   "ppg": 19.4,
   "leagueRank": 5,
   "rating": 2,
   "ratingGames": 22,
   "confidence": 79,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.1,
   "playerId": "9c3be52c-f139-4b47-bbd6-4a8b3da0aaca"
  },
  {
   "name": "Scott Fujiwara",
   "gender": "Male",
   "team": "Deadly Dinks",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 21,
   "losses": 9,
   "pointsWon": 572,
   "totalPointsAgainst": 500,
   "mixedWins": 11,
   "mixedLosses": 4,
   "genderWins": 10,
   "genderLosses": 5,
   "clutchWins": 5,
   "clutchLosses": 3,
   "winPct": 70,
   "diff": 72,
   "ppg": 19.1,
   "leagueRank": 8,
   "rating": -1.1,
   "ratingGames": 30,
   "confidence": 82,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -1.9,
   "playerId": "36700a8a-e532-4781-afb5-3bed8373bd7b"
  },
  {
   "name": "John Carlson",
   "gender": "Male",
   "team": "The Big Dill",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 11,
   "losses": 5,
   "pointsWon": 311,
   "totalPointsAgainst": 241,
   "mixedWins": 7,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "5303a58b-d9ce-493a-bd41-8549172f885a",
   "winPct": 68.8,
   "diff": 70,
   "ppg": 19.4,
   "leagueRank": 4,
   "rating": 2.8,
   "ratingGames": 16,
   "confidence": 74,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.1
  },
  {
   "name": "Katrina Koons",
   "gender": "Female",
   "team": "The Big Dill",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 25,
   "losses": 14,
   "pointsWon": 754,
   "totalPointsAgainst": 694,
   "mixedWins": 8,
   "mixedLosses": 11,
   "genderWins": 17,
   "genderLosses": 3,
   "clutchWins": 10,
   "clutchLosses": 4,
   "winPct": 64.1,
   "diff": 60,
   "ppg": 19.3,
   "leagueRank": 9,
   "rating": 1.3,
   "ratingGames": 39,
   "confidence": 85,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.1,
   "playerId": "50e814d5-b84d-46ec-9448-0095b62af829"
  },
  {
   "name": "Dawn Danner",
   "gender": "Female",
   "team": "Deadly Dinks",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 155,
   "totalPointsAgainst": 140,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 2,
   "playerId": "42136761-05e5-4abc-a036-f56dbb239c5e",
   "winPct": 62.5,
   "diff": 15,
   "ppg": 19.4,
   "leagueRank": 44,
   "rating": -1.3,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -1.9
  },
  {
   "name": "Elliot Hoang",
   "gender": "Male",
   "team": "The Big Dill",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 161,
   "totalPointsAgainst": 148,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 2,
   "playerId": "5518792c-e418-45de-8aab-04cf1e876f96",
   "winPct": 62.5,
   "diff": 13,
   "ppg": 20.1,
   "leagueRank": 39,
   "rating": 1.2,
   "ratingGames": 8,
   "confidence": 60,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": 0.9
  },
  {
   "name": "Gabriela Melideo",
   "gender": "Female",
   "team": "Bash and Crash",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 152,
   "totalPointsAgainst": 142,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "7e58c9c4-3c05-4fdc-8706-157ad28655be",
   "winPct": 62.5,
   "diff": 10,
   "ppg": 19,
   "leagueRank": 45,
   "rating": 0.2,
   "ratingGames": 8,
   "confidence": 60,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.3
  },
  {
   "name": "Lee Ann Houston",
   "gender": "Female",
   "team": "Deadly Dinks",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 158,
   "totalPointsAgainst": 151,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 62.5,
   "diff": 7,
   "ppg": 19.8,
   "leagueRank": 43,
   "rating": 0.6,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.3,
   "playerId": "6e3339fa-42eb-4a09-938c-0e57589f1f1c"
  },
  {
   "name": "Seth Blackwell",
   "gender": "Male",
   "team": "The Big Dill",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 153,
   "totalPointsAgainst": 153,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 1,
   "playerId": "8b031c28-3698-4fce-870b-5a031f2f6437",
   "winPct": 62.5,
   "diff": 0,
   "ppg": 19.1,
   "leagueRank": 47,
   "rating": 1.4,
   "ratingGames": 8,
   "confidence": 60,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 1.3
  },
  {
   "name": "Anne Nagy",
   "gender": "Female",
   "team": "The Big Dill",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 24,
   "losses": 15,
   "pointsWon": 750,
   "totalPointsAgainst": 701,
   "mixedWins": 7,
   "mixedLosses": 13,
   "genderWins": 17,
   "genderLosses": 2,
   "clutchWins": 9,
   "clutchLosses": 5,
   "winPct": 61.5,
   "diff": 49,
   "ppg": 19.2,
   "leagueRank": 12,
   "rating": 1.1,
   "ratingGames": 39,
   "confidence": 85,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.4,
   "playerId": "1409e96b-d1b0-4f35-9460-c86706b36706"
  },
  {
   "name": "Bob Post",
   "gender": "Male",
   "team": "Bash and Crash",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 31,
   "wins": 19,
   "losses": 12,
   "pointsWon": 595,
   "totalPointsAgainst": 548,
   "mixedWins": 7,
   "mixedLosses": 9,
   "genderWins": 12,
   "genderLosses": 3,
   "clutchWins": 6,
   "clutchLosses": 4,
   "playerId": "cc391984-ebe1-4b10-8e1b-2e41c7fcf34e",
   "winPct": 61.3,
   "diff": 47,
   "ppg": 19.2,
   "leagueRank": 10,
   "rating": 0.9,
   "ratingGames": 31,
   "confidence": 83,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.2
  },
  {
   "name": "Tracey Lawson",
   "gender": "Female",
   "team": "The Big Dill",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 19,
   "losses": 13,
   "pointsWon": 595,
   "totalPointsAgainst": 563,
   "mixedWins": 9,
   "mixedLosses": 7,
   "genderWins": 10,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 59.4,
   "diff": 32,
   "ppg": 18.6,
   "leagueRank": 24,
   "rating": -2,
   "ratingGames": 32,
   "confidence": 83,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -1.5,
   "playerId": "9daed7c5-8f54-4d25-9fd2-05b66b27c589"
  },
  {
   "name": "Luis Rodriguez",
   "gender": "Male",
   "team": "Deadly Dinks",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 23,
   "losses": 16,
   "pointsWon": 704,
   "totalPointsAgainst": 695,
   "mixedWins": 10,
   "mixedLosses": 9,
   "genderWins": 13,
   "genderLosses": 7,
   "clutchWins": 8,
   "clutchLosses": 3,
   "winPct": 59,
   "diff": 9,
   "ppg": 18.1,
   "leagueRank": 26,
   "rating": -0.9,
   "ratingGames": 39,
   "confidence": 85,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.7,
   "playerId": "185883fe-e77a-4588-a51c-f72e9a378ddc"
  },
  {
   "name": "Krista Divenere",
   "gender": "Female",
   "team": "Deadly Dinks",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 22,
   "losses": 16,
   "pointsWon": 666,
   "totalPointsAgainst": 662,
   "mixedWins": 13,
   "mixedLosses": 6,
   "genderWins": 9,
   "genderLosses": 10,
   "clutchWins": 7,
   "clutchLosses": 4,
   "winPct": 57.9,
   "diff": 4,
   "ppg": 17.5,
   "leagueRank": 28,
   "rating": -1.5,
   "ratingGames": 38,
   "confidence": 84,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -1.1,
   "playerId": "dfcd91f7-044a-48fe-8ef3-b5dc85f1675a"
  },
  {
   "name": "Anshika Dubey",
   "gender": "Female",
   "team": "Kitchen Ninjas",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 24,
   "losses": 18,
   "pointsWon": 800,
   "totalPointsAgainst": 757,
   "mixedWins": 12,
   "mixedLosses": 8,
   "genderWins": 12,
   "genderLosses": 10,
   "clutchWins": 8,
   "clutchLosses": 5,
   "winPct": 57.1,
   "diff": 43,
   "ppg": 19,
   "leagueRank": 11,
   "rating": 1.6,
   "ratingGames": 42,
   "confidence": 86,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.3,
   "playerId": "d47013f4-fd4d-4294-8366-e6a432a13856"
  },
  {
   "name": "Damon Cerrone",
   "gender": "Male",
   "team": "Deadly Dinks",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 47,
   "wins": 26,
   "losses": 21,
   "pointsWon": 907,
   "totalPointsAgainst": 868,
   "mixedWins": 14,
   "mixedLosses": 10,
   "genderWins": 12,
   "genderLosses": 11,
   "clutchWins": 8,
   "clutchLosses": 11,
   "winPct": 55.3,
   "diff": 39,
   "ppg": 19.3,
   "leagueRank": 18,
   "rating": 2,
   "ratingGames": 47,
   "confidence": 86,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.7,
   "playerId": "9d917e85-4861-459e-91f1-9906b08d8159"
  },
  {
   "name": "Suzy Gay",
   "gender": "Female",
   "team": "Bash and Crash",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 21,
   "losses": 17,
   "pointsWon": 737,
   "totalPointsAgainst": 708,
   "mixedWins": 11,
   "mixedLosses": 8,
   "genderWins": 10,
   "genderLosses": 9,
   "clutchWins": 7,
   "clutchLosses": 8,
   "winPct": 55.3,
   "diff": 29,
   "ppg": 19.4,
   "leagueRank": 16,
   "rating": 0.7,
   "ratingGames": 38,
   "confidence": 85,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.3,
   "playerId": "a6bb5bf6-2c0d-44b2-a1f7-85b6ba25bc8a"
  },
  {
   "name": "Gary Steffer",
   "gender": "Male",
   "team": "Deadly Dinks",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 25,
   "losses": 21,
   "pointsWon": 873,
   "totalPointsAgainst": 841,
   "mixedWins": 12,
   "mixedLosses": 11,
   "genderWins": 13,
   "genderLosses": 10,
   "clutchWins": 8,
   "clutchLosses": 11,
   "winPct": 54.3,
   "diff": 32,
   "ppg": 19,
   "leagueRank": 22,
   "rating": 0.1,
   "ratingGames": 46,
   "confidence": 87,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.3,
   "playerId": "2b2f652f-11e0-4bb0-9d5d-fc8e8cb4919e"
  },
  {
   "name": "Ingrid Teasdale",
   "gender": "Female",
   "team": "Kitchen Ninjas",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 10,
   "losses": 9,
   "pointsWon": 347,
   "totalPointsAgainst": 338,
   "mixedWins": 6,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 6,
   "clutchWins": 3,
   "clutchLosses": 2,
   "playerId": "a68e22ff-587e-4b81-8045-cb0a6fafdaf0",
   "winPct": 52.6,
   "diff": 9,
   "ppg": 18.3,
   "leagueRank": 23,
   "rating": 0.4,
   "ratingGames": 19,
   "confidence": 76,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": -0.4
  },
  {
   "name": "Jacques Beaudry-Losique",
   "gender": "Male",
   "team": "The Big Dill",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 31,
   "wins": 16,
   "losses": 15,
   "pointsWon": 594,
   "totalPointsAgainst": 557,
   "mixedWins": 8,
   "mixedLosses": 7,
   "genderWins": 8,
   "genderLosses": 8,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 51.6,
   "diff": 37,
   "ppg": 19.2,
   "leagueRank": 21,
   "rating": 0.7,
   "ratingGames": 31,
   "confidence": 83,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.1,
   "playerId": "ace0cd0c-c1fb-42ec-90ae-509f0c64a6f8"
  },
  {
   "name": "Kathleen Kane",
   "gender": "Female",
   "team": "Deadly Dinks",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 20,
   "losses": 19,
   "pointsWon": 717,
   "totalPointsAgainst": 714,
   "mixedWins": 13,
   "mixedLosses": 6,
   "genderWins": 7,
   "genderLosses": 13,
   "clutchWins": 5,
   "clutchLosses": 7,
   "winPct": 51.3,
   "diff": 3,
   "ppg": 18.4,
   "leagueRank": 29,
   "rating": 0.2,
   "ratingGames": 39,
   "confidence": 86,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.1,
   "playerId": "48fe3e34-058f-4976-99ae-2dadf6b6c3c1"
  },
  {
   "name": "Jessica Zepeda",
   "gender": "Female",
   "team": "Bash and Crash",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 45,
   "wins": 23,
   "losses": 22,
   "pointsWon": 840,
   "totalPointsAgainst": 846,
   "mixedWins": 12,
   "mixedLosses": 11,
   "genderWins": 11,
   "genderLosses": 11,
   "clutchWins": 8,
   "clutchLosses": 11,
   "winPct": 51.1,
   "diff": -6,
   "ppg": 18.7,
   "leagueRank": 27,
   "rating": -0.3,
   "ratingGames": 45,
   "confidence": 87,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.1,
   "playerId": "62e347bc-9018-4b2f-908b-1914d71f4809"
  },
  {
   "name": "Tanya Sutantanon",
   "gender": "Female",
   "team": "Bash and Crash",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 153,
   "totalPointsAgainst": 133,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "0a8dc698-9413-4c69-b614-1bd7e62e7dfa",
   "winPct": 50,
   "diff": 20,
   "ppg": 19.1,
   "leagueRank": 48,
   "rating": 0.8,
   "ratingGames": 8,
   "confidence": 60,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": -1.2
  },
  {
   "name": "Carol Trujillo",
   "gender": "Female",
   "team": "Deadly Dinks",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 118,
   "totalPointsAgainst": 106,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "1f7c068e-fd5e-4d51-aa5b-4bacc4f5bc18",
   "winPct": 50,
   "diff": 12,
   "ppg": 19.7,
   "leagueRank": 50,
   "rating": 0.5,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.3
  },
  {
   "name": "Kevin Wood",
   "gender": "Male",
   "team": "Kitchen Ninjas",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 109,
   "totalPointsAgainst": 107,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "272314ef-168e-4eaf-b2e7-0cb05e5fbb09",
   "winPct": 50,
   "diff": 2,
   "ppg": 18.2,
   "leagueRank": 55,
   "rating": -0.5,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.6
  },
  {
   "name": "Linda Rabin",
   "gender": "Female",
   "team": "The Big Dill",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 145,
   "totalPointsAgainst": 149,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "21ca5af8-0553-4c66-98e1-1e805bd9209b",
   "winPct": 50,
   "diff": -4,
   "ppg": 18.1,
   "leagueRank": 51,
   "rating": -0.2,
   "ratingGames": 8,
   "confidence": 60,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.3
  },
  {
   "name": "Sue Cerrone",
   "gender": "Female",
   "team": "Deadly Dinks",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 23,
   "losses": 23,
   "pointsWon": 866,
   "totalPointsAgainst": 876,
   "mixedWins": 13,
   "mixedLosses": 10,
   "genderWins": 10,
   "genderLosses": 13,
   "clutchWins": 11,
   "clutchLosses": 11,
   "winPct": 50,
   "diff": -10,
   "ppg": 18.8,
   "leagueRank": 31,
   "rating": -0.7,
   "ratingGames": 46,
   "confidence": 87,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.4,
   "playerId": "c788553c-18fd-4fcc-a43c-e521362e2a39"
  },
  {
   "name": "Divakar Tailor",
   "gender": "Male",
   "team": "Kitchen Ninjas",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 45,
   "wins": 22,
   "losses": 23,
   "pointsWon": 869,
   "totalPointsAgainst": 788,
   "mixedWins": 9,
   "mixedLosses": 13,
   "genderWins": 13,
   "genderLosses": 10,
   "clutchWins": 5,
   "clutchLosses": 13,
   "winPct": 48.9,
   "diff": 81,
   "ppg": 19.3,
   "leagueRank": 14,
   "rating": 2.4,
   "ratingGames": 45,
   "confidence": 86,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.5,
   "playerId": "e30df523-fa08-47da-a3e0-679dfda48915"
  },
  {
   "name": "Alfredo Arcila",
   "gender": "Male",
   "team": "Bash and Crash",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 43,
   "wins": 21,
   "losses": 22,
   "pointsWon": 784,
   "totalPointsAgainst": 808,
   "mixedWins": 8,
   "mixedLosses": 14,
   "genderWins": 13,
   "genderLosses": 8,
   "clutchWins": 8,
   "clutchLosses": 7,
   "winPct": 48.8,
   "diff": -24,
   "ppg": 18.2,
   "leagueRank": 32,
   "rating": -0.5,
   "ratingGames": 43,
   "confidence": 86,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.1,
   "playerId": "d1b04ef0-0baa-4055-b2d2-24211daa4ce6"
  },
  {
   "name": "Ian Bolden",
   "gender": "Male",
   "team": "Kitchen Ninjas",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 44,
   "wins": 21,
   "losses": 23,
   "pointsWon": 815,
   "totalPointsAgainst": 799,
   "mixedWins": 15,
   "mixedLosses": 7,
   "genderWins": 6,
   "genderLosses": 16,
   "clutchWins": 8,
   "clutchLosses": 6,
   "winPct": 47.7,
   "diff": 16,
   "ppg": 18.5,
   "leagueRank": 25,
   "rating": 1.5,
   "ratingGames": 44,
   "confidence": 87,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.3,
   "playerId": "07793bf1-e97e-41b6-a659-5e8a6979704e"
  },
  {
   "name": "Alessandra Cheretis",
   "gender": "Female",
   "team": "Deadly Dinks",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 47,
   "wins": 21,
   "losses": 26,
   "pointsWon": 863,
   "totalPointsAgainst": 882,
   "mixedWins": 13,
   "mixedLosses": 11,
   "genderWins": 8,
   "genderLosses": 15,
   "clutchWins": 5,
   "clutchLosses": 9,
   "winPct": 44.7,
   "diff": -19,
   "ppg": 18.4,
   "leagueRank": 33,
   "rating": -0.1,
   "ratingGames": 47,
   "confidence": 87,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.3,
   "playerId": "5877a228-677f-4fb6-a0e5-6818054da219"
  },
  {
   "name": "John Koons",
   "gender": "Male",
   "team": "The Big Dill",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 17,
   "losses": 21,
   "pointsWon": 673,
   "totalPointsAgainst": 699,
   "mixedWins": 10,
   "mixedLosses": 9,
   "genderWins": 7,
   "genderLosses": 12,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 44.7,
   "diff": -26,
   "ppg": 17.7,
   "leagueRank": 37,
   "rating": -0.1,
   "ratingGames": 38,
   "confidence": 85,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.3,
   "playerId": "d40eb15e-7e56-4e12-b653-68f44fe773cd"
  },
  {
   "name": "Aurelio Roca",
   "gender": "Male",
   "team": "Bash and Crash",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 120,
   "totalPointsAgainst": 135,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 42.9,
   "diff": -15,
   "ppg": 17.1,
   "leagueRank": 60,
   "rating": 0.2,
   "ratingGames": 7,
   "confidence": 56,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 1.5,
   "playerId": "fc31d397-f6f9-4d0f-b374-9787bee299d1"
  },
  {
   "name": "Saurabh Kohli",
   "gender": "Male",
   "team": "The Big Dill",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 16,
   "losses": 22,
   "pointsWon": 675,
   "totalPointsAgainst": 696,
   "mixedWins": 9,
   "mixedLosses": 10,
   "genderWins": 7,
   "genderLosses": 12,
   "clutchWins": 3,
   "clutchLosses": 6,
   "winPct": 42.1,
   "diff": -21,
   "ppg": 17.8,
   "leagueRank": 40,
   "rating": -1.4,
   "ratingGames": 38,
   "confidence": 85,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.4,
   "playerId": "51136b7e-0f8d-4375-9b05-df435def9e96"
  },
  {
   "name": "Frank Rivera",
   "gender": "Male",
   "team": "Kitchen Ninjas",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 14,
   "losses": 21,
   "pointsWon": 618,
   "totalPointsAgainst": 638,
   "mixedWins": 7,
   "mixedLosses": 11,
   "genderWins": 7,
   "genderLosses": 10,
   "clutchWins": 4,
   "clutchLosses": 8,
   "winPct": 40,
   "diff": -20,
   "ppg": 17.7,
   "leagueRank": 34,
   "rating": 0.7,
   "ratingGames": 35,
   "confidence": 85,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.5,
   "playerId": "6d312fa7-1d6f-4a54-ae34-111b57904756"
  },
  {
   "name": "Melinda Wood",
   "gender": "Female",
   "team": "Kitchen Ninjas",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 16,
   "losses": 25,
   "pointsWon": 742,
   "totalPointsAgainst": 784,
   "mixedWins": 10,
   "mixedLosses": 11,
   "genderWins": 6,
   "genderLosses": 14,
   "clutchWins": 6,
   "clutchLosses": 6,
   "winPct": 39,
   "diff": -42,
   "ppg": 18.1,
   "leagueRank": 38,
   "rating": -0.4,
   "ratingGames": 41,
   "confidence": 87,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.2,
   "playerId": "ac3510a8-165d-4ea2-b1d1-4aaec154db4b"
  },
  {
   "name": "Carmen Wise",
   "gender": "Female",
   "team": "Bash and Crash",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 146,
   "totalPointsAgainst": 158,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "419901d0-946b-407e-9ca3-1a40773411b4",
   "winPct": 37.5,
   "diff": -12,
   "ppg": 18.3,
   "leagueRank": 58,
   "rating": -0.7,
   "ratingGames": 8,
   "confidence": 61,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": -0.7
  },
  {
   "name": "Andriana Solano",
   "gender": "female",
   "team": "Bash and Crash",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 132,
   "totalPointsAgainst": 159,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "8e010bbd-7dae-4dca-88cf-58f7d51b88a1",
   "winPct": 37.5,
   "diff": -27,
   "ppg": 16.5,
   "leagueRank": 62,
   "rating": -2.3,
   "ratingGames": 8,
   "confidence": 61,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -0.3
  },
  {
   "name": "Laura Lobb",
   "gender": "Female",
   "team": "Kitchen Ninjas",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 15,
   "losses": 27,
   "pointsWon": 715,
   "totalPointsAgainst": 811,
   "mixedWins": 9,
   "mixedLosses": 13,
   "genderWins": 6,
   "genderLosses": 14,
   "clutchWins": 7,
   "clutchLosses": 6,
   "winPct": 35.7,
   "diff": -96,
   "ppg": 17,
   "leagueRank": 42,
   "rating": -1.3,
   "ratingGames": 42,
   "confidence": 87,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.1,
   "playerId": "3d43c16d-0fb6-460c-8002-c3593b7d45e0"
  },
  {
   "name": "Merwynn Pagdanganan",
   "gender": "Male",
   "team": "The Big Dill",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 7,
   "losses": 15,
   "pointsWon": 348,
   "totalPointsAgainst": 438,
   "mixedWins": 5,
   "mixedLosses": 6,
   "genderWins": 2,
   "genderLosses": 9,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 31.8,
   "diff": -90,
   "ppg": 15.8,
   "leagueRank": 53,
   "rating": -4.9,
   "ratingGames": 22,
   "confidence": 79,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -1,
   "playerId": "5c0163f9-1118-4e0d-8b13-7d37a88a4e53"
  },
  {
   "name": "Sapna Chordia",
   "gender": "Female",
   "team": "Kitchen Ninjas",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 119,
   "totalPointsAgainst": 130,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 28.6,
   "diff": -11,
   "ppg": 17,
   "leagueRank": 64,
   "rating": -0.4,
   "ratingGames": 7,
   "confidence": 56,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.2,
   "playerId": "65b5b8bb-f72f-4477-b842-83e58e565ce4"
  },
  {
   "name": "Stuart Hagenlock",
   "gender": "Male",
   "team": "Bash and Crash",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 11,
   "losses": 31,
   "pointsWon": 661,
   "totalPointsAgainst": 846,
   "mixedWins": 2,
   "mixedLosses": 19,
   "genderWins": 9,
   "genderLosses": 12,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 26.2,
   "diff": -185,
   "ppg": 15.7,
   "leagueRank": 54,
   "rating": -4.3,
   "ratingGames": 42,
   "confidence": 86,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": -0.7,
   "playerId": "474ea101-ee51-4e45-bbe1-46c03887fe57"
  },
  {
   "name": "Koren Dehaven",
   "gender": "Female",
   "team": "Bash and Crash",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 137,
   "totalPointsAgainst": 157,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 3,
   "playerId": "c4f31e3b-88c8-441a-9d13-800c298f974d",
   "winPct": 25,
   "diff": -20,
   "ppg": 17.1,
   "leagueRank": 61,
   "rating": -2.4,
   "ratingGames": 8,
   "confidence": 60,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": -1
  },
  {
   "name": "Mike Piccirillo",
   "gender": "Male",
   "team": "Kitchen Ninjas",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 7,
   "losses": 21,
   "pointsWon": 451,
   "totalPointsAgainst": 542,
   "mixedWins": 4,
   "mixedLosses": 10,
   "genderWins": 3,
   "genderLosses": 11,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 25,
   "diff": -91,
   "ppg": 16.1,
   "leagueRank": 49,
   "rating": -1.6,
   "ratingGames": 28,
   "confidence": 82,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0,
   "playerId": "f7bf2605-eaf3-46a4-9a1e-fa3f3cd4bb4b"
  },
  {
   "name": "Sheree Bracco",
   "gender": "Female",
   "team": "Bash and Crash",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 21,
   "wins": 5,
   "losses": 16,
   "pointsWon": 381,
   "totalPointsAgainst": 420,
   "mixedWins": 3,
   "mixedLosses": 7,
   "genderWins": 2,
   "genderLosses": 9,
   "clutchWins": 3,
   "clutchLosses": 10,
   "winPct": 23.8,
   "diff": -39,
   "ppg": 18.1,
   "leagueRank": 46,
   "rating": -0.4,
   "ratingGames": 21,
   "confidence": 78,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.4,
   "playerId": "52850fc6-2799-42f1-9ef5-39fb08c787e5"
  },
  {
   "name": "Caroline Mitchell",
   "gender": "Female",
   "team": "Bash and Crash",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 6,
   "losses": 22,
   "pointsWon": 444,
   "totalPointsAgainst": 561,
   "mixedWins": 2,
   "mixedLosses": 12,
   "genderWins": 4,
   "genderLosses": 10,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 21.4,
   "diff": -117,
   "ppg": 15.9,
   "leagueRank": 52,
   "rating": -3,
   "ratingGames": 28,
   "confidence": 82,
   "strengthOfPartners": -2,
   "strengthOfOpponents": -0.6,
   "playerId": "9d510d8c-d719-4546-acb3-d5d42ce6457b"
  },
  {
   "name": "Karen Heier",
   "gender": "Female",
   "team": "Kitchen Ninjas",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 7,
   "losses": 34,
   "pointsWon": 656,
   "totalPointsAgainst": 841,
   "mixedWins": 4,
   "mixedLosses": 17,
   "genderWins": 3,
   "genderLosses": 17,
   "clutchWins": 4,
   "clutchLosses": 8,
   "winPct": 17.1,
   "diff": -185,
   "ppg": 16,
   "leagueRank": 57,
   "rating": -3.5,
   "ratingGames": 41,
   "confidence": 87,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.1,
   "playerId": "67403e2f-c5d7-4ac8-b07c-8c5ce7742c47"
  },
  {
   "name": "Mariah Dehaven",
   "gender": "Male",
   "team": "Bash and Crash",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 108,
   "totalPointsAgainst": 124,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "44e19379-76b6-4587-9292-0c8948fa394f",
   "winPct": 16.7,
   "diff": -16,
   "ppg": 18,
   "leagueRank": 65,
   "rating": -0.6,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": -3.2,
   "strengthOfOpponents": -0.8
  },
  {
   "name": "Jessica Pimentel",
   "gender": "Female",
   "team": "Bash and Crash",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 20,
   "wins": 3,
   "losses": 17,
   "pointsWon": 317,
   "totalPointsAgainst": 407,
   "mixedWins": 0,
   "mixedLosses": 10,
   "genderWins": 3,
   "genderLosses": 7,
   "clutchWins": 2,
   "clutchLosses": 5,
   "winPct": 15,
   "diff": -90,
   "ppg": 15.9,
   "leagueRank": 56,
   "rating": -3.2,
   "ratingGames": 20,
   "confidence": 75,
   "strengthOfPartners": -2.7,
   "strengthOfOpponents": -1,
   "playerId": "819b0153-3d5f-4c13-895e-0707d8d4f5bf"
  },
  {
   "name": "Dhruva Poluru",
   "gender": "Male",
   "team": "Kitchen Ninjas",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 5,
   "losses": 29,
   "pointsWon": 505,
   "totalPointsAgainst": 701,
   "mixedWins": 4,
   "mixedLosses": 13,
   "genderWins": 1,
   "genderLosses": 16,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 14.7,
   "diff": -196,
   "ppg": 14.9,
   "leagueRank": 59,
   "rating": -5.4,
   "ratingGames": 34,
   "confidence": 84,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.5,
   "playerId": "27f5db23-bb28-40ef-8a90-6fa5342c1f30"
  },
  {
   "name": "Susanne Katz",
   "gender": "Female",
   "team": "The Big Dill",
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
   "leagueRank": 66,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "040bdf16-e0f8-4b15-aa43-989ece44e097"
  },
  {
   "name": "Andy Lubel",
   "gender": "Male",
   "team": "Bash and Crash",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 0,
   "losses": 18,
   "pointsWon": 254,
   "totalPointsAgainst": 378,
   "mixedWins": 0,
   "mixedLosses": 9,
   "genderWins": 0,
   "genderLosses": 9,
   "clutchWins": 0,
   "clutchLosses": 4,
   "winPct": 0,
   "diff": -124,
   "ppg": 14.1,
   "leagueRank": 63,
   "rating": -5,
   "ratingGames": 18,
   "confidence": 74,
   "strengthOfPartners": -2.7,
   "strengthOfOpponents": -0.9,
   "playerId": "87951d6a-8a06-4b33-ad48-de907424033d"
  }
 ],
 "teams": [
  {
   "name": "The Big Dill",
   "w": 5,
   "l": 1,
   "pf": 3704,
   "pa": 3381,
   "gw": 119,
   "gl": 73,
   "diff": 323,
   "gameDiff": 46,
   "power": 0.4,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     56,
     40
    ],
    "male": [
     23,
     25
    ],
    "female": [
     40,
     8
    ]
   }
  },
  {
   "name": "Deadly Dinks",
   "w": 5,
   "l": 1,
   "pf": 3690,
   "pa": 3553,
   "gw": 109,
   "gl": 83,
   "diff": 137,
   "gameDiff": 26,
   "power": 0,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     59,
     37
    ],
    "male": [
     30,
     18
    ],
    "female": [
     20,
     28
    ]
   }
  },
  {
   "name": "Bash and Crash",
   "w": 1,
   "l": 5,
   "pf": 3518,
   "pa": 3733,
   "gw": 83,
   "gl": 109,
   "diff": -215,
   "gameDiff": -26,
   "power": -0.7,
   "powerRank": 4,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     35,
     61
    ],
    "male": [
     28,
     20
    ],
    "female": [
     20,
     28
    ]
   }
  },
  {
   "name": "Kitchen Ninjas",
   "w": 1,
   "l": 5,
   "pf": 3458,
   "pa": 3703,
   "gw": 73,
   "gl": 119,
   "diff": -245,
   "gameDiff": -46,
   "power": -0.5,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": null,
   "podName": null,
   "fmt": {
    "mixed": [
     42,
     54
    ],
    "male": [
     15,
     33
    ],
    "female": [
     16,
     32
    ]
   }
  }
 ],
 "duos": [
  {
   "a": "Scott Fujiwara",
   "b": "Krista Divenere",
   "team": "Deadly Dinks",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 2.5,
   "avgActual": 10,
   "avgExpected": 5.1,
   "aId": "36700a8a-e532-4781-afb5-3bed8373bd7b",
   "bId": "dfcd91f7-044a-48fe-8ef3-b5dc85f1675a"
  },
  {
   "a": "Anne Nagy",
   "b": "John Koons",
   "team": "The Big Dill",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.7,
   "avgActual": 2.3,
   "avgExpected": -1.6,
   "aId": "1409e96b-d1b0-4f35-9460-c86706b36706",
   "bId": "d40eb15e-7e56-4e12-b653-68f44fe773cd"
  },
  {
   "a": "Laura Lobb",
   "b": "Mike Piccirillo",
   "team": "Kitchen Ninjas",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 1.6,
   "avgActual": 0.2,
   "avgExpected": -2.5,
   "aId": "3d43c16d-0fb6-460c-8002-c3593b7d45e0",
   "bId": "f7bf2605-eaf3-46a4-9a1e-fa3f3cd4bb4b"
  },
  {
   "a": "Dhruva Poluru",
   "b": "Karen Heier",
   "team": "Kitchen Ninjas",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": 1.5,
   "avgActual": -6,
   "avgExpected": -8.7,
   "aId": "27f5db23-bb28-40ef-8a90-6fa5342c1f30",
   "bId": "67403e2f-c5d7-4ac8-b07c-8c5ce7742c47"
  },
  {
   "a": "Alessandra Cheretis",
   "b": "Hossam Hablas",
   "team": "Deadly Dinks",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 2.3,
   "avgExpected": -0.7,
   "aId": "5877a228-677f-4fb6-a0e5-6818054da219",
   "bId": "9c3be52c-f139-4b47-bbd6-4a8b3da0aaca"
  },
  {
   "a": "Stuart Hagenlock",
   "b": "Bob Post",
   "team": "Bash and Crash",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 1.5,
   "avgActual": 0.7,
   "avgExpected": -1.7,
   "aId": "474ea101-ee51-4e45-bbe1-46c03887fe57",
   "bId": "cc391984-ebe1-4b10-8e1b-2e41c7fcf34e"
  },
  {
   "a": "Kathleen Kane",
   "b": "Damon Cerrone",
   "team": "Deadly Dinks",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 2.5,
   "avgExpected": 0.2,
   "aId": "48fe3e34-058f-4976-99ae-2dadf6b6c3c1",
   "bId": "9d917e85-4861-459e-91f1-9906b08d8159"
  },
  {
   "a": "Frank Rivera",
   "b": "Ingrid Teasdale",
   "team": "Kitchen Ninjas",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 3.3,
   "avgExpected": 0.4,
   "aId": "6d312fa7-1d6f-4a54-ae34-111b57904756",
   "bId": "a68e22ff-587e-4b81-8045-cb0a6fafdaf0"
  },
  {
   "a": "Tracey Lawson",
   "b": "John Koons",
   "team": "The Big Dill",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 3,
   "avgExpected": 0.4,
   "aId": "9daed7c5-8f54-4d25-9fd2-05b66b27c589",
   "bId": "d40eb15e-7e56-4e12-b653-68f44fe773cd"
  },
  {
   "a": "Jacques Beaudry-Losique",
   "b": "John Koons",
   "team": "The Big Dill",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 3.7,
   "avgExpected": 0.7,
   "aId": "ace0cd0c-c1fb-42ec-90ae-509f0c64a6f8",
   "bId": "d40eb15e-7e56-4e12-b653-68f44fe773cd"
  },
  {
   "a": "Joey Penvari",
   "b": "John Koons",
   "team": "The Big Dill",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.3,
   "avgActual": 7,
   "avgExpected": 3.9,
   "aId": "4f61d748-5c1b-4dc0-96ec-afa84133deba",
   "bId": "d40eb15e-7e56-4e12-b653-68f44fe773cd"
  },
  {
   "a": "Ian Bolden",
   "b": "Laura Lobb",
   "team": "Kitchen Ninjas",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 1.2,
   "avgActual": 3.3,
   "avgExpected": 1.4,
   "aId": "07793bf1-e97e-41b6-a659-5e8a6979704e",
   "bId": "3d43c16d-0fb6-460c-8002-c3593b7d45e0"
  },
  {
   "a": "Damon Cerrone",
   "b": "Sue Cerrone",
   "team": "Deadly Dinks",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 3,
   "avgExpected": 0.1,
   "aId": "9d917e85-4861-459e-91f1-9906b08d8159",
   "bId": "c788553c-18fd-4fcc-a43c-e521362e2a39"
  },
  {
   "a": "Saurabh Kohli",
   "b": "Tracey Lawson",
   "team": "The Big Dill",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 0.7,
   "avgExpected": -1.9,
   "aId": "51136b7e-0f8d-4375-9b05-df435def9e96",
   "bId": "9daed7c5-8f54-4d25-9fd2-05b66b27c589"
  },
  {
   "a": "Laura Lobb",
   "b": "Anshika Dubey",
   "team": "Kitchen Ninjas",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 2.3,
   "avgExpected": 0.6,
   "aId": "3d43c16d-0fb6-460c-8002-c3593b7d45e0",
   "bId": "d47013f4-fd4d-4294-8366-e6a432a13856"
  },
  {
   "a": "Hossam Hablas",
   "b": "Damon Cerrone",
   "team": "Deadly Dinks",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 4.8,
   "avgExpected": 2.8,
   "aId": "9c3be52c-f139-4b47-bbd6-4a8b3da0aaca",
   "bId": "9d917e85-4861-459e-91f1-9906b08d8159"
  },
  {
   "a": "Anne Nagy",
   "b": "Katrina Koons",
   "team": "The Big Dill",
   "n": 8,
   "w": 8,
   "l": 0,
   "synergy": 1,
   "avgActual": 4.1,
   "avgExpected": 2.6,
   "aId": "1409e96b-d1b0-4f35-9460-c86706b36706",
   "bId": "50e814d5-b84d-46ec-9448-0095b62af829"
  },
  {
   "a": "Bryan Askins",
   "b": "Alfredo Arcila",
   "team": "Bash and Crash",
   "n": 11,
   "w": 9,
   "l": 2,
   "synergy": 1,
   "avgActual": 3.5,
   "avgExpected": 2.1,
   "aId": "462b6d53-75d1-4ff9-a438-58d6eaa4b17a",
   "bId": "d1b04ef0-0baa-4055-b2d2-24211daa4ce6"
  },
  {
   "a": "Frank Rivera",
   "b": "Divakar Tailor",
   "team": "Kitchen Ninjas",
   "n": 9,
   "w": 6,
   "l": 3,
   "synergy": 1,
   "avgActual": 4.3,
   "avgExpected": 2.9,
   "aId": "6d312fa7-1d6f-4a54-ae34-111b57904756",
   "bId": "e30df523-fa08-47da-a3e0-679dfda48915"
  },
  {
   "a": "Gary Steffer",
   "b": "Alessandra Cheretis",
   "team": "Deadly Dinks",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 0.9,
   "avgActual": 1.1,
   "avgExpected": -0.3,
   "aId": "2b2f652f-11e0-4bb0-9d5d-fc8e8cb4919e",
   "bId": "5877a228-677f-4fb6-a0e5-6818054da219"
  },
  {
   "a": "Melinda Wood",
   "b": "Divakar Tailor",
   "team": "Kitchen Ninjas",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.9,
   "avgActual": 2.7,
   "avgExpected": 1.2,
   "aId": "ac3510a8-165d-4ea2-b1d1-4aaec154db4b",
   "bId": "e30df523-fa08-47da-a3e0-679dfda48915"
  },
  {
   "a": "Jessica Zepeda",
   "b": "Bob Post",
   "team": "Bash and Crash",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.9,
   "avgActual": 2,
   "avgExpected": 0.5,
   "aId": "62e347bc-9018-4b2f-908b-1914d71f4809",
   "bId": "cc391984-ebe1-4b10-8e1b-2e41c7fcf34e"
  },
  {
   "a": "Ian Bolden",
   "b": "Karen Heier",
   "team": "Kitchen Ninjas",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.8,
   "avgActual": -2,
   "avgExpected": -3.9,
   "aId": "07793bf1-e97e-41b6-a659-5e8a6979704e",
   "bId": "67403e2f-c5d7-4ac8-b07c-8c5ce7742c47"
  },
  {
   "a": "Katrina Koons",
   "b": "Merwynn Pagdanganan",
   "team": "The Big Dill",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.8,
   "avgActual": -2,
   "avgExpected": -3.5,
   "aId": "50e814d5-b84d-46ec-9448-0095b62af829",
   "bId": "5c0163f9-1118-4e0d-8b13-7d37a88a4e53"
  },
  {
   "a": "Gary Steffer",
   "b": "Kathleen Kane",
   "team": "Deadly Dinks",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.8,
   "avgActual": 0.3,
   "avgExpected": -1.2,
   "aId": "2b2f652f-11e0-4bb0-9d5d-fc8e8cb4919e",
   "bId": "48fe3e34-058f-4976-99ae-2dadf6b6c3c1"
  },
  {
   "a": "Sheree Bracco",
   "b": "Jessica Zepeda",
   "team": "Bash and Crash",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.6,
   "avgActual": -2,
   "avgExpected": -3.3,
   "aId": "52850fc6-2799-42f1-9ef5-39fb08c787e5",
   "bId": "62e347bc-9018-4b2f-908b-1914d71f4809"
  },
  {
   "a": "Sheree Bracco",
   "b": "Suzy Gay",
   "team": "Bash and Crash",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 2,
   "avgExpected": 0.5,
   "aId": "52850fc6-2799-42f1-9ef5-39fb08c787e5",
   "bId": "a6bb5bf6-2c0d-44b2-a1f7-85b6ba25bc8a"
  },
  {
   "a": "Dhruva Poluru",
   "b": "Melinda Wood",
   "team": "Kitchen Ninjas",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.6,
   "avgActual": -0.7,
   "avgExpected": -2,
   "aId": "27f5db23-bb28-40ef-8a90-6fa5342c1f30",
   "bId": "ac3510a8-165d-4ea2-b1d1-4aaec154db4b"
  },
  {
   "a": "Karen Heier",
   "b": "Divakar Tailor",
   "team": "Kitchen Ninjas",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 1,
   "avgExpected": -0.2,
   "aId": "67403e2f-c5d7-4ac8-b07c-8c5ce7742c47",
   "bId": "e30df523-fa08-47da-a3e0-679dfda48915"
  },
  {
   "a": "Bryan Askins",
   "b": "Suzy Gay",
   "team": "Bash and Crash",
   "n": 9,
   "w": 8,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 3.3,
   "avgExpected": 2.6,
   "aId": "462b6d53-75d1-4ff9-a438-58d6eaa4b17a",
   "bId": "a6bb5bf6-2c0d-44b2-a1f7-85b6ba25bc8a"
  },
  {
   "a": "Sheree Bracco",
   "b": "Caroline Mitchell",
   "team": "Bash and Crash",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.5,
   "avgActual": -2.3,
   "avgExpected": -3.6,
   "aId": "52850fc6-2799-42f1-9ef5-39fb08c787e5",
   "bId": "9d510d8c-d719-4546-acb3-d5d42ce6457b"
  },
  {
   "a": "Luis Rodriguez",
   "b": "Krista Divenere",
   "team": "Deadly Dinks",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 0.1,
   "avgExpected": -0.7,
   "aId": "185883fe-e77a-4588-a51c-f72e9a378ddc",
   "bId": "dfcd91f7-044a-48fe-8ef3-b5dc85f1675a"
  },
  {
   "a": "Luis Rodriguez",
   "b": "Gary Steffer",
   "team": "Deadly Dinks",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 2.9,
   "avgExpected": 2.2,
   "aId": "185883fe-e77a-4588-a51c-f72e9a378ddc",
   "bId": "2b2f652f-11e0-4bb0-9d5d-fc8e8cb4919e"
  },
  {
   "a": "Bryan Askins",
   "b": "Bob Post",
   "team": "Bash and Crash",
   "n": 8,
   "w": 7,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 4.9,
   "avgExpected": 4.1,
   "aId": "462b6d53-75d1-4ff9-a438-58d6eaa4b17a",
   "bId": "cc391984-ebe1-4b10-8e1b-2e41c7fcf34e"
  },
  {
   "a": "Ian Bolden",
   "b": "Melinda Wood",
   "team": "Kitchen Ninjas",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 1.3,
   "avgExpected": 0.3,
   "aId": "07793bf1-e97e-41b6-a659-5e8a6979704e",
   "bId": "ac3510a8-165d-4ea2-b1d1-4aaec154db4b"
  },
  {
   "a": "Stuart Hagenlock",
   "b": "Andy Lubel",
   "team": "Bash and Crash",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": 0.4,
   "avgActual": -6.6,
   "avgExpected": -7.2,
   "aId": "474ea101-ee51-4e45-bbe1-46c03887fe57",
   "bId": "87951d6a-8a06-4b33-ad48-de907424033d"
  },
  {
   "a": "Jessica Zepeda",
   "b": "Alfredo Arcila",
   "team": "Bash and Crash",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 0.4,
   "avgActual": -0.1,
   "avgExpected": -0.8,
   "aId": "62e347bc-9018-4b2f-908b-1914d71f4809",
   "bId": "d1b04ef0-0baa-4055-b2d2-24211daa4ce6"
  },
  {
   "a": "Ian Bolden",
   "b": "Anshika Dubey",
   "team": "Kitchen Ninjas",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 5.2,
   "avgExpected": 4.5,
   "aId": "07793bf1-e97e-41b6-a659-5e8a6979704e",
   "bId": "d47013f4-fd4d-4294-8366-e6a432a13856"
  },
  {
   "a": "Katrina Koons",
   "b": "Jacques Beaudry-Losique",
   "team": "The Big Dill",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 2.3,
   "avgExpected": 1.7,
   "aId": "50e814d5-b84d-46ec-9448-0095b62af829",
   "bId": "ace0cd0c-c1fb-42ec-90ae-509f0c64a6f8"
  },
  {
   "a": "Frank Rivera",
   "b": "Melinda Wood",
   "team": "Kitchen Ninjas",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.3,
   "avgActual": -2,
   "avgExpected": -2.7,
   "aId": "6d312fa7-1d6f-4a54-ae34-111b57904756",
   "bId": "ac3510a8-165d-4ea2-b1d1-4aaec154db4b"
  },
  {
   "a": "Karen Heier",
   "b": "Melinda Wood",
   "team": "Kitchen Ninjas",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": 0.3,
   "avgActual": -2,
   "avgExpected": -2.6,
   "aId": "67403e2f-c5d7-4ac8-b07c-8c5ce7742c47",
   "bId": "ac3510a8-165d-4ea2-b1d1-4aaec154db4b"
  },
  {
   "a": "Gary Steffer",
   "b": "Sue Cerrone",
   "team": "Deadly Dinks",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 0.2,
   "avgActual": 0.4,
   "avgExpected": 0.1,
   "aId": "2b2f652f-11e0-4bb0-9d5d-fc8e8cb4919e",
   "bId": "c788553c-18fd-4fcc-a43c-e521362e2a39"
  },
  {
   "a": "Gary Steffer",
   "b": "Scott Fujiwara",
   "team": "Deadly Dinks",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 2.3,
   "avgExpected": 1.8,
   "aId": "2b2f652f-11e0-4bb0-9d5d-fc8e8cb4919e",
   "bId": "36700a8a-e532-4781-afb5-3bed8373bd7b"
  },
  {
   "a": "Kathleen Kane",
   "b": "Sue Cerrone",
   "team": "Deadly Dinks",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.2,
   "avgActual": -0.3,
   "avgExpected": -0.8,
   "aId": "48fe3e34-058f-4976-99ae-2dadf6b6c3c1",
   "bId": "c788553c-18fd-4fcc-a43c-e521362e2a39"
  },
  {
   "a": "Bryan Askins",
   "b": "Sheree Bracco",
   "team": "Bash and Crash",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 3,
   "avgExpected": 2.8,
   "aId": "462b6d53-75d1-4ff9-a438-58d6eaa4b17a",
   "bId": "52850fc6-2799-42f1-9ef5-39fb08c787e5"
  },
  {
   "a": "Scott Fujiwara",
   "b": "Kathleen Kane",
   "team": "Deadly Dinks",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 2,
   "avgExpected": 1.8,
   "aId": "36700a8a-e532-4781-afb5-3bed8373bd7b",
   "bId": "48fe3e34-058f-4976-99ae-2dadf6b6c3c1"
  },
  {
   "a": "Karen Heier",
   "b": "Ingrid Teasdale",
   "team": "Kitchen Ninjas",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.1,
   "avgActual": -1.3,
   "avgExpected": -1.5,
   "aId": "67403e2f-c5d7-4ac8-b07c-8c5ce7742c47",
   "bId": "a68e22ff-587e-4b81-8045-cb0a6fafdaf0"
  },
  {
   "a": "Sue Cerrone",
   "b": "Krista Divenere",
   "team": "Deadly Dinks",
   "n": 10,
   "w": 5,
   "l": 5,
   "synergy": 0,
   "avgActual": -1.9,
   "avgExpected": -1.9,
   "aId": "c788553c-18fd-4fcc-a43c-e521362e2a39",
   "bId": "dfcd91f7-044a-48fe-8ef3-b5dc85f1675a"
  },
  {
   "a": "Jessica Pimentel",
   "b": "Caroline Mitchell",
   "team": "Bash and Crash",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.1,
   "avgActual": -5,
   "avgExpected": -4.7,
   "aId": "819b0153-3d5f-4c13-895e-0707d8d4f5bf",
   "bId": "9d510d8c-d719-4546-acb3-d5d42ce6457b"
  },
  {
   "a": "Saurabh Kohli",
   "b": "Jacques Beaudry-Losique",
   "team": "The Big Dill",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.1,
   "avgActual": 0,
   "avgExpected": 0.1,
   "aId": "51136b7e-0f8d-4375-9b05-df435def9e96",
   "bId": "ace0cd0c-c1fb-42ec-90ae-509f0c64a6f8"
  },
  {
   "a": "Anshika Dubey",
   "b": "Divakar Tailor",
   "team": "Kitchen Ninjas",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -0.1,
   "avgActual": 1,
   "avgExpected": 1.1,
   "aId": "d47013f4-fd4d-4294-8366-e6a432a13856",
   "bId": "e30df523-fa08-47da-a3e0-679dfda48915"
  },
  {
   "a": "Sheree Bracco",
   "b": "Alfredo Arcila",
   "team": "Bash and Crash",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -0.7,
   "avgExpected": -0.4,
   "aId": "52850fc6-2799-42f1-9ef5-39fb08c787e5",
   "bId": "d1b04ef0-0baa-4055-b2d2-24211daa4ce6"
  },
  {
   "a": "Frank Rivera",
   "b": "Anshika Dubey",
   "team": "Kitchen Ninjas",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.2,
   "avgActual": 0.6,
   "avgExpected": 1,
   "aId": "6d312fa7-1d6f-4a54-ae34-111b57904756",
   "bId": "d47013f4-fd4d-4294-8366-e6a432a13856"
  },
  {
   "a": "Kathleen Kane",
   "b": "Alessandra Cheretis",
   "team": "Deadly Dinks",
   "n": 10,
   "w": 3,
   "l": 7,
   "synergy": -0.2,
   "avgActual": -0.9,
   "avgExpected": -0.6,
   "aId": "48fe3e34-058f-4976-99ae-2dadf6b6c3c1",
   "bId": "5877a228-677f-4fb6-a0e5-6818054da219"
  },
  {
   "a": "Ian Bolden",
   "b": "Dhruva Poluru",
   "team": "Kitchen Ninjas",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -0.2,
   "avgActual": -5.3,
   "avgExpected": -5.1,
   "aId": "07793bf1-e97e-41b6-a659-5e8a6979704e",
   "bId": "27f5db23-bb28-40ef-8a90-6fa5342c1f30"
  },
  {
   "a": "Laura Lobb",
   "b": "Melinda Wood",
   "team": "Kitchen Ninjas",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.2,
   "avgActual": -7,
   "avgExpected": -6.4,
   "aId": "3d43c16d-0fb6-460c-8002-c3593b7d45e0",
   "bId": "ac3510a8-165d-4ea2-b1d1-4aaec154db4b"
  },
  {
   "a": "Alessandra Cheretis",
   "b": "Damon Cerrone",
   "team": "Deadly Dinks",
   "n": 10,
   "w": 5,
   "l": 5,
   "synergy": -0.3,
   "avgActual": -0.3,
   "avgExpected": 0.1,
   "aId": "5877a228-677f-4fb6-a0e5-6818054da219",
   "bId": "9d917e85-4861-459e-91f1-9906b08d8159"
  },
  {
   "a": "Gary Steffer",
   "b": "Krista Divenere",
   "team": "Deadly Dinks",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -1,
   "avgExpected": -0.1,
   "aId": "2b2f652f-11e0-4bb0-9d5d-fc8e8cb4919e",
   "bId": "dfcd91f7-044a-48fe-8ef3-b5dc85f1675a"
  },
  {
   "a": "Tracey Lawson",
   "b": "Jacques Beaudry-Losique",
   "team": "The Big Dill",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.4,
   "avgActual": 0.3,
   "avgExpected": 1.2,
   "aId": "9daed7c5-8f54-4d25-9fd2-05b66b27c589",
   "bId": "ace0cd0c-c1fb-42ec-90ae-509f0c64a6f8"
  },
  {
   "a": "Jessica Zepeda",
   "b": "Suzy Gay",
   "team": "Bash and Crash",
   "n": 10,
   "w": 5,
   "l": 5,
   "synergy": -0.5,
   "avgActual": -0.4,
   "avgExpected": 0.2,
   "aId": "62e347bc-9018-4b2f-908b-1914d71f4809",
   "bId": "a6bb5bf6-2c0d-44b2-a1f7-85b6ba25bc8a"
  },
  {
   "a": "Saurabh Kohli",
   "b": "Merwynn Pagdanganan",
   "team": "The Big Dill",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -0.5,
   "avgActual": -5.3,
   "avgExpected": -4.5,
   "aId": "51136b7e-0f8d-4375-9b05-df435def9e96",
   "bId": "5c0163f9-1118-4e0d-8b13-7d37a88a4e53"
  },
  {
   "a": "Alessandra Cheretis",
   "b": "Sue Cerrone",
   "team": "Deadly Dinks",
   "n": 8,
   "w": 3,
   "l": 5,
   "synergy": -0.5,
   "avgActual": -1.6,
   "avgExpected": -0.9,
   "aId": "5877a228-677f-4fb6-a0e5-6818054da219",
   "bId": "c788553c-18fd-4fcc-a43c-e521362e2a39"
  },
  {
   "a": "Karen Heier",
   "b": "Anshika Dubey",
   "team": "Kitchen Ninjas",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.5,
   "avgActual": -2.6,
   "avgExpected": -1.7,
   "aId": "67403e2f-c5d7-4ac8-b07c-8c5ce7742c47",
   "bId": "d47013f4-fd4d-4294-8366-e6a432a13856"
  },
  {
   "a": "Anne Nagy",
   "b": "Saurabh Kohli",
   "team": "The Big Dill",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.5,
   "avgActual": -3.7,
   "avgExpected": -2.6,
   "aId": "1409e96b-d1b0-4f35-9460-c86706b36706",
   "bId": "51136b7e-0f8d-4375-9b05-df435def9e96"
  },
  {
   "a": "Jessica Zepeda",
   "b": "Caroline Mitchell",
   "team": "Bash and Crash",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -2.7,
   "avgExpected": -1.4,
   "aId": "62e347bc-9018-4b2f-908b-1914d71f4809",
   "bId": "9d510d8c-d719-4546-acb3-d5d42ce6457b"
  },
  {
   "a": "Scott Fujiwara",
   "b": "Sue Cerrone",
   "team": "Deadly Dinks",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.6,
   "avgActual": 2.3,
   "avgExpected": 3.3,
   "aId": "36700a8a-e532-4781-afb5-3bed8373bd7b",
   "bId": "c788553c-18fd-4fcc-a43c-e521362e2a39"
  },
  {
   "a": "Caroline Mitchell",
   "b": "Alfredo Arcila",
   "team": "Bash and Crash",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -4,
   "avgExpected": -2.4,
   "aId": "9d510d8c-d719-4546-acb3-d5d42ce6457b",
   "bId": "d1b04ef0-0baa-4055-b2d2-24211daa4ce6"
  },
  {
   "a": "Bryan Askins",
   "b": "Jessica Zepeda",
   "team": "Bash and Crash",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": -0.7,
   "avgActual": 2.1,
   "avgExpected": 3.2,
   "aId": "462b6d53-75d1-4ff9-a438-58d6eaa4b17a",
   "bId": "62e347bc-9018-4b2f-908b-1914d71f4809"
  },
  {
   "a": "Karen Heier",
   "b": "Frank Rivera",
   "team": "Kitchen Ninjas",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -0.7,
   "avgActual": -6,
   "avgExpected": -4.7,
   "aId": "67403e2f-c5d7-4ac8-b07c-8c5ce7742c47",
   "bId": "6d312fa7-1d6f-4a54-ae34-111b57904756"
  },
  {
   "a": "Luis Rodriguez",
   "b": "Sue Cerrone",
   "team": "Deadly Dinks",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.7,
   "avgActual": -3.6,
   "avgExpected": -2.3,
   "aId": "185883fe-e77a-4588-a51c-f72e9a378ddc",
   "bId": "c788553c-18fd-4fcc-a43c-e521362e2a39"
  },
  {
   "a": "Dhruva Poluru",
   "b": "Mike Piccirillo",
   "team": "Kitchen Ninjas",
   "n": 6,
   "w": 0,
   "l": 6,
   "synergy": -0.7,
   "avgActual": -7.7,
   "avgExpected": -6.5,
   "aId": "27f5db23-bb28-40ef-8a90-6fa5342c1f30",
   "bId": "f7bf2605-eaf3-46a4-9a1e-fa3f3cd4bb4b"
  },
  {
   "a": "Laura Lobb",
   "b": "Divakar Tailor",
   "team": "Kitchen Ninjas",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -3.7,
   "avgExpected": -1.8,
   "aId": "3d43c16d-0fb6-460c-8002-c3593b7d45e0",
   "bId": "e30df523-fa08-47da-a3e0-679dfda48915"
  },
  {
   "a": "Luis Rodriguez",
   "b": "Hossam Hablas",
   "team": "Deadly Dinks",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.8,
   "avgActual": -3,
   "avgExpected": -1.1,
   "aId": "185883fe-e77a-4588-a51c-f72e9a378ddc",
   "bId": "9c3be52c-f139-4b47-bbd6-4a8b3da0aaca"
  },
  {
   "a": "Ian Bolden",
   "b": "Divakar Tailor",
   "team": "Kitchen Ninjas",
   "n": 10,
   "w": 5,
   "l": 5,
   "synergy": -0.8,
   "avgActual": 1.2,
   "avgExpected": 2.4,
   "aId": "07793bf1-e97e-41b6-a659-5e8a6979704e",
   "bId": "e30df523-fa08-47da-a3e0-679dfda48915"
  },
  {
   "a": "Melinda Wood",
   "b": "Anshika Dubey",
   "team": "Kitchen Ninjas",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -0.8,
   "avgActual": -1.6,
   "avgExpected": -0.4,
   "aId": "ac3510a8-165d-4ea2-b1d1-4aaec154db4b",
   "bId": "d47013f4-fd4d-4294-8366-e6a432a13856"
  },
  {
   "a": "Scott Fujiwara",
   "b": "Damon Cerrone",
   "team": "Deadly Dinks",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.9,
   "avgActual": -1.2,
   "avgExpected": 0.6,
   "aId": "36700a8a-e532-4781-afb5-3bed8373bd7b",
   "bId": "9d917e85-4861-459e-91f1-9906b08d8159"
  },
  {
   "a": "Stuart Hagenlock",
   "b": "Alfredo Arcila",
   "team": "Bash and Crash",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -1,
   "avgActual": -4.4,
   "avgExpected": -2.8,
   "aId": "474ea101-ee51-4e45-bbe1-46c03887fe57",
   "bId": "d1b04ef0-0baa-4055-b2d2-24211daa4ce6"
  },
  {
   "a": "Anne Nagy",
   "b": "Jacques Beaudry-Losique",
   "team": "The Big Dill",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.2,
   "avgActual": -2,
   "avgExpected": 0.5,
   "aId": "1409e96b-d1b0-4f35-9460-c86706b36706",
   "bId": "ace0cd0c-c1fb-42ec-90ae-509f0c64a6f8"
  },
  {
   "a": "Luis Rodriguez",
   "b": "Scott Fujiwara",
   "team": "Deadly Dinks",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -1.2,
   "avgActual": -1.4,
   "avgExpected": 0.8,
   "aId": "185883fe-e77a-4588-a51c-f72e9a378ddc",
   "bId": "36700a8a-e532-4781-afb5-3bed8373bd7b"
  },
  {
   "a": "Jessica Pimentel",
   "b": "Andy Lubel",
   "team": "Bash and Crash",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -1.3,
   "avgActual": -7.8,
   "avgExpected": -5.5,
   "aId": "819b0153-3d5f-4c13-895e-0707d8d4f5bf",
   "bId": "87951d6a-8a06-4b33-ad48-de907424033d"
  },
  {
   "a": "Stuart Hagenlock",
   "b": "Jessica Zepeda",
   "team": "Bash and Crash",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.3,
   "avgActual": -6.7,
   "avgExpected": -3.6,
   "aId": "474ea101-ee51-4e45-bbe1-46c03887fe57",
   "bId": "62e347bc-9018-4b2f-908b-1914d71f4809"
  },
  {
   "a": "Ian Bolden",
   "b": "Mike Piccirillo",
   "team": "Kitchen Ninjas",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.3,
   "avgActual": -4.7,
   "avgExpected": -2.2,
   "aId": "07793bf1-e97e-41b6-a659-5e8a6979704e",
   "bId": "f7bf2605-eaf3-46a4-9a1e-fa3f3cd4bb4b"
  },
  {
   "a": "Stuart Hagenlock",
   "b": "Caroline Mitchell",
   "team": "Bash and Crash",
   "n": 7,
   "w": 0,
   "l": 7,
   "synergy": -1.4,
   "avgActual": -7.7,
   "avgExpected": -5.4,
   "aId": "474ea101-ee51-4e45-bbe1-46c03887fe57",
   "bId": "9d510d8c-d719-4546-acb3-d5d42ce6457b"
  },
  {
   "a": "Merwynn Pagdanganan",
   "b": "John Koons",
   "team": "The Big Dill",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -1.4,
   "avgActual": -6.6,
   "avgExpected": -4.1,
   "aId": "5c0163f9-1118-4e0d-8b13-7d37a88a4e53",
   "bId": "d40eb15e-7e56-4e12-b653-68f44fe773cd"
  },
  {
   "a": "Luis Rodriguez",
   "b": "Kathleen Kane",
   "team": "Deadly Dinks",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.4,
   "avgActual": -4,
   "avgExpected": -0.8,
   "aId": "185883fe-e77a-4588-a51c-f72e9a378ddc",
   "bId": "48fe3e34-058f-4976-99ae-2dadf6b6c3c1"
  },
  {
   "a": "Karen Heier",
   "b": "Mike Piccirillo",
   "team": "Kitchen Ninjas",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.4,
   "avgActual": -10,
   "avgExpected": -7.3,
   "aId": "67403e2f-c5d7-4ac8-b07c-8c5ce7742c47",
   "bId": "f7bf2605-eaf3-46a4-9a1e-fa3f3cd4bb4b"
  },
  {
   "a": "Ingrid Teasdale",
   "b": "Melinda Wood",
   "team": "Kitchen Ninjas",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.4,
   "avgActual": -1.2,
   "avgExpected": 1.6,
   "aId": "a68e22ff-587e-4b81-8045-cb0a6fafdaf0",
   "bId": "ac3510a8-165d-4ea2-b1d1-4aaec154db4b"
  },
  {
   "a": "Katrina Koons",
   "b": "John Koons",
   "team": "The Big Dill",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -1.5,
   "avgActual": -3.8,
   "avgExpected": -1.2,
   "aId": "50e814d5-b84d-46ec-9448-0095b62af829",
   "bId": "d40eb15e-7e56-4e12-b653-68f44fe773cd"
  },
  {
   "a": "Kathleen Kane",
   "b": "Krista Divenere",
   "team": "Deadly Dinks",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.5,
   "avgActual": -4,
   "avgExpected": -1,
   "aId": "48fe3e34-058f-4976-99ae-2dadf6b6c3c1",
   "bId": "dfcd91f7-044a-48fe-8ef3-b5dc85f1675a"
  },
  {
   "a": "Gary Steffer",
   "b": "Damon Cerrone",
   "team": "Deadly Dinks",
   "n": 10,
   "w": 3,
   "l": 7,
   "synergy": -1.5,
   "avgActual": -1.6,
   "avgExpected": 0.6,
   "aId": "2b2f652f-11e0-4bb0-9d5d-fc8e8cb4919e",
   "bId": "9d917e85-4861-459e-91f1-9906b08d8159"
  },
  {
   "a": "Katrina Koons",
   "b": "Tracey Lawson",
   "team": "The Big Dill",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.6,
   "avgActual": -2,
   "avgExpected": 1.3,
   "aId": "50e814d5-b84d-46ec-9448-0095b62af829",
   "bId": "9daed7c5-8f54-4d25-9fd2-05b66b27c589"
  },
  {
   "a": "Dhruva Poluru",
   "b": "Laura Lobb",
   "team": "Kitchen Ninjas",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.6,
   "avgActual": -9,
   "avgExpected": -5.7,
   "aId": "27f5db23-bb28-40ef-8a90-6fa5342c1f30",
   "bId": "3d43c16d-0fb6-460c-8002-c3593b7d45e0"
  },
  {
   "a": "Hossam Hablas",
   "b": "Krista Divenere",
   "team": "Deadly Dinks",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1.7,
   "avgActual": -2.7,
   "avgExpected": 1.4,
   "aId": "9c3be52c-f139-4b47-bbd6-4a8b3da0aaca",
   "bId": "dfcd91f7-044a-48fe-8ef3-b5dc85f1675a"
  },
  {
   "a": "Suzy Gay",
   "b": "Bob Post",
   "team": "Bash and Crash",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -1.7,
   "avgActual": -2,
   "avgExpected": 0.9,
   "aId": "a6bb5bf6-2c0d-44b2-a1f7-85b6ba25bc8a",
   "bId": "cc391984-ebe1-4b10-8e1b-2e41c7fcf34e"
  },
  {
   "a": "Dhruva Poluru",
   "b": "Frank Rivera",
   "team": "Kitchen Ninjas",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.9,
   "avgActual": -8.5,
   "avgExpected": -4.6,
   "aId": "27f5db23-bb28-40ef-8a90-6fa5342c1f30",
   "bId": "6d312fa7-1d6f-4a54-ae34-111b57904756"
  },
  {
   "a": "Saurabh Kohli",
   "b": "John Koons",
   "team": "The Big Dill",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.9,
   "avgActual": -5,
   "avgExpected": -1.2,
   "aId": "51136b7e-0f8d-4375-9b05-df435def9e96",
   "bId": "d40eb15e-7e56-4e12-b653-68f44fe773cd"
  },
  {
   "a": "Laura Lobb",
   "b": "Karen Heier",
   "team": "Kitchen Ninjas",
   "n": 7,
   "w": 0,
   "l": 7,
   "synergy": -2,
   "avgActual": -8,
   "avgExpected": -4.9,
   "aId": "3d43c16d-0fb6-460c-8002-c3593b7d45e0",
   "bId": "67403e2f-c5d7-4ac8-b07c-8c5ce7742c47"
  }
 ],
 "matches": [
  {
   "result": "away",
   "week": 1,
   "home": "Bash and Crash",
   "away": "The Big Dill",
   "time": "2026-07-07T19:00:00",
   "complete": true,
   "homePoints": 556,
   "awayPoints": 642,
   "homeGW": 10,
   "awayGW": 22,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Suzy Gay",
      "Bryan Askins"
     ],
     "a": [
      "Anne Nagy",
      "Joey Penvari"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sheree Bracco",
      "Aurelio Roca"
     ],
     "a": [
      "Katrina Koons",
      "Jacques Beaudry-Losique"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Caroline Mitchell",
      "Alfredo Arcila"
     ],
     "a": [
      "Tracey Lawson",
      "John Koons"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jessica Pimentel",
      "Andy Lubel"
     ],
     "a": [
      "Mica Gray",
      "Saurabh Kohli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Sheree Bracco",
      "Caroline Mitchell"
     ],
     "a": [
      "Anne Nagy",
      "Mica Gray"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Suzy Gay",
      "Jessica Zepeda"
     ],
     "a": [
      "Katrina Koons",
      "Tracey Lawson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Bryan Askins",
      "Aurelio Roca"
     ],
     "a": [
      "Joey Penvari",
      "Jacques Beaudry-Losique"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Alfredo Arcila",
      "Stuart Hagenlock"
     ],
     "a": [
      "Saurabh Kohli",
      "Merwynn Pagdanganan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Sheree Bracco",
      "Bryan Askins"
     ],
     "a": [
      "Katrina Koons",
      "Joey Penvari"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Suzy Gay",
      "Aurelio Roca"
     ],
     "a": [
      "Anne Nagy",
      "Jacques Beaudry-Losique"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jessica Zepeda",
      "Stuart Hagenlock"
     ],
     "a": [
      "Tracey Lawson",
      "John Koons"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jessica Pimentel",
      "Andy Lubel"
     ],
     "a": [
      "Mica Gray",
      "Merwynn Pagdanganan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Sheree Bracco",
      "Jessica Zepeda"
     ],
     "a": [
      "Anne Nagy",
      "Katrina Koons"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Caroline Mitchell",
      "Jessica Pimentel"
     ],
     "a": [
      "Mica Gray",
      "Tracey Lawson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Aurelio Roca",
      "Alfredo Arcila"
     ],
     "a": [
      "Jacques Beaudry-Losique",
      "John Koons"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Andy Lubel",
      "Stuart Hagenlock"
     ],
     "a": [
      "Saurabh Kohli",
      "Merwynn Pagdanganan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Suzy Gay",
      "Alfredo Arcila"
     ],
     "a": [
      "Katrina Koons",
      "Joey Penvari"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jessica Zepeda",
      "Bryan Askins"
     ],
     "a": [
      "Anne Nagy",
      "John Koons"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Caroline Mitchell",
      "Andy Lubel"
     ],
     "a": [
      "Mica Gray",
      "Merwynn Pagdanganan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jessica Pimentel",
      "Stuart Hagenlock"
     ],
     "a": [
      "Tracey Lawson",
      "Saurabh Kohli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Suzy Gay",
      "Sheree Bracco"
     ],
     "a": [
      "Anne Nagy",
      "Katrina Koons"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Caroline Mitchell",
      "Jessica Pimentel"
     ],
     "a": [
      "Mica Gray",
      "Tracey Lawson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Aurelio Roca",
      "Andy Lubel"
     ],
     "a": [
      "Joey Penvari",
      "John Koons"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Bryan Askins",
      "Alfredo Arcila"
     ],
     "a": [
      "Jacques Beaudry-Losique",
      "Saurabh Kohli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Sheree Bracco",
      "Aurelio Roca"
     ],
     "a": [
      "Anne Nagy",
      "Joey Penvari"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Suzy Gay",
      "Bryan Askins"
     ],
     "a": [
      "Katrina Koons",
      "Jacques Beaudry-Losique"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jessica Zepeda",
      "Alfredo Arcila"
     ],
     "a": [
      "Mica Gray",
      "Saurabh Kohli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Caroline Mitchell",
      "Stuart Hagenlock"
     ],
     "a": [
      "Tracey Lawson",
      "Merwynn Pagdanganan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Suzy Gay",
      "Jessica Zepeda"
     ],
     "a": [
      "Anne Nagy",
      "Mica Gray"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sheree Bracco",
      "Jessica Pimentel"
     ],
     "a": [
      "Katrina Koons",
      "Tracey Lawson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Bryan Askins",
      "Aurelio Roca"
     ],
     "a": [
      "Joey Penvari",
      "Jacques Beaudry-Losique"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Andy Lubel",
      "Stuart Hagenlock"
     ],
     "a": [
      "John Koons",
      "Merwynn Pagdanganan"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 1,
   "home": "Deadly Dinks",
   "away": "Kitchen Ninjas",
   "time": "2026-07-07T19:00:00",
   "complete": true,
   "homePoints": 633,
   "awayPoints": 577,
   "homeGW": 22,
   "awayGW": 10,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lee Ann Houston",
      "Damon Cerrone"
     ],
     "a": [
      "Laura Lobb",
      "Divakar Tailor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Kathleen Kane",
      "Luis Rodriguez"
     ],
     "a": [
      "Sapna Chordia",
      "Ian Bolden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Alessandra Cheretis",
      "Scott Fujiwara"
     ],
     "a": [
      "Anshika Dubey",
      "Frank Rivera"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Sue Cerrone",
      "Gary Steffer"
     ],
     "a": [
      "Karen Heier",
      "Dhruva Poluru"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Lee Ann Houston",
      "Sue Cerrone"
     ],
     "a": [
      "Laura Lobb",
      "Anshika Dubey"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Kathleen Kane",
      "Alessandra Cheretis"
     ],
     "a": [
      "Sapna Chordia",
      "Melinda Wood"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Damon Cerrone",
      "Luis Rodriguez"
     ],
     "a": [
      "Divakar Tailor",
      "Frank Rivera"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Hossam Hablas",
      "Gary Steffer"
     ],
     "a": [
      "Ian Bolden",
      "Dhruva Poluru"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kathleen Kane",
      "Damon Cerrone"
     ],
     "a": [
      "Laura Lobb",
      "Divakar Tailor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lee Ann Houston",
      "Luis Rodriguez"
     ],
     "a": [
      "Sapna Chordia",
      "Ian Bolden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Alessandra Cheretis",
      "Hossam Hablas"
     ],
     "a": [
      "Melinda Wood",
      "Frank Rivera"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Sue Cerrone",
      "Scott Fujiwara"
     ],
     "a": [
      "Karen Heier",
      "Dhruva Poluru"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lee Ann Houston",
      "Kathleen Kane"
     ],
     "a": [
      "Sapna Chordia",
      "Anshika Dubey"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sue Cerrone",
      "Alessandra Cheretis"
     ],
     "a": [
      "Melinda Wood",
      "Karen Heier"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Luis Rodriguez",
      "Hossam Hablas"
     ],
     "a": [
      "Divakar Tailor",
      "Ian Bolden"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Scott Fujiwara",
      "Gary Steffer"
     ],
     "a": [
      "Frank Rivera",
      "Dhruva Poluru"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Lee Ann Houston",
      "Hossam Hablas"
     ],
     "a": [
      "Laura Lobb",
      "Ian Bolden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kathleen Kane",
      "Damon Cerrone"
     ],
     "a": [
      "Anshika Dubey",
      "Divakar Tailor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Sue Cerrone",
      "Scott Fujiwara"
     ],
     "a": [
      "Melinda Wood",
      "Dhruva Poluru"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Alessandra Cheretis",
      "Gary Steffer"
     ],
     "a": [
      "Karen Heier",
      "Frank Rivera"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Lee Ann Houston",
      "Sue Cerrone"
     ],
     "a": [
      "Laura Lobb",
      "Sapna Chordia"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kathleen Kane",
      "Alessandra Cheretis"
     ],
     "a": [
      "Anshika Dubey",
      "Karen Heier"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Damon Cerrone",
      "Luis Rodriguez"
     ],
     "a": [
      "Divakar Tailor",
      "Ian Bolden"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Scott Fujiwara",
      "Gary Steffer"
     ],
     "a": [
      "Frank Rivera",
      "Dhruva Poluru"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kathleen Kane",
      "Luis Rodriguez"
     ],
     "a": [
      "Laura Lobb",
      "Ian Bolden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Alessandra Cheretis",
      "Damon Cerrone"
     ],
     "a": [
      "Sapna Chordia",
      "Dhruva Poluru"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lee Ann Houston",
      "Hossam Hablas"
     ],
     "a": [
      "Anshika Dubey",
      "Divakar Tailor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sue Cerrone",
      "Gary Steffer"
     ],
     "a": [
      "Melinda Wood",
      "Frank Rivera"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lee Ann Houston",
      "Kathleen Kane"
     ],
     "a": [
      "Laura Lobb",
      "Sapna Chordia"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sue Cerrone",
      "Alessandra Cheretis"
     ],
     "a": [
      "Melinda Wood",
      "Karen Heier"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Luis Rodriguez",
      "Scott Fujiwara"
     ],
     "a": [
      "Divakar Tailor",
      "Frank Rivera"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Damon Cerrone",
      "Hossam Hablas"
     ],
     "a": [
      "Ian Bolden",
      "Dhruva Poluru"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 2,
   "home": "Kitchen Ninjas",
   "away": "The Big Dill",
   "time": "2026-07-14T19:00:00",
   "complete": true,
   "homePoints": 542,
   "awayPoints": 588,
   "homeGW": 10,
   "awayGW": 22,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Melinda Wood",
      "Divakar Tailor"
     ],
     "a": [
      "Min Cho",
      "Merwynn Pagdanganan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Anshika Dubey",
      "Frank Rivera"
     ],
     "a": [
      "Katrina Koons",
      "John Koons"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Karen Heier",
      "Ian Bolden"
     ],
     "a": [
      "Bharti Smith",
      "Joey Penvari"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Laura Lobb",
      "Mike Piccirillo"
     ],
     "a": [
      "Denise Vance Noelle",
      "Saurabh Kohli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Anshika Dubey",
      "Melinda Wood"
     ],
     "a": [
      "Katrina Koons",
      "Min Cho"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Karen Heier",
      "Laura Lobb"
     ],
     "a": [
      "Bharti Smith",
      "Denise Vance Noelle"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Divakar Tailor",
      "Frank Rivera"
     ],
     "a": [
      "John Koons",
      "Merwynn Pagdanganan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Ian Bolden",
      "Mike Piccirillo"
     ],
     "a": [
      "Joey Penvari",
      "Saurabh Kohli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Melinda Wood",
      "Divakar Tailor"
     ],
     "a": [
      "Min Cho",
      "John Koons"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Anshika Dubey",
      "Ian Bolden"
     ],
     "a": [
      "Katrina Koons",
      "Merwynn Pagdanganan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Laura Lobb",
      "Frank Rivera"
     ],
     "a": [
      "Bharti Smith",
      "Saurabh Kohli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Karen Heier",
      "Mike Piccirillo"
     ],
     "a": [
      "Denise Vance Noelle",
      "Joey Penvari"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Anshika Dubey",
      "Karen Heier"
     ],
     "a": [
      "Min Cho",
      "Denise Vance Noelle"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Melinda Wood",
      "Laura Lobb"
     ],
     "a": [
      "Katrina Koons",
      "Bharti Smith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Divakar Tailor",
      "Ian Bolden"
     ],
     "a": [
      "John Koons",
      "Joey Penvari"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Frank Rivera",
      "Mike Piccirillo"
     ],
     "a": [
      "Merwynn Pagdanganan",
      "Saurabh Kohli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Karen Heier",
      "Divakar Tailor"
     ],
     "a": [
      "Katrina Koons",
      "Merwynn Pagdanganan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Anshika Dubey",
      "Frank Rivera"
     ],
     "a": [
      "Bharti Smith",
      "John Koons"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Laura Lobb",
      "Ian Bolden"
     ],
     "a": [
      "Min Cho",
      "Saurabh Kohli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Melinda Wood",
      "Mike Piccirillo"
     ],
     "a": [
      "Denise Vance Noelle",
      "Joey Penvari"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Anshika Dubey",
      "Melinda Wood"
     ],
     "a": [
      "Katrina Koons",
      "Min Cho"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Karen Heier",
      "Laura Lobb"
     ],
     "a": [
      "Bharti Smith",
      "Denise Vance Noelle"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Divakar Tailor",
      "Frank Rivera"
     ],
     "a": [
      "John Koons",
      "Merwynn Pagdanganan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ian Bolden",
      "Mike Piccirillo"
     ],
     "a": [
      "Joey Penvari",
      "Saurabh Kohli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Anshika Dubey",
      "Divakar Tailor"
     ],
     "a": [
      "Katrina Koons",
      "John Koons"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Melinda Wood",
      "Frank Rivera"
     ],
     "a": [
      "Bharti Smith",
      "Joey Penvari"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Karen Heier",
      "Mike Piccirillo"
     ],
     "a": [
      "Min Cho",
      "Saurabh Kohli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Laura Lobb",
      "Ian Bolden"
     ],
     "a": [
      "Denise Vance Noelle",
      "Merwynn Pagdanganan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Anshika Dubey",
      "Karen Heier"
     ],
     "a": [
      "Min Cho",
      "Denise Vance Noelle"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Melinda Wood",
      "Laura Lobb"
     ],
     "a": [
      "Katrina Koons",
      "Bharti Smith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Divakar Tailor",
      "Ian Bolden"
     ],
     "a": [
      "Merwynn Pagdanganan",
      "Saurabh Kohli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Frank Rivera",
      "Mike Piccirillo"
     ],
     "a": [
      "John Koons",
      "Joey Penvari"
     ]
    }
   ],
   "subs": [
    "Denise Vance Noelle",
    "Min Cho",
    "Bharti Smith"
   ]
  },
  {
   "result": "home",
   "week": 3,
   "home": "The Big Dill",
   "away": "Deadly Dinks",
   "time": "2026-07-21T19:00:00",
   "complete": true,
   "homePoints": 659,
   "awayPoints": 529,
   "homeGW": 22,
   "awayGW": 10,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Katrina Koons",
      "John Koons"
     ],
     "a": [
      "Alessandra Cheretis",
      "Damon Cerrone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Anne Nagy",
      "Elliot Hoang"
     ],
     "a": [
      "Kathleen Kane",
      "Gary Steffer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Bharti Smith",
      "Saurabh Kohli"
     ],
     "a": [
      "Sue Cerrone",
      "Luis Rodriguez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Jacqueline Tirona",
      "John Carlson"
     ],
     "a": [
      "Krista Divenere",
      "Hossam Hablas"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Katrina Koons",
      "Anne Nagy"
     ],
     "a": [
      "Alessandra Cheretis",
      "Sue Cerrone"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Colette Johnson",
      "Bharti Smith"
     ],
     "a": [
      "Kathleen Kane",
      "Krista Divenere"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "John Koons",
      "Elliot Hoang"
     ],
     "a": [
      "Damon Cerrone",
      "Gary Steffer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Saurabh Kohli",
      "John Carlson"
     ],
     "a": [
      "Hossam Hablas",
      "Luis Rodriguez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Anne Nagy",
      "Elliot Hoang"
     ],
     "a": [
      "Alessandra Cheretis",
      "Hossam Hablas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Katrina Koons",
      "Saurabh Kohli"
     ],
     "a": [
      "Kathleen Kane",
      "Damon Cerrone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Colette Johnson",
      "John Koons"
     ],
     "a": [
      "Sue Cerrone",
      "Gary Steffer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Jacqueline Tirona",
      "John Carlson"
     ],
     "a": [
      "Krista Divenere",
      "Luis Rodriguez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Katrina Koons",
      "Colette Johnson"
     ],
     "a": [
      "Alessandra Cheretis",
      "Kathleen Kane"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 2,
     "h": [
      "Jacqueline Tirona",
      "Bharti Smith"
     ],
     "a": [
      "Sue Cerrone",
      "Krista Divenere"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Elliot Hoang",
      "John Carlson"
     ],
     "a": [
      "Damon Cerrone",
      "Hossam Hablas"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "John Koons",
      "Saurabh Kohli"
     ],
     "a": [
      "Gary Steffer",
      "Luis Rodriguez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Anne Nagy",
      "John Koons"
     ],
     "a": [
      "Kathleen Kane",
      "Damon Cerrone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Colette Johnson",
      "Elliot Hoang"
     ],
     "a": [
      "Alessandra Cheretis",
      "Hossam Hablas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Jacqueline Tirona",
      "Saurabh Kohli"
     ],
     "a": [
      "Sue Cerrone",
      "Gary Steffer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Bharti Smith",
      "John Carlson"
     ],
     "a": [
      "Krista Divenere",
      "Luis Rodriguez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Katrina Koons",
      "Anne Nagy"
     ],
     "a": [
      "Alessandra Cheretis",
      "Kathleen Kane"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Jacqueline Tirona",
      "Bharti Smith"
     ],
     "a": [
      "Sue Cerrone",
      "Krista Divenere"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "John Koons",
      "Elliot Hoang"
     ],
     "a": [
      "Damon Cerrone",
      "Gary Steffer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Saurabh Kohli",
      "John Carlson"
     ],
     "a": [
      "Hossam Hablas",
      "Luis Rodriguez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 28,
     "as": 30,
     "h": [
      "Katrina Koons",
      "John Koons"
     ],
     "a": [
      "Alessandra Cheretis",
      "Damon Cerrone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Anne Nagy",
      "Saurabh Kohli"
     ],
     "a": [
      "Kathleen Kane",
      "Hossam Hablas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Colette Johnson",
      "Elliot Hoang"
     ],
     "a": [
      "Krista Divenere",
      "Gary Steffer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Bharti Smith",
      "John Carlson"
     ],
     "a": [
      "Sue Cerrone",
      "Luis Rodriguez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Anne Nagy",
      "Jacqueline Tirona"
     ],
     "a": [
      "Alessandra Cheretis",
      "Sue Cerrone"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Katrina Koons",
      "Colette Johnson"
     ],
     "a": [
      "Kathleen Kane",
      "Krista Divenere"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Elliot Hoang",
      "John Carlson"
     ],
     "a": [
      "Damon Cerrone",
      "Hossam Hablas"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "John Koons",
      "Saurabh Kohli"
     ],
     "a": [
      "Gary Steffer",
      "Luis Rodriguez"
     ]
    }
   ],
   "subs": [
    "Elliot Hoang",
    "Colette Johnson",
    "Jacqueline Tirona",
    "John Carlson",
    "Bharti Smith"
   ]
  },
  {
   "result": "away",
   "week": 3,
   "home": "Bash and Crash",
   "away": "Kitchen Ninjas",
   "time": "2026-07-21T19:00:00",
   "complete": true,
   "homePoints": 615,
   "awayPoints": 629,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Suzy Gay",
      "Bryan Askins"
     ],
     "a": [
      "Anshika Dubey",
      "Divakar Tailor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jessica Zepeda",
      "Alfredo Arcila"
     ],
     "a": [
      "Laura Lobb",
      "Ian Bolden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Carmen Wise",
      "Stuart Hagenlock"
     ],
     "a": [
      "Melinda Wood",
      "Mike Piccirillo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Caroline Mitchell",
      "Bob Post"
     ],
     "a": [
      "Ingrid Teasdale",
      "Dhruva Poluru"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Suzy Gay",
      "Carmen Wise"
     ],
     "a": [
      "Anshika Dubey",
      "Laura Lobb"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jessica Zepeda",
      "Caroline Mitchell"
     ],
     "a": [
      "Karen Heier",
      "Melinda Wood"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 28,
     "h": [
      "Bryan Askins",
      "Alfredo Arcila"
     ],
     "a": [
      "Divakar Tailor",
      "Ian Bolden"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Bob Post",
      "Stuart Hagenlock"
     ],
     "a": [
      "Mike Piccirillo",
      "Dhruva Poluru"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Suzy Gay",
      "Bob Post"
     ],
     "a": [
      "Laura Lobb",
      "Ian Bolden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jessica Zepeda",
      "Bryan Askins"
     ],
     "a": [
      "Anshika Dubey",
      "Mike Piccirillo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Carmen Wise",
      "Alfredo Arcila"
     ],
     "a": [
      "Karen Heier",
      "Divakar Tailor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Caroline Mitchell",
      "Stuart Hagenlock"
     ],
     "a": [
      "Ingrid Teasdale",
      "Dhruva Poluru"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Suzy Gay",
      "Jessica Zepeda"
     ],
     "a": [
      "Anshika Dubey",
      "Karen Heier"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Carmen Wise",
      "Caroline Mitchell"
     ],
     "a": [
      "Ingrid Teasdale",
      "Melinda Wood"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Bryan Askins",
      "Bob Post"
     ],
     "a": [
      "Ian Bolden",
      "Dhruva Poluru"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Alfredo Arcila",
      "Stuart Hagenlock"
     ],
     "a": [
      "Divakar Tailor",
      "Mike Piccirillo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jessica Zepeda",
      "Bryan Askins"
     ],
     "a": [
      "Laura Lobb",
      "Divakar Tailor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Suzy Gay",
      "Bob Post"
     ],
     "a": [
      "Karen Heier",
      "Ian Bolden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Carmen Wise",
      "Alfredo Arcila"
     ],
     "a": [
      "Ingrid Teasdale",
      "Mike Piccirillo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Caroline Mitchell",
      "Stuart Hagenlock"
     ],
     "a": [
      "Melinda Wood",
      "Dhruva Poluru"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Suzy Gay",
      "Jessica Zepeda"
     ],
     "a": [
      "Anshika Dubey",
      "Laura Lobb"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Carmen Wise",
      "Caroline Mitchell"
     ],
     "a": [
      "Ingrid Teasdale",
      "Melinda Wood"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Bryan Askins",
      "Alfredo Arcila"
     ],
     "a": [
      "Divakar Tailor",
      "Ian Bolden"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Bob Post",
      "Stuart Hagenlock"
     ],
     "a": [
      "Mike Piccirillo",
      "Dhruva Poluru"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Suzy Gay",
      "Bryan Askins"
     ],
     "a": [
      "Anshika Dubey",
      "Divakar Tailor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Jessica Zepeda",
      "Bob Post"
     ],
     "a": [
      "Laura Lobb",
      "Mike Piccirillo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Caroline Mitchell",
      "Alfredo Arcila"
     ],
     "a": [
      "Karen Heier",
      "Ian Bolden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Carmen Wise",
      "Stuart Hagenlock"
     ],
     "a": [
      "Melinda Wood",
      "Dhruva Poluru"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Suzy Gay",
      "Carmen Wise"
     ],
     "a": [
      "Laura Lobb",
      "Ingrid Teasdale"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jessica Zepeda",
      "Caroline Mitchell"
     ],
     "a": [
      "Anshika Dubey",
      "Karen Heier"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Bryan Askins",
      "Bob Post"
     ],
     "a": [
      "Ian Bolden",
      "Dhruva Poluru"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Alfredo Arcila",
      "Stuart Hagenlock"
     ],
     "a": [
      "Divakar Tailor",
      "Mike Piccirillo"
     ]
    }
   ],
   "subs": [
    "Ingrid Teasdale",
    "Carmen Wise",
    "Bob Post"
   ]
  },
  {
   "result": "home",
   "week": 4,
   "home": "The Big Dill",
   "away": "Bash and Crash",
   "time": "2026-07-28T19:00:00",
   "complete": true,
   "homePoints": 600,
   "awayPoints": 570,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Katrina Koons",
      "John Koons"
     ],
     "a": [
      "Jessica Zepeda",
      "Bryan Askins"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Anne Nagy",
      "John Carlson"
     ],
     "a": [
      "Suzy Gay",
      "Bob Post"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Mary Carlson",
      "Saurabh Kohli"
     ],
     "a": [
      "Caroline Mitchell",
      "Stuart Hagenlock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Tracey Lawson",
      "Jacques Beaudry-Losique"
     ],
     "a": [
      "Sheree Bracco",
      "Alfredo Arcila"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Anne Nagy",
      "Katrina Koons"
     ],
     "a": [
      "Suzy Gay",
      "Jessica Zepeda"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Mary Carlson",
      "Tracey Lawson"
     ],
     "a": [
      "Caroline Mitchell",
      "Sheree Bracco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "John Koons",
      "John Carlson"
     ],
     "a": [
      "Bob Post",
      "Bryan Askins"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Saurabh Kohli",
      "Jacques Beaudry-Losique"
     ],
     "a": [
      "Stuart Hagenlock",
      "Alfredo Arcila"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Katrina Koons",
      "John Koons"
     ],
     "a": [
      "Jessica Zepeda",
      "Bob Post"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Anne Nagy",
      "Saurabh Kohli"
     ],
     "a": [
      "Suzy Gay",
      "Bryan Askins"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Tracey Lawson",
      "John Carlson"
     ],
     "a": [
      "Caroline Mitchell",
      "Alfredo Arcila"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Mary Carlson",
      "Jacques Beaudry-Losique"
     ],
     "a": [
      "Sheree Bracco",
      "Stuart Hagenlock"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Anne Nagy",
      "Mary Carlson"
     ],
     "a": [
      "Jessica Zepeda",
      "Sheree Bracco"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Katrina Koons",
      "Tracey Lawson"
     ],
     "a": [
      "Suzy Gay",
      "Caroline Mitchell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "John Koons",
      "Saurabh Kohli"
     ],
     "a": [
      "Bob Post",
      "Stuart Hagenlock"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "John Carlson",
      "Jacques Beaudry-Losique"
     ],
     "a": [
      "Bryan Askins",
      "Alfredo Arcila"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Mary Carlson",
      "John Koons"
     ],
     "a": [
      "Suzy Gay",
      "Bryan Askins"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Anne Nagy",
      "John Carlson"
     ],
     "a": [
      "Caroline Mitchell",
      "Bob Post"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Tracey Lawson",
      "Saurabh Kohli"
     ],
     "a": [
      "Jessica Zepeda",
      "Alfredo Arcila"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Katrina Koons",
      "Jacques Beaudry-Losique"
     ],
     "a": [
      "Sheree Bracco",
      "Stuart Hagenlock"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Anne Nagy",
      "Katrina Koons"
     ],
     "a": [
      "Suzy Gay",
      "Jessica Zepeda"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Mary Carlson",
      "Tracey Lawson"
     ],
     "a": [
      "Caroline Mitchell",
      "Sheree Bracco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "John Koons",
      "John Carlson"
     ],
     "a": [
      "Bob Post",
      "Bryan Askins"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Saurabh Kohli",
      "Jacques Beaudry-Losique"
     ],
     "a": [
      "Stuart Hagenlock",
      "Alfredo Arcila"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Anne Nagy",
      "John Koons"
     ],
     "a": [
      "Suzy Gay",
      "Bob Post"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Katrina Koons",
      "John Carlson"
     ],
     "a": [
      "Caroline Mitchell",
      "Stuart Hagenlock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Mary Carlson",
      "Jacques Beaudry-Losique"
     ],
     "a": [
      "Jessica Zepeda",
      "Alfredo Arcila"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Tracey Lawson",
      "Saurabh Kohli"
     ],
     "a": [
      "Sheree Bracco",
      "Bryan Askins"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Anne Nagy",
      "Mary Carlson"
     ],
     "a": [
      "Jessica Zepeda",
      "Sheree Bracco"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Katrina Koons",
      "Tracey Lawson"
     ],
     "a": [
      "Suzy Gay",
      "Caroline Mitchell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "John Koons",
      "Saurabh Kohli"
     ],
     "a": [
      "Bryan Askins",
      "Alfredo Arcila"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "John Carlson",
      "Jacques Beaudry-Losique"
     ],
     "a": [
      "Bob Post",
      "Stuart Hagenlock"
     ]
    }
   ],
   "subs": [
    "Bob Post",
    "John Carlson",
    "Mary Carlson"
   ]
  },
  {
   "result": "away",
   "week": 4,
   "home": "Kitchen Ninjas",
   "away": "Deadly Dinks",
   "time": "2026-07-28T19:00:00",
   "complete": true,
   "homePoints": 568,
   "awayPoints": 624,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Anshika Dubey",
      "Divakar Tailor"
     ],
     "a": [
      "Alessandra Cheretis",
      "Damon Cerrone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Melinda Wood",
      "Ian Bolden"
     ],
     "a": [
      "Kathleen Kane",
      "Gary Steffer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Karen Heier",
      "Mike Piccirillo"
     ],
     "a": [
      "Carol Trujillo",
      "Mark Thompson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Laura Lobb",
      "Dhruva Poluru"
     ],
     "a": [
      "Krista Divenere",
      "Luis Rodriguez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Anshika Dubey",
      "Laura Lobb"
     ],
     "a": [
      "Alessandra Cheretis",
      "Carol Trujillo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Melinda Wood",
      "Karen Heier"
     ],
     "a": [
      "Kathleen Kane",
      "Sue Cerrone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Divakar Tailor",
      "Ian Bolden"
     ],
     "a": [
      "Damon Cerrone",
      "Mark Thompson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Frank Rivera",
      "Dhruva Poluru"
     ],
     "a": [
      "Gary Steffer",
      "Luis Rodriguez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Melinda Wood",
      "Divakar Tailor"
     ],
     "a": [
      "Alessandra Cheretis",
      "Damon Cerrone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Anshika Dubey",
      "Ian Bolden"
     ],
     "a": [
      "Kathleen Kane",
      "Gary Steffer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Karen Heier",
      "Frank Rivera"
     ],
     "a": [
      "Sue Cerrone",
      "Mark Thompson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Laura Lobb",
      "Mike Piccirillo"
     ],
     "a": [
      "Krista Divenere",
      "Luis Rodriguez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Anshika Dubey",
      "Melinda Wood"
     ],
     "a": [
      "Kathleen Kane",
      "Carol Trujillo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Laura Lobb",
      "Karen Heier"
     ],
     "a": [
      "Sue Cerrone",
      "Krista Divenere"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ian Bolden",
      "Frank Rivera"
     ],
     "a": [
      "Damon Cerrone",
      "Gary Steffer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Mike Piccirillo",
      "Dhruva Poluru"
     ],
     "a": [
      "Mark Thompson",
      "Luis Rodriguez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Anshika Dubey",
      "Frank Rivera"
     ],
     "a": [
      "Alessandra Cheretis",
      "Gary Steffer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Melinda Wood",
      "Divakar Tailor"
     ],
     "a": [
      "Carol Trujillo",
      "Damon Cerrone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Laura Lobb",
      "Mike Piccirillo"
     ],
     "a": [
      "Sue Cerrone",
      "Luis Rodriguez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Karen Heier",
      "Dhruva Poluru"
     ],
     "a": [
      "Krista Divenere",
      "Mark Thompson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Anshika Dubey",
      "Laura Lobb"
     ],
     "a": [
      "Alessandra Cheretis",
      "Kathleen Kane"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Melinda Wood",
      "Karen Heier"
     ],
     "a": [
      "Carol Trujillo",
      "Krista Divenere"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Divakar Tailor",
      "Ian Bolden"
     ],
     "a": [
      "Damon Cerrone",
      "Gary Steffer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Mike Piccirillo",
      "Dhruva Poluru"
     ],
     "a": [
      "Mark Thompson",
      "Luis Rodriguez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Melinda Wood",
      "Ian Bolden"
     ],
     "a": [
      "Alessandra Cheretis",
      "Gary Steffer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Karen Heier",
      "Divakar Tailor"
     ],
     "a": [
      "Kathleen Kane",
      "Luis Rodriguez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Anshika Dubey",
      "Frank Rivera"
     ],
     "a": [
      "Carol Trujillo",
      "Damon Cerrone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Laura Lobb",
      "Dhruva Poluru"
     ],
     "a": [
      "Sue Cerrone",
      "Mark Thompson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Anshika Dubey",
      "Melinda Wood"
     ],
     "a": [
      "Alessandra Cheretis",
      "Kathleen Kane"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Laura Lobb",
      "Karen Heier"
     ],
     "a": [
      "Sue Cerrone",
      "Krista Divenere"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ian Bolden",
      "Mike Piccirillo"
     ],
     "a": [
      "Damon Cerrone",
      "Mark Thompson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Divakar Tailor",
      "Frank Rivera"
     ],
     "a": [
      "Gary Steffer",
      "Luis Rodriguez"
     ]
    }
   ],
   "subs": [
    "Mark Thompson",
    "Carol Trujillo"
   ]
  },
  {
   "result": "away",
   "week": 5,
   "home": "Bash and Crash",
   "away": "Deadly Dinks",
   "time": "2026-08-04T19:00:00",
   "complete": true,
   "homePoints": 552,
   "awayPoints": 647,
   "homeGW": 10,
   "awayGW": 22,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Suzy Gay",
      "Bryan Askins"
     ],
     "a": [
      "Alessandra Cheretis",
      "Damon Cerrone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jessica Zepeda",
      "Bob Post"
     ],
     "a": [
      "Sue Cerrone",
      "Gary Steffer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jessica Pimentel",
      "Andy Lubel"
     ],
     "a": [
      "Krista Divenere",
      "Scott Fujiwara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Caroline Mitchell",
      "Stuart Hagenlock"
     ],
     "a": [
      "Kathleen Kane",
      "Hossam Hablas"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Suzy Gay",
      "Jessica Zepeda"
     ],
     "a": [
      "Alessandra Cheretis",
      "Kathleen Kane"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Sheree Bracco",
      "Jessica Pimentel"
     ],
     "a": [
      "Sue Cerrone",
      "Krista Divenere"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Bryan Askins",
      "Bob Post"
     ],
     "a": [
      "Damon Cerrone",
      "Hossam Hablas"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Alfredo Arcila",
      "Andy Lubel"
     ],
     "a": [
      "Gary Steffer",
      "Scott Fujiwara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Suzy Gay",
      "Bob Post"
     ],
     "a": [
      "Alessandra Cheretis",
      "Gary Steffer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jessica Zepeda",
      "Bryan Askins"
     ],
     "a": [
      "Kathleen Kane",
      "Damon Cerrone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Caroline Mitchell",
      "Stuart Hagenlock"
     ],
     "a": [
      "Sue Cerrone",
      "Scott Fujiwara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Sheree Bracco",
      "Alfredo Arcila"
     ],
     "a": [
      "Krista Divenere",
      "Hossam Hablas"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Suzy Gay",
      "Sheree Bracco"
     ],
     "a": [
      "Alessandra Cheretis",
      "Sue Cerrone"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Caroline Mitchell",
      "Jessica Pimentel"
     ],
     "a": [
      "Kathleen Kane",
      "Krista Divenere"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Bryan Askins",
      "Alfredo Arcila"
     ],
     "a": [
      "Damon Cerrone",
      "Gary Steffer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Stuart Hagenlock",
      "Andy Lubel"
     ],
     "a": [
      "Hossam Hablas",
      "Scott Fujiwara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jessica Zepeda",
      "Bob Post"
     ],
     "a": [
      "Alessandra Cheretis",
      "Damon Cerrone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sheree Bracco",
      "Alfredo Arcila"
     ],
     "a": [
      "Sue Cerrone",
      "Gary Steffer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Caroline Mitchell",
      "Andy Lubel"
     ],
     "a": [
      "Krista Divenere",
      "Hossam Hablas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jessica Pimentel",
      "Stuart Hagenlock"
     ],
     "a": [
      "Kathleen Kane",
      "Scott Fujiwara"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Suzy Gay",
      "Jessica Zepeda"
     ],
     "a": [
      "Alessandra Cheretis",
      "Sue Cerrone"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Caroline Mitchell",
      "Jessica Pimentel"
     ],
     "a": [
      "Kathleen Kane",
      "Krista Divenere"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Bryan Askins",
      "Bob Post"
     ],
     "a": [
      "Damon Cerrone",
      "Gary Steffer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Stuart Hagenlock",
      "Andy Lubel"
     ],
     "a": [
      "Hossam Hablas",
      "Scott Fujiwara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Sheree Bracco",
      "Bryan Askins"
     ],
     "a": [
      "Alessandra Cheretis",
      "Hossam Hablas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Suzy Gay",
      "Bob Post"
     ],
     "a": [
      "Sue Cerrone",
      "Damon Cerrone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jessica Zepeda",
      "Andy Lubel"
     ],
     "a": [
      "Krista Divenere",
      "Gary Steffer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jessica Pimentel",
      "Alfredo Arcila"
     ],
     "a": [
      "Kathleen Kane",
      "Scott Fujiwara"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jessica Zepeda",
      "Caroline Mitchell"
     ],
     "a": [
      "Alessandra Cheretis",
      "Kathleen Kane"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Suzy Gay",
      "Sheree Bracco"
     ],
     "a": [
      "Sue Cerrone",
      "Krista Divenere"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Bob Post",
      "Stuart Hagenlock"
     ],
     "a": [
      "Damon Cerrone",
      "Hossam Hablas"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Bryan Askins",
      "Alfredo Arcila"
     ],
     "a": [
      "Gary Steffer",
      "Scott Fujiwara"
     ]
    }
   ],
   "subs": [
    "Bob Post"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "The Big Dill",
   "away": "Kitchen Ninjas",
   "time": "2026-08-04T19:00:00",
   "complete": true,
   "homePoints": 619,
   "awayPoints": 563,
   "homeGW": 20,
   "awayGW": 12,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Anne Nagy",
      "Seth Blackwell"
     ],
     "a": [
      "Anshika Dubey",
      "Divakar Tailor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Linda Rabin",
      "Jacques Beaudry-Losique"
     ],
     "a": [
      "Melinda Wood",
      "Ian Bolden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Tracey Lawson",
      "Joe Carpenter"
     ],
     "a": [
      "Karen Heier",
      "Dhruva Poluru"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Leslie Bartnik",
      "Gregory Scheyer"
     ],
     "a": [
      "Laura Lobb",
      "Mike Piccirillo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Anne Nagy",
      "Leslie Bartnik"
     ],
     "a": [
      "Anshika Dubey",
      "Melinda Wood"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Linda Rabin",
      "Tracey Lawson"
     ],
     "a": [
      "Ingrid Teasdale",
      "Karen Heier"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Seth Blackwell",
      "Gregory Scheyer"
     ],
     "a": [
      "Divakar Tailor",
      "Ian Bolden"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Jacques Beaudry-Losique",
      "Joe Carpenter"
     ],
     "a": [
      "Frank Rivera",
      "Dhruva Poluru"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Anne Nagy",
      "Jacques Beaudry-Losique"
     ],
     "a": [
      "Anshika Dubey",
      "Ian Bolden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Leslie Bartnik",
      "Seth Blackwell"
     ],
     "a": [
      "Melinda Wood",
      "Divakar Tailor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Linda Rabin",
      "Joe Carpenter"
     ],
     "a": [
      "Laura Lobb",
      "Mike Piccirillo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Tracey Lawson",
      "Gregory Scheyer"
     ],
     "a": [
      "Ingrid Teasdale",
      "Frank Rivera"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Anne Nagy",
      "Linda Rabin"
     ],
     "a": [
      "Anshika Dubey",
      "Ingrid Teasdale"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Leslie Bartnik",
      "Tracey Lawson"
     ],
     "a": [
      "Laura Lobb",
      "Karen Heier"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Seth Blackwell",
      "Jacques Beaudry-Losique"
     ],
     "a": [
      "Divakar Tailor",
      "Frank Rivera"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Gregory Scheyer",
      "Joe Carpenter"
     ],
     "a": [
      "Mike Piccirillo",
      "Dhruva Poluru"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Anne Nagy",
      "Seth Blackwell"
     ],
     "a": [
      "Melinda Wood",
      "Ian Bolden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Linda Rabin",
      "Jacques Beaudry-Losique"
     ],
     "a": [
      "Ingrid Teasdale",
      "Frank Rivera"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Tracey Lawson",
      "Gregory Scheyer"
     ],
     "a": [
      "Laura Lobb",
      "Dhruva Poluru"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Leslie Bartnik",
      "Joe Carpenter"
     ],
     "a": [
      "Karen Heier",
      "Mike Piccirillo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Anne Nagy",
      "Linda Rabin"
     ],
     "a": [
      "Anshika Dubey",
      "Melinda Wood"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Leslie Bartnik",
      "Tracey Lawson"
     ],
     "a": [
      "Laura Lobb",
      "Karen Heier"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Seth Blackwell",
      "Jacques Beaudry-Losique"
     ],
     "a": [
      "Divakar Tailor",
      "Ian Bolden"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Gregory Scheyer",
      "Joe Carpenter"
     ],
     "a": [
      "Mike Piccirillo",
      "Dhruva Poluru"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Anne Nagy",
      "Gregory Scheyer"
     ],
     "a": [
      "Ingrid Teasdale",
      "Divakar Tailor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Linda Rabin",
      "Seth Blackwell"
     ],
     "a": [
      "Anshika Dubey",
      "Ian Bolden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Tracey Lawson",
      "Jacques Beaudry-Losique"
     ],
     "a": [
      "Melinda Wood",
      "Dhruva Poluru"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Leslie Bartnik",
      "Joe Carpenter"
     ],
     "a": [
      "Karen Heier",
      "Frank Rivera"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Anne Nagy",
      "Leslie Bartnik"
     ],
     "a": [
      "Melinda Wood",
      "Laura Lobb"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Linda Rabin",
      "Tracey Lawson"
     ],
     "a": [
      "Anshika Dubey",
      "Ingrid Teasdale"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Seth Blackwell",
      "Gregory Scheyer"
     ],
     "a": [
      "Ian Bolden",
      "Mike Piccirillo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jacques Beaudry-Losique",
      "Joe Carpenter"
     ],
     "a": [
      "Divakar Tailor",
      "Frank Rivera"
     ]
    }
   ],
   "subs": [
    "Ingrid Teasdale",
    "Linda Rabin",
    "Seth Blackwell",
    "Gregory Scheyer",
    "Joe Carpenter",
    "Leslie Bartnik"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "Deadly Dinks",
   "away": "Bash and Crash",
   "time": "2026-08-09T17:00:00",
   "complete": true,
   "homePoints": 636,
   "awayPoints": 601,
   "homeGW": 19,
   "awayGW": 13,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Alessandra Cheretis",
      "Damon Cerrone"
     ],
     "a": [
      "Suzy Gay",
      "Bryan Askins"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sue Cerrone",
      "Gary Steffer"
     ],
     "a": [
      "Jessica Zepeda",
      "Alfredo Arcila"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Krista Divenere",
      "Scott Fujiwara"
     ],
     "a": [
      "Koren Dehaven",
      "Andy Lubel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Dawn Danner",
      "Luis Rodriguez"
     ],
     "a": [
      "Jessica Pimentel",
      "Mariah Dehaven"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Alessandra Cheretis",
      "Sue Cerrone"
     ],
     "a": [
      "Suzy Gay",
      "Jessica Zepeda"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Dawn Danner",
      "Krista Divenere"
     ],
     "a": [
      "Koren Dehaven",
      "Jessica Pimentel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Damon Cerrone",
      "Scott Fujiwara"
     ],
     "a": [
      "Bryan Askins",
      "Alfredo Arcila"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Gary Steffer",
      "Luis Rodriguez"
     ],
     "a": [
      "Stuart Hagenlock",
      "Andy Lubel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Dawn Danner",
      "Damon Cerrone"
     ],
     "a": [
      "Jessica Zepeda",
      "Alfredo Arcila"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Alessandra Cheretis",
      "Gary Steffer"
     ],
     "a": [
      "Koren Dehaven",
      "Bryan Askins"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sue Cerrone",
      "Scott Fujiwara"
     ],
     "a": [
      "Suzy Gay",
      "Stuart Hagenlock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Krista Divenere",
      "Luis Rodriguez"
     ],
     "a": [
      "Jessica Pimentel",
      "Mariah Dehaven"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Alessandra Cheretis",
      "Dawn Danner"
     ],
     "a": [
      "Jessica Zepeda",
      "Jessica Pimentel"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Sue Cerrone",
      "Krista Divenere"
     ],
     "a": [
      "Suzy Gay",
      "Koren Dehaven"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Damon Cerrone",
      "Gary Steffer"
     ],
     "a": [
      "Bryan Askins",
      "Stuart Hagenlock"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Scott Fujiwara",
      "Luis Rodriguez"
     ],
     "a": [
      "Mariah Dehaven",
      "Andy Lubel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Alessandra Cheretis",
      "Gary Steffer"
     ],
     "a": [
      "Suzy Gay",
      "Alfredo Arcila"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Dawn Danner",
      "Damon Cerrone"
     ],
     "a": [
      "Jessica Zepeda",
      "Stuart Hagenlock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sue Cerrone",
      "Scott Fujiwara"
     ],
     "a": [
      "Koren Dehaven",
      "Mariah Dehaven"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Krista Divenere",
      "Luis Rodriguez"
     ],
     "a": [
      "Jessica Pimentel",
      "Andy Lubel"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Alessandra Cheretis",
      "Sue Cerrone"
     ],
     "a": [
      "Suzy Gay",
      "Jessica Zepeda"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Dawn Danner",
      "Krista Divenere"
     ],
     "a": [
      "Koren Dehaven",
      "Jessica Pimentel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Damon Cerrone",
      "Gary Steffer"
     ],
     "a": [
      "Bryan Askins",
      "Alfredo Arcila"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Scott Fujiwara",
      "Luis Rodriguez"
     ],
     "a": [
      "Mariah Dehaven",
      "Andy Lubel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Alessandra Cheretis",
      "Damon Cerrone"
     ],
     "a": [
      "Suzy Gay",
      "Bryan Askins"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Dawn Danner",
      "Gary Steffer"
     ],
     "a": [
      "Koren Dehaven",
      "Alfredo Arcila"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Sue Cerrone",
      "Luis Rodriguez"
     ],
     "a": [
      "Jessica Zepeda",
      "Stuart Hagenlock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Krista Divenere",
      "Scott Fujiwara"
     ],
     "a": [
      "Jessica Pimentel",
      "Andy Lubel"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Alessandra Cheretis",
      "Dawn Danner"
     ],
     "a": [
      "Jessica Zepeda",
      "Jessica Pimentel"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Sue Cerrone",
      "Krista Divenere"
     ],
     "a": [
      "Suzy Gay",
      "Koren Dehaven"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Damon Cerrone",
      "Scott Fujiwara"
     ],
     "a": [
      "Alfredo Arcila",
      "Mariah Dehaven"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Gary Steffer",
      "Luis Rodriguez"
     ],
     "a": [
      "Bryan Askins",
      "Stuart Hagenlock"
     ]
    }
   ],
   "subs": [
    "Dawn Danner",
    "Mariah Dehaven",
    "Koren Dehaven"
   ]
  },
  {
   "result": "away",
   "week": 6,
   "home": "Kitchen Ninjas",
   "away": "Bash and Crash",
   "time": "2026-08-11T19:00:00",
   "complete": true,
   "homePoints": 579,
   "awayPoints": 624,
   "homeGW": 11,
   "awayGW": 21,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ingrid Teasdale",
      "Divakar Tailor"
     ],
     "a": [
      "Jessica Zepeda",
      "Bryan Askins"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Karen Heier",
      "Frank Rivera"
     ],
     "a": [
      "Gabriela Melideo",
      "Bob Post"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Anshika Dubey",
      "Dhruva Poluru"
     ],
     "a": [
      "Tanya Sutantanon",
      "Stuart Hagenlock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Laura Lobb",
      "Ian Bolden"
     ],
     "a": [
      "Andriana Solano",
      "Alfredo Arcila"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ingrid Teasdale",
      "Karen Heier"
     ],
     "a": [
      "Jessica Zepeda",
      "Andriana Solano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Melinda Wood",
      "Anshika Dubey"
     ],
     "a": [
      "Gabriela Melideo",
      "Tanya Sutantanon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Divakar Tailor",
      "Frank Rivera"
     ],
     "a": [
      "Bryan Askins",
      "Alfredo Arcila"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kevin Wood",
      "Dhruva Poluru"
     ],
     "a": [
      "Bob Post",
      "Stuart Hagenlock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ingrid Teasdale",
      "Frank Rivera"
     ],
     "a": [
      "Jessica Zepeda",
      "Bob Post"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Karen Heier",
      "Divakar Tailor"
     ],
     "a": [
      "Andriana Solano",
      "Bryan Askins"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Laura Lobb",
      "Ian Bolden"
     ],
     "a": [
      "Gabriela Melideo",
      "Stuart Hagenlock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Melinda Wood",
      "Kevin Wood"
     ],
     "a": [
      "Tanya Sutantanon",
      "Alfredo Arcila"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Ingrid Teasdale",
      "Melinda Wood"
     ],
     "a": [
      "Jessica Zepeda",
      "Gabriela Melideo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Laura Lobb",
      "Anshika Dubey"
     ],
     "a": [
      "Andriana Solano",
      "Tanya Sutantanon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Divakar Tailor",
      "Kevin Wood"
     ],
     "a": [
      "Bryan Askins",
      "Bob Post"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Ian Bolden",
      "Dhruva Poluru"
     ],
     "a": [
      "Alfredo Arcila",
      "Stuart Hagenlock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Karen Heier",
      "Frank Rivera"
     ],
     "a": [
      "Jessica Zepeda",
      "Bryan Askins"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Melinda Wood",
      "Kevin Wood"
     ],
     "a": [
      "Gabriela Melideo",
      "Bob Post"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Laura Lobb",
      "Dhruva Poluru"
     ],
     "a": [
      "Tanya Sutantanon",
      "Alfredo Arcila"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Anshika Dubey",
      "Ian Bolden"
     ],
     "a": [
      "Andriana Solano",
      "Stuart Hagenlock"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ingrid Teasdale",
      "Karen Heier"
     ],
     "a": [
      "Jessica Zepeda",
      "Gabriela Melideo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Laura Lobb",
      "Anshika Dubey"
     ],
     "a": [
      "Andriana Solano",
      "Tanya Sutantanon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Divakar Tailor",
      "Frank Rivera"
     ],
     "a": [
      "Bryan Askins",
      "Bob Post"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Ian Bolden",
      "Dhruva Poluru"
     ],
     "a": [
      "Alfredo Arcila",
      "Stuart Hagenlock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Melinda Wood",
      "Divakar Tailor"
     ],
     "a": [
      "Jessica Zepeda",
      "Alfredo Arcila"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Ingrid Teasdale",
      "Frank Rivera"
     ],
     "a": [
      "Gabriela Melideo",
      "Bryan Askins"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Karen Heier",
      "Dhruva Poluru"
     ],
     "a": [
      "Tanya Sutantanon",
      "Bob Post"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Anshika Dubey",
      "Kevin Wood"
     ],
     "a": [
      "Andriana Solano",
      "Stuart Hagenlock"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Karen Heier",
      "Laura Lobb"
     ],
     "a": [
      "Jessica Zepeda",
      "Andriana Solano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Ingrid Teasdale",
      "Melinda Wood"
     ],
     "a": [
      "Gabriela Melideo",
      "Tanya Sutantanon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Frank Rivera",
      "Ian Bolden"
     ],
     "a": [
      "Bryan Askins",
      "Alfredo Arcila"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Divakar Tailor",
      "Kevin Wood"
     ],
     "a": [
      "Bob Post",
      "Stuart Hagenlock"
     ]
    }
   ],
   "subs": [
    "Kevin Wood",
    "Ingrid Teasdale",
    "Gabriela Melideo",
    "Tanya Sutantanon",
    "Bob Post",
    "Andriana Solano"
   ]
  },
  {
   "result": "home",
   "week": 6,
   "home": "Deadly Dinks",
   "away": "The Big Dill",
   "time": "2026-08-11T19:00:00",
   "complete": true,
   "homePoints": 621,
   "awayPoints": 596,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Sue Cerrone",
      "Damon Cerrone"
     ],
     "a": [
      "Katrina Koons",
      "Saurabh Kohli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kathleen Kane",
      "Scott Fujiwara"
     ],
     "a": [
      "Anne Nagy",
      "Jacques Beaudry-Losique"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Alessandra Cheretis",
      "Gary Steffer"
     ],
     "a": [
      "Tracey Lawson",
      "John Koons"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Krista Divenere",
      "Luis Rodriguez"
     ],
     "a": [
      "Joanne Gryski",
      "Merwynn Pagdanganan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kathleen Kane",
      "Sue Cerrone"
     ],
     "a": [
      "Anne Nagy",
      "Katrina Koons"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Alessandra Cheretis",
      "Krista Divenere"
     ],
     "a": [
      "Tracey Lawson",
      "Joanne Gryski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Damon Cerrone",
      "Scott Fujiwara"
     ],
     "a": [
      "Jacques Beaudry-Losique",
      "Saurabh Kohli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Gary Steffer",
      "Luis Rodriguez"
     ],
     "a": [
      "John Koons",
      "Merwynn Pagdanganan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sue Cerrone",
      "Damon Cerrone"
     ],
     "a": [
      "Katrina Koons",
      "Jacques Beaudry-Losique"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kathleen Kane",
      "Gary Steffer"
     ],
     "a": [
      "Anne Nagy",
      "Saurabh Kohli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Krista Divenere",
      "Scott Fujiwara"
     ],
     "a": [
      "Tracey Lawson",
      "Merwynn Pagdanganan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Alessandra Cheretis",
      "Luis Rodriguez"
     ],
     "a": [
      "Joanne Gryski",
      "John Koons"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Kathleen Kane",
      "Alessandra Cheretis"
     ],
     "a": [
      "Katrina Koons",
      "Joanne Gryski"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sue Cerrone",
      "Krista Divenere"
     ],
     "a": [
      "Anne Nagy",
      "Tracey Lawson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Damon Cerrone",
      "Gary Steffer"
     ],
     "a": [
      "Jacques Beaudry-Losique",
      "John Koons"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Scott Fujiwara",
      "Luis Rodriguez"
     ],
     "a": [
      "Saurabh Kohli",
      "Merwynn Pagdanganan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Alessandra Cheretis",
      "Damon Cerrone"
     ],
     "a": [
      "Anne Nagy",
      "Saurabh Kohli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kathleen Kane",
      "Scott Fujiwara"
     ],
     "a": [
      "Tracey Lawson",
      "Jacques Beaudry-Losique"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Krista Divenere",
      "Gary Steffer"
     ],
     "a": [
      "Katrina Koons",
      "Merwynn Pagdanganan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sue Cerrone",
      "Luis Rodriguez"
     ],
     "a": [
      "Joanne Gryski",
      "John Koons"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kathleen Kane",
      "Sue Cerrone"
     ],
     "a": [
      "Anne Nagy",
      "Katrina Koons"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Alessandra Cheretis",
      "Krista Divenere"
     ],
     "a": [
      "Tracey Lawson",
      "Joanne Gryski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Damon Cerrone",
      "Scott Fujiwara"
     ],
     "a": [
      "Jacques Beaudry-Losique",
      "Saurabh Kohli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Gary Steffer",
      "Luis Rodriguez"
     ],
     "a": [
      "John Koons",
      "Merwynn Pagdanganan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kathleen Kane",
      "Damon Cerrone"
     ],
     "a": [
      "Anne Nagy",
      "Jacques Beaudry-Losique"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Sue Cerrone",
      "Scott Fujiwara"
     ],
     "a": [
      "Tracey Lawson",
      "John Koons"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Alessandra Cheretis",
      "Luis Rodriguez"
     ],
     "a": [
      "Katrina Koons",
      "Merwynn Pagdanganan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Krista Divenere",
      "Gary Steffer"
     ],
     "a": [
      "Joanne Gryski",
      "Saurabh Kohli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kathleen Kane",
      "Alessandra Cheretis"
     ],
     "a": [
      "Katrina Koons",
      "Joanne Gryski"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sue Cerrone",
      "Krista Divenere"
     ],
     "a": [
      "Anne Nagy",
      "Tracey Lawson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Damon Cerrone",
      "Gary Steffer"
     ],
     "a": [
      "Saurabh Kohli",
      "Merwynn Pagdanganan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Scott Fujiwara",
      "Luis Rodriguez"
     ],
     "a": [
      "Jacques Beaudry-Losique",
      "John Koons"
     ]
    }
   ],
   "subs": [
    "Joanne Gryski"
   ]
  }
 ],
 "playoffs": [
  {
   "result": "home",
   "round": 4,
   "home": "The Big Dill",
   "away": "Deadly Dinks",
   "time": "2026-08-18T19:00:00",
   "complete": true,
   "homeSeed": 1,
   "awaySeed": 2,
   "provisional": true,
   "homePoints": 603,
   "awayPoints": 600,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Anne Nagy",
      "Joey Penvari"
     ],
     "a": [
      "Krista Divenere",
      "Hossam Hablas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Katrina Koons",
      "John Koons"
     ],
     "a": [
      "Sue Cerrone",
      "Scott Fujiwara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Tracey Lawson",
      "Jacques Beaudry-Losique"
     ],
     "a": [
      "Kathleen Kane",
      "Damon Cerrone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Susanne Katz",
      "Saurabh Kohli"
     ],
     "a": [
      "Alessandra Cheretis",
      "Gary Steffer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Anne Nagy",
      "Katrina Koons"
     ],
     "a": [
      "Krista Divenere",
      "Kathleen Kane"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Susanne Katz",
      "Tracey Lawson"
     ],
     "a": [
      "Sue Cerrone",
      "Alessandra Cheretis"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Joey Penvari",
      "John Koons"
     ],
     "a": [
      "Hossam Hablas",
      "Scott Fujiwara"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jacques Beaudry-Losique",
      "Merwynn Pagdanganan"
     ],
     "a": [
      "Gary Steffer",
      "Luis Rodriguez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Anne Nagy",
      "Joey Penvari"
     ],
     "a": [
      "Kathleen Kane",
      "Hossam Hablas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Katrina Koons",
      "John Koons"
     ],
     "a": [
      "Krista Divenere",
      "Scott Fujiwara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Tracey Lawson",
      "Saurabh Kohli"
     ],
     "a": [
      "Sue Cerrone",
      "Luis Rodriguez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Susanne Katz",
      "Merwynn Pagdanganan"
     ],
     "a": [
      "Alessandra Cheretis",
      "Damon Cerrone"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Anne Nagy",
      "Susanne Katz"
     ],
     "a": [
      "Kathleen Kane",
      "Alessandra Cheretis"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Katrina Koons",
      "Tracey Lawson"
     ],
     "a": [
      "Krista Divenere",
      "Sue Cerrone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "John Koons",
      "Jacques Beaudry-Losique"
     ],
     "a": [
      "Scott Fujiwara",
      "Damon Cerrone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Saurabh Kohli",
      "Merwynn Pagdanganan"
     ],
     "a": [
      "Gary Steffer",
      "Luis Rodriguez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Susanne Katz",
      "Joey Penvari"
     ],
     "a": [
      "Kathleen Kane",
      "Hossam Hablas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Anne Nagy",
      "Jacques Beaudry-Losique"
     ],
     "a": [
      "Krista Divenere",
      "Damon Cerrone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Katrina Koons",
      "Merwynn Pagdanganan"
     ],
     "a": [
      "Sue Cerrone",
      "Gary Steffer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Tracey Lawson",
      "Saurabh Kohli"
     ],
     "a": [
      "Alessandra Cheretis",
      "Luis Rodriguez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Anne Nagy",
      "Katrina Koons"
     ],
     "a": [
      "Krista Divenere",
      "Kathleen Kane"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Susanne Katz",
      "Tracey Lawson"
     ],
     "a": [
      "Sue Cerrone",
      "Alessandra Cheretis"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Joey Penvari",
      "Jacques Beaudry-Losique"
     ],
     "a": [
      "Scott Fujiwara",
      "Gary Steffer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 4,
     "as": 21,
     "h": [
      "John Koons",
      "Saurabh Kohli"
     ],
     "a": [
      "Hossam Hablas",
      "Damon Cerrone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Katrina Koons",
      "Joey Penvari"
     ],
     "a": [
      "Krista Divenere",
      "Scott Fujiwara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Anne Nagy",
      "John Koons"
     ],
     "a": [
      "Sue Cerrone",
      "Hossam Hablas"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Susanne Katz",
      "Merwynn Pagdanganan"
     ],
     "a": [
      "Kathleen Kane",
      "Luis Rodriguez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Tracey Lawson",
      "Jacques Beaudry-Losique"
     ],
     "a": [
      "Alessandra Cheretis",
      "Gary Steffer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Anne Nagy",
      "Susanne Katz"
     ],
     "a": [
      "Krista Divenere",
      "Sue Cerrone"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Katrina Koons",
      "Tracey Lawson"
     ],
     "a": [
      "Kathleen Kane",
      "Alessandra Cheretis"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Joey Penvari",
      "John Koons"
     ],
     "a": [
      "Hossam Hablas",
      "Scott Fujiwara"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Saurabh Kohli",
      "Merwynn Pagdanganan"
     ],
     "a": [
      "Damon Cerrone",
      "Luis Rodriguez"
     ]
    }
   ]
  }
 ],
 "extraPlayerIds": {
  "Marie O’Grady": "77c66e5f-4936-40f3-a1e8-254a20221b76"
 },
 "meta": {
  "matchesPlayed": 12,
  "weeks": "1-6",
  "totalPlayers": 66,
  "ratingHistoryWeeks": [
   1,
   2,
   3,
   4,
   5,
   6
  ],
  "divisionSlug": "e6a9b403",
  "hasPlayoffs": true,
  "typicalDay": "Tuesdays",
  "detailFile": "detail-e6a9b403.js",
  "clubName": "Dill Dinkers - Chantilly",
  "divisionName": "3.25 - 3.99",
  "leagueType": "local",
  "podCount": 1,
  "podNames": null,
  "podSource": "schedule",
  "reportedPods": null
 }
};
  DATA.meta.asOf = "2026-08-26";
  window.DATA = DATA;
  window.CPL_DATASETS = window.CPL_DATASETS || {};
  window.CPL_DATASETS["e6a9b403"] = DATA;
})();
