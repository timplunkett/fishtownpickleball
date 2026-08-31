(function () {
  const DATA = {
 "players": [
  {
   "name": "Emily Cho",
   "gender": "Female",
   "team": "Picklr Fair Lawn",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 12,
   "losses": 1,
   "pointsWon": 268,
   "totalPointsAgainst": 223,
   "mixedWins": 6,
   "mixedLosses": 1,
   "genderWins": 6,
   "genderLosses": 0,
   "clutchWins": 4,
   "clutchLosses": 0,
   "playerId": "054f09ec-133d-4128-b975-27728ddd4615",
   "winPct": 92.3,
   "diff": 45,
   "ppg": 20.6,
   "leagueRank": 46,
   "rating": 2,
   "ratingGames": 13,
   "confidence": 73,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.1
  },
  {
   "name": "Katherine Cho",
   "gender": "Female",
   "team": "Picklr Fair Lawn",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 11,
   "losses": 1,
   "pointsWon": 249,
   "totalPointsAgainst": 201,
   "mixedWins": 6,
   "mixedLosses": 0,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 5,
   "clutchLosses": 0,
   "playerId": "925da4ca-a96c-4e48-81be-45bed2b8cfd5",
   "winPct": 91.7,
   "diff": 48,
   "ppg": 20.8,
   "leagueRank": 42,
   "rating": 1.9,
   "ratingGames": 12,
   "confidence": 70,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": 0.2
  },
  {
   "name": "Allison Tarnoff",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 30,
   "losses": 5,
   "pointsWon": 708,
   "totalPointsAgainst": 563,
   "mixedWins": 17,
   "mixedLosses": 4,
   "genderWins": 13,
   "genderLosses": 1,
   "clutchWins": 8,
   "clutchLosses": 0,
   "winPct": 85.7,
   "diff": 145,
   "ppg": 20.2,
   "leagueRank": 1,
   "rating": 1.3,
   "ratingGames": 35,
   "confidence": 87,
   "strengthOfPartners": 2,
   "strengthOfOpponents": -0.3,
   "playerId": "001bf0ea-f8b1-402f-ab07-88ed85b2b510"
  },
  {
   "name": "Trang Nguyen (Smile)",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 6,
   "losses": 1,
   "pointsWon": 140,
   "totalPointsAgainst": 93,
   "mixedWins": 4,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "winPct": 85.7,
   "diff": 47,
   "ppg": 20,
   "leagueRank": 71,
   "rating": 1,
   "ratingGames": 7,
   "confidence": 59,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": -1.8,
   "playerId": "60eb4808-3d54-429f-9910-11b14939a230"
  },
  {
   "name": "Lincoln Mcconnell",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 11,
   "losses": 2,
   "pointsWon": 264,
   "totalPointsAgainst": 219,
   "mixedWins": 8,
   "mixedLosses": 0,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 5,
   "clutchLosses": 1,
   "playerId": "cc9ce0ac-2eea-42e5-8b88-a0d9ffc972d8",
   "winPct": 84.6,
   "diff": 45,
   "ppg": 20.3,
   "leagueRank": 69,
   "rating": 2,
   "ratingGames": 13,
   "confidence": 73,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": -0.1
  },
  {
   "name": "Kaylyn Swankoski",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 65,
   "wins": 53,
   "losses": 12,
   "pointsWon": 1316,
   "totalPointsAgainst": 985,
   "mixedWins": 28,
   "mixedLosses": 3,
   "genderWins": 25,
   "genderLosses": 9,
   "clutchWins": 10,
   "clutchLosses": 6,
   "winPct": 81.5,
   "diff": 331,
   "ppg": 20.2,
   "leagueRank": 2,
   "rating": 3,
   "ratingGames": 65,
   "confidence": 92,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": -0.2,
   "playerId": "72949bef-7cab-4942-ab45-e5203024a8d5"
  },
  {
   "name": "Hannah Nussbaum",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 43,
   "wins": 35,
   "losses": 8,
   "pointsWon": 877,
   "totalPointsAgainst": 693,
   "mixedWins": 13,
   "mixedLosses": 3,
   "genderWins": 22,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 4,
   "winPct": 81.4,
   "diff": 184,
   "ppg": 20.4,
   "leagueRank": 4,
   "rating": 2.5,
   "ratingGames": 43,
   "confidence": 89,
   "strengthOfPartners": 2.5,
   "strengthOfOpponents": 0.5,
   "playerId": "84b7c449-501c-438d-a3eb-ee67cc92fa0e"
  },
  {
   "name": "Liz Chen",
   "gender": "Female",
   "team": "Pickleball Kingdom Watchung",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 10,
   "wins": 8,
   "losses": 2,
   "pointsWon": 201,
   "totalPointsAgainst": 170,
   "mixedWins": 6,
   "mixedLosses": 0,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 5,
   "clutchLosses": 1,
   "playerId": "af8a1a22-e434-42d2-9868-4e746b8f9b1a",
   "winPct": 80,
   "diff": 31,
   "ppg": 20.1,
   "leagueRank": 100,
   "rating": 3.2,
   "ratingGames": 10,
   "confidence": 68,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.3
  },
  {
   "name": "Clayton Schmucker",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 30,
   "losses": 8,
   "pointsWon": 764,
   "totalPointsAgainst": 601,
   "mixedWins": 10,
   "mixedLosses": 4,
   "genderWins": 20,
   "genderLosses": 4,
   "clutchWins": 6,
   "clutchLosses": 4,
   "winPct": 78.9,
   "diff": 163,
   "ppg": 20.1,
   "leagueRank": 3,
   "rating": 1.1,
   "ratingGames": 38,
   "confidence": 88,
   "strengthOfPartners": 1.7,
   "strengthOfOpponents": -0.7,
   "playerId": "0be72348-4a00-413e-bf40-df6824c3cca3"
  },
  {
   "name": "Dylan Ashbach",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 66,
   "wins": 52,
   "losses": 14,
   "pointsWon": 1338,
   "totalPointsAgainst": 1043,
   "mixedWins": 31,
   "mixedLosses": 3,
   "genderWins": 21,
   "genderLosses": 11,
   "clutchWins": 9,
   "clutchLosses": 7,
   "winPct": 78.8,
   "diff": 295,
   "ppg": 20.3,
   "leagueRank": 5,
   "rating": 3.6,
   "ratingGames": 66,
   "confidence": 92,
   "strengthOfPartners": 1.9,
   "strengthOfOpponents": 0.6,
   "playerId": "d9f11069-342b-4bf7-9a7a-cbeece0396be"
  },
  {
   "name": "Stephanie Bramer",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 11,
   "losses": 3,
   "pointsWon": 282,
   "totalPointsAgainst": 241,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 7,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "037ccb1c-3e34-4ba1-8d48-aaa6ab330c26",
   "winPct": 78.6,
   "diff": 41,
   "ppg": 20.1,
   "leagueRank": 59,
   "rating": 1.4,
   "ratingGames": 14,
   "confidence": 75,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.3
  },
  {
   "name": "Nahla Bernhardt",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 51,
   "wins": 39,
   "losses": 12,
   "pointsWon": 1018,
   "totalPointsAgainst": 815,
   "mixedWins": 22,
   "mixedLosses": 3,
   "genderWins": 17,
   "genderLosses": 9,
   "clutchWins": 7,
   "clutchLosses": 4,
   "winPct": 76.5,
   "diff": 203,
   "ppg": 20,
   "leagueRank": 7,
   "rating": 2.3,
   "ratingGames": 51,
   "confidence": 90,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0,
   "playerId": "9dae8c17-6878-473a-83e9-a43b434f876b"
  },
  {
   "name": "Jonah Fliegelman",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 35,
   "losses": 11,
   "pointsWon": 914,
   "totalPointsAgainst": 718,
   "mixedWins": 16,
   "mixedLosses": 4,
   "genderWins": 19,
   "genderLosses": 7,
   "clutchWins": 9,
   "clutchLosses": 3,
   "winPct": 76.1,
   "diff": 196,
   "ppg": 19.9,
   "leagueRank": 6,
   "rating": 2.3,
   "ratingGames": 46,
   "confidence": 90,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": -0.1,
   "playerId": "1070bcd5-fdff-4adc-8d03-460a208fe4e8"
  },
  {
   "name": "Ozair Ibrahim",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 28,
   "losses": 9,
   "pointsWon": 722,
   "totalPointsAgainst": 578,
   "mixedWins": 15,
   "mixedLosses": 4,
   "genderWins": 13,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 75.7,
   "diff": 144,
   "ppg": 19.5,
   "leagueRank": 8,
   "rating": 2,
   "ratingGames": 37,
   "confidence": 87,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.3,
   "playerId": "c6fc34a8-e441-4850-b37c-c29b35563989"
  },
  {
   "name": "Lily Yip",
   "gender": "Female",
   "team": "Pickleball Kingdom Watchung",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 6,
   "losses": 2,
   "pointsWon": 162,
   "totalPointsAgainst": 136,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 75,
   "diff": 26,
   "ppg": 20.3,
   "leagueRank": 129,
   "rating": 1.8,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.3,
   "playerId": "78f3d90b-c12f-4936-8283-659b53e37384"
  },
  {
   "name": "Brandon Fooks",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 6,
   "losses": 2,
   "pointsWon": 162,
   "totalPointsAgainst": 144,
   "mixedWins": 3,
   "mixedLosses": 1,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 75,
   "diff": 18,
   "ppg": 20.3,
   "leagueRank": 128,
   "rating": 1.4,
   "ratingGames": 8,
   "confidence": 60,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.6,
   "playerId": "ac59de0a-b153-4f70-b9b4-911cacce7114"
  },
  {
   "name": "Nathan Law",
   "gender": "Male",
   "team": "ACE",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 70,
   "wins": 52,
   "losses": 18,
   "pointsWon": 1396,
   "totalPointsAgainst": 1178,
   "mixedWins": 29,
   "mixedLosses": 7,
   "genderWins": 23,
   "genderLosses": 11,
   "clutchWins": 15,
   "clutchLosses": 9,
   "winPct": 74.3,
   "diff": 218,
   "ppg": 19.9,
   "leagueRank": 15,
   "rating": 3.5,
   "ratingGames": 70,
   "confidence": 92,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.5,
   "playerId": "3c81d27f-9e68-439b-a476-f5ac1a54f45a"
  },
  {
   "name": "Kerrin Maurer",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 45,
   "wins": 33,
   "losses": 12,
   "pointsWon": 898,
   "totalPointsAgainst": 750,
   "mixedWins": 16,
   "mixedLosses": 8,
   "genderWins": 17,
   "genderLosses": 4,
   "clutchWins": 7,
   "clutchLosses": 6,
   "winPct": 73.3,
   "diff": 148,
   "ppg": 20,
   "leagueRank": 9,
   "rating": 2.3,
   "ratingGames": 45,
   "confidence": 89,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0.3,
   "playerId": "1d63ce3d-20c2-40ae-94ca-e8e6e458004e"
  },
  {
   "name": "Johanna Wagner",
   "gender": "Female",
   "team": "Picklr Fair Lawn",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 30,
   "losses": 11,
   "pointsWon": 802,
   "totalPointsAgainst": 719,
   "mixedWins": 16,
   "mixedLosses": 4,
   "genderWins": 14,
   "genderLosses": 7,
   "clutchWins": 8,
   "clutchLosses": 7,
   "winPct": 73.2,
   "diff": 83,
   "ppg": 19.6,
   "leagueRank": 22,
   "rating": 1.9,
   "ratingGames": 41,
   "confidence": 89,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.3,
   "playerId": "e447eb0f-dc19-4616-a7f4-b53de776db3b"
  },
  {
   "name": "Zach Mcgowan",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 16,
   "losses": 6,
   "pointsWon": 436,
   "totalPointsAgainst": 360,
   "mixedWins": 7,
   "mixedLosses": 3,
   "genderWins": 9,
   "genderLosses": 3,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 72.7,
   "diff": 76,
   "ppg": 19.8,
   "leagueRank": 25,
   "rating": 2.5,
   "ratingGames": 22,
   "confidence": 81,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.1,
   "playerId": "e71a8785-5959-4607-9af3-e3ac9e3c6d86"
  },
  {
   "name": "Claire Malone",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 51,
   "wins": 37,
   "losses": 14,
   "pointsWon": 1022,
   "totalPointsAgainst": 843,
   "mixedWins": 16,
   "mixedLosses": 9,
   "genderWins": 21,
   "genderLosses": 5,
   "clutchWins": 9,
   "clutchLosses": 7,
   "winPct": 72.5,
   "diff": 179,
   "ppg": 20,
   "leagueRank": 11,
   "rating": 2.7,
   "ratingGames": 51,
   "confidence": 91,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.1,
   "playerId": "72a5a44f-5c46-49c4-bf9c-6d40e944ee06"
  },
  {
   "name": "Jeff Comer",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 13,
   "losses": 5,
   "pointsWon": 348,
   "totalPointsAgainst": 287,
   "mixedWins": 6,
   "mixedLosses": 2,
   "genderWins": 7,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 1,
   "winPct": 72.2,
   "diff": 61,
   "ppg": 19.3,
   "leagueRank": 54,
   "rating": 2.2,
   "ratingGames": 18,
   "confidence": 78,
   "strengthOfPartners": 2,
   "strengthOfOpponents": 0.6,
   "playerId": "afacd45c-4801-4062-9401-f721e8d73d08"
  },
  {
   "name": "Kenoa Tio",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 43,
   "wins": 31,
   "losses": 12,
   "pointsWon": 847,
   "totalPointsAgainst": 726,
   "mixedWins": 19,
   "mixedLosses": 7,
   "genderWins": 12,
   "genderLosses": 5,
   "clutchWins": 7,
   "clutchLosses": 5,
   "winPct": 72.1,
   "diff": 121,
   "ppg": 19.7,
   "leagueRank": 14,
   "rating": 1.3,
   "ratingGames": 43,
   "confidence": 89,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0,
   "playerId": "10e9980e-34bf-43ea-b246-3280bca79efb"
  },
  {
   "name": "David Lavy",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 71,
   "wins": 51,
   "losses": 20,
   "pointsWon": 1408,
   "totalPointsAgainst": 1176,
   "mixedWins": 25,
   "mixedLosses": 10,
   "genderWins": 26,
   "genderLosses": 10,
   "clutchWins": 17,
   "clutchLosses": 9,
   "winPct": 71.8,
   "diff": 232,
   "ppg": 19.8,
   "leagueRank": 16,
   "rating": 3.1,
   "ratingGames": 71,
   "confidence": 93,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.4,
   "playerId": "e28e2d63-947f-490f-9f69-14fb6093b505"
  },
  {
   "name": "Yoyo Shen",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 49,
   "wins": 35,
   "losses": 14,
   "pointsWon": 971,
   "totalPointsAgainst": 808,
   "mixedWins": 15,
   "mixedLosses": 10,
   "genderWins": 20,
   "genderLosses": 4,
   "clutchWins": 6,
   "clutchLosses": 8,
   "winPct": 71.4,
   "diff": 163,
   "ppg": 19.8,
   "leagueRank": 13,
   "rating": 2.9,
   "ratingGames": 49,
   "confidence": 90,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.3,
   "playerId": "9d47a1aa-c44c-4ddd-8953-dc40f79b1016"
  },
  {
   "name": "Jessica Hendry",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 56,
   "wins": 40,
   "losses": 16,
   "pointsWon": 1105,
   "totalPointsAgainst": 960,
   "mixedWins": 18,
   "mixedLosses": 9,
   "genderWins": 22,
   "genderLosses": 7,
   "clutchWins": 15,
   "clutchLosses": 9,
   "winPct": 71.4,
   "diff": 145,
   "ppg": 19.7,
   "leagueRank": 19,
   "rating": 2.3,
   "ratingGames": 56,
   "confidence": 91,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.2,
   "playerId": "d8d64088-d1c4-4e85-a742-9ebe70839fe3"
  },
  {
   "name": "Pearly Leung",
   "gender": "Female",
   "team": "Picklr Fair Lawn",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 10,
   "losses": 4,
   "pointsWon": 268,
   "totalPointsAgainst": 251,
   "mixedWins": 5,
   "mixedLosses": 2,
   "genderWins": 5,
   "genderLosses": 2,
   "clutchWins": 4,
   "clutchLosses": 0,
   "playerId": "581070ec-7106-4558-bc86-4df0675682cb",
   "winPct": 71.4,
   "diff": 17,
   "ppg": 19.1,
   "leagueRank": 114,
   "rating": 2.6,
   "ratingGames": 14,
   "confidence": 74,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 1.7
  },
  {
   "name": "Bruno Casino",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 29,
   "losses": 12,
   "pointsWon": 815,
   "totalPointsAgainst": 704,
   "mixedWins": 16,
   "mixedLosses": 6,
   "genderWins": 13,
   "genderLosses": 6,
   "clutchWins": 6,
   "clutchLosses": 7,
   "winPct": 70.7,
   "diff": 111,
   "ppg": 19.9,
   "leagueRank": 23,
   "rating": 3.6,
   "ratingGames": 41,
   "confidence": 88,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.7,
   "playerId": "d195dff9-7f38-402c-8164-44640f89c3fa"
  },
  {
   "name": "Shreyas Pani",
   "gender": "Male",
   "team": "Monroe",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 51,
   "wins": 36,
   "losses": 15,
   "pointsWon": 1001,
   "totalPointsAgainst": 884,
   "mixedWins": 19,
   "mixedLosses": 7,
   "genderWins": 17,
   "genderLosses": 8,
   "clutchWins": 12,
   "clutchLosses": 6,
   "winPct": 70.6,
   "diff": 117,
   "ppg": 19.6,
   "leagueRank": 26,
   "rating": 2.8,
   "ratingGames": 51,
   "confidence": 91,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.3,
   "playerId": "3cebd01c-ff32-4544-b6a6-2a68152b2ee5"
  },
  {
   "name": "Ashley Georgevich",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 50,
   "wins": 35,
   "losses": 15,
   "pointsWon": 992,
   "totalPointsAgainst": 845,
   "mixedWins": 18,
   "mixedLosses": 7,
   "genderWins": 17,
   "genderLosses": 8,
   "clutchWins": 14,
   "clutchLosses": 8,
   "winPct": 70,
   "diff": 147,
   "ppg": 19.8,
   "leagueRank": 17,
   "rating": 2.5,
   "ratingGames": 50,
   "confidence": 90,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": 0.8,
   "playerId": "6953916c-867d-42fe-89ad-444aee6d40e8"
  },
  {
   "name": "Andrew Wakefield",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 21,
   "losses": 9,
   "pointsWon": 600,
   "totalPointsAgainst": 482,
   "mixedWins": 13,
   "mixedLosses": 5,
   "genderWins": 8,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 6,
   "winPct": 70,
   "diff": 118,
   "ppg": 20,
   "leagueRank": 10,
   "rating": 1.8,
   "ratingGames": 30,
   "confidence": 86,
   "strengthOfPartners": 1.8,
   "strengthOfOpponents": 0,
   "playerId": "5f429a7f-18c6-49e3-a804-6aa2a930f09c"
  },
  {
   "name": "Anisha Malhotra",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 21,
   "losses": 9,
   "pointsWon": 594,
   "totalPointsAgainst": 527,
   "mixedWins": 8,
   "mixedLosses": 6,
   "genderWins": 13,
   "genderLosses": 3,
   "clutchWins": 6,
   "clutchLosses": 6,
   "playerId": "2aa8b268-8c06-4453-9706-048009bf6af3",
   "winPct": 70,
   "diff": 67,
   "ppg": 19.8,
   "leagueRank": 12,
   "rating": 2.3,
   "ratingGames": 30,
   "confidence": 86,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.2
  },
  {
   "name": "Chris Bucaro",
   "gender": "Male",
   "team": "Monroe",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 56,
   "wins": 39,
   "losses": 17,
   "pointsWon": 1100,
   "totalPointsAgainst": 1007,
   "mixedWins": 19,
   "mixedLosses": 8,
   "genderWins": 20,
   "genderLosses": 9,
   "clutchWins": 15,
   "clutchLosses": 6,
   "winPct": 69.6,
   "diff": 93,
   "ppg": 19.6,
   "leagueRank": 34,
   "rating": 3.7,
   "ratingGames": 56,
   "confidence": 91,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 1.2,
   "playerId": "0e43724a-794d-4218-9da4-d0e83d35ffb2"
  },
  {
   "name": "Katarzyna Clevenger",
   "gender": "Female",
   "team": "ACE",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 20,
   "losses": 9,
   "pointsWon": 564,
   "totalPointsAgainst": 503,
   "mixedWins": 9,
   "mixedLosses": 6,
   "genderWins": 11,
   "genderLosses": 3,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 69,
   "diff": 61,
   "ppg": 19.4,
   "leagueRank": 28,
   "rating": 1.3,
   "ratingGames": 29,
   "confidence": 85,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.5,
   "playerId": "adc8c45e-c260-49fe-a318-ee643df2b86f"
  },
  {
   "name": "Beatriz Lopez Albarracin",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 13,
   "losses": 6,
   "pointsWon": 376,
   "totalPointsAgainst": 312,
   "mixedWins": 8,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 68.4,
   "diff": 64,
   "ppg": 19.8,
   "leagueRank": 64,
   "rating": 4.5,
   "ratingGames": 19,
   "confidence": 80,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 1.6,
   "playerId": "73603f18-0adb-48db-8375-1a6deff6ddbb"
  },
  {
   "name": "Lissa Eagles",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 69,
   "wins": 47,
   "losses": 22,
   "pointsWon": 1362,
   "totalPointsAgainst": 1183,
   "mixedWins": 18,
   "mixedLosses": 14,
   "genderWins": 29,
   "genderLosses": 8,
   "clutchWins": 13,
   "clutchLosses": 10,
   "winPct": 68.1,
   "diff": 179,
   "ppg": 19.7,
   "leagueRank": 18,
   "rating": 1.4,
   "ratingGames": 69,
   "confidence": 92,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.1,
   "playerId": "9ec39678-a120-45de-b8a5-897b8cf900cd"
  },
  {
   "name": "Stephen Mcnamara",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 31,
   "losses": 15,
   "pointsWon": 898,
   "totalPointsAgainst": 819,
   "mixedWins": 19,
   "mixedLosses": 7,
   "genderWins": 12,
   "genderLosses": 8,
   "clutchWins": 12,
   "clutchLosses": 5,
   "winPct": 67.4,
   "diff": 79,
   "ppg": 19.5,
   "leagueRank": 30,
   "rating": 2,
   "ratingGames": 46,
   "confidence": 90,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.7,
   "playerId": "245e949d-15e7-411e-9751-e19ca709f2cb"
  },
  {
   "name": "Taylor Hartman",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 76,
   "wins": 51,
   "losses": 25,
   "pointsWon": 1511,
   "totalPointsAgainst": 1339,
   "mixedWins": 21,
   "mixedLosses": 16,
   "genderWins": 30,
   "genderLosses": 9,
   "clutchWins": 18,
   "clutchLosses": 14,
   "winPct": 67.1,
   "diff": 172,
   "ppg": 19.9,
   "leagueRank": 20,
   "rating": 1.3,
   "ratingGames": 76,
   "confidence": 93,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.3,
   "playerId": "3bf2f55b-b253-4d2a-b1b9-d5953ef1b8ec"
  },
  {
   "name": "Tess Fisher",
   "gender": "Female",
   "team": "Four Seasons",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 84,
   "wins": 56,
   "losses": 28,
   "pointsWon": 1625,
   "totalPointsAgainst": 1470,
   "mixedWins": 28,
   "mixedLosses": 15,
   "genderWins": 28,
   "genderLosses": 13,
   "clutchWins": 22,
   "clutchLosses": 9,
   "winPct": 66.7,
   "diff": 155,
   "ppg": 19.3,
   "leagueRank": 39,
   "rating": 2.7,
   "ratingGames": 84,
   "confidence": 93,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": -0.2,
   "playerId": "661f7bd0-74d3-432b-acc7-da0e3b3e36ea"
  },
  {
   "name": "Nick Dehmer",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 51,
   "wins": 34,
   "losses": 17,
   "pointsWon": 999,
   "totalPointsAgainst": 855,
   "mixedWins": 19,
   "mixedLosses": 6,
   "genderWins": 15,
   "genderLosses": 11,
   "clutchWins": 4,
   "clutchLosses": 9,
   "winPct": 66.7,
   "diff": 144,
   "ppg": 19.6,
   "leagueRank": 21,
   "rating": 2.3,
   "ratingGames": 51,
   "confidence": 90,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.4,
   "playerId": "3cd8477e-8352-44a7-916f-ac2e3c3005f2"
  },
  {
   "name": "Dan Presuto",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 8,
   "losses": 4,
   "pointsWon": 225,
   "totalPointsAgainst": 207,
   "mixedWins": 3,
   "mixedLosses": 3,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "1b9ae752-9cd4-49e8-aac7-136e5742f9ee",
   "winPct": 66.7,
   "diff": 18,
   "ppg": 18.8,
   "leagueRank": 136,
   "rating": -0.9,
   "ratingGames": 12,
   "confidence": 71,
   "strengthOfPartners": 1.5,
   "strengthOfOpponents": -0.6
  },
  {
   "name": "Jung Jun",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 112,
   "totalPointsAgainst": 101,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 0,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "595f8331-2842-4ee3-a208-19408ab7b769",
   "winPct": 66.7,
   "diff": 11,
   "ppg": 18.7,
   "leagueRank": 167,
   "rating": 2.5,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 1.2
  },
  {
   "name": "Conor Landrigan",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 4,
   "losses": 2,
   "pointsWon": 113,
   "totalPointsAgainst": 116,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 3,
   "clutchLosses": 0,
   "playerId": "931df78f-b759-497d-ba8d-be7d3f41f668",
   "winPct": 66.7,
   "diff": -3,
   "ppg": 18.8,
   "leagueRank": 181,
   "rating": 0.6,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 1.3
  },
  {
   "name": "Lou Frignito",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 59,
   "wins": 39,
   "losses": 20,
   "pointsWon": 1136,
   "totalPointsAgainst": 1017,
   "mixedWins": 21,
   "mixedLosses": 9,
   "genderWins": 18,
   "genderLosses": 11,
   "clutchWins": 10,
   "clutchLosses": 5,
   "winPct": 66.1,
   "diff": 119,
   "ppg": 19.3,
   "leagueRank": 36,
   "rating": 2.3,
   "ratingGames": 59,
   "confidence": 91,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.1,
   "playerId": "1afca308-dca6-4828-946a-0ca6ad1b0c44"
  },
  {
   "name": "Alyssa Tartaglia",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 19,
   "losses": 10,
   "pointsWon": 560,
   "totalPointsAgainst": 512,
   "mixedWins": 13,
   "mixedLosses": 7,
   "genderWins": 6,
   "genderLosses": 3,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 65.5,
   "diff": 48,
   "ppg": 19.3,
   "leagueRank": 27,
   "rating": -1.9,
   "ratingGames": 29,
   "confidence": 85,
   "strengthOfPartners": 2.1,
   "strengthOfOpponents": -0.9,
   "playerId": "881ed39f-f9fc-4e9d-8ed3-d13d9ebc7b13"
  },
  {
   "name": "Dustin Rabinowitz",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 43,
   "wins": 28,
   "losses": 15,
   "pointsWon": 810,
   "totalPointsAgainst": 753,
   "mixedWins": 12,
   "mixedLosses": 8,
   "genderWins": 16,
   "genderLosses": 7,
   "clutchWins": 8,
   "clutchLosses": 3,
   "winPct": 65.1,
   "diff": 57,
   "ppg": 18.8,
   "leagueRank": 41,
   "rating": 2.2,
   "ratingGames": 43,
   "confidence": 89,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.8,
   "playerId": "d23839c0-334b-4423-9305-0c6281523d5d"
  },
  {
   "name": "Joy Lai",
   "gender": "Female",
   "team": "Picklr Fair Lawn",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 9,
   "losses": 5,
   "pointsWon": 264,
   "totalPointsAgainst": 244,
   "mixedWins": 7,
   "mixedLosses": 1,
   "genderWins": 2,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "9383c452-bc8a-4a30-9b2c-6fff7a0daa49",
   "winPct": 64.3,
   "diff": 20,
   "ppg": 18.9,
   "leagueRank": 126,
   "rating": 1.6,
   "ratingGames": 14,
   "confidence": 74,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.9
  },
  {
   "name": "Hector Irizarry",
   "gender": "Male",
   "team": "ACE",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 44,
   "wins": 28,
   "losses": 16,
   "pointsWon": 867,
   "totalPointsAgainst": 783,
   "mixedWins": 14,
   "mixedLosses": 8,
   "genderWins": 14,
   "genderLosses": 8,
   "clutchWins": 8,
   "clutchLosses": 8,
   "winPct": 63.6,
   "diff": 84,
   "ppg": 19.7,
   "leagueRank": 31,
   "rating": 2.2,
   "ratingGames": 44,
   "confidence": 90,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.4,
   "playerId": "a50a69d0-0a8c-4241-b768-846b1591d180"
  },
  {
   "name": "Coby Golinkoff",
   "gender": "Male",
   "team": "ACE",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 7,
   "losses": 4,
   "pointsWon": 217,
   "totalPointsAgainst": 194,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 3,
   "playerId": "abe67fc6-e179-4ebc-babb-052f0666086b",
   "winPct": 63.6,
   "diff": 23,
   "ppg": 19.7,
   "leagueRank": 143,
   "rating": 1.7,
   "ratingGames": 11,
   "confidence": 70,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.5
  },
  {
   "name": "Maanav Shah",
   "gender": "Male",
   "team": "Monroe",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 63,
   "wins": 40,
   "losses": 23,
   "pointsWon": 1234,
   "totalPointsAgainst": 1137,
   "mixedWins": 21,
   "mixedLosses": 13,
   "genderWins": 19,
   "genderLosses": 10,
   "clutchWins": 15,
   "clutchLosses": 9,
   "winPct": 63.5,
   "diff": 97,
   "ppg": 19.6,
   "leagueRank": 38,
   "rating": 2.2,
   "ratingGames": 63,
   "confidence": 92,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.9,
   "playerId": "0a1270b0-26f6-4328-85bc-bf3f329a746e"
  },
  {
   "name": "Rachel Alfano",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 26,
   "losses": 15,
   "pointsWon": 784,
   "totalPointsAgainst": 743,
   "mixedWins": 10,
   "mixedLosses": 8,
   "genderWins": 16,
   "genderLosses": 7,
   "clutchWins": 12,
   "clutchLosses": 6,
   "winPct": 63.4,
   "diff": 41,
   "ppg": 19.1,
   "leagueRank": 40,
   "rating": 0.4,
   "ratingGames": 41,
   "confidence": 89,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.2,
   "playerId": "ce7aca89-06ac-4cd9-8944-a482216ffd58"
  },
  {
   "name": "Lindsey Thoeng",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 22,
   "losses": 13,
   "pointsWon": 685,
   "totalPointsAgainst": 612,
   "mixedWins": 8,
   "mixedLosses": 7,
   "genderWins": 14,
   "genderLosses": 6,
   "clutchWins": 6,
   "clutchLosses": 4,
   "winPct": 62.9,
   "diff": 73,
   "ppg": 19.6,
   "leagueRank": 24,
   "rating": 2.1,
   "ratingGames": 35,
   "confidence": 87,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.8,
   "playerId": "67977901-2346-49bb-93df-b59d31cb9a30"
  },
  {
   "name": "William Hayes",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 43,
   "wins": 27,
   "losses": 16,
   "pointsWon": 830,
   "totalPointsAgainst": 722,
   "mixedWins": 13,
   "mixedLosses": 9,
   "genderWins": 14,
   "genderLosses": 7,
   "clutchWins": 6,
   "clutchLosses": 6,
   "winPct": 62.8,
   "diff": 108,
   "ppg": 19.3,
   "leagueRank": 33,
   "rating": 2.8,
   "ratingGames": 43,
   "confidence": 89,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.7,
   "playerId": "4dfed1a1-5375-446c-98bc-69402e70e1d5"
  },
  {
   "name": "Anita Buggins",
   "gender": "Female",
   "team": "ACE",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 15,
   "losses": 9,
   "pointsWon": 475,
   "totalPointsAgainst": 429,
   "mixedWins": 7,
   "mixedLosses": 4,
   "genderWins": 8,
   "genderLosses": 5,
   "clutchWins": 6,
   "clutchLosses": 6,
   "winPct": 62.5,
   "diff": 46,
   "ppg": 19.8,
   "leagueRank": 63,
   "rating": 1.5,
   "ratingGames": 24,
   "confidence": 83,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.1,
   "playerId": "2ea90a18-1ef3-4ade-a855-2a3fd178abd7"
  },
  {
   "name": "Faraaz Javed",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 148,
   "totalPointsAgainst": 133,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "b5414a37-87df-48a6-b5ea-4e029951e9d0",
   "winPct": 62.5,
   "diff": 15,
   "ppg": 18.5,
   "leagueRank": 175,
   "rating": 0.8,
   "ratingGames": 8,
   "confidence": 61,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.4
  },
  {
   "name": "Ethan Henigan",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 159,
   "totalPointsAgainst": 144,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 2,
   "playerId": "4a1d4e3a-07b2-4575-b80d-6d160b0c7a23",
   "winPct": 62.5,
   "diff": 15,
   "ppg": 19.9,
   "leagueRank": 159,
   "rating": 0.6,
   "ratingGames": 8,
   "confidence": 61,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0
  },
  {
   "name": "Thomas Dill",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 5,
   "losses": 3,
   "pointsWon": 152,
   "totalPointsAgainst": 149,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "dbb4451c-263d-48e8-88c3-de221796f55b",
   "winPct": 62.5,
   "diff": 3,
   "ppg": 19,
   "leagueRank": 186,
   "rating": 1.4,
   "ratingGames": 8,
   "confidence": 64,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 1.4
  },
  {
   "name": "Suzi Battison",
   "gender": "Female",
   "team": "Flemington",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 53,
   "wins": 33,
   "losses": 20,
   "pointsWon": 1024,
   "totalPointsAgainst": 950,
   "mixedWins": 19,
   "mixedLosses": 8,
   "genderWins": 14,
   "genderLosses": 12,
   "clutchWins": 13,
   "clutchLosses": 8,
   "winPct": 62.3,
   "diff": 74,
   "ppg": 19.3,
   "leagueRank": 49,
   "rating": 3.7,
   "ratingGames": 53,
   "confidence": 91,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.9,
   "playerId": "40579892-d9bf-4d1d-9417-5830d5d45093"
  },
  {
   "name": "Annemarie Mccartney",
   "gender": "Female",
   "team": "ACE",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 60,
   "wins": 37,
   "losses": 23,
   "pointsWon": 1158,
   "totalPointsAgainst": 1095,
   "mixedWins": 21,
   "mixedLosses": 10,
   "genderWins": 16,
   "genderLosses": 13,
   "clutchWins": 18,
   "clutchLosses": 8,
   "winPct": 61.7,
   "diff": 63,
   "ppg": 19.3,
   "leagueRank": 44,
   "rating": 0.1,
   "ratingGames": 60,
   "confidence": 92,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.1,
   "playerId": "d08d78db-7d20-4dc2-a37b-41841c4624fd"
  },
  {
   "name": "Nari Watanabe",
   "gender": "Male",
   "team": "Four Seasons",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 8,
   "losses": 5,
   "pointsWon": 252,
   "totalPointsAgainst": 235,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 5,
   "genderLosses": 1,
   "clutchWins": 4,
   "clutchLosses": 2,
   "playerId": "5c9a76ba-c180-4015-b49e-3a2e6d1bd17b",
   "winPct": 61.5,
   "diff": 17,
   "ppg": 19.4,
   "leagueRank": 146,
   "rating": 1.2,
   "ratingGames": 13,
   "confidence": 74,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": -0.3
  },
  {
   "name": "Steven Fernandez",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 8,
   "losses": 5,
   "pointsWon": 247,
   "totalPointsAgainst": 233,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 3,
   "clutchLosses": 1,
   "winPct": 61.5,
   "diff": 14,
   "ppg": 19,
   "leagueRank": 151,
   "rating": 0.7,
   "ratingGames": 13,
   "confidence": 72,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 0.7,
   "playerId": "7a9bc90f-45eb-410a-a56b-a1b7c9a8145c"
  },
  {
   "name": "Phil Chang",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 49,
   "wins": 30,
   "losses": 19,
   "pointsWon": 973,
   "totalPointsAgainst": 897,
   "mixedWins": 17,
   "mixedLosses": 11,
   "genderWins": 13,
   "genderLosses": 8,
   "clutchWins": 12,
   "clutchLosses": 15,
   "winPct": 61.2,
   "diff": 76,
   "ppg": 19.9,
   "leagueRank": 37,
   "rating": 2.2,
   "ratingGames": 49,
   "confidence": 90,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.7,
   "playerId": "a31d5bae-fddc-44ca-9782-f3eb86667058"
  },
  {
   "name": "Mark Kilimnik",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 49,
   "wins": 30,
   "losses": 19,
   "pointsWon": 922,
   "totalPointsAgainst": 891,
   "mixedWins": 15,
   "mixedLosses": 10,
   "genderWins": 15,
   "genderLosses": 9,
   "clutchWins": 12,
   "clutchLosses": 4,
   "winPct": 61.2,
   "diff": 31,
   "ppg": 18.8,
   "leagueRank": 58,
   "rating": 1.9,
   "ratingGames": 49,
   "confidence": 91,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.9,
   "playerId": "d6c15f91-4cc9-4612-8ec3-8f4ebd4e0cc1"
  },
  {
   "name": "Chris Damato",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 72,
   "wins": 44,
   "losses": 28,
   "pointsWon": 1412,
   "totalPointsAgainst": 1285,
   "mixedWins": 22,
   "mixedLosses": 13,
   "genderWins": 22,
   "genderLosses": 15,
   "clutchWins": 15,
   "clutchLosses": 15,
   "winPct": 61.1,
   "diff": 127,
   "ppg": 19.6,
   "leagueRank": 32,
   "rating": 1.3,
   "ratingGames": 72,
   "confidence": 93,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.3,
   "playerId": "445e89c8-a23c-440c-bd3c-7eab366bdd85"
  },
  {
   "name": "Jase Volz",
   "gender": "Male",
   "team": "ACE",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 11,
   "losses": 7,
   "pointsWon": 340,
   "totalPointsAgainst": 320,
   "mixedWins": 5,
   "mixedLosses": 3,
   "genderWins": 6,
   "genderLosses": 4,
   "clutchWins": 4,
   "clutchLosses": 1,
   "winPct": 61.1,
   "diff": 20,
   "ppg": 18.9,
   "leagueRank": 98,
   "rating": 0.4,
   "ratingGames": 18,
   "confidence": 79,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.1,
   "playerId": "66f782cc-bcee-4ebf-849a-649a37bf8a8d"
  },
  {
   "name": "Michael Li",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 43,
   "wins": 26,
   "losses": 17,
   "pointsWon": 837,
   "totalPointsAgainst": 733,
   "mixedWins": 13,
   "mixedLosses": 8,
   "genderWins": 13,
   "genderLosses": 9,
   "clutchWins": 8,
   "clutchLosses": 7,
   "winPct": 60.5,
   "diff": 104,
   "ppg": 19.5,
   "leagueRank": 29,
   "rating": 1,
   "ratingGames": 43,
   "confidence": 89,
   "strengthOfPartners": 1.6,
   "strengthOfOpponents": 0.1,
   "playerId": "dc81629b-4ff7-45c4-b38e-b3b836bc0769"
  },
  {
   "name": "Ruhi Shah",
   "gender": "Female",
   "team": "Monroe",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 64,
   "wins": 38,
   "losses": 26,
   "pointsWon": 1220,
   "totalPointsAgainst": 1182,
   "mixedWins": 23,
   "mixedLosses": 9,
   "genderWins": 15,
   "genderLosses": 17,
   "clutchWins": 12,
   "clutchLosses": 8,
   "winPct": 59.4,
   "diff": 38,
   "ppg": 19.1,
   "leagueRank": 62,
   "rating": 2.5,
   "ratingGames": 64,
   "confidence": 92,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 1,
   "playerId": "a2d56e71-3895-4316-9e9e-17565fb62295"
  },
  {
   "name": "Varun Prakash",
   "gender": "Male",
   "team": "Flemington",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 16,
   "losses": 11,
   "pointsWon": 521,
   "totalPointsAgainst": 469,
   "mixedWins": 9,
   "mixedLosses": 6,
   "genderWins": 7,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 6,
   "winPct": 59.3,
   "diff": 52,
   "ppg": 19.3,
   "leagueRank": 50,
   "rating": 2.5,
   "ratingGames": 27,
   "confidence": 84,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.1,
   "playerId": "67dbfc4f-20f7-4299-bc2f-6cc70cf747ab"
  },
  {
   "name": "Chrissy Sandella",
   "gender": "Female",
   "team": "Pickleball Kingdom Watchung",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 16,
   "losses": 11,
   "pointsWon": 509,
   "totalPointsAgainst": 512,
   "mixedWins": 7,
   "mixedLosses": 5,
   "genderWins": 9,
   "genderLosses": 6,
   "clutchWins": 10,
   "clutchLosses": 4,
   "winPct": 59.3,
   "diff": -3,
   "ppg": 18.9,
   "leagueRank": 124,
   "rating": 1.3,
   "ratingGames": 27,
   "confidence": 85,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.6,
   "playerId": "bd30e236-1c20-4fa1-b9ad-f56c8613d22b"
  },
  {
   "name": "Kishan Shah",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 56,
   "wins": 33,
   "losses": 23,
   "pointsWon": 1090,
   "totalPointsAgainst": 976,
   "mixedWins": 18,
   "mixedLosses": 12,
   "genderWins": 15,
   "genderLosses": 11,
   "clutchWins": 8,
   "clutchLosses": 11,
   "winPct": 58.9,
   "diff": 114,
   "ppg": 19.5,
   "leagueRank": 35,
   "rating": 1.1,
   "ratingGames": 56,
   "confidence": 91,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0,
   "playerId": "8ca1f741-6a67-4332-9ca7-082671211098"
  },
  {
   "name": "Nick Meale",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 27,
   "losses": 19,
   "pointsWon": 852,
   "totalPointsAgainst": 810,
   "mixedWins": 8,
   "mixedLosses": 11,
   "genderWins": 19,
   "genderLosses": 8,
   "clutchWins": 8,
   "clutchLosses": 7,
   "winPct": 58.7,
   "diff": 42,
   "ppg": 18.5,
   "leagueRank": 66,
   "rating": 1.9,
   "ratingGames": 46,
   "confidence": 89,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.5,
   "playerId": "ec0bad09-8256-49b3-ae86-3add22dd995f"
  },
  {
   "name": "Daniel Kulik",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 65,
   "wins": 38,
   "losses": 27,
   "pointsWon": 1223,
   "totalPointsAgainst": 1121,
   "mixedWins": 19,
   "mixedLosses": 12,
   "genderWins": 19,
   "genderLosses": 15,
   "clutchWins": 10,
   "clutchLosses": 7,
   "winPct": 58.5,
   "diff": 102,
   "ppg": 18.8,
   "leagueRank": 47,
   "rating": 1.4,
   "ratingGames": 65,
   "confidence": 92,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.4,
   "playerId": "35d7ef89-3505-481a-8036-8c5d7954f9a8"
  },
  {
   "name": "Chaille Godinez",
   "gender": "Female",
   "team": "ACE",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 65,
   "wins": 38,
   "losses": 27,
   "pointsWon": 1252,
   "totalPointsAgainst": 1180,
   "mixedWins": 21,
   "mixedLosses": 11,
   "genderWins": 17,
   "genderLosses": 16,
   "clutchWins": 16,
   "clutchLosses": 13,
   "winPct": 58.5,
   "diff": 72,
   "ppg": 19.3,
   "leagueRank": 51,
   "rating": 0.6,
   "ratingGames": 65,
   "confidence": 92,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.2,
   "playerId": "3cb88b7e-d8f2-45c6-b928-202bd6f5d4e6"
  },
  {
   "name": "Cristi Landrigan",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 7,
   "losses": 5,
   "pointsWon": 225,
   "totalPointsAgainst": 202,
   "mixedWins": 4,
   "mixedLosses": 2,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "1be028eb-1b92-4961-b508-fa0879c78017",
   "winPct": 58.3,
   "diff": 23,
   "ppg": 18.8,
   "leagueRank": 155,
   "rating": 0.7,
   "ratingGames": 12,
   "confidence": 71,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0
  },
  {
   "name": "Rachel Hannum",
   "gender": "Female",
   "team": "Four Seasons",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 14,
   "losses": 10,
   "pointsWon": 463,
   "totalPointsAgainst": 448,
   "mixedWins": 7,
   "mixedLosses": 5,
   "genderWins": 7,
   "genderLosses": 5,
   "clutchWins": 8,
   "clutchLosses": 4,
   "winPct": 58.3,
   "diff": 15,
   "ppg": 19.3,
   "leagueRank": 83,
   "rating": -0.2,
   "ratingGames": 24,
   "confidence": 83,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": -0.5,
   "playerId": "9e62411a-1a2e-4f18-972e-f13d9bf8ced7"
  },
  {
   "name": "Eric Kutzin",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 7,
   "losses": 5,
   "pointsWon": 226,
   "totalPointsAgainst": 212,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 2,
   "clutchWins": 3,
   "clutchLosses": 1,
   "playerId": "c62728d5-ec2b-4ce7-b0e9-83a34fa325b1",
   "winPct": 58.3,
   "diff": 14,
   "ppg": 18.8,
   "leagueRank": 153,
   "rating": -0.6,
   "ratingGames": 12,
   "confidence": 72,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.8
  },
  {
   "name": "Rishina Deleon",
   "gender": "Female",
   "team": "Picklr Fair Lawn",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 7,
   "losses": 5,
   "pointsWon": 217,
   "totalPointsAgainst": 222,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 4,
   "clutchLosses": 0,
   "playerId": "5a3bb8ae-f9db-448d-b10b-b562e9d3df8a",
   "winPct": 58.3,
   "diff": -5,
   "ppg": 18.1,
   "leagueRank": 170,
   "rating": -1.2,
   "ratingGames": 12,
   "confidence": 70,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.5
  },
  {
   "name": "Christian Fechter",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 43,
   "wins": 25,
   "losses": 18,
   "pointsWon": 813,
   "totalPointsAgainst": 783,
   "mixedWins": 15,
   "mixedLosses": 6,
   "genderWins": 10,
   "genderLosses": 12,
   "clutchWins": 9,
   "clutchLosses": 5,
   "winPct": 58.1,
   "diff": 30,
   "ppg": 18.9,
   "leagueRank": 52,
   "rating": -0.4,
   "ratingGames": 43,
   "confidence": 89,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0,
   "playerId": "9a973334-7467-4873-9aa6-ca3a597e8caa"
  },
  {
   "name": "Jenna Irwin",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 54,
   "wins": 31,
   "losses": 23,
   "pointsWon": 1026,
   "totalPointsAgainst": 938,
   "mixedWins": 12,
   "mixedLosses": 12,
   "genderWins": 19,
   "genderLosses": 11,
   "clutchWins": 7,
   "clutchLosses": 9,
   "winPct": 57.4,
   "diff": 88,
   "ppg": 19,
   "leagueRank": 48,
   "rating": 1.9,
   "ratingGames": 54,
   "confidence": 91,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.7,
   "playerId": "85e52e3b-5238-4583-8d1a-cc57f8218ef6"
  },
  {
   "name": "Arianna Haresign",
   "gender": "Female",
   "team": "Jersey Devil",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 70,
   "wins": 40,
   "losses": 30,
   "pointsWon": 1359,
   "totalPointsAgainst": 1241,
   "mixedWins": 23,
   "mixedLosses": 15,
   "genderWins": 17,
   "genderLosses": 15,
   "clutchWins": 15,
   "clutchLosses": 16,
   "winPct": 57.1,
   "diff": 118,
   "ppg": 19.4,
   "leagueRank": 53,
   "rating": 2.5,
   "ratingGames": 70,
   "confidence": 92,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.7,
   "playerId": "556f84fc-4f7c-4199-a104-6e906d71605c"
  },
  {
   "name": "Alexander Tong",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 24,
   "losses": 18,
   "pointsWon": 811,
   "totalPointsAgainst": 770,
   "mixedWins": 8,
   "mixedLosses": 12,
   "genderWins": 16,
   "genderLosses": 6,
   "clutchWins": 9,
   "clutchLosses": 9,
   "winPct": 57.1,
   "diff": 41,
   "ppg": 19.3,
   "leagueRank": 57,
   "rating": 1.4,
   "ratingGames": 42,
   "confidence": 89,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.4,
   "playerId": "d8d64dde-4ffb-4c49-aaa6-537b09c9c8d5"
  },
  {
   "name": "Garv Singhal",
   "gender": "Male",
   "team": "Dill Dinkers Hatboro",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 136,
   "totalPointsAgainst": 133,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 57.1,
   "diff": 3,
   "ppg": 19.4,
   "leagueRank": 185,
   "rating": 0.8,
   "ratingGames": 7,
   "confidence": 60,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 1.1,
   "playerId": "c89e87b8-33ef-49fe-81fb-59fa5b49e93a"
  },
  {
   "name": "Manpreet Singh",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 4,
   "losses": 3,
   "pointsWon": 136,
   "totalPointsAgainst": 136,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 0,
   "clutchWins": 2,
   "clutchLosses": 2,
   "playerId": "c7023f76-4d31-4566-a606-ef047e1220ad",
   "winPct": 57.1,
   "diff": 0,
   "ppg": 19.4,
   "leagueRank": 195,
   "rating": 1.2,
   "ratingGames": 7,
   "confidence": 60,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.9
  },
  {
   "name": "Emily Babinsky",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 76,
   "wins": 43,
   "losses": 33,
   "pointsWon": 1443,
   "totalPointsAgainst": 1363,
   "mixedWins": 21,
   "mixedLosses": 20,
   "genderWins": 22,
   "genderLosses": 13,
   "clutchWins": 12,
   "clutchLosses": 11,
   "winPct": 56.6,
   "diff": 80,
   "ppg": 19,
   "leagueRank": 43,
   "rating": -0.4,
   "ratingGames": 76,
   "confidence": 93,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.2,
   "playerId": "d0e2c1ea-529d-4364-b521-cb205ecdded3"
  },
  {
   "name": "Brittany Hall",
   "gender": "Female",
   "team": "ACE",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 26,
   "losses": 20,
   "pointsWon": 854,
   "totalPointsAgainst": 843,
   "mixedWins": 12,
   "mixedLosses": 11,
   "genderWins": 14,
   "genderLosses": 9,
   "clutchWins": 10,
   "clutchLosses": 7,
   "winPct": 56.5,
   "diff": 11,
   "ppg": 18.6,
   "leagueRank": 68,
   "rating": -0.4,
   "ratingGames": 46,
   "confidence": 90,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.1,
   "playerId": "17cc768d-f6c8-484c-814e-063d17cec72f"
  },
  {
   "name": "Chad Durkin",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 57,
   "wins": 32,
   "losses": 25,
   "pointsWon": 1075,
   "totalPointsAgainst": 1024,
   "mixedWins": 11,
   "mixedLosses": 9,
   "genderWins": 21,
   "genderLosses": 16,
   "clutchWins": 10,
   "clutchLosses": 8,
   "winPct": 56.1,
   "diff": 51,
   "ppg": 18.9,
   "leagueRank": 61,
   "rating": 1.3,
   "ratingGames": 57,
   "confidence": 91,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.5,
   "playerId": "54ed1c79-aaa0-486d-851b-d5a4db375b94"
  },
  {
   "name": "Matthew Chen",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 66,
   "wins": 37,
   "losses": 29,
   "pointsWon": 1227,
   "totalPointsAgainst": 1207,
   "mixedWins": 22,
   "mixedLosses": 13,
   "genderWins": 15,
   "genderLosses": 16,
   "clutchWins": 15,
   "clutchLosses": 10,
   "winPct": 56.1,
   "diff": 20,
   "ppg": 18.6,
   "leagueRank": 72,
   "rating": 0.5,
   "ratingGames": 66,
   "confidence": 92,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0,
   "playerId": "68e9ac74-5119-4dbb-8503-72bcdbade183"
  },
  {
   "name": "Shelah Wallace",
   "gender": "Female",
   "team": "Jersey Devil",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 63,
   "wins": 35,
   "losses": 28,
   "pointsWon": 1207,
   "totalPointsAgainst": 1131,
   "mixedWins": 16,
   "mixedLosses": 13,
   "genderWins": 19,
   "genderLosses": 15,
   "clutchWins": 11,
   "clutchLosses": 11,
   "winPct": 55.6,
   "diff": 76,
   "ppg": 19.2,
   "leagueRank": 60,
   "rating": 0.9,
   "ratingGames": 63,
   "confidence": 92,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.1,
   "playerId": "fa519fb1-87ca-4a7b-9265-4aba9807929f"
  },
  {
   "name": "Will Kayal",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 16,
   "losses": 13,
   "pointsWon": 558,
   "totalPointsAgainst": 536,
   "mixedWins": 7,
   "mixedLosses": 8,
   "genderWins": 9,
   "genderLosses": 5,
   "clutchWins": 6,
   "clutchLosses": 5,
   "winPct": 55.2,
   "diff": 22,
   "ppg": 19.2,
   "leagueRank": 67,
   "rating": 1.3,
   "ratingGames": 29,
   "confidence": 85,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.4,
   "playerId": "f98a262e-9080-4a48-9cd9-3fe5db979305"
  },
  {
   "name": "Claire Gaston",
   "gender": "Female",
   "team": "Monroe",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 40,
   "wins": 22,
   "losses": 18,
   "pointsWon": 750,
   "totalPointsAgainst": 748,
   "mixedWins": 12,
   "mixedLosses": 9,
   "genderWins": 10,
   "genderLosses": 9,
   "clutchWins": 10,
   "clutchLosses": 5,
   "winPct": 55,
   "diff": 2,
   "ppg": 18.8,
   "leagueRank": 75,
   "rating": 0.7,
   "ratingGames": 40,
   "confidence": 88,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.3,
   "playerId": "7f62f4db-d0cf-4990-a324-63aeb985a840"
  },
  {
   "name": "Alyssa Boyle",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 51,
   "wins": 28,
   "losses": 23,
   "pointsWon": 975,
   "totalPointsAgainst": 904,
   "mixedWins": 15,
   "mixedLosses": 11,
   "genderWins": 13,
   "genderLosses": 12,
   "clutchWins": 6,
   "clutchLosses": 12,
   "winPct": 54.9,
   "diff": 71,
   "ppg": 19.1,
   "leagueRank": 55,
   "rating": 0.8,
   "ratingGames": 51,
   "confidence": 90,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.2,
   "playerId": "22123177-1eb2-4285-bc92-f75799e175dd"
  },
  {
   "name": "Jaco De Waal",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 22,
   "wins": 12,
   "losses": 10,
   "pointsWon": 421,
   "totalPointsAgainst": 394,
   "mixedWins": 5,
   "mixedLosses": 6,
   "genderWins": 7,
   "genderLosses": 4,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 54.5,
   "diff": 27,
   "ppg": 19.1,
   "leagueRank": 76,
   "rating": 0.1,
   "ratingGames": 22,
   "confidence": 80,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0,
   "playerId": "19407a76-031d-4be3-8ed8-ba88cccdfdd3"
  },
  {
   "name": "Dylan Unkert",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 7,
   "losses": 6,
   "pointsWon": 250,
   "totalPointsAgainst": 225,
   "mixedWins": 3,
   "mixedLosses": 4,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 4,
   "playerId": "35415e5c-19db-4389-9839-b63d7e09851f",
   "winPct": 53.8,
   "diff": 25,
   "ppg": 19.2,
   "leagueRank": 152,
   "rating": 0.3,
   "ratingGames": 13,
   "confidence": 73,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": -0.1
  },
  {
   "name": "Jordan Denish",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 7,
   "losses": 6,
   "pointsWon": 250,
   "totalPointsAgainst": 229,
   "mixedWins": 1,
   "mixedLosses": 5,
   "genderWins": 6,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 53.8,
   "diff": 21,
   "ppg": 19.2,
   "leagueRank": 161,
   "rating": 1.5,
   "ratingGames": 13,
   "confidence": 74,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.8,
   "playerId": "8ae25144-966d-4de1-9cb3-513f7f217170"
  },
  {
   "name": "Austin Gow",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 8,
   "losses": 7,
   "pointsWon": 268,
   "totalPointsAgainst": 255,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "0e577096-0b13-441d-b087-cc49cb55cfe2",
   "winPct": 53.3,
   "diff": 13,
   "ppg": 17.9,
   "leagueRank": 158,
   "rating": 0.2,
   "ratingGames": 15,
   "confidence": 73,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.3
  },
  {
   "name": "Eric Lin",
   "gender": "Male",
   "team": "Monroe",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 16,
   "losses": 14,
   "pointsWon": 550,
   "totalPointsAgainst": 556,
   "mixedWins": 9,
   "mixedLosses": 7,
   "genderWins": 7,
   "genderLosses": 7,
   "clutchWins": 8,
   "clutchLosses": 5,
   "winPct": 53.3,
   "diff": -6,
   "ppg": 18.3,
   "leagueRank": 85,
   "rating": -0.9,
   "ratingGames": 30,
   "confidence": 85,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.4,
   "playerId": "4ce1c715-b187-47c5-b6dc-d079f802499d"
  },
  {
   "name": "Manny Lai",
   "gender": "Male",
   "team": "ACE",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 64,
   "wins": 34,
   "losses": 30,
   "pointsWon": 1194,
   "totalPointsAgainst": 1143,
   "mixedWins": 15,
   "mixedLosses": 17,
   "genderWins": 19,
   "genderLosses": 13,
   "clutchWins": 7,
   "clutchLosses": 12,
   "winPct": 53.1,
   "diff": 51,
   "ppg": 18.7,
   "leagueRank": 70,
   "rating": 1.3,
   "ratingGames": 64,
   "confidence": 92,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.5,
   "playerId": "f2a53ee2-a602-4e58-8326-6d0624af34af"
  },
  {
   "name": "Julia Sternberg",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 64,
   "wins": 34,
   "losses": 30,
   "pointsWon": 1171,
   "totalPointsAgainst": 1199,
   "mixedWins": 23,
   "mixedLosses": 15,
   "genderWins": 11,
   "genderLosses": 15,
   "clutchWins": 12,
   "clutchLosses": 6,
   "winPct": 53.1,
   "diff": -28,
   "ppg": 18.3,
   "leagueRank": 82,
   "rating": -1.2,
   "ratingGames": 64,
   "confidence": 92,
   "strengthOfPartners": 1.4,
   "strengthOfOpponents": 0.3,
   "playerId": "ccd8a76f-df3a-4ab9-97b6-bae0f860a431"
  },
  {
   "name": "James Cannizzaro",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 40,
   "wins": 21,
   "losses": 19,
   "pointsWon": 740,
   "totalPointsAgainst": 732,
   "mixedWins": 10,
   "mixedLosses": 10,
   "genderWins": 11,
   "genderLosses": 9,
   "clutchWins": 9,
   "clutchLosses": 9,
   "winPct": 52.5,
   "diff": 8,
   "ppg": 18.5,
   "leagueRank": 86,
   "rating": 0.9,
   "ratingGames": 40,
   "confidence": 88,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.5,
   "playerId": "9f2987f3-a389-4d47-9dcd-e619d94cbc18"
  },
  {
   "name": "Jessica Pevny",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 44,
   "wins": 23,
   "losses": 21,
   "pointsWon": 840,
   "totalPointsAgainst": 795,
   "mixedWins": 9,
   "mixedLosses": 12,
   "genderWins": 14,
   "genderLosses": 9,
   "clutchWins": 6,
   "clutchLosses": 11,
   "winPct": 52.3,
   "diff": 45,
   "ppg": 19.1,
   "leagueRank": 56,
   "rating": 0.1,
   "ratingGames": 45,
   "confidence": 89,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0,
   "playerId": "f472188b-24d9-4bf7-9f70-746d496f57d4"
  },
  {
   "name": "Michelle Quach",
   "gender": "Female",
   "team": "Jersey Devil",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 24,
   "losses": 22,
   "pointsWon": 856,
   "totalPointsAgainst": 849,
   "mixedWins": 14,
   "mixedLosses": 9,
   "genderWins": 10,
   "genderLosses": 13,
   "clutchWins": 8,
   "clutchLosses": 6,
   "winPct": 52.2,
   "diff": 7,
   "ppg": 18.6,
   "leagueRank": 77,
   "rating": -0.1,
   "ratingGames": 46,
   "confidence": 90,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0,
   "playerId": "5f0dcbe9-bb0e-496d-99d2-06f01ff2c77b"
  },
  {
   "name": "Fabian Marcos",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 14,
   "losses": 13,
   "pointsWon": 496,
   "totalPointsAgainst": 500,
   "mixedWins": 8,
   "mixedLosses": 6,
   "genderWins": 6,
   "genderLosses": 7,
   "clutchWins": 5,
   "clutchLosses": 4,
   "winPct": 51.9,
   "diff": -4,
   "ppg": 18.4,
   "leagueRank": 84,
   "rating": 0.3,
   "ratingGames": 27,
   "confidence": 84,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.4,
   "playerId": "557f8c4a-1a31-4ec5-a467-59faf8d70e96"
  },
  {
   "name": "Robbie Oddy",
   "gender": "Male",
   "team": "Flemington",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 62,
   "wins": 32,
   "losses": 30,
   "pointsWon": 1156,
   "totalPointsAgainst": 1146,
   "mixedWins": 17,
   "mixedLosses": 15,
   "genderWins": 15,
   "genderLosses": 15,
   "clutchWins": 9,
   "clutchLosses": 12,
   "winPct": 51.6,
   "diff": 10,
   "ppg": 18.6,
   "leagueRank": 87,
   "rating": 0.9,
   "ratingGames": 62,
   "confidence": 92,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.2,
   "playerId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6"
  },
  {
   "name": "Drew Von Bargen",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 66,
   "wins": 34,
   "losses": 32,
   "pointsWon": 1245,
   "totalPointsAgainst": 1231,
   "mixedWins": 18,
   "mixedLosses": 13,
   "genderWins": 16,
   "genderLosses": 19,
   "clutchWins": 14,
   "clutchLosses": 14,
   "winPct": 51.5,
   "diff": 14,
   "ppg": 18.9,
   "leagueRank": 80,
   "rating": 1.7,
   "ratingGames": 66,
   "confidence": 92,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 1.1,
   "playerId": "35880e0f-aba0-4a37-85fe-e09b057d63b2"
  },
  {
   "name": "Doryan Amato",
   "gender": "Female",
   "team": "Pickleball Kingdom Watchung",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 53,
   "wins": 27,
   "losses": 26,
   "pointsWon": 981,
   "totalPointsAgainst": 963,
   "mixedWins": 13,
   "mixedLosses": 14,
   "genderWins": 14,
   "genderLosses": 12,
   "clutchWins": 9,
   "clutchLosses": 11,
   "winPct": 50.9,
   "diff": 18,
   "ppg": 18.5,
   "leagueRank": 88,
   "rating": 0.8,
   "ratingGames": 53,
   "confidence": 90,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.3,
   "playerId": "9d2c8050-1b0b-4f4c-9158-a84190c726e3"
  },
  {
   "name": "Matthew Matro",
   "gender": "Male",
   "team": "Flemington",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 69,
   "wins": 35,
   "losses": 34,
   "pointsWon": 1295,
   "totalPointsAgainst": 1270,
   "mixedWins": 19,
   "mixedLosses": 15,
   "genderWins": 16,
   "genderLosses": 19,
   "clutchWins": 13,
   "clutchLosses": 14,
   "winPct": 50.7,
   "diff": 25,
   "ppg": 18.8,
   "leagueRank": 78,
   "rating": 1.3,
   "ratingGames": 69,
   "confidence": 92,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.3,
   "playerId": "7b2e1bed-f387-48de-a028-bdde357bb3af"
  },
  {
   "name": "Zach Bowe",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 67,
   "wins": 34,
   "losses": 33,
   "pointsWon": 1252,
   "totalPointsAgainst": 1234,
   "mixedWins": 18,
   "mixedLosses": 18,
   "genderWins": 16,
   "genderLosses": 15,
   "clutchWins": 10,
   "clutchLosses": 12,
   "winPct": 50.7,
   "diff": 18,
   "ppg": 18.7,
   "leagueRank": 79,
   "rating": 0.7,
   "ratingGames": 67,
   "confidence": 92,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.7,
   "playerId": "eebadc3a-5763-4612-9232-d3a98ea188d6"
  },
  {
   "name": "Rayna Baizman",
   "gender": "Female",
   "team": "Dill Dinkers Hatboro",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 50,
   "wins": 25,
   "losses": 25,
   "pointsWon": 941,
   "totalPointsAgainst": 885,
   "mixedWins": 15,
   "mixedLosses": 10,
   "genderWins": 10,
   "genderLosses": 15,
   "clutchWins": 7,
   "clutchLosses": 10,
   "winPct": 50,
   "diff": 56,
   "ppg": 18.8,
   "leagueRank": 65,
   "rating": -0.9,
   "ratingGames": 50,
   "confidence": 90,
   "strengthOfPartners": 2,
   "strengthOfOpponents": -0.1,
   "playerId": "108620c9-1cbb-4ea0-846c-bc781f1decea"
  },
  {
   "name": "Taylor Dath",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 8,
   "losses": 8,
   "pointsWon": 311,
   "totalPointsAgainst": 295,
   "mixedWins": 4,
   "mixedLosses": 4,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 2,
   "clutchLosses": 4,
   "playerId": "112420f1-32a0-492e-82fa-3e0ad7a9dd7c",
   "winPct": 50,
   "diff": 16,
   "ppg": 19.4,
   "leagueRank": 149,
   "rating": 0.6,
   "ratingGames": 16,
   "confidence": 72,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": -0.4
  },
  {
   "name": "Alvaro Regalado",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 7,
   "losses": 7,
   "pointsWon": 270,
   "totalPointsAgainst": 268,
   "mixedWins": 4,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 4,
   "clutchWins": 3,
   "clutchLosses": 3,
   "winPct": 50,
   "diff": 2,
   "ppg": 19.3,
   "leagueRank": 160,
   "rating": 1.2,
   "ratingGames": 14,
   "confidence": 74,
   "strengthOfPartners": 2.1,
   "strengthOfOpponents": 1.7,
   "playerId": "9e056bf3-21d0-43e3-b7e5-e245f8d0b154"
  },
  {
   "name": "David D'Amico",
   "gender": "Male",
   "team": "Four Seasons",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 113,
   "totalPointsAgainst": 113,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "d85cd877-46dc-4348-8a46-e63a447f1d39",
   "winPct": 50,
   "diff": 0,
   "ppg": 18.8,
   "leagueRank": 198,
   "rating": -0.1,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": -0.5
  },
  {
   "name": "Danielle Bernero",
   "gender": "Female",
   "team": "ACE",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 24,
   "wins": 12,
   "losses": 12,
   "pointsWon": 439,
   "totalPointsAgainst": 441,
   "mixedWins": 6,
   "mixedLosses": 7,
   "genderWins": 6,
   "genderLosses": 5,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 50,
   "diff": -2,
   "ppg": 18.3,
   "leagueRank": 117,
   "rating": -0.3,
   "ratingGames": 24,
   "confidence": 82,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": -0.4,
   "playerId": "317f260e-551b-4f91-ab92-71440e5f05be"
  },
  {
   "name": "Vaughn Lawrence",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 8,
   "losses": 8,
   "pointsWon": 300,
   "totalPointsAgainst": 304,
   "mixedWins": 3,
   "mixedLosses": 5,
   "genderWins": 5,
   "genderLosses": 3,
   "clutchWins": 5,
   "clutchLosses": 3,
   "playerId": "d4c1185c-6147-4164-90e1-06ecfa162596",
   "winPct": 50,
   "diff": -4,
   "ppg": 18.8,
   "leagueRank": 164,
   "rating": -0.8,
   "ratingGames": 16,
   "confidence": 76,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": -0.4
  },
  {
   "name": "Tyler Arsenault",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 72,
   "wins": 36,
   "losses": 36,
   "pointsWon": 1319,
   "totalPointsAgainst": 1325,
   "mixedWins": 17,
   "mixedLosses": 17,
   "genderWins": 19,
   "genderLosses": 19,
   "clutchWins": 14,
   "clutchLosses": 12,
   "winPct": 50,
   "diff": -6,
   "ppg": 18.3,
   "leagueRank": 89,
   "rating": 1.2,
   "ratingGames": 72,
   "confidence": 93,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.9,
   "playerId": "e76d2d63-f7dc-40e7-aca2-d9b3aecf4d3e"
  },
  {
   "name": "Elise Van Ormer",
   "gender": "Female",
   "team": "Pickleball Kingdom Watchung",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 152,
   "totalPointsAgainst": 158,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "959c8c5b-2b03-4809-b56c-40d9787e2554",
   "winPct": 50,
   "diff": -6,
   "ppg": 19,
   "leagueRank": 208,
   "rating": -0.1,
   "ratingGames": 8,
   "confidence": 60,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": -0.3
  },
  {
   "name": "Taylor Peracchio",
   "gender": "Female",
   "team": "Pickleball Kingdom Watchung",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 146,
   "totalPointsAgainst": 152,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "4df44e08-a35c-4c4c-a311-861ef4d0897a",
   "winPct": 50,
   "diff": -6,
   "ppg": 18.3,
   "leagueRank": 211,
   "rating": 0.2,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": -0.3
  },
  {
   "name": "Aditya Upadhya",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 4,
   "losses": 4,
   "pointsWon": 145,
   "totalPointsAgainst": 153,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "a82d3784-1449-43bb-8151-97e75b84822e",
   "winPct": 50,
   "diff": -8,
   "ppg": 18.1,
   "leagueRank": 203,
   "rating": -1.3,
   "ratingGames": 8,
   "confidence": 62,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.3
  },
  {
   "name": "Kate Siedell",
   "gender": "Female",
   "team": "ACE",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 100,
   "totalPointsAgainst": 111,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "8decf039-f1e5-4182-b3cf-6756789ae87a",
   "winPct": 50,
   "diff": -11,
   "ppg": 16.7,
   "leagueRank": 213,
   "rating": -1.8,
   "ratingGames": 6,
   "confidence": 57,
   "strengthOfPartners": 0,
   "strengthOfOpponents": -0.6
  },
  {
   "name": "Marc Harden",
   "gender": "Male",
   "team": "ACE",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 3,
   "losses": 3,
   "pointsWon": 100,
   "totalPointsAgainst": 112,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "55194d2f-f537-4e19-b901-86c559f25ef2",
   "winPct": 50,
   "diff": -12,
   "ppg": 16.7,
   "leagueRank": 212,
   "rating": -0.7,
   "ratingGames": 6,
   "confidence": 57,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.5
  },
  {
   "name": "Yuki Kim",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 63,
   "wins": 31,
   "losses": 32,
   "pointsWon": 1174,
   "totalPointsAgainst": 1163,
   "mixedWins": 20,
   "mixedLosses": 12,
   "genderWins": 11,
   "genderLosses": 20,
   "clutchWins": 11,
   "clutchLosses": 8,
   "winPct": 49.2,
   "diff": 11,
   "ppg": 18.6,
   "leagueRank": 92,
   "rating": 1.7,
   "ratingGames": 63,
   "confidence": 92,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.6,
   "playerId": "afec0287-b62d-4aaf-977f-afb96aed0e17"
  },
  {
   "name": "Zachary Lessner",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 49,
   "wins": 24,
   "losses": 25,
   "pointsWon": 921,
   "totalPointsAgainst": 910,
   "mixedWins": 9,
   "mixedLosses": 14,
   "genderWins": 15,
   "genderLosses": 11,
   "clutchWins": 8,
   "clutchLosses": 12,
   "winPct": 49,
   "diff": 11,
   "ppg": 18.8,
   "leagueRank": 81,
   "rating": 0.2,
   "ratingGames": 49,
   "confidence": 90,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.4,
   "playerId": "2ce5ebef-8079-4871-8d2e-b34988abbaad"
  },
  {
   "name": "Jacob Yandoli",
   "gender": "Male",
   "team": "Monroe",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 18,
   "losses": 19,
   "pointsWon": 705,
   "totalPointsAgainst": 678,
   "mixedWins": 10,
   "mixedLosses": 9,
   "genderWins": 8,
   "genderLosses": 10,
   "clutchWins": 6,
   "clutchLosses": 9,
   "winPct": 48.6,
   "diff": 27,
   "ppg": 19.1,
   "leagueRank": 74,
   "rating": 0,
   "ratingGames": 37,
   "confidence": 87,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": -0.1,
   "playerId": "be9bc229-2d57-4236-a951-11a2f91a09a3"
  },
  {
   "name": "Sarah Kline",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 17,
   "losses": 18,
   "pointsWon": 620,
   "totalPointsAgainst": 634,
   "mixedWins": 9,
   "mixedLosses": 9,
   "genderWins": 8,
   "genderLosses": 9,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 48.6,
   "diff": -14,
   "ppg": 17.7,
   "leagueRank": 104,
   "rating": -0.3,
   "ratingGames": 35,
   "confidence": 86,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0,
   "playerId": "b122f262-f81d-4fb2-9f11-c473d18a4260"
  },
  {
   "name": "Chris Frangipane",
   "gender": "Male",
   "team": "Monroe",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 18,
   "losses": 19,
   "pointsWon": 681,
   "totalPointsAgainst": 699,
   "mixedWins": 7,
   "mixedLosses": 12,
   "genderWins": 11,
   "genderLosses": 7,
   "clutchWins": 8,
   "clutchLosses": 6,
   "winPct": 48.6,
   "diff": -18,
   "ppg": 18.4,
   "leagueRank": 96,
   "rating": 0.4,
   "ratingGames": 37,
   "confidence": 88,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.7,
   "playerId": "e8bb81fd-869a-459d-8108-b9ac6bc1b84d"
  },
  {
   "name": "Stacy Walkowitz",
   "gender": "Female",
   "team": "ACE",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 11,
   "losses": 12,
   "pointsWon": 441,
   "totalPointsAgainst": 432,
   "mixedWins": 3,
   "mixedLosses": 8,
   "genderWins": 8,
   "genderLosses": 4,
   "clutchWins": 5,
   "clutchLosses": 8,
   "winPct": 47.8,
   "diff": 9,
   "ppg": 19.2,
   "leagueRank": 103,
   "rating": 0,
   "ratingGames": 23,
   "confidence": 83,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.1,
   "playerId": "a19b179a-6a16-43a7-b2af-8d6e8d1a1205"
  },
  {
   "name": "Ross Switkes",
   "gender": "Male",
   "team": "Flemington",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 85,
   "wins": 40,
   "losses": 45,
   "pointsWon": 1579,
   "totalPointsAgainst": 1591,
   "mixedWins": 24,
   "mixedLosses": 19,
   "genderWins": 16,
   "genderLosses": 26,
   "clutchWins": 18,
   "clutchLosses": 19,
   "winPct": 47.1,
   "diff": -12,
   "ppg": 18.6,
   "leagueRank": 91,
   "rating": 0.2,
   "ratingGames": 85,
   "confidence": 93,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.2,
   "playerId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b"
  },
  {
   "name": "Damien Stahl",
   "gender": "Male",
   "team": "ACE",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 15,
   "losses": 17,
   "pointsWon": 586,
   "totalPointsAgainst": 597,
   "mixedWins": 8,
   "mixedLosses": 9,
   "genderWins": 7,
   "genderLosses": 8,
   "clutchWins": 4,
   "clutchLosses": 5,
   "winPct": 46.9,
   "diff": -11,
   "ppg": 18.3,
   "leagueRank": 90,
   "rating": -0.9,
   "ratingGames": 32,
   "confidence": 86,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0,
   "playerId": "45d2cd6f-4816-46b2-8e17-fab766cdb87e"
  },
  {
   "name": "Sidd Pathare",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 47,
   "wins": 22,
   "losses": 25,
   "pointsWon": 877,
   "totalPointsAgainst": 864,
   "mixedWins": 12,
   "mixedLosses": 13,
   "genderWins": 10,
   "genderLosses": 12,
   "clutchWins": 6,
   "clutchLosses": 12,
   "winPct": 46.8,
   "diff": 13,
   "ppg": 18.7,
   "leagueRank": 73,
   "rating": -0.7,
   "ratingGames": 47,
   "confidence": 90,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.1,
   "playerId": "a73f249d-c1c9-4516-bc79-e9732581f098"
  },
  {
   "name": "Gautham Bondugula",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 14,
   "losses": 16,
   "pointsWon": 547,
   "totalPointsAgainst": 566,
   "mixedWins": 8,
   "mixedLosses": 8,
   "genderWins": 6,
   "genderLosses": 8,
   "clutchWins": 7,
   "clutchLosses": 6,
   "winPct": 46.7,
   "diff": -19,
   "ppg": 18.2,
   "leagueRank": 106,
   "rating": 0.5,
   "ratingGames": 30,
   "confidence": 85,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.4,
   "playerId": "3da7de8e-f75c-4e90-b63e-f340cc8788a0"
  },
  {
   "name": "Tin Wai Kwan",
   "gender": "Female",
   "team": "Picklr Fair Lawn",
   "matches": 11,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 67,
   "wins": 31,
   "losses": 36,
   "pointsWon": 1231,
   "totalPointsAgainst": 1261,
   "mixedWins": 10,
   "mixedLosses": 22,
   "genderWins": 21,
   "genderLosses": 14,
   "clutchWins": 13,
   "clutchLosses": 16,
   "winPct": 46.3,
   "diff": -30,
   "ppg": 18.4,
   "leagueRank": 97,
   "rating": 0.6,
   "ratingGames": 67,
   "confidence": 92,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.3,
   "playerId": "22fe1980-7ef9-4026-8c76-a39534431c6b"
  },
  {
   "name": "Amanda Ksiezopolski",
   "gender": "Female",
   "team": "Monroe",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 19,
   "losses": 22,
   "pointsWon": 743,
   "totalPointsAgainst": 787,
   "mixedWins": 11,
   "mixedLosses": 8,
   "genderWins": 8,
   "genderLosses": 14,
   "clutchWins": 10,
   "clutchLosses": 7,
   "winPct": 46.3,
   "diff": -44,
   "ppg": 18.1,
   "leagueRank": 107,
   "rating": -1,
   "ratingGames": 41,
   "confidence": 88,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.1,
   "playerId": "2138af89-34bc-4ee2-9955-ff16f0997031"
  },
  {
   "name": "Courtney Greener",
   "gender": "Female",
   "team": "Flemington",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 61,
   "wins": 28,
   "losses": 33,
   "pointsWon": 1138,
   "totalPointsAgainst": 1157,
   "mixedWins": 20,
   "mixedLosses": 15,
   "genderWins": 8,
   "genderLosses": 18,
   "clutchWins": 9,
   "clutchLosses": 13,
   "winPct": 45.9,
   "diff": -19,
   "ppg": 18.7,
   "leagueRank": 94,
   "rating": -0.4,
   "ratingGames": 62,
   "confidence": 92,
   "strengthOfPartners": 0.4,
   "strengthOfOpponents": 0.2,
   "playerId": "0a66ddb6-6771-4641-ad1e-0ed15d96b66d"
  },
  {
   "name": "Stephen Conger",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 11,
   "wins": 5,
   "losses": 6,
   "pointsWon": 212,
   "totalPointsAgainst": 218,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 4,
   "genderLosses": 3,
   "clutchWins": 4,
   "clutchLosses": 3,
   "winPct": 45.5,
   "diff": -6,
   "ppg": 19.3,
   "leagueRank": 188,
   "rating": -2,
   "ratingGames": 11,
   "confidence": 69,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": -0.9,
   "playerId": "24e70ef7-b98e-459e-8a19-19a2b66a054e"
  },
  {
   "name": "Kara Infante",
   "gender": "Female",
   "team": "Picklr Fair Lawn",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 60,
   "wins": 27,
   "losses": 33,
   "pointsWon": 1076,
   "totalPointsAgainst": 1153,
   "mixedWins": 16,
   "mixedLosses": 20,
   "genderWins": 11,
   "genderLosses": 13,
   "clutchWins": 11,
   "clutchLosses": 8,
   "winPct": 45,
   "diff": -77,
   "ppg": 17.9,
   "leagueRank": 109,
   "rating": -0.7,
   "ratingGames": 60,
   "confidence": 92,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.4,
   "playerId": "06edda3d-3a1f-4010-86fa-8ac767cd7079"
  },
  {
   "name": "Royce Chan",
   "gender": "Male",
   "team": "Four Seasons",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 49,
   "wins": 22,
   "losses": 27,
   "pointsWon": 892,
   "totalPointsAgainst": 945,
   "mixedWins": 11,
   "mixedLosses": 11,
   "genderWins": 11,
   "genderLosses": 16,
   "clutchWins": 12,
   "clutchLosses": 8,
   "winPct": 44.9,
   "diff": -53,
   "ppg": 18.2,
   "leagueRank": 118,
   "rating": -0.4,
   "ratingGames": 49,
   "confidence": 90,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.1,
   "playerId": "68274c39-0102-4554-978e-1aa50a0b3fba"
  },
  {
   "name": "Aya Haruyama",
   "gender": "Female",
   "team": "Picklr Fair Lawn",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 50,
   "wins": 22,
   "losses": 28,
   "pointsWon": 922,
   "totalPointsAgainst": 929,
   "mixedWins": 9,
   "mixedLosses": 16,
   "genderWins": 13,
   "genderLosses": 12,
   "clutchWins": 9,
   "clutchLosses": 12,
   "winPct": 44,
   "diff": -7,
   "ppg": 18.4,
   "leagueRank": 93,
   "rating": 0.6,
   "ratingGames": 50,
   "confidence": 91,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.7,
   "playerId": "d2ef2b1f-9f63-4542-8b66-c6ef8ca0fdc3"
  },
  {
   "name": "Charlotte Healey",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 73,
   "wins": 32,
   "losses": 41,
   "pointsWon": 1378,
   "totalPointsAgainst": 1383,
   "mixedWins": 16,
   "mixedLosses": 19,
   "genderWins": 16,
   "genderLosses": 22,
   "clutchWins": 11,
   "clutchLosses": 22,
   "winPct": 43.8,
   "diff": -5,
   "ppg": 18.9,
   "leagueRank": 95,
   "rating": 0.1,
   "ratingGames": 73,
   "confidence": 93,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.4,
   "playerId": "bbaf3def-a87b-4537-8701-4f5ae0108b1f"
  },
  {
   "name": "Tim Dowd",
   "gender": "Male",
   "team": "Flemington",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 7,
   "losses": 9,
   "pointsWon": 285,
   "totalPointsAgainst": 296,
   "mixedWins": 4,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 2,
   "playerId": "b7555b30-f1b5-4d44-9eff-dffd3e1b1b28",
   "winPct": 43.8,
   "diff": -11,
   "ppg": 17.8,
   "leagueRank": 187,
   "rating": -0.5,
   "ratingGames": 16,
   "confidence": 76,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0
  },
  {
   "name": "Zoe Ousouljoglou",
   "gender": "Female",
   "team": "Pickleball Kingdom Watchung",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 17,
   "losses": 22,
   "pointsWon": 733,
   "totalPointsAgainst": 737,
   "mixedWins": 10,
   "mixedLosses": 9,
   "genderWins": 7,
   "genderLosses": 13,
   "clutchWins": 8,
   "clutchLosses": 11,
   "winPct": 43.6,
   "diff": -4,
   "ppg": 18.8,
   "leagueRank": 101,
   "rating": 0.9,
   "ratingGames": 39,
   "confidence": 88,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.6,
   "playerId": "269fe355-d2eb-41b8-9e92-a1438aec65e3"
  },
  {
   "name": "Patrick Ceccacci",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 39,
   "wins": 17,
   "losses": 22,
   "pointsWon": 688,
   "totalPointsAgainst": 745,
   "mixedWins": 8,
   "mixedLosses": 11,
   "genderWins": 9,
   "genderLosses": 11,
   "clutchWins": 8,
   "clutchLosses": 6,
   "winPct": 43.6,
   "diff": -57,
   "ppg": 17.6,
   "leagueRank": 113,
   "rating": -2.4,
   "ratingGames": 39,
   "confidence": 88,
   "strengthOfPartners": 1.3,
   "strengthOfOpponents": 0,
   "playerId": "a291ed5b-4a4f-4402-93d0-f4d78e790f2c"
  },
  {
   "name": "Rachel Berger",
   "gender": "Female",
   "team": "Jersey Devil",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 55,
   "wins": 24,
   "losses": 31,
   "pointsWon": 978,
   "totalPointsAgainst": 1054,
   "mixedWins": 10,
   "mixedLosses": 14,
   "genderWins": 14,
   "genderLosses": 17,
   "clutchWins": 9,
   "clutchLosses": 13,
   "winPct": 43.6,
   "diff": -76,
   "ppg": 17.8,
   "leagueRank": 122,
   "rating": -1.1,
   "ratingGames": 55,
   "confidence": 91,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.2,
   "playerId": "9b7488c5-bc66-41e4-8fa5-873e70c190e3"
  },
  {
   "name": "Thomas Connolly",
   "gender": "Male",
   "team": "Flemington",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 76,
   "wins": 33,
   "losses": 43,
   "pointsWon": 1382,
   "totalPointsAgainst": 1479,
   "mixedWins": 13,
   "mixedLosses": 23,
   "genderWins": 20,
   "genderLosses": 20,
   "clutchWins": 17,
   "clutchLosses": 14,
   "winPct": 43.4,
   "diff": -97,
   "ppg": 18.2,
   "leagueRank": 115,
   "rating": -1.5,
   "ratingGames": 76,
   "confidence": 93,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": 0.2,
   "playerId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3"
  },
  {
   "name": "Grant Hanak",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 44,
   "wins": 19,
   "losses": 25,
   "pointsWon": 805,
   "totalPointsAgainst": 828,
   "mixedWins": 8,
   "mixedLosses": 15,
   "genderWins": 11,
   "genderLosses": 10,
   "clutchWins": 6,
   "clutchLosses": 8,
   "winPct": 43.2,
   "diff": -23,
   "ppg": 18.3,
   "leagueRank": 112,
   "rating": -0.4,
   "ratingGames": 44,
   "confidence": 89,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.2,
   "playerId": "44a0a4da-e7cb-4037-9018-97544dfce248"
  },
  {
   "name": "Jennifer Sanchez",
   "gender": "Female",
   "team": "ACE",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 16,
   "losses": 21,
   "pointsWon": 656,
   "totalPointsAgainst": 706,
   "mixedWins": 8,
   "mixedLosses": 9,
   "genderWins": 8,
   "genderLosses": 12,
   "clutchWins": 6,
   "clutchLosses": 6,
   "winPct": 43.2,
   "diff": -50,
   "ppg": 17.7,
   "leagueRank": 120,
   "rating": -1.8,
   "ratingGames": 37,
   "confidence": 88,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.1,
   "playerId": "061121d0-5d0a-4c01-9d8e-dced99d6d82d"
  },
  {
   "name": "Thomas Hoffman",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 132,
   "totalPointsAgainst": 130,
   "mixedWins": 3,
   "mixedLosses": 0,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "0e5f7ddd-f4e6-4fc8-8ac0-5e87d8a46533",
   "winPct": 42.9,
   "diff": 2,
   "ppg": 18.9,
   "leagueRank": 204,
   "rating": 3,
   "ratingGames": 7,
   "confidence": 59,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 1.9
  },
  {
   "name": "Lindsey Taaffe",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 133,
   "totalPointsAgainst": 133,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 3,
   "playerId": "8c4e6b34-2198-4797-ae86-65f97164eedd",
   "winPct": 42.9,
   "diff": 0,
   "ppg": 19,
   "leagueRank": 206,
   "rating": 0.2,
   "ratingGames": 7,
   "confidence": 61,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.7
  },
  {
   "name": "Patrick Ryan",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 6,
   "losses": 8,
   "pointsWon": 257,
   "totalPointsAgainst": 261,
   "mixedWins": 2,
   "mixedLosses": 6,
   "genderWins": 4,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 3,
   "playerId": "8344fbda-35c2-4ce0-94ad-158090d2d5ba",
   "winPct": 42.9,
   "diff": -4,
   "ppg": 18.4,
   "leagueRank": 169,
   "rating": 0,
   "ratingGames": 14,
   "confidence": 74,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0
  },
  {
   "name": "Rob Gruber",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 3,
   "losses": 4,
   "pointsWon": 128,
   "totalPointsAgainst": 136,
   "mixedWins": 2,
   "mixedLosses": 1,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "5bc7968a-141e-4589-b95c-07f8b628ec72",
   "winPct": 42.9,
   "diff": -8,
   "ppg": 18.3,
   "leagueRank": 215,
   "rating": 1,
   "ratingGames": 7,
   "confidence": 55,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 1.6
  },
  {
   "name": "Alex Kazdan",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 12,
   "losses": 16,
   "pointsWon": 509,
   "totalPointsAgainst": 530,
   "mixedWins": 8,
   "mixedLosses": 7,
   "genderWins": 4,
   "genderLosses": 9,
   "clutchWins": 5,
   "clutchLosses": 6,
   "winPct": 42.9,
   "diff": -21,
   "ppg": 18.2,
   "leagueRank": 99,
   "rating": -1.5,
   "ratingGames": 28,
   "confidence": 85,
   "strengthOfPartners": 0.8,
   "strengthOfOpponents": -0.1,
   "playerId": "51f123b2-aced-4719-9d05-d09244db1ee4"
  },
  {
   "name": "Alex Abad",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 61,
   "wins": 26,
   "losses": 35,
   "pointsWon": 1097,
   "totalPointsAgainst": 1138,
   "mixedWins": 13,
   "mixedLosses": 17,
   "genderWins": 13,
   "genderLosses": 18,
   "clutchWins": 8,
   "clutchLosses": 11,
   "winPct": 42.6,
   "diff": -41,
   "ppg": 18,
   "leagueRank": 111,
   "rating": -0.8,
   "ratingGames": 61,
   "confidence": 92,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0,
   "playerId": "bc881ebc-7a42-43be-b1b2-9c29c59a4132"
  },
  {
   "name": "Shawn Ganow",
   "gender": "Male",
   "team": "Four Seasons",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 11,
   "losses": 15,
   "pointsWon": 472,
   "totalPointsAgainst": 495,
   "mixedWins": 4,
   "mixedLosses": 6,
   "genderWins": 7,
   "genderLosses": 9,
   "clutchWins": 6,
   "clutchLosses": 5,
   "winPct": 42.3,
   "diff": -23,
   "ppg": 18.2,
   "leagueRank": 148,
   "rating": -0.2,
   "ratingGames": 26,
   "confidence": 84,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.2,
   "playerId": "1e340ccb-0e0f-4b6b-b760-d1a723561d04"
  },
  {
   "name": "Marcos Claros",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 11,
   "losses": 15,
   "pointsWon": 466,
   "totalPointsAgainst": 498,
   "mixedWins": 7,
   "mixedLosses": 6,
   "genderWins": 4,
   "genderLosses": 9,
   "clutchWins": 4,
   "clutchLosses": 6,
   "winPct": 42.3,
   "diff": -32,
   "ppg": 17.9,
   "leagueRank": 142,
   "rating": -0.8,
   "ratingGames": 26,
   "confidence": 84,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.1,
   "playerId": "839ee2ac-03d5-4fee-bc87-08709afae5f2"
  },
  {
   "name": "Melissa Dardani",
   "gender": "Female",
   "team": "Flemington",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 45,
   "wins": 19,
   "losses": 26,
   "pointsWon": 817,
   "totalPointsAgainst": 868,
   "mixedWins": 10,
   "mixedLosses": 11,
   "genderWins": 9,
   "genderLosses": 15,
   "clutchWins": 8,
   "clutchLosses": 8,
   "winPct": 42.2,
   "diff": -51,
   "ppg": 18.2,
   "leagueRank": 116,
   "rating": -1.2,
   "ratingGames": 46,
   "confidence": 90,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.3,
   "playerId": "ef423f8a-5c2c-4a12-9f37-b41ff6d6c530"
  },
  {
   "name": "Carly Pfeffer",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 50,
   "wins": 21,
   "losses": 29,
   "pointsWon": 929,
   "totalPointsAgainst": 960,
   "mixedWins": 11,
   "mixedLosses": 20,
   "genderWins": 10,
   "genderLosses": 9,
   "clutchWins": 9,
   "clutchLosses": 13,
   "winPct": 42,
   "diff": -31,
   "ppg": 18.6,
   "leagueRank": 102,
   "rating": -0.1,
   "ratingGames": 51,
   "confidence": 91,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 0.5,
   "playerId": "387e74d4-66ee-4a52-a4ac-aae3dbe1d21b"
  },
  {
   "name": "Richa Shah",
   "gender": "Female",
   "team": "Monroe",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 69,
   "wins": 29,
   "losses": 40,
   "pointsWon": 1199,
   "totalPointsAgainst": 1342,
   "mixedWins": 17,
   "mixedLosses": 20,
   "genderWins": 12,
   "genderLosses": 20,
   "clutchWins": 15,
   "clutchLosses": 8,
   "winPct": 42,
   "diff": -143,
   "ppg": 17.4,
   "leagueRank": 137,
   "rating": -0.9,
   "ratingGames": 69,
   "confidence": 92,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.9,
   "playerId": "6b80047c-ca16-4506-a2a4-ed894dc0c37f"
  },
  {
   "name": "Meghan Mediratta",
   "gender": "Female",
   "team": "Pickleball Palace",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 5,
   "losses": 7,
   "pointsWon": 227,
   "totalPointsAgainst": 214,
   "mixedWins": 2,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 4,
   "playerId": "abc80b43-6769-4254-ae9a-b4b63b06de1d",
   "winPct": 41.7,
   "diff": 13,
   "ppg": 18.9,
   "leagueRank": 179,
   "rating": 1.4,
   "ratingGames": 12,
   "confidence": 72,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.5
  },
  {
   "name": "Morgan Fishman",
   "gender": "Female",
   "team": "Monroe",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 17,
   "losses": 24,
   "pointsWon": 711,
   "totalPointsAgainst": 786,
   "mixedWins": 9,
   "mixedLosses": 11,
   "genderWins": 8,
   "genderLosses": 13,
   "clutchWins": 8,
   "clutchLosses": 5,
   "winPct": 41.5,
   "diff": -75,
   "ppg": 17.3,
   "leagueRank": 132,
   "rating": -1,
   "ratingGames": 41,
   "confidence": 88,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.2,
   "playerId": "5ccee070-0af8-4363-9ddb-6ce8ebce098f"
  },
  {
   "name": "Alex Boory",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 12,
   "losses": 17,
   "pointsWon": 529,
   "totalPointsAgainst": 556,
   "mixedWins": 9,
   "mixedLosses": 10,
   "genderWins": 3,
   "genderLosses": 7,
   "clutchWins": 3,
   "clutchLosses": 8,
   "winPct": 41.4,
   "diff": -27,
   "ppg": 18.2,
   "leagueRank": 108,
   "rating": -1.5,
   "ratingGames": 29,
   "confidence": 85,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.4,
   "playerId": "897f1edf-63f3-4eec-bcf5-d5a1bf0be859"
  },
  {
   "name": "Jeff Sul",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 17,
   "wins": 7,
   "losses": 10,
   "pointsWon": 302,
   "totalPointsAgainst": 324,
   "mixedWins": 4,
   "mixedLosses": 5,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 5,
   "winPct": 41.2,
   "diff": -22,
   "ppg": 17.8,
   "leagueRank": 183,
   "rating": -1.4,
   "ratingGames": 17,
   "confidence": 78,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0,
   "playerId": "a52d05fa-a423-4220-8c5d-86d506e61f5d"
  },
  {
   "name": "Cameron Barraco",
   "gender": "Female",
   "team": "Monroe",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 56,
   "wins": 23,
   "losses": 33,
   "pointsWon": 979,
   "totalPointsAgainst": 1091,
   "mixedWins": 15,
   "mixedLosses": 12,
   "genderWins": 8,
   "genderLosses": 21,
   "clutchWins": 12,
   "clutchLosses": 8,
   "winPct": 41.1,
   "diff": -112,
   "ppg": 17.5,
   "leagueRank": 134,
   "rating": -1.2,
   "ratingGames": 56,
   "confidence": 91,
   "strengthOfPartners": 1,
   "strengthOfOpponents": 0.9,
   "playerId": "ebcb4134-e369-436b-bc38-2cdaadb381c6"
  },
  {
   "name": "Michaela Pierznik",
   "gender": "Female",
   "team": "Jersey Devil",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 44,
   "wins": 18,
   "losses": 26,
   "pointsWon": 820,
   "totalPointsAgainst": 850,
   "mixedWins": 12,
   "mixedLosses": 11,
   "genderWins": 6,
   "genderLosses": 15,
   "clutchWins": 7,
   "clutchLosses": 13,
   "winPct": 40.9,
   "diff": -30,
   "ppg": 18.6,
   "leagueRank": 110,
   "rating": -0.7,
   "ratingGames": 44,
   "confidence": 90,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0,
   "playerId": "c885c4ae-2685-4fc8-9b35-40cf9f465915"
  },
  {
   "name": "Gift Horn",
   "gender": "Female",
   "team": "Pickleball Kingdom Watchung",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 11,
   "losses": 16,
   "pointsWon": 499,
   "totalPointsAgainst": 513,
   "mixedWins": 6,
   "mixedLosses": 7,
   "genderWins": 5,
   "genderLosses": 9,
   "clutchWins": 4,
   "clutchLosses": 6,
   "winPct": 40.7,
   "diff": -14,
   "ppg": 18.5,
   "leagueRank": 119,
   "rating": 1,
   "ratingGames": 27,
   "confidence": 83,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.8,
   "playerId": "9eba6702-22e5-4b53-b6f0-acc44ac2034d"
  },
  {
   "name": "Johny Mario",
   "gender": "Male",
   "team": "Jersey Devil",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 64,
   "wins": 26,
   "losses": 38,
   "pointsWon": 1146,
   "totalPointsAgainst": 1248,
   "mixedWins": 11,
   "mixedLosses": 21,
   "genderWins": 15,
   "genderLosses": 17,
   "clutchWins": 13,
   "clutchLosses": 7,
   "winPct": 40.6,
   "diff": -102,
   "ppg": 17.9,
   "leagueRank": 127,
   "rating": -0.6,
   "ratingGames": 64,
   "confidence": 92,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.4,
   "playerId": "831c9fae-38c6-4961-8664-634087f5f2f9"
  },
  {
   "name": "Caitlyn Moore",
   "gender": "Female",
   "team": "Picklr Fair Lawn",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 47,
   "wins": 19,
   "losses": 28,
   "pointsWon": 840,
   "totalPointsAgainst": 896,
   "mixedWins": 9,
   "mixedLosses": 14,
   "genderWins": 10,
   "genderLosses": 14,
   "clutchWins": 7,
   "clutchLosses": 11,
   "winPct": 40.4,
   "diff": -56,
   "ppg": 17.9,
   "leagueRank": 121,
   "rating": -1,
   "ratingGames": 47,
   "confidence": 90,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.3,
   "playerId": "905b402c-9a3e-4b59-ba3e-59f32370ad2e"
  },
  {
   "name": "Gog Boonswang",
   "gender": "Male",
   "team": "ACE",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 15,
   "wins": 6,
   "losses": 9,
   "pointsWon": 260,
   "totalPointsAgainst": 286,
   "mixedWins": 4,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 3,
   "clutchLosses": 0,
   "winPct": 40,
   "diff": -26,
   "ppg": 17.3,
   "leagueRank": 193,
   "rating": -1.3,
   "ratingGames": 15,
   "confidence": 75,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.1,
   "playerId": "0de1a7eb-b5b2-4a71-8800-1416980b0e68"
  },
  {
   "name": "Ken Velarde",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 12,
   "losses": 18,
   "pointsWon": 511,
   "totalPointsAgainst": 582,
   "mixedWins": 7,
   "mixedLosses": 7,
   "genderWins": 5,
   "genderLosses": 11,
   "clutchWins": 7,
   "clutchLosses": 6,
   "winPct": 40,
   "diff": -71,
   "ppg": 17,
   "leagueRank": 141,
   "rating": -1.2,
   "ratingGames": 30,
   "confidence": 85,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.4,
   "playerId": "25aa47d0-76b8-48be-a5be-b1d33b423e82"
  },
  {
   "name": "Susan Ackley",
   "gender": "Female",
   "team": "Flemington",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 53,
   "wins": 21,
   "losses": 32,
   "pointsWon": 942,
   "totalPointsAgainst": 1032,
   "mixedWins": 13,
   "mixedLosses": 12,
   "genderWins": 8,
   "genderLosses": 20,
   "clutchWins": 11,
   "clutchLosses": 9,
   "winPct": 39.6,
   "diff": -90,
   "ppg": 17.8,
   "leagueRank": 130,
   "rating": -0.6,
   "ratingGames": 53,
   "confidence": 91,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.5,
   "playerId": "07a0e948-6308-4920-a6a8-1d5945552ecb"
  },
  {
   "name": "Nam Barsh",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 33,
   "wins": 13,
   "losses": 20,
   "pointsWon": 589,
   "totalPointsAgainst": 633,
   "mixedWins": 6,
   "mixedLosses": 11,
   "genderWins": 7,
   "genderLosses": 9,
   "clutchWins": 6,
   "clutchLosses": 7,
   "winPct": 39.4,
   "diff": -44,
   "ppg": 17.8,
   "leagueRank": 133,
   "rating": 0.1,
   "ratingGames": 33,
   "confidence": 87,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.6,
   "playerId": "fa43af77-3cd1-4e61-a8dc-bd714b65d517"
  },
  {
   "name": "Courtney Davis",
   "gender": "Female",
   "team": "Four Seasons",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 61,
   "wins": 24,
   "losses": 37,
   "pointsWon": 1039,
   "totalPointsAgainst": 1156,
   "mixedWins": 6,
   "mixedLosses": 19,
   "genderWins": 18,
   "genderLosses": 18,
   "clutchWins": 7,
   "clutchLosses": 11,
   "winPct": 39.3,
   "diff": -117,
   "ppg": 17,
   "leagueRank": 147,
   "rating": -1.1,
   "ratingGames": 61,
   "confidence": 92,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.1,
   "playerId": "422813d6-2920-4a65-a84d-a29b6cefcd54"
  },
  {
   "name": "Zyril Carilo",
   "gender": "Male",
   "team": "Four Seasons",
   "matches": 10,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 64,
   "wins": 25,
   "losses": 39,
   "pointsWon": 1131,
   "totalPointsAgainst": 1229,
   "mixedWins": 16,
   "mixedLosses": 18,
   "genderWins": 9,
   "genderLosses": 21,
   "clutchWins": 11,
   "clutchLosses": 14,
   "winPct": 39.1,
   "diff": -98,
   "ppg": 17.7,
   "leagueRank": 131,
   "rating": -1.5,
   "ratingGames": 64,
   "confidence": 92,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.1,
   "playerId": "b4efc48a-f302-4d27-8c35-0dac1e68eec8"
  },
  {
   "name": "Casey Jannetta",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 18,
   "wins": 7,
   "losses": 11,
   "pointsWon": 307,
   "totalPointsAgainst": 358,
   "mixedWins": 3,
   "mixedLosses": 5,
   "genderWins": 4,
   "genderLosses": 6,
   "clutchWins": 6,
   "clutchLosses": 2,
   "winPct": 38.9,
   "diff": -51,
   "ppg": 17.1,
   "leagueRank": 192,
   "rating": -1.3,
   "ratingGames": 18,
   "confidence": 78,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.4,
   "playerId": "d458764e-2d62-4817-a96e-9006fead6457"
  },
  {
   "name": "Fabricio Gaona",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 54,
   "wins": 21,
   "losses": 33,
   "pointsWon": 949,
   "totalPointsAgainst": 1050,
   "mixedWins": 11,
   "mixedLosses": 17,
   "genderWins": 10,
   "genderLosses": 16,
   "clutchWins": 11,
   "clutchLosses": 11,
   "winPct": 38.9,
   "diff": -101,
   "ppg": 17.6,
   "leagueRank": 145,
   "rating": -0.3,
   "ratingGames": 54,
   "confidence": 91,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.3,
   "playerId": "ee88d140-1a78-4776-85e0-3f982891576d"
  },
  {
   "name": "Robyn Himelstein",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 31,
   "wins": 12,
   "losses": 19,
   "pointsWon": 563,
   "totalPointsAgainst": 588,
   "mixedWins": 6,
   "mixedLosses": 8,
   "genderWins": 6,
   "genderLosses": 11,
   "clutchWins": 2,
   "clutchLosses": 7,
   "winPct": 38.7,
   "diff": -25,
   "ppg": 18.2,
   "leagueRank": 125,
   "rating": 0.2,
   "ratingGames": 31,
   "confidence": 86,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.7,
   "playerId": "950366ff-1da8-4617-b0d4-0ef68aefd473"
  },
  {
   "name": "Megan Harvey",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 16,
   "losses": 26,
   "pointsWon": 781,
   "totalPointsAgainst": 814,
   "mixedWins": 6,
   "mixedLosses": 14,
   "genderWins": 10,
   "genderLosses": 12,
   "clutchWins": 7,
   "clutchLosses": 12,
   "winPct": 38.1,
   "diff": -33,
   "ppg": 18.6,
   "leagueRank": 123,
   "rating": -0.8,
   "ratingGames": 42,
   "confidence": 88,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": -0.2,
   "playerId": "4d576bb5-e9e5-4ad1-a18f-022508c6a161"
  },
  {
   "name": "Tom Laiso",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 154,
   "totalPointsAgainst": 149,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 3,
   "playerId": "13918154-3673-4dae-946a-2c2d4ac8863f",
   "winPct": 37.5,
   "diff": 5,
   "ppg": 19.3,
   "leagueRank": 197,
   "rating": -1.4,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": -0.8
  },
  {
   "name": "Andre Cristobal",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 154,
   "totalPointsAgainst": 161,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 3,
   "genderLosses": 1,
   "clutchWins": 2,
   "clutchLosses": 3,
   "playerId": "50d796da-0ac2-4f94-af29-212d7865f473",
   "winPct": 37.5,
   "diff": -7,
   "ppg": 19.3,
   "leagueRank": 210,
   "rating": -0.2,
   "ratingGames": 8,
   "confidence": 60,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": -0.1
  },
  {
   "name": "Nicole Devine",
   "gender": "Female",
   "team": "Pickle House",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 3,
   "losses": 5,
   "pointsWon": 142,
   "totalPointsAgainst": 157,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 2,
   "playerId": "2ce3e665-accd-487a-b17d-093382698f90",
   "winPct": 37.5,
   "diff": -15,
   "ppg": 17.8,
   "leagueRank": 218,
   "rating": -0.3,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": 1
  },
  {
   "name": "Jordan Long",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 30,
   "wins": 11,
   "losses": 19,
   "pointsWon": 540,
   "totalPointsAgainst": 565,
   "mixedWins": 5,
   "mixedLosses": 8,
   "genderWins": 6,
   "genderLosses": 11,
   "clutchWins": 2,
   "clutchLosses": 8,
   "winPct": 36.7,
   "diff": -25,
   "ppg": 18,
   "leagueRank": 139,
   "rating": 1.3,
   "ratingGames": 30,
   "confidence": 86,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.9,
   "playerId": "0fbbdbbb-a550-49ae-b04a-111bfe4891f5"
  },
  {
   "name": "Shashank Kamdar",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 44,
   "wins": 16,
   "losses": 28,
   "pointsWon": 796,
   "totalPointsAgainst": 853,
   "mixedWins": 8,
   "mixedLosses": 16,
   "genderWins": 8,
   "genderLosses": 12,
   "clutchWins": 8,
   "clutchLosses": 13,
   "winPct": 36.4,
   "diff": -57,
   "ppg": 18.1,
   "leagueRank": 140,
   "rating": -0.3,
   "ratingGames": 44,
   "confidence": 90,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.5,
   "playerId": "56db4b56-6166-437f-8ece-26576b7042e5"
  },
  {
   "name": "Katherine Maruyama",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 50,
   "wins": 18,
   "losses": 32,
   "pointsWon": 897,
   "totalPointsAgainst": 965,
   "mixedWins": 6,
   "mixedLosses": 19,
   "genderWins": 12,
   "genderLosses": 13,
   "clutchWins": 5,
   "clutchLosses": 11,
   "winPct": 36,
   "diff": -68,
   "ppg": 17.9,
   "leagueRank": 138,
   "rating": -1.4,
   "ratingGames": 50,
   "confidence": 90,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0,
   "playerId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a"
  },
  {
   "name": "Anthony Ursino",
   "gender": "Male",
   "team": "Monroe",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 15,
   "losses": 27,
   "pointsWon": 721,
   "totalPointsAgainst": 807,
   "mixedWins": 3,
   "mixedLosses": 18,
   "genderWins": 12,
   "genderLosses": 9,
   "clutchWins": 7,
   "clutchLosses": 9,
   "winPct": 35.7,
   "diff": -86,
   "ppg": 17.2,
   "leagueRank": 156,
   "rating": -1.2,
   "ratingGames": 42,
   "confidence": 89,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.3,
   "playerId": "1406ff1f-3597-4128-a629-7dfd1dfe1323"
  },
  {
   "name": "Lynda Tomaru",
   "gender": "Female",
   "team": "Flemington",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 51,
   "wins": 18,
   "losses": 33,
   "pointsWon": 902,
   "totalPointsAgainst": 984,
   "mixedWins": 13,
   "mixedLosses": 16,
   "genderWins": 5,
   "genderLosses": 17,
   "clutchWins": 4,
   "clutchLosses": 9,
   "winPct": 35.3,
   "diff": -82,
   "ppg": 17.7,
   "leagueRank": 144,
   "rating": -0.2,
   "ratingGames": 51,
   "confidence": 91,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.5,
   "playerId": "2b001a36-d13c-42fa-ae50-c9cc2f1aeb4e"
  },
  {
   "name": "Steven Maisonet",
   "gender": "Male",
   "team": "ACE",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 13,
   "losses": 24,
   "pointsWon": 640,
   "totalPointsAgainst": 713,
   "mixedWins": 8,
   "mixedLosses": 10,
   "genderWins": 5,
   "genderLosses": 14,
   "clutchWins": 4,
   "clutchLosses": 9,
   "winPct": 35.1,
   "diff": -73,
   "ppg": 17.3,
   "leagueRank": 135,
   "rating": -2.6,
   "ratingGames": 37,
   "confidence": 87,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.2,
   "playerId": "d1bebcc0-9427-45af-9d16-cc023b5dd737"
  },
  {
   "name": "Dhaval Bhavsar",
   "gender": "Male",
   "team": "ACE",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 114,
   "totalPointsAgainst": 121,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 3,
   "playerId": "93294277-1ed3-4757-973d-bb5c1c2a8898",
   "winPct": 33.3,
   "diff": -7,
   "ppg": 19,
   "leagueRank": 217,
   "rating": 0,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 1.2
  },
  {
   "name": "Gopi Narayanan",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 101,
   "totalPointsAgainst": 118,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "5d55a4c4-8271-4e7b-b018-3da88a97c5fe",
   "winPct": 33.3,
   "diff": -17,
   "ppg": 16.8,
   "leagueRank": 223,
   "rating": -2.5,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": -0.4
  },
  {
   "name": "Vaughn Mcclelland",
   "gender": "Male",
   "team": "ACE",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 2,
   "losses": 4,
   "pointsWon": 96,
   "totalPointsAgainst": 120,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 1,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "c33f3ff1-2c81-4630-8980-64fa03a7b102",
   "winPct": 33.3,
   "diff": -24,
   "ppg": 16,
   "leagueRank": 226,
   "rating": -3.1,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.5
  },
  {
   "name": "Jansen Tubo",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 33,
   "wins": 11,
   "losses": 22,
   "pointsWon": 538,
   "totalPointsAgainst": 645,
   "mixedWins": 3,
   "mixedLosses": 10,
   "genderWins": 8,
   "genderLosses": 12,
   "clutchWins": 5,
   "clutchLosses": 2,
   "winPct": 33.3,
   "diff": -107,
   "ppg": 16.3,
   "leagueRank": 162,
   "rating": -1.9,
   "ratingGames": 33,
   "confidence": 87,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 0.6,
   "playerId": "8b8bcad5-6324-48d9-b225-f6739eda8cc0"
  },
  {
   "name": "Kylie Lupica",
   "gender": "Female",
   "team": "Jersey Devil",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 45,
   "wins": 15,
   "losses": 30,
   "pointsWon": 778,
   "totalPointsAgainst": 891,
   "mixedWins": 7,
   "mixedLosses": 16,
   "genderWins": 8,
   "genderLosses": 14,
   "clutchWins": 8,
   "clutchLosses": 8,
   "winPct": 33.3,
   "diff": -113,
   "ppg": 17.3,
   "leagueRank": 154,
   "rating": -2.3,
   "ratingGames": 45,
   "confidence": 90,
   "strengthOfPartners": 0.3,
   "strengthOfOpponents": 0.2,
   "playerId": "9b4b88bf-1f87-46cd-829a-84b82a424b82"
  },
  {
   "name": "Noelle Ramirez",
   "gender": "Female",
   "team": "Flemington",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 28,
   "wins": 9,
   "losses": 19,
   "pointsWon": 479,
   "totalPointsAgainst": 531,
   "mixedWins": 4,
   "mixedLosses": 10,
   "genderWins": 5,
   "genderLosses": 9,
   "clutchWins": 2,
   "clutchLosses": 3,
   "playerId": "f30428dd-bc5a-4535-94b3-b8779e958ada",
   "winPct": 32.1,
   "diff": -52,
   "ppg": 17.1,
   "leagueRank": 191,
   "rating": -0.7,
   "ratingGames": 28,
   "confidence": 85,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.5
  },
  {
   "name": "Aimee Castellano",
   "gender": "Female",
   "team": "Flemington",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 25,
   "wins": 8,
   "losses": 17,
   "pointsWon": 415,
   "totalPointsAgainst": 481,
   "mixedWins": 5,
   "mixedLosses": 5,
   "genderWins": 3,
   "genderLosses": 12,
   "clutchWins": 2,
   "clutchLosses": 2,
   "winPct": 32,
   "diff": -66,
   "ppg": 16.6,
   "leagueRank": 184,
   "rating": -0.9,
   "ratingGames": 25,
   "confidence": 83,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.4,
   "playerId": "e76985fb-efd1-4180-a340-e4f36abbc8b4"
  },
  {
   "name": "Hruday Vemparala",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 3,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 19,
   "wins": 6,
   "losses": 13,
   "pointsWon": 316,
   "totalPointsAgainst": 378,
   "mixedWins": 5,
   "mixedLosses": 5,
   "genderWins": 1,
   "genderLosses": 8,
   "clutchWins": 3,
   "clutchLosses": 2,
   "winPct": 31.6,
   "diff": -62,
   "ppg": 16.6,
   "leagueRank": 202,
   "rating": -0.5,
   "ratingGames": 19,
   "confidence": 79,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 1.4,
   "playerId": "bc3db6dc-48f5-46f3-aec3-638d15ca7285"
  },
  {
   "name": "Ashwin Korde",
   "gender": "Male",
   "team": "Bounce Philly",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 11,
   "losses": 24,
   "pointsWon": 616,
   "totalPointsAgainst": 676,
   "mixedWins": 4,
   "mixedLosses": 11,
   "genderWins": 7,
   "genderLosses": 13,
   "clutchWins": 2,
   "clutchLosses": 9,
   "winPct": 31.4,
   "diff": -60,
   "ppg": 17.6,
   "leagueRank": 150,
   "rating": -1.2,
   "ratingGames": 35,
   "confidence": 87,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.5,
   "playerId": "f9f521ee-5f27-4f61-b4e0-4e0b9ad09aee"
  },
  {
   "name": "Tera Baccile",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 5,
   "losses": 11,
   "pointsWon": 278,
   "totalPointsAgainst": 310,
   "mixedWins": 3,
   "mixedLosses": 5,
   "genderWins": 2,
   "genderLosses": 6,
   "clutchWins": 2,
   "clutchLosses": 3,
   "playerId": "d5aa92c7-71df-47c7-84fb-6710e1ed81e2",
   "winPct": 31.3,
   "diff": -32,
   "ppg": 17.4,
   "leagueRank": 205,
   "rating": -1.9,
   "ratingGames": 16,
   "confidence": 77,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": -0.1
  },
  {
   "name": "Chanda Mccoy",
   "gender": "Female",
   "team": "Pickleball Kingdom Watchung",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 61,
   "wins": 19,
   "losses": 42,
   "pointsWon": 1085,
   "totalPointsAgainst": 1200,
   "mixedWins": 10,
   "mixedLosses": 22,
   "genderWins": 9,
   "genderLosses": 20,
   "clutchWins": 8,
   "clutchLosses": 16,
   "winPct": 31.1,
   "diff": -115,
   "ppg": 17.8,
   "leagueRank": 157,
   "rating": -0.8,
   "ratingGames": 61,
   "confidence": 91,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.4,
   "playerId": "30cb78cb-f962-40f9-bd02-78d336920431"
  },
  {
   "name": "Kaia Hoak",
   "gender": "Female",
   "team": "Jersey Devil",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 9,
   "losses": 20,
   "pointsWon": 479,
   "totalPointsAgainst": 571,
   "mixedWins": 5,
   "mixedLosses": 11,
   "genderWins": 4,
   "genderLosses": 9,
   "clutchWins": 4,
   "clutchLosses": 2,
   "winPct": 31,
   "diff": -92,
   "ppg": 16.5,
   "leagueRank": 171,
   "rating": -2.2,
   "ratingGames": 29,
   "confidence": 85,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.4,
   "playerId": "50257f40-66f5-44f8-a3c7-21ffdf6d510a"
  },
  {
   "name": "Elisangela Harrington",
   "gender": "Female",
   "team": "Pickleball Kingdom Watchung",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 29,
   "wins": 9,
   "losses": 20,
   "pointsWon": 487,
   "totalPointsAgainst": 580,
   "mixedWins": 3,
   "mixedLosses": 10,
   "genderWins": 6,
   "genderLosses": 10,
   "clutchWins": 6,
   "clutchLosses": 4,
   "winPct": 31,
   "diff": -93,
   "ppg": 16.8,
   "leagueRank": 165,
   "rating": -1.6,
   "ratingGames": 29,
   "confidence": 85,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 0.5,
   "playerId": "55bbe71c-1181-4875-b16d-f121f3a133e0"
  },
  {
   "name": "Roshi Desilva",
   "gender": "Female",
   "team": "Four Seasons",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 42,
   "wins": 13,
   "losses": 29,
   "pointsWon": 729,
   "totalPointsAgainst": 824,
   "mixedWins": 3,
   "mixedLosses": 17,
   "genderWins": 10,
   "genderLosses": 12,
   "clutchWins": 5,
   "clutchLosses": 12,
   "winPct": 31,
   "diff": -95,
   "ppg": 17.4,
   "leagueRank": 163,
   "rating": -1,
   "ratingGames": 42,
   "confidence": 89,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 0.1,
   "playerId": "002c6f87-6787-41ea-a2a0-c0fcecc8f6c7"
  },
  {
   "name": "Dilan Shah",
   "gender": "Male",
   "team": "Monroe",
   "matches": 4,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 23,
   "wins": 7,
   "losses": 16,
   "pointsWon": 379,
   "totalPointsAgainst": 447,
   "mixedWins": 3,
   "mixedLosses": 5,
   "genderWins": 4,
   "genderLosses": 11,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 30.4,
   "diff": -68,
   "ppg": 16.5,
   "leagueRank": 182,
   "rating": -2.6,
   "ratingGames": 23,
   "confidence": 81,
   "strengthOfPartners": 0.7,
   "strengthOfOpponents": 0.3,
   "playerId": "91d23f87-e0fc-4448-890e-c3abd96c70b4"
  },
  {
   "name": "Pablo Shin",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 11,
   "losses": 26,
   "pointsWon": 606,
   "totalPointsAgainst": 731,
   "mixedWins": 4,
   "mixedLosses": 14,
   "genderWins": 7,
   "genderLosses": 12,
   "clutchWins": 8,
   "clutchLosses": 7,
   "winPct": 29.7,
   "diff": -125,
   "ppg": 16.4,
   "leagueRank": 166,
   "rating": -2.4,
   "ratingGames": 37,
   "confidence": 88,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.4,
   "playerId": "d2130c6d-6552-422e-b93d-c804bc7303a0"
  },
  {
   "name": "Julia Plein",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 34,
   "wins": 10,
   "losses": 24,
   "pointsWon": 548,
   "totalPointsAgainst": 662,
   "mixedWins": 5,
   "mixedLosses": 12,
   "genderWins": 5,
   "genderLosses": 12,
   "clutchWins": 5,
   "clutchLosses": 8,
   "winPct": 29.4,
   "diff": -114,
   "ppg": 16.1,
   "leagueRank": 174,
   "rating": -2.2,
   "ratingGames": 34,
   "confidence": 87,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.4,
   "playerId": "f3d99274-413c-4720-9c8d-1a71f9b2e717"
  },
  {
   "name": "Francesca Dicolandrea",
   "gender": "Female",
   "team": "Four Seasons",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 128,
   "totalPointsAgainst": 138,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 0,
   "clutchLosses": 3,
   "playerId": "62f0ca90-1f55-4d36-96cf-737dd80043cc",
   "winPct": 28.6,
   "diff": -10,
   "ppg": 18.3,
   "leagueRank": 222,
   "rating": -1.6,
   "ratingGames": 7,
   "confidence": 59,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": -0.4
  },
  {
   "name": "Jessica Williamson",
   "gender": "Female",
   "team": "Picklr Fair Lawn",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 117,
   "totalPointsAgainst": 140,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "ca231aa4-3fd1-422d-b1fd-b7af9cd44cc1",
   "winPct": 28.6,
   "diff": -23,
   "ppg": 16.7,
   "leagueRank": 234,
   "rating": 0.9,
   "ratingGames": 7,
   "confidence": 60,
   "strengthOfPartners": -0.9,
   "strengthOfOpponents": 1.9
  },
  {
   "name": "Katie Lazaar",
   "gender": "Female",
   "team": "Pickleball Kingdom Watchung",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 4,
   "losses": 10,
   "pointsWon": 248,
   "totalPointsAgainst": 274,
   "mixedWins": 0,
   "mixedLosses": 6,
   "genderWins": 4,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 3,
   "playerId": "0bed64f0-b72a-4d63-8d44-347635f58bae",
   "winPct": 28.6,
   "diff": -26,
   "ppg": 17.7,
   "leagueRank": 200,
   "rating": 0.6,
   "ratingGames": 14,
   "confidence": 75,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 1.1
  },
  {
   "name": "Jun Avila",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 2,
   "losses": 5,
   "pointsWon": 111,
   "totalPointsAgainst": 140,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "bdee4e87-571a-426d-a9f8-0cf07cc6a8d6",
   "winPct": 28.6,
   "diff": -29,
   "ppg": 15.9,
   "leagueRank": 240,
   "rating": -0.3,
   "ratingGames": 7,
   "confidence": 61,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 1.1
  },
  {
   "name": "Zach Knapp",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 4,
   "losses": 10,
   "pointsWon": 237,
   "totalPointsAgainst": 283,
   "mixedWins": 1,
   "mixedLosses": 5,
   "genderWins": 3,
   "genderLosses": 5,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 28.6,
   "diff": -46,
   "ppg": 16.9,
   "leagueRank": 216,
   "rating": -1.3,
   "ratingGames": 14,
   "confidence": 73,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.8,
   "playerId": "52084d79-6f78-408c-a7e0-310301b67043"
  },
  {
   "name": "Kathleen Dougherty",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 56,
   "wins": 15,
   "losses": 41,
   "pointsWon": 956,
   "totalPointsAgainst": 1114,
   "mixedWins": 8,
   "mixedLosses": 20,
   "genderWins": 7,
   "genderLosses": 21,
   "clutchWins": 9,
   "clutchLosses": 11,
   "winPct": 26.8,
   "diff": -158,
   "ppg": 17.1,
   "leagueRank": 172,
   "rating": -1.9,
   "ratingGames": 56,
   "confidence": 91,
   "strengthOfPartners": -0.6,
   "strengthOfOpponents": 0.1,
   "playerId": "c929f42d-6fd4-4034-888e-ad456cda3063"
  },
  {
   "name": "Andrew Bernard",
   "gender": "Male",
   "team": "Picklr Fair Lawn",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 27,
   "wins": 7,
   "losses": 20,
   "pointsWon": 437,
   "totalPointsAgainst": 526,
   "mixedWins": 4,
   "mixedLosses": 13,
   "genderWins": 3,
   "genderLosses": 7,
   "clutchWins": 2,
   "clutchLosses": 6,
   "winPct": 25.9,
   "diff": -89,
   "ppg": 16.2,
   "leagueRank": 173,
   "rating": -1.6,
   "ratingGames": 27,
   "confidence": 85,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 0.7,
   "playerId": "8079e74f-c537-4e42-9590-e8d60f10ba3d"
  },
  {
   "name": "Helen Liu",
   "gender": "Female",
   "team": "Monroe",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 35,
   "wins": 9,
   "losses": 26,
   "pointsWon": 570,
   "totalPointsAgainst": 681,
   "mixedWins": 4,
   "mixedLosses": 13,
   "genderWins": 5,
   "genderLosses": 13,
   "clutchWins": 2,
   "clutchLosses": 4,
   "winPct": 25.7,
   "diff": -111,
   "ppg": 16.3,
   "leagueRank": 176,
   "rating": -2.9,
   "ratingGames": 35,
   "confidence": 88,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.2,
   "playerId": "53cc1790-d8b9-4b64-a8b3-6e10b2eeb131"
  },
  {
   "name": "Liby Saigal",
   "gender": "Female",
   "team": "Pickleball Kingdom Watchung",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 148,
   "totalPointsAgainst": 155,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 4,
   "playerId": "dc2026ad-428a-4822-ae40-889727c35b10",
   "winPct": 25,
   "diff": -7,
   "ppg": 18.5,
   "leagueRank": 220,
   "rating": -0.6,
   "ratingGames": 8,
   "confidence": 62,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.1
  },
  {
   "name": "Sarah Kim",
   "gender": "Female",
   "team": "Picklr Fair Lawn",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 1,
   "losses": 3,
   "pointsWon": 66,
   "totalPointsAgainst": 82,
   "mixedWins": 0,
   "mixedLosses": 0,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "6c038507-c217-4774-9549-0f1374916111",
   "winPct": 25,
   "diff": -16,
   "ppg": 16.5,
   "leagueRank": 239,
   "rating": -1,
   "ratingGames": 4,
   "confidence": 47,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 1.4
  },
  {
   "name": "Brittney Lew",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 137,
   "totalPointsAgainst": 157,
   "mixedWins": 2,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 3,
   "playerId": "57fabc8d-1a33-4757-b7f4-e3a161b65008",
   "winPct": 25,
   "diff": -20,
   "ppg": 17.1,
   "leagueRank": 232,
   "rating": -0.6,
   "ratingGames": 8,
   "confidence": 62,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.6
  },
  {
   "name": "Jenny Chen",
   "gender": "Female",
   "team": "Pickleball Kingdom Watchung",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 136,
   "totalPointsAgainst": 159,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "54c51642-8048-4dd1-9221-a4306301ff72",
   "winPct": 25,
   "diff": -23,
   "ppg": 17,
   "leagueRank": 230,
   "rating": -1.2,
   "ratingGames": 8,
   "confidence": 62,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": -0.1
  },
  {
   "name": "Kaley Lai",
   "gender": "Female",
   "team": "ACE",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 4,
   "wins": 1,
   "losses": 3,
   "pointsWon": 58,
   "totalPointsAgainst": 82,
   "mixedWins": 1,
   "mixedLosses": 1,
   "genderWins": 0,
   "genderLosses": 2,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "354f7b98-2207-458f-af42-3e8a7a3630be",
   "winPct": 25,
   "diff": -24,
   "ppg": 14.5,
   "leagueRank": 246,
   "rating": -3.5,
   "ratingGames": 4,
   "confidence": 48,
   "strengthOfPartners": 0.6,
   "strengthOfOpponents": -0.2
  },
  {
   "name": "Jingru Du",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 134,
   "totalPointsAgainst": 160,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "b312fbd5-22d1-4445-bff8-9bf18d762438",
   "winPct": 25,
   "diff": -26,
   "ppg": 16.8,
   "leagueRank": 229,
   "rating": -2.1,
   "ratingGames": 8,
   "confidence": 64,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 0.5
  },
  {
   "name": "Nathan Malhotra",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 137,
   "totalPointsAgainst": 164,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 2,
   "genderLosses": 2,
   "clutchWins": 2,
   "clutchLosses": 1,
   "playerId": "98bd685a-3161-45fc-941f-3a8c9f4849cf",
   "winPct": 25,
   "diff": -27,
   "ppg": 17.1,
   "leagueRank": 233,
   "rating": -0.7,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 1
  },
  {
   "name": "Drew Youssef",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 125,
   "totalPointsAgainst": 156,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "d13d6c03-eea2-44f3-a497-965b1e95ea83",
   "winPct": 25,
   "diff": -31,
   "ppg": 15.6,
   "leagueRank": 244,
   "rating": -1.8,
   "ratingGames": 8,
   "confidence": 60,
   "strengthOfPartners": -2.4,
   "strengthOfOpponents": -0.6
  },
  {
   "name": "Jerome Bautista",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 2,
   "losses": 6,
   "pointsWon": 130,
   "totalPointsAgainst": 162,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 1,
   "clutchLosses": 1,
   "playerId": "b9ebf080-1450-4acf-92ac-7ec20d8731a2",
   "winPct": 25,
   "diff": -32,
   "ppg": 16.3,
   "leagueRank": 238,
   "rating": -2.1,
   "ratingGames": 8,
   "confidence": 63,
   "strengthOfPartners": 0.2,
   "strengthOfOpponents": 0.5
  },
  {
   "name": "Daniel Gallegos",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 69,
   "wins": 17,
   "losses": 52,
   "pointsWon": 1129,
   "totalPointsAgainst": 1391,
   "mixedWins": 11,
   "mixedLosses": 25,
   "genderWins": 6,
   "genderLosses": 27,
   "clutchWins": 8,
   "clutchLosses": 13,
   "winPct": 24.6,
   "diff": -262,
   "ppg": 16.4,
   "leagueRank": 180,
   "rating": -2.3,
   "ratingGames": 69,
   "confidence": 92,
   "strengthOfPartners": -0.4,
   "strengthOfOpponents": 0.5,
   "playerId": "6f9cb35b-f24c-4480-a8b4-86e6ea32f3c2"
  },
  {
   "name": "Eric Nguyen",
   "gender": "Male",
   "team": "Four Seasons",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 41,
   "wins": 10,
   "losses": 31,
   "pointsWon": 662,
   "totalPointsAgainst": 820,
   "mixedWins": 5,
   "mixedLosses": 17,
   "genderWins": 5,
   "genderLosses": 14,
   "clutchWins": 4,
   "clutchLosses": 6,
   "winPct": 24.4,
   "diff": -158,
   "ppg": 16.1,
   "leagueRank": 189,
   "rating": -0.9,
   "ratingGames": 41,
   "confidence": 89,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": 0.5,
   "playerId": "87d526c6-72b6-4b17-bf77-9016fd049541"
  },
  {
   "name": "Christine Ferraez",
   "gender": "Female",
   "team": "Flemington",
   "matches": 8,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 47,
   "wins": 11,
   "losses": 36,
   "pointsWon": 777,
   "totalPointsAgainst": 947,
   "mixedWins": 7,
   "mixedLosses": 14,
   "genderWins": 4,
   "genderLosses": 22,
   "clutchWins": 6,
   "clutchLosses": 9,
   "winPct": 23.4,
   "diff": -170,
   "ppg": 16.5,
   "leagueRank": 177,
   "rating": -3.5,
   "ratingGames": 47,
   "confidence": 90,
   "strengthOfPartners": 0.5,
   "strengthOfOpponents": 0.1,
   "playerId": "ffe0a04b-eb97-4dda-8bc0-0ebe0fd1089e"
  },
  {
   "name": "Lauren Mercado",
   "gender": "Female",
   "team": "Four Seasons",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 54,
   "wins": 12,
   "losses": 42,
   "pointsWon": 848,
   "totalPointsAgainst": 1092,
   "mixedWins": 1,
   "mixedLosses": 26,
   "genderWins": 11,
   "genderLosses": 16,
   "clutchWins": 7,
   "clutchLosses": 5,
   "winPct": 22.2,
   "diff": -244,
   "ppg": 15.7,
   "leagueRank": 194,
   "rating": -3,
   "ratingGames": 54,
   "confidence": 91,
   "strengthOfPartners": -0.8,
   "strengthOfOpponents": 0.2,
   "playerId": "0aa554f3-0eca-4f2d-b3d9-b277406a7435"
  },
  {
   "name": "Keith Shedlock",
   "gender": "Male",
   "team": "Pickleball Palace",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 46,
   "wins": 10,
   "losses": 36,
   "pointsWon": 783,
   "totalPointsAgainst": 917,
   "mixedWins": 5,
   "mixedLosses": 20,
   "genderWins": 5,
   "genderLosses": 16,
   "clutchWins": 4,
   "clutchLosses": 10,
   "winPct": 21.7,
   "diff": -134,
   "ppg": 17,
   "leagueRank": 168,
   "rating": -2.8,
   "ratingGames": 46,
   "confidence": 90,
   "strengthOfPartners": 1.1,
   "strengthOfOpponents": 0.5,
   "playerId": "f4b44cd7-fc9a-41a2-b569-cdaf08b0bf26"
  },
  {
   "name": "Jessica Zook",
   "gender": "Female",
   "team": "Four Seasons",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 3,
   "losses": 11,
   "pointsWon": 225,
   "totalPointsAgainst": 279,
   "mixedWins": 2,
   "mixedLosses": 5,
   "genderWins": 1,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 5,
   "playerId": "2095ce62-211d-400f-b2a1-b7d03eecb270",
   "winPct": 21.4,
   "diff": -54,
   "ppg": 16.1,
   "leagueRank": 221,
   "rating": -1.8,
   "ratingGames": 14,
   "confidence": 73,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 0.1
  },
  {
   "name": "Justin Bautista",
   "gender": "Male",
   "team": "Four Seasons",
   "matches": 9,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 55,
   "wins": 11,
   "losses": 44,
   "pointsWon": 903,
   "totalPointsAgainst": 1104,
   "mixedWins": 5,
   "mixedLosses": 25,
   "genderWins": 6,
   "genderLosses": 19,
   "clutchWins": 3,
   "clutchLosses": 8,
   "winPct": 20,
   "diff": -201,
   "ppg": 16.4,
   "leagueRank": 190,
   "rating": -1.1,
   "ratingGames": 55,
   "confidence": 91,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 0.6,
   "playerId": "27660961-6245-4b09-aafe-359ca3205797"
  },
  {
   "name": "Matthew Kraft",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 6,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 37,
   "wins": 7,
   "losses": 30,
   "pointsWon": 599,
   "totalPointsAgainst": 756,
   "mixedWins": 5,
   "mixedLosses": 16,
   "genderWins": 2,
   "genderLosses": 14,
   "clutchWins": 5,
   "clutchLosses": 8,
   "winPct": 18.9,
   "diff": -157,
   "ppg": 16.2,
   "leagueRank": 196,
   "rating": -2.2,
   "ratingGames": 37,
   "confidence": 88,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.7,
   "playerId": "f2cb8ea7-ed55-42cc-be8e-9f8352a330e8"
  },
  {
   "name": "Eric Gibbs",
   "gender": "Male",
   "team": "Four Seasons",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 32,
   "wins": 6,
   "losses": 26,
   "pointsWon": 553,
   "totalPointsAgainst": 650,
   "mixedWins": 4,
   "mixedLosses": 12,
   "genderWins": 2,
   "genderLosses": 14,
   "clutchWins": 3,
   "clutchLosses": 10,
   "winPct": 18.8,
   "diff": -97,
   "ppg": 17.3,
   "leagueRank": 178,
   "rating": -1.9,
   "ratingGames": 32,
   "confidence": 86,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 0.1,
   "playerId": "0c1a11c0-7f89-48fa-af2f-3f9925039239"
  },
  {
   "name": "Brian Hamilton",
   "gender": "Male",
   "team": "Four Seasons",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 115,
   "totalPointsAgainst": 122,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 4,
   "winPct": 16.7,
   "diff": -7,
   "ppg": 19.2,
   "leagueRank": 224,
   "rating": 0.1,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": -1.4,
   "strengthOfOpponents": 0,
   "playerId": "5823138b-ebe1-4278-9f84-90f94f442226"
  },
  {
   "name": "Deepak Sunku",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 0,
   "outsideSub": true,
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
   "playerId": "ce590106-6f19-43b7-8a91-4dc31d28eb31",
   "winPct": 16.7,
   "diff": -16,
   "ppg": 17.2,
   "leagueRank": 236,
   "rating": -0.5,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 1
  },
  {
   "name": "Hiep Pham",
   "gender": "Male",
   "team": "Four Seasons",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 100,
   "totalPointsAgainst": 119,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "515009fd-ac6a-4124-a871-dff85a118781",
   "winPct": 16.7,
   "diff": -19,
   "ppg": 16.7,
   "leagueRank": 242,
   "rating": -1.5,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": -2.4,
   "strengthOfOpponents": -0.9
  },
  {
   "name": "Stanley Bonczek",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 1,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 1,
   "losses": 5,
   "pointsWon": 98,
   "totalPointsAgainst": 122,
   "mixedWins": 0,
   "mixedLosses": 2,
   "genderWins": 1,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 2,
   "winPct": 16.7,
   "diff": -24,
   "ppg": 16.3,
   "leagueRank": 245,
   "rating": -2,
   "ratingGames": 6,
   "confidence": 54,
   "strengthOfPartners": 0.1,
   "strengthOfOpponents": 0.4,
   "playerId": "f4cd45db-8d83-423a-8936-c7d7a3b0ffad"
  },
  {
   "name": "Igor Silva",
   "gender": "Male",
   "team": "Monroe",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 2,
   "losses": 11,
   "pointsWon": 209,
   "totalPointsAgainst": 260,
   "mixedWins": 0,
   "mixedLosses": 6,
   "genderWins": 2,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 5,
   "winPct": 15.4,
   "diff": -51,
   "ppg": 16.1,
   "leagueRank": 235,
   "rating": -1.2,
   "ratingGames": 13,
   "confidence": 73,
   "strengthOfPartners": -0.5,
   "strengthOfOpponents": 0.9,
   "playerId": "5afe23db-84a2-4062-a1da-ab6c834b0447"
  },
  {
   "name": "Bryan Nardone",
   "gender": "Male",
   "team": "Four Seasons",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 4,
   "losses": 22,
   "pointsWon": 369,
   "totalPointsAgainst": 527,
   "mixedWins": 2,
   "mixedLosses": 11,
   "genderWins": 2,
   "genderLosses": 11,
   "clutchWins": 1,
   "clutchLosses": 0,
   "winPct": 15.4,
   "diff": -158,
   "ppg": 14.2,
   "leagueRank": 219,
   "rating": -2.5,
   "ratingGames": 26,
   "confidence": 83,
   "strengthOfPartners": -2.2,
   "strengthOfOpponents": 0.5,
   "playerId": "a479d794-d9d0-4620-b322-b7f249f2ae5f"
  },
  {
   "name": "Teresa Wang",
   "gender": "Female",
   "team": "Bounce Malvern",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 7,
   "wins": 1,
   "losses": 6,
   "pointsWon": 102,
   "totalPointsAgainst": 143,
   "mixedWins": 1,
   "mixedLosses": 2,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "741de6b9-5fe7-49aa-9c55-5ff4050bb7a1",
   "winPct": 14.3,
   "diff": -41,
   "ppg": 14.6,
   "leagueRank": 254,
   "rating": -1.5,
   "ratingGames": 7,
   "confidence": 60,
   "strengthOfPartners": 0.9,
   "strengthOfOpponents": 2.1
  },
  {
   "name": "Anh Nguyen",
   "gender": "Female",
   "team": "Four Seasons",
   "matches": 7,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 38,
   "wins": 5,
   "losses": 33,
   "pointsWon": 566,
   "totalPointsAgainst": 770,
   "mixedWins": 5,
   "mixedLosses": 17,
   "genderWins": 0,
   "genderLosses": 16,
   "clutchWins": 0,
   "clutchLosses": 6,
   "winPct": 13.2,
   "diff": -204,
   "ppg": 14.9,
   "leagueRank": 209,
   "rating": -3,
   "ratingGames": 38,
   "confidence": 88,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 0.3,
   "playerId": "3478a097-ab58-413c-b90e-aef96e00fbfa"
  },
  {
   "name": "Susan St. Pierre",
   "gender": "Female",
   "team": "Pickleball Kingdom Watchung",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 1,
   "losses": 7,
   "pointsWon": 132,
   "totalPointsAgainst": 158,
   "mixedWins": 1,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 2,
   "playerId": "001c2d38-829b-4fd0-b249-472f78337387",
   "winPct": 12.5,
   "diff": -26,
   "ppg": 16.5,
   "leagueRank": 249,
   "rating": -1.1,
   "ratingGames": 8,
   "confidence": 60,
   "strengthOfPartners": -2.4,
   "strengthOfOpponents": -0.4
  },
  {
   "name": "Rebecca Chow",
   "gender": "Female",
   "team": "Pickleball Kingdom Watchung",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 16,
   "wins": 2,
   "losses": 14,
   "pointsWon": 241,
   "totalPointsAgainst": 328,
   "mixedWins": 0,
   "mixedLosses": 8,
   "genderWins": 2,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 3,
   "playerId": "7dcd9e34-fb5f-42ca-b990-40589f7602af",
   "winPct": 12.5,
   "diff": -87,
   "ppg": 15.1,
   "leagueRank": 231,
   "rating": -1.9,
   "ratingGames": 16,
   "confidence": 77,
   "strengthOfPartners": -1.3,
   "strengthOfOpponents": 0.9
  },
  {
   "name": "James Chau",
   "gender": "Male",
   "team": "Four Seasons",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 13,
   "wins": 1,
   "losses": 12,
   "pointsWon": 158,
   "totalPointsAgainst": 271,
   "mixedWins": 1,
   "mixedLosses": 6,
   "genderWins": 0,
   "genderLosses": 6,
   "clutchWins": 1,
   "clutchLosses": 0,
   "playerId": "6cfba5c8-d2dd-4203-aca2-b9827dd20939",
   "winPct": 7.7,
   "diff": -113,
   "ppg": 12.2,
   "leagueRank": 256,
   "rating": -1.9,
   "ratingGames": 13,
   "confidence": 73,
   "strengthOfPartners": -1.6,
   "strengthOfOpponents": 2.3
  },
  {
   "name": "Lukas Choi",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 2,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 1,
   "losses": 13,
   "pointsWon": 235,
   "totalPointsAgainst": 285,
   "mixedWins": 0,
   "mixedLosses": 8,
   "genderWins": 1,
   "genderLosses": 5,
   "clutchWins": 0,
   "clutchLosses": 5,
   "winPct": 7.1,
   "diff": -50,
   "ppg": 16.8,
   "leagueRank": 228,
   "rating": -0.7,
   "ratingGames": 14,
   "confidence": 75,
   "strengthOfPartners": -0.1,
   "strengthOfOpponents": 1.3,
   "playerId": "97cb10ea-1dd5-42c7-83f0-1465bdec9d0b"
  },
  {
   "name": "Scott Chen Cheng",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 1,
   "losses": 13,
   "pointsWon": 199,
   "totalPointsAgainst": 292,
   "mixedWins": 0,
   "mixedLosses": 6,
   "genderWins": 1,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 4,
   "playerId": "cf114aa2-0fde-4f47-862d-7d2f729b3b49",
   "winPct": 7.1,
   "diff": -93,
   "ppg": 14.2,
   "leagueRank": 250,
   "rating": -2.3,
   "ratingGames": 14,
   "confidence": 72,
   "strengthOfPartners": -2.6,
   "strengthOfOpponents": 0.5
  },
  {
   "name": "Andrew Liou",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 14,
   "wins": 1,
   "losses": 13,
   "pointsWon": 195,
   "totalPointsAgainst": 292,
   "mixedWins": 0,
   "mixedLosses": 6,
   "genderWins": 1,
   "genderLosses": 7,
   "clutchWins": 1,
   "clutchLosses": 2,
   "playerId": "fd14ada2-5855-4bb3-a8cd-d68aba23ba95",
   "winPct": 7.1,
   "diff": -97,
   "ppg": 13.9,
   "leagueRank": 248,
   "rating": -4.8,
   "ratingGames": 14,
   "confidence": 73,
   "strengthOfPartners": -1.1,
   "strengthOfOpponents": -0.2
  },
  {
   "name": "Melissa Xu",
   "gender": "Female",
   "team": "Four Seasons",
   "matches": 5,
   "outsideSub": false,
   "isCaptain": false,
   "gamesPlayed": 26,
   "wins": 1,
   "losses": 25,
   "pointsWon": 366,
   "totalPointsAgainst": 544,
   "mixedWins": 0,
   "mixedLosses": 15,
   "genderWins": 1,
   "genderLosses": 10,
   "clutchWins": 1,
   "clutchLosses": 5,
   "winPct": 3.8,
   "diff": -178,
   "ppg": 14.1,
   "leagueRank": 227,
   "rating": -3.4,
   "ratingGames": 26,
   "confidence": 84,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": 0.5,
   "playerId": "a1be2c26-76d3-414d-89fd-8334435b97c2"
  },
  {
   "name": "Glenn Hillman",
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
   "leagueRank": 270,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "316cd007-2c93-473d-a8d8-61a5fbbfa002"
  },
  {
   "name": "Marcin Glowacki",
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
   "leagueRank": 268,
   "rating": null,
   "ratingGames": 0,
   "confidence": 0,
   "strengthOfPartners": null,
   "strengthOfOpponents": null,
   "playerId": "e47d28f2-187f-4aa7-acb8-356787ff82e5"
  },
  {
   "name": "Sophia Kaufmann",
   "gender": "Female",
   "team": "Monroe",
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
   "clutchLosses": 2,
   "playerId": "44f258b0-52df-4c16-8d1e-a9f2d65b439e",
   "winPct": 0,
   "diff": -18,
   "ppg": 18,
   "leagueRank": 251,
   "rating": -0.6,
   "ratingGames": 6,
   "confidence": 57,
   "strengthOfPartners": -0.2,
   "strengthOfOpponents": 0.9
  },
  {
   "name": "Caleb Perry-Abner",
   "gender": "Male",
   "team": "ACE",
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
   "clutchLosses": 1,
   "playerId": "c25e04ae-a9bf-4943-858d-5b7a94261e43",
   "winPct": 0,
   "diff": -28,
   "ppg": 15.4,
   "leagueRank": 255,
   "rating": -1.5,
   "ratingGames": 5,
   "confidence": 53,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 1.4
  },
  {
   "name": "Obe Janvier",
   "gender": "Male",
   "team": "Pickle House",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 93,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "50fccc8f-a4a9-490b-a7d5-eebbda35bb22",
   "winPct": 0,
   "diff": -33,
   "ppg": 15.5,
   "leagueRank": 253,
   "rating": -3,
   "ratingGames": 6,
   "confidence": 57,
   "strengthOfPartners": 1.2,
   "strengthOfOpponents": 0.9
  },
  {
   "name": "Jim Darcangelo",
   "gender": "Male",
   "team": "Bounce Malvern",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 84,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "0530512b-466d-4ff7-9e89-7961b4a63110",
   "winPct": 0,
   "diff": -42,
   "ppg": 14,
   "leagueRank": 258,
   "rating": -2.5,
   "ratingGames": 6,
   "confidence": 57,
   "strengthOfPartners": -0.3,
   "strengthOfOpponents": 1.3
  },
  {
   "name": "Aj Pingol",
   "gender": "Male",
   "team": "Four Seasons",
   "matches": 0,
   "outsideSub": true,
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
   "clutchLosses": 1,
   "playerId": "6e07ffb1-a0b5-461c-990a-68a2bd296fb6",
   "winPct": 0,
   "diff": -43,
   "ppg": 13.8,
   "leagueRank": 259,
   "rating": -1.9,
   "ratingGames": 6,
   "confidence": 55,
   "strengthOfPartners": -2.3,
   "strengthOfOpponents": 0.8
  },
  {
   "name": "Dina Perrella",
   "gender": "Female",
   "team": "Pickleball Kingdom Watchung",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 0,
   "losses": 8,
   "pointsWon": 124,
   "totalPointsAgainst": 168,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "4c4297a1-6537-482c-aeee-beb3aa5c3eb1",
   "winPct": 0,
   "diff": -44,
   "ppg": 15.5,
   "leagueRank": 257,
   "rating": -1.9,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": -2.4,
   "strengthOfOpponents": 0.1
  },
  {
   "name": "Sean O'Connell",
   "gender": "Male",
   "team": "Flemington",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 6,
   "wins": 0,
   "losses": 6,
   "pointsWon": 76,
   "totalPointsAgainst": 126,
   "mixedWins": 0,
   "mixedLosses": 3,
   "genderWins": 0,
   "genderLosses": 3,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "6d9b173b-57b7-499c-9bde-9bdafd152968",
   "winPct": 0,
   "diff": -50,
   "ppg": 12.7,
   "leagueRank": 262,
   "rating": -3.3,
   "ratingGames": 6,
   "confidence": 56,
   "strengthOfPartners": -0.7,
   "strengthOfOpponents": 1.1
  },
  {
   "name": "Jennifer Hansen",
   "gender": "Female",
   "team": "Pickleball Kingdom Watchung",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 0,
   "losses": 8,
   "pointsWon": 110,
   "totalPointsAgainst": 168,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "762e975c-b3df-450e-a9c9-e502fcb2870e",
   "winPct": 0,
   "diff": -58,
   "ppg": 13.8,
   "leagueRank": 261,
   "rating": -3.5,
   "ratingGames": 8,
   "confidence": 58,
   "strengthOfPartners": -1.9,
   "strengthOfOpponents": 0
  },
  {
   "name": "Sue Lyle",
   "gender": "Female",
   "team": "Bounce Philly",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 0,
   "losses": 8,
   "pointsWon": 107,
   "totalPointsAgainst": 168,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 1,
   "playerId": "5b600631-57fc-476c-9bbb-6951d5ffd294",
   "winPct": 0,
   "diff": -61,
   "ppg": 13.4,
   "leagueRank": 260,
   "rating": -3.4,
   "ratingGames": 8,
   "confidence": 64,
   "strengthOfPartners": 0,
   "strengthOfOpponents": 1.3
  },
  {
   "name": "Jeremy Laub",
   "gender": "Male",
   "team": "Pickleball Kingdom Watchung",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 8,
   "wins": 0,
   "losses": 8,
   "pointsWon": 94,
   "totalPointsAgainst": 168,
   "mixedWins": 0,
   "mixedLosses": 4,
   "genderWins": 0,
   "genderLosses": 4,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "0faa4b04-ad3b-4f63-9f4d-572ae183e2cc",
   "winPct": 0,
   "diff": -74,
   "ppg": 11.8,
   "leagueRank": 264,
   "rating": -3.6,
   "ratingGames": 8,
   "confidence": 61,
   "strengthOfPartners": -2,
   "strengthOfOpponents": 0.9
  },
  {
   "name": "Riguo Zheng",
   "gender": "Male",
   "team": "Four Seasons",
   "matches": 0,
   "outsideSub": true,
   "isCaptain": false,
   "gamesPlayed": 12,
   "wins": 0,
   "losses": 12,
   "pointsWon": 134,
   "totalPointsAgainst": 252,
   "mixedWins": 0,
   "mixedLosses": 6,
   "genderWins": 0,
   "genderLosses": 6,
   "clutchWins": 0,
   "clutchLosses": 0,
   "playerId": "c5fa0e7c-eb97-45fa-8a86-850a918fff54",
   "winPct": 0,
   "diff": -118,
   "ppg": 11.2,
   "leagueRank": 263,
   "rating": -2.7,
   "ratingGames": 12,
   "confidence": 71,
   "strengthOfPartners": -2.5,
   "strengthOfOpponents": 1.8
  }
 ],
 "teams": [
  {
   "name": "Dill Dinkers Hatboro",
   "w": 10,
   "l": 0,
   "pf": 6505,
   "pa": 5375,
   "gw": 235,
   "gl": 85,
   "diff": 1130,
   "gameDiff": 150,
   "power": 1.7,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     123,
     37
    ],
    "male": [
     57,
     23
    ],
    "female": [
     55,
     25
    ]
   }
  },
  {
   "name": "Pickle House",
   "w": 9,
   "l": 2,
   "pf": 6993,
   "pa": 6323,
   "gw": 216,
   "gl": 136,
   "diff": 670,
   "gameDiff": 80,
   "power": 1.1,
   "powerRank": 1,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     102,
     74
    ],
    "male": [
     49,
     39
    ],
    "female": [
     65,
     23
    ]
   }
  },
  {
   "name": "ACE",
   "w": 8,
   "l": 2,
   "pf": 6110,
   "pa": 5919,
   "gw": 176,
   "gl": 144,
   "diff": 191,
   "gameDiff": 32,
   "power": 0.4,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     89,
     71
    ],
    "male": [
     42,
     38
    ],
    "female": [
     45,
     35
    ]
   }
  },
  {
   "name": "Pickleball Palace",
   "w": 8,
   "l": 3,
   "pf": 6871,
   "pa": 6427,
   "gw": 202,
   "gl": 150,
   "diff": 444,
   "gameDiff": 52,
   "power": 1,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     98,
     78
    ],
    "male": [
     44,
     44
    ],
    "female": [
     60,
     28
    ]
   }
  },
  {
   "name": "Bounce Philly",
   "w": 6,
   "l": 5,
   "pf": 6743,
   "pa": 6653,
   "gw": 180,
   "gl": 172,
   "diff": 90,
   "gameDiff": 8,
   "power": 0.5,
   "powerRank": 2,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     87,
     89
    ],
    "male": [
     54,
     34
    ],
    "female": [
     39,
     49
    ]
   }
  },
  {
   "name": "Monroe",
   "w": 6,
   "l": 5,
   "pf": 6601,
   "pa": 6780,
   "gw": 174,
   "gl": 178,
   "diff": -179,
   "gameDiff": -4,
   "power": 0.3,
   "powerRank": 4,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     91,
     85
    ],
    "male": [
     50,
     38
    ],
    "female": [
     33,
     55
    ]
   }
  },
  {
   "name": "Picklr Fair Lawn",
   "w": 5,
   "l": 6,
   "pf": 6674,
   "pa": 6717,
   "gw": 183,
   "gl": 169,
   "diff": -43,
   "gameDiff": 14,
   "power": 0.4,
   "powerRank": 3,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     88,
     88
    ],
    "male": [
     45,
     43
    ],
    "female": [
     50,
     38
    ]
   }
  },
  {
   "name": "Jersey Devil",
   "w": 4,
   "l": 7,
   "pf": 6673,
   "pa": 6766,
   "gw": 169,
   "gl": 183,
   "diff": -93,
   "gameDiff": -14,
   "power": 0.3,
   "powerRank": 4,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     87,
     89
    ],
    "male": [
     43,
     45
    ],
    "female": [
     39,
     49
    ]
   }
  },
  {
   "name": "Bounce Malvern",
   "w": 3,
   "l": 8,
   "pf": 6478,
   "pa": 6856,
   "gw": 143,
   "gl": 209,
   "diff": -378,
   "gameDiff": -66,
   "power": -0.2,
   "powerRank": 5,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     68,
     108
    ],
    "male": [
     42,
     46
    ],
    "female": [
     33,
     55
    ]
   }
  },
  {
   "name": "Pickleball Kingdom Watchung",
   "w": 3,
   "l": 8,
   "pf": 6327,
   "pa": 6985,
   "gw": 129,
   "gl": 223,
   "diff": -658,
   "gameDiff": -94,
   "power": -0.5,
   "powerRank": 6,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     64,
     112
    ],
    "male": [
     30,
     58
    ],
    "female": [
     35,
     53
    ]
   }
  },
  {
   "name": "Flemington",
   "w": 2,
   "l": 9,
   "pf": 6547,
   "pa": 6813,
   "gw": 156,
   "gl": 196,
   "diff": -266,
   "gameDiff": -40,
   "power": -0.1,
   "powerRank": 5,
   "pod": 1,
   "reportedPod": "North",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     89,
     87
    ],
    "male": [
     40,
     48
    ],
    "female": [
     27,
     61
    ]
   }
  },
  {
   "name": "Four Seasons",
   "w": 1,
   "l": 10,
   "pf": 6084,
   "pa": 6992,
   "gw": 117,
   "gl": 235,
   "diff": -908,
   "gameDiff": -118,
   "power": -1,
   "powerRank": 6,
   "pod": 1,
   "reportedPod": "South",
   "podName": "North / South",
   "fmt": {
    "mixed": [
     54,
     122
    ],
    "male": [
     24,
     64
    ],
    "female": [
     39,
     49
    ]
   }
  }
 ],
 "duos": [
  {
   "a": "Rayna Baizman",
   "b": "Ozair Ibrahim",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 3.4,
   "avgActual": 10,
   "avgExpected": 2.1,
   "aId": "108620c9-1cbb-4ea0-846c-bc781f1decea",
   "bId": "c6fc34a8-e441-4850-b37c-c29b35563989"
  },
  {
   "a": "Rachel Berger",
   "b": "Shelah Wallace",
   "team": "Jersey Devil",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 2.7,
   "avgActual": 3.4,
   "avgExpected": -0.7,
   "aId": "9b7488c5-bc66-41e4-8fa5-873e70c190e3",
   "bId": "fa519fb1-87ca-4a7b-9265-4aba9807929f"
  },
  {
   "a": "Helen Liu",
   "b": "Morgan Fishman",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 2.5,
   "avgActual": 4,
   "avgExpected": -1.8,
   "aId": "53cc1790-d8b9-4b64-a8b3-6e10b2eeb131",
   "bId": "5ccee070-0af8-4363-9ddb-6ce8ebce098f"
  },
  {
   "a": "Grant Hanak",
   "b": "Nick Meale",
   "team": "Bounce Malvern",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 2.5,
   "avgActual": 5,
   "avgExpected": 1,
   "aId": "44a0a4da-e7cb-4037-9018-97544dfce248",
   "bId": "ec0bad09-8256-49b3-ae86-3add22dd995f"
  },
  {
   "a": "Morgan Fishman",
   "b": "Jacob Yandoli",
   "team": "Monroe",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.4,
   "avgActual": 5.3,
   "avgExpected": -0.3,
   "aId": "5ccee070-0af8-4363-9ddb-6ce8ebce098f",
   "bId": "be9bc229-2d57-4236-a951-11a2f91a09a3"
  },
  {
   "a": "Nick Dehmer",
   "b": "Emily Babinsky",
   "team": "Pickle House",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.3,
   "avgActual": 8.3,
   "avgExpected": 2.9,
   "aId": "3cd8477e-8352-44a7-916f-ac2e3c3005f2",
   "bId": "d0e2c1ea-529d-4364-b521-cb205ecdded3"
  },
  {
   "a": "Roshi Desilva",
   "b": "Courtney Davis",
   "team": "Four Seasons",
   "n": 9,
   "w": 5,
   "l": 4,
   "synergy": 2.2,
   "avgActual": 0.8,
   "avgExpected": -2.4,
   "aId": "002c6f87-6787-41ea-a2a0-c0fcecc8f6c7",
   "bId": "422813d6-2920-4a65-a84d-a29b6cefcd54"
  },
  {
   "a": "Kerrin Maurer",
   "b": "Lissa Eagles",
   "team": "Pickle House",
   "n": 6,
   "w": 6,
   "l": 0,
   "synergy": 2.2,
   "avgActual": 7.7,
   "avgExpected": 4,
   "aId": "1d63ce3d-20c2-40ae-94ca-e8e6e458004e",
   "bId": "9ec39678-a120-45de-b8a5-897b8cf900cd"
  },
  {
   "a": "Nahla Bernhardt",
   "b": "Jeff Comer",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.1,
   "avgActual": 9,
   "avgExpected": 4.1,
   "aId": "9dae8c17-6878-473a-83e9-a43b434f876b",
   "bId": "afacd45c-4801-4062-9401-f721e8d73d08"
  },
  {
   "a": "Amanda Ksiezopolski",
   "b": "Eric Lin",
   "team": "Monroe",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2.1,
   "avgActual": 4.7,
   "avgExpected": -0.2,
   "aId": "2138af89-34bc-4ee2-9955-ff16f0997031",
   "bId": "4ce1c715-b187-47c5-b6dc-d079f802499d"
  },
  {
   "a": "Chris Bucaro",
   "b": "Chris Frangipane",
   "team": "Monroe",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 2,
   "avgActual": 6.2,
   "avgExpected": 2.7,
   "aId": "0e43724a-794d-4218-9da4-d0e83d35ffb2",
   "bId": "e8bb81fd-869a-459d-8108-b9ac6bc1b84d"
  },
  {
   "a": "Kathleen Dougherty",
   "b": "Matthew Kraft",
   "team": "Bounce Malvern",
   "n": 10,
   "w": 4,
   "l": 6,
   "synergy": 2,
   "avgActual": -1.9,
   "avgExpected": -4.7,
   "aId": "c929f42d-6fd4-4034-888e-ad456cda3063",
   "bId": "f2cb8ea7-ed55-42cc-be8e-9f8352a330e8"
  },
  {
   "a": "Steven Fernandez",
   "b": "Dylan Ashbach",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 2,
   "avgActual": 5.3,
   "avgExpected": 0.7,
   "aId": "7a9bc90f-45eb-410a-a56b-a1b7c9a8145c",
   "bId": "d9f11069-342b-4bf7-9a7a-cbeece0396be"
  },
  {
   "a": "Kara Infante",
   "b": "Phil Chang",
   "team": "Picklr Fair Lawn",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 2,
   "avgActual": 2.9,
   "avgExpected": 0,
   "aId": "06edda3d-3a1f-4010-86fa-8ac767cd7079",
   "bId": "a31d5bae-fddc-44ca-9782-f3eb86667058"
  },
  {
   "a": "Pearly Leung",
   "b": "Johanna Wagner",
   "team": "Picklr Fair Lawn",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2,
   "avgActual": 5,
   "avgExpected": 0.2,
   "aId": "581070ec-7106-4558-bc86-4df0675682cb",
   "bId": "e447eb0f-dc19-4616-a7f4-b53de776db3b"
  },
  {
   "a": "Jase Volz",
   "b": "Annemarie Mccartney",
   "team": "ACE",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2,
   "avgActual": 5.3,
   "avgExpected": 0.6,
   "aId": "66f782cc-bcee-4ebf-849a-649a37bf8a8d",
   "bId": "d08d78db-7d20-4dc2-a37b-41841c4624fd"
  },
  {
   "a": "Claire Malone",
   "b": "Jenna Irwin",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 2,
   "avgActual": 9.7,
   "avgExpected": 4.9,
   "aId": "72a5a44f-5c46-49c4-bf9c-6d40e944ee06",
   "bId": "85e52e3b-5238-4583-8d1a-cc57f8218ef6"
  },
  {
   "a": "Jonah Fliegelman",
   "b": "Rayna Baizman",
   "team": "Dill Dinkers Hatboro",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 2,
   "avgActual": 6,
   "avgExpected": 2.5,
   "aId": "1070bcd5-fdff-4adc-8d03-460a208fe4e8",
   "bId": "108620c9-1cbb-4ea0-846c-bc781f1decea"
  },
  {
   "a": "Michelle Quach",
   "b": "Matthew Chen",
   "team": "Jersey Devil",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 1.9,
   "avgActual": 6.2,
   "avgExpected": 2.8,
   "aId": "5f0dcbe9-bb0e-496d-99d2-06f01ff2c77b",
   "bId": "68e9ac74-5119-4dbb-8503-72bcdbade183"
  },
  {
   "a": "Drew Von Bargen",
   "b": "Michaela Pierznik",
   "team": "Jersey Devil",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.9,
   "avgActual": 3.3,
   "avgExpected": -1.1,
   "aId": "35880e0f-aba0-4a37-85fe-e09b057d63b2",
   "bId": "c885c4ae-2685-4fc8-9b35-40cf9f465915"
  },
  {
   "a": "Stephen Mcnamara",
   "b": "Joy Lai",
   "team": "Picklr Fair Lawn",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.9,
   "avgActual": 5.5,
   "avgExpected": 1.8,
   "aId": "245e949d-15e7-411e-9751-e19ca709f2cb",
   "bId": "9383c452-bc8a-4a30-9b2c-6fff7a0daa49"
  },
  {
   "a": "Alex Abad",
   "b": "Rachel Alfano",
   "team": "Bounce Philly",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.9,
   "avgActual": 5.5,
   "avgExpected": 1.7,
   "aId": "bc881ebc-7a42-43be-b1b2-9c29c59a4132",
   "bId": "ce7aca89-06ac-4cd9-8944-a482216ffd58"
  },
  {
   "a": "Jordan Long",
   "b": "Nick Meale",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.9,
   "avgActual": 4.3,
   "avgExpected": 0.6,
   "aId": "0fbbdbbb-a550-49ae-b04a-111bfe4891f5",
   "bId": "ec0bad09-8256-49b3-ae86-3add22dd995f"
  },
  {
   "a": "Jennifer Sanchez",
   "b": "Anita Buggins",
   "team": "ACE",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.9,
   "avgActual": 3,
   "avgExpected": -0.5,
   "aId": "061121d0-5d0a-4c01-9d8e-dced99d6d82d",
   "bId": "2ea90a18-1ef3-4ade-a855-2a3fd178abd7"
  },
  {
   "a": "Anthony Ursino",
   "b": "Igor Silva",
   "team": "Monroe",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.8,
   "avgActual": 0,
   "avgExpected": -3.7,
   "aId": "1406ff1f-3597-4128-a629-7dfd1dfe1323",
   "bId": "5afe23db-84a2-4062-a1da-ab6c834b0447"
  },
  {
   "a": "Chaille Godinez",
   "b": "Stacy Walkowitz",
   "team": "ACE",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.8,
   "avgActual": 6.3,
   "avgExpected": 2.1,
   "aId": "3cb88b7e-d8f2-45c6-b928-202bd6f5d4e6",
   "bId": "a19b179a-6a16-43a7-b2af-8d6e8d1a1205"
  },
  {
   "a": "Carly Pfeffer",
   "b": "Jessica Pevny",
   "team": "Pickleball Palace",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 1.8,
   "avgActual": 3.2,
   "avgExpected": -0.1,
   "aId": "387e74d4-66ee-4a52-a4ac-aae3dbe1d21b",
   "bId": "f472188b-24d9-4bf7-9f70-746d496f57d4"
  },
  {
   "a": "Daniel Kulik",
   "b": "Christian Fechter",
   "team": "Pickleball Palace",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.8,
   "avgActual": 4.2,
   "avgExpected": 0.9,
   "aId": "35d7ef89-3505-481a-8036-8c5d7954f9a8",
   "bId": "9a973334-7467-4873-9aa6-ca3a597e8caa"
  },
  {
   "a": "Alex Kazdan",
   "b": "Jessica Hendry",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.8,
   "avgActual": 6,
   "avgExpected": 1.9,
   "aId": "51f123b2-aced-4719-9d05-d09244db1ee4",
   "bId": "d8d64088-d1c4-4e85-a742-9ebe70839fe3"
  },
  {
   "a": "Jonah Fliegelman",
   "b": "Kaylyn Swankoski",
   "team": "Dill Dinkers Hatboro",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.8,
   "avgActual": 11,
   "avgExpected": 7.4,
   "aId": "1070bcd5-fdff-4adc-8d03-460a208fe4e8",
   "bId": "72949bef-7cab-4942-ab45-e5203024a8d5"
  },
  {
   "a": "Julia Plein",
   "b": "Nam Barsh",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.8,
   "avgActual": 0.3,
   "avgExpected": -3.9,
   "aId": "f3d99274-413c-4720-9c8d-1a71f9b2e717",
   "bId": "fa43af77-3cd1-4e61-a8dc-bd714b65d517"
  },
  {
   "a": "Hector Irizarry",
   "b": "Manny Lai",
   "team": "ACE",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.7,
   "avgActual": 3.6,
   "avgExpected": 0.6,
   "aId": "a50a69d0-0a8c-4241-b768-846b1591d180",
   "bId": "f2a53ee2-a602-4e58-8326-6d0624af34af"
  },
  {
   "a": "Julia Sternberg",
   "b": "Bruno Casino",
   "team": "Bounce Philly",
   "n": 11,
   "w": 8,
   "l": 3,
   "synergy": 1.7,
   "avgActual": 2.6,
   "avgExpected": 0.3,
   "aId": "ccd8a76f-df3a-4ab9-97b6-bae0f860a431",
   "bId": "d195dff9-7f38-402c-8164-44640f89c3fa"
  },
  {
   "a": "Susan Ackley",
   "b": "Ross Switkes",
   "team": "Flemington",
   "n": 16,
   "w": 10,
   "l": 6,
   "synergy": 1.7,
   "avgActual": 1.1,
   "avgExpected": -1,
   "aId": "07a0e948-6308-4920-a6a8-1d5945552ecb",
   "bId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b"
  },
  {
   "a": "Maanav Shah",
   "b": "Claire Gaston",
   "team": "Monroe",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.7,
   "avgActual": 3,
   "avgExpected": -0.4,
   "aId": "0a1270b0-26f6-4328-85bc-bf3f329a746e",
   "bId": "7f62f4db-d0cf-4990-a324-63aeb985a840"
  },
  {
   "a": "Chris Bucaro",
   "b": "Cameron Barraco",
   "team": "Monroe",
   "n": 14,
   "w": 10,
   "l": 4,
   "synergy": 1.6,
   "avgActual": 2.1,
   "avgExpected": 0,
   "aId": "0e43724a-794d-4218-9da4-d0e83d35ffb2",
   "bId": "ebcb4134-e369-436b-bc38-2cdaadb381c6"
  },
  {
   "a": "Marcos Claros",
   "b": "Johanna Wagner",
   "team": "Picklr Fair Lawn",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.6,
   "avgActual": 5.7,
   "avgExpected": 2,
   "aId": "839ee2ac-03d5-4fee-bc87-08709afae5f2",
   "bId": "e447eb0f-dc19-4616-a7f4-b53de776db3b"
  },
  {
   "a": "Alex Boory",
   "b": "Charlotte Healey",
   "team": "Bounce Philly",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": 1.6,
   "avgActual": 1.6,
   "avgExpected": -0.8,
   "aId": "897f1edf-63f3-4eec-bcf5-d5a1bf0be859",
   "bId": "bbaf3def-a87b-4537-8701-4f5ae0108b1f"
  },
  {
   "a": "Andrew Wakefield",
   "b": "Kaylyn Swankoski",
   "team": "Dill Dinkers Hatboro",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.6,
   "avgActual": 9.8,
   "avgExpected": 6.6,
   "aId": "5f429a7f-18c6-49e3-a804-6aa2a930f09c",
   "bId": "72949bef-7cab-4942-ab45-e5203024a8d5"
  },
  {
   "a": "Rachel Alfano",
   "b": "Dustin Rabinowitz",
   "team": "Bounce Philly",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 1.6,
   "avgActual": 5.5,
   "avgExpected": 2.3,
   "aId": "ce7aca89-06ac-4cd9-8944-a482216ffd58",
   "bId": "d23839c0-334b-4423-9305-0c6281523d5d"
  },
  {
   "a": "Yuki Kim",
   "b": "Katherine Maruyama",
   "team": "Bounce Malvern",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 3.9,
   "avgExpected": 1.6,
   "aId": "afec0287-b62d-4aaf-977f-afb96aed0e17",
   "bId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a"
  },
  {
   "a": "Christian Fechter",
   "b": "David Lavy",
   "team": "Pickleball Palace",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 3.5,
   "avgExpected": 1,
   "aId": "9a973334-7467-4873-9aa6-ca3a597e8caa",
   "bId": "e28e2d63-947f-490f-9f69-14fb6093b505"
  },
  {
   "a": "Arianna Haresign",
   "b": "Tyler Arsenault",
   "team": "Jersey Devil",
   "n": 13,
   "w": 8,
   "l": 5,
   "synergy": 1.5,
   "avgActual": 3.6,
   "avgExpected": 1.7,
   "aId": "556f84fc-4f7c-4199-a104-6e906d71605c",
   "bId": "e76d2d63-f7dc-40e7-aca2-d9b3aecf4d3e"
  },
  {
   "a": "Royce Chan",
   "b": "Zyril Carilo",
   "team": "Four Seasons",
   "n": 12,
   "w": 6,
   "l": 6,
   "synergy": 1.5,
   "avgActual": 0.2,
   "avgExpected": -1.8,
   "aId": "68274c39-0102-4554-978e-1aa50a0b3fba",
   "bId": "b4efc48a-f302-4d27-8c35-0dac1e68eec8"
  },
  {
   "a": "Alyssa Tartaglia",
   "b": "Dylan Ashbach",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.5,
   "avgActual": 5.7,
   "avgExpected": 2.2,
   "aId": "881ed39f-f9fc-4e9d-8ed3-d13d9ebc7b13",
   "bId": "d9f11069-342b-4bf7-9a7a-cbeece0396be"
  },
  {
   "a": "Kaylyn Swankoski",
   "b": "Dylan Ashbach",
   "team": "Dill Dinkers Hatboro",
   "n": 12,
   "w": 11,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 8.2,
   "avgExpected": 6.1,
   "aId": "72949bef-7cab-4942-ab45-e5203024a8d5",
   "bId": "d9f11069-342b-4bf7-9a7a-cbeece0396be"
  },
  {
   "a": "Megan Harvey",
   "b": "Sarah Kline",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 2.5,
   "avgExpected": -0.5,
   "aId": "4d576bb5-e9e5-4ad1-a18f-022508c6a161",
   "bId": "b122f262-f81d-4fb2-9f11-c473d18a4260"
  },
  {
   "a": "Allison Tarnoff",
   "b": "Lindsey Thoeng",
   "team": "Dill Dinkers Hatboro",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 1.5,
   "avgActual": 6.6,
   "avgExpected": 4,
   "aId": "001bf0ea-f8b1-402f-ab07-88ed85b2b510",
   "bId": "67977901-2346-49bb-93df-b59d31cb9a30"
  },
  {
   "a": "Royce Chan",
   "b": "Rachel Hannum",
   "team": "Four Seasons",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.5,
   "avgActual": 3.3,
   "avgExpected": 0.3,
   "aId": "68274c39-0102-4554-978e-1aa50a0b3fba",
   "bId": "9e62411a-1a2e-4f18-972e-f13d9bf8ced7"
  },
  {
   "a": "Zachary Lessner",
   "b": "Alexander Tong",
   "team": "Bounce Philly",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 4.8,
   "avgExpected": 2.3,
   "aId": "2ce5ebef-8079-4871-8d2e-b34988abbaad",
   "bId": "d8d64dde-4ffb-4c49-aaa6-537b09c9c8d5"
  },
  {
   "a": "William Hayes",
   "b": "Dustin Rabinowitz",
   "team": "Bounce Philly",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 4.7,
   "avgExpected": 2.4,
   "aId": "4dfed1a1-5375-446c-98bc-69402e70e1d5",
   "bId": "d23839c0-334b-4423-9305-0c6281523d5d"
  },
  {
   "a": "Lynda Tomaru",
   "b": "Matthew Matro",
   "team": "Flemington",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 3,
   "avgExpected": 0.6,
   "aId": "2b001a36-d13c-42fa-ae50-c9cc2f1aeb4e",
   "bId": "7b2e1bed-f387-48de-a028-bdde357bb3af"
  },
  {
   "a": "Gift Horn",
   "b": "Hruday Vemparala",
   "team": "Pickleball Kingdom Watchung",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 1.4,
   "avgActual": -0.2,
   "avgExpected": -2.6,
   "aId": "9eba6702-22e5-4b53-b6f0-acc44ac2034d",
   "bId": "bc3db6dc-48f5-46f3-aec3-638d15ca7285"
  },
  {
   "a": "Tin Wai Kwan",
   "b": "Rishina Deleon",
   "team": "Picklr Fair Lawn",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 3.3,
   "avgExpected": 0.4,
   "aId": "22fe1980-7ef9-4026-8c76-a39534431c6b",
   "bId": "5a3bb8ae-f9db-448d-b10b-b562e9d3df8a"
  },
  {
   "a": "Ross Switkes",
   "b": "Melissa Dardani",
   "team": "Flemington",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 1.4,
   "avgActual": 1.4,
   "avgExpected": -0.7,
   "aId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b",
   "bId": "ef423f8a-5c2c-4a12-9f37-b41ff6d6c530"
  },
  {
   "a": "Matthew Matro",
   "b": "Christine Ferraez",
   "team": "Flemington",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 1.8,
   "avgExpected": -1,
   "aId": "7b2e1bed-f387-48de-a028-bdde357bb3af",
   "bId": "ffe0a04b-eb97-4dda-8bc0-0ebe0fd1089e"
  },
  {
   "a": "Anthony Ursino",
   "b": "Shreyas Pani",
   "team": "Monroe",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 1.4,
   "avgActual": 4.4,
   "avgExpected": 1.9,
   "aId": "1406ff1f-3597-4128-a629-7dfd1dfe1323",
   "bId": "3cebd01c-ff32-4544-b6a6-2a68152b2ee5"
  },
  {
   "a": "Robyn Himelstein",
   "b": "Ashwin Korde",
   "team": "Bounce Philly",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 1.4,
   "avgActual": 1.2,
   "avgExpected": -1.3,
   "aId": "950366ff-1da8-4617-b0d4-0ef68aefd473",
   "bId": "f9f521ee-5f27-4f61-b4e0-4e0b9ad09aee"
  },
  {
   "a": "Fabian Marcos",
   "b": "Aya Haruyama",
   "team": "Picklr Fair Lawn",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.4,
   "avgActual": 1.8,
   "avgExpected": -1,
   "aId": "557f8c4a-1a31-4ec5-a467-59faf8d70e96",
   "bId": "d2ef2b1f-9f63-4542-8b66-c6ef8ca0fdc3"
  },
  {
   "a": "Tin Wai Kwan",
   "b": "Aya Haruyama",
   "team": "Picklr Fair Lawn",
   "n": 10,
   "w": 5,
   "l": 5,
   "synergy": 1.4,
   "avgActual": 2.1,
   "avgExpected": 0.2,
   "aId": "22fe1980-7ef9-4026-8c76-a39534431c6b",
   "bId": "d2ef2b1f-9f63-4542-8b66-c6ef8ca0fdc3"
  },
  {
   "a": "Ashley Georgevich",
   "b": "David Lavy",
   "team": "Pickleball Palace",
   "n": 8,
   "w": 7,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 6.3,
   "avgExpected": 4.1,
   "aId": "6953916c-867d-42fe-89ad-444aee6d40e8",
   "bId": "e28e2d63-947f-490f-9f69-14fb6093b505"
  },
  {
   "a": "Jenna Irwin",
   "b": "Jessica Hendry",
   "team": "Pickleball Palace",
   "n": 10,
   "w": 8,
   "l": 2,
   "synergy": 1.4,
   "avgActual": 5.1,
   "avgExpected": 3.1,
   "aId": "85e52e3b-5238-4583-8d1a-cc57f8218ef6",
   "bId": "d8d64088-d1c4-4e85-a742-9ebe70839fe3"
  },
  {
   "a": "Johny Mario",
   "b": "Tyler Arsenault",
   "team": "Jersey Devil",
   "n": 13,
   "w": 8,
   "l": 5,
   "synergy": 1.4,
   "avgActual": 0.5,
   "avgExpected": -1.4,
   "aId": "831c9fae-38c6-4961-8664-634087f5f2f9",
   "bId": "e76d2d63-f7dc-40e7-aca2-d9b3aecf4d3e"
  },
  {
   "a": "Jordan Long",
   "b": "Sarah Kline",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 3.5,
   "avgExpected": 0.6,
   "aId": "0fbbdbbb-a550-49ae-b04a-111bfe4891f5",
   "bId": "b122f262-f81d-4fb2-9f11-c473d18a4260"
  },
  {
   "a": "Jaco De Waal",
   "b": "Kishan Shah",
   "team": "Pickle House",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.4,
   "avgActual": 4.4,
   "avgExpected": 1.9,
   "aId": "19407a76-031d-4be3-8ed8-ba88cccdfdd3",
   "bId": "8ca1f741-6a67-4332-9ca7-082671211098"
  },
  {
   "a": "Maanav Shah",
   "b": "Richa Shah",
   "team": "Monroe",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": 1.3,
   "avgActual": 0.5,
   "avgExpected": -1.4,
   "aId": "0a1270b0-26f6-4328-85bc-bf3f329a746e",
   "bId": "6b80047c-ca16-4506-a2a4-ed894dc0c37f"
  },
  {
   "a": "Hannah Nussbaum",
   "b": "Dylan Ashbach",
   "team": "Dill Dinkers Hatboro",
   "n": 8,
   "w": 8,
   "l": 0,
   "synergy": 1.3,
   "avgActual": 5.3,
   "avgExpected": 3.4,
   "aId": "84b7c449-501c-438d-a3eb-ee67cc92fa0e",
   "bId": "d9f11069-342b-4bf7-9a7a-cbeece0396be"
  },
  {
   "a": "Carly Pfeffer",
   "b": "Keith Shedlock",
   "team": "Pickleball Palace",
   "n": 7,
   "w": 1,
   "l": 6,
   "synergy": 1.3,
   "avgActual": -2.1,
   "avgExpected": -4.2,
   "aId": "387e74d4-66ee-4a52-a4ac-aae3dbe1d21b",
   "bId": "f4b44cd7-fc9a-41a2-b569-cdaf08b0bf26"
  },
  {
   "a": "Rachel Berger",
   "b": "Michaela Pierznik",
   "team": "Jersey Devil",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 1.3,
   "avgActual": -0.2,
   "avgExpected": -2.6,
   "aId": "9b7488c5-bc66-41e4-8fa5-873e70c190e3",
   "bId": "c885c4ae-2685-4fc8-9b35-40cf9f465915"
  },
  {
   "a": "Doryan Amato",
   "b": "Will Kayal",
   "team": "Pickleball Kingdom Watchung",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 3.2,
   "avgExpected": 1,
   "aId": "9d2c8050-1b0b-4f4c-9158-a84190c726e3",
   "bId": "f98a262e-9080-4a48-9cd9-3fe5db979305"
  },
  {
   "a": "Chad Durkin",
   "b": "Johanna Wagner",
   "team": "Picklr Fair Lawn",
   "n": 8,
   "w": 8,
   "l": 0,
   "synergy": 1.3,
   "avgActual": 5.9,
   "avgExpected": 3.9,
   "aId": "54ed1c79-aaa0-486d-851b-d5a4db375b94",
   "bId": "e447eb0f-dc19-4616-a7f4-b53de776db3b"
  },
  {
   "a": "Drew Von Bargen",
   "b": "Michelle Quach",
   "team": "Jersey Devil",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.3,
   "avgActual": 3.3,
   "avgExpected": 0.3,
   "aId": "35880e0f-aba0-4a37-85fe-e09b057d63b2",
   "bId": "5f0dcbe9-bb0e-496d-99d2-06f01ff2c77b"
  },
  {
   "a": "Andrew Bernard",
   "b": "Pablo Shin",
   "team": "Picklr Fair Lawn",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.3,
   "avgActual": -0.3,
   "avgExpected": -3.3,
   "aId": "8079e74f-c537-4e42-9590-e8d60f10ba3d",
   "bId": "d2130c6d-6552-422e-b93d-c804bc7303a0"
  },
  {
   "a": "Clayton Schmucker",
   "b": "Kenoa Tio",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.3,
   "avgActual": 8,
   "avgExpected": 4.9,
   "aId": "0be72348-4a00-413e-bf40-df6824c3cca3",
   "bId": "10e9980e-34bf-43ea-b246-3280bca79efb"
  },
  {
   "a": "Shreyas Pani",
   "b": "Morgan Fishman",
   "team": "Monroe",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1.3,
   "avgActual": 4.3,
   "avgExpected": 1.3,
   "aId": "3cebd01c-ff32-4544-b6a6-2a68152b2ee5",
   "bId": "5ccee070-0af8-4363-9ddb-6ce8ebce098f"
  },
  {
   "a": "Danielle Bernero",
   "b": "Steven Maisonet",
   "team": "ACE",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 2.3,
   "avgExpected": -0.6,
   "aId": "317f260e-551b-4f91-ab92-71440e5f05be",
   "bId": "d1bebcc0-9427-45af-9d16-cc023b5dd737"
  },
  {
   "a": "Lynda Tomaru",
   "b": "Thomas Connolly",
   "team": "Flemington",
   "n": 8,
   "w": 3,
   "l": 5,
   "synergy": 1.3,
   "avgActual": -0.7,
   "avgExpected": -2.6,
   "aId": "2b001a36-d13c-42fa-ae50-c9cc2f1aeb4e",
   "bId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3"
  },
  {
   "a": "Robbie Oddy",
   "b": "Melissa Dardani",
   "team": "Flemington",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.3,
   "avgActual": 0.3,
   "avgExpected": -2.4,
   "aId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6",
   "bId": "ef423f8a-5c2c-4a12-9f37-b41ff6d6c530"
  },
  {
   "a": "Kenoa Tio",
   "b": "Alyssa Tartaglia",
   "team": "Dill Dinkers Hatboro",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 3.2,
   "avgExpected": 1.1,
   "aId": "10e9980e-34bf-43ea-b246-3280bca79efb",
   "bId": "881ed39f-f9fc-4e9d-8ed3-d13d9ebc7b13"
  },
  {
   "a": "Zoe Ousouljoglou",
   "b": "Elisangela Harrington",
   "team": "Pickleball Kingdom Watchung",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.3,
   "avgActual": -1.2,
   "avgExpected": -3.7,
   "aId": "269fe355-d2eb-41b8-9e92-a1438aec65e3",
   "bId": "55bbe71c-1181-4875-b16d-f121f3a133e0"
  },
  {
   "a": "Doryan Amato",
   "b": "Noelle Ramirez",
   "team": "Pickleball Kingdom Watchung",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.3,
   "avgActual": 5,
   "avgExpected": 1.9,
   "aId": "9d2c8050-1b0b-4f4c-9158-a84190c726e3",
   "bId": "f30428dd-bc5a-4535-94b3-b8779e958ada"
  },
  {
   "a": "Kathleen Dougherty",
   "b": "Julia Plein",
   "team": "Bounce Malvern",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 1.2,
   "avgActual": -0.2,
   "avgExpected": -2.4,
   "aId": "c929f42d-6fd4-4034-888e-ad456cda3063",
   "bId": "f3d99274-413c-4720-9c8d-1a71f9b2e717"
  },
  {
   "a": "Alyssa Boyle",
   "b": "Alex Abad",
   "team": "Bounce Philly",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 1.7,
   "avgExpected": -1.2,
   "aId": "22123177-1eb2-4285-bc92-f75799e175dd",
   "bId": "bc881ebc-7a42-43be-b1b2-9c29c59a4132"
  },
  {
   "a": "Amanda Ksiezopolski",
   "b": "Claire Gaston",
   "team": "Monroe",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 1.5,
   "avgExpected": -0.8,
   "aId": "2138af89-34bc-4ee2-9955-ff16f0997031",
   "bId": "7f62f4db-d0cf-4990-a324-63aeb985a840"
  },
  {
   "a": "Nick Dehmer",
   "b": "Michael Li",
   "team": "Pickle House",
   "n": 9,
   "w": 7,
   "l": 2,
   "synergy": 1.2,
   "avgActual": 3.8,
   "avgExpected": 2.1,
   "aId": "3cd8477e-8352-44a7-916f-ac2e3c3005f2",
   "bId": "dc81629b-4ff7-45c4-b38e-b3b836bc0769"
  },
  {
   "a": "Jacob Yandoli",
   "b": "Chris Frangipane",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 3,
   "avgExpected": 0.2,
   "aId": "be9bc229-2d57-4236-a951-11a2f91a09a3",
   "bId": "e8bb81fd-869a-459d-8108-b9ac6bc1b84d"
  },
  {
   "a": "Lauren Mercado",
   "b": "Tess Fisher",
   "team": "Four Seasons",
   "n": 10,
   "w": 7,
   "l": 3,
   "synergy": 1.2,
   "avgActual": 1.5,
   "avgExpected": -0.2,
   "aId": "0aa554f3-0eca-4f2d-b3d9-b277406a7435",
   "bId": "661f7bd0-74d3-432b-acc7-da0e3b3e36ea"
  },
  {
   "a": "Clayton Schmucker",
   "b": "Jonah Fliegelman",
   "team": "Dill Dinkers Hatboro",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 6.5,
   "avgExpected": 4.5,
   "aId": "0be72348-4a00-413e-bf40-df6824c3cca3",
   "bId": "1070bcd5-fdff-4adc-8d03-460a208fe4e8"
  },
  {
   "a": "Daniel Gallegos",
   "b": "Will Kayal",
   "team": "Pickleball Kingdom Watchung",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.2,
   "avgActual": 1.5,
   "avgExpected": -0.9,
   "aId": "6f9cb35b-f24c-4480-a8b4-86e6ea32f3c2",
   "bId": "f98a262e-9080-4a48-9cd9-3fe5db979305"
  },
  {
   "a": "Ruhi Shah",
   "b": "Cameron Barraco",
   "team": "Monroe",
   "n": 9,
   "w": 6,
   "l": 3,
   "synergy": 1.1,
   "avgActual": 0.9,
   "avgExpected": -0.7,
   "aId": "a2d56e71-3895-4316-9e9e-17565fb62295",
   "bId": "ebcb4134-e369-436b-bc38-2cdaadb381c6"
  },
  {
   "a": "Chris Damato",
   "b": "Michael Li",
   "team": "Pickle House",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": 1.1,
   "avgActual": 3.9,
   "avgExpected": 2.2,
   "aId": "445e89c8-a23c-440c-bd3c-7eab366bdd85",
   "bId": "dc81629b-4ff7-45c4-b38e-b3b836bc0769"
  },
  {
   "a": "Johny Mario",
   "b": "Michaela Pierznik",
   "team": "Jersey Devil",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 1.4,
   "avgExpected": -0.6,
   "aId": "831c9fae-38c6-4961-8664-634087f5f2f9",
   "bId": "c885c4ae-2685-4fc8-9b35-40cf9f465915"
  },
  {
   "a": "Zachary Lessner",
   "b": "William Hayes",
   "team": "Bounce Philly",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 3.5,
   "avgExpected": 1.3,
   "aId": "2ce5ebef-8079-4871-8d2e-b34988abbaad",
   "bId": "4dfed1a1-5375-446c-98bc-69402e70e1d5"
  },
  {
   "a": "Alex Boory",
   "b": "Alex Abad",
   "team": "Bounce Philly",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 1.1,
   "avgActual": 2,
   "avgExpected": 0.2,
   "aId": "897f1edf-63f3-4eec-bcf5-d5a1bf0be859",
   "bId": "bc881ebc-7a42-43be-b1b2-9c29c59a4132"
  },
  {
   "a": "Robyn Himelstein",
   "b": "Mark Kilimnik",
   "team": "Bounce Philly",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 1.1,
   "avgActual": 3.8,
   "avgExpected": 1.5,
   "aId": "950366ff-1da8-4617-b0d4-0ef68aefd473",
   "bId": "d6c15f91-4cc9-4612-8ec3-8f4ebd4e0cc1"
  },
  {
   "a": "James Cannizzaro",
   "b": "Fabricio Gaona",
   "team": "Pickleball Kingdom Watchung",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 1.1,
   "avgActual": 0.7,
   "avgExpected": -1.1,
   "aId": "9f2987f3-a389-4d47-9dcd-e619d94cbc18",
   "bId": "ee88d140-1a78-4776-85e0-3f982891576d"
  },
  {
   "a": "Carly Pfeffer",
   "b": "Patrick Ceccacci",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.1,
   "avgActual": -1,
   "avgExpected": -3.2,
   "aId": "387e74d4-66ee-4a52-a4ac-aae3dbe1d21b",
   "bId": "a291ed5b-4a4f-4402-93d0-f4d78e790f2c"
  },
  {
   "a": "Elisangela Harrington",
   "b": "Fabricio Gaona",
   "team": "Pickleball Kingdom Watchung",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1.1,
   "avgActual": 0.3,
   "avgExpected": -1.9,
   "aId": "55bbe71c-1181-4875-b16d-f121f3a133e0",
   "bId": "ee88d140-1a78-4776-85e0-3f982891576d"
  },
  {
   "a": "Courtney Greener",
   "b": "Robbie Oddy",
   "team": "Flemington",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 1.1,
   "avgActual": 2.7,
   "avgExpected": 1,
   "aId": "0a66ddb6-6771-4641-ad1e-0ed15d96b66d",
   "bId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6"
  },
  {
   "a": "Lauren Mercado",
   "b": "Melissa Xu",
   "team": "Four Seasons",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 1.1,
   "avgActual": -4,
   "avgExpected": -6.6,
   "aId": "0aa554f3-0eca-4f2d-b3d9-b277406a7435",
   "bId": "a1be2c26-76d3-414d-89fd-8334435b97c2"
  },
  {
   "a": "David Lavy",
   "b": "Keith Shedlock",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 1,
   "avgActual": 2,
   "avgExpected": 0,
   "aId": "e28e2d63-947f-490f-9f69-14fb6093b505",
   "bId": "f4b44cd7-fc9a-41a2-b569-cdaf08b0bf26"
  },
  {
   "a": "Stephanie Bramer",
   "b": "Jessica Pevny",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 1,
   "avgActual": 6,
   "avgExpected": 3.8,
   "aId": "037ccb1c-3e34-4ba1-8d48-aaa6ab330c26",
   "bId": "f472188b-24d9-4bf7-9f70-746d496f57d4"
  },
  {
   "a": "Tin Wai Kwan",
   "b": "Jeff Sul",
   "team": "Picklr Fair Lawn",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 1,
   "avgActual": 1.2,
   "avgExpected": -0.6,
   "aId": "22fe1980-7ef9-4026-8c76-a39534431c6b",
   "bId": "a52d05fa-a423-4220-8c5d-86d506e61f5d"
  },
  {
   "a": "Jansen Tubo",
   "b": "Caitlyn Moore",
   "team": "Picklr Fair Lawn",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 1,
   "avgActual": -2.5,
   "avgExpected": -4.4,
   "aId": "8b8bcad5-6324-48d9-b225-f6739eda8cc0",
   "bId": "905b402c-9a3e-4b59-ba3e-59f32370ad2e"
  },
  {
   "a": "Matthew Matro",
   "b": "Robbie Oddy",
   "team": "Flemington",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 1,
   "avgActual": 4.1,
   "avgExpected": 2.7,
   "aId": "7b2e1bed-f387-48de-a028-bdde357bb3af",
   "bId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6"
  },
  {
   "a": "Shashank Kamdar",
   "b": "Yuki Kim",
   "team": "Bounce Malvern",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": 1,
   "avgActual": 0.5,
   "avgExpected": -1,
   "aId": "56db4b56-6166-437f-8ece-26576b7042e5",
   "bId": "afec0287-b62d-4aaf-977f-afb96aed0e17"
  },
  {
   "a": "Michaela Pierznik",
   "b": "Zach Bowe",
   "team": "Jersey Devil",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 1,
   "avgActual": 1,
   "avgExpected": -0.7,
   "aId": "c885c4ae-2685-4fc8-9b35-40cf9f465915",
   "bId": "eebadc3a-5763-4612-9232-d3a98ea188d6"
  },
  {
   "a": "Brittany Hall",
   "b": "Annemarie Mccartney",
   "team": "ACE",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 1,
   "avgActual": 2,
   "avgExpected": 0.4,
   "aId": "17cc768d-f6c8-484c-814e-063d17cec72f",
   "bId": "d08d78db-7d20-4dc2-a37b-41841c4624fd"
  },
  {
   "a": "Eric Lin",
   "b": "Richa Shah",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 1,
   "avgActual": -0.3,
   "avgExpected": -2.7,
   "aId": "4ce1c715-b187-47c5-b6dc-d079f802499d",
   "bId": "6b80047c-ca16-4506-a2a4-ed894dc0c37f"
  },
  {
   "a": "Michelle Quach",
   "b": "Zach Bowe",
   "team": "Jersey Devil",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 1,
   "avgActual": 1,
   "avgExpected": -0.6,
   "aId": "5f0dcbe9-bb0e-496d-99d2-06f01ff2c77b",
   "bId": "eebadc3a-5763-4612-9232-d3a98ea188d6"
  },
  {
   "a": "Allison Tarnoff",
   "b": "Kenoa Tio",
   "team": "Dill Dinkers Hatboro",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 1,
   "avgActual": 4,
   "avgExpected": 2.4,
   "aId": "001bf0ea-f8b1-402f-ab07-88ed85b2b510",
   "bId": "10e9980e-34bf-43ea-b246-3280bca79efb"
  },
  {
   "a": "Matthew Chen",
   "b": "Zach Bowe",
   "team": "Jersey Devil",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": 1,
   "avgActual": 2.3,
   "avgExpected": 0.8,
   "aId": "68e9ac74-5119-4dbb-8503-72bcdbade183",
   "bId": "eebadc3a-5763-4612-9232-d3a98ea188d6"
  },
  {
   "a": "Kerrin Maurer",
   "b": "Taylor Hartman",
   "team": "Pickle House",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 1,
   "avgActual": 4.6,
   "avgExpected": 3,
   "aId": "1d63ce3d-20c2-40ae-94ca-e8e6e458004e",
   "bId": "3bf2f55b-b253-4d2a-b1b9-d5953ef1b8ec"
  },
  {
   "a": "Kishan Shah",
   "b": "Sidd Pathare",
   "team": "Pickle House",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 1,
   "avgActual": 3.2,
   "avgExpected": 1.5,
   "aId": "8ca1f741-6a67-4332-9ca7-082671211098",
   "bId": "a73f249d-c1c9-4516-bc79-e9732581f098"
  },
  {
   "a": "Danielle Bernero",
   "b": "Damien Stahl",
   "team": "ACE",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.9,
   "avgActual": 1.7,
   "avgExpected": 0.1,
   "aId": "317f260e-551b-4f91-ab92-71440e5f05be",
   "bId": "45d2cd6f-4816-46b2-8e17-fab766cdb87e"
  },
  {
   "a": "Jennifer Sanchez",
   "b": "Steven Maisonet",
   "team": "ACE",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.9,
   "avgActual": -0.5,
   "avgExpected": -2.3,
   "aId": "061121d0-5d0a-4c01-9d8e-dced99d6d82d",
   "bId": "d1bebcc0-9427-45af-9d16-cc023b5dd737"
  },
  {
   "a": "Courtney Greener",
   "b": "Thomas Connolly",
   "team": "Flemington",
   "n": 8,
   "w": 4,
   "l": 4,
   "synergy": 0.9,
   "avgActual": -1,
   "avgExpected": -2.3,
   "aId": "0a66ddb6-6771-4641-ad1e-0ed15d96b66d",
   "bId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3"
  },
  {
   "a": "Justin Bautista",
   "b": "Eric Nguyen",
   "team": "Four Seasons",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.9,
   "avgActual": -1.5,
   "avgExpected": -2.9,
   "aId": "27660961-6245-4b09-aafe-359ca3205797",
   "bId": "87d526c6-72b6-4b17-bf77-9016fd049541"
  },
  {
   "a": "Roshi Desilva",
   "b": "Tess Fisher",
   "team": "Four Seasons",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 3,
   "avgExpected": 1.3,
   "aId": "002c6f87-6787-41ea-a2a0-c0fcecc8f6c7",
   "bId": "661f7bd0-74d3-432b-acc7-da0e3b3e36ea"
  },
  {
   "a": "Nathan Law",
   "b": "Annemarie Mccartney",
   "team": "ACE",
   "n": 11,
   "w": 9,
   "l": 2,
   "synergy": 0.9,
   "avgActual": 4.3,
   "avgExpected": 3.1,
   "aId": "3c81d27f-9e68-439b-a476-f5ac1a54f45a",
   "bId": "d08d78db-7d20-4dc2-a37b-41841c4624fd"
  },
  {
   "a": "Casey Jannetta",
   "b": "Nick Meale",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.9,
   "avgActual": 2.3,
   "avgExpected": 0.5,
   "aId": "d458764e-2d62-4817-a96e-9006fead6457",
   "bId": "ec0bad09-8256-49b3-ae86-3add22dd995f"
  },
  {
   "a": "Ken Velarde",
   "b": "Liz Chen",
   "team": "Pickleball Kingdom Watchung",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.9,
   "avgActual": 5.3,
   "avgExpected": 3.5,
   "aId": "25aa47d0-76b8-48be-a5be-b1d33b423e82",
   "bId": "af8a1a22-e434-42d2-9868-4e746b8f9b1a"
  },
  {
   "a": "Daniel Kulik",
   "b": "David Lavy",
   "team": "Pickleball Palace",
   "n": 12,
   "w": 8,
   "l": 4,
   "synergy": 0.8,
   "avgActual": 4.8,
   "avgExpected": 3.7,
   "aId": "35d7ef89-3505-481a-8036-8c5d7954f9a8",
   "bId": "e28e2d63-947f-490f-9f69-14fb6093b505"
  },
  {
   "a": "Lauren Mercado",
   "b": "Eric Nguyen",
   "team": "Four Seasons",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.8,
   "avgActual": -3.3,
   "avgExpected": -5.3,
   "aId": "0aa554f3-0eca-4f2d-b3d9-b277406a7435",
   "bId": "87d526c6-72b6-4b17-bf77-9016fd049541"
  },
  {
   "a": "Anh Nguyen",
   "b": "Eric Nguyen",
   "team": "Four Seasons",
   "n": 10,
   "w": 3,
   "l": 7,
   "synergy": 0.8,
   "avgActual": -2.8,
   "avgExpected": -3.9,
   "aId": "3478a097-ab58-413c-b90e-aef96e00fbfa",
   "bId": "87d526c6-72b6-4b17-bf77-9016fd049541"
  },
  {
   "a": "Carly Pfeffer",
   "b": "Ashley Georgevich",
   "team": "Pickleball Palace",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.8,
   "avgActual": 2.6,
   "avgExpected": 1.1,
   "aId": "387e74d4-66ee-4a52-a4ac-aae3dbe1d21b",
   "bId": "6953916c-867d-42fe-89ad-444aee6d40e8"
  },
  {
   "a": "Alex Kazdan",
   "b": "Patrick Ceccacci",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.8,
   "avgActual": -0.3,
   "avgExpected": -2.3,
   "aId": "51f123b2-aced-4719-9d05-d09244db1ee4",
   "bId": "a291ed5b-4a4f-4402-93d0-f4d78e790f2c"
  },
  {
   "a": "Matthew Chen",
   "b": "Kylie Lupica",
   "team": "Jersey Devil",
   "n": 9,
   "w": 5,
   "l": 4,
   "synergy": 0.8,
   "avgActual": -0.6,
   "avgExpected": -1.8,
   "aId": "68e9ac74-5119-4dbb-8503-72bcdbade183",
   "bId": "9b4b88bf-1f87-46cd-829a-84b82a424b82"
  },
  {
   "a": "Emily Cho",
   "b": "Katherine Cho",
   "team": "Picklr Fair Lawn",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.8,
   "avgActual": 5.3,
   "avgExpected": 3.7,
   "aId": "054f09ec-133d-4128-b975-27728ddd4615",
   "bId": "925da4ca-a96c-4e48-81be-45bed2b8cfd5"
  },
  {
   "a": "Ken Velarde",
   "b": "Fabricio Gaona",
   "team": "Pickleball Kingdom Watchung",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.8,
   "avgActual": -0.2,
   "avgExpected": -1.9,
   "aId": "25aa47d0-76b8-48be-a5be-b1d33b423e82",
   "bId": "ee88d140-1a78-4776-85e0-3f982891576d"
  },
  {
   "a": "Yoyo Shen",
   "b": "Michael Li",
   "team": "Pickle House",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 6.7,
   "avgExpected": 4.9,
   "aId": "9d47a1aa-c44c-4ddd-8953-dc40f79b1016",
   "bId": "dc81629b-4ff7-45c4-b38e-b3b836bc0769"
  },
  {
   "a": "Chris Damato",
   "b": "Emily Babinsky",
   "team": "Pickle House",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.7,
   "avgActual": 2.2,
   "avgExpected": 0.9,
   "aId": "445e89c8-a23c-440c-bd3c-7eab366bdd85",
   "bId": "d0e2c1ea-529d-4364-b521-cb205ecdded3"
  },
  {
   "a": "Chris Damato",
   "b": "Kishan Shah",
   "team": "Pickle House",
   "n": 10,
   "w": 7,
   "l": 3,
   "synergy": 0.7,
   "avgActual": 2.6,
   "avgExpected": 1.6,
   "aId": "445e89c8-a23c-440c-bd3c-7eab366bdd85",
   "bId": "8ca1f741-6a67-4332-9ca7-082671211098"
  },
  {
   "a": "Steven Maisonet",
   "b": "Manny Lai",
   "team": "ACE",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.7,
   "avgActual": -1.4,
   "avgExpected": -2.6,
   "aId": "d1bebcc0-9427-45af-9d16-cc023b5dd737",
   "bId": "f2a53ee2-a602-4e58-8326-6d0624af34af"
  },
  {
   "a": "Julia Sternberg",
   "b": "Dustin Rabinowitz",
   "team": "Bounce Philly",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 1.3,
   "avgExpected": 0.1,
   "aId": "ccd8a76f-df3a-4ab9-97b6-bae0f860a431",
   "bId": "d23839c0-334b-4423-9305-0c6281523d5d"
  },
  {
   "a": "Nahla Bernhardt",
   "b": "Dylan Ashbach",
   "team": "Dill Dinkers Hatboro",
   "n": 10,
   "w": 9,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 6.4,
   "avgExpected": 5.4,
   "aId": "9dae8c17-6878-473a-83e9-a43b434f876b",
   "bId": "d9f11069-342b-4bf7-9a7a-cbeece0396be"
  },
  {
   "a": "Daniel Kulik",
   "b": "Jessica Pevny",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.7,
   "avgActual": 0.7,
   "avgExpected": -1,
   "aId": "35d7ef89-3505-481a-8036-8c5d7954f9a8",
   "bId": "f472188b-24d9-4bf7-9f70-746d496f57d4"
  },
  {
   "a": "Shreyas Pani",
   "b": "Helen Liu",
   "team": "Monroe",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.7,
   "avgActual": 1.6,
   "avgExpected": 0.3,
   "aId": "3cebd01c-ff32-4544-b6a6-2a68152b2ee5",
   "bId": "53cc1790-d8b9-4b64-a8b3-6e10b2eeb131"
  },
  {
   "a": "Alex Abad",
   "b": "Julia Sternberg",
   "team": "Bounce Philly",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.7,
   "avgActual": 1.7,
   "avgExpected": 0.5,
   "aId": "bc881ebc-7a42-43be-b1b2-9c29c59a4132",
   "bId": "ccd8a76f-df3a-4ab9-97b6-bae0f860a431"
  },
  {
   "a": "Chaille Godinez",
   "b": "Katarzyna Clevenger",
   "team": "ACE",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 3.5,
   "avgExpected": 2.1,
   "aId": "3cb88b7e-d8f2-45c6-b928-202bd6f5d4e6",
   "bId": "adc8c45e-c260-49fe-a318-ee643df2b86f"
  },
  {
   "a": "Kerrin Maurer",
   "b": "Michael Li",
   "team": "Pickle House",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 5.4,
   "avgExpected": 4.1,
   "aId": "1d63ce3d-20c2-40ae-94ca-e8e6e458004e",
   "bId": "dc81629b-4ff7-45c4-b38e-b3b836bc0769"
  },
  {
   "a": "Stephen Mcnamara",
   "b": "Aya Haruyama",
   "team": "Picklr Fair Lawn",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.7,
   "avgActual": 1.2,
   "avgExpected": 0,
   "aId": "245e949d-15e7-411e-9751-e19ca709f2cb",
   "bId": "d2ef2b1f-9f63-4542-8b66-c6ef8ca0fdc3"
  },
  {
   "a": "Kara Infante",
   "b": "Aya Haruyama",
   "team": "Picklr Fair Lawn",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 2.3,
   "avgExpected": 0.8,
   "aId": "06edda3d-3a1f-4010-86fa-8ac767cd7079",
   "bId": "d2ef2b1f-9f63-4542-8b66-c6ef8ca0fdc3"
  },
  {
   "a": "Alyssa Boyle",
   "b": "William Hayes",
   "team": "Bounce Philly",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.7,
   "avgActual": 4.5,
   "avgExpected": 3.3,
   "aId": "22123177-1eb2-4285-bc92-f75799e175dd",
   "bId": "4dfed1a1-5375-446c-98bc-69402e70e1d5"
  },
  {
   "a": "Christian Fechter",
   "b": "Jessica Hendry",
   "team": "Pickleball Palace",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 3.2,
   "avgExpected": 2.1,
   "aId": "9a973334-7467-4873-9aa6-ca3a597e8caa",
   "bId": "d8d64088-d1c4-4e85-a742-9ebe70839fe3"
  },
  {
   "a": "Justin Bautista",
   "b": "Anh Nguyen",
   "team": "Four Seasons",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.7,
   "avgActual": -3,
   "avgExpected": -4.5,
   "aId": "27660961-6245-4b09-aafe-359ca3205797",
   "bId": "3478a097-ab58-413c-b90e-aef96e00fbfa"
  },
  {
   "a": "Ashley Georgevich",
   "b": "Beatriz Lopez Albarracin",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.7,
   "avgActual": 5.3,
   "avgExpected": 3.8,
   "aId": "6953916c-867d-42fe-89ad-444aee6d40e8",
   "bId": "73603f18-0adb-48db-8375-1a6deff6ddbb"
  },
  {
   "a": "Anisha Malhotra",
   "b": "Nick Dehmer",
   "team": "Pickle House",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 6.7,
   "avgExpected": 5,
   "aId": "2aa8b268-8c06-4453-9706-048009bf6af3",
   "bId": "3cd8477e-8352-44a7-916f-ac2e3c3005f2"
  },
  {
   "a": "Bruno Casino",
   "b": "Mark Kilimnik",
   "team": "Bounce Philly",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.7,
   "avgActual": 5.3,
   "avgExpected": 3.8,
   "aId": "d195dff9-7f38-402c-8164-44640f89c3fa",
   "bId": "d6c15f91-4cc9-4612-8ec3-8f4ebd4e0cc1"
  },
  {
   "a": "Chris Bucaro",
   "b": "Ruhi Shah",
   "team": "Monroe",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.6,
   "avgActual": 4.3,
   "avgExpected": 2.9,
   "aId": "0e43724a-794d-4218-9da4-d0e83d35ffb2",
   "bId": "a2d56e71-3895-4316-9e9e-17565fb62295"
  },
  {
   "a": "Taylor Hartman",
   "b": "Lissa Eagles",
   "team": "Pickle House",
   "n": 13,
   "w": 10,
   "l": 3,
   "synergy": 0.6,
   "avgActual": 3.3,
   "avgExpected": 2.6,
   "aId": "3bf2f55b-b253-4d2a-b1b9-d5953ef1b8ec",
   "bId": "9ec39678-a120-45de-b8a5-897b8cf900cd"
  },
  {
   "a": "Nathan Law",
   "b": "Manny Lai",
   "team": "ACE",
   "n": 14,
   "w": 9,
   "l": 5,
   "synergy": 0.6,
   "avgActual": 3.4,
   "avgExpected": 2.7,
   "aId": "3c81d27f-9e68-439b-a476-f5ac1a54f45a",
   "bId": "f2a53ee2-a602-4e58-8326-6d0624af34af"
  },
  {
   "a": "Brittany Hall",
   "b": "Chaille Godinez",
   "team": "ACE",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 0.8,
   "avgExpected": -0.2,
   "aId": "17cc768d-f6c8-484c-814e-063d17cec72f",
   "bId": "3cb88b7e-d8f2-45c6-b928-202bd6f5d4e6"
  },
  {
   "a": "Shawn Ganow",
   "b": "Justin Bautista",
   "team": "Four Seasons",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.6,
   "avgActual": 0.4,
   "avgExpected": -0.7,
   "aId": "1e340ccb-0e0f-4b6b-b760-d1a723561d04",
   "bId": "27660961-6245-4b09-aafe-359ca3205797"
  },
  {
   "a": "Doryan Amato",
   "b": "Gift Horn",
   "team": "Pickleball Kingdom Watchung",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 2.8,
   "avgExpected": 1.5,
   "aId": "9d2c8050-1b0b-4f4c-9158-a84190c726e3",
   "bId": "9eba6702-22e5-4b53-b6f0-acc44ac2034d"
  },
  {
   "a": "Suzi Battison",
   "b": "Melissa Dardani",
   "team": "Flemington",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 2.5,
   "avgExpected": 1.6,
   "aId": "40579892-d9bf-4d1d-9417-5830d5d45093",
   "bId": "ef423f8a-5c2c-4a12-9f37-b41ff6d6c530"
  },
  {
   "a": "Daniel Kulik",
   "b": "Alex Kazdan",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 0.3,
   "avgExpected": -1,
   "aId": "35d7ef89-3505-481a-8036-8c5d7954f9a8",
   "bId": "51f123b2-aced-4719-9d05-d09244db1ee4"
  },
  {
   "a": "Dustin Rabinowitz",
   "b": "Mark Kilimnik",
   "team": "Bounce Philly",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 1.8,
   "avgExpected": 0.5,
   "aId": "d23839c0-334b-4423-9305-0c6281523d5d",
   "bId": "d6c15f91-4cc9-4612-8ec3-8f4ebd4e0cc1"
  },
  {
   "a": "Arianna Haresign",
   "b": "Zach Bowe",
   "team": "Jersey Devil",
   "n": 14,
   "w": 10,
   "l": 4,
   "synergy": 0.6,
   "avgActual": 2.3,
   "avgExpected": 1.5,
   "aId": "556f84fc-4f7c-4199-a104-6e906d71605c",
   "bId": "eebadc3a-5763-4612-9232-d3a98ea188d6"
  },
  {
   "a": "Jase Volz",
   "b": "Manny Lai",
   "team": "ACE",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.6,
   "avgActual": 4.3,
   "avgExpected": 2.9,
   "aId": "66f782cc-bcee-4ebf-849a-649a37bf8a8d",
   "bId": "f2a53ee2-a602-4e58-8326-6d0624af34af"
  },
  {
   "a": "Kara Infante",
   "b": "Jansen Tubo",
   "team": "Picklr Fair Lawn",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 0.6,
   "avgActual": -2.3,
   "avgExpected": -3.3,
   "aId": "06edda3d-3a1f-4010-86fa-8ac767cd7079",
   "bId": "8b8bcad5-6324-48d9-b225-f6739eda8cc0"
  },
  {
   "a": "Andrew Wakefield",
   "b": "Lindsey Thoeng",
   "team": "Dill Dinkers Hatboro",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 2,
   "avgExpected": 0.9,
   "aId": "5f429a7f-18c6-49e3-a804-6aa2a930f09c",
   "bId": "67977901-2346-49bb-93df-b59d31cb9a30"
  },
  {
   "a": "Clayton Schmucker",
   "b": "Lindsey Thoeng",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 3,
   "avgExpected": 1.6,
   "aId": "0be72348-4a00-413e-bf40-df6824c3cca3",
   "bId": "67977901-2346-49bb-93df-b59d31cb9a30"
  },
  {
   "a": "Michelle Quach",
   "b": "Shelah Wallace",
   "team": "Jersey Devil",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 3.5,
   "avgExpected": 2.4,
   "aId": "5f0dcbe9-bb0e-496d-99d2-06f01ff2c77b",
   "bId": "fa519fb1-87ca-4a7b-9265-4aba9807929f"
  },
  {
   "a": "Kylie Lupica",
   "b": "Michaela Pierznik",
   "team": "Jersey Devil",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.6,
   "avgActual": -1.3,
   "avgExpected": -2.8,
   "aId": "9b4b88bf-1f87-46cd-829a-84b82a424b82",
   "bId": "c885c4ae-2685-4fc8-9b35-40cf9f465915"
  },
  {
   "a": "Arianna Haresign",
   "b": "Matthew Chen",
   "team": "Jersey Devil",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 2.5,
   "avgExpected": 1.3,
   "aId": "556f84fc-4f7c-4199-a104-6e906d71605c",
   "bId": "68e9ac74-5119-4dbb-8503-72bcdbade183"
  },
  {
   "a": "Rachel Hannum",
   "b": "Zyril Carilo",
   "team": "Four Seasons",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.6,
   "avgActual": 0.2,
   "avgExpected": -0.8,
   "aId": "9e62411a-1a2e-4f18-972e-f13d9bf8ced7",
   "bId": "b4efc48a-f302-4d27-8c35-0dac1e68eec8"
  },
  {
   "a": "Grant Hanak",
   "b": "Yuki Kim",
   "team": "Bounce Malvern",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.6,
   "avgActual": 2,
   "avgExpected": 0.9,
   "aId": "44a0a4da-e7cb-4037-9018-97544dfce248",
   "bId": "afec0287-b62d-4aaf-977f-afb96aed0e17"
  },
  {
   "a": "Kylie Lupica",
   "b": "Rachel Berger",
   "team": "Jersey Devil",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": 0.6,
   "avgActual": -3.4,
   "avgExpected": -4.5,
   "aId": "9b4b88bf-1f87-46cd-829a-84b82a424b82",
   "bId": "9b7488c5-bc66-41e4-8fa5-873e70c190e3"
  },
  {
   "a": "Chris Bucaro",
   "b": "Richa Shah",
   "team": "Monroe",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 1.4,
   "avgExpected": 0.7,
   "aId": "0e43724a-794d-4218-9da4-d0e83d35ffb2",
   "bId": "6b80047c-ca16-4506-a2a4-ed894dc0c37f"
  },
  {
   "a": "Kishan Shah",
   "b": "Emily Babinsky",
   "team": "Pickle House",
   "n": 9,
   "w": 6,
   "l": 3,
   "synergy": 0.5,
   "avgActual": 2.3,
   "avgExpected": 1.7,
   "aId": "8ca1f741-6a67-4332-9ca7-082671211098",
   "bId": "d0e2c1ea-529d-4364-b521-cb205ecdded3"
  },
  {
   "a": "Jennifer Sanchez",
   "b": "Hector Irizarry",
   "team": "ACE",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 0.5,
   "avgExpected": -0.6,
   "aId": "061121d0-5d0a-4c01-9d8e-dced99d6d82d",
   "bId": "a50a69d0-0a8c-4241-b768-846b1591d180"
  },
  {
   "a": "Brittany Hall",
   "b": "Nathan Law",
   "team": "ACE",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 3,
   "avgExpected": 2.1,
   "aId": "17cc768d-f6c8-484c-814e-063d17cec72f",
   "bId": "3c81d27f-9e68-439b-a476-f5ac1a54f45a"
  },
  {
   "a": "Susan Ackley",
   "b": "Suzi Battison",
   "team": "Flemington",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 2,
   "avgExpected": 0.7,
   "aId": "07a0e948-6308-4920-a6a8-1d5945552ecb",
   "bId": "40579892-d9bf-4d1d-9417-5830d5d45093"
  },
  {
   "a": "Jessica Pevny",
   "b": "Keith Shedlock",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.5,
   "avgActual": -2.3,
   "avgExpected": -3.5,
   "aId": "f472188b-24d9-4bf7-9f70-746d496f57d4",
   "bId": "f4b44cd7-fc9a-41a2-b569-cdaf08b0bf26"
  },
  {
   "a": "Courtney Davis",
   "b": "Tess Fisher",
   "team": "Four Seasons",
   "n": 15,
   "w": 11,
   "l": 4,
   "synergy": 0.5,
   "avgActual": 2.9,
   "avgExpected": 2.3,
   "aId": "422813d6-2920-4a65-a84d-a29b6cefcd54",
   "bId": "661f7bd0-74d3-432b-acc7-da0e3b3e36ea"
  },
  {
   "a": "Arianna Haresign",
   "b": "Michelle Quach",
   "team": "Jersey Devil",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 2,
   "avgExpected": 1.1,
   "aId": "556f84fc-4f7c-4199-a104-6e906d71605c",
   "bId": "5f0dcbe9-bb0e-496d-99d2-06f01ff2c77b"
  },
  {
   "a": "Joy Lai",
   "b": "Phil Chang",
   "team": "Picklr Fair Lawn",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 2.8,
   "avgExpected": 1.7,
   "aId": "9383c452-bc8a-4a30-9b2c-6fff7a0daa49",
   "bId": "a31d5bae-fddc-44ca-9782-f3eb86667058"
  },
  {
   "a": "Claire Malone",
   "b": "David Lavy",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.5,
   "avgActual": 7,
   "avgExpected": 5.9,
   "aId": "72a5a44f-5c46-49c4-bf9c-6d40e944ee06",
   "bId": "e28e2d63-947f-490f-9f69-14fb6093b505"
  },
  {
   "a": "Sarah Kline",
   "b": "Casey Jannetta",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.5,
   "avgActual": -2,
   "avgExpected": -3.1,
   "aId": "b122f262-f81d-4fb2-9f11-c473d18a4260",
   "bId": "d458764e-2d62-4817-a96e-9006fead6457"
  },
  {
   "a": "Taylor Hartman",
   "b": "Yoyo Shen",
   "team": "Pickle House",
   "n": 8,
   "w": 7,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 3.1,
   "avgExpected": 2.4,
   "aId": "3bf2f55b-b253-4d2a-b1b9-d5953ef1b8ec",
   "bId": "9d47a1aa-c44c-4ddd-8953-dc40f79b1016"
  },
  {
   "a": "Aimee Castellano",
   "b": "Christine Ferraez",
   "team": "Flemington",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": 0.5,
   "avgActual": -4.2,
   "avgExpected": -5,
   "aId": "e76985fb-efd1-4180-a340-e4f36abbc8b4",
   "bId": "ffe0a04b-eb97-4dda-8bc0-0ebe0fd1089e"
  },
  {
   "a": "Sarah Kline",
   "b": "Katherine Maruyama",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 0.8,
   "avgExpected": -0.2,
   "aId": "b122f262-f81d-4fb2-9f11-c473d18a4260",
   "bId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a"
  },
  {
   "a": "Kaia Hoak",
   "b": "Shelah Wallace",
   "team": "Jersey Devil",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 0,
   "avgExpected": -0.9,
   "aId": "50257f40-66f5-44f8-a3c7-21ffdf6d510a",
   "bId": "fa519fb1-87ca-4a7b-9265-4aba9807929f"
  },
  {
   "a": "Taylor Hartman",
   "b": "Nick Dehmer",
   "team": "Pickle House",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": 0.5,
   "avgActual": 3,
   "avgExpected": 2.3,
   "aId": "3bf2f55b-b253-4d2a-b1b9-d5953ef1b8ec",
   "bId": "3cd8477e-8352-44a7-916f-ac2e3c3005f2"
  },
  {
   "a": "Helen Liu",
   "b": "Ruhi Shah",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.5,
   "avgActual": -0.3,
   "avgExpected": -1.6,
   "aId": "53cc1790-d8b9-4b64-a8b3-6e10b2eeb131",
   "bId": "a2d56e71-3895-4316-9e9e-17565fb62295"
  },
  {
   "a": "Susan Ackley",
   "b": "Aimee Castellano",
   "team": "Flemington",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": 0.5,
   "avgActual": -2.2,
   "avgExpected": -3,
   "aId": "07a0e948-6308-4920-a6a8-1d5945552ecb",
   "bId": "e76985fb-efd1-4180-a340-e4f36abbc8b4"
  },
  {
   "a": "Justin Bautista",
   "b": "Tess Fisher",
   "team": "Four Seasons",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.5,
   "avgActual": 2.7,
   "avgExpected": 1.6,
   "aId": "27660961-6245-4b09-aafe-359ca3205797",
   "bId": "661f7bd0-74d3-432b-acc7-da0e3b3e36ea"
  },
  {
   "a": "Stacy Walkowitz",
   "b": "Manny Lai",
   "team": "ACE",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 0,
   "avgExpected": -0.8,
   "aId": "a19b179a-6a16-43a7-b2af-8d6e8d1a1205",
   "bId": "f2a53ee2-a602-4e58-8326-6d0624af34af"
  },
  {
   "a": "Alyssa Boyle",
   "b": "Charlotte Healey",
   "team": "Bounce Philly",
   "n": 14,
   "w": 9,
   "l": 5,
   "synergy": 0.4,
   "avgActual": 1.8,
   "avgExpected": 1.2,
   "aId": "22123177-1eb2-4285-bc92-f75799e175dd",
   "bId": "bbaf3def-a87b-4537-8701-4f5ae0108b1f"
  },
  {
   "a": "Claire Malone",
   "b": "Patrick Ceccacci",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 0,
   "avgExpected": -0.8,
   "aId": "72a5a44f-5c46-49c4-bf9c-6d40e944ee06",
   "bId": "a291ed5b-4a4f-4402-93d0-f4d78e790f2c"
  },
  {
   "a": "Roshi Desilva",
   "b": "Justin Bautista",
   "team": "Four Seasons",
   "n": 10,
   "w": 2,
   "l": 8,
   "synergy": 0.4,
   "avgActual": -2.2,
   "avgExpected": -2.8,
   "aId": "002c6f87-6787-41ea-a2a0-c0fcecc8f6c7",
   "bId": "27660961-6245-4b09-aafe-359ca3205797"
  },
  {
   "a": "Kara Infante",
   "b": "Andrew Bernard",
   "team": "Picklr Fair Lawn",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.4,
   "avgActual": -3.5,
   "avgExpected": -4.3,
   "aId": "06edda3d-3a1f-4010-86fa-8ac767cd7079",
   "bId": "8079e74f-c537-4e42-9590-e8d60f10ba3d"
  },
  {
   "a": "Eric Nguyen",
   "b": "Bryan Nardone",
   "team": "Four Seasons",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.4,
   "avgActual": -3.7,
   "avgExpected": -4.5,
   "aId": "87d526c6-72b6-4b17-bf77-9016fd049541",
   "bId": "a479d794-d9d0-4620-b322-b7f249f2ae5f"
  },
  {
   "a": "Alex Abad",
   "b": "Mark Kilimnik",
   "team": "Bounce Philly",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 0.7,
   "avgExpected": 0,
   "aId": "bc881ebc-7a42-43be-b1b2-9c29c59a4132",
   "bId": "d6c15f91-4cc9-4612-8ec3-8f4ebd4e0cc1"
  },
  {
   "a": "Drew Von Bargen",
   "b": "Zach Bowe",
   "team": "Jersey Devil",
   "n": 10,
   "w": 6,
   "l": 4,
   "synergy": 0.4,
   "avgActual": 0.2,
   "avgExpected": -0.4,
   "aId": "35880e0f-aba0-4a37-85fe-e09b057d63b2",
   "bId": "eebadc3a-5763-4612-9232-d3a98ea188d6"
  },
  {
   "a": "Carly Pfeffer",
   "b": "Alex Kazdan",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.4,
   "avgActual": -0.3,
   "avgExpected": -1.3,
   "aId": "387e74d4-66ee-4a52-a4ac-aae3dbe1d21b",
   "bId": "51f123b2-aced-4719-9d05-d09244db1ee4"
  },
  {
   "a": "Ashley Georgevich",
   "b": "Claire Malone",
   "team": "Pickleball Palace",
   "n": 8,
   "w": 8,
   "l": 0,
   "synergy": 0.4,
   "avgActual": 4.5,
   "avgExpected": 3.9,
   "aId": "6953916c-867d-42fe-89ad-444aee6d40e8",
   "bId": "72a5a44f-5c46-49c4-bf9c-6d40e944ee06"
  },
  {
   "a": "Maanav Shah",
   "b": "Dilan Shah",
   "team": "Monroe",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.4,
   "avgActual": 0,
   "avgExpected": -0.6,
   "aId": "0a1270b0-26f6-4328-85bc-bf3f329a746e",
   "bId": "91d23f87-e0fc-4448-890e-c3abd96c70b4"
  },
  {
   "a": "Eric Gibbs",
   "b": "Tess Fisher",
   "team": "Four Seasons",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.4,
   "avgActual": 1.3,
   "avgExpected": 0.4,
   "aId": "0c1a11c0-7f89-48fa-af2f-3f9925039239",
   "bId": "661f7bd0-74d3-432b-acc7-da0e3b3e36ea"
  },
  {
   "a": "Lissa Eagles",
   "b": "Emily Babinsky",
   "team": "Pickle House",
   "n": 12,
   "w": 8,
   "l": 4,
   "synergy": 0.3,
   "avgActual": 2.5,
   "avgExpected": 2.2,
   "aId": "9ec39678-a120-45de-b8a5-897b8cf900cd",
   "bId": "d0e2c1ea-529d-4364-b521-cb205ecdded3"
  },
  {
   "a": "Suzi Battison",
   "b": "Robbie Oddy",
   "team": "Flemington",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 4.4,
   "avgExpected": 3.9,
   "aId": "40579892-d9bf-4d1d-9417-5830d5d45093",
   "bId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6"
  },
  {
   "a": "Tess Fisher",
   "b": "Zyril Carilo",
   "team": "Four Seasons",
   "n": 19,
   "w": 13,
   "l": 6,
   "synergy": 0.3,
   "avgActual": 1.9,
   "avgExpected": 1.6,
   "aId": "661f7bd0-74d3-432b-acc7-da0e3b3e36ea",
   "bId": "b4efc48a-f302-4d27-8c35-0dac1e68eec8"
  },
  {
   "a": "Drew Von Bargen",
   "b": "Shelah Wallace",
   "team": "Jersey Devil",
   "n": 13,
   "w": 8,
   "l": 5,
   "synergy": 0.3,
   "avgActual": 1.5,
   "avgExpected": 1.1,
   "aId": "35880e0f-aba0-4a37-85fe-e09b057d63b2",
   "bId": "fa519fb1-87ca-4a7b-9265-4aba9807929f"
  },
  {
   "a": "Drew Von Bargen",
   "b": "Tyler Arsenault",
   "team": "Jersey Devil",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 0.3,
   "avgActual": -0.3,
   "avgExpected": -0.7,
   "aId": "35880e0f-aba0-4a37-85fe-e09b057d63b2",
   "bId": "e76d2d63-f7dc-40e7-aca2-d9b3aecf4d3e"
  },
  {
   "a": "Tyler Arsenault",
   "b": "Shelah Wallace",
   "team": "Jersey Devil",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 2,
   "avgExpected": 1.5,
   "aId": "e76d2d63-f7dc-40e7-aca2-d9b3aecf4d3e",
   "bId": "fa519fb1-87ca-4a7b-9265-4aba9807929f"
  },
  {
   "a": "Kara Infante",
   "b": "Marcos Claros",
   "team": "Picklr Fair Lawn",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.3,
   "avgActual": -0.7,
   "avgExpected": -1.3,
   "aId": "06edda3d-3a1f-4010-86fa-8ac767cd7079",
   "bId": "839ee2ac-03d5-4fee-bc87-08709afae5f2"
  },
  {
   "a": "Yoyo Shen",
   "b": "Sidd Pathare",
   "team": "Pickle House",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 1,
   "avgExpected": 0.5,
   "aId": "9d47a1aa-c44c-4ddd-8953-dc40f79b1016",
   "bId": "a73f249d-c1c9-4516-bc79-e9732581f098"
  },
  {
   "a": "Alex Kazdan",
   "b": "Jenna Irwin",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 2.7,
   "avgExpected": 1.9,
   "aId": "51f123b2-aced-4719-9d05-d09244db1ee4",
   "bId": "85e52e3b-5238-4583-8d1a-cc57f8218ef6"
  },
  {
   "a": "Eric Gibbs",
   "b": "Justin Bautista",
   "team": "Four Seasons",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 0.3,
   "avgActual": -4.5,
   "avgExpected": -5,
   "aId": "0c1a11c0-7f89-48fa-af2f-3f9925039239",
   "bId": "27660961-6245-4b09-aafe-359ca3205797"
  },
  {
   "a": "Shreyas Pani",
   "b": "Cameron Barraco",
   "team": "Monroe",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 0.8,
   "avgExpected": 0.2,
   "aId": "3cebd01c-ff32-4544-b6a6-2a68152b2ee5",
   "bId": "ebcb4134-e369-436b-bc38-2cdaadb381c6"
  },
  {
   "a": "Jennifer Sanchez",
   "b": "Chaille Godinez",
   "team": "ACE",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 0.3,
   "avgActual": -1.3,
   "avgExpected": -1.9,
   "aId": "061121d0-5d0a-4c01-9d8e-dced99d6d82d",
   "bId": "3cb88b7e-d8f2-45c6-b928-202bd6f5d4e6"
  },
  {
   "a": "Bruno Casino",
   "b": "Ashwin Korde",
   "team": "Bounce Philly",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.3,
   "avgActual": 1.8,
   "avgExpected": 1.2,
   "aId": "d195dff9-7f38-402c-8164-44640f89c3fa",
   "bId": "f9f521ee-5f27-4f61-b4e0-4e0b9ad09aee"
  },
  {
   "a": "Taylor Dath",
   "b": "Katherine Maruyama",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.3,
   "avgActual": -1,
   "avgExpected": -1.6,
   "aId": "112420f1-32a0-492e-82fa-3e0ad7a9dd7c",
   "bId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a"
  },
  {
   "a": "Daniel Gallegos",
   "b": "Scott Chen Cheng",
   "team": "Pickleball Kingdom Watchung",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.3,
   "avgActual": -5,
   "avgExpected": -5.7,
   "aId": "6f9cb35b-f24c-4480-a8b4-86e6ea32f3c2",
   "bId": "cf114aa2-0fde-4f47-862d-7d2f729b3b49"
  },
  {
   "a": "Kathleen Dougherty",
   "b": "Nam Barsh",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.3,
   "avgActual": -1.2,
   "avgExpected": -1.8,
   "aId": "c929f42d-6fd4-4034-888e-ad456cda3063",
   "bId": "fa43af77-3cd1-4e61-a8dc-bd714b65d517"
  },
  {
   "a": "Sidd Pathare",
   "b": "Zach Mcgowan",
   "team": "Pickle House",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.3,
   "avgActual": 2.3,
   "avgExpected": 1.7,
   "aId": "a73f249d-c1c9-4516-bc79-e9732581f098",
   "bId": "e71a8785-5959-4607-9af3-e3ac9e3c6d86"
  },
  {
   "a": "Amanda Ksiezopolski",
   "b": "Morgan Fishman",
   "team": "Monroe",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": 0.2,
   "avgActual": -1.7,
   "avgExpected": -2,
   "aId": "2138af89-34bc-4ee2-9955-ff16f0997031",
   "bId": "5ccee070-0af8-4363-9ddb-6ce8ebce098f"
  },
  {
   "a": "Lou Frignito",
   "b": "Yuki Kim",
   "team": "Bounce Malvern",
   "n": 10,
   "w": 7,
   "l": 3,
   "synergy": 0.2,
   "avgActual": 2.6,
   "avgExpected": 2.4,
   "aId": "1afca308-dca6-4828-946a-0ca6ad1b0c44",
   "bId": "afec0287-b62d-4aaf-977f-afb96aed0e17"
  },
  {
   "a": "Yuki Kim",
   "b": "Kathleen Dougherty",
   "team": "Bounce Malvern",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": 0.2,
   "avgActual": -1.2,
   "avgExpected": -1.6,
   "aId": "afec0287-b62d-4aaf-977f-afb96aed0e17",
   "bId": "c929f42d-6fd4-4034-888e-ad456cda3063"
  },
  {
   "a": "Brittany Hall",
   "b": "Manny Lai",
   "team": "ACE",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": 0.2,
   "avgActual": 0.9,
   "avgExpected": 0.6,
   "aId": "17cc768d-f6c8-484c-814e-063d17cec72f",
   "bId": "f2a53ee2-a602-4e58-8326-6d0624af34af"
  },
  {
   "a": "Robyn Himelstein",
   "b": "Julia Sternberg",
   "team": "Bounce Philly",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.2,
   "avgActual": -2,
   "avgExpected": -2.6,
   "aId": "950366ff-1da8-4617-b0d4-0ef68aefd473",
   "bId": "ccd8a76f-df3a-4ab9-97b6-bae0f860a431"
  },
  {
   "a": "William Hayes",
   "b": "Julia Sternberg",
   "team": "Bounce Philly",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 1,
   "avgExpected": 0.7,
   "aId": "4dfed1a1-5375-446c-98bc-69402e70e1d5",
   "bId": "ccd8a76f-df3a-4ab9-97b6-bae0f860a431"
  },
  {
   "a": "Daniel Kulik",
   "b": "Patrick Ceccacci",
   "team": "Pickleball Palace",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 0.6,
   "avgExpected": 0.3,
   "aId": "35d7ef89-3505-481a-8036-8c5d7954f9a8",
   "bId": "a291ed5b-4a4f-4402-93d0-f4d78e790f2c"
  },
  {
   "a": "Lynda Tomaru",
   "b": "Robbie Oddy",
   "team": "Flemington",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.2,
   "avgActual": 0.3,
   "avgExpected": -0.2,
   "aId": "2b001a36-d13c-42fa-ae50-c9cc2f1aeb4e",
   "bId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6"
  },
  {
   "a": "Shawn Ganow",
   "b": "Royce Chan",
   "team": "Four Seasons",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": 0.2,
   "avgActual": -1.4,
   "avgExpected": -1.7,
   "aId": "1e340ccb-0e0f-4b6b-b760-d1a723561d04",
   "bId": "68274c39-0102-4554-978e-1aa50a0b3fba"
  },
  {
   "a": "Richa Shah",
   "b": "Claire Gaston",
   "team": "Monroe",
   "n": 9,
   "w": 4,
   "l": 5,
   "synergy": 0.2,
   "avgActual": -0.8,
   "avgExpected": -1.1,
   "aId": "6b80047c-ca16-4506-a2a4-ed894dc0c37f",
   "bId": "7f62f4db-d0cf-4990-a324-63aeb985a840"
  },
  {
   "a": "Jeff Comer",
   "b": "Ozair Ibrahim",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 1,
   "avgExpected": 0.5,
   "aId": "afacd45c-4801-4062-9401-f721e8d73d08",
   "bId": "c6fc34a8-e441-4850-b37c-c29b35563989"
  },
  {
   "a": "Anh Nguyen",
   "b": "Melissa Xu",
   "team": "Four Seasons",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0.2,
   "avgActual": -5.3,
   "avgExpected": -5.7,
   "aId": "3478a097-ab58-413c-b90e-aef96e00fbfa",
   "bId": "a1be2c26-76d3-414d-89fd-8334435b97c2"
  },
  {
   "a": "Lynda Tomaru",
   "b": "Melissa Dardani",
   "team": "Flemington",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 0.7,
   "avgExpected": 0.3,
   "aId": "2b001a36-d13c-42fa-ae50-c9cc2f1aeb4e",
   "bId": "ef423f8a-5c2c-4a12-9f37-b41ff6d6c530"
  },
  {
   "a": "Stephen Mcnamara",
   "b": "Pearly Leung",
   "team": "Picklr Fair Lawn",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 2.3,
   "avgExpected": 1.8,
   "aId": "245e949d-15e7-411e-9751-e19ca709f2cb",
   "bId": "581070ec-7106-4558-bc86-4df0675682cb"
  },
  {
   "a": "Jase Volz",
   "b": "Hector Irizarry",
   "team": "ACE",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.2,
   "avgActual": 4,
   "avgExpected": 3.6,
   "aId": "66f782cc-bcee-4ebf-849a-649a37bf8a8d",
   "bId": "a50a69d0-0a8c-4241-b768-846b1591d180"
  },
  {
   "a": "Lou Frignito",
   "b": "Lukas Choi",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.2,
   "avgActual": -1.3,
   "avgExpected": -1.9,
   "aId": "1afca308-dca6-4828-946a-0ca6ad1b0c44",
   "bId": "97cb10ea-1dd5-42c7-83f0-1465bdec9d0b"
  },
  {
   "a": "Jordan Long",
   "b": "Shashank Kamdar",
   "team": "Bounce Malvern",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.2,
   "avgActual": -1.4,
   "avgExpected": -1.7,
   "aId": "0fbbdbbb-a550-49ae-b04a-111bfe4891f5",
   "bId": "56db4b56-6166-437f-8ece-26576b7042e5"
  },
  {
   "a": "Phil Chang",
   "b": "Aya Haruyama",
   "team": "Picklr Fair Lawn",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0.2,
   "avgActual": -1,
   "avgExpected": -1.3,
   "aId": "a31d5bae-fddc-44ca-9782-f3eb86667058",
   "bId": "d2ef2b1f-9f63-4542-8b66-c6ef8ca0fdc3"
  },
  {
   "a": "Chad Durkin",
   "b": "Pablo Shin",
   "team": "Picklr Fair Lawn",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": 0.2,
   "avgActual": -2.4,
   "avgExpected": -2.8,
   "aId": "54ed1c79-aaa0-486d-851b-d5a4db375b94",
   "bId": "d2130c6d-6552-422e-b93d-c804bc7303a0"
  },
  {
   "a": "Chanda Mccoy",
   "b": "Gautham Bondugula",
   "team": "Pickleball Kingdom Watchung",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 0.3,
   "avgExpected": -0.2,
   "aId": "30cb78cb-f962-40f9-bd02-78d336920431",
   "bId": "3da7de8e-f75c-4e90-b63e-f340cc8788a0"
  },
  {
   "a": "Eric Gibbs",
   "b": "Courtney Davis",
   "team": "Four Seasons",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": 0.2,
   "avgActual": -2,
   "avgExpected": -2.3,
   "aId": "0c1a11c0-7f89-48fa-af2f-3f9925039239",
   "bId": "422813d6-2920-4a65-a84d-a29b6cefcd54"
  },
  {
   "a": "Jessica Hendry",
   "b": "Keith Shedlock",
   "team": "Pickleball Palace",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.2,
   "avgActual": -1.4,
   "avgExpected": -1.7,
   "aId": "d8d64088-d1c4-4e85-a742-9ebe70839fe3",
   "bId": "f4b44cd7-fc9a-41a2-b569-cdaf08b0bf26"
  },
  {
   "a": "Alexander Tong",
   "b": "Ashwin Korde",
   "team": "Bounce Philly",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.2,
   "avgActual": 1,
   "avgExpected": 0.5,
   "aId": "d8d64dde-4ffb-4c49-aaa6-537b09c9c8d5",
   "bId": "f9f521ee-5f27-4f61-b4e0-4e0b9ad09aee"
  },
  {
   "a": "Chris Damato",
   "b": "Zach Mcgowan",
   "team": "Pickle House",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": 0.2,
   "avgActual": 3.3,
   "avgExpected": 2.8,
   "aId": "445e89c8-a23c-440c-bd3c-7eab366bdd85",
   "bId": "e71a8785-5959-4607-9af3-e3ac9e3c6d86"
  },
  {
   "a": "Jordan Long",
   "b": "Julia Plein",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 0.1,
   "avgActual": -3.2,
   "avgExpected": -3.4,
   "aId": "0fbbdbbb-a550-49ae-b04a-111bfe4891f5",
   "bId": "f3d99274-413c-4720-9c8d-1a71f9b2e717"
  },
  {
   "a": "Thomas Connolly",
   "b": "Robbie Oddy",
   "team": "Flemington",
   "n": 15,
   "w": 8,
   "l": 7,
   "synergy": 0.1,
   "avgActual": -0.6,
   "avgExpected": -0.7,
   "aId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3",
   "bId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6"
  },
  {
   "a": "Chanda Mccoy",
   "b": "Doryan Amato",
   "team": "Pickleball Kingdom Watchung",
   "n": 10,
   "w": 4,
   "l": 6,
   "synergy": 0.1,
   "avgActual": -0.1,
   "avgExpected": -0.3,
   "aId": "30cb78cb-f962-40f9-bd02-78d336920431",
   "bId": "9d2c8050-1b0b-4f4c-9158-a84190c726e3"
  },
  {
   "a": "Tin Wai Kwan",
   "b": "Caitlyn Moore",
   "team": "Picklr Fair Lawn",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": 0.1,
   "avgActual": -0.7,
   "avgExpected": -0.9,
   "aId": "22fe1980-7ef9-4026-8c76-a39534431c6b",
   "bId": "905b402c-9a3e-4b59-ba3e-59f32370ad2e"
  },
  {
   "a": "Ross Switkes",
   "b": "Christine Ferraez",
   "team": "Flemington",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0.1,
   "avgActual": -2.5,
   "avgExpected": -2.7,
   "aId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b",
   "bId": "ffe0a04b-eb97-4dda-8bc0-0ebe0fd1089e"
  },
  {
   "a": "Claire Malone",
   "b": "Jessica Hendry",
   "team": "Pickleball Palace",
   "n": 5,
   "w": 5,
   "l": 0,
   "synergy": 0.1,
   "avgActual": 6.2,
   "avgExpected": 6,
   "aId": "72a5a44f-5c46-49c4-bf9c-6d40e944ee06",
   "bId": "d8d64088-d1c4-4e85-a742-9ebe70839fe3"
  },
  {
   "a": "Austin Gow",
   "b": "Nick Meale",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 4.3,
   "avgExpected": 4.2,
   "aId": "0e577096-0b13-441d-b087-cc49cb55cfe2",
   "bId": "ec0bad09-8256-49b3-ae86-3add22dd995f"
  },
  {
   "a": "Zachary Lessner",
   "b": "Dustin Rabinowitz",
   "team": "Bounce Philly",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 2,
   "avgExpected": 1.9,
   "aId": "2ce5ebef-8079-4871-8d2e-b34988abbaad",
   "bId": "d23839c0-334b-4423-9305-0c6281523d5d"
  },
  {
   "a": "Gog Boonswang",
   "b": "Katarzyna Clevenger",
   "team": "ACE",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": 0.1,
   "avgActual": 0.7,
   "avgExpected": 0.6,
   "aId": "0de1a7eb-b5b2-4a71-8800-1416980b0e68",
   "bId": "adc8c45e-c260-49fe-a318-ee643df2b86f"
  },
  {
   "a": "Brittany Hall",
   "b": "Katarzyna Clevenger",
   "team": "ACE",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 4,
   "avgExpected": 3.8,
   "aId": "17cc768d-f6c8-484c-814e-063d17cec72f",
   "bId": "adc8c45e-c260-49fe-a318-ee643df2b86f"
  },
  {
   "a": "Yoyo Shen",
   "b": "Emily Babinsky",
   "team": "Pickle House",
   "n": 8,
   "w": 6,
   "l": 2,
   "synergy": 0.1,
   "avgActual": 2.6,
   "avgExpected": 2.4,
   "aId": "9d47a1aa-c44c-4ddd-8953-dc40f79b1016",
   "bId": "d0e2c1ea-529d-4364-b521-cb205ecdded3"
  },
  {
   "a": "Daniel Kulik",
   "b": "Ashley Georgevich",
   "team": "Pickleball Palace",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 5,
   "avgExpected": 4.8,
   "aId": "35d7ef89-3505-481a-8036-8c5d7954f9a8",
   "bId": "6953916c-867d-42fe-89ad-444aee6d40e8"
  },
  {
   "a": "Bryan Nardone",
   "b": "Riguo Zheng",
   "team": "Four Seasons",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": 0.1,
   "avgActual": -8,
   "avgExpected": -8.2,
   "aId": "a479d794-d9d0-4620-b322-b7f249f2ae5f",
   "bId": "c5fa0e7c-eb97-45fa-8a86-850a918fff54"
  },
  {
   "a": "Eric Lin",
   "b": "Jacob Yandoli",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 2.7,
   "avgExpected": 2.5,
   "aId": "4ce1c715-b187-47c5-b6dc-d079f802499d",
   "bId": "be9bc229-2d57-4236-a951-11a2f91a09a3"
  },
  {
   "a": "Chad Durkin",
   "b": "Caitlyn Moore",
   "team": "Picklr Fair Lawn",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.1,
   "avgActual": -1.7,
   "avgExpected": -1.9,
   "aId": "54ed1c79-aaa0-486d-851b-d5a4db375b94",
   "bId": "905b402c-9a3e-4b59-ba3e-59f32370ad2e"
  },
  {
   "a": "Phil Chang",
   "b": "Johanna Wagner",
   "team": "Picklr Fair Lawn",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 2.6,
   "avgExpected": 2.4,
   "aId": "a31d5bae-fddc-44ca-9782-f3eb86667058",
   "bId": "e447eb0f-dc19-4616-a7f4-b53de776db3b"
  },
  {
   "a": "Tim Dowd",
   "b": "Ross Switkes",
   "team": "Flemington",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0.1,
   "avgActual": 0.2,
   "avgExpected": 0,
   "aId": "b7555b30-f1b5-4d44-9eff-dffd3e1b1b28",
   "bId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b"
  },
  {
   "a": "Jonah Fliegelman",
   "b": "Nahla Bernhardt",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.1,
   "avgActual": 8.3,
   "avgExpected": 8.2,
   "aId": "1070bcd5-fdff-4adc-8d03-460a208fe4e8",
   "bId": "9dae8c17-6878-473a-83e9-a43b434f876b"
  },
  {
   "a": "Gautham Bondugula",
   "b": "Chrissy Sandella",
   "team": "Pickleball Kingdom Watchung",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 0.7,
   "avgExpected": 0.4,
   "aId": "3da7de8e-f75c-4e90-b63e-f340cc8788a0",
   "bId": "bd30e236-1c20-4fa1-b9ad-f56c8613d22b"
  },
  {
   "a": "Grant Hanak",
   "b": "Shashank Kamdar",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0.1,
   "avgActual": -0.7,
   "avgExpected": -0.8,
   "aId": "44a0a4da-e7cb-4037-9018-97544dfce248",
   "bId": "56db4b56-6166-437f-8ece-26576b7042e5"
  },
  {
   "a": "Lou Frignito",
   "b": "Vaughn Lawrence",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": 0.1,
   "avgActual": 4.7,
   "avgExpected": 4.5,
   "aId": "1afca308-dca6-4828-946a-0ca6ad1b0c44",
   "bId": "d4c1185c-6147-4164-90e1-06ecfa162596"
  },
  {
   "a": "Lou Frignito",
   "b": "Katherine Maruyama",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": 0.1,
   "avgActual": 3.7,
   "avgExpected": 3.4,
   "aId": "1afca308-dca6-4828-946a-0ca6ad1b0c44",
   "bId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a"
  },
  {
   "a": "Maanav Shah",
   "b": "Ruhi Shah",
   "team": "Monroe",
   "n": 15,
   "w": 12,
   "l": 3,
   "synergy": 0,
   "avgActual": 2.7,
   "avgExpected": 2.7,
   "aId": "0a1270b0-26f6-4328-85bc-bf3f329a746e",
   "bId": "a2d56e71-3895-4316-9e9e-17565fb62295"
  },
  {
   "a": "Charlotte Healey",
   "b": "Alex Abad",
   "team": "Bounce Philly",
   "n": 10,
   "w": 2,
   "l": 8,
   "synergy": 0,
   "avgActual": -0.7,
   "avgExpected": -0.7,
   "aId": "bbaf3def-a87b-4537-8701-4f5ae0108b1f",
   "bId": "bc881ebc-7a42-43be-b1b2-9c29c59a4132"
  },
  {
   "a": "Zoe Ousouljoglou",
   "b": "James Cannizzaro",
   "team": "Pickleball Kingdom Watchung",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": 0,
   "avgActual": 1.4,
   "avgExpected": 1.5,
   "aId": "269fe355-d2eb-41b8-9e92-a1438aec65e3",
   "bId": "9f2987f3-a389-4d47-9dcd-e619d94cbc18"
  },
  {
   "a": "Thomas Connolly",
   "b": "Ross Switkes",
   "team": "Flemington",
   "n": 9,
   "w": 3,
   "l": 6,
   "synergy": 0,
   "avgActual": -2.1,
   "avgExpected": -2.1,
   "aId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3",
   "bId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b"
  },
  {
   "a": "Amanda Ksiezopolski",
   "b": "Shreyas Pani",
   "team": "Monroe",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": 0,
   "avgActual": 2,
   "avgExpected": 2,
   "aId": "2138af89-34bc-4ee2-9955-ff16f0997031",
   "bId": "3cebd01c-ff32-4544-b6a6-2a68152b2ee5"
  },
  {
   "a": "Sidd Pathare",
   "b": "Emily Babinsky",
   "team": "Pickle House",
   "n": 11,
   "w": 4,
   "l": 7,
   "synergy": 0,
   "avgActual": -1.5,
   "avgExpected": -1.4,
   "aId": "a73f249d-c1c9-4516-bc79-e9732581f098",
   "bId": "d0e2c1ea-529d-4364-b521-cb205ecdded3"
  },
  {
   "a": "Richa Shah",
   "b": "Chris Frangipane",
   "team": "Monroe",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0,
   "avgActual": -3.3,
   "avgExpected": -3.3,
   "aId": "6b80047c-ca16-4506-a2a4-ed894dc0c37f",
   "bId": "e8bb81fd-869a-459d-8108-b9ac6bc1b84d"
  },
  {
   "a": "Varun Prakash",
   "b": "Thomas Connolly",
   "team": "Flemington",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": 0,
   "avgActual": 1.5,
   "avgExpected": 1.6,
   "aId": "67dbfc4f-20f7-4299-bc2f-6cc70cf747ab",
   "bId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3"
  },
  {
   "a": "Varun Prakash",
   "b": "Ross Switkes",
   "team": "Flemington",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": 0,
   "avgActual": 4,
   "avgExpected": 4,
   "aId": "67dbfc4f-20f7-4299-bc2f-6cc70cf747ab",
   "bId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b"
  },
  {
   "a": "Helen Liu",
   "b": "Chris Frangipane",
   "team": "Monroe",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": 0,
   "avgActual": -5.2,
   "avgExpected": -5.2,
   "aId": "53cc1790-d8b9-4b64-a8b3-6e10b2eeb131",
   "bId": "e8bb81fd-869a-459d-8108-b9ac6bc1b84d"
  },
  {
   "a": "Lauren Mercado",
   "b": "James Chau",
   "team": "Four Seasons",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": 0,
   "avgActual": -9,
   "avgExpected": -9,
   "aId": "0aa554f3-0eca-4f2d-b3d9-b277406a7435",
   "bId": "6cfba5c8-d2dd-4203-aca2-b9827dd20939"
  },
  {
   "a": "Maanav Shah",
   "b": "Shreyas Pani",
   "team": "Monroe",
   "n": 7,
   "w": 6,
   "l": 1,
   "synergy": 0,
   "avgActual": 4.7,
   "avgExpected": 4.8,
   "aId": "0a1270b0-26f6-4328-85bc-bf3f329a746e",
   "bId": "3cebd01c-ff32-4544-b6a6-2a68152b2ee5"
  },
  {
   "a": "Kathleen Dougherty",
   "b": "Nick Meale",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0,
   "avgActual": -2,
   "avgExpected": -2.1,
   "aId": "c929f42d-6fd4-4034-888e-ad456cda3063",
   "bId": "ec0bad09-8256-49b3-ae86-3add22dd995f"
  },
  {
   "a": "Zachary Lessner",
   "b": "Charlotte Healey",
   "team": "Bounce Philly",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0,
   "avgActual": -1.7,
   "avgExpected": -1.7,
   "aId": "2ce5ebef-8079-4871-8d2e-b34988abbaad",
   "bId": "bbaf3def-a87b-4537-8701-4f5ae0108b1f"
  },
  {
   "a": "Susan Ackley",
   "b": "Courtney Greener",
   "team": "Flemington",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": 0,
   "avgActual": -1.4,
   "avgExpected": -1.4,
   "aId": "07a0e948-6308-4920-a6a8-1d5945552ecb",
   "bId": "0a66ddb6-6771-4641-ad1e-0ed15d96b66d"
  },
  {
   "a": "Daniel Gallegos",
   "b": "Doryan Amato",
   "team": "Pickleball Kingdom Watchung",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": 0,
   "avgActual": -4.7,
   "avgExpected": -4.7,
   "aId": "6f9cb35b-f24c-4480-a8b4-86e6ea32f3c2",
   "bId": "9d2c8050-1b0b-4f4c-9158-a84190c726e3"
  },
  {
   "a": "Chanda Mccoy",
   "b": "Chrissy Sandella",
   "team": "Pickleball Kingdom Watchung",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": 0,
   "avgActual": -2.4,
   "avgExpected": -2.4,
   "aId": "30cb78cb-f962-40f9-bd02-78d336920431",
   "bId": "bd30e236-1c20-4fa1-b9ad-f56c8613d22b"
  },
  {
   "a": "Lindsey Thoeng",
   "b": "Hannah Nussbaum",
   "team": "Dill Dinkers Hatboro",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": 0,
   "avgActual": 3.5,
   "avgExpected": 3.5,
   "aId": "67977901-2346-49bb-93df-b59d31cb9a30",
   "bId": "84b7c449-501c-438d-a3eb-ee67cc92fa0e"
  },
  {
   "a": "Dylan Unkert",
   "b": "Nick Dehmer",
   "team": "Pickle House",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 3.7,
   "avgExpected": 3.9,
   "aId": "35415e5c-19db-4389-9839-b63d7e09851f",
   "bId": "3cd8477e-8352-44a7-916f-ac2e3c3005f2"
  },
  {
   "a": "Nathan Law",
   "b": "Chaille Godinez",
   "team": "ACE",
   "n": 17,
   "w": 13,
   "l": 4,
   "synergy": -0.1,
   "avgActual": 3.1,
   "avgExpected": 3.1,
   "aId": "3c81d27f-9e68-439b-a476-f5ac1a54f45a",
   "bId": "3cb88b7e-d8f2-45c6-b928-202bd6f5d4e6"
  },
  {
   "a": "William Hayes",
   "b": "Alexander Tong",
   "team": "Bounce Philly",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 1.8,
   "avgExpected": 2,
   "aId": "4dfed1a1-5375-446c-98bc-69402e70e1d5",
   "bId": "d8d64dde-4ffb-4c49-aaa6-537b09c9c8d5"
  },
  {
   "a": "Kaylyn Swankoski",
   "b": "Hannah Nussbaum",
   "team": "Dill Dinkers Hatboro",
   "n": 11,
   "w": 9,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 5,
   "avgExpected": 5.1,
   "aId": "72949bef-7cab-4942-ab45-e5203024a8d5",
   "bId": "84b7c449-501c-438d-a3eb-ee67cc92fa0e"
  },
  {
   "a": "Claire Malone",
   "b": "Christian Fechter",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 3,
   "avgExpected": 3.3,
   "aId": "72a5a44f-5c46-49c4-bf9c-6d40e944ee06",
   "bId": "9a973334-7467-4873-9aa6-ca3a597e8caa"
  },
  {
   "a": "David Lavy",
   "b": "Jessica Pevny",
   "team": "Pickleball Palace",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 4,
   "avgExpected": 4.2,
   "aId": "e28e2d63-947f-490f-9f69-14fb6093b505",
   "bId": "f472188b-24d9-4bf7-9f70-746d496f57d4"
  },
  {
   "a": "Shawn Ganow",
   "b": "Courtney Davis",
   "team": "Four Seasons",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -3,
   "avgExpected": -2.7,
   "aId": "1e340ccb-0e0f-4b6b-b760-d1a723561d04",
   "bId": "422813d6-2920-4a65-a84d-a29b6cefcd54"
  },
  {
   "a": "Stephen Conger",
   "b": "Tyler Arsenault",
   "team": "Jersey Devil",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 0,
   "avgExpected": 0.1,
   "aId": "24e70ef7-b98e-459e-8a19-19a2b66a054e",
   "bId": "e76d2d63-f7dc-40e7-aca2-d9b3aecf4d3e"
  },
  {
   "a": "Kara Infante",
   "b": "Caitlyn Moore",
   "team": "Picklr Fair Lawn",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -4.3,
   "avgExpected": -4.1,
   "aId": "06edda3d-3a1f-4010-86fa-8ac767cd7079",
   "bId": "905b402c-9a3e-4b59-ba3e-59f32370ad2e"
  },
  {
   "a": "Suzi Battison",
   "b": "Christine Ferraez",
   "team": "Flemington",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -0.1,
   "avgActual": -1.8,
   "avgExpected": -1.6,
   "aId": "40579892-d9bf-4d1d-9417-5830d5d45093",
   "bId": "ffe0a04b-eb97-4dda-8bc0-0ebe0fd1089e"
  },
  {
   "a": "Stephen Mcnamara",
   "b": "Chad Durkin",
   "team": "Picklr Fair Lawn",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 1.7,
   "avgExpected": 1.8,
   "aId": "245e949d-15e7-411e-9751-e19ca709f2cb",
   "bId": "54ed1c79-aaa0-486d-851b-d5a4db375b94"
  },
  {
   "a": "Suzi Battison",
   "b": "Ross Switkes",
   "team": "Flemington",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 1.6,
   "avgExpected": 1.7,
   "aId": "40579892-d9bf-4d1d-9417-5830d5d45093",
   "bId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b"
  },
  {
   "a": "Amanda Ksiezopolski",
   "b": "Helen Liu",
   "team": "Monroe",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.1,
   "avgActual": -4,
   "avgExpected": -3.7,
   "aId": "2138af89-34bc-4ee2-9955-ff16f0997031",
   "bId": "53cc1790-d8b9-4b64-a8b3-6e10b2eeb131"
  },
  {
   "a": "Julia Sternberg",
   "b": "Mark Kilimnik",
   "team": "Bounce Philly",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 1.1,
   "avgExpected": 1.2,
   "aId": "ccd8a76f-df3a-4ab9-97b6-bae0f860a431",
   "bId": "d6c15f91-4cc9-4612-8ec3-8f4ebd4e0cc1"
  },
  {
   "a": "Lauren Mercado",
   "b": "Zyril Carilo",
   "team": "Four Seasons",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -0.1,
   "avgActual": -4.4,
   "avgExpected": -4.2,
   "aId": "0aa554f3-0eca-4f2d-b3d9-b277406a7435",
   "bId": "b4efc48a-f302-4d27-8c35-0dac1e68eec8"
  },
  {
   "a": "William Hayes",
   "b": "Charlotte Healey",
   "team": "Bounce Philly",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 3,
   "avgExpected": 3.2,
   "aId": "4dfed1a1-5375-446c-98bc-69402e70e1d5",
   "bId": "bbaf3def-a87b-4537-8701-4f5ae0108b1f"
  },
  {
   "a": "Kerrin Maurer",
   "b": "Nick Dehmer",
   "team": "Pickle House",
   "n": 9,
   "w": 7,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 4.4,
   "avgExpected": 4.6,
   "aId": "1d63ce3d-20c2-40ae-94ca-e8e6e458004e",
   "bId": "3cd8477e-8352-44a7-916f-ac2e3c3005f2"
  },
  {
   "a": "Amanda Ksiezopolski",
   "b": "Jacob Yandoli",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 2.3,
   "avgExpected": 2.6,
   "aId": "2138af89-34bc-4ee2-9955-ff16f0997031",
   "bId": "be9bc229-2d57-4236-a951-11a2f91a09a3"
  },
  {
   "a": "Clayton Schmucker",
   "b": "Ozair Ibrahim",
   "team": "Dill Dinkers Hatboro",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": -0.1,
   "avgActual": 7.3,
   "avgExpected": 7.5,
   "aId": "0be72348-4a00-413e-bf40-df6824c3cca3",
   "bId": "c6fc34a8-e441-4850-b37c-c29b35563989"
  },
  {
   "a": "Shreyas Pani",
   "b": "Jacob Yandoli",
   "team": "Monroe",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 2.8,
   "avgExpected": 3,
   "aId": "3cebd01c-ff32-4544-b6a6-2a68152b2ee5",
   "bId": "be9bc229-2d57-4236-a951-11a2f91a09a3"
  },
  {
   "a": "Chanda Mccoy",
   "b": "Daniel Gallegos",
   "team": "Pickleball Kingdom Watchung",
   "n": 10,
   "w": 3,
   "l": 7,
   "synergy": -0.1,
   "avgActual": -2.5,
   "avgExpected": -2.4,
   "aId": "30cb78cb-f962-40f9-bd02-78d336920431",
   "bId": "6f9cb35b-f24c-4480-a8b4-86e6ea32f3c2"
  },
  {
   "a": "Lou Frignito",
   "b": "Sarah Kline",
   "team": "Bounce Malvern",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -0.1,
   "avgActual": 3,
   "avgExpected": 3.1,
   "aId": "1afca308-dca6-4828-946a-0ca6ad1b0c44",
   "bId": "b122f262-f81d-4fb2-9f11-c473d18a4260"
  },
  {
   "a": "Kaia Hoak",
   "b": "Johny Mario",
   "team": "Jersey Devil",
   "n": 8,
   "w": 2,
   "l": 6,
   "synergy": -0.1,
   "avgActual": -3.7,
   "avgExpected": -3.5,
   "aId": "50257f40-66f5-44f8-a3c7-21ffdf6d510a",
   "bId": "831c9fae-38c6-4961-8664-634087f5f2f9"
  },
  {
   "a": "Caitlyn Moore",
   "b": "Phil Chang",
   "team": "Picklr Fair Lawn",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 0.8,
   "avgExpected": 1,
   "aId": "905b402c-9a3e-4b59-ba3e-59f32370ad2e",
   "bId": "a31d5bae-fddc-44ca-9782-f3eb86667058"
  },
  {
   "a": "Carly Pfeffer",
   "b": "Jessica Hendry",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -1,
   "avgExpected": -0.8,
   "aId": "387e74d4-66ee-4a52-a4ac-aae3dbe1d21b",
   "bId": "d8d64088-d1c4-4e85-a742-9ebe70839fe3"
  },
  {
   "a": "Taylor Hartman",
   "b": "Chris Damato",
   "team": "Pickle House",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": -0.1,
   "avgActual": 1.8,
   "avgExpected": 1.8,
   "aId": "3bf2f55b-b253-4d2a-b1b9-d5953ef1b8ec",
   "bId": "445e89c8-a23c-440c-bd3c-7eab366bdd85"
  },
  {
   "a": "Yuki Kim",
   "b": "Nam Barsh",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.1,
   "avgActual": -1,
   "avgExpected": -0.7,
   "aId": "afec0287-b62d-4aaf-977f-afb96aed0e17",
   "bId": "fa43af77-3cd1-4e61-a8dc-bd714b65d517"
  },
  {
   "a": "Alyssa Boyle",
   "b": "Bruno Casino",
   "team": "Bounce Philly",
   "n": 7,
   "w": 5,
   "l": 2,
   "synergy": -0.1,
   "avgActual": 4.7,
   "avgExpected": 4.9,
   "aId": "22123177-1eb2-4285-bc92-f75799e175dd",
   "bId": "d195dff9-7f38-402c-8164-44640f89c3fa"
  },
  {
   "a": "Richa Shah",
   "b": "Dilan Shah",
   "team": "Monroe",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -0.1,
   "avgActual": -3.7,
   "avgExpected": -3.6,
   "aId": "6b80047c-ca16-4506-a2a4-ed894dc0c37f",
   "bId": "91d23f87-e0fc-4448-890e-c3abd96c70b4"
  },
  {
   "a": "Nathan Law",
   "b": "Damien Stahl",
   "team": "ACE",
   "n": 6,
   "w": 5,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 1.7,
   "avgExpected": 2.1,
   "aId": "3c81d27f-9e68-439b-a476-f5ac1a54f45a",
   "bId": "45d2cd6f-4816-46b2-8e17-fab766cdb87e"
  },
  {
   "a": "Alyssa Boyle",
   "b": "Zachary Lessner",
   "team": "Bounce Philly",
   "n": 9,
   "w": 5,
   "l": 4,
   "synergy": -0.2,
   "avgActual": 1.2,
   "avgExpected": 1.6,
   "aId": "22123177-1eb2-4285-bc92-f75799e175dd",
   "bId": "2ce5ebef-8079-4871-8d2e-b34988abbaad"
  },
  {
   "a": "Hannah Nussbaum",
   "b": "Nahla Bernhardt",
   "team": "Dill Dinkers Hatboro",
   "n": 10,
   "w": 8,
   "l": 2,
   "synergy": -0.2,
   "avgActual": 3.8,
   "avgExpected": 4.1,
   "aId": "84b7c449-501c-438d-a3eb-ee67cc92fa0e",
   "bId": "9dae8c17-6878-473a-83e9-a43b434f876b"
  },
  {
   "a": "Claire Malone",
   "b": "Keith Shedlock",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.2,
   "avgActual": -1.3,
   "avgExpected": -0.8,
   "aId": "72a5a44f-5c46-49c4-bf9c-6d40e944ee06",
   "bId": "f4b44cd7-fc9a-41a2-b569-cdaf08b0bf26"
  },
  {
   "a": "Arianna Haresign",
   "b": "Rachel Berger",
   "team": "Jersey Devil",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.2,
   "avgActual": 0.2,
   "avgExpected": 0.6,
   "aId": "556f84fc-4f7c-4199-a104-6e906d71605c",
   "bId": "9b7488c5-bc66-41e4-8fa5-873e70c190e3"
  },
  {
   "a": "Shawn Ganow",
   "b": "Tess Fisher",
   "team": "Four Seasons",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.2,
   "avgActual": 2.2,
   "avgExpected": 2.6,
   "aId": "1e340ccb-0e0f-4b6b-b760-d1a723561d04",
   "bId": "661f7bd0-74d3-432b-acc7-da0e3b3e36ea"
  },
  {
   "a": "Chanda Mccoy",
   "b": "Fabricio Gaona",
   "team": "Pickleball Kingdom Watchung",
   "n": 8,
   "w": 3,
   "l": 5,
   "synergy": -0.2,
   "avgActual": -1.5,
   "avgExpected": -1.3,
   "aId": "30cb78cb-f962-40f9-bd02-78d336920431",
   "bId": "ee88d140-1a78-4776-85e0-3f982891576d"
  },
  {
   "a": "Kerrin Maurer",
   "b": "Chris Damato",
   "team": "Pickle House",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.2,
   "avgActual": 1.6,
   "avgExpected": 1.9,
   "aId": "1d63ce3d-20c2-40ae-94ca-e8e6e458004e",
   "bId": "445e89c8-a23c-440c-bd3c-7eab366bdd85"
  },
  {
   "a": "Arianna Haresign",
   "b": "Kylie Lupica",
   "team": "Jersey Devil",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.2,
   "avgActual": -0.2,
   "avgExpected": 0.2,
   "aId": "556f84fc-4f7c-4199-a104-6e906d71605c",
   "bId": "9b4b88bf-1f87-46cd-829a-84b82a424b82"
  },
  {
   "a": "Gautham Bondugula",
   "b": "Daniel Gallegos",
   "team": "Pickleball Kingdom Watchung",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -0.2,
   "avgActual": -4,
   "avgExpected": -3.6,
   "aId": "3da7de8e-f75c-4e90-b63e-f340cc8788a0",
   "bId": "6f9cb35b-f24c-4480-a8b4-86e6ea32f3c2"
  },
  {
   "a": "Julia Sternberg",
   "b": "Rachel Alfano",
   "team": "Bounce Philly",
   "n": 10,
   "w": 6,
   "l": 4,
   "synergy": -0.2,
   "avgActual": 0.1,
   "avgExpected": 0.3,
   "aId": "ccd8a76f-df3a-4ab9-97b6-bae0f860a431",
   "bId": "ce7aca89-06ac-4cd9-8944-a482216ffd58"
  },
  {
   "a": "Allison Tarnoff",
   "b": "Jonah Fliegelman",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.2,
   "avgActual": 3,
   "avgExpected": 3.4,
   "aId": "001bf0ea-f8b1-402f-ab07-88ed85b2b510",
   "bId": "1070bcd5-fdff-4adc-8d03-460a208fe4e8"
  },
  {
   "a": "Rayna Baizman",
   "b": "Lindsey Thoeng",
   "team": "Dill Dinkers Hatboro",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.2,
   "avgActual": 0.4,
   "avgExpected": 0.7,
   "aId": "108620c9-1cbb-4ea0-846c-bc781f1decea",
   "bId": "67977901-2346-49bb-93df-b59d31cb9a30"
  },
  {
   "a": "Drew Von Bargen",
   "b": "Johny Mario",
   "team": "Jersey Devil",
   "n": 8,
   "w": 2,
   "l": 6,
   "synergy": -0.2,
   "avgActual": -2.5,
   "avgExpected": -2.2,
   "aId": "35880e0f-aba0-4a37-85fe-e09b057d63b2",
   "bId": "831c9fae-38c6-4961-8664-634087f5f2f9"
  },
  {
   "a": "Dan Presuto",
   "b": "David Lavy",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": -0.2,
   "avgActual": 3.8,
   "avgExpected": 4.1,
   "aId": "1b9ae752-9cd4-49e8-aac7-136e5742f9ee",
   "bId": "e28e2d63-947f-490f-9f69-14fb6093b505"
  },
  {
   "a": "Tin Wai Kwan",
   "b": "Johanna Wagner",
   "team": "Picklr Fair Lawn",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 3.5,
   "avgExpected": 4,
   "aId": "22fe1980-7ef9-4026-8c76-a39534431c6b",
   "bId": "e447eb0f-dc19-4616-a7f4-b53de776db3b"
  },
  {
   "a": "Lissa Eagles",
   "b": "Sidd Pathare",
   "team": "Pickle House",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -0.2,
   "avgActual": 0.1,
   "avgExpected": 0.4,
   "aId": "9ec39678-a120-45de-b8a5-897b8cf900cd",
   "bId": "a73f249d-c1c9-4516-bc79-e9732581f098"
  },
  {
   "a": "Carly Pfeffer",
   "b": "Jenna Irwin",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.2,
   "avgActual": 1.7,
   "avgExpected": 2.2,
   "aId": "387e74d4-66ee-4a52-a4ac-aae3dbe1d21b",
   "bId": "85e52e3b-5238-4583-8d1a-cc57f8218ef6"
  },
  {
   "a": "Doryan Amato",
   "b": "Fabricio Gaona",
   "team": "Pickleball Kingdom Watchung",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.2,
   "avgActual": -0.7,
   "avgExpected": -0.3,
   "aId": "9d2c8050-1b0b-4f4c-9158-a84190c726e3",
   "bId": "ee88d140-1a78-4776-85e0-3f982891576d"
  },
  {
   "a": "Amanda Ksiezopolski",
   "b": "Ruhi Shah",
   "team": "Monroe",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -1,
   "avgExpected": -0.5,
   "aId": "2138af89-34bc-4ee2-9955-ff16f0997031",
   "bId": "a2d56e71-3895-4316-9e9e-17565fb62295"
  },
  {
   "a": "Lou Frignito",
   "b": "Matthew Kraft",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.3,
   "avgActual": -1.3,
   "avgExpected": -0.5,
   "aId": "1afca308-dca6-4828-946a-0ca6ad1b0c44",
   "bId": "f2cb8ea7-ed55-42cc-be8e-9f8352a330e8"
  },
  {
   "a": "Charlotte Healey",
   "b": "Alexander Tong",
   "team": "Bounce Philly",
   "n": 8,
   "w": 3,
   "l": 5,
   "synergy": -0.3,
   "avgActual": -1.1,
   "avgExpected": -0.7,
   "aId": "bbaf3def-a87b-4537-8701-4f5ae0108b1f",
   "bId": "d8d64dde-4ffb-4c49-aaa6-537b09c9c8d5"
  },
  {
   "a": "Claire Malone",
   "b": "Jessica Pevny",
   "team": "Pickleball Palace",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.3,
   "avgActual": 2.8,
   "avgExpected": 3.3,
   "aId": "72a5a44f-5c46-49c4-bf9c-6d40e944ee06",
   "bId": "f472188b-24d9-4bf7-9f70-746d496f57d4"
  },
  {
   "a": "Courtney Greener",
   "b": "Matthew Matro",
   "team": "Flemington",
   "n": 13,
   "w": 6,
   "l": 7,
   "synergy": -0.3,
   "avgActual": 0.2,
   "avgExpected": 0.6,
   "aId": "0a66ddb6-6771-4641-ad1e-0ed15d96b66d",
   "bId": "7b2e1bed-f387-48de-a028-bdde357bb3af"
  },
  {
   "a": "Lauren Mercado",
   "b": "Courtney Davis",
   "team": "Four Seasons",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.3,
   "avgActual": -4.8,
   "avgExpected": -4.3,
   "aId": "0aa554f3-0eca-4f2d-b3d9-b277406a7435",
   "bId": "422813d6-2920-4a65-a84d-a29b6cefcd54"
  },
  {
   "a": "Matthew Matro",
   "b": "Melissa Dardani",
   "team": "Flemington",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -2,
   "avgExpected": -1.4,
   "aId": "7b2e1bed-f387-48de-a028-bdde357bb3af",
   "bId": "ef423f8a-5c2c-4a12-9f37-b41ff6d6c530"
  },
  {
   "a": "Robbie Oddy",
   "b": "Christine Ferraez",
   "team": "Flemington",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -0.3,
   "avgActual": -2.5,
   "avgExpected": -2.1,
   "aId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6",
   "bId": "ffe0a04b-eb97-4dda-8bc0-0ebe0fd1089e"
  },
  {
   "a": "Megan Harvey",
   "b": "Kathleen Dougherty",
   "team": "Bounce Malvern",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -0.3,
   "avgActual": -2.1,
   "avgExpected": -1.7,
   "aId": "4d576bb5-e9e5-4ad1-a18f-022508c6a161",
   "bId": "c929f42d-6fd4-4034-888e-ad456cda3063"
  },
  {
   "a": "Chris Damato",
   "b": "Yoyo Shen",
   "team": "Pickle House",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 2.3,
   "avgExpected": 2.9,
   "aId": "445e89c8-a23c-440c-bd3c-7eab366bdd85",
   "bId": "9d47a1aa-c44c-4ddd-8953-dc40f79b1016"
  },
  {
   "a": "Kara Infante",
   "b": "Pablo Shin",
   "team": "Picklr Fair Lawn",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -2,
   "avgExpected": -1.5,
   "aId": "06edda3d-3a1f-4010-86fa-8ac767cd7079",
   "bId": "d2130c6d-6552-422e-b93d-c804bc7303a0"
  },
  {
   "a": "Anh Nguyen",
   "b": "Bryan Nardone",
   "team": "Four Seasons",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -5.5,
   "avgExpected": -4.9,
   "aId": "3478a097-ab58-413c-b90e-aef96e00fbfa",
   "bId": "a479d794-d9d0-4620-b322-b7f249f2ae5f"
  },
  {
   "a": "Hector Irizarry",
   "b": "Annemarie Mccartney",
   "team": "ACE",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": -0.3,
   "avgActual": 1.8,
   "avgExpected": 2.2,
   "aId": "a50a69d0-0a8c-4241-b768-846b1591d180",
   "bId": "d08d78db-7d20-4dc2-a37b-41841c4624fd"
  },
  {
   "a": "Shreyas Pani",
   "b": "Claire Gaston",
   "team": "Monroe",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.3,
   "avgActual": 3.3,
   "avgExpected": 4,
   "aId": "3cebd01c-ff32-4544-b6a6-2a68152b2ee5",
   "bId": "7f62f4db-d0cf-4990-a324-63aeb985a840"
  },
  {
   "a": "Lou Frignito",
   "b": "Nick Meale",
   "team": "Bounce Malvern",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 2.8,
   "avgExpected": 3.4,
   "aId": "1afca308-dca6-4828-946a-0ca6ad1b0c44",
   "bId": "ec0bad09-8256-49b3-ae86-3add22dd995f"
  },
  {
   "a": "Kylie Lupica",
   "b": "Tyler Arsenault",
   "team": "Jersey Devil",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.3,
   "avgActual": -1.7,
   "avgExpected": -0.9,
   "aId": "9b4b88bf-1f87-46cd-829a-84b82a424b82",
   "bId": "e76d2d63-f7dc-40e7-aca2-d9b3aecf4d3e"
  },
  {
   "a": "Chaille Godinez",
   "b": "Steven Maisonet",
   "team": "ACE",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.3,
   "avgActual": -3.3,
   "avgExpected": -2.6,
   "aId": "3cb88b7e-d8f2-45c6-b928-202bd6f5d4e6",
   "bId": "d1bebcc0-9427-45af-9d16-cc023b5dd737"
  },
  {
   "a": "Grant Hanak",
   "b": "Megan Harvey",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.3,
   "avgActual": -1.7,
   "avgExpected": -1.2,
   "aId": "44a0a4da-e7cb-4037-9018-97544dfce248",
   "bId": "4d576bb5-e9e5-4ad1-a18f-022508c6a161"
  },
  {
   "a": "Anita Buggins",
   "b": "Hector Irizarry",
   "team": "ACE",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.3,
   "avgActual": 1,
   "avgExpected": 1.7,
   "aId": "2ea90a18-1ef3-4ade-a855-2a3fd178abd7",
   "bId": "a50a69d0-0a8c-4241-b768-846b1591d180"
  },
  {
   "a": "Robyn Himelstein",
   "b": "Alex Abad",
   "team": "Bounce Philly",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -2.5,
   "avgExpected": -1.7,
   "aId": "950366ff-1da8-4617-b0d4-0ef68aefd473",
   "bId": "bc881ebc-7a42-43be-b1b2-9c29c59a4132"
  },
  {
   "a": "Zachary Lessner",
   "b": "Alex Abad",
   "team": "Bounce Philly",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -0.6,
   "avgExpected": 0.1,
   "aId": "2ce5ebef-8079-4871-8d2e-b34988abbaad",
   "bId": "bc881ebc-7a42-43be-b1b2-9c29c59a4132"
  },
  {
   "a": "Suzi Battison",
   "b": "Thomas Connolly",
   "team": "Flemington",
   "n": 10,
   "w": 6,
   "l": 4,
   "synergy": -0.4,
   "avgActual": 0.1,
   "avgExpected": 0.6,
   "aId": "40579892-d9bf-4d1d-9417-5830d5d45093",
   "bId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3"
  },
  {
   "a": "Shawn Ganow",
   "b": "Zyril Carilo",
   "team": "Four Seasons",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.4,
   "avgActual": -3.7,
   "avgExpected": -2.8,
   "aId": "1e340ccb-0e0f-4b6b-b760-d1a723561d04",
   "bId": "b4efc48a-f302-4d27-8c35-0dac1e68eec8"
  },
  {
   "a": "Allison Tarnoff",
   "b": "Ozair Ibrahim",
   "team": "Dill Dinkers Hatboro",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.4,
   "avgActual": 4,
   "avgExpected": 4.6,
   "aId": "001bf0ea-f8b1-402f-ab07-88ed85b2b510",
   "bId": "c6fc34a8-e441-4850-b37c-c29b35563989"
  },
  {
   "a": "Alex Boory",
   "b": "Ashwin Korde",
   "team": "Bounce Philly",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -3.5,
   "avgExpected": -2.7,
   "aId": "897f1edf-63f3-4eec-bcf5-d5a1bf0be859",
   "bId": "f9f521ee-5f27-4f61-b4e0-4e0b9ad09aee"
  },
  {
   "a": "Annemarie Mccartney",
   "b": "Manny Lai",
   "team": "ACE",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.4,
   "avgActual": 0,
   "avgExpected": 0.7,
   "aId": "d08d78db-7d20-4dc2-a37b-41841c4624fd",
   "bId": "f2a53ee2-a602-4e58-8326-6d0624af34af"
  },
  {
   "a": "Claire Gaston",
   "b": "Jacob Yandoli",
   "team": "Monroe",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.4,
   "avgActual": -0.2,
   "avgExpected": 0.6,
   "aId": "7f62f4db-d0cf-4990-a324-63aeb985a840",
   "bId": "be9bc229-2d57-4236-a951-11a2f91a09a3"
  },
  {
   "a": "Zachary Lessner",
   "b": "Ashwin Korde",
   "team": "Bounce Philly",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -0.4,
   "avgActual": -4.5,
   "avgExpected": -3.7,
   "aId": "2ce5ebef-8079-4871-8d2e-b34988abbaad",
   "bId": "f9f521ee-5f27-4f61-b4e0-4e0b9ad09aee"
  },
  {
   "a": "Michelle Quach",
   "b": "Tyler Arsenault",
   "team": "Jersey Devil",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -2.5,
   "avgExpected": -1.7,
   "aId": "5f0dcbe9-bb0e-496d-99d2-06f01ff2c77b",
   "bId": "e76d2d63-f7dc-40e7-aca2-d9b3aecf4d3e"
  },
  {
   "a": "Shreyas Pani",
   "b": "Richa Shah",
   "team": "Monroe",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -0.5,
   "avgExpected": 0.1,
   "aId": "3cebd01c-ff32-4544-b6a6-2a68152b2ee5",
   "bId": "6b80047c-ca16-4506-a2a4-ed894dc0c37f"
  },
  {
   "a": "Justin Bautista",
   "b": "Courtney Davis",
   "team": "Four Seasons",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -5,
   "avgExpected": -4.2,
   "aId": "27660961-6245-4b09-aafe-359ca3205797",
   "bId": "422813d6-2920-4a65-a84d-a29b6cefcd54"
  },
  {
   "a": "Lauren Mercado",
   "b": "Royce Chan",
   "team": "Four Seasons",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -3,
   "avgExpected": -2.1,
   "aId": "0aa554f3-0eca-4f2d-b3d9-b277406a7435",
   "bId": "68274c39-0102-4554-978e-1aa50a0b3fba"
  },
  {
   "a": "Thomas Connolly",
   "b": "Christine Ferraez",
   "team": "Flemington",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.4,
   "avgActual": -5.3,
   "avgExpected": -4.4,
   "aId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3",
   "bId": "ffe0a04b-eb97-4dda-8bc0-0ebe0fd1089e"
  },
  {
   "a": "Beatriz Lopez Albarracin",
   "b": "Alvaro Regalado",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.4,
   "avgActual": -1,
   "avgExpected": -0.2,
   "aId": "73603f18-0adb-48db-8375-1a6deff6ddbb",
   "bId": "9e056bf3-21d0-43e3-b7e5-e245f8d0b154"
  },
  {
   "a": "Stephen Mcnamara",
   "b": "Katherine Cho",
   "team": "Picklr Fair Lawn",
   "n": 4,
   "w": 4,
   "l": 0,
   "synergy": -0.4,
   "avgActual": 3.5,
   "avgExpected": 4.3,
   "aId": "245e949d-15e7-411e-9751-e19ca709f2cb",
   "bId": "925da4ca-a96c-4e48-81be-45bed2b8cfd5"
  },
  {
   "a": "Allison Tarnoff",
   "b": "Andrew Wakefield",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.4,
   "avgActual": 4,
   "avgExpected": 5,
   "aId": "001bf0ea-f8b1-402f-ab07-88ed85b2b510",
   "bId": "5f429a7f-18c6-49e3-a804-6aa2a930f09c"
  },
  {
   "a": "Jonah Fliegelman",
   "b": "Ozair Ibrahim",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.4,
   "avgActual": 2.3,
   "avgExpected": 3.2,
   "aId": "1070bcd5-fdff-4adc-8d03-460a208fe4e8",
   "bId": "c6fc34a8-e441-4850-b37c-c29b35563989"
  },
  {
   "a": "Matthew Chen",
   "b": "Tyler Arsenault",
   "team": "Jersey Devil",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.4,
   "avgActual": -3,
   "avgExpected": -2,
   "aId": "68e9ac74-5119-4dbb-8503-72bcdbade183",
   "bId": "e76d2d63-f7dc-40e7-aca2-d9b3aecf4d3e"
  },
  {
   "a": "Maanav Shah",
   "b": "Chris Bucaro",
   "team": "Monroe",
   "n": 11,
   "w": 8,
   "l": 3,
   "synergy": -0.5,
   "avgActual": 2.6,
   "avgExpected": 3.4,
   "aId": "0a1270b0-26f6-4328-85bc-bf3f329a746e",
   "bId": "0e43724a-794d-4218-9da4-d0e83d35ffb2"
  },
  {
   "a": "Kishan Shah",
   "b": "Yoyo Shen",
   "team": "Pickle House",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.5,
   "avgActual": 3.5,
   "avgExpected": 4.3,
   "aId": "8ca1f741-6a67-4332-9ca7-082671211098",
   "bId": "9d47a1aa-c44c-4ddd-8953-dc40f79b1016"
  },
  {
   "a": "Hector Irizarry",
   "b": "Steven Maisonet",
   "team": "ACE",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.5,
   "avgActual": -1.6,
   "avgExpected": -0.6,
   "aId": "a50a69d0-0a8c-4241-b768-846b1591d180",
   "bId": "d1bebcc0-9427-45af-9d16-cc023b5dd737"
  },
  {
   "a": "Alex Abad",
   "b": "Dustin Rabinowitz",
   "team": "Bounce Philly",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -1.2,
   "avgExpected": -0.2,
   "aId": "bc881ebc-7a42-43be-b1b2-9c29c59a4132",
   "bId": "d23839c0-334b-4423-9305-0c6281523d5d"
  },
  {
   "a": "Drew Von Bargen",
   "b": "Matthew Chen",
   "team": "Jersey Devil",
   "n": 9,
   "w": 4,
   "l": 5,
   "synergy": -0.5,
   "avgActual": -0.2,
   "avgExpected": 0.5,
   "aId": "35880e0f-aba0-4a37-85fe-e09b057d63b2",
   "bId": "68e9ac74-5119-4dbb-8503-72bcdbade183"
  },
  {
   "a": "Anthony Ursino",
   "b": "Eric Lin",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.5,
   "avgActual": -3,
   "avgExpected": -1.9,
   "aId": "1406ff1f-3597-4128-a629-7dfd1dfe1323",
   "bId": "4ce1c715-b187-47c5-b6dc-d079f802499d"
  },
  {
   "a": "Melissa Xu",
   "b": "Bryan Nardone",
   "team": "Four Seasons",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -0.5,
   "avgActual": -7.4,
   "avgExpected": -6.4,
   "aId": "a1be2c26-76d3-414d-89fd-8334435b97c2",
   "bId": "a479d794-d9d0-4620-b322-b7f249f2ae5f"
  },
  {
   "a": "Chris Damato",
   "b": "Lissa Eagles",
   "team": "Pickle House",
   "n": 9,
   "w": 6,
   "l": 3,
   "synergy": -0.5,
   "avgActual": 2.2,
   "avgExpected": 2.9,
   "aId": "445e89c8-a23c-440c-bd3c-7eab366bdd85",
   "bId": "9ec39678-a120-45de-b8a5-897b8cf900cd"
  },
  {
   "a": "Eric Lin",
   "b": "Morgan Fishman",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -0.7,
   "avgExpected": 0.6,
   "aId": "4ce1c715-b187-47c5-b6dc-d079f802499d",
   "bId": "5ccee070-0af8-4363-9ddb-6ce8ebce098f"
  },
  {
   "a": "Jenna Irwin",
   "b": "Jessica Pevny",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -1,
   "avgExpected": 0.1,
   "aId": "85e52e3b-5238-4583-8d1a-cc57f8218ef6",
   "bId": "f472188b-24d9-4bf7-9f70-746d496f57d4"
  },
  {
   "a": "Daniel Kulik",
   "b": "Jenna Irwin",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.5,
   "avgActual": 0.8,
   "avgExpected": 1.8,
   "aId": "35d7ef89-3505-481a-8036-8c5d7954f9a8",
   "bId": "85e52e3b-5238-4583-8d1a-cc57f8218ef6"
  },
  {
   "a": "Jonah Fliegelman",
   "b": "Andrew Wakefield",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.5,
   "avgActual": 3.7,
   "avgExpected": 4.9,
   "aId": "1070bcd5-fdff-4adc-8d03-460a208fe4e8",
   "bId": "5f429a7f-18c6-49e3-a804-6aa2a930f09c"
  },
  {
   "a": "Johny Mario",
   "b": "Kylie Lupica",
   "team": "Jersey Devil",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -0.5,
   "avgActual": -5.4,
   "avgExpected": -4.6,
   "aId": "831c9fae-38c6-4961-8664-634087f5f2f9",
   "bId": "9b4b88bf-1f87-46cd-829a-84b82a424b82"
  },
  {
   "a": "Sarah Kline",
   "b": "Julia Plein",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -3.2,
   "avgExpected": -2.3,
   "aId": "b122f262-f81d-4fb2-9f11-c473d18a4260",
   "bId": "f3d99274-413c-4720-9c8d-1a71f9b2e717"
  },
  {
   "a": "Stephen Mcnamara",
   "b": "Phil Chang",
   "team": "Picklr Fair Lawn",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.5,
   "avgActual": 2,
   "avgExpected": 3.1,
   "aId": "245e949d-15e7-411e-9751-e19ca709f2cb",
   "bId": "a31d5bae-fddc-44ca-9782-f3eb86667058"
  },
  {
   "a": "Michaela Pierznik",
   "b": "Tyler Arsenault",
   "team": "Jersey Devil",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -0.4,
   "avgExpected": 0.4,
   "aId": "c885c4ae-2685-4fc8-9b35-40cf9f465915",
   "bId": "e76d2d63-f7dc-40e7-aca2-d9b3aecf4d3e"
  },
  {
   "a": "Kenoa Tio",
   "b": "Lindsey Thoeng",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.5,
   "avgActual": -1.3,
   "avgExpected": -0.2,
   "aId": "10e9980e-34bf-43ea-b246-3280bca79efb",
   "bId": "67977901-2346-49bb-93df-b59d31cb9a30"
  },
  {
   "a": "Andrew Bernard",
   "b": "Jansen Tubo",
   "team": "Picklr Fair Lawn",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.5,
   "avgActual": -7,
   "avgExpected": -5.8,
   "aId": "8079e74f-c537-4e42-9590-e8d60f10ba3d",
   "bId": "8b8bcad5-6324-48d9-b225-f6739eda8cc0"
  },
  {
   "a": "Chris Bucaro",
   "b": "Dilan Shah",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.5,
   "avgActual": -3.7,
   "avgExpected": -2.5,
   "aId": "0e43724a-794d-4218-9da4-d0e83d35ffb2",
   "bId": "91d23f87-e0fc-4448-890e-c3abd96c70b4"
  },
  {
   "a": "Dylan Unkert",
   "b": "Taylor Hartman",
   "team": "Pickle House",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -1,
   "avgExpected": 0.2,
   "aId": "35415e5c-19db-4389-9839-b63d7e09851f",
   "bId": "3bf2f55b-b253-4d2a-b1b9-d5953ef1b8ec"
  },
  {
   "a": "Arianna Haresign",
   "b": "Shelah Wallace",
   "team": "Jersey Devil",
   "n": 11,
   "w": 6,
   "l": 5,
   "synergy": -0.6,
   "avgActual": 2.1,
   "avgExpected": 2.9,
   "aId": "556f84fc-4f7c-4199-a104-6e906d71605c",
   "bId": "fa519fb1-87ca-4a7b-9265-4aba9807929f"
  },
  {
   "a": "Tess Fisher",
   "b": "Royce Chan",
   "team": "Four Seasons",
   "n": 10,
   "w": 7,
   "l": 3,
   "synergy": -0.6,
   "avgActual": 2.1,
   "avgExpected": 2.9,
   "aId": "661f7bd0-74d3-432b-acc7-da0e3b3e36ea",
   "bId": "68274c39-0102-4554-978e-1aa50a0b3fba"
  },
  {
   "a": "Chad Durkin",
   "b": "Phil Chang",
   "team": "Picklr Fair Lawn",
   "n": 10,
   "w": 5,
   "l": 5,
   "synergy": -0.6,
   "avgActual": 2,
   "avgExpected": 2.8,
   "aId": "54ed1c79-aaa0-486d-851b-d5a4db375b94",
   "bId": "a31d5bae-fddc-44ca-9782-f3eb86667058"
  },
  {
   "a": "James Cannizzaro",
   "b": "Will Kayal",
   "team": "Pickleball Kingdom Watchung",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.6,
   "avgActual": 0.5,
   "avgExpected": 1.5,
   "aId": "9f2987f3-a389-4d47-9dcd-e619d94cbc18",
   "bId": "f98a262e-9080-4a48-9cd9-3fe5db979305"
  },
  {
   "a": "Justin Bautista",
   "b": "Royce Chan",
   "team": "Four Seasons",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -4.2,
   "avgExpected": -3,
   "aId": "27660961-6245-4b09-aafe-359ca3205797",
   "bId": "68274c39-0102-4554-978e-1aa50a0b3fba"
  },
  {
   "a": "Ashley Georgevich",
   "b": "Jenna Irwin",
   "team": "Pickleball Palace",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -0.2,
   "avgExpected": 0.8,
   "aId": "6953916c-867d-42fe-89ad-444aee6d40e8",
   "bId": "85e52e3b-5238-4583-8d1a-cc57f8218ef6"
  },
  {
   "a": "Matthew Chen",
   "b": "Shelah Wallace",
   "team": "Jersey Devil",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.6,
   "avgActual": 2.3,
   "avgExpected": 3.6,
   "aId": "68e9ac74-5119-4dbb-8503-72bcdbade183",
   "bId": "fa519fb1-87ca-4a7b-9265-4aba9807929f"
  },
  {
   "a": "Lynda Tomaru",
   "b": "Aimee Castellano",
   "team": "Flemington",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.6,
   "avgActual": -4.2,
   "avgExpected": -2.9,
   "aId": "2b001a36-d13c-42fa-ae50-c9cc2f1aeb4e",
   "bId": "e76985fb-efd1-4180-a340-e4f36abbc8b4"
  },
  {
   "a": "Jaco De Waal",
   "b": "Emily Babinsky",
   "team": "Pickle House",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.6,
   "avgActual": -0.7,
   "avgExpected": 0.7,
   "aId": "19407a76-031d-4be3-8ed8-ba88cccdfdd3",
   "bId": "d0e2c1ea-529d-4364-b521-cb205ecdded3"
  },
  {
   "a": "Helen Liu",
   "b": "Claire Gaston",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -3.3,
   "avgExpected": -2,
   "aId": "53cc1790-d8b9-4b64-a8b3-6e10b2eeb131",
   "bId": "7f62f4db-d0cf-4990-a324-63aeb985a840"
  },
  {
   "a": "Tim Dowd",
   "b": "Aimee Castellano",
   "team": "Flemington",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.6,
   "avgActual": 1.3,
   "avgExpected": 2.6,
   "aId": "b7555b30-f1b5-4d44-9eff-dffd3e1b1b28",
   "bId": "e76985fb-efd1-4180-a340-e4f36abbc8b4"
  },
  {
   "a": "Alyssa Tartaglia",
   "b": "Ozair Ibrahim",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.6,
   "avgActual": 2.7,
   "avgExpected": 4,
   "aId": "881ed39f-f9fc-4e9d-8ed3-d13d9ebc7b13",
   "bId": "c6fc34a8-e441-4850-b37c-c29b35563989"
  },
  {
   "a": "Eric Kutzin",
   "b": "Keith Shedlock",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.6,
   "avgActual": -2.3,
   "avgExpected": -1,
   "aId": "c62728d5-ec2b-4ce7-b0e9-83a34fa325b1",
   "bId": "f4b44cd7-fc9a-41a2-b569-cdaf08b0bf26"
  },
  {
   "a": "Taylor Hartman",
   "b": "Michael Li",
   "team": "Pickle House",
   "n": 11,
   "w": 5,
   "l": 6,
   "synergy": -0.7,
   "avgActual": 0.1,
   "avgExpected": 1.1,
   "aId": "3bf2f55b-b253-4d2a-b1b9-d5953ef1b8ec",
   "bId": "dc81629b-4ff7-45c4-b38e-b3b836bc0769"
  },
  {
   "a": "Zachary Lessner",
   "b": "Bruno Casino",
   "team": "Bounce Philly",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.7,
   "avgActual": 2,
   "avgExpected": 3.7,
   "aId": "2ce5ebef-8079-4871-8d2e-b34988abbaad",
   "bId": "d195dff9-7f38-402c-8164-44640f89c3fa"
  },
  {
   "a": "Christian Fechter",
   "b": "Meghan Mediratta",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.7,
   "avgActual": -2,
   "avgExpected": -0.3,
   "aId": "9a973334-7467-4873-9aa6-ca3a597e8caa",
   "bId": "abc80b43-6769-4254-ae9a-b4b63b06de1d"
  },
  {
   "a": "Zoe Ousouljoglou",
   "b": "Chanda Mccoy",
   "team": "Pickleball Kingdom Watchung",
   "n": 8,
   "w": 2,
   "l": 6,
   "synergy": -0.7,
   "avgActual": -2.4,
   "avgExpected": -1.4,
   "aId": "269fe355-d2eb-41b8-9e92-a1438aec65e3",
   "bId": "30cb78cb-f962-40f9-bd02-78d336920431"
  },
  {
   "a": "Daniel Kulik",
   "b": "Claire Malone",
   "team": "Pickleball Palace",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -0.7,
   "avgActual": 2,
   "avgExpected": 3.1,
   "aId": "35d7ef89-3505-481a-8036-8c5d7954f9a8",
   "bId": "72a5a44f-5c46-49c4-bf9c-6d40e944ee06"
  },
  {
   "a": "Anthony Ursino",
   "b": "Cameron Barraco",
   "team": "Monroe",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -5,
   "avgExpected": -3.3,
   "aId": "1406ff1f-3597-4128-a629-7dfd1dfe1323",
   "bId": "ebcb4134-e369-436b-bc38-2cdaadb381c6"
  },
  {
   "a": "Daniel Gallegos",
   "b": "Fabricio Gaona",
   "team": "Pickleball Kingdom Watchung",
   "n": 6,
   "w": 0,
   "l": 6,
   "synergy": -0.7,
   "avgActual": -5.5,
   "avgExpected": -4.3,
   "aId": "6f9cb35b-f24c-4480-a8b4-86e6ea32f3c2",
   "bId": "ee88d140-1a78-4776-85e0-3f982891576d"
  },
  {
   "a": "Eric Lin",
   "b": "Ruhi Shah",
   "team": "Monroe",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.7,
   "avgActual": 1.3,
   "avgExpected": 2.9,
   "aId": "4ce1c715-b187-47c5-b6dc-d079f802499d",
   "bId": "a2d56e71-3895-4316-9e9e-17565fb62295"
  },
  {
   "a": "Andrew Wakefield",
   "b": "Dylan Ashbach",
   "team": "Dill Dinkers Hatboro",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -0.7,
   "avgActual": 2.8,
   "avgExpected": 4,
   "aId": "5f429a7f-18c6-49e3-a804-6aa2a930f09c",
   "bId": "d9f11069-342b-4bf7-9a7a-cbeece0396be"
  },
  {
   "a": "Anthony Ursino",
   "b": "Claire Gaston",
   "team": "Monroe",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -0.7,
   "avgExpected": 0.7,
   "aId": "1406ff1f-3597-4128-a629-7dfd1dfe1323",
   "bId": "7f62f4db-d0cf-4990-a324-63aeb985a840"
  },
  {
   "a": "Ruhi Shah",
   "b": "Chris Frangipane",
   "team": "Monroe",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.7,
   "avgActual": -0.8,
   "avgExpected": 0.5,
   "aId": "a2d56e71-3895-4316-9e9e-17565fb62295",
   "bId": "e8bb81fd-869a-459d-8108-b9ac6bc1b84d"
  },
  {
   "a": "Rayna Baizman",
   "b": "Nahla Bernhardt",
   "team": "Dill Dinkers Hatboro",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -0.7,
   "avgActual": -1.2,
   "avgExpected": 0.1,
   "aId": "108620c9-1cbb-4ea0-846c-bc781f1decea",
   "bId": "9dae8c17-6878-473a-83e9-a43b434f876b"
  },
  {
   "a": "Damien Stahl",
   "b": "Stacy Walkowitz",
   "team": "ACE",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -2.2,
   "avgExpected": -0.7,
   "aId": "45d2cd6f-4816-46b2-8e17-fab766cdb87e",
   "bId": "a19b179a-6a16-43a7-b2af-8d6e8d1a1205"
  },
  {
   "a": "Courtney Greener",
   "b": "Melissa Dardani",
   "team": "Flemington",
   "n": 8,
   "w": 1,
   "l": 7,
   "synergy": -0.8,
   "avgActual": -3.6,
   "avgExpected": -2.4,
   "aId": "0a66ddb6-6771-4641-ad1e-0ed15d96b66d",
   "bId": "ef423f8a-5c2c-4a12-9f37-b41ff6d6c530"
  },
  {
   "a": "Matthew Matro",
   "b": "Ross Switkes",
   "team": "Flemington",
   "n": 16,
   "w": 6,
   "l": 10,
   "synergy": -0.8,
   "avgActual": -0.1,
   "avgExpected": 0.9,
   "aId": "7b2e1bed-f387-48de-a028-bdde357bb3af",
   "bId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b"
  },
  {
   "a": "Courtney Greener",
   "b": "Suzi Battison",
   "team": "Flemington",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -0.8,
   "avgActual": -0.6,
   "avgExpected": 0.7,
   "aId": "0a66ddb6-6771-4641-ad1e-0ed15d96b66d",
   "bId": "40579892-d9bf-4d1d-9417-5830d5d45093"
  },
  {
   "a": "Johny Mario",
   "b": "Rachel Berger",
   "team": "Jersey Devil",
   "n": 9,
   "w": 3,
   "l": 6,
   "synergy": -0.8,
   "avgActual": -3.2,
   "avgExpected": -2,
   "aId": "831c9fae-38c6-4961-8664-634087f5f2f9",
   "bId": "9b7488c5-bc66-41e4-8fa5-873e70c190e3"
  },
  {
   "a": "Matthew Chen",
   "b": "Johny Mario",
   "team": "Jersey Devil",
   "n": 9,
   "w": 4,
   "l": 5,
   "synergy": -0.8,
   "avgActual": -0.8,
   "avgExpected": 0.4,
   "aId": "68e9ac74-5119-4dbb-8503-72bcdbade183",
   "bId": "831c9fae-38c6-4961-8664-634087f5f2f9"
  },
  {
   "a": "Tin Wai Kwan",
   "b": "Andrew Bernard",
   "team": "Picklr Fair Lawn",
   "n": 8,
   "w": 1,
   "l": 7,
   "synergy": -0.8,
   "avgActual": -3,
   "avgExpected": -1.8,
   "aId": "22fe1980-7ef9-4026-8c76-a39534431c6b",
   "bId": "8079e74f-c537-4e42-9590-e8d60f10ba3d"
  },
  {
   "a": "Kara Infante",
   "b": "Johanna Wagner",
   "team": "Picklr Fair Lawn",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.8,
   "avgActual": -1,
   "avgExpected": 0.5,
   "aId": "06edda3d-3a1f-4010-86fa-8ac767cd7079",
   "bId": "e447eb0f-dc19-4616-a7f4-b53de776db3b"
  },
  {
   "a": "Alyssa Tartaglia",
   "b": "Nahla Bernhardt",
   "team": "Dill Dinkers Hatboro",
   "n": 8,
   "w": 5,
   "l": 3,
   "synergy": -0.8,
   "avgActual": 1.8,
   "avgExpected": 2.9,
   "aId": "881ed39f-f9fc-4e9d-8ed3-d13d9ebc7b13",
   "bId": "9dae8c17-6878-473a-83e9-a43b434f876b"
  },
  {
   "a": "Casey Jannetta",
   "b": "Matthew Kraft",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -7.7,
   "avgExpected": -5.9,
   "aId": "d458764e-2d62-4817-a96e-9006fead6457",
   "bId": "f2cb8ea7-ed55-42cc-be8e-9f8352a330e8"
  },
  {
   "a": "Clayton Schmucker",
   "b": "Kaylyn Swankoski",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 3,
   "l": 0,
   "synergy": -0.8,
   "avgActual": 4,
   "avgExpected": 5.9,
   "aId": "0be72348-4a00-413e-bf40-df6824c3cca3",
   "bId": "72949bef-7cab-4942-ab45-e5203024a8d5"
  },
  {
   "a": "Kerrin Maurer",
   "b": "Emily Babinsky",
   "team": "Pickle House",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.8,
   "avgActual": 0,
   "avgExpected": 1.7,
   "aId": "1d63ce3d-20c2-40ae-94ca-e8e6e458004e",
   "bId": "d0e2c1ea-529d-4364-b521-cb205ecdded3"
  },
  {
   "a": "Kerrin Maurer",
   "b": "Yoyo Shen",
   "team": "Pickle House",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.8,
   "avgActual": 2,
   "avgExpected": 3.8,
   "aId": "1d63ce3d-20c2-40ae-94ca-e8e6e458004e",
   "bId": "9d47a1aa-c44c-4ddd-8953-dc40f79b1016"
  },
  {
   "a": "Morgan Fishman",
   "b": "Ruhi Shah",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.8,
   "avgActual": -1.3,
   "avgExpected": 0.6,
   "aId": "5ccee070-0af8-4363-9ddb-6ce8ebce098f",
   "bId": "a2d56e71-3895-4316-9e9e-17565fb62295"
  },
  {
   "a": "Jacob Yandoli",
   "b": "Cameron Barraco",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.8,
   "avgActual": -2.7,
   "avgExpected": -0.7,
   "aId": "be9bc229-2d57-4236-a951-11a2f91a09a3",
   "bId": "ebcb4134-e369-436b-bc38-2cdaadb381c6"
  },
  {
   "a": "Mark Kilimnik",
   "b": "Alexander Tong",
   "team": "Bounce Philly",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.8,
   "avgActual": 0,
   "avgExpected": 1.6,
   "aId": "d6c15f91-4cc9-4612-8ec3-8f4ebd4e0cc1",
   "bId": "d8d64dde-4ffb-4c49-aaa6-537b09c9c8d5"
  },
  {
   "a": "Rayna Baizman",
   "b": "Kenoa Tio",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -0.8,
   "avgActual": 0,
   "avgExpected": 1.8,
   "aId": "108620c9-1cbb-4ea0-846c-bc781f1decea",
   "bId": "10e9980e-34bf-43ea-b246-3280bca79efb"
  },
  {
   "a": "Lou Frignito",
   "b": "Grant Hanak",
   "team": "Bounce Malvern",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -0.8,
   "avgActual": -0.3,
   "avgExpected": 0.9,
   "aId": "1afca308-dca6-4828-946a-0ca6ad1b0c44",
   "bId": "44a0a4da-e7cb-4037-9018-97544dfce248"
  },
  {
   "a": "Nick Meale",
   "b": "Nam Barsh",
   "team": "Bounce Malvern",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -0.2,
   "avgExpected": 1.2,
   "aId": "ec0bad09-8256-49b3-ae86-3add22dd995f",
   "bId": "fa43af77-3cd1-4e61-a8dc-bd714b65d517"
  },
  {
   "a": "Pablo Shin",
   "b": "Aya Haruyama",
   "team": "Picklr Fair Lawn",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -4.7,
   "avgExpected": -3.2,
   "aId": "d2130c6d-6552-422e-b93d-c804bc7303a0",
   "bId": "d2ef2b1f-9f63-4542-8b66-c6ef8ca0fdc3"
  },
  {
   "a": "Susan Ackley",
   "b": "Matthew Matro",
   "team": "Flemington",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -0.8,
   "avgActual": -3.7,
   "avgExpected": -2.1,
   "aId": "07a0e948-6308-4920-a6a8-1d5945552ecb",
   "bId": "7b2e1bed-f387-48de-a028-bdde357bb3af"
  },
  {
   "a": "Rachel Alfano",
   "b": "Alexander Tong",
   "team": "Bounce Philly",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.8,
   "avgActual": 1.5,
   "avgExpected": 3.1,
   "aId": "ce7aca89-06ac-4cd9-8944-a482216ffd58",
   "bId": "d8d64dde-4ffb-4c49-aaa6-537b09c9c8d5"
  },
  {
   "a": "Eric Kutzin",
   "b": "Jessica Pevny",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.8,
   "avgActual": -3.3,
   "avgExpected": -1.4,
   "aId": "c62728d5-ec2b-4ce7-b0e9-83a34fa325b1",
   "bId": "f472188b-24d9-4bf7-9f70-746d496f57d4"
  },
  {
   "a": "Amanda Ksiezopolski",
   "b": "Igor Silva",
   "team": "Monroe",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -6.3,
   "avgExpected": -4.2,
   "aId": "2138af89-34bc-4ee2-9955-ff16f0997031",
   "bId": "5afe23db-84a2-4062-a1da-ab6c834b0447"
  },
  {
   "a": "Taylor Hartman",
   "b": "Emily Babinsky",
   "team": "Pickle House",
   "n": 7,
   "w": 4,
   "l": 3,
   "synergy": -0.9,
   "avgActual": 0.6,
   "avgExpected": 2,
   "aId": "3bf2f55b-b253-4d2a-b1b9-d5953ef1b8ec",
   "bId": "d0e2c1ea-529d-4364-b521-cb205ecdded3"
  },
  {
   "a": "Jennifer Sanchez",
   "b": "Manny Lai",
   "team": "ACE",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -2.3,
   "avgExpected": -0.8,
   "aId": "061121d0-5d0a-4c01-9d8e-dced99d6d82d",
   "bId": "f2a53ee2-a602-4e58-8326-6d0624af34af"
  },
  {
   "a": "Susan Ackley",
   "b": "Lynda Tomaru",
   "team": "Flemington",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -0.9,
   "avgActual": -3.7,
   "avgExpected": -2.1,
   "aId": "07a0e948-6308-4920-a6a8-1d5945552ecb",
   "bId": "2b001a36-d13c-42fa-ae50-c9cc2f1aeb4e"
  },
  {
   "a": "Patrick Ceccacci",
   "b": "David Lavy",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.9,
   "avgActual": -0.5,
   "avgExpected": 1.3,
   "aId": "a291ed5b-4a4f-4402-93d0-f4d78e790f2c",
   "bId": "e28e2d63-947f-490f-9f69-14fb6093b505"
  },
  {
   "a": "Roshi Desilva",
   "b": "Zyril Carilo",
   "team": "Four Seasons",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -3,
   "avgExpected": -0.9,
   "aId": "002c6f87-6787-41ea-a2a0-c0fcecc8f6c7",
   "bId": "b4efc48a-f302-4d27-8c35-0dac1e68eec8"
  },
  {
   "a": "Kara Infante",
   "b": "Rishina Deleon",
   "team": "Picklr Fair Lawn",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -0.9,
   "avgActual": -2.7,
   "avgExpected": -1,
   "aId": "06edda3d-3a1f-4010-86fa-8ac767cd7079",
   "bId": "5a3bb8ae-f9db-448d-b10b-b562e9d3df8a"
  },
  {
   "a": "Chris Bucaro",
   "b": "Shreyas Pani",
   "team": "Monroe",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -0.9,
   "avgActual": 1.8,
   "avgExpected": 3.5,
   "aId": "0e43724a-794d-4218-9da4-d0e83d35ffb2",
   "bId": "3cebd01c-ff32-4544-b6a6-2a68152b2ee5"
  },
  {
   "a": "Robyn Himelstein",
   "b": "Charlotte Healey",
   "team": "Bounce Philly",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -2.8,
   "avgExpected": -1.2,
   "aId": "950366ff-1da8-4617-b0d4-0ef68aefd473",
   "bId": "bbaf3def-a87b-4537-8701-4f5ae0108b1f"
  },
  {
   "a": "Pearly Leung",
   "b": "Aya Haruyama",
   "team": "Picklr Fair Lawn",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.9,
   "avgActual": -2.7,
   "avgExpected": -0.5,
   "aId": "581070ec-7106-4558-bc86-4df0675682cb",
   "bId": "d2ef2b1f-9f63-4542-8b66-c6ef8ca0fdc3"
  },
  {
   "a": "Ashley Georgevich",
   "b": "Jessica Hendry",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.9,
   "avgActual": 1.7,
   "avgExpected": 3.8,
   "aId": "6953916c-867d-42fe-89ad-444aee6d40e8",
   "bId": "d8d64088-d1c4-4e85-a742-9ebe70839fe3"
  },
  {
   "a": "James Chau",
   "b": "Zyril Carilo",
   "team": "Four Seasons",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -9.7,
   "avgExpected": -7.5,
   "aId": "6cfba5c8-d2dd-4203-aca2-b9827dd20939",
   "bId": "b4efc48a-f302-4d27-8c35-0dac1e68eec8"
  },
  {
   "a": "Zachary Lessner",
   "b": "Mark Kilimnik",
   "team": "Bounce Philly",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -0.9,
   "avgActual": -3.2,
   "avgExpected": -1.5,
   "aId": "2ce5ebef-8079-4871-8d2e-b34988abbaad",
   "bId": "d6c15f91-4cc9-4612-8ec3-8f4ebd4e0cc1"
  },
  {
   "a": "Katherine Maruyama",
   "b": "Nam Barsh",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -0.9,
   "avgActual": -4.7,
   "avgExpected": -2.6,
   "aId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a",
   "bId": "fa43af77-3cd1-4e61-a8dc-bd714b65d517"
  },
  {
   "a": "Rayna Baizman",
   "b": "Kaylyn Swankoski",
   "team": "Dill Dinkers Hatboro",
   "n": 13,
   "w": 7,
   "l": 6,
   "synergy": -1,
   "avgActual": 1.1,
   "avgExpected": 2.4,
   "aId": "108620c9-1cbb-4ea0-846c-bc781f1decea",
   "bId": "72949bef-7cab-4942-ab45-e5203024a8d5"
  },
  {
   "a": "Thomas Connolly",
   "b": "Matthew Matro",
   "team": "Flemington",
   "n": 9,
   "w": 4,
   "l": 5,
   "synergy": -1,
   "avgActual": -1.3,
   "avgExpected": 0.1,
   "aId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3",
   "bId": "7b2e1bed-f387-48de-a028-bdde357bb3af"
  },
  {
   "a": "Marcos Claros",
   "b": "Caitlyn Moore",
   "team": "Picklr Fair Lawn",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1,
   "avgActual": -4,
   "avgExpected": -1.8,
   "aId": "839ee2ac-03d5-4fee-bc87-08709afae5f2",
   "bId": "905b402c-9a3e-4b59-ba3e-59f32370ad2e"
  },
  {
   "a": "Kara Infante",
   "b": "Joy Lai",
   "team": "Picklr Fair Lawn",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1,
   "avgActual": -2.5,
   "avgExpected": -0.5,
   "aId": "06edda3d-3a1f-4010-86fa-8ac767cd7079",
   "bId": "9383c452-bc8a-4a30-9b2c-6fff7a0daa49"
  },
  {
   "a": "Shashank Kamdar",
   "b": "Nick Meale",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1,
   "avgActual": -4.3,
   "avgExpected": -2.1,
   "aId": "56db4b56-6166-437f-8ece-26576b7042e5",
   "bId": "ec0bad09-8256-49b3-ae86-3add22dd995f"
  },
  {
   "a": "Nahla Bernhardt",
   "b": "Ozair Ibrahim",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1,
   "avgActual": 0,
   "avgExpected": 2.4,
   "aId": "9dae8c17-6878-473a-83e9-a43b434f876b",
   "bId": "c6fc34a8-e441-4850-b37c-c29b35563989"
  },
  {
   "a": "Courtney Davis",
   "b": "Eric Nguyen",
   "team": "Four Seasons",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -1,
   "avgActual": -5,
   "avgExpected": -3.1,
   "aId": "422813d6-2920-4a65-a84d-a29b6cefcd54",
   "bId": "87d526c6-72b6-4b17-bf77-9016fd049541"
  },
  {
   "a": "Matthew Chen",
   "b": "Rachel Berger",
   "team": "Jersey Devil",
   "n": 9,
   "w": 4,
   "l": 5,
   "synergy": -1,
   "avgActual": -2.1,
   "avgExpected": -0.7,
   "aId": "68e9ac74-5119-4dbb-8503-72bcdbade183",
   "bId": "9b7488c5-bc66-41e4-8fa5-873e70c190e3"
  },
  {
   "a": "Stephen Mcnamara",
   "b": "Fabian Marcos",
   "team": "Picklr Fair Lawn",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -1,
   "avgActual": -1,
   "avgExpected": 0.9,
   "aId": "245e949d-15e7-411e-9751-e19ca709f2cb",
   "bId": "557f8c4a-1a31-4ec5-a467-59faf8d70e96"
  },
  {
   "a": "Jenna Irwin",
   "b": "David Lavy",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1,
   "avgActual": 1.5,
   "avgExpected": 3.5,
   "aId": "85e52e3b-5238-4583-8d1a-cc57f8218ef6",
   "bId": "e28e2d63-947f-490f-9f69-14fb6093b505"
  },
  {
   "a": "Susan Ackley",
   "b": "Christine Ferraez",
   "team": "Flemington",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -1,
   "avgActual": -8.4,
   "avgExpected": -6.6,
   "aId": "07a0e948-6308-4920-a6a8-1d5945552ecb",
   "bId": "ffe0a04b-eb97-4dda-8bc0-0ebe0fd1089e"
  },
  {
   "a": "Zach Bowe",
   "b": "Shelah Wallace",
   "team": "Jersey Devil",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1,
   "avgActual": -2.5,
   "avgExpected": -0.6,
   "aId": "eebadc3a-5763-4612-9232-d3a98ea188d6",
   "bId": "fa519fb1-87ca-4a7b-9265-4aba9807929f"
  },
  {
   "a": "Grant Hanak",
   "b": "Katherine Maruyama",
   "team": "Bounce Malvern",
   "n": 7,
   "w": 1,
   "l": 6,
   "synergy": -1,
   "avgActual": -4.1,
   "avgExpected": -2.6,
   "aId": "44a0a4da-e7cb-4037-9018-97544dfce248",
   "bId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a"
  },
  {
   "a": "Maanav Shah",
   "b": "Amanda Ksiezopolski",
   "team": "Monroe",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1,
   "avgActual": -1.3,
   "avgExpected": 1,
   "aId": "0a1270b0-26f6-4328-85bc-bf3f329a746e",
   "bId": "2138af89-34bc-4ee2-9955-ff16f0997031"
  },
  {
   "a": "Anita Buggins",
   "b": "Annemarie Mccartney",
   "team": "ACE",
   "n": 3,
   "w": 2,
   "l": 1,
   "synergy": -1,
   "avgActual": -0.7,
   "avgExpected": 1.6,
   "aId": "2ea90a18-1ef3-4ade-a855-2a3fd178abd7",
   "bId": "d08d78db-7d20-4dc2-a37b-41841c4624fd"
  },
  {
   "a": "Alex Abad",
   "b": "Ashwin Korde",
   "team": "Bounce Philly",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1,
   "avgActual": -6,
   "avgExpected": -3.7,
   "aId": "bc881ebc-7a42-43be-b1b2-9c29c59a4132",
   "bId": "f9f521ee-5f27-4f61-b4e0-4e0b9ad09aee"
  },
  {
   "a": "Richa Shah",
   "b": "Cameron Barraco",
   "team": "Monroe",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -1.1,
   "avgActual": -5.9,
   "avgExpected": -4.1,
   "aId": "6b80047c-ca16-4506-a2a4-ed894dc0c37f",
   "bId": "ebcb4134-e369-436b-bc38-2cdaadb381c6"
  },
  {
   "a": "Brittany Hall",
   "b": "Steven Maisonet",
   "team": "ACE",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -5,
   "avgExpected": -2.9,
   "aId": "17cc768d-f6c8-484c-814e-063d17cec72f",
   "bId": "d1bebcc0-9427-45af-9d16-cc023b5dd737"
  },
  {
   "a": "Daniel Kulik",
   "b": "Keith Shedlock",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -5,
   "avgExpected": -2.7,
   "aId": "35d7ef89-3505-481a-8036-8c5d7954f9a8",
   "bId": "f4b44cd7-fc9a-41a2-b569-cdaf08b0bf26"
  },
  {
   "a": "Drew Von Bargen",
   "b": "Arianna Haresign",
   "team": "Jersey Devil",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -1.1,
   "avgActual": 0.1,
   "avgExpected": 1.9,
   "aId": "35880e0f-aba0-4a37-85fe-e09b057d63b2",
   "bId": "556f84fc-4f7c-4199-a104-6e906d71605c"
  },
  {
   "a": "Michelle Quach",
   "b": "Johny Mario",
   "team": "Jersey Devil",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.1,
   "avgActual": -1.3,
   "avgExpected": 1.2,
   "aId": "5f0dcbe9-bb0e-496d-99d2-06f01ff2c77b",
   "bId": "831c9fae-38c6-4961-8664-634087f5f2f9"
  },
  {
   "a": "Lauren Mercado",
   "b": "Justin Bautista",
   "team": "Four Seasons",
   "n": 6,
   "w": 0,
   "l": 6,
   "synergy": -1.1,
   "avgActual": -7.5,
   "avgExpected": -5.7,
   "aId": "0aa554f3-0eca-4f2d-b3d9-b277406a7435",
   "bId": "27660961-6245-4b09-aafe-359ca3205797"
  },
  {
   "a": "Jessica Hendry",
   "b": "David Lavy",
   "team": "Pickleball Palace",
   "n": 4,
   "w": 3,
   "l": 1,
   "synergy": -1.1,
   "avgActual": 1,
   "avgExpected": 3.2,
   "aId": "d8d64088-d1c4-4e85-a742-9ebe70839fe3",
   "bId": "e28e2d63-947f-490f-9f69-14fb6093b505"
  },
  {
   "a": "Nick Meale",
   "b": "Julia Plein",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -5.3,
   "avgExpected": -2.8,
   "aId": "ec0bad09-8256-49b3-ae86-3add22dd995f",
   "bId": "f3d99274-413c-4720-9c8d-1a71f9b2e717"
  },
  {
   "a": "Chaille Godinez",
   "b": "Annemarie Mccartney",
   "team": "ACE",
   "n": 11,
   "w": 6,
   "l": 5,
   "synergy": -1.1,
   "avgActual": -0.6,
   "avgExpected": 0.9,
   "aId": "3cb88b7e-d8f2-45c6-b928-202bd6f5d4e6",
   "bId": "d08d78db-7d20-4dc2-a37b-41841c4624fd"
  },
  {
   "a": "Tin Wai Kwan",
   "b": "Pablo Shin",
   "team": "Picklr Fair Lawn",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -1.1,
   "avgActual": -4.4,
   "avgExpected": -2.6,
   "aId": "22fe1980-7ef9-4026-8c76-a39534431c6b",
   "bId": "d2130c6d-6552-422e-b93d-c804bc7303a0"
  },
  {
   "a": "Elisangela Harrington",
   "b": "Daniel Gallegos",
   "team": "Pickleball Kingdom Watchung",
   "n": 7,
   "w": 1,
   "l": 6,
   "synergy": -1.1,
   "avgActual": -6.4,
   "avgExpected": -4.6,
   "aId": "55bbe71c-1181-4875-b16d-f121f3a133e0",
   "bId": "6f9cb35b-f24c-4480-a8b4-86e6ea32f3c2"
  },
  {
   "a": "Helen Liu",
   "b": "Cameron Barraco",
   "team": "Monroe",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.1,
   "avgActual": -7.7,
   "avgExpected": -5,
   "aId": "53cc1790-d8b9-4b64-a8b3-6e10b2eeb131",
   "bId": "ebcb4134-e369-436b-bc38-2cdaadb381c6"
  },
  {
   "a": "Kishan Shah",
   "b": "Lissa Eagles",
   "team": "Pickle House",
   "n": 9,
   "w": 5,
   "l": 4,
   "synergy": -1.2,
   "avgActual": 0.9,
   "avgExpected": 2.6,
   "aId": "8ca1f741-6a67-4332-9ca7-082671211098",
   "bId": "9ec39678-a120-45de-b8a5-897b8cf900cd"
  },
  {
   "a": "Daniel Kulik",
   "b": "Carly Pfeffer",
   "team": "Pickleball Palace",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -1.2,
   "avgActual": -2.8,
   "avgExpected": -0.8,
   "aId": "35d7ef89-3505-481a-8036-8c5d7954f9a8",
   "bId": "387e74d4-66ee-4a52-a4ac-aae3dbe1d21b"
  },
  {
   "a": "Fabian Marcos",
   "b": "Jeff Sul",
   "team": "Picklr Fair Lawn",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.2,
   "avgActual": -4.3,
   "avgExpected": -1.5,
   "aId": "557f8c4a-1a31-4ec5-a467-59faf8d70e96",
   "bId": "a52d05fa-a423-4220-8c5d-86d506e61f5d"
  },
  {
   "a": "Allison Tarnoff",
   "b": "Kaylyn Swankoski",
   "team": "Dill Dinkers Hatboro",
   "n": 8,
   "w": 7,
   "l": 1,
   "synergy": -1.2,
   "avgActual": 4,
   "avgExpected": 5.8,
   "aId": "001bf0ea-f8b1-402f-ab07-88ed85b2b510",
   "bId": "72949bef-7cab-4942-ab45-e5203024a8d5"
  },
  {
   "a": "Kenoa Tio",
   "b": "Hannah Nussbaum",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.2,
   "avgActual": 0,
   "avgExpected": 2.9,
   "aId": "10e9980e-34bf-43ea-b246-3280bca79efb",
   "bId": "84b7c449-501c-438d-a3eb-ee67cc92fa0e"
  },
  {
   "a": "Charlotte Healey",
   "b": "Rachel Alfano",
   "team": "Bounce Philly",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.2,
   "avgActual": -0.7,
   "avgExpected": 1.6,
   "aId": "bbaf3def-a87b-4537-8701-4f5ae0108b1f",
   "bId": "ce7aca89-06ac-4cd9-8944-a482216ffd58"
  },
  {
   "a": "Yuki Kim",
   "b": "Tera Baccile",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.2,
   "avgActual": -2,
   "avgExpected": 0.4,
   "aId": "afec0287-b62d-4aaf-977f-afb96aed0e17",
   "bId": "d5aa92c7-71df-47c7-84fb-6710e1ed81e2"
  },
  {
   "a": "Eric Gibbs",
   "b": "Royce Chan",
   "team": "Four Seasons",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.2,
   "avgActual": -5.7,
   "avgExpected": -3.2,
   "aId": "0c1a11c0-7f89-48fa-af2f-3f9925039239",
   "bId": "68274c39-0102-4554-978e-1aa50a0b3fba"
  },
  {
   "a": "Christian Fechter",
   "b": "Keith Shedlock",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.2,
   "avgActual": -5.3,
   "avgExpected": -2.6,
   "aId": "9a973334-7467-4873-9aa6-ca3a597e8caa",
   "bId": "f4b44cd7-fc9a-41a2-b569-cdaf08b0bf26"
  },
  {
   "a": "Caitlyn Moore",
   "b": "Aya Haruyama",
   "team": "Picklr Fair Lawn",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.2,
   "avgActual": -2.5,
   "avgExpected": 0,
   "aId": "905b402c-9a3e-4b59-ba3e-59f32370ad2e",
   "bId": "d2ef2b1f-9f63-4542-8b66-c6ef8ca0fdc3"
  },
  {
   "a": "Jaco De Waal",
   "b": "Yoyo Shen",
   "team": "Pickle House",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.2,
   "avgActual": -0.7,
   "avgExpected": 1.7,
   "aId": "19407a76-031d-4be3-8ed8-ba88cccdfdd3",
   "bId": "9d47a1aa-c44c-4ddd-8953-dc40f79b1016"
  },
  {
   "a": "Richa Shah",
   "b": "Ruhi Shah",
   "team": "Monroe",
   "n": 10,
   "w": 4,
   "l": 6,
   "synergy": -1.3,
   "avgActual": -3.2,
   "avgExpected": -1.4,
   "aId": "6b80047c-ca16-4506-a2a4-ed894dc0c37f",
   "bId": "a2d56e71-3895-4316-9e9e-17565fb62295"
  },
  {
   "a": "Chaille Godinez",
   "b": "Hector Irizarry",
   "team": "ACE",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.3,
   "avgActual": -0.7,
   "avgExpected": 1.9,
   "aId": "3cb88b7e-d8f2-45c6-b928-202bd6f5d4e6",
   "bId": "a50a69d0-0a8c-4241-b768-846b1591d180"
  },
  {
   "a": "Lynda Tomaru",
   "b": "Ross Switkes",
   "team": "Flemington",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.3,
   "avgActual": -4,
   "avgExpected": -1.3,
   "aId": "2b001a36-d13c-42fa-ae50-c9cc2f1aeb4e",
   "bId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b"
  },
  {
   "a": "Michelle Quach",
   "b": "Rachel Berger",
   "team": "Jersey Devil",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -1.3,
   "avgActual": -2.4,
   "avgExpected": -0.1,
   "aId": "5f0dcbe9-bb0e-496d-99d2-06f01ff2c77b",
   "bId": "9b7488c5-bc66-41e4-8fa5-873e70c190e3"
  },
  {
   "a": "Matthew Chen",
   "b": "Michaela Pierznik",
   "team": "Jersey Devil",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.3,
   "avgActual": -2.7,
   "avgExpected": 0.4,
   "aId": "68e9ac74-5119-4dbb-8503-72bcdbade183",
   "bId": "c885c4ae-2685-4fc8-9b35-40cf9f465915"
  },
  {
   "a": "Jessica Hendry",
   "b": "Jessica Pevny",
   "team": "Pickleball Palace",
   "n": 5,
   "w": 4,
   "l": 1,
   "synergy": -1.3,
   "avgActual": 0.8,
   "avgExpected": 3.1,
   "aId": "d8d64088-d1c4-4e85-a742-9ebe70839fe3",
   "bId": "f472188b-24d9-4bf7-9f70-746d496f57d4"
  },
  {
   "a": "Nick Dehmer",
   "b": "Sidd Pathare",
   "team": "Pickle House",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -1.3,
   "avgActual": -1.2,
   "avgExpected": 1.1,
   "aId": "3cd8477e-8352-44a7-916f-ac2e3c3005f2",
   "bId": "a73f249d-c1c9-4516-bc79-e9732581f098"
  },
  {
   "a": "Chris Damato",
   "b": "Sidd Pathare",
   "team": "Pickle House",
   "n": 6,
   "w": 2,
   "l": 4,
   "synergy": -1.3,
   "avgActual": -1.8,
   "avgExpected": 0.4,
   "aId": "445e89c8-a23c-440c-bd3c-7eab366bdd85",
   "bId": "a73f249d-c1c9-4516-bc79-e9732581f098"
  },
  {
   "a": "Jordan Long",
   "b": "Matthew Kraft",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.3,
   "avgActual": -6.3,
   "avgExpected": -3.4,
   "aId": "0fbbdbbb-a550-49ae-b04a-111bfe4891f5",
   "bId": "f2cb8ea7-ed55-42cc-be8e-9f8352a330e8"
  },
  {
   "a": "Roshi Desilva",
   "b": "Anh Nguyen",
   "team": "Four Seasons",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.3,
   "avgActual": -7,
   "avgExpected": -4.1,
   "aId": "002c6f87-6787-41ea-a2a0-c0fcecc8f6c7",
   "bId": "3478a097-ab58-413c-b90e-aef96e00fbfa"
  },
  {
   "a": "Anthony Ursino",
   "b": "Dilan Shah",
   "team": "Monroe",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.3,
   "avgActual": -9,
   "avgExpected": -6,
   "aId": "1406ff1f-3597-4128-a629-7dfd1dfe1323",
   "bId": "91d23f87-e0fc-4448-890e-c3abd96c70b4"
  },
  {
   "a": "Marcos Claros",
   "b": "Pablo Shin",
   "team": "Picklr Fair Lawn",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.3,
   "avgActual": -6.3,
   "avgExpected": -3.4,
   "aId": "839ee2ac-03d5-4fee-bc87-08709afae5f2",
   "bId": "d2130c6d-6552-422e-b93d-c804bc7303a0"
  },
  {
   "a": "Kaylyn Swankoski",
   "b": "Jeff Comer",
   "team": "Dill Dinkers Hatboro",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.4,
   "avgActual": 0.3,
   "avgExpected": 3.6,
   "aId": "72949bef-7cab-4942-ab45-e5203024a8d5",
   "bId": "afacd45c-4801-4062-9401-f721e8d73d08"
  },
  {
   "a": "Eric Nguyen",
   "b": "Zyril Carilo",
   "team": "Four Seasons",
   "n": 6,
   "w": 0,
   "l": 6,
   "synergy": -1.4,
   "avgActual": -5.7,
   "avgExpected": -3.4,
   "aId": "87d526c6-72b6-4b17-bf77-9016fd049541",
   "bId": "b4efc48a-f302-4d27-8c35-0dac1e68eec8"
  },
  {
   "a": "Kara Infante",
   "b": "Stephen Mcnamara",
   "team": "Picklr Fair Lawn",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.4,
   "avgActual": -3.3,
   "avgExpected": 0,
   "aId": "06edda3d-3a1f-4010-86fa-8ac767cd7079",
   "bId": "245e949d-15e7-411e-9751-e19ca709f2cb"
  },
  {
   "a": "Caitlyn Moore",
   "b": "Johanna Wagner",
   "team": "Picklr Fair Lawn",
   "n": 7,
   "w": 3,
   "l": 4,
   "synergy": -1.4,
   "avgActual": -1.7,
   "avgExpected": 0.4,
   "aId": "905b402c-9a3e-4b59-ba3e-59f32370ad2e",
   "bId": "e447eb0f-dc19-4616-a7f4-b53de776db3b"
  },
  {
   "a": "Daniel Kulik",
   "b": "Jessica Hendry",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.4,
   "avgActual": -2,
   "avgExpected": 1.2,
   "aId": "35d7ef89-3505-481a-8036-8c5d7954f9a8",
   "bId": "d8d64088-d1c4-4e85-a742-9ebe70839fe3"
  },
  {
   "a": "Dustin Rabinowitz",
   "b": "Ashwin Korde",
   "team": "Bounce Philly",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.4,
   "avgActual": -3,
   "avgExpected": 0.2,
   "aId": "d23839c0-334b-4423-9305-0c6281523d5d",
   "bId": "f9f521ee-5f27-4f61-b4e0-4e0b9ad09aee"
  },
  {
   "a": "Lynda Tomaru",
   "b": "Christine Ferraez",
   "team": "Flemington",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -1.4,
   "avgActual": -5.4,
   "avgExpected": -2.9,
   "aId": "2b001a36-d13c-42fa-ae50-c9cc2f1aeb4e",
   "bId": "ffe0a04b-eb97-4dda-8bc0-0ebe0fd1089e"
  },
  {
   "a": "Nathan Law",
   "b": "Hector Irizarry",
   "team": "ACE",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -1.4,
   "avgActual": 2.2,
   "avgExpected": 4.5,
   "aId": "3c81d27f-9e68-439b-a476-f5ac1a54f45a",
   "bId": "a50a69d0-0a8c-4241-b768-846b1591d180"
  },
  {
   "a": "Shashank Kamdar",
   "b": "Katherine Maruyama",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.4,
   "avgActual": -3.7,
   "avgExpected": -0.9,
   "aId": "56db4b56-6166-437f-8ece-26576b7042e5",
   "bId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a"
  },
  {
   "a": "William Hayes",
   "b": "Bruno Casino",
   "team": "Bounce Philly",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.4,
   "avgActual": 0.7,
   "avgExpected": 3.9,
   "aId": "4dfed1a1-5375-446c-98bc-69402e70e1d5",
   "bId": "d195dff9-7f38-402c-8164-44640f89c3fa"
  },
  {
   "a": "Gift Horn",
   "b": "Chrissy Sandella",
   "team": "Pickleball Kingdom Watchung",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.4,
   "avgActual": -4.5,
   "avgExpected": -1.6,
   "aId": "9eba6702-22e5-4b53-b6f0-acc44ac2034d",
   "bId": "bd30e236-1c20-4fa1-b9ad-f56c8613d22b"
  },
  {
   "a": "Amanda Ksiezopolski",
   "b": "Cameron Barraco",
   "team": "Monroe",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.5,
   "avgActual": -7,
   "avgExpected": -3.5,
   "aId": "2138af89-34bc-4ee2-9955-ff16f0997031",
   "bId": "ebcb4134-e369-436b-bc38-2cdaadb381c6"
  },
  {
   "a": "Katherine Maruyama",
   "b": "Julia Plein",
   "team": "Bounce Malvern",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.5,
   "avgActual": -7,
   "avgExpected": -3.4,
   "aId": "b83bd6a7-2706-4a28-af7b-2b5da3d7281a",
   "bId": "f3d99274-413c-4720-9c8d-1a71f9b2e717"
  },
  {
   "a": "Lauren Mercado",
   "b": "Anh Nguyen",
   "team": "Four Seasons",
   "n": 6,
   "w": 0,
   "l": 6,
   "synergy": -1.5,
   "avgActual": -9.5,
   "avgExpected": -7,
   "aId": "0aa554f3-0eca-4f2d-b3d9-b277406a7435",
   "bId": "3478a097-ab58-413c-b90e-aef96e00fbfa"
  },
  {
   "a": "Doryan Amato",
   "b": "James Cannizzaro",
   "team": "Pickleball Kingdom Watchung",
   "n": 6,
   "w": 3,
   "l": 3,
   "synergy": -1.5,
   "avgActual": -0.8,
   "avgExpected": 1.6,
   "aId": "9d2c8050-1b0b-4f4c-9158-a84190c726e3",
   "bId": "9f2987f3-a389-4d47-9dcd-e619d94cbc18"
  },
  {
   "a": "Clayton Schmucker",
   "b": "Rayna Baizman",
   "team": "Dill Dinkers Hatboro",
   "n": 5,
   "w": 3,
   "l": 2,
   "synergy": -1.5,
   "avgActual": -0.8,
   "avgExpected": 2,
   "aId": "0be72348-4a00-413e-bf40-df6824c3cca3",
   "bId": "108620c9-1cbb-4ea0-846c-bc781f1decea"
  },
  {
   "a": "Kenoa Tio",
   "b": "Dylan Ashbach",
   "team": "Dill Dinkers Hatboro",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -1.5,
   "avgActual": 2,
   "avgExpected": 4.4,
   "aId": "10e9980e-34bf-43ea-b246-3280bca79efb",
   "bId": "d9f11069-342b-4bf7-9a7a-cbeece0396be"
  },
  {
   "a": "Tess Fisher",
   "b": "Rachel Hannum",
   "team": "Four Seasons",
   "n": 6,
   "w": 4,
   "l": 2,
   "synergy": -1.5,
   "avgActual": 1.7,
   "avgExpected": 4.2,
   "aId": "661f7bd0-74d3-432b-acc7-da0e3b3e36ea",
   "bId": "9e62411a-1a2e-4f18-972e-f13d9bf8ced7"
  },
  {
   "a": "Ken Velarde",
   "b": "Daniel Gallegos",
   "team": "Pickleball Kingdom Watchung",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -1.5,
   "avgActual": -7.2,
   "avgExpected": -4.7,
   "aId": "25aa47d0-76b8-48be-a5be-b1d33b423e82",
   "bId": "6f9cb35b-f24c-4480-a8b4-86e6ea32f3c2"
  },
  {
   "a": "Anthony Ursino",
   "b": "Morgan Fishman",
   "team": "Monroe",
   "n": 7,
   "w": 0,
   "l": 7,
   "synergy": -1.6,
   "avgActual": -7,
   "avgExpected": -4.4,
   "aId": "1406ff1f-3597-4128-a629-7dfd1dfe1323",
   "bId": "5ccee070-0af8-4363-9ddb-6ce8ebce098f"
  },
  {
   "a": "Jennifer Sanchez",
   "b": "Brittany Hall",
   "team": "ACE",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -1.6,
   "avgActual": -3.8,
   "avgExpected": -0.9,
   "aId": "061121d0-5d0a-4c01-9d8e-dced99d6d82d",
   "bId": "17cc768d-f6c8-484c-814e-063d17cec72f"
  },
  {
   "a": "Alex Kazdan",
   "b": "Christian Fechter",
   "team": "Pickleball Palace",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -1.6,
   "avgActual": -5.2,
   "avgExpected": -2.3,
   "aId": "51f123b2-aced-4719-9d05-d09244db1ee4",
   "bId": "9a973334-7467-4873-9aa6-ca3a597e8caa"
  },
  {
   "a": "Megan Harvey",
   "b": "Shashank Kamdar",
   "team": "Bounce Malvern",
   "n": 6,
   "w": 0,
   "l": 6,
   "synergy": -1.6,
   "avgActual": -4.3,
   "avgExpected": -1.7,
   "aId": "4d576bb5-e9e5-4ad1-a18f-022508c6a161",
   "bId": "56db4b56-6166-437f-8ece-26576b7042e5"
  },
  {
   "a": "Tyler Arsenault",
   "b": "Zach Bowe",
   "team": "Jersey Devil",
   "n": 12,
   "w": 4,
   "l": 8,
   "synergy": -1.6,
   "avgActual": -2.1,
   "avgExpected": 0,
   "aId": "e76d2d63-f7dc-40e7-aca2-d9b3aecf4d3e",
   "bId": "eebadc3a-5763-4612-9232-d3a98ea188d6"
  },
  {
   "a": "Megan Harvey",
   "b": "Yuki Kim",
   "team": "Bounce Malvern",
   "n": 5,
   "w": 1,
   "l": 4,
   "synergy": -1.6,
   "avgActual": -3.2,
   "avgExpected": -0.3,
   "aId": "4d576bb5-e9e5-4ad1-a18f-022508c6a161",
   "bId": "afec0287-b62d-4aaf-977f-afb96aed0e17"
  },
  {
   "a": "Jonah Fliegelman",
   "b": "Dylan Ashbach",
   "team": "Dill Dinkers Hatboro",
   "n": 10,
   "w": 6,
   "l": 4,
   "synergy": -1.6,
   "avgActual": 1.9,
   "avgExpected": 4.2,
   "aId": "1070bcd5-fdff-4adc-8d03-460a208fe4e8",
   "bId": "d9f11069-342b-4bf7-9a7a-cbeece0396be"
  },
  {
   "a": "Beatriz Lopez Albarracin",
   "b": "Jenna Irwin",
   "team": "Pickleball Palace",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.6,
   "avgActual": -1.7,
   "avgExpected": 2,
   "aId": "73603f18-0adb-48db-8375-1a6deff6ddbb",
   "bId": "85e52e3b-5238-4583-8d1a-cc57f8218ef6"
  },
  {
   "a": "Matthew Kraft",
   "b": "Nam Barsh",
   "team": "Bounce Malvern",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -1.6,
   "avgActual": -6.7,
   "avgExpected": -3.6,
   "aId": "f2cb8ea7-ed55-42cc-be8e-9f8352a330e8",
   "bId": "fa43af77-3cd1-4e61-a8dc-bd714b65d517"
  },
  {
   "a": "Thomas Connolly",
   "b": "Melissa Dardani",
   "team": "Flemington",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.6,
   "avgActual": -7.7,
   "avgExpected": -3.9,
   "aId": "6c1ed6bb-aa5e-4947-9656-f43e51a791c3",
   "bId": "ef423f8a-5c2c-4a12-9f37-b41ff6d6c530"
  },
  {
   "a": "Fabricio Gaona",
   "b": "Noelle Ramirez",
   "team": "Pickleball Kingdom Watchung",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.6,
   "avgActual": -4.7,
   "avgExpected": -1,
   "aId": "ee88d140-1a78-4776-85e0-3f982891576d",
   "bId": "f30428dd-bc5a-4535-94b3-b8779e958ada"
  },
  {
   "a": "Morgan Fishman",
   "b": "Cameron Barraco",
   "team": "Monroe",
   "n": 6,
   "w": 0,
   "l": 6,
   "synergy": -1.7,
   "avgActual": -6.3,
   "avgExpected": -3.4,
   "aId": "5ccee070-0af8-4363-9ddb-6ce8ebce098f",
   "bId": "ebcb4134-e369-436b-bc38-2cdaadb381c6"
  },
  {
   "a": "Jenna Irwin",
   "b": "Keith Shedlock",
   "team": "Pickleball Palace",
   "n": 6,
   "w": 0,
   "l": 6,
   "synergy": -1.7,
   "avgActual": -6,
   "avgExpected": -3.1,
   "aId": "85e52e3b-5238-4583-8d1a-cc57f8218ef6",
   "bId": "f4b44cd7-fc9a-41a2-b569-cdaf08b0bf26"
  },
  {
   "a": "Emily Babinsky",
   "b": "Zach Mcgowan",
   "team": "Pickle House",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -1.7,
   "avgActual": -2.2,
   "avgExpected": 1.3,
   "aId": "d0e2c1ea-529d-4364-b521-cb205ecdded3",
   "bId": "e71a8785-5959-4607-9af3-e3ac9e3c6d86"
  },
  {
   "a": "Clayton Schmucker",
   "b": "Dylan Ashbach",
   "team": "Dill Dinkers Hatboro",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.8,
   "avgActual": 1,
   "avgExpected": 4.7,
   "aId": "0be72348-4a00-413e-bf40-df6824c3cca3",
   "bId": "d9f11069-342b-4bf7-9a7a-cbeece0396be"
  },
  {
   "a": "Arianna Haresign",
   "b": "Michaela Pierznik",
   "team": "Jersey Devil",
   "n": 3,
   "w": 1,
   "l": 2,
   "synergy": -1.8,
   "avgActual": -1,
   "avgExpected": 3.1,
   "aId": "556f84fc-4f7c-4199-a104-6e906d71605c",
   "bId": "c885c4ae-2685-4fc8-9b35-40cf9f465915"
  },
  {
   "a": "Kenoa Tio",
   "b": "Ozair Ibrahim",
   "team": "Dill Dinkers Hatboro",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -1.8,
   "avgActual": -1,
   "avgExpected": 2.3,
   "aId": "10e9980e-34bf-43ea-b246-3280bca79efb",
   "bId": "c6fc34a8-e441-4850-b37c-c29b35563989"
  },
  {
   "a": "Chad Durkin",
   "b": "Aya Haruyama",
   "team": "Picklr Fair Lawn",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.8,
   "avgActual": -5.7,
   "avgExpected": -1.4,
   "aId": "54ed1c79-aaa0-486d-851b-d5a4db375b94",
   "bId": "d2ef2b1f-9f63-4542-8b66-c6ef8ca0fdc3"
  },
  {
   "a": "Nick Dehmer",
   "b": "Chris Damato",
   "team": "Pickle House",
   "n": 4,
   "w": 2,
   "l": 2,
   "synergy": -1.9,
   "avgActual": -2,
   "avgExpected": 1.8,
   "aId": "3cd8477e-8352-44a7-916f-ac2e3c3005f2",
   "bId": "445e89c8-a23c-440c-bd3c-7eab366bdd85"
  },
  {
   "a": "Alyssa Boyle",
   "b": "Julia Sternberg",
   "team": "Bounce Philly",
   "n": 5,
   "w": 0,
   "l": 5,
   "synergy": -1.9,
   "avgActual": -6,
   "avgExpected": -2.6,
   "aId": "22123177-1eb2-4285-bc92-f75799e175dd",
   "bId": "ccd8a76f-df3a-4ab9-97b6-bae0f860a431"
  },
  {
   "a": "Roshi Desilva",
   "b": "Eric Gibbs",
   "team": "Four Seasons",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -1.9,
   "avgActual": -5.3,
   "avgExpected": -0.9,
   "aId": "002c6f87-6787-41ea-a2a0-c0fcecc8f6c7",
   "bId": "0c1a11c0-7f89-48fa-af2f-3f9925039239"
  },
  {
   "a": "Kylie Lupica",
   "b": "Shelah Wallace",
   "team": "Jersey Devil",
   "n": 5,
   "w": 2,
   "l": 3,
   "synergy": -2,
   "avgActual": -3.4,
   "avgExpected": 0.2,
   "aId": "9b4b88bf-1f87-46cd-829a-84b82a424b82",
   "bId": "fa519fb1-87ca-4a7b-9265-4aba9807929f"
  },
  {
   "a": "Jansen Tubo",
   "b": "Pablo Shin",
   "team": "Picklr Fair Lawn",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2,
   "avgActual": -11.3,
   "avgExpected": -6.7,
   "aId": "8b8bcad5-6324-48d9-b225-f6739eda8cc0",
   "bId": "d2130c6d-6552-422e-b93d-c804bc7303a0"
  },
  {
   "a": "Kylie Lupica",
   "b": "Zach Bowe",
   "team": "Jersey Devil",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -2,
   "avgActual": -5,
   "avgExpected": -0.3,
   "aId": "9b4b88bf-1f87-46cd-829a-84b82a424b82",
   "bId": "eebadc3a-5763-4612-9232-d3a98ea188d6"
  },
  {
   "a": "Zoe Ousouljoglou",
   "b": "Will Kayal",
   "team": "Pickleball Kingdom Watchung",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -2.1,
   "avgActual": -2.3,
   "avgExpected": 1,
   "aId": "269fe355-d2eb-41b8-9e92-a1438aec65e3",
   "bId": "f98a262e-9080-4a48-9cd9-3fe5db979305"
  },
  {
   "a": "Chris Bucaro",
   "b": "Jacob Yandoli",
   "team": "Monroe",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -2.2,
   "avgActual": -1.7,
   "avgExpected": 2.6,
   "aId": "0e43724a-794d-4218-9da4-d0e83d35ffb2",
   "bId": "be9bc229-2d57-4236-a951-11a2f91a09a3"
  },
  {
   "a": "Jonah Fliegelman",
   "b": "Alyssa Tartaglia",
   "team": "Dill Dinkers Hatboro",
   "n": 4,
   "w": 1,
   "l": 3,
   "synergy": -2.2,
   "avgActual": -3.7,
   "avgExpected": 0.6,
   "aId": "1070bcd5-fdff-4adc-8d03-460a208fe4e8",
   "bId": "881ed39f-f9fc-4e9d-8ed3-d13d9ebc7b13"
  },
  {
   "a": "Carly Pfeffer",
   "b": "David Lavy",
   "team": "Pickleball Palace",
   "n": 7,
   "w": 2,
   "l": 5,
   "synergy": -2.4,
   "avgActual": -1.1,
   "avgExpected": 2.7,
   "aId": "387e74d4-66ee-4a52-a4ac-aae3dbe1d21b",
   "bId": "e28e2d63-947f-490f-9f69-14fb6093b505"
  },
  {
   "a": "Michelle Quach",
   "b": "Michaela Pierznik",
   "team": "Jersey Devil",
   "n": 6,
   "w": 1,
   "l": 5,
   "synergy": -2.5,
   "avgActual": -5.2,
   "avgExpected": -1,
   "aId": "5f0dcbe9-bb0e-496d-99d2-06f01ff2c77b",
   "bId": "c885c4ae-2685-4fc8-9b35-40cf9f465915"
  },
  {
   "a": "Robbie Oddy",
   "b": "Ross Switkes",
   "team": "Flemington",
   "n": 4,
   "w": 0,
   "l": 4,
   "synergy": -3.2,
   "avgActual": -6.7,
   "avgExpected": -0.3,
   "aId": "cc1d39e6-1550-41b8-bb47-4118be5f9ba6",
   "bId": "eb9d0f6d-f22b-4928-9f8e-1641ed6a946b"
  },
  {
   "a": "Tin Wai Kwan",
   "b": "Jansen Tubo",
   "team": "Picklr Fair Lawn",
   "n": 3,
   "w": 0,
   "l": 3,
   "synergy": -3.2,
   "avgActual": -10,
   "avgExpected": -2.5,
   "aId": "22fe1980-7ef9-4026-8c76-a39534431c6b",
   "bId": "8b8bcad5-6324-48d9-b225-f6739eda8cc0"
  }
 ],
 "matches": [
  {
   "result": "away",
   "week": 1,
   "home": "Monroe",
   "away": "Pickle House",
   "time": "2026-02-25T19:00:00",
   "complete": true,
   "homePoints": 586,
   "awayPoints": 641,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Cameron Barraco",
      "Chris Bucaro"
     ],
     "a": [
      "Taylor Hartman",
      "Dylan Unkert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Morgan Fishman",
      "Chris Frangipane"
     ],
     "a": [
      "Lissa Eagles",
      "Kishan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Ruhi Shah",
      "Igor Silva"
     ],
     "a": [
      "Lindsey Thoeng",
      "Nick Dehmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Richa Shah",
      "Maanav Shah"
     ],
     "a": [
      "Yoyo Shen",
      "Michael Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Cameron Barraco",
      "Ruhi Shah"
     ],
     "a": [
      "Taylor Hartman",
      "Lindsey Thoeng"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Morgan Fishman",
      "Amanda Ksiezopolski"
     ],
     "a": [
      "Lissa Eagles",
      "Emily Babinsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Chris Frangipane",
      "Chris Bucaro"
     ],
     "a": [
      "Chris Damato",
      "Nick Dehmer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Igor Silva",
      "Anthony Ursino"
     ],
     "a": [
      "Dylan Unkert",
      "Michael Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Richa Shah",
      "Chris Bucaro"
     ],
     "a": [
      "Taylor Hartman",
      "Dylan Unkert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Morgan Fishman",
      "Anthony Ursino"
     ],
     "a": [
      "Emily Babinsky",
      "Kishan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ruhi Shah",
      "Maanav Shah"
     ],
     "a": [
      "Lindsey Thoeng",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Amanda Ksiezopolski",
      "Igor Silva"
     ],
     "a": [
      "Yoyo Shen",
      "Michael Li"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Ruhi Shah",
      "Cameron Barraco"
     ],
     "a": [
      "Lindsey Thoeng",
      "Taylor Hartman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Morgan Fishman",
      "Amanda Ksiezopolski"
     ],
     "a": [
      "Lissa Eagles",
      "Yoyo Shen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Chris Bucaro",
      "Maanav Shah"
     ],
     "a": [
      "Nick Dehmer",
      "Kishan Shah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Igor Silva",
      "Chris Frangipane"
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
     "as": 23,
     "h": [
      "Ruhi Shah",
      "Maanav Shah"
     ],
     "a": [
      "Taylor Hartman",
      "Michael Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 29,
     "as": 27,
     "h": [
      "Cameron Barraco",
      "Chris Bucaro"
     ],
     "a": [
      "Yoyo Shen",
      "Nick Dehmer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Morgan Fishman",
      "Chris Frangipane"
     ],
     "a": [
      "Emily Babinsky",
      "Dylan Unkert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Richa Shah",
      "Anthony Ursino"
     ],
     "a": [
      "Lissa Eagles",
      "Kishan Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Cameron Barraco",
      "Amanda Ksiezopolski"
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
      "Richa Shah",
      "Ruhi Shah"
     ],
     "a": [
      "Lissa Eagles",
      "Lindsey Thoeng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Maanav Shah",
      "Chris Frangipane"
     ],
     "a": [
      "Chris Damato",
      "Nick Dehmer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Igor Silva",
      "Anthony Ursino"
     ],
     "a": [
      "Michael Li",
      "Dylan Unkert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Richa Shah",
      "Maanav Shah"
     ],
     "a": [
      "Taylor Hartman",
      "Michael Li"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ruhi Shah",
      "Chris Bucaro"
     ],
     "a": [
      "Lindsey Thoeng",
      "Dylan Unkert"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Amanda Ksiezopolski",
      "Igor Silva"
     ],
     "a": [
      "Yoyo Shen",
      "Kishan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Morgan Fishman",
      "Anthony Ursino"
     ],
     "a": [
      "Emily Babinsky",
      "Chris Damato"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Cameron Barraco",
      "Richa Shah"
     ],
     "a": [
      "Lissa Eagles",
      "Taylor Hartman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ruhi Shah",
      "Amanda Ksiezopolski"
     ],
     "a": [
      "Lindsey Thoeng",
      "Yoyo Shen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Anthony Ursino",
      "Maanav Shah"
     ],
     "a": [
      "Dylan Unkert",
      "Nick Dehmer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Chris Frangipane",
      "Chris Bucaro"
     ],
     "a": [
      "Kishan Shah",
      "Chris Damato"
     ]
    }
   ],
   "subs": [
    "Dylan Unkert",
    "Lindsey Thoeng"
   ]
  },
  {
   "result": "home",
   "week": 1,
   "home": "ACE",
   "away": "Bounce Malvern",
   "time": "2026-02-25T19:00:00",
   "complete": true,
   "homePoints": 622,
   "awayPoints": 559,
   "homeGW": 21,
   "awayGW": 11,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jennifer Sanchez",
      "Manny Lai"
     ],
     "a": [
      "Yuki Kim",
      "Matthew Kraft"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Brittany Hall",
      "Steven Maisonet"
     ],
     "a": [
      "Julia Plein",
      "Lou Frignito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Chaille Godinez",
      "Hector Irizarry"
     ],
     "a": [
      "Katherine Maruyama",
      "Jordan Long"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Stacy Walkowitz",
      "Nathan Law"
     ],
     "a": [
      "Kathleen Dougherty",
      "Jun Avila"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Brittany Hall",
      "Jennifer Sanchez"
     ],
     "a": [
      "Kathleen Dougherty",
      "Julia Plein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Chaille Godinez",
      "Stacy Walkowitz"
     ],
     "a": [
      "Katherine Maruyama",
      "Yuki Kim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Hector Irizarry",
      "Steven Maisonet"
     ],
     "a": [
      "Matthew Kraft",
      "Lou Frignito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Manny Lai",
      "Nathan Law"
     ],
     "a": [
      "Jun Avila",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Stacy Walkowitz",
      "Manny Lai"
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
      "Danielle Bernero",
      "Damien Stahl"
     ],
     "a": [
      "Kathleen Dougherty",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jennifer Sanchez",
      "Hector Irizarry"
     ],
     "a": [
      "Katherine Maruyama",
      "Jun Avila"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Chaille Godinez",
      "Nathan Law"
     ],
     "a": [
      "Julia Plein",
      "Jordan Long"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Brittany Hall",
      "Chaille Godinez"
     ],
     "a": [
      "Yuki Kim",
      "Kathleen Dougherty"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Danielle Bernero",
      "Stacy Walkowitz"
     ],
     "a": [
      "Julia Plein",
      "Katherine Maruyama"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Manny Lai",
      "Hector Irizarry"
     ],
     "a": [
      "Jordan Long",
      "Lou Frignito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Nathan Law",
      "Damien Stahl"
     ],
     "a": [
      "Matthew Kraft",
      "Jun Avila"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Chaille Godinez",
      "Hector Irizarry"
     ],
     "a": [
      "Julia Plein",
      "Jordan Long"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Brittany Hall",
      "Nathan Law"
     ],
     "a": [
      "Yuki Kim",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Danielle Bernero",
      "Manny Lai"
     ],
     "a": [
      "Katherine Maruyama",
      "Jun Avila"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Stacy Walkowitz",
      "Steven Maisonet"
     ],
     "a": [
      "Kathleen Dougherty",
      "Matthew Kraft"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Stacy Walkowitz",
      "Jennifer Sanchez"
     ],
     "a": [
      "Kathleen Dougherty",
      "Yuki Kim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Chaille Godinez",
      "Danielle Bernero"
     ],
     "a": [
      "Katherine Maruyama",
      "Julia Plein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Hector Irizarry",
      "Steven Maisonet"
     ],
     "a": [
      "Jordan Long",
      "Lou Frignito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Manny Lai",
      "Nathan Law"
     ],
     "a": [
      "Matthew Kraft",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jennifer Sanchez",
      "Steven Maisonet"
     ],
     "a": [
      "Julia Plein",
      "Lou Frignito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Stacy Walkowitz",
      "Damien Stahl"
     ],
     "a": [
      "Yuki Kim",
      "Matthew Kraft"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Brittany Hall",
      "Manny Lai"
     ],
     "a": [
      "Katherine Maruyama",
      "Jim Darcangelo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Chaille Godinez",
      "Nathan Law"
     ],
     "a": [
      "Kathleen Dougherty",
      "Jun Avila"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Chaille Godinez",
      "Stacy Walkowitz"
     ],
     "a": [
      "Kathleen Dougherty",
      "Julia Plein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Brittany Hall",
      "Jennifer Sanchez"
     ],
     "a": [
      "Yuki Kim",
      "Katherine Maruyama"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Manny Lai",
      "Steven Maisonet"
     ],
     "a": [
      "Jordan Long",
      "Jun Avila"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Nathan Law",
      "Damien Stahl"
     ],
     "a": [
      "Jim Darcangelo",
      "Lou Frignito"
     ]
    }
   ],
   "subs": [
    "Jun Avila",
    "Jim Darcangelo"
   ]
  },
  {
   "result": "home",
   "week": 1,
   "home": "Dill Dinkers Hatboro",
   "away": "Bounce Philly",
   "time": "2026-02-25T19:30:00",
   "complete": true,
   "homePoints": 651,
   "awayPoints": 611,
   "homeGW": 20,
   "awayGW": 12,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Hannah Nussbaum",
      "Dylan Ashbach"
     ],
     "a": [
      "Julia Sternberg",
      "Bruno Casino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Nahla Bernhardt",
      "Jeff Comer"
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
     "as": 15,
     "h": [
      "Kaylyn Swankoski",
      "Garv Singhal"
     ],
     "a": [
      "Alex Abad",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Cristi Landrigan",
      "Conor Landrigan"
     ],
     "a": [
      "Alyssa Boyle",
      "Zachary Lessner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Rayna Baizman",
      "Kaylyn Swankoski"
     ],
     "a": [
      "Charlotte Healey",
      "Alyssa Boyle"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Nahla Bernhardt",
      "Hannah Nussbaum"
     ],
     "a": [
      "Alex Abad",
      "Robyn Himelstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jeff Comer",
      "Conor Landrigan"
     ],
     "a": [
      "Alexander Tong",
      "William Hayes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Dylan Ashbach",
      "Steven Fernandez"
     ],
     "a": [
      "Bruno Casino",
      "Dustin Rabinowitz"
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
      "Julia Sternberg",
      "Bruno Casino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Nahla Bernhardt",
      "Jeff Comer"
     ],
     "a": [
      "Charlotte Healey",
      "Alexander Tong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Cristi Landrigan",
      "Conor Landrigan"
     ],
     "a": [
      "Robyn Himelstein",
      "William Hayes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Rayna Baizman",
      "Garv Singhal"
     ],
     "a": [
      "Alex Abad",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Nahla Bernhardt",
      "Hannah Nussbaum"
     ],
     "a": [
      "Robyn Himelstein",
      "Julia Sternberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Rayna Baizman",
      "Kaylyn Swankoski"
     ],
     "a": [
      "Alex Abad",
      "Alyssa Boyle"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Garv Singhal",
      "Conor Landrigan"
     ],
     "a": [
      "Alexander Tong",
      "Zachary Lessner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Dylan Ashbach",
      "Steven Fernandez"
     ],
     "a": [
      "Dustin Rabinowitz",
      "William Hayes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Rayna Baizman",
      "Garv Singhal"
     ],
     "a": [
      "Charlotte Healey",
      "Bruno Casino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Cristi Landrigan",
      "Steven Fernandez"
     ],
     "a": [
      "Alyssa Boyle",
      "Zachary Lessner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kaylyn Swankoski",
      "Jeff Comer"
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
     "as": 19,
     "h": [
      "Nahla Bernhardt",
      "Dylan Ashbach"
     ],
     "a": [
      "Robyn Himelstein",
      "William Hayes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Hannah Nussbaum",
      "Kaylyn Swankoski"
     ],
     "a": [
      "Robyn Himelstein",
      "Alyssa Boyle"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Cristi Landrigan",
      "Nahla Bernhardt"
     ],
     "a": [
      "Alex Abad",
      "Charlotte Healey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Garv Singhal",
      "Steven Fernandez"
     ],
     "a": [
      "Alexander Tong",
      "Zachary Lessner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jeff Comer",
      "Conor Landrigan"
     ],
     "a": [
      "Bruno Casino",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Cristi Landrigan",
      "Steven Fernandez"
     ],
     "a": [
      "Charlotte Healey",
      "Bruno Casino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kaylyn Swankoski",
      "Garv Singhal"
     ],
     "a": [
      "Robyn Himelstein",
      "Alexander Tong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 34,
     "as": 32,
     "h": [
      "Rayna Baizman",
      "Conor Landrigan"
     ],
     "a": [
      "Alex Abad",
      "Zachary Lessner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Nahla Bernhardt",
      "Dylan Ashbach"
     ],
     "a": [
      "Julia Sternberg",
      "William Hayes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Hannah Nussbaum",
      "Kaylyn Swankoski"
     ],
     "a": [
      "Charlotte Healey",
      "Julia Sternberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Cristi Landrigan",
      "Rayna Baizman"
     ],
     "a": [
      "Alex Abad",
      "Alyssa Boyle"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jeff Comer",
      "Steven Fernandez"
     ],
     "a": [
      "Alexander Tong",
      "William Hayes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 29,
     "as": 27,
     "h": [
      "Dylan Ashbach",
      "Garv Singhal"
     ],
     "a": [
      "Bruno Casino",
      "Zachary Lessner"
     ]
    }
   ],
   "subs": [
    "Cristi Landrigan",
    "Conor Landrigan"
   ]
  },
  {
   "result": "away",
   "week": 1,
   "home": "Flemington",
   "away": "Pickleball Palace",
   "time": "2026-02-25T19:30:00",
   "complete": true,
   "homePoints": 589,
   "awayPoints": 616,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Lynda Tomaru",
      "Matthew Matro"
     ],
     "a": [
      "Carly Pfeffer",
      "David Lavy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Suzi Battison",
      "Robbie Oddy"
     ],
     "a": [
      "Jessica Pevny",
      "Daniel Kulik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Courtney Greener",
      "Thomas Connolly"
     ],
     "a": [
      "Claire Malone",
      "Christian Fechter"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Susan Ackley",
      "Ross Switkes"
     ],
     "a": [
      "Stephanie Bramer",
      "Keith Shedlock"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Courtney Greener",
      "Melissa Dardani"
     ],
     "a": [
      "Stephanie Bramer",
      "Carly Pfeffer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Suzi Battison",
      "Susan Ackley"
     ],
     "a": [
      "Jessica Pevny",
      "Claire Malone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Ross Switkes",
      "Matthew Matro"
     ],
     "a": [
      "David Lavy",
      "Christian Fechter"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Robbie Oddy",
      "Thomas Connolly"
     ],
     "a": [
      "Daniel Kulik",
      "Patrick Ceccacci"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Suzi Battison",
      "Robbie Oddy"
     ],
     "a": [
      "Claire Malone",
      "Keith Shedlock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lynda Tomaru",
      "Matthew Matro"
     ],
     "a": [
      "Meghan Mediratta",
      "Patrick Ceccacci"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Susan Ackley",
      "Ross Switkes"
     ],
     "a": [
      "Stephanie Bramer",
      "Daniel Kulik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Courtney Greener",
      "Thomas Connolly"
     ],
     "a": [
      "Carly Pfeffer",
      "Christian Fechter"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Suzi Battison",
      "Susan Ackley"
     ],
     "a": [
      "Meghan Mediratta",
      "Stephanie Bramer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 15,
     "h": [
      "Courtney Greener",
      "Melissa Dardani"
     ],
     "a": [
      "Carly Pfeffer",
      "Jessica Pevny"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Robbie Oddy",
      "Thomas Connolly"
     ],
     "a": [
      "David Lavy",
      "Keith Shedlock"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Matthew Matro",
      "Ross Switkes"
     ],
     "a": [
      "Christian Fechter",
      "Daniel Kulik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Susan Ackley",
      "Ross Switkes"
     ],
     "a": [
      "Jessica Pevny",
      "David Lavy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Suzi Battison",
      "Thomas Connolly"
     ],
     "a": [
      "Meghan Mediratta",
      "Christian Fechter"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Lynda Tomaru",
      "Robbie Oddy"
     ],
     "a": [
      "Claire Malone",
      "Patrick Ceccacci"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Courtney Greener",
      "Matthew Matro"
     ],
     "a": [
      "Carly Pfeffer",
      "Keith Shedlock"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Suzi Battison",
      "Courtney Greener"
     ],
     "a": [
      "Claire Malone",
      "Meghan Mediratta"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Susan Ackley",
      "Lynda Tomaru"
     ],
     "a": [
      "Jessica Pevny",
      "Stephanie Bramer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Robbie Oddy",
      "Ross Switkes"
     ],
     "a": [
      "David Lavy",
      "Patrick Ceccacci"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Matthew Matro",
      "Thomas Connolly"
     ],
     "a": [
      "Daniel Kulik",
      "Keith Shedlock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Suzi Battison",
      "Thomas Connolly"
     ],
     "a": [
      "Carly Pfeffer",
      "Daniel Kulik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Susan Ackley",
      "Robbie Oddy"
     ],
     "a": [
      "Claire Malone",
      "Patrick Ceccacci"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Courtney Greener",
      "Matthew Matro"
     ],
     "a": [
      "Meghan Mediratta",
      "Christian Fechter"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Lynda Tomaru",
      "Ross Switkes"
     ],
     "a": [
      "Jessica Pevny",
      "Keith Shedlock"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Susan Ackley",
      "Lynda Tomaru"
     ],
     "a": [
      "Claire Malone",
      "Jessica Pevny"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Suzi Battison",
      "Courtney Greener"
     ],
     "a": [
      "Meghan Mediratta",
      "Stephanie Bramer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Matthew Matro",
      "Thomas Connolly"
     ],
     "a": [
      "Patrick Ceccacci",
      "Keith Shedlock"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Robbie Oddy",
      "Ross Switkes"
     ],
     "a": [
      "David Lavy",
      "Daniel Kulik"
     ]
    }
   ],
   "subs": [
    "Stephanie Bramer",
    "Meghan Mediratta"
   ]
  },
  {
   "result": "home",
   "week": 1,
   "home": "Jersey Devil",
   "away": "Four Seasons",
   "time": "2026-02-25T19:30:00",
   "complete": true,
   "homePoints": 647,
   "awayPoints": 556,
   "homeGW": 22,
   "awayGW": 10,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Michelle Quach",
      "Matthew Chen"
     ],
     "a": [
      "Lauren Mercado",
      "Eric Nguyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Arianna Haresign",
      "Tyler Arsenault"
     ],
     "a": [
      "Tess Fisher",
      "Zyril Carilo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Shelah Wallace",
      "Drew Von Bargen"
     ],
     "a": [
      "Courtney Davis",
      "Shawn Ganow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Michaela Pierznik",
      "Johny Mario"
     ],
     "a": [
      "Roshi Desilva",
      "Justin Bautista"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Rachel Berger",
      "Michelle Quach"
     ],
     "a": [
      "Lauren Mercado",
      "Anh Nguyen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Arianna Haresign",
      "Shelah Wallace"
     ],
     "a": [
      "Courtney Davis",
      "Roshi Desilva"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Tyler Arsenault",
      "Drew Von Bargen"
     ],
     "a": [
      "Zyril Carilo",
      "Shawn Ganow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Johny Mario",
      "Stephen Conger"
     ],
     "a": [
      "Justin Bautista",
      "Eric Nguyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Michaela Pierznik",
      "Matthew Chen"
     ],
     "a": [
      "Roshi Desilva",
      "Justin Bautista"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Arianna Haresign",
      "Drew Von Bargen"
     ],
     "a": [
      "Courtney Davis",
      "Shawn Ganow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Shelah Wallace",
      "Tyler Arsenault"
     ],
     "a": [
      "Tess Fisher",
      "Zyril Carilo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Michelle Quach",
      "Johny Mario"
     ],
     "a": [
      "Anh Nguyen",
      "Eric Nguyen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Michaela Pierznik",
      "Michelle Quach"
     ],
     "a": [
      "Courtney Davis",
      "Tess Fisher"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Arianna Haresign",
      "Rachel Berger"
     ],
     "a": [
      "Anh Nguyen",
      "Lauren Mercado"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Matthew Chen",
      "Drew Von Bargen"
     ],
     "a": [
      "Shawn Ganow",
      "Royce Chan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Johny Mario",
      "Stephen Conger"
     ],
     "a": [
      "Zyril Carilo",
      "Eric Nguyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Michelle Quach",
      "Stephen Conger"
     ],
     "a": [
      "Roshi Desilva",
      "Zyril Carilo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Michaela Pierznik",
      "Drew Von Bargen"
     ],
     "a": [
      "Tess Fisher",
      "Royce Chan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Shelah Wallace",
      "Tyler Arsenault"
     ],
     "a": [
      "Lauren Mercado",
      "Justin Bautista"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Rachel Berger",
      "Johny Mario"
     ],
     "a": [
      "Anh Nguyen",
      "Eric Nguyen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Shelah Wallace",
      "Rachel Berger"
     ],
     "a": [
      "Tess Fisher",
      "Anh Nguyen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Arianna Haresign",
      "Michelle Quach"
     ],
     "a": [
      "Courtney Davis",
      "Roshi Desilva"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Drew Von Bargen",
      "Matthew Chen"
     ],
     "a": [
      "Zyril Carilo",
      "Royce Chan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Tyler Arsenault",
      "Stephen Conger"
     ],
     "a": [
      "Justin Bautista",
      "Shawn Ganow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Rachel Berger",
      "Drew Von Bargen"
     ],
     "a": [
      "Lauren Mercado",
      "Justin Bautista"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Shelah Wallace",
      "Stephen Conger"
     ],
     "a": [
      "Roshi Desilva",
      "Eric Nguyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Michaela Pierznik",
      "Matthew Chen"
     ],
     "a": [
      "Tess Fisher",
      "Shawn Ganow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Arianna Haresign",
      "Tyler Arsenault"
     ],
     "a": [
      "Courtney Davis",
      "Royce Chan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Arianna Haresign",
      "Shelah Wallace"
     ],
     "a": [
      "Courtney Davis",
      "Lauren Mercado"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Rachel Berger",
      "Michaela Pierznik"
     ],
     "a": [
      "Tess Fisher",
      "Roshi Desilva"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Johny Mario",
      "Matthew Chen"
     ],
     "a": [
      "Justin Bautista",
      "Shawn Ganow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Tyler Arsenault",
      "Stephen Conger"
     ],
     "a": [
      "Zyril Carilo",
      "Royce Chan"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 1,
   "home": "Pickleball Kingdom Watchung",
   "away": "Picklr Fair Lawn",
   "time": "2026-02-25T19:30:00",
   "complete": true,
   "homePoints": 633,
   "awayPoints": 570,
   "homeGW": 19,
   "awayGW": 13,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Doryan Amato",
      "James Cannizzaro"
     ],
     "a": [
      "Tin Wai Kwan",
      "Andrew Bernard"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Zoe Ousouljoglou",
      "Will Kayal"
     ],
     "a": [
      "Kara Infante",
      "Phil Chang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Chanda Mccoy",
      "Faraaz Javed"
     ],
     "a": [
      "Caitlyn Moore",
      "Fabian Marcos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Gift Horn",
      "Hruday Vemparala"
     ],
     "a": [
      "Rishina Deleon",
      "Chad Durkin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Gift Horn",
      "Zoe Ousouljoglou"
     ],
     "a": [
      "Caitlyn Moore",
      "Kara Infante"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Chanda Mccoy",
      "Doryan Amato"
     ],
     "a": [
      "Tin Wai Kwan",
      "Rishina Deleon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Stanley Bonczek",
      "Hruday Vemparala"
     ],
     "a": [
      "Chad Durkin",
      "Phil Chang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Faraaz Javed",
      "James Cannizzaro"
     ],
     "a": [
      "Fabian Marcos",
      "Jeff Sul"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Gift Horn",
      "Hruday Vemparala"
     ],
     "a": [
      "Tin Wai Kwan",
      "Phil Chang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Zoe Ousouljoglou",
      "Will Kayal"
     ],
     "a": [
      "Kara Infante",
      "Andrew Bernard"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Chanda Mccoy",
      "Faraaz Javed"
     ],
     "a": [
      "Caitlyn Moore",
      "Marcos Claros"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Doryan Amato",
      "James Cannizzaro"
     ],
     "a": [
      "Rishina Deleon",
      "Fabian Marcos"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Chanda Mccoy",
      "Doryan Amato"
     ],
     "a": [
      "Tin Wai Kwan",
      "Caitlyn Moore"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Gift Horn",
      "Zoe Ousouljoglou"
     ],
     "a": [
      "Kara Infante",
      "Rishina Deleon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Faraaz Javed",
      "James Cannizzaro"
     ],
     "a": [
      "Andrew Bernard",
      "Marcos Claros"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Stanley Bonczek",
      "Will Kayal"
     ],
     "a": [
      "Chad Durkin",
      "Jeff Sul"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Gift Horn",
      "Faraaz Javed"
     ],
     "a": [
      "Tin Wai Kwan",
      "Jeff Sul"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Doryan Amato",
      "Will Kayal"
     ],
     "a": [
      "Kara Infante",
      "Marcos Claros"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Zoe Ousouljoglou",
      "James Cannizzaro"
     ],
     "a": [
      "Caitlyn Moore",
      "Andrew Bernard"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Chanda Mccoy",
      "Stanley Bonczek"
     ],
     "a": [
      "Rishina Deleon",
      "Fabian Marcos"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Doryan Amato",
      "Gift Horn"
     ],
     "a": [
      "Tin Wai Kwan",
      "Rishina Deleon"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Chanda Mccoy",
      "Zoe Ousouljoglou"
     ],
     "a": [
      "Caitlyn Moore",
      "Kara Infante"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Faraaz Javed",
      "Stanley Bonczek"
     ],
     "a": [
      "Marcos Claros",
      "Chad Durkin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "James Cannizzaro",
      "Will Kayal"
     ],
     "a": [
      "Fabian Marcos",
      "Phil Chang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Zoe Ousouljoglou",
      "James Cannizzaro"
     ],
     "a": [
      "Tin Wai Kwan",
      "Andrew Bernard"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Gift Horn",
      "Faraaz Javed"
     ],
     "a": [
      "Kara Infante",
      "Jeff Sul"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Doryan Amato",
      "Will Kayal"
     ],
     "a": [
      "Caitlyn Moore",
      "Marcos Claros"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Chanda Mccoy",
      "Stanley Bonczek"
     ],
     "a": [
      "Rishina Deleon",
      "Chad Durkin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Chanda Mccoy",
      "Zoe Ousouljoglou"
     ],
     "a": [
      "Tin Wai Kwan",
      "Caitlyn Moore"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Gift Horn",
      "Doryan Amato"
     ],
     "a": [
      "Kara Infante",
      "Rishina Deleon"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "James Cannizzaro",
      "Will Kayal"
     ],
     "a": [
      "Jeff Sul",
      "Phil Chang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Faraaz Javed",
      "Stanley Bonczek"
     ],
     "a": [
      "Chad Durkin",
      "Fabian Marcos"
     ]
    }
   ],
   "subs": [
    "Rishina Deleon",
    "Faraaz Javed"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Picklr Fair Lawn",
   "away": "Flemington",
   "time": "2026-03-04T19:00:00",
   "complete": true,
   "homePoints": 620,
   "awayPoints": 614,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Joy Lai",
      "Phil Chang"
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
     "as": 18,
     "h": [
      "Kara Infante",
      "Stephen Mcnamara"
     ],
     "a": [
      "Courtney Greener",
      "Thomas Connolly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Tin Wai Kwan",
      "Jeff Sul"
     ],
     "a": [
      "Melissa Dardani",
      "Matthew Matro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Johanna Wagner",
      "Chad Durkin"
     ],
     "a": [
      "Christine Ferraez",
      "Ross Switkes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Joy Lai",
      "Johanna Wagner"
     ],
     "a": [
      "Suzi Battison",
      "Christine Ferraez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Caitlyn Moore",
      "Tin Wai Kwan"
     ],
     "a": [
      "Courtney Greener",
      "Melissa Dardani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Phil Chang",
      "Chad Durkin"
     ],
     "a": [
      "Robbie Oddy",
      "Thomas Connolly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Marcos Claros",
      "Jeff Sul"
     ],
     "a": [
      "Matthew Matro",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kara Infante",
      "Stephen Mcnamara"
     ],
     "a": [
      "Suzi Battison",
      "Robbie Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Tin Wai Kwan",
      "Jansen Tubo"
     ],
     "a": [
      "Courtney Greener",
      "Matthew Matro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Johanna Wagner",
      "Marcos Claros"
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
     "as": 18,
     "h": [
      "Joy Lai",
      "Phil Chang"
     ],
     "a": [
      "Noelle Ramirez",
      "Thomas Connolly"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Tin Wai Kwan",
      "Caitlyn Moore"
     ],
     "a": [
      "Suzi Battison",
      "Christine Ferraez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kara Infante",
      "Johanna Wagner"
     ],
     "a": [
      "Noelle Ramirez",
      "Melissa Dardani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jansen Tubo",
      "Stephen Mcnamara"
     ],
     "a": [
      "Robbie Oddy",
      "Thomas Connolly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Chad Durkin",
      "Jeff Sul"
     ],
     "a": [
      "Matthew Matro",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Kara Infante",
      "Phil Chang"
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
     "as": 16,
     "h": [
      "Joy Lai",
      "Stephen Mcnamara"
     ],
     "a": [
      "Courtney Greener",
      "Matthew Matro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Caitlyn Moore",
      "Jansen Tubo"
     ],
     "a": [
      "Noelle Ramirez",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Johanna Wagner",
      "Jeff Sul"
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
     "as": 23,
     "h": [
      "Johanna Wagner",
      "Caitlyn Moore"
     ],
     "a": [
      "Suzi Battison",
      "Courtney Greener"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Joy Lai",
      "Kara Infante"
     ],
     "a": [
      "Melissa Dardani",
      "Noelle Ramirez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Marcos Claros",
      "Jansen Tubo"
     ],
     "a": [
      "Robbie Oddy",
      "Matthew Matro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Stephen Mcnamara",
      "Chad Durkin"
     ],
     "a": [
      "Ross Switkes",
      "Thomas Connolly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Tin Wai Kwan",
      "Jeff Sul"
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
     "as": 14,
     "h": [
      "Kara Infante",
      "Phil Chang"
     ],
     "a": [
      "Courtney Greener",
      "Thomas Connolly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Joy Lai",
      "Stephen Mcnamara"
     ],
     "a": [
      "Noelle Ramirez",
      "Robbie Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Caitlyn Moore",
      "Marcos Claros"
     ],
     "a": [
      "Christine Ferraez",
      "Matthew Matro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Joy Lai",
      "Kara Infante"
     ],
     "a": [
      "Suzi Battison",
      "Melissa Dardani"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Johanna Wagner",
      "Caitlyn Moore"
     ],
     "a": [
      "Noelle Ramirez",
      "Christine Ferraez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jansen Tubo",
      "Marcos Claros"
     ],
     "a": [
      "Robbie Oddy",
      "Ross Switkes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Phil Chang",
      "Chad Durkin"
     ],
     "a": [
      "Matthew Matro",
      "Thomas Connolly"
     ]
    }
   ],
   "subs": [
    "Joy Lai",
    "Noelle Ramirez"
   ]
  },
  {
   "result": "away",
   "week": 2,
   "home": "Monroe",
   "away": "Pickleball Palace",
   "time": "2026-03-04T19:00:00",
   "complete": true,
   "homePoints": 596,
   "awayPoints": 630,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Claire Gaston",
      "Maanav Shah"
     ],
     "a": [
      "Stephanie Bramer",
      "David Lavy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 29,
     "as": 27,
     "h": [
      "Cameron Barraco",
      "Chris Bucaro"
     ],
     "a": [
      "Jessica Hendry",
      "Daniel Kulik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Richa Shah",
      "Anthony Ursino"
     ],
     "a": [
      "Claire Malone",
      "Alex Kazdan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Helen Liu",
      "Eric Lin"
     ],
     "a": [
      "Jessica Pevny",
      "Christian Fechter"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Cameron Barraco",
      "Amanda Ksiezopolski"
     ],
     "a": [
      "Claire Malone",
      "Jessica Pevny"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Richa Shah",
      "Claire Gaston"
     ],
     "a": [
      "Jessica Hendry",
      "Stephanie Bramer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Chris Bucaro",
      "Maanav Shah"
     ],
     "a": [
      "Daniel Kulik",
      "David Lavy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Anthony Ursino",
      "Eric Lin"
     ],
     "a": [
      "Alex Kazdan",
      "Christian Fechter"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Cameron Barraco",
      "Chris Bucaro"
     ],
     "a": [
      "Jessica Hendry",
      "David Lavy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Claire Gaston",
      "Maanav Shah"
     ],
     "a": [
      "Claire Malone",
      "Daniel Kulik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Amanda Ksiezopolski",
      "Eric Lin"
     ],
     "a": [
      "Jessica Pevny",
      "Christian Fechter"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Helen Liu",
      "Shreyas Pani"
     ],
     "a": [
      "Stephanie Bramer",
      "Alex Kazdan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Richa Shah",
      "Claire Gaston"
     ],
     "a": [
      "Jessica Hendry",
      "Claire Malone"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Amanda Ksiezopolski",
      "Helen Liu"
     ],
     "a": [
      "Jessica Pevny",
      "Stephanie Bramer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Chris Bucaro",
      "Shreyas Pani"
     ],
     "a": [
      "David Lavy",
      "Alex Kazdan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Maanav Shah",
      "Eric Lin"
     ],
     "a": [
      "Daniel Kulik",
      "Christian Fechter"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Richa Shah",
      "Maanav Shah"
     ],
     "a": [
      "Claire Malone",
      "David Lavy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Cameron Barraco",
      "Eric Lin"
     ],
     "a": [
      "Jessica Hendry",
      "Alex Kazdan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Amanda Ksiezopolski",
      "Shreyas Pani"
     ],
     "a": [
      "Jessica Pevny",
      "Daniel Kulik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Helen Liu",
      "Anthony Ursino"
     ],
     "a": [
      "Stephanie Bramer",
      "Christian Fechter"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Richa Shah",
      "Cameron Barraco"
     ],
     "a": [
      "Jessica Pevny",
      "Stephanie Bramer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Amanda Ksiezopolski",
      "Claire Gaston"
     ],
     "a": [
      "Jessica Hendry",
      "Claire Malone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Chris Bucaro",
      "Shreyas Pani"
     ],
     "a": [
      "David Lavy",
      "Christian Fechter"
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
      "Daniel Kulik",
      "Alex Kazdan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Claire Gaston",
      "Chris Bucaro"
     ],
     "a": [
      "Jessica Pevny",
      "David Lavy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Richa Shah",
      "Maanav Shah"
     ],
     "a": [
      "Claire Malone",
      "Daniel Kulik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Helen Liu",
      "Shreyas Pani"
     ],
     "a": [
      "Jessica Hendry",
      "Alex Kazdan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Cameron Barraco",
      "Anthony Ursino"
     ],
     "a": [
      "Stephanie Bramer",
      "Christian Fechter"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Richa Shah",
      "Cameron Barraco"
     ],
     "a": [
      "Stephanie Bramer",
      "Claire Malone"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Amanda Ksiezopolski",
      "Claire Gaston"
     ],
     "a": [
      "Jessica Pevny",
      "Jessica Hendry"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Maanav Shah",
      "Chris Bucaro"
     ],
     "a": [
      "Daniel Kulik",
      "David Lavy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Anthony Ursino",
      "Shreyas Pani"
     ],
     "a": [
      "Christian Fechter",
      "Alex Kazdan"
     ]
    }
   ],
   "subs": [
    "Stephanie Bramer"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Dill Dinkers Hatboro",
   "away": "Bounce Malvern",
   "time": "2026-03-04T19:30:00",
   "complete": true,
   "homePoints": 669,
   "awayPoints": 497,
   "homeGW": 28,
   "awayGW": 4,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Nahla Bernhardt",
      "Steven Fernandez"
     ],
     "a": [
      "Julia Plein",
      "Nick Meale"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Alyssa Tartaglia",
      "Dylan Ashbach"
     ],
     "a": [
      "Megan Harvey",
      "Shashank Kamdar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Allison Tarnoff",
      "Ozair Ibrahim"
     ],
     "a": [
      "Yuki Kim",
      "Austin Gow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Hannah Nussbaum",
      "Jeff Comer"
     ],
     "a": [
      "Kathleen Dougherty",
      "Matthew Kraft"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Nahla Bernhardt",
      "Alyssa Tartaglia"
     ],
     "a": [
      "Sarah Kline",
      "Kathleen Dougherty"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kaylyn Swankoski",
      "Hannah Nussbaum"
     ],
     "a": [
      "Yuki Kim",
      "Julia Plein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Jeff Comer",
      "Clayton Schmucker"
     ],
     "a": [
      "Matthew Kraft",
      "Casey Jannetta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Dylan Ashbach",
      "Steven Fernandez"
     ],
     "a": [
      "Austin Gow",
      "Shashank Kamdar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Kaylyn Swankoski",
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
     "as": 13,
     "h": [
      "Allison Tarnoff",
      "Ozair Ibrahim"
     ],
     "a": [
      "Megan Harvey",
      "Shashank Kamdar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Alyssa Tartaglia",
      "Steven Fernandez"
     ],
     "a": [
      "Kathleen Dougherty",
      "Austin Gow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Hannah Nussbaum",
      "Jeff Comer"
     ],
     "a": [
      "Julia Plein",
      "Matthew Kraft"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Allison Tarnoff",
      "Kaylyn Swankoski"
     ],
     "a": [
      "Sarah Kline",
      "Megan Harvey"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Hannah Nussbaum",
      "Nahla Bernhardt"
     ],
     "a": [
      "Yuki Kim",
      "Kathleen Dougherty"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Steven Fernandez",
      "Ozair Ibrahim"
     ],
     "a": [
      "Austin Gow",
      "Casey Jannetta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Dylan Ashbach",
      "Clayton Schmucker"
     ],
     "a": [
      "Shashank Kamdar",
      "Nick Meale"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Alyssa Tartaglia",
      "Clayton Schmucker"
     ],
     "a": [
      "Sarah Kline",
      "Casey Jannetta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Allison Tarnoff",
      "Steven Fernandez"
     ],
     "a": [
      "Yuki Kim",
      "Shashank Kamdar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 4,
     "h": [
      "Nahla Bernhardt",
      "Jeff Comer"
     ],
     "a": [
      "Kathleen Dougherty",
      "Austin Gow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kaylyn Swankoski",
      "Dylan Ashbach"
     ],
     "a": [
      "Julia Plein",
      "Matthew Kraft"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Hannah Nussbaum",
      "Kaylyn Swankoski"
     ],
     "a": [
      "Yuki Kim",
      "Julia Plein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Nahla Bernhardt",
      "Alyssa Tartaglia"
     ],
     "a": [
      "Kathleen Dougherty",
      "Megan Harvey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jeff Comer",
      "Clayton Schmucker"
     ],
     "a": [
      "Matthew Kraft",
      "Casey Jannetta"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Dylan Ashbach",
      "Ozair Ibrahim"
     ],
     "a": [
      "Austin Gow",
      "Nick Meale"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kaylyn Swankoski",
      "Clayton Schmucker"
     ],
     "a": [
      "Sarah Kline",
      "Casey Jannetta"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Nahla Bernhardt",
      "Ozair Ibrahim"
     ],
     "a": [
      "Yuki Kim",
      "Shashank Kamdar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Allison Tarnoff",
      "Steven Fernandez"
     ],
     "a": [
      "Julia Plein",
      "Nick Meale"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Alyssa Tartaglia",
      "Dylan Ashbach"
     ],
     "a": [
      "Megan Harvey",
      "Matthew Kraft"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kaylyn Swankoski",
      "Allison Tarnoff"
     ],
     "a": [
      "Sarah Kline",
      "Megan Harvey"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Hannah Nussbaum",
      "Nahla Bernhardt"
     ],
     "a": [
      "Yuki Kim",
      "Kathleen Dougherty"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Jeff Comer",
      "Ozair Ibrahim"
     ],
     "a": [
      "Matthew Kraft",
      "Nick Meale"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Steven Fernandez",
      "Clayton Schmucker"
     ],
     "a": [
      "Shashank Kamdar",
      "Austin Gow"
     ]
    }
   ],
   "subs": [
    "Austin Gow"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Bounce Philly",
   "away": "Four Seasons",
   "time": "2026-03-04T19:30:00",
   "complete": true,
   "homePoints": 650,
   "awayPoints": 523,
   "homeGW": 24,
   "awayGW": 8,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Alex Abad",
      "Dustin Rabinowitz"
     ],
     "a": [
      "Courtney Davis",
      "Zyril Carilo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Charlotte Healey",
      "Alex Boory"
     ],
     "a": [
      "Tess Fisher",
      "Shawn Ganow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Julia Sternberg",
      "William Hayes"
     ],
     "a": [
      "Roshi Desilva",
      "Royce Chan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Robyn Himelstein",
      "Ashwin Korde"
     ],
     "a": [
      "Lauren Mercado",
      "Justin Bautista"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Charlotte Healey",
      "Alyssa Boyle"
     ],
     "a": [
      "Courtney Davis",
      "Roshi Desilva"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Alex Abad",
      "Robyn Himelstein"
     ],
     "a": [
      "Anh Nguyen",
      "Melissa Xu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Mark Kilimnik",
      "Dustin Rabinowitz"
     ],
     "a": [
      "Shawn Ganow",
      "Royce Chan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "William Hayes",
      "Zachary Lessner"
     ],
     "a": [
      "Eric Nguyen",
      "Bryan Nardone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Robyn Himelstein",
      "Ashwin Korde"
     ],
     "a": [
      "Tess Fisher",
      "Zyril Carilo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Julia Sternberg",
      "Mark Kilimnik"
     ],
     "a": [
      "Roshi Desilva",
      "Justin Bautista"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Charlotte Healey",
      "Alex Boory"
     ],
     "a": [
      "Melissa Xu",
      "Bryan Nardone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Alyssa Boyle",
      "Zachary Lessner"
     ],
     "a": [
      "Anh Nguyen",
      "Eric Nguyen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Alyssa Boyle",
      "Julia Sternberg"
     ],
     "a": [
      "Tess Fisher",
      "Roshi Desilva"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Charlotte Healey",
      "Alex Abad"
     ],
     "a": [
      "Courtney Davis",
      "Lauren Mercado"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Ashwin Korde",
      "Alex Boory"
     ],
     "a": [
      "Eric Nguyen",
      "Zyril Carilo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Dustin Rabinowitz",
      "Zachary Lessner"
     ],
     "a": [
      "Shawn Ganow",
      "Royce Chan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Alex Abad",
      "Alex Boory"
     ],
     "a": [
      "Lauren Mercado",
      "Zyril Carilo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Alyssa Boyle",
      "Ashwin Korde"
     ],
     "a": [
      "Tess Fisher",
      "Royce Chan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Robyn Himelstein",
      "Mark Kilimnik"
     ],
     "a": [
      "Roshi Desilva",
      "Justin Bautista"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Julia Sternberg",
      "William Hayes"
     ],
     "a": [
      "Anh Nguyen",
      "Eric Nguyen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Alex Abad",
      "Julia Sternberg"
     ],
     "a": [
      "Melissa Xu",
      "Anh Nguyen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Robyn Himelstein",
      "Charlotte Healey"
     ],
     "a": [
      "Courtney Davis",
      "Roshi Desilva"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Mark Kilimnik",
      "William Hayes"
     ],
     "a": [
      "Royce Chan",
      "Zyril Carilo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Dustin Rabinowitz",
      "Zachary Lessner"
     ],
     "a": [
      "Shawn Ganow",
      "Bryan Nardone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Alex Abad",
      "Mark Kilimnik"
     ],
     "a": [
      "Tess Fisher",
      "Shawn Ganow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Julia Sternberg",
      "Dustin Rabinowitz"
     ],
     "a": [
      "Courtney Davis",
      "Eric Nguyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Alyssa Boyle",
      "Zachary Lessner"
     ],
     "a": [
      "Melissa Xu",
      "Bryan Nardone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Charlotte Healey",
      "William Hayes"
     ],
     "a": [
      "Lauren Mercado",
      "Justin Bautista"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Alex Abad",
      "Robyn Himelstein"
     ],
     "a": [
      "Tess Fisher",
      "Courtney Davis"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Alyssa Boyle",
      "Charlotte Healey"
     ],
     "a": [
      "Lauren Mercado",
      "Anh Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "William Hayes",
      "Alex Boory"
     ],
     "a": [
      "Royce Chan",
      "Justin Bautista"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Dustin Rabinowitz",
      "Ashwin Korde"
     ],
     "a": [
      "Shawn Ganow",
      "Zyril Carilo"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 2,
   "home": "Jersey Devil",
   "away": "ACE",
   "time": "2026-03-04T19:30:00",
   "complete": true,
   "homePoints": 610,
   "awayPoints": 626,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Michelle Quach",
      "Drew Von Bargen"
     ],
     "a": [
      "Stacy Walkowitz",
      "Damien Stahl"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kaia Hoak",
      "Matthew Chen"
     ],
     "a": [
      "Brittany Hall",
      "Vaughn Mcclelland"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Michaela Pierznik",
      "Zach Bowe"
     ],
     "a": [
      "Chaille Godinez",
      "Nathan Law"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Arianna Haresign",
      "Tyler Arsenault"
     ],
     "a": [
      "Annemarie Mccartney",
      "Manny Lai"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Arianna Haresign",
      "Rachel Berger"
     ],
     "a": [
      "Chaille Godinez",
      "Annemarie Mccartney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Michelle Quach",
      "Kaia Hoak"
     ],
     "a": [
      "Katarzyna Clevenger",
      "Stacy Walkowitz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Drew Von Bargen",
      "Tyler Arsenault"
     ],
     "a": [
      "Nathan Law",
      "Manny Lai"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Stephen Conger",
      "Matthew Chen"
     ],
     "a": [
      "Damien Stahl",
      "Vaughn Mcclelland"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Arianna Haresign",
      "Drew Von Bargen"
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
     "as": 19,
     "h": [
      "Rachel Berger",
      "Matthew Chen"
     ],
     "a": [
      "Stacy Walkowitz",
      "Manny Lai"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Michelle Quach",
      "Stephen Conger"
     ],
     "a": [
      "Katarzyna Clevenger",
      "Gog Boonswang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Kaia Hoak",
      "Zach Bowe"
     ],
     "a": [
      "Chaille Godinez",
      "Damien Stahl"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Kaia Hoak",
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
     "hs": 10,
     "as": 21,
     "h": [
      "Michaela Pierznik",
      "Michelle Quach"
     ],
     "a": [
      "Chaille Godinez",
      "Stacy Walkowitz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Zach Bowe",
      "Drew Von Bargen"
     ],
     "a": [
      "Manny Lai",
      "Damien Stahl"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Stephen Conger",
      "Tyler Arsenault"
     ],
     "a": [
      "Vaughn Mcclelland",
      "Nathan Law"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Rachel Berger",
      "Tyler Arsenault"
     ],
     "a": [
      "Annemarie Mccartney",
      "Nathan Law"
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
      "Chaille Godinez",
      "Manny Lai"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Michaela Pierznik",
      "Stephen Conger"
     ],
     "a": [
      "Katarzyna Clevenger",
      "Gog Boonswang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Michelle Quach",
      "Matthew Chen"
     ],
     "a": [
      "Brittany Hall",
      "Vaughn Mcclelland"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Michelle Quach",
      "Rachel Berger"
     ],
     "a": [
      "Chaille Godinez",
      "Katarzyna Clevenger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Michaela Pierznik",
      "Arianna Haresign"
     ],
     "a": [
      "Stacy Walkowitz",
      "Brittany Hall"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Drew Von Bargen",
      "Tyler Arsenault"
     ],
     "a": [
      "Manny Lai",
      "Nathan Law"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Matthew Chen",
      "Stephen Conger"
     ],
     "a": [
      "Vaughn Mcclelland",
      "Gog Boonswang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Arianna Haresign",
      "Drew Von Bargen"
     ],
     "a": [
      "Chaille Godinez",
      "Nathan Law"
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
      "Katarzyna Clevenger",
      "Manny Lai"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Rachel Berger",
      "Matthew Chen"
     ],
     "a": [
      "Annemarie Mccartney",
      "Damien Stahl"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kaia Hoak",
      "Tyler Arsenault"
     ],
     "a": [
      "Stacy Walkowitz",
      "Vaughn Mcclelland"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Rachel Berger",
      "Kaia Hoak"
     ],
     "a": [
      "Chaille Godinez",
      "Annemarie Mccartney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Michaela Pierznik",
      "Michelle Quach"
     ],
     "a": [
      "Brittany Hall",
      "Katarzyna Clevenger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Matthew Chen",
      "Drew Von Bargen"
     ],
     "a": [
      "Manny Lai",
      "Gog Boonswang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Zach Bowe",
      "Tyler Arsenault"
     ],
     "a": [
      "Damien Stahl",
      "Nathan Law"
     ]
    }
   ],
   "subs": [
    "Vaughn Mcclelland"
   ]
  },
  {
   "result": "home",
   "week": 2,
   "home": "Pickle House",
   "away": "Pickleball Kingdom Watchung",
   "time": "2026-03-04T19:30:00",
   "complete": true,
   "homePoints": 677,
   "awayPoints": 579,
   "homeGW": 24,
   "awayGW": 8,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Taylor Hartman",
      "Michael Li"
     ],
     "a": [
      "Katie Lazaar",
      "James Cannizzaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lissa Eagles",
      "Nick Dehmer"
     ],
     "a": [
      "Chanda Mccoy",
      "Fabricio Gaona"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Kerrin Maurer",
      "Chris Damato"
     ],
     "a": [
      "Zoe Ousouljoglou",
      "Zach Knapp"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Emily Babinsky",
      "Sidd Pathare"
     ],
     "a": [
      "Rebecca Chow",
      "Daniel Gallegos"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Emily Babinsky",
      "Yoyo Shen"
     ],
     "a": [
      "Rebecca Chow",
      "Zoe Ousouljoglou"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Taylor Hartman",
      "Lissa Eagles"
     ],
     "a": [
      "Chanda Mccoy",
      "Katie Lazaar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Michael Li",
      "Chris Damato"
     ],
     "a": [
      "Daniel Gallegos",
      "Zach Knapp"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Nick Dehmer",
      "Sidd Pathare"
     ],
     "a": [
      "James Cannizzaro",
      "Fabricio Gaona"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kerrin Maurer",
      "Nick Dehmer"
     ],
     "a": [
      "Katie Lazaar",
      "James Cannizzaro"
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
      "Chanda Mccoy",
      "Fabricio Gaona"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Taylor Hartman",
      "Michael Li"
     ],
     "a": [
      "Zoe Ousouljoglou",
      "Zach Knapp"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Yoyo Shen",
      "Sidd Pathare"
     ],
     "a": [
      "Rebecca Chow",
      "Daniel Gallegos"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Emily Babinsky",
      "Kerrin Maurer"
     ],
     "a": [
      "Rebecca Chow",
      "Zoe Ousouljoglou"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 21,
     "h": [
      "Taylor Hartman",
      "Yoyo Shen"
     ],
     "a": [
      "Chanda Mccoy",
      "Katie Lazaar"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Michael Li",
      "Chris Damato"
     ],
     "a": [
      "Daniel Gallegos",
      "Zach Knapp"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Nick Dehmer",
      "Sidd Pathare"
     ],
     "a": [
      "James Cannizzaro",
      "Fabricio Gaona"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kerrin Maurer",
      "Nick Dehmer"
     ],
     "a": [
      "Katie Lazaar",
      "Daniel Gallegos"
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
      "Chanda Mccoy",
      "Zach Knapp"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Emily Babinsky",
      "Sidd Pathare"
     ],
     "a": [
      "Zoe Ousouljoglou",
      "James Cannizzaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Yoyo Shen",
      "Michael Li"
     ],
     "a": [
      "Rebecca Chow",
      "Fabricio Gaona"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Taylor Hartman",
      "Emily Babinsky"
     ],
     "a": [
      "Rebecca Chow",
      "Katie Lazaar"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kerrin Maurer",
      "Lissa Eagles"
     ],
     "a": [
      "Chanda Mccoy",
      "Zoe Ousouljoglou"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Nick Dehmer",
      "Michael Li"
     ],
     "a": [
      "Daniel Gallegos",
      "Fabricio Gaona"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Chris Damato",
      "Sidd Pathare"
     ],
     "a": [
      "James Cannizzaro",
      "Zach Knapp"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Emily Babinsky",
      "Nick Dehmer"
     ],
     "a": [
      "Katie Lazaar",
      "Daniel Gallegos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kerrin Maurer",
      "Michael Li"
     ],
     "a": [
      "Chanda Mccoy",
      "Zach Knapp"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Yoyo Shen",
      "Chris Damato"
     ],
     "a": [
      "Zoe Ousouljoglou",
      "James Cannizzaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Taylor Hartman",
      "Sidd Pathare"
     ],
     "a": [
      "Rebecca Chow",
      "Fabricio Gaona"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Taylor Hartman",
      "Lissa Eagles"
     ],
     "a": [
      "Rebecca Chow",
      "Katie Lazaar"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kerrin Maurer",
      "Yoyo Shen"
     ],
     "a": [
      "Chanda Mccoy",
      "Zoe Ousouljoglou"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Nick Dehmer",
      "Michael Li"
     ],
     "a": [
      "Daniel Gallegos",
      "Fabricio Gaona"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Chris Damato",
      "Sidd Pathare"
     ],
     "a": [
      "James Cannizzaro",
      "Zach Knapp"
     ]
    }
   ],
   "subs": [
    "Rebecca Chow",
    "Katie Lazaar"
   ]
  },
  {
   "result": "away",
   "week": 3,
   "home": "Monroe",
   "away": "Flemington",
   "time": "2026-03-11T19:00:00",
   "complete": true,
   "homePoints": 555,
   "awayPoints": 639,
   "homeGW": 9,
   "awayGW": 23,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Claire Gaston",
      "Jacob Yandoli"
     ],
     "a": [
      "Suzi Battison",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Richa Shah",
      "Chris Frangipane"
     ],
     "a": [
      "Lynda Tomaru",
      "Varun Prakash"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Amanda Ksiezopolski",
      "Igor Silva"
     ],
     "a": [
      "Courtney Greener",
      "Thomas Connolly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Helen Liu",
      "Anthony Ursino"
     ],
     "a": [
      "Christine Ferraez",
      "Matthew Matro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Claire Gaston",
      "Richa Shah"
     ],
     "a": [
      "Suzi Battison",
      "Christine Ferraez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Amanda Ksiezopolski",
      "Morgan Fishman"
     ],
     "a": [
      "Courtney Greener",
      "Melissa Dardani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jacob Yandoli",
      "Igor Silva"
     ],
     "a": [
      "Thomas Connolly",
      "Varun Prakash"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Eric Lin",
      "Chris Frangipane"
     ],
     "a": [
      "Matthew Matro",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Claire Gaston",
      "Chris Frangipane"
     ],
     "a": [
      "Suzi Battison",
      "Thomas Connolly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Helen Liu",
      "Igor Silva"
     ],
     "a": [
      "Lynda Tomaru",
      "Matthew Matro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Richa Shah",
      "Jacob Yandoli"
     ],
     "a": [
      "Courtney Greener",
      "Varun Prakash"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Morgan Fishman",
      "Eric Lin"
     ],
     "a": [
      "Melissa Dardani",
      "Ross Switkes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Claire Gaston",
      "Morgan Fishman"
     ],
     "a": [
      "Suzi Battison",
      "Christine Ferraez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Amanda Ksiezopolski",
      "Helen Liu"
     ],
     "a": [
      "Melissa Dardani",
      "Lynda Tomaru"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Eric Lin",
      "Anthony Ursino"
     ],
     "a": [
      "Matthew Matro",
      "Ross Switkes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Igor Silva",
      "Jacob Yandoli"
     ],
     "a": [
      "Thomas Connolly",
      "Varun Prakash"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Richa Shah",
      "Eric Lin"
     ],
     "a": [
      "Suzi Battison",
      "Matthew Matro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Amanda Ksiezopolski",
      "Jacob Yandoli"
     ],
     "a": [
      "Courtney Greener",
      "Thomas Connolly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Claire Gaston",
      "Igor Silva"
     ],
     "a": [
      "Lynda Tomaru",
      "Varun Prakash"
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
      "Melissa Dardani",
      "Ross Switkes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Richa Shah",
      "Amanda Ksiezopolski"
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
     "as": 13,
     "h": [
      "Morgan Fishman",
      "Helen Liu"
     ],
     "a": [
      "Lynda Tomaru",
      "Christine Ferraez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Eric Lin",
      "Chris Frangipane"
     ],
     "a": [
      "Matthew Matro",
      "Thomas Connolly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Anthony Ursino",
      "Igor Silva"
     ],
     "a": [
      "Ross Switkes",
      "Varun Prakash"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Claire Gaston",
      "Jacob Yandoli"
     ],
     "a": [
      "Suzi Battison",
      "Thomas Connolly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Helen Liu",
      "Chris Frangipane"
     ],
     "a": [
      "Courtney Greener",
      "Matthew Matro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Amanda Ksiezopolski",
      "Anthony Ursino"
     ],
     "a": [
      "Melissa Dardani",
      "Varun Prakash"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Richa Shah",
      "Eric Lin"
     ],
     "a": [
      "Christine Ferraez",
      "Ross Switkes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Claire Gaston",
      "Richa Shah"
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
     "as": 14,
     "h": [
      "Amanda Ksiezopolski",
      "Morgan Fishman"
     ],
     "a": [
      "Lynda Tomaru",
      "Christine Ferraez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Chris Frangipane",
      "Jacob Yandoli"
     ],
     "a": [
      "Varun Prakash",
      "Ross Switkes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Anthony Ursino",
      "Igor Silva"
     ],
     "a": [
      "Thomas Connolly",
      "Matthew Matro"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 3,
   "home": "Pickleball Palace",
   "away": "Picklr Fair Lawn",
   "time": "2026-03-11T19:30:00",
   "complete": true,
   "homePoints": 581,
   "awayPoints": 608,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jessica Pevny",
      "Alex Kazdan"
     ],
     "a": [
      "Pearly Leung",
      "Andrew Bernard"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Carly Pfeffer",
      "Daniel Kulik"
     ],
     "a": [
      "Kara Infante",
      "Stephen Mcnamara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jessica Hendry",
      "David Lavy"
     ],
     "a": [
      "Johanna Wagner",
      "Chad Durkin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Ashley Georgevich",
      "Patrick Ceccacci"
     ],
     "a": [
      "Aya Haruyama",
      "Fabian Marcos"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Ashley Georgevich",
      "Jenna Irwin"
     ],
     "a": [
      "Johanna Wagner",
      "Pearly Leung"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jessica Pevny",
      "Jessica Hendry"
     ],
     "a": [
      "Aya Haruyama",
      "Tin Wai Kwan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Patrick Ceccacci",
      "Daniel Kulik"
     ],
     "a": [
      "Andrew Bernard",
      "Chad Durkin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "David Lavy",
      "Alex Kazdan"
     ],
     "a": [
      "Stephen Mcnamara",
      "Fabian Marcos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jenna Irwin",
      "David Lavy"
     ],
     "a": [
      "Pearly Leung",
      "Stephen Mcnamara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jessica Hendry",
      "Alex Kazdan"
     ],
     "a": [
      "Tin Wai Kwan",
      "Andrew Bernard"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ashley Georgevich",
      "Daniel Kulik"
     ],
     "a": [
      "Kara Infante",
      "Fabian Marcos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Carly Pfeffer",
      "Patrick Ceccacci"
     ],
     "a": [
      "Johanna Wagner",
      "Chad Durkin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jessica Pevny",
      "Jenna Irwin"
     ],
     "a": [
      "Johanna Wagner",
      "Pearly Leung"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Ashley Georgevich",
      "Carly Pfeffer"
     ],
     "a": [
      "Aya Haruyama",
      "Tin Wai Kwan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "David Lavy",
      "Daniel Kulik"
     ],
     "a": [
      "Stephen Mcnamara",
      "Chad Durkin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Patrick Ceccacci",
      "Alex Kazdan"
     ],
     "a": [
      "Pablo Shin",
      "Andrew Bernard"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jenna Irwin",
      "Alex Kazdan"
     ],
     "a": [
      "Tin Wai Kwan",
      "Andrew Bernard"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Carly Pfeffer",
      "Patrick Ceccacci"
     ],
     "a": [
      "Kara Infante",
      "Pablo Shin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jessica Hendry",
      "Daniel Kulik"
     ],
     "a": [
      "Aya Haruyama",
      "Stephen Mcnamara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ashley Georgevich",
      "David Lavy"
     ],
     "a": [
      "Johanna Wagner",
      "Fabian Marcos"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Jessica Hendry",
      "Jenna Irwin"
     ],
     "a": [
      "Kara Infante",
      "Johanna Wagner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jessica Pevny",
      "Carly Pfeffer"
     ],
     "a": [
      "Aya Haruyama",
      "Pearly Leung"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Daniel Kulik",
      "Alex Kazdan"
     ],
     "a": [
      "Stephen Mcnamara",
      "Chad Durkin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Patrick Ceccacci",
      "David Lavy"
     ],
     "a": [
      "Andrew Bernard",
      "Pablo Shin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jessica Pevny",
      "David Lavy"
     ],
     "a": [
      "Kara Infante",
      "Andrew Bernard"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Ashley Georgevich",
      "Patrick Ceccacci"
     ],
     "a": [
      "Tin Wai Kwan",
      "Pablo Shin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Carly Pfeffer",
      "Alex Kazdan"
     ],
     "a": [
      "Pearly Leung",
      "Stephen Mcnamara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Jenna Irwin",
      "Daniel Kulik"
     ],
     "a": [
      "Aya Haruyama",
      "Fabian Marcos"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Ashley Georgevich",
      "Jessica Hendry"
     ],
     "a": [
      "Aya Haruyama",
      "Pearly Leung"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jessica Pevny",
      "Jenna Irwin"
     ],
     "a": [
      "Kara Infante",
      "Johanna Wagner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "David Lavy",
      "Daniel Kulik"
     ],
     "a": [
      "Andrew Bernard",
      "Chad Durkin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Patrick Ceccacci",
      "Alex Kazdan"
     ],
     "a": [
      "Pablo Shin",
      "Fabian Marcos"
     ]
    }
   ],
   "subs": [
    "Pearly Leung"
   ]
  },
  {
   "result": "home",
   "week": 3,
   "home": "Dill Dinkers Hatboro",
   "away": "Four Seasons",
   "time": "2026-03-11T19:30:00",
   "complete": true,
   "homePoints": 667,
   "awayPoints": 424,
   "homeGW": 29,
   "awayGW": 3,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Kaylyn Swankoski",
      "Jonah Fliegelman"
     ],
     "a": [
      "Courtney Davis",
      "Eric Nguyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Hannah Nussbaum",
      "Kenoa Tio"
     ],
     "a": [
      "Tess Fisher",
      "Zyril Carilo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Rayna Baizman",
      "Andrew Wakefield"
     ],
     "a": [
      "Anh Nguyen",
      "Bryan Nardone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Trang Nguyen (Smile)",
      "Ozair Ibrahim"
     ],
     "a": [
      "Lauren Mercado",
      "James Chau"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Hannah Nussbaum",
      "Kaylyn Swankoski"
     ],
     "a": [
      "Tess Fisher",
      "Courtney Davis"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Cristi Landrigan",
      "Trang Nguyen (Smile)"
     ],
     "a": [
      "Anh Nguyen",
      "Lauren Mercado"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Clayton Schmucker",
      "Ozair Ibrahim"
     ],
     "a": [
      "James Chau",
      "Zyril Carilo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Jonah Fliegelman",
      "Kenoa Tio"
     ],
     "a": [
      "Riguo Zheng",
      "Eric Nguyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 4,
     "h": [
      "Kaylyn Swankoski",
      "Jonah Fliegelman"
     ],
     "a": [
      "Courtney Davis",
      "James Chau"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Trang Nguyen (Smile)",
      "Kenoa Tio"
     ],
     "a": [
      "Tess Fisher",
      "Zyril Carilo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Rayna Baizman",
      "Ozair Ibrahim"
     ],
     "a": [
      "Anh Nguyen",
      "Bryan Nardone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Cristi Landrigan",
      "Andrew Wakefield"
     ],
     "a": [
      "Lauren Mercado",
      "Riguo Zheng"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Hannah Nussbaum",
      "Cristi Landrigan"
     ],
     "a": [
      "Tess Fisher",
      "Courtney Davis"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 4,
     "h": [
      "Kaylyn Swankoski",
      "Rayna Baizman"
     ],
     "a": [
      "Anh Nguyen",
      "Lauren Mercado"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jonah Fliegelman",
      "Andrew Wakefield"
     ],
     "a": [
      "Zyril Carilo",
      "Eric Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Clayton Schmucker",
      "Kenoa Tio"
     ],
     "a": [
      "Bryan Nardone",
      "Riguo Zheng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Rayna Baizman",
      "Clayton Schmucker"
     ],
     "a": [
      "Lauren Mercado",
      "Bryan Nardone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Hannah Nussbaum",
      "Kenoa Tio"
     ],
     "a": [
      "Tess Fisher",
      "James Chau"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Trang Nguyen (Smile)",
      "Ozair Ibrahim"
     ],
     "a": [
      "Anh Nguyen",
      "Riguo Zheng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Kaylyn Swankoski",
      "Andrew Wakefield"
     ],
     "a": [
      "Courtney Davis",
      "Eric Nguyen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Cristi Landrigan",
      "Trang Nguyen (Smile)"
     ],
     "a": [
      "Tess Fisher",
      "Lauren Mercado"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Hannah Nussbaum",
      "Kaylyn Swankoski"
     ],
     "a": [
      "Courtney Davis",
      "Anh Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Jonah Fliegelman",
      "Clayton Schmucker"
     ],
     "a": [
      "Zyril Carilo",
      "James Chau"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Ozair Ibrahim",
      "Kenoa Tio"
     ],
     "a": [
      "Bryan Nardone",
      "Eric Nguyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Cristi Landrigan",
      "Ozair Ibrahim"
     ],
     "a": [
      "Tess Fisher",
      "Eric Nguyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kaylyn Swankoski",
      "Andrew Wakefield"
     ],
     "a": [
      "Courtney Davis",
      "James Chau"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Trang Nguyen (Smile)",
      "Kenoa Tio"
     ],
     "a": [
      "Anh Nguyen",
      "Riguo Zheng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Rayna Baizman",
      "Clayton Schmucker"
     ],
     "a": [
      "Lauren Mercado",
      "Zyril Carilo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Cristi Landrigan",
      "Rayna Baizman"
     ],
     "a": [
      "Tess Fisher",
      "Lauren Mercado"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Trang Nguyen (Smile)",
      "Kaylyn Swankoski"
     ],
     "a": [
      "Courtney Davis",
      "Anh Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Andrew Wakefield",
      "Jonah Fliegelman"
     ],
     "a": [
      "Zyril Carilo",
      "Eric Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Clayton Schmucker",
      "Ozair Ibrahim"
     ],
     "a": [
      "Bryan Nardone",
      "Riguo Zheng"
     ]
    }
   ],
   "subs": [
    "Cristi Landrigan",
    "James Chau",
    "Riguo Zheng"
   ]
  },
  {
   "result": "away",
   "week": 3,
   "home": "Bounce Philly",
   "away": "ACE",
   "time": "2026-03-11T19:30:00",
   "complete": true,
   "homePoints": 597,
   "awayPoints": 655,
   "homeGW": 11,
   "awayGW": 21,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Lindsey Taaffe",
      "Dustin Rabinowitz"
     ],
     "a": [
      "Chaille Godinez",
      "Hector Irizarry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Rachel Alfano",
      "Zachary Lessner"
     ],
     "a": [
      "Annemarie Mccartney",
      "Nathan Law"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Julia Sternberg",
      "Mark Kilimnik"
     ],
     "a": [
      "Stacy Walkowitz",
      "Coby Golinkoff"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Charlotte Healey",
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
     "hs": 24,
     "as": 26,
     "h": [
      "Robyn Himelstein",
      "Rachel Alfano"
     ],
     "a": [
      "Katarzyna Clevenger",
      "Stacy Walkowitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Lindsey Taaffe",
      "Charlotte Healey"
     ],
     "a": [
      "Chaille Godinez",
      "Annemarie Mccartney"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Dustin Rabinowitz",
      "Zachary Lessner"
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
      "Ashwin Korde",
      "Alex Boory"
     ],
     "a": [
      "Hector Irizarry",
      "Jase Volz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Charlotte Healey",
      "Alex Boory"
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
     "as": 18,
     "h": [
      "Julia Sternberg",
      "Dustin Rabinowitz"
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
      "Rachel Alfano",
      "Mark Kilimnik"
     ],
     "a": [
      "Chaille Godinez",
      "Hector Irizarry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Robyn Himelstein",
      "Ashwin Korde"
     ],
     "a": [
      "Katarzyna Clevenger",
      "Jase Volz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lindsey Taaffe",
      "Charlotte Healey"
     ],
     "a": [
      "Stacy Walkowitz",
      "Annemarie Mccartney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Robyn Himelstein",
      "Julia Sternberg"
     ],
     "a": [
      "Jennifer Sanchez",
      "Brittany Hall"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Ashwin Korde",
      "Zachary Lessner"
     ],
     "a": [
      "Coby Golinkoff",
      "Nathan Law"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Mark Kilimnik",
      "Alex Boory"
     ],
     "a": [
      "Hector Irizarry",
      "Manny Lai"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Lindsey Taaffe",
      "Dustin Rabinowitz"
     ],
     "a": [
      "Annemarie Mccartney",
      "Hector Irizarry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Julia Sternberg",
      "Zachary Lessner"
     ],
     "a": [
      "Katarzyna Clevenger",
      "Coby Golinkoff"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Rachel Alfano",
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
     "hs": 21,
     "as": 11,
     "h": [
      "Robyn Himelstein",
      "Mark Kilimnik"
     ],
     "a": [
      "Jennifer Sanchez",
      "Manny Lai"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Rachel Alfano",
      "Charlotte Healey"
     ],
     "a": [
      "Katarzyna Clevenger",
      "Chaille Godinez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lindsey Taaffe",
      "Robyn Himelstein"
     ],
     "a": [
      "Stacy Walkowitz",
      "Brittany Hall"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Mark Kilimnik",
      "Dustin Rabinowitz"
     ],
     "a": [
      "Hector Irizarry",
      "Nathan Law"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ashwin Korde",
      "Zachary Lessner"
     ],
     "a": [
      "Manny Lai",
      "Jase Volz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Lindsey Taaffe",
      "Mark Kilimnik"
     ],
     "a": [
      "Chaille Godinez",
      "Nathan Law"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Julia Sternberg",
      "Alex Boory"
     ],
     "a": [
      "Jennifer Sanchez",
      "Coby Golinkoff"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Charlotte Healey",
      "Dustin Rabinowitz"
     ],
     "a": [
      "Annemarie Mccartney",
      "Jase Volz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Rachel Alfano",
      "Ashwin Korde"
     ],
     "a": [
      "Katarzyna Clevenger",
      "Manny Lai"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Charlotte Healey",
      "Rachel Alfano"
     ],
     "a": [
      "Chaille Godinez",
      "Annemarie Mccartney"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Lindsey Taaffe",
      "Robyn Himelstein"
     ],
     "a": [
      "Jennifer Sanchez",
      "Katarzyna Clevenger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Mark Kilimnik",
      "Zachary Lessner"
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
      "Dustin Rabinowitz",
      "Ashwin Korde"
     ],
     "a": [
      "Coby Golinkoff",
      "Jase Volz"
     ]
    }
   ],
   "subs": [
    "Coby Golinkoff",
    "Lindsey Taaffe"
   ]
  },
  {
   "result": "home",
   "week": 3,
   "home": "Jersey Devil",
   "away": "Bounce Malvern",
   "time": "2026-03-11T19:30:00",
   "complete": true,
   "homePoints": 671,
   "awayPoints": 619,
   "homeGW": 24,
   "awayGW": 8,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Michelle Quach",
      "Zach Bowe"
     ],
     "a": [
      "Tera Baccile",
      "Lou Frignito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Arianna Haresign",
      "Tyler Arsenault"
     ],
     "a": [
      "Yuki Kim",
      "Lukas Choi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Shelah Wallace",
      "Matthew Chen"
     ],
     "a": [
      "Kathleen Dougherty",
      "Matthew Kraft"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Rachel Berger",
      "Drew Von Bargen"
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
     "as": 16,
     "h": [
      "Arianna Haresign",
      "Michelle Quach"
     ],
     "a": [
      "Yuki Kim",
      "Tera Baccile"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Shelah Wallace",
      "Kylie Lupica"
     ],
     "a": [
      "Kathleen Dougherty",
      "Megan Harvey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Johny Mario",
      "Matthew Chen"
     ],
     "a": [
      "Lou Frignito",
      "Matthew Kraft"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tyler Arsenault",
      "Drew Von Bargen"
     ],
     "a": [
      "Lukas Choi",
      "Jordan Long"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Kylie Lupica",
      "Matthew Chen"
     ],
     "a": [
      "Tera Baccile",
      "Lou Frignito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Arianna Haresign",
      "Zach Bowe"
     ],
     "a": [
      "Megan Harvey",
      "Lukas Choi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Shelah Wallace",
      "Tyler Arsenault"
     ],
     "a": [
      "Yuki Kim",
      "Shashank Kamdar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Rachel Berger",
      "Johny Mario"
     ],
     "a": [
      "Kathleen Dougherty",
      "Jordan Long"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Shelah Wallace",
      "Rachel Berger"
     ],
     "a": [
      "Yuki Kim",
      "Tera Baccile"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Michelle Quach",
      "Kylie Lupica"
     ],
     "a": [
      "Kathleen Dougherty",
      "Megan Harvey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Zach Bowe",
      "Tyler Arsenault"
     ],
     "a": [
      "Lou Frignito",
      "Lukas Choi"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Matthew Chen",
      "Johny Mario"
     ],
     "a": [
      "Matthew Kraft",
      "Jordan Long"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Kylie Lupica",
      "Johny Mario"
     ],
     "a": [
      "Megan Harvey",
      "Lou Frignito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Michelle Quach",
      "Tyler Arsenault"
     ],
     "a": [
      "Tera Baccile",
      "Lukas Choi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Arianna Haresign",
      "Drew Von Bargen"
     ],
     "a": [
      "Yuki Kim",
      "Shashank Kamdar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Rachel Berger",
      "Zach Bowe"
     ],
     "a": [
      "Kathleen Dougherty",
      "Matthew Kraft"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Shelah Wallace",
      "Rachel Berger"
     ],
     "a": [
      "Yuki Kim",
      "Megan Harvey"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Arianna Haresign",
      "Kylie Lupica"
     ],
     "a": [
      "Kathleen Dougherty",
      "Tera Baccile"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Drew Von Bargen",
      "Zach Bowe"
     ],
     "a": [
      "Lou Frignito",
      "Matthew Kraft"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Tyler Arsenault",
      "Johny Mario"
     ],
     "a": [
      "Shashank Kamdar",
      "Jordan Long"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Arianna Haresign",
      "Zach Bowe"
     ],
     "a": [
      "Yuki Kim",
      "Lou Frignito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Shelah Wallace",
      "Drew Von Bargen"
     ],
     "a": [
      "Megan Harvey",
      "Lukas Choi"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kylie Lupica",
      "Johny Mario"
     ],
     "a": [
      "Tera Baccile",
      "Shashank Kamdar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Michelle Quach",
      "Matthew Chen"
     ],
     "a": [
      "Kathleen Dougherty",
      "Jordan Long"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Shelah Wallace",
      "Arianna Haresign"
     ],
     "a": [
      "Yuki Kim",
      "Megan Harvey"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Rachel Berger",
      "Michelle Quach"
     ],
     "a": [
      "Kathleen Dougherty",
      "Tera Baccile"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Zach Bowe",
      "Tyler Arsenault"
     ],
     "a": [
      "Shashank Kamdar",
      "Jordan Long"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Matthew Chen",
      "Drew Von Bargen"
     ],
     "a": [
      "Matthew Kraft",
      "Lukas Choi"
     ]
    }
   ],
   "subs": [
    "Tera Baccile"
   ]
  },
  {
   "result": "home",
   "week": 4,
   "home": "Monroe",
   "away": "Picklr Fair Lawn",
   "time": "2026-03-18T19:00:00",
   "complete": true,
   "homePoints": 624,
   "awayPoints": 607,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ruhi Shah",
      "Jacob Yandoli"
     ],
     "a": [
      "Tin Wai Kwan",
      "Pablo Shin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Cameron Barraco",
      "Chris Bucaro"
     ],
     "a": [
      "Kara Infante",
      "Phil Chang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Claire Gaston",
      "Maanav Shah"
     ],
     "a": [
      "Aya Haruyama",
      "Chad Durkin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Richa Shah",
      "Shreyas Pani"
     ],
     "a": [
      "Caitlyn Moore",
      "Jansen Tubo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Claire Gaston",
      "Richa Shah"
     ],
     "a": [
      "Tin Wai Kwan",
      "Katie Lazaar"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Ruhi Shah",
      "Morgan Fishman"
     ],
     "a": [
      "Aya Haruyama",
      "Kara Infante"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Chris Bucaro",
      "Maanav Shah"
     ],
     "a": [
      "Phil Chang",
      "Chad Durkin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Eric Lin",
      "Jacob Yandoli"
     ],
     "a": [
      "Jansen Tubo",
      "Jung Jun"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Claire Gaston",
      "Shreyas Pani"
     ],
     "a": [
      "Caitlyn Moore",
      "Jansen Tubo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Ruhi Shah",
      "Maanav Shah"
     ],
     "a": [
      "Aya Haruyama",
      "Phil Chang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Cameron Barraco",
      "Chris Bucaro"
     ],
     "a": [
      "Katie Lazaar",
      "Jung Jun"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Morgan Fishman",
      "Eric Lin"
     ],
     "a": [
      "Kara Infante",
      "Pablo Shin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Ruhi Shah",
      "Richa Shah"
     ],
     "a": [
      "Tin Wai Kwan",
      "Katie Lazaar"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Morgan Fishman",
      "Cameron Barraco"
     ],
     "a": [
      "Aya Haruyama",
      "Kara Infante"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Chris Bucaro",
      "Eric Lin"
     ],
     "a": [
      "Phil Chang",
      "Chad Durkin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Shreyas Pani",
      "Jacob Yandoli"
     ],
     "a": [
      "Jansen Tubo",
      "Jung Jun"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Claire Gaston",
      "Jacob Yandoli"
     ],
     "a": [
      "Caitlyn Moore",
      "Chad Durkin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Morgan Fishman",
      "Shreyas Pani"
     ],
     "a": [
      "Kara Infante",
      "Jansen Tubo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ruhi Shah",
      "Eric Lin"
     ],
     "a": [
      "Tin Wai Kwan",
      "Pablo Shin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Richa Shah",
      "Maanav Shah"
     ],
     "a": [
      "Aya Haruyama",
      "Phil Chang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Ruhi Shah",
      "Cameron Barraco"
     ],
     "a": [
      "Caitlyn Moore",
      "Katie Lazaar"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Richa Shah",
      "Claire Gaston"
     ],
     "a": [
      "Tin Wai Kwan",
      "Aya Haruyama"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Chris Bucaro",
      "Jacob Yandoli"
     ],
     "a": [
      "Jung Jun",
      "Chad Durkin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Shreyas Pani",
      "Maanav Shah"
     ],
     "a": [
      "Pablo Shin",
      "Jansen Tubo"
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
      "Katie Lazaar",
      "Jung Jun"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Richa Shah",
      "Chris Bucaro"
     ],
     "a": [
      "Aya Haruyama",
      "Chad Durkin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Cameron Barraco",
      "Jacob Yandoli"
     ],
     "a": [
      "Kara Infante",
      "Jansen Tubo"
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
      "Caitlyn Moore",
      "Pablo Shin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Morgan Fishman",
      "Cameron Barraco"
     ],
     "a": [
      "Katie Lazaar",
      "Caitlyn Moore"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Ruhi Shah",
      "Claire Gaston"
     ],
     "a": [
      "Tin Wai Kwan",
      "Aya Haruyama"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Chris Bucaro",
      "Maanav Shah"
     ],
     "a": [
      "Pablo Shin",
      "Chad Durkin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Shreyas Pani",
      "Eric Lin"
     ],
     "a": [
      "Phil Chang",
      "Jung Jun"
     ]
    }
   ],
   "subs": [
    "Jung Jun",
    "Katie Lazaar"
   ]
  },
  {
   "result": "away",
   "week": 4,
   "home": "Four Seasons",
   "away": "ACE",
   "time": "2026-03-18T19:30:00",
   "complete": true,
   "homePoints": 598,
   "awayPoints": 605,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Melissa Xu",
      "Royce Chan"
     ],
     "a": [
      "Annemarie Mccartney",
      "Hector Irizarry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Roshi Desilva",
      "Justin Bautista"
     ],
     "a": [
      "Brittany Hall",
      "Steven Maisonet"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Courtney Davis",
      "Eric Nguyen"
     ],
     "a": [
      "Kaley Lai",
      "Manny Lai"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Tess Fisher",
      "Zyril Carilo"
     ],
     "a": [
      "Kate Siedell",
      "Damien Stahl"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Tess Fisher",
      "Courtney Davis"
     ],
     "a": [
      "Annemarie Mccartney",
      "Kaley Lai"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Francesca Dicolandrea",
      "Roshi Desilva"
     ],
     "a": [
      "Kate Siedell",
      "Danielle Bernero"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Royce Chan",
      "Justin Bautista"
     ],
     "a": [
      "Hector Irizarry",
      "Jase Volz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Bryan Nardone",
      "Eric Nguyen"
     ],
     "a": [
      "Manny Lai",
      "Steven Maisonet"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Melissa Xu",
      "Bryan Nardone"
     ],
     "a": [
      "Brittany Hall",
      "Hector Irizarry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Tess Fisher",
      "Royce Chan"
     ],
     "a": [
      "Danielle Bernero",
      "Damien Stahl"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Francesca Dicolandrea",
      "Justin Bautista"
     ],
     "a": [
      "Annemarie Mccartney",
      "Jase Volz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Roshi Desilva",
      "Zyril Carilo"
     ],
     "a": [
      "Kaley Lai",
      "Manny Lai"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Francesca Dicolandrea",
      "Roshi Desilva"
     ],
     "a": [
      "Annemarie Mccartney",
      "Brittany Hall"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Tess Fisher",
      "Courtney Davis"
     ],
     "a": [
      "Danielle Bernero",
      "Kaley Lai"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Royce Chan",
      "Zyril Carilo"
     ],
     "a": [
      "Damien Stahl",
      "Jase Volz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Bryan Nardone",
      "Eric Nguyen"
     ],
     "a": [
      "Hector Irizarry",
      "Steven Maisonet"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Melissa Xu",
      "Bryan Nardone"
     ],
     "a": [
      "Annemarie Mccartney",
      "Hector Irizarry"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Francesca Dicolandrea",
      "Justin Bautista"
     ],
     "a": [
      "Danielle Bernero",
      "Steven Maisonet"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Tess Fisher",
      "Royce Chan"
     ],
     "a": [
      "Brittany Hall",
      "Jase Volz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Courtney Davis",
      "Zyril Carilo"
     ],
     "a": [
      "Kate Siedell",
      "Manny Lai"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Tess Fisher",
      "Francesca Dicolandrea"
     ],
     "a": [
      "Annemarie Mccartney",
      "Danielle Bernero"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Courtney Davis",
      "Roshi Desilva"
     ],
     "a": [
      "Brittany Hall",
      "Kate Siedell"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Zyril Carilo",
      "Eric Nguyen"
     ],
     "a": [
      "Manny Lai",
      "Jase Volz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Royce Chan",
      "Justin Bautista"
     ],
     "a": [
      "Hector Irizarry",
      "Damien Stahl"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Roshi Desilva",
      "Justin Bautista"
     ],
     "a": [
      "Brittany Hall",
      "Steven Maisonet"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Melissa Xu",
      "Eric Nguyen"
     ],
     "a": [
      "Annemarie Mccartney",
      "Manny Lai"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Tess Fisher",
      "Zyril Carilo"
     ],
     "a": [
      "Kate Siedell",
      "Jase Volz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Francesca Dicolandrea",
      "Royce Chan"
     ],
     "a": [
      "Danielle Bernero",
      "Damien Stahl"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Tess Fisher",
      "Francesca Dicolandrea"
     ],
     "a": [
      "Annemarie Mccartney",
      "Brittany Hall"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Courtney Davis",
      "Roshi Desilva"
     ],
     "a": [
      "Kate Siedell",
      "Danielle Bernero"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Justin Bautista",
      "Eric Nguyen"
     ],
     "a": [
      "Manny Lai",
      "Damien Stahl"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Royce Chan",
      "Zyril Carilo"
     ],
     "a": [
      "Jase Volz",
      "Steven Maisonet"
     ]
    }
   ],
   "subs": [
    "Kate Siedell",
    "Francesca Dicolandrea",
    "Kaley Lai"
   ]
  },
  {
   "result": "away",
   "week": 4,
   "home": "Flemington",
   "away": "Pickleball Kingdom Watchung",
   "time": "2026-03-18T19:30:00",
   "complete": true,
   "homePoints": 549,
   "awayPoints": 631,
   "homeGW": 11,
   "awayGW": 21,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Aimee Castellano",
      "Ken Velarde"
     ],
     "a": [
      "Doryan Amato",
      "James Cannizzaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 1,
     "as": 0,
     "h": [
      "Suzi Battison",
      "Robbie Oddy"
     ],
     "a": [
      "Zoe Ousouljoglou",
      "Will Kayal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Susan Ackley",
      "Ross Switkes"
     ],
     "a": [
      "Lily Yip",
      "Gautham Bondugula"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lynda Tomaru",
      "Thomas Connolly"
     ],
     "a": [
      "Chanda Mccoy",
      "Daniel Gallegos"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Christine Ferraez",
      "Susan Ackley"
     ],
     "a": [
      "Doryan Amato",
      "Chanda Mccoy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Aimee Castellano",
      "Lynda Tomaru"
     ],
     "a": [
      "Lily Yip",
      "Zoe Ousouljoglou"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Ross Switkes",
      "Ken Velarde"
     ],
     "a": [
      "Will Kayal",
      "James Cannizzaro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Robbie Oddy",
      "Thomas Connolly"
     ],
     "a": [
      "Daniel Gallegos",
      "Gautham Bondugula"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Suzi Battison",
      "Thomas Connolly"
     ],
     "a": [
      "Doryan Amato",
      "James Cannizzaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Susan Ackley",
      "Ross Switkes"
     ],
     "a": [
      "Zoe Ousouljoglou",
      "Will Kayal"
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
      "Lily Yip",
      "Gautham Bondugula"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Christine Ferraez",
      "Ken Velarde"
     ],
     "a": [
      "Chanda Mccoy",
      "Daniel Gallegos"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Christine Ferraez",
      "Melissa Dardani"
     ],
     "a": [
      "Doryan Amato",
      "Chanda Mccoy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Lynda Tomaru",
      "Aimee Castellano"
     ],
     "a": [
      "Lily Yip",
      "Zoe Ousouljoglou"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ross Switkes",
      "Ken Velarde"
     ],
     "a": [
      "Will Kayal",
      "James Cannizzaro"
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
      "Daniel Gallegos",
      "Gautham Bondugula"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Suzi Battison",
      "Robbie Oddy"
     ],
     "a": [
      "Doryan Amato",
      "Will Kayal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lynda Tomaru",
      "Thomas Connolly"
     ],
     "a": [
      "Zoe Ousouljoglou",
      "James Cannizzaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Susan Ackley",
      "Ken Velarde"
     ],
     "a": [
      "Chanda Mccoy",
      "Gautham Bondugula"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Melissa Dardani",
      "Ross Switkes"
     ],
     "a": [
      "Lily Yip",
      "Daniel Gallegos"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Christine Ferraez",
      "Aimee Castellano"
     ],
     "a": [
      "Doryan Amato",
      "Lily Yip"
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
      "Chanda Mccoy",
      "Zoe Ousouljoglou"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Robbie Oddy",
      "Ken Velarde"
     ],
     "a": [
      "Will Kayal",
      "Gautham Bondugula"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Thomas Connolly",
      "Ross Switkes"
     ],
     "a": [
      "Daniel Gallegos",
      "James Cannizzaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lynda Tomaru",
      "Ross Switkes"
     ],
     "a": [
      "Doryan Amato",
      "Will Kayal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Melissa Dardani",
      "Robbie Oddy"
     ],
     "a": [
      "Zoe Ousouljoglou",
      "James Cannizzaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Susan Ackley",
      "Ken Velarde"
     ],
     "a": [
      "Chanda Mccoy",
      "Gautham Bondugula"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Suzi Battison",
      "Thomas Connolly"
     ],
     "a": [
      "Lily Yip",
      "Daniel Gallegos"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Suzi Battison",
      "Melissa Dardani"
     ],
     "a": [
      "Doryan Amato",
      "Lily Yip"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Christine Ferraez",
      "Aimee Castellano"
     ],
     "a": [
      "Chanda Mccoy",
      "Zoe Ousouljoglou"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Robbie Oddy",
      "Ken Velarde"
     ],
     "a": [
      "Will Kayal",
      "Gautham Bondugula"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Thomas Connolly",
      "Ross Switkes"
     ],
     "a": [
      "Daniel Gallegos",
      "James Cannizzaro"
     ]
    }
   ],
   "subs": [
    "Ken Velarde"
   ]
  },
  {
   "result": "away",
   "week": 4,
   "home": "Bounce Malvern",
   "away": "Bounce Philly",
   "time": "2026-03-18T19:30:00",
   "complete": true,
   "homePoints": 573,
   "awayPoints": 633,
   "homeGW": 10,
   "awayGW": 22,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Yuki Kim",
      "Lou Frignito"
     ],
     "a": [
      "Alyssa Boyle",
      "Zachary Lessner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Julia Plein",
      "Jordan Long"
     ],
     "a": [
      "Alex Abad",
      "William Hayes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Katherine Maruyama",
      "Lukas Choi"
     ],
     "a": [
      "Charlotte Healey",
      "Alexander Tong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Kathleen Dougherty",
      "Nick Meale"
     ],
     "a": [
      "Rachel Alfano",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Yuki Kim",
      "Kathleen Dougherty"
     ],
     "a": [
      "Charlotte Healey",
      "Alex Abad"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Katherine Maruyama",
      "Sarah Kline"
     ],
     "a": [
      "Julia Sternberg",
      "Rachel Alfano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Shashank Kamdar",
      "Nick Meale"
     ],
     "a": [
      "Mark Kilimnik",
      "Alexander Tong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Lou Frignito",
      "Lukas Choi"
     ],
     "a": [
      "Dustin Rabinowitz",
      "William Hayes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Julia Plein",
      "Nick Meale"
     ],
     "a": [
      "Rachel Alfano",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Yuki Kim",
      "Shashank Kamdar"
     ],
     "a": [
      "Charlotte Healey",
      "William Hayes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Kathleen Dougherty",
      "Lukas Choi"
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
     "as": 14,
     "h": [
      "Sarah Kline",
      "Jordan Long"
     ],
     "a": [
      "Julia Sternberg",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Kathleen Dougherty",
      "Julia Plein"
     ],
     "a": [
      "Alex Abad",
      "Julia Sternberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Katherine Maruyama",
      "Sarah Kline"
     ],
     "a": [
      "Rachel Alfano",
      "Alyssa Boyle"
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
      "Mark Kilimnik",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lukas Choi",
      "Jordan Long"
     ],
     "a": [
      "Alexander Tong",
      "Zachary Lessner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Katherine Maruyama",
      "Shashank Kamdar"
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
     "as": 18,
     "h": [
      "Yuki Kim",
      "Lou Frignito"
     ],
     "a": [
      "Charlotte Healey",
      "Zachary Lessner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Kathleen Dougherty",
      "Lukas Choi"
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
     "as": 13,
     "h": [
      "Sarah Kline",
      "Jordan Long"
     ],
     "a": [
      "Alex Abad",
      "Alexander Tong"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Julia Plein",
      "Sarah Kline"
     ],
     "a": [
      "Rachel Alfano",
      "Alex Abad"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Yuki Kim",
      "Kathleen Dougherty"
     ],
     "a": [
      "Charlotte Healey",
      "Alyssa Boyle"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lou Frignito",
      "Lukas Choi"
     ],
     "a": [
      "Alexander Tong",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Shashank Kamdar",
      "Nick Meale"
     ],
     "a": [
      "William Hayes",
      "Zachary Lessner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Julia Plein",
      "Jordan Long"
     ],
     "a": [
      "Alex Abad",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Katherine Maruyama",
      "Lukas Choi"
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
     "as": 13,
     "h": [
      "Yuki Kim",
      "Shashank Kamdar"
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
     "as": 18,
     "h": [
      "Sarah Kline",
      "Lou Frignito"
     ],
     "a": [
      "Alyssa Boyle",
      "William Hayes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Yuki Kim",
      "Katherine Maruyama"
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
     "as": 13,
     "h": [
      "Julia Plein",
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
     "as": 17,
     "h": [
      "Lou Frignito",
      "Nick Meale"
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
      "Shashank Kamdar",
      "Jordan Long"
     ],
     "a": [
      "Alexander Tong",
      "William Hayes"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 4,
   "home": "Dill Dinkers Hatboro",
   "away": "Jersey Devil",
   "time": "2026-03-18T19:30:00",
   "complete": true,
   "homePoints": 662,
   "awayPoints": 595,
   "homeGW": 22,
   "awayGW": 10,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kaylyn Swankoski",
      "Kenoa Tio"
     ],
     "a": [
      "Michaela Pierznik",
      "Zach Bowe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Lindsey Thoeng",
      "Andrew Wakefield"
     ],
     "a": [
      "Arianna Haresign",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Alyssa Tartaglia",
      "Dylan Ashbach"
     ],
     "a": [
      "Shelah Wallace",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Allison Tarnoff",
      "Jonah Fliegelman"
     ],
     "a": [
      "Kaia Hoak",
      "Johny Mario"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lindsey Thoeng",
      "Allison Tarnoff"
     ],
     "a": [
      "Shelah Wallace",
      "Arianna Haresign"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Rayna Baizman",
      "Kaylyn Swankoski"
     ],
     "a": [
      "Rachel Berger",
      "Michaela Pierznik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 29,
     "as": 27,
     "h": [
      "Jonah Fliegelman",
      "Clayton Schmucker"
     ],
     "a": [
      "Tyler Arsenault",
      "Johny Mario"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Dylan Ashbach",
      "Andrew Wakefield"
     ],
     "a": [
      "Drew Von Bargen",
      "Zach Bowe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Lindsey Thoeng",
      "Andrew Wakefield"
     ],
     "a": [
      "Shelah Wallace",
      "Zach Bowe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Rayna Baizman",
      "Clayton Schmucker"
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
     "as": 17,
     "h": [
      "Kaylyn Swankoski",
      "Dylan Ashbach"
     ],
     "a": [
      "Arianna Haresign",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Alyssa Tartaglia",
      "Kenoa Tio"
     ],
     "a": [
      "Kaia Hoak",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Lindsey Thoeng",
      "Allison Tarnoff"
     ],
     "a": [
      "Shelah Wallace",
      "Kaia Hoak"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Rayna Baizman",
      "Kaylyn Swankoski"
     ],
     "a": [
      "Rachel Berger",
      "Michaela Pierznik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Dylan Ashbach",
      "Clayton Schmucker"
     ],
     "a": [
      "Johny Mario",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jonah Fliegelman",
      "Andrew Wakefield"
     ],
     "a": [
      "Drew Von Bargen",
      "Zach Bowe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kaylyn Swankoski",
      "Dylan Ashbach"
     ],
     "a": [
      "Shelah Wallace",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Alyssa Tartaglia",
      "Jonah Fliegelman"
     ],
     "a": [
      "Kaia Hoak",
      "Johny Mario"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Allison Tarnoff",
      "Kenoa Tio"
     ],
     "a": [
      "Michaela Pierznik",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Lindsey Thoeng",
      "Clayton Schmucker"
     ],
     "a": [
      "Arianna Haresign",
      "Zach Bowe"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lindsey Thoeng",
      "Rayna Baizman"
     ],
     "a": [
      "Rachel Berger",
      "Arianna Haresign"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Kaylyn Swankoski",
      "Alyssa Tartaglia"
     ],
     "a": [
      "Kaia Hoak",
      "Michaela Pierznik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Dylan Ashbach",
      "Kenoa Tio"
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
      "Andrew Wakefield",
      "Clayton Schmucker"
     ],
     "a": [
      "Johny Mario",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Kaylyn Swankoski",
      "Andrew Wakefield"
     ],
     "a": [
      "Rachel Berger",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lindsey Thoeng",
      "Dylan Ashbach"
     ],
     "a": [
      "Arianna Haresign",
      "Zach Bowe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Rayna Baizman",
      "Kenoa Tio"
     ],
     "a": [
      "Shelah Wallace",
      "Johny Mario"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Alyssa Tartaglia",
      "Jonah Fliegelman"
     ],
     "a": [
      "Kaia Hoak",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lindsey Thoeng",
      "Rayna Baizman"
     ],
     "a": [
      "Shelah Wallace",
      "Michaela Pierznik"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kaylyn Swankoski",
      "Allison Tarnoff"
     ],
     "a": [
      "Arianna Haresign",
      "Rachel Berger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Dylan Ashbach",
      "Jonah Fliegelman"
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
     "as": 15,
     "h": [
      "Kenoa Tio",
      "Clayton Schmucker"
     ],
     "a": [
      "Johny Mario",
      "Drew Von Bargen"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 4,
   "home": "Pickleball Palace",
   "away": "Pickle House",
   "time": "2026-03-18T19:30:00",
   "complete": true,
   "homePoints": 616,
   "awayPoints": 587,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jessica Hendry",
      "Christian Fechter"
     ],
     "a": [
      "Nicole Devine",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jessica Pevny",
      "Dan Presuto"
     ],
     "a": [
      "Lissa Eagles",
      "Kishan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Carly Pfeffer",
      "Patrick Ceccacci"
     ],
     "a": [
      "Emily Babinsky",
      "Jaco De Waal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jenna Irwin",
      "Alex Kazdan"
     ],
     "a": [
      "Noelle Ramirez",
      "Deepak Sunku"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jessica Hendry",
      "Jenna Irwin"
     ],
     "a": [
      "Emily Babinsky",
      "Noelle Ramirez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jessica Pevny",
      "Carly Pfeffer"
     ],
     "a": [
      "Nicole Devine",
      "Lissa Eagles"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Christian Fechter",
      "Alex Kazdan"
     ],
     "a": [
      "Chris Damato",
      "Gopi Narayanan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "David Lavy",
      "Dan Presuto"
     ],
     "a": [
      "Kishan Shah",
      "Deepak Sunku"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jessica Hendry",
      "David Lavy"
     ],
     "a": [
      "Nicole Devine",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Meghan Mediratta",
      "Christian Fechter"
     ],
     "a": [
      "Lissa Eagles",
      "Deepak Sunku"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Carly Pfeffer",
      "Alex Kazdan"
     ],
     "a": [
      "Emily Babinsky",
      "Gopi Narayanan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jessica Pevny",
      "Patrick Ceccacci"
     ],
     "a": [
      "Noelle Ramirez",
      "Kishan Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Meghan Mediratta",
      "Jenna Irwin"
     ],
     "a": [
      "Emily Babinsky",
      "Noelle Ramirez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jessica Pevny",
      "Carly Pfeffer"
     ],
     "a": [
      "Lissa Eagles",
      "Nicole Devine"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Dan Presuto",
      "Patrick Ceccacci"
     ],
     "a": [
      "Gopi Narayanan",
      "Jaco De Waal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "David Lavy",
      "Christian Fechter"
     ],
     "a": [
      "Deepak Sunku",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Meghan Mediratta",
      "Alex Kazdan"
     ],
     "a": [
      "Emily Babinsky",
      "Jaco De Waal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jessica Pevny",
      "Dan Presuto"
     ],
     "a": [
      "Lissa Eagles",
      "Gopi Narayanan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jenna Irwin",
      "David Lavy"
     ],
     "a": [
      "Noelle Ramirez",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jessica Hendry",
      "Patrick Ceccacci"
     ],
     "a": [
      "Nicole Devine",
      "Kishan Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Carly Pfeffer",
      "Meghan Mediratta"
     ],
     "a": [
      "Emily Babinsky",
      "Lissa Eagles"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jessica Hendry",
      "Jenna Irwin"
     ],
     "a": [
      "Noelle Ramirez",
      "Nicole Devine"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Dan Presuto",
      "David Lavy"
     ],
     "a": [
      "Deepak Sunku",
      "Jaco De Waal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Christian Fechter",
      "Patrick Ceccacci"
     ],
     "a": [
      "Chris Damato",
      "Kishan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jenna Irwin",
      "Christian Fechter"
     ],
     "a": [
      "Nicole Devine",
      "Jaco De Waal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jessica Hendry",
      "Dan Presuto"
     ],
     "a": [
      "Noelle Ramirez",
      "Kishan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Meghan Mediratta",
      "Alex Kazdan"
     ],
     "a": [
      "Lissa Eagles",
      "Gopi Narayanan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Carly Pfeffer",
      "David Lavy"
     ],
     "a": [
      "Emily Babinsky",
      "Chris Damato"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jessica Hendry",
      "Meghan Mediratta"
     ],
     "a": [
      "Noelle Ramirez",
      "Nicole Devine"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jessica Pevny",
      "Jenna Irwin"
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
     "as": 15,
     "h": [
      "Christian Fechter",
      "David Lavy"
     ],
     "a": [
      "Deepak Sunku",
      "Gopi Narayanan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Patrick Ceccacci",
      "Alex Kazdan"
     ],
     "a": [
      "Kishan Shah",
      "Jaco De Waal"
     ]
    }
   ],
   "subs": [
    "Dan Presuto",
    "Meghan Mediratta",
    "Nicole Devine",
    "Gopi Narayanan",
    "Noelle Ramirez",
    "Deepak Sunku"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "Picklr Fair Lawn",
   "away": "Pickleball Kingdom Watchung",
   "time": "2026-03-25T19:00:00",
   "complete": true,
   "homePoints": 655,
   "awayPoints": 559,
   "homeGW": 23,
   "awayGW": 9,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Aya Haruyama",
      "Stephen Mcnamara"
     ],
     "a": [
      "Doryan Amato",
      "Will Kayal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Johanna Wagner",
      "Phil Chang"
     ],
     "a": [
      "Zoe Ousouljoglou",
      "James Cannizzaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Caitlyn Moore",
      "Jeff Sul"
     ],
     "a": [
      "Chanda Mccoy",
      "Fabricio Gaona"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Tin Wai Kwan",
      "Fabian Marcos"
     ],
     "a": [
      "Elisangela Harrington",
      "Daniel Gallegos"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Johanna Wagner",
      "Aya Haruyama"
     ],
     "a": [
      "Doryan Amato",
      "Zoe Ousouljoglou"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Tin Wai Kwan",
      "Caitlyn Moore"
     ],
     "a": [
      "Chanda Mccoy",
      "Elisangela Harrington"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Stephen Mcnamara",
      "Fabian Marcos"
     ],
     "a": [
      "Will Kayal",
      "Daniel Gallegos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Phil Chang",
      "Marcos Claros"
     ],
     "a": [
      "Fabricio Gaona",
      "James Cannizzaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Aya Haruyama",
      "Stephen Mcnamara"
     ],
     "a": [
      "Doryan Amato",
      "Will Kayal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Caitlyn Moore",
      "Phil Chang"
     ],
     "a": [
      "Zoe Ousouljoglou",
      "James Cannizzaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Johanna Wagner",
      "Marcos Claros"
     ],
     "a": [
      "Chanda Mccoy",
      "Fabricio Gaona"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Tin Wai Kwan",
      "Jeff Sul"
     ],
     "a": [
      "Elisangela Harrington",
      "Daniel Gallegos"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Johanna Wagner",
      "Aya Haruyama"
     ],
     "a": [
      "Doryan Amato",
      "Zoe Ousouljoglou"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Tin Wai Kwan",
      "Chrissy Sandella"
     ],
     "a": [
      "Chanda Mccoy",
      "Elisangela Harrington"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Stephen Mcnamara",
      "Fabian Marcos"
     ],
     "a": [
      "Will Kayal",
      "Daniel Gallegos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jeff Sul",
      "Marcos Claros"
     ],
     "a": [
      "Fabricio Gaona",
      "James Cannizzaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 29,
     "as": 27,
     "h": [
      "Caitlyn Moore",
      "Phil Chang"
     ],
     "a": [
      "Doryan Amato",
      "James Cannizzaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Aya Haruyama",
      "Fabian Marcos"
     ],
     "a": [
      "Zoe Ousouljoglou",
      "Will Kayal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Tin Wai Kwan",
      "Jeff Sul"
     ],
     "a": [
      "Chanda Mccoy",
      "Daniel Gallegos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Chrissy Sandella",
      "Marcos Claros"
     ],
     "a": [
      "Elisangela Harrington",
      "Fabricio Gaona"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Caitlyn Moore",
      "Chrissy Sandella"
     ],
     "a": [
      "Doryan Amato",
      "Chanda Mccoy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Johanna Wagner",
      "Tin Wai Kwan"
     ],
     "a": [
      "Elisangela Harrington",
      "Zoe Ousouljoglou"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Fabian Marcos",
      "Jeff Sul"
     ],
     "a": [
      "Will Kayal",
      "James Cannizzaro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Marcos Claros",
      "Stephen Mcnamara"
     ],
     "a": [
      "Daniel Gallegos",
      "Fabricio Gaona"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Caitlyn Moore",
      "Stephen Mcnamara"
     ],
     "a": [
      "Doryan Amato",
      "James Cannizzaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Johanna Wagner",
      "Phil Chang"
     ],
     "a": [
      "Zoe Ousouljoglou",
      "Will Kayal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Aya Haruyama",
      "Jeff Sul"
     ],
     "a": [
      "Chanda Mccoy",
      "Daniel Gallegos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Chrissy Sandella",
      "Marcos Claros"
     ],
     "a": [
      "Elisangela Harrington",
      "Fabricio Gaona"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Johanna Wagner",
      "Caitlyn Moore"
     ],
     "a": [
      "Doryan Amato",
      "Chanda Mccoy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Tin Wai Kwan",
      "Chrissy Sandella"
     ],
     "a": [
      "Elisangela Harrington",
      "Zoe Ousouljoglou"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Stephen Mcnamara",
      "Phil Chang"
     ],
     "a": [
      "Will Kayal",
      "James Cannizzaro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Fabian Marcos",
      "Jeff Sul"
     ],
     "a": [
      "Daniel Gallegos",
      "Fabricio Gaona"
     ]
    }
   ],
   "subs": [
    "Chrissy Sandella"
   ]
  },
  {
   "result": "away",
   "week": 5,
   "home": "Four Seasons",
   "away": "Jersey Devil",
   "time": "2026-03-25T19:30:00",
   "complete": true,
   "homePoints": 571,
   "awayPoints": 620,
   "homeGW": 13,
   "awayGW": 19,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Anh Nguyen",
      "Eric Nguyen"
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
      "Courtney Davis",
      "Justin Bautista"
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
     "as": 15,
     "h": [
      "Tess Fisher",
      "Royce Chan"
     ],
     "a": [
      "Kylie Lupica",
      "Johny Mario"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lauren Mercado",
      "Eric Gibbs"
     ],
     "a": [
      "Shelah Wallace",
      "Matthew Chen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Roshi Desilva",
      "Anh Nguyen"
     ],
     "a": [
      "Michaela Pierznik",
      "Shelah Wallace"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Tess Fisher",
      "Courtney Davis"
     ],
     "a": [
      "Michelle Quach",
      "Kylie Lupica"
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
      "Matthew Chen",
      "Zach Bowe"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Royce Chan",
      "Eric Gibbs"
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
     "as": 12,
     "h": [
      "Anh Nguyen",
      "Eric Nguyen"
     ],
     "a": [
      "Kylie Lupica",
      "Zach Bowe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lauren Mercado",
      "Zyril Carilo"
     ],
     "a": [
      "Michaela Pierznik",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Tess Fisher",
      "Royce Chan"
     ],
     "a": [
      "Shelah Wallace",
      "Matthew Chen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Courtney Davis",
      "Eric Gibbs"
     ],
     "a": [
      "Michelle Quach",
      "Johny Mario"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Courtney Davis",
      "Roshi Desilva"
     ],
     "a": [
      "Shelah Wallace",
      "Michelle Quach"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tess Fisher",
      "Lauren Mercado"
     ],
     "a": [
      "Kylie Lupica",
      "Michaela Pierznik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Zyril Carilo",
      "Eric Nguyen"
     ],
     "a": [
      "Zach Bowe",
      "Matthew Chen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 27,
     "as": 29,
     "h": [
      "Royce Chan",
      "Eric Gibbs"
     ],
     "a": [
      "Johny Mario",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Anh Nguyen",
      "Justin Bautista"
     ],
     "a": [
      "Michaela Pierznik",
      "Zach Bowe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Roshi Desilva",
      "Eric Gibbs"
     ],
     "a": [
      "Kylie Lupica",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Lauren Mercado",
      "Royce Chan"
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
     "as": 18,
     "h": [
      "Tess Fisher",
      "Zyril Carilo"
     ],
     "a": [
      "Shelah Wallace",
      "Johny Mario"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Roshi Desilva",
      "Anh Nguyen"
     ],
     "a": [
      "Shelah Wallace",
      "Michelle Quach"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Tess Fisher",
      "Courtney Davis"
     ],
     "a": [
      "Michaela Pierznik",
      "Kylie Lupica"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Justin Bautista",
      "Eric Nguyen"
     ],
     "a": [
      "Tyler Arsenault",
      "Zach Bowe"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Royce Chan",
      "Zyril Carilo"
     ],
     "a": [
      "Matthew Chen",
      "Johny Mario"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Courtney Davis",
      "Eric Gibbs"
     ],
     "a": [
      "Michaela Pierznik",
      "Zach Bowe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Roshi Desilva",
      "Eric Nguyen"
     ],
     "a": [
      "Shelah Wallace",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lauren Mercado",
      "Royce Chan"
     ],
     "a": [
      "Kylie Lupica",
      "Matthew Chen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Tess Fisher",
      "Zyril Carilo"
     ],
     "a": [
      "Michelle Quach",
      "Johny Mario"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Tess Fisher",
      "Lauren Mercado"
     ],
     "a": [
      "Shelah Wallace",
      "Kylie Lupica"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Courtney Davis",
      "Roshi Desilva"
     ],
     "a": [
      "Michelle Quach",
      "Michaela Pierznik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Justin Bautista",
      "Eric Gibbs"
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
      "Royce Chan",
      "Zyril Carilo"
     ],
     "a": [
      "Matthew Chen",
      "Johny Mario"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 5,
   "home": "Pickleball Palace",
   "away": "Flemington",
   "time": "2026-03-25T19:30:00",
   "complete": true,
   "homePoints": 623,
   "awayPoints": 580,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Carly Pfeffer",
      "Keith Shedlock"
     ],
     "a": [
      "Suzi Battison",
      "Robbie Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Jenna Irwin",
      "Alex Kazdan"
     ],
     "a": [
      "Christine Ferraez",
      "Matthew Matro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Ashley Georgevich",
      "Daniel Kulik"
     ],
     "a": [
      "Lynda Tomaru",
      "Thomas Connolly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jessica Hendry",
      "Christian Fechter"
     ],
     "a": [
      "Susan Ackley",
      "Ross Switkes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Jenna Irwin",
      "Ashley Georgevich"
     ],
     "a": [
      "Suzi Battison",
      "Lynda Tomaru"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Jessica Hendry",
      "Claire Malone"
     ],
     "a": [
      "Susan Ackley",
      "Christine Ferraez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "David Lavy",
      "Keith Shedlock"
     ],
     "a": [
      "Robbie Oddy",
      "Thomas Connolly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 29,
     "as": 27,
     "h": [
      "Christian Fechter",
      "Alex Kazdan"
     ],
     "a": [
      "Matthew Matro",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Jenna Irwin",
      "Keith Shedlock"
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
      "Claire Malone",
      "Daniel Kulik"
     ],
     "a": [
      "Melissa Dardani",
      "Matthew Matro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ashley Georgevich",
      "Christian Fechter"
     ],
     "a": [
      "Lynda Tomaru",
      "Thomas Connolly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Carly Pfeffer",
      "David Lavy"
     ],
     "a": [
      "Susan Ackley",
      "Ross Switkes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jessica Hendry",
      "Carly Pfeffer"
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
      "Jenna Irwin",
      "Claire Malone"
     ],
     "a": [
      "Christine Ferraez",
      "Susan Ackley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "David Lavy",
      "Christian Fechter"
     ],
     "a": [
      "Thomas Connolly",
      "Robbie Oddy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Daniel Kulik",
      "Alex Kazdan"
     ],
     "a": [
      "Ross Switkes",
      "Matthew Matro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Ashley Georgevich",
      "David Lavy"
     ],
     "a": [
      "Suzi Battison",
      "Thomas Connolly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jessica Hendry",
      "Keith Shedlock"
     ],
     "a": [
      "Melissa Dardani",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Claire Malone",
      "Christian Fechter"
     ],
     "a": [
      "Lynda Tomaru",
      "Matthew Matro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Carly Pfeffer",
      "Alex Kazdan"
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
     "as": 13,
     "h": [
      "Jessica Hendry",
      "Jenna Irwin"
     ],
     "a": [
      "Suzi Battison",
      "Christine Ferraez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ashley Georgevich",
      "Carly Pfeffer"
     ],
     "a": [
      "Melissa Dardani",
      "Susan Ackley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Christian Fechter",
      "Keith Shedlock"
     ],
     "a": [
      "Robbie Oddy",
      "Matthew Matro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Daniel Kulik",
      "David Lavy"
     ],
     "a": [
      "Thomas Connolly",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Carly Pfeffer",
      "David Lavy"
     ],
     "a": [
      "Suzi Battison",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jenna Irwin",
      "Keith Shedlock"
     ],
     "a": [
      "Lynda Tomaru",
      "Matthew Matro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Claire Malone",
      "Alex Kazdan"
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
     "as": 12,
     "h": [
      "Ashley Georgevich",
      "Daniel Kulik"
     ],
     "a": [
      "Christine Ferraez",
      "Thomas Connolly"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jessica Hendry",
      "Jenna Irwin"
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
     "as": 14,
     "h": [
      "Ashley Georgevich",
      "Claire Malone"
     ],
     "a": [
      "Lynda Tomaru",
      "Susan Ackley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Christian Fechter",
      "Alex Kazdan"
     ],
     "a": [
      "Robbie Oddy",
      "Matthew Matro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "David Lavy",
      "Daniel Kulik"
     ],
     "a": [
      "Thomas Connolly",
      "Ross Switkes"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 5,
   "home": "Pickle House",
   "away": "Monroe",
   "time": "2026-03-25T19:30:00",
   "complete": true,
   "homePoints": 610,
   "awayPoints": 606,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kerrin Maurer",
      "Nick Dehmer"
     ],
     "a": [
      "Cameron Barraco",
      "Chris Bucaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
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
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Emily Babinsky",
      "Sidd Pathare"
     ],
     "a": [
      "Claire Gaston",
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
      "Shreyas Pani"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Lissa Eagles",
      "Kerrin Maurer"
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
     "as": 9,
     "h": [
      "Taylor Hartman",
      "Emily Babinsky"
     ],
     "a": [
      "Cameron Barraco",
      "Helen Liu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Chris Damato",
      "Nick Dehmer"
     ],
     "a": [
      "Chris Bucaro",
      "Chris Frangipane"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Obe Janvier",
      "Michael Li"
     ],
     "a": [
      "Anthony Ursino",
      "Shreyas Pani"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Taylor Hartman",
      "Nick Dehmer"
     ],
     "a": [
      "Richa Shah",
      "Chris Bucaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kerrin Maurer",
      "Obe Janvier"
     ],
     "a": [
      "Ruhi Shah",
      "Maanav Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Emily Babinsky",
      "Sidd Pathare"
     ],
     "a": [
      "Claire Gaston",
      "Chris Frangipane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lissa Eagles",
      "Chris Damato"
     ],
     "a": [
      "Cameron Barraco",
      "Shreyas Pani"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kerrin Maurer",
      "Taylor Hartman"
     ],
     "a": [
      "Ruhi Shah",
      "Claire Gaston"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lissa Eagles",
      "Emily Babinsky"
     ],
     "a": [
      "Cameron Barraco",
      "Helen Liu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Michael Li",
      "Nick Dehmer"
     ],
     "a": [
      "Maanav Shah",
      "Chris Bucaro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Obe Janvier",
      "Sidd Pathare"
     ],
     "a": [
      "Chris Frangipane",
      "Anthony Ursino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kerrin Maurer",
      "Michael Li"
     ],
     "a": [
      "Richa Shah",
      "Maanav Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Taylor Hartman",
      "Nick Dehmer"
     ],
     "a": [
      "Ruhi Shah",
      "Chris Frangipane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Lissa Eagles",
      "Sidd Pathare"
     ],
     "a": [
      "Helen Liu",
      "Shreyas Pani"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Emily Babinsky",
      "Obe Janvier"
     ],
     "a": [
      "Claire Gaston",
      "Anthony Ursino"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Kerrin Maurer",
      "Taylor Hartman"
     ],
     "a": [
      "Cameron Barraco",
      "Ruhi Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Lissa Eagles",
      "Emily Babinsky"
     ],
     "a": [
      "Richa Shah",
      "Helen Liu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Chris Damato",
      "Sidd Pathare"
     ],
     "a": [
      "Anthony Ursino",
      "Maanav Shah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Michael Li",
      "Nick Dehmer"
     ],
     "a": [
      "Shreyas Pani",
      "Chris Bucaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Lissa Eagles",
      "Sidd Pathare"
     ],
     "a": [
      "Ruhi Shah",
      "Chris Frangipane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Emily Babinsky",
      "Michael Li"
     ],
     "a": [
      "Helen Liu",
      "Maanav Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 28,
     "h": [
      "Taylor Hartman",
      "Chris Damato"
     ],
     "a": [
      "Claire Gaston",
      "Shreyas Pani"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kerrin Maurer",
      "Obe Janvier"
     ],
     "a": [
      "Richa Shah",
      "Chris Bucaro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Kerrin Maurer",
      "Emily Babinsky"
     ],
     "a": [
      "Cameron Barraco",
      "Ruhi Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Taylor Hartman",
      "Lissa Eagles"
     ],
     "a": [
      "Helen Liu",
      "Claire Gaston"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Chris Damato",
      "Michael Li"
     ],
     "a": [
      "Chris Bucaro",
      "Anthony Ursino"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Nick Dehmer",
      "Obe Janvier"
     ],
     "a": [
      "Maanav Shah",
      "Chris Frangipane"
     ]
    }
   ],
   "subs": [
    "Obe Janvier"
   ]
  },
  {
   "result": "away",
   "week": 5,
   "home": "Bounce Malvern",
   "away": "ACE",
   "time": "2026-03-25T19:30:00",
   "complete": true,
   "homePoints": 577,
   "awayPoints": 607,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Nam Barsh",
      "Shashank Kamdar"
     ],
     "a": [
      "Jennifer Sanchez",
      "Manny Lai"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Sarah Kline",
      "Jordan Long"
     ],
     "a": [
      "Katarzyna Clevenger",
      "Steven Maisonet"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Katherine Maruyama",
      "Grant Hanak"
     ],
     "a": [
      "Annemarie Mccartney",
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
      "Lou Frignito"
     ],
     "a": [
      "Chaille Godinez",
      "Nathan Law"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Katherine Maruyama",
      "Yuki Kim"
     ],
     "a": [
      "Brittany Hall",
      "Jennifer Sanchez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Sarah Kline",
      "Julia Plein"
     ],
     "a": [
      "Chaille Godinez",
      "Annemarie Mccartney"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Jordan Long",
      "Nick Meale"
     ],
     "a": [
      "Manny Lai",
      "Steven Maisonet"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Lou Frignito",
      "Grant Hanak"
     ],
     "a": [
      "Nathan Law",
      "Marc Harden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Yuki Kim",
      "Lou Frignito"
     ],
     "a": [
      "Katarzyna Clevenger",
      "Gog Boonswang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Katherine Maruyama",
      "Grant Hanak"
     ],
     "a": [
      "Brittany Hall",
      "Nathan Law"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Nam Barsh",
      "Shashank Kamdar"
     ],
     "a": [
      "Chaille Godinez",
      "Steven Maisonet"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Sarah Kline",
      "Jordan Long"
     ],
     "a": [
      "Annemarie Mccartney",
      "Manny Lai"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Yuki Kim",
      "Katherine Maruyama"
     ],
     "a": [
      "Katarzyna Clevenger",
      "Chaille Godinez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Sarah Kline",
      "Julia Plein"
     ],
     "a": [
      "Brittany Hall",
      "Annemarie Mccartney"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lou Frignito",
      "Grant Hanak"
     ],
     "a": [
      "Gog Boonswang",
      "Steven Maisonet"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Jordan Long",
      "Nick Meale"
     ],
     "a": [
      "Manny Lai",
      "Nathan Law"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Julia Plein",
      "Grant Hanak"
     ],
     "a": [
      "Jennifer Sanchez",
      "Steven Maisonet"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Yuki Kim",
      "Shashank Kamdar"
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
     "as": 10,
     "h": [
      "Nam Barsh",
      "Nick Meale"
     ],
     "a": [
      "Katarzyna Clevenger",
      "Marc Harden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Sarah Kline",
      "Lou Frignito"
     ],
     "a": [
      "Annemarie Mccartney",
      "Nathan Law"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Yuki Kim",
      "Nam Barsh"
     ],
     "a": [
      "Chaille Godinez",
      "Brittany Hall"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Katherine Maruyama",
      "Julia Plein"
     ],
     "a": [
      "Jennifer Sanchez",
      "Katarzyna Clevenger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Shashank Kamdar",
      "Jordan Long"
     ],
     "a": [
      "Gog Boonswang",
      "Nathan Law"
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
      "Steven Maisonet",
      "Marc Harden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Katherine Maruyama",
      "Shashank Kamdar"
     ],
     "a": [
      "Brittany Hall",
      "Marc Harden"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Nam Barsh",
      "Nick Meale"
     ],
     "a": [
      "Katarzyna Clevenger",
      "Gog Boonswang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Sarah Kline",
      "Lou Frignito"
     ],
     "a": [
      "Annemarie Mccartney",
      "Manny Lai"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Julia Plein",
      "Grant Hanak"
     ],
     "a": [
      "Chaille Godinez",
      "Nathan Law"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Nam Barsh",
      "Julia Plein"
     ],
     "a": [
      "Annemarie Mccartney",
      "Katarzyna Clevenger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Yuki Kim",
      "Sarah Kline"
     ],
     "a": [
      "Chaille Godinez",
      "Jennifer Sanchez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Shashank Kamdar",
      "Jordan Long"
     ],
     "a": [
      "Manny Lai",
      "Nathan Law"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Nick Meale",
      "Grant Hanak"
     ],
     "a": [
      "Gog Boonswang",
      "Marc Harden"
     ]
    }
   ],
   "subs": [
    "Marc Harden"
   ]
  },
  {
   "result": "away",
   "week": 5,
   "home": "Bounce Philly",
   "away": "Dill Dinkers Hatboro",
   "time": "2026-03-25T19:30:00",
   "complete": true,
   "homePoints": 587,
   "awayPoints": 621,
   "homeGW": 12,
   "awayGW": 20,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Alyssa Boyle",
      "William Hayes"
     ],
     "a": [
      "Nahla Bernhardt",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Charlotte Healey",
      "Varun Prakash"
     ],
     "a": [
      "Lindsey Thoeng",
      "Kenoa Tio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Alex Abad",
      "Dustin Rabinowitz"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Jeff Comer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Julia Sternberg",
      "Bruno Casino"
     ],
     "a": [
      "Allison Tarnoff",
      "Ozair Ibrahim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Robyn Himelstein",
      "Alex Abad"
     ],
     "a": [
      "Nahla Bernhardt",
      "Lindsey Thoeng"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Charlotte Healey",
      "Alyssa Boyle"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Rayna Baizman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Mark Kilimnik",
      "Varun Prakash"
     ],
     "a": [
      "Jeff Comer",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "William Hayes",
      "Dustin Rabinowitz"
     ],
     "a": [
      "Ozair Ibrahim",
      "Kenoa Tio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Alex Abad",
      "William Hayes"
     ],
     "a": [
      "Nahla Bernhardt",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Julia Sternberg",
      "Bruno Casino"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Jeff Comer"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Charlotte Healey",
      "Varun Prakash"
     ],
     "a": [
      "Allison Tarnoff",
      "Kenoa Tio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Robyn Himelstein",
      "Ashwin Korde"
     ],
     "a": [
      "Rayna Baizman",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Charlotte Healey",
      "Alyssa Boyle"
     ],
     "a": [
      "Nahla Bernhardt",
      "Lindsey Thoeng"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Julia Sternberg",
      "Robyn Himelstein"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Rayna Baizman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Bruno Casino",
      "Ashwin Korde"
     ],
     "a": [
      "Jeff Comer",
      "Jonah Fliegelman"
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
      "Dylan Ashbach",
      "Kenoa Tio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Alyssa Boyle",
      "Bruno Casino"
     ],
     "a": [
      "Lindsey Thoeng",
      "Kenoa Tio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Charlotte Healey",
      "William Hayes"
     ],
     "a": [
      "Allison Tarnoff",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Julia Sternberg",
      "Varun Prakash"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Robyn Himelstein",
      "Mark Kilimnik"
     ],
     "a": [
      "Nahla Bernhardt",
      "Ozair Ibrahim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Julia Sternberg",
      "Alyssa Boyle"
     ],
     "a": [
      "Lindsey Thoeng",
      "Allison Tarnoff"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Charlotte Healey",
      "Robyn Himelstein"
     ],
     "a": [
      "Nahla Bernhardt",
      "Rayna Baizman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Dustin Rabinowitz",
      "William Hayes"
     ],
     "a": [
      "Jeff Comer",
      "Ozair Ibrahim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 31,
     "as": 33,
     "h": [
      "Ashwin Korde",
      "Bruno Casino"
     ],
     "a": [
      "Dylan Ashbach",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Robyn Himelstein",
      "Ashwin Korde"
     ],
     "a": [
      "Rayna Baizman",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Julia Sternberg",
      "Varun Prakash"
     ],
     "a": [
      "Allison Tarnoff",
      "Kenoa Tio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Charlotte Healey",
      "Dustin Rabinowitz"
     ],
     "a": [
      "Nahla Bernhardt",
      "Ozair Ibrahim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Alyssa Boyle",
      "Mark Kilimnik"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Charlotte Healey",
      "Robyn Himelstein"
     ],
     "a": [
      "Lindsey Thoeng",
      "Rayna Baizman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Julia Sternberg",
      "Alyssa Boyle"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Allison Tarnoff"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Bruno Casino",
      "William Hayes"
     ],
     "a": [
      "Jeff Comer",
      "Ozair Ibrahim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Mark Kilimnik",
      "Varun Prakash"
     ],
     "a": [
      "Dylan Ashbach",
      "Jonah Fliegelman"
     ]
    }
   ],
   "subs": [
    "Varun Prakash"
   ]
  },
  {
   "result": "home",
   "week": 5,
   "home": "Dill Dinkers Hatboro",
   "away": "Pickleball Palace",
   "time": "2026-03-28T15:00:00",
   "complete": true,
   "homePoints": 635,
   "awayPoints": 595,
   "homeGW": 19,
   "awayGW": 13,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Rayna Baizman",
      "Ethan Henigan"
     ],
     "a": [
      "Ashley Georgevich",
      "Daniel Kulik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Nahla Bernhardt",
      "Brandon Fooks"
     ],
     "a": [
      "Jenna Irwin",
      "Patrick Ceccacci"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kaylyn Swankoski",
      "Clayton Schmucker"
     ],
     "a": [
      "Carly Pfeffer",
      "Keith Shedlock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Hannah Nussbaum",
      "Dylan Ashbach"
     ],
     "a": [
      "Beatriz Lopez Albarracin",
      "Alvaro Regalado"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Hannah Nussbaum",
      "Nahla Bernhardt"
     ],
     "a": [
      "Ashley Georgevich",
      "Jenna Irwin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Kaylyn Swankoski",
      "Rayna Baizman"
     ],
     "a": [
      "Claire Malone",
      "Beatriz Lopez Albarracin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ethan Henigan",
      "Clayton Schmucker"
     ],
     "a": [
      "Rob Gruber",
      "Keith Shedlock"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Dylan Ashbach",
      "Brandon Fooks"
     ],
     "a": [
      "Daniel Kulik",
      "Alvaro Regalado"
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
      "Ashley Georgevich",
      "Rob Gruber"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kaylyn Swankoski",
      "Clayton Schmucker"
     ],
     "a": [
      "Jenna Irwin",
      "Keith Shedlock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Nahla Bernhardt",
      "Brandon Fooks"
     ],
     "a": [
      "Carly Pfeffer",
      "Daniel Kulik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Rayna Baizman",
      "Ethan Henigan"
     ],
     "a": [
      "Claire Malone",
      "Alvaro Regalado"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Nahla Bernhardt",
      "Hannah Nussbaum"
     ],
     "a": [
      "Ashley Georgevich",
      "Beatriz Lopez Albarracin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Kaylyn Swankoski",
      "Rayna Baizman"
     ],
     "a": [
      "Claire Malone",
      "Carly Pfeffer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Ethan Henigan",
      "Brandon Fooks"
     ],
     "a": [
      "Keith Shedlock",
      "Rob Gruber"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Clayton Schmucker",
      "Dylan Ashbach"
     ],
     "a": [
      "Patrick Ceccacci",
      "Alvaro Regalado"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Hannah Nussbaum",
      "Clayton Schmucker"
     ],
     "a": [
      "Carly Pfeffer",
      "Daniel Kulik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kaylyn Swankoski",
      "Ethan Henigan"
     ],
     "a": [
      "Beatriz Lopez Albarracin",
      "Patrick Ceccacci"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Nahla Bernhardt",
      "Dylan Ashbach"
     ],
     "a": [
      "Jenna Irwin",
      "Rob Gruber"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Rayna Baizman",
      "Brandon Fooks"
     ],
     "a": [
      "Claire Malone",
      "Keith Shedlock"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Hannah Nussbaum",
      "Kaylyn Swankoski"
     ],
     "a": [
      "Ashley Georgevich",
      "Claire Malone"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Nahla Bernhardt",
      "Rayna Baizman"
     ],
     "a": [
      "Jenna Irwin",
      "Carly Pfeffer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Dylan Ashbach",
      "Brandon Fooks"
     ],
     "a": [
      "Rob Gruber",
      "Daniel Kulik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Clayton Schmucker",
      "Ethan Henigan"
     ],
     "a": [
      "Patrick Ceccacci",
      "Keith Shedlock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Rayna Baizman",
      "Brandon Fooks"
     ],
     "a": [
      "Ashley Georgevich",
      "Rob Gruber"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kaylyn Swankoski",
      "Dylan Ashbach"
     ],
     "a": [
      "Beatriz Lopez Albarracin",
      "Alvaro Regalado"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Hannah Nussbaum",
      "Clayton Schmucker"
     ],
     "a": [
      "Jenna Irwin",
      "Daniel Kulik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Nahla Bernhardt",
      "Ethan Henigan"
     ],
     "a": [
      "Carly Pfeffer",
      "Patrick Ceccacci"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Nahla Bernhardt",
      "Rayna Baizman"
     ],
     "a": [
      "Ashley Georgevich",
      "Claire Malone"
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
      "Jenna Irwin",
      "Beatriz Lopez Albarracin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ethan Henigan",
      "Brandon Fooks"
     ],
     "a": [
      "Alvaro Regalado",
      "Rob Gruber"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Clayton Schmucker",
      "Dylan Ashbach"
     ],
     "a": [
      "Daniel Kulik",
      "Patrick Ceccacci"
     ]
    }
   ],
   "subs": [
    "Ethan Henigan",
    "Rob Gruber"
   ]
  },
  {
   "result": "away",
   "week": 5,
   "home": "Jersey Devil",
   "away": "Picklr Fair Lawn",
   "time": "2026-03-28T18:00:00",
   "complete": true,
   "homePoints": 599,
   "awayPoints": 635,
   "homeGW": 9,
   "awayGW": 23,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Shelah Wallace",
      "Drew Von Bargen"
     ],
     "a": [
      "Emily Cho",
      "Chad Durkin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kylie Lupica",
      "Patrick Ryan"
     ],
     "a": [
      "Kara Infante",
      "Lincoln Mcconnell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Arianna Haresign",
      "Zach Bowe"
     ],
     "a": [
      "Katherine Cho",
      "Stephen Mcnamara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Rachel Berger",
      "Matthew Chen"
     ],
     "a": [
      "Tin Wai Kwan",
      "Pablo Shin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Arianna Haresign",
      "Rachel Berger"
     ],
     "a": [
      "Emily Cho",
      "Katherine Cho"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Shelah Wallace",
      "Kaia Hoak"
     ],
     "a": [
      "Aya Haruyama",
      "Tin Wai Kwan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Zach Bowe",
      "Drew Von Bargen"
     ],
     "a": [
      "Stephen Mcnamara",
      "Chad Durkin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Johny Mario",
      "Matthew Chen"
     ],
     "a": [
      "Jansen Tubo",
      "Lincoln Mcconnell"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kylie Lupica",
      "Matthew Chen"
     ],
     "a": [
      "Tin Wai Kwan",
      "Andrew Bernard"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Arianna Haresign",
      "Zach Bowe"
     ],
     "a": [
      "Emily Cho",
      "Chad Durkin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Kaia Hoak",
      "Patrick Ryan"
     ],
     "a": [
      "Aya Haruyama",
      "Stephen Mcnamara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Rachel Berger",
      "Johny Mario"
     ],
     "a": [
      "Kara Infante",
      "Lincoln Mcconnell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Arianna Haresign",
      "Kylie Lupica"
     ],
     "a": [
      "Aya Haruyama",
      "Katherine Cho"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Shelah Wallace",
      "Rachel Berger"
     ],
     "a": [
      "Emily Cho",
      "Kara Infante"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Patrick Ryan",
      "Drew Von Bargen"
     ],
     "a": [
      "Chad Durkin",
      "Jansen Tubo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Zach Bowe",
      "Matthew Chen"
     ],
     "a": [
      "Pablo Shin",
      "Andrew Bernard"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kaia Hoak",
      "Johny Mario"
     ],
     "a": [
      "Kara Infante",
      "Pablo Shin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Arianna Haresign",
      "Matthew Chen"
     ],
     "a": [
      "Emily Cho",
      "Andrew Bernard"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Shelah Wallace",
      "Drew Von Bargen"
     ],
     "a": [
      "Aya Haruyama",
      "Stephen Mcnamara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kylie Lupica",
      "Patrick Ryan"
     ],
     "a": [
      "Tin Wai Kwan",
      "Lincoln Mcconnell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Arianna Haresign",
      "Shelah Wallace"
     ],
     "a": [
      "Emily Cho",
      "Katherine Cho"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Kaia Hoak",
      "Rachel Berger"
     ],
     "a": [
      "Aya Haruyama",
      "Tin Wai Kwan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Zach Bowe",
      "Drew Von Bargen"
     ],
     "a": [
      "Stephen Mcnamara",
      "Chad Durkin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Matthew Chen",
      "Johny Mario"
     ],
     "a": [
      "Lincoln Mcconnell",
      "Jansen Tubo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kaia Hoak",
      "Johny Mario"
     ],
     "a": [
      "Kara Infante",
      "Jansen Tubo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kylie Lupica",
      "Matthew Chen"
     ],
     "a": [
      "Katherine Cho",
      "Stephen Mcnamara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Shelah Wallace",
      "Patrick Ryan"
     ],
     "a": [
      "Aya Haruyama",
      "Pablo Shin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Rachel Berger",
      "Zach Bowe"
     ],
     "a": [
      "Tin Wai Kwan",
      "Lincoln Mcconnell"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Arianna Haresign",
      "Kylie Lupica"
     ],
     "a": [
      "Aya Haruyama",
      "Katherine Cho"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Shelah Wallace",
      "Rachel Berger"
     ],
     "a": [
      "Emily Cho",
      "Kara Infante"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Patrick Ryan",
      "Zach Bowe"
     ],
     "a": [
      "Andrew Bernard",
      "Jansen Tubo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Johny Mario",
      "Drew Von Bargen"
     ],
     "a": [
      "Pablo Shin",
      "Chad Durkin"
     ]
    }
   ],
   "subs": [
    "Katherine Cho",
    "Emily Cho",
    "Lincoln Mcconnell",
    "Patrick Ryan"
   ]
  },
  {
   "result": "away",
   "week": 5,
   "home": "ACE",
   "away": "Monroe",
   "time": "2026-03-28T18:00:00",
   "complete": true,
   "homePoints": 615,
   "awayPoints": 635,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Brittany Hall",
      "Nathan Law"
     ],
     "a": [
      "Ruhi Shah",
      "Maanav Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Annemarie Mccartney",
      "Hector Irizarry"
     ],
     "a": [
      "Richa Shah",
      "Chris Frangipane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Chaille Godinez",
      "Dhaval Bhavsar"
     ],
     "a": [
      "Cameron Barraco",
      "Jacob Yandoli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jennifer Sanchez",
      "Manny Lai"
     ],
     "a": [
      "Helen Liu",
      "Shreyas Pani"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Katarzyna Clevenger",
      "Annemarie Mccartney"
     ],
     "a": [
      "Ruhi Shah",
      "Helen Liu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Brittany Hall",
      "Jennifer Sanchez"
     ],
     "a": [
      "Cameron Barraco",
      "Richa Shah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Manny Lai",
      "Hector Irizarry"
     ],
     "a": [
      "Chris Bucaro",
      "Maanav Shah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Nathan Law",
      "Dhaval Bhavsar"
     ],
     "a": [
      "Shreyas Pani",
      "Chris Frangipane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Annemarie Mccartney",
      "Hector Irizarry"
     ],
     "a": [
      "Richa Shah",
      "Chris Bucaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Chaille Godinez",
      "Nathan Law"
     ],
     "a": [
      "Ruhi Shah",
      "Chris Frangipane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Katarzyna Clevenger",
      "Gog Boonswang"
     ],
     "a": [
      "Helen Liu",
      "Jacob Yandoli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Brittany Hall",
      "Manny Lai"
     ],
     "a": [
      "Cameron Barraco",
      "Shreyas Pani"
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
      "Ruhi Shah",
      "Helen Liu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jennifer Sanchez",
      "Chaille Godinez"
     ],
     "a": [
      "Cameron Barraco",
      "Richa Shah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Manny Lai",
      "Nathan Law"
     ],
     "a": [
      "Maanav Shah",
      "Shreyas Pani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Hector Irizarry",
      "Dhaval Bhavsar"
     ],
     "a": [
      "Chris Bucaro",
      "Jacob Yandoli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jennifer Sanchez",
      "Gog Boonswang"
     ],
     "a": [
      "Cameron Barraco",
      "Chris Bucaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Katarzyna Clevenger",
      "Hector Irizarry"
     ],
     "a": [
      "Richa Shah",
      "Maanav Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Annemarie Mccartney",
      "Nathan Law"
     ],
     "a": [
      "Ruhi Shah",
      "Jacob Yandoli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Chaille Godinez",
      "Manny Lai"
     ],
     "a": [
      "Helen Liu",
      "Chris Frangipane"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Brittany Hall",
      "Katarzyna Clevenger"
     ],
     "a": [
      "Richa Shah",
      "Helen Liu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Annemarie Mccartney",
      "Chaille Godinez"
     ],
     "a": [
      "Ruhi Shah",
      "Cameron Barraco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Manny Lai",
      "Nathan Law"
     ],
     "a": [
      "Chris Bucaro",
      "Maanav Shah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Hector Irizarry",
      "Dhaval Bhavsar"
     ],
     "a": [
      "Shreyas Pani",
      "Jacob Yandoli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Katarzyna Clevenger",
      "Gog Boonswang"
     ],
     "a": [
      "Richa Shah",
      "Chris Bucaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Chaille Godinez",
      "Nathan Law"
     ],
     "a": [
      "Helen Liu",
      "Maanav Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Brittany Hall",
      "Hector Irizarry"
     ],
     "a": [
      "Ruhi Shah",
      "Chris Frangipane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Annemarie Mccartney",
      "Dhaval Bhavsar"
     ],
     "a": [
      "Cameron Barraco",
      "Shreyas Pani"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Chaille Godinez",
      "Annemarie Mccartney"
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
     "as": 14,
     "h": [
      "Brittany Hall",
      "Katarzyna Clevenger"
     ],
     "a": [
      "Cameron Barraco",
      "Helen Liu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Dhaval Bhavsar",
      "Gog Boonswang"
     ],
     "a": [
      "Chris Bucaro",
      "Chris Frangipane"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Hector Irizarry",
      "Nathan Law"
     ],
     "a": [
      "Maanav Shah",
      "Jacob Yandoli"
     ]
    }
   ],
   "subs": [
    "Dhaval Bhavsar"
   ]
  },
  {
   "result": "away",
   "week": 5,
   "home": "Pickleball Kingdom Watchung",
   "away": "Bounce Malvern",
   "time": "2026-03-28T18:00:00",
   "complete": true,
   "homePoints": 497,
   "awayPoints": 655,
   "homeGW": 6,
   "awayGW": 26,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Jennifer Hansen",
      "Jeremy Laub"
     ],
     "a": [
      "Sarah Kline",
      "Lou Frignito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Taylor Peracchio",
      "Daniel Gallegos"
     ],
     "a": [
      "Taylor Dath",
      "Grant Hanak"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Elise Van Ormer",
      "Fabricio Gaona"
     ],
     "a": [
      "Katherine Maruyama",
      "Nick Meale"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Dina Perrella",
      "Scott Chen Cheng"
     ],
     "a": [
      "Megan Harvey",
      "Austin Gow"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Dina Perrella",
      "Jennifer Hansen"
     ],
     "a": [
      "Sarah Kline",
      "Megan Harvey"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Taylor Peracchio",
      "Elise Van Ormer"
     ],
     "a": [
      "Katherine Maruyama",
      "Taylor Dath"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Daniel Gallegos",
      "Scott Chen Cheng"
     ],
     "a": [
      "Lou Frignito",
      "Nick Meale"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Fabricio Gaona",
      "Jeremy Laub"
     ],
     "a": [
      "Austin Gow",
      "Grant Hanak"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Jennifer Hansen",
      "Jeremy Laub"
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
     "as": 18,
     "h": [
      "Taylor Peracchio",
      "Daniel Gallegos"
     ],
     "a": [
      "Taylor Dath",
      "Grant Hanak"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Elise Van Ormer",
      "Fabricio Gaona"
     ],
     "a": [
      "Katherine Maruyama",
      "Nick Meale"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Dina Perrella",
      "Scott Chen Cheng"
     ],
     "a": [
      "Megan Harvey",
      "Austin Gow"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Dina Perrella",
      "Jennifer Hansen"
     ],
     "a": [
      "Sarah Kline",
      "Megan Harvey"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Taylor Peracchio",
      "Elise Van Ormer"
     ],
     "a": [
      "Katherine Maruyama",
      "Taylor Dath"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Daniel Gallegos",
      "Scott Chen Cheng"
     ],
     "a": [
      "Lou Frignito",
      "Austin Gow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Fabricio Gaona",
      "Jeremy Laub"
     ],
     "a": [
      "Nick Meale",
      "Grant Hanak"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Dina Perrella",
      "Jeremy Laub"
     ],
     "a": [
      "Taylor Dath",
      "Lou Frignito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Elise Van Ormer",
      "Daniel Gallegos"
     ],
     "a": [
      "Katherine Maruyama",
      "Grant Hanak"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Taylor Peracchio",
      "Fabricio Gaona"
     ],
     "a": [
      "Sarah Kline",
      "Austin Gow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jennifer Hansen",
      "Scott Chen Cheng"
     ],
     "a": [
      "Megan Harvey",
      "Nick Meale"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jennifer Hansen",
      "Taylor Peracchio"
     ],
     "a": [
      "Katherine Maruyama",
      "Sarah Kline"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Dina Perrella",
      "Elise Van Ormer"
     ],
     "a": [
      "Megan Harvey",
      "Taylor Dath"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Daniel Gallegos",
      "Fabricio Gaona"
     ],
     "a": [
      "Lou Frignito",
      "Grant Hanak"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Scott Chen Cheng",
      "Jeremy Laub"
     ],
     "a": [
      "Nick Meale",
      "Austin Gow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Dina Perrella",
      "Jeremy Laub"
     ],
     "a": [
      "Taylor Dath",
      "Lou Frignito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Elise Van Ormer",
      "Daniel Gallegos"
     ],
     "a": [
      "Katherine Maruyama",
      "Grant Hanak"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Taylor Peracchio",
      "Fabricio Gaona"
     ],
     "a": [
      "Sarah Kline",
      "Austin Gow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Jennifer Hansen",
      "Scott Chen Cheng"
     ],
     "a": [
      "Megan Harvey",
      "Nick Meale"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jennifer Hansen",
      "Taylor Peracchio"
     ],
     "a": [
      "Katherine Maruyama",
      "Sarah Kline"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Dina Perrella",
      "Elise Van Ormer"
     ],
     "a": [
      "Megan Harvey",
      "Taylor Dath"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Daniel Gallegos",
      "Fabricio Gaona"
     ],
     "a": [
      "Lou Frignito",
      "Grant Hanak"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Scott Chen Cheng",
      "Jeremy Laub"
     ],
     "a": [
      "Austin Gow",
      "Nick Meale"
     ]
    }
   ],
   "subs": [
    "Taylor Dath",
    "Austin Gow",
    "Elise Van Ormer",
    "Taylor Peracchio",
    "Scott Chen Cheng",
    "Dina Perrella",
    "Jennifer Hansen",
    "Jeremy Laub"
   ]
  },
  {
   "result": "away",
   "week": 5,
   "home": "Flemington",
   "away": "Four Seasons",
   "time": "2026-03-29T12:00:00",
   "complete": true,
   "homePoints": 614,
   "awayPoints": 632,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Courtney Greener",
      "Tim Dowd"
     ],
     "a": [
      "Tess Fisher",
      "Shawn Ganow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lynda Tomaru",
      "Robbie Oddy"
     ],
     "a": [
      "Rachel Hannum",
      "Zyril Carilo"
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
      "Courtney Davis",
      "Nari Watanabe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Christine Ferraez",
      "Thomas Connolly"
     ],
     "a": [
      "Anh Nguyen",
      "Eric Nguyen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Aimee Castellano",
      "Christine Ferraez"
     ],
     "a": [
      "Tess Fisher",
      "Lauren Mercado"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Courtney Greener",
      "Susan Ackley"
     ],
     "a": [
      "Courtney Davis",
      "Rachel Hannum"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Ross Switkes",
      "Tim Dowd"
     ],
     "a": [
      "Justin Bautista",
      "Shawn Ganow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Robbie Oddy",
      "Thomas Connolly"
     ],
     "a": [
      "Nari Watanabe",
      "Zyril Carilo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Courtney Greener",
      "Ross Switkes"
     ],
     "a": [
      "Lauren Mercado",
      "Nari Watanabe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 27,
     "h": [
      "Lynda Tomaru",
      "Robbie Oddy"
     ],
     "a": [
      "Tess Fisher",
      "Shawn Ganow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Christine Ferraez",
      "Thomas Connolly"
     ],
     "a": [
      "Rachel Hannum",
      "Zyril Carilo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Aimee Castellano",
      "Tim Dowd"
     ],
     "a": [
      "Anh Nguyen",
      "Eric Nguyen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Susan Ackley",
      "Aimee Castellano"
     ],
     "a": [
      "Tess Fisher",
      "Courtney Davis"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lynda Tomaru",
      "Christine Ferraez"
     ],
     "a": [
      "Rachel Hannum",
      "Lauren Mercado"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Robbie Oddy",
      "Thomas Connolly"
     ],
     "a": [
      "Shawn Ganow",
      "Justin Bautista"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Ross Switkes",
      "Tim Dowd"
     ],
     "a": [
      "Nari Watanabe",
      "Zyril Carilo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Courtney Greener",
      "Robbie Oddy"
     ],
     "a": [
      "Rachel Hannum",
      "Nari Watanabe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lynda Tomaru",
      "Thomas Connolly"
     ],
     "a": [
      "Tess Fisher",
      "Zyril Carilo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Susan Ackley",
      "Ross Switkes"
     ],
     "a": [
      "Lauren Mercado",
      "Eric Nguyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Aimee Castellano",
      "Tim Dowd"
     ],
     "a": [
      "Anh Nguyen",
      "Justin Bautista"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Lynda Tomaru",
      "Christine Ferraez"
     ],
     "a": [
      "Tess Fisher",
      "Rachel Hannum"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Susan Ackley",
      "Courtney Greener"
     ],
     "a": [
      "Courtney Davis",
      "Lauren Mercado"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Thomas Connolly",
      "Robbie Oddy"
     ],
     "a": [
      "Zyril Carilo",
      "Shawn Ganow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ross Switkes",
      "Tim Dowd"
     ],
     "a": [
      "Justin Bautista",
      "Eric Nguyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Courtney Greener",
      "Robbie Oddy"
     ],
     "a": [
      "Rachel Hannum",
      "Shawn Ganow"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Lynda Tomaru",
      "Thomas Connolly"
     ],
     "a": [
      "Tess Fisher",
      "Zyril Carilo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Christine Ferraez",
      "Ross Switkes"
     ],
     "a": [
      "Courtney Davis",
      "Eric Nguyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Aimee Castellano",
      "Tim Dowd"
     ],
     "a": [
      "Anh Nguyen",
      "Justin Bautista"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Aimee Castellano",
      "Courtney Greener"
     ],
     "a": [
      "Lauren Mercado",
      "Courtney Davis"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Lynda Tomaru",
      "Susan Ackley"
     ],
     "a": [
      "Tess Fisher",
      "Rachel Hannum"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Ross Switkes",
      "Thomas Connolly"
     ],
     "a": [
      "Nari Watanabe",
      "Shawn Ganow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Robbie Oddy",
      "Tim Dowd"
     ],
     "a": [
      "Justin Bautista",
      "Eric Nguyen"
     ]
    }
   ],
   "subs": [
    "Tim Dowd",
    "Nari Watanabe"
   ]
  },
  {
   "result": "home",
   "week": 6,
   "home": "Pickle House",
   "away": "Picklr Fair Lawn",
   "time": "2026-04-01T19:00:00",
   "complete": true,
   "homePoints": 645,
   "awayPoints": 519,
   "homeGW": 24,
   "awayGW": 8,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Taylor Hartman",
      "Chris Damato"
     ],
     "a": [
      "Caitlyn Moore",
      "Chad Durkin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Anisha Malhotra",
      "Nick Dehmer"
     ],
     "a": [
      "Tin Wai Kwan",
      "Manpreet Singh"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Yoyo Shen",
      "Kishan Shah"
     ],
     "a": [
      "Aya Haruyama",
      "Pablo Shin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Emily Babinsky",
      "Sidd Pathare"
     ],
     "a": [
      "Kara Infante",
      "Andrew Bernard"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Taylor Hartman",
      "Emily Babinsky"
     ],
     "a": [
      "Aya Haruyama",
      "Caitlyn Moore"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Yoyo Shen",
      "Anisha Malhotra"
     ],
     "a": [
      "Tin Wai Kwan",
      "Kara Infante"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Nick Dehmer",
      "Dylan Unkert"
     ],
     "a": [
      "Jansen Tubo",
      "Pablo Shin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Chris Damato",
      "Sidd Pathare"
     ],
     "a": [
      "Chad Durkin",
      "Manpreet Singh"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Taylor Hartman",
      "Dylan Unkert"
     ],
     "a": [
      "Caitlyn Moore",
      "Manpreet Singh"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Anisha Malhotra",
      "Chris Damato"
     ],
     "a": [
      "Kara Infante",
      "Andrew Bernard"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Yoyo Shen",
      "Kishan Shah"
     ],
     "a": [
      "Aya Haruyama",
      "Pablo Shin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Emily Babinsky",
      "Nick Dehmer"
     ],
     "a": [
      "Tin Wai Kwan",
      "Jansen Tubo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Taylor Hartman",
      "Yoyo Shen"
     ],
     "a": [
      "Caitlyn Moore",
      "Tin Wai Kwan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Emily Babinsky",
      "Anisha Malhotra"
     ],
     "a": [
      "Aya Haruyama",
      "Kara Infante"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Dylan Unkert",
      "Sidd Pathare"
     ],
     "a": [
      "Jansen Tubo",
      "Pablo Shin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Chris Damato",
      "Kishan Shah"
     ],
     "a": [
      "Chad Durkin",
      "Manpreet Singh"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Taylor Hartman",
      "Nick Dehmer"
     ],
     "a": [
      "Kara Infante",
      "Jansen Tubo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Anisha Malhotra",
      "Sidd Pathare"
     ],
     "a": [
      "Tin Wai Kwan",
      "Manpreet Singh"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Yoyo Shen",
      "Dylan Unkert"
     ],
     "a": [
      "Caitlyn Moore",
      "Chad Durkin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Emily Babinsky",
      "Kishan Shah"
     ],
     "a": [
      "Aya Haruyama",
      "Andrew Bernard"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Taylor Hartman",
      "Anisha Malhotra"
     ],
     "a": [
      "Aya Haruyama",
      "Caitlyn Moore"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Yoyo Shen",
      "Emily Babinsky"
     ],
     "a": [
      "Tin Wai Kwan",
      "Kara Infante"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Chris Damato",
      "Nick Dehmer"
     ],
     "a": [
      "Andrew Bernard",
      "Jansen Tubo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kishan Shah",
      "Sidd Pathare"
     ],
     "a": [
      "Pablo Shin",
      "Chad Durkin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Taylor Hartman",
      "Dylan Unkert"
     ],
     "a": [
      "Caitlyn Moore",
      "Manpreet Singh"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Anisha Malhotra",
      "Nick Dehmer"
     ],
     "a": [
      "Tin Wai Kwan",
      "Andrew Bernard"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Yoyo Shen",
      "Chris Damato"
     ],
     "a": [
      "Aya Haruyama",
      "Chad Durkin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Emily Babinsky",
      "Kishan Shah"
     ],
     "a": [
      "Kara Infante",
      "Pablo Shin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Taylor Hartman",
      "Emily Babinsky"
     ],
     "a": [
      "Tin Wai Kwan",
      "Aya Haruyama"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Yoyo Shen",
      "Anisha Malhotra"
     ],
     "a": [
      "Kara Infante",
      "Caitlyn Moore"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Nick Dehmer",
      "Dylan Unkert"
     ],
     "a": [
      "Chad Durkin",
      "Jansen Tubo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Sidd Pathare",
      "Kishan Shah"
     ],
     "a": [
      "Andrew Bernard",
      "Manpreet Singh"
     ]
    }
   ],
   "subs": [
    "Anisha Malhotra",
    "Dylan Unkert",
    "Manpreet Singh"
   ]
  },
  {
   "result": "home",
   "week": 7,
   "home": "Pickleball Palace",
   "away": "Monroe",
   "time": "2026-04-08T19:30:00",
   "complete": true,
   "homePoints": 654,
   "awayPoints": 519,
   "homeGW": 24,
   "awayGW": 8,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ashley Georgevich",
      "Alvaro Regalado"
     ],
     "a": [
      "Ruhi Shah",
      "Maanav Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Beatriz Lopez Albarracin",
      "Daniel Kulik"
     ],
     "a": [
      "Richa Shah",
      "Chris Bucaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jessica Hendry",
      "Christian Fechter"
     ],
     "a": [
      "Cameron Barraco",
      "Shreyas Pani"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Claire Malone",
      "David Lavy"
     ],
     "a": [
      "Morgan Fishman",
      "Anthony Ursino"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Ashley Georgevich",
      "Beatriz Lopez Albarracin"
     ],
     "a": [
      "Ruhi Shah",
      "Richa Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jessica Hendry",
      "Jessica Pevny"
     ],
     "a": [
      "Cameron Barraco",
      "Morgan Fishman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Daniel Kulik",
      "David Lavy"
     ],
     "a": [
      "Anthony Ursino",
      "Dilan Shah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Christian Fechter",
      "Alvaro Regalado"
     ],
     "a": [
      "Maanav Shah",
      "Chris Bucaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Beatriz Lopez Albarracin",
      "Alvaro Regalado"
     ],
     "a": [
      "Ruhi Shah",
      "Maanav Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Ashley Georgevich",
      "David Lavy"
     ],
     "a": [
      "Cameron Barraco",
      "Chris Bucaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Claire Malone",
      "Daniel Kulik"
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
      "Jessica Hendry",
      "Christian Fechter"
     ],
     "a": [
      "Morgan Fishman",
      "Anthony Ursino"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jessica Hendry",
      "Jessica Pevny"
     ],
     "a": [
      "Ruhi Shah",
      "Morgan Fishman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Ashley Georgevich",
      "Claire Malone"
     ],
     "a": [
      "Cameron Barraco",
      "Richa Shah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Daniel Kulik",
      "Alvaro Regalado"
     ],
     "a": [
      "Chris Bucaro",
      "Dilan Shah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "David Lavy",
      "Christian Fechter"
     ],
     "a": [
      "Maanav Shah",
      "Shreyas Pani"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jessica Hendry",
      "Alvaro Regalado"
     ],
     "a": [
      "Cameron Barraco",
      "Chris Bucaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Beatriz Lopez Albarracin",
      "Christian Fechter"
     ],
     "a": [
      "Ruhi Shah",
      "Anthony Ursino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Claire Malone",
      "David Lavy"
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
      "Jessica Pevny",
      "Daniel Kulik"
     ],
     "a": [
      "Morgan Fishman",
      "Maanav Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Ashley Georgevich",
      "Jessica Hendry"
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
     "as": 9,
     "h": [
      "Claire Malone",
      "Jessica Pevny"
     ],
     "a": [
      "Morgan Fishman",
      "Cameron Barraco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "David Lavy",
      "Alvaro Regalado"
     ],
     "a": [
      "Maanav Shah",
      "Dilan Shah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Daniel Kulik",
      "Christian Fechter"
     ],
     "a": [
      "Shreyas Pani",
      "Anthony Ursino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Claire Malone",
      "Christian Fechter"
     ],
     "a": [
      "Richa Shah",
      "Dilan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Beatriz Lopez Albarracin",
      "Alvaro Regalado"
     ],
     "a": [
      "Ruhi Shah",
      "Chris Bucaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ashley Georgevich",
      "Daniel Kulik"
     ],
     "a": [
      "Morgan Fishman",
      "Shreyas Pani"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jessica Pevny",
      "David Lavy"
     ],
     "a": [
      "Cameron Barraco",
      "Anthony Ursino"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ashley Georgevich",
      "Jessica Hendry"
     ],
     "a": [
      "Richa Shah",
      "Morgan Fishman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Jessica Pevny",
      "Beatriz Lopez Albarracin"
     ],
     "a": [
      "Ruhi Shah",
      "Cameron Barraco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "David Lavy",
      "Daniel Kulik"
     ],
     "a": [
      "Chris Bucaro",
      "Shreyas Pani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Christian Fechter",
      "Alvaro Regalado"
     ],
     "a": [
      "Maanav Shah",
      "Dilan Shah"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "away",
   "week": 7,
   "home": "Bounce Malvern",
   "away": "Dill Dinkers Hatboro",
   "time": "2026-04-08T19:30:00",
   "complete": true,
   "homePoints": 516,
   "awayPoints": 652,
   "homeGW": 6,
   "awayGW": 26,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Yuki Kim",
      "Lou Frignito"
     ],
     "a": [
      "Hannah Nussbaum",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Teresa Wang",
      "Jordan Long"
     ],
     "a": [
      "Nahla Bernhardt",
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
      "Matthew Kraft"
     ],
     "a": [
      "Allison Tarnoff",
      "Andrew Wakefield"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Katherine Maruyama",
      "Grant Hanak"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Ozair Ibrahim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Yuki Kim",
      "Teresa Wang"
     ],
     "a": [
      "Hannah Nussbaum",
      "Nahla Bernhardt"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Katherine Maruyama",
      "Nam Barsh"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Allison Tarnoff"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Lou Frignito",
      "Grant Hanak"
     ],
     "a": [
      "Jonah Fliegelman",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jordan Long",
      "Nick Meale"
     ],
     "a": [
      "Ozair Ibrahim",
      "Kenoa Tio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Teresa Wang",
      "Lou Frignito"
     ],
     "a": [
      "Hannah Nussbaum",
      "Kenoa Tio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Nam Barsh",
      "Matthew Kraft"
     ],
     "a": [
      "Nahla Bernhardt",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Kathleen Dougherty",
      "Grant Hanak"
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
     "as": 19,
     "h": [
      "Yuki Kim",
      "Jordan Long"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Teresa Wang",
      "Katherine Maruyama"
     ],
     "a": [
      "Hannah Nussbaum",
      "Nahla Bernhardt"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kathleen Dougherty",
      "Nam Barsh"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Allison Tarnoff"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lou Frignito",
      "Nick Meale"
     ],
     "a": [
      "Dylan Ashbach",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jordan Long",
      "Matthew Kraft"
     ],
     "a": [
      "Ozair Ibrahim",
      "Kenoa Tio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Yuki Kim",
      "Lou Frignito"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Nam Barsh",
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
     "as": 20,
     "h": [
      "Kathleen Dougherty",
      "Matthew Kraft"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Andrew Wakefield"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Katherine Maruyama",
      "Grant Hanak"
     ],
     "a": [
      "Allison Tarnoff",
      "Ozair Ibrahim"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Nam Barsh",
      "Yuki Kim"
     ],
     "a": [
      "Hannah Nussbaum",
      "Allison Tarnoff"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Teresa Wang",
      "Kathleen Dougherty"
     ],
     "a": [
      "Nahla Bernhardt",
      "Alyssa Tartaglia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Grant Hanak",
      "Nick Meale"
     ],
     "a": [
      "Dylan Ashbach",
      "Andrew Wakefield"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jordan Long",
      "Matthew Kraft"
     ],
     "a": [
      "Ozair Ibrahim",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Teresa Wang",
      "Lou Frignito"
     ],
     "a": [
      "Nahla Bernhardt",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Katherine Maruyama",
      "Matthew Kraft"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Kenoa Tio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Yuki Kim",
      "Grant Hanak"
     ],
     "a": [
      "Allison Tarnoff",
      "Andrew Wakefield"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Kathleen Dougherty",
      "Nick Meale"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Yuki Kim",
      "Teresa Wang"
     ],
     "a": [
      "Hannah Nussbaum",
      "Kaylyn Swankoski"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Katherine Maruyama",
      "Nam Barsh"
     ],
     "a": [
      "Nahla Bernhardt",
      "Alyssa Tartaglia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lou Frignito",
      "Grant Hanak"
     ],
     "a": [
      "Dylan Ashbach",
      "Kenoa Tio"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Jordan Long",
      "Nick Meale"
     ],
     "a": [
      "Andrew Wakefield",
      "Ozair Ibrahim"
     ]
    }
   ],
   "subs": [
    "Teresa Wang"
   ]
  },
  {
   "result": "away",
   "week": 7,
   "home": "Pickleball Kingdom Watchung",
   "away": "Pickle House",
   "time": "2026-04-08T19:30:00",
   "complete": true,
   "homePoints": 608,
   "awayPoints": 642,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Doryan Amato",
      "Gautham Bondugula"
     ],
     "a": [
      "Taylor Hartman",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Gift Horn",
      "Hruday Vemparala"
     ],
     "a": [
      "Yoyo Shen",
      "Jaco De Waal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Chanda Mccoy",
      "Ken Velarde"
     ],
     "a": [
      "Lissa Eagles",
      "Kishan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Chrissy Sandella",
      "Daniel Gallegos"
     ],
     "a": [
      "Emily Babinsky",
      "Tom Laiso"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Chrissy Sandella",
      "Gift Horn"
     ],
     "a": [
      "Taylor Hartman",
      "Lissa Eagles"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Chanda Mccoy",
      "Doryan Amato"
     ],
     "a": [
      "Yoyo Shen",
      "Emily Babinsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Hruday Vemparala",
      "Zach Knapp"
     ],
     "a": [
      "Kishan Shah",
      "Jaco De Waal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Ken Velarde",
      "Daniel Gallegos"
     ],
     "a": [
      "Chris Damato",
      "Tom Laiso"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Gift Horn",
      "Hruday Vemparala"
     ],
     "a": [
      "Yoyo Shen",
      "Jaco De Waal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Chanda Mccoy",
      "Ken Velarde"
     ],
     "a": [
      "Lissa Eagles",
      "Kishan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Doryan Amato",
      "Daniel Gallegos"
     ],
     "a": [
      "Emily Babinsky",
      "Tom Laiso"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Chrissy Sandella",
      "Gautham Bondugula"
     ],
     "a": [
      "Taylor Hartman",
      "Chris Damato"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Chrissy Sandella",
      "Gift Horn"
     ],
     "a": [
      "Taylor Hartman",
      "Yoyo Shen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Chanda Mccoy",
      "Doryan Amato"
     ],
     "a": [
      "Lissa Eagles",
      "Emily Babinsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Hruday Vemparala",
      "Zach Knapp"
     ],
     "a": [
      "Kishan Shah",
      "Jaco De Waal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ken Velarde",
      "Daniel Gallegos"
     ],
     "a": [
      "Chris Damato",
      "Tom Laiso"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Chrissy Sandella",
      "Hruday Vemparala"
     ],
     "a": [
      "Lissa Eagles",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Gift Horn",
      "Daniel Gallegos"
     ],
     "a": [
      "Emily Babinsky",
      "Kishan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Doryan Amato",
      "Zach Knapp"
     ],
     "a": [
      "Taylor Hartman",
      "Jaco De Waal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Chanda Mccoy",
      "Gautham Bondugula"
     ],
     "a": [
      "Yoyo Shen",
      "Tom Laiso"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Chanda Mccoy",
      "Chrissy Sandella"
     ],
     "a": [
      "Taylor Hartman",
      "Yoyo Shen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Doryan Amato",
      "Gift Horn"
     ],
     "a": [
      "Lissa Eagles",
      "Emily Babinsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Gautham Bondugula",
      "Zach Knapp"
     ],
     "a": [
      "Chris Damato",
      "Jaco De Waal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Hruday Vemparala",
      "Ken Velarde"
     ],
     "a": [
      "Kishan Shah",
      "Tom Laiso"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Doryan Amato",
      "Zach Knapp"
     ],
     "a": [
      "Emily Babinsky",
      "Jaco De Waal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Chrissy Sandella",
      "Hruday Vemparala"
     ],
     "a": [
      "Lissa Eagles",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Gift Horn",
      "Daniel Gallegos"
     ],
     "a": [
      "Taylor Hartman",
      "Kishan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Chanda Mccoy",
      "Gautham Bondugula"
     ],
     "a": [
      "Yoyo Shen",
      "Tom Laiso"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Doryan Amato",
      "Gift Horn"
     ],
     "a": [
      "Taylor Hartman",
      "Lissa Eagles"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Chanda Mccoy",
      "Chrissy Sandella"
     ],
     "a": [
      "Emily Babinsky",
      "Yoyo Shen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Hruday Vemparala",
      "Ken Velarde"
     ],
     "a": [
      "Chris Damato",
      "Kishan Shah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Gautham Bondugula",
      "Zach Knapp"
     ],
     "a": [
      "Jaco De Waal",
      "Tom Laiso"
     ]
    }
   ],
   "subs": [
    "Tom Laiso"
   ]
  },
  {
   "result": "home",
   "week": 7,
   "home": "Flemington",
   "away": "Picklr Fair Lawn",
   "time": "2026-04-08T19:30:00",
   "complete": true,
   "homePoints": 626,
   "awayPoints": 605,
   "homeGW": 16,
   "awayGW": 16,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Melissa Dardani",
      "Thomas Connolly"
     ],
     "a": [
      "Aya Haruyama",
      "Nari Watanabe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Susan Ackley",
      "Matthew Matro"
     ],
     "a": [
      "Johanna Wagner",
      "Chad Durkin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Aimee Castellano",
      "Robbie Oddy"
     ],
     "a": [
      "Caitlyn Moore",
      "Phil Chang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Courtney Greener",
      "Varun Prakash"
     ],
     "a": [
      "Kara Infante",
      "Jansen Tubo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Courtney Greener",
      "Melissa Dardani"
     ],
     "a": [
      "Johanna Wagner",
      "Kara Infante"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Christine Ferraez",
      "Aimee Castellano"
     ],
     "a": [
      "Aya Haruyama",
      "Caitlyn Moore"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Matthew Matro",
      "Robbie Oddy"
     ],
     "a": [
      "Phil Chang",
      "Chad Durkin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Varun Prakash",
      "Thomas Connolly"
     ],
     "a": [
      "Jansen Tubo",
      "Nari Watanabe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Susan Ackley",
      "Ross Switkes"
     ],
     "a": [
      "Tin Wai Kwan",
      "Pablo Shin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Courtney Greener",
      "Matthew Matro"
     ],
     "a": [
      "Kara Infante",
      "Jansen Tubo"
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
      "Aya Haruyama",
      "Nari Watanabe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Christine Ferraez",
      "Robbie Oddy"
     ],
     "a": [
      "Caitlyn Moore",
      "Phil Chang"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Melissa Dardani",
      "Courtney Greener"
     ],
     "a": [
      "Johanna Wagner",
      "Tin Wai Kwan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Aimee Castellano",
      "Susan Ackley"
     ],
     "a": [
      "Aya Haruyama",
      "Caitlyn Moore"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Matthew Matro",
      "Ross Switkes"
     ],
     "a": [
      "Pablo Shin",
      "Chad Durkin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Thomas Connolly",
      "Varun Prakash"
     ],
     "a": [
      "Phil Chang",
      "Nari Watanabe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Courtney Greener",
      "Robbie Oddy"
     ],
     "a": [
      "Tin Wai Kwan",
      "Pablo Shin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Melissa Dardani",
      "Varun Prakash"
     ],
     "a": [
      "Caitlyn Moore",
      "Jansen Tubo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Susan Ackley",
      "Ross Switkes"
     ],
     "a": [
      "Johanna Wagner",
      "Phil Chang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Christine Ferraez",
      "Matthew Matro"
     ],
     "a": [
      "Kara Infante",
      "Nari Watanabe"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Susan Ackley",
      "Aimee Castellano"
     ],
     "a": [
      "Johanna Wagner",
      "Caitlyn Moore"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Melissa Dardani",
      "Christine Ferraez"
     ],
     "a": [
      "Aya Haruyama",
      "Kara Infante"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Matthew Matro",
      "Ross Switkes"
     ],
     "a": [
      "Phil Chang",
      "Chad Durkin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Robbie Oddy",
      "Thomas Connolly"
     ],
     "a": [
      "Pablo Shin",
      "Nari Watanabe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Courtney Greener",
      "Matthew Matro"
     ],
     "a": [
      "Tin Wai Kwan",
      "Jansen Tubo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Christine Ferraez",
      "Ross Switkes"
     ],
     "a": [
      "Aya Haruyama",
      "Pablo Shin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Melissa Dardani",
      "Robbie Oddy"
     ],
     "a": [
      "Johanna Wagner",
      "Chad Durkin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Aimee Castellano",
      "Varun Prakash"
     ],
     "a": [
      "Kara Infante",
      "Nari Watanabe"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Courtney Greener",
      "Susan Ackley"
     ],
     "a": [
      "Johanna Wagner",
      "Caitlyn Moore"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Christine Ferraez",
      "Aimee Castellano"
     ],
     "a": [
      "Tin Wai Kwan",
      "Aya Haruyama"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Varun Prakash",
      "Ross Switkes"
     ],
     "a": [
      "Phil Chang",
      "Jansen Tubo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Thomas Connolly",
      "Matthew Matro"
     ],
     "a": [
      "Pablo Shin",
      "Chad Durkin"
     ]
    }
   ],
   "subs": [
    "Nari Watanabe"
   ]
  },
  {
   "result": "away",
   "week": 7,
   "home": "Four Seasons",
   "away": "Bounce Philly",
   "time": "2026-04-08T19:30:00",
   "complete": true,
   "homePoints": 546,
   "awayPoints": 659,
   "homeGW": 9,
   "awayGW": 23,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Tess Fisher",
      "Eric Gibbs"
     ],
     "a": [
      "Charlotte Healey",
      "Alex Boory"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lauren Mercado",
      "Zyril Carilo"
     ],
     "a": [
      "Alex Abad",
      "Zachary Lessner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Roshi Desilva",
      "Justin Bautista"
     ],
     "a": [
      "Julia Sternberg",
      "Bruno Casino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Anh Nguyen",
      "Aj Pingol"
     ],
     "a": [
      "Rachel Alfano",
      "Alexander Tong"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Roshi Desilva",
      "Melissa Xu"
     ],
     "a": [
      "Alex Abad",
      "Rachel Alfano"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Tess Fisher",
      "Lauren Mercado"
     ],
     "a": [
      "Alyssa Boyle",
      "Charlotte Healey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Royce Chan",
      "Eric Gibbs"
     ],
     "a": [
      "Alexander Tong",
      "Ashwin Korde"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Justin Bautista",
      "Aj Pingol"
     ],
     "a": [
      "Bruno Casino",
      "Zachary Lessner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lauren Mercado",
      "Royce Chan"
     ],
     "a": [
      "Charlotte Healey",
      "Alex Boory"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Melissa Xu",
      "Aj Pingol"
     ],
     "a": [
      "Alex Abad",
      "Zachary Lessner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Roshi Desilva",
      "Justin Bautista"
     ],
     "a": [
      "Julia Sternberg",
      "Bruno Casino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Tess Fisher",
      "Zyril Carilo"
     ],
     "a": [
      "Alyssa Boyle",
      "Ashwin Korde"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Tess Fisher",
      "Lauren Mercado"
     ],
     "a": [
      "Alyssa Boyle",
      "Charlotte Healey"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Roshi Desilva",
      "Anh Nguyen"
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
      "Royce Chan",
      "Zyril Carilo"
     ],
     "a": [
      "Alexander Tong",
      "Ashwin Korde"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Justin Bautista",
      "Eric Gibbs"
     ],
     "a": [
      "Bruno Casino",
      "Alex Boory"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Roshi Desilva",
      "Eric Gibbs"
     ],
     "a": [
      "Alex Abad",
      "Alex Boory"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Anh Nguyen",
      "Justin Bautista"
     ],
     "a": [
      "Alyssa Boyle",
      "Bruno Casino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Melissa Xu",
      "Aj Pingol"
     ],
     "a": [
      "Rachel Alfano",
      "Alexander Tong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tess Fisher",
      "Royce Chan"
     ],
     "a": [
      "Julia Sternberg",
      "Zachary Lessner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Tess Fisher",
      "Roshi Desilva"
     ],
     "a": [
      "Alyssa Boyle",
      "Alex Abad"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Anh Nguyen",
      "Melissa Xu"
     ],
     "a": [
      "Rachel Alfano",
      "Charlotte Healey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Eric Gibbs",
      "Aj Pingol"
     ],
     "a": [
      "Alexander Tong",
      "Zachary Lessner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Royce Chan",
      "Zyril Carilo"
     ],
     "a": [
      "Ashwin Korde",
      "Alex Boory"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Lauren Mercado",
      "Royce Chan"
     ],
     "a": [
      "Alex Abad",
      "Alex Boory"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Melissa Xu",
      "Justin Bautista"
     ],
     "a": [
      "Alyssa Boyle",
      "Bruno Casino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Anh Nguyen",
      "Eric Gibbs"
     ],
     "a": [
      "Julia Sternberg",
      "Alexander Tong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Tess Fisher",
      "Zyril Carilo"
     ],
     "a": [
      "Charlotte Healey",
      "Ashwin Korde"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Tess Fisher",
      "Anh Nguyen"
     ],
     "a": [
      "Rachel Alfano",
      "Julia Sternberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Lauren Mercado",
      "Melissa Xu"
     ],
     "a": [
      "Charlotte Healey",
      "Alex Abad"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Justin Bautista",
      "Aj Pingol"
     ],
     "a": [
      "Alexander Tong",
      "Zachary Lessner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Royce Chan",
      "Eric Gibbs"
     ],
     "a": [
      "Bruno Casino",
      "Ashwin Korde"
     ]
    }
   ],
   "subs": [
    "Aj Pingol"
   ]
  },
  {
   "result": "home",
   "week": 8,
   "home": "Bounce Malvern",
   "away": "Four Seasons",
   "time": "2026-04-15T19:30:00",
   "complete": true,
   "homePoints": 654,
   "awayPoints": 649,
   "homeGW": 20,
   "awayGW": 12,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Yuki Kim",
      "Grant Hanak"
     ],
     "a": [
      "Jessica Zook",
      "Brian Hamilton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Julia Plein",
      "Casey Jannetta"
     ],
     "a": [
      "Tess Fisher",
      "Royce Chan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Nam Barsh",
      "Nick Meale"
     ],
     "a": [
      "Rachel Hannum",
      "Zyril Carilo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kathleen Dougherty",
      "Matthew Kraft"
     ],
     "a": [
      "Courtney Davis",
      "Eric Gibbs"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Megan Harvey",
      "Yuki Kim"
     ],
     "a": [
      "Tess Fisher",
      "Courtney Davis"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Kathleen Dougherty",
      "Julia Plein"
     ],
     "a": [
      "Rachel Hannum",
      "Jessica Zook"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Grant Hanak",
      "Nick Meale"
     ],
     "a": [
      "Royce Chan",
      "David D'Amico"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Shashank Kamdar",
      "Matthew Kraft"
     ],
     "a": [
      "Brian Hamilton",
      "Eric Gibbs"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Yuki Kim",
      "Grant Hanak"
     ],
     "a": [
      "Courtney Davis",
      "Eric Gibbs"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Nam Barsh",
      "Nick Meale"
     ],
     "a": [
      "Rachel Hannum",
      "Royce Chan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Kathleen Dougherty",
      "Matthew Kraft"
     ],
     "a": [
      "Tess Fisher",
      "Zyril Carilo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Julia Plein",
      "Casey Jannetta"
     ],
     "a": [
      "Jessica Zook",
      "David D'Amico"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Megan Harvey",
      "Yuki Kim"
     ],
     "a": [
      "Rachel Hannum",
      "Jessica Zook"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Nam Barsh",
      "Julia Plein"
     ],
     "a": [
      "Tess Fisher",
      "Courtney Davis"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Shashank Kamdar",
      "Casey Jannetta"
     ],
     "a": [
      "Royce Chan",
      "Zyril Carilo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Grant Hanak",
      "Nick Meale"
     ],
     "a": [
      "Brian Hamilton",
      "David D'Amico"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Megan Harvey",
      "Grant Hanak"
     ],
     "a": [
      "Courtney Davis",
      "Brian Hamilton"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Julia Plein",
      "Shashank Kamdar"
     ],
     "a": [
      "Rachel Hannum",
      "Royce Chan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Nam Barsh",
      "Matthew Kraft"
     ],
     "a": [
      "Tess Fisher",
      "Zyril Carilo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Kathleen Dougherty",
      "Casey Jannetta"
     ],
     "a": [
      "Jessica Zook",
      "David D'Amico"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Julia Plein",
      "Nam Barsh"
     ],
     "a": [
      "Tess Fisher",
      "Rachel Hannum"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kathleen Dougherty",
      "Megan Harvey"
     ],
     "a": [
      "Courtney Davis",
      "Jessica Zook"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Grant Hanak",
      "Shashank Kamdar"
     ],
     "a": [
      "Royce Chan",
      "Zyril Carilo"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Nick Meale",
      "Casey Jannetta"
     ],
     "a": [
      "Brian Hamilton",
      "Eric Gibbs"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Megan Harvey",
      "Matthew Kraft"
     ],
     "a": [
      "Courtney Davis",
      "David D'Amico"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Nam Barsh",
      "Casey Jannetta"
     ],
     "a": [
      "Tess Fisher",
      "Eric Gibbs"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Julia Plein",
      "Shashank Kamdar"
     ],
     "a": [
      "Rachel Hannum",
      "Zyril Carilo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kathleen Dougherty",
      "Nick Meale"
     ],
     "a": [
      "Jessica Zook",
      "Brian Hamilton"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Nam Barsh",
      "Megan Harvey"
     ],
     "a": [
      "Tess Fisher",
      "Rachel Hannum"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kathleen Dougherty",
      "Julia Plein"
     ],
     "a": [
      "Courtney Davis",
      "Jessica Zook"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Nick Meale",
      "Casey Jannetta"
     ],
     "a": [
      "Royce Chan",
      "David D'Amico"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Grant Hanak",
      "Matthew Kraft"
     ],
     "a": [
      "Zyril Carilo",
      "Eric Gibbs"
     ]
    }
   ],
   "subs": [
    "David D'Amico",
    "Jessica Zook"
   ]
  },
  {
   "result": "away",
   "week": 8,
   "home": "Pickleball Kingdom Watchung",
   "away": "Monroe",
   "time": "2026-04-15T19:30:00",
   "complete": true,
   "homePoints": 577,
   "awayPoints": 649,
   "homeGW": 9,
   "awayGW": 23,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Gift Horn",
      "Hruday Vemparala"
     ],
     "a": [
      "Ruhi Shah",
      "Maanav Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Noelle Ramirez",
      "James Cannizzaro"
     ],
     "a": [
      "Morgan Fishman",
      "Shreyas Pani"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Doryan Amato",
      "Fabricio Gaona"
     ],
     "a": [
      "Cameron Barraco",
      "Jacob Yandoli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Liby Saigal",
      "Nathan Malhotra"
     ],
     "a": [
      "Amanda Ksiezopolski",
      "Chris Frangipane"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Gift Horn",
      "Noelle Ramirez"
     ],
     "a": [
      "Ruhi Shah",
      "Morgan Fishman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Doryan Amato",
      "Liby Saigal"
     ],
     "a": [
      "Cameron Barraco",
      "Amanda Ksiezopolski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Hruday Vemparala",
      "James Cannizzaro"
     ],
     "a": [
      "Chris Bucaro",
      "Maanav Shah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Nathan Malhotra",
      "Fabricio Gaona"
     ],
     "a": [
      "Chris Frangipane",
      "Jacob Yandoli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Liby Saigal",
      "Nathan Malhotra"
     ],
     "a": [
      "Cameron Barraco",
      "Chris Bucaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Doryan Amato",
      "Fabricio Gaona"
     ],
     "a": [
      "Morgan Fishman",
      "Jacob Yandoli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Noelle Ramirez",
      "James Cannizzaro"
     ],
     "a": [
      "Amanda Ksiezopolski",
      "Shreyas Pani"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Gift Horn",
      "Hruday Vemparala"
     ],
     "a": [
      "Ruhi Shah",
      "Maanav Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Gift Horn",
      "Noelle Ramirez"
     ],
     "a": [
      "Ruhi Shah",
      "Cameron Barraco"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Doryan Amato",
      "Liby Saigal"
     ],
     "a": [
      "Morgan Fishman",
      "Amanda Ksiezopolski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Hruday Vemparala",
      "James Cannizzaro"
     ],
     "a": [
      "Chris Bucaro",
      "Maanav Shah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Nathan Malhotra",
      "Fabricio Gaona"
     ],
     "a": [
      "Shreyas Pani",
      "Chris Frangipane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Noelle Ramirez",
      "Fabricio Gaona"
     ],
     "a": [
      "Morgan Fishman",
      "Jacob Yandoli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Liby Saigal",
      "Hruday Vemparala"
     ],
     "a": [
      "Cameron Barraco",
      "Chris Frangipane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Gift Horn",
      "James Cannizzaro"
     ],
     "a": [
      "Ruhi Shah",
      "Chris Bucaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Doryan Amato",
      "Nathan Malhotra"
     ],
     "a": [
      "Amanda Ksiezopolski",
      "Maanav Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Gift Horn",
      "Liby Saigal"
     ],
     "a": [
      "Ruhi Shah",
      "Cameron Barraco"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Doryan Amato",
      "Noelle Ramirez"
     ],
     "a": [
      "Morgan Fishman",
      "Amanda Ksiezopolski"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "James Cannizzaro",
      "Fabricio Gaona"
     ],
     "a": [
      "Maanav Shah",
      "Shreyas Pani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Hruday Vemparala",
      "Nathan Malhotra"
     ],
     "a": [
      "Chris Bucaro",
      "Jacob Yandoli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Liby Saigal",
      "Fabricio Gaona"
     ],
     "a": [
      "Amanda Ksiezopolski",
      "Shreyas Pani"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Gift Horn",
      "James Cannizzaro"
     ],
     "a": [
      "Ruhi Shah",
      "Chris Frangipane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Doryan Amato",
      "Hruday Vemparala"
     ],
     "a": [
      "Cameron Barraco",
      "Chris Bucaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Noelle Ramirez",
      "Nathan Malhotra"
     ],
     "a": [
      "Morgan Fishman",
      "Maanav Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Gift Horn",
      "Liby Saigal"
     ],
     "a": [
      "Ruhi Shah",
      "Amanda Ksiezopolski"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Doryan Amato",
      "Noelle Ramirez"
     ],
     "a": [
      "Cameron Barraco",
      "Morgan Fishman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Hruday Vemparala",
      "Nathan Malhotra"
     ],
     "a": [
      "Chris Bucaro",
      "Chris Frangipane"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "James Cannizzaro",
      "Fabricio Gaona"
     ],
     "a": [
      "Shreyas Pani",
      "Jacob Yandoli"
     ]
    }
   ],
   "subs": [
    "Noelle Ramirez",
    "Liby Saigal",
    "Nathan Malhotra"
   ]
  },
  {
   "result": null,
   "week": 8,
   "home": "Dill Dinkers Hatboro",
   "away": "ACE",
   "time": "2026-04-15T19:30:00",
   "complete": false
  },
  {
   "result": "home",
   "week": 8,
   "home": "Bounce Philly",
   "away": "Jersey Devil",
   "time": "2026-04-15T19:30:00",
   "complete": true,
   "homePoints": 623,
   "awayPoints": 606,
   "homeGW": 19,
   "awayGW": 13,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Rachel Alfano",
      "Alexander Tong"
     ],
     "a": [
      "Shelah Wallace",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jingru Du",
      "Bruno Casino"
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
     "as": 17,
     "h": [
      "Alex Abad",
      "Alex Boory"
     ],
     "a": [
      "Kylie Lupica",
      "Zach Bowe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Julia Sternberg",
      "William Hayes"
     ],
     "a": [
      "Michaela Pierznik",
      "Johny Mario"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Alex Abad",
      "Rachel Alfano"
     ],
     "a": [
      "Kylie Lupica",
      "Arianna Haresign"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Julia Sternberg",
      "Jingru Du"
     ],
     "a": [
      "Shelah Wallace",
      "Kaia Hoak"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Alexander Tong",
      "William Hayes"
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
     "as": 12,
     "h": [
      "Mark Kilimnik",
      "Bruno Casino"
     ],
     "a": [
      "Matthew Chen",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Rachel Alfano",
      "Alexander Tong"
     ],
     "a": [
      "Shelah Wallace",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Jingru Du",
      "Bruno Casino"
     ],
     "a": [
      "Arianna Haresign",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Alex Abad",
      "Alex Boory"
     ],
     "a": [
      "Michaela Pierznik",
      "Matthew Chen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Julia Sternberg",
      "Mark Kilimnik"
     ],
     "a": [
      "Kaia Hoak",
      "Johny Mario"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Rachel Alfano",
      "Julia Sternberg"
     ],
     "a": [
      "Kylie Lupica",
      "Arianna Haresign"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Alex Abad",
      "Jingru Du"
     ],
     "a": [
      "Kaia Hoak",
      "Shelah Wallace"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Bruno Casino",
      "William Hayes"
     ],
     "a": [
      "Johny Mario",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Alexander Tong",
      "Alex Boory"
     ],
     "a": [
      "Matthew Chen",
      "Zach Bowe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Rachel Alfano",
      "William Hayes"
     ],
     "a": [
      "Kaia Hoak",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Alex Abad",
      "Mark Kilimnik"
     ],
     "a": [
      "Michaela Pierznik",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jingru Du",
      "Alexander Tong"
     ],
     "a": [
      "Arianna Haresign",
      "Zach Bowe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Julia Sternberg",
      "Alex Boory"
     ],
     "a": [
      "Kylie Lupica",
      "Matthew Chen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Rachel Alfano",
      "Jingru Du"
     ],
     "a": [
      "Shelah Wallace",
      "Kylie Lupica"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Alex Abad",
      "Julia Sternberg"
     ],
     "a": [
      "Michaela Pierznik",
      "Kaia Hoak"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "William Hayes",
      "Bruno Casino"
     ],
     "a": [
      "Matthew Chen",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Alex Boory",
      "Mark Kilimnik"
     ],
     "a": [
      "Johny Mario",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jingru Du",
      "Alexander Tong"
     ],
     "a": [
      "Arianna Haresign",
      "Zach Bowe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Julia Sternberg",
      "Bruno Casino"
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
     "as": 12,
     "h": [
      "Alex Abad",
      "Mark Kilimnik"
     ],
     "a": [
      "Kylie Lupica",
      "Matthew Chen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Rachel Alfano",
      "Alex Boory"
     ],
     "a": [
      "Kaia Hoak",
      "Johny Mario"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Julia Sternberg",
      "Rachel Alfano"
     ],
     "a": [
      "Michaela Pierznik",
      "Arianna Haresign"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Alex Abad",
      "Jingru Du"
     ],
     "a": [
      "Shelah Wallace",
      "Kylie Lupica"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Alexander Tong",
      "William Hayes"
     ],
     "a": [
      "Zach Bowe",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Bruno Casino",
      "Mark Kilimnik"
     ],
     "a": [
      "Johny Mario",
      "Tyler Arsenault"
     ]
    }
   ],
   "subs": [
    "Jingru Du"
   ]
  },
  {
   "result": "away",
   "week": 8,
   "home": "Flemington",
   "away": "Pickle House",
   "time": "2026-04-15T19:30:00",
   "complete": true,
   "homePoints": 534,
   "awayPoints": 655,
   "homeGW": 6,
   "awayGW": 26,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Suzi Battison",
      "Tim Dowd"
     ],
     "a": [
      "Yoyo Shen",
      "Kishan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Lynda Tomaru",
      "Ross Switkes"
     ],
     "a": [
      "Lissa Eagles",
      "Zach Mcgowan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Courtney Greener",
      "Matthew Matro"
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
      "Christine Ferraez",
      "Robbie Oddy"
     ],
     "a": [
      "Emily Babinsky",
      "Sidd Pathare"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Suzi Battison",
      "Courtney Greener"
     ],
     "a": [
      "Taylor Hartman",
      "Lissa Eagles"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lynda Tomaru",
      "Christine Ferraez"
     ],
     "a": [
      "Yoyo Shen",
      "Emily Babinsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Matthew Matro",
      "Robbie Oddy"
     ],
     "a": [
      "Chris Damato",
      "Kishan Shah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Ross Switkes",
      "Tim Dowd"
     ],
     "a": [
      "Sidd Pathare",
      "Zach Mcgowan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Courtney Greener",
      "Matthew Matro"
     ],
     "a": [
      "Taylor Hartman",
      "Kishan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Suzi Battison",
      "Tim Dowd"
     ],
     "a": [
      "Yoyo Shen",
      "Sidd Pathare"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Lynda Tomaru",
      "Sean O'Connell"
     ],
     "a": [
      "Lissa Eagles",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Melissa Dardani",
      "Ross Switkes"
     ],
     "a": [
      "Emily Babinsky",
      "Zach Mcgowan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Suzi Battison",
      "Christine Ferraez"
     ],
     "a": [
      "Taylor Hartman",
      "Yoyo Shen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Courtney Greener",
      "Melissa Dardani"
     ],
     "a": [
      "Lissa Eagles",
      "Emily Babinsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Ross Switkes",
      "Tim Dowd"
     ],
     "a": [
      "Kishan Shah",
      "Sidd Pathare"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Matthew Matro",
      "Sean O'Connell"
     ],
     "a": [
      "Chris Damato",
      "Zach Mcgowan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Suzi Battison",
      "Ross Switkes"
     ],
     "a": [
      "Yoyo Shen",
      "Sidd Pathare"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Lynda Tomaru",
      "Tim Dowd"
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
      "Melissa Dardani",
      "Matthew Matro"
     ],
     "a": [
      "Emily Babinsky",
      "Kishan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Christine Ferraez",
      "Sean O'Connell"
     ],
     "a": [
      "Lissa Eagles",
      "Zach Mcgowan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Suzi Battison",
      "Courtney Greener"
     ],
     "a": [
      "Taylor Hartman",
      "Yoyo Shen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Melissa Dardani",
      "Lynda Tomaru"
     ],
     "a": [
      "Lissa Eagles",
      "Emily Babinsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Matthew Matro",
      "Ross Switkes"
     ],
     "a": [
      "Zach Mcgowan",
      "Chris Damato"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Sean O'Connell",
      "Tim Dowd"
     ],
     "a": [
      "Kishan Shah",
      "Sidd Pathare"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Suzi Battison",
      "Ross Switkes"
     ],
     "a": [
      "Taylor Hartman",
      "Zach Mcgowan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Lynda Tomaru",
      "Tim Dowd"
     ],
     "a": [
      "Lissa Eagles",
      "Sidd Pathare"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Melissa Dardani",
      "Matthew Matro"
     ],
     "a": [
      "Yoyo Shen",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Courtney Greener",
      "Sean O'Connell"
     ],
     "a": [
      "Emily Babinsky",
      "Kishan Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Courtney Greener",
      "Melissa Dardani"
     ],
     "a": [
      "Taylor Hartman",
      "Lissa Eagles"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Suzi Battison",
      "Lynda Tomaru"
     ],
     "a": [
      "Yoyo Shen",
      "Emily Babinsky"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Matthew Matro",
      "Ross Switkes"
     ],
     "a": [
      "Kishan Shah",
      "Chris Damato"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Sean O'Connell",
      "Tim Dowd"
     ],
     "a": [
      "Sidd Pathare",
      "Zach Mcgowan"
     ]
    }
   ],
   "subs": [
    "Tim Dowd",
    "Sean O'Connell"
   ]
  },
  {
   "result": "home",
   "week": 9,
   "home": "ACE",
   "away": "Bounce Philly",
   "time": "2026-04-22T19:00:00",
   "complete": true,
   "homePoints": 606,
   "awayPoints": 600,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Brittany Hall",
      "Steven Maisonet"
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
     "as": 19,
     "h": [
      "Anita Buggins",
      "Hector Irizarry"
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
     "as": 12,
     "h": [
      "Chaille Godinez",
      "Nathan Law"
     ],
     "a": [
      "Alex Abad",
      "Zachary Lessner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Annemarie Mccartney",
      "Manny Lai"
     ],
     "a": [
      "Julia Sternberg",
      "Jordan Denish"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Anita Buggins",
      "Annemarie Mccartney"
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
     "as": 14,
     "h": [
      "Chaille Godinez",
      "Brittany Hall"
     ],
     "a": [
      "Alyssa Boyle",
      "Julia Sternberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Manny Lai",
      "Hector Irizarry"
     ],
     "a": [
      "Alexander Tong",
      "Jordan Denish"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Nathan Law",
      "Coby Golinkoff"
     ],
     "a": [
      "Zachary Lessner",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Chaille Godinez",
      "Coby Golinkoff"
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
      "Annemarie Mccartney",
      "Hector Irizarry"
     ],
     "a": [
      "Charlotte Healey",
      "Alexander Tong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Danielle Bernero",
      "Steven Maisonet"
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
     "as": 18,
     "h": [
      "Brittany Hall",
      "Nathan Law"
     ],
     "a": [
      "Alex Abad",
      "Jordan Denish"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Annemarie Mccartney",
      "Brittany Hall"
     ],
     "a": [
      "Alex Abad",
      "Julia Sternberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Anita Buggins",
      "Chaille Godinez"
     ],
     "a": [
      "Alyssa Boyle",
      "Charlotte Healey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Manny Lai",
      "Steven Maisonet"
     ],
     "a": [
      "Alexander Tong",
      "Jordan Denish"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Hector Irizarry",
      "Nathan Law"
     ],
     "a": [
      "William Hayes",
      "Zachary Lessner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Annemarie Mccartney",
      "Hector Irizarry"
     ],
     "a": [
      "Julia Sternberg",
      "William Hayes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Danielle Bernero",
      "Coby Golinkoff"
     ],
     "a": [
      "Alex Abad",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Brittany Hall",
      "Manny Lai"
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
     "as": 16,
     "h": [
      "Chaille Godinez",
      "Nathan Law"
     ],
     "a": [
      "Charlotte Healey",
      "Jordan Denish"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Anita Buggins",
      "Chaille Godinez"
     ],
     "a": [
      "Alex Abad",
      "Julia Sternberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Annemarie Mccartney",
      "Brittany Hall"
     ],
     "a": [
      "Alyssa Boyle",
      "Charlotte Healey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Hector Irizarry",
      "Steven Maisonet"
     ],
     "a": [
      "Mark Kilimnik",
      "Alexander Tong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Manny Lai",
      "Coby Golinkoff"
     ],
     "a": [
      "William Hayes",
      "Zachary Lessner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Annemarie Mccartney",
      "Nathan Law"
     ],
     "a": [
      "Julia Sternberg",
      "William Hayes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Chaille Godinez",
      "Steven Maisonet"
     ],
     "a": [
      "Alex Abad",
      "Alexander Tong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Anita Buggins",
      "Coby Golinkoff"
     ],
     "a": [
      "Charlotte Healey",
      "Zachary Lessner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Brittany Hall",
      "Manny Lai"
     ],
     "a": [
      "Alyssa Boyle",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Chaille Godinez",
      "Brittany Hall"
     ],
     "a": [
      "Alex Abad",
      "Charlotte Healey"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Annemarie Mccartney",
      "Anita Buggins"
     ],
     "a": [
      "Alyssa Boyle",
      "Julia Sternberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Coby Golinkoff",
      "Steven Maisonet"
     ],
     "a": [
      "Mark Kilimnik",
      "Jordan Denish"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "Manny Lai",
      "Nathan Law"
     ],
     "a": [
      "Alexander Tong",
      "William Hayes"
     ]
    }
   ],
   "subs": [
    "Coby Golinkoff"
   ]
  },
  {
   "result": "away",
   "week": 9,
   "home": "Picklr Fair Lawn",
   "away": "Pickle House",
   "time": "2026-04-22T19:00:00",
   "complete": true,
   "homePoints": 583,
   "awayPoints": 638,
   "homeGW": 13,
   "awayGW": 19,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kara Infante",
      "Phil Chang"
     ],
     "a": [
      "Lissa Eagles",
      "Kishan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Tin Wai Kwan",
      "Chad Durkin"
     ],
     "a": [
      "Kerrin Maurer",
      "Jaco De Waal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Joy Lai",
      "Stephen Mcnamara"
     ],
     "a": [
      "Taylor Hartman",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Jessica Williamson",
      "Pablo Shin"
     ],
     "a": [
      "Yoyo Shen",
      "Zach Mcgowan"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tin Wai Kwan",
      "Jessica Williamson"
     ],
     "a": [
      "Taylor Hartman",
      "Kerrin Maurer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Sarah Kim",
      "Joy Lai"
     ],
     "a": [
      "Emily Babinsky",
      "Yoyo Shen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Stephen Mcnamara",
      "Fabian Marcos"
     ],
     "a": [
      "Zach Mcgowan",
      "Chris Damato"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Phil Chang",
      "Chad Durkin"
     ],
     "a": [
      "Kishan Shah",
      "Jaco De Waal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jessica Williamson",
      "Fabian Marcos"
     ],
     "a": [
      "Emily Babinsky",
      "Zach Mcgowan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kara Infante",
      "Phil Chang"
     ],
     "a": [
      "Yoyo Shen",
      "Jaco De Waal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Tin Wai Kwan",
      "Chad Durkin"
     ],
     "a": [
      "Lissa Eagles",
      "Kishan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Joy Lai",
      "Stephen Mcnamara"
     ],
     "a": [
      "Kerrin Maurer",
      "Chris Damato"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kara Infante",
      "Jessica Williamson"
     ],
     "a": [
      "Lissa Eagles",
      "Kerrin Maurer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Sarah Kim",
      "Tin Wai Kwan"
     ],
     "a": [
      "Emily Babinsky",
      "Taylor Hartman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Marcos Claros",
      "Pablo Shin"
     ],
     "a": [
      "Jaco De Waal",
      "Zach Mcgowan"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Stephen Mcnamara",
      "Chad Durkin"
     ],
     "a": [
      "Kishan Shah",
      "Chris Damato"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kara Infante",
      "Marcos Claros"
     ],
     "a": [
      "Emily Babinsky",
      "Kishan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jessica Williamson",
      "Pablo Shin"
     ],
     "a": [
      "Taylor Hartman",
      "Zach Mcgowan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Tin Wai Kwan",
      "Stephen Mcnamara"
     ],
     "a": [
      "Yoyo Shen",
      "Jaco De Waal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Joy Lai",
      "Phil Chang"
     ],
     "a": [
      "Kerrin Maurer",
      "Chris Damato"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Joy Lai",
      "Kara Infante"
     ],
     "a": [
      "Emily Babinsky",
      "Yoyo Shen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Sarah Kim",
      "Tin Wai Kwan"
     ],
     "a": [
      "Lissa Eagles",
      "Taylor Hartman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Stephen Mcnamara",
      "Fabian Marcos"
     ],
     "a": [
      "Zach Mcgowan",
      "Chris Damato"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Chad Durkin",
      "Marcos Claros"
     ],
     "a": [
      "Kishan Shah",
      "Jaco De Waal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tin Wai Kwan",
      "Pablo Shin"
     ],
     "a": [
      "Emily Babinsky",
      "Zach Mcgowan"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Kara Infante",
      "Fabian Marcos"
     ],
     "a": [
      "Yoyo Shen",
      "Kishan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Joy Lai",
      "Phil Chang"
     ],
     "a": [
      "Kerrin Maurer",
      "Jaco De Waal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jessica Williamson",
      "Marcos Claros"
     ],
     "a": [
      "Lissa Eagles",
      "Chris Damato"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Sarah Kim",
      "Jessica Williamson"
     ],
     "a": [
      "Yoyo Shen",
      "Kerrin Maurer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Kara Infante",
      "Joy Lai"
     ],
     "a": [
      "Taylor Hartman",
      "Lissa Eagles"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Fabian Marcos",
      "Marcos Claros"
     ],
     "a": [
      "Kishan Shah",
      "Chris Damato"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Chad Durkin",
      "Pablo Shin"
     ],
     "a": [
      "Jaco De Waal",
      "Zach Mcgowan"
     ]
    }
   ],
   "subs": [
    "Joy Lai",
    "Jessica Williamson",
    "Sarah Kim"
   ]
  },
  {
   "result": "away",
   "week": 9,
   "home": "Flemington",
   "away": "Monroe",
   "time": "2026-04-22T19:30:00",
   "complete": true,
   "homePoints": 615,
   "awayPoints": 628,
   "homeGW": 15,
   "awayGW": 17,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lynda Tomaru",
      "Patrick Ryan"
     ],
     "a": [
      "Ruhi Shah",
      "Maanav Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Suzi Battison",
      "Thomas Connolly"
     ],
     "a": [
      "Amanda Ksiezopolski",
      "Shreyas Pani"
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
      "Claire Gaston",
      "Anthony Ursino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Courtney Greener",
      "Matthew Matro"
     ],
     "a": [
      "Richa Shah",
      "Eric Lin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Suzi Battison",
      "Courtney Greener"
     ],
     "a": [
      "Richa Shah",
      "Ruhi Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Lynda Tomaru",
      "Susan Ackley"
     ],
     "a": [
      "Amanda Ksiezopolski",
      "Helen Liu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ross Switkes",
      "Patrick Ryan"
     ],
     "a": [
      "Dilan Shah",
      "Maanav Shah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Thomas Connolly",
      "Matthew Matro"
     ],
     "a": [
      "Anthony Ursino",
      "Shreyas Pani"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Suzi Battison",
      "Thomas Connolly"
     ],
     "a": [
      "Richa Shah",
      "Shreyas Pani"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Courtney Greener",
      "Matthew Matro"
     ],
     "a": [
      "Ruhi Shah",
      "Anthony Ursino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Lynda Tomaru",
      "Patrick Ryan"
     ],
     "a": [
      "Amanda Ksiezopolski",
      "Maanav Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Melissa Dardani",
      "Ross Switkes"
     ],
     "a": [
      "Claire Gaston",
      "Eric Lin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Susan Ackley",
      "Lynda Tomaru"
     ],
     "a": [
      "Richa Shah",
      "Claire Gaston"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Suzi Battison",
      "Melissa Dardani"
     ],
     "a": [
      "Ruhi Shah",
      "Helen Liu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Patrick Ryan",
      "Ross Switkes"
     ],
     "a": [
      "Dilan Shah",
      "Maanav Shah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Matthew Matro",
      "Thomas Connolly"
     ],
     "a": [
      "Shreyas Pani",
      "Eric Lin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Courtney Greener",
      "Patrick Ryan"
     ],
     "a": [
      "Richa Shah",
      "Dilan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Suzi Battison",
      "Ross Switkes"
     ],
     "a": [
      "Ruhi Shah",
      "Maanav Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Melissa Dardani",
      "Matthew Matro"
     ],
     "a": [
      "Claire Gaston",
      "Anthony Ursino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lynda Tomaru",
      "Thomas Connolly"
     ],
     "a": [
      "Amanda Ksiezopolski",
      "Eric Lin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Suzi Battison",
      "Courtney Greener"
     ],
     "a": [
      "Richa Shah",
      "Ruhi Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Susan Ackley",
      "Melissa Dardani"
     ],
     "a": [
      "Claire Gaston",
      "Helen Liu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Thomas Connolly",
      "Ross Switkes"
     ],
     "a": [
      "Dilan Shah",
      "Anthony Ursino"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Patrick Ryan",
      "Matthew Matro"
     ],
     "a": [
      "Maanav Shah",
      "Shreyas Pani"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Courtney Greener",
      "Patrick Ryan"
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
     "as": 15,
     "h": [
      "Suzi Battison",
      "Ross Switkes"
     ],
     "a": [
      "Ruhi Shah",
      "Eric Lin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Susan Ackley",
      "Matthew Matro"
     ],
     "a": [
      "Amanda Ksiezopolski",
      "Maanav Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Melissa Dardani",
      "Thomas Connolly"
     ],
     "a": [
      "Helen Liu",
      "Shreyas Pani"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Suzi Battison",
      "Susan Ackley"
     ],
     "a": [
      "Ruhi Shah",
      "Amanda Ksiezopolski"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lynda Tomaru",
      "Melissa Dardani"
     ],
     "a": [
      "Claire Gaston",
      "Helen Liu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Thomas Connolly",
      "Patrick Ryan"
     ],
     "a": [
      "Dilan Shah",
      "Eric Lin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Ross Switkes",
      "Matthew Matro"
     ],
     "a": [
      "Anthony Ursino",
      "Shreyas Pani"
     ]
    }
   ],
   "subs": [
    "Patrick Ryan"
   ]
  },
  {
   "result": "away",
   "week": 9,
   "home": "Four Seasons",
   "away": "Dill Dinkers Hatboro",
   "time": "2026-04-22T19:30:00",
   "complete": true,
   "homePoints": 485,
   "awayPoints": 654,
   "homeGW": 8,
   "awayGW": 24,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Melissa Xu",
      "Riguo Zheng"
     ],
     "a": [
      "Nahla Bernhardt",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Tess Fisher",
      "Justin Bautista"
     ],
     "a": [
      "Rayna Baizman",
      "Clayton Schmucker"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lauren Mercado",
      "James Chau"
     ],
     "a": [
      "Allison Tarnoff",
      "Ozair Ibrahim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Roshi Desilva",
      "Zyril Carilo"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Kenoa Tio"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Tess Fisher",
      "Roshi Desilva"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Rayna Baizman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jessica Zook",
      "Melissa Xu"
     ],
     "a": [
      "Nahla Bernhardt",
      "Alyssa Tartaglia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Bryan Nardone",
      "James Chau"
     ],
     "a": [
      "Clayton Schmucker",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Justin Bautista",
      "Zyril Carilo"
     ],
     "a": [
      "Dylan Ashbach",
      "Kenoa Tio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Roshi Desilva",
      "Bryan Nardone"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Lauren Mercado",
      "James Chau"
     ],
     "a": [
      "Nahla Bernhardt",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 5,
     "as": 21,
     "h": [
      "Jessica Zook",
      "Riguo Zheng"
     ],
     "a": [
      "Allison Tarnoff",
      "Ozair Ibrahim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Tess Fisher",
      "Justin Bautista"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Kenoa Tio"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Tess Fisher",
      "Roshi Desilva"
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
     "as": 19,
     "h": [
      "Lauren Mercado",
      "Melissa Xu"
     ],
     "a": [
      "Nahla Bernhardt",
      "Alyssa Tartaglia"
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
      "Clayton Schmucker",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Justin Bautista",
      "James Chau"
     ],
     "a": [
      "Dylan Ashbach",
      "Kenoa Tio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Melissa Xu",
      "Riguo Zheng"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Tess Fisher",
      "Zyril Carilo"
     ],
     "a": [
      "Rayna Baizman",
      "Clayton Schmucker"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jessica Zook",
      "Bryan Nardone"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Ozair Ibrahim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Roshi Desilva",
      "Justin Bautista"
     ],
     "a": [
      "Allison Tarnoff",
      "Kenoa Tio"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jessica Zook",
      "Roshi Desilva"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Allison Tarnoff"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Tess Fisher",
      "Lauren Mercado"
     ],
     "a": [
      "Nahla Bernhardt",
      "Rayna Baizman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Bryan Nardone",
      "Riguo Zheng"
     ],
     "a": [
      "Clayton Schmucker",
      "Ozair Ibrahim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "James Chau",
      "Zyril Carilo"
     ],
     "a": [
      "Jonah Fliegelman",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jessica Zook",
      "James Chau"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Melissa Xu",
      "Justin Bautista"
     ],
     "a": [
      "Nahla Bernhardt",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Lauren Mercado",
      "Bryan Nardone"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Ozair Ibrahim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Tess Fisher",
      "Zyril Carilo"
     ],
     "a": [
      "Allison Tarnoff",
      "Kenoa Tio"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Melissa Xu",
      "Jessica Zook"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Allison Tarnoff"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Tess Fisher",
      "Lauren Mercado"
     ],
     "a": [
      "Rayna Baizman",
      "Nahla Bernhardt"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Justin Bautista",
      "Bryan Nardone"
     ],
     "a": [
      "Clayton Schmucker",
      "Ozair Ibrahim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "James Chau",
      "Riguo Zheng"
     ],
     "a": [
      "Dylan Ashbach",
      "Jonah Fliegelman"
     ]
    }
   ],
   "subs": [
    "Jessica Zook",
    "James Chau",
    "Riguo Zheng"
   ]
  },
  {
   "result": "away",
   "week": 9,
   "home": "Pickleball Kingdom Watchung",
   "away": "Pickleball Palace",
   "time": "2026-04-22T19:30:00",
   "complete": true,
   "homePoints": 526,
   "awayPoints": 657,
   "homeGW": 8,
   "awayGW": 24,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Chrissy Sandella",
      "Jerome Bautista"
     ],
     "a": [
      "Ashley Georgevich",
      "Dan Presuto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Liz Chen",
      "Ken Velarde"
     ],
     "a": [
      "Carly Pfeffer",
      "Keith Shedlock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Chanda Mccoy",
      "Fabricio Gaona"
     ],
     "a": [
      "Jessica Hendry",
      "Christian Fechter"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Doryan Amato",
      "Daniel Gallegos"
     ],
     "a": [
      "Claire Malone",
      "David Lavy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Chanda Mccoy",
      "Chrissy Sandella"
     ],
     "a": [
      "Ashley Georgevich",
      "Jenna Irwin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Doryan Amato",
      "Liz Chen"
     ],
     "a": [
      "Jessica Hendry",
      "Carly Pfeffer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Daniel Gallegos",
      "Jerome Bautista"
     ],
     "a": [
      "David Lavy",
      "Daniel Kulik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Fabricio Gaona",
      "Ken Velarde"
     ],
     "a": [
      "Keith Shedlock",
      "Christian Fechter"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Doryan Amato",
      "Daniel Gallegos"
     ],
     "a": [
      "Ashley Georgevich",
      "David Lavy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Chanda Mccoy",
      "Fabricio Gaona"
     ],
     "a": [
      "Jessica Hendry",
      "Keith Shedlock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Liz Chen",
      "Ken Velarde"
     ],
     "a": [
      "Carly Pfeffer",
      "Dan Presuto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Chrissy Sandella",
      "Jerome Bautista"
     ],
     "a": [
      "Claire Malone",
      "Daniel Kulik"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Chanda Mccoy",
      "Chrissy Sandella"
     ],
     "a": [
      "Jessica Hendry",
      "Jenna Irwin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 27,
     "as": 29,
     "h": [
      "Doryan Amato",
      "Liz Chen"
     ],
     "a": [
      "Ashley Georgevich",
      "Claire Malone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Fabricio Gaona",
      "Ken Velarde"
     ],
     "a": [
      "Daniel Kulik",
      "Christian Fechter"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Daniel Gallegos",
      "Jerome Bautista"
     ],
     "a": [
      "David Lavy",
      "Dan Presuto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Chanda Mccoy",
      "Daniel Gallegos"
     ],
     "a": [
      "Ashley Georgevich",
      "Daniel Kulik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Liz Chen",
      "Jerome Bautista"
     ],
     "a": [
      "Jenna Irwin",
      "Keith Shedlock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Chrissy Sandella",
      "Ken Velarde"
     ],
     "a": [
      "Jessica Hendry",
      "Christian Fechter"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Doryan Amato",
      "Fabricio Gaona"
     ],
     "a": [
      "Carly Pfeffer",
      "David Lavy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Chanda Mccoy",
      "Doryan Amato"
     ],
     "a": [
      "Ashley Georgevich",
      "Carly Pfeffer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Chrissy Sandella",
      "Gift Horn"
     ],
     "a": [
      "Jenna Irwin",
      "Claire Malone"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Daniel Gallegos",
      "Ken Velarde"
     ],
     "a": [
      "Dan Presuto",
      "Daniel Kulik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Fabricio Gaona",
      "Jerome Bautista"
     ],
     "a": [
      "Christian Fechter",
      "Keith Shedlock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Gift Horn",
      "Jerome Bautista"
     ],
     "a": [
      "Jessica Hendry",
      "Keith Shedlock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Chanda Mccoy",
      "Daniel Gallegos"
     ],
     "a": [
      "Jenna Irwin",
      "Dan Presuto"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Doryan Amato",
      "Fabricio Gaona"
     ],
     "a": [
      "Claire Malone",
      "Christian Fechter"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Chrissy Sandella",
      "Ken Velarde"
     ],
     "a": [
      "Carly Pfeffer",
      "David Lavy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Chanda Mccoy",
      "Doryan Amato"
     ],
     "a": [
      "Ashley Georgevich",
      "Claire Malone"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Chrissy Sandella",
      "Gift Horn"
     ],
     "a": [
      "Jenna Irwin",
      "Jessica Hendry"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Daniel Gallegos",
      "Ken Velarde"
     ],
     "a": [
      "David Lavy",
      "Dan Presuto"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Fabricio Gaona",
      "Jerome Bautista"
     ],
     "a": [
      "Christian Fechter",
      "Daniel Kulik"
     ]
    }
   ],
   "subs": [
    "Liz Chen",
    "Dan Presuto",
    "Jerome Bautista"
   ]
  },
  {
   "result": "away",
   "week": 10,
   "home": "Bounce Malvern",
   "away": "Jersey Devil",
   "time": "2026-04-28T19:30:00",
   "complete": true,
   "homePoints": 572,
   "awayPoints": 632,
   "homeGW": 10,
   "awayGW": 22,
   "games": [
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
      "Michaela Pierznik",
      "Johny Mario"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Yuki Kim",
      "Grant Hanak"
     ],
     "a": [
      "Shelah Wallace",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Sarah Kline",
      "Nick Meale"
     ],
     "a": [
      "Arianna Haresign",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Nam Barsh",
      "Matthew Kraft"
     ],
     "a": [
      "Rachel Berger",
      "Matthew Chen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Yuki Kim",
      "Megan Harvey"
     ],
     "a": [
      "Arianna Haresign",
      "Shelah Wallace"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Sarah Kline",
      "Kathleen Dougherty"
     ],
     "a": [
      "Kylie Lupica",
      "Rachel Berger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Casey Jannetta",
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
     "as": 19,
     "h": [
      "Nick Meale",
      "Grant Hanak"
     ],
     "a": [
      "Matthew Chen",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Yuki Kim",
      "Grant Hanak"
     ],
     "a": [
      "Michaela Pierznik",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Nam Barsh",
      "Nick Meale"
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
     "as": 16,
     "h": [
      "Kathleen Dougherty",
      "Matthew Kraft"
     ],
     "a": [
      "Kylie Lupica",
      "Matthew Chen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Sarah Kline",
      "Casey Jannetta"
     ],
     "a": [
      "Rachel Berger",
      "Johny Mario"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Yuki Kim",
      "Nam Barsh"
     ],
     "a": [
      "Arianna Haresign",
      "Shelah Wallace"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Megan Harvey",
      "Kathleen Dougherty"
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
      "Nick Meale",
      "Casey Jannetta"
     ],
     "a": [
      "Tyler Arsenault",
      "Zach Bowe"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Shashank Kamdar",
      "Grant Hanak"
     ],
     "a": [
      "Matthew Chen",
      "Johny Mario"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Sarah Kline",
      "Grant Hanak"
     ],
     "a": [
      "Shelah Wallace",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 6,
     "as": 21,
     "h": [
      "Kathleen Dougherty",
      "Matthew Kraft"
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
     "as": 12,
     "h": [
      "Yuki Kim",
      "Nick Meale"
     ],
     "a": [
      "Kylie Lupica",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Megan Harvey",
      "Shashank Kamdar"
     ],
     "a": [
      "Michaela Pierznik",
      "Johny Mario"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Sarah Kline",
      "Yuki Kim"
     ],
     "a": [
      "Shelah Wallace",
      "Rachel Berger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kathleen Dougherty",
      "Nam Barsh"
     ],
     "a": [
      "Kylie Lupica",
      "Michaela Pierznik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Nick Meale",
      "Grant Hanak"
     ],
     "a": [
      "Matthew Chen",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Matthew Kraft",
      "Casey Jannetta"
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
     "as": 15,
     "h": [
      "Yuki Kim",
      "Shashank Kamdar"
     ],
     "a": [
      "Shelah Wallace",
      "Zach Bowe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Nam Barsh",
      "Matthew Kraft"
     ],
     "a": [
      "Rachel Berger",
      "Matthew Chen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Sarah Kline",
      "Casey Jannetta"
     ],
     "a": [
      "Arianna Haresign",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Megan Harvey",
      "Grant Hanak"
     ],
     "a": [
      "Kylie Lupica",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Nam Barsh",
      "Sarah Kline"
     ],
     "a": [
      "Kylie Lupica",
      "Shelah Wallace"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Kathleen Dougherty",
      "Megan Harvey"
     ],
     "a": [
      "Michaela Pierznik",
      "Arianna Haresign"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Matthew Kraft",
      "Shashank Kamdar"
     ],
     "a": [
      "Drew Von Bargen",
      "Zach Bowe"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Nick Meale",
      "Casey Jannetta"
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
   "week": 10,
   "home": "ACE",
   "away": "Four Seasons",
   "time": "2026-04-29T19:00:00",
   "complete": true,
   "homePoints": 594,
   "awayPoints": 518,
   "homeGW": 23,
   "awayGW": 9,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Chaille Godinez",
      "Nathan Law"
     ],
     "a": [
      "Lauren Mercado",
      "Eric Nguyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Anita Buggins",
      "Hector Irizarry"
     ],
     "a": [
      "Tess Fisher",
      "Eric Gibbs"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Katarzyna Clevenger",
      "Damien Stahl"
     ],
     "a": [
      "Courtney Davis",
      "Justin Bautista"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jennifer Sanchez",
      "Steven Maisonet"
     ],
     "a": [
      "Anh Nguyen",
      "Bryan Nardone"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Katarzyna Clevenger",
      "Chaille Godinez"
     ],
     "a": [
      "Tess Fisher",
      "Lauren Mercado"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Anita Buggins",
      "Jennifer Sanchez"
     ],
     "a": [
      "Courtney Davis",
      "Melissa Xu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Nathan Law",
      "Damien Stahl"
     ],
     "a": [
      "Eric Gibbs",
      "Justin Bautista"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Hector Irizarry",
      "Steven Maisonet"
     ],
     "a": [
      "Hiep Pham",
      "Eric Nguyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jennifer Sanchez",
      "Hector Irizarry"
     ],
     "a": [
      "Tess Fisher",
      "Eric Gibbs"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Anita Buggins",
      "Nathan Law"
     ],
     "a": [
      "Courtney Davis",
      "Justin Bautista"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Katarzyna Clevenger",
      "Gog Boonswang"
     ],
     "a": [
      "Anh Nguyen",
      "Bryan Nardone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Danielle Bernero",
      "Damien Stahl"
     ],
     "a": [
      "Melissa Xu",
      "Hiep Pham"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Annemarie Mccartney",
      "Jennifer Sanchez"
     ],
     "a": [
      "Tess Fisher",
      "Courtney Davis"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Katarzyna Clevenger",
      "Danielle Bernero"
     ],
     "a": [
      "Melissa Xu",
      "Lauren Mercado"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Damien Stahl",
      "Steven Maisonet"
     ],
     "a": [
      "Bryan Nardone",
      "Hiep Pham"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Hector Irizarry",
      "Nathan Law"
     ],
     "a": [
      "Justin Bautista",
      "Eric Nguyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Danielle Bernero",
      "Steven Maisonet"
     ],
     "a": [
      "Melissa Xu",
      "Hiep Pham"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Annemarie Mccartney",
      "Nathan Law"
     ],
     "a": [
      "Anh Nguyen",
      "Eric Nguyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "Jennifer Sanchez",
      "Damien Stahl"
     ],
     "a": [
      "Lauren Mercado",
      "Justin Bautista"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "Katarzyna Clevenger",
      "Hector Irizarry"
     ],
     "a": [
      "Courtney Davis",
      "Eric Gibbs"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Anita Buggins",
      "Danielle Bernero"
     ],
     "a": [
      "Lauren Mercado",
      "Anh Nguyen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Brittany Hall",
      "Chaille Godinez"
     ],
     "a": [
      "Tess Fisher",
      "Courtney Davis"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Nathan Law",
      "Hector Irizarry"
     ],
     "a": [
      "Eric Gibbs",
      "Eric Nguyen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Steven Maisonet",
      "Gog Boonswang"
     ],
     "a": [
      "Hiep Pham",
      "Bryan Nardone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Anita Buggins",
      "Steven Maisonet"
     ],
     "a": [
      "Melissa Xu",
      "Bryan Nardone"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Chaille Godinez",
      "Nathan Law"
     ],
     "a": [
      "Anh Nguyen",
      "Eric Nguyen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Danielle Bernero",
      "Damien Stahl"
     ],
     "a": [
      "Lauren Mercado",
      "Eric Gibbs"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Jennifer Sanchez",
      "Hector Irizarry"
     ],
     "a": [
      "Tess Fisher",
      "Justin Bautista"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Anita Buggins",
      "Jennifer Sanchez"
     ],
     "a": [
      "Tess Fisher",
      "Melissa Xu"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Annemarie Mccartney",
      "Chaille Godinez"
     ],
     "a": [
      "Courtney Davis",
      "Lauren Mercado"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Nathan Law",
      "Steven Maisonet"
     ],
     "a": [
      "Eric Gibbs",
      "Hiep Pham"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "Damien Stahl",
      "Gog Boonswang"
     ],
     "a": [
      "Justin Bautista",
      "Bryan Nardone"
     ]
    }
   ],
   "subs": [
    "Hiep Pham"
   ]
  },
  {
   "result": "away",
   "week": 10,
   "home": "Jersey Devil",
   "away": "Dill Dinkers Hatboro",
   "time": "2026-04-29T19:30:00",
   "complete": true,
   "homePoints": 520,
   "awayPoints": 658,
   "homeGW": 8,
   "awayGW": 24,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Arianna Haresign",
      "Drew Von Bargen"
     ],
     "a": [
      "Lindsey Thoeng",
      "Andrew Wakefield"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Michelle Quach",
      "Tyler Arsenault"
     ],
     "a": [
      "Hannah Nussbaum",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Rachel Berger",
      "Matthew Chen"
     ],
     "a": [
      "Allison Tarnoff",
      "Kenoa Tio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Kaia Hoak",
      "Johny Mario"
     ],
     "a": [
      "Rayna Baizman",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kaia Hoak",
      "Kylie Lupica"
     ],
     "a": [
      "Hannah Nussbaum",
      "Kaylyn Swankoski"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Rachel Berger",
      "Michelle Quach"
     ],
     "a": [
      "Allison Tarnoff",
      "Lindsey Thoeng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Zach Bowe",
      "Drew Von Bargen"
     ],
     "a": [
      "Jonah Fliegelman",
      "Ozair Ibrahim"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Johny Mario",
      "Tyler Arsenault"
     ],
     "a": [
      "Dylan Ashbach",
      "Kenoa Tio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Michelle Quach",
      "Tyler Arsenault"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Arianna Haresign",
      "Zach Bowe"
     ],
     "a": [
      "Hannah Nussbaum",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Rachel Berger",
      "Matthew Chen"
     ],
     "a": [
      "Rayna Baizman",
      "Ozair Ibrahim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kylie Lupica",
      "Johny Mario"
     ],
     "a": [
      "Allison Tarnoff",
      "Andrew Wakefield"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Rachel Berger",
      "Kylie Lupica"
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
     "as": 18,
     "h": [
      "Michelle Quach",
      "Arianna Haresign"
     ],
     "a": [
      "Hannah Nussbaum",
      "Lindsey Thoeng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Drew Von Bargen",
      "Matthew Chen"
     ],
     "a": [
      "Dylan Ashbach",
      "Andrew Wakefield"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Zach Bowe",
      "Tyler Arsenault"
     ],
     "a": [
      "Jonah Fliegelman",
      "Kenoa Tio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Michelle Quach",
      "Drew Von Bargen"
     ],
     "a": [
      "Lindsey Thoeng",
      "Andrew Wakefield"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Arianna Haresign",
      "Zach Bowe"
     ],
     "a": [
      "Rayna Baizman",
      "Ozair Ibrahim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Kylie Lupica",
      "Matthew Chen"
     ],
     "a": [
      "Allison Tarnoff",
      "Kenoa Tio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Kaia Hoak",
      "Johny Mario"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kaia Hoak",
      "Arianna Haresign"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Hannah Nussbaum"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Rachel Berger",
      "Kylie Lupica"
     ],
     "a": [
      "Allison Tarnoff",
      "Lindsey Thoeng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Drew Von Bargen",
      "Johny Mario"
     ],
     "a": [
      "Andrew Wakefield",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Matthew Chen",
      "Tyler Arsenault"
     ],
     "a": [
      "Ozair Ibrahim",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Arianna Haresign",
      "Tyler Arsenault"
     ],
     "a": [
      "Lindsey Thoeng",
      "Kenoa Tio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Michelle Quach",
      "Zach Bowe"
     ],
     "a": [
      "Allison Tarnoff",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Kaia Hoak",
      "Matthew Chen"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Ozair Ibrahim"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Rachel Berger",
      "Johny Mario"
     ],
     "a": [
      "Rayna Baizman",
      "Andrew Wakefield"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Kaia Hoak",
      "Kylie Lupica"
     ],
     "a": [
      "Kaylyn Swankoski",
      "Rayna Baizman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Michelle Quach",
      "Arianna Haresign"
     ],
     "a": [
      "Hannah Nussbaum",
      "Lindsey Thoeng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Tyler Arsenault",
      "Drew Von Bargen"
     ],
     "a": [
      "Jonah Fliegelman",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Matthew Chen",
      "Zach Bowe"
     ],
     "a": [
      "Ozair Ibrahim",
      "Kenoa Tio"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 10,
   "home": "Pickle House",
   "away": "Pickleball Palace",
   "time": "2026-04-29T19:30:00",
   "complete": true,
   "homePoints": 602,
   "awayPoints": 595,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Yoyo Shen",
      "Sidd Pathare"
     ],
     "a": [
      "Ashley Georgevich",
      "Daniel Kulik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kerrin Maurer",
      "Nick Dehmer"
     ],
     "a": [
      "Carly Pfeffer",
      "Keith Shedlock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Emily Babinsky",
      "Zach Mcgowan"
     ],
     "a": [
      "Jenna Irwin",
      "David Lavy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Taylor Hartman",
      "Michael Li"
     ],
     "a": [
      "Jessica Hendry",
      "Thomas Dill"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Yoyo Shen",
      "Taylor Hartman"
     ],
     "a": [
      "Ashley Georgevich",
      "Jenna Irwin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kerrin Maurer",
      "Lissa Eagles"
     ],
     "a": [
      "Jessica Hendry",
      "Carly Pfeffer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Nick Dehmer",
      "Michael Li"
     ],
     "a": [
      "Daniel Kulik",
      "Keith Shedlock"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Sidd Pathare",
      "Zach Mcgowan"
     ],
     "a": [
      "Thomas Dill",
      "David Lavy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Emily Babinsky",
      "Sidd Pathare"
     ],
     "a": [
      "Ashley Georgevich",
      "David Lavy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Taylor Hartman",
      "Nick Dehmer"
     ],
     "a": [
      "Jenna Irwin",
      "Keith Shedlock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kerrin Maurer",
      "Michael Li"
     ],
     "a": [
      "Carly Pfeffer",
      "Thomas Dill"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Lissa Eagles",
      "Kishan Shah"
     ],
     "a": [
      "Jessica Hendry",
      "Daniel Kulik"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Yoyo Shen",
      "Lissa Eagles"
     ],
     "a": [
      "Ashley Georgevich",
      "Carly Pfeffer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Taylor Hartman",
      "Kerrin Maurer"
     ],
     "a": [
      "Jessica Hendry",
      "Jenna Irwin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Nick Dehmer",
      "Kishan Shah"
     ],
     "a": [
      "Daniel Kulik",
      "Thomas Dill"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Michael Li",
      "Zach Mcgowan"
     ],
     "a": [
      "Keith Shedlock",
      "David Lavy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Taylor Hartman",
      "Nick Dehmer"
     ],
     "a": [
      "Ashley Georgevich",
      "Thomas Dill"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 28,
     "as": 26,
     "h": [
      "Kerrin Maurer",
      "Zach Mcgowan"
     ],
     "a": [
      "Jessica Hendry",
      "Keith Shedlock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Emily Babinsky",
      "Sidd Pathare"
     ],
     "a": [
      "Jenna Irwin",
      "David Lavy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Yoyo Shen",
      "Kishan Shah"
     ],
     "a": [
      "Carly Pfeffer",
      "Daniel Kulik"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Taylor Hartman",
      "Yoyo Shen"
     ],
     "a": [
      "Ashley Georgevich",
      "Jenna Irwin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kerrin Maurer",
      "Emily Babinsky"
     ],
     "a": [
      "Jessica Hendry",
      "Carly Pfeffer"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Zach Mcgowan",
      "Nick Dehmer"
     ],
     "a": [
      "Daniel Kulik",
      "David Lavy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Michael Li",
      "Kishan Shah"
     ],
     "a": [
      "Thomas Dill",
      "Keith Shedlock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Lissa Eagles",
      "Sidd Pathare"
     ],
     "a": [
      "Ashley Georgevich",
      "David Lavy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Taylor Hartman",
      "Michael Li"
     ],
     "a": [
      "Carly Pfeffer",
      "Thomas Dill"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Kerrin Maurer",
      "Nick Dehmer"
     ],
     "a": [
      "Jessica Hendry",
      "Keith Shedlock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Emily Babinsky",
      "Kishan Shah"
     ],
     "a": [
      "Jenna Irwin",
      "Daniel Kulik"
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
      "Ashley Georgevich",
      "Carly Pfeffer"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kerrin Maurer",
      "Yoyo Shen"
     ],
     "a": [
      "Jessica Hendry",
      "Jenna Irwin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Nick Dehmer",
      "Michael Li"
     ],
     "a": [
      "Daniel Kulik",
      "Keith Shedlock"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Kishan Shah",
      "Zach Mcgowan"
     ],
     "a": [
      "Thomas Dill",
      "David Lavy"
     ]
    }
   ],
   "subs": [
    "Thomas Dill"
   ]
  },
  {
   "result": "home",
   "week": 10,
   "home": "Pickleball Kingdom Watchung",
   "away": "Flemington",
   "time": "2026-04-29T19:30:00",
   "complete": true,
   "homePoints": 612,
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
      "Chrissy Sandella",
      "Gautham Bondugula"
     ],
     "a": [
      "Anisha Malhotra",
      "Thomas Connolly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Noelle Ramirez",
      "Fabricio Gaona"
     ],
     "a": [
      "Courtney Greener",
      "Robbie Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Chanda Mccoy",
      "Daniel Gallegos"
     ],
     "a": [
      "Susan Ackley",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Liz Chen",
      "Ken Velarde"
     ],
     "a": [
      "Christine Ferraez",
      "Varun Prakash"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Elisangela Harrington",
      "Liz Chen"
     ],
     "a": [
      "Anisha Malhotra",
      "Courtney Greener"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Chrissy Sandella",
      "Noelle Ramirez"
     ],
     "a": [
      "Susan Ackley",
      "Christine Ferraez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Fabricio Gaona",
      "Gautham Bondugula"
     ],
     "a": [
      "Robbie Oddy",
      "Thomas Connolly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Daniel Gallegos",
      "Ken Velarde"
     ],
     "a": [
      "Ross Switkes",
      "Varun Prakash"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Doryan Amato",
      "Gautham Bondugula"
     ],
     "a": [
      "Anisha Malhotra",
      "Thomas Connolly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Noelle Ramirez",
      "Fabricio Gaona"
     ],
     "a": [
      "Courtney Greener",
      "Robbie Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Chanda Mccoy",
      "Daniel Gallegos"
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
     "as": 18,
     "h": [
      "Liz Chen",
      "Ken Velarde"
     ],
     "a": [
      "Christine Ferraez",
      "Varun Prakash"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Elisangela Harrington",
      "Liz Chen"
     ],
     "a": [
      "Anisha Malhotra",
      "Courtney Greener"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Chrissy Sandella",
      "Doryan Amato"
     ],
     "a": [
      "Christine Ferraez",
      "Susan Ackley"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Fabricio Gaona",
      "Ken Velarde"
     ],
     "a": [
      "Robbie Oddy",
      "Matthew Matro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Daniel Gallegos",
      "Gautham Bondugula"
     ],
     "a": [
      "Thomas Connolly",
      "Varun Prakash"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Doryan Amato",
      "Ken Velarde"
     ],
     "a": [
      "Anisha Malhotra",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Liz Chen",
      "Gautham Bondugula"
     ],
     "a": [
      "Courtney Greener",
      "Matthew Matro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Elisangela Harrington",
      "Daniel Gallegos"
     ],
     "a": [
      "Susan Ackley",
      "Varun Prakash"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Chanda Mccoy",
      "Fabricio Gaona"
     ],
     "a": [
      "Christine Ferraez",
      "Robbie Oddy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Chrissy Sandella",
      "Elisangela Harrington"
     ],
     "a": [
      "Courtney Greener",
      "Susan Ackley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Doryan Amato",
      "Noelle Ramirez"
     ],
     "a": [
      "Anisha Malhotra",
      "Christine Ferraez"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Daniel Gallegos",
      "Ken Velarde"
     ],
     "a": [
      "Matthew Matro",
      "Robbie Oddy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Fabricio Gaona",
      "Gautham Bondugula"
     ],
     "a": [
      "Ross Switkes",
      "Thomas Connolly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Doryan Amato",
      "Ken Velarde"
     ],
     "a": [
      "Anisha Malhotra",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Chrissy Sandella",
      "Gautham Bondugula"
     ],
     "a": [
      "Courtney Greener",
      "Matthew Matro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Noelle Ramirez",
      "Daniel Gallegos"
     ],
     "a": [
      "Susan Ackley",
      "Varun Prakash"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Chanda Mccoy",
      "Fabricio Gaona"
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
      "Elisangela Harrington",
      "Noelle Ramirez"
     ],
     "a": [
      "Anisha Malhotra",
      "Christine Ferraez"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Chanda Mccoy",
      "Chrissy Sandella"
     ],
     "a": [
      "Susan Ackley",
      "Courtney Greener"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Fabricio Gaona",
      "Ken Velarde"
     ],
     "a": [
      "Matthew Matro",
      "Ross Switkes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Daniel Gallegos",
      "Gautham Bondugula"
     ],
     "a": [
      "Thomas Connolly",
      "Varun Prakash"
     ]
    }
   ],
   "subs": [
    "Liz Chen",
    "Noelle Ramirez",
    "Anisha Malhotra"
   ]
  },
  {
   "result": "home",
   "week": 10,
   "home": "Bounce Philly",
   "away": "Bounce Malvern",
   "time": "2026-04-29T19:30:00",
   "complete": true,
   "homePoints": 642,
   "awayPoints": 628,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Alyssa Boyle",
      "Zachary Lessner"
     ],
     "a": [
      "Megan Harvey",
      "Grant Hanak"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Rachel Alfano",
      "Dustin Rabinowitz"
     ],
     "a": [
      "Nam Barsh",
      "Vaughn Lawrence"
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
      "Kathleen Dougherty",
      "Lou Frignito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Charlotte Healey",
      "Alex Boory"
     ],
     "a": [
      "Katherine Maruyama",
      "Shashank Kamdar"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Alex Abad",
      "Rachel Alfano"
     ],
     "a": [
      "Nam Barsh",
      "Kathleen Dougherty"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Charlotte Healey",
      "Alyssa Boyle"
     ],
     "a": [
      "Katherine Maruyama",
      "Megan Harvey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Dustin Rabinowitz",
      "Zachary Lessner"
     ],
     "a": [
      "Grant Hanak",
      "Lou Frignito"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Bruno Casino",
      "Ashwin Korde"
     ],
     "a": [
      "Vaughn Lawrence",
      "Shashank Kamdar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Julia Sternberg",
      "Dustin Rabinowitz"
     ],
     "a": [
      "Megan Harvey",
      "Grant Hanak"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Alex Abad",
      "Ashwin Korde"
     ],
     "a": [
      "Kathleen Dougherty",
      "Vaughn Lawrence"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Alyssa Boyle",
      "Bruno Casino"
     ],
     "a": [
      "Nam Barsh",
      "Lou Frignito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Charlotte Healey",
      "Alex Boory"
     ],
     "a": [
      "Katherine Maruyama",
      "Shashank Kamdar"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Julia Sternberg",
      "Rachel Alfano"
     ],
     "a": [
      "Megan Harvey",
      "Kathleen Dougherty"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Charlotte Healey",
      "Alex Abad"
     ],
     "a": [
      "Nam Barsh",
      "Katherine Maruyama"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Alex Boory",
      "Ashwin Korde"
     ],
     "a": [
      "Lou Frignito",
      "Vaughn Lawrence"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Dustin Rabinowitz",
      "Zachary Lessner"
     ],
     "a": [
      "Grant Hanak",
      "Shashank Kamdar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Alyssa Boyle",
      "Bruno Casino"
     ],
     "a": [
      "Katherine Maruyama",
      "Grant Hanak"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Alex Abad",
      "Alex Boory"
     ],
     "a": [
      "Kathleen Dougherty",
      "Vaughn Lawrence"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Rachel Alfano",
      "Dustin Rabinowitz"
     ],
     "a": [
      "Nam Barsh",
      "Lou Frignito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Charlotte Healey",
      "Zachary Lessner"
     ],
     "a": [
      "Megan Harvey",
      "Shashank Kamdar"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Alyssa Boyle",
      "Charlotte Healey"
     ],
     "a": [
      "Megan Harvey",
      "Katherine Maruyama"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Rachel Alfano",
      "Julia Sternberg"
     ],
     "a": [
      "Nam Barsh",
      "Kathleen Dougherty"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Bruno Casino",
      "Zachary Lessner"
     ],
     "a": [
      "Grant Hanak",
      "Vaughn Lawrence"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Dustin Rabinowitz",
      "Ashwin Korde"
     ],
     "a": [
      "Lou Frignito",
      "Shashank Kamdar"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Rachel Alfano",
      "Ashwin Korde"
     ],
     "a": [
      "Nam Barsh",
      "Grant Hanak"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Julia Sternberg",
      "Bruno Casino"
     ],
     "a": [
      "Megan Harvey",
      "Vaughn Lawrence"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Alyssa Boyle",
      "Zachary Lessner"
     ],
     "a": [
      "Katherine Maruyama",
      "Lou Frignito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Alex Abad",
      "Alex Boory"
     ],
     "a": [
      "Kathleen Dougherty",
      "Shashank Kamdar"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Charlotte Healey",
      "Rachel Alfano"
     ],
     "a": [
      "Nam Barsh",
      "Megan Harvey"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Alex Abad",
      "Julia Sternberg"
     ],
     "a": [
      "Kathleen Dougherty",
      "Katherine Maruyama"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Bruno Casino",
      "Ashwin Korde"
     ],
     "a": [
      "Vaughn Lawrence",
      "Grant Hanak"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Dustin Rabinowitz",
      "Alex Boory"
     ],
     "a": [
      "Lou Frignito",
      "Shashank Kamdar"
     ]
    }
   ],
   "subs": [
    "Vaughn Lawrence"
   ]
  },
  {
   "result": "away",
   "week": 11,
   "home": "ACE",
   "away": "Dill Dinkers Hatboro",
   "time": "2026-05-06T19:00:00",
   "complete": true,
   "homePoints": 545,
   "awayPoints": 636,
   "homeGW": 9,
   "awayGW": 23,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Chaille Godinez",
      "Nathan Law"
     ],
     "a": [
      "Hannah Nussbaum",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Anita Buggins",
      "Damien Stahl"
     ],
     "a": [
      "Lindsey Thoeng",
      "Clayton Schmucker"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jennifer Sanchez",
      "Steven Maisonet"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Kenoa Tio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Annemarie Mccartney",
      "Manny Lai"
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
      "Chaille Godinez",
      "Annemarie Mccartney"
     ],
     "a": [
      "Hannah Nussbaum",
      "Lindsey Thoeng"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Anita Buggins",
      "Jennifer Sanchez"
     ],
     "a": [
      "Nahla Bernhardt",
      "Alyssa Tartaglia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Manny Lai",
      "Caleb Perry-Abner"
     ],
     "a": [
      "Dylan Ashbach",
      "Andrew Wakefield"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Nathan Law",
      "Steven Maisonet"
     ],
     "a": [
      "Jonah Fliegelman",
      "Clayton Schmucker"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Danielle Bernero",
      "Damien Stahl"
     ],
     "a": [
      "Hannah Nussbaum",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Annemarie Mccartney",
      "Nathan Law"
     ],
     "a": [
      "Nahla Bernhardt",
      "Andrew Wakefield"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Anita Buggins",
      "Caleb Perry-Abner"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Kenoa Tio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Chaille Godinez",
      "Steven Maisonet"
     ],
     "a": [
      "Rayna Baizman",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Chaille Godinez",
      "Jennifer Sanchez"
     ],
     "a": [
      "Hannah Nussbaum",
      "Lindsey Thoeng"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Anita Buggins",
      "Danielle Bernero"
     ],
     "a": [
      "Nahla Bernhardt",
      "Alyssa Tartaglia"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Manny Lai",
      "Nathan Law"
     ],
     "a": [
      "Jonah Fliegelman",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Steven Maisonet",
      "Damien Stahl"
     ],
     "a": [
      "Clayton Schmucker",
      "Kenoa Tio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Jennifer Sanchez",
      "Caleb Perry-Abner"
     ],
     "a": [
      "Rayna Baizman",
      "Kenoa Tio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Danielle Bernero",
      "Manny Lai"
     ],
     "a": [
      "Lindsey Thoeng",
      "Clayton Schmucker"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Chaille Godinez",
      "Damien Stahl"
     ],
     "a": [
      "Nahla Bernhardt",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Annemarie Mccartney",
      "Nathan Law"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Andrew Wakefield"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Chaille Godinez",
      "Danielle Bernero"
     ],
     "a": [
      "Hannah Nussbaum",
      "Nahla Bernhardt"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Annemarie Mccartney",
      "Anita Buggins"
     ],
     "a": [
      "Lindsey Thoeng",
      "Rayna Baizman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Manny Lai",
      "Nathan Law"
     ],
     "a": [
      "Jonah Fliegelman",
      "Clayton Schmucker"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Damien Stahl",
      "Caleb Perry-Abner"
     ],
     "a": [
      "Andrew Wakefield",
      "Kenoa Tio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Anita Buggins",
      "Steven Maisonet"
     ],
     "a": [
      "Rayna Baizman",
      "Kenoa Tio"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Chaille Godinez",
      "Nathan Law"
     ],
     "a": [
      "Lindsey Thoeng",
      "Andrew Wakefield"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Danielle Bernero",
      "Caleb Perry-Abner"
     ],
     "a": [
      "Nahla Bernhardt",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jennifer Sanchez",
      "Manny Lai"
     ],
     "a": [
      "Alyssa Tartaglia",
      "Jonah Fliegelman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Annemarie Mccartney",
      "Danielle Bernero"
     ],
     "a": [
      "Nahla Bernhardt",
      "Hannah Nussbaum"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Chaille Godinez",
      "Jennifer Sanchez"
     ],
     "a": [
      "Lindsey Thoeng",
      "Rayna Baizman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Damien Stahl",
      "Nathan Law"
     ],
     "a": [
      "Jonah Fliegelman",
      "Dylan Ashbach"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Steven Maisonet",
      "Manny Lai"
     ],
     "a": [
      "Clayton Schmucker",
      "Andrew Wakefield"
     ]
    }
   ],
   "subs": [
    "Caleb Perry-Abner"
   ]
  },
  {
   "result": "away",
   "week": 11,
   "home": "Picklr Fair Lawn",
   "away": "Pickleball Palace",
   "time": "2026-05-06T19:00:00",
   "complete": true,
   "homePoints": 608,
   "awayPoints": 650,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Pearly Leung",
      "Phil Chang"
     ],
     "a": [
      "Ashley Georgevich",
      "Thomas Hoffman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Aya Haruyama",
      "Stephen Mcnamara"
     ],
     "a": [
      "Beatriz Lopez Albarracin",
      "David Lavy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Johanna Wagner",
      "Chad Durkin"
     ],
     "a": [
      "Jessica Pevny",
      "Eric Kutzin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Tin Wai Kwan",
      "Andrew Bernard"
     ],
     "a": [
      "Jenna Irwin",
      "Keith Shedlock"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Tin Wai Kwan",
      "Aya Haruyama"
     ],
     "a": [
      "Ashley Georgevich",
      "Claire Malone"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Johanna Wagner",
      "Caitlyn Moore"
     ],
     "a": [
      "Jessica Pevny",
      "Jenna Irwin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Chad Durkin",
      "Stephen Mcnamara"
     ],
     "a": [
      "Thomas Hoffman",
      "Keith Shedlock"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jansen Tubo",
      "Phil Chang"
     ],
     "a": [
      "David Lavy",
      "Patrick Ceccacci"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Aya Haruyama",
      "Phil Chang"
     ],
     "a": [
      "Ashley Georgevich",
      "David Lavy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Caitlyn Moore",
      "Stephen Mcnamara"
     ],
     "a": [
      "Beatriz Lopez Albarracin",
      "Eric Kutzin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Pearly Leung",
      "Fabian Marcos"
     ],
     "a": [
      "Claire Malone",
      "Patrick Ceccacci"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Johanna Wagner",
      "Chad Durkin"
     ],
     "a": [
      "Jessica Pevny",
      "Keith Shedlock"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Aya Haruyama",
      "Pearly Leung"
     ],
     "a": [
      "Jenna Irwin",
      "Beatriz Lopez Albarracin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Tin Wai Kwan",
      "Caitlyn Moore"
     ],
     "a": [
      "Claire Malone",
      "Jessica Pevny"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Phil Chang",
      "Chad Durkin"
     ],
     "a": [
      "Thomas Hoffman",
      "Keith Shedlock"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 27,
     "as": 29,
     "h": [
      "Stephen Mcnamara",
      "Jansen Tubo"
     ],
     "a": [
      "David Lavy",
      "Patrick Ceccacci"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Johanna Wagner",
      "Phil Chang"
     ],
     "a": [
      "Ashley Georgevich",
      "David Lavy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Aya Haruyama",
      "Fabian Marcos"
     ],
     "a": [
      "Beatriz Lopez Albarracin",
      "Patrick Ceccacci"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Pearly Leung",
      "Stephen Mcnamara"
     ],
     "a": [
      "Claire Malone",
      "Thomas Hoffman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Tin Wai Kwan",
      "Andrew Bernard"
     ],
     "a": [
      "Jessica Pevny",
      "Eric Kutzin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Aya Haruyama",
      "Tin Wai Kwan"
     ],
     "a": [
      "Claire Malone",
      "Ashley Georgevich"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Pearly Leung",
      "Johanna Wagner"
     ],
     "a": [
      "Jenna Irwin",
      "Beatriz Lopez Albarracin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Phil Chang",
      "Stephen Mcnamara"
     ],
     "a": [
      "Thomas Hoffman",
      "Patrick Ceccacci"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Fabian Marcos",
      "Jansen Tubo"
     ],
     "a": [
      "Keith Shedlock",
      "Eric Kutzin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Pearly Leung",
      "Stephen Mcnamara"
     ],
     "a": [
      "Ashley Georgevich",
      "Eric Kutzin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Johanna Wagner",
      "Andrew Bernard"
     ],
     "a": [
      "Beatriz Lopez Albarracin",
      "David Lavy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Aya Haruyama",
      "Phil Chang"
     ],
     "a": [
      "Jenna Irwin",
      "Thomas Hoffman"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Caitlyn Moore",
      "Fabian Marcos"
     ],
     "a": [
      "Jessica Pevny",
      "Keith Shedlock"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tin Wai Kwan",
      "Pearly Leung"
     ],
     "a": [
      "Ashley Georgevich",
      "Beatriz Lopez Albarracin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 7,
     "as": 21,
     "h": [
      "Caitlyn Moore",
      "Johanna Wagner"
     ],
     "a": [
      "Claire Malone",
      "Jenna Irwin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jansen Tubo",
      "Andrew Bernard"
     ],
     "a": [
      "David Lavy",
      "Eric Kutzin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Phil Chang",
      "Stephen Mcnamara"
     ],
     "a": [
      "Patrick Ceccacci",
      "Thomas Hoffman"
     ]
    }
   ],
   "subs": [
    "Pearly Leung",
    "Eric Kutzin",
    "Thomas Hoffman"
   ]
  },
  {
   "result": "home",
   "week": 11,
   "home": "Monroe",
   "away": "Pickleball Kingdom Watchung",
   "time": "2026-05-06T19:00:00",
   "complete": true,
   "homePoints": 655,
   "awayPoints": 528,
   "homeGW": 26,
   "awayGW": 6,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Richa Shah",
      "Dilan Shah"
     ],
     "a": [
      "Jenny Chen",
      "Andrew Liou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ruhi Shah",
      "Maanav Shah"
     ],
     "a": [
      "Anisha Malhotra",
      "Daniel Gallegos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Amanda Ksiezopolski",
      "Jacob Yandoli"
     ],
     "a": [
      "Susan St. Pierre",
      "Drew Youssef"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Claire Gaston",
      "Shreyas Pani"
     ],
     "a": [
      "Elisangela Harrington",
      "Gautham Bondugula"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 30,
     "as": 28,
     "h": [
      "Ruhi Shah",
      "Amanda Ksiezopolski"
     ],
     "a": [
      "Anisha Malhotra",
      "Elisangela Harrington"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Richa Shah",
      "Claire Gaston"
     ],
     "a": [
      "Jenny Chen",
      "Susan St. Pierre"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Eric Lin",
      "Dilan Shah"
     ],
     "a": [
      "Andrew Liou",
      "Drew Youssef"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Maanav Shah",
      "Shreyas Pani"
     ],
     "a": [
      "Daniel Gallegos",
      "Gautham Bondugula"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Claire Gaston",
      "Jacob Yandoli"
     ],
     "a": [
      "Susan St. Pierre",
      "Andrew Liou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Ruhi Shah",
      "Maanav Shah"
     ],
     "a": [
      "Anisha Malhotra",
      "Daniel Gallegos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Amanda Ksiezopolski",
      "Eric Lin"
     ],
     "a": [
      "Jenny Chen",
      "Drew Youssef"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Richa Shah",
      "Shreyas Pani"
     ],
     "a": [
      "Elisangela Harrington",
      "Gautham Bondugula"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ruhi Shah",
      "Amanda Ksiezopolski"
     ],
     "a": [
      "Anisha Malhotra",
      "Elisangela Harrington"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Richa Shah",
      "Claire Gaston"
     ],
     "a": [
      "Jenny Chen",
      "Susan St. Pierre"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Jacob Yandoli",
      "Eric Lin"
     ],
     "a": [
      "Andrew Liou",
      "Drew Youssef"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Maanav Shah",
      "Shreyas Pani"
     ],
     "a": [
      "Daniel Gallegos",
      "Gautham Bondugula"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Amanda Ksiezopolski",
      "Jacob Yandoli"
     ],
     "a": [
      "Susan St. Pierre",
      "Andrew Liou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Claire Gaston",
      "Eric Lin"
     ],
     "a": [
      "Jenny Chen",
      "Drew Youssef"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Richa Shah",
      "Maanav Shah"
     ],
     "a": [
      "Elisangela Harrington",
      "Daniel Gallegos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Ruhi Shah",
      "Dilan Shah"
     ],
     "a": [
      "Anisha Malhotra",
      "Gautham Bondugula"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Ruhi Shah",
      "Richa Shah"
     ],
     "a": [
      "Anisha Malhotra",
      "Jenny Chen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Claire Gaston",
      "Amanda Ksiezopolski"
     ],
     "a": [
      "Elisangela Harrington",
      "Susan St. Pierre"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Maanav Shah",
      "Dilan Shah"
     ],
     "a": [
      "Andrew Liou",
      "Gautham Bondugula"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Shreyas Pani",
      "Jacob Yandoli"
     ],
     "a": [
      "Daniel Gallegos",
      "Drew Youssef"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Ruhi Shah",
      "Eric Lin"
     ],
     "a": [
      "Jenny Chen",
      "Andrew Liou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Amanda Ksiezopolski",
      "Shreyas Pani"
     ],
     "a": [
      "Elisangela Harrington",
      "Daniel Gallegos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Richa Shah",
      "Dilan Shah"
     ],
     "a": [
      "Susan St. Pierre",
      "Drew Youssef"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Claire Gaston",
      "Maanav Shah"
     ],
     "a": [
      "Anisha Malhotra",
      "Gautham Bondugula"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Ruhi Shah",
      "Richa Shah"
     ],
     "a": [
      "Anisha Malhotra",
      "Jenny Chen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Claire Gaston",
      "Amanda Ksiezopolski"
     ],
     "a": [
      "Elisangela Harrington",
      "Susan St. Pierre"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Shreyas Pani",
      "Dilan Shah"
     ],
     "a": [
      "Andrew Liou",
      "Gautham Bondugula"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jacob Yandoli",
      "Eric Lin"
     ],
     "a": [
      "Daniel Gallegos",
      "Drew Youssef"
     ]
    }
   ],
   "subs": [
    "Anisha Malhotra",
    "Jenny Chen",
    "Drew Youssef",
    "Andrew Liou",
    "Susan St. Pierre"
   ]
  },
  {
   "result": "away",
   "week": 11,
   "home": "Four Seasons",
   "away": "Bounce Malvern",
   "time": "2026-05-06T19:30:00",
   "complete": true,
   "homePoints": 582,
   "awayPoints": 628,
   "homeGW": 13,
   "awayGW": 19,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Roshi Desilva",
      "Justin Bautista"
     ],
     "a": [
      "Yuki Kim",
      "Lou Frignito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Courtney Davis",
      "Eric Gibbs"
     ],
     "a": [
      "Taylor Dath",
      "Vaughn Lawrence"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Rachel Hannum",
      "Royce Chan"
     ],
     "a": [
      "Katherine Maruyama",
      "Andre Cristobal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Tess Fisher",
      "Zyril Carilo"
     ],
     "a": [
      "Tera Baccile",
      "Aditya Upadhya"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Courtney Davis",
      "Roshi Desilva"
     ],
     "a": [
      "Yuki Kim",
      "Katherine Maruyama"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Tess Fisher",
      "Rachel Hannum"
     ],
     "a": [
      "Taylor Dath",
      "Tera Baccile"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Eric Gibbs",
      "Justin Bautista"
     ],
     "a": [
      "Lou Frignito",
      "Vaughn Lawrence"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Royce Chan",
      "Shawn Ganow"
     ],
     "a": [
      "Andre Cristobal",
      "Aditya Upadhya"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Lauren Mercado",
      "Justin Bautista"
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
     "as": 19,
     "h": [
      "Courtney Davis",
      "Eric Gibbs"
     ],
     "a": [
      "Taylor Dath",
      "Vaughn Lawrence"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Rachel Hannum",
      "Royce Chan"
     ],
     "a": [
      "Katherine Maruyama",
      "Andre Cristobal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Tess Fisher",
      "Zyril Carilo"
     ],
     "a": [
      "Tera Baccile",
      "Aditya Upadhya"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Courtney Davis",
      "Lauren Mercado"
     ],
     "a": [
      "Yuki Kim",
      "Katherine Maruyama"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tess Fisher",
      "Rachel Hannum"
     ],
     "a": [
      "Taylor Dath",
      "Tera Baccile"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Eric Gibbs",
      "Zyril Carilo"
     ],
     "a": [
      "Lou Frignito",
      "Vaughn Lawrence"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Royce Chan",
      "Shawn Ganow"
     ],
     "a": [
      "Andre Cristobal",
      "Aditya Upadhya"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Rachel Hannum",
      "Shawn Ganow"
     ],
     "a": [
      "Yuki Kim",
      "Aditya Upadhya"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lauren Mercado",
      "Zyril Carilo"
     ],
     "a": [
      "Katherine Maruyama",
      "Lou Frignito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tess Fisher",
      "Royce Chan"
     ],
     "a": [
      "Taylor Dath",
      "Andre Cristobal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Roshi Desilva",
      "Eric Gibbs"
     ],
     "a": [
      "Tera Baccile",
      "Vaughn Lawrence"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Roshi Desilva",
      "Rachel Hannum"
     ],
     "a": [
      "Yuki Kim",
      "Tera Baccile"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Tess Fisher",
      "Courtney Davis"
     ],
     "a": [
      "Taylor Dath",
      "Katherine Maruyama"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Royce Chan",
      "Zyril Carilo"
     ],
     "a": [
      "Lou Frignito",
      "Aditya Upadhya"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Shawn Ganow",
      "Justin Bautista"
     ],
     "a": [
      "Vaughn Lawrence",
      "Andre Cristobal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Rachel Hannum",
      "Zyril Carilo"
     ],
     "a": [
      "Yuki Kim",
      "Aditya Upadhya"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Lauren Mercado",
      "Justin Bautista"
     ],
     "a": [
      "Katherine Maruyama",
      "Lou Frignito"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Tess Fisher",
      "Royce Chan"
     ],
     "a": [
      "Taylor Dath",
      "Andre Cristobal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Courtney Davis",
      "Shawn Ganow"
     ],
     "a": [
      "Tera Baccile",
      "Vaughn Lawrence"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Rachel Hannum",
      "Lauren Mercado"
     ],
     "a": [
      "Yuki Kim",
      "Tera Baccile"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Tess Fisher",
      "Courtney Davis"
     ],
     "a": [
      "Taylor Dath",
      "Katherine Maruyama"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Royce Chan",
      "Justin Bautista"
     ],
     "a": [
      "Lou Frignito",
      "Aditya Upadhya"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Eric Gibbs",
      "Shawn Ganow"
     ],
     "a": [
      "Vaughn Lawrence",
      "Andre Cristobal"
     ]
    }
   ],
   "subs": [
    "Taylor Dath",
    "Vaughn Lawrence",
    "Aditya Upadhya",
    "Tera Baccile",
    "Andre Cristobal"
   ]
  },
  {
   "result": "away",
   "week": 11,
   "home": "Jersey Devil",
   "away": "Bounce Philly",
   "time": "2026-05-06T19:30:00",
   "complete": true,
   "homePoints": 584,
   "awayPoints": 609,
   "homeGW": 14,
   "awayGW": 18,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Arianna Haresign",
      "Tyler Arsenault"
     ],
     "a": [
      "Julia Sternberg",
      "Bruno Casino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kylie Lupica",
      "Matthew Chen"
     ],
     "a": [
      "Charlotte Healey",
      "William Hayes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Michelle Quach",
      "Zach Bowe"
     ],
     "a": [
      "Robyn Himelstein",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Shelah Wallace",
      "Drew Von Bargen"
     ],
     "a": [
      "Rachel Alfano",
      "Jordan Denish"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Arianna Haresign",
      "Rachel Berger"
     ],
     "a": [
      "Alyssa Boyle",
      "Charlotte Healey"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Shelah Wallace",
      "Michelle Quach"
     ],
     "a": [
      "Rachel Alfano",
      "Julia Sternberg"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Tyler Arsenault",
      "Johny Mario"
     ],
     "a": [
      "Jordan Denish",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Zach Bowe",
      "Drew Von Bargen"
     ],
     "a": [
      "Bruno Casino",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Arianna Haresign",
      "Tyler Arsenault"
     ],
     "a": [
      "Julia Sternberg",
      "Bruno Casino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Kylie Lupica",
      "Johny Mario"
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
     "as": 15,
     "h": [
      "Shelah Wallace",
      "Drew Von Bargen"
     ],
     "a": [
      "Rachel Alfano",
      "Jordan Denish"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Michelle Quach",
      "Zach Bowe"
     ],
     "a": [
      "Robyn Himelstein",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Shelah Wallace",
      "Michelle Quach"
     ],
     "a": [
      "Rachel Alfano",
      "Robyn Himelstein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kylie Lupica",
      "Rachel Berger"
     ],
     "a": [
      "Charlotte Healey",
      "Alyssa Boyle"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Tyler Arsenault",
      "Johny Mario"
     ],
     "a": [
      "Jordan Denish",
      "Bruno Casino"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Zach Bowe",
      "Matthew Chen"
     ],
     "a": [
      "William Hayes",
      "Dustin Rabinowitz"
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
      "Alyssa Boyle",
      "Bruno Casino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Arianna Haresign",
      "Matthew Chen"
     ],
     "a": [
      "Julia Sternberg",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kylie Lupica",
      "Drew Von Bargen"
     ],
     "a": [
      "Charlotte Healey",
      "William Hayes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Shelah Wallace",
      "Zach Bowe"
     ],
     "a": [
      "Robyn Himelstein",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Shelah Wallace",
      "Arianna Haresign"
     ],
     "a": [
      "Charlotte Healey",
      "Robyn Himelstein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Rachel Berger",
      "Kylie Lupica"
     ],
     "a": [
      "Rachel Alfano",
      "Alyssa Boyle"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Tyler Arsenault",
      "Matthew Chen"
     ],
     "a": [
      "Jordan Denish",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Drew Von Bargen",
      "Johny Mario"
     ],
     "a": [
      "William Hayes",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Arianna Haresign",
      "Matthew Chen"
     ],
     "a": [
      "Alyssa Boyle",
      "Bruno Casino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Michelle Quach",
      "Tyler Arsenault"
     ],
     "a": [
      "Julia Sternberg",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kylie Lupica",
      "Zach Bowe"
     ],
     "a": [
      "Rachel Alfano",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Rachel Berger",
      "Johny Mario"
     ],
     "a": [
      "Charlotte Healey",
      "Jordan Denish"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Michelle Quach",
      "Rachel Berger"
     ],
     "a": [
      "Rachel Alfano",
      "Julia Sternberg"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Shelah Wallace",
      "Arianna Haresign"
     ],
     "a": [
      "Charlotte Healey",
      "Robyn Himelstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Tyler Arsenault",
      "Drew Von Bargen"
     ],
     "a": [
      "Jordan Denish",
      "Bruno Casino"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Zach Bowe",
      "Matthew Chen"
     ],
     "a": [
      "Mark Kilimnik",
      "William Hayes"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 11,
   "home": "Pickle House",
   "away": "Flemington",
   "time": "2026-05-06T19:30:00",
   "complete": true,
   "homePoints": 636,
   "awayPoints": 565,
   "homeGW": 20,
   "awayGW": 12,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Emily Babinsky",
      "Sidd Pathare"
     ],
     "a": [
      "Courtney Greener",
      "Robbie Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Taylor Hartman",
      "Michael Li"
     ],
     "a": [
      "Lynda Tomaru",
      "Thomas Connolly"
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
      "Susan Ackley",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Kerrin Maurer",
      "Nick Dehmer"
     ],
     "a": [
      "Aimee Castellano",
      "Matthew Matro"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Taylor Hartman",
      "Kerrin Maurer"
     ],
     "a": [
      "Courtney Greener",
      "Susan Ackley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Lissa Eagles",
      "Emily Babinsky"
     ],
     "a": [
      "Lynda Tomaru",
      "Aimee Castellano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Sidd Pathare",
      "Nick Dehmer"
     ],
     "a": [
      "Robbie Oddy",
      "Thomas Connolly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Chris Damato",
      "Michael Li"
     ],
     "a": [
      "Matthew Matro",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Emily Babinsky",
      "Chris Damato"
     ],
     "a": [
      "Courtney Greener",
      "Robbie Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Taylor Hartman",
      "Nick Dehmer"
     ],
     "a": [
      "Lynda Tomaru",
      "Matthew Matro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lissa Eagles",
      "Sidd Pathare"
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
     "as": 12,
     "h": [
      "Kerrin Maurer",
      "Michael Li"
     ],
     "a": [
      "Aimee Castellano",
      "Thomas Connolly"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Taylor Hartman",
      "Kerrin Maurer"
     ],
     "a": [
      "Courtney Greener",
      "Susan Ackley"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Lissa Eagles",
      "Emily Babinsky"
     ],
     "a": [
      "Lynda Tomaru",
      "Aimee Castellano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Michael Li",
      "Chris Damato"
     ],
     "a": [
      "Robbie Oddy",
      "Thomas Connolly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Nick Dehmer",
      "Sidd Pathare"
     ],
     "a": [
      "Matthew Matro",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Lissa Eagles",
      "Sidd Pathare"
     ],
     "a": [
      "Courtney Greener",
      "Thomas Connolly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Emily Babinsky",
      "Nick Dehmer"
     ],
     "a": [
      "Lynda Tomaru",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Taylor Hartman",
      "Michael Li"
     ],
     "a": [
      "Susan Ackley",
      "Matthew Matro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kerrin Maurer",
      "Chris Damato"
     ],
     "a": [
      "Aimee Castellano",
      "Robbie Oddy"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Taylor Hartman",
      "Emily Babinsky"
     ],
     "a": [
      "Courtney Greener",
      "Lynda Tomaru"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kerrin Maurer",
      "Lissa Eagles"
     ],
     "a": [
      "Susan Ackley",
      "Aimee Castellano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Nick Dehmer",
      "Michael Li"
     ],
     "a": [
      "Matthew Matro",
      "Robbie Oddy"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Sidd Pathare",
      "Chris Damato"
     ],
     "a": [
      "Thomas Connolly",
      "Ross Switkes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Emily Babinsky",
      "Chris Damato"
     ],
     "a": [
      "Courtney Greener",
      "Thomas Connolly"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lissa Eagles",
      "Michael Li"
     ],
     "a": [
      "Lynda Tomaru",
      "Robbie Oddy"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Kerrin Maurer",
      "Nick Dehmer"
     ],
     "a": [
      "Susan Ackley",
      "Matthew Matro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Taylor Hartman",
      "Sidd Pathare"
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
     "as": 14,
     "h": [
      "Taylor Hartman",
      "Lissa Eagles"
     ],
     "a": [
      "Courtney Greener",
      "Lynda Tomaru"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kerrin Maurer",
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
     "hs": 19,
     "as": 21,
     "h": [
      "Chris Damato",
      "Sidd Pathare"
     ],
     "a": [
      "Matthew Matro",
      "Thomas Connolly"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Nick Dehmer",
      "Michael Li"
     ],
     "a": [
      "Ross Switkes",
      "Robbie Oddy"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 12,
   "home": "ACE",
   "away": "Jersey Devil",
   "time": "2026-05-13T19:00:00",
   "complete": true,
   "homePoints": 635,
   "awayPoints": 589,
   "homeGW": 18,
   "awayGW": 14,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Anita Buggins",
      "Hector Irizarry"
     ],
     "a": [
      "Arianna Haresign",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Chaille Godinez",
      "Nathan Law"
     ],
     "a": [
      "Shelah Wallace",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Annemarie Mccartney",
      "Jase Volz"
     ],
     "a": [
      "Michaela Pierznik",
      "Zach Bowe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jennifer Sanchez",
      "Manny Lai"
     ],
     "a": [
      "Michelle Quach",
      "Matthew Chen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Anita Buggins",
      "Jennifer Sanchez"
     ],
     "a": [
      "Arianna Haresign",
      "Shelah Wallace"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Chaille Godinez",
      "Annemarie Mccartney"
     ],
     "a": [
      "Rachel Berger",
      "Michaela Pierznik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Manny Lai",
      "Nathan Law"
     ],
     "a": [
      "Zach Bowe",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Hector Irizarry",
      "Jase Volz"
     ],
     "a": [
      "Johny Mario",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Chaille Godinez",
      "Nathan Law"
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
     "as": 17,
     "h": [
      "Annemarie Mccartney",
      "Hector Irizarry"
     ],
     "a": [
      "Shelah Wallace",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Anita Buggins",
      "Manny Lai"
     ],
     "a": [
      "Michelle Quach",
      "Zach Bowe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 30,
     "as": 28,
     "h": [
      "Stacy Walkowitz",
      "Damien Stahl"
     ],
     "a": [
      "Rachel Berger",
      "Matthew Chen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jennifer Sanchez",
      "Chaille Godinez"
     ],
     "a": [
      "Rachel Berger",
      "Shelah Wallace"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Anita Buggins",
      "Stacy Walkowitz"
     ],
     "a": [
      "Michaela Pierznik",
      "Michelle Quach"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Manny Lai",
      "Hector Irizarry"
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
     "as": 18,
     "h": [
      "Nathan Law",
      "Damien Stahl"
     ],
     "a": [
      "Drew Von Bargen",
      "Johny Mario"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jennifer Sanchez",
      "Hector Irizarry"
     ],
     "a": [
      "Arianna Haresign",
      "Zach Bowe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Chaille Godinez",
      "Jase Volz"
     ],
     "a": [
      "Michelle Quach",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Stacy Walkowitz",
      "Damien Stahl"
     ],
     "a": [
      "Michaela Pierznik",
      "Johny Mario"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Annemarie Mccartney",
      "Nathan Law"
     ],
     "a": [
      "Rachel Berger",
      "Matthew Chen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Anita Buggins",
      "Jennifer Sanchez"
     ],
     "a": [
      "Arianna Haresign",
      "Michelle Quach"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Annemarie Mccartney",
      "Chaille Godinez"
     ],
     "a": [
      "Shelah Wallace",
      "Rachel Berger"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Hector Irizarry",
      "Nathan Law"
     ],
     "a": [
      "Tyler Arsenault",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Manny Lai",
      "Jase Volz"
     ],
     "a": [
      "Matthew Chen",
      "Johny Mario"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Chaille Godinez",
      "Jase Volz"
     ],
     "a": [
      "Shelah Wallace",
      "Zach Bowe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Annemarie Mccartney",
      "Nathan Law"
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
     "as": 8,
     "h": [
      "Anita Buggins",
      "Damien Stahl"
     ],
     "a": [
      "Rachel Berger",
      "Johny Mario"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Stacy Walkowitz",
      "Manny Lai"
     ],
     "a": [
      "Arianna Haresign",
      "Matthew Chen"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Annemarie Mccartney",
      "Stacy Walkowitz"
     ],
     "a": [
      "Arianna Haresign",
      "Shelah Wallace"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jennifer Sanchez",
      "Chaille Godinez"
     ],
     "a": [
      "Michelle Quach",
      "Michaela Pierznik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Manny Lai",
      "Nathan Law"
     ],
     "a": [
      "Johny Mario",
      "Tyler Arsenault"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Damien Stahl",
      "Jase Volz"
     ],
     "a": [
      "Matthew Chen",
      "Zach Bowe"
     ]
    }
   ],
   "subs": []
  },
  {
   "result": "home",
   "week": 12,
   "home": "Picklr Fair Lawn",
   "away": "Monroe",
   "time": "2026-05-13T19:00:00",
   "complete": true,
   "homePoints": 664,
   "awayPoints": 548,
   "homeGW": 26,
   "awayGW": 6,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Emily Cho",
      "Lincoln Mcconnell"
     ],
     "a": [
      "Cameron Barraco",
      "Chris Bucaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kara Infante",
      "Phil Chang"
     ],
     "a": [
      "Sophia Kaufmann",
      "Jacob Yandoli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Johanna Wagner",
      "Chad Durkin"
     ],
     "a": [
      "Morgan Fishman",
      "Anthony Ursino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Katherine Cho",
      "Stephen Mcnamara"
     ],
     "a": [
      "Richa Shah",
      "Chris Frangipane"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Tin Wai Kwan",
      "Johanna Wagner"
     ],
     "a": [
      "Richa Shah",
      "Sophia Kaufmann"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Kara Infante",
      "Rishina Deleon"
     ],
     "a": [
      "Morgan Fishman",
      "Helen Liu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lincoln Mcconnell",
      "Stephen Mcnamara"
     ],
     "a": [
      "Chris Bucaro",
      "Dilan Shah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Pablo Shin",
      "Chad Durkin"
     ],
     "a": [
      "Jacob Yandoli",
      "Chris Frangipane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Katherine Cho",
      "Lincoln Mcconnell"
     ],
     "a": [
      "Sophia Kaufmann",
      "Chris Bucaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Johanna Wagner",
      "Stephen Mcnamara"
     ],
     "a": [
      "Richa Shah",
      "Dilan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Kara Infante",
      "Marcos Claros"
     ],
     "a": [
      "Cameron Barraco",
      "Anthony Ursino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Emily Cho",
      "Phil Chang"
     ],
     "a": [
      "Helen Liu",
      "Chris Frangipane"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Emily Cho",
      "Katherine Cho"
     ],
     "a": [
      "Cameron Barraco",
      "Richa Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Tin Wai Kwan",
      "Rishina Deleon"
     ],
     "a": [
      "Morgan Fishman",
      "Helen Liu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Stephen Mcnamara",
      "Pablo Shin"
     ],
     "a": [
      "Chris Bucaro",
      "Jacob Yandoli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Chad Durkin",
      "Phil Chang"
     ],
     "a": [
      "Anthony Ursino",
      "Dilan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kara Infante",
      "Phil Chang"
     ],
     "a": [
      "Cameron Barraco",
      "Chris Bucaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Johanna Wagner",
      "Marcos Claros"
     ],
     "a": [
      "Sophia Kaufmann",
      "Jacob Yandoli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Emily Cho",
      "Lincoln Mcconnell"
     ],
     "a": [
      "Morgan Fishman",
      "Anthony Ursino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Katherine Cho",
      "Stephen Mcnamara"
     ],
     "a": [
      "Helen Liu",
      "Chris Frangipane"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Katherine Cho",
      "Emily Cho"
     ],
     "a": [
      "Cameron Barraco",
      "Sophia Kaufmann"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Rishina Deleon",
      "Tin Wai Kwan"
     ],
     "a": [
      "Richa Shah",
      "Morgan Fishman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Phil Chang",
      "Lincoln Mcconnell"
     ],
     "a": [
      "Chris Bucaro",
      "Dilan Shah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Marcos Claros",
      "Pablo Shin"
     ],
     "a": [
      "Chris Frangipane",
      "Anthony Ursino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Emily Cho",
      "Stephen Mcnamara"
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
     "as": 20,
     "h": [
      "Johanna Wagner",
      "Phil Chang"
     ],
     "a": [
      "Cameron Barraco",
      "Chris Frangipane"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Katherine Cho",
      "Lincoln Mcconnell"
     ],
     "a": [
      "Helen Liu",
      "Chris Bucaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Kara Infante",
      "Marcos Claros"
     ],
     "a": [
      "Morgan Fishman",
      "Jacob Yandoli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Tin Wai Kwan",
      "Johanna Wagner"
     ],
     "a": [
      "Cameron Barraco",
      "Morgan Fishman"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Rishina Deleon",
      "Kara Infante"
     ],
     "a": [
      "Sophia Kaufmann",
      "Helen Liu"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Chad Durkin",
      "Lincoln Mcconnell"
     ],
     "a": [
      "Chris Frangipane",
      "Dilan Shah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Marcos Claros",
      "Pablo Shin"
     ],
     "a": [
      "Anthony Ursino",
      "Jacob Yandoli"
     ]
    }
   ],
   "subs": [
    "Katherine Cho",
    "Emily Cho",
    "Lincoln Mcconnell",
    "Rishina Deleon",
    "Sophia Kaufmann"
   ]
  },
  {
   "result": "home",
   "week": 12,
   "home": "Pickleball Palace",
   "away": "Pickleball Kingdom Watchung",
   "time": "2026-05-13T19:30:00",
   "complete": true,
   "homePoints": 654,
   "awayPoints": 577,
   "homeGW": 22,
   "awayGW": 10,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 27,
     "as": 25,
     "h": [
      "Carly Pfeffer",
      "Keith Shedlock"
     ],
     "a": [
      "Chanda Mccoy",
      "Daniel Gallegos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Jenna Irwin",
      "Eric Kutzin"
     ],
     "a": [
      "Rebecca Chow",
      "Scott Chen Cheng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jessica Pevny",
      "Patrick Ceccacci"
     ],
     "a": [
      "Elisangela Harrington",
      "Fabricio Gaona"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jessica Hendry",
      "David Lavy"
     ],
     "a": [
      "Zoe Ousouljoglou",
      "Will Kayal"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Jessica Hendry",
      "Claire Malone"
     ],
     "a": [
      "Chanda Mccoy",
      "Zoe Ousouljoglou"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Carly Pfeffer",
      "Jessica Pevny"
     ],
     "a": [
      "Elisangela Harrington",
      "Rebecca Chow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Daniel Kulik",
      "Keith Shedlock"
     ],
     "a": [
      "Daniel Gallegos",
      "Will Kayal"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Patrick Ceccacci",
      "Eric Kutzin"
     ],
     "a": [
      "Andrew Liou",
      "Scott Chen Cheng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Jenna Irwin",
      "Patrick Ceccacci"
     ],
     "a": [
      "Zoe Ousouljoglou",
      "Will Kayal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Claire Malone",
      "Keith Shedlock"
     ],
     "a": [
      "Chanda Mccoy",
      "Daniel Gallegos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jessica Pevny",
      "David Lavy"
     ],
     "a": [
      "Rebecca Chow",
      "Scott Chen Cheng"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Carly Pfeffer",
      "Daniel Kulik"
     ],
     "a": [
      "Elisangela Harrington",
      "Fabricio Gaona"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jessica Pevny",
      "Jessica Hendry"
     ],
     "a": [
      "Elisangela Harrington",
      "Rebecca Chow"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Carly Pfeffer",
      "Jenna Irwin"
     ],
     "a": [
      "Chanda Mccoy",
      "Zoe Ousouljoglou"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "David Lavy",
      "Daniel Kulik"
     ],
     "a": [
      "Andrew Liou",
      "Scott Chen Cheng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Keith Shedlock",
      "Eric Kutzin"
     ],
     "a": [
      "Daniel Gallegos",
      "Will Kayal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jessica Pevny",
      "Eric Kutzin"
     ],
     "a": [
      "Zoe Ousouljoglou",
      "Fabricio Gaona"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Carly Pfeffer",
      "Keith Shedlock"
     ],
     "a": [
      "Elisangela Harrington",
      "Daniel Gallegos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jessica Hendry",
      "Patrick Ceccacci"
     ],
     "a": [
      "Rebecca Chow",
      "Andrew Liou"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Claire Malone",
      "Daniel Kulik"
     ],
     "a": [
      "Chanda Mccoy",
      "Will Kayal"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Jessica Hendry",
      "Claire Malone"
     ],
     "a": [
      "Elisangela Harrington",
      "Zoe Ousouljoglou"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Jenna Irwin",
      "Carly Pfeffer"
     ],
     "a": [
      "Chanda Mccoy",
      "Rebecca Chow"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Eric Kutzin",
      "Keith Shedlock"
     ],
     "a": [
      "Daniel Gallegos",
      "Scott Chen Cheng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Patrick Ceccacci",
      "Daniel Kulik"
     ],
     "a": [
      "Andrew Liou",
      "Fabricio Gaona"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Claire Malone",
      "Patrick Ceccacci"
     ],
     "a": [
      "Chanda Mccoy",
      "Will Kayal"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Jenna Irwin",
      "Daniel Kulik"
     ],
     "a": [
      "Zoe Ousouljoglou",
      "Fabricio Gaona"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Carly Pfeffer",
      "David Lavy"
     ],
     "a": [
      "Elisangela Harrington",
      "Daniel Gallegos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Jessica Hendry",
      "Eric Kutzin"
     ],
     "a": [
      "Rebecca Chow",
      "Andrew Liou"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jenna Irwin",
      "Jessica Hendry"
     ],
     "a": [
      "Chanda Mccoy",
      "Rebecca Chow"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Claire Malone",
      "Jessica Pevny"
     ],
     "a": [
      "Elisangela Harrington",
      "Zoe Ousouljoglou"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "David Lavy",
      "Keith Shedlock"
     ],
     "a": [
      "Will Kayal",
      "Scott Chen Cheng"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Patrick Ceccacci",
      "Daniel Kulik"
     ],
     "a": [
      "Andrew Liou",
      "Fabricio Gaona"
     ]
    }
   ],
   "subs": [
    "Eric Kutzin",
    "Rebecca Chow",
    "Andrew Liou",
    "Scott Chen Cheng"
   ]
  },
  {
   "result": "home",
   "week": 12,
   "home": "Pickle House",
   "away": "Bounce Philly",
   "time": "2026-05-13T19:30:00",
   "complete": true,
   "homePoints": 660,
   "awayPoints": 532,
   "homeGW": 26,
   "awayGW": 6,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kerrin Maurer",
      "Nick Dehmer"
     ],
     "a": [
      "Alex Abad",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Anisha Malhotra",
      "Kishan Shah"
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
     "as": 14,
     "h": [
      "Taylor Hartman",
      "Chris Damato"
     ],
     "a": [
      "Sue Lyle",
      "Ashwin Korde"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Emily Babinsky",
      "Sidd Pathare"
     ],
     "a": [
      "Brittney Lew",
      "Zachary Lessner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 8,
     "h": [
      "Emily Babinsky",
      "Lissa Eagles"
     ],
     "a": [
      "Sue Lyle",
      "Brittney Lew"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kerrin Maurer",
      "Anisha Malhotra"
     ],
     "a": [
      "Alex Abad",
      "Charlotte Healey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Kishan Shah",
      "Chris Damato"
     ],
     "a": [
      "Alexander Tong",
      "Ashwin Korde"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Nick Dehmer",
      "Sidd Pathare"
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
     "as": 18,
     "h": [
      "Kerrin Maurer",
      "Chris Damato"
     ],
     "a": [
      "Charlotte Healey",
      "Alexander Tong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Taylor Hartman",
      "Michael Li"
     ],
     "a": [
      "Sue Lyle",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Anisha Malhotra",
      "Nick Dehmer"
     ],
     "a": [
      "Alex Abad",
      "Ashwin Korde"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Emily Babinsky",
      "Sidd Pathare"
     ],
     "a": [
      "Brittney Lew",
      "Zachary Lessner"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Lissa Eagles",
      "Taylor Hartman"
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
     "as": 14,
     "h": [
      "Anisha Malhotra",
      "Emily Babinsky"
     ],
     "a": [
      "Sue Lyle",
      "Brittney Lew"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Sidd Pathare",
      "Kishan Shah"
     ],
     "a": [
      "Alexander Tong",
      "Ashwin Korde"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Michael Li",
      "Chris Damato"
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
     "as": 14,
     "h": [
      "Lissa Eagles",
      "Kishan Shah"
     ],
     "a": [
      "Alex Abad",
      "Zachary Lessner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kerrin Maurer",
      "Nick Dehmer"
     ],
     "a": [
      "Sue Lyle",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Taylor Hartman",
      "Michael Li"
     ],
     "a": [
      "Charlotte Healey",
      "Ashwin Korde"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Emily Babinsky",
      "Chris Damato"
     ],
     "a": [
      "Brittney Lew",
      "Alexander Tong"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Lissa Eagles",
      "Anisha Malhotra"
     ],
     "a": [
      "Charlotte Healey",
      "Brittney Lew"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Taylor Hartman",
      "Kerrin Maurer"
     ],
     "a": [
      "Alex Abad",
      "Sue Lyle"
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
      "Mark Kilimnik",
      "Alexander Tong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Nick Dehmer",
      "Sidd Pathare"
     ],
     "a": [
      "Zachary Lessner",
      "Ashwin Korde"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kerrin Maurer",
      "Michael Li"
     ],
     "a": [
      "Alex Abad",
      "Ashwin Korde"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lissa Eagles",
      "Sidd Pathare"
     ],
     "a": [
      "Sue Lyle",
      "Zachary Lessner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Taylor Hartman",
      "Nick Dehmer"
     ],
     "a": [
      "Charlotte Healey",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Emily Babinsky",
      "Kishan Shah"
     ],
     "a": [
      "Brittney Lew",
      "Alexander Tong"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 5,
     "h": [
      "Lissa Eagles",
      "Kerrin Maurer"
     ],
     "a": [
      "Sue Lyle",
      "Alex Abad"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Taylor Hartman",
      "Anisha Malhotra"
     ],
     "a": [
      "Charlotte Healey",
      "Brittney Lew"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Michael Li",
      "Nick Dehmer"
     ],
     "a": [
      "Mark Kilimnik",
      "Alexander Tong"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Chris Damato",
      "Kishan Shah"
     ],
     "a": [
      "Zachary Lessner",
      "Ashwin Korde"
     ]
    }
   ],
   "subs": [
    "Anisha Malhotra",
    "Brittney Lew",
    "Sue Lyle"
   ]
  }
 ],
 "playoffs": [
  {
   "result": "home",
   "round": 1,
   "home": "Pickle House",
   "away": "Picklr Fair Lawn",
   "time": "2026-05-20T19:30:00",
   "complete": true,
   "homeSeed": 1,
   "awaySeed": 4,
   "homePoints": 635,
   "awayPoints": 571,
   "homeGW": 18,
   "awayGW": 17,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lissa Eagles",
      "Nick Dehmer"
     ],
     "a": [
      "Tin Wai Kwan",
      "Chad Durkin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Kerrin Maurer",
      "Chris Damato"
     ],
     "a": [
      "Kara Infante",
      "Phil Chang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Taylor Hartman",
      "Nick Babinsky"
     ],
     "a": [
      "Caitlyn Moore",
      "Stephen Mcnamara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Emily Babinsky",
      "Jaco De Waal"
     ],
     "a": [
      "Ariana Rizvani",
      "Fabian Marcos"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Taylor Hartman",
      "Lissa Eagles"
     ],
     "a": [
      "Tin Wai Kwan",
      "Caitlyn Moore"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Kerrin Maurer",
      "Emily Babinsky"
     ],
     "a": [
      "Kara Infante",
      "Ariana Rizvani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Nick Babinsky",
      "Nick Dehmer"
     ],
     "a": [
      "Stephen Mcnamara",
      "Fabian Marcos"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Chris Damato",
      "Jaco De Waal"
     ],
     "a": [
      "Phil Chang",
      "Chad Durkin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Kerrin Maurer",
      "Nick Babinsky"
     ],
     "a": [
      "Tin Wai Kwan",
      "Stephen Mcnamara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Emily Babinsky",
      "Nick Dehmer"
     ],
     "a": [
      "Kara Infante",
      "Fabian Marcos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Taylor Hartman",
      "Chris Damato"
     ],
     "a": [
      "Caitlyn Moore",
      "Phil Chang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Lissa Eagles",
      "Jaco De Waal"
     ],
     "a": [
      "Ariana Rizvani",
      "Jansen Tubo"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kerrin Maurer",
      "Emily Babinsky"
     ],
     "a": [
      "Tin Wai Kwan",
      "Ariana Rizvani"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Taylor Hartman",
      "Lissa Eagles"
     ],
     "a": [
      "Kara Infante",
      "Caitlyn Moore"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Chris Damato",
      "Jaco De Waal"
     ],
     "a": [
      "Stephen Mcnamara",
      "Chad Durkin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Nick Babinsky",
      "Nick Dehmer"
     ],
     "a": [
      "Phil Chang",
      "Jansen Tubo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kerrin Maurer",
      "Jaco De Waal"
     ],
     "a": [
      "Kara Infante",
      "Phil Chang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Taylor Hartman",
      "Nick Dehmer"
     ],
     "a": [
      "Caitlyn Moore",
      "Stephen Mcnamara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lissa Eagles",
      "Chris Damato"
     ],
     "a": [
      "Tin Wai Kwan",
      "Fabian Marcos"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Emily Babinsky",
      "Nick Babinsky"
     ],
     "a": [
      "Ariana Rizvani",
      "Jansen Tubo"
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
      "Kara Infante",
      "Ariana Rizvani"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 7,
     "h": [
      "Kerrin Maurer",
      "Lissa Eagles"
     ],
     "a": [
      "Tin Wai Kwan",
      "Caitlyn Moore"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jaco De Waal",
      "Nick Babinsky"
     ],
     "a": [
      "Stephen Mcnamara",
      "Phil Chang"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Nick Dehmer",
      "Chris Damato"
     ],
     "a": [
      "Chad Durkin",
      "Jansen Tubo"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Kerrin Maurer",
      "Nick Dehmer"
     ],
     "a": [
      "Caitlyn Moore",
      "Phil Chang"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lissa Eagles",
      "Chris Damato"
     ],
     "a": [
      "Tin Wai Kwan",
      "Stephen Mcnamara"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Taylor Hartman",
      "Jaco De Waal"
     ],
     "a": [
      "Kara Infante",
      "Chad Durkin"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Emily Babinsky",
      "Nick Babinsky"
     ],
     "a": [
      "Ariana Rizvani",
      "Fabian Marcos"
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
      "Tin Wai Kwan",
      "Ariana Rizvani"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Kerrin Maurer",
      "Lissa Eagles"
     ],
     "a": [
      "Kara Infante",
      "Caitlyn Moore"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Nick Dehmer",
      "Chris Damato"
     ],
     "a": [
      "Chad Durkin",
      "Stephen Mcnamara"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Jaco De Waal",
      "Nick Babinsky"
     ],
     "a": [
      "Fabian Marcos",
      "Jansen Tubo"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": null,
     "as": null,
     "h": [
      "",
      ""
     ],
     "a": [
      "Kara Infante",
      "Phil Chang"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": null,
     "as": null,
     "h": [
      "",
      ""
     ],
     "a": [
      "Caitlyn Moore",
      "Tin Wai Kwan"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": null,
     "as": null,
     "h": [
      "",
      ""
     ],
     "a": [
      "Stephen Mcnamara",
      "Chad Durkin"
     ]
    }
   ]
  },
  {
   "result": "home",
   "round": 1,
   "home": "Pickleball Palace",
   "away": "Monroe",
   "time": "2026-05-18T19:30:00",
   "complete": true,
   "homeSeed": 2,
   "awaySeed": 3,
   "homePoints": 641,
   "awayPoints": 534,
   "homeGW": 22,
   "awayGW": 10,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jessica Hendry",
      "Alvaro Regalado"
     ],
     "a": [
      "Ruhi Shah",
      "Jacob Yandoli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Ashley Georgevich",
      "Daniel Kulik"
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
     "as": 18,
     "h": [
      "Claire Malone",
      "Patrick Ceccacci"
     ],
     "a": [
      "Morgan Fishman",
      "Maanav Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jenna Irwin",
      "Keith Shedlock"
     ],
     "a": [
      "Amanda Ksiezopolski",
      "Shreyas Pani"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Ashley Georgevich",
      "Beatriz Lopez Albarracin"
     ],
     "a": [
      "Ruhi Shah",
      "Cameron Barraco"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Jessica Hendry",
      "Jenna Irwin"
     ],
     "a": [
      "Amanda Ksiezopolski",
      "Morgan Fishman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Daniel Kulik",
      "Alvaro Regalado"
     ],
     "a": [
      "Jacob Yandoli",
      "Chris Bucaro"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Patrick Ceccacci",
      "Keith Shedlock"
     ],
     "a": [
      "Maanav Shah",
      "Shreyas Pani"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Beatriz Lopez Albarracin",
      "Alvaro Regalado"
     ],
     "a": [
      "Ruhi Shah",
      "Dilan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jenna Irwin",
      "Keith Shedlock"
     ],
     "a": [
      "Cameron Barraco",
      "Chris Bucaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Claire Malone",
      "Daniel Kulik"
     ],
     "a": [
      "Richa Shah",
      "Maanav Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ashley Georgevich",
      "Patrick Ceccacci"
     ],
     "a": [
      "Amanda Ksiezopolski",
      "Shreyas Pani"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jessica Hendry",
      "Beatriz Lopez Albarracin"
     ],
     "a": [
      "Richa Shah",
      "Ruhi Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Claire Malone",
      "Ashley Georgevich"
     ],
     "a": [
      "Morgan Fishman",
      "Cameron Barraco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Alvaro Regalado",
      "Keith Shedlock"
     ],
     "a": [
      "Maanav Shah",
      "Dilan Shah"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Daniel Kulik",
      "Patrick Ceccacci"
     ],
     "a": [
      "Chris Bucaro",
      "Jacob Yandoli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Jessica Hendry",
      "Keith Shedlock"
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
      "Jenna Irwin",
      "Patrick Ceccacci"
     ],
     "a": [
      "Morgan Fishman",
      "Jacob Yandoli"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Claire Malone",
      "Daniel Kulik"
     ],
     "a": [
      "Cameron Barraco",
      "Chris Bucaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Beatriz Lopez Albarracin",
      "Alvaro Regalado"
     ],
     "a": [
      "Ruhi Shah",
      "Maanav Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Jenna Irwin",
      "Beatriz Lopez Albarracin"
     ],
     "a": [
      "Richa Shah",
      "Ruhi Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 6,
     "h": [
      "Ashley Georgevich",
      "Claire Malone"
     ],
     "a": [
      "Amanda Ksiezopolski",
      "Cameron Barraco"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Daniel Kulik",
      "Patrick Ceccacci"
     ],
     "a": [
      "Chris Bucaro",
      "Shreyas Pani"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Alvaro Regalado",
      "Keith Shedlock"
     ],
     "a": [
      "Dilan Shah",
      "Maanav Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Ashley Georgevich",
      "Daniel Kulik"
     ],
     "a": [
      "Richa Shah",
      "Dilan Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Claire Malone",
      "Keith Shedlock"
     ],
     "a": [
      "Ruhi Shah",
      "Maanav Shah"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Beatriz Lopez Albarracin",
      "Patrick Ceccacci"
     ],
     "a": [
      "Morgan Fishman",
      "Chris Bucaro"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jessica Hendry",
      "Alvaro Regalado"
     ],
     "a": [
      "Amanda Ksiezopolski",
      "Jacob Yandoli"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Ashley Georgevich",
      "Beatriz Lopez Albarracin"
     ],
     "a": [
      "Cameron Barraco",
      "Ruhi Shah"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Jessica Hendry",
      "Jenna Irwin"
     ],
     "a": [
      "Amanda Ksiezopolski",
      "Morgan Fishman"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Patrick Ceccacci",
      "Keith Shedlock"
     ],
     "a": [
      "Shreyas Pani",
      "Jacob Yandoli"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Alvaro Regalado",
      "Daniel Kulik"
     ],
     "a": [
      "Dilan Shah",
      "Chris Bucaro"
     ]
    }
   ]
  },
  {
   "result": "home",
   "round": 1,
   "home": "Dill Dinkers Hatboro",
   "away": "Jersey Devil",
   "time": "2026-05-20T19:30:00",
   "complete": true,
   "homeSeed": 1,
   "awaySeed": 4,
   "homePoints": 657,
   "awayPoints": 562,
   "homeGW": 26,
   "awayGW": 9,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 10,
     "h": [
      "Hannah Nussbaum",
      "Dylan Ashbach"
     ],
     "a": [
      "Shelah Wallace",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Allison Tarnoff",
      "Jonah Fliegelman"
     ],
     "a": [
      "Arianna Haresign",
      "Matthew Chen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Nahla Bernhardt",
      "Ozair Ibrahim"
     ],
     "a": [
      "Michelle Quach",
      "Zach Bowe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Lindsey Thoeng",
      "Clayton Schmucker"
     ],
     "a": [
      "Michaela Pierznik",
      "Johny Mario"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Hannah Nussbaum",
      "Kaylyn Swankoski"
     ],
     "a": [
      "Shelah Wallace",
      "Rachel Berger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Allison Tarnoff",
      "Lindsey Thoeng"
     ],
     "a": [
      "Arianna Haresign",
      "Michelle Quach"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Jonah Fliegelman",
      "Clayton Schmucker"
     ],
     "a": [
      "Matthew Chen",
      "Zach Bowe"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Dylan Ashbach",
      "Kenoa Tio"
     ],
     "a": [
      "Drew Von Bargen",
      "Johny Mario"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Lindsey Thoeng",
      "Clayton Schmucker"
     ],
     "a": [
      "Shelah Wallace",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Hannah Nussbaum",
      "Dylan Ashbach"
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
     "as": 13,
     "h": [
      "Allison Tarnoff",
      "Kenoa Tio"
     ],
     "a": [
      "Michelle Quach",
      "Matthew Chen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 26,
     "as": 24,
     "h": [
      "Kaylyn Swankoski",
      "Ozair Ibrahim"
     ],
     "a": [
      "Michaela Pierznik",
      "Johny Mario"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Hannah Nussbaum",
      "Nahla Bernhardt"
     ],
     "a": [
      "Michaela Pierznik",
      "Rachel Berger"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kaylyn Swankoski",
      "Lindsey Thoeng"
     ],
     "a": [
      "Arianna Haresign",
      "Shelah Wallace"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Clayton Schmucker",
      "Kenoa Tio"
     ],
     "a": [
      "Matthew Chen",
      "Zach Bowe"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Jonah Fliegelman",
      "Ozair Ibrahim"
     ],
     "a": [
      "Drew Von Bargen",
      "Johny Mario"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Allison Tarnoff",
      "Ozair Ibrahim"
     ],
     "a": [
      "Michaela Pierznik",
      "Drew Von Bargen"
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
      "Arianna Haresign",
      "Zach Bowe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Lindsey Thoeng",
      "Kenoa Tio"
     ],
     "a": [
      "Rachel Berger",
      "Matthew Chen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Nahla Bernhardt",
      "Jonah Fliegelman"
     ],
     "a": [
      "Michelle Quach",
      "Johny Mario"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Nahla Bernhardt",
      "Lindsey Thoeng"
     ],
     "a": [
      "Rachel Berger",
      "Michelle Quach"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Kaylyn Swankoski",
      "Hannah Nussbaum"
     ],
     "a": [
      "Arianna Haresign",
      "Shelah Wallace"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Dylan Ashbach",
      "Jonah Fliegelman"
     ],
     "a": [
      "Zach Bowe",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Clayton Schmucker",
      "Ozair Ibrahim"
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
     "as": 19,
     "h": [
      "Nahla Bernhardt",
      "Jonah Fliegelman"
     ],
     "a": [
      "Michaela Pierznik",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kaylyn Swankoski",
      "Dylan Ashbach"
     ],
     "a": [
      "Shelah Wallace",
      "Zach Bowe"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Lindsey Thoeng",
      "Kenoa Tio"
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
      "Allison Tarnoff",
      "Ozair Ibrahim"
     ],
     "a": [
      "Rachel Berger",
      "Johny Mario"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Hannah Nussbaum",
      "Nahla Bernhardt"
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
     "as": 18,
     "h": [
      "Allison Tarnoff",
      "Kaylyn Swankoski"
     ],
     "a": [
      "Shelah Wallace",
      "Michaela Pierznik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Jonah Fliegelman",
      "Dylan Ashbach"
     ],
     "a": [
      "Zach Bowe",
      "Drew Von Bargen"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Clayton Schmucker",
      "Kenoa Tio"
     ],
     "a": [
      "Johny Mario",
      "Matthew Chen"
     ]
    },
    {
     "t": "mixed",
     "ff": 1,
     "hs": null,
     "as": null,
     "h": [
      "",
      ""
     ],
     "a": [
      "Michelle Quach",
      "Matthew Chen"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": null,
     "as": null,
     "h": [
      "",
      ""
     ],
     "a": [
      "Shelah Wallace",
      "Arianna Haresign"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": null,
     "as": null,
     "h": [
      "",
      ""
     ],
     "a": [
      "Drew Von Bargen",
      "Zach Bowe"
     ]
    }
   ]
  },
  {
   "result": "away",
   "round": 1,
   "home": "ACE",
   "away": "Bounce Philly",
   "time": "2026-05-20T19:00:00",
   "complete": true,
   "homeSeed": 2,
   "awaySeed": 3,
   "homePoints": 507,
   "awayPoints": 552,
   "homeGW": 11,
   "awayGW": 21,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Jennifer Sanchez",
      "Steven Maisonet"
     ],
     "a": [
      "Alex Abad",
      "Bruno Casino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Anita Buggins",
      "Hector Irizarry"
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
     "as": 17,
     "h": [
      "Chaille Godinez",
      "Nathan Law"
     ],
     "a": [
      "Alyssa Boyle",
      "William Hayes"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Annemarie Mccartney",
      "Manny Lai"
     ],
     "a": [
      "Rachel Alfano",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Jennifer Sanchez",
      "Anita Buggins"
     ],
     "a": [
      "Rachel Alfano",
      "Robyn Himelstein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Annemarie Mccartney",
      "Chaille Godinez"
     ],
     "a": [
      "Alex Abad",
      "Charlotte Healey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 23,
     "h": [
      "Manny Lai",
      "Hector Irizarry"
     ],
     "a": [
      "Alexander Tong",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Nathan Law",
      "Damien Stahl"
     ],
     "a": [
      "William Hayes",
      "Zachary Lessner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 13,
     "as": 21,
     "h": [
      "Jennifer Sanchez",
      "Damien Stahl"
     ],
     "a": [
      "Alyssa Boyle",
      "Bruno Casino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Chaille Godinez",
      "Manny Lai"
     ],
     "a": [
      "Robyn Himelstein",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Stacy Walkowitz",
      "Nathan Law"
     ],
     "a": [
      "Rachel Alfano",
      "Zachary Lessner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Annemarie Mccartney",
      "Hector Irizarry"
     ],
     "a": [
      "Alex Abad",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Anita Buggins",
      "Annemarie Mccartney"
     ],
     "a": [
      "Rachel Alfano",
      "Alex Abad"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Stacy Walkowitz",
      "Chaille Godinez"
     ],
     "a": [
      "Alyssa Boyle",
      "Charlotte Healey"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Hector Irizarry",
      "Steven Maisonet"
     ],
     "a": [
      "Alexander Tong",
      "Zachary Lessner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Manny Lai",
      "Nathan Law"
     ],
     "a": [
      "Mark Kilimnik",
      "Bruno Casino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Stacy Walkowitz",
      "Manny Lai"
     ],
     "a": [
      "Charlotte Healey",
      "Bruno Casino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Anita Buggins",
      "Hector Irizarry"
     ],
     "a": [
      "Rachel Alfano",
      "Alexander Tong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Annemarie Mccartney",
      "Nathan Law"
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
     "as": 19,
     "h": [
      "Chaille Godinez",
      "Steven Maisonet"
     ],
     "a": [
      "Robyn Himelstein",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Anita Buggins",
      "Jennifer Sanchez"
     ],
     "a": [
      "Rachel Alfano",
      "Alex Abad"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Annemarie Mccartney",
      "Chaille Godinez"
     ],
     "a": [
      "Alyssa Boyle",
      "Robyn Himelstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Manny Lai",
      "Hector Irizarry"
     ],
     "a": [
      "Alexander Tong",
      "Zachary Lessner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Nathan Law",
      "Damien Stahl"
     ],
     "a": [
      "Dustin Rabinowitz",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Stacy Walkowitz",
      "Damien Stahl"
     ],
     "a": [
      "Alex Abad",
      "Bruno Casino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 23,
     "as": 25,
     "h": [
      "Chaille Godinez",
      "Nathan Law"
     ],
     "a": [
      "Robyn Himelstein",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 8,
     "as": 21,
     "h": [
      "Anita Buggins",
      "Manny Lai"
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
      "Annemarie Mccartney",
      "Hector Irizarry"
     ],
     "a": [
      "Charlotte Healey",
      "William Hayes"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "Chaille Godinez",
      "Jennifer Sanchez"
     ],
     "a": [
      "Rachel Alfano",
      "Robyn Himelstein"
     ]
    },
    {
     "t": "female",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "Anita Buggins",
      "Annemarie Mccartney"
     ],
     "a": [
      "Alyssa Boyle",
      "Charlotte Healey"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "Manny Lai",
      "Nathan Law"
     ],
     "a": [
      "Alexander Tong",
      "William Hayes"
     ]
    },
    {
     "t": "male",
     "ff": 1,
     "hs": 0,
     "as": 1,
     "h": [
      "Hector Irizarry",
      "Steven Maisonet"
     ],
     "a": [
      "Bruno Casino",
      "Dustin Rabinowitz"
     ]
    }
   ]
  },
  {
   "result": "home",
   "round": 2,
   "home": "Pickle House",
   "away": "Pickleball Palace",
   "time": "2026-05-27T19:30:00",
   "complete": true,
   "homeSeed": 1,
   "awaySeed": 2,
   "homePoints": 622,
   "awayPoints": 605,
   "homeGW": 17,
   "awayGW": 15,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 9,
     "as": 21,
     "h": [
      "Emily Babinsky",
      "Jaco De Waal"
     ],
     "a": [
      "Ashley Georgevich",
      "Thomas Dill"
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
      "Jessica Pevny",
      "Keith Shedlock"
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
      "Claire Malone",
      "Christian Fechter"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 9,
     "h": [
      "Kerrin Maurer",
      "Nick Dehmer"
     ],
     "a": [
      "Jessica Hendry",
      "Patrick Ceccacci"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 11,
     "as": 21,
     "h": [
      "Taylor Hartman",
      "Emily Babinsky"
     ],
     "a": [
      "Ashley Georgevich",
      "Claire Malone"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Kerrin Maurer",
      "Lissa Eagles"
     ],
     "a": [
      "Jenna Irwin",
      "Jessica Hendry"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Chris Damato",
      "Zach Hollmann"
     ],
     "a": [
      "Christian Fechter",
      "Thomas Dill"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 24,
     "as": 22,
     "h": [
      "Nick Dehmer",
      "Jaco De Waal"
     ],
     "a": [
      "Patrick Ceccacci",
      "Keith Shedlock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Emily Babinsky",
      "Zach Hollmann"
     ],
     "a": [
      "Ashley Georgevich",
      "Christian Fechter"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Taylor Hartman",
      "Jaco De Waal"
     ],
     "a": [
      "Claire Malone",
      "Thomas Dill"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kerrin Maurer",
      "Nick Dehmer"
     ],
     "a": [
      "Jessica Hendry",
      "Keith Shedlock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Lissa Eagles",
      "Chris Damato"
     ],
     "a": [
      "Jessica Pevny",
      "Patrick Ceccacci"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 14,
     "h": [
      "Kerrin Maurer",
      "Taylor Hartman"
     ],
     "a": [
      "Ashley Georgevich",
      "Jessica Pevny"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Lissa Eagles",
      "Emily Babinsky"
     ],
     "a": [
      "Jessica Hendry",
      "Jenna Irwin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Jaco De Waal",
      "Zach Hollmann"
     ],
     "a": [
      "Thomas Dill",
      "Patrick Ceccacci"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Nick Dehmer",
      "Chris Damato"
     ],
     "a": [
      "Christian Fechter",
      "Keith Shedlock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 14,
     "as": 21,
     "h": [
      "Taylor Hartman",
      "Chris Damato"
     ],
     "a": [
      "Jenna Irwin",
      "Christian Fechter"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Emily Babinsky",
      "Jaco De Waal"
     ],
     "a": [
      "Jessica Hendry",
      "Thomas Dill"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 17,
     "as": 21,
     "h": [
      "Lissa Eagles",
      "Nick Dehmer"
     ],
     "a": [
      "Claire Malone",
      "Patrick Ceccacci"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kerrin Maurer",
      "Zach Hollmann"
     ],
     "a": [
      "Jessica Pevny",
      "Keith Shedlock"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Taylor Hartman",
      "Emily Babinsky"
     ],
     "a": [
      "Ashley Georgevich",
      "Claire Malone"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Kerrin Maurer",
      "Lissa Eagles"
     ],
     "a": [
      "Jessica Pevny",
      "Jenna Irwin"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Jaco De Waal",
      "Chris Damato"
     ],
     "a": [
      "Keith Shedlock",
      "Thomas Dill"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 29,
     "as": 27,
     "h": [
      "Nick Dehmer",
      "Zach Hollmann"
     ],
     "a": [
      "Patrick Ceccacci",
      "Christian Fechter"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Lissa Eagles",
      "Jaco De Waal"
     ],
     "a": [
      "Ashley Georgevich",
      "Thomas Dill"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Kerrin Maurer",
      "Zach Hollmann"
     ],
     "a": [
      "Jessica Hendry",
      "Christian Fechter"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 16,
     "h": [
      "Taylor Hartman",
      "Nick Dehmer"
     ],
     "a": [
      "Jenna Irwin",
      "Keith Shedlock"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Emily Babinsky",
      "Chris Damato"
     ],
     "a": [
      "Claire Malone",
      "Patrick Ceccacci"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Taylor Hartman",
      "Kerrin Maurer"
     ],
     "a": [
      "Ashley Georgevich",
      "Jenna Irwin"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 24,
     "as": 26,
     "h": [
      "Lissa Eagles",
      "Emily Babinsky"
     ],
     "a": [
      "Claire Malone",
      "Jessica Hendry"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Jaco De Waal",
      "Zach Hollmann"
     ],
     "a": [
      "Thomas Dill",
      "Patrick Ceccacci"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 21,
     "as": 12,
     "h": [
      "Nick Dehmer",
      "Chris Damato"
     ],
     "a": [
      "Christian Fechter",
      "Keith Shedlock"
     ]
    }
   ]
  },
  {
   "result": "home",
   "round": 2,
   "home": "Dill Dinkers Hatboro",
   "away": "Bounce Philly",
   "time": "2026-05-27T19:30:00",
   "complete": true,
   "homeSeed": 1,
   "awaySeed": 3,
   "homePoints": 617,
   "awayPoints": 609,
   "homeGW": 19,
   "awayGW": 13,
   "games": [
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 11,
     "h": [
      "Hannah Nussbaum",
      "Dylan Ashbach"
     ],
     "a": [
      "Alex Abad",
      "Bruno Casino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 20,
     "as": 22,
     "h": [
      "Lindsey Thoeng",
      "Clayton Schmucker"
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
      "Nahla Bernhardt",
      "Jonah Fliegelman"
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
     "as": 17,
     "h": [
      "Rayna Baizman",
      "Ozair Ibrahim"
     ],
     "a": [
      "Rachel Alfano",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Kaylyn Swankoski",
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
     "hs": 21,
     "as": 15,
     "h": [
      "Lindsey Thoeng",
      "Nahla Bernhardt"
     ],
     "a": [
      "Robyn Himelstein",
      "Rachel Alfano"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 16,
     "as": 21,
     "h": [
      "Ozair Ibrahim",
      "Jonah Fliegelman"
     ],
     "a": [
      "Alexander Tong",
      "Zachary Lessner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Dylan Ashbach",
      "Kenoa Tio"
     ],
     "a": [
      "Bruno Casino",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 25,
     "as": 23,
     "h": [
      "Hannah Nussbaum",
      "Dylan Ashbach"
     ],
     "a": [
      "Alex Abad",
      "Bruno Casino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Lindsey Thoeng",
      "Clayton Schmucker"
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
     "as": 12,
     "h": [
      "Kaylyn Swankoski",
      "Jonah Fliegelman"
     ],
     "a": [
      "Rachel Alfano",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Rayna Baizman",
      "Kenoa Tio"
     ],
     "a": [
      "Alyssa Boyle",
      "William Hayes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Hannah Nussbaum",
      "Nahla Bernhardt"
     ],
     "a": [
      "Alex Abad",
      "Robyn Himelstein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 15,
     "h": [
      "Kaylyn Swankoski",
      "Lindsey Thoeng"
     ],
     "a": [
      "Charlotte Healey",
      "Alyssa Boyle"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Dylan Ashbach",
      "Jonah Fliegelman"
     ],
     "a": [
      "Alexander Tong",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 19,
     "as": 21,
     "h": [
      "Ozair Ibrahim",
      "Kenoa Tio"
     ],
     "a": [
      "Zachary Lessner",
      "William Hayes"
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
      "Alyssa Boyle",
      "Bruno Casino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Rayna Baizman",
      "Jonah Fliegelman"
     ],
     "a": [
      "Rachel Alfano",
      "Zachary Lessner"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 20,
     "h": [
      "Nahla Bernhardt",
      "Ozair Ibrahim"
     ],
     "a": [
      "Robyn Himelstein",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 22,
     "as": 24,
     "h": [
      "Hannah Nussbaum",
      "Kenoa Tio"
     ],
     "a": [
      "Alex Abad",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 23,
     "as": 21,
     "h": [
      "Kaylyn Swankoski",
      "Rayna Baizman"
     ],
     "a": [
      "Alex Abad",
      "Robyn Himelstein"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 13,
     "h": [
      "Hannah Nussbaum",
      "Lindsey Thoeng"
     ],
     "a": [
      "Rachel Alfano",
      "Alyssa Boyle"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Ozair Ibrahim",
      "Clayton Schmucker"
     ],
     "a": [
      "Alexander Tong",
      "William Hayes"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 15,
     "as": 21,
     "h": [
      "Dylan Ashbach",
      "Kenoa Tio"
     ],
     "a": [
      "Bruno Casino",
      "Dustin Rabinowitz"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 10,
     "as": 21,
     "h": [
      "Kaylyn Swankoski",
      "Dylan Ashbach"
     ],
     "a": [
      "Alyssa Boyle",
      "Bruno Casino"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 19,
     "h": [
      "Nahla Bernhardt",
      "Jonah Fliegelman"
     ],
     "a": [
      "Rachel Alfano",
      "Alexander Tong"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 17,
     "h": [
      "Lindsey Thoeng",
      "Kenoa Tio"
     ],
     "a": [
      "Robyn Himelstein",
      "Mark Kilimnik"
     ]
    },
    {
     "t": "mixed",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Rayna Baizman",
      "Ozair Ibrahim"
     ],
     "a": [
      "Charlotte Healey",
      "William Hayes"
     ]
    },
    {
     "t": "female",
     "ff": 0,
     "hs": 21,
     "as": 18,
     "h": [
      "Hannah Nussbaum",
      "Nahla Bernhardt"
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
     "as": 19,
     "h": [
      "Lindsey Thoeng",
      "Kaylyn Swankoski"
     ],
     "a": [
      "Rachel Alfano",
      "Robyn Himelstein"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 18,
     "as": 21,
     "h": [
      "Clayton Schmucker",
      "Ozair Ibrahim"
     ],
     "a": [
      "Alexander Tong",
      "Zachary Lessner"
     ]
    },
    {
     "t": "male",
     "ff": 0,
     "hs": 12,
     "as": 21,
     "h": [
      "Dylan Ashbach",
      "Jonah Fliegelman"
     ],
     "a": [
      "Bruno Casino",
      "Dustin Rabinowitz"
     ]
    }
   ]
  },
  {
   "result": null,
   "round": 3,
   "home": "Dill Dinkers Hatboro",
   "away": "Pickle House",
   "time": "2026-06-07T10:00:00",
   "complete": false,
   "homeSeed": 1,
   "awaySeed": 1
  }
 ],
 "extraPlayerIds": {
  "Emily Su": "027988d5-1c42-4102-b21a-bfce0434d664",
  "Joseph Potian": "12d39a13-b2a4-4b31-8949-ddf4752f62b2",
  "Zachary Adler": "1a45849d-879b-40a2-a0df-ec262414d1c3",
  "Ariana Rizvani": "1c7e9745-06f1-4486-9b14-5f4205128867",
  "Chenfei Gao": "3807d345-e2d6-4e75-9a59-9248ebf6e296",
  "Picky Vorabouth": "38336cb3-6ff4-4187-abe5-3f0a819d0a0d",
  "Alex Mihalca": "47054f48-f7f3-4a11-8a3c-03160ea588b6",
  "Kyla Pinnock": "4e6b7c7e-8c70-471a-a526-013709d15813",
  "Gavin Springer": "6a2c35b2-abd8-4de1-8f22-1df57897245b",
  "Zach Hollmann": "8aef2d8a-0bd4-45df-b5d1-1a120a81ef0f",
  "Roxanne Entrada": "960bd846-2b9e-409c-8382-7ebf83909776",
  "Nick Babinsky": "9790dabb-8be3-48df-9fc4-eecb920ec98c",
  "Stuart Smith": "999c2d48-1810-43f4-b473-73594bb1561b",
  "Tristan Lane": "a44398f7-39fd-4373-8499-d4cfd364055c",
  "Cody Sadreameli": "a6662c7f-4c2a-486d-8aea-fd52859a1e8a",
  "Mason Spector": "ba296667-9305-4ef1-8f5a-8fa55bcad169",
  "Amita Gupta": "e27ad64a-8a8e-472b-967b-22c2667a1084"
 },
 "meta": {
  "matchesPlayed": 65,
  "provisionalMatches": 0,
  "weeks": "1-12",
  "totalPlayers": 254,
  "ratingHistoryWeeks": [
   1,
   2,
   3,
   4,
   5,
   6,
   7,
   8,
   9,
   10,
   11,
   12
  ],
  "divisionSlug": "7906ad17",
  "hasPlayoffs": true,
  "typicalDay": "Wednesdays",
  "detailFile": "detail-7906ad17.js",
  "clubName": "",
  "divisionName": "4.5",
  "leagueType": "travel",
  "seasonSlug": "2026-spring",
  "seasonLabel": "Spring 2026",
  "seasonStatus": "archived",
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
   "crossPodMatchups": 6,
   "totalMatchups": 66,
   "reported": {
    "South": [
     "ACE",
     "Bounce Malvern",
     "Bounce Philly",
     "Dill Dinkers Hatboro",
     "Four Seasons",
     "Jersey Devil"
    ],
    "North": [
     "Flemington",
     "Monroe",
     "Pickle House",
     "Pickleball Kingdom Watchung",
     "Pickleball Palace",
     "Picklr Fair Lawn"
    ]
   },
   "schedule": {
    "Pod 1": [
     "ACE",
     "Bounce Malvern",
     "Bounce Philly",
     "Dill Dinkers Hatboro",
     "Flemington",
     "Four Seasons",
     "Jersey Devil",
     "Monroe",
     "Pickle House",
     "Pickleball Kingdom Watchung",
     "Pickleball Palace",
     "Picklr Fair Lawn"
    ]
   }
  }
 }
};
  DATA.meta.asOf = "2026-08-31T20:20:21.407Z";
  window.DATA = DATA;
  window.CPL_DATASETS = window.CPL_DATASETS || {};
  window.CPL_DATASETS["7906ad17"] = DATA;
})();
