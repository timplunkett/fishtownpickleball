(function () {
  const DATA = {
 "players": [
  {
   "name": "Jordan Pirrello",
   "gender": "Female",
   "team": "Picklr Manahawkin",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 8,
   "losses": 0,
   "pointsWon": 168,
   "totalPointsAgainst": 96,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 72,
   "ppg": 21,
   "leagueRank": 5,
   "rating": 2,
   "ratingGames": 8,
   "confidence": 51,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -2.3,
   "playerId": "26ae3e1c-2dcf-4230-b108-314a476ec1ac"
  },
  {
   "name": "Caitlyn Suchanic",
   "gender": "Female",
   "team": "Picklr Newark",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 82,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 44,
   "ppg": 21,
   "leagueRank": 6,
   "rating": 1.4,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -2.4,
   "playerId": "97a33ff9-4337-4782-8906-226561b07c72"
  },
  {
   "name": "Tiffany Kaleikini",
   "gender": "Female",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 5,
   "losses": 0,
   "pointsWon": 105,
   "totalPointsAgainst": 62,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 43,
   "ppg": 21,
   "leagueRank": 3,
   "rating": 2.6,
   "ratingGames": 5,
   "confidence": 41,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -1.8,
   "playerId": "1a22e8aa-6986-49b8-b97b-4811087295e7"
  },
  {
   "name": "Sam Forin",
   "gender": "Male",
   "team": "PKLD",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 5,
   "losses": 0,
   "pointsWon": 105,
   "totalPointsAgainst": 66,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 39,
   "ppg": 21,
   "leagueRank": 10,
   "rating": 1.1,
   "ratingGames": 5,
   "confidence": 44,
   "strengthOfPartners": 2.4,
   "strengthOfOpponents": -1.7,
   "playerId": "02ee33bb-1cb7-4890-8af1-1ef99a62ddcd"
  },
  {
   "name": "Edrees Siddiqi",
   "gender": "Male",
   "team": "Picklr Newark",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 5,
   "losses": 0,
   "pointsWon": 105,
   "totalPointsAgainst": 68,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 37,
   "ppg": 21,
   "leagueRank": 8,
   "rating": 0.5,
   "ratingGames": 5,
   "confidence": 43,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -2.7,
   "playerId": "7210d098-aa54-482c-bda3-a660e2465760"
  },
  {
   "name": "Victoria Rolon",
   "gender": "Female",
   "team": "Jersey Devil Green",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 5,
   "losses": 0,
   "pointsWon": 105,
   "totalPointsAgainst": 68,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 37,
   "ppg": 21,
   "leagueRank": 1,
   "rating": 4.5,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.7,
   "playerId": "dad8c60e-028f-4716-a64d-8fcbaffc4a1f"
  },
  {
   "name": "Jason Ilkowitz",
   "gender": "Male",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 6,
   "wins": 6,
   "losses": 0,
   "pointsWon": 126,
   "totalPointsAgainst": 94,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 32,
   "ppg": 21,
   "leagueRank": 9,
   "rating": 1.6,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.9,
   "playerId": "dcd4414c-5981-4a70-a4dc-fd943d6d5e17"
  },
  {
   "name": "John Kim",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 4,
   "losses": 0,
   "pointsWon": 84,
   "totalPointsAgainst": 53,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 31,
   "ppg": 21,
   "leagueRank": 16,
   "rating": 1.2,
   "ratingGames": 4,
   "confidence": 39,
   "strengthOfPartners": 2.5,
   "strengthOfOpponents": -1.4,
   "playerId": "fd9a2aa3-24e6-4ac9-a460-316261a5e70d"
  },
  {
   "name": "Thania Padova",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 4,
   "losses": 0,
   "pointsWon": 84,
   "totalPointsAgainst": 55,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 29,
   "ppg": 21,
   "leagueRank": 2,
   "rating": 3.3,
   "ratingGames": 4,
   "confidence": 40,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.3,
   "playerId": "b8205aff-6aa6-4abc-886c-beb676c45c04"
  },
  {
   "name": "Jesse Frey",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 5,
   "losses": 0,
   "pointsWon": 105,
   "totalPointsAgainst": 78,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 27,
   "ppg": 21,
   "leagueRank": 4,
   "rating": 2.2,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -1,
   "playerId": "b7447736-d5f5-4863-b1a2-76895a257577"
  },
  {
   "name": "Lady Alvarado",
   "gender": "Female",
   "team": "Picklr Newark",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 5,
   "losses": 0,
   "pointsWon": 105,
   "totalPointsAgainst": 88,
   "mixedWins": 1,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 100,
   "diff": 17,
   "ppg": 21,
   "leagueRank": 13,
   "rating": 0.5,
   "ratingGames": 5,
   "confidence": 43,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -1,
   "playerId": "7a065026-7a09-4cbc-a998-e65ae5542136"
  },
  {
   "name": "Winston Lian",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 13,
   "losses": 1,
   "pointsWon": 290,
   "totalPointsAgainst": 220,
   "mixedWins": 7,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 92.9,
   "diff": 70,
   "ppg": 20.7,
   "leagueRank": 15,
   "rating": 2.5,
   "ratingGames": 14,
   "confidence": 67,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": -0.1,
   "playerId": "77e71d86-1be3-4df7-8c52-d0802eed8e08"
  },
  {
   "name": "Nada Abdelkarim",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 12,
   "losses": 1,
   "pointsWon": 270,
   "totalPointsAgainst": 204,
   "mixedWins": 5,
   "mixedLosses": 1,
   "genderWins": 7,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 92.3,
   "diff": 66,
   "ppg": 20.8,
   "leagueRank": 11,
   "rating": 4.3,
   "ratingGames": 13,
   "confidence": 69,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": -0.1,
   "playerId": "bf00658c-c290-41dd-96dd-e63f723fa6cc"
  },
  {
   "name": "Leh Mounelasy",
   "gender": "Male",
   "team": "Delco Turf & Pickle",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 11,
   "losses": 1,
   "pointsWon": 249,
   "totalPointsAgainst": 162,
   "mixedWins": 7,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 91.7,
   "diff": 87,
   "ppg": 20.8,
   "leagueRank": 7,
   "rating": 5,
   "ratingGames": 12,
   "confidence": 67,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.1,
   "playerId": "e07f4550-3ac9-4547-ae88-2b6075f0b8db"
  },
  {
   "name": "Xavier Yandoli",
   "gender": "Male",
   "team": "PKLD",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 11,
   "wins": 10,
   "losses": 1,
   "pointsWon": 229,
   "totalPointsAgainst": 158,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 90.9,
   "diff": 71,
   "ppg": 20.8,
   "leagueRank": 12,
   "rating": 3.5,
   "ratingGames": 11,
   "confidence": 62,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 0,
   "playerId": "51dd0df2-d833-4037-a26d-5da2eb3d570e"
  },
  {
   "name": "Jonathan Bautista",
   "gender": "Male",
   "team": "Picklr Manahawkin",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 166,
   "totalPointsAgainst": 126,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 87.5,
   "diff": 40,
   "ppg": 20.8,
   "leagueRank": 25,
   "rating": 0.2,
   "ratingGames": 8,
   "confidence": 54,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -2,
   "playerId": "3a1b8dea-5723-4b6b-b73c-d951a1e442b3"
  },
  {
   "name": "Nicki Ray",
   "gender": "Female",
   "team": "Picklr Manahawkin",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 166,
   "totalPointsAgainst": 134,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "3e927bec-47db-4d03-ac1c-81b5e9559762",
   "winPct": 87.5,
   "diff": 32,
   "ppg": 20.8,
   "leagueRank": 14,
   "rating": 3.6,
   "ratingGames": 8,
   "confidence": 55,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 1.5
  },
  {
   "name": "Anthony Simonetti",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 163,
   "totalPointsAgainst": 135,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 87.5,
   "diff": 28,
   "ppg": 20.4,
   "leagueRank": 28,
   "rating": 1.5,
   "ratingGames": 8,
   "confidence": 56,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.7,
   "playerId": "3a2b64a1-6eb6-41e4-92fe-8da3d95af11b"
  },
  {
   "name": "Christina Grosso",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 160,
   "totalPointsAgainst": 140,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 87.5,
   "diff": 20,
   "ppg": 20,
   "leagueRank": 44,
   "rating": 0,
   "ratingGames": 8,
   "confidence": 53,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -1.2,
   "playerId": "58f5778e-4b34-41c6-9a8f-60f7f8a49769"
  },
  {
   "name": "Lucy Li",
   "gender": "Female",
   "team": "LBF Pickleball",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 7,
   "losses": 1,
   "pointsWon": 162,
   "totalPointsAgainst": 143,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 4,
   "clutchLosses": 0,
   "playerId": "d22f8b69-76a6-41e0-8b04-c5dae68d9f69",
   "winPct": 87.5,
   "diff": 19,
   "ppg": 20.3,
   "leagueRank": 22,
   "rating": 2.2,
   "ratingGames": 8,
   "confidence": 53,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.4
  },
  {
   "name": "Josiah Kim",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 12,
   "losses": 2,
   "pointsWon": 286,
   "totalPointsAgainst": 185,
   "mixedWins": 7,
   "mixedLosses": 1,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 85.7,
   "diff": 101,
   "ppg": 20.4,
   "leagueRank": 17,
   "rating": 3.4,
   "ratingGames": 14,
   "confidence": 69,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": -0.5,
   "playerId": "de8e2a33-d691-4652-84ef-532b89f467bc"
  },
  {
   "name": "Carly Cebek",
   "gender": "Female",
   "team": "Picklr Newark",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 145,
   "totalPointsAgainst": 107,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 85.7,
   "diff": 38,
   "ppg": 20.7,
   "leagueRank": 18,
   "rating": 2.4,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.5,
   "playerId": "9ef81f5d-1061-40b3-8d42-9ccc0c2c5c79"
  },
  {
   "name": "George Vega Jr",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 145,
   "totalPointsAgainst": 113,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 85.7,
   "diff": 32,
   "ppg": 20.7,
   "leagueRank": 19,
   "rating": 2,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.4,
   "playerId": "be19bf10-b8a5-4626-8c10-f13ac708231d"
  },
  {
   "name": "Eden Ksendzovsky",
   "gender": "Male",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 141,
   "totalPointsAgainst": 110,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 85.7,
   "diff": 31,
   "ppg": 20.1,
   "leagueRank": 31,
   "rating": 0.5,
   "ratingGames": 7,
   "confidence": 50,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -1.3,
   "playerId": "75496a80-8064-40ae-ba4b-36c156d70885"
  },
  {
   "name": "Nicci Galioto",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 144,
   "totalPointsAgainst": 128,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 85.7,
   "diff": 16,
   "ppg": 20.6,
   "leagueRank": 43,
   "rating": 0.6,
   "ratingGames": 7,
   "confidence": 50,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.3,
   "playerId": "13c4d5cf-50d3-4156-95a0-aa4c45c19e20"
  },
  {
   "name": "Brandon Tsang",
   "gender": "Male",
   "team": "Montville",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 136,
   "totalPointsAgainst": 124,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 0,
   "playerId": "c80b5964-35f3-46b9-a0fa-9c3c9c673161",
   "winPct": 85.7,
   "diff": 12,
   "ppg": 19.4,
   "leagueRank": 57,
   "rating": 1.2,
   "ratingGames": 7,
   "confidence": 47,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.5
  },
  {
   "name": "Joe Johnson",
   "gender": "Male",
   "team": "Picklr Newark",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 13,
   "wins": 11,
   "losses": 2,
   "pointsWon": 262,
   "totalPointsAgainst": 199,
   "mixedWins": 6,
   "mixedLosses": 1,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 84.6,
   "diff": 63,
   "ppg": 20.2,
   "leagueRank": 30,
   "rating": 1.2,
   "ratingGames": 13,
   "confidence": 67,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -1.3,
   "playerId": "fc139d5b-7881-4bdf-bf06-91354a4deab7"
  },
  {
   "name": "Srilahari Kunchapu",
   "gender": "Female",
   "team": "Jersey Devil Green",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 11,
   "losses": 2,
   "pointsWon": 265,
   "totalPointsAgainst": 214,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 6,
   "genderLosses": 0,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 84.6,
   "diff": 51,
   "ppg": 20.4,
   "leagueRank": 20,
   "rating": 3.7,
   "ratingGames": 13,
   "confidence": 67,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.7,
   "playerId": "33e099cc-4164-43df-8b34-32fd7a5d9a46"
  },
  {
   "name": "Jadiel Rodriguez",
   "gender": "Male",
   "team": "PKLD",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 10,
   "losses": 2,
   "pointsWon": 247,
   "totalPointsAgainst": 188,
   "mixedWins": 4,
   "mixedLosses": 1,
   "genderWins": 6,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 83.3,
   "diff": 59,
   "ppg": 20.6,
   "leagueRank": 24,
   "rating": 2.3,
   "ratingGames": 12,
   "confidence": 63,
   "strengthOfPartners": 2,
   "strengthOfOpponents": 0.1,
   "playerId": "5bf1c3f0-d4cd-4904-aa20-410c03e530f1"
  },
  {
   "name": "Ahmed Aziz",
   "gender": "Male",
   "team": "PKLD",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 10,
   "losses": 2,
   "pointsWon": 241,
   "totalPointsAgainst": 191,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 5,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 50,
   "ppg": 20.1,
   "leagueRank": 34,
   "rating": 1.5,
   "ratingGames": 12,
   "confidence": 64,
   "strengthOfPartners": 2.6,
   "strengthOfOpponents": 0.2,
   "playerId": "086a95e6-d7ca-4ac7-8fec-b35b1110fbd1"
  },
  {
   "name": "Tracey Collins",
   "gender": "Female",
   "team": "PKLD",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 124,
   "totalPointsAgainst": 79,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 83.3,
   "diff": 45,
   "ppg": 20.7,
   "leagueRank": 21,
   "rating": 2,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 2,
   "strengthOfOpponents": -1.1,
   "playerId": "f01a9ccb-b72e-4980-bdc0-73ed5a72f92c"
  },
  {
   "name": "Andrew Martin",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 10,
   "losses": 2,
   "pointsWon": 243,
   "totalPointsAgainst": 201,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 6,
   "genderLosses": 0,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 83.3,
   "diff": 42,
   "ppg": 20.3,
   "leagueRank": 26,
   "rating": 2.6,
   "ratingGames": 12,
   "confidence": 65,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.3,
   "playerId": "e8b51e9c-3814-42e1-8413-2c1734514ea1"
  },
  {
   "name": "Chris Machuzak",
   "gender": "Male",
   "team": "Jersey Devil Navy",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 10,
   "losses": 2,
   "pointsWon": 241,
   "totalPointsAgainst": 203,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 5,
   "genderLosses": 0,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 83.3,
   "diff": 38,
   "ppg": 20.1,
   "leagueRank": 32,
   "rating": 2.3,
   "ratingGames": 12,
   "confidence": 66,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.1,
   "playerId": "dba4c9d8-6ffb-49ae-99d1-79c341a68de7"
  },
  {
   "name": "Paul Iacullo",
   "gender": "Male",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 124,
   "totalPointsAgainst": 91,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 83.3,
   "diff": 33,
   "ppg": 20.7,
   "leagueRank": 27,
   "rating": 1.4,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -0.9,
   "playerId": "76ed2cc0-dd44-484b-80ad-27ce53e644d1"
  },
  {
   "name": "Genifer Lefkowitz",
   "gender": "Female",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 121,
   "totalPointsAgainst": 96,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 25,
   "ppg": 20.2,
   "leagueRank": 36,
   "rating": 1.6,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -0.1,
   "playerId": "b93c7239-a974-467a-991e-b49159902fcf"
  },
  {
   "name": "Abby Zhang",
   "gender": "Female",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 123,
   "totalPointsAgainst": 99,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 24,
   "ppg": 20.5,
   "leagueRank": 33,
   "rating": 2,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.3,
   "playerId": "98abb8c4-ac0b-4c10-b711-3c4a188429a2"
  },
  {
   "name": "Courtney Skolka",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 124,
   "totalPointsAgainst": 102,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 83.3,
   "diff": 22,
   "ppg": 20.7,
   "leagueRank": 23,
   "rating": 2.3,
   "ratingGames": 6,
   "confidence": 47,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0.8,
   "playerId": "04e63587-956f-4c32-8ee3-4f255aad446c"
  },
  {
   "name": "Anshul Sahu",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 5,
   "losses": 1,
   "pointsWon": 123,
   "totalPointsAgainst": 102,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 83.3,
   "diff": 21,
   "ppg": 20.5,
   "leagueRank": 38,
   "rating": 0.8,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -0.3,
   "playerId": "d656c46a-7cee-458b-9bc7-0ae1c4becc20"
  },
  {
   "name": "Savan Patel",
   "gender": "Male",
   "team": "Picklr Newark",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 9,
   "losses": 2,
   "pointsWon": 225,
   "totalPointsAgainst": 190,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 81.8,
   "diff": 35,
   "ppg": 20.5,
   "leagueRank": 52,
   "rating": 0.7,
   "ratingGames": 11,
   "confidence": 62,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -1,
   "playerId": "cfd1cb28-21ad-43c7-bbac-fa013f72aba4"
  },
  {
   "name": "Cullen Curley",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 12,
   "losses": 3,
   "pointsWon": 302,
   "totalPointsAgainst": 251,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 7,
   "genderLosses": 1,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 80,
   "diff": 51,
   "ppg": 20.1,
   "leagueRank": 54,
   "rating": 1.1,
   "ratingGames": 15,
   "confidence": 70,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.7,
   "playerId": "8cebf901-66b9-41d0-963d-12dac7334c8f"
  },
  {
   "name": "Kalina Ye",
   "gender": "Female",
   "team": "Delco Turf & Pickle",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 8,
   "losses": 2,
   "pointsWon": 202,
   "totalPointsAgainst": 172,
   "mixedWins": 5,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 80,
   "diff": 30,
   "ppg": 20.2,
   "leagueRank": 45,
   "rating": 0.6,
   "ratingGames": 10,
   "confidence": 64,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": -0.3,
   "playerId": "37dd26f0-372e-4b75-8c8b-f16b72100f78"
  },
  {
   "name": "Carissa Baptista",
   "gender": "Female",
   "team": "Pickleball Kingdom Watchung",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 8,
   "losses": 2,
   "pointsWon": 205,
   "totalPointsAgainst": 177,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 80,
   "diff": 28,
   "ppg": 20.5,
   "leagueRank": 58,
   "rating": 1,
   "ratingGames": 10,
   "confidence": 60,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -0.1,
   "playerId": "ddfed357-6d2d-42ea-b48f-540cacd2409a"
  },
  {
   "name": "Christina Schulz",
   "gender": "Female",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 103,
   "totalPointsAgainst": 75,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 80,
   "diff": 28,
   "ppg": 20.6,
   "leagueRank": 29,
   "rating": 1.6,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -1.1,
   "playerId": "e5286531-2721-41b9-b79b-c5476d7fb1cb"
  },
  {
   "name": "Jeremy Chen",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 8,
   "losses": 2,
   "pointsWon": 203,
   "totalPointsAgainst": 178,
   "mixedWins": 4,
   "mixedLosses": 1,
   "genderWins": 4,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 80,
   "diff": 25,
   "ppg": 20.3,
   "leagueRank": 49,
   "rating": 0.8,
   "ratingGames": 10,
   "confidence": 61,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -0.1,
   "playerId": "3c293cfa-d13b-4c0d-8cfe-057058b886d8"
  },
  {
   "name": "Ariane Abadi",
   "gender": "Female",
   "team": "Forward",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 8,
   "losses": 2,
   "pointsWon": 198,
   "totalPointsAgainst": 174,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 6,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 80,
   "diff": 24,
   "ppg": 19.8,
   "leagueRank": 53,
   "rating": 1.5,
   "ratingGames": 10,
   "confidence": 61,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0,
   "playerId": "25df407c-f249-4c32-838c-09cd2b88e9e6"
  },
  {
   "name": "Christine Algozo",
   "gender": "Female",
   "team": "Montville",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 101,
   "totalPointsAgainst": 83,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 80,
   "diff": 18,
   "ppg": 20.2,
   "leagueRank": 55,
   "rating": 0.3,
   "ratingGames": 5,
   "confidence": 42,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -1.3,
   "playerId": "67afa47c-0543-4eb0-a949-fd28b870d20c"
  },
  {
   "name": "Mychal Villanueva",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 103,
   "totalPointsAgainst": 86,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 80,
   "diff": 17,
   "ppg": 20.6,
   "leagueRank": 39,
   "rating": 1.2,
   "ratingGames": 5,
   "confidence": 41,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.7,
   "playerId": "f9a4c12b-d9e3-40ae-a0c4-203c465508ce"
  },
  {
   "name": "Daniel Hadley",
   "gender": "Male",
   "team": "Jersey Devil Navy",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 101,
   "totalPointsAgainst": 87,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 80,
   "diff": 14,
   "ppg": 20.2,
   "leagueRank": 42,
   "rating": 0.8,
   "ratingGames": 5,
   "confidence": 49,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.9,
   "playerId": "23adcd68-130d-4176-b367-d3cd31260d21"
  },
  {
   "name": "David Barth",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 103,
   "totalPointsAgainst": 89,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 80,
   "diff": 14,
   "ppg": 20.6,
   "leagueRank": 41,
   "rating": 1,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.1,
   "playerId": "536d9ae8-df38-4a00-9a1f-c79b8d83b97f"
  },
  {
   "name": "Kamal D",
   "gender": "Male",
   "team": "Montville",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 101,
   "totalPointsAgainst": 88,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "c7f445ec-7b49-499b-a617-fcd7431ce02d",
   "winPct": 80,
   "diff": 13,
   "ppg": 20.2,
   "leagueRank": 64,
   "rating": -0.1,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -1.4
  },
  {
   "name": "Alex Glushek",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 102,
   "totalPointsAgainst": 90,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 80,
   "diff": 12,
   "ppg": 20.4,
   "leagueRank": 65,
   "rating": 0.3,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.6,
   "playerId": "65e58579-8b95-46f1-9e95-a3e53347de32"
  },
  {
   "name": "Jaspher Cosico",
   "gender": "Male",
   "team": "Jersey Devil Green",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 102,
   "totalPointsAgainst": 91,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 80,
   "diff": 11,
   "ppg": 20.4,
   "leagueRank": 51,
   "rating": 1.3,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.2,
   "playerId": "e7b2dec3-db28-4c84-9216-2176bfbbcb01"
  },
  {
   "name": "Farhan Chowdhury",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 4,
   "losses": 1,
   "pointsWon": 99,
   "totalPointsAgainst": 93,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 80,
   "diff": 6,
   "ppg": 19.8,
   "leagueRank": 69,
   "rating": 0.6,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.1,
   "playerId": "dda8a8bf-bf59-48a4-a56e-15b96fd18fde"
  },
  {
   "name": "Johanna Kreilick",
   "gender": "Female",
   "team": "Flemington",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 11,
   "losses": 3,
   "pointsWon": 284,
   "totalPointsAgainst": 249,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 8,
   "genderLosses": 0,
   "clutchWins": 4,
   "clutchLosses": 0,
   "winPct": 78.6,
   "diff": 35,
   "ppg": 20.3,
   "leagueRank": 37,
   "rating": 2.6,
   "ratingGames": 14,
   "confidence": 70,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.7,
   "playerId": "ccd0807d-67ac-4dbc-a7c7-4b4df3dea598"
  },
  {
   "name": "Carla Fonseca",
   "gender": "Female",
   "team": "Delco Turf & Pickle",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 9,
   "wins": 7,
   "losses": 2,
   "pointsWon": 171,
   "totalPointsAgainst": 145,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 77.8,
   "diff": 26,
   "ppg": 19,
   "leagueRank": 73,
   "rating": -0.1,
   "ratingGames": 9,
   "confidence": 58,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -0.9,
   "playerId": "4edf2ba3-82b0-4d6d-8bae-75a83ee645bd"
  },
  {
   "name": "Kelly Feng",
   "gender": "Female",
   "team": "Ballers Philly",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 10,
   "losses": 3,
   "pointsWon": 267,
   "totalPointsAgainst": 207,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 76.9,
   "diff": 60,
   "ppg": 20.5,
   "leagueRank": 35,
   "rating": 2.4,
   "ratingGames": 13,
   "confidence": 65,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -0.1,
   "playerId": "936fd285-0e07-4c08-94b0-57b3c19ac59e"
  },
  {
   "name": "Dylan Tjio",
   "gender": "Male",
   "team": "Picklr Newark",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 10,
   "losses": 3,
   "pointsWon": 263,
   "totalPointsAgainst": 215,
   "mixedWins": 2,
   "mixedLosses": 3,
   "genderWins": 8,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 76.9,
   "diff": 48,
   "ppg": 20.2,
   "leagueRank": 62,
   "rating": 1.7,
   "ratingGames": 13,
   "confidence": 63,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.8,
   "playerId": "cfde52cc-d4a3-4d57-bf17-121d9c5eb4ea"
  },
  {
   "name": "Jennifer Kasnadi",
   "gender": "Female",
   "team": "Picklr Newark",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 10,
   "losses": 3,
   "pointsWon": 254,
   "totalPointsAgainst": 231,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 6,
   "genderLosses": 1,
   "clutchWins": 5,
   "clutchLosses": 1,
   "winPct": 76.9,
   "diff": 23,
   "ppg": 19.5,
   "leagueRank": 90,
   "rating": -1,
   "ratingGames": 13,
   "confidence": 67,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.9,
   "playerId": "43e3e482-aa27-49c2-a18f-59a7abdbc7ba"
  },
  {
   "name": "Justin Lin",
   "gender": "Male",
   "team": "ACE Downingtown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 12,
   "losses": 4,
   "pointsWon": 325,
   "totalPointsAgainst": 239,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 6,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 75,
   "diff": 86,
   "ppg": 20.3,
   "leagueRank": 40,
   "rating": 3.1,
   "ratingGames": 16,
   "confidence": 72,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.1,
   "playerId": "b084b51a-054c-4a7f-b1a5-0cb26e4f669c"
  },
  {
   "name": "Jennifer Kline",
   "gender": "Female",
   "team": "Picklr Manahawkin",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 12,
   "losses": 4,
   "pointsWon": 310,
   "totalPointsAgainst": 225,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 7,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 75,
   "diff": 85,
   "ppg": 19.4,
   "leagueRank": 60,
   "rating": 2.5,
   "ratingGames": 16,
   "confidence": 69,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.5,
   "playerId": "9e7f633d-5cea-4462-b486-61612f133de4"
  },
  {
   "name": "Kiddi Vu",
   "gender": "Female",
   "team": "ACE Downingtown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 12,
   "losses": 4,
   "pointsWon": 310,
   "totalPointsAgainst": 237,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 6,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 75,
   "diff": 73,
   "ppg": 19.4,
   "leagueRank": 59,
   "rating": 3.1,
   "ratingGames": 16,
   "confidence": 71,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.2,
   "playerId": "8fd73a4d-a785-4575-b796-4af5e3cb2781"
  },
  {
   "name": "Diana Nguyen",
   "gender": "Female",
   "team": "Pickleball Kingdom Watchung",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 9,
   "losses": 3,
   "pointsWon": 240,
   "totalPointsAgainst": 180,
   "mixedWins": 7,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 75,
   "diff": 60,
   "ppg": 20,
   "leagueRank": 50,
   "rating": 2.6,
   "ratingGames": 12,
   "confidence": 65,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0,
   "playerId": "26337037-9e6a-4007-93ee-e2b083f30a03"
  },
  {
   "name": "Vinoth Baburao Venkatakrishnan",
   "gender": "Male",
   "team": "ACE Downingtown",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 9,
   "losses": 3,
   "pointsWon": 235,
   "totalPointsAgainst": 183,
   "mixedWins": 4,
   "mixedLosses": 1,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "8deca1b3-e530-4424-b4e2-f220bb3beacd",
   "winPct": 75,
   "diff": 52,
   "ppg": 19.6,
   "leagueRank": 63,
   "rating": 1.5,
   "ratingGames": 12,
   "confidence": 66,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.8
  },
  {
   "name": "Juan Millan",
   "gender": "Male",
   "team": "PKLD",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 9,
   "losses": 3,
   "pointsWon": 244,
   "totalPointsAgainst": 194,
   "mixedWins": 4,
   "mixedLosses": 1,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 75,
   "diff": 50,
   "ppg": 20.3,
   "leagueRank": 48,
   "rating": 2.6,
   "ratingGames": 12,
   "confidence": 63,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0.4,
   "playerId": "1e02d437-092e-4a23-92d9-c9a07fc25f2d"
  },
  {
   "name": "Dede Dolkar",
   "gender": "Female",
   "team": "Pickleball Kingdom Watchung",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 9,
   "losses": 3,
   "pointsWon": 240,
   "totalPointsAgainst": 205,
   "mixedWins": 6,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 75,
   "diff": 35,
   "ppg": 20,
   "leagueRank": 71,
   "rating": 0.7,
   "ratingGames": 12,
   "confidence": 65,
   "strengthOfPartners": 2.5,
   "strengthOfOpponents": 0.3,
   "playerId": "00f31bfd-e3ff-4a78-8f87-33a51ce4dde4"
  },
  {
   "name": "Kristina Salomia",
   "gender": "Female",
   "team": "Picklr Manahawkin",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 6,
   "losses": 2,
   "pointsWon": 164,
   "totalPointsAgainst": 133,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 75,
   "diff": 31,
   "ppg": 20.5,
   "leagueRank": 74,
   "rating": -0.6,
   "ratingGames": 8,
   "confidence": 50,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -1.9,
   "playerId": "9ea48ad1-b5f4-4a2c-a687-400dae5fe86b"
  },
  {
   "name": "Lewis Torres",
   "gender": "Male",
   "team": "ACE Downingtown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 6,
   "losses": 2,
   "pointsWon": 153,
   "totalPointsAgainst": 123,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 6,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 75,
   "diff": 30,
   "ppg": 19.1,
   "leagueRank": 66,
   "rating": 2.1,
   "ratingGames": 8,
   "confidence": 56,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.2,
   "playerId": "ccf24d18-560f-4ae8-ad75-8fc330f7c24f"
  },
  {
   "name": "Xiaowen Tang",
   "gender": "Female",
   "team": "ACE Downingtown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 6,
   "losses": 2,
   "pointsWon": 155,
   "totalPointsAgainst": 131,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 75,
   "diff": 24,
   "ppg": 19.4,
   "leagueRank": 77,
   "rating": 0.7,
   "ratingGames": 8,
   "confidence": 56,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": -1.9,
   "playerId": "4139644b-5400-4b24-b9c8-25cb0b7d9039"
  },
  {
   "name": "Leah Oneill",
   "gender": "Female",
   "team": "Picklr Newark",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 9,
   "losses": 3,
   "pointsWon": 236,
   "totalPointsAgainst": 212,
   "mixedWins": 5,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 75,
   "diff": 24,
   "ppg": 19.7,
   "leagueRank": 86,
   "rating": 0.7,
   "ratingGames": 12,
   "confidence": 65,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.7,
   "playerId": "f76a584d-94cf-4bb7-8c34-90e6c491ac10"
  },
  {
   "name": "Dion Brown",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 6,
   "losses": 2,
   "pointsWon": 157,
   "totalPointsAgainst": 144,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 75,
   "diff": 13,
   "ppg": 19.6,
   "leagueRank": 85,
   "rating": 0.4,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.1,
   "playerId": "4c6d1b49-9a66-4e43-8a49-cf56c2901a3b"
  },
  {
   "name": "Donavin Van Ee",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 3,
   "losses": 1,
   "pointsWon": 70,
   "totalPointsAgainst": 61,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 75,
   "diff": 9,
   "ppg": 17.5,
   "leagueRank": 151,
   "rating": 0.7,
   "ratingGames": 4,
   "confidence": 40,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": -0.8,
   "playerId": "80ff325f-8dc5-4306-98c3-a6e3025229ee"
  },
  {
   "name": "Jess Cox",
   "gender": "Female",
   "team": "Montville",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 3,
   "losses": 1,
   "pointsWon": 81,
   "totalPointsAgainst": 78,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 75,
   "diff": 3,
   "ppg": 20.3,
   "leagueRank": 138,
   "rating": -0.2,
   "ratingGames": 4,
   "confidence": 38,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.6,
   "playerId": "e8a46252-99c1-405e-857c-d52d9550717a"
  },
  {
   "name": "Brad Mandry",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 11,
   "losses": 4,
   "pointsWon": 300,
   "totalPointsAgainst": 274,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 73.3,
   "diff": 26,
   "ppg": 20,
   "leagueRank": 82,
   "rating": 1,
   "ratingGames": 15,
   "confidence": 71,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.1,
   "playerId": "16a5ef9a-49fe-4341-9626-8f566552010e"
  },
  {
   "name": "Matt Demarco",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 11,
   "losses": 4,
   "pointsWon": 290,
   "totalPointsAgainst": 273,
   "mixedWins": 6,
   "mixedLosses": 1,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 5,
   "clutchLosses": 1,
   "playerId": "6c182803-54c7-439a-b269-17b063a0b3a7",
   "winPct": 73.3,
   "diff": 17,
   "ppg": 19.3,
   "leagueRank": 94,
   "rating": 0.5,
   "ratingGames": 15,
   "confidence": 71,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.5
  },
  {
   "name": "Nick Tang",
   "gender": "Male",
   "team": "Delco Turf & Pickle",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 8,
   "losses": 3,
   "pointsWon": 221,
   "totalPointsAgainst": 177,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 72.7,
   "diff": 44,
   "ppg": 20.1,
   "leagueRank": 46,
   "rating": 4,
   "ratingGames": 11,
   "confidence": 66,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 1,
   "playerId": "45d9e8ec-442a-4b67-a73d-04d966da2d37"
  },
  {
   "name": "Paula Cushing",
   "gender": "Female",
   "team": "PKLD",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 8,
   "losses": 3,
   "pointsWon": 225,
   "totalPointsAgainst": 181,
   "mixedWins": 6,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 72.7,
   "diff": 44,
   "ppg": 20.5,
   "leagueRank": 61,
   "rating": 2.7,
   "ratingGames": 11,
   "confidence": 65,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0.6,
   "playerId": "f8a42c6f-43b2-4769-b0ed-a1d648353e04"
  },
  {
   "name": "Pam Politis",
   "gender": "Female",
   "team": "Picklr Newark",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 8,
   "losses": 3,
   "pointsWon": 212,
   "totalPointsAgainst": 171,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 72.7,
   "diff": 41,
   "ppg": 19.3,
   "leagueRank": 79,
   "rating": 1.8,
   "ratingGames": 11,
   "confidence": 60,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.5,
   "playerId": "6b6274a7-77d0-420a-8883-5cac081fdf4d"
  },
  {
   "name": "Tracy Wong",
   "gender": "Female",
   "team": "PKLD",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 8,
   "losses": 3,
   "pointsWon": 216,
   "totalPointsAgainst": 175,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 6,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 72.7,
   "diff": 41,
   "ppg": 19.6,
   "leagueRank": 72,
   "rating": 1.9,
   "ratingGames": 11,
   "confidence": 59,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.1,
   "playerId": "6c513ea5-3938-4f01-9071-f149cc1da268"
  },
  {
   "name": "Joshua Kim",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 8,
   "losses": 3,
   "pointsWon": 225,
   "totalPointsAgainst": 187,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 72.7,
   "diff": 38,
   "ppg": 20.5,
   "leagueRank": 56,
   "rating": 2.3,
   "ratingGames": 11,
   "confidence": 63,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 0.6,
   "playerId": "24c3c526-8dd1-4ed0-adcf-ca7857e8b0ec"
  },
  {
   "name": "Reggie Tiglao",
   "gender": "Male",
   "team": "Picklr Newark",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 8,
   "losses": 3,
   "pointsWon": 222,
   "totalPointsAgainst": 184,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 72.7,
   "diff": 38,
   "ppg": 20.2,
   "leagueRank": 70,
   "rating": 0.6,
   "ratingGames": 11,
   "confidence": 62,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -0.7,
   "playerId": "32dcadef-5ceb-4826-8e96-fc36508fba54"
  },
  {
   "name": "Beth Osipowitz",
   "gender": "Female",
   "team": "PKLD",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 8,
   "losses": 3,
   "pointsWon": 219,
   "totalPointsAgainst": 187,
   "mixedWins": 5,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 72.7,
   "diff": 32,
   "ppg": 19.9,
   "leagueRank": 75,
   "rating": 1.4,
   "ratingGames": 11,
   "confidence": 64,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": 0.4,
   "playerId": "3a71fcfb-81a0-45b4-b3fa-f52cc9cba49d"
  },
  {
   "name": "Arzu Alimjan",
   "gender": "Female",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 10,
   "losses": 4,
   "pointsWon": 268,
   "totalPointsAgainst": 233,
   "mixedWins": 5,
   "mixedLosses": 1,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 71.4,
   "diff": 35,
   "ppg": 19.1,
   "leagueRank": 91,
   "rating": 1.1,
   "ratingGames": 14,
   "confidence": 69,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.6,
   "playerId": "f0a67d80-8105-46c0-80d1-a7d68f1ff5f5"
  },
  {
   "name": "Richard Medel",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 141,
   "totalPointsAgainst": 112,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 71.4,
   "diff": 29,
   "ppg": 20.1,
   "leagueRank": 67,
   "rating": 1.9,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.7,
   "playerId": "d324675d-d202-498e-a936-c612ce344456"
  },
  {
   "name": "Ulyana Kitcmanuk",
   "gender": "Female",
   "team": "Picklr Fair Lawn",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 143,
   "totalPointsAgainst": 117,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 71.4,
   "diff": 26,
   "ppg": 20.4,
   "leagueRank": 47,
   "rating": 3.4,
   "ratingGames": 7,
   "confidence": 50,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.5,
   "playerId": "ac88a429-961b-4ab5-9dc0-469b8c72f228"
  },
  {
   "name": "Jason Feldman",
   "gender": "Male",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 139,
   "totalPointsAgainst": 122,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 71.4,
   "diff": 17,
   "ppg": 19.9,
   "leagueRank": 87,
   "rating": 1,
   "ratingGames": 7,
   "confidence": 50,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.1,
   "playerId": "5636cdc5-7a65-4202-abbb-5999eee35ab3"
  },
  {
   "name": "Yashraj Kurani",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 136,
   "totalPointsAgainst": 130,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "63950363-4747-4faf-b89a-eb88f8b9e81d",
   "winPct": 71.4,
   "diff": 6,
   "ppg": 19.4,
   "leagueRank": 108,
   "rating": 0.4,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.1
  },
  {
   "name": "Gerianne Mcmahon",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 126,
   "totalPointsAgainst": 123,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 71.4,
   "diff": 3,
   "ppg": 18,
   "leagueRank": 152,
   "rating": -1.4,
   "ratingGames": 7,
   "confidence": 51,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -1.3,
   "playerId": "a1336798-c89a-423e-b753-f7d34a842e8e"
  },
  {
   "name": "Christopher Monzon",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 5,
   "losses": 2,
   "pointsWon": 128,
   "totalPointsAgainst": 127,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "playerId": "b205e6a7-d62d-42bf-b2d5-e7e5d0c109ec",
   "winPct": 71.4,
   "diff": 1,
   "ppg": 18.3,
   "leagueRank": 147,
   "rating": -0.9,
   "ratingGames": 7,
   "confidence": 50,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": -0.1
  },
  {
   "name": "Jason Kwan",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 7,
   "losses": 3,
   "pointsWon": 197,
   "totalPointsAgainst": 169,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 70,
   "diff": 28,
   "ppg": 19.7,
   "leagueRank": 88,
   "rating": 0.5,
   "ratingGames": 10,
   "confidence": 63,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.9,
   "playerId": "00810f93-8951-43da-8134-bf956b7afb73"
  },
  {
   "name": "Anthony Prusich",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 7,
   "losses": 3,
   "pointsWon": 201,
   "totalPointsAgainst": 178,
   "mixedWins": 2,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 70,
   "diff": 23,
   "ppg": 20.1,
   "leagueRank": 78,
   "rating": 1.7,
   "ratingGames": 10,
   "confidence": 59,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.4,
   "playerId": "41cd934f-66b0-4f22-b2e1-74955db922ce"
  },
  {
   "name": "Gianna Medeiros",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 7,
   "losses": 3,
   "pointsWon": 194,
   "totalPointsAgainst": 182,
   "mixedWins": 4,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 70,
   "diff": 12,
   "ppg": 19.4,
   "leagueRank": 93,
   "rating": 1.1,
   "ratingGames": 10,
   "confidence": 63,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": 1.1,
   "playerId": "b63ec8b5-b659-4404-92b0-8e577c87534a"
  },
  {
   "name": "Emily Su",
   "gender": "Female",
   "team": "Pickleball Kingdom Watchung",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 9,
   "losses": 4,
   "pointsWon": 263,
   "totalPointsAgainst": 223,
   "mixedWins": 5,
   "mixedLosses": 0,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 69.2,
   "diff": 40,
   "ppg": 20.2,
   "leagueRank": 84,
   "rating": 1.6,
   "ratingGames": 13,
   "confidence": 62,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.1,
   "playerId": "027988d5-1c42-4102-b21a-bfce0434d664"
  },
  {
   "name": "Sarah Law",
   "gender": "Female",
   "team": "Montville",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 9,
   "losses": 4,
   "pointsWon": 252,
   "totalPointsAgainst": 222,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 69.2,
   "diff": 30,
   "ppg": 19.4,
   "leagueRank": 97,
   "rating": 1.6,
   "ratingGames": 13,
   "confidence": 64,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.1,
   "playerId": "b0666637-423b-42ed-b2a4-02a6d12164c2"
  },
  {
   "name": "Michael Fidelino",
   "gender": "Male",
   "team": "Picklr Manahawkin",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 11,
   "losses": 5,
   "pointsWon": 309,
   "totalPointsAgainst": 244,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 68.8,
   "diff": 65,
   "ppg": 19.3,
   "leagueRank": 83,
   "rating": 2.3,
   "ratingGames": 16,
   "confidence": 70,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0,
   "playerId": "8632a302-90a3-4332-b4d1-fccc0f692e8e"
  },
  {
   "name": "Brian Kline",
   "gender": "Male",
   "team": "Picklr Manahawkin",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 16,
   "wins": 11,
   "losses": 5,
   "pointsWon": 312,
   "totalPointsAgainst": 270,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 6,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 68.8,
   "diff": 42,
   "ppg": 19.5,
   "leagueRank": 92,
   "rating": 1.1,
   "ratingGames": 16,
   "confidence": 69,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0.1,
   "playerId": "418f9f50-d9f9-4806-bef5-5bd9763b240f"
  },
  {
   "name": "Scott Strong",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 11,
   "losses": 5,
   "pointsWon": 316,
   "totalPointsAgainst": 293,
   "mixedWins": 4,
   "mixedLosses": 4,
   "genderWins": 7,
   "genderLosses": 1,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 68.8,
   "diff": 23,
   "ppg": 19.8,
   "leagueRank": 99,
   "rating": 1.5,
   "ratingGames": 16,
   "confidence": 73,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -0.1,
   "playerId": "f4f395df-7e5a-4867-bcbc-30f8dbcfe77d"
  },
  {
   "name": "Jenny Shi",
   "gender": "Female",
   "team": "Delco Turf & Pickle",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 8,
   "losses": 4,
   "pointsWon": 241,
   "totalPointsAgainst": 208,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 66.7,
   "diff": 33,
   "ppg": 20.1,
   "leagueRank": 76,
   "rating": 3,
   "ratingGames": 12,
   "confidence": 66,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.9,
   "playerId": "219c61b6-fc5c-4031-a9f1-db266182cdd3"
  },
  {
   "name": "Todd Green",
   "gender": "Male",
   "team": "Montville",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 8,
   "losses": 4,
   "pointsWon": 234,
   "totalPointsAgainst": 207,
   "mixedWins": 3,
   "mixedLosses": 2,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 66.7,
   "diff": 27,
   "ppg": 19.5,
   "leagueRank": 105,
   "rating": 1,
   "ratingGames": 12,
   "confidence": 64,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.7,
   "playerId": "52db6510-81e5-4ca3-ae64-1f0bbe677f93"
  },
  {
   "name": "Alexandria Mlkvy",
   "gender": "Female",
   "team": "Ballers Philly",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 8,
   "losses": 4,
   "pointsWon": 233,
   "totalPointsAgainst": 209,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 66.7,
   "diff": 24,
   "ppg": 19.4,
   "leagueRank": 96,
   "rating": 1.9,
   "ratingGames": 12,
   "confidence": 66,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.2,
   "playerId": "3207fd7d-1bc1-44df-a915-8eb4019821db"
  },
  {
   "name": "Jeff Burke",
   "gender": "Male",
   "team": "PKLD",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 122,
   "totalPointsAgainst": 98,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 66.7,
   "diff": 24,
   "ppg": 20.3,
   "leagueRank": 95,
   "rating": -0.6,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 2.6,
   "strengthOfOpponents": -1.2,
   "playerId": "75ab4072-b50f-4593-8f1c-817d572394f7"
  },
  {
   "name": "Ricki Cohen",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 10,
   "losses": 5,
   "pointsWon": 287,
   "totalPointsAgainst": 269,
   "mixedWins": 8,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 66.7,
   "diff": 18,
   "ppg": 19.1,
   "leagueRank": 118,
   "rating": 0.9,
   "ratingGames": 15,
   "confidence": 72,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0,
   "playerId": "a9094665-d5af-440c-b9b1-05403739512c"
  },
  {
   "name": "Maggie Malloy",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 8,
   "losses": 4,
   "pointsWon": 219,
   "totalPointsAgainst": 203,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 16,
   "ppg": 18.3,
   "leagueRank": 122,
   "rating": 2.1,
   "ratingGames": 12,
   "confidence": 66,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.9,
   "playerId": "c1251904-fef6-4eb5-9b49-06c8335e3546"
  },
  {
   "name": "Jamie Hahn",
   "gender": "Female",
   "team": "Flemington",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 120,
   "totalPointsAgainst": 108,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 12,
   "ppg": 20,
   "leagueRank": 80,
   "rating": 2,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.8,
   "playerId": "17019012-f2ff-4e9a-958a-928369685b36"
  },
  {
   "name": "Jennifer Minehan",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 110,
   "totalPointsAgainst": 101,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 66.7,
   "diff": 9,
   "ppg": 18.3,
   "leagueRank": 100,
   "rating": 1.7,
   "ratingGames": 6,
   "confidence": 53,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.4,
   "playerId": "e379e47b-dcde-4adb-8cc6-76e5660c457e"
  },
  {
   "name": "Shania Bui",
   "gender": "Female",
   "team": "Bounce Tempest",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 8,
   "losses": 4,
   "pointsWon": 226,
   "totalPointsAgainst": 221,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 5,
   "clutchLosses": 1,
   "winPct": 66.7,
   "diff": 5,
   "ppg": 18.8,
   "leagueRank": 128,
   "rating": 0.2,
   "ratingGames": 12,
   "confidence": 67,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.2,
   "playerId": "714331ee-d124-483d-a89e-11d1431a7fca"
  },
  {
   "name": "Gabby Frieder",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 113,
   "totalPointsAgainst": 109,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 66.7,
   "diff": 4,
   "ppg": 18.8,
   "leagueRank": 130,
   "rating": 0.5,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.1,
   "playerId": "b3e8de81-d69a-4912-b366-f6b66ea6dd8e"
  },
  {
   "name": "Calvin Zheng",
   "gender": "Male",
   "team": "LBF Pickleball",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 117,
   "totalPointsAgainst": 117,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 66.7,
   "diff": 0,
   "ppg": 19.5,
   "leagueRank": 111,
   "rating": 1.5,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0.5,
   "playerId": "d8b0c937-6eb8-4ed3-8e30-f487ecd428e2"
  },
  {
   "name": "Natalie Ruiz",
   "gender": "Female",
   "team": "Montville",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 118,
   "totalPointsAgainst": 118,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 1,
   "playerId": "15beb650-644a-4445-ae84-86c0cdeaa1bc",
   "winPct": 66.7,
   "diff": 0,
   "ppg": 19.7,
   "leagueRank": 126,
   "rating": 0.6,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 1.1
  },
  {
   "name": "Spencer Day",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 3,
   "wins": 2,
   "losses": 1,
   "pointsWon": 58,
   "totalPointsAgainst": 59,
   "mixedWins": 0,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 66.7,
   "diff": -1,
   "ppg": 19.3,
   "leagueRank": 260,
   "rating": -0.7,
   "ratingGames": 3,
   "confidence": 35,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.3,
   "playerId": "2367463f-18a3-4ac8-8ab2-ab7bebb2ba84"
  },
  {
   "name": "Abdullah Osman",
   "gender": "Male",
   "team": "Montville",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 9,
   "losses": 5,
   "pointsWon": 265,
   "totalPointsAgainst": 257,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 5,
   "clutchLosses": 1,
   "winPct": 64.3,
   "diff": 8,
   "ppg": 18.9,
   "leagueRank": 150,
   "rating": -0.8,
   "ratingGames": 14,
   "confidence": 67,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.3,
   "playerId": "c8f3b265-67a8-412c-84f5-aee92a913aac"
  },
  {
   "name": "Dylan Mich",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 7,
   "losses": 4,
   "pointsWon": 219,
   "totalPointsAgainst": 178,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 63.6,
   "diff": 41,
   "ppg": 19.9,
   "leagueRank": 81,
   "rating": 2.9,
   "ratingGames": 11,
   "confidence": 66,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0,
   "playerId": "b80d7617-6e67-4e13-b2ab-fb48922f4064"
  },
  {
   "name": "Linda Liu",
   "gender": "Female",
   "team": "Jersey Devil Green",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 7,
   "losses": 4,
   "pointsWon": 214,
   "totalPointsAgainst": 185,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 6,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 63.6,
   "diff": 29,
   "ppg": 19.5,
   "leagueRank": 113,
   "rating": 0.9,
   "ratingGames": 11,
   "confidence": 63,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.1,
   "playerId": "3ab0ff4a-df0d-41fa-8602-059d287882ef"
  },
  {
   "name": "Ryan Lehrfeld",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 7,
   "losses": 4,
   "pointsWon": 216,
   "totalPointsAgainst": 195,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 63.6,
   "diff": 21,
   "ppg": 19.6,
   "leagueRank": 102,
   "rating": 2.1,
   "ratingGames": 11,
   "confidence": 65,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.2,
   "playerId": "cfc63dad-7d45-4fa6-810d-5d3bbc7619ca"
  },
  {
   "name": "Rebecca Durda",
   "gender": "Female",
   "team": "Pickle Juice Blackwood",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 7,
   "losses": 4,
   "pointsWon": 222,
   "totalPointsAgainst": 206,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 3,
   "playerId": "e65bcc7b-3862-4331-868f-6abe34bfbfe6",
   "winPct": 63.6,
   "diff": 16,
   "ppg": 20.2,
   "leagueRank": 106,
   "rating": 1.1,
   "ratingGames": 11,
   "confidence": 68,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.2
  },
  {
   "name": "Kong Vu",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 7,
   "losses": 4,
   "pointsWon": 213,
   "totalPointsAgainst": 202,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 63.6,
   "diff": 11,
   "ppg": 19.4,
   "leagueRank": 124,
   "rating": 1.1,
   "ratingGames": 11,
   "confidence": 65,
   "strengthOfPartners": -1,
   "strengthOfOpponents": -0.3,
   "playerId": "1d44d478-17dd-41c5-95e2-7010889b33ba"
  },
  {
   "name": "Allan Orchard",
   "gender": "Male",
   "team": "LBF Pickleball",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 159,
   "totalPointsAgainst": 124,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 62.5,
   "diff": 35,
   "ppg": 19.9,
   "leagueRank": 68,
   "rating": 3.5,
   "ratingGames": 8,
   "confidence": 57,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.2,
   "playerId": "4f34c672-f457-467f-98d8-7d5d6c8add16"
  },
  {
   "name": "Maria Valencia",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 152,
   "totalPointsAgainst": 121,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "e7f278dd-8790-4223-9d89-074a9da7b0a1",
   "winPct": 62.5,
   "diff": 31,
   "ppg": 19,
   "leagueRank": 104,
   "rating": 2.3,
   "ratingGames": 8,
   "confidence": 55,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0
  },
  {
   "name": "Khushi Shah",
   "gender": "Female",
   "team": "Pickleball Kingdom Watchung",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 159,
   "totalPointsAgainst": 138,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 62.5,
   "diff": 21,
   "ppg": 19.9,
   "leagueRank": 114,
   "rating": 1.3,
   "ratingGames": 8,
   "confidence": 55,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.3,
   "playerId": "98a6fa2e-b59e-4f40-bc5c-8899d299da49"
  },
  {
   "name": "Michelle Burke",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 152,
   "totalPointsAgainst": 138,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "48ed972d-ae17-408b-860e-6f122d0e4e9b",
   "winPct": 62.5,
   "diff": 14,
   "ppg": 19,
   "leagueRank": 136,
   "rating": 0,
   "ratingGames": 8,
   "confidence": 56,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.6
  },
  {
   "name": "Karen Rodriguez",
   "gender": "Female",
   "team": "Ballers Philly",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 8,
   "losses": 5,
   "pointsWon": 247,
   "totalPointsAgainst": 194,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 61.5,
   "diff": 53,
   "ppg": 19,
   "leagueRank": 101,
   "rating": 2.3,
   "ratingGames": 13,
   "confidence": 69,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.7,
   "playerId": "c9dcda58-8b67-418c-8aa5-6eb3c1fa50ba"
  },
  {
   "name": "Brianna Burns",
   "gender": "Female",
   "team": "PKLD",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 8,
   "losses": 5,
   "pointsWon": 257,
   "totalPointsAgainst": 214,
   "mixedWins": 5,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 61.5,
   "diff": 43,
   "ppg": 19.8,
   "leagueRank": 107,
   "rating": 2.2,
   "ratingGames": 13,
   "confidence": 64,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": 0.6,
   "playerId": "8fd0c63a-29f9-463e-baf6-fd48281231dc"
  },
  {
   "name": "Olivia Schaller",
   "gender": "Female",
   "team": "Jersey Devil Green",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 8,
   "losses": 5,
   "pointsWon": 250,
   "totalPointsAgainst": 217,
   "mixedWins": 2,
   "mixedLosses": 3,
   "genderWins": 6,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 61.5,
   "diff": 33,
   "ppg": 19.2,
   "leagueRank": 115,
   "rating": 1.6,
   "ratingGames": 13,
   "confidence": 68,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.3,
   "playerId": "84c96e34-809c-4b34-9005-8ea76ca6a233"
  },
  {
   "name": "Isobel Harvey",
   "gender": "Female",
   "team": "Ballers Philly",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 8,
   "losses": 5,
   "pointsWon": 253,
   "totalPointsAgainst": 221,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 61.5,
   "diff": 32,
   "ppg": 19.5,
   "leagueRank": 112,
   "rating": 2,
   "ratingGames": 13,
   "confidence": 69,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.3,
   "playerId": "a874ce54-5e12-49d7-a69a-cb9457b64ddb"
  },
  {
   "name": "Taylor Lambe",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 8,
   "losses": 5,
   "pointsWon": 242,
   "totalPointsAgainst": 239,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 61.5,
   "diff": 3,
   "ppg": 18.6,
   "leagueRank": 155,
   "rating": 0,
   "ratingGames": 13,
   "confidence": 68,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.1,
   "playerId": "bbfe7f09-94bd-4942-82a2-0590410c4d9e"
  },
  {
   "name": "Gwyneth Geressy",
   "gender": "Female",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 101,
   "totalPointsAgainst": 77,
   "mixedWins": 0,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 60,
   "diff": 24,
   "ppg": 20.2,
   "leagueRank": 103,
   "rating": 0.7,
   "ratingGames": 5,
   "confidence": 44,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -1.5,
   "playerId": "2ce6aa6c-0900-43f9-9595-78170be6d514"
  },
  {
   "name": "Kali Lerner",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 88,
   "totalPointsAgainst": 66,
   "mixedWins": 1,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 60,
   "diff": 22,
   "ppg": 17.6,
   "leagueRank": 134,
   "rating": 1.5,
   "ratingGames": 5,
   "confidence": 43,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.7,
   "playerId": "0dbb0642-fc0f-4763-98e1-cdd1815b470d"
  },
  {
   "name": "Christina Juliano",
   "gender": "Female",
   "team": "Pickle Juice Blackwood",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 6,
   "losses": 4,
   "pointsWon": 200,
   "totalPointsAgainst": 179,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 60,
   "diff": 21,
   "ppg": 20,
   "leagueRank": 116,
   "rating": 0.7,
   "ratingGames": 10,
   "confidence": 64,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -1,
   "playerId": "e876b411-bfee-4ab8-ac66-8bbce87eaeb1"
  },
  {
   "name": "Vito Nucci",
   "gender": "Male",
   "team": "Pickle Juice Blackwood",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 101,
   "totalPointsAgainst": 82,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 60,
   "diff": 19,
   "ppg": 20.2,
   "leagueRank": 89,
   "rating": 1.3,
   "ratingGames": 5,
   "confidence": 41,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": -1.4,
   "playerId": "29143d36-b76c-4eb5-9aa4-605dbb30a37e"
  },
  {
   "name": "Chris Hudak",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 6,
   "losses": 4,
   "pointsWon": 189,
   "totalPointsAgainst": 170,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 60,
   "diff": 19,
   "ppg": 18.9,
   "leagueRank": 139,
   "rating": 1.1,
   "ratingGames": 10,
   "confidence": 63,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.3,
   "playerId": "448b9c1e-2ff4-4487-b61f-2626655a5544"
  },
  {
   "name": "Virginia Alves",
   "gender": "Female",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 9,
   "losses": 6,
   "pointsWon": 293,
   "totalPointsAgainst": 274,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 60,
   "diff": 19,
   "ppg": 19.5,
   "leagueRank": 141,
   "rating": 0.5,
   "ratingGames": 15,
   "confidence": 66,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0,
   "playerId": "6e4d4fbd-b6db-4c2e-8381-65700850bf3e"
  },
  {
   "name": "Adam Lowther",
   "gender": "Male",
   "team": "Jersey Devil Navy",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 6,
   "losses": 4,
   "pointsWon": 198,
   "totalPointsAgainst": 179,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 60,
   "diff": 19,
   "ppg": 19.8,
   "leagueRank": 121,
   "rating": 1.4,
   "ratingGames": 10,
   "confidence": 63,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.1,
   "playerId": "fc25c569-51b2-46a9-9dde-88cf56493e62"
  },
  {
   "name": "Brittani Rivera",
   "gender": "Female",
   "team": "Jersey Pickleball Club",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 99,
   "totalPointsAgainst": 82,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 60,
   "diff": 17,
   "ppg": 19.8,
   "leagueRank": 120,
   "rating": 0,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -1.7,
   "playerId": "fc3dfbe0-497b-4dc7-baa3-d7cd3abf6f55"
  },
  {
   "name": "Bruno Maguino",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 94,
   "totalPointsAgainst": 80,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 60,
   "diff": 14,
   "ppg": 18.8,
   "leagueRank": 132,
   "rating": 1.5,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -0.3,
   "playerId": "116a8ef1-357a-4eda-a100-84896842bdb9"
  },
  {
   "name": "Sal Cocuzza",
   "gender": "Male",
   "team": "Montville",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 98,
   "totalPointsAgainst": 84,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "665c8622-ccbc-4273-9af7-fd9d8840581a",
   "winPct": 60,
   "diff": 14,
   "ppg": 19.6,
   "leagueRank": 98,
   "rating": 1.8,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.3
  },
  {
   "name": "Juliet Deguida",
   "gender": "Female",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 101,
   "totalPointsAgainst": 88,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 60,
   "diff": 13,
   "ppg": 20.2,
   "leagueRank": 133,
   "rating": -1.5,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -2.2,
   "playerId": "44d9bc29-4d21-4c02-891d-9b83b3db8b24"
  },
  {
   "name": "Jonathan Macqueen",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 10,
   "wins": 6,
   "losses": 4,
   "pointsWon": 197,
   "totalPointsAgainst": 185,
   "mixedWins": 2,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 60,
   "diff": 12,
   "ppg": 19.7,
   "leagueRank": 125,
   "rating": 1.5,
   "ratingGames": 10,
   "confidence": 62,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.7,
   "playerId": "9aa0ff6c-0210-4a91-885f-ae3d4813f1c3"
  },
  {
   "name": "Yosuke Kawai",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 95,
   "totalPointsAgainst": 84,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 60,
   "diff": 11,
   "ppg": 19,
   "leagueRank": 117,
   "rating": 1.4,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.2,
   "playerId": "4250b78c-2dbc-43e5-a044-608debedef8c"
  },
  {
   "name": "Michele Costigan",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 98,
   "totalPointsAgainst": 87,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 60,
   "diff": 11,
   "ppg": 19.6,
   "leagueRank": 127,
   "rating": -0.5,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -1.5,
   "playerId": "fda078f4-e367-425d-9f16-501fdb5088e8"
  },
  {
   "name": "Kyle Kelly",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 91,
   "totalPointsAgainst": 82,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 60,
   "diff": 9,
   "ppg": 18.2,
   "leagueRank": 142,
   "rating": 0.7,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.3,
   "playerId": "e0faca04-4875-4806-b0a3-4830f4dcd52e"
  },
  {
   "name": "Lianhong Li",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 99,
   "totalPointsAgainst": 91,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 60,
   "diff": 8,
   "ppg": 19.8,
   "leagueRank": 123,
   "rating": 0.6,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.4,
   "playerId": "2ca1f9df-4501-489e-8992-32da61c98792"
  },
  {
   "name": "Alison Mento",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 101,
   "totalPointsAgainst": 93,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 60,
   "diff": 8,
   "ppg": 20.2,
   "leagueRank": 109,
   "rating": 0.4,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.3,
   "playerId": "6ae69c4c-8947-4742-9fc2-f82d124c0622"
  },
  {
   "name": "David Aliquo",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 94,
   "totalPointsAgainst": 86,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "ac3c96d1-826e-47ef-be99-6e97e16867b4",
   "winPct": 60,
   "diff": 8,
   "ppg": 18.8,
   "leagueRank": 137,
   "rating": 0.2,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.3
  },
  {
   "name": "Holden Lenoff",
   "gender": "Male",
   "team": "Pickle Juice Blackwood",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 101,
   "totalPointsAgainst": 95,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "3f06f7a5-cf95-4a74-bdc0-38a080fd0a6c",
   "winPct": 60,
   "diff": 6,
   "ppg": 20.2,
   "leagueRank": 119,
   "rating": 0.7,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": -0.3
  },
  {
   "name": "Monique Panajon",
   "gender": "Female",
   "team": "Picklr Fair Lawn",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 97,
   "totalPointsAgainst": 92,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 60,
   "diff": 5,
   "ppg": 19.4,
   "leagueRank": 146,
   "rating": -0.3,
   "ratingGames": 5,
   "confidence": 44,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.6,
   "playerId": "67690e35-0a44-4b4e-93c0-4d4ac5e6031b"
  },
  {
   "name": "Carlos Idrovo",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 90,
   "totalPointsAgainst": 87,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 60,
   "diff": 3,
   "ppg": 18,
   "leagueRank": 181,
   "rating": -0.7,
   "ratingGames": 5,
   "confidence": 43,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.4,
   "playerId": "5c6366e8-1fad-44ee-bf38-4ba5d838769d"
  },
  {
   "name": "Keith Brittingham",
   "gender": "Male",
   "team": "Picklr Newark",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 94,
   "totalPointsAgainst": 91,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 60,
   "diff": 3,
   "ppg": 18.8,
   "leagueRank": 173,
   "rating": -1,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -1.1,
   "playerId": "c9f0e72d-9f24-4740-ae4e-79fb3628e2f0"
  },
  {
   "name": "Joseph Roque",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 92,
   "totalPointsAgainst": 90,
   "mixedWins": 0,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 60,
   "diff": 2,
   "ppg": 18.4,
   "leagueRank": 158,
   "rating": 0,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0,
   "playerId": "3673e8d2-fc3b-4ec2-b9f2-e890b052b93a"
  },
  {
   "name": "Benji Berry",
   "gender": "Male",
   "team": "Jersey Devil Green",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 3,
   "losses": 2,
   "pointsWon": 96,
   "totalPointsAgainst": 94,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 60,
   "diff": 2,
   "ppg": 19.2,
   "leagueRank": 148,
   "rating": 0.8,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": 2.1,
   "strengthOfOpponents": 1.6,
   "playerId": "ba2074e2-3e52-477b-a44e-54ce33392484"
  },
  {
   "name": "Alex Kustas",
   "gender": "Male",
   "team": "Jersey Devil Navy",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 7,
   "losses": 5,
   "pointsWon": 241,
   "totalPointsAgainst": 204,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 7,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 58.3,
   "diff": 37,
   "ppg": 20.1,
   "leagueRank": 110,
   "rating": 1.2,
   "ratingGames": 12,
   "confidence": 63,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.3,
   "playerId": "08b7041c-a90b-47ba-802a-5f71e6b98999"
  },
  {
   "name": "Esther Yoon",
   "gender": "Female",
   "team": "PKLD",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 7,
   "losses": 5,
   "pointsWon": 232,
   "totalPointsAgainst": 212,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 58.3,
   "diff": 20,
   "ppg": 19.3,
   "leagueRank": 144,
   "rating": 0.9,
   "ratingGames": 12,
   "confidence": 64,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": 0.7,
   "playerId": "7d70ad57-c02f-47cc-bdd2-e330a7fed56e"
  },
  {
   "name": "Isabel Laroque",
   "gender": "Female",
   "team": "Forward",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 7,
   "losses": 5,
   "pointsWon": 222,
   "totalPointsAgainst": 217,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 58.3,
   "diff": 5,
   "ppg": 18.5,
   "leagueRank": 156,
   "rating": 1.2,
   "ratingGames": 12,
   "confidence": 66,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.6,
   "playerId": "caecaf69-b1c0-4093-b374-64b76698e68f"
  },
  {
   "name": "Taylor Johns",
   "gender": "Female",
   "team": "Jersey Devil Navy",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 7,
   "losses": 5,
   "pointsWon": 228,
   "totalPointsAgainst": 227,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 58.3,
   "diff": 1,
   "ppg": 19,
   "leagueRank": 160,
   "rating": -0.5,
   "ratingGames": 12,
   "confidence": 66,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.1,
   "playerId": "7e92032d-7d47-485c-8641-ae8a7af4e3ac"
  },
  {
   "name": "Colleen Van Ee",
   "gender": "Female",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 8,
   "losses": 6,
   "pointsWon": 267,
   "totalPointsAgainst": 243,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 57.1,
   "diff": 24,
   "ppg": 19.1,
   "leagueRank": 153,
   "rating": 1,
   "ratingGames": 14,
   "confidence": 70,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.3,
   "playerId": "272b1d43-1434-47d7-bafd-7451208e6f44"
  },
  {
   "name": "Alexandra Sierer",
   "gender": "Female",
   "team": "Montville",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 8,
   "losses": 6,
   "pointsWon": 266,
   "totalPointsAgainst": 244,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 57.1,
   "diff": 22,
   "ppg": 19,
   "leagueRank": 145,
   "rating": 1.7,
   "ratingGames": 14,
   "confidence": 68,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": -0.1,
   "playerId": "7d8c7d39-daa6-486b-9439-c19d71815565"
  },
  {
   "name": "Samuel Lee",
   "gender": "Male",
   "team": "Ballers Philly",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 8,
   "losses": 6,
   "pointsWon": 269,
   "totalPointsAgainst": 252,
   "mixedWins": 6,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 57.1,
   "diff": 17,
   "ppg": 19.2,
   "leagueRank": 149,
   "rating": 1.3,
   "ratingGames": 14,
   "confidence": 69,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.5,
   "playerId": "b07b7480-a964-459c-b47e-5c0f4a8774e9"
  },
  {
   "name": "Ali Bhimji",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 141,
   "totalPointsAgainst": 127,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 3,
   "playerId": "3651f648-493a-4517-8085-a8b9cb086c07",
   "winPct": 57.1,
   "diff": 14,
   "ppg": 20.1,
   "leagueRank": 143,
   "rating": -0.9,
   "ratingGames": 7,
   "confidence": 54,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -1.3
  },
  {
   "name": "Nikki Koons",
   "gender": "Female",
   "team": "Picklr Exton",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 133,
   "totalPointsAgainst": 123,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 57.1,
   "diff": 10,
   "ppg": 19,
   "leagueRank": 131,
   "rating": 1.4,
   "ratingGames": 7,
   "confidence": 51,
   "strengthOfPartners": -2.5,
   "strengthOfOpponents": -0.9,
   "playerId": "51eba5fc-d8dc-417a-a4de-051515751377"
  },
  {
   "name": "Sebastian Fas",
   "gender": "Male",
   "team": "Ballers Philly",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 126,
   "totalPointsAgainst": 123,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 57.1,
   "diff": 3,
   "ppg": 18,
   "leagueRank": 176,
   "rating": -0.1,
   "ratingGames": 7,
   "confidence": 54,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.2,
   "playerId": "afe34a52-058c-4d46-a46f-6bad7211195f"
  },
  {
   "name": "Leanna Coello",
   "gender": "Female",
   "team": "Picklr Fair Lawn",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 133,
   "totalPointsAgainst": 133,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 57.1,
   "diff": 0,
   "ppg": 19,
   "leagueRank": 168,
   "rating": -0.2,
   "ratingGames": 7,
   "confidence": 54,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.3,
   "playerId": "3adaa5eb-232f-4c80-af5b-81644f486e58"
  },
  {
   "name": "Eric Padernilla",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 128,
   "totalPointsAgainst": 133,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 57.1,
   "diff": -5,
   "ppg": 18.3,
   "leagueRank": 187,
   "rating": -0.9,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.2,
   "playerId": "4cfe6084-c26a-46dd-8be0-c1abc2518176"
  },
  {
   "name": "Mary Brashier",
   "gender": "Female",
   "team": "Flemington",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 14,
   "wins": 8,
   "losses": 6,
   "pointsWon": 257,
   "totalPointsAgainst": 263,
   "mixedWins": 3,
   "mixedLosses": 5,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 57.1,
   "diff": -6,
   "ppg": 18.4,
   "leagueRank": 162,
   "rating": 1.5,
   "ratingGames": 14,
   "confidence": 69,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 1.1,
   "playerId": "8fb87112-3824-4d16-96d1-3f4abcb2ae45"
  },
  {
   "name": "Kevin Wilson",
   "gender": "Male",
   "team": "Ballers Philly",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 126,
   "totalPointsAgainst": 138,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 57.1,
   "diff": -12,
   "ppg": 18,
   "leagueRank": 195,
   "rating": -0.8,
   "ratingGames": 7,
   "confidence": 54,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.1,
   "playerId": "6f2cf88a-e37c-401a-8c37-84d2aed94dd9"
  },
  {
   "name": "Tom Draney",
   "gender": "Male",
   "team": "Picklr Manahawkin",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 9,
   "losses": 7,
   "pointsWon": 309,
   "totalPointsAgainst": 263,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 4,
   "winPct": 56.3,
   "diff": 46,
   "ppg": 19.3,
   "leagueRank": 135,
   "rating": 1.2,
   "ratingGames": 16,
   "confidence": 72,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0,
   "playerId": "cd1d7ac2-5447-4c21-9b25-3cd13e3457b3"
  },
  {
   "name": "Clarisse Espiritu",
   "gender": "Female",
   "team": "Picklr Manahawkin",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 9,
   "losses": 7,
   "pointsWon": 296,
   "totalPointsAgainst": 254,
   "mixedWins": 4,
   "mixedLosses": 4,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 56.3,
   "diff": 42,
   "ppg": 18.5,
   "leagueRank": 154,
   "rating": 0.2,
   "ratingGames": 16,
   "confidence": 70,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": -0.4,
   "playerId": "dc1107ce-7076-4251-9bf3-b4a1ee5ac9a9"
  },
  {
   "name": "Nancy Wu",
   "gender": "Female",
   "team": "ACE Downingtown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 9,
   "losses": 7,
   "pointsWon": 304,
   "totalPointsAgainst": 296,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 5,
   "clutchLosses": 3,
   "winPct": 56.3,
   "diff": 8,
   "ppg": 19,
   "leagueRank": 169,
   "rating": -1.4,
   "ratingGames": 16,
   "confidence": 71,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": -0.4,
   "playerId": "c187c25d-5d0a-4e66-9ac5-b1a05b0c151f"
  },
  {
   "name": "Brian Cook",
   "gender": "Male",
   "team": "Pickle Juice Blackwood",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 6,
   "losses": 5,
   "pointsWon": 213,
   "totalPointsAgainst": 206,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 54.5,
   "diff": 7,
   "ppg": 19.4,
   "leagueRank": 157,
   "rating": 0.2,
   "ratingGames": 11,
   "confidence": 68,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.4,
   "playerId": "85520ff7-80c8-4a80-8af0-93889a7a61e6"
  },
  {
   "name": "Lana Engler Carss",
   "gender": "Female",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 11,
   "wins": 6,
   "losses": 5,
   "pointsWon": 211,
   "totalPointsAgainst": 205,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 54.5,
   "diff": 6,
   "ppg": 19.2,
   "leagueRank": 180,
   "rating": -0.8,
   "ratingGames": 11,
   "confidence": 66,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.5,
   "playerId": "e832c271-3f52-48b6-8a3f-bdf699531a03"
  },
  {
   "name": "Jon Wheel",
   "gender": "Male",
   "team": "Delco Turf & Pickle",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 6,
   "losses": 5,
   "pointsWon": 209,
   "totalPointsAgainst": 204,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 54.5,
   "diff": 5,
   "ppg": 19,
   "leagueRank": 166,
   "rating": 1.1,
   "ratingGames": 11,
   "confidence": 64,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.7,
   "playerId": "980c2469-2017-4943-bc0d-5c49f0526f85"
  },
  {
   "name": "Carmina Lasam",
   "gender": "Female",
   "team": "Montville",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 6,
   "losses": 5,
   "pointsWon": 206,
   "totalPointsAgainst": 201,
   "mixedWins": 3,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 54.5,
   "diff": 5,
   "ppg": 18.7,
   "leagueRank": 179,
   "rating": 0.1,
   "ratingGames": 11,
   "confidence": 65,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.4,
   "playerId": "c7d6417a-1519-48bd-831a-58e1714d70a9"
  },
  {
   "name": "Ashley Held",
   "gender": "Female",
   "team": "Jersey Devil Green",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 6,
   "losses": 5,
   "pointsWon": 213,
   "totalPointsAgainst": 210,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 54.5,
   "diff": 3,
   "ppg": 19.4,
   "leagueRank": 171,
   "rating": -0.3,
   "ratingGames": 11,
   "confidence": 65,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0,
   "playerId": "60c53e43-dbe0-4f62-8023-a2c1c1303fc3"
  },
  {
   "name": "Ava Pastore",
   "gender": "Female",
   "team": "Forward",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 6,
   "losses": 5,
   "pointsWon": 210,
   "totalPointsAgainst": 214,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 54.5,
   "diff": -4,
   "ppg": 19.1,
   "leagueRank": 177,
   "rating": 0.6,
   "ratingGames": 11,
   "confidence": 62,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 1.1,
   "playerId": "2e82399e-1fad-4343-81cd-5202f2fd17bf"
  },
  {
   "name": "Michael Martellacci",
   "gender": "Male",
   "team": "Forward",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 7,
   "losses": 6,
   "pointsWon": 260,
   "totalPointsAgainst": 235,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 5,
   "winPct": 53.8,
   "diff": 25,
   "ppg": 20,
   "leagueRank": 129,
   "rating": 2.3,
   "ratingGames": 13,
   "confidence": 69,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.7,
   "playerId": "fe5f5565-3a59-4eb6-9857-7dcb007f4900"
  },
  {
   "name": "Michael Kresloff",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 7,
   "losses": 6,
   "pointsWon": 237,
   "totalPointsAgainst": 236,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 53.8,
   "diff": 1,
   "ppg": 18.2,
   "leagueRank": 184,
   "rating": 0,
   "ratingGames": 13,
   "confidence": 70,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.2,
   "playerId": "60e48498-ce01-4f21-99d0-3d9ec17b7fc5"
  },
  {
   "name": "Luc Legaspi",
   "gender": "Male",
   "team": "Forward",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 7,
   "losses": 6,
   "pointsWon": 243,
   "totalPointsAgainst": 249,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 53.8,
   "diff": -6,
   "ppg": 18.7,
   "leagueRank": 185,
   "rating": -0.1,
   "ratingGames": 13,
   "confidence": 68,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.6,
   "playerId": "4d20f87d-068f-4cce-806d-6941153e72be"
  },
  {
   "name": "David Reyes",
   "gender": "Male",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 8,
   "losses": 7,
   "pointsWon": 291,
   "totalPointsAgainst": 274,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 53.3,
   "diff": 17,
   "ppg": 19.4,
   "leagueRank": 167,
   "rating": 0.5,
   "ratingGames": 15,
   "confidence": 71,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.2,
   "playerId": "adc043ce-7b2d-4ae9-87e0-c927f28c473a"
  },
  {
   "name": "Jayadeep Reddy Kamireddy",
   "gender": "Male",
   "team": "Picklr Newark",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 120,
   "totalPointsAgainst": 96,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 50,
   "diff": 24,
   "ppg": 20,
   "leagueRank": 140,
   "rating": 0.7,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": -0.6,
   "playerId": "93805af5-9ac7-4fa5-8761-b7dab7f9dd9b"
  },
  {
   "name": "Carlos Lichty",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 5,
   "losses": 5,
   "pointsWon": 184,
   "totalPointsAgainst": 169,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": 15,
   "ppg": 18.4,
   "leagueRank": 172,
   "rating": 1.4,
   "ratingGames": 10,
   "confidence": 62,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": -0.2,
   "playerId": "5c5c0d00-e20c-456e-b53e-890845310916"
  },
  {
   "name": "Evan Sinclair",
   "gender": "Male",
   "team": "Jersey Devil Green",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 5,
   "losses": 5,
   "pointsWon": 191,
   "totalPointsAgainst": 179,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": 12,
   "ppg": 19.1,
   "leagueRank": 163,
   "rating": 1.6,
   "ratingGames": 10,
   "confidence": 61,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.6,
   "playerId": "44de3ff2-3b41-4c10-908c-8057a94e1d75"
  },
  {
   "name": "Eileen Zhang",
   "gender": "Female",
   "team": "Bounce Tempest",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 6,
   "losses": 6,
   "pointsWon": 233,
   "totalPointsAgainst": 221,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 50,
   "diff": 12,
   "ppg": 19.4,
   "leagueRank": 159,
   "rating": 1.6,
   "ratingGames": 12,
   "confidence": 68,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.7,
   "playerId": "a97005b1-7cac-40b0-b0c0-c4e1a359418a"
  },
  {
   "name": "Tiffany Weis",
   "gender": "Female",
   "team": "Pickle Juice Blackwood",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 6,
   "losses": 6,
   "pointsWon": 238,
   "totalPointsAgainst": 228,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 5,
   "winPct": 50,
   "diff": 10,
   "ppg": 19.8,
   "leagueRank": 161,
   "rating": 0.4,
   "ratingGames": 12,
   "confidence": 70,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.3,
   "playerId": "bcf39825-fd7a-4949-9b85-9b77f5c1abc6"
  },
  {
   "name": "Natalia Koontz",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 118,
   "totalPointsAgainst": 111,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": 7,
   "ppg": 19.7,
   "leagueRank": 164,
   "rating": 0.5,
   "ratingGames": 6,
   "confidence": 47,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.2,
   "playerId": "ae015f4e-a359-406a-a394-b04d1ec288b7"
  },
  {
   "name": "Laura Govan",
   "gender": "Female",
   "team": "Flemington",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 111,
   "totalPointsAgainst": 106,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 50,
   "diff": 5,
   "ppg": 18.5,
   "leagueRank": 175,
   "rating": 0.2,
   "ratingGames": 6,
   "confidence": 47,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.2,
   "playerId": "110b981a-77ae-42b0-8200-4e30e9ce157a"
  },
  {
   "name": "Nick Lewis",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 118,
   "totalPointsAgainst": 113,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": 5,
   "ppg": 19.7,
   "leagueRank": 170,
   "rating": 0.7,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.2,
   "playerId": "195690f4-4055-47d6-b298-cc5fa7b2142e"
  },
  {
   "name": "Binxin Cai",
   "gender": "Female",
   "team": "Picklr Fair Lawn",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 112,
   "totalPointsAgainst": 107,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": 5,
   "ppg": 18.7,
   "leagueRank": 182,
   "rating": -0.2,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": -0.1,
   "playerId": "ac95857d-6706-4db0-89ae-846030096972"
  },
  {
   "name": "Jia Fei",
   "gender": "Female",
   "team": "LBF Pickleball",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 7,
   "losses": 7,
   "pointsWon": 258,
   "totalPointsAgainst": 253,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 50,
   "diff": 5,
   "ppg": 18.4,
   "leagueRank": 183,
   "rating": 0.7,
   "ratingGames": 14,
   "confidence": 67,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.2,
   "playerId": "b08403c9-52bb-4223-b207-45b69af4983d"
  },
  {
   "name": "Man Kwok",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 114,
   "totalPointsAgainst": 110,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 50,
   "diff": 4,
   "ppg": 19,
   "leagueRank": 191,
   "rating": -0.7,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.6,
   "playerId": "92eb607e-9215-4282-9c92-53bc4c761738"
  },
  {
   "name": "Tyler Kaleikini",
   "gender": "Male",
   "team": "Premiere",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 116,
   "totalPointsAgainst": 114,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": 2,
   "ppg": 19.3,
   "leagueRank": 198,
   "rating": -1.6,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -1.2,
   "playerId": "f23e5c90-847f-4aeb-b080-14c282e1b115"
  },
  {
   "name": "Ayako Caravella",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 153,
   "totalPointsAgainst": 152,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": 1,
   "ppg": 19.1,
   "leagueRank": 186,
   "rating": 0.5,
   "ratingGames": 8,
   "confidence": 53,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.4,
   "playerId": "2a302d21-a60a-4e90-b1e2-c2d1d9036eda"
  },
  {
   "name": "Em Melo",
   "gender": "Female",
   "team": "Pickleball Kingdom Watchung",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 2,
   "losses": 2,
   "pointsWon": 78,
   "totalPointsAgainst": 78,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": 0,
   "ppg": 19.5,
   "leagueRank": 231,
   "rating": -1.7,
   "ratingGames": 4,
   "confidence": 39,
   "strengthOfPartners": 2.1,
   "strengthOfOpponents": -0.7,
   "playerId": "67d0254b-5de4-4442-ab3b-cd75c349795c"
  },
  {
   "name": "Cole Neimetz",
   "gender": "Male",
   "team": "Forward",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 6,
   "losses": 6,
   "pointsWon": 235,
   "totalPointsAgainst": 237,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 4,
   "winPct": 50,
   "diff": -2,
   "ppg": 19.6,
   "leagueRank": 178,
   "rating": 1.1,
   "ratingGames": 12,
   "confidence": 67,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.8,
   "playerId": "005c1a4c-4d04-4923-baea-1a720a4082ea"
  },
  {
   "name": "Ivona Reszka",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 153,
   "totalPointsAgainst": 155,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 3,
   "playerId": "a06e906c-dd36-4585-b03a-48a49b915662",
   "winPct": 50,
   "diff": -2,
   "ppg": 19.1,
   "leagueRank": 194,
   "rating": -0.3,
   "ratingGames": 8,
   "confidence": 55,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0
  },
  {
   "name": "Albert Lin",
   "gender": "Male",
   "team": "Jersey Devil Green",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 110,
   "totalPointsAgainst": 113,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": -3,
   "ppg": 18.3,
   "leagueRank": 202,
   "rating": -0.3,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.1,
   "playerId": "562e74b8-dab7-46fa-a773-152747a03796"
  },
  {
   "name": "Chris Colucci",
   "gender": "Male",
   "team": "Montville",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 107,
   "totalPointsAgainst": 112,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 50,
   "diff": -5,
   "ppg": 17.8,
   "leagueRank": 220,
   "rating": -0.8,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.4,
   "playerId": "df1c0521-e5fb-4883-83a2-cee7120f8d97"
  },
  {
   "name": "Lakshmikanth Chaluvadi",
   "gender": "Male",
   "team": "Flemington",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 6,
   "losses": 6,
   "pointsWon": 223,
   "totalPointsAgainst": 229,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": -6,
   "ppg": 18.6,
   "leagueRank": 188,
   "rating": 0.2,
   "ratingGames": 12,
   "confidence": 65,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.4,
   "playerId": "377302a4-12da-4449-bbfc-a28248436679"
  },
  {
   "name": "Chris Mendoza",
   "gender": "Male",
   "team": "ACE Downingtown",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 106,
   "totalPointsAgainst": 112,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "666618c5-e90e-4370-9b42-773ac384f7de",
   "winPct": 50,
   "diff": -6,
   "ppg": 17.7,
   "leagueRank": 211,
   "rating": 0.2,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 1.4
  },
  {
   "name": "Vanessa Rhoades",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 110,
   "totalPointsAgainst": 118,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": -8,
   "ppg": 18.3,
   "leagueRank": 212,
   "rating": -0.7,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.1,
   "playerId": "2d00c1a4-78ae-4fe3-9192-2622842e354d"
  },
  {
   "name": "Matthew Landis",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 108,
   "totalPointsAgainst": 118,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": -10,
   "ppg": 18,
   "leagueRank": 201,
   "rating": 0.4,
   "ratingGames": 6,
   "confidence": 46,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 1,
   "playerId": "ec3a5b94-4b3c-4467-a3fa-f23141cb8f69"
  },
  {
   "name": "Dana Sheply",
   "gender": "Female",
   "team": "Jersey Devil Navy",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 5,
   "losses": 5,
   "pointsWon": 169,
   "totalPointsAgainst": 181,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 50,
   "diff": -12,
   "ppg": 16.9,
   "leagueRank": 221,
   "rating": -0.8,
   "ratingGames": 10,
   "confidence": 61,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": -0.6,
   "playerId": "28f35cb8-46a7-4338-9bdc-68f7bd6ca009"
  },
  {
   "name": "Veronica Rosas",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 7,
   "losses": 8,
   "pointsWon": 278,
   "totalPointsAgainst": 271,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 4,
   "winPct": 46.7,
   "diff": 7,
   "ppg": 18.5,
   "leagueRank": 174,
   "rating": 3,
   "ratingGames": 15,
   "confidence": 66,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 0.8,
   "playerId": "abab39fe-af60-4956-9f97-460189ab90dc"
  },
  {
   "name": "Nicole Mandry",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 15,
   "wins": 7,
   "losses": 8,
   "pointsWon": 282,
   "totalPointsAgainst": 286,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 46.7,
   "diff": -4,
   "ppg": 18.8,
   "leagueRank": 199,
   "rating": 0,
   "ratingGames": 15,
   "confidence": 71,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.3,
   "playerId": "11112eb4-26f3-458d-954e-5718dd3b9332"
  },
  {
   "name": "Marina Mounelasy",
   "gender": "Female",
   "team": "Delco Turf & Pickle",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 6,
   "losses": 7,
   "pointsWon": 248,
   "totalPointsAgainst": 238,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 46.2,
   "diff": 10,
   "ppg": 19.1,
   "leagueRank": 189,
   "rating": 0.5,
   "ratingGames": 13,
   "confidence": 68,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.1,
   "playerId": "8a8e0b35-1b88-44c9-914d-643787dc3ccd"
  },
  {
   "name": "Richie Mizrahi",
   "gender": "Male",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 13,
   "wins": 6,
   "losses": 7,
   "pointsWon": 213,
   "totalPointsAgainst": 230,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 46.2,
   "diff": -17,
   "ppg": 16.4,
   "leagueRank": 227,
   "rating": 0.5,
   "ratingGames": 13,
   "confidence": 66,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.4,
   "playerId": "23b78ff1-3039-4b01-b033-839cdba54a19"
  },
  {
   "name": "Wen Jin",
   "gender": "Male",
   "team": "LBF Pickleball",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 6,
   "losses": 7,
   "pointsWon": 222,
   "totalPointsAgainst": 246,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 46.2,
   "diff": -24,
   "ppg": 17.1,
   "leagueRank": 232,
   "rating": -2,
   "ratingGames": 13,
   "confidence": 66,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0,
   "playerId": "dd2384fe-4bb2-4085-a917-6e7989beb8a7"
  },
  {
   "name": "Lili Zebluim",
   "gender": "Female",
   "team": "Forward",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 5,
   "losses": 6,
   "pointsWon": 204,
   "totalPointsAgainst": 206,
   "mixedWins": 2,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 45.5,
   "diff": -2,
   "ppg": 18.5,
   "leagueRank": 197,
   "rating": 0.3,
   "ratingGames": 11,
   "confidence": 63,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.7,
   "playerId": "01687986-8454-48f2-ab99-dabc5bb343b7"
  },
  {
   "name": "Katrina Maranan",
   "gender": "Female",
   "team": "Jersey Devil Green",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 11,
   "wins": 5,
   "losses": 6,
   "pointsWon": 203,
   "totalPointsAgainst": 209,
   "mixedWins": 4,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 45.5,
   "diff": -6,
   "ppg": 18.5,
   "leagueRank": 208,
   "rating": -0.4,
   "ratingGames": 11,
   "confidence": 66,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.3,
   "playerId": "4031f243-e80c-492b-b30b-5bf058824762"
  },
  {
   "name": "Matthew Crawford",
   "gender": "Male",
   "team": "Forward",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 5,
   "losses": 6,
   "pointsWon": 197,
   "totalPointsAgainst": 207,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 45.5,
   "diff": -10,
   "ppg": 17.9,
   "leagueRank": 216,
   "rating": 0.2,
   "ratingGames": 11,
   "confidence": 64,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.6,
   "playerId": "2ee974be-b965-4feb-b40e-3a677f40d542"
  },
  {
   "name": "Pallavi Deshpande",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 5,
   "losses": 6,
   "pointsWon": 203,
   "totalPointsAgainst": 214,
   "mixedWins": 3,
   "mixedLosses": 5,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 45.5,
   "diff": -11,
   "ppg": 18.5,
   "leagueRank": 217,
   "rating": -1,
   "ratingGames": 11,
   "confidence": 67,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.2,
   "playerId": "92f3c12c-3291-4176-acd2-2bbd5b83136c"
  },
  {
   "name": "Tesa Pribitkin",
   "gender": "Female",
   "team": "Ballers Philly",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 9,
   "wins": 4,
   "losses": 5,
   "pointsWon": 155,
   "totalPointsAgainst": 159,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 44.4,
   "diff": -4,
   "ppg": 17.2,
   "leagueRank": 229,
   "rating": -1.2,
   "ratingGames": 9,
   "confidence": 61,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.3,
   "playerId": "af8325ab-680e-414c-8522-2335ec1e7f50"
  },
  {
   "name": "Kim Batistoni",
   "gender": "Female",
   "team": "Home Court",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 133,
   "totalPointsAgainst": 128,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "53019cc2-8e6a-4807-88d1-10d1fb0a480d",
   "winPct": 42.9,
   "diff": 5,
   "ppg": 19,
   "leagueRank": 192,
   "rating": -0.3,
   "ratingGames": 7,
   "confidence": 51,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.7
  },
  {
   "name": "Lara Gedeon",
   "gender": "Female",
   "team": "Picklr Fair Lawn",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 134,
   "totalPointsAgainst": 130,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 42.9,
   "diff": 4,
   "ppg": 19.1,
   "leagueRank": 193,
   "rating": 0.7,
   "ratingGames": 7,
   "confidence": 54,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.6,
   "playerId": "2c81277f-6ffb-4e3b-87f2-9a5ef4c57690"
  },
  {
   "name": "Alan Liang",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 136,
   "totalPointsAgainst": 138,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 42.9,
   "diff": -2,
   "ppg": 19.4,
   "leagueRank": 190,
   "rating": 0.9,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 0.1,
   "playerId": "16fc789d-f84a-487b-98f0-ed9db5478bb7"
  },
  {
   "name": "Jason Huang",
   "gender": "Male",
   "team": "Montville",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 125,
   "totalPointsAgainst": 137,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 42.9,
   "diff": -12,
   "ppg": 17.9,
   "leagueRank": 237,
   "rating": -0.7,
   "ratingGames": 7,
   "confidence": 55,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": -0.2,
   "playerId": "85c7fc54-57f2-4b1d-9601-a2265de3b295"
  },
  {
   "name": "Deirdre Zohlman",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 6,
   "losses": 8,
   "pointsWon": 251,
   "totalPointsAgainst": 277,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 4,
   "clutchLosses": 0,
   "winPct": 42.9,
   "diff": -26,
   "ppg": 17.9,
   "leagueRank": 234,
   "rating": -1.4,
   "ratingGames": 14,
   "confidence": 70,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.3,
   "playerId": "f9fffb3c-b254-4953-b53c-55bcc43c583b"
  },
  {
   "name": "Stacy Ip-Mo",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 5,
   "losses": 7,
   "pointsWon": 224,
   "totalPointsAgainst": 213,
   "mixedWins": 1,
   "mixedLosses": 5,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 41.7,
   "diff": 11,
   "ppg": 18.7,
   "leagueRank": 204,
   "rating": -0.7,
   "ratingGames": 12,
   "confidence": 65,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.9,
   "playerId": "d0562c60-5e2c-4647-805c-ac3740562432"
  },
  {
   "name": "Ben Van Handel",
   "gender": "Male",
   "team": "Ballers Philly",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 12,
   "wins": 5,
   "losses": 7,
   "pointsWon": 227,
   "totalPointsAgainst": 224,
   "mixedWins": 3,
   "mixedLosses": 5,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 41.7,
   "diff": 3,
   "ppg": 18.9,
   "leagueRank": 205,
   "rating": -0.2,
   "ratingGames": 12,
   "confidence": 66,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0,
   "playerId": "abb4e0e1-709f-425f-ac7d-b6209b29ddd0"
  },
  {
   "name": "Laura Slane",
   "gender": "Female",
   "team": "Flemington",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 5,
   "losses": 7,
   "pointsWon": 218,
   "totalPointsAgainst": 224,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 41.7,
   "diff": -6,
   "ppg": 18.2,
   "leagueRank": 207,
   "rating": 0.6,
   "ratingGames": 12,
   "confidence": 66,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.6,
   "playerId": "17a78a69-329f-4133-8a0d-784c306a57c2"
  },
  {
   "name": "Peter David",
   "gender": "Male",
   "team": "Jersey Devil Green",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 5,
   "losses": 7,
   "pointsWon": 225,
   "totalPointsAgainst": 235,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 41.7,
   "diff": -10,
   "ppg": 18.8,
   "leagueRank": 219,
   "rating": 0,
   "ratingGames": 12,
   "confidence": 66,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.9,
   "playerId": "c5e40aa9-efbf-4937-b44d-1b8f06693ba4"
  },
  {
   "name": "Julia Manetta",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 5,
   "losses": 7,
   "pointsWon": 214,
   "totalPointsAgainst": 231,
   "mixedWins": 4,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 41.7,
   "diff": -17,
   "ppg": 17.8,
   "leagueRank": 230,
   "rating": 0.6,
   "ratingGames": 12,
   "confidence": 64,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 1.8,
   "playerId": "4977544e-0c7f-4151-815c-51f68473862f"
  },
  {
   "name": "Peter Siv",
   "gender": "Male",
   "team": "Ballers Philly",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 5,
   "losses": 7,
   "pointsWon": 213,
   "totalPointsAgainst": 231,
   "mixedWins": 2,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 41.7,
   "diff": -18,
   "ppg": 17.8,
   "leagueRank": 243,
   "rating": -1.8,
   "ratingGames": 12,
   "confidence": 66,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.1,
   "playerId": "a526f541-d970-4467-b304-0783f0ac4b50"
  },
  {
   "name": "Thuy Heng",
   "gender": "Female",
   "team": "Delco Turf & Pickle",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 99,
   "totalPointsAgainst": 80,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 40,
   "diff": 19,
   "ppg": 19.8,
   "leagueRank": 165,
   "rating": 0.6,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -1.1,
   "playerId": "276b5c47-aaf3-43e4-b59e-009bc65f355b"
  },
  {
   "name": "Andrew Taylor",
   "gender": "Male",
   "team": "Delco Turf & Pickle",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 10,
   "wins": 4,
   "losses": 6,
   "pointsWon": 182,
   "totalPointsAgainst": 176,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 40,
   "diff": 6,
   "ppg": 18.2,
   "leagueRank": 213,
   "rating": 0.1,
   "ratingGames": 10,
   "confidence": 63,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.1,
   "playerId": "41495749-a3fd-4680-93db-e65b4251cc0a"
  },
  {
   "name": "Angela Delconte",
   "gender": "Female",
   "team": "Delco Turf & Pickle",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 92,
   "totalPointsAgainst": 87,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 40,
   "diff": 5,
   "ppg": 18.4,
   "leagueRank": 209,
   "rating": -1,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": -0.5,
   "playerId": "cb5b6c5a-8090-4d4d-bd56-941454023f77"
  },
  {
   "name": "Chanthorn Heng",
   "gender": "Male",
   "team": "Delco Turf & Pickle",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 93,
   "totalPointsAgainst": 90,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 40,
   "diff": 3,
   "ppg": 18.6,
   "leagueRank": 210,
   "rating": -1,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": -0.6,
   "playerId": "58179b91-ed00-40f9-abf5-427ccfdcf4f3"
  },
  {
   "name": "Andrew Chester",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 93,
   "totalPointsAgainst": 90,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 40,
   "diff": 3,
   "ppg": 18.6,
   "leagueRank": 200,
   "rating": 0.1,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 0.6,
   "playerId": "83237821-4e2a-4f60-8fea-4be6655d52da"
  },
  {
   "name": "Pratap Kotra",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 98,
   "totalPointsAgainst": 96,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 40,
   "diff": 2,
   "ppg": 19.6,
   "leagueRank": 196,
   "rating": -0.4,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -0.8,
   "playerId": "83a9e58a-b1de-4bda-a020-8cafc2fc47aa"
  },
  {
   "name": "Alexandra Pond",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 91,
   "totalPointsAgainst": 92,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "ca2c7d14-de39-45a1-805a-ff1ab5be31d9",
   "winPct": 40,
   "diff": -1,
   "ppg": 18.2,
   "leagueRank": 214,
   "rating": 1.1,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 1.3
  },
  {
   "name": "Xin Liu",
   "gender": "Male",
   "team": "Jersey Devil Green",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 89,
   "totalPointsAgainst": 91,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 40,
   "diff": -2,
   "ppg": 17.8,
   "leagueRank": 225,
   "rating": 0.3,
   "ratingGames": 5,
   "confidence": 44,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 1,
   "playerId": "463e1402-cc46-4152-9012-c4308a6dd9b4"
  },
  {
   "name": "Kristie Frazier",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 96,
   "totalPointsAgainst": 99,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 40,
   "diff": -3,
   "ppg": 19.2,
   "leagueRank": 206,
   "rating": -0.6,
   "ratingGames": 5,
   "confidence": 44,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.1,
   "playerId": "67918423-3a96-4300-8fae-8759ad03b5d7"
  },
  {
   "name": "Jiyun Yuh",
   "gender": "Female",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 85,
   "totalPointsAgainst": 88,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 40,
   "diff": -3,
   "ppg": 17,
   "leagueRank": 247,
   "rating": -1.1,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.8,
   "playerId": "c94ae231-9f0c-4212-b769-7bd708d8fc38"
  },
  {
   "name": "Magnolia Lau",
   "gender": "Female",
   "team": "Pickle Juice Blackwood",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 4,
   "losses": 6,
   "pointsWon": 183,
   "totalPointsAgainst": 187,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 40,
   "diff": -4,
   "ppg": 18.3,
   "leagueRank": 224,
   "rating": -1,
   "ratingGames": 10,
   "confidence": 66,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -0.7,
   "playerId": "0c8768d9-03b0-42ca-9a88-b2c8538fa54d"
  },
  {
   "name": "Christy Zhang",
   "gender": "Female",
   "team": "Pickleball Kingdom Watchung",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 95,
   "totalPointsAgainst": 99,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 40,
   "diff": -4,
   "ppg": 19,
   "leagueRank": 228,
   "rating": -0.4,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.2,
   "playerId": "589a4aec-d9fc-48b1-8914-58b7b6d4d7e5"
  },
  {
   "name": "Anthony Mcmahon",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 91,
   "totalPointsAgainst": 95,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 40,
   "diff": -4,
   "ppg": 18.2,
   "leagueRank": 248,
   "rating": -1.1,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.6,
   "playerId": "61ab7d66-dd78-43f5-a432-378e4ee6afae"
  },
  {
   "name": "Rob Stever",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 86,
   "totalPointsAgainst": 92,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 40,
   "diff": -6,
   "ppg": 17.2,
   "leagueRank": 253,
   "rating": -0.7,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.1,
   "playerId": "519426b7-932a-4dd5-9865-ebaadb3d226d"
  },
  {
   "name": "Moe Phanhnong",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 89,
   "totalPointsAgainst": 95,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 40,
   "diff": -6,
   "ppg": 17.8,
   "leagueRank": 223,
   "rating": 0.2,
   "ratingGames": 5,
   "confidence": 44,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.3,
   "playerId": "b0a69f00-753c-4ced-959d-d659dbb4a700"
  },
  {
   "name": "Andrew Son",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 92,
   "totalPointsAgainst": 100,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 40,
   "diff": -8,
   "ppg": 18.4,
   "leagueRank": 235,
   "rating": 0,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.7,
   "playerId": "2c4d576f-1ae0-4aa7-a233-73cec5506d9c"
  },
  {
   "name": "Elliott Tseng",
   "gender": "Male",
   "team": "Delco Turf & Pickle",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 4,
   "losses": 6,
   "pointsWon": 187,
   "totalPointsAgainst": 195,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 40,
   "diff": -8,
   "ppg": 18.7,
   "leagueRank": 222,
   "rating": -0.8,
   "ratingGames": 10,
   "confidence": 61,
   "strengthOfPartners": 2.6,
   "strengthOfOpponents": 1.1,
   "playerId": "ab21ce02-ca88-4b75-ac8f-b1438e117bb3"
  },
  {
   "name": "Joseph Walton",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 90,
   "totalPointsAgainst": 99,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 40,
   "diff": -9,
   "ppg": 18,
   "leagueRank": 226,
   "rating": 0.6,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 1.1,
   "playerId": "87bb696f-03f4-44cd-bd89-72107aef36c1"
  },
  {
   "name": "Lynn Bresnahan",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 88,
   "totalPointsAgainst": 98,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "dfc7b259-63e3-4fbe-bb0f-0eab2f84f4a8",
   "winPct": 40,
   "diff": -10,
   "ppg": 17.6,
   "leagueRank": 244,
   "rating": 0,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": -2.2,
   "strengthOfOpponents": -0.1
  },
  {
   "name": "Ethan Fu",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 4,
   "losses": 6,
   "pointsWon": 176,
   "totalPointsAgainst": 187,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 40,
   "diff": -11,
   "ppg": 17.6,
   "leagueRank": 239,
   "rating": -1.4,
   "ratingGames": 10,
   "confidence": 61,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.1,
   "playerId": "a8585e9c-872e-466c-9583-9680e557f757"
  },
  {
   "name": "Joseph Gozon",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 86,
   "totalPointsAgainst": 99,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 40,
   "diff": -13,
   "ppg": 17.2,
   "leagueRank": 270,
   "rating": -2,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.1,
   "playerId": "aea19a79-5542-4830-88ad-7c17ae75ee4b"
  },
  {
   "name": "Evan Truitt",
   "gender": "Male",
   "team": "Delco Turf & Pickle",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 84,
   "totalPointsAgainst": 98,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 40,
   "diff": -14,
   "ppg": 16.8,
   "leagueRank": 276,
   "rating": -1.6,
   "ratingGames": 5,
   "confidence": 44,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.5,
   "playerId": "f7b28e6d-11b3-4da9-86cc-bc45964900b9"
  },
  {
   "name": "Tim Phelan",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 2,
   "losses": 3,
   "pointsWon": 86,
   "totalPointsAgainst": 101,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 40,
   "diff": -15,
   "ppg": 17.2,
   "leagueRank": 254,
   "rating": -0.8,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.7,
   "playerId": "f5e62236-e4e5-4b34-865e-c92bf027d21c"
  },
  {
   "name": "Andy Wang",
   "gender": "Male",
   "team": "LBF Pickleball",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 10,
   "wins": 4,
   "losses": 6,
   "pointsWon": 171,
   "totalPointsAgainst": 186,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 40,
   "diff": -15,
   "ppg": 17.1,
   "leagueRank": 240,
   "rating": -0.4,
   "ratingGames": 10,
   "confidence": 62,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.4,
   "playerId": "fffb21b3-56be-473d-91d7-8f750b599343"
  },
  {
   "name": "Stephanie Li",
   "gender": "Female",
   "team": "Bounce Tempest",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 4,
   "losses": 6,
   "pointsWon": 167,
   "totalPointsAgainst": 188,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 40,
   "diff": -21,
   "ppg": 16.7,
   "leagueRank": 258,
   "rating": -0.3,
   "ratingGames": 10,
   "confidence": 63,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.9,
   "playerId": "6a68ba8e-9700-4e5a-b54e-07160dac5c68"
  },
  {
   "name": "Anthony Solares",
   "gender": "Male",
   "team": "Jersey Devil Green",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 4,
   "losses": 6,
   "pointsWon": 175,
   "totalPointsAgainst": 199,
   "mixedWins": 3,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 40,
   "diff": -24,
   "ppg": 17.5,
   "leagueRank": 259,
   "rating": -1.1,
   "ratingGames": 10,
   "confidence": 64,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.8,
   "playerId": "0adc78f0-0318-418d-bae1-f92d3ca5443d"
  },
  {
   "name": "Jacquie Verish",
   "gender": "Female",
   "team": "Jersey Devil Navy",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 4,
   "losses": 6,
   "pointsWon": 175,
   "totalPointsAgainst": 200,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 40,
   "diff": -25,
   "ppg": 17.5,
   "leagueRank": 252,
   "rating": 0,
   "ratingGames": 10,
   "confidence": 60,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.8,
   "playerId": "6f126e55-bb02-4c7d-a69d-db30473ad0b3"
  },
  {
   "name": "Ryan Gerstel",
   "gender": "Male",
   "team": "Forward",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 10,
   "wins": 4,
   "losses": 6,
   "pointsWon": 164,
   "totalPointsAgainst": 192,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 40,
   "diff": -28,
   "ppg": 16.4,
   "leagueRank": 273,
   "rating": -0.9,
   "ratingGames": 10,
   "confidence": 65,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.9,
   "playerId": "de47e045-80e3-4209-a32e-d1c8a6de083b"
  },
  {
   "name": "Vy Conghuyen",
   "gender": "Female",
   "team": "Bounce Tempest",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 4,
   "losses": 6,
   "pointsWon": 161,
   "totalPointsAgainst": 196,
   "mixedWins": 4,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 40,
   "diff": -35,
   "ppg": 16.1,
   "leagueRank": 282,
   "rating": -1.2,
   "ratingGames": 10,
   "confidence": 64,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.7,
   "playerId": "eada38ef-6a83-46be-bd30-0293173fe5ed"
  },
  {
   "name": "Aaron Chan",
   "gender": "Male",
   "team": "Players Courtyard",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 6,
   "losses": 9,
   "pointsWon": 263,
   "totalPointsAgainst": 302,
   "mixedWins": 3,
   "mixedLosses": 5,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 5,
   "clutchLosses": 3,
   "winPct": 40,
   "diff": -39,
   "ppg": 17.5,
   "leagueRank": 263,
   "rating": -2.2,
   "ratingGames": 15,
   "confidence": 72,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -0.3,
   "playerId": "57666861-23d0-4809-9556-b646579f2fd6"
  },
  {
   "name": "Jay Lizardo",
   "gender": "Male",
   "team": "ACE Downingtown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 4,
   "losses": 6,
   "pointsWon": 144,
   "totalPointsAgainst": 188,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 0,
   "winPct": 40,
   "diff": -44,
   "ppg": 14.4,
   "leagueRank": 311,
   "rating": -3.4,
   "ratingGames": 10,
   "confidence": 63,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": -0.6,
   "playerId": "6537e984-a225-48cf-a812-1c71c3ecfbee"
  },
  {
   "name": "Robert Huntley",
   "gender": "Male",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 5,
   "losses": 8,
   "pointsWon": 237,
   "totalPointsAgainst": 239,
   "mixedWins": 1,
   "mixedLosses": 5,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 38.5,
   "diff": -2,
   "ppg": 18.2,
   "leagueRank": 215,
   "rating": 0.6,
   "ratingGames": 13,
   "confidence": 66,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.1,
   "playerId": "b5dec967-9e3a-49b4-b136-597711d099cc"
  },
  {
   "name": "Dan Stanton",
   "gender": "Male",
   "team": "Flemington",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 5,
   "losses": 8,
   "pointsWon": 222,
   "totalPointsAgainst": 254,
   "mixedWins": 3,
   "mixedLosses": 5,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 38.5,
   "diff": -32,
   "ppg": 17.1,
   "leagueRank": 255,
   "rating": -0.3,
   "ratingGames": 13,
   "confidence": 70,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 1.3,
   "playerId": "08f765a3-1ebf-4b7f-afe1-e815112ee581"
  },
  {
   "name": "Diane Fischetti",
   "gender": "Female",
   "team": "Picklr Manahawkin",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 157,
   "totalPointsAgainst": 157,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 4,
   "playerId": "4a7ff0ee-289b-4ab2-833f-8af1a7f34353",
   "winPct": 37.5,
   "diff": 0,
   "ppg": 19.6,
   "leagueRank": 203,
   "rating": 1.5,
   "ratingGames": 8,
   "confidence": 54,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": 1.9
  },
  {
   "name": "Kenneth Kline",
   "gender": "Male",
   "team": "Picklr Manahawkin",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 143,
   "totalPointsAgainst": 156,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 37.5,
   "diff": -13,
   "ppg": 17.9,
   "leagueRank": 241,
   "rating": 0.1,
   "ratingGames": 8,
   "confidence": 57,
   "strengthOfPartners": 2.1,
   "strengthOfOpponents": 2,
   "playerId": "b4842025-4296-4736-949a-32fb26c4697a"
  },
  {
   "name": "Karen Anthony",
   "gender": "Female",
   "team": "ACE Downingtown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 6,
   "losses": 10,
   "pointsWon": 263,
   "totalPointsAgainst": 309,
   "mixedWins": 2,
   "mixedLosses": 6,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 37.5,
   "diff": -46,
   "ppg": 16.4,
   "leagueRank": 284,
   "rating": -1.7,
   "ratingGames": 16,
   "confidence": 68,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": -0.3,
   "playerId": "75ea65b1-1fef-447f-98ce-a2edd80200a9"
  },
  {
   "name": "Eileen Potter",
   "gender": "Female",
   "team": "Pickle Juice Blackwood",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 4,
   "losses": 7,
   "pointsWon": 212,
   "totalPointsAgainst": 209,
   "mixedWins": 1,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 36.4,
   "diff": 3,
   "ppg": 19.3,
   "leagueRank": 218,
   "rating": -0.9,
   "ratingGames": 11,
   "confidence": 65,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.8,
   "playerId": "9c942e88-f77a-4b16-bf03-5d83455ed7c6"
  },
  {
   "name": "Brandon Dejesus",
   "gender": "Male",
   "team": "Jersey Devil Green",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 4,
   "losses": 7,
   "pointsWon": 200,
   "totalPointsAgainst": 219,
   "mixedWins": 2,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 36.4,
   "diff": -19,
   "ppg": 18.2,
   "leagueRank": 251,
   "rating": -0.8,
   "ratingGames": 11,
   "confidence": 64,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.7,
   "playerId": "d50feac2-f147-47d2-8930-99b21b2842ba"
  },
  {
   "name": "Matthew Peletier",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 4,
   "losses": 7,
   "pointsWon": 181,
   "totalPointsAgainst": 217,
   "mixedWins": 1,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 36.4,
   "diff": -36,
   "ppg": 16.5,
   "leagueRank": 271,
   "rating": -0.3,
   "ratingGames": 11,
   "confidence": 62,
   "strengthOfPartners": -2,
   "strengthOfOpponents": 0.5,
   "playerId": "7ca5a039-420c-4a5b-8721-c87b378b9a5f"
  },
  {
   "name": "Brandon Calmo",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 5,
   "losses": 9,
   "pointsWon": 245,
   "totalPointsAgainst": 271,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 35.7,
   "diff": -26,
   "ppg": 17.5,
   "leagueRank": 246,
   "rating": -0.7,
   "ratingGames": 14,
   "confidence": 65,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.7,
   "playerId": "79a3d198-0295-4bed-b0d7-bcda477d6b3a"
  },
  {
   "name": "Jason Quach",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 113,
   "totalPointsAgainst": 118,
   "mixedWins": 2,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 33.3,
   "diff": -5,
   "ppg": 18.8,
   "leagueRank": 245,
   "rating": -0.7,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.2,
   "playerId": "d7a91739-044a-4d8a-8079-640206c67db0"
  },
  {
   "name": "Richard Damacela",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 109,
   "totalPointsAgainst": 114,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 33.3,
   "diff": -5,
   "ppg": 18.2,
   "leagueRank": 249,
   "rating": -0.1,
   "ratingGames": 6,
   "confidence": 46,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.1,
   "playerId": "fc0abf38-c240-44e7-b6e1-67d0a2618d2e"
  },
  {
   "name": "Stephen Macpherson",
   "gender": "Male",
   "team": "Ballers Philly",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 108,
   "totalPointsAgainst": 115,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 33.3,
   "diff": -7,
   "ppg": 18,
   "leagueRank": 257,
   "rating": -0.3,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.5,
   "playerId": "f3323e2c-7c42-4f7c-9fe3-a463478eaa80"
  },
  {
   "name": "Kyle Korman",
   "gender": "Male",
   "team": "PKLD",
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
   "clutchLosses": 0,
   "winPct": 33.3,
   "diff": -8,
   "ppg": 17.8,
   "leagueRank": 256,
   "rating": 0.5,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 1.9,
   "playerId": "d61a3828-6dfc-480a-b26a-534b0fe58268"
  },
  {
   "name": "Khanh Vu",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 4,
   "losses": 8,
   "pointsWon": 223,
   "totalPointsAgainst": 234,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 33.3,
   "diff": -11,
   "ppg": 18.6,
   "leagueRank": 242,
   "rating": -1.1,
   "ratingGames": 12,
   "confidence": 66,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.2,
   "playerId": "97897afe-f9e2-42be-926f-d6ebe7025591"
  },
  {
   "name": "Patricia Majowicz",
   "gender": "Female",
   "team": "Home Court",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 110,
   "totalPointsAgainst": 122,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 2,
   "playerId": "95bb08f8-b0f7-4849-852e-6bebeb9e3e53",
   "winPct": 33.3,
   "diff": -12,
   "ppg": 18.3,
   "leagueRank": 238,
   "rating": 1.2,
   "ratingGames": 6,
   "confidence": 46,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 1.3
  },
  {
   "name": "Christine Vu",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 101,
   "totalPointsAgainst": 115,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 33.3,
   "diff": -14,
   "ppg": 16.8,
   "leagueRank": 267,
   "rating": -0.1,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.9,
   "playerId": "143071b3-0c1f-4236-ac5f-1e1430a7aebc"
  },
  {
   "name": "Jenn Smith",
   "gender": "Female",
   "team": "Picklr Exton",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 99,
   "totalPointsAgainst": 114,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 33.3,
   "diff": -15,
   "ppg": 16.5,
   "leagueRank": 278,
   "rating": -0.5,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": 0,
   "playerId": "32a22b16-1052-4c22-bdf9-9b48a1d73c84"
  },
  {
   "name": "Lisa Weinthal",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 106,
   "totalPointsAgainst": 122,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 33.3,
   "diff": -16,
   "ppg": 17.7,
   "leagueRank": 250,
   "rating": 1.4,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 1.8,
   "playerId": "d651c20b-7160-48e8-9c7f-c1dd03831553"
  },
  {
   "name": "Patricia Kavanaugh",
   "gender": "Female",
   "team": "Flemington",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 99,
   "totalPointsAgainst": 117,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 33.3,
   "diff": -18,
   "ppg": 16.5,
   "leagueRank": 281,
   "rating": -0.6,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.8,
   "playerId": "9e2b45ad-e99b-4786-915c-d89e1d1bfee2"
  },
  {
   "name": "Rebecca Mcginnis",
   "gender": "Female",
   "team": "Jersey Devil Navy",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 4,
   "losses": 8,
   "pointsWon": 210,
   "totalPointsAgainst": 232,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 33.3,
   "diff": -22,
   "ppg": 17.5,
   "leagueRank": 268,
   "rating": -1.1,
   "ratingGames": 12,
   "confidence": 67,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.4,
   "playerId": "e292105e-2554-4a80-accc-6b28514a8ec1"
  },
  {
   "name": "Skylar Bobadilla",
   "gender": "Male",
   "team": "Pickle Juice Blackwood",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 4,
   "losses": 8,
   "pointsWon": 218,
   "totalPointsAgainst": 244,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 33.3,
   "diff": -26,
   "ppg": 18.2,
   "leagueRank": 261,
   "rating": -0.5,
   "ratingGames": 12,
   "confidence": 66,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.5,
   "playerId": "295e2865-4328-4aac-b46c-3c1a41b26e08"
  },
  {
   "name": "Rachel Levkov",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 95,
   "totalPointsAgainst": 122,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 33.3,
   "diff": -27,
   "ppg": 15.8,
   "leagueRank": 293,
   "rating": 0.1,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 1.9,
   "playerId": "067afbd0-d803-4eb0-b467-3af2930f18af"
  },
  {
   "name": "Zach Strickland",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 83,
   "totalPointsAgainst": 118,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 33.3,
   "diff": -35,
   "ppg": 13.8,
   "leagueRank": 331,
   "rating": -3.2,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.5,
   "playerId": "e6deea54-c0bb-40c7-83d0-b65c6eb1fcb2"
  },
  {
   "name": "Thomas Kang",
   "gender": "Male",
   "team": "ACE Downingtown",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 4,
   "losses": 8,
   "pointsWon": 191,
   "totalPointsAgainst": 238,
   "mixedWins": 2,
   "mixedLosses": 6,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 33.3,
   "diff": -47,
   "ppg": 15.9,
   "leagueRank": 307,
   "rating": -3.3,
   "ratingGames": 12,
   "confidence": 66,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -0.5,
   "playerId": "d97f0830-c24e-48e9-a8e9-a32edc67530e"
  },
  {
   "name": "Addison Stewart",
   "gender": "Male",
   "team": "Flemington",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 4,
   "losses": 9,
   "pointsWon": 239,
   "totalPointsAgainst": 252,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 4,
   "winPct": 30.8,
   "diff": -13,
   "ppg": 18.4,
   "leagueRank": 236,
   "rating": 1.3,
   "ratingGames": 13,
   "confidence": 66,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 1.3,
   "playerId": "bde51a59-4c56-4d7a-a0e3-a9041baf8583"
  },
  {
   "name": "Tingting Huang",
   "gender": "Female",
   "team": "LBF Pickleball",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 4,
   "losses": 9,
   "pointsWon": 230,
   "totalPointsAgainst": 250,
   "mixedWins": 1,
   "mixedLosses": 6,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 30.8,
   "diff": -20,
   "ppg": 17.7,
   "leagueRank": 262,
   "rating": -0.5,
   "ratingGames": 13,
   "confidence": 67,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.3,
   "playerId": "6813b1bf-f225-424f-bd66-12bbcb303abe"
  },
  {
   "name": "Laura Fantin",
   "gender": "Female",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 4,
   "losses": 9,
   "pointsWon": 211,
   "totalPointsAgainst": 256,
   "mixedWins": 1,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 30.8,
   "diff": -45,
   "ppg": 16.2,
   "leagueRank": 294,
   "rating": -0.7,
   "ratingGames": 13,
   "confidence": 65,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.6,
   "playerId": "db15b234-d88d-4556-9c9d-982947bdaae7"
  },
  {
   "name": "Ginny Truong",
   "gender": "Female",
   "team": "Bounce Tempest",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 3,
   "losses": 7,
   "pointsWon": 181,
   "totalPointsAgainst": 192,
   "mixedWins": 3,
   "mixedLosses": 5,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 30,
   "diff": -11,
   "ppg": 18.1,
   "leagueRank": 265,
   "rating": -2.1,
   "ratingGames": 10,
   "confidence": 63,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.5,
   "playerId": "79cea24b-da29-4070-8d30-e820330b4c41"
  },
  {
   "name": "Jennifer Kinkel",
   "gender": "Female",
   "team": "Pickle Juice Blackwood",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 3,
   "losses": 7,
   "pointsWon": 176,
   "totalPointsAgainst": 189,
   "mixedWins": 1,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 30,
   "diff": -13,
   "ppg": 17.6,
   "leagueRank": 280,
   "rating": -2.4,
   "ratingGames": 10,
   "confidence": 63,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -1.2,
   "playerId": "0dace2fb-e133-4556-9d90-288c0f41805a"
  },
  {
   "name": "Sydney Peterson",
   "gender": "Female",
   "team": "Picklr Newark",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 3,
   "losses": 7,
   "pointsWon": 181,
   "totalPointsAgainst": 200,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 30,
   "diff": -19,
   "ppg": 18.1,
   "leagueRank": 287,
   "rating": -2.8,
   "ratingGames": 10,
   "confidence": 61,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.5,
   "playerId": "8f4ef30f-10b9-4ef4-b8d1-098be63d84fb"
  },
  {
   "name": "Jacob Alpert",
   "gender": "Male",
   "team": "Jersey Devil Navy",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 3,
   "losses": 7,
   "pointsWon": 179,
   "totalPointsAgainst": 202,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 30,
   "diff": -23,
   "ppg": 17.9,
   "leagueRank": 275,
   "rating": -1,
   "ratingGames": 10,
   "confidence": 60,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": -0.3,
   "playerId": "1cd5949a-4196-4e3a-a611-7188d34f4708"
  },
  {
   "name": "Caity Rietzen",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 3,
   "losses": 7,
   "pointsWon": 170,
   "totalPointsAgainst": 199,
   "mixedWins": 2,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 30,
   "diff": -29,
   "ppg": 17,
   "leagueRank": 289,
   "rating": -0.7,
   "ratingGames": 10,
   "confidence": 63,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 1,
   "playerId": "417f3210-fcc8-4e63-a512-9eb872adb4e5"
  },
  {
   "name": "Simon Darlington",
   "gender": "Male",
   "team": "Pickle Juice Blackwood",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 3,
   "losses": 7,
   "pointsWon": 168,
   "totalPointsAgainst": 198,
   "mixedWins": 2,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 30,
   "diff": -30,
   "ppg": 16.8,
   "leagueRank": 297,
   "rating": -2,
   "ratingGames": 10,
   "confidence": 65,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -0.2,
   "playerId": "9ae1e374-e878-450b-9552-e80472590d9e"
  },
  {
   "name": "Deb Morisie",
   "gender": "Female",
   "team": "Pickleball Kingdom Lehigh Valley",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 3,
   "losses": 7,
   "pointsWon": 154,
   "totalPointsAgainst": 190,
   "mixedWins": 1,
   "mixedLosses": 5,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 30,
   "diff": -36,
   "ppg": 15.4,
   "leagueRank": 323,
   "rating": -4,
   "ratingGames": 10,
   "confidence": 64,
   "strengthOfPartners": 1,
   "strengthOfOpponents": -0.5,
   "playerId": "94d76c8a-d5ee-444b-aa23-3c3ec71e2387"
  },
  {
   "name": "Lisa Pinder",
   "gender": "Female",
   "team": "Jersey Devil Navy",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 3,
   "losses": 7,
   "pointsWon": 152,
   "totalPointsAgainst": 204,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 30,
   "diff": -52,
   "ppg": 15.2,
   "leagueRank": 322,
   "rating": -2.8,
   "ratingGames": 10,
   "confidence": 63,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.2,
   "playerId": "7c49b9f3-7f46-4e68-8786-4fe39fdd8f2b"
  },
  {
   "name": "Homer Abes",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 132,
   "totalPointsAgainst": 134,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 3,
   "playerId": "c59d5e7c-f361-4e53-a58f-66a0f59fa600",
   "winPct": 28.6,
   "diff": -2,
   "ppg": 18.9,
   "leagueRank": 233,
   "rating": 0.4,
   "ratingGames": 7,
   "confidence": 47,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.7
  },
  {
   "name": "Neil Policastro",
   "gender": "Male",
   "team": "Jersey Pickleball Club",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 128,
   "totalPointsAgainst": 139,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 28.6,
   "diff": -11,
   "ppg": 18.3,
   "leagueRank": 285,
   "rating": -1.7,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.5,
   "playerId": "618972bd-6bdd-4987-8711-35eb77ec2b03"
  },
  {
   "name": "Bennett Matthew’S",
   "gender": "Male",
   "team": "Picklr Exton",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 122,
   "totalPointsAgainst": 137,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 28.6,
   "diff": -15,
   "ppg": 17.4,
   "leagueRank": 266,
   "rating": 0.4,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": 0.5,
   "playerId": "460d93c8-9936-43b5-b3ba-7328e174fb2b"
  },
  {
   "name": "Susan M Fett",
   "gender": "Female",
   "team": "Home Court",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 123,
   "totalPointsAgainst": 138,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 28.6,
   "diff": -15,
   "ppg": 17.6,
   "leagueRank": 274,
   "rating": 0,
   "ratingGames": 7,
   "confidence": 52,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.6,
   "playerId": "91857142-d537-4b98-bbc2-481129371949"
  },
  {
   "name": "Dina Perrella",
   "gender": "Female",
   "team": "Home Court",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 113,
   "totalPointsAgainst": 143,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 28.6,
   "diff": -30,
   "ppg": 16.1,
   "leagueRank": 302,
   "rating": -0.6,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 1.1,
   "playerId": "4c4297a1-6537-482c-aeee-beb3aa5c3eb1"
  },
  {
   "name": "Danny Ruiz",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 4,
   "losses": 10,
   "pointsWon": 245,
   "totalPointsAgainst": 277,
   "mixedWins": 3,
   "mixedLosses": 5,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 28.6,
   "diff": -32,
   "ppg": 17.5,
   "leagueRank": 272,
   "rating": -0.4,
   "ratingGames": 14,
   "confidence": 68,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.7,
   "playerId": "cf86f914-08ca-4df6-9cdb-74a23afc2478"
  },
  {
   "name": "Nicholas Jackson",
   "gender": "Male",
   "team": "Picklr Exton",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 4,
   "losses": 10,
   "pointsWon": 237,
   "totalPointsAgainst": 270,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 28.6,
   "diff": -33,
   "ppg": 16.9,
   "leagueRank": 283,
   "rating": -1.2,
   "ratingGames": 14,
   "confidence": 69,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": -0.3,
   "playerId": "bb72e9bd-3d29-4f40-911c-2c5f07c73da6"
  },
  {
   "name": "Matthew Stephenson",
   "gender": "Male",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 4,
   "losses": 10,
   "pointsWon": 232,
   "totalPointsAgainst": 279,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 28.6,
   "diff": -47,
   "ppg": 16.6,
   "leagueRank": 292,
   "rating": -0.9,
   "ratingGames": 14,
   "confidence": 66,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 0.4,
   "playerId": "469c2465-d07c-4449-9adb-046595aeba8a"
  },
  {
   "name": "Gabriel Ferraro",
   "gender": "Male",
   "team": "Pickle Juice Blackwood",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 11,
   "wins": 3,
   "losses": 8,
   "pointsWon": 196,
   "totalPointsAgainst": 217,
   "mixedWins": 3,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 4,
   "winPct": 27.3,
   "diff": -21,
   "ppg": 17.8,
   "leagueRank": 279,
   "rating": -0.7,
   "ratingGames": 11,
   "confidence": 68,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.3,
   "playerId": "2d392f03-9016-4fe2-92d7-db5d24d43a35"
  },
  {
   "name": "John Dechristopher",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 3,
   "losses": 8,
   "pointsWon": 184,
   "totalPointsAgainst": 219,
   "mixedWins": 2,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 27.3,
   "diff": -35,
   "ppg": 16.7,
   "leagueRank": 304,
   "rating": -1.9,
   "ratingGames": 11,
   "confidence": 66,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.6,
   "playerId": "57ad882f-2a78-4756-adcf-3839833ddcd3"
  },
  {
   "name": "Michael Meraglia",
   "gender": "Male",
   "team": "Picklr Exton",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 3,
   "losses": 8,
   "pointsWon": 169,
   "totalPointsAgainst": 216,
   "mixedWins": 2,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 27.3,
   "diff": -47,
   "ppg": 15.4,
   "leagueRank": 306,
   "rating": -0.9,
   "ratingGames": 11,
   "confidence": 66,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": 0.6,
   "playerId": "d9369178-ba48-4e5c-83c9-16fa27b56f5d"
  },
  {
   "name": "Mary Fair",
   "gender": "Female",
   "team": "Players Courtyard",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 4,
   "losses": 11,
   "pointsWon": 259,
   "totalPointsAgainst": 307,
   "mixedWins": 2,
   "mixedLosses": 6,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 26.7,
   "diff": -48,
   "ppg": 17.3,
   "leagueRank": 303,
   "rating": -2.5,
   "ratingGames": 15,
   "confidence": 71,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": -0.2,
   "playerId": "66acdf95-131a-4d7d-89d7-2fe93406d61b"
  },
  {
   "name": "Lauren Fernandez",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 1,
   "losses": 3,
   "pointsWon": 67,
   "totalPointsAgainst": 82,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 25,
   "diff": -15,
   "ppg": 16.8,
   "leagueRank": 314,
   "rating": -1.7,
   "ratingGames": 4,
   "confidence": 39,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0,
   "playerId": "bffa979d-a911-4f4c-8800-3bfb3d237d87"
  },
  {
   "name": "Pamela Toy",
   "gender": "Female",
   "team": "Ballers Philly",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 1,
   "losses": 3,
   "pointsWon": 63,
   "totalPointsAgainst": 82,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "53a2fafe-37e7-4673-ae8d-a6c36cf06003",
   "winPct": 25,
   "diff": -19,
   "ppg": 15.8,
   "leagueRank": 351,
   "rating": -3.6,
   "ratingGames": 4,
   "confidence": 42,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -1.2
  },
  {
   "name": "Chao Ku",
   "gender": "Male",
   "team": "LBF Pickleball",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 136,
   "totalPointsAgainst": 163,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 25,
   "diff": -27,
   "ppg": 17,
   "leagueRank": 301,
   "rating": -1.4,
   "ratingGames": 8,
   "confidence": 57,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.3,
   "playerId": "4550c4d5-3329-421e-836c-7f5e6703cbc8"
  },
  {
   "name": "Corie Stone",
   "gender": "Female",
   "team": "Montville",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 130,
   "totalPointsAgainst": 162,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 25,
   "diff": -32,
   "ppg": 16.3,
   "leagueRank": 318,
   "rating": -2.3,
   "ratingGames": 8,
   "confidence": 55,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": -0.1,
   "playerId": "c8d0efa3-d55c-4c90-a7f1-181f045702d0"
  },
  {
   "name": "Ann Dunn",
   "gender": "Female",
   "team": "Picklr Exton",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 3,
   "losses": 9,
   "pointsWon": 189,
   "totalPointsAgainst": 237,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 25,
   "diff": -48,
   "ppg": 15.8,
   "leagueRank": 309,
   "rating": -1.6,
   "ratingGames": 12,
   "confidence": 67,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0.2,
   "playerId": "fac1e928-060e-4b80-a0e4-bcd4aca0089b"
  },
  {
   "name": "Danielle Kuti",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 3,
   "losses": 11,
   "pointsWon": 197,
   "totalPointsAgainst": 277,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 21.4,
   "diff": -80,
   "ppg": 14.1,
   "leagueRank": 338,
   "rating": -3.3,
   "ratingGames": 14,
   "confidence": 67,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.5,
   "playerId": "c3902bc0-35a6-490d-9909-6f19b1224b99"
  },
  {
   "name": "Shawn Roseman",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 97,
   "totalPointsAgainst": 98,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 4,
   "winPct": 20,
   "diff": -1,
   "ppg": 19.4,
   "leagueRank": 269,
   "rating": -0.1,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.2,
   "playerId": "888f163c-8f8d-4d13-a35a-f3db373db80c"
  },
  {
   "name": "John Tano",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 95,
   "totalPointsAgainst": 98,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 20,
   "diff": -3,
   "ppg": 19,
   "leagueRank": 264,
   "rating": 0.1,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.5,
   "playerId": "4f829164-c19f-49a4-b5c5-8a7f390f1f05"
  },
  {
   "name": "Roe Avila",
   "gender": "Female",
   "team": "Delco Turf & Pickle",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 90,
   "totalPointsAgainst": 95,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 20,
   "diff": -5,
   "ppg": 18,
   "leagueRank": 290,
   "rating": -1.4,
   "ratingGames": 5,
   "confidence": 47,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 0,
   "playerId": "09814092-7369-42b5-8f56-2e0ba6e78097"
  },
  {
   "name": "Mario Contreras",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 92,
   "totalPointsAgainst": 101,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 20,
   "diff": -9,
   "ppg": 18.4,
   "leagueRank": 291,
   "rating": -0.9,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.6,
   "playerId": "323d96c3-4160-410b-96a5-87263e825f62"
  },
  {
   "name": "Hang Liu",
   "gender": "Male",
   "team": "LBF Pickleball",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 94,
   "totalPointsAgainst": 103,
   "mixedWins": 0,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "a414cff9-d942-47f8-848f-c50abc9c71eb",
   "winPct": 20,
   "diff": -9,
   "ppg": 18.8,
   "leagueRank": 277,
   "rating": 0.2,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.8
  },
  {
   "name": "Esha Gajjar",
   "gender": "Female",
   "team": "Forward",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 86,
   "totalPointsAgainst": 96,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 20,
   "diff": -10,
   "ppg": 17.2,
   "leagueRank": 296,
   "rating": 0.3,
   "ratingGames": 5,
   "confidence": 44,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 1.3,
   "playerId": "947cf956-08c0-44d2-9bae-2458fd24c9d0"
  },
  {
   "name": "Kierstin Gant",
   "gender": "Female",
   "team": "Bounce Tempest",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 92,
   "totalPointsAgainst": 103,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 20,
   "diff": -11,
   "ppg": 18.4,
   "leagueRank": 286,
   "rating": 0.4,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 1.6,
   "playerId": "bd7c6356-bebd-43a3-85c7-e1f8e51abc5e"
  },
  {
   "name": "Justyna Wojdyla",
   "gender": "Female",
   "team": "Forward",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 88,
   "totalPointsAgainst": 100,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 20,
   "diff": -12,
   "ppg": 17.6,
   "leagueRank": 299,
   "rating": -0.3,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.6,
   "playerId": "12db9b49-da72-4367-8e2c-b9718a9bc2fb"
  },
  {
   "name": "Irene Fitzgerald",
   "gender": "Female",
   "team": "Delco Turf & Pickle",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 88,
   "totalPointsAgainst": 103,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 20,
   "diff": -15,
   "ppg": 17.6,
   "leagueRank": 312,
   "rating": -2.1,
   "ratingGames": 5,
   "confidence": 49,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": 0.4,
   "playerId": "50fa5964-af4e-4a3d-b3cd-b672b3f87fe8"
  },
  {
   "name": "Michael Marinello",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 84,
   "totalPointsAgainst": 103,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 20,
   "diff": -19,
   "ppg": 16.8,
   "leagueRank": 310,
   "rating": -1.3,
   "ratingGames": 5,
   "confidence": 44,
   "strengthOfPartners": -2,
   "strengthOfOpponents": -0.3,
   "playerId": "4bc1d4a3-5eea-4d41-9479-73fcfe5a4847"
  },
  {
   "name": "Mike Scioli Jr",
   "gender": "Male",
   "team": "Forward",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 83,
   "totalPointsAgainst": 103,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 20,
   "diff": -20,
   "ppg": 16.6,
   "leagueRank": 320,
   "rating": -1.7,
   "ratingGames": 5,
   "confidence": 43,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.6,
   "playerId": "6ae15153-88e8-48c0-93b6-8be97adbadce"
  },
  {
   "name": "Kim Mchugh",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 75,
   "totalPointsAgainst": 95,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 20,
   "diff": -20,
   "ppg": 15,
   "leagueRank": 325,
   "rating": -1,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.8,
   "playerId": "d67489d0-d69c-425e-86a7-0f7ade15ed25"
  },
  {
   "name": "Jonathan Carter",
   "gender": "Male",
   "team": "Jersey Devil Navy",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 79,
   "totalPointsAgainst": 101,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 20,
   "diff": -22,
   "ppg": 15.8,
   "leagueRank": 328,
   "rating": -1.8,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": -0.2,
   "playerId": "33fe293d-5913-41af-8f89-4a431ed92ab7"
  },
  {
   "name": "Carolina Reese",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 79,
   "totalPointsAgainst": 103,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 20,
   "diff": -24,
   "ppg": 15.8,
   "leagueRank": 324,
   "rating": -1.5,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.8,
   "playerId": "8f93a05d-c51e-48c4-901c-4ddbe881b309"
  },
  {
   "name": "Jon Palabay",
   "gender": "Male",
   "team": "Pickle Juice Blackwood",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 2,
   "losses": 8,
   "pointsWon": 172,
   "totalPointsAgainst": 200,
   "mixedWins": 1,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 20,
   "diff": -28,
   "ppg": 17.2,
   "leagueRank": 305,
   "rating": -1.2,
   "ratingGames": 10,
   "confidence": 65,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.5,
   "playerId": "34f3ac90-3b92-469c-8ae9-b88fea16ffa1"
  },
  {
   "name": "Christina Vuong",
   "gender": "Female",
   "team": "Bounce Tempest",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 1,
   "losses": 4,
   "pointsWon": 70,
   "totalPointsAgainst": 101,
   "mixedWins": 1,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 20,
   "diff": -31,
   "ppg": 14,
   "leagueRank": 348,
   "rating": -2.1,
   "ratingGames": 5,
   "confidence": 43,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.8,
   "playerId": "1c8ac03f-c618-46c4-bed2-c8391c4e1028"
  },
  {
   "name": "Olivia Lee",
   "gender": "Female",
   "team": "Forward",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 2,
   "losses": 8,
   "pointsWon": 172,
   "totalPointsAgainst": 206,
   "mixedWins": 1,
   "mixedLosses": 5,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 20,
   "diff": -34,
   "ppg": 17.2,
   "leagueRank": 313,
   "rating": -2.4,
   "ratingGames": 10,
   "confidence": 63,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.2,
   "playerId": "af2bdee6-7d41-4730-869b-2c6530e7378d"
  },
  {
   "name": "Hanna Cutler",
   "gender": "Female",
   "team": "Jersey Devil Navy",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 2,
   "losses": 8,
   "pointsWon": 153,
   "totalPointsAgainst": 204,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 20,
   "diff": -51,
   "ppg": 15.3,
   "leagueRank": 337,
   "rating": -2.7,
   "ratingGames": 10,
   "confidence": 64,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": -0.2,
   "playerId": "af5e2e89-3606-4d7e-8c5a-b397ff786303"
  },
  {
   "name": "Taryn Seidner",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 3,
   "losses": 12,
   "pointsWon": 245,
   "totalPointsAgainst": 307,
   "mixedWins": 1,
   "mixedLosses": 6,
   "genderWins": 2,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 3,
   "winPct": 20,
   "diff": -62,
   "ppg": 16.3,
   "leagueRank": 315,
   "rating": -2,
   "ratingGames": 15,
   "confidence": 66,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.9,
   "playerId": "2dd97210-f5b8-4645-b400-a2611539cca8"
  },
  {
   "name": "May Wang",
   "gender": "Female",
   "team": "LBF Pickleball",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 2,
   "losses": 9,
   "pointsWon": 178,
   "totalPointsAgainst": 217,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 18.2,
   "diff": -39,
   "ppg": 16.2,
   "leagueRank": 321,
   "rating": -1.5,
   "ratingGames": 11,
   "confidence": 64,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.7,
   "playerId": "d31b9b93-03db-444e-85b8-75895b8469ea"
  },
  {
   "name": "Arnaud Clairay",
   "gender": "Male",
   "team": "Picklr Exton",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 2,
   "losses": 9,
   "pointsWon": 150,
   "totalPointsAgainst": 221,
   "mixedWins": 2,
   "mixedLosses": 6,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 18.2,
   "diff": -71,
   "ppg": 13.6,
   "leagueRank": 350,
   "rating": -3.1,
   "ratingGames": 11,
   "confidence": 67,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.5,
   "playerId": "1c8905b3-3118-4fae-aca2-f9ec43d07c30"
  },
  {
   "name": "Andress Mims",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 109,
   "totalPointsAgainst": 114,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 16.7,
   "diff": -5,
   "ppg": 18.2,
   "leagueRank": 288,
   "rating": -0.2,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.2,
   "playerId": "e9878f35-8a92-4887-834e-d8a76881ae41"
  },
  {
   "name": "Shannon Vinciguerra",
   "gender": "Female",
   "team": "Picklr Exton",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 103,
   "totalPointsAgainst": 119,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 16.7,
   "diff": -16,
   "ppg": 17.2,
   "leagueRank": 300,
   "rating": 0.3,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": -2,
   "strengthOfOpponents": 0.6,
   "playerId": "d9f25bd7-6620-4a61-9092-af7d24b68b3e"
  },
  {
   "name": "Luis Guzman",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 107,
   "totalPointsAgainst": 124,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 16.7,
   "diff": -17,
   "ppg": 17.8,
   "leagueRank": 298,
   "rating": 0,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0.7,
   "playerId": "10eba8b1-6e12-4d4b-994c-8bc62f617909"
  },
  {
   "name": "Monika Torbus",
   "gender": "Female",
   "team": "Flemington",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 105,
   "totalPointsAgainst": 123,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 16.7,
   "diff": -18,
   "ppg": 17.5,
   "leagueRank": 308,
   "rating": -1.2,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.6,
   "playerId": "8f56fb31-09f6-4c12-aa46-6b2f56433f3d"
  },
  {
   "name": "Ellen Edson",
   "gender": "Female",
   "team": "Home Court",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 100,
   "totalPointsAgainst": 122,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 16.7,
   "diff": -22,
   "ppg": 16.7,
   "leagueRank": 317,
   "rating": -0.6,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 1.2,
   "playerId": "7a4556ab-110a-4c5b-84b1-05edd8800510"
  },
  {
   "name": "Ted Asavamongkolkul",
   "gender": "Male",
   "team": "Ballers Philly",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 95,
   "totalPointsAgainst": 117,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 16.7,
   "diff": -22,
   "ppg": 15.8,
   "leagueRank": 330,
   "rating": -1.1,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 1.3,
   "playerId": "ee07033c-b5a8-4d28-8920-7873dc8ffac0"
  },
  {
   "name": "Joe Carson",
   "gender": "Male",
   "team": "Home Court",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 100,
   "totalPointsAgainst": 124,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "447b08ee-f4b1-4b43-b2ff-bdc780b908b5",
   "winPct": 16.7,
   "diff": -24,
   "ppg": 16.7,
   "leagueRank": 326,
   "rating": -2.2,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": -0.2
  },
  {
   "name": "Carolyn Antuna",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 98,
   "totalPointsAgainst": 124,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 16.7,
   "diff": -26,
   "ppg": 16.3,
   "leagueRank": 319,
   "rating": -0.1,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 1.6,
   "playerId": "5a372fd3-5bab-4d8a-b578-8c07491bf13e"
  },
  {
   "name": "Tara Oko",
   "gender": "Female",
   "team": "Dill Dinkers Freehold",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 98,
   "totalPointsAgainst": 124,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 16.7,
   "diff": -26,
   "ppg": 16.3,
   "leagueRank": 316,
   "rating": -0.4,
   "ratingGames": 6,
   "confidence": 47,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": 0.9,
   "playerId": "f3d6fe67-ef5d-46e9-84d2-e2a75c408bc7"
  },
  {
   "name": "Laura Spilatro",
   "gender": "Female",
   "team": "Home Court",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 89,
   "totalPointsAgainst": 117,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "459df1a4-6663-4d9e-9b05-bf33f5e9d8ea",
   "winPct": 16.7,
   "diff": -28,
   "ppg": 14.8,
   "leagueRank": 341,
   "rating": -1.8,
   "ratingGames": 6,
   "confidence": 49,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.7
  },
  {
   "name": "Kevin Wan",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 89,
   "totalPointsAgainst": 124,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 16.7,
   "diff": -35,
   "ppg": 14.8,
   "leagueRank": 336,
   "rating": -0.9,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": -2.6,
   "strengthOfOpponents": 0.9,
   "playerId": "dd6c56e0-9ff5-46ae-bc4a-0e7fa7cae5fa"
  },
  {
   "name": "Shawn Mayer",
   "gender": "Male",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 88,
   "totalPointsAgainst": 124,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 16.7,
   "diff": -36,
   "ppg": 14.7,
   "leagueRank": 339,
   "rating": -0.8,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 1.9,
   "playerId": "af3ce205-4f9a-4382-8128-4a20fe26737b"
  },
  {
   "name": "Taylor Runyen",
   "gender": "Male",
   "team": "APC Garden State",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 85,
   "totalPointsAgainst": 122,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 16.7,
   "diff": -37,
   "ppg": 14.2,
   "leagueRank": 352,
   "rating": -3.2,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": -1,
   "strengthOfOpponents": -0.1,
   "playerId": "cda5a763-48f3-4303-8579-42ff05230f45"
  },
  {
   "name": "Jim Nelson",
   "gender": "Male",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 82,
   "totalPointsAgainst": 124,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 16.7,
   "diff": -42,
   "ppg": 13.7,
   "leagueRank": 347,
   "rating": -1,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 1.9,
   "playerId": "57b87cca-b8c5-4868-a8c2-8848f441497b"
  },
  {
   "name": "Emiliya Mizrahi",
   "gender": "Female",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 2,
   "losses": 10,
   "pointsWon": 190,
   "totalPointsAgainst": 246,
   "mixedWins": 1,
   "mixedLosses": 7,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 16.7,
   "diff": -56,
   "ppg": 15.8,
   "leagueRank": 332,
   "rating": -2.1,
   "ratingGames": 12,
   "confidence": 60,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.8,
   "playerId": "f173be84-93c7-46b8-b828-d44ddc52d63c"
  },
  {
   "name": "David Tabacco",
   "gender": "Male",
   "team": "Flemington",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 2,
   "losses": 11,
   "pointsWon": 213,
   "totalPointsAgainst": 267,
   "mixedWins": 0,
   "mixedLosses": 5,
   "genderWins": 2,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 15.4,
   "diff": -54,
   "ppg": 16.4,
   "leagueRank": 327,
   "rating": -2.1,
   "ratingGames": 13,
   "confidence": 69,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.8,
   "playerId": "717d97f0-4f08-476f-9c53-7595605bc0b0"
  },
  {
   "name": "Heather Triozzi",
   "gender": "Female",
   "team": "Picklr Exton",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 13,
   "wins": 2,
   "losses": 11,
   "pointsWon": 206,
   "totalPointsAgainst": 263,
   "mixedWins": 1,
   "mixedLosses": 6,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 15.4,
   "diff": -57,
   "ppg": 15.8,
   "leagueRank": 329,
   "rating": -1.5,
   "ratingGames": 13,
   "confidence": 69,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 0.4,
   "playerId": "7c120762-4a31-4bdd-9fce-8b43bd90a07e"
  },
  {
   "name": "Jamie Damirgian",
   "gender": "Female",
   "team": "Picklr Exton",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 128,
   "totalPointsAgainst": 145,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 14.3,
   "diff": -17,
   "ppg": 18.3,
   "leagueRank": 295,
   "rating": 0,
   "ratingGames": 7,
   "confidence": 54,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": 0.3,
   "playerId": "67e72d20-d17c-4480-8159-9e4be9e18459"
  },
  {
   "name": "Scott Bersak",
   "gender": "Male",
   "team": "Picklr Exton",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 104,
   "totalPointsAgainst": 138,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 14.3,
   "diff": -34,
   "ppg": 14.9,
   "leagueRank": 343,
   "rating": -1.3,
   "ratingGames": 7,
   "confidence": 55,
   "strengthOfPartners": -2.6,
   "strengthOfOpponents": 0.1,
   "playerId": "f0d706b3-1a14-4c99-b51e-c9ec5f866834"
  },
  {
   "name": "Brandon Pfeffer",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 109,
   "totalPointsAgainst": 145,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 14.3,
   "diff": -36,
   "ppg": 15.6,
   "leagueRank": 333,
   "rating": -0.6,
   "ratingGames": 7,
   "confidence": 51,
   "strengthOfPartners": -2.3,
   "strengthOfOpponents": 1,
   "playerId": "c52386ce-a722-4da6-8838-4a28882a4e83"
  },
  {
   "name": "Edwin Garcia",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 104,
   "totalPointsAgainst": 141,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 14.3,
   "diff": -37,
   "ppg": 14.9,
   "leagueRank": 342,
   "rating": -2.1,
   "ratingGames": 7,
   "confidence": 50,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 0.3,
   "playerId": "a4310f70-ee30-4e55-b189-2efd837b7189"
  },
  {
   "name": "John Lottier",
   "gender": "Male",
   "team": "Flemington",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 100,
   "totalPointsAgainst": 138,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 14.3,
   "diff": -38,
   "ppg": 14.3,
   "leagueRank": 349,
   "rating": -2.6,
   "ratingGames": 7,
   "confidence": 55,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.6,
   "playerId": "d1541ad0-e7fc-4783-949a-8f3f1ce9722d"
  },
  {
   "name": "Tayon Hart",
   "gender": "Male",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 104,
   "totalPointsAgainst": 145,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "545f9968-fc0a-420b-ba42-db16c6e1f884",
   "winPct": 14.3,
   "diff": -41,
   "ppg": 14.9,
   "leagueRank": 340,
   "rating": -0.6,
   "ratingGames": 7,
   "confidence": 54,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 1.7
  },
  {
   "name": "Allyson Fry",
   "gender": "Female",
   "team": "Dill Dinkers Freehold",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 79,
   "totalPointsAgainst": 145,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 14.3,
   "diff": -66,
   "ppg": 11.3,
   "leagueRank": 363,
   "rating": -2.9,
   "ratingGames": 7,
   "confidence": 51,
   "strengthOfPartners": -2.3,
   "strengthOfOpponents": 1.3,
   "playerId": "ccab801b-845c-4021-9ac9-146b1cdc1aef"
  },
  {
   "name": "Jen Ogorzat",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 2,
   "losses": 13,
   "pointsWon": 239,
   "totalPointsAgainst": 311,
   "mixedWins": 1,
   "mixedLosses": 7,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 4,
   "playerId": "f0f8c802-b218-4a89-a9a8-cc127214c1d5",
   "winPct": 13.3,
   "diff": -72,
   "ppg": 15.9,
   "leagueRank": 334,
   "rating": -2.1,
   "ratingGames": 15,
   "confidence": 64,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.6
  },
  {
   "name": "Yushan Mirza",
   "gender": "Female",
   "team": "ACE Downingtown",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 114,
   "totalPointsAgainst": 166,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "winPct": 12.5,
   "diff": -52,
   "ppg": 14.3,
   "leagueRank": 353,
   "rating": -1.8,
   "ratingGames": 8,
   "confidence": 56,
   "strengthOfPartners": -1.8,
   "strengthOfOpponents": 1,
   "playerId": "e3605ba3-63c4-42da-b1b3-d067ef23548c"
  },
  {
   "name": "Guan Yang",
   "gender": "Male",
   "team": "LBF Pickleball",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 1,
   "losses": 9,
   "pointsWon": 167,
   "totalPointsAgainst": 208,
   "mixedWins": 0,
   "mixedLosses": 5,
   "genderWins": 1,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 3,
   "winPct": 10,
   "diff": -41,
   "ppg": 16.7,
   "leagueRank": 335,
   "rating": -1.4,
   "ratingGames": 10,
   "confidence": 60,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.5,
   "playerId": "60049f31-bf6f-4392-9b18-f73a6d156bd2"
  },
  {
   "name": "Christina Sheehan",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 1,
   "losses": 9,
   "pointsWon": 156,
   "totalPointsAgainst": 201,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 10,
   "diff": -45,
   "ppg": 15.6,
   "leagueRank": 345,
   "rating": -0.9,
   "ratingGames": 10,
   "confidence": 63,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 1.5,
   "playerId": "ed037154-d16e-4bb2-a2d2-d485c6f5d870"
  },
  {
   "name": "Michelle Lin",
   "gender": "Female",
   "team": "LBF Pickleball",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 1,
   "losses": 9,
   "pointsWon": 161,
   "totalPointsAgainst": 208,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 10,
   "diff": -47,
   "ppg": 16.1,
   "leagueRank": 344,
   "rating": -2.6,
   "ratingGames": 10,
   "confidence": 61,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.2,
   "playerId": "c51fb84c-4210-4884-84e0-a6854852c31a"
  },
  {
   "name": "Chris Fantin",
   "gender": "Male",
   "team": "Home Court",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 1,
   "losses": 11,
   "pointsWon": 173,
   "totalPointsAgainst": 250,
   "mixedWins": 1,
   "mixedLosses": 5,
   "genderWins": 0,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 1,
   "winPct": 8.3,
   "diff": -77,
   "ppg": 14.4,
   "leagueRank": 354,
   "rating": -2.7,
   "ratingGames": 12,
   "confidence": 63,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.9,
   "playerId": "715b131c-87a5-4887-9505-7fb780511902"
  },
  {
   "name": "Issac Gao",
   "gender": "Male",
   "team": "Picklr Exton",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 1,
   "losses": 13,
   "pointsWon": 190,
   "totalPointsAgainst": 288,
   "mixedWins": 1,
   "mixedLosses": 6,
   "genderWins": 0,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 7.1,
   "diff": -98,
   "ppg": 13.6,
   "leagueRank": 361,
   "rating": -3.4,
   "ratingGames": 14,
   "confidence": 66,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.8,
   "playerId": "ba54259c-c50f-446b-9385-f12e5c6fdf23"
  },
  {
   "name": "Jonathan Fossum",
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
   "leagueRank": 417,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "03ebfc9e-7df6-479d-b7bb-00bafbf4192d"
  },
  {
   "name": "Michael Plumeri",
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
   "leagueRank": 472,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "04fbcf0b-22bf-4df0-82be-9456554f4f59"
  },
  {
   "name": "Amanda Shannon",
   "gender": "Female",
   "team": "Forward",
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
   "leagueRank": 485,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "0f4c760b-2f8c-402d-b544-11902855b3fc"
  },
  {
   "name": "Marianna Telerman",
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
   "leagueRank": 496,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "1839837f-46c6-4ae0-8150-add6abd2d1a0"
  },
  {
   "name": "Victoria Young",
   "gender": "Female",
   "team": "Pickle Juice Blackwood",
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
   "leagueRank": 510,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "184907fa-5d07-4ab9-a1c5-f0007af00d59"
  },
  {
   "name": "Abigail Barger",
   "gender": "Female",
   "team": "Pickleball Kingdom Lehigh Valley",
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
   "leagueRank": 385,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "203ec7c4-064b-4530-b2ee-2ff9decdf406"
  },
  {
   "name": "Bill Nguyen",
   "gender": "Male",
   "team": "Forward",
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
   "leagueRank": 459,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "205b26e9-e90c-4da9-a58b-4aad708d68df"
  },
  {
   "name": "Robyn Wolfe",
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
   "leagueRank": 506,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "2123ba14-b2c7-40f0-a8d8-7b6ba90e3a19"
  },
  {
   "name": "Kelsey Miller",
   "gender": "Female",
   "team": "PKLD",
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
   "leagueRank": 454,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "218e6e5d-e016-4509-9642-c40f2304d76b"
  },
  {
   "name": "Timothy Phillippe",
   "gender": "Male",
   "team": "Picklr Newark",
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
   "leagueRank": 470,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "24084df9-298f-42f6-ad1d-a4abb62410dc"
  },
  {
   "name": "Minette Tubo",
   "gender": "Female",
   "team": "Picklr Fair Lawn",
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
   "leagueRank": 499,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "287924dd-9eab-427d-adcd-f65ce9f866d4"
  },
  {
   "name": "Allyssa Perez",
   "gender": "Female",
   "team": "Picklr Manahawkin",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": true,
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
   "leagueRank": 468,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "2935d0db-6050-4349-9c2e-a4adf18e32f0"
  },
  {
   "name": "Piero Accinelli",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
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
   "leagueRank": 381,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "2b68baa8-32a7-45b1-8d44-3211a61edd7f"
  },
  {
   "name": "Melissa Dipierro",
   "gender": "Female",
   "team": "Picklr Exton",
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
   "leagueRank": 405,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "2ed4e87b-b9f6-4df8-b733-8aaf89ddc285"
  },
  {
   "name": "Sammy Cohen",
   "gender": "Male",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": true,
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
   "leagueRank": 400,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "35950670-9ed9-429d-9283-d5c1ac10d1cb"
  },
  {
   "name": "Calvin Fernandez",
   "gender": "Male",
   "team": "Montville",
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
   "leagueRank": 414,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "399f6bd1-f7b4-45d7-8707-197dd6b93d87"
  },
  {
   "name": "Daniel Seng",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": true,
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
   "leagueRank": 484,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "40303bf3-7bee-465b-834a-51847fab81f6"
  },
  {
   "name": "Alyssa Barotilla",
   "gender": "Female",
   "team": "Pickleball Kingdom Watchung",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": true,
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
   "leagueRank": 387,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "4237db61-24b3-46ea-83dc-b06fd16166f2"
  },
  {
   "name": "Anne Siglam",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": true,
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
   "leagueRank": 490,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "426a989f-2173-4030-9736-b18b2316fc49"
  },
  {
   "name": "Varun Kabaria",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
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
   "leagueRank": 432,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "49f9e3a4-2ae2-4335-ada3-28486b1a65d4"
  },
  {
   "name": "Paige Rebeccah Smith",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": true,
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
   "leagueRank": 476,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "4a188481-bbb3-4d7b-b507-89f74d58af12"
  },
  {
   "name": "Trevor Copeland",
   "gender": "Male",
   "team": "Picklr Exton",
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
   "leagueRank": 402,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "4a8a1fa6-82b4-423c-849f-6106349bd8dd"
  },
  {
   "name": "Risa Scott-Smith",
   "gender": "Female",
   "team": "Ballers Philly",
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
   "leagueRank": 483,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "5104ee51-fe1b-45d4-b3db-bdb759a0c2e7"
  },
  {
   "name": "Mike Esfahani",
   "gender": "Male",
   "team": "Bounce Tempest",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": true,
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
   "leagueRank": 411,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "5309d94e-5f39-4cca-a25d-cba3773abe73"
  },
  {
   "name": "Sarina Manetta",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": true,
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
   "leagueRank": 445,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "55ccbdaa-8f11-4c08-abb5-6e71438471b1"
  },
  {
   "name": "Brad Oakes",
   "gender": "Male",
   "team": "Forward",
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
   "leagueRank": 464,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "5898d757-7891-46a3-83f4-f8d51dd73e32"
  },
  {
   "name": "Prashanth Koshy",
   "gender": "Male",
   "team": "Pickleball Kingdom Hillsborough",
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
   "leagueRank": 435,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "5b619b72-b78a-49ba-872d-c64db6084a67"
  },
  {
   "name": "Rachael Nissim",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
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
   "leagueRank": 463,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "62b05b93-7452-484e-a241-32014888ef05"
  },
  {
   "name": "Carolyn Shipe",
   "gender": "Female",
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
   "leagueRank": 489,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "6775ab12-38b5-4f41-a6c1-df35276b63c2"
  },
  {
   "name": "Matt Enz",
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
   "leagueRank": 410,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "683d1fdd-2fa0-4775-a8dd-0f733aa9f1a3"
  },
  {
   "name": "Jenna Posner",
   "gender": "Female",
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
   "leagueRank": 473,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "6be7fecc-58ce-4a10-b2f9-bf98567f3427"
  },
  {
   "name": "Kristen Venditti",
   "gender": "Female",
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
   "leagueRank": 500,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "6f6bc1eb-b730-46c0-a148-8232a8f10fdd"
  },
  {
   "name": "Ilya Shats",
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
   "leagueRank": 487,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "7349c25b-46d0-4bad-b94d-1e400622a150"
  },
  {
   "name": "Rick Wickenheisser",
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
   "leagueRank": 505,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "741048e8-2c91-4466-bb1c-1a624d1dabd9"
  },
  {
   "name": "Caroline Miller",
   "gender": "Female",
   "team": "Picklr Exton",
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
   "leagueRank": 453,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "742d055d-10cf-4e3a-8cba-373b169bad38"
  },
  {
   "name": "Marx Benzon",
   "gender": "Male",
   "team": "Pickleball Kingdom Tinton Falls",
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
   "leagueRank": 389,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "752e8716-7219-4ae0-8031-d8d02ceab9fa"
  },
  {
   "name": "Emily Sheetz",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
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
   "leagueRank": 488,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "7760e8c7-d01f-488c-8944-cbf18b8f6952"
  },
  {
   "name": "Arvie Flores",
   "gender": "Male",
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
   "leagueRank": 416,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "7e89cce5-aed0-4d38-ab11-cd962d69fb46"
  },
  {
   "name": "Maricel Pineda",
   "gender": "Female",
   "team": "Picklr Fair Lawn",
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
   "leagueRank": 471,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "810856e7-f746-4641-a633-d870ff787e8d"
  },
  {
   "name": "Stephanie Ho",
   "gender": "Female",
   "team": "PKLD",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": true,
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
   "leagueRank": 427,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "815aa4ab-dc28-4202-bd71-c0209705cf1a"
  },
  {
   "name": "Srinivasa Bathula",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
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
   "leagueRank": 388,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "82b18d9f-df22-47b6-a42b-f008515f22f9"
  },
  {
   "name": "Christopher Munden",
   "gender": "Male",
   "team": "Ballers Philly",
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
   "leagueRank": 457,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "83f40622-8ed8-42eb-8cbd-767d90f927df"
  },
  {
   "name": "J David Maile",
   "gender": "Male",
   "team": "Picklr Exton",
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
   "leagueRank": 443,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "846135ff-c63f-435e-9415-1fb25e31a8ec"
  },
  {
   "name": "Martina Tejeda",
   "gender": "Female",
   "team": "Jersey Devil Navy",
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
   "leagueRank": 495,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "8d954af5-f3d4-45c9-a172-0fe2cbdc4e14"
  },
  {
   "name": "Rebecca Ramos",
   "gender": "Female",
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
   "leagueRank": 475,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "91fa0505-9e84-4deb-b11a-a42e6c55696c"
  },
  {
   "name": "Cade Chrebet",
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
   "leagueRank": 399,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "9a5426e8-02ac-4424-89b1-8df0960f912a"
  },
  {
   "name": "Joe Ying",
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
   "leagueRank": 509,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "9a7a5245-ece8-4e0e-879b-cb0618a285e2"
  },
  {
   "name": "Frederick Lloyd Sabino",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
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
   "leagueRank": 481,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "9b026863-6217-4ff0-9a36-9ce2a6696230"
  },
  {
   "name": "Yong Jin",
   "gender": "Male",
   "team": "Premiere",
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
   "leagueRank": 430,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "9dfeae9a-9e57-4720-9291-a41ade03daaa"
  },
  {
   "name": "Olivia Jung-Moss",
   "gender": "Female",
   "team": "PKLD",
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
   "leagueRank": 431,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "a0a5ae2c-c3b1-44cc-8b27-0e88695ff637"
  },
  {
   "name": "Joshin Reddy",
   "gender": "Male",
   "team": "Montville",
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
   "leagueRank": 477,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "a13d5ae0-3a73-45b7-ae56-ea96d70c66c5"
  },
  {
   "name": "Tarik Zouarhi",
   "gender": "Male",
   "team": "Delco Turf & Pickle",
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
   "leagueRank": 511,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "a26d005a-c084-4edb-8c82-bcdbd21e531b"
  },
  {
   "name": "Jensine Chikkala",
   "gender": "Female",
   "team": "ACE Downingtown",
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
   "leagueRank": 398,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "a4cc43d3-8cb0-4ee6-8a8c-293a9d6c81ce"
  },
  {
   "name": "Allison Hartman",
   "gender": "Female",
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
   "leagueRank": 425,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "a6b783cc-7aeb-476e-adcc-da306772071c"
  },
  {
   "name": "Janelle Donnian",
   "gender": "Female",
   "team": "APC Garden State",
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
   "leagueRank": 407,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "ab1e8f20-ca9b-42fe-9c6a-3785c86ffe65"
  },
  {
   "name": "Padma Gopi",
   "gender": "Female",
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
   "leagueRank": 422,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "b6d7b5a0-f05d-4ed5-ad11-a24c4a7e1ac4"
  },
  {
   "name": "Philip Panajon",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
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
   "leagueRank": 466,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "b96fc23a-d8d0-426f-88c1-e58060ff81db"
  },
  {
   "name": "Adriel Menendez",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
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
   "leagueRank": 451,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "bda20213-ea4b-4f64-a0dc-f7e3eef544bf"
  },
  {
   "name": "Brittni Veyna",
   "gender": "Female",
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
   "leagueRank": 501,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "bf60680b-003f-4083-b6ce-25bf3a7cd964"
  },
  {
   "name": "Mark Cruz",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
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
   "leagueRank": 403,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "c38bfdce-1253-4737-933d-afbe0d1b63d4"
  },
  {
   "name": "Brandon Lam",
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
   "leagueRank": 437,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "c6e4007e-12eb-4af0-a0fa-56f7bde6f624"
  },
  {
   "name": "Supriya Kothakonda",
   "gender": "Female",
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
   "leagueRank": 436,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "cec94ca2-1b4a-4787-803a-b08ccdae1d18"
  },
  {
   "name": "Nick Sotera",
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
   "leagueRank": 492,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "ceeba741-2cf1-4999-ac10-a6b575412e06"
  },
  {
   "name": "Leo Wong",
   "gender": "Male",
   "team": "Pickleball Kingdom Tinton Falls",
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
   "leagueRank": 507,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "d825ed75-4c43-41e6-a8e0-c0f48d6bec34"
  },
  {
   "name": "Johnny Deng",
   "gender": "Male",
   "team": "Picklr Exton",
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
   "leagueRank": 404,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "e105f8f9-ac3d-4720-862b-477048d740cd"
  },
  {
   "name": "Connor Hall",
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
   "leagueRank": 424,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "e49a2d99-e31a-4f0b-ae83-9e0d68b86f66"
  },
  {
   "name": "Anthony Oliver",
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
   "leagueRank": 465,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "e99589b9-dcaa-405f-ad41-0cda95a5f236"
  },
  {
   "name": "Michele Chai",
   "gender": "Female",
   "team": "Jersey Devil Navy",
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
   "leagueRank": 396,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "ea832f36-2157-434a-8f02-bbb2c0bfe722"
  },
  {
   "name": "Yuyi Lin",
   "gender": "Female",
   "team": "Premiere",
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
   "leagueRank": 441,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "eca8a092-4206-4e2f-a241-36a137615f23"
  },
  {
   "name": "Nico Torres",
   "gender": "Male",
   "team": "Picklr Newark",
   "matches": 0,
   "outsideSub": false,
   "isCaptain": true,
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
   "leagueRank": 497,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "f4e43c51-5f07-44f0-805e-ced79fea11f6"
  },
  {
   "name": "Leah Stup",
   "gender": "Female",
   "team": "Pickleball Kingdom Hillsborough",
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
   "leagueRank": 494,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "f7f8bedd-22d4-48dc-92cc-de4f17eed580"
  },
  {
   "name": "Quaiser Imam",
   "gender": "Male",
   "team": "ACE Downingtown",
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
   "leagueRank": 428,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "fab42e0a-4ee3-49c8-b759-2a62d3153014"
  },
  {
   "name": "James Ouyang",
   "gender": "Male",
   "team": "LBF Pickleball",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 0,
   "losses": 4,
   "pointsWon": 70,
   "totalPointsAgainst": 84,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "b9f7d35c-f183-41ea-99dd-52c790480ff1",
   "winPct": 0,
   "diff": -14,
   "ppg": 17.5,
   "leagueRank": 357,
   "rating": -0.8,
   "ratingGames": 4,
   "confidence": 38,
   "strengthOfPartners": -1.5,
   "strengthOfOpponents": 0.2
  },
  {
   "name": "Kyle Woerner",
   "gender": "Male",
   "team": "Jersey Devil Navy",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 88,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 0,
   "diff": -17,
   "ppg": 17.6,
   "leagueRank": 346,
   "rating": -2.3,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": -1.2,
   "playerId": "49766802-f2c8-46aa-8ca1-e917160a60f0"
  },
  {
   "name": "Jordan Flavell-Boney",
   "gender": "Female",
   "team": "Montville",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 3,
   "wins": 0,
   "losses": 3,
   "pointsWon": 43,
   "totalPointsAgainst": 63,
   "mixedWins": 0,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -20,
   "ppg": 14.3,
   "leagueRank": 380,
   "rating": -3,
   "ratingGames": 3,
   "confidence": 35,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.2,
   "playerId": "e03ecaf9-5a29-4fca-b544-ae92c3226cec"
  },
  {
   "name": "Mira Sigal-Feldman",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 81,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 0,
   "diff": -24,
   "ppg": 16.2,
   "leagueRank": 356,
   "rating": -2.3,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.6,
   "playerId": "26ad6baa-c97e-4fb8-974a-d8c1c6e664cc"
  },
  {
   "name": "Ling Vance",
   "gender": "Female",
   "team": "LBF Pickleball",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 0,
   "losses": 4,
   "pointsWon": 58,
   "totalPointsAgainst": 84,
   "mixedWins": 0,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -26,
   "ppg": 14.5,
   "leagueRank": 374,
   "rating": -3,
   "ratingGames": 4,
   "confidence": 40,
   "strengthOfPartners": -2.4,
   "strengthOfOpponents": -0.9,
   "playerId": "a946c053-1482-4e6f-b494-4df974218bb7"
  },
  {
   "name": "Dave Brucker",
   "gender": "Male",
   "team": "Jersey Devil Navy",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 78,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 0,
   "diff": -27,
   "ppg": 15.6,
   "leagueRank": 358,
   "rating": -1.4,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": -1.2,
   "strengthOfOpponents": 0.9,
   "playerId": "22e07ace-661a-4942-b923-d48f446b0bba"
  },
  {
   "name": "Iqra Hasan-Calmo",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 77,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "29c4170e-eb9f-400b-bc22-92f83e056e22",
   "winPct": 0,
   "diff": -28,
   "ppg": 15.4,
   "leagueRank": 359,
   "rating": -3.1,
   "ratingGames": 5,
   "confidence": 42,
   "strengthOfPartners": -1.7,
   "strengthOfOpponents": -0.8
  },
  {
   "name": "Josh Rito",
   "gender": "Male",
   "team": "Flemington",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 95,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -31,
   "ppg": 15.8,
   "leagueRank": 355,
   "rating": -2.1,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.9,
   "playerId": "a4c54a14-35b4-4b90-aabd-3d81ad719f4d"
  },
  {
   "name": "Trevor Oakley",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 1,
   "outsideSub": false,
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
   "leagueRank": 360,
   "rating": -1.9,
   "ratingGames": 5,
   "confidence": 44,
   "strengthOfPartners": -1,
   "strengthOfOpponents": 0.9,
   "playerId": "ba6182a3-0d5e-4800-9306-db8757170c80"
  },
  {
   "name": "Cynthia Li",
   "gender": "Female",
   "team": "LBF Pickleball",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 0,
   "losses": 4,
   "pointsWon": 53,
   "totalPointsAgainst": 84,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "8b88d91a-72e4-47ae-882d-4854110c1a5e",
   "winPct": 0,
   "diff": -31,
   "ppg": 13.3,
   "leagueRank": 377,
   "rating": -2.8,
   "ratingGames": 4,
   "confidence": 39,
   "strengthOfPartners": -2.2,
   "strengthOfOpponents": 0
  },
  {
   "name": "Lindsay Mcnally",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 0,
   "losses": 4,
   "pointsWon": 47,
   "totalPointsAgainst": 84,
   "mixedWins": 0,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -37,
   "ppg": 11.8,
   "leagueRank": 379,
   "rating": -2.6,
   "ratingGames": 4,
   "confidence": 42,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 1.6,
   "playerId": "f7dcea40-d43e-42df-80c3-e2451e6065f5"
  },
  {
   "name": "Amr Shaheed",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 87,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -39,
   "ppg": 14.5,
   "leagueRank": 362,
   "rating": -1.6,
   "ratingGames": 6,
   "confidence": 50,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 1.1,
   "playerId": "13da8b1a-a1ac-4d31-8ffd-ad6754a04671"
  },
  {
   "name": "Michal Dziegielewski",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 83,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -43,
   "ppg": 13.8,
   "leagueRank": 365,
   "rating": -2.6,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 1.2,
   "playerId": "0918ce0a-4124-45d9-99dc-e8cf085f47eb"
  },
  {
   "name": "Keith Parker",
   "gender": "Male",
   "team": "Montville",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 8,
   "wins": 0,
   "losses": 8,
   "pointsWon": 125,
   "totalPointsAgainst": 168,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 3,
   "winPct": 0,
   "diff": -43,
   "ppg": 15.6,
   "leagueRank": 364,
   "rating": -3.7,
   "ratingGames": 8,
   "confidence": 57,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.1,
   "playerId": "bf40e187-35ca-4cd5-8269-7bf90f93b09a"
  },
  {
   "name": "Danielle Collins",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 60,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -45,
   "ppg": 12,
   "leagueRank": 372,
   "rating": -2.5,
   "ratingGames": 5,
   "confidence": 46,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 1.8,
   "playerId": "be0c8a78-f94f-44a0-8c73-d922ccebca74"
  },
  {
   "name": "Elsie Koo",
   "gender": "Female",
   "team": "Dill Dinkers Freehold",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": true,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 60,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -45,
   "ppg": 12,
   "leagueRank": 371,
   "rating": -2.3,
   "ratingGames": 5,
   "confidence": 48,
   "strengthOfPartners": -2.6,
   "strengthOfOpponents": 1.1,
   "playerId": "fa1427f8-260f-46cf-b110-61520a82a66a"
  },
  {
   "name": "Michael Jones",
   "gender": "Male",
   "team": "Home Court",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 80,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -46,
   "ppg": 13.3,
   "leagueRank": 367,
   "rating": -2.6,
   "ratingGames": 6,
   "confidence": 51,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 1.8,
   "playerId": "04c5ee5b-25dc-4dfa-b1fa-4ed9653cd933"
  },
  {
   "name": "John Kulesza",
   "gender": "Male",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 79,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -47,
   "ppg": 13.2,
   "leagueRank": 366,
   "rating": -1.8,
   "ratingGames": 6,
   "confidence": 48,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 1.8,
   "playerId": "cd240590-0d93-4af4-82e6-5354be68fee6"
  },
  {
   "name": "Riyan Barlow",
   "gender": "Female",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 5,
   "wins": 0,
   "losses": 5,
   "pointsWon": 49,
   "totalPointsAgainst": 105,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -56,
   "ppg": 9.8,
   "leagueRank": 376,
   "rating": -3.4,
   "ratingGames": 5,
   "confidence": 45,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": 1.6,
   "playerId": "9b83f83f-53c3-4576-9ea6-410e99f7c798"
  },
  {
   "name": "Peter Liang",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 0,
   "losses": 7,
   "pointsWon": 89,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -58,
   "ppg": 12.7,
   "leagueRank": 369,
   "rating": -1.7,
   "ratingGames": 7,
   "confidence": 53,
   "strengthOfPartners": -2.8,
   "strengthOfOpponents": 1.5,
   "playerId": "41583f01-cdf1-4b22-8e2c-9d58bcad16d9"
  },
  {
   "name": "Joseph Zorbo",
   "gender": "Male",
   "team": "Pickleball Kingdom Tinton Falls",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 0,
   "losses": 7,
   "pointsWon": 86,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "winPct": 0,
   "diff": -61,
   "ppg": 12.3,
   "leagueRank": 370,
   "rating": -2.8,
   "ratingGames": 7,
   "confidence": 51,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 1.8,
   "playerId": "5303d994-f381-481a-821b-37f0dff42073"
  },
  {
   "name": "Steven Koo",
   "gender": "Male",
   "team": "Dill Dinkers Freehold",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 56,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -70,
   "ppg": 9.3,
   "leagueRank": 378,
   "rating": -4.3,
   "ratingGames": 6,
   "confidence": 52,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": 1.3,
   "playerId": "1ae6c582-2fb0-42ae-9f7b-2448c6c5e1da"
  },
  {
   "name": "Angie Habib",
   "gender": "Female",
   "team": "Dill Dinkers Freehold",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 0,
   "losses": 7,
   "pointsWon": 77,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -70,
   "ppg": 11,
   "leagueRank": 373,
   "rating": -3.9,
   "ratingGames": 7,
   "confidence": 55,
   "strengthOfPartners": -2,
   "strengthOfOpponents": 0.9,
   "playerId": "be764ab0-026a-470d-a137-09b0d3caf629"
  },
  {
   "name": "Abeer Massoud",
   "gender": "Female",
   "team": "Dill Dinkers Freehold",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 0,
   "losses": 7,
   "pointsWon": 74,
   "totalPointsAgainst": 147,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 0,
   "diff": -73,
   "ppg": 10.6,
   "leagueRank": 375,
   "rating": -3.6,
   "ratingGames": 7,
   "confidence": 54,
   "strengthOfPartners": -2.4,
   "strengthOfOpponents": 1.2,
   "playerId": "36a2b97b-af46-4bbf-a09d-31c0d7b9bee2"
  },
  {
   "name": "Crystal Mark",
   "gender": "Female",
   "team": "Picklr Exton",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 0,
   "losses": 13,
   "pointsWon": 176,
   "totalPointsAgainst": 273,
   "mixedWins": 0,
   "mixedLosses": 6,
   "genderWins": 0,
   "genderLosses": 7,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 0,
   "diff": -97,
   "ppg": 13.5,
   "leagueRank": 368,
   "rating": -4.4,
   "ratingGames": 13,
   "confidence": 68,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": 0.3,
   "playerId": "c7347486-6c6f-4143-b74b-f3572653d54f"
  }
 ],
 "teams": [
  {
   "name": "Premiere",
   "w": 1,
   "l": 0,
   "pf": 677,
   "pa": 541,
   "gw": 25,
   "gl": 7,
   "diff": 136,
   "gameDiff": 18,
   "power": 0.9,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": "Northeast",
   "podName": "Northeast",
   "fmt": {
    "mixed": [
     11,
     5
    ],
    "male": [
     7,
     1
    ],
    "female": [
     7,
     1
    ]
   }
  },
  {
   "name": "Picklr Newark",
   "w": 2,
   "l": 0,
   "pf": 1310,
   "pa": 1102,
   "gw": 48,
   "gl": 16,
   "diff": 208,
   "gameDiff": 32,
   "power": 0.5,
   "powerRank": 2,
   "pod": 2,
   "reportedPod": "Southwest",
   "podName": "Southwest",
   "fmt": {
    "mixed": [
     23,
     9
    ],
    "male": [
     13,
     3
    ],
    "female": [
     12,
     4
    ]
   }
  },
  {
   "name": "PKLD",
   "w": 2,
   "l": 0,
   "pf": 1307,
   "pa": 1052,
   "gw": 47,
   "gl": 17,
   "diff": 255,
   "gameDiff": 30,
   "power": 1.9,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": "Northeast",
   "podName": "Northeast",
   "fmt": {
    "mixed": [
     24,
     8
    ],
    "male": [
     13,
     3
    ],
    "female": [
     10,
     6
    ]
   }
  },
  {
   "name": "Pickleball Kingdom Watchung",
   "w": 2,
   "l": 0,
   "pf": 1290,
   "pa": 1064,
   "gw": 47,
   "gl": 17,
   "diff": 226,
   "gameDiff": 30,
   "power": 1.3,
   "powerRank": 1,
   "pod": 3,
   "reportedPod": "Northwest",
   "podName": "Northwest",
   "fmt": {
    "mixed": [
     28,
     4
    ],
    "male": [
     11,
     5
    ],
    "female": [
     8,
     8
    ]
   }
  },
  {
   "name": "Jersey Pickleball Club",
   "w": 1,
   "l": 0,
   "pf": 638,
   "pa": 572,
   "gw": 22,
   "gl": 10,
   "diff": 66,
   "gameDiff": 12,
   "power": 0.2,
   "powerRank": 4,
   "pod": 1,
   "reportedPod": "Northeast",
   "podName": "Northeast",
   "fmt": {
    "mixed": [
     12,
     4
    ],
    "male": [
     4,
     4
    ],
    "female": [
     6,
     2
    ]
   }
  },
  {
   "name": "Pickleball Kingdom Lehigh Valley",
   "w": 2,
   "l": 0,
   "pf": 1264,
   "pa": 1165,
   "gw": 40,
   "gl": 24,
   "diff": 99,
   "gameDiff": 16,
   "power": 0.3,
   "powerRank": 4,
   "pod": 3,
   "reportedPod": "Northwest",
   "podName": "Northwest",
   "fmt": {
    "mixed": [
     20,
     12
    ],
    "male": [
     12,
     4
    ],
    "female": [
     8,
     8
    ]
   }
  },
  {
   "name": "Pickleball Kingdom Hillsborough",
   "w": 1,
   "l": 0,
   "pf": 619,
   "pa": 583,
   "gw": 19,
   "gl": 13,
   "diff": 36,
   "gameDiff": 6,
   "power": 0.4,
   "powerRank": 3,
   "pod": 3,
   "reportedPod": "Northwest",
   "podName": "Northwest",
   "fmt": {
    "mixed": [
     8,
     8
    ],
    "male": [
     6,
     2
    ],
    "female": [
     5,
     3
    ]
   }
  },
  {
   "name": "Delco Turf & Pickle",
   "w": 2,
   "l": 0,
   "pf": 1269,
   "pa": 1156,
   "gw": 36,
   "gl": 28,
   "diff": 113,
   "gameDiff": 8,
   "power": 1,
   "powerRank": 1,
   "pod": 2,
   "reportedPod": "Southwest",
   "podName": "Southwest",
   "fmt": {
    "mixed": [
     21,
     11
    ],
    "male": [
     8,
     8
    ],
    "female": [
     7,
     9
    ]
   }
  },
  {
   "name": "Jersey Devil Green",
   "w": 2,
   "l": 0,
   "pf": 1246,
   "pa": 1189,
   "gw": 36,
   "gl": 28,
   "diff": 57,
   "gameDiff": 8,
   "power": 0.8,
   "powerRank": 1,
   "pod": 4,
   "reportedPod": "Southeast",
   "podName": "Southeast",
   "fmt": {
    "mixed": [
     18,
     14
    ],
    "male": [
     6,
     10
    ],
    "female": [
     12,
     4
    ]
   }
  },
  {
   "name": "Dill Dinkers Hatboro",
   "w": 1,
   "l": 0,
   "pf": 639,
   "pa": 614,
   "gw": 18,
   "gl": 14,
   "diff": 25,
   "gameDiff": 4,
   "power": 0.5,
   "powerRank": 3,
   "pod": 2,
   "reportedPod": "Southwest",
   "podName": "Southwest",
   "fmt": {
    "mixed": [
     10,
     6
    ],
    "male": [
     3,
     5
    ],
    "female": [
     5,
     3
    ]
   }
  },
  {
   "name": "Picklr Fair Lawn",
   "w": 1,
   "l": 0,
   "pf": 625,
   "pa": 596,
   "gw": 17,
   "gl": 15,
   "diff": 29,
   "gameDiff": 2,
   "power": 0.5,
   "powerRank": 2,
   "pod": 3,
   "reportedPod": "Northwest",
   "podName": "Northwest",
   "fmt": {
    "mixed": [
     8,
     8
    ],
    "male": [
     4,
     4
    ],
    "female": [
     5,
     3
    ]
   }
  },
  {
   "name": "Picklr Manahawkin",
   "w": 1,
   "l": 1,
   "pf": 1273,
   "pa": 1052,
   "gw": 43,
   "gl": 21,
   "diff": 221,
   "gameDiff": 22,
   "power": 1.3,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": "Northeast",
   "podName": "Northeast",
   "fmt": {
    "mixed": [
     21,
     11
    ],
    "male": [
     10,
     6
    ],
    "female": [
     12,
     4
    ]
   }
  },
  {
   "name": "ACE Downingtown",
   "w": 1,
   "l": 1,
   "pf": 1163,
   "pa": 1124,
   "gw": 36,
   "gl": 28,
   "diff": 39,
   "gameDiff": 8,
   "power": 0,
   "powerRank": 5,
   "pod": 2,
   "reportedPod": "Southwest",
   "podName": "Southwest",
   "fmt": {
    "mixed": [
     16,
     16
    ],
    "male": [
     11,
     5
    ],
    "female": [
     9,
     7
    ]
   }
  },
  {
   "name": "Montville",
   "w": 1,
   "l": 1,
   "pf": 1221,
   "pa": 1201,
   "gw": 36,
   "gl": 28,
   "diff": 20,
   "gameDiff": 8,
   "power": 0,
   "powerRank": 6,
   "pod": 3,
   "reportedPod": "Northwest",
   "podName": "Northwest",
   "fmt": {
    "mixed": [
     18,
     14
    ],
    "male": [
     9,
     7
    ],
    "female": [
     9,
     7
    ]
   }
  },
  {
   "name": "Bounce Philly",
   "w": 1,
   "l": 1,
   "pf": 1216,
   "pa": 1203,
   "gw": 35,
   "gl": 29,
   "diff": 13,
   "gameDiff": 6,
   "power": 0.8,
   "powerRank": 2,
   "pod": 4,
   "reportedPod": "Southeast",
   "podName": "Southeast",
   "fmt": {
    "mixed": [
     16,
     16
    ],
    "male": [
     14,
     2
    ],
    "female": [
     5,
     11
    ]
   }
  },
  {
   "name": "Players Courtyard",
   "w": 1,
   "l": 1,
   "pf": 1234,
   "pa": 1256,
   "gw": 35,
   "gl": 29,
   "diff": -22,
   "gameDiff": 6,
   "power": -0.3,
   "powerRank": 6,
   "pod": 4,
   "reportedPod": "Southeast",
   "podName": "Southeast",
   "fmt": {
    "mixed": [
     19,
     13
    ],
    "male": [
     11,
     5
    ],
    "female": [
     5,
     11
    ]
   }
  },
  {
   "name": "Ballers Philly",
   "w": 1,
   "l": 1,
   "pf": 1219,
   "pa": 1164,
   "gw": 34,
   "gl": 30,
   "diff": 55,
   "gameDiff": 4,
   "power": 0.5,
   "powerRank": 3,
   "pod": 4,
   "reportedPod": "Southeast",
   "podName": "Southeast",
   "fmt": {
    "mixed": [
     19,
     13
    ],
    "male": [
     5,
     11
    ],
    "female": [
     10,
     6
    ]
   }
  },
  {
   "name": "APC Garden State",
   "w": 1,
   "l": 1,
   "pf": 1215,
   "pa": 1206,
   "gw": 32,
   "gl": 32,
   "diff": 9,
   "gameDiff": 0,
   "power": 0,
   "powerRank": 5,
   "pod": 4,
   "reportedPod": "Southeast",
   "podName": "Southeast",
   "fmt": {
    "mixed": [
     14,
     18
    ],
    "male": [
     6,
     10
    ],
    "female": [
     12,
     4
    ]
   }
  },
  {
   "name": "Bounce Tempest",
   "w": 1,
   "l": 1,
   "pf": 1182,
   "pa": 1203,
   "gw": 29,
   "gl": 35,
   "diff": -21,
   "gameDiff": -6,
   "power": 0.1,
   "powerRank": 4,
   "pod": 4,
   "reportedPod": "Southeast",
   "podName": "Southeast",
   "fmt": {
    "mixed": [
     15,
     17
    ],
    "male": [
     8,
     8
    ],
    "female": [
     6,
     10
    ]
   }
  },
  {
   "name": "Jersey Devil Navy",
   "w": 1,
   "l": 1,
   "pf": 1183,
   "pa": 1254,
   "gw": 28,
   "gl": 36,
   "diff": -71,
   "gameDiff": -8,
   "power": -0.5,
   "powerRank": 8,
   "pod": 4,
   "reportedPod": "Southeast",
   "podName": "Southeast",
   "fmt": {
    "mixed": [
     13,
     19
    ],
    "male": [
     9,
     7
    ],
    "female": [
     6,
     10
    ]
   }
  },
  {
   "name": "Forward",
   "w": 0,
   "l": 2,
   "pf": 1234,
   "pa": 1271,
   "gw": 30,
   "gl": 34,
   "diff": -37,
   "gameDiff": -4,
   "power": 0.3,
   "powerRank": 4,
   "pod": 2,
   "reportedPod": "Southwest",
   "podName": "Southwest",
   "fmt": {
    "mixed": [
     12,
     20
    ],
    "male": [
     9,
     7
    ],
    "female": [
     9,
     7
    ]
   }
  },
  {
   "name": "Pickle Juice Blackwood",
   "w": 0,
   "l": 2,
   "pf": 1236,
   "pa": 1256,
   "gw": 27,
   "gl": 37,
   "diff": -20,
   "gameDiff": -10,
   "power": -0.4,
   "powerRank": 7,
   "pod": 4,
   "reportedPod": "Southeast",
   "podName": "Southeast",
   "fmt": {
    "mixed": [
     14,
     18
    ],
    "male": [
     5,
     11
    ],
    "female": [
     8,
     8
    ]
   }
  },
  {
   "name": "Flemington",
   "w": 0,
   "l": 2,
   "pf": 1173,
   "pa": 1258,
   "gw": 26,
   "gl": 38,
   "diff": -85,
   "gameDiff": -12,
   "power": 0.2,
   "powerRank": 5,
   "pod": 3,
   "reportedPod": "Northwest",
   "podName": "Northwest",
   "fmt": {
    "mixed": [
     10,
     22
    ],
    "male": [
     4,
     12
    ],
    "female": [
     12,
     4
    ]
   }
  },
  {
   "name": "Bounce Malvern",
   "w": 0,
   "l": 1,
   "pf": 567,
   "pa": 646,
   "gw": 11,
   "gl": 21,
   "diff": -79,
   "gameDiff": -10,
   "power": -0.4,
   "powerRank": 6,
   "pod": 2,
   "reportedPod": "Southwest",
   "podName": "Southwest",
   "fmt": {
    "mixed": [
     5,
     11
    ],
    "male": [
     2,
     6
    ],
    "female": [
     4,
     4
    ]
   }
  },
  {
   "name": "LBF Pickleball",
   "w": 0,
   "l": 2,
   "pf": 1142,
   "pa": 1259,
   "gw": 22,
   "gl": 42,
   "diff": -117,
   "gameDiff": -20,
   "power": -0.5,
   "powerRank": 7,
   "pod": 3,
   "reportedPod": "Northwest",
   "podName": "Northwest",
   "fmt": {
    "mixed": [
     13,
     19
    ],
    "male": [
     5,
     11
    ],
    "female": [
     4,
     12
    ]
   }
  },
  {
   "name": "Pickle House",
   "w": 0,
   "l": 2,
   "pf": 1113,
   "pa": 1315,
   "gw": 17,
   "gl": 47,
   "diff": -202,
   "gameDiff": -30,
   "power": -0.9,
   "powerRank": 5,
   "pod": 1,
   "reportedPod": "Northeast",
   "podName": "Northeast",
   "fmt": {
    "mixed": [
     9,
     23
    ],
    "male": [
     5,
     11
    ],
    "female": [
     3,
     13
    ]
   }
  },
  {
   "name": "Home Court",
   "w": 0,
   "l": 2,
   "pf": 1073,
   "pa": 1281,
   "gw": 17,
   "gl": 47,
   "diff": -208,
   "gameDiff": -30,
   "power": -0.8,
   "powerRank": 8,
   "pod": 3,
   "reportedPod": "Northwest",
   "podName": "Northwest",
   "fmt": {
    "mixed": [
     7,
     25
    ],
    "male": [
     5,
     11
    ],
    "female": [
     5,
     11
    ]
   }
  },
  {
   "name": "Picklr Exton",
   "w": 0,
   "l": 2,
   "pf": 1022,
   "pa": 1291,
   "gw": 13,
   "gl": 51,
   "diff": -269,
   "gameDiff": -38,
   "power": -1.6,
   "powerRank": 7,
   "pod": 2,
   "reportedPod": "Southwest",
   "podName": "Southwest",
   "fmt": {
    "mixed": [
     9,
     23
    ],
    "male": [
     2,
     14
    ],
    "female": [
     2,
     14
    ]
   }
  },
  {
   "name": "Pickleball Kingdom Tinton Falls",
   "w": 0,
   "l": 1,
   "pf": 454,
   "pa": 671,
   "gw": 4,
   "gl": 28,
   "diff": -217,
   "gameDiff": -24,
   "power": -1.2,
   "powerRank": 6,
   "pod": 1,
   "reportedPod": "Northeast",
   "podName": "Northeast",
   "fmt": {
    "mixed": [
     1,
     15
    ],
    "male": [
     1,
     7
    ],
    "female": [
     2,
     6
    ]
   }
  },
  {
   "name": "Dill Dinkers Freehold",
   "w": 0,
   "l": 1,
   "pf": 416,
   "pa": 675,
   "gw": 2,
   "gl": 30,
   "diff": -259,
   "gameDiff": -28,
   "power": -2.2,
   "powerRank": 7,
   "pod": 1,
   "reportedPod": "Northeast",
   "podName": "Northeast",
   "fmt": {
    "mixed": [
     2,
     14
    ],
    "male": [
     0,
     8
    ],
    "female": [
     0,
     8
    ]
   }
  }
 ],
 "duos": [
  {
   "a": "Xavier Yandoli",
   "b": "Brianna Burns",
   "team": "PKLD",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.5,
   "avgActual": 10.7,
   "avgExpected": 4.9,
   "aId": "51dd0df2-d833-4037-a26d-5da2eb3d570e",
   "bId": "8fd0c63a-29f9-463e-baf6-fd48281231dc"
  },
  {
   "a": "Diana Nguyen",
   "b": "Josiah Kim",
   "team": "Pickleball Kingdom Watchung",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 2.3,
   "avgActual": 10.8,
   "avgExpected": 6.2,
   "aId": "26337037-9e6a-4007-93ee-e2b083f30a03",
   "bId": "de8e2a33-d691-4652-84ef-532b89f467bc"
  },
  {
   "a": "Srilahari Kunchapu",
   "b": "Olivia Schaller",
   "team": "Jersey Devil Green",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 2.1,
   "avgActual": 8.3,
   "avgExpected": 4.1,
   "aId": "33e099cc-4164-43df-8b34-32fd7a5d9a46",
   "bId": "84c96e34-809c-4b34-9005-8ea76ca6a233"
  },
  {
   "a": "Gianna Medeiros",
   "b": "Maggie Malloy",
   "team": "Bounce Philly",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.6,
   "avgActual": 6,
   "avgExpected": 2.2,
   "aId": "b63ec8b5-b659-4404-92b0-8e577c87534a",
   "bId": "c1251904-fef6-4eb5-9b49-06c8335e3546"
  },
  {
   "a": "Tesa Pribitkin",
   "b": "Karen Rodriguez",
   "team": "Ballers Philly",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.6,
   "avgActual": 4.7,
   "avgExpected": 1,
   "aId": "af8325ab-680e-414c-8522-2335ec1e7f50",
   "bId": "c9dcda58-8b67-418c-8aa5-6eb3c1fa50ba"
  },
  {
   "a": "Tracy Wong",
   "b": "Esther Yoon",
   "team": "PKLD",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 5.3,
   "avgExpected": 2.3,
   "aId": "6c513ea5-3938-4f01-9071-f149cc1da268",
   "bId": "7d70ad57-c02f-47cc-bdd2-e330a7fed56e"
  },
  {
   "a": "Michael Kresloff",
   "b": "Ryan Lehrfeld",
   "team": "APC Garden State",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.5,
   "avgActual": 5.3,
   "avgExpected": 1.8,
   "aId": "60e48498-ce01-4f21-99d0-3d9ec17b7fc5",
   "bId": "cfc63dad-7d45-4fa6-810d-5d3bbc7619ca"
  },
  {
   "a": "Ahmed Aziz",
   "b": "Paula Cushing",
   "team": "PKLD",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 7.3,
   "avgExpected": 4,
   "aId": "086a95e6-d7ca-4ac7-8fec-b35b1110fbd1",
   "bId": "f8a42c6f-43b2-4769-b0ed-a1d648353e04"
  },
  {
   "a": "Kiddi Vu",
   "b": "Justin Lin",
   "team": "ACE Downingtown",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.4,
   "avgActual": 8,
   "avgExpected": 5.2,
   "aId": "8fd73a4d-a785-4575-b796-4af5e3cb2781",
   "bId": "b084b51a-054c-4a7f-b1a5-0cb26e4f669c"
  },
  {
   "a": "Lili Zebluim",
   "b": "Ariane Abadi",
   "team": "Forward",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.3,
   "avgActual": 5.7,
   "avgExpected": 2.7,
   "aId": "01687986-8454-48f2-ab99-dabc5bb343b7",
   "bId": "25df407c-f249-4c32-838c-09cd2b88e9e6"
  },
  {
   "a": "Alex Kustas",
   "b": "Chris Machuzak",
   "team": "Jersey Devil Navy",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.2,
   "avgActual": 7.3,
   "avgExpected": 4.8,
   "aId": "08b7041c-a90b-47ba-802a-5f71e6b98999",
   "bId": "dba4c9d8-6ffb-49ae-99d1-79c341a68de7"
  },
  {
   "a": "Brandon Calmo",
   "b": "Veronica Rosas",
   "team": "Pickle House",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 3.5,
   "avgExpected": 1,
   "aId": "79a3d198-0295-4bed-b0d7-bcda477d6b3a",
   "bId": "abab39fe-af60-4956-9f97-460189ab90dc"
  },
  {
   "a": "Justin Lin",
   "b": "Lewis Torres",
   "team": "ACE Downingtown",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 9,
   "avgExpected": 6.3,
   "aId": "b084b51a-054c-4a7f-b1a5-0cb26e4f669c",
   "bId": "ccf24d18-560f-4ae8-ad75-8fc330f7c24f"
  },
  {
   "a": "Cullen Curley",
   "b": "David Reyes",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.1,
   "avgActual": 5.7,
   "avgExpected": 3.1,
   "aId": "8cebf901-66b9-41d0-963d-12dac7334c8f",
   "bId": "adc043ce-7b2d-4ae9-87e0-c927f28c473a"
  },
  {
   "a": "Andrew Taylor",
   "b": "Leh Mounelasy",
   "team": "Delco Turf & Pickle",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.1,
   "avgActual": 6.3,
   "avgExpected": 3.7,
   "aId": "41495749-a3fd-4680-93db-e65b4251cc0a",
   "bId": "e07f4550-3ac9-4547-ae88-2b6075f0b8db"
  },
  {
   "a": "Reggie Tiglao",
   "b": "Pam Politis",
   "team": "Picklr Newark",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.1,
   "avgActual": 6.5,
   "avgExpected": 4.4,
   "aId": "32dcadef-5ceb-4826-8e96-fc36508fba54",
   "bId": "6b6274a7-77d0-420a-8883-5cac081fdf4d"
  },
  {
   "a": "Richie Mizrahi",
   "b": "Robert Huntley",
   "team": "Home Court",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 4.7,
   "avgExpected": 2.1,
   "aId": "23b78ff1-3039-4b01-b033-839cdba54a19",
   "bId": "b5dec967-9e3a-49b4-b136-597711d099cc"
  },
  {
   "a": "Brad Mandry",
   "b": "Ricki Cohen",
   "team": "Players Courtyard",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1,
   "avgActual": 5.3,
   "avgExpected": 3.2,
   "aId": "16a5ef9a-49fe-4341-9626-8f566552010e",
   "bId": "a9094665-d5af-440c-b9b1-05403739512c"
  },
  {
   "a": "Todd Green",
   "b": "Abdullah Osman",
   "team": "Montville",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1,
   "avgActual": 4.3,
   "avgExpected": 2.2,
   "aId": "52db6510-81e5-4ca3-ae64-1f0bbe677f93",
   "bId": "c8f3b265-67a8-412c-84f5-aee92a913aac"
  },
  {
   "a": "Shania Bui",
   "b": "Eileen Zhang",
   "team": "Bounce Tempest",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1,
   "avgActual": 3.8,
   "avgExpected": 1.8,
   "aId": "714331ee-d124-483d-a89e-11d1431a7fca",
   "bId": "a97005b1-7cac-40b0-b0c0-c4e1a359418a"
  },
  {
   "a": "Kong Vu",
   "b": "Ginny Truong",
   "team": "Bounce Tempest",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1,
   "avgActual": 2.7,
   "avgExpected": 0.4,
   "aId": "1d44d478-17dd-41c5-95e2-7010889b33ba",
   "bId": "79cea24b-da29-4070-8d30-e820330b4c41"
  },
  {
   "a": "Veronica Rosas",
   "b": "Danielle Kuti",
   "team": "Pickle House",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1,
   "avgActual": -0.3,
   "avgExpected": -2.7,
   "aId": "abab39fe-af60-4956-9f97-460189ab90dc",
   "bId": "c3902bc0-35a6-490d-9909-6f19b1224b99"
  },
  {
   "a": "Tingting Huang",
   "b": "Andy Wang",
   "team": "LBF Pickleball",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.9,
   "avgActual": 0.3,
   "avgExpected": -1.7,
   "aId": "6813b1bf-f225-424f-bd66-12bbcb303abe",
   "bId": "fffb21b3-56be-473d-91d7-8f750b599343"
  },
  {
   "a": "Dede Dolkar",
   "b": "Winston Lian",
   "team": "Pickleball Kingdom Watchung",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 4.3,
   "avgExpected": 2.4,
   "aId": "00f31bfd-e3ff-4a78-8f87-33a51ce4dde4",
   "bId": "77e71d86-1be3-4df7-8c52-d0802eed8e08"
  },
  {
   "a": "Matthew Stephenson",
   "b": "Chris Fantin",
   "team": "Home Court",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 0.9,
   "avgActual": -4.7,
   "avgExpected": -6.6,
   "aId": "469c2465-d07c-4449-9adb-046595aeba8a",
   "bId": "715b131c-87a5-4887-9505-7fb780511902"
  },
  {
   "a": "Nada Abdelkarim",
   "b": "Stacy Ip-Mo",
   "team": "APC Garden State",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 8.7,
   "avgExpected": 6.6,
   "aId": "bf00658c-c290-41dd-96dd-e63f723fa6cc",
   "bId": "d0562c60-5e2c-4647-805c-ac3740562432"
  },
  {
   "a": "Danny Ruiz",
   "b": "Jen Ogorzat",
   "team": "Pickle House",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.8,
   "avgActual": -2,
   "avgExpected": -3.5,
   "aId": "cf86f914-08ca-4df6-9cdb-74a23afc2478",
   "bId": "f0f8c802-b218-4a89-a9a8-cc127214c1d5"
  },
  {
   "a": "Luc Legaspi",
   "b": "Michael Martellacci",
   "team": "Forward",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 2.7,
   "avgExpected": 1.1,
   "aId": "4d20f87d-068f-4cce-806d-6941153e72be",
   "bId": "fe5f5565-3a59-4eb6-9857-7dcb007f4900"
  },
  {
   "a": "Jennifer Kline",
   "b": "Clarisse Espiritu",
   "team": "Picklr Manahawkin",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 5.5,
   "avgExpected": 4.3,
   "aId": "9e7f633d-5cea-4462-b486-61612f133de4",
   "bId": "dc1107ce-7076-4251-9bf3-b4a1ee5ac9a9"
  },
  {
   "a": "Kelly Feng",
   "b": "Isobel Harvey",
   "team": "Ballers Philly",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.6,
   "avgActual": 7.3,
   "avgExpected": 6,
   "aId": "936fd285-0e07-4c08-94b0-57b3c19ac59e",
   "bId": "a874ce54-5e12-49d7-a69a-cb9457b64ddb"
  },
  {
   "a": "Taryn Seidner",
   "b": "Jen Ogorzat",
   "team": "Pickle House",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.6,
   "avgActual": -3.3,
   "avgExpected": -4.8,
   "aId": "2dd97210-f5b8-4645-b400-a2611539cca8",
   "bId": "f0f8c802-b218-4a89-a9a8-cc127214c1d5"
  },
  {
   "a": "Heather Triozzi",
   "b": "Issac Gao",
   "team": "Picklr Exton",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.6,
   "avgActual": -6,
   "avgExpected": -7.4,
   "aId": "7c120762-4a31-4bdd-9fce-8b43bd90a07e",
   "bId": "ba54259c-c50f-446b-9385-f12e5c6fdf23"
  },
  {
   "a": "Karen Anthony",
   "b": "Kiddi Vu",
   "team": "ACE Downingtown",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 2,
   "avgExpected": 0.6,
   "aId": "75ea65b1-1fef-447f-98ce-a2edd80200a9",
   "bId": "8fd73a4d-a785-4575-b796-4af5e3cb2781"
  },
  {
   "a": "Anthony Prusich",
   "b": "Julia Manetta",
   "team": "Bounce Philly",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 0.3,
   "avgExpected": -0.8,
   "aId": "41cd934f-66b0-4f22-b2e1-74955db922ce",
   "bId": "4977544e-0c7f-4151-815c-51f68473862f"
  },
  {
   "a": "Mary Fair",
   "b": "Deirdre Zohlman",
   "team": "Players Courtyard",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.5,
   "avgActual": -2.3,
   "avgExpected": -3.4,
   "aId": "66acdf95-131a-4d7d-89d7-2fe93406d61b",
   "bId": "f9fffb3c-b254-4953-b53c-55bcc43c583b"
  },
  {
   "a": "Chris Fantin",
   "b": "Laura Fantin",
   "team": "Home Court",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.5,
   "avgActual": -3.2,
   "avgExpected": -4.3,
   "aId": "715b131c-87a5-4887-9505-7fb780511902",
   "bId": "db15b234-d88d-4556-9c9d-982947bdaae7"
  },
  {
   "a": "Kelly Feng",
   "b": "Samuel Lee",
   "team": "Ballers Philly",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 4.3,
   "avgExpected": 3.3,
   "aId": "936fd285-0e07-4c08-94b0-57b3c19ac59e",
   "bId": "b07b7480-a964-459c-b47e-5c0f4a8774e9"
  },
  {
   "a": "Kelly Feng",
   "b": "Ben Van Handel",
   "team": "Ballers Philly",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 3,
   "avgExpected": 1.7,
   "aId": "936fd285-0e07-4c08-94b0-57b3c19ac59e",
   "bId": "abb4e0e1-709f-425f-ac7d-b6209b29ddd0"
  },
  {
   "a": "Joshua Kim",
   "b": "Jonathan Macqueen",
   "team": "Bounce Philly",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 3.5,
   "avgExpected": 2.6,
   "aId": "24c3c526-8dd1-4ed0-adcf-ca7857e8b0ec",
   "bId": "9aa0ff6c-0210-4a91-885f-ae3d4813f1c3"
  },
  {
   "a": "Jennifer Kasnadi",
   "b": "Savan Patel",
   "team": "Picklr Newark",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 2.5,
   "avgExpected": 1.8,
   "aId": "43e3e482-aa27-49c2-a18f-59a7abdbc7ba",
   "bId": "cfd1cb28-21ad-43c7-bbac-fa013f72aba4"
  },
  {
   "a": "Ahmed Aziz",
   "b": "Xavier Yandoli",
   "team": "PKLD",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.4,
   "avgActual": 5.7,
   "avgExpected": 4.6,
   "aId": "086a95e6-d7ca-4ac7-8fec-b35b1110fbd1",
   "bId": "51dd0df2-d833-4037-a26d-5da2eb3d570e"
  },
  {
   "a": "Dede Dolkar",
   "b": "Josiah Kim",
   "team": "Pickleball Kingdom Watchung",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 5.3,
   "avgExpected": 4.4,
   "aId": "00f31bfd-e3ff-4a78-8f87-33a51ce4dde4",
   "bId": "de8e2a33-d691-4652-84ef-532b89f467bc"
  },
  {
   "a": "Alex Kustas",
   "b": "Adam Lowther",
   "team": "Jersey Devil Navy",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.4,
   "avgActual": 4.3,
   "avgExpected": 3.4,
   "aId": "08b7041c-a90b-47ba-802a-5f71e6b98999",
   "bId": "fc25c569-51b2-46a9-9dde-88cf56493e62"
  },
  {
   "a": "Chris Hudak",
   "b": "David Reyes",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 2.3,
   "avgExpected": 1.7,
   "aId": "448b9c1e-2ff4-4487-b61f-2626655a5544",
   "bId": "adc043ce-7b2d-4ae9-87e0-c927f28c473a"
  },
  {
   "a": "Jenny Shi",
   "b": "Elliott Tseng",
   "team": "Delco Turf & Pickle",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 2.3,
   "avgExpected": 1.6,
   "aId": "219c61b6-fc5c-4031-a9f1-db266182cdd3",
   "bId": "ab21ce02-ca88-4b75-ac8f-b1438e117bb3"
  },
  {
   "a": "Nicole Mandry",
   "b": "Matt Demarco",
   "team": "Players Courtyard",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 0.7,
   "avgExpected": 0.1,
   "aId": "11112eb4-26f3-458d-954e-5718dd3b9332",
   "bId": "6c182803-54c7-439a-b269-17b063a0b3a7"
  },
  {
   "a": "Virginia Alves",
   "b": "Cullen Curley",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 2.5,
   "avgExpected": 2.2,
   "aId": "6e4d4fbd-b6db-4c2e-8381-65700850bf3e",
   "bId": "8cebf901-66b9-41d0-963d-12dac7334c8f"
  },
  {
   "a": "Virginia Alves",
   "b": "Arzu Alimjan",
   "team": "Pickleball Kingdom Lehigh Valley",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 1.8,
   "avgExpected": 1.4,
   "aId": "6e4d4fbd-b6db-4c2e-8381-65700850bf3e",
   "bId": "f0a67d80-8105-46c0-80d1-a7d68f1ff5f5"
  },
  {
   "a": "Brian Kline",
   "b": "Michael Fidelino",
   "team": "Picklr Manahawkin",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 3.5,
   "avgExpected": 3.1,
   "aId": "418f9f50-d9f9-4806-bef5-5bd9763b240f",
   "bId": "8632a302-90a3-4332-b4d1-fccc0f692e8e"
  },
  {
   "a": "Juan Millan",
   "b": "Jadiel Rodriguez",
   "team": "PKLD",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 5.5,
   "avgExpected": 5.1,
   "aId": "1e02d437-092e-4a23-92d9-c9a07fc25f2d",
   "bId": "5bf1c3f0-d4cd-4904-aa20-410c03e530f1"
  },
  {
   "a": "Taylor Johns",
   "b": "Chris Machuzak",
   "team": "Jersey Devil Navy",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 1.5,
   "avgExpected": 1.1,
   "aId": "7e92032d-7d47-485c-8641-ae8a7af4e3ac",
   "bId": "dba4c9d8-6ffb-49ae-99d1-79c341a68de7"
  },
  {
   "a": "Karen Anthony",
   "b": "Thomas Kang",
   "team": "ACE Downingtown",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.2,
   "avgActual": -2.5,
   "avgExpected": -2.8,
   "aId": "75ea65b1-1fef-447f-98ce-a2edd80200a9",
   "bId": "d97f0830-c24e-48e9-a8e9-a32edc67530e"
  },
  {
   "a": "Vinoth Baburao Venkatakrishnan",
   "b": "Justin Lin",
   "team": "ACE Downingtown",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 5.5,
   "avgExpected": 5.1,
   "aId": "8deca1b3-e530-4424-b4e2-f220bb3beacd",
   "bId": "b084b51a-054c-4a7f-b1a5-0cb26e4f669c"
  },
  {
   "a": "Nicholas Jackson",
   "b": "Michael Meraglia",
   "team": "Picklr Exton",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.2,
   "avgActual": -1.7,
   "avgExpected": -2.2,
   "aId": "bb72e9bd-3d29-4f40-911c-2c5f07c73da6",
   "bId": "d9369178-ba48-4e5c-83c9-16fa27b56f5d"
  },
  {
   "a": "Brad Mandry",
   "b": "Scott Strong",
   "team": "Players Courtyard",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.1,
   "avgActual": 2.3,
   "avgExpected": 2,
   "aId": "16a5ef9a-49fe-4341-9626-8f566552010e",
   "bId": "f4f395df-7e5a-4867-bcbc-30f8dbcfe77d"
  },
  {
   "a": "Kiddi Vu",
   "b": "Nancy Wu",
   "team": "ACE Downingtown",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 3.3,
   "avgExpected": 3.1,
   "aId": "8fd73a4d-a785-4575-b796-4af5e3cb2781",
   "bId": "c187c25d-5d0a-4e66-9ac5-b1a05b0c151f"
  },
  {
   "a": "Mary Brashier",
   "b": "Johanna Kreilick",
   "team": "Flemington",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0,
   "avgActual": 2,
   "avgExpected": 2.1,
   "aId": "8fb87112-3824-4d16-96d1-3f4abcb2ae45",
   "bId": "ccd0807d-67ac-4dbc-a7c7-4b4df3dea598"
  },
  {
   "a": "Marina Mounelasy",
   "b": "Jon Wheel",
   "team": "Delco Turf & Pickle",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0,
   "avgActual": 0,
   "avgExpected": 0.1,
   "aId": "8a8e0b35-1b88-44c9-914d-643787dc3ccd",
   "bId": "980c2469-2017-4943-bc0d-5c49f0526f85"
  },
  {
   "a": "Savan Patel",
   "b": "Dylan Tjio",
   "team": "Picklr Newark",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0,
   "avgActual": 5.5,
   "avgExpected": 5.4,
   "aId": "cfd1cb28-21ad-43c7-bbac-fa013f72aba4",
   "bId": "cfde52cc-d4a3-4d57-bf17-121d9c5eb4ea"
  },
  {
   "a": "Alexandria Mlkvy",
   "b": "Ben Van Handel",
   "team": "Ballers Philly",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0,
   "avgActual": 1,
   "avgExpected": 1.1,
   "aId": "3207fd7d-1bc1-44df-a915-8eb4019821db",
   "bId": "abb4e0e1-709f-425f-ac7d-b6209b29ddd0"
  },
  {
   "a": "Jon Wheel",
   "b": "Elliott Tseng",
   "team": "Delco Turf & Pickle",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -2,
   "avgExpected": -1.9,
   "aId": "980c2469-2017-4943-bc0d-5c49f0526f85",
   "bId": "ab21ce02-ca88-4b75-ac8f-b1438e117bb3"
  },
  {
   "a": "Michael Fidelino",
   "b": "Clarisse Espiritu",
   "team": "Picklr Manahawkin",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 3,
   "avgExpected": 3.3,
   "aId": "8632a302-90a3-4332-b4d1-fccc0f692e8e",
   "bId": "dc1107ce-7076-4251-9bf3-b4a1ee5ac9a9"
  },
  {
   "a": "Nicole Mandry",
   "b": "Brad Mandry",
   "team": "Players Courtyard",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 0,
   "avgExpected": 0.2,
   "aId": "11112eb4-26f3-458d-954e-5718dd3b9332",
   "bId": "16a5ef9a-49fe-4341-9626-8f566552010e"
  },
  {
   "a": "Jennifer Kinkel",
   "b": "Christina Juliano",
   "team": "Pickle Juice Blackwood",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 1.7,
   "avgExpected": 2,
   "aId": "0dace2fb-e133-4556-9d90-288c0f41805a",
   "bId": "e876b411-bfee-4ab8-ac66-8bbce87eaeb1"
  },
  {
   "a": "Lisa Pinder",
   "b": "Hanna Cutler",
   "team": "Jersey Devil Navy",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.1,
   "avgActual": -8,
   "avgExpected": -7.8,
   "aId": "7c49b9f3-7f46-4e68-8786-4fe39fdd8f2b",
   "bId": "af5e2e89-3606-4d7e-8c5a-b397ff786303"
  },
  {
   "a": "Carlos Lichty",
   "b": "Ethan Fu",
   "team": "Bounce Tempest",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 0.3,
   "avgExpected": 0.5,
   "aId": "5c5c0d00-e20c-456e-b53e-890845310916",
   "bId": "a8585e9c-872e-466c-9583-9680e557f757"
  },
  {
   "a": "Heather Triozzi",
   "b": "Nicholas Jackson",
   "team": "Picklr Exton",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -1.7,
   "avgExpected": -1.3,
   "aId": "7c120762-4a31-4bdd-9fce-8b43bd90a07e",
   "bId": "bb72e9bd-3d29-4f40-911c-2c5f07c73da6"
  },
  {
   "a": "Guan Yang",
   "b": "Hang Liu",
   "team": "LBF Pickleball",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.1,
   "avgActual": -2.7,
   "avgExpected": -2.5,
   "aId": "60049f31-bf6f-4392-9b18-f73a6d156bd2",
   "bId": "a414cff9-d942-47f8-848f-c50abc9c71eb"
  },
  {
   "a": "Brian Kline",
   "b": "Jennifer Kline",
   "team": "Picklr Manahawkin",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 3.5,
   "avgExpected": 3.8,
   "aId": "418f9f50-d9f9-4806-bef5-5bd9763b240f",
   "bId": "9e7f633d-5cea-4462-b486-61612f133de4"
  },
  {
   "a": "Evan Sinclair",
   "b": "Peter David",
   "team": "Jersey Devil Green",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.2,
   "avgActual": -1.2,
   "avgExpected": -0.9,
   "aId": "44de3ff2-3b41-4c10-908c-8057a94e1d75",
   "bId": "c5e40aa9-efbf-4937-b44d-1b8f06693ba4"
  },
  {
   "a": "Nicole Mandry",
   "b": "Ricki Cohen",
   "team": "Players Courtyard",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.2,
   "avgActual": -1.2,
   "avgExpected": -0.8,
   "aId": "11112eb4-26f3-458d-954e-5718dd3b9332",
   "bId": "a9094665-d5af-440c-b9b1-05403739512c"
  },
  {
   "a": "Juan Millan",
   "b": "Esther Yoon",
   "team": "PKLD",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 2.8,
   "avgExpected": 3.1,
   "aId": "1e02d437-092e-4a23-92d9-c9a07fc25f2d",
   "bId": "7d70ad57-c02f-47cc-bdd2-e330a7fed56e"
  },
  {
   "a": "Emily Su",
   "b": "Khushi Shah",
   "team": "Pickleball Kingdom Watchung",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.2,
   "avgActual": 0.7,
   "avgExpected": 1,
   "aId": "027988d5-1c42-4102-b21a-bfce0434d664",
   "bId": "98a6fa2e-b59e-4f40-bc5c-8899d299da49"
  },
  {
   "a": "Emily Su",
   "b": "Carissa Baptista",
   "team": "Pickleball Kingdom Watchung",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 2.3,
   "avgExpected": 2.6,
   "aId": "027988d5-1c42-4102-b21a-bfce0434d664",
   "bId": "ddfed357-6d2d-42ea-b48f-540cacd2409a"
  },
  {
   "a": "Jacquie Verish",
   "b": "Rebecca Mcginnis",
   "team": "Jersey Devil Navy",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.2,
   "avgActual": -5,
   "avgExpected": -4.6,
   "aId": "6f126e55-bb02-4c7d-a69d-db30473ad0b3",
   "bId": "e292105e-2554-4a80-accc-6b28514a8ec1"
  },
  {
   "a": "Taryn Seidner",
   "b": "Veronica Rosas",
   "team": "Pickle House",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.2,
   "avgActual": -1.7,
   "avgExpected": -1.4,
   "aId": "2dd97210-f5b8-4645-b400-a2611539cca8",
   "bId": "abab39fe-af60-4956-9f97-460189ab90dc"
  },
  {
   "a": "Veronica Rosas",
   "b": "Danny Ruiz",
   "team": "Pickle House",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 1,
   "avgExpected": 1.5,
   "aId": "abab39fe-af60-4956-9f97-460189ab90dc",
   "bId": "cf86f914-08ca-4df6-9cdb-74a23afc2478"
  },
  {
   "a": "Reggie Tiglao",
   "b": "Joe Johnson",
   "team": "Picklr Newark",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 1.7,
   "avgExpected": 2.3,
   "aId": "32dcadef-5ceb-4826-8e96-fc36508fba54",
   "bId": "fc139d5b-7881-4bdf-bf06-91354a4deab7"
  },
  {
   "a": "Linda Liu",
   "b": "Ashley Held",
   "team": "Jersey Devil Green",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.4,
   "avgActual": 0,
   "avgExpected": 1,
   "aId": "3ab0ff4a-df0d-41fa-8602-059d287882ef",
   "bId": "60c53e43-dbe0-4f62-8023-a2c1c1303fc3"
  },
  {
   "a": "Jeremy Chen",
   "b": "Anthony Prusich",
   "team": "Bounce Philly",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": -0.4,
   "avgActual": 3.3,
   "avgExpected": 4.1,
   "aId": "3c293cfa-d13b-4c0d-8cfe-057058b886d8",
   "bId": "41cd934f-66b0-4f22-b2e1-74955db922ce"
  },
  {
   "a": "Katrina Maranan",
   "b": "Peter David",
   "team": "Jersey Devil Green",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.4,
   "avgActual": -2.3,
   "avgExpected": -1.5,
   "aId": "4031f243-e80c-492b-b30b-5bf058824762",
   "bId": "c5e40aa9-efbf-4937-b44d-1b8f06693ba4"
  },
  {
   "a": "Nicole Mandry",
   "b": "Deirdre Zohlman",
   "team": "Players Courtyard",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.4,
   "avgActual": -1.7,
   "avgExpected": -0.8,
   "aId": "11112eb4-26f3-458d-954e-5718dd3b9332",
   "bId": "f9fffb3c-b254-4953-b53c-55bcc43c583b"
  },
  {
   "a": "Lewis Torres",
   "b": "Thomas Kang",
   "team": "ACE Downingtown",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.4,
   "avgActual": -2.3,
   "avgExpected": -1.5,
   "aId": "ccf24d18-560f-4ae8-ad75-8fc330f7c24f",
   "bId": "d97f0830-c24e-48e9-a8e9-a32edc67530e"
  },
  {
   "a": "Aaron Chan",
   "b": "Mary Fair",
   "team": "Players Courtyard",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.5,
   "avgActual": -5.2,
   "avgExpected": -4.2,
   "aId": "57666861-23d0-4809-9556-b646579f2fd6",
   "bId": "66acdf95-131a-4d7d-89d7-2fe93406d61b"
  },
  {
   "a": "Jia Fei",
   "b": "Wen Jin",
   "team": "LBF Pickleball",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -2.7,
   "avgExpected": -1.3,
   "aId": "b08403c9-52bb-4223-b207-45b69af4983d",
   "bId": "dd2384fe-4bb2-4085-a917-6e7989beb8a7"
  },
  {
   "a": "Matthew Peletier",
   "b": "Danielle Kuti",
   "team": "Pickle House",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -5.7,
   "avgExpected": -4.5,
   "aId": "7ca5a039-420c-4a5b-8721-c87b378b9a5f",
   "bId": "c3902bc0-35a6-490d-9909-6f19b1224b99"
  },
  {
   "a": "Jennifer Kasnadi",
   "b": "Leah Oneill",
   "team": "Picklr Newark",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.7,
   "avgActual": -1.7,
   "avgExpected": 0,
   "aId": "43e3e482-aa27-49c2-a18f-59a7abdbc7ba",
   "bId": "f76a584d-94cf-4bb7-8c34-90e6c491ac10"
  },
  {
   "a": "Mary Fair",
   "b": "Scott Strong",
   "team": "Players Courtyard",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -1.3,
   "avgExpected": 0.2,
   "aId": "66acdf95-131a-4d7d-89d7-2fe93406d61b",
   "bId": "f4f395df-7e5a-4867-bcbc-30f8dbcfe77d"
  },
  {
   "a": "Carmina Lasam",
   "b": "Corie Stone",
   "team": "Montville",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -3,
   "avgExpected": -1.4,
   "aId": "c7d6417a-1519-48bd-831a-58e1714d70a9",
   "bId": "c8d0efa3-d55c-4c90-a7f1-181f045702d0"
  },
  {
   "a": "Arnaud Clairay",
   "b": "Ann Dunn",
   "team": "Picklr Exton",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -6.3,
   "avgExpected": -4.7,
   "aId": "1c8905b3-3118-4fae-aca2-f9ec43d07c30",
   "bId": "fac1e928-060e-4b80-a0e4-bcd4aca0089b"
  },
  {
   "a": "Sydney Peterson",
   "b": "Dylan Tjio",
   "team": "Picklr Newark",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -2,
   "avgExpected": -0.4,
   "aId": "8f4ef30f-10b9-4ef4-b8d1-098be63d84fb",
   "bId": "cfde52cc-d4a3-4d57-bf17-121d9c5eb4ea"
  },
  {
   "a": "Peter Siv",
   "b": "Samuel Lee",
   "team": "Ballers Philly",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.8,
   "avgActual": -2.7,
   "avgExpected": -0.8,
   "aId": "a526f541-d970-4467-b304-0783f0ac4b50",
   "bId": "b07b7480-a964-459c-b47e-5c0f4a8774e9"
  },
  {
   "a": "Dan Stanton",
   "b": "Mary Brashier",
   "team": "Flemington",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.9,
   "avgActual": -5.3,
   "avgExpected": -3.3,
   "aId": "08f765a3-1ebf-4b7f-afe1-e815112ee581",
   "bId": "8fb87112-3824-4d16-96d1-3f4abcb2ae45"
  },
  {
   "a": "Richie Mizrahi",
   "b": "Emiliya Mizrahi",
   "team": "Home Court",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -6.2,
   "avgExpected": -4.4,
   "aId": "23b78ff1-3039-4b01-b033-839cdba54a19",
   "bId": "f173be84-93c7-46b8-b828-d44ddc52d63c"
  },
  {
   "a": "Kong Vu",
   "b": "Khanh Vu",
   "team": "Bounce Tempest",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.9,
   "avgActual": -2,
   "avgExpected": 0.1,
   "aId": "1d44d478-17dd-41c5-95e2-7010889b33ba",
   "bId": "97897afe-f9e2-42be-926f-d6ebe7025591"
  },
  {
   "a": "Gianna Medeiros",
   "b": "Andrew Martin",
   "team": "Bounce Philly",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -1,
   "avgActual": -0.2,
   "avgExpected": 1.9,
   "aId": "b63ec8b5-b659-4404-92b0-8e577c87534a",
   "bId": "e8b51e9c-3814-42e1-8413-2c1734514ea1"
  },
  {
   "a": "Laura Slane",
   "b": "David Tabacco",
   "team": "Flemington",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -4.7,
   "avgExpected": -2.1,
   "aId": "17a78a69-329f-4133-8a0d-784c306a57c2",
   "bId": "717d97f0-4f08-476f-9c53-7595605bc0b0"
  },
  {
   "a": "Brandon Calmo",
   "b": "Danny Ruiz",
   "team": "Pickle House",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.2,
   "avgActual": -5.7,
   "avgExpected": -3.3,
   "aId": "79a3d198-0295-4bed-b0d7-bcda477d6b3a",
   "bId": "cf86f914-08ca-4df6-9cdb-74a23afc2478"
  },
  {
   "a": "Justin Lin",
   "b": "Nancy Wu",
   "team": "ACE Downingtown",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.3,
   "avgActual": 0,
   "avgExpected": 2.7,
   "aId": "b084b51a-054c-4a7f-b1a5-0cb26e4f669c",
   "bId": "c187c25d-5d0a-4e66-9ac5-b1a05b0c151f"
  },
  {
   "a": "Ahmed Aziz",
   "b": "Tracy Wong",
   "team": "PKLD",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.4,
   "avgActual": 0,
   "avgExpected": 2.7,
   "aId": "086a95e6-d7ca-4ac7-8fec-b35b1110fbd1",
   "bId": "6c513ea5-3938-4f01-9071-f149cc1da268"
  },
  {
   "a": "Dede Dolkar",
   "b": "Diana Nguyen",
   "team": "Pickleball Kingdom Watchung",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.4,
   "avgActual": -2,
   "avgExpected": 1.3,
   "aId": "00f31bfd-e3ff-4a78-8f87-33a51ce4dde4",
   "bId": "26337037-9e6a-4007-93ee-e2b083f30a03"
  },
  {
   "a": "Aaron Chan",
   "b": "Matt Demarco",
   "team": "Players Courtyard",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.5,
   "avgActual": -3.7,
   "avgExpected": -0.7,
   "aId": "57666861-23d0-4809-9556-b646579f2fd6",
   "bId": "6c182803-54c7-439a-b269-17b063a0b3a7"
  },
  {
   "a": "Sarah Law",
   "b": "Abdullah Osman",
   "team": "Montville",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.7,
   "avgActual": -3.7,
   "avgExpected": 0.3,
   "aId": "b0666637-423b-42ed-b2a4-02a6d12164c2",
   "bId": "c8f3b265-67a8-412c-84f5-aee92a913aac"
  },
  {
   "a": "Matthew Stephenson",
   "b": "Emiliya Mizrahi",
   "team": "Home Court",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.7,
   "avgActual": -6.5,
   "avgExpected": -3.1,
   "aId": "469c2465-d07c-4449-9adb-046595aeba8a",
   "bId": "f173be84-93c7-46b8-b828-d44ddc52d63c"
  },
  {
   "a": "Jay Lizardo",
   "b": "Karen Anthony",
   "team": "ACE Downingtown",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.7,
   "avgActual": -7.7,
   "avgExpected": -4.3,
   "aId": "6537e984-a225-48cf-a812-1c71c3ecfbee",
   "bId": "75ea65b1-1fef-447f-98ce-a2edd80200a9"
  },
  {
   "a": "Winston Lian",
   "b": "Josiah Kim",
   "team": "Pickleball Kingdom Watchung",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -1.9,
   "avgActual": 3.8,
   "avgExpected": 7.7,
   "aId": "77e71d86-1be3-4df7-8c52-d0802eed8e08",
   "bId": "de8e2a33-d691-4652-84ef-532b89f467bc"
  }
 ],
 "matches": [
  {
   "result": "home",
   "week": 1,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "LBF Pickleball",
   "time": "2026-08-26T19:00:00",
   "complete": true,
   "homePoints": 619,
   "awayPoints": 583,
   "homeGW": 19,
   "awayGW": 13,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Michelle Burke",
      "George Vega Jr"
     ],
     "a": [
      "Michelle Lin",
      "James Ouyang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Ayako Caravella",
      "Yashraj Kurani"
     ],
     "a": [
      "Jia Fei",
      "Wen Jin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ivona Reszka",
      "Richard Damacela"
     ],
     "a": [
      "Lucy Li",
      "Andy Wang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Maria Valencia",
      "Christopher Monzon"
     ],
     "a": [
      "May Wang",
      "Allan Orchard"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Ayako Caravella",
      "Maria Valencia"
     ],
     "a": [
      "Jia Fei",
      "Lucy Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Michelle Burke",
      "Ivona Reszka"
     ],
     "a": [
      "Michelle Lin",
      "Tingting Huang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Yashraj Kurani",
      "Rob Stever"
     ],
     "a": [
      "Wen Jin",
      "Guan Yang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "George Vega Jr",
      "Christopher Monzon"
     ],
     "a": [
      "Chao Ku",
      "Allan Orchard"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Ayako Caravella",
      "Rob Stever"
     ],
     "a": [
      "Jia Fei",
      "Chao Ku"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Ivona Reszka",
      "Yashraj Kurani"
     ],
     "a": [
      "Lucy Li",
      "Allan Orchard"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Maria Valencia",
      "George Vega Jr"
     ],
     "a": [
      "Tingting Huang",
      "Andy Wang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Michelle Burke",
      "Christopher Monzon"
     ],
     "a": [
      "May Wang",
      "James Ouyang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ayako Caravella",
      "Maria Valencia"
     ],
     "a": [
      "Jia Fei",
      "Lucy Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Michelle Burke",
      "Ivona Reszka"
     ],
     "a": [
      "Michelle Lin",
      "Tingting Huang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Richard Damacela",
      "Yashraj Kurani"
     ],
     "a": [
      "Wen Jin",
      "Allan Orchard"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "George Vega Jr",
      "Christopher Monzon"
     ],
     "a": [
      "Chao Ku",
      "James Ouyang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Maria Valencia",
      "Christopher Monzon"
     ],
     "a": [
      "Tingting Huang",
      "Guan Yang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Ayako Caravella",
      "Rob Stever"
     ],
     "a": [
      "Jia Fei",
      "Allan Orchard"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ivona Reszka",
      "Yashraj Kurani"
     ],
     "a": [
      "May Wang",
      "Andy Wang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Michelle Burke",
      "Richard Damacela"
     ],
     "a": [
      "Lucy Li",
      "Wen Jin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Michelle Burke",
      "Maria Valencia"
     ],
     "a": [
      "Lucy Li",
      "Tingting Huang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Ayako Caravella",
      "Ivona Reszka"
     ],
     "a": [
      "Michelle Lin",
      "Jia Fei"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "George Vega Jr",
      "Yashraj Kurani"
     ],
     "a": [
      "Andy Wang",
      "Allan Orchard"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Richard Damacela",
      "Rob Stever"
     ],
     "a": [
      "Chao Ku",
      "Wen Jin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Ayako Caravella",
      "Christopher Monzon"
     ],
     "a": [
      "Tingting Huang",
      "James Ouyang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Maria Valencia",
      "George Vega Jr"
     ],
     "a": [
      "May Wang",
      "Guan Yang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ivona Reszka",
      "Richard Damacela"
     ],
     "a": [
      "Lucy Li",
      "Wen Jin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Michelle Burke",
      "Rob Stever"
     ],
     "a": [
      "Jia Fei",
      "Allan Orchard"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Michelle Burke",
      "Maria Valencia"
     ],
     "a": [
      "May Wang",
      "Michelle Lin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ayako Caravella",
      "Ivona Reszka"
     ],
     "a": [
      "Tingting Huang",
      "Lucy Li"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Richard Damacela",
      "Christopher Monzon"
     ],
     "a": [
      "Allan Orchard",
      "Wen Jin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "George Vega Jr",
      "Yashraj Kurani"
     ],
     "a": [
      "Guan Yang",
      "Andy Wang"
     ]
    }
   ],
   "subs": [
    "Lucy Li",
    "Maria Valencia",
    "Yashraj Kurani",
    "Michelle Burke",
    "Christopher Monzon",
    "Ivona Reszka",
    "James Ouyang"
   ]
  },
  {
   "result": "away",
   "week": 1,
   "home": "Flemington",
   "away": "Pickleball Kingdom Lehigh Valley",
   "time": "2026-08-26T19:00:00",
   "complete": true,
   "homePoints": 606,
   "awayPoints": 624,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Mary Brashier",
      "Addison Stewart"
     ],
     "a": [
      "Colleen Van Ee",
      "Dion Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Patricia Kavanaugh",
      "John Lottier"
     ],
     "a": [
      "Arzu Alimjan",
      "Jesse Frey"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Laura Slane",
      "David Tabacco"
     ],
     "a": [
      "Virginia Alves",
      "Cullen Curley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Johanna Kreilick",
      "Dan Stanton"
     ],
     "a": [
      "Deb Morisie",
      "David Reyes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Mary Brashier",
      "Patricia Kavanaugh"
     ],
     "a": [
      "Arzu Alimjan",
      "Colleen Van Ee"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Johanna Kreilick",
      "Laura Govan"
     ],
     "a": [
      "Virginia Alves",
      "Lana Engler Carss"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Dan Stanton",
      "Lakshmikanth Chaluvadi"
     ],
     "a": [
      "David Reyes",
      "Chris Hudak"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "David Tabacco",
      "John Lottier"
     ],
     "a": [
      "Dion Brown",
      "Cullen Curley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Mary Brashier",
      "Dan Stanton"
     ],
     "a": [
      "Arzu Alimjan",
      "David Reyes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Laura Govan",
      "Lakshmikanth Chaluvadi"
     ],
     "a": [
      "Virginia Alves",
      "Dion Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Patricia Kavanaugh",
      "John Lottier"
     ],
     "a": [
      "Lana Engler Carss",
      "Jesse Frey"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Laura Slane",
      "Addison Stewart"
     ],
     "a": [
      "Colleen Van Ee",
      "Cullen Curley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Patricia Kavanaugh",
      "Laura Govan"
     ],
     "a": [
      "Virginia Alves",
      "Arzu Alimjan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Johanna Kreilick",
      "Laura Slane"
     ],
     "a": [
      "Colleen Van Ee",
      "Deb Morisie"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "John Lottier",
      "David Tabacco"
     ],
     "a": [
      "Cullen Curley",
      "David Reyes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Lakshmikanth Chaluvadi",
      "Addison Stewart"
     ],
     "a": [
      "Dion Brown",
      "Chris Hudak"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Mary Brashier",
      "John Lottier"
     ],
     "a": [
      "Deb Morisie",
      "Chris Hudak"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Johanna Kreilick",
      "David Tabacco"
     ],
     "a": [
      "Arzu Alimjan",
      "Jesse Frey"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Laura Govan",
      "Dan Stanton"
     ],
     "a": [
      "Virginia Alves",
      "Dion Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Laura Slane",
      "Addison Stewart"
     ],
     "a": [
      "Lana Engler Carss",
      "David Reyes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Mary Brashier",
      "Patricia Kavanaugh"
     ],
     "a": [
      "Colleen Van Ee",
      "Lana Engler Carss"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Johanna Kreilick",
      "Laura Govan"
     ],
     "a": [
      "Arzu Alimjan",
      "Virginia Alves"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Lakshmikanth Chaluvadi",
      "Addison Stewart"
     ],
     "a": [
      "Cullen Curley",
      "David Reyes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Dan Stanton",
      "David Tabacco"
     ],
     "a": [
      "Jesse Frey",
      "Dion Brown"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Mary Brashier",
      "John Lottier"
     ],
     "a": [
      "Colleen Van Ee",
      "Chris Hudak"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Patricia Kavanaugh",
      "Dan Stanton"
     ],
     "a": [
      "Virginia Alves",
      "Cullen Curley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Laura Slane",
      "David Tabacco"
     ],
     "a": [
      "Deb Morisie",
      "Jesse Frey"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Johanna Kreilick",
      "Lakshmikanth Chaluvadi"
     ],
     "a": [
      "Lana Engler Carss",
      "Dion Brown"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Mary Brashier",
      "Johanna Kreilick"
     ],
     "a": [
      "Colleen Van Ee",
      "Virginia Alves"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Laura Govan",
      "Laura Slane"
     ],
     "a": [
      "Arzu Alimjan",
      "Deb Morisie"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Lakshmikanth Chaluvadi",
      "David Tabacco"
     ],
     "a": [
      "David Reyes",
      "Chris Hudak"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "John Lottier",
      "Addison Stewart"
     ],
     "a": [
      "Dion Brown",
      "Cullen Curley"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 1,
   "home": "Forward",
   "away": "Delco Turf & Pickle",
   "time": "2026-08-26T19:00:00",
   "complete": true,
   "homePoints": 620,
   "awayPoints": 632,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Esha Gajjar",
      "Ryan Gerstel"
     ],
     "a": [
      "Carla Fonseca",
      "Leh Mounelasy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Isabel Laroque",
      "Michael Martellacci"
     ],
     "a": [
      "Marina Mounelasy",
      "Jon Wheel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Ariane Abadi",
      "Luc Legaspi"
     ],
     "a": [
      "Jenny Shi",
      "Elliott Tseng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Olivia Lee",
      "Matthew Crawford"
     ],
     "a": [
      "Kalina Ye",
      "Evan Truitt"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Ariane Abadi",
      "Lili Zebluim"
     ],
     "a": [
      "Irene Fitzgerald",
      "Marina Mounelasy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Isabel Laroque",
      "Ava Pastore"
     ],
     "a": [
      "Roe Avila",
      "Jenny Shi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Michael Martellacci",
      "Luc Legaspi"
     ],
     "a": [
      "Nick Tang",
      "Elliott Tseng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Cole Neimetz",
      "Matthew Crawford"
     ],
     "a": [
      "Andrew Taylor",
      "Evan Truitt"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Olivia Lee",
      "Cole Neimetz"
     ],
     "a": [
      "Irene Fitzgerald",
      "Leh Mounelasy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Isabel Laroque",
      "Matthew Crawford"
     ],
     "a": [
      "Kalina Ye",
      "Nick Tang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Ava Pastore",
      "Ryan Gerstel"
     ],
     "a": [
      "Marina Mounelasy",
      "Jon Wheel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lili Zebluim",
      "Luc Legaspi"
     ],
     "a": [
      "Roe Avila",
      "Andrew Taylor"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Esha Gajjar",
      "Olivia Lee"
     ],
     "a": [
      "Carla Fonseca",
      "Marina Mounelasy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ava Pastore",
      "Lili Zebluim"
     ],
     "a": [
      "Jenny Shi",
      "Kalina Ye"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 3,
     "as": 21,
     "h": [
      "Matthew Crawford",
      "Ryan Gerstel"
     ],
     "a": [
      "Leh Mounelasy",
      "Nick Tang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 28,
     "h": [
      "Luc Legaspi",
      "Michael Martellacci"
     ],
     "a": [
      "Elliott Tseng",
      "Jon Wheel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Esha Gajjar",
      "Cole Neimetz"
     ],
     "a": [
      "Kalina Ye",
      "Leh Mounelasy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Olivia Lee",
      "Luc Legaspi"
     ],
     "a": [
      "Roe Avila",
      "Nick Tang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Ava Pastore",
      "Michael Martellacci"
     ],
     "a": [
      "Jenny Shi",
      "Jon Wheel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Isabel Laroque",
      "Ryan Gerstel"
     ],
     "a": [
      "Irene Fitzgerald",
      "Andrew Taylor"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Esha Gajjar",
      "Isabel Laroque"
     ],
     "a": [
      "Carla Fonseca",
      "Irene Fitzgerald"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ariane Abadi",
      "Lili Zebluim"
     ],
     "a": [
      "Roe Avila",
      "Marina Mounelasy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Matthew Crawford",
      "Michael Martellacci"
     ],
     "a": [
      "Andrew Taylor",
      "Evan Truitt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Cole Neimetz",
      "Luc Legaspi"
     ],
     "a": [
      "Jon Wheel",
      "Elliott Tseng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Esha Gajjar",
      "Cole Neimetz"
     ],
     "a": [
      "Carla Fonseca",
      "Nick Tang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Lili Zebluim",
      "Michael Martellacci"
     ],
     "a": [
      "Kalina Ye",
      "Elliott Tseng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Ava Pastore",
      "Luc Legaspi"
     ],
     "a": [
      "Jenny Shi",
      "Leh Mounelasy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Ariane Abadi",
      "Ryan Gerstel"
     ],
     "a": [
      "Marina Mounelasy",
      "Evan Truitt"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Olivia Lee",
      "Isabel Laroque"
     ],
     "a": [
      "Roe Avila",
      "Marina Mounelasy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Ava Pastore",
      "Ariane Abadi"
     ],
     "a": [
      "Irene Fitzgerald",
      "Jenny Shi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Cole Neimetz",
      "Ryan Gerstel"
     ],
     "a": [
      "Leh Mounelasy",
      "Andrew Taylor"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 30,
     "as": 32,
     "h": [
      "Matthew Crawford",
      "Michael Martellacci"
     ],
     "a": [
      "Nick Tang",
      "Evan Truitt"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 1,
   "home": "Dill Dinkers Freehold",
   "away": "Picklr Manahawkin",
   "time": "2026-08-26T19:30:00",
   "complete": true,
   "homePoints": 416,
   "awayPoints": 675,
   "homeGW": 2,
   "awayGW": 30,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Elsie Koo",
      "Steven Koo"
     ],
     "a": [
      "Jennifer Kline",
      "Brian Kline"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Angie Habib",
      "Peter Liang"
     ],
     "a": [
      "Jordan Pirrello",
      "Tom Draney"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Abeer Massoud",
      "Amr Shaheed"
     ],
     "a": [
      "Clarisse Espiritu",
      "Michael Fidelino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Allyson Fry",
      "Brandon Pfeffer"
     ],
     "a": [
      "Kristina Salomia",
      "Jonathan Bautista"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Tara Oko",
      "Elsie Koo"
     ],
     "a": [
      "Clarisse Espiritu",
      "Kristina Salomia"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Abeer Massoud",
      "Allyson Fry"
     ],
     "a": [
      "Jennifer Kline",
      "Jordan Pirrello"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Steven Koo",
      "Brandon Pfeffer"
     ],
     "a": [
      "Jonathan Bautista",
      "Michael Fidelino"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kevin Wan",
      "Amr Shaheed"
     ],
     "a": [
      "Brian Kline",
      "Tom Draney"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Angie Habib",
      "Kevin Wan"
     ],
     "a": [
      "Kristina Salomia",
      "Jonathan Bautista"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Abeer Massoud",
      "Peter Liang"
     ],
     "a": [
      "Jordan Pirrello",
      "Tom Draney"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Allyson Fry",
      "Steven Koo"
     ],
     "a": [
      "Clarisse Espiritu",
      "Michael Fidelino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Tara Oko",
      "Brandon Pfeffer"
     ],
     "a": [
      "Jennifer Kline",
      "Brian Kline"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Allyson Fry",
      "Elsie Koo"
     ],
     "a": [
      "Jennifer Kline",
      "Jordan Pirrello"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Angie Habib",
      "Abeer Massoud"
     ],
     "a": [
      "Clarisse Espiritu",
      "Kristina Salomia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Steven Koo",
      "Peter Liang"
     ],
     "a": [
      "Brian Kline",
      "Tom Draney"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Brandon Pfeffer",
      "Amr Shaheed"
     ],
     "a": [
      "Jonathan Bautista",
      "Michael Fidelino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Tara Oko",
      "Amr Shaheed"
     ],
     "a": [
      "Jordan Pirrello",
      "Michael Fidelino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Angie Habib",
      "Brandon Pfeffer"
     ],
     "a": [
      "Kristina Salomia",
      "Brian Kline"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Elsie Koo",
      "Peter Liang"
     ],
     "a": [
      "Clarisse Espiritu",
      "Jonathan Bautista"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Abeer Massoud",
      "Kevin Wan"
     ],
     "a": [
      "Jennifer Kline",
      "Tom Draney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Tara Oko",
      "Allyson Fry"
     ],
     "a": [
      "Jordan Pirrello",
      "Kristina Salomia"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Angie Habib",
      "Elsie Koo"
     ],
     "a": [
      "Jennifer Kline",
      "Clarisse Espiritu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kevin Wan",
      "Steven Koo"
     ],
     "a": [
      "Jonathan Bautista",
      "Tom Draney"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Brandon Pfeffer",
      "Peter Liang"
     ],
     "a": [
      "Brian Kline",
      "Michael Fidelino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Angie Habib",
      "Peter Liang"
     ],
     "a": [
      "Jordan Pirrello",
      "Michael Fidelino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Allyson Fry",
      "Steven Koo"
     ],
     "a": [
      "Jennifer Kline",
      "Tom Draney"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Abeer Massoud",
      "Amr Shaheed"
     ],
     "a": [
      "Clarisse Espiritu",
      "Jonathan Bautista"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tara Oko",
      "Kevin Wan"
     ],
     "a": [
      "Kristina Salomia",
      "Brian Kline"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Allyson Fry",
      "Tara Oko"
     ],
     "a": [
      "Jordan Pirrello",
      "Kristina Salomia"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Abeer Massoud",
      "Angie Habib"
     ],
     "a": [
      "Jennifer Kline",
      "Clarisse Espiritu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Brandon Pfeffer",
      "Amr Shaheed"
     ],
     "a": [
      "Jonathan Bautista",
      "Tom Draney"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Kevin Wan",
      "Peter Liang"
     ],
     "a": [
      "Michael Fidelino",
      "Brian Kline"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 1,
   "home": "Jersey Devil Green",
   "away": "Bounce Philly",
   "time": "2026-08-26T19:30:00",
   "complete": true,
   "homePoints": 616,
   "awayPoints": 606,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Olivia Schaller",
      "Brandon Dejesus"
     ],
     "a": [
      "Julia Manetta",
      "Anthony Prusich"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Linda Liu",
      "Anthony Solares"
     ],
     "a": [
      "Maggie Malloy",
      "Kyle Kelly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Katrina Maranan",
      "Xin Liu"
     ],
     "a": [
      "Caity Rietzen",
      "Jeremy Chen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Victoria Rolon",
      "Peter David"
     ],
     "a": [
      "Gianna Medeiros",
      "Andrew Martin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Srilahari Kunchapu",
      "Olivia Schaller"
     ],
     "a": [
      "Maggie Malloy",
      "Julia Manetta"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Ashley Held",
      "Linda Liu"
     ],
     "a": [
      "Christina Sheehan",
      "Mira Sigal-Feldman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Benji Berry",
      "Evan Sinclair"
     ],
     "a": [
      "Joshua Kim",
      "Jonathan Macqueen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Brandon Dejesus",
      "Anthony Solares"
     ],
     "a": [
      "Jeremy Chen",
      "Anthony Prusich"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Srilahari Kunchapu",
      "Anthony Solares"
     ],
     "a": [
      "Christina Sheehan",
      "Anthony Prusich"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Ashley Held",
      "Benji Berry"
     ],
     "a": [
      "Gianna Medeiros",
      "Andrew Martin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Olivia Schaller",
      "Evan Sinclair"
     ],
     "a": [
      "Julia Manetta",
      "Jonathan Macqueen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Katrina Maranan",
      "Peter David"
     ],
     "a": [
      "Mira Sigal-Feldman",
      "Kyle Kelly"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Victoria Rolon",
      "Linda Liu"
     ],
     "a": [
      "Caity Rietzen",
      "Christina Sheehan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Katrina Maranan",
      "Olivia Schaller"
     ],
     "a": [
      "Gianna Medeiros",
      "Maggie Malloy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Peter David",
      "Benji Berry"
     ],
     "a": [
      "Jeremy Chen",
      "Joshua Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Brandon Dejesus",
      "Xin Liu"
     ],
     "a": [
      "Kyle Kelly",
      "Andrew Martin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Katrina Maranan",
      "Peter David"
     ],
     "a": [
      "Maggie Malloy",
      "Joshua Kim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Srilahari Kunchapu",
      "Xin Liu"
     ],
     "a": [
      "Julia Manetta",
      "Anthony Prusich"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ashley Held",
      "Anthony Solares"
     ],
     "a": [
      "Caity Rietzen",
      "Andrew Martin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Victoria Rolon",
      "Benji Berry"
     ],
     "a": [
      "Christina Sheehan",
      "Jonathan Macqueen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Srilahari Kunchapu",
      "Olivia Schaller"
     ],
     "a": [
      "Julia Manetta",
      "Gianna Medeiros"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Victoria Rolon",
      "Linda Liu"
     ],
     "a": [
      "Maggie Malloy",
      "Mira Sigal-Feldman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Brandon Dejesus",
      "Xin Liu"
     ],
     "a": [
      "Kyle Kelly",
      "Andrew Martin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Peter David",
      "Evan Sinclair"
     ],
     "a": [
      "Jonathan Macqueen",
      "Joshua Kim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Srilahari Kunchapu",
      "Xin Liu"
     ],
     "a": [
      "Julia Manetta",
      "Kyle Kelly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Ashley Held",
      "Evan Sinclair"
     ],
     "a": [
      "Caity Rietzen",
      "Jeremy Chen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Victoria Rolon",
      "Benji Berry"
     ],
     "a": [
      "Maggie Malloy",
      "Joshua Kim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Katrina Maranan",
      "Brandon Dejesus"
     ],
     "a": [
      "Mira Sigal-Feldman",
      "Jonathan Macqueen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Srilahari Kunchapu",
      "Linda Liu"
     ],
     "a": [
      "Christina Sheehan",
      "Gianna Medeiros"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ashley Held",
      "Olivia Schaller"
     ],
     "a": [
      "Caity Rietzen",
      "Mira Sigal-Feldman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Brandon Dejesus",
      "Anthony Solares"
     ],
     "a": [
      "Anthony Prusich",
      "Jeremy Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Peter David",
      "Evan Sinclair"
     ],
     "a": [
      "Andrew Martin",
      "Joshua Kim"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 1,
   "home": "Bounce Malvern",
   "away": "Picklr Newark",
   "time": "2026-08-26T19:30:00",
   "complete": true,
   "homePoints": 567,
   "awayPoints": 646,
   "homeGW": 11,
   "awayGW": 21,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Jennifer Minehan",
      "Michal Dziegielewski"
     ],
     "a": [
      "Carly Cebek",
      "Joe Johnson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Carolina Reese",
      "Trevor Oakley"
     ],
     "a": [
      "Jennifer Kasnadi",
      "Savan Patel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Kim Mchugh",
      "Matthew Landis"
     ],
     "a": [
      "Pam Politis",
      "Jayadeep Reddy Kamireddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Alison Mento",
      "Moe Phanhnong"
     ],
     "a": [
      "Sydney Peterson",
      "Dylan Tjio"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kristie Frazier",
      "Christine Vu"
     ],
     "a": [
      "Jennifer Kasnadi",
      "Carly Cebek"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jennifer Minehan",
      "Alison Mento"
     ],
     "a": [
      "Sydney Peterson",
      "Leah Oneill"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Matthew Landis",
      "Joseph Walton"
     ],
     "a": [
      "Joe Johnson",
      "Reggie Tiglao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Moe Phanhnong",
      "Trevor Oakley"
     ],
     "a": [
      "Dylan Tjio",
      "Savan Patel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kim Mchugh",
      "Michal Dziegielewski"
     ],
     "a": [
      "Carly Cebek",
      "Joe Johnson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jennifer Minehan",
      "Tim Phelan"
     ],
     "a": [
      "Jennifer Kasnadi",
      "Savan Patel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Christine Vu",
      "Matthew Landis"
     ],
     "a": [
      "Pam Politis",
      "Jayadeep Reddy Kamireddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Carolina Reese",
      "Joseph Walton"
     ],
     "a": [
      "Sydney Peterson",
      "Dylan Tjio"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kim Mchugh",
      "Christine Vu"
     ],
     "a": [
      "Jennifer Kasnadi",
      "Carly Cebek"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kristie Frazier",
      "Alison Mento"
     ],
     "a": [
      "Sydney Peterson",
      "Leah Oneill"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Michal Dziegielewski",
      "Tim Phelan"
     ],
     "a": [
      "Joe Johnson",
      "Jayadeep Reddy Kamireddy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Moe Phanhnong",
      "Trevor Oakley"
     ],
     "a": [
      "Dylan Tjio",
      "Reggie Tiglao"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jennifer Minehan",
      "Joseph Walton"
     ],
     "a": [
      "Carly Cebek",
      "Dylan Tjio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kristie Frazier",
      "Moe Phanhnong"
     ],
     "a": [
      "Sydney Peterson",
      "Savan Patel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Alison Mento",
      "Matthew Landis"
     ],
     "a": [
      "Pam Politis",
      "Reggie Tiglao"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Carolina Reese",
      "Trevor Oakley"
     ],
     "a": [
      "Leah Oneill",
      "Joe Johnson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Kristie Frazier",
      "Alison Mento"
     ],
     "a": [
      "Jennifer Kasnadi",
      "Leah Oneill"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jennifer Minehan",
      "Christine Vu"
     ],
     "a": [
      "Sydney Peterson",
      "Pam Politis"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Michal Dziegielewski",
      "Trevor Oakley"
     ],
     "a": [
      "Dylan Tjio",
      "Savan Patel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Matthew Landis",
      "Tim Phelan"
     ],
     "a": [
      "Jayadeep Reddy Kamireddy",
      "Reggie Tiglao"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Carolina Reese",
      "Joseph Walton"
     ],
     "a": [
      "Carly Cebek",
      "Jayadeep Reddy Kamireddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kristie Frazier",
      "Moe Phanhnong"
     ],
     "a": [
      "Leah Oneill",
      "Savan Patel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kim Mchugh",
      "Michal Dziegielewski"
     ],
     "a": [
      "Jennifer Kasnadi",
      "Joe Johnson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Christine Vu",
      "Tim Phelan"
     ],
     "a": [
      "Pam Politis",
      "Reggie Tiglao"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kim Mchugh",
      "Jennifer Minehan"
     ],
     "a": [
      "Jennifer Kasnadi",
      "Leah Oneill"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Carolina Reese",
      "Christine Vu"
     ],
     "a": [
      "Carly Cebek",
      "Pam Politis"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Michal Dziegielewski",
      "Joseph Walton"
     ],
     "a": [
      "Dylan Tjio",
      "Jayadeep Reddy Kamireddy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Matthew Landis",
      "Tim Phelan"
     ],
     "a": [
      "Joe Johnson",
      "Reggie Tiglao"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 1,
   "home": "Players Courtyard",
   "away": "Pickle Juice Blackwood",
   "time": "2026-08-26T19:30:00",
   "complete": true,
   "homePoints": 627,
   "awayPoints": 614,
   "homeGW": 19,
   "awayGW": 13,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Nicole Mandry",
      "Brad Mandry"
     ],
     "a": [
      "Tiffany Weis",
      "Skylar Bobadilla"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Deirdre Zohlman",
      "Aaron Chan"
     ],
     "a": [
      "Jennifer Kinkel",
      "Simon Darlington"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Mary Fair",
      "Scott Strong"
     ],
     "a": [
      "Rebecca Durda",
      "Brian Cook"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Ricki Cohen",
      "Matt Demarco"
     ],
     "a": [
      "Eileen Potter",
      "Gabriel Ferraro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Ricki Cohen",
      "Nicole Mandry"
     ],
     "a": [
      "Jennifer Kinkel",
      "Magnolia Lau"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Mary Fair",
      "Deirdre Zohlman"
     ],
     "a": [
      "Eileen Potter",
      "Rebecca Durda"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Matt Demarco",
      "Brad Mandry"
     ],
     "a": [
      "Skylar Bobadilla",
      "Holden Lenoff"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Spencer Day",
      "Scott Strong"
     ],
     "a": [
      "Brian Cook",
      "Gabriel Ferraro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Nicole Mandry",
      "Brad Mandry"
     ],
     "a": [
      "Rebecca Durda",
      "Skylar Bobadilla"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Deirdre Zohlman",
      "Aaron Chan"
     ],
     "a": [
      "Eileen Potter",
      "Holden Lenoff"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Mary Fair",
      "Scott Strong"
     ],
     "a": [
      "Magnolia Lau",
      "Simon Darlington"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Ricki Cohen",
      "Matt Demarco"
     ],
     "a": [
      "Christina Juliano",
      "Jon Palabay"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Ricki Cohen",
      "Nicole Mandry"
     ],
     "a": [
      "Tiffany Weis",
      "Rebecca Durda"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Mary Fair",
      "Deirdre Zohlman"
     ],
     "a": [
      "Jennifer Kinkel",
      "Christina Juliano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Aaron Chan",
      "Matt Demarco"
     ],
     "a": [
      "Brian Cook",
      "Jon Palabay"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Spencer Day",
      "Scott Strong"
     ],
     "a": [
      "Holden Lenoff",
      "Simon Darlington"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Nicole Mandry",
      "Scott Strong"
     ],
     "a": [
      "Christina Juliano",
      "Skylar Bobadilla"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Ricki Cohen",
      "Brad Mandry"
     ],
     "a": [
      "Jennifer Kinkel",
      "Brian Cook"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Deirdre Zohlman",
      "Spencer Day"
     ],
     "a": [
      "Magnolia Lau",
      "Holden Lenoff"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Mary Fair",
      "Aaron Chan"
     ],
     "a": [
      "Tiffany Weis",
      "Simon Darlington"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Nicole Mandry",
      "Deirdre Zohlman"
     ],
     "a": [
      "Eileen Potter",
      "Magnolia Lau"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ricki Cohen",
      "Mary Fair"
     ],
     "a": [
      "Tiffany Weis",
      "Christina Juliano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Brad Mandry",
      "Scott Strong"
     ],
     "a": [
      "Jon Palabay",
      "Skylar Bobadilla"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Matt Demarco",
      "Aaron Chan"
     ],
     "a": [
      "Brian Cook",
      "Gabriel Ferraro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Nicole Mandry",
      "Matt Demarco"
     ],
     "a": [
      "Rebecca Durda",
      "Holden Lenoff"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ricki Cohen",
      "Brad Mandry"
     ],
     "a": [
      "Magnolia Lau",
      "Jon Palabay"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Deirdre Zohlman",
      "Scott Strong"
     ],
     "a": [
      "Tiffany Weis",
      "Gabriel Ferraro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Mary Fair",
      "Aaron Chan"
     ],
     "a": [
      "Eileen Potter",
      "Brian Cook"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Nicole Mandry",
      "Deirdre Zohlman"
     ],
     "a": [
      "Eileen Potter",
      "Tiffany Weis"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ricki Cohen",
      "Mary Fair"
     ],
     "a": [
      "Christina Juliano",
      "Jennifer Kinkel"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Scott Strong",
      "Matt Demarco"
     ],
     "a": [
      "Jon Palabay",
      "Simon Darlington"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Aaron Chan",
      "Brad Mandry"
     ],
     "a": [
      "Skylar Bobadilla",
      "Gabriel Ferraro"
     ]
    }
   ],
   "subs": [
    "Matt Demarco",
    "Rebecca Durda",
    "Holden Lenoff"
   ]
  },
  {
   "result": "away",
   "week": 1,
   "home": "Montville",
   "away": "Picklr Fair Lawn",
   "time": "2026-08-26T19:30:00",
   "complete": true,
   "homePoints": 596,
   "awayPoints": 625,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Natalie Ruiz",
      "Brandon Tsang"
     ],
     "a": [
      "Binxin Cai",
      "Homer Abes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Alexandra Sierer",
      "Sal Cocuzza"
     ],
     "a": [
      "Leanna Coello",
      "Mychal Villanueva"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Carmina Lasam",
      "Todd Green"
     ],
     "a": [
      "Monique Panajon",
      "Joseph Gozon"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Sarah Law",
      "Abdullah Osman"
     ],
     "a": [
      "Lara Gedeon",
      "Andrew Chester"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jordan Flavell-Boney",
      "Alexandra Sierer"
     ],
     "a": [
      "Leanna Coello",
      "Lara Gedeon"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sarah Law",
      "Natalie Ruiz"
     ],
     "a": [
      "Ulyana Kitcmanuk",
      "Binxin Cai"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Brandon Tsang",
      "Abdullah Osman"
     ],
     "a": [
      "Homer Abes",
      "Yosuke Kawai"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sal Cocuzza",
      "Keith Parker"
     ],
     "a": [
      "Mychal Villanueva",
      "Joseph Roque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Carmina Lasam",
      "Abdullah Osman"
     ],
     "a": [
      "Leanna Coello",
      "Yosuke Kawai"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sarah Law",
      "Brandon Tsang"
     ],
     "a": [
      "Lara Gedeon",
      "Homer Abes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Corie Stone",
      "Keith Parker"
     ],
     "a": [
      "Monique Panajon",
      "Mychal Villanueva"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Alexandra Sierer",
      "Jason Huang"
     ],
     "a": [
      "Ulyana Kitcmanuk",
      "Joseph Gozon"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Carmina Lasam",
      "Corie Stone"
     ],
     "a": [
      "Leanna Coello",
      "Monique Panajon"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Alexandra Sierer",
      "Jordan Flavell-Boney"
     ],
     "a": [
      "Ulyana Kitcmanuk",
      "Binxin Cai"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Abdullah Osman",
      "Todd Green"
     ],
     "a": [
      "Homer Abes",
      "Joseph Roque"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Sal Cocuzza",
      "Brandon Tsang"
     ],
     "a": [
      "Andrew Chester",
      "Yosuke Kawai"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Sarah Law",
      "Brandon Tsang"
     ],
     "a": [
      "Lara Gedeon",
      "Homer Abes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Natalie Ruiz",
      "Sal Cocuzza"
     ],
     "a": [
      "Monique Panajon",
      "Mychal Villanueva"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Carmina Lasam",
      "Todd Green"
     ],
     "a": [
      "Ulyana Kitcmanuk",
      "Andrew Chester"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jordan Flavell-Boney",
      "Jason Huang"
     ],
     "a": [
      "Binxin Cai",
      "Joseph Gozon"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Alexandra Sierer",
      "Natalie Ruiz"
     ],
     "a": [
      "Leanna Coello",
      "Ulyana Kitcmanuk"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Corie Stone",
      "Carmina Lasam"
     ],
     "a": [
      "Binxin Cai",
      "Lara Gedeon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Abdullah Osman",
      "Todd Green"
     ],
     "a": [
      "Andrew Chester",
      "Yosuke Kawai"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Keith Parker",
      "Jason Huang"
     ],
     "a": [
      "Joseph Roque",
      "Mychal Villanueva"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Sarah Law",
      "Abdullah Osman"
     ],
     "a": [
      "Leanna Coello",
      "Homer Abes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Corie Stone",
      "Todd Green"
     ],
     "a": [
      "Monique Panajon",
      "Yosuke Kawai"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Alexandra Sierer",
      "Brandon Tsang"
     ],
     "a": [
      "Lara Gedeon",
      "Joseph Roque"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Natalie Ruiz",
      "Jason Huang"
     ],
     "a": [
      "Ulyana Kitcmanuk",
      "Joseph Gozon"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Alexandra Sierer",
      "Carmina Lasam"
     ],
     "a": [
      "Binxin Cai",
      "Leanna Coello"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Natalie Ruiz",
      "Sarah Law"
     ],
     "a": [
      "Ulyana Kitcmanuk",
      "Lara Gedeon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Sal Cocuzza",
      "Todd Green"
     ],
     "a": [
      "Joseph Gozon",
      "Joseph Roque"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Brandon Tsang",
      "Abdullah Osman"
     ],
     "a": [
      "Andrew Chester",
      "Homer Abes"
     ]
    }
   ],
   "subs": [
    "Brandon Tsang",
    "Sal Cocuzza",
    "Natalie Ruiz",
    "Homer Abes"
   ]
  },
  {
   "result": "away",
   "week": 1,
   "home": "Pickleball Kingdom Tinton Falls",
   "away": "PKLD",
   "time": "2026-08-26T19:30:00",
   "complete": true,
   "homePoints": 454,
   "awayPoints": 671,
   "homeGW": 4,
   "awayGW": 28,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Rachel Levkov",
      "Joseph Zorbo"
     ],
     "a": [
      "Brianna Burns",
      "Xavier Yandoli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Riyan Barlow",
      "John Kulesza"
     ],
     "a": [
      "Beth Osipowitz",
      "Sam Forin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Carolyn Antuna",
      "Tayon Hart"
     ],
     "a": [
      "Tracey Collins",
      "Jadiel Rodriguez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lisa Weinthal",
      "Jim Nelson"
     ],
     "a": [
      "Paula Cushing",
      "Jeff Burke"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lisa Weinthal",
      "Lindsay Mcnally"
     ],
     "a": [
      "Brianna Burns",
      "Tracey Collins"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Rachel Levkov",
      "Danielle Collins"
     ],
     "a": [
      "Tracy Wong",
      "Esther Yoon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Joseph Zorbo",
      "Shawn Mayer"
     ],
     "a": [
      "Ahmed Aziz",
      "Xavier Yandoli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jim Nelson",
      "John Kulesza"
     ],
     "a": [
      "Juan Millan",
      "Jadiel Rodriguez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Riyan Barlow",
      "Jim Nelson"
     ],
     "a": [
      "Beth Osipowitz",
      "Sam Forin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Carolyn Antuna",
      "Joseph Zorbo"
     ],
     "a": [
      "Paula Cushing",
      "Jeff Burke"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lisa Weinthal",
      "Shawn Mayer"
     ],
     "a": [
      "Esther Yoon",
      "Juan Millan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Danielle Collins",
      "Tayon Hart"
     ],
     "a": [
      "Tracy Wong",
      "Ahmed Aziz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Rachel Levkov",
      "Carolyn Antuna"
     ],
     "a": [
      "Brianna Burns",
      "Tracey Collins"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Lindsay Mcnally",
      "Lisa Weinthal"
     ],
     "a": [
      "Beth Osipowitz",
      "Paula Cushing"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jim Nelson",
      "Joseph Zorbo"
     ],
     "a": [
      "Sam Forin",
      "Xavier Yandoli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Tayon Hart",
      "John Kulesza"
     ],
     "a": [
      "Jadiel Rodriguez",
      "Jeff Burke"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Carolyn Antuna",
      "Joseph Zorbo"
     ],
     "a": [
      "Brianna Burns",
      "Jeff Burke"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Danielle Collins",
      "Tayon Hart"
     ],
     "a": [
      "Esther Yoon",
      "Juan Millan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Riyan Barlow",
      "John Kulesza"
     ],
     "a": [
      "Tracey Collins",
      "Jadiel Rodriguez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Rachel Levkov",
      "Shawn Mayer"
     ],
     "a": [
      "Tracy Wong",
      "Ahmed Aziz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Lindsay Mcnally",
      "Riyan Barlow"
     ],
     "a": [
      "Esther Yoon",
      "Tracy Wong"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lisa Weinthal",
      "Rachel Levkov"
     ],
     "a": [
      "Paula Cushing",
      "Beth Osipowitz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Tayon Hart",
      "Joseph Zorbo"
     ],
     "a": [
      "Sam Forin",
      "Xavier Yandoli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jim Nelson",
      "Shawn Mayer"
     ],
     "a": [
      "Ahmed Aziz",
      "Juan Millan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Lisa Weinthal",
      "John Kulesza"
     ],
     "a": [
      "Tracey Collins",
      "Sam Forin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Carolyn Antuna",
      "Tayon Hart"
     ],
     "a": [
      "Beth Osipowitz",
      "Jadiel Rodriguez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Lindsay Mcnally",
      "Joseph Zorbo"
     ],
     "a": [
      "Brianna Burns",
      "Jeff Burke"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Danielle Collins",
      "Shawn Mayer"
     ],
     "a": [
      "Paula Cushing",
      "Ahmed Aziz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Danielle Collins",
      "Riyan Barlow"
     ],
     "a": [
      "Tracy Wong",
      "Tracey Collins"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Carolyn Antuna",
      "Rachel Levkov"
     ],
     "a": [
      "Brianna Burns",
      "Esther Yoon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Jim Nelson",
      "John Kulesza"
     ],
     "a": [
      "Jadiel Rodriguez",
      "Juan Millan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Tayon Hart",
      "Shawn Mayer"
     ],
     "a": [
      "Xavier Yandoli",
      "Jeff Burke"
     ]
    }
   ],
   "subs": [
    "Tayon Hart"
   ]
  },
  {
   "result": "home",
   "week": 1,
   "home": "Pickleball Kingdom Watchung",
   "away": "Home Court",
   "time": "2026-08-26T19:30:00",
   "complete": true,
   "homePoints": 656,
   "awayPoints": 497,
   "homeGW": 26,
   "awayGW": 6,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Diana Nguyen",
      "Josiah Kim"
     ],
     "a": [
      "Emiliya Mizrahi",
      "Richie Mizrahi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Em Melo",
      "Bruno Maguino"
     ],
     "a": [
      "Dina Perrella",
      "Matthew Stephenson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Dede Dolkar",
      "Winston Lian"
     ],
     "a": [
      "Ellen Edson",
      "Michael Jones"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Emily Su",
      "John Kim"
     ],
     "a": [
      "Laura Fantin",
      "Chris Fantin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Emily Su",
      "Khushi Shah"
     ],
     "a": [
      "Laura Fantin",
      "Patricia Majowicz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Dede Dolkar",
      "Diana Nguyen"
     ],
     "a": [
      "Emiliya Mizrahi",
      "Dina Perrella"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Carlos Idrovo",
      "Bruno Maguino"
     ],
     "a": [
      "Robert Huntley",
      "Richie Mizrahi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Winston Lian",
      "Josiah Kim"
     ],
     "a": [
      "Chris Fantin",
      "Matthew Stephenson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Diana Nguyen",
      "Josiah Kim"
     ],
     "a": [
      "Emiliya Mizrahi",
      "Richie Mizrahi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Em Melo",
      "Bruno Maguino"
     ],
     "a": [
      "Ellen Edson",
      "Robert Huntley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Dede Dolkar",
      "Winston Lian"
     ],
     "a": [
      "Patricia Majowicz",
      "Michael Jones"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Emily Su",
      "John Kim"
     ],
     "a": [
      "Laura Fantin",
      "Chris Fantin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Emily Su",
      "Khushi Shah"
     ],
     "a": [
      "Laura Fantin",
      "Patricia Majowicz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Em Melo",
      "Diana Nguyen"
     ],
     "a": [
      "Emiliya Mizrahi",
      "Dina Perrella"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Carlos Idrovo",
      "Bruno Maguino"
     ],
     "a": [
      "Robert Huntley",
      "Richie Mizrahi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Winston Lian",
      "Josiah Kim"
     ],
     "a": [
      "Chris Fantin",
      "Matthew Stephenson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Dede Dolkar",
      "Josiah Kim"
     ],
     "a": [
      "Ellen Edson",
      "Robert Huntley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Carissa Baptista",
      "Carlos Idrovo"
     ],
     "a": [
      "Emiliya Mizrahi",
      "Matthew Stephenson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Diana Nguyen",
      "Bruno Maguino"
     ],
     "a": [
      "Laura Fantin",
      "Michael Jones"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Emily Su",
      "Jason Kwan"
     ],
     "a": [
      "Dina Perrella",
      "Chris Fantin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Dede Dolkar",
      "Khushi Shah"
     ],
     "a": [
      "Ellen Edson",
      "Laura Fantin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Emily Su",
      "Carissa Baptista"
     ],
     "a": [
      "Dina Perrella",
      "Patricia Majowicz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "John Kim",
      "Josiah Kim"
     ],
     "a": [
      "Michael Jones",
      "Richie Mizrahi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Winston Lian",
      "Jason Kwan"
     ],
     "a": [
      "Robert Huntley",
      "Matthew Stephenson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Carissa Baptista",
      "Carlos Idrovo"
     ],
     "a": [
      "Emiliya Mizrahi",
      "Matthew Stephenson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Khushi Shah",
      "Winston Lian"
     ],
     "a": [
      "Ellen Edson",
      "Richie Mizrahi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Emily Su",
      "Jason Kwan"
     ],
     "a": [
      "Patricia Majowicz",
      "Michael Jones"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Dede Dolkar",
      "Josiah Kim"
     ],
     "a": [
      "Dina Perrella",
      "Chris Fantin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Em Melo",
      "Diana Nguyen"
     ],
     "a": [
      "Ellen Edson",
      "Laura Fantin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Emily Su",
      "Carissa Baptista"
     ],
     "a": [
      "Dina Perrella",
      "Patricia Majowicz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "John Kim",
      "Josiah Kim"
     ],
     "a": [
      "Michael Jones",
      "Richie Mizrahi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Carlos Idrovo",
      "Jason Kwan"
     ],
     "a": [
      "Robert Huntley",
      "Matthew Stephenson"
     ]
    }
   ],
   "subs": [
    "Patricia Majowicz"
   ]
  },
  {
   "result": "home",
   "week": 1,
   "home": "Ballers Philly",
   "away": "Jersey Devil Navy",
   "time": "2026-08-26T19:30:00",
   "complete": true,
   "homePoints": 632,
   "awayPoints": 554,
   "homeGW": 22,
   "awayGW": 10,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Karen Rodriguez",
      "Peter Siv"
     ],
     "a": [
      "Lisa Pinder",
      "Adam Lowther"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Isobel Harvey",
      "Ben Van Handel"
     ],
     "a": [
      "Rebecca Mcginnis",
      "Chris Machuzak"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Alexandria Mlkvy",
      "Kevin Wilson"
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
     "as": 12,
     "h": [
      "Kelly Feng",
      "Samuel Lee"
     ],
     "a": [
      "Jacquie Verish",
      "Dave Brucker"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Karen Rodriguez",
      "Isobel Harvey"
     ],
     "a": [
      "Lisa Pinder",
      "Hanna Cutler"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Pamela Toy",
      "Tesa Pribitkin"
     ],
     "a": [
      "Taylor Johns",
      "Dana Sheply"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kevin Wilson",
      "Peter Siv"
     ],
     "a": [
      "Kyle Woerner",
      "Jacob Alpert"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Samuel Lee",
      "Stephen Macpherson"
     ],
     "a": [
      "Alex Kustas",
      "Chris Machuzak"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Tesa Pribitkin",
      "Stephen Macpherson"
     ],
     "a": [
      "Rebecca Mcginnis",
      "Adam Lowther"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Karen Rodriguez",
      "Kevin Wilson"
     ],
     "a": [
      "Taylor Johns",
      "Chris Machuzak"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kelly Feng",
      "Samuel Lee"
     ],
     "a": [
      "Jacquie Verish",
      "Dave Brucker"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Alexandria Mlkvy",
      "Ben Van Handel"
     ],
     "a": [
      "Hanna Cutler",
      "Jacob Alpert"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Karen Rodriguez",
      "Pamela Toy"
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
     "as": 11,
     "h": [
      "Isobel Harvey",
      "Kelly Feng"
     ],
     "a": [
      "Hanna Cutler",
      "Lisa Pinder"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Peter Siv",
      "Kevin Wilson"
     ],
     "a": [
      "Alex Kustas",
      "Chris Machuzak"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Stephen Macpherson",
      "Ben Van Handel"
     ],
     "a": [
      "Dave Brucker",
      "Kyle Woerner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Pamela Toy",
      "Ben Van Handel"
     ],
     "a": [
      "Dana Sheply",
      "Jacob Alpert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Isobel Harvey",
      "Samuel Lee"
     ],
     "a": [
      "Jacquie Verish",
      "Adam Lowther"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Alexandria Mlkvy",
      "Kevin Wilson"
     ],
     "a": [
      "Taylor Johns",
      "Chris Machuzak"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Tesa Pribitkin",
      "Peter Siv"
     ],
     "a": [
      "Hanna Cutler",
      "Kyle Woerner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Karen Rodriguez",
      "Kelly Feng"
     ],
     "a": [
      "Rebecca Mcginnis",
      "Jacquie Verish"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Alexandria Mlkvy",
      "Tesa Pribitkin"
     ],
     "a": [
      "Lisa Pinder",
      "Dana Sheply"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Stephen Macpherson",
      "Kevin Wilson"
     ],
     "a": [
      "Alex Kustas",
      "Adam Lowther"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Peter Siv",
      "Samuel Lee"
     ],
     "a": [
      "Dave Brucker",
      "Jacob Alpert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Alexandria Mlkvy",
      "Samuel Lee"
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
     "as": 12,
     "h": [
      "Isobel Harvey",
      "Stephen Macpherson"
     ],
     "a": [
      "Rebecca Mcginnis",
      "Chris Machuzak"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kelly Feng",
      "Ben Van Handel"
     ],
     "a": [
      "Lisa Pinder",
      "Dave Brucker"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Pamela Toy",
      "Kevin Wilson"
     ],
     "a": [
      "Hanna Cutler",
      "Kyle Woerner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Karen Rodriguez",
      "Tesa Pribitkin"
     ],
     "a": [
      "Taylor Johns",
      "Dana Sheply"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Isobel Harvey",
      "Kelly Feng"
     ],
     "a": [
      "Rebecca Mcginnis",
      "Jacquie Verish"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Stephen Macpherson",
      "Samuel Lee"
     ],
     "a": [
      "Alex Kustas",
      "Adam Lowther"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Peter Siv",
      "Ben Van Handel"
     ],
     "a": [
      "Jacob Alpert",
      "Kyle Woerner"
     ]
    }
   ],
   "subs": [
    "Pamela Toy"
   ]
  },
  {
   "result": "home",
   "week": 1,
   "home": "Bounce Tempest",
   "away": "APC Garden State",
   "time": "2026-08-26T19:30:00",
   "complete": true,
   "homePoints": 599,
   "awayPoints": 573,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Shania Bui",
      "Khanh Vu"
     ],
     "a": [
      "Taylor Lambe",
      "Eric Padernilla"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Stephanie Li",
      "Dylan Mich"
     ],
     "a": [
      "Pallavi Deshpande",
      "Michael Kresloff"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ginny Truong",
      "Ethan Fu"
     ],
     "a": [
      "Stacy Ip-Mo",
      "Taylor Runyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Eileen Zhang",
      "Kong Vu"
     ],
     "a": [
      "Nada Abdelkarim",
      "John Dechristopher"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Vy Conghuyen",
      "Christina Vuong"
     ],
     "a": [
      "Nada Abdelkarim",
      "Stacy Ip-Mo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Shania Bui",
      "Eileen Zhang"
     ],
     "a": [
      "Pallavi Deshpande",
      "Taylor Lambe"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "David Aliquo",
      "Dylan Mich"
     ],
     "a": [
      "John Dechristopher",
      "Ryan Lehrfeld"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Ethan Fu",
      "Carlos Lichty"
     ],
     "a": [
      "Michael Kresloff",
      "Eric Padernilla"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Christina Vuong",
      "David Aliquo"
     ],
     "a": [
      "Stacy Ip-Mo",
      "Michael Kresloff"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Stephanie Li",
      "Ethan Fu"
     ],
     "a": [
      "Taylor Lambe",
      "Ryan Lehrfeld"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ginny Truong",
      "Kong Vu"
     ],
     "a": [
      "Pallavi Deshpande",
      "Taylor Runyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Eileen Zhang",
      "Khanh Vu"
     ],
     "a": [
      "Nada Abdelkarim",
      "Eric Padernilla"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Christina Vuong",
      "Vy Conghuyen"
     ],
     "a": [
      "Stacy Ip-Mo",
      "Nada Abdelkarim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Shania Bui",
      "Stephanie Li"
     ],
     "a": [
      "Taylor Lambe",
      "Jiyun Yuh"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Dylan Mich",
      "Carlos Lichty"
     ],
     "a": [
      "John Dechristopher",
      "Taylor Runyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Khanh Vu",
      "Kong Vu"
     ],
     "a": [
      "Michael Kresloff",
      "Ryan Lehrfeld"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Shania Bui",
      "Ethan Fu"
     ],
     "a": [
      "Pallavi Deshpande",
      "Eric Padernilla"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Ginny Truong",
      "Carlos Lichty"
     ],
     "a": [
      "Jiyun Yuh",
      "John Dechristopher"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Stephanie Li",
      "Khanh Vu"
     ],
     "a": [
      "Taylor Lambe",
      "Michael Kresloff"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Vy Conghuyen",
      "Kong Vu"
     ],
     "a": [
      "Stacy Ip-Mo",
      "Taylor Runyen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Ginny Truong",
      "Christina Vuong"
     ],
     "a": [
      "Stacy Ip-Mo",
      "Jiyun Yuh"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Vy Conghuyen",
      "Eileen Zhang"
     ],
     "a": [
      "Pallavi Deshpande",
      "Nada Abdelkarim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Carlos Lichty",
      "Ethan Fu"
     ],
     "a": [
      "Taylor Runyen",
      "Eric Padernilla"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "David Aliquo",
      "Dylan Mich"
     ],
     "a": [
      "John Dechristopher",
      "Ryan Lehrfeld"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Shania Bui",
      "Khanh Vu"
     ],
     "a": [
      "Nada Abdelkarim",
      "Eric Padernilla"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Eileen Zhang",
      "Dylan Mich"
     ],
     "a": [
      "Taylor Lambe",
      "Michael Kresloff"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Ginny Truong",
      "Kong Vu"
     ],
     "a": [
      "Pallavi Deshpande",
      "Ryan Lehrfeld"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Vy Conghuyen",
      "David Aliquo"
     ],
     "a": [
      "Jiyun Yuh",
      "Taylor Runyen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Shania Bui",
      "Eileen Zhang"
     ],
     "a": [
      "Taylor Lambe",
      "Stacy Ip-Mo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Christina Vuong",
      "Stephanie Li"
     ],
     "a": [
      "Jiyun Yuh",
      "Nada Abdelkarim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kong Vu",
      "Khanh Vu"
     ],
     "a": [
      "John Dechristopher",
      "Eric Padernilla"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Carlos Lichty",
      "David Aliquo"
     ],
     "a": [
      "Michael Kresloff",
      "Ryan Lehrfeld"
     ]
    }
   ],
   "subs": [
    "David Aliquo"
   ]
  },
  {
   "result": "home",
   "week": 1,
   "home": "Jersey Pickleball Club",
   "away": "Pickle House",
   "time": "2026-08-26T19:30:00",
   "complete": true,
   "homePoints": 638,
   "awayPoints": 572,
   "homeGW": 22,
   "awayGW": 10,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Gerianne Mcmahon",
      "Anthony Simonetti"
     ],
     "a": [
      "Jen Ogorzat",
      "Danny Ruiz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Christina Grosso",
      "Anthony Mcmahon"
     ],
     "a": [
      "Veronica Rosas",
      "Brandon Calmo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Nicci Galioto",
      "Alex Glushek"
     ],
     "a": [
      "Taryn Seidner",
      "Alan Liang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 0,
     "h": [
      "Kali Lerner",
      "Richard Medel"
     ],
     "a": [
      "Danielle Kuti",
      "Matthew Peletier"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Gerianne Mcmahon",
      "Christina Grosso"
     ],
     "a": [
      "Jen Ogorzat",
      "Iqra Hasan-Calmo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Nicci Galioto",
      "Kali Lerner"
     ],
     "a": [
      "Veronica Rosas",
      "Taryn Seidner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Neil Policastro",
      "Richard Medel"
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
     "as": 13,
     "h": [
      "Alex Glushek",
      "Anthony Simonetti"
     ],
     "a": [
      "Matthew Peletier",
      "Michael Marinello"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Gerianne Mcmahon",
      "Anthony Simonetti"
     ],
     "a": [
      "Jen Ogorzat",
      "Alan Liang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Christina Grosso",
      "Anthony Mcmahon"
     ],
     "a": [
      "Iqra Hasan-Calmo",
      "Danny Ruiz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Nicci Galioto",
      "Alex Glushek"
     ],
     "a": [
      "Veronica Rosas",
      "Brandon Calmo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Brittani Rivera",
      "Neil Policastro"
     ],
     "a": [
      "Danielle Kuti",
      "Michael Marinello"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Christina Grosso",
      "Gerianne Mcmahon"
     ],
     "a": [
      "Iqra Hasan-Calmo",
      "Danielle Kuti"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Brittani Rivera",
      "Kali Lerner"
     ],
     "a": [
      "Veronica Rosas",
      "Taryn Seidner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Richard Medel",
      "Neil Policastro"
     ],
     "a": [
      "Brandon Calmo",
      "Danny Ruiz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Anthony Simonetti",
      "Alex Glushek"
     ],
     "a": [
      "Matthew Peletier",
      "Michael Marinello"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Christina Grosso",
      "Richard Medel"
     ],
     "a": [
      "Jen Ogorzat",
      "Danny Ruiz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Nicci Galioto",
      "Anthony Simonetti"
     ],
     "a": [
      "Taryn Seidner",
      "Alan Liang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Gerianne Mcmahon",
      "Neil Policastro"
     ],
     "a": [
      "Iqra Hasan-Calmo",
      "Michael Marinello"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Brittani Rivera",
      "Alex Glushek"
     ],
     "a": [
      "Danielle Kuti",
      "Matthew Peletier"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Christina Grosso",
      "Nicci Galioto"
     ],
     "a": [
      "Jen Ogorzat",
      "Veronica Rosas"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Kali Lerner",
      "Brittani Rivera"
     ],
     "a": [
      "Danielle Kuti",
      "Taryn Seidner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Anthony Simonetti",
      "Neil Policastro"
     ],
     "a": [
      "Alan Liang",
      "Brandon Calmo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Anthony Mcmahon",
      "Richard Medel"
     ],
     "a": [
      "Matthew Peletier",
      "Danny Ruiz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Christina Grosso",
      "Richard Medel"
     ],
     "a": [
      "Jen Ogorzat",
      "Alan Liang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Nicci Galioto",
      "Anthony Simonetti"
     ],
     "a": [
      "Taryn Seidner",
      "Brandon Calmo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Gerianne Mcmahon",
      "Neil Policastro"
     ],
     "a": [
      "Veronica Rosas",
      "Danny Ruiz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Brittani Rivera",
      "Anthony Mcmahon"
     ],
     "a": [
      "Iqra Hasan-Calmo",
      "Michael Marinello"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Nicci Galioto",
      "Christina Grosso"
     ],
     "a": [
      "Jen Ogorzat",
      "Taryn Seidner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Gerianne Mcmahon",
      "Kali Lerner"
     ],
     "a": [
      "Danielle Kuti",
      "Veronica Rosas"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Anthony Simonetti",
      "Richard Medel"
     ],
     "a": [
      "Danny Ruiz",
      "Brandon Calmo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Anthony Mcmahon",
      "Neil Policastro"
     ],
     "a": [
      "Alan Liang",
      "Matthew Peletier"
     ]
    }
   ],
   "subs": [
    "Jen Ogorzat",
    "Iqra Hasan-Calmo"
   ]
  },
  {
   "result": "home",
   "week": 1,
   "home": "ACE Downingtown",
   "away": "Picklr Exton",
   "time": "2026-08-26T19:30:00",
   "complete": true,
   "homePoints": 627,
   "awayPoints": 487,
   "homeGW": 24,
   "awayGW": 8,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Karen Anthony",
      "Thomas Kang"
     ],
     "a": [
      "Ann Dunn",
      "Arnaud Clairay"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Nancy Wu",
      "Justin Lin"
     ],
     "a": [
      "Nikki Koons",
      "Issac Gao"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Xiaowen Tang",
      "Jay Lizardo"
     ],
     "a": [
      "Heather Triozzi",
      "Nicholas Jackson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Kiddi Vu",
      "Vinoth Baburao Venkatakrishnan"
     ],
     "a": [
      "Crystal Mark",
      "Scott Bersak"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Karen Anthony",
      "Nancy Wu"
     ],
     "a": [
      "Nikki Koons",
      "Jenn Smith"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Xiaowen Tang",
      "Kiddi Vu"
     ],
     "a": [
      "Heather Triozzi",
      "Crystal Mark"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Vinoth Baburao Venkatakrishnan",
      "Justin Lin"
     ],
     "a": [
      "Nicholas Jackson",
      "Issac Gao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Thomas Kang",
      "Lewis Torres"
     ],
     "a": [
      "Scott Bersak",
      "Michael Meraglia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Karen Anthony",
      "Thomas Kang"
     ],
     "a": [
      "Nikki Koons",
      "Issac Gao"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Nancy Wu",
      "Justin Lin"
     ],
     "a": [
      "Crystal Mark",
      "Scott Bersak"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Xiaowen Tang",
      "Jay Lizardo"
     ],
     "a": [
      "Ann Dunn",
      "Nicholas Jackson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kiddi Vu",
      "Vinoth Baburao Venkatakrishnan"
     ],
     "a": [
      "Jenn Smith",
      "Arnaud Clairay"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Karen Anthony",
      "Xiaowen Tang"
     ],
     "a": [
      "Nikki Koons",
      "Heather Triozzi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Kiddi Vu",
      "Nancy Wu"
     ],
     "a": [
      "Jenn Smith",
      "Crystal Mark"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Justin Lin",
      "Vinoth Baburao Venkatakrishnan"
     ],
     "a": [
      "Scott Bersak",
      "Issac Gao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Thomas Kang",
      "Lewis Torres"
     ],
     "a": [
      "Nicholas Jackson",
      "Michael Meraglia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Karen Anthony",
      "Jay Lizardo"
     ],
     "a": [
      "Jenn Smith",
      "Nicholas Jackson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Xiaowen Tang",
      "Thomas Kang"
     ],
     "a": [
      "Crystal Mark",
      "Arnaud Clairay"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Nancy Wu",
      "Vinoth Baburao Venkatakrishnan"
     ],
     "a": [
      "Heather Triozzi",
      "Issac Gao"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Kiddi Vu",
      "Justin Lin"
     ],
     "a": [
      "Ann Dunn",
      "Michael Meraglia"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Xiaowen Tang",
      "Karen Anthony"
     ],
     "a": [
      "Crystal Mark",
      "Nikki Koons"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kiddi Vu",
      "Nancy Wu"
     ],
     "a": [
      "Ann Dunn",
      "Jenn Smith"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Thomas Kang",
      "Jay Lizardo"
     ],
     "a": [
      "Nicholas Jackson",
      "Scott Bersak"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Justin Lin",
      "Lewis Torres"
     ],
     "a": [
      "Arnaud Clairay",
      "Michael Meraglia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Kiddi Vu",
      "Justin Lin"
     ],
     "a": [
      "Heather Triozzi",
      "Issac Gao"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Nancy Wu",
      "Vinoth Baburao Venkatakrishnan"
     ],
     "a": [
      "Jenn Smith",
      "Scott Bersak"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Karen Anthony",
      "Jay Lizardo"
     ],
     "a": [
      "Nikki Koons",
      "Arnaud Clairay"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Xiaowen Tang",
      "Thomas Kang"
     ],
     "a": [
      "Ann Dunn",
      "Michael Meraglia"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Karen Anthony",
      "Kiddi Vu"
     ],
     "a": [
      "Nikki Koons",
      "Heather Triozzi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Xiaowen Tang",
      "Nancy Wu"
     ],
     "a": [
      "Crystal Mark",
      "Ann Dunn"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Lewis Torres",
      "Justin Lin"
     ],
     "a": [
      "Arnaud Clairay",
      "Nicholas Jackson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Vinoth Baburao Venkatakrishnan",
      "Jay Lizardo"
     ],
     "a": [
      "Scott Bersak",
      "Issac Gao"
     ]
    }
   ],
   "subs": [
    "Vinoth Baburao Venkatakrishnan"
   ]
  },
  {
   "result": "away",
   "week": 2,
   "home": "Picklr Manahawkin",
   "away": "PKLD",
   "time": "2026-09-02T19:00:00",
   "complete": true,
   "provisional": true,
   "homePoints": 598,
   "awayPoints": 636,
   "homeGW": 13,
   "awayGW": 19,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Nicki Ray",
      "Michael Fidelino"
     ],
     "a": [
      "Brianna Burns",
      "Jadiel Rodriguez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Clarisse Espiritu",
      "Tom Draney"
     ],
     "a": [
      "Esther Yoon",
      "Juan Millan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jennifer Kline",
      "Kenneth Kline"
     ],
     "a": [
      "Beth Osipowitz",
      "Kyle Korman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Diane Fischetti",
      "Brian Kline"
     ],
     "a": [
      "Paula Cushing",
      "Ahmed Aziz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Diane Fischetti",
      "Nicki Ray"
     ],
     "a": [
      "Esther Yoon",
      "Tracy Wong"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Clarisse Espiritu",
      "Jennifer Kline"
     ],
     "a": [
      "Brianna Burns",
      "Beth Osipowitz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Brian Kline",
      "Kenneth Kline"
     ],
     "a": [
      "Jadiel Rodriguez",
      "Juan Millan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Michael Fidelino",
      "Tom Draney"
     ],
     "a": [
      "Ahmed Aziz",
      "Xavier Yandoli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jennifer Kline",
      "Kenneth Kline"
     ],
     "a": [
      "Brianna Burns",
      "Xavier Yandoli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Nicki Ray",
      "Michael Fidelino"
     ],
     "a": [
      "Beth Osipowitz",
      "Kyle Korman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Diane Fischetti",
      "Brian Kline"
     ],
     "a": [
      "Esther Yoon",
      "Juan Millan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Clarisse Espiritu",
      "Tom Draney"
     ],
     "a": [
      "Paula Cushing",
      "Ahmed Aziz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Diane Fischetti",
      "Nicki Ray"
     ],
     "a": [
      "Esther Yoon",
      "Tracy Wong"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Clarisse Espiritu",
      "Jennifer Kline"
     ],
     "a": [
      "Brianna Burns",
      "Beth Osipowitz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Michael Fidelino",
      "Tom Draney"
     ],
     "a": [
      "Juan Millan",
      "Jadiel Rodriguez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Brian Kline",
      "Kenneth Kline"
     ],
     "a": [
      "Ahmed Aziz",
      "Xavier Yandoli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jennifer Kline",
      "Brian Kline"
     ],
     "a": [
      "Esther Yoon",
      "Kyle Korman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Clarisse Espiritu",
      "Michael Fidelino"
     ],
     "a": [
      "Beth Osipowitz",
      "Jadiel Rodriguez"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Diane Fischetti",
      "Tom Draney"
     ],
     "a": [
      "Paula Cushing",
      "Xavier Yandoli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Nicki Ray",
      "Kenneth Kline"
     ],
     "a": [
      "Tracy Wong",
      "Ahmed Aziz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Diane Fischetti",
      "Clarisse Espiritu"
     ],
     "a": [
      "Beth Osipowitz",
      "Tracy Wong"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jennifer Kline",
      "Nicki Ray"
     ],
     "a": [
      "Brianna Burns",
      "Paula Cushing"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Michael Fidelino",
      "Brian Kline"
     ],
     "a": [
      "Kyle Korman",
      "Juan Millan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Tom Draney",
      "Kenneth Kline"
     ],
     "a": [
      "Jadiel Rodriguez",
      "Xavier Yandoli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Nicki Ray",
      "Kenneth Kline"
     ],
     "a": [
      "Esther Yoon",
      "Kyle Korman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Clarisse Espiritu",
      "Michael Fidelino"
     ],
     "a": [
      "Brianna Burns",
      "Xavier Yandoli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jennifer Kline",
      "Brian Kline"
     ],
     "a": [
      "Paula Cushing",
      "Juan Millan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Diane Fischetti",
      "Tom Draney"
     ],
     "a": [
      "Tracy Wong",
      "Ahmed Aziz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Diane Fischetti",
      "Clarisse Espiritu"
     ],
     "a": [
      "Paula Cushing",
      "Tracy Wong"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jennifer Kline",
      "Nicki Ray"
     ],
     "a": [
      "Esther Yoon",
      "Brianna Burns"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Michael Fidelino",
      "Brian Kline"
     ],
     "a": [
      "Kyle Korman",
      "Juan Millan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Tom Draney",
      "Kenneth Kline"
     ],
     "a": [
      "Ahmed Aziz",
      "Jadiel Rodriguez"
     ]
    }
   ],
   "subs": [
    "Nicki Ray",
    "Diane Fischetti"
   ]
  },
  {
   "result": "away",
   "week": 2,
   "home": "Flemington",
   "away": "Pickleball Kingdom Watchung",
   "time": "2026-09-02T19:00:00",
   "complete": true,
   "homePoints": 567,
   "awayPoints": 634,
   "homeGW": 11,
   "awayGW": 21,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Johanna Kreilick",
      "Addison Stewart"
     ],
     "a": [
      "Dede Dolkar",
      "Winston Lian"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Mary Brashier",
      "Dan Stanton"
     ],
     "a": [
      "Diana Nguyen",
      "Josiah Kim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jamie Hahn",
      "Lakshmikanth Chaluvadi"
     ],
     "a": [
      "Christy Zhang",
      "Man Kwok"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Laura Slane",
      "David Tabacco"
     ],
     "a": [
      "Khushi Shah",
      "Anshul Sahu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Mary Brashier",
      "Johanna Kreilick"
     ],
     "a": [
      "Dede Dolkar",
      "Diana Nguyen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Laura Slane",
      "Monika Torbus"
     ],
     "a": [
      "Emily Su",
      "Carissa Baptista"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Josh Rito",
      "Addison Stewart"
     ],
     "a": [
      "Winston Lian",
      "Anshul Sahu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "David Tabacco",
      "Lakshmikanth Chaluvadi"
     ],
     "a": [
      "Man Kwok",
      "Jason Kwan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Johanna Kreilick",
      "Addison Stewart"
     ],
     "a": [
      "Dede Dolkar",
      "Winston Lian"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Mary Brashier",
      "Dan Stanton"
     ],
     "a": [
      "Diana Nguyen",
      "Josiah Kim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Monika Torbus",
      "Lakshmikanth Chaluvadi"
     ],
     "a": [
      "Christy Zhang",
      "Man Kwok"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jamie Hahn",
      "Josh Rito"
     ],
     "a": [
      "Khushi Shah",
      "Anshul Sahu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Johanna Kreilick",
      "Jamie Hahn"
     ],
     "a": [
      "Dede Dolkar",
      "Diana Nguyen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Monika Torbus",
      "Laura Slane"
     ],
     "a": [
      "Emily Su",
      "Carissa Baptista"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Addison Stewart",
      "Dan Stanton"
     ],
     "a": [
      "Josiah Kim",
      "Winston Lian"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Josh Rito",
      "David Tabacco"
     ],
     "a": [
      "Man Kwok",
      "Jason Kwan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Laura Slane",
      "Dan Stanton"
     ],
     "a": [
      "Diana Nguyen",
      "Winston Lian"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Mary Brashier",
      "Josh Rito"
     ],
     "a": [
      "Carissa Baptista",
      "Josiah Kim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Monika Torbus",
      "Lakshmikanth Chaluvadi"
     ],
     "a": [
      "Emily Su",
      "Man Kwok"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jamie Hahn",
      "David Tabacco"
     ],
     "a": [
      "Christy Zhang",
      "Jason Kwan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Johanna Kreilick",
      "Mary Brashier"
     ],
     "a": [
      "Christy Zhang",
      "Emily Su"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Laura Slane",
      "Jamie Hahn"
     ],
     "a": [
      "Khushi Shah",
      "Carissa Baptista"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Addison Stewart",
      "David Tabacco"
     ],
     "a": [
      "Josiah Kim",
      "Winston Lian"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Dan Stanton",
      "Lakshmikanth Chaluvadi"
     ],
     "a": [
      "Jason Kwan",
      "Anshul Sahu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Mary Brashier",
      "Addison Stewart"
     ],
     "a": [
      "Carissa Baptista",
      "Winston Lian"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Johanna Kreilick",
      "Dan Stanton"
     ],
     "a": [
      "Dede Dolkar",
      "Josiah Kim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Laura Slane",
      "Lakshmikanth Chaluvadi"
     ],
     "a": [
      "Diana Nguyen",
      "Anshul Sahu"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Monika Torbus",
      "Josh Rito"
     ],
     "a": [
      "Christy Zhang",
      "Jason Kwan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Mary Brashier",
      "Monika Torbus"
     ],
     "a": [
      "Dede Dolkar",
      "Carissa Baptista"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Johanna Kreilick",
      "Jamie Hahn"
     ],
     "a": [
      "Emily Su",
      "Khushi Shah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "David Tabacco",
      "Addison Stewart"
     ],
     "a": [
      "Winston Lian",
      "Man Kwok"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Dan Stanton",
      "Josh Rito"
     ],
     "a": [
      "Jason Kwan",
      "Anshul Sahu"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": null,
   "week": 2,
   "home": "Picklr Fair Lawn",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-09-02T19:00:00",
   "complete": false,
   "games": [
    {
     "t": "mixed",
     "h": [
      "Binxin Cai",
      "Yosuke Kawai"
     ],
     "a": [
      "Maria Valencia",
      "Christopher Monzon"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Leanna Coello",
      "Joseph Roque"
     ],
     "a": [
      "Michelle Burke",
      "George Vega Jr"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Monique Panajon",
      "Mychal Villanueva"
     ],
     "a": [
      "Kim Allaga",
      "Varun Kabaria"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Lara Gedeon",
      "Mark Cruz"
     ],
     "a": [
      "Lay Wassana",
      "Yashraj Kurani"
     ]
    },
    {
     "t": "female",
     "h": [
      "Lara Gedeon",
      "Ulyana Kitcmanuk"
     ],
     "a": [
      "Maria Valencia",
      "Kim Allaga"
     ]
    },
    {
     "t": "female",
     "h": [
      "Binxin Cai",
      "Monique Panajon"
     ],
     "a": [
      "Michelle Burke",
      "Lay Wassana"
     ]
    },
    {
     "t": "male",
     "h": [
      "Mychal Villanueva",
      "Joseph Roque"
     ],
     "a": [
      "George Vega Jr",
      "Christopher Monzon"
     ]
    },
    {
     "t": "male",
     "h": [
      "Frederick Lloyd Sabino",
      "Mark Cruz"
     ],
     "a": [
      "Yashraj Kurani",
      "Prashanth Koshy"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Leanna Coello",
      "Mychal Villanueva"
     ],
     "a": [
      "Michelle Burke",
      "Christopher Monzon"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Lara Gedeon",
      "Homer Abes"
     ],
     "a": [
      "Maria Valencia",
      "Yashraj Kurani"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Monique Panajon",
      "Yosuke Kawai"
     ],
     "a": [
      "Lay Wassana",
      "Varun Kabaria"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Ulyana Kitcmanuk",
      "Frederick Lloyd Sabino"
     ],
     "a": [
      "Kim Allaga",
      "Prashanth Koshy"
     ]
    },
    {
     "t": "female",
     "h": [
      "Binxin Cai",
      "Ulyana Kitcmanuk"
     ],
     "a": [
      "Kim Allaga",
      "Lay Wassana"
     ]
    },
    {
     "t": "female",
     "h": [
      "Lara Gedeon",
      "Leanna Coello"
     ],
     "a": [
      "Maria Valencia",
      "Michelle Burke"
     ]
    },
    {
     "t": "male",
     "h": [
      "Joseph Roque",
      "Mark Cruz"
     ],
     "a": [
      "Yashraj Kurani",
      "Varun Kabaria"
     ]
    },
    {
     "t": "male",
     "h": [
      "Homer Abes",
      "Yosuke Kawai"
     ],
     "a": [
      "George Vega Jr",
      "Christopher Monzon"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Monique Panajon",
      "Joseph Roque"
     ],
     "a": [
      "Lay Wassana",
      "Prashanth Koshy"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Leanna Coello",
      "Yosuke Kawai"
     ],
     "a": [
      "Maria Valencia",
      "George Vega Jr"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Ulyana Kitcmanuk",
      "Frederick Lloyd Sabino"
     ],
     "a": [
      "Kim Allaga",
      "Varun Kabaria"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Binxin Cai",
      "Homer Abes"
     ],
     "a": [
      "Michelle Burke",
      "Christopher Monzon"
     ]
    },
    {
     "t": "female",
     "h": [
      "Lara Gedeon",
      "Leanna Coello"
     ],
     "a": [
      "Maria Valencia",
      "Michelle Burke"
     ]
    },
    {
     "t": "female",
     "h": [
      "Binxin Cai",
      "Ulyana Kitcmanuk"
     ],
     "a": [
      "Lay Wassana",
      "Kim Allaga"
     ]
    },
    {
     "t": "male",
     "h": [
      "Joseph Roque",
      "Mychal Villanueva"
     ],
     "a": [
      "Yashraj Kurani",
      "George Vega Jr"
     ]
    },
    {
     "t": "male",
     "h": [
      "Frederick Lloyd Sabino",
      "Mark Cruz"
     ],
     "a": [
      "Varun Kabaria",
      "Prashanth Koshy"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Leanna Coello",
      "Homer Abes"
     ],
     "a": [
      "Maria Valencia",
      "Christopher Monzon"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Monique Panajon",
      "Mychal Villanueva"
     ],
     "a": [
      "Michelle Burke",
      "Prashanth Koshy"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Lara Gedeon",
      "Mark Cruz"
     ],
     "a": [
      "Lay Wassana",
      "Varun Kabaria"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Binxin Cai",
      "Frederick Lloyd Sabino"
     ],
     "a": [
      "Kim Allaga",
      "Yashraj Kurani"
     ]
    },
    {
     "t": "female",
     "h": [
      "Leanna Coello",
      "Ulyana Kitcmanuk"
     ],
     "a": [
      "Maria Valencia",
      "Lay Wassana"
     ]
    },
    {
     "t": "female",
     "h": [
      "Binxin Cai",
      "Lara Gedeon"
     ],
     "a": [
      "Michelle Burke",
      "Kim Allaga"
     ]
    },
    {
     "t": "male",
     "h": [
      "Joseph Roque",
      "Homer Abes"
     ],
     "a": [
      "Yashraj Kurani",
      "Christopher Monzon"
     ]
    },
    {
     "t": "male",
     "h": [
      "Mychal Villanueva",
      "Yosuke Kawai"
     ],
     "a": [
      "George Vega Jr",
      "Prashanth Koshy"
     ]
    }
   ]
  },
  {
   "result": "away",
   "week": 2,
   "home": "LBF Pickleball",
   "away": "Pickleball Kingdom Lehigh Valley",
   "time": "2026-09-02T19:00:00",
   "complete": true,
   "provisional": true,
   "homePoints": 559,
   "awayPoints": 640,
   "homeGW": 9,
   "awayGW": 23,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Michelle Lin",
      "Guan Yang"
     ],
     "a": [
      "Arzu Alimjan",
      "Ali Bhimji"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Tingting Huang",
      "Andy Wang"
     ],
     "a": [
      "Colleen Van Ee",
      "David Reyes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jia Fei",
      "Wen Jin"
     ],
     "a": [
      "Deb Morisie",
      "Chris Hudak"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "May Wang",
      "Calvin Zheng"
     ],
     "a": [
      "Virginia Alves",
      "Cullen Curley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jia Fei",
      "May Wang"
     ],
     "a": [
      "Virginia Alves",
      "Arzu Alimjan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Ling Vance",
      "Cynthia Li"
     ],
     "a": [
      "Colleen Van Ee",
      "Lana Engler Carss"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Calvin Zheng",
      "Hang Liu"
     ],
     "a": [
      "David Reyes",
      "Chris Hudak"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Wen Jin",
      "Chao Ku"
     ],
     "a": [
      "Cullen Curley",
      "Ali Bhimji"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jia Fei",
      "Wen Jin"
     ],
     "a": [
      "Colleen Van Ee",
      "Cullen Curley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "May Wang",
      "Guan Yang"
     ],
     "a": [
      "Lana Engler Carss",
      "David Reyes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Tingting Huang",
      "Andy Wang"
     ],
     "a": [
      "Deb Morisie",
      "Donavin Van Ee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Michelle Lin",
      "Calvin Zheng"
     ],
     "a": [
      "Virginia Alves",
      "Ali Bhimji"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Ling Vance",
      "Cynthia Li"
     ],
     "a": [
      "Deb Morisie",
      "Arzu Alimjan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jia Fei",
      "Tingting Huang"
     ],
     "a": [
      "Lana Engler Carss",
      "Virginia Alves"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Calvin Zheng",
      "Chao Ku"
     ],
     "a": [
      "David Reyes",
      "Chris Hudak"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Guan Yang",
      "Hang Liu"
     ],
     "a": [
      "Cullen Curley",
      "Ali Bhimji"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "May Wang",
      "Calvin Zheng"
     ],
     "a": [
      "Virginia Alves",
      "Cullen Curley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Tingting Huang",
      "Wen Jin"
     ],
     "a": [
      "Lana Engler Carss",
      "Donavin Van Ee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Michelle Lin",
      "Andy Wang"
     ],
     "a": [
      "Colleen Van Ee",
      "David Reyes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Cynthia Li",
      "Chao Ku"
     ],
     "a": [
      "Arzu Alimjan",
      "Ali Bhimji"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Michelle Lin",
      "Ling Vance"
     ],
     "a": [
      "Colleen Van Ee",
      "Deb Morisie"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jia Fei",
      "May Wang"
     ],
     "a": [
      "Virginia Alves",
      "Arzu Alimjan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Guan Yang",
      "Hang Liu"
     ],
     "a": [
      "Cullen Curley",
      "Chris Hudak"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Calvin Zheng",
      "Wen Jin"
     ],
     "a": [
      "David Reyes",
      "Ali Bhimji"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Ling Vance",
      "Guan Yang"
     ],
     "a": [
      "Lana Engler Carss",
      "Ali Bhimji"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Tingting Huang",
      "Hang Liu"
     ],
     "a": [
      "Colleen Van Ee",
      "Donavin Van Ee"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Cynthia Li",
      "Chao Ku"
     ],
     "a": [
      "Arzu Alimjan",
      "Cullen Curley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jia Fei",
      "Andy Wang"
     ],
     "a": [
      "Deb Morisie",
      "David Reyes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "May Wang",
      "Michelle Lin"
     ],
     "a": [
      "Virginia Alves",
      "Colleen Van Ee"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jia Fei",
      "Tingting Huang"
     ],
     "a": [
      "Arzu Alimjan",
      "Lana Engler Carss"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Hang Liu",
      "Guan Yang"
     ],
     "a": [
      "David Reyes",
      "Cullen Curley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Wen Jin",
      "Andy Wang"
     ],
     "a": [
      "Chris Hudak",
      "Donavin Van Ee"
     ]
    }
   ],
   "subs": [
    "Ali Bhimji",
    "Cynthia Li",
    "Hang Liu"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Premiere",
   "away": "Pickle House",
   "time": "2026-09-02T19:00:00",
   "complete": true,
   "homePoints": 677,
   "awayPoints": 541,
   "homeGW": 25,
   "awayGW": 7,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Christina Schulz",
      "Paul Iacullo"
     ],
     "a": [
      "Danielle Kuti",
      "Edwin Garcia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Abby Zhang",
      "Eden Ksendzovsky"
     ],
     "a": [
      "Taryn Seidner",
      "Luis Guzman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Genifer Lefkowitz",
      "Jason Feldman"
     ],
     "a": [
      "Veronica Rosas",
      "Brandon Calmo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 28,
     "as": 30,
     "h": [
      "Gwyneth Geressy",
      "Tyler Kaleikini"
     ],
     "a": [
      "Jen Ogorzat",
      "Danny Ruiz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Tiffany Kaleikini",
      "Gwyneth Geressy"
     ],
     "a": [
      "Jen Ogorzat",
      "Danielle Kuti"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Genifer Lefkowitz",
      "Abby Zhang"
     ],
     "a": [
      "Veronica Rosas",
      "Taryn Seidner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jason Feldman",
      "Jason Ilkowitz"
     ],
     "a": [
      "Brandon Calmo",
      "Danny Ruiz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Eden Ksendzovsky",
      "Tyler Kaleikini"
     ],
     "a": [
      "Edwin Garcia",
      "Luis Guzman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Tiffany Kaleikini",
      "Eden Ksendzovsky"
     ],
     "a": [
      "Jen Ogorzat",
      "Danny Ruiz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Juliet Deguida",
      "Paul Iacullo"
     ],
     "a": [
      "Danielle Kuti",
      "Matthew Peletier"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Genifer Lefkowitz",
      "Jason Feldman"
     ],
     "a": [
      "Veronica Rosas",
      "Brandon Calmo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Christina Schulz",
      "Tyler Kaleikini"
     ],
     "a": [
      "Taryn Seidner",
      "Luis Guzman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Juliet Deguida",
      "Gwyneth Geressy"
     ],
     "a": [
      "Taryn Seidner",
      "Jen Ogorzat"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Abby Zhang",
      "Christina Schulz"
     ],
     "a": [
      "Veronica Rosas",
      "Danielle Kuti"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jason Feldman",
      "Jason Ilkowitz"
     ],
     "a": [
      "Brandon Calmo",
      "Danny Ruiz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Eden Ksendzovsky",
      "Tyler Kaleikini"
     ],
     "a": [
      "Edwin Garcia",
      "Matthew Peletier"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Genifer Lefkowitz",
      "Eden Ksendzovsky"
     ],
     "a": [
      "Taryn Seidner",
      "Edwin Garcia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Juliet Deguida",
      "Jason Ilkowitz"
     ],
     "a": [
      "Danielle Kuti",
      "Matthew Peletier"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Abby Zhang",
      "Jason Feldman"
     ],
     "a": [
      "Veronica Rosas",
      "Danny Ruiz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Tiffany Kaleikini",
      "Paul Iacullo"
     ],
     "a": [
      "Jen Ogorzat",
      "Luis Guzman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Tiffany Kaleikini",
      "Juliet Deguida"
     ],
     "a": [
      "Jen Ogorzat",
      "Danielle Kuti"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Christina Schulz",
      "Gwyneth Geressy"
     ],
     "a": [
      "Veronica Rosas",
      "Taryn Seidner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jason Feldman",
      "Tyler Kaleikini"
     ],
     "a": [
      "Brandon Calmo",
      "Luis Guzman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jason Ilkowitz",
      "Paul Iacullo"
     ],
     "a": [
      "Matthew Peletier",
      "Edwin Garcia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Genifer Lefkowitz",
      "Jason Ilkowitz"
     ],
     "a": [
      "Taryn Seidner",
      "Matthew Peletier"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Juliet Deguida",
      "Tyler Kaleikini"
     ],
     "a": [
      "Danielle Kuti",
      "Edwin Garcia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Abby Zhang",
      "Paul Iacullo"
     ],
     "a": [
      "Veronica Rosas",
      "Danny Ruiz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Tiffany Kaleikini",
      "Eden Ksendzovsky"
     ],
     "a": [
      "Jen Ogorzat",
      "Brandon Calmo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Christina Schulz",
      "Gwyneth Geressy"
     ],
     "a": [
      "Taryn Seidner",
      "Jen Ogorzat"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Abby Zhang",
      "Genifer Lefkowitz"
     ],
     "a": [
      "Veronica Rosas",
      "Danielle Kuti"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jason Feldman",
      "Eden Ksendzovsky"
     ],
     "a": [
      "Brandon Calmo",
      "Edwin Garcia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jason Ilkowitz",
      "Paul Iacullo"
     ],
     "a": [
      "Danny Ruiz",
      "Luis Guzman"
     ]
    }
   ],
   "subs": [
    "Jen Ogorzat"
   ]
  },
  {
   "result": "away",
   "week": 2,
   "home": "Bounce Tempest",
   "away": "Jersey Devil Green",
   "time": "2026-09-02T19:30:00",
   "complete": true,
   "provisional": true,
   "homePoints": 583,
   "awayPoints": 630,
   "homeGW": 13,
   "awayGW": 19,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Shania Bui",
      "Kong Vu"
     ],
     "a": [
      "Olivia Schaller",
      "Brandon Dejesus"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kierstin Gant",
      "John Tano"
     ],
     "a": [
      "Srilahari Kunchapu",
      "Jaspher Cosico"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Eileen Zhang",
      "Khanh Vu"
     ],
     "a": [
      "Katrina Maranan",
      "Peter David"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ginny Truong",
      "Dylan Mich"
     ],
     "a": [
      "Ashley Held",
      "Albert Lin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Vy Conghuyen",
      "Stephanie Li"
     ],
     "a": [
      "Srilahari Kunchapu",
      "Olivia Schaller"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Eileen Zhang",
      "Shania Bui"
     ],
     "a": [
      "Linda Liu",
      "Ashley Held"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Carlos Lichty",
      "Ethan Fu"
     ],
     "a": [
      "Evan Sinclair",
      "Albert Lin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "John Tano",
      "Khanh Vu"
     ],
     "a": [
      "Anthony Solares",
      "Peter David"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ginny Truong",
      "Dylan Mich"
     ],
     "a": [
      "Olivia Schaller",
      "Anthony Solares"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Stephanie Li",
      "Carlos Lichty"
     ],
     "a": [
      "Srilahari Kunchapu",
      "Brandon Dejesus"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kierstin Gant",
      "John Tano"
     ],
     "a": [
      "Linda Liu",
      "Albert Lin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Vy Conghuyen",
      "Kong Vu"
     ],
     "a": [
      "Katrina Maranan",
      "Jaspher Cosico"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Stephanie Li",
      "Kierstin Gant"
     ],
     "a": [
      "Linda Liu",
      "Ashley Held"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Eileen Zhang",
      "Shania Bui"
     ],
     "a": [
      "Olivia Schaller",
      "Katrina Maranan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kong Vu",
      "Khanh Vu"
     ],
     "a": [
      "Jaspher Cosico",
      "Brandon Dejesus"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Dylan Mich",
      "Ethan Fu"
     ],
     "a": [
      "Peter David",
      "Evan Sinclair"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ginny Truong",
      "Carlos Lichty"
     ],
     "a": [
      "Katrina Maranan",
      "Evan Sinclair"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Eileen Zhang",
      "Dylan Mich"
     ],
     "a": [
      "Srilahari Kunchapu",
      "Anthony Solares"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Shania Bui",
      "John Tano"
     ],
     "a": [
      "Ashley Held",
      "Peter David"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Vy Conghuyen",
      "Khanh Vu"
     ],
     "a": [
      "Linda Liu",
      "Albert Lin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Stephanie Li",
      "Kierstin Gant"
     ],
     "a": [
      "Srilahari Kunchapu",
      "Linda Liu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ginny Truong",
      "Vy Conghuyen"
     ],
     "a": [
      "Olivia Schaller",
      "Ashley Held"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Khanh Vu",
      "Carlos Lichty"
     ],
     "a": [
      "Brandon Dejesus",
      "Jaspher Cosico"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kong Vu",
      "Ethan Fu"
     ],
     "a": [
      "Anthony Solares",
      "Albert Lin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Shania Bui",
      "Dylan Mich"
     ],
     "a": [
      "Srilahari Kunchapu",
      "Peter David"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ginny Truong",
      "Kong Vu"
     ],
     "a": [
      "Katrina Maranan",
      "Brandon Dejesus"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Vy Conghuyen",
      "Ethan Fu"
     ],
     "a": [
      "Olivia Schaller",
      "Evan Sinclair"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Eileen Zhang",
      "John Tano"
     ],
     "a": [
      "Ashley Held",
      "Jaspher Cosico"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kierstin Gant",
      "Eileen Zhang"
     ],
     "a": [
      "Srilahari Kunchapu",
      "Olivia Schaller"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Shania Bui",
      "Stephanie Li"
     ],
     "a": [
      "Katrina Maranan",
      "Linda Liu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Dylan Mich",
      "Khanh Vu"
     ],
     "a": [
      "Albert Lin",
      "Anthony Solares"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ethan Fu",
      "Carlos Lichty"
     ],
     "a": [
      "Peter David",
      "Evan Sinclair"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 2,
   "home": "Ballers Philly",
   "away": "Bounce Philly",
   "time": "2026-09-02T19:30:00",
   "complete": true,
   "homePoints": 587,
   "awayPoints": 610,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kelly Feng",
      "Samuel Lee"
     ],
     "a": [
      "Julia Manetta",
      "Anthony Prusich"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Karen Rodriguez",
      "Sebastian Fas"
     ],
     "a": [
      "Caity Rietzen",
      "Zach Strickland"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Isobel Harvey",
      "Peter Siv"
     ],
     "a": [
      "Alexandra Pond",
      "Joshua Kim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Alexandria Mlkvy",
      "Ben Van Handel"
     ],
     "a": [
      "Gianna Medeiros",
      "Jonathan Macqueen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Karen Rodriguez",
      "Tesa Pribitkin"
     ],
     "a": [
      "Maggie Malloy",
      "Gianna Medeiros"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Isobel Harvey",
      "Alexandria Mlkvy"
     ],
     "a": [
      "Alexandra Pond",
      "Christina Sheehan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ben Van Handel",
      "Ted Asavamongkolkul"
     ],
     "a": [
      "Anthony Prusich",
      "Jeremy Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Sebastian Fas",
      "Samuel Lee"
     ],
     "a": [
      "Joshua Kim",
      "Jonathan Macqueen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Isobel Harvey",
      "Peter Siv"
     ],
     "a": [
      "Gianna Medeiros",
      "Andrew Martin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kelly Feng",
      "Samuel Lee"
     ],
     "a": [
      "Julia Manetta",
      "Anthony Prusich"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Karen Rodriguez",
      "Sebastian Fas"
     ],
     "a": [
      "Christina Sheehan",
      "Zach Strickland"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Alexandria Mlkvy",
      "Ben Van Handel"
     ],
     "a": [
      "Maggie Malloy",
      "Jeremy Chen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Tesa Pribitkin",
      "Isobel Harvey"
     ],
     "a": [
      "Maggie Malloy",
      "Gianna Medeiros"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Alexandria Mlkvy",
      "Kelly Feng"
     ],
     "a": [
      "Caity Rietzen",
      "Alexandra Pond"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Samuel Lee",
      "Ted Asavamongkolkul"
     ],
     "a": [
      "Andrew Martin",
      "Joshua Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Peter Siv",
      "Sebastian Fas"
     ],
     "a": [
      "Jonathan Macqueen",
      "Zach Strickland"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kelly Feng",
      "Ben Van Handel"
     ],
     "a": [
      "Caity Rietzen",
      "Andrew Martin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Isobel Harvey",
      "Sebastian Fas"
     ],
     "a": [
      "Julia Manetta",
      "Jonathan Macqueen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Alexandria Mlkvy",
      "Ted Asavamongkolkul"
     ],
     "a": [
      "Maggie Malloy",
      "Zach Strickland"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Karen Rodriguez",
      "Peter Siv"
     ],
     "a": [
      "Alexandra Pond",
      "Jeremy Chen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kelly Feng",
      "Isobel Harvey"
     ],
     "a": [
      "Julia Manetta",
      "Alexandra Pond"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Karen Rodriguez",
      "Tesa Pribitkin"
     ],
     "a": [
      "Caity Rietzen",
      "Christina Sheehan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Peter Siv",
      "Samuel Lee"
     ],
     "a": [
      "Andrew Martin",
      "Zach Strickland"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ted Asavamongkolkul",
      "Ben Van Handel"
     ],
     "a": [
      "Anthony Prusich",
      "Jeremy Chen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Kelly Feng",
      "Ben Van Handel"
     ],
     "a": [
      "Gianna Medeiros",
      "Andrew Martin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Karen Rodriguez",
      "Samuel Lee"
     ],
     "a": [
      "Christina Sheehan",
      "Zach Strickland"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Isobel Harvey",
      "Sebastian Fas"
     ],
     "a": [
      "Julia Manetta",
      "Joshua Kim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Alexandria Mlkvy",
      "Ted Asavamongkolkul"
     ],
     "a": [
      "Maggie Malloy",
      "Jeremy Chen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Tesa Pribitkin",
      "Alexandria Mlkvy"
     ],
     "a": [
      "Maggie Malloy",
      "Christina Sheehan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Karen Rodriguez",
      "Kelly Feng"
     ],
     "a": [
      "Caity Rietzen",
      "Julia Manetta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Peter Siv",
      "Samuel Lee"
     ],
     "a": [
      "Joshua Kim",
      "Jonathan Macqueen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Sebastian Fas",
      "Ted Asavamongkolkul"
     ],
     "a": [
      "Andrew Martin",
      "Anthony Prusich"
     ]
    }
   ],
   "subs": [
    "Alexandra Pond"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Dill Dinkers Hatboro",
   "away": "Forward",
   "time": "2026-09-02T19:30:00",
   "complete": true,
   "homePoints": 639,
   "awayPoints": 614,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Courtney Skolka",
      "Nick Lewis"
     ],
     "a": [
      "Isabel Laroque",
      "Michael Martellacci"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Vanessa Rhoades",
      "David Barth"
     ],
     "a": [
      "Ava Pastore",
      "Luc Legaspi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Natalia Koontz",
      "Shawn Roseman"
     ],
     "a": [
      "Olivia Lee",
      "Cole Neimetz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Gabby Frieder",
      "Farhan Chowdhury"
     ],
     "a": [
      "Justyna Wojdyla",
      "Ryan Gerstel"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Thania Padova",
      "Courtney Skolka"
     ],
     "a": [
      "Isabel Laroque",
      "Lili Zebluim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Lauren Fernandez",
      "Vanessa Rhoades"
     ],
     "a": [
      "Ariane Abadi",
      "Justyna Wojdyla"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jason Quach",
      "Andrew Son"
     ],
     "a": [
      "Matthew Crawford",
      "Luc Legaspi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "David Barth",
      "Nick Lewis"
     ],
     "a": [
      "Mike Scioli Jr",
      "Michael Martellacci"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Lauren Fernandez",
      "Andrew Son"
     ],
     "a": [
      "Isabel Laroque",
      "Ryan Gerstel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Vanessa Rhoades",
      "Shawn Roseman"
     ],
     "a": [
      "Ava Pastore",
      "Cole Neimetz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Gabby Frieder",
      "Jason Quach"
     ],
     "a": [
      "Lili Zebluim",
      "Mike Scioli Jr"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Natalia Koontz",
      "Farhan Chowdhury"
     ],
     "a": [
      "Olivia Lee",
      "Matthew Crawford"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Gabby Frieder",
      "Natalia Koontz"
     ],
     "a": [
      "Olivia Lee",
      "Isabel Laroque"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Thania Padova",
      "Courtney Skolka"
     ],
     "a": [
      "Justyna Wojdyla",
      "Lili Zebluim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Nick Lewis",
      "Shawn Roseman"
     ],
     "a": [
      "Ryan Gerstel",
      "Mike Scioli Jr"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jason Quach",
      "Andrew Son"
     ],
     "a": [
      "Luc Legaspi",
      "Cole Neimetz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Natalia Koontz",
      "Shawn Roseman"
     ],
     "a": [
      "Ava Pastore",
      "Michael Martellacci"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Thania Padova",
      "Jason Quach"
     ],
     "a": [
      "Ariane Abadi",
      "Cole Neimetz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Courtney Skolka",
      "David Barth"
     ],
     "a": [
      "Lili Zebluim",
      "Luc Legaspi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Gabby Frieder",
      "Nick Lewis"
     ],
     "a": [
      "Isabel Laroque",
      "Matthew Crawford"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Gabby Frieder",
      "Natalia Koontz"
     ],
     "a": [
      "Ava Pastore",
      "Ariane Abadi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Lauren Fernandez",
      "Vanessa Rhoades"
     ],
     "a": [
      "Olivia Lee",
      "Justyna Wojdyla"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Farhan Chowdhury",
      "Andrew Son"
     ],
     "a": [
      "Cole Neimetz",
      "Michael Martellacci"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Nick Lewis",
      "Jason Quach"
     ],
     "a": [
      "Mike Scioli Jr",
      "Matthew Crawford"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Courtney Skolka",
      "Andrew Son"
     ],
     "a": [
      "Lili Zebluim",
      "Michael Martellacci"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lauren Fernandez",
      "Nick Lewis"
     ],
     "a": [
      "Ariane Abadi",
      "Luc Legaspi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Vanessa Rhoades",
      "Farhan Chowdhury"
     ],
     "a": [
      "Olivia Lee",
      "Ryan Gerstel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Thania Padova",
      "David Barth"
     ],
     "a": [
      "Justyna Wojdyla",
      "Mike Scioli Jr"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Natalia Koontz",
      "Courtney Skolka"
     ],
     "a": [
      "Ava Pastore",
      "Isabel Laroque"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Gabby Frieder",
      "Vanessa Rhoades"
     ],
     "a": [
      "Ariane Abadi",
      "Lili Zebluim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Farhan Chowdhury",
      "Jason Quach"
     ],
     "a": [
      "Michael Martellacci",
      "Luc Legaspi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "David Barth",
      "Shawn Roseman"
     ],
     "a": [
      "Matthew Crawford",
      "Cole Neimetz"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 2,
   "home": "Montville",
   "away": "Home Court",
   "time": "2026-09-02T19:30:00",
   "complete": true,
   "provisional": true,
   "homePoints": 625,
   "awayPoints": 576,
   "homeGW": 21,
   "awayGW": 11,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Carmina Lasam",
      "Abdullah Osman"
     ],
     "a": [
      "Kim Batistoni",
      "Matthew Stephenson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Sarah Law",
      "Chris Colucci"
     ],
     "a": [
      "Susan M Fett",
      "Robert Huntley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Christine Algozo",
      "Todd Green"
     ],
     "a": [
      "Emiliya Mizrahi",
      "Richie Mizrahi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Alexandra Sierer",
      "Keith Parker"
     ],
     "a": [
      "Laura Fantin",
      "Chris Fantin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Sarah Law",
      "Alexandra Sierer"
     ],
     "a": [
      "Susan M Fett",
      "Laura Spilatro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Carmina Lasam",
      "Jess Cox"
     ],
     "a": [
      "Kim Batistoni",
      "Laura Fantin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kamal D",
      "Todd Green"
     ],
     "a": [
      "Chris Fantin",
      "Matthew Stephenson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Abdullah Osman",
      "Jason Huang"
     ],
     "a": [
      "Robert Huntley",
      "Joe Carson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Alexandra Sierer",
      "Keith Parker"
     ],
     "a": [
      "Emiliya Mizrahi",
      "Richie Mizrahi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sarah Law",
      "Abdullah Osman"
     ],
     "a": [
      "Susan M Fett",
      "Robert Huntley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Carmina Lasam",
      "Kamal D"
     ],
     "a": [
      "Laura Fantin",
      "Chris Fantin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jess Cox",
      "Chris Colucci"
     ],
     "a": [
      "Kim Batistoni",
      "Matthew Stephenson"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sarah Law",
      "Christine Algozo"
     ],
     "a": [
      "Emiliya Mizrahi",
      "Laura Spilatro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Corie Stone",
      "Alexandra Sierer"
     ],
     "a": [
      "Kim Batistoni",
      "Laura Fantin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jason Huang",
      "Kamal D"
     ],
     "a": [
      "Chris Fantin",
      "Matthew Stephenson"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Todd Green",
      "Keith Parker"
     ],
     "a": [
      "Robert Huntley",
      "Joe Carson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Christine Algozo",
      "Chris Colucci"
     ],
     "a": [
      "Emiliya Mizrahi",
      "Matthew Stephenson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Sarah Law",
      "Todd Green"
     ],
     "a": [
      "Susan M Fett",
      "Joe Carson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Alexandra Sierer",
      "Abdullah Osman"
     ],
     "a": [
      "Laura Spilatro",
      "Robert Huntley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Corie Stone",
      "Keith Parker"
     ],
     "a": [
      "Kim Batistoni",
      "Richie Mizrahi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jess Cox",
      "Sarah Law"
     ],
     "a": [
      "Kim Batistoni",
      "Susan M Fett"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Carmina Lasam",
      "Corie Stone"
     ],
     "a": [
      "Laura Fantin",
      "Laura Spilatro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Chris Colucci",
      "Kamal D"
     ],
     "a": [
      "Matthew Stephenson",
      "Richie Mizrahi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Abdullah Osman",
      "Todd Green"
     ],
     "a": [
      "Chris Fantin",
      "Joe Carson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jess Cox",
      "Chris Colucci"
     ],
     "a": [
      "Susan M Fett",
      "Joe Carson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Christine Algozo",
      "Kamal D"
     ],
     "a": [
      "Emiliya Mizrahi",
      "Matthew Stephenson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Alexandra Sierer",
      "Abdullah Osman"
     ],
     "a": [
      "Laura Spilatro",
      "Robert Huntley"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Corie Stone",
      "Jason Huang"
     ],
     "a": [
      "Kim Batistoni",
      "Richie Mizrahi"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Carmina Lasam",
      "Christine Algozo"
     ],
     "a": [
      "Emiliya Mizrahi",
      "Susan M Fett"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Alexandra Sierer",
      "Sarah Law"
     ],
     "a": [
      "Laura Fantin",
      "Laura Spilatro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Chris Colucci",
      "Keith Parker"
     ],
     "a": [
      "Robert Huntley",
      "Richie Mizrahi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Todd Green",
      "Abdullah Osman"
     ],
     "a": [
      "Chris Fantin",
      "Joe Carson"
     ]
    }
   ],
   "subs": [
    "Kim Batistoni",
    "Laura Spilatro",
    "Kamal D",
    "Joe Carson"
   ]
  },
  {
   "result": "away",
   "week": 2,
   "home": "ACE Downingtown",
   "away": "Delco Turf & Pickle",
   "time": "2026-09-02T19:30:00",
   "complete": true,
   "homePoints": 536,
   "awayPoints": 637,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Karen Anthony",
      "Thomas Kang"
     ],
     "a": [
      "Angela Delconte",
      "Andrew Taylor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Kiddi Vu",
      "Justin Lin"
     ],
     "a": [
      "Jenny Shi",
      "Nick Tang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Nancy Wu",
      "Chris Mendoza"
     ],
     "a": [
      "Kalina Ye",
      "Leh Mounelasy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Yushan Mirza",
      "Vinoth Baburao Venkatakrishnan"
     ],
     "a": [
      "Marina Mounelasy",
      "Jon Wheel"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kiddi Vu",
      "Nancy Wu"
     ],
     "a": [
      "Thuy Heng",
      "Angela Delconte"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Karen Anthony",
      "Yushan Mirza"
     ],
     "a": [
      "Marina Mounelasy",
      "Carla Fonseca"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Chris Mendoza",
      "Lewis Torres"
     ],
     "a": [
      "Jon Wheel",
      "Chanthorn Heng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Justin Lin",
      "Vinoth Baburao Venkatakrishnan"
     ],
     "a": [
      "Leh Mounelasy",
      "Elliott Tseng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kiddi Vu",
      "Justin Lin"
     ],
     "a": [
      "Marina Mounelasy",
      "Nick Tang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Nancy Wu",
      "Chris Mendoza"
     ],
     "a": [
      "Jenny Shi",
      "Elliott Tseng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Karen Anthony",
      "Thomas Kang"
     ],
     "a": [
      "Carla Fonseca",
      "Chanthorn Heng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Yushan Mirza",
      "Jay Lizardo"
     ],
     "a": [
      "Thuy Heng",
      "Jon Wheel"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kiddi Vu",
      "Nancy Wu"
     ],
     "a": [
      "Jenny Shi",
      "Angela Delconte"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Karen Anthony",
      "Yushan Mirza"
     ],
     "a": [
      "Kalina Ye",
      "Thuy Heng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Justin Lin",
      "Vinoth Baburao Venkatakrishnan"
     ],
     "a": [
      "Nick Tang",
      "Elliott Tseng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Lewis Torres",
      "Thomas Kang"
     ],
     "a": [
      "Leh Mounelasy",
      "Andrew Taylor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kiddi Vu",
      "Chris Mendoza"
     ],
     "a": [
      "Jenny Shi",
      "Nick Tang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Nancy Wu",
      "Justin Lin"
     ],
     "a": [
      "Kalina Ye",
      "Jon Wheel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Karen Anthony",
      "Jay Lizardo"
     ],
     "a": [
      "Marina Mounelasy",
      "Andrew Taylor"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Yushan Mirza",
      "Thomas Kang"
     ],
     "a": [
      "Angela Delconte",
      "Leh Mounelasy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kiddi Vu",
      "Karen Anthony"
     ],
     "a": [
      "Angela Delconte",
      "Carla Fonseca"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Nancy Wu",
      "Yushan Mirza"
     ],
     "a": [
      "Kalina Ye",
      "Marina Mounelasy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Chris Mendoza",
      "Justin Lin"
     ],
     "a": [
      "Jon Wheel",
      "Elliott Tseng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Vinoth Baburao Venkatakrishnan",
      "Lewis Torres"
     ],
     "a": [
      "Andrew Taylor",
      "Chanthorn Heng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kiddi Vu",
      "Chris Mendoza"
     ],
     "a": [
      "Marina Mounelasy",
      "Jon Wheel"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Nancy Wu",
      "Justin Lin"
     ],
     "a": [
      "Jenny Shi",
      "Elliott Tseng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Karen Anthony",
      "Jay Lizardo"
     ],
     "a": [
      "Thuy Heng",
      "Chanthorn Heng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Yushan Mirza",
      "Thomas Kang"
     ],
     "a": [
      "Carla Fonseca",
      "Leh Mounelasy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Kiddi Vu",
      "Karen Anthony"
     ],
     "a": [
      "Jenny Shi",
      "Thuy Heng"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Nancy Wu",
      "Yushan Mirza"
     ],
     "a": [
      "Carla Fonseca",
      "Kalina Ye"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jay Lizardo",
      "Vinoth Baburao Venkatakrishnan"
     ],
     "a": [
      "Nick Tang",
      "Chanthorn Heng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Lewis Torres",
      "Justin Lin"
     ],
     "a": [
      "Leh Mounelasy",
      "Andrew Taylor"
     ]
    }
   ],
   "subs": [
    "Vinoth Baburao Venkatakrishnan",
    "Chris Mendoza"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Jersey Devil Navy",
   "away": "Pickle Juice Blackwood",
   "time": "2026-09-02T19:30:00",
   "complete": true,
   "provisional": true,
   "homePoints": 629,
   "awayPoints": 622,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Rebecca Mcginnis",
      "Adam Lowther"
     ],
     "a": [
      "Tiffany Weis",
      "Jon Palabay"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Hanna Cutler",
      "Jonathan Carter"
     ],
     "a": [
      "Jennifer Kinkel",
      "Skylar Bobadilla"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Taylor Johns",
      "Chris Machuzak"
     ],
     "a": [
      "Rebecca Durda",
      "Gabriel Ferraro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jacquie Verish",
      "Daniel Hadley"
     ],
     "a": [
      "Eileen Potter",
      "Brian Cook"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Dana Sheply",
      "Lisa Pinder"
     ],
     "a": [
      "Magnolia Lau",
      "Tiffany Weis"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Taylor Johns",
      "Jacquie Verish"
     ],
     "a": [
      "Eileen Potter",
      "Rebecca Durda"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Jonathan Carter",
      "Jacob Alpert"
     ],
     "a": [
      "Brian Cook",
      "Vito Nucci"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Alex Kustas",
      "Adam Lowther"
     ],
     "a": [
      "Simon Darlington",
      "Gabriel Ferraro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Hanna Cutler",
      "Jacob Alpert"
     ],
     "a": [
      "Magnolia Lau",
      "Vito Nucci"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Rebecca Mcginnis",
      "Jonathan Carter"
     ],
     "a": [
      "Christina Juliano",
      "Brian Cook"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Dana Sheply",
      "Daniel Hadley"
     ],
     "a": [
      "Jennifer Kinkel",
      "Simon Darlington"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Taylor Johns",
      "Chris Machuzak"
     ],
     "a": [
      "Tiffany Weis",
      "Skylar Bobadilla"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Lisa Pinder",
      "Hanna Cutler"
     ],
     "a": [
      "Jennifer Kinkel",
      "Christina Juliano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Taylor Johns",
      "Jacquie Verish"
     ],
     "a": [
      "Eileen Potter",
      "Tiffany Weis"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Alex Kustas",
      "Adam Lowther"
     ],
     "a": [
      "Brian Cook",
      "Skylar Bobadilla"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Chris Machuzak",
      "Daniel Hadley"
     ],
     "a": [
      "Jon Palabay",
      "Gabriel Ferraro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Lisa Pinder",
      "Jonathan Carter"
     ],
     "a": [
      "Jennifer Kinkel",
      "Vito Nucci"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Taylor Johns",
      "Adam Lowther"
     ],
     "a": [
      "Rebecca Durda",
      "Jon Palabay"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Rebecca Mcginnis",
      "Alex Kustas"
     ],
     "a": [
      "Magnolia Lau",
      "Skylar Bobadilla"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Dana Sheply",
      "Jacob Alpert"
     ],
     "a": [
      "Christina Juliano",
      "Gabriel Ferraro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jacquie Verish",
      "Rebecca Mcginnis"
     ],
     "a": [
      "Rebecca Durda",
      "Tiffany Weis"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Hanna Cutler",
      "Dana Sheply"
     ],
     "a": [
      "Christina Juliano",
      "Magnolia Lau"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Jacob Alpert",
      "Daniel Hadley"
     ],
     "a": [
      "Vito Nucci",
      "Jon Palabay"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Alex Kustas",
      "Chris Machuzak"
     ],
     "a": [
      "Simon Darlington",
      "Skylar Bobadilla"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Hanna Cutler",
      "Daniel Hadley"
     ],
     "a": [
      "Magnolia Lau",
      "Gabriel Ferraro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Taylor Johns",
      "Adam Lowther"
     ],
     "a": [
      "Tiffany Weis",
      "Brian Cook"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Rebecca Mcginnis",
      "Alex Kustas"
     ],
     "a": [
      "Rebecca Durda",
      "Simon Darlington"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Lisa Pinder",
      "Chris Machuzak"
     ],
     "a": [
      "Eileen Potter",
      "Jon Palabay"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Rebecca Mcginnis",
      "Dana Sheply"
     ],
     "a": [
      "Christina Juliano",
      "Rebecca Durda"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jacquie Verish",
      "Lisa Pinder"
     ],
     "a": [
      "Jennifer Kinkel",
      "Eileen Potter"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jacob Alpert",
      "Jonathan Carter"
     ],
     "a": [
      "Simon Darlington",
      "Vito Nucci"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Alex Kustas",
      "Chris Machuzak"
     ],
     "a": [
      "Gabriel Ferraro",
      "Skylar Bobadilla"
     ]
    }
   ],
   "subs": [
    "Rebecca Durda"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "APC Garden State",
   "away": "Players Courtyard",
   "time": "2026-09-02T19:30:00",
   "complete": true,
   "homePoints": 642,
   "awayPoints": 607,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Taylor Lambe",
      "Andress Mims"
     ],
     "a": [
      "Nicole Mandry",
      "Matt Demarco"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lianhong Li",
      "Michael Kresloff"
     ],
     "a": [
      "Ricki Cohen",
      "Brad Mandry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Nada Abdelkarim",
      "Mario Contreras"
     ],
     "a": [
      "Deirdre Zohlman",
      "Scott Strong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Pallavi Deshpande",
      "Pratap Kotra"
     ],
     "a": [
      "Mary Fair",
      "Aaron Chan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Nada Abdelkarim",
      "Taylor Lambe"
     ],
     "a": [
      "Ricki Cohen",
      "Nicole Mandry"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Stacy Ip-Mo",
      "Michele Costigan"
     ],
     "a": [
      "Deirdre Zohlman",
      "Lynn Bresnahan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "John Dechristopher",
      "Andress Mims"
     ],
     "a": [
      "Brad Mandry",
      "Matt Demarco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Michael Kresloff",
      "Ryan Lehrfeld"
     ],
     "a": [
      "Scott Strong",
      "Aaron Chan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Lianhong Li",
      "Mario Contreras"
     ],
     "a": [
      "Nicole Mandry",
      "Matt Demarco"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Pallavi Deshpande",
      "Pratap Kotra"
     ],
     "a": [
      "Ricki Cohen",
      "Brad Mandry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Taylor Lambe",
      "John Dechristopher"
     ],
     "a": [
      "Mary Fair",
      "Scott Strong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Stacy Ip-Mo",
      "Andress Mims"
     ],
     "a": [
      "Lynn Bresnahan",
      "Aaron Chan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Nada Abdelkarim",
      "Taylor Lambe"
     ],
     "a": [
      "Nicole Mandry",
      "Ricki Cohen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Michele Costigan",
      "Lianhong Li"
     ],
     "a": [
      "Deirdre Zohlman",
      "Mary Fair"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ryan Lehrfeld",
      "Pratap Kotra"
     ],
     "a": [
      "Brad Mandry",
      "Aaron Chan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Michael Kresloff",
      "Andress Mims"
     ],
     "a": [
      "Scott Strong",
      "Matt Demarco"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Nada Abdelkarim",
      "Michael Kresloff"
     ],
     "a": [
      "Nicole Mandry",
      "Brad Mandry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Pallavi Deshpande",
      "Mario Contreras"
     ],
     "a": [
      "Ricki Cohen",
      "Scott Strong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Stacy Ip-Mo",
      "John Dechristopher"
     ],
     "a": [
      "Deirdre Zohlman",
      "Matt Demarco"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Michele Costigan",
      "Ryan Lehrfeld"
     ],
     "a": [
      "Mary Fair",
      "Aaron Chan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Taylor Lambe",
      "Lianhong Li"
     ],
     "a": [
      "Nicole Mandry",
      "Deirdre Zohlman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Pallavi Deshpande",
      "Michele Costigan"
     ],
     "a": [
      "Lynn Bresnahan",
      "Mary Fair"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ryan Lehrfeld",
      "Andress Mims"
     ],
     "a": [
      "Brad Mandry",
      "Scott Strong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "John Dechristopher",
      "Pratap Kotra"
     ],
     "a": [
      "Matt Demarco",
      "Aaron Chan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Stacy Ip-Mo",
      "Mario Contreras"
     ],
     "a": [
      "Nicole Mandry",
      "Brad Mandry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Nada Abdelkarim",
      "John Dechristopher"
     ],
     "a": [
      "Ricki Cohen",
      "Scott Strong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Michele Costigan",
      "Pratap Kotra"
     ],
     "a": [
      "Mary Fair",
      "Matt Demarco"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Pallavi Deshpande",
      "Michael Kresloff"
     ],
     "a": [
      "Lynn Bresnahan",
      "Aaron Chan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Taylor Lambe",
      "Lianhong Li"
     ],
     "a": [
      "Ricki Cohen",
      "Deirdre Zohlman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Nada Abdelkarim",
      "Stacy Ip-Mo"
     ],
     "a": [
      "Mary Fair",
      "Lynn Bresnahan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ryan Lehrfeld",
      "Mario Contreras"
     ],
     "a": [
      "Brad Mandry",
      "Scott Strong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Michael Kresloff",
      "Andress Mims"
     ],
     "a": [
      "Matt Demarco",
      "Aaron Chan"
     ]
    }
   ],
   "subs": [
    "Matt Demarco",
    "Lynn Bresnahan"
   ]
  },
  {
   "result": null,
   "week": 2,
   "home": "Pickleball Kingdom Tinton Falls",
   "away": "Jersey Pickleball Club",
   "time": "2026-09-02T19:30:00",
   "complete": false,
   "games": [
    {
     "t": "mixed",
     "h": [
      "Sally Webb",
      "Joseph Zorbo"
     ],
     "a": [
      "Christina Grosso",
      "Brandon Lam"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Lisa Weinthal",
      "Jim Nelson"
     ],
     "a": [
      "Gerianne Mcmahon",
      "Anthony Simonetti"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Rachel Levkov",
      "Tayon Hart"
     ],
     "a": [
      "Brittani Rivera",
      "Anthony Mcmahon"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Carolyn Antuna",
      "John Kulesza"
     ],
     "a": [
      "Kali Lerner",
      "Alex Glushek"
     ]
    },
    {
     "t": "female",
     "h": [
      "Carolyn Antuna",
      "Rachel Levkov"
     ],
     "a": [
      "Christina Grosso",
      "Gerianne Mcmahon"
     ]
    },
    {
     "t": "female",
     "h": [
      "Rachael Nissim",
      "Sally Webb"
     ],
     "a": [
      "Robyn Wolfe",
      "Marianna Telerman"
     ]
    },
    {
     "t": "male",
     "h": [
      "Jim Nelson",
      "John Kulesza"
     ],
     "a": [
      "Anthony Simonetti",
      "Brandon Lam"
     ]
    },
    {
     "t": "male",
     "h": [
      "Tayon Hart",
      "Shawn Mayer"
     ],
     "a": [
      "Neil Policastro",
      "Connor Hall"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Rachael Nissim",
      "Tayon Hart"
     ],
     "a": [
      "Christina Grosso",
      "Brandon Lam"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Sally Webb",
      "Shawn Mayer"
     ],
     "a": [
      "Gerianne Mcmahon",
      "Anthony Simonetti"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Rachel Levkov",
      "Joseph Zorbo"
     ],
     "a": [
      "Marianna Telerman",
      "Anthony Mcmahon"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Lisa Weinthal",
      "Jim Nelson"
     ],
     "a": [
      "Kali Lerner",
      "Alex Glushek"
     ]
    },
    {
     "t": "female",
     "h": [
      "Carolyn Antuna",
      "Rachel Levkov"
     ],
     "a": [
      "Christina Grosso",
      "Gerianne Mcmahon"
     ]
    },
    {
     "t": "female",
     "h": [
      "Rachael Nissim",
      "Sally Webb"
     ],
     "a": [
      "Marianna Telerman",
      "Robyn Wolfe"
     ]
    },
    {
     "t": "male",
     "h": [
      "Jim Nelson",
      "John Kulesza"
     ],
     "a": [
      "Anthony Simonetti",
      "Brandon Lam"
     ]
    },
    {
     "t": "male",
     "h": [
      "Joseph Zorbo",
      "Shawn Mayer"
     ],
     "a": [
      "Neil Policastro",
      "Connor Hall"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Rachel Levkov",
      "Tayon Hart"
     ],
     "a": [
      "Christina Grosso",
      "Anthony Simonetti"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Sally Webb",
      "Joseph Zorbo"
     ],
     "a": [
      "Gerianne Mcmahon",
      "Anthony Mcmahon"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Lisa Weinthal",
      "Shawn Mayer"
     ],
     "a": [
      "Marianna Telerman",
      "Brandon Lam"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Carolyn Antuna",
      "Jim Nelson"
     ],
     "a": [
      "Kali Lerner",
      "Connor Hall"
     ]
    },
    {
     "t": "female",
     "h": [
      "Rachael Nissim",
      "Carolyn Antuna"
     ],
     "a": [
      "Christina Grosso",
      "Robyn Wolfe"
     ]
    },
    {
     "t": "female",
     "h": [
      "Rachel Levkov",
      "Lisa Weinthal"
     ],
     "a": [
      "Kali Lerner",
      "Brittani Rivera"
     ]
    },
    {
     "t": "male",
     "h": [
      "Tayon Hart",
      "Joseph Zorbo"
     ],
     "a": [
      "Neil Policastro",
      "Anthony Mcmahon"
     ]
    },
    {
     "t": "male",
     "h": [
      "Shawn Mayer",
      "John Kulesza"
     ],
     "a": [
      "Anthony Simonetti",
      "Alex Glushek"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Sally Webb",
      "Tayon Hart"
     ],
     "a": [
      "Christina Grosso",
      "Anthony Simonetti"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Lisa Weinthal",
      "Joseph Zorbo"
     ],
     "a": [
      "Gerianne Mcmahon",
      "Alex Glushek"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Rachael Nissim",
      "John Kulesza"
     ],
     "a": [
      "Robyn Wolfe",
      "Connor Hall"
     ]
    },
    {
     "t": "mixed",
     "h": [
      "Carolyn Antuna",
      "Jim Nelson"
     ],
     "a": [
      "Brittani Rivera",
      "Brandon Lam"
     ]
    },
    {
     "t": "female",
     "h": [
      "Rachel Levkov",
      "Rachael Nissim"
     ],
     "a": [
      "Christina Grosso",
      "Robyn Wolfe"
     ]
    },
    {
     "t": "female",
     "h": [
      "Lisa Weinthal",
      "Sally Webb"
     ],
     "a": [
      "Marianna Telerman",
      "Brittani Rivera"
     ]
    },
    {
     "t": "male",
     "h": [
      "John Kulesza",
      "Shawn Mayer"
     ],
     "a": [
      "Neil Policastro",
      "Brandon Lam"
     ]
    },
    {
     "t": "male",
     "h": [
      "Tayon Hart",
      "Joseph Zorbo"
     ],
     "a": [
      "Anthony Simonetti",
      "Connor Hall"
     ]
    }
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Picklr Newark",
   "away": "Picklr Exton",
   "time": "2026-09-02T19:30:00",
   "complete": true,
   "homePoints": 664,
   "awayPoints": 535,
   "homeGW": 27,
   "awayGW": 5,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jennifer Kasnadi",
      "Savan Patel"
     ],
     "a": [
      "Heather Triozzi",
      "Nicholas Jackson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Caitlyn Suchanic",
      "Joe Johnson"
     ],
     "a": [
      "Ann Dunn",
      "Arnaud Clairay"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Leah Oneill",
      "Edrees Siddiqi"
     ],
     "a": [
      "Shannon Vinciguerra",
      "Issac Gao"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Sydney Peterson",
      "Dylan Tjio"
     ],
     "a": [
      "Jamie Damirgian",
      "Bennett Matthew’S"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lady Alvarado",
      "Leah Oneill"
     ],
     "a": [
      "Crystal Mark",
      "Shannon Vinciguerra"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Caitlyn Suchanic",
      "Jennifer Kasnadi"
     ],
     "a": [
      "Ann Dunn",
      "Heather Triozzi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Dylan Tjio",
      "Savan Patel"
     ],
     "a": [
      "Bennett Matthew’S",
      "Issac Gao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Joe Johnson",
      "Reggie Tiglao"
     ],
     "a": [
      "Nicholas Jackson",
      "Michael Meraglia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sydney Peterson",
      "Dylan Tjio"
     ],
     "a": [
      "Heather Triozzi",
      "Nicholas Jackson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Pam Politis",
      "Keith Brittingham"
     ],
     "a": [
      "Ann Dunn",
      "Bennett Matthew’S"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jennifer Kasnadi",
      "Savan Patel"
     ],
     "a": [
      "Jamie Damirgian",
      "Arnaud Clairay"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Caitlyn Suchanic",
      "Joe Johnson"
     ],
     "a": [
      "Crystal Mark",
      "Michael Meraglia"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Caitlyn Suchanic",
      "Jennifer Kasnadi"
     ],
     "a": [
      "Heather Triozzi",
      "Crystal Mark"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lady Alvarado",
      "Pam Politis"
     ],
     "a": [
      "Jamie Damirgian",
      "Shannon Vinciguerra"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Dylan Tjio",
      "Reggie Tiglao"
     ],
     "a": [
      "Nicholas Jackson",
      "Bennett Matthew’S"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Joe Johnson",
      "Edrees Siddiqi"
     ],
     "a": [
      "Arnaud Clairay",
      "Issac Gao"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Sydney Peterson",
      "Keith Brittingham"
     ],
     "a": [
      "Crystal Mark",
      "Nicholas Jackson"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Leah Oneill",
      "Edrees Siddiqi"
     ],
     "a": [
      "Heather Triozzi",
      "Issac Gao"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Pam Politis",
      "Reggie Tiglao"
     ],
     "a": [
      "Ann Dunn",
      "Arnaud Clairay"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Lady Alvarado",
      "Savan Patel"
     ],
     "a": [
      "Jamie Damirgian",
      "Michael Meraglia"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jennifer Kasnadi",
      "Leah Oneill"
     ],
     "a": [
      "Ann Dunn",
      "Shannon Vinciguerra"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Lady Alvarado",
      "Sydney Peterson"
     ],
     "a": [
      "Crystal Mark",
      "Jamie Damirgian"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Dylan Tjio",
      "Savan Patel"
     ],
     "a": [
      "Bennett Matthew’S",
      "Issac Gao"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Keith Brittingham",
      "Reggie Tiglao"
     ],
     "a": [
      "Nicholas Jackson",
      "Michael Meraglia"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Leah Oneill",
      "Keith Brittingham"
     ],
     "a": [
      "Heather Triozzi",
      "Bennett Matthew’S"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Caitlyn Suchanic",
      "Edrees Siddiqi"
     ],
     "a": [
      "Crystal Mark",
      "Issac Gao"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Pam Politis",
      "Reggie Tiglao"
     ],
     "a": [
      "Jamie Damirgian",
      "Arnaud Clairay"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jennifer Kasnadi",
      "Joe Johnson"
     ],
     "a": [
      "Shannon Vinciguerra",
      "Michael Meraglia"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Lady Alvarado",
      "Pam Politis"
     ],
     "a": [
      "Ann Dunn",
      "Shannon Vinciguerra"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Caitlyn Suchanic",
      "Leah Oneill"
     ],
     "a": [
      "Heather Triozzi",
      "Jamie Damirgian"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Joe Johnson",
      "Keith Brittingham"
     ],
     "a": [
      "Nicholas Jackson",
      "Bennett Matthew’S"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Dylan Tjio",
      "Edrees Siddiqi"
     ],
     "a": [
      "Issac Gao",
      "Michael Meraglia"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": null,
   "week": 3,
   "home": "LBF Pickleball",
   "away": "Home Court",
   "time": "2026-09-09T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 3,
   "home": "Pickleball Kingdom Lehigh Valley",
   "away": "Pickleball Kingdom Watchung",
   "time": "2026-09-09T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 3,
   "home": "PKLD",
   "away": "Premiere",
   "time": "2026-09-09T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 3,
   "home": "APC Garden State",
   "away": "Bounce Tempest",
   "time": "2026-09-09T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 3,
   "home": "Bounce Philly",
   "away": "Jersey Devil Green",
   "time": "2026-09-09T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 3,
   "home": "Picklr Exton",
   "away": "Dill Dinkers Hatboro",
   "time": "2026-09-09T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 3,
   "home": "Delco Turf & Pickle",
   "away": "Picklr Newark",
   "time": "2026-09-09T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 3,
   "home": "Pickle Juice Blackwood",
   "away": "Players Courtyard",
   "time": "2026-09-09T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 3,
   "home": "Pickle House",
   "away": "Dill Dinkers Freehold",
   "time": "2026-09-09T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 3,
   "home": "Jersey Pickleball Club",
   "away": "Picklr Manahawkin",
   "time": "2026-09-09T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 3,
   "home": "Bounce Malvern",
   "away": "Forward",
   "time": "2026-09-09T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 3,
   "home": "Flemington",
   "away": "Picklr Fair Lawn",
   "time": "2026-09-09T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 3,
   "home": "Montville",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-09-09T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 3,
   "home": "Jersey Devil Navy",
   "away": "Ballers Philly",
   "time": "2026-09-09T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "PKLD",
   "away": "Jersey Pickleball Club",
   "time": "2026-09-16T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Picklr Fair Lawn",
   "away": "Home Court",
   "time": "2026-09-16T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Picklr Manahawkin",
   "away": "Pickleball Kingdom Tinton Falls",
   "time": "2026-09-16T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Dill Dinkers Freehold",
   "away": "Premiere",
   "time": "2026-09-16T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Pickleball Kingdom Lehigh Valley",
   "away": "Montville",
   "time": "2026-09-16T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Flemington",
   "away": "LBF Pickleball",
   "time": "2026-09-16T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Pickleball Kingdom Watchung",
   "time": "2026-09-16T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Players Courtyard",
   "away": "APC Garden State",
   "time": "2026-09-16T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Dill Dinkers Hatboro",
   "away": "Bounce Malvern",
   "time": "2026-09-16T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Bounce Philly",
   "away": "Ballers Philly",
   "time": "2026-09-16T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Picklr Exton",
   "away": "Delco Turf & Pickle",
   "time": "2026-09-16T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Pickle Juice Blackwood",
   "away": "Jersey Devil Navy",
   "time": "2026-09-16T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Jersey Devil Green",
   "away": "Bounce Tempest",
   "time": "2026-09-16T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 4,
   "home": "Picklr Newark",
   "away": "ACE Downingtown",
   "time": "2026-09-16T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Flemington",
   "time": "2026-09-23T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "PKLD",
   "away": "Picklr Manahawkin",
   "time": "2026-09-23T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Forward",
   "away": "Dill Dinkers Hatboro",
   "time": "2026-09-23T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "LBF Pickleball",
   "away": "Picklr Fair Lawn",
   "time": "2026-09-23T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Delco Turf & Pickle",
   "away": "ACE Downingtown",
   "time": "2026-09-23T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Home Court",
   "away": "Pickleball Kingdom Lehigh Valley",
   "time": "2026-09-23T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Jersey Pickleball Club",
   "away": "Pickleball Kingdom Tinton Falls",
   "time": "2026-09-23T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Jersey Devil Green",
   "away": "Jersey Devil Navy",
   "time": "2026-09-23T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Bounce Tempest",
   "away": "Pickle Juice Blackwood",
   "time": "2026-09-23T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Pickle House",
   "away": "Premiere",
   "time": "2026-09-23T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Pickleball Kingdom Watchung",
   "away": "Montville",
   "time": "2026-09-23T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Players Courtyard",
   "away": "Ballers Philly",
   "time": "2026-09-23T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Bounce Philly",
   "away": "APC Garden State",
   "time": "2026-09-23T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Picklr Exton",
   "away": "Picklr Newark",
   "time": "2026-09-23T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Ballers Philly",
   "away": "APC Garden State",
   "time": "2026-09-26T09:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Pickleball Kingdom Watchung",
   "away": "LBF Pickleball",
   "time": "2026-09-26T09:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Bounce Malvern",
   "away": "Picklr Exton",
   "time": "2026-09-26T09:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Premiere",
   "away": "Picklr Manahawkin",
   "time": "2026-09-26T09:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Home Court",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-09-26T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Bounce Tempest",
   "away": "Players Courtyard",
   "time": "2026-09-26T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Picklr Fair Lawn",
   "away": "Pickleball Kingdom Lehigh Valley",
   "time": "2026-09-26T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Montville",
   "away": "Flemington",
   "time": "2026-09-26T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Bounce Philly",
   "away": "Jersey Devil Navy",
   "time": "2026-09-26T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "ACE Downingtown",
   "away": "Forward",
   "time": "2026-09-26T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Dill Dinkers Hatboro",
   "away": "Picklr Newark",
   "time": "2026-09-26T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Dill Dinkers Freehold",
   "away": "PKLD",
   "time": "2026-09-26T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Pickle Juice Blackwood",
   "away": "Jersey Devil Green",
   "time": "2026-09-26T17:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 5,
   "home": "Pickleball Kingdom Tinton Falls",
   "away": "Pickle House",
   "time": "2026-09-26T18:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Dill Dinkers Freehold",
   "away": "Pickle House",
   "time": "2026-09-30T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Premiere",
   "away": "PKLD",
   "time": "2026-09-30T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Picklr Fair Lawn",
   "away": "Montville",
   "time": "2026-09-30T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Forward",
   "away": "Bounce Malvern",
   "time": "2026-09-30T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Pickleball Kingdom Lehigh Valley",
   "away": "Flemington",
   "time": "2026-09-30T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "LBF Pickleball",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-09-30T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Picklr Manahawkin",
   "away": "Jersey Pickleball Club",
   "time": "2026-09-30T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Players Courtyard",
   "away": "Bounce Philly",
   "time": "2026-09-30T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "APC Garden State",
   "away": "Pickle Juice Blackwood",
   "time": "2026-09-30T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Bounce Tempest",
   "away": "Jersey Devil Navy",
   "time": "2026-09-30T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Home Court",
   "away": "Pickleball Kingdom Watchung",
   "time": "2026-09-30T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Dill Dinkers Hatboro",
   "away": "Picklr Exton",
   "time": "2026-09-30T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Picklr Newark",
   "away": "Delco Turf & Pickle",
   "time": "2026-09-30T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 6,
   "home": "Jersey Devil Green",
   "away": "Ballers Philly",
   "time": "2026-09-30T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Forward",
   "away": "Picklr Exton",
   "time": "2026-10-07T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Premiere",
   "away": "Jersey Pickleball Club",
   "time": "2026-10-07T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "LBF Pickleball",
   "away": "Flemington",
   "time": "2026-10-07T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Montville",
   "away": "Pickleball Kingdom Lehigh Valley",
   "time": "2026-10-07T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Bounce Malvern",
   "away": "ACE Downingtown",
   "time": "2026-10-07T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Bounce Philly",
   "away": "Pickle Juice Blackwood",
   "time": "2026-10-07T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Jersey Devil Green",
   "away": "APC Garden State",
   "time": "2026-10-07T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Pickleball Kingdom Watchung",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-10-07T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Pickle House",
   "away": "PKLD",
   "time": "2026-10-07T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Home Court",
   "away": "Picklr Fair Lawn",
   "time": "2026-10-07T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Pickleball Kingdom Tinton Falls",
   "away": "Dill Dinkers Freehold",
   "time": "2026-10-07T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Dill Dinkers Hatboro",
   "away": "Delco Turf & Pickle",
   "time": "2026-10-07T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Ballers Philly",
   "away": "Bounce Tempest",
   "time": "2026-10-07T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 7,
   "home": "Players Courtyard",
   "away": "Jersey Devil Navy",
   "time": "2026-10-07T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Pickleball Kingdom Lehigh Valley",
   "time": "2026-10-14T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Picklr Fair Lawn",
   "away": "Pickleball Kingdom Watchung",
   "time": "2026-10-14T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Premiere",
   "away": "Dill Dinkers Freehold",
   "time": "2026-10-14T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Bounce Philly",
   "away": "Bounce Tempest",
   "time": "2026-10-14T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Delco Turf & Pickle",
   "away": "Picklr Exton",
   "time": "2026-10-14T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Pickleball Kingdom Tinton Falls",
   "away": "Picklr Manahawkin",
   "time": "2026-10-14T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Jersey Pickleball Club",
   "away": "PKLD",
   "time": "2026-10-14T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Jersey Devil Green",
   "away": "Players Courtyard",
   "time": "2026-10-14T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Bounce Malvern",
   "away": "Dill Dinkers Hatboro",
   "time": "2026-10-14T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Home Court",
   "away": "Flemington",
   "time": "2026-10-14T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Pickle Juice Blackwood",
   "away": "Ballers Philly",
   "time": "2026-10-14T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Montville",
   "away": "LBF Pickleball",
   "time": "2026-10-14T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "ACE Downingtown",
   "away": "Picklr Newark",
   "time": "2026-10-14T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 8,
   "home": "Jersey Devil Navy",
   "away": "APC Garden State",
   "time": "2026-10-14T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Pickleball Kingdom Lehigh Valley",
   "away": "LBF Pickleball",
   "time": "2026-10-21T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Picklr Manahawkin",
   "away": "Pickle House",
   "time": "2026-10-21T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Forward",
   "away": "Picklr Newark",
   "time": "2026-10-21T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Picklr Fair Lawn",
   "time": "2026-10-21T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Home Court",
   "away": "Montville",
   "time": "2026-10-21T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Pickleball Kingdom Watchung",
   "away": "Flemington",
   "time": "2026-10-21T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Bounce Malvern",
   "away": "Delco Turf & Pickle",
   "time": "2026-10-21T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Jersey Pickleball Club",
   "away": "Dill Dinkers Freehold",
   "time": "2026-10-21T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Jersey Devil Navy",
   "away": "Jersey Devil Green",
   "time": "2026-10-21T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Pickleball Kingdom Tinton Falls",
   "away": "Premiere",
   "time": "2026-10-21T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Ballers Philly",
   "away": "Players Courtyard",
   "time": "2026-10-21T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Pickle Juice Blackwood",
   "away": "Bounce Tempest",
   "time": "2026-10-21T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "ACE Downingtown",
   "away": "Dill Dinkers Hatboro",
   "time": "2026-10-21T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "APC Garden State",
   "away": "Bounce Philly",
   "time": "2026-10-21T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Picklr Manahawkin",
   "away": "Premiere",
   "time": "2026-10-24T09:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "LBF Pickleball",
   "away": "Pickleball Kingdom Watchung",
   "time": "2026-10-24T09:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Picklr Newark",
   "away": "Dill Dinkers Hatboro",
   "time": "2026-10-24T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Pickle House",
   "away": "Pickleball Kingdom Tinton Falls",
   "time": "2026-10-24T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "APC Garden State",
   "away": "Ballers Philly",
   "time": "2026-10-24T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Flemington",
   "away": "Montville",
   "time": "2026-10-24T12:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Players Courtyard",
   "away": "Bounce Tempest",
   "time": "2026-10-24T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Picklr Exton",
   "away": "Bounce Malvern",
   "time": "2026-10-24T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Forward",
   "away": "ACE Downingtown",
   "time": "2026-10-24T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Pickleball Kingdom Lehigh Valley",
   "away": "Picklr Fair Lawn",
   "time": "2026-10-24T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Home Court",
   "time": "2026-10-24T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Jersey Devil Navy",
   "away": "Bounce Philly",
   "time": "2026-10-24T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "Jersey Devil Green",
   "away": "Pickle Juice Blackwood",
   "time": "2026-10-24T15:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 9,
   "home": "PKLD",
   "away": "Dill Dinkers Freehold",
   "time": "2026-10-24T18:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Dill Dinkers Freehold",
   "away": "Pickleball Kingdom Tinton Falls",
   "time": "2026-10-28T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Pickleball Kingdom Hillsborough",
   "away": "Montville",
   "time": "2026-10-28T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Picklr Fair Lawn",
   "away": "Flemington",
   "time": "2026-10-28T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "PKLD",
   "away": "Pickle House",
   "time": "2026-10-28T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Jersey Pickleball Club",
   "away": "Premiere",
   "time": "2026-10-28T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "ACE Downingtown",
   "away": "Bounce Malvern",
   "time": "2026-10-28T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Delco Turf & Pickle",
   "away": "Dill Dinkers Hatboro",
   "time": "2026-10-28T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Players Courtyard",
   "away": "Jersey Devil Green",
   "time": "2026-10-28T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Pickleball Kingdom Watchung",
   "away": "Pickleball Kingdom Lehigh Valley",
   "time": "2026-10-28T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "APC Garden State",
   "away": "Jersey Devil Navy",
   "time": "2026-10-28T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Ballers Philly",
   "away": "Pickle Juice Blackwood",
   "time": "2026-10-28T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Picklr Exton",
   "away": "Forward",
   "time": "2026-10-28T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Bounce Tempest",
   "away": "Bounce Philly",
   "time": "2026-10-28T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 10,
   "home": "Home Court",
   "away": "LBF Pickleball",
   "time": "2026-10-28T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Flemington",
   "away": "Home Court",
   "time": "2026-11-04T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "LBF Pickleball",
   "away": "Montville",
   "time": "2026-11-04T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Pickleball Kingdom Lehigh Valley",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-11-04T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Picklr Manahawkin",
   "away": "Dill Dinkers Freehold",
   "time": "2026-11-04T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "PKLD",
   "away": "Pickleball Kingdom Tinton Falls",
   "time": "2026-11-04T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "APC Garden State",
   "away": "Jersey Devil Green",
   "time": "2026-11-04T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Picklr Exton",
   "away": "ACE Downingtown",
   "time": "2026-11-04T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Jersey Devil Navy",
   "away": "Players Courtyard",
   "time": "2026-11-04T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Delco Turf & Pickle",
   "away": "Forward",
   "time": "2026-11-04T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Picklr Newark",
   "away": "Bounce Malvern",
   "time": "2026-11-04T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Bounce Tempest",
   "away": "Ballers Philly",
   "time": "2026-11-04T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Pickle House",
   "away": "Jersey Pickleball Club",
   "time": "2026-11-04T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Pickleball Kingdom Watchung",
   "away": "Picklr Fair Lawn",
   "time": "2026-11-04T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 11,
   "home": "Pickle Juice Blackwood",
   "away": "Bounce Philly",
   "time": "2026-11-04T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Flemington",
   "away": "Pickleball Kingdom Hillsborough",
   "time": "2026-11-11T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Picklr Fair Lawn",
   "away": "LBF Pickleball",
   "time": "2026-11-11T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Premiere",
   "away": "Pickleball Kingdom Tinton Falls",
   "time": "2026-11-11T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Dill Dinkers Freehold",
   "away": "Jersey Pickleball Club",
   "time": "2026-11-11T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Pickleball Kingdom Lehigh Valley",
   "away": "Home Court",
   "time": "2026-11-11T19:00:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Pickle House",
   "away": "Picklr Manahawkin",
   "time": "2026-11-11T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Pickle Juice Blackwood",
   "away": "APC Garden State",
   "time": "2026-11-11T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Bounce Philly",
   "away": "Players Courtyard",
   "time": "2026-11-11T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Jersey Devil Navy",
   "away": "Bounce Tempest",
   "time": "2026-11-11T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Delco Turf & Pickle",
   "away": "Bounce Malvern",
   "time": "2026-11-11T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Dill Dinkers Hatboro",
   "away": "ACE Downingtown",
   "time": "2026-11-11T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Picklr Newark",
   "away": "Forward",
   "time": "2026-11-11T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Ballers Philly",
   "away": "Jersey Devil Green",
   "time": "2026-11-11T19:30:00",
   "complete": false
  },
  {
   "result": null,
   "week": 12,
   "home": "Montville",
   "away": "Pickleball Kingdom Watchung",
   "time": "2026-11-11T19:30:00",
   "complete": false
  }
 ],
 "playoffs": [],
 "extraPlayerIds": {
  "Chuang Li": "0534f11f-c60b-49bf-8407-3d2ce0f1b7a0",
  "Andrea Smith": "1318bc01-f23f-47da-94cb-ac71b8f3e694",
  "Brittany Jacobs": "15dcc305-70cf-4eb1-bde4-a50a30130f3a",
  "Addy Aquino": "1f688eb7-dd8a-4b49-a2a5-98cac5782835",
  "Ismael Hernandez": "262cf0be-4906-46fb-ab84-f4aa760bac58",
  "Susie Mcconaghy": "2f3d9529-6c37-4b2b-8394-a6be2f207b8a",
  "Yang Ruan": "313153f7-7e8f-4e60-9340-0e0d1a43d6be",
  "Frank Kong": "33baac8e-fe7f-4c97-8443-0687777b2ed2",
  "Joey Remshard": "3d8b9697-0eea-46fa-8ddf-cd9bb6e87190",
  "Sally Webb": "3f572d6d-ebf9-407f-a3e0-999a7b995802",
  "Austin Schaefer": "44dcab2c-2140-4a79-890a-9b289312c58e",
  "Sab Natarajan": "4c59cbef-6461-4b0e-a656-d7b5833bf886",
  "Armand Bigornia": "56f658f4-d84c-4a9a-89f4-fd29c03efc17",
  "John Manuzza": "5d3156e6-7886-4184-9d2f-3ec44d72bb3b",
  "Alexa Laniado": "5da3615e-9cd4-44f9-9e7d-637e270153ce",
  "Christopher Balan": "5fa834df-5bb9-4aac-9980-66962cb6f0a1",
  "Saaketh Koundinya Gundavarapu": "67730cd7-1040-4a80-a665-53e124b526cd",
  "Andrew Fagan": "7a5bce6c-3635-47d0-bff5-59c802a8ae0b",
  "Guitta Barghash": "8011677b-64c0-467d-8d54-c32da035effe",
  "Duy Duong": "81de0241-17f5-4c13-9214-0b914709e971",
  "Utkarsh Patel": "82beb69d-fdf5-4102-a1f8-612ce0049782",
  "Claire Nguyen": "82fdcfb0-fd11-4b4c-a12f-65bfe77ebde3",
  "Rebecca Edelstein": "86f2dec9-e26a-42ad-af36-d0bdc392196d",
  "Lay Wassana": "875dfc40-0613-428f-8bb7-0e9f29e7ee78",
  "Kim Allaga": "8b5758f2-97ae-47a9-a477-f51a8e7c8f78",
  "Rylee Boles": "8dc5085d-c5f5-4346-86df-bf213a86f974",
  "Terri Briggs": "8dc50a96-2971-422c-aba4-b519ae2f2748",
  "Thuy Nguyen": "8ea3584b-11a3-4d0c-ace0-bce5bd3a00f1",
  "Shawn Nisse": "948031fd-d3bf-4cdf-8b58-ebd9b0a07246",
  "Nancy Luyando": "9d3e1b63-681f-4bd7-a450-332b1f375a29",
  "Andrea Bramante": "9e585ba7-f38c-4948-89bc-2947c22df08b",
  "Solomon Kam": "9ea93639-7caf-4530-9b10-e89f11ff5050",
  "George Mandl": "a0019103-8887-4a15-bbe0-d1c35cdd7b0d",
  "Albert Fuimano": "a0bb8173-1260-4bb2-aa72-ec83fb0925a4",
  "Tyler Raboy": "aba00534-f2c3-4f27-a9ce-6d9b8a440258",
  "Lucy Shao": "adeb473c-c162-4d73-bbc1-96ffbd94f53f",
  "Andrew Spencer": "b1af592e-2dc0-4273-9b6e-13b8a6eff673",
  "Corey Chen": "b549a93c-acec-4419-9e30-5d8375518d2d",
  "Nate Mounelasy": "b58e4abc-d616-4b3d-b8f1-7ae0e222d8b8",
  "Fernando Castillo": "be5a3617-d9e3-4515-b7d3-f14b99cb1d2e",
  "Todd Fagan": "bf370c20-c27a-4555-8410-5073dc29d1d0",
  "Catherine Wang": "bfdfbea0-92ee-43e3-a30f-bec197d4fa0a",
  "Jim Fett": "c14e8948-35aa-4a6f-b8ac-a5c41c75063f",
  "David Martinez": "c617d3cc-64e2-490e-a0f9-90eb87662965",
  "Paul Mastaj": "ce698888-9c10-4116-9e16-e4507e641722",
  "Zhihong Ge": "d1f3735c-669b-4a40-b4ca-b40ea1da4cb7",
  "Fern Mckoy": "d528eb86-fad0-4b21-9784-c4c7cb69054d",
  "Cherine Mikhail": "d5e7f8d4-68c6-42e7-bb88-e7b43740ecbe",
  "Dawn Moore": "e4c338f7-bc8e-4e1c-bcb7-cb4aad1dbfc0",
  "Jason Garcia": "e5187be0-c18f-40d6-9648-431f60a78862",
  "Paul ColóN": "e5c9f37a-5382-4f86-97c4-07e798fe66ca",
  "Steven Doerner": "e63261d1-1ce7-4770-83a2-1b78a91aa853",
  "Chau Reyes": "e7c5198c-f8c6-40b4-bc7e-4662ead21924",
  "David Tran": "ef0a27b4-d6b4-4141-a8f1-448c710934ac",
  "Karen Xia": "f0c60706-496f-44eb-ac66-6587907b0688",
  "Rosellen Perlowitz": "f1f4f950-e704-48f2-bd4f-b9c6ccf797bf",
  "Sandra Girgis": "f232c3b8-78b0-479f-b288-93e11a8b6ccf",
  "Mike Lanza": "f43cc85e-b2cd-4258-95d6-73db263c51f2",
  "Hannah Boles": "fa7927b0-c775-4e45-a682-ce91d51d7817"
 },
 "meta": {
  "matchesPlayed": 26,
  "provisionalMatches": 5,
  "weeks": "1-2",
  "totalPlayers": 452,
  "ratingHistoryWeeks": [
   1,
   2
  ],
  "divisionSlug": "b7ca04e4",
  "hasPlayoffs": false,
  "typicalDay": "Wednesdays",
  "detailFile": "detail-b7ca04e4.js",
  "clubName": "",
  "divisionName": "3.5",
  "leagueType": "travel",
  "seasonSlug": "2026-fall",
  "seasonLabel": "Fall 2026",
  "seasonStatus": "current",
  "podCount": 4,
  "podNames": [
   "Northeast",
   "Southwest",
   "Northwest",
   "Southeast"
  ],
  "podSource": "api",
  "reportedPods": [
   "Northeast",
   "Northwest",
   "Southeast",
   "Southwest"
  ]
 }
};
  DATA.meta.asOf = "2026-09-03T04:09:16.968Z";
  window.DATA = DATA;
  window.CPL_DATASETS = window.CPL_DATASETS || {};
  window.CPL_DATASETS["b7ca04e4"] = DATA;
})();
